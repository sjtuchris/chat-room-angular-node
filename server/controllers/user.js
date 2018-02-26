var User = require('../models/user.js');

exports.create = function(req, res) {
    if (!req.body.username) {
        res.status(400).send( { message: "Username cannot be empty" } );
    } else if (!req.body.password) {
        res.status(400).send( { message: "Password cannot be empty"} );
    } else {
        // Check if username has already been taken
        User.findOne({ "username" : req.body.username}, function(err, data) {
            if (err) {
                console.log(err);
                res.send({ message: "Some error occured while creating the user", status: "2" });
            } else if (data) {
                console.log(data);
                res.send({ message: "This username already exists", status: "1" });
            } else {
                // create user in User table
                var user = new User({
                    username: req.body.username,
                    password: req.body.password,
                    registerDate: new Date(), // ?
                    lastLogout: new Date(),
                    status: "Active",

                    // initialize empty values
                    nickname: req.body.username,
                    email: "",
                    whatsUp: "",
                    gender: "",
                    avatar: "",
                    firstName: "",
                    lastName: "",
                    country: "",
                    online: true,
                    threadList: [],
                });

                user.save(function(err, data) {
                    if(err) {
                        console.log(err);
                        res.send({ message: "Some error occurred while creating the User.", status: "2" });
                    } else {
                        res.send({ message: user._id + " successfully created", status: "0"});
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
    User.findById(req.params.id, function(err, data) {
        if (err) {
            res.send({
                message: req.params.id + " error during find",
                status: "2"
            });
        } else if (!data) {
            res.send({
                message: req.params.id + " user not exist",
                status: "1"
            });
        } else {
            res.send({
                data: data,
                status: "0"
            });
        }
    });
};

exports.update = function(req, res) {
    if (req.body.id) {
        User.findById(req.body.id, function(err, user) {
            if(err) {
                res.send({
                    message: req.body.id + " error during update",
                    status: "2"
                });
            } else if (!user) {
                res.send({
                    message: req.body.id + " user not exist",
                    status: "1"
                });
            } else {
                if (req.body.username) {
                    user.username = req.body.username;
                }
                if (req.body.gender) {
                    user.gender = req.body.gender;
                }
                if (req.body.avatar) {
                    user.avatar = req.body.avatar;
                }
                if (req.body.nickname) {
                    user.nickname = req.body.nickname;
                }
                if (req.body.email) {
                    user.email = req.body.email;
                }
                if (req.body.avatar) {
                    user.avatar = req.body.avatar;
                }
                if (req.body.firstName) {
                    user.firstName = req.body.firstName;
                }
                if (req.body.lastName) {
                    user.lastName = req.body.lastName;
                }
                if (req.body.country) {
                    user.country = req.body.country;
                }
                if (req.body.online) {
                    user.online = req.body.online;
                }
            
                user.save(function(err, data){
                    if(err) {
                        res.send({ 
                            message: "Could not update note with id " + req.body.username,
                            status: "2"
                        });
                    } else {
                        res.send({
                            message: req.body.id + " successfully updated",
                            status: "0"
                        });
                    }
                });
            }
        });
    } else {
        res.send({
            message: "user id is empty",
            status: "1"
        });
    }
 
};

// Need improvement to make sure two operations both succeed
exports.delete = function(req, res) {
    User.findById(req.body.id, function(err, user) {
        if (err) {
            res.send({ message: req.body.id + " error during delete", status: "2"});
        } else if (!user) {
            res.send({ message: req.body.id + " user not exist", status: "1"});
        } else {
            user.status = "Suspended";
            user.save(function(err, data) {
                if (err) {
                    res.send({ message: req.body.id + " error during delete", status: "2"});
                } else {
                    res.send({message: req.body.id + " credential deleted successfully!", status: "0"})
                }
            });
        }
    });
};

exports.login = function(req, res) {
    User.findOne({
        username: req.body.username,
        password: req.body.password,
    }, function(err, userData) {
        if (err) {
            res.send({ message: "Some error occur during login. Try again", status: "2"});
        } else if (userData) {
            res.send({ message: userData.username + " login successful", status: "0"});
        } else {
            res.send({ message: "username or password invalid", status: "1"});
        }
    });
}