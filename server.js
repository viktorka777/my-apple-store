const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());

// MongoDB URI
const mongoURI = 'mongodb://localhost:27017/myapplestore'; // замініть це на URI вашої бази даних

// Підключення до MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Схема та модель користувача
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Маршрут для реєстрації користувача
app.post('/api/register', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password // У реальному застосунку обов'язково хешуйте паролі
  });

  newUser.save()
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
