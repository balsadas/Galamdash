import { motion } from "framer-motion";
import setting from '../setting.json'
import time from '../time'
import { useEffect, useState } from "react";
import axios from "axios";



const ShortWord = ({ text, maxLength }) => {
    if (text.length <= maxLength) {
        return <>{text}</>
    }

    const shortWord = `${text.slice(0, maxLength)}...`
    return <>{shortWord}</>
}
const MainPostContent = ({ post }) => {
    const [like, setLike] = useState(0)
    const [comment, setComment] = useState(0)
    const [view, setView] = useState(0)

    useEffect(() => {
        countFetch()
    }, [])

    const countFetch = async () => {
        let res = await axios.get(`${setting.SERVER}/api/count/${post.id}`)
        setLike(res.data.like.count)
        setComment(res.data.comment.count)
        setView(res.data.view.count)
    }
    console.log(view, like, comment)
    return <motion.li
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
        }}
        className="p-4 bg-[#ffffffe0] hover:scale-110 hover:mt-[2rem] duration-300 ease-in-out transition-all hover:mb-[2rem] w-full group cursor-pointer rounded-lg shadow-lg mt-3">
        <div className='flex justify-center relative  '>
            <div className='absolute top-0 hidden   group-hover:flex rounded-b-md h-[2vw]  items-center px-4  bg-[#fefefe] '>
                <ul className='flex justify-center'>

                    <li className='flex mr-2 items-center select-none'>
                        <img src={'./photo/heart.png'} className='w-[.7vw] h-[.7vw] ' />
                        <p className='text-[#6B7280] ml-1 text-[.6vw]'>{view}</p>
                    </li>
                    <li className='flex mr-2 items-center select-none'>
                        <img src={'./photo/comment.png'} className='w-[.7vw] h-[.7vw] ' />
                        <p className='text-[#6B7280] ml-1 text-[.6vw]'>{like}</p>
                    </li>
                    <li className='flex mr-2 items-center select-none'>
                        <img src={'./photo/bar-chart.png'} className='w-[.7vw] h-[.7vw] ' />
                        <p className='text-[#6B7280] ml-1 text-[.6vw]'>{comment}</p>
                    </li>
                </ul>
            </div>
            <img src={`${setting.SERVER}/${post.img}`} className='object-cover w-[13vw] h-[12vw] rounded-lg select-none' />
        </div>
        <p className='font-[600] text-[1.2vw] mt-2 ml-[.7vw] select-none'><ShortWord text={post.title} maxLength={20} /></p>
        <div className='flex items-center justify-between mt-3'>
            <div className='flex items-center select-none'>
                <img src={`${setting.SERVER}/${post.User.img}`} className='w-[1.5vw] h-[1.5vw] rounded-full object-cover' />
                <p className='pl-1 text-[.7vw]'>{post.User.nick} </p>
                <p className='pl-1 text-[.7vw]'><span>.</span> {time(post.time)}</p>
            </div>
        </div>
    </motion.li>
}

export default MainPostContent