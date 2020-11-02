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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 3218.0, "series": [{"data": [[0.0, 3.0], [0.1, 3.0], [0.2, 3.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 4.0], [1.7, 4.0], [1.8, 4.0], [1.9, 4.0], [2.0, 4.0], [2.1, 4.0], [2.2, 4.0], [2.3, 4.0], [2.4, 5.0], [2.5, 5.0], [2.6, 5.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 5.0], [3.2, 5.0], [3.3, 5.0], [3.4, 5.0], [3.5, 5.0], [3.6, 5.0], [3.7, 5.0], [3.8, 5.0], [3.9, 5.0], [4.0, 5.0], [4.1, 5.0], [4.2, 5.0], [4.3, 5.0], [4.4, 5.0], [4.5, 5.0], [4.6, 5.0], [4.7, 6.0], [4.8, 6.0], [4.9, 6.0], [5.0, 6.0], [5.1, 6.0], [5.2, 6.0], [5.3, 6.0], [5.4, 6.0], [5.5, 6.0], [5.6, 6.0], [5.7, 6.0], [5.8, 6.0], [5.9, 6.0], [6.0, 6.0], [6.1, 6.0], [6.2, 6.0], [6.3, 6.0], [6.4, 6.0], [6.5, 6.0], [6.6, 6.0], [6.7, 6.0], [6.8, 6.0], [6.9, 6.0], [7.0, 6.0], [7.1, 6.0], [7.2, 6.0], [7.3, 6.0], [7.4, 6.0], [7.5, 6.0], [7.6, 6.0], [7.7, 6.0], [7.8, 6.0], [7.9, 6.0], [8.0, 6.0], [8.1, 6.0], [8.2, 6.0], [8.3, 6.0], [8.4, 6.0], [8.5, 6.0], [8.6, 6.0], [8.7, 6.0], [8.8, 6.0], [8.9, 7.0], [9.0, 7.0], [9.1, 7.0], [9.2, 7.0], [9.3, 7.0], [9.4, 7.0], [9.5, 7.0], [9.6, 7.0], [9.7, 7.0], [9.8, 7.0], [9.9, 7.0], [10.0, 7.0], [10.1, 7.0], [10.2, 7.0], [10.3, 7.0], [10.4, 7.0], [10.5, 7.0], [10.6, 7.0], [10.7, 7.0], [10.8, 7.0], [10.9, 7.0], [11.0, 7.0], [11.1, 7.0], [11.2, 7.0], [11.3, 7.0], [11.4, 7.0], [11.5, 7.0], [11.6, 7.0], [11.7, 7.0], [11.8, 7.0], [11.9, 7.0], [12.0, 7.0], [12.1, 7.0], [12.2, 7.0], [12.3, 7.0], [12.4, 7.0], [12.5, 7.0], [12.6, 7.0], [12.7, 7.0], [12.8, 7.0], [12.9, 7.0], [13.0, 7.0], [13.1, 7.0], [13.2, 7.0], [13.3, 7.0], [13.4, 7.0], [13.5, 7.0], [13.6, 8.0], [13.7, 8.0], [13.8, 8.0], [13.9, 8.0], [14.0, 8.0], [14.1, 8.0], [14.2, 8.0], [14.3, 8.0], [14.4, 8.0], [14.5, 8.0], [14.6, 8.0], [14.7, 8.0], [14.8, 8.0], [14.9, 8.0], [15.0, 8.0], [15.1, 8.0], [15.2, 8.0], [15.3, 8.0], [15.4, 8.0], [15.5, 8.0], [15.6, 8.0], [15.7, 8.0], [15.8, 8.0], [15.9, 8.0], [16.0, 8.0], [16.1, 8.0], [16.2, 8.0], [16.3, 8.0], [16.4, 8.0], [16.5, 8.0], [16.6, 8.0], [16.7, 8.0], [16.8, 8.0], [16.9, 8.0], [17.0, 8.0], [17.1, 8.0], [17.2, 9.0], [17.3, 9.0], [17.4, 9.0], [17.5, 9.0], [17.6, 9.0], [17.7, 9.0], [17.8, 9.0], [17.9, 9.0], [18.0, 9.0], [18.1, 9.0], [18.2, 9.0], [18.3, 9.0], [18.4, 9.0], [18.5, 9.0], [18.6, 9.0], [18.7, 9.0], [18.8, 9.0], [18.9, 9.0], [19.0, 9.0], [19.1, 9.0], [19.2, 9.0], [19.3, 9.0], [19.4, 9.0], [19.5, 9.0], [19.6, 9.0], [19.7, 9.0], [19.8, 9.0], [19.9, 9.0], [20.0, 9.0], [20.1, 9.0], [20.2, 9.0], [20.3, 9.0], [20.4, 9.0], [20.5, 9.0], [20.6, 9.0], [20.7, 9.0], [20.8, 9.0], [20.9, 10.0], [21.0, 10.0], [21.1, 10.0], [21.2, 10.0], [21.3, 10.0], [21.4, 10.0], [21.5, 10.0], [21.6, 10.0], [21.7, 10.0], [21.8, 10.0], [21.9, 10.0], [22.0, 10.0], [22.1, 10.0], [22.2, 10.0], [22.3, 10.0], [22.4, 10.0], [22.5, 10.0], [22.6, 10.0], [22.7, 10.0], [22.8, 10.0], [22.9, 10.0], [23.0, 10.0], [23.1, 10.0], [23.2, 10.0], [23.3, 10.0], [23.4, 10.0], [23.5, 10.0], [23.6, 10.0], [23.7, 11.0], [23.8, 11.0], [23.9, 11.0], [24.0, 11.0], [24.1, 11.0], [24.2, 11.0], [24.3, 11.0], [24.4, 11.0], [24.5, 11.0], [24.6, 11.0], [24.7, 11.0], [24.8, 11.0], [24.9, 11.0], [25.0, 11.0], [25.1, 11.0], [25.2, 11.0], [25.3, 11.0], [25.4, 11.0], [25.5, 11.0], [25.6, 11.0], [25.7, 11.0], [25.8, 11.0], [25.9, 11.0], [26.0, 11.0], [26.1, 11.0], [26.2, 11.0], [26.3, 11.0], [26.4, 11.0], [26.5, 12.0], [26.6, 12.0], [26.7, 12.0], [26.8, 12.0], [26.9, 12.0], [27.0, 12.0], [27.1, 12.0], [27.2, 12.0], [27.3, 12.0], [27.4, 12.0], [27.5, 12.0], [27.6, 12.0], [27.7, 12.0], [27.8, 12.0], [27.9, 12.0], [28.0, 12.0], [28.1, 12.0], [28.2, 12.0], [28.3, 12.0], [28.4, 12.0], [28.5, 12.0], [28.6, 12.0], [28.7, 12.0], [28.8, 13.0], [28.9, 13.0], [29.0, 13.0], [29.1, 13.0], [29.2, 13.0], [29.3, 13.0], [29.4, 13.0], [29.5, 13.0], [29.6, 13.0], [29.7, 13.0], [29.8, 13.0], [29.9, 13.0], [30.0, 13.0], [30.1, 13.0], [30.2, 13.0], [30.3, 13.0], [30.4, 13.0], [30.5, 13.0], [30.6, 14.0], [30.7, 14.0], [30.8, 14.0], [30.9, 14.0], [31.0, 14.0], [31.1, 14.0], [31.2, 14.0], [31.3, 14.0], [31.4, 14.0], [31.5, 14.0], [31.6, 14.0], [31.7, 14.0], [31.8, 14.0], [31.9, 14.0], [32.0, 14.0], [32.1, 14.0], [32.2, 15.0], [32.3, 15.0], [32.4, 15.0], [32.5, 15.0], [32.6, 15.0], [32.7, 15.0], [32.8, 15.0], [32.9, 15.0], [33.0, 15.0], [33.1, 15.0], [33.2, 15.0], [33.3, 15.0], [33.4, 16.0], [33.5, 16.0], [33.6, 16.0], [33.7, 16.0], [33.8, 16.0], [33.9, 16.0], [34.0, 16.0], [34.1, 16.0], [34.2, 17.0], [34.3, 17.0], [34.4, 17.0], [34.5, 17.0], [34.6, 17.0], [34.7, 17.0], [34.8, 17.0], [34.9, 17.0], [35.0, 17.0], [35.1, 18.0], [35.2, 18.0], [35.3, 18.0], [35.4, 18.0], [35.5, 18.0], [35.6, 18.0], [35.7, 18.0], [35.8, 19.0], [35.9, 19.0], [36.0, 19.0], [36.1, 19.0], [36.2, 19.0], [36.3, 20.0], [36.4, 20.0], [36.5, 20.0], [36.6, 21.0], [36.7, 21.0], [36.8, 21.0], [36.9, 22.0], [37.0, 22.0], [37.1, 22.0], [37.2, 22.0], [37.3, 23.0], [37.4, 23.0], [37.5, 24.0], [37.6, 24.0], [37.7, 24.0], [37.8, 25.0], [37.9, 25.0], [38.0, 26.0], [38.1, 27.0], [38.2, 28.0], [38.3, 29.0], [38.4, 29.0], [38.5, 30.0], [38.6, 32.0], [38.7, 33.0], [38.8, 33.0], [38.9, 34.0], [39.0, 35.0], [39.1, 35.0], [39.2, 36.0], [39.3, 36.0], [39.4, 37.0], [39.5, 38.0], [39.6, 39.0], [39.7, 39.0], [39.8, 40.0], [39.9, 40.0], [40.0, 41.0], [40.1, 41.0], [40.2, 42.0], [40.3, 43.0], [40.4, 44.0], [40.5, 44.0], [40.6, 45.0], [40.7, 45.0], [40.8, 45.0], [40.9, 46.0], [41.0, 47.0], [41.1, 47.0], [41.2, 47.0], [41.3, 48.0], [41.4, 49.0], [41.5, 50.0], [41.6, 51.0], [41.7, 51.0], [41.8, 52.0], [41.9, 53.0], [42.0, 54.0], [42.1, 55.0], [42.2, 55.0], [42.3, 57.0], [42.4, 58.0], [42.5, 59.0], [42.6, 60.0], [42.7, 60.0], [42.8, 61.0], [42.9, 62.0], [43.0, 63.0], [43.1, 63.0], [43.2, 66.0], [43.3, 67.0], [43.4, 68.0], [43.5, 69.0], [43.6, 70.0], [43.7, 70.0], [43.8, 70.0], [43.9, 71.0], [44.0, 71.0], [44.1, 72.0], [44.2, 73.0], [44.3, 73.0], [44.4, 74.0], [44.5, 74.0], [44.6, 74.0], [44.7, 75.0], [44.8, 75.0], [44.9, 76.0], [45.0, 77.0], [45.1, 78.0], [45.2, 78.0], [45.3, 78.0], [45.4, 79.0], [45.5, 80.0], [45.6, 80.0], [45.7, 80.0], [45.8, 81.0], [45.9, 81.0], [46.0, 82.0], [46.1, 82.0], [46.2, 83.0], [46.3, 84.0], [46.4, 84.0], [46.5, 85.0], [46.6, 86.0], [46.7, 87.0], [46.8, 87.0], [46.9, 88.0], [47.0, 89.0], [47.1, 89.0], [47.2, 90.0], [47.3, 90.0], [47.4, 92.0], [47.5, 93.0], [47.6, 93.0], [47.7, 94.0], [47.8, 95.0], [47.9, 96.0], [48.0, 97.0], [48.1, 99.0], [48.2, 100.0], [48.3, 101.0], [48.4, 102.0], [48.5, 104.0], [48.6, 106.0], [48.7, 107.0], [48.8, 108.0], [48.9, 108.0], [49.0, 110.0], [49.1, 113.0], [49.2, 114.0], [49.3, 115.0], [49.4, 116.0], [49.5, 118.0], [49.6, 119.0], [49.7, 120.0], [49.8, 121.0], [49.9, 122.0], [50.0, 124.0], [50.1, 125.0], [50.2, 126.0], [50.3, 128.0], [50.4, 129.0], [50.5, 130.0], [50.6, 132.0], [50.7, 135.0], [50.8, 136.0], [50.9, 138.0], [51.0, 139.0], [51.1, 140.0], [51.2, 141.0], [51.3, 142.0], [51.4, 143.0], [51.5, 144.0], [51.6, 146.0], [51.7, 147.0], [51.8, 148.0], [51.9, 149.0], [52.0, 150.0], [52.1, 152.0], [52.2, 153.0], [52.3, 155.0], [52.4, 156.0], [52.5, 157.0], [52.6, 158.0], [52.7, 159.0], [52.8, 160.0], [52.9, 161.0], [53.0, 161.0], [53.1, 162.0], [53.2, 163.0], [53.3, 164.0], [53.4, 165.0], [53.5, 167.0], [53.6, 167.0], [53.7, 168.0], [53.8, 169.0], [53.9, 169.0], [54.0, 170.0], [54.1, 172.0], [54.2, 173.0], [54.3, 175.0], [54.4, 176.0], [54.5, 176.0], [54.6, 178.0], [54.7, 178.0], [54.8, 179.0], [54.9, 180.0], [55.0, 182.0], [55.1, 183.0], [55.2, 184.0], [55.3, 184.0], [55.4, 186.0], [55.5, 187.0], [55.6, 188.0], [55.7, 189.0], [55.8, 190.0], [55.9, 191.0], [56.0, 192.0], [56.1, 193.0], [56.2, 194.0], [56.3, 195.0], [56.4, 196.0], [56.5, 198.0], [56.6, 200.0], [56.7, 200.0], [56.8, 202.0], [56.9, 203.0], [57.0, 204.0], [57.1, 204.0], [57.2, 205.0], [57.3, 206.0], [57.4, 206.0], [57.5, 207.0], [57.6, 209.0], [57.7, 210.0], [57.8, 211.0], [57.9, 211.0], [58.0, 212.0], [58.1, 214.0], [58.2, 215.0], [58.3, 216.0], [58.4, 217.0], [58.5, 218.0], [58.6, 220.0], [58.7, 220.0], [58.8, 221.0], [58.9, 221.0], [59.0, 223.0], [59.1, 223.0], [59.2, 225.0], [59.3, 225.0], [59.4, 226.0], [59.5, 228.0], [59.6, 229.0], [59.7, 231.0], [59.8, 231.0], [59.9, 232.0], [60.0, 233.0], [60.1, 234.0], [60.2, 236.0], [60.3, 237.0], [60.4, 238.0], [60.5, 239.0], [60.6, 241.0], [60.7, 242.0], [60.8, 243.0], [60.9, 244.0], [61.0, 245.0], [61.1, 247.0], [61.2, 247.0], [61.3, 248.0], [61.4, 249.0], [61.5, 250.0], [61.6, 251.0], [61.7, 252.0], [61.8, 254.0], [61.9, 256.0], [62.0, 257.0], [62.1, 259.0], [62.2, 261.0], [62.3, 263.0], [62.4, 265.0], [62.5, 267.0], [62.6, 268.0], [62.7, 269.0], [62.8, 270.0], [62.9, 270.0], [63.0, 271.0], [63.1, 274.0], [63.2, 276.0], [63.3, 278.0], [63.4, 280.0], [63.5, 282.0], [63.6, 282.0], [63.7, 285.0], [63.8, 287.0], [63.9, 288.0], [64.0, 289.0], [64.1, 290.0], [64.2, 293.0], [64.3, 295.0], [64.4, 298.0], [64.5, 300.0], [64.6, 303.0], [64.7, 304.0], [64.8, 306.0], [64.9, 307.0], [65.0, 308.0], [65.1, 311.0], [65.2, 311.0], [65.3, 312.0], [65.4, 314.0], [65.5, 314.0], [65.6, 316.0], [65.7, 318.0], [65.8, 320.0], [65.9, 321.0], [66.0, 323.0], [66.1, 324.0], [66.2, 326.0], [66.3, 327.0], [66.4, 329.0], [66.5, 329.0], [66.6, 331.0], [66.7, 332.0], [66.8, 333.0], [66.9, 334.0], [67.0, 336.0], [67.1, 337.0], [67.2, 338.0], [67.3, 340.0], [67.4, 341.0], [67.5, 342.0], [67.6, 343.0], [67.7, 343.0], [67.8, 344.0], [67.9, 345.0], [68.0, 347.0], [68.1, 348.0], [68.2, 349.0], [68.3, 350.0], [68.4, 352.0], [68.5, 353.0], [68.6, 354.0], [68.7, 356.0], [68.8, 357.0], [68.9, 359.0], [69.0, 360.0], [69.1, 361.0], [69.2, 362.0], [69.3, 364.0], [69.4, 365.0], [69.5, 366.0], [69.6, 367.0], [69.7, 368.0], [69.8, 369.0], [69.9, 370.0], [70.0, 370.0], [70.1, 371.0], [70.2, 372.0], [70.3, 373.0], [70.4, 374.0], [70.5, 375.0], [70.6, 376.0], [70.7, 378.0], [70.8, 380.0], [70.9, 381.0], [71.0, 382.0], [71.1, 385.0], [71.2, 386.0], [71.3, 386.0], [71.4, 388.0], [71.5, 389.0], [71.6, 390.0], [71.7, 391.0], [71.8, 395.0], [71.9, 396.0], [72.0, 397.0], [72.1, 399.0], [72.2, 400.0], [72.3, 401.0], [72.4, 403.0], [72.5, 404.0], [72.6, 405.0], [72.7, 407.0], [72.8, 408.0], [72.9, 410.0], [73.0, 412.0], [73.1, 413.0], [73.2, 413.0], [73.3, 415.0], [73.4, 416.0], [73.5, 418.0], [73.6, 420.0], [73.7, 424.0], [73.8, 427.0], [73.9, 428.0], [74.0, 429.0], [74.1, 432.0], [74.2, 433.0], [74.3, 434.0], [74.4, 435.0], [74.5, 436.0], [74.6, 439.0], [74.7, 441.0], [74.8, 443.0], [74.9, 445.0], [75.0, 447.0], [75.1, 448.0], [75.2, 451.0], [75.3, 452.0], [75.4, 454.0], [75.5, 458.0], [75.6, 459.0], [75.7, 460.0], [75.8, 461.0], [75.9, 464.0], [76.0, 465.0], [76.1, 467.0], [76.2, 469.0], [76.3, 471.0], [76.4, 473.0], [76.5, 475.0], [76.6, 477.0], [76.7, 478.0], [76.8, 483.0], [76.9, 485.0], [77.0, 487.0], [77.1, 489.0], [77.2, 490.0], [77.3, 491.0], [77.4, 495.0], [77.5, 496.0], [77.6, 497.0], [77.7, 500.0], [77.8, 501.0], [77.9, 503.0], [78.0, 506.0], [78.1, 507.0], [78.2, 509.0], [78.3, 511.0], [78.4, 512.0], [78.5, 514.0], [78.6, 514.0], [78.7, 517.0], [78.8, 519.0], [78.9, 520.0], [79.0, 522.0], [79.1, 524.0], [79.2, 526.0], [79.3, 528.0], [79.4, 528.0], [79.5, 530.0], [79.6, 532.0], [79.7, 533.0], [79.8, 536.0], [79.9, 537.0], [80.0, 538.0], [80.1, 540.0], [80.2, 541.0], [80.3, 543.0], [80.4, 543.0], [80.5, 544.0], [80.6, 547.0], [80.7, 547.0], [80.8, 549.0], [80.9, 552.0], [81.0, 553.0], [81.1, 555.0], [81.2, 557.0], [81.3, 559.0], [81.4, 561.0], [81.5, 563.0], [81.6, 565.0], [81.7, 568.0], [81.8, 570.0], [81.9, 571.0], [82.0, 572.0], [82.1, 574.0], [82.2, 577.0], [82.3, 579.0], [82.4, 585.0], [82.5, 587.0], [82.6, 592.0], [82.7, 594.0], [82.8, 596.0], [82.9, 598.0], [83.0, 599.0], [83.1, 601.0], [83.2, 601.0], [83.3, 603.0], [83.4, 604.0], [83.5, 608.0], [83.6, 609.0], [83.7, 611.0], [83.8, 613.0], [83.9, 616.0], [84.0, 618.0], [84.1, 621.0], [84.2, 623.0], [84.3, 625.0], [84.4, 631.0], [84.5, 633.0], [84.6, 636.0], [84.7, 636.0], [84.8, 640.0], [84.9, 642.0], [85.0, 643.0], [85.1, 646.0], [85.2, 647.0], [85.3, 648.0], [85.4, 651.0], [85.5, 653.0], [85.6, 653.0], [85.7, 655.0], [85.8, 656.0], [85.9, 660.0], [86.0, 663.0], [86.1, 666.0], [86.2, 668.0], [86.3, 672.0], [86.4, 673.0], [86.5, 675.0], [86.6, 676.0], [86.7, 681.0], [86.8, 685.0], [86.9, 688.0], [87.0, 690.0], [87.1, 691.0], [87.2, 694.0], [87.3, 697.0], [87.4, 699.0], [87.5, 701.0], [87.6, 702.0], [87.7, 704.0], [87.8, 706.0], [87.9, 709.0], [88.0, 711.0], [88.1, 712.0], [88.2, 715.0], [88.3, 718.0], [88.4, 720.0], [88.5, 726.0], [88.6, 727.0], [88.7, 730.0], [88.8, 733.0], [88.9, 736.0], [89.0, 740.0], [89.1, 741.0], [89.2, 744.0], [89.3, 747.0], [89.4, 749.0], [89.5, 751.0], [89.6, 752.0], [89.7, 754.0], [89.8, 756.0], [89.9, 758.0], [90.0, 759.0], [90.1, 762.0], [90.2, 763.0], [90.3, 767.0], [90.4, 770.0], [90.5, 773.0], [90.6, 775.0], [90.7, 778.0], [90.8, 780.0], [90.9, 787.0], [91.0, 789.0], [91.1, 793.0], [91.2, 797.0], [91.3, 799.0], [91.4, 803.0], [91.5, 809.0], [91.6, 815.0], [91.7, 820.0], [91.8, 821.0], [91.9, 826.0], [92.0, 837.0], [92.1, 841.0], [92.2, 846.0], [92.3, 851.0], [92.4, 855.0], [92.5, 863.0], [92.6, 866.0], [92.7, 877.0], [92.8, 885.0], [92.9, 887.0], [93.0, 891.0], [93.1, 903.0], [93.2, 915.0], [93.3, 920.0], [93.4, 929.0], [93.5, 939.0], [93.6, 943.0], [93.7, 950.0], [93.8, 956.0], [93.9, 964.0], [94.0, 969.0], [94.1, 977.0], [94.2, 985.0], [94.3, 992.0], [94.4, 997.0], [94.5, 1003.0], [94.6, 1008.0], [94.7, 1016.0], [94.8, 1022.0], [94.9, 1029.0], [95.0, 1040.0], [95.1, 1052.0], [95.2, 1055.0], [95.3, 1063.0], [95.4, 1071.0], [95.5, 1080.0], [95.6, 1091.0], [95.7, 1101.0], [95.8, 1110.0], [95.9, 1119.0], [96.0, 1125.0], [96.1, 1128.0], [96.2, 1139.0], [96.3, 1151.0], [96.4, 1164.0], [96.5, 1172.0], [96.6, 1179.0], [96.7, 1192.0], [96.8, 1210.0], [96.9, 1224.0], [97.0, 1243.0], [97.1, 1256.0], [97.2, 1268.0], [97.3, 1275.0], [97.4, 1286.0], [97.5, 1305.0], [97.6, 1310.0], [97.7, 1332.0], [97.8, 1343.0], [97.9, 1378.0], [98.0, 1387.0], [98.1, 1424.0], [98.2, 1441.0], [98.3, 1464.0], [98.4, 1512.0], [98.5, 1540.0], [98.6, 1606.0], [98.7, 1665.0], [98.8, 1734.0], [98.9, 1832.0], [99.0, 1898.0], [99.1, 1960.0], [99.2, 2012.0], [99.3, 2071.0], [99.4, 2146.0], [99.5, 2218.0], [99.6, 2320.0], [99.7, 2399.0], [99.8, 2486.0], [99.9, 2529.0], [100.0, 3218.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2534.0, "series": [{"data": [[0.0, 2534.0], [600.0, 229.0], [700.0, 206.0], [800.0, 92.0], [900.0, 73.0], [1000.0, 63.0], [1100.0, 58.0], [1200.0, 37.0], [1300.0, 31.0], [1400.0, 15.0], [1500.0, 13.0], [100.0, 444.0], [1600.0, 8.0], [1700.0, 7.0], [1800.0, 8.0], [1900.0, 7.0], [2000.0, 11.0], [2100.0, 4.0], [2200.0, 7.0], [2300.0, 7.0], [2400.0, 8.0], [2500.0, 2.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 1.0], [3100.0, 1.0], [200.0, 413.0], [3200.0, 1.0], [300.0, 404.0], [400.0, 293.0], [500.0, 283.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 87.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4091.0, "series": [{"data": [[0.0, 4091.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1084.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 87.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.891826923076925, "minX": 1.60410162E12, "maxY": 10.0, "series": [{"data": [[1.60410168E12, 10.0], [1.60410174E12, 10.0], [1.60410162E12, 9.902229845626072], [1.6041018E12, 9.891826923076925]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6041018E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 285.21290815352324, "minX": 1.0, "maxY": 2878.0, "series": [{"data": [[4.0, 603.75], [8.0, 938.5], [2.0, 2231.0], [1.0, 2878.0], [9.0, 487.25], [5.0, 1231.0], [10.0, 285.21290815352324], [3.0, 1445.5], [6.0, 581.5], [7.0, 603.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.980615735461829, 288.17464842265275]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3697.9666666666667, "minX": 1.60410162E12, "maxY": 1891992.9833333334, "series": [{"data": [[1.60410168E12, 1891992.9833333334], [1.60410174E12, 1720133.8166666667], [1.60410162E12, 305680.2], [1.6041018E12, 331447.3333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60410168E12, 18162.433333333334], [1.60410174E12, 18632.983333333334], [1.60410162E12, 4997.566666666667], [1.6041018E12, 3697.9666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6041018E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 279.6702475478752, "minX": 1.60410162E12, "maxY": 357.32451923076917, "series": [{"data": [[1.60410168E12, 279.6702475478752], [1.60410174E12, 281.4189443920832], [1.60410162E12, 294.6535162950258], [1.6041018E12, 357.32451923076917]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6041018E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 279.197571228398, "minX": 1.60410162E12, "maxY": 356.935096153846, "series": [{"data": [[1.60410168E12, 279.197571228398], [1.60410174E12, 281.03204524033964], [1.60410162E12, 294.3207547169809], [1.6041018E12, 356.935096153846]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6041018E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007211538461538454, "minX": 1.60410162E12, "maxY": 0.13893653516295038, "series": [{"data": [[1.60410168E12, 0.011676786548341925], [1.60410174E12, 0.010367577756833191], [1.60410162E12, 0.13893653516295038], [1.6041018E12, 0.007211538461538454]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6041018E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.60410162E12, "maxY": 3218.0, "series": [{"data": [[1.60410168E12, 2529.0], [1.60410174E12, 3218.0], [1.60410162E12, 1539.0], [1.6041018E12, 2940.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60410168E12, 4.0], [1.60410174E12, 4.0], [1.60410162E12, 5.0], [1.6041018E12, 4.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60410168E12, 4.0], [1.60410174E12, 4.0], [1.60410162E12, 5.0], [1.6041018E12, 4.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60410168E12, 4.0], [1.60410174E12, 4.0], [1.60410162E12, 5.0], [1.6041018E12, 4.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60410168E12, 3.0], [1.60410174E12, 3.0], [1.60410162E12, 4.0], [1.6041018E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60410168E12, 83.0], [1.60410174E12, 165.0], [1.60410162E12, 115.0], [1.6041018E12, 124.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6041018E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9.0, "minX": 1.0, "maxY": 2554.5, "series": [{"data": [[3.0, 1293.0], [4.0, 1786.0], [5.0, 2265.0], [6.0, 1231.0], [7.0, 772.5], [9.0, 885.0], [10.0, 680.5], [12.0, 716.0], [13.0, 580.0], [14.0, 556.0], [15.0, 648.0], [16.0, 716.0], [17.0, 493.5], [18.0, 516.0], [19.0, 510.5], [20.0, 493.5], [21.0, 357.0], [22.0, 446.0], [23.0, 371.0], [24.0, 385.0], [25.0, 358.0], [26.0, 165.5], [27.0, 277.0], [29.0, 268.0], [30.0, 11.0], [31.0, 199.5], [32.0, 150.0], [33.0, 243.0], [34.0, 225.5], [35.0, 125.0], [37.0, 186.0], [36.0, 14.5], [39.0, 236.0], [40.0, 133.0], [41.0, 24.0], [42.0, 213.0], [45.0, 95.0], [44.0, 230.5], [47.0, 18.0], [46.0, 12.5], [48.0, 12.0], [49.0, 17.0], [50.0, 68.5], [52.0, 13.5], [55.0, 9.0], [54.0, 107.0], [58.0, 11.0], [61.0, 10.0], [60.0, 117.5], [62.0, 146.0], [63.0, 74.0], [65.0, 17.0], [64.0, 12.0], [74.0, 135.0], [77.0, 11.0], [76.0, 9.0], [80.0, 14.0], [81.0, 16.0], [86.0, 13.0], [87.0, 76.0], [90.0, 91.0], [95.0, 60.0], [99.0, 81.0], [102.0, 25.0], [104.0, 10.5], [107.0, 18.0], [118.0, 80.5], [143.0, 14.0], [1.0, 2554.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 143.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 9.0, "minX": 1.0, "maxY": 2554.5, "series": [{"data": [[3.0, 1292.0], [4.0, 1785.0], [5.0, 2264.0], [6.0, 1230.0], [7.0, 769.5], [9.0, 885.0], [10.0, 679.0], [12.0, 716.0], [13.0, 578.0], [14.0, 554.5], [15.0, 646.0], [16.0, 716.0], [17.0, 492.0], [18.0, 515.5], [19.0, 509.0], [20.0, 493.0], [21.0, 355.0], [22.0, 445.0], [23.0, 370.0], [24.0, 385.0], [25.0, 357.0], [26.0, 164.5], [27.0, 276.5], [29.0, 267.0], [30.0, 11.0], [31.0, 199.5], [32.0, 149.5], [33.0, 243.0], [34.0, 224.5], [35.0, 124.5], [37.0, 185.5], [36.0, 14.5], [39.0, 236.0], [40.0, 133.0], [41.0, 24.0], [42.0, 212.5], [45.0, 95.0], [44.0, 230.5], [47.0, 18.0], [46.0, 12.5], [48.0, 12.0], [49.0, 17.0], [50.0, 68.5], [52.0, 13.5], [55.0, 9.0], [54.0, 106.5], [58.0, 11.0], [61.0, 10.0], [60.0, 117.5], [62.0, 145.0], [63.0, 74.0], [65.0, 17.0], [64.0, 12.0], [74.0, 135.0], [77.0, 11.0], [76.0, 9.0], [80.0, 14.0], [81.0, 16.0], [86.0, 13.0], [87.0, 74.0], [90.0, 91.0], [95.0, 60.0], [99.0, 80.0], [102.0, 25.0], [104.0, 10.5], [107.0, 17.5], [118.0, 80.0], [143.0, 14.0], [1.0, 2554.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 143.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.766666666666667, "minX": 1.60410162E12, "maxY": 35.68333333333333, "series": [{"data": [[1.60410168E12, 35.68333333333333], [1.60410174E12, 35.36666666666667], [1.60410162E12, 9.883333333333333], [1.6041018E12, 6.766666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6041018E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.933333333333334, "minX": 1.60410162E12, "maxY": 35.68333333333333, "series": [{"data": [[1.60410168E12, 35.68333333333333], [1.60410174E12, 35.36666666666667], [1.60410162E12, 9.716666666666667], [1.6041018E12, 6.933333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6041018E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.933333333333334, "minX": 1.60410162E12, "maxY": 35.68333333333333, "series": [{"data": [[1.60410168E12, 35.68333333333333], [1.60410174E12, 35.36666666666667], [1.60410162E12, 9.716666666666667], [1.6041018E12, 6.933333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6041018E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.933333333333334, "minX": 1.60410162E12, "maxY": 35.68333333333333, "series": [{"data": [[1.60410168E12, 35.68333333333333], [1.60410174E12, 35.36666666666667], [1.60410162E12, 9.716666666666667], [1.6041018E12, 6.933333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6041018E12, "title": "Total Transactions Per Second"}},
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

