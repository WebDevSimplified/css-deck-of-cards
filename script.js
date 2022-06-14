const POSITIONS = {
    "J": [[], [8], []], "Q": [[], [8], []], "K": [[], [8], []],
    "A": [[], [8], []], "2": [[], [2, 14], []], "3": [[], [2, 8, 14], []],
    "4": [[2, 14], [], [2, 14]], "5": [[2, 14], [8], [2, 14]], "6": [[2, 8, 14], [], [2, 8, 14]],
    "7": [[2, 8, 14], [5], [2, 8, 14]], "8": [[2, 8, 14], [5, 11], [2, 8, 14]],
    "9": [[2, 6, 10, 14], [8], [2, 6, 10, 14]], "10": [[2, 6, 10, 14], [4, 12], [2, 6, 10, 14]]
}

function createPip(sign, row, col) {
    const pip = document.createElement("img")
    pip.setAttribute("src",`./imgs/${sign}.svg` )
    pip.classList.add("pip")
    pip.style.setProperty("--row", row)
    pip.style.setProperty("--column", col)
    pip.classList.toggle("flip", row > 8)
    return pip
}

function createCornerNumber(pos, val) {
    const corner = document.createElement("div")
    corner.textContent = val
    corner.classList.add("corner-number")
    corner.classList.add(pos)
    return corner
}

function SignsToPic(val,sign){
    if (!isNaN(parseInt(val))||val=="A") return sign

    const SignsToPic={"Q":"queen", "J":"jack", "K":"king"}
    if (sign=="diamond" || sign=="heart") return `${SignsToPic[val]}-red`
    return `${SignsToPic[val]}-black`
}

document.querySelectorAll(".card").forEach((card) => {
    const sign = card.getAttribute("data-sign")
    const val = card.getAttribute("data-val")

    card.style.setProperty("--src", `url('./imgs/${sign}.svg')`)

    POSITIONS[val].forEach((rows, col) => {
        rows.forEach((row) => {
            const pip = createPip(SignsToPic(val,sign), row, col + 1)
            card.append(pip)
        })
    })
    card.append(createCornerNumber("top", val))
    card.append(createCornerNumber("bottom", val))
})