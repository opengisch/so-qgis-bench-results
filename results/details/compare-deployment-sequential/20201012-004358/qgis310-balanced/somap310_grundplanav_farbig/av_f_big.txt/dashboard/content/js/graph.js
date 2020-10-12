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
        data: {"result": {"minY": 169.0, "minX": 0.0, "maxY": 3039.0, "series": [{"data": [[0.0, 169.0], [0.1, 169.0], [0.2, 171.0], [0.3, 182.0], [0.4, 182.0], [0.5, 183.0], [0.6, 183.0], [0.7, 183.0], [0.8, 183.0], [0.9, 183.0], [1.0, 184.0], [1.1, 187.0], [1.2, 187.0], [1.3, 190.0], [1.4, 190.0], [1.5, 191.0], [1.6, 191.0], [1.7, 191.0], [1.8, 191.0], [1.9, 191.0], [2.0, 192.0], [2.1, 192.0], [2.2, 193.0], [2.3, 193.0], [2.4, 194.0], [2.5, 195.0], [2.6, 196.0], [2.7, 196.0], [2.8, 196.0], [2.9, 197.0], [3.0, 198.0], [3.1, 198.0], [3.2, 201.0], [3.3, 202.0], [3.4, 202.0], [3.5, 202.0], [3.6, 203.0], [3.7, 203.0], [3.8, 203.0], [3.9, 204.0], [4.0, 204.0], [4.1, 206.0], [4.2, 206.0], [4.3, 207.0], [4.4, 208.0], [4.5, 209.0], [4.6, 209.0], [4.7, 209.0], [4.8, 209.0], [4.9, 210.0], [5.0, 210.0], [5.1, 211.0], [5.2, 212.0], [5.3, 212.0], [5.4, 212.0], [5.5, 212.0], [5.6, 213.0], [5.7, 213.0], [5.8, 214.0], [5.9, 215.0], [6.0, 215.0], [6.1, 215.0], [6.2, 215.0], [6.3, 216.0], [6.4, 218.0], [6.5, 218.0], [6.6, 218.0], [6.7, 219.0], [6.8, 219.0], [6.9, 220.0], [7.0, 221.0], [7.1, 223.0], [7.2, 223.0], [7.3, 226.0], [7.4, 238.0], [7.5, 239.0], [7.6, 239.0], [7.7, 240.0], [7.8, 245.0], [7.9, 247.0], [8.0, 247.0], [8.1, 250.0], [8.2, 256.0], [8.3, 256.0], [8.4, 256.0], [8.5, 258.0], [8.6, 258.0], [8.7, 258.0], [8.8, 258.0], [8.9, 260.0], [9.0, 267.0], [9.1, 267.0], [9.2, 268.0], [9.3, 268.0], [9.4, 268.0], [9.5, 268.0], [9.6, 269.0], [9.7, 270.0], [9.8, 270.0], [9.9, 270.0], [10.0, 270.0], [10.1, 271.0], [10.2, 271.0], [10.3, 272.0], [10.4, 272.0], [10.5, 273.0], [10.6, 273.0], [10.7, 274.0], [10.8, 274.0], [10.9, 275.0], [11.0, 275.0], [11.1, 276.0], [11.2, 277.0], [11.3, 277.0], [11.4, 277.0], [11.5, 278.0], [11.6, 278.0], [11.7, 278.0], [11.8, 279.0], [11.9, 279.0], [12.0, 280.0], [12.1, 280.0], [12.2, 281.0], [12.3, 282.0], [12.4, 282.0], [12.5, 282.0], [12.6, 282.0], [12.7, 282.0], [12.8, 282.0], [12.9, 282.0], [13.0, 282.0], [13.1, 283.0], [13.2, 283.0], [13.3, 283.0], [13.4, 284.0], [13.5, 284.0], [13.6, 284.0], [13.7, 284.0], [13.8, 285.0], [13.9, 285.0], [14.0, 285.0], [14.1, 286.0], [14.2, 287.0], [14.3, 288.0], [14.4, 288.0], [14.5, 289.0], [14.6, 289.0], [14.7, 290.0], [14.8, 290.0], [14.9, 290.0], [15.0, 291.0], [15.1, 291.0], [15.2, 291.0], [15.3, 291.0], [15.4, 292.0], [15.5, 292.0], [15.6, 292.0], [15.7, 292.0], [15.8, 294.0], [15.9, 294.0], [16.0, 295.0], [16.1, 296.0], [16.2, 297.0], [16.3, 297.0], [16.4, 297.0], [16.5, 297.0], [16.6, 298.0], [16.7, 298.0], [16.8, 298.0], [16.9, 299.0], [17.0, 299.0], [17.1, 299.0], [17.2, 299.0], [17.3, 299.0], [17.4, 299.0], [17.5, 299.0], [17.6, 302.0], [17.7, 302.0], [17.8, 302.0], [17.9, 302.0], [18.0, 303.0], [18.1, 304.0], [18.2, 304.0], [18.3, 305.0], [18.4, 307.0], [18.5, 307.0], [18.6, 307.0], [18.7, 308.0], [18.8, 309.0], [18.9, 309.0], [19.0, 310.0], [19.1, 312.0], [19.2, 312.0], [19.3, 312.0], [19.4, 313.0], [19.5, 316.0], [19.6, 318.0], [19.7, 318.0], [19.8, 319.0], [19.9, 319.0], [20.0, 321.0], [20.1, 321.0], [20.2, 324.0], [20.3, 325.0], [20.4, 325.0], [20.5, 326.0], [20.6, 327.0], [20.7, 330.0], [20.8, 330.0], [20.9, 331.0], [21.0, 332.0], [21.1, 336.0], [21.2, 336.0], [21.3, 338.0], [21.4, 339.0], [21.5, 339.0], [21.6, 339.0], [21.7, 340.0], [21.8, 342.0], [21.9, 342.0], [22.0, 342.0], [22.1, 342.0], [22.2, 342.0], [22.3, 342.0], [22.4, 343.0], [22.5, 344.0], [22.6, 345.0], [22.7, 345.0], [22.8, 345.0], [22.9, 346.0], [23.0, 346.0], [23.1, 346.0], [23.2, 347.0], [23.3, 347.0], [23.4, 347.0], [23.5, 348.0], [23.6, 348.0], [23.7, 348.0], [23.8, 348.0], [23.9, 348.0], [24.0, 349.0], [24.1, 349.0], [24.2, 349.0], [24.3, 350.0], [24.4, 350.0], [24.5, 351.0], [24.6, 351.0], [24.7, 352.0], [24.8, 353.0], [24.9, 355.0], [25.0, 355.0], [25.1, 355.0], [25.2, 356.0], [25.3, 356.0], [25.4, 356.0], [25.5, 357.0], [25.6, 357.0], [25.7, 357.0], [25.8, 358.0], [25.9, 358.0], [26.0, 358.0], [26.1, 358.0], [26.2, 359.0], [26.3, 362.0], [26.4, 362.0], [26.5, 362.0], [26.6, 363.0], [26.7, 363.0], [26.8, 363.0], [26.9, 363.0], [27.0, 365.0], [27.1, 365.0], [27.2, 365.0], [27.3, 365.0], [27.4, 366.0], [27.5, 366.0], [27.6, 366.0], [27.7, 366.0], [27.8, 368.0], [27.9, 368.0], [28.0, 368.0], [28.1, 368.0], [28.2, 370.0], [28.3, 373.0], [28.4, 373.0], [28.5, 374.0], [28.6, 375.0], [28.7, 375.0], [28.8, 375.0], [28.9, 378.0], [29.0, 379.0], [29.1, 379.0], [29.2, 381.0], [29.3, 383.0], [29.4, 391.0], [29.5, 391.0], [29.6, 392.0], [29.7, 400.0], [29.8, 405.0], [29.9, 405.0], [30.0, 407.0], [30.1, 414.0], [30.2, 414.0], [30.3, 416.0], [30.4, 417.0], [30.5, 418.0], [30.6, 418.0], [30.7, 420.0], [30.8, 421.0], [30.9, 423.0], [31.0, 423.0], [31.1, 423.0], [31.2, 424.0], [31.3, 425.0], [31.4, 425.0], [31.5, 427.0], [31.6, 427.0], [31.7, 427.0], [31.8, 428.0], [31.9, 428.0], [32.0, 428.0], [32.1, 428.0], [32.2, 429.0], [32.3, 429.0], [32.4, 430.0], [32.5, 430.0], [32.6, 431.0], [32.7, 434.0], [32.8, 434.0], [32.9, 434.0], [33.0, 436.0], [33.1, 437.0], [33.2, 437.0], [33.3, 437.0], [33.4, 439.0], [33.5, 442.0], [33.6, 442.0], [33.7, 443.0], [33.8, 443.0], [33.9, 443.0], [34.0, 443.0], [34.1, 445.0], [34.2, 445.0], [34.3, 446.0], [34.4, 446.0], [34.5, 446.0], [34.6, 450.0], [34.7, 451.0], [34.8, 451.0], [34.9, 453.0], [35.0, 455.0], [35.1, 455.0], [35.2, 459.0], [35.3, 462.0], [35.4, 466.0], [35.5, 466.0], [35.6, 478.0], [35.7, 480.0], [35.8, 481.0], [35.9, 481.0], [36.0, 482.0], [36.1, 483.0], [36.2, 483.0], [36.3, 483.0], [36.4, 484.0], [36.5, 484.0], [36.6, 484.0], [36.7, 484.0], [36.8, 489.0], [36.9, 490.0], [37.0, 490.0], [37.1, 492.0], [37.2, 492.0], [37.3, 493.0], [37.4, 493.0], [37.5, 493.0], [37.6, 494.0], [37.7, 494.0], [37.8, 494.0], [37.9, 494.0], [38.0, 494.0], [38.1, 496.0], [38.2, 496.0], [38.3, 497.0], [38.4, 498.0], [38.5, 498.0], [38.6, 498.0], [38.7, 499.0], [38.8, 499.0], [38.9, 499.0], [39.0, 499.0], [39.1, 501.0], [39.2, 501.0], [39.3, 501.0], [39.4, 502.0], [39.5, 502.0], [39.6, 502.0], [39.7, 502.0], [39.8, 503.0], [39.9, 503.0], [40.0, 503.0], [40.1, 503.0], [40.2, 503.0], [40.3, 504.0], [40.4, 504.0], [40.5, 504.0], [40.6, 504.0], [40.7, 504.0], [40.8, 504.0], [40.9, 505.0], [41.0, 505.0], [41.1, 505.0], [41.2, 505.0], [41.3, 505.0], [41.4, 508.0], [41.5, 508.0], [41.6, 508.0], [41.7, 509.0], [41.8, 509.0], [41.9, 509.0], [42.0, 510.0], [42.1, 510.0], [42.2, 510.0], [42.3, 510.0], [42.4, 510.0], [42.5, 511.0], [42.6, 511.0], [42.7, 511.0], [42.8, 511.0], [42.9, 511.0], [43.0, 511.0], [43.1, 511.0], [43.2, 511.0], [43.3, 512.0], [43.4, 512.0], [43.5, 512.0], [43.6, 513.0], [43.7, 513.0], [43.8, 513.0], [43.9, 513.0], [44.0, 513.0], [44.1, 513.0], [44.2, 513.0], [44.3, 514.0], [44.4, 514.0], [44.5, 514.0], [44.6, 514.0], [44.7, 514.0], [44.8, 515.0], [44.9, 515.0], [45.0, 515.0], [45.1, 515.0], [45.2, 515.0], [45.3, 515.0], [45.4, 515.0], [45.5, 516.0], [45.6, 516.0], [45.7, 516.0], [45.8, 516.0], [45.9, 516.0], [46.0, 517.0], [46.1, 517.0], [46.2, 517.0], [46.3, 517.0], [46.4, 518.0], [46.5, 518.0], [46.6, 518.0], [46.7, 519.0], [46.8, 519.0], [46.9, 519.0], [47.0, 519.0], [47.1, 519.0], [47.2, 519.0], [47.3, 519.0], [47.4, 519.0], [47.5, 519.0], [47.6, 519.0], [47.7, 520.0], [47.8, 520.0], [47.9, 520.0], [48.0, 520.0], [48.1, 521.0], [48.2, 521.0], [48.3, 521.0], [48.4, 521.0], [48.5, 521.0], [48.6, 521.0], [48.7, 521.0], [48.8, 522.0], [48.9, 523.0], [49.0, 523.0], [49.1, 523.0], [49.2, 524.0], [49.3, 524.0], [49.4, 524.0], [49.5, 524.0], [49.6, 524.0], [49.7, 525.0], [49.8, 525.0], [49.9, 525.0], [50.0, 525.0], [50.1, 525.0], [50.2, 525.0], [50.3, 525.0], [50.4, 526.0], [50.5, 526.0], [50.6, 526.0], [50.7, 526.0], [50.8, 526.0], [50.9, 526.0], [51.0, 526.0], [51.1, 527.0], [51.2, 527.0], [51.3, 527.0], [51.4, 527.0], [51.5, 527.0], [51.6, 527.0], [51.7, 527.0], [51.8, 528.0], [51.9, 528.0], [52.0, 528.0], [52.1, 528.0], [52.2, 528.0], [52.3, 530.0], [52.4, 531.0], [52.5, 531.0], [52.6, 532.0], [52.7, 534.0], [52.8, 534.0], [52.9, 534.0], [53.0, 534.0], [53.1, 535.0], [53.2, 535.0], [53.3, 535.0], [53.4, 536.0], [53.5, 536.0], [53.6, 536.0], [53.7, 536.0], [53.8, 537.0], [53.9, 537.0], [54.0, 537.0], [54.1, 537.0], [54.2, 537.0], [54.3, 540.0], [54.4, 540.0], [54.5, 541.0], [54.6, 541.0], [54.7, 542.0], [54.8, 542.0], [54.9, 542.0], [55.0, 543.0], [55.1, 543.0], [55.2, 543.0], [55.3, 543.0], [55.4, 546.0], [55.5, 546.0], [55.6, 547.0], [55.7, 549.0], [55.8, 551.0], [55.9, 551.0], [56.0, 553.0], [56.1, 554.0], [56.2, 554.0], [56.3, 554.0], [56.4, 556.0], [56.5, 559.0], [56.6, 560.0], [56.7, 560.0], [56.8, 561.0], [56.9, 561.0], [57.0, 561.0], [57.1, 561.0], [57.2, 562.0], [57.3, 563.0], [57.4, 563.0], [57.5, 564.0], [57.6, 565.0], [57.7, 566.0], [57.8, 566.0], [57.9, 567.0], [58.0, 567.0], [58.1, 568.0], [58.2, 568.0], [58.3, 568.0], [58.4, 570.0], [58.5, 570.0], [58.6, 572.0], [58.7, 573.0], [58.8, 574.0], [58.9, 574.0], [59.0, 575.0], [59.1, 576.0], [59.2, 577.0], [59.3, 577.0], [59.4, 578.0], [59.5, 578.0], [59.6, 580.0], [59.7, 580.0], [59.8, 581.0], [59.9, 582.0], [60.0, 582.0], [60.1, 582.0], [60.2, 583.0], [60.3, 586.0], [60.4, 586.0], [60.5, 586.0], [60.6, 586.0], [60.7, 587.0], [60.8, 587.0], [60.9, 589.0], [61.0, 590.0], [61.1, 590.0], [61.2, 590.0], [61.3, 591.0], [61.4, 592.0], [61.5, 594.0], [61.6, 594.0], [61.7, 595.0], [61.8, 595.0], [61.9, 595.0], [62.0, 596.0], [62.1, 596.0], [62.2, 598.0], [62.3, 598.0], [62.4, 598.0], [62.5, 600.0], [62.6, 600.0], [62.7, 600.0], [62.8, 601.0], [62.9, 604.0], [63.0, 605.0], [63.1, 605.0], [63.2, 609.0], [63.3, 615.0], [63.4, 615.0], [63.5, 619.0], [63.6, 621.0], [63.7, 626.0], [63.8, 626.0], [63.9, 628.0], [64.0, 628.0], [64.1, 629.0], [64.2, 629.0], [64.3, 633.0], [64.4, 634.0], [64.5, 636.0], [64.6, 636.0], [64.7, 637.0], [64.8, 638.0], [64.9, 639.0], [65.0, 639.0], [65.1, 639.0], [65.2, 639.0], [65.3, 639.0], [65.4, 640.0], [65.5, 640.0], [65.6, 641.0], [65.7, 641.0], [65.8, 641.0], [65.9, 642.0], [66.0, 642.0], [66.1, 642.0], [66.2, 642.0], [66.3, 643.0], [66.4, 643.0], [66.5, 643.0], [66.6, 645.0], [66.7, 645.0], [66.8, 645.0], [66.9, 647.0], [67.0, 647.0], [67.1, 647.0], [67.2, 647.0], [67.3, 647.0], [67.4, 648.0], [67.5, 648.0], [67.6, 648.0], [67.7, 651.0], [67.8, 651.0], [67.9, 652.0], [68.0, 652.0], [68.1, 652.0], [68.2, 653.0], [68.3, 654.0], [68.4, 654.0], [68.5, 654.0], [68.6, 654.0], [68.7, 654.0], [68.8, 654.0], [68.9, 655.0], [69.0, 655.0], [69.1, 655.0], [69.2, 657.0], [69.3, 658.0], [69.4, 658.0], [69.5, 658.0], [69.6, 658.0], [69.7, 659.0], [69.8, 659.0], [69.9, 659.0], [70.0, 660.0], [70.1, 660.0], [70.2, 660.0], [70.3, 661.0], [70.4, 661.0], [70.5, 661.0], [70.6, 661.0], [70.7, 661.0], [70.8, 661.0], [70.9, 662.0], [71.0, 662.0], [71.1, 662.0], [71.2, 664.0], [71.3, 664.0], [71.4, 664.0], [71.5, 664.0], [71.6, 664.0], [71.7, 664.0], [71.8, 665.0], [71.9, 665.0], [72.0, 666.0], [72.1, 666.0], [72.2, 666.0], [72.3, 666.0], [72.4, 666.0], [72.5, 666.0], [72.6, 666.0], [72.7, 666.0], [72.8, 667.0], [72.9, 667.0], [73.0, 667.0], [73.1, 667.0], [73.2, 667.0], [73.3, 667.0], [73.4, 668.0], [73.5, 669.0], [73.6, 669.0], [73.7, 670.0], [73.8, 672.0], [73.9, 672.0], [74.0, 672.0], [74.1, 672.0], [74.2, 673.0], [74.3, 673.0], [74.4, 673.0], [74.5, 673.0], [74.6, 673.0], [74.7, 674.0], [74.8, 674.0], [74.9, 674.0], [75.0, 674.0], [75.1, 674.0], [75.2, 674.0], [75.3, 676.0], [75.4, 676.0], [75.5, 676.0], [75.6, 677.0], [75.7, 677.0], [75.8, 677.0], [75.9, 677.0], [76.0, 678.0], [76.1, 678.0], [76.2, 680.0], [76.3, 680.0], [76.4, 681.0], [76.5, 681.0], [76.6, 682.0], [76.7, 682.0], [76.8, 683.0], [76.9, 685.0], [77.0, 685.0], [77.1, 686.0], [77.2, 686.0], [77.3, 688.0], [77.4, 688.0], [77.5, 688.0], [77.6, 689.0], [77.7, 689.0], [77.8, 689.0], [77.9, 691.0], [78.0, 691.0], [78.1, 691.0], [78.2, 691.0], [78.3, 692.0], [78.4, 692.0], [78.5, 692.0], [78.6, 692.0], [78.7, 693.0], [78.8, 693.0], [78.9, 693.0], [79.0, 695.0], [79.1, 696.0], [79.2, 697.0], [79.3, 697.0], [79.4, 697.0], [79.5, 697.0], [79.6, 698.0], [79.7, 698.0], [79.8, 699.0], [79.9, 700.0], [80.0, 701.0], [80.1, 701.0], [80.2, 701.0], [80.3, 702.0], [80.4, 702.0], [80.5, 707.0], [80.6, 707.0], [80.7, 708.0], [80.8, 708.0], [80.9, 712.0], [81.0, 714.0], [81.1, 716.0], [81.2, 716.0], [81.3, 719.0], [81.4, 722.0], [81.5, 725.0], [81.6, 725.0], [81.7, 726.0], [81.8, 727.0], [81.9, 727.0], [82.0, 728.0], [82.1, 728.0], [82.2, 731.0], [82.3, 731.0], [82.4, 733.0], [82.5, 736.0], [82.6, 738.0], [82.7, 738.0], [82.8, 739.0], [82.9, 741.0], [83.0, 742.0], [83.1, 742.0], [83.2, 745.0], [83.3, 747.0], [83.4, 747.0], [83.5, 748.0], [83.6, 750.0], [83.7, 750.0], [83.8, 750.0], [83.9, 751.0], [84.0, 752.0], [84.1, 752.0], [84.2, 752.0], [84.3, 754.0], [84.4, 754.0], [84.5, 756.0], [84.6, 756.0], [84.7, 756.0], [84.8, 756.0], [84.9, 757.0], [85.0, 757.0], [85.1, 758.0], [85.2, 759.0], [85.3, 759.0], [85.4, 759.0], [85.5, 759.0], [85.6, 760.0], [85.7, 760.0], [85.8, 761.0], [85.9, 762.0], [86.0, 763.0], [86.1, 763.0], [86.2, 763.0], [86.3, 764.0], [86.4, 764.0], [86.5, 764.0], [86.6, 764.0], [86.7, 766.0], [86.8, 766.0], [86.9, 766.0], [87.0, 767.0], [87.1, 767.0], [87.2, 767.0], [87.3, 768.0], [87.4, 769.0], [87.5, 770.0], [87.6, 770.0], [87.7, 770.0], [87.8, 771.0], [87.9, 771.0], [88.0, 771.0], [88.1, 772.0], [88.2, 772.0], [88.3, 772.0], [88.4, 772.0], [88.5, 772.0], [88.6, 772.0], [88.7, 772.0], [88.8, 773.0], [88.9, 773.0], [89.0, 774.0], [89.1, 774.0], [89.2, 777.0], [89.3, 777.0], [89.4, 777.0], [89.5, 777.0], [89.6, 780.0], [89.7, 780.0], [89.8, 780.0], [89.9, 780.0], [90.0, 780.0], [90.1, 781.0], [90.2, 781.0], [90.3, 781.0], [90.4, 781.0], [90.5, 782.0], [90.6, 782.0], [90.7, 782.0], [90.8, 783.0], [90.9, 786.0], [91.0, 786.0], [91.1, 787.0], [91.2, 788.0], [91.3, 789.0], [91.4, 789.0], [91.5, 790.0], [91.6, 791.0], [91.7, 791.0], [91.8, 793.0], [91.9, 793.0], [92.0, 794.0], [92.1, 794.0], [92.2, 800.0], [92.3, 806.0], [92.4, 808.0], [92.5, 808.0], [92.6, 813.0], [92.7, 816.0], [92.8, 818.0], [92.9, 818.0], [93.0, 838.0], [93.1, 846.0], [93.2, 856.0], [93.3, 856.0], [93.4, 859.0], [93.5, 862.0], [93.6, 862.0], [93.7, 871.0], [93.8, 875.0], [93.9, 878.0], [94.0, 878.0], [94.1, 889.0], [94.2, 915.0], [94.3, 919.0], [94.4, 919.0], [94.5, 924.0], [94.6, 936.0], [94.7, 942.0], [94.8, 942.0], [94.9, 946.0], [95.0, 947.0], [95.1, 947.0], [95.2, 958.0], [95.3, 971.0], [95.4, 978.0], [95.5, 978.0], [95.6, 982.0], [95.7, 990.0], [95.8, 993.0], [95.9, 993.0], [96.0, 1018.0], [96.1, 1020.0], [96.2, 1032.0], [96.3, 1032.0], [96.4, 1042.0], [96.5, 1042.0], [96.6, 1065.0], [96.7, 1065.0], [96.8, 1068.0], [96.9, 1094.0], [97.0, 1094.0], [97.1, 1098.0], [97.2, 1109.0], [97.3, 1114.0], [97.4, 1114.0], [97.5, 1120.0], [97.6, 1179.0], [97.7, 1202.0], [97.8, 1202.0], [97.9, 1220.0], [98.0, 1270.0], [98.1, 1272.0], [98.2, 1272.0], [98.3, 1293.0], [98.4, 1323.0], [98.5, 1323.0], [98.6, 1348.0], [98.7, 1366.0], [98.8, 1485.0], [98.9, 1485.0], [99.0, 1731.0], [99.1, 1761.0], [99.2, 1855.0], [99.3, 1855.0], [99.4, 2654.0], [99.5, 2736.0], [99.6, 2933.0], [99.7, 2933.0], [99.8, 2962.0], [99.9, 3039.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 172.0, "series": [{"data": [[600.0, 128.0], [2600.0, 1.0], [2700.0, 1.0], [700.0, 90.0], [2900.0, 2.0], [3000.0, 1.0], [200.0, 106.0], [800.0, 15.0], [900.0, 13.0], [1000.0, 9.0], [1100.0, 4.0], [300.0, 89.0], [1200.0, 5.0], [1300.0, 3.0], [1400.0, 1.0], [100.0, 23.0], [400.0, 69.0], [1700.0, 2.0], [1800.0, 1.0], [500.0, 172.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 440.0, "series": [{"data": [[0.0, 287.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 440.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6024644E12, "maxY": 1.0, "series": [{"data": [[1.60246482E12, 1.0], [1.60246464E12, 1.0], [1.6024647E12, 1.0], [1.60246452E12, 1.0], [1.60246458E12, 1.0], [1.6024644E12, 1.0], [1.60246446E12, 1.0], [1.60246476E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246482E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 556.7564625850333, "minX": 1.0, "maxY": 556.7564625850333, "series": [{"data": [[1.0, 556.7564625850333]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 556.7564625850333]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 380.81666666666666, "minX": 1.6024644E12, "maxY": 323630.86666666664, "series": [{"data": [[1.60246482E12, 147212.85], [1.60246464E12, 272022.7166666667], [1.6024647E12, 223718.68333333332], [1.60246452E12, 218323.23333333334], [1.60246458E12, 293995.88333333336], [1.6024644E12, 154797.08333333334], [1.60246446E12, 323630.86666666664], [1.60246476E12, 202073.96666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246482E12, 380.81666666666666], [1.60246464E12, 810.5333333333333], [1.6024647E12, 718.8166666666667], [1.60246452E12, 702.85], [1.60246458E12, 998.75], [1.6024644E12, 396.7], [1.60246446E12, 671.0], [1.60246476E12, 843.5666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246482E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 445.76119402985057, "minX": 1.6024644E12, "maxY": 681.7499999999999, "series": [{"data": [[1.60246482E12, 451.2692307692307], [1.60246464E12, 558.2685185185188], [1.6024647E12, 629.1263157894737], [1.60246452E12, 643.3763440860221], [1.60246458E12, 445.76119402985057], [1.6024644E12, 499.33962264150955], [1.60246446E12, 681.7499999999999], [1.60246476E12, 532.7232142857142]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246482E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 444.7462686567165, "minX": 1.6024644E12, "maxY": 680.2727272727273, "series": [{"data": [[1.60246482E12, 449.96153846153845], [1.60246464E12, 557.0555555555553], [1.6024647E12, 628.0000000000001], [1.60246452E12, 642.1397849462367], [1.60246458E12, 444.7462686567165], [1.6024644E12, 498.4528301886792], [1.60246446E12, 680.2727272727273], [1.60246476E12, 531.866071428571]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246482E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00925925925925926, "minX": 1.6024644E12, "maxY": 0.5849056603773582, "series": [{"data": [[1.60246482E12, 0.03846153846153846], [1.60246464E12, 0.00925925925925926], [1.6024647E12, 0.02105263157894738], [1.60246452E12, 0.021505376344086027], [1.60246458E12, 0.014925373134328365], [1.6024644E12, 0.5849056603773582], [1.60246446E12, 0.02272727272727273], [1.60246476E12, 0.0267857142857143]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246482E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 169.0, "minX": 1.6024644E12, "maxY": 3039.0, "series": [{"data": [[1.60246482E12, 1731.0], [1.60246464E12, 2933.0], [1.6024647E12, 971.0], [1.60246452E12, 2654.0], [1.60246458E12, 1761.0], [1.6024644E12, 3039.0], [1.60246446E12, 2962.0], [1.60246476E12, 1855.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246482E12, 171.0], [1.60246464E12, 182.0], [1.6024647E12, 270.0], [1.60246452E12, 492.0], [1.60246458E12, 173.72999929189683], [1.6024644E12, 183.0], [1.60246446E12, 212.0], [1.60246476E12, 273.0509999191761]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246482E12, 171.0], [1.60246464E12, 182.07910001039505], [1.6024647E12, 270.0], [1.60246452E12, 492.0], [1.60246458E12, 176.40300028324128], [1.6024644E12, 183.0], [1.60246446E12, 212.0], [1.60246476E12, 273.35610003232955]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246482E12, 171.0], [1.60246464E12, 182.03549998700618], [1.6024647E12, 270.0], [1.60246452E12, 492.0], [1.60246458E12, 175.2149996459484], [1.6024644E12, 183.0], [1.60246446E12, 212.0], [1.60246476E12, 273.22049995958804]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246482E12, 171.0], [1.60246464E12, 182.0], [1.6024647E12, 270.0], [1.60246452E12, 492.0], [1.60246458E12, 169.0], [1.6024644E12, 183.0], [1.60246446E12, 212.0], [1.60246476E12, 273.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246482E12, 283.5], [1.60246464E12, 511.0], [1.6024647E12, 639.0], [1.60246452E12, 641.0], [1.60246458E12, 349.0], [1.6024644E12, 427.0], [1.60246446E12, 622.0], [1.60246476E12, 526.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246482E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 207.5, "minX": 1.0, "maxY": 707.0, "series": [{"data": [[1.0, 707.0], [2.0, 554.0], [4.0, 278.5], [5.0, 207.5], [3.0, 348.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 207.5, "minX": 1.0, "maxY": 704.0, "series": [{"data": [[1.0, 704.0], [2.0, 552.5], [4.0, 278.5], [5.0, 207.5], [3.0, 348.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.6024644E12, "maxY": 2.2333333333333334, "series": [{"data": [[1.60246482E12, 0.85], [1.60246464E12, 1.8], [1.6024647E12, 1.5833333333333333], [1.60246452E12, 1.55], [1.60246458E12, 2.2333333333333334], [1.6024644E12, 0.9], [1.60246446E12, 1.4666666666666666], [1.60246476E12, 1.8666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246482E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.6024644E12, "maxY": 2.2333333333333334, "series": [{"data": [[1.60246482E12, 0.8666666666666667], [1.60246464E12, 1.8], [1.6024647E12, 1.5833333333333333], [1.60246452E12, 1.55], [1.60246458E12, 2.2333333333333334], [1.6024644E12, 0.8833333333333333], [1.60246446E12, 1.4666666666666666], [1.60246476E12, 1.8666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246482E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.6024644E12, "maxY": 2.2333333333333334, "series": [{"data": [[1.60246482E12, 0.8666666666666667], [1.60246464E12, 1.8], [1.6024647E12, 1.5833333333333333], [1.60246452E12, 1.55], [1.60246458E12, 2.2333333333333334], [1.6024644E12, 0.8833333333333333], [1.60246446E12, 1.4666666666666666], [1.60246476E12, 1.8666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246482E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.6024644E12, "maxY": 2.2333333333333334, "series": [{"data": [[1.60246482E12, 0.8666666666666667], [1.60246464E12, 1.8], [1.6024647E12, 1.5833333333333333], [1.60246452E12, 1.55], [1.60246458E12, 2.2333333333333334], [1.6024644E12, 0.8833333333333333], [1.60246446E12, 1.4666666666666666], [1.60246476E12, 1.8666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246482E12, "title": "Total Transactions Per Second"}},
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

