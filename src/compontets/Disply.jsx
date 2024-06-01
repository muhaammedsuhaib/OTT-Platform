import { useContext } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { imagesPass } from "./Main";
import { useNavigate } from "react-router-dom";

function Disply() {
  const { data } = useContext(imagesPass);
  const Data1 = data.filter((item) => item.Category === "MOVIES");
  const Data2 = data.filter((item) => item.Category === "SERIES");
  const Data3 = data.filter((item) => item.Category === "MUSIC");
  const nav=useNavigate();
  return (
    <>
      <Tabs
        defaultActiveKey="movies"
        id="uncontrolled-tab-example"
        className="mb-0"
      >
        {/* MOVIES */}
        <Tab eventKey="movies" title="Movies">
          <div
            className="container-fluid d-flex align-items-center justify-content-center flex-wrap"
            style={{ width: "100%", height: "90vh", overflow: "auto" }}
          >
            {Data1.map((item) => (
              <div
                className="container "
                style={{ width: "400px", height: "auto" }}                
              >
                <img
                  src={item.Thumbnail}
                  alt="Thumbnil"
                  width={"100%"}
                  height={"90%"}
                  onClick={()=>nav(`/show/${item.id}`)}
                />

                <div class="d-flex flex-row bd-highlight mb-0 p-0">
                  <div class="p-0 bd-highlight">
                    <img
                      className="img-fluid rounded-circle p-1"
                      src={item.ProFile}
                      alt="profile"
                      width={"50px"}
                    />
                  </div>
                  <div class="p-1 bd-highlight">
                    {item.VideoTitle}
                    <div className="container mb-0">
                      <div className="row">
                        <div className="col p-0">
                          <b>
                            {item.ChannelName}
                            <i
                              class="fa fa-check-circle p-1"
                              style={{ fontSize: "15px" }}
                            ></i>
                          </b>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col p-0 ">
                          <pre>
                            {item.VideoViews} views {item.UplodDate}
                            ago
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tab>

        {/* SERIES*/}
        <Tab eventKey="series" title="Series">
          <div
            className="container-fluid d-flex align-items-center justify-content-center flex-wrap"
            style={{ width: "100%", height: "90vh", overflow: "auto" }}
          >
            {Data2.map((item) => (
              <div
                className="container "
                style={{ width: "400px", height: "auto" }}
              >
                <img
                  src={item.Thumbnail}
                  alt="Thumbnil"
                  width={"100%"}
                  height={"90%"}
                />

                <div class="d-flex flex-row bd-highlight mb-0 p-0">
                  <div class="p-0 bd-highlight">
                    <img
                      className="img-fluid rounded-circle p-1"
                      src={item.ProFile}
                      alt="profile"
                      width={"50px"}
                    />
                  </div>
                  <div class="p-1 bd-highlight">
                    {item.VideoTitle}
                    <div className="container mb-0">
                      <div className="row">
                        <div className="col p-0">
                          <b>
                            {item.ChannelName}
                            <i
                              class="fa fa-check-circle p-1"
                              style={{ fontSize: "15px" }}
                            ></i>
                          </b>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col p-0 ">
                          <pre>
                            {item.VideoViews} views {item.UplodDate} ago
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tab>

        {/* MUSIC */}
        <Tab eventKey="music" title="Music">
          <div
            className="container-fluid d-flex align-items-center justify-content-center flex-wrap"
            style={{ width: "100%", height: "90vh", overflow: "auto" }}
          >
            {Data3.map((item) => (
              <div
                className="container "
                style={{ width: "400px", height: "auto" }}
              >
                <img
                  src={item.Thumbnail}
                  alt="Thumbnil"
                  width={"100%"}
                  height={"90%"}
                />

                <div class="d-flex flex-row bd-highlight mb-0 p-0">
                  <div class="p-0 bd-highlight">
                    <img
                      className="img-fluid rounded-circle p-1"
                      src={item.ProFile}
                      alt="profile"
                      width={"50px"}
                    />
                  </div>
                  <div class="p-1 bd-highlight">
                    {item.VideoTitle}
                    <div className="container mb-0">
                      <div className="row">
                        <div className="col p-0">
                          <b>
                            {item.ChannelName}
                            <i
                              class="fa fa-check-circle p-1"
                              style={{ fontSize: "15px" }}
                            ></i>
                          </b>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col p-0 ">
                          <pre>
                            {item.VideoViews} views {item.UplodDate} ago
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tab>
      </Tabs>
    </>
  );
}

export default Disply;
