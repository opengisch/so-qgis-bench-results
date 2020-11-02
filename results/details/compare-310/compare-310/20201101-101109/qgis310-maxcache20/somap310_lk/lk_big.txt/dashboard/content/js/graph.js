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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 3675.0, "series": [{"data": [[0.0, 30.0], [0.1, 32.0], [0.2, 33.0], [0.3, 33.0], [0.4, 34.0], [0.5, 34.0], [0.6, 35.0], [0.7, 35.0], [0.8, 36.0], [0.9, 36.0], [1.0, 36.0], [1.1, 36.0], [1.2, 36.0], [1.3, 37.0], [1.4, 37.0], [1.5, 37.0], [1.6, 37.0], [1.7, 37.0], [1.8, 37.0], [1.9, 38.0], [2.0, 38.0], [2.1, 38.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 38.0], [2.8, 39.0], [2.9, 39.0], [3.0, 39.0], [3.1, 39.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 39.0], [3.7, 39.0], [3.8, 39.0], [3.9, 39.0], [4.0, 39.0], [4.1, 40.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 40.0], [4.6, 40.0], [4.7, 40.0], [4.8, 40.0], [4.9, 40.0], [5.0, 40.0], [5.1, 40.0], [5.2, 40.0], [5.3, 41.0], [5.4, 41.0], [5.5, 41.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 42.0], [6.9, 42.0], [7.0, 42.0], [7.1, 42.0], [7.2, 42.0], [7.3, 42.0], [7.4, 42.0], [7.5, 42.0], [7.6, 42.0], [7.7, 42.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 43.0], [9.1, 43.0], [9.2, 43.0], [9.3, 43.0], [9.4, 43.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 44.0], [10.1, 44.0], [10.2, 44.0], [10.3, 44.0], [10.4, 44.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 45.0], [10.9, 45.0], [11.0, 45.0], [11.1, 45.0], [11.2, 45.0], [11.3, 45.0], [11.4, 45.0], [11.5, 45.0], [11.6, 45.0], [11.7, 45.0], [11.8, 45.0], [11.9, 45.0], [12.0, 45.0], [12.1, 45.0], [12.2, 46.0], [12.3, 46.0], [12.4, 46.0], [12.5, 46.0], [12.6, 46.0], [12.7, 46.0], [12.8, 46.0], [12.9, 46.0], [13.0, 46.0], [13.1, 46.0], [13.2, 46.0], [13.3, 47.0], [13.4, 47.0], [13.5, 47.0], [13.6, 47.0], [13.7, 47.0], [13.8, 47.0], [13.9, 47.0], [14.0, 47.0], [14.1, 47.0], [14.2, 47.0], [14.3, 48.0], [14.4, 48.0], [14.5, 48.0], [14.6, 48.0], [14.7, 48.0], [14.8, 48.0], [14.9, 48.0], [15.0, 48.0], [15.1, 48.0], [15.2, 48.0], [15.3, 49.0], [15.4, 49.0], [15.5, 49.0], [15.6, 49.0], [15.7, 49.0], [15.8, 49.0], [15.9, 49.0], [16.0, 50.0], [16.1, 50.0], [16.2, 50.0], [16.3, 50.0], [16.4, 50.0], [16.5, 50.0], [16.6, 51.0], [16.7, 51.0], [16.8, 51.0], [16.9, 51.0], [17.0, 51.0], [17.1, 51.0], [17.2, 52.0], [17.3, 52.0], [17.4, 52.0], [17.5, 52.0], [17.6, 52.0], [17.7, 52.0], [17.8, 53.0], [17.9, 53.0], [18.0, 53.0], [18.1, 53.0], [18.2, 54.0], [18.3, 54.0], [18.4, 54.0], [18.5, 54.0], [18.6, 54.0], [18.7, 55.0], [18.8, 55.0], [18.9, 55.0], [19.0, 55.0], [19.1, 56.0], [19.2, 56.0], [19.3, 56.0], [19.4, 56.0], [19.5, 57.0], [19.6, 57.0], [19.7, 57.0], [19.8, 58.0], [19.9, 58.0], [20.0, 58.0], [20.1, 59.0], [20.2, 59.0], [20.3, 59.0], [20.4, 60.0], [20.5, 60.0], [20.6, 60.0], [20.7, 60.0], [20.8, 60.0], [20.9, 60.0], [21.0, 61.0], [21.1, 61.0], [21.2, 61.0], [21.3, 61.0], [21.4, 62.0], [21.5, 62.0], [21.6, 62.0], [21.7, 62.0], [21.8, 62.0], [21.9, 62.0], [22.0, 63.0], [22.1, 63.0], [22.2, 63.0], [22.3, 63.0], [22.4, 63.0], [22.5, 64.0], [22.6, 64.0], [22.7, 64.0], [22.8, 64.0], [22.9, 65.0], [23.0, 65.0], [23.1, 65.0], [23.2, 65.0], [23.3, 66.0], [23.4, 66.0], [23.5, 66.0], [23.6, 66.0], [23.7, 66.0], [23.8, 66.0], [23.9, 67.0], [24.0, 67.0], [24.1, 67.0], [24.2, 68.0], [24.3, 68.0], [24.4, 68.0], [24.5, 68.0], [24.6, 68.0], [24.7, 68.0], [24.8, 69.0], [24.9, 69.0], [25.0, 69.0], [25.1, 69.0], [25.2, 69.0], [25.3, 70.0], [25.4, 70.0], [25.5, 70.0], [25.6, 70.0], [25.7, 70.0], [25.8, 71.0], [25.9, 71.0], [26.0, 71.0], [26.1, 71.0], [26.2, 71.0], [26.3, 72.0], [26.4, 72.0], [26.5, 72.0], [26.6, 72.0], [26.7, 72.0], [26.8, 72.0], [26.9, 72.0], [27.0, 73.0], [27.1, 73.0], [27.2, 73.0], [27.3, 73.0], [27.4, 73.0], [27.5, 73.0], [27.6, 73.0], [27.7, 73.0], [27.8, 73.0], [27.9, 74.0], [28.0, 74.0], [28.1, 74.0], [28.2, 74.0], [28.3, 74.0], [28.4, 74.0], [28.5, 75.0], [28.6, 75.0], [28.7, 75.0], [28.8, 75.0], [28.9, 75.0], [29.0, 75.0], [29.1, 75.0], [29.2, 76.0], [29.3, 76.0], [29.4, 76.0], [29.5, 76.0], [29.6, 76.0], [29.7, 76.0], [29.8, 77.0], [29.9, 77.0], [30.0, 77.0], [30.1, 77.0], [30.2, 77.0], [30.3, 77.0], [30.4, 77.0], [30.5, 78.0], [30.6, 78.0], [30.7, 78.0], [30.8, 78.0], [30.9, 78.0], [31.0, 78.0], [31.1, 79.0], [31.2, 79.0], [31.3, 79.0], [31.4, 79.0], [31.5, 79.0], [31.6, 80.0], [31.7, 80.0], [31.8, 80.0], [31.9, 80.0], [32.0, 80.0], [32.1, 80.0], [32.2, 80.0], [32.3, 80.0], [32.4, 81.0], [32.5, 81.0], [32.6, 81.0], [32.7, 81.0], [32.8, 81.0], [32.9, 81.0], [33.0, 82.0], [33.1, 82.0], [33.2, 82.0], [33.3, 82.0], [33.4, 82.0], [33.5, 82.0], [33.6, 82.0], [33.7, 83.0], [33.8, 83.0], [33.9, 83.0], [34.0, 83.0], [34.1, 83.0], [34.2, 83.0], [34.3, 83.0], [34.4, 83.0], [34.5, 84.0], [34.6, 84.0], [34.7, 84.0], [34.8, 84.0], [34.9, 84.0], [35.0, 84.0], [35.1, 84.0], [35.2, 85.0], [35.3, 85.0], [35.4, 85.0], [35.5, 85.0], [35.6, 85.0], [35.7, 85.0], [35.8, 86.0], [35.9, 86.0], [36.0, 86.0], [36.1, 86.0], [36.2, 86.0], [36.3, 86.0], [36.4, 87.0], [36.5, 87.0], [36.6, 87.0], [36.7, 87.0], [36.8, 88.0], [36.9, 88.0], [37.0, 88.0], [37.1, 88.0], [37.2, 88.0], [37.3, 89.0], [37.4, 89.0], [37.5, 89.0], [37.6, 89.0], [37.7, 89.0], [37.8, 90.0], [37.9, 90.0], [38.0, 90.0], [38.1, 91.0], [38.2, 91.0], [38.3, 91.0], [38.4, 92.0], [38.5, 92.0], [38.6, 92.0], [38.7, 93.0], [38.8, 93.0], [38.9, 93.0], [39.0, 94.0], [39.1, 95.0], [39.2, 95.0], [39.3, 96.0], [39.4, 96.0], [39.5, 96.0], [39.6, 97.0], [39.7, 98.0], [39.8, 98.0], [39.9, 99.0], [40.0, 99.0], [40.1, 100.0], [40.2, 100.0], [40.3, 101.0], [40.4, 101.0], [40.5, 102.0], [40.6, 102.0], [40.7, 103.0], [40.8, 104.0], [40.9, 105.0], [41.0, 105.0], [41.1, 106.0], [41.2, 108.0], [41.3, 108.0], [41.4, 109.0], [41.5, 109.0], [41.6, 109.0], [41.7, 110.0], [41.8, 111.0], [41.9, 111.0], [42.0, 113.0], [42.1, 113.0], [42.2, 114.0], [42.3, 115.0], [42.4, 116.0], [42.5, 116.0], [42.6, 118.0], [42.7, 118.0], [42.8, 119.0], [42.9, 120.0], [43.0, 121.0], [43.1, 121.0], [43.2, 122.0], [43.3, 123.0], [43.4, 124.0], [43.5, 125.0], [43.6, 126.0], [43.7, 126.0], [43.8, 127.0], [43.9, 128.0], [44.0, 129.0], [44.1, 130.0], [44.2, 130.0], [44.3, 131.0], [44.4, 132.0], [44.5, 134.0], [44.6, 135.0], [44.7, 136.0], [44.8, 137.0], [44.9, 139.0], [45.0, 141.0], [45.1, 141.0], [45.2, 143.0], [45.3, 143.0], [45.4, 144.0], [45.5, 145.0], [45.6, 145.0], [45.7, 147.0], [45.8, 147.0], [45.9, 148.0], [46.0, 149.0], [46.1, 149.0], [46.2, 150.0], [46.3, 151.0], [46.4, 152.0], [46.5, 153.0], [46.6, 153.0], [46.7, 154.0], [46.8, 156.0], [46.9, 157.0], [47.0, 158.0], [47.1, 159.0], [47.2, 160.0], [47.3, 161.0], [47.4, 162.0], [47.5, 163.0], [47.6, 164.0], [47.7, 165.0], [47.8, 166.0], [47.9, 168.0], [48.0, 168.0], [48.1, 169.0], [48.2, 170.0], [48.3, 171.0], [48.4, 172.0], [48.5, 173.0], [48.6, 174.0], [48.7, 175.0], [48.8, 176.0], [48.9, 178.0], [49.0, 179.0], [49.1, 179.0], [49.2, 180.0], [49.3, 181.0], [49.4, 182.0], [49.5, 183.0], [49.6, 184.0], [49.7, 185.0], [49.8, 186.0], [49.9, 187.0], [50.0, 187.0], [50.1, 187.0], [50.2, 188.0], [50.3, 189.0], [50.4, 189.0], [50.5, 190.0], [50.6, 191.0], [50.7, 192.0], [50.8, 193.0], [50.9, 193.0], [51.0, 194.0], [51.1, 194.0], [51.2, 195.0], [51.3, 196.0], [51.4, 197.0], [51.5, 198.0], [51.6, 198.0], [51.7, 199.0], [51.8, 199.0], [51.9, 200.0], [52.0, 201.0], [52.1, 202.0], [52.2, 202.0], [52.3, 204.0], [52.4, 204.0], [52.5, 206.0], [52.6, 206.0], [52.7, 208.0], [52.8, 208.0], [52.9, 209.0], [53.0, 209.0], [53.1, 210.0], [53.2, 210.0], [53.3, 211.0], [53.4, 211.0], [53.5, 212.0], [53.6, 212.0], [53.7, 213.0], [53.8, 213.0], [53.9, 214.0], [54.0, 215.0], [54.1, 216.0], [54.2, 216.0], [54.3, 217.0], [54.4, 219.0], [54.5, 220.0], [54.6, 220.0], [54.7, 221.0], [54.8, 222.0], [54.9, 223.0], [55.0, 224.0], [55.1, 224.0], [55.2, 225.0], [55.3, 226.0], [55.4, 227.0], [55.5, 228.0], [55.6, 229.0], [55.7, 230.0], [55.8, 231.0], [55.9, 232.0], [56.0, 233.0], [56.1, 235.0], [56.2, 236.0], [56.3, 236.0], [56.4, 237.0], [56.5, 238.0], [56.6, 239.0], [56.7, 239.0], [56.8, 240.0], [56.9, 241.0], [57.0, 242.0], [57.1, 242.0], [57.2, 243.0], [57.3, 244.0], [57.4, 245.0], [57.5, 245.0], [57.6, 245.0], [57.7, 246.0], [57.8, 246.0], [57.9, 247.0], [58.0, 248.0], [58.1, 249.0], [58.2, 249.0], [58.3, 250.0], [58.4, 251.0], [58.5, 253.0], [58.6, 253.0], [58.7, 254.0], [58.8, 255.0], [58.9, 257.0], [59.0, 258.0], [59.1, 258.0], [59.2, 260.0], [59.3, 261.0], [59.4, 262.0], [59.5, 263.0], [59.6, 264.0], [59.7, 265.0], [59.8, 266.0], [59.9, 267.0], [60.0, 270.0], [60.1, 270.0], [60.2, 272.0], [60.3, 272.0], [60.4, 274.0], [60.5, 275.0], [60.6, 276.0], [60.7, 277.0], [60.8, 277.0], [60.9, 279.0], [61.0, 280.0], [61.1, 280.0], [61.2, 281.0], [61.3, 283.0], [61.4, 283.0], [61.5, 285.0], [61.6, 286.0], [61.7, 287.0], [61.8, 288.0], [61.9, 290.0], [62.0, 291.0], [62.1, 292.0], [62.2, 293.0], [62.3, 295.0], [62.4, 296.0], [62.5, 297.0], [62.6, 298.0], [62.7, 298.0], [62.8, 298.0], [62.9, 302.0], [63.0, 306.0], [63.1, 307.0], [63.2, 307.0], [63.3, 308.0], [63.4, 309.0], [63.5, 310.0], [63.6, 312.0], [63.7, 313.0], [63.8, 315.0], [63.9, 316.0], [64.0, 317.0], [64.1, 318.0], [64.2, 320.0], [64.3, 322.0], [64.4, 324.0], [64.5, 325.0], [64.6, 327.0], [64.7, 329.0], [64.8, 330.0], [64.9, 331.0], [65.0, 332.0], [65.1, 333.0], [65.2, 334.0], [65.3, 335.0], [65.4, 337.0], [65.5, 338.0], [65.6, 339.0], [65.7, 340.0], [65.8, 341.0], [65.9, 342.0], [66.0, 343.0], [66.1, 345.0], [66.2, 345.0], [66.3, 347.0], [66.4, 348.0], [66.5, 349.0], [66.6, 351.0], [66.7, 352.0], [66.8, 352.0], [66.9, 354.0], [67.0, 356.0], [67.1, 360.0], [67.2, 361.0], [67.3, 362.0], [67.4, 363.0], [67.5, 364.0], [67.6, 365.0], [67.7, 366.0], [67.8, 368.0], [67.9, 369.0], [68.0, 371.0], [68.1, 371.0], [68.2, 372.0], [68.3, 373.0], [68.4, 376.0], [68.5, 379.0], [68.6, 381.0], [68.7, 382.0], [68.8, 384.0], [68.9, 385.0], [69.0, 386.0], [69.1, 389.0], [69.2, 390.0], [69.3, 390.0], [69.4, 391.0], [69.5, 393.0], [69.6, 394.0], [69.7, 396.0], [69.8, 397.0], [69.9, 399.0], [70.0, 400.0], [70.1, 400.0], [70.2, 402.0], [70.3, 405.0], [70.4, 405.0], [70.5, 406.0], [70.6, 407.0], [70.7, 408.0], [70.8, 410.0], [70.9, 410.0], [71.0, 412.0], [71.1, 412.0], [71.2, 413.0], [71.3, 414.0], [71.4, 417.0], [71.5, 418.0], [71.6, 420.0], [71.7, 421.0], [71.8, 422.0], [71.9, 425.0], [72.0, 426.0], [72.1, 427.0], [72.2, 429.0], [72.3, 430.0], [72.4, 432.0], [72.5, 435.0], [72.6, 436.0], [72.7, 438.0], [72.8, 440.0], [72.9, 440.0], [73.0, 442.0], [73.1, 443.0], [73.2, 445.0], [73.3, 447.0], [73.4, 448.0], [73.5, 450.0], [73.6, 451.0], [73.7, 452.0], [73.8, 454.0], [73.9, 456.0], [74.0, 457.0], [74.1, 459.0], [74.2, 459.0], [74.3, 460.0], [74.4, 463.0], [74.5, 465.0], [74.6, 466.0], [74.7, 467.0], [74.8, 470.0], [74.9, 473.0], [75.0, 475.0], [75.1, 475.0], [75.2, 478.0], [75.3, 478.0], [75.4, 479.0], [75.5, 480.0], [75.6, 481.0], [75.7, 483.0], [75.8, 485.0], [75.9, 486.0], [76.0, 488.0], [76.1, 489.0], [76.2, 491.0], [76.3, 493.0], [76.4, 495.0], [76.5, 498.0], [76.6, 501.0], [76.7, 504.0], [76.8, 505.0], [76.9, 507.0], [77.0, 507.0], [77.1, 508.0], [77.2, 511.0], [77.3, 512.0], [77.4, 514.0], [77.5, 516.0], [77.6, 518.0], [77.7, 520.0], [77.8, 520.0], [77.9, 521.0], [78.0, 522.0], [78.1, 522.0], [78.2, 524.0], [78.3, 526.0], [78.4, 528.0], [78.5, 532.0], [78.6, 534.0], [78.7, 535.0], [78.8, 537.0], [78.9, 540.0], [79.0, 541.0], [79.1, 541.0], [79.2, 543.0], [79.3, 545.0], [79.4, 546.0], [79.5, 547.0], [79.6, 550.0], [79.7, 553.0], [79.8, 557.0], [79.9, 561.0], [80.0, 562.0], [80.1, 563.0], [80.2, 564.0], [80.3, 566.0], [80.4, 567.0], [80.5, 568.0], [80.6, 570.0], [80.7, 571.0], [80.8, 572.0], [80.9, 574.0], [81.0, 575.0], [81.1, 578.0], [81.2, 579.0], [81.3, 584.0], [81.4, 585.0], [81.5, 587.0], [81.6, 589.0], [81.7, 591.0], [81.8, 592.0], [81.9, 595.0], [82.0, 597.0], [82.1, 598.0], [82.2, 599.0], [82.3, 600.0], [82.4, 602.0], [82.5, 604.0], [82.6, 606.0], [82.7, 609.0], [82.8, 610.0], [82.9, 613.0], [83.0, 614.0], [83.1, 619.0], [83.2, 624.0], [83.3, 625.0], [83.4, 628.0], [83.5, 629.0], [83.6, 632.0], [83.7, 634.0], [83.8, 637.0], [83.9, 639.0], [84.0, 641.0], [84.1, 642.0], [84.2, 644.0], [84.3, 646.0], [84.4, 647.0], [84.5, 648.0], [84.6, 650.0], [84.7, 651.0], [84.8, 653.0], [84.9, 655.0], [85.0, 657.0], [85.1, 659.0], [85.2, 663.0], [85.3, 665.0], [85.4, 667.0], [85.5, 668.0], [85.6, 669.0], [85.7, 672.0], [85.8, 673.0], [85.9, 676.0], [86.0, 678.0], [86.1, 683.0], [86.2, 686.0], [86.3, 687.0], [86.4, 689.0], [86.5, 690.0], [86.6, 693.0], [86.7, 694.0], [86.8, 697.0], [86.9, 699.0], [87.0, 701.0], [87.1, 704.0], [87.2, 706.0], [87.3, 708.0], [87.4, 709.0], [87.5, 713.0], [87.6, 716.0], [87.7, 718.0], [87.8, 721.0], [87.9, 723.0], [88.0, 726.0], [88.1, 729.0], [88.2, 732.0], [88.3, 734.0], [88.4, 736.0], [88.5, 741.0], [88.6, 746.0], [88.7, 747.0], [88.8, 750.0], [88.9, 753.0], [89.0, 755.0], [89.1, 758.0], [89.2, 761.0], [89.3, 763.0], [89.4, 768.0], [89.5, 774.0], [89.6, 776.0], [89.7, 779.0], [89.8, 781.0], [89.9, 784.0], [90.0, 790.0], [90.1, 793.0], [90.2, 795.0], [90.3, 799.0], [90.4, 801.0], [90.5, 806.0], [90.6, 808.0], [90.7, 811.0], [90.8, 815.0], [90.9, 819.0], [91.0, 824.0], [91.1, 826.0], [91.2, 832.0], [91.3, 839.0], [91.4, 840.0], [91.5, 845.0], [91.6, 849.0], [91.7, 853.0], [91.8, 856.0], [91.9, 861.0], [92.0, 865.0], [92.1, 869.0], [92.2, 872.0], [92.3, 874.0], [92.4, 884.0], [92.5, 888.0], [92.6, 893.0], [92.7, 899.0], [92.8, 911.0], [92.9, 916.0], [93.0, 920.0], [93.1, 929.0], [93.2, 935.0], [93.3, 941.0], [93.4, 945.0], [93.5, 948.0], [93.6, 954.0], [93.7, 956.0], [93.8, 960.0], [93.9, 965.0], [94.0, 974.0], [94.1, 980.0], [94.2, 985.0], [94.3, 995.0], [94.4, 1000.0], [94.5, 1010.0], [94.6, 1015.0], [94.7, 1020.0], [94.8, 1023.0], [94.9, 1031.0], [95.0, 1033.0], [95.1, 1035.0], [95.2, 1038.0], [95.3, 1043.0], [95.4, 1050.0], [95.5, 1059.0], [95.6, 1070.0], [95.7, 1076.0], [95.8, 1087.0], [95.9, 1099.0], [96.0, 1105.0], [96.1, 1113.0], [96.2, 1117.0], [96.3, 1123.0], [96.4, 1126.0], [96.5, 1138.0], [96.6, 1156.0], [96.7, 1171.0], [96.8, 1177.0], [96.9, 1189.0], [97.0, 1210.0], [97.1, 1220.0], [97.2, 1231.0], [97.3, 1240.0], [97.4, 1256.0], [97.5, 1282.0], [97.6, 1326.0], [97.7, 1351.0], [97.8, 1376.0], [97.9, 1383.0], [98.0, 1390.0], [98.1, 1404.0], [98.2, 1436.0], [98.3, 1446.0], [98.4, 1453.0], [98.5, 1501.0], [98.6, 1530.0], [98.7, 1549.0], [98.8, 1601.0], [98.9, 1643.0], [99.0, 1706.0], [99.1, 1733.0], [99.2, 1759.0], [99.3, 1778.0], [99.4, 1867.0], [99.5, 1921.0], [99.6, 2001.0], [99.7, 2125.0], [99.8, 2329.0], [99.9, 3204.0], [100.0, 3675.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2110.0, "series": [{"data": [[0.0, 2110.0], [600.0, 249.0], [700.0, 179.0], [800.0, 124.0], [900.0, 89.0], [1000.0, 81.0], [1100.0, 52.0], [1200.0, 33.0], [1300.0, 25.0], [1400.0, 24.0], [1500.0, 16.0], [100.0, 617.0], [1600.0, 11.0], [1700.0, 18.0], [1800.0, 5.0], [1900.0, 8.0], [2000.0, 5.0], [2100.0, 4.0], [2200.0, 2.0], [2300.0, 2.0], [2500.0, 2.0], [3000.0, 1.0], [200.0, 581.0], [3200.0, 2.0], [3300.0, 1.0], [3500.0, 1.0], [3600.0, 2.0], [300.0, 373.0], [400.0, 346.0], [500.0, 299.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 79.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4030.0, "series": [{"data": [[0.0, 4030.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1153.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 79.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.581818181818184, "minX": 1.60422618E12, "maxY": 10.0, "series": [{"data": [[1.60422624E12, 10.0], [1.6042263E12, 10.0], [1.60422618E12, 9.581818181818184], [1.60422636E12, 9.96527229676401]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422636E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 44.0, "minX": 1.0, "maxY": 3651.0, "series": [{"data": [[4.0, 1931.0], [8.0, 1360.5], [2.0, 3061.0], [1.0, 3534.0], [9.0, 462.0], [5.0, 44.0], [10.0, 320.4618757148291], [6.0, 2228.0], [3.0, 3651.0], [7.0, 754.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987267198783748, 324.0993918662098]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 445.43333333333334, "minX": 1.60422618E12, "maxY": 1645494.45, "series": [{"data": [[1.60422624E12, 1645494.45], [1.6042263E12, 1137525.95], [1.60422618E12, 40251.3], [1.60422636E12, 1427581.8166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422624E12, 14285.8], [1.6042263E12, 19582.633333333335], [1.60422618E12, 445.43333333333334], [1.60422636E12, 11177.083333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422636E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 259.90656236418874, "minX": 1.60422618E12, "maxY": 390.1272727272727, "series": [{"data": [[1.60422624E12, 367.61744966442967], [1.6042263E12, 259.90656236418874], [1.60422618E12, 390.1272727272727], [1.60422636E12, 381.5185477505914]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422636E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 259.60451977401164, "minX": 1.60422618E12, "maxY": 389.59999999999997, "series": [{"data": [[1.60422624E12, 367.05735204392937], [1.6042263E12, 259.60451977401164], [1.60422618E12, 389.59999999999997], [1.60422636E12, 381.0189423835827]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422636E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006711409395973153, "minX": 1.60422618E12, "maxY": 2.3272727272727285, "series": [{"data": [[1.60422624E12, 0.006711409395973153], [1.6042263E12, 0.011299435028248617], [1.60422618E12, 2.3272727272727285], [1.60422636E12, 0.0165745856353591]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422636E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60422618E12, "maxY": 3675.0, "series": [{"data": [[1.60422624E12, 2397.0], [1.6042263E12, 2224.0], [1.60422618E12, 1122.0], [1.60422636E12, 3675.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422624E12, 36.0], [1.6042263E12, 36.0], [1.60422618E12, 42.0], [1.60422636E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422624E12, 36.0], [1.6042263E12, 36.0], [1.60422618E12, 42.0], [1.60422636E12, 34.55320012092591]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422624E12, 36.0], [1.6042263E12, 36.0], [1.60422618E12, 42.0], [1.60422636E12, 34.04599984884262]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422624E12, 31.0], [1.6042263E12, 31.0], [1.60422618E12, 42.0], [1.60422636E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422624E12, 240.0], [1.6042263E12, 140.0], [1.60422618E12, 351.0], [1.60422636E12, 245.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422636E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 45.0, "minX": 1.0, "maxY": 3534.0, "series": [{"data": [[2.0, 3356.0], [3.0, 3224.0], [4.0, 1724.5], [5.0, 1321.5], [6.0, 1323.5], [7.0, 985.0], [9.0, 730.0], [10.0, 805.5], [12.0, 150.5], [13.0, 695.0], [14.0, 666.5], [15.0, 647.0], [16.0, 574.5], [17.0, 553.5], [18.0, 501.5], [19.0, 309.0], [20.0, 506.0], [21.0, 433.5], [22.0, 396.5], [23.0, 405.0], [24.0, 355.0], [25.0, 328.5], [26.0, 89.0], [27.0, 315.0], [28.0, 314.0], [29.0, 280.5], [30.0, 186.5], [31.0, 125.0], [33.0, 250.0], [32.0, 127.5], [34.0, 207.5], [36.0, 201.5], [37.0, 136.5], [38.0, 64.0], [39.0, 112.5], [40.0, 83.5], [41.0, 89.0], [42.0, 142.0], [43.0, 74.0], [45.0, 113.0], [44.0, 169.0], [47.0, 88.0], [49.0, 77.0], [48.0, 65.0], [51.0, 102.0], [53.0, 163.5], [52.0, 126.0], [55.0, 116.0], [58.0, 98.0], [59.0, 123.0], [61.0, 89.0], [63.0, 83.0], [66.0, 122.5], [65.0, 117.0], [69.0, 70.0], [72.0, 141.5], [73.0, 124.0], [74.0, 139.5], [76.0, 45.0], [81.0, 73.0], [82.0, 82.5], [88.0, 64.5], [1.0, 3534.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 45.0, "minX": 1.0, "maxY": 3534.0, "series": [{"data": [[2.0, 3355.0], [3.0, 3224.0], [4.0, 1724.0], [5.0, 1320.5], [6.0, 1323.0], [7.0, 979.0], [9.0, 730.0], [10.0, 804.0], [12.0, 149.5], [13.0, 694.0], [14.0, 665.0], [15.0, 644.5], [16.0, 573.0], [17.0, 551.5], [18.0, 501.0], [19.0, 309.0], [20.0, 505.5], [21.0, 432.0], [22.0, 396.0], [23.0, 403.0], [24.0, 355.0], [25.0, 328.5], [26.0, 89.0], [27.0, 314.0], [28.0, 313.5], [29.0, 280.0], [30.0, 186.5], [31.0, 125.0], [33.0, 250.0], [32.0, 127.5], [34.0, 207.0], [36.0, 201.5], [37.0, 136.5], [38.0, 64.0], [39.0, 112.5], [40.0, 83.5], [41.0, 89.0], [42.0, 141.0], [43.0, 73.0], [45.0, 112.5], [44.0, 169.0], [47.0, 88.0], [49.0, 77.0], [48.0, 65.0], [51.0, 102.0], [53.0, 162.5], [52.0, 126.0], [55.0, 116.0], [58.0, 98.0], [59.0, 123.0], [61.0, 88.5], [63.0, 82.5], [66.0, 122.0], [65.0, 117.0], [69.0, 70.0], [72.0, 140.5], [73.0, 123.0], [74.0, 139.5], [76.0, 45.0], [81.0, 73.0], [82.0, 82.5], [88.0, 64.0], [1.0, 3534.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60422618E12, "maxY": 38.35, "series": [{"data": [[1.60422624E12, 27.316666666666666], [1.6042263E12, 38.35], [1.60422618E12, 1.0833333333333333], [1.60422636E12, 20.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422636E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.9166666666666666, "minX": 1.60422618E12, "maxY": 38.35, "series": [{"data": [[1.60422624E12, 27.316666666666666], [1.6042263E12, 38.35], [1.60422618E12, 0.9166666666666666], [1.60422636E12, 21.116666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422636E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.9166666666666666, "minX": 1.60422618E12, "maxY": 38.35, "series": [{"data": [[1.60422624E12, 27.316666666666666], [1.6042263E12, 38.35], [1.60422618E12, 0.9166666666666666], [1.60422636E12, 21.116666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422636E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.9166666666666666, "minX": 1.60422618E12, "maxY": 38.35, "series": [{"data": [[1.60422624E12, 27.316666666666666], [1.6042263E12, 38.35], [1.60422618E12, 0.9166666666666666], [1.60422636E12, 21.116666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422636E12, "title": "Total Transactions Per Second"}},
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

