<script lang="ts">
    import {getWeather} from '../services/weather';
    let temp: number;
    const initData = async () => {
        temp = await getWeather(import.meta.env.VITE_LATITUDE, import.meta.env.VITE_LONGITUDE);
    }
    initData();
</script>

{#if !!temp}
    <div>
        {temp} degré
    </div>
{:else}
    <div>
        Récupération des données depuis le serveur
    </div>
{/if}