import { Link } from "react-router-dom";


export const Item = ({ id, photo, name, price }) => {
  return (
    <div key={id} className="cards">
      <img src={photo} className="cardPic" alt="imagen golosina card" />
      <h3>{name}</h3>
      <label>Precio: {price}€</label>
      <div className="card-footer">
        <Link to={`/detalle/${id}`}>
          <button className="btnDetalle">Comprar</button>
        </Link>
      </div>
    </div>
  );
};
