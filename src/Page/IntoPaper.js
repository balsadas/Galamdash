import React from 'react';


const com = [
    { id: 1, num: '23', img: './photo/bar-chart.png' },
    { id: 2, num: '13', img: './photo/heart.png' },
    { id: 3, num: '10', img: './photo/comment.png' },

]

const  teh = [
    {
        id: 1, date:'1/12/2023y', img:'.photo/photo1.jpg', name:' Myrat', surname:' Balshayev', title:'Özüňe ynam.'
    }
]


function IntoPaper() {
    return (
        <div>
            <div>
                <div>
                    <img src={teh.img}/>
                    <div>
                        <h3>{teh.name} {teh.surname}</h3>
                        <p></p>
                    </div>
                </div>
                <div>
                    <h3>

                    </h3>
                    <div>
                        <ul className='flex justify-end items-end ' >
                            {com.map((com, i) => (
                                <li key={i} className='flex mr-3 items-center '>
                                    <img src={com.img} className='w-[1vw] h-[1vw] select-none' />
                                    <p className='text-[#6B7280] ml-1 text-[.9vw] select-none'>{com.num}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p>

                    </p>
                </div>
            </div>
        </div>
    );
}

export default IntoPaper;
