
const SocialMediaIcons = () =>{
return(
    <div className="flex justify-center md:justify-start my-10 gap-7">
        <a 
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ojo-christiana/"
        target="_blank"
        rel="noreferrer"
        >
        <img src="assets/linkedin.png" alt="linkedin-link"
        />
        </a>
        <a 
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Christianaojo/"
        target="_blank"
        rel="noreferrer"
        >
        <img src="assets/git.png" alt="github-link"
        />
        </a>
        <a 
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/technicalchriss/"
        target="_blank"
        rel="noreferrer"
        >
        <img src="assets/twitter.png" alt="twitter-link"
        />
        </a>
    </div>
)
}
export default SocialMediaIcons;