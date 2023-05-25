import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import setting from '../setting.json'
import axios from 'axios'

const Shortendtext = (text, maxLength) => {
    if (text.length <= maxLength) {
        return <>{text}</>
    }

    const Shortendtext = `${text.slice(0, maxLength)}...`

    return <>{Shortendtext}</>
}

const MainPost = ({ kat }) => {

    const [like, setLike] = useState({ num: '0', img: './photo/heart.png' })
    const [comment, setComment] = useState({ num: '0', img: './photo/comment.png' })
    const [view, setView] = useState({ num: '0', img: './photo/bar-chart.png' })


    useEffect(() => {
        countFetch()
    }, [])
    const countFetch = async () => {
        let res = await axios.get(`${setting.SERVER}/api/count/${kat.id}`)
        let change = like
        change.num = res.data.like.count
        setLike(change)
        change = comment
        change.num = res.data.comment.count
        setComment(change)
        change = view
        change.num = res.data.view.count
        setView(change)
    }


    return <div className='group' >
        <li
            className='mt-6 bg-[#ffffffe0] shadow-xl rounded-xl md:px-8 md:py-7 px-6 py-5 group-hover:mt-[2rem] group-hover:mb-[2rem] cursor-pointer'>
            <div
            >
                <div className='flex items-center mb-3'>
                    <img src={`${setting.SERVER}/${kat.User.img}`} className='object-cover rounded-full md:h-[3vw] md:w-[3vw] w-[8vw] h-[8vw] ' />
                    <h4 className='md:text-[1.5vw] text-[4.5vw] ml-2 font-[500]'>{kat.User.nick}</h4>
                </div>
                <div>
                    <img className='object-cover rounded-md  h-[70vw] w-full mb-3   block md:hidden' src={`${setting.SERVER}/${kat.img}`} />
                    <h2 className='font-bold md:text-[1.5vw] text-[4.5vw] mb-1  pl-2select-none'>{kat.title}</h2>
                    <div className='md:columns-2 md:flex'>
                        <p className='w-[100%] text-[#6B7280] md:text-[1vw] text-[3vw] pr-2 select-none md:hidden block mb-2'>{Shortendtext((kat.content), 210)}</p>
                        <p className='w-[80%] text-[#6B7280] md:text-[1vw] text-[3vw] pr-2 select-none md:block hidden'>{Shortendtext((kat.content), 500)}</p>
                        <img className='object-cover rounded-md h-[12vw] mb-5  mt-[-3vw] w-[11.5vw] transition duration-300 ease-in-out group-hover:scale-110 hidden md:block' src={`${setting.SERVER}/${kat.img}`} />
                    </div>
                </div>
                <div className='md:flex md:columns-2'>
                    <div className='md:w-[80%] w-full '>
                        <ul className='flex'>
                            {kat.Tags.map((tag, i) => (
                                <li className='mr-3 md:text-[1vw] text-[2.5vw] text-[#1F2937]  select-none bg-[#F3F4F6] md:py-1 py-[0.25rem] px-[0.3rem] md:px-2 rounded-md font-[500]' key={i}>{tag.TagList.title}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='md:w-[20%] w-full md:mt-0 mt-5 '>
                        <ul className='flex justify-end items-end ' >

                            <li className='flex mr-3 items-center '>
                                <img src={like.img} className='md:w-[1vw] md:h-[1vw] w-[5vw] h-[5vw] select-none' />
                                <p className='text-[#6B7280] ml-1 md:text-[.9vw] text-[3vw] select-none'>{like.num}</p>
                            </li>
                            <li className='flex mr-3 items-center '>
                                <img src={comment.img} className='md:w-[1vw] md:h-[1vw] w-[5vw] h-[5vw] select-none' />
                                <p className='text-[#6B7280] ml-1 md:text-[.9vw] text-[3vw] select-none'>{comment.num}</p>
                            </li>
                            <li className='flex mr-3 items-center '>
                                <img src={view.img} className='md:w-[1vw] md:h-[1vw] w-[5vw] h-[5vw] select-none' />
                                <p className='text-[#6B7280] ml-1 md:text-[.9vw] text-[3vw] select-none'>{view.num}</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </li>
    </div>
}

export default MainPost