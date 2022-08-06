const Course = require('../models/Course');
const { mongooseObject } = require('../../util/mongoose');

class CourseController {
    //[GET]
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

    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', {
                    course: mongooseObject(course),
                });
            })
            .catch(next);
    }

    update(req, res, next) {}
}

module.exports = new CourseController();
