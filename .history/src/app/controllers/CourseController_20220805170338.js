const Course = require('../models/Course');
const { mutilpleMongooseObject } = require('../../util/mongoose');

class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show');
            })
            .catch(next);
        // res.send(req.params.slug);
    }
}

module.exports = new CourseController();
