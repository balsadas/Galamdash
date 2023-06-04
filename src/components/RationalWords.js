import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

const words = [
    { title: 'Gyz eneden görelde almasa, öwüt almaz' },
    { title: 'Enesizi gelin edinme, atasyzy giýew' },
    { title: 'Gyzyny öwenden gaç, ýeňňesi öweni alyp gaç' },
    { title: 'Gelene baldyz, gidene ýeňňe' },
    { title: 'Göle düşdüm, ýola düşdüm' },
    { title: 'Gyz gapysy şa gapysy, müňi geler, biri alar' },
    { title: 'Gelniň aýagy, çopanyň taýagy' },
    { title: 'Gelni gelin edýän düşen ýer' },
    { title: 'Gaýyn-gelin gapakly gazan' },
    { title: 'Gaýyn atam ganarym, dolup durar dulumda, gaýyn enem gazanym getirip goýar ýanymda' },
    { title: 'Gelinde dil ýok, gaýynda ynsap' }
]


function RationalWords() {
    const options = {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
       
    };
    return (
        <div className="shadow-lg rounded-xl  bg-[#fff]">
            <Splide options={options}
                aria-labelledby="autoplay-example-heading">
                {words.map((word, i) => (
                    <SplideSlide key={i} className="flex justify-center">
                        <p className="md:text-[1vw] font-[500] text-[3vw]">{word.title}</p>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    )
}


export default RationalWords;