import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup,
  MDBBtn,
  MDBNavbarItem,
} from "mdb-react-ui-kit";
import "./style.css";

export default function Navbar() {
  const [openNavNoTogglerThird, setOpenNavNoTogglerThird] = useState(false);
  
  const profile='https://yt3.ggpht.com/F84uVrkJtvMai4ORwQ6pbw9QVpwVzg3oBL7vrj0NTVA_Hf6wklb4iqlZcu1Tt8PT4R1ehXbw=s88-c-k-c0x00ffffff-no-rj';
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavNoTogglerThird(!openNavNoTogglerThird)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand href="#" className="heading">
            SUHAIB
            <img
              src="https://www.freeiconspng.com/uploads/play-button-icon-png-31.png"
              alt="logo"
              width={"30px"}
            />
          </MDBNavbarBrand>
          <MDBCollapse navbar open={openNavNoTogglerThird}>
            <MDBNavbarNav className=" mb-2 mb-lg-0">
              <MDBInputGroup tag="form" className="d-flex  mb-2">
                <input
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  type="Search"
                />
                <MDBBtn rounded style={{ backgroundColor: "#333333" }}>
                 
                  <i class="fa fa-search" style={{ color: "white" }}></i>
                </MDBBtn>
              </MDBInputGroup>

              <MDBNavbarItem style={{marginLeft:'40px'}}>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#3b5998" }}
                >
                  <i
                    class="fa fa-microphone"
                    style={{ color: "black", fontSize: "20px" }}
                  ></i>
                </MDBBtn>
              </MDBNavbarItem>
              <MDBNavbarItem style={{marginLeft:'40px'}}>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#3b5998" }}
                >
                  <i
                    class="fa-solid fa-video"
                    style={{ color: "black", fontSize: "20px" }}
                  ></i>
                </MDBBtn>
              </MDBNavbarItem>
              <MDBNavbarItem style={{marginLeft:'40px'}}>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#3b5998" }}
                >
                  <i
                    class="fa fa-bell"
                    style={{ color: "black", fontSize: "20px" }}
                  ></i>
                </MDBBtn>
              </MDBNavbarItem>
              <MDBNavbarItem style={{marginLeft:'40px'}}>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#3b5998" }}
                >
                  <div className='bg-image hover-overlay'>
      <img className='img-fluid rounded-circle' src={profile} alt=""  width={'40px'}/>
      <a href='#!'>
        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </div>
                </MDBBtn>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

// import React, { useState } from 'react';
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBNavbarBrand,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBCollapse
// } from 'mdb-react-ui-kit';

// export default function Navbar() {
//   const [openNavText, setOpenNavText] = useState(false);

//   return (
//     <MDBNavbar expand='lg' light bgColor='light'>
//       <MDBContainer fluid>
//         <MDBNavbarBrand href='#'></MDBNavbarBrand>
//         <MDBNavbarToggler
//           type='button'
//           data-target='#navbarText'
//           aria-controls='navbarText'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setOpenNavText(!openNavText)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>
//         <MDBCollapse navbar open={openNavText}>
//           <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
//             <MDBNavbarItem>
//               <MDBNavbarLink active aria-current='page' href='#'>
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#'>Features</MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>
//           <span className='navbar-text'> Navbar text with an inline element </span>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }
