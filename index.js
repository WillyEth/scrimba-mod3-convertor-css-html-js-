/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meter = 3.281;
const liter = 0.264;
const kilogram = 2.204;

const inputEl = document.getElementById('input-val');
const inputBtn = document.getElementById('css-button-3d--sand');
const meterEl = document.getElementById('meter-el');
const literEl = document.getElementById('liter-el');
const kiloEl = document.getElementById('kilo-el');

inputBtn.addEventListener('click', function () {
  if (inputEl.value) {
    const numberConvert = inputEl.value;

    render(meterEl, numberConvert, meter, 'Meters', 'Feet');
    render(literEl, numberConvert, liter, 'Liter', 'Gallons');
    render(kiloEl, numberConvert, kilogram, 'Kilograms', 'Pounds');
  } else {
    alert('Please Enter Numeric Value');
  }
});

function render(elDom, value, unit, desc1, desc2) {
  const convert1 = conversion1(value, unit);
  const convert2 = conversion2(value, unit);

  elDom.innerText = `${value} ${desc1} = ${convert1} ${desc2} | ${value} ${desc2} = ${convert2} ${desc1}  `;
}

function conversion1(value, unit) {
  const convert = value * unit;
  return convert.toFixed(3);
}

function conversion2(value, unit) {
  const convert = value / unit;
  return convert.toFixed(3);
}
