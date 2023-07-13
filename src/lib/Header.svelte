<header>
    {import.meta.env.VITE_TITLE_APP}
    {#if import.meta.env.DEV}
        <span style="flex: 1"></span>
        <span>dev mode</span>
    {/if}
</header>

<style>
    header {
        background-color: black;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 70px;
    }
</style>