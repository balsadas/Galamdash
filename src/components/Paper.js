import React from 'react';

const kat = [
    {
        id: 1, text: 'Her ýylda milliondan gowrak syýahatçy bu sungaty görmek ýa-da onuň bilen selfi düşüp instagramda paýlaşmak maksady bilen Parižiň Luwr muzeýine zyýarata barýarlar. Leonardo Da Winçiniň 20 ýyl zähmetini siňdiren we tamamlap bilmedik, bir wagtlar Napoleonyň otagyny bezän, iki sapar ogurlanyp we soňunda bu muzeýde öz ýerini tapan Mona Liza (fransuzça ady: La Joconde; Italýança: La Gioconda)   atly portet barada eşitmedikler ýa-da suratyny media çeşmelerinde görmedikler aramyzda az bolsa gerek. ',
        img: './photo/photo1.jpg', name: 'Myrat', surname: 'Balshayev', email: '@balsayev', date: "10 / 12 / 2023", img1: './photo/photo10.jpg', title: 'Magtymguly'
    },
    {
        id: 2, text: 'Her ýylda milliondan gowrak syýahatçy bu sungaty görmek ýa-da onuň bilen selfi düşüp instagramda paýlaşmak maksady bilen Parižiň Luwr muzeýine zyýarata barýarlar. Leonardo Da Winçiniň 20 ýyl zähmetini siňdiren we tamamlap bilmedik, bir wagtlar Napoleonyň otagyny bezän, iki sapar ogurlanyp we soňunda bu muzeýde öz ýerini tapan Mona Liza (fransuzça ady: La Joconde; Italýança: La Gioconda)   atly portet barada eşitmedikler ýa-da suratyny media çeşmelerinde görmedikler aramyzda az bolsa gerek. ',
        img: './photo/photo2.jpg', name: 'Umyt', surname: 'Zafarow', email: '@zafarjan', date: "10 / 12 / 2023", img1: './photo/photo11.jpg', title: 'Eziz Gurbannepesow'
    },
    {
        id: 3, text: 'Her ýylda milliondan gowrak syýahatçy bu sungaty görmek ýa-da onuň bilen selfi düşüp instagramda paýlaşmak maksady bilen Parižiň Luwr muzeýine zyýarata barýarlar. Leonardo Da Winçiniň 20 ýyl zähmetini siňdiren we tamamlap bilmedik, bir wagtlar Napoleonyň otagyny bezän, iki sapar ogurlanyp we soňunda bu muzeýde öz ýerini tapan Mona Liza (fransuzça ady: La Joconde; Italýança: La Gioconda)   atly portet barada eşitmedikler ýa-da suratyny media çeşmelerinde görmedikler aramyzda az bolsa gerek. ',
        img: './photo/photo3.jpg', name: 'Umyt', surname: 'Umirov', email: '@kitay', date: "10 / 12 / 2023", img1: './photo/photo12.jpg', title: 'Mollanepes'
    },
    {
        id: 4, text: 'Her ýylda milliondan gowrak syýahatçy bu sungaty görmek ýa-da onuň bilen selfi düşüp instagramda paýlaşmak maksady bilen Parižiň Luwr muzeýine zyýarata barýarlar. Leonardo Da Winçiniň 20 ýyl zähmetini siňdiren we tamamlap bilmedik, bir wagtlar Napoleonyň otagyny bezän, iki sapar ogurlanyp we soňunda bu muzeýde öz ýerini tapan Mona Liza (fransuzça ady: La Joconde; Italýança: La Gioconda)   atly portet barada eşitmedikler ýa-da suratyny media çeşmelerinde görmedikler aramyzda az bolsa gerek. ',
        img: './photo/photo4.jpg', name: 'Nohur', surname: 'Itgulyvev', email: '@itguly', date: "10 / 12 / 2023", img1: './photo/photo13.jpg', title: 'Sport alemi'
    },
    {
        id: 5, text: 'Her ýylda milliondan gowrak syýahatçy bu sungaty görmek ýa-da onuň bilen selfi düşüp instagramda paýlaşmak maksady bilen Parižiň Luwr muzeýine zyýarata barýarlar. Leonardo Da Winçiniň 20 ýyl zähmetini siňdiren we tamamlap bilmedik, bir wagtlar Napoleonyň otagyny bezän, iki sapar ogurlanyp we soňunda bu muzeýde öz ýerini tapan Mona Liza (fransuzça ady: La Joconde; Italýança: La Gioconda)   atly portet barada eşitmedikler ýa-da suratyny media çeşmelerinde görmedikler aramyzda az bolsa gerek. ',
        img: './photo/photo5.jpg', name: 'Maksat', surname: 'Mamilov', email: '@maksatjan', date: "10 / 12 / 2023", img1: './photo/photo14.jpg', title: 'Dunya taryhy'
    },
    {
        id: 6, text: 'Her ýylda milliondan gowrak syýahatçy bu sungaty görmek ýa-da onuň bilen selfi düşüp instagramda paýlaşmak maksady bilen Parižiň Luwr muzeýine zyýarata barýarlar. Leonardo Da Winçiniň 20 ýyl zähmetini siňdiren we tamamlap bilmedik, bir wagtlar Napoleonyň otagyny bezän, iki sapar ogurlanyp we soňunda bu muzeýde öz ýerini tapan Mona Liza (fransuzça ady: La Joconde; Italýança: La Gioconda)   atly portet barada eşitmedikler ýa-da suratyny media çeşmelerinde görmedikler aramyzda az bolsa gerek. ',
        img: './photo/photo6.jpg', name: 'Bayram', surname: 'Babagulyyev', email: '@hallyjan', date: "10 / 12 / 2023", img1: './photo/photo15.jpg', title: 'Tasinlikler'
    },
    {
        id: 7, text: 'Her ýylda milliondan gowrak syýahatçy bu sungaty görmek ýa-da onuň bilen selfi düşüp instagramda paýlaşmak maksady bilen Parižiň Luwr muzeýine zyýarata barýarlar. Leonardo Da Winçiniň 20 ýyl zähmetini siňdiren we tamamlap bilmedik, bir wagtlar Napoleonyň otagyny bezän, iki sapar ogurlanyp we soňunda bu muzeýde öz ýerini tapan Mona Liza (fransuzça ady: La Joconde; Italýança: La Gioconda)   atly portet barada eşitmedikler ýa-da suratyny media çeşmelerinde görmedikler aramyzda az bolsa gerek. ',
        img: './photo/photo7.jpg', name: 'Kuwwat', surname: 'Muhammetberdiyev', email: '@prodaction', date: "10 / 12 / 2023", img1: './photo/photo16.jpg', title: 'Gadymy Yazgylar'
    },
    {
        id: 8, text: 'Her ýylda milliondan gowrak syýahatçy bu sungaty görmek ýa-da onuň bilen selfi düşüp instagramda paýlaşmak maksady bilen Parižiň Luwr muzeýine zyýarata barýarlar. Leonardo Da Winçiniň 20 ýyl zähmetini siňdiren we tamamlap bilmedik, bir wagtlar Napoleonyň otagyny bezän, iki sapar ogurlanyp we soňunda bu muzeýde öz ýerini tapan Mona Liza (fransuzça ady: La Joconde; Italýança: La Gioconda)   atly portet barada eşitmedikler ýa-da suratyny media çeşmelerinde görmedikler aramyzda az bolsa gerek. ',
        img: './photo/photo8.jpg', name: 'Kerwen', surname: 'Garahanova', email: '@karaguly', date: "10 / 12 / 2023", img1: './photo/photo17.jpg', title: 'Sonky tazelikler'
    },
    {
        id: 9, text: 'Her ýylda milliondan gowrak syýahatçy bu sungaty görmek ýa-da onuň bilen selfi düşüp instagramda paýlaşmak maksady bilen Parižiň Luwr muzeýine zyýarata barýarlar. Leonardo Da Winçiniň 20 ýyl zähmetini siňdiren we tamamlap bilmedik, bir wagtlar Napoleonyň otagyny bezän, iki sapar ogurlanyp we soňunda bu muzeýde öz ýerini tapan Mona Liza (fransuzça ady: La Joconde; Italýança: La Gioconda)   atly portet barada eşitmedikler ýa-da suratyny media çeşmelerinde görmedikler aramyzda az bolsa gerek. ',
        img: './photo/photo9.jpg', name: 'Shazad', surname: 'Hallyyev', email: '@shahruhhan', date: " 10 / 12 / 2023", img1: './photo/photo18.jpg', title: 'Pushkin'
    }
]

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
    return (
        <div className=' px-3 py-5   ' >
            <ul className=''>
                {kat.map((kat, i) => (
                    <li key={i} className='mt-6 bg-[#ffffffe0] shadow-xl rounded-xl px-8 py-7 '>
                        <div className='flex items-center mb-3'>
                            <img src={kat.img1} className='object-cover rounded-full h-[3vw] w-[3vw]' />
                            <h4 className='ml-2 font-[500]'>{kat.name} {kat.surname}</h4>
                            <p className='text-[#6B7280] ml-2 text-[.9vw]'><span className='mb-3'>.</span>{kat.email}</p>
                            <p className='text-[#6B7280] ml-2 text-[.9vw]'><span>.</span>{kat.date}</p>
                        </div>
                        <div>
                            <h2 className='font-bold text-[1.5vw] mb-1'>{kat.title}</h2>
                            <div className='columns-2 flex'>
                                <p className='w-[80%] text-[#6B7280] text-[1vw] pr-2'>{kat.text}</p>
                                <img className='object-cover rounded-md h-[12vw] mb-5  mt-[-3vw] w-[11.5vw] ' src={kat.img} />
                            </div>
                        </div>
                        <div className='flex columns-2'>
                            <div className='w-[80%]'>
                                <ul className='flex'>
                                    {tag.map((tag, i) => (
                                        <li className='mr-3 text-[1vw] text-[#1F2937] bg-[#F3F4F6] py-1 px-2 rounded-md font-[500]' key={i}>{tag.text}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='w-[20%] '>
                                <ul className='flex justify-end items-end ' >
                                    {com.map((com, i) => (
                                        <li key={i} className='flex mr-3 items-center '>
                                            <img src={com.img} className='w-[1vw] h-[1vw]'/>
                                            <p className='text-[#6B7280] ml-1 text-[.9vw]'>{com.num}</p>
                                        </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Paper;
