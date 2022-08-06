const Course = require('../models/Course');
const { mongooseObject } = require('../../util/mongoose');

class MeController {
    storedCourses(req, res, next) {
        res.render('me/stored-courses');
    }
}

module.exports = new MeController();
