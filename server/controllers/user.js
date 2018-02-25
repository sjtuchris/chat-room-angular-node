var User = require('../models/user.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.username) {
        res.status(400).send({message: "Username can not be empty"});
    } else {
        var user = new User({
            username: req.body.username,
            gender: req.body.gender,
            avatar: req.body.avatar,
            registerDate: new Date(), // ?
            lastLogin: new Date(),
            status: "Active",
            password: req.body.password
        });

        user.save(function(err, data) {
            console.log(data);
            if(err) {
                console.log(err);
                res.status(500).send({message: "Some error occurred while creating the User."});
            } else {
                res.send({
                    message: `${req.body.username} successfully created`
                })
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