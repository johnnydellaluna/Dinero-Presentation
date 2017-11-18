var db = require("../models");

module.exports = function(app) {
  // CREATE
  app.post("/api/income", function(req, res) {
    db.Income
    .create(req.body)
    .then(function(dbIncome) {
      res.json(dbIncome);
    });
  });

  // UPDATE
  app.put("/api/income", function(req, res) {
    updatedIncome = req.body;

    db.Income
    .update(
      updatedIncome,
      {
        where: { id: req.body.id }
      }
    )
    .then(function(dbIncome) {
      res.json(dbIncome);
    });
  });

  // DELETE
  app.delete("/api/income/:UserId/:id", function(req, res) {
    db.Income
    .destroy({
      where: {
        UserId: req.params.UserId,
        id: req.params.id
      }
    })
    .then(function(dbIncome) {
      res.json(dbIncome);
    });
  });

  // READ
  // ALL INCOME BY USER
  app.get("/api/income/:UserId", function(req, res) {
    db.Income
    .findAll({
      where: {
        UserId: req.params.UserId
      },
      include: [db.User]
    })
    .then(function(dbIncome) {
      res.json(dbIncome);
    });
  });
  // INCOME BY USER AND BY INCOME ID
  app.get("/api/income/:UserId/:id", function(req, res) {
    db.Income
    .findOne({
      where: {
        UserId: req.params.UserId,
        id: req.params.id
      },
      include: [db.User]
    })
    .then(function(dbIncome) {
      res.json(dbIncome);
    });
  });
  // ALL INCOME BY USER AND OREDERED BY TYPE
    app.get("/api/income/:UserId/:type", function(req, res) {
    db.Income
    .findAll({
      where: {
        UserId: req.params.UserId,
        id: req.params.id,
        type: req.params.type

      },
      include: [db.User],
      order: [
            ["type", "DESC"]
        ]

    })
    .then(function(dbIncome) {
      res.json(dbIncome);
    });
  });

  // ALL INCOME BY USER AND OREDERED BY AMOUNT
  app.get("/api/income/:UserId/:amount", function(req, res) {
    db.Income
    .findAll({
      where: {
        UserId: req.params.UserId,
        id: req.params.id,
        amount: req.params.amount

      },
      include: [db.User],
      order: [
            ["amount", "DESC"]
        ]

    })
    .then(function(dbIncome) {
      res.json(dbIncome);
    });
  });
};