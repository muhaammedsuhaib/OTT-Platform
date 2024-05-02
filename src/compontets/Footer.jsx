import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span><a className='text-reset fw-bold' href='https://www.instagram.com/suhaii.bb/'>
          suhaib.com
        </a></span>
        </div>

        <div>
          <a href='https://www.facebook.com/profile.php?id=100073352894286' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/MuhaammedSuhaib' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='muhammedsuhaibpottayil@gmail.com' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://www.instagram.com/suhaii.bb/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/in/muhammedsuhaib/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/muhaammedsuhaib' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>    

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 :
        <a className='text-reset fw-bold' href='https://muhaammedsuhaib.github.io/Portfolio/'>
          Muhammed Suhaib
        </a>
      </div>
    </MDBFooter>
  );
}