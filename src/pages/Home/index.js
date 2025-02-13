import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const Home=()=>{
    return(
        <>
        <div className="banner-container">
           <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000, // Delay between slides (in ms)
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        modules={[Navigation, Autoplay]}
        className="bannerSwiper"
      >
        
        <SwiperSlide className="simg3"></SwiperSlide>
        <SwiperSlide className="simg2"></SwiperSlide>
        <SwiperSlide className="simg4"></SwiperSlide>
        <SwiperSlide className="simg1"></SwiperSlide>
        </Swiper>
      
      </div>

        </>
    )
}
export default Home;