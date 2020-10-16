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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 3537.0, "series": [{"data": [[0.0, 31.0], [0.1, 33.0], [0.2, 35.0], [0.3, 35.0], [0.4, 36.0], [0.5, 36.0], [0.6, 36.0], [0.7, 37.0], [0.8, 37.0], [0.9, 37.0], [1.0, 37.0], [1.1, 37.0], [1.2, 38.0], [1.3, 38.0], [1.4, 38.0], [1.5, 38.0], [1.6, 38.0], [1.7, 38.0], [1.8, 38.0], [1.9, 39.0], [2.0, 39.0], [2.1, 39.0], [2.2, 39.0], [2.3, 39.0], [2.4, 39.0], [2.5, 39.0], [2.6, 40.0], [2.7, 40.0], [2.8, 40.0], [2.9, 40.0], [3.0, 40.0], [3.1, 40.0], [3.2, 40.0], [3.3, 40.0], [3.4, 40.0], [3.5, 40.0], [3.6, 41.0], [3.7, 41.0], [3.8, 41.0], [3.9, 41.0], [4.0, 41.0], [4.1, 41.0], [4.2, 41.0], [4.3, 42.0], [4.4, 42.0], [4.5, 42.0], [4.6, 42.0], [4.7, 42.0], [4.8, 42.0], [4.9, 42.0], [5.0, 42.0], [5.1, 42.0], [5.2, 42.0], [5.3, 43.0], [5.4, 43.0], [5.5, 43.0], [5.6, 43.0], [5.7, 43.0], [5.8, 43.0], [5.9, 44.0], [6.0, 44.0], [6.1, 44.0], [6.2, 44.0], [6.3, 44.0], [6.4, 44.0], [6.5, 44.0], [6.6, 44.0], [6.7, 45.0], [6.8, 45.0], [6.9, 45.0], [7.0, 45.0], [7.1, 45.0], [7.2, 45.0], [7.3, 45.0], [7.4, 46.0], [7.5, 46.0], [7.6, 46.0], [7.7, 46.0], [7.8, 46.0], [7.9, 47.0], [8.0, 47.0], [8.1, 47.0], [8.2, 47.0], [8.3, 48.0], [8.4, 48.0], [8.5, 49.0], [8.6, 49.0], [8.7, 50.0], [8.8, 50.0], [8.9, 51.0], [9.0, 51.0], [9.1, 51.0], [9.2, 52.0], [9.3, 53.0], [9.4, 53.0], [9.5, 55.0], [9.6, 55.0], [9.7, 57.0], [9.8, 57.0], [9.9, 58.0], [10.0, 59.0], [10.1, 59.0], [10.2, 60.0], [10.3, 60.0], [10.4, 60.0], [10.5, 61.0], [10.6, 61.0], [10.7, 62.0], [10.8, 62.0], [10.9, 63.0], [11.0, 63.0], [11.1, 64.0], [11.2, 64.0], [11.3, 64.0], [11.4, 64.0], [11.5, 65.0], [11.6, 65.0], [11.7, 65.0], [11.8, 66.0], [11.9, 66.0], [12.0, 67.0], [12.1, 67.0], [12.2, 68.0], [12.3, 68.0], [12.4, 68.0], [12.5, 69.0], [12.6, 69.0], [12.7, 69.0], [12.8, 69.0], [12.9, 70.0], [13.0, 70.0], [13.1, 70.0], [13.2, 70.0], [13.3, 70.0], [13.4, 70.0], [13.5, 70.0], [13.6, 71.0], [13.7, 71.0], [13.8, 71.0], [13.9, 71.0], [14.0, 71.0], [14.1, 71.0], [14.2, 71.0], [14.3, 72.0], [14.4, 72.0], [14.5, 72.0], [14.6, 72.0], [14.7, 72.0], [14.8, 72.0], [14.9, 72.0], [15.0, 72.0], [15.1, 72.0], [15.2, 73.0], [15.3, 73.0], [15.4, 73.0], [15.5, 73.0], [15.6, 73.0], [15.7, 73.0], [15.8, 73.0], [15.9, 73.0], [16.0, 73.0], [16.1, 73.0], [16.2, 73.0], [16.3, 73.0], [16.4, 73.0], [16.5, 74.0], [16.6, 74.0], [16.7, 74.0], [16.8, 74.0], [16.9, 74.0], [17.0, 74.0], [17.1, 74.0], [17.2, 74.0], [17.3, 74.0], [17.4, 74.0], [17.5, 75.0], [17.6, 75.0], [17.7, 75.0], [17.8, 75.0], [17.9, 75.0], [18.0, 75.0], [18.1, 75.0], [18.2, 75.0], [18.3, 75.0], [18.4, 75.0], [18.5, 76.0], [18.6, 76.0], [18.7, 76.0], [18.8, 76.0], [18.9, 76.0], [19.0, 76.0], [19.1, 76.0], [19.2, 76.0], [19.3, 76.0], [19.4, 76.0], [19.5, 77.0], [19.6, 77.0], [19.7, 77.0], [19.8, 77.0], [19.9, 77.0], [20.0, 77.0], [20.1, 77.0], [20.2, 77.0], [20.3, 77.0], [20.4, 77.0], [20.5, 77.0], [20.6, 77.0], [20.7, 77.0], [20.8, 78.0], [20.9, 78.0], [21.0, 78.0], [21.1, 78.0], [21.2, 78.0], [21.3, 78.0], [21.4, 78.0], [21.5, 78.0], [21.6, 78.0], [21.7, 78.0], [21.8, 78.0], [21.9, 79.0], [22.0, 79.0], [22.1, 79.0], [22.2, 79.0], [22.3, 79.0], [22.4, 79.0], [22.5, 79.0], [22.6, 79.0], [22.7, 79.0], [22.8, 79.0], [22.9, 79.0], [23.0, 79.0], [23.1, 79.0], [23.2, 79.0], [23.3, 79.0], [23.4, 80.0], [23.5, 80.0], [23.6, 80.0], [23.7, 80.0], [23.8, 80.0], [23.9, 80.0], [24.0, 80.0], [24.1, 80.0], [24.2, 80.0], [24.3, 81.0], [24.4, 81.0], [24.5, 81.0], [24.6, 81.0], [24.7, 81.0], [24.8, 81.0], [24.9, 81.0], [25.0, 81.0], [25.1, 81.0], [25.2, 81.0], [25.3, 81.0], [25.4, 82.0], [25.5, 82.0], [25.6, 82.0], [25.7, 82.0], [25.8, 82.0], [25.9, 82.0], [26.0, 82.0], [26.1, 82.0], [26.2, 83.0], [26.3, 83.0], [26.4, 83.0], [26.5, 83.0], [26.6, 83.0], [26.7, 83.0], [26.8, 83.0], [26.9, 83.0], [27.0, 84.0], [27.1, 84.0], [27.2, 84.0], [27.3, 84.0], [27.4, 84.0], [27.5, 84.0], [27.6, 84.0], [27.7, 85.0], [27.8, 85.0], [27.9, 85.0], [28.0, 85.0], [28.1, 85.0], [28.2, 85.0], [28.3, 85.0], [28.4, 86.0], [28.5, 86.0], [28.6, 86.0], [28.7, 86.0], [28.8, 86.0], [28.9, 87.0], [29.0, 87.0], [29.1, 87.0], [29.2, 87.0], [29.3, 87.0], [29.4, 87.0], [29.5, 88.0], [29.6, 88.0], [29.7, 88.0], [29.8, 88.0], [29.9, 88.0], [30.0, 88.0], [30.1, 89.0], [30.2, 89.0], [30.3, 89.0], [30.4, 89.0], [30.5, 90.0], [30.6, 90.0], [30.7, 90.0], [30.8, 90.0], [30.9, 90.0], [31.0, 91.0], [31.1, 91.0], [31.2, 91.0], [31.3, 91.0], [31.4, 92.0], [31.5, 92.0], [31.6, 92.0], [31.7, 92.0], [31.8, 93.0], [31.9, 93.0], [32.0, 93.0], [32.1, 94.0], [32.2, 94.0], [32.3, 94.0], [32.4, 95.0], [32.5, 95.0], [32.6, 96.0], [32.7, 96.0], [32.8, 96.0], [32.9, 97.0], [33.0, 97.0], [33.1, 98.0], [33.2, 98.0], [33.3, 99.0], [33.4, 99.0], [33.5, 99.0], [33.6, 99.0], [33.7, 100.0], [33.8, 101.0], [33.9, 102.0], [34.0, 103.0], [34.1, 104.0], [34.2, 105.0], [34.3, 106.0], [34.4, 106.0], [34.5, 107.0], [34.6, 108.0], [34.7, 108.0], [34.8, 109.0], [34.9, 110.0], [35.0, 110.0], [35.1, 111.0], [35.2, 112.0], [35.3, 112.0], [35.4, 113.0], [35.5, 113.0], [35.6, 114.0], [35.7, 115.0], [35.8, 115.0], [35.9, 116.0], [36.0, 116.0], [36.1, 117.0], [36.2, 118.0], [36.3, 119.0], [36.4, 119.0], [36.5, 119.0], [36.6, 120.0], [36.7, 121.0], [36.8, 121.0], [36.9, 122.0], [37.0, 123.0], [37.1, 124.0], [37.2, 124.0], [37.3, 125.0], [37.4, 125.0], [37.5, 126.0], [37.6, 128.0], [37.7, 129.0], [37.8, 129.0], [37.9, 130.0], [38.0, 131.0], [38.1, 132.0], [38.2, 132.0], [38.3, 134.0], [38.4, 134.0], [38.5, 135.0], [38.6, 136.0], [38.7, 137.0], [38.8, 138.0], [38.9, 139.0], [39.0, 140.0], [39.1, 141.0], [39.2, 142.0], [39.3, 142.0], [39.4, 144.0], [39.5, 145.0], [39.6, 145.0], [39.7, 147.0], [39.8, 148.0], [39.9, 149.0], [40.0, 150.0], [40.1, 151.0], [40.2, 152.0], [40.3, 153.0], [40.4, 153.0], [40.5, 154.0], [40.6, 154.0], [40.7, 155.0], [40.8, 156.0], [40.9, 157.0], [41.0, 159.0], [41.1, 159.0], [41.2, 160.0], [41.3, 161.0], [41.4, 162.0], [41.5, 163.0], [41.6, 164.0], [41.7, 165.0], [41.8, 167.0], [41.9, 168.0], [42.0, 168.0], [42.1, 169.0], [42.2, 171.0], [42.3, 172.0], [42.4, 174.0], [42.5, 175.0], [42.6, 177.0], [42.7, 179.0], [42.8, 181.0], [42.9, 182.0], [43.0, 183.0], [43.1, 184.0], [43.2, 185.0], [43.3, 186.0], [43.4, 187.0], [43.5, 188.0], [43.6, 188.0], [43.7, 189.0], [43.8, 191.0], [43.9, 191.0], [44.0, 192.0], [44.1, 193.0], [44.2, 195.0], [44.3, 196.0], [44.4, 198.0], [44.5, 200.0], [44.6, 201.0], [44.7, 202.0], [44.8, 203.0], [44.9, 204.0], [45.0, 204.0], [45.1, 207.0], [45.2, 208.0], [45.3, 208.0], [45.4, 209.0], [45.5, 210.0], [45.6, 212.0], [45.7, 213.0], [45.8, 214.0], [45.9, 215.0], [46.0, 216.0], [46.1, 217.0], [46.2, 219.0], [46.3, 219.0], [46.4, 220.0], [46.5, 220.0], [46.6, 221.0], [46.7, 222.0], [46.8, 224.0], [46.9, 225.0], [47.0, 225.0], [47.1, 226.0], [47.2, 226.0], [47.3, 227.0], [47.4, 228.0], [47.5, 228.0], [47.6, 229.0], [47.7, 229.0], [47.8, 230.0], [47.9, 232.0], [48.0, 232.0], [48.1, 233.0], [48.2, 234.0], [48.3, 235.0], [48.4, 236.0], [48.5, 237.0], [48.6, 238.0], [48.7, 239.0], [48.8, 239.0], [48.9, 240.0], [49.0, 241.0], [49.1, 241.0], [49.2, 243.0], [49.3, 244.0], [49.4, 245.0], [49.5, 246.0], [49.6, 247.0], [49.7, 247.0], [49.8, 248.0], [49.9, 249.0], [50.0, 249.0], [50.1, 250.0], [50.2, 251.0], [50.3, 252.0], [50.4, 253.0], [50.5, 254.0], [50.6, 255.0], [50.7, 256.0], [50.8, 257.0], [50.9, 258.0], [51.0, 258.0], [51.1, 259.0], [51.2, 260.0], [51.3, 261.0], [51.4, 262.0], [51.5, 263.0], [51.6, 263.0], [51.7, 264.0], [51.8, 265.0], [51.9, 266.0], [52.0, 267.0], [52.1, 268.0], [52.2, 269.0], [52.3, 270.0], [52.4, 271.0], [52.5, 273.0], [52.6, 273.0], [52.7, 275.0], [52.8, 276.0], [52.9, 277.0], [53.0, 277.0], [53.1, 278.0], [53.2, 279.0], [53.3, 279.0], [53.4, 280.0], [53.5, 281.0], [53.6, 282.0], [53.7, 283.0], [53.8, 284.0], [53.9, 285.0], [54.0, 286.0], [54.1, 287.0], [54.2, 289.0], [54.3, 290.0], [54.4, 290.0], [54.5, 291.0], [54.6, 293.0], [54.7, 294.0], [54.8, 295.0], [54.9, 296.0], [55.0, 297.0], [55.1, 298.0], [55.2, 299.0], [55.3, 300.0], [55.4, 301.0], [55.5, 303.0], [55.6, 304.0], [55.7, 305.0], [55.8, 306.0], [55.9, 308.0], [56.0, 310.0], [56.1, 312.0], [56.2, 313.0], [56.3, 316.0], [56.4, 318.0], [56.5, 322.0], [56.6, 324.0], [56.7, 325.0], [56.8, 326.0], [56.9, 328.0], [57.0, 329.0], [57.1, 331.0], [57.2, 332.0], [57.3, 334.0], [57.4, 335.0], [57.5, 337.0], [57.6, 338.0], [57.7, 340.0], [57.8, 342.0], [57.9, 343.0], [58.0, 346.0], [58.1, 348.0], [58.2, 350.0], [58.3, 351.0], [58.4, 353.0], [58.5, 354.0], [58.6, 356.0], [58.7, 357.0], [58.8, 358.0], [58.9, 359.0], [59.0, 359.0], [59.1, 361.0], [59.2, 363.0], [59.3, 366.0], [59.4, 367.0], [59.5, 369.0], [59.6, 372.0], [59.7, 374.0], [59.8, 375.0], [59.9, 376.0], [60.0, 377.0], [60.1, 378.0], [60.2, 380.0], [60.3, 381.0], [60.4, 381.0], [60.5, 382.0], [60.6, 384.0], [60.7, 386.0], [60.8, 387.0], [60.9, 387.0], [61.0, 388.0], [61.1, 390.0], [61.2, 392.0], [61.3, 393.0], [61.4, 394.0], [61.5, 395.0], [61.6, 397.0], [61.7, 399.0], [61.8, 401.0], [61.9, 403.0], [62.0, 405.0], [62.1, 406.0], [62.2, 407.0], [62.3, 408.0], [62.4, 410.0], [62.5, 412.0], [62.6, 413.0], [62.7, 414.0], [62.8, 415.0], [62.9, 416.0], [63.0, 417.0], [63.1, 418.0], [63.2, 419.0], [63.3, 420.0], [63.4, 423.0], [63.5, 423.0], [63.6, 425.0], [63.7, 426.0], [63.8, 428.0], [63.9, 428.0], [64.0, 430.0], [64.1, 430.0], [64.2, 431.0], [64.3, 432.0], [64.4, 433.0], [64.5, 434.0], [64.6, 435.0], [64.7, 437.0], [64.8, 437.0], [64.9, 439.0], [65.0, 440.0], [65.1, 441.0], [65.2, 442.0], [65.3, 443.0], [65.4, 444.0], [65.5, 445.0], [65.6, 446.0], [65.7, 447.0], [65.8, 449.0], [65.9, 450.0], [66.0, 453.0], [66.1, 455.0], [66.2, 457.0], [66.3, 457.0], [66.4, 458.0], [66.5, 459.0], [66.6, 460.0], [66.7, 461.0], [66.8, 462.0], [66.9, 463.0], [67.0, 465.0], [67.1, 466.0], [67.2, 467.0], [67.3, 469.0], [67.4, 470.0], [67.5, 472.0], [67.6, 474.0], [67.7, 477.0], [67.8, 479.0], [67.9, 480.0], [68.0, 482.0], [68.1, 483.0], [68.2, 484.0], [68.3, 487.0], [68.4, 488.0], [68.5, 491.0], [68.6, 493.0], [68.7, 493.0], [68.8, 495.0], [68.9, 497.0], [69.0, 499.0], [69.1, 501.0], [69.2, 503.0], [69.3, 505.0], [69.4, 506.0], [69.5, 508.0], [69.6, 509.0], [69.7, 510.0], [69.8, 511.0], [69.9, 514.0], [70.0, 516.0], [70.1, 518.0], [70.2, 520.0], [70.3, 521.0], [70.4, 523.0], [70.5, 525.0], [70.6, 526.0], [70.7, 528.0], [70.8, 531.0], [70.9, 532.0], [71.0, 535.0], [71.1, 538.0], [71.2, 539.0], [71.3, 541.0], [71.4, 542.0], [71.5, 544.0], [71.6, 546.0], [71.7, 549.0], [71.8, 552.0], [71.9, 556.0], [72.0, 557.0], [72.1, 559.0], [72.2, 561.0], [72.3, 562.0], [72.4, 563.0], [72.5, 564.0], [72.6, 565.0], [72.7, 568.0], [72.8, 569.0], [72.9, 572.0], [73.0, 574.0], [73.1, 575.0], [73.2, 577.0], [73.3, 581.0], [73.4, 582.0], [73.5, 583.0], [73.6, 585.0], [73.7, 589.0], [73.8, 591.0], [73.9, 593.0], [74.0, 595.0], [74.1, 596.0], [74.2, 598.0], [74.3, 599.0], [74.4, 603.0], [74.5, 607.0], [74.6, 609.0], [74.7, 610.0], [74.8, 613.0], [74.9, 614.0], [75.0, 616.0], [75.1, 616.0], [75.2, 619.0], [75.3, 621.0], [75.4, 623.0], [75.5, 624.0], [75.6, 627.0], [75.7, 629.0], [75.8, 629.0], [75.9, 631.0], [76.0, 635.0], [76.1, 637.0], [76.2, 639.0], [76.3, 642.0], [76.4, 644.0], [76.5, 645.0], [76.6, 648.0], [76.7, 649.0], [76.8, 650.0], [76.9, 652.0], [77.0, 655.0], [77.1, 655.0], [77.2, 657.0], [77.3, 660.0], [77.4, 662.0], [77.5, 664.0], [77.6, 665.0], [77.7, 667.0], [77.8, 670.0], [77.9, 673.0], [78.0, 673.0], [78.1, 675.0], [78.2, 677.0], [78.3, 680.0], [78.4, 684.0], [78.5, 686.0], [78.6, 688.0], [78.7, 693.0], [78.8, 696.0], [78.9, 699.0], [79.0, 701.0], [79.1, 703.0], [79.2, 705.0], [79.3, 706.0], [79.4, 710.0], [79.5, 712.0], [79.6, 714.0], [79.7, 715.0], [79.8, 716.0], [79.9, 718.0], [80.0, 721.0], [80.1, 723.0], [80.2, 726.0], [80.3, 728.0], [80.4, 731.0], [80.5, 733.0], [80.6, 736.0], [80.7, 738.0], [80.8, 744.0], [80.9, 748.0], [81.0, 749.0], [81.1, 753.0], [81.2, 756.0], [81.3, 758.0], [81.4, 760.0], [81.5, 762.0], [81.6, 766.0], [81.7, 769.0], [81.8, 774.0], [81.9, 775.0], [82.0, 776.0], [82.1, 779.0], [82.2, 780.0], [82.3, 781.0], [82.4, 783.0], [82.5, 785.0], [82.6, 786.0], [82.7, 788.0], [82.8, 790.0], [82.9, 792.0], [83.0, 794.0], [83.1, 796.0], [83.2, 799.0], [83.3, 801.0], [83.4, 802.0], [83.5, 804.0], [83.6, 806.0], [83.7, 808.0], [83.8, 811.0], [83.9, 812.0], [84.0, 813.0], [84.1, 815.0], [84.2, 819.0], [84.3, 823.0], [84.4, 826.0], [84.5, 827.0], [84.6, 829.0], [84.7, 833.0], [84.8, 836.0], [84.9, 837.0], [85.0, 839.0], [85.1, 842.0], [85.2, 844.0], [85.3, 846.0], [85.4, 849.0], [85.5, 853.0], [85.6, 856.0], [85.7, 858.0], [85.8, 860.0], [85.9, 863.0], [86.0, 866.0], [86.1, 868.0], [86.2, 869.0], [86.3, 870.0], [86.4, 873.0], [86.5, 874.0], [86.6, 877.0], [86.7, 883.0], [86.8, 890.0], [86.9, 897.0], [87.0, 902.0], [87.1, 906.0], [87.2, 908.0], [87.3, 909.0], [87.4, 915.0], [87.5, 922.0], [87.6, 928.0], [87.7, 931.0], [87.8, 939.0], [87.9, 944.0], [88.0, 952.0], [88.1, 956.0], [88.2, 961.0], [88.3, 966.0], [88.4, 969.0], [88.5, 973.0], [88.6, 980.0], [88.7, 984.0], [88.8, 991.0], [88.9, 996.0], [89.0, 1000.0], [89.1, 1007.0], [89.2, 1015.0], [89.3, 1026.0], [89.4, 1031.0], [89.5, 1038.0], [89.6, 1043.0], [89.7, 1047.0], [89.8, 1051.0], [89.9, 1055.0], [90.0, 1061.0], [90.1, 1067.0], [90.2, 1071.0], [90.3, 1072.0], [90.4, 1079.0], [90.5, 1087.0], [90.6, 1090.0], [90.7, 1094.0], [90.8, 1099.0], [90.9, 1103.0], [91.0, 1115.0], [91.1, 1122.0], [91.2, 1129.0], [91.3, 1133.0], [91.4, 1138.0], [91.5, 1143.0], [91.6, 1147.0], [91.7, 1152.0], [91.8, 1163.0], [91.9, 1167.0], [92.0, 1168.0], [92.1, 1172.0], [92.2, 1178.0], [92.3, 1184.0], [92.4, 1191.0], [92.5, 1197.0], [92.6, 1202.0], [92.7, 1215.0], [92.8, 1226.0], [92.9, 1230.0], [93.0, 1236.0], [93.1, 1238.0], [93.2, 1247.0], [93.3, 1251.0], [93.4, 1257.0], [93.5, 1262.0], [93.6, 1272.0], [93.7, 1279.0], [93.8, 1285.0], [93.9, 1295.0], [94.0, 1302.0], [94.1, 1306.0], [94.2, 1309.0], [94.3, 1322.0], [94.4, 1326.0], [94.5, 1332.0], [94.6, 1342.0], [94.7, 1354.0], [94.8, 1371.0], [94.9, 1374.0], [95.0, 1386.0], [95.1, 1389.0], [95.2, 1405.0], [95.3, 1413.0], [95.4, 1419.0], [95.5, 1423.0], [95.6, 1434.0], [95.7, 1448.0], [95.8, 1458.0], [95.9, 1482.0], [96.0, 1488.0], [96.1, 1499.0], [96.2, 1513.0], [96.3, 1542.0], [96.4, 1553.0], [96.5, 1559.0], [96.6, 1578.0], [96.7, 1607.0], [96.8, 1627.0], [96.9, 1637.0], [97.0, 1669.0], [97.1, 1679.0], [97.2, 1691.0], [97.3, 1702.0], [97.4, 1734.0], [97.5, 1756.0], [97.6, 1774.0], [97.7, 1789.0], [97.8, 1806.0], [97.9, 1824.0], [98.0, 1840.0], [98.1, 1852.0], [98.2, 1882.0], [98.3, 1902.0], [98.4, 1933.0], [98.5, 1997.0], [98.6, 2024.0], [98.7, 2055.0], [98.8, 2117.0], [98.9, 2161.0], [99.0, 2206.0], [99.1, 2253.0], [99.2, 2296.0], [99.3, 2315.0], [99.4, 2344.0], [99.5, 2489.0], [99.6, 2587.0], [99.7, 2672.0], [99.8, 2856.0], [99.9, 2944.0], [100.0, 3537.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1769.0, "series": [{"data": [[0.0, 1769.0], [600.0, 242.0], [700.0, 227.0], [800.0, 195.0], [900.0, 109.0], [1000.0, 95.0], [1100.0, 92.0], [1200.0, 75.0], [1300.0, 62.0], [1400.0, 50.0], [1500.0, 30.0], [100.0, 572.0], [1600.0, 31.0], [1700.0, 24.0], [1800.0, 29.0], [1900.0, 13.0], [2000.0, 13.0], [2100.0, 11.0], [2200.0, 12.0], [2300.0, 12.0], [2400.0, 5.0], [2500.0, 6.0], [2600.0, 4.0], [2700.0, 2.0], [2800.0, 7.0], [2900.0, 2.0], [200.0, 564.0], [3400.0, 3.0], [3500.0, 1.0], [300.0, 345.0], [400.0, 383.0], [500.0, 277.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 205.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3635.0, "series": [{"data": [[0.0, 3635.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1422.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 205.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.845794392523365, "minX": 1.60280844E12, "maxY": 12.0, "series": [{"data": [[1.60280856E12, 12.0], [1.60280862E12, 11.845794392523365], [1.60280844E12, 11.971061093247592], [1.6028085E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280862E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 421.6058004197682, "minX": 1.0, "maxY": 3537.0, "series": [{"data": [[8.0, 1781.5], [4.0, 2276.0], [2.0, 3537.0], [1.0, 2866.0], [9.0, 2615.0], [5.0, 1211.3333333333333], [10.0, 1262.6666666666667], [11.0, 986.5], [6.0, 1171.0], [12.0, 421.6058004197682], [3.0, 2856.0], [7.0, 1498.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980615735461788, 426.4644621816802]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3786.95, "minX": 1.60280844E12, "maxY": 1395003.6666666667, "series": [{"data": [[1.60280856E12, 1395003.6666666667], [1.60280862E12, 358053.5833333333], [1.60280844E12, 1168788.5666666667], [1.6028085E12, 1329253.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280856E12, 15166.95], [1.60280862E12, 3786.95], [1.60280844E12, 10797.5], [1.6028085E12, 15739.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280862E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 387.5799892990906, "minX": 1.60280844E12, "maxY": 525.8644859813083, "series": [{"data": [[1.60280856E12, 414.4601975595588], [1.60280862E12, 525.8644859813083], [1.60280844E12, 467.2934083601286], [1.6028085E12, 387.5799892990906]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280862E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 387.17763509898344, "minX": 1.60280844E12, "maxY": 525.4532710280372, "series": [{"data": [[1.60280856E12, 414.04299825682784], [1.60280862E12, 525.4532710280372], [1.60280844E12, 466.7797427652734], [1.6028085E12, 387.17763509898344]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280862E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009877977919814082, "minX": 1.60280844E12, "maxY": 0.09726688102893893, "series": [{"data": [[1.60280856E12, 0.009877977919814082], [1.60280862E12, 0.01401869158878506], [1.60280844E12, 0.09726688102893893], [1.6028085E12, 0.012306046013911182]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280862E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.60280844E12, "maxY": 3537.0, "series": [{"data": [[1.60280856E12, 2974.0], [1.60280862E12, 3537.0], [1.60280844E12, 2288.0], [1.6028085E12, 2944.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280856E12, 37.0], [1.60280862E12, 36.86099989771843], [1.60280844E12, 37.0], [1.6028085E12, 38.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280856E12, 37.0], [1.60280862E12, 37.0], [1.60280844E12, 37.0], [1.6028085E12, 38.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280856E12, 37.0], [1.60280862E12, 37.0], [1.60280844E12, 37.0], [1.6028085E12, 38.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280856E12, 32.0], [1.60280862E12, 36.0], [1.60280844E12, 34.0], [1.6028085E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280856E12, 260.0], [1.60280862E12, 261.0], [1.60280844E12, 370.0], [1.6028085E12, 215.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280862E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 41.0, "minX": 1.0, "maxY": 3201.5, "series": [{"data": [[2.0, 3201.5], [3.0, 2714.0], [4.0, 721.5], [5.0, 1465.5], [6.0, 1793.5], [7.0, 1393.5], [8.0, 1386.0], [9.0, 981.5], [10.0, 1036.5], [11.0, 1000.0], [12.0, 889.0], [13.0, 833.5], [14.0, 836.0], [15.0, 650.0], [16.0, 689.5], [17.0, 615.0], [18.0, 626.5], [19.0, 507.0], [20.0, 499.5], [21.0, 484.0], [22.0, 402.5], [23.0, 461.0], [24.0, 452.5], [25.0, 328.0], [26.0, 331.0], [27.0, 328.0], [28.0, 279.0], [29.0, 85.0], [30.0, 386.5], [31.0, 236.5], [32.0, 282.0], [33.0, 109.0], [34.0, 88.5], [35.0, 233.5], [36.0, 95.0], [37.0, 275.5], [38.0, 163.0], [39.0, 252.0], [41.0, 157.0], [40.0, 226.5], [43.0, 184.0], [44.0, 88.0], [45.0, 248.0], [46.0, 138.5], [47.0, 196.0], [48.0, 229.0], [50.0, 125.5], [52.0, 86.0], [53.0, 133.5], [54.0, 133.5], [56.0, 170.0], [59.0, 188.0], [58.0, 85.5], [60.0, 159.0], [62.0, 96.0], [65.0, 41.0], [66.0, 143.0], [68.0, 78.5], [71.0, 92.0], [74.0, 206.0], [75.0, 81.0], [80.0, 88.0], [83.0, 108.0], [101.0, 72.0], [1.0, 1426.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 101.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 41.0, "minX": 1.0, "maxY": 3201.0, "series": [{"data": [[2.0, 3201.0], [3.0, 2714.0], [4.0, 719.5], [5.0, 1465.0], [6.0, 1792.0], [7.0, 1393.0], [8.0, 1385.0], [9.0, 980.0], [10.0, 1036.0], [11.0, 1000.0], [12.0, 887.5], [13.0, 832.5], [14.0, 833.5], [15.0, 647.0], [16.0, 689.0], [17.0, 614.5], [18.0, 625.0], [19.0, 506.0], [20.0, 499.0], [21.0, 484.0], [22.0, 402.5], [23.0, 460.5], [24.0, 452.5], [25.0, 328.0], [26.0, 330.5], [27.0, 328.0], [28.0, 279.0], [29.0, 85.0], [30.0, 386.5], [31.0, 236.0], [32.0, 282.0], [33.0, 109.0], [34.0, 88.5], [35.0, 233.0], [36.0, 95.0], [37.0, 275.5], [38.0, 163.0], [39.0, 252.0], [41.0, 156.0], [40.0, 226.0], [43.0, 184.0], [44.0, 88.0], [45.0, 248.0], [46.0, 138.5], [47.0, 196.0], [48.0, 229.0], [50.0, 125.5], [52.0, 86.0], [53.0, 133.0], [54.0, 133.5], [56.0, 169.5], [59.0, 188.0], [58.0, 85.5], [60.0, 158.0], [62.0, 96.0], [65.0, 41.0], [66.0, 143.0], [68.0, 78.5], [71.0, 92.0], [74.0, 206.0], [75.0, 81.0], [80.0, 88.0], [83.0, 108.0], [101.0, 72.0], [1.0, 1425.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 101.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.933333333333334, "minX": 1.60280844E12, "maxY": 31.15, "series": [{"data": [[1.60280856E12, 28.683333333333334], [1.60280862E12, 6.933333333333334], [1.60280844E12, 20.933333333333334], [1.6028085E12, 31.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280862E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.133333333333334, "minX": 1.60280844E12, "maxY": 31.15, "series": [{"data": [[1.60280856E12, 28.683333333333334], [1.60280862E12, 7.133333333333334], [1.60280844E12, 20.733333333333334], [1.6028085E12, 31.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280862E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.133333333333334, "minX": 1.60280844E12, "maxY": 31.15, "series": [{"data": [[1.60280856E12, 28.683333333333334], [1.60280862E12, 7.133333333333334], [1.60280844E12, 20.733333333333334], [1.6028085E12, 31.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280862E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.133333333333334, "minX": 1.60280844E12, "maxY": 31.15, "series": [{"data": [[1.60280856E12, 28.683333333333334], [1.60280862E12, 7.133333333333334], [1.60280844E12, 20.733333333333334], [1.6028085E12, 31.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280862E12, "title": "Total Transactions Per Second"}},
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

