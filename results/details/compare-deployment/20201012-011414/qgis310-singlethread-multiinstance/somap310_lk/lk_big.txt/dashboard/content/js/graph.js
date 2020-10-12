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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 4469.0, "series": [{"data": [[0.0, 31.0], [0.1, 33.0], [0.2, 34.0], [0.3, 35.0], [0.4, 35.0], [0.5, 36.0], [0.6, 36.0], [0.7, 36.0], [0.8, 36.0], [0.9, 36.0], [1.0, 37.0], [1.1, 37.0], [1.2, 37.0], [1.3, 37.0], [1.4, 37.0], [1.5, 38.0], [1.6, 38.0], [1.7, 38.0], [1.8, 38.0], [1.9, 38.0], [2.0, 39.0], [2.1, 39.0], [2.2, 39.0], [2.3, 39.0], [2.4, 40.0], [2.5, 40.0], [2.6, 40.0], [2.7, 40.0], [2.8, 40.0], [2.9, 40.0], [3.0, 40.0], [3.1, 40.0], [3.2, 40.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 41.0], [3.7, 41.0], [3.8, 41.0], [3.9, 41.0], [4.0, 42.0], [4.1, 42.0], [4.2, 42.0], [4.3, 42.0], [4.4, 42.0], [4.5, 42.0], [4.6, 42.0], [4.7, 42.0], [4.8, 43.0], [4.9, 43.0], [5.0, 43.0], [5.1, 43.0], [5.2, 43.0], [5.3, 43.0], [5.4, 44.0], [5.5, 44.0], [5.6, 44.0], [5.7, 44.0], [5.8, 45.0], [5.9, 45.0], [6.0, 45.0], [6.1, 45.0], [6.2, 46.0], [6.3, 46.0], [6.4, 47.0], [6.5, 47.0], [6.6, 47.0], [6.7, 48.0], [6.8, 48.0], [6.9, 49.0], [7.0, 49.0], [7.1, 50.0], [7.2, 50.0], [7.3, 51.0], [7.4, 51.0], [7.5, 52.0], [7.6, 52.0], [7.7, 53.0], [7.8, 54.0], [7.9, 55.0], [8.0, 55.0], [8.1, 57.0], [8.2, 57.0], [8.3, 57.0], [8.4, 58.0], [8.5, 59.0], [8.6, 59.0], [8.7, 59.0], [8.8, 60.0], [8.9, 60.0], [9.0, 61.0], [9.1, 62.0], [9.2, 62.0], [9.3, 63.0], [9.4, 63.0], [9.5, 64.0], [9.6, 64.0], [9.7, 64.0], [9.8, 65.0], [9.9, 65.0], [10.0, 66.0], [10.1, 66.0], [10.2, 67.0], [10.3, 67.0], [10.4, 67.0], [10.5, 67.0], [10.6, 68.0], [10.7, 68.0], [10.8, 68.0], [10.9, 68.0], [11.0, 69.0], [11.1, 69.0], [11.2, 69.0], [11.3, 69.0], [11.4, 69.0], [11.5, 70.0], [11.6, 70.0], [11.7, 70.0], [11.8, 70.0], [11.9, 70.0], [12.0, 70.0], [12.1, 71.0], [12.2, 71.0], [12.3, 71.0], [12.4, 71.0], [12.5, 71.0], [12.6, 71.0], [12.7, 71.0], [12.8, 72.0], [12.9, 72.0], [13.0, 72.0], [13.1, 72.0], [13.2, 72.0], [13.3, 72.0], [13.4, 72.0], [13.5, 72.0], [13.6, 72.0], [13.7, 73.0], [13.8, 73.0], [13.9, 73.0], [14.0, 73.0], [14.1, 73.0], [14.2, 73.0], [14.3, 73.0], [14.4, 73.0], [14.5, 74.0], [14.6, 74.0], [14.7, 74.0], [14.8, 74.0], [14.9, 74.0], [15.0, 74.0], [15.1, 74.0], [15.2, 74.0], [15.3, 74.0], [15.4, 75.0], [15.5, 75.0], [15.6, 75.0], [15.7, 75.0], [15.8, 75.0], [15.9, 75.0], [16.0, 75.0], [16.1, 75.0], [16.2, 75.0], [16.3, 75.0], [16.4, 75.0], [16.5, 76.0], [16.6, 76.0], [16.7, 76.0], [16.8, 76.0], [16.9, 76.0], [17.0, 76.0], [17.1, 76.0], [17.2, 76.0], [17.3, 76.0], [17.4, 76.0], [17.5, 76.0], [17.6, 76.0], [17.7, 76.0], [17.8, 76.0], [17.9, 76.0], [18.0, 77.0], [18.1, 77.0], [18.2, 77.0], [18.3, 77.0], [18.4, 77.0], [18.5, 77.0], [18.6, 77.0], [18.7, 77.0], [18.8, 77.0], [18.9, 77.0], [19.0, 77.0], [19.1, 77.0], [19.2, 78.0], [19.3, 78.0], [19.4, 78.0], [19.5, 78.0], [19.6, 78.0], [19.7, 78.0], [19.8, 78.0], [19.9, 78.0], [20.0, 78.0], [20.1, 78.0], [20.2, 78.0], [20.3, 79.0], [20.4, 79.0], [20.5, 79.0], [20.6, 79.0], [20.7, 79.0], [20.8, 79.0], [20.9, 79.0], [21.0, 79.0], [21.1, 79.0], [21.2, 79.0], [21.3, 79.0], [21.4, 79.0], [21.5, 79.0], [21.6, 80.0], [21.7, 80.0], [21.8, 80.0], [21.9, 80.0], [22.0, 80.0], [22.1, 80.0], [22.2, 80.0], [22.3, 80.0], [22.4, 80.0], [22.5, 80.0], [22.6, 81.0], [22.7, 81.0], [22.8, 81.0], [22.9, 81.0], [23.0, 81.0], [23.1, 81.0], [23.2, 81.0], [23.3, 81.0], [23.4, 81.0], [23.5, 81.0], [23.6, 81.0], [23.7, 82.0], [23.8, 82.0], [23.9, 82.0], [24.0, 82.0], [24.1, 82.0], [24.2, 82.0], [24.3, 82.0], [24.4, 82.0], [24.5, 82.0], [24.6, 82.0], [24.7, 83.0], [24.8, 83.0], [24.9, 83.0], [25.0, 83.0], [25.1, 83.0], [25.2, 83.0], [25.3, 83.0], [25.4, 83.0], [25.5, 84.0], [25.6, 84.0], [25.7, 84.0], [25.8, 84.0], [25.9, 84.0], [26.0, 84.0], [26.1, 84.0], [26.2, 84.0], [26.3, 84.0], [26.4, 84.0], [26.5, 85.0], [26.6, 85.0], [26.7, 85.0], [26.8, 85.0], [26.9, 85.0], [27.0, 85.0], [27.1, 85.0], [27.2, 86.0], [27.3, 86.0], [27.4, 86.0], [27.5, 86.0], [27.6, 86.0], [27.7, 86.0], [27.8, 86.0], [27.9, 87.0], [28.0, 87.0], [28.1, 87.0], [28.2, 87.0], [28.3, 87.0], [28.4, 87.0], [28.5, 88.0], [28.6, 88.0], [28.7, 88.0], [28.8, 88.0], [28.9, 89.0], [29.0, 89.0], [29.1, 89.0], [29.2, 89.0], [29.3, 89.0], [29.4, 89.0], [29.5, 90.0], [29.6, 90.0], [29.7, 90.0], [29.8, 90.0], [29.9, 91.0], [30.0, 91.0], [30.1, 91.0], [30.2, 91.0], [30.3, 92.0], [30.4, 92.0], [30.5, 92.0], [30.6, 93.0], [30.7, 93.0], [30.8, 93.0], [30.9, 93.0], [31.0, 93.0], [31.1, 94.0], [31.2, 94.0], [31.3, 95.0], [31.4, 95.0], [31.5, 96.0], [31.6, 96.0], [31.7, 96.0], [31.8, 97.0], [31.9, 97.0], [32.0, 97.0], [32.1, 98.0], [32.2, 98.0], [32.3, 99.0], [32.4, 99.0], [32.5, 99.0], [32.6, 100.0], [32.7, 101.0], [32.8, 101.0], [32.9, 102.0], [33.0, 103.0], [33.1, 104.0], [33.2, 104.0], [33.3, 105.0], [33.4, 105.0], [33.5, 105.0], [33.6, 107.0], [33.7, 107.0], [33.8, 108.0], [33.9, 108.0], [34.0, 109.0], [34.1, 110.0], [34.2, 110.0], [34.3, 111.0], [34.4, 111.0], [34.5, 112.0], [34.6, 113.0], [34.7, 113.0], [34.8, 114.0], [34.9, 114.0], [35.0, 114.0], [35.1, 115.0], [35.2, 116.0], [35.3, 116.0], [35.4, 117.0], [35.5, 118.0], [35.6, 119.0], [35.7, 119.0], [35.8, 120.0], [35.9, 120.0], [36.0, 121.0], [36.1, 122.0], [36.2, 122.0], [36.3, 124.0], [36.4, 124.0], [36.5, 125.0], [36.6, 125.0], [36.7, 126.0], [36.8, 128.0], [36.9, 128.0], [37.0, 129.0], [37.1, 131.0], [37.2, 131.0], [37.3, 132.0], [37.4, 132.0], [37.5, 133.0], [37.6, 134.0], [37.7, 135.0], [37.8, 136.0], [37.9, 136.0], [38.0, 137.0], [38.1, 138.0], [38.2, 139.0], [38.3, 140.0], [38.4, 140.0], [38.5, 141.0], [38.6, 141.0], [38.7, 142.0], [38.8, 143.0], [38.9, 143.0], [39.0, 145.0], [39.1, 145.0], [39.2, 145.0], [39.3, 146.0], [39.4, 147.0], [39.5, 148.0], [39.6, 149.0], [39.7, 149.0], [39.8, 150.0], [39.9, 151.0], [40.0, 151.0], [40.1, 152.0], [40.2, 152.0], [40.3, 153.0], [40.4, 153.0], [40.5, 154.0], [40.6, 155.0], [40.7, 156.0], [40.8, 157.0], [40.9, 157.0], [41.0, 159.0], [41.1, 159.0], [41.2, 161.0], [41.3, 163.0], [41.4, 163.0], [41.5, 164.0], [41.6, 164.0], [41.7, 166.0], [41.8, 167.0], [41.9, 168.0], [42.0, 169.0], [42.1, 170.0], [42.2, 171.0], [42.3, 172.0], [42.4, 175.0], [42.5, 176.0], [42.6, 176.0], [42.7, 177.0], [42.8, 177.0], [42.9, 178.0], [43.0, 179.0], [43.1, 180.0], [43.2, 182.0], [43.3, 183.0], [43.4, 184.0], [43.5, 185.0], [43.6, 185.0], [43.7, 187.0], [43.8, 188.0], [43.9, 188.0], [44.0, 190.0], [44.1, 191.0], [44.2, 193.0], [44.3, 194.0], [44.4, 194.0], [44.5, 195.0], [44.6, 196.0], [44.7, 197.0], [44.8, 198.0], [44.9, 200.0], [45.0, 202.0], [45.1, 203.0], [45.2, 205.0], [45.3, 207.0], [45.4, 208.0], [45.5, 209.0], [45.6, 210.0], [45.7, 211.0], [45.8, 212.0], [45.9, 213.0], [46.0, 215.0], [46.1, 216.0], [46.2, 217.0], [46.3, 218.0], [46.4, 219.0], [46.5, 219.0], [46.6, 221.0], [46.7, 222.0], [46.8, 222.0], [46.9, 223.0], [47.0, 224.0], [47.1, 225.0], [47.2, 225.0], [47.3, 227.0], [47.4, 228.0], [47.5, 229.0], [47.6, 229.0], [47.7, 229.0], [47.8, 231.0], [47.9, 232.0], [48.0, 232.0], [48.1, 233.0], [48.2, 234.0], [48.3, 235.0], [48.4, 235.0], [48.5, 237.0], [48.6, 238.0], [48.7, 238.0], [48.8, 239.0], [48.9, 240.0], [49.0, 241.0], [49.1, 242.0], [49.2, 242.0], [49.3, 243.0], [49.4, 244.0], [49.5, 246.0], [49.6, 247.0], [49.7, 248.0], [49.8, 248.0], [49.9, 249.0], [50.0, 249.0], [50.1, 251.0], [50.2, 252.0], [50.3, 253.0], [50.4, 255.0], [50.5, 255.0], [50.6, 256.0], [50.7, 257.0], [50.8, 258.0], [50.9, 259.0], [51.0, 259.0], [51.1, 260.0], [51.2, 261.0], [51.3, 261.0], [51.4, 262.0], [51.5, 263.0], [51.6, 263.0], [51.7, 264.0], [51.8, 265.0], [51.9, 267.0], [52.0, 267.0], [52.1, 267.0], [52.2, 268.0], [52.3, 269.0], [52.4, 270.0], [52.5, 271.0], [52.6, 272.0], [52.7, 272.0], [52.8, 274.0], [52.9, 274.0], [53.0, 275.0], [53.1, 276.0], [53.2, 277.0], [53.3, 278.0], [53.4, 280.0], [53.5, 281.0], [53.6, 282.0], [53.7, 283.0], [53.8, 284.0], [53.9, 286.0], [54.0, 287.0], [54.1, 289.0], [54.2, 289.0], [54.3, 290.0], [54.4, 291.0], [54.5, 293.0], [54.6, 294.0], [54.7, 295.0], [54.8, 296.0], [54.9, 297.0], [55.0, 299.0], [55.1, 301.0], [55.2, 302.0], [55.3, 303.0], [55.4, 304.0], [55.5, 306.0], [55.6, 307.0], [55.7, 308.0], [55.8, 312.0], [55.9, 313.0], [56.0, 315.0], [56.1, 317.0], [56.2, 318.0], [56.3, 319.0], [56.4, 320.0], [56.5, 321.0], [56.6, 323.0], [56.7, 324.0], [56.8, 325.0], [56.9, 327.0], [57.0, 329.0], [57.1, 330.0], [57.2, 331.0], [57.3, 333.0], [57.4, 336.0], [57.5, 337.0], [57.6, 339.0], [57.7, 341.0], [57.8, 342.0], [57.9, 345.0], [58.0, 348.0], [58.1, 349.0], [58.2, 351.0], [58.3, 353.0], [58.4, 355.0], [58.5, 357.0], [58.6, 358.0], [58.7, 358.0], [58.8, 360.0], [58.9, 361.0], [59.0, 363.0], [59.1, 365.0], [59.2, 368.0], [59.3, 369.0], [59.4, 371.0], [59.5, 373.0], [59.6, 375.0], [59.7, 377.0], [59.8, 379.0], [59.9, 379.0], [60.0, 381.0], [60.1, 382.0], [60.2, 382.0], [60.3, 384.0], [60.4, 385.0], [60.5, 387.0], [60.6, 388.0], [60.7, 389.0], [60.8, 390.0], [60.9, 392.0], [61.0, 393.0], [61.1, 394.0], [61.2, 395.0], [61.3, 396.0], [61.4, 396.0], [61.5, 398.0], [61.6, 399.0], [61.7, 400.0], [61.8, 401.0], [61.9, 403.0], [62.0, 405.0], [62.1, 406.0], [62.2, 406.0], [62.3, 408.0], [62.4, 409.0], [62.5, 410.0], [62.6, 413.0], [62.7, 414.0], [62.8, 415.0], [62.9, 415.0], [63.0, 417.0], [63.1, 418.0], [63.2, 419.0], [63.3, 420.0], [63.4, 421.0], [63.5, 422.0], [63.6, 424.0], [63.7, 425.0], [63.8, 427.0], [63.9, 428.0], [64.0, 429.0], [64.1, 430.0], [64.2, 431.0], [64.3, 434.0], [64.4, 436.0], [64.5, 439.0], [64.6, 441.0], [64.7, 443.0], [64.8, 443.0], [64.9, 444.0], [65.0, 447.0], [65.1, 448.0], [65.2, 449.0], [65.3, 450.0], [65.4, 453.0], [65.5, 454.0], [65.6, 455.0], [65.7, 456.0], [65.8, 457.0], [65.9, 457.0], [66.0, 458.0], [66.1, 459.0], [66.2, 461.0], [66.3, 462.0], [66.4, 463.0], [66.5, 466.0], [66.6, 468.0], [66.7, 469.0], [66.8, 471.0], [66.9, 472.0], [67.0, 474.0], [67.1, 475.0], [67.2, 476.0], [67.3, 478.0], [67.4, 479.0], [67.5, 480.0], [67.6, 481.0], [67.7, 483.0], [67.8, 486.0], [67.9, 487.0], [68.0, 489.0], [68.1, 491.0], [68.2, 493.0], [68.3, 496.0], [68.4, 498.0], [68.5, 499.0], [68.6, 501.0], [68.7, 503.0], [68.8, 504.0], [68.9, 506.0], [69.0, 508.0], [69.1, 509.0], [69.2, 511.0], [69.3, 513.0], [69.4, 514.0], [69.5, 515.0], [69.6, 517.0], [69.7, 519.0], [69.8, 520.0], [69.9, 521.0], [70.0, 523.0], [70.1, 526.0], [70.2, 529.0], [70.3, 532.0], [70.4, 534.0], [70.5, 534.0], [70.6, 536.0], [70.7, 538.0], [70.8, 539.0], [70.9, 542.0], [71.0, 543.0], [71.1, 544.0], [71.2, 545.0], [71.3, 548.0], [71.4, 549.0], [71.5, 552.0], [71.6, 553.0], [71.7, 556.0], [71.8, 558.0], [71.9, 559.0], [72.0, 560.0], [72.1, 562.0], [72.2, 562.0], [72.3, 564.0], [72.4, 565.0], [72.5, 568.0], [72.6, 571.0], [72.7, 574.0], [72.8, 576.0], [72.9, 579.0], [73.0, 580.0], [73.1, 582.0], [73.2, 583.0], [73.3, 584.0], [73.4, 585.0], [73.5, 587.0], [73.6, 590.0], [73.7, 592.0], [73.8, 594.0], [73.9, 596.0], [74.0, 599.0], [74.1, 600.0], [74.2, 603.0], [74.3, 604.0], [74.4, 605.0], [74.5, 607.0], [74.6, 607.0], [74.7, 608.0], [74.8, 613.0], [74.9, 614.0], [75.0, 616.0], [75.1, 618.0], [75.2, 621.0], [75.3, 622.0], [75.4, 623.0], [75.5, 625.0], [75.6, 627.0], [75.7, 628.0], [75.8, 631.0], [75.9, 635.0], [76.0, 637.0], [76.1, 638.0], [76.2, 641.0], [76.3, 643.0], [76.4, 645.0], [76.5, 647.0], [76.6, 648.0], [76.7, 650.0], [76.8, 653.0], [76.9, 655.0], [77.0, 657.0], [77.1, 659.0], [77.2, 661.0], [77.3, 664.0], [77.4, 665.0], [77.5, 668.0], [77.6, 672.0], [77.7, 672.0], [77.8, 675.0], [77.9, 677.0], [78.0, 678.0], [78.1, 681.0], [78.2, 683.0], [78.3, 685.0], [78.4, 686.0], [78.5, 690.0], [78.6, 691.0], [78.7, 693.0], [78.8, 695.0], [78.9, 696.0], [79.0, 697.0], [79.1, 699.0], [79.2, 700.0], [79.3, 703.0], [79.4, 706.0], [79.5, 709.0], [79.6, 711.0], [79.7, 713.0], [79.8, 714.0], [79.9, 716.0], [80.0, 718.0], [80.1, 719.0], [80.2, 723.0], [80.3, 724.0], [80.4, 726.0], [80.5, 728.0], [80.6, 731.0], [80.7, 734.0], [80.8, 735.0], [80.9, 737.0], [81.0, 741.0], [81.1, 743.0], [81.2, 745.0], [81.3, 747.0], [81.4, 749.0], [81.5, 750.0], [81.6, 752.0], [81.7, 756.0], [81.8, 758.0], [81.9, 762.0], [82.0, 763.0], [82.1, 767.0], [82.2, 770.0], [82.3, 771.0], [82.4, 772.0], [82.5, 774.0], [82.6, 778.0], [82.7, 779.0], [82.8, 781.0], [82.9, 783.0], [83.0, 784.0], [83.1, 786.0], [83.2, 789.0], [83.3, 790.0], [83.4, 793.0], [83.5, 795.0], [83.6, 797.0], [83.7, 798.0], [83.8, 800.0], [83.9, 803.0], [84.0, 804.0], [84.1, 807.0], [84.2, 812.0], [84.3, 813.0], [84.4, 816.0], [84.5, 819.0], [84.6, 819.0], [84.7, 821.0], [84.8, 823.0], [84.9, 826.0], [85.0, 827.0], [85.1, 828.0], [85.2, 830.0], [85.3, 833.0], [85.4, 837.0], [85.5, 838.0], [85.6, 840.0], [85.7, 845.0], [85.8, 849.0], [85.9, 852.0], [86.0, 855.0], [86.1, 857.0], [86.2, 860.0], [86.3, 864.0], [86.4, 868.0], [86.5, 869.0], [86.6, 871.0], [86.7, 875.0], [86.8, 877.0], [86.9, 881.0], [87.0, 884.0], [87.1, 888.0], [87.2, 895.0], [87.3, 897.0], [87.4, 903.0], [87.5, 907.0], [87.6, 909.0], [87.7, 912.0], [87.8, 918.0], [87.9, 924.0], [88.0, 926.0], [88.1, 930.0], [88.2, 935.0], [88.3, 939.0], [88.4, 943.0], [88.5, 949.0], [88.6, 952.0], [88.7, 959.0], [88.8, 962.0], [88.9, 967.0], [89.0, 970.0], [89.1, 974.0], [89.2, 979.0], [89.3, 981.0], [89.4, 988.0], [89.5, 998.0], [89.6, 1003.0], [89.7, 1006.0], [89.8, 1008.0], [89.9, 1015.0], [90.0, 1018.0], [90.1, 1022.0], [90.2, 1029.0], [90.3, 1033.0], [90.4, 1036.0], [90.5, 1041.0], [90.6, 1045.0], [90.7, 1050.0], [90.8, 1054.0], [90.9, 1060.0], [91.0, 1065.0], [91.1, 1070.0], [91.2, 1080.0], [91.3, 1086.0], [91.4, 1092.0], [91.5, 1096.0], [91.6, 1105.0], [91.7, 1108.0], [91.8, 1110.0], [91.9, 1118.0], [92.0, 1127.0], [92.1, 1131.0], [92.2, 1133.0], [92.3, 1135.0], [92.4, 1138.0], [92.5, 1144.0], [92.6, 1146.0], [92.7, 1151.0], [92.8, 1158.0], [92.9, 1164.0], [93.0, 1168.0], [93.1, 1179.0], [93.2, 1184.0], [93.3, 1189.0], [93.4, 1196.0], [93.5, 1201.0], [93.6, 1206.0], [93.7, 1215.0], [93.8, 1220.0], [93.9, 1228.0], [94.0, 1235.0], [94.1, 1237.0], [94.2, 1245.0], [94.3, 1255.0], [94.4, 1267.0], [94.5, 1276.0], [94.6, 1279.0], [94.7, 1286.0], [94.8, 1293.0], [94.9, 1299.0], [95.0, 1308.0], [95.1, 1314.0], [95.2, 1322.0], [95.3, 1338.0], [95.4, 1345.0], [95.5, 1353.0], [95.6, 1355.0], [95.7, 1369.0], [95.8, 1388.0], [95.9, 1405.0], [96.0, 1414.0], [96.1, 1428.0], [96.2, 1439.0], [96.3, 1448.0], [96.4, 1472.0], [96.5, 1488.0], [96.6, 1499.0], [96.7, 1513.0], [96.8, 1535.0], [96.9, 1558.0], [97.0, 1568.0], [97.1, 1578.0], [97.2, 1602.0], [97.3, 1637.0], [97.4, 1666.0], [97.5, 1672.0], [97.6, 1689.0], [97.7, 1710.0], [97.8, 1743.0], [97.9, 1785.0], [98.0, 1794.0], [98.1, 1821.0], [98.2, 1831.0], [98.3, 1846.0], [98.4, 1886.0], [98.5, 1930.0], [98.6, 1952.0], [98.7, 1989.0], [98.8, 2037.0], [98.9, 2079.0], [99.0, 2129.0], [99.1, 2155.0], [99.2, 2197.0], [99.3, 2248.0], [99.4, 2344.0], [99.5, 2391.0], [99.6, 2423.0], [99.7, 2458.0], [99.8, 2726.0], [99.9, 4042.0], [100.0, 4469.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1712.0, "series": [{"data": [[0.0, 1712.0], [600.0, 266.0], [700.0, 244.0], [800.0, 187.0], [900.0, 117.0], [1000.0, 104.0], [1100.0, 102.0], [1200.0, 76.0], [1300.0, 50.0], [1400.0, 40.0], [1500.0, 30.0], [100.0, 650.0], [1600.0, 25.0], [1700.0, 18.0], [1800.0, 24.0], [1900.0, 14.0], [2000.0, 14.0], [2100.0, 12.0], [2200.0, 6.0], [2300.0, 10.0], [2400.0, 11.0], [2500.0, 3.0], [2700.0, 1.0], [2900.0, 1.0], [3100.0, 3.0], [200.0, 533.0], [4000.0, 2.0], [4100.0, 3.0], [4400.0, 1.0], [300.0, 349.0], [400.0, 362.0], [500.0, 292.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 178.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3608.0, "series": [{"data": [[0.0, 3608.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1476.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 178.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.938718662952647, "minX": 1.60246524E12, "maxY": 12.0, "series": [{"data": [[1.6024653E12, 12.0], [1.60246536E12, 12.0], [1.60246524E12, 11.939899833055092], [1.60246542E12, 11.938718662952647]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246542E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 415.86681930929217, "minX": 1.0, "maxY": 4469.0, "series": [{"data": [[4.0, 2089.0], [8.0, 2138.5], [2.0, 4042.0], [1.0, 4469.0], [9.0, 2423.0], [5.0, 1240.5], [10.0, 1310.0], [11.0, 595.6], [6.0, 1230.0], [12.0, 415.86681930929217], [3.0, 4135.0], [7.0, 2112.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980615735461788, 421.4834663625997]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5124.316666666667, "minX": 1.60246524E12, "maxY": 1469215.7333333334, "series": [{"data": [[1.6024653E12, 1469215.7333333334], [1.60246536E12, 1346179.1333333333], [1.60246524E12, 335248.85], [1.60246542E12, 1100271.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6024653E12, 13446.9], [1.60246536E12, 17397.15], [1.60246524E12, 5124.316666666667], [1.60246542E12, 9522.583333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246542E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 344.78599033816425, "minX": 1.60246524E12, "maxY": 492.21262766945193, "series": [{"data": [[1.6024653E12, 474.6734828496045], [1.60246536E12, 344.78599033816425], [1.60246524E12, 424.7429048414023], [1.60246542E12, 492.21262766945193]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246542E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 344.4154589371982, "minX": 1.60246524E12, "maxY": 491.7158774373257, "series": [{"data": [[1.6024653E12, 474.1385224274396], [1.60246536E12, 344.4154589371982], [1.60246524E12, 424.3789649415689], [1.60246542E12, 491.7158774373257]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246542E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0098944591029024, "minX": 1.60246524E12, "maxY": 0.1552587646076796, "series": [{"data": [[1.6024653E12, 0.0098944591029024], [1.60246536E12, 0.01111111111111113], [1.60246524E12, 0.1552587646076796], [1.60246542E12, 0.012999071494893228]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246542E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.60246524E12, "maxY": 4469.0, "series": [{"data": [[1.6024653E12, 2578.0], [1.60246536E12, 2215.0], [1.60246524E12, 1570.0], [1.60246542E12, 4469.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6024653E12, 38.65299963831902], [1.60246536E12, 39.0], [1.60246524E12, 67.0], [1.60246542E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6024653E12, 39.0], [1.60246536E12, 39.0], [1.60246524E12, 67.0], [1.60246542E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6024653E12, 39.0], [1.60246536E12, 39.0], [1.60246524E12, 67.0], [1.60246542E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6024653E12, 35.0], [1.60246536E12, 34.0], [1.60246524E12, 41.0], [1.60246542E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6024653E12, 298.5], [1.60246536E12, 212.0], [1.60246524E12, 320.0], [1.60246542E12, 290.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246542E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 42.5, "minX": 1.0, "maxY": 4255.5, "series": [{"data": [[2.0, 4089.5], [3.0, 1837.5], [4.0, 1848.5], [5.0, 1514.0], [6.0, 2102.5], [7.0, 1004.0], [8.0, 1411.5], [9.0, 1498.0], [10.0, 1051.5], [11.0, 813.5], [12.0, 762.5], [13.0, 802.0], [14.0, 691.5], [15.0, 791.0], [16.0, 688.0], [17.0, 636.0], [18.0, 582.0], [19.0, 529.5], [20.0, 632.0], [21.0, 447.0], [22.0, 542.5], [23.0, 431.5], [24.0, 240.0], [25.0, 508.0], [26.0, 433.5], [27.0, 271.0], [28.0, 371.0], [29.0, 306.0], [30.0, 388.5], [31.0, 131.0], [32.0, 118.5], [33.0, 328.0], [34.0, 220.5], [35.0, 266.0], [37.0, 106.5], [36.0, 288.5], [39.0, 313.0], [38.0, 314.0], [41.0, 81.0], [42.0, 86.5], [43.0, 142.5], [44.0, 128.0], [45.0, 163.0], [46.0, 319.0], [47.0, 148.5], [48.0, 229.0], [49.0, 90.0], [51.0, 231.0], [50.0, 84.0], [52.0, 85.5], [53.0, 145.5], [55.0, 131.5], [54.0, 205.5], [56.0, 147.0], [57.0, 180.0], [59.0, 82.0], [62.0, 76.5], [64.0, 155.0], [67.0, 96.0], [66.0, 172.0], [75.0, 155.0], [74.0, 128.0], [79.0, 80.0], [78.0, 42.5], [83.0, 90.0], [85.0, 80.0], [98.0, 92.0], [1.0, 4255.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 42.5, "minX": 1.0, "maxY": 4255.5, "series": [{"data": [[2.0, 4088.5], [3.0, 1837.0], [4.0, 1847.0], [5.0, 1513.5], [6.0, 2101.0], [7.0, 1004.0], [8.0, 1411.0], [9.0, 1497.0], [10.0, 1046.0], [11.0, 813.5], [12.0, 762.5], [13.0, 802.0], [14.0, 691.5], [15.0, 790.0], [16.0, 686.5], [17.0, 635.0], [18.0, 581.0], [19.0, 529.5], [20.0, 632.0], [21.0, 446.0], [22.0, 542.5], [23.0, 431.0], [24.0, 239.0], [25.0, 505.5], [26.0, 433.0], [27.0, 271.0], [28.0, 370.0], [29.0, 305.0], [30.0, 388.0], [31.0, 130.0], [32.0, 118.5], [33.0, 328.0], [34.0, 220.5], [35.0, 266.0], [37.0, 106.5], [36.0, 287.5], [39.0, 313.0], [38.0, 313.5], [41.0, 81.0], [42.0, 86.5], [43.0, 142.5], [44.0, 128.0], [45.0, 162.0], [46.0, 319.0], [47.0, 148.0], [48.0, 229.0], [49.0, 90.0], [51.0, 230.0], [50.0, 84.0], [52.0, 85.0], [53.0, 145.5], [55.0, 131.5], [54.0, 205.0], [56.0, 146.5], [57.0, 179.0], [59.0, 82.0], [62.0, 76.5], [64.0, 155.0], [67.0, 96.0], [66.0, 171.5], [75.0, 154.0], [74.0, 127.5], [79.0, 80.0], [78.0, 42.5], [83.0, 89.0], [85.0, 80.0], [98.0, 92.0], [1.0, 4255.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.183333333333334, "minX": 1.60246524E12, "maxY": 34.5, "series": [{"data": [[1.6024653E12, 25.266666666666666], [1.60246536E12, 34.5], [1.60246524E12, 10.183333333333334], [1.60246542E12, 17.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246542E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.983333333333333, "minX": 1.60246524E12, "maxY": 34.5, "series": [{"data": [[1.6024653E12, 25.266666666666666], [1.60246536E12, 34.5], [1.60246524E12, 9.983333333333333], [1.60246542E12, 17.95]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246542E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.983333333333333, "minX": 1.60246524E12, "maxY": 34.5, "series": [{"data": [[1.6024653E12, 25.266666666666666], [1.60246536E12, 34.5], [1.60246524E12, 9.983333333333333], [1.60246542E12, 17.95]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246542E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.983333333333333, "minX": 1.60246524E12, "maxY": 34.5, "series": [{"data": [[1.6024653E12, 25.266666666666666], [1.60246536E12, 34.5], [1.60246524E12, 9.983333333333333], [1.60246542E12, 17.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246542E12, "title": "Total Transactions Per Second"}},
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

