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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 3736.0, "series": [{"data": [[0.0, 28.0], [0.1, 31.0], [0.2, 31.0], [0.3, 32.0], [0.4, 33.0], [0.5, 34.0], [0.6, 34.0], [0.7, 35.0], [0.8, 36.0], [0.9, 36.0], [1.0, 37.0], [1.1, 37.0], [1.2, 37.0], [1.3, 38.0], [1.4, 38.0], [1.5, 38.0], [1.6, 38.0], [1.7, 39.0], [1.8, 39.0], [1.9, 39.0], [2.0, 39.0], [2.1, 40.0], [2.2, 40.0], [2.3, 40.0], [2.4, 41.0], [2.5, 41.0], [2.6, 42.0], [2.7, 42.0], [2.8, 42.0], [2.9, 42.0], [3.0, 43.0], [3.1, 43.0], [3.2, 44.0], [3.3, 44.0], [3.4, 45.0], [3.5, 45.0], [3.6, 46.0], [3.7, 46.0], [3.8, 46.0], [3.9, 47.0], [4.0, 47.0], [4.1, 48.0], [4.2, 48.0], [4.3, 49.0], [4.4, 50.0], [4.5, 50.0], [4.6, 51.0], [4.7, 52.0], [4.8, 53.0], [4.9, 53.0], [5.0, 53.0], [5.1, 54.0], [5.2, 54.0], [5.3, 55.0], [5.4, 56.0], [5.5, 56.0], [5.6, 57.0], [5.7, 57.0], [5.8, 57.0], [5.9, 58.0], [6.0, 58.0], [6.1, 58.0], [6.2, 59.0], [6.3, 59.0], [6.4, 59.0], [6.5, 60.0], [6.6, 60.0], [6.7, 61.0], [6.8, 61.0], [6.9, 61.0], [7.0, 62.0], [7.1, 62.0], [7.2, 62.0], [7.3, 63.0], [7.4, 63.0], [7.5, 64.0], [7.6, 64.0], [7.7, 64.0], [7.8, 64.0], [7.9, 65.0], [8.0, 65.0], [8.1, 65.0], [8.2, 65.0], [8.3, 65.0], [8.4, 66.0], [8.5, 66.0], [8.6, 66.0], [8.7, 66.0], [8.8, 67.0], [8.9, 67.0], [9.0, 67.0], [9.1, 67.0], [9.2, 67.0], [9.3, 68.0], [9.4, 68.0], [9.5, 68.0], [9.6, 68.0], [9.7, 68.0], [9.8, 69.0], [9.9, 69.0], [10.0, 69.0], [10.1, 69.0], [10.2, 69.0], [10.3, 69.0], [10.4, 69.0], [10.5, 70.0], [10.6, 70.0], [10.7, 70.0], [10.8, 70.0], [10.9, 70.0], [11.0, 71.0], [11.1, 71.0], [11.2, 71.0], [11.3, 71.0], [11.4, 71.0], [11.5, 72.0], [11.6, 72.0], [11.7, 72.0], [11.8, 72.0], [11.9, 72.0], [12.0, 72.0], [12.1, 72.0], [12.2, 73.0], [12.3, 73.0], [12.4, 73.0], [12.5, 73.0], [12.6, 74.0], [12.7, 74.0], [12.8, 74.0], [12.9, 74.0], [13.0, 74.0], [13.1, 75.0], [13.2, 75.0], [13.3, 75.0], [13.4, 75.0], [13.5, 75.0], [13.6, 75.0], [13.7, 75.0], [13.8, 75.0], [13.9, 76.0], [14.0, 76.0], [14.1, 76.0], [14.2, 76.0], [14.3, 76.0], [14.4, 76.0], [14.5, 77.0], [14.6, 77.0], [14.7, 77.0], [14.8, 77.0], [14.9, 77.0], [15.0, 77.0], [15.1, 77.0], [15.2, 78.0], [15.3, 78.0], [15.4, 78.0], [15.5, 78.0], [15.6, 78.0], [15.7, 78.0], [15.8, 79.0], [15.9, 79.0], [16.0, 79.0], [16.1, 79.0], [16.2, 79.0], [16.3, 79.0], [16.4, 79.0], [16.5, 80.0], [16.6, 80.0], [16.7, 80.0], [16.8, 80.0], [16.9, 80.0], [17.0, 80.0], [17.1, 80.0], [17.2, 80.0], [17.3, 81.0], [17.4, 81.0], [17.5, 81.0], [17.6, 81.0], [17.7, 81.0], [17.8, 82.0], [17.9, 82.0], [18.0, 82.0], [18.1, 82.0], [18.2, 82.0], [18.3, 82.0], [18.4, 83.0], [18.5, 83.0], [18.6, 83.0], [18.7, 83.0], [18.8, 84.0], [18.9, 84.0], [19.0, 84.0], [19.1, 84.0], [19.2, 84.0], [19.3, 85.0], [19.4, 85.0], [19.5, 85.0], [19.6, 85.0], [19.7, 86.0], [19.8, 86.0], [19.9, 86.0], [20.0, 86.0], [20.1, 86.0], [20.2, 87.0], [20.3, 87.0], [20.4, 87.0], [20.5, 87.0], [20.6, 88.0], [20.7, 88.0], [20.8, 88.0], [20.9, 89.0], [21.0, 89.0], [21.1, 89.0], [21.2, 89.0], [21.3, 90.0], [21.4, 90.0], [21.5, 90.0], [21.6, 90.0], [21.7, 91.0], [21.8, 91.0], [21.9, 91.0], [22.0, 91.0], [22.1, 92.0], [22.2, 92.0], [22.3, 92.0], [22.4, 92.0], [22.5, 93.0], [22.6, 93.0], [22.7, 93.0], [22.8, 93.0], [22.9, 93.0], [23.0, 94.0], [23.1, 94.0], [23.2, 94.0], [23.3, 94.0], [23.4, 95.0], [23.5, 95.0], [23.6, 95.0], [23.7, 95.0], [23.8, 95.0], [23.9, 96.0], [24.0, 96.0], [24.1, 96.0], [24.2, 96.0], [24.3, 96.0], [24.4, 96.0], [24.5, 97.0], [24.6, 97.0], [24.7, 97.0], [24.8, 97.0], [24.9, 97.0], [25.0, 98.0], [25.1, 98.0], [25.2, 98.0], [25.3, 98.0], [25.4, 99.0], [25.5, 99.0], [25.6, 99.0], [25.7, 99.0], [25.8, 100.0], [25.9, 100.0], [26.0, 100.0], [26.1, 100.0], [26.2, 101.0], [26.3, 101.0], [26.4, 101.0], [26.5, 102.0], [26.6, 102.0], [26.7, 102.0], [26.8, 102.0], [26.9, 103.0], [27.0, 103.0], [27.1, 103.0], [27.2, 104.0], [27.3, 104.0], [27.4, 104.0], [27.5, 104.0], [27.6, 105.0], [27.7, 105.0], [27.8, 105.0], [27.9, 105.0], [28.0, 106.0], [28.1, 106.0], [28.2, 106.0], [28.3, 107.0], [28.4, 107.0], [28.5, 107.0], [28.6, 107.0], [28.7, 108.0], [28.8, 108.0], [28.9, 108.0], [29.0, 109.0], [29.1, 109.0], [29.2, 109.0], [29.3, 109.0], [29.4, 109.0], [29.5, 110.0], [29.6, 110.0], [29.7, 110.0], [29.8, 111.0], [29.9, 111.0], [30.0, 111.0], [30.1, 111.0], [30.2, 112.0], [30.3, 112.0], [30.4, 112.0], [30.5, 112.0], [30.6, 113.0], [30.7, 113.0], [30.8, 114.0], [30.9, 114.0], [31.0, 115.0], [31.1, 115.0], [31.2, 115.0], [31.3, 116.0], [31.4, 116.0], [31.5, 116.0], [31.6, 116.0], [31.7, 117.0], [31.8, 117.0], [31.9, 118.0], [32.0, 118.0], [32.1, 118.0], [32.2, 119.0], [32.3, 119.0], [32.4, 120.0], [32.5, 121.0], [32.6, 121.0], [32.7, 122.0], [32.8, 122.0], [32.9, 123.0], [33.0, 124.0], [33.1, 124.0], [33.2, 125.0], [33.3, 126.0], [33.4, 127.0], [33.5, 128.0], [33.6, 128.0], [33.7, 129.0], [33.8, 129.0], [33.9, 130.0], [34.0, 131.0], [34.1, 131.0], [34.2, 132.0], [34.3, 133.0], [34.4, 133.0], [34.5, 134.0], [34.6, 135.0], [34.7, 135.0], [34.8, 135.0], [34.9, 136.0], [35.0, 137.0], [35.1, 137.0], [35.2, 138.0], [35.3, 138.0], [35.4, 139.0], [35.5, 140.0], [35.6, 140.0], [35.7, 141.0], [35.8, 141.0], [35.9, 142.0], [36.0, 142.0], [36.1, 143.0], [36.2, 143.0], [36.3, 144.0], [36.4, 145.0], [36.5, 145.0], [36.6, 146.0], [36.7, 146.0], [36.8, 147.0], [36.9, 148.0], [37.0, 149.0], [37.1, 149.0], [37.2, 150.0], [37.3, 150.0], [37.4, 151.0], [37.5, 151.0], [37.6, 152.0], [37.7, 152.0], [37.8, 153.0], [37.9, 153.0], [38.0, 154.0], [38.1, 154.0], [38.2, 155.0], [38.3, 156.0], [38.4, 157.0], [38.5, 157.0], [38.6, 158.0], [38.7, 159.0], [38.8, 159.0], [38.9, 160.0], [39.0, 161.0], [39.1, 161.0], [39.2, 162.0], [39.3, 163.0], [39.4, 164.0], [39.5, 164.0], [39.6, 165.0], [39.7, 166.0], [39.8, 167.0], [39.9, 167.0], [40.0, 168.0], [40.1, 169.0], [40.2, 169.0], [40.3, 170.0], [40.4, 171.0], [40.5, 171.0], [40.6, 172.0], [40.7, 172.0], [40.8, 173.0], [40.9, 173.0], [41.0, 174.0], [41.1, 176.0], [41.2, 176.0], [41.3, 177.0], [41.4, 177.0], [41.5, 178.0], [41.6, 180.0], [41.7, 180.0], [41.8, 181.0], [41.9, 183.0], [42.0, 185.0], [42.1, 186.0], [42.2, 188.0], [42.3, 189.0], [42.4, 191.0], [42.5, 193.0], [42.6, 194.0], [42.7, 196.0], [42.8, 196.0], [42.9, 198.0], [43.0, 200.0], [43.1, 201.0], [43.2, 202.0], [43.3, 204.0], [43.4, 204.0], [43.5, 206.0], [43.6, 207.0], [43.7, 208.0], [43.8, 209.0], [43.9, 210.0], [44.0, 212.0], [44.1, 215.0], [44.2, 216.0], [44.3, 217.0], [44.4, 218.0], [44.5, 219.0], [44.6, 221.0], [44.7, 221.0], [44.8, 222.0], [44.9, 224.0], [45.0, 224.0], [45.1, 225.0], [45.2, 226.0], [45.3, 226.0], [45.4, 227.0], [45.5, 228.0], [45.6, 229.0], [45.7, 230.0], [45.8, 231.0], [45.9, 231.0], [46.0, 232.0], [46.1, 233.0], [46.2, 234.0], [46.3, 235.0], [46.4, 236.0], [46.5, 236.0], [46.6, 237.0], [46.7, 238.0], [46.8, 239.0], [46.9, 241.0], [47.0, 242.0], [47.1, 243.0], [47.2, 244.0], [47.3, 245.0], [47.4, 246.0], [47.5, 247.0], [47.6, 248.0], [47.7, 249.0], [47.8, 251.0], [47.9, 251.0], [48.0, 253.0], [48.1, 254.0], [48.2, 256.0], [48.3, 256.0], [48.4, 256.0], [48.5, 257.0], [48.6, 259.0], [48.7, 260.0], [48.8, 261.0], [48.9, 261.0], [49.0, 264.0], [49.1, 265.0], [49.2, 266.0], [49.3, 266.0], [49.4, 267.0], [49.5, 268.0], [49.6, 270.0], [49.7, 271.0], [49.8, 273.0], [49.9, 275.0], [50.0, 276.0], [50.1, 277.0], [50.2, 278.0], [50.3, 280.0], [50.4, 281.0], [50.5, 282.0], [50.6, 282.0], [50.7, 283.0], [50.8, 285.0], [50.9, 285.0], [51.0, 286.0], [51.1, 287.0], [51.2, 288.0], [51.3, 290.0], [51.4, 291.0], [51.5, 293.0], [51.6, 294.0], [51.7, 295.0], [51.8, 295.0], [51.9, 297.0], [52.0, 298.0], [52.1, 299.0], [52.2, 299.0], [52.3, 301.0], [52.4, 302.0], [52.5, 303.0], [52.6, 304.0], [52.7, 305.0], [52.8, 306.0], [52.9, 306.0], [53.0, 307.0], [53.1, 308.0], [53.2, 309.0], [53.3, 310.0], [53.4, 313.0], [53.5, 313.0], [53.6, 314.0], [53.7, 315.0], [53.8, 316.0], [53.9, 317.0], [54.0, 318.0], [54.1, 320.0], [54.2, 320.0], [54.3, 321.0], [54.4, 322.0], [54.5, 323.0], [54.6, 324.0], [54.7, 325.0], [54.8, 326.0], [54.9, 327.0], [55.0, 328.0], [55.1, 329.0], [55.2, 330.0], [55.3, 330.0], [55.4, 331.0], [55.5, 333.0], [55.6, 334.0], [55.7, 335.0], [55.8, 337.0], [55.9, 338.0], [56.0, 339.0], [56.1, 340.0], [56.2, 341.0], [56.3, 342.0], [56.4, 344.0], [56.5, 345.0], [56.6, 345.0], [56.7, 346.0], [56.8, 348.0], [56.9, 349.0], [57.0, 351.0], [57.1, 351.0], [57.2, 352.0], [57.3, 353.0], [57.4, 354.0], [57.5, 355.0], [57.6, 356.0], [57.7, 357.0], [57.8, 357.0], [57.9, 359.0], [58.0, 360.0], [58.1, 361.0], [58.2, 361.0], [58.3, 362.0], [58.4, 362.0], [58.5, 364.0], [58.6, 365.0], [58.7, 366.0], [58.8, 367.0], [58.9, 368.0], [59.0, 369.0], [59.1, 370.0], [59.2, 371.0], [59.3, 372.0], [59.4, 374.0], [59.5, 375.0], [59.6, 375.0], [59.7, 377.0], [59.8, 378.0], [59.9, 379.0], [60.0, 380.0], [60.1, 382.0], [60.2, 383.0], [60.3, 384.0], [60.4, 385.0], [60.5, 386.0], [60.6, 387.0], [60.7, 388.0], [60.8, 388.0], [60.9, 390.0], [61.0, 391.0], [61.1, 391.0], [61.2, 393.0], [61.3, 394.0], [61.4, 396.0], [61.5, 396.0], [61.6, 397.0], [61.7, 398.0], [61.8, 399.0], [61.9, 400.0], [62.0, 401.0], [62.1, 402.0], [62.2, 405.0], [62.3, 407.0], [62.4, 408.0], [62.5, 409.0], [62.6, 410.0], [62.7, 411.0], [62.8, 412.0], [62.9, 414.0], [63.0, 415.0], [63.1, 416.0], [63.2, 418.0], [63.3, 420.0], [63.4, 420.0], [63.5, 421.0], [63.6, 425.0], [63.7, 426.0], [63.8, 428.0], [63.9, 429.0], [64.0, 431.0], [64.1, 434.0], [64.2, 435.0], [64.3, 436.0], [64.4, 438.0], [64.5, 439.0], [64.6, 440.0], [64.7, 441.0], [64.8, 441.0], [64.9, 442.0], [65.0, 444.0], [65.1, 446.0], [65.2, 446.0], [65.3, 447.0], [65.4, 449.0], [65.5, 451.0], [65.6, 451.0], [65.7, 453.0], [65.8, 454.0], [65.9, 456.0], [66.0, 457.0], [66.1, 459.0], [66.2, 460.0], [66.3, 463.0], [66.4, 464.0], [66.5, 465.0], [66.6, 467.0], [66.7, 469.0], [66.8, 471.0], [66.9, 472.0], [67.0, 474.0], [67.1, 475.0], [67.2, 476.0], [67.3, 478.0], [67.4, 480.0], [67.5, 481.0], [67.6, 483.0], [67.7, 484.0], [67.8, 485.0], [67.9, 487.0], [68.0, 488.0], [68.1, 488.0], [68.2, 490.0], [68.3, 492.0], [68.4, 494.0], [68.5, 495.0], [68.6, 495.0], [68.7, 497.0], [68.8, 499.0], [68.9, 500.0], [69.0, 500.0], [69.1, 501.0], [69.2, 502.0], [69.3, 503.0], [69.4, 504.0], [69.5, 505.0], [69.6, 507.0], [69.7, 509.0], [69.8, 510.0], [69.9, 511.0], [70.0, 513.0], [70.1, 514.0], [70.2, 515.0], [70.3, 517.0], [70.4, 519.0], [70.5, 521.0], [70.6, 522.0], [70.7, 523.0], [70.8, 524.0], [70.9, 527.0], [71.0, 530.0], [71.1, 532.0], [71.2, 535.0], [71.3, 535.0], [71.4, 537.0], [71.5, 539.0], [71.6, 544.0], [71.7, 545.0], [71.8, 547.0], [71.9, 550.0], [72.0, 551.0], [72.1, 553.0], [72.2, 555.0], [72.3, 557.0], [72.4, 558.0], [72.5, 559.0], [72.6, 560.0], [72.7, 561.0], [72.8, 563.0], [72.9, 565.0], [73.0, 566.0], [73.1, 570.0], [73.2, 573.0], [73.3, 575.0], [73.4, 576.0], [73.5, 577.0], [73.6, 578.0], [73.7, 580.0], [73.8, 581.0], [73.9, 582.0], [74.0, 584.0], [74.1, 585.0], [74.2, 587.0], [74.3, 590.0], [74.4, 591.0], [74.5, 593.0], [74.6, 594.0], [74.7, 597.0], [74.8, 599.0], [74.9, 600.0], [75.0, 601.0], [75.1, 602.0], [75.2, 603.0], [75.3, 605.0], [75.4, 607.0], [75.5, 608.0], [75.6, 610.0], [75.7, 612.0], [75.8, 614.0], [75.9, 617.0], [76.0, 619.0], [76.1, 621.0], [76.2, 623.0], [76.3, 625.0], [76.4, 627.0], [76.5, 630.0], [76.6, 631.0], [76.7, 632.0], [76.8, 634.0], [76.9, 635.0], [77.0, 636.0], [77.1, 638.0], [77.2, 640.0], [77.3, 642.0], [77.4, 643.0], [77.5, 645.0], [77.6, 648.0], [77.7, 651.0], [77.8, 653.0], [77.9, 655.0], [78.0, 658.0], [78.1, 658.0], [78.2, 661.0], [78.3, 663.0], [78.4, 665.0], [78.5, 669.0], [78.6, 671.0], [78.7, 675.0], [78.8, 676.0], [78.9, 678.0], [79.0, 679.0], [79.1, 683.0], [79.2, 685.0], [79.3, 687.0], [79.4, 690.0], [79.5, 693.0], [79.6, 693.0], [79.7, 695.0], [79.8, 698.0], [79.9, 700.0], [80.0, 701.0], [80.1, 702.0], [80.2, 704.0], [80.3, 704.0], [80.4, 708.0], [80.5, 710.0], [80.6, 712.0], [80.7, 713.0], [80.8, 715.0], [80.9, 718.0], [81.0, 719.0], [81.1, 721.0], [81.2, 722.0], [81.3, 725.0], [81.4, 727.0], [81.5, 730.0], [81.6, 734.0], [81.7, 738.0], [81.8, 739.0], [81.9, 740.0], [82.0, 742.0], [82.1, 744.0], [82.2, 746.0], [82.3, 748.0], [82.4, 750.0], [82.5, 752.0], [82.6, 752.0], [82.7, 754.0], [82.8, 755.0], [82.9, 757.0], [83.0, 759.0], [83.1, 764.0], [83.2, 765.0], [83.3, 768.0], [83.4, 769.0], [83.5, 770.0], [83.6, 771.0], [83.7, 774.0], [83.8, 777.0], [83.9, 779.0], [84.0, 781.0], [84.1, 784.0], [84.2, 786.0], [84.3, 788.0], [84.4, 789.0], [84.5, 791.0], [84.6, 791.0], [84.7, 792.0], [84.8, 795.0], [84.9, 798.0], [85.0, 801.0], [85.1, 804.0], [85.2, 805.0], [85.3, 810.0], [85.4, 812.0], [85.5, 814.0], [85.6, 819.0], [85.7, 823.0], [85.8, 825.0], [85.9, 826.0], [86.0, 829.0], [86.1, 832.0], [86.2, 833.0], [86.3, 835.0], [86.4, 838.0], [86.5, 840.0], [86.6, 843.0], [86.7, 845.0], [86.8, 848.0], [86.9, 853.0], [87.0, 855.0], [87.1, 858.0], [87.2, 861.0], [87.3, 863.0], [87.4, 866.0], [87.5, 869.0], [87.6, 875.0], [87.7, 879.0], [87.8, 881.0], [87.9, 886.0], [88.0, 888.0], [88.1, 890.0], [88.2, 892.0], [88.3, 894.0], [88.4, 900.0], [88.5, 905.0], [88.6, 909.0], [88.7, 911.0], [88.8, 914.0], [88.9, 917.0], [89.0, 923.0], [89.1, 924.0], [89.2, 927.0], [89.3, 931.0], [89.4, 935.0], [89.5, 938.0], [89.6, 939.0], [89.7, 941.0], [89.8, 945.0], [89.9, 948.0], [90.0, 956.0], [90.1, 963.0], [90.2, 966.0], [90.3, 968.0], [90.4, 969.0], [90.5, 973.0], [90.6, 979.0], [90.7, 980.0], [90.8, 982.0], [90.9, 985.0], [91.0, 989.0], [91.1, 994.0], [91.2, 997.0], [91.3, 1002.0], [91.4, 1007.0], [91.5, 1009.0], [91.6, 1016.0], [91.7, 1021.0], [91.8, 1025.0], [91.9, 1026.0], [92.0, 1032.0], [92.1, 1037.0], [92.2, 1042.0], [92.3, 1048.0], [92.4, 1055.0], [92.5, 1057.0], [92.6, 1068.0], [92.7, 1075.0], [92.8, 1079.0], [92.9, 1083.0], [93.0, 1086.0], [93.1, 1091.0], [93.2, 1094.0], [93.3, 1098.0], [93.4, 1101.0], [93.5, 1119.0], [93.6, 1121.0], [93.7, 1126.0], [93.8, 1131.0], [93.9, 1133.0], [94.0, 1135.0], [94.1, 1147.0], [94.2, 1157.0], [94.3, 1164.0], [94.4, 1169.0], [94.5, 1173.0], [94.6, 1180.0], [94.7, 1191.0], [94.8, 1195.0], [94.9, 1199.0], [95.0, 1202.0], [95.1, 1209.0], [95.2, 1218.0], [95.3, 1224.0], [95.4, 1230.0], [95.5, 1242.0], [95.6, 1256.0], [95.7, 1261.0], [95.8, 1270.0], [95.9, 1275.0], [96.0, 1284.0], [96.1, 1290.0], [96.2, 1295.0], [96.3, 1302.0], [96.4, 1312.0], [96.5, 1323.0], [96.6, 1325.0], [96.7, 1341.0], [96.8, 1355.0], [96.9, 1361.0], [97.0, 1378.0], [97.1, 1399.0], [97.2, 1422.0], [97.3, 1441.0], [97.4, 1452.0], [97.5, 1466.0], [97.6, 1475.0], [97.7, 1497.0], [97.8, 1516.0], [97.9, 1528.0], [98.0, 1541.0], [98.1, 1558.0], [98.2, 1568.0], [98.3, 1577.0], [98.4, 1588.0], [98.5, 1605.0], [98.6, 1636.0], [98.7, 1663.0], [98.8, 1696.0], [98.9, 1759.0], [99.0, 1807.0], [99.1, 1838.0], [99.2, 1882.0], [99.3, 1971.0], [99.4, 2037.0], [99.5, 2166.0], [99.6, 2297.0], [99.7, 2395.0], [99.8, 2625.0], [99.9, 2766.0], [100.0, 3736.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1360.0, "series": [{"data": [[0.0, 1360.0], [600.0, 262.0], [700.0, 269.0], [800.0, 182.0], [900.0, 152.0], [1000.0, 110.0], [1100.0, 82.0], [1200.0, 69.0], [1300.0, 47.0], [1400.0, 33.0], [1500.0, 39.0], [100.0, 905.0], [1600.0, 17.0], [1700.0, 10.0], [1800.0, 11.0], [1900.0, 9.0], [2000.0, 6.0], [2100.0, 3.0], [2300.0, 6.0], [2200.0, 3.0], [2400.0, 3.0], [2600.0, 4.0], [2700.0, 4.0], [2800.0, 1.0], [3100.0, 2.0], [200.0, 487.0], [3700.0, 1.0], [300.0, 511.0], [400.0, 368.0], [500.0, 316.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3640.0, "series": [{"data": [[0.0, 3640.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1512.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 119.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 39.49838813668598, "minX": 1.60189788E12, "maxY": 40.0, "series": [{"data": [[1.60189788E12, 40.0], [1.60189794E12, 39.49838813668598]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189794E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 402.24226213221283, "minX": 1.0, "maxY": 3736.0, "series": [{"data": [[33.0, 745.0], [32.0, 767.0], [2.0, 2390.0], [35.0, 1094.0], [34.0, 781.0], [37.0, 944.0], [36.0, 989.0], [38.0, 938.0], [40.0, 402.24226213221283], [3.0, 2605.0], [4.0, 2373.0], [5.0, 2273.0], [6.0, 2228.0], [7.0, 1683.0], [8.0, 1552.0], [9.0, 1742.0], [10.0, 1598.0], [11.0, 1574.0], [12.0, 1516.0], [13.0, 1441.0], [14.0, 1636.0], [15.0, 1281.0], [16.0, 1443.0], [1.0, 3736.0], [17.0, 1275.0], [19.0, 1346.5], [20.0, 1562.0], [21.0, 1195.0], [22.0, 1203.0], [23.0, 1261.0], [24.0, 1235.0], [25.0, 1271.0], [26.0, 1475.0], [27.0, 1038.0], [28.0, 1007.0], [29.0, 1284.0], [30.0, 875.0], [31.0, 910.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.85242792109255, 409.89169195751157]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 13499.516666666666, "minX": 1.60189788E12, "maxY": 2659980.35, "series": [{"data": [[1.60189788E12, 2659980.35], [1.60189794E12, 1630706.0166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60189788E12, 32080.033333333333], [1.60189794E12, 13499.516666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189794E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 391.2278957269547, "minX": 1.60189788E12, "maxY": 454.6679561573176, "series": [{"data": [[1.60189788E12, 391.2278957269547], [1.60189794E12, 454.6679561573176]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189794E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 390.91857027680703, "minX": 1.60189788E12, "maxY": 454.23275306254084, "series": [{"data": [[1.60189788E12, 390.91857027680703], [1.60189794E12, 454.23275306254084]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189794E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.012894906511927817, "minX": 1.60189788E12, "maxY": 0.190002687449611, "series": [{"data": [[1.60189788E12, 0.190002687449611], [1.60189794E12, 0.012894906511927817]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189794E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60189788E12, "maxY": 3736.0, "series": [{"data": [[1.60189788E12, 2872.0], [1.60189794E12, 3736.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60189788E12, 59.0], [1.60189794E12, 31.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60189788E12, 59.837900354862214], [1.60189794E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60189788E12, 59.0], [1.60189794E12, 31.743999814987184]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60189788E12, 37.0], [1.60189794E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60189788E12, 259.5], [1.60189794E12, 305.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189794E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 87.0, "minX": 1.0, "maxY": 3736.0, "series": [{"data": [[35.0, 1026.0], [36.0, 813.5], [38.0, 819.5], [49.0, 944.0], [55.0, 595.0], [54.0, 758.5], [61.0, 505.0], [60.0, 668.0], [63.0, 642.0], [67.0, 311.0], [69.0, 416.0], [78.0, 492.5], [76.0, 447.0], [77.0, 386.0], [81.0, 353.0], [83.0, 502.0], [80.0, 602.0], [5.0, 2373.0], [84.0, 255.0], [87.0, 194.0], [89.0, 500.0], [95.0, 167.0], [92.0, 369.0], [101.0, 259.0], [104.0, 290.0], [107.0, 265.0], [109.0, 368.0], [112.0, 272.5], [117.0, 248.5], [123.0, 330.0], [121.0, 157.0], [127.0, 300.0], [126.0, 152.5], [133.0, 116.0], [137.0, 87.0], [138.0, 208.0], [142.0, 94.5], [159.0, 102.0], [154.0, 176.5], [160.0, 220.0], [173.0, 115.0], [177.0, 96.0], [215.0, 154.0], [230.0, 151.0], [1.0, 3736.0], [18.0, 1442.0], [30.0, 776.0], [31.0, 767.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[230.0, 313.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 230.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 87.0, "minX": 1.0, "maxY": 3735.0, "series": [{"data": [[35.0, 1026.0], [36.0, 813.5], [38.0, 819.5], [49.0, 943.0], [55.0, 595.0], [54.0, 757.5], [61.0, 505.0], [60.0, 667.0], [63.0, 640.0], [67.0, 309.0], [69.0, 414.0], [78.0, 492.0], [76.0, 446.0], [77.0, 384.5], [81.0, 352.5], [83.0, 501.0], [80.0, 602.0], [5.0, 2373.0], [84.0, 254.5], [87.0, 194.0], [89.0, 500.0], [95.0, 167.0], [92.0, 368.5], [101.0, 259.0], [104.0, 289.5], [107.0, 263.0], [109.0, 368.0], [112.0, 272.5], [117.0, 248.5], [123.0, 330.0], [121.0, 157.0], [127.0, 300.0], [126.0, 152.5], [133.0, 116.0], [137.0, 87.0], [138.0, 208.0], [142.0, 94.0], [159.0, 102.0], [154.0, 176.5], [160.0, 220.0], [173.0, 115.0], [177.0, 96.0], [215.0, 154.0], [230.0, 150.0], [1.0, 3735.0], [18.0, 1441.0], [30.0, 771.0], [31.0, 767.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[230.0, 313.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 230.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 25.183333333333334, "minX": 1.60189788E12, "maxY": 62.68333333333333, "series": [{"data": [[1.60189788E12, 62.68333333333333], [1.60189794E12, 25.183333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189794E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189788E12, "maxY": 62.0, "series": [{"data": [[1.60189788E12, 62.0], [1.60189794E12, 25.85]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60189788E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189794E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189788E12, "maxY": 62.0, "series": [{"data": [[1.60189788E12, 62.0], [1.60189794E12, 25.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60189788E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189794E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189788E12, "maxY": 62.0, "series": [{"data": [[1.60189788E12, 62.0], [1.60189794E12, 25.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60189788E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189794E12, "title": "Total Transactions Per Second"}},
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

