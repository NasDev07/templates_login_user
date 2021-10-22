var form = document.getElementById('form');

form.addEventListener('mousemove', (e) => {
    var x = (window.innerWidth / 2 - e.pageX) / 12;
    var y = (window.innerheight / 2 - e.pageY) / 12;

    form.style.transform = 'rotateX(' + x + ' deg) rotateY(' + y + ' deg)';
});

form.addEventListener('mousemove', function() {
    form.style.transform = 'rotateX(0deg) rotateY(0 deg)';
});