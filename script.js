const bannerWidth = 300;
const bannerHeight = 600;

const loopDuration = 15;
const pauseLastLoopAfter = 15;

const loopNumber = 20;

const whiteoutSpeed = 0.5;

const enableTerms = false;

const enableCtaPause = false;
const ctaPauseAfter = 30; // second

const ctaSolid = false;



const preloadImages = ["cta_1.png", "logo.png"];

/*  imagesAll[[],[],[]] (or images[]) posiible parameters filled after the | (example: "bg.jpg|-retina.someClass" or "bgs/bg.jpg|-r" ...)
I   -retina, -r, -retina2, -r2 => make image in half size (divide by 2)
N   -retina15, -r15 => half retina etc... (divide image size by 1.5) => -r05 (divide by 0.5 - make the image twice bigger)
F   -wrapper => create self wrapper for this image/element (check the dev tools, how it looks)
O   .someClass.someAnotherClass => add additional class (check the dev tools, how it looks)
    #differentID => different id than file name
*/
//const imgFolder = "./img/"; // set folder for all imagesAll[[],[],[]] (or images[]) without their own path (own path have more priority) -> (light reaction specs etc...)
const imagesAll = [
    ["sky1.jpg","water.jpg","thunder2.png", "clouds.png|-r082","fogGrad.div","thunder.png", "brighter_sky.png|-r05.brigh"],
    ["copy_1.png|-r099.copyOne", "copy_2.png|-r.zoomIn", "bg.png", "copy_3.png|-r", "copy_4.png|-r", "terms.png|-r099.terms" ]
];


const imagesAllClass = [], imagesAllParent = ["main_bg", ""];


const tl_Frame = [];

