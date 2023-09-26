<script lang="ts">
    const getWeather = async () : Promise<number> => {
        const url = `/api/v1/forecast?latitude=${import.meta.env.VITE_LATITUDE}&longitude=${import.meta.env.VITE_LONGITUDE}&current_weather=true`;
        const options = {
            method: 'GET',
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return result?.current_weather.temperature
        } catch (error) {
            console.error(error);
        }
        return 0;
    }

    let temp: number;
    const initData = async () => {
        temp = await getWeather();
    }
    initData();
</script>

{#if !!temp}
    <div>
        {temp} degré
    </div>
{:else}
    <div>
        Chargement
    </div>
{/if}