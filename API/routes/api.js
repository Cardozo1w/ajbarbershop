const router = require("express").Router();
const { Servicios } = require("../conexion");
const { Registros } = require("../conexion");

router.get("/api", async (req, res) => {
  const servicios = await Servicios.findAll();
  res.json(servicios);
});

router.get("/api/registros", async (req, res) => {
    const registros = await Registros.findAll();
    res.json(registros);
  });

router.get("/api/:id", async (req, res) => {
  const servicios = await Servicios.findByPk(req.params.id);
  res.json(servicios);
});

router.post("/api", async (req, res) => {
  const servicios = await Servicios.create(req.body);
  res.json(servicios);
});

module.exports = router;
