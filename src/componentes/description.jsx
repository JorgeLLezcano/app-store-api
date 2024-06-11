
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/description.css'; // Asegúrate de importar correctamente el archivo CSS

export default function Description({ productos, onAdd, onDecrement }) {
  const { id } = useParams();

  const producto = productos.find((producto) => producto.id.toString() === id);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
        <div className="contenedor-description">
        <div>
            <h1>{producto.title}</h1>
            <div className="image-container">
            <img
                key={producto.id}
                src={producto.images[0]} // La primera imagen será la más grande
                alt={`Product ${producto.id}`}
                className="main-image"
            />
            <div className="thumbnail-container">
                {producto.images.slice(1).map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Product ${producto.id}`}
                    className="thumbnail"
                />
                ))}
            </div>
            </div>
            <div className="description">
            <p>description: {producto.description}</p>
            <h3>price: ${producto.price}</h3>
            <button onClick={() => onAdd(producto.id)}>
                comprar ahora {producto.quantity}
            </button>
            
            </div>
        </div>
        </div>
  );
}
