function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.round(r);
}

let rand = random(1, 50)

while (rand !== 10) {
    console.log(rand)
}