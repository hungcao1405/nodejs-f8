const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var slug = require('mongoose-slug-generator');
const { TRUE } = require('node-sass');
mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String },
        description: { type: String },
        image: { type: String },
        // createAt: { type: Date, default: Date.now },
        // updateAt: { type: Date, default: Date.now },
        videoId: { type: String },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);
module.exports = mongoose.model('Course', Course, 'courses');
