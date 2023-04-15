import React from 'react';

const kati = [
    { id: 1, text: 'Poeziya' },
    { id: 2, text: 'Proza' },
    { id: 3, text: 'Terjime' },
    { id: 4, text: 'Omri we doredijiligi' },
    { id: 5, text: 'Nukdar we Nazaryyet' },
    { id: 6, text: 'Makala' },
    { id: 7, text: 'Tazelikler' },
    { id: 8, text: 'Sonky gosulanlar' },
    { id: 9, text: 'Poeziya' },
    { id: 10, text: 'Proza' },
    { id: 11, text: 'Terjime' },
    { id: 12, text: 'Omri we doredijiligi' },
    { id: 13, text: 'Nukdar we Nazaryyet' },
    { id: 14, text: 'Makala' },
    { id: 15, text: 'Tazelikler' },
    { id: 16, text: 'Sonky gosulanlar' }
]

function Category() {
    return (
        <div>
            <ul className='row-6 pl-5 pr-5 pt-3 pb-3  columns-4'>
                {kati.map((kati, i) => (
                    <li key={i} className='p-2 font-[500] hover:underline hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in'>
                        {kati.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Category;
