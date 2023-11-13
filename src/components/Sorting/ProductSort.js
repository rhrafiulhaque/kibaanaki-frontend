import { useDispatch, useSelector } from "react-redux";
import { useGetBrandListQuery } from "../../features/brand/brandApi";
import { useGetCategoryListQuery } from "../../features/category/categoryApi";
import { addBrand, addCategory } from "../../features/filter/filterSlice";
import { useSearchedProductQuery } from "../../features/product/productApi";
import Product from "../Home/Product";
import Loading from "../Loading/Loading";



const ProductSort = () => {
    const searchKeyword = useSelector((state) => state.filter.searchKeyword);
    const categoryFilter = useSelector((state) => state.filter.category);
    const brandFilter = useSelector((state) => state.filter.brand);
    const { data: allProducts, isLoading, isError, error } = useSearchedProductQuery({ searchKeyword, categoryFilter, brandFilter });
    const { data: categories, isLoading: catLoading } = useGetCategoryListQuery()
    const { data: brands, isLoading: brandLoading } = useGetBrandListQuery()

    const dispatch = useDispatch()
    const { data } = allProducts || {};
    const { data: category } = categories || {};
    const { data: brand } = brands || {};
    let content = null;
    let noContent = null;
    if (isLoading) {
        content = <Loading />
    }
    if (catLoading || brandLoading) {
        return <Loading />
    }

    if (!isLoading && isError) {
        noContent = <p className='text-red-500'>There have no Products Of this "{searchKeyword}"</p>
    }
    if (!isLoading && !isError && data.length > 0) {
        content = data.map((product) => <Product key={product.id} product={product} />)
    }
    if (!isLoading && !isError && data.length === 0) {
        content = <p className='text-red-500'>There have no Products</p>
    }


    return (
        <div className='container grid grid-cols-4 gap-6 mt-14 items-start'>
            <div className='col-span-1 bg-white px-4 pb-6 shadow rounded '>
                {/* Categories Section  */}
                <div className='divide-y divide-gray-200 space-y-5'>
                    <div>
                        <h1 className='uppercase py-5 font-medium text-xl'>Categories</h1>
                        <div className='space-y-2 '>
                            {
                                category.map((cat) => (
                                    <div className='flex items-center'>
                                        <input type="checkbox" id='cat-1' onClick={() => dispatch(addCategory(cat.category))} className='text-primary' />
                                        <label htmlFor="cat-1" className='text-gray-600 ml-3 cursor-pointer'>{cat.category.charAt(0).toUpperCase() + cat.category.slice(1)}</label>
                                        <span className=' ml-auto text-gray-600 text-sm'>(15)</span>

                                    </div>
                                ))
                            }

                        </div>
                    </div>

                    {/* Brands Section  */}
                    <div className='pt-4'>
                        <h1 className='uppercase py-5 font-medium text-xl'>Brand</h1>
                        <div className='space-y-2 '>

                            {
                                brand.map((brand) => (
                                    <div className='flex items-center'>
                                        <input type="checkbox" id='cat-1' onClick={() => dispatch(addBrand(brand.brand))} />
                                        <label htmlFor="cat-1" className='text-gray-600 ml-3 cursor-pointer'>{brand.brand.charAt(0).toUpperCase() + brand.brand.slice(1)}</label>

                                    </div>
                                ))
                            }
                        </div>
                    </div>


                    {/* Price Section

                    <div className='pt-4'>
                        <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Price</h3>
                        <div className='mt-4 flex items-center'>
                            <input type="text" className='w-full border-gray-600 focus:border-primary foucus:ring-0 px-3 -y-1 text-gray-600 t4ext-sm shadow-sm rounded ' placeholder="min" />
                            <span className='mx-3 text-gray-500'>-</span>
                            <input type="text" className='w-full border-gray-600 focus:border-primary foucus:ring-0 px-3 -y-1 text-gray-600 t4ext-sm shadow-sm rounded ' placeholder="max" />                        </div>
                    </div> */}

                    {/* Size Section 
                    <div className='pt-4'>
                        <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Size</h3>
                        <div className='flex items-center gap-2'>
                            <div className='size-selector'>
                                <input type="radio" name='size' className='hidden' id='size-xs' />
                                <label htmlFor="size-xs" className='text-xs border border-primary rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                    XS
                                </label>
                            </div>
                            <div className='size-selector'>
                                <input type="radio" name='size' className='hidden' id='size-m' />
                                <label htmlFor="size-m" className='text-xs border border-primary rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                    M
                                </label>
                            </div>
                            <div className='size-selector'>
                                <input type="radio" name='size' className='hidden' id='size-l' />
                                <label htmlFor="size-l" className='text-xs border border-primary rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                    L
                                </label>
                            </div>
                            <div className='size-selector'>
                                <input type="radio" name='size' className='hidden' id='size-lg' />
                                <label htmlFor="size-lg" className='text-xs border border-primary rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                    LG
                                </label>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className='col-span-3'>
                {noContent && <div className="flex align-middle text-center justify-center items-center lg:h-[220px]">
                    <h1>{noContent}</h1>
                </div>}
                <div className='grid grid-cols-3 gap-6'>

                    {content}
                </div>

            </div>

        </div>

    );
};

export default ProductSort;