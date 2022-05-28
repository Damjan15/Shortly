import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
            {/* Container for Logo & Menu */}
            <div className="flex items-center space-x-20">
                <img src={logo} alt="Shortly Logo" />

                <div className="hidden space-x-8 font-bold lg:flex">
                    <a href="/" className="text-grayishViolet hover:text-veryDarkViolet">Features</a>
                    <a href="/" className="text-grayishViolet hover:text-veryDarkViolet">Pricing</a>
                    <a href="/" className="text-grayishViolet hover:text-veryDarkViolet">Resources</a>
                </div>
            </div>

            {/* Right Buttons Menu */}
            <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
                <a href="/" className="hover:text-veryDarkViolet">Login</a>
                <a href="/" className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">Sign Up</a>
            </div>
            {/* @todo -> Hamburger Menu */}
        </div>

        {/* @todo -> Mobile Menu */}
    </nav>
  )
}

export default Navbar