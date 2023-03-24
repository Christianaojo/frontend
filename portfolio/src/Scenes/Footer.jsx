import SocialMediaIcons from "../Components/SocialMediaIcon";

const Footer =() =>{
    return(
        <footer className="h-64 pt-10 bg-purple">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons />
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className="font-playfair font-semi-bold text-2xl text-white">CHRISTIANA OJO</p>
                    <p className="font-playfair text-md text-white">© 2023 CHRISTIANA. All Rights Reserved</p>
                </div>

            </div>
        </footer>
    )
}
export default Footer;