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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 3754.0, "series": [{"data": [[0.0, 31.0], [0.1, 32.0], [0.2, 33.0], [0.3, 34.0], [0.4, 34.0], [0.5, 35.0], [0.6, 35.0], [0.7, 36.0], [0.8, 36.0], [0.9, 36.0], [1.0, 36.0], [1.1, 37.0], [1.2, 37.0], [1.3, 37.0], [1.4, 37.0], [1.5, 37.0], [1.6, 37.0], [1.7, 38.0], [1.8, 38.0], [1.9, 38.0], [2.0, 38.0], [2.1, 38.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 39.0], [2.8, 39.0], [2.9, 39.0], [3.0, 39.0], [3.1, 39.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 39.0], [3.7, 39.0], [3.8, 39.0], [3.9, 39.0], [4.0, 39.0], [4.1, 40.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 40.0], [4.6, 40.0], [4.7, 40.0], [4.8, 40.0], [4.9, 40.0], [5.0, 40.0], [5.1, 40.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 40.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 42.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 42.0], [9.2, 42.0], [9.3, 42.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 43.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 43.0], [10.4, 43.0], [10.5, 43.0], [10.6, 43.0], [10.7, 43.0], [10.8, 43.0], [10.9, 43.0], [11.0, 43.0], [11.1, 43.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 44.0], [11.6, 44.0], [11.7, 44.0], [11.8, 44.0], [11.9, 44.0], [12.0, 44.0], [12.1, 44.0], [12.2, 44.0], [12.3, 44.0], [12.4, 44.0], [12.5, 44.0], [12.6, 45.0], [12.7, 45.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 45.0], [13.3, 45.0], [13.4, 45.0], [13.5, 45.0], [13.6, 45.0], [13.7, 45.0], [13.8, 45.0], [13.9, 45.0], [14.0, 46.0], [14.1, 46.0], [14.2, 46.0], [14.3, 46.0], [14.4, 46.0], [14.5, 46.0], [14.6, 46.0], [14.7, 46.0], [14.8, 46.0], [14.9, 46.0], [15.0, 46.0], [15.1, 47.0], [15.2, 47.0], [15.3, 47.0], [15.4, 47.0], [15.5, 47.0], [15.6, 47.0], [15.7, 47.0], [15.8, 47.0], [15.9, 47.0], [16.0, 47.0], [16.1, 47.0], [16.2, 47.0], [16.3, 48.0], [16.4, 48.0], [16.5, 48.0], [16.6, 48.0], [16.7, 48.0], [16.8, 48.0], [16.9, 48.0], [17.0, 48.0], [17.1, 48.0], [17.2, 49.0], [17.3, 49.0], [17.4, 49.0], [17.5, 49.0], [17.6, 49.0], [17.7, 49.0], [17.8, 49.0], [17.9, 49.0], [18.0, 50.0], [18.1, 50.0], [18.2, 50.0], [18.3, 50.0], [18.4, 50.0], [18.5, 51.0], [18.6, 51.0], [18.7, 51.0], [18.8, 51.0], [18.9, 51.0], [19.0, 51.0], [19.1, 52.0], [19.2, 52.0], [19.3, 52.0], [19.4, 52.0], [19.5, 53.0], [19.6, 53.0], [19.7, 53.0], [19.8, 53.0], [19.9, 54.0], [20.0, 54.0], [20.1, 54.0], [20.2, 54.0], [20.3, 54.0], [20.4, 55.0], [20.5, 55.0], [20.6, 55.0], [20.7, 55.0], [20.8, 56.0], [20.9, 56.0], [21.0, 56.0], [21.1, 57.0], [21.2, 57.0], [21.3, 57.0], [21.4, 58.0], [21.5, 58.0], [21.6, 58.0], [21.7, 59.0], [21.8, 59.0], [21.9, 59.0], [22.0, 59.0], [22.1, 60.0], [22.2, 60.0], [22.3, 60.0], [22.4, 60.0], [22.5, 61.0], [22.6, 61.0], [22.7, 61.0], [22.8, 62.0], [22.9, 63.0], [23.0, 63.0], [23.1, 63.0], [23.2, 64.0], [23.3, 64.0], [23.4, 65.0], [23.5, 65.0], [23.6, 65.0], [23.7, 66.0], [23.8, 66.0], [23.9, 66.0], [24.0, 67.0], [24.1, 68.0], [24.2, 69.0], [24.3, 69.0], [24.4, 69.0], [24.5, 70.0], [24.6, 70.0], [24.7, 70.0], [24.8, 71.0], [24.9, 71.0], [25.0, 72.0], [25.1, 72.0], [25.2, 72.0], [25.3, 72.0], [25.4, 72.0], [25.5, 73.0], [25.6, 73.0], [25.7, 73.0], [25.8, 73.0], [25.9, 73.0], [26.0, 74.0], [26.1, 74.0], [26.2, 74.0], [26.3, 74.0], [26.4, 74.0], [26.5, 74.0], [26.6, 74.0], [26.7, 75.0], [26.8, 75.0], [26.9, 75.0], [27.0, 75.0], [27.1, 75.0], [27.2, 76.0], [27.3, 76.0], [27.4, 76.0], [27.5, 76.0], [27.6, 76.0], [27.7, 76.0], [27.8, 76.0], [27.9, 76.0], [28.0, 77.0], [28.1, 77.0], [28.2, 77.0], [28.3, 77.0], [28.4, 77.0], [28.5, 77.0], [28.6, 77.0], [28.7, 77.0], [28.8, 78.0], [28.9, 78.0], [29.0, 78.0], [29.1, 78.0], [29.2, 78.0], [29.3, 78.0], [29.4, 78.0], [29.5, 78.0], [29.6, 79.0], [29.7, 79.0], [29.8, 79.0], [29.9, 79.0], [30.0, 79.0], [30.1, 79.0], [30.2, 79.0], [30.3, 79.0], [30.4, 79.0], [30.5, 79.0], [30.6, 79.0], [30.7, 80.0], [30.8, 80.0], [30.9, 80.0], [31.0, 80.0], [31.1, 80.0], [31.2, 80.0], [31.3, 80.0], [31.4, 80.0], [31.5, 80.0], [31.6, 81.0], [31.7, 81.0], [31.8, 81.0], [31.9, 81.0], [32.0, 81.0], [32.1, 81.0], [32.2, 82.0], [32.3, 82.0], [32.4, 82.0], [32.5, 82.0], [32.6, 82.0], [32.7, 83.0], [32.8, 83.0], [32.9, 83.0], [33.0, 83.0], [33.1, 83.0], [33.2, 83.0], [33.3, 83.0], [33.4, 84.0], [33.5, 84.0], [33.6, 84.0], [33.7, 84.0], [33.8, 84.0], [33.9, 84.0], [34.0, 84.0], [34.1, 85.0], [34.2, 85.0], [34.3, 85.0], [34.4, 85.0], [34.5, 85.0], [34.6, 85.0], [34.7, 86.0], [34.8, 86.0], [34.9, 86.0], [35.0, 86.0], [35.1, 86.0], [35.2, 86.0], [35.3, 87.0], [35.4, 87.0], [35.5, 87.0], [35.6, 87.0], [35.7, 87.0], [35.8, 88.0], [35.9, 88.0], [36.0, 88.0], [36.1, 88.0], [36.2, 88.0], [36.3, 88.0], [36.4, 89.0], [36.5, 89.0], [36.6, 89.0], [36.7, 89.0], [36.8, 89.0], [36.9, 89.0], [37.0, 90.0], [37.1, 90.0], [37.2, 90.0], [37.3, 90.0], [37.4, 91.0], [37.5, 91.0], [37.6, 91.0], [37.7, 92.0], [37.8, 92.0], [37.9, 92.0], [38.0, 93.0], [38.1, 93.0], [38.2, 94.0], [38.3, 94.0], [38.4, 94.0], [38.5, 95.0], [38.6, 95.0], [38.7, 96.0], [38.8, 96.0], [38.9, 96.0], [39.0, 97.0], [39.1, 97.0], [39.2, 98.0], [39.3, 98.0], [39.4, 98.0], [39.5, 99.0], [39.6, 99.0], [39.7, 99.0], [39.8, 100.0], [39.9, 100.0], [40.0, 100.0], [40.1, 101.0], [40.2, 102.0], [40.3, 102.0], [40.4, 102.0], [40.5, 103.0], [40.6, 104.0], [40.7, 104.0], [40.8, 105.0], [40.9, 106.0], [41.0, 106.0], [41.1, 107.0], [41.2, 108.0], [41.3, 109.0], [41.4, 110.0], [41.5, 110.0], [41.6, 110.0], [41.7, 112.0], [41.8, 112.0], [41.9, 113.0], [42.0, 114.0], [42.1, 114.0], [42.2, 115.0], [42.3, 116.0], [42.4, 117.0], [42.5, 117.0], [42.6, 117.0], [42.7, 118.0], [42.8, 118.0], [42.9, 118.0], [43.0, 119.0], [43.1, 119.0], [43.2, 120.0], [43.3, 120.0], [43.4, 121.0], [43.5, 122.0], [43.6, 123.0], [43.7, 123.0], [43.8, 124.0], [43.9, 124.0], [44.0, 125.0], [44.1, 126.0], [44.2, 127.0], [44.3, 129.0], [44.4, 129.0], [44.5, 131.0], [44.6, 132.0], [44.7, 134.0], [44.8, 135.0], [44.9, 136.0], [45.0, 136.0], [45.1, 139.0], [45.2, 140.0], [45.3, 141.0], [45.4, 142.0], [45.5, 143.0], [45.6, 145.0], [45.7, 145.0], [45.8, 147.0], [45.9, 148.0], [46.0, 149.0], [46.1, 150.0], [46.2, 152.0], [46.3, 154.0], [46.4, 155.0], [46.5, 156.0], [46.6, 157.0], [46.7, 158.0], [46.8, 159.0], [46.9, 160.0], [47.0, 162.0], [47.1, 163.0], [47.2, 163.0], [47.3, 165.0], [47.4, 166.0], [47.5, 167.0], [47.6, 167.0], [47.7, 168.0], [47.8, 169.0], [47.9, 170.0], [48.0, 171.0], [48.1, 172.0], [48.2, 173.0], [48.3, 174.0], [48.4, 176.0], [48.5, 178.0], [48.6, 178.0], [48.7, 179.0], [48.8, 181.0], [48.9, 182.0], [49.0, 183.0], [49.1, 184.0], [49.2, 185.0], [49.3, 187.0], [49.4, 188.0], [49.5, 189.0], [49.6, 190.0], [49.7, 190.0], [49.8, 193.0], [49.9, 193.0], [50.0, 194.0], [50.1, 195.0], [50.2, 196.0], [50.3, 198.0], [50.4, 199.0], [50.5, 200.0], [50.6, 200.0], [50.7, 201.0], [50.8, 203.0], [50.9, 203.0], [51.0, 205.0], [51.1, 206.0], [51.2, 207.0], [51.3, 207.0], [51.4, 208.0], [51.5, 209.0], [51.6, 210.0], [51.7, 212.0], [51.8, 213.0], [51.9, 214.0], [52.0, 215.0], [52.1, 216.0], [52.2, 219.0], [52.3, 220.0], [52.4, 220.0], [52.5, 221.0], [52.6, 221.0], [52.7, 222.0], [52.8, 224.0], [52.9, 224.0], [53.0, 226.0], [53.1, 226.0], [53.2, 228.0], [53.3, 228.0], [53.4, 229.0], [53.5, 230.0], [53.6, 230.0], [53.7, 231.0], [53.8, 232.0], [53.9, 233.0], [54.0, 235.0], [54.1, 235.0], [54.2, 236.0], [54.3, 238.0], [54.4, 239.0], [54.5, 240.0], [54.6, 241.0], [54.7, 241.0], [54.8, 242.0], [54.9, 243.0], [55.0, 244.0], [55.1, 244.0], [55.2, 245.0], [55.3, 245.0], [55.4, 247.0], [55.5, 248.0], [55.6, 249.0], [55.7, 249.0], [55.8, 251.0], [55.9, 252.0], [56.0, 253.0], [56.1, 254.0], [56.2, 255.0], [56.3, 256.0], [56.4, 257.0], [56.5, 258.0], [56.6, 259.0], [56.7, 259.0], [56.8, 260.0], [56.9, 261.0], [57.0, 262.0], [57.1, 262.0], [57.2, 263.0], [57.3, 264.0], [57.4, 264.0], [57.5, 265.0], [57.6, 265.0], [57.7, 266.0], [57.8, 266.0], [57.9, 267.0], [58.0, 268.0], [58.1, 269.0], [58.2, 270.0], [58.3, 271.0], [58.4, 272.0], [58.5, 273.0], [58.6, 273.0], [58.7, 275.0], [58.8, 276.0], [58.9, 276.0], [59.0, 278.0], [59.1, 279.0], [59.2, 280.0], [59.3, 281.0], [59.4, 282.0], [59.5, 283.0], [59.6, 285.0], [59.7, 287.0], [59.8, 289.0], [59.9, 289.0], [60.0, 292.0], [60.1, 293.0], [60.2, 294.0], [60.3, 295.0], [60.4, 296.0], [60.5, 298.0], [60.6, 299.0], [60.7, 300.0], [60.8, 301.0], [60.9, 302.0], [61.0, 304.0], [61.1, 305.0], [61.2, 306.0], [61.3, 306.0], [61.4, 307.0], [61.5, 308.0], [61.6, 308.0], [61.7, 309.0], [61.8, 310.0], [61.9, 312.0], [62.0, 314.0], [62.1, 314.0], [62.2, 315.0], [62.3, 317.0], [62.4, 319.0], [62.5, 319.0], [62.6, 322.0], [62.7, 323.0], [62.8, 325.0], [62.9, 325.0], [63.0, 327.0], [63.1, 328.0], [63.2, 329.0], [63.3, 330.0], [63.4, 332.0], [63.5, 333.0], [63.6, 334.0], [63.7, 336.0], [63.8, 337.0], [63.9, 338.0], [64.0, 340.0], [64.1, 340.0], [64.2, 343.0], [64.3, 344.0], [64.4, 345.0], [64.5, 347.0], [64.6, 349.0], [64.7, 351.0], [64.8, 353.0], [64.9, 355.0], [65.0, 355.0], [65.1, 360.0], [65.2, 364.0], [65.3, 367.0], [65.4, 368.0], [65.5, 369.0], [65.6, 370.0], [65.7, 371.0], [65.8, 372.0], [65.9, 376.0], [66.0, 376.0], [66.1, 378.0], [66.2, 379.0], [66.3, 381.0], [66.4, 382.0], [66.5, 385.0], [66.6, 387.0], [66.7, 387.0], [66.8, 390.0], [66.9, 391.0], [67.0, 392.0], [67.1, 393.0], [67.2, 395.0], [67.3, 398.0], [67.4, 400.0], [67.5, 401.0], [67.6, 403.0], [67.7, 404.0], [67.8, 405.0], [67.9, 407.0], [68.0, 408.0], [68.1, 408.0], [68.2, 409.0], [68.3, 410.0], [68.4, 412.0], [68.5, 414.0], [68.6, 415.0], [68.7, 417.0], [68.8, 419.0], [68.9, 420.0], [69.0, 421.0], [69.1, 423.0], [69.2, 424.0], [69.3, 425.0], [69.4, 427.0], [69.5, 429.0], [69.6, 432.0], [69.7, 433.0], [69.8, 435.0], [69.9, 437.0], [70.0, 439.0], [70.1, 441.0], [70.2, 443.0], [70.3, 445.0], [70.4, 447.0], [70.5, 449.0], [70.6, 451.0], [70.7, 452.0], [70.8, 453.0], [70.9, 454.0], [71.0, 455.0], [71.1, 456.0], [71.2, 458.0], [71.3, 460.0], [71.4, 460.0], [71.5, 463.0], [71.6, 466.0], [71.7, 467.0], [71.8, 470.0], [71.9, 471.0], [72.0, 473.0], [72.1, 474.0], [72.2, 476.0], [72.3, 477.0], [72.4, 479.0], [72.5, 480.0], [72.6, 482.0], [72.7, 483.0], [72.8, 485.0], [72.9, 488.0], [73.0, 489.0], [73.1, 492.0], [73.2, 494.0], [73.3, 496.0], [73.4, 498.0], [73.5, 499.0], [73.6, 500.0], [73.7, 503.0], [73.8, 505.0], [73.9, 506.0], [74.0, 507.0], [74.1, 510.0], [74.2, 512.0], [74.3, 513.0], [74.4, 514.0], [74.5, 516.0], [74.6, 518.0], [74.7, 522.0], [74.8, 524.0], [74.9, 527.0], [75.0, 530.0], [75.1, 532.0], [75.2, 535.0], [75.3, 538.0], [75.4, 541.0], [75.5, 543.0], [75.6, 546.0], [75.7, 548.0], [75.8, 551.0], [75.9, 552.0], [76.0, 554.0], [76.1, 556.0], [76.2, 559.0], [76.3, 560.0], [76.4, 562.0], [76.5, 564.0], [76.6, 566.0], [76.7, 570.0], [76.8, 571.0], [76.9, 574.0], [77.0, 577.0], [77.1, 580.0], [77.2, 582.0], [77.3, 583.0], [77.4, 585.0], [77.5, 589.0], [77.6, 591.0], [77.7, 592.0], [77.8, 594.0], [77.9, 596.0], [78.0, 599.0], [78.1, 601.0], [78.2, 602.0], [78.3, 604.0], [78.4, 606.0], [78.5, 607.0], [78.6, 610.0], [78.7, 613.0], [78.8, 616.0], [78.9, 618.0], [79.0, 621.0], [79.1, 625.0], [79.2, 626.0], [79.3, 631.0], [79.4, 634.0], [79.5, 637.0], [79.6, 639.0], [79.7, 644.0], [79.8, 647.0], [79.9, 650.0], [80.0, 653.0], [80.1, 656.0], [80.2, 659.0], [80.3, 662.0], [80.4, 664.0], [80.5, 666.0], [80.6, 669.0], [80.7, 671.0], [80.8, 675.0], [80.9, 678.0], [81.0, 681.0], [81.1, 684.0], [81.2, 686.0], [81.3, 689.0], [81.4, 692.0], [81.5, 694.0], [81.6, 696.0], [81.7, 697.0], [81.8, 701.0], [81.9, 703.0], [82.0, 705.0], [82.1, 708.0], [82.2, 710.0], [82.3, 714.0], [82.4, 715.0], [82.5, 718.0], [82.6, 724.0], [82.7, 727.0], [82.8, 729.0], [82.9, 730.0], [83.0, 735.0], [83.1, 739.0], [83.2, 741.0], [83.3, 743.0], [83.4, 746.0], [83.5, 748.0], [83.6, 751.0], [83.7, 754.0], [83.8, 755.0], [83.9, 758.0], [84.0, 761.0], [84.1, 763.0], [84.2, 766.0], [84.3, 768.0], [84.4, 770.0], [84.5, 772.0], [84.6, 774.0], [84.7, 776.0], [84.8, 777.0], [84.9, 780.0], [85.0, 782.0], [85.1, 783.0], [85.2, 786.0], [85.3, 786.0], [85.4, 790.0], [85.5, 792.0], [85.6, 796.0], [85.7, 798.0], [85.8, 799.0], [85.9, 802.0], [86.0, 804.0], [86.1, 806.0], [86.2, 810.0], [86.3, 813.0], [86.4, 814.0], [86.5, 815.0], [86.6, 818.0], [86.7, 821.0], [86.8, 823.0], [86.9, 825.0], [87.0, 828.0], [87.1, 833.0], [87.2, 836.0], [87.3, 839.0], [87.4, 845.0], [87.5, 848.0], [87.6, 852.0], [87.7, 854.0], [87.8, 861.0], [87.9, 864.0], [88.0, 867.0], [88.1, 870.0], [88.2, 874.0], [88.3, 880.0], [88.4, 883.0], [88.5, 886.0], [88.6, 890.0], [88.7, 892.0], [88.8, 894.0], [88.9, 898.0], [89.0, 904.0], [89.1, 907.0], [89.2, 912.0], [89.3, 914.0], [89.4, 916.0], [89.5, 918.0], [89.6, 921.0], [89.7, 932.0], [89.8, 934.0], [89.9, 939.0], [90.0, 943.0], [90.1, 949.0], [90.2, 953.0], [90.3, 959.0], [90.4, 963.0], [90.5, 973.0], [90.6, 976.0], [90.7, 980.0], [90.8, 989.0], [90.9, 994.0], [91.0, 998.0], [91.1, 1006.0], [91.2, 1013.0], [91.3, 1019.0], [91.4, 1026.0], [91.5, 1031.0], [91.6, 1035.0], [91.7, 1043.0], [91.8, 1048.0], [91.9, 1052.0], [92.0, 1056.0], [92.1, 1060.0], [92.2, 1066.0], [92.3, 1071.0], [92.4, 1079.0], [92.5, 1089.0], [92.6, 1094.0], [92.7, 1104.0], [92.8, 1112.0], [92.9, 1114.0], [93.0, 1120.0], [93.1, 1127.0], [93.2, 1136.0], [93.3, 1138.0], [93.4, 1139.0], [93.5, 1145.0], [93.6, 1154.0], [93.7, 1162.0], [93.8, 1169.0], [93.9, 1174.0], [94.0, 1178.0], [94.1, 1184.0], [94.2, 1191.0], [94.3, 1204.0], [94.4, 1212.0], [94.5, 1222.0], [94.6, 1229.0], [94.7, 1235.0], [94.8, 1241.0], [94.9, 1254.0], [95.0, 1261.0], [95.1, 1269.0], [95.2, 1276.0], [95.3, 1286.0], [95.4, 1291.0], [95.5, 1303.0], [95.6, 1309.0], [95.7, 1326.0], [95.8, 1334.0], [95.9, 1350.0], [96.0, 1360.0], [96.1, 1368.0], [96.2, 1380.0], [96.3, 1398.0], [96.4, 1409.0], [96.5, 1432.0], [96.6, 1443.0], [96.7, 1451.0], [96.8, 1469.0], [96.9, 1480.0], [97.0, 1501.0], [97.1, 1511.0], [97.2, 1524.0], [97.3, 1556.0], [97.4, 1577.0], [97.5, 1598.0], [97.6, 1615.0], [97.7, 1646.0], [97.8, 1664.0], [97.9, 1684.0], [98.0, 1722.0], [98.1, 1750.0], [98.2, 1772.0], [98.3, 1795.0], [98.4, 1815.0], [98.5, 1862.0], [98.6, 1874.0], [98.7, 1900.0], [98.8, 1960.0], [98.9, 2003.0], [99.0, 2041.0], [99.1, 2071.0], [99.2, 2095.0], [99.3, 2129.0], [99.4, 2211.0], [99.5, 2272.0], [99.6, 2415.0], [99.7, 2547.0], [99.8, 2874.0], [99.9, 3089.0], [100.0, 3754.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2091.0, "series": [{"data": [[0.0, 2091.0], [600.0, 197.0], [700.0, 216.0], [800.0, 160.0], [900.0, 112.0], [1000.0, 85.0], [1100.0, 83.0], [1200.0, 66.0], [1300.0, 45.0], [1400.0, 35.0], [1500.0, 28.0], [100.0, 565.0], [1600.0, 21.0], [1700.0, 21.0], [1800.0, 19.0], [1900.0, 11.0], [2000.0, 16.0], [2100.0, 10.0], [2200.0, 7.0], [2300.0, 2.0], [2400.0, 3.0], [2500.0, 6.0], [2600.0, 2.0], [2800.0, 3.0], [2900.0, 1.0], [3000.0, 4.0], [3100.0, 1.0], [200.0, 537.0], [3700.0, 2.0], [3600.0, 1.0], [300.0, 353.0], [400.0, 322.0], [500.0, 237.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 158.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3873.0, "series": [{"data": [[0.0, 3873.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1231.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 158.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.885204081632656, "minX": 1.6024866E12, "maxY": 10.0, "series": [{"data": [[1.60248666E12, 10.0], [1.6024866E12, 9.983102918586782], [1.60248678E12, 9.885204081632656], [1.60248672E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248678E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 367.99065955013305, "minX": 1.0, "maxY": 3736.0, "series": [{"data": [[4.0, 1628.0], [8.0, 706.0], [2.0, 2885.0], [1.0, 3640.0], [9.0, 1154.3333333333335], [5.0, 1502.5], [10.0, 367.99065955013305], [6.0, 1901.0], [3.0, 3736.0], [7.0, 643.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98726719878372, 371.90516913721046]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3488.5, "minX": 1.6024866E12, "maxY": 1402234.75, "series": [{"data": [[1.60248666E12, 1316919.55], [1.6024866E12, 1226203.3833333333], [1.60248678E12, 305421.7166666667], [1.60248672E12, 1402234.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60248666E12, 16686.116666666665], [1.6024866E12, 11300.65], [1.60248678E12, 3488.5], [1.60248672E12, 14015.683333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248678E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 307.6648073022314, "minX": 1.6024866E12, "maxY": 457.09438775510216, "series": [{"data": [[1.60248666E12, 307.6648073022314], [1.6024866E12, 443.9124423963137], [1.60248678E12, 457.09438775510216], [1.60248672E12, 371.61340852130326]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248678E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 307.30375253549613, "minX": 1.6024866E12, "maxY": 456.7270408163271, "series": [{"data": [[1.60248666E12, 307.30375253549613], [1.6024866E12, 443.4070660522276], [1.60248678E12, 456.7270408163271], [1.60248672E12, 371.21240601503666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248678E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010651629072681733, "minX": 1.6024866E12, "maxY": 0.08678955453149002, "series": [{"data": [[1.60248666E12, 0.011156186612576086], [1.6024866E12, 0.08678955453149002], [1.60248678E12, 0.015306122448979578], [1.60248672E12, 0.010651629072681733]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248678E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.6024866E12, "maxY": 3754.0, "series": [{"data": [[1.60248666E12, 3089.0], [1.6024866E12, 2272.0], [1.60248678E12, 3754.0], [1.60248672E12, 2502.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60248666E12, 35.756999529600144], [1.6024866E12, 38.0], [1.60248678E12, 35.536999906301496], [1.60248672E12, 35.37299961924553]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60248666E12, 36.0], [1.6024866E12, 38.0], [1.60248678E12, 35.8907000374794], [1.60248672E12, 36.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60248666E12, 36.0], [1.6024866E12, 38.0], [1.60248678E12, 35.73349995315075], [1.60248672E12, 36.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60248666E12, 31.0], [1.6024866E12, 35.0], [1.60248678E12, 35.0], [1.60248672E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60248666E12, 143.0], [1.6024866E12, 308.0], [1.60248678E12, 206.0], [1.60248672E12, 206.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248678E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 67.5, "minX": 2.0, "maxY": 3262.5, "series": [{"data": [[2.0, 3262.5], [3.0, 2785.0], [4.0, 1304.0], [5.0, 1468.0], [6.0, 1483.0], [7.0, 844.0], [8.0, 951.0], [9.0, 1012.0], [10.0, 826.0], [11.0, 861.0], [12.0, 721.5], [13.0, 662.0], [14.0, 594.0], [15.0, 548.0], [16.0, 488.5], [17.0, 476.5], [18.0, 441.0], [19.0, 485.0], [20.0, 459.0], [21.0, 340.5], [22.0, 263.0], [23.0, 270.5], [24.0, 225.0], [25.0, 296.0], [26.0, 214.5], [27.0, 266.0], [28.0, 313.5], [30.0, 297.5], [31.0, 83.0], [33.0, 196.0], [32.0, 196.0], [34.0, 213.5], [35.0, 256.0], [37.0, 207.0], [36.0, 89.5], [38.0, 86.0], [39.0, 194.0], [41.0, 82.0], [40.0, 107.5], [43.0, 160.5], [42.0, 196.5], [45.0, 76.0], [44.0, 73.0], [46.0, 167.0], [48.0, 92.0], [49.0, 103.0], [50.0, 84.5], [52.0, 82.0], [55.0, 120.0], [57.0, 80.0], [59.0, 99.5], [58.0, 148.0], [61.0, 79.0], [62.0, 87.5], [66.0, 73.5], [67.0, 108.0], [70.0, 111.0], [75.0, 109.0], [72.0, 67.5], [73.0, 88.0], [76.0, 79.0], [80.0, 78.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 80.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 67.5, "minX": 2.0, "maxY": 3262.5, "series": [{"data": [[2.0, 3262.5], [3.0, 2784.0], [4.0, 1303.5], [5.0, 1467.0], [6.0, 1482.5], [7.0, 844.0], [8.0, 948.0], [9.0, 1010.0], [10.0, 826.0], [11.0, 861.0], [12.0, 721.0], [13.0, 659.0], [14.0, 594.0], [15.0, 548.0], [16.0, 488.5], [17.0, 476.5], [18.0, 440.0], [19.0, 484.5], [20.0, 459.0], [21.0, 340.0], [22.0, 262.5], [23.0, 270.0], [24.0, 225.0], [25.0, 296.0], [26.0, 214.0], [27.0, 266.0], [28.0, 313.5], [30.0, 297.0], [31.0, 83.0], [33.0, 196.0], [32.0, 195.5], [34.0, 213.5], [35.0, 256.0], [37.0, 207.0], [36.0, 89.5], [38.0, 86.0], [39.0, 194.0], [41.0, 82.0], [40.0, 107.5], [43.0, 160.0], [42.0, 196.0], [45.0, 76.0], [44.0, 73.0], [46.0, 166.0], [48.0, 92.0], [49.0, 102.0], [50.0, 84.5], [52.0, 82.0], [55.0, 120.0], [57.0, 80.0], [59.0, 99.5], [58.0, 147.5], [61.0, 79.0], [62.0, 87.0], [66.0, 73.5], [67.0, 108.0], [70.0, 111.0], [75.0, 109.0], [72.0, 67.5], [73.0, 86.0], [76.0, 79.0], [80.0, 78.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 80.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.366666666666666, "minX": 1.6024866E12, "maxY": 32.86666666666667, "series": [{"data": [[1.60248666E12, 32.86666666666667], [1.6024866E12, 21.866666666666667], [1.60248678E12, 6.366666666666666], [1.60248672E12, 26.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248678E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.533333333333333, "minX": 1.6024866E12, "maxY": 32.86666666666667, "series": [{"data": [[1.60248666E12, 32.86666666666667], [1.6024866E12, 21.7], [1.60248678E12, 6.533333333333333], [1.60248672E12, 26.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248678E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.533333333333333, "minX": 1.6024866E12, "maxY": 32.86666666666667, "series": [{"data": [[1.60248666E12, 32.86666666666667], [1.6024866E12, 21.7], [1.60248678E12, 6.533333333333333], [1.60248672E12, 26.6]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248678E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.533333333333333, "minX": 1.6024866E12, "maxY": 32.86666666666667, "series": [{"data": [[1.60248666E12, 32.86666666666667], [1.6024866E12, 21.7], [1.60248678E12, 6.533333333333333], [1.60248672E12, 26.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248678E12, "title": "Total Transactions Per Second"}},
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

