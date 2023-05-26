import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import setting from '../setting.json'
import axios from 'axios';
import PostContent from './PostContent'
import Cookies from 'universal-cookie';

// const kat = [
//     {
//         id: 1, text: 'Her ýylda milliondan gowrak syýahatçy bu sungaty görmek ýa-da onuň bilen selfi düşüp instagramda paýlaşmak maksady bilen Parižiň Luwr muzeýine zyýarata barýarlar. Leonardo Da Winçiniň 20 ýyl zähmetini siňdiren we tamamlap bilmedik, bir wagtlar Napoleonyň otagyny bezän, iki sapar ogurlanyp we soňunda bu muzeýde öz ýerini tapan Mona Liza (fransuzça ady: La Joconde; Italýança: La Gioconda)   atly portet barada eşitmedikler ýa-da suratyny media çeşmelerinde görmedikler aramyzda az bolsa gerek. bolsa gerek.',
//         img: './photo/photo1.jpg', name: 'Myrat', surname: 'Balshayev', email: '@balsayev', date: "10 / 12 / 2023", img1: './photo/photo10.jpg', title: 'Magtymguly'
//     },
//     {
//         id: 2, text: 'Her ýylda milliondan gowrak syýahatçy bu sungaty görmek ýa-da onuň bilen selfi düşüp instagramda paýlaşmak maksady bilen Parižiň Luwr muzeýine zyýarata barýarlar. Leonardo Da Winçiniň 20 ýyl zähmetini siňdiren we tamamlap bilmedik, bir wagtlar Napoleonyň otagyny bezän, iki sapar ogurlanyp we soňunda bu muzeýde öz ýerini tapan Mona Liza (fransuzça ady: La Joconde; Italýança: La Gioconda)   atly portet barada eşitmedikler ýa-da suratyny media çeşmelerinde görmedikler aramyzda az bolsa gerek. ',
//         img: './photo/photo2.jpg', name: 'Umyt', surname: 'Zafarow', email: '@zafarjan', date: "10 / 12 / 2023", img1: './photo/photo11.jpg', title: 'Eziz Gurbannepesow'
//     },
//     {
//         id: 3, text: 'Her ýylda milliondan gowrak syýahatçy bu sungaty görmek ýa-da onuň bilen selfi düşüp instagramda paýlaşmak maksady bilen Parižiň Luwr muzeýine zyýarata barýarlar. Leonardo Da Winçiniň 20 ýyl zähmetini siňdiren we tamamlap bilmedik, bir wagtlar Napoleonyň otagyny bezän, iki sapar ogurlanyp we soňunda bu muzeýde öz ýerini tapan Mona Liza (fransuzça ady: La Joconde; Italýança: La Gioconda)   atly portet barada eşitmedikler ýa-da suratyny media çeşmelerinde görmedikler aramyzda az bolsa gerek. ',
//         img: './photo/photo3.jpg', name: 'Umyt', surname: 'Umirov', email: '@kitay', date: "10 / 12 / 2023", img1: './photo/photo12.jpg', title: 'Mollanepes'
//     },
//     {
//         id: 4, text: 'Her ýylda milliondan gowrak syýahatçy bu sungaty görmek ýa-da onuň bilen selfi düşüp instagramda paýlaşmak maksady bilen Parižiň Luwr muzeýine zyýarata barýarlar. Leonardo Da Winçiniň 20 ýyl zähmetini siňdiren we tamamlap bilmedik, bir wagtlar Napoleonyň otagyny bezän, iki sapar ogurlanyp we soňunda bu muzeýde öz ýerini tapan Mona Liza (fransuzça ady: La Joconde; Italýança: La Gioconda)   atly portet barada eşitmedikler ýa-da suratyny media çeşmelerinde görmedikler aramyzda az bolsa gerek. ',
//         img: './photo/photo4.jpg', name: 'Nohur', surname: 'Itgulyvev', email: '@itguly', date: "10 / 12 / 2023", img1: './photo/photo13.jpg', title: 'Sport alemi'
//     },
//     {
//         id: 5, text: 'Her ýylda milliondan gowrak syýahatçy bu sungaty görmek ýa-da onuň bilen selfi düşüp instagramda paýlaşmak maksady bilen Parižiň Luwr muzeýine zyýarata barýarlar. Leonardo Da Winçiniň 20 ýyl zähmetini siňdiren we tamamlap bilmedik, bir wagtlar Napoleonyň otagyny bezän, iki sapar ogurlanyp we soňunda bu muzeýde öz ýerini tapan Mona Liza (fransuzça ady: La Joconde; Italýança: La Gioconda)   atly portet barada eşitmedikler ýa-da suratyny media çeşmelerinde görmedikler aramyzda az bolsa gerek. ',
//         img: './photo/photo5.jpg', name: 'Maksat', surname: 'Mamilov', email: '@maksatjan', date: "10 / 12 / 2023", img1: './photo/photo14.jpg', title: 'Dunya taryhy'
//     },

// ]




const tag = [
    { id: 1, text: 'pikir' },
    { id: 2, text: 'ceper eser' },
    { id: 3, text: 'oka' },
    { id: 4, text: 'Magtymguly' },
    { id: 5, text: 'dashary yurt' }
]



function Paper({ change, setChange }) {
    const cookie = new Cookies()
    const [Kat, setKat] = useState([])




    useEffect(() => {
        fetch()
    }, [change])




    const fetch = async () => {
        let result = []
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
                    <Link to={`/IntoPaper/${kat.id}`} key={i}>
                        <PostContent kat={kat} />
                    </Link>
                ))}
            </ul>

        </div>
    );
}

export default Paper;
