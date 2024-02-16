const express = require('express')
const routes = express.Router()
const PlanetController = require('../Controller/PlanetController');
const SateliteController = require("../Controller/SateliteController");
const NavesController = require('../Controller/NavesController');
const PilotsController = require('../Controller/PilotsController');

//Rotas de Planetas
routes.post('/planets' , PlanetController.store);
routes.get('/planets' , PlanetController.index);
routes.put('/planets/:id', PlanetController.put)
routes.delete('/planets/:id' , PlanetController.delete)
//Rotas Satelites
routes.post("/planet/:planetId/satelites", SateliteController.store)
routes.get("/planet/:planetId/satelites", SateliteController.index)

//Rotas Piloto
routes.post("/pilot" , PilotsController.store)
routes.get("/pilot" , PilotsController.get)
routes.delete("/pilot/:id" , PilotsController.delete)


routes.post("/naves/:capId" , NavesController.store)
routes.get("/naves/:capId" , NavesController.get)

module.exports = routes