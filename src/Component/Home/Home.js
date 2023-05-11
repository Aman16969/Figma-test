import SelectClient from "../Navbar/SelectClient";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="foreground-container">
        <div className="home-container">
            <div className="home-body">
            <div className="home-container-title">
                <h1>Please select client(s)</h1>
            </div>
            <div className="home-container-body">
                <SelectClient />
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
