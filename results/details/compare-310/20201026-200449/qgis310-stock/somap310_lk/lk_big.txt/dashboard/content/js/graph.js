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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3243.0, "series": [{"data": [[0.0, 29.0], [0.1, 31.0], [0.2, 32.0], [0.3, 32.0], [0.4, 33.0], [0.5, 33.0], [0.6, 34.0], [0.7, 34.0], [0.8, 34.0], [0.9, 35.0], [1.0, 35.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 36.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 39.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 40.0], [8.2, 40.0], [8.3, 40.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 41.0], [9.6, 41.0], [9.7, 41.0], [9.8, 41.0], [9.9, 42.0], [10.0, 42.0], [10.1, 42.0], [10.2, 42.0], [10.3, 42.0], [10.4, 42.0], [10.5, 42.0], [10.6, 42.0], [10.7, 42.0], [10.8, 42.0], [10.9, 42.0], [11.0, 42.0], [11.1, 42.0], [11.2, 42.0], [11.3, 42.0], [11.4, 42.0], [11.5, 43.0], [11.6, 43.0], [11.7, 43.0], [11.8, 43.0], [11.9, 43.0], [12.0, 43.0], [12.1, 43.0], [12.2, 43.0], [12.3, 43.0], [12.4, 43.0], [12.5, 43.0], [12.6, 43.0], [12.7, 43.0], [12.8, 43.0], [12.9, 43.0], [13.0, 44.0], [13.1, 44.0], [13.2, 44.0], [13.3, 44.0], [13.4, 44.0], [13.5, 44.0], [13.6, 44.0], [13.7, 44.0], [13.8, 44.0], [13.9, 44.0], [14.0, 44.0], [14.1, 44.0], [14.2, 44.0], [14.3, 44.0], [14.4, 44.0], [14.5, 44.0], [14.6, 45.0], [14.7, 45.0], [14.8, 45.0], [14.9, 45.0], [15.0, 45.0], [15.1, 45.0], [15.2, 45.0], [15.3, 45.0], [15.4, 45.0], [15.5, 45.0], [15.6, 45.0], [15.7, 45.0], [15.8, 45.0], [15.9, 45.0], [16.0, 46.0], [16.1, 46.0], [16.2, 46.0], [16.3, 46.0], [16.4, 46.0], [16.5, 46.0], [16.6, 46.0], [16.7, 46.0], [16.8, 46.0], [16.9, 46.0], [17.0, 46.0], [17.1, 46.0], [17.2, 46.0], [17.3, 46.0], [17.4, 47.0], [17.5, 47.0], [17.6, 47.0], [17.7, 47.0], [17.8, 47.0], [17.9, 47.0], [18.0, 47.0], [18.1, 47.0], [18.2, 48.0], [18.3, 48.0], [18.4, 48.0], [18.5, 48.0], [18.6, 48.0], [18.7, 48.0], [18.8, 48.0], [18.9, 48.0], [19.0, 48.0], [19.1, 49.0], [19.2, 49.0], [19.3, 49.0], [19.4, 49.0], [19.5, 49.0], [19.6, 49.0], [19.7, 49.0], [19.8, 49.0], [19.9, 50.0], [20.0, 50.0], [20.1, 50.0], [20.2, 50.0], [20.3, 50.0], [20.4, 50.0], [20.5, 50.0], [20.6, 51.0], [20.7, 51.0], [20.8, 51.0], [20.9, 51.0], [21.0, 51.0], [21.1, 51.0], [21.2, 52.0], [21.3, 52.0], [21.4, 52.0], [21.5, 52.0], [21.6, 52.0], [21.7, 52.0], [21.8, 52.0], [21.9, 53.0], [22.0, 53.0], [22.1, 53.0], [22.2, 54.0], [22.3, 54.0], [22.4, 54.0], [22.5, 54.0], [22.6, 54.0], [22.7, 54.0], [22.8, 55.0], [22.9, 55.0], [23.0, 55.0], [23.1, 55.0], [23.2, 55.0], [23.3, 56.0], [23.4, 56.0], [23.5, 56.0], [23.6, 56.0], [23.7, 57.0], [23.8, 57.0], [23.9, 57.0], [24.0, 57.0], [24.1, 58.0], [24.2, 58.0], [24.3, 58.0], [24.4, 59.0], [24.5, 59.0], [24.6, 59.0], [24.7, 60.0], [24.8, 60.0], [24.9, 60.0], [25.0, 60.0], [25.1, 61.0], [25.2, 61.0], [25.3, 61.0], [25.4, 61.0], [25.5, 62.0], [25.6, 62.0], [25.7, 62.0], [25.8, 62.0], [25.9, 62.0], [26.0, 63.0], [26.1, 63.0], [26.2, 63.0], [26.3, 64.0], [26.4, 64.0], [26.5, 64.0], [26.6, 64.0], [26.7, 64.0], [26.8, 65.0], [26.9, 65.0], [27.0, 65.0], [27.1, 65.0], [27.2, 65.0], [27.3, 66.0], [27.4, 66.0], [27.5, 66.0], [27.6, 66.0], [27.7, 67.0], [27.8, 67.0], [27.9, 67.0], [28.0, 68.0], [28.1, 68.0], [28.2, 68.0], [28.3, 68.0], [28.4, 68.0], [28.5, 69.0], [28.6, 69.0], [28.7, 69.0], [28.8, 69.0], [28.9, 69.0], [29.0, 70.0], [29.1, 70.0], [29.2, 70.0], [29.3, 70.0], [29.4, 70.0], [29.5, 71.0], [29.6, 71.0], [29.7, 71.0], [29.8, 71.0], [29.9, 71.0], [30.0, 71.0], [30.1, 71.0], [30.2, 72.0], [30.3, 72.0], [30.4, 72.0], [30.5, 72.0], [30.6, 73.0], [30.7, 73.0], [30.8, 73.0], [30.9, 73.0], [31.0, 73.0], [31.1, 74.0], [31.2, 74.0], [31.3, 74.0], [31.4, 74.0], [31.5, 74.0], [31.6, 75.0], [31.7, 75.0], [31.8, 75.0], [31.9, 75.0], [32.0, 76.0], [32.1, 76.0], [32.2, 76.0], [32.3, 76.0], [32.4, 76.0], [32.5, 76.0], [32.6, 77.0], [32.7, 77.0], [32.8, 77.0], [32.9, 78.0], [33.0, 78.0], [33.1, 78.0], [33.2, 78.0], [33.3, 78.0], [33.4, 79.0], [33.5, 79.0], [33.6, 79.0], [33.7, 79.0], [33.8, 79.0], [33.9, 79.0], [34.0, 80.0], [34.1, 80.0], [34.2, 80.0], [34.3, 80.0], [34.4, 80.0], [34.5, 81.0], [34.6, 81.0], [34.7, 81.0], [34.8, 81.0], [34.9, 81.0], [35.0, 82.0], [35.1, 82.0], [35.2, 82.0], [35.3, 82.0], [35.4, 82.0], [35.5, 83.0], [35.6, 83.0], [35.7, 83.0], [35.8, 83.0], [35.9, 83.0], [36.0, 84.0], [36.1, 84.0], [36.2, 84.0], [36.3, 85.0], [36.4, 85.0], [36.5, 85.0], [36.6, 85.0], [36.7, 86.0], [36.8, 86.0], [36.9, 86.0], [37.0, 86.0], [37.1, 87.0], [37.2, 87.0], [37.3, 88.0], [37.4, 88.0], [37.5, 88.0], [37.6, 88.0], [37.7, 89.0], [37.8, 89.0], [37.9, 90.0], [38.0, 90.0], [38.1, 90.0], [38.2, 91.0], [38.3, 91.0], [38.4, 91.0], [38.5, 92.0], [38.6, 92.0], [38.7, 92.0], [38.8, 93.0], [38.9, 93.0], [39.0, 94.0], [39.1, 95.0], [39.2, 95.0], [39.3, 96.0], [39.4, 96.0], [39.5, 97.0], [39.6, 97.0], [39.7, 98.0], [39.8, 99.0], [39.9, 100.0], [40.0, 101.0], [40.1, 101.0], [40.2, 101.0], [40.3, 102.0], [40.4, 102.0], [40.5, 103.0], [40.6, 104.0], [40.7, 104.0], [40.8, 105.0], [40.9, 106.0], [41.0, 106.0], [41.1, 107.0], [41.2, 108.0], [41.3, 109.0], [41.4, 110.0], [41.5, 110.0], [41.6, 112.0], [41.7, 112.0], [41.8, 113.0], [41.9, 113.0], [42.0, 114.0], [42.1, 114.0], [42.2, 114.0], [42.3, 115.0], [42.4, 115.0], [42.5, 116.0], [42.6, 116.0], [42.7, 116.0], [42.8, 117.0], [42.9, 117.0], [43.0, 118.0], [43.1, 119.0], [43.2, 119.0], [43.3, 119.0], [43.4, 120.0], [43.5, 120.0], [43.6, 121.0], [43.7, 122.0], [43.8, 122.0], [43.9, 123.0], [44.0, 124.0], [44.1, 124.0], [44.2, 124.0], [44.3, 125.0], [44.4, 125.0], [44.5, 126.0], [44.6, 127.0], [44.7, 128.0], [44.8, 128.0], [44.9, 129.0], [45.0, 130.0], [45.1, 131.0], [45.2, 131.0], [45.3, 132.0], [45.4, 132.0], [45.5, 133.0], [45.6, 133.0], [45.7, 134.0], [45.8, 134.0], [45.9, 135.0], [46.0, 136.0], [46.1, 136.0], [46.2, 137.0], [46.3, 138.0], [46.4, 139.0], [46.5, 140.0], [46.6, 140.0], [46.7, 141.0], [46.8, 142.0], [46.9, 143.0], [47.0, 144.0], [47.1, 144.0], [47.2, 145.0], [47.3, 146.0], [47.4, 147.0], [47.5, 148.0], [47.6, 148.0], [47.7, 149.0], [47.8, 151.0], [47.9, 152.0], [48.0, 153.0], [48.1, 154.0], [48.2, 155.0], [48.3, 156.0], [48.4, 157.0], [48.5, 159.0], [48.6, 160.0], [48.7, 161.0], [48.8, 162.0], [48.9, 163.0], [49.0, 164.0], [49.1, 165.0], [49.2, 167.0], [49.3, 167.0], [49.4, 168.0], [49.5, 170.0], [49.6, 171.0], [49.7, 172.0], [49.8, 173.0], [49.9, 174.0], [50.0, 175.0], [50.1, 176.0], [50.2, 176.0], [50.3, 177.0], [50.4, 178.0], [50.5, 179.0], [50.6, 180.0], [50.7, 180.0], [50.8, 181.0], [50.9, 182.0], [51.0, 183.0], [51.1, 183.0], [51.2, 184.0], [51.3, 185.0], [51.4, 186.0], [51.5, 187.0], [51.6, 187.0], [51.7, 188.0], [51.8, 189.0], [51.9, 189.0], [52.0, 190.0], [52.1, 191.0], [52.2, 191.0], [52.3, 192.0], [52.4, 193.0], [52.5, 194.0], [52.6, 195.0], [52.7, 195.0], [52.8, 196.0], [52.9, 197.0], [53.0, 198.0], [53.1, 199.0], [53.2, 199.0], [53.3, 200.0], [53.4, 201.0], [53.5, 201.0], [53.6, 202.0], [53.7, 202.0], [53.8, 203.0], [53.9, 204.0], [54.0, 204.0], [54.1, 205.0], [54.2, 206.0], [54.3, 206.0], [54.4, 207.0], [54.5, 207.0], [54.6, 207.0], [54.7, 208.0], [54.8, 209.0], [54.9, 210.0], [55.0, 210.0], [55.1, 211.0], [55.2, 212.0], [55.3, 213.0], [55.4, 214.0], [55.5, 216.0], [55.6, 217.0], [55.7, 217.0], [55.8, 218.0], [55.9, 218.0], [56.0, 219.0], [56.1, 220.0], [56.2, 220.0], [56.3, 221.0], [56.4, 221.0], [56.5, 222.0], [56.6, 223.0], [56.7, 224.0], [56.8, 224.0], [56.9, 225.0], [57.0, 225.0], [57.1, 226.0], [57.2, 227.0], [57.3, 228.0], [57.4, 229.0], [57.5, 230.0], [57.6, 231.0], [57.7, 233.0], [57.8, 234.0], [57.9, 235.0], [58.0, 236.0], [58.1, 237.0], [58.2, 237.0], [58.3, 239.0], [58.4, 240.0], [58.5, 241.0], [58.6, 242.0], [58.7, 243.0], [58.8, 244.0], [58.9, 245.0], [59.0, 245.0], [59.1, 246.0], [59.2, 247.0], [59.3, 248.0], [59.4, 249.0], [59.5, 250.0], [59.6, 251.0], [59.7, 252.0], [59.8, 253.0], [59.9, 254.0], [60.0, 256.0], [60.1, 257.0], [60.2, 258.0], [60.3, 259.0], [60.4, 259.0], [60.5, 260.0], [60.6, 261.0], [60.7, 262.0], [60.8, 263.0], [60.9, 264.0], [61.0, 266.0], [61.1, 267.0], [61.2, 268.0], [61.3, 270.0], [61.4, 271.0], [61.5, 273.0], [61.6, 275.0], [61.7, 276.0], [61.8, 277.0], [61.9, 277.0], [62.0, 278.0], [62.1, 280.0], [62.2, 281.0], [62.3, 282.0], [62.4, 283.0], [62.5, 284.0], [62.6, 285.0], [62.7, 287.0], [62.8, 288.0], [62.9, 289.0], [63.0, 291.0], [63.1, 292.0], [63.2, 293.0], [63.3, 294.0], [63.4, 296.0], [63.5, 297.0], [63.6, 299.0], [63.7, 300.0], [63.8, 302.0], [63.9, 303.0], [64.0, 304.0], [64.1, 304.0], [64.2, 306.0], [64.3, 307.0], [64.4, 308.0], [64.5, 309.0], [64.6, 310.0], [64.7, 313.0], [64.8, 314.0], [64.9, 314.0], [65.0, 316.0], [65.1, 317.0], [65.2, 318.0], [65.3, 320.0], [65.4, 321.0], [65.5, 324.0], [65.6, 325.0], [65.7, 328.0], [65.8, 329.0], [65.9, 330.0], [66.0, 331.0], [66.1, 332.0], [66.2, 332.0], [66.3, 333.0], [66.4, 333.0], [66.5, 337.0], [66.6, 339.0], [66.7, 341.0], [66.8, 343.0], [66.9, 345.0], [67.0, 346.0], [67.1, 347.0], [67.2, 348.0], [67.3, 349.0], [67.4, 349.0], [67.5, 350.0], [67.6, 352.0], [67.7, 352.0], [67.8, 354.0], [67.9, 356.0], [68.0, 357.0], [68.1, 358.0], [68.2, 361.0], [68.3, 363.0], [68.4, 365.0], [68.5, 367.0], [68.6, 368.0], [68.7, 368.0], [68.8, 370.0], [68.9, 371.0], [69.0, 372.0], [69.1, 373.0], [69.2, 374.0], [69.3, 376.0], [69.4, 377.0], [69.5, 378.0], [69.6, 379.0], [69.7, 381.0], [69.8, 382.0], [69.9, 383.0], [70.0, 385.0], [70.1, 387.0], [70.2, 388.0], [70.3, 389.0], [70.4, 390.0], [70.5, 392.0], [70.6, 394.0], [70.7, 395.0], [70.8, 396.0], [70.9, 397.0], [71.0, 399.0], [71.1, 401.0], [71.2, 403.0], [71.3, 404.0], [71.4, 406.0], [71.5, 407.0], [71.6, 409.0], [71.7, 410.0], [71.8, 411.0], [71.9, 412.0], [72.0, 413.0], [72.1, 414.0], [72.2, 416.0], [72.3, 418.0], [72.4, 419.0], [72.5, 420.0], [72.6, 422.0], [72.7, 423.0], [72.8, 426.0], [72.9, 428.0], [73.0, 429.0], [73.1, 430.0], [73.2, 431.0], [73.3, 433.0], [73.4, 436.0], [73.5, 438.0], [73.6, 440.0], [73.7, 441.0], [73.8, 443.0], [73.9, 446.0], [74.0, 448.0], [74.1, 450.0], [74.2, 451.0], [74.3, 454.0], [74.4, 455.0], [74.5, 457.0], [74.6, 458.0], [74.7, 460.0], [74.8, 461.0], [74.9, 464.0], [75.0, 466.0], [75.1, 468.0], [75.2, 469.0], [75.3, 470.0], [75.4, 473.0], [75.5, 473.0], [75.6, 476.0], [75.7, 477.0], [75.8, 480.0], [75.9, 481.0], [76.0, 484.0], [76.1, 485.0], [76.2, 488.0], [76.3, 489.0], [76.4, 491.0], [76.5, 493.0], [76.6, 494.0], [76.7, 496.0], [76.8, 497.0], [76.9, 498.0], [77.0, 500.0], [77.1, 504.0], [77.2, 505.0], [77.3, 506.0], [77.4, 507.0], [77.5, 509.0], [77.6, 510.0], [77.7, 512.0], [77.8, 513.0], [77.9, 516.0], [78.0, 519.0], [78.1, 521.0], [78.2, 523.0], [78.3, 526.0], [78.4, 528.0], [78.5, 531.0], [78.6, 533.0], [78.7, 535.0], [78.8, 536.0], [78.9, 537.0], [79.0, 538.0], [79.1, 540.0], [79.2, 542.0], [79.3, 545.0], [79.4, 546.0], [79.5, 547.0], [79.6, 549.0], [79.7, 551.0], [79.8, 552.0], [79.9, 556.0], [80.0, 556.0], [80.1, 558.0], [80.2, 561.0], [80.3, 564.0], [80.4, 565.0], [80.5, 566.0], [80.6, 568.0], [80.7, 569.0], [80.8, 570.0], [80.9, 572.0], [81.0, 574.0], [81.1, 576.0], [81.2, 578.0], [81.3, 581.0], [81.4, 584.0], [81.5, 586.0], [81.6, 589.0], [81.7, 592.0], [81.8, 594.0], [81.9, 598.0], [82.0, 599.0], [82.1, 602.0], [82.2, 602.0], [82.3, 604.0], [82.4, 606.0], [82.5, 608.0], [82.6, 609.0], [82.7, 610.0], [82.8, 612.0], [82.9, 614.0], [83.0, 615.0], [83.1, 618.0], [83.2, 619.0], [83.3, 622.0], [83.4, 624.0], [83.5, 627.0], [83.6, 628.0], [83.7, 630.0], [83.8, 633.0], [83.9, 635.0], [84.0, 639.0], [84.1, 640.0], [84.2, 641.0], [84.3, 642.0], [84.4, 644.0], [84.5, 647.0], [84.6, 649.0], [84.7, 653.0], [84.8, 657.0], [84.9, 659.0], [85.0, 662.0], [85.1, 663.0], [85.2, 665.0], [85.3, 666.0], [85.4, 668.0], [85.5, 670.0], [85.6, 672.0], [85.7, 674.0], [85.8, 676.0], [85.9, 678.0], [86.0, 679.0], [86.1, 681.0], [86.2, 682.0], [86.3, 686.0], [86.4, 688.0], [86.5, 689.0], [86.6, 691.0], [86.7, 694.0], [86.8, 696.0], [86.9, 699.0], [87.0, 702.0], [87.1, 703.0], [87.2, 706.0], [87.3, 707.0], [87.4, 709.0], [87.5, 712.0], [87.6, 714.0], [87.7, 718.0], [87.8, 721.0], [87.9, 724.0], [88.0, 725.0], [88.1, 727.0], [88.2, 731.0], [88.3, 732.0], [88.4, 734.0], [88.5, 737.0], [88.6, 744.0], [88.7, 748.0], [88.8, 749.0], [88.9, 755.0], [89.0, 760.0], [89.1, 762.0], [89.2, 764.0], [89.3, 767.0], [89.4, 769.0], [89.5, 771.0], [89.6, 773.0], [89.7, 776.0], [89.8, 780.0], [89.9, 784.0], [90.0, 788.0], [90.1, 793.0], [90.2, 796.0], [90.3, 800.0], [90.4, 810.0], [90.5, 813.0], [90.6, 816.0], [90.7, 820.0], [90.8, 825.0], [90.9, 836.0], [91.0, 841.0], [91.1, 844.0], [91.2, 848.0], [91.3, 854.0], [91.4, 857.0], [91.5, 867.0], [91.6, 869.0], [91.7, 872.0], [91.8, 875.0], [91.9, 882.0], [92.0, 884.0], [92.1, 887.0], [92.2, 892.0], [92.3, 895.0], [92.4, 900.0], [92.5, 902.0], [92.6, 907.0], [92.7, 911.0], [92.8, 915.0], [92.9, 918.0], [93.0, 922.0], [93.1, 938.0], [93.2, 942.0], [93.3, 951.0], [93.4, 955.0], [93.5, 964.0], [93.6, 973.0], [93.7, 979.0], [93.8, 984.0], [93.9, 994.0], [94.0, 997.0], [94.1, 1000.0], [94.2, 1007.0], [94.3, 1018.0], [94.4, 1026.0], [94.5, 1030.0], [94.6, 1041.0], [94.7, 1047.0], [94.8, 1051.0], [94.9, 1060.0], [95.0, 1066.0], [95.1, 1070.0], [95.2, 1078.0], [95.3, 1083.0], [95.4, 1090.0], [95.5, 1101.0], [95.6, 1109.0], [95.7, 1118.0], [95.8, 1124.0], [95.9, 1137.0], [96.0, 1150.0], [96.1, 1160.0], [96.2, 1170.0], [96.3, 1181.0], [96.4, 1203.0], [96.5, 1218.0], [96.6, 1222.0], [96.7, 1229.0], [96.8, 1245.0], [96.9, 1272.0], [97.0, 1287.0], [97.1, 1303.0], [97.2, 1326.0], [97.3, 1333.0], [97.4, 1352.0], [97.5, 1363.0], [97.6, 1375.0], [97.7, 1388.0], [97.8, 1416.0], [97.9, 1423.0], [98.0, 1429.0], [98.1, 1449.0], [98.2, 1496.0], [98.3, 1512.0], [98.4, 1521.0], [98.5, 1578.0], [98.6, 1587.0], [98.7, 1604.0], [98.8, 1640.0], [98.9, 1706.0], [99.0, 1794.0], [99.1, 1847.0], [99.2, 1918.0], [99.3, 1946.0], [99.4, 2046.0], [99.5, 2125.0], [99.6, 2160.0], [99.7, 2234.0], [99.8, 2450.0], [99.9, 3019.0], [100.0, 3243.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2096.0, "series": [{"data": [[0.0, 2096.0], [600.0, 256.0], [700.0, 178.0], [800.0, 110.0], [900.0, 89.0], [1000.0, 75.0], [1100.0, 46.0], [1200.0, 38.0], [1300.0, 34.0], [1400.0, 27.0], [1500.0, 23.0], [100.0, 708.0], [1600.0, 11.0], [1700.0, 6.0], [1800.0, 9.0], [1900.0, 10.0], [2000.0, 5.0], [2100.0, 9.0], [2200.0, 6.0], [2300.0, 1.0], [2400.0, 3.0], [2500.0, 1.0], [2600.0, 1.0], [3000.0, 3.0], [3100.0, 2.0], [200.0, 546.0], [3200.0, 2.0], [300.0, 387.0], [400.0, 314.0], [500.0, 266.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 92.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4053.0, "series": [{"data": [[0.0, 4053.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1117.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 92.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.63157894736842, "minX": 1.6037427E12, "maxY": 10.0, "series": [{"data": [[1.6037427E12, 9.981191222570528], [1.60374282E12, 10.0], [1.60374276E12, 10.0], [1.60374288E12, 7.63157894736842]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374288E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 318.6783603431857, "minX": 1.0, "maxY": 3237.0, "series": [{"data": [[4.0, 1579.5], [8.0, 591.0], [2.0, 3237.0], [1.0, 3080.0], [9.0, 1012.75], [5.0, 1133.6666666666667], [10.0, 318.6783603431857], [6.0, 1264.0], [3.0, 2234.0], [7.0, 1220.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98688711516533, 322.2191182060049]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 162.28333333333333, "minX": 1.6037427E12, "maxY": 1660012.9833333334, "series": [{"data": [[1.6037427E12, 1193084.0833333333], [1.60374282E12, 1660012.9833333334], [1.60374276E12, 1370082.25], [1.60374288E12, 27811.533333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6037427E12, 11077.133333333333], [1.60374282E12, 15757.033333333333], [1.60374276E12, 18494.5], [1.60374288E12, 162.28333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374288E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 277.37459733087906, "minX": 1.6037427E12, "maxY": 2235.105263157894, "series": [{"data": [[1.6037427E12, 362.8949843260193], [1.60374282E12, 327.3472686733556], [1.60374276E12, 277.37459733087906], [1.60374288E12, 2235.105263157894]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374288E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 277.0358950759319, "minX": 1.6037427E12, "maxY": 2234.4736842105262, "series": [{"data": [[1.6037427E12, 362.3667711598748], [1.60374282E12, 326.90468227424753], [1.60374276E12, 277.0358950759319], [1.60374288E12, 2234.4736842105262]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374288E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6037427E12, "maxY": 0.08855799373040749, "series": [{"data": [[1.6037427E12, 0.08855799373040749], [1.60374282E12, 0.010590858416945409], [1.60374276E12, 0.009664058904740001], [1.60374288E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374288E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.6037427E12, "maxY": 3243.0, "series": [{"data": [[1.6037427E12, 2134.0], [1.60374282E12, 2582.0], [1.60374276E12, 2361.0], [1.60374288E12, 3243.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6037427E12, 36.0], [1.60374282E12, 34.0], [1.60374276E12, 34.0], [1.60374288E12, 1041.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6037427E12, 36.0], [1.60374282E12, 34.0], [1.60374276E12, 34.0], [1.60374288E12, 1041.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6037427E12, 36.0], [1.60374282E12, 34.0], [1.60374276E12, 34.0], [1.60374288E12, 1041.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6037427E12, 33.0], [1.60374282E12, 30.0], [1.60374276E12, 29.0], [1.60374288E12, 1041.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6037427E12, 246.0], [1.60374282E12, 187.0], [1.60374276E12, 134.0], [1.60374288E12, 2257.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374288E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 48.0, "minX": 1.0, "maxY": 3080.0, "series": [{"data": [[3.0, 1388.0], [4.0, 1280.5], [5.0, 2194.0], [6.0, 1051.5], [7.0, 1996.0], [8.0, 698.5], [9.0, 709.0], [10.0, 866.0], [11.0, 714.0], [12.0, 676.0], [13.0, 762.5], [14.0, 604.0], [15.0, 626.0], [16.0, 513.5], [17.0, 507.5], [18.0, 550.0], [19.0, 413.0], [20.0, 482.0], [21.0, 407.0], [22.0, 392.0], [23.0, 376.0], [24.0, 337.5], [25.0, 90.0], [26.0, 241.0], [27.0, 331.5], [28.0, 281.5], [29.0, 79.0], [30.0, 210.0], [31.0, 215.0], [33.0, 78.0], [32.0, 288.0], [34.0, 186.5], [37.0, 122.0], [36.0, 142.0], [38.0, 183.0], [39.0, 86.0], [40.0, 180.5], [41.0, 196.5], [42.0, 81.0], [43.0, 48.0], [44.0, 84.5], [45.0, 139.0], [46.0, 125.0], [47.0, 107.0], [48.0, 48.0], [51.0, 95.0], [50.0, 112.5], [53.0, 131.0], [57.0, 77.0], [56.0, 92.0], [58.0, 89.5], [59.0, 50.0], [60.0, 117.0], [61.0, 81.0], [63.0, 126.0], [64.0, 118.5], [65.0, 122.0], [66.0, 56.0], [71.0, 110.0], [69.0, 120.0], [74.0, 130.0], [76.0, 104.0], [80.0, 48.0], [82.0, 68.0], [91.0, 57.0], [96.0, 67.5], [1.0, 3080.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 47.0, "minX": 1.0, "maxY": 3080.0, "series": [{"data": [[3.0, 1387.0], [4.0, 1279.5], [5.0, 2193.0], [6.0, 1049.5], [7.0, 1993.0], [8.0, 698.0], [9.0, 708.0], [10.0, 863.0], [11.0, 713.0], [12.0, 675.5], [13.0, 761.0], [14.0, 604.0], [15.0, 624.5], [16.0, 512.5], [17.0, 505.5], [18.0, 549.5], [19.0, 412.5], [20.0, 481.5], [21.0, 407.0], [22.0, 391.5], [23.0, 376.0], [24.0, 335.0], [25.0, 89.0], [26.0, 240.0], [27.0, 331.5], [28.0, 281.5], [29.0, 79.0], [30.0, 209.0], [31.0, 215.0], [33.0, 78.0], [32.0, 287.5], [34.0, 186.0], [37.0, 122.0], [36.0, 142.0], [38.0, 183.0], [39.0, 86.0], [40.0, 180.0], [41.0, 196.5], [42.0, 80.5], [43.0, 47.0], [44.0, 84.5], [45.0, 138.0], [46.0, 125.0], [47.0, 107.0], [48.0, 48.0], [51.0, 95.0], [50.0, 112.5], [53.0, 130.0], [57.0, 77.0], [56.0, 92.0], [58.0, 89.5], [59.0, 50.0], [60.0, 117.0], [61.0, 81.0], [63.0, 126.0], [64.0, 118.5], [65.0, 122.0], [66.0, 56.0], [71.0, 110.0], [69.0, 120.0], [74.0, 130.0], [76.0, 104.0], [80.0, 48.0], [82.0, 68.0], [91.0, 57.0], [96.0, 67.5], [1.0, 3080.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.6037427E12, "maxY": 36.21666666666667, "series": [{"data": [[1.6037427E12, 21.433333333333334], [1.60374282E12, 29.9], [1.60374276E12, 36.21666666666667], [1.60374288E12, 0.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374288E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.6037427E12, "maxY": 36.21666666666667, "series": [{"data": [[1.6037427E12, 21.266666666666666], [1.60374282E12, 29.9], [1.60374276E12, 36.21666666666667], [1.60374288E12, 0.31666666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374288E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.6037427E12, "maxY": 36.21666666666667, "series": [{"data": [[1.6037427E12, 21.266666666666666], [1.60374282E12, 29.9], [1.60374276E12, 36.21666666666667], [1.60374288E12, 0.31666666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374288E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.6037427E12, "maxY": 36.21666666666667, "series": [{"data": [[1.6037427E12, 21.266666666666666], [1.60374282E12, 29.9], [1.60374276E12, 36.21666666666667], [1.60374288E12, 0.31666666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374288E12, "title": "Total Transactions Per Second"}},
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

