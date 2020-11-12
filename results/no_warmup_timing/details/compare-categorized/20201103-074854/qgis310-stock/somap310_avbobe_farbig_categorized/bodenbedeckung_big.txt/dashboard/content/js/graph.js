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
        data: {"result": {"minY": 19.0, "minX": 0.0, "maxY": 21261.0, "series": [{"data": [[0.0, 19.0], [0.1, 25.0], [0.2, 26.0], [0.3, 28.0], [0.4, 29.0], [0.5, 31.0], [0.6, 31.0], [0.7, 32.0], [0.8, 33.0], [0.9, 33.0], [1.0, 34.0], [1.1, 34.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 37.0], [2.0, 37.0], [2.1, 37.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 39.0], [2.6, 39.0], [2.7, 39.0], [2.8, 39.0], [2.9, 39.0], [3.0, 40.0], [3.1, 40.0], [3.2, 41.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 42.0], [3.7, 42.0], [3.8, 42.0], [3.9, 43.0], [4.0, 43.0], [4.1, 43.0], [4.2, 43.0], [4.3, 44.0], [4.4, 44.0], [4.5, 44.0], [4.6, 45.0], [4.7, 45.0], [4.8, 45.0], [4.9, 46.0], [5.0, 46.0], [5.1, 47.0], [5.2, 47.0], [5.3, 47.0], [5.4, 48.0], [5.5, 48.0], [5.6, 49.0], [5.7, 49.0], [5.8, 50.0], [5.9, 50.0], [6.0, 51.0], [6.1, 51.0], [6.2, 52.0], [6.3, 52.0], [6.4, 52.0], [6.5, 52.0], [6.6, 53.0], [6.7, 53.0], [6.8, 54.0], [6.9, 54.0], [7.0, 55.0], [7.1, 55.0], [7.2, 55.0], [7.3, 56.0], [7.4, 57.0], [7.5, 57.0], [7.6, 57.0], [7.7, 58.0], [7.8, 58.0], [7.9, 59.0], [8.0, 60.0], [8.1, 60.0], [8.2, 61.0], [8.3, 61.0], [8.4, 62.0], [8.5, 62.0], [8.6, 64.0], [8.7, 64.0], [8.8, 64.0], [8.9, 65.0], [9.0, 66.0], [9.1, 66.0], [9.2, 67.0], [9.3, 68.0], [9.4, 68.0], [9.5, 69.0], [9.6, 69.0], [9.7, 70.0], [9.8, 70.0], [9.9, 71.0], [10.0, 71.0], [10.1, 71.0], [10.2, 72.0], [10.3, 72.0], [10.4, 73.0], [10.5, 73.0], [10.6, 74.0], [10.7, 74.0], [10.8, 74.0], [10.9, 76.0], [11.0, 76.0], [11.1, 76.0], [11.2, 77.0], [11.3, 77.0], [11.4, 78.0], [11.5, 78.0], [11.6, 79.0], [11.7, 79.0], [11.8, 79.0], [11.9, 80.0], [12.0, 80.0], [12.1, 81.0], [12.2, 82.0], [12.3, 82.0], [12.4, 83.0], [12.5, 83.0], [12.6, 83.0], [12.7, 84.0], [12.8, 84.0], [12.9, 85.0], [13.0, 85.0], [13.1, 86.0], [13.2, 86.0], [13.3, 87.0], [13.4, 87.0], [13.5, 87.0], [13.6, 88.0], [13.7, 88.0], [13.8, 89.0], [13.9, 90.0], [14.0, 90.0], [14.1, 91.0], [14.2, 91.0], [14.3, 92.0], [14.4, 93.0], [14.5, 93.0], [14.6, 93.0], [14.7, 94.0], [14.8, 95.0], [14.9, 95.0], [15.0, 96.0], [15.1, 96.0], [15.2, 97.0], [15.3, 97.0], [15.4, 98.0], [15.5, 98.0], [15.6, 98.0], [15.7, 98.0], [15.8, 99.0], [15.9, 100.0], [16.0, 100.0], [16.1, 101.0], [16.2, 101.0], [16.3, 101.0], [16.4, 102.0], [16.5, 103.0], [16.6, 103.0], [16.7, 103.0], [16.8, 104.0], [16.9, 104.0], [17.0, 105.0], [17.1, 105.0], [17.2, 105.0], [17.3, 106.0], [17.4, 106.0], [17.5, 106.0], [17.6, 107.0], [17.7, 108.0], [17.8, 108.0], [17.9, 108.0], [18.0, 109.0], [18.1, 109.0], [18.2, 110.0], [18.3, 110.0], [18.4, 111.0], [18.5, 111.0], [18.6, 112.0], [18.7, 113.0], [18.8, 113.0], [18.9, 114.0], [19.0, 115.0], [19.1, 115.0], [19.2, 116.0], [19.3, 116.0], [19.4, 117.0], [19.5, 117.0], [19.6, 118.0], [19.7, 118.0], [19.8, 118.0], [19.9, 119.0], [20.0, 119.0], [20.1, 120.0], [20.2, 120.0], [20.3, 121.0], [20.4, 121.0], [20.5, 122.0], [20.6, 122.0], [20.7, 123.0], [20.8, 123.0], [20.9, 125.0], [21.0, 125.0], [21.1, 126.0], [21.2, 127.0], [21.3, 127.0], [21.4, 128.0], [21.5, 129.0], [21.6, 131.0], [21.7, 131.0], [21.8, 132.0], [21.9, 132.0], [22.0, 134.0], [22.1, 134.0], [22.2, 135.0], [22.3, 135.0], [22.4, 136.0], [22.5, 136.0], [22.6, 137.0], [22.7, 138.0], [22.8, 138.0], [22.9, 139.0], [23.0, 139.0], [23.1, 140.0], [23.2, 140.0], [23.3, 141.0], [23.4, 142.0], [23.5, 142.0], [23.6, 142.0], [23.7, 143.0], [23.8, 145.0], [23.9, 145.0], [24.0, 145.0], [24.1, 146.0], [24.2, 146.0], [24.3, 147.0], [24.4, 147.0], [24.5, 148.0], [24.6, 149.0], [24.7, 150.0], [24.8, 150.0], [24.9, 151.0], [25.0, 152.0], [25.1, 153.0], [25.2, 153.0], [25.3, 155.0], [25.4, 155.0], [25.5, 156.0], [25.6, 157.0], [25.7, 158.0], [25.8, 158.0], [25.9, 159.0], [26.0, 160.0], [26.1, 161.0], [26.2, 161.0], [26.3, 162.0], [26.4, 163.0], [26.5, 163.0], [26.6, 164.0], [26.7, 164.0], [26.8, 165.0], [26.9, 167.0], [27.0, 167.0], [27.1, 168.0], [27.2, 169.0], [27.3, 170.0], [27.4, 170.0], [27.5, 171.0], [27.6, 171.0], [27.7, 172.0], [27.8, 172.0], [27.9, 173.0], [28.0, 174.0], [28.1, 174.0], [28.2, 175.0], [28.3, 175.0], [28.4, 176.0], [28.5, 177.0], [28.6, 178.0], [28.7, 178.0], [28.8, 179.0], [28.9, 179.0], [29.0, 180.0], [29.1, 181.0], [29.2, 182.0], [29.3, 183.0], [29.4, 183.0], [29.5, 184.0], [29.6, 184.0], [29.7, 185.0], [29.8, 186.0], [29.9, 187.0], [30.0, 188.0], [30.1, 189.0], [30.2, 190.0], [30.3, 190.0], [30.4, 191.0], [30.5, 192.0], [30.6, 192.0], [30.7, 193.0], [30.8, 193.0], [30.9, 195.0], [31.0, 196.0], [31.1, 197.0], [31.2, 198.0], [31.3, 198.0], [31.4, 199.0], [31.5, 199.0], [31.6, 200.0], [31.7, 201.0], [31.8, 201.0], [31.9, 202.0], [32.0, 203.0], [32.1, 204.0], [32.2, 205.0], [32.3, 205.0], [32.4, 207.0], [32.5, 208.0], [32.6, 209.0], [32.7, 210.0], [32.8, 211.0], [32.9, 212.0], [33.0, 213.0], [33.1, 214.0], [33.2, 215.0], [33.3, 215.0], [33.4, 215.0], [33.5, 216.0], [33.6, 217.0], [33.7, 219.0], [33.8, 219.0], [33.9, 221.0], [34.0, 221.0], [34.1, 222.0], [34.2, 222.0], [34.3, 223.0], [34.4, 224.0], [34.5, 225.0], [34.6, 226.0], [34.7, 227.0], [34.8, 229.0], [34.9, 230.0], [35.0, 231.0], [35.1, 232.0], [35.2, 233.0], [35.3, 234.0], [35.4, 235.0], [35.5, 236.0], [35.6, 237.0], [35.7, 238.0], [35.8, 239.0], [35.9, 240.0], [36.0, 241.0], [36.1, 242.0], [36.2, 243.0], [36.3, 243.0], [36.4, 244.0], [36.5, 245.0], [36.6, 246.0], [36.7, 247.0], [36.8, 247.0], [36.9, 248.0], [37.0, 249.0], [37.1, 250.0], [37.2, 252.0], [37.3, 253.0], [37.4, 254.0], [37.5, 257.0], [37.6, 257.0], [37.7, 258.0], [37.8, 259.0], [37.9, 260.0], [38.0, 261.0], [38.1, 262.0], [38.2, 263.0], [38.3, 265.0], [38.4, 266.0], [38.5, 267.0], [38.6, 268.0], [38.7, 269.0], [38.8, 271.0], [38.9, 272.0], [39.0, 274.0], [39.1, 274.0], [39.2, 276.0], [39.3, 277.0], [39.4, 278.0], [39.5, 279.0], [39.6, 281.0], [39.7, 282.0], [39.8, 283.0], [39.9, 283.0], [40.0, 284.0], [40.1, 285.0], [40.2, 287.0], [40.3, 289.0], [40.4, 289.0], [40.5, 289.0], [40.6, 290.0], [40.7, 291.0], [40.8, 291.0], [40.9, 292.0], [41.0, 293.0], [41.1, 295.0], [41.2, 297.0], [41.3, 298.0], [41.4, 298.0], [41.5, 299.0], [41.6, 300.0], [41.7, 301.0], [41.8, 303.0], [41.9, 304.0], [42.0, 304.0], [42.1, 305.0], [42.2, 306.0], [42.3, 307.0], [42.4, 308.0], [42.5, 308.0], [42.6, 310.0], [42.7, 311.0], [42.8, 311.0], [42.9, 313.0], [43.0, 313.0], [43.1, 314.0], [43.2, 315.0], [43.3, 315.0], [43.4, 316.0], [43.5, 316.0], [43.6, 317.0], [43.7, 317.0], [43.8, 318.0], [43.9, 319.0], [44.0, 319.0], [44.1, 320.0], [44.2, 321.0], [44.3, 322.0], [44.4, 322.0], [44.5, 323.0], [44.6, 324.0], [44.7, 324.0], [44.8, 324.0], [44.9, 325.0], [45.0, 326.0], [45.1, 327.0], [45.2, 327.0], [45.3, 327.0], [45.4, 328.0], [45.5, 328.0], [45.6, 329.0], [45.7, 329.0], [45.8, 330.0], [45.9, 330.0], [46.0, 331.0], [46.1, 332.0], [46.2, 333.0], [46.3, 333.0], [46.4, 334.0], [46.5, 334.0], [46.6, 336.0], [46.7, 336.0], [46.8, 336.0], [46.9, 337.0], [47.0, 338.0], [47.1, 338.0], [47.2, 339.0], [47.3, 339.0], [47.4, 339.0], [47.5, 340.0], [47.6, 341.0], [47.7, 342.0], [47.8, 342.0], [47.9, 343.0], [48.0, 344.0], [48.1, 345.0], [48.2, 345.0], [48.3, 346.0], [48.4, 346.0], [48.5, 347.0], [48.6, 348.0], [48.7, 348.0], [48.8, 349.0], [48.9, 349.0], [49.0, 350.0], [49.1, 351.0], [49.2, 352.0], [49.3, 352.0], [49.4, 353.0], [49.5, 354.0], [49.6, 355.0], [49.7, 355.0], [49.8, 356.0], [49.9, 356.0], [50.0, 357.0], [50.1, 357.0], [50.2, 358.0], [50.3, 358.0], [50.4, 358.0], [50.5, 360.0], [50.6, 360.0], [50.7, 361.0], [50.8, 361.0], [50.9, 363.0], [51.0, 363.0], [51.1, 363.0], [51.2, 364.0], [51.3, 365.0], [51.4, 365.0], [51.5, 366.0], [51.6, 366.0], [51.7, 367.0], [51.8, 367.0], [51.9, 367.0], [52.0, 368.0], [52.1, 368.0], [52.2, 369.0], [52.3, 369.0], [52.4, 370.0], [52.5, 370.0], [52.6, 371.0], [52.7, 372.0], [52.8, 372.0], [52.9, 374.0], [53.0, 374.0], [53.1, 374.0], [53.2, 375.0], [53.3, 375.0], [53.4, 376.0], [53.5, 376.0], [53.6, 376.0], [53.7, 377.0], [53.8, 378.0], [53.9, 378.0], [54.0, 379.0], [54.1, 379.0], [54.2, 380.0], [54.3, 381.0], [54.4, 382.0], [54.5, 382.0], [54.6, 383.0], [54.7, 383.0], [54.8, 385.0], [54.9, 386.0], [55.0, 387.0], [55.1, 388.0], [55.2, 389.0], [55.3, 390.0], [55.4, 390.0], [55.5, 391.0], [55.6, 392.0], [55.7, 392.0], [55.8, 392.0], [55.9, 393.0], [56.0, 394.0], [56.1, 395.0], [56.2, 396.0], [56.3, 397.0], [56.4, 398.0], [56.5, 399.0], [56.6, 400.0], [56.7, 401.0], [56.8, 401.0], [56.9, 402.0], [57.0, 403.0], [57.1, 403.0], [57.2, 405.0], [57.3, 406.0], [57.4, 407.0], [57.5, 408.0], [57.6, 409.0], [57.7, 411.0], [57.8, 413.0], [57.9, 414.0], [58.0, 416.0], [58.1, 416.0], [58.2, 417.0], [58.3, 417.0], [58.4, 418.0], [58.5, 419.0], [58.6, 422.0], [58.7, 423.0], [58.8, 424.0], [58.9, 425.0], [59.0, 426.0], [59.1, 429.0], [59.2, 431.0], [59.3, 432.0], [59.4, 433.0], [59.5, 434.0], [59.6, 435.0], [59.7, 436.0], [59.8, 437.0], [59.9, 438.0], [60.0, 439.0], [60.1, 441.0], [60.2, 441.0], [60.3, 442.0], [60.4, 445.0], [60.5, 446.0], [60.6, 448.0], [60.7, 450.0], [60.8, 451.0], [60.9, 452.0], [61.0, 453.0], [61.1, 456.0], [61.2, 458.0], [61.3, 460.0], [61.4, 462.0], [61.5, 464.0], [61.6, 465.0], [61.7, 466.0], [61.8, 467.0], [61.9, 468.0], [62.0, 469.0], [62.1, 470.0], [62.2, 471.0], [62.3, 473.0], [62.4, 474.0], [62.5, 475.0], [62.6, 476.0], [62.7, 479.0], [62.8, 482.0], [62.9, 483.0], [63.0, 484.0], [63.1, 486.0], [63.2, 488.0], [63.3, 489.0], [63.4, 490.0], [63.5, 491.0], [63.6, 493.0], [63.7, 495.0], [63.8, 498.0], [63.9, 500.0], [64.0, 501.0], [64.1, 502.0], [64.2, 503.0], [64.3, 506.0], [64.4, 508.0], [64.5, 510.0], [64.6, 511.0], [64.7, 512.0], [64.8, 515.0], [64.9, 516.0], [65.0, 517.0], [65.1, 519.0], [65.2, 521.0], [65.3, 522.0], [65.4, 523.0], [65.5, 525.0], [65.6, 527.0], [65.7, 529.0], [65.8, 532.0], [65.9, 535.0], [66.0, 537.0], [66.1, 539.0], [66.2, 540.0], [66.3, 543.0], [66.4, 546.0], [66.5, 547.0], [66.6, 551.0], [66.7, 552.0], [66.8, 555.0], [66.9, 557.0], [67.0, 559.0], [67.1, 559.0], [67.2, 560.0], [67.3, 563.0], [67.4, 565.0], [67.5, 566.0], [67.6, 567.0], [67.7, 568.0], [67.8, 569.0], [67.9, 571.0], [68.0, 573.0], [68.1, 576.0], [68.2, 577.0], [68.3, 579.0], [68.4, 581.0], [68.5, 584.0], [68.6, 585.0], [68.7, 586.0], [68.8, 588.0], [68.9, 588.0], [69.0, 589.0], [69.1, 590.0], [69.2, 591.0], [69.3, 592.0], [69.4, 594.0], [69.5, 596.0], [69.6, 597.0], [69.7, 598.0], [69.8, 599.0], [69.9, 600.0], [70.0, 600.0], [70.1, 602.0], [70.2, 602.0], [70.3, 603.0], [70.4, 604.0], [70.5, 605.0], [70.6, 606.0], [70.7, 607.0], [70.8, 608.0], [70.9, 610.0], [71.0, 612.0], [71.1, 612.0], [71.2, 613.0], [71.3, 613.0], [71.4, 614.0], [71.5, 614.0], [71.6, 615.0], [71.7, 616.0], [71.8, 616.0], [71.9, 618.0], [72.0, 619.0], [72.1, 620.0], [72.2, 622.0], [72.3, 623.0], [72.4, 623.0], [72.5, 623.0], [72.6, 624.0], [72.7, 625.0], [72.8, 625.0], [72.9, 626.0], [73.0, 627.0], [73.1, 628.0], [73.2, 628.0], [73.3, 629.0], [73.4, 631.0], [73.5, 633.0], [73.6, 633.0], [73.7, 634.0], [73.8, 636.0], [73.9, 636.0], [74.0, 638.0], [74.1, 639.0], [74.2, 640.0], [74.3, 641.0], [74.4, 641.0], [74.5, 642.0], [74.6, 643.0], [74.7, 644.0], [74.8, 645.0], [74.9, 646.0], [75.0, 647.0], [75.1, 648.0], [75.2, 649.0], [75.3, 650.0], [75.4, 652.0], [75.5, 653.0], [75.6, 655.0], [75.7, 656.0], [75.8, 657.0], [75.9, 658.0], [76.0, 660.0], [76.1, 662.0], [76.2, 664.0], [76.3, 665.0], [76.4, 666.0], [76.5, 668.0], [76.6, 670.0], [76.7, 671.0], [76.8, 672.0], [76.9, 673.0], [77.0, 674.0], [77.1, 676.0], [77.2, 677.0], [77.3, 679.0], [77.4, 680.0], [77.5, 681.0], [77.6, 683.0], [77.7, 684.0], [77.8, 685.0], [77.9, 687.0], [78.0, 688.0], [78.1, 691.0], [78.2, 692.0], [78.3, 693.0], [78.4, 696.0], [78.5, 699.0], [78.6, 701.0], [78.7, 703.0], [78.8, 705.0], [78.9, 707.0], [79.0, 708.0], [79.1, 710.0], [79.2, 711.0], [79.3, 714.0], [79.4, 716.0], [79.5, 718.0], [79.6, 720.0], [79.7, 721.0], [79.8, 725.0], [79.9, 727.0], [80.0, 729.0], [80.1, 730.0], [80.2, 733.0], [80.3, 737.0], [80.4, 740.0], [80.5, 741.0], [80.6, 746.0], [80.7, 747.0], [80.8, 749.0], [80.9, 752.0], [81.0, 756.0], [81.1, 759.0], [81.2, 761.0], [81.3, 765.0], [81.4, 767.0], [81.5, 768.0], [81.6, 772.0], [81.7, 778.0], [81.8, 779.0], [81.9, 785.0], [82.0, 788.0], [82.1, 789.0], [82.2, 794.0], [82.3, 797.0], [82.4, 800.0], [82.5, 803.0], [82.6, 807.0], [82.7, 810.0], [82.8, 812.0], [82.9, 820.0], [83.0, 826.0], [83.1, 829.0], [83.2, 835.0], [83.3, 836.0], [83.4, 843.0], [83.5, 847.0], [83.6, 850.0], [83.7, 858.0], [83.8, 862.0], [83.9, 867.0], [84.0, 871.0], [84.1, 874.0], [84.2, 880.0], [84.3, 888.0], [84.4, 891.0], [84.5, 893.0], [84.6, 899.0], [84.7, 901.0], [84.8, 903.0], [84.9, 907.0], [85.0, 911.0], [85.1, 912.0], [85.2, 914.0], [85.3, 917.0], [85.4, 918.0], [85.5, 921.0], [85.6, 923.0], [85.7, 926.0], [85.8, 929.0], [85.9, 930.0], [86.0, 931.0], [86.1, 933.0], [86.2, 934.0], [86.3, 937.0], [86.4, 939.0], [86.5, 940.0], [86.6, 943.0], [86.7, 948.0], [86.8, 951.0], [86.9, 956.0], [87.0, 957.0], [87.1, 959.0], [87.2, 963.0], [87.3, 964.0], [87.4, 966.0], [87.5, 970.0], [87.6, 972.0], [87.7, 976.0], [87.8, 978.0], [87.9, 981.0], [88.0, 985.0], [88.1, 987.0], [88.2, 989.0], [88.3, 991.0], [88.4, 994.0], [88.5, 999.0], [88.6, 1001.0], [88.7, 1005.0], [88.8, 1009.0], [88.9, 1013.0], [89.0, 1015.0], [89.1, 1020.0], [89.2, 1023.0], [89.3, 1029.0], [89.4, 1033.0], [89.5, 1037.0], [89.6, 1048.0], [89.7, 1054.0], [89.8, 1060.0], [89.9, 1067.0], [90.0, 1089.0], [90.1, 1101.0], [90.2, 1116.0], [90.3, 1123.0], [90.4, 1133.0], [90.5, 1142.0], [90.6, 1156.0], [90.7, 1164.0], [90.8, 1173.0], [90.9, 1182.0], [91.0, 1186.0], [91.1, 1192.0], [91.2, 1196.0], [91.3, 1200.0], [91.4, 1203.0], [91.5, 1209.0], [91.6, 1214.0], [91.7, 1219.0], [91.8, 1221.0], [91.9, 1224.0], [92.0, 1226.0], [92.1, 1229.0], [92.2, 1233.0], [92.3, 1235.0], [92.4, 1239.0], [92.5, 1241.0], [92.6, 1242.0], [92.7, 1249.0], [92.8, 1251.0], [92.9, 1257.0], [93.0, 1264.0], [93.1, 1267.0], [93.2, 1279.0], [93.3, 1295.0], [93.4, 1306.0], [93.5, 1311.0], [93.6, 1315.0], [93.7, 1337.0], [93.8, 1360.0], [93.9, 1380.0], [94.0, 1416.0], [94.1, 1446.0], [94.2, 1470.0], [94.3, 1503.0], [94.4, 1519.0], [94.5, 1569.0], [94.6, 1597.0], [94.7, 1633.0], [94.8, 1658.0], [94.9, 1674.0], [95.0, 1754.0], [95.1, 1792.0], [95.2, 1820.0], [95.3, 1884.0], [95.4, 1943.0], [95.5, 1986.0], [95.6, 2021.0], [95.7, 2058.0], [95.8, 2153.0], [95.9, 2218.0], [96.0, 2297.0], [96.1, 2382.0], [96.2, 2529.0], [96.3, 2592.0], [96.4, 2634.0], [96.5, 2661.0], [96.6, 2714.0], [96.7, 2770.0], [96.8, 2830.0], [96.9, 2896.0], [97.0, 2981.0], [97.1, 3041.0], [97.2, 3064.0], [97.3, 3156.0], [97.4, 3242.0], [97.5, 3358.0], [97.6, 3596.0], [97.7, 3878.0], [97.8, 4013.0], [97.9, 4104.0], [98.0, 4159.0], [98.1, 4222.0], [98.2, 4448.0], [98.3, 4872.0], [98.4, 5166.0], [98.5, 5588.0], [98.6, 5761.0], [98.7, 6119.0], [98.8, 7066.0], [98.9, 8038.0], [99.0, 8150.0], [99.1, 8290.0], [99.2, 8374.0], [99.3, 8600.0], [99.4, 8808.0], [99.5, 10524.0], [99.6, 10622.0], [99.7, 10807.0], [99.8, 11044.0], [99.9, 11354.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 823.0, "series": [{"data": [[0.0, 823.0], [600.0, 452.0], [700.0, 198.0], [800.0, 118.0], [900.0, 204.0], [1000.0, 80.0], [1100.0, 62.0], [1200.0, 109.0], [1300.0, 29.0], [1400.0, 18.0], [1500.0, 17.0], [1600.0, 15.0], [1700.0, 11.0], [1800.0, 13.0], [1900.0, 8.0], [2000.0, 11.0], [2100.0, 8.0], [2200.0, 6.0], [2300.0, 6.0], [2400.0, 2.0], [2500.0, 7.0], [2600.0, 13.0], [2800.0, 7.0], [2700.0, 12.0], [2900.0, 7.0], [3000.0, 10.0], [3100.0, 5.0], [3200.0, 7.0], [3300.0, 2.0], [3400.0, 2.0], [3500.0, 3.0], [3600.0, 2.0], [3700.0, 1.0], [3800.0, 2.0], [3900.0, 4.0], [4000.0, 6.0], [4200.0, 3.0], [4100.0, 10.0], [4300.0, 2.0], [4500.0, 1.0], [4400.0, 1.0], [4600.0, 2.0], [4700.0, 1.0], [4800.0, 3.0], [5000.0, 2.0], [5100.0, 1.0], [5300.0, 2.0], [5400.0, 2.0], [5600.0, 3.0], [5500.0, 3.0], [5700.0, 1.0], [5800.0, 4.0], [6100.0, 1.0], [6300.0, 1.0], [6400.0, 1.0], [6800.0, 1.0], [7000.0, 2.0], [7200.0, 3.0], [8000.0, 4.0], [8100.0, 5.0], [8300.0, 6.0], [8600.0, 3.0], [8400.0, 3.0], [8200.0, 4.0], [8700.0, 2.0], [9000.0, 1.0], [8800.0, 1.0], [9800.0, 1.0], [10600.0, 5.0], [10500.0, 3.0], [10400.0, 3.0], [10700.0, 2.0], [11000.0, 4.0], [10900.0, 2.0], [11100.0, 1.0], [10800.0, 3.0], [11300.0, 1.0], [11400.0, 1.0], [15000.0, 1.0], [19300.0, 1.0], [20600.0, 1.0], [21200.0, 1.0], [100.0, 813.0], [200.0, 519.0], [300.0, 780.0], [400.0, 381.0], [500.0, 308.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 296.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3320.0, "series": [{"data": [[0.0, 3320.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1574.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 296.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.90566037735849, "minX": 1.60438998E12, "maxY": 10.0, "series": [{"data": [[1.60438998E12, 9.986631016042784], [1.60439028E12, 10.0], [1.6043901E12, 10.0], [1.60439022E12, 10.0], [1.60439004E12, 10.0], [1.60439034E12, 9.90566037735849], [1.60439016E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439034E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 506.0, "minX": 1.0, "maxY": 8038.0, "series": [{"data": [[8.0, 646.0], [4.0, 581.0], [2.0, 1198.0], [1.0, 8038.0], [9.0, 682.5], [10.0, 637.3460795673997], [5.0, 1221.0], [6.0, 741.0], [3.0, 1118.0], [7.0, 506.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990366088632026, 639.0913294797714]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2803.7, "minX": 1.60438998E12, "maxY": 5391041.466666667, "series": [{"data": [[1.60438998E12, 1463856.7666666666], [1.60439028E12, 3488371.283333333], [1.6043901E12, 5391041.466666667], [1.60439022E12, 4288289.783333333], [1.60439004E12, 2284617.2333333334], [1.60439034E12, 1720621.2], [1.60439016E12, 5005645.933333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438998E12, 2803.7], [1.60439028E12, 5969.95], [1.6043901E12, 6315.566666666667], [1.60439022E12, 6404.95], [1.60439004E12, 4852.55], [1.60439034E12, 3748.016666666667], [1.60439016E12, 9846.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439034E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 358.8716577540106, "minX": 1.60438998E12, "maxY": 935.5070422535202, "series": [{"data": [[1.60438998E12, 358.8716577540106], [1.60439028E12, 773.6723684210534], [1.6043901E12, 674.8814180929093], [1.60439022E12, 711.0662721893481], [1.60439004E12, 935.5070422535202], [1.60439034E12, 409.153039832285], [1.60439016E12, 508.0783085356315]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439034E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 357.01871657754015, "minX": 1.60438998E12, "maxY": 934.007824726135, "series": [{"data": [[1.60438998E12, 357.01871657754015], [1.60439028E12, 772.017105263158], [1.6043901E12, 671.9792176039119], [1.60439022E12, 709.3029585798816], [1.60439004E12, 934.007824726135], [1.60439034E12, 407.87421383647785], [1.60439016E12, 506.52858261550494]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439034E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008385744234800839, "minX": 1.60438998E12, "maxY": 0.23262032085561504, "series": [{"data": [[1.60438998E12, 0.23262032085561504], [1.60439028E12, 0.014473684210526333], [1.6043901E12, 0.01222493887530563], [1.60439022E12, 0.014201183431952683], [1.60439004E12, 0.02503912363067293], [1.60439034E12, 0.008385744234800839], [1.60439016E12, 0.013312451057165237]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439034E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 19.0, "minX": 1.60438998E12, "maxY": 21261.0, "series": [{"data": [[1.60438998E12, 1233.0], [1.60439028E12, 21261.0], [1.6043901E12, 9843.0], [1.60439022E12, 8412.0], [1.60439004E12, 19304.0], [1.60439034E12, 8038.0], [1.60439016E12, 20621.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438998E12, 32.749999821186066], [1.60439028E12, 34.54699945569038], [1.6043901E12, 38.74199960947037], [1.60439022E12, 31.613999798297883], [1.60439004E12, 32.51999969482422], [1.60439034E12, 33.60399977207184], [1.60439016E12, 33.50199969530105]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438998E12, 33.425000071525574], [1.60439028E12, 35.0], [1.6043901E12, 40.0], [1.60439022E12, 32.0], [1.60439004E12, 33.33600006103516], [1.60439034E12, 34.464400091171264], [1.60439016E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438998E12, 33.12499991059303], [1.60439028E12, 35.0], [1.6043901E12, 39.56099980473518], [1.60439022E12, 32.0], [1.60439004E12, 33.079999923706055], [1.60439034E12, 34.081999886035916], [1.60439016E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438998E12, 29.0], [1.60439028E12, 21.0], [1.6043901E12, 29.0], [1.60439022E12, 19.0], [1.60439004E12, 25.0], [1.60439034E12, 25.0], [1.60439016E12, 24.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438998E12, 330.5], [1.60439028E12, 396.5], [1.6043901E12, 586.5], [1.60439022E12, 374.0], [1.60439004E12, 264.0], [1.60439034E12, 252.0], [1.60439016E12, 321.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439034E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 96.0, "minX": 1.0, "maxY": 2103.5, "series": [{"data": [[33.0, 301.0], [2.0, 1092.0], [32.0, 191.0], [34.0, 205.5], [35.0, 273.0], [36.0, 156.5], [38.0, 200.5], [39.0, 195.5], [40.0, 238.5], [44.0, 214.0], [46.0, 128.5], [3.0, 1170.0], [51.0, 96.0], [50.0, 114.5], [63.0, 120.0], [4.0, 952.0], [5.0, 431.0], [6.0, 650.0], [7.0, 558.0], [8.0, 473.0], [9.0, 652.0], [10.0, 655.5], [11.0, 631.0], [12.0, 598.0], [13.0, 667.0], [14.0, 622.0], [15.0, 437.0], [1.0, 2103.5], [16.0, 474.5], [17.0, 390.5], [18.0, 396.5], [19.0, 403.5], [20.0, 360.0], [21.0, 403.0], [22.0, 362.5], [23.0, 355.0], [24.0, 359.0], [25.0, 322.0], [26.0, 333.5], [27.0, 358.0], [28.0, 330.5], [29.0, 219.0], [30.0, 114.0], [31.0, 258.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 96.0, "minX": 1.0, "maxY": 2101.0, "series": [{"data": [[33.0, 300.0], [2.0, 1089.0], [32.0, 190.5], [34.0, 204.5], [35.0, 272.0], [36.0, 156.0], [38.0, 199.5], [39.0, 195.0], [40.0, 236.5], [44.0, 213.0], [46.0, 128.0], [3.0, 1165.5], [51.0, 96.0], [50.0, 113.0], [63.0, 119.0], [4.0, 951.0], [5.0, 429.0], [6.0, 648.5], [7.0, 554.0], [8.0, 471.0], [9.0, 650.5], [10.0, 653.0], [11.0, 627.0], [12.0, 590.5], [13.0, 665.0], [14.0, 618.5], [15.0, 437.0], [1.0, 2101.0], [16.0, 474.0], [17.0, 386.5], [18.0, 394.0], [19.0, 400.0], [20.0, 356.5], [21.0, 401.0], [22.0, 360.5], [23.0, 354.0], [24.0, 358.5], [25.0, 319.0], [26.0, 332.5], [27.0, 357.0], [28.0, 328.5], [29.0, 218.0], [30.0, 113.0], [31.0, 257.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.4, "minX": 1.60438998E12, "maxY": 21.283333333333335, "series": [{"data": [[1.60438998E12, 6.4], [1.60439028E12, 12.666666666666666], [1.6043901E12, 13.633333333333333], [1.60439022E12, 14.083333333333334], [1.60439004E12, 10.65], [1.60439034E12, 7.783333333333333], [1.60439016E12, 21.283333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439034E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.233333333333333, "minX": 1.60438998E12, "maxY": 21.283333333333335, "series": [{"data": [[1.60438998E12, 6.233333333333333], [1.60439028E12, 12.666666666666666], [1.6043901E12, 13.633333333333333], [1.60439022E12, 14.083333333333334], [1.60439004E12, 10.65], [1.60439034E12, 7.95], [1.60439016E12, 21.283333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439034E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.233333333333333, "minX": 1.60438998E12, "maxY": 21.283333333333335, "series": [{"data": [[1.60438998E12, 6.233333333333333], [1.60439028E12, 12.666666666666666], [1.6043901E12, 13.633333333333333], [1.60439022E12, 14.083333333333334], [1.60439004E12, 10.65], [1.60439034E12, 7.95], [1.60439016E12, 21.283333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439034E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.233333333333333, "minX": 1.60438998E12, "maxY": 21.283333333333335, "series": [{"data": [[1.60438998E12, 6.233333333333333], [1.60439028E12, 12.666666666666666], [1.6043901E12, 13.633333333333333], [1.60439022E12, 14.083333333333334], [1.60439004E12, 10.65], [1.60439034E12, 7.95], [1.60439016E12, 21.283333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439034E12, "title": "Total Transactions Per Second"}},
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

