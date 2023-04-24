const textbox = document.querySelector(".textbox");
const iframe = document.querySelector("iframe");
const htmlholder = document.querySelector(".htmlholder");

textbox.addEventListener('keyup',()=>{
  updateCode();
})

textbox.addEventListener("paste", function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
});

function updateCode() {
  var js = textbox.textContent;
  var html = htmlholder.value
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html + "<script>" + js + "</script>");
}