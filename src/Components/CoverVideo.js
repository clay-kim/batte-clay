import React from 'react'
import styled from 'styled-components'
import mainMovie from '../assets/bgMovie.mp4'
import mainMovie2 from '../assets/jindalay.mov'
import { motion } from "framer-motion"


const VideoContainer = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;

    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media (max-width: 600px){
            object-position: center 10%;
        }
    }
    @media (max-width:600px) {
        object-position: center 50%;

    }
`
const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0; // 0 didn't work
    left: 0;
    right: 0;
    z-index: 1;
    background-color: #FFFEDB;
    opacity: 0.2;
`
const Title = styled(motion.div)`
    position: absolute;
    top: -40px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    div {
        display: flex;
        flex-direction: row;
    }
    h1{
        color: rgba(255, 255, 255, 0.9);
        font-size: 80px;
        text-align: center;
        text-shadow: 2px 2px 4px gray;
        font-weight: 100;
        font-family: 'Commissioner', sans-serif;

        @media (max-width:600px) {
        font-size: 50px;
    }
    
    }
    h2 {
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.25rem;
        font-weight: 100;
        text-align: center;
        text-shadow: 1px 1px 2px gray;
        padding-top: 15px;
        text-transform: none;
        font-family: 'Commissioner', sans-serif;
        margin-top: -80px;

        @media (max-width:600px) {
        font-size: 18px;
        margin-top: -30px;
        padding-top: 0;
    }
    }
`
const container = {
    hidden: {
        opacity: 0,

    },
    show: {
        opacity: 1,

        transition: {
            delayChildren: 2,
            staggerChildren: 0.5,
        }
    }
}


const item = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut',
        }
    }
}

const item2 = {
    hidden: {
        opacity: 0,

    },
    show: {
        opacity: 1,

        transition: {
            duration: 2,
            ease: 'easeInOut',
        }
    }
}



function CoverVideo() {
    return (

        <VideoContainer>
            <DarkOverlay />
            <Title variants={container} initial="hidden" animate="show">
                <div>
                    <motion.h1
                    initial={{
                        x: '50%',
                        opacity:0
                    }}
                    animate={{
                        x: '0',
                        opacity:1
                    }}
                    transition={{
                        duration: 2, delay: 1
                    }} >Studio&nbsp; </motion.h1>

                    <motion.h1 variants={item} >B</motion.h1>
                    <motion.h1 variants={item} >A</motion.h1>
                    <motion.h1 variants={item} >T</motion.h1>
                    <motion.h1 variants={item} >T</motion.h1>
                    <motion.h1 variants={item} >E</motion.h1>
                </div>
                    <motion.h2 variants={item2} >Wedding and Floral Design</motion.h2>
            </Title>
            <video src={mainMovie2} type="video/mov" autoPlay muted loop />
        </VideoContainer>
    )
}

export default CoverVideo