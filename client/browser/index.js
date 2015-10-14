Template.browserIndex.events({
    'click button': function () {
        $('button').html("do'h!");

        function testAnim(x) {
            $('i').addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $('i').removeClass(x+ ' animated');
            });
        }

        testAnim('wobble');

        Clicks.insert({createdAt: Date.now()}, function (err) {
            if (err) {
                console.log('click save failed');
            } else {
                console.log('click saved');
            }
        });
    },
    'mouseover button': function(){
        $('button').html("naah!");
    }
});


Template.browserIndex.helpers({
    totalClicks: function () {
        Session.set('totalClicks', Clicks.find().count());
        return Session.get('totalClicks');
    }
});


