
// import React, {useState } from 'react';
// import { useParams} from 'react-router-dom';
// import '../styles/description.css'; // Asegúrate de importar correctamente el archivo CSS

// export default function Description({ productos, onAdd }) {
    

//   const { id } = useParams();
  
//   const producto = productos.find((producto) => producto.id.toString() === id);

//   const [mainImage, setMainImage] = useState(0);

//   function hanlderClickImg(index){
//     setMainImage(index);
//   }

//   if (!producto) {
//     return <div>Producto no encontrado</div>;
//   }

//   return (
//         <div className="contenedor-description">
//         <div>
//             <h1>{producto.title}</h1>
//             <div className="image-container">
//             <img
//                 key={producto.id}
//                 src={producto.images[mainImage]}//{producto.images[0]} // La primera imagen será la más grande
//                 alt={`Product ${producto.id}`}
//                 className={mainImage ==='main-image'  ? 'thumbnail' : 'main-image'}
//             />
//             <div className="thumbnail-container" >
//                 {producto.images.slice(1).map((image, index) => (
//                 <img
//                     key={index}
//                     src={image}
//                     alt={`Product ${producto.id}`}
//                     className={mainImage ==='thumbnail'  ? 'main-image' : 'thumbnail'}
//                     onClick={()=>hanlderClickImg(index)}
//                 />
//                 ))}
//             </div>
//             </div>
//             <div className="description">
//             <p>description: {producto.description}</p>
//             <h3>price: ${producto.price}</h3>
//             <button onClick={() => onAdd(producto.id)}>
//                 comprar ahora {producto.quantity}
//             </button>
            
//             </div>
//         </div>
//         </div>
//   );
// }
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/description.css'; // Asegúrate de importar correctamente el archivo CSS

export default function Description({ productos, onAdd }) {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id.toString() === id);

  // Estado para controlar la imagen principal
  const [mainImageIndex, setMainImageIndex] = useState(0);

  // Función para manejar la navegación con los botones prev y next
  const handlePrevClick = () => {
    setMainImageIndex((prevIndex) => (prevIndex - 1 + producto.images.length) % producto.images.length);
  };

  const handleNextClick = () => {
    setMainImageIndex((prevIndex) => (prevIndex + 1) % producto.images.length);
  };

  // Función para manejar el clic en las miniaturas
  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
  };

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="contenedor-description">
      <div>
        <h1>{producto.title}</h1>
        <div className="image-container">
          {/* Botón para imagen anterior */}
          <button className="prev-button" onClick={handlePrevClick}>Prev</button>

          {/* Imagen principal */}
          <img
            src={producto.images[mainImageIndex]}
            alt={`Product ${producto.id}`}
            className="main-image"
          />

          {/* Botón para siguiente imagen */}
          <button className="next-button" onClick={handleNextClick}>Next</button>

          {/* Miniaturas */}
          <div className="thumbnail-container">
            {producto.images.map((image, index) => (
              index !== mainImageIndex && (
                <img
                  key={index}
                  src={image}
                  alt={`Product thumbnail ${index}`}
                  className="thumbnail"
                  onClick={() => handleThumbnailClick(index)}
                />
              )
            ))}
          </div>
        </div>
        <div className="description">
          <p>Descripción: {producto.description}</p>
          <h3>Precio: ${producto.price}</h3>
          <button onClick={() => onAdd(producto.id)}>
            Comprar ahora {producto.quantity}
          </button>
        </div>
      </div>
    </div>
  );
}

