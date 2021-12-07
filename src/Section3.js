import React from "react";


const Section3 = () => {
  return (
    <section className="section3">
      <div className="Summermain">
        <div className="Summersurf">
          <h3>Summer Surf Camp</h3>
        </div>
        <div className="yellow"></div>
        <div>
          <img src={require("./images/zmin.jpg").default} />
        </div>
      </div>
      <div className="learnmore">
        <p>
          We are located in an area, which is well known for its very consistent
          quality surf and sunshine. There are a wide variety of breaks
          including reef, point and beach. Breaks within walking distance of the
          camp include baby Padang Padang (aka Padang Padang rights) which is
          perfect for beginner surfers.
        </p>
        <br />
        <a href="">LEARN MORE</a>
        <hr />
      </div>

      
    </section>
  );
};

export default Section3;
