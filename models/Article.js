const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true
    },
    url: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    saved: {
        type: Boolean,
        default: false
    }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;