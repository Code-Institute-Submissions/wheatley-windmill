function finialAnswer() {
    let finialResponse = "";
    if (document.getElementById("finial").value === "elm") {
        finialResponse = "Correct.";
    }
    else if (document.getElementById("finial").value === "Elm") {
        finialResponse = "Correct.";
    }
    else if (document.getElementById("finial").value === "ELM") {
        finialResponse = "Correct.";
    }
    else {
        finialResponse = "No, it was Elm.";
    }
    document.getElementById("finialsolution").innerHTML = finialResponse;
}

function vaneAnswer() {
    let vaneResponse = "";
    if (document.getElementById("vane").value === "fiddle") {
        vaneResponse = "Correct.";
    }
    else if (document.getElementById("vane").value === "Fiddle") {
        vaneResponse = "Correct.";
    }
    else if (document.getElementById("vane").value === "FIDDLE") {
        vaneResponse = "Correct.";
    }
    else if (document.getElementById("vane").value === "violin") {
        vaneResponse = "Correct.";
    }
    else if (document.getElementById("vane").value === "Violin") {
        vaneResponse = "Correct.";
    }
    else if (document.getElementById("vane").value === "VIOLIN") {
        vaneResponse = "Correct.";
    }
    else {
        vaneResponse = "No, it's a fiddle (otherwise known as a violin).";
    }
    document.getElementById("vanesolution").innerHTML = vaneResponse;
}

function rollersAnswer() {
    let rollersResponse = "";
    if (document.getElementById("rollers").value === "20") {
        rollersResponse = "Yes, good guess!";
    }
    else if (document.getElementById("rollers").value === "twenty") {
        rollersResponse = "Yes, good guess!";
    }
    else if (document.getElementById("rollers").value === "Twenty") {
        rollersResponse = "Yes, good guess!";
    }
    else if (document.getElementById("rollers").value === "TWENTY") {
        rollersResponse = "Yes, good guess!";
    }
    else {
        rollersResponse = "No, there are actually 20 up there.";
    }
    document.getElementById("rollerssolution").innerHTML = rollersResponse;
}

function cogsAnswer() {
    let cogsResponse = "";
    if (document.getElementById("cogs").value === "hornbeam") {
        cogsResponse = "Yes, coated with linseed oil";
    }
    else if (document.getElementById("cogs").value === "Hornbeam") {
        cogsResponse = "Yes, coated with linseed oil";
    }
    else if (document.getElementById("cogs").value === "HORNBEAM") {
        cogsResponse = "Yes, coated with linseed oil";
    }
    else {
        cogsResponse = "No, they are hornbeam, which is a very dense timber.";
    }
    document.getElementById("cogssolution").innerHTML = cogsResponse;
}

function topAnswer() {
    let topResponse = "";
    if (document.getElementById("top").value === "wallower") {
        topResponse = "Yes, top marks!";
    }
    else if (document.getElementById("top").value === "Wallower") {
        topResponse = "Yes, top marks!";
    }
    else if (document.getElementById("top").value === "WALLOWER") {
        topResponse = "Yes, top marks!";
    }
    else {
        topResponse = "No, it's the Wallower.";
    }
    document.getElementById("topsolution").innerHTML = topResponse;
}

function bottomAnswer() {
    let bottomResponse = "";
    if (document.getElementById("bottom").value === "spur wheel") {
        bottomResponse = "That's right.";
    }
    else if (document.getElementById("bottom").value === "Spur wheel") {
        bottomResponse = "That's right.";
    }
    else if (document.getElementById("bottom").value === "Spur Wheel") {
        bottomResponse = "That's right.";
    }
    else if (document.getElementById("bottom").value === "SPUR WHEEL") {
        bottomResponse = "That's right.";
    }
    else if (document.getElementById("bottom").value === "spurwheel") {
        bottomResponse = "That's right.";
    }
    else if (document.getElementById("bottom").value === "Spurwheel") {
        bottomResponse = "That's right.";
    }
    else if (document.getElementById("bottom").value === "SPURWHEEL") {
        bottomResponse = "That's right.";
    }
    else {
        bottomResponse = "No, it's the Spur Wheel.";
    }
    document.getElementById("bottomsolution").innerHTML = bottomResponse;
}

function sieveAnswer() {
    let sieveResponse = "";
    if (document.getElementById("sieve").value === "boulter") {
        sieveResponse = "Correct.";
    }
    else if (document.getElementById("sieve").value === "Boulter") {
        sieveResponse = "Correct";
    }
    else if (document.getElementById("sieve").value === "BOULTER") {
        sieveResponse = "Correct";
    }
    else {
        sieveResponse = "Incorrect, it's called a Boulter.";
    }
    document.getElementById("sievesolution").innerHTML = sieveResponse;
}

function grainAnswer() {
    let grainResponse = "";
    if (document.getElementById("grain").value === "horse") {
        grainResponse = "Well remembered.";
    }
    else if (document.getElementById("sieve").value === "Horse") {
        grainResponse = "Well remembered.";
    }
    else if (document.getElementById("sieve").value === "HORSE") {
        grainResponse = "Well remembered.";
    }
    else {
        grainResponse = "It is affectionately referred to as a horse.";
    }
    document.getElementById("grainsolution").innerHTML = grainResponse;
}

function sailsAnswer() {
    let sailsResponse = "";
    if (document.getElementById("sails").value === "clockwise") {
        sailsResponse = "Yes, which is relatively unusual.";
    }
    else if (document.getElementById("sails").value === "Clockwise") {
        sailsResponse = "Yes, which is relatively unusual.";
    }
    else if (document.getElementById("sails").value === "CLOCKWISE") {
        sailsResponse = "Yes, which is relatively unusual.";
    }
    else {
        sailsResponse = "Unlucky, clockwise is unusual.";
    }
    document.getElementById("sailssolution").innerHTML = sailsResponse;
}

function doorsAnswer() {
    let doorsResponse = "";
    if (document.getElementById("doors").value === "4") {
        doorsResponse = "Yes, two on the ground floor, the loading door on the stone floor and one allowing access to the cap tail.";
    }
    else if (document.getElementById("doors").value === "four") {
        doorsResponse = "Yes, two on the ground floor, the loading door on the stone floor and one allowing access to the cap tail.";
    }
    else if (document.getElementById("doors").value === "Four") {
        doorsResponse = "Yes, two on the ground floor, the loading door on the stone floor and one allowing access to the cap tail.";
    }
    else if (document.getElementById("doors").value === "FOUR") {
        doorsResponse = "Yes, two on the ground floor, the loading door on the stone floor and one allowing access to the cap tail.";
    }
    else {
        doorsResponse = "No, there are four in total.";
    }
    document.getElementById("doorssolution").innerHTML = doorsResponse;
}