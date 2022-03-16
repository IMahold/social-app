import React from "react";
import Hoot from "../hoot/Hoot";
import Navbar from "../navbar/Navbar";

export default function Home() {
  return (
    <div> 
    <div className="d-flex pt-4">
      <Navbar />
      <div>
        <Hoot />
      </div>
    </div>
    </div>
  );
}
