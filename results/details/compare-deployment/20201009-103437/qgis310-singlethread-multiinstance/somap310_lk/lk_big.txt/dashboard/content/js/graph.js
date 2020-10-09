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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 4656.0, "series": [{"data": [[0.0, 28.0], [0.1, 31.0], [0.2, 32.0], [0.3, 33.0], [0.4, 33.0], [0.5, 33.0], [0.6, 34.0], [0.7, 34.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 35.0], [1.7, 35.0], [1.8, 35.0], [1.9, 35.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 36.0], [2.6, 36.0], [2.7, 36.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 40.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 42.0], [6.4, 42.0], [6.5, 42.0], [6.6, 42.0], [6.7, 42.0], [6.8, 43.0], [6.9, 43.0], [7.0, 43.0], [7.1, 43.0], [7.2, 43.0], [7.3, 44.0], [7.4, 44.0], [7.5, 44.0], [7.6, 44.0], [7.7, 45.0], [7.8, 45.0], [7.9, 45.0], [8.0, 45.0], [8.1, 46.0], [8.2, 46.0], [8.3, 46.0], [8.4, 47.0], [8.5, 47.0], [8.6, 48.0], [8.7, 48.0], [8.8, 49.0], [8.9, 50.0], [9.0, 52.0], [9.1, 53.0], [9.2, 54.0], [9.3, 54.0], [9.4, 55.0], [9.5, 56.0], [9.6, 56.0], [9.7, 57.0], [9.8, 57.0], [9.9, 57.0], [10.0, 58.0], [10.1, 58.0], [10.2, 58.0], [10.3, 59.0], [10.4, 59.0], [10.5, 60.0], [10.6, 60.0], [10.7, 61.0], [10.8, 61.0], [10.9, 62.0], [11.0, 62.0], [11.1, 63.0], [11.2, 63.0], [11.3, 64.0], [11.4, 64.0], [11.5, 65.0], [11.6, 65.0], [11.7, 65.0], [11.8, 65.0], [11.9, 66.0], [12.0, 66.0], [12.1, 66.0], [12.2, 66.0], [12.3, 66.0], [12.4, 67.0], [12.5, 67.0], [12.6, 67.0], [12.7, 67.0], [12.8, 67.0], [12.9, 68.0], [13.0, 68.0], [13.1, 68.0], [13.2, 68.0], [13.3, 68.0], [13.4, 68.0], [13.5, 68.0], [13.6, 69.0], [13.7, 69.0], [13.8, 69.0], [13.9, 69.0], [14.0, 69.0], [14.1, 69.0], [14.2, 69.0], [14.3, 69.0], [14.4, 69.0], [14.5, 69.0], [14.6, 70.0], [14.7, 70.0], [14.8, 70.0], [14.9, 70.0], [15.0, 70.0], [15.1, 70.0], [15.2, 70.0], [15.3, 70.0], [15.4, 70.0], [15.5, 70.0], [15.6, 71.0], [15.7, 71.0], [15.8, 71.0], [15.9, 71.0], [16.0, 71.0], [16.1, 71.0], [16.2, 71.0], [16.3, 71.0], [16.4, 71.0], [16.5, 71.0], [16.6, 72.0], [16.7, 72.0], [16.8, 72.0], [16.9, 72.0], [17.0, 72.0], [17.1, 72.0], [17.2, 72.0], [17.3, 72.0], [17.4, 72.0], [17.5, 72.0], [17.6, 72.0], [17.7, 72.0], [17.8, 72.0], [17.9, 73.0], [18.0, 73.0], [18.1, 73.0], [18.2, 73.0], [18.3, 73.0], [18.4, 73.0], [18.5, 73.0], [18.6, 73.0], [18.7, 73.0], [18.8, 73.0], [18.9, 74.0], [19.0, 74.0], [19.1, 74.0], [19.2, 74.0], [19.3, 74.0], [19.4, 74.0], [19.5, 74.0], [19.6, 74.0], [19.7, 74.0], [19.8, 74.0], [19.9, 75.0], [20.0, 75.0], [20.1, 75.0], [20.2, 75.0], [20.3, 75.0], [20.4, 75.0], [20.5, 75.0], [20.6, 75.0], [20.7, 75.0], [20.8, 75.0], [20.9, 76.0], [21.0, 76.0], [21.1, 76.0], [21.2, 76.0], [21.3, 76.0], [21.4, 76.0], [21.5, 76.0], [21.6, 76.0], [21.7, 76.0], [21.8, 76.0], [21.9, 76.0], [22.0, 76.0], [22.1, 76.0], [22.2, 76.0], [22.3, 77.0], [22.4, 77.0], [22.5, 77.0], [22.6, 77.0], [22.7, 77.0], [22.8, 77.0], [22.9, 77.0], [23.0, 77.0], [23.1, 77.0], [23.2, 77.0], [23.3, 77.0], [23.4, 78.0], [23.5, 78.0], [23.6, 78.0], [23.7, 78.0], [23.8, 78.0], [23.9, 78.0], [24.0, 78.0], [24.1, 78.0], [24.2, 78.0], [24.3, 78.0], [24.4, 79.0], [24.5, 79.0], [24.6, 79.0], [24.7, 79.0], [24.8, 79.0], [24.9, 79.0], [25.0, 79.0], [25.1, 79.0], [25.2, 79.0], [25.3, 79.0], [25.4, 80.0], [25.5, 80.0], [25.6, 80.0], [25.7, 80.0], [25.8, 80.0], [25.9, 80.0], [26.0, 80.0], [26.1, 80.0], [26.2, 81.0], [26.3, 81.0], [26.4, 81.0], [26.5, 81.0], [26.6, 81.0], [26.7, 81.0], [26.8, 81.0], [26.9, 81.0], [27.0, 82.0], [27.1, 82.0], [27.2, 82.0], [27.3, 82.0], [27.4, 82.0], [27.5, 82.0], [27.6, 82.0], [27.7, 82.0], [27.8, 82.0], [27.9, 83.0], [28.0, 83.0], [28.1, 83.0], [28.2, 83.0], [28.3, 83.0], [28.4, 83.0], [28.5, 83.0], [28.6, 83.0], [28.7, 84.0], [28.8, 84.0], [28.9, 84.0], [29.0, 84.0], [29.1, 84.0], [29.2, 85.0], [29.3, 85.0], [29.4, 85.0], [29.5, 85.0], [29.6, 85.0], [29.7, 86.0], [29.8, 86.0], [29.9, 86.0], [30.0, 86.0], [30.1, 86.0], [30.2, 86.0], [30.3, 87.0], [30.4, 87.0], [30.5, 87.0], [30.6, 87.0], [30.7, 88.0], [30.8, 88.0], [30.9, 88.0], [31.0, 89.0], [31.1, 89.0], [31.2, 89.0], [31.3, 89.0], [31.4, 90.0], [31.5, 90.0], [31.6, 91.0], [31.7, 91.0], [31.8, 92.0], [31.9, 93.0], [32.0, 93.0], [32.1, 94.0], [32.2, 94.0], [32.3, 94.0], [32.4, 95.0], [32.5, 95.0], [32.6, 96.0], [32.7, 96.0], [32.8, 97.0], [32.9, 98.0], [33.0, 98.0], [33.1, 100.0], [33.2, 100.0], [33.3, 101.0], [33.4, 102.0], [33.5, 102.0], [33.6, 102.0], [33.7, 103.0], [33.8, 104.0], [33.9, 105.0], [34.0, 106.0], [34.1, 106.0], [34.2, 107.0], [34.3, 108.0], [34.4, 108.0], [34.5, 108.0], [34.6, 109.0], [34.7, 109.0], [34.8, 110.0], [34.9, 110.0], [35.0, 110.0], [35.1, 111.0], [35.2, 111.0], [35.3, 112.0], [35.4, 112.0], [35.5, 112.0], [35.6, 113.0], [35.7, 113.0], [35.8, 113.0], [35.9, 114.0], [36.0, 114.0], [36.1, 114.0], [36.2, 115.0], [36.3, 115.0], [36.4, 116.0], [36.5, 116.0], [36.6, 117.0], [36.7, 118.0], [36.8, 118.0], [36.9, 119.0], [37.0, 119.0], [37.1, 120.0], [37.2, 120.0], [37.3, 121.0], [37.4, 122.0], [37.5, 124.0], [37.6, 125.0], [37.7, 126.0], [37.8, 127.0], [37.9, 129.0], [38.0, 130.0], [38.1, 132.0], [38.2, 134.0], [38.3, 135.0], [38.4, 135.0], [38.5, 136.0], [38.6, 137.0], [38.7, 139.0], [38.8, 140.0], [38.9, 140.0], [39.0, 142.0], [39.1, 143.0], [39.2, 143.0], [39.3, 144.0], [39.4, 145.0], [39.5, 147.0], [39.6, 147.0], [39.7, 148.0], [39.8, 149.0], [39.9, 149.0], [40.0, 150.0], [40.1, 150.0], [40.2, 150.0], [40.3, 151.0], [40.4, 152.0], [40.5, 153.0], [40.6, 153.0], [40.7, 154.0], [40.8, 155.0], [40.9, 155.0], [41.0, 156.0], [41.1, 156.0], [41.2, 157.0], [41.3, 158.0], [41.4, 159.0], [41.5, 160.0], [41.6, 160.0], [41.7, 161.0], [41.8, 162.0], [41.9, 163.0], [42.0, 164.0], [42.1, 165.0], [42.2, 165.0], [42.3, 166.0], [42.4, 166.0], [42.5, 168.0], [42.6, 168.0], [42.7, 169.0], [42.8, 170.0], [42.9, 171.0], [43.0, 172.0], [43.1, 173.0], [43.2, 174.0], [43.3, 175.0], [43.4, 177.0], [43.5, 178.0], [43.6, 178.0], [43.7, 180.0], [43.8, 180.0], [43.9, 181.0], [44.0, 182.0], [44.1, 183.0], [44.2, 185.0], [44.3, 187.0], [44.4, 189.0], [44.5, 190.0], [44.6, 191.0], [44.7, 192.0], [44.8, 194.0], [44.9, 195.0], [45.0, 197.0], [45.1, 199.0], [45.2, 201.0], [45.3, 202.0], [45.4, 203.0], [45.5, 205.0], [45.6, 206.0], [45.7, 207.0], [45.8, 208.0], [45.9, 208.0], [46.0, 210.0], [46.1, 212.0], [46.2, 214.0], [46.3, 216.0], [46.4, 216.0], [46.5, 217.0], [46.6, 217.0], [46.7, 218.0], [46.8, 219.0], [46.9, 220.0], [47.0, 221.0], [47.1, 222.0], [47.2, 222.0], [47.3, 223.0], [47.4, 224.0], [47.5, 225.0], [47.6, 226.0], [47.7, 227.0], [47.8, 230.0], [47.9, 230.0], [48.0, 232.0], [48.1, 233.0], [48.2, 235.0], [48.3, 236.0], [48.4, 236.0], [48.5, 238.0], [48.6, 238.0], [48.7, 239.0], [48.8, 240.0], [48.9, 241.0], [49.0, 242.0], [49.1, 244.0], [49.2, 246.0], [49.3, 247.0], [49.4, 248.0], [49.5, 248.0], [49.6, 250.0], [49.7, 251.0], [49.8, 252.0], [49.9, 253.0], [50.0, 254.0], [50.1, 255.0], [50.2, 256.0], [50.3, 257.0], [50.4, 257.0], [50.5, 259.0], [50.6, 260.0], [50.7, 261.0], [50.8, 262.0], [50.9, 263.0], [51.0, 264.0], [51.1, 265.0], [51.2, 267.0], [51.3, 269.0], [51.4, 269.0], [51.5, 271.0], [51.6, 274.0], [51.7, 275.0], [51.8, 278.0], [51.9, 279.0], [52.0, 282.0], [52.1, 282.0], [52.2, 283.0], [52.3, 284.0], [52.4, 285.0], [52.5, 287.0], [52.6, 289.0], [52.7, 290.0], [52.8, 291.0], [52.9, 292.0], [53.0, 293.0], [53.1, 294.0], [53.2, 294.0], [53.3, 295.0], [53.4, 296.0], [53.5, 297.0], [53.6, 298.0], [53.7, 300.0], [53.8, 300.0], [53.9, 301.0], [54.0, 302.0], [54.1, 304.0], [54.2, 305.0], [54.3, 306.0], [54.4, 308.0], [54.5, 309.0], [54.6, 309.0], [54.7, 312.0], [54.8, 314.0], [54.9, 316.0], [55.0, 317.0], [55.1, 318.0], [55.2, 320.0], [55.3, 321.0], [55.4, 324.0], [55.5, 325.0], [55.6, 327.0], [55.7, 328.0], [55.8, 329.0], [55.9, 331.0], [56.0, 332.0], [56.1, 333.0], [56.2, 336.0], [56.3, 337.0], [56.4, 338.0], [56.5, 340.0], [56.6, 343.0], [56.7, 343.0], [56.8, 345.0], [56.9, 346.0], [57.0, 347.0], [57.1, 348.0], [57.2, 349.0], [57.3, 352.0], [57.4, 354.0], [57.5, 357.0], [57.6, 358.0], [57.7, 360.0], [57.8, 363.0], [57.9, 364.0], [58.0, 366.0], [58.1, 370.0], [58.2, 370.0], [58.3, 372.0], [58.4, 374.0], [58.5, 375.0], [58.6, 376.0], [58.7, 378.0], [58.8, 379.0], [58.9, 380.0], [59.0, 381.0], [59.1, 382.0], [59.2, 383.0], [59.3, 384.0], [59.4, 386.0], [59.5, 387.0], [59.6, 388.0], [59.7, 389.0], [59.8, 390.0], [59.9, 390.0], [60.0, 392.0], [60.1, 393.0], [60.2, 394.0], [60.3, 395.0], [60.4, 396.0], [60.5, 397.0], [60.6, 399.0], [60.7, 400.0], [60.8, 401.0], [60.9, 402.0], [61.0, 404.0], [61.1, 406.0], [61.2, 407.0], [61.3, 410.0], [61.4, 411.0], [61.5, 412.0], [61.6, 413.0], [61.7, 415.0], [61.8, 416.0], [61.9, 417.0], [62.0, 419.0], [62.1, 420.0], [62.2, 421.0], [62.3, 422.0], [62.4, 423.0], [62.5, 425.0], [62.6, 426.0], [62.7, 428.0], [62.8, 428.0], [62.9, 431.0], [63.0, 432.0], [63.1, 434.0], [63.2, 436.0], [63.3, 437.0], [63.4, 437.0], [63.5, 438.0], [63.6, 440.0], [63.7, 441.0], [63.8, 442.0], [63.9, 444.0], [64.0, 447.0], [64.1, 448.0], [64.2, 451.0], [64.3, 453.0], [64.4, 454.0], [64.5, 454.0], [64.6, 456.0], [64.7, 458.0], [64.8, 460.0], [64.9, 462.0], [65.0, 463.0], [65.1, 464.0], [65.2, 465.0], [65.3, 467.0], [65.4, 468.0], [65.5, 470.0], [65.6, 471.0], [65.7, 472.0], [65.8, 473.0], [65.9, 476.0], [66.0, 477.0], [66.1, 478.0], [66.2, 479.0], [66.3, 481.0], [66.4, 485.0], [66.5, 485.0], [66.6, 486.0], [66.7, 489.0], [66.8, 491.0], [66.9, 493.0], [67.0, 495.0], [67.1, 496.0], [67.2, 497.0], [67.3, 499.0], [67.4, 500.0], [67.5, 502.0], [67.6, 504.0], [67.7, 506.0], [67.8, 509.0], [67.9, 511.0], [68.0, 514.0], [68.1, 516.0], [68.2, 517.0], [68.3, 519.0], [68.4, 521.0], [68.5, 523.0], [68.6, 524.0], [68.7, 526.0], [68.8, 529.0], [68.9, 530.0], [69.0, 531.0], [69.1, 533.0], [69.2, 534.0], [69.3, 537.0], [69.4, 539.0], [69.5, 541.0], [69.6, 542.0], [69.7, 543.0], [69.8, 544.0], [69.9, 545.0], [70.0, 547.0], [70.1, 548.0], [70.2, 552.0], [70.3, 554.0], [70.4, 556.0], [70.5, 559.0], [70.6, 563.0], [70.7, 565.0], [70.8, 566.0], [70.9, 568.0], [71.0, 571.0], [71.1, 575.0], [71.2, 577.0], [71.3, 578.0], [71.4, 580.0], [71.5, 581.0], [71.6, 581.0], [71.7, 585.0], [71.8, 588.0], [71.9, 591.0], [72.0, 594.0], [72.1, 595.0], [72.2, 596.0], [72.3, 597.0], [72.4, 598.0], [72.5, 599.0], [72.6, 600.0], [72.7, 602.0], [72.8, 603.0], [72.9, 605.0], [73.0, 607.0], [73.1, 608.0], [73.2, 610.0], [73.3, 613.0], [73.4, 614.0], [73.5, 615.0], [73.6, 617.0], [73.7, 619.0], [73.8, 621.0], [73.9, 624.0], [74.0, 627.0], [74.1, 628.0], [74.2, 629.0], [74.3, 631.0], [74.4, 633.0], [74.5, 634.0], [74.6, 637.0], [74.7, 640.0], [74.8, 642.0], [74.9, 645.0], [75.0, 648.0], [75.1, 651.0], [75.2, 653.0], [75.3, 657.0], [75.4, 660.0], [75.5, 661.0], [75.6, 663.0], [75.7, 665.0], [75.8, 667.0], [75.9, 668.0], [76.0, 671.0], [76.1, 673.0], [76.2, 674.0], [76.3, 677.0], [76.4, 682.0], [76.5, 684.0], [76.6, 687.0], [76.7, 689.0], [76.8, 692.0], [76.9, 693.0], [77.0, 694.0], [77.1, 695.0], [77.2, 698.0], [77.3, 700.0], [77.4, 705.0], [77.5, 706.0], [77.6, 708.0], [77.7, 709.0], [77.8, 710.0], [77.9, 713.0], [78.0, 715.0], [78.1, 719.0], [78.2, 720.0], [78.3, 725.0], [78.4, 728.0], [78.5, 729.0], [78.6, 731.0], [78.7, 733.0], [78.8, 737.0], [78.9, 740.0], [79.0, 742.0], [79.1, 744.0], [79.2, 747.0], [79.3, 748.0], [79.4, 749.0], [79.5, 751.0], [79.6, 753.0], [79.7, 754.0], [79.8, 756.0], [79.9, 758.0], [80.0, 760.0], [80.1, 762.0], [80.2, 766.0], [80.3, 769.0], [80.4, 770.0], [80.5, 771.0], [80.6, 774.0], [80.7, 777.0], [80.8, 778.0], [80.9, 780.0], [81.0, 783.0], [81.1, 785.0], [81.2, 786.0], [81.3, 788.0], [81.4, 789.0], [81.5, 791.0], [81.6, 792.0], [81.7, 794.0], [81.8, 796.0], [81.9, 797.0], [82.0, 800.0], [82.1, 801.0], [82.2, 804.0], [82.3, 806.0], [82.4, 808.0], [82.5, 810.0], [82.6, 811.0], [82.7, 814.0], [82.8, 817.0], [82.9, 817.0], [83.0, 820.0], [83.1, 821.0], [83.2, 824.0], [83.3, 825.0], [83.4, 828.0], [83.5, 831.0], [83.6, 832.0], [83.7, 835.0], [83.8, 835.0], [83.9, 838.0], [84.0, 839.0], [84.1, 841.0], [84.2, 844.0], [84.3, 848.0], [84.4, 849.0], [84.5, 850.0], [84.6, 852.0], [84.7, 854.0], [84.8, 856.0], [84.9, 858.0], [85.0, 860.0], [85.1, 864.0], [85.2, 866.0], [85.3, 868.0], [85.4, 869.0], [85.5, 872.0], [85.6, 874.0], [85.7, 877.0], [85.8, 880.0], [85.9, 886.0], [86.0, 890.0], [86.1, 895.0], [86.2, 895.0], [86.3, 897.0], [86.4, 904.0], [86.5, 907.0], [86.6, 909.0], [86.7, 915.0], [86.8, 918.0], [86.9, 924.0], [87.0, 926.0], [87.1, 930.0], [87.2, 934.0], [87.3, 936.0], [87.4, 939.0], [87.5, 945.0], [87.6, 950.0], [87.7, 953.0], [87.8, 957.0], [87.9, 961.0], [88.0, 966.0], [88.1, 968.0], [88.2, 971.0], [88.3, 975.0], [88.4, 980.0], [88.5, 983.0], [88.6, 986.0], [88.7, 989.0], [88.8, 993.0], [88.9, 998.0], [89.0, 1005.0], [89.1, 1008.0], [89.2, 1012.0], [89.3, 1016.0], [89.4, 1021.0], [89.5, 1024.0], [89.6, 1026.0], [89.7, 1030.0], [89.8, 1036.0], [89.9, 1042.0], [90.0, 1048.0], [90.1, 1058.0], [90.2, 1059.0], [90.3, 1069.0], [90.4, 1075.0], [90.5, 1084.0], [90.6, 1086.0], [90.7, 1090.0], [90.8, 1093.0], [90.9, 1103.0], [91.0, 1106.0], [91.1, 1110.0], [91.2, 1117.0], [91.3, 1122.0], [91.4, 1126.0], [91.5, 1132.0], [91.6, 1137.0], [91.7, 1142.0], [91.8, 1146.0], [91.9, 1149.0], [92.0, 1156.0], [92.1, 1159.0], [92.2, 1166.0], [92.3, 1169.0], [92.4, 1176.0], [92.5, 1181.0], [92.6, 1186.0], [92.7, 1186.0], [92.8, 1192.0], [92.9, 1196.0], [93.0, 1206.0], [93.1, 1210.0], [93.2, 1217.0], [93.3, 1222.0], [93.4, 1233.0], [93.5, 1238.0], [93.6, 1246.0], [93.7, 1249.0], [93.8, 1255.0], [93.9, 1257.0], [94.0, 1261.0], [94.1, 1266.0], [94.2, 1275.0], [94.3, 1286.0], [94.4, 1294.0], [94.5, 1303.0], [94.6, 1312.0], [94.7, 1322.0], [94.8, 1332.0], [94.9, 1341.0], [95.0, 1349.0], [95.1, 1357.0], [95.2, 1361.0], [95.3, 1373.0], [95.4, 1381.0], [95.5, 1386.0], [95.6, 1400.0], [95.7, 1411.0], [95.8, 1419.0], [95.9, 1425.0], [96.0, 1433.0], [96.1, 1438.0], [96.2, 1444.0], [96.3, 1458.0], [96.4, 1474.0], [96.5, 1480.0], [96.6, 1494.0], [96.7, 1501.0], [96.8, 1523.0], [96.9, 1537.0], [97.0, 1560.0], [97.1, 1580.0], [97.2, 1605.0], [97.3, 1630.0], [97.4, 1635.0], [97.5, 1663.0], [97.6, 1681.0], [97.7, 1699.0], [97.8, 1725.0], [97.9, 1749.0], [98.0, 1773.0], [98.1, 1790.0], [98.2, 1825.0], [98.3, 1854.0], [98.4, 1869.0], [98.5, 1899.0], [98.6, 1933.0], [98.7, 1974.0], [98.8, 2005.0], [98.9, 2035.0], [99.0, 2117.0], [99.1, 2138.0], [99.2, 2188.0], [99.3, 2213.0], [99.4, 2269.0], [99.5, 2316.0], [99.6, 2409.0], [99.7, 2545.0], [99.8, 3427.0], [99.9, 3968.0], [100.0, 4656.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1744.0, "series": [{"data": [[0.0, 1744.0], [600.0, 246.0], [700.0, 250.0], [800.0, 229.0], [900.0, 138.0], [1000.0, 100.0], [1100.0, 111.0], [1200.0, 80.0], [1300.0, 60.0], [1400.0, 56.0], [1500.0, 27.0], [100.0, 634.0], [1600.0, 28.0], [1700.0, 21.0], [1800.0, 21.0], [1900.0, 14.0], [2000.0, 12.0], [2100.0, 15.0], [2200.0, 9.0], [2300.0, 7.0], [2400.0, 4.0], [2500.0, 3.0], [2600.0, 2.0], [2800.0, 1.0], [3000.0, 1.0], [200.0, 453.0], [3400.0, 1.0], [3500.0, 3.0], [3600.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4100.0, 3.0], [4600.0, 1.0], [300.0, 365.0], [400.0, 354.0], [500.0, 276.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 175.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3555.0, "series": [{"data": [[0.0, 3555.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1542.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 175.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.06060606060606, "minX": 1.60223964E12, "maxY": 12.0, "series": [{"data": [[1.60223976E12, 12.0], [1.60223964E12, 11.06060606060606], [1.60223982E12, 12.0], [1.6022397E12, 12.0], [1.60223988E12, 11.164556962025319]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223988E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 425.6086791016377, "minX": 1.0, "maxY": 4656.0, "series": [{"data": [[4.0, 2144.0], [8.0, 1332.0], [2.0, 4104.0], [1.0, 4656.0], [9.0, 2093.0], [5.0, 2091.0], [10.0, 1853.0], [11.0, 727.5], [6.0, 1792.5], [12.0, 425.6086791016377], [3.0, 3539.0], [7.0, 4164.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.981600910470428, 431.8431335356586]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 262.01666666666665, "minX": 1.60223964E12, "maxY": 1637939.2, "series": [{"data": [[1.60223976E12, 1112453.2333333334], [1.60223964E12, 10759.283333333333], [1.60223982E12, 1637939.2], [1.6022397E12, 1474321.6666666667], [1.60223988E12, 56159.73333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223976E12, 18343.333333333332], [1.60223964E12, 262.01666666666665], [1.60223982E12, 14234.1], [1.6022397E12, 12047.1], [1.60223988E12, 693.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223988E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 334.4391040597289, "minX": 1.60223964E12, "maxY": 1397.5696202531647, "series": [{"data": [[1.60223976E12, 334.4391040597289], [1.60223964E12, 352.0909090909091], [1.60223982E12, 441.4336609336605], [1.6022397E12, 517.8495320374366], [1.60223988E12, 1397.5696202531647]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223988E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 334.21745216985545, "minX": 1.60223964E12, "maxY": 1397.316455696202, "series": [{"data": [[1.60223976E12, 334.21745216985545], [1.60223964E12, 351.81818181818187], [1.60223982E12, 441.0171990171993], [1.6022397E12, 517.3858891288697], [1.60223988E12, 1397.316455696202]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223988E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005599626691553904, "minX": 1.60223964E12, "maxY": 4.1818181818181825, "series": [{"data": [[1.60223976E12, 0.005599626691553904], [1.60223964E12, 4.1818181818181825], [1.60223982E12, 0.010442260442260464], [1.6022397E12, 0.009359251259899207], [1.60223988E12, 0.025316455696202535]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223988E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60223964E12, "maxY": 4656.0, "series": [{"data": [[1.60223976E12, 2459.0], [1.60223964E12, 977.0], [1.60223982E12, 2285.0], [1.6022397E12, 3067.0], [1.60223988E12, 4656.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223976E12, 34.0], [1.60223964E12, 40.0], [1.60223982E12, 33.0], [1.6022397E12, 36.0], [1.60223988E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223976E12, 34.0], [1.60223964E12, 40.0], [1.60223982E12, 34.0], [1.6022397E12, 36.76100013256073], [1.60223988E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223976E12, 34.0], [1.60223964E12, 40.0], [1.60223982E12, 33.47549980580807], [1.6022397E12, 36.20499983429909], [1.60223988E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223976E12, 30.0], [1.60223964E12, 40.0], [1.60223982E12, 28.0], [1.6022397E12, 34.0], [1.60223988E12, 34.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223976E12, 161.0], [1.60223964E12, 218.0], [1.60223982E12, 293.5], [1.6022397E12, 423.0], [1.60223988E12, 1034.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223988E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 64.0, "minX": 1.0, "maxY": 4380.0, "series": [{"data": [[2.0, 1540.5], [3.0, 4073.0], [4.0, 2518.0], [5.0, 1411.0], [6.0, 1749.0], [7.0, 1908.0], [8.0, 1142.5], [9.0, 1352.0], [10.0, 1180.0], [11.0, 878.0], [12.0, 848.5], [13.0, 810.0], [14.0, 756.0], [15.0, 809.0], [16.0, 648.0], [17.0, 570.0], [18.0, 733.0], [19.0, 653.0], [20.0, 433.5], [21.0, 478.0], [22.0, 482.5], [23.0, 385.0], [24.0, 474.5], [25.0, 306.0], [26.0, 290.5], [27.0, 400.0], [28.0, 417.5], [29.0, 186.0], [30.0, 282.5], [31.0, 89.0], [33.0, 364.0], [32.0, 292.0], [34.0, 147.5], [35.0, 261.0], [36.0, 257.0], [37.0, 155.0], [39.0, 94.0], [41.0, 178.0], [40.0, 113.0], [42.0, 231.0], [43.0, 83.0], [45.0, 82.0], [44.0, 96.0], [47.0, 108.5], [49.0, 73.0], [48.0, 211.0], [50.0, 92.5], [52.0, 183.5], [53.0, 177.0], [56.0, 147.0], [60.0, 187.0], [62.0, 90.0], [67.0, 78.0], [64.0, 78.0], [66.0, 174.0], [68.0, 90.5], [69.0, 104.0], [70.0, 64.0], [74.0, 142.5], [88.0, 81.5], [92.0, 75.0], [1.0, 4380.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 92.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 64.0, "minX": 1.0, "maxY": 4380.0, "series": [{"data": [[2.0, 1540.5], [3.0, 4073.0], [4.0, 2517.0], [5.0, 1411.0], [6.0, 1748.5], [7.0, 1905.0], [8.0, 1141.5], [9.0, 1351.0], [10.0, 1180.0], [11.0, 877.0], [12.0, 847.5], [13.0, 809.0], [14.0, 755.0], [15.0, 807.5], [16.0, 647.5], [17.0, 569.5], [18.0, 732.5], [19.0, 653.0], [20.0, 433.5], [21.0, 477.0], [22.0, 482.5], [23.0, 383.0], [24.0, 474.5], [25.0, 305.5], [26.0, 290.5], [27.0, 400.0], [28.0, 417.5], [29.0, 186.0], [30.0, 282.5], [31.0, 89.0], [33.0, 364.0], [32.0, 291.5], [34.0, 147.5], [35.0, 261.0], [36.0, 257.0], [37.0, 154.0], [39.0, 94.0], [41.0, 178.0], [40.0, 113.0], [42.0, 231.0], [43.0, 83.0], [45.0, 81.0], [44.0, 95.5], [47.0, 108.5], [49.0, 73.0], [48.0, 211.0], [50.0, 92.5], [52.0, 183.0], [53.0, 176.5], [56.0, 147.0], [60.0, 186.5], [62.0, 90.0], [67.0, 78.0], [64.0, 78.0], [66.0, 174.0], [68.0, 90.5], [69.0, 104.0], [70.0, 64.0], [74.0, 142.5], [88.0, 81.5], [92.0, 75.0], [1.0, 4380.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 92.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7333333333333333, "minX": 1.60223964E12, "maxY": 35.71666666666667, "series": [{"data": [[1.60223976E12, 35.71666666666667], [1.60223964E12, 0.7333333333333333], [1.60223982E12, 27.133333333333333], [1.6022397E12, 23.166666666666668], [1.60223988E12, 1.1166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223988E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.55, "minX": 1.60223964E12, "maxY": 35.71666666666667, "series": [{"data": [[1.60223976E12, 35.71666666666667], [1.60223964E12, 0.55], [1.60223982E12, 27.133333333333333], [1.6022397E12, 23.15], [1.60223988E12, 1.3166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223988E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.55, "minX": 1.60223964E12, "maxY": 35.71666666666667, "series": [{"data": [[1.60223976E12, 35.71666666666667], [1.60223964E12, 0.55], [1.60223982E12, 27.133333333333333], [1.6022397E12, 23.15], [1.60223988E12, 1.3166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223988E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.55, "minX": 1.60223964E12, "maxY": 35.71666666666667, "series": [{"data": [[1.60223976E12, 35.71666666666667], [1.60223964E12, 0.55], [1.60223982E12, 27.133333333333333], [1.6022397E12, 23.15], [1.60223988E12, 1.3166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223988E12, "title": "Total Transactions Per Second"}},
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

