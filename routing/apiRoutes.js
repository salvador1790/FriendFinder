var path = require('path');

var friends = require("../app/data/friends")

module.exports = function (app) {
     app.get('/api/friends', function (req, res) {
          res.json(friends)

     })
}

//module.exports = function (app) {
    // app.post('/api/friends', urlencodedParser, function (req, res) {
        //  var newFriend = req.body;
          //console.log(newFriend);

          // here I would have gotten the response the form being filled out and i would have passed it to the current array of friends. Then I would have compared the response to the already existing responses to find out the best match.
     //})
//}