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
          delay: 1000, // Delay between slides (in ms)
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
      <div className="fivestar-container">
        <h2 style={{ color: "#067062" }}>5-star projects:</h2>
        <Swiper
  navigation={true}
  pagination={{ clickable: true }}
  autoplay={false}
  modules={[Navigation, Autoplay]}
  className="fivestar custom-swiper" 
>

        <SwiperSlide className="fimg1"></SwiperSlide>
        <SwiperSlide className="fimg2"></SwiperSlide>
      </Swiper>
      </div>
        </>
    )
}
export default Home;