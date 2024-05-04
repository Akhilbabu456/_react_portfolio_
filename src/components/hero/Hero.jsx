import "./hero.scss"
import {motion} from "framer-motion"
import styled from "styled-components";
import { Tilt } from "react-tilt";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-290%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    },
}

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;


const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>Akhil Babu S</motion.h2>
            <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
            <motion.div variants={textVariants} className="buttons">
                <motion.a variants={textVariants} href="/Akhil_Babu_S_Java_Resume.pdf" download={"Akhil_Babu_S_Java_Resume.pdf"}>Download CV</motion.a>
                <motion.a href="#Contact" variants={textVariants}>Contact Me</motion.a>
            </motion.div>
            <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton"/>
        </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" >
            <span>Full Stack Developer</span>
        </motion.div>
        
              <motion.div className="imageContainer">
                <Tilt>
                  <Img src="/hero.png" alt="Akhil Babu S" />
                </Tilt>
              </motion.div>
        
    </div>
  )
}

export default Hero