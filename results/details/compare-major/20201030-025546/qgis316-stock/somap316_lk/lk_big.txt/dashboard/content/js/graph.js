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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 4139.0, "series": [{"data": [[0.0, 3.0], [0.1, 3.0], [0.2, 3.0], [0.3, 3.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 4.0], [1.7, 4.0], [1.8, 4.0], [1.9, 4.0], [2.0, 4.0], [2.1, 4.0], [2.2, 4.0], [2.3, 4.0], [2.4, 4.0], [2.5, 4.0], [2.6, 5.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 5.0], [3.2, 5.0], [3.3, 5.0], [3.4, 5.0], [3.5, 5.0], [3.6, 5.0], [3.7, 5.0], [3.8, 5.0], [3.9, 5.0], [4.0, 5.0], [4.1, 5.0], [4.2, 5.0], [4.3, 5.0], [4.4, 5.0], [4.5, 5.0], [4.6, 5.0], [4.7, 5.0], [4.8, 5.0], [4.9, 5.0], [5.0, 5.0], [5.1, 5.0], [5.2, 5.0], [5.3, 5.0], [5.4, 6.0], [5.5, 6.0], [5.6, 6.0], [5.7, 6.0], [5.8, 6.0], [5.9, 6.0], [6.0, 6.0], [6.1, 6.0], [6.2, 6.0], [6.3, 6.0], [6.4, 6.0], [6.5, 6.0], [6.6, 6.0], [6.7, 6.0], [6.8, 6.0], [6.9, 6.0], [7.0, 6.0], [7.1, 6.0], [7.2, 6.0], [7.3, 6.0], [7.4, 6.0], [7.5, 6.0], [7.6, 6.0], [7.7, 6.0], [7.8, 6.0], [7.9, 6.0], [8.0, 6.0], [8.1, 6.0], [8.2, 6.0], [8.3, 6.0], [8.4, 6.0], [8.5, 6.0], [8.6, 6.0], [8.7, 6.0], [8.8, 6.0], [8.9, 6.0], [9.0, 6.0], [9.1, 6.0], [9.2, 6.0], [9.3, 7.0], [9.4, 7.0], [9.5, 7.0], [9.6, 7.0], [9.7, 7.0], [9.8, 7.0], [9.9, 7.0], [10.0, 7.0], [10.1, 7.0], [10.2, 7.0], [10.3, 7.0], [10.4, 7.0], [10.5, 7.0], [10.6, 7.0], [10.7, 7.0], [10.8, 7.0], [10.9, 7.0], [11.0, 7.0], [11.1, 7.0], [11.2, 7.0], [11.3, 7.0], [11.4, 7.0], [11.5, 7.0], [11.6, 7.0], [11.7, 7.0], [11.8, 7.0], [11.9, 7.0], [12.0, 7.0], [12.1, 7.0], [12.2, 7.0], [12.3, 7.0], [12.4, 7.0], [12.5, 7.0], [12.6, 7.0], [12.7, 7.0], [12.8, 7.0], [12.9, 7.0], [13.0, 7.0], [13.1, 7.0], [13.2, 7.0], [13.3, 7.0], [13.4, 7.0], [13.5, 8.0], [13.6, 8.0], [13.7, 8.0], [13.8, 8.0], [13.9, 8.0], [14.0, 8.0], [14.1, 8.0], [14.2, 8.0], [14.3, 8.0], [14.4, 8.0], [14.5, 8.0], [14.6, 8.0], [14.7, 8.0], [14.8, 8.0], [14.9, 8.0], [15.0, 8.0], [15.1, 8.0], [15.2, 8.0], [15.3, 8.0], [15.4, 8.0], [15.5, 8.0], [15.6, 8.0], [15.7, 8.0], [15.8, 8.0], [15.9, 8.0], [16.0, 8.0], [16.1, 8.0], [16.2, 8.0], [16.3, 8.0], [16.4, 8.0], [16.5, 8.0], [16.6, 8.0], [16.7, 8.0], [16.8, 8.0], [16.9, 9.0], [17.0, 9.0], [17.1, 9.0], [17.2, 9.0], [17.3, 9.0], [17.4, 9.0], [17.5, 9.0], [17.6, 9.0], [17.7, 9.0], [17.8, 9.0], [17.9, 9.0], [18.0, 9.0], [18.1, 9.0], [18.2, 9.0], [18.3, 9.0], [18.4, 9.0], [18.5, 9.0], [18.6, 9.0], [18.7, 9.0], [18.8, 9.0], [18.9, 9.0], [19.0, 9.0], [19.1, 9.0], [19.2, 9.0], [19.3, 9.0], [19.4, 9.0], [19.5, 9.0], [19.6, 9.0], [19.7, 9.0], [19.8, 9.0], [19.9, 9.0], [20.0, 9.0], [20.1, 10.0], [20.2, 10.0], [20.3, 10.0], [20.4, 10.0], [20.5, 10.0], [20.6, 10.0], [20.7, 10.0], [20.8, 10.0], [20.9, 10.0], [21.0, 10.0], [21.1, 10.0], [21.2, 10.0], [21.3, 10.0], [21.4, 10.0], [21.5, 10.0], [21.6, 10.0], [21.7, 10.0], [21.8, 10.0], [21.9, 10.0], [22.0, 10.0], [22.1, 10.0], [22.2, 10.0], [22.3, 10.0], [22.4, 10.0], [22.5, 10.0], [22.6, 10.0], [22.7, 11.0], [22.8, 11.0], [22.9, 11.0], [23.0, 11.0], [23.1, 11.0], [23.2, 11.0], [23.3, 11.0], [23.4, 11.0], [23.5, 11.0], [23.6, 11.0], [23.7, 11.0], [23.8, 11.0], [23.9, 11.0], [24.0, 11.0], [24.1, 11.0], [24.2, 11.0], [24.3, 11.0], [24.4, 11.0], [24.5, 11.0], [24.6, 11.0], [24.7, 11.0], [24.8, 11.0], [24.9, 11.0], [25.0, 11.0], [25.1, 11.0], [25.2, 12.0], [25.3, 12.0], [25.4, 12.0], [25.5, 12.0], [25.6, 12.0], [25.7, 12.0], [25.8, 12.0], [25.9, 12.0], [26.0, 12.0], [26.1, 12.0], [26.2, 12.0], [26.3, 12.0], [26.4, 12.0], [26.5, 12.0], [26.6, 12.0], [26.7, 12.0], [26.8, 12.0], [26.9, 12.0], [27.0, 12.0], [27.1, 12.0], [27.2, 12.0], [27.3, 13.0], [27.4, 13.0], [27.5, 13.0], [27.6, 13.0], [27.7, 13.0], [27.8, 13.0], [27.9, 13.0], [28.0, 13.0], [28.1, 13.0], [28.2, 13.0], [28.3, 13.0], [28.4, 13.0], [28.5, 13.0], [28.6, 13.0], [28.7, 13.0], [28.8, 13.0], [28.9, 13.0], [29.0, 13.0], [29.1, 13.0], [29.2, 14.0], [29.3, 14.0], [29.4, 14.0], [29.5, 14.0], [29.6, 14.0], [29.7, 14.0], [29.8, 14.0], [29.9, 14.0], [30.0, 14.0], [30.1, 14.0], [30.2, 14.0], [30.3, 14.0], [30.4, 14.0], [30.5, 14.0], [30.6, 14.0], [30.7, 14.0], [30.8, 14.0], [30.9, 14.0], [31.0, 15.0], [31.1, 15.0], [31.2, 15.0], [31.3, 15.0], [31.4, 15.0], [31.5, 15.0], [31.6, 15.0], [31.7, 15.0], [31.8, 15.0], [31.9, 15.0], [32.0, 15.0], [32.1, 15.0], [32.2, 15.0], [32.3, 16.0], [32.4, 16.0], [32.5, 16.0], [32.6, 16.0], [32.7, 16.0], [32.8, 16.0], [32.9, 16.0], [33.0, 16.0], [33.1, 16.0], [33.2, 16.0], [33.3, 16.0], [33.4, 16.0], [33.5, 17.0], [33.6, 17.0], [33.7, 17.0], [33.8, 17.0], [33.9, 17.0], [34.0, 17.0], [34.1, 17.0], [34.2, 17.0], [34.3, 18.0], [34.4, 18.0], [34.5, 18.0], [34.6, 18.0], [34.7, 18.0], [34.8, 18.0], [34.9, 19.0], [35.0, 19.0], [35.1, 19.0], [35.2, 19.0], [35.3, 19.0], [35.4, 19.0], [35.5, 20.0], [35.6, 20.0], [35.7, 20.0], [35.8, 20.0], [35.9, 20.0], [36.0, 20.0], [36.1, 21.0], [36.2, 21.0], [36.3, 21.0], [36.4, 21.0], [36.5, 22.0], [36.6, 22.0], [36.7, 22.0], [36.8, 23.0], [36.9, 23.0], [37.0, 23.0], [37.1, 24.0], [37.2, 24.0], [37.3, 25.0], [37.4, 25.0], [37.5, 25.0], [37.6, 26.0], [37.7, 26.0], [37.8, 27.0], [37.9, 27.0], [38.0, 28.0], [38.1, 29.0], [38.2, 30.0], [38.3, 30.0], [38.4, 31.0], [38.5, 31.0], [38.6, 32.0], [38.7, 33.0], [38.8, 34.0], [38.9, 35.0], [39.0, 36.0], [39.1, 37.0], [39.2, 37.0], [39.3, 38.0], [39.4, 39.0], [39.5, 39.0], [39.6, 40.0], [39.7, 40.0], [39.8, 41.0], [39.9, 41.0], [40.0, 41.0], [40.1, 42.0], [40.2, 43.0], [40.3, 43.0], [40.4, 43.0], [40.5, 44.0], [40.6, 45.0], [40.7, 45.0], [40.8, 45.0], [40.9, 46.0], [41.0, 46.0], [41.1, 47.0], [41.2, 47.0], [41.3, 48.0], [41.4, 48.0], [41.5, 48.0], [41.6, 49.0], [41.7, 50.0], [41.8, 50.0], [41.9, 51.0], [42.0, 52.0], [42.1, 52.0], [42.2, 53.0], [42.3, 55.0], [42.4, 55.0], [42.5, 56.0], [42.6, 57.0], [42.7, 58.0], [42.8, 59.0], [42.9, 60.0], [43.0, 61.0], [43.1, 62.0], [43.2, 63.0], [43.3, 65.0], [43.4, 66.0], [43.5, 67.0], [43.6, 67.0], [43.7, 68.0], [43.8, 69.0], [43.9, 71.0], [44.0, 71.0], [44.1, 72.0], [44.2, 72.0], [44.3, 73.0], [44.4, 73.0], [44.5, 74.0], [44.6, 75.0], [44.7, 76.0], [44.8, 76.0], [44.9, 77.0], [45.0, 77.0], [45.1, 78.0], [45.2, 78.0], [45.3, 79.0], [45.4, 80.0], [45.5, 81.0], [45.6, 82.0], [45.7, 82.0], [45.8, 83.0], [45.9, 83.0], [46.0, 84.0], [46.1, 85.0], [46.2, 86.0], [46.3, 86.0], [46.4, 86.0], [46.5, 87.0], [46.6, 88.0], [46.7, 88.0], [46.8, 89.0], [46.9, 89.0], [47.0, 90.0], [47.1, 91.0], [47.2, 92.0], [47.3, 93.0], [47.4, 93.0], [47.5, 94.0], [47.6, 95.0], [47.7, 96.0], [47.8, 98.0], [47.9, 98.0], [48.0, 99.0], [48.1, 100.0], [48.2, 101.0], [48.3, 101.0], [48.4, 102.0], [48.5, 103.0], [48.6, 104.0], [48.7, 105.0], [48.8, 106.0], [48.9, 107.0], [49.0, 109.0], [49.1, 110.0], [49.2, 111.0], [49.3, 114.0], [49.4, 115.0], [49.5, 116.0], [49.6, 117.0], [49.7, 118.0], [49.8, 120.0], [49.9, 121.0], [50.0, 121.0], [50.1, 122.0], [50.2, 124.0], [50.3, 125.0], [50.4, 127.0], [50.5, 129.0], [50.6, 130.0], [50.7, 130.0], [50.8, 132.0], [50.9, 133.0], [51.0, 133.0], [51.1, 135.0], [51.2, 136.0], [51.3, 137.0], [51.4, 139.0], [51.5, 140.0], [51.6, 142.0], [51.7, 144.0], [51.8, 146.0], [51.9, 148.0], [52.0, 149.0], [52.1, 150.0], [52.2, 153.0], [52.3, 154.0], [52.4, 154.0], [52.5, 156.0], [52.6, 156.0], [52.7, 157.0], [52.8, 159.0], [52.9, 160.0], [53.0, 161.0], [53.1, 162.0], [53.2, 163.0], [53.3, 164.0], [53.4, 164.0], [53.5, 165.0], [53.6, 166.0], [53.7, 167.0], [53.8, 167.0], [53.9, 168.0], [54.0, 169.0], [54.1, 170.0], [54.2, 171.0], [54.3, 171.0], [54.4, 173.0], [54.5, 174.0], [54.6, 175.0], [54.7, 177.0], [54.8, 178.0], [54.9, 179.0], [55.0, 181.0], [55.1, 182.0], [55.2, 183.0], [55.3, 183.0], [55.4, 185.0], [55.5, 186.0], [55.6, 188.0], [55.7, 190.0], [55.8, 191.0], [55.9, 192.0], [56.0, 192.0], [56.1, 193.0], [56.2, 193.0], [56.3, 194.0], [56.4, 195.0], [56.5, 196.0], [56.6, 197.0], [56.7, 198.0], [56.8, 199.0], [56.9, 201.0], [57.0, 202.0], [57.1, 203.0], [57.2, 204.0], [57.3, 205.0], [57.4, 206.0], [57.5, 206.0], [57.6, 207.0], [57.7, 208.0], [57.8, 209.0], [57.9, 210.0], [58.0, 211.0], [58.1, 212.0], [58.2, 213.0], [58.3, 213.0], [58.4, 214.0], [58.5, 216.0], [58.6, 217.0], [58.7, 218.0], [58.8, 219.0], [58.9, 220.0], [59.0, 221.0], [59.1, 223.0], [59.2, 224.0], [59.3, 225.0], [59.4, 225.0], [59.5, 226.0], [59.6, 227.0], [59.7, 229.0], [59.8, 230.0], [59.9, 230.0], [60.0, 231.0], [60.1, 232.0], [60.2, 233.0], [60.3, 235.0], [60.4, 236.0], [60.5, 237.0], [60.6, 238.0], [60.7, 239.0], [60.8, 241.0], [60.9, 241.0], [61.0, 242.0], [61.1, 242.0], [61.2, 243.0], [61.3, 244.0], [61.4, 246.0], [61.5, 247.0], [61.6, 249.0], [61.7, 251.0], [61.8, 254.0], [61.9, 256.0], [62.0, 258.0], [62.1, 261.0], [62.2, 262.0], [62.3, 263.0], [62.4, 264.0], [62.5, 267.0], [62.6, 269.0], [62.7, 271.0], [62.8, 272.0], [62.9, 273.0], [63.0, 274.0], [63.1, 275.0], [63.2, 277.0], [63.3, 279.0], [63.4, 282.0], [63.5, 283.0], [63.6, 285.0], [63.7, 286.0], [63.8, 288.0], [63.9, 290.0], [64.0, 291.0], [64.1, 293.0], [64.2, 296.0], [64.3, 297.0], [64.4, 298.0], [64.5, 300.0], [64.6, 303.0], [64.7, 305.0], [64.8, 306.0], [64.9, 309.0], [65.0, 309.0], [65.1, 310.0], [65.2, 312.0], [65.3, 313.0], [65.4, 315.0], [65.5, 316.0], [65.6, 317.0], [65.7, 319.0], [65.8, 320.0], [65.9, 321.0], [66.0, 323.0], [66.1, 324.0], [66.2, 326.0], [66.3, 327.0], [66.4, 329.0], [66.5, 331.0], [66.6, 333.0], [66.7, 334.0], [66.8, 336.0], [66.9, 337.0], [67.0, 340.0], [67.1, 341.0], [67.2, 342.0], [67.3, 343.0], [67.4, 344.0], [67.5, 345.0], [67.6, 347.0], [67.7, 347.0], [67.8, 349.0], [67.9, 351.0], [68.0, 353.0], [68.1, 354.0], [68.2, 356.0], [68.3, 357.0], [68.4, 359.0], [68.5, 361.0], [68.6, 362.0], [68.7, 364.0], [68.8, 366.0], [68.9, 366.0], [69.0, 368.0], [69.1, 369.0], [69.2, 369.0], [69.3, 371.0], [69.4, 372.0], [69.5, 374.0], [69.6, 374.0], [69.7, 375.0], [69.8, 376.0], [69.9, 377.0], [70.0, 378.0], [70.1, 379.0], [70.2, 380.0], [70.3, 381.0], [70.4, 382.0], [70.5, 383.0], [70.6, 384.0], [70.7, 386.0], [70.8, 387.0], [70.9, 387.0], [71.0, 389.0], [71.1, 391.0], [71.2, 392.0], [71.3, 392.0], [71.4, 395.0], [71.5, 398.0], [71.6, 400.0], [71.7, 401.0], [71.8, 402.0], [71.9, 404.0], [72.0, 405.0], [72.1, 406.0], [72.2, 408.0], [72.3, 409.0], [72.4, 411.0], [72.5, 413.0], [72.6, 415.0], [72.7, 418.0], [72.8, 420.0], [72.9, 422.0], [73.0, 424.0], [73.1, 425.0], [73.2, 427.0], [73.3, 431.0], [73.4, 433.0], [73.5, 435.0], [73.6, 435.0], [73.7, 438.0], [73.8, 440.0], [73.9, 442.0], [74.0, 443.0], [74.1, 446.0], [74.2, 447.0], [74.3, 448.0], [74.4, 451.0], [74.5, 455.0], [74.6, 457.0], [74.7, 459.0], [74.8, 460.0], [74.9, 463.0], [75.0, 466.0], [75.1, 467.0], [75.2, 469.0], [75.3, 470.0], [75.4, 472.0], [75.5, 473.0], [75.6, 475.0], [75.7, 477.0], [75.8, 477.0], [75.9, 480.0], [76.0, 483.0], [76.1, 484.0], [76.2, 487.0], [76.3, 489.0], [76.4, 492.0], [76.5, 493.0], [76.6, 494.0], [76.7, 495.0], [76.8, 497.0], [76.9, 498.0], [77.0, 500.0], [77.1, 504.0], [77.2, 507.0], [77.3, 508.0], [77.4, 510.0], [77.5, 513.0], [77.6, 514.0], [77.7, 517.0], [77.8, 518.0], [77.9, 520.0], [78.0, 521.0], [78.1, 522.0], [78.2, 525.0], [78.3, 528.0], [78.4, 529.0], [78.5, 531.0], [78.6, 532.0], [78.7, 534.0], [78.8, 537.0], [78.9, 539.0], [79.0, 541.0], [79.1, 543.0], [79.2, 545.0], [79.3, 546.0], [79.4, 549.0], [79.5, 551.0], [79.6, 553.0], [79.7, 554.0], [79.8, 556.0], [79.9, 557.0], [80.0, 559.0], [80.1, 562.0], [80.2, 563.0], [80.3, 566.0], [80.4, 568.0], [80.5, 569.0], [80.6, 573.0], [80.7, 575.0], [80.8, 576.0], [80.9, 578.0], [81.0, 581.0], [81.1, 584.0], [81.2, 585.0], [81.3, 587.0], [81.4, 588.0], [81.5, 590.0], [81.6, 591.0], [81.7, 593.0], [81.8, 595.0], [81.9, 596.0], [82.0, 597.0], [82.1, 600.0], [82.2, 602.0], [82.3, 603.0], [82.4, 604.0], [82.5, 606.0], [82.6, 608.0], [82.7, 609.0], [82.8, 610.0], [82.9, 611.0], [83.0, 614.0], [83.1, 619.0], [83.2, 621.0], [83.3, 623.0], [83.4, 625.0], [83.5, 626.0], [83.6, 629.0], [83.7, 630.0], [83.8, 633.0], [83.9, 635.0], [84.0, 640.0], [84.1, 643.0], [84.2, 644.0], [84.3, 647.0], [84.4, 650.0], [84.5, 651.0], [84.6, 653.0], [84.7, 655.0], [84.8, 657.0], [84.9, 659.0], [85.0, 660.0], [85.1, 662.0], [85.2, 664.0], [85.3, 665.0], [85.4, 665.0], [85.5, 671.0], [85.6, 675.0], [85.7, 677.0], [85.8, 682.0], [85.9, 684.0], [86.0, 687.0], [86.1, 691.0], [86.2, 692.0], [86.3, 697.0], [86.4, 699.0], [86.5, 702.0], [86.6, 703.0], [86.7, 706.0], [86.8, 709.0], [86.9, 712.0], [87.0, 713.0], [87.1, 717.0], [87.2, 719.0], [87.3, 722.0], [87.4, 723.0], [87.5, 726.0], [87.6, 727.0], [87.7, 730.0], [87.8, 732.0], [87.9, 735.0], [88.0, 736.0], [88.1, 737.0], [88.2, 740.0], [88.3, 741.0], [88.4, 744.0], [88.5, 746.0], [88.6, 747.0], [88.7, 749.0], [88.8, 750.0], [88.9, 753.0], [89.0, 756.0], [89.1, 758.0], [89.2, 759.0], [89.3, 761.0], [89.4, 764.0], [89.5, 766.0], [89.6, 769.0], [89.7, 774.0], [89.8, 777.0], [89.9, 783.0], [90.0, 785.0], [90.1, 789.0], [90.2, 791.0], [90.3, 793.0], [90.4, 799.0], [90.5, 804.0], [90.6, 807.0], [90.7, 812.0], [90.8, 818.0], [90.9, 820.0], [91.0, 826.0], [91.1, 829.0], [91.2, 835.0], [91.3, 839.0], [91.4, 842.0], [91.5, 847.0], [91.6, 858.0], [91.7, 864.0], [91.8, 870.0], [91.9, 873.0], [92.0, 879.0], [92.1, 889.0], [92.2, 891.0], [92.3, 898.0], [92.4, 906.0], [92.5, 910.0], [92.6, 920.0], [92.7, 923.0], [92.8, 935.0], [92.9, 937.0], [93.0, 950.0], [93.1, 960.0], [93.2, 965.0], [93.3, 969.0], [93.4, 973.0], [93.5, 983.0], [93.6, 993.0], [93.7, 997.0], [93.8, 1000.0], [93.9, 1014.0], [94.0, 1023.0], [94.1, 1029.0], [94.2, 1038.0], [94.3, 1047.0], [94.4, 1055.0], [94.5, 1060.0], [94.6, 1071.0], [94.7, 1076.0], [94.8, 1079.0], [94.9, 1081.0], [95.0, 1087.0], [95.1, 1090.0], [95.2, 1100.0], [95.3, 1106.0], [95.4, 1108.0], [95.5, 1115.0], [95.6, 1125.0], [95.7, 1132.0], [95.8, 1137.0], [95.9, 1143.0], [96.0, 1169.0], [96.1, 1175.0], [96.2, 1181.0], [96.3, 1185.0], [96.4, 1193.0], [96.5, 1203.0], [96.6, 1218.0], [96.7, 1234.0], [96.8, 1246.0], [96.9, 1255.0], [97.0, 1271.0], [97.1, 1285.0], [97.2, 1296.0], [97.3, 1309.0], [97.4, 1328.0], [97.5, 1338.0], [97.6, 1347.0], [97.7, 1355.0], [97.8, 1374.0], [97.9, 1380.0], [98.0, 1398.0], [98.1, 1418.0], [98.2, 1429.0], [98.3, 1440.0], [98.4, 1471.0], [98.5, 1489.0], [98.6, 1498.0], [98.7, 1543.0], [98.8, 1574.0], [98.9, 1652.0], [99.0, 1713.0], [99.1, 1779.0], [99.2, 1879.0], [99.3, 1957.0], [99.4, 2025.0], [99.5, 2082.0], [99.6, 2203.0], [99.7, 2381.0], [99.8, 2467.0], [99.9, 2903.0], [100.0, 4139.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2526.0, "series": [{"data": [[0.0, 2526.0], [600.0, 231.0], [700.0, 208.0], [800.0, 102.0], [900.0, 75.0], [1000.0, 75.0], [1100.0, 67.0], [1200.0, 41.0], [1300.0, 40.0], [1400.0, 32.0], [1500.0, 10.0], [100.0, 465.0], [1600.0, 9.0], [1700.0, 7.0], [1800.0, 5.0], [1900.0, 8.0], [2000.0, 10.0], [2100.0, 2.0], [2200.0, 3.0], [2300.0, 5.0], [2400.0, 6.0], [2500.0, 2.0], [2900.0, 2.0], [3000.0, 1.0], [200.0, 402.0], [3600.0, 1.0], [4100.0, 2.0], [300.0, 374.0], [400.0, 283.0], [500.0, 268.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 73.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4052.0, "series": [{"data": [[0.0, 4052.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1137.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 73.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.444444444444445, "minX": 1.60402896E12, "maxY": 10.0, "series": [{"data": [[1.60402908E12, 10.0], [1.60402902E12, 10.0], [1.60402914E12, 9.444444444444445], [1.60402896E12, 9.924773022049294]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402914E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 290.5975935828869, "minX": 1.0, "maxY": 3627.0, "series": [{"data": [[4.0, 410.5], [8.0, 1223.25], [2.0, 2422.0], [1.0, 3627.0], [9.0, 437.0], [5.0, 1559.0], [10.0, 290.5975935828869], [3.0, 2114.5], [6.0, 330.0], [7.0, 1021.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.980425693652625, 294.19764348156605]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 710.7, "minX": 1.60402896E12, "maxY": 1767378.3666666667, "series": [{"data": [[1.60402908E12, 1767378.3666666667], [1.60402902E12, 1731304.1666666667], [1.60402914E12, 58040.11666666667], [1.60402896E12, 692560.6666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60402908E12, 19523.45], [1.60402902E12, 18629.933333333334], [1.60402914E12, 710.7], [1.60402896E12, 6626.866666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402914E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 270.1300813008122, "minX": 1.60402896E12, "maxY": 945.4444444444446, "series": [{"data": [[1.60402908E12, 270.1300813008122], [1.60402902E12, 274.95127504553756], [1.60402914E12, 945.4444444444446], [1.60402896E12, 349.709468223087]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402914E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 269.7398373983735, "minX": 1.60402896E12, "maxY": 945.0864197530865, "series": [{"data": [[1.60402908E12, 269.7398373983735], [1.60402902E12, 274.5396174863393], [1.60402914E12, 945.0864197530865], [1.60402896E12, 349.20103761348867]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402914E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60402896E12, "maxY": 0.10505836575875485, "series": [{"data": [[1.60402908E12, 0.011291779584462536], [1.60402902E12, 0.010018214936247745], [1.60402914E12, 0.0], [1.60402896E12, 0.10505836575875485]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402914E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.60402896E12, "maxY": 4139.0, "series": [{"data": [[1.60402908E12, 2117.0], [1.60402902E12, 2509.0], [1.60402914E12, 4139.0], [1.60402896E12, 2025.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60402908E12, 4.0], [1.60402902E12, 4.0], [1.60402914E12, 4.0], [1.60402896E12, 5.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60402908E12, 4.0], [1.60402902E12, 4.0], [1.60402914E12, 4.0], [1.60402896E12, 5.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60402908E12, 4.0], [1.60402902E12, 4.0], [1.60402914E12, 4.0], [1.60402896E12, 5.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60402908E12, 3.0], [1.60402902E12, 3.0], [1.60402914E12, 4.0], [1.60402896E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60402908E12, 121.0], [1.60402902E12, 90.0], [1.60402914E12, 571.0], [1.60402896E12, 220.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402914E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 6.0, "minX": 1.0, "maxY": 2422.0, "series": [{"data": [[3.0, 1912.0], [4.0, 1657.5], [5.0, 1394.0], [6.0, 1242.0], [7.0, 898.0], [8.0, 1100.5], [10.0, 771.5], [11.0, 723.5], [12.0, 771.5], [13.0, 758.0], [14.0, 696.5], [15.0, 539.5], [16.0, 640.5], [17.0, 541.0], [18.0, 600.5], [19.0, 482.0], [20.0, 386.0], [21.0, 363.0], [22.0, 415.0], [23.0, 375.0], [24.0, 196.5], [25.0, 358.0], [26.0, 146.5], [27.0, 374.0], [28.0, 389.0], [29.0, 14.0], [30.0, 180.5], [31.0, 100.0], [32.0, 258.5], [33.0, 214.5], [35.0, 209.5], [37.0, 245.5], [36.0, 226.0], [38.0, 157.0], [42.0, 136.0], [43.0, 249.0], [44.0, 10.0], [46.0, 19.5], [48.0, 24.5], [49.0, 6.0], [51.0, 12.0], [50.0, 130.5], [53.0, 191.0], [55.0, 152.5], [56.0, 172.5], [58.0, 70.0], [59.0, 21.0], [60.0, 17.0], [63.0, 25.0], [67.0, 9.0], [64.0, 12.0], [65.0, 14.0], [71.0, 87.0], [68.0, 16.5], [74.0, 15.0], [76.0, 88.5], [82.0, 15.0], [83.0, 55.5], [84.0, 11.5], [91.0, 17.0], [95.0, 66.0], [98.0, 11.5], [96.0, 84.0], [97.0, 79.0], [111.0, 24.0], [112.0, 90.0], [113.0, 7.0], [118.0, 11.0], [116.0, 76.5], [1.0, 2422.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 118.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 6.0, "minX": 1.0, "maxY": 2422.0, "series": [{"data": [[3.0, 1911.0], [4.0, 1657.5], [5.0, 1393.0], [6.0, 1241.5], [7.0, 897.0], [8.0, 1097.5], [10.0, 770.0], [11.0, 723.5], [12.0, 770.5], [13.0, 758.0], [14.0, 693.5], [15.0, 538.0], [16.0, 639.5], [17.0, 538.0], [18.0, 600.0], [19.0, 482.0], [20.0, 385.5], [21.0, 362.0], [22.0, 414.0], [23.0, 372.0], [24.0, 196.5], [25.0, 358.0], [26.0, 146.5], [27.0, 374.0], [28.0, 389.0], [29.0, 14.0], [30.0, 180.5], [31.0, 100.0], [32.0, 258.5], [33.0, 213.5], [35.0, 209.5], [37.0, 245.0], [36.0, 226.0], [38.0, 157.0], [42.0, 136.0], [43.0, 249.0], [44.0, 10.0], [46.0, 19.5], [48.0, 24.5], [49.0, 6.0], [51.0, 12.0], [50.0, 129.5], [53.0, 190.0], [55.0, 152.5], [56.0, 172.0], [58.0, 69.5], [59.0, 21.0], [60.0, 17.0], [63.0, 25.0], [67.0, 9.0], [64.0, 12.0], [65.0, 14.0], [71.0, 87.0], [68.0, 16.5], [74.0, 14.5], [76.0, 88.5], [82.0, 15.0], [83.0, 55.5], [84.0, 11.5], [91.0, 17.0], [95.0, 66.0], [98.0, 11.5], [96.0, 84.0], [97.0, 79.0], [111.0, 24.0], [112.0, 90.0], [113.0, 7.0], [118.0, 11.0], [116.0, 76.0], [1.0, 2422.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 118.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.60402896E12, "maxY": 36.9, "series": [{"data": [[1.60402908E12, 36.9], [1.60402902E12, 36.6], [1.60402914E12, 1.1833333333333333], [1.60402896E12, 13.016666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402914E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.60402896E12, "maxY": 36.9, "series": [{"data": [[1.60402908E12, 36.9], [1.60402902E12, 36.6], [1.60402914E12, 1.35], [1.60402896E12, 12.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402914E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.60402896E12, "maxY": 36.9, "series": [{"data": [[1.60402908E12, 36.9], [1.60402902E12, 36.6], [1.60402914E12, 1.35], [1.60402896E12, 12.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402914E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.60402896E12, "maxY": 36.9, "series": [{"data": [[1.60402908E12, 36.9], [1.60402902E12, 36.6], [1.60402914E12, 1.35], [1.60402896E12, 12.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402914E12, "title": "Total Transactions Per Second"}},
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

