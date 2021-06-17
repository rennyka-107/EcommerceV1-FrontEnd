import React from "react";
import img1 from "./../../assets/images/d45e03b68f7621aa6a7c3e986375b27b.jpg";
import img2 from "./../../assets/images/saostar-0dk1839owqblnvmx.jpg";
import img3 from "./../../assets/images/tải xuống.jpg";

const CardInformation = () => {

  return (
    <div className="card-information-body">
      <div className="box">
        <div className="imgBx">
          <img src={img1} alt="img1" />
        </div>
        <div className="content">
          <h2>
            Meiko Chonnikan
            <br />
            <span>Create Designer</span>
          </h2>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img src={img2} alt="img2" />
        </div>
        <div className="content">
          <h2>
            Lizzy
            <br />
            <span>Create Designer</span>
          </h2>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img src={img3} alt="img3" />
        </div>
        <div className="content">
          <h2>
            Erika Karata
            <br />
            <span>Create Designer</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CardInformation;
