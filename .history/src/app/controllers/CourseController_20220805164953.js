const Course = require('../models/Course');
const { mutilpleMongooseObject } = require('../../util/mongoose');

class CourseController {
    show(req, res, next) {
        // Course.findOne({ slug: req.params.slug })
        //     .then((course) => {
        //         res.json(course);
        //     })
        //     .catch(next);
        res.sent(req.params.slug);
    }
}

module.exports = new CourseController();
