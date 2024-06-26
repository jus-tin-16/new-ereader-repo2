import React, { useState } from 'react';
import CIcon from '@coreui/icons-react';
import { cilScreenDesktop, cilBook, cilPencil, cilHamburgerMenu, cilX} from '@coreui/icons';

import './sidebar.css'; // Import CSS file for styling

const Sidebar = ({setCurrentPage,sendToggle}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
    <div>
    <button style={{backgroundColor: 'transparent'}} className={`toggle-button ${isOpen ? 'open' : ''}`} onClick={() => {toggleSidebar(); sendToggle(isOpen)}}>
    <CIcon icon={cilHamburgerMenu} style={{width: '52px', height: '38px', color: '#228a22'}}/>
    </button>
    </div>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button style={{backgroundColor: 'transparent'}} className={`toggle-button ${isOpen ? 'open' : ''}`} onClick={() => {toggleSidebar(); sendToggle(isOpen)}}>
      <CIcon icon={cilX} style={{position: 'absolute', left: '30px', top: '20px', width: '52px', height: '38px', color: 'white'}}/>
      </button>
      <ul className="sidebar-menu">
        <li onClick={() => setCurrentPage('DashBoard')}><CIcon icon={cilScreenDesktop} style={{width: '45px', height: '45px'}}/>  DASHBOARD</li>
        <li onClick={() => setCurrentPage('Lessons')}><CIcon icon={cilBook} style={{width: '45px', height: '45px'}}/> LESSONS</li>
        <li onClick={() => setCurrentPage('Assessment')}><CIcon icon={cilPencil} style={{width: '45px', height: '45px'}}/> ASSESSMENT</li>
      </ul>
    </div>
    </>
  );
};

export default Sidebar;
