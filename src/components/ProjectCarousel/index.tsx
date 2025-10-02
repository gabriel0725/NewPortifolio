'use client'
import ProjectsImg from '../../../assets/img/projects_icon.png'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import Card from '../Card'
import projects from '@/Mock/Projects'
import {
  CarouselContainer,
  ImgBtn,
  ProjectContainer,
  StyledPagination
} from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Keyboard, Pagination } from 'swiper/modules'
import { useRef } from 'react'

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
          loop={true}
          pagination={{
            el: '.swiper-pagination',
            clickable: true
          }}
          modules={[EffectCoverflow, Keyboard, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              effect: 'slide'
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40
            }
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={project.id}
              onClick={() => swiperRef.current?.slideToLoop(index)}
            >
              <Card
                links={false}
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="btnProjetos-container">
          <div className="btnProjetos">
            <a href="/ProjectsPage">
              <ImgBtn type="black">
                <img src={ProjectsImg.src} alt="projetos" />
                <p>Projetos</p>
              </ImgBtn>
            </a>
          </div>
        </div>
      </ProjectContainer>
      <StyledPagination className="swiper-pagination"></StyledPagination>
    </CarouselContainer>
  )
}

export default ProjectCarousel
