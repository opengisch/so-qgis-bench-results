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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3664.0, "series": [{"data": [[0.0, 29.0], [0.1, 32.0], [0.2, 33.0], [0.3, 33.0], [0.4, 34.0], [0.5, 34.0], [0.6, 34.0], [0.7, 35.0], [0.8, 35.0], [0.9, 35.0], [1.0, 35.0], [1.1, 36.0], [1.2, 36.0], [1.3, 36.0], [1.4, 36.0], [1.5, 36.0], [1.6, 37.0], [1.7, 37.0], [1.8, 37.0], [1.9, 37.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 38.0], [2.8, 38.0], [2.9, 38.0], [3.0, 38.0], [3.1, 38.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 39.0], [3.7, 39.0], [3.8, 39.0], [3.9, 39.0], [4.0, 40.0], [4.1, 40.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 40.0], [4.6, 40.0], [4.7, 41.0], [4.8, 41.0], [4.9, 41.0], [5.0, 41.0], [5.1, 41.0], [5.2, 41.0], [5.3, 41.0], [5.4, 42.0], [5.5, 42.0], [5.6, 42.0], [5.7, 43.0], [5.8, 43.0], [5.9, 43.0], [6.0, 44.0], [6.1, 44.0], [6.2, 45.0], [6.3, 45.0], [6.4, 46.0], [6.5, 46.0], [6.6, 46.0], [6.7, 47.0], [6.8, 48.0], [6.9, 48.0], [7.0, 49.0], [7.1, 50.0], [7.2, 51.0], [7.3, 51.0], [7.4, 52.0], [7.5, 53.0], [7.6, 54.0], [7.7, 55.0], [7.8, 56.0], [7.9, 57.0], [8.0, 58.0], [8.1, 58.0], [8.2, 59.0], [8.3, 59.0], [8.4, 60.0], [8.5, 61.0], [8.6, 61.0], [8.7, 62.0], [8.8, 62.0], [8.9, 63.0], [9.0, 64.0], [9.1, 64.0], [9.2, 65.0], [9.3, 65.0], [9.4, 65.0], [9.5, 65.0], [9.6, 65.0], [9.7, 66.0], [9.8, 66.0], [9.9, 66.0], [10.0, 67.0], [10.1, 67.0], [10.2, 67.0], [10.3, 67.0], [10.4, 67.0], [10.5, 67.0], [10.6, 67.0], [10.7, 67.0], [10.8, 67.0], [10.9, 68.0], [11.0, 68.0], [11.1, 68.0], [11.2, 68.0], [11.3, 68.0], [11.4, 68.0], [11.5, 68.0], [11.6, 68.0], [11.7, 68.0], [11.8, 69.0], [11.9, 69.0], [12.0, 69.0], [12.1, 69.0], [12.2, 69.0], [12.3, 69.0], [12.4, 69.0], [12.5, 69.0], [12.6, 69.0], [12.7, 70.0], [12.8, 70.0], [12.9, 70.0], [13.0, 70.0], [13.1, 70.0], [13.2, 70.0], [13.3, 70.0], [13.4, 70.0], [13.5, 70.0], [13.6, 70.0], [13.7, 70.0], [13.8, 71.0], [13.9, 71.0], [14.0, 71.0], [14.1, 71.0], [14.2, 71.0], [14.3, 71.0], [14.4, 71.0], [14.5, 71.0], [14.6, 71.0], [14.7, 71.0], [14.8, 72.0], [14.9, 72.0], [15.0, 72.0], [15.1, 72.0], [15.2, 72.0], [15.3, 72.0], [15.4, 72.0], [15.5, 72.0], [15.6, 72.0], [15.7, 72.0], [15.8, 72.0], [15.9, 73.0], [16.0, 73.0], [16.1, 73.0], [16.2, 73.0], [16.3, 73.0], [16.4, 73.0], [16.5, 73.0], [16.6, 73.0], [16.7, 73.0], [16.8, 73.0], [16.9, 73.0], [17.0, 74.0], [17.1, 74.0], [17.2, 74.0], [17.3, 74.0], [17.4, 74.0], [17.5, 74.0], [17.6, 74.0], [17.7, 74.0], [17.8, 74.0], [17.9, 74.0], [18.0, 74.0], [18.1, 75.0], [18.2, 75.0], [18.3, 75.0], [18.4, 75.0], [18.5, 75.0], [18.6, 75.0], [18.7, 75.0], [18.8, 75.0], [18.9, 75.0], [19.0, 75.0], [19.1, 75.0], [19.2, 75.0], [19.3, 75.0], [19.4, 75.0], [19.5, 75.0], [19.6, 76.0], [19.7, 76.0], [19.8, 76.0], [19.9, 76.0], [20.0, 76.0], [20.1, 76.0], [20.2, 76.0], [20.3, 76.0], [20.4, 76.0], [20.5, 76.0], [20.6, 76.0], [20.7, 77.0], [20.8, 77.0], [20.9, 77.0], [21.0, 77.0], [21.1, 77.0], [21.2, 77.0], [21.3, 77.0], [21.4, 77.0], [21.5, 77.0], [21.6, 77.0], [21.7, 77.0], [21.8, 78.0], [21.9, 78.0], [22.0, 78.0], [22.1, 78.0], [22.2, 78.0], [22.3, 78.0], [22.4, 78.0], [22.5, 78.0], [22.6, 78.0], [22.7, 79.0], [22.8, 79.0], [22.9, 79.0], [23.0, 79.0], [23.1, 79.0], [23.2, 79.0], [23.3, 79.0], [23.4, 79.0], [23.5, 80.0], [23.6, 80.0], [23.7, 80.0], [23.8, 80.0], [23.9, 80.0], [24.0, 80.0], [24.1, 80.0], [24.2, 81.0], [24.3, 81.0], [24.4, 81.0], [24.5, 81.0], [24.6, 81.0], [24.7, 81.0], [24.8, 82.0], [24.9, 82.0], [25.0, 82.0], [25.1, 82.0], [25.2, 82.0], [25.3, 82.0], [25.4, 83.0], [25.5, 83.0], [25.6, 83.0], [25.7, 83.0], [25.8, 83.0], [25.9, 83.0], [26.0, 83.0], [26.1, 84.0], [26.2, 84.0], [26.3, 84.0], [26.4, 84.0], [26.5, 84.0], [26.6, 85.0], [26.7, 85.0], [26.8, 85.0], [26.9, 85.0], [27.0, 86.0], [27.1, 86.0], [27.2, 86.0], [27.3, 86.0], [27.4, 87.0], [27.5, 87.0], [27.6, 87.0], [27.7, 87.0], [27.8, 88.0], [27.9, 88.0], [28.0, 88.0], [28.1, 88.0], [28.2, 89.0], [28.3, 89.0], [28.4, 89.0], [28.5, 90.0], [28.6, 90.0], [28.7, 90.0], [28.8, 90.0], [28.9, 91.0], [29.0, 91.0], [29.1, 91.0], [29.2, 92.0], [29.3, 92.0], [29.4, 92.0], [29.5, 93.0], [29.6, 93.0], [29.7, 94.0], [29.8, 94.0], [29.9, 94.0], [30.0, 94.0], [30.1, 95.0], [30.2, 95.0], [30.3, 96.0], [30.4, 96.0], [30.5, 96.0], [30.6, 96.0], [30.7, 97.0], [30.8, 97.0], [30.9, 98.0], [31.0, 98.0], [31.1, 99.0], [31.2, 99.0], [31.3, 100.0], [31.4, 100.0], [31.5, 100.0], [31.6, 101.0], [31.7, 102.0], [31.8, 102.0], [31.9, 102.0], [32.0, 102.0], [32.1, 103.0], [32.2, 103.0], [32.3, 104.0], [32.4, 104.0], [32.5, 104.0], [32.6, 105.0], [32.7, 105.0], [32.8, 105.0], [32.9, 106.0], [33.0, 107.0], [33.1, 108.0], [33.2, 108.0], [33.3, 108.0], [33.4, 108.0], [33.5, 109.0], [33.6, 109.0], [33.7, 109.0], [33.8, 110.0], [33.9, 110.0], [34.0, 111.0], [34.1, 111.0], [34.2, 112.0], [34.3, 112.0], [34.4, 113.0], [34.5, 113.0], [34.6, 113.0], [34.7, 114.0], [34.8, 114.0], [34.9, 114.0], [35.0, 115.0], [35.1, 115.0], [35.2, 116.0], [35.3, 116.0], [35.4, 118.0], [35.5, 118.0], [35.6, 119.0], [35.7, 120.0], [35.8, 121.0], [35.9, 122.0], [36.0, 123.0], [36.1, 125.0], [36.2, 127.0], [36.3, 129.0], [36.4, 129.0], [36.5, 130.0], [36.6, 131.0], [36.7, 132.0], [36.8, 134.0], [36.9, 135.0], [37.0, 136.0], [37.1, 138.0], [37.2, 139.0], [37.3, 139.0], [37.4, 140.0], [37.5, 141.0], [37.6, 142.0], [37.7, 143.0], [37.8, 144.0], [37.9, 144.0], [38.0, 144.0], [38.1, 145.0], [38.2, 146.0], [38.3, 146.0], [38.4, 146.0], [38.5, 147.0], [38.6, 148.0], [38.7, 149.0], [38.8, 149.0], [38.9, 150.0], [39.0, 150.0], [39.1, 151.0], [39.2, 152.0], [39.3, 152.0], [39.4, 153.0], [39.5, 153.0], [39.6, 154.0], [39.7, 155.0], [39.8, 156.0], [39.9, 156.0], [40.0, 157.0], [40.1, 157.0], [40.2, 158.0], [40.3, 159.0], [40.4, 159.0], [40.5, 160.0], [40.6, 161.0], [40.7, 162.0], [40.8, 162.0], [40.9, 163.0], [41.0, 164.0], [41.1, 164.0], [41.2, 165.0], [41.3, 166.0], [41.4, 166.0], [41.5, 167.0], [41.6, 168.0], [41.7, 169.0], [41.8, 169.0], [41.9, 170.0], [42.0, 171.0], [42.1, 172.0], [42.2, 173.0], [42.3, 174.0], [42.4, 174.0], [42.5, 175.0], [42.6, 175.0], [42.7, 176.0], [42.8, 176.0], [42.9, 178.0], [43.0, 179.0], [43.1, 179.0], [43.2, 179.0], [43.3, 180.0], [43.4, 181.0], [43.5, 182.0], [43.6, 183.0], [43.7, 183.0], [43.8, 184.0], [43.9, 185.0], [44.0, 186.0], [44.1, 188.0], [44.2, 188.0], [44.3, 189.0], [44.4, 190.0], [44.5, 191.0], [44.6, 193.0], [44.7, 194.0], [44.8, 194.0], [44.9, 196.0], [45.0, 197.0], [45.1, 198.0], [45.2, 199.0], [45.3, 200.0], [45.4, 201.0], [45.5, 201.0], [45.6, 202.0], [45.7, 204.0], [45.8, 207.0], [45.9, 208.0], [46.0, 210.0], [46.1, 210.0], [46.2, 211.0], [46.3, 212.0], [46.4, 213.0], [46.5, 214.0], [46.6, 215.0], [46.7, 217.0], [46.8, 218.0], [46.9, 219.0], [47.0, 221.0], [47.1, 222.0], [47.2, 223.0], [47.3, 224.0], [47.4, 224.0], [47.5, 227.0], [47.6, 227.0], [47.7, 228.0], [47.8, 229.0], [47.9, 230.0], [48.0, 231.0], [48.1, 232.0], [48.2, 233.0], [48.3, 233.0], [48.4, 235.0], [48.5, 236.0], [48.6, 238.0], [48.7, 238.0], [48.8, 240.0], [48.9, 241.0], [49.0, 241.0], [49.1, 242.0], [49.2, 242.0], [49.3, 244.0], [49.4, 244.0], [49.5, 246.0], [49.6, 246.0], [49.7, 247.0], [49.8, 248.0], [49.9, 250.0], [50.0, 251.0], [50.1, 253.0], [50.2, 254.0], [50.3, 255.0], [50.4, 256.0], [50.5, 257.0], [50.6, 258.0], [50.7, 259.0], [50.8, 261.0], [50.9, 262.0], [51.0, 263.0], [51.1, 265.0], [51.2, 266.0], [51.3, 267.0], [51.4, 268.0], [51.5, 269.0], [51.6, 270.0], [51.7, 270.0], [51.8, 271.0], [51.9, 272.0], [52.0, 273.0], [52.1, 274.0], [52.2, 274.0], [52.3, 275.0], [52.4, 276.0], [52.5, 277.0], [52.6, 279.0], [52.7, 280.0], [52.8, 281.0], [52.9, 282.0], [53.0, 284.0], [53.1, 285.0], [53.2, 286.0], [53.3, 287.0], [53.4, 287.0], [53.5, 288.0], [53.6, 289.0], [53.7, 291.0], [53.8, 291.0], [53.9, 293.0], [54.0, 294.0], [54.1, 296.0], [54.2, 298.0], [54.3, 299.0], [54.4, 300.0], [54.5, 301.0], [54.6, 303.0], [54.7, 305.0], [54.8, 306.0], [54.9, 306.0], [55.0, 307.0], [55.1, 308.0], [55.2, 310.0], [55.3, 311.0], [55.4, 314.0], [55.5, 316.0], [55.6, 317.0], [55.7, 318.0], [55.8, 320.0], [55.9, 322.0], [56.0, 323.0], [56.1, 324.0], [56.2, 325.0], [56.3, 326.0], [56.4, 327.0], [56.5, 328.0], [56.6, 329.0], [56.7, 332.0], [56.8, 333.0], [56.9, 334.0], [57.0, 336.0], [57.1, 338.0], [57.2, 339.0], [57.3, 340.0], [57.4, 343.0], [57.5, 343.0], [57.6, 344.0], [57.7, 345.0], [57.8, 348.0], [57.9, 351.0], [58.0, 353.0], [58.1, 355.0], [58.2, 357.0], [58.3, 357.0], [58.4, 359.0], [58.5, 360.0], [58.6, 362.0], [58.7, 363.0], [58.8, 364.0], [58.9, 367.0], [59.0, 367.0], [59.1, 370.0], [59.2, 371.0], [59.3, 373.0], [59.4, 374.0], [59.5, 375.0], [59.6, 379.0], [59.7, 381.0], [59.8, 382.0], [59.9, 384.0], [60.0, 384.0], [60.1, 386.0], [60.2, 387.0], [60.3, 387.0], [60.4, 388.0], [60.5, 391.0], [60.6, 393.0], [60.7, 394.0], [60.8, 395.0], [60.9, 397.0], [61.0, 398.0], [61.1, 400.0], [61.2, 403.0], [61.3, 404.0], [61.4, 405.0], [61.5, 405.0], [61.6, 407.0], [61.7, 407.0], [61.8, 408.0], [61.9, 410.0], [62.0, 411.0], [62.1, 411.0], [62.2, 412.0], [62.3, 414.0], [62.4, 415.0], [62.5, 417.0], [62.6, 419.0], [62.7, 420.0], [62.8, 423.0], [62.9, 425.0], [63.0, 426.0], [63.1, 428.0], [63.2, 429.0], [63.3, 431.0], [63.4, 432.0], [63.5, 434.0], [63.6, 436.0], [63.7, 438.0], [63.8, 439.0], [63.9, 440.0], [64.0, 443.0], [64.1, 444.0], [64.2, 446.0], [64.3, 448.0], [64.4, 451.0], [64.5, 452.0], [64.6, 454.0], [64.7, 455.0], [64.8, 456.0], [64.9, 458.0], [65.0, 459.0], [65.1, 461.0], [65.2, 463.0], [65.3, 465.0], [65.4, 467.0], [65.5, 469.0], [65.6, 470.0], [65.7, 470.0], [65.8, 472.0], [65.9, 473.0], [66.0, 475.0], [66.1, 476.0], [66.2, 478.0], [66.3, 480.0], [66.4, 481.0], [66.5, 482.0], [66.6, 484.0], [66.7, 485.0], [66.8, 487.0], [66.9, 488.0], [67.0, 489.0], [67.1, 491.0], [67.2, 492.0], [67.3, 495.0], [67.4, 496.0], [67.5, 497.0], [67.6, 498.0], [67.7, 499.0], [67.8, 501.0], [67.9, 503.0], [68.0, 504.0], [68.1, 505.0], [68.2, 506.0], [68.3, 508.0], [68.4, 510.0], [68.5, 513.0], [68.6, 515.0], [68.7, 515.0], [68.8, 517.0], [68.9, 520.0], [69.0, 521.0], [69.1, 523.0], [69.2, 525.0], [69.3, 526.0], [69.4, 527.0], [69.5, 531.0], [69.6, 533.0], [69.7, 535.0], [69.8, 535.0], [69.9, 537.0], [70.0, 539.0], [70.1, 540.0], [70.2, 542.0], [70.3, 544.0], [70.4, 546.0], [70.5, 549.0], [70.6, 551.0], [70.7, 552.0], [70.8, 553.0], [70.9, 555.0], [71.0, 558.0], [71.1, 561.0], [71.2, 564.0], [71.3, 566.0], [71.4, 567.0], [71.5, 568.0], [71.6, 570.0], [71.7, 573.0], [71.8, 574.0], [71.9, 574.0], [72.0, 576.0], [72.1, 577.0], [72.2, 579.0], [72.3, 580.0], [72.4, 581.0], [72.5, 583.0], [72.6, 585.0], [72.7, 587.0], [72.8, 588.0], [72.9, 589.0], [73.0, 591.0], [73.1, 593.0], [73.2, 596.0], [73.3, 597.0], [73.4, 600.0], [73.5, 602.0], [73.6, 603.0], [73.7, 605.0], [73.8, 606.0], [73.9, 608.0], [74.0, 611.0], [74.1, 611.0], [74.2, 613.0], [74.3, 614.0], [74.4, 615.0], [74.5, 617.0], [74.6, 619.0], [74.7, 621.0], [74.8, 623.0], [74.9, 625.0], [75.0, 627.0], [75.1, 630.0], [75.2, 633.0], [75.3, 634.0], [75.4, 636.0], [75.5, 638.0], [75.6, 642.0], [75.7, 646.0], [75.8, 646.0], [75.9, 650.0], [76.0, 651.0], [76.1, 653.0], [76.2, 655.0], [76.3, 658.0], [76.4, 659.0], [76.5, 662.0], [76.6, 664.0], [76.7, 669.0], [76.8, 670.0], [76.9, 673.0], [77.0, 675.0], [77.1, 677.0], [77.2, 679.0], [77.3, 681.0], [77.4, 682.0], [77.5, 683.0], [77.6, 687.0], [77.7, 688.0], [77.8, 690.0], [77.9, 692.0], [78.0, 696.0], [78.1, 698.0], [78.2, 701.0], [78.3, 704.0], [78.4, 706.0], [78.5, 707.0], [78.6, 707.0], [78.7, 713.0], [78.8, 716.0], [78.9, 717.0], [79.0, 718.0], [79.1, 722.0], [79.2, 724.0], [79.3, 726.0], [79.4, 728.0], [79.5, 730.0], [79.6, 732.0], [79.7, 734.0], [79.8, 737.0], [79.9, 740.0], [80.0, 741.0], [80.1, 742.0], [80.2, 746.0], [80.3, 746.0], [80.4, 749.0], [80.5, 751.0], [80.6, 753.0], [80.7, 754.0], [80.8, 756.0], [80.9, 758.0], [81.0, 760.0], [81.1, 761.0], [81.2, 764.0], [81.3, 766.0], [81.4, 768.0], [81.5, 769.0], [81.6, 771.0], [81.7, 773.0], [81.8, 775.0], [81.9, 776.0], [82.0, 779.0], [82.1, 783.0], [82.2, 784.0], [82.3, 787.0], [82.4, 790.0], [82.5, 792.0], [82.6, 793.0], [82.7, 794.0], [82.8, 797.0], [82.9, 800.0], [83.0, 803.0], [83.1, 806.0], [83.2, 807.0], [83.3, 809.0], [83.4, 811.0], [83.5, 813.0], [83.6, 817.0], [83.7, 820.0], [83.8, 822.0], [83.9, 823.0], [84.0, 827.0], [84.1, 829.0], [84.2, 832.0], [84.3, 833.0], [84.4, 834.0], [84.5, 834.0], [84.6, 835.0], [84.7, 837.0], [84.8, 839.0], [84.9, 841.0], [85.0, 844.0], [85.1, 847.0], [85.2, 849.0], [85.3, 853.0], [85.4, 856.0], [85.5, 859.0], [85.6, 863.0], [85.7, 865.0], [85.8, 867.0], [85.9, 871.0], [86.0, 871.0], [86.1, 874.0], [86.2, 877.0], [86.3, 879.0], [86.4, 881.0], [86.5, 884.0], [86.6, 886.0], [86.7, 889.0], [86.8, 894.0], [86.9, 897.0], [87.0, 900.0], [87.1, 905.0], [87.2, 909.0], [87.3, 912.0], [87.4, 917.0], [87.5, 920.0], [87.6, 925.0], [87.7, 931.0], [87.8, 933.0], [87.9, 943.0], [88.0, 947.0], [88.1, 953.0], [88.2, 954.0], [88.3, 963.0], [88.4, 965.0], [88.5, 968.0], [88.6, 970.0], [88.7, 976.0], [88.8, 980.0], [88.9, 986.0], [89.0, 989.0], [89.1, 992.0], [89.2, 998.0], [89.3, 1003.0], [89.4, 1010.0], [89.5, 1013.0], [89.6, 1016.0], [89.7, 1023.0], [89.8, 1026.0], [89.9, 1029.0], [90.0, 1030.0], [90.1, 1039.0], [90.2, 1043.0], [90.3, 1050.0], [90.4, 1054.0], [90.5, 1061.0], [90.6, 1066.0], [90.7, 1073.0], [90.8, 1078.0], [90.9, 1084.0], [91.0, 1088.0], [91.1, 1092.0], [91.2, 1100.0], [91.3, 1104.0], [91.4, 1107.0], [91.5, 1111.0], [91.6, 1115.0], [91.7, 1121.0], [91.8, 1125.0], [91.9, 1135.0], [92.0, 1140.0], [92.1, 1149.0], [92.2, 1155.0], [92.3, 1158.0], [92.4, 1165.0], [92.5, 1168.0], [92.6, 1172.0], [92.7, 1177.0], [92.8, 1184.0], [92.9, 1187.0], [93.0, 1189.0], [93.1, 1203.0], [93.2, 1209.0], [93.3, 1212.0], [93.4, 1222.0], [93.5, 1230.0], [93.6, 1234.0], [93.7, 1236.0], [93.8, 1246.0], [93.9, 1251.0], [94.0, 1260.0], [94.1, 1264.0], [94.2, 1273.0], [94.3, 1279.0], [94.4, 1284.0], [94.5, 1290.0], [94.6, 1292.0], [94.7, 1296.0], [94.8, 1307.0], [94.9, 1318.0], [95.0, 1325.0], [95.1, 1331.0], [95.2, 1340.0], [95.3, 1351.0], [95.4, 1366.0], [95.5, 1373.0], [95.6, 1381.0], [95.7, 1393.0], [95.8, 1401.0], [95.9, 1413.0], [96.0, 1431.0], [96.1, 1454.0], [96.2, 1469.0], [96.3, 1476.0], [96.4, 1490.0], [96.5, 1506.0], [96.6, 1511.0], [96.7, 1523.0], [96.8, 1538.0], [96.9, 1549.0], [97.0, 1555.0], [97.1, 1566.0], [97.2, 1577.0], [97.3, 1602.0], [97.4, 1622.0], [97.5, 1637.0], [97.6, 1664.0], [97.7, 1683.0], [97.8, 1716.0], [97.9, 1742.0], [98.0, 1758.0], [98.1, 1794.0], [98.2, 1814.0], [98.3, 1829.0], [98.4, 1839.0], [98.5, 1878.0], [98.6, 1927.0], [98.7, 1981.0], [98.8, 2015.0], [98.9, 2088.0], [99.0, 2128.0], [99.1, 2164.0], [99.2, 2235.0], [99.3, 2277.0], [99.4, 2306.0], [99.5, 2372.0], [99.6, 2425.0], [99.7, 2462.0], [99.8, 2544.0], [99.9, 2990.0], [100.0, 3664.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1649.0, "series": [{"data": [[0.0, 1649.0], [600.0, 253.0], [700.0, 248.0], [800.0, 217.0], [900.0, 119.0], [1000.0, 103.0], [1100.0, 99.0], [1200.0, 87.0], [1300.0, 55.0], [1400.0, 37.0], [1500.0, 43.0], [100.0, 739.0], [1600.0, 24.0], [1700.0, 21.0], [1800.0, 20.0], [1900.0, 10.0], [2000.0, 14.0], [2100.0, 9.0], [2200.0, 11.0], [2300.0, 10.0], [2400.0, 11.0], [2500.0, 3.0], [2600.0, 2.0], [2800.0, 1.0], [2900.0, 3.0], [3000.0, 1.0], [200.0, 479.0], [3400.0, 1.0], [3600.0, 2.0], [300.0, 351.0], [400.0, 352.0], [500.0, 298.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 186.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3572.0, "series": [{"data": [[0.0, 3572.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1514.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 186.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.926339285714286, "minX": 1.60231614E12, "maxY": 12.0, "series": [{"data": [[1.60231632E12, 11.926339285714286], [1.6023162E12, 12.0], [1.60231626E12, 12.0], [1.60231614E12, 11.970013037809647]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231632E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 421.74900095147484, "minX": 1.0, "maxY": 3628.0, "series": [{"data": [[8.0, 1285.5], [4.0, 3493.0], [2.0, 3006.0], [1.0, 3628.0], [9.0, 1932.5], [5.0, 1296.0], [10.0, 1271.5], [11.0, 671.0], [6.0, 1303.5], [12.0, 421.74900095147484], [3.0, 2374.0], [7.0, 2960.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.98311836115328, 426.2655538694997]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6590.75, "minX": 1.60231614E12, "maxY": 1433900.1333333333, "series": [{"data": [[1.60231632E12, 769718.5666666667], [1.6023162E12, 1433900.1333333333], [1.60231626E12, 1415195.7], [1.60231614E12, 672581.9333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231632E12, 7865.083333333333], [1.6023162E12, 14892.616666666667], [1.60231626E12, 16231.1], [1.60231614E12, 6590.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231632E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 385.8589055793991, "minX": 1.60231614E12, "maxY": 493.194263363755, "series": [{"data": [[1.60231632E12, 474.247767857143], [1.6023162E12, 415.3724928366757], [1.60231626E12, 385.8589055793991], [1.60231614E12, 493.194263363755]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231632E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 385.5552575107297, "minX": 1.60231614E12, "maxY": 492.7887874837028, "series": [{"data": [[1.60231632E12, 473.9352678571428], [1.6023162E12, 415.039541547277], [1.60231626E12, 385.5552575107297], [1.60231614E12, 492.7887874837028]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231632E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006696428571428576, "minX": 1.60231614E12, "maxY": 0.18252933507170796, "series": [{"data": [[1.60231632E12, 0.006696428571428576], [1.6023162E12, 0.008595988538681928], [1.60231626E12, 0.009120171673819734], [1.60231614E12, 0.18252933507170796]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231632E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60231614E12, "maxY": 3664.0, "series": [{"data": [[1.60231632E12, 3664.0], [1.6023162E12, 2652.0], [1.60231626E12, 2618.0], [1.60231614E12, 2159.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231632E12, 35.0], [1.6023162E12, 36.0], [1.60231626E12, 34.0], [1.60231614E12, 60.91199981689453]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231632E12, 35.0], [1.6023162E12, 36.0], [1.60231626E12, 35.0], [1.60231614E12, 61.603200073242185]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231632E12, 35.0], [1.6023162E12, 36.0], [1.60231626E12, 34.717499777674675], [1.60231614E12, 61.295999908447264]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231632E12, 33.0], [1.6023162E12, 29.0], [1.60231626E12, 30.0], [1.60231614E12, 58.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231632E12, 319.5], [1.6023162E12, 232.0], [1.60231626E12, 216.0], [1.60231614E12, 419.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231632E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 75.0, "minX": 2.0, "maxY": 3317.0, "series": [{"data": [[2.0, 3317.0], [4.0, 2434.5], [5.0, 1800.0], [6.0, 1170.5], [7.0, 1559.5], [8.0, 1111.0], [9.0, 1275.5], [10.0, 843.5], [11.0, 861.0], [12.0, 903.0], [13.0, 764.5], [14.0, 656.0], [15.0, 707.0], [16.0, 789.0], [17.0, 635.0], [18.0, 681.5], [19.0, 550.0], [20.0, 502.0], [21.0, 454.0], [22.0, 579.5], [23.0, 447.0], [24.0, 443.0], [25.0, 402.0], [26.0, 253.5], [27.0, 320.0], [28.0, 434.5], [29.0, 385.5], [30.0, 313.0], [31.0, 214.0], [33.0, 324.0], [32.0, 266.5], [35.0, 172.0], [34.0, 335.0], [36.0, 96.5], [37.0, 122.0], [39.0, 181.5], [38.0, 178.0], [40.0, 224.0], [41.0, 110.0], [42.0, 199.5], [44.0, 155.0], [45.0, 262.0], [47.0, 158.5], [49.0, 85.0], [50.0, 103.0], [51.0, 219.0], [55.0, 84.0], [54.0, 152.0], [56.0, 96.0], [58.0, 116.5], [59.0, 178.0], [61.0, 80.0], [63.0, 153.5], [62.0, 108.0], [65.0, 77.0], [66.0, 167.0], [68.0, 142.5], [72.0, 159.0], [77.0, 75.0], [78.0, 85.5], [94.0, 85.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 75.0, "minX": 2.0, "maxY": 3316.5, "series": [{"data": [[2.0, 3316.5], [4.0, 2434.5], [5.0, 1800.0], [6.0, 1169.0], [7.0, 1558.5], [8.0, 1109.5], [9.0, 1275.0], [10.0, 842.5], [11.0, 861.0], [12.0, 902.0], [13.0, 763.0], [14.0, 655.5], [15.0, 706.0], [16.0, 788.5], [17.0, 635.0], [18.0, 680.5], [19.0, 549.5], [20.0, 501.0], [21.0, 454.0], [22.0, 579.0], [23.0, 447.0], [24.0, 442.0], [25.0, 401.0], [26.0, 253.5], [27.0, 320.0], [28.0, 434.0], [29.0, 385.0], [30.0, 313.0], [31.0, 214.0], [33.0, 324.0], [32.0, 266.5], [35.0, 171.5], [34.0, 334.5], [36.0, 96.5], [37.0, 122.0], [39.0, 181.5], [38.0, 178.0], [40.0, 223.5], [41.0, 110.0], [42.0, 199.5], [44.0, 155.0], [45.0, 261.5], [47.0, 158.5], [49.0, 85.0], [50.0, 103.0], [51.0, 219.0], [55.0, 84.0], [54.0, 152.0], [56.0, 96.0], [58.0, 116.5], [59.0, 178.0], [61.0, 80.0], [63.0, 153.5], [62.0, 108.0], [65.0, 77.0], [66.0, 167.0], [68.0, 142.0], [72.0, 159.0], [77.0, 75.0], [78.0, 85.5], [94.0, 85.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.983333333333333, "minX": 1.60231614E12, "maxY": 31.066666666666666, "series": [{"data": [[1.60231632E12, 14.733333333333333], [1.6023162E12, 29.083333333333332], [1.60231626E12, 31.066666666666666], [1.60231614E12, 12.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231632E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.783333333333333, "minX": 1.60231614E12, "maxY": 31.066666666666666, "series": [{"data": [[1.60231632E12, 14.933333333333334], [1.6023162E12, 29.083333333333332], [1.60231626E12, 31.066666666666666], [1.60231614E12, 12.783333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231632E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.783333333333333, "minX": 1.60231614E12, "maxY": 31.066666666666666, "series": [{"data": [[1.60231632E12, 14.933333333333334], [1.6023162E12, 29.083333333333332], [1.60231626E12, 31.066666666666666], [1.60231614E12, 12.783333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231632E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.783333333333333, "minX": 1.60231614E12, "maxY": 31.066666666666666, "series": [{"data": [[1.60231632E12, 14.933333333333334], [1.6023162E12, 29.083333333333332], [1.60231626E12, 31.066666666666666], [1.60231614E12, 12.783333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231632E12, "title": "Total Transactions Per Second"}},
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

