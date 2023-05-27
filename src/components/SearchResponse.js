import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import setting from '../setting.json'
import axios from 'axios';
import PostContent from './PostContent'




function Paper({ change, setChange }) {
    const { word } = useParams()

    const [Search, setSearch] = useState([])

    useEffect(() => {
        fetch()
    }, [change])

    

    const fetch = async () => {
        let result = []
        result = await axios.get(`${setting.SERVER}/api/search?word=${word}`)
        setSearch(result.data)
    }
    return (
        <div className=' md:px-3 md:py-5 mb-5 md:mb-0    overflow-hidden ' >
            <ul>

                {Search.map((kat, i) => (kat &&
                    <Link to={`/IntoPaper/${kat.id}`} key={i}>
                        <PostContent kat={kat} />
                    </Link>
                ))}
            </ul>

        </div>
    );
}

export default Paper;
