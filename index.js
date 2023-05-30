let count = 0
let countEl = document.getElementById("count-el")
let infoEL = document.getElementById("info-el")

function increment() {
    count++
    countEl.textContent = count
}

function decrement() {
    if (count == 0) {
        return;
    }
    count--
    countEl.textContent = count
}

function save() {
    infoEL.textContent += count + " - "
    count = 0
    countEl.textContent = 0
}

function reset() {
    infoEL.textContent = "Previous entries: "
    count = 0
    countEl.textContent = 0
}