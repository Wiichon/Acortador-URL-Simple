require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const urlRoutes = require('./routes/urlRoutes');

mongoose.connect(process.env.MONGO_URI, {
  });
app.use(cors());
app.use(express.json());
app.get('/favicon.ico', (req, res) => res.status(204));
app.get('/:short', async (req, res) => {
  const Url = require('./models/Url');
  const url = await Url.findOne({ short: req.params.short });

  if (!url) return res.sendStatus(404);

  url.clicks++;
  await url.save();

  res.redirect(url.full);
});

app.use('/api/urls', urlRoutes); 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

