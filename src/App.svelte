<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import Header from './lib/Header.svelte';
  import Weather from './lib/Weather.svelte';
</script>

<main>
  <div class="card">
    <Header />
    <Counter />
    <Weather />
  </div>
</main>

<style>
  main {
    text-align: center;
  }
</style>