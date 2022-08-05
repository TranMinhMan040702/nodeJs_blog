const Course = require('../models/Course');

class SiteController {
    index(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('home', {
                    courses,
                }),
            )
            .catch(next);
        // res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
