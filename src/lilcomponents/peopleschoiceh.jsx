import React, {useState, useEffect, useRef} from 'react'

const sliderImage = [
  "/assets/firstslide.png",
  "/assets/secondslide.png",
  "/assets/thirdslide.png",
];

let count = 0;
const PeoplesChoice = () => {
  const[currentIndex, setCurrentIndex] = useState(0);



  const slideRef = useRef()
  
  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim');
  }

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation)
    startSlider();
    // textSlider();
    // con();
  }, [])


  const nextSlide = () => {
    count = (count + 1) % sliderImage.length;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim');
  }
  const startSlider = () => {
    const interval = setInterval(() => {
      nextSlide();
    }, [7000]);
    return () => {
      clearInterval(interval);
    }
  }
  return (
    <div ref={slideRef} className="select-none relative md:p-0" style={{backgroundColor:'#F2F2F2'}}>
    <img src={sliderImage[currentIndex]} alt='slide' style={{height:'87vh',width:'100vw',objectFit:'none',opacity:0.8}} />  
    </div>
  )
}

export default PeoplesChoice