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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 3575.0, "series": [{"data": [[0.0, 28.0], [0.1, 29.0], [0.2, 29.0], [0.3, 30.0], [0.4, 31.0], [0.5, 31.0], [0.6, 31.0], [0.7, 31.0], [0.8, 32.0], [0.9, 32.0], [1.0, 32.0], [1.1, 33.0], [1.2, 33.0], [1.3, 33.0], [1.4, 33.0], [1.5, 33.0], [1.6, 33.0], [1.7, 34.0], [1.8, 34.0], [1.9, 34.0], [2.0, 34.0], [2.1, 34.0], [2.2, 34.0], [2.3, 34.0], [2.4, 34.0], [2.5, 34.0], [2.6, 34.0], [2.7, 35.0], [2.8, 35.0], [2.9, 35.0], [3.0, 35.0], [3.1, 35.0], [3.2, 35.0], [3.3, 35.0], [3.4, 35.0], [3.5, 35.0], [3.6, 35.0], [3.7, 35.0], [3.8, 36.0], [3.9, 36.0], [4.0, 36.0], [4.1, 36.0], [4.2, 36.0], [4.3, 36.0], [4.4, 36.0], [4.5, 36.0], [4.6, 36.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 36.0], [5.1, 36.0], [5.2, 36.0], [5.3, 36.0], [5.4, 36.0], [5.5, 36.0], [5.6, 37.0], [5.7, 37.0], [5.8, 37.0], [5.9, 37.0], [6.0, 37.0], [6.1, 37.0], [6.2, 37.0], [6.3, 37.0], [6.4, 37.0], [6.5, 37.0], [6.6, 37.0], [6.7, 37.0], [6.8, 37.0], [6.9, 37.0], [7.0, 37.0], [7.1, 37.0], [7.2, 37.0], [7.3, 37.0], [7.4, 37.0], [7.5, 38.0], [7.6, 38.0], [7.7, 38.0], [7.8, 38.0], [7.9, 38.0], [8.0, 38.0], [8.1, 38.0], [8.2, 38.0], [8.3, 38.0], [8.4, 38.0], [8.5, 38.0], [8.6, 38.0], [8.7, 38.0], [8.8, 38.0], [8.9, 38.0], [9.0, 38.0], [9.1, 38.0], [9.2, 38.0], [9.3, 38.0], [9.4, 38.0], [9.5, 38.0], [9.6, 39.0], [9.7, 39.0], [9.8, 39.0], [9.9, 39.0], [10.0, 39.0], [10.1, 39.0], [10.2, 39.0], [10.3, 39.0], [10.4, 39.0], [10.5, 39.0], [10.6, 39.0], [10.7, 39.0], [10.8, 39.0], [10.9, 39.0], [11.0, 39.0], [11.1, 39.0], [11.2, 39.0], [11.3, 39.0], [11.4, 39.0], [11.5, 39.0], [11.6, 39.0], [11.7, 39.0], [11.8, 40.0], [11.9, 40.0], [12.0, 40.0], [12.1, 40.0], [12.2, 40.0], [12.3, 40.0], [12.4, 40.0], [12.5, 40.0], [12.6, 40.0], [12.7, 40.0], [12.8, 40.0], [12.9, 40.0], [13.0, 40.0], [13.1, 40.0], [13.2, 40.0], [13.3, 40.0], [13.4, 41.0], [13.5, 41.0], [13.6, 41.0], [13.7, 41.0], [13.8, 41.0], [13.9, 41.0], [14.0, 41.0], [14.1, 41.0], [14.2, 41.0], [14.3, 41.0], [14.4, 41.0], [14.5, 41.0], [14.6, 41.0], [14.7, 41.0], [14.8, 42.0], [14.9, 42.0], [15.0, 42.0], [15.1, 42.0], [15.2, 42.0], [15.3, 42.0], [15.4, 42.0], [15.5, 42.0], [15.6, 42.0], [15.7, 42.0], [15.8, 42.0], [15.9, 42.0], [16.0, 43.0], [16.1, 43.0], [16.2, 43.0], [16.3, 43.0], [16.4, 43.0], [16.5, 43.0], [16.6, 43.0], [16.7, 43.0], [16.8, 43.0], [16.9, 43.0], [17.0, 44.0], [17.1, 44.0], [17.2, 44.0], [17.3, 44.0], [17.4, 44.0], [17.5, 44.0], [17.6, 44.0], [17.7, 44.0], [17.8, 45.0], [17.9, 45.0], [18.0, 45.0], [18.1, 45.0], [18.2, 45.0], [18.3, 45.0], [18.4, 46.0], [18.5, 46.0], [18.6, 46.0], [18.7, 46.0], [18.8, 46.0], [18.9, 47.0], [19.0, 47.0], [19.1, 47.0], [19.2, 47.0], [19.3, 47.0], [19.4, 48.0], [19.5, 48.0], [19.6, 48.0], [19.7, 49.0], [19.8, 49.0], [19.9, 50.0], [20.0, 50.0], [20.1, 51.0], [20.2, 51.0], [20.3, 52.0], [20.4, 52.0], [20.5, 53.0], [20.6, 53.0], [20.7, 54.0], [20.8, 54.0], [20.9, 54.0], [21.0, 55.0], [21.1, 55.0], [21.2, 56.0], [21.3, 56.0], [21.4, 56.0], [21.5, 57.0], [21.6, 57.0], [21.7, 57.0], [21.8, 57.0], [21.9, 58.0], [22.0, 58.0], [22.1, 58.0], [22.2, 59.0], [22.3, 59.0], [22.4, 59.0], [22.5, 60.0], [22.6, 60.0], [22.7, 60.0], [22.8, 60.0], [22.9, 61.0], [23.0, 61.0], [23.1, 62.0], [23.2, 63.0], [23.3, 63.0], [23.4, 63.0], [23.5, 64.0], [23.6, 64.0], [23.7, 65.0], [23.8, 65.0], [23.9, 66.0], [24.0, 66.0], [24.1, 66.0], [24.2, 67.0], [24.3, 67.0], [24.4, 67.0], [24.5, 67.0], [24.6, 68.0], [24.7, 68.0], [24.8, 68.0], [24.9, 68.0], [25.0, 68.0], [25.1, 69.0], [25.2, 69.0], [25.3, 69.0], [25.4, 69.0], [25.5, 69.0], [25.6, 69.0], [25.7, 69.0], [25.8, 70.0], [25.9, 70.0], [26.0, 70.0], [26.1, 70.0], [26.2, 70.0], [26.3, 70.0], [26.4, 70.0], [26.5, 71.0], [26.6, 71.0], [26.7, 71.0], [26.8, 71.0], [26.9, 71.0], [27.0, 71.0], [27.1, 71.0], [27.2, 71.0], [27.3, 71.0], [27.4, 72.0], [27.5, 72.0], [27.6, 72.0], [27.7, 72.0], [27.8, 72.0], [27.9, 72.0], [28.0, 72.0], [28.1, 72.0], [28.2, 72.0], [28.3, 72.0], [28.4, 72.0], [28.5, 72.0], [28.6, 73.0], [28.7, 73.0], [28.8, 73.0], [28.9, 73.0], [29.0, 73.0], [29.1, 73.0], [29.2, 73.0], [29.3, 73.0], [29.4, 73.0], [29.5, 73.0], [29.6, 73.0], [29.7, 74.0], [29.8, 74.0], [29.9, 74.0], [30.0, 74.0], [30.1, 74.0], [30.2, 74.0], [30.3, 74.0], [30.4, 74.0], [30.5, 74.0], [30.6, 75.0], [30.7, 75.0], [30.8, 75.0], [30.9, 75.0], [31.0, 75.0], [31.1, 75.0], [31.2, 75.0], [31.3, 75.0], [31.4, 75.0], [31.5, 75.0], [31.6, 76.0], [31.7, 76.0], [31.8, 76.0], [31.9, 76.0], [32.0, 76.0], [32.1, 76.0], [32.2, 76.0], [32.3, 76.0], [32.4, 76.0], [32.5, 76.0], [32.6, 76.0], [32.7, 77.0], [32.8, 77.0], [32.9, 77.0], [33.0, 77.0], [33.1, 77.0], [33.2, 77.0], [33.3, 77.0], [33.4, 77.0], [33.5, 78.0], [33.6, 78.0], [33.7, 78.0], [33.8, 78.0], [33.9, 78.0], [34.0, 78.0], [34.1, 78.0], [34.2, 78.0], [34.3, 79.0], [34.4, 79.0], [34.5, 79.0], [34.6, 79.0], [34.7, 79.0], [34.8, 79.0], [34.9, 79.0], [35.0, 79.0], [35.1, 79.0], [35.2, 80.0], [35.3, 80.0], [35.4, 80.0], [35.5, 80.0], [35.6, 80.0], [35.7, 81.0], [35.8, 81.0], [35.9, 81.0], [36.0, 81.0], [36.1, 81.0], [36.2, 82.0], [36.3, 82.0], [36.4, 82.0], [36.5, 82.0], [36.6, 83.0], [36.7, 83.0], [36.8, 83.0], [36.9, 83.0], [37.0, 83.0], [37.1, 84.0], [37.2, 84.0], [37.3, 84.0], [37.4, 85.0], [37.5, 85.0], [37.6, 85.0], [37.7, 85.0], [37.8, 86.0], [37.9, 86.0], [38.0, 86.0], [38.1, 87.0], [38.2, 87.0], [38.3, 88.0], [38.4, 88.0], [38.5, 89.0], [38.6, 89.0], [38.7, 89.0], [38.8, 90.0], [38.9, 90.0], [39.0, 90.0], [39.1, 90.0], [39.2, 91.0], [39.3, 91.0], [39.4, 92.0], [39.5, 92.0], [39.6, 92.0], [39.7, 93.0], [39.8, 94.0], [39.9, 94.0], [40.0, 95.0], [40.1, 95.0], [40.2, 96.0], [40.3, 96.0], [40.4, 96.0], [40.5, 97.0], [40.6, 98.0], [40.7, 98.0], [40.8, 99.0], [40.9, 99.0], [41.0, 100.0], [41.1, 101.0], [41.2, 102.0], [41.3, 102.0], [41.4, 102.0], [41.5, 103.0], [41.6, 104.0], [41.7, 104.0], [41.8, 105.0], [41.9, 106.0], [42.0, 106.0], [42.1, 107.0], [42.2, 108.0], [42.3, 109.0], [42.4, 110.0], [42.5, 110.0], [42.6, 111.0], [42.7, 111.0], [42.8, 112.0], [42.9, 112.0], [43.0, 113.0], [43.1, 114.0], [43.2, 114.0], [43.3, 115.0], [43.4, 115.0], [43.5, 116.0], [43.6, 116.0], [43.7, 117.0], [43.8, 117.0], [43.9, 118.0], [44.0, 119.0], [44.1, 119.0], [44.2, 120.0], [44.3, 121.0], [44.4, 122.0], [44.5, 123.0], [44.6, 124.0], [44.7, 126.0], [44.8, 128.0], [44.9, 130.0], [45.0, 133.0], [45.1, 133.0], [45.2, 134.0], [45.3, 135.0], [45.4, 137.0], [45.5, 138.0], [45.6, 139.0], [45.7, 140.0], [45.8, 141.0], [45.9, 142.0], [46.0, 143.0], [46.1, 144.0], [46.2, 145.0], [46.3, 147.0], [46.4, 148.0], [46.5, 149.0], [46.6, 150.0], [46.7, 152.0], [46.8, 153.0], [46.9, 154.0], [47.0, 155.0], [47.1, 156.0], [47.2, 158.0], [47.3, 159.0], [47.4, 159.0], [47.5, 161.0], [47.6, 162.0], [47.7, 163.0], [47.8, 164.0], [47.9, 165.0], [48.0, 166.0], [48.1, 167.0], [48.2, 168.0], [48.3, 169.0], [48.4, 172.0], [48.5, 172.0], [48.6, 173.0], [48.7, 175.0], [48.8, 175.0], [48.9, 177.0], [49.0, 178.0], [49.1, 179.0], [49.2, 180.0], [49.3, 182.0], [49.4, 183.0], [49.5, 185.0], [49.6, 185.0], [49.7, 186.0], [49.8, 187.0], [49.9, 187.0], [50.0, 189.0], [50.1, 189.0], [50.2, 190.0], [50.3, 191.0], [50.4, 192.0], [50.5, 193.0], [50.6, 194.0], [50.7, 194.0], [50.8, 195.0], [50.9, 197.0], [51.0, 197.0], [51.1, 198.0], [51.2, 199.0], [51.3, 199.0], [51.4, 200.0], [51.5, 201.0], [51.6, 202.0], [51.7, 202.0], [51.8, 203.0], [51.9, 204.0], [52.0, 205.0], [52.1, 207.0], [52.2, 208.0], [52.3, 209.0], [52.4, 210.0], [52.5, 211.0], [52.6, 212.0], [52.7, 213.0], [52.8, 214.0], [52.9, 214.0], [53.0, 215.0], [53.1, 215.0], [53.2, 216.0], [53.3, 217.0], [53.4, 218.0], [53.5, 219.0], [53.6, 219.0], [53.7, 220.0], [53.8, 222.0], [53.9, 223.0], [54.0, 225.0], [54.1, 225.0], [54.2, 226.0], [54.3, 227.0], [54.4, 228.0], [54.5, 229.0], [54.6, 230.0], [54.7, 230.0], [54.8, 231.0], [54.9, 232.0], [55.0, 233.0], [55.1, 234.0], [55.2, 235.0], [55.3, 236.0], [55.4, 236.0], [55.5, 237.0], [55.6, 238.0], [55.7, 239.0], [55.8, 240.0], [55.9, 240.0], [56.0, 241.0], [56.1, 241.0], [56.2, 242.0], [56.3, 243.0], [56.4, 244.0], [56.5, 245.0], [56.6, 246.0], [56.7, 247.0], [56.8, 247.0], [56.9, 248.0], [57.0, 249.0], [57.1, 250.0], [57.2, 250.0], [57.3, 251.0], [57.4, 254.0], [57.5, 255.0], [57.6, 256.0], [57.7, 257.0], [57.8, 259.0], [57.9, 259.0], [58.0, 261.0], [58.1, 262.0], [58.2, 263.0], [58.3, 263.0], [58.4, 264.0], [58.5, 265.0], [58.6, 266.0], [58.7, 267.0], [58.8, 268.0], [58.9, 269.0], [59.0, 271.0], [59.1, 272.0], [59.2, 274.0], [59.3, 275.0], [59.4, 276.0], [59.5, 277.0], [59.6, 278.0], [59.7, 280.0], [59.8, 282.0], [59.9, 283.0], [60.0, 284.0], [60.1, 284.0], [60.2, 286.0], [60.3, 288.0], [60.4, 289.0], [60.5, 290.0], [60.6, 291.0], [60.7, 293.0], [60.8, 295.0], [60.9, 297.0], [61.0, 299.0], [61.1, 300.0], [61.2, 301.0], [61.3, 304.0], [61.4, 305.0], [61.5, 306.0], [61.6, 306.0], [61.7, 307.0], [61.8, 307.0], [61.9, 308.0], [62.0, 308.0], [62.1, 309.0], [62.2, 312.0], [62.3, 313.0], [62.4, 314.0], [62.5, 315.0], [62.6, 316.0], [62.7, 317.0], [62.8, 317.0], [62.9, 320.0], [63.0, 320.0], [63.1, 321.0], [63.2, 322.0], [63.3, 324.0], [63.4, 326.0], [63.5, 328.0], [63.6, 330.0], [63.7, 332.0], [63.8, 333.0], [63.9, 335.0], [64.0, 336.0], [64.1, 339.0], [64.2, 340.0], [64.3, 343.0], [64.4, 344.0], [64.5, 347.0], [64.6, 348.0], [64.7, 350.0], [64.8, 352.0], [64.9, 355.0], [65.0, 357.0], [65.1, 358.0], [65.2, 359.0], [65.3, 360.0], [65.4, 362.0], [65.5, 364.0], [65.6, 364.0], [65.7, 366.0], [65.8, 368.0], [65.9, 370.0], [66.0, 371.0], [66.1, 372.0], [66.2, 373.0], [66.3, 374.0], [66.4, 376.0], [66.5, 377.0], [66.6, 379.0], [66.7, 380.0], [66.8, 382.0], [66.9, 383.0], [67.0, 386.0], [67.1, 388.0], [67.2, 390.0], [67.3, 391.0], [67.4, 394.0], [67.5, 395.0], [67.6, 396.0], [67.7, 398.0], [67.8, 400.0], [67.9, 401.0], [68.0, 402.0], [68.1, 404.0], [68.2, 407.0], [68.3, 408.0], [68.4, 409.0], [68.5, 410.0], [68.6, 412.0], [68.7, 413.0], [68.8, 415.0], [68.9, 416.0], [69.0, 417.0], [69.1, 419.0], [69.2, 420.0], [69.3, 421.0], [69.4, 422.0], [69.5, 423.0], [69.6, 425.0], [69.7, 427.0], [69.8, 429.0], [69.9, 432.0], [70.0, 433.0], [70.1, 435.0], [70.2, 436.0], [70.3, 437.0], [70.4, 439.0], [70.5, 441.0], [70.6, 442.0], [70.7, 443.0], [70.8, 445.0], [70.9, 446.0], [71.0, 448.0], [71.1, 449.0], [71.2, 451.0], [71.3, 452.0], [71.4, 453.0], [71.5, 455.0], [71.6, 457.0], [71.7, 459.0], [71.8, 460.0], [71.9, 461.0], [72.0, 462.0], [72.1, 464.0], [72.2, 465.0], [72.3, 468.0], [72.4, 470.0], [72.5, 472.0], [72.6, 474.0], [72.7, 477.0], [72.8, 479.0], [72.9, 481.0], [73.0, 483.0], [73.1, 485.0], [73.2, 487.0], [73.3, 488.0], [73.4, 490.0], [73.5, 491.0], [73.6, 494.0], [73.7, 497.0], [73.8, 498.0], [73.9, 501.0], [74.0, 504.0], [74.1, 504.0], [74.2, 508.0], [74.3, 511.0], [74.4, 512.0], [74.5, 515.0], [74.6, 518.0], [74.7, 521.0], [74.8, 523.0], [74.9, 525.0], [75.0, 527.0], [75.1, 528.0], [75.2, 530.0], [75.3, 531.0], [75.4, 534.0], [75.5, 535.0], [75.6, 538.0], [75.7, 541.0], [75.8, 543.0], [75.9, 545.0], [76.0, 546.0], [76.1, 549.0], [76.2, 551.0], [76.3, 553.0], [76.4, 556.0], [76.5, 557.0], [76.6, 560.0], [76.7, 562.0], [76.8, 564.0], [76.9, 566.0], [77.0, 568.0], [77.1, 569.0], [77.2, 570.0], [77.3, 573.0], [77.4, 575.0], [77.5, 577.0], [77.6, 581.0], [77.7, 583.0], [77.8, 584.0], [77.9, 585.0], [78.0, 588.0], [78.1, 590.0], [78.2, 592.0], [78.3, 593.0], [78.4, 595.0], [78.5, 598.0], [78.6, 599.0], [78.7, 602.0], [78.8, 606.0], [78.9, 607.0], [79.0, 608.0], [79.1, 611.0], [79.2, 614.0], [79.3, 616.0], [79.4, 618.0], [79.5, 620.0], [79.6, 622.0], [79.7, 626.0], [79.8, 628.0], [79.9, 632.0], [80.0, 633.0], [80.1, 637.0], [80.2, 639.0], [80.3, 640.0], [80.4, 641.0], [80.5, 645.0], [80.6, 648.0], [80.7, 651.0], [80.8, 654.0], [80.9, 655.0], [81.0, 656.0], [81.1, 660.0], [81.2, 662.0], [81.3, 664.0], [81.4, 666.0], [81.5, 668.0], [81.6, 671.0], [81.7, 677.0], [81.8, 678.0], [81.9, 681.0], [82.0, 685.0], [82.1, 686.0], [82.2, 688.0], [82.3, 691.0], [82.4, 695.0], [82.5, 697.0], [82.6, 698.0], [82.7, 700.0], [82.8, 702.0], [82.9, 704.0], [83.0, 706.0], [83.1, 708.0], [83.2, 711.0], [83.3, 714.0], [83.4, 717.0], [83.5, 720.0], [83.6, 722.0], [83.7, 723.0], [83.8, 725.0], [83.9, 728.0], [84.0, 731.0], [84.1, 733.0], [84.2, 740.0], [84.3, 746.0], [84.4, 747.0], [84.5, 748.0], [84.6, 750.0], [84.7, 753.0], [84.8, 755.0], [84.9, 756.0], [85.0, 758.0], [85.1, 760.0], [85.2, 764.0], [85.3, 764.0], [85.4, 766.0], [85.5, 767.0], [85.6, 771.0], [85.7, 774.0], [85.8, 776.0], [85.9, 777.0], [86.0, 780.0], [86.1, 785.0], [86.2, 786.0], [86.3, 789.0], [86.4, 791.0], [86.5, 794.0], [86.6, 795.0], [86.7, 797.0], [86.8, 802.0], [86.9, 804.0], [87.0, 808.0], [87.1, 811.0], [87.2, 814.0], [87.3, 818.0], [87.4, 821.0], [87.5, 822.0], [87.6, 825.0], [87.7, 827.0], [87.8, 833.0], [87.9, 836.0], [88.0, 838.0], [88.1, 840.0], [88.2, 842.0], [88.3, 846.0], [88.4, 848.0], [88.5, 850.0], [88.6, 853.0], [88.7, 855.0], [88.8, 858.0], [88.9, 861.0], [89.0, 866.0], [89.1, 870.0], [89.2, 871.0], [89.3, 874.0], [89.4, 877.0], [89.5, 880.0], [89.6, 881.0], [89.7, 884.0], [89.8, 886.0], [89.9, 889.0], [90.0, 895.0], [90.1, 901.0], [90.2, 904.0], [90.3, 907.0], [90.4, 912.0], [90.5, 915.0], [90.6, 916.0], [90.7, 925.0], [90.8, 927.0], [90.9, 931.0], [91.0, 942.0], [91.1, 947.0], [91.2, 952.0], [91.3, 959.0], [91.4, 965.0], [91.5, 973.0], [91.6, 976.0], [91.7, 979.0], [91.8, 986.0], [91.9, 991.0], [92.0, 999.0], [92.1, 1006.0], [92.2, 1013.0], [92.3, 1020.0], [92.4, 1025.0], [92.5, 1032.0], [92.6, 1041.0], [92.7, 1055.0], [92.8, 1064.0], [92.9, 1069.0], [93.0, 1079.0], [93.1, 1082.0], [93.2, 1088.0], [93.3, 1095.0], [93.4, 1103.0], [93.5, 1107.0], [93.6, 1115.0], [93.7, 1122.0], [93.8, 1126.0], [93.9, 1131.0], [94.0, 1133.0], [94.1, 1139.0], [94.2, 1148.0], [94.3, 1152.0], [94.4, 1153.0], [94.5, 1159.0], [94.6, 1168.0], [94.7, 1180.0], [94.8, 1184.0], [94.9, 1194.0], [95.0, 1199.0], [95.1, 1208.0], [95.2, 1212.0], [95.3, 1214.0], [95.4, 1220.0], [95.5, 1226.0], [95.6, 1239.0], [95.7, 1245.0], [95.8, 1256.0], [95.9, 1262.0], [96.0, 1271.0], [96.1, 1293.0], [96.2, 1300.0], [96.3, 1311.0], [96.4, 1333.0], [96.5, 1336.0], [96.6, 1359.0], [96.7, 1368.0], [96.8, 1377.0], [96.9, 1392.0], [97.0, 1406.0], [97.1, 1425.0], [97.2, 1435.0], [97.3, 1456.0], [97.4, 1488.0], [97.5, 1515.0], [97.6, 1525.0], [97.7, 1558.0], [97.8, 1584.0], [97.9, 1611.0], [98.0, 1628.0], [98.1, 1660.0], [98.2, 1677.0], [98.3, 1734.0], [98.4, 1771.0], [98.5, 1805.0], [98.6, 1848.0], [98.7, 1933.0], [98.8, 1962.0], [98.9, 2043.0], [99.0, 2077.0], [99.1, 2111.0], [99.2, 2156.0], [99.3, 2183.0], [99.4, 2216.0], [99.5, 2274.0], [99.6, 2315.0], [99.7, 2368.0], [99.8, 2451.0], [99.9, 2672.0], [100.0, 3575.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2159.0, "series": [{"data": [[0.0, 2159.0], [600.0, 212.0], [700.0, 215.0], [800.0, 177.0], [900.0, 103.0], [1000.0, 73.0], [1100.0, 86.0], [1200.0, 61.0], [1300.0, 40.0], [1400.0, 26.0], [1500.0, 20.0], [100.0, 546.0], [1600.0, 22.0], [1700.0, 13.0], [1800.0, 9.0], [1900.0, 10.0], [2000.0, 10.0], [2100.0, 18.0], [2200.0, 8.0], [2300.0, 12.0], [2400.0, 5.0], [2500.0, 1.0], [2600.0, 2.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 512.0], [3400.0, 1.0], [3500.0, 2.0], [300.0, 356.0], [400.0, 319.0], [500.0, 252.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 135.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3894.0, "series": [{"data": [[0.0, 3894.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1243.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 135.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.958563535911603, "minX": 1.60219866E12, "maxY": 10.0, "series": [{"data": [[1.60219872E12, 10.0], [1.60219878E12, 10.0], [1.60219866E12, 9.95952023988006], [1.60219884E12, 9.958563535911603]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219884E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 355.00589802130906, "minX": 1.0, "maxY": 3500.0, "series": [{"data": [[8.0, 690.5], [4.0, 3500.0], [2.0, 2317.0], [1.0, 3409.0], [9.0, 1856.0], [5.0, 876.3333333333334], [10.0, 355.00589802130906], [3.0, 871.5], [6.0, 1258.5], [7.0, 663.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986342943854304, 358.20276934749677]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5707.433333333333, "minX": 1.60219866E12, "maxY": 1444409.2, "series": [{"data": [[1.60219872E12, 1444409.2], [1.60219878E12, 1312663.8], [1.60219866E12, 421998.81666666665], [1.60219884E12, 1112510.3833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60219872E12, 13257.9], [1.60219878E12, 17010.5], [1.60219866E12, 5707.433333333333], [1.60219884E12, 9603.716666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219884E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 294.7758535378525, "minX": 1.60219866E12, "maxY": 416.09484346224684, "series": [{"data": [[1.60219872E12, 401.44726301735665], [1.60219878E12, 294.7758535378525], [1.60219866E12, 359.0044977511247], [1.60219884E12, 416.09484346224684]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219884E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 294.5076694705588, "minX": 1.60219866E12, "maxY": 415.7090239410684, "series": [{"data": [[1.60219872E12, 401.0413885180241], [1.60219878E12, 294.5076694705588], [1.60219866E12, 358.70914542728633], [1.60219884E12, 415.7090239410684]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219884E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008287292817679552, "minX": 1.60219866E12, "maxY": 0.15742128935532224, "series": [{"data": [[1.60219872E12, 0.00934579439252337], [1.60219878E12, 0.008906481939633842], [1.60219866E12, 0.15742128935532224], [1.60219884E12, 0.008287292817679552]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219884E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60219866E12, "maxY": 3575.0, "series": [{"data": [[1.60219872E12, 2672.0], [1.60219878E12, 2368.0], [1.60219866E12, 1611.0], [1.60219884E12, 3575.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60219872E12, 31.0], [1.60219878E12, 33.0], [1.60219866E12, 35.01199984073639], [1.60219884E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60219872E12, 31.0], [1.60219878E12, 33.0], [1.60219866E12, 35.61320006370544], [1.60219884E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60219872E12, 31.0], [1.60219878E12, 33.0], [1.60219866E12, 35.34599992036819], [1.60219884E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60219872E12, 28.0], [1.60219878E12, 29.0], [1.60219866E12, 33.0], [1.60219884E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60219872E12, 214.0], [1.60219878E12, 143.0], [1.60219866E12, 248.0], [1.60219884E12, 238.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219884E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 46.5, "minX": 1.0, "maxY": 3409.0, "series": [{"data": [[3.0, 2317.0], [4.0, 1505.5], [5.0, 1241.0], [7.0, 1067.5], [8.0, 922.0], [9.0, 1041.0], [10.0, 882.5], [11.0, 814.0], [12.0, 714.0], [13.0, 723.0], [14.0, 708.5], [15.0, 510.5], [16.0, 572.5], [17.0, 561.0], [18.0, 547.5], [19.0, 474.0], [20.0, 430.5], [21.0, 395.0], [22.0, 384.0], [23.0, 361.5], [24.0, 182.0], [25.0, 250.0], [26.0, 180.5], [27.0, 265.0], [28.0, 249.5], [29.0, 205.0], [30.0, 167.0], [31.0, 256.5], [32.0, 82.5], [33.0, 111.0], [35.0, 179.0], [34.0, 116.5], [37.0, 74.0], [36.0, 185.5], [38.0, 73.0], [39.0, 78.5], [40.0, 162.0], [41.0, 189.0], [43.0, 143.5], [42.0, 73.0], [45.0, 88.0], [46.0, 197.5], [49.0, 129.0], [48.0, 117.0], [50.0, 46.5], [53.0, 141.0], [54.0, 79.5], [55.0, 163.0], [56.0, 95.0], [58.0, 143.0], [61.0, 137.5], [63.0, 76.5], [64.0, 176.5], [68.0, 74.0], [73.0, 83.0], [79.0, 59.0], [87.0, 70.0], [91.0, 72.0], [90.0, 75.5], [1.0, 3409.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 46.5, "minX": 1.0, "maxY": 3409.0, "series": [{"data": [[3.0, 2316.0], [4.0, 1505.5], [5.0, 1241.0], [7.0, 1066.0], [8.0, 919.5], [9.0, 1040.0], [10.0, 881.5], [11.0, 814.0], [12.0, 714.0], [13.0, 722.0], [14.0, 708.0], [15.0, 509.5], [16.0, 572.5], [17.0, 559.0], [18.0, 547.5], [19.0, 473.0], [20.0, 430.5], [21.0, 395.0], [22.0, 382.5], [23.0, 361.5], [24.0, 182.0], [25.0, 250.0], [26.0, 180.0], [27.0, 264.0], [28.0, 249.0], [29.0, 205.0], [30.0, 166.0], [31.0, 256.0], [32.0, 82.5], [33.0, 111.0], [35.0, 179.0], [34.0, 116.5], [37.0, 74.0], [36.0, 184.5], [38.0, 73.0], [39.0, 78.5], [40.0, 162.0], [41.0, 189.0], [43.0, 143.0], [42.0, 73.0], [45.0, 88.0], [46.0, 197.5], [49.0, 129.0], [48.0, 117.0], [50.0, 46.5], [53.0, 140.0], [54.0, 79.5], [55.0, 162.0], [56.0, 95.0], [58.0, 143.0], [61.0, 137.0], [63.0, 76.5], [64.0, 176.5], [68.0, 74.0], [73.0, 83.0], [79.0, 59.0], [87.0, 70.0], [91.0, 72.0], [90.0, 75.5], [1.0, 3409.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.283333333333333, "minX": 1.60219866E12, "maxY": 33.68333333333333, "series": [{"data": [[1.60219872E12, 24.966666666666665], [1.60219878E12, 33.68333333333333], [1.60219866E12, 11.283333333333333], [1.60219884E12, 17.933333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219884E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.116666666666667, "minX": 1.60219866E12, "maxY": 33.68333333333333, "series": [{"data": [[1.60219872E12, 24.966666666666665], [1.60219878E12, 33.68333333333333], [1.60219866E12, 11.116666666666667], [1.60219884E12, 18.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219884E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.116666666666667, "minX": 1.60219866E12, "maxY": 33.68333333333333, "series": [{"data": [[1.60219872E12, 24.966666666666665], [1.60219878E12, 33.68333333333333], [1.60219866E12, 11.116666666666667], [1.60219884E12, 18.1]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219884E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.116666666666667, "minX": 1.60219866E12, "maxY": 33.68333333333333, "series": [{"data": [[1.60219872E12, 24.966666666666665], [1.60219878E12, 33.68333333333333], [1.60219866E12, 11.116666666666667], [1.60219884E12, 18.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219884E12, "title": "Total Transactions Per Second"}},
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

