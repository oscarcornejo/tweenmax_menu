var abrir = true;

var tl = new TimelineMax({ paused: true, /* repeat: -1, yoyo: true */ });


tl.to('.tabs', 1, { left: 0 });
tl.staggerFromTo('.tabs li', 1, { x: -15, opacity: 0, /* scale: 0 */ }, { x: 0, opacity: 1, /*  scale: 1 */ }, 0.15);


function abrirModal() {

    if (abrir === true) {
        console.log('ABRIR', abrir);
        // TweenMax.to('.tabs', 0.5, {
        //     left: 0
        // });
        // TweenMax.staggerFromTo(".tabs li", 0.5, {
        //     x: -50
        // }, {
        //     x: 0
        // }, 0.2);
        tl.play();
        abrir = false;
    } else if (abrir === false) {
        console.log('Cerrar', abrir);
        // TweenMax.to('.tabs', 0.5, {
        //     left: '-300px'
        // });
        // TweenMax.staggerTo(".tabs li", 0.5, {
        //     x: -50
        // }, 0.2);
        tl.reverse();
        abrir = true;
    }
}