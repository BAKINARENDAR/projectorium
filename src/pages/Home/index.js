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
      <div className="fivestar-container" style={{marginBottom: "30px"}}>
        <h2 style={{ color: "#067062"}}>5-Star Projects:</h2>
        <Swiper
        spaceBetween={10}  
        slidesPerView={4}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={false}
        modules={[Navigation, Autoplay]}
        className="fivestar custom-swiper"
        >
  <SwiperSlide>
    <button className="fimg1" onClick={() => {}}></button>
  </SwiperSlide>
  <SwiperSlide>
    <button className="fimg2" onClick={() => {}}></button>
  </SwiperSlide>
  <SwiperSlide>
    <button className="fimg3" onClick={() => {}}></button>
  </SwiperSlide>
  <SwiperSlide>
    <button className="fimg4" onClick={() => {}}></button>
  </SwiperSlide>
  <SwiperSlide>
    <button className="fimg5" onClick={() => {}}></button>
  </SwiperSlide>
</Swiper>
      </div>
      <div className="fivestar-container" style={{marginBottom: "30px"}}>
        <h2 style={{ color: "#067062"}}>4-Star Projects:</h2>
        <Swiper
        spaceBetween={10}  
        slidesPerView={4}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={false}
        modules={[Navigation, Autoplay]}
        className="fivestar custom-swiper"
        >
  <SwiperSlide>
    <button className="fimg1" onClick={() => {}}></button>
  </SwiperSlide>
  <SwiperSlide>
    <button className="fimg2" onClick={() => {}}></button>
  </SwiperSlide>
  <SwiperSlide>
    <button className="fimg3" onClick={() => {}}></button>
  </SwiperSlide>
  <SwiperSlide>
    <button className="fimg4" onClick={() => {}}></button>
  </SwiperSlide>
  <SwiperSlide>
    <button className="fimg5" onClick={() => {}}></button>
  </SwiperSlide>
</Swiper>
      </div>
      <div className="fivestar-container" style={{marginBottom: "30px"}}>
        <h2 style={{ color: "#067062"}}>3-Star Projects:</h2>
        <Swiper
        spaceBetween={10}  
        slidesPerView={4}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={false}
        modules={[Navigation, Autoplay]}
        className="fivestar custom-swiper"
        >
  <SwiperSlide>
    <button className="fimg1" onClick={() => {}}></button>
  </SwiperSlide>
  <SwiperSlide>
    <button className="fimg2" onClick={() => {}}></button>
  </SwiperSlide>
  <SwiperSlide>
    <button className="fimg3" onClick={() => {}}></button>
  </SwiperSlide>
  <SwiperSlide>
    <button className="fimg4" onClick={() => {}}></button>
  </SwiperSlide>
  <SwiperSlide>
    <button className="fimg5" onClick={() => {}}></button>
  </SwiperSlide>
</Swiper>
      </div>
        </>
    )
}
export default Home;