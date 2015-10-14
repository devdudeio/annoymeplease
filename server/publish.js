Meteor.publish('clicks', function () {
    return Clicks.find();
});


//db.clicks.createIndex({createdAt: -1});
