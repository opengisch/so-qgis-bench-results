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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 2959.0, "series": [{"data": [[0.0, 29.0], [0.1, 31.0], [0.2, 32.0], [0.3, 33.0], [0.4, 34.0], [0.5, 34.0], [0.6, 35.0], [0.7, 35.0], [0.8, 36.0], [0.9, 36.0], [1.0, 36.0], [1.1, 37.0], [1.2, 37.0], [1.3, 37.0], [1.4, 38.0], [1.5, 38.0], [1.6, 38.0], [1.7, 39.0], [1.8, 39.0], [1.9, 39.0], [2.0, 40.0], [2.1, 40.0], [2.2, 40.0], [2.3, 41.0], [2.4, 41.0], [2.5, 41.0], [2.6, 41.0], [2.7, 42.0], [2.8, 42.0], [2.9, 43.0], [3.0, 43.0], [3.1, 43.0], [3.2, 43.0], [3.3, 44.0], [3.4, 44.0], [3.5, 44.0], [3.6, 44.0], [3.7, 45.0], [3.8, 45.0], [3.9, 45.0], [4.0, 45.0], [4.1, 46.0], [4.2, 46.0], [4.3, 47.0], [4.4, 47.0], [4.5, 48.0], [4.6, 48.0], [4.7, 48.0], [4.8, 49.0], [4.9, 49.0], [5.0, 49.0], [5.1, 50.0], [5.2, 51.0], [5.3, 51.0], [5.4, 52.0], [5.5, 52.0], [5.6, 53.0], [5.7, 53.0], [5.8, 54.0], [5.9, 54.0], [6.0, 55.0], [6.1, 55.0], [6.2, 56.0], [6.3, 56.0], [6.4, 57.0], [6.5, 57.0], [6.6, 57.0], [6.7, 58.0], [6.8, 58.0], [6.9, 58.0], [7.0, 59.0], [7.1, 59.0], [7.2, 60.0], [7.3, 60.0], [7.4, 60.0], [7.5, 61.0], [7.6, 61.0], [7.7, 62.0], [7.8, 62.0], [7.9, 62.0], [8.0, 63.0], [8.1, 63.0], [8.2, 63.0], [8.3, 63.0], [8.4, 63.0], [8.5, 64.0], [8.6, 64.0], [8.7, 64.0], [8.8, 64.0], [8.9, 64.0], [9.0, 65.0], [9.1, 65.0], [9.2, 65.0], [9.3, 65.0], [9.4, 65.0], [9.5, 66.0], [9.6, 66.0], [9.7, 66.0], [9.8, 66.0], [9.9, 66.0], [10.0, 67.0], [10.1, 67.0], [10.2, 67.0], [10.3, 67.0], [10.4, 68.0], [10.5, 68.0], [10.6, 68.0], [10.7, 68.0], [10.8, 68.0], [10.9, 68.0], [11.0, 68.0], [11.1, 69.0], [11.2, 69.0], [11.3, 69.0], [11.4, 69.0], [11.5, 69.0], [11.6, 69.0], [11.7, 70.0], [11.8, 70.0], [11.9, 70.0], [12.0, 70.0], [12.1, 70.0], [12.2, 70.0], [12.3, 70.0], [12.4, 70.0], [12.5, 71.0], [12.6, 71.0], [12.7, 71.0], [12.8, 71.0], [12.9, 71.0], [13.0, 71.0], [13.1, 71.0], [13.2, 71.0], [13.3, 72.0], [13.4, 72.0], [13.5, 72.0], [13.6, 72.0], [13.7, 73.0], [13.8, 73.0], [13.9, 73.0], [14.0, 73.0], [14.1, 73.0], [14.2, 73.0], [14.3, 73.0], [14.4, 74.0], [14.5, 74.0], [14.6, 74.0], [14.7, 74.0], [14.8, 74.0], [14.9, 74.0], [15.0, 74.0], [15.1, 74.0], [15.2, 74.0], [15.3, 75.0], [15.4, 75.0], [15.5, 75.0], [15.6, 75.0], [15.7, 75.0], [15.8, 75.0], [15.9, 75.0], [16.0, 76.0], [16.1, 76.0], [16.2, 76.0], [16.3, 76.0], [16.4, 76.0], [16.5, 76.0], [16.6, 76.0], [16.7, 76.0], [16.8, 77.0], [16.9, 77.0], [17.0, 77.0], [17.1, 77.0], [17.2, 77.0], [17.3, 77.0], [17.4, 78.0], [17.5, 78.0], [17.6, 78.0], [17.7, 78.0], [17.8, 78.0], [17.9, 78.0], [18.0, 78.0], [18.1, 78.0], [18.2, 79.0], [18.3, 79.0], [18.4, 79.0], [18.5, 79.0], [18.6, 79.0], [18.7, 79.0], [18.8, 80.0], [18.9, 80.0], [19.0, 80.0], [19.1, 80.0], [19.2, 80.0], [19.3, 80.0], [19.4, 80.0], [19.5, 80.0], [19.6, 81.0], [19.7, 81.0], [19.8, 81.0], [19.9, 81.0], [20.0, 81.0], [20.1, 81.0], [20.2, 82.0], [20.3, 82.0], [20.4, 82.0], [20.5, 82.0], [20.6, 82.0], [20.7, 82.0], [20.8, 83.0], [20.9, 83.0], [21.0, 83.0], [21.1, 83.0], [21.2, 83.0], [21.3, 83.0], [21.4, 84.0], [21.5, 84.0], [21.6, 84.0], [21.7, 85.0], [21.8, 85.0], [21.9, 85.0], [22.0, 85.0], [22.1, 85.0], [22.2, 86.0], [22.3, 86.0], [22.4, 86.0], [22.5, 87.0], [22.6, 87.0], [22.7, 87.0], [22.8, 88.0], [22.9, 88.0], [23.0, 88.0], [23.1, 88.0], [23.2, 88.0], [23.3, 88.0], [23.4, 89.0], [23.5, 89.0], [23.6, 89.0], [23.7, 89.0], [23.8, 90.0], [23.9, 90.0], [24.0, 90.0], [24.1, 90.0], [24.2, 91.0], [24.3, 91.0], [24.4, 91.0], [24.5, 91.0], [24.6, 92.0], [24.7, 92.0], [24.8, 92.0], [24.9, 93.0], [25.0, 93.0], [25.1, 93.0], [25.2, 93.0], [25.3, 94.0], [25.4, 94.0], [25.5, 94.0], [25.6, 94.0], [25.7, 94.0], [25.8, 95.0], [25.9, 95.0], [26.0, 95.0], [26.1, 95.0], [26.2, 96.0], [26.3, 96.0], [26.4, 96.0], [26.5, 97.0], [26.6, 97.0], [26.7, 97.0], [26.8, 98.0], [26.9, 98.0], [27.0, 98.0], [27.1, 98.0], [27.2, 98.0], [27.3, 99.0], [27.4, 99.0], [27.5, 99.0], [27.6, 99.0], [27.7, 100.0], [27.8, 100.0], [27.9, 100.0], [28.0, 101.0], [28.1, 101.0], [28.2, 101.0], [28.3, 102.0], [28.4, 103.0], [28.5, 103.0], [28.6, 103.0], [28.7, 104.0], [28.8, 104.0], [28.9, 104.0], [29.0, 105.0], [29.1, 105.0], [29.2, 105.0], [29.3, 106.0], [29.4, 106.0], [29.5, 106.0], [29.6, 107.0], [29.7, 107.0], [29.8, 107.0], [29.9, 108.0], [30.0, 108.0], [30.1, 108.0], [30.2, 109.0], [30.3, 109.0], [30.4, 110.0], [30.5, 110.0], [30.6, 110.0], [30.7, 110.0], [30.8, 111.0], [30.9, 111.0], [31.0, 112.0], [31.1, 112.0], [31.2, 112.0], [31.3, 113.0], [31.4, 113.0], [31.5, 114.0], [31.6, 115.0], [31.7, 115.0], [31.8, 116.0], [31.9, 116.0], [32.0, 117.0], [32.1, 118.0], [32.2, 118.0], [32.3, 119.0], [32.4, 120.0], [32.5, 121.0], [32.6, 121.0], [32.7, 121.0], [32.8, 123.0], [32.9, 124.0], [33.0, 124.0], [33.1, 125.0], [33.2, 126.0], [33.3, 126.0], [33.4, 127.0], [33.5, 127.0], [33.6, 128.0], [33.7, 129.0], [33.8, 130.0], [33.9, 131.0], [34.0, 131.0], [34.1, 132.0], [34.2, 133.0], [34.3, 134.0], [34.4, 134.0], [34.5, 134.0], [34.6, 135.0], [34.7, 135.0], [34.8, 136.0], [34.9, 136.0], [35.0, 137.0], [35.1, 138.0], [35.2, 138.0], [35.3, 138.0], [35.4, 139.0], [35.5, 139.0], [35.6, 140.0], [35.7, 141.0], [35.8, 141.0], [35.9, 141.0], [36.0, 142.0], [36.1, 142.0], [36.2, 143.0], [36.3, 143.0], [36.4, 144.0], [36.5, 144.0], [36.6, 144.0], [36.7, 145.0], [36.8, 145.0], [36.9, 146.0], [37.0, 146.0], [37.1, 147.0], [37.2, 148.0], [37.3, 148.0], [37.4, 149.0], [37.5, 149.0], [37.6, 150.0], [37.7, 150.0], [37.8, 151.0], [37.9, 151.0], [38.0, 152.0], [38.1, 152.0], [38.2, 153.0], [38.3, 153.0], [38.4, 154.0], [38.5, 155.0], [38.6, 156.0], [38.7, 157.0], [38.8, 158.0], [38.9, 159.0], [39.0, 159.0], [39.1, 160.0], [39.2, 160.0], [39.3, 160.0], [39.4, 162.0], [39.5, 162.0], [39.6, 163.0], [39.7, 163.0], [39.8, 164.0], [39.9, 165.0], [40.0, 165.0], [40.1, 166.0], [40.2, 166.0], [40.3, 167.0], [40.4, 168.0], [40.5, 170.0], [40.6, 172.0], [40.7, 172.0], [40.8, 172.0], [40.9, 174.0], [41.0, 174.0], [41.1, 175.0], [41.2, 176.0], [41.3, 178.0], [41.4, 179.0], [41.5, 181.0], [41.6, 182.0], [41.7, 183.0], [41.8, 185.0], [41.9, 185.0], [42.0, 187.0], [42.1, 188.0], [42.2, 188.0], [42.3, 189.0], [42.4, 190.0], [42.5, 191.0], [42.6, 192.0], [42.7, 193.0], [42.8, 195.0], [42.9, 195.0], [43.0, 196.0], [43.1, 197.0], [43.2, 197.0], [43.3, 198.0], [43.4, 200.0], [43.5, 200.0], [43.6, 201.0], [43.7, 202.0], [43.8, 204.0], [43.9, 205.0], [44.0, 206.0], [44.1, 207.0], [44.2, 207.0], [44.3, 208.0], [44.4, 208.0], [44.5, 209.0], [44.6, 210.0], [44.7, 212.0], [44.8, 213.0], [44.9, 214.0], [45.0, 216.0], [45.1, 217.0], [45.2, 219.0], [45.3, 220.0], [45.4, 221.0], [45.5, 222.0], [45.6, 224.0], [45.7, 225.0], [45.8, 227.0], [45.9, 228.0], [46.0, 229.0], [46.1, 230.0], [46.2, 230.0], [46.3, 231.0], [46.4, 233.0], [46.5, 234.0], [46.6, 235.0], [46.7, 236.0], [46.8, 236.0], [46.9, 237.0], [47.0, 238.0], [47.1, 239.0], [47.2, 241.0], [47.3, 242.0], [47.4, 243.0], [47.5, 243.0], [47.6, 244.0], [47.7, 245.0], [47.8, 246.0], [47.9, 247.0], [48.0, 248.0], [48.1, 249.0], [48.2, 249.0], [48.3, 250.0], [48.4, 250.0], [48.5, 251.0], [48.6, 252.0], [48.7, 253.0], [48.8, 255.0], [48.9, 257.0], [49.0, 258.0], [49.1, 258.0], [49.2, 259.0], [49.3, 260.0], [49.4, 261.0], [49.5, 263.0], [49.6, 263.0], [49.7, 264.0], [49.8, 265.0], [49.9, 266.0], [50.0, 267.0], [50.1, 268.0], [50.2, 270.0], [50.3, 271.0], [50.4, 271.0], [50.5, 271.0], [50.6, 272.0], [50.7, 273.0], [50.8, 273.0], [50.9, 275.0], [51.0, 276.0], [51.1, 277.0], [51.2, 278.0], [51.3, 279.0], [51.4, 280.0], [51.5, 281.0], [51.6, 282.0], [51.7, 283.0], [51.8, 283.0], [51.9, 284.0], [52.0, 285.0], [52.1, 286.0], [52.2, 287.0], [52.3, 289.0], [52.4, 291.0], [52.5, 292.0], [52.6, 293.0], [52.7, 294.0], [52.8, 295.0], [52.9, 297.0], [53.0, 297.0], [53.1, 299.0], [53.2, 300.0], [53.3, 303.0], [53.4, 304.0], [53.5, 305.0], [53.6, 306.0], [53.7, 307.0], [53.8, 308.0], [53.9, 310.0], [54.0, 311.0], [54.1, 312.0], [54.2, 313.0], [54.3, 314.0], [54.4, 315.0], [54.5, 317.0], [54.6, 318.0], [54.7, 319.0], [54.8, 320.0], [54.9, 321.0], [55.0, 322.0], [55.1, 323.0], [55.2, 324.0], [55.3, 325.0], [55.4, 327.0], [55.5, 327.0], [55.6, 329.0], [55.7, 330.0], [55.8, 331.0], [55.9, 332.0], [56.0, 332.0], [56.1, 333.0], [56.2, 334.0], [56.3, 335.0], [56.4, 336.0], [56.5, 337.0], [56.6, 338.0], [56.7, 339.0], [56.8, 341.0], [56.9, 342.0], [57.0, 343.0], [57.1, 344.0], [57.2, 345.0], [57.3, 346.0], [57.4, 348.0], [57.5, 349.0], [57.6, 351.0], [57.7, 352.0], [57.8, 354.0], [57.9, 355.0], [58.0, 357.0], [58.1, 358.0], [58.2, 359.0], [58.3, 360.0], [58.4, 361.0], [58.5, 362.0], [58.6, 363.0], [58.7, 363.0], [58.8, 364.0], [58.9, 366.0], [59.0, 367.0], [59.1, 367.0], [59.2, 369.0], [59.3, 371.0], [59.4, 372.0], [59.5, 373.0], [59.6, 375.0], [59.7, 375.0], [59.8, 376.0], [59.9, 378.0], [60.0, 379.0], [60.1, 380.0], [60.2, 381.0], [60.3, 383.0], [60.4, 384.0], [60.5, 385.0], [60.6, 387.0], [60.7, 388.0], [60.8, 390.0], [60.9, 391.0], [61.0, 393.0], [61.1, 394.0], [61.2, 395.0], [61.3, 396.0], [61.4, 398.0], [61.5, 399.0], [61.6, 400.0], [61.7, 402.0], [61.8, 405.0], [61.9, 407.0], [62.0, 409.0], [62.1, 410.0], [62.2, 411.0], [62.3, 413.0], [62.4, 415.0], [62.5, 415.0], [62.6, 417.0], [62.7, 417.0], [62.8, 419.0], [62.9, 420.0], [63.0, 421.0], [63.1, 422.0], [63.2, 423.0], [63.3, 425.0], [63.4, 426.0], [63.5, 427.0], [63.6, 428.0], [63.7, 429.0], [63.8, 430.0], [63.9, 431.0], [64.0, 433.0], [64.1, 433.0], [64.2, 436.0], [64.3, 437.0], [64.4, 438.0], [64.5, 440.0], [64.6, 441.0], [64.7, 442.0], [64.8, 443.0], [64.9, 444.0], [65.0, 446.0], [65.1, 447.0], [65.2, 448.0], [65.3, 449.0], [65.4, 450.0], [65.5, 453.0], [65.6, 453.0], [65.7, 455.0], [65.8, 455.0], [65.9, 457.0], [66.0, 458.0], [66.1, 458.0], [66.2, 460.0], [66.3, 461.0], [66.4, 463.0], [66.5, 464.0], [66.6, 465.0], [66.7, 467.0], [66.8, 469.0], [66.9, 470.0], [67.0, 472.0], [67.1, 473.0], [67.2, 474.0], [67.3, 476.0], [67.4, 477.0], [67.5, 479.0], [67.6, 482.0], [67.7, 484.0], [67.8, 485.0], [67.9, 486.0], [68.0, 487.0], [68.1, 489.0], [68.2, 490.0], [68.3, 490.0], [68.4, 493.0], [68.5, 494.0], [68.6, 495.0], [68.7, 495.0], [68.8, 496.0], [68.9, 497.0], [69.0, 498.0], [69.1, 501.0], [69.2, 502.0], [69.3, 504.0], [69.4, 505.0], [69.5, 506.0], [69.6, 507.0], [69.7, 508.0], [69.8, 508.0], [69.9, 509.0], [70.0, 510.0], [70.1, 511.0], [70.2, 513.0], [70.3, 515.0], [70.4, 517.0], [70.5, 519.0], [70.6, 522.0], [70.7, 524.0], [70.8, 527.0], [70.9, 529.0], [71.0, 531.0], [71.1, 532.0], [71.2, 533.0], [71.3, 534.0], [71.4, 537.0], [71.5, 539.0], [71.6, 540.0], [71.7, 542.0], [71.8, 544.0], [71.9, 545.0], [72.0, 546.0], [72.1, 547.0], [72.2, 548.0], [72.3, 549.0], [72.4, 551.0], [72.5, 552.0], [72.6, 554.0], [72.7, 555.0], [72.8, 557.0], [72.9, 560.0], [73.0, 561.0], [73.1, 561.0], [73.2, 563.0], [73.3, 564.0], [73.4, 567.0], [73.5, 568.0], [73.6, 570.0], [73.7, 571.0], [73.8, 573.0], [73.9, 577.0], [74.0, 578.0], [74.1, 582.0], [74.2, 584.0], [74.3, 587.0], [74.4, 587.0], [74.5, 588.0], [74.6, 589.0], [74.7, 591.0], [74.8, 591.0], [74.9, 594.0], [75.0, 596.0], [75.1, 597.0], [75.2, 598.0], [75.3, 598.0], [75.4, 600.0], [75.5, 603.0], [75.6, 604.0], [75.7, 606.0], [75.8, 609.0], [75.9, 610.0], [76.0, 612.0], [76.1, 614.0], [76.2, 615.0], [76.3, 616.0], [76.4, 620.0], [76.5, 621.0], [76.6, 622.0], [76.7, 624.0], [76.8, 626.0], [76.9, 628.0], [77.0, 630.0], [77.1, 631.0], [77.2, 635.0], [77.3, 636.0], [77.4, 638.0], [77.5, 640.0], [77.6, 643.0], [77.7, 644.0], [77.8, 646.0], [77.9, 649.0], [78.0, 651.0], [78.1, 652.0], [78.2, 654.0], [78.3, 657.0], [78.4, 658.0], [78.5, 659.0], [78.6, 661.0], [78.7, 663.0], [78.8, 664.0], [78.9, 666.0], [79.0, 668.0], [79.1, 670.0], [79.2, 673.0], [79.3, 675.0], [79.4, 678.0], [79.5, 680.0], [79.6, 682.0], [79.7, 683.0], [79.8, 687.0], [79.9, 687.0], [80.0, 689.0], [80.1, 692.0], [80.2, 694.0], [80.3, 696.0], [80.4, 700.0], [80.5, 701.0], [80.6, 703.0], [80.7, 704.0], [80.8, 707.0], [80.9, 709.0], [81.0, 711.0], [81.1, 714.0], [81.2, 716.0], [81.3, 719.0], [81.4, 721.0], [81.5, 722.0], [81.6, 724.0], [81.7, 726.0], [81.8, 727.0], [81.9, 728.0], [82.0, 729.0], [82.1, 730.0], [82.2, 732.0], [82.3, 734.0], [82.4, 736.0], [82.5, 738.0], [82.6, 742.0], [82.7, 743.0], [82.8, 746.0], [82.9, 748.0], [83.0, 749.0], [83.1, 752.0], [83.2, 754.0], [83.3, 755.0], [83.4, 757.0], [83.5, 760.0], [83.6, 761.0], [83.7, 764.0], [83.8, 766.0], [83.9, 767.0], [84.0, 770.0], [84.1, 773.0], [84.2, 779.0], [84.3, 781.0], [84.4, 783.0], [84.5, 785.0], [84.6, 788.0], [84.7, 790.0], [84.8, 792.0], [84.9, 794.0], [85.0, 795.0], [85.1, 798.0], [85.2, 799.0], [85.3, 802.0], [85.4, 805.0], [85.5, 807.0], [85.6, 810.0], [85.7, 814.0], [85.8, 817.0], [85.9, 821.0], [86.0, 826.0], [86.1, 828.0], [86.2, 829.0], [86.3, 833.0], [86.4, 835.0], [86.5, 839.0], [86.6, 843.0], [86.7, 846.0], [86.8, 851.0], [86.9, 853.0], [87.0, 855.0], [87.1, 858.0], [87.2, 859.0], [87.3, 862.0], [87.4, 866.0], [87.5, 871.0], [87.6, 874.0], [87.7, 880.0], [87.8, 884.0], [87.9, 889.0], [88.0, 894.0], [88.1, 898.0], [88.2, 901.0], [88.3, 904.0], [88.4, 905.0], [88.5, 908.0], [88.6, 910.0], [88.7, 914.0], [88.8, 915.0], [88.9, 917.0], [89.0, 922.0], [89.1, 926.0], [89.2, 932.0], [89.3, 935.0], [89.4, 939.0], [89.5, 943.0], [89.6, 946.0], [89.7, 950.0], [89.8, 953.0], [89.9, 955.0], [90.0, 958.0], [90.1, 964.0], [90.2, 966.0], [90.3, 969.0], [90.4, 974.0], [90.5, 978.0], [90.6, 982.0], [90.7, 984.0], [90.8, 991.0], [90.9, 996.0], [91.0, 1001.0], [91.1, 1004.0], [91.2, 1006.0], [91.3, 1007.0], [91.4, 1013.0], [91.5, 1021.0], [91.6, 1026.0], [91.7, 1032.0], [91.8, 1039.0], [91.9, 1045.0], [92.0, 1051.0], [92.1, 1059.0], [92.2, 1062.0], [92.3, 1065.0], [92.4, 1069.0], [92.5, 1074.0], [92.6, 1080.0], [92.7, 1086.0], [92.8, 1096.0], [92.9, 1098.0], [93.0, 1102.0], [93.1, 1106.0], [93.2, 1111.0], [93.3, 1117.0], [93.4, 1118.0], [93.5, 1120.0], [93.6, 1129.0], [93.7, 1134.0], [93.8, 1141.0], [93.9, 1145.0], [94.0, 1150.0], [94.1, 1154.0], [94.2, 1162.0], [94.3, 1164.0], [94.4, 1173.0], [94.5, 1179.0], [94.6, 1182.0], [94.7, 1194.0], [94.8, 1202.0], [94.9, 1208.0], [95.0, 1215.0], [95.1, 1220.0], [95.2, 1229.0], [95.3, 1239.0], [95.4, 1245.0], [95.5, 1248.0], [95.6, 1255.0], [95.7, 1262.0], [95.8, 1278.0], [95.9, 1289.0], [96.0, 1293.0], [96.1, 1302.0], [96.2, 1310.0], [96.3, 1317.0], [96.4, 1325.0], [96.5, 1335.0], [96.6, 1346.0], [96.7, 1362.0], [96.8, 1374.0], [96.9, 1378.0], [97.0, 1390.0], [97.1, 1399.0], [97.2, 1407.0], [97.3, 1419.0], [97.4, 1428.0], [97.5, 1437.0], [97.6, 1451.0], [97.7, 1468.0], [97.8, 1496.0], [97.9, 1511.0], [98.0, 1541.0], [98.1, 1563.0], [98.2, 1574.0], [98.3, 1610.0], [98.4, 1632.0], [98.5, 1645.0], [98.6, 1681.0], [98.7, 1710.0], [98.8, 1736.0], [98.9, 1773.0], [99.0, 1792.0], [99.1, 1824.0], [99.2, 1897.0], [99.3, 1972.0], [99.4, 2106.0], [99.5, 2170.0], [99.6, 2229.0], [99.7, 2321.0], [99.8, 2378.0], [99.9, 2613.0], [100.0, 2959.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1457.0, "series": [{"data": [[0.0, 1457.0], [600.0, 265.0], [700.0, 255.0], [800.0, 156.0], [900.0, 148.0], [1000.0, 103.0], [1100.0, 96.0], [1200.0, 67.0], [1300.0, 58.0], [1400.0, 38.0], [1500.0, 21.0], [100.0, 831.0], [1600.0, 21.0], [1700.0, 19.0], [1800.0, 10.0], [1900.0, 7.0], [2000.0, 3.0], [2100.0, 7.0], [2300.0, 7.0], [2200.0, 8.0], [2400.0, 2.0], [2500.0, 2.0], [2600.0, 2.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 1.0], [200.0, 515.0], [300.0, 441.0], [400.0, 395.0], [500.0, 334.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3641.0, "series": [{"data": [[0.0, 3641.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1517.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 113.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 39.83043478260869, "minX": 1.60189842E12, "maxY": 40.0, "series": [{"data": [[1.60189848E12, 39.83043478260869], [1.60189842E12, 40.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189848E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 399.91725587617185, "minX": 1.0, "maxY": 2378.0, "series": [{"data": [[33.0, 944.0], [32.0, 1106.0], [2.0, 2378.0], [35.0, 965.0], [34.0, 710.0], [37.0, 857.0], [36.0, 863.0], [39.0, 548.0], [38.0, 583.0], [40.0, 399.91725587617185], [3.0, 2320.0], [4.0, 2126.0], [5.0, 2273.0], [6.0, 1972.0], [7.0, 2025.0], [8.0, 1819.0], [9.0, 1504.0], [10.0, 1681.0], [11.0, 1572.0], [12.0, 1551.0], [13.0, 1514.0], [14.0, 1337.0], [15.0, 1292.0], [16.0, 1346.0], [1.0, 2321.0], [17.0, 1201.0], [18.0, 1209.0], [19.0, 1292.0], [20.0, 1098.0], [21.0, 1255.0], [22.0, 1116.0], [23.0, 1194.0], [24.0, 1142.0], [25.0, 1394.0], [26.0, 1399.0], [27.0, 899.0], [28.0, 644.0], [29.0, 1039.0], [30.0, 623.0], [31.0, 884.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.85204855842187, 406.8215098634306]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5750.3, "minX": 1.60189842E12, "maxY": 3865574.7333333334, "series": [{"data": [[1.60189848E12, 3865574.7333333334], [1.60189842E12, 424395.93333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60189848E12, 39829.25], [1.60189842E12, 5750.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189848E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 403.4354347826074, "minX": 1.60189842E12, "maxY": 429.9999999999997, "series": [{"data": [[1.60189848E12, 403.4354347826074], [1.60189842E12, 429.9999999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189848E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 403.09391304347764, "minX": 1.60189842E12, "maxY": 429.67410714285694, "series": [{"data": [[1.60189848E12, 403.09391304347764], [1.60189842E12, 429.67410714285694]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189848E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006086956521739137, "minX": 1.60189842E12, "maxY": 1.001488095238095, "series": [{"data": [[1.60189848E12, 0.006086956521739137], [1.60189842E12, 1.001488095238095]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189848E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60189842E12, "maxY": 2959.0, "series": [{"data": [[1.60189848E12, 2959.0], [1.60189842E12, 1406.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60189848E12, 35.0], [1.60189842E12, 67.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60189848E12, 36.0], [1.60189842E12, 67.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60189848E12, 36.0], [1.60189842E12, 67.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60189848E12, 29.0], [1.60189842E12, 63.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60189848E12, 250.0], [1.60189842E12, 385.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189848E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 76.0, "minX": 5.0, "maxY": 2320.0, "series": [{"data": [[5.0, 2320.0], [11.0, 808.0], [18.0, 1341.5], [23.0, 767.0], [26.0, 944.5], [33.0, 849.0], [40.0, 772.5], [48.0, 1157.0], [53.0, 420.0], [58.0, 698.5], [60.0, 654.5], [61.0, 636.0], [67.0, 680.0], [66.0, 427.5], [70.0, 503.5], [71.0, 588.0], [73.0, 468.0], [78.0, 564.0], [80.0, 504.5], [83.0, 445.0], [82.0, 331.5], [81.0, 474.0], [87.0, 231.5], [84.0, 385.0], [86.0, 412.5], [88.0, 368.0], [89.0, 104.0], [93.0, 442.0], [101.0, 250.0], [100.0, 211.5], [107.0, 156.0], [109.0, 392.0], [112.0, 264.0], [116.0, 317.5], [118.0, 219.5], [123.0, 265.0], [126.0, 101.5], [125.0, 211.0], [134.0, 96.0], [135.0, 227.0], [130.0, 203.5], [131.0, 214.0], [128.0, 236.5], [139.0, 85.0], [138.0, 245.0], [160.0, 110.0], [161.0, 76.0], [176.0, 81.5], [186.0, 163.5], [192.0, 152.5], [209.0, 166.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[209.0, 374.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 209.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 76.0, "minX": 5.0, "maxY": 2320.0, "series": [{"data": [[5.0, 2320.0], [11.0, 808.0], [18.0, 1341.5], [23.0, 767.0], [26.0, 944.0], [33.0, 849.0], [40.0, 772.5], [48.0, 1155.5], [53.0, 417.0], [58.0, 698.5], [60.0, 653.0], [61.0, 636.0], [67.0, 680.0], [66.0, 427.0], [70.0, 503.0], [71.0, 587.0], [73.0, 467.0], [78.0, 563.5], [80.0, 503.0], [83.0, 445.0], [82.0, 330.5], [81.0, 474.0], [87.0, 231.0], [84.0, 385.0], [86.0, 411.5], [88.0, 368.0], [89.0, 104.0], [93.0, 441.0], [101.0, 249.0], [100.0, 211.0], [107.0, 156.0], [109.0, 391.0], [112.0, 264.0], [116.0, 317.5], [118.0, 219.5], [123.0, 265.0], [126.0, 101.5], [125.0, 211.0], [134.0, 96.0], [135.0, 227.0], [130.0, 203.5], [131.0, 214.0], [128.0, 236.0], [139.0, 85.0], [138.0, 245.0], [160.0, 110.0], [161.0, 76.0], [176.0, 81.5], [186.0, 163.0], [192.0, 152.5], [209.0, 166.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[209.0, 374.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 209.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.866666666666667, "minX": 1.60189842E12, "maxY": 76.0, "series": [{"data": [[1.60189848E12, 76.0], [1.60189842E12, 11.866666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189848E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189842E12, "maxY": 76.65, "series": [{"data": [[1.60189848E12, 76.65], [1.60189842E12, 11.2]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60189848E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189848E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189842E12, "maxY": 76.65, "series": [{"data": [[1.60189848E12, 76.65], [1.60189842E12, 11.2]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60189848E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189848E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189842E12, "maxY": 76.65, "series": [{"data": [[1.60189848E12, 76.65], [1.60189842E12, 11.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60189848E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189848E12, "title": "Total Transactions Per Second"}},
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

