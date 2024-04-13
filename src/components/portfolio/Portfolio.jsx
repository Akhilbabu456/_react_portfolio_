import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Threads Clone with Real Time chat feature - Full Stack",
    img: "/threads.png",
    desc: "A clone of the popular social media platform, Threads. This project was built using React, Chakra UI, Express.js, Socket.io and MongoDB atlas.",
  },
  {
    id: 2,
    title: "BookMyFilm Movie Booking App - Full Stack",
    img: "/threads.png",
    desc: `With BookMyFilm, users can easily view available shows and book tickets with the convenience of razorpay payment integration. 

        But that's not all! Upon successful payment, users will receive an email with their booking details and a downloadable ticket in PDF format with a QR code.
        
        For added security, our sign up process includes email verification. A verification email with a link will be sent to the user's email ID, which expires in 30 seconds. Once verified, the account will be created.
        `,
  },
  {
    id: 3,
    title: "Medical Store Inventory Management - React.js",
    img: "/threads.png",
    desc: `Medical store management website  React!  This website includes user authentication and features such as add, update, delete, and search for medical store inventory. 

        Using React, I was able to design a user-friendly interface that allows store owners to easily manage their inventory. The user authentication feature ensures that only authorized personnel have access to sensitive information, providing an extra layer of security. 
        `,
  },
  {
    id: 4,
    title: "Pen and Paper Blog website - Express.js",
    img: "/threads.png",
    desc: `Using Express, MongoDB, and Handlebars as my template engine. This page has all the features you could ask for - a search function, the ability to like, add, update and delete blogs, and even user settings. 

         As a blogger, I understand the importance of having a user-friendly and efficient blog page. That's why I chose to build mine using these powerful tools. Express allowed me to easily create a server and handle routes, while MongoDB helped me store and manage my data. And with Handlebars, designing and rendering my blog page was a breeze. `,
  },
  {
    id: 5,
    title: "To-Do List using Node.js",
    img: "/threads.png",
    desc: `A to-do app using node.js and mongodb. This has been a challenging yet rewarding experience and I am excited to share it with all of you.

         As a developer, I am always looking for ways to improve my skills and expand my knowledge. Building this app has allowed me to dive deeper into the world of node.js and mongodb, and I have been blown away by their capabilities.
        
        `,
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section className="portfolio">
      <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>
          <img src={item.img} alt="" />
            </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
