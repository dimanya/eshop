import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Создание объекта с данными регистрации
      const registrationData = {
        email,
        password
      };

      // Отправка POST-запроса на сервер
      const response = await axios.post('http://localhost:8080/api/auth/signUp', registrationData);
      
      // Обработка успешного ответа от сервера
      console.log('Пользователь успешно зарегистрирован:', response.data);

      // Сброс значений полей формы
      
      setEmail('');
      setPassword('');
    } catch (error) {
      // Обработка ошибки при отправке запроса
      console.error('Ошибка при регистрации пользователя:', error);
    }
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleFormSubmit}>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
