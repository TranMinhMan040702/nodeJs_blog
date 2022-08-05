const Course = require('../model/Course');

class SiteController {
    index(req, res) {
        res.json();

        // res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
