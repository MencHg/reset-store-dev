(function () {
    window.onload = () => {
        let pageWidth, bodyFontSize;
        function setRem() {
            pageWidth = document.documentElement.getBoundingClientRect().width,
                bodyFontSize = pageWidth / 3.75 + 'px';
            document.documentElement.style.fontSize = bodyFontSize;
            document.body.style.fontSize = '16px';
            window.onresize = () => {
                setRem()
            }
        }
        setRem()
    }
}());