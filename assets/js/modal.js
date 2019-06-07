// JavaScript by Jan Andreassen 1071790 | MMDA0918 - Gruppe 105


(function iife() {
    "use strict";
    function closestEl(el, selector) {
        var doc = el.document || el.ownerDocument;
        var matches = doc.querySelectorAll(selector);
        var i;
        while (el) {
            i = matches.length - 1;
            while (i >= 0) {
                if (matches.item(i) === el) {
                    return el;
                }
                i -= 1;
            }
            el = el.parentElement;
        }
        return el;
    }
    var modalBtns = document.querySelectorAll(".button");
    modalBtns.forEach(function addBtnClickEvent(btn) {
        btn.onclick = function showModal() {
            var modal = btn.getAttribute("data-modal");
            document.getElementById(modal).style.display = "block";
        };
    });

    var closeBtns = document.querySelectorAll(".close");
    closeBtns.forEach(function addCloseClickEvent(btn) {
        btn.onclick = function closeModal() {
            var modal = closestEl(btn, ".modal");
            modal.style.display = "none";
        };
    });

    window.onclick = function closeOnClick(event) {
        if (event.target.className === "modal") {
            event.target.style.display = "none";
        }
    };
}());