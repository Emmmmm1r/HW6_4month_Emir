import React from 'react';
import './App.css'
import Slider from './components/Slider';
import Image1 from './assets/Slider_1.jpg'
import Image2 from './assets/Slider_2.jpg'
import Image3 from './assets/Slider_3.jpg'
import Image4 from './assets/Slider_4.jpg'


const photos = [
    Image1,
    Image2,
    Image3,
    Image4,
]

const App = () => {
    return (
        <div className={'wrapper'}>
            <h1>Мой фото-слайдер</h1>
            <Slider photos={photos}/>
        </div>
    )
}

export default App