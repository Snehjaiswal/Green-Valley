import React, { useState } from 'react';
 
function Popup() {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Pop-up
      </button>
 
      {isOpen && (
       <div>
        <div>
          This is the content of the pop-up.
        </div>
        <button onClick={() => setIsOpen(false)}>
          Close Pop-up
        </button>
       </div>
      )}
    </div>
  );
}
 
export default Popup;