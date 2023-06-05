import axios from "axios";
import React, { useEffect, useState } from "react";
import setting from '../setting.json'
import time from '../time'
import { Link } from "react-router-dom";

const com = [
    { img: './photo/photo4.jpg', title: 'Balshayew Myrat', title1: 'Magtymguly' },
    { img: './photo/photo5.jpg', title: 'Balshayew Myrat', title1: 'Soz' },
    { img: './photo/photo14.jpg', title: 'Balshayew Myrat', title1: 'Magtymguly2' },
    { img: './photo/photo1.jpg', title: 'Balshayew Myrat', title1: 'Magtymguly3' },
    { img: './photo/photo6.jpg', title: 'Balshayew Myrat', title1: 'Magtymguly4' }

]


function MeanComment() {

    const [comments, setComments] = useState([])

    const GetComments = () => {
        axios.get(`${setting.SERVER}/api/comment/main`).then((res) => {
            setComments(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        GetComments()
    }, [])

    console.log(comments)

    return (

        <div>
            <ul className="p-2">
                {comments.map((Com, i) => (
                    <li key={i} className="p-5 shadow-lg rounded-xl bg-[#fff] mt-3" >
                        <Link to={`/IntoPaper/${Com.Post.id}`}>

                            <div className="flex items-center">
                                {console.log(Com)}
                                <img src={`${setting.SERVER}/${Com.User.img}`} className="md:w-[3vw] md:h-[3vw] w-[10vw] h-[10vw] object-cover rounded-full" />
                                <div className="ml-4">
                                    <p className="md:text-[1.2vw] text-[3.5vw] font-[500]">{Com.User.nick}</p>
                                    <p className="md:text-[.9vw] text-[2.5vw] text-[#929292] md:mt-1 ">Teswir yazdy:
                                        <span className="text-[#74ebd6] font-[500] underline mx-2">{Com.Post.title}</span>
                                        posta
                                        <span className="mx-1 text-[3vw] md:text-[.9vw]">{time(Com.time)}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="md:text-[1vw]   pr-2 indent-[3.5rem] mt-3 text-[3vw] font-[500]">
                                <p className="w-[90%] truncate h-full">{Com.content}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>

        </div>

    )
}


export default MeanComment;