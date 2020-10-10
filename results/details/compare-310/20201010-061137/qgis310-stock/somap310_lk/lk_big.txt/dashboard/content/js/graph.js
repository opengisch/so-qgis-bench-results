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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 2713.0, "series": [{"data": [[0.0, 27.0], [0.1, 28.0], [0.2, 29.0], [0.3, 29.0], [0.4, 29.0], [0.5, 30.0], [0.6, 30.0], [0.7, 30.0], [0.8, 30.0], [0.9, 30.0], [1.0, 30.0], [1.1, 30.0], [1.2, 31.0], [1.3, 31.0], [1.4, 31.0], [1.5, 31.0], [1.6, 31.0], [1.7, 32.0], [1.8, 32.0], [1.9, 32.0], [2.0, 32.0], [2.1, 32.0], [2.2, 32.0], [2.3, 32.0], [2.4, 33.0], [2.5, 33.0], [2.6, 33.0], [2.7, 33.0], [2.8, 33.0], [2.9, 33.0], [3.0, 33.0], [3.1, 33.0], [3.2, 33.0], [3.3, 33.0], [3.4, 34.0], [3.5, 34.0], [3.6, 34.0], [3.7, 34.0], [3.8, 34.0], [3.9, 34.0], [4.0, 34.0], [4.1, 34.0], [4.2, 34.0], [4.3, 34.0], [4.4, 34.0], [4.5, 35.0], [4.6, 35.0], [4.7, 35.0], [4.8, 35.0], [4.9, 35.0], [5.0, 35.0], [5.1, 35.0], [5.2, 35.0], [5.3, 35.0], [5.4, 35.0], [5.5, 35.0], [5.6, 35.0], [5.7, 35.0], [5.8, 36.0], [5.9, 36.0], [6.0, 36.0], [6.1, 36.0], [6.2, 36.0], [6.3, 36.0], [6.4, 36.0], [6.5, 36.0], [6.6, 36.0], [6.7, 36.0], [6.8, 36.0], [6.9, 36.0], [7.0, 36.0], [7.1, 36.0], [7.2, 36.0], [7.3, 36.0], [7.4, 37.0], [7.5, 37.0], [7.6, 37.0], [7.7, 37.0], [7.8, 37.0], [7.9, 37.0], [8.0, 37.0], [8.1, 37.0], [8.2, 37.0], [8.3, 37.0], [8.4, 37.0], [8.5, 37.0], [8.6, 37.0], [8.7, 37.0], [8.8, 37.0], [8.9, 37.0], [9.0, 37.0], [9.1, 37.0], [9.2, 38.0], [9.3, 38.0], [9.4, 38.0], [9.5, 38.0], [9.6, 38.0], [9.7, 38.0], [9.8, 38.0], [9.9, 38.0], [10.0, 38.0], [10.1, 38.0], [10.2, 38.0], [10.3, 38.0], [10.4, 38.0], [10.5, 38.0], [10.6, 38.0], [10.7, 38.0], [10.8, 39.0], [10.9, 39.0], [11.0, 39.0], [11.1, 39.0], [11.2, 39.0], [11.3, 39.0], [11.4, 39.0], [11.5, 39.0], [11.6, 39.0], [11.7, 39.0], [11.8, 39.0], [11.9, 39.0], [12.0, 39.0], [12.1, 39.0], [12.2, 40.0], [12.3, 40.0], [12.4, 40.0], [12.5, 40.0], [12.6, 40.0], [12.7, 40.0], [12.8, 40.0], [12.9, 40.0], [13.0, 40.0], [13.1, 40.0], [13.2, 40.0], [13.3, 41.0], [13.4, 41.0], [13.5, 41.0], [13.6, 41.0], [13.7, 41.0], [13.8, 41.0], [13.9, 41.0], [14.0, 41.0], [14.1, 41.0], [14.2, 41.0], [14.3, 42.0], [14.4, 42.0], [14.5, 42.0], [14.6, 42.0], [14.7, 42.0], [14.8, 42.0], [14.9, 42.0], [15.0, 42.0], [15.1, 43.0], [15.2, 43.0], [15.3, 43.0], [15.4, 43.0], [15.5, 43.0], [15.6, 43.0], [15.7, 44.0], [15.8, 44.0], [15.9, 44.0], [16.0, 44.0], [16.1, 44.0], [16.2, 45.0], [16.3, 45.0], [16.4, 45.0], [16.5, 45.0], [16.6, 45.0], [16.7, 45.0], [16.8, 46.0], [16.9, 46.0], [17.0, 46.0], [17.1, 46.0], [17.2, 47.0], [17.3, 47.0], [17.4, 47.0], [17.5, 47.0], [17.6, 48.0], [17.7, 48.0], [17.8, 49.0], [17.9, 49.0], [18.0, 49.0], [18.1, 49.0], [18.2, 49.0], [18.3, 50.0], [18.4, 50.0], [18.5, 50.0], [18.6, 51.0], [18.7, 51.0], [18.8, 51.0], [18.9, 52.0], [19.0, 52.0], [19.1, 52.0], [19.2, 53.0], [19.3, 53.0], [19.4, 54.0], [19.5, 54.0], [19.6, 54.0], [19.7, 54.0], [19.8, 55.0], [19.9, 55.0], [20.0, 55.0], [20.1, 56.0], [20.2, 56.0], [20.3, 56.0], [20.4, 56.0], [20.5, 56.0], [20.6, 56.0], [20.7, 57.0], [20.8, 57.0], [20.9, 57.0], [21.0, 58.0], [21.1, 58.0], [21.2, 58.0], [21.3, 58.0], [21.4, 59.0], [21.5, 59.0], [21.6, 59.0], [21.7, 60.0], [21.8, 60.0], [21.9, 60.0], [22.0, 60.0], [22.1, 60.0], [22.2, 61.0], [22.3, 61.0], [22.4, 61.0], [22.5, 61.0], [22.6, 62.0], [22.7, 62.0], [22.8, 62.0], [22.9, 62.0], [23.0, 62.0], [23.1, 62.0], [23.2, 63.0], [23.3, 63.0], [23.4, 63.0], [23.5, 63.0], [23.6, 63.0], [23.7, 63.0], [23.8, 64.0], [23.9, 64.0], [24.0, 64.0], [24.1, 64.0], [24.2, 64.0], [24.3, 65.0], [24.4, 65.0], [24.5, 65.0], [24.6, 65.0], [24.7, 65.0], [24.8, 65.0], [24.9, 65.0], [25.0, 66.0], [25.1, 66.0], [25.2, 66.0], [25.3, 66.0], [25.4, 66.0], [25.5, 66.0], [25.6, 67.0], [25.7, 67.0], [25.8, 67.0], [25.9, 67.0], [26.0, 67.0], [26.1, 67.0], [26.2, 67.0], [26.3, 67.0], [26.4, 68.0], [26.5, 68.0], [26.6, 68.0], [26.7, 68.0], [26.8, 68.0], [26.9, 68.0], [27.0, 69.0], [27.1, 69.0], [27.2, 69.0], [27.3, 69.0], [27.4, 69.0], [27.5, 69.0], [27.6, 69.0], [27.7, 69.0], [27.8, 69.0], [27.9, 70.0], [28.0, 70.0], [28.1, 70.0], [28.2, 70.0], [28.3, 70.0], [28.4, 70.0], [28.5, 70.0], [28.6, 70.0], [28.7, 70.0], [28.8, 70.0], [28.9, 71.0], [29.0, 71.0], [29.1, 71.0], [29.2, 71.0], [29.3, 71.0], [29.4, 71.0], [29.5, 71.0], [29.6, 71.0], [29.7, 71.0], [29.8, 72.0], [29.9, 72.0], [30.0, 72.0], [30.1, 72.0], [30.2, 72.0], [30.3, 72.0], [30.4, 72.0], [30.5, 72.0], [30.6, 72.0], [30.7, 72.0], [30.8, 73.0], [30.9, 73.0], [31.0, 73.0], [31.1, 73.0], [31.2, 73.0], [31.3, 73.0], [31.4, 73.0], [31.5, 74.0], [31.6, 74.0], [31.7, 74.0], [31.8, 74.0], [31.9, 74.0], [32.0, 74.0], [32.1, 74.0], [32.2, 75.0], [32.3, 75.0], [32.4, 75.0], [32.5, 75.0], [32.6, 75.0], [32.7, 75.0], [32.8, 75.0], [32.9, 75.0], [33.0, 76.0], [33.1, 76.0], [33.2, 76.0], [33.3, 76.0], [33.4, 76.0], [33.5, 76.0], [33.6, 76.0], [33.7, 77.0], [33.8, 77.0], [33.9, 77.0], [34.0, 77.0], [34.1, 78.0], [34.2, 78.0], [34.3, 78.0], [34.4, 78.0], [34.5, 78.0], [34.6, 78.0], [34.7, 78.0], [34.8, 79.0], [34.9, 79.0], [35.0, 79.0], [35.1, 79.0], [35.2, 79.0], [35.3, 79.0], [35.4, 79.0], [35.5, 79.0], [35.6, 80.0], [35.7, 80.0], [35.8, 80.0], [35.9, 80.0], [36.0, 80.0], [36.1, 80.0], [36.2, 81.0], [36.3, 81.0], [36.4, 81.0], [36.5, 81.0], [36.6, 81.0], [36.7, 82.0], [36.8, 82.0], [36.9, 82.0], [37.0, 82.0], [37.1, 83.0], [37.2, 83.0], [37.3, 83.0], [37.4, 83.0], [37.5, 83.0], [37.6, 83.0], [37.7, 83.0], [37.8, 84.0], [37.9, 84.0], [38.0, 84.0], [38.1, 85.0], [38.2, 85.0], [38.3, 86.0], [38.4, 86.0], [38.5, 86.0], [38.6, 87.0], [38.7, 87.0], [38.8, 88.0], [38.9, 88.0], [39.0, 89.0], [39.1, 90.0], [39.2, 90.0], [39.3, 90.0], [39.4, 91.0], [39.5, 92.0], [39.6, 92.0], [39.7, 93.0], [39.8, 93.0], [39.9, 94.0], [40.0, 94.0], [40.1, 95.0], [40.2, 95.0], [40.3, 96.0], [40.4, 96.0], [40.5, 97.0], [40.6, 97.0], [40.7, 98.0], [40.8, 98.0], [40.9, 99.0], [41.0, 100.0], [41.1, 101.0], [41.2, 101.0], [41.3, 102.0], [41.4, 102.0], [41.5, 103.0], [41.6, 104.0], [41.7, 104.0], [41.8, 105.0], [41.9, 105.0], [42.0, 106.0], [42.1, 106.0], [42.2, 107.0], [42.3, 107.0], [42.4, 108.0], [42.5, 109.0], [42.6, 109.0], [42.7, 110.0], [42.8, 110.0], [42.9, 111.0], [43.0, 112.0], [43.1, 112.0], [43.2, 113.0], [43.3, 113.0], [43.4, 114.0], [43.5, 115.0], [43.6, 116.0], [43.7, 116.0], [43.8, 117.0], [43.9, 117.0], [44.0, 118.0], [44.1, 119.0], [44.2, 119.0], [44.3, 119.0], [44.4, 120.0], [44.5, 121.0], [44.6, 121.0], [44.7, 122.0], [44.8, 122.0], [44.9, 123.0], [45.0, 124.0], [45.1, 124.0], [45.2, 125.0], [45.3, 126.0], [45.4, 126.0], [45.5, 127.0], [45.6, 128.0], [45.7, 129.0], [45.8, 129.0], [45.9, 130.0], [46.0, 131.0], [46.1, 132.0], [46.2, 133.0], [46.3, 135.0], [46.4, 136.0], [46.5, 136.0], [46.6, 137.0], [46.7, 138.0], [46.8, 139.0], [46.9, 140.0], [47.0, 142.0], [47.1, 144.0], [47.2, 145.0], [47.3, 146.0], [47.4, 146.0], [47.5, 147.0], [47.6, 149.0], [47.7, 150.0], [47.8, 151.0], [47.9, 152.0], [48.0, 153.0], [48.1, 153.0], [48.2, 154.0], [48.3, 156.0], [48.4, 157.0], [48.5, 158.0], [48.6, 160.0], [48.7, 161.0], [48.8, 162.0], [48.9, 164.0], [49.0, 165.0], [49.1, 166.0], [49.2, 167.0], [49.3, 168.0], [49.4, 169.0], [49.5, 170.0], [49.6, 170.0], [49.7, 172.0], [49.8, 173.0], [49.9, 174.0], [50.0, 174.0], [50.1, 176.0], [50.2, 177.0], [50.3, 179.0], [50.4, 179.0], [50.5, 181.0], [50.6, 182.0], [50.7, 182.0], [50.8, 184.0], [50.9, 184.0], [51.0, 185.0], [51.1, 186.0], [51.2, 186.0], [51.3, 187.0], [51.4, 188.0], [51.5, 189.0], [51.6, 190.0], [51.7, 191.0], [51.8, 191.0], [51.9, 192.0], [52.0, 192.0], [52.1, 193.0], [52.2, 193.0], [52.3, 194.0], [52.4, 195.0], [52.5, 195.0], [52.6, 196.0], [52.7, 197.0], [52.8, 198.0], [52.9, 198.0], [53.0, 199.0], [53.1, 200.0], [53.2, 201.0], [53.3, 202.0], [53.4, 203.0], [53.5, 204.0], [53.6, 204.0], [53.7, 205.0], [53.8, 206.0], [53.9, 207.0], [54.0, 208.0], [54.1, 208.0], [54.2, 209.0], [54.3, 210.0], [54.4, 210.0], [54.5, 211.0], [54.6, 212.0], [54.7, 212.0], [54.8, 214.0], [54.9, 214.0], [55.0, 215.0], [55.1, 217.0], [55.2, 218.0], [55.3, 219.0], [55.4, 220.0], [55.5, 220.0], [55.6, 222.0], [55.7, 224.0], [55.8, 225.0], [55.9, 226.0], [56.0, 227.0], [56.1, 228.0], [56.2, 229.0], [56.3, 231.0], [56.4, 232.0], [56.5, 233.0], [56.6, 234.0], [56.7, 235.0], [56.8, 236.0], [56.9, 237.0], [57.0, 239.0], [57.1, 240.0], [57.2, 240.0], [57.3, 242.0], [57.4, 243.0], [57.5, 244.0], [57.6, 244.0], [57.7, 246.0], [57.8, 247.0], [57.9, 247.0], [58.0, 248.0], [58.1, 249.0], [58.2, 250.0], [58.3, 250.0], [58.4, 251.0], [58.5, 252.0], [58.6, 252.0], [58.7, 253.0], [58.8, 254.0], [58.9, 256.0], [59.0, 257.0], [59.1, 258.0], [59.2, 258.0], [59.3, 259.0], [59.4, 260.0], [59.5, 260.0], [59.6, 261.0], [59.7, 262.0], [59.8, 262.0], [59.9, 263.0], [60.0, 263.0], [60.1, 265.0], [60.2, 266.0], [60.3, 266.0], [60.4, 267.0], [60.5, 268.0], [60.6, 269.0], [60.7, 270.0], [60.8, 271.0], [60.9, 272.0], [61.0, 273.0], [61.1, 274.0], [61.2, 274.0], [61.3, 275.0], [61.4, 277.0], [61.5, 277.0], [61.6, 277.0], [61.7, 278.0], [61.8, 279.0], [61.9, 280.0], [62.0, 280.0], [62.1, 281.0], [62.2, 282.0], [62.3, 283.0], [62.4, 284.0], [62.5, 284.0], [62.6, 286.0], [62.7, 288.0], [62.8, 289.0], [62.9, 290.0], [63.0, 291.0], [63.1, 292.0], [63.2, 293.0], [63.3, 294.0], [63.4, 295.0], [63.5, 296.0], [63.6, 297.0], [63.7, 299.0], [63.8, 300.0], [63.9, 302.0], [64.0, 303.0], [64.1, 303.0], [64.2, 305.0], [64.3, 307.0], [64.4, 308.0], [64.5, 309.0], [64.6, 310.0], [64.7, 311.0], [64.8, 314.0], [64.9, 314.0], [65.0, 315.0], [65.1, 317.0], [65.2, 317.0], [65.3, 319.0], [65.4, 320.0], [65.5, 321.0], [65.6, 324.0], [65.7, 326.0], [65.8, 327.0], [65.9, 329.0], [66.0, 330.0], [66.1, 331.0], [66.2, 333.0], [66.3, 335.0], [66.4, 336.0], [66.5, 337.0], [66.6, 339.0], [66.7, 340.0], [66.8, 341.0], [66.9, 341.0], [67.0, 343.0], [67.1, 344.0], [67.2, 346.0], [67.3, 348.0], [67.4, 349.0], [67.5, 350.0], [67.6, 352.0], [67.7, 354.0], [67.8, 355.0], [67.9, 356.0], [68.0, 357.0], [68.1, 359.0], [68.2, 361.0], [68.3, 361.0], [68.4, 362.0], [68.5, 364.0], [68.6, 365.0], [68.7, 365.0], [68.8, 366.0], [68.9, 367.0], [69.0, 367.0], [69.1, 369.0], [69.2, 371.0], [69.3, 373.0], [69.4, 374.0], [69.5, 376.0], [69.6, 377.0], [69.7, 378.0], [69.8, 379.0], [69.9, 382.0], [70.0, 382.0], [70.1, 384.0], [70.2, 385.0], [70.3, 387.0], [70.4, 388.0], [70.5, 390.0], [70.6, 391.0], [70.7, 392.0], [70.8, 393.0], [70.9, 395.0], [71.0, 396.0], [71.1, 397.0], [71.2, 399.0], [71.3, 399.0], [71.4, 401.0], [71.5, 402.0], [71.6, 403.0], [71.7, 404.0], [71.8, 405.0], [71.9, 406.0], [72.0, 408.0], [72.1, 408.0], [72.2, 410.0], [72.3, 411.0], [72.4, 413.0], [72.5, 414.0], [72.6, 415.0], [72.7, 417.0], [72.8, 418.0], [72.9, 420.0], [73.0, 421.0], [73.1, 422.0], [73.2, 423.0], [73.3, 424.0], [73.4, 426.0], [73.5, 427.0], [73.6, 428.0], [73.7, 429.0], [73.8, 430.0], [73.9, 432.0], [74.0, 434.0], [74.1, 435.0], [74.2, 437.0], [74.3, 438.0], [74.4, 439.0], [74.5, 441.0], [74.6, 443.0], [74.7, 445.0], [74.8, 447.0], [74.9, 448.0], [75.0, 449.0], [75.1, 451.0], [75.2, 452.0], [75.3, 453.0], [75.4, 455.0], [75.5, 457.0], [75.6, 459.0], [75.7, 461.0], [75.8, 462.0], [75.9, 465.0], [76.0, 466.0], [76.1, 467.0], [76.2, 468.0], [76.3, 469.0], [76.4, 470.0], [76.5, 472.0], [76.6, 473.0], [76.7, 475.0], [76.8, 477.0], [76.9, 478.0], [77.0, 479.0], [77.1, 481.0], [77.2, 483.0], [77.3, 489.0], [77.4, 490.0], [77.5, 493.0], [77.6, 493.0], [77.7, 494.0], [77.8, 495.0], [77.9, 497.0], [78.0, 499.0], [78.1, 501.0], [78.2, 502.0], [78.3, 503.0], [78.4, 505.0], [78.5, 507.0], [78.6, 509.0], [78.7, 511.0], [78.8, 514.0], [78.9, 515.0], [79.0, 517.0], [79.1, 519.0], [79.2, 519.0], [79.3, 520.0], [79.4, 522.0], [79.5, 523.0], [79.6, 525.0], [79.7, 527.0], [79.8, 530.0], [79.9, 532.0], [80.0, 533.0], [80.1, 535.0], [80.2, 537.0], [80.3, 538.0], [80.4, 538.0], [80.5, 540.0], [80.6, 541.0], [80.7, 542.0], [80.8, 543.0], [80.9, 544.0], [81.0, 545.0], [81.1, 548.0], [81.2, 549.0], [81.3, 550.0], [81.4, 551.0], [81.5, 553.0], [81.6, 556.0], [81.7, 558.0], [81.8, 560.0], [81.9, 564.0], [82.0, 566.0], [82.1, 568.0], [82.2, 570.0], [82.3, 573.0], [82.4, 575.0], [82.5, 577.0], [82.6, 578.0], [82.7, 580.0], [82.8, 583.0], [82.9, 585.0], [83.0, 586.0], [83.1, 589.0], [83.2, 590.0], [83.3, 591.0], [83.4, 594.0], [83.5, 597.0], [83.6, 598.0], [83.7, 601.0], [83.8, 602.0], [83.9, 604.0], [84.0, 606.0], [84.1, 609.0], [84.2, 611.0], [84.3, 612.0], [84.4, 614.0], [84.5, 617.0], [84.6, 619.0], [84.7, 621.0], [84.8, 623.0], [84.9, 626.0], [85.0, 628.0], [85.1, 631.0], [85.2, 632.0], [85.3, 633.0], [85.4, 635.0], [85.5, 638.0], [85.6, 641.0], [85.7, 644.0], [85.8, 648.0], [85.9, 648.0], [86.0, 651.0], [86.1, 652.0], [86.2, 655.0], [86.3, 658.0], [86.4, 659.0], [86.5, 660.0], [86.6, 662.0], [86.7, 665.0], [86.8, 667.0], [86.9, 669.0], [87.0, 672.0], [87.1, 674.0], [87.2, 676.0], [87.3, 678.0], [87.4, 679.0], [87.5, 680.0], [87.6, 683.0], [87.7, 686.0], [87.8, 688.0], [87.9, 692.0], [88.0, 694.0], [88.1, 695.0], [88.2, 697.0], [88.3, 700.0], [88.4, 703.0], [88.5, 705.0], [88.6, 710.0], [88.7, 712.0], [88.8, 714.0], [88.9, 716.0], [89.0, 718.0], [89.1, 721.0], [89.2, 723.0], [89.3, 727.0], [89.4, 730.0], [89.5, 734.0], [89.6, 738.0], [89.7, 741.0], [89.8, 744.0], [89.9, 747.0], [90.0, 750.0], [90.1, 755.0], [90.2, 758.0], [90.3, 761.0], [90.4, 765.0], [90.5, 767.0], [90.6, 775.0], [90.7, 782.0], [90.8, 785.0], [90.9, 787.0], [91.0, 789.0], [91.1, 792.0], [91.2, 796.0], [91.3, 798.0], [91.4, 802.0], [91.5, 805.0], [91.6, 810.0], [91.7, 814.0], [91.8, 819.0], [91.9, 821.0], [92.0, 825.0], [92.1, 831.0], [92.2, 836.0], [92.3, 845.0], [92.4, 847.0], [92.5, 854.0], [92.6, 859.0], [92.7, 865.0], [92.8, 867.0], [92.9, 869.0], [93.0, 873.0], [93.1, 877.0], [93.2, 882.0], [93.3, 889.0], [93.4, 893.0], [93.5, 899.0], [93.6, 907.0], [93.7, 914.0], [93.8, 918.0], [93.9, 921.0], [94.0, 927.0], [94.1, 931.0], [94.2, 936.0], [94.3, 939.0], [94.4, 942.0], [94.5, 952.0], [94.6, 956.0], [94.7, 959.0], [94.8, 966.0], [94.9, 971.0], [95.0, 977.0], [95.1, 982.0], [95.2, 987.0], [95.3, 995.0], [95.4, 999.0], [95.5, 1002.0], [95.6, 1012.0], [95.7, 1021.0], [95.8, 1035.0], [95.9, 1038.0], [96.0, 1049.0], [96.1, 1069.0], [96.2, 1077.0], [96.3, 1083.0], [96.4, 1096.0], [96.5, 1121.0], [96.6, 1127.0], [96.7, 1142.0], [96.8, 1153.0], [96.9, 1164.0], [97.0, 1170.0], [97.1, 1176.0], [97.2, 1187.0], [97.3, 1207.0], [97.4, 1218.0], [97.5, 1237.0], [97.6, 1251.0], [97.7, 1259.0], [97.8, 1275.0], [97.9, 1298.0], [98.0, 1334.0], [98.1, 1356.0], [98.2, 1391.0], [98.3, 1402.0], [98.4, 1421.0], [98.5, 1446.0], [98.6, 1486.0], [98.7, 1515.0], [98.8, 1530.0], [98.9, 1566.0], [99.0, 1608.0], [99.1, 1649.0], [99.2, 1734.0], [99.3, 1814.0], [99.4, 1845.0], [99.5, 1920.0], [99.6, 2032.0], [99.7, 2064.0], [99.8, 2154.0], [99.9, 2312.0], [100.0, 2713.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2158.0, "series": [{"data": [[0.0, 2158.0], [600.0, 244.0], [700.0, 162.0], [800.0, 115.0], [900.0, 101.0], [1000.0, 53.0], [1100.0, 44.0], [1200.0, 34.0], [1300.0, 19.0], [1400.0, 20.0], [1500.0, 18.0], [100.0, 641.0], [1600.0, 10.0], [1700.0, 5.0], [1800.0, 11.0], [1900.0, 2.0], [2000.0, 12.0], [2100.0, 4.0], [2200.0, 3.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 3.0], [2700.0, 1.0], [200.0, 562.0], [300.0, 399.0], [400.0, 354.0], [500.0, 295.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 71.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4114.0, "series": [{"data": [[0.0, 4114.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1087.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 71.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.962901896125308, "minX": 1.60231032E12, "maxY": 10.0, "series": [{"data": [[1.60231044E12, 9.962901896125308], [1.60231038E12, 10.0], [1.60231032E12, 9.98656078191813]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231044E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 305.0422454804936, "minX": 1.0, "maxY": 2575.0, "series": [{"data": [[4.0, 1154.5], [8.0, 462.3333333333333], [2.0, 2000.0], [1.0, 2312.0], [9.0, 860.75], [5.0, 1320.5], [10.0, 305.0422454804936], [6.0, 1063.5], [3.0, 2575.0], [7.0, 1175.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987291350531095, 307.8463581183609]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 10738.083333333334, "minX": 1.60231032E12, "maxY": 1703380.9333333333, "series": [{"data": [[1.60231044E12, 1333658.6166666667], [1.60231038E12, 1254780.75], [1.60231032E12, 1703380.9333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231044E12, 10738.083333333334], [1.60231038E12, 20637.533333333333], [1.60231032E12, 14203.933333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231044E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 246.49256812551593, "minX": 1.60231032E12, "maxY": 360.24319868095625, "series": [{"data": [[1.60231044E12, 360.24319868095625], [1.60231038E12, 246.49256812551593], [1.60231032E12, 359.79596823457473]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231044E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 246.28654004954578, "minX": 1.60231032E12, "maxY": 359.8153338829343, "series": [{"data": [[1.60231044E12, 359.8153338829343], [1.60231038E12, 246.28654004954578], [1.60231032E12, 359.34941967012753]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231044E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008670520231213884, "minX": 1.60231032E12, "maxY": 0.06719609040928509, "series": [{"data": [[1.60231044E12, 0.009068425391591101], [1.60231038E12, 0.008670520231213884], [1.60231032E12, 0.06719609040928509]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231044E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.60231032E12, "maxY": 2713.0, "series": [{"data": [[1.60231044E12, 2575.0], [1.60231038E12, 2121.0], [1.60231032E12, 2713.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231044E12, 30.0], [1.60231038E12, 30.0], [1.60231032E12, 30.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231044E12, 30.01860011577606], [1.60231038E12, 30.0], [1.60231032E12, 30.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231044E12, 30.0], [1.60231038E12, 30.0], [1.60231032E12, 30.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231044E12, 27.0], [1.60231038E12, 28.0], [1.60231032E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231044E12, 220.0], [1.60231038E12, 124.0], [1.60231032E12, 256.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231044E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 40.5, "minX": 2.0, "maxY": 2338.0, "series": [{"data": [[2.0, 2156.0], [3.0, 115.0], [4.0, 2338.0], [6.0, 1420.0], [7.0, 1119.0], [8.0, 896.0], [9.0, 690.0], [10.0, 934.0], [11.0, 880.0], [12.0, 801.0], [13.0, 719.0], [14.0, 634.5], [15.0, 445.5], [16.0, 472.0], [17.0, 538.0], [18.0, 507.5], [19.0, 466.0], [20.0, 472.0], [21.0, 450.0], [22.0, 136.5], [23.0, 409.5], [24.0, 335.0], [25.0, 88.0], [26.0, 354.0], [27.0, 90.0], [28.0, 286.5], [29.0, 266.0], [30.0, 310.0], [31.0, 84.0], [32.0, 265.0], [33.0, 234.0], [35.0, 133.0], [34.0, 326.0], [37.0, 71.0], [36.0, 241.5], [39.0, 70.0], [40.0, 76.5], [41.0, 219.0], [43.0, 137.0], [42.0, 126.0], [45.0, 77.0], [44.0, 72.5], [46.0, 189.5], [49.0, 68.0], [48.0, 101.5], [51.0, 72.5], [50.0, 184.0], [53.0, 80.0], [56.0, 70.5], [57.0, 118.5], [58.0, 89.0], [59.0, 108.0], [60.0, 72.5], [61.0, 81.0], [62.0, 116.0], [63.0, 121.0], [67.0, 71.5], [64.0, 73.5], [66.0, 167.0], [69.0, 153.0], [70.0, 40.5], [72.0, 67.0], [76.0, 72.0], [79.0, 127.0], [81.0, 75.0], [85.0, 92.0], [91.0, 45.0], [109.0, 73.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 109.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 40.5, "minX": 2.0, "maxY": 2338.0, "series": [{"data": [[2.0, 2155.5], [3.0, 115.0], [4.0, 2338.0], [6.0, 1419.5], [7.0, 1119.0], [8.0, 893.0], [9.0, 690.0], [10.0, 933.0], [11.0, 879.0], [12.0, 800.5], [13.0, 719.0], [14.0, 634.5], [15.0, 443.5], [16.0, 471.5], [17.0, 537.0], [18.0, 507.5], [19.0, 465.0], [20.0, 471.0], [21.0, 447.0], [22.0, 136.5], [23.0, 408.5], [24.0, 334.0], [25.0, 88.0], [26.0, 351.0], [27.0, 90.0], [28.0, 285.5], [29.0, 266.0], [30.0, 310.0], [31.0, 84.0], [32.0, 265.0], [33.0, 233.5], [35.0, 133.0], [34.0, 325.5], [37.0, 71.0], [36.0, 241.0], [39.0, 70.0], [40.0, 76.5], [41.0, 219.0], [43.0, 137.0], [42.0, 126.0], [45.0, 77.0], [44.0, 72.5], [46.0, 189.5], [49.0, 68.0], [48.0, 101.5], [51.0, 72.5], [50.0, 184.0], [53.0, 80.0], [56.0, 70.5], [57.0, 118.0], [58.0, 88.5], [59.0, 108.0], [60.0, 72.5], [61.0, 81.0], [62.0, 116.0], [63.0, 120.0], [67.0, 71.5], [64.0, 73.5], [66.0, 167.0], [69.0, 153.0], [70.0, 40.5], [72.0, 67.0], [76.0, 72.0], [79.0, 127.0], [81.0, 75.0], [85.0, 92.0], [91.0, 45.0], [109.0, 73.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 109.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 20.05, "minX": 1.60231032E12, "maxY": 40.36666666666667, "series": [{"data": [[1.60231044E12, 20.05], [1.60231038E12, 40.36666666666667], [1.60231032E12, 27.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231044E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 20.216666666666665, "minX": 1.60231032E12, "maxY": 40.36666666666667, "series": [{"data": [[1.60231044E12, 20.216666666666665], [1.60231038E12, 40.36666666666667], [1.60231032E12, 27.283333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231044E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 20.216666666666665, "minX": 1.60231032E12, "maxY": 40.36666666666667, "series": [{"data": [[1.60231044E12, 20.216666666666665], [1.60231038E12, 40.36666666666667], [1.60231032E12, 27.283333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231044E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 20.216666666666665, "minX": 1.60231032E12, "maxY": 40.36666666666667, "series": [{"data": [[1.60231044E12, 20.216666666666665], [1.60231038E12, 40.36666666666667], [1.60231032E12, 27.283333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231044E12, "title": "Total Transactions Per Second"}},
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

