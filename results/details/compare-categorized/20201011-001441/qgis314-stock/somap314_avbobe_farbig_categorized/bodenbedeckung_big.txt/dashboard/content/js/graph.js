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
        data: {"result": {"minY": 17.0, "minX": 0.0, "maxY": 21011.0, "series": [{"data": [[0.0, 17.0], [0.1, 24.0], [0.2, 26.0], [0.3, 28.0], [0.4, 29.0], [0.5, 30.0], [0.6, 31.0], [0.7, 31.0], [0.8, 32.0], [0.9, 32.0], [1.0, 33.0], [1.1, 33.0], [1.2, 34.0], [1.3, 34.0], [1.4, 34.0], [1.5, 34.0], [1.6, 35.0], [1.7, 35.0], [1.8, 35.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 37.0], [2.3, 37.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 39.0], [2.8, 39.0], [2.9, 39.0], [3.0, 40.0], [3.1, 40.0], [3.2, 40.0], [3.3, 40.0], [3.4, 41.0], [3.5, 41.0], [3.6, 41.0], [3.7, 42.0], [3.8, 42.0], [3.9, 42.0], [4.0, 42.0], [4.1, 43.0], [4.2, 43.0], [4.3, 43.0], [4.4, 44.0], [4.5, 44.0], [4.6, 45.0], [4.7, 45.0], [4.8, 45.0], [4.9, 46.0], [5.0, 46.0], [5.1, 46.0], [5.2, 46.0], [5.3, 47.0], [5.4, 47.0], [5.5, 48.0], [5.6, 48.0], [5.7, 48.0], [5.8, 48.0], [5.9, 49.0], [6.0, 50.0], [6.1, 50.0], [6.2, 51.0], [6.3, 51.0], [6.4, 51.0], [6.5, 52.0], [6.6, 52.0], [6.7, 52.0], [6.8, 52.0], [6.9, 53.0], [7.0, 53.0], [7.1, 53.0], [7.2, 54.0], [7.3, 54.0], [7.4, 54.0], [7.5, 55.0], [7.6, 55.0], [7.7, 56.0], [7.8, 56.0], [7.9, 57.0], [8.0, 57.0], [8.1, 57.0], [8.2, 58.0], [8.3, 58.0], [8.4, 59.0], [8.5, 59.0], [8.6, 59.0], [8.7, 60.0], [8.8, 60.0], [8.9, 61.0], [9.0, 61.0], [9.1, 61.0], [9.2, 62.0], [9.3, 63.0], [9.4, 63.0], [9.5, 64.0], [9.6, 64.0], [9.7, 64.0], [9.8, 65.0], [9.9, 65.0], [10.0, 65.0], [10.1, 66.0], [10.2, 66.0], [10.3, 66.0], [10.4, 67.0], [10.5, 67.0], [10.6, 67.0], [10.7, 68.0], [10.8, 68.0], [10.9, 68.0], [11.0, 69.0], [11.1, 69.0], [11.2, 70.0], [11.3, 70.0], [11.4, 70.0], [11.5, 71.0], [11.6, 71.0], [11.7, 71.0], [11.8, 72.0], [11.9, 72.0], [12.0, 73.0], [12.1, 73.0], [12.2, 73.0], [12.3, 73.0], [12.4, 74.0], [12.5, 74.0], [12.6, 75.0], [12.7, 75.0], [12.8, 75.0], [12.9, 76.0], [13.0, 77.0], [13.1, 77.0], [13.2, 78.0], [13.3, 78.0], [13.4, 78.0], [13.5, 79.0], [13.6, 80.0], [13.7, 80.0], [13.8, 81.0], [13.9, 81.0], [14.0, 81.0], [14.1, 82.0], [14.2, 82.0], [14.3, 83.0], [14.4, 83.0], [14.5, 84.0], [14.6, 84.0], [14.7, 85.0], [14.8, 86.0], [14.9, 86.0], [15.0, 87.0], [15.1, 87.0], [15.2, 87.0], [15.3, 88.0], [15.4, 88.0], [15.5, 89.0], [15.6, 90.0], [15.7, 90.0], [15.8, 91.0], [15.9, 91.0], [16.0, 91.0], [16.1, 92.0], [16.2, 92.0], [16.3, 92.0], [16.4, 93.0], [16.5, 93.0], [16.6, 93.0], [16.7, 93.0], [16.8, 94.0], [16.9, 95.0], [17.0, 95.0], [17.1, 96.0], [17.2, 96.0], [17.3, 97.0], [17.4, 97.0], [17.5, 98.0], [17.6, 98.0], [17.7, 98.0], [17.8, 99.0], [17.9, 99.0], [18.0, 99.0], [18.1, 100.0], [18.2, 100.0], [18.3, 101.0], [18.4, 101.0], [18.5, 102.0], [18.6, 102.0], [18.7, 102.0], [18.8, 103.0], [18.9, 103.0], [19.0, 104.0], [19.1, 104.0], [19.2, 105.0], [19.3, 105.0], [19.4, 106.0], [19.5, 106.0], [19.6, 107.0], [19.7, 107.0], [19.8, 108.0], [19.9, 108.0], [20.0, 109.0], [20.1, 109.0], [20.2, 110.0], [20.3, 110.0], [20.4, 111.0], [20.5, 111.0], [20.6, 112.0], [20.7, 113.0], [20.8, 113.0], [20.9, 113.0], [21.0, 113.0], [21.1, 114.0], [21.2, 114.0], [21.3, 115.0], [21.4, 115.0], [21.5, 115.0], [21.6, 116.0], [21.7, 116.0], [21.8, 118.0], [21.9, 119.0], [22.0, 119.0], [22.1, 120.0], [22.2, 120.0], [22.3, 121.0], [22.4, 121.0], [22.5, 122.0], [22.6, 122.0], [22.7, 122.0], [22.8, 123.0], [22.9, 123.0], [23.0, 124.0], [23.1, 125.0], [23.2, 125.0], [23.3, 126.0], [23.4, 126.0], [23.5, 127.0], [23.6, 127.0], [23.7, 128.0], [23.8, 129.0], [23.9, 130.0], [24.0, 130.0], [24.1, 131.0], [24.2, 132.0], [24.3, 133.0], [24.4, 134.0], [24.5, 134.0], [24.6, 135.0], [24.7, 135.0], [24.8, 136.0], [24.9, 136.0], [25.0, 137.0], [25.1, 137.0], [25.2, 138.0], [25.3, 139.0], [25.4, 140.0], [25.5, 141.0], [25.6, 141.0], [25.7, 142.0], [25.8, 143.0], [25.9, 143.0], [26.0, 144.0], [26.1, 145.0], [26.2, 145.0], [26.3, 146.0], [26.4, 147.0], [26.5, 148.0], [26.6, 149.0], [26.7, 149.0], [26.8, 150.0], [26.9, 151.0], [27.0, 151.0], [27.1, 152.0], [27.2, 153.0], [27.3, 154.0], [27.4, 154.0], [27.5, 155.0], [27.6, 156.0], [27.7, 156.0], [27.8, 157.0], [27.9, 158.0], [28.0, 159.0], [28.1, 160.0], [28.2, 161.0], [28.3, 162.0], [28.4, 163.0], [28.5, 164.0], [28.6, 165.0], [28.7, 166.0], [28.8, 167.0], [28.9, 167.0], [29.0, 168.0], [29.1, 168.0], [29.2, 169.0], [29.3, 170.0], [29.4, 171.0], [29.5, 172.0], [29.6, 173.0], [29.7, 173.0], [29.8, 173.0], [29.9, 174.0], [30.0, 174.0], [30.1, 175.0], [30.2, 176.0], [30.3, 176.0], [30.4, 177.0], [30.5, 178.0], [30.6, 180.0], [30.7, 180.0], [30.8, 180.0], [30.9, 181.0], [31.0, 181.0], [31.1, 182.0], [31.2, 183.0], [31.3, 184.0], [31.4, 185.0], [31.5, 186.0], [31.6, 187.0], [31.7, 188.0], [31.8, 188.0], [31.9, 189.0], [32.0, 190.0], [32.1, 191.0], [32.2, 191.0], [32.3, 192.0], [32.4, 194.0], [32.5, 195.0], [32.6, 196.0], [32.7, 197.0], [32.8, 198.0], [32.9, 198.0], [33.0, 199.0], [33.1, 201.0], [33.2, 202.0], [33.3, 202.0], [33.4, 203.0], [33.5, 203.0], [33.6, 205.0], [33.7, 205.0], [33.8, 207.0], [33.9, 208.0], [34.0, 209.0], [34.1, 212.0], [34.2, 213.0], [34.3, 214.0], [34.4, 215.0], [34.5, 217.0], [34.6, 218.0], [34.7, 218.0], [34.8, 219.0], [34.9, 220.0], [35.0, 220.0], [35.1, 221.0], [35.2, 221.0], [35.3, 222.0], [35.4, 223.0], [35.5, 223.0], [35.6, 224.0], [35.7, 225.0], [35.8, 226.0], [35.9, 226.0], [36.0, 227.0], [36.1, 229.0], [36.2, 230.0], [36.3, 232.0], [36.4, 233.0], [36.5, 235.0], [36.6, 238.0], [36.7, 239.0], [36.8, 239.0], [36.9, 241.0], [37.0, 241.0], [37.1, 241.0], [37.2, 242.0], [37.3, 242.0], [37.4, 244.0], [37.5, 245.0], [37.6, 246.0], [37.7, 248.0], [37.8, 249.0], [37.9, 250.0], [38.0, 252.0], [38.1, 253.0], [38.2, 253.0], [38.3, 255.0], [38.4, 255.0], [38.5, 256.0], [38.6, 257.0], [38.7, 259.0], [38.8, 260.0], [38.9, 261.0], [39.0, 262.0], [39.1, 263.0], [39.2, 264.0], [39.3, 264.0], [39.4, 265.0], [39.5, 268.0], [39.6, 269.0], [39.7, 270.0], [39.8, 271.0], [39.9, 272.0], [40.0, 272.0], [40.1, 273.0], [40.2, 276.0], [40.3, 276.0], [40.4, 277.0], [40.5, 278.0], [40.6, 280.0], [40.7, 281.0], [40.8, 282.0], [40.9, 282.0], [41.0, 282.0], [41.1, 284.0], [41.2, 285.0], [41.3, 285.0], [41.4, 286.0], [41.5, 287.0], [41.6, 287.0], [41.7, 288.0], [41.8, 288.0], [41.9, 289.0], [42.0, 289.0], [42.1, 290.0], [42.2, 291.0], [42.3, 293.0], [42.4, 294.0], [42.5, 295.0], [42.6, 296.0], [42.7, 297.0], [42.8, 298.0], [42.9, 298.0], [43.0, 300.0], [43.1, 301.0], [43.2, 303.0], [43.3, 303.0], [43.4, 304.0], [43.5, 305.0], [43.6, 306.0], [43.7, 306.0], [43.8, 306.0], [43.9, 307.0], [44.0, 308.0], [44.1, 309.0], [44.2, 310.0], [44.3, 310.0], [44.4, 311.0], [44.5, 311.0], [44.6, 312.0], [44.7, 313.0], [44.8, 313.0], [44.9, 314.0], [45.0, 315.0], [45.1, 316.0], [45.2, 316.0], [45.3, 317.0], [45.4, 318.0], [45.5, 319.0], [45.6, 319.0], [45.7, 320.0], [45.8, 321.0], [45.9, 322.0], [46.0, 322.0], [46.1, 322.0], [46.2, 323.0], [46.3, 323.0], [46.4, 324.0], [46.5, 324.0], [46.6, 325.0], [46.7, 325.0], [46.8, 326.0], [46.9, 326.0], [47.0, 327.0], [47.1, 327.0], [47.2, 328.0], [47.3, 328.0], [47.4, 328.0], [47.5, 329.0], [47.6, 330.0], [47.7, 330.0], [47.8, 331.0], [47.9, 332.0], [48.0, 333.0], [48.1, 333.0], [48.2, 334.0], [48.3, 334.0], [48.4, 335.0], [48.5, 336.0], [48.6, 336.0], [48.7, 337.0], [48.8, 338.0], [48.9, 338.0], [49.0, 338.0], [49.1, 339.0], [49.2, 339.0], [49.3, 340.0], [49.4, 340.0], [49.5, 341.0], [49.6, 341.0], [49.7, 341.0], [49.8, 341.0], [49.9, 342.0], [50.0, 343.0], [50.1, 343.0], [50.2, 344.0], [50.3, 344.0], [50.4, 345.0], [50.5, 346.0], [50.6, 346.0], [50.7, 347.0], [50.8, 347.0], [50.9, 348.0], [51.0, 348.0], [51.1, 349.0], [51.2, 349.0], [51.3, 350.0], [51.4, 351.0], [51.5, 352.0], [51.6, 352.0], [51.7, 353.0], [51.8, 353.0], [51.9, 354.0], [52.0, 355.0], [52.1, 355.0], [52.2, 356.0], [52.3, 357.0], [52.4, 357.0], [52.5, 358.0], [52.6, 359.0], [52.7, 359.0], [52.8, 360.0], [52.9, 361.0], [53.0, 362.0], [53.1, 362.0], [53.2, 363.0], [53.3, 364.0], [53.4, 364.0], [53.5, 365.0], [53.6, 365.0], [53.7, 367.0], [53.8, 368.0], [53.9, 368.0], [54.0, 369.0], [54.1, 369.0], [54.2, 370.0], [54.3, 371.0], [54.4, 372.0], [54.5, 372.0], [54.6, 372.0], [54.7, 374.0], [54.8, 375.0], [54.9, 376.0], [55.0, 376.0], [55.1, 377.0], [55.2, 378.0], [55.3, 379.0], [55.4, 379.0], [55.5, 380.0], [55.6, 381.0], [55.7, 381.0], [55.8, 383.0], [55.9, 384.0], [56.0, 385.0], [56.1, 386.0], [56.2, 386.0], [56.3, 387.0], [56.4, 388.0], [56.5, 389.0], [56.6, 390.0], [56.7, 390.0], [56.8, 391.0], [56.9, 392.0], [57.0, 393.0], [57.1, 394.0], [57.2, 395.0], [57.3, 395.0], [57.4, 396.0], [57.5, 397.0], [57.6, 398.0], [57.7, 399.0], [57.8, 400.0], [57.9, 401.0], [58.0, 402.0], [58.1, 404.0], [58.2, 404.0], [58.3, 405.0], [58.4, 406.0], [58.5, 409.0], [58.6, 409.0], [58.7, 410.0], [58.8, 411.0], [58.9, 412.0], [59.0, 414.0], [59.1, 416.0], [59.2, 417.0], [59.3, 418.0], [59.4, 419.0], [59.5, 420.0], [59.6, 421.0], [59.7, 422.0], [59.8, 423.0], [59.9, 425.0], [60.0, 426.0], [60.1, 428.0], [60.2, 429.0], [60.3, 430.0], [60.4, 432.0], [60.5, 433.0], [60.6, 435.0], [60.7, 437.0], [60.8, 437.0], [60.9, 439.0], [61.0, 441.0], [61.1, 442.0], [61.2, 443.0], [61.3, 446.0], [61.4, 447.0], [61.5, 449.0], [61.6, 451.0], [61.7, 452.0], [61.8, 452.0], [61.9, 453.0], [62.0, 456.0], [62.1, 456.0], [62.2, 457.0], [62.3, 458.0], [62.4, 460.0], [62.5, 462.0], [62.6, 464.0], [62.7, 466.0], [62.8, 467.0], [62.9, 469.0], [63.0, 470.0], [63.1, 471.0], [63.2, 474.0], [63.3, 476.0], [63.4, 477.0], [63.5, 480.0], [63.6, 483.0], [63.7, 484.0], [63.8, 488.0], [63.9, 490.0], [64.0, 491.0], [64.1, 492.0], [64.2, 493.0], [64.3, 494.0], [64.4, 496.0], [64.5, 497.0], [64.6, 499.0], [64.7, 501.0], [64.8, 502.0], [64.9, 503.0], [65.0, 505.0], [65.1, 508.0], [65.2, 509.0], [65.3, 511.0], [65.4, 513.0], [65.5, 515.0], [65.6, 517.0], [65.7, 518.0], [65.8, 520.0], [65.9, 522.0], [66.0, 524.0], [66.1, 527.0], [66.2, 529.0], [66.3, 531.0], [66.4, 534.0], [66.5, 536.0], [66.6, 537.0], [66.7, 541.0], [66.8, 544.0], [66.9, 547.0], [67.0, 549.0], [67.1, 552.0], [67.2, 554.0], [67.3, 556.0], [67.4, 558.0], [67.5, 559.0], [67.6, 561.0], [67.7, 563.0], [67.8, 563.0], [67.9, 565.0], [68.0, 567.0], [68.1, 568.0], [68.2, 569.0], [68.3, 571.0], [68.4, 572.0], [68.5, 574.0], [68.6, 575.0], [68.7, 577.0], [68.8, 578.0], [68.9, 578.0], [69.0, 580.0], [69.1, 581.0], [69.2, 582.0], [69.3, 584.0], [69.4, 584.0], [69.5, 586.0], [69.6, 587.0], [69.7, 588.0], [69.8, 590.0], [69.9, 591.0], [70.0, 592.0], [70.1, 593.0], [70.2, 594.0], [70.3, 595.0], [70.4, 598.0], [70.5, 599.0], [70.6, 599.0], [70.7, 601.0], [70.8, 602.0], [70.9, 603.0], [71.0, 604.0], [71.1, 605.0], [71.2, 607.0], [71.3, 607.0], [71.4, 609.0], [71.5, 610.0], [71.6, 611.0], [71.7, 612.0], [71.8, 612.0], [71.9, 613.0], [72.0, 614.0], [72.1, 614.0], [72.2, 616.0], [72.3, 618.0], [72.4, 618.0], [72.5, 619.0], [72.6, 621.0], [72.7, 622.0], [72.8, 623.0], [72.9, 623.0], [73.0, 624.0], [73.1, 624.0], [73.2, 626.0], [73.3, 626.0], [73.4, 627.0], [73.5, 628.0], [73.6, 628.0], [73.7, 629.0], [73.8, 631.0], [73.9, 631.0], [74.0, 632.0], [74.1, 633.0], [74.2, 635.0], [74.3, 636.0], [74.4, 636.0], [74.5, 637.0], [74.6, 637.0], [74.7, 638.0], [74.8, 639.0], [74.9, 640.0], [75.0, 641.0], [75.1, 642.0], [75.2, 643.0], [75.3, 643.0], [75.4, 644.0], [75.5, 645.0], [75.6, 646.0], [75.7, 646.0], [75.8, 648.0], [75.9, 649.0], [76.0, 650.0], [76.1, 650.0], [76.2, 651.0], [76.3, 652.0], [76.4, 653.0], [76.5, 654.0], [76.6, 655.0], [76.7, 656.0], [76.8, 657.0], [76.9, 658.0], [77.0, 659.0], [77.1, 660.0], [77.2, 662.0], [77.3, 663.0], [77.4, 666.0], [77.5, 668.0], [77.6, 670.0], [77.7, 671.0], [77.8, 672.0], [77.9, 674.0], [78.0, 675.0], [78.1, 677.0], [78.2, 678.0], [78.3, 679.0], [78.4, 679.0], [78.5, 683.0], [78.6, 686.0], [78.7, 686.0], [78.8, 690.0], [78.9, 692.0], [79.0, 693.0], [79.1, 696.0], [79.2, 699.0], [79.3, 701.0], [79.4, 703.0], [79.5, 705.0], [79.6, 706.0], [79.7, 708.0], [79.8, 709.0], [79.9, 712.0], [80.0, 716.0], [80.1, 720.0], [80.2, 726.0], [80.3, 729.0], [80.4, 732.0], [80.5, 735.0], [80.6, 740.0], [80.7, 744.0], [80.8, 748.0], [80.9, 752.0], [81.0, 757.0], [81.1, 758.0], [81.2, 764.0], [81.3, 768.0], [81.4, 771.0], [81.5, 773.0], [81.6, 777.0], [81.7, 781.0], [81.8, 785.0], [81.9, 787.0], [82.0, 792.0], [82.1, 794.0], [82.2, 798.0], [82.3, 802.0], [82.4, 805.0], [82.5, 808.0], [82.6, 813.0], [82.7, 819.0], [82.8, 822.0], [82.9, 827.0], [83.0, 830.0], [83.1, 832.0], [83.2, 834.0], [83.3, 839.0], [83.4, 842.0], [83.5, 849.0], [83.6, 855.0], [83.7, 859.0], [83.8, 864.0], [83.9, 868.0], [84.0, 872.0], [84.1, 875.0], [84.2, 879.0], [84.3, 883.0], [84.4, 885.0], [84.5, 888.0], [84.6, 890.0], [84.7, 891.0], [84.8, 893.0], [84.9, 894.0], [85.0, 897.0], [85.1, 900.0], [85.2, 902.0], [85.3, 905.0], [85.4, 906.0], [85.5, 907.0], [85.6, 908.0], [85.7, 908.0], [85.8, 909.0], [85.9, 911.0], [86.0, 912.0], [86.1, 914.0], [86.2, 916.0], [86.3, 920.0], [86.4, 923.0], [86.5, 925.0], [86.6, 927.0], [86.7, 928.0], [86.8, 930.0], [86.9, 932.0], [87.0, 934.0], [87.1, 936.0], [87.2, 937.0], [87.3, 939.0], [87.4, 942.0], [87.5, 945.0], [87.6, 950.0], [87.7, 951.0], [87.8, 953.0], [87.9, 955.0], [88.0, 958.0], [88.1, 959.0], [88.2, 960.0], [88.3, 963.0], [88.4, 968.0], [88.5, 971.0], [88.6, 974.0], [88.7, 977.0], [88.8, 986.0], [88.9, 987.0], [89.0, 996.0], [89.1, 1002.0], [89.2, 1006.0], [89.3, 1014.0], [89.4, 1017.0], [89.5, 1028.0], [89.6, 1033.0], [89.7, 1037.0], [89.8, 1042.0], [89.9, 1045.0], [90.0, 1054.0], [90.1, 1068.0], [90.2, 1075.0], [90.3, 1098.0], [90.4, 1110.0], [90.5, 1126.0], [90.6, 1131.0], [90.7, 1136.0], [90.8, 1141.0], [90.9, 1149.0], [91.0, 1154.0], [91.1, 1159.0], [91.2, 1165.0], [91.3, 1168.0], [91.4, 1174.0], [91.5, 1179.0], [91.6, 1183.0], [91.7, 1185.0], [91.8, 1186.0], [91.9, 1190.0], [92.0, 1195.0], [92.1, 1202.0], [92.2, 1208.0], [92.3, 1211.0], [92.4, 1221.0], [92.5, 1223.0], [92.6, 1227.0], [92.7, 1235.0], [92.8, 1240.0], [92.9, 1250.0], [93.0, 1255.0], [93.1, 1261.0], [93.2, 1271.0], [93.3, 1283.0], [93.4, 1289.0], [93.5, 1309.0], [93.6, 1336.0], [93.7, 1359.0], [93.8, 1373.0], [93.9, 1392.0], [94.0, 1419.0], [94.1, 1449.0], [94.2, 1467.0], [94.3, 1515.0], [94.4, 1540.0], [94.5, 1574.0], [94.6, 1596.0], [94.7, 1634.0], [94.8, 1668.0], [94.9, 1717.0], [95.0, 1805.0], [95.1, 1836.0], [95.2, 1922.0], [95.3, 1983.0], [95.4, 2000.0], [95.5, 2034.0], [95.6, 2142.0], [95.7, 2236.0], [95.8, 2294.0], [95.9, 2353.0], [96.0, 2445.0], [96.1, 2527.0], [96.2, 2602.0], [96.3, 2699.0], [96.4, 2777.0], [96.5, 2813.0], [96.6, 2876.0], [96.7, 2951.0], [96.8, 3039.0], [96.9, 3113.0], [97.0, 3185.0], [97.1, 3294.0], [97.2, 3345.0], [97.3, 3480.0], [97.4, 3601.0], [97.5, 3789.0], [97.6, 3844.0], [97.7, 3907.0], [97.8, 3956.0], [97.9, 4045.0], [98.0, 4106.0], [98.1, 4426.0], [98.2, 4776.0], [98.3, 5085.0], [98.4, 5295.0], [98.5, 5721.0], [98.6, 5909.0], [98.7, 6634.0], [98.8, 7834.0], [98.9, 7897.0], [99.0, 8040.0], [99.1, 8208.0], [99.2, 8423.0], [99.3, 8823.0], [99.4, 9436.0], [99.5, 10473.0], [99.6, 10701.0], [99.7, 10776.0], [99.8, 11018.0], [99.9, 14321.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 937.0, "series": [{"data": [[0.0, 937.0], [600.0, 446.0], [700.0, 157.0], [800.0, 147.0], [900.0, 207.0], [1000.0, 65.0], [1100.0, 91.0], [1200.0, 72.0], [1300.0, 24.0], [1400.0, 18.0], [1500.0, 18.0], [1600.0, 13.0], [1700.0, 7.0], [1800.0, 10.0], [1900.0, 11.0], [2000.0, 10.0], [2100.0, 3.0], [2200.0, 9.0], [2300.0, 7.0], [2400.0, 6.0], [2500.0, 6.0], [2600.0, 7.0], [2700.0, 8.0], [2800.0, 8.0], [2900.0, 7.0], [3000.0, 4.0], [3100.0, 10.0], [3200.0, 5.0], [3300.0, 7.0], [3400.0, 2.0], [3500.0, 5.0], [3600.0, 3.0], [3700.0, 3.0], [3800.0, 8.0], [3900.0, 9.0], [4000.0, 7.0], [4300.0, 1.0], [4100.0, 4.0], [4500.0, 2.0], [4400.0, 3.0], [4600.0, 1.0], [4700.0, 1.0], [5000.0, 4.0], [4900.0, 1.0], [5100.0, 1.0], [5300.0, 4.0], [5200.0, 4.0], [5600.0, 1.0], [5800.0, 3.0], [5700.0, 2.0], [6100.0, 2.0], [5900.0, 1.0], [6200.0, 1.0], [6600.0, 1.0], [6400.0, 1.0], [6800.0, 1.0], [7300.0, 1.0], [7900.0, 3.0], [7800.0, 6.0], [7700.0, 2.0], [8100.0, 3.0], [8000.0, 4.0], [8200.0, 4.0], [8500.0, 1.0], [8400.0, 3.0], [8300.0, 1.0], [8600.0, 1.0], [8800.0, 1.0], [9100.0, 2.0], [9000.0, 1.0], [9400.0, 2.0], [9700.0, 1.0], [9300.0, 1.0], [9800.0, 1.0], [10200.0, 1.0], [10700.0, 6.0], [10600.0, 1.0], [10500.0, 3.0], [10400.0, 2.0], [10800.0, 3.0], [11100.0, 1.0], [11000.0, 4.0], [11900.0, 1.0], [14300.0, 1.0], [17200.0, 1.0], [18300.0, 1.0], [20700.0, 2.0], [21000.0, 1.0], [100.0, 776.0], [200.0, 517.0], [300.0, 767.0], [400.0, 359.0], [500.0, 309.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 298.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3357.0, "series": [{"data": [[0.0, 3357.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1535.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 298.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.950947603121516, "minX": 1.6023759E12, "maxY": 10.0, "series": [{"data": [[1.6023759E12, 9.99721059972106], [1.6023762E12, 9.950947603121516], [1.60237602E12, 10.0], [1.60237614E12, 10.0], [1.60237596E12, 10.0], [1.60237608E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023762E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 289.0, "minX": 1.0, "maxY": 8208.0, "series": [{"data": [[8.0, 672.0], [4.0, 759.0], [2.0, 8208.0], [1.0, 8053.0], [9.0, 289.0], [10.0, 636.4561776061818], [5.0, 620.0], [6.0, 751.0], [7.0, 368.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99113680154139, 639.3052023121372]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4317.433333333333, "minX": 1.6023759E12, "maxY": 5135772.466666667, "series": [{"data": [[1.6023759E12, 2715845.716666667], [1.6023762E12, 3663989.15], [1.60237602E12, 3969771.6166666667], [1.60237614E12, 5135772.466666667], [1.60237596E12, 3715131.6166666667], [1.60237608E12, 4441327.516666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023759E12, 5419.583333333333], [1.6023762E12, 7057.483333333334], [1.60237602E12, 6572.5], [1.60237614E12, 6584.733333333334], [1.60237596E12, 4317.433333333333], [1.60237608E12, 9989.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023762E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 446.89356814701426, "minX": 1.6023759E12, "maxY": 1039.9076655052263, "series": [{"data": [[1.6023759E12, 534.1548117154811], [1.6023762E12, 603.1950947603116], [1.60237602E12, 716.3181818181808], [1.60237614E12, 714.5895348837204], [1.60237596E12, 1039.9076655052263], [1.60237608E12, 446.89356814701426]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023762E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 445.61102603368977, "minX": 1.6023759E12, "maxY": 1037.3954703832753, "series": [{"data": [[1.6023759E12, 532.5271966527196], [1.6023762E12, 601.9777034559638], [1.60237602E12, 714.3433014354066], [1.60237614E12, 712.8569767441863], [1.60237596E12, 1037.3954703832753], [1.60237608E12, 445.61102603368977]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023762E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011148272017837236, "minX": 1.6023759E12, "maxY": 0.11297071129707104, "series": [{"data": [[1.6023759E12, 0.11297071129707104], [1.6023762E12, 0.011148272017837236], [1.60237602E12, 0.015550239234449764], [1.60237614E12, 0.011627906976744184], [1.60237596E12, 0.015679442508710797], [1.60237608E12, 0.012251148545176123]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023762E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 17.0, "minX": 1.6023759E12, "maxY": 21011.0, "series": [{"data": [[1.6023759E12, 17299.0], [1.6023762E12, 21011.0], [1.60237602E12, 20704.0], [1.60237614E12, 8423.0], [1.60237596E12, 18387.0], [1.60237608E12, 8518.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023759E12, 34.46199982881546], [1.6023762E12, 29.0], [1.60237602E12, 34.0], [1.60237614E12, 29.0], [1.60237596E12, 33.0], [1.60237608E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023759E12, 35.10820006847381], [1.6023762E12, 29.0], [1.60237602E12, 34.0], [1.60237614E12, 29.52390008211136], [1.60237596E12, 33.0], [1.60237608E12, 32.939300124645236]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023759E12, 34.82099991440773], [1.6023762E12, 29.0], [1.60237602E12, 34.0], [1.60237614E12, 29.1794998973608], [1.60237596E12, 33.0], [1.60237608E12, 32.41649984419346]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023759E12, 31.0], [1.6023762E12, 18.0], [1.60237602E12, 25.0], [1.60237614E12, 17.0], [1.60237596E12, 26.0], [1.60237608E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023759E12, 285.0], [1.6023762E12, 316.0], [1.60237602E12, 400.0], [1.60237614E12, 504.5], [1.60237596E12, 611.5], [1.60237608E12, 242.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023762E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 98.0, "minX": 1.0, "maxY": 3153.0, "series": [{"data": [[2.0, 1516.5], [33.0, 154.0], [32.0, 309.5], [35.0, 251.0], [34.0, 216.5], [36.0, 132.5], [39.0, 234.5], [38.0, 283.0], [41.0, 122.0], [40.0, 220.0], [44.0, 220.5], [3.0, 696.0], [49.0, 98.0], [48.0, 206.5], [54.0, 101.5], [63.0, 112.0], [4.0, 630.0], [5.0, 624.0], [6.0, 347.5], [7.0, 611.0], [8.0, 468.0], [9.0, 381.0], [10.0, 596.0], [11.0, 646.0], [12.0, 612.0], [13.0, 614.0], [14.0, 619.0], [15.0, 497.0], [16.0, 423.0], [1.0, 3153.0], [17.0, 424.0], [18.0, 388.5], [19.0, 380.0], [20.0, 351.5], [21.0, 410.0], [22.0, 341.0], [23.0, 356.5], [24.0, 314.0], [25.0, 342.0], [26.0, 261.5], [27.0, 219.0], [28.0, 335.0], [29.0, 289.5], [30.0, 273.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 97.5, "minX": 1.0, "maxY": 3151.5, "series": [{"data": [[2.0, 1515.0], [33.0, 153.0], [32.0, 308.0], [35.0, 250.5], [34.0, 215.0], [36.0, 131.5], [39.0, 234.0], [38.0, 282.0], [41.0, 121.0], [40.0, 219.5], [44.0, 220.0], [3.0, 695.0], [49.0, 97.5], [48.0, 206.5], [54.0, 101.5], [63.0, 112.0], [4.0, 627.5], [5.0, 624.0], [6.0, 347.5], [7.0, 609.5], [8.0, 466.5], [9.0, 375.0], [10.0, 593.0], [11.0, 641.0], [12.0, 608.5], [13.0, 611.0], [14.0, 614.0], [15.0, 496.0], [16.0, 420.5], [1.0, 3151.5], [17.0, 423.5], [18.0, 388.5], [19.0, 379.0], [20.0, 351.0], [21.0, 410.0], [22.0, 339.0], [23.0, 356.0], [24.0, 313.5], [25.0, 341.0], [26.0, 261.0], [27.0, 218.0], [28.0, 334.5], [29.0, 287.0], [30.0, 273.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.566666666666666, "minX": 1.6023759E12, "maxY": 21.766666666666666, "series": [{"data": [[1.6023759E12, 12.116666666666667], [1.6023762E12, 14.783333333333333], [1.60237602E12, 13.933333333333334], [1.60237614E12, 14.333333333333334], [1.60237596E12, 9.566666666666666], [1.60237608E12, 21.766666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023762E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.566666666666666, "minX": 1.6023759E12, "maxY": 21.766666666666666, "series": [{"data": [[1.6023759E12, 11.95], [1.6023762E12, 14.95], [1.60237602E12, 13.933333333333334], [1.60237614E12, 14.333333333333334], [1.60237596E12, 9.566666666666666], [1.60237608E12, 21.766666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023762E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.566666666666666, "minX": 1.6023759E12, "maxY": 21.766666666666666, "series": [{"data": [[1.6023759E12, 11.95], [1.6023762E12, 14.95], [1.60237602E12, 13.933333333333334], [1.60237614E12, 14.333333333333334], [1.60237596E12, 9.566666666666666], [1.60237608E12, 21.766666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023762E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.566666666666666, "minX": 1.6023759E12, "maxY": 21.766666666666666, "series": [{"data": [[1.6023759E12, 11.95], [1.6023762E12, 14.95], [1.60237602E12, 13.933333333333334], [1.60237614E12, 14.333333333333334], [1.60237596E12, 9.566666666666666], [1.60237608E12, 21.766666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023762E12, "title": "Total Transactions Per Second"}},
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

