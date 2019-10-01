import React from 'react';

import './App.css';

function App() {


  
  
  
  
  const inputs = document.querySelectorAll('.controls input');

  function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  
  return (
    
    
    <> 

      <h2>Update CSS Variables with <span className='hl'>JS</span></h2>

      <div className="controls">

          <label htmlFor="spacing">Spacing:</label>
          <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px" handleupdate={handleUpdate} onclick={console.log("Clicked")}></input>

          <label htmlFor="blur">Blur:</label>
          <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px"handleupdate={handleUpdate}></input>
          <label htmlFor="base">Base Color</label>
          <input id="base" type="color" name="base" value="#ffc600" handlepdate={handleUpdate}></input>
        

      </div>

      <img src="https://i.pximg.net/img-master/img/2018/07/11/11/04/53/23873519_p0_master1200.jpg"></img>
    </>

  
  
  );
}

export default App;
