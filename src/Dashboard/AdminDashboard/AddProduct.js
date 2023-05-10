import React, { useState } from 'react';
import AdminDashboardLayout from '../AdminDashboardLayout';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAddProductMutation } from '../../features/product/productApi';



const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [model, setModel] = useState('');
    const [description, setDescription] = useState('');
    const [sizes, setSizes] = useState([]);
    const [imageLink, setImageLink] = useState('');

    const [addProduct,{isLoading,isError}] =useAddProductMutation();
      
    const handleSize = (e) => {
        const size = e.target.value;
         if(e.target.checked){
            setSizes([...sizes,size])
         }else{
            setSizes(sizes.filter((s)=>s!==size));
         }
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        addProduct({
            productName,
            category,
            brand,
            price,
            model,
            sizes,
            description,
            imageLink
        })


        console.log({
            productName,category,brand,price,model,sizes,description
        })

    }

    return (
        <AdminDashboardLayout>
            <div className='col-span-9 '>
                <h2 className='font-semibold text-lg text-gray-600 py-5'> Add New Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className='space-y-4'>
                        <div>
                            <label className="text-gray-600 mb-2 block">Product Name <span className="text-primary">*</span></label>
                            <input type="text" className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" onChange={(e)=>setProductName(e.target.value)} />
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <label className="text-gray-600 mb-2 block">Category <span className="text-primary">*</span></label>
                                <input type="text" className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" onChange={(e)=>setCategory(e.target.value)} />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">Brand <span className="text-primary">*</span></label>
                                <input type="text" className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" onChange={(e)=>setBrand(e.target.value)}  />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <label className="text-gray-600 mb-2 block">Price <span className="text-primary">*</span></label>
                                <input type="number" className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" onChange={(e)=>setPrice(e.target.value)}  />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">SKU Number <span className="text-primary">*</span></label>
                                <input type="text" className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" onChange={(e)=>setModel(e.target.value)}  />
                            </div>
                        </div>   
                        <div>
                            <label className="text-gray-600 mb-2 block">Image Link <span className="text-primary">*</span></label>
                            <input type="text" className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" onChange={(e)=>setImageLink(e.target.value)} />
                        </div>               

                        {/* Product Size Start */}
                        <div className='pt-4'>
                            <h3 className='text-base text-gray-800 mb-3 uppercase font-medium'>Size</h3>
                            <div className='flex items-center gap-2'>
                                <div className='size-selector'>
                                    <input type="checkbox" value={'S'} name='size' className='hidden' id='size-s' onChange={handleSize} />
                                    <label htmlFor="size-s" className='text-sm border border-primary rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        S
                                    </label>
                                </div>
                                <div className='size-selector'>
                                    <input type="checkbox" value={'M'} name='size' className='hidden' id='size-m' onChange={handleSize} />
                                    <label htmlFor="size-m" className='text-sm border border-primary rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        M
                                    </label>
                                </div>
                                <div className='size-selector'>
                                    <input type="checkbox" value={'L'} name='size' className='hidden' id='size-l' onChange={handleSize} />
                                    <label htmlFor="size-l" className='text-sm border border-primary rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        L
                                    </label>
                                </div>
                                <div className='size-selector'>
                                    <input type="checkbox" value={'XL'}  name='size' className='hidden' id='size-xl' onChange={handleSize} />
                                    <label htmlFor="size-xl" className='text-sm border border-primary rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        XL
                                    </label>
                                </div>
                                <div className='size-selector'>
                                    <input type="checkbox" value={'XXL'}  name='size' className='hidden' id='size-xxl' onChange={handleSize} />
                                    <label htmlFor="size-xxl" className='text-sm border border-primary rounded-sm h-6 w-8 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        XXL
                                    </label>
                                </div>
                                <div className='size-selector'>
                                    <input type="checkbox" value={'XXXL'}  name='size' className='hidden' id='size-xxxl' onChange={handleSize} />
                                    <label htmlFor="size-xxxl" className='text-sm border border-primary rounded-sm h-6 w-10 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        XXXL
                                    </label>
                                </div>


                            </div>
                        </div>
                        {/* Product Size End */}

                        <div className='h-36'>
                            {<ReactQuill theme="snow" className='h-36' value={description} onChange={setDescription} />}
                        </div>
                    </div>
                    <button className='bg-primary text-white px-4 py-2 rounded mt-16 border border-primary hover:bg-transparent hover:text-primary transition'>Add</button>
                </form>

            </div>

        </AdminDashboardLayout>
    );
};

export default AddProduct;