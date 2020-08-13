import { sliderInit } from "./slider.js"
import { menuBurgerInit } from "./menu-burger.js"
sliderInit();
menuBurgerInit();
/* 
.statistic__ciricle 

.statistic__line 

.statistic__happyClient 
*/


const statisticCiricleFirst = $(".statistic__ciricleFirst");
const statisticHappyClient = $(".statistic__happyClient");
const statisticComplitedProjects = $(".statistic__complitedProjects ");
const statisticBestshots = $(".statistic__bestshots");

const statisticCiricleSecond = $(".statistic__ciricleSecond");
const statisticCoffesmade = $(".statistic__coffesmade");
const statisticWinningawards = $(".statistic__winningawards");
const line0 = document.querySelector('.line-0').getElementsByTagName('line')[0];
const line1 = document.querySelector('.line-1').getElementsByTagName('line')[0];
const line2 = document.querySelector('.line-2').getElementsByTagName('line')[0];
const line3 = document.querySelector('.line-3').getElementsByTagName('line')[0];
const line4 = document.querySelector('.line-4').getElementsByTagName('line')[0];
const line5 = document.querySelector('.line-5').getElementsByTagName('line')[0];
const statistic = document.querySelector(".statistic")

let linePaint = (firstObject, secondObject, linenumber) => {

  let firstPos = $(firstObject).position();
  let secondPos = $(secondObject).position();
  let posFirstObjectTop = firstPos.top + ($(firstObject).height() * 0.5)
  let posFirstObjectLeft = firstPos.left + ($(firstObject).width() * 0.5)
  let posSecondObjectTop = secondPos.top + ($(secondObject).height() * 0.5)
  let posSecondObjectLeft = secondPos.left + ($(secondObject).width() * 0.5)
  linenumber.setAttribute('x1', posFirstObjectLeft);
  linenumber.setAttribute('y1', posFirstObjectTop);
  linenumber.setAttribute('x2', posSecondObjectLeft);
  linenumber.setAttribute('y2', posSecondObjectTop);
}

window.onresize = function(event) {
  linePaint(statisticCiricleFirst, statisticHappyClient, line0);
  linePaint(statisticHappyClient, statisticComplitedProjects , line1);
  linePaint(statisticBestshots, statisticCiricleSecond, line2);
  linePaint(statisticBestshots, statisticCoffesmade, line3);
  linePaint(statisticComplitedProjects, statisticBestshots, line4);
  linePaint(statisticBestshots, statisticWinningawards, line5);
}
linePaint(statisticCiricleFirst, statisticHappyClient, line0);
linePaint(statisticHappyClient, statisticComplitedProjects , line1);
linePaint(statisticBestshots, statisticCiricleSecond, line2);
linePaint(statisticBestshots, statisticCoffesmade, line3);
linePaint(statisticComplitedProjects, statisticBestshots, line4);
linePaint(statisticBestshots, statisticWinningawards, line5);


