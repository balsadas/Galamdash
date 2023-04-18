import React from 'react';
import { motion } from "framer-motion";


const post = [
    {
        id: 1, img: './photo/photo15.jpg', surname: 'Balshayev', name: 'Myrat', time: '12s', img1: './photo/photo25.jpg',
        text: "Magtymguly"
    },
    {
        id: 2, img: './photo/photo16.jpg', surname: 'Hallyyev', name: 'Shahzad', time: '16s', img1: './photo/photo24.jpg',
        text: "Zenanlaryn yeri dine ashanada daldir..."
    },
    {
        id: 3, img: './photo/photo17.jpg', surname: 'Babagulyyev', name: 'Bayram', time: '13s', img1: './photo/photo23.jpg',
        text: "Argument name we name  mohum?"
    },
    {
        id: 4, img: './photo/photo18.jpg', surname: 'Muhammetberdiyev', name: 'Kuwwat', time: '18s', img1: './photo/photo22.jpg',
        text: "Ekizler paradoksy ya-da geljege syyahat mumkinmi?"
    },
    {
        id: 5, img: './photo/photo19.jpg', surname: 'Saryjayev', name: 'Serdar', time: '24s', img1: './photo/photo21.jpg',
        text: "Galamdasha geljekde name garasyar"
    },
    // {
    //     id: 6, img: './photo/photo20.jpg', surname: 'Garahanova', name: 'Kerwen', time: '1s', img1: './photo/photo20.jpg',
    //     text: "Umyt bu name "
    // },
    // {
    //     id: 7, img: './photo/photo21.jpg', surname: 'Balshayev', name: 'Myrat', time: '12s', img1: './photo/photo19.jpg',
    //     text: "Germaniyada magistratura "
    // },
    // {
    //     id: 8, img: './photo/photo15.jpg', surname: 'Balshayev', name: 'Myrat', time: '12s', img1: './photo/photo18.jpg',
    //     text: "Argument nam ucin mohum? "
    // },
    // {
    //     id: 9, img: './photo/photo15.jpg', surname: 'Balshayev', name: 'Myrat', time: '12s', img1: './photo/photo17.jpg',
    //     text: "Asman bile has guycli jemigyyet guryarys"
    // },
    // {
    //     id: 10, img: './photo/photo15.jpg', surname: 'Balshayev', name: 'Myrat', time: '12s', img1: './photo/photo16.jpg',
    //     text: "Hakyky bayraga mynasyp gahrymanlar "
    // },


]
const com = [
    { id: 1, num: '23', img: './photo/bar-chart.png' },
    { id: 2, num: '13', img: './photo/heart.png' },
    { id: 3, num: '10', img: './photo/comment.png' },

]

const ShortWord = ({ text, maxLength }) => {
    if (text.length <= maxLength) {
        return <>{text}</>
    }

    const shortWord = `${text.slice(0, maxLength)}...`
    return <>{shortWord}</>
}

function Post() {
    return (
        <div className='flex justify-center mt-[3rem]   '>
            <div className=' w-[90%]   '>
                <ul className='rows-10   w-full flex justify-center '>
                    <div>
                        {post.map((post, index) => (
                            <motion.li
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                              hidden: { opacity: 0, y: -50 },
                              visible: { opacity: 1, y: 0 },
                            }}
                             key={index} className="p-4 bg-[#ffffffe0] hover:scale-110 hover:mt-[2rem] duration-300 ease-in-out transition-all hover:mb-[2rem] w-full group cursor-pointer rounded-lg shadow-lg mt-3">
                                <div className='flex justify-center relative  '>
                                    <div className='absolute top-0 hidden   group-hover:flex rounded-b-md h-[2vw]  items-center px-4  bg-[#fefefe] '>
                                        <ul className='flex justify-center'>
                                            {com.map((com, i) => (
                                                <li key={i} className='flex mr-2 items-center select-none'>
                                                    <img src={com.img} className='w-[.7vw] h-[.7vw] ' />
                                                    <p className='text-[#6B7280] ml-1 text-[.6vw]'>{com.num}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <img src={post.img} className='object-cover w-[13vw] h-[12vw] rounded-lg select-none' />
                                </div>
                                <p className='font-[600] text-[1.2vw] mt-2 ml-[.7vw] select-none'><ShortWord text={post.text} maxLength={20} /></p>
                                <div className='flex items-center justify-between mt-3'>
                                    <div className='flex items-center select-none'>
                                        <img src={post.img1} className='w-[1.5vw] h-[1.5vw] rounded-full object-cover' />
                                        <p className='pl-1 text-[.7vw]'>{post.surname} {post.name}</p>
                                        <p className='pl-1 text-[.7vw]'><span>.</span> {post.time}</p>
                                    </div>
                                </div>
                            </motion.li>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Post;
