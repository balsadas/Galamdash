import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import setting from '../setting.json'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Shortendtext = (text, maxLength) => {
    if (text.length <= maxLength) {
        return <>{text}</>
    }

    const Shortendtext = `${text.slice(0, maxLength)}...`

    return <>{Shortendtext}</>
}

const MainPost = ({ kat, i }) => {

    const [like, setLike] = useState(0)
    const [comment, setComment] = useState(0)
    const [view, setView] = useState(0)


    useEffect(() => {
        countFetch()
    }, [])
    const countFetch = async () => {
        let res = await axios.get(`${setting.SERVER}/api/count/${kat.id}`)
        setLike(res.data.like.count)
        setComment(res.data.comment.count)
        setView(res.data.view.count)
    }


    return (

        <li key={i}
            className='mt-6 bg-[#ffffffe0] shadow-xl rounded-xl md:px-8 md:py-7 px-6 py-5  hover:my-4  cursor-pointer'>
            <Link to={`/IntoPaper/${kat.id}`} >
                <div>
                    <div className='flex items-center mb-3'>
                        <img src={kat.User.img ? `${setting.SERVER}/${kat.User.img}` : './image/user (1).png'} className='object-cover rounded-full md:h-[3vw] md:w-[3vw] w-[8vw] h-[8vw] ' />
                        <h4 className='md:text-[1.5vw] text-[4.5vw] ml-3 font-[500]'>{kat.User.nick}</h4>
                    </div>

                    <div className='md:flex-row flex flex-col-reverse'>
                        <div className='w-full '>
                            <Link to={`/IntoPaper/${kat.id}`} key={i}>
                                <h2 className='font-bold md:text-[1.5vw] text-[4.5vw] mb-1 md:mt-1 mt-4  pl-2  select-none'>{kat.title}</h2>
                                <p className='w-[95%] text-[#6B7280] md:text-[1vw] text-[3vw] pr-2  text-justify select-none cursor-pointer'>{Shortendtext((kat.content), 500)}</p>
                            </Link>
                        </div>
                        <img className='object-cover rounded-md md:h-[12vw]  h-[50vw] w-full md:w-[11.5vw] transition duration-300 ease-in-out group-hover:scale-110  md:flex' src={kat.img ? `${setting.SERVER}/${kat.img}` : './image/Galamdas1.png'} />
                    </div>

                    <div className='md:flex md:columns-2 md:mt-5 mt-3'>
                        <div className='md:w-[80%] w-full '>
                            <ul className='flex'>
                                {kat.Tags.map((tag, i) => (
                                    <li className='mr-3 md:text-[1vw] text-[2.5vw] text-[#1F2937]  select-none bg-[#F3F4F6] md:py-1 py-[0.25rem] px-[0.3rem] md:px-2 rounded-md font-[500]' key={i}>{tag.TagList.title}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='md:w-[20%] w-full md:mt-1 mt-3 '>
                            <ul className='flex md:justify-end justify-center md:items-end ' >

                                <li className='flex mr-3 items-center '>
                                    <img src={'./photo/heart.png'} className='md:w-[1vw] md:h-[1vw] w-[5vw] h-[5vw] select-none' />
                                    <p className='text-[#6B7280] ml-1 md:text-[.9vw] text-[3vw] select-none'>{like}</p>
                                </li>
                                <li className='flex mr-3 items-center '>
                                    <img src={'./photo/comment.png'} className='md:w-[1vw] md:h-[1vw] w-[5vw] h-[5vw] select-none' />
                                    <p className='text-[#6B7280] ml-1 md:text-[.9vw] text-[3vw] select-none'>{comment}</p>
                                </li>
                                <li className='flex mr-3 items-center '>
                                    <img src={'./photo/bar-chart.png'} className='md:w-[1vw] md:h-[1vw] w-[5vw] h-[5vw] select-none' />
                                    <p className='text-[#6B7280] ml-1 md:text-[.9vw] text-[3vw] select-none'>{view}</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </Link >
        </li>
    )
}


export default MainPost