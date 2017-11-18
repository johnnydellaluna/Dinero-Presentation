var db = require("../models");

module.exports = function(app) {
    // CREATE
    app.post("/api/expenses", function(req, res) {
        db.Expenses
            .create(req.body)
            .then(function(dbExpenses) {
                res.json(dbExpenses);
            });
    });

    // UPDATE
    app.put("/api/expenses", function(req, res) {
        updatedExpenses = req.body;

        db.Expenses
            .update(
                updatedExpenses, {
                    where: { id: req.body.id }
                }
            )
            .then(function(dbExpenses) {
                res.json(dbExpenses);
            });
    });

    // DELETE
    app.delete("/api/expenses/:UserId/:id", function(req, res) {
        db.Expenses
            .destroy({
                where: {
                    UserId: req.params.UserId,
                    id: req.params.id
                }
            })
            .then(function(dbExpenses) {
                res.json(dbExpenses);
            });
    });

    // READ
    // ALL EXPENSES BY USER
    app.get("/api/expenses/:UserId", function(req, res) {
        db.Expenses
            .findAll({
                where: {
                    UserId: req.params.UserId
                },
                include: [db.User]
            })
            .then(function(dbExpenses) {
                res.json(dbExpenses);
            });
    });
    // EXPENSE BY USER AND BY EXPENSE ID
    app.get("/api/expenses/:UserId/:id", function(req, res) {
        db.Expenses
            .findOne({
                where: {
                    UserId: req.params.UserId,
                    id: req.params.id
                },
                include: [db.User]
            })
            .then(function(dbExpenses) {
                res.json(dbExpenses);
            });
    });
    // ALL EXPENSES BY USER AND ORDERED BY CATEGORY
    app.get("/api/expenses/:UserId/:category", function(req, res) {
        db.Expenses
            .findAll({
                where: {
                    UserId: req.params.UserId,
                    category: req.params.category
                },
                include: [db.User]
            })
            .then(function(dbExpenses) {
                res.json(dbExpenses);
            });
    });
    // ALL EXPENSES BY USER AND ORDERED BY AMOUNT
    app.get("/api/expenses/:UserId/:amount_due", function(req, res) {
        db.Expenses
            .findAll({
                where: {
                    UserId: req.params.UserId,
                    id: req.params.id,
                    amount_due: req.params.amount_due
                },
                include: [db.User],
                order: [
            ["amount_due", "DESC"]
        ]
            })
            .then(function(dbExpenses) {
                res.json(dbExpenses);
            });
    });
    // ALL EXPENSES BY USER AND ORDERED BY DATE
    app.get("/api/expenses/:UserId/:due_date", function(req, res) {
        db.Expenses
            .findAll({
                where: {
                    UserId: req.params.UserId,
                    id: req.params.id,
                    due_date: req.params.due_date
                },
                include: [db.User],
                order: [
            ["due_date", "DESC"]
        ]
            })
            .then(function(dbExpenses) {
                res.json(dbExpenses);
            });
    });
};