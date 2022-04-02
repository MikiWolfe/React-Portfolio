import React from "react";
import "../../styles/style.css";
import elevatorPitch from "../../images/elevator-pitch.png";
import challenge from "../../images/30-days.png";
import weather from "../../images/weather.jpeg";
import java from "../../images/java.jpeg"
import workday from "../../images/workday.jpeg"
import noteTaker from "../../images/note-taker.png"
import team from "../../images/team-gen.png"
import manage from "../../images/manage.png"
import gasworks from "../../images/gasworks.jpg"
import { IoLogoGithub } from "react-icons/io";

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
              src={elevatorPitch}
              alt="30-day-Challenge"
            />
            <div className="container">
              <h2>
                <a
                  href="https://github.com/jmichaelbrown8/elevator-pitch"
                  target="_blank"
                >
                  <IoLogoGithub />
                </a>
              </h2>
              <h2>
                <a
                  className="link"
                  href="https://elevator-pitch-space.herokuapp.com/space/3b6d19cd-bd00-45af-8588-d7e4dc3325da"
                  target="_blank"
                >
                  Elevator Pitch
                </a>
              </h2>
            </div>
          </div>
        </div>

        {/* <!-- 30 day challenge --> */}
        <div className="card-pad">
          <div className="card-challenge">
            <img className="card-img" src={challenge} alt="30-day-Challenge" />
            <div className="container">
              <h2>
                <a
                  className="link"
                  href="https://mikiwolfe.github.io/30-day-Challenge/"
                  target="_blank"
                >
                  <IoLogoGithub />
                  30 Day Challenge
                </a>
              </h2>
            </div>
          </div>
        </div>

        {/* <!-- the weather --> */}
        <div className="card-pad">
          <div className="card-weather">
            <img className="card-img" src={weather} alt="The Weather" />
            <div className="container">
              <h2>
                <a
                  className="link"
                  href="https://github.com/MikiWolfe/The-Weather"
                  target="_blank"
                > <IoLogoGithub /> </a>

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
              src={java}
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
              src={workday}
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
              src={noteTaker}
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
              src={team}
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
              src= {manage}
              alt="Team Profile Generator"
            />
            <div className="container">
              <h2>
                {" "}
                <IoLogoGithub />
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
