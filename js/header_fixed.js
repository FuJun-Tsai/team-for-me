window.onscroll = function() {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth > 0) {
        if (docScrollTop > 100) {
            document.querySelector("header").classList.add("fixed")
        } else {
            document.querySelector("header").classList.remove("fixed")
        }
    }
}