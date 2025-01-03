import Image from "next/image"

const ShoppingCom1 = () => {
    return (
        <div className="w-[390] h-[729] md:w-[1170] lg:w-[1280] bg-[rgba(249,249,249,1)] md:h-[749] xl:w-[1440] md:mt-[132] ">
            <div className="absolute md:w-[1170] lg:w-[1280] xl:w-[1440]">
                <h1 className="text-2xl ml-6 mt-9 md:ml-[188] font-clash">Your shopping cart</h1>
                
                <div className="flex">
                <span className="sm:hidden md:block xl:ml-[188] md:ml-[188] font-satoshi">Product</span>
                <span className="sm:hidden md:block xl:ml-[650] md:ml-[400] font-satoshi ">Quantity</span>
                <span className="sm:hidden md:block xl:ml-[374] md:ml-[400] font-satoshi ">Total</span>
            </div>
            <Image src="/photos/Divider.png" alt="div" height={100} width={100} className=" sm:hidden md:block h-px xl:w-[1172] ml-[188] md:w-[970]"></Image>
            </div>
            <div className="absolute flex gap-[22]">
                <Image src="/photos/Product Image.png" alt="Product" height={200} width={200} className="ml-[24] mt-[110] h-[166] w-[133] md:ml-[188]"></Image>
                <div className="w-[179] h-[166]">
                    <h2 className="text-lg mt-[110] font-clash">Graystone vase</h2>
                    <p className="mt-[15] text-sm font-satoshi">A timeless ceramic vase with
                        a tri color grey glaze.</p>
                    <span className="font-satoshi mt-[10px] xl:ml-[985] md:mt-[-85] md:absolute md:ml-[760] ">£85</span>
                    <span className="sm:hidden md:block font-satoshi mt-[10px]">£85</span>
                    <div className="flex mt-[16] gap-[20] ml-[20] xl:ml-[550] md:mt-[-95] md:ml-[300]">
                        <span className="text-gray-200">-</span>
                        <span className="font-satoshi">1</span>
                        <span className="text-gray-200">+</span>
                    </div>

                </div>
            </div>



            <div className="absolute flex gap-[22] mt-[204]">
                <Image src="/photos/tree.png" alt="Product" height={200} width={200} className="ml-[24] mt-[110] h-[166] w-[133] md:ml-[188]"></Image>
                <div className="w-[179] h-[166]">
                    <h2 className="text-lg mt-[110] font-clash">Basic white vase</h2>
                    <p className="mt-[15] text-sm font-satoshi">Beautiful and simple this is
                        one for the classics.</p>
                    <span className="font-satoshimt-[10px] xl:ml-[985] md:mt-[-85] md:absolute md:ml-[760]">£125</span>
                    <span className="sm:hidden md:block font-satoshi mt-[10px]">£85</span>
                    <div className="flex mt-[16] gap-[20] ml-[20] xl:ml-[550] md:mt-[-95] md:ml-[300]">
                        <span className="text-gray-200">-</span>
                        <span className="font-satoshi">1</span>
                        <span className="text-gray-200">+</span>
                    </div>

                </div>
            </div>
            <Image src="/photos/Divider.png" alt="divider" height={100} width={100} className="absolute ml-[24] mt-[504] w-[342] md:ml-[188] md:w-[1172] md:h-px"></Image>

            <div className="absolute ml-[84] mt-[520] md:ml-[800] xl:ml-[1073]">
                <div className="flex ">
                <p className="font-clash ml-[132] text-lg text-[rgba(78,77,147,1)]">Subtotal</p>
                <span className="font-clash text-lg ml-[45]">£210</span>
                </div>
                <p className="font-satoshi text-sm text-[rgba(78,77,147,1)]">Taxes and shipping are calculated at checkout</p>

            </div>
            <button className="font-satoshi bg-[rgb(42,37,75)] w-[342] h-[56] mt-[590] ml-[24] text-white md:ml-[900] xl:ml-[1190] md:h-[56] md:w-[172]">Go to checkout</button>
        </div>


    )
}
export default ShoppingCom1