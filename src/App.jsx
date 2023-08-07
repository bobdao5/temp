import { formes } from "./components";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Shardpay from "../src/components/Shardpay/Shardpay";
import Navbar from "./components/Shardpay/Navbar";
import Landing from "./components/Landing/Landing";
// import Unify from "./components/Unify/unify";
import Forms from "./components/Forms";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="App h-[1000px] gradient-bg-welcome">
      <div className="gradient-bg-welcome">
        <Navbar />
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="ShardPay" element={<Shardpay />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Forms" element={<Forms />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
