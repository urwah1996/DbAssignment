var db = require('../config/db.js');
var mysql = require('mysql');

exports.getAllStudents = function (done) {

  query = db.get().query('SELECT * FROM studentdetail', function (err, result) {
    if (err) return done(err)
    done(result)
  })

}
exports.getStudentById = function (id,done) {

  query = db.get().query('SELECT * FROM studentdetail WHERE `Regno`=?',id, function (err, result) {
    if (err) return done(err)
    done(result)
  })

}

exports.addNewStudent = function (data,done){
    query=db.get().query('INSERT INTO studentdetail SET first_name = ?, last_name = ?,Regno = ?, DOB = ?, Gender = ?, Address = ?, City = ?, State = ?,Zipcode = ?',
     [data.first_name,data.last_name,data.regno,data.dob,data.gender,data.address,data.city,data.state,data.zipcode], function(err,rows,fields){
        if (err) console.log(err)
        console.log(rows);
        done(rows);
     });
}