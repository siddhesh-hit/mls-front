
import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { Grid } from '@splidejs/splide-extension-grid';

const MyImageGallery = () => {
    useEffect(() => {
        const splide = new Splide('.splide', {
            // ... (your configuration options)
        });

        splide.mount({ Grid });

        return () => {
            splide.destroy(); // Cleanup when the component unmounts
        };
    }, []);

    return (
        <div className="splide">
            <div className="splide__track">
                <ul className="splide__list">
                    {/* Add your slides here */}
                    <li className="splide__slide">
                        <img src="path/to/image1.jpg" alt="Slide 1" />
                    </li>
                    <li className="splide__slide">
                        <img src="path/to/image2.jpg" alt="Slide 2" />
                    </li>
                    {/* Add more slides as needed */}
                </ul>
            </div>
        </div>
    );
};

export default MyImageGallery;
