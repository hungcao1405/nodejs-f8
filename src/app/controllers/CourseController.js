const Course = require('../models/Courses');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }
    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
}
module.exports = new CourseController();
