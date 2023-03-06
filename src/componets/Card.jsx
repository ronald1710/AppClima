const Card = () => {
  return (
    <div>
      <div className="containerCard">
        <div className="container-card">
          <div className="info row">
            <div className="info1 col">
              <h1>19°</h1>
              <h5>Viento</h5>
              <h5>Nubes</h5>
              <h5>Presion</h5>
              <h4>Queretaro, Mexico</h4>
            </div>
            <div className="info2 col">
              <img src="/img/iconos/1.svg" className="text-end m-2" alt="" />
              <h4 className="text-end m-2">Parcialmente Nublado</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
