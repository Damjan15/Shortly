import logo from "../assets/logo.svg"
import facebookIcon from "../assets/icon-facebook.svg"
import instagramIcon from "../assets/icon-instagram.svg"
import twitterIcon from "../assets/icon-twitter.svg"
import pinterestIcon from "../assets/icon-pinterest.svg"

const Footer = () => {
  return (
    <footer className="py-16 bg-veryDarkViolet">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-center">
            {/* Logo */}
            <img src={logo} alt="Shortify Logo" />

            {/* Menus Container */}
            <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
                {/* Menu 1 */}
                <div className="flex flex-col items-center w-full md:items-start">
                    <div className="mb-5 font-bold text-white capitalize">Features</div>
                    <div className="flex flex-col items-center space-y-3 md:items-start">
                        <a href="/" className="capitalize text-grayishViolet hover:text-cyan">Link shortening</a>
                        <a href="/" className="capitalize text-grayishViolet hover:text-cyan">Branded Links</a>
                        <a href="/" className="capitalize text-grayishViolet hover:text-cyan">Analytics</a>
                    </div>
                </div>


                {/* Menu 2 */}
                <div className="flex flex-col items-center w-full md:items-start">
                    <div className="mb-5 font-bold text-white capitalize">Resources</div>
                    <div className="flex flex-col items-center space-y-3 md:items-start">
                        <a href="/" className="capitalize text-grayishViolet hover:text-cyan">Blog</a>
                        <a href="/" className="capitalize text-grayishViolet hover:text-cyan">Developers</a>
                        <a href="/" className="capitalize text-grayishViolet hover:text-cyan">Support</a>
                    </div>
                </div>


                {/* Menu 3 */}
                <div className="flex flex-col items-center w-full md:items-start">
                    <div className="mb-5 font-bold text-white capitalize">Company</div>
                    <div className="flex flex-col items-center space-y-3 md:items-start">
                        <a href="/" className="capitalize text-grayishViolet hover:text-cyan">About</a>
                        <a href="/" className="capitalize text-grayishViolet hover:text-cyan">Our Team</a>
                        <a href="/" className="capitalize text-grayishViolet hover:text-cyan">Careers</a>
                        <a href="/" className="capitalize text-grayishViolet hover:text-cyan">Contacts</a>
                    </div>
                </div>
            </div>

            {/* Social Links Container */}
            <div className="flex space-x-6">
                <a href="/">
                    <img src={facebookIcon} className="ficon" alt="Facebook Icon" />
                </a>

                <a href="/">
                    <img src={twitterIcon} className="ficon" alt="Twitter Icon" />
                </a>

                <a href="/">
                    <img src={pinterestIcon} className="ficon" alt="Pinterest Icon" />
                </a>

                <a href="/">
                    <img src={instagramIcon} className="ficon" alt="Instagram Icon" />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer