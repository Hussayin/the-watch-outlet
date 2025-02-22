// Basket.jsx
import { useBasket } from "../context/BasketContext";

const Basket = () => {
  const { basket, dispatch } = useBasket();

  return (
    <div>
      <h2>Savat</h2>
      {basket.length === 0 ? (
        <p>Savat bo'sh</p>
      ) : (
        basket.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.price} USD</p>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_BASKET", payload: item })
              }
            >
              O'chirish
            </button>
          </div>
        ))
      )}
      {basket.length > 0 && (
        <button onClick={() => dispatch({ type: "CLEAR_BASKET" })}>
          Savatni tozalash
        </button>
      )}
    </div>
  );
};

export default Basket;
