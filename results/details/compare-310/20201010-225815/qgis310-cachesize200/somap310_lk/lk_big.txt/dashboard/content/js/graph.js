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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3450.0, "series": [{"data": [[0.0, 29.0], [0.1, 31.0], [0.2, 32.0], [0.3, 32.0], [0.4, 33.0], [0.5, 33.0], [0.6, 34.0], [0.7, 34.0], [0.8, 34.0], [0.9, 34.0], [1.0, 35.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 35.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 41.0], [8.1, 41.0], [8.2, 41.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 41.0], [9.6, 41.0], [9.7, 41.0], [9.8, 42.0], [9.9, 42.0], [10.0, 42.0], [10.1, 42.0], [10.2, 42.0], [10.3, 42.0], [10.4, 42.0], [10.5, 42.0], [10.6, 42.0], [10.7, 42.0], [10.8, 42.0], [10.9, 42.0], [11.0, 42.0], [11.1, 43.0], [11.2, 43.0], [11.3, 43.0], [11.4, 43.0], [11.5, 43.0], [11.6, 43.0], [11.7, 43.0], [11.8, 43.0], [11.9, 43.0], [12.0, 43.0], [12.1, 43.0], [12.2, 43.0], [12.3, 43.0], [12.4, 43.0], [12.5, 43.0], [12.6, 43.0], [12.7, 43.0], [12.8, 44.0], [12.9, 44.0], [13.0, 44.0], [13.1, 44.0], [13.2, 44.0], [13.3, 44.0], [13.4, 44.0], [13.5, 44.0], [13.6, 44.0], [13.7, 44.0], [13.8, 45.0], [13.9, 45.0], [14.0, 45.0], [14.1, 45.0], [14.2, 45.0], [14.3, 45.0], [14.4, 45.0], [14.5, 45.0], [14.6, 45.0], [14.7, 45.0], [14.8, 45.0], [14.9, 45.0], [15.0, 45.0], [15.1, 45.0], [15.2, 46.0], [15.3, 46.0], [15.4, 46.0], [15.5, 46.0], [15.6, 46.0], [15.7, 46.0], [15.8, 46.0], [15.9, 46.0], [16.0, 46.0], [16.1, 46.0], [16.2, 47.0], [16.3, 47.0], [16.4, 47.0], [16.5, 47.0], [16.6, 47.0], [16.7, 47.0], [16.8, 47.0], [16.9, 47.0], [17.0, 47.0], [17.1, 48.0], [17.2, 48.0], [17.3, 48.0], [17.4, 48.0], [17.5, 48.0], [17.6, 48.0], [17.7, 49.0], [17.8, 49.0], [17.9, 49.0], [18.0, 49.0], [18.1, 49.0], [18.2, 49.0], [18.3, 49.0], [18.4, 50.0], [18.5, 50.0], [18.6, 50.0], [18.7, 50.0], [18.8, 50.0], [18.9, 51.0], [19.0, 51.0], [19.1, 51.0], [19.2, 51.0], [19.3, 51.0], [19.4, 51.0], [19.5, 52.0], [19.6, 52.0], [19.7, 52.0], [19.8, 52.0], [19.9, 53.0], [20.0, 53.0], [20.1, 53.0], [20.2, 53.0], [20.3, 54.0], [20.4, 54.0], [20.5, 54.0], [20.6, 55.0], [20.7, 55.0], [20.8, 56.0], [20.9, 56.0], [21.0, 57.0], [21.1, 57.0], [21.2, 58.0], [21.3, 58.0], [21.4, 59.0], [21.5, 59.0], [21.6, 60.0], [21.7, 60.0], [21.8, 60.0], [21.9, 60.0], [22.0, 61.0], [22.1, 61.0], [22.2, 61.0], [22.3, 62.0], [22.4, 62.0], [22.5, 62.0], [22.6, 62.0], [22.7, 62.0], [22.8, 63.0], [22.9, 63.0], [23.0, 63.0], [23.1, 63.0], [23.2, 64.0], [23.3, 64.0], [23.4, 64.0], [23.5, 65.0], [23.6, 65.0], [23.7, 65.0], [23.8, 65.0], [23.9, 65.0], [24.0, 66.0], [24.1, 66.0], [24.2, 66.0], [24.3, 66.0], [24.4, 67.0], [24.5, 67.0], [24.6, 67.0], [24.7, 67.0], [24.8, 67.0], [24.9, 68.0], [25.0, 68.0], [25.1, 68.0], [25.2, 68.0], [25.3, 68.0], [25.4, 69.0], [25.5, 69.0], [25.6, 69.0], [25.7, 69.0], [25.8, 69.0], [25.9, 70.0], [26.0, 70.0], [26.1, 70.0], [26.2, 70.0], [26.3, 70.0], [26.4, 70.0], [26.5, 70.0], [26.6, 71.0], [26.7, 71.0], [26.8, 71.0], [26.9, 71.0], [27.0, 71.0], [27.1, 71.0], [27.2, 71.0], [27.3, 72.0], [27.4, 72.0], [27.5, 72.0], [27.6, 72.0], [27.7, 72.0], [27.8, 73.0], [27.9, 73.0], [28.0, 73.0], [28.1, 73.0], [28.2, 73.0], [28.3, 73.0], [28.4, 74.0], [28.5, 74.0], [28.6, 74.0], [28.7, 74.0], [28.8, 74.0], [28.9, 74.0], [29.0, 74.0], [29.1, 74.0], [29.2, 74.0], [29.3, 74.0], [29.4, 75.0], [29.5, 75.0], [29.6, 75.0], [29.7, 75.0], [29.8, 75.0], [29.9, 75.0], [30.0, 76.0], [30.1, 76.0], [30.2, 76.0], [30.3, 76.0], [30.4, 76.0], [30.5, 76.0], [30.6, 76.0], [30.7, 77.0], [30.8, 77.0], [30.9, 77.0], [31.0, 77.0], [31.1, 77.0], [31.2, 77.0], [31.3, 77.0], [31.4, 78.0], [31.5, 78.0], [31.6, 78.0], [31.7, 78.0], [31.8, 78.0], [31.9, 78.0], [32.0, 78.0], [32.1, 79.0], [32.2, 79.0], [32.3, 79.0], [32.4, 79.0], [32.5, 79.0], [32.6, 79.0], [32.7, 79.0], [32.8, 80.0], [32.9, 80.0], [33.0, 80.0], [33.1, 80.0], [33.2, 80.0], [33.3, 80.0], [33.4, 80.0], [33.5, 81.0], [33.6, 81.0], [33.7, 81.0], [33.8, 81.0], [33.9, 81.0], [34.0, 81.0], [34.1, 81.0], [34.2, 81.0], [34.3, 81.0], [34.4, 81.0], [34.5, 82.0], [34.6, 82.0], [34.7, 82.0], [34.8, 82.0], [34.9, 83.0], [35.0, 83.0], [35.1, 83.0], [35.2, 83.0], [35.3, 83.0], [35.4, 83.0], [35.5, 84.0], [35.6, 84.0], [35.7, 84.0], [35.8, 84.0], [35.9, 84.0], [36.0, 85.0], [36.1, 85.0], [36.2, 85.0], [36.3, 85.0], [36.4, 85.0], [36.5, 86.0], [36.6, 86.0], [36.7, 86.0], [36.8, 86.0], [36.9, 86.0], [37.0, 87.0], [37.1, 87.0], [37.2, 87.0], [37.3, 87.0], [37.4, 88.0], [37.5, 88.0], [37.6, 88.0], [37.7, 89.0], [37.8, 89.0], [37.9, 89.0], [38.0, 89.0], [38.1, 90.0], [38.2, 90.0], [38.3, 91.0], [38.4, 91.0], [38.5, 91.0], [38.6, 92.0], [38.7, 92.0], [38.8, 92.0], [38.9, 93.0], [39.0, 93.0], [39.1, 93.0], [39.2, 94.0], [39.3, 94.0], [39.4, 95.0], [39.5, 95.0], [39.6, 95.0], [39.7, 95.0], [39.8, 96.0], [39.9, 96.0], [40.0, 96.0], [40.1, 96.0], [40.2, 97.0], [40.3, 97.0], [40.4, 97.0], [40.5, 98.0], [40.6, 99.0], [40.7, 99.0], [40.8, 100.0], [40.9, 100.0], [41.0, 100.0], [41.1, 101.0], [41.2, 101.0], [41.3, 102.0], [41.4, 103.0], [41.5, 103.0], [41.6, 103.0], [41.7, 104.0], [41.8, 104.0], [41.9, 105.0], [42.0, 105.0], [42.1, 106.0], [42.2, 106.0], [42.3, 107.0], [42.4, 108.0], [42.5, 109.0], [42.6, 109.0], [42.7, 110.0], [42.8, 112.0], [42.9, 113.0], [43.0, 114.0], [43.1, 114.0], [43.2, 115.0], [43.3, 116.0], [43.4, 117.0], [43.5, 118.0], [43.6, 118.0], [43.7, 119.0], [43.8, 119.0], [43.9, 120.0], [44.0, 121.0], [44.1, 121.0], [44.2, 122.0], [44.3, 123.0], [44.4, 124.0], [44.5, 125.0], [44.6, 125.0], [44.7, 127.0], [44.8, 127.0], [44.9, 128.0], [45.0, 128.0], [45.1, 129.0], [45.2, 129.0], [45.3, 130.0], [45.4, 131.0], [45.5, 131.0], [45.6, 132.0], [45.7, 133.0], [45.8, 133.0], [45.9, 134.0], [46.0, 135.0], [46.1, 137.0], [46.2, 138.0], [46.3, 139.0], [46.4, 139.0], [46.5, 140.0], [46.6, 141.0], [46.7, 142.0], [46.8, 143.0], [46.9, 144.0], [47.0, 145.0], [47.1, 145.0], [47.2, 146.0], [47.3, 147.0], [47.4, 147.0], [47.5, 148.0], [47.6, 149.0], [47.7, 150.0], [47.8, 151.0], [47.9, 151.0], [48.0, 152.0], [48.1, 153.0], [48.2, 153.0], [48.3, 154.0], [48.4, 155.0], [48.5, 156.0], [48.6, 157.0], [48.7, 159.0], [48.8, 159.0], [48.9, 161.0], [49.0, 162.0], [49.1, 163.0], [49.2, 165.0], [49.3, 165.0], [49.4, 166.0], [49.5, 168.0], [49.6, 168.0], [49.7, 169.0], [49.8, 170.0], [49.9, 172.0], [50.0, 172.0], [50.1, 173.0], [50.2, 174.0], [50.3, 175.0], [50.4, 176.0], [50.5, 177.0], [50.6, 178.0], [50.7, 178.0], [50.8, 179.0], [50.9, 180.0], [51.0, 181.0], [51.1, 182.0], [51.2, 183.0], [51.3, 184.0], [51.4, 185.0], [51.5, 186.0], [51.6, 187.0], [51.7, 187.0], [51.8, 188.0], [51.9, 189.0], [52.0, 189.0], [52.1, 190.0], [52.2, 191.0], [52.3, 192.0], [52.4, 192.0], [52.5, 193.0], [52.6, 193.0], [52.7, 195.0], [52.8, 196.0], [52.9, 196.0], [53.0, 197.0], [53.1, 197.0], [53.2, 198.0], [53.3, 198.0], [53.4, 198.0], [53.5, 200.0], [53.6, 201.0], [53.7, 201.0], [53.8, 203.0], [53.9, 204.0], [54.0, 205.0], [54.1, 205.0], [54.2, 206.0], [54.3, 207.0], [54.4, 208.0], [54.5, 209.0], [54.6, 209.0], [54.7, 210.0], [54.8, 211.0], [54.9, 212.0], [55.0, 212.0], [55.1, 213.0], [55.2, 214.0], [55.3, 214.0], [55.4, 215.0], [55.5, 215.0], [55.6, 216.0], [55.7, 217.0], [55.8, 218.0], [55.9, 219.0], [56.0, 219.0], [56.1, 220.0], [56.2, 220.0], [56.3, 221.0], [56.4, 222.0], [56.5, 223.0], [56.6, 225.0], [56.7, 225.0], [56.8, 226.0], [56.9, 227.0], [57.0, 227.0], [57.1, 228.0], [57.2, 229.0], [57.3, 230.0], [57.4, 231.0], [57.5, 232.0], [57.6, 233.0], [57.7, 234.0], [57.8, 234.0], [57.9, 235.0], [58.0, 235.0], [58.1, 235.0], [58.2, 236.0], [58.3, 236.0], [58.4, 238.0], [58.5, 238.0], [58.6, 239.0], [58.7, 240.0], [58.8, 242.0], [58.9, 243.0], [59.0, 244.0], [59.1, 244.0], [59.2, 246.0], [59.3, 246.0], [59.4, 247.0], [59.5, 248.0], [59.6, 248.0], [59.7, 249.0], [59.8, 249.0], [59.9, 251.0], [60.0, 252.0], [60.1, 254.0], [60.2, 254.0], [60.3, 255.0], [60.4, 256.0], [60.5, 258.0], [60.6, 258.0], [60.7, 259.0], [60.8, 260.0], [60.9, 262.0], [61.0, 263.0], [61.1, 264.0], [61.2, 265.0], [61.3, 266.0], [61.4, 267.0], [61.5, 268.0], [61.6, 269.0], [61.7, 270.0], [61.8, 271.0], [61.9, 273.0], [62.0, 274.0], [62.1, 275.0], [62.2, 276.0], [62.3, 277.0], [62.4, 279.0], [62.5, 279.0], [62.6, 281.0], [62.7, 281.0], [62.8, 282.0], [62.9, 283.0], [63.0, 286.0], [63.1, 287.0], [63.2, 288.0], [63.3, 288.0], [63.4, 289.0], [63.5, 290.0], [63.6, 291.0], [63.7, 292.0], [63.8, 293.0], [63.9, 295.0], [64.0, 296.0], [64.1, 297.0], [64.2, 298.0], [64.3, 300.0], [64.4, 300.0], [64.5, 301.0], [64.6, 303.0], [64.7, 304.0], [64.8, 305.0], [64.9, 307.0], [65.0, 308.0], [65.1, 309.0], [65.2, 310.0], [65.3, 311.0], [65.4, 311.0], [65.5, 312.0], [65.6, 313.0], [65.7, 314.0], [65.8, 315.0], [65.9, 315.0], [66.0, 318.0], [66.1, 320.0], [66.2, 321.0], [66.3, 322.0], [66.4, 322.0], [66.5, 324.0], [66.6, 325.0], [66.7, 326.0], [66.8, 327.0], [66.9, 329.0], [67.0, 330.0], [67.1, 331.0], [67.2, 332.0], [67.3, 333.0], [67.4, 336.0], [67.5, 337.0], [67.6, 338.0], [67.7, 340.0], [67.8, 341.0], [67.9, 342.0], [68.0, 344.0], [68.1, 346.0], [68.2, 347.0], [68.3, 348.0], [68.4, 349.0], [68.5, 350.0], [68.6, 351.0], [68.7, 353.0], [68.8, 353.0], [68.9, 354.0], [69.0, 357.0], [69.1, 358.0], [69.2, 359.0], [69.3, 360.0], [69.4, 362.0], [69.5, 363.0], [69.6, 365.0], [69.7, 367.0], [69.8, 368.0], [69.9, 369.0], [70.0, 370.0], [70.1, 372.0], [70.2, 373.0], [70.3, 376.0], [70.4, 378.0], [70.5, 379.0], [70.6, 380.0], [70.7, 382.0], [70.8, 383.0], [70.9, 384.0], [71.0, 386.0], [71.1, 387.0], [71.2, 389.0], [71.3, 392.0], [71.4, 393.0], [71.5, 394.0], [71.6, 395.0], [71.7, 395.0], [71.8, 397.0], [71.9, 399.0], [72.0, 400.0], [72.1, 400.0], [72.2, 403.0], [72.3, 405.0], [72.4, 405.0], [72.5, 407.0], [72.6, 408.0], [72.7, 411.0], [72.8, 413.0], [72.9, 414.0], [73.0, 415.0], [73.1, 416.0], [73.2, 419.0], [73.3, 421.0], [73.4, 422.0], [73.5, 424.0], [73.6, 425.0], [73.7, 427.0], [73.8, 428.0], [73.9, 429.0], [74.0, 430.0], [74.1, 432.0], [74.2, 432.0], [74.3, 433.0], [74.4, 435.0], [74.5, 437.0], [74.6, 438.0], [74.7, 440.0], [74.8, 441.0], [74.9, 442.0], [75.0, 443.0], [75.1, 443.0], [75.2, 446.0], [75.3, 448.0], [75.4, 450.0], [75.5, 451.0], [75.6, 452.0], [75.7, 453.0], [75.8, 454.0], [75.9, 456.0], [76.0, 458.0], [76.1, 459.0], [76.2, 460.0], [76.3, 462.0], [76.4, 463.0], [76.5, 465.0], [76.6, 466.0], [76.7, 467.0], [76.8, 470.0], [76.9, 472.0], [77.0, 474.0], [77.1, 476.0], [77.2, 477.0], [77.3, 479.0], [77.4, 480.0], [77.5, 484.0], [77.6, 486.0], [77.7, 487.0], [77.8, 489.0], [77.9, 492.0], [78.0, 494.0], [78.1, 495.0], [78.2, 496.0], [78.3, 499.0], [78.4, 500.0], [78.5, 502.0], [78.6, 503.0], [78.7, 504.0], [78.8, 505.0], [78.9, 509.0], [79.0, 511.0], [79.1, 513.0], [79.2, 517.0], [79.3, 519.0], [79.4, 520.0], [79.5, 522.0], [79.6, 523.0], [79.7, 526.0], [79.8, 528.0], [79.9, 530.0], [80.0, 532.0], [80.1, 534.0], [80.2, 536.0], [80.3, 538.0], [80.4, 541.0], [80.5, 543.0], [80.6, 545.0], [80.7, 547.0], [80.8, 550.0], [80.9, 552.0], [81.0, 554.0], [81.1, 555.0], [81.2, 556.0], [81.3, 558.0], [81.4, 559.0], [81.5, 560.0], [81.6, 561.0], [81.7, 565.0], [81.8, 567.0], [81.9, 568.0], [82.0, 571.0], [82.1, 572.0], [82.2, 574.0], [82.3, 575.0], [82.4, 577.0], [82.5, 581.0], [82.6, 584.0], [82.7, 587.0], [82.8, 588.0], [82.9, 589.0], [83.0, 593.0], [83.1, 596.0], [83.2, 597.0], [83.3, 598.0], [83.4, 600.0], [83.5, 601.0], [83.6, 604.0], [83.7, 606.0], [83.8, 609.0], [83.9, 610.0], [84.0, 613.0], [84.1, 615.0], [84.2, 618.0], [84.3, 620.0], [84.4, 622.0], [84.5, 624.0], [84.6, 626.0], [84.7, 629.0], [84.8, 630.0], [84.9, 632.0], [85.0, 633.0], [85.1, 635.0], [85.2, 638.0], [85.3, 640.0], [85.4, 641.0], [85.5, 644.0], [85.6, 645.0], [85.7, 648.0], [85.8, 649.0], [85.9, 652.0], [86.0, 653.0], [86.1, 657.0], [86.2, 660.0], [86.3, 662.0], [86.4, 666.0], [86.5, 671.0], [86.6, 674.0], [86.7, 677.0], [86.8, 680.0], [86.9, 684.0], [87.0, 686.0], [87.1, 688.0], [87.2, 690.0], [87.3, 693.0], [87.4, 698.0], [87.5, 701.0], [87.6, 702.0], [87.7, 703.0], [87.8, 705.0], [87.9, 707.0], [88.0, 709.0], [88.1, 712.0], [88.2, 714.0], [88.3, 718.0], [88.4, 719.0], [88.5, 720.0], [88.6, 723.0], [88.7, 727.0], [88.8, 730.0], [88.9, 732.0], [89.0, 735.0], [89.1, 738.0], [89.2, 741.0], [89.3, 744.0], [89.4, 748.0], [89.5, 752.0], [89.6, 753.0], [89.7, 757.0], [89.8, 762.0], [89.9, 765.0], [90.0, 768.0], [90.1, 771.0], [90.2, 775.0], [90.3, 779.0], [90.4, 780.0], [90.5, 783.0], [90.6, 785.0], [90.7, 788.0], [90.8, 790.0], [90.9, 794.0], [91.0, 798.0], [91.1, 802.0], [91.2, 809.0], [91.3, 816.0], [91.4, 826.0], [91.5, 831.0], [91.6, 833.0], [91.7, 836.0], [91.8, 840.0], [91.9, 848.0], [92.0, 852.0], [92.1, 857.0], [92.2, 863.0], [92.3, 867.0], [92.4, 874.0], [92.5, 880.0], [92.6, 887.0], [92.7, 890.0], [92.8, 896.0], [92.9, 897.0], [93.0, 902.0], [93.1, 907.0], [93.2, 911.0], [93.3, 916.0], [93.4, 920.0], [93.5, 922.0], [93.6, 927.0], [93.7, 933.0], [93.8, 941.0], [93.9, 950.0], [94.0, 958.0], [94.1, 962.0], [94.2, 964.0], [94.3, 970.0], [94.4, 977.0], [94.5, 987.0], [94.6, 992.0], [94.7, 1004.0], [94.8, 1011.0], [94.9, 1017.0], [95.0, 1028.0], [95.1, 1035.0], [95.2, 1040.0], [95.3, 1042.0], [95.4, 1047.0], [95.5, 1053.0], [95.6, 1060.0], [95.7, 1066.0], [95.8, 1075.0], [95.9, 1085.0], [96.0, 1099.0], [96.1, 1115.0], [96.2, 1127.0], [96.3, 1135.0], [96.4, 1142.0], [96.5, 1149.0], [96.6, 1161.0], [96.7, 1175.0], [96.8, 1190.0], [96.9, 1201.0], [97.0, 1223.0], [97.1, 1235.0], [97.2, 1250.0], [97.3, 1272.0], [97.4, 1282.0], [97.5, 1294.0], [97.6, 1306.0], [97.7, 1341.0], [97.8, 1373.0], [97.9, 1379.0], [98.0, 1392.0], [98.1, 1415.0], [98.2, 1449.0], [98.3, 1484.0], [98.4, 1497.0], [98.5, 1520.0], [98.6, 1557.0], [98.7, 1595.0], [98.8, 1612.0], [98.9, 1634.0], [99.0, 1672.0], [99.1, 1716.0], [99.2, 1779.0], [99.3, 1823.0], [99.4, 1861.0], [99.5, 1932.0], [99.6, 1963.0], [99.7, 2107.0], [99.8, 2159.0], [99.9, 2284.0], [100.0, 3450.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2144.0, "series": [{"data": [[0.0, 2144.0], [600.0, 217.0], [700.0, 190.0], [800.0, 99.0], [900.0, 89.0], [1000.0, 72.0], [1100.0, 44.0], [1200.0, 35.0], [1300.0, 27.0], [1400.0, 20.0], [1500.0, 18.0], [100.0, 670.0], [1600.0, 18.0], [1700.0, 7.0], [1800.0, 12.0], [1900.0, 8.0], [2000.0, 5.0], [2100.0, 8.0], [2200.0, 3.0], [2300.0, 2.0], [200.0, 569.0], [3200.0, 1.0], [3400.0, 2.0], [300.0, 404.0], [400.0, 335.0], [500.0, 263.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 84.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4126.0, "series": [{"data": [[0.0, 4126.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1052.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 84.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.89495798319328, "minX": 1.60237356E12, "maxY": 10.0, "series": [{"data": [[1.60237368E12, 10.0], [1.60237356E12, 9.89495798319328], [1.60237374E12, 9.957825679475162], [1.60237362E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237374E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 308.55805529075326, "minX": 1.0, "maxY": 3425.0, "series": [{"data": [[8.0, 1073.0], [4.0, 2028.0], [2.0, 2127.0], [1.0, 3425.0], [9.0, 1074.5], [5.0, 421.6666666666667], [10.0, 308.55805529075326], [3.0, 1792.5], [6.0, 1057.0], [7.0, 1178.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98669707335615, 311.79684530596705]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2138.483333333333, "minX": 1.60237356E12, "maxY": 1690483.85, "series": [{"data": [[1.60237368E12, 1436881.0833333333], [1.60237356E12, 61617.433333333334], [1.60237374E12, 1062122.2833333334], [1.60237362E12, 1690483.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237368E12, 20269.866666666665], [1.60237356E12, 2138.483333333333], [1.60237374E12, 9432.333333333334], [1.60237362E12, 13650.266666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237374E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 251.15652538816633, "minX": 1.60237356E12, "maxY": 377.45489199491703, "series": [{"data": [[1.60237368E12, 251.15652538816633], [1.60237356E12, 255.626050420168], [1.60237374E12, 362.90159325210897], [1.60237362E12, 377.45489199491703]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237374E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 250.84557280738554, "minX": 1.60237356E12, "maxY": 376.8894536213467, "series": [{"data": [[1.60237368E12, 250.84557280738554], [1.60237356E12, 255.36134453781523], [1.60237374E12, 362.45454545454555], [1.60237362E12, 376.8894536213467]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237374E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007553503986571574, "minX": 1.60237356E12, "maxY": 0.40756302521008336, "series": [{"data": [[1.60237368E12, 0.007553503986571574], [1.60237356E12, 0.40756302521008336], [1.60237374E12, 0.010309278350515455], [1.60237362E12, 0.008894536213468881]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237374E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60237356E12, "maxY": 3450.0, "series": [{"data": [[1.60237368E12, 2152.0], [1.60237356E12, 1139.0], [1.60237374E12, 3450.0], [1.60237362E12, 2224.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237368E12, 34.0], [1.60237356E12, 35.30199988603592], [1.60237374E12, 35.0], [1.60237362E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237368E12, 34.0], [1.60237356E12, 35.732200045585635], [1.60237374E12, 35.0], [1.60237362E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237368E12, 34.0], [1.60237356E12, 35.54099994301796], [1.60237374E12, 35.0], [1.60237362E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237368E12, 29.0], [1.60237356E12, 34.0], [1.60237374E12, 32.0], [1.60237362E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237368E12, 128.0], [1.60237356E12, 84.5], [1.60237374E12, 212.0], [1.60237362E12, 243.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237374E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 53.0, "minX": 1.0, "maxY": 3425.0, "series": [{"data": [[4.0, 1718.0], [5.0, 1257.0], [6.0, 1049.0], [7.0, 1388.0], [8.0, 422.0], [9.0, 975.0], [10.0, 786.0], [11.0, 679.0], [12.0, 474.0], [13.0, 662.0], [14.0, 722.5], [15.0, 587.5], [16.0, 487.5], [17.0, 411.0], [18.0, 443.5], [19.0, 492.0], [20.0, 462.0], [21.0, 353.5], [22.0, 351.5], [23.0, 438.0], [24.0, 348.0], [25.0, 401.5], [26.0, 255.5], [27.0, 245.0], [28.0, 324.5], [29.0, 251.5], [30.0, 259.0], [31.0, 257.0], [32.0, 221.0], [33.0, 85.0], [34.0, 235.0], [35.0, 280.0], [37.0, 76.0], [36.0, 147.5], [39.0, 100.0], [41.0, 78.0], [43.0, 205.0], [44.0, 198.5], [45.0, 223.0], [46.0, 100.0], [47.0, 53.0], [48.0, 95.5], [49.0, 79.0], [52.0, 93.0], [53.0, 94.0], [55.0, 94.0], [54.0, 82.0], [57.0, 76.5], [56.0, 140.0], [59.0, 109.0], [58.0, 79.5], [60.0, 90.0], [61.0, 150.0], [66.0, 92.5], [65.0, 119.0], [70.0, 119.5], [71.0, 75.0], [68.0, 133.5], [78.0, 73.0], [76.0, 81.0], [79.0, 65.0], [81.0, 128.0], [83.0, 91.0], [85.0, 119.0], [87.0, 72.0], [1.0, 3425.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 53.0, "minX": 1.0, "maxY": 3425.0, "series": [{"data": [[4.0, 1717.5], [5.0, 1257.0], [6.0, 1048.0], [7.0, 1387.0], [8.0, 420.5], [9.0, 975.0], [10.0, 783.0], [11.0, 678.5], [12.0, 469.5], [13.0, 662.0], [14.0, 721.5], [15.0, 586.5], [16.0, 487.0], [17.0, 410.0], [18.0, 442.0], [19.0, 490.0], [20.0, 460.0], [21.0, 352.0], [22.0, 351.5], [23.0, 437.0], [24.0, 347.5], [25.0, 401.0], [26.0, 255.5], [27.0, 245.0], [28.0, 323.0], [29.0, 250.5], [30.0, 258.5], [31.0, 256.0], [32.0, 221.0], [33.0, 85.0], [34.0, 234.5], [35.0, 279.0], [37.0, 76.0], [36.0, 147.0], [39.0, 100.0], [41.0, 78.0], [43.0, 205.0], [44.0, 198.5], [45.0, 222.0], [46.0, 100.0], [47.0, 53.0], [48.0, 95.0], [49.0, 79.0], [52.0, 93.0], [53.0, 94.0], [55.0, 94.0], [54.0, 82.0], [57.0, 76.5], [56.0, 140.0], [59.0, 109.0], [58.0, 79.5], [60.0, 89.5], [61.0, 149.0], [66.0, 92.0], [65.0, 119.0], [70.0, 119.5], [71.0, 75.0], [68.0, 133.0], [78.0, 73.0], [76.0, 81.0], [79.0, 65.0], [81.0, 128.0], [83.0, 91.0], [85.0, 119.0], [87.0, 72.0], [1.0, 3425.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.133333333333334, "minX": 1.60237356E12, "maxY": 39.71666666666667, "series": [{"data": [[1.60237368E12, 39.71666666666667], [1.60237356E12, 4.133333333333334], [1.60237374E12, 17.616666666666667], [1.60237362E12, 26.233333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237374E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.966666666666667, "minX": 1.60237356E12, "maxY": 39.71666666666667, "series": [{"data": [[1.60237368E12, 39.71666666666667], [1.60237356E12, 3.966666666666667], [1.60237374E12, 17.783333333333335], [1.60237362E12, 26.233333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237374E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.966666666666667, "minX": 1.60237356E12, "maxY": 39.71666666666667, "series": [{"data": [[1.60237368E12, 39.71666666666667], [1.60237356E12, 3.966666666666667], [1.60237374E12, 17.783333333333335], [1.60237362E12, 26.233333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237374E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.966666666666667, "minX": 1.60237356E12, "maxY": 39.71666666666667, "series": [{"data": [[1.60237368E12, 39.71666666666667], [1.60237356E12, 3.966666666666667], [1.60237374E12, 17.783333333333335], [1.60237362E12, 26.233333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237374E12, "title": "Total Transactions Per Second"}},
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

