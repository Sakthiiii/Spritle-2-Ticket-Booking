import { useNavigate } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const Home = () => {
  const navigate = useNavigate();

  const onClickAdmin = () => {
    navigate("/admin-view");
  };

  const onClickAgent = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      <div className="home">
        <div className="button-container">
          <div className="card">
            <button className="btn" type="button" onClick={onClickAdmin}>
              <h1 className="heading">SuperAdmin</h1>
              <img
                className="logo"
                src="https://resources.workable.com/wp-content/uploads/2019/11/administrative-1.jpg"
                alt="img"
              />
            </button>

            <button className="btn" type="button" onClick={onClickAgent}>
              <h1 className="heading" style={{marginLeft:'50px'}}>Agent</h1>
              <img
                className="logo"
                src="https://tollfreeforwarding.com/blog/wp-content/uploads/2020/04/How-to-be-a-Good-Call-Center-Agent.jpg"
                alt="img"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
