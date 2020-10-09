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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 3227.0, "series": [{"data": [[0.0, 28.0], [0.1, 29.0], [0.2, 30.0], [0.3, 30.0], [0.4, 30.0], [0.5, 31.0], [0.6, 31.0], [0.7, 31.0], [0.8, 31.0], [0.9, 32.0], [1.0, 32.0], [1.1, 32.0], [1.2, 32.0], [1.3, 32.0], [1.4, 32.0], [1.5, 33.0], [1.6, 33.0], [1.7, 33.0], [1.8, 33.0], [1.9, 33.0], [2.0, 33.0], [2.1, 33.0], [2.2, 33.0], [2.3, 34.0], [2.4, 34.0], [2.5, 34.0], [2.6, 34.0], [2.7, 34.0], [2.8, 34.0], [2.9, 34.0], [3.0, 34.0], [3.1, 35.0], [3.2, 35.0], [3.3, 35.0], [3.4, 35.0], [3.5, 35.0], [3.6, 35.0], [3.7, 35.0], [3.8, 35.0], [3.9, 35.0], [4.0, 35.0], [4.1, 35.0], [4.2, 36.0], [4.3, 36.0], [4.4, 36.0], [4.5, 36.0], [4.6, 36.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 36.0], [5.1, 36.0], [5.2, 36.0], [5.3, 36.0], [5.4, 36.0], [5.5, 36.0], [5.6, 36.0], [5.7, 36.0], [5.8, 37.0], [5.9, 37.0], [6.0, 37.0], [6.1, 37.0], [6.2, 37.0], [6.3, 37.0], [6.4, 37.0], [6.5, 37.0], [6.6, 37.0], [6.7, 37.0], [6.8, 37.0], [6.9, 37.0], [7.0, 37.0], [7.1, 37.0], [7.2, 38.0], [7.3, 38.0], [7.4, 38.0], [7.5, 38.0], [7.6, 38.0], [7.7, 38.0], [7.8, 38.0], [7.9, 38.0], [8.0, 38.0], [8.1, 38.0], [8.2, 38.0], [8.3, 38.0], [8.4, 38.0], [8.5, 38.0], [8.6, 38.0], [8.7, 38.0], [8.8, 39.0], [8.9, 39.0], [9.0, 39.0], [9.1, 39.0], [9.2, 39.0], [9.3, 39.0], [9.4, 39.0], [9.5, 39.0], [9.6, 39.0], [9.7, 39.0], [9.8, 39.0], [9.9, 39.0], [10.0, 39.0], [10.1, 39.0], [10.2, 40.0], [10.3, 40.0], [10.4, 40.0], [10.5, 40.0], [10.6, 40.0], [10.7, 40.0], [10.8, 40.0], [10.9, 40.0], [11.0, 40.0], [11.1, 40.0], [11.2, 40.0], [11.3, 40.0], [11.4, 40.0], [11.5, 40.0], [11.6, 40.0], [11.7, 41.0], [11.8, 41.0], [11.9, 41.0], [12.0, 41.0], [12.1, 41.0], [12.2, 41.0], [12.3, 41.0], [12.4, 41.0], [12.5, 41.0], [12.6, 41.0], [12.7, 41.0], [12.8, 41.0], [12.9, 42.0], [13.0, 42.0], [13.1, 42.0], [13.2, 42.0], [13.3, 42.0], [13.4, 42.0], [13.5, 42.0], [13.6, 42.0], [13.7, 42.0], [13.8, 43.0], [13.9, 43.0], [14.0, 43.0], [14.1, 43.0], [14.2, 43.0], [14.3, 43.0], [14.4, 43.0], [14.5, 43.0], [14.6, 43.0], [14.7, 44.0], [14.8, 44.0], [14.9, 44.0], [15.0, 44.0], [15.1, 44.0], [15.2, 44.0], [15.3, 44.0], [15.4, 44.0], [15.5, 44.0], [15.6, 44.0], [15.7, 45.0], [15.8, 45.0], [15.9, 45.0], [16.0, 45.0], [16.1, 45.0], [16.2, 45.0], [16.3, 46.0], [16.4, 46.0], [16.5, 46.0], [16.6, 46.0], [16.7, 47.0], [16.8, 47.0], [16.9, 47.0], [17.0, 48.0], [17.1, 48.0], [17.2, 48.0], [17.3, 49.0], [17.4, 49.0], [17.5, 49.0], [17.6, 49.0], [17.7, 50.0], [17.8, 50.0], [17.9, 51.0], [18.0, 51.0], [18.1, 51.0], [18.2, 51.0], [18.3, 51.0], [18.4, 52.0], [18.5, 52.0], [18.6, 52.0], [18.7, 53.0], [18.8, 53.0], [18.9, 54.0], [19.0, 55.0], [19.1, 55.0], [19.2, 55.0], [19.3, 55.0], [19.4, 56.0], [19.5, 56.0], [19.6, 56.0], [19.7, 56.0], [19.8, 57.0], [19.9, 57.0], [20.0, 57.0], [20.1, 57.0], [20.2, 58.0], [20.3, 58.0], [20.4, 58.0], [20.5, 59.0], [20.6, 59.0], [20.7, 59.0], [20.8, 59.0], [20.9, 60.0], [21.0, 60.0], [21.1, 60.0], [21.2, 60.0], [21.3, 60.0], [21.4, 61.0], [21.5, 61.0], [21.6, 61.0], [21.7, 61.0], [21.8, 61.0], [21.9, 62.0], [22.0, 62.0], [22.1, 62.0], [22.2, 62.0], [22.3, 62.0], [22.4, 62.0], [22.5, 63.0], [22.6, 63.0], [22.7, 63.0], [22.8, 64.0], [22.9, 64.0], [23.0, 64.0], [23.1, 64.0], [23.2, 64.0], [23.3, 64.0], [23.4, 65.0], [23.5, 65.0], [23.6, 65.0], [23.7, 65.0], [23.8, 65.0], [23.9, 66.0], [24.0, 66.0], [24.1, 66.0], [24.2, 66.0], [24.3, 66.0], [24.4, 67.0], [24.5, 67.0], [24.6, 67.0], [24.7, 67.0], [24.8, 67.0], [24.9, 67.0], [25.0, 68.0], [25.1, 68.0], [25.2, 68.0], [25.3, 68.0], [25.4, 68.0], [25.5, 68.0], [25.6, 68.0], [25.7, 68.0], [25.8, 69.0], [25.9, 69.0], [26.0, 69.0], [26.1, 69.0], [26.2, 69.0], [26.3, 69.0], [26.4, 69.0], [26.5, 69.0], [26.6, 69.0], [26.7, 69.0], [26.8, 69.0], [26.9, 70.0], [27.0, 70.0], [27.1, 70.0], [27.2, 70.0], [27.3, 70.0], [27.4, 70.0], [27.5, 70.0], [27.6, 70.0], [27.7, 70.0], [27.8, 70.0], [27.9, 70.0], [28.0, 71.0], [28.1, 71.0], [28.2, 71.0], [28.3, 71.0], [28.4, 71.0], [28.5, 71.0], [28.6, 71.0], [28.7, 71.0], [28.8, 71.0], [28.9, 72.0], [29.0, 72.0], [29.1, 72.0], [29.2, 72.0], [29.3, 72.0], [29.4, 72.0], [29.5, 72.0], [29.6, 72.0], [29.7, 72.0], [29.8, 72.0], [29.9, 72.0], [30.0, 72.0], [30.1, 73.0], [30.2, 73.0], [30.3, 73.0], [30.4, 73.0], [30.5, 73.0], [30.6, 73.0], [30.7, 73.0], [30.8, 73.0], [30.9, 73.0], [31.0, 74.0], [31.1, 74.0], [31.2, 74.0], [31.3, 74.0], [31.4, 74.0], [31.5, 74.0], [31.6, 74.0], [31.7, 74.0], [31.8, 74.0], [31.9, 74.0], [32.0, 75.0], [32.1, 75.0], [32.2, 75.0], [32.3, 75.0], [32.4, 75.0], [32.5, 75.0], [32.6, 75.0], [32.7, 75.0], [32.8, 75.0], [32.9, 75.0], [33.0, 75.0], [33.1, 76.0], [33.2, 76.0], [33.3, 76.0], [33.4, 76.0], [33.5, 76.0], [33.6, 76.0], [33.7, 76.0], [33.8, 77.0], [33.9, 77.0], [34.0, 77.0], [34.1, 77.0], [34.2, 77.0], [34.3, 78.0], [34.4, 78.0], [34.5, 78.0], [34.6, 78.0], [34.7, 78.0], [34.8, 78.0], [34.9, 78.0], [35.0, 78.0], [35.1, 78.0], [35.2, 79.0], [35.3, 79.0], [35.4, 79.0], [35.5, 79.0], [35.6, 79.0], [35.7, 79.0], [35.8, 80.0], [35.9, 80.0], [36.0, 80.0], [36.1, 80.0], [36.2, 80.0], [36.3, 81.0], [36.4, 81.0], [36.5, 81.0], [36.6, 81.0], [36.7, 81.0], [36.8, 82.0], [36.9, 82.0], [37.0, 82.0], [37.1, 82.0], [37.2, 82.0], [37.3, 83.0], [37.4, 83.0], [37.5, 83.0], [37.6, 83.0], [37.7, 83.0], [37.8, 84.0], [37.9, 84.0], [38.0, 84.0], [38.1, 84.0], [38.2, 85.0], [38.3, 85.0], [38.4, 85.0], [38.5, 85.0], [38.6, 86.0], [38.7, 86.0], [38.8, 86.0], [38.9, 86.0], [39.0, 87.0], [39.1, 87.0], [39.2, 88.0], [39.3, 89.0], [39.4, 89.0], [39.5, 90.0], [39.6, 91.0], [39.7, 91.0], [39.8, 92.0], [39.9, 92.0], [40.0, 93.0], [40.1, 94.0], [40.2, 94.0], [40.3, 95.0], [40.4, 95.0], [40.5, 96.0], [40.6, 96.0], [40.7, 97.0], [40.8, 97.0], [40.9, 98.0], [41.0, 100.0], [41.1, 100.0], [41.2, 101.0], [41.3, 102.0], [41.4, 103.0], [41.5, 103.0], [41.6, 104.0], [41.7, 105.0], [41.8, 106.0], [41.9, 106.0], [42.0, 107.0], [42.1, 108.0], [42.2, 109.0], [42.3, 110.0], [42.4, 111.0], [42.5, 111.0], [42.6, 112.0], [42.7, 113.0], [42.8, 113.0], [42.9, 113.0], [43.0, 114.0], [43.1, 114.0], [43.2, 115.0], [43.3, 115.0], [43.4, 116.0], [43.5, 117.0], [43.6, 118.0], [43.7, 118.0], [43.8, 120.0], [43.9, 121.0], [44.0, 121.0], [44.1, 122.0], [44.2, 122.0], [44.3, 124.0], [44.4, 125.0], [44.5, 125.0], [44.6, 126.0], [44.7, 126.0], [44.8, 127.0], [44.9, 128.0], [45.0, 129.0], [45.1, 129.0], [45.2, 130.0], [45.3, 131.0], [45.4, 132.0], [45.5, 133.0], [45.6, 134.0], [45.7, 134.0], [45.8, 135.0], [45.9, 136.0], [46.0, 137.0], [46.1, 137.0], [46.2, 138.0], [46.3, 140.0], [46.4, 140.0], [46.5, 141.0], [46.6, 142.0], [46.7, 143.0], [46.8, 145.0], [46.9, 145.0], [47.0, 146.0], [47.1, 147.0], [47.2, 148.0], [47.3, 149.0], [47.4, 151.0], [47.5, 152.0], [47.6, 153.0], [47.7, 154.0], [47.8, 155.0], [47.9, 156.0], [48.0, 157.0], [48.1, 159.0], [48.2, 160.0], [48.3, 161.0], [48.4, 162.0], [48.5, 164.0], [48.6, 165.0], [48.7, 166.0], [48.8, 167.0], [48.9, 168.0], [49.0, 170.0], [49.1, 171.0], [49.2, 172.0], [49.3, 173.0], [49.4, 174.0], [49.5, 175.0], [49.6, 176.0], [49.7, 177.0], [49.8, 178.0], [49.9, 179.0], [50.0, 180.0], [50.1, 182.0], [50.2, 183.0], [50.3, 184.0], [50.4, 185.0], [50.5, 186.0], [50.6, 187.0], [50.7, 188.0], [50.8, 189.0], [50.9, 189.0], [51.0, 190.0], [51.1, 191.0], [51.2, 192.0], [51.3, 193.0], [51.4, 194.0], [51.5, 194.0], [51.6, 196.0], [51.7, 196.0], [51.8, 197.0], [51.9, 198.0], [52.0, 198.0], [52.1, 199.0], [52.2, 200.0], [52.3, 201.0], [52.4, 202.0], [52.5, 203.0], [52.6, 203.0], [52.7, 204.0], [52.8, 204.0], [52.9, 205.0], [53.0, 206.0], [53.1, 206.0], [53.2, 207.0], [53.3, 208.0], [53.4, 210.0], [53.5, 210.0], [53.6, 211.0], [53.7, 212.0], [53.8, 212.0], [53.9, 214.0], [54.0, 214.0], [54.1, 215.0], [54.2, 216.0], [54.3, 216.0], [54.4, 217.0], [54.5, 218.0], [54.6, 218.0], [54.7, 220.0], [54.8, 221.0], [54.9, 222.0], [55.0, 223.0], [55.1, 224.0], [55.2, 224.0], [55.3, 225.0], [55.4, 226.0], [55.5, 226.0], [55.6, 227.0], [55.7, 227.0], [55.8, 228.0], [55.9, 229.0], [56.0, 229.0], [56.1, 231.0], [56.2, 231.0], [56.3, 233.0], [56.4, 233.0], [56.5, 234.0], [56.6, 234.0], [56.7, 235.0], [56.8, 236.0], [56.9, 236.0], [57.0, 238.0], [57.1, 238.0], [57.2, 239.0], [57.3, 240.0], [57.4, 242.0], [57.5, 243.0], [57.6, 243.0], [57.7, 244.0], [57.8, 245.0], [57.9, 246.0], [58.0, 246.0], [58.1, 247.0], [58.2, 247.0], [58.3, 249.0], [58.4, 249.0], [58.5, 250.0], [58.6, 251.0], [58.7, 252.0], [58.8, 253.0], [58.9, 255.0], [59.0, 255.0], [59.1, 256.0], [59.2, 258.0], [59.3, 259.0], [59.4, 259.0], [59.5, 260.0], [59.6, 261.0], [59.7, 262.0], [59.8, 262.0], [59.9, 264.0], [60.0, 265.0], [60.1, 266.0], [60.2, 267.0], [60.3, 269.0], [60.4, 269.0], [60.5, 270.0], [60.6, 271.0], [60.7, 272.0], [60.8, 273.0], [60.9, 274.0], [61.0, 276.0], [61.1, 277.0], [61.2, 278.0], [61.3, 279.0], [61.4, 281.0], [61.5, 281.0], [61.6, 283.0], [61.7, 283.0], [61.8, 284.0], [61.9, 285.0], [62.0, 286.0], [62.1, 287.0], [62.2, 288.0], [62.3, 289.0], [62.4, 290.0], [62.5, 291.0], [62.6, 292.0], [62.7, 292.0], [62.8, 293.0], [62.9, 294.0], [63.0, 296.0], [63.1, 298.0], [63.2, 299.0], [63.3, 300.0], [63.4, 301.0], [63.5, 302.0], [63.6, 304.0], [63.7, 306.0], [63.8, 308.0], [63.9, 309.0], [64.0, 312.0], [64.1, 313.0], [64.2, 314.0], [64.3, 316.0], [64.4, 318.0], [64.5, 319.0], [64.6, 320.0], [64.7, 322.0], [64.8, 324.0], [64.9, 326.0], [65.0, 327.0], [65.1, 328.0], [65.2, 329.0], [65.3, 330.0], [65.4, 331.0], [65.5, 332.0], [65.6, 333.0], [65.7, 333.0], [65.8, 335.0], [65.9, 336.0], [66.0, 338.0], [66.1, 338.0], [66.2, 339.0], [66.3, 340.0], [66.4, 341.0], [66.5, 342.0], [66.6, 343.0], [66.7, 344.0], [66.8, 345.0], [66.9, 347.0], [67.0, 348.0], [67.1, 350.0], [67.2, 353.0], [67.3, 355.0], [67.4, 356.0], [67.5, 357.0], [67.6, 358.0], [67.7, 359.0], [67.8, 360.0], [67.9, 362.0], [68.0, 363.0], [68.1, 363.0], [68.2, 365.0], [68.3, 366.0], [68.4, 366.0], [68.5, 368.0], [68.6, 369.0], [68.7, 371.0], [68.8, 372.0], [68.9, 373.0], [69.0, 375.0], [69.1, 376.0], [69.2, 377.0], [69.3, 379.0], [69.4, 380.0], [69.5, 380.0], [69.6, 382.0], [69.7, 383.0], [69.8, 384.0], [69.9, 386.0], [70.0, 387.0], [70.1, 387.0], [70.2, 389.0], [70.3, 391.0], [70.4, 391.0], [70.5, 392.0], [70.6, 393.0], [70.7, 394.0], [70.8, 394.0], [70.9, 396.0], [71.0, 397.0], [71.1, 399.0], [71.2, 402.0], [71.3, 403.0], [71.4, 405.0], [71.5, 407.0], [71.6, 408.0], [71.7, 409.0], [71.8, 411.0], [71.9, 413.0], [72.0, 413.0], [72.1, 415.0], [72.2, 417.0], [72.3, 418.0], [72.4, 419.0], [72.5, 421.0], [72.6, 422.0], [72.7, 424.0], [72.8, 426.0], [72.9, 427.0], [73.0, 428.0], [73.1, 429.0], [73.2, 430.0], [73.3, 432.0], [73.4, 433.0], [73.5, 436.0], [73.6, 438.0], [73.7, 440.0], [73.8, 442.0], [73.9, 444.0], [74.0, 446.0], [74.1, 447.0], [74.2, 448.0], [74.3, 449.0], [74.4, 450.0], [74.5, 451.0], [74.6, 453.0], [74.7, 456.0], [74.8, 457.0], [74.9, 457.0], [75.0, 458.0], [75.1, 459.0], [75.2, 460.0], [75.3, 461.0], [75.4, 464.0], [75.5, 464.0], [75.6, 465.0], [75.7, 467.0], [75.8, 468.0], [75.9, 470.0], [76.0, 472.0], [76.1, 473.0], [76.2, 474.0], [76.3, 476.0], [76.4, 478.0], [76.5, 481.0], [76.6, 482.0], [76.7, 484.0], [76.8, 485.0], [76.9, 487.0], [77.0, 489.0], [77.1, 490.0], [77.2, 490.0], [77.3, 493.0], [77.4, 494.0], [77.5, 495.0], [77.6, 497.0], [77.7, 498.0], [77.8, 500.0], [77.9, 502.0], [78.0, 502.0], [78.1, 503.0], [78.2, 505.0], [78.3, 506.0], [78.4, 508.0], [78.5, 512.0], [78.6, 514.0], [78.7, 515.0], [78.8, 516.0], [78.9, 518.0], [79.0, 518.0], [79.1, 519.0], [79.2, 521.0], [79.3, 523.0], [79.4, 524.0], [79.5, 527.0], [79.6, 528.0], [79.7, 530.0], [79.8, 531.0], [79.9, 533.0], [80.0, 535.0], [80.1, 536.0], [80.2, 539.0], [80.3, 541.0], [80.4, 543.0], [80.5, 545.0], [80.6, 546.0], [80.7, 547.0], [80.8, 549.0], [80.9, 550.0], [81.0, 553.0], [81.1, 556.0], [81.2, 558.0], [81.3, 559.0], [81.4, 561.0], [81.5, 562.0], [81.6, 564.0], [81.7, 565.0], [81.8, 569.0], [81.9, 570.0], [82.0, 572.0], [82.1, 575.0], [82.2, 576.0], [82.3, 577.0], [82.4, 578.0], [82.5, 581.0], [82.6, 583.0], [82.7, 584.0], [82.8, 586.0], [82.9, 589.0], [83.0, 590.0], [83.1, 591.0], [83.2, 594.0], [83.3, 595.0], [83.4, 597.0], [83.5, 599.0], [83.6, 601.0], [83.7, 603.0], [83.8, 604.0], [83.9, 606.0], [84.0, 607.0], [84.1, 609.0], [84.2, 611.0], [84.3, 612.0], [84.4, 615.0], [84.5, 616.0], [84.6, 618.0], [84.7, 619.0], [84.8, 622.0], [84.9, 623.0], [85.0, 625.0], [85.1, 627.0], [85.2, 630.0], [85.3, 632.0], [85.4, 635.0], [85.5, 638.0], [85.6, 641.0], [85.7, 643.0], [85.8, 647.0], [85.9, 650.0], [86.0, 653.0], [86.1, 655.0], [86.2, 657.0], [86.3, 658.0], [86.4, 661.0], [86.5, 662.0], [86.6, 664.0], [86.7, 666.0], [86.8, 671.0], [86.9, 673.0], [87.0, 675.0], [87.1, 679.0], [87.2, 681.0], [87.3, 684.0], [87.4, 689.0], [87.5, 692.0], [87.6, 696.0], [87.7, 699.0], [87.8, 702.0], [87.9, 708.0], [88.0, 711.0], [88.1, 712.0], [88.2, 716.0], [88.3, 718.0], [88.4, 720.0], [88.5, 721.0], [88.6, 724.0], [88.7, 726.0], [88.8, 727.0], [88.9, 728.0], [89.0, 731.0], [89.1, 734.0], [89.2, 737.0], [89.3, 740.0], [89.4, 743.0], [89.5, 746.0], [89.6, 750.0], [89.7, 753.0], [89.8, 758.0], [89.9, 766.0], [90.0, 770.0], [90.1, 773.0], [90.2, 776.0], [90.3, 779.0], [90.4, 782.0], [90.5, 788.0], [90.6, 790.0], [90.7, 794.0], [90.8, 796.0], [90.9, 802.0], [91.0, 806.0], [91.1, 810.0], [91.2, 813.0], [91.3, 816.0], [91.4, 819.0], [91.5, 821.0], [91.6, 824.0], [91.7, 826.0], [91.8, 832.0], [91.9, 834.0], [92.0, 841.0], [92.1, 847.0], [92.2, 850.0], [92.3, 857.0], [92.4, 861.0], [92.5, 868.0], [92.6, 876.0], [92.7, 884.0], [92.8, 890.0], [92.9, 895.0], [93.0, 900.0], [93.1, 906.0], [93.2, 909.0], [93.3, 911.0], [93.4, 916.0], [93.5, 920.0], [93.6, 922.0], [93.7, 925.0], [93.8, 931.0], [93.9, 935.0], [94.0, 941.0], [94.1, 946.0], [94.2, 958.0], [94.3, 964.0], [94.4, 969.0], [94.5, 977.0], [94.6, 986.0], [94.7, 992.0], [94.8, 996.0], [94.9, 1002.0], [95.0, 1007.0], [95.1, 1011.0], [95.2, 1019.0], [95.3, 1033.0], [95.4, 1039.0], [95.5, 1044.0], [95.6, 1047.0], [95.7, 1049.0], [95.8, 1051.0], [95.9, 1058.0], [96.0, 1066.0], [96.1, 1068.0], [96.2, 1081.0], [96.3, 1088.0], [96.4, 1102.0], [96.5, 1113.0], [96.6, 1118.0], [96.7, 1125.0], [96.8, 1130.0], [96.9, 1138.0], [97.0, 1154.0], [97.1, 1178.0], [97.2, 1180.0], [97.3, 1184.0], [97.4, 1207.0], [97.5, 1230.0], [97.6, 1250.0], [97.7, 1268.0], [97.8, 1291.0], [97.9, 1305.0], [98.0, 1320.0], [98.1, 1346.0], [98.2, 1367.0], [98.3, 1398.0], [98.4, 1433.0], [98.5, 1442.0], [98.6, 1453.0], [98.7, 1506.0], [98.8, 1517.0], [98.9, 1560.0], [99.0, 1596.0], [99.1, 1642.0], [99.2, 1662.0], [99.3, 1752.0], [99.4, 1820.0], [99.5, 1896.0], [99.6, 1969.0], [99.7, 2091.0], [99.8, 2180.0], [99.9, 2273.0], [100.0, 3227.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2161.0, "series": [{"data": [[0.0, 2161.0], [600.0, 222.0], [700.0, 164.0], [800.0, 113.0], [900.0, 98.0], [1000.0, 81.0], [1100.0, 50.0], [1200.0, 29.0], [1300.0, 24.0], [1400.0, 18.0], [1500.0, 18.0], [100.0, 587.0], [1600.0, 13.0], [1700.0, 4.0], [1800.0, 9.0], [1900.0, 8.0], [2000.0, 3.0], [2100.0, 6.0], [2200.0, 4.0], [2300.0, 1.0], [2400.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 589.0], [3200.0, 1.0], [300.0, 412.0], [400.0, 350.0], [500.0, 304.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 70.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4103.0, "series": [{"data": [[0.0, 4103.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1099.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 70.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.906882591093119, "minX": 1.60223772E12, "maxY": 10.0, "series": [{"data": [[1.60223784E12, 10.0], [1.6022379E12, 9.957706766917294], [1.60223772E12, 9.906882591093119], [1.60223778E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022379E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 309.0055175038065, "minX": 1.0, "maxY": 3227.0, "series": [{"data": [[4.0, 1634.0], [8.0, 1234.5], [2.0, 2194.0], [1.0, 3227.0], [9.0, 474.3333333333333], [5.0, 803.6666666666666], [10.0, 309.0055175038065], [6.0, 1053.0], [3.0, 2255.0], [7.0, 645.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987101669195768, 311.78357359635817]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2216.383333333333, "minX": 1.60223772E12, "maxY": 1718137.8333333333, "series": [{"data": [[1.60223784E12, 1439810.6333333333], [1.6022379E12, 1060496.1166666667], [1.60223772E12, 72976.41666666667], [1.60223778E12, 1718137.8333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223784E12, 19904.816666666666], [1.6022379E12, 9404.716666666667], [1.60223772E12, 2216.383333333333], [1.60223778E12, 14053.633333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022379E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 253.90311566367896, "minX": 1.60223772E12, "maxY": 369.70889987639106, "series": [{"data": [[1.60223784E12, 253.90311566367896], [1.6022379E12, 361.70676691729267], [1.60223772E12, 266.32793522267195], [1.60223778E12, 369.70889987639106]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022379E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 253.63892445582553, "minX": 1.60223772E12, "maxY": 369.2589616810878, "series": [{"data": [[1.60223784E12, 253.63892445582553], [1.6022379E12, 361.2828947368428], [1.60223772E12, 266.14170040485834], [1.60223778E12, 369.2589616810878]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022379E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0067985166872682416, "minX": 1.60223772E12, "maxY": 0.4453441295546558, "series": [{"data": [[1.60223784E12, 0.009389671361502348], [1.6022379E12, 0.008458646616541346], [1.60223772E12, 0.4453441295546558], [1.60223778E12, 0.0067985166872682416]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022379E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60223772E12, "maxY": 3227.0, "series": [{"data": [[1.60223784E12, 2091.0], [1.6022379E12, 3227.0], [1.60223772E12, 1250.0], [1.60223778E12, 2422.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223784E12, 32.0], [1.6022379E12, 30.584999746084215], [1.60223772E12, 33.23199994087219], [1.60223778E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223784E12, 33.0], [1.6022379E12, 31.0], [1.60223772E12, 33.45520002365112], [1.60223778E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223784E12, 32.26799972057343], [1.6022379E12, 31.0], [1.60223772E12, 33.355999970436095], [1.60223778E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223784E12, 28.0], [1.6022379E12, 29.0], [1.60223772E12, 33.0], [1.60223778E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223784E12, 131.0], [1.6022379E12, 218.0], [1.60223772E12, 83.0], [1.60223778E12, 254.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022379E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 40.0, "minX": 1.0, "maxY": 3227.0, "series": [{"data": [[3.0, 2255.0], [4.0, 1658.5], [5.0, 1138.5], [6.0, 1638.0], [8.0, 1014.0], [9.0, 1118.5], [11.0, 823.0], [12.0, 764.5], [13.0, 671.5], [14.0, 695.0], [15.0, 667.5], [16.0, 464.0], [17.0, 583.5], [18.0, 465.5], [19.0, 473.0], [20.0, 448.0], [21.0, 366.0], [22.0, 443.5], [23.0, 356.5], [24.0, 363.5], [25.0, 421.0], [26.0, 273.0], [27.0, 338.5], [28.0, 233.0], [29.0, 347.0], [30.0, 327.5], [31.0, 136.0], [32.0, 258.0], [33.0, 114.5], [34.0, 40.0], [35.0, 247.0], [37.0, 243.0], [36.0, 69.5], [39.0, 203.0], [38.0, 83.5], [41.0, 76.5], [40.0, 79.5], [43.0, 141.0], [42.0, 94.0], [45.0, 74.0], [46.0, 149.5], [51.0, 73.0], [53.0, 87.0], [55.0, 133.0], [57.0, 103.0], [56.0, 143.0], [58.0, 74.5], [61.0, 153.5], [63.0, 72.0], [62.0, 70.5], [64.0, 153.0], [66.0, 129.5], [68.0, 119.5], [69.0, 104.0], [70.0, 73.0], [72.0, 128.5], [74.0, 70.5], [77.0, 71.0], [76.0, 129.5], [83.0, 43.0], [91.0, 71.0], [92.0, 73.0], [98.0, 74.5], [1.0, 3227.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 40.0, "minX": 1.0, "maxY": 3227.0, "series": [{"data": [[3.0, 2255.0], [4.0, 1658.5], [5.0, 1137.5], [6.0, 1637.5], [8.0, 1011.0], [9.0, 1117.0], [11.0, 822.0], [12.0, 764.5], [13.0, 671.0], [14.0, 694.5], [15.0, 667.0], [16.0, 460.0], [17.0, 582.5], [18.0, 464.5], [19.0, 473.0], [20.0, 447.0], [21.0, 365.5], [22.0, 442.5], [23.0, 355.5], [24.0, 362.0], [25.0, 421.0], [26.0, 272.0], [27.0, 338.0], [28.0, 232.0], [29.0, 347.0], [30.0, 326.5], [31.0, 136.0], [32.0, 258.0], [33.0, 114.5], [34.0, 40.0], [35.0, 245.0], [37.0, 243.0], [36.0, 69.5], [39.0, 203.0], [38.0, 83.5], [41.0, 76.5], [40.0, 79.5], [43.0, 141.0], [42.0, 94.0], [45.0, 74.0], [46.0, 149.5], [51.0, 73.0], [53.0, 87.0], [55.0, 133.0], [57.0, 103.0], [56.0, 143.0], [58.0, 74.5], [61.0, 153.5], [63.0, 72.0], [62.0, 70.5], [64.0, 153.0], [66.0, 129.5], [68.0, 119.5], [69.0, 104.0], [70.0, 73.0], [72.0, 128.5], [74.0, 70.5], [77.0, 71.0], [76.0, 129.0], [83.0, 43.0], [91.0, 71.0], [92.0, 73.0], [98.0, 74.5], [1.0, 3227.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.283333333333333, "minX": 1.60223772E12, "maxY": 39.05, "series": [{"data": [[1.60223784E12, 39.05], [1.6022379E12, 17.566666666666666], [1.60223772E12, 4.283333333333333], [1.60223778E12, 26.966666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022379E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.116666666666666, "minX": 1.60223772E12, "maxY": 39.05, "series": [{"data": [[1.60223784E12, 39.05], [1.6022379E12, 17.733333333333334], [1.60223772E12, 4.116666666666666], [1.60223778E12, 26.966666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022379E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.116666666666666, "minX": 1.60223772E12, "maxY": 39.05, "series": [{"data": [[1.60223784E12, 39.05], [1.6022379E12, 17.733333333333334], [1.60223772E12, 4.116666666666666], [1.60223778E12, 26.966666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022379E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.116666666666666, "minX": 1.60223772E12, "maxY": 39.05, "series": [{"data": [[1.60223784E12, 39.05], [1.6022379E12, 17.733333333333334], [1.60223772E12, 4.116666666666666], [1.60223778E12, 26.966666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022379E12, "title": "Total Transactions Per Second"}},
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

