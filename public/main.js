const form = document.getElementById("vote-form");

// form submit event
form.addEventListener("submit", e => {
    const choice = document.querySelector("input[name=music]:checked").value;
    const data = { music: choice };

    fetch("http://localhost:3000/poll", {
        method: "post",
        body: JSON.stringify(data),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    e.preventDefault();
});

let dataPoints = [
    { label: "ROCK", y: 0 },
    { label: "CLASSICAL", y: 0 },
    { label: "JAZZ", y: 0 },
    { label: "BOLLYWOOD", y: 0 }
];

const chartContainer = document.querySelector("#chartContainer");

if (chartContainer) {
    const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theam: "theam1",
        title: {
            text: "Music Results"
        },
        data: [
            {
                type: "column",
                dataPoints: dataPoints
            }
        ]
    });
    chart.render();
}
