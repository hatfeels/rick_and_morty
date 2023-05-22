const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const { data } = await axios.get(`${URL}/${id}`);
    const char = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status,
    };
    res.status(200).json(char);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {
  getCharById,
};
