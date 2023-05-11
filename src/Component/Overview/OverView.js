import Heading from "../Globle/Heading";
import OverViewTitle from "./OverViewTitle";
import "./Overview.css";
import OverviewBodyTicket from "./OverviewBodyTicket";
import OverviewContentBody from "./OverviewContentBody";
const OverView = () => {
  return (
    <>
      <div className="overview-container">
        <div className="overview-grid">
          <div className="overviewTitle">
          <Heading heading={"Overview"}/>
            
          </div>
        </div>
        <div className="overview-grid">
          <div className="overview-grid-row">
            <div className="overview-row">
              <div className="overview-row-title">
                <OverViewTitle title={"Incident"}/>
              </div>
              <div className="overview-row-body">
                <div className="row-body-content">
                  <div className="content-title">
                    <h2>Status</h2>
                  </div>
                  <div className="content-body">
                    <hr />
                    <OverviewContentBody/>
                  </div>
                </div>
                <div className="row-body-content">
                  <div className="content-title">
                    <h2>Tickets</h2>
                  </div>
                  
                  <div className="content-body-ticket">
                    <hr />
                    <OverviewBodyTicket/>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview-row">
              <div className="overview-row-title">
              <OverViewTitle title={"Request"}/>
              </div>
              <div className="overview-row-body">
                <div className="row-body-content">
                  <div className="content-title">
                    <h2>Status</h2>
                  </div>
                  <div className="content-body">
                    <hr />
                    <OverviewContentBody/>
                  </div>
                </div>
                <div className="row-body-content">
                  <div className="content-title">
                    <h2>Tickets</h2>
                  </div>
                  <div className="content-body-ticket">
                    <hr />
                    <OverviewBodyTicket/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverView;
