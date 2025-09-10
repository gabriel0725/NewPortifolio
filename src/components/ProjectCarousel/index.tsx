'use client'
import ExternalLinkImg from '../../../assets/img/external_link_icon2.png'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import Card from '../Card'
import projects from '@/Mock/Projects'
import { CarouselContainer, ProjectContainer, StyledPagination } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  EffectCoverflow,
  Keyboard,
  Mousewheel,
  Pagination
} from 'swiper/modules'
import { useRef } from 'react'
import { ImgContainer } from '../Home/styles'

const ProjectCarousel = () => {
  const swiperRef = useRef<any>(null)

  return (
    <CarouselContainer>
      <h3>Projetos</h3>
      <ProjectContainer>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false
          }}
          keyboard={{
            enabled: true
          }}
          spaceBetween={0}
          loop={true}
          pagination={{
            el: '.swiper-pagination',
            clickable: true
          }}
          modules={[EffectCoverflow, Keyboard, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={project.id}
              onClick={() => swiperRef.current?.slideToLoop(index)} // centraliza no clique
            >
              <Card
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="btnProjetos">
          <a href="#">
            <ImgContainer type="black">
              <img src={ExternalLinkImg.src} alt="projetos" />
              <p>Projetos</p>
            </ImgContainer>
          </a>
        </div>
      </ProjectContainer>
      <StyledPagination className="swiper-pagination"></StyledPagination>
    </CarouselContainer>
  )
}

export default ProjectCarousel
