import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Info = () => {
  return (
    <div className="Info">
      <div className="logo">
        <img src="/src/assets/logo.png" alt="" />
      </div>
      <div className="motto">
        <p>THE WORLD’S FIRST</p>
        <p>VISUAL FRAGRANCE™</p>
      </div>
      <div className="social-media">
        <a href="" className="social-link">
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="" className="social-link">
        <i class="fa-brands fa-tiktok"></i>
        </a>
        <a href="" className="social-link">
        <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="" className="social-link">
        <i class="fa-brands fa-pinterest-p"></i>
        </a>
        <a href="" className="social-link">
        <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="" className="social-link">
        <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="" className="social-link">
        <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <div className="footer">
        <p>FOR INQUIRIES: Email us on <a href="mailto:info@plus972group.com">info@plus972group.com</a>
          <br />
          Call us on <a href="tel:+1-202-555-0146">+1-202-555-0146</a>
        </p>
      </div>
    </div>
  );
};

export default Info;
