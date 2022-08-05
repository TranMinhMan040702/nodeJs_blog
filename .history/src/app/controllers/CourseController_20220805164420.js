const Course = require('../models/Course');
const { mutilpleMongooseObject } = require('../../util/mongoose');

class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(function (course) {
                res.json(course);
            })
            .catch(next);
    }
}

module.exports = new CourseController();
