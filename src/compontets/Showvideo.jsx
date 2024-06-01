import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { imagesPass } from './Main';
import videoFile from "./movies/Movie.mp4";
import { MDBIcon,MDBBtn } from 'mdb-react-ui-kit';

const Showvideo = () => {
    const {data}=useContext(imagesPass);
    const {id}=useParams();
    const findData=data.find((item)=>item.id===parseInt(id));
    console.log(findData);
  return (
    <>
    <div
            className="container-fluid mt-2"
            style={{ width: "100%", height: "auto", overflow: "auto" }}
          >
            <div className='container-sm'>
                <div className="row">
                    <div className="col-sm-8">
                    <video src={videoFile} autoPlay controls width={'100%'} style={{borderRadius:'10px'}}></video>
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12">
                         <h6 className='text-sm'>{findData.VideoTitle}</h6>
                          </div>
                          <div className='col-12 text-end'>
                          <MDBIcon fas icon="heart" className='mx-2'/>
                        <MDBBtn color='white' className=' mx-3' size='sm' style={{borderRadius:"20px"}}>  <MDBIcon fas icon="user-plus" /> follow</MDBBtn> 
                        <MDBIcon fas icon="ellipsis-v" />
                          </div>
                          <div className='col-12 p-0'>
                          <img  className="img-sm-fluid rounded-circle" src={findData.ProFile}   alt="profile" width={"35px"}/>
                          <p  className="text-sm-start" style={{display:'inline'}}> <b>{findData.ChannelName}</b> </p>     
                          <pre className='sm-p-2' style={{display:'inline'}}>1.3M follewers</pre>                     
                          </div>
                          
                          </div>
                          </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="container-fluid"  style={{ width: "100%",height:"600px", overflow: "auto", borderRadius:'10px', backgroundColor:'white'}} >
                        {data.map((item) => (    
                                      <div
                className="container-fluid p-1"
                style={{ width: "100%", height: "auto" }}                
              >
                <img
                  src={item.Thumbnail}
                  alt="Thumbnil"
                  width={"100%"}
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
                    </div>
                    </div>
            </div>
           
            
          </div>
    </>
  )
}

export default Showvideo
