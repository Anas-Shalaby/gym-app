import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/Logo.png";
import jwt_decode from "jwt-decode";
import { client } from "../util/client";

// import { client } from "../util/client";
const Login = ({ user }) => {
  const responseGoogle = (response) => {
    localStorage.setItem("user", JSON.stringify(response.credential));
    const { name, picture, sub } = jwt_decode(response.credential);

    const user = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };

    client.createIfNotExists(user).then(() => {
      // navigate("/", { replace: true });
      window.location.replace("/Home");
    });
  };

  return (
    <GoogleOAuthProvider clientId="891686171315-ajpqvupfepo6m5tsadfpcrjk7duheedq.apps.googleusercontent.com">
      <div className="flex  justify-start items-center flex-col h-screen">
        <div className=" relative w-screen h-full">
          <video
            src={shareVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
            <div className="p-5">
              <img src={logo} alt="Agiza" width="100px" />
            </div>
            <GoogleLogin onSuccess={responseGoogle} onError={responseGoogle} />

            <div className="shadow-2xl"></div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};
export default Login;
