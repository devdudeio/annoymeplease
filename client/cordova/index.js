Template.cordovaIndex.helpers({
    totalClicks: function () {
        Session.set('totalClicks', Clicks.find().count());
        return Session.get('totalClicks');
    },
    newclicks: function () {
        return Session.get('newClicks');
    },
    momentFromNow: function () {
        if (moment(Session.get('last')).fromNow() == "in a few seconds") {
            return "a few seconds ago";
        } else {
            return moment(Session.get('last')).fromNow();
        }
    }
});

Template.cordovaIndex.onRendered(function () {
    Clicks.find({createdAt: {$gt: Date.now()}}).observeChanges({
        added: function (id, doc) {
            Session.set('last', doc.createdAt);
            Session.set('newClicks', Session.get('newClicks') + 1);
            navigator.vibrate(500);
        }
    });


    //Update momentjs every 60 sec
    setInterval(function () {
        Session.set("last", Session.get('last'))
    }, 100);

});



