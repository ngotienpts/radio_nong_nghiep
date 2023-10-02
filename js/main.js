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

    // range radio
    var ranges = document.querySelectorAll('input[type="range"]');
    var playsRadio = document.querySelectorAll(".js__playRadio");
    var volumsRadio = document.querySelectorAll(".js__radioVolum");

    // control wrapper
    var controlWrapper = document.querySelector(".js__controlWrapper");
    let isSticky = false;

    // one slide
    var oneSlides = document.querySelectorAll(".js__swiperItemsContainer");

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

            // ranges
            if (ranges) {
                ranges.forEach(function (input) {
                    var valueRange = input.value + "%";
                    var maxRange = input.max + "%";
                    input.style.backgroundSize = `${valueRange} ${maxRange}`;
                    input.oninput = function (e) {
                        var min = e.target.min;
                        var max = e.target.max;
                        var val = e.target.value;
                        e.target.style.backgroundSize =
                            ((val - min) * 100) / (max - min) + "% 100%";
                    };
                });
            }
            if (playsRadio) {
                playsRadio.forEach((playRadio) => {
                    playRadio.onclick = function () {
                        this.classList.toggle("active");
                    };
                });
            }
            if (volumsRadio) {
                volumsRadio.forEach((volumRadio) => {
                    volumRadio.onclick = function () {
                        this.classList.toggle("active");
                    };
                });
            }
        },
        // slider one item
        sliderOneItems: function () {
            oneSlides.forEach((item) => {
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var slider = item.querySelector(".js__swiperItems");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    autoHeight: true,
                    // effect: "fade",
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                });
            });
        },
        // scroll top
        scrollFunc: function () {
            if (backTop) {
                if (window.scrollY > 300) {
                    backTop.style.opacity = 1;
                    backTop.style.visibility = "visible";
                } else {
                    backTop.style.opacity = 0;
                    backTop.style.visibility = "hidden";
                }
            }

            // control wrapper
            if (controlWrapper) {
                var elementPosition = 500;

                if (window.scrollY > elementPosition && !isSticky) {
                    controlWrapper.classList.add("sticky");
                    isSticky = true;
                } else if (window.scrollY <= elementPosition && isSticky) {
                    controlWrapper.classList.remove("sticky");
                    isSticky = false;
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
            // slider one item
            this.sliderOneItems();
        },
    };

    app.start();
});
