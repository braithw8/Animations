let animation1;
let animation2;let animation3;
let animation4;

let counter = 0.11111111111;



window.onload = function() {

    
    animation1 = anime({
        targets: '.square',

        rotate: ['0deg', '180deg'],
//                 scale: [function(target, index) {
//             return .5 + (index * .02);
//         }
//         , function(target, index) {
//             return .5 + (index * .03);
//         }
//         ],
       
        duration: function(target, index) {
            // 100ms delay multiplied by every div index, in ascending order
            return index * 43 * Math.PI;
        },
        delay: function(target, index) {
            // 100ms delay multiplied by every div index, in ascending order
            return index * 97 + counter;
        },
        elasticity: function(target, index, totalTargets) {
            // Elasticity multiplied by every div index, in descending order
            return 200 + ((totalTargets - index) * 211);
        },

        direction: 'forward',
        loop: true
    });


    animation2 = anime({
        targets: '.line',
        //opacity: 0,


scale: [1 , 4 
        ],
        rotate: [function(target, index) {
            return index * 27;
        }
        , function(target, index) {
            return index * 29;
        }
        ],

        duration: function(target, index) {
            // 100ms delay multiplied by every div index, in ascending order
            return index * 88 * Math.PI;
        },
        delay: function(target, index) {
            // 100ms delay multiplied by every div index, in ascending order
            return index * 89;
        },
        elasticity: function(target, index, totalTargets) {
            // Elasticity multiplied by every div index, in descending order
            return 134 + ((totalTargets - index) * 216);
        },
        direction: 'alternate',
        loop: true
    });
    animation3 = anime({
        targets: '.line',
        //opacity: 0,


        zIndex: [0, 16],
        duration: function(target, index) {
            // 100ms delay multiplied by every div index, in ascending order
            return index * 104 * Math.PI;
        },
        delay: function(target, index) {
            // 100ms delay multiplied by every div index, in ascending order
            return index * 20 * Math.PI;
        },
        elasticity: function(target, index, totalTargets) {
            // Elasticity multiplied by every div index, in descending order
            return 200 + ((totalTargets - index) * 213);
        },
        direction: 'alternate',
        loop: true
    });

    animation4 = anime({
        targets: '.box',
        //opacity: 0,


        opacity: [0, 1],
        //filter: ["hue-rotate(0turn)", "hue-rotate(1turn)"],
        duration: function(target, index) {
            // 100ms delay multiplied by every div index, in ascending order
            return index * 111 * Math.PI;
        },
        delay: function(target, index) {
            // 100ms delay multiplied by every div index, in ascending order
            return index * 22;
        },
        elasticity: function(target, index, totalTargets) {
            // Elasticity multiplied by every div index, in descending order
            return 200 + ((totalTargets - index) * 40 * Math.PI);
        },
        direction: 'alternate',
        loop: true
    });
    animation5 = anime({
        targets: 'body',
        //opacity: 0,


        //opacity: [0, 1],
        filter: ["hue-rotate(0turn)", "hue-rotate(1turn)"],
        duration: 4000,
        delay:0,
       
        loop: true
    });

}
;
