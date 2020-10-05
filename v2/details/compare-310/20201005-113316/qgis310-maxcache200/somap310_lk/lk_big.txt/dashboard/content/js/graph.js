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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 3134.0, "series": [{"data": [[0.0, 27.0], [0.1, 31.0], [0.2, 33.0], [0.3, 33.0], [0.4, 34.0], [0.5, 35.0], [0.6, 36.0], [0.7, 36.0], [0.8, 36.0], [0.9, 36.0], [1.0, 36.0], [1.1, 37.0], [1.2, 38.0], [1.3, 38.0], [1.4, 39.0], [1.5, 39.0], [1.6, 39.0], [1.7, 39.0], [1.8, 40.0], [1.9, 40.0], [2.0, 40.0], [2.1, 41.0], [2.2, 41.0], [2.3, 41.0], [2.4, 42.0], [2.5, 42.0], [2.6, 43.0], [2.7, 44.0], [2.8, 44.0], [2.9, 45.0], [3.0, 45.0], [3.1, 45.0], [3.2, 46.0], [3.3, 46.0], [3.4, 47.0], [3.5, 47.0], [3.6, 47.0], [3.7, 48.0], [3.8, 49.0], [3.9, 49.0], [4.0, 50.0], [4.1, 51.0], [4.2, 52.0], [4.3, 52.0], [4.4, 53.0], [4.5, 55.0], [4.6, 55.0], [4.7, 56.0], [4.8, 57.0], [4.9, 58.0], [5.0, 58.0], [5.1, 59.0], [5.2, 59.0], [5.3, 59.0], [5.4, 60.0], [5.5, 60.0], [5.6, 61.0], [5.7, 61.0], [5.8, 61.0], [5.9, 62.0], [6.0, 62.0], [6.1, 63.0], [6.2, 63.0], [6.3, 63.0], [6.4, 63.0], [6.5, 63.0], [6.6, 64.0], [6.7, 64.0], [6.8, 64.0], [6.9, 64.0], [7.0, 65.0], [7.1, 65.0], [7.2, 65.0], [7.3, 65.0], [7.4, 66.0], [7.5, 66.0], [7.6, 66.0], [7.7, 66.0], [7.8, 66.0], [7.9, 66.0], [8.0, 66.0], [8.1, 66.0], [8.2, 67.0], [8.3, 67.0], [8.4, 67.0], [8.5, 67.0], [8.6, 67.0], [8.7, 67.0], [8.8, 68.0], [8.9, 68.0], [9.0, 68.0], [9.1, 68.0], [9.2, 68.0], [9.3, 69.0], [9.4, 69.0], [9.5, 69.0], [9.6, 69.0], [9.7, 69.0], [9.8, 69.0], [9.9, 69.0], [10.0, 69.0], [10.1, 70.0], [10.2, 70.0], [10.3, 70.0], [10.4, 70.0], [10.5, 70.0], [10.6, 70.0], [10.7, 70.0], [10.8, 70.0], [10.9, 71.0], [11.0, 71.0], [11.1, 71.0], [11.2, 71.0], [11.3, 71.0], [11.4, 71.0], [11.5, 71.0], [11.6, 71.0], [11.7, 71.0], [11.8, 72.0], [11.9, 72.0], [12.0, 72.0], [12.1, 72.0], [12.2, 72.0], [12.3, 72.0], [12.4, 72.0], [12.5, 72.0], [12.6, 73.0], [12.7, 73.0], [12.8, 73.0], [12.9, 73.0], [13.0, 73.0], [13.1, 73.0], [13.2, 73.0], [13.3, 73.0], [13.4, 73.0], [13.5, 74.0], [13.6, 74.0], [13.7, 74.0], [13.8, 74.0], [13.9, 74.0], [14.0, 74.0], [14.1, 74.0], [14.2, 74.0], [14.3, 75.0], [14.4, 75.0], [14.5, 75.0], [14.6, 75.0], [14.7, 75.0], [14.8, 75.0], [14.9, 76.0], [15.0, 76.0], [15.1, 76.0], [15.2, 76.0], [15.3, 76.0], [15.4, 76.0], [15.5, 76.0], [15.6, 76.0], [15.7, 76.0], [15.8, 77.0], [15.9, 77.0], [16.0, 77.0], [16.1, 77.0], [16.2, 77.0], [16.3, 77.0], [16.4, 77.0], [16.5, 78.0], [16.6, 78.0], [16.7, 78.0], [16.8, 78.0], [16.9, 78.0], [17.0, 78.0], [17.1, 78.0], [17.2, 79.0], [17.3, 79.0], [17.4, 79.0], [17.5, 79.0], [17.6, 79.0], [17.7, 79.0], [17.8, 80.0], [17.9, 80.0], [18.0, 80.0], [18.1, 80.0], [18.2, 80.0], [18.3, 80.0], [18.4, 80.0], [18.5, 81.0], [18.6, 81.0], [18.7, 81.0], [18.8, 81.0], [18.9, 81.0], [19.0, 81.0], [19.1, 81.0], [19.2, 82.0], [19.3, 82.0], [19.4, 82.0], [19.5, 83.0], [19.6, 83.0], [19.7, 83.0], [19.8, 83.0], [19.9, 83.0], [20.0, 83.0], [20.1, 83.0], [20.2, 83.0], [20.3, 84.0], [20.4, 84.0], [20.5, 84.0], [20.6, 84.0], [20.7, 84.0], [20.8, 85.0], [20.9, 85.0], [21.0, 85.0], [21.1, 85.0], [21.2, 86.0], [21.3, 86.0], [21.4, 86.0], [21.5, 86.0], [21.6, 87.0], [21.7, 87.0], [21.8, 87.0], [21.9, 87.0], [22.0, 88.0], [22.1, 88.0], [22.2, 88.0], [22.3, 88.0], [22.4, 89.0], [22.5, 89.0], [22.6, 89.0], [22.7, 89.0], [22.8, 90.0], [22.9, 90.0], [23.0, 90.0], [23.1, 90.0], [23.2, 91.0], [23.3, 91.0], [23.4, 91.0], [23.5, 91.0], [23.6, 92.0], [23.7, 92.0], [23.8, 92.0], [23.9, 92.0], [24.0, 93.0], [24.1, 93.0], [24.2, 93.0], [24.3, 93.0], [24.4, 94.0], [24.5, 94.0], [24.6, 94.0], [24.7, 94.0], [24.8, 95.0], [24.9, 95.0], [25.0, 95.0], [25.1, 95.0], [25.2, 95.0], [25.3, 96.0], [25.4, 96.0], [25.5, 96.0], [25.6, 96.0], [25.7, 96.0], [25.8, 97.0], [25.9, 97.0], [26.0, 97.0], [26.1, 97.0], [26.2, 98.0], [26.3, 98.0], [26.4, 98.0], [26.5, 99.0], [26.6, 99.0], [26.7, 99.0], [26.8, 99.0], [26.9, 99.0], [27.0, 100.0], [27.1, 100.0], [27.2, 100.0], [27.3, 101.0], [27.4, 101.0], [27.5, 101.0], [27.6, 102.0], [27.7, 102.0], [27.8, 102.0], [27.9, 102.0], [28.0, 103.0], [28.1, 103.0], [28.2, 103.0], [28.3, 104.0], [28.4, 104.0], [28.5, 105.0], [28.6, 105.0], [28.7, 106.0], [28.8, 106.0], [28.9, 106.0], [29.0, 107.0], [29.1, 107.0], [29.2, 107.0], [29.3, 108.0], [29.4, 108.0], [29.5, 109.0], [29.6, 109.0], [29.7, 109.0], [29.8, 109.0], [29.9, 110.0], [30.0, 110.0], [30.1, 110.0], [30.2, 110.0], [30.3, 111.0], [30.4, 111.0], [30.5, 112.0], [30.6, 112.0], [30.7, 112.0], [30.8, 112.0], [30.9, 113.0], [31.0, 113.0], [31.1, 114.0], [31.2, 114.0], [31.3, 115.0], [31.4, 115.0], [31.5, 116.0], [31.6, 116.0], [31.7, 117.0], [31.8, 117.0], [31.9, 118.0], [32.0, 118.0], [32.1, 119.0], [32.2, 119.0], [32.3, 120.0], [32.4, 121.0], [32.5, 121.0], [32.6, 122.0], [32.7, 122.0], [32.8, 123.0], [32.9, 123.0], [33.0, 124.0], [33.1, 125.0], [33.2, 125.0], [33.3, 126.0], [33.4, 127.0], [33.5, 128.0], [33.6, 128.0], [33.7, 128.0], [33.8, 129.0], [33.9, 130.0], [34.0, 130.0], [34.1, 131.0], [34.2, 131.0], [34.3, 132.0], [34.4, 133.0], [34.5, 133.0], [34.6, 133.0], [34.7, 134.0], [34.8, 134.0], [34.9, 135.0], [35.0, 136.0], [35.1, 137.0], [35.2, 137.0], [35.3, 138.0], [35.4, 139.0], [35.5, 139.0], [35.6, 140.0], [35.7, 141.0], [35.8, 142.0], [35.9, 142.0], [36.0, 143.0], [36.1, 143.0], [36.2, 144.0], [36.3, 145.0], [36.4, 146.0], [36.5, 146.0], [36.6, 147.0], [36.7, 147.0], [36.8, 147.0], [36.9, 147.0], [37.0, 149.0], [37.1, 149.0], [37.2, 151.0], [37.3, 152.0], [37.4, 152.0], [37.5, 154.0], [37.6, 154.0], [37.7, 155.0], [37.8, 156.0], [37.9, 156.0], [38.0, 157.0], [38.1, 157.0], [38.2, 157.0], [38.3, 158.0], [38.4, 158.0], [38.5, 158.0], [38.6, 159.0], [38.7, 160.0], [38.8, 160.0], [38.9, 161.0], [39.0, 162.0], [39.1, 162.0], [39.2, 163.0], [39.3, 164.0], [39.4, 164.0], [39.5, 166.0], [39.6, 166.0], [39.7, 167.0], [39.8, 167.0], [39.9, 168.0], [40.0, 169.0], [40.1, 170.0], [40.2, 171.0], [40.3, 171.0], [40.4, 172.0], [40.5, 173.0], [40.6, 175.0], [40.7, 175.0], [40.8, 176.0], [40.9, 177.0], [41.0, 178.0], [41.1, 179.0], [41.2, 181.0], [41.3, 182.0], [41.4, 182.0], [41.5, 183.0], [41.6, 185.0], [41.7, 187.0], [41.8, 188.0], [41.9, 190.0], [42.0, 191.0], [42.1, 193.0], [42.2, 194.0], [42.3, 196.0], [42.4, 197.0], [42.5, 199.0], [42.6, 201.0], [42.7, 203.0], [42.8, 203.0], [42.9, 204.0], [43.0, 205.0], [43.1, 206.0], [43.2, 208.0], [43.3, 208.0], [43.4, 209.0], [43.5, 211.0], [43.6, 212.0], [43.7, 213.0], [43.8, 214.0], [43.9, 216.0], [44.0, 217.0], [44.1, 218.0], [44.2, 219.0], [44.3, 220.0], [44.4, 221.0], [44.5, 222.0], [44.6, 222.0], [44.7, 223.0], [44.8, 225.0], [44.9, 226.0], [45.0, 226.0], [45.1, 228.0], [45.2, 229.0], [45.3, 230.0], [45.4, 231.0], [45.5, 232.0], [45.6, 233.0], [45.7, 233.0], [45.8, 234.0], [45.9, 234.0], [46.0, 235.0], [46.1, 235.0], [46.2, 236.0], [46.3, 237.0], [46.4, 238.0], [46.5, 239.0], [46.6, 240.0], [46.7, 242.0], [46.8, 244.0], [46.9, 245.0], [47.0, 246.0], [47.1, 246.0], [47.2, 247.0], [47.3, 248.0], [47.4, 248.0], [47.5, 250.0], [47.6, 251.0], [47.7, 251.0], [47.8, 252.0], [47.9, 253.0], [48.0, 253.0], [48.1, 254.0], [48.2, 255.0], [48.3, 256.0], [48.4, 258.0], [48.5, 259.0], [48.6, 260.0], [48.7, 261.0], [48.8, 262.0], [48.9, 263.0], [49.0, 264.0], [49.1, 265.0], [49.2, 266.0], [49.3, 268.0], [49.4, 269.0], [49.5, 270.0], [49.6, 271.0], [49.7, 273.0], [49.8, 274.0], [49.9, 274.0], [50.0, 275.0], [50.1, 275.0], [50.2, 276.0], [50.3, 277.0], [50.4, 277.0], [50.5, 279.0], [50.6, 280.0], [50.7, 281.0], [50.8, 282.0], [50.9, 282.0], [51.0, 283.0], [51.1, 284.0], [51.2, 284.0], [51.3, 286.0], [51.4, 286.0], [51.5, 287.0], [51.6, 290.0], [51.7, 290.0], [51.8, 293.0], [51.9, 294.0], [52.0, 294.0], [52.1, 295.0], [52.2, 297.0], [52.3, 298.0], [52.4, 300.0], [52.5, 300.0], [52.6, 301.0], [52.7, 302.0], [52.8, 303.0], [52.9, 304.0], [53.0, 305.0], [53.1, 305.0], [53.2, 306.0], [53.3, 307.0], [53.4, 309.0], [53.5, 310.0], [53.6, 311.0], [53.7, 312.0], [53.8, 313.0], [53.9, 314.0], [54.0, 315.0], [54.1, 316.0], [54.2, 317.0], [54.3, 318.0], [54.4, 319.0], [54.5, 320.0], [54.6, 321.0], [54.7, 322.0], [54.8, 324.0], [54.9, 324.0], [55.0, 325.0], [55.1, 326.0], [55.2, 327.0], [55.3, 328.0], [55.4, 329.0], [55.5, 330.0], [55.6, 331.0], [55.7, 332.0], [55.8, 332.0], [55.9, 333.0], [56.0, 334.0], [56.1, 335.0], [56.2, 336.0], [56.3, 337.0], [56.4, 337.0], [56.5, 338.0], [56.6, 340.0], [56.7, 340.0], [56.8, 341.0], [56.9, 342.0], [57.0, 344.0], [57.1, 344.0], [57.2, 345.0], [57.3, 346.0], [57.4, 347.0], [57.5, 347.0], [57.6, 349.0], [57.7, 350.0], [57.8, 352.0], [57.9, 353.0], [58.0, 354.0], [58.1, 355.0], [58.2, 356.0], [58.3, 357.0], [58.4, 357.0], [58.5, 359.0], [58.6, 361.0], [58.7, 362.0], [58.8, 363.0], [58.9, 363.0], [59.0, 365.0], [59.1, 367.0], [59.2, 368.0], [59.3, 369.0], [59.4, 371.0], [59.5, 372.0], [59.6, 373.0], [59.7, 374.0], [59.8, 376.0], [59.9, 376.0], [60.0, 377.0], [60.1, 378.0], [60.2, 379.0], [60.3, 380.0], [60.4, 381.0], [60.5, 382.0], [60.6, 383.0], [60.7, 384.0], [60.8, 386.0], [60.9, 388.0], [61.0, 388.0], [61.1, 390.0], [61.2, 390.0], [61.3, 392.0], [61.4, 394.0], [61.5, 394.0], [61.6, 396.0], [61.7, 397.0], [61.8, 398.0], [61.9, 399.0], [62.0, 401.0], [62.1, 404.0], [62.2, 405.0], [62.3, 406.0], [62.4, 408.0], [62.5, 410.0], [62.6, 412.0], [62.7, 413.0], [62.8, 414.0], [62.9, 415.0], [63.0, 416.0], [63.1, 417.0], [63.2, 419.0], [63.3, 420.0], [63.4, 421.0], [63.5, 422.0], [63.6, 423.0], [63.7, 424.0], [63.8, 425.0], [63.9, 426.0], [64.0, 426.0], [64.1, 427.0], [64.2, 429.0], [64.3, 430.0], [64.4, 432.0], [64.5, 433.0], [64.6, 435.0], [64.7, 436.0], [64.8, 437.0], [64.9, 438.0], [65.0, 440.0], [65.1, 442.0], [65.2, 444.0], [65.3, 445.0], [65.4, 446.0], [65.5, 448.0], [65.6, 449.0], [65.7, 450.0], [65.8, 451.0], [65.9, 452.0], [66.0, 453.0], [66.1, 454.0], [66.2, 455.0], [66.3, 457.0], [66.4, 458.0], [66.5, 459.0], [66.6, 461.0], [66.7, 462.0], [66.8, 464.0], [66.9, 465.0], [67.0, 467.0], [67.1, 468.0], [67.2, 469.0], [67.3, 470.0], [67.4, 473.0], [67.5, 474.0], [67.6, 475.0], [67.7, 477.0], [67.8, 478.0], [67.9, 480.0], [68.0, 482.0], [68.1, 483.0], [68.2, 485.0], [68.3, 486.0], [68.4, 489.0], [68.5, 491.0], [68.6, 492.0], [68.7, 494.0], [68.8, 497.0], [68.9, 498.0], [69.0, 499.0], [69.1, 501.0], [69.2, 504.0], [69.3, 505.0], [69.4, 506.0], [69.5, 508.0], [69.6, 508.0], [69.7, 509.0], [69.8, 512.0], [69.9, 514.0], [70.0, 516.0], [70.1, 518.0], [70.2, 518.0], [70.3, 521.0], [70.4, 522.0], [70.5, 525.0], [70.6, 527.0], [70.7, 528.0], [70.8, 530.0], [70.9, 530.0], [71.0, 531.0], [71.1, 532.0], [71.2, 533.0], [71.3, 535.0], [71.4, 536.0], [71.5, 537.0], [71.6, 538.0], [71.7, 539.0], [71.8, 541.0], [71.9, 543.0], [72.0, 544.0], [72.1, 545.0], [72.2, 547.0], [72.3, 549.0], [72.4, 550.0], [72.5, 551.0], [72.6, 553.0], [72.7, 554.0], [72.8, 559.0], [72.9, 562.0], [73.0, 563.0], [73.1, 564.0], [73.2, 567.0], [73.3, 568.0], [73.4, 569.0], [73.5, 570.0], [73.6, 572.0], [73.7, 573.0], [73.8, 575.0], [73.9, 578.0], [74.0, 579.0], [74.1, 580.0], [74.2, 581.0], [74.3, 583.0], [74.4, 584.0], [74.5, 587.0], [74.6, 588.0], [74.7, 590.0], [74.8, 590.0], [74.9, 591.0], [75.0, 593.0], [75.1, 595.0], [75.2, 598.0], [75.3, 599.0], [75.4, 601.0], [75.5, 604.0], [75.6, 605.0], [75.7, 608.0], [75.8, 610.0], [75.9, 611.0], [76.0, 612.0], [76.1, 615.0], [76.2, 618.0], [76.3, 619.0], [76.4, 620.0], [76.5, 622.0], [76.6, 622.0], [76.7, 623.0], [76.8, 625.0], [76.9, 626.0], [77.0, 627.0], [77.1, 628.0], [77.2, 630.0], [77.3, 633.0], [77.4, 635.0], [77.5, 635.0], [77.6, 639.0], [77.7, 640.0], [77.8, 641.0], [77.9, 641.0], [78.0, 644.0], [78.1, 645.0], [78.2, 647.0], [78.3, 650.0], [78.4, 651.0], [78.5, 653.0], [78.6, 654.0], [78.7, 657.0], [78.8, 659.0], [78.9, 661.0], [79.0, 664.0], [79.1, 667.0], [79.2, 669.0], [79.3, 670.0], [79.4, 671.0], [79.5, 672.0], [79.6, 673.0], [79.7, 675.0], [79.8, 676.0], [79.9, 676.0], [80.0, 680.0], [80.1, 681.0], [80.2, 682.0], [80.3, 685.0], [80.4, 687.0], [80.5, 687.0], [80.6, 691.0], [80.7, 692.0], [80.8, 693.0], [80.9, 694.0], [81.0, 696.0], [81.1, 698.0], [81.2, 700.0], [81.3, 704.0], [81.4, 705.0], [81.5, 709.0], [81.6, 710.0], [81.7, 713.0], [81.8, 715.0], [81.9, 716.0], [82.0, 718.0], [82.1, 719.0], [82.2, 722.0], [82.3, 723.0], [82.4, 725.0], [82.5, 727.0], [82.6, 729.0], [82.7, 733.0], [82.8, 737.0], [82.9, 739.0], [83.0, 741.0], [83.1, 742.0], [83.2, 744.0], [83.3, 745.0], [83.4, 748.0], [83.5, 751.0], [83.6, 753.0], [83.7, 757.0], [83.8, 759.0], [83.9, 763.0], [84.0, 765.0], [84.1, 767.0], [84.2, 770.0], [84.3, 772.0], [84.4, 773.0], [84.5, 775.0], [84.6, 778.0], [84.7, 780.0], [84.8, 782.0], [84.9, 783.0], [85.0, 786.0], [85.1, 787.0], [85.2, 789.0], [85.3, 791.0], [85.4, 794.0], [85.5, 797.0], [85.6, 799.0], [85.7, 801.0], [85.8, 802.0], [85.9, 806.0], [86.0, 807.0], [86.1, 808.0], [86.2, 810.0], [86.3, 812.0], [86.4, 816.0], [86.5, 819.0], [86.6, 820.0], [86.7, 825.0], [86.8, 829.0], [86.9, 832.0], [87.0, 835.0], [87.1, 838.0], [87.2, 841.0], [87.3, 844.0], [87.4, 846.0], [87.5, 850.0], [87.6, 852.0], [87.7, 854.0], [87.8, 857.0], [87.9, 861.0], [88.0, 863.0], [88.1, 866.0], [88.2, 869.0], [88.3, 876.0], [88.4, 879.0], [88.5, 880.0], [88.6, 882.0], [88.7, 888.0], [88.8, 895.0], [88.9, 901.0], [89.0, 906.0], [89.1, 912.0], [89.2, 915.0], [89.3, 919.0], [89.4, 925.0], [89.5, 928.0], [89.6, 932.0], [89.7, 940.0], [89.8, 943.0], [89.9, 945.0], [90.0, 948.0], [90.1, 952.0], [90.2, 955.0], [90.3, 957.0], [90.4, 960.0], [90.5, 962.0], [90.6, 964.0], [90.7, 968.0], [90.8, 975.0], [90.9, 978.0], [91.0, 982.0], [91.1, 985.0], [91.2, 992.0], [91.3, 996.0], [91.4, 999.0], [91.5, 1003.0], [91.6, 1005.0], [91.7, 1009.0], [91.8, 1011.0], [91.9, 1016.0], [92.0, 1023.0], [92.1, 1031.0], [92.2, 1035.0], [92.3, 1040.0], [92.4, 1044.0], [92.5, 1049.0], [92.6, 1051.0], [92.7, 1058.0], [92.8, 1068.0], [92.9, 1069.0], [93.0, 1072.0], [93.1, 1076.0], [93.2, 1084.0], [93.3, 1090.0], [93.4, 1096.0], [93.5, 1107.0], [93.6, 1108.0], [93.7, 1114.0], [93.8, 1118.0], [93.9, 1129.0], [94.0, 1134.0], [94.1, 1139.0], [94.2, 1146.0], [94.3, 1151.0], [94.4, 1154.0], [94.5, 1159.0], [94.6, 1164.0], [94.7, 1170.0], [94.8, 1177.0], [94.9, 1184.0], [95.0, 1189.0], [95.1, 1195.0], [95.2, 1200.0], [95.3, 1209.0], [95.4, 1214.0], [95.5, 1221.0], [95.6, 1232.0], [95.7, 1242.0], [95.8, 1246.0], [95.9, 1259.0], [96.0, 1273.0], [96.1, 1282.0], [96.2, 1290.0], [96.3, 1309.0], [96.4, 1320.0], [96.5, 1330.0], [96.6, 1342.0], [96.7, 1350.0], [96.8, 1356.0], [96.9, 1364.0], [97.0, 1384.0], [97.1, 1398.0], [97.2, 1424.0], [97.3, 1429.0], [97.4, 1438.0], [97.5, 1446.0], [97.6, 1471.0], [97.7, 1484.0], [97.8, 1506.0], [97.9, 1522.0], [98.0, 1548.0], [98.1, 1574.0], [98.2, 1605.0], [98.3, 1623.0], [98.4, 1648.0], [98.5, 1670.0], [98.6, 1691.0], [98.7, 1722.0], [98.8, 1739.0], [98.9, 1769.0], [99.0, 1790.0], [99.1, 1836.0], [99.2, 1848.0], [99.3, 1923.0], [99.4, 1941.0], [99.5, 2042.0], [99.6, 2134.0], [99.7, 2233.0], [99.8, 2356.0], [99.9, 2535.0], [100.0, 3134.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1421.0, "series": [{"data": [[0.0, 1421.0], [600.0, 308.0], [700.0, 233.0], [800.0, 171.0], [900.0, 136.0], [1000.0, 107.0], [1100.0, 91.0], [1200.0, 55.0], [1300.0, 48.0], [1400.0, 33.0], [1500.0, 22.0], [100.0, 821.0], [1600.0, 24.0], [1700.0, 20.0], [1800.0, 13.0], [1900.0, 11.0], [2000.0, 3.0], [2100.0, 8.0], [2300.0, 3.0], [2200.0, 5.0], [2400.0, 2.0], [2500.0, 2.0], [2600.0, 1.0], [2800.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [3100.0, 1.0], [200.0, 520.0], [300.0, 503.0], [400.0, 374.0], [500.0, 333.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3640.0, "series": [{"data": [[0.0, 3640.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1513.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 118.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 27.666666666666668, "minX": 1.60189818E12, "maxY": 39.995968516030025, "series": [{"data": [[1.60189818E12, 39.995968516030025], [1.60189824E12, 27.666666666666668]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189824E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 352.0, "minX": 1.0, "maxY": 2717.0, "series": [{"data": [[33.0, 597.5], [2.0, 2447.0], [34.0, 810.0], [37.0, 1095.0], [36.0, 778.5], [39.0, 892.0], [38.0, 672.0], [40.0, 397.7579812655316], [3.0, 2417.0], [4.0, 2281.0], [5.0, 2199.0], [6.0, 2168.0], [7.0, 2102.0], [8.0, 2277.0], [9.0, 1820.0], [10.0, 1713.0], [11.0, 1668.0], [12.0, 1570.0], [13.0, 1689.0], [14.0, 1476.0], [15.0, 1488.0], [16.0, 1522.0], [1.0, 2717.0], [18.0, 1450.0], [19.0, 1379.0], [20.0, 1200.0], [21.0, 1196.0], [22.0, 1177.0], [23.0, 1243.0], [24.0, 1151.0], [25.0, 1074.0], [26.0, 945.0], [27.0, 810.0], [28.0, 628.5], [29.0, 950.0], [30.0, 945.0], [31.0, 352.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.84863429438551, 405.0413505311084]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 547.2833333333333, "minX": 1.60189818E12, "maxY": 4235877.75, "series": [{"data": [[1.60189818E12, 4235877.75], [1.60189824E12, 52545.98333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60189818E12, 45032.26666666667], [1.60189824E12, 547.2833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189824E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 396.55461700902345, "minX": 1.60189818E12, "maxY": 1106.746031746032, "series": [{"data": [[1.60189818E12, 396.55461700902345], [1.60189824E12, 1106.746031746032]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189824E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 396.2023421002112, "minX": 1.60189818E12, "maxY": 1106.4444444444446, "series": [{"data": [[1.60189818E12, 396.2023421002112], [1.60189824E12, 1106.4444444444446]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189824E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60189818E12, "maxY": 0.11384142829717862, "series": [{"data": [[1.60189818E12, 0.11384142829717862], [1.60189824E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189824E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.60189818E12, "maxY": 3134.0, "series": [{"data": [[1.60189818E12, 3134.0], [1.60189824E12, 2717.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60189818E12, 36.0], [1.60189824E12, 79.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60189818E12, 36.0], [1.60189824E12, 79.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60189818E12, 36.0], [1.60189824E12, 79.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60189818E12, 27.0], [1.60189824E12, 79.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60189818E12, 269.0], [1.60189824E12, 945.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189824E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 55.0, "minX": 8.0, "maxY": 2279.0, "series": [{"data": [[8.0, 2279.0], [16.0, 1482.0], [35.0, 757.5], [39.0, 706.0], [44.0, 797.5], [46.0, 654.0], [48.0, 425.5], [49.0, 850.0], [52.0, 649.0], [53.0, 317.0], [59.0, 852.0], [61.0, 282.0], [62.0, 91.5], [65.0, 622.0], [64.0, 484.0], [68.0, 542.5], [69.0, 653.0], [71.0, 499.0], [73.0, 483.0], [74.0, 455.5], [77.0, 490.0], [83.0, 413.0], [80.0, 429.5], [85.0, 356.0], [91.0, 398.0], [88.0, 55.0], [92.0, 340.0], [93.0, 521.0], [103.0, 246.0], [102.0, 240.5], [100.0, 289.5], [104.0, 324.5], [109.0, 269.0], [115.0, 110.0], [122.0, 205.5], [134.0, 299.5], [131.0, 241.0], [128.0, 111.5], [138.0, 253.0], [141.0, 219.0], [139.0, 95.0], [144.0, 108.0], [159.0, 214.0], [165.0, 175.0], [164.0, 166.0], [173.0, 114.0], [181.0, 85.0], [188.0, 92.5], [219.0, 157.0], [227.0, 159.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[138.0, 390.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 227.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 55.0, "minX": 8.0, "maxY": 2278.0, "series": [{"data": [[8.0, 2278.0], [16.0, 1480.5], [35.0, 757.5], [39.0, 706.0], [44.0, 797.0], [46.0, 653.5], [48.0, 423.0], [49.0, 850.0], [52.0, 649.0], [53.0, 314.0], [59.0, 850.0], [61.0, 282.0], [62.0, 91.5], [65.0, 622.0], [64.0, 483.5], [68.0, 542.5], [69.0, 653.0], [71.0, 499.0], [73.0, 483.0], [74.0, 455.5], [77.0, 490.0], [83.0, 413.0], [80.0, 428.5], [85.0, 356.0], [91.0, 398.0], [88.0, 55.0], [92.0, 340.0], [93.0, 521.0], [103.0, 244.0], [102.0, 239.5], [100.0, 289.0], [104.0, 324.5], [109.0, 269.0], [115.0, 110.0], [122.0, 205.0], [134.0, 299.5], [131.0, 239.0], [128.0, 111.5], [138.0, 253.0], [141.0, 219.0], [139.0, 95.0], [144.0, 108.0], [159.0, 214.0], [165.0, 175.0], [164.0, 165.0], [173.0, 114.0], [181.0, 85.0], [188.0, 92.5], [219.0, 157.0], [227.0, 159.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[138.0, 390.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 227.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60189818E12, "maxY": 87.48333333333333, "series": [{"data": [[1.60189818E12, 87.48333333333333], [1.60189824E12, 0.38333333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189824E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189818E12, "maxY": 86.8, "series": [{"data": [[1.60189818E12, 86.8], [1.60189824E12, 1.05]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60189818E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189824E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189818E12, "maxY": 86.8, "series": [{"data": [[1.60189818E12, 86.8], [1.60189824E12, 1.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60189818E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189824E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189818E12, "maxY": 86.8, "series": [{"data": [[1.60189818E12, 86.8], [1.60189824E12, 1.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60189818E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189824E12, "title": "Total Transactions Per Second"}},
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

