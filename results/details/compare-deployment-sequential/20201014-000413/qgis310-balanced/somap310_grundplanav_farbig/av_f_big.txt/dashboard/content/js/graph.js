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
        data: {"result": {"minY": 170.0, "minX": 0.0, "maxY": 3065.0, "series": [{"data": [[0.0, 170.0], [0.1, 170.0], [0.2, 172.0], [0.3, 172.0], [0.4, 172.0], [0.5, 179.0], [0.6, 180.0], [0.7, 183.0], [0.8, 183.0], [0.9, 183.0], [1.0, 185.0], [1.1, 186.0], [1.2, 186.0], [1.3, 187.0], [1.4, 188.0], [1.5, 189.0], [1.6, 189.0], [1.7, 189.0], [1.8, 189.0], [1.9, 189.0], [2.0, 192.0], [2.1, 192.0], [2.2, 194.0], [2.3, 194.0], [2.4, 194.0], [2.5, 194.0], [2.6, 194.0], [2.7, 194.0], [2.8, 194.0], [2.9, 196.0], [3.0, 196.0], [3.1, 196.0], [3.2, 196.0], [3.3, 197.0], [3.4, 197.0], [3.5, 198.0], [3.6, 199.0], [3.7, 199.0], [3.8, 199.0], [3.9, 200.0], [4.0, 202.0], [4.1, 202.0], [4.2, 202.0], [4.3, 202.0], [4.4, 203.0], [4.5, 204.0], [4.6, 204.0], [4.7, 205.0], [4.8, 206.0], [4.9, 206.0], [5.0, 206.0], [5.1, 207.0], [5.2, 208.0], [5.3, 208.0], [5.4, 210.0], [5.5, 210.0], [5.6, 211.0], [5.7, 211.0], [5.8, 211.0], [5.9, 212.0], [6.0, 212.0], [6.1, 212.0], [6.2, 213.0], [6.3, 213.0], [6.4, 214.0], [6.5, 214.0], [6.6, 216.0], [6.7, 221.0], [6.8, 221.0], [6.9, 222.0], [7.0, 223.0], [7.1, 223.0], [7.2, 223.0], [7.3, 225.0], [7.4, 226.0], [7.5, 229.0], [7.6, 229.0], [7.7, 230.0], [7.8, 230.0], [7.9, 232.0], [8.0, 232.0], [8.1, 258.0], [8.2, 258.0], [8.3, 259.0], [8.4, 259.0], [8.5, 259.0], [8.6, 260.0], [8.7, 260.0], [8.8, 260.0], [8.9, 261.0], [9.0, 263.0], [9.1, 263.0], [9.2, 264.0], [9.3, 266.0], [9.4, 266.0], [9.5, 266.0], [9.6, 270.0], [9.7, 271.0], [9.8, 271.0], [9.9, 271.0], [10.0, 272.0], [10.1, 272.0], [10.2, 272.0], [10.3, 273.0], [10.4, 274.0], [10.5, 275.0], [10.6, 275.0], [10.7, 276.0], [10.8, 276.0], [10.9, 276.0], [11.0, 276.0], [11.1, 276.0], [11.2, 276.0], [11.3, 277.0], [11.4, 277.0], [11.5, 278.0], [11.6, 279.0], [11.7, 279.0], [11.8, 280.0], [11.9, 280.0], [12.0, 280.0], [12.1, 280.0], [12.2, 281.0], [12.3, 281.0], [12.4, 281.0], [12.5, 281.0], [12.6, 281.0], [12.7, 282.0], [12.8, 283.0], [12.9, 283.0], [13.0, 283.0], [13.1, 283.0], [13.2, 284.0], [13.3, 284.0], [13.4, 285.0], [13.5, 285.0], [13.6, 285.0], [13.7, 286.0], [13.8, 286.0], [13.9, 287.0], [14.0, 287.0], [14.1, 287.0], [14.2, 287.0], [14.3, 288.0], [14.4, 288.0], [14.5, 288.0], [14.6, 288.0], [14.7, 288.0], [14.8, 288.0], [14.9, 289.0], [15.0, 289.0], [15.1, 289.0], [15.2, 289.0], [15.3, 290.0], [15.4, 291.0], [15.5, 291.0], [15.6, 291.0], [15.7, 291.0], [15.8, 291.0], [15.9, 291.0], [16.0, 291.0], [16.1, 292.0], [16.2, 292.0], [16.3, 292.0], [16.4, 292.0], [16.5, 293.0], [16.6, 295.0], [16.7, 295.0], [16.8, 295.0], [16.9, 297.0], [17.0, 297.0], [17.1, 298.0], [17.2, 298.0], [17.3, 299.0], [17.4, 299.0], [17.5, 299.0], [17.6, 299.0], [17.7, 300.0], [17.8, 300.0], [17.9, 300.0], [18.0, 301.0], [18.1, 303.0], [18.2, 303.0], [18.3, 304.0], [18.4, 304.0], [18.5, 304.0], [18.6, 304.0], [18.7, 305.0], [18.8, 305.0], [18.9, 305.0], [19.0, 306.0], [19.1, 306.0], [19.2, 307.0], [19.3, 307.0], [19.4, 308.0], [19.5, 309.0], [19.6, 309.0], [19.7, 309.0], [19.8, 310.0], [19.9, 312.0], [20.0, 314.0], [20.1, 314.0], [20.2, 319.0], [20.3, 319.0], [20.4, 319.0], [20.5, 323.0], [20.6, 323.0], [20.7, 326.0], [20.8, 326.0], [20.9, 329.0], [21.0, 329.0], [21.1, 330.0], [21.2, 330.0], [21.3, 332.0], [21.4, 333.0], [21.5, 333.0], [21.6, 333.0], [21.7, 335.0], [21.8, 336.0], [21.9, 336.0], [22.0, 336.0], [22.1, 336.0], [22.2, 336.0], [22.3, 336.0], [22.4, 338.0], [22.5, 339.0], [22.6, 340.0], [22.7, 340.0], [22.8, 341.0], [22.9, 341.0], [23.0, 342.0], [23.1, 342.0], [23.2, 343.0], [23.3, 343.0], [23.4, 343.0], [23.5, 343.0], [23.6, 345.0], [23.7, 347.0], [23.8, 347.0], [23.9, 347.0], [24.0, 348.0], [24.1, 349.0], [24.2, 349.0], [24.3, 349.0], [24.4, 350.0], [24.5, 350.0], [24.6, 350.0], [24.7, 350.0], [24.8, 350.0], [24.9, 351.0], [25.0, 351.0], [25.1, 351.0], [25.2, 351.0], [25.3, 351.0], [25.4, 352.0], [25.5, 352.0], [25.6, 352.0], [25.7, 352.0], [25.8, 352.0], [25.9, 352.0], [26.0, 353.0], [26.1, 353.0], [26.2, 353.0], [26.3, 353.0], [26.4, 355.0], [26.5, 355.0], [26.6, 355.0], [26.7, 356.0], [26.8, 356.0], [26.9, 357.0], [27.0, 357.0], [27.1, 359.0], [27.2, 359.0], [27.3, 360.0], [27.4, 360.0], [27.5, 362.0], [27.6, 362.0], [27.7, 363.0], [27.8, 363.0], [27.9, 364.0], [28.0, 364.0], [28.1, 365.0], [28.2, 365.0], [28.3, 365.0], [28.4, 365.0], [28.5, 365.0], [28.6, 366.0], [28.7, 366.0], [28.8, 366.0], [28.9, 369.0], [29.0, 371.0], [29.1, 371.0], [29.2, 377.0], [29.3, 379.0], [29.4, 380.0], [29.5, 380.0], [29.6, 381.0], [29.7, 392.0], [29.8, 408.0], [29.9, 408.0], [30.0, 408.0], [30.1, 410.0], [30.2, 410.0], [30.3, 412.0], [30.4, 413.0], [30.5, 414.0], [30.6, 414.0], [30.7, 414.0], [30.8, 414.0], [30.9, 416.0], [31.0, 416.0], [31.1, 416.0], [31.2, 419.0], [31.3, 420.0], [31.4, 420.0], [31.5, 421.0], [31.6, 425.0], [31.7, 425.0], [31.8, 426.0], [31.9, 427.0], [32.0, 427.0], [32.1, 427.0], [32.2, 428.0], [32.3, 429.0], [32.4, 429.0], [32.5, 429.0], [32.6, 430.0], [32.7, 434.0], [32.8, 436.0], [32.9, 436.0], [33.0, 436.0], [33.1, 438.0], [33.2, 439.0], [33.3, 439.0], [33.4, 441.0], [33.5, 442.0], [33.6, 442.0], [33.7, 442.0], [33.8, 443.0], [33.9, 446.0], [34.0, 446.0], [34.1, 447.0], [34.2, 449.0], [34.3, 456.0], [34.4, 456.0], [34.5, 457.0], [34.6, 458.0], [34.7, 463.0], [34.8, 463.0], [34.9, 463.0], [35.0, 464.0], [35.1, 464.0], [35.2, 464.0], [35.3, 465.0], [35.4, 470.0], [35.5, 470.0], [35.6, 471.0], [35.7, 478.0], [35.8, 481.0], [35.9, 481.0], [36.0, 483.0], [36.1, 486.0], [36.2, 489.0], [36.3, 489.0], [36.4, 490.0], [36.5, 491.0], [36.6, 491.0], [36.7, 491.0], [36.8, 492.0], [36.9, 493.0], [37.0, 493.0], [37.1, 494.0], [37.2, 494.0], [37.3, 496.0], [37.4, 496.0], [37.5, 497.0], [37.6, 498.0], [37.7, 498.0], [37.8, 498.0], [37.9, 499.0], [38.0, 500.0], [38.1, 500.0], [38.2, 500.0], [38.3, 500.0], [38.4, 501.0], [38.5, 501.0], [38.6, 501.0], [38.7, 501.0], [38.8, 501.0], [38.9, 501.0], [39.0, 502.0], [39.1, 502.0], [39.2, 502.0], [39.3, 502.0], [39.4, 503.0], [39.5, 504.0], [39.6, 504.0], [39.7, 504.0], [39.8, 506.0], [39.9, 506.0], [40.0, 506.0], [40.1, 506.0], [40.2, 506.0], [40.3, 506.0], [40.4, 506.0], [40.5, 507.0], [40.6, 507.0], [40.7, 507.0], [40.8, 507.0], [40.9, 508.0], [41.0, 508.0], [41.1, 508.0], [41.2, 508.0], [41.3, 508.0], [41.4, 508.0], [41.5, 508.0], [41.6, 508.0], [41.7, 508.0], [41.8, 508.0], [41.9, 508.0], [42.0, 509.0], [42.1, 509.0], [42.2, 510.0], [42.3, 510.0], [42.4, 510.0], [42.5, 511.0], [42.6, 511.0], [42.7, 511.0], [42.8, 511.0], [42.9, 512.0], [43.0, 512.0], [43.1, 512.0], [43.2, 512.0], [43.3, 512.0], [43.4, 512.0], [43.5, 512.0], [43.6, 512.0], [43.7, 512.0], [43.8, 512.0], [43.9, 512.0], [44.0, 512.0], [44.1, 512.0], [44.2, 512.0], [44.3, 513.0], [44.4, 513.0], [44.5, 513.0], [44.6, 513.0], [44.7, 513.0], [44.8, 513.0], [44.9, 514.0], [45.0, 514.0], [45.1, 514.0], [45.2, 514.0], [45.3, 514.0], [45.4, 514.0], [45.5, 514.0], [45.6, 515.0], [45.7, 515.0], [45.8, 516.0], [45.9, 516.0], [46.0, 516.0], [46.1, 516.0], [46.2, 516.0], [46.3, 516.0], [46.4, 517.0], [46.5, 517.0], [46.6, 517.0], [46.7, 517.0], [46.8, 517.0], [46.9, 517.0], [47.0, 517.0], [47.1, 518.0], [47.2, 518.0], [47.3, 518.0], [47.4, 519.0], [47.5, 519.0], [47.6, 519.0], [47.7, 519.0], [47.8, 519.0], [47.9, 519.0], [48.0, 519.0], [48.1, 520.0], [48.2, 520.0], [48.3, 521.0], [48.4, 521.0], [48.5, 521.0], [48.6, 522.0], [48.7, 522.0], [48.8, 522.0], [48.9, 522.0], [49.0, 522.0], [49.1, 522.0], [49.2, 522.0], [49.3, 523.0], [49.4, 523.0], [49.5, 523.0], [49.6, 523.0], [49.7, 523.0], [49.8, 523.0], [49.9, 523.0], [50.0, 524.0], [50.1, 524.0], [50.2, 524.0], [50.3, 525.0], [50.4, 525.0], [50.5, 525.0], [50.6, 525.0], [50.7, 525.0], [50.8, 525.0], [50.9, 525.0], [51.0, 525.0], [51.1, 526.0], [51.2, 527.0], [51.3, 528.0], [51.4, 528.0], [51.5, 528.0], [51.6, 529.0], [51.7, 529.0], [51.8, 529.0], [51.9, 530.0], [52.0, 530.0], [52.1, 530.0], [52.2, 530.0], [52.3, 530.0], [52.4, 530.0], [52.5, 530.0], [52.6, 530.0], [52.7, 532.0], [52.8, 532.0], [52.9, 532.0], [53.0, 532.0], [53.1, 533.0], [53.2, 533.0], [53.3, 533.0], [53.4, 533.0], [53.5, 534.0], [53.6, 534.0], [53.7, 535.0], [53.8, 535.0], [53.9, 536.0], [54.0, 536.0], [54.1, 536.0], [54.2, 537.0], [54.3, 539.0], [54.4, 539.0], [54.5, 540.0], [54.6, 540.0], [54.7, 540.0], [54.8, 540.0], [54.9, 542.0], [55.0, 542.0], [55.1, 542.0], [55.2, 543.0], [55.3, 545.0], [55.4, 545.0], [55.5, 545.0], [55.6, 546.0], [55.7, 546.0], [55.8, 547.0], [55.9, 547.0], [56.0, 548.0], [56.1, 549.0], [56.2, 551.0], [56.3, 551.0], [56.4, 552.0], [56.5, 555.0], [56.6, 555.0], [56.7, 555.0], [56.8, 556.0], [56.9, 558.0], [57.0, 558.0], [57.1, 563.0], [57.2, 565.0], [57.3, 565.0], [57.4, 565.0], [57.5, 566.0], [57.6, 567.0], [57.7, 569.0], [57.8, 569.0], [57.9, 569.0], [58.0, 569.0], [58.1, 570.0], [58.2, 570.0], [58.3, 570.0], [58.4, 573.0], [58.5, 573.0], [58.6, 574.0], [58.7, 576.0], [58.8, 576.0], [58.9, 576.0], [59.0, 577.0], [59.1, 578.0], [59.2, 578.0], [59.3, 578.0], [59.4, 578.0], [59.5, 580.0], [59.6, 581.0], [59.7, 581.0], [59.8, 582.0], [59.9, 583.0], [60.0, 584.0], [60.1, 584.0], [60.2, 584.0], [60.3, 585.0], [60.4, 585.0], [60.5, 586.0], [60.6, 586.0], [60.7, 586.0], [60.8, 586.0], [60.9, 589.0], [61.0, 589.0], [61.1, 589.0], [61.2, 589.0], [61.3, 589.0], [61.4, 589.0], [61.5, 590.0], [61.6, 590.0], [61.7, 591.0], [61.8, 591.0], [61.9, 591.0], [62.0, 592.0], [62.1, 593.0], [62.2, 595.0], [62.3, 595.0], [62.4, 595.0], [62.5, 596.0], [62.6, 600.0], [62.7, 600.0], [62.8, 601.0], [62.9, 601.0], [63.0, 603.0], [63.1, 603.0], [63.2, 604.0], [63.3, 607.0], [63.4, 607.0], [63.5, 608.0], [63.6, 610.0], [63.7, 612.0], [63.8, 612.0], [63.9, 616.0], [64.0, 623.0], [64.1, 625.0], [64.2, 625.0], [64.3, 625.0], [64.4, 627.0], [64.5, 627.0], [64.6, 627.0], [64.7, 629.0], [64.8, 631.0], [64.9, 632.0], [65.0, 632.0], [65.1, 633.0], [65.2, 635.0], [65.3, 635.0], [65.4, 636.0], [65.5, 638.0], [65.6, 638.0], [65.7, 638.0], [65.8, 639.0], [65.9, 639.0], [66.0, 640.0], [66.1, 640.0], [66.2, 642.0], [66.3, 642.0], [66.4, 643.0], [66.5, 643.0], [66.6, 643.0], [66.7, 644.0], [66.8, 644.0], [66.9, 645.0], [67.0, 646.0], [67.1, 647.0], [67.2, 647.0], [67.3, 647.0], [67.4, 647.0], [67.5, 648.0], [67.6, 648.0], [67.7, 649.0], [67.8, 649.0], [67.9, 651.0], [68.0, 651.0], [68.1, 651.0], [68.2, 652.0], [68.3, 653.0], [68.4, 653.0], [68.5, 653.0], [68.6, 655.0], [68.7, 655.0], [68.8, 655.0], [68.9, 656.0], [69.0, 656.0], [69.1, 656.0], [69.2, 656.0], [69.3, 656.0], [69.4, 656.0], [69.5, 656.0], [69.6, 657.0], [69.7, 657.0], [69.8, 657.0], [69.9, 657.0], [70.0, 657.0], [70.1, 658.0], [70.2, 658.0], [70.3, 659.0], [70.4, 659.0], [70.5, 659.0], [70.6, 659.0], [70.7, 660.0], [70.8, 660.0], [70.9, 661.0], [71.0, 661.0], [71.1, 664.0], [71.2, 664.0], [71.3, 664.0], [71.4, 664.0], [71.5, 664.0], [71.6, 665.0], [71.7, 665.0], [71.8, 665.0], [71.9, 665.0], [72.0, 665.0], [72.1, 665.0], [72.2, 667.0], [72.3, 667.0], [72.4, 667.0], [72.5, 667.0], [72.6, 667.0], [72.7, 668.0], [72.8, 668.0], [72.9, 668.0], [73.0, 668.0], [73.1, 669.0], [73.2, 669.0], [73.3, 669.0], [73.4, 669.0], [73.5, 670.0], [73.6, 670.0], [73.7, 670.0], [73.8, 671.0], [73.9, 671.0], [74.0, 671.0], [74.1, 674.0], [74.2, 674.0], [74.3, 674.0], [74.4, 674.0], [74.5, 674.0], [74.6, 675.0], [74.7, 676.0], [74.8, 676.0], [74.9, 676.0], [75.0, 676.0], [75.1, 676.0], [75.2, 677.0], [75.3, 678.0], [75.4, 679.0], [75.5, 679.0], [75.6, 680.0], [75.7, 680.0], [75.8, 681.0], [75.9, 681.0], [76.0, 681.0], [76.1, 681.0], [76.2, 682.0], [76.3, 682.0], [76.4, 682.0], [76.5, 683.0], [76.6, 684.0], [76.7, 684.0], [76.8, 685.0], [76.9, 685.0], [77.0, 685.0], [77.1, 686.0], [77.2, 687.0], [77.3, 687.0], [77.4, 687.0], [77.5, 688.0], [77.6, 688.0], [77.7, 689.0], [77.8, 689.0], [77.9, 690.0], [78.0, 690.0], [78.1, 691.0], [78.2, 691.0], [78.3, 691.0], [78.4, 691.0], [78.5, 691.0], [78.6, 694.0], [78.7, 695.0], [78.8, 695.0], [78.9, 695.0], [79.0, 697.0], [79.1, 697.0], [79.2, 698.0], [79.3, 698.0], [79.4, 698.0], [79.5, 698.0], [79.6, 700.0], [79.7, 700.0], [79.8, 701.0], [79.9, 702.0], [80.0, 704.0], [80.1, 704.0], [80.2, 704.0], [80.3, 705.0], [80.4, 705.0], [80.5, 706.0], [80.6, 709.0], [80.7, 710.0], [80.8, 710.0], [80.9, 712.0], [81.0, 712.0], [81.1, 713.0], [81.2, 713.0], [81.3, 715.0], [81.4, 717.0], [81.5, 717.0], [81.6, 717.0], [81.7, 718.0], [81.8, 720.0], [81.9, 720.0], [82.0, 722.0], [82.1, 724.0], [82.2, 726.0], [82.3, 726.0], [82.4, 726.0], [82.5, 731.0], [82.6, 736.0], [82.7, 736.0], [82.8, 738.0], [82.9, 739.0], [83.0, 742.0], [83.1, 742.0], [83.2, 746.0], [83.3, 751.0], [83.4, 751.0], [83.5, 752.0], [83.6, 753.0], [83.7, 753.0], [83.8, 753.0], [83.9, 754.0], [84.0, 754.0], [84.1, 755.0], [84.2, 755.0], [84.3, 755.0], [84.4, 756.0], [84.5, 757.0], [84.6, 757.0], [84.7, 757.0], [84.8, 758.0], [84.9, 758.0], [85.0, 758.0], [85.1, 758.0], [85.2, 758.0], [85.3, 758.0], [85.4, 760.0], [85.5, 762.0], [85.6, 762.0], [85.7, 762.0], [85.8, 762.0], [85.9, 763.0], [86.0, 763.0], [86.1, 763.0], [86.2, 763.0], [86.3, 764.0], [86.4, 765.0], [86.5, 765.0], [86.6, 766.0], [86.7, 767.0], [86.8, 767.0], [86.9, 767.0], [87.0, 767.0], [87.1, 768.0], [87.2, 768.0], [87.3, 769.0], [87.4, 769.0], [87.5, 770.0], [87.6, 770.0], [87.7, 772.0], [87.8, 772.0], [87.9, 775.0], [88.0, 775.0], [88.1, 776.0], [88.2, 776.0], [88.3, 776.0], [88.4, 776.0], [88.5, 777.0], [88.6, 777.0], [88.7, 777.0], [88.8, 777.0], [88.9, 777.0], [89.0, 777.0], [89.1, 777.0], [89.2, 778.0], [89.3, 778.0], [89.4, 781.0], [89.5, 781.0], [89.6, 782.0], [89.7, 783.0], [89.8, 783.0], [89.9, 783.0], [90.0, 784.0], [90.1, 784.0], [90.2, 784.0], [90.3, 785.0], [90.4, 786.0], [90.5, 786.0], [90.6, 786.0], [90.7, 786.0], [90.8, 788.0], [90.9, 790.0], [91.0, 790.0], [91.1, 792.0], [91.2, 794.0], [91.3, 797.0], [91.4, 797.0], [91.5, 800.0], [91.6, 804.0], [91.7, 804.0], [91.8, 811.0], [91.9, 813.0], [92.0, 813.0], [92.1, 813.0], [92.2, 815.0], [92.3, 816.0], [92.4, 818.0], [92.5, 818.0], [92.6, 818.0], [92.7, 828.0], [92.8, 833.0], [92.9, 833.0], [93.0, 844.0], [93.1, 849.0], [93.2, 854.0], [93.3, 854.0], [93.4, 858.0], [93.5, 858.0], [93.6, 858.0], [93.7, 868.0], [93.8, 894.0], [93.9, 906.0], [94.0, 906.0], [94.1, 909.0], [94.2, 911.0], [94.3, 912.0], [94.4, 912.0], [94.5, 918.0], [94.6, 928.0], [94.7, 946.0], [94.8, 946.0], [94.9, 946.0], [95.0, 951.0], [95.1, 951.0], [95.2, 958.0], [95.3, 966.0], [95.4, 971.0], [95.5, 971.0], [95.6, 990.0], [95.7, 991.0], [95.8, 1006.0], [95.9, 1006.0], [96.0, 1017.0], [96.1, 1019.0], [96.2, 1035.0], [96.3, 1035.0], [96.4, 1043.0], [96.5, 1046.0], [96.6, 1057.0], [96.7, 1057.0], [96.8, 1058.0], [96.9, 1063.0], [97.0, 1063.0], [97.1, 1075.0], [97.2, 1078.0], [97.3, 1104.0], [97.4, 1104.0], [97.5, 1132.0], [97.6, 1167.0], [97.7, 1184.0], [97.8, 1184.0], [97.9, 1196.0], [98.0, 1256.0], [98.1, 1278.0], [98.2, 1278.0], [98.3, 1315.0], [98.4, 1326.0], [98.5, 1326.0], [98.6, 1333.0], [98.7, 1364.0], [98.8, 1488.0], [98.9, 1488.0], [99.0, 1632.0], [99.1, 1753.0], [99.2, 1834.0], [99.3, 1834.0], [99.4, 2759.0], [99.5, 2791.0], [99.6, 2884.0], [99.7, 2884.0], [99.8, 2938.0], [99.9, 3065.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 181.0, "series": [{"data": [[600.0, 125.0], [2700.0, 2.0], [2800.0, 1.0], [700.0, 87.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 102.0], [800.0, 18.0], [900.0, 14.0], [1000.0, 11.0], [1100.0, 5.0], [300.0, 89.0], [1200.0, 2.0], [1300.0, 4.0], [1400.0, 1.0], [100.0, 28.0], [400.0, 60.0], [1600.0, 1.0], [1700.0, 1.0], [1800.0, 1.0], [500.0, 181.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 445.0, "series": [{"data": [[0.0, 282.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 445.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6026348E12, "maxY": 1.0, "series": [{"data": [[1.60263504E12, 1.0], [1.60263492E12, 1.0], [1.6026351E12, 1.0], [1.6026348E12, 1.0], [1.60263498E12, 1.0], [1.60263516E12, 1.0], [1.60263522E12, 1.0], [1.60263486E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263522E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 555.9714285714291, "minX": 1.0, "maxY": 555.9714285714291, "series": [{"data": [[1.0, 555.9714285714291]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 555.9714285714291]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 105.93333333333334, "minX": 1.6026348E12, "maxY": 353510.51666666666, "series": [{"data": [[1.60263504E12, 322802.68333333335], [1.60263492E12, 221351.38333333333], [1.6026351E12, 218000.33333333334], [1.6026348E12, 61193.1], [1.60263498E12, 243185.81666666668], [1.60263516E12, 213271.51666666666], [1.60263522E12, 202437.48333333334], [1.60263486E12, 353510.51666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263504E12, 884.5833333333334], [1.60263492E12, 695.3666666666667], [1.6026351E12, 719.0666666666667], [1.6026348E12, 105.93333333333334], [1.60263498E12, 915.8833333333333], [1.60263516E12, 831.55], [1.60263522E12, 605.3333333333334], [1.60263486E12, 765.3166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263522E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 477.45121951219505, "minX": 1.6026348E12, "maxY": 650.9021739130434, "series": [{"data": [[1.60263504E12, 503.36974789915956], [1.60263492E12, 650.9021739130434], [1.6026351E12, 621.8736842105263], [1.6026348E12, 567.1428571428571], [1.60263498E12, 490.12295081967187], [1.60263516E12, 550.7636363636366], [1.60263522E12, 477.45121951219505], [1.60263486E12, 616.9009900990098]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263522E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 476.2195121951218, "minX": 1.6026348E12, "maxY": 649.6304347826085, "series": [{"data": [[1.60263504E12, 502.1008403361345], [1.60263492E12, 649.6304347826085], [1.6026351E12, 620.8105263157895], [1.6026348E12, 565.4285714285713], [1.60263498E12, 489.2131147540981], [1.60263516E12, 549.881818181818], [1.60263522E12, 476.2195121951218], [1.60263486E12, 615.7623762376237]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263522E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01639344262295082, "minX": 1.6026348E12, "maxY": 2.357142857142857, "series": [{"data": [[1.60263504E12, 0.016806722689075633], [1.60263492E12, 0.021739130434782615], [1.6026351E12, 0.021052631578947375], [1.6026348E12, 2.357142857142857], [1.60263498E12, 0.01639344262295082], [1.60263516E12, 0.018181818181818184], [1.60263522E12, 0.024390243902439025], [1.60263486E12, 0.0297029702970297]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263522E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 170.0, "minX": 1.6026348E12, "maxY": 3065.0, "series": [{"data": [[1.60263504E12, 3065.0], [1.60263492E12, 2791.0], [1.6026351E12, 1046.0], [1.6026348E12, 2759.0], [1.60263498E12, 1834.0], [1.60263516E12, 928.0], [1.60263522E12, 1753.0], [1.60263486E12, 2938.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263504E12, 180.23999991416932], [1.60263492E12, 496.0], [1.6026351E12, 442.0], [1.6026348E12, 172.0], [1.60263498E12, 173.81899950146675], [1.60263516E12, 287.0], [1.60263522E12, 170.0], [1.60263486E12, 179.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263504E12, 180.56400003433228], [1.60263492E12, 496.0], [1.6026351E12, 442.0], [1.6026348E12, 172.0], [1.60263498E12, 175.7009001994133], [1.60263516E12, 287.0989000105858], [1.60263522E12, 170.0], [1.60263486E12, 179.0392000389099]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263504E12, 180.41999995708466], [1.60263492E12, 496.0], [1.6026351E12, 442.0], [1.6026348E12, 172.0], [1.60263498E12, 174.8644997507334], [1.60263516E12, 287.0544999867678], [1.60263522E12, 170.0], [1.60263486E12, 179.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263504E12, 180.0], [1.60263492E12, 496.0], [1.6026351E12, 442.0], [1.6026348E12, 172.0], [1.60263498E12, 172.0], [1.60263516E12, 287.0], [1.60263522E12, 170.0], [1.60263486E12, 179.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263504E12, 438.0], [1.60263492E12, 609.0], [1.6026351E12, 586.0], [1.6026348E12, 506.5], [1.60263498E12, 508.5], [1.60263516E12, 548.0], [1.60263522E12, 302.0], [1.60263486E12, 513.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263522E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 198.0, "minX": 1.0, "maxY": 681.0, "series": [{"data": [[2.0, 561.5], [1.0, 681.0], [4.0, 274.0], [5.0, 198.0], [3.0, 350.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 198.0, "minX": 1.0, "maxY": 679.5, "series": [{"data": [[2.0, 560.5], [1.0, 679.5], [4.0, 274.0], [5.0, 198.0], [3.0, 349.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.6026348E12, "maxY": 2.033333333333333, "series": [{"data": [[1.60263504E12, 1.9833333333333334], [1.60263492E12, 1.5333333333333334], [1.6026351E12, 1.5833333333333333], [1.6026348E12, 0.25], [1.60263498E12, 2.033333333333333], [1.60263516E12, 1.8333333333333333], [1.60263522E12, 1.35], [1.60263486E12, 1.6833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263522E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.6026348E12, "maxY": 2.033333333333333, "series": [{"data": [[1.60263504E12, 1.9833333333333334], [1.60263492E12, 1.5333333333333334], [1.6026351E12, 1.5833333333333333], [1.6026348E12, 0.23333333333333334], [1.60263498E12, 2.033333333333333], [1.60263516E12, 1.8333333333333333], [1.60263522E12, 1.3666666666666667], [1.60263486E12, 1.6833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263522E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.6026348E12, "maxY": 2.033333333333333, "series": [{"data": [[1.60263504E12, 1.9833333333333334], [1.60263492E12, 1.5333333333333334], [1.6026351E12, 1.5833333333333333], [1.6026348E12, 0.23333333333333334], [1.60263498E12, 2.033333333333333], [1.60263516E12, 1.8333333333333333], [1.60263522E12, 1.3666666666666667], [1.60263486E12, 1.6833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263522E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.6026348E12, "maxY": 2.033333333333333, "series": [{"data": [[1.60263504E12, 1.9833333333333334], [1.60263492E12, 1.5333333333333334], [1.6026351E12, 1.5833333333333333], [1.6026348E12, 0.23333333333333334], [1.60263498E12, 2.033333333333333], [1.60263516E12, 1.8333333333333333], [1.60263522E12, 1.3666666666666667], [1.60263486E12, 1.6833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263522E12, "title": "Total Transactions Per Second"}},
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

