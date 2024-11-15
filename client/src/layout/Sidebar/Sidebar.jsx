import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { iconsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";

const Sidebar = () => {
  const [activeLinkIdx, setActiveLinkIdx] = useState(0); // Initialize with 0 for the "Home" link

  return (
    <div className={ `sidebar3` }>
      <div className="user-info3">
          <div className="info-img3 img-fit-cover">
              <img src={ iconsImgs.iconmain } alt="profile image" />
          </div>
          <span className="info-name3-1">DASHBOARD</span>
      </div>

      <nav className="navigation3">
          <ul className="nav-list3">
            {
              navigationLinks.map((navigationLink) => (
                <li className="nav-item3" key = { navigationLink.id }>
                  <Link to={navigationLink.link}>
                    <a className={ `nav-link3 ${ navigationLink.id === activeLinkIdx ? 'active' : null }` }>
                        <img src={ navigationLink.image } className="nav-link3-icon" alt = { navigationLink.title } />
                        <span className="nav-link3-text">{ navigationLink.title }</span>
                    </a>
                  </Link>
                </li>
              ))
            }
          </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
