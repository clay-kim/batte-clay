import React from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import bannerPic from '../assets/field2.jpg'

import bannerPic2 from '../assets/banner.jpg'


const Section = styled.section`
    position: relative;
    height: 20vh;
    width: 100vw;
    margin: 0 auto;
    background-color: #2e2e27;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

`

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const BannerComponent = styled.div`
    color: white;
    font-size: 1.5em;
    font-family: 'Poiret One', cursive;
    white-space: nowrap;
    text-transform: uppercase;
    line-height: 1;
    text-shadow: 2px 2px 4px black;
    z-index: 19;
    transform: rotate(30deg);
    opacity: 0.8;
    
    span {
    display: block;
    background-color: #233B3B;
    margin-right: 10px;
    padding: 1rem 2rem;
   
    }
`

const BannerPic = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #EEDEBB;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    img {
        width: 100%;
        height: auto;
        opacity: 0.7;
        
    }
`


function Banner() {

    useEffect(() => {
        AOS.init({
            offset: 200, // offset (in px) from the original trigger point
   
            easing: 'ease'
        });
      }, []);

  return (


        <Section>
            <Container>
            <BannerPic>
                <img src={bannerPic2}></img>
            </BannerPic>
            <BannerComponent>
                <span  data-aos="fade-up-left"
                data-aos-offset="150"
                data-aos-delay="2"
                data-aos-duration="2000"
                >Birthday</span>         
            </BannerComponent>
            <BannerComponent>
            <span data-aos="zoom-in-up"
                data-aos-offset="150"
                data-aos-delay="1"
                data-aos-duration="1000"
                >Wedding</span>         
            </BannerComponent>
            <BannerComponent>
            <span data-aos="fade-up-left"
                data-aos-offset="150"
                data-aos-delay="2"
                data-aos-duration="2000"
                >Anniversary</span>    
            </BannerComponent>
            <BannerComponent>
                <span data-aos="fade-down-right"
                data-aos-offset="150"
                data-aos-delay="2"
                data-aos-duration="1000"
                >Occasion</span>    
            </BannerComponent>
            <BannerComponent>
            <span data-aos="fade-left"
                data-aos-offset="150"
                data-aos-delay="1"
                data-aos-duration="2000"
                >Event</span>    
        </BannerComponent>
            </Container>
        </Section>
  )
}

export default Banner