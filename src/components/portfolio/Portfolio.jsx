import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "InkWell Chronicles Blog website - Full Stack",
    img: "/blog.png",
    link: "https://github.com/Akhilbabu456/java_springboot_mastery/tree/main/java_springboot_blog",
    desc: `I have developed InkWell Chronicles, a blog project featuring both admin and user interfaces. The admin interface offers complete control over posts, users, and comments, while the user interface enables users to sign up using their emails, with verification through Google Authentication OAuth 2.0. Users can view, search, and comment on posts, with control limited to their respective blogs.`,
  },
  {
    id: 2,
    title: "Recipe app - Recipe shareing platform ",
    img: "/recipe.png",
    link: "https://github.com/Akhilbabu456/recipe_app_springboot",
    desc: `User developed a recipe sharing application using Angular, JavaScript, Tailwind CSS, SCSS, HTML, Cloudinary, Material UI, MySQL, Spring Boot, Java, JPA, and Spring Security. The project enables users to share and discover recipes, leveraging Cloudinary for image management, Material UI for UI components, and Spring Boot with Spring Security for backend services and authentication. `,
  },
  {
    id: 3,
    title: "Threads Clone with Real Time chat feature - Full Stack",
    img: "/threads.png",
    link: "https://github.com/Akhilbabu456/_thread_clone_mern",
    desc: `Overview: I cloned the popular meta app Threads, enhancing it with real-time chat and live video features. Utilized
    MongoDB, Express.js, Node.js for backend, and React.js for dynamic UI. Integrated Chakra UI, JWT, Socket.io, Cron,
    Recoil for smooth functionality, plus Cloudinary and ZEGO Cloud for media management and live streaming.
     Key Features: Secure authentication, post management, user interaction, customizable UI, real-time chat, activity
    tracking, live video calling`
  },
  {
    id: 4,
    title: "BookMyFilm Movie Booking App - Full Stack",
    img: "/movie.png",
    link: "https://github.com/Akhilbabu456/_movie_booking_mern",
    desc: `With BookMyFilm, users can easily view available shows and book tickets with the convenience of razorpay payment integration. 

        But that's not all! Upon successful payment, users will receive an email with their booking details and a downloadable ticket in PDF format with a QR code.
        
        For added security, our sign up process includes email verification. A verification email with a link will be sent to the user's email ID, which expires in 30 seconds. Once verified, the account will be created.
        `,
  },
  {
    id: 5,
    title: "Medical Store Inventory Management - React.js",
    img: "/medica.png",
    link: "https://github.com/Akhilbabu456/_react_works/tree/main",
    desc: `Medical store management website  React!  This website includes user authentication and features such as add, update, delete, and search for medical store inventory. 

        Using React, I was able to design a user-friendly interface that allows store owners to easily manage their inventory. The user authentication feature ensures that only authorized personnel have access to sensitive information, providing an extra layer of security. 
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
            <a href={item.link}>See Demo</a>
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
