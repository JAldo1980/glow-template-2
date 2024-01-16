import React from "react";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="top-block">
          <h2>About</h2>
          <p>
            Originating from the vibrant cityscape of New York and deeply rooted
            in the dynamic field of performance marketing, my journey has been
            marked by creativity and a relentless pursuit of excellence.
          </p>
          <p>
            My mission is crystal clear: to redefine the landscape of
            performance marketing by seamlessly blending data-driven insights
            with cutting-edge strategies. I am dedicated to propelling brands to
            new heights, reshaping market trajectories, and leaving an indelible
            mark on the world of digital marketing.
          </p>
          <p>
            My passion extends beyond individual success, focusing on fostering
            collaborative, high-performing teams. I believe that true innovation
            arises from diverse perspectives working together towards a common
            goal.
          </p>
        </div>
        <div className="bottom-block">
          <img src="woman-3.png" className="bottom-block-img" alt="" />
          <div className="bottom-block-card">
            <p>
              {" "}
              Embark on this journey with me, as we navigate the ever-evolving
              realm of performance marketing, shaping a future where brands
              thrive and make a lasting impact on their audiences.
            </p>
            <button>CTA</button>
            <button>CTA</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
