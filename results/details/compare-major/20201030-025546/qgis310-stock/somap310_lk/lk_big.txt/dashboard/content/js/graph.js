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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 3892.0, "series": [{"data": [[0.0, 30.0], [0.1, 31.0], [0.2, 32.0], [0.3, 33.0], [0.4, 34.0], [0.5, 34.0], [0.6, 35.0], [0.7, 35.0], [0.8, 35.0], [0.9, 35.0], [1.0, 35.0], [1.1, 36.0], [1.2, 36.0], [1.3, 36.0], [1.4, 36.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 38.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 40.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 41.0], [8.2, 41.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 41.0], [9.6, 41.0], [9.7, 41.0], [9.8, 41.0], [9.9, 41.0], [10.0, 41.0], [10.1, 42.0], [10.2, 42.0], [10.3, 42.0], [10.4, 42.0], [10.5, 42.0], [10.6, 42.0], [10.7, 42.0], [10.8, 42.0], [10.9, 42.0], [11.0, 42.0], [11.1, 42.0], [11.2, 42.0], [11.3, 42.0], [11.4, 42.0], [11.5, 42.0], [11.6, 42.0], [11.7, 42.0], [11.8, 42.0], [11.9, 43.0], [12.0, 43.0], [12.1, 43.0], [12.2, 43.0], [12.3, 43.0], [12.4, 43.0], [12.5, 43.0], [12.6, 43.0], [12.7, 43.0], [12.8, 43.0], [12.9, 43.0], [13.0, 43.0], [13.1, 43.0], [13.2, 43.0], [13.3, 43.0], [13.4, 44.0], [13.5, 44.0], [13.6, 44.0], [13.7, 44.0], [13.8, 44.0], [13.9, 44.0], [14.0, 44.0], [14.1, 44.0], [14.2, 44.0], [14.3, 44.0], [14.4, 44.0], [14.5, 44.0], [14.6, 44.0], [14.7, 44.0], [14.8, 45.0], [14.9, 45.0], [15.0, 45.0], [15.1, 45.0], [15.2, 45.0], [15.3, 45.0], [15.4, 45.0], [15.5, 45.0], [15.6, 45.0], [15.7, 45.0], [15.8, 45.0], [15.9, 45.0], [16.0, 45.0], [16.1, 45.0], [16.2, 45.0], [16.3, 46.0], [16.4, 46.0], [16.5, 46.0], [16.6, 46.0], [16.7, 46.0], [16.8, 46.0], [16.9, 46.0], [17.0, 46.0], [17.1, 46.0], [17.2, 46.0], [17.3, 47.0], [17.4, 47.0], [17.5, 47.0], [17.6, 47.0], [17.7, 47.0], [17.8, 47.0], [17.9, 47.0], [18.0, 47.0], [18.1, 48.0], [18.2, 48.0], [18.3, 48.0], [18.4, 48.0], [18.5, 48.0], [18.6, 48.0], [18.7, 48.0], [18.8, 49.0], [18.9, 49.0], [19.0, 49.0], [19.1, 49.0], [19.2, 49.0], [19.3, 49.0], [19.4, 49.0], [19.5, 50.0], [19.6, 50.0], [19.7, 50.0], [19.8, 50.0], [19.9, 51.0], [20.0, 51.0], [20.1, 51.0], [20.2, 51.0], [20.3, 52.0], [20.4, 52.0], [20.5, 52.0], [20.6, 52.0], [20.7, 52.0], [20.8, 53.0], [20.9, 53.0], [21.0, 54.0], [21.1, 54.0], [21.2, 54.0], [21.3, 55.0], [21.4, 55.0], [21.5, 56.0], [21.6, 56.0], [21.7, 57.0], [21.8, 58.0], [21.9, 58.0], [22.0, 58.0], [22.1, 59.0], [22.2, 59.0], [22.3, 60.0], [22.4, 60.0], [22.5, 60.0], [22.6, 61.0], [22.7, 61.0], [22.8, 61.0], [22.9, 61.0], [23.0, 62.0], [23.1, 62.0], [23.2, 62.0], [23.3, 62.0], [23.4, 63.0], [23.5, 63.0], [23.6, 63.0], [23.7, 63.0], [23.8, 64.0], [23.9, 64.0], [24.0, 65.0], [24.1, 65.0], [24.2, 65.0], [24.3, 66.0], [24.4, 66.0], [24.5, 67.0], [24.6, 67.0], [24.7, 67.0], [24.8, 68.0], [24.9, 69.0], [25.0, 69.0], [25.1, 69.0], [25.2, 69.0], [25.3, 69.0], [25.4, 70.0], [25.5, 70.0], [25.6, 70.0], [25.7, 71.0], [25.8, 71.0], [25.9, 71.0], [26.0, 71.0], [26.1, 72.0], [26.2, 72.0], [26.3, 72.0], [26.4, 72.0], [26.5, 72.0], [26.6, 72.0], [26.7, 72.0], [26.8, 73.0], [26.9, 73.0], [27.0, 73.0], [27.1, 73.0], [27.2, 73.0], [27.3, 73.0], [27.4, 73.0], [27.5, 74.0], [27.6, 74.0], [27.7, 74.0], [27.8, 74.0], [27.9, 74.0], [28.0, 74.0], [28.1, 74.0], [28.2, 74.0], [28.3, 75.0], [28.4, 75.0], [28.5, 75.0], [28.6, 75.0], [28.7, 75.0], [28.8, 75.0], [28.9, 75.0], [29.0, 75.0], [29.1, 76.0], [29.2, 76.0], [29.3, 76.0], [29.4, 76.0], [29.5, 76.0], [29.6, 76.0], [29.7, 76.0], [29.8, 76.0], [29.9, 76.0], [30.0, 76.0], [30.1, 77.0], [30.2, 77.0], [30.3, 77.0], [30.4, 77.0], [30.5, 77.0], [30.6, 77.0], [30.7, 77.0], [30.8, 78.0], [30.9, 78.0], [31.0, 78.0], [31.1, 78.0], [31.2, 78.0], [31.3, 78.0], [31.4, 78.0], [31.5, 78.0], [31.6, 78.0], [31.7, 79.0], [31.8, 79.0], [31.9, 79.0], [32.0, 79.0], [32.1, 79.0], [32.2, 79.0], [32.3, 79.0], [32.4, 79.0], [32.5, 80.0], [32.6, 80.0], [32.7, 80.0], [32.8, 80.0], [32.9, 80.0], [33.0, 80.0], [33.1, 80.0], [33.2, 80.0], [33.3, 81.0], [33.4, 81.0], [33.5, 81.0], [33.6, 81.0], [33.7, 81.0], [33.8, 81.0], [33.9, 81.0], [34.0, 82.0], [34.1, 82.0], [34.2, 82.0], [34.3, 82.0], [34.4, 82.0], [34.5, 82.0], [34.6, 82.0], [34.7, 82.0], [34.8, 82.0], [34.9, 83.0], [35.0, 83.0], [35.1, 83.0], [35.2, 83.0], [35.3, 83.0], [35.4, 83.0], [35.5, 83.0], [35.6, 83.0], [35.7, 84.0], [35.8, 84.0], [35.9, 84.0], [36.0, 84.0], [36.1, 84.0], [36.2, 84.0], [36.3, 85.0], [36.4, 85.0], [36.5, 85.0], [36.6, 85.0], [36.7, 85.0], [36.8, 86.0], [36.9, 86.0], [37.0, 86.0], [37.1, 86.0], [37.2, 87.0], [37.3, 87.0], [37.4, 87.0], [37.5, 88.0], [37.6, 88.0], [37.7, 88.0], [37.8, 88.0], [37.9, 89.0], [38.0, 89.0], [38.1, 89.0], [38.2, 89.0], [38.3, 90.0], [38.4, 90.0], [38.5, 90.0], [38.6, 90.0], [38.7, 91.0], [38.8, 91.0], [38.9, 91.0], [39.0, 91.0], [39.1, 92.0], [39.2, 92.0], [39.3, 92.0], [39.4, 92.0], [39.5, 92.0], [39.6, 93.0], [39.7, 93.0], [39.8, 94.0], [39.9, 94.0], [40.0, 94.0], [40.1, 95.0], [40.2, 96.0], [40.3, 96.0], [40.4, 97.0], [40.5, 98.0], [40.6, 99.0], [40.7, 99.0], [40.8, 99.0], [40.9, 100.0], [41.0, 101.0], [41.1, 102.0], [41.2, 102.0], [41.3, 103.0], [41.4, 103.0], [41.5, 104.0], [41.6, 105.0], [41.7, 105.0], [41.8, 106.0], [41.9, 107.0], [42.0, 108.0], [42.1, 108.0], [42.2, 109.0], [42.3, 109.0], [42.4, 110.0], [42.5, 111.0], [42.6, 112.0], [42.7, 113.0], [42.8, 113.0], [42.9, 114.0], [43.0, 114.0], [43.1, 115.0], [43.2, 115.0], [43.3, 117.0], [43.4, 118.0], [43.5, 119.0], [43.6, 119.0], [43.7, 120.0], [43.8, 120.0], [43.9, 121.0], [44.0, 122.0], [44.1, 122.0], [44.2, 123.0], [44.3, 124.0], [44.4, 125.0], [44.5, 126.0], [44.6, 126.0], [44.7, 127.0], [44.8, 128.0], [44.9, 128.0], [45.0, 129.0], [45.1, 130.0], [45.2, 132.0], [45.3, 133.0], [45.4, 134.0], [45.5, 136.0], [45.6, 137.0], [45.7, 138.0], [45.8, 138.0], [45.9, 139.0], [46.0, 140.0], [46.1, 141.0], [46.2, 143.0], [46.3, 145.0], [46.4, 146.0], [46.5, 147.0], [46.6, 148.0], [46.7, 149.0], [46.8, 150.0], [46.9, 151.0], [47.0, 152.0], [47.1, 153.0], [47.2, 154.0], [47.3, 154.0], [47.4, 155.0], [47.5, 156.0], [47.6, 158.0], [47.7, 160.0], [47.8, 160.0], [47.9, 161.0], [48.0, 162.0], [48.1, 163.0], [48.2, 164.0], [48.3, 165.0], [48.4, 166.0], [48.5, 167.0], [48.6, 167.0], [48.7, 169.0], [48.8, 170.0], [48.9, 172.0], [49.0, 173.0], [49.1, 175.0], [49.2, 177.0], [49.3, 178.0], [49.4, 179.0], [49.5, 179.0], [49.6, 180.0], [49.7, 181.0], [49.8, 182.0], [49.9, 183.0], [50.0, 185.0], [50.1, 185.0], [50.2, 186.0], [50.3, 187.0], [50.4, 188.0], [50.5, 190.0], [50.6, 191.0], [50.7, 192.0], [50.8, 192.0], [50.9, 193.0], [51.0, 194.0], [51.1, 194.0], [51.2, 197.0], [51.3, 198.0], [51.4, 198.0], [51.5, 199.0], [51.6, 200.0], [51.7, 201.0], [51.8, 202.0], [51.9, 203.0], [52.0, 205.0], [52.1, 206.0], [52.2, 207.0], [52.3, 208.0], [52.4, 209.0], [52.5, 210.0], [52.6, 210.0], [52.7, 211.0], [52.8, 212.0], [52.9, 213.0], [53.0, 214.0], [53.1, 215.0], [53.2, 215.0], [53.3, 217.0], [53.4, 217.0], [53.5, 218.0], [53.6, 219.0], [53.7, 220.0], [53.8, 221.0], [53.9, 222.0], [54.0, 224.0], [54.1, 225.0], [54.2, 228.0], [54.3, 229.0], [54.4, 230.0], [54.5, 231.0], [54.6, 231.0], [54.7, 232.0], [54.8, 234.0], [54.9, 234.0], [55.0, 235.0], [55.1, 235.0], [55.2, 236.0], [55.3, 236.0], [55.4, 237.0], [55.5, 238.0], [55.6, 239.0], [55.7, 240.0], [55.8, 241.0], [55.9, 241.0], [56.0, 242.0], [56.1, 242.0], [56.2, 243.0], [56.3, 244.0], [56.4, 244.0], [56.5, 245.0], [56.6, 245.0], [56.7, 246.0], [56.8, 247.0], [56.9, 248.0], [57.0, 248.0], [57.1, 249.0], [57.2, 251.0], [57.3, 252.0], [57.4, 253.0], [57.5, 253.0], [57.6, 254.0], [57.7, 255.0], [57.8, 256.0], [57.9, 257.0], [58.0, 258.0], [58.1, 259.0], [58.2, 259.0], [58.3, 260.0], [58.4, 260.0], [58.5, 261.0], [58.6, 262.0], [58.7, 262.0], [58.8, 264.0], [58.9, 264.0], [59.0, 266.0], [59.1, 267.0], [59.2, 268.0], [59.3, 269.0], [59.4, 271.0], [59.5, 273.0], [59.6, 274.0], [59.7, 275.0], [59.8, 275.0], [59.9, 277.0], [60.0, 278.0], [60.1, 279.0], [60.2, 280.0], [60.3, 282.0], [60.4, 283.0], [60.5, 284.0], [60.6, 285.0], [60.7, 285.0], [60.8, 287.0], [60.9, 287.0], [61.0, 288.0], [61.1, 290.0], [61.2, 291.0], [61.3, 293.0], [61.4, 295.0], [61.5, 295.0], [61.6, 296.0], [61.7, 298.0], [61.8, 300.0], [61.9, 301.0], [62.0, 302.0], [62.1, 304.0], [62.2, 305.0], [62.3, 306.0], [62.4, 309.0], [62.5, 310.0], [62.6, 311.0], [62.7, 312.0], [62.8, 316.0], [62.9, 317.0], [63.0, 319.0], [63.1, 319.0], [63.2, 323.0], [63.3, 324.0], [63.4, 326.0], [63.5, 327.0], [63.6, 327.0], [63.7, 330.0], [63.8, 330.0], [63.9, 331.0], [64.0, 334.0], [64.1, 335.0], [64.2, 337.0], [64.3, 339.0], [64.4, 340.0], [64.5, 341.0], [64.6, 342.0], [64.7, 344.0], [64.8, 345.0], [64.9, 347.0], [65.0, 349.0], [65.1, 349.0], [65.2, 351.0], [65.3, 354.0], [65.4, 356.0], [65.5, 357.0], [65.6, 359.0], [65.7, 360.0], [65.8, 361.0], [65.9, 362.0], [66.0, 364.0], [66.1, 366.0], [66.2, 367.0], [66.3, 368.0], [66.4, 369.0], [66.5, 372.0], [66.6, 374.0], [66.7, 376.0], [66.8, 379.0], [66.9, 380.0], [67.0, 381.0], [67.1, 381.0], [67.2, 384.0], [67.3, 386.0], [67.4, 387.0], [67.5, 389.0], [67.6, 390.0], [67.7, 391.0], [67.8, 393.0], [67.9, 395.0], [68.0, 396.0], [68.1, 398.0], [68.2, 399.0], [68.3, 401.0], [68.4, 403.0], [68.5, 405.0], [68.6, 407.0], [68.7, 407.0], [68.8, 409.0], [68.9, 411.0], [69.0, 412.0], [69.1, 413.0], [69.2, 415.0], [69.3, 417.0], [69.4, 418.0], [69.5, 419.0], [69.6, 421.0], [69.7, 423.0], [69.8, 424.0], [69.9, 427.0], [70.0, 429.0], [70.1, 432.0], [70.2, 434.0], [70.3, 436.0], [70.4, 438.0], [70.5, 439.0], [70.6, 440.0], [70.7, 442.0], [70.8, 443.0], [70.9, 444.0], [71.0, 446.0], [71.1, 448.0], [71.2, 449.0], [71.3, 451.0], [71.4, 452.0], [71.5, 453.0], [71.6, 454.0], [71.7, 455.0], [71.8, 457.0], [71.9, 458.0], [72.0, 459.0], [72.1, 461.0], [72.2, 463.0], [72.3, 465.0], [72.4, 467.0], [72.5, 468.0], [72.6, 469.0], [72.7, 470.0], [72.8, 472.0], [72.9, 473.0], [73.0, 476.0], [73.1, 477.0], [73.2, 479.0], [73.3, 480.0], [73.4, 482.0], [73.5, 483.0], [73.6, 486.0], [73.7, 487.0], [73.8, 489.0], [73.9, 490.0], [74.0, 492.0], [74.1, 495.0], [74.2, 497.0], [74.3, 499.0], [74.4, 501.0], [74.5, 504.0], [74.6, 507.0], [74.7, 510.0], [74.8, 512.0], [74.9, 514.0], [75.0, 516.0], [75.1, 517.0], [75.2, 519.0], [75.3, 521.0], [75.4, 524.0], [75.5, 525.0], [75.6, 529.0], [75.7, 530.0], [75.8, 532.0], [75.9, 534.0], [76.0, 537.0], [76.1, 538.0], [76.2, 541.0], [76.3, 542.0], [76.4, 544.0], [76.5, 546.0], [76.6, 547.0], [76.7, 550.0], [76.8, 553.0], [76.9, 553.0], [77.0, 555.0], [77.1, 559.0], [77.2, 562.0], [77.3, 563.0], [77.4, 566.0], [77.5, 568.0], [77.6, 570.0], [77.7, 572.0], [77.8, 574.0], [77.9, 578.0], [78.0, 580.0], [78.1, 582.0], [78.2, 583.0], [78.3, 586.0], [78.4, 588.0], [78.5, 589.0], [78.6, 591.0], [78.7, 596.0], [78.8, 598.0], [78.9, 599.0], [79.0, 602.0], [79.1, 606.0], [79.2, 608.0], [79.3, 610.0], [79.4, 612.0], [79.5, 615.0], [79.6, 617.0], [79.7, 621.0], [79.8, 624.0], [79.9, 626.0], [80.0, 628.0], [80.1, 631.0], [80.2, 634.0], [80.3, 635.0], [80.4, 637.0], [80.5, 640.0], [80.6, 643.0], [80.7, 644.0], [80.8, 648.0], [80.9, 650.0], [81.0, 652.0], [81.1, 655.0], [81.2, 657.0], [81.3, 660.0], [81.4, 662.0], [81.5, 666.0], [81.6, 667.0], [81.7, 670.0], [81.8, 673.0], [81.9, 675.0], [82.0, 677.0], [82.1, 680.0], [82.2, 683.0], [82.3, 686.0], [82.4, 689.0], [82.5, 693.0], [82.6, 695.0], [82.7, 701.0], [82.8, 704.0], [82.9, 707.0], [83.0, 708.0], [83.1, 711.0], [83.2, 712.0], [83.3, 715.0], [83.4, 717.0], [83.5, 720.0], [83.6, 724.0], [83.7, 727.0], [83.8, 728.0], [83.9, 733.0], [84.0, 735.0], [84.1, 739.0], [84.2, 742.0], [84.3, 745.0], [84.4, 748.0], [84.5, 749.0], [84.6, 751.0], [84.7, 753.0], [84.8, 757.0], [84.9, 762.0], [85.0, 763.0], [85.1, 764.0], [85.2, 766.0], [85.3, 767.0], [85.4, 769.0], [85.5, 772.0], [85.6, 773.0], [85.7, 776.0], [85.8, 777.0], [85.9, 780.0], [86.0, 782.0], [86.1, 783.0], [86.2, 784.0], [86.3, 788.0], [86.4, 788.0], [86.5, 790.0], [86.6, 794.0], [86.7, 795.0], [86.8, 797.0], [86.9, 800.0], [87.0, 802.0], [87.1, 806.0], [87.2, 807.0], [87.3, 811.0], [87.4, 813.0], [87.5, 816.0], [87.6, 817.0], [87.7, 821.0], [87.8, 825.0], [87.9, 828.0], [88.0, 831.0], [88.1, 835.0], [88.2, 838.0], [88.3, 843.0], [88.4, 846.0], [88.5, 857.0], [88.6, 859.0], [88.7, 863.0], [88.8, 868.0], [88.9, 871.0], [89.0, 872.0], [89.1, 874.0], [89.2, 877.0], [89.3, 878.0], [89.4, 882.0], [89.5, 886.0], [89.6, 888.0], [89.7, 893.0], [89.8, 902.0], [89.9, 904.0], [90.0, 911.0], [90.1, 919.0], [90.2, 921.0], [90.3, 922.0], [90.4, 924.0], [90.5, 932.0], [90.6, 937.0], [90.7, 943.0], [90.8, 950.0], [90.9, 954.0], [91.0, 959.0], [91.1, 964.0], [91.2, 971.0], [91.3, 978.0], [91.4, 984.0], [91.5, 988.0], [91.6, 996.0], [91.7, 998.0], [91.8, 1007.0], [91.9, 1011.0], [92.0, 1018.0], [92.1, 1023.0], [92.2, 1028.0], [92.3, 1033.0], [92.4, 1039.0], [92.5, 1049.0], [92.6, 1052.0], [92.7, 1058.0], [92.8, 1064.0], [92.9, 1073.0], [93.0, 1076.0], [93.1, 1084.0], [93.2, 1093.0], [93.3, 1104.0], [93.4, 1111.0], [93.5, 1117.0], [93.6, 1125.0], [93.7, 1129.0], [93.8, 1140.0], [93.9, 1154.0], [94.0, 1158.0], [94.1, 1166.0], [94.2, 1174.0], [94.3, 1184.0], [94.4, 1195.0], [94.5, 1197.0], [94.6, 1204.0], [94.7, 1213.0], [94.8, 1223.0], [94.9, 1230.0], [95.0, 1237.0], [95.1, 1243.0], [95.2, 1251.0], [95.3, 1256.0], [95.4, 1266.0], [95.5, 1285.0], [95.6, 1294.0], [95.7, 1310.0], [95.8, 1323.0], [95.9, 1333.0], [96.0, 1348.0], [96.1, 1355.0], [96.2, 1366.0], [96.3, 1375.0], [96.4, 1390.0], [96.5, 1407.0], [96.6, 1420.0], [96.7, 1428.0], [96.8, 1446.0], [96.9, 1457.0], [97.0, 1473.0], [97.1, 1492.0], [97.2, 1515.0], [97.3, 1522.0], [97.4, 1543.0], [97.5, 1551.0], [97.6, 1562.0], [97.7, 1571.0], [97.8, 1592.0], [97.9, 1612.0], [98.0, 1629.0], [98.1, 1651.0], [98.2, 1693.0], [98.3, 1712.0], [98.4, 1742.0], [98.5, 1781.0], [98.6, 1795.0], [98.7, 1830.0], [98.8, 1879.0], [98.9, 1906.0], [99.0, 1973.0], [99.1, 2035.0], [99.2, 2086.0], [99.3, 2163.0], [99.4, 2241.0], [99.5, 2274.0], [99.6, 2356.0], [99.7, 2454.0], [99.8, 2589.0], [99.9, 2941.0], [100.0, 3892.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2148.0, "series": [{"data": [[0.0, 2148.0], [600.0, 198.0], [700.0, 222.0], [800.0, 152.0], [900.0, 102.0], [1000.0, 81.0], [1100.0, 69.0], [1200.0, 58.0], [1300.0, 42.0], [1400.0, 35.0], [1500.0, 37.0], [100.0, 564.0], [1600.0, 22.0], [1700.0, 20.0], [1800.0, 12.0], [1900.0, 9.0], [2000.0, 10.0], [2100.0, 8.0], [2200.0, 10.0], [2300.0, 6.0], [2400.0, 4.0], [2500.0, 3.0], [2600.0, 2.0], [2800.0, 1.0], [2900.0, 3.0], [3100.0, 1.0], [200.0, 539.0], [3800.0, 3.0], [300.0, 339.0], [400.0, 321.0], [500.0, 241.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 151.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3914.0, "series": [{"data": [[0.0, 3914.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1197.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 151.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.95890410958904, "minX": 1.60402728E12, "maxY": 10.0, "series": [{"data": [[1.6040274E12, 10.0], [1.60402728E12, 9.961194029850745], [1.60402746E12, 9.95890410958904], [1.60402734E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402746E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 356.38188751191626, "minX": 1.0, "maxY": 3862.0, "series": [{"data": [[4.0, 1234.0], [8.0, 2010.0], [2.0, 3862.0], [1.0, 2975.0], [9.0, 561.75], [5.0, 1164.5], [10.0, 356.38188751191626], [3.0, 1981.5], [6.0, 1236.0], [7.0, 696.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986507031546962, 359.8850247054353]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5732.0, "minX": 1.60402728E12, "maxY": 1452248.2333333334, "series": [{"data": [[1.6040274E12, 1239296.4166666667], [1.60402728E12, 429338.63333333336], [1.60402746E12, 1130298.6833333333], [1.60402734E12, 1452248.2333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6040274E12, 16337.283333333333], [1.60402728E12, 5732.0], [1.60402746E12, 9683.416666666666], [1.60402734E12, 13738.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402746E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 307.862176165803, "minX": 1.60402728E12, "maxY": 414.4894977168951, "series": [{"data": [[1.6040274E12, 307.862176165803], [1.60402728E12, 362.96716417910426], [1.60402746E12, 414.4894977168951], [1.60402734E12, 384.4843650287179]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402746E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 307.5362694300517, "minX": 1.60402728E12, "maxY": 414.0301369863015, "series": [{"data": [[1.6040274E12, 307.5362694300517], [1.60402728E12, 362.5746268656715], [1.60402746E12, 414.0301369863015], [1.60402734E12, 384.0051052967456]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402746E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00777202072538862, "minX": 1.60402728E12, "maxY": 0.12537313432835828, "series": [{"data": [[1.6040274E12, 0.00777202072538862], [1.60402728E12, 0.12537313432835828], [1.60402746E12, 0.010958904109589043], [1.60402734E12, 0.008934269304403327]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402746E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60402728E12, "maxY": 3892.0, "series": [{"data": [[1.6040274E12, 2274.0], [1.60402728E12, 1626.0], [1.60402746E12, 3892.0], [1.60402734E12, 2671.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6040274E12, 36.0], [1.60402728E12, 38.038999840021134], [1.60402746E12, 34.0], [1.60402734E12, 34.11199962615967]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6040274E12, 36.0], [1.60402728E12, 38.64290006399155], [1.60402746E12, 34.850400104522706], [1.60402734E12, 35.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6040274E12, 36.0], [1.60402728E12, 38.374499920010564], [1.60402746E12, 34.411999869346616], [1.60402734E12, 34.89599981307983]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6040274E12, 30.0], [1.60402728E12, 38.0], [1.60402746E12, 30.0], [1.60402734E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6040274E12, 155.0], [1.60402728E12, 203.0], [1.60402746E12, 237.0], [1.60402734E12, 177.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402746E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 58.0, "minX": 1.0, "maxY": 3406.0, "series": [{"data": [[2.0, 3406.0], [3.0, 2460.0], [5.0, 1670.5], [6.0, 1186.0], [7.0, 921.0], [8.0, 1109.0], [9.0, 746.5], [10.0, 810.0], [11.0, 791.5], [12.0, 759.0], [13.0, 683.0], [14.0, 468.0], [15.0, 563.0], [16.0, 518.0], [17.0, 463.0], [18.0, 459.0], [19.0, 441.0], [20.0, 561.0], [21.0, 366.0], [22.0, 248.5], [23.0, 262.5], [24.0, 303.0], [25.0, 297.0], [26.0, 225.0], [27.0, 261.0], [28.0, 223.0], [30.0, 207.0], [31.0, 247.0], [33.0, 227.5], [32.0, 91.0], [34.0, 214.0], [35.0, 76.5], [36.0, 133.5], [37.0, 192.0], [39.0, 186.0], [38.0, 228.0], [43.0, 207.5], [42.0, 73.0], [45.0, 76.5], [44.0, 117.5], [46.0, 108.0], [48.0, 86.0], [49.0, 85.0], [50.0, 153.0], [52.0, 90.0], [53.0, 214.0], [55.0, 82.0], [57.0, 117.0], [59.0, 66.0], [58.0, 77.5], [60.0, 140.5], [61.0, 78.0], [62.0, 103.5], [64.0, 79.5], [65.0, 88.0], [68.0, 134.0], [70.0, 97.5], [73.0, 74.0], [75.0, 74.0], [80.0, 88.5], [85.0, 58.0], [1.0, 126.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 58.0, "minX": 1.0, "maxY": 3405.0, "series": [{"data": [[2.0, 3405.0], [3.0, 2459.0], [5.0, 1670.0], [6.0, 1184.5], [7.0, 920.0], [8.0, 1105.5], [9.0, 746.0], [10.0, 810.0], [11.0, 791.5], [12.0, 758.0], [13.0, 681.5], [14.0, 465.5], [15.0, 562.0], [16.0, 517.5], [17.0, 463.0], [18.0, 458.0], [19.0, 440.0], [20.0, 560.5], [21.0, 365.5], [22.0, 248.0], [23.0, 262.0], [24.0, 303.0], [25.0, 297.0], [26.0, 224.5], [27.0, 261.0], [28.0, 223.0], [30.0, 206.5], [31.0, 247.0], [33.0, 227.0], [32.0, 91.0], [34.0, 213.5], [35.0, 76.0], [36.0, 133.5], [37.0, 192.0], [39.0, 185.0], [38.0, 228.0], [43.0, 207.5], [42.0, 73.0], [45.0, 76.5], [44.0, 117.5], [46.0, 107.5], [48.0, 86.0], [49.0, 85.0], [50.0, 152.5], [52.0, 89.5], [53.0, 214.0], [55.0, 82.0], [57.0, 117.0], [59.0, 66.0], [58.0, 77.5], [60.0, 140.5], [61.0, 78.0], [62.0, 103.5], [64.0, 79.5], [65.0, 88.0], [68.0, 133.0], [70.0, 97.5], [73.0, 74.0], [75.0, 73.0], [80.0, 88.5], [85.0, 58.0], [1.0, 122.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.333333333333334, "minX": 1.60402728E12, "maxY": 32.166666666666664, "series": [{"data": [[1.6040274E12, 32.166666666666664], [1.60402728E12, 11.333333333333334], [1.60402746E12, 18.083333333333332], [1.60402734E12, 26.116666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402746E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.166666666666666, "minX": 1.60402728E12, "maxY": 32.166666666666664, "series": [{"data": [[1.6040274E12, 32.166666666666664], [1.60402728E12, 11.166666666666666], [1.60402746E12, 18.25], [1.60402734E12, 26.116666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402746E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.166666666666666, "minX": 1.60402728E12, "maxY": 32.166666666666664, "series": [{"data": [[1.6040274E12, 32.166666666666664], [1.60402728E12, 11.166666666666666], [1.60402746E12, 18.25], [1.60402734E12, 26.116666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402746E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.166666666666666, "minX": 1.60402728E12, "maxY": 32.166666666666664, "series": [{"data": [[1.6040274E12, 32.166666666666664], [1.60402728E12, 11.166666666666666], [1.60402746E12, 18.25], [1.60402734E12, 26.116666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402746E12, "title": "Total Transactions Per Second"}},
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

