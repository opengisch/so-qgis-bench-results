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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 3430.0, "series": [{"data": [[0.0, 27.0], [0.1, 28.0], [0.2, 29.0], [0.3, 29.0], [0.4, 29.0], [0.5, 30.0], [0.6, 30.0], [0.7, 30.0], [0.8, 30.0], [0.9, 30.0], [1.0, 30.0], [1.1, 31.0], [1.2, 31.0], [1.3, 31.0], [1.4, 31.0], [1.5, 32.0], [1.6, 32.0], [1.7, 32.0], [1.8, 32.0], [1.9, 32.0], [2.0, 32.0], [2.1, 33.0], [2.2, 33.0], [2.3, 33.0], [2.4, 33.0], [2.5, 33.0], [2.6, 33.0], [2.7, 33.0], [2.8, 33.0], [2.9, 33.0], [3.0, 33.0], [3.1, 34.0], [3.2, 34.0], [3.3, 34.0], [3.4, 34.0], [3.5, 34.0], [3.6, 34.0], [3.7, 34.0], [3.8, 34.0], [3.9, 34.0], [4.0, 34.0], [4.1, 34.0], [4.2, 34.0], [4.3, 34.0], [4.4, 34.0], [4.5, 34.0], [4.6, 35.0], [4.7, 35.0], [4.8, 35.0], [4.9, 35.0], [5.0, 35.0], [5.1, 35.0], [5.2, 35.0], [5.3, 35.0], [5.4, 35.0], [5.5, 35.0], [5.6, 35.0], [5.7, 35.0], [5.8, 35.0], [5.9, 35.0], [6.0, 35.0], [6.1, 35.0], [6.2, 35.0], [6.3, 35.0], [6.4, 36.0], [6.5, 36.0], [6.6, 36.0], [6.7, 36.0], [6.8, 36.0], [6.9, 36.0], [7.0, 36.0], [7.1, 36.0], [7.2, 36.0], [7.3, 36.0], [7.4, 36.0], [7.5, 36.0], [7.6, 36.0], [7.7, 36.0], [7.8, 36.0], [7.9, 36.0], [8.0, 36.0], [8.1, 36.0], [8.2, 37.0], [8.3, 37.0], [8.4, 37.0], [8.5, 37.0], [8.6, 37.0], [8.7, 37.0], [8.8, 37.0], [8.9, 37.0], [9.0, 37.0], [9.1, 37.0], [9.2, 37.0], [9.3, 37.0], [9.4, 37.0], [9.5, 37.0], [9.6, 37.0], [9.7, 37.0], [9.8, 38.0], [9.9, 38.0], [10.0, 38.0], [10.1, 38.0], [10.2, 38.0], [10.3, 38.0], [10.4, 38.0], [10.5, 38.0], [10.6, 38.0], [10.7, 38.0], [10.8, 38.0], [10.9, 38.0], [11.0, 38.0], [11.1, 38.0], [11.2, 38.0], [11.3, 38.0], [11.4, 39.0], [11.5, 39.0], [11.6, 39.0], [11.7, 39.0], [11.8, 39.0], [11.9, 39.0], [12.0, 39.0], [12.1, 39.0], [12.2, 39.0], [12.3, 39.0], [12.4, 39.0], [12.5, 39.0], [12.6, 39.0], [12.7, 39.0], [12.8, 39.0], [12.9, 39.0], [13.0, 39.0], [13.1, 39.0], [13.2, 40.0], [13.3, 40.0], [13.4, 40.0], [13.5, 40.0], [13.6, 40.0], [13.7, 40.0], [13.8, 40.0], [13.9, 40.0], [14.0, 40.0], [14.1, 40.0], [14.2, 40.0], [14.3, 40.0], [14.4, 40.0], [14.5, 41.0], [14.6, 41.0], [14.7, 41.0], [14.8, 41.0], [14.9, 41.0], [15.0, 41.0], [15.1, 41.0], [15.2, 41.0], [15.3, 41.0], [15.4, 41.0], [15.5, 41.0], [15.6, 41.0], [15.7, 41.0], [15.8, 42.0], [15.9, 42.0], [16.0, 42.0], [16.1, 42.0], [16.2, 42.0], [16.3, 42.0], [16.4, 42.0], [16.5, 42.0], [16.6, 42.0], [16.7, 43.0], [16.8, 43.0], [16.9, 43.0], [17.0, 43.0], [17.1, 43.0], [17.2, 43.0], [17.3, 43.0], [17.4, 44.0], [17.5, 44.0], [17.6, 44.0], [17.7, 44.0], [17.8, 44.0], [17.9, 44.0], [18.0, 44.0], [18.1, 44.0], [18.2, 45.0], [18.3, 45.0], [18.4, 45.0], [18.5, 45.0], [18.6, 45.0], [18.7, 45.0], [18.8, 45.0], [18.9, 45.0], [19.0, 46.0], [19.1, 46.0], [19.2, 46.0], [19.3, 46.0], [19.4, 47.0], [19.5, 47.0], [19.6, 47.0], [19.7, 47.0], [19.8, 47.0], [19.9, 48.0], [20.0, 48.0], [20.1, 48.0], [20.2, 48.0], [20.3, 49.0], [20.4, 49.0], [20.5, 49.0], [20.6, 49.0], [20.7, 49.0], [20.8, 50.0], [20.9, 50.0], [21.0, 51.0], [21.1, 51.0], [21.2, 51.0], [21.3, 52.0], [21.4, 53.0], [21.5, 53.0], [21.6, 53.0], [21.7, 54.0], [21.8, 54.0], [21.9, 54.0], [22.0, 54.0], [22.1, 55.0], [22.2, 55.0], [22.3, 55.0], [22.4, 56.0], [22.5, 56.0], [22.6, 57.0], [22.7, 57.0], [22.8, 57.0], [22.9, 57.0], [23.0, 58.0], [23.1, 58.0], [23.2, 58.0], [23.3, 58.0], [23.4, 59.0], [23.5, 59.0], [23.6, 59.0], [23.7, 59.0], [23.8, 59.0], [23.9, 60.0], [24.0, 60.0], [24.1, 60.0], [24.2, 61.0], [24.3, 61.0], [24.4, 61.0], [24.5, 61.0], [24.6, 61.0], [24.7, 62.0], [24.8, 62.0], [24.9, 62.0], [25.0, 62.0], [25.1, 62.0], [25.2, 62.0], [25.3, 62.0], [25.4, 62.0], [25.5, 63.0], [25.6, 63.0], [25.7, 63.0], [25.8, 63.0], [25.9, 63.0], [26.0, 63.0], [26.1, 63.0], [26.2, 64.0], [26.3, 64.0], [26.4, 64.0], [26.5, 64.0], [26.6, 64.0], [26.7, 64.0], [26.8, 65.0], [26.9, 65.0], [27.0, 65.0], [27.1, 65.0], [27.2, 65.0], [27.3, 66.0], [27.4, 66.0], [27.5, 66.0], [27.6, 66.0], [27.7, 66.0], [27.8, 66.0], [27.9, 66.0], [28.0, 67.0], [28.1, 67.0], [28.2, 67.0], [28.3, 67.0], [28.4, 67.0], [28.5, 67.0], [28.6, 67.0], [28.7, 68.0], [28.8, 68.0], [28.9, 68.0], [29.0, 68.0], [29.1, 68.0], [29.2, 68.0], [29.3, 68.0], [29.4, 69.0], [29.5, 69.0], [29.6, 69.0], [29.7, 69.0], [29.8, 69.0], [29.9, 69.0], [30.0, 70.0], [30.1, 70.0], [30.2, 70.0], [30.3, 70.0], [30.4, 70.0], [30.5, 70.0], [30.6, 70.0], [30.7, 70.0], [30.8, 71.0], [30.9, 71.0], [31.0, 71.0], [31.1, 71.0], [31.2, 71.0], [31.3, 71.0], [31.4, 71.0], [31.5, 71.0], [31.6, 71.0], [31.7, 72.0], [31.8, 72.0], [31.9, 72.0], [32.0, 72.0], [32.1, 72.0], [32.2, 72.0], [32.3, 72.0], [32.4, 72.0], [32.5, 73.0], [32.6, 73.0], [32.7, 73.0], [32.8, 73.0], [32.9, 73.0], [33.0, 73.0], [33.1, 73.0], [33.2, 73.0], [33.3, 73.0], [33.4, 73.0], [33.5, 74.0], [33.6, 74.0], [33.7, 74.0], [33.8, 74.0], [33.9, 74.0], [34.0, 74.0], [34.1, 74.0], [34.2, 74.0], [34.3, 74.0], [34.4, 75.0], [34.5, 75.0], [34.6, 75.0], [34.7, 75.0], [34.8, 75.0], [34.9, 75.0], [35.0, 75.0], [35.1, 76.0], [35.2, 76.0], [35.3, 76.0], [35.4, 76.0], [35.5, 76.0], [35.6, 76.0], [35.7, 77.0], [35.8, 77.0], [35.9, 77.0], [36.0, 77.0], [36.1, 77.0], [36.2, 77.0], [36.3, 78.0], [36.4, 78.0], [36.5, 78.0], [36.6, 78.0], [36.7, 78.0], [36.8, 78.0], [36.9, 79.0], [37.0, 79.0], [37.1, 79.0], [37.2, 79.0], [37.3, 79.0], [37.4, 79.0], [37.5, 80.0], [37.6, 80.0], [37.7, 80.0], [37.8, 80.0], [37.9, 80.0], [38.0, 80.0], [38.1, 81.0], [38.2, 81.0], [38.3, 82.0], [38.4, 82.0], [38.5, 82.0], [38.6, 83.0], [38.7, 83.0], [38.8, 83.0], [38.9, 83.0], [39.0, 83.0], [39.1, 84.0], [39.2, 84.0], [39.3, 84.0], [39.4, 85.0], [39.5, 85.0], [39.6, 85.0], [39.7, 85.0], [39.8, 86.0], [39.9, 86.0], [40.0, 87.0], [40.1, 87.0], [40.2, 88.0], [40.3, 88.0], [40.4, 89.0], [40.5, 89.0], [40.6, 89.0], [40.7, 90.0], [40.8, 91.0], [40.9, 91.0], [41.0, 92.0], [41.1, 93.0], [41.2, 93.0], [41.3, 95.0], [41.4, 95.0], [41.5, 96.0], [41.6, 96.0], [41.7, 98.0], [41.8, 98.0], [41.9, 99.0], [42.0, 100.0], [42.1, 101.0], [42.2, 102.0], [42.3, 102.0], [42.4, 103.0], [42.5, 104.0], [42.6, 105.0], [42.7, 105.0], [42.8, 106.0], [42.9, 107.0], [43.0, 107.0], [43.1, 108.0], [43.2, 109.0], [43.3, 110.0], [43.4, 110.0], [43.5, 112.0], [43.6, 112.0], [43.7, 113.0], [43.8, 113.0], [43.9, 113.0], [44.0, 114.0], [44.1, 115.0], [44.2, 116.0], [44.3, 116.0], [44.4, 117.0], [44.5, 118.0], [44.6, 118.0], [44.7, 119.0], [44.8, 119.0], [44.9, 120.0], [45.0, 120.0], [45.1, 121.0], [45.2, 122.0], [45.3, 122.0], [45.4, 123.0], [45.5, 124.0], [45.6, 125.0], [45.7, 126.0], [45.8, 126.0], [45.9, 127.0], [46.0, 127.0], [46.1, 128.0], [46.2, 128.0], [46.3, 129.0], [46.4, 130.0], [46.5, 130.0], [46.6, 131.0], [46.7, 132.0], [46.8, 132.0], [46.9, 133.0], [47.0, 133.0], [47.1, 134.0], [47.2, 134.0], [47.3, 135.0], [47.4, 135.0], [47.5, 136.0], [47.6, 136.0], [47.7, 137.0], [47.8, 138.0], [47.9, 139.0], [48.0, 140.0], [48.1, 141.0], [48.2, 141.0], [48.3, 143.0], [48.4, 143.0], [48.5, 144.0], [48.6, 145.0], [48.7, 146.0], [48.8, 149.0], [48.9, 150.0], [49.0, 150.0], [49.1, 152.0], [49.2, 152.0], [49.3, 153.0], [49.4, 155.0], [49.5, 156.0], [49.6, 157.0], [49.7, 160.0], [49.8, 161.0], [49.9, 163.0], [50.0, 163.0], [50.1, 165.0], [50.2, 166.0], [50.3, 166.0], [50.4, 167.0], [50.5, 168.0], [50.6, 169.0], [50.7, 171.0], [50.8, 172.0], [50.9, 172.0], [51.0, 174.0], [51.1, 175.0], [51.2, 176.0], [51.3, 177.0], [51.4, 178.0], [51.5, 179.0], [51.6, 180.0], [51.7, 181.0], [51.8, 182.0], [51.9, 182.0], [52.0, 183.0], [52.1, 184.0], [52.2, 185.0], [52.3, 185.0], [52.4, 186.0], [52.5, 186.0], [52.6, 187.0], [52.7, 188.0], [52.8, 189.0], [52.9, 190.0], [53.0, 191.0], [53.1, 192.0], [53.2, 193.0], [53.3, 194.0], [53.4, 195.0], [53.5, 196.0], [53.6, 197.0], [53.7, 198.0], [53.8, 199.0], [53.9, 199.0], [54.0, 200.0], [54.1, 201.0], [54.2, 202.0], [54.3, 203.0], [54.4, 205.0], [54.5, 205.0], [54.6, 206.0], [54.7, 206.0], [54.8, 207.0], [54.9, 207.0], [55.0, 208.0], [55.1, 208.0], [55.2, 209.0], [55.3, 210.0], [55.4, 210.0], [55.5, 211.0], [55.6, 212.0], [55.7, 213.0], [55.8, 214.0], [55.9, 215.0], [56.0, 216.0], [56.1, 217.0], [56.2, 218.0], [56.3, 220.0], [56.4, 221.0], [56.5, 221.0], [56.6, 223.0], [56.7, 224.0], [56.8, 224.0], [56.9, 225.0], [57.0, 226.0], [57.1, 226.0], [57.2, 227.0], [57.3, 227.0], [57.4, 228.0], [57.5, 229.0], [57.6, 230.0], [57.7, 231.0], [57.8, 232.0], [57.9, 233.0], [58.0, 234.0], [58.1, 235.0], [58.2, 236.0], [58.3, 237.0], [58.4, 238.0], [58.5, 239.0], [58.6, 240.0], [58.7, 241.0], [58.8, 241.0], [58.9, 242.0], [59.0, 243.0], [59.1, 245.0], [59.2, 246.0], [59.3, 247.0], [59.4, 247.0], [59.5, 248.0], [59.6, 249.0], [59.7, 250.0], [59.8, 250.0], [59.9, 251.0], [60.0, 252.0], [60.1, 253.0], [60.2, 254.0], [60.3, 255.0], [60.4, 256.0], [60.5, 257.0], [60.6, 257.0], [60.7, 258.0], [60.8, 260.0], [60.9, 261.0], [61.0, 261.0], [61.1, 262.0], [61.2, 263.0], [61.3, 264.0], [61.4, 265.0], [61.5, 267.0], [61.6, 268.0], [61.7, 270.0], [61.8, 270.0], [61.9, 271.0], [62.0, 273.0], [62.1, 273.0], [62.2, 275.0], [62.3, 276.0], [62.4, 276.0], [62.5, 277.0], [62.6, 277.0], [62.7, 279.0], [62.8, 280.0], [62.9, 282.0], [63.0, 282.0], [63.1, 283.0], [63.2, 284.0], [63.3, 285.0], [63.4, 286.0], [63.5, 288.0], [63.6, 288.0], [63.7, 290.0], [63.8, 290.0], [63.9, 292.0], [64.0, 294.0], [64.1, 296.0], [64.2, 297.0], [64.3, 298.0], [64.4, 299.0], [64.5, 299.0], [64.6, 301.0], [64.7, 302.0], [64.8, 303.0], [64.9, 304.0], [65.0, 305.0], [65.1, 307.0], [65.2, 308.0], [65.3, 309.0], [65.4, 310.0], [65.5, 311.0], [65.6, 311.0], [65.7, 312.0], [65.8, 313.0], [65.9, 314.0], [66.0, 315.0], [66.1, 318.0], [66.2, 320.0], [66.3, 322.0], [66.4, 324.0], [66.5, 325.0], [66.6, 327.0], [66.7, 328.0], [66.8, 328.0], [66.9, 329.0], [67.0, 330.0], [67.1, 332.0], [67.2, 333.0], [67.3, 334.0], [67.4, 337.0], [67.5, 337.0], [67.6, 339.0], [67.7, 340.0], [67.8, 342.0], [67.9, 343.0], [68.0, 344.0], [68.1, 346.0], [68.2, 347.0], [68.3, 349.0], [68.4, 350.0], [68.5, 351.0], [68.6, 352.0], [68.7, 353.0], [68.8, 356.0], [68.9, 358.0], [69.0, 359.0], [69.1, 360.0], [69.2, 362.0], [69.3, 363.0], [69.4, 365.0], [69.5, 367.0], [69.6, 368.0], [69.7, 370.0], [69.8, 371.0], [69.9, 374.0], [70.0, 375.0], [70.1, 375.0], [70.2, 377.0], [70.3, 378.0], [70.4, 379.0], [70.5, 380.0], [70.6, 381.0], [70.7, 382.0], [70.8, 383.0], [70.9, 384.0], [71.0, 385.0], [71.1, 387.0], [71.2, 389.0], [71.3, 390.0], [71.4, 390.0], [71.5, 391.0], [71.6, 393.0], [71.7, 394.0], [71.8, 396.0], [71.9, 397.0], [72.0, 399.0], [72.1, 400.0], [72.2, 401.0], [72.3, 401.0], [72.4, 403.0], [72.5, 405.0], [72.6, 408.0], [72.7, 408.0], [72.8, 410.0], [72.9, 411.0], [73.0, 414.0], [73.1, 415.0], [73.2, 416.0], [73.3, 419.0], [73.4, 419.0], [73.5, 421.0], [73.6, 422.0], [73.7, 426.0], [73.8, 427.0], [73.9, 428.0], [74.0, 430.0], [74.1, 432.0], [74.2, 433.0], [74.3, 435.0], [74.4, 437.0], [74.5, 438.0], [74.6, 439.0], [74.7, 440.0], [74.8, 442.0], [74.9, 443.0], [75.0, 444.0], [75.1, 445.0], [75.2, 446.0], [75.3, 447.0], [75.4, 448.0], [75.5, 449.0], [75.6, 451.0], [75.7, 452.0], [75.8, 453.0], [75.9, 455.0], [76.0, 456.0], [76.1, 457.0], [76.2, 463.0], [76.3, 465.0], [76.4, 466.0], [76.5, 468.0], [76.6, 470.0], [76.7, 471.0], [76.8, 474.0], [76.9, 476.0], [77.0, 477.0], [77.1, 478.0], [77.2, 480.0], [77.3, 483.0], [77.4, 485.0], [77.5, 486.0], [77.6, 488.0], [77.7, 490.0], [77.8, 492.0], [77.9, 494.0], [78.0, 497.0], [78.1, 501.0], [78.2, 502.0], [78.3, 503.0], [78.4, 504.0], [78.5, 505.0], [78.6, 506.0], [78.7, 508.0], [78.8, 510.0], [78.9, 510.0], [79.0, 512.0], [79.1, 514.0], [79.2, 515.0], [79.3, 517.0], [79.4, 518.0], [79.5, 521.0], [79.6, 522.0], [79.7, 523.0], [79.8, 524.0], [79.9, 525.0], [80.0, 527.0], [80.1, 529.0], [80.2, 530.0], [80.3, 531.0], [80.4, 532.0], [80.5, 534.0], [80.6, 536.0], [80.7, 537.0], [80.8, 538.0], [80.9, 541.0], [81.0, 542.0], [81.1, 544.0], [81.2, 547.0], [81.3, 549.0], [81.4, 550.0], [81.5, 552.0], [81.6, 553.0], [81.7, 555.0], [81.8, 556.0], [81.9, 557.0], [82.0, 558.0], [82.1, 559.0], [82.2, 561.0], [82.3, 563.0], [82.4, 565.0], [82.5, 566.0], [82.6, 568.0], [82.7, 571.0], [82.8, 573.0], [82.9, 576.0], [83.0, 578.0], [83.1, 581.0], [83.2, 584.0], [83.3, 585.0], [83.4, 590.0], [83.5, 592.0], [83.6, 593.0], [83.7, 596.0], [83.8, 598.0], [83.9, 600.0], [84.0, 602.0], [84.1, 603.0], [84.2, 606.0], [84.3, 608.0], [84.4, 609.0], [84.5, 611.0], [84.6, 614.0], [84.7, 615.0], [84.8, 616.0], [84.9, 618.0], [85.0, 621.0], [85.1, 624.0], [85.2, 626.0], [85.3, 629.0], [85.4, 630.0], [85.5, 632.0], [85.6, 634.0], [85.7, 639.0], [85.8, 641.0], [85.9, 644.0], [86.0, 645.0], [86.1, 648.0], [86.2, 652.0], [86.3, 655.0], [86.4, 658.0], [86.5, 660.0], [86.6, 661.0], [86.7, 664.0], [86.8, 665.0], [86.9, 666.0], [87.0, 669.0], [87.1, 672.0], [87.2, 675.0], [87.3, 676.0], [87.4, 678.0], [87.5, 682.0], [87.6, 684.0], [87.7, 686.0], [87.8, 690.0], [87.9, 693.0], [88.0, 695.0], [88.1, 698.0], [88.2, 700.0], [88.3, 706.0], [88.4, 707.0], [88.5, 710.0], [88.6, 715.0], [88.7, 718.0], [88.8, 720.0], [88.9, 723.0], [89.0, 727.0], [89.1, 732.0], [89.2, 736.0], [89.3, 738.0], [89.4, 741.0], [89.5, 743.0], [89.6, 745.0], [89.7, 747.0], [89.8, 749.0], [89.9, 755.0], [90.0, 758.0], [90.1, 764.0], [90.2, 767.0], [90.3, 768.0], [90.4, 772.0], [90.5, 777.0], [90.6, 783.0], [90.7, 788.0], [90.8, 794.0], [90.9, 799.0], [91.0, 806.0], [91.1, 807.0], [91.2, 810.0], [91.3, 813.0], [91.4, 817.0], [91.5, 821.0], [91.6, 824.0], [91.7, 828.0], [91.8, 831.0], [91.9, 835.0], [92.0, 841.0], [92.1, 843.0], [92.2, 849.0], [92.3, 853.0], [92.4, 856.0], [92.5, 861.0], [92.6, 866.0], [92.7, 872.0], [92.8, 876.0], [92.9, 881.0], [93.0, 887.0], [93.1, 895.0], [93.2, 899.0], [93.3, 909.0], [93.4, 912.0], [93.5, 915.0], [93.6, 922.0], [93.7, 931.0], [93.8, 939.0], [93.9, 949.0], [94.0, 955.0], [94.1, 964.0], [94.2, 968.0], [94.3, 974.0], [94.4, 981.0], [94.5, 985.0], [94.6, 991.0], [94.7, 996.0], [94.8, 999.0], [94.9, 1009.0], [95.0, 1014.0], [95.1, 1019.0], [95.2, 1027.0], [95.3, 1040.0], [95.4, 1042.0], [95.5, 1054.0], [95.6, 1066.0], [95.7, 1075.0], [95.8, 1090.0], [95.9, 1097.0], [96.0, 1099.0], [96.1, 1118.0], [96.2, 1120.0], [96.3, 1129.0], [96.4, 1136.0], [96.5, 1149.0], [96.6, 1162.0], [96.7, 1171.0], [96.8, 1178.0], [96.9, 1184.0], [97.0, 1210.0], [97.1, 1224.0], [97.2, 1236.0], [97.3, 1242.0], [97.4, 1256.0], [97.5, 1265.0], [97.6, 1277.0], [97.7, 1302.0], [97.8, 1310.0], [97.9, 1327.0], [98.0, 1342.0], [98.1, 1372.0], [98.2, 1406.0], [98.3, 1422.0], [98.4, 1432.0], [98.5, 1445.0], [98.6, 1478.0], [98.7, 1488.0], [98.8, 1508.0], [98.9, 1573.0], [99.0, 1635.0], [99.1, 1672.0], [99.2, 1762.0], [99.3, 1843.0], [99.4, 1886.0], [99.5, 1959.0], [99.6, 2047.0], [99.7, 2175.0], [99.8, 2296.0], [99.9, 2430.0], [100.0, 3430.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2212.0, "series": [{"data": [[0.0, 2212.0], [600.0, 226.0], [700.0, 144.0], [800.0, 121.0], [900.0, 84.0], [1000.0, 64.0], [1100.0, 50.0], [1200.0, 37.0], [1300.0, 26.0], [1400.0, 30.0], [1500.0, 10.0], [100.0, 631.0], [1600.0, 11.0], [1700.0, 7.0], [1800.0, 9.0], [1900.0, 7.0], [2000.0, 2.0], [2100.0, 6.0], [2200.0, 5.0], [2300.0, 1.0], [2400.0, 4.0], [2500.0, 1.0], [2700.0, 1.0], [3000.0, 1.0], [200.0, 559.0], [3400.0, 2.0], [300.0, 397.0], [400.0, 316.0], [500.0, 308.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 66.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4116.0, "series": [{"data": [[0.0, 4116.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1090.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 66.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.924623115577887, "minX": 1.60218924E12, "maxY": 10.0, "series": [{"data": [[1.60218936E12, 10.0], [1.60218924E12, 9.953098827470695], [1.60218942E12, 9.924623115577887], [1.6021893E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218942E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 303.1280928816148, "minX": 1.0, "maxY": 3430.0, "series": [{"data": [[8.0, 619.5], [4.0, 1327.0], [2.0, 3416.0], [1.0, 3097.0], [9.0, 482.0], [5.0, 858.3333333333334], [10.0, 303.1280928816148], [3.0, 1155.0], [6.0, 3430.0], [7.0, 845.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986153262518927, 306.23899848254933]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5108.5, "minX": 1.60218924E12, "maxY": 1756982.0, "series": [{"data": [[1.60218936E12, 1646728.4333333333], [1.60218924E12, 332035.2], [1.60218942E12, 555912.6166666667], [1.6021893E12, 1756982.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218936E12, 18900.033333333333], [1.60218924E12, 5108.5], [1.60218942E12, 5275.3], [1.6021893E12, 16295.716666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218942E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 276.06669733210623, "minX": 1.60218924E12, "maxY": 402.01842546063637, "series": [{"data": [[1.60218936E12, 276.06669733210623], [1.60218924E12, 295.20603015075335], [1.60218942E12, 402.01842546063637], [1.6021893E12, 314.1176470588228]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218942E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 275.7368905243793, "minX": 1.60218924E12, "maxY": 401.5879396984928, "series": [{"data": [[1.60218936E12, 275.7368905243793], [1.60218924E12, 294.9329983249578], [1.60218942E12, 401.5879396984928], [1.6021893E12, 313.688550420168]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218942E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008375209380234502, "minX": 1.60218924E12, "maxY": 0.15912897822445574, "series": [{"data": [[1.60218936E12, 0.00965961361545539], [1.60218924E12, 0.15912897822445574], [1.60218942E12, 0.008375209380234502], [1.6021893E12, 0.010504201680672298]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218942E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.60218924E12, "maxY": 3430.0, "series": [{"data": [[1.60218936E12, 1977.0], [1.60218924E12, 1163.0], [1.60218942E12, 3430.0], [1.6021893E12, 2417.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218936E12, 29.0], [1.60218924E12, 31.0], [1.60218942E12, 32.38199985742569], [1.6021893E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218936E12, 30.0], [1.60218924E12, 31.0], [1.60218942E12, 32.920200057029724], [1.6021893E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218936E12, 29.662499740719795], [1.60218924E12, 31.0], [1.60218942E12, 32.68099992871284], [1.6021893E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218936E12, 28.0], [1.60218924E12, 30.0], [1.60218942E12, 28.0], [1.6021893E12, 27.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218936E12, 151.0], [1.60218924E12, 197.0], [1.60218942E12, 212.0], [1.6021893E12, 152.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218942E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 48.0, "minX": 1.0, "maxY": 3097.0, "series": [{"data": [[2.0, 1155.0], [5.0, 1222.5], [6.0, 1152.5], [7.0, 601.0], [8.0, 840.5], [9.0, 1042.0], [10.0, 897.0], [11.0, 750.5], [12.0, 654.0], [13.0, 655.0], [14.0, 752.0], [15.0, 611.0], [16.0, 558.5], [17.0, 403.5], [18.0, 544.5], [19.0, 502.0], [20.0, 422.5], [21.0, 390.0], [22.0, 435.0], [23.0, 384.0], [24.0, 416.0], [25.0, 278.5], [26.0, 303.5], [27.0, 184.0], [28.0, 266.5], [29.0, 281.0], [30.0, 221.0], [31.0, 208.0], [32.0, 264.5], [33.0, 73.5], [34.0, 116.0], [37.0, 185.0], [36.0, 74.0], [38.0, 170.0], [41.0, 69.0], [42.0, 82.0], [43.0, 209.0], [45.0, 126.0], [44.0, 126.5], [46.0, 220.0], [48.0, 115.5], [49.0, 178.0], [50.0, 151.5], [51.0, 89.0], [52.0, 130.0], [53.0, 137.0], [54.0, 61.5], [55.0, 74.0], [59.0, 102.0], [58.0, 73.0], [60.0, 72.0], [61.0, 90.0], [63.0, 48.0], [65.0, 75.5], [67.0, 65.0], [69.0, 139.0], [73.0, 75.0], [74.0, 74.5], [76.0, 112.0], [82.0, 110.5], [80.0, 60.0], [83.0, 76.0], [84.0, 62.0], [87.0, 101.0], [89.0, 79.0], [96.0, 62.0], [1.0, 3097.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 48.0, "minX": 1.0, "maxY": 3097.0, "series": [{"data": [[2.0, 1153.0], [5.0, 1222.0], [6.0, 1151.0], [7.0, 600.0], [8.0, 837.0], [9.0, 1038.0], [10.0, 893.5], [11.0, 749.0], [12.0, 653.5], [13.0, 653.0], [14.0, 752.0], [15.0, 608.0], [16.0, 557.5], [17.0, 401.0], [18.0, 543.0], [19.0, 500.0], [20.0, 421.5], [21.0, 389.0], [22.0, 433.5], [23.0, 384.0], [24.0, 414.5], [25.0, 276.0], [26.0, 302.5], [27.0, 184.0], [28.0, 266.5], [29.0, 279.5], [30.0, 220.0], [31.0, 207.0], [32.0, 264.0], [33.0, 73.5], [34.0, 116.0], [37.0, 185.0], [36.0, 74.0], [38.0, 169.5], [41.0, 69.0], [42.0, 82.0], [43.0, 209.0], [45.0, 126.0], [44.0, 126.5], [46.0, 220.0], [48.0, 115.5], [49.0, 178.0], [50.0, 151.5], [51.0, 89.0], [52.0, 130.0], [53.0, 137.0], [54.0, 61.0], [55.0, 74.0], [59.0, 102.0], [58.0, 73.0], [60.0, 72.0], [61.0, 90.0], [63.0, 48.0], [65.0, 75.5], [67.0, 65.0], [69.0, 138.0], [73.0, 74.5], [74.0, 74.5], [76.0, 112.0], [82.0, 110.5], [80.0, 60.0], [83.0, 76.0], [84.0, 62.0], [87.0, 101.0], [89.0, 78.0], [96.0, 61.5], [1.0, 3097.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.783333333333333, "minX": 1.60218924E12, "maxY": 36.233333333333334, "series": [{"data": [[1.60218936E12, 36.233333333333334], [1.60218924E12, 10.116666666666667], [1.60218942E12, 9.783333333333333], [1.6021893E12, 31.733333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218942E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.95, "minX": 1.60218924E12, "maxY": 36.233333333333334, "series": [{"data": [[1.60218936E12, 36.233333333333334], [1.60218924E12, 9.95], [1.60218942E12, 9.95], [1.6021893E12, 31.733333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218942E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.95, "minX": 1.60218924E12, "maxY": 36.233333333333334, "series": [{"data": [[1.60218936E12, 36.233333333333334], [1.60218924E12, 9.95], [1.60218942E12, 9.95], [1.6021893E12, 31.733333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218942E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.95, "minX": 1.60218924E12, "maxY": 36.233333333333334, "series": [{"data": [[1.60218936E12, 36.233333333333334], [1.60218924E12, 9.95], [1.60218942E12, 9.95], [1.6021893E12, 31.733333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218942E12, "title": "Total Transactions Per Second"}},
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

