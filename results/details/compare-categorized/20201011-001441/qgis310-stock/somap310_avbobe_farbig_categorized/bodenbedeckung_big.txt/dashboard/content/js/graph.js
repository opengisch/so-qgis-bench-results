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
        data: {"result": {"minY": 19.0, "minX": 0.0, "maxY": 20009.0, "series": [{"data": [[0.0, 19.0], [0.1, 23.0], [0.2, 24.0], [0.3, 26.0], [0.4, 28.0], [0.5, 29.0], [0.6, 29.0], [0.7, 30.0], [0.8, 30.0], [0.9, 31.0], [1.0, 32.0], [1.1, 33.0], [1.2, 33.0], [1.3, 34.0], [1.4, 34.0], [1.5, 35.0], [1.6, 35.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 38.0], [2.7, 38.0], [2.8, 38.0], [2.9, 38.0], [3.0, 38.0], [3.1, 39.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 40.0], [3.6, 40.0], [3.7, 40.0], [3.8, 40.0], [3.9, 41.0], [4.0, 41.0], [4.1, 41.0], [4.2, 42.0], [4.3, 42.0], [4.4, 43.0], [4.5, 43.0], [4.6, 43.0], [4.7, 44.0], [4.8, 44.0], [4.9, 44.0], [5.0, 45.0], [5.1, 45.0], [5.2, 45.0], [5.3, 46.0], [5.4, 46.0], [5.5, 46.0], [5.6, 47.0], [5.7, 47.0], [5.8, 48.0], [5.9, 48.0], [6.0, 48.0], [6.1, 48.0], [6.2, 49.0], [6.3, 49.0], [6.4, 49.0], [6.5, 50.0], [6.6, 50.0], [6.7, 50.0], [6.8, 50.0], [6.9, 51.0], [7.0, 51.0], [7.1, 52.0], [7.2, 52.0], [7.3, 52.0], [7.4, 53.0], [7.5, 53.0], [7.6, 53.0], [7.7, 54.0], [7.8, 54.0], [7.9, 54.0], [8.0, 55.0], [8.1, 55.0], [8.2, 55.0], [8.3, 55.0], [8.4, 55.0], [8.5, 56.0], [8.6, 56.0], [8.7, 57.0], [8.8, 57.0], [8.9, 58.0], [9.0, 58.0], [9.1, 58.0], [9.2, 59.0], [9.3, 59.0], [9.4, 60.0], [9.5, 60.0], [9.6, 60.0], [9.7, 61.0], [9.8, 61.0], [9.9, 61.0], [10.0, 62.0], [10.1, 62.0], [10.2, 63.0], [10.3, 63.0], [10.4, 63.0], [10.5, 64.0], [10.6, 64.0], [10.7, 64.0], [10.8, 65.0], [10.9, 65.0], [11.0, 66.0], [11.1, 66.0], [11.2, 66.0], [11.3, 67.0], [11.4, 67.0], [11.5, 67.0], [11.6, 68.0], [11.7, 68.0], [11.8, 68.0], [11.9, 69.0], [12.0, 69.0], [12.1, 70.0], [12.2, 70.0], [12.3, 70.0], [12.4, 71.0], [12.5, 72.0], [12.6, 72.0], [12.7, 72.0], [12.8, 73.0], [12.9, 73.0], [13.0, 74.0], [13.1, 74.0], [13.2, 74.0], [13.3, 74.0], [13.4, 75.0], [13.5, 75.0], [13.6, 76.0], [13.7, 76.0], [13.8, 77.0], [13.9, 77.0], [14.0, 77.0], [14.1, 78.0], [14.2, 78.0], [14.3, 78.0], [14.4, 79.0], [14.5, 80.0], [14.6, 80.0], [14.7, 80.0], [14.8, 80.0], [14.9, 81.0], [15.0, 82.0], [15.1, 82.0], [15.2, 83.0], [15.3, 83.0], [15.4, 84.0], [15.5, 84.0], [15.6, 84.0], [15.7, 85.0], [15.8, 85.0], [15.9, 85.0], [16.0, 86.0], [16.1, 86.0], [16.2, 86.0], [16.3, 87.0], [16.4, 87.0], [16.5, 88.0], [16.6, 88.0], [16.7, 89.0], [16.8, 89.0], [16.9, 90.0], [17.0, 90.0], [17.1, 91.0], [17.2, 91.0], [17.3, 92.0], [17.4, 92.0], [17.5, 93.0], [17.6, 93.0], [17.7, 93.0], [17.8, 94.0], [17.9, 94.0], [18.0, 94.0], [18.1, 95.0], [18.2, 95.0], [18.3, 96.0], [18.4, 96.0], [18.5, 97.0], [18.6, 98.0], [18.7, 98.0], [18.8, 99.0], [18.9, 99.0], [19.0, 100.0], [19.1, 101.0], [19.2, 101.0], [19.3, 102.0], [19.4, 102.0], [19.5, 103.0], [19.6, 104.0], [19.7, 104.0], [19.8, 104.0], [19.9, 105.0], [20.0, 106.0], [20.1, 106.0], [20.2, 107.0], [20.3, 107.0], [20.4, 108.0], [20.5, 108.0], [20.6, 109.0], [20.7, 109.0], [20.8, 110.0], [20.9, 111.0], [21.0, 111.0], [21.1, 111.0], [21.2, 112.0], [21.3, 113.0], [21.4, 113.0], [21.5, 114.0], [21.6, 114.0], [21.7, 115.0], [21.8, 115.0], [21.9, 116.0], [22.0, 116.0], [22.1, 117.0], [22.2, 117.0], [22.3, 118.0], [22.4, 119.0], [22.5, 119.0], [22.6, 120.0], [22.7, 121.0], [22.8, 122.0], [22.9, 123.0], [23.0, 123.0], [23.1, 124.0], [23.2, 126.0], [23.3, 127.0], [23.4, 128.0], [23.5, 128.0], [23.6, 129.0], [23.7, 130.0], [23.8, 130.0], [23.9, 132.0], [24.0, 133.0], [24.1, 133.0], [24.2, 134.0], [24.3, 135.0], [24.4, 136.0], [24.5, 137.0], [24.6, 138.0], [24.7, 138.0], [24.8, 139.0], [24.9, 140.0], [25.0, 141.0], [25.1, 141.0], [25.2, 142.0], [25.3, 143.0], [25.4, 145.0], [25.5, 145.0], [25.6, 146.0], [25.7, 147.0], [25.8, 148.0], [25.9, 149.0], [26.0, 150.0], [26.1, 151.0], [26.2, 151.0], [26.3, 151.0], [26.4, 152.0], [26.5, 153.0], [26.6, 153.0], [26.7, 154.0], [26.8, 155.0], [26.9, 156.0], [27.0, 156.0], [27.1, 158.0], [27.2, 158.0], [27.3, 159.0], [27.4, 160.0], [27.5, 160.0], [27.6, 161.0], [27.7, 162.0], [27.8, 163.0], [27.9, 163.0], [28.0, 164.0], [28.1, 164.0], [28.2, 166.0], [28.3, 166.0], [28.4, 167.0], [28.5, 168.0], [28.6, 170.0], [28.7, 171.0], [28.8, 172.0], [28.9, 172.0], [29.0, 173.0], [29.1, 174.0], [29.2, 174.0], [29.3, 175.0], [29.4, 176.0], [29.5, 177.0], [29.6, 178.0], [29.7, 178.0], [29.8, 179.0], [29.9, 180.0], [30.0, 180.0], [30.1, 181.0], [30.2, 182.0], [30.3, 183.0], [30.4, 183.0], [30.5, 184.0], [30.6, 185.0], [30.7, 185.0], [30.8, 185.0], [30.9, 186.0], [31.0, 187.0], [31.1, 187.0], [31.2, 188.0], [31.3, 188.0], [31.4, 189.0], [31.5, 189.0], [31.6, 190.0], [31.7, 192.0], [31.8, 193.0], [31.9, 193.0], [32.0, 195.0], [32.1, 195.0], [32.2, 196.0], [32.3, 197.0], [32.4, 199.0], [32.5, 199.0], [32.6, 200.0], [32.7, 201.0], [32.8, 201.0], [32.9, 202.0], [33.0, 202.0], [33.1, 203.0], [33.2, 203.0], [33.3, 204.0], [33.4, 205.0], [33.5, 206.0], [33.6, 206.0], [33.7, 207.0], [33.8, 208.0], [33.9, 209.0], [34.0, 210.0], [34.1, 211.0], [34.2, 212.0], [34.3, 213.0], [34.4, 214.0], [34.5, 215.0], [34.6, 215.0], [34.7, 216.0], [34.8, 218.0], [34.9, 219.0], [35.0, 220.0], [35.1, 221.0], [35.2, 221.0], [35.3, 223.0], [35.4, 224.0], [35.5, 224.0], [35.6, 225.0], [35.7, 225.0], [35.8, 226.0], [35.9, 227.0], [36.0, 229.0], [36.1, 230.0], [36.2, 231.0], [36.3, 231.0], [36.4, 232.0], [36.5, 234.0], [36.6, 235.0], [36.7, 236.0], [36.8, 237.0], [36.9, 240.0], [37.0, 241.0], [37.1, 242.0], [37.2, 243.0], [37.3, 244.0], [37.4, 245.0], [37.5, 246.0], [37.6, 246.0], [37.7, 247.0], [37.8, 248.0], [37.9, 250.0], [38.0, 251.0], [38.1, 252.0], [38.2, 252.0], [38.3, 254.0], [38.4, 254.0], [38.5, 255.0], [38.6, 256.0], [38.7, 258.0], [38.8, 259.0], [38.9, 261.0], [39.0, 261.0], [39.1, 262.0], [39.2, 265.0], [39.3, 266.0], [39.4, 266.0], [39.5, 267.0], [39.6, 268.0], [39.7, 269.0], [39.8, 270.0], [39.9, 271.0], [40.0, 272.0], [40.1, 273.0], [40.2, 274.0], [40.3, 275.0], [40.4, 276.0], [40.5, 277.0], [40.6, 279.0], [40.7, 280.0], [40.8, 280.0], [40.9, 281.0], [41.0, 282.0], [41.1, 284.0], [41.2, 285.0], [41.3, 286.0], [41.4, 287.0], [41.5, 289.0], [41.6, 289.0], [41.7, 290.0], [41.8, 291.0], [41.9, 292.0], [42.0, 293.0], [42.1, 294.0], [42.2, 295.0], [42.3, 296.0], [42.4, 296.0], [42.5, 297.0], [42.6, 297.0], [42.7, 298.0], [42.8, 299.0], [42.9, 300.0], [43.0, 301.0], [43.1, 302.0], [43.2, 303.0], [43.3, 303.0], [43.4, 305.0], [43.5, 305.0], [43.6, 306.0], [43.7, 308.0], [43.8, 308.0], [43.9, 309.0], [44.0, 310.0], [44.1, 310.0], [44.2, 311.0], [44.3, 312.0], [44.4, 313.0], [44.5, 314.0], [44.6, 314.0], [44.7, 315.0], [44.8, 316.0], [44.9, 316.0], [45.0, 317.0], [45.1, 318.0], [45.2, 319.0], [45.3, 320.0], [45.4, 320.0], [45.5, 321.0], [45.6, 321.0], [45.7, 322.0], [45.8, 322.0], [45.9, 323.0], [46.0, 323.0], [46.1, 323.0], [46.2, 324.0], [46.3, 324.0], [46.4, 325.0], [46.5, 325.0], [46.6, 326.0], [46.7, 327.0], [46.8, 327.0], [46.9, 328.0], [47.0, 329.0], [47.1, 329.0], [47.2, 329.0], [47.3, 330.0], [47.4, 330.0], [47.5, 331.0], [47.6, 331.0], [47.7, 331.0], [47.8, 333.0], [47.9, 333.0], [48.0, 334.0], [48.1, 335.0], [48.2, 335.0], [48.3, 336.0], [48.4, 336.0], [48.5, 337.0], [48.6, 337.0], [48.7, 338.0], [48.8, 339.0], [48.9, 339.0], [49.0, 340.0], [49.1, 341.0], [49.2, 342.0], [49.3, 343.0], [49.4, 343.0], [49.5, 343.0], [49.6, 344.0], [49.7, 344.0], [49.8, 345.0], [49.9, 345.0], [50.0, 346.0], [50.1, 346.0], [50.2, 347.0], [50.3, 348.0], [50.4, 348.0], [50.5, 349.0], [50.6, 350.0], [50.7, 350.0], [50.8, 351.0], [50.9, 352.0], [51.0, 353.0], [51.1, 354.0], [51.2, 354.0], [51.3, 355.0], [51.4, 356.0], [51.5, 356.0], [51.6, 357.0], [51.7, 358.0], [51.8, 358.0], [51.9, 359.0], [52.0, 359.0], [52.1, 360.0], [52.2, 361.0], [52.3, 361.0], [52.4, 362.0], [52.5, 363.0], [52.6, 364.0], [52.7, 365.0], [52.8, 365.0], [52.9, 366.0], [53.0, 366.0], [53.1, 367.0], [53.2, 368.0], [53.3, 368.0], [53.4, 369.0], [53.5, 370.0], [53.6, 370.0], [53.7, 371.0], [53.8, 371.0], [53.9, 372.0], [54.0, 373.0], [54.1, 373.0], [54.2, 375.0], [54.3, 376.0], [54.4, 376.0], [54.5, 377.0], [54.6, 377.0], [54.7, 378.0], [54.8, 379.0], [54.9, 380.0], [55.0, 381.0], [55.1, 381.0], [55.2, 382.0], [55.3, 383.0], [55.4, 384.0], [55.5, 384.0], [55.6, 386.0], [55.7, 386.0], [55.8, 387.0], [55.9, 388.0], [56.0, 390.0], [56.1, 391.0], [56.2, 391.0], [56.3, 392.0], [56.4, 393.0], [56.5, 393.0], [56.6, 395.0], [56.7, 396.0], [56.8, 397.0], [56.9, 398.0], [57.0, 400.0], [57.1, 401.0], [57.2, 402.0], [57.3, 402.0], [57.4, 404.0], [57.5, 404.0], [57.6, 405.0], [57.7, 406.0], [57.8, 407.0], [57.9, 407.0], [58.0, 409.0], [58.1, 410.0], [58.2, 411.0], [58.3, 412.0], [58.4, 412.0], [58.5, 414.0], [58.6, 415.0], [58.7, 416.0], [58.8, 417.0], [58.9, 417.0], [59.0, 418.0], [59.1, 419.0], [59.2, 421.0], [59.3, 422.0], [59.4, 422.0], [59.5, 424.0], [59.6, 425.0], [59.7, 425.0], [59.8, 426.0], [59.9, 427.0], [60.0, 428.0], [60.1, 429.0], [60.2, 430.0], [60.3, 431.0], [60.4, 433.0], [60.5, 434.0], [60.6, 435.0], [60.7, 436.0], [60.8, 437.0], [60.9, 438.0], [61.0, 439.0], [61.1, 440.0], [61.2, 441.0], [61.3, 442.0], [61.4, 443.0], [61.5, 445.0], [61.6, 447.0], [61.7, 448.0], [61.8, 450.0], [61.9, 452.0], [62.0, 453.0], [62.1, 455.0], [62.2, 457.0], [62.3, 458.0], [62.4, 459.0], [62.5, 462.0], [62.6, 464.0], [62.7, 466.0], [62.8, 468.0], [62.9, 471.0], [63.0, 472.0], [63.1, 476.0], [63.2, 478.0], [63.3, 479.0], [63.4, 481.0], [63.5, 482.0], [63.6, 484.0], [63.7, 486.0], [63.8, 487.0], [63.9, 489.0], [64.0, 490.0], [64.1, 493.0], [64.2, 496.0], [64.3, 498.0], [64.4, 499.0], [64.5, 500.0], [64.6, 504.0], [64.7, 505.0], [64.8, 506.0], [64.9, 508.0], [65.0, 509.0], [65.1, 513.0], [65.2, 513.0], [65.3, 516.0], [65.4, 516.0], [65.5, 517.0], [65.6, 519.0], [65.7, 520.0], [65.8, 522.0], [65.9, 524.0], [66.0, 526.0], [66.1, 527.0], [66.2, 530.0], [66.3, 532.0], [66.4, 533.0], [66.5, 535.0], [66.6, 540.0], [66.7, 541.0], [66.8, 544.0], [66.9, 547.0], [67.0, 548.0], [67.1, 552.0], [67.2, 554.0], [67.3, 557.0], [67.4, 559.0], [67.5, 561.0], [67.6, 563.0], [67.7, 565.0], [67.8, 567.0], [67.9, 569.0], [68.0, 571.0], [68.1, 573.0], [68.2, 574.0], [68.3, 575.0], [68.4, 578.0], [68.5, 580.0], [68.6, 581.0], [68.7, 583.0], [68.8, 584.0], [68.9, 585.0], [69.0, 587.0], [69.1, 588.0], [69.2, 589.0], [69.3, 589.0], [69.4, 589.0], [69.5, 591.0], [69.6, 591.0], [69.7, 592.0], [69.8, 593.0], [69.9, 594.0], [70.0, 595.0], [70.1, 596.0], [70.2, 597.0], [70.3, 598.0], [70.4, 599.0], [70.5, 600.0], [70.6, 601.0], [70.7, 602.0], [70.8, 603.0], [70.9, 604.0], [71.0, 604.0], [71.1, 606.0], [71.2, 606.0], [71.3, 607.0], [71.4, 608.0], [71.5, 609.0], [71.6, 610.0], [71.7, 611.0], [71.8, 612.0], [71.9, 612.0], [72.0, 613.0], [72.1, 613.0], [72.2, 614.0], [72.3, 616.0], [72.4, 617.0], [72.5, 617.0], [72.6, 618.0], [72.7, 619.0], [72.8, 620.0], [72.9, 621.0], [73.0, 621.0], [73.1, 622.0], [73.2, 623.0], [73.3, 624.0], [73.4, 625.0], [73.5, 625.0], [73.6, 626.0], [73.7, 626.0], [73.8, 628.0], [73.9, 628.0], [74.0, 629.0], [74.1, 630.0], [74.2, 632.0], [74.3, 633.0], [74.4, 634.0], [74.5, 635.0], [74.6, 636.0], [74.7, 637.0], [74.8, 638.0], [74.9, 639.0], [75.0, 640.0], [75.1, 640.0], [75.2, 641.0], [75.3, 642.0], [75.4, 643.0], [75.5, 644.0], [75.6, 645.0], [75.7, 646.0], [75.8, 647.0], [75.9, 648.0], [76.0, 649.0], [76.1, 650.0], [76.2, 651.0], [76.3, 652.0], [76.4, 653.0], [76.5, 655.0], [76.6, 656.0], [76.7, 658.0], [76.8, 659.0], [76.9, 660.0], [77.0, 661.0], [77.1, 663.0], [77.2, 666.0], [77.3, 668.0], [77.4, 669.0], [77.5, 670.0], [77.6, 672.0], [77.7, 674.0], [77.8, 678.0], [77.9, 680.0], [78.0, 681.0], [78.1, 684.0], [78.2, 686.0], [78.3, 688.0], [78.4, 691.0], [78.5, 694.0], [78.6, 697.0], [78.7, 698.0], [78.8, 700.0], [78.9, 700.0], [79.0, 703.0], [79.1, 704.0], [79.2, 706.0], [79.3, 709.0], [79.4, 711.0], [79.5, 714.0], [79.6, 715.0], [79.7, 717.0], [79.8, 718.0], [79.9, 721.0], [80.0, 722.0], [80.1, 724.0], [80.2, 728.0], [80.3, 731.0], [80.4, 732.0], [80.5, 735.0], [80.6, 737.0], [80.7, 739.0], [80.8, 743.0], [80.9, 748.0], [81.0, 752.0], [81.1, 755.0], [81.2, 756.0], [81.3, 758.0], [81.4, 765.0], [81.5, 768.0], [81.6, 771.0], [81.7, 774.0], [81.8, 776.0], [81.9, 778.0], [82.0, 780.0], [82.1, 782.0], [82.2, 788.0], [82.3, 789.0], [82.4, 795.0], [82.5, 799.0], [82.6, 802.0], [82.7, 807.0], [82.8, 810.0], [82.9, 812.0], [83.0, 817.0], [83.1, 825.0], [83.2, 830.0], [83.3, 835.0], [83.4, 838.0], [83.5, 840.0], [83.6, 844.0], [83.7, 852.0], [83.8, 856.0], [83.9, 861.0], [84.0, 864.0], [84.1, 866.0], [84.2, 871.0], [84.3, 873.0], [84.4, 875.0], [84.5, 877.0], [84.6, 880.0], [84.7, 881.0], [84.8, 884.0], [84.9, 886.0], [85.0, 888.0], [85.1, 890.0], [85.2, 891.0], [85.3, 895.0], [85.4, 897.0], [85.5, 900.0], [85.6, 902.0], [85.7, 905.0], [85.8, 906.0], [85.9, 908.0], [86.0, 911.0], [86.1, 913.0], [86.2, 914.0], [86.3, 916.0], [86.4, 917.0], [86.5, 920.0], [86.6, 920.0], [86.7, 921.0], [86.8, 922.0], [86.9, 925.0], [87.0, 926.0], [87.1, 928.0], [87.2, 931.0], [87.3, 932.0], [87.4, 934.0], [87.5, 936.0], [87.6, 938.0], [87.7, 939.0], [87.8, 941.0], [87.9, 944.0], [88.0, 946.0], [88.1, 950.0], [88.2, 952.0], [88.3, 955.0], [88.4, 957.0], [88.5, 960.0], [88.6, 962.0], [88.7, 964.0], [88.8, 967.0], [88.9, 969.0], [89.0, 973.0], [89.1, 975.0], [89.2, 979.0], [89.3, 983.0], [89.4, 988.0], [89.5, 991.0], [89.6, 999.0], [89.7, 1005.0], [89.8, 1005.0], [89.9, 1013.0], [90.0, 1023.0], [90.1, 1040.0], [90.2, 1046.0], [90.3, 1058.0], [90.4, 1071.0], [90.5, 1074.0], [90.6, 1104.0], [90.7, 1107.0], [90.8, 1119.0], [90.9, 1132.0], [91.0, 1136.0], [91.1, 1142.0], [91.2, 1150.0], [91.3, 1159.0], [91.4, 1163.0], [91.5, 1166.0], [91.6, 1172.0], [91.7, 1177.0], [91.8, 1180.0], [91.9, 1184.0], [92.0, 1189.0], [92.1, 1193.0], [92.2, 1196.0], [92.3, 1201.0], [92.4, 1209.0], [92.5, 1215.0], [92.6, 1218.0], [92.7, 1224.0], [92.8, 1230.0], [92.9, 1232.0], [93.0, 1240.0], [93.1, 1244.0], [93.2, 1256.0], [93.3, 1264.0], [93.4, 1273.0], [93.5, 1285.0], [93.6, 1295.0], [93.7, 1309.0], [93.8, 1345.0], [93.9, 1360.0], [94.0, 1378.0], [94.1, 1393.0], [94.2, 1421.0], [94.3, 1450.0], [94.4, 1492.0], [94.5, 1515.0], [94.6, 1570.0], [94.7, 1594.0], [94.8, 1625.0], [94.9, 1628.0], [95.0, 1720.0], [95.1, 1786.0], [95.2, 1866.0], [95.3, 1903.0], [95.4, 1958.0], [95.5, 2027.0], [95.6, 2095.0], [95.7, 2118.0], [95.8, 2162.0], [95.9, 2251.0], [96.0, 2396.0], [96.1, 2456.0], [96.2, 2489.0], [96.3, 2568.0], [96.4, 2632.0], [96.5, 2709.0], [96.6, 2764.0], [96.7, 2799.0], [96.8, 2879.0], [96.9, 2924.0], [97.0, 2959.0], [97.1, 3032.0], [97.2, 3199.0], [97.3, 3315.0], [97.4, 3520.0], [97.5, 3703.0], [97.6, 3748.0], [97.7, 3793.0], [97.8, 3821.0], [97.9, 3881.0], [98.0, 3925.0], [98.1, 4424.0], [98.2, 4517.0], [98.3, 4711.0], [98.4, 5221.0], [98.5, 5380.0], [98.6, 5936.0], [98.7, 6738.0], [98.8, 7660.0], [98.9, 7805.0], [99.0, 8016.0], [99.1, 8142.0], [99.2, 8424.0], [99.3, 8613.0], [99.4, 9844.0], [99.5, 9981.0], [99.6, 10236.0], [99.7, 10507.0], [99.8, 10632.0], [99.9, 10793.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 983.0, "series": [{"data": [[0.0, 983.0], [600.0, 431.0], [700.0, 194.0], [800.0, 154.0], [900.0, 215.0], [1000.0, 50.0], [1100.0, 88.0], [1200.0, 69.0], [1300.0, 28.0], [1400.0, 16.0], [1500.0, 14.0], [1600.0, 14.0], [1700.0, 6.0], [1800.0, 10.0], [1900.0, 8.0], [2000.0, 8.0], [2100.0, 13.0], [2200.0, 4.0], [2300.0, 4.0], [2400.0, 10.0], [2500.0, 7.0], [2600.0, 8.0], [2700.0, 11.0], [2800.0, 6.0], [2900.0, 12.0], [3000.0, 6.0], [3100.0, 2.0], [3200.0, 3.0], [3300.0, 4.0], [3400.0, 3.0], [3500.0, 1.0], [3700.0, 11.0], [3600.0, 4.0], [3800.0, 14.0], [3900.0, 3.0], [4000.0, 1.0], [4300.0, 1.0], [4100.0, 1.0], [4400.0, 5.0], [4600.0, 2.0], [4500.0, 3.0], [4700.0, 1.0], [4800.0, 1.0], [5000.0, 1.0], [5100.0, 1.0], [4900.0, 1.0], [5300.0, 5.0], [5200.0, 2.0], [5600.0, 1.0], [5500.0, 2.0], [5800.0, 1.0], [5900.0, 2.0], [6100.0, 1.0], [6600.0, 1.0], [6400.0, 1.0], [6700.0, 1.0], [6800.0, 1.0], [7000.0, 2.0], [7200.0, 1.0], [7600.0, 2.0], [7700.0, 3.0], [7800.0, 4.0], [8000.0, 4.0], [8100.0, 5.0], [8700.0, 2.0], [8400.0, 3.0], [8500.0, 3.0], [8200.0, 2.0], [8600.0, 1.0], [9200.0, 1.0], [8800.0, 1.0], [10100.0, 1.0], [9900.0, 6.0], [9800.0, 1.0], [10000.0, 3.0], [10200.0, 2.0], [10600.0, 5.0], [10400.0, 2.0], [10700.0, 4.0], [10500.0, 2.0], [10300.0, 1.0], [12800.0, 1.0], [14100.0, 1.0], [15700.0, 1.0], [19800.0, 1.0], [20000.0, 1.0], [100.0, 705.0], [200.0, 536.0], [300.0, 731.0], [400.0, 389.0], [500.0, 313.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 20000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 287.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3348.0, "series": [{"data": [[0.0, 3348.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1555.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 287.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.949095022624434, "minX": 1.60237554E12, "maxY": 10.0, "series": [{"data": [[1.60237572E12, 10.0], [1.60237554E12, 9.993220338983054], [1.60237584E12, 9.949095022624434], [1.60237566E12, 10.0], [1.60237578E12, 10.0], [1.6023756E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237584E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 256.5, "minX": 1.0, "maxY": 7678.0, "series": [{"data": [[8.0, 808.0], [4.0, 711.0], [2.0, 7678.0], [1.0, 7660.0], [9.0, 256.5], [10.0, 624.6619038424403], [5.0, 550.0], [6.0, 262.0], [3.0, 805.0], [7.0, 529.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99055876685938, 627.2001926782266]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4457.05, "minX": 1.60237554E12, "maxY": 5186234.05, "series": [{"data": [[1.60237572E12, 4356204.783333333], [1.60237554E12, 2269088.75], [1.60237584E12, 3591646.433333333], [1.60237566E12, 4168156.0], [1.60237578E12, 5186234.05], [1.6023756E12, 4071027.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237572E12, 9972.2], [1.60237554E12, 4457.05], [1.60237584E12, 6956.35], [1.60237566E12, 6792.766666666666], [1.60237578E12, 6584.583333333333], [1.6023756E12, 5178.683333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237584E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 453.4693251533746, "minX": 1.60237554E12, "maxY": 877.348837209303, "series": [{"data": [[1.60237572E12, 453.4693251533746], [1.60237554E12, 539.1322033898305], [1.60237584E12, 605.8857466063354], [1.60237566E12, 695.2118055555557], [1.60237578E12, 704.5058139534889], [1.6023756E12, 877.348837209303]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237584E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 452.124233128834, "minX": 1.60237554E12, "maxY": 874.941860465116, "series": [{"data": [[1.60237572E12, 452.124233128834], [1.60237554E12, 537.2694915254241], [1.60237584E12, 604.6572398190037], [1.60237566E12, 693.1967592592598], [1.60237578E12, 702.6581395348843], [1.6023756E12, 874.941860465116]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237584E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00920245398773007, "minX": 1.60237554E12, "maxY": 0.11694915254237297, "series": [{"data": [[1.60237572E12, 0.00920245398773007], [1.60237554E12, 0.11694915254237297], [1.60237584E12, 0.012443438914027152], [1.60237566E12, 0.010416666666666668], [1.60237578E12, 0.012790697674418611], [1.6023756E12, 0.020348837209302306]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237584E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 19.0, "minX": 1.60237554E12, "maxY": 20009.0, "series": [{"data": [[1.60237572E12, 15759.0], [1.60237554E12, 10645.0], [1.60237584E12, 20009.0], [1.60237566E12, 19819.0], [1.60237578E12, 14139.0], [1.6023756E12, 10706.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237572E12, 30.744999688863757], [1.60237554E12, 37.0], [1.60237584E12, 30.929999577999116], [1.60237566E12, 33.78499979376793], [1.60237578E12, 28.748999794721605], [1.6023756E12, 29.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237572E12, 31.9195001244545], [1.60237554E12, 37.0], [1.60237584E12, 31.0], [1.60237566E12, 34.0], [1.60237578E12, 29.0], [1.6023756E12, 29.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237572E12, 31.397499844431877], [1.60237554E12, 37.0], [1.60237584E12, 31.0], [1.60237566E12, 34.0], [1.60237578E12, 29.0], [1.6023756E12, 29.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237572E12, 23.0], [1.60237554E12, 30.0], [1.60237584E12, 19.0], [1.60237566E12, 20.0], [1.60237578E12, 20.0], [1.6023756E12, 23.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237572E12, 232.5], [1.60237554E12, 277.0], [1.60237584E12, 320.5], [1.60237566E12, 422.0], [1.60237578E12, 513.5], [1.6023756E12, 517.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237584E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 76.0, "minX": 1.0, "maxY": 1950.5, "series": [{"data": [[33.0, 321.5], [2.0, 1672.0], [32.0, 225.5], [34.0, 139.0], [35.0, 76.0], [36.0, 251.0], [37.0, 118.0], [38.0, 183.5], [41.0, 199.0], [43.0, 126.0], [45.0, 146.0], [44.0, 94.5], [46.0, 110.0], [3.0, 633.5], [48.0, 125.0], [52.0, 108.0], [59.0, 100.0], [4.0, 1134.5], [5.0, 525.0], [6.0, 529.5], [7.0, 388.0], [8.0, 358.0], [9.0, 650.0], [10.0, 608.5], [11.0, 600.0], [12.0, 726.5], [13.0, 640.0], [14.0, 611.0], [15.0, 583.0], [1.0, 1950.5], [16.0, 461.5], [17.0, 426.0], [18.0, 486.5], [19.0, 435.0], [20.0, 398.5], [21.0, 312.0], [22.0, 311.0], [23.0, 346.0], [24.0, 326.0], [25.0, 325.0], [26.0, 274.0], [27.0, 365.0], [28.0, 239.0], [29.0, 210.0], [30.0, 269.5], [31.0, 280.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 59.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 75.0, "minX": 1.0, "maxY": 1948.0, "series": [{"data": [[33.0, 321.5], [2.0, 1670.5], [32.0, 224.5], [34.0, 137.0], [35.0, 75.0], [36.0, 250.5], [37.0, 115.5], [38.0, 183.0], [41.0, 199.0], [43.0, 125.0], [45.0, 143.5], [44.0, 93.0], [46.0, 108.0], [3.0, 628.0], [48.0, 124.5], [52.0, 107.0], [59.0, 99.0], [4.0, 1134.0], [5.0, 524.0], [6.0, 526.5], [7.0, 386.0], [8.0, 357.5], [9.0, 649.0], [10.0, 605.5], [11.0, 597.0], [12.0, 721.0], [13.0, 633.0], [14.0, 610.0], [15.0, 579.0], [1.0, 1948.0], [16.0, 460.0], [17.0, 425.0], [18.0, 486.0], [19.0, 432.5], [20.0, 398.0], [21.0, 307.0], [22.0, 310.0], [23.0, 345.0], [24.0, 324.5], [25.0, 325.0], [26.0, 273.0], [27.0, 363.0], [28.0, 238.0], [29.0, 208.0], [30.0, 268.0], [31.0, 278.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 59.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.60237554E12, "maxY": 21.733333333333334, "series": [{"data": [[1.60237572E12, 21.733333333333334], [1.60237554E12, 10.0], [1.60237584E12, 14.566666666666666], [1.60237566E12, 14.4], [1.60237578E12, 14.333333333333334], [1.6023756E12, 11.466666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237584E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.833333333333334, "minX": 1.60237554E12, "maxY": 21.733333333333334, "series": [{"data": [[1.60237572E12, 21.733333333333334], [1.60237554E12, 9.833333333333334], [1.60237584E12, 14.733333333333333], [1.60237566E12, 14.4], [1.60237578E12, 14.333333333333334], [1.6023756E12, 11.466666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237584E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.833333333333334, "minX": 1.60237554E12, "maxY": 21.733333333333334, "series": [{"data": [[1.60237572E12, 21.733333333333334], [1.60237554E12, 9.833333333333334], [1.60237584E12, 14.733333333333333], [1.60237566E12, 14.4], [1.60237578E12, 14.333333333333334], [1.6023756E12, 11.466666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237584E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.833333333333334, "minX": 1.60237554E12, "maxY": 21.733333333333334, "series": [{"data": [[1.60237572E12, 21.733333333333334], [1.60237554E12, 9.833333333333334], [1.60237584E12, 14.733333333333333], [1.60237566E12, 14.4], [1.60237578E12, 14.333333333333334], [1.6023756E12, 11.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237584E12, "title": "Total Transactions Per Second"}},
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

