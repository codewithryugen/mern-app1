import Post from "../models/postModel.js"

export const getPosts = async (req,res,next)=>{
    try{
        const posts = await Post.find();
        return res.status(200).json({data:posts});
    }catch(err){
        return res.status(400).json({error:err.message});
    }
}

export const CreatePost = async (req,res,next)=>{
    try{
        const {title,body} = req.body;
        await Post.create({title,body});
        return res.status(201).json({message:'post is created!'});
    }catch(err){
        return res.status(400).json({error:err.message});
    }
}