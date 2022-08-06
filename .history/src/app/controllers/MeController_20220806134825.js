const Course = require('../models/Course');
const { mongooseObject } = require('../../util/mongoose');

class MeController {
    index(req, res, next) {
        res.send();
    }
}

module.exports = new MeController();
