const db = require('../models');

module.exports = {
    findOne: (req, res) => {
        db.Note
            .findOne(req.query)
            .then((dbNote) => {
                res.json(dbNote);
            });
    },
    create: (req, res) => {
        db.Note
            .create(req.body)
            .then((dbNote) => {
                res.json(dbNote);
            });
    },
    detete: (req, res) => {
        db.Note
            .remove({ _id: req.params.id })
            .then((dbNote) => {
                res.json(dbNote);
            });
    }
};