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
        data: {"result": {"minY": 35.0, "minX": 0.0, "maxY": 4743.0, "series": [{"data": [[0.0, 35.0], [0.1, 39.0], [0.2, 40.0], [0.3, 41.0], [0.4, 41.0], [0.5, 42.0], [0.6, 42.0], [0.7, 42.0], [0.8, 42.0], [0.9, 42.0], [1.0, 43.0], [1.1, 43.0], [1.2, 43.0], [1.3, 43.0], [1.4, 43.0], [1.5, 43.0], [1.6, 43.0], [1.7, 44.0], [1.8, 44.0], [1.9, 44.0], [2.0, 44.0], [2.1, 44.0], [2.2, 44.0], [2.3, 44.0], [2.4, 44.0], [2.5, 44.0], [2.6, 44.0], [2.7, 45.0], [2.8, 45.0], [2.9, 45.0], [3.0, 45.0], [3.1, 45.0], [3.2, 45.0], [3.3, 45.0], [3.4, 45.0], [3.5, 45.0], [3.6, 45.0], [3.7, 46.0], [3.8, 46.0], [3.9, 46.0], [4.0, 46.0], [4.1, 46.0], [4.2, 46.0], [4.3, 46.0], [4.4, 46.0], [4.5, 46.0], [4.6, 46.0], [4.7, 46.0], [4.8, 46.0], [4.9, 46.0], [5.0, 47.0], [5.1, 47.0], [5.2, 47.0], [5.3, 47.0], [5.4, 47.0], [5.5, 47.0], [5.6, 47.0], [5.7, 47.0], [5.8, 47.0], [5.9, 47.0], [6.0, 47.0], [6.1, 47.0], [6.2, 47.0], [6.3, 48.0], [6.4, 48.0], [6.5, 48.0], [6.6, 48.0], [6.7, 48.0], [6.8, 48.0], [6.9, 48.0], [7.0, 48.0], [7.1, 48.0], [7.2, 48.0], [7.3, 48.0], [7.4, 48.0], [7.5, 48.0], [7.6, 48.0], [7.7, 48.0], [7.8, 48.0], [7.9, 48.0], [8.0, 49.0], [8.1, 49.0], [8.2, 49.0], [8.3, 49.0], [8.4, 49.0], [8.5, 49.0], [8.6, 49.0], [8.7, 49.0], [8.8, 49.0], [8.9, 49.0], [9.0, 49.0], [9.1, 49.0], [9.2, 49.0], [9.3, 49.0], [9.4, 49.0], [9.5, 50.0], [9.6, 50.0], [9.7, 50.0], [9.8, 50.0], [9.9, 50.0], [10.0, 50.0], [10.1, 50.0], [10.2, 50.0], [10.3, 50.0], [10.4, 50.0], [10.5, 50.0], [10.6, 50.0], [10.7, 50.0], [10.8, 50.0], [10.9, 50.0], [11.0, 50.0], [11.1, 51.0], [11.2, 51.0], [11.3, 51.0], [11.4, 51.0], [11.5, 51.0], [11.6, 51.0], [11.7, 51.0], [11.8, 51.0], [11.9, 51.0], [12.0, 51.0], [12.1, 51.0], [12.2, 51.0], [12.3, 51.0], [12.4, 51.0], [12.5, 51.0], [12.6, 52.0], [12.7, 52.0], [12.8, 52.0], [12.9, 52.0], [13.0, 52.0], [13.1, 52.0], [13.2, 52.0], [13.3, 52.0], [13.4, 52.0], [13.5, 52.0], [13.6, 52.0], [13.7, 52.0], [13.8, 52.0], [13.9, 53.0], [14.0, 53.0], [14.1, 53.0], [14.2, 53.0], [14.3, 53.0], [14.4, 53.0], [14.5, 53.0], [14.6, 53.0], [14.7, 53.0], [14.8, 54.0], [14.9, 54.0], [15.0, 54.0], [15.1, 54.0], [15.2, 54.0], [15.3, 54.0], [15.4, 54.0], [15.5, 54.0], [15.6, 54.0], [15.7, 54.0], [15.8, 55.0], [15.9, 55.0], [16.0, 55.0], [16.1, 55.0], [16.2, 55.0], [16.3, 55.0], [16.4, 55.0], [16.5, 55.0], [16.6, 56.0], [16.7, 56.0], [16.8, 56.0], [16.9, 56.0], [17.0, 56.0], [17.1, 57.0], [17.2, 57.0], [17.3, 57.0], [17.4, 58.0], [17.5, 58.0], [17.6, 58.0], [17.7, 59.0], [17.8, 59.0], [17.9, 59.0], [18.0, 59.0], [18.1, 60.0], [18.2, 60.0], [18.3, 60.0], [18.4, 60.0], [18.5, 61.0], [18.6, 61.0], [18.7, 61.0], [18.8, 62.0], [18.9, 63.0], [19.0, 63.0], [19.1, 64.0], [19.2, 64.0], [19.3, 64.0], [19.4, 65.0], [19.5, 66.0], [19.6, 66.0], [19.7, 67.0], [19.8, 67.0], [19.9, 67.0], [20.0, 68.0], [20.1, 68.0], [20.2, 69.0], [20.3, 69.0], [20.4, 69.0], [20.5, 70.0], [20.6, 70.0], [20.7, 70.0], [20.8, 71.0], [20.9, 71.0], [21.0, 72.0], [21.1, 72.0], [21.2, 73.0], [21.3, 73.0], [21.4, 74.0], [21.5, 74.0], [21.6, 75.0], [21.7, 75.0], [21.8, 76.0], [21.9, 77.0], [22.0, 77.0], [22.1, 77.0], [22.2, 78.0], [22.3, 78.0], [22.4, 79.0], [22.5, 79.0], [22.6, 79.0], [22.7, 79.0], [22.8, 80.0], [22.9, 80.0], [23.0, 80.0], [23.1, 80.0], [23.2, 81.0], [23.3, 81.0], [23.4, 81.0], [23.5, 81.0], [23.6, 82.0], [23.7, 82.0], [23.8, 82.0], [23.9, 82.0], [24.0, 82.0], [24.1, 83.0], [24.2, 83.0], [24.3, 83.0], [24.4, 83.0], [24.5, 84.0], [24.6, 84.0], [24.7, 84.0], [24.8, 84.0], [24.9, 84.0], [25.0, 85.0], [25.1, 85.0], [25.2, 85.0], [25.3, 85.0], [25.4, 85.0], [25.5, 85.0], [25.6, 86.0], [25.7, 86.0], [25.8, 86.0], [25.9, 86.0], [26.0, 86.0], [26.1, 87.0], [26.2, 87.0], [26.3, 87.0], [26.4, 87.0], [26.5, 87.0], [26.6, 87.0], [26.7, 87.0], [26.8, 88.0], [26.9, 88.0], [27.0, 88.0], [27.1, 88.0], [27.2, 88.0], [27.3, 88.0], [27.4, 88.0], [27.5, 88.0], [27.6, 88.0], [27.7, 89.0], [27.8, 89.0], [27.9, 89.0], [28.0, 89.0], [28.1, 89.0], [28.2, 89.0], [28.3, 89.0], [28.4, 89.0], [28.5, 89.0], [28.6, 89.0], [28.7, 90.0], [28.8, 90.0], [28.9, 90.0], [29.0, 90.0], [29.1, 90.0], [29.2, 90.0], [29.3, 91.0], [29.4, 91.0], [29.5, 91.0], [29.6, 91.0], [29.7, 91.0], [29.8, 91.0], [29.9, 92.0], [30.0, 92.0], [30.1, 92.0], [30.2, 92.0], [30.3, 92.0], [30.4, 92.0], [30.5, 92.0], [30.6, 92.0], [30.7, 92.0], [30.8, 93.0], [30.9, 93.0], [31.0, 93.0], [31.1, 93.0], [31.2, 93.0], [31.3, 93.0], [31.4, 93.0], [31.5, 93.0], [31.6, 93.0], [31.7, 94.0], [31.8, 94.0], [31.9, 94.0], [32.0, 94.0], [32.1, 94.0], [32.2, 94.0], [32.3, 94.0], [32.4, 94.0], [32.5, 94.0], [32.6, 95.0], [32.7, 95.0], [32.8, 95.0], [32.9, 95.0], [33.0, 95.0], [33.1, 95.0], [33.2, 95.0], [33.3, 96.0], [33.4, 96.0], [33.5, 96.0], [33.6, 96.0], [33.7, 96.0], [33.8, 96.0], [33.9, 96.0], [34.0, 96.0], [34.1, 97.0], [34.2, 97.0], [34.3, 97.0], [34.4, 97.0], [34.5, 98.0], [34.6, 98.0], [34.7, 98.0], [34.8, 98.0], [34.9, 98.0], [35.0, 98.0], [35.1, 99.0], [35.2, 99.0], [35.3, 99.0], [35.4, 99.0], [35.5, 99.0], [35.6, 100.0], [35.7, 100.0], [35.8, 100.0], [35.9, 100.0], [36.0, 101.0], [36.1, 101.0], [36.2, 101.0], [36.3, 101.0], [36.4, 102.0], [36.5, 102.0], [36.6, 102.0], [36.7, 102.0], [36.8, 103.0], [36.9, 103.0], [37.0, 103.0], [37.1, 104.0], [37.2, 104.0], [37.3, 105.0], [37.4, 105.0], [37.5, 105.0], [37.6, 106.0], [37.7, 106.0], [37.8, 107.0], [37.9, 107.0], [38.0, 108.0], [38.1, 108.0], [38.2, 109.0], [38.3, 109.0], [38.4, 110.0], [38.5, 110.0], [38.6, 111.0], [38.7, 111.0], [38.8, 111.0], [38.9, 112.0], [39.0, 113.0], [39.1, 113.0], [39.2, 114.0], [39.3, 115.0], [39.4, 116.0], [39.5, 117.0], [39.6, 118.0], [39.7, 120.0], [39.8, 120.0], [39.9, 121.0], [40.0, 123.0], [40.1, 123.0], [40.2, 124.0], [40.3, 125.0], [40.4, 127.0], [40.5, 128.0], [40.6, 129.0], [40.7, 130.0], [40.8, 130.0], [40.9, 131.0], [41.0, 132.0], [41.1, 132.0], [41.2, 133.0], [41.3, 133.0], [41.4, 134.0], [41.5, 135.0], [41.6, 136.0], [41.7, 137.0], [41.8, 137.0], [41.9, 138.0], [42.0, 139.0], [42.1, 139.0], [42.2, 140.0], [42.3, 140.0], [42.4, 141.0], [42.5, 142.0], [42.6, 142.0], [42.7, 144.0], [42.8, 144.0], [42.9, 145.0], [43.0, 146.0], [43.1, 147.0], [43.2, 148.0], [43.3, 149.0], [43.4, 151.0], [43.5, 151.0], [43.6, 152.0], [43.7, 153.0], [43.8, 154.0], [43.9, 155.0], [44.0, 155.0], [44.1, 157.0], [44.2, 158.0], [44.3, 159.0], [44.4, 160.0], [44.5, 160.0], [44.6, 161.0], [44.7, 161.0], [44.8, 163.0], [44.9, 163.0], [45.0, 164.0], [45.1, 164.0], [45.2, 165.0], [45.3, 165.0], [45.4, 166.0], [45.5, 167.0], [45.6, 168.0], [45.7, 168.0], [45.8, 169.0], [45.9, 170.0], [46.0, 171.0], [46.1, 172.0], [46.2, 173.0], [46.3, 174.0], [46.4, 174.0], [46.5, 175.0], [46.6, 175.0], [46.7, 176.0], [46.8, 176.0], [46.9, 176.0], [47.0, 178.0], [47.1, 179.0], [47.2, 180.0], [47.3, 180.0], [47.4, 181.0], [47.5, 183.0], [47.6, 183.0], [47.7, 184.0], [47.8, 185.0], [47.9, 186.0], [48.0, 187.0], [48.1, 189.0], [48.2, 189.0], [48.3, 190.0], [48.4, 191.0], [48.5, 192.0], [48.6, 193.0], [48.7, 194.0], [48.8, 195.0], [48.9, 196.0], [49.0, 196.0], [49.1, 197.0], [49.2, 198.0], [49.3, 200.0], [49.4, 201.0], [49.5, 201.0], [49.6, 202.0], [49.7, 203.0], [49.8, 203.0], [49.9, 204.0], [50.0, 204.0], [50.1, 205.0], [50.2, 206.0], [50.3, 207.0], [50.4, 208.0], [50.5, 208.0], [50.6, 209.0], [50.7, 210.0], [50.8, 211.0], [50.9, 212.0], [51.0, 212.0], [51.1, 213.0], [51.2, 214.0], [51.3, 215.0], [51.4, 216.0], [51.5, 217.0], [51.6, 218.0], [51.7, 219.0], [51.8, 219.0], [51.9, 220.0], [52.0, 221.0], [52.1, 221.0], [52.2, 222.0], [52.3, 223.0], [52.4, 224.0], [52.5, 226.0], [52.6, 227.0], [52.7, 228.0], [52.8, 229.0], [52.9, 230.0], [53.0, 231.0], [53.1, 232.0], [53.2, 233.0], [53.3, 233.0], [53.4, 234.0], [53.5, 234.0], [53.6, 235.0], [53.7, 235.0], [53.8, 236.0], [53.9, 237.0], [54.0, 238.0], [54.1, 238.0], [54.2, 239.0], [54.3, 240.0], [54.4, 241.0], [54.5, 242.0], [54.6, 243.0], [54.7, 244.0], [54.8, 245.0], [54.9, 246.0], [55.0, 247.0], [55.1, 248.0], [55.2, 248.0], [55.3, 248.0], [55.4, 249.0], [55.5, 249.0], [55.6, 251.0], [55.7, 251.0], [55.8, 252.0], [55.9, 252.0], [56.0, 254.0], [56.1, 255.0], [56.2, 255.0], [56.3, 256.0], [56.4, 258.0], [56.5, 260.0], [56.6, 261.0], [56.7, 262.0], [56.8, 263.0], [56.9, 264.0], [57.0, 264.0], [57.1, 265.0], [57.2, 266.0], [57.3, 267.0], [57.4, 268.0], [57.5, 269.0], [57.6, 269.0], [57.7, 271.0], [57.8, 272.0], [57.9, 273.0], [58.0, 273.0], [58.1, 273.0], [58.2, 274.0], [58.3, 276.0], [58.4, 277.0], [58.5, 278.0], [58.6, 279.0], [58.7, 281.0], [58.8, 282.0], [58.9, 282.0], [59.0, 283.0], [59.1, 284.0], [59.2, 285.0], [59.3, 286.0], [59.4, 287.0], [59.5, 288.0], [59.6, 289.0], [59.7, 290.0], [59.8, 291.0], [59.9, 292.0], [60.0, 295.0], [60.1, 296.0], [60.2, 296.0], [60.3, 297.0], [60.4, 298.0], [60.5, 300.0], [60.6, 301.0], [60.7, 302.0], [60.8, 304.0], [60.9, 304.0], [61.0, 306.0], [61.1, 307.0], [61.2, 308.0], [61.3, 309.0], [61.4, 312.0], [61.5, 315.0], [61.6, 317.0], [61.7, 318.0], [61.8, 319.0], [61.9, 320.0], [62.0, 321.0], [62.1, 322.0], [62.2, 323.0], [62.3, 324.0], [62.4, 326.0], [62.5, 327.0], [62.6, 328.0], [62.7, 329.0], [62.8, 331.0], [62.9, 332.0], [63.0, 333.0], [63.1, 335.0], [63.2, 336.0], [63.3, 339.0], [63.4, 340.0], [63.5, 341.0], [63.6, 343.0], [63.7, 345.0], [63.8, 347.0], [63.9, 348.0], [64.0, 349.0], [64.1, 351.0], [64.2, 353.0], [64.3, 354.0], [64.4, 355.0], [64.5, 356.0], [64.6, 358.0], [64.7, 360.0], [64.8, 362.0], [64.9, 362.0], [65.0, 364.0], [65.1, 366.0], [65.2, 368.0], [65.3, 371.0], [65.4, 371.0], [65.5, 373.0], [65.6, 375.0], [65.7, 377.0], [65.8, 378.0], [65.9, 379.0], [66.0, 381.0], [66.1, 381.0], [66.2, 386.0], [66.3, 388.0], [66.4, 390.0], [66.5, 392.0], [66.6, 394.0], [66.7, 395.0], [66.8, 397.0], [66.9, 399.0], [67.0, 399.0], [67.1, 402.0], [67.2, 405.0], [67.3, 406.0], [67.4, 407.0], [67.5, 408.0], [67.6, 409.0], [67.7, 410.0], [67.8, 412.0], [67.9, 414.0], [68.0, 417.0], [68.1, 418.0], [68.2, 420.0], [68.3, 421.0], [68.4, 422.0], [68.5, 423.0], [68.6, 424.0], [68.7, 426.0], [68.8, 428.0], [68.9, 429.0], [69.0, 430.0], [69.1, 435.0], [69.2, 436.0], [69.3, 437.0], [69.4, 439.0], [69.5, 442.0], [69.6, 443.0], [69.7, 444.0], [69.8, 447.0], [69.9, 449.0], [70.0, 449.0], [70.1, 451.0], [70.2, 452.0], [70.3, 455.0], [70.4, 456.0], [70.5, 457.0], [70.6, 459.0], [70.7, 460.0], [70.8, 462.0], [70.9, 462.0], [71.0, 463.0], [71.1, 464.0], [71.2, 465.0], [71.3, 466.0], [71.4, 469.0], [71.5, 470.0], [71.6, 471.0], [71.7, 473.0], [71.8, 475.0], [71.9, 478.0], [72.0, 479.0], [72.1, 480.0], [72.2, 482.0], [72.3, 484.0], [72.4, 485.0], [72.5, 488.0], [72.6, 489.0], [72.7, 494.0], [72.8, 496.0], [72.9, 496.0], [73.0, 498.0], [73.1, 499.0], [73.2, 502.0], [73.3, 503.0], [73.4, 504.0], [73.5, 506.0], [73.6, 509.0], [73.7, 513.0], [73.8, 515.0], [73.9, 516.0], [74.0, 520.0], [74.1, 522.0], [74.2, 526.0], [74.3, 526.0], [74.4, 530.0], [74.5, 532.0], [74.6, 533.0], [74.7, 535.0], [74.8, 537.0], [74.9, 538.0], [75.0, 541.0], [75.1, 542.0], [75.2, 545.0], [75.3, 547.0], [75.4, 547.0], [75.5, 549.0], [75.6, 551.0], [75.7, 553.0], [75.8, 554.0], [75.9, 557.0], [76.0, 559.0], [76.1, 561.0], [76.2, 563.0], [76.3, 565.0], [76.4, 567.0], [76.5, 568.0], [76.6, 572.0], [76.7, 573.0], [76.8, 576.0], [76.9, 577.0], [77.0, 579.0], [77.1, 582.0], [77.2, 583.0], [77.3, 584.0], [77.4, 585.0], [77.5, 588.0], [77.6, 592.0], [77.7, 594.0], [77.8, 595.0], [77.9, 597.0], [78.0, 601.0], [78.1, 603.0], [78.2, 606.0], [78.3, 610.0], [78.4, 611.0], [78.5, 614.0], [78.6, 615.0], [78.7, 620.0], [78.8, 621.0], [78.9, 622.0], [79.0, 624.0], [79.1, 626.0], [79.2, 630.0], [79.3, 631.0], [79.4, 633.0], [79.5, 635.0], [79.6, 637.0], [79.7, 639.0], [79.8, 641.0], [79.9, 642.0], [80.0, 643.0], [80.1, 645.0], [80.2, 647.0], [80.3, 648.0], [80.4, 650.0], [80.5, 652.0], [80.6, 655.0], [80.7, 656.0], [80.8, 658.0], [80.9, 661.0], [81.0, 663.0], [81.1, 664.0], [81.2, 665.0], [81.3, 667.0], [81.4, 668.0], [81.5, 670.0], [81.6, 670.0], [81.7, 672.0], [81.8, 675.0], [81.9, 677.0], [82.0, 679.0], [82.1, 681.0], [82.2, 682.0], [82.3, 685.0], [82.4, 687.0], [82.5, 689.0], [82.6, 692.0], [82.7, 693.0], [82.8, 695.0], [82.9, 698.0], [83.0, 701.0], [83.1, 704.0], [83.2, 707.0], [83.3, 711.0], [83.4, 713.0], [83.5, 714.0], [83.6, 717.0], [83.7, 718.0], [83.8, 722.0], [83.9, 722.0], [84.0, 727.0], [84.1, 729.0], [84.2, 731.0], [84.3, 733.0], [84.4, 735.0], [84.5, 738.0], [84.6, 740.0], [84.7, 740.0], [84.8, 744.0], [84.9, 745.0], [85.0, 747.0], [85.1, 748.0], [85.2, 751.0], [85.3, 754.0], [85.4, 757.0], [85.5, 760.0], [85.6, 761.0], [85.7, 762.0], [85.8, 765.0], [85.9, 770.0], [86.0, 773.0], [86.1, 775.0], [86.2, 777.0], [86.3, 781.0], [86.4, 784.0], [86.5, 785.0], [86.6, 787.0], [86.7, 791.0], [86.8, 793.0], [86.9, 794.0], [87.0, 796.0], [87.1, 798.0], [87.2, 799.0], [87.3, 799.0], [87.4, 802.0], [87.5, 806.0], [87.6, 807.0], [87.7, 810.0], [87.8, 812.0], [87.9, 815.0], [88.0, 816.0], [88.1, 817.0], [88.2, 821.0], [88.3, 824.0], [88.4, 825.0], [88.5, 828.0], [88.6, 832.0], [88.7, 835.0], [88.8, 836.0], [88.9, 839.0], [89.0, 842.0], [89.1, 845.0], [89.2, 849.0], [89.3, 853.0], [89.4, 854.0], [89.5, 856.0], [89.6, 862.0], [89.7, 863.0], [89.8, 866.0], [89.9, 868.0], [90.0, 871.0], [90.1, 876.0], [90.2, 878.0], [90.3, 881.0], [90.4, 884.0], [90.5, 889.0], [90.6, 892.0], [90.7, 898.0], [90.8, 900.0], [90.9, 902.0], [91.0, 905.0], [91.1, 908.0], [91.2, 912.0], [91.3, 918.0], [91.4, 921.0], [91.5, 928.0], [91.6, 931.0], [91.7, 937.0], [91.8, 948.0], [91.9, 958.0], [92.0, 966.0], [92.1, 974.0], [92.2, 979.0], [92.3, 988.0], [92.4, 998.0], [92.5, 1007.0], [92.6, 1011.0], [92.7, 1013.0], [92.8, 1025.0], [92.9, 1030.0], [93.0, 1033.0], [93.1, 1038.0], [93.2, 1044.0], [93.3, 1053.0], [93.4, 1064.0], [93.5, 1072.0], [93.6, 1079.0], [93.7, 1088.0], [93.8, 1094.0], [93.9, 1103.0], [94.0, 1112.0], [94.1, 1120.0], [94.2, 1123.0], [94.3, 1128.0], [94.4, 1134.0], [94.5, 1139.0], [94.6, 1147.0], [94.7, 1150.0], [94.8, 1155.0], [94.9, 1161.0], [95.0, 1170.0], [95.1, 1175.0], [95.2, 1185.0], [95.3, 1190.0], [95.4, 1196.0], [95.5, 1203.0], [95.6, 1213.0], [95.7, 1218.0], [95.8, 1225.0], [95.9, 1241.0], [96.0, 1246.0], [96.1, 1254.0], [96.2, 1263.0], [96.3, 1269.0], [96.4, 1281.0], [96.5, 1288.0], [96.6, 1300.0], [96.7, 1316.0], [96.8, 1322.0], [96.9, 1339.0], [97.0, 1355.0], [97.1, 1367.0], [97.2, 1383.0], [97.3, 1394.0], [97.4, 1406.0], [97.5, 1421.0], [97.6, 1430.0], [97.7, 1451.0], [97.8, 1470.0], [97.9, 1484.0], [98.0, 1496.0], [98.1, 1531.0], [98.2, 1564.0], [98.3, 1580.0], [98.4, 1631.0], [98.5, 1687.0], [98.6, 1753.0], [98.7, 1816.0], [98.8, 1860.0], [98.9, 1961.0], [99.0, 2029.0], [99.1, 2112.0], [99.2, 2188.0], [99.3, 2227.0], [99.4, 2275.0], [99.5, 2340.0], [99.6, 2399.0], [99.7, 2480.0], [99.8, 2606.0], [99.9, 3727.0], [100.0, 4743.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1872.0, "series": [{"data": [[0.0, 1872.0], [600.0, 260.0], [700.0, 230.0], [800.0, 183.0], [900.0, 87.0], [1000.0, 76.0], [1100.0, 83.0], [1200.0, 59.0], [1300.0, 40.0], [1400.0, 36.0], [1500.0, 17.0], [100.0, 719.0], [1600.0, 9.0], [1700.0, 9.0], [1800.0, 8.0], [1900.0, 7.0], [2000.0, 5.0], [2100.0, 9.0], [2300.0, 7.0], [2200.0, 12.0], [2400.0, 7.0], [2500.0, 3.0], [2600.0, 1.0], [2700.0, 2.0], [200.0, 590.0], [3200.0, 1.0], [3500.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [4000.0, 2.0], [4100.0, 1.0], [300.0, 345.0], [4700.0, 1.0], [400.0, 321.0], [500.0, 257.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 104.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3849.0, "series": [{"data": [[0.0, 3849.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1309.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 104.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.941634241245135, "minX": 1.60387032E12, "maxY": 10.0, "series": [{"data": [[1.60387044E12, 10.0], [1.60387038E12, 10.0], [1.60387032E12, 9.971428571428559], [1.6038705E12, 9.941634241245135]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038705E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 363.13787185354704, "minX": 1.0, "maxY": 4743.0, "series": [{"data": [[4.0, 2017.0], [8.0, 666.6666666666667], [2.0, 3727.0], [1.0, 4743.0], [9.0, 536.75], [5.0, 1410.0], [10.0, 363.13787185354704], [6.0, 4000.0], [3.0, 4155.0], [7.0, 679.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986507031546962, 367.6719878373242]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6825.566666666667, "minX": 1.60387032E12, "maxY": 1388025.6666666667, "series": [{"data": [[1.60387044E12, 1388025.6666666667], [1.60387038E12, 1338026.55], [1.60387032E12, 898422.3], [1.6038705E12, 624806.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60387044E12, 14938.616666666667], [1.60387038E12, 15826.116666666667], [1.60387032E12, 7900.65], [1.6038705E12, 6825.566666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038705E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 317.6321105794781, "minX": 1.60387032E12, "maxY": 449.7175824175824, "series": [{"data": [[1.60387044E12, 353.62823529411816], [1.60387038E12, 317.6321105794781], [1.60387032E12, 449.7175824175824], [1.6038705E12, 423.88197146562914]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038705E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 317.2344497607658, "minX": 1.60387032E12, "maxY": 449.059340659341, "series": [{"data": [[1.60387044E12, 353.17529411764775], [1.60387038E12, 317.2344497607658], [1.60387032E12, 449.059340659341], [1.6038705E12, 423.54345006485136]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038705E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00823529411764705, "minX": 1.60387032E12, "maxY": 0.09780219780219777, "series": [{"data": [[1.60387044E12, 0.00823529411764705], [1.60387038E12, 0.013822434875066458], [1.60387032E12, 0.09780219780219777], [1.6038705E12, 0.015564202334630342]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038705E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 35.0, "minX": 1.60387032E12, "maxY": 4743.0, "series": [{"data": [[1.60387044E12, 2450.0], [1.60387038E12, 2762.0], [1.60387032E12, 2606.0], [1.6038705E12, 4743.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60387044E12, 42.0], [1.60387038E12, 44.0], [1.60387032E12, 41.198999782800676], [1.6038705E12, 42.94799981594086]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60387044E12, 42.0], [1.60387038E12, 44.0], [1.60387032E12, 42.0], [1.6038705E12, 43.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60387044E12, 42.0], [1.60387038E12, 44.0], [1.60387032E12, 41.654499891400334], [1.6038705E12, 43.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60387044E12, 35.0], [1.60387038E12, 40.0], [1.60387032E12, 37.0], [1.6038705E12, 40.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60387044E12, 203.5], [1.60387038E12, 171.0], [1.60387032E12, 297.5], [1.6038705E12, 247.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038705E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 80.5, "minX": 1.0, "maxY": 4048.0, "series": [{"data": [[2.0, 4024.5], [3.0, 1375.5], [4.0, 1448.0], [5.0, 1765.0], [6.0, 1246.0], [7.0, 1094.0], [8.0, 796.0], [9.0, 974.5], [10.0, 817.0], [11.0, 816.5], [12.0, 696.5], [13.0, 750.0], [14.0, 648.5], [15.0, 628.0], [16.0, 450.5], [17.0, 499.0], [18.0, 461.5], [19.0, 496.0], [20.0, 468.0], [21.0, 275.5], [22.0, 359.5], [23.0, 288.0], [24.0, 393.0], [25.0, 347.0], [26.0, 333.0], [27.0, 253.0], [28.0, 254.5], [29.0, 243.0], [30.0, 207.5], [31.0, 231.5], [32.0, 157.0], [33.0, 222.0], [35.0, 103.5], [34.0, 94.0], [37.0, 185.0], [36.0, 174.5], [39.0, 221.0], [38.0, 97.5], [41.0, 120.0], [40.0, 189.0], [42.0, 179.0], [43.0, 155.5], [44.0, 96.5], [45.0, 92.0], [46.0, 94.5], [47.0, 153.0], [49.0, 96.0], [50.0, 91.0], [53.0, 94.0], [52.0, 132.0], [55.0, 96.0], [56.0, 155.5], [59.0, 88.5], [58.0, 128.5], [61.0, 108.0], [60.0, 80.5], [63.0, 97.0], [64.0, 160.5], [74.0, 82.0], [80.0, 94.5], [81.0, 87.0], [88.0, 95.0], [1.0, 4048.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 80.5, "minX": 1.0, "maxY": 4047.0, "series": [{"data": [[2.0, 4024.5], [3.0, 1374.5], [4.0, 1446.0], [5.0, 1765.0], [6.0, 1245.0], [7.0, 1090.5], [8.0, 795.5], [9.0, 972.5], [10.0, 814.5], [11.0, 814.0], [12.0, 695.0], [13.0, 748.5], [14.0, 647.5], [15.0, 626.5], [16.0, 450.5], [17.0, 498.0], [18.0, 459.0], [19.0, 494.0], [20.0, 467.0], [21.0, 275.0], [22.0, 359.0], [23.0, 288.0], [24.0, 393.0], [25.0, 345.0], [26.0, 332.5], [27.0, 253.0], [28.0, 253.5], [29.0, 242.5], [30.0, 206.5], [31.0, 231.5], [32.0, 157.0], [33.0, 222.0], [35.0, 103.5], [34.0, 94.0], [37.0, 185.0], [36.0, 174.5], [39.0, 221.0], [38.0, 97.5], [41.0, 120.0], [40.0, 189.0], [42.0, 178.5], [43.0, 155.5], [44.0, 96.5], [45.0, 92.0], [46.0, 94.5], [47.0, 152.0], [49.0, 95.5], [50.0, 91.0], [53.0, 94.0], [52.0, 132.0], [55.0, 95.5], [56.0, 155.5], [59.0, 88.5], [58.0, 128.5], [61.0, 108.0], [60.0, 80.5], [63.0, 97.0], [64.0, 160.0], [74.0, 82.0], [80.0, 94.0], [81.0, 87.0], [88.0, 94.5], [1.0, 4047.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.683333333333334, "minX": 1.60387032E12, "maxY": 31.35, "series": [{"data": [[1.60387044E12, 28.333333333333332], [1.60387038E12, 31.35], [1.60387032E12, 15.333333333333334], [1.6038705E12, 12.683333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038705E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.85, "minX": 1.60387032E12, "maxY": 31.35, "series": [{"data": [[1.60387044E12, 28.333333333333332], [1.60387038E12, 31.35], [1.60387032E12, 15.166666666666666], [1.6038705E12, 12.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038705E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.85, "minX": 1.60387032E12, "maxY": 31.35, "series": [{"data": [[1.60387044E12, 28.333333333333332], [1.60387038E12, 31.35], [1.60387032E12, 15.166666666666666], [1.6038705E12, 12.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038705E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.85, "minX": 1.60387032E12, "maxY": 31.35, "series": [{"data": [[1.60387044E12, 28.333333333333332], [1.60387038E12, 31.35], [1.60387032E12, 15.166666666666666], [1.6038705E12, 12.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038705E12, "title": "Total Transactions Per Second"}},
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

