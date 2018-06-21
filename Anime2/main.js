let animation1;
let animation2;
let animation3;
let animation4;
let animation5;

window.onload = function() {

    animation1 = anime({
        targets: '.square',
        rotate: ['0deg', '180deg'],
        duration: function(target, index) {
            // duration multiplied by every div index, in ascending order
            return index * 66 * Math.PI;
        },
        delay: function(target, index) {
            return index * 97;
        },
        elasticity: function(target, index, totalTargets) {
            // Elasticity multiplied by every div index, in descending order
            return 200 + ((totalTargets - index) * 211);
        },
        direction: 'alternate',
        loop: true
    });

    animation2 = anime({
        targets: '.line',
        scale: [1, 4],
        rotate: ['1turn', '0turn'],
        duration: function(target, index) {
            return index * 190 * Math.PI;
        },
        direction: 'alternate',
        loop: true
    });

    animation3 = anime({
        targets: '.line',
        zIndex: [0, 16],
        duration: function(target, index) {
            return index * 104 * Math.PI;
        },
        delay: function(target, index) {
            return index * 20 * Math.PI;
        },
        elasticity: function(target, index, totalTargets) {
            return 200 + ((totalTargets - index) * 213);
        },
        direction: 'alternate',
        loop: true
    });

    animation4 = anime({
        targets: '.box',
        rotate: [function(target, index) {
            return index * 27;
        }
        , function(target, index) {
            return index * 29;
        }
        ],

        opacity: [0, 1],
        duration: function(target, index) {
            return index * 111 * Math.PI;
        },
        delay: function(target, index) {
            return index * 22;
        },
        elasticity: function(target, index, totalTargets) {
            return 200 + ((totalTargets - index) * 40 * Math.PI);
        },
        direction: 'alternate',
        loop: true
    });

    animation5 = anime({
        targets: 'body',
        filter: ["blur(100px)", "blur(20px)"],
        duration: 10000,
        direction: 'alternate',
        loop: true,
        easing: 'linear'
    });
}
;
