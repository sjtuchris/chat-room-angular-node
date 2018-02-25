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
    User.findById(req.params.id, function(err, data) {
        if(err) {
            res.status(500).send({message: req.params.id + " doesn't exist!"});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if(err) {
            res.status(500).send({message: req.params.id + "doesn't exist!"});
        }

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
                res.status(500).send({message: "Could not update note with id " + req.params.username});
            } else {
                res.send({
                    message: req.params.id + " successfully updated"
                });
            }
        });
    });
};

// Need improvement to make sure two operations both succeed
exports.delete = function(req, res) {
    User.findByIdAndRemove(req.params.id).exec();
    Credential.findByIdAndRemove(req.params.id).exec();
    res.send({message: req.params.id + " credential deleted successfully!"})
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