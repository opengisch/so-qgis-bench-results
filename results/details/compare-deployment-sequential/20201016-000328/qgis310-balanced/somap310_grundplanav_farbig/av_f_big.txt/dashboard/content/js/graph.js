/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 172.0, "minX": 0.0, "maxY": 3024.0, "series": [{"data": [[0.0, 172.0], [0.1, 172.0], [0.2, 175.0], [0.3, 177.0], [0.4, 177.0], [0.5, 177.0], [0.6, 178.0], [0.7, 180.0], [0.8, 180.0], [0.9, 181.0], [1.0, 182.0], [1.1, 182.0], [1.2, 182.0], [1.3, 182.0], [1.4, 183.0], [1.5, 183.0], [1.6, 183.0], [1.7, 184.0], [1.8, 185.0], [1.9, 185.0], [2.0, 186.0], [2.1, 189.0], [2.2, 190.0], [2.3, 190.0], [2.4, 190.0], [2.5, 191.0], [2.6, 192.0], [2.7, 192.0], [2.8, 194.0], [2.9, 195.0], [3.0, 195.0], [3.1, 195.0], [3.2, 196.0], [3.3, 197.0], [3.4, 197.0], [3.5, 198.0], [3.6, 198.0], [3.7, 199.0], [3.8, 199.0], [3.9, 199.0], [4.0, 199.0], [4.1, 199.0], [4.2, 199.0], [4.3, 200.0], [4.4, 201.0], [4.5, 202.0], [4.6, 202.0], [4.7, 202.0], [4.8, 203.0], [4.9, 204.0], [5.0, 204.0], [5.1, 204.0], [5.2, 204.0], [5.3, 204.0], [5.4, 205.0], [5.5, 205.0], [5.6, 205.0], [5.7, 205.0], [5.8, 207.0], [5.9, 208.0], [6.0, 209.0], [6.1, 209.0], [6.2, 210.0], [6.3, 211.0], [6.4, 211.0], [6.5, 211.0], [6.6, 214.0], [6.7, 215.0], [6.8, 215.0], [6.9, 217.0], [7.0, 220.0], [7.1, 224.0], [7.2, 224.0], [7.3, 225.0], [7.4, 227.0], [7.5, 227.0], [7.6, 227.0], [7.7, 240.0], [7.8, 245.0], [7.9, 247.0], [8.0, 247.0], [8.1, 251.0], [8.2, 252.0], [8.3, 252.0], [8.4, 252.0], [8.5, 255.0], [8.6, 257.0], [8.7, 257.0], [8.8, 258.0], [8.9, 260.0], [9.0, 262.0], [9.1, 262.0], [9.2, 262.0], [9.3, 263.0], [9.4, 263.0], [9.5, 263.0], [9.6, 266.0], [9.7, 266.0], [9.8, 266.0], [9.9, 266.0], [10.0, 266.0], [10.1, 266.0], [10.2, 266.0], [10.3, 267.0], [10.4, 267.0], [10.5, 267.0], [10.6, 267.0], [10.7, 268.0], [10.8, 269.0], [10.9, 269.0], [11.0, 269.0], [11.1, 270.0], [11.2, 270.0], [11.3, 271.0], [11.4, 271.0], [11.5, 271.0], [11.6, 271.0], [11.7, 271.0], [11.8, 271.0], [11.9, 271.0], [12.0, 271.0], [12.1, 271.0], [12.2, 272.0], [12.3, 272.0], [12.4, 272.0], [12.5, 272.0], [12.6, 272.0], [12.7, 273.0], [12.8, 273.0], [12.9, 273.0], [13.0, 273.0], [13.1, 275.0], [13.2, 275.0], [13.3, 275.0], [13.4, 275.0], [13.5, 277.0], [13.6, 277.0], [13.7, 277.0], [13.8, 277.0], [13.9, 277.0], [14.0, 277.0], [14.1, 278.0], [14.2, 278.0], [14.3, 278.0], [14.4, 278.0], [14.5, 279.0], [14.6, 280.0], [14.7, 282.0], [14.8, 282.0], [14.9, 282.0], [15.0, 283.0], [15.1, 283.0], [15.2, 283.0], [15.3, 283.0], [15.4, 283.0], [15.5, 283.0], [15.6, 284.0], [15.7, 285.0], [15.8, 286.0], [15.9, 286.0], [16.0, 286.0], [16.1, 287.0], [16.2, 287.0], [16.3, 287.0], [16.4, 287.0], [16.5, 288.0], [16.6, 288.0], [16.7, 288.0], [16.8, 290.0], [16.9, 291.0], [17.0, 291.0], [17.1, 291.0], [17.2, 291.0], [17.3, 291.0], [17.4, 291.0], [17.5, 292.0], [17.6, 292.0], [17.7, 294.0], [17.8, 294.0], [17.9, 294.0], [18.0, 296.0], [18.1, 296.0], [18.2, 296.0], [18.3, 296.0], [18.4, 297.0], [18.5, 297.0], [18.6, 297.0], [18.7, 297.0], [18.8, 297.0], [18.9, 297.0], [19.0, 298.0], [19.1, 299.0], [19.2, 299.0], [19.3, 299.0], [19.4, 300.0], [19.5, 303.0], [19.6, 304.0], [19.7, 304.0], [19.8, 305.0], [19.9, 306.0], [20.0, 310.0], [20.1, 310.0], [20.2, 313.0], [20.3, 324.0], [20.4, 324.0], [20.5, 327.0], [20.6, 327.0], [20.7, 331.0], [20.8, 331.0], [20.9, 331.0], [21.0, 332.0], [21.1, 333.0], [21.2, 333.0], [21.3, 335.0], [21.4, 336.0], [21.5, 336.0], [21.6, 336.0], [21.7, 337.0], [21.8, 339.0], [21.9, 339.0], [22.0, 340.0], [22.1, 340.0], [22.2, 341.0], [22.3, 341.0], [22.4, 342.0], [22.5, 342.0], [22.6, 342.0], [22.7, 342.0], [22.8, 344.0], [22.9, 345.0], [23.0, 345.0], [23.1, 345.0], [23.2, 345.0], [23.3, 345.0], [23.4, 345.0], [23.5, 346.0], [23.6, 346.0], [23.7, 347.0], [23.8, 347.0], [23.9, 347.0], [24.0, 347.0], [24.1, 349.0], [24.2, 349.0], [24.3, 349.0], [24.4, 349.0], [24.5, 350.0], [24.6, 350.0], [24.7, 350.0], [24.8, 350.0], [24.9, 350.0], [25.0, 350.0], [25.1, 350.0], [25.2, 351.0], [25.3, 351.0], [25.4, 351.0], [25.5, 351.0], [25.6, 353.0], [25.7, 353.0], [25.8, 353.0], [25.9, 354.0], [26.0, 354.0], [26.1, 354.0], [26.2, 354.0], [26.3, 355.0], [26.4, 356.0], [26.5, 356.0], [26.6, 357.0], [26.7, 358.0], [26.8, 358.0], [26.9, 358.0], [27.0, 358.0], [27.1, 359.0], [27.2, 359.0], [27.3, 360.0], [27.4, 360.0], [27.5, 360.0], [27.6, 360.0], [27.7, 361.0], [27.8, 361.0], [27.9, 361.0], [28.0, 361.0], [28.1, 361.0], [28.2, 363.0], [28.3, 364.0], [28.4, 364.0], [28.5, 365.0], [28.6, 365.0], [28.7, 365.0], [28.8, 367.0], [28.9, 368.0], [29.0, 368.0], [29.1, 368.0], [29.2, 370.0], [29.3, 372.0], [29.4, 372.0], [29.5, 372.0], [29.6, 372.0], [29.7, 375.0], [29.8, 378.0], [29.9, 378.0], [30.0, 379.0], [30.1, 384.0], [30.2, 384.0], [30.3, 388.0], [30.4, 391.0], [30.5, 398.0], [30.6, 398.0], [30.7, 413.0], [30.8, 414.0], [30.9, 417.0], [31.0, 417.0], [31.1, 423.0], [31.2, 424.0], [31.3, 426.0], [31.4, 426.0], [31.5, 426.0], [31.6, 426.0], [31.7, 426.0], [31.8, 427.0], [31.9, 427.0], [32.0, 429.0], [32.1, 429.0], [32.2, 432.0], [32.3, 433.0], [32.4, 433.0], [32.5, 433.0], [32.6, 433.0], [32.7, 434.0], [32.8, 436.0], [32.9, 436.0], [33.0, 436.0], [33.1, 437.0], [33.2, 437.0], [33.3, 437.0], [33.4, 439.0], [33.5, 443.0], [33.6, 443.0], [33.7, 446.0], [33.8, 446.0], [33.9, 446.0], [34.0, 446.0], [34.1, 456.0], [34.2, 456.0], [34.3, 457.0], [34.4, 457.0], [34.5, 457.0], [34.6, 462.0], [34.7, 464.0], [34.8, 464.0], [34.9, 467.0], [35.0, 468.0], [35.1, 468.0], [35.2, 472.0], [35.3, 474.0], [35.4, 477.0], [35.5, 477.0], [35.6, 483.0], [35.7, 483.0], [35.8, 487.0], [35.9, 487.0], [36.0, 488.0], [36.1, 488.0], [36.2, 489.0], [36.3, 489.0], [36.4, 489.0], [36.5, 490.0], [36.6, 492.0], [36.7, 492.0], [36.8, 493.0], [36.9, 493.0], [37.0, 493.0], [37.1, 495.0], [37.2, 496.0], [37.3, 496.0], [37.4, 496.0], [37.5, 497.0], [37.6, 497.0], [37.7, 497.0], [37.8, 497.0], [37.9, 497.0], [38.0, 498.0], [38.1, 498.0], [38.2, 498.0], [38.3, 498.0], [38.4, 499.0], [38.5, 499.0], [38.6, 499.0], [38.7, 499.0], [38.8, 501.0], [38.9, 501.0], [39.0, 501.0], [39.1, 501.0], [39.2, 503.0], [39.3, 503.0], [39.4, 503.0], [39.5, 504.0], [39.6, 504.0], [39.7, 504.0], [39.8, 504.0], [39.9, 504.0], [40.0, 505.0], [40.1, 505.0], [40.2, 505.0], [40.3, 505.0], [40.4, 505.0], [40.5, 506.0], [40.6, 506.0], [40.7, 506.0], [40.8, 506.0], [40.9, 507.0], [41.0, 507.0], [41.1, 507.0], [41.2, 507.0], [41.3, 508.0], [41.4, 508.0], [41.5, 508.0], [41.6, 508.0], [41.7, 508.0], [41.8, 508.0], [41.9, 508.0], [42.0, 508.0], [42.1, 508.0], [42.2, 509.0], [42.3, 509.0], [42.4, 509.0], [42.5, 509.0], [42.6, 510.0], [42.7, 510.0], [42.8, 510.0], [42.9, 510.0], [43.0, 511.0], [43.1, 511.0], [43.2, 511.0], [43.3, 511.0], [43.4, 511.0], [43.5, 511.0], [43.6, 511.0], [43.7, 511.0], [43.8, 511.0], [43.9, 511.0], [44.0, 511.0], [44.1, 512.0], [44.2, 512.0], [44.3, 512.0], [44.4, 512.0], [44.5, 513.0], [44.6, 513.0], [44.7, 513.0], [44.8, 513.0], [44.9, 513.0], [45.0, 513.0], [45.1, 513.0], [45.2, 513.0], [45.3, 513.0], [45.4, 514.0], [45.5, 514.0], [45.6, 514.0], [45.7, 514.0], [45.8, 515.0], [45.9, 515.0], [46.0, 515.0], [46.1, 515.0], [46.2, 515.0], [46.3, 515.0], [46.4, 515.0], [46.5, 515.0], [46.6, 516.0], [46.7, 516.0], [46.8, 516.0], [46.9, 516.0], [47.0, 516.0], [47.1, 516.0], [47.2, 516.0], [47.3, 517.0], [47.4, 517.0], [47.5, 517.0], [47.6, 517.0], [47.7, 517.0], [47.8, 518.0], [47.9, 518.0], [48.0, 518.0], [48.1, 518.0], [48.2, 518.0], [48.3, 519.0], [48.4, 519.0], [48.5, 519.0], [48.6, 519.0], [48.7, 519.0], [48.8, 519.0], [48.9, 520.0], [49.0, 520.0], [49.1, 520.0], [49.2, 520.0], [49.3, 520.0], [49.4, 520.0], [49.5, 520.0], [49.6, 521.0], [49.7, 521.0], [49.8, 521.0], [49.9, 521.0], [50.0, 521.0], [50.1, 522.0], [50.2, 522.0], [50.3, 522.0], [50.4, 522.0], [50.5, 522.0], [50.6, 522.0], [50.7, 523.0], [50.8, 523.0], [50.9, 523.0], [51.0, 523.0], [51.1, 523.0], [51.2, 523.0], [51.3, 524.0], [51.4, 524.0], [51.5, 524.0], [51.6, 524.0], [51.7, 524.0], [51.8, 524.0], [51.9, 524.0], [52.0, 526.0], [52.1, 526.0], [52.2, 526.0], [52.3, 527.0], [52.4, 527.0], [52.5, 527.0], [52.6, 527.0], [52.7, 528.0], [52.8, 528.0], [52.9, 528.0], [53.0, 528.0], [53.1, 530.0], [53.2, 531.0], [53.3, 531.0], [53.4, 531.0], [53.5, 531.0], [53.6, 531.0], [53.7, 532.0], [53.8, 534.0], [53.9, 535.0], [54.0, 535.0], [54.1, 536.0], [54.2, 536.0], [54.3, 540.0], [54.4, 540.0], [54.5, 540.0], [54.6, 541.0], [54.7, 542.0], [54.8, 542.0], [54.9, 542.0], [55.0, 542.0], [55.1, 542.0], [55.2, 543.0], [55.3, 543.0], [55.4, 544.0], [55.5, 544.0], [55.6, 545.0], [55.7, 547.0], [55.8, 548.0], [55.9, 548.0], [56.0, 550.0], [56.1, 551.0], [56.2, 551.0], [56.3, 551.0], [56.4, 552.0], [56.5, 553.0], [56.6, 554.0], [56.7, 554.0], [56.8, 558.0], [56.9, 559.0], [57.0, 559.0], [57.1, 560.0], [57.2, 563.0], [57.3, 565.0], [57.4, 565.0], [57.5, 566.0], [57.6, 566.0], [57.7, 566.0], [57.8, 566.0], [57.9, 568.0], [58.0, 568.0], [58.1, 568.0], [58.2, 568.0], [58.3, 569.0], [58.4, 569.0], [58.5, 569.0], [58.6, 571.0], [58.7, 571.0], [58.8, 573.0], [58.9, 573.0], [59.0, 573.0], [59.1, 574.0], [59.2, 574.0], [59.3, 574.0], [59.4, 574.0], [59.5, 576.0], [59.6, 576.0], [59.7, 576.0], [59.8, 576.0], [59.9, 576.0], [60.0, 577.0], [60.1, 577.0], [60.2, 579.0], [60.3, 580.0], [60.4, 580.0], [60.5, 580.0], [60.6, 580.0], [60.7, 580.0], [60.8, 580.0], [60.9, 581.0], [61.0, 582.0], [61.1, 584.0], [61.2, 584.0], [61.3, 585.0], [61.4, 588.0], [61.5, 591.0], [61.6, 591.0], [61.7, 592.0], [61.8, 593.0], [61.9, 593.0], [62.0, 594.0], [62.1, 600.0], [62.2, 601.0], [62.3, 601.0], [62.4, 602.0], [62.5, 603.0], [62.6, 604.0], [62.7, 604.0], [62.8, 605.0], [62.9, 605.0], [63.0, 605.0], [63.1, 605.0], [63.2, 607.0], [63.3, 612.0], [63.4, 612.0], [63.5, 612.0], [63.6, 612.0], [63.7, 612.0], [63.8, 612.0], [63.9, 614.0], [64.0, 615.0], [64.1, 617.0], [64.2, 617.0], [64.3, 619.0], [64.4, 620.0], [64.5, 621.0], [64.6, 621.0], [64.7, 622.0], [64.8, 626.0], [64.9, 629.0], [65.0, 629.0], [65.1, 630.0], [65.2, 633.0], [65.3, 633.0], [65.4, 634.0], [65.5, 634.0], [65.6, 636.0], [65.7, 636.0], [65.8, 637.0], [65.9, 638.0], [66.0, 638.0], [66.1, 638.0], [66.2, 638.0], [66.3, 639.0], [66.4, 640.0], [66.5, 640.0], [66.6, 640.0], [66.7, 642.0], [66.8, 642.0], [66.9, 643.0], [67.0, 643.0], [67.1, 643.0], [67.2, 643.0], [67.3, 644.0], [67.4, 644.0], [67.5, 645.0], [67.6, 645.0], [67.7, 646.0], [67.8, 646.0], [67.9, 646.0], [68.0, 646.0], [68.1, 646.0], [68.2, 646.0], [68.3, 647.0], [68.4, 647.0], [68.5, 648.0], [68.6, 650.0], [68.7, 650.0], [68.8, 650.0], [68.9, 651.0], [69.0, 652.0], [69.1, 652.0], [69.2, 652.0], [69.3, 652.0], [69.4, 653.0], [69.5, 653.0], [69.6, 654.0], [69.7, 654.0], [69.8, 654.0], [69.9, 654.0], [70.0, 655.0], [70.1, 656.0], [70.2, 656.0], [70.3, 656.0], [70.4, 657.0], [70.5, 657.0], [70.6, 657.0], [70.7, 658.0], [70.8, 658.0], [70.9, 660.0], [71.0, 660.0], [71.1, 662.0], [71.2, 662.0], [71.3, 662.0], [71.4, 662.0], [71.5, 663.0], [71.6, 663.0], [71.7, 663.0], [71.8, 663.0], [71.9, 664.0], [72.0, 665.0], [72.1, 665.0], [72.2, 665.0], [72.3, 665.0], [72.4, 665.0], [72.5, 665.0], [72.6, 665.0], [72.7, 666.0], [72.8, 667.0], [72.9, 667.0], [73.0, 667.0], [73.1, 668.0], [73.2, 668.0], [73.3, 668.0], [73.4, 671.0], [73.5, 671.0], [73.6, 671.0], [73.7, 671.0], [73.8, 672.0], [73.9, 672.0], [74.0, 672.0], [74.1, 673.0], [74.2, 673.0], [74.3, 673.0], [74.4, 673.0], [74.5, 674.0], [74.6, 674.0], [74.7, 674.0], [74.8, 674.0], [74.9, 674.0], [75.0, 675.0], [75.1, 675.0], [75.2, 675.0], [75.3, 675.0], [75.4, 675.0], [75.5, 675.0], [75.6, 676.0], [75.7, 676.0], [75.8, 677.0], [75.9, 677.0], [76.0, 677.0], [76.1, 677.0], [76.2, 679.0], [76.3, 679.0], [76.4, 680.0], [76.5, 680.0], [76.6, 681.0], [76.7, 681.0], [76.8, 682.0], [76.9, 682.0], [77.0, 682.0], [77.1, 683.0], [77.2, 684.0], [77.3, 684.0], [77.4, 684.0], [77.5, 684.0], [77.6, 685.0], [77.7, 686.0], [77.8, 686.0], [77.9, 686.0], [78.0, 686.0], [78.1, 687.0], [78.2, 687.0], [78.3, 687.0], [78.4, 688.0], [78.5, 688.0], [78.6, 690.0], [78.7, 692.0], [78.8, 692.0], [78.9, 692.0], [79.0, 693.0], [79.1, 693.0], [79.2, 695.0], [79.3, 695.0], [79.4, 695.0], [79.5, 696.0], [79.6, 697.0], [79.7, 697.0], [79.8, 697.0], [79.9, 698.0], [80.0, 698.0], [80.1, 698.0], [80.2, 698.0], [80.3, 699.0], [80.4, 699.0], [80.5, 699.0], [80.6, 700.0], [80.7, 701.0], [80.8, 701.0], [80.9, 701.0], [81.0, 705.0], [81.1, 706.0], [81.2, 706.0], [81.3, 707.0], [81.4, 712.0], [81.5, 714.0], [81.6, 714.0], [81.7, 717.0], [81.8, 720.0], [81.9, 720.0], [82.0, 722.0], [82.1, 723.0], [82.2, 724.0], [82.3, 724.0], [82.4, 729.0], [82.5, 730.0], [82.6, 739.0], [82.7, 739.0], [82.8, 739.0], [82.9, 740.0], [83.0, 741.0], [83.1, 741.0], [83.2, 742.0], [83.3, 745.0], [83.4, 745.0], [83.5, 748.0], [83.6, 749.0], [83.7, 751.0], [83.8, 751.0], [83.9, 753.0], [84.0, 754.0], [84.1, 755.0], [84.2, 755.0], [84.3, 756.0], [84.4, 757.0], [84.5, 757.0], [84.6, 757.0], [84.7, 757.0], [84.8, 758.0], [84.9, 758.0], [85.0, 758.0], [85.1, 759.0], [85.2, 761.0], [85.3, 761.0], [85.4, 761.0], [85.5, 762.0], [85.6, 762.0], [85.7, 762.0], [85.8, 763.0], [85.9, 763.0], [86.0, 765.0], [86.1, 765.0], [86.2, 767.0], [86.3, 767.0], [86.4, 769.0], [86.5, 769.0], [86.6, 769.0], [86.7, 770.0], [86.8, 770.0], [86.9, 770.0], [87.0, 772.0], [87.1, 772.0], [87.2, 772.0], [87.3, 773.0], [87.4, 773.0], [87.5, 773.0], [87.6, 773.0], [87.7, 775.0], [87.8, 779.0], [87.9, 780.0], [88.0, 780.0], [88.1, 780.0], [88.2, 781.0], [88.3, 781.0], [88.4, 781.0], [88.5, 781.0], [88.6, 781.0], [88.7, 781.0], [88.8, 782.0], [88.9, 782.0], [89.0, 783.0], [89.1, 783.0], [89.2, 783.0], [89.3, 784.0], [89.4, 784.0], [89.5, 784.0], [89.6, 785.0], [89.7, 786.0], [89.8, 786.0], [89.9, 786.0], [90.0, 786.0], [90.1, 786.0], [90.2, 786.0], [90.3, 787.0], [90.4, 788.0], [90.5, 789.0], [90.6, 789.0], [90.7, 789.0], [90.8, 790.0], [90.9, 791.0], [91.0, 791.0], [91.1, 792.0], [91.2, 794.0], [91.3, 796.0], [91.4, 796.0], [91.5, 798.0], [91.6, 800.0], [91.7, 800.0], [91.8, 805.0], [91.9, 805.0], [92.0, 806.0], [92.1, 806.0], [92.2, 807.0], [92.3, 816.0], [92.4, 818.0], [92.5, 818.0], [92.6, 818.0], [92.7, 820.0], [92.8, 821.0], [92.9, 821.0], [93.0, 836.0], [93.1, 841.0], [93.2, 843.0], [93.3, 843.0], [93.4, 852.0], [93.5, 884.0], [93.6, 884.0], [93.7, 885.0], [93.8, 885.0], [93.9, 890.0], [94.0, 890.0], [94.1, 900.0], [94.2, 902.0], [94.3, 905.0], [94.4, 905.0], [94.5, 922.0], [94.6, 926.0], [94.7, 954.0], [94.8, 954.0], [94.9, 954.0], [95.0, 958.0], [95.1, 958.0], [95.2, 980.0], [95.3, 989.0], [95.4, 991.0], [95.5, 991.0], [95.6, 998.0], [95.7, 1013.0], [95.8, 1031.0], [95.9, 1031.0], [96.0, 1038.0], [96.1, 1047.0], [96.2, 1061.0], [96.3, 1061.0], [96.4, 1063.0], [96.5, 1065.0], [96.6, 1075.0], [96.7, 1075.0], [96.8, 1084.0], [96.9, 1096.0], [97.0, 1096.0], [97.1, 1115.0], [97.2, 1126.0], [97.3, 1144.0], [97.4, 1144.0], [97.5, 1147.0], [97.6, 1161.0], [97.7, 1259.0], [97.8, 1259.0], [97.9, 1302.0], [98.0, 1311.0], [98.1, 1317.0], [98.2, 1317.0], [98.3, 1317.0], [98.4, 1324.0], [98.5, 1324.0], [98.6, 1337.0], [98.7, 1405.0], [98.8, 1456.0], [98.9, 1456.0], [99.0, 1685.0], [99.1, 1719.0], [99.2, 1929.0], [99.3, 1929.0], [99.4, 2720.0], [99.5, 2739.0], [99.6, 2887.0], [99.7, 2887.0], [99.8, 3002.0], [99.9, 3024.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 171.0, "series": [{"data": [[600.0, 136.0], [2700.0, 2.0], [700.0, 81.0], [2800.0, 1.0], [3000.0, 2.0], [200.0, 111.0], [800.0, 18.0], [900.0, 12.0], [1000.0, 10.0], [1100.0, 5.0], [300.0, 83.0], [1200.0, 1.0], [1300.0, 6.0], [1400.0, 2.0], [400.0, 60.0], [100.0, 31.0], [1600.0, 1.0], [1700.0, 1.0], [1900.0, 1.0], [500.0, 171.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 442.0, "series": [{"data": [[0.0, 285.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 442.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.6028076E12, "maxY": 1.0, "series": [{"data": [[1.60280778E12, 1.0], [1.6028076E12, 1.0], [1.60280766E12, 1.0], [1.60280796E12, 1.0], [1.60280784E12, 1.0], [1.6028079E12, 1.0], [1.60280772E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280796E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 555.2326530612245, "minX": 1.0, "maxY": 555.2326530612245, "series": [{"data": [[1.0, 555.2326530612245]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 555.2326530612245]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 688.6333333333333, "minX": 1.6028076E12, "maxY": 353869.01666666666, "series": [{"data": [[1.60280778E12, 352407.7166666667], [1.6028076E12, 353869.01666666666], [1.60280766E12, 221346.65], [1.60280796E12, 251211.98333333334], [1.60280784E12, 227102.4], [1.6028079E12, 223387.45], [1.60280772E12, 206463.56666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280778E12, 1013.2333333333333], [1.6028076E12, 688.6333333333333], [1.60280766E12, 696.4166666666666], [1.60280796E12, 899.6], [1.60280784E12, 703.9333333333333], [1.6028079E12, 726.2], [1.60280772E12, 795.0166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280796E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 435.51094890510956, "minX": 1.6028076E12, "maxY": 653.9130434782605, "series": [{"data": [[1.60280778E12, 435.51094890510956], [1.6028076E12, 579.4505494505495], [1.60280766E12, 653.9130434782605], [1.60280796E12, 459.5785123966943], [1.60280784E12, 638.8494623655916], [1.6028079E12, 629.1145833333331], [1.60280772E12, 572.6095238095238]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280796E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 434.3138686131386, "minX": 1.6028076E12, "maxY": 652.6086956521739, "series": [{"data": [[1.60280778E12, 434.3138686131386], [1.6028076E12, 578.0549450549452], [1.60280766E12, 652.6086956521739], [1.60280796E12, 458.66115702479334], [1.60280784E12, 637.8279569892472], [1.6028079E12, 628.020833333333], [1.60280772E12, 571.6857142857142]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280796E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.01652892561983471, "minX": 1.6028076E12, "maxY": 0.351648351648352, "series": [{"data": [[1.60280778E12, 0.029197080291970812], [1.6028076E12, 0.351648351648352], [1.60280766E12, 0.021739130434782632], [1.60280796E12, 0.01652892561983471], [1.60280784E12, 0.021505376344086027], [1.6028079E12, 0.020833333333333336], [1.60280772E12, 0.01904761904761905]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280796E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 172.0, "minX": 1.6028076E12, "maxY": 3024.0, "series": [{"data": [[1.60280778E12, 2887.0], [1.6028076E12, 3024.0], [1.60280766E12, 3002.0], [1.60280796E12, 1719.0], [1.60280784E12, 1065.0], [1.6028079E12, 958.0], [1.60280772E12, 2720.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280778E12, 172.7259999012947], [1.6028076E12, 183.0], [1.60280766E12, 336.0], [1.60280796E12, 177.48999985456467], [1.60280784E12, 426.0], [1.6028079E12, 269.0], [1.60280772E12, 252.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280778E12, 173.0986000394821], [1.6028076E12, 183.0], [1.60280766E12, 336.0], [1.60280796E12, 178.03900005817414], [1.60280784E12, 426.0], [1.6028079E12, 269.0], [1.60280772E12, 252.14820003032685]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280778E12, 172.93299995064734], [1.6028076E12, 183.0], [1.60280766E12, 336.0], [1.60280796E12, 177.79499992728233], [1.60280784E12, 426.0], [1.6028079E12, 269.0], [1.60280772E12, 252.02099996209145]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280778E12, 172.0], [1.6028076E12, 183.0], [1.60280766E12, 336.0], [1.60280796E12, 177.0], [1.60280784E12, 426.0], [1.6028079E12, 269.0], [1.60280772E12, 252.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280778E12, 292.0], [1.6028076E12, 483.0], [1.60280766E12, 590.5], [1.60280796E12, 349.0], [1.60280784E12, 612.0], [1.6028079E12, 653.0], [1.60280772E12, 545.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280796E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 181.0, "minX": 1.0, "maxY": 692.5, "series": [{"data": [[2.0, 549.0], [1.0, 692.5], [4.0, 273.5], [5.0, 181.0], [3.0, 340.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 181.0, "minX": 1.0, "maxY": 691.0, "series": [{"data": [[2.0, 548.5], [1.0, 691.0], [4.0, 273.5], [5.0, 181.0], [3.0, 340.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.5333333333333334, "minX": 1.6028076E12, "maxY": 2.283333333333333, "series": [{"data": [[1.60280778E12, 2.283333333333333], [1.6028076E12, 1.5333333333333334], [1.60280766E12, 1.5333333333333334], [1.60280796E12, 2.0], [1.60280784E12, 1.55], [1.6028079E12, 1.6], [1.60280772E12, 1.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280796E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.5166666666666666, "minX": 1.6028076E12, "maxY": 2.283333333333333, "series": [{"data": [[1.60280778E12, 2.283333333333333], [1.6028076E12, 1.5166666666666666], [1.60280766E12, 1.5333333333333334], [1.60280796E12, 2.0166666666666666], [1.60280784E12, 1.55], [1.6028079E12, 1.6], [1.60280772E12, 1.75]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280796E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.5166666666666666, "minX": 1.6028076E12, "maxY": 2.283333333333333, "series": [{"data": [[1.60280778E12, 2.283333333333333], [1.6028076E12, 1.5166666666666666], [1.60280766E12, 1.5333333333333334], [1.60280796E12, 2.0166666666666666], [1.60280784E12, 1.55], [1.6028079E12, 1.6], [1.60280772E12, 1.75]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280796E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.5166666666666666, "minX": 1.6028076E12, "maxY": 2.283333333333333, "series": [{"data": [[1.60280778E12, 2.283333333333333], [1.6028076E12, 1.5166666666666666], [1.60280766E12, 1.5333333333333334], [1.60280796E12, 2.0166666666666666], [1.60280784E12, 1.55], [1.6028079E12, 1.6], [1.60280772E12, 1.75]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280796E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

