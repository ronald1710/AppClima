const Card = ({data}) => {
  return (
    <div>
      <div className="containerCard">
        <div className="container-card">
          <div className="info row">
            <div className="info1 col">
              <h1>{data.main?.temp}°C</h1>
              <h5>Viento: {data.wind?.speed}</h5>
              <h5>Cielo: {data.weather?.[0].main}</h5>
              <h5>Presion: {data.main?.pressure}</h5>
              <h4>{data.name}, {data.sys?.country}</h4>
            </div>
            <div className="info2 col">
              <img src="/img/iconos/2.svg" className="text-end" alt="" />
              <h4 className="text-end text mt-4">Parcialmente Nublado</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
