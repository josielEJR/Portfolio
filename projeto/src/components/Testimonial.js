import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, Autoplay]);

const DepoimentosList = [
  {
    id: 1,
    nome: "Willian",
    depoimento: "Tive problemas para encontrar algo, perguntei sobre, obtive uma resposta e uma solução em poucos minutos.",
    heading: "Front-End Developer, Designer Gráfico",
    ft: "/img/depoimentos/Will.jpg",
  },
  {
    id: 2,
    nome: "Bruno Gabriel",
    depoimento: "Good overall template. I am getting back into coding and had a simple question for the author. They responded within 5 minutes and answered my question. Highly recommend!",
    heading: "Desenvolvedor front-end",
    ft: "/img/depoimentos/Arte-Giga.png",
  },
  {
    id: 3,
    nome: "João",
    depoimento: "I can't believe I got support and my problem resolved in just minutes from posting my question. Simply amazing team and amazing theme! Thank you for all!",
    heading: "Desenvolvedor front-end",
    ft: "/img/depoimentos/Joao.jpg",
  },
];


const Testimonial = () => {
  const swiperProps = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    } ,
    pagination: false,
    navigation: {
      prevEl: ".prev_button",
      nextEl: ".next_button",
    },
  };

return (
  <div className="aali_tm_section" id="testimonial">
    <div className="aali_tm_testimonials">
      <div className="left">
        <div className="image">
          <Swiper {...swiperProps} className="swiper-image-carousel">
            {DepoimentosList.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.ft} alt={item.nome} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="right">
        <div className="right_in">
          <div
            className="aali_tm_main_title"
            data-text-align="left"
            data-color="light"
          >
            <span>Depoimento</span>
            <h3>O que as pessoas dizem</h3>
          </div>
          <Swiper {...swiperProps} className="swiper-text-carousel">
            {DepoimentosList.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="text">
                  <p>{item.depoimento}</p>
                </div>
                <div className="name">
                  <h3>
                    {item.nome}, <span>{item.heading}</span>
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="direct">
            <a className="prev_button">
              <i className="icon-left" />
            </a>
            <a className="next_button">
              <i className="icon-right" />
            </a>
          </div>
        </div>
      </div>
      <span className="border">
        <span
          className="in moving_effect"
          data-direction="x"
          data-reverse="yes"
        />
      </span>
      <span
        className="square moving_effect"
        data-direction="y"
        data-reverse="yes"
      />
      <span className="quote moving_effect" data-direction="x">
        <i className="icon-quote-left" />
      </span>
    </div>
  </div>
);
};

export default Testimonial;
