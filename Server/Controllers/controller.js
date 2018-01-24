var schema = require("../Models/schema");



module.exports.display = (req,res)=>{
    schema.find({},(err,result)=>{
        if(err){
            throw err
        }
        res.json(result)
    });
}
module.exports.add = (req,res)=>{
    var anime = new schema(req.body);
    anime.save((err,result)=>{
        if(err){
            throw err
        }
        res.json(result)
    })
}
module.exports.one = (req,res)=>{
   var id = {_id:req.params.id}
    schema.findById(id,(err,result)=>{
        if(err){
            throw err
        }
        res.json(result)
    })
}
module.exports.delete = (req,res)=>{
    var id = {_id:req.params.id};
    schema.remove(id,(err,result)=>{
        if(err){
            throw err
        }
        res.json(result)
    })
}


module.exports.update = (req,res)=>{
    var anime = new schema(req.body);
    var id = {_id:req.params.id};
    var set = {$set:{
        title: anime.title,
        genre: anime.genre,
        episodes: anime.episodes,
        description: anime.description,
        main_character: anime.main_character,
        image_url: anime.image_url
    }}
    schema.findOneAndUpdate(id,set,{},(err,result)=>{
        if(err){
            throw err
        }
        res.json(result)
    })
}