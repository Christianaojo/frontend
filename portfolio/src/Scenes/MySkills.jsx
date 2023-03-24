import LineGradient from "../Components/LineGradient";
import useMediaQuery from "../Hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () =>{
const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
return(
    <section id="skills" className="pt-20 pb-24">
        {/**Header and image section */}
    <div className="md:flex md:justify-between md:gap-16 mt-32>">
        <motion.div 
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewPort={{ once: true, amount: 0.5 }}
        transition={{ duration:0.5 }}
        variants={{
            hidden:{opacity: 0, x: -50},
            visible:{opacity: 1, x: 0}
        }}
        >
            <p className="font-playfair font-semibold text-4xl mb-5">MY <span className="text-red">SKILLS</span>
                </p>
            <LineGradient width="w-1/3" />
            <p className="mt-10 mb-7">I drive innovation on the web with strong problem solving, communication and collaboration skills.</p>
            <p className="font-semibold text-2xl">Tech Stack</p>

            <div className="flex justify-center md:justify-start my-2 gap-7"> 
            <img src="assets/html5.svg" alt="github-link" className="w-10"/>          
            <img src="assets/CSS.svg" alt="github-link" className="w-10"/>
             <img src="assets/SASS.svg" alt="github-link" className="w-10"/>
            <img src="assets/javascript.svg" alt="github-link" className="w-10" />                
            <img src="assets/react.svg" alt="github-link" className="w-10"/>
            <img src="assets/tailwind.svg" alt="github-link" className="w-10"/>
            
          </div>
        </motion.div>
        <div className="mt-16 md:mt-0">
            {isAboveMediumScreens ? (
                <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20 before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]"
                > 
                <img 
                alt="skills" 
                className="z-10"
                src="assets/skills-image.png" 
                />
                </div>
            ) : (
                <img 
                alt="skills" 
                className="z-10"
                src="assets/skills-image.png" 
                />
            )}
        </div>
    </div>
        {/**Skills */}
        <div className="md:flex md:justify-between mt-16 gap-32">
            {/**Experience */}
            <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewPort={{ once: true, amount: 0.5 }}
            transition={{ duration:0.5 }}
            variants={{
                hidden:{opacity: 0, x: 50},
                visible:{opacity: 1, x: 0}
            }}
            >
                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">01</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">Innovative</p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">I take a holistic and innovative approach to software development,  that not only meets user's needs but also exceeds expectations, with carefully executed process with precision and attention to detail.</p>

                   
            </motion.div>

            <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewPort={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration:0.5 }}
            variants={{
                hidden:{opacity: 0, x: 50},
                visible:{opacity: 1, x: 0}
            }}
            >
                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">02</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">Imaginative</p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                   I take pride in my ability to bring a creative approach to my work.
                    My creative skills enable me to design interfaces that meets the functional requirements of a project,
                    and provide users with a unique experience. 
                    </p>
                 
                
            </motion.div>

            <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewPort={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration:0.5 }}
            variants={{
                hidden:{opacity: 0, x: 50},
                visible:{opacity: 1, x: 0}
            }}
            >
                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">03</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">Adaptability</p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                    I am committed to continually improving my skills and knowledge. 
                    I am always eager to learn about new technologies, frameworks, and best practices that can help me deliver better solutions for my clients.
                    </p>
                 
              
            </motion.div>
            

        </div>
    </section>
)
};
export default MySkills;