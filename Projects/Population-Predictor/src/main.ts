import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

let initialRate = 0.0127;

const calculateRate = (n) => {
  return initialRate - 0.0001 * n;
};

const calculatePopulation = (year) => {
  let n, currentPopulation, currentRate;
  
  if (year >= 2023) {
    n = parseInt(year) - 2023;
    currentPopulation = 8090000000;
    initialRate = 0.0088;
  } else if (year < 2011) {
    document.getElementById("result").innerText = "Year prior to 2011 cannot be calculated";
    
    return;
  } else {
    n = parseInt(year) - 2011;
    currentPopulation = 7110000000;
    initialRate = 0.0127;
  }

  for (let i = 0; i < n; i++) {
    currentRate = calculateRate(i);
    currentPopulation = currentPopulation * (1 + currentRate);
  }
  
  document.getElementById("result").innerText = currentPopulation.toFixed(0);

  return;
};

window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("predict").addEventListener("click", () => {
    const yearInput = document.getElementById("year") as HTMLInputElement;
    calculatePopulation(yearInput.value);
  });
})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="bg-blue-100 h-screen">
    <div class="flex flex-col justify-center pt-20 px-[35%]">
      <h1 class="text-xl font-semibold mx-[10%]">Year:</h1>
      <input type="number" id="year" class="text-xl px-3 py-1 mx-[10%]" minlength="4" maxlength="4" />
      <button id="predict" class="rounded-sm mx-[10%] text-white font-semibold px-3 py-1 text-xl bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-500 active:text-gray-200 mt-3">
        Predict
      </button>
      <h1 class="text-3xl font-semibold text-center mt-3" id="result"></h1>
    </div>
  </div>
`
