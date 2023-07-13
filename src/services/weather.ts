export type weather = {
    current_weather: {temperature: number};
}

export const getWeather = async (latitude: number, longitude: number) : Promise<number> => {
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