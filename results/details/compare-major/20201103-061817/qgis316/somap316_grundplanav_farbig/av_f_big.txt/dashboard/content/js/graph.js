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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 3437.0, "series": [{"data": [[0.0, 6.0], [0.1, 6.0], [0.2, 8.0], [0.3, 8.0], [0.4, 8.0], [0.5, 9.0], [0.6, 11.0], [0.7, 11.0], [0.8, 11.0], [0.9, 12.0], [1.0, 12.0], [1.1, 13.0], [1.2, 13.0], [1.3, 13.0], [1.4, 14.0], [1.5, 16.0], [1.6, 16.0], [1.7, 18.0], [1.8, 19.0], [1.9, 19.0], [2.0, 21.0], [2.1, 22.0], [2.2, 22.0], [2.3, 22.0], [2.4, 22.0], [2.5, 23.0], [2.6, 24.0], [2.7, 24.0], [2.8, 24.0], [2.9, 24.0], [3.0, 25.0], [3.1, 25.0], [3.2, 25.0], [3.3, 26.0], [3.4, 26.0], [3.5, 26.0], [3.6, 27.0], [3.7, 27.0], [3.8, 27.0], [3.9, 30.0], [4.0, 30.0], [4.1, 31.0], [4.2, 31.0], [4.3, 31.0], [4.4, 32.0], [4.5, 32.0], [4.6, 32.0], [4.7, 32.0], [4.8, 32.0], [4.9, 33.0], [5.0, 33.0], [5.1, 35.0], [5.2, 36.0], [5.3, 36.0], [5.4, 37.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 41.0], [5.9, 41.0], [6.0, 43.0], [6.1, 43.0], [6.2, 44.0], [6.3, 44.0], [6.4, 45.0], [6.5, 45.0], [6.6, 47.0], [6.7, 52.0], [6.8, 52.0], [6.9, 52.0], [7.0, 53.0], [7.1, 59.0], [7.2, 59.0], [7.3, 59.0], [7.4, 62.0], [7.5, 69.0], [7.6, 69.0], [7.7, 77.0], [7.8, 89.0], [7.9, 91.0], [8.0, 91.0], [8.1, 94.0], [8.2, 97.0], [8.3, 98.0], [8.4, 98.0], [8.5, 99.0], [8.6, 100.0], [8.7, 100.0], [8.8, 102.0], [8.9, 109.0], [9.0, 111.0], [9.1, 111.0], [9.2, 112.0], [9.3, 113.0], [9.4, 114.0], [9.5, 114.0], [9.6, 114.0], [9.7, 116.0], [9.8, 118.0], [9.9, 118.0], [10.0, 119.0], [10.1, 122.0], [10.2, 122.0], [10.3, 122.0], [10.4, 123.0], [10.5, 128.0], [10.6, 128.0], [10.7, 131.0], [10.8, 131.0], [10.9, 132.0], [11.0, 132.0], [11.1, 133.0], [11.2, 133.0], [11.3, 134.0], [11.4, 134.0], [11.5, 134.0], [11.6, 140.0], [11.7, 140.0], [11.8, 141.0], [11.9, 141.0], [12.0, 141.0], [12.1, 141.0], [12.2, 142.0], [12.3, 143.0], [12.4, 145.0], [12.5, 145.0], [12.6, 146.0], [12.7, 146.0], [12.8, 147.0], [12.9, 147.0], [13.0, 147.0], [13.1, 149.0], [13.2, 150.0], [13.3, 150.0], [13.4, 150.0], [13.5, 153.0], [13.6, 153.0], [13.7, 153.0], [13.8, 155.0], [13.9, 155.0], [14.0, 155.0], [14.1, 156.0], [14.2, 156.0], [14.3, 157.0], [14.4, 157.0], [14.5, 157.0], [14.6, 158.0], [14.7, 159.0], [14.8, 159.0], [14.9, 161.0], [15.0, 162.0], [15.1, 162.0], [15.2, 162.0], [15.3, 163.0], [15.4, 163.0], [15.5, 163.0], [15.6, 164.0], [15.7, 164.0], [15.8, 165.0], [15.9, 165.0], [16.0, 167.0], [16.1, 168.0], [16.2, 168.0], [16.3, 168.0], [16.4, 169.0], [16.5, 172.0], [16.6, 173.0], [16.7, 173.0], [16.8, 175.0], [16.9, 177.0], [17.0, 177.0], [17.1, 177.0], [17.2, 178.0], [17.3, 178.0], [17.4, 178.0], [17.5, 179.0], [17.6, 179.0], [17.7, 179.0], [17.8, 179.0], [17.9, 179.0], [18.0, 179.0], [18.1, 180.0], [18.2, 180.0], [18.3, 180.0], [18.4, 184.0], [18.5, 184.0], [18.6, 184.0], [18.7, 185.0], [18.8, 187.0], [18.9, 187.0], [19.0, 188.0], [19.1, 188.0], [19.2, 188.0], [19.3, 188.0], [19.4, 189.0], [19.5, 190.0], [19.6, 190.0], [19.7, 190.0], [19.8, 191.0], [19.9, 192.0], [20.0, 193.0], [20.1, 193.0], [20.2, 194.0], [20.3, 195.0], [20.4, 195.0], [20.5, 195.0], [20.6, 198.0], [20.7, 198.0], [20.8, 198.0], [20.9, 200.0], [21.0, 201.0], [21.1, 201.0], [21.2, 201.0], [21.3, 202.0], [21.4, 203.0], [21.5, 204.0], [21.6, 204.0], [21.7, 205.0], [21.8, 206.0], [21.9, 206.0], [22.0, 207.0], [22.1, 207.0], [22.2, 211.0], [22.3, 211.0], [22.4, 213.0], [22.5, 213.0], [22.6, 215.0], [22.7, 215.0], [22.8, 216.0], [22.9, 216.0], [23.0, 216.0], [23.1, 216.0], [23.2, 217.0], [23.3, 217.0], [23.4, 217.0], [23.5, 219.0], [23.6, 220.0], [23.7, 221.0], [23.8, 221.0], [23.9, 221.0], [24.0, 224.0], [24.1, 226.0], [24.2, 226.0], [24.3, 226.0], [24.4, 226.0], [24.5, 228.0], [24.6, 228.0], [24.7, 229.0], [24.8, 230.0], [24.9, 230.0], [25.0, 230.0], [25.1, 237.0], [25.2, 237.0], [25.3, 237.0], [25.4, 240.0], [25.5, 240.0], [25.6, 242.0], [25.7, 242.0], [25.8, 242.0], [25.9, 244.0], [26.0, 247.0], [26.1, 247.0], [26.2, 248.0], [26.3, 249.0], [26.4, 250.0], [26.5, 250.0], [26.6, 251.0], [26.7, 252.0], [26.8, 252.0], [26.9, 252.0], [27.0, 252.0], [27.1, 256.0], [27.2, 256.0], [27.3, 258.0], [27.4, 260.0], [27.5, 263.0], [27.6, 263.0], [27.7, 266.0], [27.8, 269.0], [27.9, 271.0], [28.0, 271.0], [28.1, 273.0], [28.2, 274.0], [28.3, 278.0], [28.4, 278.0], [28.5, 279.0], [28.6, 280.0], [28.7, 280.0], [28.8, 285.0], [28.9, 287.0], [29.0, 289.0], [29.1, 289.0], [29.2, 290.0], [29.3, 291.0], [29.4, 292.0], [29.5, 292.0], [29.6, 293.0], [29.7, 294.0], [29.8, 294.0], [29.9, 294.0], [30.0, 296.0], [30.1, 297.0], [30.2, 297.0], [30.3, 298.0], [30.4, 299.0], [30.5, 302.0], [30.6, 302.0], [30.7, 302.0], [30.8, 302.0], [30.9, 303.0], [31.0, 303.0], [31.1, 303.0], [31.2, 304.0], [31.3, 304.0], [31.4, 304.0], [31.5, 306.0], [31.6, 306.0], [31.7, 306.0], [31.8, 306.0], [31.9, 307.0], [32.0, 309.0], [32.1, 309.0], [32.2, 315.0], [32.3, 316.0], [32.4, 317.0], [32.5, 317.0], [32.6, 319.0], [32.7, 320.0], [32.8, 322.0], [32.9, 322.0], [33.0, 322.0], [33.1, 324.0], [33.2, 325.0], [33.3, 325.0], [33.4, 325.0], [33.5, 326.0], [33.6, 326.0], [33.7, 334.0], [33.8, 337.0], [33.9, 338.0], [34.0, 338.0], [34.1, 338.0], [34.2, 339.0], [34.3, 340.0], [34.4, 340.0], [34.5, 341.0], [34.6, 342.0], [34.7, 342.0], [34.8, 342.0], [34.9, 343.0], [35.0, 344.0], [35.1, 344.0], [35.2, 344.0], [35.3, 345.0], [35.4, 347.0], [35.5, 347.0], [35.6, 348.0], [35.7, 348.0], [35.8, 348.0], [35.9, 348.0], [36.0, 351.0], [36.1, 354.0], [36.2, 354.0], [36.3, 354.0], [36.4, 355.0], [36.5, 355.0], [36.6, 356.0], [36.7, 356.0], [36.8, 357.0], [36.9, 360.0], [37.0, 360.0], [37.1, 362.0], [37.2, 362.0], [37.3, 363.0], [37.4, 363.0], [37.5, 365.0], [37.6, 367.0], [37.7, 367.0], [37.8, 367.0], [37.9, 368.0], [38.0, 369.0], [38.1, 370.0], [38.2, 370.0], [38.3, 371.0], [38.4, 371.0], [38.5, 371.0], [38.6, 373.0], [38.7, 374.0], [38.8, 374.0], [38.9, 374.0], [39.0, 376.0], [39.1, 380.0], [39.2, 381.0], [39.3, 381.0], [39.4, 382.0], [39.5, 382.0], [39.6, 383.0], [39.7, 383.0], [39.8, 385.0], [39.9, 388.0], [40.0, 390.0], [40.1, 390.0], [40.2, 393.0], [40.3, 394.0], [40.4, 394.0], [40.5, 395.0], [40.6, 396.0], [40.7, 398.0], [40.8, 398.0], [40.9, 398.0], [41.0, 404.0], [41.1, 405.0], [41.2, 405.0], [41.3, 406.0], [41.4, 407.0], [41.5, 407.0], [41.6, 407.0], [41.7, 407.0], [41.8, 408.0], [41.9, 408.0], [42.0, 411.0], [42.1, 412.0], [42.2, 414.0], [42.3, 414.0], [42.4, 415.0], [42.5, 416.0], [42.6, 416.0], [42.7, 416.0], [42.8, 417.0], [42.9, 418.0], [43.0, 418.0], [43.1, 418.0], [43.2, 419.0], [43.3, 422.0], [43.4, 422.0], [43.5, 424.0], [43.6, 424.0], [43.7, 424.0], [43.8, 424.0], [43.9, 424.0], [44.0, 425.0], [44.1, 425.0], [44.2, 425.0], [44.3, 426.0], [44.4, 428.0], [44.5, 429.0], [44.6, 429.0], [44.7, 431.0], [44.8, 432.0], [44.9, 433.0], [45.0, 433.0], [45.1, 434.0], [45.2, 435.0], [45.3, 435.0], [45.4, 437.0], [45.5, 439.0], [45.6, 439.0], [45.7, 439.0], [45.8, 440.0], [45.9, 443.0], [46.0, 444.0], [46.1, 444.0], [46.2, 444.0], [46.3, 446.0], [46.4, 447.0], [46.5, 447.0], [46.6, 448.0], [46.7, 450.0], [46.8, 450.0], [46.9, 450.0], [47.0, 451.0], [47.1, 452.0], [47.2, 452.0], [47.3, 453.0], [47.4, 453.0], [47.5, 454.0], [47.6, 454.0], [47.7, 456.0], [47.8, 458.0], [47.9, 460.0], [48.0, 460.0], [48.1, 460.0], [48.2, 462.0], [48.3, 463.0], [48.4, 463.0], [48.5, 463.0], [48.6, 463.0], [48.7, 463.0], [48.8, 463.0], [48.9, 465.0], [49.0, 465.0], [49.1, 465.0], [49.2, 466.0], [49.3, 466.0], [49.4, 468.0], [49.5, 468.0], [49.6, 469.0], [49.7, 469.0], [49.8, 469.0], [49.9, 469.0], [50.0, 469.0], [50.1, 470.0], [50.2, 470.0], [50.3, 473.0], [50.4, 473.0], [50.5, 473.0], [50.6, 473.0], [50.7, 474.0], [50.8, 475.0], [50.9, 476.0], [51.0, 476.0], [51.1, 477.0], [51.2, 480.0], [51.3, 483.0], [51.4, 483.0], [51.5, 484.0], [51.6, 488.0], [51.7, 488.0], [51.8, 492.0], [51.9, 492.0], [52.0, 494.0], [52.1, 494.0], [52.2, 494.0], [52.3, 495.0], [52.4, 496.0], [52.5, 496.0], [52.6, 499.0], [52.7, 503.0], [52.8, 503.0], [52.9, 503.0], [53.0, 503.0], [53.1, 503.0], [53.2, 503.0], [53.3, 503.0], [53.4, 504.0], [53.5, 506.0], [53.6, 506.0], [53.7, 507.0], [53.8, 507.0], [53.9, 508.0], [54.0, 508.0], [54.1, 509.0], [54.2, 510.0], [54.3, 510.0], [54.4, 510.0], [54.5, 511.0], [54.6, 511.0], [54.7, 513.0], [54.8, 513.0], [54.9, 514.0], [55.0, 515.0], [55.1, 515.0], [55.2, 515.0], [55.3, 518.0], [55.4, 520.0], [55.5, 520.0], [55.6, 520.0], [55.7, 520.0], [55.8, 522.0], [55.9, 522.0], [56.0, 524.0], [56.1, 525.0], [56.2, 526.0], [56.3, 526.0], [56.4, 527.0], [56.5, 528.0], [56.6, 529.0], [56.7, 529.0], [56.8, 529.0], [56.9, 532.0], [57.0, 532.0], [57.1, 533.0], [57.2, 535.0], [57.3, 535.0], [57.4, 535.0], [57.5, 536.0], [57.6, 536.0], [57.7, 541.0], [57.8, 541.0], [57.9, 541.0], [58.0, 542.0], [58.1, 542.0], [58.2, 542.0], [58.3, 542.0], [58.4, 543.0], [58.5, 543.0], [58.6, 543.0], [58.7, 543.0], [58.8, 545.0], [58.9, 545.0], [59.0, 545.0], [59.1, 546.0], [59.2, 548.0], [59.3, 548.0], [59.4, 550.0], [59.5, 553.0], [59.6, 553.0], [59.7, 553.0], [59.8, 553.0], [59.9, 554.0], [60.0, 554.0], [60.1, 554.0], [60.2, 554.0], [60.3, 554.0], [60.4, 554.0], [60.5, 555.0], [60.6, 555.0], [60.7, 556.0], [60.8, 556.0], [60.9, 556.0], [61.0, 557.0], [61.1, 557.0], [61.2, 557.0], [61.3, 559.0], [61.4, 559.0], [61.5, 560.0], [61.6, 560.0], [61.7, 560.0], [61.8, 560.0], [61.9, 560.0], [62.0, 562.0], [62.1, 562.0], [62.2, 562.0], [62.3, 562.0], [62.4, 562.0], [62.5, 564.0], [62.6, 564.0], [62.7, 564.0], [62.8, 565.0], [62.9, 567.0], [63.0, 567.0], [63.1, 567.0], [63.2, 567.0], [63.3, 567.0], [63.4, 567.0], [63.5, 568.0], [63.6, 569.0], [63.7, 570.0], [63.8, 570.0], [63.9, 575.0], [64.0, 577.0], [64.1, 578.0], [64.2, 578.0], [64.3, 581.0], [64.4, 582.0], [64.5, 582.0], [64.6, 582.0], [64.7, 584.0], [64.8, 585.0], [64.9, 585.0], [65.0, 585.0], [65.1, 588.0], [65.2, 593.0], [65.3, 593.0], [65.4, 594.0], [65.5, 595.0], [65.6, 597.0], [65.7, 597.0], [65.8, 597.0], [65.9, 597.0], [66.0, 597.0], [66.1, 597.0], [66.2, 601.0], [66.3, 604.0], [66.4, 607.0], [66.5, 607.0], [66.6, 608.0], [66.7, 608.0], [66.8, 608.0], [66.9, 609.0], [67.0, 614.0], [67.1, 616.0], [67.2, 616.0], [67.3, 617.0], [67.4, 618.0], [67.5, 619.0], [67.6, 619.0], [67.7, 620.0], [67.8, 621.0], [67.9, 625.0], [68.0, 625.0], [68.1, 628.0], [68.2, 628.0], [68.3, 629.0], [68.4, 629.0], [68.5, 629.0], [68.6, 629.0], [68.7, 629.0], [68.8, 629.0], [68.9, 629.0], [69.0, 630.0], [69.1, 630.0], [69.2, 631.0], [69.3, 632.0], [69.4, 633.0], [69.5, 633.0], [69.6, 634.0], [69.7, 634.0], [69.8, 634.0], [69.9, 634.0], [70.0, 635.0], [70.1, 635.0], [70.2, 635.0], [70.3, 637.0], [70.4, 639.0], [70.5, 640.0], [70.6, 640.0], [70.7, 648.0], [70.8, 653.0], [70.9, 653.0], [71.0, 653.0], [71.1, 654.0], [71.2, 655.0], [71.3, 655.0], [71.4, 655.0], [71.5, 656.0], [71.6, 656.0], [71.7, 656.0], [71.8, 657.0], [71.9, 657.0], [72.0, 658.0], [72.1, 658.0], [72.2, 658.0], [72.3, 661.0], [72.4, 667.0], [72.5, 667.0], [72.6, 667.0], [72.7, 667.0], [72.8, 668.0], [72.9, 668.0], [73.0, 669.0], [73.1, 672.0], [73.2, 672.0], [73.3, 672.0], [73.4, 674.0], [73.5, 675.0], [73.6, 675.0], [73.7, 675.0], [73.8, 677.0], [73.9, 678.0], [74.0, 678.0], [74.1, 679.0], [74.2, 680.0], [74.3, 680.0], [74.4, 680.0], [74.5, 682.0], [74.6, 685.0], [74.7, 685.0], [74.8, 685.0], [74.9, 686.0], [75.0, 688.0], [75.1, 688.0], [75.2, 688.0], [75.3, 690.0], [75.4, 693.0], [75.5, 693.0], [75.6, 696.0], [75.7, 696.0], [75.8, 699.0], [75.9, 699.0], [76.0, 699.0], [76.1, 701.0], [76.2, 701.0], [76.3, 701.0], [76.4, 701.0], [76.5, 701.0], [76.6, 705.0], [76.7, 705.0], [76.8, 709.0], [76.9, 709.0], [77.0, 709.0], [77.1, 710.0], [77.2, 713.0], [77.3, 714.0], [77.4, 714.0], [77.5, 716.0], [77.6, 719.0], [77.7, 723.0], [77.8, 723.0], [77.9, 723.0], [78.0, 724.0], [78.1, 724.0], [78.2, 724.0], [78.3, 731.0], [78.4, 732.0], [78.5, 732.0], [78.6, 735.0], [78.7, 736.0], [78.8, 738.0], [78.9, 738.0], [79.0, 741.0], [79.1, 742.0], [79.2, 743.0], [79.3, 743.0], [79.4, 743.0], [79.5, 744.0], [79.6, 744.0], [79.7, 744.0], [79.8, 745.0], [79.9, 746.0], [80.0, 747.0], [80.1, 747.0], [80.2, 748.0], [80.3, 748.0], [80.4, 748.0], [80.5, 752.0], [80.6, 753.0], [80.7, 755.0], [80.8, 755.0], [80.9, 755.0], [81.0, 755.0], [81.1, 755.0], [81.2, 755.0], [81.3, 760.0], [81.4, 762.0], [81.5, 763.0], [81.6, 763.0], [81.7, 765.0], [81.8, 766.0], [81.9, 766.0], [82.0, 768.0], [82.1, 770.0], [82.2, 771.0], [82.3, 771.0], [82.4, 777.0], [82.5, 778.0], [82.6, 779.0], [82.7, 779.0], [82.8, 781.0], [82.9, 781.0], [83.0, 782.0], [83.1, 782.0], [83.2, 783.0], [83.3, 784.0], [83.4, 784.0], [83.5, 784.0], [83.6, 785.0], [83.7, 786.0], [83.8, 786.0], [83.9, 787.0], [84.0, 788.0], [84.1, 790.0], [84.2, 790.0], [84.3, 795.0], [84.4, 795.0], [84.5, 797.0], [84.6, 797.0], [84.7, 798.0], [84.8, 801.0], [84.9, 801.0], [85.0, 801.0], [85.1, 801.0], [85.2, 804.0], [85.3, 804.0], [85.4, 805.0], [85.5, 812.0], [85.6, 813.0], [85.7, 813.0], [85.8, 814.0], [85.9, 815.0], [86.0, 818.0], [86.1, 818.0], [86.2, 822.0], [86.3, 825.0], [86.4, 830.0], [86.5, 830.0], [86.6, 835.0], [86.7, 836.0], [86.8, 836.0], [86.9, 836.0], [87.0, 839.0], [87.1, 842.0], [87.2, 842.0], [87.3, 843.0], [87.4, 846.0], [87.5, 846.0], [87.6, 846.0], [87.7, 848.0], [87.8, 850.0], [87.9, 851.0], [88.0, 851.0], [88.1, 853.0], [88.2, 854.0], [88.3, 867.0], [88.4, 867.0], [88.5, 867.0], [88.6, 869.0], [88.7, 869.0], [88.8, 869.0], [88.9, 870.0], [89.0, 878.0], [89.1, 878.0], [89.2, 880.0], [89.3, 882.0], [89.4, 886.0], [89.5, 886.0], [89.6, 887.0], [89.7, 889.0], [89.8, 890.0], [89.9, 890.0], [90.0, 894.0], [90.1, 897.0], [90.2, 897.0], [90.3, 905.0], [90.4, 905.0], [90.5, 908.0], [90.6, 908.0], [90.7, 910.0], [90.8, 911.0], [90.9, 917.0], [91.0, 917.0], [91.1, 928.0], [91.2, 932.0], [91.3, 939.0], [91.4, 939.0], [91.5, 947.0], [91.6, 949.0], [91.7, 949.0], [91.8, 950.0], [91.9, 957.0], [92.0, 957.0], [92.1, 957.0], [92.2, 973.0], [92.3, 992.0], [92.4, 1001.0], [92.5, 1001.0], [92.6, 1002.0], [92.7, 1004.0], [92.8, 1007.0], [92.9, 1007.0], [93.0, 1010.0], [93.1, 1011.0], [93.2, 1013.0], [93.3, 1013.0], [93.4, 1017.0], [93.5, 1018.0], [93.6, 1018.0], [93.7, 1020.0], [93.8, 1021.0], [93.9, 1024.0], [94.0, 1024.0], [94.1, 1034.0], [94.2, 1034.0], [94.3, 1036.0], [94.4, 1036.0], [94.5, 1038.0], [94.6, 1043.0], [94.7, 1049.0], [94.8, 1049.0], [94.9, 1051.0], [95.0, 1051.0], [95.1, 1051.0], [95.2, 1055.0], [95.3, 1062.0], [95.4, 1069.0], [95.5, 1069.0], [95.6, 1070.0], [95.7, 1074.0], [95.8, 1077.0], [95.9, 1077.0], [96.0, 1092.0], [96.1, 1097.0], [96.2, 1110.0], [96.3, 1110.0], [96.4, 1119.0], [96.5, 1125.0], [96.6, 1132.0], [96.7, 1132.0], [96.8, 1173.0], [96.9, 1280.0], [97.0, 1280.0], [97.1, 1296.0], [97.2, 1329.0], [97.3, 1331.0], [97.4, 1331.0], [97.5, 1366.0], [97.6, 1406.0], [97.7, 1418.0], [97.8, 1418.0], [97.9, 1427.0], [98.0, 1452.0], [98.1, 1453.0], [98.2, 1453.0], [98.3, 1485.0], [98.4, 1523.0], [98.5, 1523.0], [98.6, 1557.0], [98.7, 1558.0], [98.8, 1639.0], [98.9, 1639.0], [99.0, 1654.0], [99.1, 1667.0], [99.2, 1699.0], [99.3, 1699.0], [99.4, 1877.0], [99.5, 1898.0], [99.6, 2217.0], [99.7, 2217.0], [99.8, 3135.0], [99.9, 3437.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 99.0, "series": [{"data": [[0.0, 63.0], [2200.0, 1.0], [600.0, 73.0], [700.0, 64.0], [3100.0, 1.0], [800.0, 40.0], [200.0, 71.0], [3400.0, 1.0], [900.0, 16.0], [1000.0, 28.0], [1100.0, 5.0], [300.0, 77.0], [1200.0, 2.0], [1300.0, 3.0], [1400.0, 6.0], [1500.0, 3.0], [100.0, 90.0], [400.0, 86.0], [1600.0, 4.0], [1800.0, 2.0], [500.0, 99.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 387.0, "series": [{"data": [[0.0, 387.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 336.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 12.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.833333333333334, "minX": 1.60438656E12, "maxY": 9.956989247311828, "series": [{"data": [[1.60438656E12, 9.956989247311828], [1.60438662E12, 9.833333333333334]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438662E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 88.0, "minX": 1.0, "maxY": 932.0, "series": [{"data": [[8.0, 287.6666666666667], [4.0, 153.0], [2.0, 565.0], [1.0, 932.0], [9.0, 228.16666666666666], [10.0, 510.1018131101819], [5.0, 213.0], [3.0, 725.0], [6.0, 88.0], [7.0, 141.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.911564625850334, 505.58503401360554]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2026.2666666666667, "minX": 1.60438656E12, "maxY": 1242915.0333333334, "series": [{"data": [[1.60438656E12, 1242915.0333333334], [1.60438662E12, 592672.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438656E12, 3496.766666666667], [1.60438662E12, 2026.2666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438662E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 504.9555555555557, "minX": 1.60438656E12, "maxY": 505.9505376344086, "series": [{"data": [[1.60438656E12, 505.9505376344086], [1.60438662E12, 504.9555555555557]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438662E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 503.34814814814797, "minX": 1.60438656E12, "maxY": 504.24086021505383, "series": [{"data": [[1.60438656E12, 504.24086021505383], [1.60438662E12, 503.34814814814797]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438662E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60438656E12, "maxY": 0.16559139784946228, "series": [{"data": [[1.60438656E12, 0.16559139784946228], [1.60438662E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438662E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60438656E12, "maxY": 3437.0, "series": [{"data": [[1.60438656E12, 3437.0], [1.60438662E12, 2217.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438656E12, 9.387999777793885], [1.60438662E12, 35.38999935388565]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438656E12, 10.226800088882447], [1.60438662E12, 37.82900025844574]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438656E12, 9.853999888896942], [1.60438662E12, 36.744999676942825]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438656E12, 6.0], [1.60438662E12, 22.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438656E12, 466.0], [1.60438662E12, 482.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438662E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 44.0, "minX": 1.0, "maxY": 777.0, "series": [{"data": [[32.0, 304.5], [9.0, 777.0], [38.0, 167.5], [13.0, 748.0], [14.0, 552.5], [15.0, 584.5], [1.0, 44.0], [16.0, 539.0], [17.0, 604.0], [18.0, 442.0], [19.0, 560.0], [20.0, 400.5], [23.0, 225.0], [25.0, 529.0], [26.0, 180.5], [27.0, 324.5], [30.0, 289.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 38.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 40.0, "minX": 1.0, "maxY": 777.0, "series": [{"data": [[32.0, 302.0], [9.0, 777.0], [38.0, 167.0], [13.0, 746.5], [14.0, 552.0], [15.0, 583.5], [1.0, 40.0], [16.0, 538.5], [17.0, 603.0], [18.0, 441.0], [19.0, 559.0], [20.0, 400.0], [23.0, 224.0], [25.0, 523.0], [26.0, 179.5], [27.0, 324.5], [30.0, 289.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 38.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.333333333333333, "minX": 1.60438656E12, "maxY": 7.916666666666667, "series": [{"data": [[1.60438656E12, 7.916666666666667], [1.60438662E12, 4.333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438662E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.5, "minX": 1.60438656E12, "maxY": 7.75, "series": [{"data": [[1.60438656E12, 7.75], [1.60438662E12, 4.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438662E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.5, "minX": 1.60438656E12, "maxY": 7.75, "series": [{"data": [[1.60438656E12, 7.75], [1.60438662E12, 4.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438662E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.5, "minX": 1.60438656E12, "maxY": 7.75, "series": [{"data": [[1.60438656E12, 7.75], [1.60438662E12, 4.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438662E12, "title": "Total Transactions Per Second"}},
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

