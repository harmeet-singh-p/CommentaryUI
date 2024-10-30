import { Button } from "@mantine/core";
import {  FaRegUser } from "react-icons/fa";

function Header() {
    return (
       
        <div className="flex  flex-row items-center bg-gradient-to-r from-blue-500 to-cyan-500 ">
            <div >
                <img className="w-14 ml-4 mr-2" alt="headerLogo" src="../../public/nwg-social-media-logo.png"></img>
            </div>
            <div className="basis-1/2 text-left ">
                <h1 className="text-3xl text-white ">
                    Commentary UI
                </h1>
            </div>

            <div className="flex flex-row text-white basis-1/4 pl-16">
                {/* <Button onClick={() => setCount((count) => count + 1)}> */}
                    <FaRegUser className="text-right items-right " style={{margin:'auto'}} size={24} ></FaRegUser> 
                    <span>singhma</span>
                {/* </Button>                  */}
            </div>
        </div>
    );
}

export default Header

