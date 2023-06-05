const router = require("express").Router();
const getAllPokemon = require("../Controllers/getAllPokemon")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
//----OBTIENE UN POKEMON POR ID----//
// router.get("/pokemon/:id", (req, res) => {
//   getCharById(req, res);
// });
//----OBTIENE TODOS LOS POKEMON----//
router.get("/", getAllPokemon)


// router.post("/pokebola", (req, res) => {
//   postFav(req, res);
// });
// router.delete("/pokebola/:id", (req, res) => {
//   postFav(req, res);
// });



module.exports = router;
