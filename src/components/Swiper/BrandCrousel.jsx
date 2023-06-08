import { Swiper, SwiperSlide } from "swiper/react";
import unity from "../../assets/unity.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import styles from "./swiper.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const BrandCrousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiper_slide}>
          <img src={unity} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src={unity} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src={unity} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src={unity} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src={unity} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src={unity} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src={unity} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src={unity} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BrandCrousel;
