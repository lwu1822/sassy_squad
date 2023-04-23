const textbox = document.querySelector(".textbox");
const iframe = document.querySelector("iframe");
const html = document.querySelector(".hidden-htmlholder");



textbox.addEventListener('keyup',()=>{
  updateCode();
})

textbox.addEventListener("paste", function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
});

function updateCode() {
    var sass = new Sass();
    var sassCode = textbox.textContent;
    sass.compile(sassCode, function(result) {
        var css = result.text;
        var style = document.createElement('style');
        //style.textContent = css;
        //iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
        //iframe.src.head.appendChild(style);

    });
}