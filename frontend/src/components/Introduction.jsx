import illustration from "../../images/illustration-working.svg";
import "./Introduction.css";
const Introduction = () => {
  return (
    <div className="introduction">
          <div className="introduction-left">
              <h3>More than just
              shorter links</h3>
              <p>Build your brand's recogniton and get detailed insights on how your links are performing.</p>
              <button>Get Started</button>
          </div>
          <div className="introduction-right">
              <img src={illustration} alt="image"/>
          </div>
    </div>
  )
}

export default Introduction