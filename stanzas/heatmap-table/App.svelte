<script>
  export let sayTo;
  let counter = 0;

  function handleClick() {
    counter += 1;
  }
</script>

<h1>Hello, {sayTo}!</h1>
<p class="greetings">Hello, {sayTo}.</p>

<p>clicked {counter} time(s)</p>
<button on:click={handleClick}>Click me</button>

<style>
  p.greetings {
    color: red;
  }
</style>