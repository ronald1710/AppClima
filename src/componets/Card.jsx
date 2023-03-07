const Card = (data) => {
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
              <h4>{data?.name}</h4>
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
