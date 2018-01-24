var mongoose = require("mongoose");

module.exports = mongoose.model('top',{
    
    title:{
        type: String,
        required:true
    },
    genre:{
        type: String,
        required:true
    },
    episodes:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    main_character:{
        type: String,
        required:true
    },
    image_url:{
        type: String,
        required:true
    }
});
