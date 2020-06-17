const mongosee = require('mongoose');
const URI = 'mongodb://localhost/mean-crud';

mongosee.connect(URI)
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));

module.exports = mongosee;