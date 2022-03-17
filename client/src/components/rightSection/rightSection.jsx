import React from "react";
import "./rightSection.css";
export default function RightSection() {
  return (
    <div className="rightSectionContainer w-25">
      <section className="rightSection">
        <div className="searchPart">
          <span>
            <i className="fas fa-search"></i>
          </span>
          <input type="text" name="" id="" placeholder="Search Twitter" />
        </div>
        <div className="trendForYou">
          <h1>Trends for you</h1>
          <div className="foryouDiv">
            <span>Olympic · Trending</span>
            <p>#ERTTokyo2020</p>
            <span>6,659 Tweets</span>
          </div>
          <div className="foryouDiv">
            <span>Olympic · Trending</span>
            <p>#ERTTokyo2020</p>
            <span>6,659 Tweets</span>
          </div>
          <div className="foryouDiv">
            <span>Olympic · Trending</span>
            <p>#ERTTokyo2020</p>
            <span>6,659 Tweets</span>
          </div>
          <div className="foryouDiv">
            <span>Olympic · Trending</span>
            <p>#ERTTokyo2020</p>
            <span>6,659 Tweets</span>
          </div>
          <div className="foryouDiv">
            <span>Olympic · Trending</span>
            <p>#ERTTokyo2020</p>
            <span>6,659 Tweets</span>
          </div>
          <div className="foryouDiv">
            <a href="#" className="showmore">
              Show more
            </a>
          </div>
        </div>
        <div className="topicToFollow">
          <h1>Topic to follow</h1>
          <div className="tofollowDiv">
            <h3>Sports</h3>
            <span>All aboout sports</span>
          </div>
          <div className="tofollowDiv">
            <h3>Sports</h3>
            <span>All aboout sports</span>
          </div>
        </div>
      </section>
    </div>
  );
}
