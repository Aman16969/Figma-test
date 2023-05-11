import Heading from "../Globle/Heading";
import "./ticket.css";
const Ticket = () => {
  return (
    <>
      <div className="overview-container">
        <div className="overview-grid">
          <div className="overviewTitle">
            <Heading heading={"000001"} />
          </div>
          <div className="overview-grid">
            <div className="ticket-content">
              <div className="ticket-body">
                <div className="ticket-title">
                  <div>
                    <h3>Title: <small>VM down</small> </h3>
                    
                  </div>
                  <div>
                    <h3>Priority: <small>3</small></h3>
                    
                  </div>
                </div>
                <div className="ticket-description">
                    <h3>Description: <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum cum quia, voluptates at sit voluptatibus nulla, ratione debitis quaerat esse aperiam vitae, possimus autem deserunt. Harum earum est iusto eum?</small>
</h3>
                </div>
                <div className="ticket-requestor">
                    <h3>Requestor: <small>Aman Ranjan (ranjan.aman540@gmail.com)</small></h3>
                </div>
                <div className="ticket-comment">
                    <h3>Comments:</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero excepturi voluptatem, impedit possimus sint labore quaerat voluptatibus, beatae facere laboriosam expedita ex eum quis obcaecati, soluta qui ut ad atque.</p>
                </div>
              </div>

              <div className="ticket-body">
                <div className="ticket-phase">
                <table className="ticket-progress">
                    <thead>
                        <tr>
                            <th>In Progress</th>
                        </tr>
                        <tr>
                            <th>In Transist</th>
                        </tr>
                        <tr>
                            <th>Working</th>
                        </tr>
                        <tr>
                            <th>Resolved</th>
                        </tr>
                        
                    </thead>
                </table>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
