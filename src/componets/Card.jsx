import React, { useState } from "react";

const Card = ({ data }) => {
  const [isCentigrade, setIsCentigrade] = useState(true);
  return (
    <div>
      <div className="containerCard">
        <div className="container-card">
          <div className="info row">
            <div className="info1 col">
              <h1>{isCentigrade ? `${data.main?.temp}°C` : `${(data.main?.temp *9/5) +32}°F`}</h1>
              <h5>{data.weather?.[0].description}</h5>
              <h5>Viento: {data.wind?.speed}</h5>
              <h5>Presion: {data.main?.pressure}</h5>
              <h4> {data.name}, {data.sys?.country}</h4>
            </div>
            <div className="info2 col">
              <img
                src={`img/iconos/${data.weather?.[0].icon}.svg`}
                className="text-end"
                alt={data.weather?.[0].icon}
              />
              <br />
              <h4 className="text-end text mt-4">
                {data.weather?.[0].description}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="container-button">
      <button className="btn btn-card" onClick={() => setIsCentigrade (!isCentigrade)}>Cambiar a F°</button>
    </div>
    </div>
    </div>
  );
};

export default Card;
