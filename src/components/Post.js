import React, { useEffect, useState } from 'react';

import PostContent from '../components/MainPostContent.js'
import axios from 'axios';
import setting from '../setting.json'
import time from '../time'
import MainPostContent from '../components/MainPostContent.js';

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



function Post() {
    const [Post, setPost] = useState([])

    useEffect(() => {
        fetchnewposts()
    }, [])

    const fetchnewposts = async () => {
        await axios.get(`${setting.SERVER}/api/post`).then((res) => {
            setPost(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='flex justify-center mt-[3rem]   '>
            <div className=' w-[90%]   '>
                <div className='shadow-lg bg-[#fff] rounded-lg p-2 '>
                    <h3 className='pl-2 font-bold text-[#19a056] md:text-[1.2vw]'>Soňky Postlar</h3>
                </div>
                <ul className='rows-10   w-full flex justify-center '>
                    <div>
                        {Post.map((post, index) => (
                            <MainPostContent key={index} post={post} />
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Post;
