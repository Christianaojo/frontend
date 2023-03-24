import LineGradient from "../Components/LineGradient";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="pt-40 pb-24">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl md:mt-10">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 text-2xl">
          Beautiful Designs with well thought processes
        </p>
      </motion.div>

      {/* PROJECTS */}
              
          {/**project 1 */}
          <div className="md:flex md:space-between md:mx-8 gap-32 rounded-xl bg-dark-purple m-5 w-full h-100">
          
          <img src="../assets/project-1.jpeg" alt="projectTitle"  className=" md:h-80 md:mt-10 md:ml-10 mb-10 rounded-xl"/>       
      <div className= "md:pr-4 md:-ml-4">
        <p className="md:text-4xl font-playfair font-bold text-4xl text-center mt-5 mb-5">WATUPAY</p>
        <p className="md:mt-5 text-xl text-center">
          A FinTech website that allows users to pay for goods and services or transfer funds to friends and family with great focus on simplicit and responsiveness.
        </p>
        <div className="flex md:ml-20 m-5">
        <p className="md:p-5 md:m-5 p-2 m-3 bg-deep-blue rounded-xl text-xl">React</p>
         <p className="md:p-5 md:m-5 p-2 m-3 bg-deep-blue rounded-xl text-xl">Tailwind CSS</p>
        </div>

        <div className="flex gap-7 md:ml-20 ml-10 -mt-10 p-5">
        <div className="flex">
        <p className=" md:ml-10 text-xl">Live Demo</p>
        <a 
        className="hover:opacity-50 transition duration-500"
        href="https://watupay.com/"
        target="_blank"
        rel="noreferrer"
        >
        <img src="assets/web.png" alt="github-link" className="w-5 mt-2"
        />
        </a>

        </div>
        </div>
      </div>
      
             </div>

       {/**project 2 */}
       <div className="md:flex md:space-between md:mx-8 gap-32 md:mt-20 rounded-xl bg-dark-purple m-5 w-full h-100">
       <img src="../assets/project-2.jpeg" alt="projectTitle"  className="md:order-2 md:h-80 md:mt-10 md:ml-10 mb-10 rounded-xl"/>       

      <div className= "md:pr-4 md:-ml-4">
        <p className="md:text-4xl font-playfair font-bold text-4xl text-center md:ml-20 mt-5 mb-5">CAR Rental</p>
        <p className="md:mt-5 text-xl md:ml-20 text-center">
        An online platform called a car rental website enables customers to rent vehicles for their own use or for commercial purposes. The website offers a vehicle search, comparison, and reservation interface.        </p>
        <div className="flex md:ml-20 m-5">
        <p className="md:p-5 md:m-5 p-2 m-3 bg-deep-blue rounded-xl text-xl">React</p>
         <p className="md:p-5 md:m-5 p-2 m-3 bg-deep-blue rounded-xl text-xl">SCSS</p>
        </div>

        <div className="flex gap-7 md:ml-20 ml-10 -mt-10 p-5">
          <div className="flex">
        <p className=" md:ml-10 text-xl">Live Demo</p>
        <a 
        className="hover:opacity-50 transition duration-500"
        href="https://car-rental-ten.vercel.app/"
        target="_blank"
        rel="noreferrer"
        >
        <img src="assets/web.png" alt="github-link" className="w-5 mt-2"
        />
        </a>

        </div>
        </div>
      </div>
             </div>
                  {/**project 3 */}
          <div className="md:flex md:space-between md:mt-20 md:mx-8 gap-32 rounded-xl bg-dark-purple m-5 w-full h-100">
          
          <img src="../assets/project-3.jpeg" alt="projectTitle"  className=" md:h-80 md:mt-10 md:ml-10 mb-10 rounded-xl"/>       
      <div className= "md:pr-4 md:-ml-4">
        <p className="md:text-4xl font-playfair font-bold text-4xl text-center mt-5 mb-5">COINDOM</p>
        <p className="md:mt-5 text-xl text-center">
        Coindom is a crypto Dapp that allows users to search for information like price, listing e.t.c about various cryptocurrencies in real-time.        </p>
        <div className="flex md:ml-20 m-5">
        <p className="md:p-5 md:m-5 p-2 m-3 bg-deep-blue rounded-xl text-xl">React</p>
         <p className="md:p-5 md:m-5 p-2 m-3 bg-deep-blue rounded-xl text-xl">SCSS</p>
        </div>

        <div className="flex gap-7 md:ml-20 ml-10 -mt-10 p-5">
        <div className="flex">
        <p className=" md:ml-10 text-xl">Live Demo</p>
        <a 
        className="hover:opacity-50 transition duration-500"
        href="https://coindom-crypto-search.vercel.app/"
        target="_blank"
        rel="noreferrer"
        >
        <img src="assets/web.png" alt="github-link" className="w-5 mt-2"
        />
        </a>

        </div>
        </div>
      </div>
      
             </div> 
    </section>
  );
};

export default Projects;
