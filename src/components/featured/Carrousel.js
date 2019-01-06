import React from 'react';
import Slider from 'react-slick'

import slide_one from '../../resources/images/slide_1.jpg';
// import slide_two from '../../resources/images/slide_2.jpg';
// import slide_three from '../../resources/images/slide_3.jpg';


const Carrousel = () =>  {

    const settings = {
        dots: true,
        infinite:true,
        autoplay: true,
        speed: 500
    }
        
    return (
        <div
            // className="carrousel_image_2"
            // style={{
            //     height:`${window.innerHeight}px`,
            //     overflow:'visible'
            // }}
        >
            <Slider {...settings}>
                <div>
                    <div 
                        className="carrousel_image_2"
                        style={{
                            background:`url(${slide_one})`,
                            height: `${window.innerHeight}px`,
                        }}
                    >
                    </div>
                </div>
            </Slider>

            <Slider {...settings}>
                <div>
                
                </div>
            </Slider>

        </div>           
    );
};

export default Carrousel;