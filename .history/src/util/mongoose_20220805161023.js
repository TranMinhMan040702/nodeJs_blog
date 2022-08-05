module.exports = {
    mutilpleMongooseObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.ToObject());
    },
    mongooseObject: function (mongoose) {
        return mongoose ? mongoose.ToObject() : mongoose;
    },
};
