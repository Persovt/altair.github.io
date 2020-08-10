import {sliderInit} from "./slider.js"
import {menuBurgerInit} from "./menu-burger.js"
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
const line          =  document.getElementsByTagName('line')[0];

const statistic = document.querySelector(".statistic")

let linePaint = (firstObject,secondObject) => {
    let line = 0;
    

      let firstPos =  $(firstObject).position();
      let secondPos = $(secondObject).position();
      let posFirstObjectTop = firstPos.top + ($(firstObject).height() * 0.5)
      let posFirstObjectLeft = firstPos.left + ($(firstObject).width() * 0.5)
      let posSecondObjectTop = secondPos.top + ($(secondObject).height() * 0.5)
      let posSecondObjectLeft = secondPos.left + ($(secondObject).width()* 0.5)
    line = '<svg class="line"><line x1="'+ posFirstObjectLeft +'" y1="'+ posFirstObjectTop +'" x2="'+ posSecondObjectLeft +'" y2="'+ posSecondObjectTop +'" /></svg>'
    $(line).prependTo(".statistic");
        

}

linePaint(statisticCiricleFirst,statisticHappyClient);
linePaint(statisticHappyClient,statisticComplitedProjects);
linePaint(statisticBestshots,statisticCiricleSecond);
linePaint(statisticBestshots,statisticCoffesmade);
linePaint(statisticComplitedProjects,statisticBestshots);
linePaint(statisticBestshots,statisticWinningawards);



