import React from "react";
import '../../styles/style.css';

export default function Work() {
  return (
    <div>
      <h1 id="Work" className="example">
       Examples of my work:
      </h1>

      <div className="work-section">
        {/* <!-- Elevator Pitch --> */}
        <div className="card-pad">
          <div className="card-challenge">
            <img
              className="card-img"
              src="assests/image/elevator-pitch.png"
              alt="30-day-Challenge"
            />
            <div className="container">
              <h2>
                <a
                  className="link"
                  href="https://github.com/jmichaelbrown8/elevator-pitch"
                  target="_blank"
                >
                  Elevator Pitch
                </a>
                <a
                  href="https://elevator-pitch-space.herokuapp.com/space/3b6d19cd-bd00-45af-8588-d7e4dc3325da"
                  target="_blank"
                >
                  {" "}
                </a>
              </h2>
            </div>
          </div>
        </div>

        {/* <!-- 30 day challenege --> */}
        <div className="card-pad">
          <div className="card-challenge">
            <img
              className="card-img"
              src="assests/image/home-page-screenshot.png"
              alt="30-day-Challenge"
            />
            <div className="container">
              <h2>
                <a
                  className="link"
                  href="https://mikiwolfe.github.io/30-day-Challenge/"
                  target="_blank"
                >
                  30 Day Challenge
                </a>
              </h2>
            </div>
          </div>
        </div>

        {/* <!-- the weather --> */}
        <div className="card-pad">
          <div className="card-weather">
            <img
              className="card-img"
              src="assests/image/screenShot.the.weather.jpeg"
              alt="The Weather"
            />
            <div className="container">
              <h2>
                <a
                  className="link"
                  href="https://mikiwolfe.github.io/The-Weather/"
                  target="_blank"
                >
                  The Weather
                </a>
              </h2>
            </div>
          </div>
        </div>

        {/* <!-- Quiz game --> */}
        <div className="card-pad">
          <div className="card-quiz">
            <img
              className="card-img"
              src="assests/image/ScreenShot.jpeg"
              alt="Quiz Game"
            />
            <div className="container">
              <h2>
                <a
                  className="link"
                  href="https://mikiwolfe.github.io/Game-Show/"
                  target="_blank"
                >
                  Quiz Game
                </a>
              </h2>
            </div>
          </div>
        </div>
        {/* <!-- Day planner --> */}
        <div className="card-pad">
          <div className="card-planner">
            <img
              className="card-img"
              src="assests/image/ScreenShot1.jpeg"
              alt="30-day-Challenge"
            />
            <div className="container">
              <h2>
                <a
                  className="link"
                  href="https://mikiwolfe.github.io/Calendar/"
                  target="_blank"
                >
                  Day Planner
                </a>
              </h2>
            </div>
          </div>
        </div>

        {/* <!-- Note Taker --> */}
        <div className="card-pad">
          <div className="card-note">
            <img
              className="card-img"
              src="assests/image/screenshot.note.taker.png"
              alt="note taker"
            />
            <div className="container">
              <h2>
                <a
                  className="link"
                  href="https://note-taker99.herokuapp.com/"
                  target="_blank"
                >
                  Note Taker
                </a>
              </h2>
            </div>
          </div>
        </div>
        {/* <!-- Team Generator --> */}
        <div className="card-pad">
          <div className="card-team">
            <img
              className="card-img"
              src="assests/image/screenshot.team.png"
              alt="Team Profile Generator"
            />
            <div className="container">
              <h4>
                <a
                  className="link"
                  href="https://github.com/MikiWolfe/Team-Profile-Generator"
                  target="_blank"
                >
                  Profile Generator
                </a>
              </h4>
            </div>
          </div>
        </div>
        {/* <!-- Employee Database --> */}

        <div className="card-pad">
          <div className="card-employee">
            <img
              className="card-img"
              src="assests/image/Screenshot01.png"
              alt="Team Profile Generator"
            />
            <div className="container">
              <h2>
                <a
                  className="link"
                  href="https://github.com/MikiWolfe/Employee-Database"
                  target="_blank"
                >
                  Employee Database
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
