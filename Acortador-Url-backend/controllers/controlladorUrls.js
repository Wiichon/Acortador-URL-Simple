const Url = require('../models/Url');

exports.createShortUrl = async (req, res) => {
    try {
      const url = await Url.create({ full: req.body.full });
      res.status(201).json(url);  // responde con el objeto creado
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la URL acortada', error });
    }
  };

exports.getAllUrls = async (req, res) => {
  const urls = await Url.find();
  res.json(urls);
};

exports.redirectToFullUrl = async (req, res) => {
  const url = await Url.findOne({ short: req.params.short });
  if (!url) return res.sendStatus(404);
  url.clicks++;
  await url.save();
  res.redirect(url.full);
};