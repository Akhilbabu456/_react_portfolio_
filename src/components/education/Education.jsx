import "./education.scss"
import {motion} from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
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

const Education = () => {
  return (
    <section className="timeline-section" id="education">
    <h2 className="heading">Education</h2>

    <div className="timeline-items" >
        <motion.div className="timeline-item" variants={variants} initial="initial" whileInView={"animate"}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">2017</div>
            <div className="timeline-content">
                <h3>High School</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores assumenda dignissimos officia repudiandae quisquam eos dicta possimus rerum adipisci dolores, quod culpa reiciendis aspernatur eveniet, obcaecati, quo animi labore nobis.</p>
            </div>
        </motion.div>
        <motion.div className="timeline-item" variants={variants} initial="initial" whileInView={"animate"}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">2017-2019</div>
            <div className="timeline-content">
                <h3>Higher Secondary</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores assumenda dignissimos officia repudiandae quisquam eos dicta possimus rerum adipisci dolores, quod culpa reiciendis aspernatur eveniet, obcaecati, quo animi labore nobis.</p>
            </div>
        </motion.div>
        <motion.div className="timeline-item" variants={variants} initial="initial" whileInView={"animate"}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">2019-2023</div>
            <div className="timeline-content">
                <h3>Diploma Mechanical</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores assumenda dignissimos officia repudiandae quisquam eos dicta possimus rerum adipisci dolores, quod culpa reiciendis aspernatur eveniet, obcaecati, quo animi labore nobis.</p>
            </div>
        </motion.div>
       
    </div>
</section>
  )
}

export default Education