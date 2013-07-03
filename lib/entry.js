var Z = require('Zanimo'),
    el = window.document.createElement('div');

el.style.width = "100px";
el.style.height = "100px";
el.style.backgroundColor = 'red';
el.style.position = "relative";
el.style.opacity = 0;

window.document.body.appendChild(el);

Z(el).then(Z.transformf("translate3d(100px, 100px, 0)"))
    .then(Z.transitionf("opacity", 1, 500))
    .then(Z.transitionf("transform", "translate3d(100px, 200px, 0) rotate(580deg)", 500));
