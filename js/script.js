/* Управление модальными окнами */
(function () {
  'use strict';

  var modalFeedback, modalFeedbackOpen, modalFeedbackClose, modalMap, modalMapOpen, modalMapClose, modalWrap;

  modalFeedback = document.querySelectorAll(".js-modalFeedback")[0];
  modalFeedbackOpen = document.querySelectorAll(".js-modalFeedbackOpen")[0];
  modalFeedbackClose = document.querySelectorAll(".js-modalFeedbackClose")[0];
  modalMap = document.querySelectorAll(".js-modalMap")[0];
  modalMapOpen = document.querySelectorAll(".js-modalMapOpen")[0];
  modalMapClose = document.querySelectorAll(".js-modalMapClose")[0];
  modalWrap = document.querySelectorAll(".js-modalWrap")[0];

  modalFeedbackOpen.addEventListener("click", function (event) {
    event.preventDefault();
    modalWrap.style.display = "block";
    modalFeedback.style.display = "block";
    modalFeedback.querySelectorAll("[name]")[0].focus();
  }, false);

  modalFeedbackClose.addEventListener("click", function (event) {
    event.preventDefault();
    modalFeedback.removeAttribute("style");
    modalWrap.removeAttribute("style");
  }, false);

  modalMapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    modalWrap.style.display = "block";
    modalMap.style.display = "block";
    modalMapClose.focus();
  }, false);

  modalMapClose.addEventListener("click", function (event) {
    event.preventDefault();
    modalMap.removeAttribute("style");
    modalWrap.removeAttribute("style");
  }, false);

  modalWrap.addEventListener("click", function (event) {
    event.preventDefault();
    modalMap.removeAttribute("style");
    modalFeedback.removeAttribute("style");
    modalWrap.removeAttribute("style");
  }, false);

}());

/* Сохранение данных введенных в поля формы обратной связи в LocalStorage*/

(function () {
  'use strict';

  var elements, i, length;

  function setElement(element) {
    var name = element.getAttribute("name");

    element.value = localStorage.getItem(name) || "";

    element.onkeyup = function () {
      localStorage.setItem(name, element.value);
    };
  }

  if (window.localStorage) {
    elements = document.querySelectorAll("[name]");
    for (i = 0, length = elements.length; i < length; i = i + 1) {
      setElement(elements[i]);
    }
  }

}());
