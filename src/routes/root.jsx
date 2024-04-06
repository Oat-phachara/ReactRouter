import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./root.css";
function Root() {
  return (
    <>
      <div id="sidebar">
        <div id="info">
          <img
            id="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"
            alt=""
          />
          <img
            src="https://scontent.fbkk29-7.fna.fbcdn.net/v/t39.30808-1/287838730_5449229078442708_4748038768225995944_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHtWkf7aJ8J4yJ50gevC0RP0oovSwIdg7_Sii9LAh2Dv6yHPQwtECkdGVEB597g5AkjVg8lDJQh7iVyAhYbffXS&_nc_ohc=zsjzDldOI2AAb70xC-_&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfB20VadhXsrL6acei-Z5u5iNRbGw6577KXBMPhbfLqbQg&oe=6616A94D"
            alt=""
          />
          <div>Oat Phachara</div>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/jobs">Job</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/skill">Skill</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
