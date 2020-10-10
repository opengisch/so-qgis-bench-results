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
        data: {"result": {"minY": 32.0, "minX": 0.0, "maxY": 3056.0, "series": [{"data": [[0.0, 32.0], [0.1, 33.0], [0.2, 34.0], [0.3, 35.0], [0.4, 35.0], [0.5, 36.0], [0.6, 36.0], [0.7, 37.0], [0.8, 38.0], [0.9, 38.0], [1.0, 38.0], [1.1, 38.0], [1.2, 39.0], [1.3, 39.0], [1.4, 39.0], [1.5, 39.0], [1.6, 39.0], [1.7, 39.0], [1.8, 40.0], [1.9, 40.0], [2.0, 40.0], [2.1, 40.0], [2.2, 40.0], [2.3, 40.0], [2.4, 40.0], [2.5, 40.0], [2.6, 40.0], [2.7, 40.0], [2.8, 41.0], [2.9, 41.0], [3.0, 41.0], [3.1, 41.0], [3.2, 41.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 41.0], [3.7, 41.0], [3.8, 41.0], [3.9, 41.0], [4.0, 41.0], [4.1, 41.0], [4.2, 41.0], [4.3, 41.0], [4.4, 42.0], [4.5, 42.0], [4.6, 42.0], [4.7, 42.0], [4.8, 42.0], [4.9, 42.0], [5.0, 42.0], [5.1, 42.0], [5.2, 42.0], [5.3, 42.0], [5.4, 42.0], [5.5, 42.0], [5.6, 42.0], [5.7, 43.0], [5.8, 43.0], [5.9, 43.0], [6.0, 43.0], [6.1, 43.0], [6.2, 43.0], [6.3, 43.0], [6.4, 43.0], [6.5, 43.0], [6.6, 43.0], [6.7, 43.0], [6.8, 43.0], [6.9, 43.0], [7.0, 43.0], [7.1, 44.0], [7.2, 44.0], [7.3, 44.0], [7.4, 44.0], [7.5, 44.0], [7.6, 44.0], [7.7, 44.0], [7.8, 44.0], [7.9, 44.0], [8.0, 44.0], [8.1, 44.0], [8.2, 44.0], [8.3, 44.0], [8.4, 44.0], [8.5, 45.0], [8.6, 45.0], [8.7, 45.0], [8.8, 45.0], [8.9, 45.0], [9.0, 45.0], [9.1, 45.0], [9.2, 45.0], [9.3, 45.0], [9.4, 45.0], [9.5, 45.0], [9.6, 45.0], [9.7, 45.0], [9.8, 45.0], [9.9, 45.0], [10.0, 46.0], [10.1, 46.0], [10.2, 46.0], [10.3, 46.0], [10.4, 46.0], [10.5, 46.0], [10.6, 46.0], [10.7, 46.0], [10.8, 46.0], [10.9, 46.0], [11.0, 46.0], [11.1, 46.0], [11.2, 46.0], [11.3, 46.0], [11.4, 47.0], [11.5, 47.0], [11.6, 47.0], [11.7, 47.0], [11.8, 47.0], [11.9, 47.0], [12.0, 47.0], [12.1, 47.0], [12.2, 47.0], [12.3, 47.0], [12.4, 48.0], [12.5, 48.0], [12.6, 48.0], [12.7, 48.0], [12.8, 48.0], [12.9, 48.0], [13.0, 48.0], [13.1, 48.0], [13.2, 48.0], [13.3, 49.0], [13.4, 49.0], [13.5, 49.0], [13.6, 49.0], [13.7, 49.0], [13.8, 49.0], [13.9, 49.0], [14.0, 50.0], [14.1, 50.0], [14.2, 50.0], [14.3, 50.0], [14.4, 50.0], [14.5, 50.0], [14.6, 51.0], [14.7, 51.0], [14.8, 51.0], [14.9, 52.0], [15.0, 52.0], [15.1, 52.0], [15.2, 53.0], [15.3, 53.0], [15.4, 54.0], [15.5, 54.0], [15.6, 55.0], [15.7, 56.0], [15.8, 57.0], [15.9, 57.0], [16.0, 58.0], [16.1, 59.0], [16.2, 59.0], [16.3, 60.0], [16.4, 60.0], [16.5, 61.0], [16.6, 62.0], [16.7, 63.0], [16.8, 63.0], [16.9, 64.0], [17.0, 65.0], [17.1, 65.0], [17.2, 66.0], [17.3, 66.0], [17.4, 67.0], [17.5, 67.0], [17.6, 68.0], [17.7, 68.0], [17.8, 68.0], [17.9, 69.0], [18.0, 69.0], [18.1, 70.0], [18.2, 70.0], [18.3, 71.0], [18.4, 71.0], [18.5, 72.0], [18.6, 72.0], [18.7, 72.0], [18.8, 73.0], [18.9, 73.0], [19.0, 74.0], [19.1, 74.0], [19.2, 74.0], [19.3, 75.0], [19.4, 75.0], [19.5, 75.0], [19.6, 76.0], [19.7, 76.0], [19.8, 76.0], [19.9, 76.0], [20.0, 76.0], [20.1, 77.0], [20.2, 77.0], [20.3, 77.0], [20.4, 77.0], [20.5, 77.0], [20.6, 77.0], [20.7, 77.0], [20.8, 78.0], [20.9, 78.0], [21.0, 78.0], [21.1, 78.0], [21.2, 78.0], [21.3, 78.0], [21.4, 78.0], [21.5, 79.0], [21.6, 79.0], [21.7, 79.0], [21.8, 79.0], [21.9, 79.0], [22.0, 79.0], [22.1, 79.0], [22.2, 79.0], [22.3, 80.0], [22.4, 80.0], [22.5, 80.0], [22.6, 80.0], [22.7, 80.0], [22.8, 80.0], [22.9, 80.0], [23.0, 80.0], [23.1, 80.0], [23.2, 80.0], [23.3, 81.0], [23.4, 81.0], [23.5, 81.0], [23.6, 81.0], [23.7, 81.0], [23.8, 81.0], [23.9, 81.0], [24.0, 81.0], [24.1, 81.0], [24.2, 81.0], [24.3, 82.0], [24.4, 82.0], [24.5, 82.0], [24.6, 82.0], [24.7, 82.0], [24.8, 82.0], [24.9, 82.0], [25.0, 82.0], [25.1, 82.0], [25.2, 83.0], [25.3, 83.0], [25.4, 83.0], [25.5, 83.0], [25.6, 83.0], [25.7, 83.0], [25.8, 83.0], [25.9, 83.0], [26.0, 83.0], [26.1, 83.0], [26.2, 83.0], [26.3, 83.0], [26.4, 84.0], [26.5, 84.0], [26.6, 84.0], [26.7, 84.0], [26.8, 84.0], [26.9, 84.0], [27.0, 84.0], [27.1, 84.0], [27.2, 84.0], [27.3, 84.0], [27.4, 84.0], [27.5, 84.0], [27.6, 85.0], [27.7, 85.0], [27.8, 85.0], [27.9, 85.0], [28.0, 85.0], [28.1, 85.0], [28.2, 85.0], [28.3, 85.0], [28.4, 85.0], [28.5, 85.0], [28.6, 85.0], [28.7, 86.0], [28.8, 86.0], [28.9, 86.0], [29.0, 86.0], [29.1, 86.0], [29.2, 86.0], [29.3, 86.0], [29.4, 86.0], [29.5, 86.0], [29.6, 86.0], [29.7, 86.0], [29.8, 87.0], [29.9, 87.0], [30.0, 87.0], [30.1, 87.0], [30.2, 87.0], [30.3, 87.0], [30.4, 87.0], [30.5, 87.0], [30.6, 87.0], [30.7, 87.0], [30.8, 87.0], [30.9, 87.0], [31.0, 88.0], [31.1, 88.0], [31.2, 88.0], [31.3, 88.0], [31.4, 88.0], [31.5, 88.0], [31.6, 88.0], [31.7, 88.0], [31.8, 88.0], [31.9, 88.0], [32.0, 88.0], [32.1, 89.0], [32.2, 89.0], [32.3, 89.0], [32.4, 89.0], [32.5, 89.0], [32.6, 89.0], [32.7, 89.0], [32.8, 89.0], [32.9, 89.0], [33.0, 89.0], [33.1, 89.0], [33.2, 90.0], [33.3, 90.0], [33.4, 90.0], [33.5, 90.0], [33.6, 90.0], [33.7, 90.0], [33.8, 90.0], [33.9, 90.0], [34.0, 91.0], [34.1, 91.0], [34.2, 91.0], [34.3, 91.0], [34.4, 91.0], [34.5, 91.0], [34.6, 91.0], [34.7, 91.0], [34.8, 91.0], [34.9, 92.0], [35.0, 92.0], [35.1, 92.0], [35.2, 92.0], [35.3, 92.0], [35.4, 93.0], [35.5, 93.0], [35.6, 93.0], [35.7, 93.0], [35.8, 93.0], [35.9, 93.0], [36.0, 94.0], [36.1, 94.0], [36.2, 94.0], [36.3, 94.0], [36.4, 95.0], [36.5, 95.0], [36.6, 95.0], [36.7, 95.0], [36.8, 96.0], [36.9, 96.0], [37.0, 96.0], [37.1, 96.0], [37.2, 97.0], [37.3, 97.0], [37.4, 97.0], [37.5, 97.0], [37.6, 98.0], [37.7, 98.0], [37.8, 98.0], [37.9, 99.0], [38.0, 99.0], [38.1, 100.0], [38.2, 100.0], [38.3, 101.0], [38.4, 102.0], [38.5, 102.0], [38.6, 102.0], [38.7, 103.0], [38.8, 104.0], [38.9, 105.0], [39.0, 106.0], [39.1, 107.0], [39.2, 107.0], [39.3, 108.0], [39.4, 109.0], [39.5, 109.0], [39.6, 110.0], [39.7, 111.0], [39.8, 112.0], [39.9, 113.0], [40.0, 113.0], [40.1, 114.0], [40.2, 114.0], [40.3, 116.0], [40.4, 116.0], [40.5, 117.0], [40.6, 118.0], [40.7, 119.0], [40.8, 119.0], [40.9, 120.0], [41.0, 122.0], [41.1, 122.0], [41.2, 123.0], [41.3, 123.0], [41.4, 124.0], [41.5, 125.0], [41.6, 125.0], [41.7, 126.0], [41.8, 126.0], [41.9, 127.0], [42.0, 127.0], [42.1, 128.0], [42.2, 128.0], [42.3, 129.0], [42.4, 129.0], [42.5, 129.0], [42.6, 130.0], [42.7, 131.0], [42.8, 131.0], [42.9, 132.0], [43.0, 132.0], [43.1, 133.0], [43.2, 134.0], [43.3, 135.0], [43.4, 136.0], [43.5, 137.0], [43.6, 138.0], [43.7, 138.0], [43.8, 139.0], [43.9, 140.0], [44.0, 140.0], [44.1, 142.0], [44.2, 144.0], [44.3, 145.0], [44.4, 146.0], [44.5, 147.0], [44.6, 147.0], [44.7, 147.0], [44.8, 148.0], [44.9, 149.0], [45.0, 149.0], [45.1, 150.0], [45.2, 150.0], [45.3, 151.0], [45.4, 151.0], [45.5, 152.0], [45.6, 154.0], [45.7, 155.0], [45.8, 155.0], [45.9, 156.0], [46.0, 158.0], [46.1, 158.0], [46.2, 159.0], [46.3, 160.0], [46.4, 160.0], [46.5, 161.0], [46.6, 161.0], [46.7, 162.0], [46.8, 163.0], [46.9, 164.0], [47.0, 165.0], [47.1, 166.0], [47.2, 166.0], [47.3, 167.0], [47.4, 168.0], [47.5, 168.0], [47.6, 169.0], [47.7, 170.0], [47.8, 170.0], [47.9, 172.0], [48.0, 173.0], [48.1, 174.0], [48.2, 174.0], [48.3, 176.0], [48.4, 177.0], [48.5, 180.0], [48.6, 181.0], [48.7, 182.0], [48.8, 183.0], [48.9, 183.0], [49.0, 184.0], [49.1, 185.0], [49.2, 186.0], [49.3, 187.0], [49.4, 189.0], [49.5, 189.0], [49.6, 190.0], [49.7, 191.0], [49.8, 192.0], [49.9, 192.0], [50.0, 193.0], [50.1, 194.0], [50.2, 195.0], [50.3, 196.0], [50.4, 198.0], [50.5, 198.0], [50.6, 199.0], [50.7, 200.0], [50.8, 202.0], [50.9, 204.0], [51.0, 205.0], [51.1, 206.0], [51.2, 209.0], [51.3, 210.0], [51.4, 211.0], [51.5, 212.0], [51.6, 212.0], [51.7, 214.0], [51.8, 215.0], [51.9, 216.0], [52.0, 217.0], [52.1, 218.0], [52.2, 218.0], [52.3, 221.0], [52.4, 222.0], [52.5, 224.0], [52.6, 225.0], [52.7, 226.0], [52.8, 228.0], [52.9, 230.0], [53.0, 230.0], [53.1, 232.0], [53.2, 233.0], [53.3, 233.0], [53.4, 235.0], [53.5, 235.0], [53.6, 238.0], [53.7, 239.0], [53.8, 240.0], [53.9, 241.0], [54.0, 242.0], [54.1, 243.0], [54.2, 244.0], [54.3, 244.0], [54.4, 245.0], [54.5, 246.0], [54.6, 247.0], [54.7, 247.0], [54.8, 248.0], [54.9, 249.0], [55.0, 250.0], [55.1, 251.0], [55.2, 252.0], [55.3, 253.0], [55.4, 253.0], [55.5, 254.0], [55.6, 256.0], [55.7, 256.0], [55.8, 257.0], [55.9, 259.0], [56.0, 260.0], [56.1, 260.0], [56.2, 260.0], [56.3, 262.0], [56.4, 263.0], [56.5, 263.0], [56.6, 265.0], [56.7, 266.0], [56.8, 267.0], [56.9, 270.0], [57.0, 272.0], [57.1, 272.0], [57.2, 274.0], [57.3, 275.0], [57.4, 277.0], [57.5, 277.0], [57.6, 278.0], [57.7, 279.0], [57.8, 280.0], [57.9, 281.0], [58.0, 282.0], [58.1, 283.0], [58.2, 284.0], [58.3, 285.0], [58.4, 286.0], [58.5, 288.0], [58.6, 288.0], [58.7, 290.0], [58.8, 292.0], [58.9, 293.0], [59.0, 295.0], [59.1, 296.0], [59.2, 297.0], [59.3, 299.0], [59.4, 300.0], [59.5, 302.0], [59.6, 303.0], [59.7, 303.0], [59.8, 305.0], [59.9, 305.0], [60.0, 307.0], [60.1, 309.0], [60.2, 310.0], [60.3, 312.0], [60.4, 314.0], [60.5, 314.0], [60.6, 316.0], [60.7, 317.0], [60.8, 319.0], [60.9, 320.0], [61.0, 321.0], [61.1, 323.0], [61.2, 323.0], [61.3, 325.0], [61.4, 326.0], [61.5, 328.0], [61.6, 329.0], [61.7, 331.0], [61.8, 332.0], [61.9, 333.0], [62.0, 334.0], [62.1, 335.0], [62.2, 338.0], [62.3, 339.0], [62.4, 341.0], [62.5, 342.0], [62.6, 343.0], [62.7, 345.0], [62.8, 347.0], [62.9, 350.0], [63.0, 352.0], [63.1, 353.0], [63.2, 356.0], [63.3, 357.0], [63.4, 359.0], [63.5, 360.0], [63.6, 362.0], [63.7, 364.0], [63.8, 366.0], [63.9, 368.0], [64.0, 370.0], [64.1, 371.0], [64.2, 373.0], [64.3, 374.0], [64.4, 375.0], [64.5, 376.0], [64.6, 378.0], [64.7, 380.0], [64.8, 382.0], [64.9, 383.0], [65.0, 385.0], [65.1, 386.0], [65.2, 387.0], [65.3, 389.0], [65.4, 390.0], [65.5, 392.0], [65.6, 392.0], [65.7, 393.0], [65.8, 395.0], [65.9, 396.0], [66.0, 396.0], [66.1, 397.0], [66.2, 398.0], [66.3, 400.0], [66.4, 401.0], [66.5, 402.0], [66.6, 404.0], [66.7, 407.0], [66.8, 407.0], [66.9, 408.0], [67.0, 408.0], [67.1, 409.0], [67.2, 410.0], [67.3, 412.0], [67.4, 413.0], [67.5, 414.0], [67.6, 415.0], [67.7, 416.0], [67.8, 416.0], [67.9, 417.0], [68.0, 418.0], [68.1, 420.0], [68.2, 422.0], [68.3, 423.0], [68.4, 424.0], [68.5, 425.0], [68.6, 426.0], [68.7, 427.0], [68.8, 429.0], [68.9, 430.0], [69.0, 431.0], [69.1, 432.0], [69.2, 434.0], [69.3, 436.0], [69.4, 436.0], [69.5, 438.0], [69.6, 439.0], [69.7, 441.0], [69.8, 442.0], [69.9, 444.0], [70.0, 445.0], [70.1, 446.0], [70.2, 447.0], [70.3, 448.0], [70.4, 450.0], [70.5, 451.0], [70.6, 452.0], [70.7, 454.0], [70.8, 455.0], [70.9, 457.0], [71.0, 458.0], [71.1, 459.0], [71.2, 460.0], [71.3, 462.0], [71.4, 466.0], [71.5, 468.0], [71.6, 469.0], [71.7, 472.0], [71.8, 474.0], [71.9, 475.0], [72.0, 476.0], [72.1, 478.0], [72.2, 479.0], [72.3, 481.0], [72.4, 482.0], [72.5, 483.0], [72.6, 484.0], [72.7, 487.0], [72.8, 490.0], [72.9, 493.0], [73.0, 494.0], [73.1, 496.0], [73.2, 497.0], [73.3, 498.0], [73.4, 499.0], [73.5, 500.0], [73.6, 502.0], [73.7, 505.0], [73.8, 506.0], [73.9, 508.0], [74.0, 509.0], [74.1, 512.0], [74.2, 512.0], [74.3, 514.0], [74.4, 515.0], [74.5, 516.0], [74.6, 518.0], [74.7, 519.0], [74.8, 521.0], [74.9, 526.0], [75.0, 529.0], [75.1, 532.0], [75.2, 535.0], [75.3, 537.0], [75.4, 539.0], [75.5, 540.0], [75.6, 542.0], [75.7, 544.0], [75.8, 545.0], [75.9, 547.0], [76.0, 548.0], [76.1, 549.0], [76.2, 552.0], [76.3, 554.0], [76.4, 556.0], [76.5, 558.0], [76.6, 561.0], [76.7, 564.0], [76.8, 565.0], [76.9, 567.0], [77.0, 569.0], [77.1, 571.0], [77.2, 574.0], [77.3, 575.0], [77.4, 577.0], [77.5, 581.0], [77.6, 583.0], [77.7, 585.0], [77.8, 586.0], [77.9, 587.0], [78.0, 589.0], [78.1, 591.0], [78.2, 594.0], [78.3, 597.0], [78.4, 600.0], [78.5, 602.0], [78.6, 604.0], [78.7, 605.0], [78.8, 607.0], [78.9, 609.0], [79.0, 611.0], [79.1, 613.0], [79.2, 614.0], [79.3, 616.0], [79.4, 617.0], [79.5, 619.0], [79.6, 621.0], [79.7, 622.0], [79.8, 624.0], [79.9, 626.0], [80.0, 628.0], [80.1, 629.0], [80.2, 633.0], [80.3, 635.0], [80.4, 636.0], [80.5, 641.0], [80.6, 643.0], [80.7, 646.0], [80.8, 648.0], [80.9, 649.0], [81.0, 652.0], [81.1, 654.0], [81.2, 657.0], [81.3, 660.0], [81.4, 661.0], [81.5, 664.0], [81.6, 666.0], [81.7, 668.0], [81.8, 670.0], [81.9, 673.0], [82.0, 675.0], [82.1, 678.0], [82.2, 681.0], [82.3, 682.0], [82.4, 685.0], [82.5, 687.0], [82.6, 688.0], [82.7, 691.0], [82.8, 694.0], [82.9, 697.0], [83.0, 698.0], [83.1, 701.0], [83.2, 702.0], [83.3, 703.0], [83.4, 706.0], [83.5, 709.0], [83.6, 711.0], [83.7, 714.0], [83.8, 714.0], [83.9, 717.0], [84.0, 718.0], [84.1, 720.0], [84.2, 721.0], [84.3, 722.0], [84.4, 723.0], [84.5, 728.0], [84.6, 733.0], [84.7, 734.0], [84.8, 738.0], [84.9, 742.0], [85.0, 745.0], [85.1, 748.0], [85.2, 751.0], [85.3, 753.0], [85.4, 755.0], [85.5, 757.0], [85.6, 758.0], [85.7, 761.0], [85.8, 762.0], [85.9, 763.0], [86.0, 764.0], [86.1, 768.0], [86.2, 770.0], [86.3, 772.0], [86.4, 775.0], [86.5, 779.0], [86.6, 781.0], [86.7, 782.0], [86.8, 785.0], [86.9, 789.0], [87.0, 790.0], [87.1, 793.0], [87.2, 797.0], [87.3, 799.0], [87.4, 801.0], [87.5, 803.0], [87.6, 804.0], [87.7, 805.0], [87.8, 806.0], [87.9, 808.0], [88.0, 810.0], [88.1, 813.0], [88.2, 815.0], [88.3, 817.0], [88.4, 818.0], [88.5, 823.0], [88.6, 824.0], [88.7, 828.0], [88.8, 830.0], [88.9, 831.0], [89.0, 837.0], [89.1, 841.0], [89.2, 843.0], [89.3, 846.0], [89.4, 850.0], [89.5, 852.0], [89.6, 856.0], [89.7, 861.0], [89.8, 863.0], [89.9, 865.0], [90.0, 867.0], [90.1, 870.0], [90.2, 873.0], [90.3, 876.0], [90.4, 879.0], [90.5, 883.0], [90.6, 887.0], [90.7, 889.0], [90.8, 893.0], [90.9, 896.0], [91.0, 902.0], [91.1, 904.0], [91.2, 909.0], [91.3, 917.0], [91.4, 922.0], [91.5, 926.0], [91.6, 932.0], [91.7, 938.0], [91.8, 945.0], [91.9, 951.0], [92.0, 957.0], [92.1, 958.0], [92.2, 962.0], [92.3, 973.0], [92.4, 979.0], [92.5, 985.0], [92.6, 990.0], [92.7, 996.0], [92.8, 1007.0], [92.9, 1013.0], [93.0, 1017.0], [93.1, 1025.0], [93.2, 1033.0], [93.3, 1038.0], [93.4, 1042.0], [93.5, 1049.0], [93.6, 1054.0], [93.7, 1056.0], [93.8, 1063.0], [93.9, 1066.0], [94.0, 1071.0], [94.1, 1075.0], [94.2, 1082.0], [94.3, 1090.0], [94.4, 1092.0], [94.5, 1102.0], [94.6, 1108.0], [94.7, 1111.0], [94.8, 1123.0], [94.9, 1135.0], [95.0, 1137.0], [95.1, 1146.0], [95.2, 1153.0], [95.3, 1166.0], [95.4, 1173.0], [95.5, 1178.0], [95.6, 1183.0], [95.7, 1188.0], [95.8, 1199.0], [95.9, 1209.0], [96.0, 1220.0], [96.1, 1228.0], [96.2, 1234.0], [96.3, 1249.0], [96.4, 1259.0], [96.5, 1273.0], [96.6, 1278.0], [96.7, 1307.0], [96.8, 1316.0], [96.9, 1330.0], [97.0, 1339.0], [97.1, 1357.0], [97.2, 1365.0], [97.3, 1386.0], [97.4, 1400.0], [97.5, 1409.0], [97.6, 1416.0], [97.7, 1436.0], [97.8, 1467.0], [97.9, 1483.0], [98.0, 1499.0], [98.1, 1517.0], [98.2, 1534.0], [98.3, 1555.0], [98.4, 1567.0], [98.5, 1606.0], [98.6, 1654.0], [98.7, 1702.0], [98.8, 1781.0], [98.9, 1815.0], [99.0, 1873.0], [99.1, 1930.0], [99.2, 2075.0], [99.3, 2179.0], [99.4, 2199.0], [99.5, 2304.0], [99.6, 2385.0], [99.7, 2514.0], [99.8, 2596.0], [99.9, 2738.0], [100.0, 3056.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2006.0, "series": [{"data": [[0.0, 2006.0], [600.0, 247.0], [700.0, 225.0], [800.0, 194.0], [900.0, 92.0], [1000.0, 93.0], [1100.0, 69.0], [1200.0, 46.0], [1300.0, 37.0], [1400.0, 33.0], [1500.0, 24.0], [100.0, 665.0], [1600.0, 12.0], [1700.0, 8.0], [1800.0, 9.0], [1900.0, 6.0], [2000.0, 5.0], [2100.0, 10.0], [2300.0, 6.0], [2200.0, 4.0], [2400.0, 5.0], [2500.0, 7.0], [2600.0, 3.0], [2700.0, 1.0], [2900.0, 2.0], [3000.0, 3.0], [200.0, 460.0], [300.0, 364.0], [400.0, 376.0], [500.0, 260.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 105.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3877.0, "series": [{"data": [[0.0, 3877.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1290.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 105.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.947058823529414, "minX": 1.60234644E12, "maxY": 10.0, "series": [{"data": [[1.60234656E12, 10.0], [1.60234662E12, 9.947058823529414], [1.60234644E12, 9.968000000000005], [1.6023465E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234662E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 357.7412414318349, "minX": 1.0, "maxY": 3056.0, "series": [{"data": [[4.0, 1282.5], [8.0, 672.6666666666667], [2.0, 2469.0], [1.0, 3056.0], [9.0, 774.6666666666667], [5.0, 874.0], [10.0, 357.7412414318349], [6.0, 3034.0], [3.0, 2988.0], [7.0, 675.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986153262518927, 361.078717754172]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7507.316666666667, "minX": 1.60234644E12, "maxY": 1399155.1, "series": [{"data": [[1.60234656E12, 1399155.1], [1.60234662E12, 676171.5333333333], [1.60234644E12, 823228.9833333333], [1.6023465E12, 1390957.2166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60234656E12, 15453.75], [1.60234662E12, 7507.316666666667], [1.60234644E12, 7587.2], [1.6023465E12, 15031.283333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234662E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 337.2129681386252, "minX": 1.60234644E12, "maxY": 422.90400000000017, "series": [{"data": [[1.60234656E12, 339.8538111490329], [1.60234662E12, 391.56352941176493], [1.60234644E12, 422.90400000000017], [1.6023465E12, 337.2129681386252]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234662E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 336.88708775852433, "minX": 1.60234644E12, "maxY": 422.3828571428568, "series": [{"data": [[1.60234656E12, 339.55005688282137], [1.60234662E12, 391.2611764705882], [1.60234644E12, 422.3828571428568], [1.6023465E12, 336.88708775852433]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234662E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009101251422070545, "minX": 1.60234644E12, "maxY": 0.11771428571428584, "series": [{"data": [[1.60234656E12, 0.009101251422070545], [1.60234662E12, 0.00941176470588236], [1.60234644E12, 0.11771428571428584], [1.6023465E12, 0.009502515371716072]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234662E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 32.0, "minX": 1.60234644E12, "maxY": 3056.0, "series": [{"data": [[1.60234656E12, 2240.0], [1.60234662E12, 3056.0], [1.60234644E12, 2738.0], [1.6023465E12, 2651.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60234656E12, 38.0], [1.60234662E12, 36.0], [1.60234644E12, 34.88399979114533], [1.6023465E12, 40.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60234656E12, 38.0], [1.60234662E12, 36.0], [1.60234644E12, 35.0], [1.6023465E12, 40.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60234656E12, 38.0], [1.60234662E12, 36.0], [1.60234644E12, 35.0], [1.6023465E12, 40.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60234656E12, 32.0], [1.60234662E12, 33.0], [1.60234644E12, 33.0], [1.6023465E12, 34.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60234656E12, 183.0], [1.60234662E12, 248.0], [1.60234644E12, 260.0], [1.6023465E12, 166.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234662E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 49.5, "minX": 1.0, "maxY": 3056.0, "series": [{"data": [[3.0, 1977.0], [4.0, 2225.0], [5.0, 1779.5], [6.0, 1239.0], [7.0, 769.0], [8.0, 1034.5], [9.0, 888.5], [10.0, 1054.5], [11.0, 552.0], [12.0, 770.5], [13.0, 511.0], [14.0, 724.0], [15.0, 617.0], [16.0, 602.5], [17.0, 557.0], [18.0, 508.0], [19.0, 453.0], [20.0, 384.5], [21.0, 214.0], [22.0, 404.5], [23.0, 116.5], [24.0, 405.5], [25.0, 376.0], [26.0, 253.0], [27.0, 263.0], [28.0, 296.5], [29.0, 290.0], [31.0, 277.0], [33.0, 87.0], [35.0, 87.0], [34.0, 49.5], [37.0, 224.0], [38.0, 152.5], [39.0, 231.0], [40.0, 187.0], [41.0, 145.0], [42.0, 81.0], [45.0, 123.0], [44.0, 97.5], [46.0, 91.5], [48.0, 94.0], [50.0, 140.5], [51.0, 100.0], [53.0, 98.0], [55.0, 96.0], [54.0, 183.5], [56.0, 127.0], [57.0, 88.0], [59.0, 150.0], [58.0, 131.5], [60.0, 83.0], [62.0, 88.0], [65.0, 144.0], [66.0, 78.5], [70.0, 125.5], [74.0, 114.5], [75.0, 83.0], [79.0, 84.0], [95.0, 83.0], [1.0, 3056.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 49.5, "minX": 1.0, "maxY": 3056.0, "series": [{"data": [[3.0, 1974.0], [4.0, 2224.0], [5.0, 1779.5], [6.0, 1238.0], [7.0, 769.0], [8.0, 1033.5], [9.0, 881.5], [10.0, 1052.5], [11.0, 552.0], [12.0, 770.5], [13.0, 510.0], [14.0, 723.5], [15.0, 616.0], [16.0, 602.5], [17.0, 556.0], [18.0, 507.5], [19.0, 452.5], [20.0, 384.0], [21.0, 212.0], [22.0, 404.5], [23.0, 116.5], [24.0, 404.5], [25.0, 376.0], [26.0, 253.0], [27.0, 263.0], [28.0, 296.0], [29.0, 290.0], [31.0, 277.0], [33.0, 87.0], [35.0, 87.0], [34.0, 49.5], [37.0, 224.0], [38.0, 151.5], [39.0, 231.0], [40.0, 186.5], [41.0, 145.0], [42.0, 81.0], [45.0, 123.0], [44.0, 97.5], [46.0, 91.5], [48.0, 94.0], [50.0, 140.0], [51.0, 100.0], [53.0, 98.0], [55.0, 96.0], [54.0, 183.5], [56.0, 127.0], [57.0, 88.0], [59.0, 150.0], [58.0, 131.5], [60.0, 83.0], [62.0, 88.0], [65.0, 144.0], [66.0, 78.5], [70.0, 125.0], [74.0, 114.5], [75.0, 83.0], [79.0, 84.0], [95.0, 83.0], [1.0, 3056.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 14.0, "minX": 1.60234644E12, "maxY": 29.816666666666666, "series": [{"data": [[1.60234656E12, 29.3], [1.60234662E12, 14.0], [1.60234644E12, 14.75], [1.6023465E12, 29.816666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234662E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 14.166666666666666, "minX": 1.60234644E12, "maxY": 29.816666666666666, "series": [{"data": [[1.60234656E12, 29.3], [1.60234662E12, 14.166666666666666], [1.60234644E12, 14.583333333333334], [1.6023465E12, 29.816666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234662E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 14.166666666666666, "minX": 1.60234644E12, "maxY": 29.816666666666666, "series": [{"data": [[1.60234656E12, 29.3], [1.60234662E12, 14.166666666666666], [1.60234644E12, 14.583333333333334], [1.6023465E12, 29.816666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234662E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 14.166666666666666, "minX": 1.60234644E12, "maxY": 29.816666666666666, "series": [{"data": [[1.60234656E12, 29.3], [1.60234662E12, 14.166666666666666], [1.60234644E12, 14.583333333333334], [1.6023465E12, 29.816666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234662E12, "title": "Total Transactions Per Second"}},
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

