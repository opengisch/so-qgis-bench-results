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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 3605.0, "series": [{"data": [[0.0, 30.0], [0.1, 32.0], [0.2, 32.0], [0.3, 33.0], [0.4, 34.0], [0.5, 35.0], [0.6, 35.0], [0.7, 35.0], [0.8, 35.0], [0.9, 36.0], [1.0, 36.0], [1.1, 36.0], [1.2, 36.0], [1.3, 36.0], [1.4, 36.0], [1.5, 36.0], [1.6, 37.0], [1.7, 37.0], [1.8, 37.0], [1.9, 37.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 38.0], [2.8, 38.0], [2.9, 38.0], [3.0, 38.0], [3.1, 38.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 39.0], [3.9, 39.0], [4.0, 39.0], [4.1, 39.0], [4.2, 39.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 40.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 40.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 42.0], [9.2, 42.0], [9.3, 42.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 43.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 43.0], [10.4, 43.0], [10.5, 43.0], [10.6, 43.0], [10.7, 43.0], [10.8, 43.0], [10.9, 43.0], [11.0, 43.0], [11.1, 44.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 44.0], [11.6, 44.0], [11.7, 44.0], [11.8, 44.0], [11.9, 44.0], [12.0, 44.0], [12.1, 44.0], [12.2, 44.0], [12.3, 44.0], [12.4, 44.0], [12.5, 44.0], [12.6, 45.0], [12.7, 45.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 45.0], [13.3, 45.0], [13.4, 45.0], [13.5, 45.0], [13.6, 45.0], [13.7, 45.0], [13.8, 45.0], [13.9, 46.0], [14.0, 46.0], [14.1, 46.0], [14.2, 46.0], [14.3, 46.0], [14.4, 46.0], [14.5, 46.0], [14.6, 46.0], [14.7, 46.0], [14.8, 46.0], [14.9, 47.0], [15.0, 47.0], [15.1, 47.0], [15.2, 47.0], [15.3, 47.0], [15.4, 47.0], [15.5, 47.0], [15.6, 47.0], [15.7, 48.0], [15.8, 48.0], [15.9, 48.0], [16.0, 48.0], [16.1, 48.0], [16.2, 48.0], [16.3, 48.0], [16.4, 48.0], [16.5, 49.0], [16.6, 49.0], [16.7, 49.0], [16.8, 49.0], [16.9, 50.0], [17.0, 50.0], [17.1, 50.0], [17.2, 51.0], [17.3, 51.0], [17.4, 51.0], [17.5, 51.0], [17.6, 52.0], [17.7, 52.0], [17.8, 52.0], [17.9, 53.0], [18.0, 53.0], [18.1, 54.0], [18.2, 54.0], [18.3, 54.0], [18.4, 55.0], [18.5, 56.0], [18.6, 56.0], [18.7, 57.0], [18.8, 58.0], [18.9, 59.0], [19.0, 59.0], [19.1, 60.0], [19.2, 60.0], [19.3, 61.0], [19.4, 61.0], [19.5, 62.0], [19.6, 62.0], [19.7, 62.0], [19.8, 63.0], [19.9, 63.0], [20.0, 64.0], [20.1, 64.0], [20.2, 65.0], [20.3, 65.0], [20.4, 66.0], [20.5, 66.0], [20.6, 66.0], [20.7, 67.0], [20.8, 67.0], [20.9, 67.0], [21.0, 68.0], [21.1, 68.0], [21.2, 68.0], [21.3, 68.0], [21.4, 68.0], [21.5, 69.0], [21.6, 69.0], [21.7, 69.0], [21.8, 69.0], [21.9, 69.0], [22.0, 69.0], [22.1, 70.0], [22.2, 70.0], [22.3, 70.0], [22.4, 70.0], [22.5, 70.0], [22.6, 70.0], [22.7, 71.0], [22.8, 71.0], [22.9, 71.0], [23.0, 71.0], [23.1, 71.0], [23.2, 71.0], [23.3, 72.0], [23.4, 72.0], [23.5, 72.0], [23.6, 72.0], [23.7, 72.0], [23.8, 72.0], [23.9, 73.0], [24.0, 73.0], [24.1, 73.0], [24.2, 73.0], [24.3, 73.0], [24.4, 73.0], [24.5, 73.0], [24.6, 73.0], [24.7, 73.0], [24.8, 73.0], [24.9, 74.0], [25.0, 74.0], [25.1, 74.0], [25.2, 74.0], [25.3, 74.0], [25.4, 74.0], [25.5, 74.0], [25.6, 75.0], [25.7, 75.0], [25.8, 75.0], [25.9, 75.0], [26.0, 75.0], [26.1, 75.0], [26.2, 75.0], [26.3, 75.0], [26.4, 75.0], [26.5, 75.0], [26.6, 76.0], [26.7, 76.0], [26.8, 76.0], [26.9, 76.0], [27.0, 76.0], [27.1, 76.0], [27.2, 76.0], [27.3, 76.0], [27.4, 76.0], [27.5, 77.0], [27.6, 77.0], [27.7, 77.0], [27.8, 77.0], [27.9, 77.0], [28.0, 77.0], [28.1, 77.0], [28.2, 77.0], [28.3, 77.0], [28.4, 77.0], [28.5, 77.0], [28.6, 78.0], [28.7, 78.0], [28.8, 78.0], [28.9, 78.0], [29.0, 78.0], [29.1, 78.0], [29.2, 78.0], [29.3, 78.0], [29.4, 78.0], [29.5, 78.0], [29.6, 79.0], [29.7, 79.0], [29.8, 79.0], [29.9, 79.0], [30.0, 79.0], [30.1, 79.0], [30.2, 79.0], [30.3, 79.0], [30.4, 79.0], [30.5, 79.0], [30.6, 79.0], [30.7, 80.0], [30.8, 80.0], [30.9, 80.0], [31.0, 80.0], [31.1, 80.0], [31.2, 80.0], [31.3, 80.0], [31.4, 80.0], [31.5, 80.0], [31.6, 80.0], [31.7, 81.0], [31.8, 81.0], [31.9, 81.0], [32.0, 81.0], [32.1, 81.0], [32.2, 81.0], [32.3, 81.0], [32.4, 81.0], [32.5, 81.0], [32.6, 82.0], [32.7, 82.0], [32.8, 82.0], [32.9, 82.0], [33.0, 82.0], [33.1, 82.0], [33.2, 82.0], [33.3, 82.0], [33.4, 82.0], [33.5, 83.0], [33.6, 83.0], [33.7, 83.0], [33.8, 83.0], [33.9, 83.0], [34.0, 83.0], [34.1, 83.0], [34.2, 83.0], [34.3, 83.0], [34.4, 84.0], [34.5, 84.0], [34.6, 84.0], [34.7, 84.0], [34.8, 84.0], [34.9, 84.0], [35.0, 84.0], [35.1, 84.0], [35.2, 85.0], [35.3, 85.0], [35.4, 85.0], [35.5, 85.0], [35.6, 85.0], [35.7, 85.0], [35.8, 85.0], [35.9, 85.0], [36.0, 85.0], [36.1, 86.0], [36.2, 86.0], [36.3, 86.0], [36.4, 86.0], [36.5, 86.0], [36.6, 87.0], [36.7, 87.0], [36.8, 87.0], [36.9, 87.0], [37.0, 87.0], [37.1, 88.0], [37.2, 88.0], [37.3, 88.0], [37.4, 88.0], [37.5, 88.0], [37.6, 88.0], [37.7, 89.0], [37.8, 89.0], [37.9, 89.0], [38.0, 89.0], [38.1, 90.0], [38.2, 90.0], [38.3, 90.0], [38.4, 91.0], [38.5, 91.0], [38.6, 91.0], [38.7, 91.0], [38.8, 92.0], [38.9, 92.0], [39.0, 93.0], [39.1, 93.0], [39.2, 94.0], [39.3, 94.0], [39.4, 95.0], [39.5, 96.0], [39.6, 96.0], [39.7, 96.0], [39.8, 97.0], [39.9, 97.0], [40.0, 98.0], [40.1, 98.0], [40.2, 99.0], [40.3, 100.0], [40.4, 100.0], [40.5, 101.0], [40.6, 102.0], [40.7, 103.0], [40.8, 104.0], [40.9, 105.0], [41.0, 105.0], [41.1, 107.0], [41.2, 108.0], [41.3, 110.0], [41.4, 111.0], [41.5, 111.0], [41.6, 112.0], [41.7, 112.0], [41.8, 112.0], [41.9, 113.0], [42.0, 114.0], [42.1, 114.0], [42.2, 115.0], [42.3, 115.0], [42.4, 117.0], [42.5, 118.0], [42.6, 119.0], [42.7, 120.0], [42.8, 121.0], [42.9, 122.0], [43.0, 124.0], [43.1, 124.0], [43.2, 125.0], [43.3, 126.0], [43.4, 126.0], [43.5, 127.0], [43.6, 130.0], [43.7, 130.0], [43.8, 132.0], [43.9, 134.0], [44.0, 135.0], [44.1, 136.0], [44.2, 137.0], [44.3, 138.0], [44.4, 139.0], [44.5, 141.0], [44.6, 142.0], [44.7, 143.0], [44.8, 144.0], [44.9, 145.0], [45.0, 146.0], [45.1, 146.0], [45.2, 148.0], [45.3, 149.0], [45.4, 149.0], [45.5, 150.0], [45.6, 150.0], [45.7, 151.0], [45.8, 151.0], [45.9, 152.0], [46.0, 153.0], [46.1, 154.0], [46.2, 155.0], [46.3, 155.0], [46.4, 156.0], [46.5, 157.0], [46.6, 158.0], [46.7, 158.0], [46.8, 159.0], [46.9, 160.0], [47.0, 160.0], [47.1, 161.0], [47.2, 162.0], [47.3, 162.0], [47.4, 164.0], [47.5, 164.0], [47.6, 165.0], [47.7, 165.0], [47.8, 166.0], [47.9, 166.0], [48.0, 167.0], [48.1, 167.0], [48.2, 168.0], [48.3, 168.0], [48.4, 169.0], [48.5, 170.0], [48.6, 170.0], [48.7, 171.0], [48.8, 172.0], [48.9, 173.0], [49.0, 174.0], [49.1, 175.0], [49.2, 176.0], [49.3, 177.0], [49.4, 178.0], [49.5, 178.0], [49.6, 179.0], [49.7, 180.0], [49.8, 180.0], [49.9, 181.0], [50.0, 182.0], [50.1, 184.0], [50.2, 184.0], [50.3, 185.0], [50.4, 186.0], [50.5, 188.0], [50.6, 188.0], [50.7, 190.0], [50.8, 191.0], [50.9, 192.0], [51.0, 192.0], [51.1, 193.0], [51.2, 193.0], [51.3, 194.0], [51.4, 196.0], [51.5, 197.0], [51.6, 198.0], [51.7, 199.0], [51.8, 199.0], [51.9, 200.0], [52.0, 201.0], [52.1, 201.0], [52.2, 202.0], [52.3, 203.0], [52.4, 205.0], [52.5, 206.0], [52.6, 206.0], [52.7, 208.0], [52.8, 209.0], [52.9, 210.0], [53.0, 211.0], [53.1, 211.0], [53.2, 212.0], [53.3, 213.0], [53.4, 214.0], [53.5, 215.0], [53.6, 215.0], [53.7, 216.0], [53.8, 217.0], [53.9, 218.0], [54.0, 219.0], [54.1, 220.0], [54.2, 221.0], [54.3, 222.0], [54.4, 223.0], [54.5, 223.0], [54.6, 224.0], [54.7, 226.0], [54.8, 226.0], [54.9, 227.0], [55.0, 227.0], [55.1, 228.0], [55.2, 229.0], [55.3, 230.0], [55.4, 231.0], [55.5, 232.0], [55.6, 233.0], [55.7, 234.0], [55.8, 235.0], [55.9, 236.0], [56.0, 237.0], [56.1, 237.0], [56.2, 239.0], [56.3, 240.0], [56.4, 241.0], [56.5, 242.0], [56.6, 242.0], [56.7, 243.0], [56.8, 244.0], [56.9, 245.0], [57.0, 246.0], [57.1, 246.0], [57.2, 248.0], [57.3, 249.0], [57.4, 250.0], [57.5, 251.0], [57.6, 253.0], [57.7, 254.0], [57.8, 254.0], [57.9, 255.0], [58.0, 256.0], [58.1, 256.0], [58.2, 257.0], [58.3, 259.0], [58.4, 260.0], [58.5, 262.0], [58.6, 262.0], [58.7, 264.0], [58.8, 264.0], [58.9, 266.0], [59.0, 266.0], [59.1, 267.0], [59.2, 268.0], [59.3, 269.0], [59.4, 270.0], [59.5, 271.0], [59.6, 273.0], [59.7, 274.0], [59.8, 274.0], [59.9, 275.0], [60.0, 276.0], [60.1, 278.0], [60.2, 279.0], [60.3, 281.0], [60.4, 282.0], [60.5, 283.0], [60.6, 284.0], [60.7, 286.0], [60.8, 287.0], [60.9, 288.0], [61.0, 289.0], [61.1, 290.0], [61.2, 291.0], [61.3, 293.0], [61.4, 294.0], [61.5, 295.0], [61.6, 296.0], [61.7, 298.0], [61.8, 299.0], [61.9, 300.0], [62.0, 302.0], [62.1, 303.0], [62.2, 304.0], [62.3, 307.0], [62.4, 308.0], [62.5, 310.0], [62.6, 312.0], [62.7, 314.0], [62.8, 316.0], [62.9, 318.0], [63.0, 320.0], [63.1, 321.0], [63.2, 323.0], [63.3, 325.0], [63.4, 328.0], [63.5, 329.0], [63.6, 331.0], [63.7, 333.0], [63.8, 336.0], [63.9, 336.0], [64.0, 338.0], [64.1, 340.0], [64.2, 341.0], [64.3, 342.0], [64.4, 343.0], [64.5, 345.0], [64.6, 345.0], [64.7, 347.0], [64.8, 348.0], [64.9, 350.0], [65.0, 354.0], [65.1, 356.0], [65.2, 357.0], [65.3, 358.0], [65.4, 360.0], [65.5, 361.0], [65.6, 363.0], [65.7, 365.0], [65.8, 367.0], [65.9, 369.0], [66.0, 371.0], [66.1, 374.0], [66.2, 376.0], [66.3, 376.0], [66.4, 378.0], [66.5, 380.0], [66.6, 381.0], [66.7, 381.0], [66.8, 383.0], [66.9, 385.0], [67.0, 387.0], [67.1, 388.0], [67.2, 390.0], [67.3, 390.0], [67.4, 391.0], [67.5, 393.0], [67.6, 395.0], [67.7, 396.0], [67.8, 397.0], [67.9, 398.0], [68.0, 400.0], [68.1, 400.0], [68.2, 402.0], [68.3, 404.0], [68.4, 405.0], [68.5, 408.0], [68.6, 409.0], [68.7, 410.0], [68.8, 411.0], [68.9, 413.0], [69.0, 414.0], [69.1, 415.0], [69.2, 417.0], [69.3, 418.0], [69.4, 419.0], [69.5, 421.0], [69.6, 424.0], [69.7, 424.0], [69.8, 426.0], [69.9, 428.0], [70.0, 429.0], [70.1, 430.0], [70.2, 431.0], [70.3, 434.0], [70.4, 435.0], [70.5, 437.0], [70.6, 438.0], [70.7, 440.0], [70.8, 441.0], [70.9, 442.0], [71.0, 444.0], [71.1, 444.0], [71.2, 447.0], [71.3, 448.0], [71.4, 449.0], [71.5, 451.0], [71.6, 452.0], [71.7, 453.0], [71.8, 456.0], [71.9, 457.0], [72.0, 458.0], [72.1, 461.0], [72.2, 462.0], [72.3, 464.0], [72.4, 465.0], [72.5, 467.0], [72.6, 470.0], [72.7, 472.0], [72.8, 474.0], [72.9, 475.0], [73.0, 477.0], [73.1, 478.0], [73.2, 479.0], [73.3, 481.0], [73.4, 484.0], [73.5, 485.0], [73.6, 487.0], [73.7, 489.0], [73.8, 491.0], [73.9, 492.0], [74.0, 492.0], [74.1, 496.0], [74.2, 498.0], [74.3, 501.0], [74.4, 503.0], [74.5, 504.0], [74.6, 506.0], [74.7, 510.0], [74.8, 512.0], [74.9, 514.0], [75.0, 516.0], [75.1, 519.0], [75.2, 523.0], [75.3, 525.0], [75.4, 526.0], [75.5, 528.0], [75.6, 530.0], [75.7, 532.0], [75.8, 534.0], [75.9, 535.0], [76.0, 537.0], [76.1, 537.0], [76.2, 538.0], [76.3, 539.0], [76.4, 541.0], [76.5, 545.0], [76.6, 548.0], [76.7, 550.0], [76.8, 551.0], [76.9, 553.0], [77.0, 555.0], [77.1, 557.0], [77.2, 557.0], [77.3, 558.0], [77.4, 560.0], [77.5, 562.0], [77.6, 564.0], [77.7, 565.0], [77.8, 568.0], [77.9, 570.0], [78.0, 571.0], [78.1, 573.0], [78.2, 575.0], [78.3, 577.0], [78.4, 579.0], [78.5, 582.0], [78.6, 583.0], [78.7, 586.0], [78.8, 588.0], [78.9, 590.0], [79.0, 591.0], [79.1, 593.0], [79.2, 596.0], [79.3, 598.0], [79.4, 600.0], [79.5, 602.0], [79.6, 606.0], [79.7, 608.0], [79.8, 613.0], [79.9, 616.0], [80.0, 619.0], [80.1, 622.0], [80.2, 624.0], [80.3, 625.0], [80.4, 628.0], [80.5, 629.0], [80.6, 633.0], [80.7, 636.0], [80.8, 638.0], [80.9, 640.0], [81.0, 643.0], [81.1, 645.0], [81.2, 650.0], [81.3, 651.0], [81.4, 653.0], [81.5, 655.0], [81.6, 660.0], [81.7, 663.0], [81.8, 666.0], [81.9, 669.0], [82.0, 671.0], [82.1, 676.0], [82.2, 679.0], [82.3, 681.0], [82.4, 685.0], [82.5, 689.0], [82.6, 691.0], [82.7, 692.0], [82.8, 693.0], [82.9, 695.0], [83.0, 697.0], [83.1, 698.0], [83.2, 701.0], [83.3, 703.0], [83.4, 708.0], [83.5, 710.0], [83.6, 713.0], [83.7, 715.0], [83.8, 717.0], [83.9, 718.0], [84.0, 721.0], [84.1, 723.0], [84.2, 725.0], [84.3, 729.0], [84.4, 732.0], [84.5, 736.0], [84.6, 737.0], [84.7, 740.0], [84.8, 744.0], [84.9, 745.0], [85.0, 746.0], [85.1, 748.0], [85.2, 752.0], [85.3, 754.0], [85.4, 756.0], [85.5, 761.0], [85.6, 762.0], [85.7, 765.0], [85.8, 767.0], [85.9, 768.0], [86.0, 768.0], [86.1, 770.0], [86.2, 771.0], [86.3, 774.0], [86.4, 775.0], [86.5, 776.0], [86.6, 779.0], [86.7, 783.0], [86.8, 785.0], [86.9, 787.0], [87.0, 789.0], [87.1, 791.0], [87.2, 795.0], [87.3, 799.0], [87.4, 801.0], [87.5, 804.0], [87.6, 808.0], [87.7, 816.0], [87.8, 823.0], [87.9, 826.0], [88.0, 829.0], [88.1, 830.0], [88.2, 833.0], [88.3, 834.0], [88.4, 838.0], [88.5, 839.0], [88.6, 841.0], [88.7, 845.0], [88.8, 850.0], [88.9, 852.0], [89.0, 855.0], [89.1, 862.0], [89.2, 865.0], [89.3, 869.0], [89.4, 875.0], [89.5, 876.0], [89.6, 878.0], [89.7, 882.0], [89.8, 886.0], [89.9, 890.0], [90.0, 896.0], [90.1, 900.0], [90.2, 906.0], [90.3, 910.0], [90.4, 913.0], [90.5, 919.0], [90.6, 926.0], [90.7, 932.0], [90.8, 939.0], [90.9, 945.0], [91.0, 948.0], [91.1, 952.0], [91.2, 957.0], [91.3, 961.0], [91.4, 963.0], [91.5, 969.0], [91.6, 975.0], [91.7, 978.0], [91.8, 982.0], [91.9, 990.0], [92.0, 996.0], [92.1, 1006.0], [92.2, 1013.0], [92.3, 1022.0], [92.4, 1027.0], [92.5, 1035.0], [92.6, 1040.0], [92.7, 1042.0], [92.8, 1050.0], [92.9, 1052.0], [93.0, 1059.0], [93.1, 1065.0], [93.2, 1070.0], [93.3, 1074.0], [93.4, 1083.0], [93.5, 1086.0], [93.6, 1095.0], [93.7, 1098.0], [93.8, 1106.0], [93.9, 1115.0], [94.0, 1121.0], [94.1, 1128.0], [94.2, 1132.0], [94.3, 1141.0], [94.4, 1145.0], [94.5, 1150.0], [94.6, 1157.0], [94.7, 1168.0], [94.8, 1173.0], [94.9, 1177.0], [95.0, 1191.0], [95.1, 1205.0], [95.2, 1212.0], [95.3, 1219.0], [95.4, 1224.0], [95.5, 1236.0], [95.6, 1242.0], [95.7, 1247.0], [95.8, 1255.0], [95.9, 1266.0], [96.0, 1271.0], [96.1, 1275.0], [96.2, 1283.0], [96.3, 1295.0], [96.4, 1298.0], [96.5, 1308.0], [96.6, 1313.0], [96.7, 1323.0], [96.8, 1334.0], [96.9, 1339.0], [97.0, 1361.0], [97.1, 1387.0], [97.2, 1410.0], [97.3, 1422.0], [97.4, 1430.0], [97.5, 1439.0], [97.6, 1459.0], [97.7, 1478.0], [97.8, 1507.0], [97.9, 1551.0], [98.0, 1566.0], [98.1, 1579.0], [98.2, 1609.0], [98.3, 1642.0], [98.4, 1661.0], [98.5, 1717.0], [98.6, 1757.0], [98.7, 1788.0], [98.8, 1823.0], [98.9, 1874.0], [99.0, 1909.0], [99.1, 1966.0], [99.2, 2056.0], [99.3, 2143.0], [99.4, 2190.0], [99.5, 2206.0], [99.6, 2269.0], [99.7, 2347.0], [99.8, 2507.0], [99.9, 2955.0], [100.0, 3605.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2120.0, "series": [{"data": [[0.0, 2120.0], [600.0, 199.0], [700.0, 219.0], [800.0, 145.0], [900.0, 104.0], [1000.0, 87.0], [1100.0, 71.0], [1200.0, 73.0], [1300.0, 38.0], [1400.0, 32.0], [1500.0, 21.0], [100.0, 606.0], [1600.0, 15.0], [1700.0, 13.0], [1800.0, 14.0], [1900.0, 9.0], [2000.0, 7.0], [2100.0, 8.0], [2200.0, 12.0], [2300.0, 5.0], [2400.0, 2.0], [2500.0, 2.0], [2600.0, 2.0], [2900.0, 4.0], [200.0, 529.0], [3500.0, 2.0], [3600.0, 1.0], [300.0, 322.0], [400.0, 328.0], [500.0, 272.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 116.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3906.0, "series": [{"data": [[0.0, 3906.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1240.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 116.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.716981132075471, "minX": 1.6041E12, "maxY": 10.0, "series": [{"data": [[1.60410012E12, 10.0], [1.60410018E12, 9.716981132075471], [1.6041E12, 9.982182628062363], [1.60410006E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410018E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 351.6369353916521, "minX": 1.0, "maxY": 3549.0, "series": [{"data": [[8.0, 1521.0], [4.0, 1642.0], [2.0, 2394.0], [1.0, 3549.0], [9.0, 1887.0], [5.0, 1253.0], [10.0, 351.6369353916521], [3.0, 1412.0], [6.0, 1540.5], [7.0, 1118.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98688711516533, 355.42037248194623]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1432.0166666666667, "minX": 1.6041E12, "maxY": 1617910.5833333333, "series": [{"data": [[1.60410012E12, 1617910.5833333333], [1.60410018E12, 71231.23333333334], [1.6041E12, 1352083.3333333333], [1.60410006E12, 1209820.9333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60410012E12, 14588.983333333334], [1.60410018E12, 1432.0166666666667], [1.6041E12, 11667.216666666667], [1.60410006E12, 17802.733333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410018E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 285.5509325681489, "minX": 1.6041E12, "maxY": 561.7106918238994, "series": [{"data": [[1.60410012E12, 362.46546546546557], [1.60410018E12, 561.7106918238994], [1.6041E12, 430.82256867112113], [1.60410006E12, 285.5509325681489]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410018E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 285.2152080344339, "minX": 1.6041E12, "maxY": 561.446540880503, "series": [{"data": [[1.60410012E12, 362.02462462462444], [1.60410018E12, 561.446540880503], [1.6041E12, 430.288789903489], [1.60410006E12, 285.2152080344339]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410018E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008130081300813, "minX": 1.6041E12, "maxY": 0.07126948775055682, "series": [{"data": [[1.60410012E12, 0.00900900900900903], [1.60410018E12, 0.018867924528301903], [1.6041E12, 0.07126948775055682], [1.60410006E12, 0.008130081300813]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410018E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.6041E12, "maxY": 3605.0, "series": [{"data": [[1.60410012E12, 2483.0], [1.60410018E12, 3605.0], [1.6041E12, 2629.0], [1.60410006E12, 2583.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60410012E12, 35.0], [1.60410018E12, 35.0], [1.6041E12, 35.0], [1.60410006E12, 36.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60410012E12, 35.0], [1.60410018E12, 35.0], [1.6041E12, 35.3452001285553], [1.60410006E12, 37.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60410012E12, 35.0], [1.60410018E12, 35.0], [1.6041E12, 35.0], [1.60410006E12, 36.87399975061416]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60410012E12, 31.0], [1.60410018E12, 35.0], [1.6041E12, 30.0], [1.60410006E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60410012E12, 209.0], [1.60410018E12, 267.0], [1.6041E12, 274.0], [1.60410006E12, 145.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410018E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 48.0, "minX": 1.0, "maxY": 3549.0, "series": [{"data": [[3.0, 2923.0], [4.0, 2370.5], [5.0, 1426.0], [6.0, 1143.5], [7.0, 863.0], [8.0, 732.0], [9.0, 747.0], [10.0, 898.0], [11.0, 804.0], [12.0, 440.5], [13.0, 678.0], [14.0, 643.0], [15.0, 559.0], [16.0, 623.0], [17.0, 577.0], [18.0, 444.0], [19.0, 453.0], [20.0, 336.0], [21.0, 442.0], [22.0, 408.5], [23.0, 86.5], [24.0, 324.5], [25.0, 319.5], [26.0, 335.5], [27.0, 215.0], [28.0, 217.0], [29.0, 371.0], [30.0, 253.5], [31.0, 224.0], [32.0, 208.0], [33.0, 263.5], [34.0, 146.5], [36.0, 230.0], [37.0, 48.0], [39.0, 91.0], [38.0, 163.5], [41.0, 84.5], [43.0, 85.0], [42.0, 86.0], [44.0, 159.5], [46.0, 84.5], [47.0, 156.0], [49.0, 153.0], [50.0, 123.5], [52.0, 83.0], [54.0, 95.0], [55.0, 103.0], [57.0, 78.0], [56.0, 50.0], [59.0, 82.0], [58.0, 77.5], [60.0, 120.5], [62.0, 80.0], [66.0, 151.0], [65.0, 126.0], [64.0, 117.0], [68.0, 113.0], [73.0, 97.0], [75.0, 77.0], [72.0, 75.5], [90.0, 72.0], [94.0, 76.5], [1.0, 3549.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 48.0, "minX": 1.0, "maxY": 3549.0, "series": [{"data": [[3.0, 2922.0], [4.0, 2369.0], [5.0, 1426.0], [6.0, 1143.0], [7.0, 863.0], [8.0, 731.5], [9.0, 747.0], [10.0, 897.5], [11.0, 803.0], [12.0, 440.5], [13.0, 677.5], [14.0, 642.5], [15.0, 558.5], [16.0, 621.5], [17.0, 576.0], [18.0, 443.0], [19.0, 451.0], [20.0, 336.0], [21.0, 442.0], [22.0, 406.5], [23.0, 86.5], [24.0, 323.0], [25.0, 319.0], [26.0, 335.5], [27.0, 214.0], [28.0, 217.0], [29.0, 371.0], [30.0, 253.0], [31.0, 224.0], [32.0, 207.0], [33.0, 263.0], [34.0, 146.5], [36.0, 230.0], [37.0, 48.0], [39.0, 91.0], [38.0, 162.5], [41.0, 84.5], [43.0, 85.0], [42.0, 86.0], [44.0, 159.0], [46.0, 84.5], [47.0, 156.0], [49.0, 153.0], [50.0, 123.5], [52.0, 83.0], [54.0, 95.0], [55.0, 103.0], [57.0, 78.0], [56.0, 50.0], [59.0, 82.0], [58.0, 77.5], [60.0, 120.5], [62.0, 80.0], [66.0, 151.0], [65.0, 125.0], [64.0, 117.0], [68.0, 112.5], [73.0, 97.0], [75.0, 77.0], [72.0, 75.5], [90.0, 72.0], [94.0, 76.0], [1.0, 3549.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.6041E12, "maxY": 34.85, "series": [{"data": [[1.60410012E12, 27.75], [1.60410018E12, 2.4833333333333334], [1.6041E12, 22.616666666666667], [1.60410006E12, 34.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410018E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.65, "minX": 1.6041E12, "maxY": 34.85, "series": [{"data": [[1.60410012E12, 27.75], [1.60410018E12, 2.65], [1.6041E12, 22.45], [1.60410006E12, 34.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410018E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.65, "minX": 1.6041E12, "maxY": 34.85, "series": [{"data": [[1.60410012E12, 27.75], [1.60410018E12, 2.65], [1.6041E12, 22.45], [1.60410006E12, 34.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410018E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.65, "minX": 1.6041E12, "maxY": 34.85, "series": [{"data": [[1.60410012E12, 27.75], [1.60410018E12, 2.65], [1.6041E12, 22.45], [1.60410006E12, 34.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410018E12, "title": "Total Transactions Per Second"}},
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

