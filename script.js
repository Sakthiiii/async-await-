



async function getIss() {
    let data = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    let data1 = await data.json();
    let { latitude, longitude } = data1;
    console.log(data1.latitude);
    console.log(data1.longitude);

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lng').textContent = longitude;



};
getIss();