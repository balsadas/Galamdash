import React from "react";


function Error404() {
    return (
        <div className="min-w-screen min-h-screen items-center justify-center flex">
            <div className="shadow-xl rounded-xl bg-[#fff] flex justify-center items-center md:w-[30vw] md:h-[20vw] w-[90%] h-[60vw]">
                <div className="flex justify-center items-center  border-[3px] md:p-16 rounded-xl p-16 border-red-200">
                <img src="./image/computer.png" className="md:w-[7vw] md:h-[7vw] w-[17vw] h-[17vw] "/>
                <h2 className="font-bold ml-4 md:text-[2vw] text-[6vw] text-[red]">Error404</h2>
                </div>
            </div>
        </div>
    )
}

export default Error404;