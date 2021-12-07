import React from "react";


const Section1 = () => {
  return (
    <section className="section1">
      <div>
        <img
          src={require("./images/hannahweiaso6SYJZGpsunsplashmin1.jpg").default}
          alt="first"
        />
      </div>
      <div className="surfcamp">
        <h1>
          SURF CAMP <br /> & LESSONS
        </h1>
        <h4>THE SURF AND ATMOSPHERE</h4>
      </div>
      <div>
        <div className="grid">
          <div className="subgrid1">
            <h4>Surf Camp</h4>
            <p>
              We specialise in teaching complete newbies who have never surfed
              before or if you want to progress your...
            </p>
          </div>
          <div className="subgrid2">
            <h4>Lessons</h4>
            <p>
              Our surf instructors and surf guides are professional and highly
              motivated. They are determined to get you the best waves and
              ensure you...
            </p>
          </div>
          <div className="subgrid3">
            <h4>About Us</h4>
            <p>
              We believe we are one of the best surf camps in Bali because we
              are in are the best Surf Camp in Bali because we are in the best
              location and nearby...
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Section1;
