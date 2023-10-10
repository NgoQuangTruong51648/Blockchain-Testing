const route = require("express").Router()
const Product = require("../models/Products")
const User = require("../models/Users")

// Create NFT
route.post("/", async (req, res) => {
    const newNFT = new Product(req.body)
    try {
        const savedNFT = await newNFT.save()
        res.status(200).json(savedNFT)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Update NFT
route.put("/:id", async (req, res) => {
    try {
        const nft = await Product.findById(req.params.id)
        // if (nft.author === req.body.author || nft.owner === req.body.owner) {
            try {
                const updateNFT = await Product.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, { new: true })
                res.status(200).json(updateNFT)
            } catch (err) {
                res.status(500).json(err)
            }
        // } 
        // else {
        //     res.status(401).json("You can update only your NFT")
        // }
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete NFT
route.delete("/:id", async (req, res) => {
    try {
        const nft = await Product.findById(req.params.id)
        if (nft.creator === req.body.creator || nft.owner === req.body.owner) {
            try {
                await Product.findByIdAndDelete(req.params.id)
                res.status(200).json("Your NFT has been deleted !!!")
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("You can delete only your NFT")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// Like and Dislike
route.put("/:id/like", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product.like.includes(req.body.userId)) {
        await product.updateOne({ $push: { like: req.body.userId } });
        res.status(200).json("The post has been liked");
      } else {
        await product.updateOne({ $pull: { like: req.body.userId } });
        res.status(200).json("The post has been disliked");
      }
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get NFT
route.get("/", async (req, res) => {
    try {
        const nft = await Product.find().populate('author').populate('owner')
        res.status(200).json(nft)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get NFT with ID
route.get("/:id", async (req, res) => {
    try {
        const nft = await Product.findById(req.params.id).populate('author').populate('owner')
        res.status(200).json(nft)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get Products Time Line User
route.get("/timeline/:userId", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId).populate('author').populate('owner')
        const userProducts = await Product.find({ creator: currentUser.username } || { owner: currentUser.username })
        const friendProducts = await Promise.all(
            currentUser.followings.map((name) => {
                return Product.find({ creator: currentUser.username } || { owner: currentUser.username })
            })
        )
        res.status(200).json(userProducts.concat(...friendProducts))
    } catch (err) {
        res.status(500).json(err)
    }
})


// Get User's Products Like
route.get("/profile/liked/:userId" , async (req,res) => {
    try{
        const likedProducts = await Product.find({ like : req.params.userId }).populate('author').populate('owner')
        res.status(200).json(likedProducts)
    }catch(err){
        res.status(500).json(err)
    }
})

// Get User's Products with Author
route.get("/profile/a/:userId" , async (req,res) => {
    try{
        const createdP = await Product.find({ author : req.params.userId }).populate('author').populate('owner')
        res.status(200).json(createdP)
    }catch(err){
        res.status(500).json(err)
    }
})


// Get User's Products with Owner
route.get("/profile/o/:userId" , async (req,res) => {
    try{
        const createdP = await Product.find({ owner : req.params.userId }).populate('author').populate('owner')
        res.status(200).json(createdP)
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = route