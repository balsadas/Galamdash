import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import setting from '../setting.json'
import axios from 'axios';

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


const Shortendtext = (text, maxLength) => {
    if (!!text) {
        if (text.length <= maxLength) {
            return <>{text}</>
        }
        const Shortendtext = `${text.slice(0, maxLength)}...`

        return <>{Shortendtext}</>
    }
}

const tag = [
    { id: 1, text: 'pikir' },
    { id: 2, text: 'ceper eser' },
    { id: 3, text: 'oka' },
    { id: 4, text: 'Magtymguly' },
    { id: 5, text: 'dashary yurt' }
]

const com = [
    { id: 1, num: '23', img: './photo/bar-chart.png' },
    { id: 2, num: '13', img: './photo/heart.png' },
    { id: 3, num: '10', img: './photo/comment.png' },

]

function Paper() {
    const [Kat, setKat] = useState([])
    const [catgeory, setCategory] = useState(0)

    useEffect(() => {
        fetch()
    }, [])

    const fetch = async () => {
        let result = []
        if (catgeory != 0) {
            result = await axios.get(`${setting.SERVER}/api/category/${catgeory}`)
        } else {
            result = await axios.get(`${setting.SERVER}/api/post?all=true`)
        }
        setKat(result.data)
    }
    return (
        <div className=' md:px-3 md:py-5 mb-5 md:mb-0    overflow-hidden ' >

            <ul>

                {Kat.map((kat, i) => (
                    <Link to={`/IntoPaper/${kat.id}`} key={i}>
                        <div className='group' >

                            <motion.li
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, y: -50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                className='mt-6 bg-[#ffffffe0] shadow-xl rounded-xl md:px-8 md:py-7 px-6 py-5 group-hover:mt-[2rem] group-hover:mb-[2rem] cursor-pointer'>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    variants={{
                                        hidden: { opacity: 0, },
                                        visible: { opacity: 1, },
                                    }}

                                >
                                    <div className='flex items-center mb-3'>
                                        <img src={`${setting.SERVER}/${kat.User.img}`} className='object-cover rounded-full md:h-[3vw] md:w-[3vw] w-[8vw] h-[8vw] ' />
                                        <h4 className='md:text-[1.5vw] text-[4.5vw] ml-2 font-[500]'>{kat.User.nick} </h4>
                                        {/* <p className='text-[#6B7280] ml-2 text-[2vw] md:text-[.9vw]'><span className='mb-3'>.</span>{kat.User.email}</p> */}
                                        <p className='text-[#6B7280] ml-2 text-[2vw] md:text-[.9vw]'><span>.</span>{kat.date}</p>
                                    </div>
                                    <div>
                                        <img className='object-cover rounded-md  h-[70vw] w-full mb-3   block md:hidden' src={`${setting.SERVER}/${kat.img}`} />
                                        <h2 className='font-bold md:text-[1.5vw] text-[4.5vw] mb-1  pl-2select-none'>{kat.title}</h2>
                                        <div className='md:columns-2 md:flex'>


                                            <p className='w-[100%] text-[#6B7280] md:text-[1vw] text-[3vw] pr-2 select-none md:hidden block mb-2'>
                                                {Shortendtext(kat.content, 210)}
                                            </p>


                                            <p className='w-[80%] text-[#6B7280] md:text-[1vw] text-[3vw] pr-2 select-none md:block hidden'>{Shortendtext((kat.content), 500)}</p>
                                            <img className='object-cover rounded-md h-[12vw] mb-5  mt-[-3vw] w-[11.5vw] transition duration-300 ease-in-out group-hover:scale-110 hidden md:block' src={`${setting.SERVER}/${kat.img}`} />
                                        </div>
                                    </div>
                                    <div className='md:flex md:columns-2'>
                                        <div className='md:w-[80%] w-full '>
                                            <ul className='flex'>
                                                {kat.Tags.map((tag, i) => (
                                                    <li className='mr-3 md:text-[1vw] text-[2.5vw] text-[#1F2937]  select-none bg-[#F3F4F6] md:py-1 py-[0.25rem] px-[0.3rem] md:px-2 rounded-md font-[500]' key={i}>
                                                        {tag.TagList.title}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className='md:w-[20%] w-full md:mt-0 mt-5 '>
                                            <ul className='flex justify-start items-end ' >
                                                {com.map((com, i) => (
                                                    <li key={i} className='flex mr-3 items-center '>
                                                        <img src={com.img} className='md:w-[1vw] md:h-[1vw] w-[5vw] h-[5vw] select-none' />
                                                        <p className='text-[#6B7280] ml-1 md:text-[.9vw] text-[3vw] select-none'>{com.num}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.li>
                        </div>
                    </Link>
                ))}
            </ul>

        </div>
    );
}

export default Paper;
