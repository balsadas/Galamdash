import React, { useEffect, useState } from 'react';
import img1 from './img/arrow.png'
import img2 from './img/arrow-right.png'
import axios from 'axios';
import setting from '../setting.json'
import img3 from '../Page/Galamdas1.png'

const post = [
    { id: 1, img: './photo/photo5.jpg', title: 'Zenanlaryn yeri dine ashanada daldir...', text: 'Öz kelläňizden çykanyňyzda, beýlekiler bilen hakykatdanam aragatnaşyk saklap bilersiňiz. Gatnaşyklaryňyzdan has lezzet alarsyňyz, sebäbi eden täsiriňiz hakda kän alada etmersiňiz we özüňizi beýlekiler bilen deňeşdirmersiňiz.' },
    { id: 2, img: './photo/photo6.jpg', title: 'Argument name we name  mohum?', text: 'Öz kelläňizden çykanyňyzda, beýlekiler bilen hakykatdanam aragatnaşyk saklap bilersiňiz. Gatnaşyklaryňyzdan has lezzet alarsyňyz, sebäbi eden täsiriňiz hakda kän alada etmersiňiz we özüňizi beýlekiler bilen deňeşdirmersiňiz.' },
    { id: 3, img: './photo/photo7.jpg', title: 'Ekizler paradoksy ya-da geljege syyahat mumkinmi?', text: 'Öz kelläňizden çykanyňyzda, beýlekiler bilen hakykatdanam aragatnaşyk saklap bilersiňiz. Gatnaşyklaryňyzdan has lezzet alarsyňyz, sebäbi eden täsiriňiz hakda kän alada etmersiňiz we özüňizi beýlekiler bilen deňeşdirmersiňiz.' }
]

const short = (text, length) => {
    if (text.length <= length) {
        return <>{text}</>
    }
    const short = `${text.slice(0, length)}...`

    return <>{short}</>
}




function UnderPost() {


    const [data, setData] = useState([])

    const dataFetch = async () => {
        await axios.get(`${setting.SERVER}/api/random`)
            .then(res => { setData(res.data) })
            .catch(err => { console.log(err) })
    }
    useEffect(() => {
        dataFetch()
    }, [])


    return (
        <div className='flex justify-center bg-[#fff] '>
            <div className='md:w-[70%] w-[90%]'>
                <div>
                    <h3 className='text-[#6B7280] font-[500] text-[5vw] md:text-[1.5vw]'>Bularam halap bilersiňiz:</h3>
                    <div className='h-1 rounded-lg w-full bg-[#e8e8e8e0] mt-3'></div>
                </div>
                <div className='mt-[2rem] '>
                    <ul className='grid grid-cols-3'>
                        {data?.map((post, i) => (
                            <li key={i} className='bg-[#e2e2e2c0] group hover:bg-[#ffffffe0] md:mt-0 mt-5 ml-3 hover:shadow-lg'>
                                <div>
                                {post?.img 
                                    ? 
                                    <img className='md:w-[25vw] w-full h-[75vw] object-cover md:h-[15vw] group-hover:scale-90 transition-all ease-in-out duration-100 ' src={`${setting.SERVER}/${post.img}`} />
                                    :
                                    <img className='md:w-[25vw] w-full h-[75vw] object-cover md:h-[15vw] group-hover:scale-90 transition-all ease-in-out duration-100 ' src={img3} />
                                }    
                                    <div className='lg:p-[2rem] md:p-[1rem] p-[1rem]'>
                                        <div>
                                            <h3 className='font-bold md:text-[1.2vw] text-[4.5vw] group-hover:underline transition-all ease-in-out'>{post?.title}</h3>
                                        </div>
                                        <div>
                                            <p className='mt-2 md:text-[1vw] text-[4vw] font-[400]'>{short((post?.content), 88)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center lg:px-[2rem] px-[1rem] pb-4 md:px-[1rem] lg:pb-5 md:pb-3'>
                                    <img src={img1} className='md:w-[2vw] md:h-[2vw]  w-[10vw] h-[10vw] group-hover:hidden block' />
                                    <img src={img2} className='md:w-[2vw] w-[10vw] h-[10vw] md:h-[2vw] group-hover:block  hidden' />

                                    <p className='md:text-[1.1vw] text-[4.5vw]'>Giňişleýin</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UnderPost;
