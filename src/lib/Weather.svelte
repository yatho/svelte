<script>
    let temp = 0

    async function getWeather() {
        const url = `/api/v1/forecast?latitude=${import.meta.env.VITE_LATITUDE}&longitude=${import.meta.env.VITE_LONGITUDE}&current_weather=true`;
        const options = {
            method: 'GET',
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            temp = result?.current_weather.temperature
        } catch (error) {
            console.error(error);
        }
    }

    getWeather();

    if (import.meta.hot) {
        import.meta.hot.on('vite:afterUpdate', () => {
            console.log('updated');
        });
    }
</script>

<div>
    {temp} degré
</div>