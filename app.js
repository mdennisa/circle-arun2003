var controller = new ScrollMagic.Controller()
// dom loaded
jQuery(function($) {

    var scene_1 = new ScrollMagic.Scene({
        triggerHook: 'onLeave',
        triggerElement: '#header',
        duration: '200%',
    })
    .setPin('#header', {pushFollowers: false})
    .addTo(controller)

    var scene_2 = new ScrollMagic.Scene({
        triggerHook: 'onLeave',
        triggerElement: '#splash',
        duration: '200%',
    })
    .setPin('#splash', {pushFollowers: false})
    .addTo(controller)

    var scene_3 = new ScrollMagic.Scene({
        triggerHook: 'onLeave',
        triggerElement: '#search',
        duration: '200%',
    })
    .setPin('#search', {pushFollowers: false})
    .addTo(controller)

})