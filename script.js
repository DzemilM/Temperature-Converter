// ---- Grab the elements you'll need from the page ----
// document.getElementById(...) gives you a reference to an element.
const valueInput = document.getElementById("value");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const convertBtn = document.getElementById("convert");
const resultEl = document.getElementById("result");
const form = document.getElementById("converter");

// =====================================================================
// TODO 1 — Enable the button only when all 3 fields are filled
// ---------------------------------------------------------------------
// Write a function, e.g. updateButton(), that:
//   - checks whether valueInput has a value AND fromSelect has a value
//     AND toSelect has a value
//   - sets convertBtn.disabled to true or false accordingly
//
// Hints:
//   - An input's current text is in `valueInput.value` (it's a string).
//     An empty field is the empty string "".
//   - A <select> where nothing real is chosen also has value "".
//   - Then wire it up so it runs whenever a field changes:
//       valueInput.addEventListener("input", updateButton);
//       fromSelect.addEventListener("change", updateButton);
//       toSelect.addEventListener("change", updateButton);
// =====================================================================


// =====================================================================
// TODO 2 — Convert and show the result
// ---------------------------------------------------------------------
// When the form is submitted:
//   1. Prevent the page from reloading  ->  event.preventDefault()
//   2. Read the number:  Number(valueInput.value)
//   3. Read the units:   fromSelect.value  and  toSelect.value
//   4. Convert from -> to and show it in resultEl.textContent
//
// Conversion strategy (the clean way): convert ANY unit to Celsius
// first, then from Celsius to the target unit. That's 4 formulas total
// instead of 9.
//
//   To Celsius:
//     fahrenheit -> celsius:  (f - 32) * 5 / 9
//     kelvin     -> celsius:  k - 273.15
//   From Celsius:
//     celsius -> fahrenheit:  c * 9 / 5 + 32
//     celsius -> kelvin:      c + 273.15
//
// Wire it up:
//   form.addEventListener("submit", function (event) { ... });
// =====================================================================
