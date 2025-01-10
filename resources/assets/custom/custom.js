var count = 0

const theme_map = [
  ["#5773ff", "#fff"],
  ["#fc5e41", "#fff"],
  ["#ff4061", "#fff"],
  ["#000", "#fff"],

  ["#5773ff", "#32323d"],
  ["#932cb3", "#171c28"],
  ["#10a4fe", "#0d0e10"],
  ["#ff808f", "#1d1f3e"],
  ["#e41818", "#080808"],

  ["#f5abce", "#f6e2ee"],
  ["#FDFFD2", "#667BC6"],
  ["#FEFFD2", "#FFBF78"],
  ["#4A249D", "#009FBD"]
]
var theme_index = theme_map.length - 1

function changeCounter(num) {
  count += num
  updateCounterDisplay()
}

function updateCounterDisplay() {
  let fontSize = count.toString().length > 6 ? 1.6 : 4 - count.toString().length * 0.4
  let counterElement = document.getElementById("counter")
  counterElement.style.fontSize = fontSize + "em"
  counterElement.innerText = count
}

function enableCounterEditing() {
  let counterElement = document.getElementById("counter")
  let minusButton = document.getElementById("btn-minus")
  let plusButton = document.getElementById("btn-plus")

  counterElement.addEventListener("dblclick", function () {
    minusButton.style.display = "none"
    plusButton.style.display = "none"

    let input = document.createElement("input")
    input.type = "number"
    input.value = count
    input.style.fontSize = counterElement.style.fontSize
    input.style.width = "150px"
    input.style.textAlign = "center"
    input.style.border = "none"
    input.style.outline = "none"
    input.style.background = "transparent"
    input.style.color = window.getComputedStyle(counterElement).color
    input.style.margin = "0"
    input.style.padding = "0"

    input.onblur = function () {
      count = parseInt(input.value) || 0
      updateCounterDisplay()
      counterElement.style.display = "inline"
      input.remove()

      minusButton.style.display = "flex"
      plusButton.style.display = "flex"
    }
    input.onkeydown = function (e) {
      if (e.key === "Enter") {
        input.blur()
      }
    }

    counterElement.style.display = "none"
    counterElement.parentNode.appendChild(input)
    input.focus()
    input.select()
  })
}

function progressTheme() {
  theme_index = (theme_index + 1) % theme_map.length
  document.documentElement.style.setProperty("--colour-primary", theme_map[theme_index][0])
  document.documentElement.style.setProperty("--colour-secondary", theme_map[theme_index][1])
}

enableCounterEditing()
progressTheme()
