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
        data: {"result": {"minY": 34.0, "minX": 0.0, "maxY": 4198.0, "series": [{"data": [[0.0, 34.0], [0.1, 36.0], [0.2, 37.0], [0.3, 37.0], [0.4, 38.0], [0.5, 38.0], [0.6, 38.0], [0.7, 38.0], [0.8, 39.0], [0.9, 39.0], [1.0, 39.0], [1.1, 40.0], [1.2, 40.0], [1.3, 40.0], [1.4, 41.0], [1.5, 41.0], [1.6, 41.0], [1.7, 41.0], [1.8, 41.0], [1.9, 41.0], [2.0, 41.0], [2.1, 42.0], [2.2, 42.0], [2.3, 42.0], [2.4, 42.0], [2.5, 42.0], [2.6, 42.0], [2.7, 43.0], [2.8, 43.0], [2.9, 43.0], [3.0, 43.0], [3.1, 43.0], [3.2, 43.0], [3.3, 43.0], [3.4, 43.0], [3.5, 43.0], [3.6, 44.0], [3.7, 44.0], [3.8, 44.0], [3.9, 44.0], [4.0, 44.0], [4.1, 44.0], [4.2, 44.0], [4.3, 44.0], [4.4, 44.0], [4.5, 44.0], [4.6, 44.0], [4.7, 44.0], [4.8, 44.0], [4.9, 45.0], [5.0, 45.0], [5.1, 45.0], [5.2, 45.0], [5.3, 45.0], [5.4, 45.0], [5.5, 45.0], [5.6, 45.0], [5.7, 45.0], [5.8, 45.0], [5.9, 45.0], [6.0, 45.0], [6.1, 45.0], [6.2, 45.0], [6.3, 45.0], [6.4, 46.0], [6.5, 46.0], [6.6, 46.0], [6.7, 46.0], [6.8, 46.0], [6.9, 46.0], [7.0, 46.0], [7.1, 46.0], [7.2, 46.0], [7.3, 46.0], [7.4, 46.0], [7.5, 46.0], [7.6, 46.0], [7.7, 46.0], [7.8, 46.0], [7.9, 46.0], [8.0, 47.0], [8.1, 47.0], [8.2, 47.0], [8.3, 47.0], [8.4, 47.0], [8.5, 47.0], [8.6, 47.0], [8.7, 47.0], [8.8, 47.0], [8.9, 47.0], [9.0, 47.0], [9.1, 47.0], [9.2, 47.0], [9.3, 47.0], [9.4, 47.0], [9.5, 48.0], [9.6, 48.0], [9.7, 48.0], [9.8, 48.0], [9.9, 48.0], [10.0, 48.0], [10.1, 48.0], [10.2, 48.0], [10.3, 48.0], [10.4, 48.0], [10.5, 48.0], [10.6, 48.0], [10.7, 48.0], [10.8, 48.0], [10.9, 48.0], [11.0, 49.0], [11.1, 49.0], [11.2, 49.0], [11.3, 49.0], [11.4, 49.0], [11.5, 49.0], [11.6, 49.0], [11.7, 49.0], [11.8, 49.0], [11.9, 49.0], [12.0, 49.0], [12.1, 49.0], [12.2, 49.0], [12.3, 49.0], [12.4, 49.0], [12.5, 50.0], [12.6, 50.0], [12.7, 50.0], [12.8, 50.0], [12.9, 50.0], [13.0, 50.0], [13.1, 50.0], [13.2, 50.0], [13.3, 50.0], [13.4, 50.0], [13.5, 50.0], [13.6, 50.0], [13.7, 51.0], [13.8, 51.0], [13.9, 51.0], [14.0, 51.0], [14.1, 51.0], [14.2, 51.0], [14.3, 51.0], [14.4, 51.0], [14.5, 51.0], [14.6, 51.0], [14.7, 51.0], [14.8, 51.0], [14.9, 51.0], [15.0, 51.0], [15.1, 51.0], [15.2, 51.0], [15.3, 52.0], [15.4, 52.0], [15.5, 52.0], [15.6, 52.0], [15.7, 52.0], [15.8, 52.0], [15.9, 52.0], [16.0, 52.0], [16.1, 52.0], [16.2, 52.0], [16.3, 52.0], [16.4, 52.0], [16.5, 52.0], [16.6, 53.0], [16.7, 53.0], [16.8, 53.0], [16.9, 53.0], [17.0, 53.0], [17.1, 53.0], [17.2, 53.0], [17.3, 54.0], [17.4, 54.0], [17.5, 54.0], [17.6, 54.0], [17.7, 54.0], [17.8, 54.0], [17.9, 54.0], [18.0, 54.0], [18.1, 55.0], [18.2, 55.0], [18.3, 55.0], [18.4, 55.0], [18.5, 55.0], [18.6, 56.0], [18.7, 56.0], [18.8, 56.0], [18.9, 56.0], [19.0, 56.0], [19.1, 57.0], [19.2, 57.0], [19.3, 57.0], [19.4, 57.0], [19.5, 58.0], [19.6, 58.0], [19.7, 58.0], [19.8, 59.0], [19.9, 59.0], [20.0, 59.0], [20.1, 59.0], [20.2, 60.0], [20.3, 60.0], [20.4, 61.0], [20.5, 61.0], [20.6, 61.0], [20.7, 62.0], [20.8, 63.0], [20.9, 64.0], [21.0, 65.0], [21.1, 65.0], [21.2, 66.0], [21.3, 66.0], [21.4, 67.0], [21.5, 67.0], [21.6, 68.0], [21.7, 68.0], [21.8, 69.0], [21.9, 69.0], [22.0, 70.0], [22.1, 70.0], [22.2, 70.0], [22.3, 71.0], [22.4, 71.0], [22.5, 71.0], [22.6, 72.0], [22.7, 72.0], [22.8, 72.0], [22.9, 73.0], [23.0, 73.0], [23.1, 74.0], [23.2, 74.0], [23.3, 74.0], [23.4, 74.0], [23.5, 75.0], [23.6, 76.0], [23.7, 76.0], [23.8, 77.0], [23.9, 77.0], [24.0, 77.0], [24.1, 77.0], [24.2, 78.0], [24.3, 78.0], [24.4, 78.0], [24.5, 78.0], [24.6, 78.0], [24.7, 79.0], [24.8, 79.0], [24.9, 79.0], [25.0, 79.0], [25.1, 80.0], [25.2, 80.0], [25.3, 80.0], [25.4, 80.0], [25.5, 81.0], [25.6, 81.0], [25.7, 81.0], [25.8, 81.0], [25.9, 81.0], [26.0, 82.0], [26.1, 82.0], [26.2, 82.0], [26.3, 83.0], [26.4, 83.0], [26.5, 83.0], [26.6, 83.0], [26.7, 83.0], [26.8, 84.0], [26.9, 84.0], [27.0, 84.0], [27.1, 84.0], [27.2, 85.0], [27.3, 85.0], [27.4, 85.0], [27.5, 85.0], [27.6, 85.0], [27.7, 85.0], [27.8, 85.0], [27.9, 86.0], [28.0, 86.0], [28.1, 86.0], [28.2, 86.0], [28.3, 86.0], [28.4, 86.0], [28.5, 87.0], [28.6, 87.0], [28.7, 87.0], [28.8, 87.0], [28.9, 87.0], [29.0, 87.0], [29.1, 87.0], [29.2, 87.0], [29.3, 88.0], [29.4, 88.0], [29.5, 88.0], [29.6, 88.0], [29.7, 88.0], [29.8, 88.0], [29.9, 88.0], [30.0, 88.0], [30.1, 88.0], [30.2, 89.0], [30.3, 89.0], [30.4, 89.0], [30.5, 89.0], [30.6, 89.0], [30.7, 90.0], [30.8, 90.0], [30.9, 90.0], [31.0, 90.0], [31.1, 90.0], [31.2, 90.0], [31.3, 90.0], [31.4, 90.0], [31.5, 90.0], [31.6, 91.0], [31.7, 91.0], [31.8, 91.0], [31.9, 91.0], [32.0, 91.0], [32.1, 91.0], [32.2, 91.0], [32.3, 91.0], [32.4, 91.0], [32.5, 92.0], [32.6, 92.0], [32.7, 92.0], [32.8, 92.0], [32.9, 92.0], [33.0, 92.0], [33.1, 92.0], [33.2, 93.0], [33.3, 93.0], [33.4, 93.0], [33.5, 93.0], [33.6, 93.0], [33.7, 93.0], [33.8, 93.0], [33.9, 93.0], [34.0, 94.0], [34.1, 94.0], [34.2, 94.0], [34.3, 94.0], [34.4, 94.0], [34.5, 94.0], [34.6, 95.0], [34.7, 95.0], [34.8, 95.0], [34.9, 95.0], [35.0, 95.0], [35.1, 95.0], [35.2, 96.0], [35.3, 96.0], [35.4, 96.0], [35.5, 96.0], [35.6, 96.0], [35.7, 97.0], [35.8, 97.0], [35.9, 97.0], [36.0, 97.0], [36.1, 97.0], [36.2, 97.0], [36.3, 97.0], [36.4, 98.0], [36.5, 98.0], [36.6, 98.0], [36.7, 98.0], [36.8, 99.0], [36.9, 99.0], [37.0, 99.0], [37.1, 100.0], [37.2, 100.0], [37.3, 100.0], [37.4, 100.0], [37.5, 101.0], [37.6, 101.0], [37.7, 101.0], [37.8, 101.0], [37.9, 102.0], [38.0, 102.0], [38.1, 102.0], [38.2, 103.0], [38.3, 103.0], [38.4, 103.0], [38.5, 104.0], [38.6, 104.0], [38.7, 105.0], [38.8, 105.0], [38.9, 106.0], [39.0, 106.0], [39.1, 107.0], [39.2, 108.0], [39.3, 108.0], [39.4, 110.0], [39.5, 111.0], [39.6, 113.0], [39.7, 113.0], [39.8, 114.0], [39.9, 114.0], [40.0, 115.0], [40.1, 116.0], [40.2, 117.0], [40.3, 117.0], [40.4, 118.0], [40.5, 120.0], [40.6, 121.0], [40.7, 121.0], [40.8, 122.0], [40.9, 124.0], [41.0, 124.0], [41.1, 126.0], [41.2, 127.0], [41.3, 127.0], [41.4, 128.0], [41.5, 129.0], [41.6, 130.0], [41.7, 131.0], [41.8, 131.0], [41.9, 131.0], [42.0, 132.0], [42.1, 132.0], [42.2, 133.0], [42.3, 134.0], [42.4, 134.0], [42.5, 135.0], [42.6, 135.0], [42.7, 136.0], [42.8, 136.0], [42.9, 137.0], [43.0, 138.0], [43.1, 138.0], [43.2, 139.0], [43.3, 139.0], [43.4, 140.0], [43.5, 141.0], [43.6, 142.0], [43.7, 142.0], [43.8, 143.0], [43.9, 144.0], [44.0, 145.0], [44.1, 146.0], [44.2, 146.0], [44.3, 148.0], [44.4, 149.0], [44.5, 150.0], [44.6, 151.0], [44.7, 153.0], [44.8, 154.0], [44.9, 155.0], [45.0, 155.0], [45.1, 156.0], [45.2, 157.0], [45.3, 158.0], [45.4, 159.0], [45.5, 160.0], [45.6, 161.0], [45.7, 162.0], [45.8, 162.0], [45.9, 162.0], [46.0, 163.0], [46.1, 164.0], [46.2, 164.0], [46.3, 165.0], [46.4, 166.0], [46.5, 167.0], [46.6, 168.0], [46.7, 168.0], [46.8, 169.0], [46.9, 169.0], [47.0, 170.0], [47.1, 171.0], [47.2, 172.0], [47.3, 173.0], [47.4, 174.0], [47.5, 175.0], [47.6, 176.0], [47.7, 176.0], [47.8, 177.0], [47.9, 178.0], [48.0, 178.0], [48.1, 179.0], [48.2, 180.0], [48.3, 181.0], [48.4, 181.0], [48.5, 184.0], [48.6, 185.0], [48.7, 185.0], [48.8, 186.0], [48.9, 187.0], [49.0, 187.0], [49.1, 189.0], [49.2, 190.0], [49.3, 190.0], [49.4, 191.0], [49.5, 192.0], [49.6, 192.0], [49.7, 193.0], [49.8, 194.0], [49.9, 195.0], [50.0, 196.0], [50.1, 198.0], [50.2, 199.0], [50.3, 200.0], [50.4, 201.0], [50.5, 202.0], [50.6, 203.0], [50.7, 204.0], [50.8, 205.0], [50.9, 205.0], [51.0, 206.0], [51.1, 207.0], [51.2, 208.0], [51.3, 209.0], [51.4, 210.0], [51.5, 211.0], [51.6, 211.0], [51.7, 212.0], [51.8, 213.0], [51.9, 214.0], [52.0, 215.0], [52.1, 216.0], [52.2, 217.0], [52.3, 218.0], [52.4, 219.0], [52.5, 220.0], [52.6, 221.0], [52.7, 224.0], [52.8, 225.0], [52.9, 225.0], [53.0, 227.0], [53.1, 228.0], [53.2, 229.0], [53.3, 230.0], [53.4, 231.0], [53.5, 232.0], [53.6, 233.0], [53.7, 234.0], [53.8, 234.0], [53.9, 235.0], [54.0, 236.0], [54.1, 236.0], [54.2, 237.0], [54.3, 237.0], [54.4, 238.0], [54.5, 239.0], [54.6, 239.0], [54.7, 240.0], [54.8, 241.0], [54.9, 242.0], [55.0, 243.0], [55.1, 244.0], [55.2, 245.0], [55.3, 246.0], [55.4, 249.0], [55.5, 249.0], [55.6, 250.0], [55.7, 250.0], [55.8, 251.0], [55.9, 252.0], [56.0, 252.0], [56.1, 253.0], [56.2, 254.0], [56.3, 255.0], [56.4, 256.0], [56.5, 256.0], [56.6, 257.0], [56.7, 259.0], [56.8, 259.0], [56.9, 260.0], [57.0, 261.0], [57.1, 262.0], [57.2, 263.0], [57.3, 263.0], [57.4, 264.0], [57.5, 265.0], [57.6, 267.0], [57.7, 269.0], [57.8, 270.0], [57.9, 270.0], [58.0, 271.0], [58.1, 273.0], [58.2, 273.0], [58.3, 274.0], [58.4, 274.0], [58.5, 275.0], [58.6, 276.0], [58.7, 277.0], [58.8, 278.0], [58.9, 279.0], [59.0, 280.0], [59.1, 281.0], [59.2, 283.0], [59.3, 284.0], [59.4, 286.0], [59.5, 287.0], [59.6, 288.0], [59.7, 288.0], [59.8, 291.0], [59.9, 292.0], [60.0, 293.0], [60.1, 294.0], [60.2, 296.0], [60.3, 297.0], [60.4, 299.0], [60.5, 299.0], [60.6, 301.0], [60.7, 303.0], [60.8, 304.0], [60.9, 306.0], [61.0, 307.0], [61.1, 308.0], [61.2, 312.0], [61.3, 312.0], [61.4, 314.0], [61.5, 315.0], [61.6, 317.0], [61.7, 319.0], [61.8, 320.0], [61.9, 323.0], [62.0, 324.0], [62.1, 325.0], [62.2, 326.0], [62.3, 326.0], [62.4, 327.0], [62.5, 328.0], [62.6, 329.0], [62.7, 330.0], [62.8, 331.0], [62.9, 333.0], [63.0, 336.0], [63.1, 338.0], [63.2, 340.0], [63.3, 342.0], [63.4, 344.0], [63.5, 345.0], [63.6, 347.0], [63.7, 349.0], [63.8, 350.0], [63.9, 352.0], [64.0, 354.0], [64.1, 356.0], [64.2, 358.0], [64.3, 359.0], [64.4, 361.0], [64.5, 362.0], [64.6, 364.0], [64.7, 366.0], [64.8, 370.0], [64.9, 372.0], [65.0, 373.0], [65.1, 374.0], [65.2, 376.0], [65.3, 378.0], [65.4, 380.0], [65.5, 381.0], [65.6, 382.0], [65.7, 384.0], [65.8, 385.0], [65.9, 387.0], [66.0, 389.0], [66.1, 391.0], [66.2, 392.0], [66.3, 393.0], [66.4, 395.0], [66.5, 397.0], [66.6, 398.0], [66.7, 399.0], [66.8, 400.0], [66.9, 402.0], [67.0, 402.0], [67.1, 403.0], [67.2, 405.0], [67.3, 405.0], [67.4, 406.0], [67.5, 406.0], [67.6, 407.0], [67.7, 409.0], [67.8, 409.0], [67.9, 410.0], [68.0, 411.0], [68.1, 413.0], [68.2, 414.0], [68.3, 415.0], [68.4, 416.0], [68.5, 417.0], [68.6, 417.0], [68.7, 418.0], [68.8, 420.0], [68.9, 421.0], [69.0, 423.0], [69.1, 425.0], [69.2, 426.0], [69.3, 427.0], [69.4, 428.0], [69.5, 429.0], [69.6, 430.0], [69.7, 431.0], [69.8, 433.0], [69.9, 434.0], [70.0, 436.0], [70.1, 437.0], [70.2, 439.0], [70.3, 441.0], [70.4, 442.0], [70.5, 444.0], [70.6, 445.0], [70.7, 447.0], [70.8, 449.0], [70.9, 450.0], [71.0, 452.0], [71.1, 454.0], [71.2, 454.0], [71.3, 455.0], [71.4, 457.0], [71.5, 459.0], [71.6, 461.0], [71.7, 462.0], [71.8, 463.0], [71.9, 465.0], [72.0, 467.0], [72.1, 468.0], [72.2, 471.0], [72.3, 473.0], [72.4, 473.0], [72.5, 475.0], [72.6, 478.0], [72.7, 480.0], [72.8, 481.0], [72.9, 483.0], [73.0, 485.0], [73.1, 487.0], [73.2, 488.0], [73.3, 489.0], [73.4, 491.0], [73.5, 493.0], [73.6, 494.0], [73.7, 497.0], [73.8, 499.0], [73.9, 501.0], [74.0, 502.0], [74.1, 504.0], [74.2, 506.0], [74.3, 508.0], [74.4, 510.0], [74.5, 511.0], [74.6, 512.0], [74.7, 514.0], [74.8, 515.0], [74.9, 516.0], [75.0, 518.0], [75.1, 521.0], [75.2, 523.0], [75.3, 524.0], [75.4, 526.0], [75.5, 527.0], [75.6, 529.0], [75.7, 530.0], [75.8, 532.0], [75.9, 534.0], [76.0, 536.0], [76.1, 537.0], [76.2, 539.0], [76.3, 540.0], [76.4, 542.0], [76.5, 544.0], [76.6, 545.0], [76.7, 548.0], [76.8, 551.0], [76.9, 553.0], [77.0, 556.0], [77.1, 561.0], [77.2, 562.0], [77.3, 565.0], [77.4, 566.0], [77.5, 569.0], [77.6, 570.0], [77.7, 571.0], [77.8, 573.0], [77.9, 575.0], [78.0, 578.0], [78.1, 582.0], [78.2, 585.0], [78.3, 586.0], [78.4, 587.0], [78.5, 589.0], [78.6, 590.0], [78.7, 592.0], [78.8, 593.0], [78.9, 595.0], [79.0, 596.0], [79.1, 598.0], [79.2, 600.0], [79.3, 602.0], [79.4, 603.0], [79.5, 604.0], [79.6, 605.0], [79.7, 608.0], [79.8, 612.0], [79.9, 614.0], [80.0, 617.0], [80.1, 619.0], [80.2, 621.0], [80.3, 623.0], [80.4, 625.0], [80.5, 626.0], [80.6, 630.0], [80.7, 633.0], [80.8, 633.0], [80.9, 635.0], [81.0, 637.0], [81.1, 638.0], [81.2, 640.0], [81.3, 642.0], [81.4, 644.0], [81.5, 646.0], [81.6, 650.0], [81.7, 651.0], [81.8, 653.0], [81.9, 655.0], [82.0, 657.0], [82.1, 660.0], [82.2, 661.0], [82.3, 661.0], [82.4, 664.0], [82.5, 666.0], [82.6, 668.0], [82.7, 670.0], [82.8, 673.0], [82.9, 674.0], [83.0, 677.0], [83.1, 679.0], [83.2, 681.0], [83.3, 683.0], [83.4, 684.0], [83.5, 685.0], [83.6, 686.0], [83.7, 689.0], [83.8, 690.0], [83.9, 693.0], [84.0, 695.0], [84.1, 697.0], [84.2, 698.0], [84.3, 699.0], [84.4, 701.0], [84.5, 705.0], [84.6, 709.0], [84.7, 711.0], [84.8, 713.0], [84.9, 715.0], [85.0, 717.0], [85.1, 721.0], [85.2, 724.0], [85.3, 726.0], [85.4, 732.0], [85.5, 734.0], [85.6, 736.0], [85.7, 739.0], [85.8, 741.0], [85.9, 744.0], [86.0, 746.0], [86.1, 749.0], [86.2, 753.0], [86.3, 757.0], [86.4, 760.0], [86.5, 762.0], [86.6, 764.0], [86.7, 767.0], [86.8, 769.0], [86.9, 771.0], [87.0, 774.0], [87.1, 775.0], [87.2, 777.0], [87.3, 780.0], [87.4, 782.0], [87.5, 785.0], [87.6, 787.0], [87.7, 791.0], [87.8, 794.0], [87.9, 796.0], [88.0, 799.0], [88.1, 801.0], [88.2, 803.0], [88.3, 805.0], [88.4, 808.0], [88.5, 809.0], [88.6, 811.0], [88.7, 812.0], [88.8, 817.0], [88.9, 820.0], [89.0, 823.0], [89.1, 824.0], [89.2, 827.0], [89.3, 830.0], [89.4, 833.0], [89.5, 836.0], [89.6, 840.0], [89.7, 844.0], [89.8, 846.0], [89.9, 849.0], [90.0, 850.0], [90.1, 852.0], [90.2, 853.0], [90.3, 857.0], [90.4, 860.0], [90.5, 870.0], [90.6, 871.0], [90.7, 872.0], [90.8, 875.0], [90.9, 879.0], [91.0, 882.0], [91.1, 886.0], [91.2, 891.0], [91.3, 903.0], [91.4, 914.0], [91.5, 916.0], [91.6, 920.0], [91.7, 934.0], [91.8, 940.0], [91.9, 943.0], [92.0, 949.0], [92.1, 953.0], [92.2, 957.0], [92.3, 969.0], [92.4, 975.0], [92.5, 983.0], [92.6, 988.0], [92.7, 996.0], [92.8, 1001.0], [92.9, 1005.0], [93.0, 1011.0], [93.1, 1016.0], [93.2, 1021.0], [93.3, 1024.0], [93.4, 1032.0], [93.5, 1037.0], [93.6, 1047.0], [93.7, 1052.0], [93.8, 1064.0], [93.9, 1071.0], [94.0, 1075.0], [94.1, 1084.0], [94.2, 1091.0], [94.3, 1101.0], [94.4, 1104.0], [94.5, 1115.0], [94.6, 1125.0], [94.7, 1137.0], [94.8, 1146.0], [94.9, 1154.0], [95.0, 1164.0], [95.1, 1169.0], [95.2, 1177.0], [95.3, 1184.0], [95.4, 1196.0], [95.5, 1202.0], [95.6, 1207.0], [95.7, 1216.0], [95.8, 1224.0], [95.9, 1228.0], [96.0, 1234.0], [96.1, 1244.0], [96.2, 1250.0], [96.3, 1255.0], [96.4, 1269.0], [96.5, 1276.0], [96.6, 1285.0], [96.7, 1297.0], [96.8, 1310.0], [96.9, 1316.0], [97.0, 1322.0], [97.1, 1329.0], [97.2, 1342.0], [97.3, 1348.0], [97.4, 1362.0], [97.5, 1404.0], [97.6, 1429.0], [97.7, 1442.0], [97.8, 1460.0], [97.9, 1475.0], [98.0, 1492.0], [98.1, 1509.0], [98.2, 1546.0], [98.3, 1575.0], [98.4, 1600.0], [98.5, 1646.0], [98.6, 1706.0], [98.7, 1775.0], [98.8, 1812.0], [98.9, 1855.0], [99.0, 1906.0], [99.1, 1957.0], [99.2, 2036.0], [99.3, 2117.0], [99.4, 2188.0], [99.5, 2259.0], [99.6, 2318.0], [99.7, 2452.0], [99.8, 2831.0], [99.9, 3538.0], [100.0, 4198.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1948.0, "series": [{"data": [[0.0, 1948.0], [600.0, 271.0], [700.0, 195.0], [800.0, 171.0], [900.0, 80.0], [1000.0, 79.0], [1100.0, 64.0], [1200.0, 65.0], [1300.0, 40.0], [1400.0, 28.0], [1500.0, 19.0], [100.0, 694.0], [1600.0, 11.0], [1700.0, 9.0], [1800.0, 11.0], [1900.0, 9.0], [2000.0, 7.0], [2100.0, 7.0], [2200.0, 8.0], [2300.0, 5.0], [2400.0, 5.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 543.0], [3400.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [4100.0, 2.0], [300.0, 328.0], [400.0, 371.0], [500.0, 281.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 104.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3885.0, "series": [{"data": [[0.0, 3885.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1273.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 104.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.94183445190157, "minX": 1.60410078E12, "maxY": 10.0, "series": [{"data": [[1.6041009E12, 10.0], [1.60410078E12, 9.94183445190157], [1.60410096E12, 9.963826366559482], [1.60410084E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410096E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 353.82875667429397, "minX": 1.0, "maxY": 4198.0, "series": [{"data": [[4.0, 951.0], [8.0, 1621.3333333333333], [2.0, 2831.0], [1.0, 3733.0], [9.0, 560.5], [5.0, 877.6666666666666], [10.0, 353.82875667429397], [6.0, 3660.0], [3.0, 4198.0], [7.0, 652.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986507031546962, 357.81946028125924]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3893.483333333333, "minX": 1.60410078E12, "maxY": 1495931.2, "series": [{"data": [[1.6041009E12, 1075439.85], [1.60410078E12, 262908.2], [1.60410096E12, 1414860.05], [1.60410084E12, 1495931.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6041009E12, 18423.733333333334], [1.60410078E12, 3893.483333333333], [1.60410096E12, 10994.55], [1.60410084E12, 12179.183333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410096E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 277.89655172413796, "minX": 1.60410078E12, "maxY": 423.27435530085967, "series": [{"data": [[1.6041009E12, 277.89655172413796], [1.60410078E12, 401.56823266219226], [1.60410096E12, 408.3834405144695], [1.60410084E12, 423.27435530085967]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410096E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 277.6174712643676, "minX": 1.60410078E12, "maxY": 422.65974212034376, "series": [{"data": [[1.6041009E12, 277.6174712643676], [1.60410078E12, 401.21923937360157], [1.60410096E12, 407.83842443729895], [1.60410084E12, 422.65974212034376]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410096E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008735632183908057, "minX": 1.60410078E12, "maxY": 0.20357941834451873, "series": [{"data": [[1.6041009E12, 0.008735632183908057], [1.60410078E12, 0.20357941834451873], [1.60410096E12, 0.01125401929260451], [1.60410084E12, 0.010744985673352445]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410096E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 34.0, "minX": 1.60410078E12, "maxY": 4198.0, "series": [{"data": [[1.6041009E12, 2318.0], [1.60410078E12, 1673.0], [1.60410096E12, 4198.0], [1.60410084E12, 3859.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6041009E12, 40.0], [1.60410078E12, 42.03199989318848], [1.60410096E12, 39.204999703168866], [1.60410084E12, 38.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6041009E12, 40.0], [1.60410078E12, 42.43520004272461], [1.60410096E12, 40.0], [1.60410084E12, 38.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6041009E12, 40.0], [1.60410078E12, 42.25599994659424], [1.60410096E12, 39.827499851584435], [1.60410084E12, 38.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6041009E12, 34.0], [1.60410078E12, 41.0], [1.60410096E12, 36.0], [1.60410084E12, 36.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6041009E12, 156.0], [1.60410078E12, 263.0], [1.60410096E12, 246.5], [1.60410084E12, 275.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410096E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 87.0, "minX": 1.0, "maxY": 3733.0, "series": [{"data": [[2.0, 2368.5], [3.0, 951.0], [4.0, 1174.5], [5.0, 1283.5], [6.0, 1239.0], [7.0, 1219.0], [8.0, 1237.0], [9.0, 1033.0], [10.0, 662.5], [11.0, 824.5], [12.0, 842.5], [13.0, 718.0], [14.0, 641.5], [15.0, 518.0], [16.0, 550.5], [17.0, 445.0], [18.0, 463.5], [19.0, 518.0], [20.0, 570.5], [21.0, 427.0], [22.0, 205.0], [23.0, 390.0], [24.0, 268.5], [25.0, 403.5], [26.0, 232.5], [27.0, 308.5], [28.0, 162.5], [29.0, 96.0], [30.0, 298.0], [31.0, 284.0], [33.0, 165.0], [32.0, 275.0], [35.0, 145.0], [34.0, 198.5], [36.0, 105.5], [37.0, 95.0], [39.0, 169.0], [38.0, 259.0], [41.0, 162.0], [40.0, 240.5], [42.0, 214.5], [43.0, 102.0], [44.0, 91.0], [46.0, 91.5], [47.0, 180.0], [48.0, 100.5], [50.0, 97.0], [51.0, 92.0], [53.0, 167.5], [55.0, 135.0], [54.0, 114.5], [56.0, 160.5], [57.0, 96.5], [58.0, 89.0], [60.0, 95.5], [62.0, 146.0], [65.0, 93.0], [64.0, 131.0], [72.0, 95.5], [77.0, 87.0], [81.0, 90.0], [84.0, 88.0], [89.0, 93.0], [1.0, 3733.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 87.0, "minX": 1.0, "maxY": 3733.0, "series": [{"data": [[2.0, 2368.5], [3.0, 947.5], [4.0, 1174.0], [5.0, 1282.0], [6.0, 1239.0], [7.0, 1219.0], [8.0, 1236.0], [9.0, 1032.0], [10.0, 661.5], [11.0, 824.5], [12.0, 841.5], [13.0, 717.5], [14.0, 641.0], [15.0, 517.0], [16.0, 549.5], [17.0, 445.0], [18.0, 461.5], [19.0, 518.0], [20.0, 570.5], [21.0, 426.0], [22.0, 205.0], [23.0, 389.5], [24.0, 267.5], [25.0, 403.5], [26.0, 232.5], [27.0, 308.0], [28.0, 162.5], [29.0, 96.0], [30.0, 297.5], [31.0, 284.0], [33.0, 165.0], [32.0, 275.0], [35.0, 145.0], [34.0, 198.5], [36.0, 105.5], [37.0, 95.0], [39.0, 169.0], [38.0, 258.0], [41.0, 161.0], [40.0, 240.5], [42.0, 214.5], [43.0, 102.0], [44.0, 91.0], [46.0, 91.5], [47.0, 180.0], [48.0, 99.5], [50.0, 96.5], [51.0, 92.0], [53.0, 167.5], [55.0, 135.0], [54.0, 114.5], [56.0, 160.0], [57.0, 96.5], [58.0, 89.0], [60.0, 95.5], [62.0, 145.5], [65.0, 93.0], [64.0, 131.0], [72.0, 95.0], [77.0, 87.0], [81.0, 90.0], [84.0, 88.0], [89.0, 93.0], [1.0, 3733.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.616666666666666, "minX": 1.60410078E12, "maxY": 36.25, "series": [{"data": [[1.6041009E12, 36.25], [1.60410078E12, 7.616666666666666], [1.60410096E12, 20.566666666666666], [1.60410084E12, 23.266666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410096E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.45, "minX": 1.60410078E12, "maxY": 36.25, "series": [{"data": [[1.6041009E12, 36.25], [1.60410078E12, 7.45], [1.60410096E12, 20.733333333333334], [1.60410084E12, 23.266666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410096E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.45, "minX": 1.60410078E12, "maxY": 36.25, "series": [{"data": [[1.6041009E12, 36.25], [1.60410078E12, 7.45], [1.60410096E12, 20.733333333333334], [1.60410084E12, 23.266666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410096E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.45, "minX": 1.60410078E12, "maxY": 36.25, "series": [{"data": [[1.6041009E12, 36.25], [1.60410078E12, 7.45], [1.60410096E12, 20.733333333333334], [1.60410084E12, 23.266666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410096E12, "title": "Total Transactions Per Second"}},
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

