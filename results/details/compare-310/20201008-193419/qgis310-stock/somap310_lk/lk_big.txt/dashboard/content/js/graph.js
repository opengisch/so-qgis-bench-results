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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 5870.0, "series": [{"data": [[0.0, 28.0], [0.1, 31.0], [0.2, 32.0], [0.3, 32.0], [0.4, 34.0], [0.5, 34.0], [0.6, 34.0], [0.7, 34.0], [0.8, 34.0], [0.9, 35.0], [1.0, 35.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 39.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 40.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 40.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 42.0], [7.2, 42.0], [7.3, 42.0], [7.4, 42.0], [7.5, 42.0], [7.6, 42.0], [7.7, 42.0], [7.8, 43.0], [7.9, 43.0], [8.0, 43.0], [8.1, 43.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 44.0], [8.9, 44.0], [9.0, 44.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 44.0], [9.6, 45.0], [9.7, 45.0], [9.8, 45.0], [9.9, 45.0], [10.0, 45.0], [10.1, 45.0], [10.2, 45.0], [10.3, 46.0], [10.4, 46.0], [10.5, 46.0], [10.6, 46.0], [10.7, 46.0], [10.8, 46.0], [10.9, 47.0], [11.0, 47.0], [11.1, 47.0], [11.2, 47.0], [11.3, 47.0], [11.4, 47.0], [11.5, 48.0], [11.6, 48.0], [11.7, 48.0], [11.8, 48.0], [11.9, 48.0], [12.0, 48.0], [12.1, 49.0], [12.2, 49.0], [12.3, 49.0], [12.4, 49.0], [12.5, 49.0], [12.6, 49.0], [12.7, 49.0], [12.8, 50.0], [12.9, 50.0], [13.0, 50.0], [13.1, 51.0], [13.2, 51.0], [13.3, 51.0], [13.4, 51.0], [13.5, 51.0], [13.6, 51.0], [13.7, 51.0], [13.8, 52.0], [13.9, 52.0], [14.0, 53.0], [14.1, 53.0], [14.2, 53.0], [14.3, 53.0], [14.4, 54.0], [14.5, 54.0], [14.6, 54.0], [14.7, 54.0], [14.8, 54.0], [14.9, 55.0], [15.0, 55.0], [15.1, 55.0], [15.2, 55.0], [15.3, 55.0], [15.4, 56.0], [15.5, 56.0], [15.6, 56.0], [15.7, 56.0], [15.8, 57.0], [15.9, 57.0], [16.0, 57.0], [16.1, 57.0], [16.2, 57.0], [16.3, 58.0], [16.4, 58.0], [16.5, 58.0], [16.6, 58.0], [16.7, 59.0], [16.8, 59.0], [16.9, 59.0], [17.0, 59.0], [17.1, 59.0], [17.2, 59.0], [17.3, 60.0], [17.4, 60.0], [17.5, 60.0], [17.6, 60.0], [17.7, 61.0], [17.8, 61.0], [17.9, 61.0], [18.0, 61.0], [18.1, 62.0], [18.2, 62.0], [18.3, 62.0], [18.4, 62.0], [18.5, 63.0], [18.6, 63.0], [18.7, 63.0], [18.8, 64.0], [18.9, 64.0], [19.0, 64.0], [19.1, 64.0], [19.2, 64.0], [19.3, 65.0], [19.4, 65.0], [19.5, 65.0], [19.6, 65.0], [19.7, 65.0], [19.8, 65.0], [19.9, 66.0], [20.0, 66.0], [20.1, 66.0], [20.2, 66.0], [20.3, 67.0], [20.4, 67.0], [20.5, 67.0], [20.6, 67.0], [20.7, 68.0], [20.8, 68.0], [20.9, 68.0], [21.0, 68.0], [21.1, 69.0], [21.2, 69.0], [21.3, 69.0], [21.4, 69.0], [21.5, 70.0], [21.6, 70.0], [21.7, 70.0], [21.8, 70.0], [21.9, 70.0], [22.0, 70.0], [22.1, 71.0], [22.2, 71.0], [22.3, 71.0], [22.4, 72.0], [22.5, 72.0], [22.6, 72.0], [22.7, 72.0], [22.8, 73.0], [22.9, 73.0], [23.0, 73.0], [23.1, 74.0], [23.2, 74.0], [23.3, 74.0], [23.4, 74.0], [23.5, 74.0], [23.6, 74.0], [23.7, 74.0], [23.8, 75.0], [23.9, 75.0], [24.0, 75.0], [24.1, 75.0], [24.2, 75.0], [24.3, 76.0], [24.4, 76.0], [24.5, 76.0], [24.6, 76.0], [24.7, 76.0], [24.8, 77.0], [24.9, 77.0], [25.0, 77.0], [25.1, 77.0], [25.2, 77.0], [25.3, 78.0], [25.4, 78.0], [25.5, 78.0], [25.6, 78.0], [25.7, 78.0], [25.8, 78.0], [25.9, 78.0], [26.0, 79.0], [26.1, 79.0], [26.2, 79.0], [26.3, 79.0], [26.4, 79.0], [26.5, 80.0], [26.6, 80.0], [26.7, 80.0], [26.8, 80.0], [26.9, 80.0], [27.0, 80.0], [27.1, 81.0], [27.2, 81.0], [27.3, 81.0], [27.4, 81.0], [27.5, 81.0], [27.6, 82.0], [27.7, 82.0], [27.8, 82.0], [27.9, 82.0], [28.0, 83.0], [28.1, 83.0], [28.2, 83.0], [28.3, 83.0], [28.4, 83.0], [28.5, 83.0], [28.6, 84.0], [28.7, 84.0], [28.8, 84.0], [28.9, 84.0], [29.0, 84.0], [29.1, 85.0], [29.2, 85.0], [29.3, 85.0], [29.4, 85.0], [29.5, 85.0], [29.6, 86.0], [29.7, 86.0], [29.8, 86.0], [29.9, 86.0], [30.0, 87.0], [30.1, 87.0], [30.2, 87.0], [30.3, 87.0], [30.4, 88.0], [30.5, 88.0], [30.6, 88.0], [30.7, 88.0], [30.8, 89.0], [30.9, 89.0], [31.0, 89.0], [31.1, 89.0], [31.2, 89.0], [31.3, 90.0], [31.4, 90.0], [31.5, 90.0], [31.6, 91.0], [31.7, 91.0], [31.8, 91.0], [31.9, 91.0], [32.0, 92.0], [32.1, 92.0], [32.2, 92.0], [32.3, 93.0], [32.4, 93.0], [32.5, 94.0], [32.6, 94.0], [32.7, 94.0], [32.8, 95.0], [32.9, 95.0], [33.0, 95.0], [33.1, 95.0], [33.2, 96.0], [33.3, 96.0], [33.4, 96.0], [33.5, 97.0], [33.6, 97.0], [33.7, 97.0], [33.8, 98.0], [33.9, 98.0], [34.0, 98.0], [34.1, 99.0], [34.2, 99.0], [34.3, 99.0], [34.4, 99.0], [34.5, 100.0], [34.6, 100.0], [34.7, 101.0], [34.8, 101.0], [34.9, 102.0], [35.0, 102.0], [35.1, 103.0], [35.2, 103.0], [35.3, 103.0], [35.4, 104.0], [35.5, 104.0], [35.6, 104.0], [35.7, 105.0], [35.8, 105.0], [35.9, 105.0], [36.0, 106.0], [36.1, 106.0], [36.2, 106.0], [36.3, 107.0], [36.4, 108.0], [36.5, 108.0], [36.6, 108.0], [36.7, 108.0], [36.8, 109.0], [36.9, 109.0], [37.0, 109.0], [37.1, 110.0], [37.2, 110.0], [37.3, 111.0], [37.4, 111.0], [37.5, 112.0], [37.6, 112.0], [37.7, 112.0], [37.8, 112.0], [37.9, 112.0], [38.0, 113.0], [38.1, 113.0], [38.2, 114.0], [38.3, 114.0], [38.4, 115.0], [38.5, 115.0], [38.6, 115.0], [38.7, 116.0], [38.8, 117.0], [38.9, 117.0], [39.0, 118.0], [39.1, 118.0], [39.2, 118.0], [39.3, 119.0], [39.4, 119.0], [39.5, 119.0], [39.6, 120.0], [39.7, 120.0], [39.8, 121.0], [39.9, 122.0], [40.0, 122.0], [40.1, 123.0], [40.2, 123.0], [40.3, 123.0], [40.4, 124.0], [40.5, 124.0], [40.6, 125.0], [40.7, 126.0], [40.8, 126.0], [40.9, 127.0], [41.0, 127.0], [41.1, 128.0], [41.2, 128.0], [41.3, 128.0], [41.4, 129.0], [41.5, 129.0], [41.6, 130.0], [41.7, 131.0], [41.8, 133.0], [41.9, 133.0], [42.0, 134.0], [42.1, 135.0], [42.2, 135.0], [42.3, 136.0], [42.4, 137.0], [42.5, 137.0], [42.6, 138.0], [42.7, 139.0], [42.8, 140.0], [42.9, 140.0], [43.0, 141.0], [43.1, 142.0], [43.2, 142.0], [43.3, 143.0], [43.4, 143.0], [43.5, 144.0], [43.6, 144.0], [43.7, 145.0], [43.8, 145.0], [43.9, 146.0], [44.0, 146.0], [44.1, 147.0], [44.2, 147.0], [44.3, 148.0], [44.4, 149.0], [44.5, 150.0], [44.6, 151.0], [44.7, 151.0], [44.8, 152.0], [44.9, 153.0], [45.0, 153.0], [45.1, 154.0], [45.2, 155.0], [45.3, 156.0], [45.4, 157.0], [45.5, 158.0], [45.6, 158.0], [45.7, 159.0], [45.8, 160.0], [45.9, 161.0], [46.0, 162.0], [46.1, 163.0], [46.2, 163.0], [46.3, 164.0], [46.4, 165.0], [46.5, 166.0], [46.6, 167.0], [46.7, 168.0], [46.8, 169.0], [46.9, 170.0], [47.0, 170.0], [47.1, 171.0], [47.2, 172.0], [47.3, 173.0], [47.4, 173.0], [47.5, 174.0], [47.6, 175.0], [47.7, 177.0], [47.8, 177.0], [47.9, 178.0], [48.0, 179.0], [48.1, 180.0], [48.2, 181.0], [48.3, 182.0], [48.4, 183.0], [48.5, 184.0], [48.6, 185.0], [48.7, 185.0], [48.8, 185.0], [48.9, 187.0], [49.0, 188.0], [49.1, 188.0], [49.2, 189.0], [49.3, 190.0], [49.4, 190.0], [49.5, 191.0], [49.6, 192.0], [49.7, 193.0], [49.8, 193.0], [49.9, 194.0], [50.0, 195.0], [50.1, 195.0], [50.2, 197.0], [50.3, 197.0], [50.4, 199.0], [50.5, 199.0], [50.6, 200.0], [50.7, 201.0], [50.8, 202.0], [50.9, 203.0], [51.0, 204.0], [51.1, 205.0], [51.2, 206.0], [51.3, 208.0], [51.4, 209.0], [51.5, 210.0], [51.6, 211.0], [51.7, 212.0], [51.8, 212.0], [51.9, 214.0], [52.0, 215.0], [52.1, 215.0], [52.2, 216.0], [52.3, 217.0], [52.4, 218.0], [52.5, 218.0], [52.6, 219.0], [52.7, 219.0], [52.8, 220.0], [52.9, 221.0], [53.0, 222.0], [53.1, 223.0], [53.2, 224.0], [53.3, 224.0], [53.4, 225.0], [53.5, 226.0], [53.6, 227.0], [53.7, 228.0], [53.8, 229.0], [53.9, 230.0], [54.0, 231.0], [54.1, 232.0], [54.2, 232.0], [54.3, 233.0], [54.4, 234.0], [54.5, 235.0], [54.6, 235.0], [54.7, 237.0], [54.8, 238.0], [54.9, 238.0], [55.0, 239.0], [55.1, 240.0], [55.2, 240.0], [55.3, 243.0], [55.4, 243.0], [55.5, 245.0], [55.6, 247.0], [55.7, 247.0], [55.8, 248.0], [55.9, 249.0], [56.0, 249.0], [56.1, 250.0], [56.2, 251.0], [56.3, 253.0], [56.4, 253.0], [56.5, 254.0], [56.6, 256.0], [56.7, 257.0], [56.8, 258.0], [56.9, 259.0], [57.0, 260.0], [57.1, 261.0], [57.2, 263.0], [57.3, 264.0], [57.4, 265.0], [57.5, 266.0], [57.6, 268.0], [57.7, 269.0], [57.8, 270.0], [57.9, 270.0], [58.0, 271.0], [58.1, 273.0], [58.2, 273.0], [58.3, 274.0], [58.4, 275.0], [58.5, 276.0], [58.6, 278.0], [58.7, 279.0], [58.8, 280.0], [58.9, 282.0], [59.0, 283.0], [59.1, 284.0], [59.2, 286.0], [59.3, 288.0], [59.4, 289.0], [59.5, 291.0], [59.6, 293.0], [59.7, 295.0], [59.8, 296.0], [59.9, 297.0], [60.0, 298.0], [60.1, 299.0], [60.2, 300.0], [60.3, 302.0], [60.4, 303.0], [60.5, 304.0], [60.6, 307.0], [60.7, 309.0], [60.8, 310.0], [60.9, 311.0], [61.0, 312.0], [61.1, 313.0], [61.2, 314.0], [61.3, 315.0], [61.4, 316.0], [61.5, 317.0], [61.6, 319.0], [61.7, 321.0], [61.8, 321.0], [61.9, 322.0], [62.0, 324.0], [62.1, 325.0], [62.2, 326.0], [62.3, 327.0], [62.4, 328.0], [62.5, 329.0], [62.6, 330.0], [62.7, 331.0], [62.8, 333.0], [62.9, 333.0], [63.0, 335.0], [63.1, 336.0], [63.2, 337.0], [63.3, 339.0], [63.4, 340.0], [63.5, 343.0], [63.6, 343.0], [63.7, 346.0], [63.8, 347.0], [63.9, 348.0], [64.0, 350.0], [64.1, 350.0], [64.2, 351.0], [64.3, 353.0], [64.4, 354.0], [64.5, 355.0], [64.6, 357.0], [64.7, 359.0], [64.8, 361.0], [64.9, 362.0], [65.0, 364.0], [65.1, 366.0], [65.2, 367.0], [65.3, 369.0], [65.4, 370.0], [65.5, 373.0], [65.6, 374.0], [65.7, 377.0], [65.8, 379.0], [65.9, 381.0], [66.0, 382.0], [66.1, 384.0], [66.2, 385.0], [66.3, 387.0], [66.4, 389.0], [66.5, 391.0], [66.6, 393.0], [66.7, 393.0], [66.8, 395.0], [66.9, 396.0], [67.0, 398.0], [67.1, 399.0], [67.2, 401.0], [67.3, 404.0], [67.4, 406.0], [67.5, 408.0], [67.6, 410.0], [67.7, 413.0], [67.8, 415.0], [67.9, 416.0], [68.0, 418.0], [68.1, 423.0], [68.2, 425.0], [68.3, 426.0], [68.4, 427.0], [68.5, 429.0], [68.6, 431.0], [68.7, 435.0], [68.8, 437.0], [68.9, 438.0], [69.0, 439.0], [69.1, 441.0], [69.2, 442.0], [69.3, 443.0], [69.4, 446.0], [69.5, 448.0], [69.6, 449.0], [69.7, 450.0], [69.8, 451.0], [69.9, 454.0], [70.0, 454.0], [70.1, 455.0], [70.2, 456.0], [70.3, 458.0], [70.4, 461.0], [70.5, 462.0], [70.6, 465.0], [70.7, 467.0], [70.8, 468.0], [70.9, 470.0], [71.0, 472.0], [71.1, 473.0], [71.2, 475.0], [71.3, 476.0], [71.4, 479.0], [71.5, 480.0], [71.6, 482.0], [71.7, 485.0], [71.8, 486.0], [71.9, 487.0], [72.0, 489.0], [72.1, 492.0], [72.2, 494.0], [72.3, 496.0], [72.4, 498.0], [72.5, 500.0], [72.6, 502.0], [72.7, 503.0], [72.8, 504.0], [72.9, 506.0], [73.0, 507.0], [73.1, 508.0], [73.2, 510.0], [73.3, 511.0], [73.4, 513.0], [73.5, 516.0], [73.6, 517.0], [73.7, 519.0], [73.8, 521.0], [73.9, 522.0], [74.0, 524.0], [74.1, 525.0], [74.2, 527.0], [74.3, 530.0], [74.4, 532.0], [74.5, 534.0], [74.6, 536.0], [74.7, 537.0], [74.8, 538.0], [74.9, 541.0], [75.0, 544.0], [75.1, 545.0], [75.2, 547.0], [75.3, 549.0], [75.4, 551.0], [75.5, 553.0], [75.6, 557.0], [75.7, 559.0], [75.8, 560.0], [75.9, 563.0], [76.0, 564.0], [76.1, 566.0], [76.2, 567.0], [76.3, 568.0], [76.4, 572.0], [76.5, 576.0], [76.6, 578.0], [76.7, 579.0], [76.8, 581.0], [76.9, 584.0], [77.0, 584.0], [77.1, 585.0], [77.2, 587.0], [77.3, 589.0], [77.4, 591.0], [77.5, 592.0], [77.6, 594.0], [77.7, 595.0], [77.8, 596.0], [77.9, 601.0], [78.0, 604.0], [78.1, 605.0], [78.2, 609.0], [78.3, 612.0], [78.4, 615.0], [78.5, 620.0], [78.6, 622.0], [78.7, 625.0], [78.8, 627.0], [78.9, 628.0], [79.0, 631.0], [79.1, 634.0], [79.2, 636.0], [79.3, 637.0], [79.4, 638.0], [79.5, 639.0], [79.6, 641.0], [79.7, 642.0], [79.8, 643.0], [79.9, 645.0], [80.0, 648.0], [80.1, 651.0], [80.2, 653.0], [80.3, 655.0], [80.4, 657.0], [80.5, 659.0], [80.6, 661.0], [80.7, 662.0], [80.8, 663.0], [80.9, 665.0], [81.0, 669.0], [81.1, 670.0], [81.2, 671.0], [81.3, 674.0], [81.4, 675.0], [81.5, 677.0], [81.6, 680.0], [81.7, 683.0], [81.8, 686.0], [81.9, 688.0], [82.0, 691.0], [82.1, 693.0], [82.2, 694.0], [82.3, 696.0], [82.4, 699.0], [82.5, 700.0], [82.6, 703.0], [82.7, 705.0], [82.8, 707.0], [82.9, 709.0], [83.0, 710.0], [83.1, 714.0], [83.2, 716.0], [83.3, 718.0], [83.4, 720.0], [83.5, 722.0], [83.6, 723.0], [83.7, 726.0], [83.8, 727.0], [83.9, 730.0], [84.0, 731.0], [84.1, 733.0], [84.2, 737.0], [84.3, 739.0], [84.4, 742.0], [84.5, 745.0], [84.6, 746.0], [84.7, 747.0], [84.8, 748.0], [84.9, 750.0], [85.0, 755.0], [85.1, 756.0], [85.2, 758.0], [85.3, 761.0], [85.4, 765.0], [85.5, 769.0], [85.6, 770.0], [85.7, 773.0], [85.8, 777.0], [85.9, 780.0], [86.0, 783.0], [86.1, 785.0], [86.2, 786.0], [86.3, 789.0], [86.4, 794.0], [86.5, 796.0], [86.6, 799.0], [86.7, 802.0], [86.8, 808.0], [86.9, 812.0], [87.0, 816.0], [87.1, 820.0], [87.2, 825.0], [87.3, 827.0], [87.4, 831.0], [87.5, 833.0], [87.6, 836.0], [87.7, 839.0], [87.8, 840.0], [87.9, 846.0], [88.0, 848.0], [88.1, 850.0], [88.2, 854.0], [88.3, 859.0], [88.4, 865.0], [88.5, 867.0], [88.6, 873.0], [88.7, 876.0], [88.8, 879.0], [88.9, 881.0], [89.0, 885.0], [89.1, 887.0], [89.2, 890.0], [89.3, 891.0], [89.4, 894.0], [89.5, 899.0], [89.6, 904.0], [89.7, 905.0], [89.8, 908.0], [89.9, 911.0], [90.0, 913.0], [90.1, 915.0], [90.2, 923.0], [90.3, 931.0], [90.4, 937.0], [90.5, 946.0], [90.6, 948.0], [90.7, 956.0], [90.8, 962.0], [90.9, 970.0], [91.0, 974.0], [91.1, 978.0], [91.2, 984.0], [91.3, 990.0], [91.4, 993.0], [91.5, 997.0], [91.6, 1004.0], [91.7, 1013.0], [91.8, 1016.0], [91.9, 1019.0], [92.0, 1026.0], [92.1, 1030.0], [92.2, 1035.0], [92.3, 1044.0], [92.4, 1046.0], [92.5, 1050.0], [92.6, 1055.0], [92.7, 1061.0], [92.8, 1066.0], [92.9, 1072.0], [93.0, 1074.0], [93.1, 1083.0], [93.2, 1089.0], [93.3, 1091.0], [93.4, 1105.0], [93.5, 1113.0], [93.6, 1123.0], [93.7, 1127.0], [93.8, 1134.0], [93.9, 1144.0], [94.0, 1146.0], [94.1, 1152.0], [94.2, 1161.0], [94.3, 1165.0], [94.4, 1174.0], [94.5, 1187.0], [94.6, 1199.0], [94.7, 1221.0], [94.8, 1239.0], [94.9, 1249.0], [95.0, 1256.0], [95.1, 1272.0], [95.2, 1284.0], [95.3, 1296.0], [95.4, 1307.0], [95.5, 1319.0], [95.6, 1332.0], [95.7, 1338.0], [95.8, 1344.0], [95.9, 1351.0], [96.0, 1358.0], [96.1, 1378.0], [96.2, 1391.0], [96.3, 1400.0], [96.4, 1415.0], [96.5, 1429.0], [96.6, 1434.0], [96.7, 1445.0], [96.8, 1455.0], [96.9, 1467.0], [97.0, 1498.0], [97.1, 1525.0], [97.2, 1538.0], [97.3, 1558.0], [97.4, 1578.0], [97.5, 1595.0], [97.6, 1602.0], [97.7, 1615.0], [97.8, 1633.0], [97.9, 1656.0], [98.0, 1683.0], [98.1, 1699.0], [98.2, 1765.0], [98.3, 1797.0], [98.4, 1812.0], [98.5, 1861.0], [98.6, 1903.0], [98.7, 1916.0], [98.8, 1945.0], [98.9, 2003.0], [99.0, 2151.0], [99.1, 2287.0], [99.2, 2411.0], [99.3, 2514.0], [99.4, 2639.0], [99.5, 2773.0], [99.6, 2970.0], [99.7, 3149.0], [99.8, 3449.0], [99.9, 4329.0], [100.0, 5870.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1815.0, "series": [{"data": [[0.0, 1815.0], [600.0, 241.0], [700.0, 222.0], [800.0, 151.0], [900.0, 107.0], [1000.0, 96.0], [1100.0, 66.0], [1200.0, 39.0], [1300.0, 48.0], [1400.0, 40.0], [1500.0, 28.0], [100.0, 852.0], [1600.0, 29.0], [1700.0, 12.0], [1800.0, 13.0], [1900.0, 16.0], [2000.0, 6.0], [2100.0, 3.0], [2200.0, 3.0], [2300.0, 3.0], [2400.0, 7.0], [2500.0, 3.0], [2600.0, 6.0], [2800.0, 2.0], [2700.0, 3.0], [2900.0, 3.0], [3000.0, 3.0], [3100.0, 3.0], [200.0, 504.0], [3200.0, 2.0], [3400.0, 2.0], [3500.0, 2.0], [4200.0, 2.0], [4300.0, 1.0], [4400.0, 1.0], [300.0, 367.0], [4900.0, 1.0], [5800.0, 3.0], [400.0, 283.0], [500.0, 284.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 157.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3824.0, "series": [{"data": [[0.0, 3824.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1291.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 157.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.8571428571428585, "minX": 1.60218564E12, "maxY": 10.0, "series": [{"data": [[1.60218588E12, 7.8571428571428585], [1.6021857E12, 10.0], [1.60218564E12, 9.978328173374605], [1.60218582E12, 10.0], [1.60218576E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218588E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 376.4434518152442, "minX": 1.0, "maxY": 4329.0, "series": [{"data": [[8.0, 4329.0], [4.0, 2287.0], [2.0, 2471.0], [1.0, 2462.0], [9.0, 4247.0], [10.0, 376.4434518152442], [5.0, 1340.0], [6.0, 2410.5], [3.0, 2191.0], [7.0, 2163.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990136570561438, 381.05899089529674]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 178.91666666666666, "minX": 1.60218564E12, "maxY": 1604345.2833333334, "series": [{"data": [[1.60218588E12, 28224.066666666666], [1.6021857E12, 1535822.75], [1.60218564E12, 129076.66666666667], [1.60218582E12, 1604345.2833333334], [1.60218576E12, 994096.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218588E12, 178.91666666666666], [1.6021857E12, 10508.983333333334], [1.60218564E12, 2904.2], [1.60218582E12, 13655.833333333334], [1.60218576E12, 18331.616666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218588E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 279.9878105954051, "minX": 1.60218564E12, "maxY": 3443.904761904762, "series": [{"data": [[1.60218588E12, 3443.904761904762], [1.6021857E12, 489.0048820179009], [1.60218564E12, 483.9349845201236], [1.60218582E12, 371.7171136653894], [1.60218576E12, 279.9878105954051]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218588E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 279.7730895452412, "minX": 1.60218564E12, "maxY": 3443.285714285714, "series": [{"data": [[1.60218588E12, 3443.285714285714], [1.6021857E12, 488.4043938161116], [1.60218564E12, 483.62848297213634], [1.60218582E12, 371.2752234993614], [1.60218576E12, 279.7730895452412]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218588E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60218564E12, "maxY": 0.6253869969040243, "series": [{"data": [[1.60218588E12, 0.0], [1.6021857E12, 0.010577705451586658], [1.60218564E12, 0.6253869969040243], [1.60218582E12, 0.008939974457215838], [1.60218576E12, 0.010314111579934384]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218588E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60218564E12, "maxY": 5870.0, "series": [{"data": [[1.60218588E12, 5870.0], [1.6021857E12, 2514.0], [1.60218564E12, 3544.0], [1.60218582E12, 2970.0], [1.60218576E12, 2971.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218588E12, 1089.0], [1.6021857E12, 35.0], [1.60218564E12, 68.66399969100952], [1.60218582E12, 34.10299962639809], [1.60218576E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218588E12, 1089.0], [1.6021857E12, 35.177000117301944], [1.60218564E12, 69.20760003089904], [1.60218582E12, 35.0], [1.60218576E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218588E12, 1089.0], [1.6021857E12, 35.0], [1.60218564E12, 69.0779999613762], [1.60218582E12, 34.886499813199045], [1.60218576E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218588E12, 1089.0], [1.6021857E12, 28.0], [1.60218564E12, 40.0], [1.60218582E12, 30.0], [1.60218576E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218588E12, 3139.0], [1.6021857E12, 363.0], [1.60218564E12, 277.0], [1.60218582E12, 228.0], [1.60218576E12, 129.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218588E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 49.0, "minX": 1.0, "maxY": 2639.0, "series": [{"data": [[2.0, 725.5], [3.0, 899.0], [4.0, 1805.5], [5.0, 2601.5], [6.0, 1836.5], [7.0, 1141.5], [8.0, 826.5], [9.0, 1048.0], [10.0, 720.0], [11.0, 812.5], [12.0, 766.0], [13.0, 749.0], [14.0, 612.5], [15.0, 584.0], [16.0, 637.5], [17.0, 549.0], [18.0, 541.0], [19.0, 464.5], [20.0, 329.0], [21.0, 391.0], [22.0, 411.5], [23.0, 264.0], [24.0, 249.0], [25.0, 247.0], [26.0, 332.0], [27.0, 187.0], [28.0, 230.5], [29.0, 343.0], [30.0, 166.0], [31.0, 166.0], [32.0, 95.0], [33.0, 254.5], [34.0, 111.5], [35.0, 124.0], [36.0, 167.0], [37.0, 74.0], [39.0, 84.0], [40.0, 94.0], [41.0, 188.0], [42.0, 122.5], [43.0, 103.0], [45.0, 171.0], [46.0, 81.5], [47.0, 122.0], [48.0, 113.0], [49.0, 128.5], [51.0, 49.0], [53.0, 164.0], [54.0, 144.0], [56.0, 166.0], [57.0, 148.5], [58.0, 108.5], [59.0, 83.0], [60.0, 118.0], [65.0, 160.0], [68.0, 94.5], [73.0, 97.0], [72.0, 77.5], [81.0, 133.0], [83.0, 76.0], [86.0, 83.5], [95.0, 78.0], [1.0, 2639.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 49.0, "minX": 1.0, "maxY": 2638.0, "series": [{"data": [[2.0, 716.5], [3.0, 898.0], [4.0, 1801.0], [5.0, 2601.0], [6.0, 1833.0], [7.0, 1139.0], [8.0, 826.0], [9.0, 1048.0], [10.0, 719.0], [11.0, 812.0], [12.0, 766.0], [13.0, 748.0], [14.0, 612.0], [15.0, 584.0], [16.0, 637.0], [17.0, 549.0], [18.0, 540.0], [19.0, 464.5], [20.0, 328.0], [21.0, 390.0], [22.0, 411.5], [23.0, 264.0], [24.0, 249.0], [25.0, 247.0], [26.0, 332.0], [27.0, 187.0], [28.0, 230.5], [29.0, 343.0], [30.0, 166.0], [31.0, 166.0], [32.0, 95.0], [33.0, 253.5], [34.0, 111.5], [35.0, 124.0], [36.0, 167.0], [37.0, 74.0], [39.0, 83.5], [40.0, 94.0], [41.0, 188.0], [42.0, 122.5], [43.0, 103.0], [45.0, 170.0], [46.0, 81.5], [47.0, 122.0], [48.0, 113.0], [49.0, 128.5], [51.0, 49.0], [53.0, 163.0], [54.0, 144.0], [56.0, 166.0], [57.0, 148.5], [58.0, 108.5], [59.0, 83.0], [60.0, 118.0], [65.0, 160.0], [68.0, 94.5], [73.0, 97.0], [72.0, 77.5], [81.0, 133.0], [83.0, 76.0], [86.0, 83.5], [95.0, 78.0], [1.0, 2638.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.60218564E12, "maxY": 35.55, "series": [{"data": [[1.60218588E12, 0.18333333333333332], [1.6021857E12, 20.483333333333334], [1.60218564E12, 5.55], [1.60218582E12, 26.1], [1.60218576E12, 35.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218588E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.60218564E12, "maxY": 35.55, "series": [{"data": [[1.60218588E12, 0.35], [1.6021857E12, 20.483333333333334], [1.60218564E12, 5.383333333333334], [1.60218582E12, 26.1], [1.60218576E12, 35.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218588E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.60218564E12, "maxY": 35.55, "series": [{"data": [[1.60218588E12, 0.35], [1.6021857E12, 20.483333333333334], [1.60218564E12, 5.383333333333334], [1.60218582E12, 26.1], [1.60218576E12, 35.55]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218588E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.60218564E12, "maxY": 35.55, "series": [{"data": [[1.60218588E12, 0.35], [1.6021857E12, 20.483333333333334], [1.60218564E12, 5.383333333333334], [1.60218582E12, 26.1], [1.60218576E12, 35.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218588E12, "title": "Total Transactions Per Second"}},
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

