const weatherbitApi = async (weatherbitApiReqURL, allData) => {
    const weatherbitApiKey = "6c3364da8163412cab863d7cdf270e53";

    const res = await fetch(weatherbitApiReqURL + allData.cityLat + "&lon=" + allData.cityLong + "&key=" + weatherbitApiKey);
    console.log(res)
    try {
        const data = await res.json();
        console.log('The data from weatherbitApi: ', data);
        return data;

    } catch (error) {
        console.log("Error in WeatherBitAPI function:", error);
    }
};

export { weatherbitApi };