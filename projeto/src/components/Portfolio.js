import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import {
  fb,
  insta,
  maximize,
  soundcloud,
  text,
  twitter,
  vimeo,
  youtube,
} from "../svgImage";
import { aTagClick, dataImage } from "../utilits";
import ModalBox from "./ModalBox";
import Popup from "./Popup";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
    }, 300);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    dataImage();
    aTagClick();
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  // popup
  const [video, setVideo] = useState(false);
  const [videoContent, setVideoContent] = useState({ name: "", src: "" });
  const showPopup = (name, src) => {
    setVideo(true);
    setVideoContent({ name, src });
  };
  // Model Box
  const [modal, setModal] = useState(0);
  return (
    <div className="aali_tm_section help" id="portfolio">
      {video && <Popup close={setVideo} content={videoContent} />}
      <div className="aali_tm_portfolio wow fadeInUp" data-wow-duration="1s">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="light"
          >
            <span>Selecione trabalhos</span>
            <h3>Meu portfólio</h3>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a onClick={handleFilterKeyChange("*")} className="current">
                  Todos
                </a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("ImoveisSA")}>ImoveisSA</a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("AdTurbos")}>AdTurbos</a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("Midway")}>Midway</a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("aquablast")}>aquablast</a>
              </li>
              {/* <li>
                <a onClick={handleFilterKeyChange("detail")}>Detalhes</a>
              </li> */}
            </ul>
          </div>
          <div className="portfolio_list">
            <ul className="gallery_zoom">
              <li className="filter-item vimeo">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/portfolio/aqua.png" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Aquablast</span>
                    <h3>Website</h3>
                  </div>
                  <a
                    className="aali_tm_full_link popup-vimeo"
                    href="#"
                    onClick={() => setModal(4)}
                  />
                </div>
                <div className={modal === 4 ? "" : "hidden_content"}>
                  <ModalBox close={setModal}>
                    <div className="popup_details">
                      <div className="top_image">
                        <img src="img/thumbs/4-2.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/aqua1.png"
                        ></div>
                      </div>
                      <div className="portfolio_main_title">
                        <span>Detalhes</span>
                        <h3>Aquablast</h3>
                        <div></div>
                      </div>
                      <div className="main_details">
                        <div className="textbox">
                          {/* <p>
                              Vivemos em um mundo onde precisamos agir rapidamente
                              e repetir nossas ideias da maneira mais flexível possível.
                              Construir maquetes atinge o equilíbrio ideal, facilidade de
                              modificação.
                            </p> */}
                          <p>
                            Participei desde o início do desenvolvimento deste projeto, que teve como objetivo criar a presença digital de uma empresa especializada em serviços de hidrojateamento. O trabalho envolveu a construção de uma landing page moderna, responsiva e otimizada para conversão.

                            A página foi desenvolvida utilizando React com Vite para garantir performance e agilidade no processo de build, além de JavaScript e TypeScript para organização, tipagem e escalabilidade do código. Também foram aplicadas boas práticas de UX/UI para oferecer uma navegação simples e intuitiva, destacando os principais serviços da empresa e facilitando o contato de clientes potenciais.
                            LINK: https://aquablast.com.br/
                          </p>
                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Cliente</span>
                              <span>Aquablast</span>
                            </li>
                            <li>
                              <span className="first">Categoria</span>
                              <span>
                                <a href="#">Web-site</a>
                              </span>
                            </li>
                            <li>
                              <span className="first">Data</span>
                              <span>06 de agosto 2025</span>
                            </li>
                            <li>
                              <span className="first">Compartilhe</span>
                              <ul className="share">
                                <li>
                                  <a href="https://www.facebook.com/sharer/sharer.php?u=https://localhost:3000/#home">{fb}</a>
                                </li>
                                <li>
                                  <a href="https://twitter.com/intent/tweet?url=https://localhost:3000/#home">{twitter}</a>
                                </li>
                                <li>
                                  <a href="https://www.instagram.com/direct/inbox/">{insta}</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img
                                  src="img/thumbs/4-2.jpg"
                                  alt="aali image"
                                />
                                <div
                                  className="main"
                                  data-img-url="img/portfolio/aqua2.png"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img
                                  src="img/thumbs/4-2.jpg"
                                  alt="aali image"
                                />
                                <div
                                  className="main"
                                  data-img-url="img/portfolio/aqua3.png"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img
                                  src="img/thumbs/4-2.jpg"
                                  alt="aali image"
                                />
                                <div
                                  className="main"
                                  data-img-url="img/portfolio/aqua4.png"
                                />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              {/* <li className="filter-item youtube">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/portfolio/2.jpg" />
                  </div>
                  <div className="overlay" />
                  {youtube}
                  <div className="details">
                    <span>Youtube</span>
                    <h3>Best Phone</h3>
                  </div>
                  <a
                    className="aali_tm_full_link popup-youtube"
                    href="#"
                    onClick={() => showPopup("youtube", "7e90gBu4pas")}
                  />
                </div>
              </li> */}
              <li className="filter-item Midway">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/portfolio/Midway.png" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Midway-Creator</span>
                    <h3>Web-site Portfólio</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal(3)}
                  />
                  <div className={modal === 3 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/Mdct.png"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Detalhes</span>
                          <h3>Midway-Creator</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              Desenvolvi um site moderno e funcional para uma empresa de tecnologia especializada em programação. O projeto foi criado utilizando as seguintes tecnologias:
                              Vite: Para proporcionar um carregamento rápido e eficiente.
                              Styled-components: Garantindo um design responsivo, personalizável e sofisticado.
                              React: Para oferecer interatividade, escalabilidade e uma experiência de usuário fluida.
                              O site foi projetado para destacar a inovação da empresa, com foco em alta performance, design intuitivo e flexibilidade para atender diferentes dispositivos e públicos.
                            </p>
                            <p>
                              Criado com tecnologias de ponta como Vite, Styled-Components e React, o site combina performance, design responsivo e flexibilidade para entregar uma experiência única aos usuários.
                            </p>
                          </div>
                          <div className="detailbox">
                            <ul>
                              <li>
                                <span className="first">Cliente</span>
                                <span>Flavio riper</span>
                              </li>
                              <li>
                                <span className="first">Categoria</span>
                                <span>
                                  <a href="#">Empresa</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Data</span>
                                <span>08 de janeiro 2025</span>
                              </li>
                              <li>
                                <span className="first">Compartilhe</span>
                                <ul className="share">
                                  <li>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://localhost:3000/#home">{fb}</a>
                                  </li>
                                  <li>
                                    <a href="https://twitter.com/intent/tweet?url=https://localhost:3000/#home">{twitter}</a>
                                  </li>
                                  <li>
                                    <a href="https://www.instagram.com/direct/inbox/">{insta}</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/Midway2.png"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/Midway3.png"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/navbar.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item ImoveisSA">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/portfolio/Header1.jpg" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>ImoveisSA</span>
                    <h3>Web-site imobiliário</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal(1)}
                  />
                  <div className={modal === 1 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/Header.jpg"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Detalhes</span>
                          <h3>ImoveisSA</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            {/* <p>
                              Vivemos em um mundo onde precisamos agir rapidamente
                              e repetir nossas ideias da maneira mais flexível possível.
                              Construir maquetes atinge o equilíbrio ideal, facilidade de
                              modificação.
                            </p> */}
                            <p>
                              Este site imobiliário foi desenvolvido utilizando React com Styled Components para criar uma interface elegante e responsiva. O backend, construído em Node.js com Express, oferece uma estrutura robusta para gerenciar os dados de forma eficiente. Para armazenamento e manipulação de informações, utilizamos um banco de dados MySQL, garantindo confiabilidade e desempenho. A plataforma é ideal para conectar clientes a imóveis de forma intuitiva, moderna e segura.
                            </p>
                          </div>
                          <div className="detailbox">
                            <ul>
                              <li>
                                <span className="first">Cliente</span>
                                <span>Midway</span>
                              </li>
                              <li>
                                <span className="first">Categoria</span>
                                <span>
                                  <a href="#">Web-site Imobiliário</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Data</span>
                                <span>26 de novembro 2024</span>
                              </li>
                              <li>
                                <span className="first">Compartilhe</span>
                                <ul className="share">
                                  <li>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://localhost:3000/#home">{fb}</a>
                                  </li>
                                  <li>
                                    <a href="https://twitter.com/intent/tweet?url=https://localhost:3000/#home">{twitter}</a>
                                  </li>
                                  <li>
                                    <a href="https://www.instagram.com/direct/inbox/">{insta}</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/Destaques.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/Depoimentos.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/navbar.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              {/* <li className="filter-item image">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/portfolio/5.jpg" />
                  </div>
                  <div className="overlay" />
                  {maximize}
                  <div className="details">
                    <span>Image</span>
                    <h3>Mockup Camera</h3>
                  </div>
                  <a
                    className="aali_tm_full_link zoom"
                    href="#"
                    onClick={() => showPopup("image", "img/portfolio/5.jpg")}
                  />
                </div>
              </li> */}
              <li className="filter-item AdTurbos">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/portfolio/BannerAdTurbos.jpg" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Detalhes</span>
                    <h3>AdTurbos</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal(2)}
                  />
                  <div className={modal === 2 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/SectionAdTurbos.jpg"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Detalhes</span>
                          <h3>AdTurbos</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              Desenvolvido com a poderosa plataforma WordPress e o tema Elementor Pro, oferece uma navegação moderna, responsiva e intuitiva.
                              Recursos de Destaque:Navbar com Orçamento Rápido: Encontre facilmente a opção "Solicitar Orçamento" no menu superior para agilizar seu pedido. Ideal para quem quer saber mais detalhes e valores sem complicações.
                              LINK: https://adturbos.com.br/
                            </p>
                            <p>
                              Blog Atualizado: Descubra dicas, novidades e conteúdos exclusivos sobre o mundo dos turbos automotivos. Nossa página de blog foi especialmente projetada para manter você sempre atualizado e engajado.
                              Design Responsivo e Personalizado: Um layout limpo e funcional, adaptado para oferecer a melhor experiência, seja no desktop ou no celular.
                            </p>
                          </div>
                          <div className="detailbox">
                            <ul>
                              <li>
                                <span className="first">Cliente</span>
                                <span>AdTurbos</span>
                              </li>
                              <li>
                                <span className="first">Categoria</span>
                                <span>
                                  <a href="#">Serviços Automotivos</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Date</span>
                                <span>20 de dezembro</span>
                              </li>
                              <li>
                                <span className="first">Compartilhe</span>
                                <ul className="share">
                                  <li>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://localhost:3000/#home">{fb}</a>
                                  </li>
                                  <li>
                                    <a href="https://twitter.com/intent/tweet?url=https://localhost:3000/#home">{twitter}</a>
                                  </li>
                                  <li>
                                    <a href="https://www.instagram.com/direct/inbox/">{insta}</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/PortfólioAdTurbos.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/ServiçosAdTurbos.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/RodapéAdTurbos.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
