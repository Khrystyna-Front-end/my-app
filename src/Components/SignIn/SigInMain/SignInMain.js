import React from "react";
import "./SignInMain.css";
import SignInForm from "../SignInForm/SignInForm.js";
import avatar from "../../../media/images/avatar.png";
import freeUkrainianPeople from "../../../media/images/freeUkrainianPeople.jpg";

import AudioPlayer from "react-h5-audio-player";
import Myt from "../../../media/audio/Myt.mp3";

function SignInMain() {
  return (
    <div className="sign-in-container container-fluid d-flex justify-content-evenly">
      <main className="order-2">
        <h2 className="animationPulse">❤Pray for Ukraine❤</h2>
        <img
          src={avatar}
          alt="Фото"
          className="avatar d-block shadow-lg p-3 mb-5 bg-body rounded"
        />

        <SignInForm />
        <AudioPlayer className="audioPlayer" src={Myt} autoPlay />
      </main>

      <div id="slides" className="slide-show">
        <div className="slides-inner">
          <img
            src={freeUkrainianPeople}
            width="440"
            height="425"
            alt="God'sMother"
            className="shadow"
            id="img"
          />
        </div>
      </div>
    </div>
  );
}

export default SignInMain;
