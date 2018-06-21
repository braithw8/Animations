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
            return index * 66 * Math.PI;
        },
        delay: function(target, index) {
            // 100ms delay multiplied by every div index, in ascending order
            return index * 97 + counter;
        },
        elasticity: function(target, index, totalTargets) {
            // Elasticity multiplied by every div index, in descending order
            return 200 + ((totalTargets - index) * 211);
        },

        //direction: 'alternate',
        loop: true
    });


    animation2 = anime({
        targets: '.line',
        //opacity: 0,


scale: [1 , 4 
        ],
        rotate: ['1turn', '0turn'],


        duration: function(target, index) {
            // 100ms delay multiplied by every div index, in ascending order
            return index * 190 * Math.PI;
        },


        //direction: 'alternate',
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
        //direction: 'alternate',
        loop: true
    });

    animation4 = anime({
        targets: '.box',
        //opacity: 0,
        rotate: [function(target, index) {
            return index * 27;
        }
        , function(target, index) {
            return index * 29;
        }
        ],

        opacity: [0, 1],
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
        //direction: 'alternate',
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
