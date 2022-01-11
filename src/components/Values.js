import handshake from "../images/handshake.png";
import idea from "../images/idea.png";
import magnifier from "../images/magnifier.png";
import support from "../images/support.png";

function Values() {
  return (
    <div id="values" className=" row values-container">
      <div className="col-md-4 background-none">
        <img src={support} className="values-image" />
        <h3 className="background-none values-title">Collaboration</h3>
        <h5 className="background-none">
          Lorem ipsum dolor sit amet, qui ut exerci feugiat mentitum, zril
          utamur euripidis eos ne. Case tantas vix ad, nec at dolore voluptatum
          suscipiantur, ad alterum incorrupte eloquentiam pri.{" "}
        </h5>
      </div>
      <div className="col-md-4  background-none">
        <img src={idea} className="values-image" />
        <h3 className="background-none values-title">Innovation</h3>
        <h5 className="background-none">
          Lorem ipsum dolor sit amet, qui ut exerci feugiat mentitum, zril
          utamur euripidis eos ne. Case tantas vix ad, nec at dolore voluptatum
          suscipiantur, ad alterum incorrupte eloquentiam pri.{" "}
        </h5>
      </div>
      <div className="col-md-4 background-none">
        <img src={magnifier} className="values-image" />
        <h3 className="background-none values-title">Continuous Improvement</h3>
        <h5 className="background-none">
          Lorem ipsum dolor sit amet, qui ut exerci feugiat mentitum, zril
          utamur euripidis eos ne. Case tantas vix ad, nec at dolore voluptatum
          suscipiantur, ad alterum incorrupte eloquentiam pri.{" "}
        </h5>
      </div>
    </div>
  );
}

export default Values;
