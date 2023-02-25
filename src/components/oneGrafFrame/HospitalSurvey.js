import "./HospitalSurvey.scss";
import OneGraph from "./oneGrafFrame.js";

function HospitalSurvey() {
  return (
    <div className="wrapperHospital">
      <div className="containerHospital">
        <div className="hospitalTop">
            <p className="hospitalH">  Hospital Survey</p>
            <div className="hospitalRightText">
              <p className="textGray"> <i className='fa-solid fa-minus yellow'>-</i> Patients 2019</p>
              <p className="textGray"> <i className='fa-solid fa-minus blue'>-</i> Patients 2020</p>
            </div>
          </div>
          <div className="hospitalBottom">
           <OneGraph/>
          </div>
      </div>       
    </div>
  );
}
export default HospitalSurvey