tl_Frame[1] = function () {
    var tl = new TimelineMax();

    var f1 = 0.5,
        f2 = 3,
        f3 = 6,
        f4 = 14.5;
    var fadeTime = 0.5,
        zoomTime = 3,
        bgTime = loopDuration - 3;

    // start parameters
    tl.set([copy_1, copy_2, copy_3, copy_4,terms, brighter_sky], { opacity: 0 }, 0);

    // sky blink animation ----------
    let opacity = [0.3, 0.2, 0, 0.2, 0.3, 0.4, 0, 0.35, 0.14, 0, 0, 0.2, 0.3, 0.15, 0, 0.6, 0, 0.1, 0.3, 0];
    let opacity2 = [0, 0, 0, 0.5, 0.45, 0.3, 0.2, 0.1, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0.9, 0.6, 0.4, 0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let opacity3 = [0, 0., 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9, 0.45, 0.3, 0.2, 0.1, 0, 0, 0, 0, 0, 0, 0, 0];
    let intervl = 10, fpi = 50, repeat = loopDuration / intervl
    let intervl2 = 10, fpi2 = 50, repeat2 = loopDuration / intervl2
    let intervl3 = 5, fpi3 = 30, repeat3 = loopDuration / intervl3

    for (let r = 0; r < repeat; r++) {
        for (let i = 0; i < fpi; i++) {
            tl.to([brighter_sky], 0.1, { opacity: opacity[i] }, (i * (intervl / fpi)) + r * intervl);
            
        }
    }

    for (let b = 0; b < repeat2; b++) {
        for (let a = 0; a < fpi2; a++) {
            tl.to(thunder2, 0.1, { opacity: opacity2[a] }, (a * (intervl2 / fpi2)) + b * intervl2);
            
        }
    }
    for (let c = 0; c < repeat3; c++) {
        for (let d = 0; d < fpi3; d++) {
            tl.to(thunder, 0.1, { opacity: opacity3[d] }, (d * (intervl3 / fpi3)) + c * intervl3);
            
        }
    }


    // bg animation ----------
    tl.to(water, bgTime, { x: -300, y: -55, ease: Power0.easeNone }, 0);
    tl.to(clouds, bgTime, { scale: 1.6, ease: Power0.easeNone }, 0);
    tl.to([sky1, fogGrad], bgTime, { x: 0, ease: Power0.easeNone }, 0);
    tl.to(bg, bgTime, { scale: 0.950, ease: Sine.easeOut }, 0);


     // frame 1 ----------
    tl.to(copy_1, fadeTime, { opacity: 1 }, f1 + 0);
    tl.to(copy_1, zoomTime, { scale: 1 }, f1);
    // frame 2 ----------
    tl.to(copy_2, fadeTime, { opacity: 1 }, f2 + fadeTime);
    tl.to(copy_1, fadeTime, { opacity: 0 }, f2 + 0);
	// frame 3 ----------
	tl.to(copy_3, fadeTime, { opacity: 0 }, 5);
	tl.to(copy_4, fadeTime, { opacity: 0 }, 5+fadeTime);
    // frame 4 ----------
    tl.to([copy_1, copy_2, copy_4], fadeTime, { opacity: 0 }, f3);
    tl.to(terms, fadeTime, { opacity: 1 }, f3 + fadeTime);


    tl.add(function () {
        if (loopCount == 2) {
            tl.to(terms, 0.5, { opacity: 0 }, f4);
            tl.to([copy_2, copy_4], 0.5, { opacity: 1 }, f4);
        }
    }, f4);






    return tl;
}





// ============================== clicktag, cta, terms (mouse events) ============================== //

function clicktag_Click(e) {
    if (dcSelect) {
        Enabler.exit("Exit Click");
        //        Enabler.exitOverride("Exit Click", "https://www.google.com");
    } else {
        window.open(window.clickTag);
    }
}

function mouseEnter() {
    var cta_2_bg = document.getElementById("cta_2_bg");
    cta_2_bg.style.opacity = 1;

    if (!ctaSolid) {
        var cta_1 = document.getElementById("cta_1");
        cta_1.style.opacity = 0;

        var cta_2 = document.getElementById("cta_2");
        cta_2.style.opacity = 1;
    }
}

function mouseLeave() {
    var cta_2_bg = document.getElementById("cta_2_bg");
    cta_2_bg.style.opacity = 0;

    if (!ctaSolid) {
        var cta_1 = document.getElementById("cta_1");
        cta_1.style.opacity = 1;

        var cta_2 = document.getElementById("cta_2");
        cta_2.style.opacity = 0;
    }
}

function termsEnter() {
    Enabler.counter("terms enter");
    terms_overlay.style.animation = undefined;
    terms_overlay.style.animation = "terms_overlay_animation_over 0.3s 0s linear forwards";

    mouseEnter(); // cta on state
    animationsPause();
}

function termsLeave() {
    Enabler.counter("terms leave");
    terms_overlay.style.animation = undefined;
    terms_overlay.style.animation = "terms_overlay_animation_out 0.3s 0s linear forwards";

    if (!stopAnimations) { animationsPlay() }
}

// ============================== others ============================== //










// ============================== Do not edit ============================== //

var mTL, content, loopCount = 1, stopAnimations = false;

// --- preloading images
if (enableTerms) preloadImages.push("terms_overlay.png");
if (!ctaSolid) preloadImages.push("cta_2.png");




// -------------------- special functions -------------------- //

function ctaInit() {
    const cta_all = document.getElementById("cta_all");
    const cta_1 = document.getElementById("cta_1");

    cta_1.src = "cta_1.png";
    cta_1.onload = function () {
        cta_all.style.height = cta_1.naturalHeight / 2 + "px";
        cta_all.style.width = cta_1.naturalWidth / 2 + "px";
    }

    if (!ctaSolid) { //cta text 2
        const cta_2 = document.createElement("img");
        cta_2.setAttribute("src", "cta_2.png");
        cta_2.setAttribute("id", "cta_2");
        cta_2.setAttribute("class", "cta_position");
        cta_all.appendChild(cta_2);
    }
}

function ctaPause() {
    if (enableCtaPause) {
        setTimeout(function () {
            mouseLeave();
            clicktag.removeEventListener("mouseover", mouseEnter);
            clicktag.removeEventListener("mouseout", mouseLeave);
        }, ctaPauseAfter * 1000);
    }
}



// -------------------- (05) - main animation -------------------- //

function startMainTimeLine() {
    for (var i = 1, l = tl_Frame.length; i < l; i++) {
        mTL.add(tl_Frame[i]());
        stopwatch.start();
    }

    mTL.to(whiteout, whiteoutSpeed, { opacity: 0, onComplete: stopWhiteout }, 0);
    mTL.to(whiteout, whiteoutSpeed, { opacity: 1 }, loopDuration - whiteoutSpeed);

    mTL.set({}, { onComplete: pauseMainTimeLine }, pauseLastLoopAfter);
    mTL.set({}, { onComplete: resetMainTimeLine }, loopDuration);

    // --- new loop terms bugFix --- //
    mTL.add(function () { if (enableTerms) { terms_btn.style.pointerEvents = "auto" } }, 0);
    mTL.add(function () { if (loopNumber != loopCount && enableTerms) { terms_btn.style.pointerEvents = "none" } }, loopDuration - 0.3);
}

function stopWhiteout() { if (loopCount == loopNumber) { TweenMax.killTweensOf(whiteout) } }
function pauseMainTimeLine() { if (loopCount == loopNumber) { stopAnimations = true; animationsPause(); stopwatch.stop(); console.log("animation stop"); } }
function resetMainTimeLine() { if (loopCount != loopNumber) { loopCount++; mTL.restart(); } }
function animationsPause() { mTL.pause() }
function animationsPlay() { mTL.play() }



// -------------------- (04) - init -------------------- //

function init() {
    if (enableTerms) {
        terms_overlay.style.backgroundImage = "url(terms_overlay.png)";
        terms_btn.style.pointerEvents = "auto";
    }

    content.style.opacity = 1;
    startMainTimeLine();
}

function initStage() {
    init();
}

function preInit() {
    content = document.getElementById("content"); // firefox correction

    clicktag.addEventListener("mouseover", mouseEnter);
    clicktag.addEventListener("mouseout", mouseLeave);

    TweenMax.set(content, { width: bannerWidth, height: bannerHeight });
    TweenMax.set(".ad_size", { width: bannerWidth, height: bannerHeight });

    mTL = new TimelineMax();

    ctaPause(); ctaInit();
    initStage();
}

// -------------------- (03) - images/styles load -------------------- //

function preloadingStagePoint_1() {
    createImages(function () {
        preLoadImages(preInit);
    });
}

function loadStyles() {
    var extCSS = document.createElement("link");
    extCSS.setAttribute("rel", "stylesheet");
    extCSS.setAttribute("type", "text/css");
    extCSS.setAttribute("href", "style.css");
    document.getElementsByTagName("head")[0].appendChild(extCSS);

    extCSS.onerror = preloadingStagePoint_1; extCSS.onload = preloadingStagePoint_1; // callback
}



function preloadingStage() {
    loadStyles();
}

// -------------------- (02) - DC/ST/polite load -------------------- //

function stLoad() {
    console.log("ready-Standalone");

    if (politeLoad) {
        if (document.readyState === "complete") {
            preloadingStage();
        } else {
            console.log("polite load - waiting for page load");
            setTimeout(function () {
                stLoad();
            }, 200);
        }
    } else {
        preloadingStage();
    }
}

function dcLoad() {
    if (Enabler.isInitialized()) {
        enablerInitHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
    }
}

function enablerInitHandler() {
    console.log("ready-DoubleClick");

    if (politeLoad) {
        if (Enabler.isPageLoaded()) {
            pageLoadedHandler();
        } else {
            Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
        }
    } else {
        preloadingStage();
    }
}

function pageLoadedHandler() {
    console.log("ready-polite");

    preloadingStage();
}





// ============================== modules and functions ============================== //

// ---------- preloadImages min v1.0 ---------- //
function preLoadImages(e) { if ("undefined" != typeof preloadImages) { var o = preloadImages.length; if (o) for (var a = [], n = 0, r = o; n < r; n++)a[n] = new Image, a[n].src = preloadImages[n], a[n].onerror = function () { o-- }, a[n].onload = function () { --o || e() }; else e() } else e() }

// ---------- createImages min - v1.0.1 ---------- //
function createImages(e, t) { function i(e, t) { t = document.getElementById(t); if (y) { var i = document.createElement("div"); i.setAttribute("id", e.id + "_wrap"), i.appendChild(e), t.appendChild(i) } else t.appendChild(e) } function n(e) { e = document.getElementById(e); var t = document.createElement(h); if (t.setAttribute("id", p), A && t.setAttribute("class", A), y) { var i = document.createElement("div"); i.setAttribute("id", p + "_wrap"), i.appendChild(t), e.appendChild(i) } else e.appendChild(t) } function a(e, t) { return e.reduce(function (e, i) { return e || (e = ""), e + (t.test(i) ? " " + /\w+/.exec(i)[0] : "") }, 0) } function l(e, t, i) { if (/\d/.test(t)) var n = /\d/.exec(t)[0], a = /\d+/.exec(t)[0].substring(1), l = a ? n + "." + a : n; else l = 2; document.getElementById(e).style.width = i / l + "px" } function s(e) { w = !0; var t = m[0].split(/\/(?=[^\/]+$)/); p = t[1], u = e } function r() { var e = /(?=[^\|]+$).*/.exec(m[1])[0]; e = e.match(/(\.\w+)|(\#\w+)|(\-\w+)/g), /\#\w+/.test(e) && (p = a(e, /\#/), p = /\w+/.exec(p)[0]), /\.\w+/.test(e) && function (e) { A = a(e, /\./), g && (f = (f += A).replace(/^\s/, "")), A = A.replace(/^\s/, "") }(e), /\-wrapper/.test(e) && (y = !0), /\-retina/.test(e) ? v = /\-retina\d*/.exec(e)[0] : /\-r/.test(e) && (v = /\-r\d*/.exec(e)[0]), u = w ? m[0] + "." + h : imgFolder + m[0] + "." + h } function d(e, t, a, d) { f = t; var o = e.length; if (o) for (var C = 0, x = o; C < x; C++) { if (m = e[C].split(/\.(.*)/), g = !!/^(jpg|png)/.test(m[1]), h = /^\w+/.exec(m[1])[0], /\//.test(m[0]) ? s(e[C]) : (p = m[0], u = d + e[C]), /\|/.test(m[1]) && r(), g) { var b = new Image; b.src = u, b.id = p, b.className = f, b.retinaSet = v, b.ii = e[C], i(b, a), b.onerror = function () { console.warn("input: " + this.ii + "\nid: " + this.id + " -> image with that id not found"), document.getElementById(this.id).style.display = "none", --o || c() }, b.onload = function () { this.retinaSet && l(this.id, this.retinaSet, this.naturalWidth), --o || c() } } else n(a), --o || c(); A = !1, f = t, w = !1, v = !1, y = !1 } else c() } function c() { o && --o || t() } var o; arguments.length < 2 && (t = arguments[0], e = !0), t && t instanceof Function || console.error("createImages(imgFolder_forAll, callback)\n-> At least a callback (one input parameter) must be specified."); var m, g, u, p, f, h, A = !1, w = !1, v = !1, y = !1; !function (e) { "undefined" == typeof imgFolder && (imgFolder = ""), "undefined" != typeof images && Array.isArray(images) && (imagesAll = [], imagesAllClass = [], imagesAllParent = [], imagesAll[0] = images); for (var t = 0, i = o = imagesAll.length; t < i; t++)imagesAllClass[t] || (imagesAllClass[t] = "image"), imagesAllParent[t] || (imagesAllParent[t] = "main"), t && !e && (imgFolder = ""), d(imagesAll[t], imagesAllClass[t], imagesAllParent[t], imgFolder) }(e) }
