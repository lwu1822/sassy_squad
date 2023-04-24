<div class="slideInLeft">
<h2>Why SASS?</h2>
SASS is an improvement on CSS in that there are methods of abstraction. It is a stylesheet language that is compiled into CSS, which means that Sass will translate the Sass code you wrote into CSS, which is what your web browser can read.
</div>

<div class="slideInRight">
<h2>SASS vs SCSS</h2>
As you learn about Sass, you might notice something called Scss. They are basically the same thing except that Scss uses curly braces and semicolons to distinguish between lines. Sass uses indentation and newlines instead.

We will be teaching the **Scss** syntax because it is more commonly used.
</div>

<br>

<div class="slideInLeft">
    <h2>Sass Topics</h2>
    <br>
    <div class="flex">
        <button class="gettingStartedButton" onclick="gettingStarted()">Getting started</button>
        <button class="nestingButton" onclick="nesting()">Nesting</button>
        <button class="extendButton" onclick="extend()">Extend/Inheritance</button>
    </div>
    <div class="flex" style="margin-top: 3em;">
        <button class="mixinButton" onclick="mixin()">Mixin</button>
        <button class="functionButton" onclick="functionButton()">Function</button>
        <button class="importButton" onclick="importButton()">Import</button>
    </div>

</div>










<script>
    function gettingStarted() {
        window.location.href = "{{ site.baseurl }}/gettingstarted";
    }

    function nesting() {
        window.location.href = "{{ site.baseurl }}/nesting";
    }
    
    function extend() {
        window.location.href = "{{ site.baseurl }}/extend";
    }

    function mixin() {
        window.location.href = "{{ site.baseurl }}/mixin";
    }

    function functionButton() {
        window.location.href = "{{ site.baseurl }}/function";
    }
    
    function importButton() {
        window.location.href = "{{ site.baseurl }}/import";
    }


</script>
