const Course = require('../models/Course');
const { mongooseObject } = require('../../util/mongoose');

class MeController {
    storedCourses(req, res, next) {
        res.send();
    }
}

module.exports = new MeController();
