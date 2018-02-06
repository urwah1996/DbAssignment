var mysql      = require('mysql');

var state = {
  pool: null,
  mode: null,
}

exports.connect = function(done) {
  state.pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'studentdb'
  })

  done()
}

exports.get = function() {
  return state.pool
}
