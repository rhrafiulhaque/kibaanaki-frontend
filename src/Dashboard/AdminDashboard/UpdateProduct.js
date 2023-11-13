import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/Loading';
import { useGetBrandListQuery } from '../../features/brand/brandApi';
import { useGetCategoryListQuery } from '../../features/category/categoryApi';
import { useGetProductQuery, useUpdateProductMutation } from '../../features/product/productApi';
import { storage } from '../../firebase.init';
import AdminDashboardLayout from '../AdminDashboardLayout';



const UpdateProduct = () => {
    const { id } = useParams()


    // const [addProduct, { isLoading, isError, isSuccess }] = useAddProductMutation();
    const { data: allCategory, isLoading: categoryLoading, isError: categoryError, error: catError } = useGetCategoryListQuery();
    const { data: product, isLoading: productLoading, isError: productIsError, error: productError } = useGetProductQuery(id);
    const { data: allBrand, isLoading: brandLoading, isError: brandisError, error: brandError } = useGetBrandListQuery();
    const [updateProduct, { isLoading: updateLoading, isError: updateIsError, isSuccess, error: updateError }] = useUpdateProductMutation()



    const [description, setDescription] = useState('');
    const [sizes, setSizes] = useState([]);
    const [imageThree, setImageThree] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dataWithImage, setDataWithImage] = useState('');

    const navigate = useNavigate()
    const handleSize = (e) => {
        const size = e.target.value;
        if (e.target.checked) {
            setSizes([...sizes, size])
        } else {
            setSizes(sizes.filter((s) => s !== size));
        }
    }

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            setImagePreview(URL.createObjectURL(e.target.files[0]))
        }
    }




    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            id,
            brand: e.target.brand.value,
            category: e.target.category.value,
            description,
            productName: e.target.productName.value,
            price: e.target.price.value,
            availableQuantity: e.target.availableQuantity.value,
            sizes
        }

        setDataWithImage({
            id,
            brand: e.target.brand.value,
            category: e.target.category.value,
            description,
            productName: e.target.productName.value,
            price: e.target.price.value,
            availableQuantity: e.target.availableQuantity.value,
            sizes,
            imageUrl
        })
        updateProduct(data)


        //    Image Submission Url Start

        if (image) {
            const imageRef = ref(storage, `images/${image.name}`);
            let newUrl = null;
            try {
                setLoading(true); // Set loading state for image upload
                await uploadBytesResumable(imageRef, image);
                const url = await getDownloadURL(imageRef);
                if (url) {
                    newUrl = url;
                } else {
                    console.log("URL is null or undefined");
                }
            } catch (error) {
                console.log(error.message);
            }
            if (newUrl) {
                setImageUrl(newUrl);
            }
            setLoading(false); // Unset loading state after image upload
        }

        // //    Image Submission Url End 
        // // navigate('/admin/productlist')
    }



    useEffect(() => {
        if (imageUrl) {
            dataWithImage.imageUrl = imageUrl
            updateProduct(dataWithImage)
        }

    }, [imageUrl]);



    useEffect(() => {
        if (isSuccess) {
            toast.success('Product Updated!!');
        }

    }, [isSuccess]);

    if (categoryLoading || productLoading || brandLoading || loading || updateLoading) {
        return <Loading />
    }




    return (
        <AdminDashboardLayout>
            <div className='col-span-9  '>
                <h2 className='font-semibold text-lg text-gray-600 py-5'> Update Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className='space-y-4'>
                        <div>
                            <label className="text-gray-600 mb-2 block">Product Name <span className="text-primary">*</span></label>
                            <input type="text" name='productName' defaultValue={product.product.productName} className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <label className="text-gray-600 mb-2 block">Category <span className="text-primary">*</span></label>
                                <select name="category" defaultValue={product.product.category} id="" required className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                                    <option value="">Select Category</option>
                                    {allCategory.data.map((cat) => (
                                        <option value={cat.category.charAt(0).toUpperCase() + cat.category.slice(1)}>{cat.category.charAt(0).toUpperCase() + cat.category.slice(1)}</option>
                                    ))}
                                </select>
                            </div>


                            <div>
                                <label className="text-gray-600 mb-2 block">Brand <span className="text-primary">*</span></label>
                                <select name="brand" defaultValue={product.product.brand} id="" required className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                                    <option value="">Select Brand</option>
                                    {allBrand.data.map((brand) => (
                                        <option value={brand.brand.charAt(0).toUpperCase() + brand.brand.slice(1)}>{brand.brand.charAt(0).toUpperCase() + brand.brand.slice(1)}</option>
                                    ))}
                                </select>
                            </div>

                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <label className="text-gray-600 mb-2 block">Price <span className="text-primary">*</span></label>
                                <input name='price' defaultValue={product.product.price} type="number" className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">Available Product Quanity <span className="text-primary">*</span></label>
                                <input name='availableQuantity' defaultValue={product.product.availableQuantity || 0} type="text" className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                            </div>
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">3D Image Link <span className="text-primary">(Optional)</span></label>
                            <input type="text" className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" onChange={(e) => setImageThree(e.target.value)} />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Product Image Upload <span className="text-primary">*</span></label>
                            <input type="file" className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" onChange={handleImageChange} />
                        </div>

                        {/* Image Preview  */}
                        <div className='flex-shrink-0'>

                            <img src={product.product.imageUrl} className="h-48 object-contain" alt="product_image" />
                        </div>

                        {/* Product Size Start */}
                        <div className='pt-4'>
                            <h3 className='text-base text-gray-800 mb-3 uppercase font-medium'>Size</h3>
                            <div className='flex items-center gap-2'>
                                <div className='size-selector'>
                                    <input type="checkbox" defaultChecked={product.product.size.includes('S')} value={'S'} name='size' className='hidden' id='size-s' onChange={handleSize} />
                                    <label htmlFor="size-s" className='text-sm border border-primary rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        S
                                    </label>
                                </div>
                                <div className='size-selector'>
                                    <input type="checkbox" defaultChecked={product.product.size.includes('M')} value={'M'} name='size' className='hidden' id='size-m' onChange={handleSize} />
                                    <label htmlFor="size-m" className='text-sm border border-primary rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        M
                                    </label>
                                </div>
                                <div className='size-selector'>
                                    <input type="checkbox" defaultChecked={product.product.size.includes('L')} value={'L'} name='size' className='hidden' id='size-l' onChange={handleSize} />
                                    <label htmlFor="size-l" className='text-sm border border-primary rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        L
                                    </label>
                                </div>
                                <div className='size-selector'>
                                    <input type="checkbox" defaultChecked={product.product.size.includes('XL')} value={'XL'} name='size' className='hidden' id='size-xl' onChange={handleSize} />
                                    <label htmlFor="size-xl" className='text-sm border border-primary rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        XL
                                    </label>
                                </div>
                                <div className='size-selector'>
                                    <input type="checkbox" defaultChecked={product.product.size.includes('XXL')} value={'XXL'} name='size' className='hidden' id='size-xxl' onChange={handleSize} />
                                    <label htmlFor="size-xxl" className='text-sm border border-primary rounded-sm h-6 w-8 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        XXL
                                    </label>
                                </div>
                                <div className='size-selector'>
                                    <input type="checkbox" defaultChecked={product.product.size.includes('XXXL')} value={'XXXL'} name='size' className='hidden' id='size-xxxl' onChange={handleSize} />
                                    <label htmlFor="size-xxxl" className='text-sm border border-primary rounded-sm h-6 w-10 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        XXXL
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* Product Size End */}

                        <div className='h-36'>
                            {<ReactQuill theme="snow" className='h-36' defaultValue={product.product.description} onChange={setDescription} />}
                        </div>
                    </div>
                    <button className='bg-primary text-white px-4 py-2 rounded mt-16 border border-primary hover:bg-transparent hover:text-primary disabled:bg-transparent transition '>Update</button>
                </form>

            </div>

        </AdminDashboardLayout>
    );
};

export default UpdateProduct;