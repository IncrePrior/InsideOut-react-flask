import "./Footer.css";

export default function Footer() {
  return (
    <div id="footer-container">
      <div className="creator-div">
        <div className="creator1">Created by developer:</div>
        <div className="creator">
          <div className="creator-text">Miroslawa (Mira) Borkowska</div>
          <a
            href="https://github.com/Mirabordem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github creator-link-icon"></i>
          </a>
          <div className="dot">•</div>
          <div className="year-aa">November 2023</div>
        </div>
      </div>
    </div>
  );
}
