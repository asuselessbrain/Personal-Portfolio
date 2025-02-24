import Image from "next/image";
import image from "../../assets/profile.jpg";
const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="p-4 md:p-5 lg:px-20 bg-white text-black dark:bg-neutral-900 dark:text-white w-full"
        id="about-me"
      >
        <h2
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-5xl font-bold mb-10"
        >
          About Me
        </h2>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center">
          <p
            data-aos="fade-left"
            data-aos-duration="3000"
            data-aos-delay="600"
            className="text-xl text-justify max-w-[800px]"
          >
            I am Arfan Ahmed, a Professional Web Developer and Software
            Engineer. I have been Designing & Developing Websites & I have
            gathered pretty professional skills on it. I am Expert in
            Figma/PSD/XD/Ai Design to HTML, CSS, Bootstrap/Tailwind Responsive
            Websites, React.js Websites, MERN Stack Websites and as well as
            WordPress Websites. I can reassure you the best ever output & 100%
            quality work you will get from me without any doubt. Thank you.
          </p>
          <Image
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-delay="600"
            width={300}
            height={300}
            src={image}
            className="w-[300px] rounded mt-10 border border-gray-300 dark:border-gray-700"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
