const { Schema, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    username: {
        type: String, 
        required: true
    },
    reactionBody: { 
        type: String, 
        required: true,
        maxLength: 280,
    },
    createdAt: { 
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    }

});

module.exports = reactionSchema;
