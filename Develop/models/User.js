const { Schema, model } = require("mongoose");
const Thought = require("./Thought")

const userSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
    username: { 
        type: String, 
        required: true,
        unique: true,
        trim: true,
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        match: [/.+@.+\..+/, 'Must match a valid email address'], 
    },
    thoughts: [{
        type: Schema.Types.ObjectId, 
        ref: Thought, 
    }],
    friends: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    }]
}, 
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});

userSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

const User = model('User', userSchema);

module.exports = User;
