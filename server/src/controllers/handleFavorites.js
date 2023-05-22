let myFavorites = [];

const postFav = (req, res) => {
  const charter = req.body;

  myFavorites.push(charter);

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const {id} = req.params;

  myFavorites = myFavorites.filter((char) => char.id !== Number(id));

  return res.status(200).json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
}