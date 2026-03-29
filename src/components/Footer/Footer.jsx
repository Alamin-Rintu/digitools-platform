import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-black  p-10 text-white">
      <aside>
        <a className="btn bg-transparent border-none text-xl text-[#9514FA]">
          DigiTools
        </a>
        <p>
          Premium digital tools for creators, <br /> professionals, and
          businesses. Work smarter <br /> with our suite of powerful tools.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social Links</h6>
        <div className="flex gap-4 text-xl">
          <FaInstagram className="cursor-pointer hover:text-[#9514FA] transition duration-300" />
          <FaFacebook className="cursor-pointer hover:text-[#9514FA] transition duration-300" />
          <FaXTwitter className="cursor-pointer hover:text-[#9514FA] transition duration-300" />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
