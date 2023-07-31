import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="greeting">Hi, my name is</h1>
      <p className="home-title">Alexis González.</p>
      <p className="quote">
        I thrive on the challenges that come with turning concepts into tangible
        solutions.
      </p>
      <p className="home-paragraph">
        I'm a México-based full-stack developer with a passion for crafting
        digital solutions. I have always been fascinated by the power of
        technology and its ability to shape the world we live in. Today, I
        channel that passion into building innovative and user-friendly software
        applications.
      </p>
      <button className="content-button">About me</button>
    </div>
  );
}

export default Home;
