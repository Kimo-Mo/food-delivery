/* eslint-disable react/prop-types */
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text my-4 fs-6">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience.
        One delicious meal at a time.
      </p>
      <div className="explore-menu-list justify-content-md-start justify-content-center mb-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            540: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
            1244: {
              slidesPerView: 7,
            },
          }}
          modules={[Autoplay]}>
          {menu_list.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  onClick={() =>
                    setCategory((prev) =>
                      prev === item.menu_name ? "All" : item.menu_name
                    )
                  }
                  className="explore-menu-item">
                  <img
                    className={category === item.menu_name ? "active" : ""}
                    src={item.menu_image}
                    alt={item.menu_name}
                  />
                  <p className="fs-6">{item.menu_name}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
