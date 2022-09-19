import React from 'react';
import html from "../../asstes/html-5.png";
import css from "../../asstes/css.png";
import js from "../../asstes/js.png";
import typescript from "../../asstes/typescript.png";
import webpack from "../../asstes/webpack.svg";
import sass from "../../asstes/sass.png";
import tailwind from "../../asstes/tailwind.png";
import react from "../../asstes/react.png";
import bootstrap from "../../asstes/bootstrap.png";
import graphql from "../../asstes/graphql.png";
import gatsby from "../../asstes/gatsby.png"
import git from "../../asstes/git.png"


const Skills = () => {
  return (
    <div>
        <div className={"container mx-auto p-4 flex flex-col justify-center h-full"}>
            <div>
                <p className={"text-2xl sm:text-3xl md:text-4xl font-bold text-backgroundColor inline border-b-[3px] border-primary"}>My Skills</p>
                <p className={"py-4"}>\\ I've worked with these technologies</p>
            </div>

            <div className={"w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 "}>
                <div className={"shadow-md shadow-[#dddddd] hover:scale-110 border-2 border-secondary  duration-300"}>
                    <img src={html} className={"mx-auto w-16 mt-4 md:w-20"} alt="html icon"/>
                    <p className={"py-4"}>HTML</p>
                </div>
                <div className={"shadow-md shadow-[#dddddd] hover:scale-110 border-2 border-secondary  duration-300"}>
                    <img src={css} className={"mx-auto mt-4 w-16 md:w-20"} alt="cssicon"/>
                    <p className={"py-4"}>CSS</p>
                </div>
                <div className={"shadow-md shadow-[#dddddd] hover:scale-110 border-2 border-secondary  duration-300"}>
                    <img src={js} className={"mx-auto w-16 mt-4 md:w-20"} alt="javascript icon"/>
                    <p className={"py-4"}>JavaScript</p>
                </div>
                <div className={"shadow-md shadow-[#dddddd] hover:scale-110 border-2 border-secondary  duration-300"}>
                    <img src={typescript} className={"mx-auto w-16 mt-4 md:w-20"} alt="typescript icon"/>
                    <p className={"py-4"}>TypeScript</p>
                </div>
                <div className={"shadow-md shadow-[#dddddd] hover:scale-110 border-2 border-secondary  duration-300"}>
                    <img src={react} className={"mx-auto w-16 mt-4 md:w-20"} alt="react icon"/>
                    <p className={"py-4"}>React</p>
                </div>
                <div className={"shadow-md shadow-[#dddddd] hover:scale-110 border-2 border-secondary  duration-300"}>
                    <img src={sass} className={"mx-auto w-16 mt-4 md:w-20"} alt="sass icon"/>
                    <p className={"py-4"}>SASS</p>
                </div>
                <div className={"shadow-md shadow-[#dddddd] hover:scale-110 border-2 border-secondary  duration-300"}>
                    <img src={tailwind} className={"mx-auto w-16 mt-4 md:w-20"} alt="tailwind icon"/>
                    <p className={"py-4"}>Tailwind</p>
                </div>
                <div className={"shadow-md shadow-[#dddddd] hover:scale-110 border-2 border-secondary  duration-300"}>
                    <img src={bootstrap} className={"mx-auto w-[76px] mt-4 md:w-[95px]"} alt="bootstrap icon"/>
                    <p className={"py-4"}>Bootstrap</p>
                </div>
                <div className={"shadow-md shadow-[#dddddd] hover:scale-110 border-2 border-secondary  duration-300"}>
                    <img src={webpack} className={"mx-auto w-16 mt-4 md:w-20"} alt="webpack icon"/>
                    <p className={"py-2"}>Webpack</p>
                </div>
                <div className={"shadow-md shadow-[#dddddd] hover:scale-110 border-2 border-secondary  duration-300"}>
                    <img src={graphql} className={"mx-auto w-16 mt-4 md:w-20"} alt="graphql icon"/>
                    <p className={"py-4"}>GraphQL</p>
                </div>
                <div className={"shadow-md shadow-[#dddddd] hover:scale-110 border-2 border-secondary  duration-300"}>
                    <img src={gatsby} className={"mx-auto w-16 mt-4 md:w-20"} alt="gatsby icon"/>
                    <p className={"py-4"}>Gatsby</p>
                </div>
                <div className={"shadow-md shadow-[#dddddd] hover:scale-110 border-2 border-secondary  duration-300"}>
                    <img src={git} className={"mx-auto w-16 mt-4 md:w-20"} alt="git icon"/>
                    <p className={"py-4"}>GIT</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills