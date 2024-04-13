


import { motion } from 'framer-motion';
import meter1 from "/meter1.svg";
import meter3 from "/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "./skills.scss"


const Skills = () => {

   
 
    
    const variants = {
        initial: {
            x: 100,
            y: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 724 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 724, min: 564 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 564, min: 0 },
          items: 1
        }
      };

  return (
    <motion.section className="skill" id="skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <motion.div className="skill-bx wow zoomIn" variants={variants} initial="initial" whileInView="animate" >
                    <h2>Skills</h2>
                   
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <img src={meter1} alt="Image" />
                            <h5>HTML</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt="Image" />
                            <h5>CSS</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt="Image" />
                            <h5>Bootstrap</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="Image" />
                            <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt="Image" />
                            <h5>MongoDB</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="Image" />
                            <h5>Express.js</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="Image" />
                            <h5>Node.js</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="Image" />
                            <h5>React.js</h5>
                        </div>
                    </Carousel>
                </motion.div>
            </div>
        </div>
    </div>
</motion.section>
  )
}

export default Skills 
