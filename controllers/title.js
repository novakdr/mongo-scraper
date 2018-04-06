const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Title
            .find(req.query)
            .sort({ date: -1 })
            .then((dbTitle) => {
                res.json(dbTitle);
            });
    },
    delete: (req, res) => {
        db.Title.remove({ _id: req.params.id }).then((dbTitle) => {
            res.json(dbTitle);
        });
    },
    update: (req, res) => {
        db.Title.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then((dbTitle) => {
            res.json(dbTitle);
        });
    }
}