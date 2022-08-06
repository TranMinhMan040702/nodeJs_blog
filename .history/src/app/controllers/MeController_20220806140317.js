const Course = require('../models/Course');
const { mutilpleMongooseObject } = require('../../util/mongoose');

class MeController {
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/stored-courses', {
                    courses: mutilpleMongooseObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
