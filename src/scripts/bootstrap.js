(function (app) {
    function bootstrap() {
        setViewport();
        app.header.init();
    }

    function setViewport() {
        var mvp = document.getElementById('viewport');

        if (screen.width < 640) {
            mvp.setAttribute('content', 'user-scalable=no, width=640');
        } else {
            mvp.setAttribute('content', 'user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1');
        }
    }

    window.addEventListener('orientationchange', setViewport);
    window.onload = bootstrap;
})(app);
