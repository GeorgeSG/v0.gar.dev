var ui = new UI();
window.addEventListener("load", function() {
  ui.init();
});

// This is needed in order to be able to remove the eventListener
function pickMove(e) {
  ui.pickMove(e.target);
};