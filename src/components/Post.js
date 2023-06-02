import React, { useEffect, useState } from 'react';

import PostContent from '../components/MainPostContent.js'
import axios from 'axios';
import setting from '../setting.json'
import time from '../time'
import MainPostContent from '../components/MainPostContent.js';
import { Link } from 'react-router-dom';






function Post() {
    const [fix, setFix] = useState(false)
    const [Post, setPost] = useState([])

function SidebarLeft () {
    if ( window.scrollY>=100){
        setFix(true)
    }else{
        setFix(false)
    }
}

window.addEventListener('scroll', SidebarLeft)


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
            <div className={fix ? 'w-[90%] fixed top-[-15%] mt-[1rem]' : 'w-[90%]'} >
                <div className='shadow-lg bg-[#fff] rounded-lg p-2 '>
                    <h3 className='pl-2 font-bold text-[#19a056] md:text-[1.2vw]'>Soňky Postlar</h3>
                </div>
                <ul className='rows-10   w-full flex justify-center '>
                    <div>
                        {Post.map((post, index) => (
                            <Link key={index} to={`/IntoPaper/${post.id}`}>
                                <MainPostContent post={post} />
                            </Link>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Post;
