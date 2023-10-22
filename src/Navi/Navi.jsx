import React, { useEffect, useState } from 'react'
import "./Navi.css"
function Navi() { 
  const [show, handLeShow] = useState(false);
const handleScroll = () => {
  if (window.scrollY > 100) {
    handLeShow(true);
  } else {
    handLeShow(false);
  }
};

useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  // Cleanup
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

return (
  <div className={`nav ${show && "nav_black"}`}>
 <  div className="nav_contents">
   
        <img className="nav_log"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt=""
        />
        <img  className ="nav_avator"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
        />
       </div>
           </div>
   
  )
}

export default Navi