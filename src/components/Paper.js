import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import setting from '../setting.json'
import axios from 'axios';
import PostContent from './PostContent'
import Cookies from 'universal-cookie';




function Paper({ change, setChange }) {
    const cookie = new Cookies()
    const [Kat, setKat] = useState([])

    useEffect(() => {
        fetch()
    }, [change])

    const fetch = async () => {
        let result = []
        if (!!sessionStorage.getItem('category')) {
            sessionStorage.setItem('category', 0)
        }
        if (sessionStorage.getItem('category') != 0) {
            result = await axios.get(`${setting.SERVER}/api/category/${sessionStorage.getItem('category') || 0}`)
            result = result.data.Posts
        } else {    
            result = await axios.get(`${setting.SERVER}/api/random`)
            result = result.data
        }
        setKat(result)
    }
    return (
        <div className=' md:px-3 md:py-5 mb-5 md:mb-0    overflow-hidden ' >
            <ul>
                {Kat.map((kat, i) => (kat &&
                   
                        <PostContent kat={kat} i={i} />
             
                ))}
            </ul>

        </div>
    );
}

export default Paper;
