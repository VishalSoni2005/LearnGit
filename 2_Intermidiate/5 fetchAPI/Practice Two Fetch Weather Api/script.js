
// const ansDiv = document.querySelector(".button");

// ansDiv.addEventListener('click', function(){
//     const res = document.createElement('div');
//     res.innerHTML = `Temp Of ${fetchData.location} is : ${fetchData.temp_c} °C`;
//     document.body.appendChild(res);
// })

document.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
    const apiKey = '0ea12b1cda854501a81153721241207';
    const location = 'pune';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
    const target = document.querySelector('#weather');

    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error("Network response is not ok : ");
        }

        const data = await response.json();
        // console.log(data);
        const temp_c = data.current.temp_c;
        target.textContent = `${temp_c} °C`;
        // const aqi = data.current.air_quality;
        // const condition = data.current.condition.text;

        // const res = document.createElement('div');
        // res.classList.add('weather-info'); // Add a class for styling if needed
        // res.innerHTML = `Temp in ${location}: ${temp_c} °C <br> AQI: ${aqi} <br> Condition: ${condition}`;
// 
        // document.body.appendChild(res);

        // // const aqiObj = JSON.stringify(aqi);
        // // const aqii = document.createElement('div');
        // // aqii.innerHTML = aqiObj;
        // // document.body.appendChild(aqii);

        // console.log(`Temp in degree c in ${location} is => `, temp_c);
        // console.log(`AQI of ${location} is : `, aqi.json.stringify());
        // console.log(`Condition is => `, condition);    
        // console.log(data);

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
};

// const target = document.querySelector('#weather');

// async function fetchData() {
//     const apiKey = '0aa9c42baa54d7db104c912c2e74d421';
//     const location = 'pune';
//     const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

//     try {
//         let res = await fetch(url);

//         if(!res.ok) {
//             throw new Error("Network response is not ok : ");
//             }
//         let data = await res.json();
        
//         let temp_c = data.current.temp_c;
//         target.textContent = `${temp_c} °C`;

//         console.log(data);

//         } catch (error) {
//             alert('There has been a problem with your fetch operation:', error);
//         }
//     };
// fetchData();