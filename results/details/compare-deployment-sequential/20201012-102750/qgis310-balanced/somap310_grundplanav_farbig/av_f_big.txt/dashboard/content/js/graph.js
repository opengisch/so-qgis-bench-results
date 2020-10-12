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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 3096.0, "series": [{"data": [[0.0, 175.0], [0.1, 175.0], [0.2, 186.0], [0.3, 186.0], [0.4, 186.0], [0.5, 187.0], [0.6, 187.0], [0.7, 188.0], [0.8, 188.0], [0.9, 188.0], [1.0, 190.0], [1.1, 193.0], [1.2, 193.0], [1.3, 195.0], [1.4, 195.0], [1.5, 198.0], [1.6, 198.0], [1.7, 200.0], [1.8, 201.0], [1.9, 201.0], [2.0, 201.0], [2.1, 201.0], [2.2, 202.0], [2.3, 202.0], [2.4, 203.0], [2.5, 203.0], [2.6, 203.0], [2.7, 203.0], [2.8, 204.0], [2.9, 204.0], [3.0, 204.0], [3.1, 204.0], [3.2, 204.0], [3.3, 204.0], [3.4, 204.0], [3.5, 208.0], [3.6, 208.0], [3.7, 208.0], [3.8, 208.0], [3.9, 209.0], [4.0, 211.0], [4.1, 211.0], [4.2, 211.0], [4.3, 212.0], [4.4, 212.0], [4.5, 215.0], [4.6, 215.0], [4.7, 215.0], [4.8, 216.0], [4.9, 219.0], [5.0, 219.0], [5.1, 220.0], [5.2, 221.0], [5.3, 221.0], [5.4, 222.0], [5.5, 223.0], [5.6, 223.0], [5.7, 223.0], [5.8, 224.0], [5.9, 224.0], [6.0, 224.0], [6.1, 224.0], [6.2, 224.0], [6.3, 227.0], [6.4, 228.0], [6.5, 228.0], [6.6, 228.0], [6.7, 229.0], [6.8, 229.0], [6.9, 230.0], [7.0, 232.0], [7.1, 235.0], [7.2, 235.0], [7.3, 248.0], [7.4, 252.0], [7.5, 252.0], [7.6, 252.0], [7.7, 254.0], [7.8, 254.0], [7.9, 262.0], [8.0, 262.0], [8.1, 263.0], [8.2, 264.0], [8.3, 266.0], [8.4, 266.0], [8.5, 269.0], [8.6, 271.0], [8.7, 271.0], [8.8, 273.0], [8.9, 275.0], [9.0, 275.0], [9.1, 275.0], [9.2, 277.0], [9.3, 278.0], [9.4, 278.0], [9.5, 278.0], [9.6, 280.0], [9.7, 280.0], [9.8, 281.0], [9.9, 281.0], [10.0, 281.0], [10.1, 281.0], [10.2, 281.0], [10.3, 282.0], [10.4, 282.0], [10.5, 282.0], [10.6, 282.0], [10.7, 283.0], [10.8, 283.0], [10.9, 283.0], [11.0, 283.0], [11.1, 284.0], [11.2, 284.0], [11.3, 284.0], [11.4, 284.0], [11.5, 285.0], [11.6, 285.0], [11.7, 285.0], [11.8, 286.0], [11.9, 286.0], [12.0, 286.0], [12.1, 286.0], [12.2, 286.0], [12.3, 288.0], [12.4, 289.0], [12.5, 289.0], [12.6, 290.0], [12.7, 291.0], [12.8, 291.0], [12.9, 291.0], [13.0, 291.0], [13.1, 292.0], [13.2, 292.0], [13.3, 292.0], [13.4, 294.0], [13.5, 294.0], [13.6, 294.0], [13.7, 294.0], [13.8, 295.0], [13.9, 295.0], [14.0, 295.0], [14.1, 296.0], [14.2, 296.0], [14.3, 296.0], [14.4, 296.0], [14.5, 297.0], [14.6, 298.0], [14.7, 299.0], [14.8, 299.0], [14.9, 299.0], [15.0, 300.0], [15.1, 300.0], [15.2, 301.0], [15.3, 303.0], [15.4, 304.0], [15.5, 304.0], [15.6, 304.0], [15.7, 304.0], [15.8, 304.0], [15.9, 304.0], [16.0, 305.0], [16.1, 306.0], [16.2, 307.0], [16.3, 307.0], [16.4, 307.0], [16.5, 307.0], [16.6, 308.0], [16.7, 308.0], [16.8, 308.0], [16.9, 310.0], [17.0, 310.0], [17.1, 311.0], [17.2, 312.0], [17.3, 312.0], [17.4, 312.0], [17.5, 313.0], [17.6, 313.0], [17.7, 314.0], [17.8, 314.0], [17.9, 314.0], [18.0, 314.0], [18.1, 316.0], [18.2, 316.0], [18.3, 318.0], [18.4, 319.0], [18.5, 319.0], [18.6, 319.0], [18.7, 319.0], [18.8, 320.0], [18.9, 320.0], [19.0, 321.0], [19.1, 321.0], [19.2, 322.0], [19.3, 322.0], [19.4, 325.0], [19.5, 326.0], [19.6, 328.0], [19.7, 328.0], [19.8, 334.0], [19.9, 336.0], [20.0, 337.0], [20.1, 337.0], [20.2, 340.0], [20.3, 341.0], [20.4, 341.0], [20.5, 342.0], [20.6, 343.0], [20.7, 346.0], [20.8, 346.0], [20.9, 347.0], [21.0, 348.0], [21.1, 349.0], [21.2, 349.0], [21.3, 354.0], [21.4, 354.0], [21.5, 355.0], [21.6, 355.0], [21.7, 355.0], [21.8, 356.0], [21.9, 356.0], [22.0, 356.0], [22.1, 356.0], [22.2, 357.0], [22.3, 357.0], [22.4, 357.0], [22.5, 357.0], [22.6, 358.0], [22.7, 358.0], [22.8, 358.0], [22.9, 359.0], [23.0, 360.0], [23.1, 360.0], [23.2, 360.0], [23.3, 360.0], [23.4, 360.0], [23.5, 361.0], [23.6, 361.0], [23.7, 362.0], [23.8, 362.0], [23.9, 363.0], [24.0, 363.0], [24.1, 364.0], [24.2, 364.0], [24.3, 365.0], [24.4, 366.0], [24.5, 367.0], [24.6, 367.0], [24.7, 368.0], [24.8, 369.0], [24.9, 370.0], [25.0, 370.0], [25.1, 371.0], [25.2, 371.0], [25.3, 371.0], [25.4, 372.0], [25.5, 373.0], [25.6, 373.0], [25.7, 373.0], [25.8, 373.0], [25.9, 374.0], [26.0, 374.0], [26.1, 374.0], [26.2, 375.0], [26.3, 375.0], [26.4, 376.0], [26.5, 376.0], [26.6, 378.0], [26.7, 379.0], [26.8, 379.0], [26.9, 380.0], [27.0, 380.0], [27.1, 381.0], [27.2, 381.0], [27.3, 381.0], [27.4, 381.0], [27.5, 382.0], [27.6, 382.0], [27.7, 382.0], [27.8, 384.0], [27.9, 385.0], [28.0, 385.0], [28.1, 390.0], [28.2, 390.0], [28.3, 391.0], [28.4, 391.0], [28.5, 393.0], [28.6, 394.0], [28.7, 394.0], [28.8, 403.0], [28.9, 405.0], [29.0, 405.0], [29.1, 405.0], [29.2, 406.0], [29.3, 411.0], [29.4, 412.0], [29.5, 412.0], [29.6, 413.0], [29.7, 415.0], [29.8, 416.0], [29.9, 416.0], [30.0, 417.0], [30.1, 421.0], [30.2, 421.0], [30.3, 423.0], [30.4, 427.0], [30.5, 431.0], [30.6, 431.0], [30.7, 433.0], [30.8, 434.0], [30.9, 434.0], [31.0, 434.0], [31.1, 436.0], [31.2, 437.0], [31.3, 437.0], [31.4, 437.0], [31.5, 437.0], [31.6, 438.0], [31.7, 438.0], [31.8, 443.0], [31.9, 443.0], [32.0, 445.0], [32.1, 445.0], [32.2, 446.0], [32.3, 447.0], [32.4, 447.0], [32.5, 447.0], [32.6, 448.0], [32.7, 449.0], [32.8, 451.0], [32.9, 451.0], [33.0, 453.0], [33.1, 456.0], [33.2, 457.0], [33.3, 457.0], [33.4, 462.0], [33.5, 465.0], [33.6, 465.0], [33.7, 466.0], [33.8, 467.0], [33.9, 468.0], [34.0, 468.0], [34.1, 470.0], [34.2, 472.0], [34.3, 474.0], [34.4, 474.0], [34.5, 478.0], [34.6, 480.0], [34.7, 481.0], [34.8, 481.0], [34.9, 482.0], [35.0, 484.0], [35.1, 484.0], [35.2, 489.0], [35.3, 493.0], [35.4, 496.0], [35.5, 496.0], [35.6, 496.0], [35.7, 499.0], [35.8, 500.0], [35.9, 500.0], [36.0, 501.0], [36.1, 503.0], [36.2, 503.0], [36.3, 503.0], [36.4, 503.0], [36.5, 504.0], [36.6, 504.0], [36.7, 504.0], [36.8, 507.0], [36.9, 508.0], [37.0, 508.0], [37.1, 509.0], [37.2, 510.0], [37.3, 510.0], [37.4, 510.0], [37.5, 510.0], [37.6, 511.0], [37.7, 511.0], [37.8, 511.0], [37.9, 511.0], [38.0, 511.0], [38.1, 512.0], [38.2, 512.0], [38.3, 513.0], [38.4, 514.0], [38.5, 514.0], [38.6, 514.0], [38.7, 517.0], [38.8, 517.0], [38.9, 517.0], [39.0, 518.0], [39.1, 518.0], [39.2, 518.0], [39.3, 518.0], [39.4, 519.0], [39.5, 519.0], [39.6, 519.0], [39.7, 519.0], [39.8, 519.0], [39.9, 520.0], [40.0, 522.0], [40.1, 522.0], [40.2, 522.0], [40.3, 523.0], [40.4, 523.0], [40.5, 523.0], [40.6, 523.0], [40.7, 524.0], [40.8, 524.0], [40.9, 524.0], [41.0, 524.0], [41.1, 524.0], [41.2, 524.0], [41.3, 525.0], [41.4, 525.0], [41.5, 526.0], [41.6, 526.0], [41.7, 526.0], [41.8, 526.0], [41.9, 526.0], [42.0, 527.0], [42.1, 527.0], [42.2, 527.0], [42.3, 527.0], [42.4, 528.0], [42.5, 528.0], [42.6, 529.0], [42.7, 529.0], [42.8, 529.0], [42.9, 529.0], [43.0, 529.0], [43.1, 529.0], [43.2, 530.0], [43.3, 530.0], [43.4, 530.0], [43.5, 531.0], [43.6, 531.0], [43.7, 531.0], [43.8, 531.0], [43.9, 532.0], [44.0, 532.0], [44.1, 532.0], [44.2, 532.0], [44.3, 532.0], [44.4, 532.0], [44.5, 533.0], [44.6, 533.0], [44.7, 533.0], [44.8, 533.0], [44.9, 533.0], [45.0, 533.0], [45.1, 534.0], [45.2, 534.0], [45.3, 534.0], [45.4, 535.0], [45.5, 535.0], [45.6, 535.0], [45.7, 535.0], [45.8, 536.0], [45.9, 536.0], [46.0, 536.0], [46.1, 536.0], [46.2, 537.0], [46.3, 537.0], [46.4, 537.0], [46.5, 537.0], [46.6, 538.0], [46.7, 538.0], [46.8, 538.0], [46.9, 538.0], [47.0, 538.0], [47.1, 539.0], [47.2, 539.0], [47.3, 540.0], [47.4, 540.0], [47.5, 541.0], [47.6, 541.0], [47.7, 541.0], [47.8, 542.0], [47.9, 542.0], [48.0, 542.0], [48.1, 542.0], [48.2, 543.0], [48.3, 544.0], [48.4, 544.0], [48.5, 545.0], [48.6, 545.0], [48.7, 545.0], [48.8, 545.0], [48.9, 546.0], [49.0, 546.0], [49.1, 546.0], [49.2, 547.0], [49.3, 548.0], [49.4, 549.0], [49.5, 549.0], [49.6, 549.0], [49.7, 549.0], [49.8, 549.0], [49.9, 549.0], [50.0, 550.0], [50.1, 550.0], [50.2, 550.0], [50.3, 550.0], [50.4, 550.0], [50.5, 551.0], [50.6, 551.0], [50.7, 551.0], [50.8, 551.0], [50.9, 551.0], [51.0, 551.0], [51.1, 553.0], [51.2, 558.0], [51.3, 558.0], [51.4, 558.0], [51.5, 559.0], [51.6, 559.0], [51.7, 559.0], [51.8, 560.0], [51.9, 561.0], [52.0, 561.0], [52.1, 561.0], [52.2, 561.0], [52.3, 562.0], [52.4, 562.0], [52.5, 562.0], [52.6, 563.0], [52.7, 563.0], [52.8, 564.0], [52.9, 564.0], [53.0, 564.0], [53.1, 564.0], [53.2, 565.0], [53.3, 565.0], [53.4, 566.0], [53.5, 566.0], [53.6, 566.0], [53.7, 566.0], [53.8, 566.0], [53.9, 567.0], [54.0, 567.0], [54.1, 567.0], [54.2, 569.0], [54.3, 569.0], [54.4, 569.0], [54.5, 571.0], [54.6, 571.0], [54.7, 571.0], [54.8, 571.0], [54.9, 571.0], [55.0, 572.0], [55.1, 572.0], [55.2, 573.0], [55.3, 573.0], [55.4, 573.0], [55.5, 573.0], [55.6, 573.0], [55.7, 573.0], [55.8, 575.0], [55.9, 575.0], [56.0, 576.0], [56.1, 577.0], [56.2, 578.0], [56.3, 578.0], [56.4, 584.0], [56.5, 584.0], [56.6, 584.0], [56.7, 584.0], [56.8, 585.0], [56.9, 586.0], [57.0, 586.0], [57.1, 587.0], [57.2, 588.0], [57.3, 589.0], [57.4, 589.0], [57.5, 590.0], [57.6, 590.0], [57.7, 591.0], [57.8, 591.0], [57.9, 592.0], [58.0, 592.0], [58.1, 592.0], [58.2, 592.0], [58.3, 593.0], [58.4, 593.0], [58.5, 593.0], [58.6, 594.0], [58.7, 594.0], [58.8, 594.0], [58.9, 594.0], [59.0, 595.0], [59.1, 596.0], [59.2, 596.0], [59.3, 596.0], [59.4, 597.0], [59.5, 598.0], [59.6, 599.0], [59.7, 599.0], [59.8, 599.0], [59.9, 600.0], [60.0, 601.0], [60.1, 601.0], [60.2, 606.0], [60.3, 606.0], [60.4, 606.0], [60.5, 607.0], [60.6, 607.0], [60.7, 610.0], [60.8, 610.0], [60.9, 610.0], [61.0, 612.0], [61.1, 613.0], [61.2, 613.0], [61.3, 614.0], [61.4, 615.0], [61.5, 617.0], [61.6, 617.0], [61.7, 617.0], [61.8, 619.0], [61.9, 619.0], [62.0, 619.0], [62.1, 622.0], [62.2, 622.0], [62.3, 622.0], [62.4, 624.0], [62.5, 624.0], [62.6, 625.0], [62.7, 625.0], [62.8, 626.0], [62.9, 628.0], [63.0, 629.0], [63.1, 629.0], [63.2, 629.0], [63.3, 629.0], [63.4, 629.0], [63.5, 636.0], [63.6, 636.0], [63.7, 636.0], [63.8, 636.0], [63.9, 641.0], [64.0, 642.0], [64.1, 643.0], [64.2, 643.0], [64.3, 645.0], [64.4, 648.0], [64.5, 649.0], [64.6, 649.0], [64.7, 653.0], [64.8, 653.0], [64.9, 653.0], [65.0, 653.0], [65.1, 655.0], [65.2, 657.0], [65.3, 657.0], [65.4, 657.0], [65.5, 658.0], [65.6, 658.0], [65.7, 658.0], [65.8, 659.0], [65.9, 659.0], [66.0, 659.0], [66.1, 659.0], [66.2, 659.0], [66.3, 662.0], [66.4, 665.0], [66.5, 665.0], [66.6, 665.0], [66.7, 666.0], [66.8, 666.0], [66.9, 666.0], [67.0, 667.0], [67.1, 667.0], [67.2, 667.0], [67.3, 670.0], [67.4, 671.0], [67.5, 671.0], [67.6, 671.0], [67.7, 671.0], [67.8, 671.0], [67.9, 672.0], [68.0, 672.0], [68.1, 672.0], [68.2, 673.0], [68.3, 673.0], [68.4, 673.0], [68.5, 673.0], [68.6, 673.0], [68.7, 673.0], [68.8, 673.0], [68.9, 674.0], [69.0, 674.0], [69.1, 674.0], [69.2, 674.0], [69.3, 674.0], [69.4, 674.0], [69.5, 674.0], [69.6, 674.0], [69.7, 675.0], [69.8, 676.0], [69.9, 676.0], [70.0, 676.0], [70.1, 676.0], [70.2, 676.0], [70.3, 676.0], [70.4, 677.0], [70.5, 677.0], [70.6, 677.0], [70.7, 678.0], [70.8, 678.0], [70.9, 679.0], [71.0, 679.0], [71.1, 679.0], [71.2, 679.0], [71.3, 679.0], [71.4, 679.0], [71.5, 679.0], [71.6, 680.0], [71.7, 680.0], [71.8, 680.0], [71.9, 680.0], [72.0, 680.0], [72.1, 680.0], [72.2, 680.0], [72.3, 681.0], [72.4, 683.0], [72.5, 683.0], [72.6, 683.0], [72.7, 684.0], [72.8, 684.0], [72.9, 684.0], [73.0, 684.0], [73.1, 685.0], [73.2, 686.0], [73.3, 686.0], [73.4, 687.0], [73.5, 687.0], [73.6, 687.0], [73.7, 688.0], [73.8, 688.0], [73.9, 689.0], [74.0, 689.0], [74.1, 690.0], [74.2, 690.0], [74.3, 690.0], [74.4, 690.0], [74.5, 690.0], [74.6, 691.0], [74.7, 691.0], [74.8, 691.0], [74.9, 692.0], [75.0, 693.0], [75.1, 693.0], [75.2, 694.0], [75.3, 695.0], [75.4, 696.0], [75.5, 696.0], [75.6, 696.0], [75.7, 697.0], [75.8, 699.0], [75.9, 699.0], [76.0, 699.0], [76.1, 701.0], [76.2, 702.0], [76.3, 702.0], [76.4, 703.0], [76.5, 703.0], [76.6, 704.0], [76.7, 704.0], [76.8, 705.0], [76.9, 706.0], [77.0, 706.0], [77.1, 707.0], [77.2, 709.0], [77.3, 709.0], [77.4, 709.0], [77.5, 709.0], [77.6, 709.0], [77.7, 710.0], [77.8, 710.0], [77.9, 711.0], [78.0, 712.0], [78.1, 713.0], [78.2, 713.0], [78.3, 713.0], [78.4, 714.0], [78.5, 714.0], [78.6, 714.0], [78.7, 715.0], [78.8, 716.0], [78.9, 716.0], [79.0, 721.0], [79.1, 721.0], [79.2, 725.0], [79.3, 725.0], [79.4, 727.0], [79.5, 731.0], [79.6, 731.0], [79.7, 731.0], [79.8, 732.0], [79.9, 733.0], [80.0, 740.0], [80.1, 740.0], [80.2, 742.0], [80.3, 743.0], [80.4, 743.0], [80.5, 744.0], [80.6, 745.0], [80.7, 746.0], [80.8, 746.0], [80.9, 746.0], [81.0, 747.0], [81.1, 748.0], [81.2, 748.0], [81.3, 748.0], [81.4, 749.0], [81.5, 750.0], [81.6, 750.0], [81.7, 752.0], [81.8, 752.0], [81.9, 752.0], [82.0, 752.0], [82.1, 754.0], [82.2, 755.0], [82.3, 755.0], [82.4, 757.0], [82.5, 758.0], [82.6, 762.0], [82.7, 762.0], [82.8, 764.0], [82.9, 764.0], [83.0, 765.0], [83.1, 765.0], [83.2, 771.0], [83.3, 771.0], [83.4, 771.0], [83.5, 771.0], [83.6, 771.0], [83.7, 773.0], [83.8, 773.0], [83.9, 773.0], [84.0, 774.0], [84.1, 777.0], [84.2, 777.0], [84.3, 778.0], [84.4, 778.0], [84.5, 778.0], [84.6, 778.0], [84.7, 778.0], [84.8, 779.0], [84.9, 779.0], [85.0, 779.0], [85.1, 779.0], [85.2, 780.0], [85.3, 780.0], [85.4, 780.0], [85.5, 782.0], [85.6, 782.0], [85.7, 782.0], [85.8, 783.0], [85.9, 783.0], [86.0, 785.0], [86.1, 785.0], [86.2, 785.0], [86.3, 787.0], [86.4, 787.0], [86.5, 787.0], [86.6, 788.0], [86.7, 788.0], [86.8, 788.0], [86.9, 788.0], [87.0, 790.0], [87.1, 791.0], [87.2, 791.0], [87.3, 792.0], [87.4, 793.0], [87.5, 794.0], [87.6, 794.0], [87.7, 794.0], [87.8, 795.0], [87.9, 798.0], [88.0, 798.0], [88.1, 798.0], [88.2, 799.0], [88.3, 800.0], [88.4, 800.0], [88.5, 800.0], [88.6, 801.0], [88.7, 801.0], [88.8, 803.0], [88.9, 804.0], [89.0, 804.0], [89.1, 804.0], [89.2, 806.0], [89.3, 809.0], [89.4, 810.0], [89.5, 810.0], [89.6, 811.0], [89.7, 811.0], [89.8, 812.0], [89.9, 812.0], [90.0, 812.0], [90.1, 813.0], [90.2, 813.0], [90.3, 813.0], [90.4, 813.0], [90.5, 814.0], [90.6, 814.0], [90.7, 816.0], [90.8, 816.0], [90.9, 824.0], [91.0, 824.0], [91.1, 824.0], [91.2, 828.0], [91.3, 832.0], [91.4, 832.0], [91.5, 832.0], [91.6, 832.0], [91.7, 832.0], [91.8, 832.0], [91.9, 834.0], [92.0, 838.0], [92.1, 838.0], [92.2, 844.0], [92.3, 845.0], [92.4, 848.0], [92.5, 848.0], [92.6, 856.0], [92.7, 862.0], [92.8, 865.0], [92.9, 865.0], [93.0, 869.0], [93.1, 870.0], [93.2, 871.0], [93.3, 871.0], [93.4, 872.0], [93.5, 895.0], [93.6, 895.0], [93.7, 913.0], [93.8, 919.0], [93.9, 923.0], [94.0, 923.0], [94.1, 932.0], [94.2, 941.0], [94.3, 947.0], [94.4, 947.0], [94.5, 957.0], [94.6, 959.0], [94.7, 959.0], [94.8, 959.0], [94.9, 965.0], [95.0, 977.0], [95.1, 977.0], [95.2, 983.0], [95.3, 984.0], [95.4, 1008.0], [95.5, 1008.0], [95.6, 1019.0], [95.7, 1020.0], [95.8, 1023.0], [95.9, 1023.0], [96.0, 1050.0], [96.1, 1061.0], [96.2, 1092.0], [96.3, 1092.0], [96.4, 1094.0], [96.5, 1100.0], [96.6, 1105.0], [96.7, 1105.0], [96.8, 1115.0], [96.9, 1125.0], [97.0, 1125.0], [97.1, 1126.0], [97.2, 1140.0], [97.3, 1159.0], [97.4, 1159.0], [97.5, 1162.0], [97.6, 1189.0], [97.7, 1261.0], [97.8, 1261.0], [97.9, 1274.0], [98.0, 1309.0], [98.1, 1327.0], [98.2, 1327.0], [98.3, 1341.0], [98.4, 1348.0], [98.5, 1348.0], [98.6, 1382.0], [98.7, 1435.0], [98.8, 1561.0], [98.9, 1561.0], [99.0, 1788.0], [99.1, 1833.0], [99.2, 1856.0], [99.3, 1856.0], [99.4, 2634.0], [99.5, 2738.0], [99.6, 2742.0], [99.7, 2742.0], [99.8, 3036.0], [99.9, 3096.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 177.0, "series": [{"data": [[600.0, 119.0], [2600.0, 1.0], [2700.0, 2.0], [700.0, 90.0], [3000.0, 2.0], [200.0, 98.0], [800.0, 39.0], [900.0, 13.0], [1000.0, 8.0], [1100.0, 9.0], [300.0, 101.0], [1200.0, 2.0], [1300.0, 5.0], [1400.0, 1.0], [1500.0, 1.0], [400.0, 52.0], [100.0, 12.0], [1700.0, 1.0], [1800.0, 2.0], [500.0, 177.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 462.0, "series": [{"data": [[0.0, 264.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 462.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 9.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60249944E12, "maxY": 1.0, "series": [{"data": [[1.60249968E12, 1.0], [1.60249986E12, 1.0], [1.60249956E12, 1.0], [1.60249974E12, 1.0], [1.60249944E12, 1.0], [1.60249962E12, 1.0], [1.6024998E12, 1.0], [1.6024995E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249986E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 576.6870748299318, "minX": 1.0, "maxY": 576.6870748299318, "series": [{"data": [[1.0, 576.6870748299318]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 576.6870748299318]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 98.36666666666666, "minX": 1.60249944E12, "maxY": 334713.61666666664, "series": [{"data": [[1.60249968E12, 334450.5833333333], [1.60249986E12, 246907.9], [1.60249956E12, 209598.21666666667], [1.60249974E12, 223041.41666666666], [1.60249944E12, 60826.666666666664], [1.60249962E12, 210129.33333333334], [1.6024998E12, 216113.78333333333], [1.6024995E12, 334713.61666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60249968E12, 918.05], [1.60249986E12, 884.4833333333333], [1.60249956E12, 687.9], [1.60249974E12, 681.2666666666667], [1.60249944E12, 98.36666666666666], [1.60249962E12, 852.4166666666666], [1.6024998E12, 703.5333333333333], [1.6024995E12, 697.0166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249986E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 476.84033613445393, "minX": 1.60249944E12, "maxY": 665.8666666666666, "series": [{"data": [[1.60249968E12, 478.87096774193543], [1.60249986E12, 476.84033613445393], [1.60249956E12, 657.043956043956], [1.60249974E12, 665.8666666666666], [1.60249944E12, 616.3846153846154], [1.60249962E12, 529.7345132743358], [1.6024998E12, 646.5161290322577], [1.6024995E12, 652.4239130434785]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249986E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 475.9915966386554, "minX": 1.60249944E12, "maxY": 664.8555555555556, "series": [{"data": [[1.60249968E12, 477.65322580645153], [1.60249986E12, 475.9915966386554], [1.60249956E12, 655.8571428571431], [1.60249974E12, 664.8555555555556], [1.60249944E12, 614.1538461538462], [1.60249962E12, 528.8230088495574], [1.6024998E12, 645.3763440860215], [1.6024995E12, 650.9891304347825]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249986E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008064516129032261, "minX": 1.60249944E12, "maxY": 2.5384615384615383, "series": [{"data": [[1.60249968E12, 0.008064516129032261], [1.60249986E12, 0.025210084033613446], [1.60249956E12, 0.02197802197802198], [1.60249974E12, 0.022222222222222227], [1.60249944E12, 2.5384615384615383], [1.60249962E12, 0.017699115044247787], [1.6024998E12, 0.021505376344086027], [1.6024995E12, 0.04347826086956522]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249986E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.60249944E12, "maxY": 3096.0, "series": [{"data": [[1.60249968E12, 3036.0], [1.60249986E12, 1833.0], [1.60249956E12, 2634.0], [1.60249974E12, 1126.0], [1.60249944E12, 2738.0], [1.60249962E12, 1856.0], [1.6024998E12, 965.0], [1.6024995E12, 3096.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60249968E12, 186.0], [1.60249986E12, 176.83999934196473], [1.60249956E12, 467.0], [1.60249974E12, 434.0], [1.60249944E12, 201.0], [1.60249962E12, 201.07799991846085], [1.6024998E12, 284.0], [1.6024995E12, 193.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60249968E12, 186.0], [1.60249986E12, 179.32400026321412], [1.60249956E12, 467.0], [1.60249974E12, 434.0], [1.60249944E12, 201.0], [1.60249962E12, 201.38580003261566], [1.6024998E12, 284.0], [1.6024995E12, 193.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60249968E12, 186.0], [1.60249986E12, 178.21999967098236], [1.60249956E12, 467.0], [1.60249974E12, 434.0], [1.60249944E12, 201.0], [1.60249962E12, 201.24899995923042], [1.6024998E12, 284.0], [1.6024995E12, 193.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60249968E12, 186.0], [1.60249986E12, 175.0], [1.60249956E12, 467.0], [1.60249974E12, 434.0], [1.60249944E12, 201.0], [1.60249962E12, 201.0], [1.6024998E12, 284.0], [1.6024995E12, 193.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60249968E12, 374.0], [1.60249986E12, 360.0], [1.60249956E12, 607.0], [1.60249974E12, 636.0], [1.60249944E12, 551.0], [1.60249962E12, 537.0], [1.6024998E12, 670.0], [1.6024995E12, 547.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249986E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 208.0, "minX": 1.0, "maxY": 711.0, "series": [{"data": [[1.0, 711.0], [2.0, 570.0], [4.0, 274.5], [5.0, 208.0], [3.0, 357.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 208.0, "minX": 1.0, "maxY": 709.5, "series": [{"data": [[1.0, 709.5], [2.0, 568.5], [4.0, 274.0], [5.0, 208.0], [3.0, 357.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60249944E12, "maxY": 2.066666666666667, "series": [{"data": [[1.60249968E12, 2.066666666666667], [1.60249986E12, 1.9666666666666666], [1.60249956E12, 1.5166666666666666], [1.60249974E12, 1.5], [1.60249944E12, 0.23333333333333334], [1.60249962E12, 1.8833333333333333], [1.6024998E12, 1.55], [1.6024995E12, 1.5333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249986E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.60249944E12, "maxY": 2.066666666666667, "series": [{"data": [[1.60249968E12, 2.066666666666667], [1.60249986E12, 1.9833333333333334], [1.60249956E12, 1.5166666666666666], [1.60249974E12, 1.5], [1.60249944E12, 0.21666666666666667], [1.60249962E12, 1.8833333333333333], [1.6024998E12, 1.55], [1.6024995E12, 1.5333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249986E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.60249944E12, "maxY": 2.066666666666667, "series": [{"data": [[1.60249968E12, 2.066666666666667], [1.60249986E12, 1.9833333333333334], [1.60249956E12, 1.5166666666666666], [1.60249974E12, 1.5], [1.60249944E12, 0.21666666666666667], [1.60249962E12, 1.8833333333333333], [1.6024998E12, 1.55], [1.6024995E12, 1.5333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249986E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.60249944E12, "maxY": 2.066666666666667, "series": [{"data": [[1.60249968E12, 2.066666666666667], [1.60249986E12, 1.9833333333333334], [1.60249956E12, 1.5166666666666666], [1.60249974E12, 1.5], [1.60249944E12, 0.21666666666666667], [1.60249962E12, 1.8833333333333333], [1.6024998E12, 1.55], [1.6024995E12, 1.5333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249986E12, "title": "Total Transactions Per Second"}},
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

