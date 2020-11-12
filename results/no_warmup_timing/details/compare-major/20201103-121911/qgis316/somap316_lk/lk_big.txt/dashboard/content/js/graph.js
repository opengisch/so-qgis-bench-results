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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 5471.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 5.0], [2.4, 5.0], [2.5, 5.0], [2.6, 5.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 5.0], [3.2, 5.0], [3.3, 5.0], [3.4, 5.0], [3.5, 5.0], [3.6, 5.0], [3.7, 5.0], [3.8, 5.0], [3.9, 6.0], [4.0, 6.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 6.0], [4.5, 6.0], [4.6, 6.0], [4.7, 6.0], [4.8, 6.0], [4.9, 6.0], [5.0, 6.0], [5.1, 6.0], [5.2, 6.0], [5.3, 6.0], [5.4, 6.0], [5.5, 6.0], [5.6, 6.0], [5.7, 6.0], [5.8, 6.0], [5.9, 6.0], [6.0, 6.0], [6.1, 6.0], [6.2, 6.0], [6.3, 6.0], [6.4, 6.0], [6.5, 6.0], [6.6, 6.0], [6.7, 6.0], [6.8, 6.0], [6.9, 6.0], [7.0, 6.0], [7.1, 6.0], [7.2, 6.0], [7.3, 6.0], [7.4, 6.0], [7.5, 7.0], [7.6, 7.0], [7.7, 7.0], [7.8, 7.0], [7.9, 7.0], [8.0, 7.0], [8.1, 7.0], [8.2, 7.0], [8.3, 7.0], [8.4, 7.0], [8.5, 7.0], [8.6, 7.0], [8.7, 7.0], [8.8, 7.0], [8.9, 7.0], [9.0, 7.0], [9.1, 7.0], [9.2, 7.0], [9.3, 7.0], [9.4, 7.0], [9.5, 7.0], [9.6, 7.0], [9.7, 7.0], [9.8, 7.0], [9.9, 7.0], [10.0, 7.0], [10.1, 7.0], [10.2, 7.0], [10.3, 7.0], [10.4, 7.0], [10.5, 7.0], [10.6, 7.0], [10.7, 7.0], [10.8, 7.0], [10.9, 7.0], [11.0, 7.0], [11.1, 7.0], [11.2, 8.0], [11.3, 8.0], [11.4, 8.0], [11.5, 8.0], [11.6, 8.0], [11.7, 8.0], [11.8, 8.0], [11.9, 8.0], [12.0, 8.0], [12.1, 8.0], [12.2, 8.0], [12.3, 8.0], [12.4, 8.0], [12.5, 8.0], [12.6, 8.0], [12.7, 8.0], [12.8, 8.0], [12.9, 8.0], [13.0, 8.0], [13.1, 8.0], [13.2, 8.0], [13.3, 8.0], [13.4, 8.0], [13.5, 8.0], [13.6, 8.0], [13.7, 8.0], [13.8, 8.0], [13.9, 8.0], [14.0, 8.0], [14.1, 8.0], [14.2, 8.0], [14.3, 8.0], [14.4, 8.0], [14.5, 8.0], [14.6, 8.0], [14.7, 8.0], [14.8, 8.0], [14.9, 8.0], [15.0, 8.0], [15.1, 8.0], [15.2, 9.0], [15.3, 9.0], [15.4, 9.0], [15.5, 9.0], [15.6, 9.0], [15.7, 9.0], [15.8, 9.0], [15.9, 9.0], [16.0, 9.0], [16.1, 9.0], [16.2, 9.0], [16.3, 9.0], [16.4, 9.0], [16.5, 9.0], [16.6, 9.0], [16.7, 9.0], [16.8, 9.0], [16.9, 9.0], [17.0, 9.0], [17.1, 9.0], [17.2, 9.0], [17.3, 9.0], [17.4, 9.0], [17.5, 9.0], [17.6, 9.0], [17.7, 9.0], [17.8, 9.0], [17.9, 9.0], [18.0, 9.0], [18.1, 9.0], [18.2, 9.0], [18.3, 9.0], [18.4, 9.0], [18.5, 9.0], [18.6, 9.0], [18.7, 9.0], [18.8, 9.0], [18.9, 9.0], [19.0, 9.0], [19.1, 9.0], [19.2, 10.0], [19.3, 10.0], [19.4, 10.0], [19.5, 10.0], [19.6, 10.0], [19.7, 10.0], [19.8, 10.0], [19.9, 10.0], [20.0, 10.0], [20.1, 10.0], [20.2, 10.0], [20.3, 10.0], [20.4, 10.0], [20.5, 10.0], [20.6, 10.0], [20.7, 10.0], [20.8, 10.0], [20.9, 10.0], [21.0, 10.0], [21.1, 10.0], [21.2, 10.0], [21.3, 10.0], [21.4, 10.0], [21.5, 10.0], [21.6, 10.0], [21.7, 10.0], [21.8, 10.0], [21.9, 11.0], [22.0, 11.0], [22.1, 11.0], [22.2, 11.0], [22.3, 11.0], [22.4, 11.0], [22.5, 11.0], [22.6, 11.0], [22.7, 11.0], [22.8, 11.0], [22.9, 11.0], [23.0, 11.0], [23.1, 11.0], [23.2, 11.0], [23.3, 11.0], [23.4, 11.0], [23.5, 11.0], [23.6, 11.0], [23.7, 11.0], [23.8, 11.0], [23.9, 11.0], [24.0, 11.0], [24.1, 11.0], [24.2, 11.0], [24.3, 11.0], [24.4, 11.0], [24.5, 12.0], [24.6, 12.0], [24.7, 12.0], [24.8, 12.0], [24.9, 12.0], [25.0, 12.0], [25.1, 12.0], [25.2, 12.0], [25.3, 12.0], [25.4, 12.0], [25.5, 12.0], [25.6, 12.0], [25.7, 12.0], [25.8, 12.0], [25.9, 12.0], [26.0, 12.0], [26.1, 12.0], [26.2, 12.0], [26.3, 12.0], [26.4, 12.0], [26.5, 12.0], [26.6, 12.0], [26.7, 12.0], [26.8, 13.0], [26.9, 13.0], [27.0, 13.0], [27.1, 13.0], [27.2, 13.0], [27.3, 13.0], [27.4, 13.0], [27.5, 13.0], [27.6, 13.0], [27.7, 13.0], [27.8, 13.0], [27.9, 13.0], [28.0, 13.0], [28.1, 13.0], [28.2, 13.0], [28.3, 13.0], [28.4, 13.0], [28.5, 13.0], [28.6, 14.0], [28.7, 14.0], [28.8, 14.0], [28.9, 14.0], [29.0, 14.0], [29.1, 14.0], [29.2, 14.0], [29.3, 14.0], [29.4, 14.0], [29.5, 14.0], [29.6, 14.0], [29.7, 14.0], [29.8, 14.0], [29.9, 14.0], [30.0, 14.0], [30.1, 14.0], [30.2, 15.0], [30.3, 15.0], [30.4, 15.0], [30.5, 15.0], [30.6, 15.0], [30.7, 15.0], [30.8, 15.0], [30.9, 15.0], [31.0, 15.0], [31.1, 15.0], [31.2, 15.0], [31.3, 15.0], [31.4, 16.0], [31.5, 16.0], [31.6, 16.0], [31.7, 16.0], [31.8, 16.0], [31.9, 16.0], [32.0, 16.0], [32.1, 16.0], [32.2, 16.0], [32.3, 16.0], [32.4, 16.0], [32.5, 16.0], [32.6, 16.0], [32.7, 17.0], [32.8, 17.0], [32.9, 17.0], [33.0, 17.0], [33.1, 17.0], [33.2, 17.0], [33.3, 17.0], [33.4, 17.0], [33.5, 17.0], [33.6, 17.0], [33.7, 17.0], [33.8, 18.0], [33.9, 18.0], [34.0, 18.0], [34.1, 18.0], [34.2, 18.0], [34.3, 18.0], [34.4, 18.0], [34.5, 18.0], [34.6, 18.0], [34.7, 19.0], [34.8, 19.0], [34.9, 19.0], [35.0, 19.0], [35.1, 19.0], [35.2, 19.0], [35.3, 19.0], [35.4, 19.0], [35.5, 19.0], [35.6, 20.0], [35.7, 20.0], [35.8, 20.0], [35.9, 20.0], [36.0, 20.0], [36.1, 20.0], [36.2, 21.0], [36.3, 21.0], [36.4, 21.0], [36.5, 21.0], [36.6, 21.0], [36.7, 21.0], [36.8, 22.0], [36.9, 22.0], [37.0, 22.0], [37.1, 22.0], [37.2, 22.0], [37.3, 22.0], [37.4, 23.0], [37.5, 23.0], [37.6, 23.0], [37.7, 23.0], [37.8, 24.0], [37.9, 24.0], [38.0, 24.0], [38.1, 24.0], [38.2, 25.0], [38.3, 26.0], [38.4, 26.0], [38.5, 27.0], [38.6, 27.0], [38.7, 28.0], [38.8, 28.0], [38.9, 29.0], [39.0, 29.0], [39.1, 30.0], [39.2, 30.0], [39.3, 31.0], [39.4, 33.0], [39.5, 33.0], [39.6, 34.0], [39.7, 35.0], [39.8, 35.0], [39.9, 36.0], [40.0, 36.0], [40.1, 38.0], [40.2, 38.0], [40.3, 38.0], [40.4, 39.0], [40.5, 39.0], [40.6, 40.0], [40.7, 40.0], [40.8, 40.0], [40.9, 41.0], [41.0, 41.0], [41.1, 42.0], [41.2, 42.0], [41.3, 42.0], [41.4, 43.0], [41.5, 43.0], [41.6, 43.0], [41.7, 44.0], [41.8, 44.0], [41.9, 44.0], [42.0, 45.0], [42.1, 45.0], [42.2, 46.0], [42.3, 46.0], [42.4, 47.0], [42.5, 47.0], [42.6, 47.0], [42.7, 48.0], [42.8, 48.0], [42.9, 49.0], [43.0, 49.0], [43.1, 50.0], [43.2, 51.0], [43.3, 52.0], [43.4, 53.0], [43.5, 53.0], [43.6, 54.0], [43.7, 55.0], [43.8, 56.0], [43.9, 58.0], [44.0, 59.0], [44.1, 59.0], [44.2, 61.0], [44.3, 63.0], [44.4, 63.0], [44.5, 65.0], [44.6, 67.0], [44.7, 67.0], [44.8, 69.0], [44.9, 70.0], [45.0, 72.0], [45.1, 72.0], [45.2, 73.0], [45.3, 75.0], [45.4, 75.0], [45.5, 76.0], [45.6, 77.0], [45.7, 80.0], [45.8, 80.0], [45.9, 81.0], [46.0, 82.0], [46.1, 83.0], [46.2, 84.0], [46.3, 85.0], [46.4, 87.0], [46.5, 87.0], [46.6, 88.0], [46.7, 89.0], [46.8, 90.0], [46.9, 90.0], [47.0, 91.0], [47.1, 92.0], [47.2, 92.0], [47.3, 93.0], [47.4, 94.0], [47.5, 94.0], [47.6, 95.0], [47.7, 95.0], [47.8, 96.0], [47.9, 97.0], [48.0, 98.0], [48.1, 99.0], [48.2, 101.0], [48.3, 102.0], [48.4, 102.0], [48.5, 105.0], [48.6, 107.0], [48.7, 108.0], [48.8, 108.0], [48.9, 109.0], [49.0, 110.0], [49.1, 111.0], [49.2, 113.0], [49.3, 114.0], [49.4, 116.0], [49.5, 117.0], [49.6, 118.0], [49.7, 119.0], [49.8, 120.0], [49.9, 121.0], [50.0, 123.0], [50.1, 123.0], [50.2, 124.0], [50.3, 125.0], [50.4, 126.0], [50.5, 127.0], [50.6, 128.0], [50.7, 129.0], [50.8, 131.0], [50.9, 132.0], [51.0, 136.0], [51.1, 137.0], [51.2, 139.0], [51.3, 140.0], [51.4, 141.0], [51.5, 142.0], [51.6, 144.0], [51.7, 145.0], [51.8, 146.0], [51.9, 147.0], [52.0, 149.0], [52.1, 150.0], [52.2, 152.0], [52.3, 154.0], [52.4, 155.0], [52.5, 156.0], [52.6, 157.0], [52.7, 158.0], [52.8, 159.0], [52.9, 160.0], [53.0, 160.0], [53.1, 161.0], [53.2, 162.0], [53.3, 163.0], [53.4, 164.0], [53.5, 165.0], [53.6, 166.0], [53.7, 167.0], [53.8, 167.0], [53.9, 168.0], [54.0, 169.0], [54.1, 170.0], [54.2, 171.0], [54.3, 172.0], [54.4, 173.0], [54.5, 174.0], [54.6, 175.0], [54.7, 176.0], [54.8, 177.0], [54.9, 179.0], [55.0, 180.0], [55.1, 181.0], [55.2, 181.0], [55.3, 182.0], [55.4, 184.0], [55.5, 185.0], [55.6, 186.0], [55.7, 187.0], [55.8, 188.0], [55.9, 189.0], [56.0, 190.0], [56.1, 191.0], [56.2, 193.0], [56.3, 195.0], [56.4, 195.0], [56.5, 197.0], [56.6, 198.0], [56.7, 198.0], [56.8, 199.0], [56.9, 200.0], [57.0, 200.0], [57.1, 202.0], [57.2, 203.0], [57.3, 204.0], [57.4, 205.0], [57.5, 206.0], [57.6, 208.0], [57.7, 208.0], [57.8, 209.0], [57.9, 210.0], [58.0, 211.0], [58.1, 211.0], [58.2, 213.0], [58.3, 214.0], [58.4, 214.0], [58.5, 215.0], [58.6, 215.0], [58.7, 216.0], [58.8, 217.0], [58.9, 219.0], [59.0, 220.0], [59.1, 221.0], [59.2, 222.0], [59.3, 223.0], [59.4, 224.0], [59.5, 224.0], [59.6, 225.0], [59.7, 226.0], [59.8, 227.0], [59.9, 227.0], [60.0, 228.0], [60.1, 230.0], [60.2, 231.0], [60.3, 232.0], [60.4, 232.0], [60.5, 233.0], [60.6, 234.0], [60.7, 235.0], [60.8, 236.0], [60.9, 238.0], [61.0, 239.0], [61.1, 241.0], [61.2, 242.0], [61.3, 242.0], [61.4, 244.0], [61.5, 245.0], [61.6, 245.0], [61.7, 247.0], [61.8, 249.0], [61.9, 251.0], [62.0, 252.0], [62.1, 254.0], [62.2, 256.0], [62.3, 258.0], [62.4, 259.0], [62.5, 261.0], [62.6, 263.0], [62.7, 266.0], [62.8, 269.0], [62.9, 270.0], [63.0, 272.0], [63.1, 274.0], [63.2, 276.0], [63.3, 279.0], [63.4, 280.0], [63.5, 282.0], [63.6, 284.0], [63.7, 286.0], [63.8, 288.0], [63.9, 288.0], [64.0, 289.0], [64.1, 291.0], [64.2, 295.0], [64.3, 296.0], [64.4, 298.0], [64.5, 300.0], [64.6, 302.0], [64.7, 303.0], [64.8, 304.0], [64.9, 306.0], [65.0, 307.0], [65.1, 309.0], [65.2, 310.0], [65.3, 312.0], [65.4, 313.0], [65.5, 314.0], [65.6, 316.0], [65.7, 317.0], [65.8, 320.0], [65.9, 321.0], [66.0, 321.0], [66.1, 322.0], [66.2, 324.0], [66.3, 325.0], [66.4, 326.0], [66.5, 327.0], [66.6, 328.0], [66.7, 330.0], [66.8, 333.0], [66.9, 333.0], [67.0, 335.0], [67.1, 335.0], [67.2, 337.0], [67.3, 339.0], [67.4, 341.0], [67.5, 342.0], [67.6, 343.0], [67.7, 344.0], [67.8, 345.0], [67.9, 346.0], [68.0, 347.0], [68.1, 349.0], [68.2, 351.0], [68.3, 353.0], [68.4, 355.0], [68.5, 358.0], [68.6, 359.0], [68.7, 360.0], [68.8, 362.0], [68.9, 363.0], [69.0, 364.0], [69.1, 367.0], [69.2, 368.0], [69.3, 371.0], [69.4, 374.0], [69.5, 376.0], [69.6, 377.0], [69.7, 378.0], [69.8, 381.0], [69.9, 382.0], [70.0, 384.0], [70.1, 386.0], [70.2, 387.0], [70.3, 390.0], [70.4, 391.0], [70.5, 393.0], [70.6, 394.0], [70.7, 396.0], [70.8, 398.0], [70.9, 399.0], [71.0, 401.0], [71.1, 402.0], [71.2, 405.0], [71.3, 405.0], [71.4, 408.0], [71.5, 411.0], [71.6, 412.0], [71.7, 413.0], [71.8, 414.0], [71.9, 415.0], [72.0, 416.0], [72.1, 417.0], [72.2, 419.0], [72.3, 422.0], [72.4, 424.0], [72.5, 425.0], [72.6, 428.0], [72.7, 429.0], [72.8, 431.0], [72.9, 432.0], [73.0, 435.0], [73.1, 438.0], [73.2, 439.0], [73.3, 441.0], [73.4, 442.0], [73.5, 444.0], [73.6, 445.0], [73.7, 448.0], [73.8, 450.0], [73.9, 453.0], [74.0, 454.0], [74.1, 456.0], [74.2, 458.0], [74.3, 460.0], [74.4, 461.0], [74.5, 463.0], [74.6, 467.0], [74.7, 468.0], [74.8, 469.0], [74.9, 472.0], [75.0, 474.0], [75.1, 476.0], [75.2, 479.0], [75.3, 482.0], [75.4, 484.0], [75.5, 485.0], [75.6, 487.0], [75.7, 491.0], [75.8, 493.0], [75.9, 496.0], [76.0, 499.0], [76.1, 500.0], [76.2, 502.0], [76.3, 504.0], [76.4, 506.0], [76.5, 507.0], [76.6, 509.0], [76.7, 511.0], [76.8, 513.0], [76.9, 514.0], [77.0, 516.0], [77.1, 519.0], [77.2, 520.0], [77.3, 521.0], [77.4, 526.0], [77.5, 528.0], [77.6, 530.0], [77.7, 532.0], [77.8, 533.0], [77.9, 537.0], [78.0, 539.0], [78.1, 540.0], [78.2, 543.0], [78.3, 546.0], [78.4, 548.0], [78.5, 549.0], [78.6, 551.0], [78.7, 553.0], [78.8, 555.0], [78.9, 557.0], [79.0, 559.0], [79.1, 561.0], [79.2, 562.0], [79.3, 563.0], [79.4, 564.0], [79.5, 566.0], [79.6, 567.0], [79.7, 568.0], [79.8, 570.0], [79.9, 571.0], [80.0, 572.0], [80.1, 575.0], [80.2, 577.0], [80.3, 580.0], [80.4, 581.0], [80.5, 583.0], [80.6, 585.0], [80.7, 586.0], [80.8, 588.0], [80.9, 590.0], [81.0, 593.0], [81.1, 595.0], [81.2, 596.0], [81.3, 600.0], [81.4, 602.0], [81.5, 605.0], [81.6, 607.0], [81.7, 608.0], [81.8, 610.0], [81.9, 613.0], [82.0, 614.0], [82.1, 615.0], [82.2, 617.0], [82.3, 620.0], [82.4, 622.0], [82.5, 624.0], [82.6, 625.0], [82.7, 626.0], [82.8, 627.0], [82.9, 630.0], [83.0, 632.0], [83.1, 635.0], [83.2, 639.0], [83.3, 641.0], [83.4, 642.0], [83.5, 644.0], [83.6, 646.0], [83.7, 648.0], [83.8, 649.0], [83.9, 650.0], [84.0, 653.0], [84.1, 655.0], [84.2, 658.0], [84.3, 661.0], [84.4, 664.0], [84.5, 667.0], [84.6, 669.0], [84.7, 670.0], [84.8, 675.0], [84.9, 676.0], [85.0, 676.0], [85.1, 678.0], [85.2, 683.0], [85.3, 685.0], [85.4, 686.0], [85.5, 689.0], [85.6, 691.0], [85.7, 695.0], [85.8, 698.0], [85.9, 700.0], [86.0, 703.0], [86.1, 706.0], [86.2, 711.0], [86.3, 715.0], [86.4, 718.0], [86.5, 724.0], [86.6, 725.0], [86.7, 728.0], [86.8, 731.0], [86.9, 733.0], [87.0, 735.0], [87.1, 738.0], [87.2, 742.0], [87.3, 744.0], [87.4, 747.0], [87.5, 750.0], [87.6, 752.0], [87.7, 756.0], [87.8, 760.0], [87.9, 761.0], [88.0, 765.0], [88.1, 766.0], [88.2, 770.0], [88.3, 772.0], [88.4, 775.0], [88.5, 776.0], [88.6, 778.0], [88.7, 780.0], [88.8, 783.0], [88.9, 786.0], [89.0, 789.0], [89.1, 795.0], [89.2, 796.0], [89.3, 798.0], [89.4, 801.0], [89.5, 806.0], [89.6, 807.0], [89.7, 808.0], [89.8, 810.0], [89.9, 814.0], [90.0, 816.0], [90.1, 819.0], [90.2, 820.0], [90.3, 822.0], [90.4, 823.0], [90.5, 829.0], [90.6, 833.0], [90.7, 835.0], [90.8, 839.0], [90.9, 843.0], [91.0, 849.0], [91.1, 853.0], [91.2, 861.0], [91.3, 868.0], [91.4, 873.0], [91.5, 881.0], [91.6, 891.0], [91.7, 902.0], [91.8, 908.0], [91.9, 925.0], [92.0, 936.0], [92.1, 941.0], [92.2, 946.0], [92.3, 954.0], [92.4, 963.0], [92.5, 966.0], [92.6, 969.0], [92.7, 975.0], [92.8, 980.0], [92.9, 988.0], [93.0, 994.0], [93.1, 1000.0], [93.2, 1010.0], [93.3, 1021.0], [93.4, 1027.0], [93.5, 1038.0], [93.6, 1049.0], [93.7, 1058.0], [93.8, 1071.0], [93.9, 1074.0], [94.0, 1080.0], [94.1, 1092.0], [94.2, 1094.0], [94.3, 1101.0], [94.4, 1107.0], [94.5, 1110.0], [94.6, 1118.0], [94.7, 1122.0], [94.8, 1133.0], [94.9, 1139.0], [95.0, 1145.0], [95.1, 1160.0], [95.2, 1165.0], [95.3, 1179.0], [95.4, 1186.0], [95.5, 1202.0], [95.6, 1214.0], [95.7, 1225.0], [95.8, 1235.0], [95.9, 1242.0], [96.0, 1249.0], [96.1, 1256.0], [96.2, 1268.0], [96.3, 1272.0], [96.4, 1278.0], [96.5, 1294.0], [96.6, 1305.0], [96.7, 1312.0], [96.8, 1324.0], [96.9, 1327.0], [97.0, 1338.0], [97.1, 1347.0], [97.2, 1354.0], [97.3, 1360.0], [97.4, 1378.0], [97.5, 1389.0], [97.6, 1394.0], [97.7, 1419.0], [97.8, 1451.0], [97.9, 1470.0], [98.0, 1497.0], [98.1, 1506.0], [98.2, 1524.0], [98.3, 1558.0], [98.4, 1592.0], [98.5, 1673.0], [98.6, 1736.0], [98.7, 1788.0], [98.8, 1809.0], [98.9, 1878.0], [99.0, 1930.0], [99.1, 1976.0], [99.2, 2049.0], [99.3, 2208.0], [99.4, 2318.0], [99.5, 2344.0], [99.6, 2448.0], [99.7, 2513.0], [99.8, 2713.0], [99.9, 3171.0], [100.0, 5471.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2532.0, "series": [{"data": [[0.0, 2532.0], [600.0, 243.0], [700.0, 180.0], [800.0, 125.0], [900.0, 73.0], [1000.0, 64.0], [1100.0, 63.0], [1200.0, 57.0], [1300.0, 55.0], [1400.0, 21.0], [1500.0, 22.0], [100.0, 460.0], [1600.0, 7.0], [1700.0, 9.0], [1800.0, 10.0], [1900.0, 11.0], [2000.0, 3.0], [2100.0, 3.0], [2200.0, 7.0], [2300.0, 7.0], [2400.0, 8.0], [2500.0, 5.0], [2600.0, 1.0], [2700.0, 1.0], [3000.0, 3.0], [3100.0, 3.0], [200.0, 401.0], [3600.0, 1.0], [3700.0, 1.0], [300.0, 339.0], [4700.0, 1.0], [5400.0, 1.0], [400.0, 271.0], [500.0, 274.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 104.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4006.0, "series": [{"data": [[0.0, 4006.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1152.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 104.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.865648854961837, "minX": 1.60440852E12, "maxY": 10.0, "series": [{"data": [[1.60440852E12, 9.865648854961837], [1.6044087E12, 9.90566037735849], [1.60440864E12, 10.0], [1.60440858E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6044087E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 301.7149961744454, "minX": 1.0, "maxY": 3729.0, "series": [{"data": [[4.0, 1388.25], [8.0, 383.75], [2.0, 3020.0], [1.0, 3729.0], [9.0, 883.3333333333334], [5.0, 549.0], [10.0, 301.7149961744454], [3.0, 1223.5], [6.0, 624.8333333333334], [7.0, 776.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.97472443937667, 305.83884454580004]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4196.933333333333, "minX": 1.60440852E12, "maxY": 1751289.5, "series": [{"data": [[1.60440852E12, 396210.2166666667], [1.6044087E12, 478459.5833333333], [1.60440864E12, 1623244.2166666666], [1.60440858E12, 1751289.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60440852E12, 5607.9], [1.6044087E12, 4196.933333333333], [1.60440864E12, 19347.083333333332], [1.60440858E12, 16339.033333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6044087E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 270.05442176870804, "minX": 1.60440852E12, "maxY": 458.5073375262058, "series": [{"data": [[1.60440852E12, 301.352671755725], [1.6044087E12, 458.5073375262058], [1.60440864E12, 270.05442176870804], [1.60440858E12, 310.5246753246754]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6044087E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 269.70612244897944, "minX": 1.60440852E12, "maxY": 458.06498951781964, "series": [{"data": [[1.60440852E12, 300.9526717557252], [1.6044087E12, 458.06498951781964], [1.60440864E12, 269.70612244897944], [1.60440858E12, 310.05454545454614]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6044087E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009070294784580525, "minX": 1.60440852E12, "maxY": 0.14961832061068697, "series": [{"data": [[1.60440852E12, 0.14961832061068697], [1.6044087E12, 0.016771488469601692], [1.60440864E12, 0.009070294784580525], [1.60440858E12, 0.01038961038961039]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6044087E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.60440852E12, "maxY": 5471.0, "series": [{"data": [[1.60440852E12, 1591.0], [1.6044087E12, 5471.0], [1.60440864E12, 3027.0], [1.60440858E12, 2535.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60440852E12, 5.0], [1.6044087E12, 4.0], [1.60440864E12, 4.0], [1.60440858E12, 4.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60440852E12, 5.494400062561035], [1.6044087E12, 4.0], [1.60440864E12, 4.0], [1.60440858E12, 4.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60440852E12, 5.231999921798706], [1.6044087E12, 4.0], [1.60440864E12, 4.0], [1.60440858E12, 4.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60440852E12, 4.0], [1.6044087E12, 4.0], [1.60440864E12, 4.0], [1.60440858E12, 3.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60440852E12, 163.0], [1.6044087E12, 227.0], [1.60440864E12, 117.0], [1.60440858E12, 112.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6044087E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 8.0, "minX": 1.0, "maxY": 3374.5, "series": [{"data": [[2.0, 3374.5], [4.0, 1799.5], [5.0, 1774.0], [6.0, 962.5], [7.0, 1169.5], [8.0, 1032.0], [9.0, 833.0], [10.0, 711.5], [11.0, 270.0], [12.0, 693.0], [13.0, 668.0], [14.0, 641.5], [15.0, 572.5], [16.0, 568.0], [17.0, 452.0], [18.0, 525.5], [19.0, 480.0], [20.0, 391.0], [21.0, 442.0], [22.0, 359.5], [23.0, 303.5], [24.0, 257.0], [25.0, 333.0], [26.0, 279.5], [27.0, 226.0], [28.0, 163.5], [29.0, 235.0], [30.0, 295.0], [31.0, 211.0], [32.0, 210.5], [33.0, 200.0], [35.0, 21.0], [34.0, 116.5], [36.0, 152.5], [37.0, 210.5], [39.0, 142.0], [38.0, 15.0], [40.0, 225.5], [41.0, 94.0], [42.0, 200.5], [44.0, 14.5], [45.0, 201.0], [46.0, 17.0], [47.0, 172.0], [49.0, 19.0], [51.0, 18.0], [53.0, 15.0], [52.0, 10.5], [56.0, 94.0], [57.0, 73.0], [58.0, 181.5], [61.0, 16.5], [60.0, 15.5], [67.0, 15.0], [65.0, 71.5], [66.0, 25.0], [72.0, 98.0], [80.0, 72.0], [86.0, 8.0], [91.0, 67.0], [98.0, 12.0], [97.0, 78.0], [99.0, 14.0], [109.0, 88.0], [123.0, 12.0], [127.0, 10.0], [132.0, 23.5], [143.0, 15.0], [1.0, 1256.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 143.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8.0, "minX": 1.0, "maxY": 3374.5, "series": [{"data": [[2.0, 3374.5], [4.0, 1798.5], [5.0, 1771.0], [6.0, 962.5], [7.0, 1169.5], [8.0, 1028.0], [9.0, 833.0], [10.0, 711.5], [11.0, 270.0], [12.0, 689.0], [13.0, 666.0], [14.0, 641.0], [15.0, 570.0], [16.0, 567.0], [17.0, 451.0], [18.0, 525.0], [19.0, 480.0], [20.0, 390.5], [21.0, 442.0], [22.0, 359.0], [23.0, 300.0], [24.0, 256.0], [25.0, 333.0], [26.0, 279.5], [27.0, 225.5], [28.0, 163.0], [29.0, 234.5], [30.0, 294.0], [31.0, 211.0], [32.0, 209.5], [33.0, 200.0], [35.0, 21.0], [34.0, 116.5], [36.0, 152.0], [37.0, 210.5], [39.0, 142.0], [38.0, 15.0], [40.0, 225.0], [41.0, 94.0], [42.0, 200.5], [44.0, 14.5], [45.0, 201.0], [46.0, 16.5], [47.0, 172.0], [49.0, 19.0], [51.0, 18.0], [53.0, 15.0], [52.0, 10.5], [56.0, 94.0], [57.0, 72.0], [58.0, 181.0], [61.0, 16.5], [60.0, 15.5], [67.0, 15.0], [65.0, 70.5], [66.0, 25.0], [72.0, 98.0], [80.0, 72.0], [86.0, 8.0], [91.0, 67.0], [98.0, 12.0], [97.0, 77.5], [99.0, 14.0], [109.0, 88.0], [123.0, 12.0], [127.0, 10.0], [132.0, 23.5], [143.0, 15.0], [1.0, 1256.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 143.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.783333333333333, "minX": 1.60440852E12, "maxY": 36.75, "series": [{"data": [[1.60440852E12, 11.083333333333334], [1.6044087E12, 7.783333333333333], [1.60440864E12, 36.75], [1.60440858E12, 32.083333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6044087E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.95, "minX": 1.60440852E12, "maxY": 36.75, "series": [{"data": [[1.60440852E12, 10.916666666666666], [1.6044087E12, 7.95], [1.60440864E12, 36.75], [1.60440858E12, 32.083333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6044087E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.95, "minX": 1.60440852E12, "maxY": 36.75, "series": [{"data": [[1.60440852E12, 10.916666666666666], [1.6044087E12, 7.95], [1.60440864E12, 36.75], [1.60440858E12, 32.083333333333336]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6044087E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.95, "minX": 1.60440852E12, "maxY": 36.75, "series": [{"data": [[1.60440852E12, 10.916666666666666], [1.6044087E12, 7.95], [1.60440864E12, 36.75], [1.60440858E12, 32.083333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6044087E12, "title": "Total Transactions Per Second"}},
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

