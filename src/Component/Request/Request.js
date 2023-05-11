import Heading from "../Globle/Heading";
import SelectSearch from "../Globle/SelectSearch";
import Tabledata from "../Globle/Tabledata";
import "./Request.css";
const Request = () => {
  return (
    <>
      <div className="overview-container">
        <div className="overview-grid">
          <div className="overviewTitle">
            <Heading heading={"Requests"}/>
          </div>
          <div className="overview-grid">
            <div className="incident-body">
              <div className="incident-search">
                <form className="search-bar">
                  <SelectSearch/>
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="incident-table">
                <div className="table-scroll ">
                  <table className="table-component">
                    <thead className="table-head">
                      <tr>
                        <th>Ticket No</th>
                        <th>Title</th>
                        <th>Environment</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Time of Creation</th>
                      </tr>
                    </thead>

                    <tbody className="table-body">
                      <Tabledata />
                    </tbody>
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

export default Request;
