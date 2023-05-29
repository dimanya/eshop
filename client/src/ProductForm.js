import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const [flowerName, setFlowerName] = useState('');
  const [category, setCategory] = useState('');
  const [userId, setUserId] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Создание объекта с данными товара
      const productData = {
        flowerName,
        category,
        userId
      };

      // Отправка POST-запроса на сервер
      const response = await axios.post('http://localhost:8080/api/flowers', productData);
      
      // Обработка успешного ответа от сервера
      console.log('Товар успешно добавлен:', response.data);

      // Сброс значений полей формы
      setFlowerName('');
      setCategory('');
      setUserId('');
    } catch (error) {
      // Обработка ошибки при отправке запроса
      console.error('Ошибка при добавлении товара:', error);
    }
  };

  return (
    <div>
      <h2>Добавить товар</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="productName">Название товара:</label>
          <input
            type="text"
            id="productName"
            value={flowerName}
            onChange={(e) => setFlowerName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Категория:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Выберите категорию</option>
            <option value="Розы">Розы</option>
            <option value="Гвоздики">Гвоздики</option>
            <option value="Пионы">Пионы</option>
            <option value="Астры">Астры</option>
            <option value="Хризантемы">Хризантемы</option>
          </select>
        </div>
        <div>
          <label htmlFor="userId">ID пользователя:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default AddProductForm;
