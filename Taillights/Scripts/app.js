// 2022.06.06
// This demo was based off of an old final I did where we had to make six lights on
// a breadboard behave like the turn indicators on the 66 Ford Thunderbird


// Constants

const stateOff = "off";
const stateLeft = "turningLeft";
const stateRight = "turningRight";
const stateBrakes = "brakes";
const stateHazards = "hazards";
const stateStartup = "startup";
const stateStartupDone = "startupDone"

const allLeft = ".leftInd";
const left3 = ".leftInd3";
const left2 = ".leftInd2";
const left1 = ".leftInd1";
const allLights = ".circle";
const right1 = ".rightInd1";
const right2 = ".rightInd2";
const right3 = ".rightInd3";
const allRight = ".rightInd";

const classIndOn = "indOn";
const hdnLightState = "#lightState";


// Button Handlers

function hitBrake() {
    if (!setLightState(stateBrakes)) {
        return;
    }

    clearLights();
    turnOn(allLights);
}

function releaseBrake() {
    if (!setLightState(stateOff)) {
        return;
    }

    clearLights();
}

async function leftTurnInd() {
    if (!toggleLightState(stateLeft)) {
        return;
    }

    clearLights();

    while (getLightState() === stateLeft) {
        if (isOn(left3)) {
            turnOff(allLeft);
            await sleep(400);
        }
        else if (isOn(left2)) {
            turnOn(left3);
            await sleep(150);
        }
        else if (isOn(left1)) {
            turnOn(left2);
            await sleep(150);
        }
        else {
            turnOn(left1);
            await sleep(150);
        }
    }
}

async function rightTurnInd() {
    if (!toggleLightState(stateRight)) {
        return;
    }

    clearLights();

    while (getLightState() === stateRight) {
        if (isOn(right3)) {
            turnOff(allRight);
            await sleep(400);
        }
        else if (isOn(right2)) {
            turnOn(right3);
            await sleep(150);
        }
        else if (isOn(right1)) {
            turnOn(right2);
            await sleep(150);
        }
        else {
            turnOn(right1);
            await sleep(150);
        }
    }
}

async function hitHazards() {
    if (!toggleLightState(stateHazards)) {
        return;
    }

    clearLights();

    while (getLightState() === stateHazards) {
        toggle(allLights);
        await sleep(750);
    }
}

async function startupSequence() {
    if (!setLightState(stateStartup)) {
        return;
    }

    clearLights();

    await sleep(500);


    turnOn(allLights);
    await sleep(100);
    turnOff(allLights);
    await sleep(100);
    turnOn(allLights);
    await sleep(100);
    turnOff(allLights);
    await sleep(100);
    turnOn(allLights);
    await sleep(100);
    turnOff(allLights);
    await sleep(500);


    turnOn(left3);
    await sleep(250);
    turnOn(left2);
    await sleep(250);
    turnOn(left1);
    await sleep(250);
    turnOn(right1);
    await sleep(250);
    turnOn(right2);
    await sleep(250);
    turnOn(right3);
    await sleep(500);


    turnOff(left3);
    await sleep(250);
    turnOff(left2);
    await sleep(250);
    turnOff(left1);
    await sleep(250);
    turnOff(right1);
    await sleep(250);
    turnOff(right2);
    await sleep(250);
    turnOff(right3);
    await sleep(500);


    turnOn(right2);
    await sleep(150);
    turnOn(left1);
    await sleep(150);
    turnOn(right3);
    await sleep(150);
    turnOff(left1);
    await sleep(150);
    turnOn(left3);
    await sleep(150);
    turnOff(right2);
    await sleep(150);
    turnOn(left2);
    await sleep(150);
    turnOff(left3);
    await sleep(150);
    turnOn(right1);
    await sleep(150);
    turnOff(right2);
    await sleep(150);
    turnOff(right3);
    await sleep(150);
    turnOff(left2);
    await sleep(150);
    turnOff(right1);
    await sleep(500);


    turnOn(allLeft);
    await sleep(450);
    turnOff(allLeft);
    await sleep(450);
    turnOn(allLeft);
    await sleep(350);
    turnOff(allLeft);
    await sleep(350);
    turnOn(allLeft);
    await sleep(250);
    turnOff(allLeft);
    await sleep(500);


    turnOn(allRight);
    await sleep(450);
    turnOff(allRight);
    await sleep(450);
    turnOn(allRight);
    await sleep(350);
    turnOff(allRight);
    await sleep(350);
    turnOn(allRight);
    await sleep(250);
    turnOff(allRight);
    await sleep(500);


    turnOn(allLights);
    await sleep(200);
    turnOff(allLights);
    await sleep(200);
    turnOn(allLights);
    await sleep(300);
    turnOff(allLights);
    await sleep(300);
    turnOn(allLights);
    await sleep(400);
    turnOff(allLights);
    await sleep(400);
    turnOn(allLights);
    await sleep(600);
    turnOff(allLights);
    await sleep(600);
    turnOn(allLights);
    await sleep(800);
    turnOff(allLights);
    await sleep(800);
    turnOn(allLights);
    await sleep(1000);
    turnOff(allLights);
    await sleep(1000);
    turnOn(allLights);
    await sleep(2000);
    turnOff(allLights);
    await sleep(500);


    turnOn(right3);
    await sleep(250);
    turnOn(right2);
    await sleep(250);
    turnOn(right1);
    await sleep(250);
    turnOn(left1);
    await sleep(250);
    turnOn(left2);
    await sleep(250);
    turnOn(left3);
    await sleep(500);


    turnOff(right3);
    await sleep(250);
    turnOff(right2);
    await sleep(250);
    turnOff(right1);
    await sleep(250);
    turnOff(left1);
    await sleep(250);
    turnOff(left2);
    await sleep(250);
    turnOff(left3);
    await sleep(500);

    turnOn(allLights);
    await sleep(100);
    turnOff(allLights);
    await sleep(100);
    turnOn(allLights);
    await sleep(100);
    turnOff(allLights);
    await sleep(100);
    turnOn(allLights);
    await sleep(100);
    turnOff(allLights);
    await sleep(500);


    clearLights();
    setLightState(stateStartupDone);
}


// Manage Lights
function isOn(lightClass) {
    return $(lightClass).hasClass(classIndOn);
}

function turnOn(lightClass) {
    if (!isOn(lightClass)) {
        $(lightClass).addClass(classIndOn);
    }
}
function turnOff(lightClass) {
    if (isOn(lightClass)) {
        $(lightClass).removeClass(classIndOn);
    }
}

function toggle(lightClass) {
    if (isOn(lightClass)) {
        turnOff(lightClass);
    }
    else {
        turnOn(lightClass);
    }
}

function clearLights() {
    turnOff(allLights);
}


// Manage State
function getLightState() {
    return $(hdnLightState).val();
}

function setLightState(lightState) {
    if (lightState === stateStartupDone) {
        $(hdnLightState).val(stateOff);
    }
    else if (getLightState() === stateStartup) {
        return false;
    }
    else {
        $(hdnLightState).val(lightState);
    }
    
    return true;
}

function toggleLightState(lightState) {
    if (getLightState() === stateStartup) {
        return false;
    }
    else if (getLightState() !== lightState) {
        setLightState(lightState);
    }
    else {
        clearLights();
        setLightState(stateOff);
    }
    return true;
}


// Sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}