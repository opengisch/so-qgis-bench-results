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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 3494.0, "series": [{"data": [[0.0, 27.0], [0.1, 29.0], [0.2, 30.0], [0.3, 30.0], [0.4, 31.0], [0.5, 31.0], [0.6, 32.0], [0.7, 33.0], [0.8, 33.0], [0.9, 34.0], [1.0, 34.0], [1.1, 35.0], [1.2, 35.0], [1.3, 36.0], [1.4, 36.0], [1.5, 37.0], [1.6, 37.0], [1.7, 37.0], [1.8, 37.0], [1.9, 38.0], [2.0, 38.0], [2.1, 38.0], [2.2, 38.0], [2.3, 39.0], [2.4, 39.0], [2.5, 39.0], [2.6, 39.0], [2.7, 40.0], [2.8, 40.0], [2.9, 40.0], [3.0, 41.0], [3.1, 42.0], [3.2, 42.0], [3.3, 42.0], [3.4, 43.0], [3.5, 43.0], [3.6, 43.0], [3.7, 44.0], [3.8, 44.0], [3.9, 45.0], [4.0, 45.0], [4.1, 46.0], [4.2, 47.0], [4.3, 48.0], [4.4, 48.0], [4.5, 49.0], [4.6, 50.0], [4.7, 51.0], [4.8, 52.0], [4.9, 53.0], [5.0, 54.0], [5.1, 54.0], [5.2, 55.0], [5.3, 55.0], [5.4, 56.0], [5.5, 57.0], [5.6, 57.0], [5.7, 58.0], [5.8, 58.0], [5.9, 59.0], [6.0, 59.0], [6.1, 60.0], [6.2, 60.0], [6.3, 60.0], [6.4, 60.0], [6.5, 61.0], [6.6, 62.0], [6.7, 62.0], [6.8, 63.0], [6.9, 63.0], [7.0, 63.0], [7.1, 63.0], [7.2, 64.0], [7.3, 64.0], [7.4, 64.0], [7.5, 65.0], [7.6, 65.0], [7.7, 65.0], [7.8, 65.0], [7.9, 66.0], [8.0, 66.0], [8.1, 66.0], [8.2, 66.0], [8.3, 66.0], [8.4, 67.0], [8.5, 67.0], [8.6, 67.0], [8.7, 67.0], [8.8, 67.0], [8.9, 68.0], [9.0, 68.0], [9.1, 68.0], [9.2, 68.0], [9.3, 68.0], [9.4, 68.0], [9.5, 69.0], [9.6, 69.0], [9.7, 69.0], [9.8, 69.0], [9.9, 69.0], [10.0, 69.0], [10.1, 70.0], [10.2, 70.0], [10.3, 70.0], [10.4, 70.0], [10.5, 70.0], [10.6, 70.0], [10.7, 71.0], [10.8, 71.0], [10.9, 71.0], [11.0, 71.0], [11.1, 71.0], [11.2, 71.0], [11.3, 71.0], [11.4, 72.0], [11.5, 72.0], [11.6, 72.0], [11.7, 72.0], [11.8, 72.0], [11.9, 72.0], [12.0, 72.0], [12.1, 73.0], [12.2, 73.0], [12.3, 73.0], [12.4, 73.0], [12.5, 73.0], [12.6, 73.0], [12.7, 73.0], [12.8, 73.0], [12.9, 74.0], [13.0, 74.0], [13.1, 74.0], [13.2, 74.0], [13.3, 74.0], [13.4, 74.0], [13.5, 74.0], [13.6, 75.0], [13.7, 75.0], [13.8, 75.0], [13.9, 75.0], [14.0, 75.0], [14.1, 75.0], [14.2, 76.0], [14.3, 76.0], [14.4, 76.0], [14.5, 76.0], [14.6, 76.0], [14.7, 76.0], [14.8, 76.0], [14.9, 76.0], [15.0, 77.0], [15.1, 77.0], [15.2, 77.0], [15.3, 77.0], [15.4, 77.0], [15.5, 77.0], [15.6, 77.0], [15.7, 78.0], [15.8, 78.0], [15.9, 78.0], [16.0, 78.0], [16.1, 78.0], [16.2, 78.0], [16.3, 79.0], [16.4, 79.0], [16.5, 79.0], [16.6, 79.0], [16.7, 79.0], [16.8, 80.0], [16.9, 80.0], [17.0, 80.0], [17.1, 80.0], [17.2, 80.0], [17.3, 80.0], [17.4, 81.0], [17.5, 81.0], [17.6, 81.0], [17.7, 81.0], [17.8, 81.0], [17.9, 82.0], [18.0, 82.0], [18.1, 82.0], [18.2, 82.0], [18.3, 82.0], [18.4, 82.0], [18.5, 83.0], [18.6, 83.0], [18.7, 83.0], [18.8, 83.0], [18.9, 83.0], [19.0, 83.0], [19.1, 83.0], [19.2, 84.0], [19.3, 84.0], [19.4, 84.0], [19.5, 85.0], [19.6, 85.0], [19.7, 85.0], [19.8, 85.0], [19.9, 85.0], [20.0, 86.0], [20.1, 86.0], [20.2, 86.0], [20.3, 86.0], [20.4, 86.0], [20.5, 87.0], [20.6, 87.0], [20.7, 87.0], [20.8, 87.0], [20.9, 87.0], [21.0, 88.0], [21.1, 88.0], [21.2, 88.0], [21.3, 88.0], [21.4, 88.0], [21.5, 89.0], [21.6, 89.0], [21.7, 89.0], [21.8, 89.0], [21.9, 90.0], [22.0, 90.0], [22.1, 90.0], [22.2, 90.0], [22.3, 90.0], [22.4, 90.0], [22.5, 91.0], [22.6, 91.0], [22.7, 91.0], [22.8, 91.0], [22.9, 91.0], [23.0, 91.0], [23.1, 92.0], [23.2, 92.0], [23.3, 92.0], [23.4, 92.0], [23.5, 92.0], [23.6, 93.0], [23.7, 93.0], [23.8, 93.0], [23.9, 93.0], [24.0, 93.0], [24.1, 93.0], [24.2, 93.0], [24.3, 93.0], [24.4, 94.0], [24.5, 94.0], [24.6, 94.0], [24.7, 94.0], [24.8, 94.0], [24.9, 94.0], [25.0, 95.0], [25.1, 95.0], [25.2, 95.0], [25.3, 95.0], [25.4, 95.0], [25.5, 95.0], [25.6, 96.0], [25.7, 96.0], [25.8, 96.0], [25.9, 96.0], [26.0, 97.0], [26.1, 97.0], [26.2, 97.0], [26.3, 97.0], [26.4, 97.0], [26.5, 98.0], [26.6, 98.0], [26.7, 99.0], [26.8, 99.0], [26.9, 99.0], [27.0, 99.0], [27.1, 99.0], [27.2, 100.0], [27.3, 100.0], [27.4, 100.0], [27.5, 100.0], [27.6, 101.0], [27.7, 101.0], [27.8, 101.0], [27.9, 102.0], [28.0, 102.0], [28.1, 102.0], [28.2, 102.0], [28.3, 103.0], [28.4, 103.0], [28.5, 104.0], [28.6, 104.0], [28.7, 104.0], [28.8, 105.0], [28.9, 105.0], [29.0, 105.0], [29.1, 106.0], [29.2, 106.0], [29.3, 107.0], [29.4, 107.0], [29.5, 108.0], [29.6, 108.0], [29.7, 108.0], [29.8, 109.0], [29.9, 109.0], [30.0, 110.0], [30.1, 110.0], [30.2, 111.0], [30.3, 111.0], [30.4, 111.0], [30.5, 112.0], [30.6, 112.0], [30.7, 112.0], [30.8, 112.0], [30.9, 113.0], [31.0, 114.0], [31.1, 115.0], [31.2, 115.0], [31.3, 115.0], [31.4, 116.0], [31.5, 116.0], [31.6, 117.0], [31.7, 117.0], [31.8, 117.0], [31.9, 118.0], [32.0, 119.0], [32.1, 119.0], [32.2, 119.0], [32.3, 120.0], [32.4, 121.0], [32.5, 122.0], [32.6, 123.0], [32.7, 123.0], [32.8, 124.0], [32.9, 125.0], [33.0, 126.0], [33.1, 127.0], [33.2, 127.0], [33.3, 128.0], [33.4, 129.0], [33.5, 129.0], [33.6, 130.0], [33.7, 130.0], [33.8, 131.0], [33.9, 132.0], [34.0, 133.0], [34.1, 134.0], [34.2, 134.0], [34.3, 134.0], [34.4, 135.0], [34.5, 135.0], [34.6, 136.0], [34.7, 136.0], [34.8, 137.0], [34.9, 138.0], [35.0, 138.0], [35.1, 139.0], [35.2, 140.0], [35.3, 140.0], [35.4, 141.0], [35.5, 141.0], [35.6, 142.0], [35.7, 143.0], [35.8, 143.0], [35.9, 144.0], [36.0, 144.0], [36.1, 145.0], [36.2, 146.0], [36.3, 146.0], [36.4, 147.0], [36.5, 147.0], [36.6, 148.0], [36.7, 149.0], [36.8, 149.0], [36.9, 150.0], [37.0, 151.0], [37.1, 151.0], [37.2, 152.0], [37.3, 152.0], [37.4, 153.0], [37.5, 153.0], [37.6, 154.0], [37.7, 154.0], [37.8, 155.0], [37.9, 156.0], [38.0, 156.0], [38.1, 157.0], [38.2, 158.0], [38.3, 159.0], [38.4, 159.0], [38.5, 160.0], [38.6, 160.0], [38.7, 161.0], [38.8, 161.0], [38.9, 162.0], [39.0, 163.0], [39.1, 163.0], [39.2, 164.0], [39.3, 164.0], [39.4, 165.0], [39.5, 166.0], [39.6, 167.0], [39.7, 167.0], [39.8, 168.0], [39.9, 169.0], [40.0, 170.0], [40.1, 171.0], [40.2, 171.0], [40.3, 172.0], [40.4, 172.0], [40.5, 173.0], [40.6, 174.0], [40.7, 175.0], [40.8, 175.0], [40.9, 176.0], [41.0, 177.0], [41.1, 177.0], [41.2, 177.0], [41.3, 178.0], [41.4, 179.0], [41.5, 179.0], [41.6, 180.0], [41.7, 181.0], [41.8, 182.0], [41.9, 183.0], [42.0, 184.0], [42.1, 185.0], [42.2, 186.0], [42.3, 187.0], [42.4, 189.0], [42.5, 189.0], [42.6, 190.0], [42.7, 191.0], [42.8, 193.0], [42.9, 194.0], [43.0, 195.0], [43.1, 196.0], [43.2, 196.0], [43.3, 198.0], [43.4, 199.0], [43.5, 200.0], [43.6, 201.0], [43.7, 203.0], [43.8, 204.0], [43.9, 206.0], [44.0, 207.0], [44.1, 208.0], [44.2, 209.0], [44.3, 211.0], [44.4, 212.0], [44.5, 214.0], [44.6, 215.0], [44.7, 217.0], [44.8, 219.0], [44.9, 220.0], [45.0, 222.0], [45.1, 223.0], [45.2, 223.0], [45.3, 225.0], [45.4, 225.0], [45.5, 226.0], [45.6, 229.0], [45.7, 230.0], [45.8, 230.0], [45.9, 231.0], [46.0, 232.0], [46.1, 232.0], [46.2, 233.0], [46.3, 233.0], [46.4, 235.0], [46.5, 235.0], [46.6, 235.0], [46.7, 237.0], [46.8, 238.0], [46.9, 239.0], [47.0, 241.0], [47.1, 242.0], [47.2, 243.0], [47.3, 245.0], [47.4, 246.0], [47.5, 247.0], [47.6, 248.0], [47.7, 249.0], [47.8, 250.0], [47.9, 251.0], [48.0, 251.0], [48.1, 252.0], [48.2, 253.0], [48.3, 254.0], [48.4, 254.0], [48.5, 256.0], [48.6, 258.0], [48.7, 259.0], [48.8, 260.0], [48.9, 262.0], [49.0, 262.0], [49.1, 263.0], [49.2, 264.0], [49.3, 265.0], [49.4, 266.0], [49.5, 267.0], [49.6, 268.0], [49.7, 270.0], [49.8, 271.0], [49.9, 271.0], [50.0, 273.0], [50.1, 274.0], [50.2, 275.0], [50.3, 276.0], [50.4, 277.0], [50.5, 278.0], [50.6, 279.0], [50.7, 280.0], [50.8, 282.0], [50.9, 283.0], [51.0, 284.0], [51.1, 285.0], [51.2, 286.0], [51.3, 287.0], [51.4, 287.0], [51.5, 290.0], [51.6, 291.0], [51.7, 292.0], [51.8, 293.0], [51.9, 294.0], [52.0, 296.0], [52.1, 297.0], [52.2, 298.0], [52.3, 299.0], [52.4, 301.0], [52.5, 302.0], [52.6, 302.0], [52.7, 304.0], [52.8, 305.0], [52.9, 306.0], [53.0, 307.0], [53.1, 308.0], [53.2, 309.0], [53.3, 311.0], [53.4, 312.0], [53.5, 313.0], [53.6, 313.0], [53.7, 315.0], [53.8, 315.0], [53.9, 316.0], [54.0, 316.0], [54.1, 317.0], [54.2, 319.0], [54.3, 319.0], [54.4, 320.0], [54.5, 321.0], [54.6, 322.0], [54.7, 323.0], [54.8, 325.0], [54.9, 325.0], [55.0, 326.0], [55.1, 326.0], [55.2, 328.0], [55.3, 329.0], [55.4, 330.0], [55.5, 331.0], [55.6, 332.0], [55.7, 334.0], [55.8, 335.0], [55.9, 336.0], [56.0, 337.0], [56.1, 337.0], [56.2, 338.0], [56.3, 340.0], [56.4, 340.0], [56.5, 342.0], [56.6, 343.0], [56.7, 344.0], [56.8, 345.0], [56.9, 346.0], [57.0, 348.0], [57.1, 349.0], [57.2, 351.0], [57.3, 351.0], [57.4, 353.0], [57.5, 355.0], [57.6, 356.0], [57.7, 357.0], [57.8, 358.0], [57.9, 360.0], [58.0, 361.0], [58.1, 361.0], [58.2, 362.0], [58.3, 364.0], [58.4, 364.0], [58.5, 366.0], [58.6, 366.0], [58.7, 368.0], [58.8, 370.0], [58.9, 371.0], [59.0, 371.0], [59.1, 374.0], [59.2, 376.0], [59.3, 377.0], [59.4, 379.0], [59.5, 379.0], [59.6, 380.0], [59.7, 381.0], [59.8, 381.0], [59.9, 383.0], [60.0, 385.0], [60.1, 386.0], [60.2, 388.0], [60.3, 389.0], [60.4, 390.0], [60.5, 391.0], [60.6, 392.0], [60.7, 394.0], [60.8, 395.0], [60.9, 396.0], [61.0, 397.0], [61.1, 399.0], [61.2, 401.0], [61.3, 401.0], [61.4, 404.0], [61.5, 405.0], [61.6, 406.0], [61.7, 408.0], [61.8, 409.0], [61.9, 410.0], [62.0, 411.0], [62.1, 413.0], [62.2, 414.0], [62.3, 416.0], [62.4, 417.0], [62.5, 418.0], [62.6, 419.0], [62.7, 419.0], [62.8, 421.0], [62.9, 422.0], [63.0, 423.0], [63.1, 424.0], [63.2, 425.0], [63.3, 427.0], [63.4, 428.0], [63.5, 429.0], [63.6, 429.0], [63.7, 431.0], [63.8, 431.0], [63.9, 433.0], [64.0, 434.0], [64.1, 434.0], [64.2, 436.0], [64.3, 437.0], [64.4, 438.0], [64.5, 440.0], [64.6, 442.0], [64.7, 443.0], [64.8, 445.0], [64.9, 446.0], [65.0, 447.0], [65.1, 449.0], [65.2, 450.0], [65.3, 450.0], [65.4, 451.0], [65.5, 454.0], [65.6, 456.0], [65.7, 457.0], [65.8, 459.0], [65.9, 460.0], [66.0, 461.0], [66.1, 462.0], [66.2, 463.0], [66.3, 465.0], [66.4, 467.0], [66.5, 469.0], [66.6, 470.0], [66.7, 471.0], [66.8, 472.0], [66.9, 473.0], [67.0, 475.0], [67.1, 475.0], [67.2, 477.0], [67.3, 480.0], [67.4, 482.0], [67.5, 483.0], [67.6, 486.0], [67.7, 488.0], [67.8, 489.0], [67.9, 491.0], [68.0, 493.0], [68.1, 495.0], [68.2, 496.0], [68.3, 497.0], [68.4, 497.0], [68.5, 498.0], [68.6, 499.0], [68.7, 500.0], [68.8, 501.0], [68.9, 503.0], [69.0, 504.0], [69.1, 505.0], [69.2, 507.0], [69.3, 508.0], [69.4, 509.0], [69.5, 511.0], [69.6, 512.0], [69.7, 513.0], [69.8, 516.0], [69.9, 518.0], [70.0, 519.0], [70.1, 520.0], [70.2, 520.0], [70.3, 522.0], [70.4, 524.0], [70.5, 525.0], [70.6, 527.0], [70.7, 528.0], [70.8, 530.0], [70.9, 532.0], [71.0, 534.0], [71.1, 535.0], [71.2, 537.0], [71.3, 539.0], [71.4, 539.0], [71.5, 540.0], [71.6, 541.0], [71.7, 543.0], [71.8, 545.0], [71.9, 546.0], [72.0, 547.0], [72.1, 549.0], [72.2, 551.0], [72.3, 554.0], [72.4, 555.0], [72.5, 558.0], [72.6, 559.0], [72.7, 560.0], [72.8, 562.0], [72.9, 563.0], [73.0, 565.0], [73.1, 567.0], [73.2, 568.0], [73.3, 569.0], [73.4, 571.0], [73.5, 572.0], [73.6, 573.0], [73.7, 576.0], [73.8, 578.0], [73.9, 580.0], [74.0, 581.0], [74.1, 583.0], [74.2, 584.0], [74.3, 585.0], [74.4, 588.0], [74.5, 589.0], [74.6, 591.0], [74.7, 593.0], [74.8, 596.0], [74.9, 597.0], [75.0, 600.0], [75.1, 602.0], [75.2, 604.0], [75.3, 605.0], [75.4, 607.0], [75.5, 609.0], [75.6, 611.0], [75.7, 613.0], [75.8, 615.0], [75.9, 617.0], [76.0, 620.0], [76.1, 621.0], [76.2, 624.0], [76.3, 626.0], [76.4, 627.0], [76.5, 629.0], [76.6, 632.0], [76.7, 634.0], [76.8, 635.0], [76.9, 637.0], [77.0, 638.0], [77.1, 639.0], [77.2, 642.0], [77.3, 643.0], [77.4, 645.0], [77.5, 646.0], [77.6, 648.0], [77.7, 649.0], [77.8, 650.0], [77.9, 652.0], [78.0, 655.0], [78.1, 656.0], [78.2, 658.0], [78.3, 660.0], [78.4, 661.0], [78.5, 663.0], [78.6, 665.0], [78.7, 667.0], [78.8, 670.0], [78.9, 673.0], [79.0, 674.0], [79.1, 676.0], [79.2, 677.0], [79.3, 678.0], [79.4, 680.0], [79.5, 682.0], [79.6, 684.0], [79.7, 685.0], [79.8, 687.0], [79.9, 689.0], [80.0, 690.0], [80.1, 691.0], [80.2, 692.0], [80.3, 694.0], [80.4, 696.0], [80.5, 698.0], [80.6, 699.0], [80.7, 700.0], [80.8, 701.0], [80.9, 703.0], [81.0, 704.0], [81.1, 706.0], [81.2, 707.0], [81.3, 711.0], [81.4, 714.0], [81.5, 718.0], [81.6, 719.0], [81.7, 721.0], [81.8, 725.0], [81.9, 726.0], [82.0, 728.0], [82.1, 730.0], [82.2, 733.0], [82.3, 734.0], [82.4, 737.0], [82.5, 739.0], [82.6, 741.0], [82.7, 742.0], [82.8, 744.0], [82.9, 746.0], [83.0, 749.0], [83.1, 751.0], [83.2, 753.0], [83.3, 756.0], [83.4, 757.0], [83.5, 758.0], [83.6, 759.0], [83.7, 762.0], [83.8, 764.0], [83.9, 766.0], [84.0, 768.0], [84.1, 772.0], [84.2, 776.0], [84.3, 778.0], [84.4, 783.0], [84.5, 785.0], [84.6, 790.0], [84.7, 793.0], [84.8, 796.0], [84.9, 797.0], [85.0, 801.0], [85.1, 802.0], [85.2, 806.0], [85.3, 808.0], [85.4, 809.0], [85.5, 812.0], [85.6, 813.0], [85.7, 817.0], [85.8, 821.0], [85.9, 824.0], [86.0, 829.0], [86.1, 833.0], [86.2, 839.0], [86.3, 841.0], [86.4, 843.0], [86.5, 845.0], [86.6, 847.0], [86.7, 851.0], [86.8, 855.0], [86.9, 858.0], [87.0, 863.0], [87.1, 865.0], [87.2, 873.0], [87.3, 875.0], [87.4, 880.0], [87.5, 884.0], [87.6, 888.0], [87.7, 896.0], [87.8, 897.0], [87.9, 905.0], [88.0, 909.0], [88.1, 913.0], [88.2, 917.0], [88.3, 920.0], [88.4, 927.0], [88.5, 930.0], [88.6, 932.0], [88.7, 939.0], [88.8, 945.0], [88.9, 950.0], [89.0, 953.0], [89.1, 957.0], [89.2, 958.0], [89.3, 960.0], [89.4, 964.0], [89.5, 969.0], [89.6, 972.0], [89.7, 977.0], [89.8, 982.0], [89.9, 984.0], [90.0, 987.0], [90.1, 992.0], [90.2, 993.0], [90.3, 997.0], [90.4, 1000.0], [90.5, 1003.0], [90.6, 1007.0], [90.7, 1013.0], [90.8, 1017.0], [90.9, 1021.0], [91.0, 1024.0], [91.1, 1030.0], [91.2, 1034.0], [91.3, 1037.0], [91.4, 1039.0], [91.5, 1041.0], [91.6, 1045.0], [91.7, 1048.0], [91.8, 1051.0], [91.9, 1054.0], [92.0, 1062.0], [92.1, 1064.0], [92.2, 1076.0], [92.3, 1080.0], [92.4, 1084.0], [92.5, 1089.0], [92.6, 1092.0], [92.7, 1096.0], [92.8, 1101.0], [92.9, 1106.0], [93.0, 1113.0], [93.1, 1119.0], [93.2, 1125.0], [93.3, 1132.0], [93.4, 1138.0], [93.5, 1147.0], [93.6, 1151.0], [93.7, 1153.0], [93.8, 1160.0], [93.9, 1164.0], [94.0, 1169.0], [94.1, 1173.0], [94.2, 1185.0], [94.3, 1195.0], [94.4, 1200.0], [94.5, 1204.0], [94.6, 1220.0], [94.7, 1225.0], [94.8, 1232.0], [94.9, 1238.0], [95.0, 1249.0], [95.1, 1266.0], [95.2, 1277.0], [95.3, 1283.0], [95.4, 1288.0], [95.5, 1300.0], [95.6, 1309.0], [95.7, 1323.0], [95.8, 1329.0], [95.9, 1335.0], [96.0, 1339.0], [96.1, 1353.0], [96.2, 1367.0], [96.3, 1381.0], [96.4, 1398.0], [96.5, 1403.0], [96.6, 1413.0], [96.7, 1425.0], [96.8, 1435.0], [96.9, 1444.0], [97.0, 1468.0], [97.1, 1482.0], [97.2, 1507.0], [97.3, 1535.0], [97.4, 1579.0], [97.5, 1615.0], [97.6, 1630.0], [97.7, 1643.0], [97.8, 1659.0], [97.9, 1696.0], [98.0, 1703.0], [98.1, 1718.0], [98.2, 1736.0], [98.3, 1761.0], [98.4, 1778.0], [98.5, 1842.0], [98.6, 1898.0], [98.7, 1939.0], [98.8, 1963.0], [98.9, 2020.0], [99.0, 2065.0], [99.1, 2119.0], [99.2, 2149.0], [99.3, 2211.0], [99.4, 2248.0], [99.5, 2356.0], [99.6, 2465.0], [99.7, 2536.0], [99.8, 2757.0], [99.9, 3152.0], [100.0, 3494.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1431.0, "series": [{"data": [[0.0, 1431.0], [600.0, 301.0], [700.0, 226.0], [800.0, 152.0], [900.0, 134.0], [1000.0, 126.0], [1100.0, 85.0], [1200.0, 59.0], [1300.0, 49.0], [1400.0, 40.0], [1500.0, 15.0], [100.0, 860.0], [1600.0, 27.0], [1700.0, 25.0], [1800.0, 9.0], [1900.0, 14.0], [2000.0, 11.0], [2100.0, 11.0], [2200.0, 7.0], [2300.0, 5.0], [2400.0, 6.0], [2500.0, 5.0], [2600.0, 3.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [200.0, 468.0], [3200.0, 2.0], [3300.0, 2.0], [3400.0, 1.0], [300.0, 464.0], [400.0, 394.0], [500.0, 334.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3622.0, "series": [{"data": [[0.0, 3622.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1500.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 149.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 39.775180375180376, "minX": 1.60189758E12, "maxY": 39.98339789706693, "series": [{"data": [[1.60189758E12, 39.98339789706693], [1.60189764E12, 39.775180375180376]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189764E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 411.0198776758407, "minX": 1.0, "maxY": 3494.0, "series": [{"data": [[33.0, 594.0], [32.0, 673.0], [2.0, 2658.0], [35.0, 580.0], [34.0, 677.0], [37.0, 515.0], [36.0, 1046.0], [38.0, 958.0], [40.0, 411.0198776758407], [3.0, 2484.0], [4.0, 2476.0], [5.0, 2567.0], [6.0, 2443.0], [7.0, 2242.0], [8.0, 2180.0], [9.0, 2445.0], [10.0, 1507.0], [11.0, 1732.0], [12.0, 1535.0], [13.0, 1606.0], [14.0, 1337.0], [15.0, 1678.0], [16.0, 1523.0], [1.0, 3494.0], [17.0, 1352.0], [18.0, 1621.0], [19.0, 1284.0], [20.0, 896.0], [21.0, 1440.0], [22.0, 1408.0], [23.0, 1157.0], [24.0, 1339.0], [25.0, 1097.0], [26.0, 956.0], [27.0, 957.0], [28.0, 726.0], [29.0, 744.0], [30.0, 449.5], [31.0, 629.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.84654779969656, 418.5900986342948]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15750.766666666666, "minX": 1.60189758E12, "maxY": 2534419.6666666665, "series": [{"data": [[1.60189758E12, 1752560.25], [1.60189764E12, 2534419.6666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60189758E12, 15750.766666666666], [1.60189764E12, 29828.783333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189764E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 384.4103896103897, "minX": 1.60189758E12, "maxY": 484.1311566131711, "series": [{"data": [[1.60189758E12, 484.1311566131711], [1.60189764E12, 384.4103896103897]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189764E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 384.1113997114004, "minX": 1.60189758E12, "maxY": 483.6618705035974, "series": [{"data": [[1.60189758E12, 483.6618705035974], [1.60189764E12, 384.1113997114004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189764E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009523809523809497, "minX": 1.60189758E12, "maxY": 0.45545102379634794, "series": [{"data": [[1.60189758E12, 0.45545102379634794], [1.60189764E12, 0.009523809523809497]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189764E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.60189758E12, "maxY": 3494.0, "series": [{"data": [[1.60189758E12, 2355.0], [1.60189764E12, 3494.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60189758E12, 60.0], [1.60189764E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60189758E12, 60.0], [1.60189764E12, 32.313400330543516]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60189758E12, 60.0], [1.60189764E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60189758E12, 54.0], [1.60189764E12, 27.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60189758E12, 391.5], [1.60189764E12, 215.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189764E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 50.0, "minX": 2.0, "maxY": 2571.0, "series": [{"data": [[2.0, 222.5], [4.0, 2571.0], [11.0, 1284.0], [13.0, 1678.0], [26.0, 115.0], [34.0, 760.0], [38.0, 809.0], [49.0, 129.0], [48.0, 995.5], [53.0, 463.0], [54.0, 669.0], [56.0, 790.0], [59.0, 430.0], [61.0, 646.5], [62.0, 743.5], [64.0, 510.5], [65.0, 555.0], [69.0, 323.0], [79.0, 437.0], [78.0, 528.5], [76.0, 588.0], [80.0, 424.5], [83.0, 369.5], [86.0, 428.5], [85.0, 474.0], [89.0, 398.0], [92.0, 96.0], [95.0, 50.0], [97.0, 354.0], [106.0, 231.5], [108.0, 301.0], [110.0, 260.0], [114.0, 386.5], [112.0, 271.0], [117.0, 253.0], [120.0, 387.5], [121.0, 249.0], [126.0, 181.5], [130.0, 247.5], [129.0, 239.0], [141.0, 104.0], [146.0, 88.5], [150.0, 233.5], [173.0, 95.0], [175.0, 170.0], [168.0, 110.0], [182.0, 94.5], [192.0, 162.0], [230.0, 156.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[83.0, 470.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 230.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 50.0, "minX": 2.0, "maxY": 2570.0, "series": [{"data": [[2.0, 219.5], [4.0, 2570.0], [11.0, 1284.0], [13.0, 1678.0], [26.0, 115.0], [34.0, 759.5], [38.0, 809.0], [49.0, 129.0], [48.0, 994.5], [53.0, 462.0], [54.0, 668.0], [56.0, 790.0], [59.0, 430.0], [61.0, 646.0], [62.0, 743.5], [64.0, 510.5], [65.0, 552.0], [69.0, 323.0], [79.0, 437.0], [78.0, 528.0], [76.0, 588.0], [80.0, 424.5], [83.0, 368.0], [86.0, 428.0], [85.0, 474.0], [89.0, 398.0], [92.0, 96.0], [95.0, 50.0], [97.0, 353.5], [106.0, 231.0], [108.0, 300.5], [110.0, 260.0], [114.0, 386.0], [112.0, 270.0], [117.0, 253.0], [120.0, 387.5], [121.0, 249.0], [126.0, 181.5], [130.0, 246.5], [129.0, 239.0], [141.0, 104.0], [146.0, 88.5], [150.0, 233.5], [173.0, 95.0], [175.0, 169.0], [168.0, 109.5], [182.0, 94.0], [192.0, 162.0], [230.0, 156.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[83.0, 470.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 230.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 30.783333333333335, "minX": 1.60189758E12, "maxY": 57.083333333333336, "series": [{"data": [[1.60189758E12, 30.783333333333335], [1.60189764E12, 57.083333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189764E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189758E12, "maxY": 57.75, "series": [{"data": [[1.60189758E12, 30.1], [1.60189764E12, 57.75]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60189758E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189764E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189758E12, "maxY": 57.75, "series": [{"data": [[1.60189758E12, 30.1], [1.60189764E12, 57.75]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60189758E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189764E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189758E12, "maxY": 57.75, "series": [{"data": [[1.60189758E12, 30.1], [1.60189764E12, 57.75]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60189758E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189764E12, "title": "Total Transactions Per Second"}},
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

