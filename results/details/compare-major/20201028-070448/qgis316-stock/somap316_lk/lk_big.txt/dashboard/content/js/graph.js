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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 4148.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 4.0], [1.7, 4.0], [1.8, 4.0], [1.9, 4.0], [2.0, 4.0], [2.1, 4.0], [2.2, 4.0], [2.3, 4.0], [2.4, 4.0], [2.5, 5.0], [2.6, 5.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 5.0], [3.2, 5.0], [3.3, 5.0], [3.4, 5.0], [3.5, 5.0], [3.6, 5.0], [3.7, 5.0], [3.8, 5.0], [3.9, 5.0], [4.0, 5.0], [4.1, 5.0], [4.2, 5.0], [4.3, 5.0], [4.4, 5.0], [4.5, 5.0], [4.6, 5.0], [4.7, 5.0], [4.8, 5.0], [4.9, 5.0], [5.0, 5.0], [5.1, 5.0], [5.2, 5.0], [5.3, 5.0], [5.4, 5.0], [5.5, 5.0], [5.6, 5.0], [5.7, 5.0], [5.8, 5.0], [5.9, 5.0], [6.0, 5.0], [6.1, 5.0], [6.2, 5.0], [6.3, 5.0], [6.4, 6.0], [6.5, 6.0], [6.6, 6.0], [6.7, 6.0], [6.8, 6.0], [6.9, 6.0], [7.0, 6.0], [7.1, 6.0], [7.2, 6.0], [7.3, 6.0], [7.4, 6.0], [7.5, 6.0], [7.6, 6.0], [7.7, 6.0], [7.8, 6.0], [7.9, 6.0], [8.0, 6.0], [8.1, 6.0], [8.2, 6.0], [8.3, 6.0], [8.4, 6.0], [8.5, 6.0], [8.6, 6.0], [8.7, 6.0], [8.8, 6.0], [8.9, 6.0], [9.0, 6.0], [9.1, 6.0], [9.2, 6.0], [9.3, 6.0], [9.4, 6.0], [9.5, 6.0], [9.6, 6.0], [9.7, 6.0], [9.8, 6.0], [9.9, 6.0], [10.0, 6.0], [10.1, 6.0], [10.2, 6.0], [10.3, 6.0], [10.4, 6.0], [10.5, 6.0], [10.6, 6.0], [10.7, 7.0], [10.8, 7.0], [10.9, 7.0], [11.0, 7.0], [11.1, 7.0], [11.2, 7.0], [11.3, 7.0], [11.4, 7.0], [11.5, 7.0], [11.6, 7.0], [11.7, 7.0], [11.8, 7.0], [11.9, 7.0], [12.0, 7.0], [12.1, 7.0], [12.2, 7.0], [12.3, 7.0], [12.4, 7.0], [12.5, 7.0], [12.6, 7.0], [12.7, 7.0], [12.8, 7.0], [12.9, 7.0], [13.0, 7.0], [13.1, 7.0], [13.2, 7.0], [13.3, 7.0], [13.4, 7.0], [13.5, 7.0], [13.6, 7.0], [13.7, 7.0], [13.8, 7.0], [13.9, 7.0], [14.0, 7.0], [14.1, 7.0], [14.2, 7.0], [14.3, 7.0], [14.4, 7.0], [14.5, 7.0], [14.6, 7.0], [14.7, 7.0], [14.8, 7.0], [14.9, 7.0], [15.0, 7.0], [15.1, 7.0], [15.2, 7.0], [15.3, 7.0], [15.4, 7.0], [15.5, 7.0], [15.6, 7.0], [15.7, 8.0], [15.8, 8.0], [15.9, 8.0], [16.0, 8.0], [16.1, 8.0], [16.2, 8.0], [16.3, 8.0], [16.4, 8.0], [16.5, 8.0], [16.6, 8.0], [16.7, 8.0], [16.8, 8.0], [16.9, 8.0], [17.0, 8.0], [17.1, 8.0], [17.2, 8.0], [17.3, 8.0], [17.4, 8.0], [17.5, 8.0], [17.6, 8.0], [17.7, 8.0], [17.8, 8.0], [17.9, 8.0], [18.0, 8.0], [18.1, 8.0], [18.2, 8.0], [18.3, 8.0], [18.4, 8.0], [18.5, 8.0], [18.6, 8.0], [18.7, 8.0], [18.8, 8.0], [18.9, 8.0], [19.0, 8.0], [19.1, 8.0], [19.2, 8.0], [19.3, 8.0], [19.4, 8.0], [19.5, 8.0], [19.6, 8.0], [19.7, 8.0], [19.8, 8.0], [19.9, 8.0], [20.0, 8.0], [20.1, 8.0], [20.2, 9.0], [20.3, 9.0], [20.4, 9.0], [20.5, 9.0], [20.6, 9.0], [20.7, 9.0], [20.8, 9.0], [20.9, 9.0], [21.0, 9.0], [21.1, 9.0], [21.2, 9.0], [21.3, 9.0], [21.4, 9.0], [21.5, 9.0], [21.6, 9.0], [21.7, 9.0], [21.8, 9.0], [21.9, 9.0], [22.0, 9.0], [22.1, 9.0], [22.2, 9.0], [22.3, 9.0], [22.4, 9.0], [22.5, 9.0], [22.6, 9.0], [22.7, 9.0], [22.8, 9.0], [22.9, 9.0], [23.0, 9.0], [23.1, 9.0], [23.2, 9.0], [23.3, 9.0], [23.4, 10.0], [23.5, 10.0], [23.6, 10.0], [23.7, 10.0], [23.8, 10.0], [23.9, 10.0], [24.0, 10.0], [24.1, 10.0], [24.2, 10.0], [24.3, 10.0], [24.4, 10.0], [24.5, 10.0], [24.6, 10.0], [24.7, 10.0], [24.8, 10.0], [24.9, 10.0], [25.0, 10.0], [25.1, 10.0], [25.2, 10.0], [25.3, 10.0], [25.4, 10.0], [25.5, 10.0], [25.6, 10.0], [25.7, 10.0], [25.8, 10.0], [25.9, 10.0], [26.0, 10.0], [26.1, 11.0], [26.2, 11.0], [26.3, 11.0], [26.4, 11.0], [26.5, 11.0], [26.6, 11.0], [26.7, 11.0], [26.8, 11.0], [26.9, 11.0], [27.0, 11.0], [27.1, 11.0], [27.2, 11.0], [27.3, 11.0], [27.4, 11.0], [27.5, 11.0], [27.6, 11.0], [27.7, 11.0], [27.8, 11.0], [27.9, 11.0], [28.0, 11.0], [28.1, 12.0], [28.2, 12.0], [28.3, 12.0], [28.4, 12.0], [28.5, 12.0], [28.6, 12.0], [28.7, 12.0], [28.8, 12.0], [28.9, 12.0], [29.0, 12.0], [29.1, 12.0], [29.2, 12.0], [29.3, 12.0], [29.4, 12.0], [29.5, 13.0], [29.6, 13.0], [29.7, 13.0], [29.8, 13.0], [29.9, 13.0], [30.0, 13.0], [30.1, 13.0], [30.2, 13.0], [30.3, 13.0], [30.4, 13.0], [30.5, 13.0], [30.6, 13.0], [30.7, 13.0], [30.8, 13.0], [30.9, 14.0], [31.0, 14.0], [31.1, 14.0], [31.2, 14.0], [31.3, 14.0], [31.4, 14.0], [31.5, 14.0], [31.6, 14.0], [31.7, 14.0], [31.8, 14.0], [31.9, 14.0], [32.0, 14.0], [32.1, 14.0], [32.2, 15.0], [32.3, 15.0], [32.4, 15.0], [32.5, 15.0], [32.6, 15.0], [32.7, 15.0], [32.8, 15.0], [32.9, 15.0], [33.0, 15.0], [33.1, 16.0], [33.2, 16.0], [33.3, 16.0], [33.4, 16.0], [33.5, 16.0], [33.6, 16.0], [33.7, 16.0], [33.8, 16.0], [33.9, 16.0], [34.0, 16.0], [34.1, 16.0], [34.2, 17.0], [34.3, 17.0], [34.4, 17.0], [34.5, 17.0], [34.6, 17.0], [34.7, 17.0], [34.8, 17.0], [34.9, 17.0], [35.0, 18.0], [35.1, 18.0], [35.2, 18.0], [35.3, 18.0], [35.4, 18.0], [35.5, 18.0], [35.6, 18.0], [35.7, 19.0], [35.8, 19.0], [35.9, 19.0], [36.0, 19.0], [36.1, 19.0], [36.2, 20.0], [36.3, 20.0], [36.4, 20.0], [36.5, 20.0], [36.6, 20.0], [36.7, 20.0], [36.8, 21.0], [36.9, 21.0], [37.0, 21.0], [37.1, 21.0], [37.2, 21.0], [37.3, 22.0], [37.4, 22.0], [37.5, 22.0], [37.6, 22.0], [37.7, 23.0], [37.8, 23.0], [37.9, 24.0], [38.0, 24.0], [38.1, 24.0], [38.2, 25.0], [38.3, 25.0], [38.4, 25.0], [38.5, 26.0], [38.6, 26.0], [38.7, 27.0], [38.8, 27.0], [38.9, 28.0], [39.0, 28.0], [39.1, 29.0], [39.2, 29.0], [39.3, 30.0], [39.4, 30.0], [39.5, 31.0], [39.6, 32.0], [39.7, 34.0], [39.8, 34.0], [39.9, 34.0], [40.0, 35.0], [40.1, 36.0], [40.2, 37.0], [40.3, 37.0], [40.4, 38.0], [40.5, 38.0], [40.6, 38.0], [40.7, 39.0], [40.8, 39.0], [40.9, 39.0], [41.0, 40.0], [41.1, 40.0], [41.2, 40.0], [41.3, 41.0], [41.4, 41.0], [41.5, 42.0], [41.6, 42.0], [41.7, 42.0], [41.8, 42.0], [41.9, 43.0], [42.0, 43.0], [42.1, 43.0], [42.2, 43.0], [42.3, 44.0], [42.4, 44.0], [42.5, 44.0], [42.6, 45.0], [42.7, 45.0], [42.8, 45.0], [42.9, 46.0], [43.0, 46.0], [43.1, 47.0], [43.2, 47.0], [43.3, 48.0], [43.4, 48.0], [43.5, 49.0], [43.6, 50.0], [43.7, 51.0], [43.8, 51.0], [43.9, 52.0], [44.0, 53.0], [44.1, 54.0], [44.2, 54.0], [44.3, 56.0], [44.4, 57.0], [44.5, 59.0], [44.6, 62.0], [44.7, 62.0], [44.8, 63.0], [44.9, 64.0], [45.0, 64.0], [45.1, 65.0], [45.2, 67.0], [45.3, 67.0], [45.4, 69.0], [45.5, 70.0], [45.6, 71.0], [45.7, 72.0], [45.8, 74.0], [45.9, 75.0], [46.0, 76.0], [46.1, 77.0], [46.2, 77.0], [46.3, 78.0], [46.4, 79.0], [46.5, 80.0], [46.6, 81.0], [46.7, 81.0], [46.8, 82.0], [46.9, 82.0], [47.0, 83.0], [47.1, 84.0], [47.2, 85.0], [47.3, 85.0], [47.4, 86.0], [47.5, 87.0], [47.6, 88.0], [47.7, 89.0], [47.8, 90.0], [47.9, 91.0], [48.0, 92.0], [48.1, 94.0], [48.2, 95.0], [48.3, 96.0], [48.4, 96.0], [48.5, 97.0], [48.6, 98.0], [48.7, 99.0], [48.8, 101.0], [48.9, 103.0], [49.0, 104.0], [49.1, 105.0], [49.2, 106.0], [49.3, 107.0], [49.4, 108.0], [49.5, 110.0], [49.6, 111.0], [49.7, 112.0], [49.8, 114.0], [49.9, 115.0], [50.0, 116.0], [50.1, 118.0], [50.2, 120.0], [50.3, 121.0], [50.4, 121.0], [50.5, 123.0], [50.6, 124.0], [50.7, 125.0], [50.8, 126.0], [50.9, 127.0], [51.0, 128.0], [51.1, 129.0], [51.2, 130.0], [51.3, 131.0], [51.4, 132.0], [51.5, 134.0], [51.6, 135.0], [51.7, 136.0], [51.8, 137.0], [51.9, 139.0], [52.0, 141.0], [52.1, 142.0], [52.2, 143.0], [52.3, 144.0], [52.4, 146.0], [52.5, 147.0], [52.6, 148.0], [52.7, 149.0], [52.8, 150.0], [52.9, 151.0], [53.0, 152.0], [53.1, 154.0], [53.2, 154.0], [53.3, 156.0], [53.4, 158.0], [53.5, 159.0], [53.6, 160.0], [53.7, 162.0], [53.8, 163.0], [53.9, 164.0], [54.0, 164.0], [54.1, 165.0], [54.2, 166.0], [54.3, 166.0], [54.4, 166.0], [54.5, 167.0], [54.6, 169.0], [54.7, 170.0], [54.8, 170.0], [54.9, 171.0], [55.0, 172.0], [55.1, 173.0], [55.2, 174.0], [55.3, 175.0], [55.4, 176.0], [55.5, 176.0], [55.6, 177.0], [55.7, 178.0], [55.8, 179.0], [55.9, 181.0], [56.0, 181.0], [56.1, 182.0], [56.2, 184.0], [56.3, 185.0], [56.4, 186.0], [56.5, 187.0], [56.6, 188.0], [56.7, 189.0], [56.8, 190.0], [56.9, 191.0], [57.0, 193.0], [57.1, 194.0], [57.2, 195.0], [57.3, 196.0], [57.4, 197.0], [57.5, 198.0], [57.6, 199.0], [57.7, 200.0], [57.8, 201.0], [57.9, 201.0], [58.0, 203.0], [58.1, 204.0], [58.2, 204.0], [58.3, 205.0], [58.4, 206.0], [58.5, 207.0], [58.6, 208.0], [58.7, 209.0], [58.8, 211.0], [58.9, 212.0], [59.0, 212.0], [59.1, 212.0], [59.2, 213.0], [59.3, 214.0], [59.4, 215.0], [59.5, 216.0], [59.6, 217.0], [59.7, 218.0], [59.8, 219.0], [59.9, 220.0], [60.0, 220.0], [60.1, 221.0], [60.2, 222.0], [60.3, 224.0], [60.4, 225.0], [60.5, 226.0], [60.6, 228.0], [60.7, 229.0], [60.8, 229.0], [60.9, 230.0], [61.0, 231.0], [61.1, 232.0], [61.2, 232.0], [61.3, 234.0], [61.4, 235.0], [61.5, 236.0], [61.6, 237.0], [61.7, 239.0], [61.8, 240.0], [61.9, 241.0], [62.0, 243.0], [62.1, 243.0], [62.2, 244.0], [62.3, 246.0], [62.4, 247.0], [62.5, 248.0], [62.6, 249.0], [62.7, 250.0], [62.8, 250.0], [62.9, 252.0], [63.0, 252.0], [63.1, 253.0], [63.2, 254.0], [63.3, 255.0], [63.4, 258.0], [63.5, 261.0], [63.6, 263.0], [63.7, 266.0], [63.8, 268.0], [63.9, 270.0], [64.0, 272.0], [64.1, 274.0], [64.2, 275.0], [64.3, 276.0], [64.4, 278.0], [64.5, 278.0], [64.6, 280.0], [64.7, 281.0], [64.8, 283.0], [64.9, 285.0], [65.0, 287.0], [65.1, 289.0], [65.2, 290.0], [65.3, 292.0], [65.4, 293.0], [65.5, 295.0], [65.6, 296.0], [65.7, 297.0], [65.8, 300.0], [65.9, 304.0], [66.0, 306.0], [66.1, 308.0], [66.2, 309.0], [66.3, 310.0], [66.4, 311.0], [66.5, 312.0], [66.6, 313.0], [66.7, 315.0], [66.8, 318.0], [66.9, 319.0], [67.0, 320.0], [67.1, 322.0], [67.2, 323.0], [67.3, 324.0], [67.4, 325.0], [67.5, 327.0], [67.6, 328.0], [67.7, 330.0], [67.8, 331.0], [67.9, 332.0], [68.0, 334.0], [68.1, 335.0], [68.2, 338.0], [68.3, 338.0], [68.4, 339.0], [68.5, 340.0], [68.6, 341.0], [68.7, 342.0], [68.8, 343.0], [68.9, 345.0], [69.0, 347.0], [69.1, 349.0], [69.2, 351.0], [69.3, 354.0], [69.4, 356.0], [69.5, 358.0], [69.6, 359.0], [69.7, 360.0], [69.8, 362.0], [69.9, 365.0], [70.0, 366.0], [70.1, 368.0], [70.2, 370.0], [70.3, 372.0], [70.4, 373.0], [70.5, 374.0], [70.6, 375.0], [70.7, 376.0], [70.8, 377.0], [70.9, 378.0], [71.0, 379.0], [71.1, 381.0], [71.2, 384.0], [71.3, 385.0], [71.4, 386.0], [71.5, 390.0], [71.6, 390.0], [71.7, 393.0], [71.8, 395.0], [71.9, 396.0], [72.0, 397.0], [72.1, 398.0], [72.2, 399.0], [72.3, 400.0], [72.4, 401.0], [72.5, 402.0], [72.6, 404.0], [72.7, 406.0], [72.8, 409.0], [72.9, 411.0], [73.0, 412.0], [73.1, 413.0], [73.2, 416.0], [73.3, 419.0], [73.4, 421.0], [73.5, 423.0], [73.6, 424.0], [73.7, 426.0], [73.8, 427.0], [73.9, 428.0], [74.0, 429.0], [74.1, 430.0], [74.2, 433.0], [74.3, 434.0], [74.4, 435.0], [74.5, 438.0], [74.6, 439.0], [74.7, 440.0], [74.8, 441.0], [74.9, 445.0], [75.0, 446.0], [75.1, 446.0], [75.2, 448.0], [75.3, 451.0], [75.4, 455.0], [75.5, 458.0], [75.6, 461.0], [75.7, 465.0], [75.8, 467.0], [75.9, 468.0], [76.0, 471.0], [76.1, 474.0], [76.2, 474.0], [76.3, 477.0], [76.4, 480.0], [76.5, 483.0], [76.6, 486.0], [76.7, 488.0], [76.8, 489.0], [76.9, 493.0], [77.0, 495.0], [77.1, 496.0], [77.2, 498.0], [77.3, 502.0], [77.4, 503.0], [77.5, 506.0], [77.6, 507.0], [77.7, 512.0], [77.8, 513.0], [77.9, 516.0], [78.0, 517.0], [78.1, 522.0], [78.2, 525.0], [78.3, 528.0], [78.4, 531.0], [78.5, 531.0], [78.6, 533.0], [78.7, 536.0], [78.8, 536.0], [78.9, 540.0], [79.0, 541.0], [79.1, 544.0], [79.2, 544.0], [79.3, 547.0], [79.4, 549.0], [79.5, 552.0], [79.6, 552.0], [79.7, 553.0], [79.8, 556.0], [79.9, 558.0], [80.0, 560.0], [80.1, 563.0], [80.2, 565.0], [80.3, 567.0], [80.4, 569.0], [80.5, 571.0], [80.6, 573.0], [80.7, 576.0], [80.8, 578.0], [80.9, 579.0], [81.0, 581.0], [81.1, 581.0], [81.2, 584.0], [81.3, 586.0], [81.4, 587.0], [81.5, 588.0], [81.6, 590.0], [81.7, 592.0], [81.8, 594.0], [81.9, 596.0], [82.0, 598.0], [82.1, 601.0], [82.2, 603.0], [82.3, 605.0], [82.4, 607.0], [82.5, 611.0], [82.6, 611.0], [82.7, 614.0], [82.8, 615.0], [82.9, 617.0], [83.0, 621.0], [83.1, 626.0], [83.2, 628.0], [83.3, 632.0], [83.4, 636.0], [83.5, 638.0], [83.6, 640.0], [83.7, 643.0], [83.8, 648.0], [83.9, 649.0], [84.0, 654.0], [84.1, 656.0], [84.2, 660.0], [84.3, 661.0], [84.4, 666.0], [84.5, 668.0], [84.6, 670.0], [84.7, 674.0], [84.8, 678.0], [84.9, 681.0], [85.0, 685.0], [85.1, 688.0], [85.2, 690.0], [85.3, 692.0], [85.4, 694.0], [85.5, 697.0], [85.6, 698.0], [85.7, 700.0], [85.8, 701.0], [85.9, 705.0], [86.0, 710.0], [86.1, 713.0], [86.2, 714.0], [86.3, 723.0], [86.4, 723.0], [86.5, 724.0], [86.6, 726.0], [86.7, 728.0], [86.8, 731.0], [86.9, 733.0], [87.0, 735.0], [87.1, 737.0], [87.2, 741.0], [87.3, 744.0], [87.4, 748.0], [87.5, 750.0], [87.6, 752.0], [87.7, 756.0], [87.8, 759.0], [87.9, 761.0], [88.0, 765.0], [88.1, 767.0], [88.2, 769.0], [88.3, 772.0], [88.4, 774.0], [88.5, 778.0], [88.6, 784.0], [88.7, 786.0], [88.8, 790.0], [88.9, 793.0], [89.0, 796.0], [89.1, 800.0], [89.2, 802.0], [89.3, 806.0], [89.4, 813.0], [89.5, 818.0], [89.6, 825.0], [89.7, 829.0], [89.8, 833.0], [89.9, 836.0], [90.0, 837.0], [90.1, 840.0], [90.2, 843.0], [90.3, 844.0], [90.4, 847.0], [90.5, 850.0], [90.6, 858.0], [90.7, 860.0], [90.8, 874.0], [90.9, 883.0], [91.0, 886.0], [91.1, 901.0], [91.2, 912.0], [91.3, 919.0], [91.4, 926.0], [91.5, 929.0], [91.6, 934.0], [91.7, 946.0], [91.8, 954.0], [91.9, 959.0], [92.0, 968.0], [92.1, 976.0], [92.2, 981.0], [92.3, 986.0], [92.4, 993.0], [92.5, 998.0], [92.6, 1013.0], [92.7, 1020.0], [92.8, 1025.0], [92.9, 1029.0], [93.0, 1037.0], [93.1, 1042.0], [93.2, 1052.0], [93.3, 1057.0], [93.4, 1072.0], [93.5, 1078.0], [93.6, 1084.0], [93.7, 1088.0], [93.8, 1094.0], [93.9, 1109.0], [94.0, 1114.0], [94.1, 1119.0], [94.2, 1123.0], [94.3, 1137.0], [94.4, 1146.0], [94.5, 1153.0], [94.6, 1159.0], [94.7, 1167.0], [94.8, 1172.0], [94.9, 1174.0], [95.0, 1181.0], [95.1, 1190.0], [95.2, 1195.0], [95.3, 1201.0], [95.4, 1208.0], [95.5, 1212.0], [95.6, 1217.0], [95.7, 1225.0], [95.8, 1237.0], [95.9, 1247.0], [96.0, 1254.0], [96.1, 1262.0], [96.2, 1276.0], [96.3, 1281.0], [96.4, 1286.0], [96.5, 1296.0], [96.6, 1313.0], [96.7, 1326.0], [96.8, 1340.0], [96.9, 1346.0], [97.0, 1367.0], [97.1, 1382.0], [97.2, 1389.0], [97.3, 1410.0], [97.4, 1428.0], [97.5, 1448.0], [97.6, 1461.0], [97.7, 1471.0], [97.8, 1508.0], [97.9, 1527.0], [98.0, 1543.0], [98.1, 1557.0], [98.2, 1588.0], [98.3, 1626.0], [98.4, 1678.0], [98.5, 1756.0], [98.6, 1786.0], [98.7, 1879.0], [98.8, 1926.0], [98.9, 1954.0], [99.0, 2007.0], [99.1, 2031.0], [99.2, 2141.0], [99.3, 2186.0], [99.4, 2238.0], [99.5, 2278.0], [99.6, 2347.0], [99.7, 2448.0], [99.8, 2880.0], [99.9, 3095.0], [100.0, 4148.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2563.0, "series": [{"data": [[0.0, 2563.0], [600.0, 190.0], [700.0, 178.0], [800.0, 106.0], [900.0, 76.0], [1000.0, 72.0], [1100.0, 71.0], [1200.0, 67.0], [1300.0, 39.0], [1400.0, 28.0], [1500.0, 24.0], [100.0, 469.0], [1600.0, 10.0], [1700.0, 11.0], [1800.0, 6.0], [1900.0, 13.0], [2000.0, 10.0], [2100.0, 7.0], [2200.0, 10.0], [2300.0, 8.0], [2400.0, 3.0], [2500.0, 2.0], [2600.0, 1.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 3.0], [3000.0, 1.0], [200.0, 429.0], [3200.0, 1.0], [3400.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [4100.0, 1.0], [300.0, 342.0], [400.0, 261.0], [500.0, 254.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 117.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4065.0, "series": [{"data": [[0.0, 4065.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1080.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 117.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.741228070175435, "minX": 1.60387116E12, "maxY": 10.0, "series": [{"data": [[1.60387122E12, 10.0], [1.60387116E12, 9.741228070175435], [1.60387134E12, 9.956087824351297], [1.60387128E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387134E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 89.0, "minX": 1.0, "maxY": 4148.0, "series": [{"data": [[4.0, 752.75], [8.0, 486.0], [2.0, 3602.0], [1.0, 4148.0], [9.0, 712.8333333333334], [5.0, 89.0], [10.0, 299.1289398280793], [3.0, 1257.0], [6.0, 1247.4], [7.0, 591.6666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.9804256936526, 302.8386545039909]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2048.866666666667, "minX": 1.60387116E12, "maxY": 1697282.0666666667, "series": [{"data": [[1.60387122E12, 1697282.0666666667], [1.60387116E12, 56240.1], [1.60387134E12, 927773.0166666667], [1.60387128E12, 1568402.2666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60387122E12, 13767.366666666667], [1.60387116E12, 2048.866666666667], [1.60387134E12, 8830.25], [1.60387128E12, 20844.466666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387134E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 239.14035087719287, "minX": 1.60387116E12, "maxY": 375.38185255198425, "series": [{"data": [[1.60387122E12, 375.38185255198425], [1.60387116E12, 239.14035087719287], [1.60387134E12, 343.7954091816366], [1.60387128E12, 244.90756646216738]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387134E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 238.84649122807, "minX": 1.60387116E12, "maxY": 374.78638941398896, "series": [{"data": [[1.60387122E12, 374.78638941398896], [1.60387116E12, 238.84649122807], [1.60387134E12, 343.31037924151696], [1.60387128E12, 244.59427402862994]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387134E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007770961145194284, "minX": 1.60387116E12, "maxY": 0.36403508771929843, "series": [{"data": [[1.60387122E12, 0.00882167611846252], [1.60387116E12, 0.36403508771929843], [1.60387134E12, 0.009980039920159686], [1.60387128E12, 0.007770961145194284]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387134E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.60387116E12, "maxY": 4148.0, "series": [{"data": [[1.60387122E12, 2528.0], [1.60387116E12, 1565.0], [1.60387134E12, 4148.0], [1.60387128E12, 3297.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60387122E12, 4.0], [1.60387116E12, 4.060999945402145], [1.60387134E12, 4.0], [1.60387128E12, 4.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60387122E12, 4.0], [1.60387116E12, 4.267100021839141], [1.60387134E12, 4.0], [1.60387128E12, 4.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60387122E12, 4.0], [1.60387116E12, 4.175499972701072], [1.60387134E12, 4.0], [1.60387128E12, 4.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60387122E12, 4.0], [1.60387116E12, 4.0], [1.60387134E12, 4.0], [1.60387128E12, 3.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60387122E12, 237.0], [1.60387116E12, 17.0], [1.60387134E12, 180.0], [1.60387128E12, 72.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387134E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 8.0, "minX": 1.0, "maxY": 4148.0, "series": [{"data": [[2.0, 1257.0], [3.0, 1786.0], [4.0, 2779.0], [5.0, 1172.0], [6.0, 1477.5], [7.0, 1052.0], [8.0, 1224.5], [9.0, 691.0], [10.0, 711.5], [11.0, 699.0], [12.0, 726.0], [13.0, 759.0], [14.0, 702.0], [15.0, 491.5], [16.0, 437.5], [17.0, 426.0], [18.0, 509.0], [19.0, 578.0], [20.0, 517.5], [21.0, 495.5], [22.0, 359.0], [23.0, 349.5], [24.0, 265.5], [25.0, 345.0], [26.0, 200.0], [27.0, 366.5], [28.0, 11.5], [29.0, 209.0], [30.0, 80.0], [31.0, 212.5], [32.0, 22.0], [33.0, 29.0], [34.0, 17.5], [35.0, 276.0], [37.0, 28.0], [36.0, 222.5], [38.0, 102.5], [39.0, 182.0], [40.0, 174.5], [43.0, 71.0], [42.0, 9.0], [44.0, 98.5], [45.0, 107.0], [46.0, 15.5], [47.0, 176.0], [49.0, 16.5], [48.0, 101.5], [52.0, 18.5], [53.0, 163.0], [54.0, 15.5], [58.0, 75.0], [59.0, 79.0], [63.0, 14.0], [62.0, 111.0], [67.0, 72.0], [64.0, 9.5], [65.0, 9.0], [68.0, 10.0], [71.0, 10.0], [77.0, 21.0], [85.0, 17.0], [87.0, 8.0], [91.0, 10.0], [93.0, 86.0], [94.0, 65.5], [104.0, 80.0], [107.0, 17.0], [119.0, 9.0], [124.0, 9.5], [129.0, 25.0], [128.0, 13.0], [1.0, 4148.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 129.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8.0, "minX": 1.0, "maxY": 4147.0, "series": [{"data": [[2.0, 1254.5], [3.0, 1786.0], [4.0, 2778.0], [5.0, 1172.0], [6.0, 1475.0], [7.0, 1047.0], [8.0, 1223.5], [9.0, 690.0], [10.0, 711.0], [11.0, 699.0], [12.0, 724.5], [13.0, 757.0], [14.0, 701.5], [15.0, 490.5], [16.0, 436.5], [17.0, 425.0], [18.0, 507.0], [19.0, 577.0], [20.0, 515.0], [21.0, 494.0], [22.0, 357.0], [23.0, 349.5], [24.0, 264.5], [25.0, 344.5], [26.0, 199.5], [27.0, 365.5], [28.0, 11.5], [29.0, 209.0], [30.0, 79.5], [31.0, 212.5], [32.0, 22.0], [33.0, 29.0], [34.0, 17.5], [35.0, 275.0], [37.0, 28.0], [36.0, 221.0], [38.0, 102.5], [39.0, 182.0], [40.0, 174.0], [43.0, 71.0], [42.0, 9.0], [44.0, 97.5], [45.0, 106.0], [46.0, 15.5], [47.0, 175.0], [49.0, 16.5], [48.0, 101.0], [52.0, 18.0], [53.0, 162.0], [54.0, 15.5], [58.0, 75.0], [59.0, 79.0], [63.0, 14.0], [62.0, 110.5], [67.0, 72.0], [64.0, 9.5], [65.0, 9.0], [68.0, 10.0], [71.0, 10.0], [77.0, 21.0], [85.0, 17.0], [87.0, 8.0], [91.0, 10.0], [93.0, 86.0], [94.0, 65.0], [104.0, 80.0], [107.0, 17.0], [119.0, 9.0], [124.0, 9.5], [129.0, 25.0], [128.0, 13.0], [1.0, 4147.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 129.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.966666666666667, "minX": 1.60387116E12, "maxY": 40.733333333333334, "series": [{"data": [[1.60387122E12, 26.45], [1.60387116E12, 3.966666666666667], [1.60387134E12, 16.55], [1.60387128E12, 40.733333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387134E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.8, "minX": 1.60387116E12, "maxY": 40.75, "series": [{"data": [[1.60387122E12, 26.45], [1.60387116E12, 3.8], [1.60387134E12, 16.7], [1.60387128E12, 40.75]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387134E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.8, "minX": 1.60387116E12, "maxY": 40.75, "series": [{"data": [[1.60387122E12, 26.45], [1.60387116E12, 3.8], [1.60387134E12, 16.7], [1.60387128E12, 40.75]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387134E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.8, "minX": 1.60387116E12, "maxY": 40.75, "series": [{"data": [[1.60387122E12, 26.45], [1.60387116E12, 3.8], [1.60387134E12, 16.7], [1.60387128E12, 40.75]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387134E12, "title": "Total Transactions Per Second"}},
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

