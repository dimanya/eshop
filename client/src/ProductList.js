import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Список товаров</h2>
      {products.length === 0 ? (
        <p>Нет доступных товаров.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Категория: {product.category}</p>
              <p>Добавил: {product.userId}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
