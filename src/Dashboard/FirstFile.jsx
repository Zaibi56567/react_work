import React from 'react'
import { MdDashboard, MdTableChart, MdCreditCard, MdSyncAlt, MdPerson, MdFolder, MdEdit, MdHelp } from 'react-icons/md';
import "./Css Folder/FirstFile.css"
import SecondFile from './SecondFile';
const mainMenu = [
  { label: 'Dashboard', icon: <MdDashboard />, active: true },
  { label: 'Tables', icon: <MdTableChart /> },
  { label: 'Billing', icon: <MdCreditCard /> },
  { label: 'RTL', icon: <MdSyncAlt /> },
];

const accountPages = [
  { label: 'Profile', icon: <MdPerson /> },
  { label: 'Sign In', icon: <MdFolder /> },
  { label: 'Sign Up', icon: <MdEdit /> },
];

function FirstFile() {
  return (
    <div className="main">
      <div className="sidewrap">
        <div className="side">
          <div className="sidehead text-center">VISION UI FREE</div>
          <div className="thinline"></div>
          <ul className="sidemenu">
            {mainMenu.map((item, idx) => (
              <li key={item.label} className={item.active ? 'active' : ''}>
                <span className="icon">{item.icon}</span> {item.label}
              </li>
            ))}
          </ul>
          <div className="sidetitle">ACCOUNT PAGES</div>
          <ul className="sidemenu">
            {accountPages.map((item) => (
              <li key={item.label}>
                <span className="icon">{item.icon}</span> {item.label}
              </li>
            ))}
          </ul>
          <div className="sidehelp">
            <div className="helpicon"><MdHelp /></div>
            <div className="helptext">
              <div>Need help?</div>
              <div className="helpsub">Please check our docs</div>
            </div>
            <button className="helpbtn">DOCUMENTATION</button>
          </div>
        </div>
      </div>
      <SecondFile />
    </div>
  )
}

export default FirstFile
