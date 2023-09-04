import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg";
import maeztra from "../../assets/Maeztra-logo.svg";
import vtex from "../../assets/vtex.svg";

export const Footer = () => {
  return (
    <div className="container-footer">
      <div className="wrapper-footer">
        <img src={facebook} alt="" height={32} />
        <img src={linkedin} alt="" height={32} />
        <img src={instagram} alt="" height={32} />
        <img src={youtube} alt="" height={32} />
      </div>
      <div className="wrapper-footer">
        <img src={visa} alt="" height={25} />
        <img src={mastercard} alt="" height={25} />
        <img src={visa} alt="" height={25} />
        <img src={mastercard} alt="" height={25} />
      </div>
      <div className="dev-footer">
        <div className="wrapper-footer">
          <p>Powered by</p>
          <p>Developed by</p>
        </div>
        <div className="wrapper-footer">
          <img src={vtex} alt="" height={25} />
          <img src={maeztra} alt="" height={28} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
