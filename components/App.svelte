<div class="main">
  <h1>Server-Side Rendering Example</h1>
  <Message text="{message}" />
</div>

<style>
  .main {
    padding-top: 100px;
    font: 16px serif;
    text-align: center;
  }

  h1 {
    color: indianred;
  }
</style>

<script>
  import Message from './Message.svelte';
  let message = 'Meteor ♥️ Svelte';
</script>
