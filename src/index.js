const state = {
    tempValue: 75,
    city: "Seattle",
    lat: 47.6038321,
    long: -122.3300624,
};

const changeTempColor = () => {
    if (state.tempValue >= 80) {
        document.getElementById("tempValue").className = "red";
        const landscapeDisplay = document.getElementById("landscape");
        landscapeDisplay.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    }
    else if (state.tempValue >= 70 && state.tempValue <= 79) {
        document.getElementById("tempValue").className = "orange";
        const landscapeDisplay = document.getElementById("landscape");
        landscapeDisplay.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    }
    else if (state.tempValue >= 60 && state.tempValue <= 69) {
        document.getElementById("tempValue").className = "yellow";
        const landscapeDisplay = document.getElementById("landscape");
        landscapeDisplay.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    }
    else if (state.tempValue >= 50 && state.tempValue <= 59) {
        document.getElementById("tempValue").className = "green";
        const landscapeDisplay = document.getElementById("landscape");
        landscapeDisplay.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
    else if (state.tempValue >= 40 && state.tempValue <= 49) {
        document.getElementById("tempValue").className = "teal";
        const landscapeDisplay = document.getElementById("landscape");
        landscapeDisplay.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
}

const increaseTempButton = document.getElementById("increaseTempButton");
increaseTempButton.addEventListener("click", () => {
    const tempValue = document.getElementById("tempValue");
    tempValue.textContent = state.tempValue += 1 
    changeTempColor()
})

const decreaseTempButton = document.getElementById("decreaseTempButton");
decreaseTempButton.addEventListener("click", () => {
    const tempValue = document.getElementById("tempValue");
    tempValue.textContent = state.tempValue -= 1;
    changeTempColor();
})

const updateCityName = (e) => {
    const cityDisplay = document.getElementById("cityDisplay");
    state.city = e.target.value;
    cityDisplay.textContent = `For the city of ${state.city}`;
};

const cityNameInputBar = document.querySelector("input");
cityNameInputBar.addEventListener("input", updateCityName);

const resetButton = document.getElementById("cityChange");
resetButton.addEventListener("click", () => {
    cityNameInputBar.value = "Seattle";
    updateCityName();
});