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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 3417.0, "series": [{"data": [[0.0, 27.0], [0.1, 28.0], [0.2, 28.0], [0.3, 29.0], [0.4, 29.0], [0.5, 30.0], [0.6, 30.0], [0.7, 30.0], [0.8, 30.0], [0.9, 31.0], [1.0, 31.0], [1.1, 31.0], [1.2, 32.0], [1.3, 32.0], [1.4, 32.0], [1.5, 32.0], [1.6, 32.0], [1.7, 32.0], [1.8, 32.0], [1.9, 33.0], [2.0, 33.0], [2.1, 33.0], [2.2, 33.0], [2.3, 33.0], [2.4, 33.0], [2.5, 33.0], [2.6, 33.0], [2.7, 33.0], [2.8, 34.0], [2.9, 34.0], [3.0, 34.0], [3.1, 34.0], [3.2, 34.0], [3.3, 34.0], [3.4, 34.0], [3.5, 34.0], [3.6, 34.0], [3.7, 34.0], [3.8, 34.0], [3.9, 34.0], [4.0, 34.0], [4.1, 34.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 35.0], [4.6, 35.0], [4.7, 35.0], [4.8, 35.0], [4.9, 35.0], [5.0, 35.0], [5.1, 35.0], [5.2, 35.0], [5.3, 35.0], [5.4, 35.0], [5.5, 36.0], [5.6, 36.0], [5.7, 36.0], [5.8, 36.0], [5.9, 36.0], [6.0, 36.0], [6.1, 36.0], [6.2, 36.0], [6.3, 36.0], [6.4, 36.0], [6.5, 36.0], [6.6, 36.0], [6.7, 37.0], [6.8, 37.0], [6.9, 37.0], [7.0, 37.0], [7.1, 37.0], [7.2, 37.0], [7.3, 37.0], [7.4, 37.0], [7.5, 37.0], [7.6, 37.0], [7.7, 37.0], [7.8, 37.0], [7.9, 37.0], [8.0, 37.0], [8.1, 37.0], [8.2, 37.0], [8.3, 37.0], [8.4, 37.0], [8.5, 38.0], [8.6, 38.0], [8.7, 38.0], [8.8, 38.0], [8.9, 38.0], [9.0, 38.0], [9.1, 38.0], [9.2, 38.0], [9.3, 38.0], [9.4, 38.0], [9.5, 38.0], [9.6, 38.0], [9.7, 38.0], [9.8, 38.0], [9.9, 38.0], [10.0, 39.0], [10.1, 39.0], [10.2, 39.0], [10.3, 39.0], [10.4, 39.0], [10.5, 39.0], [10.6, 39.0], [10.7, 39.0], [10.8, 39.0], [10.9, 39.0], [11.0, 39.0], [11.1, 39.0], [11.2, 39.0], [11.3, 39.0], [11.4, 39.0], [11.5, 40.0], [11.6, 40.0], [11.7, 40.0], [11.8, 40.0], [11.9, 40.0], [12.0, 40.0], [12.1, 40.0], [12.2, 40.0], [12.3, 40.0], [12.4, 40.0], [12.5, 40.0], [12.6, 40.0], [12.7, 40.0], [12.8, 41.0], [12.9, 41.0], [13.0, 41.0], [13.1, 41.0], [13.2, 41.0], [13.3, 41.0], [13.4, 41.0], [13.5, 41.0], [13.6, 41.0], [13.7, 41.0], [13.8, 41.0], [13.9, 41.0], [14.0, 42.0], [14.1, 42.0], [14.2, 42.0], [14.3, 42.0], [14.4, 42.0], [14.5, 42.0], [14.6, 42.0], [14.7, 42.0], [14.8, 43.0], [14.9, 43.0], [15.0, 43.0], [15.1, 43.0], [15.2, 43.0], [15.3, 43.0], [15.4, 43.0], [15.5, 44.0], [15.6, 44.0], [15.7, 44.0], [15.8, 44.0], [15.9, 44.0], [16.0, 44.0], [16.1, 45.0], [16.2, 45.0], [16.3, 45.0], [16.4, 45.0], [16.5, 45.0], [16.6, 46.0], [16.7, 46.0], [16.8, 46.0], [16.9, 46.0], [17.0, 47.0], [17.1, 47.0], [17.2, 47.0], [17.3, 47.0], [17.4, 47.0], [17.5, 47.0], [17.6, 48.0], [17.7, 48.0], [17.8, 48.0], [17.9, 48.0], [18.0, 49.0], [18.1, 49.0], [18.2, 49.0], [18.3, 49.0], [18.4, 50.0], [18.5, 50.0], [18.6, 50.0], [18.7, 51.0], [18.8, 51.0], [18.9, 51.0], [19.0, 51.0], [19.1, 52.0], [19.2, 52.0], [19.3, 52.0], [19.4, 53.0], [19.5, 53.0], [19.6, 53.0], [19.7, 54.0], [19.8, 54.0], [19.9, 54.0], [20.0, 55.0], [20.1, 55.0], [20.2, 56.0], [20.3, 56.0], [20.4, 57.0], [20.5, 57.0], [20.6, 57.0], [20.7, 57.0], [20.8, 57.0], [20.9, 58.0], [21.0, 58.0], [21.1, 58.0], [21.2, 58.0], [21.3, 58.0], [21.4, 59.0], [21.5, 59.0], [21.6, 59.0], [21.7, 60.0], [21.8, 60.0], [21.9, 60.0], [22.0, 60.0], [22.1, 61.0], [22.2, 61.0], [22.3, 61.0], [22.4, 61.0], [22.5, 61.0], [22.6, 62.0], [22.7, 62.0], [22.8, 62.0], [22.9, 62.0], [23.0, 63.0], [23.1, 63.0], [23.2, 63.0], [23.3, 63.0], [23.4, 63.0], [23.5, 64.0], [23.6, 64.0], [23.7, 65.0], [23.8, 65.0], [23.9, 65.0], [24.0, 65.0], [24.1, 65.0], [24.2, 66.0], [24.3, 66.0], [24.4, 66.0], [24.5, 66.0], [24.6, 66.0], [24.7, 67.0], [24.8, 67.0], [24.9, 67.0], [25.0, 67.0], [25.1, 67.0], [25.2, 67.0], [25.3, 67.0], [25.4, 67.0], [25.5, 68.0], [25.6, 68.0], [25.7, 68.0], [25.8, 68.0], [25.9, 68.0], [26.0, 68.0], [26.1, 68.0], [26.2, 68.0], [26.3, 69.0], [26.4, 69.0], [26.5, 69.0], [26.6, 69.0], [26.7, 69.0], [26.8, 69.0], [26.9, 69.0], [27.0, 69.0], [27.1, 69.0], [27.2, 70.0], [27.3, 70.0], [27.4, 70.0], [27.5, 70.0], [27.6, 70.0], [27.7, 71.0], [27.8, 71.0], [27.9, 71.0], [28.0, 71.0], [28.1, 71.0], [28.2, 71.0], [28.3, 71.0], [28.4, 71.0], [28.5, 71.0], [28.6, 72.0], [28.7, 72.0], [28.8, 72.0], [28.9, 72.0], [29.0, 72.0], [29.1, 72.0], [29.2, 72.0], [29.3, 72.0], [29.4, 72.0], [29.5, 72.0], [29.6, 73.0], [29.7, 73.0], [29.8, 73.0], [29.9, 73.0], [30.0, 73.0], [30.1, 73.0], [30.2, 73.0], [30.3, 73.0], [30.4, 73.0], [30.5, 74.0], [30.6, 74.0], [30.7, 74.0], [30.8, 74.0], [30.9, 74.0], [31.0, 74.0], [31.1, 74.0], [31.2, 74.0], [31.3, 74.0], [31.4, 75.0], [31.5, 75.0], [31.6, 75.0], [31.7, 75.0], [31.8, 75.0], [31.9, 75.0], [32.0, 76.0], [32.1, 76.0], [32.2, 76.0], [32.3, 76.0], [32.4, 76.0], [32.5, 76.0], [32.6, 76.0], [32.7, 76.0], [32.8, 77.0], [32.9, 77.0], [33.0, 77.0], [33.1, 77.0], [33.2, 77.0], [33.3, 77.0], [33.4, 77.0], [33.5, 77.0], [33.6, 78.0], [33.7, 78.0], [33.8, 78.0], [33.9, 78.0], [34.0, 78.0], [34.1, 78.0], [34.2, 78.0], [34.3, 78.0], [34.4, 79.0], [34.5, 79.0], [34.6, 79.0], [34.7, 79.0], [34.8, 79.0], [34.9, 79.0], [35.0, 80.0], [35.1, 80.0], [35.2, 80.0], [35.3, 80.0], [35.4, 80.0], [35.5, 80.0], [35.6, 81.0], [35.7, 81.0], [35.8, 81.0], [35.9, 82.0], [36.0, 82.0], [36.1, 82.0], [36.2, 82.0], [36.3, 82.0], [36.4, 83.0], [36.5, 83.0], [36.6, 83.0], [36.7, 83.0], [36.8, 84.0], [36.9, 84.0], [37.0, 84.0], [37.1, 85.0], [37.2, 85.0], [37.3, 86.0], [37.4, 86.0], [37.5, 86.0], [37.6, 86.0], [37.7, 87.0], [37.8, 88.0], [37.9, 88.0], [38.0, 88.0], [38.1, 89.0], [38.2, 90.0], [38.3, 90.0], [38.4, 91.0], [38.5, 91.0], [38.6, 92.0], [38.7, 92.0], [38.8, 93.0], [38.9, 93.0], [39.0, 94.0], [39.1, 95.0], [39.2, 95.0], [39.3, 96.0], [39.4, 96.0], [39.5, 97.0], [39.6, 98.0], [39.7, 99.0], [39.8, 99.0], [39.9, 99.0], [40.0, 100.0], [40.1, 100.0], [40.2, 101.0], [40.3, 101.0], [40.4, 102.0], [40.5, 102.0], [40.6, 103.0], [40.7, 104.0], [40.8, 104.0], [40.9, 105.0], [41.0, 105.0], [41.1, 105.0], [41.2, 106.0], [41.3, 107.0], [41.4, 107.0], [41.5, 108.0], [41.6, 108.0], [41.7, 108.0], [41.8, 109.0], [41.9, 110.0], [42.0, 110.0], [42.1, 111.0], [42.2, 111.0], [42.3, 112.0], [42.4, 112.0], [42.5, 113.0], [42.6, 114.0], [42.7, 114.0], [42.8, 115.0], [42.9, 115.0], [43.0, 116.0], [43.1, 117.0], [43.2, 118.0], [43.3, 118.0], [43.4, 119.0], [43.5, 120.0], [43.6, 121.0], [43.7, 122.0], [43.8, 123.0], [43.9, 123.0], [44.0, 124.0], [44.1, 124.0], [44.2, 125.0], [44.3, 126.0], [44.4, 127.0], [44.5, 127.0], [44.6, 128.0], [44.7, 128.0], [44.8, 129.0], [44.9, 130.0], [45.0, 130.0], [45.1, 131.0], [45.2, 132.0], [45.3, 135.0], [45.4, 136.0], [45.5, 138.0], [45.6, 139.0], [45.7, 140.0], [45.8, 142.0], [45.9, 143.0], [46.0, 145.0], [46.1, 148.0], [46.2, 149.0], [46.3, 150.0], [46.4, 151.0], [46.5, 152.0], [46.6, 154.0], [46.7, 155.0], [46.8, 156.0], [46.9, 157.0], [47.0, 157.0], [47.1, 159.0], [47.2, 160.0], [47.3, 161.0], [47.4, 162.0], [47.5, 163.0], [47.6, 164.0], [47.7, 165.0], [47.8, 166.0], [47.9, 167.0], [48.0, 168.0], [48.1, 168.0], [48.2, 169.0], [48.3, 170.0], [48.4, 171.0], [48.5, 171.0], [48.6, 172.0], [48.7, 173.0], [48.8, 174.0], [48.9, 175.0], [49.0, 176.0], [49.1, 176.0], [49.2, 177.0], [49.3, 178.0], [49.4, 179.0], [49.5, 179.0], [49.6, 179.0], [49.7, 180.0], [49.8, 181.0], [49.9, 181.0], [50.0, 182.0], [50.1, 182.0], [50.2, 184.0], [50.3, 185.0], [50.4, 186.0], [50.5, 187.0], [50.6, 187.0], [50.7, 187.0], [50.8, 188.0], [50.9, 189.0], [51.0, 190.0], [51.1, 190.0], [51.2, 191.0], [51.3, 192.0], [51.4, 193.0], [51.5, 193.0], [51.6, 193.0], [51.7, 194.0], [51.8, 194.0], [51.9, 195.0], [52.0, 196.0], [52.1, 196.0], [52.2, 197.0], [52.3, 197.0], [52.4, 198.0], [52.5, 198.0], [52.6, 199.0], [52.7, 200.0], [52.8, 200.0], [52.9, 201.0], [53.0, 201.0], [53.1, 202.0], [53.2, 203.0], [53.3, 203.0], [53.4, 203.0], [53.5, 204.0], [53.6, 204.0], [53.7, 204.0], [53.8, 205.0], [53.9, 207.0], [54.0, 207.0], [54.1, 208.0], [54.2, 208.0], [54.3, 209.0], [54.4, 209.0], [54.5, 210.0], [54.6, 211.0], [54.7, 211.0], [54.8, 212.0], [54.9, 213.0], [55.0, 213.0], [55.1, 214.0], [55.2, 215.0], [55.3, 215.0], [55.4, 216.0], [55.5, 217.0], [55.6, 218.0], [55.7, 219.0], [55.8, 220.0], [55.9, 222.0], [56.0, 222.0], [56.1, 223.0], [56.2, 223.0], [56.3, 225.0], [56.4, 226.0], [56.5, 226.0], [56.6, 227.0], [56.7, 228.0], [56.8, 229.0], [56.9, 230.0], [57.0, 230.0], [57.1, 231.0], [57.2, 232.0], [57.3, 233.0], [57.4, 233.0], [57.5, 235.0], [57.6, 235.0], [57.7, 237.0], [57.8, 238.0], [57.9, 238.0], [58.0, 239.0], [58.1, 240.0], [58.2, 240.0], [58.3, 241.0], [58.4, 242.0], [58.5, 243.0], [58.6, 244.0], [58.7, 244.0], [58.8, 246.0], [58.9, 247.0], [59.0, 247.0], [59.1, 248.0], [59.2, 249.0], [59.3, 249.0], [59.4, 250.0], [59.5, 251.0], [59.6, 253.0], [59.7, 254.0], [59.8, 254.0], [59.9, 255.0], [60.0, 256.0], [60.1, 256.0], [60.2, 257.0], [60.3, 258.0], [60.4, 259.0], [60.5, 260.0], [60.6, 262.0], [60.7, 263.0], [60.8, 264.0], [60.9, 265.0], [61.0, 267.0], [61.1, 268.0], [61.2, 269.0], [61.3, 270.0], [61.4, 271.0], [61.5, 271.0], [61.6, 272.0], [61.7, 274.0], [61.8, 276.0], [61.9, 277.0], [62.0, 278.0], [62.1, 279.0], [62.2, 282.0], [62.3, 283.0], [62.4, 284.0], [62.5, 285.0], [62.6, 285.0], [62.7, 287.0], [62.8, 288.0], [62.9, 290.0], [63.0, 292.0], [63.1, 293.0], [63.2, 294.0], [63.3, 295.0], [63.4, 297.0], [63.5, 298.0], [63.6, 299.0], [63.7, 301.0], [63.8, 301.0], [63.9, 302.0], [64.0, 305.0], [64.1, 307.0], [64.2, 309.0], [64.3, 309.0], [64.4, 311.0], [64.5, 313.0], [64.6, 314.0], [64.7, 314.0], [64.8, 316.0], [64.9, 317.0], [65.0, 318.0], [65.1, 320.0], [65.2, 321.0], [65.3, 324.0], [65.4, 325.0], [65.5, 326.0], [65.6, 327.0], [65.7, 329.0], [65.8, 330.0], [65.9, 332.0], [66.0, 332.0], [66.1, 334.0], [66.2, 336.0], [66.3, 337.0], [66.4, 339.0], [66.5, 341.0], [66.6, 342.0], [66.7, 343.0], [66.8, 345.0], [66.9, 346.0], [67.0, 347.0], [67.1, 349.0], [67.2, 350.0], [67.3, 352.0], [67.4, 354.0], [67.5, 355.0], [67.6, 356.0], [67.7, 358.0], [67.8, 359.0], [67.9, 360.0], [68.0, 362.0], [68.1, 364.0], [68.2, 366.0], [68.3, 367.0], [68.4, 369.0], [68.5, 369.0], [68.6, 370.0], [68.7, 370.0], [68.8, 372.0], [68.9, 374.0], [69.0, 375.0], [69.1, 376.0], [69.2, 376.0], [69.3, 377.0], [69.4, 379.0], [69.5, 380.0], [69.6, 382.0], [69.7, 383.0], [69.8, 384.0], [69.9, 386.0], [70.0, 387.0], [70.1, 388.0], [70.2, 388.0], [70.3, 389.0], [70.4, 390.0], [70.5, 391.0], [70.6, 392.0], [70.7, 393.0], [70.8, 394.0], [70.9, 396.0], [71.0, 398.0], [71.1, 399.0], [71.2, 401.0], [71.3, 401.0], [71.4, 403.0], [71.5, 405.0], [71.6, 406.0], [71.7, 407.0], [71.8, 408.0], [71.9, 409.0], [72.0, 411.0], [72.1, 412.0], [72.2, 413.0], [72.3, 414.0], [72.4, 415.0], [72.5, 417.0], [72.6, 419.0], [72.7, 421.0], [72.8, 422.0], [72.9, 423.0], [73.0, 424.0], [73.1, 425.0], [73.2, 426.0], [73.3, 427.0], [73.4, 427.0], [73.5, 428.0], [73.6, 431.0], [73.7, 432.0], [73.8, 433.0], [73.9, 434.0], [74.0, 435.0], [74.1, 436.0], [74.2, 437.0], [74.3, 439.0], [74.4, 440.0], [74.5, 442.0], [74.6, 443.0], [74.7, 445.0], [74.8, 446.0], [74.9, 447.0], [75.0, 449.0], [75.1, 450.0], [75.2, 453.0], [75.3, 454.0], [75.4, 457.0], [75.5, 459.0], [75.6, 460.0], [75.7, 462.0], [75.8, 464.0], [75.9, 465.0], [76.0, 466.0], [76.1, 467.0], [76.2, 469.0], [76.3, 469.0], [76.4, 471.0], [76.5, 472.0], [76.6, 474.0], [76.7, 474.0], [76.8, 475.0], [76.9, 477.0], [77.0, 478.0], [77.1, 480.0], [77.2, 481.0], [77.3, 483.0], [77.4, 485.0], [77.5, 487.0], [77.6, 488.0], [77.7, 489.0], [77.8, 492.0], [77.9, 494.0], [78.0, 496.0], [78.1, 497.0], [78.2, 499.0], [78.3, 503.0], [78.4, 504.0], [78.5, 508.0], [78.6, 509.0], [78.7, 510.0], [78.8, 511.0], [78.9, 513.0], [79.0, 514.0], [79.1, 515.0], [79.2, 517.0], [79.3, 518.0], [79.4, 520.0], [79.5, 522.0], [79.6, 524.0], [79.7, 526.0], [79.8, 529.0], [79.9, 532.0], [80.0, 534.0], [80.1, 536.0], [80.2, 538.0], [80.3, 538.0], [80.4, 539.0], [80.5, 541.0], [80.6, 543.0], [80.7, 543.0], [80.8, 545.0], [80.9, 547.0], [81.0, 549.0], [81.1, 550.0], [81.2, 553.0], [81.3, 555.0], [81.4, 558.0], [81.5, 560.0], [81.6, 561.0], [81.7, 563.0], [81.8, 565.0], [81.9, 566.0], [82.0, 567.0], [82.1, 568.0], [82.2, 569.0], [82.3, 573.0], [82.4, 576.0], [82.5, 577.0], [82.6, 579.0], [82.7, 582.0], [82.8, 584.0], [82.9, 585.0], [83.0, 586.0], [83.1, 588.0], [83.2, 590.0], [83.3, 592.0], [83.4, 596.0], [83.5, 597.0], [83.6, 599.0], [83.7, 601.0], [83.8, 602.0], [83.9, 605.0], [84.0, 606.0], [84.1, 608.0], [84.2, 610.0], [84.3, 611.0], [84.4, 615.0], [84.5, 617.0], [84.6, 618.0], [84.7, 621.0], [84.8, 623.0], [84.9, 627.0], [85.0, 629.0], [85.1, 632.0], [85.2, 633.0], [85.3, 634.0], [85.4, 638.0], [85.5, 640.0], [85.6, 643.0], [85.7, 645.0], [85.8, 648.0], [85.9, 648.0], [86.0, 652.0], [86.1, 654.0], [86.2, 657.0], [86.3, 659.0], [86.4, 661.0], [86.5, 665.0], [86.6, 667.0], [86.7, 669.0], [86.8, 672.0], [86.9, 673.0], [87.0, 674.0], [87.1, 676.0], [87.2, 679.0], [87.3, 683.0], [87.4, 687.0], [87.5, 689.0], [87.6, 693.0], [87.7, 694.0], [87.8, 696.0], [87.9, 698.0], [88.0, 703.0], [88.1, 704.0], [88.2, 705.0], [88.3, 707.0], [88.4, 710.0], [88.5, 712.0], [88.6, 715.0], [88.7, 717.0], [88.8, 720.0], [88.9, 723.0], [89.0, 727.0], [89.1, 729.0], [89.2, 733.0], [89.3, 734.0], [89.4, 739.0], [89.5, 741.0], [89.6, 743.0], [89.7, 744.0], [89.8, 746.0], [89.9, 750.0], [90.0, 751.0], [90.1, 754.0], [90.2, 755.0], [90.3, 761.0], [90.4, 764.0], [90.5, 771.0], [90.6, 776.0], [90.7, 780.0], [90.8, 783.0], [90.9, 789.0], [91.0, 792.0], [91.1, 797.0], [91.2, 803.0], [91.3, 807.0], [91.4, 817.0], [91.5, 824.0], [91.6, 826.0], [91.7, 829.0], [91.8, 831.0], [91.9, 834.0], [92.0, 840.0], [92.1, 843.0], [92.2, 849.0], [92.3, 853.0], [92.4, 855.0], [92.5, 857.0], [92.6, 862.0], [92.7, 869.0], [92.8, 875.0], [92.9, 878.0], [93.0, 884.0], [93.1, 894.0], [93.2, 901.0], [93.3, 905.0], [93.4, 914.0], [93.5, 920.0], [93.6, 926.0], [93.7, 931.0], [93.8, 936.0], [93.9, 941.0], [94.0, 946.0], [94.1, 949.0], [94.2, 963.0], [94.3, 971.0], [94.4, 979.0], [94.5, 982.0], [94.6, 987.0], [94.7, 990.0], [94.8, 995.0], [94.9, 1005.0], [95.0, 1012.0], [95.1, 1015.0], [95.2, 1022.0], [95.3, 1037.0], [95.4, 1044.0], [95.5, 1051.0], [95.6, 1059.0], [95.7, 1064.0], [95.8, 1070.0], [95.9, 1078.0], [96.0, 1087.0], [96.1, 1095.0], [96.2, 1106.0], [96.3, 1113.0], [96.4, 1122.0], [96.5, 1132.0], [96.6, 1143.0], [96.7, 1149.0], [96.8, 1169.0], [96.9, 1182.0], [97.0, 1192.0], [97.1, 1209.0], [97.2, 1223.0], [97.3, 1243.0], [97.4, 1253.0], [97.5, 1270.0], [97.6, 1286.0], [97.7, 1309.0], [97.8, 1336.0], [97.9, 1353.0], [98.0, 1372.0], [98.1, 1396.0], [98.2, 1411.0], [98.3, 1426.0], [98.4, 1456.0], [98.5, 1472.0], [98.6, 1509.0], [98.7, 1523.0], [98.8, 1546.0], [98.9, 1588.0], [99.0, 1626.0], [99.1, 1690.0], [99.2, 1748.0], [99.3, 1830.0], [99.4, 1880.0], [99.5, 1989.0], [99.6, 2001.0], [99.7, 2123.0], [99.8, 2257.0], [99.9, 2400.0], [100.0, 3417.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2106.0, "series": [{"data": [[0.0, 2106.0], [600.0, 225.0], [700.0, 171.0], [800.0, 106.0], [900.0, 87.0], [1000.0, 70.0], [1100.0, 47.0], [1200.0, 31.0], [1300.0, 25.0], [1400.0, 24.0], [1500.0, 18.0], [100.0, 670.0], [1600.0, 11.0], [1700.0, 9.0], [1800.0, 6.0], [1900.0, 9.0], [2000.0, 6.0], [2100.0, 5.0], [2300.0, 3.0], [2200.0, 2.0], [2400.0, 1.0], [2600.0, 1.0], [2700.0, 1.0], [200.0, 578.0], [3200.0, 2.0], [3400.0, 1.0], [300.0, 396.0], [400.0, 374.0], [500.0, 287.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 75.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4126.0, "series": [{"data": [[0.0, 4126.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1071.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 75.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.805309734513273, "minX": 1.60231098E12, "maxY": 10.0, "series": [{"data": [[1.6023111E12, 10.0], [1.60231104E12, 10.0], [1.60231116E12, 9.95971351835273], [1.60231098E12, 9.805309734513273]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231116E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 308.882062012554, "minX": 1.0, "maxY": 3277.0, "series": [{"data": [[4.0, 1702.5], [8.0, 1761.0], [2.0, 3277.0], [1.0, 2279.0], [9.0, 616.0], [5.0, 836.3333333333334], [10.0, 308.882062012554], [6.0, 2160.0], [3.0, 2156.0], [7.0, 599.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987291350531095, 312.1265174506827]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 974.9333333333333, "minX": 1.60231098E12, "maxY": 1720412.2333333334, "series": [{"data": [[1.6023111E12, 1343843.8333333333], [1.60231104E12, 1720412.2333333334], [1.60231116E12, 1177079.25], [1.60231098E12, 50319.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023111E12, 19928.033333333333], [1.60231104E12, 14795.7], [1.60231116E12, 9880.883333333333], [1.60231098E12, 974.9333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231116E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 256.6208955223876, "minX": 1.60231098E12, "maxY": 367.64905998209485, "series": [{"data": [[1.6023111E12, 256.6208955223876], [1.60231104E12, 350.6735415439012], [1.60231116E12, 367.64905998209485], [1.60231098E12, 336.26548672566366]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231116E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 256.38422174840053, "minX": 1.60231098E12, "maxY": 367.26051924798554, "series": [{"data": [[1.6023111E12, 256.38422174840053], [1.60231104E12, 350.2492634060102], [1.60231116E12, 367.26051924798554], [1.60231098E12, 335.97345132743357]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231116E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008528784648187637, "minX": 1.60231098E12, "maxY": 0.7610619469026552, "series": [{"data": [[1.6023111E12, 0.008528784648187637], [1.60231104E12, 0.014142604596346519], [1.60231116E12, 0.010743061772605178], [1.60231098E12, 0.7610619469026552]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231116E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.60231098E12, "maxY": 3417.0, "series": [{"data": [[1.6023111E12, 2400.0], [1.60231104E12, 2094.0], [1.60231116E12, 3417.0], [1.60231098E12, 1149.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023111E12, 31.0], [1.60231104E12, 30.0], [1.60231116E12, 32.0], [1.60231098E12, 29.12999986410141]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023111E12, 31.0], [1.60231104E12, 30.0], [1.60231116E12, 32.0], [1.60231098E12, 29.643000054359437]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023111E12, 31.0], [1.60231104E12, 30.0], [1.60231116E12, 32.0], [1.60231098E12, 29.414999932050705]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023111E12, 28.0], [1.60231104E12, 27.0], [1.60231116E12, 28.0], [1.60231098E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023111E12, 135.0], [1.60231104E12, 242.0], [1.60231116E12, 214.0], [1.60231098E12, 214.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231116E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 40.5, "minX": 3.0, "maxY": 2328.5, "series": [{"data": [[3.0, 2328.5], [4.0, 120.5], [6.0, 1253.5], [7.0, 936.0], [8.0, 1217.0], [9.0, 1022.0], [10.0, 882.5], [11.0, 672.5], [12.0, 658.0], [13.0, 551.0], [14.0, 662.0], [15.0, 599.0], [16.0, 490.5], [17.0, 491.0], [18.0, 521.0], [19.0, 499.0], [20.0, 505.5], [21.0, 460.0], [22.0, 447.5], [23.0, 384.0], [24.0, 352.5], [25.0, 367.0], [26.0, 325.5], [27.0, 325.0], [28.0, 249.5], [29.0, 340.0], [30.0, 266.0], [31.0, 278.0], [33.0, 228.0], [32.0, 104.0], [35.0, 113.0], [34.0, 84.0], [36.0, 117.5], [37.0, 186.0], [39.0, 197.0], [38.0, 99.5], [41.0, 117.5], [40.0, 49.0], [42.0, 172.5], [43.0, 212.0], [44.0, 201.0], [45.0, 111.0], [47.0, 91.0], [46.0, 75.5], [50.0, 67.5], [51.0, 72.0], [52.0, 128.5], [53.0, 166.5], [55.0, 78.0], [54.0, 126.0], [57.0, 128.0], [61.0, 96.0], [60.0, 190.0], [62.0, 173.5], [66.0, 40.5], [69.0, 74.0], [70.0, 125.5], [71.0, 75.0], [73.0, 74.5], [76.0, 116.0], [82.0, 75.0], [85.0, 66.0], [84.0, 76.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 40.5, "minX": 3.0, "maxY": 2327.5, "series": [{"data": [[3.0, 2327.5], [4.0, 118.0], [6.0, 1253.0], [7.0, 934.0], [8.0, 1215.5], [9.0, 1022.0], [10.0, 881.5], [11.0, 671.5], [12.0, 657.5], [13.0, 550.0], [14.0, 662.0], [15.0, 599.0], [16.0, 490.5], [17.0, 490.5], [18.0, 520.5], [19.0, 498.0], [20.0, 505.0], [21.0, 459.0], [22.0, 447.0], [23.0, 382.0], [24.0, 352.5], [25.0, 365.5], [26.0, 324.5], [27.0, 322.0], [28.0, 248.5], [29.0, 338.5], [30.0, 265.5], [31.0, 278.0], [33.0, 227.5], [32.0, 104.0], [35.0, 113.0], [34.0, 84.0], [36.0, 117.5], [37.0, 186.0], [39.0, 197.0], [38.0, 99.0], [41.0, 117.0], [40.0, 49.0], [42.0, 172.5], [43.0, 212.0], [44.0, 201.0], [45.0, 111.0], [47.0, 91.0], [46.0, 75.5], [50.0, 67.5], [51.0, 72.0], [52.0, 128.5], [53.0, 166.5], [55.0, 78.0], [54.0, 126.0], [57.0, 128.0], [61.0, 96.0], [60.0, 190.0], [62.0, 173.5], [66.0, 40.5], [69.0, 74.0], [70.0, 125.5], [71.0, 75.0], [73.0, 74.5], [76.0, 116.0], [82.0, 74.5], [85.0, 66.0], [84.0, 76.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.05, "minX": 1.60231098E12, "maxY": 39.083333333333336, "series": [{"data": [[1.6023111E12, 39.083333333333336], [1.60231104E12, 28.283333333333335], [1.60231116E12, 18.45], [1.60231098E12, 2.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231116E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.8833333333333333, "minX": 1.60231098E12, "maxY": 39.083333333333336, "series": [{"data": [[1.6023111E12, 39.083333333333336], [1.60231104E12, 28.283333333333335], [1.60231116E12, 18.616666666666667], [1.60231098E12, 1.8833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231116E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.8833333333333333, "minX": 1.60231098E12, "maxY": 39.083333333333336, "series": [{"data": [[1.6023111E12, 39.083333333333336], [1.60231104E12, 28.283333333333335], [1.60231116E12, 18.616666666666667], [1.60231098E12, 1.8833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231116E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.8833333333333333, "minX": 1.60231098E12, "maxY": 39.083333333333336, "series": [{"data": [[1.6023111E12, 39.083333333333336], [1.60231104E12, 28.283333333333335], [1.60231116E12, 18.616666666666667], [1.60231098E12, 1.8833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231116E12, "title": "Total Transactions Per Second"}},
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

