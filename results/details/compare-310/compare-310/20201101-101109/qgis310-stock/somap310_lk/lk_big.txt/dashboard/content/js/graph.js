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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3065.0, "series": [{"data": [[0.0, 29.0], [0.1, 31.0], [0.2, 33.0], [0.3, 34.0], [0.4, 34.0], [0.5, 34.0], [0.6, 35.0], [0.7, 35.0], [0.8, 35.0], [0.9, 36.0], [1.0, 36.0], [1.1, 36.0], [1.2, 36.0], [1.3, 37.0], [1.4, 37.0], [1.5, 37.0], [1.6, 37.0], [1.7, 37.0], [1.8, 37.0], [1.9, 37.0], [2.0, 37.0], [2.1, 38.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 38.0], [2.8, 38.0], [2.9, 38.0], [3.0, 38.0], [3.1, 39.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 39.0], [3.7, 39.0], [3.8, 39.0], [3.9, 39.0], [4.0, 40.0], [4.1, 40.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 40.0], [4.6, 40.0], [4.7, 40.0], [4.8, 40.0], [4.9, 40.0], [5.0, 40.0], [5.1, 40.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 40.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 42.0], [7.2, 42.0], [7.3, 42.0], [7.4, 42.0], [7.5, 42.0], [7.6, 42.0], [7.7, 42.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 43.0], [9.1, 43.0], [9.2, 43.0], [9.3, 43.0], [9.4, 43.0], [9.5, 43.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 44.0], [10.1, 44.0], [10.2, 44.0], [10.3, 44.0], [10.4, 44.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 44.0], [10.9, 44.0], [11.0, 45.0], [11.1, 45.0], [11.2, 45.0], [11.3, 45.0], [11.4, 45.0], [11.5, 45.0], [11.6, 45.0], [11.7, 45.0], [11.8, 45.0], [11.9, 45.0], [12.0, 45.0], [12.1, 45.0], [12.2, 45.0], [12.3, 46.0], [12.4, 46.0], [12.5, 46.0], [12.6, 46.0], [12.7, 46.0], [12.8, 46.0], [12.9, 46.0], [13.0, 46.0], [13.1, 46.0], [13.2, 47.0], [13.3, 47.0], [13.4, 47.0], [13.5, 47.0], [13.6, 47.0], [13.7, 47.0], [13.8, 47.0], [13.9, 47.0], [14.0, 47.0], [14.1, 47.0], [14.2, 47.0], [14.3, 48.0], [14.4, 48.0], [14.5, 48.0], [14.6, 48.0], [14.7, 48.0], [14.8, 48.0], [14.9, 48.0], [15.0, 48.0], [15.1, 48.0], [15.2, 48.0], [15.3, 48.0], [15.4, 49.0], [15.5, 49.0], [15.6, 49.0], [15.7, 49.0], [15.8, 49.0], [15.9, 49.0], [16.0, 50.0], [16.1, 50.0], [16.2, 50.0], [16.3, 50.0], [16.4, 50.0], [16.5, 50.0], [16.6, 50.0], [16.7, 50.0], [16.8, 50.0], [16.9, 51.0], [17.0, 51.0], [17.1, 51.0], [17.2, 51.0], [17.3, 51.0], [17.4, 51.0], [17.5, 52.0], [17.6, 52.0], [17.7, 52.0], [17.8, 52.0], [17.9, 52.0], [18.0, 52.0], [18.1, 53.0], [18.2, 53.0], [18.3, 53.0], [18.4, 53.0], [18.5, 53.0], [18.6, 54.0], [18.7, 54.0], [18.8, 54.0], [18.9, 54.0], [19.0, 55.0], [19.1, 55.0], [19.2, 55.0], [19.3, 55.0], [19.4, 56.0], [19.5, 56.0], [19.6, 56.0], [19.7, 56.0], [19.8, 57.0], [19.9, 57.0], [20.0, 57.0], [20.1, 57.0], [20.2, 57.0], [20.3, 58.0], [20.4, 58.0], [20.5, 58.0], [20.6, 58.0], [20.7, 59.0], [20.8, 59.0], [20.9, 59.0], [21.0, 60.0], [21.1, 60.0], [21.2, 60.0], [21.3, 61.0], [21.4, 61.0], [21.5, 61.0], [21.6, 61.0], [21.7, 62.0], [21.8, 62.0], [21.9, 62.0], [22.0, 63.0], [22.1, 63.0], [22.2, 63.0], [22.3, 63.0], [22.4, 63.0], [22.5, 64.0], [22.6, 64.0], [22.7, 64.0], [22.8, 64.0], [22.9, 64.0], [23.0, 65.0], [23.1, 65.0], [23.2, 65.0], [23.3, 65.0], [23.4, 66.0], [23.5, 66.0], [23.6, 66.0], [23.7, 66.0], [23.8, 66.0], [23.9, 67.0], [24.0, 67.0], [24.1, 67.0], [24.2, 67.0], [24.3, 67.0], [24.4, 67.0], [24.5, 68.0], [24.6, 68.0], [24.7, 68.0], [24.8, 68.0], [24.9, 68.0], [25.0, 69.0], [25.1, 69.0], [25.2, 69.0], [25.3, 69.0], [25.4, 70.0], [25.5, 70.0], [25.6, 70.0], [25.7, 70.0], [25.8, 71.0], [25.9, 71.0], [26.0, 71.0], [26.1, 71.0], [26.2, 71.0], [26.3, 71.0], [26.4, 72.0], [26.5, 72.0], [26.6, 72.0], [26.7, 73.0], [26.8, 73.0], [26.9, 73.0], [27.0, 73.0], [27.1, 73.0], [27.2, 73.0], [27.3, 73.0], [27.4, 74.0], [27.5, 74.0], [27.6, 74.0], [27.7, 74.0], [27.8, 74.0], [27.9, 74.0], [28.0, 75.0], [28.1, 75.0], [28.2, 75.0], [28.3, 75.0], [28.4, 75.0], [28.5, 75.0], [28.6, 75.0], [28.7, 76.0], [28.8, 76.0], [28.9, 76.0], [29.0, 76.0], [29.1, 76.0], [29.2, 76.0], [29.3, 76.0], [29.4, 76.0], [29.5, 77.0], [29.6, 77.0], [29.7, 77.0], [29.8, 77.0], [29.9, 77.0], [30.0, 78.0], [30.1, 78.0], [30.2, 78.0], [30.3, 78.0], [30.4, 78.0], [30.5, 79.0], [30.6, 79.0], [30.7, 79.0], [30.8, 79.0], [30.9, 79.0], [31.0, 80.0], [31.1, 80.0], [31.2, 80.0], [31.3, 80.0], [31.4, 80.0], [31.5, 80.0], [31.6, 80.0], [31.7, 81.0], [31.8, 81.0], [31.9, 81.0], [32.0, 81.0], [32.1, 81.0], [32.2, 81.0], [32.3, 81.0], [32.4, 82.0], [32.5, 82.0], [32.6, 82.0], [32.7, 82.0], [32.8, 82.0], [32.9, 82.0], [33.0, 82.0], [33.1, 83.0], [33.2, 83.0], [33.3, 83.0], [33.4, 83.0], [33.5, 83.0], [33.6, 83.0], [33.7, 84.0], [33.8, 84.0], [33.9, 84.0], [34.0, 84.0], [34.1, 84.0], [34.2, 85.0], [34.3, 85.0], [34.4, 85.0], [34.5, 85.0], [34.6, 85.0], [34.7, 85.0], [34.8, 85.0], [34.9, 85.0], [35.0, 85.0], [35.1, 85.0], [35.2, 86.0], [35.3, 86.0], [35.4, 86.0], [35.5, 87.0], [35.6, 87.0], [35.7, 87.0], [35.8, 87.0], [35.9, 87.0], [36.0, 87.0], [36.1, 88.0], [36.2, 88.0], [36.3, 88.0], [36.4, 88.0], [36.5, 88.0], [36.6, 88.0], [36.7, 89.0], [36.8, 89.0], [36.9, 89.0], [37.0, 89.0], [37.1, 90.0], [37.2, 90.0], [37.3, 90.0], [37.4, 90.0], [37.5, 91.0], [37.6, 91.0], [37.7, 91.0], [37.8, 91.0], [37.9, 92.0], [38.0, 92.0], [38.1, 92.0], [38.2, 93.0], [38.3, 93.0], [38.4, 94.0], [38.5, 94.0], [38.6, 94.0], [38.7, 95.0], [38.8, 95.0], [38.9, 96.0], [39.0, 96.0], [39.1, 96.0], [39.2, 97.0], [39.3, 97.0], [39.4, 97.0], [39.5, 98.0], [39.6, 99.0], [39.7, 99.0], [39.8, 99.0], [39.9, 100.0], [40.0, 100.0], [40.1, 101.0], [40.2, 101.0], [40.3, 102.0], [40.4, 104.0], [40.5, 104.0], [40.6, 105.0], [40.7, 105.0], [40.8, 106.0], [40.9, 106.0], [41.0, 107.0], [41.1, 107.0], [41.2, 108.0], [41.3, 109.0], [41.4, 110.0], [41.5, 111.0], [41.6, 112.0], [41.7, 112.0], [41.8, 113.0], [41.9, 113.0], [42.0, 114.0], [42.1, 114.0], [42.2, 115.0], [42.3, 115.0], [42.4, 116.0], [42.5, 116.0], [42.6, 116.0], [42.7, 117.0], [42.8, 117.0], [42.9, 118.0], [43.0, 118.0], [43.1, 119.0], [43.2, 119.0], [43.3, 120.0], [43.4, 120.0], [43.5, 121.0], [43.6, 121.0], [43.7, 122.0], [43.8, 122.0], [43.9, 123.0], [44.0, 123.0], [44.1, 124.0], [44.2, 125.0], [44.3, 125.0], [44.4, 126.0], [44.5, 126.0], [44.6, 127.0], [44.7, 127.0], [44.8, 127.0], [44.9, 127.0], [45.0, 128.0], [45.1, 129.0], [45.2, 130.0], [45.3, 131.0], [45.4, 131.0], [45.5, 132.0], [45.6, 133.0], [45.7, 134.0], [45.8, 135.0], [45.9, 136.0], [46.0, 137.0], [46.1, 137.0], [46.2, 138.0], [46.3, 140.0], [46.4, 140.0], [46.5, 141.0], [46.6, 142.0], [46.7, 143.0], [46.8, 144.0], [46.9, 144.0], [47.0, 146.0], [47.1, 146.0], [47.2, 147.0], [47.3, 148.0], [47.4, 149.0], [47.5, 151.0], [47.6, 151.0], [47.7, 152.0], [47.8, 153.0], [47.9, 154.0], [48.0, 155.0], [48.1, 156.0], [48.2, 157.0], [48.3, 158.0], [48.4, 159.0], [48.5, 161.0], [48.6, 162.0], [48.7, 163.0], [48.8, 164.0], [48.9, 165.0], [49.0, 166.0], [49.1, 167.0], [49.2, 169.0], [49.3, 169.0], [49.4, 170.0], [49.5, 172.0], [49.6, 173.0], [49.7, 175.0], [49.8, 175.0], [49.9, 176.0], [50.0, 178.0], [50.1, 179.0], [50.2, 180.0], [50.3, 181.0], [50.4, 182.0], [50.5, 183.0], [50.6, 184.0], [50.7, 184.0], [50.8, 186.0], [50.9, 187.0], [51.0, 188.0], [51.1, 189.0], [51.2, 191.0], [51.3, 192.0], [51.4, 193.0], [51.5, 194.0], [51.6, 194.0], [51.7, 194.0], [51.8, 195.0], [51.9, 196.0], [52.0, 197.0], [52.1, 198.0], [52.2, 198.0], [52.3, 199.0], [52.4, 201.0], [52.5, 201.0], [52.6, 203.0], [52.7, 203.0], [52.8, 204.0], [52.9, 205.0], [53.0, 206.0], [53.1, 207.0], [53.2, 207.0], [53.3, 208.0], [53.4, 209.0], [53.5, 209.0], [53.6, 210.0], [53.7, 211.0], [53.8, 211.0], [53.9, 213.0], [54.0, 213.0], [54.1, 214.0], [54.2, 215.0], [54.3, 215.0], [54.4, 216.0], [54.5, 217.0], [54.6, 218.0], [54.7, 219.0], [54.8, 219.0], [54.9, 220.0], [55.0, 221.0], [55.1, 223.0], [55.2, 224.0], [55.3, 225.0], [55.4, 226.0], [55.5, 226.0], [55.6, 228.0], [55.7, 229.0], [55.8, 230.0], [55.9, 232.0], [56.0, 232.0], [56.1, 233.0], [56.2, 234.0], [56.3, 235.0], [56.4, 236.0], [56.5, 237.0], [56.6, 238.0], [56.7, 238.0], [56.8, 239.0], [56.9, 241.0], [57.0, 241.0], [57.1, 242.0], [57.2, 243.0], [57.3, 245.0], [57.4, 246.0], [57.5, 246.0], [57.6, 247.0], [57.7, 248.0], [57.8, 249.0], [57.9, 250.0], [58.0, 250.0], [58.1, 251.0], [58.2, 252.0], [58.3, 254.0], [58.4, 256.0], [58.5, 257.0], [58.6, 258.0], [58.7, 260.0], [58.8, 261.0], [58.9, 261.0], [59.0, 262.0], [59.1, 262.0], [59.2, 263.0], [59.3, 264.0], [59.4, 265.0], [59.5, 266.0], [59.6, 267.0], [59.7, 268.0], [59.8, 270.0], [59.9, 271.0], [60.0, 272.0], [60.1, 272.0], [60.2, 274.0], [60.3, 277.0], [60.4, 277.0], [60.5, 278.0], [60.6, 279.0], [60.7, 280.0], [60.8, 280.0], [60.9, 281.0], [61.0, 282.0], [61.1, 283.0], [61.2, 283.0], [61.3, 284.0], [61.4, 285.0], [61.5, 285.0], [61.6, 286.0], [61.7, 287.0], [61.8, 288.0], [61.9, 289.0], [62.0, 290.0], [62.1, 291.0], [62.2, 292.0], [62.3, 292.0], [62.4, 293.0], [62.5, 295.0], [62.6, 296.0], [62.7, 296.0], [62.8, 297.0], [62.9, 298.0], [63.0, 300.0], [63.1, 301.0], [63.2, 305.0], [63.3, 306.0], [63.4, 307.0], [63.5, 308.0], [63.6, 309.0], [63.7, 312.0], [63.8, 313.0], [63.9, 314.0], [64.0, 316.0], [64.1, 317.0], [64.2, 319.0], [64.3, 319.0], [64.4, 320.0], [64.5, 323.0], [64.6, 324.0], [64.7, 326.0], [64.8, 326.0], [64.9, 328.0], [65.0, 330.0], [65.1, 331.0], [65.2, 332.0], [65.3, 333.0], [65.4, 335.0], [65.5, 336.0], [65.6, 337.0], [65.7, 340.0], [65.8, 340.0], [65.9, 343.0], [66.0, 345.0], [66.1, 346.0], [66.2, 347.0], [66.3, 350.0], [66.4, 351.0], [66.5, 353.0], [66.6, 355.0], [66.7, 356.0], [66.8, 358.0], [66.9, 359.0], [67.0, 361.0], [67.1, 362.0], [67.2, 364.0], [67.3, 364.0], [67.4, 366.0], [67.5, 367.0], [67.6, 371.0], [67.7, 372.0], [67.8, 373.0], [67.9, 374.0], [68.0, 376.0], [68.1, 377.0], [68.2, 380.0], [68.3, 383.0], [68.4, 385.0], [68.5, 386.0], [68.6, 387.0], [68.7, 388.0], [68.8, 389.0], [68.9, 390.0], [69.0, 391.0], [69.1, 393.0], [69.2, 394.0], [69.3, 395.0], [69.4, 397.0], [69.5, 399.0], [69.6, 400.0], [69.7, 401.0], [69.8, 402.0], [69.9, 405.0], [70.0, 406.0], [70.1, 407.0], [70.2, 410.0], [70.3, 411.0], [70.4, 412.0], [70.5, 413.0], [70.6, 415.0], [70.7, 417.0], [70.8, 418.0], [70.9, 419.0], [71.0, 420.0], [71.1, 421.0], [71.2, 422.0], [71.3, 422.0], [71.4, 424.0], [71.5, 426.0], [71.6, 427.0], [71.7, 428.0], [71.8, 429.0], [71.9, 430.0], [72.0, 432.0], [72.1, 433.0], [72.2, 435.0], [72.3, 436.0], [72.4, 438.0], [72.5, 440.0], [72.6, 443.0], [72.7, 444.0], [72.8, 446.0], [72.9, 447.0], [73.0, 448.0], [73.1, 449.0], [73.2, 449.0], [73.3, 451.0], [73.4, 452.0], [73.5, 453.0], [73.6, 454.0], [73.7, 457.0], [73.8, 458.0], [73.9, 460.0], [74.0, 462.0], [74.1, 464.0], [74.2, 465.0], [74.3, 466.0], [74.4, 468.0], [74.5, 470.0], [74.6, 471.0], [74.7, 472.0], [74.8, 473.0], [74.9, 474.0], [75.0, 476.0], [75.1, 478.0], [75.2, 479.0], [75.3, 481.0], [75.4, 483.0], [75.5, 484.0], [75.6, 485.0], [75.7, 487.0], [75.8, 489.0], [75.9, 490.0], [76.0, 493.0], [76.1, 494.0], [76.2, 495.0], [76.3, 498.0], [76.4, 498.0], [76.5, 501.0], [76.6, 502.0], [76.7, 505.0], [76.8, 508.0], [76.9, 508.0], [77.0, 510.0], [77.1, 511.0], [77.2, 512.0], [77.3, 513.0], [77.4, 514.0], [77.5, 516.0], [77.6, 517.0], [77.7, 518.0], [77.8, 520.0], [77.9, 521.0], [78.0, 522.0], [78.1, 523.0], [78.2, 524.0], [78.3, 526.0], [78.4, 527.0], [78.5, 529.0], [78.6, 531.0], [78.7, 534.0], [78.8, 536.0], [78.9, 539.0], [79.0, 539.0], [79.1, 540.0], [79.2, 543.0], [79.3, 545.0], [79.4, 546.0], [79.5, 548.0], [79.6, 549.0], [79.7, 550.0], [79.8, 553.0], [79.9, 554.0], [80.0, 556.0], [80.1, 559.0], [80.2, 561.0], [80.3, 564.0], [80.4, 565.0], [80.5, 566.0], [80.6, 568.0], [80.7, 569.0], [80.8, 572.0], [80.9, 573.0], [81.0, 574.0], [81.1, 576.0], [81.2, 577.0], [81.3, 579.0], [81.4, 583.0], [81.5, 584.0], [81.6, 585.0], [81.7, 588.0], [81.8, 589.0], [81.9, 591.0], [82.0, 593.0], [82.1, 595.0], [82.2, 597.0], [82.3, 601.0], [82.4, 602.0], [82.5, 604.0], [82.6, 605.0], [82.7, 607.0], [82.8, 610.0], [82.9, 612.0], [83.0, 614.0], [83.1, 618.0], [83.2, 620.0], [83.3, 624.0], [83.4, 627.0], [83.5, 628.0], [83.6, 631.0], [83.7, 634.0], [83.8, 635.0], [83.9, 637.0], [84.0, 640.0], [84.1, 641.0], [84.2, 643.0], [84.3, 644.0], [84.4, 646.0], [84.5, 647.0], [84.6, 648.0], [84.7, 649.0], [84.8, 651.0], [84.9, 653.0], [85.0, 655.0], [85.1, 657.0], [85.2, 660.0], [85.3, 660.0], [85.4, 664.0], [85.5, 669.0], [85.6, 672.0], [85.7, 674.0], [85.8, 676.0], [85.9, 677.0], [86.0, 681.0], [86.1, 683.0], [86.2, 684.0], [86.3, 687.0], [86.4, 689.0], [86.5, 692.0], [86.6, 692.0], [86.7, 694.0], [86.8, 695.0], [86.9, 697.0], [87.0, 700.0], [87.1, 703.0], [87.2, 707.0], [87.3, 709.0], [87.4, 713.0], [87.5, 718.0], [87.6, 720.0], [87.7, 722.0], [87.8, 723.0], [87.9, 725.0], [88.0, 728.0], [88.1, 732.0], [88.2, 734.0], [88.3, 736.0], [88.4, 738.0], [88.5, 742.0], [88.6, 745.0], [88.7, 748.0], [88.8, 753.0], [88.9, 755.0], [89.0, 757.0], [89.1, 760.0], [89.2, 764.0], [89.3, 767.0], [89.4, 771.0], [89.5, 777.0], [89.6, 781.0], [89.7, 784.0], [89.8, 788.0], [89.9, 791.0], [90.0, 792.0], [90.1, 798.0], [90.2, 804.0], [90.3, 805.0], [90.4, 808.0], [90.5, 817.0], [90.6, 822.0], [90.7, 824.0], [90.8, 827.0], [90.9, 831.0], [91.0, 837.0], [91.1, 845.0], [91.2, 848.0], [91.3, 853.0], [91.4, 855.0], [91.5, 860.0], [91.6, 866.0], [91.7, 868.0], [91.8, 872.0], [91.9, 877.0], [92.0, 882.0], [92.1, 888.0], [92.2, 895.0], [92.3, 899.0], [92.4, 910.0], [92.5, 919.0], [92.6, 926.0], [92.7, 929.0], [92.8, 936.0], [92.9, 941.0], [93.0, 944.0], [93.1, 950.0], [93.2, 959.0], [93.3, 962.0], [93.4, 964.0], [93.5, 970.0], [93.6, 977.0], [93.7, 986.0], [93.8, 991.0], [93.9, 997.0], [94.0, 1003.0], [94.1, 1012.0], [94.2, 1015.0], [94.3, 1022.0], [94.4, 1025.0], [94.5, 1029.0], [94.6, 1035.0], [94.7, 1040.0], [94.8, 1045.0], [94.9, 1052.0], [95.0, 1061.0], [95.1, 1073.0], [95.2, 1085.0], [95.3, 1089.0], [95.4, 1096.0], [95.5, 1101.0], [95.6, 1110.0], [95.7, 1116.0], [95.8, 1124.0], [95.9, 1132.0], [96.0, 1141.0], [96.1, 1155.0], [96.2, 1165.0], [96.3, 1168.0], [96.4, 1177.0], [96.5, 1187.0], [96.6, 1201.0], [96.7, 1215.0], [96.8, 1227.0], [96.9, 1239.0], [97.0, 1250.0], [97.1, 1273.0], [97.2, 1290.0], [97.3, 1302.0], [97.4, 1317.0], [97.5, 1326.0], [97.6, 1333.0], [97.7, 1346.0], [97.8, 1360.0], [97.9, 1386.0], [98.0, 1401.0], [98.1, 1419.0], [98.2, 1442.0], [98.3, 1458.0], [98.4, 1474.0], [98.5, 1499.0], [98.6, 1528.0], [98.7, 1558.0], [98.8, 1598.0], [98.9, 1637.0], [99.0, 1667.0], [99.1, 1701.0], [99.2, 1755.0], [99.3, 1836.0], [99.4, 1935.0], [99.5, 2022.0], [99.6, 2078.0], [99.7, 2132.0], [99.8, 2191.0], [99.9, 2330.0], [100.0, 3065.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2096.0, "series": [{"data": [[0.0, 2096.0], [600.0, 249.0], [700.0, 166.0], [800.0, 114.0], [900.0, 87.0], [1000.0, 80.0], [1100.0, 59.0], [1200.0, 36.0], [1300.0, 35.0], [1400.0, 30.0], [1500.0, 15.0], [100.0, 657.0], [1600.0, 14.0], [1700.0, 9.0], [1800.0, 8.0], [1900.0, 3.0], [2000.0, 11.0], [2100.0, 8.0], [2200.0, 4.0], [2300.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [2900.0, 1.0], [3000.0, 2.0], [200.0, 562.0], [300.0, 344.0], [400.0, 365.0], [500.0, 304.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 78.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4025.0, "series": [{"data": [[0.0, 4025.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1159.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 78.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.932432432432433, "minX": 1.60422546E12, "maxY": 10.0, "series": [{"data": [[1.60422546E12, 9.96809986130375], [1.60422564E12, 9.932432432432433], [1.60422552E12, 10.0], [1.60422558E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422564E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 322.3431185665269, "minX": 1.0, "maxY": 3014.0, "series": [{"data": [[4.0, 739.0], [8.0, 1612.0], [2.0, 2114.0], [1.0, 2853.0], [9.0, 450.3333333333333], [5.0, 825.3333333333334], [10.0, 322.3431185665269], [6.0, 2158.0], [3.0, 3014.0], [7.0, 612.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98707715697455, 325.1432915241355]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5888.866666666667, "minX": 1.60422546E12, "maxY": 1570943.3166666667, "series": [{"data": [[1.60422546E12, 563480.6166666667], [1.60422564E12, 577406.05], [1.60422552E12, 1570943.3166666667], [1.60422558E12, 1539068.6333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422546E12, 6177.183333333333], [1.60422564E12, 5888.866666666667], [1.60422552E12, 15708.516666666666], [1.60422558E12, 17716.383333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422564E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 296.60000000000025, "minX": 1.60422546E12, "maxY": 387.98198198198156, "series": [{"data": [[1.60422546E12, 348.16643550624144], [1.60422564E12, 387.98198198198156], [1.60422552E12, 324.79189189189117], [1.60422558E12, 296.60000000000025]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422564E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 296.2316049382714, "minX": 1.60422546E12, "maxY": 387.53453453453466, "series": [{"data": [[1.60422546E12, 347.69348127600534], [1.60422564E12, 387.53453453453466], [1.60422552E12, 324.29351351351414], [1.60422558E12, 296.2316049382714]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422564E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009382716049382725, "minX": 1.60422546E12, "maxY": 0.12898751733703176, "series": [{"data": [[1.60422546E12, 0.12898751733703176], [1.60422564E12, 0.010510510510510513], [1.60422552E12, 0.018918918918918923], [1.60422558E12, 0.009382716049382725]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422564E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60422546E12, "maxY": 3065.0, "series": [{"data": [[1.60422546E12, 1721.0], [1.60422564E12, 3065.0], [1.60422552E12, 2243.0], [1.60422558E12, 2937.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422546E12, 37.49799982786179], [1.60422564E12, 37.0], [1.60422552E12, 35.0], [1.60422558E12, 35.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422546E12, 38.0], [1.60422564E12, 37.0], [1.60422552E12, 35.32490017652512], [1.60422558E12, 35.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422546E12, 37.858999913930894], [1.60422564E12, 37.0], [1.60422552E12, 35.0], [1.60422558E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422546E12, 34.0], [1.60422564E12, 32.0], [1.60422552E12, 30.0], [1.60422558E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422546E12, 261.0], [1.60422564E12, 237.5], [1.60422552E12, 161.0], [1.60422558E12, 148.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422564E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 56.0, "minX": 1.0, "maxY": 2564.0, "series": [{"data": [[2.0, 2564.0], [5.0, 1503.0], [6.0, 1144.5], [7.0, 1265.0], [8.0, 927.0], [9.0, 1062.5], [10.0, 685.0], [11.0, 685.0], [12.0, 708.5], [13.0, 371.0], [14.0, 653.5], [15.0, 641.0], [16.0, 529.5], [17.0, 641.0], [18.0, 408.5], [19.0, 450.0], [20.0, 395.0], [21.0, 400.0], [22.0, 369.0], [23.0, 292.5], [24.0, 341.5], [25.0, 386.5], [26.0, 438.0], [27.0, 281.5], [28.0, 337.5], [29.0, 278.0], [30.0, 223.0], [31.0, 98.0], [32.0, 90.0], [33.0, 273.5], [34.0, 83.5], [36.0, 169.0], [37.0, 232.0], [38.0, 99.0], [39.0, 97.0], [41.0, 88.0], [40.0, 176.5], [42.0, 87.0], [43.0, 114.0], [45.0, 238.0], [46.0, 72.0], [47.0, 194.0], [49.0, 88.0], [48.0, 107.0], [50.0, 92.0], [52.0, 86.5], [53.0, 98.0], [55.0, 96.0], [57.0, 103.0], [58.0, 75.0], [60.0, 129.5], [63.0, 97.0], [66.0, 135.5], [68.0, 141.5], [69.0, 106.0], [71.0, 56.0], [72.0, 84.5], [74.0, 87.0], [77.0, 83.0], [78.0, 88.0], [79.0, 116.0], [91.0, 59.0], [97.0, 75.0], [1.0, 1500.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 56.0, "minX": 1.0, "maxY": 2563.5, "series": [{"data": [[2.0, 2563.5], [5.0, 1502.5], [6.0, 1144.5], [7.0, 1264.0], [8.0, 926.0], [9.0, 1061.0], [10.0, 682.5], [11.0, 685.0], [12.0, 708.0], [13.0, 368.0], [14.0, 651.5], [15.0, 639.0], [16.0, 528.0], [17.0, 636.0], [18.0, 408.0], [19.0, 449.0], [20.0, 393.0], [21.0, 399.0], [22.0, 369.0], [23.0, 290.5], [24.0, 341.0], [25.0, 386.5], [26.0, 438.0], [27.0, 281.5], [28.0, 337.5], [29.0, 278.0], [30.0, 221.5], [31.0, 98.0], [32.0, 90.0], [33.0, 273.5], [34.0, 83.5], [36.0, 169.0], [37.0, 232.0], [38.0, 99.0], [39.0, 97.0], [41.0, 87.0], [40.0, 176.5], [42.0, 87.0], [43.0, 114.0], [45.0, 238.0], [46.0, 72.0], [47.0, 194.0], [49.0, 87.5], [48.0, 107.0], [50.0, 91.5], [52.0, 86.0], [53.0, 98.0], [55.0, 96.0], [57.0, 103.0], [58.0, 75.0], [60.0, 129.5], [63.0, 97.0], [66.0, 135.5], [68.0, 141.0], [69.0, 105.0], [71.0, 56.0], [72.0, 84.0], [74.0, 87.0], [77.0, 83.0], [78.0, 88.0], [79.0, 116.0], [91.0, 59.0], [97.0, 75.0], [1.0, 1497.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.933333333333334, "minX": 1.60422546E12, "maxY": 33.75, "series": [{"data": [[1.60422546E12, 12.183333333333334], [1.60422564E12, 10.933333333333334], [1.60422552E12, 30.833333333333332], [1.60422558E12, 33.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422564E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.1, "minX": 1.60422546E12, "maxY": 33.75, "series": [{"data": [[1.60422546E12, 12.016666666666667], [1.60422564E12, 11.1], [1.60422552E12, 30.833333333333332], [1.60422558E12, 33.75]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422564E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.1, "minX": 1.60422546E12, "maxY": 33.75, "series": [{"data": [[1.60422546E12, 12.016666666666667], [1.60422564E12, 11.1], [1.60422552E12, 30.833333333333332], [1.60422558E12, 33.75]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422564E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.1, "minX": 1.60422546E12, "maxY": 33.75, "series": [{"data": [[1.60422546E12, 12.016666666666667], [1.60422564E12, 11.1], [1.60422552E12, 30.833333333333332], [1.60422558E12, 33.75]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422564E12, "title": "Total Transactions Per Second"}},
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

