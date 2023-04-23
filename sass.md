### Why SASS?

SASS is an improvement on CSS in that there are methods of abstraction. It is a stylesheet language that is compiled into CSS, which means that Sass will translate the Sass code you wrote into CSS, which is what your web browser can read.

### SASS vs SCSS

As you learn about Sass, you might notice something called Scss. They are basically the same thing except that Scss uses curly braces and semicolons to distinguish between lines. Sass uses indentation and newlines instead.

We will be teaching the **Scss** syntax because it is more commonly used.

### Sass Topics

<br>

<div class="flex">
    <button class="gettingStartedButton" onclick="gettingStarted()">Getting started</button>
    <button class="nestingButton" onclick="nesting()">Nesting</button>
    <button class="mixinButton" onclick="extend()">Extend/Inheritance</button>
</div>
<div class="flex">
<!--
    <button class="gettingStartedButton" onclick="nesting()">Nesting</button>
    <button class="nestingButton" onclick="nesting()">Nesting</button>
    <button class="mixinButton" onclick="mixin()">Mixin</button>
    -->
</div>

<br>




#### Nesting




#### Procedural Abstraction (Interpolation, @mixin, etc.)


### Quiz!!!



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
</script>
