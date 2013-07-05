var Qstart = require('qstart'),
    Zanimo = require('zanimo'),
    Qimage = require('qimage');

Qstart()
    .then(function (doc) {
        return Qimage("http://lorempixel.com/186/125/?t=" + Math.ceil(Math.random()*100000))
                .then(function (img) { doc.body.appendChild(img); return img; });
    })
    .then(Zanimo.transformf("translate3d(100px, 100px, 0)"))
    .then(Zanimo.transitionf("opacity", 1, 500))
    .then(Zanimo.transitionf("transform", "translate3d(100px, 200px, 0) rotate(580deg)", 500));
