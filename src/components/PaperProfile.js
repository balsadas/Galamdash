import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import setting from '../setting.json'
import axios from 'axios';
import PostContent from './PostContent'
import Cookies from 'universal-cookie';




function Paper({ Kat, list }) {


    return (
        <div className=' md:px-3 md:py-5 mb-5 md:mb-0    overflow-hidden ' >
            <ul>
                {Kat.map((kat, i) => (
                    kat && <PostContent key={i} kat={kat} i={i} />
                ))}
            </ul>

        </div>
    );
}

export default Paper;
