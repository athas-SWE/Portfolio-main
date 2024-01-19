import React from "react";
import "./skill.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { motion } from "framer-motion";
import Resume from '../Skill/Resum.pdf';





const Skill = () => {

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="skill" id="skill">

      <div className="awesome">

        <span>My Awesome</span>
        <span>Skills</span>

        <span> <h1>“First, solve the problem. Then, write the code.” <br /> <br /> - John Johnson - </h1></span>

        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>

      </div>

      <div className="cards">

        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Programming Languages"}
            detail={"HTML5, CSS , C#, JavaScript/ES6 , Python, Typescript,React Native"}
          />
        </motion.div>



        <motion.div
          initial={{ left: "10rem" }}
          whileInView={{ left: "30rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frame Works"}
            detail={".NET & Core technology (C#.NET,MVC5,WebAPI) ,Reactjs,Node.js, Bootstrap, JQuery, Next.js ,Express.js, Flask, Django"}
          />
        </motion.div>



        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Languages"}
            detail={"English , Sinhala , Tamil"}
          />
        </motion.div>


        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "48rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Genral Knowledge"}
            detail={"AWS ,Machine Learning ,Git , Adobe ,Figma ,Software Testing(Selenium) ,etc"}
          />
        </motion.div>



        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Database"}
            detail={"MongoDB, MSSQL, Firebase"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>



        <motion.div
          initial={{ top: "19rem", left: "19rem" }}
          whileInView={{ left: "30rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Research And Development"}
            detail={"Dialysis Mobile Care APP (Final Year Project),USAID Project , ETC Garbage Management System (Hackadev)"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>




      </div>
    </div>
  );
};

export default Skill;
