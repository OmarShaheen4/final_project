const updateUi = async (allData) => {
    // const allData = await request.json();
    const dest = document.getElementById('desName').value
    const dep = document.getElementById("date_start").value

    const postHolder = document.getElementById('test3')
    document.getElementById('test1').innerHTML = `You are going to: ` + dest;
    document.getElementById('test2').innerHTML = `Today's Temperature: ` + allData.currentTemp + ' degrees Celsius';
    document.getElementById('test4').innerHTML = `Departing: ` + dep;

    // document.getElementById('test3').src = allData.img;
    // document.querySelector('#test3').innerHTML = `<img src="${allData.img}" style = "width:200px; height:300px">`;
    document.querySelector('#test3').innerHTML = `<img src="${allData.img}" id = "pixbay">`;

    // const newDiv = document.createElement('div');
    // newDiv.classList.add('entry-holder');
    // newDiv.innerHTML = `
    // <img src="${allData.img}" alt="destination">`;
    // postHolder.appendChild(newDiv);

};
export { updateUi };