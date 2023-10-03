import "./HomePage.css";

const HomePage = () => {
  const whiteBackground = "./images/white.jpg";
  const noteyLogo = "./images/notey.svg";

  return (
    <div className="gradient-background">
      <div
        className="white-background"
        style={{ backgroundImage: `url(${whiteBackground})` }}
      ></div>
      <div className="notey-logo-container">
        <div
          className="notey-logo"
          style={{ backgroundImage: `url(${noteyLogo})` }}
        ></div>
      </div>
      <div className="desc font-sanssemi-extralight">
        Write down anything. easily.
      </div>
      <div className="sign-up-btn font-tt-fors-medium">
        <div className="btn-text">Sign Up</div>
      </div>
      <div className="log-in-btn font-tt-fors-medium">
        <div className="btn-text">Log In</div>
      </div>
    </div>
  );
};

export default HomePage;
