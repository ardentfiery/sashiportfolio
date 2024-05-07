import React, { useEffect } from "react";
import AOS from "aos";

const Home = () => {
    useEffect(() => {
        AOS.init({
            offset: 120,
            delay: 400,
            duration: 700,
            easing: "ease",
            once: true,
        });
    }, []);
    return (
        <div
            data-aos="fade-right"
            flex
            flex-col
            className="bg-[#dae4ea]  w-[100vw] max-w-[100%] lg:h-[100vh]   h-fit"
        >
            <div className="flex justify-between w-[100%] bg-[#d4e2f3]  text-[#3D52A0] h-20 items-center shadow-sm shadow-[#a2aed7]">
                <div className="flex gap-2 lg:ml-10 text-sm lg:text-[15px] justify-between ">
                    <div>
                        <p className="ml-4">SASHI PURI</p>
                    </div>
                    <div>| COMPUTER ENGINEER |</div>
                </div>
                <div className="mr-2 lg:mr-10 text-[#3D52AO]">
                    <a target="_blank" rel="no referrer" href="/sashi.pdf">
                        | Resume |
                    </a>
                </div>
            </div>
            <div className="lg:flex-row lg:justify-center lg:items-center lg:h-[70vh]  lg:gap-10 lg:ml-16 flex flex-col ">
                <div>
                    <img
                        data-aos="zoom-in"
                        className="lg:h-[20rem] lg:w-[20rem] lg:rounded-full lg:shadow-lg lg: shadow-slate-600 h-[14rem] w-[14rem] rounded-full mt-4 m-auto"
                        src="/pics.jpg"
                        alt=""
                    />
                </div>
                <div className="lg:flex lg:gap-[16px] gap-3  text-[#3D52A0] flex flex-col  mt-4 ">
                    <div className="flex flex-col items-center lg:items-start">
                        <p className="font-bold text-2xl lg:text-5xl lg:ml-4   text-left">
                            SASHI PURI
                        </p>
                        <div className="lg:w-[16vw] w-[140px]  bg-gray-400 h-[1px] shadow-sm shadow-[#a2aed7] lg:ml-4 "></div>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <p className="font-bold lg:text-2xl text-lg  md:text-left text-center lg:ml-6">
                            About Me
                        </p>
                    </div>

                    <div className="lg:w-[30vw]   flex  justify-center">
                        <p className=" text-center lg:text-left w-[90%]">
                            As a recent Computer Engineering graduate, I bring
                            proficiency in HTML, CSS, JavaScript, Python, C,
                            C++, Dart, and Flutter to the table. These aren't
                            just skills; they're my passion. With a commitment
                            to innovation and a hunger for challenges, I'm
                            excited to leverage these tools to drive meaningful
                            change and make a lasting impact in the world of
                            technology.
                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:flex-row  lg:items-center lg:justify-center lg:gap-6 gap-2 flex flex-col">
                <div
                    data-aos="zoom-in-up"
                    className=" mt-4 lg:mt-0 font-bold lg:flex lg:items-center lg:justify-center text-[#3D52A0]  lg:text-left  lg:rounded-full lg:text-2xl text-xl"
                >
                    SKILLS:
                </div>
                <div
                    data-aos="zoom-in-up"
                    className="   lg:flex lg:items-center lg:justify-center text-[#3D52A0]  lg:text-left lg:rounded-full lg:text-2xl"
                >
                    | Python |
                </div>
                <div
                    data-aos="zoom-in-up"
                    className="   lg:flex lg:items-center lg:justify-centerlg:text-[#3D52A0] text-[#3D52A0]  lg:text-left  lg:rounded-full lg:text-2xl"
                >
                    <span className="lg:hidden">|</span> Front-end(HTML,CSS,JS)
                    |
                </div>
                <div
                    data-aos="zoom-in-up"
                    className="   lg:flex lg:items-center lg:justify-center text-[#3D52A0]  lg:text-left lg:rounded-full lg:text-2xl"
                >
                    <span className="lg:hidden">|</span> C,C++ |
                </div>
                <div
                    data-aos="zoom-in-up"
                    className="  lg:flex lg:items-center lg:justify-center text-[#3D52A0] lg:text-left lg:rounded-full lg:text-2xl"
                >
                    <span className="lg:hidden">|</span>Flutter , Dart |
                </div>
            </div>
            <div className="lg:mt-[8vh] mt-[2vh]">
                <div className="lg:w-[90vw] lg:ml-16 lg:mt-[2px] bg-gray-400 h-[1px] shadow-sm shadow-[#a2aed7] ml-4 w-[90vw]"></div>
                <div className="h-[10vh] lg:h-[8vh]  flex justify-around items-center text-[#3D52A0] text-[12px] lg:text-[18px] ">
                    <div>
                        <a target="_blank" rel="no referrer" href="https://www.linkedin.com/in/shashi-puri-534100240/">
                            LinkedIn
                        </a>
                    </div>
                    <div>
                        <a target="_blank" rel="no referrer" href="https://github.com/Sashi1761">Github</a>
                    </div>
                    <div>
                        <a target="_blank" rel="no referrer" href="https://www.instagram.com/shashi_purii/">
                            Instagram
                        </a>
                    </div>
                    <div>
                        <a target="_blank" rel="no referrer" href="https://www.facebook.com/shashi.puri.359">
                            Facebook
                        </a>
                    </div>
                    <div>&copy; Sashi Puri 2024</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
