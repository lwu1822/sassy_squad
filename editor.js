const textbox = document.querySelector(".first");
const iframe = document.querySelector("iframe");


textbox.addEventListener('keyup',()=>{
  var html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
})

textbox.addEventListener("paste", function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
});