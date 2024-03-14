import React , {useEffect, useState}from "react";
import mainImage from "../assets/bg-main-desktop.png"
import smallMainImage from "../assets/bg-main-mobile.png";
import cardFrontImage from '../assets/bg-card-front.png';
import cardBackImage from '../assets/bg-card-back.png';

function ImagePart({cardHolderName, cardNum, cardEM, cardEY, cardC}){
    const [backgroundImage, setBackgroundImage] = useState(mainImage);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 720) {
                setBackgroundImage(smallMainImage);
            } else {
                setBackgroundImage(mainImage);
            }
        }

        window.addEventListener('resize', handleResize);

        // 初始化检查
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <div className="imagePart">
                <section className="mainImage" style={{ background: `url(${backgroundImage})` }}>
                    <section className="cardFrontImg" style={{ background: `url(${cardFrontImage})` }}>
                        
                    <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
                    <p id="cardNum">{cardNum || '0000 0000 0000 0000'}</p>
                    <div className="namePart">
                        <p>{cardHolderName || 'BennyLiu'}</p>
                        <p>{(cardEM || cardEY) ? `${cardEM}/${cardEY}` : '00/00'}</p>
                    </div>
                    </section> 
                    <section className="cardBackImg" style={{ background: `url(${cardBackImage})` }}>
                        <p id="cvcNum">{cardC || '000'}</p>
                    </section> 
                </section>                
                
            </div>
    );
}
export default ImagePart;