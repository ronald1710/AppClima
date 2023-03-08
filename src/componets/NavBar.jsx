import React, {useState} from "react";


const NavBar = ( { city, setCity, onSubmitData }) => {
  
  const onSubmit = ( e ) => {
    e.preventDefault()

    onSubmitData()
  }

  return (
    <div>
      <nav className="navbar ">
        <div className="container-fluid">
          <a className="navbar-brand text-white">Weather App</a>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </nav>
      <div className="container">
        <form onSubmit={(e) => onSubmit(e) }>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Buscar por ciudad" onChange={ (e) => setCity(e.target.value) } value={city}/>
            <button className="btn btn-primary input=group-text" type="submit" >Buscar </button>
          </div>
        </form>


      </div>
      
      
      
      {/* <div className="input-group mb-3 mt-3">
        <form action="">
        <input
          type="text"
          className="form-control bg-transparent border border-info-subtle"
          placeholder="Busca una ciudad"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-info border-info-subtle text-white"
          type="button"
          id="button-addon2"
        >
          Buscar
        </button>
        </form>
      </div> */}
      
    </div>
  );
};

export default NavBar;
