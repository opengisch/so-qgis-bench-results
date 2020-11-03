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
        data: {"result": {"minY": 33.0, "minX": 0.0, "maxY": 4709.0, "series": [{"data": [[0.0, 33.0], [0.1, 36.0], [0.2, 38.0], [0.3, 38.0], [0.4, 39.0], [0.5, 39.0], [0.6, 40.0], [0.7, 41.0], [0.8, 41.0], [0.9, 41.0], [1.0, 42.0], [1.1, 42.0], [1.2, 42.0], [1.3, 43.0], [1.4, 43.0], [1.5, 43.0], [1.6, 44.0], [1.7, 44.0], [1.8, 44.0], [1.9, 44.0], [2.0, 44.0], [2.1, 44.0], [2.2, 45.0], [2.3, 45.0], [2.4, 45.0], [2.5, 45.0], [2.6, 45.0], [2.7, 45.0], [2.8, 46.0], [2.9, 46.0], [3.0, 46.0], [3.1, 46.0], [3.2, 46.0], [3.3, 47.0], [3.4, 47.0], [3.5, 47.0], [3.6, 47.0], [3.7, 47.0], [3.8, 48.0], [3.9, 48.0], [4.0, 48.0], [4.1, 48.0], [4.2, 48.0], [4.3, 48.0], [4.4, 48.0], [4.5, 49.0], [4.6, 49.0], [4.7, 49.0], [4.8, 49.0], [4.9, 49.0], [5.0, 49.0], [5.1, 49.0], [5.2, 50.0], [5.3, 50.0], [5.4, 50.0], [5.5, 50.0], [5.6, 50.0], [5.7, 50.0], [5.8, 51.0], [5.9, 51.0], [6.0, 51.0], [6.1, 51.0], [6.2, 51.0], [6.3, 51.0], [6.4, 52.0], [6.5, 52.0], [6.6, 52.0], [6.7, 52.0], [6.8, 52.0], [6.9, 53.0], [7.0, 53.0], [7.1, 53.0], [7.2, 53.0], [7.3, 53.0], [7.4, 54.0], [7.5, 54.0], [7.6, 54.0], [7.7, 54.0], [7.8, 55.0], [7.9, 55.0], [8.0, 55.0], [8.1, 55.0], [8.2, 56.0], [8.3, 56.0], [8.4, 56.0], [8.5, 56.0], [8.6, 57.0], [8.7, 57.0], [8.8, 58.0], [8.9, 58.0], [9.0, 58.0], [9.1, 59.0], [9.2, 60.0], [9.3, 60.0], [9.4, 61.0], [9.5, 61.0], [9.6, 62.0], [9.7, 62.0], [9.8, 62.0], [9.9, 63.0], [10.0, 63.0], [10.1, 63.0], [10.2, 63.0], [10.3, 64.0], [10.4, 64.0], [10.5, 65.0], [10.6, 66.0], [10.7, 66.0], [10.8, 66.0], [10.9, 67.0], [11.0, 67.0], [11.1, 68.0], [11.2, 68.0], [11.3, 69.0], [11.4, 69.0], [11.5, 70.0], [11.6, 70.0], [11.7, 70.0], [11.8, 71.0], [11.9, 71.0], [12.0, 71.0], [12.1, 72.0], [12.2, 72.0], [12.3, 73.0], [12.4, 73.0], [12.5, 74.0], [12.6, 74.0], [12.7, 75.0], [12.8, 75.0], [12.9, 75.0], [13.0, 76.0], [13.1, 76.0], [13.2, 77.0], [13.3, 77.0], [13.4, 77.0], [13.5, 78.0], [13.6, 78.0], [13.7, 79.0], [13.8, 79.0], [13.9, 79.0], [14.0, 80.0], [14.1, 80.0], [14.2, 80.0], [14.3, 80.0], [14.4, 80.0], [14.5, 80.0], [14.6, 81.0], [14.7, 81.0], [14.8, 81.0], [14.9, 81.0], [15.0, 82.0], [15.1, 82.0], [15.2, 82.0], [15.3, 82.0], [15.4, 82.0], [15.5, 82.0], [15.6, 83.0], [15.7, 83.0], [15.8, 83.0], [15.9, 83.0], [16.0, 83.0], [16.1, 83.0], [16.2, 84.0], [16.3, 84.0], [16.4, 84.0], [16.5, 84.0], [16.6, 85.0], [16.7, 85.0], [16.8, 85.0], [16.9, 85.0], [17.0, 85.0], [17.1, 85.0], [17.2, 85.0], [17.3, 86.0], [17.4, 86.0], [17.5, 86.0], [17.6, 86.0], [17.7, 86.0], [17.8, 86.0], [17.9, 87.0], [18.0, 87.0], [18.1, 87.0], [18.2, 87.0], [18.3, 87.0], [18.4, 87.0], [18.5, 87.0], [18.6, 88.0], [18.7, 88.0], [18.8, 88.0], [18.9, 88.0], [19.0, 88.0], [19.1, 89.0], [19.2, 89.0], [19.3, 89.0], [19.4, 89.0], [19.5, 89.0], [19.6, 89.0], [19.7, 89.0], [19.8, 89.0], [19.9, 90.0], [20.0, 90.0], [20.1, 90.0], [20.2, 90.0], [20.3, 90.0], [20.4, 90.0], [20.5, 90.0], [20.6, 90.0], [20.7, 91.0], [20.8, 91.0], [20.9, 91.0], [21.0, 91.0], [21.1, 91.0], [21.2, 91.0], [21.3, 91.0], [21.4, 92.0], [21.5, 92.0], [21.6, 92.0], [21.7, 92.0], [21.8, 92.0], [21.9, 92.0], [22.0, 92.0], [22.1, 92.0], [22.2, 93.0], [22.3, 93.0], [22.4, 93.0], [22.5, 93.0], [22.6, 93.0], [22.7, 94.0], [22.8, 94.0], [22.9, 94.0], [23.0, 94.0], [23.1, 94.0], [23.2, 94.0], [23.3, 94.0], [23.4, 94.0], [23.5, 95.0], [23.6, 95.0], [23.7, 95.0], [23.8, 95.0], [23.9, 95.0], [24.0, 95.0], [24.1, 95.0], [24.2, 95.0], [24.3, 96.0], [24.4, 96.0], [24.5, 96.0], [24.6, 96.0], [24.7, 96.0], [24.8, 96.0], [24.9, 96.0], [25.0, 97.0], [25.1, 97.0], [25.2, 97.0], [25.3, 97.0], [25.4, 97.0], [25.5, 97.0], [25.6, 98.0], [25.7, 98.0], [25.8, 98.0], [25.9, 98.0], [26.0, 98.0], [26.1, 98.0], [26.2, 98.0], [26.3, 99.0], [26.4, 99.0], [26.5, 99.0], [26.6, 100.0], [26.7, 100.0], [26.8, 100.0], [26.9, 101.0], [27.0, 101.0], [27.1, 101.0], [27.2, 101.0], [27.3, 101.0], [27.4, 102.0], [27.5, 102.0], [27.6, 102.0], [27.7, 102.0], [27.8, 102.0], [27.9, 103.0], [28.0, 103.0], [28.1, 103.0], [28.2, 103.0], [28.3, 103.0], [28.4, 104.0], [28.5, 104.0], [28.6, 104.0], [28.7, 105.0], [28.8, 105.0], [28.9, 105.0], [29.0, 105.0], [29.1, 106.0], [29.2, 106.0], [29.3, 106.0], [29.4, 106.0], [29.5, 107.0], [29.6, 107.0], [29.7, 107.0], [29.8, 108.0], [29.9, 108.0], [30.0, 108.0], [30.1, 109.0], [30.2, 109.0], [30.3, 109.0], [30.4, 110.0], [30.5, 110.0], [30.6, 111.0], [30.7, 111.0], [30.8, 111.0], [30.9, 111.0], [31.0, 112.0], [31.1, 112.0], [31.2, 112.0], [31.3, 113.0], [31.4, 113.0], [31.5, 114.0], [31.6, 114.0], [31.7, 114.0], [31.8, 115.0], [31.9, 115.0], [32.0, 116.0], [32.1, 116.0], [32.2, 116.0], [32.3, 117.0], [32.4, 117.0], [32.5, 118.0], [32.6, 118.0], [32.7, 119.0], [32.8, 120.0], [32.9, 120.0], [33.0, 121.0], [33.1, 121.0], [33.2, 122.0], [33.3, 122.0], [33.4, 123.0], [33.5, 123.0], [33.6, 123.0], [33.7, 124.0], [33.8, 124.0], [33.9, 124.0], [34.0, 126.0], [34.1, 126.0], [34.2, 126.0], [34.3, 127.0], [34.4, 127.0], [34.5, 128.0], [34.6, 128.0], [34.7, 129.0], [34.8, 130.0], [34.9, 131.0], [35.0, 131.0], [35.1, 132.0], [35.2, 133.0], [35.3, 134.0], [35.4, 134.0], [35.5, 135.0], [35.6, 136.0], [35.7, 136.0], [35.8, 136.0], [35.9, 137.0], [36.0, 138.0], [36.1, 138.0], [36.2, 139.0], [36.3, 140.0], [36.4, 141.0], [36.5, 141.0], [36.6, 142.0], [36.7, 142.0], [36.8, 143.0], [36.9, 144.0], [37.0, 145.0], [37.1, 145.0], [37.2, 146.0], [37.3, 147.0], [37.4, 148.0], [37.5, 148.0], [37.6, 149.0], [37.7, 150.0], [37.8, 151.0], [37.9, 151.0], [38.0, 152.0], [38.1, 153.0], [38.2, 154.0], [38.3, 155.0], [38.4, 156.0], [38.5, 156.0], [38.6, 157.0], [38.7, 158.0], [38.8, 158.0], [38.9, 159.0], [39.0, 160.0], [39.1, 161.0], [39.2, 162.0], [39.3, 162.0], [39.4, 163.0], [39.5, 163.0], [39.6, 164.0], [39.7, 166.0], [39.8, 166.0], [39.9, 167.0], [40.0, 167.0], [40.1, 169.0], [40.2, 170.0], [40.3, 171.0], [40.4, 171.0], [40.5, 173.0], [40.6, 174.0], [40.7, 175.0], [40.8, 177.0], [40.9, 178.0], [41.0, 178.0], [41.1, 179.0], [41.2, 180.0], [41.3, 180.0], [41.4, 183.0], [41.5, 183.0], [41.6, 184.0], [41.7, 185.0], [41.8, 186.0], [41.9, 188.0], [42.0, 188.0], [42.1, 190.0], [42.2, 191.0], [42.3, 191.0], [42.4, 192.0], [42.5, 194.0], [42.6, 195.0], [42.7, 197.0], [42.8, 198.0], [42.9, 199.0], [43.0, 201.0], [43.1, 204.0], [43.2, 205.0], [43.3, 206.0], [43.4, 207.0], [43.5, 207.0], [43.6, 211.0], [43.7, 212.0], [43.8, 213.0], [43.9, 214.0], [44.0, 215.0], [44.1, 216.0], [44.2, 217.0], [44.3, 218.0], [44.4, 219.0], [44.5, 221.0], [44.6, 223.0], [44.7, 225.0], [44.8, 226.0], [44.9, 227.0], [45.0, 228.0], [45.1, 228.0], [45.2, 230.0], [45.3, 231.0], [45.4, 232.0], [45.5, 233.0], [45.6, 234.0], [45.7, 236.0], [45.8, 237.0], [45.9, 238.0], [46.0, 239.0], [46.1, 241.0], [46.2, 241.0], [46.3, 242.0], [46.4, 243.0], [46.5, 244.0], [46.6, 246.0], [46.7, 246.0], [46.8, 248.0], [46.9, 248.0], [47.0, 250.0], [47.1, 251.0], [47.2, 251.0], [47.3, 252.0], [47.4, 253.0], [47.5, 254.0], [47.6, 254.0], [47.7, 255.0], [47.8, 257.0], [47.9, 258.0], [48.0, 259.0], [48.1, 261.0], [48.2, 262.0], [48.3, 263.0], [48.4, 264.0], [48.5, 265.0], [48.6, 266.0], [48.7, 267.0], [48.8, 267.0], [48.9, 268.0], [49.0, 268.0], [49.1, 271.0], [49.2, 272.0], [49.3, 273.0], [49.4, 274.0], [49.5, 274.0], [49.6, 275.0], [49.7, 276.0], [49.8, 278.0], [49.9, 279.0], [50.0, 279.0], [50.1, 280.0], [50.2, 281.0], [50.3, 282.0], [50.4, 283.0], [50.5, 284.0], [50.6, 285.0], [50.7, 287.0], [50.8, 289.0], [50.9, 290.0], [51.0, 291.0], [51.1, 291.0], [51.2, 293.0], [51.3, 294.0], [51.4, 295.0], [51.5, 296.0], [51.6, 297.0], [51.7, 298.0], [51.8, 299.0], [51.9, 300.0], [52.0, 302.0], [52.1, 303.0], [52.2, 303.0], [52.3, 304.0], [52.4, 306.0], [52.5, 307.0], [52.6, 308.0], [52.7, 308.0], [52.8, 310.0], [52.9, 311.0], [53.0, 312.0], [53.1, 313.0], [53.2, 313.0], [53.3, 314.0], [53.4, 316.0], [53.5, 317.0], [53.6, 318.0], [53.7, 319.0], [53.8, 320.0], [53.9, 322.0], [54.0, 322.0], [54.1, 323.0], [54.2, 324.0], [54.3, 326.0], [54.4, 326.0], [54.5, 328.0], [54.6, 329.0], [54.7, 330.0], [54.8, 332.0], [54.9, 334.0], [55.0, 334.0], [55.1, 334.0], [55.2, 336.0], [55.3, 338.0], [55.4, 340.0], [55.5, 340.0], [55.6, 341.0], [55.7, 342.0], [55.8, 344.0], [55.9, 345.0], [56.0, 346.0], [56.1, 348.0], [56.2, 351.0], [56.3, 351.0], [56.4, 353.0], [56.5, 355.0], [56.6, 356.0], [56.7, 358.0], [56.8, 360.0], [56.9, 364.0], [57.0, 365.0], [57.1, 367.0], [57.2, 369.0], [57.3, 370.0], [57.4, 371.0], [57.5, 373.0], [57.6, 375.0], [57.7, 380.0], [57.8, 381.0], [57.9, 384.0], [58.0, 385.0], [58.1, 387.0], [58.2, 391.0], [58.3, 392.0], [58.4, 393.0], [58.5, 395.0], [58.6, 396.0], [58.7, 398.0], [58.8, 399.0], [58.9, 400.0], [59.0, 401.0], [59.1, 403.0], [59.2, 405.0], [59.3, 407.0], [59.4, 408.0], [59.5, 408.0], [59.6, 410.0], [59.7, 410.0], [59.8, 411.0], [59.9, 413.0], [60.0, 415.0], [60.1, 416.0], [60.2, 418.0], [60.3, 419.0], [60.4, 421.0], [60.5, 422.0], [60.6, 423.0], [60.7, 425.0], [60.8, 428.0], [60.9, 429.0], [61.0, 430.0], [61.1, 431.0], [61.2, 433.0], [61.3, 434.0], [61.4, 437.0], [61.5, 438.0], [61.6, 439.0], [61.7, 441.0], [61.8, 441.0], [61.9, 442.0], [62.0, 444.0], [62.1, 446.0], [62.2, 446.0], [62.3, 448.0], [62.4, 448.0], [62.5, 449.0], [62.6, 451.0], [62.7, 453.0], [62.8, 455.0], [62.9, 456.0], [63.0, 458.0], [63.1, 459.0], [63.2, 460.0], [63.3, 463.0], [63.4, 466.0], [63.5, 467.0], [63.6, 468.0], [63.7, 468.0], [63.8, 471.0], [63.9, 472.0], [64.0, 472.0], [64.1, 475.0], [64.2, 477.0], [64.3, 478.0], [64.4, 479.0], [64.5, 480.0], [64.6, 482.0], [64.7, 484.0], [64.8, 485.0], [64.9, 489.0], [65.0, 490.0], [65.1, 492.0], [65.2, 494.0], [65.3, 495.0], [65.4, 496.0], [65.5, 498.0], [65.6, 498.0], [65.7, 501.0], [65.8, 502.0], [65.9, 503.0], [66.0, 505.0], [66.1, 506.0], [66.2, 507.0], [66.3, 509.0], [66.4, 509.0], [66.5, 511.0], [66.6, 512.0], [66.7, 515.0], [66.8, 515.0], [66.9, 517.0], [67.0, 519.0], [67.1, 521.0], [67.2, 522.0], [67.3, 523.0], [67.4, 525.0], [67.5, 528.0], [67.6, 529.0], [67.7, 530.0], [67.8, 531.0], [67.9, 532.0], [68.0, 536.0], [68.1, 536.0], [68.2, 538.0], [68.3, 543.0], [68.4, 544.0], [68.5, 545.0], [68.6, 547.0], [68.7, 549.0], [68.8, 551.0], [68.9, 552.0], [69.0, 554.0], [69.1, 556.0], [69.2, 557.0], [69.3, 558.0], [69.4, 560.0], [69.5, 564.0], [69.6, 564.0], [69.7, 566.0], [69.8, 567.0], [69.9, 569.0], [70.0, 570.0], [70.1, 571.0], [70.2, 575.0], [70.3, 577.0], [70.4, 580.0], [70.5, 581.0], [70.6, 582.0], [70.7, 586.0], [70.8, 588.0], [70.9, 590.0], [71.0, 592.0], [71.1, 594.0], [71.2, 597.0], [71.3, 598.0], [71.4, 599.0], [71.5, 601.0], [71.6, 602.0], [71.7, 604.0], [71.8, 605.0], [71.9, 607.0], [72.0, 608.0], [72.1, 610.0], [72.2, 611.0], [72.3, 613.0], [72.4, 614.0], [72.5, 617.0], [72.6, 620.0], [72.7, 623.0], [72.8, 624.0], [72.9, 625.0], [73.0, 627.0], [73.1, 628.0], [73.2, 630.0], [73.3, 632.0], [73.4, 636.0], [73.5, 639.0], [73.6, 642.0], [73.7, 644.0], [73.8, 646.0], [73.9, 648.0], [74.0, 650.0], [74.1, 652.0], [74.2, 654.0], [74.3, 657.0], [74.4, 658.0], [74.5, 662.0], [74.6, 664.0], [74.7, 666.0], [74.8, 669.0], [74.9, 671.0], [75.0, 672.0], [75.1, 674.0], [75.2, 676.0], [75.3, 678.0], [75.4, 680.0], [75.5, 682.0], [75.6, 686.0], [75.7, 689.0], [75.8, 690.0], [75.9, 692.0], [76.0, 695.0], [76.1, 696.0], [76.2, 698.0], [76.3, 699.0], [76.4, 702.0], [76.5, 706.0], [76.6, 708.0], [76.7, 709.0], [76.8, 711.0], [76.9, 712.0], [77.0, 715.0], [77.1, 717.0], [77.2, 719.0], [77.3, 720.0], [77.4, 722.0], [77.5, 724.0], [77.6, 727.0], [77.7, 728.0], [77.8, 731.0], [77.9, 737.0], [78.0, 740.0], [78.1, 741.0], [78.2, 743.0], [78.3, 743.0], [78.4, 745.0], [78.5, 747.0], [78.6, 749.0], [78.7, 752.0], [78.8, 754.0], [78.9, 759.0], [79.0, 763.0], [79.1, 767.0], [79.2, 768.0], [79.3, 772.0], [79.4, 774.0], [79.5, 775.0], [79.6, 777.0], [79.7, 779.0], [79.8, 783.0], [79.9, 786.0], [80.0, 789.0], [80.1, 791.0], [80.2, 793.0], [80.3, 797.0], [80.4, 798.0], [80.5, 800.0], [80.6, 804.0], [80.7, 805.0], [80.8, 806.0], [80.9, 808.0], [81.0, 811.0], [81.1, 814.0], [81.2, 816.0], [81.3, 818.0], [81.4, 819.0], [81.5, 821.0], [81.6, 824.0], [81.7, 826.0], [81.8, 828.0], [81.9, 829.0], [82.0, 832.0], [82.1, 835.0], [82.2, 836.0], [82.3, 839.0], [82.4, 842.0], [82.5, 845.0], [82.6, 846.0], [82.7, 849.0], [82.8, 850.0], [82.9, 853.0], [83.0, 854.0], [83.1, 856.0], [83.2, 860.0], [83.3, 863.0], [83.4, 865.0], [83.5, 867.0], [83.6, 868.0], [83.7, 870.0], [83.8, 872.0], [83.9, 875.0], [84.0, 877.0], [84.1, 879.0], [84.2, 882.0], [84.3, 883.0], [84.4, 884.0], [84.5, 886.0], [84.6, 888.0], [84.7, 893.0], [84.8, 897.0], [84.9, 900.0], [85.0, 903.0], [85.1, 907.0], [85.2, 912.0], [85.3, 915.0], [85.4, 919.0], [85.5, 925.0], [85.6, 929.0], [85.7, 932.0], [85.8, 937.0], [85.9, 940.0], [86.0, 943.0], [86.1, 945.0], [86.2, 949.0], [86.3, 954.0], [86.4, 957.0], [86.5, 957.0], [86.6, 960.0], [86.7, 965.0], [86.8, 967.0], [86.9, 970.0], [87.0, 974.0], [87.1, 976.0], [87.2, 978.0], [87.3, 981.0], [87.4, 992.0], [87.5, 997.0], [87.6, 1000.0], [87.7, 1001.0], [87.8, 1005.0], [87.9, 1010.0], [88.0, 1015.0], [88.1, 1018.0], [88.2, 1023.0], [88.3, 1027.0], [88.4, 1030.0], [88.5, 1040.0], [88.6, 1046.0], [88.7, 1052.0], [88.8, 1055.0], [88.9, 1057.0], [89.0, 1064.0], [89.1, 1068.0], [89.2, 1076.0], [89.3, 1079.0], [89.4, 1086.0], [89.5, 1090.0], [89.6, 1091.0], [89.7, 1100.0], [89.8, 1104.0], [89.9, 1107.0], [90.0, 1110.0], [90.1, 1121.0], [90.2, 1123.0], [90.3, 1126.0], [90.4, 1132.0], [90.5, 1140.0], [90.6, 1143.0], [90.7, 1149.0], [90.8, 1152.0], [90.9, 1157.0], [91.0, 1161.0], [91.1, 1162.0], [91.2, 1168.0], [91.3, 1171.0], [91.4, 1180.0], [91.5, 1188.0], [91.6, 1197.0], [91.7, 1201.0], [91.8, 1206.0], [91.9, 1209.0], [92.0, 1215.0], [92.1, 1221.0], [92.2, 1227.0], [92.3, 1232.0], [92.4, 1237.0], [92.5, 1243.0], [92.6, 1248.0], [92.7, 1253.0], [92.8, 1258.0], [92.9, 1270.0], [93.0, 1279.0], [93.1, 1281.0], [93.2, 1283.0], [93.3, 1294.0], [93.4, 1313.0], [93.5, 1323.0], [93.6, 1331.0], [93.7, 1340.0], [93.8, 1343.0], [93.9, 1352.0], [94.0, 1363.0], [94.1, 1374.0], [94.2, 1382.0], [94.3, 1389.0], [94.4, 1402.0], [94.5, 1404.0], [94.6, 1416.0], [94.7, 1427.0], [94.8, 1437.0], [94.9, 1439.0], [95.0, 1447.0], [95.1, 1453.0], [95.2, 1459.0], [95.3, 1467.0], [95.4, 1475.0], [95.5, 1494.0], [95.6, 1502.0], [95.7, 1516.0], [95.8, 1527.0], [95.9, 1541.0], [96.0, 1548.0], [96.1, 1558.0], [96.2, 1570.0], [96.3, 1584.0], [96.4, 1596.0], [96.5, 1613.0], [96.6, 1631.0], [96.7, 1641.0], [96.8, 1650.0], [96.9, 1673.0], [97.0, 1681.0], [97.1, 1695.0], [97.2, 1710.0], [97.3, 1733.0], [97.4, 1753.0], [97.5, 1784.0], [97.6, 1802.0], [97.7, 1844.0], [97.8, 1860.0], [97.9, 1900.0], [98.0, 1914.0], [98.1, 1942.0], [98.2, 1957.0], [98.3, 1977.0], [98.4, 1983.0], [98.5, 2002.0], [98.6, 2038.0], [98.7, 2069.0], [98.8, 2113.0], [98.9, 2157.0], [99.0, 2213.0], [99.1, 2266.0], [99.2, 2315.0], [99.3, 2357.0], [99.4, 2440.0], [99.5, 2540.0], [99.6, 2605.0], [99.7, 2845.0], [99.8, 3186.0], [99.9, 3938.0], [100.0, 4709.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1397.0, "series": [{"data": [[0.0, 1397.0], [600.0, 256.0], [700.0, 219.0], [800.0, 233.0], [900.0, 140.0], [1000.0, 113.0], [1100.0, 103.0], [1200.0, 87.0], [1300.0, 57.0], [1400.0, 62.0], [1500.0, 46.0], [100.0, 861.0], [1600.0, 35.0], [1700.0, 24.0], [1800.0, 17.0], [1900.0, 31.0], [2000.0, 14.0], [2100.0, 12.0], [2200.0, 10.0], [2300.0, 10.0], [2400.0, 6.0], [2500.0, 5.0], [2600.0, 5.0], [2700.0, 2.0], [2800.0, 3.0], [2900.0, 2.0], [3100.0, 1.0], [200.0, 470.0], [3200.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 4.0], [4300.0, 1.0], [4200.0, 1.0], [300.0, 370.0], [4700.0, 1.0], [400.0, 355.0], [500.0, 306.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 233.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3456.0, "series": [{"data": [[0.0, 3456.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1573.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 233.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.76678445229682, "minX": 1.60439676E12, "maxY": 12.0, "series": [{"data": [[1.60439694E12, 12.0], [1.60439688E12, 12.0], [1.604397E12, 11.76678445229682], [1.60439676E12, 11.820895522388062], [1.60439682E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.604397E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 455.743462492842, "minX": 1.0, "maxY": 4709.0, "series": [{"data": [[4.0, 2025.5], [8.0, 750.0], [2.0, 3772.0], [1.0, 4709.0], [9.0, 1429.0], [5.0, 2074.5], [10.0, 597.3333333333333], [11.0, 759.6666666666667], [6.0, 1524.0], [12.0, 455.743462492842], [3.0, 4284.0], [7.0, 2041.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.978335233751443, 461.2537058152805]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2399.983333333333, "minX": 1.60439676E12, "maxY": 1535795.3833333333, "series": [{"data": [[1.60439694E12, 1535795.3833333333], [1.60439688E12, 949263.2166666667], [1.604397E12, 147566.26666666666], [1.60439676E12, 97418.78333333334], [1.60439682E12, 1520889.3833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60439694E12, 12371.15], [1.60439688E12, 17471.016666666666], [1.604397E12, 2564.35], [1.60439676E12, 2399.983333333333], [1.60439682E12, 10684.45]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.604397E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 352.14327772325845, "minX": 1.60439676E12, "maxY": 576.6826923076919, "series": [{"data": [[1.60439694E12, 505.4322807017546], [1.60439688E12, 352.14327772325845], [1.604397E12, 564.1024734982332], [1.60439676E12, 409.9514925373136], [1.60439682E12, 576.6826923076919]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.604397E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 351.84985279685975, "minX": 1.60439676E12, "maxY": 575.9983974358977, "series": [{"data": [[1.60439694E12, 504.9010526315792], [1.60439688E12, 351.84985279685975], [1.604397E12, 563.8162544169612], [1.60439676E12, 409.6716417910447], [1.60439682E12, 575.9983974358977]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.604397E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007067137809187278, "minX": 1.60439676E12, "maxY": 0.4776119402985074, "series": [{"data": [[1.60439694E12, 0.012631578947368442], [1.60439688E12, 0.00981354268891069], [1.604397E12, 0.007067137809187278], [1.60439676E12, 0.4776119402985074], [1.60439682E12, 0.01041666666666668]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.604397E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 33.0, "minX": 1.60439676E12, "maxY": 4709.0, "series": [{"data": [[1.60439694E12, 2889.0], [1.60439688E12, 2707.0], [1.604397E12, 4709.0], [1.60439676E12, 1701.0], [1.60439682E12, 3186.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60439694E12, 41.0], [1.60439688E12, 41.0], [1.604397E12, 39.0], [1.60439676E12, 74.8419998717308], [1.60439682E12, 43.24099970221519]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60439694E12, 42.0], [1.60439688E12, 41.0], [1.604397E12, 39.0], [1.60439676E12, 75.32620005130768], [1.60439682E12, 44.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60439694E12, 41.54699983000755], [1.60439688E12, 41.0], [1.604397E12, 39.0], [1.60439676E12, 75.11099993586541], [1.60439682E12, 43.8654998511076]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60439694E12, 34.0], [1.60439688E12, 33.0], [1.604397E12, 39.0], [1.60439676E12, 66.0], [1.60439682E12, 35.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60439694E12, 336.0], [1.60439688E12, 193.0], [1.604397E12, 162.0], [1.60439676E12, 172.0], [1.60439682E12, 459.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.604397E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 65.0, "minX": 1.0, "maxY": 4709.0, "series": [{"data": [[2.0, 3957.0], [3.0, 2107.0], [4.0, 1641.5], [5.0, 1796.0], [6.0, 1425.5], [7.0, 1624.5], [9.0, 1122.0], [10.0, 944.5], [11.0, 919.5], [12.0, 943.0], [13.0, 909.0], [14.0, 820.0], [15.0, 616.0], [16.0, 678.5], [17.0, 519.0], [18.0, 618.5], [19.0, 466.0], [20.0, 582.0], [21.0, 463.5], [22.0, 489.0], [23.0, 379.5], [24.0, 108.5], [25.0, 420.5], [26.0, 397.5], [27.0, 184.0], [28.0, 342.0], [29.0, 395.0], [30.0, 259.5], [31.0, 416.0], [32.0, 202.5], [33.0, 136.0], [35.0, 313.5], [34.0, 133.0], [37.0, 291.0], [38.0, 174.5], [39.0, 302.0], [40.0, 143.0], [41.0, 250.5], [43.0, 126.0], [42.0, 105.0], [45.0, 108.5], [44.0, 104.5], [46.0, 164.5], [47.0, 183.0], [49.0, 171.0], [53.0, 123.5], [52.0, 67.5], [54.0, 183.0], [55.0, 254.0], [56.0, 231.0], [59.0, 111.0], [61.0, 95.0], [60.0, 110.0], [62.0, 207.0], [64.0, 125.5], [66.0, 112.5], [69.0, 70.0], [70.0, 129.0], [71.0, 65.0], [81.0, 90.0], [1.0, 4709.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 81.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 65.0, "minX": 1.0, "maxY": 4709.0, "series": [{"data": [[2.0, 3956.0], [3.0, 2107.0], [4.0, 1641.5], [5.0, 1793.0], [6.0, 1425.0], [7.0, 1623.5], [9.0, 1121.0], [10.0, 944.5], [11.0, 916.5], [12.0, 942.0], [13.0, 909.0], [14.0, 819.5], [15.0, 615.5], [16.0, 677.5], [17.0, 519.0], [18.0, 617.5], [19.0, 465.0], [20.0, 582.0], [21.0, 463.0], [22.0, 488.5], [23.0, 379.5], [24.0, 108.5], [25.0, 420.5], [26.0, 396.5], [27.0, 183.0], [28.0, 341.5], [29.0, 395.0], [30.0, 259.0], [31.0, 416.0], [32.0, 202.5], [33.0, 136.0], [35.0, 313.0], [34.0, 133.0], [37.0, 291.0], [38.0, 174.5], [39.0, 301.0], [40.0, 143.0], [41.0, 250.5], [43.0, 126.0], [42.0, 105.0], [45.0, 108.5], [44.0, 104.5], [46.0, 164.5], [47.0, 183.0], [49.0, 171.0], [53.0, 123.5], [52.0, 67.5], [54.0, 182.5], [55.0, 254.0], [56.0, 231.0], [59.0, 111.0], [61.0, 94.0], [60.0, 110.0], [62.0, 207.0], [64.0, 125.5], [66.0, 112.5], [69.0, 70.0], [70.0, 129.0], [71.0, 65.0], [81.0, 90.0], [1.0, 4709.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 81.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.516666666666667, "minX": 1.60439676E12, "maxY": 33.96666666666667, "series": [{"data": [[1.60439694E12, 23.75], [1.60439688E12, 33.96666666666667], [1.604397E12, 4.516666666666667], [1.60439676E12, 4.666666666666667], [1.60439682E12, 20.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.604397E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.466666666666667, "minX": 1.60439676E12, "maxY": 33.96666666666667, "series": [{"data": [[1.60439694E12, 23.75], [1.60439688E12, 33.96666666666667], [1.604397E12, 4.716666666666667], [1.60439676E12, 4.466666666666667], [1.60439682E12, 20.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.604397E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.466666666666667, "minX": 1.60439676E12, "maxY": 33.96666666666667, "series": [{"data": [[1.60439694E12, 23.75], [1.60439688E12, 33.96666666666667], [1.604397E12, 4.716666666666667], [1.60439676E12, 4.466666666666667], [1.60439682E12, 20.8]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.604397E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.466666666666667, "minX": 1.60439676E12, "maxY": 33.96666666666667, "series": [{"data": [[1.60439694E12, 23.75], [1.60439688E12, 33.96666666666667], [1.604397E12, 4.716666666666667], [1.60439676E12, 4.466666666666667], [1.60439682E12, 20.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.604397E12, "title": "Total Transactions Per Second"}},
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

