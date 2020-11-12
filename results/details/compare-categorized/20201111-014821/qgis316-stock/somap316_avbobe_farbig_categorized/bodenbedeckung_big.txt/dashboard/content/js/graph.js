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
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 21348.0, "series": [{"data": [[0.0, 9.0], [0.1, 13.0], [0.2, 15.0], [0.3, 17.0], [0.4, 18.0], [0.5, 19.0], [0.6, 19.0], [0.7, 20.0], [0.8, 21.0], [0.9, 22.0], [1.0, 22.0], [1.1, 22.0], [1.2, 22.0], [1.3, 23.0], [1.4, 23.0], [1.5, 23.0], [1.6, 24.0], [1.7, 24.0], [1.8, 24.0], [1.9, 25.0], [2.0, 25.0], [2.1, 25.0], [2.2, 26.0], [2.3, 26.0], [2.4, 26.0], [2.5, 27.0], [2.6, 27.0], [2.7, 27.0], [2.8, 27.0], [2.9, 27.0], [3.0, 28.0], [3.1, 28.0], [3.2, 28.0], [3.3, 28.0], [3.4, 29.0], [3.5, 29.0], [3.6, 29.0], [3.7, 30.0], [3.8, 30.0], [3.9, 30.0], [4.0, 31.0], [4.1, 31.0], [4.2, 31.0], [4.3, 31.0], [4.4, 32.0], [4.5, 32.0], [4.6, 32.0], [4.7, 33.0], [4.8, 33.0], [4.9, 33.0], [5.0, 33.0], [5.1, 34.0], [5.2, 34.0], [5.3, 34.0], [5.4, 35.0], [5.5, 35.0], [5.6, 36.0], [5.7, 36.0], [5.8, 37.0], [5.9, 37.0], [6.0, 38.0], [6.1, 38.0], [6.2, 38.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 40.0], [6.8, 40.0], [6.9, 41.0], [7.0, 41.0], [7.1, 42.0], [7.2, 42.0], [7.3, 43.0], [7.4, 44.0], [7.5, 44.0], [7.6, 45.0], [7.7, 45.0], [7.8, 45.0], [7.9, 46.0], [8.0, 46.0], [8.1, 47.0], [8.2, 47.0], [8.3, 47.0], [8.4, 48.0], [8.5, 48.0], [8.6, 49.0], [8.7, 49.0], [8.8, 49.0], [8.9, 50.0], [9.0, 50.0], [9.1, 50.0], [9.2, 51.0], [9.3, 51.0], [9.4, 51.0], [9.5, 51.0], [9.6, 52.0], [9.7, 52.0], [9.8, 52.0], [9.9, 52.0], [10.0, 53.0], [10.1, 53.0], [10.2, 54.0], [10.3, 54.0], [10.4, 54.0], [10.5, 55.0], [10.6, 55.0], [10.7, 55.0], [10.8, 56.0], [10.9, 56.0], [11.0, 56.0], [11.1, 57.0], [11.2, 57.0], [11.3, 57.0], [11.4, 58.0], [11.5, 58.0], [11.6, 59.0], [11.7, 59.0], [11.8, 60.0], [11.9, 60.0], [12.0, 60.0], [12.1, 60.0], [12.2, 61.0], [12.3, 61.0], [12.4, 62.0], [12.5, 62.0], [12.6, 63.0], [12.7, 63.0], [12.8, 63.0], [12.9, 63.0], [13.0, 64.0], [13.1, 64.0], [13.2, 65.0], [13.3, 65.0], [13.4, 66.0], [13.5, 66.0], [13.6, 66.0], [13.7, 67.0], [13.8, 67.0], [13.9, 67.0], [14.0, 68.0], [14.1, 68.0], [14.2, 68.0], [14.3, 69.0], [14.4, 69.0], [14.5, 69.0], [14.6, 70.0], [14.7, 70.0], [14.8, 70.0], [14.9, 71.0], [15.0, 71.0], [15.1, 71.0], [15.2, 72.0], [15.3, 72.0], [15.4, 72.0], [15.5, 73.0], [15.6, 74.0], [15.7, 74.0], [15.8, 74.0], [15.9, 75.0], [16.0, 75.0], [16.1, 75.0], [16.2, 75.0], [16.3, 76.0], [16.4, 76.0], [16.5, 78.0], [16.6, 78.0], [16.7, 79.0], [16.8, 79.0], [16.9, 80.0], [17.0, 80.0], [17.1, 80.0], [17.2, 80.0], [17.3, 81.0], [17.4, 81.0], [17.5, 82.0], [17.6, 82.0], [17.7, 83.0], [17.8, 83.0], [17.9, 84.0], [18.0, 84.0], [18.1, 85.0], [18.2, 85.0], [18.3, 86.0], [18.4, 86.0], [18.5, 87.0], [18.6, 88.0], [18.7, 88.0], [18.8, 89.0], [18.9, 90.0], [19.0, 90.0], [19.1, 90.0], [19.2, 91.0], [19.3, 92.0], [19.4, 92.0], [19.5, 93.0], [19.6, 93.0], [19.7, 94.0], [19.8, 94.0], [19.9, 95.0], [20.0, 96.0], [20.1, 97.0], [20.2, 97.0], [20.3, 97.0], [20.4, 98.0], [20.5, 98.0], [20.6, 99.0], [20.7, 100.0], [20.8, 101.0], [20.9, 101.0], [21.0, 102.0], [21.1, 102.0], [21.2, 103.0], [21.3, 103.0], [21.4, 104.0], [21.5, 104.0], [21.6, 105.0], [21.7, 105.0], [21.8, 106.0], [21.9, 107.0], [22.0, 107.0], [22.1, 108.0], [22.2, 109.0], [22.3, 110.0], [22.4, 111.0], [22.5, 112.0], [22.6, 112.0], [22.7, 113.0], [22.8, 114.0], [22.9, 115.0], [23.0, 115.0], [23.1, 116.0], [23.2, 116.0], [23.3, 117.0], [23.4, 118.0], [23.5, 118.0], [23.6, 119.0], [23.7, 120.0], [23.8, 120.0], [23.9, 121.0], [24.0, 122.0], [24.1, 123.0], [24.2, 124.0], [24.3, 124.0], [24.4, 125.0], [24.5, 125.0], [24.6, 125.0], [24.7, 126.0], [24.8, 127.0], [24.9, 127.0], [25.0, 127.0], [25.1, 128.0], [25.2, 129.0], [25.3, 130.0], [25.4, 131.0], [25.5, 132.0], [25.6, 132.0], [25.7, 133.0], [25.8, 134.0], [25.9, 134.0], [26.0, 134.0], [26.1, 136.0], [26.2, 136.0], [26.3, 137.0], [26.4, 137.0], [26.5, 138.0], [26.6, 139.0], [26.7, 140.0], [26.8, 141.0], [26.9, 141.0], [27.0, 142.0], [27.1, 142.0], [27.2, 143.0], [27.3, 143.0], [27.4, 143.0], [27.5, 144.0], [27.6, 144.0], [27.7, 145.0], [27.8, 146.0], [27.9, 147.0], [28.0, 147.0], [28.1, 148.0], [28.2, 149.0], [28.3, 150.0], [28.4, 151.0], [28.5, 151.0], [28.6, 152.0], [28.7, 152.0], [28.8, 153.0], [28.9, 154.0], [29.0, 155.0], [29.1, 155.0], [29.2, 155.0], [29.3, 156.0], [29.4, 157.0], [29.5, 157.0], [29.6, 158.0], [29.7, 159.0], [29.8, 160.0], [29.9, 160.0], [30.0, 160.0], [30.1, 161.0], [30.2, 162.0], [30.3, 163.0], [30.4, 163.0], [30.5, 164.0], [30.6, 164.0], [30.7, 165.0], [30.8, 165.0], [30.9, 166.0], [31.0, 166.0], [31.1, 166.0], [31.2, 167.0], [31.3, 167.0], [31.4, 167.0], [31.5, 168.0], [31.6, 169.0], [31.7, 169.0], [31.8, 170.0], [31.9, 170.0], [32.0, 171.0], [32.1, 171.0], [32.2, 172.0], [32.3, 173.0], [32.4, 173.0], [32.5, 174.0], [32.6, 174.0], [32.7, 175.0], [32.8, 176.0], [32.9, 177.0], [33.0, 178.0], [33.1, 179.0], [33.2, 179.0], [33.3, 179.0], [33.4, 180.0], [33.5, 180.0], [33.6, 181.0], [33.7, 183.0], [33.8, 183.0], [33.9, 184.0], [34.0, 185.0], [34.1, 185.0], [34.2, 186.0], [34.3, 187.0], [34.4, 187.0], [34.5, 188.0], [34.6, 189.0], [34.7, 189.0], [34.8, 190.0], [34.9, 192.0], [35.0, 192.0], [35.1, 193.0], [35.2, 194.0], [35.3, 195.0], [35.4, 195.0], [35.5, 196.0], [35.6, 196.0], [35.7, 198.0], [35.8, 199.0], [35.9, 200.0], [36.0, 201.0], [36.1, 203.0], [36.2, 204.0], [36.3, 204.0], [36.4, 205.0], [36.5, 205.0], [36.6, 206.0], [36.7, 207.0], [36.8, 208.0], [36.9, 210.0], [37.0, 211.0], [37.1, 212.0], [37.2, 214.0], [37.3, 215.0], [37.4, 217.0], [37.5, 218.0], [37.6, 219.0], [37.7, 220.0], [37.8, 222.0], [37.9, 224.0], [38.0, 225.0], [38.1, 225.0], [38.2, 227.0], [38.3, 227.0], [38.4, 228.0], [38.5, 229.0], [38.6, 230.0], [38.7, 231.0], [38.8, 232.0], [38.9, 232.0], [39.0, 234.0], [39.1, 236.0], [39.2, 237.0], [39.3, 237.0], [39.4, 239.0], [39.5, 239.0], [39.6, 241.0], [39.7, 242.0], [39.8, 243.0], [39.9, 244.0], [40.0, 244.0], [40.1, 246.0], [40.2, 247.0], [40.3, 247.0], [40.4, 248.0], [40.5, 249.0], [40.6, 250.0], [40.7, 250.0], [40.8, 252.0], [40.9, 252.0], [41.0, 253.0], [41.1, 254.0], [41.2, 255.0], [41.3, 257.0], [41.4, 258.0], [41.5, 260.0], [41.6, 262.0], [41.7, 263.0], [41.8, 265.0], [41.9, 265.0], [42.0, 266.0], [42.1, 266.0], [42.2, 267.0], [42.3, 268.0], [42.4, 269.0], [42.5, 269.0], [42.6, 270.0], [42.7, 272.0], [42.8, 273.0], [42.9, 274.0], [43.0, 275.0], [43.1, 276.0], [43.2, 278.0], [43.3, 279.0], [43.4, 280.0], [43.5, 281.0], [43.6, 281.0], [43.7, 282.0], [43.8, 282.0], [43.9, 283.0], [44.0, 283.0], [44.1, 285.0], [44.2, 285.0], [44.3, 286.0], [44.4, 287.0], [44.5, 288.0], [44.6, 289.0], [44.7, 289.0], [44.8, 291.0], [44.9, 291.0], [45.0, 292.0], [45.1, 293.0], [45.2, 294.0], [45.3, 295.0], [45.4, 297.0], [45.5, 297.0], [45.6, 297.0], [45.7, 298.0], [45.8, 298.0], [45.9, 299.0], [46.0, 299.0], [46.1, 300.0], [46.2, 300.0], [46.3, 300.0], [46.4, 301.0], [46.5, 302.0], [46.6, 303.0], [46.7, 303.0], [46.8, 304.0], [46.9, 304.0], [47.0, 305.0], [47.1, 306.0], [47.2, 306.0], [47.3, 307.0], [47.4, 307.0], [47.5, 308.0], [47.6, 308.0], [47.7, 309.0], [47.8, 309.0], [47.9, 310.0], [48.0, 311.0], [48.1, 311.0], [48.2, 311.0], [48.3, 312.0], [48.4, 312.0], [48.5, 313.0], [48.6, 313.0], [48.7, 314.0], [48.8, 314.0], [48.9, 315.0], [49.0, 316.0], [49.1, 316.0], [49.2, 317.0], [49.3, 318.0], [49.4, 318.0], [49.5, 319.0], [49.6, 319.0], [49.7, 320.0], [49.8, 321.0], [49.9, 321.0], [50.0, 322.0], [50.1, 322.0], [50.2, 323.0], [50.3, 323.0], [50.4, 324.0], [50.5, 325.0], [50.6, 325.0], [50.7, 326.0], [50.8, 326.0], [50.9, 327.0], [51.0, 327.0], [51.1, 328.0], [51.2, 328.0], [51.3, 329.0], [51.4, 329.0], [51.5, 330.0], [51.6, 331.0], [51.7, 331.0], [51.8, 332.0], [51.9, 332.0], [52.0, 332.0], [52.1, 334.0], [52.2, 334.0], [52.3, 335.0], [52.4, 336.0], [52.5, 337.0], [52.6, 337.0], [52.7, 338.0], [52.8, 339.0], [52.9, 340.0], [53.0, 341.0], [53.1, 341.0], [53.2, 342.0], [53.3, 342.0], [53.4, 343.0], [53.5, 344.0], [53.6, 345.0], [53.7, 346.0], [53.8, 346.0], [53.9, 347.0], [54.0, 347.0], [54.1, 348.0], [54.2, 348.0], [54.3, 350.0], [54.4, 351.0], [54.5, 352.0], [54.6, 354.0], [54.7, 355.0], [54.8, 356.0], [54.9, 356.0], [55.0, 357.0], [55.1, 358.0], [55.2, 359.0], [55.3, 361.0], [55.4, 362.0], [55.5, 364.0], [55.6, 364.0], [55.7, 364.0], [55.8, 365.0], [55.9, 366.0], [56.0, 367.0], [56.1, 368.0], [56.2, 370.0], [56.3, 371.0], [56.4, 371.0], [56.5, 372.0], [56.6, 373.0], [56.7, 374.0], [56.8, 375.0], [56.9, 376.0], [57.0, 377.0], [57.1, 377.0], [57.2, 378.0], [57.3, 379.0], [57.4, 380.0], [57.5, 381.0], [57.6, 382.0], [57.7, 383.0], [57.8, 383.0], [57.9, 385.0], [58.0, 386.0], [58.1, 386.0], [58.2, 387.0], [58.3, 387.0], [58.4, 388.0], [58.5, 389.0], [58.6, 390.0], [58.7, 391.0], [58.8, 392.0], [58.9, 392.0], [59.0, 393.0], [59.1, 393.0], [59.2, 394.0], [59.3, 396.0], [59.4, 397.0], [59.5, 398.0], [59.6, 399.0], [59.7, 400.0], [59.8, 401.0], [59.9, 402.0], [60.0, 402.0], [60.1, 404.0], [60.2, 404.0], [60.3, 405.0], [60.4, 406.0], [60.5, 408.0], [60.6, 411.0], [60.7, 412.0], [60.8, 413.0], [60.9, 414.0], [61.0, 416.0], [61.1, 417.0], [61.2, 418.0], [61.3, 419.0], [61.4, 421.0], [61.5, 423.0], [61.6, 425.0], [61.7, 426.0], [61.8, 429.0], [61.9, 430.0], [62.0, 431.0], [62.1, 433.0], [62.2, 435.0], [62.3, 436.0], [62.4, 438.0], [62.5, 439.0], [62.6, 441.0], [62.7, 442.0], [62.8, 445.0], [62.9, 446.0], [63.0, 447.0], [63.1, 448.0], [63.2, 450.0], [63.3, 451.0], [63.4, 452.0], [63.5, 452.0], [63.6, 453.0], [63.7, 458.0], [63.8, 459.0], [63.9, 461.0], [64.0, 463.0], [64.1, 464.0], [64.2, 464.0], [64.3, 466.0], [64.4, 468.0], [64.5, 471.0], [64.6, 474.0], [64.7, 475.0], [64.8, 477.0], [64.9, 479.0], [65.0, 480.0], [65.1, 482.0], [65.2, 483.0], [65.3, 486.0], [65.4, 487.0], [65.5, 492.0], [65.6, 493.0], [65.7, 494.0], [65.8, 495.0], [65.9, 497.0], [66.0, 498.0], [66.1, 500.0], [66.2, 502.0], [66.3, 504.0], [66.4, 505.0], [66.5, 507.0], [66.6, 508.0], [66.7, 510.0], [66.8, 514.0], [66.9, 516.0], [67.0, 519.0], [67.1, 520.0], [67.2, 522.0], [67.3, 525.0], [67.4, 527.0], [67.5, 529.0], [67.6, 532.0], [67.7, 534.0], [67.8, 535.0], [67.9, 537.0], [68.0, 539.0], [68.1, 542.0], [68.2, 546.0], [68.3, 548.0], [68.4, 551.0], [68.5, 552.0], [68.6, 554.0], [68.7, 555.0], [68.8, 557.0], [68.9, 558.0], [69.0, 559.0], [69.1, 561.0], [69.2, 562.0], [69.3, 562.0], [69.4, 564.0], [69.5, 565.0], [69.6, 565.0], [69.7, 566.0], [69.8, 568.0], [69.9, 569.0], [70.0, 570.0], [70.1, 571.0], [70.2, 572.0], [70.3, 573.0], [70.4, 574.0], [70.5, 574.0], [70.6, 575.0], [70.7, 576.0], [70.8, 578.0], [70.9, 578.0], [71.0, 579.0], [71.1, 579.0], [71.2, 580.0], [71.3, 581.0], [71.4, 582.0], [71.5, 583.0], [71.6, 584.0], [71.7, 586.0], [71.8, 588.0], [71.9, 589.0], [72.0, 589.0], [72.1, 590.0], [72.2, 590.0], [72.3, 591.0], [72.4, 592.0], [72.5, 592.0], [72.6, 593.0], [72.7, 593.0], [72.8, 594.0], [72.9, 595.0], [73.0, 596.0], [73.1, 597.0], [73.2, 597.0], [73.3, 598.0], [73.4, 600.0], [73.5, 600.0], [73.6, 601.0], [73.7, 602.0], [73.8, 602.0], [73.9, 603.0], [74.0, 605.0], [74.1, 606.0], [74.2, 607.0], [74.3, 608.0], [74.4, 609.0], [74.5, 609.0], [74.6, 610.0], [74.7, 611.0], [74.8, 612.0], [74.9, 613.0], [75.0, 613.0], [75.1, 614.0], [75.2, 614.0], [75.3, 615.0], [75.4, 616.0], [75.5, 617.0], [75.6, 618.0], [75.7, 619.0], [75.8, 620.0], [75.9, 620.0], [76.0, 621.0], [76.1, 622.0], [76.2, 623.0], [76.3, 624.0], [76.4, 625.0], [76.5, 626.0], [76.6, 627.0], [76.7, 628.0], [76.8, 629.0], [76.9, 631.0], [77.0, 632.0], [77.1, 634.0], [77.2, 635.0], [77.3, 636.0], [77.4, 638.0], [77.5, 639.0], [77.6, 640.0], [77.7, 642.0], [77.8, 644.0], [77.9, 647.0], [78.0, 648.0], [78.1, 650.0], [78.2, 651.0], [78.3, 652.0], [78.4, 653.0], [78.5, 655.0], [78.6, 656.0], [78.7, 658.0], [78.8, 660.0], [78.9, 662.0], [79.0, 665.0], [79.1, 669.0], [79.2, 671.0], [79.3, 674.0], [79.4, 675.0], [79.5, 676.0], [79.6, 681.0], [79.7, 684.0], [79.8, 688.0], [79.9, 691.0], [80.0, 694.0], [80.1, 699.0], [80.2, 701.0], [80.3, 703.0], [80.4, 705.0], [80.5, 706.0], [80.6, 710.0], [80.7, 712.0], [80.8, 715.0], [80.9, 718.0], [81.0, 719.0], [81.1, 722.0], [81.2, 726.0], [81.3, 730.0], [81.4, 732.0], [81.5, 736.0], [81.6, 739.0], [81.7, 744.0], [81.8, 746.0], [81.9, 749.0], [82.0, 752.0], [82.1, 756.0], [82.2, 760.0], [82.3, 764.0], [82.4, 766.0], [82.5, 769.0], [82.6, 773.0], [82.7, 776.0], [82.8, 777.0], [82.9, 779.0], [83.0, 783.0], [83.1, 790.0], [83.2, 794.0], [83.3, 799.0], [83.4, 801.0], [83.5, 804.0], [83.6, 808.0], [83.7, 815.0], [83.8, 817.0], [83.9, 819.0], [84.0, 822.0], [84.1, 824.0], [84.2, 826.0], [84.3, 828.0], [84.4, 831.0], [84.5, 834.0], [84.6, 839.0], [84.7, 841.0], [84.8, 845.0], [84.9, 848.0], [85.0, 849.0], [85.1, 852.0], [85.2, 854.0], [85.3, 856.0], [85.4, 857.0], [85.5, 859.0], [85.6, 861.0], [85.7, 864.0], [85.8, 865.0], [85.9, 867.0], [86.0, 868.0], [86.1, 871.0], [86.2, 871.0], [86.3, 873.0], [86.4, 874.0], [86.5, 877.0], [86.6, 881.0], [86.7, 883.0], [86.8, 884.0], [86.9, 886.0], [87.0, 887.0], [87.1, 888.0], [87.2, 891.0], [87.3, 894.0], [87.4, 896.0], [87.5, 898.0], [87.6, 900.0], [87.7, 904.0], [87.8, 907.0], [87.9, 914.0], [88.0, 916.0], [88.1, 921.0], [88.2, 924.0], [88.3, 926.0], [88.4, 929.0], [88.5, 933.0], [88.6, 936.0], [88.7, 937.0], [88.8, 940.0], [88.9, 944.0], [89.0, 950.0], [89.1, 958.0], [89.2, 965.0], [89.3, 970.0], [89.4, 984.0], [89.5, 992.0], [89.6, 1000.0], [89.7, 1010.0], [89.8, 1017.0], [89.9, 1021.0], [90.0, 1038.0], [90.1, 1048.0], [90.2, 1053.0], [90.3, 1062.0], [90.4, 1075.0], [90.5, 1080.0], [90.6, 1084.0], [90.7, 1092.0], [90.8, 1101.0], [90.9, 1105.0], [91.0, 1109.0], [91.1, 1114.0], [91.2, 1120.0], [91.3, 1124.0], [91.4, 1129.0], [91.5, 1135.0], [91.6, 1138.0], [91.7, 1138.0], [91.8, 1146.0], [91.9, 1149.0], [92.0, 1150.0], [92.1, 1155.0], [92.2, 1161.0], [92.3, 1163.0], [92.4, 1167.0], [92.5, 1171.0], [92.6, 1174.0], [92.7, 1178.0], [92.8, 1182.0], [92.9, 1188.0], [93.0, 1189.0], [93.1, 1200.0], [93.2, 1217.0], [93.3, 1225.0], [93.4, 1233.0], [93.5, 1237.0], [93.6, 1250.0], [93.7, 1269.0], [93.8, 1292.0], [93.9, 1311.0], [94.0, 1326.0], [94.1, 1345.0], [94.2, 1369.0], [94.3, 1393.0], [94.4, 1437.0], [94.5, 1492.0], [94.6, 1534.0], [94.7, 1556.0], [94.8, 1569.0], [94.9, 1590.0], [95.0, 1603.0], [95.1, 1638.0], [95.2, 1676.0], [95.3, 1781.0], [95.4, 1861.0], [95.5, 1916.0], [95.6, 1964.0], [95.7, 2008.0], [95.8, 2070.0], [95.9, 2149.0], [96.0, 2239.0], [96.1, 2328.0], [96.2, 2394.0], [96.3, 2507.0], [96.4, 2612.0], [96.5, 2678.0], [96.6, 2740.0], [96.7, 2779.0], [96.8, 2870.0], [96.9, 2918.0], [97.0, 2948.0], [97.1, 3038.0], [97.2, 3137.0], [97.3, 3230.0], [97.4, 3343.0], [97.5, 3447.0], [97.6, 3483.0], [97.7, 3581.0], [97.8, 3789.0], [97.9, 3826.0], [98.0, 3917.0], [98.1, 3943.0], [98.2, 4179.0], [98.3, 4406.0], [98.4, 4804.0], [98.5, 5205.0], [98.6, 5271.0], [98.7, 5514.0], [98.8, 6033.0], [98.9, 7645.0], [99.0, 7828.0], [99.1, 7880.0], [99.2, 7991.0], [99.3, 8130.0], [99.4, 8563.0], [99.5, 10446.0], [99.6, 10623.0], [99.7, 10702.0], [99.8, 11045.0], [99.9, 16555.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1071.0, "series": [{"data": [[0.0, 1071.0], [600.0, 353.0], [700.0, 166.0], [800.0, 220.0], [900.0, 105.0], [1000.0, 62.0], [1100.0, 119.0], [1200.0, 40.0], [1300.0, 24.0], [1400.0, 10.0], [1500.0, 22.0], [1600.0, 14.0], [1700.0, 6.0], [1800.0, 9.0], [1900.0, 9.0], [2000.0, 10.0], [2100.0, 6.0], [2300.0, 8.0], [2200.0, 5.0], [2400.0, 3.0], [2500.0, 5.0], [2600.0, 7.0], [2800.0, 9.0], [2700.0, 10.0], [2900.0, 10.0], [3000.0, 5.0], [3100.0, 4.0], [3300.0, 9.0], [3200.0, 4.0], [3400.0, 7.0], [3500.0, 4.0], [3600.0, 1.0], [3700.0, 7.0], [3800.0, 6.0], [3900.0, 8.0], [4100.0, 5.0], [4300.0, 2.0], [4200.0, 1.0], [4400.0, 1.0], [4500.0, 2.0], [4700.0, 2.0], [4800.0, 3.0], [4900.0, 1.0], [5000.0, 2.0], [5300.0, 2.0], [5200.0, 7.0], [5600.0, 1.0], [5500.0, 4.0], [5700.0, 1.0], [6000.0, 1.0], [6300.0, 1.0], [6400.0, 1.0], [6700.0, 2.0], [7600.0, 2.0], [7800.0, 10.0], [7900.0, 2.0], [7700.0, 3.0], [8000.0, 3.0], [8100.0, 3.0], [8300.0, 1.0], [8200.0, 2.0], [8500.0, 1.0], [9100.0, 3.0], [10200.0, 1.0], [10400.0, 4.0], [10600.0, 4.0], [10700.0, 5.0], [10500.0, 2.0], [11100.0, 1.0], [11000.0, 2.0], [10900.0, 1.0], [11200.0, 1.0], [11300.0, 1.0], [16800.0, 1.0], [16500.0, 1.0], [18300.0, 1.0], [21100.0, 2.0], [21300.0, 1.0], [100.0, 791.0], [200.0, 530.0], [300.0, 702.0], [400.0, 336.0], [500.0, 376.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 285.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3432.0, "series": [{"data": [[0.0, 3432.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1473.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 285.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.1875, "minX": 1.60505988E12, "maxY": 10.0, "series": [{"data": [[1.60506006E12, 10.0], [1.60505988E12, 9.970414201183427], [1.60506018E12, 10.0], [1.60506E12, 10.0], [1.60506012E12, 10.0], [1.60505994E12, 10.0], [1.60506024E12, 7.1875]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506024E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 298.3333333333333, "minX": 1.0, "maxY": 7645.0, "series": [{"data": [[8.0, 715.0], [4.0, 565.0], [2.0, 825.0], [1.0, 7645.0], [9.0, 298.3333333333333], [10.0, 599.7413060278207], [5.0, 718.0], [6.0, 528.0], [3.0, 708.0], [7.0, 526.6666666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.989402697495155, 600.9932562620429]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 124.66666666666667, "minX": 1.60505988E12, "maxY": 5503532.45, "series": [{"data": [[1.60506006E12, 5239331.666666667], [1.60505988E12, 1349663.75], [1.60506018E12, 4128933.3333333335], [1.60506E12, 5503532.45], [1.60506012E12, 4918132.65], [1.60505994E12, 2370030.533333333], [1.60506024E12, 132645.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60506006E12, 10615.933333333332], [1.60505988E12, 2540.483333333333], [1.60506018E12, 7988.683333333333], [1.60506E12, 6511.533333333334], [1.60506012E12, 7067.05], [1.60505994E12, 5093.283333333334], [1.60506024E12, 124.66666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506024E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 335.1479289940828, "minX": 1.60505988E12, "maxY": 1006.875, "series": [{"data": [[1.60506006E12, 442.0188953488375], [1.60505988E12, 335.1479289940828], [1.60506018E12, 604.5206692913381], [1.60506E12, 684.7817319098464], [1.60506012E12, 645.2551130247588], [1.60505994E12, 878.9300595238099], [1.60506024E12, 1006.875]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506024E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 333.3491124260357, "minX": 1.60505988E12, "maxY": 1004.625, "series": [{"data": [[1.60506006E12, 440.70930232558067], [1.60505988E12, 333.3491124260357], [1.60506018E12, 603.2647637795282], [1.60506E12, 682.2894424673783], [1.60506012E12, 643.7481162540369], [1.60505994E12, 877.4285714285711], [1.60506024E12, 1004.625]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506024E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60505988E12, "maxY": 0.24852071005917198, "series": [{"data": [[1.60506006E12, 0.010174418604651151], [1.60505988E12, 0.24852071005917198], [1.60506018E12, 0.011811023622047268], [1.60506E12, 0.011862396204033218], [1.60506012E12, 0.010764262648008612], [1.60505994E12, 0.02083333333333334], [1.60506024E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506024E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.60505988E12, "maxY": 21348.0, "series": [{"data": [[1.60506006E12, 21194.0], [1.60505988E12, 1311.0], [1.60506018E12, 21348.0], [1.60506E12, 10718.0], [1.60506012E12, 7897.0], [1.60505994E12, 18357.0], [1.60506024E12, 7645.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60506006E12, 19.0], [1.60505988E12, 24.050999919176103], [1.60506018E12, 24.152999757528306], [1.60506E12, 22.0], [1.60506012E12, 20.36999977827072], [1.60505994E12, 18.227999358177186], [1.60506024E12, 147.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60506006E12, 19.632300131320953], [1.60505988E12, 24.35610003232956], [1.60506018E12, 25.0], [1.60506E12, 22.355600080490113], [1.60506012E12, 21.0], [1.60505994E12, 20.650800256729127], [1.60506024E12, 147.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60506006E12, 19.08149983584881], [1.60505988E12, 24.22049995958805], [1.60506018E12, 24.661499878764154], [1.60506E12, 22.01799989938736], [1.60506012E12, 20.83499988913536], [1.60505994E12, 19.57399967908859], [1.60506024E12, 147.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60506006E12, 15.0], [1.60505988E12, 22.0], [1.60506018E12, 18.0], [1.60506E12, 12.0], [1.60506012E12, 9.0], [1.60505994E12, 14.0], [1.60506024E12, 147.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60506006E12, 253.0], [1.60505988E12, 305.0], [1.60506018E12, 320.5], [1.60506E12, 525.0], [1.60506012E12, 368.0], [1.60505994E12, 253.0], [1.60506024E12, 593.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506024E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 79.0, "minX": 1.0, "maxY": 3681.0, "series": [{"data": [[2.0, 1198.0], [32.0, 155.5], [34.0, 180.5], [35.0, 265.5], [37.0, 270.0], [36.0, 191.5], [40.0, 132.5], [41.0, 115.0], [43.0, 238.0], [42.0, 118.0], [45.0, 190.0], [44.0, 168.5], [46.0, 106.5], [48.0, 205.0], [3.0, 833.0], [50.0, 170.0], [57.0, 79.0], [60.0, 81.5], [4.0, 955.0], [65.0, 96.0], [5.0, 614.0], [6.0, 323.5], [7.0, 653.0], [8.0, 343.0], [9.0, 582.0], [10.0, 568.0], [11.0, 425.0], [12.0, 632.0], [13.0, 609.0], [14.0, 579.0], [15.0, 557.0], [16.0, 414.0], [1.0, 3681.0], [17.0, 436.0], [18.0, 419.0], [19.0, 392.5], [20.0, 552.0], [21.0, 339.0], [22.0, 345.0], [23.0, 267.0], [24.0, 295.0], [25.0, 339.0], [26.0, 311.0], [27.0, 275.0], [28.0, 216.5], [29.0, 282.0], [30.0, 208.0], [31.0, 274.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 78.0, "minX": 1.0, "maxY": 3679.5, "series": [{"data": [[2.0, 1197.0], [32.0, 155.5], [34.0, 180.5], [35.0, 265.0], [37.0, 269.5], [36.0, 190.5], [40.0, 132.0], [41.0, 114.0], [43.0, 237.0], [42.0, 118.0], [45.0, 190.0], [44.0, 168.0], [46.0, 106.0], [48.0, 204.0], [3.0, 829.5], [50.0, 169.0], [57.0, 78.0], [60.0, 80.5], [4.0, 954.0], [65.0, 96.0], [5.0, 614.0], [6.0, 322.0], [7.0, 653.0], [8.0, 342.5], [9.0, 578.0], [10.0, 562.0], [11.0, 424.0], [12.0, 628.0], [13.0, 605.0], [14.0, 576.5], [15.0, 555.0], [16.0, 411.5], [1.0, 3679.5], [17.0, 436.0], [18.0, 418.0], [19.0, 392.5], [20.0, 551.0], [21.0, 338.0], [22.0, 343.5], [23.0, 266.0], [24.0, 289.5], [25.0, 337.5], [26.0, 310.5], [27.0, 274.5], [28.0, 216.0], [29.0, 281.5], [30.0, 207.0], [31.0, 270.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.60505988E12, "maxY": 22.933333333333334, "series": [{"data": [[1.60506006E12, 22.933333333333334], [1.60505988E12, 5.8], [1.60506018E12, 16.933333333333334], [1.60506E12, 14.05], [1.60506012E12, 15.483333333333333], [1.60505994E12, 11.2], [1.60506024E12, 0.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506024E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60505988E12, "maxY": 22.933333333333334, "series": [{"data": [[1.60506006E12, 22.933333333333334], [1.60505988E12, 5.633333333333334], [1.60506018E12, 16.933333333333334], [1.60506E12, 14.05], [1.60506012E12, 15.483333333333333], [1.60505994E12, 11.2], [1.60506024E12, 0.26666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506024E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60505988E12, "maxY": 22.933333333333334, "series": [{"data": [[1.60506006E12, 22.933333333333334], [1.60505988E12, 5.633333333333334], [1.60506018E12, 16.933333333333334], [1.60506E12, 14.05], [1.60506012E12, 15.483333333333333], [1.60505994E12, 11.2], [1.60506024E12, 0.26666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506024E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60505988E12, "maxY": 22.933333333333334, "series": [{"data": [[1.60506006E12, 22.933333333333334], [1.60505988E12, 5.633333333333334], [1.60506018E12, 16.933333333333334], [1.60506E12, 14.05], [1.60506012E12, 15.483333333333333], [1.60505994E12, 11.2], [1.60506024E12, 0.26666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506024E12, "title": "Total Transactions Per Second"}},
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

