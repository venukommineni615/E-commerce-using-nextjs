
import ProductCarousel from "../components/ProductCarousel"
export default function Product(){
    return(
        <div className="grid grid-cols-2 gap-4 w-full h-screen p-4 place-items-center overflow-hidden">
            <ProductCarousel></ProductCarousel>
            <div className="w-full h-full rounded-box">
                <div className="w-full h-[70%] grid grid-rows-3">
                    <div className="w-full h-[20%] flex flex-col ">
                        <p className="w-full font-bold text-2xl px-2 ">Item name</p>
                        <p className="w-full px-2 ">sub tag</p>
                    </div>
                    <div className="w-full h-[20%] p-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eligendi! Tenetur incidunt omnis, similique distinctio optio, voluptatem amet accusamus consequatur, neque officia possimus laboriosam minima obcaecati. Ipsam aspernatur natus suscipit.</div>
                    <div className="grid grid-cols-3 place-items-center w-full h-[30%] ">
                        <div  className="grid grid-rows-2 place-items-center" >
                            <p className="font-semibold text-lg">
                                SIZE & FIT
                            </p>
                            <p>
                              Fitting:Relaxed
                                </p>
                        </div>
                                
                        <div className="grid grid-rows-2 place-items-center" >
                           
                            <p className="font-semibold text-lg">
                            MATERIALS 
                            </p>
                            <p>
                              Fitting:Relaxed
                                </p>
                            </div>
                        <div  className="grid grid-rows-2 place-items-center">
                        <p className="font-semibold text-lg">
                            DETAILS 
                            </p>
                            <p>
                              Color:White
                                </p>
                            </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 place-items-center w-full h-[15%]">
                    <p className="font-semibold">Quantity</p>
                    <div className="grid grid-cols-3 place-items-center w-full border-[1px]">
                        <button className="border-[1px] w-full h-full text-center font-medium active:bg-neutral-300">-</button>
                        <div className="border-[1px] w-full h-full text-center font-medium">1</div>
                        <button className="border-[1px] w-full h-full text-center font-medium active:bg-neutral-300">+</button>
                    </div>
                    <p className="font-semibold">Rs.499</p>
                </div>
                <div className="w- full grid grid-cols-2 place-items-center  h-[15%]">
                    <div className="border-2 p-2 rounded-md bg-neutral-800 text-neutral-50 hover:bg-neutral-900 cursor-pointer">ADD TO CART</div>
                    <div className="border-2 p-2 rounded-md bg-neutral-800 text-neutral-50 hover:bg-neutral-900 cursor-pointer">BUY NOW</div>
                </div>
            </div>
        </div>
    )
}