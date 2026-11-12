/* Juliana Maria de Lima — interações */
(function () {
  "use strict";
  var WHATSAPP = "5511944560194", root = document.documentElement;
  requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add("ready"); }); });
  document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(a.getAttribute("data-wa")); });
  var top = document.getElementById("top"), wa = document.querySelector(".wa");
  function onScroll() { var y = window.scrollY; top.classList.toggle("is-solid", y > 30); wa.classList.toggle("is-visible", y > window.innerHeight * 0.7); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add("is-in"); }); }
  var y = document.getElementById("y"); if (y) y.textContent = new Date().getFullYear();
})();
