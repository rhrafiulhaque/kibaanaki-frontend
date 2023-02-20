const Checkout = () => {
    return (
        <div className="container grid grid-cols-12 items-start pb-16 pt-4">
            <div className="col-span-8 border border-gray-200 p-4 rounded">
                <h3 className="text-lg font-medium capitalize mb-4 bg-[#E9E4E4] p-4 text-gray-600 rounded w-full">Billing Details</h3>
                <div className="space-y-4">
                    <div>
                        <label className="text-gray-600 mb-2 block">Name <span className="text-primary">*</span></label>
                        <input type="text" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">Company Name <span className="text-primary">*</span></label>
                        <input type="text" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">Country <span className="text-primary">*</span></label>
                        <input type="text" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">Street Address <span className="text-primary">*</span></label>
                        <input type="text" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">City <span className="text-primary">*</span></label>
                        <input type="text" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">Zip Code <span className="text-primary">*</span></label>
                        <input type="text" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">Phone Number <span className="text-primary">*</span></label>
                        <input type="text" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">Email Address <span className="text-primary">*</span></label>
                        <input type="text" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                    </div>
                </div>
            </div>

            {/* checkout total item start  */}
            <div className="col-span-4 lg:mt-24 border border-gray-200 p-4 rounded">
                <h3 className="text-lg font-medium capitalize mb-4 bg-[#E9E4E4] p-4 text-gray-600 rounded w-full">Your Orders</h3>
                <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">order summery</h4>
                <div className="  space-y-2 divide-y-2">
                    <div className="flex justify-between pt-2">
                        <div>
                            <h5 className="text-gray-800 font-medium">Italian Shape Sofa</h5>
                            <p className="text-sm text-gray-600">Size: M</p>
                        </div>
                        <p className="text-gray-600">
                            x3
                        </p>
                        <p className="text-gray-800 font-medium">$320</p>
                    </div>
                    <div className="flex justify-between pt-2">
                        <div>
                            <h5 className="text-gray-800 font-medium">Italian Shape Sofa</h5>
                            <p className="text-sm text-gray-600">Size: M</p>
                        </div>
                        <p className="text-gray-600">
                            x3
                        </p>
                        <p className="text-gray-800 font-medium">$320</p>
                    </div>
                    <div className="flex justify-between pt-2">
                        <div>
                            <h5 className="text-gray-800 font-medium">Italian Shape Sofa</h5>
                            <p className="text-sm text-gray-600">Size: M</p>
                        </div>
                        <p className="text-gray-600">
                            x3
                        </p>
                        <p className="text-gray-800 font-medium">$320</p>
                    </div>

                    <div>
                        {/* Total and Subtotal Section Start  */}
                        <div className="flex justify-between border-b border-gray-200 font-medium py-3 uppercase ">
                            <p>Subtotal</p>
                            <p>$320</p>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 font-medium py-3 uppercase">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
                            <p className="font-semibold">Total</p>
                            <p>$320</p>
                        </div>
                        <div className="flex items-center mb-4 mt-2">
                            <input type="checkbox" id="agreement" className="border border-red-600 focus:ring-0 rounded-sm cursor-pointer w-3 h-3" />
                            <label htmlFor="agreement" className="text-gray-600 ml-3 cursor-pointer text-sm">Agree to our <span className="text-primary">Terms and Condition</span></label>
                        </div>
                        <button className="w-full border border-primary px-8 py-2 bg-primary text-white rounded  hover:bg-transparent hover:text-primary transition">Checkout</button>
                    </div>
                    {/* Total and Subtotal Section End  */}

                </div>
            </div>
            {/* checkout total item end  */}

        </div>
    );
};

export default Checkout;