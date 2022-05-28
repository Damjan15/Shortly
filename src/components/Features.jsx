import brandImage from "../assets/icon-brand-recognition.svg"
import recordsImage from "../assets/icon-detailed-records.svg"
import customImage from "../assets/icon-fully-customizable.svg"
import Box from "./Box"


const Features = () => {

  const features = [
    {
      id: 1,
      image: brandImage,
      title: "Brand Recognition",
      description: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
    },
    {
      id: 2,
      image: recordsImage,
      title: "Detailed Records",
      description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      offset: "md:mt-8"
    },
    {
      id: 3,
      image: customImage,
      title: "Fully Customizable ",
      description: "Improve brand awarness and content discoverability through customizable links, supercharging audiance engagement.",
      offset: "mt-16"
    },
  ]

  return (
    <section className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
            {/* Horizontal Line */}
            <div className="hidden w-10/12 absolute top-24 left-16 h-3 bg-cyan md:block"></div>

            {/* Vertical Line */}
            <div className="absolute left-1/2 w-2 h-full -ml-2 bg-cyan md:hidden"></div>
            { features.map((feature) => <Box image={feature.image} title={feature.title} description={feature.description} offset={feature.offset} key={feature.id}  />)}
        </div>
    </section>
  )
}

export default Features