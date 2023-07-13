<script lang="ts">
  let count: number = 0
  const increment = () => {
    count++
  }

  const reset = () => {
    count = 0
  }
</script>

{#if count < 10}
<button on:click={increment}>
  count is {count}
</button>
{:else}
<button on:click={reset}>
  Count is too hight
</button>
{/if}