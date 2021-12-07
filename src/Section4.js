import React from "react";

const Section4 = () => {
  return (
    <section className="section4">
      <div className="aSchool">
        <hr />
        <br />
        <h1>About Our School</h1>
        <br />
        <p>
          Your dream: to make beautiful things that make life more beautiful. To
          capture and reflect the world in a meaningful, unique way. To make
          people understand your vision. To cut through clutter. To visually
          persuade, promote, and inform.
        </p>
        <br />
        <button>READ MORE</button>
      </div>
      <div>
        <img src={require("./images/billionphotos1858817.jpg").default} />
      </div>
    </section>
  );
};

export default Section4;
