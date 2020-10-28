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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 3589.0, "series": [{"data": [[0.0, 30.0], [0.1, 31.0], [0.2, 31.0], [0.3, 32.0], [0.4, 32.0], [0.5, 32.0], [0.6, 32.0], [0.7, 33.0], [0.8, 33.0], [0.9, 34.0], [1.0, 34.0], [1.1, 34.0], [1.2, 34.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 35.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 36.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 37.0], [3.7, 37.0], [3.8, 37.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 38.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 40.0], [8.2, 40.0], [8.3, 40.0], [8.4, 40.0], [8.5, 40.0], [8.6, 40.0], [8.7, 40.0], [8.8, 40.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 41.0], [9.6, 41.0], [9.7, 41.0], [9.8, 41.0], [9.9, 41.0], [10.0, 41.0], [10.1, 41.0], [10.2, 41.0], [10.3, 41.0], [10.4, 41.0], [10.5, 41.0], [10.6, 41.0], [10.7, 42.0], [10.8, 42.0], [10.9, 42.0], [11.0, 42.0], [11.1, 42.0], [11.2, 42.0], [11.3, 42.0], [11.4, 42.0], [11.5, 42.0], [11.6, 42.0], [11.7, 42.0], [11.8, 42.0], [11.9, 42.0], [12.0, 42.0], [12.1, 42.0], [12.2, 42.0], [12.3, 42.0], [12.4, 43.0], [12.5, 43.0], [12.6, 43.0], [12.7, 43.0], [12.8, 43.0], [12.9, 43.0], [13.0, 43.0], [13.1, 43.0], [13.2, 43.0], [13.3, 43.0], [13.4, 43.0], [13.5, 43.0], [13.6, 43.0], [13.7, 43.0], [13.8, 44.0], [13.9, 44.0], [14.0, 44.0], [14.1, 44.0], [14.2, 44.0], [14.3, 44.0], [14.4, 44.0], [14.5, 44.0], [14.6, 44.0], [14.7, 44.0], [14.8, 44.0], [14.9, 44.0], [15.0, 44.0], [15.1, 44.0], [15.2, 44.0], [15.3, 44.0], [15.4, 45.0], [15.5, 45.0], [15.6, 45.0], [15.7, 45.0], [15.8, 45.0], [15.9, 45.0], [16.0, 45.0], [16.1, 45.0], [16.2, 45.0], [16.3, 45.0], [16.4, 45.0], [16.5, 45.0], [16.6, 45.0], [16.7, 45.0], [16.8, 46.0], [16.9, 46.0], [17.0, 46.0], [17.1, 46.0], [17.2, 46.0], [17.3, 46.0], [17.4, 46.0], [17.5, 46.0], [17.6, 46.0], [17.7, 46.0], [17.8, 46.0], [17.9, 47.0], [18.0, 47.0], [18.1, 47.0], [18.2, 47.0], [18.3, 47.0], [18.4, 47.0], [18.5, 47.0], [18.6, 47.0], [18.7, 47.0], [18.8, 47.0], [18.9, 47.0], [19.0, 48.0], [19.1, 48.0], [19.2, 48.0], [19.3, 48.0], [19.4, 48.0], [19.5, 48.0], [19.6, 48.0], [19.7, 48.0], [19.8, 49.0], [19.9, 49.0], [20.0, 49.0], [20.1, 49.0], [20.2, 49.0], [20.3, 49.0], [20.4, 49.0], [20.5, 49.0], [20.6, 50.0], [20.7, 50.0], [20.8, 50.0], [20.9, 50.0], [21.0, 50.0], [21.1, 50.0], [21.2, 50.0], [21.3, 50.0], [21.4, 51.0], [21.5, 51.0], [21.6, 51.0], [21.7, 51.0], [21.8, 51.0], [21.9, 51.0], [22.0, 52.0], [22.1, 52.0], [22.2, 52.0], [22.3, 52.0], [22.4, 53.0], [22.5, 53.0], [22.6, 53.0], [22.7, 53.0], [22.8, 53.0], [22.9, 53.0], [23.0, 54.0], [23.1, 54.0], [23.2, 54.0], [23.3, 54.0], [23.4, 54.0], [23.5, 55.0], [23.6, 55.0], [23.7, 55.0], [23.8, 55.0], [23.9, 56.0], [24.0, 56.0], [24.1, 56.0], [24.2, 57.0], [24.3, 57.0], [24.4, 57.0], [24.5, 58.0], [24.6, 58.0], [24.7, 58.0], [24.8, 58.0], [24.9, 59.0], [25.0, 59.0], [25.1, 59.0], [25.2, 59.0], [25.3, 60.0], [25.4, 60.0], [25.5, 60.0], [25.6, 60.0], [25.7, 60.0], [25.8, 61.0], [25.9, 61.0], [26.0, 61.0], [26.1, 61.0], [26.2, 61.0], [26.3, 62.0], [26.4, 62.0], [26.5, 62.0], [26.6, 62.0], [26.7, 62.0], [26.8, 63.0], [26.9, 63.0], [27.0, 63.0], [27.1, 63.0], [27.2, 63.0], [27.3, 63.0], [27.4, 64.0], [27.5, 64.0], [27.6, 64.0], [27.7, 65.0], [27.8, 65.0], [27.9, 65.0], [28.0, 65.0], [28.1, 66.0], [28.2, 66.0], [28.3, 66.0], [28.4, 66.0], [28.5, 66.0], [28.6, 67.0], [28.7, 67.0], [28.8, 67.0], [28.9, 67.0], [29.0, 67.0], [29.1, 68.0], [29.2, 68.0], [29.3, 68.0], [29.4, 68.0], [29.5, 68.0], [29.6, 68.0], [29.7, 68.0], [29.8, 69.0], [29.9, 69.0], [30.0, 69.0], [30.1, 69.0], [30.2, 69.0], [30.3, 70.0], [30.4, 70.0], [30.5, 70.0], [30.6, 70.0], [30.7, 70.0], [30.8, 71.0], [30.9, 71.0], [31.0, 71.0], [31.1, 71.0], [31.2, 72.0], [31.3, 72.0], [31.4, 72.0], [31.5, 72.0], [31.6, 73.0], [31.7, 73.0], [31.8, 73.0], [31.9, 73.0], [32.0, 73.0], [32.1, 74.0], [32.2, 74.0], [32.3, 74.0], [32.4, 74.0], [32.5, 74.0], [32.6, 75.0], [32.7, 75.0], [32.8, 75.0], [32.9, 75.0], [33.0, 75.0], [33.1, 76.0], [33.2, 76.0], [33.3, 76.0], [33.4, 76.0], [33.5, 76.0], [33.6, 76.0], [33.7, 76.0], [33.8, 77.0], [33.9, 77.0], [34.0, 77.0], [34.1, 77.0], [34.2, 77.0], [34.3, 77.0], [34.4, 78.0], [34.5, 78.0], [34.6, 78.0], [34.7, 78.0], [34.8, 78.0], [34.9, 78.0], [35.0, 79.0], [35.1, 79.0], [35.2, 79.0], [35.3, 79.0], [35.4, 79.0], [35.5, 80.0], [35.6, 80.0], [35.7, 80.0], [35.8, 80.0], [35.9, 80.0], [36.0, 81.0], [36.1, 81.0], [36.2, 81.0], [36.3, 81.0], [36.4, 81.0], [36.5, 81.0], [36.6, 82.0], [36.7, 82.0], [36.8, 82.0], [36.9, 82.0], [37.0, 82.0], [37.1, 82.0], [37.2, 83.0], [37.3, 83.0], [37.4, 83.0], [37.5, 83.0], [37.6, 84.0], [37.7, 84.0], [37.8, 84.0], [37.9, 84.0], [38.0, 85.0], [38.1, 85.0], [38.2, 85.0], [38.3, 85.0], [38.4, 86.0], [38.5, 86.0], [38.6, 86.0], [38.7, 87.0], [38.8, 87.0], [38.9, 87.0], [39.0, 87.0], [39.1, 88.0], [39.2, 88.0], [39.3, 88.0], [39.4, 88.0], [39.5, 89.0], [39.6, 89.0], [39.7, 90.0], [39.8, 90.0], [39.9, 90.0], [40.0, 90.0], [40.1, 91.0], [40.2, 91.0], [40.3, 91.0], [40.4, 92.0], [40.5, 93.0], [40.6, 93.0], [40.7, 94.0], [40.8, 94.0], [40.9, 94.0], [41.0, 95.0], [41.1, 95.0], [41.2, 96.0], [41.3, 97.0], [41.4, 98.0], [41.5, 99.0], [41.6, 99.0], [41.7, 100.0], [41.8, 102.0], [41.9, 102.0], [42.0, 103.0], [42.1, 104.0], [42.2, 105.0], [42.3, 106.0], [42.4, 108.0], [42.5, 109.0], [42.6, 110.0], [42.7, 111.0], [42.8, 112.0], [42.9, 114.0], [43.0, 114.0], [43.1, 115.0], [43.2, 116.0], [43.3, 116.0], [43.4, 118.0], [43.5, 118.0], [43.6, 118.0], [43.7, 119.0], [43.8, 119.0], [43.9, 119.0], [44.0, 120.0], [44.1, 120.0], [44.2, 121.0], [44.3, 121.0], [44.4, 122.0], [44.5, 122.0], [44.6, 123.0], [44.7, 124.0], [44.8, 125.0], [44.9, 125.0], [45.0, 126.0], [45.1, 127.0], [45.2, 128.0], [45.3, 128.0], [45.4, 129.0], [45.5, 130.0], [45.6, 131.0], [45.7, 132.0], [45.8, 132.0], [45.9, 134.0], [46.0, 134.0], [46.1, 135.0], [46.2, 135.0], [46.3, 137.0], [46.4, 137.0], [46.5, 139.0], [46.6, 140.0], [46.7, 141.0], [46.8, 143.0], [46.9, 144.0], [47.0, 145.0], [47.1, 146.0], [47.2, 147.0], [47.3, 148.0], [47.4, 149.0], [47.5, 151.0], [47.6, 152.0], [47.7, 154.0], [47.8, 155.0], [47.9, 156.0], [48.0, 157.0], [48.1, 158.0], [48.2, 160.0], [48.3, 160.0], [48.4, 161.0], [48.5, 162.0], [48.6, 163.0], [48.7, 164.0], [48.8, 165.0], [48.9, 166.0], [49.0, 167.0], [49.1, 168.0], [49.2, 168.0], [49.3, 169.0], [49.4, 171.0], [49.5, 171.0], [49.6, 173.0], [49.7, 175.0], [49.8, 176.0], [49.9, 178.0], [50.0, 179.0], [50.1, 181.0], [50.2, 181.0], [50.3, 182.0], [50.4, 183.0], [50.5, 184.0], [50.6, 185.0], [50.7, 186.0], [50.8, 186.0], [50.9, 187.0], [51.0, 187.0], [51.1, 187.0], [51.2, 188.0], [51.3, 189.0], [51.4, 189.0], [51.5, 190.0], [51.6, 190.0], [51.7, 191.0], [51.8, 191.0], [51.9, 192.0], [52.0, 192.0], [52.1, 193.0], [52.2, 193.0], [52.3, 194.0], [52.4, 195.0], [52.5, 196.0], [52.6, 196.0], [52.7, 197.0], [52.8, 198.0], [52.9, 198.0], [53.0, 198.0], [53.1, 199.0], [53.2, 200.0], [53.3, 201.0], [53.4, 201.0], [53.5, 202.0], [53.6, 202.0], [53.7, 202.0], [53.8, 203.0], [53.9, 204.0], [54.0, 204.0], [54.1, 204.0], [54.2, 205.0], [54.3, 205.0], [54.4, 206.0], [54.5, 206.0], [54.6, 206.0], [54.7, 207.0], [54.8, 207.0], [54.9, 208.0], [55.0, 208.0], [55.1, 209.0], [55.2, 210.0], [55.3, 210.0], [55.4, 212.0], [55.5, 212.0], [55.6, 212.0], [55.7, 213.0], [55.8, 214.0], [55.9, 214.0], [56.0, 216.0], [56.1, 216.0], [56.2, 217.0], [56.3, 218.0], [56.4, 219.0], [56.5, 220.0], [56.6, 220.0], [56.7, 221.0], [56.8, 221.0], [56.9, 222.0], [57.0, 223.0], [57.1, 224.0], [57.2, 224.0], [57.3, 225.0], [57.4, 227.0], [57.5, 228.0], [57.6, 228.0], [57.7, 230.0], [57.8, 230.0], [57.9, 231.0], [58.0, 231.0], [58.1, 233.0], [58.2, 233.0], [58.3, 234.0], [58.4, 236.0], [58.5, 236.0], [58.6, 238.0], [58.7, 239.0], [58.8, 242.0], [58.9, 243.0], [59.0, 243.0], [59.1, 244.0], [59.2, 245.0], [59.3, 246.0], [59.4, 247.0], [59.5, 247.0], [59.6, 247.0], [59.7, 249.0], [59.8, 249.0], [59.9, 250.0], [60.0, 252.0], [60.1, 253.0], [60.2, 254.0], [60.3, 255.0], [60.4, 256.0], [60.5, 256.0], [60.6, 257.0], [60.7, 257.0], [60.8, 259.0], [60.9, 260.0], [61.0, 261.0], [61.1, 263.0], [61.2, 264.0], [61.3, 264.0], [61.4, 265.0], [61.5, 266.0], [61.6, 267.0], [61.7, 267.0], [61.8, 268.0], [61.9, 269.0], [62.0, 271.0], [62.1, 273.0], [62.2, 275.0], [62.3, 276.0], [62.4, 277.0], [62.5, 278.0], [62.6, 280.0], [62.7, 282.0], [62.8, 282.0], [62.9, 283.0], [63.0, 284.0], [63.1, 284.0], [63.2, 285.0], [63.3, 287.0], [63.4, 287.0], [63.5, 288.0], [63.6, 289.0], [63.7, 290.0], [63.8, 291.0], [63.9, 292.0], [64.0, 293.0], [64.1, 296.0], [64.2, 298.0], [64.3, 299.0], [64.4, 301.0], [64.5, 301.0], [64.6, 302.0], [64.7, 303.0], [64.8, 304.0], [64.9, 305.0], [65.0, 307.0], [65.1, 307.0], [65.2, 308.0], [65.3, 310.0], [65.4, 311.0], [65.5, 314.0], [65.6, 315.0], [65.7, 316.0], [65.8, 316.0], [65.9, 318.0], [66.0, 319.0], [66.1, 321.0], [66.2, 323.0], [66.3, 324.0], [66.4, 325.0], [66.5, 328.0], [66.6, 329.0], [66.7, 329.0], [66.8, 331.0], [66.9, 332.0], [67.0, 334.0], [67.1, 335.0], [67.2, 336.0], [67.3, 338.0], [67.4, 339.0], [67.5, 340.0], [67.6, 342.0], [67.7, 344.0], [67.8, 345.0], [67.9, 346.0], [68.0, 349.0], [68.1, 351.0], [68.2, 352.0], [68.3, 354.0], [68.4, 355.0], [68.5, 356.0], [68.6, 356.0], [68.7, 358.0], [68.8, 359.0], [68.9, 362.0], [69.0, 364.0], [69.1, 366.0], [69.2, 368.0], [69.3, 369.0], [69.4, 370.0], [69.5, 373.0], [69.6, 374.0], [69.7, 376.0], [69.8, 377.0], [69.9, 378.0], [70.0, 379.0], [70.1, 379.0], [70.2, 380.0], [70.3, 381.0], [70.4, 383.0], [70.5, 386.0], [70.6, 388.0], [70.7, 389.0], [70.8, 391.0], [70.9, 391.0], [71.0, 392.0], [71.1, 394.0], [71.2, 395.0], [71.3, 398.0], [71.4, 401.0], [71.5, 402.0], [71.6, 404.0], [71.7, 405.0], [71.8, 407.0], [71.9, 409.0], [72.0, 410.0], [72.1, 411.0], [72.2, 413.0], [72.3, 415.0], [72.4, 415.0], [72.5, 417.0], [72.6, 419.0], [72.7, 420.0], [72.8, 422.0], [72.9, 424.0], [73.0, 428.0], [73.1, 429.0], [73.2, 433.0], [73.3, 434.0], [73.4, 435.0], [73.5, 436.0], [73.6, 437.0], [73.7, 438.0], [73.8, 439.0], [73.9, 440.0], [74.0, 441.0], [74.1, 444.0], [74.2, 446.0], [74.3, 446.0], [74.4, 449.0], [74.5, 451.0], [74.6, 452.0], [74.7, 453.0], [74.8, 455.0], [74.9, 459.0], [75.0, 460.0], [75.1, 461.0], [75.2, 463.0], [75.3, 464.0], [75.4, 465.0], [75.5, 468.0], [75.6, 470.0], [75.7, 472.0], [75.8, 472.0], [75.9, 473.0], [76.0, 475.0], [76.1, 478.0], [76.2, 479.0], [76.3, 482.0], [76.4, 483.0], [76.5, 484.0], [76.6, 486.0], [76.7, 487.0], [76.8, 489.0], [76.9, 492.0], [77.0, 493.0], [77.1, 495.0], [77.2, 496.0], [77.3, 498.0], [77.4, 499.0], [77.5, 502.0], [77.6, 502.0], [77.7, 504.0], [77.8, 505.0], [77.9, 508.0], [78.0, 509.0], [78.1, 511.0], [78.2, 512.0], [78.3, 516.0], [78.4, 517.0], [78.5, 518.0], [78.6, 519.0], [78.7, 521.0], [78.8, 522.0], [78.9, 524.0], [79.0, 526.0], [79.1, 531.0], [79.2, 531.0], [79.3, 533.0], [79.4, 534.0], [79.5, 536.0], [79.6, 537.0], [79.7, 538.0], [79.8, 540.0], [79.9, 541.0], [80.0, 544.0], [80.1, 545.0], [80.2, 547.0], [80.3, 549.0], [80.4, 551.0], [80.5, 553.0], [80.6, 556.0], [80.7, 558.0], [80.8, 559.0], [80.9, 563.0], [81.0, 565.0], [81.1, 567.0], [81.2, 568.0], [81.3, 570.0], [81.4, 572.0], [81.5, 573.0], [81.6, 575.0], [81.7, 576.0], [81.8, 578.0], [81.9, 584.0], [82.0, 585.0], [82.1, 587.0], [82.2, 590.0], [82.3, 592.0], [82.4, 595.0], [82.5, 596.0], [82.6, 600.0], [82.7, 601.0], [82.8, 603.0], [82.9, 605.0], [83.0, 607.0], [83.1, 609.0], [83.2, 610.0], [83.3, 611.0], [83.4, 614.0], [83.5, 619.0], [83.6, 620.0], [83.7, 623.0], [83.8, 627.0], [83.9, 629.0], [84.0, 631.0], [84.1, 634.0], [84.2, 636.0], [84.3, 638.0], [84.4, 641.0], [84.5, 642.0], [84.6, 644.0], [84.7, 646.0], [84.8, 649.0], [84.9, 651.0], [85.0, 654.0], [85.1, 657.0], [85.2, 659.0], [85.3, 663.0], [85.4, 665.0], [85.5, 666.0], [85.6, 668.0], [85.7, 669.0], [85.8, 672.0], [85.9, 673.0], [86.0, 676.0], [86.1, 677.0], [86.2, 679.0], [86.3, 684.0], [86.4, 686.0], [86.5, 687.0], [86.6, 690.0], [86.7, 692.0], [86.8, 695.0], [86.9, 697.0], [87.0, 697.0], [87.1, 699.0], [87.2, 701.0], [87.3, 703.0], [87.4, 707.0], [87.5, 710.0], [87.6, 711.0], [87.7, 713.0], [87.8, 715.0], [87.9, 718.0], [88.0, 722.0], [88.1, 727.0], [88.2, 729.0], [88.3, 731.0], [88.4, 734.0], [88.5, 735.0], [88.6, 739.0], [88.7, 742.0], [88.8, 745.0], [88.9, 749.0], [89.0, 753.0], [89.1, 756.0], [89.2, 759.0], [89.3, 763.0], [89.4, 768.0], [89.5, 772.0], [89.6, 775.0], [89.7, 779.0], [89.8, 781.0], [89.9, 790.0], [90.0, 796.0], [90.1, 805.0], [90.2, 807.0], [90.3, 809.0], [90.4, 811.0], [90.5, 815.0], [90.6, 820.0], [90.7, 824.0], [90.8, 829.0], [90.9, 834.0], [91.0, 838.0], [91.1, 843.0], [91.2, 845.0], [91.3, 849.0], [91.4, 852.0], [91.5, 856.0], [91.6, 861.0], [91.7, 869.0], [91.8, 872.0], [91.9, 880.0], [92.0, 887.0], [92.1, 889.0], [92.2, 895.0], [92.3, 899.0], [92.4, 904.0], [92.5, 908.0], [92.6, 913.0], [92.7, 917.0], [92.8, 919.0], [92.9, 924.0], [93.0, 927.0], [93.1, 931.0], [93.2, 938.0], [93.3, 940.0], [93.4, 943.0], [93.5, 950.0], [93.6, 960.0], [93.7, 966.0], [93.8, 973.0], [93.9, 980.0], [94.0, 983.0], [94.1, 986.0], [94.2, 995.0], [94.3, 1000.0], [94.4, 1007.0], [94.5, 1012.0], [94.6, 1017.0], [94.7, 1021.0], [94.8, 1027.0], [94.9, 1032.0], [95.0, 1037.0], [95.1, 1042.0], [95.2, 1046.0], [95.3, 1054.0], [95.4, 1060.0], [95.5, 1067.0], [95.6, 1076.0], [95.7, 1093.0], [95.8, 1100.0], [95.9, 1116.0], [96.0, 1124.0], [96.1, 1131.0], [96.2, 1144.0], [96.3, 1156.0], [96.4, 1161.0], [96.5, 1166.0], [96.6, 1172.0], [96.7, 1184.0], [96.8, 1204.0], [96.9, 1227.0], [97.0, 1249.0], [97.1, 1263.0], [97.2, 1284.0], [97.3, 1304.0], [97.4, 1313.0], [97.5, 1326.0], [97.6, 1341.0], [97.7, 1370.0], [97.8, 1388.0], [97.9, 1402.0], [98.0, 1418.0], [98.1, 1442.0], [98.2, 1463.0], [98.3, 1489.0], [98.4, 1509.0], [98.5, 1536.0], [98.6, 1560.0], [98.7, 1578.0], [98.8, 1595.0], [98.9, 1653.0], [99.0, 1680.0], [99.1, 1733.0], [99.2, 1817.0], [99.3, 1875.0], [99.4, 1929.0], [99.5, 1950.0], [99.6, 2006.0], [99.7, 2206.0], [99.8, 2281.0], [99.9, 3186.0], [100.0, 3589.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2189.0, "series": [{"data": [[0.0, 2189.0], [600.0, 240.0], [700.0, 153.0], [800.0, 119.0], [900.0, 104.0], [1000.0, 78.0], [1100.0, 51.0], [1200.0, 28.0], [1300.0, 33.0], [1400.0, 22.0], [1500.0, 26.0], [100.0, 608.0], [1600.0, 12.0], [1700.0, 7.0], [1800.0, 9.0], [1900.0, 13.0], [2000.0, 4.0], [2100.0, 2.0], [2200.0, 6.0], [2300.0, 1.0], [2400.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [3100.0, 1.0], [200.0, 588.0], [3300.0, 1.0], [3200.0, 1.0], [3400.0, 1.0], [3500.0, 2.0], [300.0, 370.0], [400.0, 318.0], [500.0, 272.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 89.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4078.0, "series": [{"data": [[0.0, 4078.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1095.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 89.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.902439024390244, "minX": 1.60383774E12, "maxY": 10.0, "series": [{"data": [[1.6038378E12, 10.0], [1.60383792E12, 8.902439024390244], [1.60383774E12, 9.980802792321109], [1.60383786E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383792E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 313.0407852105969, "minX": 1.0, "maxY": 3345.0, "series": [{"data": [[4.0, 1842.0], [8.0, 674.0], [2.0, 3186.0], [1.0, 3205.0], [9.0, 1821.0], [5.0, 1247.0], [10.0, 313.0407852105969], [6.0, 1156.0], [3.0, 3345.0], [7.0, 661.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98726719878372, 316.8291524135303]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 352.7, "minX": 1.60383774E12, "maxY": 1662651.4833333334, "series": [{"data": [[1.6038378E12, 1433615.7666666666], [1.60383792E12, 35889.75], [1.60383774E12, 1118645.7333333334], [1.60383786E12, 1662651.4833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6038378E12, 18553.333333333332], [1.60383792E12, 352.7], [1.60383774E12, 9909.75], [1.60383786E12, 16675.166666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383792E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 275.4967919340055, "minX": 1.60383774E12, "maxY": 1361.7073170731708, "series": [{"data": [[1.6038378E12, 275.4967919340055], [1.60383792E12, 1361.7073170731708], [1.60383774E12, 361.35776614310674], [1.60383786E12, 314.88378235604836]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383792E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 275.1484876260314, "minX": 1.60383774E12, "maxY": 1361.341463414634, "series": [{"data": [[1.6038378E12, 275.1484876260314], [1.60383792E12, 1361.341463414634], [1.60383774E12, 360.8368237347299], [1.60383786E12, 314.4912836767037]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383792E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008249312557286887, "minX": 1.60383774E12, "maxY": 0.08376963350785321, "series": [{"data": [[1.6038378E12, 0.008249312557286887], [1.60383792E12, 0.024390243902439036], [1.60383774E12, 0.08376963350785321], [1.60383786E12, 0.00898045430533546]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383792E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60383774E12, "maxY": 3589.0, "series": [{"data": [[1.6038378E12, 2281.0], [1.60383792E12, 3589.0], [1.60383774E12, 1828.0], [1.60383786E12, 2728.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6038378E12, 35.0], [1.60383792E12, 36.0], [1.60383774E12, 34.0], [1.60383786E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6038378E12, 35.0], [1.60383792E12, 36.0], [1.60383774E12, 34.35530010938645], [1.60383786E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6038378E12, 35.0], [1.60383792E12, 36.0], [1.60383774E12, 34.0], [1.60383786E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6038378E12, 30.0], [1.60383792E12, 36.0], [1.60383774E12, 31.0], [1.60383786E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6038378E12, 126.5], [1.60383792E12, 1080.0], [1.60383774E12, 253.5], [1.60383786E12, 191.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383792E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 46.5, "minX": 1.0, "maxY": 3275.0, "series": [{"data": [[2.0, 3275.0], [3.0, 1202.0], [4.0, 1969.5], [6.0, 1172.5], [7.0, 785.0], [8.0, 1277.5], [10.0, 708.0], [11.0, 778.0], [12.0, 685.5], [13.0, 511.0], [14.0, 644.5], [15.0, 544.0], [16.0, 532.0], [17.0, 428.0], [18.0, 444.5], [19.0, 420.5], [20.0, 384.0], [21.0, 433.0], [22.0, 268.5], [23.0, 288.0], [24.0, 531.0], [25.0, 257.5], [26.0, 373.5], [27.0, 255.0], [28.0, 244.5], [29.0, 266.0], [30.0, 60.5], [31.0, 243.0], [33.0, 230.5], [32.0, 81.0], [35.0, 207.0], [34.0, 143.0], [37.0, 202.5], [36.0, 184.0], [39.0, 138.5], [38.0, 178.0], [40.0, 86.0], [41.0, 53.0], [42.0, 105.0], [43.0, 80.0], [44.0, 146.0], [45.0, 89.0], [47.0, 79.0], [46.0, 124.5], [48.0, 84.0], [49.0, 82.0], [51.0, 89.0], [50.0, 133.0], [53.0, 80.0], [52.0, 62.5], [55.0, 88.0], [56.0, 88.0], [58.0, 92.5], [61.0, 79.0], [64.0, 46.5], [65.0, 109.0], [70.0, 82.5], [69.0, 85.0], [74.0, 76.0], [73.0, 59.0], [87.0, 74.0], [84.0, 68.0], [89.0, 83.0], [93.0, 75.0], [107.0, 49.0], [1.0, 158.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 107.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 46.0, "minX": 1.0, "maxY": 3275.0, "series": [{"data": [[2.0, 3275.0], [3.0, 1201.0], [4.0, 1969.0], [6.0, 1172.0], [7.0, 783.0], [8.0, 1277.0], [10.0, 707.5], [11.0, 776.0], [12.0, 683.5], [13.0, 510.5], [14.0, 641.5], [15.0, 542.0], [16.0, 531.5], [17.0, 426.0], [18.0, 444.0], [19.0, 420.5], [20.0, 384.0], [21.0, 432.5], [22.0, 268.5], [23.0, 287.0], [24.0, 531.0], [25.0, 256.5], [26.0, 372.5], [27.0, 255.0], [28.0, 243.5], [29.0, 262.0], [30.0, 60.5], [31.0, 242.5], [33.0, 230.5], [32.0, 80.5], [35.0, 207.0], [34.0, 143.0], [37.0, 202.5], [36.0, 183.5], [39.0, 138.0], [38.0, 178.0], [40.0, 86.0], [41.0, 53.0], [42.0, 105.0], [43.0, 79.0], [44.0, 145.5], [45.0, 89.0], [47.0, 79.0], [46.0, 123.5], [48.0, 84.0], [49.0, 82.0], [51.0, 89.0], [50.0, 133.0], [53.0, 80.0], [52.0, 62.5], [55.0, 88.0], [56.0, 88.0], [58.0, 92.5], [61.0, 79.0], [64.0, 46.0], [65.0, 109.0], [70.0, 82.5], [69.0, 85.0], [74.0, 76.0], [73.0, 59.0], [87.0, 74.0], [84.0, 68.0], [89.0, 83.0], [93.0, 75.0], [107.0, 49.0], [1.0, 153.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 107.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60383774E12, "maxY": 36.36666666666667, "series": [{"data": [[1.6038378E12, 36.36666666666667], [1.60383792E12, 0.5166666666666667], [1.60383774E12, 19.266666666666666], [1.60383786E12, 31.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383792E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.60383774E12, "maxY": 36.36666666666667, "series": [{"data": [[1.6038378E12, 36.36666666666667], [1.60383792E12, 0.6833333333333333], [1.60383774E12, 19.1], [1.60383786E12, 31.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383792E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.60383774E12, "maxY": 36.36666666666667, "series": [{"data": [[1.6038378E12, 36.36666666666667], [1.60383792E12, 0.6833333333333333], [1.60383774E12, 19.1], [1.60383786E12, 31.55]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383792E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.60383774E12, "maxY": 36.36666666666667, "series": [{"data": [[1.6038378E12, 36.36666666666667], [1.60383792E12, 0.6833333333333333], [1.60383774E12, 19.1], [1.60383786E12, 31.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383792E12, "title": "Total Transactions Per Second"}},
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

