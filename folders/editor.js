const textbox = document.querySelector(".textbox");
const iframe = document.querySelector("iframe");


textbox.addEventListener('keyup',()=>{
  updateCode();d
})

textbox.addEventListener("paste", function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
});

function updateCode() {
  var html = textbox.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
}