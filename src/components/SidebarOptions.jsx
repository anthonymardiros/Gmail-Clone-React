import React, { useEffect, useRef } from "react";
import "./sidebarOptions.css";

function SidebarOptions({ Icon, title, number }) {
  const sidebar = useRef(null);

  const classSwitch = () => {
    const sidebarCurrent = document.querySelectorAll('.sidebarOptions')
    sidebarCurrent.forEach(element => element.classList.remove('sidebarOption--active'))

    sidebar.current.classList += ' sidebarOption--active'
  }

  useEffect(() => {
    if (title === 'Inbox') {
      sidebar.current.classList += ' sidebarOption--active'
    }
  }, []);

  return (
    <div ref={sidebar} 
    onClick={classSwitch}
    className={'sidebarOptions '}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOptions;