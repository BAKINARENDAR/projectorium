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
      <div className="fivestar-container" style={{marginTop: "30px",marginLeft:"10px",marginRight:"10px"}}>
      <center><h2 style={{borderRadius:"10px",boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)", color: "white", backgroundColor:"#067062",marginBottom:"10px"}}>5-Star Projects</h2></center>
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
      <div className="fivestar-container" style={{marginTop: "30px",marginLeft:"10px",marginRight:"10px"}}>
      <center><div style={{borderRadius:"10px",boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)", color: "white", backgroundColor:"#067062",marginBottom:"10px"}}><h2>4-Star Projects</h2></div></center>
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
      <div className="fivestar-container" style={{marginTop: "30px",marginLeft:"10px",marginRight:"10px"}}>
        <center><h2 style={{borderRadius:"10px",boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)", color: "white", backgroundColor:"#067062",marginBottom:"10px"}}>3-Star Projects</h2></center>
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