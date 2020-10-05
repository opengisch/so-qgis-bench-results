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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 5922.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 2.0], [1.5, 2.0], [1.6, 2.0], [1.7, 2.0], [1.8, 2.0], [1.9, 2.0], [2.0, 2.0], [2.1, 2.0], [2.2, 2.0], [2.3, 2.0], [2.4, 2.0], [2.5, 2.0], [2.6, 2.0], [2.7, 2.0], [2.8, 2.0], [2.9, 2.0], [3.0, 2.0], [3.1, 2.0], [3.2, 2.0], [3.3, 2.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 3.0], [4.0, 3.0], [4.1, 3.0], [4.2, 3.0], [4.3, 3.0], [4.4, 3.0], [4.5, 3.0], [4.6, 3.0], [4.7, 3.0], [4.8, 3.0], [4.9, 3.0], [5.0, 3.0], [5.1, 3.0], [5.2, 3.0], [5.3, 3.0], [5.4, 3.0], [5.5, 3.0], [5.6, 3.0], [5.7, 3.0], [5.8, 3.0], [5.9, 3.0], [6.0, 3.0], [6.1, 3.0], [6.2, 3.0], [6.3, 3.0], [6.4, 3.0], [6.5, 3.0], [6.6, 3.0], [6.7, 3.0], [6.8, 3.0], [6.9, 3.0], [7.0, 3.0], [7.1, 3.0], [7.2, 3.0], [7.3, 3.0], [7.4, 3.0], [7.5, 3.0], [7.6, 3.0], [7.7, 3.0], [7.8, 3.0], [7.9, 3.0], [8.0, 3.0], [8.1, 3.0], [8.2, 3.0], [8.3, 3.0], [8.4, 3.0], [8.5, 3.0], [8.6, 3.0], [8.7, 3.0], [8.8, 3.0], [8.9, 3.0], [9.0, 3.0], [9.1, 3.0], [9.2, 3.0], [9.3, 3.0], [9.4, 3.0], [9.5, 3.0], [9.6, 3.0], [9.7, 3.0], [9.8, 3.0], [9.9, 3.0], [10.0, 3.0], [10.1, 3.0], [10.2, 3.0], [10.3, 3.0], [10.4, 3.0], [10.5, 3.0], [10.6, 3.0], [10.7, 3.0], [10.8, 3.0], [10.9, 3.0], [11.0, 3.0], [11.1, 3.0], [11.2, 3.0], [11.3, 3.0], [11.4, 3.0], [11.5, 3.0], [11.6, 3.0], [11.7, 3.0], [11.8, 3.0], [11.9, 3.0], [12.0, 3.0], [12.1, 3.0], [12.2, 3.0], [12.3, 3.0], [12.4, 3.0], [12.5, 3.0], [12.6, 3.0], [12.7, 3.0], [12.8, 3.0], [12.9, 4.0], [13.0, 4.0], [13.1, 4.0], [13.2, 4.0], [13.3, 4.0], [13.4, 4.0], [13.5, 4.0], [13.6, 4.0], [13.7, 4.0], [13.8, 4.0], [13.9, 4.0], [14.0, 4.0], [14.1, 4.0], [14.2, 4.0], [14.3, 4.0], [14.4, 4.0], [14.5, 4.0], [14.6, 4.0], [14.7, 4.0], [14.8, 4.0], [14.9, 4.0], [15.0, 4.0], [15.1, 4.0], [15.2, 4.0], [15.3, 4.0], [15.4, 4.0], [15.5, 4.0], [15.6, 4.0], [15.7, 4.0], [15.8, 4.0], [15.9, 4.0], [16.0, 4.0], [16.1, 4.0], [16.2, 4.0], [16.3, 4.0], [16.4, 4.0], [16.5, 4.0], [16.6, 4.0], [16.7, 4.0], [16.8, 4.0], [16.9, 4.0], [17.0, 4.0], [17.1, 4.0], [17.2, 4.0], [17.3, 4.0], [17.4, 4.0], [17.5, 4.0], [17.6, 4.0], [17.7, 4.0], [17.8, 4.0], [17.9, 4.0], [18.0, 4.0], [18.1, 4.0], [18.2, 4.0], [18.3, 4.0], [18.4, 4.0], [18.5, 4.0], [18.6, 4.0], [18.7, 4.0], [18.8, 4.0], [18.9, 4.0], [19.0, 4.0], [19.1, 4.0], [19.2, 4.0], [19.3, 4.0], [19.4, 4.0], [19.5, 4.0], [19.6, 4.0], [19.7, 4.0], [19.8, 4.0], [19.9, 5.0], [20.0, 5.0], [20.1, 5.0], [20.2, 5.0], [20.3, 5.0], [20.4, 5.0], [20.5, 5.0], [20.6, 5.0], [20.7, 5.0], [20.8, 5.0], [20.9, 5.0], [21.0, 5.0], [21.1, 5.0], [21.2, 5.0], [21.3, 5.0], [21.4, 5.0], [21.5, 5.0], [21.6, 5.0], [21.7, 5.0], [21.8, 5.0], [21.9, 5.0], [22.0, 5.0], [22.1, 5.0], [22.2, 5.0], [22.3, 5.0], [22.4, 6.0], [22.5, 6.0], [22.6, 6.0], [22.7, 6.0], [22.8, 6.0], [22.9, 6.0], [23.0, 6.0], [23.1, 6.0], [23.2, 6.0], [23.3, 6.0], [23.4, 6.0], [23.5, 6.0], [23.6, 6.0], [23.7, 6.0], [23.8, 7.0], [23.9, 7.0], [24.0, 7.0], [24.1, 7.0], [24.2, 7.0], [24.3, 7.0], [24.4, 7.0], [24.5, 8.0], [24.6, 8.0], [24.7, 8.0], [24.8, 8.0], [24.9, 8.0], [25.0, 9.0], [25.1, 9.0], [25.2, 9.0], [25.3, 10.0], [25.4, 10.0], [25.5, 11.0], [25.6, 12.0], [25.7, 14.0], [25.8, 16.0], [25.9, 19.0], [26.0, 23.0], [26.1, 27.0], [26.2, 33.0], [26.3, 36.0], [26.4, 37.0], [26.5, 38.0], [26.6, 38.0], [26.7, 39.0], [26.8, 39.0], [26.9, 39.0], [27.0, 39.0], [27.1, 40.0], [27.2, 40.0], [27.3, 40.0], [27.4, 40.0], [27.5, 41.0], [27.6, 41.0], [27.7, 41.0], [27.8, 41.0], [27.9, 41.0], [28.0, 41.0], [28.1, 42.0], [28.2, 42.0], [28.3, 42.0], [28.4, 42.0], [28.5, 42.0], [28.6, 42.0], [28.7, 42.0], [28.8, 43.0], [28.9, 43.0], [29.0, 43.0], [29.1, 43.0], [29.2, 43.0], [29.3, 43.0], [29.4, 43.0], [29.5, 43.0], [29.6, 43.0], [29.7, 44.0], [29.8, 44.0], [29.9, 44.0], [30.0, 44.0], [30.1, 44.0], [30.2, 44.0], [30.3, 44.0], [30.4, 44.0], [30.5, 44.0], [30.6, 44.0], [30.7, 44.0], [30.8, 45.0], [30.9, 45.0], [31.0, 45.0], [31.1, 45.0], [31.2, 45.0], [31.3, 45.0], [31.4, 45.0], [31.5, 45.0], [31.6, 45.0], [31.7, 45.0], [31.8, 46.0], [31.9, 46.0], [32.0, 46.0], [32.1, 46.0], [32.2, 46.0], [32.3, 46.0], [32.4, 46.0], [32.5, 46.0], [32.6, 46.0], [32.7, 46.0], [32.8, 47.0], [32.9, 47.0], [33.0, 47.0], [33.1, 47.0], [33.2, 47.0], [33.3, 47.0], [33.4, 47.0], [33.5, 47.0], [33.6, 47.0], [33.7, 47.0], [33.8, 47.0], [33.9, 48.0], [34.0, 48.0], [34.1, 48.0], [34.2, 48.0], [34.3, 48.0], [34.4, 48.0], [34.5, 48.0], [34.6, 48.0], [34.7, 48.0], [34.8, 49.0], [34.9, 49.0], [35.0, 49.0], [35.1, 49.0], [35.2, 49.0], [35.3, 49.0], [35.4, 49.0], [35.5, 49.0], [35.6, 50.0], [35.7, 50.0], [35.8, 50.0], [35.9, 50.0], [36.0, 50.0], [36.1, 50.0], [36.2, 50.0], [36.3, 51.0], [36.4, 51.0], [36.5, 51.0], [36.6, 51.0], [36.7, 51.0], [36.8, 51.0], [36.9, 51.0], [37.0, 51.0], [37.1, 52.0], [37.2, 52.0], [37.3, 52.0], [37.4, 52.0], [37.5, 52.0], [37.6, 53.0], [37.7, 53.0], [37.8, 53.0], [37.9, 53.0], [38.0, 53.0], [38.1, 54.0], [38.2, 54.0], [38.3, 54.0], [38.4, 54.0], [38.5, 54.0], [38.6, 55.0], [38.7, 55.0], [38.8, 55.0], [38.9, 55.0], [39.0, 56.0], [39.1, 56.0], [39.2, 57.0], [39.3, 57.0], [39.4, 57.0], [39.5, 58.0], [39.6, 58.0], [39.7, 59.0], [39.8, 59.0], [39.9, 59.0], [40.0, 60.0], [40.1, 61.0], [40.2, 61.0], [40.3, 62.0], [40.4, 62.0], [40.5, 63.0], [40.6, 64.0], [40.7, 64.0], [40.8, 65.0], [40.9, 65.0], [41.0, 66.0], [41.1, 67.0], [41.2, 67.0], [41.3, 68.0], [41.4, 68.0], [41.5, 69.0], [41.6, 70.0], [41.7, 71.0], [41.8, 73.0], [41.9, 74.0], [42.0, 76.0], [42.1, 77.0], [42.2, 77.0], [42.3, 78.0], [42.4, 79.0], [42.5, 79.0], [42.6, 80.0], [42.7, 80.0], [42.8, 81.0], [42.9, 81.0], [43.0, 81.0], [43.1, 82.0], [43.2, 82.0], [43.3, 82.0], [43.4, 83.0], [43.5, 83.0], [43.6, 83.0], [43.7, 83.0], [43.8, 84.0], [43.9, 84.0], [44.0, 85.0], [44.1, 85.0], [44.2, 85.0], [44.3, 86.0], [44.4, 86.0], [44.5, 87.0], [44.6, 87.0], [44.7, 87.0], [44.8, 88.0], [44.9, 88.0], [45.0, 89.0], [45.1, 89.0], [45.2, 90.0], [45.3, 90.0], [45.4, 91.0], [45.5, 92.0], [45.6, 92.0], [45.7, 92.0], [45.8, 93.0], [45.9, 93.0], [46.0, 94.0], [46.1, 95.0], [46.2, 95.0], [46.3, 96.0], [46.4, 96.0], [46.5, 97.0], [46.6, 98.0], [46.7, 98.0], [46.8, 99.0], [46.9, 100.0], [47.0, 101.0], [47.1, 102.0], [47.2, 102.0], [47.3, 103.0], [47.4, 104.0], [47.5, 105.0], [47.6, 105.0], [47.7, 106.0], [47.8, 107.0], [47.9, 108.0], [48.0, 109.0], [48.1, 111.0], [48.2, 112.0], [48.3, 113.0], [48.4, 113.0], [48.5, 114.0], [48.6, 116.0], [48.7, 116.0], [48.8, 117.0], [48.9, 119.0], [49.0, 119.0], [49.1, 120.0], [49.2, 121.0], [49.3, 122.0], [49.4, 123.0], [49.5, 123.0], [49.6, 125.0], [49.7, 125.0], [49.8, 126.0], [49.9, 126.0], [50.0, 127.0], [50.1, 128.0], [50.2, 129.0], [50.3, 130.0], [50.4, 130.0], [50.5, 130.0], [50.6, 131.0], [50.7, 132.0], [50.8, 133.0], [50.9, 134.0], [51.0, 135.0], [51.1, 135.0], [51.2, 136.0], [51.3, 137.0], [51.4, 137.0], [51.5, 138.0], [51.6, 139.0], [51.7, 139.0], [51.8, 140.0], [51.9, 141.0], [52.0, 142.0], [52.1, 143.0], [52.2, 143.0], [52.3, 144.0], [52.4, 144.0], [52.5, 145.0], [52.6, 146.0], [52.7, 146.0], [52.8, 147.0], [52.9, 148.0], [53.0, 149.0], [53.1, 150.0], [53.2, 151.0], [53.3, 151.0], [53.4, 152.0], [53.5, 153.0], [53.6, 154.0], [53.7, 154.0], [53.8, 155.0], [53.9, 156.0], [54.0, 157.0], [54.1, 158.0], [54.2, 158.0], [54.3, 160.0], [54.4, 161.0], [54.5, 162.0], [54.6, 163.0], [54.7, 164.0], [54.8, 165.0], [54.9, 166.0], [55.0, 167.0], [55.1, 168.0], [55.2, 168.0], [55.3, 169.0], [55.4, 170.0], [55.5, 171.0], [55.6, 172.0], [55.7, 173.0], [55.8, 174.0], [55.9, 175.0], [56.0, 175.0], [56.1, 176.0], [56.2, 177.0], [56.3, 178.0], [56.4, 179.0], [56.5, 180.0], [56.6, 181.0], [56.7, 182.0], [56.8, 182.0], [56.9, 183.0], [57.0, 184.0], [57.1, 185.0], [57.2, 186.0], [57.3, 187.0], [57.4, 188.0], [57.5, 189.0], [57.6, 190.0], [57.7, 191.0], [57.8, 192.0], [57.9, 193.0], [58.0, 194.0], [58.1, 195.0], [58.2, 196.0], [58.3, 197.0], [58.4, 198.0], [58.5, 199.0], [58.6, 200.0], [58.7, 201.0], [58.8, 201.0], [58.9, 202.0], [59.0, 203.0], [59.1, 204.0], [59.2, 204.0], [59.3, 205.0], [59.4, 206.0], [59.5, 206.0], [59.6, 207.0], [59.7, 208.0], [59.8, 209.0], [59.9, 210.0], [60.0, 211.0], [60.1, 212.0], [60.2, 213.0], [60.3, 213.0], [60.4, 215.0], [60.5, 216.0], [60.6, 217.0], [60.7, 218.0], [60.8, 219.0], [60.9, 220.0], [61.0, 221.0], [61.1, 222.0], [61.2, 223.0], [61.3, 224.0], [61.4, 225.0], [61.5, 226.0], [61.6, 227.0], [61.7, 228.0], [61.8, 229.0], [61.9, 230.0], [62.0, 231.0], [62.1, 232.0], [62.2, 233.0], [62.3, 233.0], [62.4, 234.0], [62.5, 236.0], [62.6, 237.0], [62.7, 238.0], [62.8, 239.0], [62.9, 240.0], [63.0, 241.0], [63.1, 242.0], [63.2, 243.0], [63.3, 244.0], [63.4, 244.0], [63.5, 246.0], [63.6, 247.0], [63.7, 249.0], [63.8, 249.0], [63.9, 250.0], [64.0, 251.0], [64.1, 252.0], [64.2, 254.0], [64.3, 255.0], [64.4, 257.0], [64.5, 259.0], [64.6, 260.0], [64.7, 262.0], [64.8, 263.0], [64.9, 264.0], [65.0, 266.0], [65.1, 267.0], [65.2, 269.0], [65.3, 269.0], [65.4, 270.0], [65.5, 271.0], [65.6, 272.0], [65.7, 273.0], [65.8, 275.0], [65.9, 276.0], [66.0, 278.0], [66.1, 279.0], [66.2, 281.0], [66.3, 283.0], [66.4, 284.0], [66.5, 286.0], [66.6, 288.0], [66.7, 289.0], [66.8, 291.0], [66.9, 293.0], [67.0, 294.0], [67.1, 296.0], [67.2, 298.0], [67.3, 299.0], [67.4, 301.0], [67.5, 302.0], [67.6, 304.0], [67.7, 305.0], [67.8, 307.0], [67.9, 308.0], [68.0, 310.0], [68.1, 311.0], [68.2, 313.0], [68.3, 315.0], [68.4, 316.0], [68.5, 318.0], [68.6, 320.0], [68.7, 321.0], [68.8, 324.0], [68.9, 325.0], [69.0, 328.0], [69.1, 330.0], [69.2, 333.0], [69.3, 335.0], [69.4, 337.0], [69.5, 338.0], [69.6, 340.0], [69.7, 342.0], [69.8, 343.0], [69.9, 345.0], [70.0, 349.0], [70.1, 352.0], [70.2, 355.0], [70.3, 356.0], [70.4, 358.0], [70.5, 360.0], [70.6, 363.0], [70.7, 365.0], [70.8, 367.0], [70.9, 369.0], [71.0, 372.0], [71.1, 374.0], [71.2, 375.0], [71.3, 377.0], [71.4, 379.0], [71.5, 380.0], [71.6, 381.0], [71.7, 385.0], [71.8, 387.0], [71.9, 389.0], [72.0, 390.0], [72.1, 391.0], [72.2, 393.0], [72.3, 395.0], [72.4, 397.0], [72.5, 398.0], [72.6, 401.0], [72.7, 403.0], [72.8, 406.0], [72.9, 408.0], [73.0, 410.0], [73.1, 412.0], [73.2, 413.0], [73.3, 414.0], [73.4, 416.0], [73.5, 418.0], [73.6, 420.0], [73.7, 422.0], [73.8, 424.0], [73.9, 425.0], [74.0, 428.0], [74.1, 431.0], [74.2, 433.0], [74.3, 437.0], [74.4, 440.0], [74.5, 443.0], [74.6, 446.0], [74.7, 448.0], [74.8, 450.0], [74.9, 452.0], [75.0, 454.0], [75.1, 457.0], [75.2, 459.0], [75.3, 461.0], [75.4, 463.0], [75.5, 465.0], [75.6, 466.0], [75.7, 470.0], [75.8, 471.0], [75.9, 475.0], [76.0, 477.0], [76.1, 480.0], [76.2, 484.0], [76.3, 486.0], [76.4, 489.0], [76.5, 490.0], [76.6, 491.0], [76.7, 492.0], [76.8, 495.0], [76.9, 497.0], [77.0, 500.0], [77.1, 502.0], [77.2, 506.0], [77.3, 508.0], [77.4, 511.0], [77.5, 513.0], [77.6, 515.0], [77.7, 518.0], [77.8, 521.0], [77.9, 524.0], [78.0, 526.0], [78.1, 529.0], [78.2, 532.0], [78.3, 534.0], [78.4, 536.0], [78.5, 540.0], [78.6, 543.0], [78.7, 545.0], [78.8, 546.0], [78.9, 549.0], [79.0, 553.0], [79.1, 556.0], [79.2, 560.0], [79.3, 562.0], [79.4, 565.0], [79.5, 568.0], [79.6, 571.0], [79.7, 574.0], [79.8, 576.0], [79.9, 581.0], [80.0, 583.0], [80.1, 587.0], [80.2, 589.0], [80.3, 594.0], [80.4, 595.0], [80.5, 598.0], [80.6, 601.0], [80.7, 603.0], [80.8, 605.0], [80.9, 607.0], [81.0, 610.0], [81.1, 612.0], [81.2, 616.0], [81.3, 620.0], [81.4, 622.0], [81.5, 625.0], [81.6, 627.0], [81.7, 629.0], [81.8, 632.0], [81.9, 635.0], [82.0, 636.0], [82.1, 639.0], [82.2, 643.0], [82.3, 646.0], [82.4, 649.0], [82.5, 653.0], [82.6, 655.0], [82.7, 657.0], [82.8, 662.0], [82.9, 666.0], [83.0, 669.0], [83.1, 673.0], [83.2, 677.0], [83.3, 680.0], [83.4, 686.0], [83.5, 688.0], [83.6, 691.0], [83.7, 694.0], [83.8, 698.0], [83.9, 700.0], [84.0, 705.0], [84.1, 710.0], [84.2, 713.0], [84.3, 715.0], [84.4, 719.0], [84.5, 722.0], [84.6, 727.0], [84.7, 730.0], [84.8, 734.0], [84.9, 736.0], [85.0, 741.0], [85.1, 748.0], [85.2, 750.0], [85.3, 755.0], [85.4, 759.0], [85.5, 764.0], [85.6, 766.0], [85.7, 771.0], [85.8, 777.0], [85.9, 781.0], [86.0, 786.0], [86.1, 791.0], [86.2, 796.0], [86.3, 800.0], [86.4, 808.0], [86.5, 814.0], [86.6, 819.0], [86.7, 823.0], [86.8, 828.0], [86.9, 833.0], [87.0, 839.0], [87.1, 846.0], [87.2, 851.0], [87.3, 858.0], [87.4, 865.0], [87.5, 871.0], [87.6, 876.0], [87.7, 889.0], [87.8, 895.0], [87.9, 902.0], [88.0, 907.0], [88.1, 914.0], [88.2, 919.0], [88.3, 923.0], [88.4, 929.0], [88.5, 933.0], [88.6, 940.0], [88.7, 945.0], [88.8, 953.0], [88.9, 958.0], [89.0, 966.0], [89.1, 975.0], [89.2, 982.0], [89.3, 988.0], [89.4, 994.0], [89.5, 1002.0], [89.6, 1007.0], [89.7, 1013.0], [89.8, 1017.0], [89.9, 1024.0], [90.0, 1036.0], [90.1, 1042.0], [90.2, 1052.0], [90.3, 1057.0], [90.4, 1067.0], [90.5, 1074.0], [90.6, 1081.0], [90.7, 1086.0], [90.8, 1093.0], [90.9, 1099.0], [91.0, 1102.0], [91.1, 1106.0], [91.2, 1113.0], [91.3, 1118.0], [91.4, 1128.0], [91.5, 1133.0], [91.6, 1138.0], [91.7, 1143.0], [91.8, 1152.0], [91.9, 1162.0], [92.0, 1172.0], [92.1, 1181.0], [92.2, 1192.0], [92.3, 1197.0], [92.4, 1203.0], [92.5, 1216.0], [92.6, 1227.0], [92.7, 1236.0], [92.8, 1247.0], [92.9, 1259.0], [93.0, 1273.0], [93.1, 1281.0], [93.2, 1288.0], [93.3, 1300.0], [93.4, 1306.0], [93.5, 1317.0], [93.6, 1328.0], [93.7, 1338.0], [93.8, 1349.0], [93.9, 1367.0], [94.0, 1379.0], [94.1, 1388.0], [94.2, 1404.0], [94.3, 1421.0], [94.4, 1434.0], [94.5, 1449.0], [94.6, 1463.0], [94.7, 1477.0], [94.8, 1491.0], [94.9, 1497.0], [95.0, 1507.0], [95.1, 1524.0], [95.2, 1543.0], [95.3, 1554.0], [95.4, 1568.0], [95.5, 1591.0], [95.6, 1607.0], [95.7, 1620.0], [95.8, 1634.0], [95.9, 1656.0], [96.0, 1666.0], [96.1, 1682.0], [96.2, 1698.0], [96.3, 1721.0], [96.4, 1736.0], [96.5, 1752.0], [96.6, 1766.0], [96.7, 1779.0], [96.8, 1811.0], [96.9, 1842.0], [97.0, 1877.0], [97.1, 1901.0], [97.2, 1923.0], [97.3, 1942.0], [97.4, 1967.0], [97.5, 2004.0], [97.6, 2034.0], [97.7, 2053.0], [97.8, 2079.0], [97.9, 2130.0], [98.0, 2143.0], [98.1, 2184.0], [98.2, 2208.0], [98.3, 2239.0], [98.4, 2329.0], [98.5, 2371.0], [98.6, 2391.0], [98.7, 2426.0], [98.8, 2453.0], [98.9, 2488.0], [99.0, 2576.0], [99.1, 2676.0], [99.2, 2793.0], [99.3, 2934.0], [99.4, 3145.0], [99.5, 3322.0], [99.6, 3585.0], [99.7, 3778.0], [99.8, 4241.0], [99.9, 4707.0], [100.0, 5922.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4655.0, "series": [{"data": [[0.0, 4655.0], [600.0, 329.0], [700.0, 242.0], [800.0, 157.0], [900.0, 160.0], [1000.0, 141.0], [1100.0, 143.0], [1200.0, 94.0], [1300.0, 85.0], [1400.0, 79.0], [1500.0, 59.0], [1600.0, 66.0], [1700.0, 56.0], [1800.0, 32.0], [1900.0, 39.0], [2000.0, 36.0], [2100.0, 33.0], [2300.0, 28.0], [2200.0, 18.0], [2400.0, 27.0], [2500.0, 10.0], [2600.0, 12.0], [2700.0, 7.0], [2800.0, 7.0], [2900.0, 4.0], [3000.0, 4.0], [3100.0, 6.0], [3200.0, 7.0], [3300.0, 5.0], [3400.0, 5.0], [3500.0, 2.0], [3600.0, 4.0], [3700.0, 6.0], [3800.0, 3.0], [3900.0, 2.0], [4000.0, 2.0], [4100.0, 1.0], [4200.0, 3.0], [4300.0, 1.0], [4400.0, 3.0], [4500.0, 3.0], [4600.0, 1.0], [4800.0, 1.0], [4700.0, 2.0], [5100.0, 4.0], [5200.0, 1.0], [5600.0, 1.0], [5900.0, 1.0], [100.0, 1161.0], [200.0, 873.0], [300.0, 517.0], [400.0, 439.0], [500.0, 355.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 480.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4618.0, "series": [{"data": [[0.0, 4618.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1589.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 480.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3245.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 19.930206794682416, "minX": 1.60183494E12, "maxY": 20.0, "series": [{"data": [[1.60183512E12, 19.930206794682416], [1.601835E12, 20.0], [1.60183506E12, 20.0], [1.60183494E12, 19.992709599027954]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183512E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 351.50691290745687, "minX": 1.0, "maxY": 5272.0, "series": [{"data": [[8.0, 3204.0], [2.0, 5272.0], [9.0, 3753.0], [10.0, 3322.0], [11.0, 3103.0], [12.0, 1317.0], [3.0, 5192.0], [13.0, 2329.0], [15.0, 1672.0], [16.0, 2704.0], [4.0, 4407.0], [1.0, 4506.0], [17.0, 1533.5], [18.0, 1514.0], [19.0, 891.5], [20.0, 351.50691290745687], [5.0, 3417.0], [6.0, 4213.0], [7.0, 4595.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[19.9803664921466, 357.0184252919839]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9386.4, "minX": 1.60183494E12, "maxY": 1828144.0333333334, "series": [{"data": [[1.60183512E12, 1670280.0166666666], [1.601835E12, 1828144.0333333334], [1.60183506E12, 1500791.15], [1.60183494E12, 138341.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60183512E12, 33572.03333333333], [1.601835E12, 34241.816666666666], [1.60183506E12, 36055.95], [1.60183494E12, 9386.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183512E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 203.55893074119066, "minX": 1.60183494E12, "maxY": 396.00399068839437, "series": [{"data": [[1.60183512E12, 367.3179468242235], [1.601835E12, 396.00399068839437], [1.60183506E12, 351.47230406599914], [1.60183494E12, 203.55893074119066]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183512E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 201.14823815309853, "minX": 1.60183494E12, "maxY": 388.30395743265717, "series": [{"data": [[1.60183512E12, 360.58013293943833], [1.601835E12, 388.30395743265717], [1.60183506E12, 345.3229228049508], [1.60183494E12, 201.14823815309853]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183512E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011972065181243776, "minX": 1.60183494E12, "maxY": 0.3827460510328075, "series": [{"data": [[1.60183512E12, 0.01292466765140326], [1.601835E12, 0.011972065181243776], [1.60183506E12, 0.015026517383618196], [1.60183494E12, 0.3827460510328075]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183512E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60183494E12, "maxY": 5922.0, "series": [{"data": [[1.60183512E12, 5272.0], [1.601835E12, 5922.0], [1.60183506E12, 5682.0], [1.60183494E12, 1152.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60183512E12, 39.0], [1.601835E12, 39.0], [1.60183506E12, 39.0], [1.60183494E12, 51.28799975395203]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60183512E12, 39.0], [1.601835E12, 39.0], [1.60183506E12, 39.0], [1.60183494E12, 52.21680009841919]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60183512E12, 39.0], [1.601835E12, 39.0], [1.60183506E12, 39.0], [1.60183494E12, 51.803999876976015]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60183512E12, 35.0], [1.601835E12, 36.0], [1.60183506E12, 30.0], [1.60183494E12, 43.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60183512E12, 264.5], [1.601835E12, 291.0], [1.60183506E12, 196.0], [1.60183494E12, 220.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183512E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 3.0, "maxY": 5192.0, "series": [{"data": [[3.0, 5192.0], [4.0, 3585.0], [5.0, 2121.0], [7.0, 1190.5], [8.0, 1429.5], [9.0, 1108.0], [10.0, 1588.0], [11.0, 656.0], [13.0, 1092.0], [14.0, 1147.0], [16.0, 1268.0], [17.0, 759.5], [18.0, 58.0], [19.0, 749.0], [20.0, 929.0], [21.0, 908.0], [22.0, 597.5], [23.0, 668.0], [24.0, 852.0], [25.0, 600.5], [26.0, 898.5], [27.0, 763.0], [29.0, 59.0], [30.0, 390.5], [31.0, 560.0], [33.0, 483.0], [32.0, 535.0], [34.0, 607.0], [35.0, 627.0], [36.0, 367.0], [37.0, 493.5], [39.0, 95.0], [38.0, 320.0], [40.0, 269.0], [41.0, 561.0], [43.0, 373.0], [42.0, 403.0], [44.0, 559.0], [47.0, 379.0], [49.0, 436.0], [50.0, 401.0], [52.0, 191.0], [53.0, 446.0], [54.0, 138.5], [55.0, 83.0], [57.0, 280.0], [59.0, 89.0], [58.0, 240.0], [60.0, 166.5], [61.0, 53.5], [62.0, 180.0], [63.0, 82.5], [66.0, 197.0], [64.0, 182.0], [67.0, 190.5], [65.0, 1002.0], [69.0, 182.0], [75.0, 234.0], [74.0, 211.0], [72.0, 196.0], [73.0, 55.5], [78.0, 134.0], [79.0, 223.5], [81.0, 53.0], [84.0, 130.0], [86.0, 305.0], [89.0, 56.0], [88.0, 199.5], [90.0, 624.0], [94.0, 201.0], [95.0, 161.0], [93.0, 194.5], [92.0, 124.0], [98.0, 286.0], [107.0, 168.0], [110.0, 429.0], [108.0, 201.0], [109.0, 280.5], [113.0, 204.0], [112.0, 158.0], [117.0, 232.0], [116.0, 145.0], [122.0, 117.0], [126.0, 231.0], [124.0, 167.5], [132.0, 205.0], [131.0, 636.0], [135.0, 203.0], [134.0, 160.0], [128.0, 654.0], [143.0, 139.0], [147.0, 228.0], [153.0, 428.5], [176.0, 305.0], [186.0, 130.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 3.5], [9.0, 1398.0], [13.0, 1417.0], [14.0, 490.0], [16.0, 3.0], [19.0, 166.0], [20.0, 1778.0], [21.0, 891.0], [23.0, 112.5], [24.0, 4.0], [25.0, 878.0], [26.0, 600.0], [27.0, 18.0], [30.0, 3318.5], [31.0, 1004.0], [32.0, 3.0], [33.0, 3.0], [34.0, 6.0], [35.0, 537.0], [36.0, 275.0], [37.0, 4.0], [39.0, 4.0], [38.0, 4.0], [40.0, 764.0], [41.0, 5.0], [42.0, 3.0], [43.0, 4.0], [44.0, 5.0], [47.0, 303.0], [49.0, 4.0], [50.0, 5.0], [52.0, 3.0], [53.0, 3.0], [54.0, 66.5], [55.0, 3.0], [57.0, 4.0], [59.0, 12.0], [58.0, 4.0], [61.0, 3.0], [60.0, 3.0], [62.0, 3.0], [63.0, 4.0], [66.0, 96.0], [64.0, 2.0], [65.0, 3.0], [67.0, 5.0], [69.0, 4.5], [74.0, 3.0], [72.0, 374.0], [73.0, 381.0], [78.0, 6.0], [79.0, 4.0], [81.0, 6.0], [84.0, 3.0], [86.0, 4.0], [89.0, 3.0], [88.0, 5.0], [90.0, 4.0], [94.0, 107.0], [93.0, 28.5], [92.0, 3.0], [98.0, 3.0], [107.0, 4.0], [110.0, 4.0], [108.0, 3.0], [109.0, 3.0], [113.0, 75.5], [112.0, 137.0], [117.0, 5.0], [116.0, 5.0], [122.0, 415.5], [126.0, 6.0], [124.0, 3.0], [132.0, 4.0], [131.0, 3.0], [135.0, 3.0], [134.0, 4.0], [128.0, 3.0], [143.0, 23.0], [147.0, 5.0], [153.0, 4.0], [176.0, 6.0], [186.0, 5.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 186.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2.0, "minX": 3.0, "maxY": 5189.0, "series": [{"data": [[3.0, 5189.0], [4.0, 3577.0], [5.0, 2118.0], [7.0, 1151.5], [8.0, 1421.0], [9.0, 1065.0], [10.0, 1587.5], [11.0, 656.0], [13.0, 1084.5], [14.0, 1094.0], [16.0, 1240.5], [17.0, 729.0], [18.0, 57.5], [19.0, 727.0], [20.0, 902.0], [21.0, 838.0], [22.0, 584.5], [23.0, 666.0], [24.0, 805.0], [25.0, 567.5], [26.0, 833.0], [27.0, 763.0], [29.0, 58.0], [30.0, 390.0], [31.0, 544.0], [33.0, 461.0], [32.0, 517.0], [34.0, 551.0], [35.0, 625.5], [36.0, 367.0], [37.0, 460.0], [39.0, 94.0], [38.0, 313.0], [40.0, 267.0], [41.0, 493.0], [43.0, 367.0], [42.0, 386.0], [44.0, 548.5], [47.0, 363.0], [49.0, 417.0], [50.0, 401.0], [52.0, 181.0], [53.0, 445.0], [54.0, 138.5], [55.0, 83.0], [57.0, 277.0], [59.0, 89.0], [58.0, 236.0], [60.0, 166.5], [61.0, 53.5], [62.0, 165.0], [63.0, 82.5], [66.0, 197.0], [64.0, 182.0], [67.0, 190.5], [65.0, 1002.0], [69.0, 182.0], [75.0, 229.0], [74.0, 211.0], [72.0, 196.0], [73.0, 55.0], [78.0, 132.0], [79.0, 223.5], [81.0, 53.0], [84.0, 125.5], [86.0, 272.0], [89.0, 55.5], [88.0, 198.5], [90.0, 567.0], [94.0, 195.0], [95.0, 161.0], [93.0, 193.5], [92.0, 124.0], [98.0, 278.5], [107.0, 168.0], [110.0, 429.0], [108.0, 192.0], [109.0, 280.5], [113.0, 188.0], [112.0, 158.0], [117.0, 227.0], [116.0, 122.0], [122.0, 117.0], [126.0, 224.5], [124.0, 167.5], [132.0, 204.0], [131.0, 559.0], [135.0, 203.0], [134.0, 152.0], [128.0, 632.0], [143.0, 139.0], [147.0, 222.0], [153.0, 425.0], [176.0, 304.0], [186.0, 130.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 3.0], [9.0, 1397.5], [13.0, 1417.0], [14.0, 489.0], [16.0, 3.0], [19.0, 165.0], [20.0, 1777.0], [21.0, 891.0], [23.0, 112.0], [24.0, 4.0], [25.0, 877.0], [26.0, 600.0], [27.0, 18.0], [30.0, 3318.0], [31.0, 1004.0], [32.0, 3.0], [33.0, 3.0], [34.0, 6.0], [35.0, 537.0], [36.0, 274.0], [37.0, 4.0], [39.0, 4.0], [38.0, 4.0], [40.0, 764.0], [41.0, 5.0], [42.0, 3.0], [43.0, 4.0], [44.0, 5.0], [47.0, 302.0], [49.0, 4.0], [50.0, 5.0], [52.0, 3.0], [53.0, 3.0], [54.0, 66.5], [55.0, 3.0], [57.0, 4.0], [59.0, 12.0], [58.0, 4.0], [61.0, 3.0], [60.0, 3.0], [62.0, 3.0], [63.0, 3.0], [66.0, 93.0], [64.0, 2.0], [65.0, 3.0], [67.0, 5.0], [69.0, 4.5], [74.0, 3.0], [72.0, 373.5], [73.0, 381.0], [78.0, 6.0], [79.0, 4.0], [81.0, 3.0], [84.0, 3.0], [86.0, 4.0], [89.0, 3.0], [88.0, 5.0], [90.0, 3.0], [94.0, 107.0], [93.0, 28.5], [92.0, 3.0], [98.0, 3.0], [107.0, 4.0], [110.0, 4.0], [108.0, 3.0], [109.0, 3.0], [113.0, 75.0], [112.0, 137.0], [117.0, 5.0], [116.0, 5.0], [122.0, 415.5], [126.0, 6.0], [124.0, 3.0], [132.0, 4.0], [131.0, 3.0], [135.0, 3.0], [134.0, 4.0], [128.0, 3.0], [143.0, 22.0], [147.0, 5.0], [153.0, 4.0], [176.0, 5.0], [186.0, 5.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 186.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 14.05, "minX": 1.60183494E12, "maxY": 56.56666666666667, "series": [{"data": [[1.60183512E12, 44.8], [1.601835E12, 50.11666666666667], [1.60183506E12, 56.56666666666667], [1.60183494E12, 14.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183512E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.60183494E12, "maxY": 41.28333333333333, "series": [{"data": [[1.60183512E12, 26.933333333333334], [1.601835E12, 34.65], [1.60183506E12, 41.28333333333333], [1.60183494E12, 8.583333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60183512E12, 18.2], [1.601835E12, 15.366666666666667], [1.60183506E12, 15.083333333333334], [1.60183494E12, 5.133333333333334]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.601835E12, 0.1], [1.60183506E12, 0.2]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183512E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.133333333333334, "minX": 1.60183494E12, "maxY": 41.28333333333333, "series": [{"data": [[1.60183512E12, 26.933333333333334], [1.601835E12, 34.65], [1.60183506E12, 41.28333333333333], [1.60183494E12, 8.583333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60183512E12, 18.2], [1.601835E12, 15.466666666666667], [1.60183506E12, 15.283333333333333], [1.60183494E12, 5.133333333333334]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183512E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.133333333333334, "minX": 1.60183494E12, "maxY": 41.28333333333333, "series": [{"data": [[1.60183512E12, 26.933333333333334], [1.601835E12, 34.65], [1.60183506E12, 41.28333333333333], [1.60183494E12, 8.583333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60183512E12, 18.2], [1.601835E12, 15.466666666666667], [1.60183506E12, 15.283333333333333], [1.60183494E12, 5.133333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183512E12, "title": "Total Transactions Per Second"}},
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

