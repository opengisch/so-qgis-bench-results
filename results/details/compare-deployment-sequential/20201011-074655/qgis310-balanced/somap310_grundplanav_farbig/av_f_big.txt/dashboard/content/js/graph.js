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
        data: {"result": {"minY": 169.0, "minX": 0.0, "maxY": 3826.0, "series": [{"data": [[0.0, 169.0], [0.1, 169.0], [0.2, 170.0], [0.3, 173.0], [0.4, 173.0], [0.5, 173.0], [0.6, 189.0], [0.7, 189.0], [0.8, 189.0], [0.9, 199.0], [1.0, 199.0], [1.1, 200.0], [1.2, 200.0], [1.3, 200.0], [1.4, 200.0], [1.5, 200.0], [1.6, 200.0], [1.7, 200.0], [1.8, 202.0], [1.9, 202.0], [2.0, 202.0], [2.1, 202.0], [2.2, 203.0], [2.3, 203.0], [2.4, 203.0], [2.5, 206.0], [2.6, 206.0], [2.7, 206.0], [2.8, 207.0], [2.9, 207.0], [3.0, 207.0], [3.1, 207.0], [3.2, 208.0], [3.3, 209.0], [3.4, 209.0], [3.5, 209.0], [3.6, 210.0], [3.7, 210.0], [3.8, 210.0], [3.9, 212.0], [4.0, 212.0], [4.1, 212.0], [4.2, 212.0], [4.3, 213.0], [4.4, 214.0], [4.5, 214.0], [4.6, 214.0], [4.7, 214.0], [4.8, 214.0], [4.9, 215.0], [5.0, 215.0], [5.1, 215.0], [5.2, 216.0], [5.3, 216.0], [5.4, 217.0], [5.5, 217.0], [5.6, 219.0], [5.7, 219.0], [5.8, 220.0], [5.9, 220.0], [6.0, 221.0], [6.1, 221.0], [6.2, 222.0], [6.3, 223.0], [6.4, 223.0], [6.5, 223.0], [6.6, 226.0], [6.7, 228.0], [6.8, 228.0], [6.9, 228.0], [7.0, 228.0], [7.1, 230.0], [7.2, 230.0], [7.3, 230.0], [7.4, 252.0], [7.5, 259.0], [7.6, 259.0], [7.7, 261.0], [7.8, 262.0], [7.9, 262.0], [8.0, 262.0], [8.1, 263.0], [8.2, 267.0], [8.3, 268.0], [8.4, 268.0], [8.5, 270.0], [8.6, 270.0], [8.7, 270.0], [8.8, 272.0], [8.9, 272.0], [9.0, 272.0], [9.1, 272.0], [9.2, 273.0], [9.3, 276.0], [9.4, 279.0], [9.5, 279.0], [9.6, 280.0], [9.7, 280.0], [9.8, 281.0], [9.9, 281.0], [10.0, 281.0], [10.1, 282.0], [10.2, 282.0], [10.3, 282.0], [10.4, 282.0], [10.5, 283.0], [10.6, 283.0], [10.7, 283.0], [10.8, 284.0], [10.9, 285.0], [11.0, 285.0], [11.1, 286.0], [11.2, 287.0], [11.3, 287.0], [11.4, 287.0], [11.5, 287.0], [11.6, 288.0], [11.7, 288.0], [11.8, 288.0], [11.9, 288.0], [12.0, 288.0], [12.1, 288.0], [12.2, 288.0], [12.3, 289.0], [12.4, 290.0], [12.5, 290.0], [12.6, 290.0], [12.7, 290.0], [12.8, 290.0], [12.9, 290.0], [13.0, 290.0], [13.1, 291.0], [13.2, 291.0], [13.3, 291.0], [13.4, 291.0], [13.5, 292.0], [13.6, 292.0], [13.7, 292.0], [13.8, 292.0], [13.9, 293.0], [14.0, 293.0], [14.1, 293.0], [14.2, 293.0], [14.3, 294.0], [14.4, 294.0], [14.5, 294.0], [14.6, 294.0], [14.7, 294.0], [14.8, 294.0], [14.9, 294.0], [15.0, 295.0], [15.1, 295.0], [15.2, 295.0], [15.3, 295.0], [15.4, 296.0], [15.5, 296.0], [15.6, 296.0], [15.7, 296.0], [15.8, 297.0], [15.9, 297.0], [16.0, 297.0], [16.1, 298.0], [16.2, 299.0], [16.3, 299.0], [16.4, 300.0], [16.5, 301.0], [16.6, 301.0], [16.7, 301.0], [16.8, 302.0], [16.9, 302.0], [17.0, 302.0], [17.1, 303.0], [17.2, 303.0], [17.3, 304.0], [17.4, 304.0], [17.5, 304.0], [17.6, 306.0], [17.7, 306.0], [17.8, 306.0], [17.9, 307.0], [18.0, 308.0], [18.1, 311.0], [18.2, 311.0], [18.3, 313.0], [18.4, 313.0], [18.5, 313.0], [18.6, 314.0], [18.7, 315.0], [18.8, 316.0], [18.9, 316.0], [19.0, 316.0], [19.1, 318.0], [19.2, 319.0], [19.3, 319.0], [19.4, 320.0], [19.5, 322.0], [19.6, 322.0], [19.7, 322.0], [19.8, 328.0], [19.9, 329.0], [20.0, 331.0], [20.1, 331.0], [20.2, 331.0], [20.3, 337.0], [20.4, 337.0], [20.5, 337.0], [20.6, 339.0], [20.7, 340.0], [20.8, 340.0], [20.9, 341.0], [21.0, 343.0], [21.1, 345.0], [21.2, 345.0], [21.3, 350.0], [21.4, 354.0], [21.5, 354.0], [21.6, 354.0], [21.7, 354.0], [21.8, 355.0], [21.9, 355.0], [22.0, 355.0], [22.1, 358.0], [22.2, 359.0], [22.3, 359.0], [22.4, 359.0], [22.5, 360.0], [22.6, 362.0], [22.7, 362.0], [22.8, 364.0], [22.9, 364.0], [23.0, 364.0], [23.1, 364.0], [23.2, 364.0], [23.3, 364.0], [23.4, 364.0], [23.5, 365.0], [23.6, 366.0], [23.7, 366.0], [23.8, 366.0], [23.9, 366.0], [24.0, 367.0], [24.1, 367.0], [24.2, 367.0], [24.3, 367.0], [24.4, 368.0], [24.5, 368.0], [24.6, 368.0], [24.7, 370.0], [24.8, 370.0], [24.9, 371.0], [25.0, 371.0], [25.1, 371.0], [25.2, 371.0], [25.3, 371.0], [25.4, 371.0], [25.5, 371.0], [25.6, 372.0], [25.7, 372.0], [25.8, 372.0], [25.9, 372.0], [26.0, 374.0], [26.1, 374.0], [26.2, 375.0], [26.3, 376.0], [26.4, 379.0], [26.5, 379.0], [26.6, 382.0], [26.7, 383.0], [26.8, 383.0], [26.9, 384.0], [27.0, 385.0], [27.1, 386.0], [27.2, 386.0], [27.3, 387.0], [27.4, 388.0], [27.5, 394.0], [27.6, 394.0], [27.7, 394.0], [27.8, 396.0], [27.9, 396.0], [28.0, 396.0], [28.1, 397.0], [28.2, 399.0], [28.3, 399.0], [28.4, 399.0], [28.5, 402.0], [28.6, 402.0], [28.7, 402.0], [28.8, 403.0], [28.9, 404.0], [29.0, 412.0], [29.1, 412.0], [29.2, 417.0], [29.3, 422.0], [29.4, 424.0], [29.5, 424.0], [29.6, 425.0], [29.7, 428.0], [29.8, 431.0], [29.9, 431.0], [30.0, 432.0], [30.1, 432.0], [30.2, 432.0], [30.3, 435.0], [30.4, 436.0], [30.5, 436.0], [30.6, 436.0], [30.7, 439.0], [30.8, 441.0], [30.9, 442.0], [31.0, 442.0], [31.1, 443.0], [31.2, 444.0], [31.3, 444.0], [31.4, 444.0], [31.5, 446.0], [31.6, 446.0], [31.7, 446.0], [31.8, 447.0], [31.9, 448.0], [32.0, 450.0], [32.1, 450.0], [32.2, 450.0], [32.3, 452.0], [32.4, 452.0], [32.5, 452.0], [32.6, 453.0], [32.7, 455.0], [32.8, 456.0], [32.9, 456.0], [33.0, 458.0], [33.1, 458.0], [33.2, 459.0], [33.3, 459.0], [33.4, 459.0], [33.5, 461.0], [33.6, 461.0], [33.7, 462.0], [33.8, 462.0], [33.9, 464.0], [34.0, 464.0], [34.1, 465.0], [34.2, 466.0], [34.3, 466.0], [34.4, 466.0], [34.5, 468.0], [34.6, 470.0], [34.7, 473.0], [34.8, 473.0], [34.9, 474.0], [35.0, 480.0], [35.1, 480.0], [35.2, 481.0], [35.3, 487.0], [35.4, 494.0], [35.5, 494.0], [35.6, 494.0], [35.7, 495.0], [35.8, 496.0], [35.9, 496.0], [36.0, 497.0], [36.1, 499.0], [36.2, 501.0], [36.3, 501.0], [36.4, 501.0], [36.5, 502.0], [36.6, 502.0], [36.7, 502.0], [36.8, 503.0], [36.9, 505.0], [37.0, 505.0], [37.1, 505.0], [37.2, 506.0], [37.3, 506.0], [37.4, 506.0], [37.5, 507.0], [37.6, 507.0], [37.7, 508.0], [37.8, 508.0], [37.9, 509.0], [38.0, 509.0], [38.1, 509.0], [38.2, 509.0], [38.3, 509.0], [38.4, 510.0], [38.5, 510.0], [38.6, 510.0], [38.7, 510.0], [38.8, 511.0], [38.9, 511.0], [39.0, 511.0], [39.1, 513.0], [39.2, 513.0], [39.3, 513.0], [39.4, 514.0], [39.5, 514.0], [39.6, 516.0], [39.7, 516.0], [39.8, 516.0], [39.9, 516.0], [40.0, 517.0], [40.1, 517.0], [40.2, 517.0], [40.3, 518.0], [40.4, 518.0], [40.5, 518.0], [40.6, 519.0], [40.7, 519.0], [40.8, 519.0], [40.9, 519.0], [41.0, 519.0], [41.1, 519.0], [41.2, 519.0], [41.3, 521.0], [41.4, 522.0], [41.5, 522.0], [41.6, 522.0], [41.7, 522.0], [41.8, 522.0], [41.9, 522.0], [42.0, 522.0], [42.1, 522.0], [42.2, 523.0], [42.3, 523.0], [42.4, 523.0], [42.5, 523.0], [42.6, 523.0], [42.7, 523.0], [42.8, 523.0], [42.9, 523.0], [43.0, 523.0], [43.1, 523.0], [43.2, 524.0], [43.3, 524.0], [43.4, 524.0], [43.5, 525.0], [43.6, 525.0], [43.7, 525.0], [43.8, 525.0], [43.9, 526.0], [44.0, 526.0], [44.1, 526.0], [44.2, 526.0], [44.3, 526.0], [44.4, 527.0], [44.5, 527.0], [44.6, 527.0], [44.7, 528.0], [44.8, 528.0], [44.9, 528.0], [45.0, 528.0], [45.1, 529.0], [45.2, 529.0], [45.3, 529.0], [45.4, 529.0], [45.5, 529.0], [45.6, 529.0], [45.7, 529.0], [45.8, 529.0], [45.9, 529.0], [46.0, 530.0], [46.1, 530.0], [46.2, 531.0], [46.3, 531.0], [46.4, 531.0], [46.5, 531.0], [46.6, 531.0], [46.7, 531.0], [46.8, 531.0], [46.9, 532.0], [47.0, 532.0], [47.1, 533.0], [47.2, 533.0], [47.3, 533.0], [47.4, 533.0], [47.5, 533.0], [47.6, 533.0], [47.7, 533.0], [47.8, 533.0], [47.9, 534.0], [48.0, 534.0], [48.1, 534.0], [48.2, 534.0], [48.3, 534.0], [48.4, 534.0], [48.5, 534.0], [48.6, 535.0], [48.7, 535.0], [48.8, 535.0], [48.9, 535.0], [49.0, 535.0], [49.1, 535.0], [49.2, 535.0], [49.3, 536.0], [49.4, 536.0], [49.5, 536.0], [49.6, 538.0], [49.7, 538.0], [49.8, 539.0], [49.9, 539.0], [50.0, 539.0], [50.1, 540.0], [50.2, 540.0], [50.3, 540.0], [50.4, 541.0], [50.5, 541.0], [50.6, 541.0], [50.7, 542.0], [50.8, 542.0], [50.9, 542.0], [51.0, 542.0], [51.1, 543.0], [51.2, 543.0], [51.3, 544.0], [51.4, 544.0], [51.5, 544.0], [51.6, 544.0], [51.7, 544.0], [51.8, 545.0], [51.9, 545.0], [52.0, 545.0], [52.1, 545.0], [52.2, 546.0], [52.3, 547.0], [52.4, 547.0], [52.5, 547.0], [52.6, 547.0], [52.7, 548.0], [52.8, 549.0], [52.9, 549.0], [53.0, 551.0], [53.1, 552.0], [53.2, 552.0], [53.3, 552.0], [53.4, 552.0], [53.5, 553.0], [53.6, 553.0], [53.7, 554.0], [53.8, 554.0], [53.9, 554.0], [54.0, 554.0], [54.1, 555.0], [54.2, 556.0], [54.3, 557.0], [54.4, 557.0], [54.5, 558.0], [54.6, 560.0], [54.7, 560.0], [54.8, 560.0], [54.9, 561.0], [55.0, 562.0], [55.1, 562.0], [55.2, 562.0], [55.3, 565.0], [55.4, 569.0], [55.5, 569.0], [55.6, 569.0], [55.7, 569.0], [55.8, 569.0], [55.9, 569.0], [56.0, 570.0], [56.1, 571.0], [56.2, 571.0], [56.3, 571.0], [56.4, 573.0], [56.5, 573.0], [56.6, 573.0], [56.7, 573.0], [56.8, 573.0], [56.9, 574.0], [57.0, 574.0], [57.1, 574.0], [57.2, 574.0], [57.3, 575.0], [57.4, 575.0], [57.5, 575.0], [57.6, 575.0], [57.7, 576.0], [57.8, 576.0], [57.9, 576.0], [58.0, 579.0], [58.1, 580.0], [58.2, 580.0], [58.3, 584.0], [58.4, 584.0], [58.5, 584.0], [58.6, 585.0], [58.7, 586.0], [58.8, 586.0], [58.9, 586.0], [59.0, 587.0], [59.1, 588.0], [59.2, 588.0], [59.3, 588.0], [59.4, 588.0], [59.5, 589.0], [59.6, 590.0], [59.7, 590.0], [59.8, 590.0], [59.9, 591.0], [60.0, 591.0], [60.1, 591.0], [60.2, 592.0], [60.3, 595.0], [60.4, 595.0], [60.5, 596.0], [60.6, 597.0], [60.7, 597.0], [60.8, 597.0], [60.9, 600.0], [61.0, 601.0], [61.1, 601.0], [61.2, 601.0], [61.3, 603.0], [61.4, 606.0], [61.5, 606.0], [61.6, 606.0], [61.7, 608.0], [61.8, 610.0], [61.9, 610.0], [62.0, 610.0], [62.1, 611.0], [62.2, 613.0], [62.3, 613.0], [62.4, 615.0], [62.5, 617.0], [62.6, 627.0], [62.7, 627.0], [62.8, 627.0], [62.9, 627.0], [63.0, 628.0], [63.1, 628.0], [63.2, 629.0], [63.3, 629.0], [63.4, 629.0], [63.5, 630.0], [63.6, 630.0], [63.7, 630.0], [63.8, 630.0], [63.9, 633.0], [64.0, 634.0], [64.1, 634.0], [64.2, 634.0], [64.3, 636.0], [64.4, 636.0], [64.5, 643.0], [64.6, 643.0], [64.7, 644.0], [64.8, 645.0], [64.9, 647.0], [65.0, 647.0], [65.1, 649.0], [65.2, 649.0], [65.3, 649.0], [65.4, 650.0], [65.5, 651.0], [65.6, 652.0], [65.7, 652.0], [65.8, 652.0], [65.9, 654.0], [66.0, 655.0], [66.1, 655.0], [66.2, 655.0], [66.3, 655.0], [66.4, 656.0], [66.5, 656.0], [66.6, 657.0], [66.7, 657.0], [66.8, 657.0], [66.9, 658.0], [67.0, 659.0], [67.1, 659.0], [67.2, 659.0], [67.3, 660.0], [67.4, 661.0], [67.5, 661.0], [67.6, 661.0], [67.7, 661.0], [67.8, 662.0], [67.9, 663.0], [68.0, 663.0], [68.1, 663.0], [68.2, 664.0], [68.3, 664.0], [68.4, 664.0], [68.5, 664.0], [68.6, 664.0], [68.7, 664.0], [68.8, 665.0], [68.9, 665.0], [69.0, 666.0], [69.1, 666.0], [69.2, 666.0], [69.3, 666.0], [69.4, 667.0], [69.5, 667.0], [69.6, 667.0], [69.7, 669.0], [69.8, 669.0], [69.9, 669.0], [70.0, 669.0], [70.1, 669.0], [70.2, 669.0], [70.3, 669.0], [70.4, 669.0], [70.5, 669.0], [70.6, 669.0], [70.7, 670.0], [70.8, 670.0], [70.9, 670.0], [71.0, 670.0], [71.1, 670.0], [71.2, 671.0], [71.3, 672.0], [71.4, 672.0], [71.5, 672.0], [71.6, 672.0], [71.7, 672.0], [71.8, 673.0], [71.9, 673.0], [72.0, 673.0], [72.1, 673.0], [72.2, 674.0], [72.3, 674.0], [72.4, 674.0], [72.5, 674.0], [72.6, 675.0], [72.7, 676.0], [72.8, 676.0], [72.9, 676.0], [73.0, 676.0], [73.1, 677.0], [73.2, 678.0], [73.3, 678.0], [73.4, 678.0], [73.5, 679.0], [73.6, 679.0], [73.7, 679.0], [73.8, 680.0], [73.9, 681.0], [74.0, 681.0], [74.1, 682.0], [74.2, 682.0], [74.3, 683.0], [74.4, 683.0], [74.5, 684.0], [74.6, 684.0], [74.7, 684.0], [74.8, 684.0], [74.9, 684.0], [75.0, 685.0], [75.1, 685.0], [75.2, 685.0], [75.3, 686.0], [75.4, 686.0], [75.5, 686.0], [75.6, 688.0], [75.7, 688.0], [75.8, 688.0], [75.9, 688.0], [76.0, 689.0], [76.1, 689.0], [76.2, 689.0], [76.3, 689.0], [76.4, 690.0], [76.5, 690.0], [76.6, 691.0], [76.7, 691.0], [76.8, 691.0], [76.9, 692.0], [77.0, 692.0], [77.1, 694.0], [77.2, 694.0], [77.3, 695.0], [77.4, 695.0], [77.5, 696.0], [77.6, 699.0], [77.7, 699.0], [77.8, 699.0], [77.9, 701.0], [78.0, 702.0], [78.1, 703.0], [78.2, 703.0], [78.3, 706.0], [78.4, 706.0], [78.5, 706.0], [78.6, 706.0], [78.7, 708.0], [78.8, 709.0], [78.9, 709.0], [79.0, 709.0], [79.1, 710.0], [79.2, 710.0], [79.3, 710.0], [79.4, 713.0], [79.5, 716.0], [79.6, 716.0], [79.7, 716.0], [79.8, 716.0], [79.9, 717.0], [80.0, 717.0], [80.1, 717.0], [80.2, 718.0], [80.3, 718.0], [80.4, 718.0], [80.5, 722.0], [80.6, 724.0], [80.7, 726.0], [80.8, 726.0], [80.9, 726.0], [81.0, 732.0], [81.1, 743.0], [81.2, 743.0], [81.3, 744.0], [81.4, 744.0], [81.5, 748.0], [81.6, 748.0], [81.7, 748.0], [81.8, 750.0], [81.9, 750.0], [82.0, 751.0], [82.1, 753.0], [82.2, 753.0], [82.3, 753.0], [82.4, 758.0], [82.5, 758.0], [82.6, 760.0], [82.7, 760.0], [82.8, 763.0], [82.9, 763.0], [83.0, 763.0], [83.1, 763.0], [83.2, 764.0], [83.3, 765.0], [83.4, 765.0], [83.5, 765.0], [83.6, 766.0], [83.7, 766.0], [83.8, 766.0], [83.9, 768.0], [84.0, 770.0], [84.1, 770.0], [84.2, 770.0], [84.3, 774.0], [84.4, 774.0], [84.5, 774.0], [84.6, 774.0], [84.7, 775.0], [84.8, 775.0], [84.9, 776.0], [85.0, 776.0], [85.1, 776.0], [85.2, 777.0], [85.3, 777.0], [85.4, 777.0], [85.5, 780.0], [85.6, 781.0], [85.7, 781.0], [85.8, 781.0], [85.9, 782.0], [86.0, 787.0], [86.1, 787.0], [86.2, 787.0], [86.3, 787.0], [86.4, 787.0], [86.5, 787.0], [86.6, 788.0], [86.7, 788.0], [86.8, 788.0], [86.9, 788.0], [87.0, 789.0], [87.1, 790.0], [87.2, 790.0], [87.3, 790.0], [87.4, 790.0], [87.5, 790.0], [87.6, 790.0], [87.7, 794.0], [87.8, 794.0], [87.9, 796.0], [88.0, 796.0], [88.1, 796.0], [88.2, 796.0], [88.3, 797.0], [88.4, 797.0], [88.5, 800.0], [88.6, 801.0], [88.7, 801.0], [88.8, 802.0], [88.9, 802.0], [89.0, 804.0], [89.1, 804.0], [89.2, 804.0], [89.3, 805.0], [89.4, 806.0], [89.5, 806.0], [89.6, 806.0], [89.7, 807.0], [89.8, 808.0], [89.9, 808.0], [90.0, 813.0], [90.1, 818.0], [90.2, 818.0], [90.3, 819.0], [90.4, 823.0], [90.5, 823.0], [90.6, 823.0], [90.7, 824.0], [90.8, 824.0], [90.9, 825.0], [91.0, 825.0], [91.1, 827.0], [91.2, 829.0], [91.3, 830.0], [91.4, 830.0], [91.5, 834.0], [91.6, 834.0], [91.7, 834.0], [91.8, 836.0], [91.9, 836.0], [92.0, 837.0], [92.1, 837.0], [92.2, 838.0], [92.3, 841.0], [92.4, 842.0], [92.5, 842.0], [92.6, 844.0], [92.7, 850.0], [92.8, 853.0], [92.9, 853.0], [93.0, 862.0], [93.1, 863.0], [93.2, 874.0], [93.3, 874.0], [93.4, 891.0], [93.5, 896.0], [93.6, 896.0], [93.7, 903.0], [93.8, 904.0], [93.9, 907.0], [94.0, 907.0], [94.1, 910.0], [94.2, 915.0], [94.3, 934.0], [94.4, 934.0], [94.5, 952.0], [94.6, 956.0], [94.7, 964.0], [94.8, 964.0], [94.9, 965.0], [95.0, 966.0], [95.1, 966.0], [95.2, 969.0], [95.3, 979.0], [95.4, 994.0], [95.5, 994.0], [95.6, 1031.0], [95.7, 1036.0], [95.8, 1041.0], [95.9, 1041.0], [96.0, 1047.0], [96.1, 1074.0], [96.2, 1080.0], [96.3, 1080.0], [96.4, 1094.0], [96.5, 1097.0], [96.6, 1102.0], [96.7, 1102.0], [96.8, 1105.0], [96.9, 1107.0], [97.0, 1107.0], [97.1, 1114.0], [97.2, 1133.0], [97.3, 1146.0], [97.4, 1146.0], [97.5, 1156.0], [97.6, 1180.0], [97.7, 1217.0], [97.8, 1217.0], [97.9, 1265.0], [98.0, 1320.0], [98.1, 1342.0], [98.2, 1342.0], [98.3, 1353.0], [98.4, 1357.0], [98.5, 1357.0], [98.6, 1363.0], [98.7, 1433.0], [98.8, 1496.0], [98.9, 1496.0], [99.0, 1755.0], [99.1, 1802.0], [99.2, 1831.0], [99.3, 1831.0], [99.4, 2787.0], [99.5, 2796.0], [99.6, 2967.0], [99.7, 2967.0], [99.8, 3130.0], [99.9, 3826.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 181.0, "series": [{"data": [[600.0, 125.0], [700.0, 78.0], [2700.0, 2.0], [2900.0, 1.0], [3100.0, 1.0], [200.0, 112.0], [800.0, 38.0], [900.0, 14.0], [3800.0, 1.0], [1000.0, 8.0], [1100.0, 8.0], [300.0, 89.0], [1200.0, 2.0], [1300.0, 5.0], [1400.0, 2.0], [400.0, 57.0], [100.0, 8.0], [1700.0, 1.0], [1800.0, 2.0], [500.0, 181.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 461.0, "series": [{"data": [[0.0, 266.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 461.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60240338E12, "maxY": 1.0, "series": [{"data": [[1.6024038E12, 1.0], [1.6024035E12, 1.0], [1.60240344E12, 1.0], [1.60240362E12, 1.0], [1.60240356E12, 1.0], [1.60240374E12, 1.0], [1.60240368E12, 1.0], [1.60240338E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024038E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 573.7659863945581, "minX": 1.0, "maxY": 573.7659863945581, "series": [{"data": [[1.0, 573.7659863945581]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 573.7659863945581]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 175.0, "minX": 1.60240338E12, "maxY": 318452.25, "series": [{"data": [[1.6024038E12, 212921.5], [1.6024035E12, 218699.86666666667], [1.60240344E12, 308426.95], [1.60240362E12, 318452.25], [1.60240356E12, 234606.13333333333], [1.60240374E12, 210790.33333333334], [1.60240368E12, 212985.66666666666], [1.60240338E12, 118879.53333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6024038E12, 695.9], [1.6024035E12, 680.2833333333333], [1.60240344E12, 741.55], [1.60240362E12, 849.7833333333333], [1.60240356E12, 912.9166666666666], [1.60240374E12, 756.1166666666667], [1.60240368E12, 711.4833333333333], [1.60240338E12, 175.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024038E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 479.68085106382995, "minX": 1.60240338E12, "maxY": 757.5217391304348, "series": [{"data": [[1.6024038E12, 479.68085106382995], [1.6024035E12, 667.8222222222225], [1.60240344E12, 604.3571428571428], [1.60240362E12, 525.1140350877195], [1.60240356E12, 493.5737704918034], [1.60240374E12, 599.4699999999999], [1.60240368E12, 636.6808510638298], [1.60240338E12, 757.5217391304348]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024038E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 478.6595744680853, "minX": 1.60240338E12, "maxY": 755.9130434782609, "series": [{"data": [[1.6024038E12, 478.6595744680853], [1.6024035E12, 666.5666666666668], [1.60240344E12, 603.1836734693878], [1.60240362E12, 523.842105263158], [1.60240356E12, 492.5983606557375], [1.60240374E12, 598.5600000000001], [1.60240368E12, 635.6063829787233], [1.60240338E12, 755.9130434782609]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024038E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010000000000000002, "minX": 1.60240338E12, "maxY": 1.6956521739130432, "series": [{"data": [[1.6024038E12, 0.010638297872340429], [1.6024035E12, 0.022222222222222227], [1.60240344E12, 0.03061224489795918], [1.60240362E12, 0.01754385964912281], [1.60240356E12, 0.02459016393442623], [1.60240374E12, 0.010000000000000002], [1.60240368E12, 0.010638297872340429], [1.60240338E12, 1.6956521739130432]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024038E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 169.0, "minX": 1.60240338E12, "maxY": 3826.0, "series": [{"data": [[1.6024038E12, 1831.0], [1.6024035E12, 2787.0], [1.60240344E12, 2796.0], [1.60240362E12, 3130.0], [1.60240356E12, 1755.0], [1.60240374E12, 965.0], [1.60240368E12, 1133.0], [1.60240338E12, 3826.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6024038E12, 210.0], [1.6024035E12, 495.0], [1.60240344E12, 200.0], [1.60240362E12, 189.34999972581863], [1.60240356E12, 169.1069999706745], [1.60240374E12, 281.0], [1.60240368E12, 462.0], [1.60240338E12, 209.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6024038E12, 210.0], [1.6024035E12, 495.0], [1.60240344E12, 200.0], [1.60240362E12, 190.38500010967255], [1.60240356E12, 169.2177000117302], [1.60240374E12, 281.0], [1.60240368E12, 462.0], [1.60240338E12, 209.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6024038E12, 210.0], [1.6024035E12, 495.0], [1.60240344E12, 200.0], [1.60240362E12, 189.92499986290932], [1.60240356E12, 169.16849998533726], [1.60240374E12, 281.0], [1.60240368E12, 462.0], [1.60240338E12, 209.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6024038E12, 210.0], [1.6024035E12, 495.0], [1.60240344E12, 200.0], [1.60240362E12, 189.0], [1.60240356E12, 169.0], [1.60240374E12, 281.0], [1.60240368E12, 462.0], [1.60240338E12, 209.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6024038E12, 354.0], [1.6024035E12, 633.0], [1.60240344E12, 533.0], [1.60240362E12, 458.5], [1.60240356E12, 403.0], [1.60240374E12, 589.0], [1.60240368E12, 622.0], [1.60240338E12, 519.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024038E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 194.5, "minX": 1.0, "maxY": 704.0, "series": [{"data": [[2.0, 558.5], [1.0, 704.0], [4.0, 288.5], [5.0, 194.5], [3.0, 355.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 194.5, "minX": 1.0, "maxY": 703.0, "series": [{"data": [[2.0, 557.5], [1.0, 703.0], [4.0, 288.5], [5.0, 194.5], [3.0, 354.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.60240338E12, "maxY": 2.033333333333333, "series": [{"data": [[1.6024038E12, 1.55], [1.6024035E12, 1.5], [1.60240344E12, 1.6333333333333333], [1.60240362E12, 1.9], [1.60240356E12, 2.033333333333333], [1.60240374E12, 1.6666666666666667], [1.60240368E12, 1.5666666666666667], [1.60240338E12, 0.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024038E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60240338E12, "maxY": 2.033333333333333, "series": [{"data": [[1.6024038E12, 1.5666666666666667], [1.6024035E12, 1.5], [1.60240344E12, 1.6333333333333333], [1.60240362E12, 1.9], [1.60240356E12, 2.033333333333333], [1.60240374E12, 1.6666666666666667], [1.60240368E12, 1.5666666666666667], [1.60240338E12, 0.38333333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024038E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60240338E12, "maxY": 2.033333333333333, "series": [{"data": [[1.6024038E12, 1.5666666666666667], [1.6024035E12, 1.5], [1.60240344E12, 1.6333333333333333], [1.60240362E12, 1.9], [1.60240356E12, 2.033333333333333], [1.60240374E12, 1.6666666666666667], [1.60240368E12, 1.5666666666666667], [1.60240338E12, 0.38333333333333336]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024038E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60240338E12, "maxY": 2.033333333333333, "series": [{"data": [[1.6024038E12, 1.5666666666666667], [1.6024035E12, 1.5], [1.60240344E12, 1.6333333333333333], [1.60240362E12, 1.9], [1.60240356E12, 2.033333333333333], [1.60240374E12, 1.6666666666666667], [1.60240368E12, 1.5666666666666667], [1.60240338E12, 0.38333333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024038E12, "title": "Total Transactions Per Second"}},
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

