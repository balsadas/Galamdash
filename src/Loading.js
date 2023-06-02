import React from "react";
import { ClimbingBoxLoader } from "react-spinners";


function Loading() {
    return (
        <div className="min-w-screen min-h-screen flex justify-center items-center">
            <ClimbingBoxLoader color="#36d7b7" />
        </div>
    )
}


export default Loading;