let todayformat = moment().format("[Today is] dddd, MMMM Do, YYYY LT");
let todayformatElement = document.querySelector("#todayformat");
todayformatElement.innerHTML = todayformat;

let tenyears = moment()
  .add(10, "years")
  .format("[10 years from now, it will be] dddd, D MMMM, YYYY LTS");
let tenyearsElement = document.querySelector("#tenyears");
tenyearsElement.innerHTML = tenyears;
