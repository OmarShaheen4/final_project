const pixabayApi = async (country) => {
    const pixabayApiKey = "30012168-e5ecbf0ace934dd0a04de2f81";
    const pixabayApiReqURL = 'https://pixabay.com/api/?key=';
    const res = await fetch(pixabayApiReqURL + pixabayApiKey + "&q=" + country + "&image_type=photo");
    try {
        const data = await res.json();
        console.log('The data from weatherbitApi: ', data);
        return data;

    } catch (error) {
        console.log("error:", error);
    }
};

export { pixabayApi };