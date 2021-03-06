(function () {
  "use strict";

  var modalFeedback, modalFeedbackOpen, modalFeedbackClose, modalMap, modalMapOpen, modalMapClose, modalWrap, inputs;

  modalFeedback = document.querySelector(".js-modalFeedback");
  modalFeedbackOpen = document.querySelector(".js-modalFeedbackOpen");
  modalFeedbackClose = document.querySelector(".js-modalFeedbackClose");
  modalMap = document.querySelector(".js-modalMap");
  modalMapOpen = document.querySelector(".js-modalMapOpen");
  modalMapClose = document.querySelector(".js-modalMapClose");
  modalWrap = document.querySelector(".js-modalWrap");
  inputs = modalFeedback.querySelectorAll("[name]");

  modalFeedbackOpen.addEventListener("click", function (event) {
    event.preventDefault();
    modalWrap.classList.add("wrap-show");
    modalFeedback.classList.add("modal-show");
    inputs[0].focus();
  }, false);

  modalFeedbackClose.addEventListener("click", function (event) {
    event.preventDefault();
    modalFeedback.classList.remove("modal-show");
    modalFeedback.classList.remove("modal-error");
    modalWrap.classList.remove("wrap-show");
  }, false);

  modalMapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    modalWrap.classList.add("wrap-show");
    modalMap.classList.add("modal-show");
    modalMapClose.focus();
  }, false);

  modalMapClose.addEventListener("click", function (event) {
    event.preventDefault();
    modalMap.classList.remove("modal-show");
    modalMap.classList.remove("modal-error");
    modalWrap.classList.remove("wrap-show");
  }, false);

  modalWrap.addEventListener("click", function (event) {
    event.preventDefault();
    modalMap.classList.remove("modal-show");
    modalMap.classList.remove("modal-error");
    modalFeedback.classList.remove("modal-show");
    modalFeedback.classList.remove("modal-error");
    modalWrap.classList.remove("wrap-show");
  }, false);

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      if (modalFeedback.classList.contains("modal-show") || modalMap.classList.contains("modal-show")) {
        modalMap.classList.remove("modal-show");
        modalMap.classList.remove("modal-error");
        modalFeedback.classList.remove("modal-show");
        modalFeedback.classList.remove("modal-error");
        modalWrap.classList.remove("wrap-show");
      }
    }
  }, false);

  modalFeedback.addEventListener("submit", function (event) {
    var i, input;
    for (i = inputs.length - 1; i >= 0; i--) {
      input = inputs[i];
      if (!input.value) {
        event.preventDefault();
        modalFeedback.classList.remove("modal-error");
        modalFeedback.offsetWidth;
        modalFeedback.classList.add("modal-error");
        input.focus();
      }
    }
  }, false);

}());

(function () {
  "use strict";
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
