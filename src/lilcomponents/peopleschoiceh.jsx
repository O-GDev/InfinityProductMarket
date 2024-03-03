import React, {useState, useEffect} from 'react'

const sliderImage = [
  "/assets/firstslide.png",
  "/assets/secondslide.png",
  "/assets/thirdslide.png",
];

let count = 0;
const PeoplesChoice = () => {
  const[currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    // slideRef.current.addEventListener('animationend', removeAnimation)
    startSlider();
    // textSlider();
    // con();
},[])
 

    const startSlider = () =>{
      const interval =  setInterval(() => {
            nextSlide();
        }, [7000]);
        return () => {
            clearInterval(interval);
        }
    }    
    

    const nextSlide = () =>{
        count = (count + 1) % sliderImage.length;
        setCurrentIndex(count);
        // slideRef.current.classList.add('fade-anim');
    }
  return (
    <div  className="select-none relative py-4" style={{backgroundColor:'#F2F2F2'}}>
    <img src={sliderImage[currentIndex]} alt='slide' style={{height:'87vh',width:'100vw',objectFit:'none',opacity:0.8}} />  
    </div>
  )
}

export default PeoplesChoice