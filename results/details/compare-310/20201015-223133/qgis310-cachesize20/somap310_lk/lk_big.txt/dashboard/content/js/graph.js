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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3681.0, "series": [{"data": [[0.0, 29.0], [0.1, 31.0], [0.2, 31.0], [0.3, 32.0], [0.4, 33.0], [0.5, 33.0], [0.6, 33.0], [0.7, 34.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 40.0], [6.1, 40.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 41.0], [8.2, 41.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 42.0], [9.1, 42.0], [9.2, 42.0], [9.3, 42.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 42.0], [9.8, 42.0], [9.9, 42.0], [10.0, 42.0], [10.1, 42.0], [10.2, 42.0], [10.3, 42.0], [10.4, 42.0], [10.5, 42.0], [10.6, 43.0], [10.7, 43.0], [10.8, 43.0], [10.9, 43.0], [11.0, 43.0], [11.1, 43.0], [11.2, 43.0], [11.3, 43.0], [11.4, 43.0], [11.5, 43.0], [11.6, 43.0], [11.7, 43.0], [11.8, 44.0], [11.9, 44.0], [12.0, 44.0], [12.1, 44.0], [12.2, 44.0], [12.3, 44.0], [12.4, 44.0], [12.5, 44.0], [12.6, 44.0], [12.7, 44.0], [12.8, 44.0], [12.9, 44.0], [13.0, 45.0], [13.1, 45.0], [13.2, 45.0], [13.3, 45.0], [13.4, 45.0], [13.5, 45.0], [13.6, 45.0], [13.7, 45.0], [13.8, 45.0], [13.9, 45.0], [14.0, 46.0], [14.1, 46.0], [14.2, 46.0], [14.3, 46.0], [14.4, 46.0], [14.5, 46.0], [14.6, 46.0], [14.7, 47.0], [14.8, 47.0], [14.9, 47.0], [15.0, 47.0], [15.1, 47.0], [15.2, 47.0], [15.3, 47.0], [15.4, 47.0], [15.5, 47.0], [15.6, 47.0], [15.7, 47.0], [15.8, 48.0], [15.9, 48.0], [16.0, 48.0], [16.1, 48.0], [16.2, 48.0], [16.3, 48.0], [16.4, 48.0], [16.5, 49.0], [16.6, 49.0], [16.7, 49.0], [16.8, 49.0], [16.9, 49.0], [17.0, 49.0], [17.1, 50.0], [17.2, 50.0], [17.3, 50.0], [17.4, 50.0], [17.5, 50.0], [17.6, 51.0], [17.7, 51.0], [17.8, 51.0], [17.9, 51.0], [18.0, 51.0], [18.1, 51.0], [18.2, 52.0], [18.3, 52.0], [18.4, 52.0], [18.5, 52.0], [18.6, 53.0], [18.7, 53.0], [18.8, 53.0], [18.9, 54.0], [19.0, 54.0], [19.1, 54.0], [19.2, 55.0], [19.3, 55.0], [19.4, 56.0], [19.5, 56.0], [19.6, 56.0], [19.7, 56.0], [19.8, 57.0], [19.9, 57.0], [20.0, 57.0], [20.1, 58.0], [20.2, 58.0], [20.3, 58.0], [20.4, 58.0], [20.5, 59.0], [20.6, 59.0], [20.7, 59.0], [20.8, 59.0], [20.9, 60.0], [21.0, 60.0], [21.1, 60.0], [21.2, 60.0], [21.3, 61.0], [21.4, 61.0], [21.5, 61.0], [21.6, 61.0], [21.7, 62.0], [21.8, 62.0], [21.9, 62.0], [22.0, 63.0], [22.1, 63.0], [22.2, 63.0], [22.3, 64.0], [22.4, 64.0], [22.5, 64.0], [22.6, 64.0], [22.7, 64.0], [22.8, 65.0], [22.9, 65.0], [23.0, 65.0], [23.1, 65.0], [23.2, 65.0], [23.3, 66.0], [23.4, 66.0], [23.5, 66.0], [23.6, 66.0], [23.7, 66.0], [23.8, 66.0], [23.9, 67.0], [24.0, 67.0], [24.1, 67.0], [24.2, 67.0], [24.3, 68.0], [24.4, 68.0], [24.5, 68.0], [24.6, 69.0], [24.7, 69.0], [24.8, 69.0], [24.9, 69.0], [25.0, 69.0], [25.1, 70.0], [25.2, 70.0], [25.3, 70.0], [25.4, 70.0], [25.5, 70.0], [25.6, 71.0], [25.7, 71.0], [25.8, 71.0], [25.9, 71.0], [26.0, 71.0], [26.1, 72.0], [26.2, 72.0], [26.3, 72.0], [26.4, 72.0], [26.5, 72.0], [26.6, 72.0], [26.7, 73.0], [26.8, 73.0], [26.9, 73.0], [27.0, 73.0], [27.1, 73.0], [27.2, 73.0], [27.3, 73.0], [27.4, 74.0], [27.5, 74.0], [27.6, 74.0], [27.7, 74.0], [27.8, 74.0], [27.9, 74.0], [28.0, 74.0], [28.1, 74.0], [28.2, 74.0], [28.3, 75.0], [28.4, 75.0], [28.5, 75.0], [28.6, 75.0], [28.7, 75.0], [28.8, 75.0], [28.9, 75.0], [29.0, 75.0], [29.1, 75.0], [29.2, 76.0], [29.3, 76.0], [29.4, 76.0], [29.5, 76.0], [29.6, 76.0], [29.7, 76.0], [29.8, 76.0], [29.9, 76.0], [30.0, 76.0], [30.1, 77.0], [30.2, 77.0], [30.3, 77.0], [30.4, 77.0], [30.5, 77.0], [30.6, 77.0], [30.7, 78.0], [30.8, 78.0], [30.9, 78.0], [31.0, 78.0], [31.1, 78.0], [31.2, 78.0], [31.3, 78.0], [31.4, 78.0], [31.5, 79.0], [31.6, 79.0], [31.7, 79.0], [31.8, 79.0], [31.9, 79.0], [32.0, 79.0], [32.1, 79.0], [32.2, 80.0], [32.3, 80.0], [32.4, 80.0], [32.5, 80.0], [32.6, 80.0], [32.7, 80.0], [32.8, 80.0], [32.9, 81.0], [33.0, 81.0], [33.1, 81.0], [33.2, 81.0], [33.3, 81.0], [33.4, 81.0], [33.5, 81.0], [33.6, 81.0], [33.7, 82.0], [33.8, 82.0], [33.9, 82.0], [34.0, 82.0], [34.1, 82.0], [34.2, 82.0], [34.3, 82.0], [34.4, 83.0], [34.5, 83.0], [34.6, 83.0], [34.7, 83.0], [34.8, 84.0], [34.9, 84.0], [35.0, 84.0], [35.1, 84.0], [35.2, 84.0], [35.3, 84.0], [35.4, 84.0], [35.5, 84.0], [35.6, 85.0], [35.7, 85.0], [35.8, 85.0], [35.9, 85.0], [36.0, 85.0], [36.1, 86.0], [36.2, 86.0], [36.3, 86.0], [36.4, 87.0], [36.5, 87.0], [36.6, 87.0], [36.7, 87.0], [36.8, 88.0], [36.9, 88.0], [37.0, 88.0], [37.1, 88.0], [37.2, 88.0], [37.3, 89.0], [37.4, 89.0], [37.5, 89.0], [37.6, 90.0], [37.7, 90.0], [37.8, 90.0], [37.9, 90.0], [38.0, 91.0], [38.1, 91.0], [38.2, 91.0], [38.3, 92.0], [38.4, 92.0], [38.5, 93.0], [38.6, 93.0], [38.7, 94.0], [38.8, 94.0], [38.9, 94.0], [39.0, 95.0], [39.1, 95.0], [39.2, 95.0], [39.3, 96.0], [39.4, 97.0], [39.5, 98.0], [39.6, 99.0], [39.7, 99.0], [39.8, 100.0], [39.9, 100.0], [40.0, 101.0], [40.1, 102.0], [40.2, 102.0], [40.3, 102.0], [40.4, 103.0], [40.5, 103.0], [40.6, 104.0], [40.7, 105.0], [40.8, 106.0], [40.9, 107.0], [41.0, 108.0], [41.1, 110.0], [41.2, 110.0], [41.3, 111.0], [41.4, 112.0], [41.5, 113.0], [41.6, 113.0], [41.7, 114.0], [41.8, 114.0], [41.9, 115.0], [42.0, 115.0], [42.1, 116.0], [42.2, 116.0], [42.3, 117.0], [42.4, 118.0], [42.5, 118.0], [42.6, 119.0], [42.7, 120.0], [42.8, 120.0], [42.9, 121.0], [43.0, 122.0], [43.1, 123.0], [43.2, 123.0], [43.3, 124.0], [43.4, 124.0], [43.5, 125.0], [43.6, 126.0], [43.7, 126.0], [43.8, 127.0], [43.9, 127.0], [44.0, 128.0], [44.1, 129.0], [44.2, 129.0], [44.3, 131.0], [44.4, 132.0], [44.5, 132.0], [44.6, 132.0], [44.7, 133.0], [44.8, 133.0], [44.9, 133.0], [45.0, 134.0], [45.1, 135.0], [45.2, 135.0], [45.3, 136.0], [45.4, 136.0], [45.5, 137.0], [45.6, 138.0], [45.7, 138.0], [45.8, 139.0], [45.9, 140.0], [46.0, 142.0], [46.1, 144.0], [46.2, 144.0], [46.3, 144.0], [46.4, 145.0], [46.5, 146.0], [46.6, 147.0], [46.7, 148.0], [46.8, 148.0], [46.9, 149.0], [47.0, 151.0], [47.1, 152.0], [47.2, 153.0], [47.3, 154.0], [47.4, 154.0], [47.5, 157.0], [47.6, 158.0], [47.7, 160.0], [47.8, 161.0], [47.9, 162.0], [48.0, 163.0], [48.1, 164.0], [48.2, 165.0], [48.3, 166.0], [48.4, 168.0], [48.5, 170.0], [48.6, 172.0], [48.7, 173.0], [48.8, 174.0], [48.9, 174.0], [49.0, 175.0], [49.1, 176.0], [49.2, 177.0], [49.3, 178.0], [49.4, 180.0], [49.5, 181.0], [49.6, 182.0], [49.7, 183.0], [49.8, 184.0], [49.9, 185.0], [50.0, 186.0], [50.1, 186.0], [50.2, 187.0], [50.3, 189.0], [50.4, 190.0], [50.5, 190.0], [50.6, 191.0], [50.7, 191.0], [50.8, 192.0], [50.9, 193.0], [51.0, 193.0], [51.1, 194.0], [51.2, 195.0], [51.3, 195.0], [51.4, 196.0], [51.5, 198.0], [51.6, 199.0], [51.7, 199.0], [51.8, 200.0], [51.9, 200.0], [52.0, 201.0], [52.1, 202.0], [52.2, 203.0], [52.3, 203.0], [52.4, 203.0], [52.5, 204.0], [52.6, 206.0], [52.7, 206.0], [52.8, 207.0], [52.9, 207.0], [53.0, 208.0], [53.1, 209.0], [53.2, 209.0], [53.3, 210.0], [53.4, 211.0], [53.5, 212.0], [53.6, 214.0], [53.7, 214.0], [53.8, 215.0], [53.9, 216.0], [54.0, 216.0], [54.1, 217.0], [54.2, 218.0], [54.3, 219.0], [54.4, 220.0], [54.5, 221.0], [54.6, 221.0], [54.7, 222.0], [54.8, 222.0], [54.9, 223.0], [55.0, 224.0], [55.1, 225.0], [55.2, 226.0], [55.3, 227.0], [55.4, 228.0], [55.5, 228.0], [55.6, 229.0], [55.7, 230.0], [55.8, 231.0], [55.9, 232.0], [56.0, 233.0], [56.1, 234.0], [56.2, 235.0], [56.3, 235.0], [56.4, 236.0], [56.5, 237.0], [56.6, 238.0], [56.7, 239.0], [56.8, 240.0], [56.9, 241.0], [57.0, 242.0], [57.1, 243.0], [57.2, 244.0], [57.3, 245.0], [57.4, 245.0], [57.5, 245.0], [57.6, 247.0], [57.7, 247.0], [57.8, 248.0], [57.9, 249.0], [58.0, 249.0], [58.1, 250.0], [58.2, 250.0], [58.3, 251.0], [58.4, 252.0], [58.5, 253.0], [58.6, 253.0], [58.7, 254.0], [58.8, 254.0], [58.9, 255.0], [59.0, 256.0], [59.1, 258.0], [59.2, 259.0], [59.3, 259.0], [59.4, 261.0], [59.5, 262.0], [59.6, 263.0], [59.7, 264.0], [59.8, 264.0], [59.9, 265.0], [60.0, 267.0], [60.1, 267.0], [60.2, 268.0], [60.3, 269.0], [60.4, 270.0], [60.5, 272.0], [60.6, 272.0], [60.7, 273.0], [60.8, 274.0], [60.9, 275.0], [61.0, 276.0], [61.1, 277.0], [61.2, 277.0], [61.3, 279.0], [61.4, 280.0], [61.5, 281.0], [61.6, 282.0], [61.7, 282.0], [61.8, 283.0], [61.9, 286.0], [62.0, 287.0], [62.1, 288.0], [62.2, 289.0], [62.3, 290.0], [62.4, 291.0], [62.5, 292.0], [62.6, 293.0], [62.7, 294.0], [62.8, 295.0], [62.9, 296.0], [63.0, 298.0], [63.1, 299.0], [63.2, 300.0], [63.3, 303.0], [63.4, 305.0], [63.5, 307.0], [63.6, 308.0], [63.7, 310.0], [63.8, 313.0], [63.9, 315.0], [64.0, 315.0], [64.1, 317.0], [64.2, 319.0], [64.3, 320.0], [64.4, 321.0], [64.5, 323.0], [64.6, 325.0], [64.7, 326.0], [64.8, 327.0], [64.9, 328.0], [65.0, 329.0], [65.1, 330.0], [65.2, 332.0], [65.3, 333.0], [65.4, 334.0], [65.5, 335.0], [65.6, 336.0], [65.7, 338.0], [65.8, 341.0], [65.9, 342.0], [66.0, 343.0], [66.1, 344.0], [66.2, 346.0], [66.3, 347.0], [66.4, 348.0], [66.5, 349.0], [66.6, 350.0], [66.7, 352.0], [66.8, 353.0], [66.9, 354.0], [67.0, 355.0], [67.1, 356.0], [67.2, 357.0], [67.3, 359.0], [67.4, 360.0], [67.5, 363.0], [67.6, 364.0], [67.7, 365.0], [67.8, 367.0], [67.9, 369.0], [68.0, 371.0], [68.1, 372.0], [68.2, 373.0], [68.3, 374.0], [68.4, 375.0], [68.5, 376.0], [68.6, 378.0], [68.7, 379.0], [68.8, 381.0], [68.9, 382.0], [69.0, 384.0], [69.1, 385.0], [69.2, 387.0], [69.3, 389.0], [69.4, 390.0], [69.5, 390.0], [69.6, 391.0], [69.7, 392.0], [69.8, 393.0], [69.9, 394.0], [70.0, 395.0], [70.1, 396.0], [70.2, 396.0], [70.3, 398.0], [70.4, 400.0], [70.5, 401.0], [70.6, 403.0], [70.7, 404.0], [70.8, 406.0], [70.9, 407.0], [71.0, 409.0], [71.1, 411.0], [71.2, 412.0], [71.3, 413.0], [71.4, 415.0], [71.5, 416.0], [71.6, 417.0], [71.7, 418.0], [71.8, 419.0], [71.9, 420.0], [72.0, 421.0], [72.1, 422.0], [72.2, 424.0], [72.3, 425.0], [72.4, 426.0], [72.5, 428.0], [72.6, 429.0], [72.7, 430.0], [72.8, 431.0], [72.9, 431.0], [73.0, 433.0], [73.1, 434.0], [73.2, 436.0], [73.3, 437.0], [73.4, 440.0], [73.5, 442.0], [73.6, 444.0], [73.7, 445.0], [73.8, 446.0], [73.9, 446.0], [74.0, 447.0], [74.1, 448.0], [74.2, 450.0], [74.3, 452.0], [74.4, 453.0], [74.5, 454.0], [74.6, 455.0], [74.7, 457.0], [74.8, 458.0], [74.9, 460.0], [75.0, 462.0], [75.1, 464.0], [75.2, 466.0], [75.3, 467.0], [75.4, 469.0], [75.5, 471.0], [75.6, 473.0], [75.7, 475.0], [75.8, 475.0], [75.9, 476.0], [76.0, 478.0], [76.1, 479.0], [76.2, 480.0], [76.3, 482.0], [76.4, 483.0], [76.5, 485.0], [76.6, 486.0], [76.7, 488.0], [76.8, 490.0], [76.9, 491.0], [77.0, 492.0], [77.1, 494.0], [77.2, 496.0], [77.3, 497.0], [77.4, 498.0], [77.5, 500.0], [77.6, 502.0], [77.7, 503.0], [77.8, 504.0], [77.9, 507.0], [78.0, 508.0], [78.1, 510.0], [78.2, 511.0], [78.3, 513.0], [78.4, 514.0], [78.5, 516.0], [78.6, 517.0], [78.7, 519.0], [78.8, 520.0], [78.9, 522.0], [79.0, 523.0], [79.1, 524.0], [79.2, 525.0], [79.3, 527.0], [79.4, 528.0], [79.5, 531.0], [79.6, 532.0], [79.7, 534.0], [79.8, 535.0], [79.9, 537.0], [80.0, 539.0], [80.1, 541.0], [80.2, 545.0], [80.3, 546.0], [80.4, 548.0], [80.5, 551.0], [80.6, 555.0], [80.7, 556.0], [80.8, 558.0], [80.9, 560.0], [81.0, 562.0], [81.1, 563.0], [81.2, 564.0], [81.3, 566.0], [81.4, 567.0], [81.5, 569.0], [81.6, 570.0], [81.7, 572.0], [81.8, 575.0], [81.9, 576.0], [82.0, 577.0], [82.1, 580.0], [82.2, 582.0], [82.3, 584.0], [82.4, 586.0], [82.5, 588.0], [82.6, 589.0], [82.7, 592.0], [82.8, 593.0], [82.9, 595.0], [83.0, 596.0], [83.1, 598.0], [83.2, 599.0], [83.3, 601.0], [83.4, 603.0], [83.5, 605.0], [83.6, 605.0], [83.7, 607.0], [83.8, 609.0], [83.9, 611.0], [84.0, 614.0], [84.1, 615.0], [84.2, 616.0], [84.3, 619.0], [84.4, 623.0], [84.5, 625.0], [84.6, 628.0], [84.7, 630.0], [84.8, 632.0], [84.9, 635.0], [85.0, 636.0], [85.1, 637.0], [85.2, 639.0], [85.3, 640.0], [85.4, 642.0], [85.5, 645.0], [85.6, 648.0], [85.7, 650.0], [85.8, 652.0], [85.9, 654.0], [86.0, 658.0], [86.1, 663.0], [86.2, 664.0], [86.3, 666.0], [86.4, 668.0], [86.5, 671.0], [86.6, 674.0], [86.7, 676.0], [86.8, 678.0], [86.9, 682.0], [87.0, 683.0], [87.1, 686.0], [87.2, 689.0], [87.3, 693.0], [87.4, 695.0], [87.5, 697.0], [87.6, 699.0], [87.7, 703.0], [87.8, 705.0], [87.9, 706.0], [88.0, 707.0], [88.1, 710.0], [88.2, 713.0], [88.3, 715.0], [88.4, 719.0], [88.5, 721.0], [88.6, 724.0], [88.7, 728.0], [88.8, 730.0], [88.9, 735.0], [89.0, 740.0], [89.1, 743.0], [89.2, 744.0], [89.3, 747.0], [89.4, 749.0], [89.5, 752.0], [89.6, 755.0], [89.7, 757.0], [89.8, 763.0], [89.9, 766.0], [90.0, 771.0], [90.1, 773.0], [90.2, 776.0], [90.3, 778.0], [90.4, 781.0], [90.5, 787.0], [90.6, 789.0], [90.7, 794.0], [90.8, 798.0], [90.9, 801.0], [91.0, 802.0], [91.1, 806.0], [91.2, 809.0], [91.3, 813.0], [91.4, 816.0], [91.5, 817.0], [91.6, 820.0], [91.7, 828.0], [91.8, 831.0], [91.9, 833.0], [92.0, 839.0], [92.1, 844.0], [92.2, 853.0], [92.3, 858.0], [92.4, 864.0], [92.5, 869.0], [92.6, 877.0], [92.7, 880.0], [92.8, 888.0], [92.9, 893.0], [93.0, 899.0], [93.1, 910.0], [93.2, 915.0], [93.3, 925.0], [93.4, 930.0], [93.5, 937.0], [93.6, 940.0], [93.7, 944.0], [93.8, 949.0], [93.9, 952.0], [94.0, 955.0], [94.1, 960.0], [94.2, 968.0], [94.3, 971.0], [94.4, 974.0], [94.5, 981.0], [94.6, 984.0], [94.7, 991.0], [94.8, 994.0], [94.9, 997.0], [95.0, 1001.0], [95.1, 1009.0], [95.2, 1011.0], [95.3, 1021.0], [95.4, 1026.0], [95.5, 1035.0], [95.6, 1037.0], [95.7, 1043.0], [95.8, 1050.0], [95.9, 1054.0], [96.0, 1064.0], [96.1, 1071.0], [96.2, 1086.0], [96.3, 1092.0], [96.4, 1094.0], [96.5, 1110.0], [96.6, 1129.0], [96.7, 1145.0], [96.8, 1159.0], [96.9, 1175.0], [97.0, 1181.0], [97.1, 1193.0], [97.2, 1208.0], [97.3, 1217.0], [97.4, 1239.0], [97.5, 1258.0], [97.6, 1288.0], [97.7, 1303.0], [97.8, 1320.0], [97.9, 1325.0], [98.0, 1338.0], [98.1, 1356.0], [98.2, 1375.0], [98.3, 1399.0], [98.4, 1441.0], [98.5, 1471.0], [98.6, 1496.0], [98.7, 1514.0], [98.8, 1537.0], [98.9, 1562.0], [99.0, 1603.0], [99.1, 1638.0], [99.2, 1661.0], [99.3, 1777.0], [99.4, 1859.0], [99.5, 1927.0], [99.6, 1966.0], [99.7, 2057.0], [99.8, 2253.0], [99.9, 2507.0], [100.0, 3681.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2090.0, "series": [{"data": [[0.0, 2090.0], [600.0, 231.0], [700.0, 171.0], [800.0, 113.0], [900.0, 104.0], [1000.0, 76.0], [1100.0, 37.0], [1200.0, 28.0], [1300.0, 34.0], [1400.0, 16.0], [1500.0, 20.0], [100.0, 633.0], [1600.0, 13.0], [1700.0, 5.0], [1800.0, 6.0], [1900.0, 10.0], [2000.0, 7.0], [2200.0, 3.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 2.0], [2600.0, 1.0], [3100.0, 1.0], [200.0, 599.0], [3500.0, 1.0], [3600.0, 1.0], [300.0, 382.0], [400.0, 373.0], [500.0, 302.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 73.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4080.0, "series": [{"data": [[0.0, 4080.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1109.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 73.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.92808219178082, "minX": 1.60280322E12, "maxY": 10.0, "series": [{"data": [[1.60280334E12, 10.0], [1.60280328E12, 10.0], [1.6028034E12, 9.955968688845404], [1.60280322E12, 9.92808219178082]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028034E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 313.36630455498306, "minX": 1.0, "maxY": 3681.0, "series": [{"data": [[4.0, 1178.5], [8.0, 816.3333333333334], [2.0, 3586.0], [1.0, 3124.0], [9.0, 1353.0], [5.0, 449.3333333333333], [10.0, 313.36630455498306], [6.0, 1036.0], [3.0, 2095.0], [7.0, 3681.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98745724059291, 316.72652983656405]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2621.4166666666665, "minX": 1.60280322E12, "maxY": 1649213.0333333334, "series": [{"data": [[1.60280334E12, 1526411.4333333333], [1.60280328E12, 1649213.0333333334], [1.6028034E12, 961580.0333333333], [1.60280322E12, 113592.23333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280334E12, 20106.95], [1.60280328E12, 13746.983333333334], [1.6028034E12, 9015.6], [1.60280322E12, 2621.4166666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028034E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 251.0532769556027, "minX": 1.60280322E12, "maxY": 382.70645792563585, "series": [{"data": [[1.60280334E12, 251.0532769556027], [1.60280328E12, 377.2615287428931], [1.6028034E12, 382.70645792563585], [1.60280322E12, 289.53082191780817]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028034E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 250.69767441860463, "minX": 1.60280322E12, "maxY": 382.26418786692693, "series": [{"data": [[1.60280334E12, 250.69767441860463], [1.60280328E12, 376.7150979153512], [1.6028034E12, 382.26418786692693], [1.60280322E12, 289.25342465753414]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028034E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006317119393556534, "minX": 1.60280322E12, "maxY": 0.3630136986301374, "series": [{"data": [[1.60280334E12, 0.010147991543340396], [1.60280328E12, 0.006317119393556534], [1.6028034E12, 0.010763209393346372], [1.60280322E12, 0.3630136986301374]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028034E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60280322E12, "maxY": 3681.0, "series": [{"data": [[1.60280334E12, 2507.0], [1.60280328E12, 2690.0], [1.6028034E12, 3681.0], [1.60280322E12, 1241.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280334E12, 33.0], [1.60280328E12, 34.0], [1.6028034E12, 36.206999756097794], [1.60280322E12, 34.91099979043007]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280334E12, 34.0], [1.60280328E12, 34.681600151062014], [1.6028034E12, 37.0], [1.60280322E12, 35.70210008382797]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280334E12, 33.47699971795082], [1.60280328E12, 34.04799981117249], [1.6028034E12, 36.718499878048895], [1.60280322E12, 35.35049989521504]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280334E12, 29.0], [1.60280328E12, 30.0], [1.6028034E12, 34.0], [1.60280322E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280334E12, 132.0], [1.60280328E12, 254.0], [1.6028034E12, 245.0], [1.60280322E12, 115.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028034E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 46.0, "minX": 1.0, "maxY": 3124.0, "series": [{"data": [[5.0, 1454.0], [6.0, 1575.5], [7.0, 894.0], [8.0, 1059.5], [10.0, 722.0], [11.0, 832.0], [12.0, 740.0], [13.0, 583.5], [14.0, 679.0], [15.0, 547.0], [16.0, 498.0], [17.0, 473.0], [18.0, 589.5], [19.0, 440.0], [20.0, 456.0], [21.0, 453.5], [22.0, 430.5], [23.0, 333.5], [24.0, 393.5], [25.0, 391.5], [26.0, 308.0], [27.0, 384.0], [28.0, 96.5], [29.0, 248.0], [30.0, 216.0], [31.0, 241.0], [32.0, 246.5], [33.0, 94.5], [35.0, 222.0], [34.0, 292.5], [37.0, 124.5], [36.0, 148.0], [39.0, 228.0], [38.0, 205.5], [40.0, 77.0], [41.0, 135.0], [42.0, 223.0], [43.0, 124.0], [45.0, 84.0], [44.0, 128.0], [46.0, 88.0], [47.0, 85.0], [49.0, 126.5], [48.0, 83.5], [51.0, 107.0], [50.0, 50.0], [52.0, 91.5], [55.0, 46.0], [54.0, 138.5], [58.0, 77.0], [59.0, 72.0], [62.0, 131.0], [63.0, 91.0], [64.0, 68.0], [70.0, 93.5], [71.0, 133.0], [69.0, 127.0], [68.0, 80.5], [73.0, 113.0], [78.0, 56.5], [81.0, 76.0], [82.0, 115.0], [89.0, 77.0], [1.0, 3124.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 46.0, "minX": 1.0, "maxY": 3124.0, "series": [{"data": [[5.0, 1453.0], [6.0, 1575.0], [7.0, 890.0], [8.0, 1059.5], [10.0, 721.5], [11.0, 830.0], [12.0, 739.0], [13.0, 583.0], [14.0, 677.0], [15.0, 546.0], [16.0, 496.5], [17.0, 473.0], [18.0, 586.5], [19.0, 434.0], [20.0, 455.5], [21.0, 453.0], [22.0, 429.5], [23.0, 333.5], [24.0, 392.5], [25.0, 391.0], [26.0, 307.5], [27.0, 384.0], [28.0, 96.5], [29.0, 248.0], [30.0, 214.0], [31.0, 241.0], [32.0, 246.0], [33.0, 94.5], [35.0, 222.0], [34.0, 292.5], [37.0, 124.5], [36.0, 148.0], [39.0, 227.0], [38.0, 205.5], [40.0, 77.0], [41.0, 135.0], [42.0, 222.0], [43.0, 124.0], [45.0, 84.0], [44.0, 128.0], [46.0, 88.0], [47.0, 85.0], [49.0, 126.5], [48.0, 83.5], [51.0, 107.0], [50.0, 50.0], [52.0, 91.5], [55.0, 46.0], [54.0, 138.0], [58.0, 77.0], [59.0, 72.0], [62.0, 130.0], [63.0, 91.0], [64.0, 68.0], [70.0, 93.5], [71.0, 133.0], [69.0, 127.0], [68.0, 80.5], [73.0, 113.0], [78.0, 56.5], [81.0, 76.0], [82.0, 115.0], [89.0, 77.0], [1.0, 3124.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.033333333333333, "minX": 1.60280322E12, "maxY": 39.416666666666664, "series": [{"data": [[1.60280334E12, 39.416666666666664], [1.60280328E12, 26.383333333333333], [1.6028034E12, 16.866666666666667], [1.60280322E12, 5.033333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028034E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.866666666666666, "minX": 1.60280322E12, "maxY": 39.416666666666664, "series": [{"data": [[1.60280334E12, 39.416666666666664], [1.60280328E12, 26.383333333333333], [1.6028034E12, 17.033333333333335], [1.60280322E12, 4.866666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028034E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.866666666666666, "minX": 1.60280322E12, "maxY": 39.416666666666664, "series": [{"data": [[1.60280334E12, 39.416666666666664], [1.60280328E12, 26.383333333333333], [1.6028034E12, 17.033333333333335], [1.60280322E12, 4.866666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028034E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.866666666666666, "minX": 1.60280322E12, "maxY": 39.416666666666664, "series": [{"data": [[1.60280334E12, 39.416666666666664], [1.60280328E12, 26.383333333333333], [1.6028034E12, 17.033333333333335], [1.60280322E12, 4.866666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028034E12, "title": "Total Transactions Per Second"}},
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

