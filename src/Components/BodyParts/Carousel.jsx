import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SquareArrowRight } from 'lucide-react';
import { SquareArrowLeft } from 'lucide-react';
const NextArrow = ({ onClick }) => (
  <div style={{ position: "absolute", right: 10, top: "60%", zIndex: 1, height:30, width:30,color:"white" }} onClick={onClick}>
    <SquareArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div style={{ position: "absolute", left: 10, top: "60%", zIndex: 1, color:"white"}} onClick={onClick}>
     <SquareArrowLeft />
  </div>
);

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className=' w-90% m-0 relative bg-amber-50 pl-15 gap-0 pr-15 hover:cursor-pointer'>
    <Slider {...settings} className="pt-10">
      <div><img className="h-95 w-110" src="https://webneel.com/wallpaper/sites/default/files/images/01-2018/4-beautiful-flower-wallpaper-hd-saxyman.jpg" alt="Slide 1" /></div>
      <div><img className="h-95 w-110" src="https://images.pexels.com/photos/658687/pexels-photo-658687.jpeg?cs=srgb&dl=beautiful-bloom-blooming-658687.jpg&fm=jpg" alt="Slide 2" /></div>
      <div><img className="h-95 w-110" src="https://images.pexels.com/photos/35646/pexels-photo.jpg?cs=srgb&dl=garden-flower-close-up-35646.jpg&fm=jpg" alt="Slide 3" /></div>
      <div><img className="h-95 w-110" src="https://th.bing.com/th/id/OIP.Vtxy0FjT_EfudI4cQk1kzAHaE8?rs=1&pid=ImgDetMain" alt="Slide 4" /></div>
      <div><img className="h-95 w-110" src="https://static.vecteezy.com/system/resources/previews/022/257/312/large_2x/rose-flower-pictures-beautiful-roses-love-rose-flower-beautiful-flowers-wallpapers-ai-generated-free-photo.jpg" alt="Slide 4" /></div>
      <div><img className="h-95 w-110" src="https://th.bing.com/th/id/R.037262b09f0df0d4053a18da8756db85?rik=lWCE4txv8jGr0w&riu=http%3a%2f%2fwebneel.com%2fwallpaper%2fsites%2fdefault%2ffiles%2fimages%2f01-2014%2f2-flower-wallpaper.jpg&ehk=UZa7LU1Kw2xiBaNXN0dY7cGdfiPcLFcz7RJarDWE2SY%3d&risl=&pid=ImgRaw&r=0" alt="Slide 4" /></div>
      <div><img className="h-95 w-110" src="https://i2.wp.com/youmeandtrends.com/wp-content/uploads/2015/11/beautiful-flowers-pictures-free-download.jpg" alt="Slide 4" /></div>
      <div><img className="h-95 w-110" src="https://www.wallpaperflare.com/static/335/587/630/blooming-lotus-flower-selective-focus-photography-wallpaper.jpg" alt="Slide 4" /></div>
      <div><img className="h-95 w-110" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flower_jtca001.jpg" alt="Slide 4" /></div>
      <div><img className="h-95 w-110" src="https://4.bp.blogspot.com/-hUcx4fAPgSY/WaVTsADjR0I/AAAAAAAABzg/uVO_SlJAHTUFZWpa8CNuQfoDcgTU2elhACLcBGAs/s1600/4.jpeg" alt="Slide 4" /></div>
      <div><img className="h-95 w-110" src="https://th.bing.com/th/id/R.3e4d71b9d20dddf59732458d7c75c8ef?rik=xCehpQKxgc60ng&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f03%2fColorful-Flowers-Wallpapers-HD.jpg&ehk=e5l0dIkqI5d8D8nSdFdpckUlClaTWNXdEAjvp8k5eOc%3d&risl=&pid=ImgRaw&r=0" alt="Slide 4" /></div>
    </Slider>
    </div>
  );
};

export default Carousel;








