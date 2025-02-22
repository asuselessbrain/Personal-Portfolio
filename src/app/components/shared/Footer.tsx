import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="footer items-center p-4 bg-neutral text-black text-neutral-content bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div className="items-center grid-flow-col text-center mb-2">
          <p className="text-lg">
            Copyright © {currentYear} - All right reserved
          </p>
        </div>
        <div className="flex justify-center items-center">
          <a
            href="https://www.facebook.com/profile.php?id=61551041847783&mibextid=ZbWKwL"
            rel="noreferrer"
            target="_blank"
          >
            <FiFacebook className="mr-4 mt-3 text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/arfan-ahmed40/"
            rel="noreferrer"
            target="_blank"
          >
            <FiLinkedin className="mr-4 mt-3 text-2xl" />
          </a>
          <a href="https://x.com/shoha50275" rel="noreferrer" target="_blank">
            <FiTwitter className="mr-4 mt-3 text-2xl" />
          </a>
          <a
            href="https://github.com/asuselessbrain"
            rel="noreferrer"
            target="_blank"
          >
            <FiGithub className="mr-4 mt-3 text-2xl" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
