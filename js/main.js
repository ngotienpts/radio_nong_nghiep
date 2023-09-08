document.addEventListener("DOMContentLoaded", function () {
    // back top
    var backTop = document.querySelector("#back-top");

    // show menu pc
    var menuPc = document.querySelector(".js__parrentMenu");

    // show search pc
    var searchPc = document.querySelector(".js__searchPc");

    // show sub menu
    var dropdownSubMenu = document.querySelectorAll(".js__dropDown");
    var subMenu = document.querySelector(".js__clickShowMenuMb");

    // search mb
    var searchMbs = document.querySelectorAll(".js__searchMb");

    // navbar mb
    var navbarMb = document.querySelector(".js__navbarMenuMb");

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // when click back top
            if (backTop) {
                backTop.onclick = function () {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                };
            }

            // show menu pc
            if (menuPc) {
                var showMenuPc = menuPc.querySelector(".js__showMenuPc");
                showMenuPc.onclick = function () {
                    menuPc.classList.toggle("active");
                };
            }
            // show search pc
            if (searchPc) {
                var showSearchPc = searchPc.querySelector(".js__showSearchPc");
                var fromSearchPc = searchPc.querySelector(".js__searchFormPc");
                showSearchPc.onclick = function () {
                    fromSearchPc.classList.toggle("active");
                    this.classList.toggle("active");
                };
            }

            // show sub menu
            if (subMenu) {
                var closeSubMenu = document.querySelector(".js__closeSubMenu");
                var overlay = document.querySelector(".js__overlay");
                var parentBox = subMenu.parentElement;

                subMenu.onclick = function () {
                    this.parentElement.classList.add("active");
                    document.querySelector("body").classList.add("hidden");
                };
                closeSubMenu.onclick = function () {
                    parentBox.classList.remove("active");
                    document.querySelector("body").classList.remove("hidden");
                };
                overlay.onclick = function () {
                    parentBox.classList.remove("active");
                    document.querySelector("body").classList.remove("hidden");
                };
            }

            // dropdown sub menu
            dropdownSubMenu &&
                dropdownSubMenu.forEach((item) => {
                    var parent = item.parentElement;
                    var nextEle = parent.querySelector(".js__listSubMenu");
                    item.onclick = function () {
                        parent.classList.toggle("active");
                        if (nextEle.style.maxHeight) {
                            nextEle.style.maxHeight = null;
                        } else {
                            nextEle.style.maxHeight =
                                nextEle.scrollHeight + "px";
                        }
                    };
                });

            // search mb
            if (searchMbs) {
                searchMbs.forEach((searchMb) => {
                    var closeSearchMb =
                        document.querySelector(".js__closeSearchMb");
                    var formSearchMb =
                        document.querySelector(".js__formSearchMb");
                    searchMb.onclick = function () {
                        formSearchMb.classList.add("active");
                    };
                    closeSearchMb.onclick = function () {
                        formSearchMb.classList.remove("active");
                    };
                });
            }

            // navbar mb
            if (navbarMb) {
                const container = navbarMb.querySelector(".js__navbarMb");
                const scrollBtn = navbarMb.querySelector(".js__navbarIcon");

                let scrollAmount = 0;
                let scrollPosition = 0;

                scrollBtn.addEventListener("click", function () {
                    const scrollDistance = 100;
                    scrollAmount = scrollPosition + scrollDistance;
                    scrollAmount = Math.min(
                        scrollAmount,
                        container.scrollWidth - container.clientWidth
                    );
                    container.scrollTo({
                        left: scrollAmount,
                        behavior: "smooth",
                    });
                    scrollPosition = scrollAmount;
                });
            }
        },

        // scroll top
        scrollFunc: function () {
            if (backTop) {
                if (
                    document.body.scrollTop > 300 ||
                    document.documentElement.scrollTop > 300
                ) {
                    backTop.style.opacity = 1;
                    backTop.style.visibility = "visible";
                } else {
                    backTop.style.opacity = 0;
                    backTop.style.visibility = "hidden";
                }
            }
        },

        // window scroll
        windowScroll: function () {
            var _this = this;
            window.onscroll = function () {
                // scroll top
                _this.scrollFunc();
            };
        },
        // khoi tao function start
        start: function () {
            // su ly cac su kien
            this.handleEvent();
            // window scroll
            this.windowScroll();
        },
    };

    app.start();
});
