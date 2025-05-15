const pipeData = [
  { inch: 6, t: 6 },
  { inch: 6, t: 7 },
  { inch: 6, t: 8 },
  { inch: 7, t: 6 },
  { inch: 7, t: 7 },
  { inch: 7, t: 8 },
  { inch: 8, t: 6 },
  { inch: 8, t: 7 },
  { inch: 8, t: 8 },
  { inch: 10, t: 6 },
  { inch: 10, t: 7 },
  { inch: 10, t: 8 },
  { inch: 12, t: 6 },
  { inch: 12, t: 7 },
  { inch: 12, t: 8 },
  { inch: 14, t: 6 },
  { inch: 14, t: 7 },
  { inch: 14, t: 8 }
];

function calcArea(inch, t) {
  const D = inch * 25.4;
  const d = D - 2 * t;
  return (Math.PI / 4) * (D * D - d * d);
}

function comparePipes() {
  const inchInput = parseFloat(document.getElementById("inch").value);
  const tInput = parseFloat(document.getElementById("thickness").value);
  const refArea = calcArea(inchInput, tInput);

  let resultHTML = `<h3>مواسير بنفس المساحة أو أكبر:</h3><ul>`;

  pipeData.forEach(pipe => {
    const area = calcArea(pipe.inch, pipe.t);
    if (area >= refArea && !(pipe.inch === inchInput && pipe.t === tInput)) {
      resultHTML += `<li>${pipe.inch} بوصة × ${pipe.t} مم (المساحة: ${area.toFixed(0)} مم²)</li>`;
    }
  });

  resultHTML += `</ul>`;
  document.getElementById("result").innerHTML = resultHTML;
}
