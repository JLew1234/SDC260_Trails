/*
    Author: Jonathan M. Lewellen
    Date: 10/10/2023
    Purpose: Display trail information and handle form logic
*/

/* =========================================
   GREENWAY PARK TRAIL DATA
========================================= */

const trails = [
    { name: "River Walk", difficulty: "low", time: 20 },
    { name: "Forest Loop", difficulty: "medium", time: 45 },
    { name: "Hill Summit Trail", difficulty: "high", time: 90 },
    { name: "Lake Side Path", difficulty: "low", time: 30 },
    { name: "Rock Ridge Trail", difficulty: "high", time: 75 },
    { name: "JonLew0997 Explorer", difficulty: "medium", time: 60 },
    { name: "Pine Meadow", difficulty: "low", time: 25 },
    { name: "Canyon Pass", difficulty: "high", time: 120 }
];

/* =========================================
   DISPLAY TRAILS VIA LOOP
========================================= */

const trailContainer = document.getElementById('trailContainer');

for (let i = 0; i < trails.length; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${trails[i].name}</h3>
        <p><strong>Difficulty:</strong> ${trails[i].difficulty}</p>
        <p><strong>Time:</strong> ${trails[i].time} mins</p>
    `;
    trailContainer.appendChild(card);
}

/* =========================================
   FORM LOGIC
========================================= */

document.getElementById('trailForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const pets = document.querySelector('input[name="pets"]:checked').value;
    const experience = document.getElementById('experience').value;
    let recommendedTrail = "";

    if (pets === "yes") {
        if (experience === "low") {
            recommendedTrail = "River Walk";
        } else if (experience === "medium" || experience === "high") {
            recommendedTrail = "JonLew0997 Explorer";
        }
    } else if (pets === "no") {
        if (experience === "low") {
            recommendedTrail = "Lake Side Path";
        } else if (experience === "medium") {
            recommendedTrail = "Forest Loop";
        } else if (experience === "high") {
            recommendedTrail = "Rock Ridge Trail";
        }
    }

    document.getElementById('result').textContent = `Recommended Trail: ${recommendedTrail}`;
});