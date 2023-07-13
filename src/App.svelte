<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import Header from './lib/Header.svelte';
  import Weather from './lib/Weather.svelte';

  import { Router, Link, Route } from "svelte-routing";

  export let url = "/";
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/weather">weather</Link>
  </nav>
  <main>
    <Route path="/weather"><Weather /></Route>
    <Route path="/"><Counter /></Route>
  </main>
</Router>

<style>
  main {
    text-align: center;
  }
</style>