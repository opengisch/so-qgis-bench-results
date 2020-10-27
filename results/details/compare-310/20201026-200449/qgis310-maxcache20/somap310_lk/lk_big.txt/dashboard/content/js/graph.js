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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 3231.0, "series": [{"data": [[0.0, 31.0], [0.1, 32.0], [0.2, 33.0], [0.3, 33.0], [0.4, 34.0], [0.5, 35.0], [0.6, 35.0], [0.7, 36.0], [0.8, 36.0], [0.9, 36.0], [1.0, 37.0], [1.1, 37.0], [1.2, 37.0], [1.3, 37.0], [1.4, 37.0], [1.5, 38.0], [1.6, 38.0], [1.7, 38.0], [1.8, 38.0], [1.9, 38.0], [2.0, 38.0], [2.1, 38.0], [2.2, 38.0], [2.3, 38.0], [2.4, 39.0], [2.5, 39.0], [2.6, 39.0], [2.7, 39.0], [2.8, 39.0], [2.9, 39.0], [3.0, 39.0], [3.1, 39.0], [3.2, 39.0], [3.3, 40.0], [3.4, 40.0], [3.5, 40.0], [3.6, 40.0], [3.7, 40.0], [3.8, 40.0], [3.9, 40.0], [4.0, 40.0], [4.1, 40.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 40.0], [4.6, 41.0], [4.7, 41.0], [4.8, 41.0], [4.9, 41.0], [5.0, 41.0], [5.1, 41.0], [5.2, 41.0], [5.3, 41.0], [5.4, 41.0], [5.5, 41.0], [5.6, 41.0], [5.7, 41.0], [5.8, 42.0], [5.9, 42.0], [6.0, 42.0], [6.1, 42.0], [6.2, 42.0], [6.3, 42.0], [6.4, 42.0], [6.5, 42.0], [6.6, 42.0], [6.7, 42.0], [6.8, 42.0], [6.9, 43.0], [7.0, 43.0], [7.1, 43.0], [7.2, 43.0], [7.3, 43.0], [7.4, 43.0], [7.5, 43.0], [7.6, 43.0], [7.7, 43.0], [7.8, 43.0], [7.9, 43.0], [8.0, 43.0], [8.1, 44.0], [8.2, 44.0], [8.3, 44.0], [8.4, 44.0], [8.5, 44.0], [8.6, 44.0], [8.7, 44.0], [8.8, 44.0], [8.9, 44.0], [9.0, 44.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 45.0], [9.6, 45.0], [9.7, 45.0], [9.8, 45.0], [9.9, 45.0], [10.0, 45.0], [10.1, 45.0], [10.2, 45.0], [10.3, 45.0], [10.4, 45.0], [10.5, 45.0], [10.6, 45.0], [10.7, 45.0], [10.8, 46.0], [10.9, 46.0], [11.0, 46.0], [11.1, 46.0], [11.2, 46.0], [11.3, 46.0], [11.4, 46.0], [11.5, 46.0], [11.6, 46.0], [11.7, 46.0], [11.8, 47.0], [11.9, 47.0], [12.0, 47.0], [12.1, 47.0], [12.2, 47.0], [12.3, 47.0], [12.4, 47.0], [12.5, 47.0], [12.6, 48.0], [12.7, 48.0], [12.8, 48.0], [12.9, 48.0], [13.0, 48.0], [13.1, 48.0], [13.2, 48.0], [13.3, 48.0], [13.4, 49.0], [13.5, 49.0], [13.6, 49.0], [13.7, 49.0], [13.8, 49.0], [13.9, 49.0], [14.0, 50.0], [14.1, 50.0], [14.2, 50.0], [14.3, 50.0], [14.4, 50.0], [14.5, 50.0], [14.6, 51.0], [14.7, 51.0], [14.8, 51.0], [14.9, 51.0], [15.0, 51.0], [15.1, 51.0], [15.2, 52.0], [15.3, 52.0], [15.4, 52.0], [15.5, 52.0], [15.6, 52.0], [15.7, 53.0], [15.8, 53.0], [15.9, 53.0], [16.0, 53.0], [16.1, 53.0], [16.2, 53.0], [16.3, 54.0], [16.4, 54.0], [16.5, 54.0], [16.6, 54.0], [16.7, 54.0], [16.8, 55.0], [16.9, 55.0], [17.0, 55.0], [17.1, 56.0], [17.2, 56.0], [17.3, 57.0], [17.4, 57.0], [17.5, 57.0], [17.6, 58.0], [17.7, 58.0], [17.8, 58.0], [17.9, 59.0], [18.0, 59.0], [18.1, 60.0], [18.2, 60.0], [18.3, 61.0], [18.4, 61.0], [18.5, 61.0], [18.6, 61.0], [18.7, 62.0], [18.8, 62.0], [18.9, 62.0], [19.0, 63.0], [19.1, 63.0], [19.2, 63.0], [19.3, 63.0], [19.4, 64.0], [19.5, 64.0], [19.6, 64.0], [19.7, 64.0], [19.8, 64.0], [19.9, 65.0], [20.0, 65.0], [20.1, 65.0], [20.2, 65.0], [20.3, 66.0], [20.4, 66.0], [20.5, 66.0], [20.6, 67.0], [20.7, 67.0], [20.8, 67.0], [20.9, 67.0], [21.0, 68.0], [21.1, 68.0], [21.2, 68.0], [21.3, 68.0], [21.4, 68.0], [21.5, 69.0], [21.6, 69.0], [21.7, 69.0], [21.8, 70.0], [21.9, 70.0], [22.0, 70.0], [22.1, 70.0], [22.2, 70.0], [22.3, 71.0], [22.4, 71.0], [22.5, 71.0], [22.6, 71.0], [22.7, 71.0], [22.8, 72.0], [22.9, 72.0], [23.0, 72.0], [23.1, 72.0], [23.2, 72.0], [23.3, 72.0], [23.4, 73.0], [23.5, 73.0], [23.6, 73.0], [23.7, 73.0], [23.8, 73.0], [23.9, 73.0], [24.0, 74.0], [24.1, 74.0], [24.2, 74.0], [24.3, 74.0], [24.4, 74.0], [24.5, 74.0], [24.6, 75.0], [24.7, 75.0], [24.8, 75.0], [24.9, 75.0], [25.0, 75.0], [25.1, 75.0], [25.2, 75.0], [25.3, 75.0], [25.4, 75.0], [25.5, 76.0], [25.6, 76.0], [25.7, 76.0], [25.8, 76.0], [25.9, 76.0], [26.0, 76.0], [26.1, 76.0], [26.2, 77.0], [26.3, 77.0], [26.4, 77.0], [26.5, 77.0], [26.6, 77.0], [26.7, 77.0], [26.8, 77.0], [26.9, 77.0], [27.0, 77.0], [27.1, 78.0], [27.2, 78.0], [27.3, 78.0], [27.4, 78.0], [27.5, 78.0], [27.6, 78.0], [27.7, 78.0], [27.8, 78.0], [27.9, 78.0], [28.0, 78.0], [28.1, 79.0], [28.2, 79.0], [28.3, 79.0], [28.4, 79.0], [28.5, 79.0], [28.6, 79.0], [28.7, 80.0], [28.8, 80.0], [28.9, 80.0], [29.0, 80.0], [29.1, 80.0], [29.2, 80.0], [29.3, 80.0], [29.4, 80.0], [29.5, 80.0], [29.6, 80.0], [29.7, 81.0], [29.8, 81.0], [29.9, 81.0], [30.0, 81.0], [30.1, 81.0], [30.2, 81.0], [30.3, 81.0], [30.4, 81.0], [30.5, 81.0], [30.6, 81.0], [30.7, 82.0], [30.8, 82.0], [30.9, 82.0], [31.0, 82.0], [31.1, 82.0], [31.2, 82.0], [31.3, 83.0], [31.4, 83.0], [31.5, 83.0], [31.6, 83.0], [31.7, 83.0], [31.8, 83.0], [31.9, 83.0], [32.0, 83.0], [32.1, 83.0], [32.2, 83.0], [32.3, 83.0], [32.4, 84.0], [32.5, 84.0], [32.6, 84.0], [32.7, 84.0], [32.8, 84.0], [32.9, 84.0], [33.0, 85.0], [33.1, 85.0], [33.2, 85.0], [33.3, 85.0], [33.4, 85.0], [33.5, 85.0], [33.6, 85.0], [33.7, 86.0], [33.8, 86.0], [33.9, 86.0], [34.0, 86.0], [34.1, 87.0], [34.2, 87.0], [34.3, 87.0], [34.4, 87.0], [34.5, 87.0], [34.6, 87.0], [34.7, 87.0], [34.8, 87.0], [34.9, 87.0], [35.0, 88.0], [35.1, 88.0], [35.2, 88.0], [35.3, 88.0], [35.4, 88.0], [35.5, 89.0], [35.6, 89.0], [35.7, 89.0], [35.8, 89.0], [35.9, 89.0], [36.0, 89.0], [36.1, 90.0], [36.2, 90.0], [36.3, 90.0], [36.4, 90.0], [36.5, 90.0], [36.6, 91.0], [36.7, 91.0], [36.8, 91.0], [36.9, 91.0], [37.0, 91.0], [37.1, 92.0], [37.2, 92.0], [37.3, 92.0], [37.4, 92.0], [37.5, 92.0], [37.6, 93.0], [37.7, 93.0], [37.8, 93.0], [37.9, 93.0], [38.0, 94.0], [38.1, 94.0], [38.2, 94.0], [38.3, 95.0], [38.4, 95.0], [38.5, 95.0], [38.6, 96.0], [38.7, 96.0], [38.8, 96.0], [38.9, 97.0], [39.0, 97.0], [39.1, 97.0], [39.2, 98.0], [39.3, 99.0], [39.4, 99.0], [39.5, 100.0], [39.6, 100.0], [39.7, 101.0], [39.8, 101.0], [39.9, 102.0], [40.0, 102.0], [40.1, 103.0], [40.2, 103.0], [40.3, 104.0], [40.4, 104.0], [40.5, 105.0], [40.6, 105.0], [40.7, 106.0], [40.8, 106.0], [40.9, 107.0], [41.0, 108.0], [41.1, 108.0], [41.2, 108.0], [41.3, 109.0], [41.4, 110.0], [41.5, 111.0], [41.6, 112.0], [41.7, 113.0], [41.8, 114.0], [41.9, 115.0], [42.0, 116.0], [42.1, 116.0], [42.2, 117.0], [42.3, 117.0], [42.4, 118.0], [42.5, 118.0], [42.6, 119.0], [42.7, 120.0], [42.8, 121.0], [42.9, 122.0], [43.0, 122.0], [43.1, 123.0], [43.2, 123.0], [43.3, 124.0], [43.4, 124.0], [43.5, 124.0], [43.6, 125.0], [43.7, 125.0], [43.8, 126.0], [43.9, 127.0], [44.0, 127.0], [44.1, 128.0], [44.2, 129.0], [44.3, 129.0], [44.4, 130.0], [44.5, 130.0], [44.6, 131.0], [44.7, 131.0], [44.8, 132.0], [44.9, 132.0], [45.0, 133.0], [45.1, 133.0], [45.2, 134.0], [45.3, 135.0], [45.4, 135.0], [45.5, 136.0], [45.6, 137.0], [45.7, 138.0], [45.8, 139.0], [45.9, 141.0], [46.0, 142.0], [46.1, 142.0], [46.2, 143.0], [46.3, 143.0], [46.4, 144.0], [46.5, 144.0], [46.6, 145.0], [46.7, 146.0], [46.8, 147.0], [46.9, 147.0], [47.0, 148.0], [47.1, 148.0], [47.2, 150.0], [47.3, 150.0], [47.4, 151.0], [47.5, 152.0], [47.6, 153.0], [47.7, 154.0], [47.8, 155.0], [47.9, 156.0], [48.0, 156.0], [48.1, 157.0], [48.2, 158.0], [48.3, 159.0], [48.4, 161.0], [48.5, 162.0], [48.6, 163.0], [48.7, 165.0], [48.8, 166.0], [48.9, 167.0], [49.0, 168.0], [49.1, 169.0], [49.2, 170.0], [49.3, 171.0], [49.4, 172.0], [49.5, 173.0], [49.6, 174.0], [49.7, 176.0], [49.8, 176.0], [49.9, 177.0], [50.0, 179.0], [50.1, 180.0], [50.2, 181.0], [50.3, 182.0], [50.4, 183.0], [50.5, 184.0], [50.6, 185.0], [50.7, 186.0], [50.8, 186.0], [50.9, 187.0], [51.0, 188.0], [51.1, 189.0], [51.2, 190.0], [51.3, 191.0], [51.4, 192.0], [51.5, 192.0], [51.6, 193.0], [51.7, 193.0], [51.8, 194.0], [51.9, 194.0], [52.0, 195.0], [52.1, 196.0], [52.2, 197.0], [52.3, 198.0], [52.4, 198.0], [52.5, 199.0], [52.6, 200.0], [52.7, 201.0], [52.8, 202.0], [52.9, 203.0], [53.0, 204.0], [53.1, 205.0], [53.2, 205.0], [53.3, 205.0], [53.4, 207.0], [53.5, 207.0], [53.6, 208.0], [53.7, 209.0], [53.8, 209.0], [53.9, 210.0], [54.0, 211.0], [54.1, 212.0], [54.2, 213.0], [54.3, 214.0], [54.4, 216.0], [54.5, 217.0], [54.6, 217.0], [54.7, 218.0], [54.8, 219.0], [54.9, 220.0], [55.0, 221.0], [55.1, 222.0], [55.2, 223.0], [55.3, 224.0], [55.4, 225.0], [55.5, 225.0], [55.6, 226.0], [55.7, 228.0], [55.8, 228.0], [55.9, 229.0], [56.0, 230.0], [56.1, 231.0], [56.2, 232.0], [56.3, 233.0], [56.4, 234.0], [56.5, 235.0], [56.6, 236.0], [56.7, 237.0], [56.8, 239.0], [56.9, 239.0], [57.0, 240.0], [57.1, 241.0], [57.2, 243.0], [57.3, 244.0], [57.4, 244.0], [57.5, 245.0], [57.6, 246.0], [57.7, 248.0], [57.8, 249.0], [57.9, 250.0], [58.0, 250.0], [58.1, 251.0], [58.2, 251.0], [58.3, 252.0], [58.4, 253.0], [58.5, 254.0], [58.6, 254.0], [58.7, 255.0], [58.8, 256.0], [58.9, 257.0], [59.0, 259.0], [59.1, 260.0], [59.2, 260.0], [59.3, 261.0], [59.4, 262.0], [59.5, 263.0], [59.6, 264.0], [59.7, 264.0], [59.8, 265.0], [59.9, 266.0], [60.0, 268.0], [60.1, 268.0], [60.2, 270.0], [60.3, 270.0], [60.4, 272.0], [60.5, 273.0], [60.6, 274.0], [60.7, 275.0], [60.8, 276.0], [60.9, 277.0], [61.0, 277.0], [61.1, 278.0], [61.2, 279.0], [61.3, 280.0], [61.4, 281.0], [61.5, 282.0], [61.6, 283.0], [61.7, 286.0], [61.8, 286.0], [61.9, 287.0], [62.0, 289.0], [62.1, 290.0], [62.2, 291.0], [62.3, 293.0], [62.4, 294.0], [62.5, 295.0], [62.6, 297.0], [62.7, 298.0], [62.8, 299.0], [62.9, 300.0], [63.0, 301.0], [63.1, 303.0], [63.2, 304.0], [63.3, 304.0], [63.4, 306.0], [63.5, 307.0], [63.6, 308.0], [63.7, 308.0], [63.8, 309.0], [63.9, 310.0], [64.0, 311.0], [64.1, 312.0], [64.2, 313.0], [64.3, 315.0], [64.4, 317.0], [64.5, 319.0], [64.6, 321.0], [64.7, 323.0], [64.8, 325.0], [64.9, 327.0], [65.0, 328.0], [65.1, 331.0], [65.2, 332.0], [65.3, 333.0], [65.4, 334.0], [65.5, 335.0], [65.6, 336.0], [65.7, 338.0], [65.8, 340.0], [65.9, 342.0], [66.0, 343.0], [66.1, 345.0], [66.2, 345.0], [66.3, 347.0], [66.4, 348.0], [66.5, 349.0], [66.6, 351.0], [66.7, 352.0], [66.8, 354.0], [66.9, 356.0], [67.0, 359.0], [67.1, 360.0], [67.2, 362.0], [67.3, 363.0], [67.4, 364.0], [67.5, 364.0], [67.6, 366.0], [67.7, 367.0], [67.8, 369.0], [67.9, 369.0], [68.0, 371.0], [68.1, 372.0], [68.2, 372.0], [68.3, 372.0], [68.4, 373.0], [68.5, 375.0], [68.6, 376.0], [68.7, 376.0], [68.8, 378.0], [68.9, 379.0], [69.0, 382.0], [69.1, 384.0], [69.2, 387.0], [69.3, 388.0], [69.4, 389.0], [69.5, 391.0], [69.6, 392.0], [69.7, 393.0], [69.8, 395.0], [69.9, 397.0], [70.0, 397.0], [70.1, 399.0], [70.2, 399.0], [70.3, 400.0], [70.4, 401.0], [70.5, 403.0], [70.6, 404.0], [70.7, 408.0], [70.8, 409.0], [70.9, 410.0], [71.0, 412.0], [71.1, 413.0], [71.2, 415.0], [71.3, 417.0], [71.4, 419.0], [71.5, 421.0], [71.6, 422.0], [71.7, 425.0], [71.8, 426.0], [71.9, 428.0], [72.0, 429.0], [72.1, 430.0], [72.2, 431.0], [72.3, 432.0], [72.4, 433.0], [72.5, 435.0], [72.6, 437.0], [72.7, 438.0], [72.8, 440.0], [72.9, 442.0], [73.0, 444.0], [73.1, 445.0], [73.2, 446.0], [73.3, 448.0], [73.4, 450.0], [73.5, 452.0], [73.6, 453.0], [73.7, 454.0], [73.8, 456.0], [73.9, 457.0], [74.0, 459.0], [74.1, 461.0], [74.2, 463.0], [74.3, 464.0], [74.4, 466.0], [74.5, 468.0], [74.6, 469.0], [74.7, 471.0], [74.8, 472.0], [74.9, 473.0], [75.0, 475.0], [75.1, 477.0], [75.2, 479.0], [75.3, 481.0], [75.4, 483.0], [75.5, 484.0], [75.6, 485.0], [75.7, 487.0], [75.8, 488.0], [75.9, 489.0], [76.0, 490.0], [76.1, 491.0], [76.2, 492.0], [76.3, 493.0], [76.4, 494.0], [76.5, 497.0], [76.6, 499.0], [76.7, 501.0], [76.8, 502.0], [76.9, 504.0], [77.0, 507.0], [77.1, 509.0], [77.2, 511.0], [77.3, 512.0], [77.4, 513.0], [77.5, 515.0], [77.6, 518.0], [77.7, 518.0], [77.8, 519.0], [77.9, 522.0], [78.0, 523.0], [78.1, 525.0], [78.2, 527.0], [78.3, 529.0], [78.4, 531.0], [78.5, 533.0], [78.6, 534.0], [78.7, 535.0], [78.8, 536.0], [78.9, 538.0], [79.0, 540.0], [79.1, 542.0], [79.2, 543.0], [79.3, 544.0], [79.4, 546.0], [79.5, 548.0], [79.6, 551.0], [79.7, 553.0], [79.8, 555.0], [79.9, 556.0], [80.0, 558.0], [80.1, 561.0], [80.2, 565.0], [80.3, 566.0], [80.4, 569.0], [80.5, 570.0], [80.6, 572.0], [80.7, 574.0], [80.8, 575.0], [80.9, 576.0], [81.0, 579.0], [81.1, 581.0], [81.2, 582.0], [81.3, 584.0], [81.4, 584.0], [81.5, 585.0], [81.6, 589.0], [81.7, 590.0], [81.8, 594.0], [81.9, 595.0], [82.0, 597.0], [82.1, 598.0], [82.2, 601.0], [82.3, 604.0], [82.4, 604.0], [82.5, 605.0], [82.6, 608.0], [82.7, 611.0], [82.8, 612.0], [82.9, 613.0], [83.0, 616.0], [83.1, 617.0], [83.2, 619.0], [83.3, 620.0], [83.4, 621.0], [83.5, 622.0], [83.6, 624.0], [83.7, 628.0], [83.8, 629.0], [83.9, 631.0], [84.0, 635.0], [84.1, 636.0], [84.2, 637.0], [84.3, 638.0], [84.4, 640.0], [84.5, 641.0], [84.6, 642.0], [84.7, 643.0], [84.8, 645.0], [84.9, 647.0], [85.0, 650.0], [85.1, 653.0], [85.2, 656.0], [85.3, 657.0], [85.4, 659.0], [85.5, 659.0], [85.6, 661.0], [85.7, 663.0], [85.8, 665.0], [85.9, 667.0], [86.0, 668.0], [86.1, 669.0], [86.2, 672.0], [86.3, 674.0], [86.4, 677.0], [86.5, 680.0], [86.6, 681.0], [86.7, 683.0], [86.8, 687.0], [86.9, 690.0], [87.0, 691.0], [87.1, 694.0], [87.2, 696.0], [87.3, 697.0], [87.4, 700.0], [87.5, 704.0], [87.6, 706.0], [87.7, 707.0], [87.8, 710.0], [87.9, 711.0], [88.0, 713.0], [88.1, 716.0], [88.2, 721.0], [88.3, 725.0], [88.4, 728.0], [88.5, 729.0], [88.6, 733.0], [88.7, 735.0], [88.8, 739.0], [88.9, 741.0], [89.0, 745.0], [89.1, 751.0], [89.2, 754.0], [89.3, 759.0], [89.4, 761.0], [89.5, 764.0], [89.6, 767.0], [89.7, 774.0], [89.8, 776.0], [89.9, 780.0], [90.0, 784.0], [90.1, 787.0], [90.2, 791.0], [90.3, 792.0], [90.4, 795.0], [90.5, 800.0], [90.6, 804.0], [90.7, 806.0], [90.8, 809.0], [90.9, 813.0], [91.0, 817.0], [91.1, 821.0], [91.2, 826.0], [91.3, 835.0], [91.4, 837.0], [91.5, 844.0], [91.6, 850.0], [91.7, 855.0], [91.8, 860.0], [91.9, 872.0], [92.0, 877.0], [92.1, 882.0], [92.2, 883.0], [92.3, 886.0], [92.4, 894.0], [92.5, 898.0], [92.6, 902.0], [92.7, 905.0], [92.8, 908.0], [92.9, 910.0], [93.0, 917.0], [93.1, 921.0], [93.2, 924.0], [93.3, 931.0], [93.4, 935.0], [93.5, 941.0], [93.6, 945.0], [93.7, 950.0], [93.8, 961.0], [93.9, 967.0], [94.0, 971.0], [94.1, 973.0], [94.2, 979.0], [94.3, 989.0], [94.4, 993.0], [94.5, 1000.0], [94.6, 1008.0], [94.7, 1014.0], [94.8, 1017.0], [94.9, 1020.0], [95.0, 1032.0], [95.1, 1037.0], [95.2, 1044.0], [95.3, 1057.0], [95.4, 1060.0], [95.5, 1073.0], [95.6, 1082.0], [95.7, 1090.0], [95.8, 1100.0], [95.9, 1104.0], [96.0, 1110.0], [96.1, 1116.0], [96.2, 1133.0], [96.3, 1142.0], [96.4, 1151.0], [96.5, 1160.0], [96.6, 1167.0], [96.7, 1178.0], [96.8, 1195.0], [96.9, 1204.0], [97.0, 1217.0], [97.1, 1231.0], [97.2, 1241.0], [97.3, 1261.0], [97.4, 1276.0], [97.5, 1297.0], [97.6, 1318.0], [97.7, 1328.0], [97.8, 1345.0], [97.9, 1368.0], [98.0, 1383.0], [98.1, 1399.0], [98.2, 1426.0], [98.3, 1446.0], [98.4, 1452.0], [98.5, 1472.0], [98.6, 1502.0], [98.7, 1521.0], [98.8, 1555.0], [98.9, 1582.0], [99.0, 1610.0], [99.1, 1642.0], [99.2, 1681.0], [99.3, 1780.0], [99.4, 1823.0], [99.5, 1867.0], [99.6, 1928.0], [99.7, 2020.0], [99.8, 2162.0], [99.9, 2277.0], [100.0, 3231.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2078.0, "series": [{"data": [[0.0, 2078.0], [600.0, 274.0], [700.0, 164.0], [800.0, 109.0], [900.0, 102.0], [1000.0, 68.0], [1100.0, 55.0], [1200.0, 37.0], [1300.0, 31.0], [1400.0, 25.0], [1500.0, 19.0], [100.0, 686.0], [1600.0, 15.0], [1700.0, 6.0], [1800.0, 10.0], [1900.0, 6.0], [2000.0, 3.0], [2100.0, 5.0], [2200.0, 5.0], [2300.0, 2.0], [3000.0, 1.0], [200.0, 545.0], [3200.0, 2.0], [300.0, 386.0], [400.0, 336.0], [500.0, 292.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 74.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4035.0, "series": [{"data": [[0.0, 4035.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1153.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 74.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.904862579281186, "minX": 1.60374342E12, "maxY": 10.0, "series": [{"data": [[1.60374348E12, 10.0], [1.6037436E12, 9.904862579281186], [1.60374342E12, 9.968586387434556], [1.60374354E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6037436E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 319.1593595120091, "minX": 1.0, "maxY": 3072.0, "series": [{"data": [[8.0, 1674.0], [4.0, 2162.0], [2.0, 2014.0], [1.0, 3072.0], [9.0, 839.0], [5.0, 804.3333333333334], [10.0, 319.1593595120091], [3.0, 1679.0], [6.0, 1034.0], [7.0, 685.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98688711516533, 322.23451159254995]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4162.633333333333, "minX": 1.60374342E12, "maxY": 1597390.3666666667, "series": [{"data": [[1.60374348E12, 1597390.3666666667], [1.6037436E12, 474201.55], [1.60374342E12, 643673.4], [1.60374354E12, 1535771.7166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60374348E12, 17170.916666666668], [1.6037436E12, 4162.633333333333], [1.60374342E12, 6564.333333333333], [1.60374354E12, 17593.066666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6037436E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 297.8190335305716, "minX": 1.60374342E12, "maxY": 430.90697674418624, "series": [{"data": [[1.60374348E12, 297.8190335305716], [1.6037436E12, 430.90697674418624], [1.60374342E12, 381.418848167539], [1.60374354E12, 298.64697045568334]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6037436E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 297.382642998028, "minX": 1.60374342E12, "maxY": 430.40803382663825, "series": [{"data": [[1.60374348E12, 297.382642998028], [1.6037436E12, 430.40803382663825], [1.60374342E12, 380.9410994764397], [1.60374354E12, 298.2528793189783]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6037436E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010355029585798826, "minX": 1.60374342E12, "maxY": 0.10471204188481668, "series": [{"data": [[1.60374348E12, 0.010355029585798826], [1.6037436E12, 0.012684989429175468], [1.60374342E12, 0.10471204188481668], [1.60374354E12, 0.011016524787180798]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6037436E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.60374342E12, "maxY": 3231.0, "series": [{"data": [[1.60374348E12, 2244.0], [1.6037436E12, 3231.0], [1.60374342E12, 1791.0], [1.60374354E12, 1867.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60374348E12, 37.0], [1.6037436E12, 38.0], [1.60374342E12, 38.0], [1.60374354E12, 35.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60374348E12, 37.0], [1.6037436E12, 38.0], [1.60374342E12, 38.57350007295609], [1.60374354E12, 35.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60374348E12, 37.0], [1.6037436E12, 38.0], [1.60374342E12, 38.26749990880489], [1.60374354E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60374348E12, 31.0], [1.6037436E12, 37.0], [1.60374342E12, 32.0], [1.60374354E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60374348E12, 142.0], [1.6037436E12, 250.0], [1.60374342E12, 275.5], [1.60374354E12, 190.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6037436E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 67.5, "minX": 1.0, "maxY": 3072.0, "series": [{"data": [[3.0, 2014.0], [5.0, 1283.0], [6.0, 1265.5], [7.0, 806.0], [8.0, 1591.5], [10.0, 830.0], [11.0, 793.0], [12.0, 709.0], [13.0, 744.0], [14.0, 621.5], [15.0, 471.0], [16.0, 551.0], [17.0, 533.0], [18.0, 487.0], [19.0, 491.0], [20.0, 415.5], [21.0, 432.0], [22.0, 477.5], [23.0, 378.0], [24.0, 285.0], [25.0, 424.0], [26.0, 328.0], [27.0, 293.0], [28.0, 277.5], [29.0, 243.0], [30.0, 109.5], [31.0, 264.5], [33.0, 255.0], [35.0, 201.5], [34.0, 169.5], [36.0, 82.0], [37.0, 275.0], [38.0, 196.0], [39.0, 87.0], [40.0, 95.0], [41.0, 277.0], [43.0, 85.0], [42.0, 84.5], [45.0, 140.0], [44.0, 133.0], [47.0, 83.5], [46.0, 178.0], [49.0, 88.0], [51.0, 98.5], [50.0, 113.5], [55.0, 158.5], [54.0, 89.5], [57.0, 121.0], [58.0, 90.0], [60.0, 132.5], [62.0, 78.5], [63.0, 135.0], [64.0, 110.5], [66.0, 123.0], [65.0, 84.0], [70.0, 67.5], [69.0, 85.0], [73.0, 89.0], [72.0, 84.5], [77.0, 84.0], [79.0, 81.0], [80.0, 83.0], [86.0, 78.0], [84.0, 121.0], [100.0, 76.5], [1.0, 3072.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 67.5, "minX": 1.0, "maxY": 3072.0, "series": [{"data": [[3.0, 2014.0], [5.0, 1283.0], [6.0, 1264.5], [7.0, 804.0], [8.0, 1588.5], [10.0, 829.0], [11.0, 792.0], [12.0, 709.0], [13.0, 744.0], [14.0, 619.5], [15.0, 471.0], [16.0, 551.0], [17.0, 533.0], [18.0, 485.5], [19.0, 489.0], [20.0, 412.5], [21.0, 431.5], [22.0, 476.5], [23.0, 377.5], [24.0, 285.0], [25.0, 423.0], [26.0, 327.5], [27.0, 293.0], [28.0, 277.0], [29.0, 243.0], [30.0, 109.5], [31.0, 264.0], [33.0, 253.5], [35.0, 201.0], [34.0, 169.5], [36.0, 82.0], [37.0, 274.5], [38.0, 196.0], [39.0, 87.0], [40.0, 95.0], [41.0, 277.0], [43.0, 85.0], [42.0, 84.5], [45.0, 139.5], [44.0, 132.5], [47.0, 83.5], [46.0, 178.0], [49.0, 88.0], [51.0, 98.5], [50.0, 113.5], [55.0, 158.5], [54.0, 89.5], [57.0, 121.0], [58.0, 90.0], [60.0, 132.0], [62.0, 78.5], [63.0, 135.0], [64.0, 110.0], [66.0, 123.0], [65.0, 84.0], [70.0, 67.5], [69.0, 85.0], [73.0, 89.0], [72.0, 84.0], [77.0, 84.0], [79.0, 81.0], [80.0, 83.0], [86.0, 78.0], [84.0, 121.0], [100.0, 76.0], [1.0, 3072.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.716666666666667, "minX": 1.60374342E12, "maxY": 33.8, "series": [{"data": [[1.60374348E12, 33.8], [1.6037436E12, 7.716666666666667], [1.60374342E12, 12.9], [1.60374354E12, 33.28333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6037436E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.883333333333334, "minX": 1.60374342E12, "maxY": 33.8, "series": [{"data": [[1.60374348E12, 33.8], [1.6037436E12, 7.883333333333334], [1.60374342E12, 12.733333333333333], [1.60374354E12, 33.28333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6037436E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.883333333333334, "minX": 1.60374342E12, "maxY": 33.8, "series": [{"data": [[1.60374348E12, 33.8], [1.6037436E12, 7.883333333333334], [1.60374342E12, 12.733333333333333], [1.60374354E12, 33.28333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6037436E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.883333333333334, "minX": 1.60374342E12, "maxY": 33.8, "series": [{"data": [[1.60374348E12, 33.8], [1.6037436E12, 7.883333333333334], [1.60374342E12, 12.733333333333333], [1.60374354E12, 33.28333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6037436E12, "title": "Total Transactions Per Second"}},
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

