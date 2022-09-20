export const getCityData = async (geoNamesURL, dest, username) => {
    // res equals to the output of fetch function
    // const res = await fetch(`${baseUrl}?zip=${zipCode}&apikey=${apiKey}`);
    const res = await fetch(geoNamesURL + "q=" + dest + "&maxRows=10&" + "username=" + username);

    // const res = await fetch(baseUrl +zipCode+`/&appid=${apiKey}`);
    console.log(res)
    try {
        // data equals to res but in json format
        const data = await res.json();

        console.log('The data from GeoName');
        console.log(data);
        return data;
    } catch (error) {
        console.log('Error in getCityData function', error);
    }
};
