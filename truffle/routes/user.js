const route = require("express").Router()
const User = require("../models/Users")
const bcrypt = require("bcrypt")

// Update User
route.put("/:id", async (req,res) => {
    if(req.body.userId === req.params.id || req.body.Admin){
        if(req.body.password){
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            }catch(err){
                return res.status(500).json(err)
            }
        }
        try{
            await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json("Account has been updated")
        }catch(err) {
            return res.status(500).json(err)
        }
    }else {
        res.status(403).json("You can update only your account!")
    }
})

// Delete User
route.delete("/:id", async (req,res) => {
    if(req.body.userId === req.params.id || req.body.Admin) {
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account has been deleted")
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can delete only your account!")
    }
})

// Get User
route.get("/:id" , async (req,res) => {
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

// Get User From Name
route.get("/name/:username" , async (req,res) => {
    try{
        const user = await User.findOne({ username : req.params.username})
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

// Follow User
route.put("/:id/follow" , async (req,res) => {
    if(req.params.id !== req.body.userId){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({
                    $push: {
                        followers : req.body.userId
                    }
                })
                await currentUser.updateOne({
                    $push : {
                        followings : req.params.id
                    }
                })
                res.status(200).json("User has been followed")
            }else{
                res.status(403).json("You allready follow this user")
            }
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can't follow yourself")
    }
})

// UnFollow User
route.put("/:id/follow" , async (req,res) => {
    if(req.params.id !== req.body.userId){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({
                    $pull: {
                        followers : req.body.userId
                    }
                })
                await currentUser.updateOne({
                    $pull : {
                        followings : req.params.id
                    }
                })
                res.status(200).json("User has been unfollowed")
            }else{
                res.status(403).json("You don't follow this user")
            }
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can't unfollow yourself")
    }
})


module.exports = route