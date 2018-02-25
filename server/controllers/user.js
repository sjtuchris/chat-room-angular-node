var User = require('../models/user.js');
var Credential = require('../models/credential.js')

exports.create = function(req, res) {
    if (!req.body.username) {
        res.status(400).send( { message: "Username cannot be empty" } );
    } else if (!req.body.password) {
        res.status(400).send( { message: "Password cannot be empty"} );
    } else {
        // Check if username has already been taken
        Credential.findOne({ "username" : req.body.username}, function(err, data) {
            if (err) {
                console.log(err);
                res.status(500).send({ message: "Some error occured while creating the user" });
            } else if (data) {
                console.log(data);
                res.send({ message: "This username already exists" });
            } else {
                // valid username, create new user
                var credential = new Credential({
                    username: req.body.username,
                    password: req.body.password,
                });
                credential.save(function(err, data) {
                    console.log(data);
                    if (err) {
                        console.log(err);
                        res.status(500).send({message: "Some error occured while creating the user"});
                    } else {
                        // create user in User table
                        var userid = data._id
                        var user = new User({
                            _id: userid,
                            username: req.body.username,
                            registerDate: new Date(), // ?
                            lastLogout: new Date(),
                            status: "Active",
                        });

                        user.save(function(err, data) {
                            if(err) {
                                console.log(err);
                                res.status(500).send({message: "Some error occurred while creating the User."});
                            } else {
                                res.send({ message: userid + " successfully created"});
                            }
                        });
                        
                    }
                });
            }
        });
    }
};

// exports.findAll = function(req, res) {
//     // Retrieve and return all notes from the database.
//     Note.find(function(err, notes){
//         if(err) {
//             res.status(500).send({message: "Some error occurred while retrieving notes."});
//         } else {
//             res.send(notes);
//         }
//     });
// };

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    User.findById(req.params.id, function(err, data) {
        if(err) {
            res.status(500).send({message: `${req.body.id} doesn't exist!`});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    User.findById(req.params.id, function(err, user) {
        if(err) {
            res.status(500).send({message: `${req.body.id} doesn't exist!`});
        }

        user.username = req.body.username;
        user.gender = req.body.gender;
        user.avatar = req.body.avatar;
        user.password = req.body.password;
    
        user.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update note with id " + req.params.username});
            } else {
                res.send({
                    message: `${req.body.username} successfully updated`
                });
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    User.remove({_id: req.params.id}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete note with id " + req.params.id});
        } else {
            res.send({message: "Note deleted successfully!"})
        }
    });
};

exports.login = function(req, res) {
    User.findOne({
        username: req.body.username,
        password: req.body.password
    }, function(err, user) {
        if(err) {
            // res.status(500).send({message: "Could not delete note with id " + req.params.id});
            res.send({
                message: "username or password invalid"
            })
        } else {
            res.send({
                message: "login successful"
            })
    }})
}