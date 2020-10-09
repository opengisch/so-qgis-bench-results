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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 4053.0, "series": [{"data": [[0.0, 27.0], [0.1, 30.0], [0.2, 30.0], [0.3, 30.0], [0.4, 31.0], [0.5, 31.0], [0.6, 32.0], [0.7, 32.0], [0.8, 33.0], [0.9, 33.0], [1.0, 33.0], [1.1, 33.0], [1.2, 34.0], [1.3, 34.0], [1.4, 34.0], [1.5, 34.0], [1.6, 34.0], [1.7, 35.0], [1.8, 35.0], [1.9, 35.0], [2.0, 35.0], [2.1, 35.0], [2.2, 35.0], [2.3, 35.0], [2.4, 35.0], [2.5, 35.0], [2.6, 35.0], [2.7, 36.0], [2.8, 36.0], [2.9, 36.0], [3.0, 36.0], [3.1, 36.0], [3.2, 36.0], [3.3, 36.0], [3.4, 36.0], [3.5, 36.0], [3.6, 36.0], [3.7, 36.0], [3.8, 36.0], [3.9, 37.0], [4.0, 37.0], [4.1, 37.0], [4.2, 37.0], [4.3, 37.0], [4.4, 37.0], [4.5, 37.0], [4.6, 37.0], [4.7, 37.0], [4.8, 37.0], [4.9, 38.0], [5.0, 38.0], [5.1, 38.0], [5.2, 38.0], [5.3, 38.0], [5.4, 38.0], [5.5, 38.0], [5.6, 38.0], [5.7, 38.0], [5.8, 38.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 39.0], [6.9, 39.0], [7.0, 39.0], [7.1, 39.0], [7.2, 39.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 40.0], [8.2, 40.0], [8.3, 40.0], [8.4, 40.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 42.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 42.0], [9.8, 42.0], [9.9, 42.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 43.0], [10.4, 43.0], [10.5, 43.0], [10.6, 43.0], [10.7, 44.0], [10.8, 44.0], [10.9, 44.0], [11.0, 44.0], [11.1, 45.0], [11.2, 45.0], [11.3, 45.0], [11.4, 45.0], [11.5, 46.0], [11.6, 46.0], [11.7, 46.0], [11.8, 47.0], [11.9, 47.0], [12.0, 48.0], [12.1, 48.0], [12.2, 49.0], [12.3, 49.0], [12.4, 50.0], [12.5, 51.0], [12.6, 52.0], [12.7, 53.0], [12.8, 54.0], [12.9, 55.0], [13.0, 55.0], [13.1, 56.0], [13.2, 56.0], [13.3, 57.0], [13.4, 57.0], [13.5, 58.0], [13.6, 58.0], [13.7, 58.0], [13.8, 59.0], [13.9, 59.0], [14.0, 60.0], [14.1, 60.0], [14.2, 60.0], [14.3, 61.0], [14.4, 61.0], [14.5, 62.0], [14.6, 62.0], [14.7, 63.0], [14.8, 64.0], [14.9, 64.0], [15.0, 65.0], [15.1, 65.0], [15.2, 65.0], [15.3, 66.0], [15.4, 66.0], [15.5, 66.0], [15.6, 66.0], [15.7, 67.0], [15.8, 67.0], [15.9, 67.0], [16.0, 67.0], [16.1, 67.0], [16.2, 68.0], [16.3, 68.0], [16.4, 68.0], [16.5, 68.0], [16.6, 68.0], [16.7, 68.0], [16.8, 68.0], [16.9, 68.0], [17.0, 69.0], [17.1, 69.0], [17.2, 69.0], [17.3, 69.0], [17.4, 69.0], [17.5, 69.0], [17.6, 70.0], [17.7, 70.0], [17.8, 70.0], [17.9, 70.0], [18.0, 70.0], [18.1, 70.0], [18.2, 70.0], [18.3, 70.0], [18.4, 71.0], [18.5, 71.0], [18.6, 71.0], [18.7, 71.0], [18.8, 71.0], [18.9, 71.0], [19.0, 71.0], [19.1, 71.0], [19.2, 71.0], [19.3, 72.0], [19.4, 72.0], [19.5, 72.0], [19.6, 72.0], [19.7, 72.0], [19.8, 73.0], [19.9, 73.0], [20.0, 73.0], [20.1, 73.0], [20.2, 73.0], [20.3, 73.0], [20.4, 73.0], [20.5, 73.0], [20.6, 73.0], [20.7, 74.0], [20.8, 74.0], [20.9, 74.0], [21.0, 74.0], [21.1, 74.0], [21.2, 74.0], [21.3, 74.0], [21.4, 74.0], [21.5, 74.0], [21.6, 74.0], [21.7, 75.0], [21.8, 75.0], [21.9, 75.0], [22.0, 75.0], [22.1, 75.0], [22.2, 75.0], [22.3, 75.0], [22.4, 75.0], [22.5, 76.0], [22.6, 76.0], [22.7, 76.0], [22.8, 76.0], [22.9, 76.0], [23.0, 76.0], [23.1, 76.0], [23.2, 76.0], [23.3, 76.0], [23.4, 77.0], [23.5, 77.0], [23.6, 77.0], [23.7, 77.0], [23.8, 77.0], [23.9, 77.0], [24.0, 77.0], [24.1, 78.0], [24.2, 78.0], [24.3, 78.0], [24.4, 78.0], [24.5, 78.0], [24.6, 78.0], [24.7, 78.0], [24.8, 78.0], [24.9, 78.0], [25.0, 79.0], [25.1, 79.0], [25.2, 79.0], [25.3, 79.0], [25.4, 79.0], [25.5, 79.0], [25.6, 80.0], [25.7, 80.0], [25.8, 80.0], [25.9, 80.0], [26.0, 80.0], [26.1, 81.0], [26.2, 81.0], [26.3, 81.0], [26.4, 81.0], [26.5, 82.0], [26.6, 82.0], [26.7, 82.0], [26.8, 82.0], [26.9, 82.0], [27.0, 82.0], [27.1, 83.0], [27.2, 83.0], [27.3, 83.0], [27.4, 84.0], [27.5, 84.0], [27.6, 85.0], [27.7, 85.0], [27.8, 86.0], [27.9, 86.0], [28.0, 87.0], [28.1, 88.0], [28.2, 88.0], [28.3, 88.0], [28.4, 89.0], [28.5, 90.0], [28.6, 90.0], [28.7, 91.0], [28.8, 92.0], [28.9, 93.0], [29.0, 94.0], [29.1, 95.0], [29.2, 95.0], [29.3, 96.0], [29.4, 97.0], [29.5, 98.0], [29.6, 98.0], [29.7, 99.0], [29.8, 100.0], [29.9, 100.0], [30.0, 100.0], [30.1, 101.0], [30.2, 101.0], [30.3, 101.0], [30.4, 102.0], [30.5, 102.0], [30.6, 103.0], [30.7, 103.0], [30.8, 104.0], [30.9, 104.0], [31.0, 105.0], [31.1, 105.0], [31.2, 105.0], [31.3, 106.0], [31.4, 106.0], [31.5, 107.0], [31.6, 107.0], [31.7, 107.0], [31.8, 108.0], [31.9, 108.0], [32.0, 108.0], [32.1, 109.0], [32.2, 109.0], [32.3, 109.0], [32.4, 110.0], [32.5, 110.0], [32.6, 110.0], [32.7, 110.0], [32.8, 111.0], [32.9, 111.0], [33.0, 111.0], [33.1, 111.0], [33.2, 112.0], [33.3, 112.0], [33.4, 112.0], [33.5, 112.0], [33.6, 113.0], [33.7, 113.0], [33.8, 114.0], [33.9, 114.0], [34.0, 114.0], [34.1, 115.0], [34.2, 115.0], [34.3, 115.0], [34.4, 116.0], [34.5, 116.0], [34.6, 116.0], [34.7, 116.0], [34.8, 117.0], [34.9, 117.0], [35.0, 117.0], [35.1, 118.0], [35.2, 118.0], [35.3, 118.0], [35.4, 119.0], [35.5, 119.0], [35.6, 119.0], [35.7, 120.0], [35.8, 120.0], [35.9, 120.0], [36.0, 120.0], [36.1, 121.0], [36.2, 121.0], [36.3, 121.0], [36.4, 122.0], [36.5, 122.0], [36.6, 123.0], [36.7, 124.0], [36.8, 124.0], [36.9, 125.0], [37.0, 126.0], [37.1, 127.0], [37.2, 128.0], [37.3, 130.0], [37.4, 130.0], [37.5, 131.0], [37.6, 132.0], [37.7, 132.0], [37.8, 133.0], [37.9, 134.0], [38.0, 135.0], [38.1, 136.0], [38.2, 137.0], [38.3, 137.0], [38.4, 138.0], [38.5, 138.0], [38.6, 139.0], [38.7, 140.0], [38.8, 141.0], [38.9, 141.0], [39.0, 142.0], [39.1, 143.0], [39.2, 144.0], [39.3, 144.0], [39.4, 145.0], [39.5, 145.0], [39.6, 146.0], [39.7, 146.0], [39.8, 147.0], [39.9, 147.0], [40.0, 148.0], [40.1, 148.0], [40.2, 149.0], [40.3, 150.0], [40.4, 150.0], [40.5, 151.0], [40.6, 152.0], [40.7, 152.0], [40.8, 153.0], [40.9, 154.0], [41.0, 155.0], [41.1, 156.0], [41.2, 157.0], [41.3, 158.0], [41.4, 158.0], [41.5, 159.0], [41.6, 160.0], [41.7, 160.0], [41.8, 161.0], [41.9, 162.0], [42.0, 162.0], [42.1, 163.0], [42.2, 163.0], [42.3, 164.0], [42.4, 165.0], [42.5, 166.0], [42.6, 166.0], [42.7, 167.0], [42.8, 168.0], [42.9, 169.0], [43.0, 170.0], [43.1, 172.0], [43.2, 173.0], [43.3, 175.0], [43.4, 176.0], [43.5, 177.0], [43.6, 178.0], [43.7, 179.0], [43.8, 180.0], [43.9, 181.0], [44.0, 182.0], [44.1, 182.0], [44.2, 183.0], [44.3, 185.0], [44.4, 185.0], [44.5, 186.0], [44.6, 187.0], [44.7, 189.0], [44.8, 191.0], [44.9, 191.0], [45.0, 192.0], [45.1, 193.0], [45.2, 193.0], [45.3, 194.0], [45.4, 195.0], [45.5, 197.0], [45.6, 198.0], [45.7, 199.0], [45.8, 200.0], [45.9, 200.0], [46.0, 201.0], [46.1, 203.0], [46.2, 204.0], [46.3, 204.0], [46.4, 206.0], [46.5, 207.0], [46.6, 208.0], [46.7, 208.0], [46.8, 210.0], [46.9, 211.0], [47.0, 212.0], [47.1, 213.0], [47.2, 213.0], [47.3, 215.0], [47.4, 216.0], [47.5, 217.0], [47.6, 218.0], [47.7, 219.0], [47.8, 220.0], [47.9, 221.0], [48.0, 222.0], [48.1, 223.0], [48.2, 224.0], [48.3, 226.0], [48.4, 227.0], [48.5, 227.0], [48.6, 228.0], [48.7, 229.0], [48.8, 230.0], [48.9, 231.0], [49.0, 231.0], [49.1, 232.0], [49.2, 233.0], [49.3, 234.0], [49.4, 234.0], [49.5, 235.0], [49.6, 236.0], [49.7, 237.0], [49.8, 237.0], [49.9, 239.0], [50.0, 240.0], [50.1, 241.0], [50.2, 242.0], [50.3, 243.0], [50.4, 245.0], [50.5, 246.0], [50.6, 246.0], [50.7, 247.0], [50.8, 249.0], [50.9, 251.0], [51.0, 252.0], [51.1, 252.0], [51.2, 254.0], [51.3, 254.0], [51.4, 255.0], [51.5, 257.0], [51.6, 258.0], [51.7, 258.0], [51.8, 260.0], [51.9, 261.0], [52.0, 262.0], [52.1, 262.0], [52.2, 263.0], [52.3, 266.0], [52.4, 267.0], [52.5, 268.0], [52.6, 269.0], [52.7, 270.0], [52.8, 271.0], [52.9, 274.0], [53.0, 275.0], [53.1, 277.0], [53.2, 278.0], [53.3, 279.0], [53.4, 281.0], [53.5, 282.0], [53.6, 283.0], [53.7, 285.0], [53.8, 286.0], [53.9, 287.0], [54.0, 289.0], [54.1, 289.0], [54.2, 289.0], [54.3, 290.0], [54.4, 292.0], [54.5, 293.0], [54.6, 294.0], [54.7, 295.0], [54.8, 296.0], [54.9, 299.0], [55.0, 301.0], [55.1, 303.0], [55.2, 304.0], [55.3, 306.0], [55.4, 308.0], [55.5, 309.0], [55.6, 310.0], [55.7, 310.0], [55.8, 311.0], [55.9, 313.0], [56.0, 314.0], [56.1, 315.0], [56.2, 316.0], [56.3, 317.0], [56.4, 319.0], [56.5, 320.0], [56.6, 321.0], [56.7, 322.0], [56.8, 324.0], [56.9, 325.0], [57.0, 328.0], [57.1, 329.0], [57.2, 331.0], [57.3, 332.0], [57.4, 334.0], [57.5, 335.0], [57.6, 336.0], [57.7, 338.0], [57.8, 339.0], [57.9, 341.0], [58.0, 342.0], [58.1, 345.0], [58.2, 348.0], [58.3, 349.0], [58.4, 351.0], [58.5, 355.0], [58.6, 359.0], [58.7, 360.0], [58.8, 362.0], [58.9, 365.0], [59.0, 366.0], [59.1, 368.0], [59.2, 370.0], [59.3, 372.0], [59.4, 372.0], [59.5, 373.0], [59.6, 376.0], [59.7, 378.0], [59.8, 379.0], [59.9, 380.0], [60.0, 382.0], [60.1, 383.0], [60.2, 385.0], [60.3, 387.0], [60.4, 388.0], [60.5, 390.0], [60.6, 391.0], [60.7, 393.0], [60.8, 396.0], [60.9, 397.0], [61.0, 398.0], [61.1, 399.0], [61.2, 401.0], [61.3, 401.0], [61.4, 403.0], [61.5, 405.0], [61.6, 407.0], [61.7, 408.0], [61.8, 409.0], [61.9, 411.0], [62.0, 412.0], [62.1, 413.0], [62.2, 415.0], [62.3, 416.0], [62.4, 417.0], [62.5, 418.0], [62.6, 419.0], [62.7, 421.0], [62.8, 422.0], [62.9, 424.0], [63.0, 424.0], [63.1, 425.0], [63.2, 427.0], [63.3, 430.0], [63.4, 430.0], [63.5, 432.0], [63.6, 434.0], [63.7, 436.0], [63.8, 438.0], [63.9, 440.0], [64.0, 442.0], [64.1, 443.0], [64.2, 444.0], [64.3, 445.0], [64.4, 447.0], [64.5, 447.0], [64.6, 448.0], [64.7, 449.0], [64.8, 450.0], [64.9, 452.0], [65.0, 454.0], [65.1, 457.0], [65.2, 460.0], [65.3, 461.0], [65.4, 462.0], [65.5, 463.0], [65.6, 465.0], [65.7, 467.0], [65.8, 470.0], [65.9, 471.0], [66.0, 473.0], [66.1, 476.0], [66.2, 477.0], [66.3, 479.0], [66.4, 481.0], [66.5, 483.0], [66.6, 485.0], [66.7, 487.0], [66.8, 489.0], [66.9, 491.0], [67.0, 493.0], [67.1, 494.0], [67.2, 495.0], [67.3, 497.0], [67.4, 499.0], [67.5, 501.0], [67.6, 503.0], [67.7, 504.0], [67.8, 505.0], [67.9, 508.0], [68.0, 510.0], [68.1, 511.0], [68.2, 513.0], [68.3, 515.0], [68.4, 517.0], [68.5, 520.0], [68.6, 521.0], [68.7, 523.0], [68.8, 527.0], [68.9, 528.0], [69.0, 531.0], [69.1, 533.0], [69.2, 535.0], [69.3, 536.0], [69.4, 537.0], [69.5, 540.0], [69.6, 543.0], [69.7, 546.0], [69.8, 547.0], [69.9, 549.0], [70.0, 552.0], [70.1, 553.0], [70.2, 556.0], [70.3, 560.0], [70.4, 561.0], [70.5, 563.0], [70.6, 564.0], [70.7, 566.0], [70.8, 567.0], [70.9, 570.0], [71.0, 574.0], [71.1, 575.0], [71.2, 576.0], [71.3, 577.0], [71.4, 579.0], [71.5, 581.0], [71.6, 582.0], [71.7, 585.0], [71.8, 586.0], [71.9, 589.0], [72.0, 591.0], [72.1, 593.0], [72.2, 594.0], [72.3, 595.0], [72.4, 598.0], [72.5, 598.0], [72.6, 599.0], [72.7, 601.0], [72.8, 601.0], [72.9, 605.0], [73.0, 606.0], [73.1, 608.0], [73.2, 609.0], [73.3, 612.0], [73.4, 615.0], [73.5, 616.0], [73.6, 617.0], [73.7, 617.0], [73.8, 619.0], [73.9, 621.0], [74.0, 622.0], [74.1, 623.0], [74.2, 625.0], [74.3, 628.0], [74.4, 631.0], [74.5, 633.0], [74.6, 635.0], [74.7, 638.0], [74.8, 640.0], [74.9, 642.0], [75.0, 643.0], [75.1, 644.0], [75.2, 647.0], [75.3, 649.0], [75.4, 653.0], [75.5, 655.0], [75.6, 657.0], [75.7, 658.0], [75.8, 659.0], [75.9, 661.0], [76.0, 662.0], [76.1, 665.0], [76.2, 666.0], [76.3, 667.0], [76.4, 672.0], [76.5, 675.0], [76.6, 678.0], [76.7, 680.0], [76.8, 682.0], [76.9, 684.0], [77.0, 686.0], [77.1, 689.0], [77.2, 693.0], [77.3, 695.0], [77.4, 697.0], [77.5, 699.0], [77.6, 702.0], [77.7, 704.0], [77.8, 706.0], [77.9, 708.0], [78.0, 712.0], [78.1, 715.0], [78.2, 716.0], [78.3, 717.0], [78.4, 719.0], [78.5, 722.0], [78.6, 724.0], [78.7, 727.0], [78.8, 731.0], [78.9, 734.0], [79.0, 736.0], [79.1, 740.0], [79.2, 742.0], [79.3, 745.0], [79.4, 746.0], [79.5, 750.0], [79.6, 752.0], [79.7, 753.0], [79.8, 756.0], [79.9, 757.0], [80.0, 758.0], [80.1, 759.0], [80.2, 761.0], [80.3, 763.0], [80.4, 763.0], [80.5, 765.0], [80.6, 769.0], [80.7, 770.0], [80.8, 772.0], [80.9, 775.0], [81.0, 775.0], [81.1, 779.0], [81.2, 782.0], [81.3, 786.0], [81.4, 787.0], [81.5, 790.0], [81.6, 792.0], [81.7, 795.0], [81.8, 796.0], [81.9, 797.0], [82.0, 800.0], [82.1, 804.0], [82.2, 805.0], [82.3, 806.0], [82.4, 809.0], [82.5, 811.0], [82.6, 813.0], [82.7, 814.0], [82.8, 816.0], [82.9, 817.0], [83.0, 819.0], [83.1, 822.0], [83.2, 823.0], [83.3, 825.0], [83.4, 826.0], [83.5, 829.0], [83.6, 831.0], [83.7, 834.0], [83.8, 837.0], [83.9, 841.0], [84.0, 842.0], [84.1, 844.0], [84.2, 848.0], [84.3, 850.0], [84.4, 854.0], [84.5, 857.0], [84.6, 860.0], [84.7, 865.0], [84.8, 868.0], [84.9, 872.0], [85.0, 875.0], [85.1, 880.0], [85.2, 883.0], [85.3, 886.0], [85.4, 889.0], [85.5, 891.0], [85.6, 898.0], [85.7, 900.0], [85.8, 903.0], [85.9, 909.0], [86.0, 910.0], [86.1, 915.0], [86.2, 916.0], [86.3, 919.0], [86.4, 925.0], [86.5, 928.0], [86.6, 932.0], [86.7, 935.0], [86.8, 939.0], [86.9, 941.0], [87.0, 945.0], [87.1, 945.0], [87.2, 949.0], [87.3, 951.0], [87.4, 953.0], [87.5, 959.0], [87.6, 964.0], [87.7, 966.0], [87.8, 969.0], [87.9, 974.0], [88.0, 979.0], [88.1, 985.0], [88.2, 988.0], [88.3, 995.0], [88.4, 997.0], [88.5, 1005.0], [88.6, 1008.0], [88.7, 1013.0], [88.8, 1018.0], [88.9, 1019.0], [89.0, 1024.0], [89.1, 1026.0], [89.2, 1036.0], [89.3, 1041.0], [89.4, 1048.0], [89.5, 1056.0], [89.6, 1062.0], [89.7, 1065.0], [89.8, 1075.0], [89.9, 1080.0], [90.0, 1085.0], [90.1, 1089.0], [90.2, 1095.0], [90.3, 1099.0], [90.4, 1100.0], [90.5, 1107.0], [90.6, 1112.0], [90.7, 1118.0], [90.8, 1125.0], [90.9, 1133.0], [91.0, 1140.0], [91.1, 1147.0], [91.2, 1150.0], [91.3, 1155.0], [91.4, 1158.0], [91.5, 1162.0], [91.6, 1172.0], [91.7, 1178.0], [91.8, 1184.0], [91.9, 1189.0], [92.0, 1199.0], [92.1, 1207.0], [92.2, 1213.0], [92.3, 1218.0], [92.4, 1226.0], [92.5, 1227.0], [92.6, 1237.0], [92.7, 1247.0], [92.8, 1252.0], [92.9, 1256.0], [93.0, 1265.0], [93.1, 1273.0], [93.2, 1285.0], [93.3, 1293.0], [93.4, 1299.0], [93.5, 1307.0], [93.6, 1316.0], [93.7, 1322.0], [93.8, 1330.0], [93.9, 1338.0], [94.0, 1347.0], [94.1, 1356.0], [94.2, 1370.0], [94.3, 1382.0], [94.4, 1391.0], [94.5, 1397.0], [94.6, 1402.0], [94.7, 1407.0], [94.8, 1420.0], [94.9, 1432.0], [95.0, 1439.0], [95.1, 1448.0], [95.2, 1454.0], [95.3, 1472.0], [95.4, 1480.0], [95.5, 1486.0], [95.6, 1497.0], [95.7, 1503.0], [95.8, 1515.0], [95.9, 1526.0], [96.0, 1547.0], [96.1, 1563.0], [96.2, 1578.0], [96.3, 1587.0], [96.4, 1606.0], [96.5, 1622.0], [96.6, 1647.0], [96.7, 1659.0], [96.8, 1675.0], [96.9, 1690.0], [97.0, 1709.0], [97.1, 1748.0], [97.2, 1762.0], [97.3, 1776.0], [97.4, 1808.0], [97.5, 1837.0], [97.6, 1848.0], [97.7, 1859.0], [97.8, 1920.0], [97.9, 1952.0], [98.0, 1972.0], [98.1, 2001.0], [98.2, 2025.0], [98.3, 2063.0], [98.4, 2088.0], [98.5, 2116.0], [98.6, 2134.0], [98.7, 2162.0], [98.8, 2196.0], [98.9, 2259.0], [99.0, 2308.0], [99.1, 2406.0], [99.2, 2447.0], [99.3, 2523.0], [99.4, 2589.0], [99.5, 2679.0], [99.6, 2776.0], [99.7, 2926.0], [99.8, 3101.0], [99.9, 3600.0], [100.0, 4053.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1570.0, "series": [{"data": [[0.0, 1570.0], [600.0, 258.0], [700.0, 235.0], [800.0, 195.0], [900.0, 145.0], [1000.0, 102.0], [1100.0, 87.0], [1200.0, 74.0], [1300.0, 60.0], [1400.0, 59.0], [1500.0, 37.0], [100.0, 843.0], [1600.0, 32.0], [1700.0, 21.0], [1800.0, 21.0], [1900.0, 16.0], [2000.0, 20.0], [2100.0, 18.0], [2300.0, 6.0], [2200.0, 9.0], [2400.0, 10.0], [2500.0, 7.0], [2600.0, 5.0], [2700.0, 7.0], [2800.0, 3.0], [2900.0, 4.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 483.0], [3200.0, 1.0], [3300.0, 1.0], [3500.0, 2.0], [3700.0, 1.0], [3600.0, 2.0], [3900.0, 2.0], [4000.0, 1.0], [300.0, 326.0], [400.0, 334.0], [500.0, 273.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 228.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3558.0, "series": [{"data": [[0.0, 3558.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1486.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 228.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.936293436293434, "minX": 1.60219008E12, "maxY": 12.0, "series": [{"data": [[1.6021902E12, 12.0], [1.60219008E12, 11.96433666191156], [1.60219026E12, 11.936293436293434], [1.60219014E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219026E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 434.9541389153181, "minX": 1.0, "maxY": 3956.0, "series": [{"data": [[4.0, 2095.5], [8.0, 2983.0], [2.0, 3600.0], [1.0, 3956.0], [9.0, 1390.5], [10.0, 1892.0], [5.0, 2465.0], [11.0, 634.0], [6.0, 1892.0], [12.0, 434.9541389153181], [3.0, 2880.0], [7.0, 2041.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.982738998482558, 440.3372534142641]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5995.016666666666, "minX": 1.60219008E12, "maxY": 1387650.4, "series": [{"data": [[1.6021902E12, 1373125.0333333334], [1.60219008E12, 535784.5833333334], [1.60219026E12, 994956.6666666666], [1.60219014E12, 1387650.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6021902E12, 16628.166666666668], [1.60219008E12, 5995.016666666666], [1.60219026E12, 9146.45], [1.60219014E12, 13809.916666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219026E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 365.31476750127695, "minX": 1.60219008E12, "maxY": 536.3523537803139, "series": [{"data": [[1.6021902E12, 365.31476750127695], [1.60219008E12, 536.3523537803139], [1.60219026E12, 482.78571428571405], [1.60219014E12, 462.85678073510695]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219026E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 365.0178845171175, "minX": 1.60219008E12, "maxY": 535.9728958630528, "series": [{"data": [[1.6021902E12, 365.0178845171175], [1.60219008E12, 535.9728958630528], [1.60219026E12, 482.3696911196909], [1.60219014E12, 462.4847908745242]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219026E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007722007722007737, "minX": 1.60219008E12, "maxY": 0.21968616262482168, "series": [{"data": [[1.6021902E12, 0.012263668880940222], [1.60219008E12, 0.21968616262482168], [1.60219026E12, 0.007722007722007737], [1.60219014E12, 0.01647655259822561]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219026E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.60219008E12, "maxY": 4053.0, "series": [{"data": [[1.6021902E12, 2811.0], [1.60219008E12, 2333.0], [1.60219026E12, 4053.0], [1.60219014E12, 3702.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6021902E12, 32.0], [1.60219008E12, 68.0], [1.60219026E12, 32.0], [1.60219014E12, 33.21099962353706]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6021902E12, 32.0], [1.60219008E12, 68.0], [1.60219026E12, 32.266300098896025], [1.60219014E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6021902E12, 32.0], [1.60219008E12, 68.0], [1.60219026E12, 32.0], [1.60219014E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6021902E12, 27.0], [1.60219008E12, 65.0], [1.60219026E12, 29.0], [1.60219014E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6021902E12, 187.0], [1.60219008E12, 460.0], [1.60219026E12, 292.5], [1.60219014E12, 241.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219026E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 42.0, "minX": 1.0, "maxY": 3956.0, "series": [{"data": [[2.0, 3069.5], [3.0, 3291.5], [4.0, 1276.5], [5.0, 1695.5], [6.0, 1475.0], [7.0, 1203.0], [8.0, 1054.5], [9.0, 1078.0], [10.0, 1093.5], [11.0, 803.0], [12.0, 846.0], [13.0, 810.0], [14.0, 769.0], [15.0, 644.5], [16.0, 525.0], [17.0, 715.5], [18.0, 547.5], [19.0, 567.0], [20.0, 555.5], [21.0, 560.0], [22.0, 527.5], [23.0, 484.5], [24.0, 388.0], [25.0, 166.0], [26.0, 275.0], [27.0, 356.0], [28.0, 230.5], [29.0, 282.0], [30.0, 150.5], [31.0, 259.0], [32.0, 117.0], [33.0, 334.0], [35.0, 219.0], [34.0, 255.5], [36.0, 109.5], [37.0, 280.5], [38.0, 116.0], [39.0, 236.0], [40.0, 266.5], [41.0, 236.0], [43.0, 139.0], [42.0, 270.5], [44.0, 129.5], [45.0, 72.0], [47.0, 183.0], [46.0, 167.5], [48.0, 141.0], [49.0, 169.0], [53.0, 123.0], [52.0, 44.5], [55.0, 140.5], [54.0, 117.5], [57.0, 108.0], [56.0, 127.5], [58.0, 190.0], [59.0, 42.0], [60.0, 139.5], [61.0, 105.5], [65.0, 77.0], [64.0, 176.5], [67.0, 72.0], [71.0, 70.0], [72.0, 103.0], [77.0, 155.0], [76.0, 161.5], [78.0, 103.0], [86.0, 81.5], [93.0, 84.0], [1.0, 3956.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 93.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 42.0, "minX": 1.0, "maxY": 3956.0, "series": [{"data": [[2.0, 3069.5], [3.0, 3291.0], [4.0, 1275.5], [5.0, 1693.5], [6.0, 1473.0], [7.0, 1199.0], [8.0, 1052.0], [9.0, 1078.0], [10.0, 1093.0], [11.0, 802.0], [12.0, 845.0], [13.0, 809.5], [14.0, 769.0], [15.0, 642.5], [16.0, 525.0], [17.0, 715.0], [18.0, 547.5], [19.0, 566.0], [20.0, 555.5], [21.0, 560.0], [22.0, 527.0], [23.0, 484.0], [24.0, 387.0], [25.0, 166.0], [26.0, 274.5], [27.0, 355.5], [28.0, 230.5], [29.0, 282.0], [30.0, 150.0], [31.0, 258.0], [32.0, 117.0], [33.0, 334.0], [35.0, 219.0], [34.0, 254.5], [36.0, 109.0], [37.0, 280.5], [38.0, 116.0], [39.0, 235.0], [40.0, 266.5], [41.0, 236.0], [43.0, 138.0], [42.0, 270.5], [44.0, 129.5], [45.0, 72.0], [47.0, 183.0], [46.0, 167.0], [48.0, 141.0], [49.0, 169.0], [53.0, 123.0], [52.0, 44.0], [55.0, 140.5], [54.0, 117.5], [57.0, 107.5], [56.0, 127.5], [58.0, 190.0], [59.0, 42.0], [60.0, 139.5], [61.0, 105.5], [65.0, 77.0], [64.0, 176.0], [67.0, 72.0], [71.0, 70.0], [72.0, 103.0], [77.0, 155.0], [76.0, 161.0], [78.0, 103.0], [86.0, 81.5], [93.0, 84.0], [1.0, 3956.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 93.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.883333333333333, "minX": 1.60219008E12, "maxY": 32.61666666666667, "series": [{"data": [[1.6021902E12, 32.61666666666667], [1.60219008E12, 11.883333333333333], [1.60219026E12, 17.066666666666666], [1.60219014E12, 26.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219026E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.683333333333334, "minX": 1.60219008E12, "maxY": 32.61666666666667, "series": [{"data": [[1.6021902E12, 32.61666666666667], [1.60219008E12, 11.683333333333334], [1.60219026E12, 17.266666666666666], [1.60219014E12, 26.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219026E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.683333333333334, "minX": 1.60219008E12, "maxY": 32.61666666666667, "series": [{"data": [[1.6021902E12, 32.61666666666667], [1.60219008E12, 11.683333333333334], [1.60219026E12, 17.266666666666666], [1.60219014E12, 26.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219026E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.683333333333334, "minX": 1.60219008E12, "maxY": 32.61666666666667, "series": [{"data": [[1.6021902E12, 32.61666666666667], [1.60219008E12, 11.683333333333334], [1.60219026E12, 17.266666666666666], [1.60219014E12, 26.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219026E12, "title": "Total Transactions Per Second"}},
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

