import React from "react";
import SubPlan from "../lilcomponents/subPlan";
import Aside from "../lilcomponents/aside";
import LoggedinBuyerNav from "../component/loggedinbuyernav";
import { profilepic } from "../component/profilepic";


export default function ProfilePage() {
    return(
        <div className="bg-white">
        <div className="pt-10 ">
           <div className="w-full ">
           <div>
            <div className="">
                <h6 className="p-8">Edit your profile</h6>
                <div className="flex flex-col justify-center self-center w-full">
                    <div className="flex flex-col self-center">
                    <div className="rounded-full bg-black justify-center self-center" style={{width:'70px',height:'70px'}}>
                        
<img className="inline w-full h-full rounded-full" src={profilepic} style={{}} alt="..." />
                    </div>
                    <h6 className="my-2">Edit your Picture</h6>
                    </div>
                </div>
                <div>
                    <form action="">
                        <div className="flex flex-col md:flex-row justify-between px-10 lg:px-24">                            
                        <input type="text" name="name" placeholder="Name:" className="flex w-full lg:mx-10 my-3 border rounded shadow-sm" style={{borderColor:`rgba(51, 51, 51, 0.2)`}} />
                        <input type="text" name="name" placeholder="City:" className="flex w-full lg:mx-10 my-3 border rounded shadow-sm" style={{borderColor:`rgba(51, 51, 51, 0.2)`}} />
                        </div>
                        <div className="flex w-full flex-col md:flex-row justify-between px-10 lg:px-24">                            
                        <input type="text" name="name" placeholder="Email:" className="flex w-full lg:mx-10 my-3 border rounded shadow-sm" style={{borderColor:`rgba(51, 51, 51, 0.2)`}} />
                        <input type="text" name="name" placeholder="Address:" className="flex w-full lg:mx-10 my-3 border rounded shadow-sm" style={{borderColor:`rgba(51, 51, 51, 0.2)`}} />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between px-10 lg:px-24">                            
                        <input type="text" name="name" placeholder="Country:" className="flex w-full lg:mx-10 my-3 border rounded shadow-sm" style={{borderColor:`rgba(51, 51, 51, 0.2)`}} />
                        <input type="text" name="name" placeholder="NIN:" className="flex w-full lg:mx-10 my-3 border rounded shadow-sm" style={{borderColor:`rgba(51, 51, 51, 0.2)`}} />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between px-10 lg:px-24">                            
                        <input type="text" name="name" placeholder="State:" className="flex w-full lg:mx-10 my-3 border rounded shadow-sm" style={{borderColor:`rgba(51, 51, 51, 0.2)`}} />
                        <input type="text" name="name" placeholder="Driver's license:" className="flex w-full lg:mx-10 my-3 border rounded shadow-sm" style={{borderColor:`rgba(51, 51, 51, 0.2)`}} />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between px-10 lg:px-24">                            
                        <input type="text" name="name" placeholder="Interest:" className="flex w-full lg:mx-10 my-3 border rounded shadow-sm" style={{borderColor:`rgba(51, 51, 51, 0.2)`}} />
                        <div className="flex w-full justify-center md:mx-10">
                        <input type="submit" name="name" value='Done' placeholder="Name:" className="flex my-3 py-3 px-24 border rounded shadow-sm" style={{backgroundColor:`rgba(112, 46, 178, 0.45)`}} />
                        </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="">
                <h6 className="p-8">Card</h6>
                <div>
                    <form action="">
                        <div className="flex flex-row justify-between px-10 lg:px-24">                            
                        <input type="text" name="name" placeholder="Name:" className="flex w-full md:mx-10 my-3 border rounded shadow-sm" style={{borderColor:`rgba(51, 51, 51, 0.2)`}} />
                        </div>
                        <div className="flex flex-row justify-between px-10 md:px-24">                            
                        <input type="text" name="name" placeholder="Card Number:" className="flex w-full md:mx-10 my-3 border rounded shadow-sm" style={{borderColor:`rgba(51, 51, 51, 0.2)`}} />
                        </div>
                        <div className="flex flex-row justify-between gap-2 px-10 md:px-24">                            
                        <input type="text" name="name" placeholder="Date: MM/YY" className="flex w-full md:mx-10 my-3 border rounded shadow-sm" style={{borderColor:`rgba(51, 51, 51, 0.2)`}} />
                        <input type="text" name="name" placeholder="CVV:" className="flex w-full md:mx-10 my-3 border rounded shadow-sm" style={{borderColor:`rgba(51, 51, 51, 0.2)`}} />
                        </div>
                        <div className="px-5">
                            <h6 className="text-center" style={{color:'#DF1D1D'}}>*Disclaimer: Please do not share this information with anyone, all transactions must 
be performed willingly</h6>
                        </div>
                        <div className="flex w-full lg:mx-10 justify-center">
                        <input type="submit" name="name" value='Continue' placeholder="Name:" className="flex my-3 py-3 px-24 border rounded shadow-sm" style={{backgroundColor:`rgba(112, 46, 178, 0.45)`}} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-center">
            {/* <SubPlan /> */}
        </div>
           </div>
           </div>
    </div>
    )
}