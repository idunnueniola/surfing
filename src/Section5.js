import React from "react";

const Section5 = () => {
  return (
    <section className="section5">
      <div className="sec5">
        <div className="blue">
          <p></p>
        </div>
        <div>
          <img src={require("./images/we.jpg").default} />
        </div>
        <div className="cheap">
          <h4>Cheap Surf Holiday</h4>
          <br />
          <p>
            Ready for your next adventure? would you like to check off some of
            the greatest surf camps. Excellent surf lessons. Cosy friendly
            atmosphere. Best surf equipment. Professional coaches. Best reviews.
          </p>
          <br />
          <button>CONTACT US</button>
        </div>
      </div>
    </section>
  );
};

export default Section5;
