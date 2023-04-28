import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Diet from "./components/Diet/Diet";
import Room from "./components/Room/Room";
import Calorie from "./components/Calorie";
import Landing from "./components/Landing";
import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect, useState } from "react";
import Excercise from "./components/Exercise/Exercise";
import { BrowserRouter, Route, Routes , useLocation  } from "react-router-dom";
import Exlist from "./components/Exlist";
import { RedirectFunction } from "react-router-dom";

import { redirect } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    alanBtn({
      key: "1cd1c991b78573fc8c9c034eaa1d05ef2e956eca572e1d8b807a3e2338fdd0dc/stage",
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 8000);
  });

  if (!show) {
    return <Loader />;
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div style={{ marginTop: "100px" }}>
          <Routes>
            {/* <RedirectFunction from="/:http://localhost:3000/*(/+)" to={"http://localhost:5000/".slice(0, -1)} /> */}

            <Route path="/" element={<Landing moveIndex={0} />} />
            <Route path="/room" element={<Room />} />
            <Route path="/diet" element={<Diet moveIndex={1} />} />
            <Route path="/home" element={<Landing moveIndex={0} />} />
            <Route path="/fitness-tracker" element={<Calorie />} />
            <Route path="/excercise" element={<Exlist />} />
            <Route path="/sukhasana" element={<Excercise moveIndex={2} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
