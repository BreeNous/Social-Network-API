const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new Schema({

    username: { 
        type: String, 
        required: true
    },
    thoughtText: [{ 
        type: String, 
        required: true,
        minLength: 1,
        maxLength: 280
    }],
    createdAt: { 
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    __v: { 
        type: Number, 
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});

thoughtSchema.virtual('reactCount').get(function() {
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
