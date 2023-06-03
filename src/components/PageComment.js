import React from "react";

const com = [
    { img: './photo/photo4.jpg', title: 'Balshayew Myrat', title1: 'Magtymguly' },
    { img: './photo/photo5.jpg', title: 'Balshayew Myrat', title1: 'Soz' },
    { img: './photo/photo14.jpg', title: 'Balshayew Myrat', title1: 'Magtymguly2' },
    { img: './photo/photo1.jpg', title: 'Balshayew Myrat', title1: 'Magtymguly3' },
    { img: './photo/photo6.jpg', title: 'Balshayew Myrat', title1: 'Magtymguly4' }

]


function MeanComment() {
    return (
      
            <div>
                <ul className="p-2">
                    {com.map((Com, i) => (
                        <li key={i} className="p-5 shadow-lg rounded-xl bg-[#fff] mt-3" >
                            <div className="flex items-center">
                                <img src={Com.img} className="md:w-[3vw] md:h-[3vw] w-[10vw] h-[10vw] object-cover rounded-full" />
                                <div className="ml-4">
                                    <p className="md:text-[1.2vw] text-[3.5vw] font-[500]">{Com.title}</p>
                                    <p className="md:text-[.9vw] text-[2.5vw] text-[#929292] md:mt-1 ">Teswir yazdy:
                                        <span className="text-[#74ebd6] font-[500] underline mx-2">{Com.title1}</span>
                                        posta
                                        <span className="mx-1 text-[3vw] md:text-[.9vw]">19 min </span>
                                    </p>
                                </div>
                            </div>
                            <div className="md:text-[1vw]   pr-2 indent-[3.5rem] mt-3 text-[3vw] font-[500]">
                                <p className="w-[90%] truncate h-full">fklfvoiwefjoiqekojerferiojgqeorifqrpofkeroigjfdoivgkfgvkeofihjmjugtjumtujntujtuijk</p>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
     
    )
}


export default MeanComment;