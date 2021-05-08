const router = require("express").Router();
const { Servicios } = require("../conexion");
const { Registros } = require("../conexion");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

const startDate = new Date("2021-05-07 00:00:00");
const endDate = new Date("2021-05-07 23:59:59");

router.get("/api", async (req, res) => {
  const servicios = await Servicios.findAll();
  res.json(servicios);
});

router.get("/api/:id", async (req, res) => {
  const servicios = await Servicios.findByPk(req.params.id);
  res.json(servicios);
});

router.post("/api", async (req, res) => {
  const servicios = await Servicios.create(req.body);
  res.json(servicios);
});

router.post("/api/registros", async (req, res) => {
  const registros = await Registros.create(req.body);
  res.json(registros);
});

router.get("/total", async (req, res) => {
  const hoy = req.body.hoy;
  const registros = await Registros.findAll({
    attributes: [[sequelize.fn('SUM', sequelize.col('costo')), 'ingresos']],
    where: {
      fecha: { [Op.between] : [`${hoy} 00:00:00` , `${hoy} 23:59:59` ] },
    },
  });
  res.json(registros);
  console.log(req.params);
});

module.exports = router;
