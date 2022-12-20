import handshake from "../images/handshake.png";
import idea from "../images/idea.png";
import magnifier from "../images/magnifier.png";
import support from "../images/support.png";

function Values() {
  return (
    <div id="values" className=" row values-container">
       <div className="col-md-4  background-none">
        <img src={idea} className="values-image" />
        <h3 className="background-none values-title">Innovation</h3>
        <h5 className="background-none">
         Able to think of innovative solutions to complex problems. 
        </h5>
      </div>
      
      <div className="col-md-4 background-none">
        <img src={magnifier} className="values-image" />
        <h3 className="background-none values-title">Eager for Knowledge</h3>
        <h5 className="background-none">
        Coachable, willing to learn new skills, and motivated to grow in my career.
      
        </h5>
      </div>
     
      <div className="col-md-4 background-none">
        <img src={support} className="values-image" />
        <h3 className="background-none values-title">Collaboration</h3>
        <h5 className="background-none">
        Develops and maintains effective relationships with others in order to encourage and support the team.

        {/* https://bladerunnerlhr.medium.com/8-proven-examples-to-put-teamwork-on-your-resume-fb79f918276a */}
         
        </h5>
      </div>
    </div>
  );
}

export default Values;
