var studentdetail=require('../models/studentDetail');

module.exports = function (app) {
    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================

    app.get('/', function (req, res) {
        res.render('home',{});
        
    });
    app.get('/studentform', function (req, res) {
        res.render('studentform',{});
        
    });
    app.post('/studentdetail', function (req, res) {
        console.log(req.body);
        studentdetail.addNewStudent(req.body, function(info){

            res.render('home',{});

        });

    });
    app.post('/studentbyreg', function (req, res) {
        console.log(req.body);
        studentdetail.getStudentById(req.body.regno, function(info){

            res.render('studentbyreg',{"data" : info});

        });

    });

    app.get('/studentsdetail', function (req, res) {

        studentdetail.getAllStudents(info => {
                        console.log(info);

            res.render('studentdetail',{"title":"All Student Details", "data" : info});


        });

    });

}