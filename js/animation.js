function animation() {
    console.log('called');
    var tl = anime.timeline({
        easing: 'linear',
        duration: 10000,
        // direction: 'alternate',
        // complete: function(){
        //      animation2()
        // },
        // loop: true,
        delay: function (el, i) { return i * 500; },
    });

    tl
        .add({
            targets: '.top',
            // direction: 'alternate',
            translateY: -250,
        }, '4000')
        .add({
            targets: '.one',
            // direction: 'alternate',
            translateY: -250,
        }, '4800')
        .add({
            targets: '.two',
            translateY: -350,
            // direction: 'alternate',
        }, '6000')
        .add({
            targets: '.box-2',
            // direction: 'alternate',
            translateY: -400,
        }, '7000')
        .add({
            targets: '.box-3',
            // direction: 'alternate',
            translateY: -400,
        }, '8000');
}
function animation2() {
    console.log('called');
    var tl = anime.timeline({
        easing: 'linear',
        duration: 10000,
        // direction: 'alternate',
        // complete: animation,
        // loop: true,
        delay: function (el, i) { return i * 500; },
    });

    tl
        .add({
            targets: '.box-3',
            // direction: 'alternate',
            translateY: 100,
        })
        .add({
            targets: '.box-2',
            // direction: 'alternate',
            translateY: 300,
        })
        .add({
            targets: '.two',
            translateY: 250,
            // direction: 'alternate',
        })
        .add({
            targets: '.one',
            // direction: 'alternate',
            translateY: 250,
        })
        .add({
            targets: '.top',
            // direction: 'alternate',
            translateY: 250,
        })



        ;
}

setTimeout(() => {
    animation();
}, 1500);
// setInterval(() => {
//     animation();
// }, 12000);

function sleep() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

setInterval(async () => {
    console.log('reached');
    document.querySelector('.animations').style.opacity="0";
    await sleep()
    document.querySelector('.box-3').style.transform = "translateY(100px)";
    document.querySelector('.box-2').style.transform = "translateY(100px)";
    document.querySelector('.two').style.transform = "translateY(0px)";
    document.querySelector('.one').style.transform = "translateY(0px)";
    document.querySelector('.top').style.transform = "translateY(0px)";
    document.querySelector('.animations').style.opacity="1";

    animation();
}, 21000);

var t2 = anime.timeline({
    duration: 800,
    loop: true,
    autoplay: true,
});

t2.add({
    targets: document.querySelectorAll('.box-2-lines-blue'),
    direction: 'alternate',
    width: 300,
})
    .add({
        targets: document.querySelector('.line-1'),

        direction: 'alternate',
        width: '90%',
    })
    .add({
        targets: document.querySelector('.line-2'),
        direction: 'alternate',
        width: '70%'
    })
    .add({
        targets: document.querySelector('.line-3'),

        direction: 'alternate',
        width: '90%',
    })
    .add({
        targets: document.querySelector('.line-4'),

        direction: 'alternate',
        width: '90%',
    }, '+=100')
    .add({
        targets: document.querySelector('.line-6'),

        direction: 'alternate',
        width: '90%',
    }, '+=100')
    .add({
        targets: document.querySelector('.line-7'),

        direction: 'alternate',
        width: '90%',
    }, '+=100')
    .add({
        targets: document.querySelector('.line-8'),

        direction: 'alternate',
        width: '50%',
    }, '+=100')
    .add({
        targets: document.querySelector('.line-9'),

        direction: 'alternate',
        width: '90%',
    }, '+=100')
    .add({
        targets: document.querySelector('.line-10'),
        direction: 'alternate',
        width: '90%',
    }, '+=100')
    .add({
        targets: document.querySelector('.line-11'),
        direction: 'alternate',
        width: '90%',
    }, '+=100');

var t3 = anime.timeline({
    duration: 800,
    loop: true,
    autoplay: true,
});

t3.add({
    targets: document.querySelector('.container .container-1'),
    direction: 'alternate',
    width: '33%'
})
    .add({
        targets: document.querySelector('.container .container-2'),
        direction: 'alternate',
        width: '33%'
    })
    .add({
        targets: document.querySelector('.container .container-3'),
        direction: 'alternate',
        width: '33%'
    });