const Course = require('../models/Courses');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /news
    // index(req, res) {
    //     //callback
    //     Course.find({}, function (err, courses) {
    //         if (!err) {
    //             res.status(200).json(courses);
    //         } else {
    //             res.status(400).json({ error: 'ERROR' });
    //         }
    //     });
    // }

    index(req, res, next) {
        //promise
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);

        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.status(200).json(courses);
        //     } else {
        //         res.status(400).json({ error: 'ERROR' });
        //     }
        // });
    }

    // index = async (req, res) => {
    //     try {
    //       const posts = await Course.find();
    //       res.status(200).json(posts);
    //     } catch (err) {
    //       res.status(500).json({ error: err });
    //     }
    //   };

    // [GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
