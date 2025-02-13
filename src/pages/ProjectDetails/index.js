import Projectzoom from "../../components/Projectzoom/Projectzoom";

const ProjectDetails = () => {

  return (
    <>
      <section>
        <div className="project-details-page">
          <div className="details-container">
            <div className="details-list">

              <Projectzoom />
              <div className="details-content-right">
                <div className="p-name">
                  <h3>Project Name: </h3>
                  <h4>Laser Home Security System</h4>
                </div>

                <div className="f-assigned">
                  <h3>Faculty Assigned: </h3>
                  <h4>Mrs. J Adilaxmi</h4>
                  <div className="certified">
                    <div className="badge"></div>
                  </div>
                </div>

                <div className="team-m">
                  <h3>Team:</h3>
                  <div className="team-names">
                  <p>B.Narendar</p>
                  <p>B.Skand Raaj</p>
                  <p>Sumukendra</p>
                  <p>Sai Sree Vatsav</p>
                  </div>
                 
                </div>

                <div className="review-container">
                  <div className="review-content">
                    <h3>Review: </h3>
                    <input placeholder="Write a review" type="text" className="write-review"/>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProjectDetails;
