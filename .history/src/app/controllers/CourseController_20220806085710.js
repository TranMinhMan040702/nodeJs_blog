const Course = require('../models/Course');
const { mongooseObject } = require('../../util/mongoose');

class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { courses: mongooseObject(course) });
            })
            .catch(next);
        // res.send(req.params.slug);
    }

    create(req, res, next) {
        res.render('courses/create');
    }
}

module.exports = new CourseController();
