const textbox = document.querySelector(".textbox");
const iframe = document.querySelector("iframe");
const htmlholder = document.querySelector(".htmlholder");
let html = "";

textbox.addEventListener('keyup',()=>{
  updateCode();
})

textbox.addEventListener("paste", function(e) {
  e.preventDefault();
  var text = e.clipboardData.getData("text/plain");
  document.execCommand("insertText", false, text);
});

function updateCode() {
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(htmlholder.value);
    Sass.compile(textbox.value, function(result) {
        window.alert(result)
        html = `<style>${result.text}</style>`;
        iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
    });
}
