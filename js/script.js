/* Управление модальными окнами */
(function () {
  'use strict';

  var modalFeedback, modalFeedbackOpen, modalFeedbackClose, modalMap, modalMapOpen, modalMapClose, modalWrap;

  modalFeedback = document.querySelector(".js-modalFeedback");
  modalFeedbackOpen = document.querySelector(".js-modalFeedbackOpen");
  modalFeedbackClose = document.querySelector(".js-modalFeedbackClose");
  modalMap = document.querySelector(".js-modalMap");
  modalMapOpen = document.querySelector(".js-modalMapOpen");
  modalMapClose = document.querySelector(".js-modalMapClose");
  modalWrap = document.querySelector(".js-modalWrap");

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

    element.addEventListener("keyup", function (event) {
      event.preventDefault();
      localStorage.setItem(name, element.value);
    }, false);

  }

  if (window.localStorage) {
    elements = document.querySelectorAll("[name]");
    for (i = 0, length = elements.length; i < length; i = i + 1) {
      setElement(elements[i]);
    }
  }

}());
