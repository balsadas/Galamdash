import React from 'react';
import NavSearch from '../components/NavSearch';
import UnderPost from '../components/UnderPost';
import Footer from '../components/Footer';


const tag = [
    { id: 1, text: 'pikir' },
    { id: 2, text: 'ceper eser' },
    { id: 3, text: 'oka' },
    { id: 4, text: 'Magtymguly' },
    { id: 5, text: 'dashary yurt' }
]
const com = [
    { id: 1, num: '23', img: './photo/bar-chart.png', title: 'görüldi' },
    { id: 2, num: '13', title: 'halandy', img: './image/like.png' },
    { id: 3, num: '10', img: './photo/comment.png', title: 'teswir' },
    { id: 4, num: '5', img: './image/downloads.png', title: 'ýüklendi' }

]




function IntoPaper({ img, date, name, surname, title }) {



    return (
        <>
            <NavSearch />
            <div className='bg-[#fff] flex justify-center md:pt-[7rem] pt-[6rem]'>
                <div className='md:w-[50%] w-[90%]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <img className='rounded-full cursor-pointer md:w-[3vw] md:h-[3vw] w-[12vw] h-[12vw] object-cover' src={img} />
                            <div className='ml-3'>
                                <h3 className='md:text-[1.3vw] text-[6vw] select-none font-bold '>{name} {surname} </h3>
                                <p className='md:text-[0.8vw] text-[3vw] select-none text-[#6B7280]'>{date}</p>
                            </div>
                        </div>
                        <img src='./image/link.png' className='md:w-[1.5vw] md:h-[1.5vw] w-[5vw] h-[5vw] mr-8' />
                    </div>
                    <div className='mt-5'>
                        <h3 className='font-bold md:text-[1.7vw] text-[5vw]'>
                            {title}
                        </h3>
                        <div className='md:mt-7 mt-4'>
                            <ul className='flex'>
                                {tag.map((tag, i) => (
                                    <li className='mr-3 md:text-[1vw] text-[2.5vw] text-[#1F2937]  select-none bg-[#F3F4F6] py-1 px-2 rounded-md font-[500]' key={i}>{tag.text}</li>
                                ))}
                            </ul>
                        </div>
                        <p className='text-[#6B7280] text-[4vw] text-justify md:text-[1vw] mt-3'>
                            Bagtly we manyly durmuş üçin özüňe ynam gerek. Özüňe ynam - özüňe we durmuş ýagdaýlaryňa oňyn we hakykatçyl garamaga mümkinçilik berýän garaýyşdyr. Özüne ynamly adamlar öz ukyplaryna ynanýarlar, durmuşyna gözegçilik edýärler we isleýän, meýilleşdirýän we garaşýan zatlaryny edip biljekdigine ynanýarlar.

                            Özüňe ynamy nädip ösdürmeli?
                            1. Az gorky we az alada

                            Näçe ynamly bolsaňyz, "muny edip bilemok" diýýän içki sesi çalt köşeşdirip bilersiňiz. Negatiw pikirlerden daşlaşyň we gymmatlyklaryňyza we meýilnamalaryňyza görä hereket ediň.

                            Öz-özüne ynamsyzlykdan ejir çekip, durmuşymyz hakda negatiw pikir edýäris. Artykmaç pikir etmek alada bilen baglanyşyklydyr we bu biziň öz-özümize hormat goýmagymyz üçin erbet bolup biler. Yöne özüňizi ynam bilen dolduryp, aşa pikirlenmek siklini bozup, içki tankytçyňyzy köşeşdirip bilersiňiz.

                            2. Has köp höwes

                            Özüňe ynam döretmek, dowamly üstünlik duýgusyny galdyrýan ownuk ädimler bilen amala aşyrylyp bilner. Maksatlaryňyza gün-günden öňe gitmegi dowam etdirseňiz, islän ýeriňize ýetmek üçin eýýäm kesgitlenen maksatlary ýerine ýetirseňiz, dogry ýoldan gidersiňiz.

                            Durmuşyňyzda möhüm bir üstünlik ýadyňyza salaňyzda, munuň üçin köp erjellik gerekdigine göz ýetirersiňiz. Eger kynçylyklary ýeňip geçip bilseňiz, indi özüňizi ynamsyz duýýan durmuşyňyzyň beýleki ugurlarynda hem edip bilersiňiz .

                            Özüňize bolan ynamyňyz artdygyça, başarnygyňyzy ösdürmek islegiňiziň artýandygyny görersiňiz. “Näme bolsa” diýen pikirler henizem ýüze çykar: “Şowsuz bolsam näme?” "Özümi utandyrsam näme?" emma özüňe ynam bilen bu pikirler indi zyýan bermez. Munuň ýerine, köp zady aňladýan maksatlara tarap barýarkaňyz güýçli duýup, ýylgyryp we hereket edip bilersiňiz.

                            3. Has durnuklylyk

                            Ynam, şowsuzlygy ýeňip geçmek üçin başarnyklary we usullary berýär. Özüňe ynam, käwagt şowsuz bolmajakdygyňy aňlatmaýar. Ýöne kynçylyklary çözüp biljekdigiňizi we olardan ejir çekmejekdigiňizi bilersiňiz. Işler meýilleşdirişiňiz ýaly netije bermese-de, özüňizi öwmekden saklanyp bilersiňiz.

                            Täze zatlary synap görmek üçin özüňizi itirmegi dowam etdirmek bilen, şowsuzlygyň we ýalňyşlyklaryň ösüşe näderejede sebäp boljakdygyna düşünip başlarsyňyz. Şowsuzlygyň durmuşyň bir bölegidigini kabul etmek kök urup başlar. Geň tarapdan, şowsuzlyga has isleg bildirip, has köp üstünlik gazanarsyňyz, sebäbi çäre görmezden ozal hemme zat 100 göterim kämileşýänçä garaşmaň.

                            4. Gatnaşyklaryň gowulaşmagy

                            Munuň özi garşylyksyz ýaly bolup görünmegi mümkin, ýöne özüňe has köp ynam bar bolsa, özüňe has az üns berersiň. Biziň hemmämiz bir näçe gezek bir otaga girip, "Hemmesi maňa seredýär", " Olaryň hemmesi meni samsyk görýär we aýdýan her sözümi samsyk hasaplaýarlar" diýip pikir edendiris. Hakykatda, adamlar öz pikirlerine we aladalaryna çümýär. Öz kelläňizden çykanyňyzda, beýlekiler bilen hakykatdanam aragatnaşyk saklap bilersiňiz.

                            Gatnaşyklaryňyzdan has lezzet alarsyňyz, sebäbi eden täsiriňiz hakda kän alada etmersiňiz we özüňizi beýlekiler bilen deňeşdirmersiňiz. Arkaýyn ýagdaýyňyz beýlekileri hem köşeşdirer, has çuňňur baglanyşyk gurmaga kömek eder.

                            Özüňe ynam has çuňňur duýgudaşlygy döredip biler. Doly gatnaşanyňyzda, kimdir biriniň birneme aşak görünýändigini ýa-da burçdaky dostuň aglamak üçin egniňe mätäçdigini görüp bilersiňiz. Özüňiziň ynamsyzlygyňyz bilen meşgullanmasaňyz, başgalara kömek sorap ýüz tutup bilersiňiz.
                        </p>
                        <div className='flex justify-center mt-[2rem] md:mt-[3rem]'>
                            <div>
                                <img src='./photo/photo15.jpg' className='object-cover md:w-[40vw] ' />
                                <div className='h-[2vw] md:w-[40vw] bg-[#e8e8e8e0] mt-4'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-[3rem]  mb-[3rem]'>
                        <ul className='flex justify-end items-end ' >
                            {com.map((com, i) => (
                                <li key={i} className='flex md:mr-8 mr-3 items-center '>
                                    <img src={com.img} className='md:w-[1vw] md:h-[1vw] w-[5vw] h-[5vw] select-none' />
                                    <p className='text-[#6B7280] ml-1 text-[2.5vw] text-center md:text-[1vw] select-none'>{com.num} {com.title}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <UnderPost />
            <div className='bg-[#fff] pt-6'>
                <Footer />
            </div>
        </>
    );
}

export default IntoPaper;
