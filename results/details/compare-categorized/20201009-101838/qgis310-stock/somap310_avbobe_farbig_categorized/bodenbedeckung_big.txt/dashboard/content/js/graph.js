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
        data: {"result": {"minY": 20.0, "minX": 0.0, "maxY": 20760.0, "series": [{"data": [[0.0, 20.0], [0.1, 23.0], [0.2, 26.0], [0.3, 27.0], [0.4, 28.0], [0.5, 29.0], [0.6, 29.0], [0.7, 30.0], [0.8, 31.0], [0.9, 31.0], [1.0, 31.0], [1.1, 32.0], [1.2, 32.0], [1.3, 32.0], [1.4, 33.0], [1.5, 33.0], [1.6, 34.0], [1.7, 34.0], [1.8, 34.0], [1.9, 34.0], [2.0, 34.0], [2.1, 35.0], [2.2, 35.0], [2.3, 35.0], [2.4, 35.0], [2.5, 36.0], [2.6, 36.0], [2.7, 36.0], [2.8, 36.0], [2.9, 36.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 38.0], [3.6, 38.0], [3.7, 39.0], [3.8, 39.0], [3.9, 39.0], [4.0, 39.0], [4.1, 40.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 41.0], [4.6, 41.0], [4.7, 41.0], [4.8, 42.0], [4.9, 42.0], [5.0, 42.0], [5.1, 43.0], [5.2, 43.0], [5.3, 43.0], [5.4, 44.0], [5.5, 44.0], [5.6, 44.0], [5.7, 45.0], [5.8, 45.0], [5.9, 45.0], [6.0, 45.0], [6.1, 46.0], [6.2, 46.0], [6.3, 46.0], [6.4, 47.0], [6.5, 47.0], [6.6, 47.0], [6.7, 48.0], [6.8, 48.0], [6.9, 48.0], [7.0, 48.0], [7.1, 49.0], [7.2, 49.0], [7.3, 49.0], [7.4, 49.0], [7.5, 50.0], [7.6, 50.0], [7.7, 50.0], [7.8, 51.0], [7.9, 51.0], [8.0, 51.0], [8.1, 51.0], [8.2, 52.0], [8.3, 52.0], [8.4, 53.0], [8.5, 53.0], [8.6, 53.0], [8.7, 54.0], [8.8, 54.0], [8.9, 55.0], [9.0, 55.0], [9.1, 56.0], [9.2, 56.0], [9.3, 56.0], [9.4, 57.0], [9.5, 57.0], [9.6, 58.0], [9.7, 58.0], [9.8, 59.0], [9.9, 60.0], [10.0, 60.0], [10.1, 60.0], [10.2, 61.0], [10.3, 61.0], [10.4, 61.0], [10.5, 61.0], [10.6, 62.0], [10.7, 62.0], [10.8, 63.0], [10.9, 63.0], [11.0, 63.0], [11.1, 64.0], [11.2, 64.0], [11.3, 64.0], [11.4, 65.0], [11.5, 65.0], [11.6, 66.0], [11.7, 66.0], [11.8, 66.0], [11.9, 68.0], [12.0, 68.0], [12.1, 68.0], [12.2, 69.0], [12.3, 69.0], [12.4, 70.0], [12.5, 70.0], [12.6, 71.0], [12.7, 71.0], [12.8, 72.0], [12.9, 72.0], [13.0, 72.0], [13.1, 73.0], [13.2, 73.0], [13.3, 74.0], [13.4, 74.0], [13.5, 74.0], [13.6, 75.0], [13.7, 75.0], [13.8, 75.0], [13.9, 76.0], [14.0, 76.0], [14.1, 77.0], [14.2, 77.0], [14.3, 78.0], [14.4, 78.0], [14.5, 78.0], [14.6, 79.0], [14.7, 79.0], [14.8, 80.0], [14.9, 80.0], [15.0, 81.0], [15.1, 81.0], [15.2, 82.0], [15.3, 82.0], [15.4, 83.0], [15.5, 83.0], [15.6, 83.0], [15.7, 84.0], [15.8, 84.0], [15.9, 84.0], [16.0, 85.0], [16.1, 85.0], [16.2, 86.0], [16.3, 86.0], [16.4, 87.0], [16.5, 87.0], [16.6, 88.0], [16.7, 89.0], [16.8, 89.0], [16.9, 89.0], [17.0, 90.0], [17.1, 90.0], [17.2, 91.0], [17.3, 91.0], [17.4, 92.0], [17.5, 92.0], [17.6, 93.0], [17.7, 93.0], [17.8, 93.0], [17.9, 94.0], [18.0, 94.0], [18.1, 95.0], [18.2, 96.0], [18.3, 96.0], [18.4, 97.0], [18.5, 97.0], [18.6, 98.0], [18.7, 99.0], [18.8, 99.0], [18.9, 101.0], [19.0, 101.0], [19.1, 101.0], [19.2, 102.0], [19.3, 102.0], [19.4, 103.0], [19.5, 104.0], [19.6, 105.0], [19.7, 105.0], [19.8, 106.0], [19.9, 106.0], [20.0, 106.0], [20.1, 107.0], [20.2, 107.0], [20.3, 108.0], [20.4, 108.0], [20.5, 109.0], [20.6, 109.0], [20.7, 110.0], [20.8, 110.0], [20.9, 111.0], [21.0, 112.0], [21.1, 112.0], [21.2, 113.0], [21.3, 113.0], [21.4, 114.0], [21.5, 114.0], [21.6, 115.0], [21.7, 116.0], [21.8, 116.0], [21.9, 117.0], [22.0, 118.0], [22.1, 118.0], [22.2, 119.0], [22.3, 119.0], [22.4, 120.0], [22.5, 120.0], [22.6, 121.0], [22.7, 122.0], [22.8, 122.0], [22.9, 123.0], [23.0, 124.0], [23.1, 125.0], [23.2, 125.0], [23.3, 126.0], [23.4, 127.0], [23.5, 127.0], [23.6, 128.0], [23.7, 130.0], [23.8, 130.0], [23.9, 131.0], [24.0, 132.0], [24.1, 133.0], [24.2, 133.0], [24.3, 134.0], [24.4, 134.0], [24.5, 135.0], [24.6, 136.0], [24.7, 137.0], [24.8, 138.0], [24.9, 139.0], [25.0, 139.0], [25.1, 140.0], [25.2, 141.0], [25.3, 142.0], [25.4, 142.0], [25.5, 143.0], [25.6, 143.0], [25.7, 144.0], [25.8, 145.0], [25.9, 145.0], [26.0, 146.0], [26.1, 147.0], [26.2, 148.0], [26.3, 148.0], [26.4, 149.0], [26.5, 150.0], [26.6, 151.0], [26.7, 152.0], [26.8, 152.0], [26.9, 153.0], [27.0, 154.0], [27.1, 155.0], [27.2, 156.0], [27.3, 157.0], [27.4, 157.0], [27.5, 157.0], [27.6, 158.0], [27.7, 158.0], [27.8, 159.0], [27.9, 160.0], [28.0, 160.0], [28.1, 160.0], [28.2, 161.0], [28.3, 162.0], [28.4, 162.0], [28.5, 164.0], [28.6, 165.0], [28.7, 165.0], [28.8, 166.0], [28.9, 167.0], [29.0, 168.0], [29.1, 169.0], [29.2, 170.0], [29.3, 170.0], [29.4, 172.0], [29.5, 172.0], [29.6, 173.0], [29.7, 173.0], [29.8, 174.0], [29.9, 174.0], [30.0, 175.0], [30.1, 175.0], [30.2, 176.0], [30.3, 176.0], [30.4, 177.0], [30.5, 178.0], [30.6, 179.0], [30.7, 179.0], [30.8, 181.0], [30.9, 182.0], [31.0, 183.0], [31.1, 183.0], [31.2, 185.0], [31.3, 185.0], [31.4, 186.0], [31.5, 187.0], [31.6, 188.0], [31.7, 189.0], [31.8, 189.0], [31.9, 190.0], [32.0, 191.0], [32.1, 192.0], [32.2, 192.0], [32.3, 193.0], [32.4, 193.0], [32.5, 194.0], [32.6, 195.0], [32.7, 196.0], [32.8, 197.0], [32.9, 197.0], [33.0, 198.0], [33.1, 198.0], [33.2, 199.0], [33.3, 199.0], [33.4, 200.0], [33.5, 201.0], [33.6, 202.0], [33.7, 203.0], [33.8, 204.0], [33.9, 205.0], [34.0, 205.0], [34.1, 207.0], [34.2, 207.0], [34.3, 208.0], [34.4, 209.0], [34.5, 210.0], [34.6, 212.0], [34.7, 214.0], [34.8, 214.0], [34.9, 215.0], [35.0, 217.0], [35.1, 218.0], [35.2, 219.0], [35.3, 220.0], [35.4, 221.0], [35.5, 223.0], [35.6, 224.0], [35.7, 225.0], [35.8, 226.0], [35.9, 227.0], [36.0, 228.0], [36.1, 229.0], [36.2, 230.0], [36.3, 230.0], [36.4, 231.0], [36.5, 232.0], [36.6, 233.0], [36.7, 234.0], [36.8, 235.0], [36.9, 235.0], [37.0, 236.0], [37.1, 237.0], [37.2, 238.0], [37.3, 239.0], [37.4, 240.0], [37.5, 241.0], [37.6, 242.0], [37.7, 243.0], [37.8, 245.0], [37.9, 246.0], [38.0, 247.0], [38.1, 250.0], [38.2, 252.0], [38.3, 254.0], [38.4, 255.0], [38.5, 256.0], [38.6, 257.0], [38.7, 258.0], [38.8, 259.0], [38.9, 260.0], [39.0, 260.0], [39.1, 261.0], [39.2, 262.0], [39.3, 265.0], [39.4, 265.0], [39.5, 268.0], [39.6, 269.0], [39.7, 270.0], [39.8, 270.0], [39.9, 271.0], [40.0, 272.0], [40.1, 273.0], [40.2, 273.0], [40.3, 275.0], [40.4, 276.0], [40.5, 276.0], [40.6, 278.0], [40.7, 279.0], [40.8, 280.0], [40.9, 281.0], [41.0, 282.0], [41.1, 284.0], [41.2, 285.0], [41.3, 286.0], [41.4, 287.0], [41.5, 288.0], [41.6, 289.0], [41.7, 290.0], [41.8, 291.0], [41.9, 293.0], [42.0, 294.0], [42.1, 295.0], [42.2, 295.0], [42.3, 296.0], [42.4, 297.0], [42.5, 298.0], [42.6, 299.0], [42.7, 299.0], [42.8, 301.0], [42.9, 302.0], [43.0, 303.0], [43.1, 305.0], [43.2, 306.0], [43.3, 306.0], [43.4, 307.0], [43.5, 308.0], [43.6, 309.0], [43.7, 309.0], [43.8, 310.0], [43.9, 311.0], [44.0, 311.0], [44.1, 312.0], [44.2, 313.0], [44.3, 314.0], [44.4, 315.0], [44.5, 316.0], [44.6, 316.0], [44.7, 317.0], [44.8, 318.0], [44.9, 319.0], [45.0, 319.0], [45.1, 319.0], [45.2, 320.0], [45.3, 320.0], [45.4, 321.0], [45.5, 321.0], [45.6, 322.0], [45.7, 323.0], [45.8, 323.0], [45.9, 324.0], [46.0, 325.0], [46.1, 325.0], [46.2, 326.0], [46.3, 326.0], [46.4, 327.0], [46.5, 328.0], [46.6, 328.0], [46.7, 329.0], [46.8, 329.0], [46.9, 329.0], [47.0, 330.0], [47.1, 331.0], [47.2, 332.0], [47.3, 332.0], [47.4, 333.0], [47.5, 333.0], [47.6, 334.0], [47.7, 334.0], [47.8, 335.0], [47.9, 335.0], [48.0, 336.0], [48.1, 336.0], [48.2, 337.0], [48.3, 338.0], [48.4, 338.0], [48.5, 338.0], [48.6, 339.0], [48.7, 340.0], [48.8, 340.0], [48.9, 341.0], [49.0, 342.0], [49.1, 342.0], [49.2, 343.0], [49.3, 344.0], [49.4, 345.0], [49.5, 345.0], [49.6, 346.0], [49.7, 346.0], [49.8, 347.0], [49.9, 347.0], [50.0, 348.0], [50.1, 348.0], [50.2, 349.0], [50.3, 350.0], [50.4, 351.0], [50.5, 352.0], [50.6, 352.0], [50.7, 353.0], [50.8, 353.0], [50.9, 354.0], [51.0, 355.0], [51.1, 355.0], [51.2, 356.0], [51.3, 357.0], [51.4, 358.0], [51.5, 358.0], [51.6, 359.0], [51.7, 360.0], [51.8, 360.0], [51.9, 361.0], [52.0, 362.0], [52.1, 362.0], [52.2, 363.0], [52.3, 364.0], [52.4, 364.0], [52.5, 365.0], [52.6, 365.0], [52.7, 366.0], [52.8, 367.0], [52.9, 367.0], [53.0, 368.0], [53.1, 368.0], [53.2, 369.0], [53.3, 370.0], [53.4, 371.0], [53.5, 372.0], [53.6, 373.0], [53.7, 374.0], [53.8, 375.0], [53.9, 376.0], [54.0, 377.0], [54.1, 378.0], [54.2, 378.0], [54.3, 379.0], [54.4, 380.0], [54.5, 381.0], [54.6, 382.0], [54.7, 383.0], [54.8, 383.0], [54.9, 384.0], [55.0, 385.0], [55.1, 387.0], [55.2, 387.0], [55.3, 388.0], [55.4, 389.0], [55.5, 391.0], [55.6, 392.0], [55.7, 392.0], [55.8, 393.0], [55.9, 394.0], [56.0, 395.0], [56.1, 396.0], [56.2, 396.0], [56.3, 397.0], [56.4, 397.0], [56.5, 398.0], [56.6, 399.0], [56.7, 399.0], [56.8, 400.0], [56.9, 402.0], [57.0, 402.0], [57.1, 403.0], [57.2, 403.0], [57.3, 405.0], [57.4, 406.0], [57.5, 408.0], [57.6, 409.0], [57.7, 410.0], [57.8, 411.0], [57.9, 412.0], [58.0, 413.0], [58.1, 414.0], [58.2, 415.0], [58.3, 416.0], [58.4, 416.0], [58.5, 417.0], [58.6, 417.0], [58.7, 420.0], [58.8, 421.0], [58.9, 422.0], [59.0, 423.0], [59.1, 425.0], [59.2, 426.0], [59.3, 429.0], [59.4, 430.0], [59.5, 430.0], [59.6, 432.0], [59.7, 433.0], [59.8, 435.0], [59.9, 436.0], [60.0, 437.0], [60.1, 438.0], [60.2, 440.0], [60.3, 441.0], [60.4, 443.0], [60.5, 444.0], [60.6, 444.0], [60.7, 447.0], [60.8, 448.0], [60.9, 449.0], [61.0, 449.0], [61.1, 451.0], [61.2, 451.0], [61.3, 453.0], [61.4, 455.0], [61.5, 455.0], [61.6, 457.0], [61.7, 458.0], [61.8, 459.0], [61.9, 460.0], [62.0, 461.0], [62.1, 463.0], [62.2, 465.0], [62.3, 467.0], [62.4, 469.0], [62.5, 470.0], [62.6, 471.0], [62.7, 472.0], [62.8, 473.0], [62.9, 475.0], [63.0, 476.0], [63.1, 477.0], [63.2, 480.0], [63.3, 480.0], [63.4, 482.0], [63.5, 484.0], [63.6, 487.0], [63.7, 488.0], [63.8, 490.0], [63.9, 491.0], [64.0, 492.0], [64.1, 494.0], [64.2, 495.0], [64.3, 496.0], [64.4, 499.0], [64.5, 500.0], [64.6, 502.0], [64.7, 504.0], [64.8, 507.0], [64.9, 509.0], [65.0, 512.0], [65.1, 514.0], [65.2, 516.0], [65.3, 518.0], [65.4, 522.0], [65.5, 523.0], [65.6, 525.0], [65.7, 528.0], [65.8, 529.0], [65.9, 532.0], [66.0, 534.0], [66.1, 535.0], [66.2, 537.0], [66.3, 539.0], [66.4, 542.0], [66.5, 544.0], [66.6, 546.0], [66.7, 549.0], [66.8, 551.0], [66.9, 554.0], [67.0, 556.0], [67.1, 558.0], [67.2, 559.0], [67.3, 560.0], [67.4, 565.0], [67.5, 568.0], [67.6, 569.0], [67.7, 570.0], [67.8, 573.0], [67.9, 574.0], [68.0, 575.0], [68.1, 576.0], [68.2, 576.0], [68.3, 577.0], [68.4, 577.0], [68.5, 578.0], [68.6, 580.0], [68.7, 581.0], [68.8, 581.0], [68.9, 582.0], [69.0, 583.0], [69.1, 584.0], [69.2, 585.0], [69.3, 587.0], [69.4, 588.0], [69.5, 588.0], [69.6, 589.0], [69.7, 591.0], [69.8, 591.0], [69.9, 592.0], [70.0, 593.0], [70.1, 593.0], [70.2, 595.0], [70.3, 595.0], [70.4, 596.0], [70.5, 597.0], [70.6, 599.0], [70.7, 600.0], [70.8, 602.0], [70.9, 603.0], [71.0, 604.0], [71.1, 605.0], [71.2, 606.0], [71.3, 607.0], [71.4, 608.0], [71.5, 609.0], [71.6, 609.0], [71.7, 610.0], [71.8, 611.0], [71.9, 612.0], [72.0, 613.0], [72.1, 613.0], [72.2, 614.0], [72.3, 615.0], [72.4, 616.0], [72.5, 616.0], [72.6, 617.0], [72.7, 618.0], [72.8, 618.0], [72.9, 619.0], [73.0, 620.0], [73.1, 621.0], [73.2, 623.0], [73.3, 624.0], [73.4, 625.0], [73.5, 626.0], [73.6, 627.0], [73.7, 628.0], [73.8, 629.0], [73.9, 631.0], [74.0, 632.0], [74.1, 633.0], [74.2, 636.0], [74.3, 637.0], [74.4, 638.0], [74.5, 639.0], [74.6, 640.0], [74.7, 641.0], [74.8, 641.0], [74.9, 642.0], [75.0, 643.0], [75.1, 643.0], [75.2, 644.0], [75.3, 645.0], [75.4, 646.0], [75.5, 647.0], [75.6, 649.0], [75.7, 649.0], [75.8, 651.0], [75.9, 652.0], [76.0, 654.0], [76.1, 655.0], [76.2, 655.0], [76.3, 656.0], [76.4, 656.0], [76.5, 657.0], [76.6, 658.0], [76.7, 658.0], [76.8, 660.0], [76.9, 660.0], [77.0, 663.0], [77.1, 664.0], [77.2, 665.0], [77.3, 667.0], [77.4, 669.0], [77.5, 670.0], [77.6, 672.0], [77.7, 673.0], [77.8, 674.0], [77.9, 676.0], [78.0, 677.0], [78.1, 679.0], [78.2, 681.0], [78.3, 681.0], [78.4, 683.0], [78.5, 686.0], [78.6, 687.0], [78.7, 688.0], [78.8, 690.0], [78.9, 692.0], [79.0, 694.0], [79.1, 696.0], [79.2, 698.0], [79.3, 701.0], [79.4, 703.0], [79.5, 705.0], [79.6, 708.0], [79.7, 710.0], [79.8, 712.0], [79.9, 714.0], [80.0, 717.0], [80.1, 720.0], [80.2, 723.0], [80.3, 726.0], [80.4, 727.0], [80.5, 730.0], [80.6, 731.0], [80.7, 735.0], [80.8, 737.0], [80.9, 739.0], [81.0, 741.0], [81.1, 745.0], [81.2, 750.0], [81.3, 755.0], [81.4, 760.0], [81.5, 762.0], [81.6, 764.0], [81.7, 769.0], [81.8, 772.0], [81.9, 780.0], [82.0, 783.0], [82.1, 786.0], [82.2, 787.0], [82.3, 789.0], [82.4, 792.0], [82.5, 796.0], [82.6, 802.0], [82.7, 805.0], [82.8, 812.0], [82.9, 812.0], [83.0, 816.0], [83.1, 819.0], [83.2, 823.0], [83.3, 830.0], [83.4, 834.0], [83.5, 837.0], [83.6, 841.0], [83.7, 844.0], [83.8, 853.0], [83.9, 857.0], [84.0, 858.0], [84.1, 860.0], [84.2, 863.0], [84.3, 869.0], [84.4, 872.0], [84.5, 875.0], [84.6, 881.0], [84.7, 882.0], [84.8, 884.0], [84.9, 886.0], [85.0, 888.0], [85.1, 891.0], [85.2, 892.0], [85.3, 895.0], [85.4, 897.0], [85.5, 899.0], [85.6, 902.0], [85.7, 904.0], [85.8, 905.0], [85.9, 907.0], [86.0, 908.0], [86.1, 911.0], [86.2, 914.0], [86.3, 915.0], [86.4, 917.0], [86.5, 921.0], [86.6, 921.0], [86.7, 923.0], [86.8, 924.0], [86.9, 925.0], [87.0, 927.0], [87.1, 929.0], [87.2, 932.0], [87.3, 933.0], [87.4, 935.0], [87.5, 936.0], [87.6, 938.0], [87.7, 942.0], [87.8, 944.0], [87.9, 947.0], [88.0, 953.0], [88.1, 956.0], [88.2, 959.0], [88.3, 962.0], [88.4, 967.0], [88.5, 969.0], [88.6, 976.0], [88.7, 983.0], [88.8, 988.0], [88.9, 992.0], [89.0, 994.0], [89.1, 997.0], [89.2, 1000.0], [89.3, 1005.0], [89.4, 1007.0], [89.5, 1014.0], [89.6, 1019.0], [89.7, 1026.0], [89.8, 1028.0], [89.9, 1032.0], [90.0, 1041.0], [90.1, 1053.0], [90.2, 1065.0], [90.3, 1068.0], [90.4, 1089.0], [90.5, 1096.0], [90.6, 1105.0], [90.7, 1132.0], [90.8, 1145.0], [90.9, 1148.0], [91.0, 1152.0], [91.1, 1158.0], [91.2, 1167.0], [91.3, 1172.0], [91.4, 1179.0], [91.5, 1183.0], [91.6, 1190.0], [91.7, 1194.0], [91.8, 1198.0], [91.9, 1202.0], [92.0, 1209.0], [92.1, 1215.0], [92.2, 1223.0], [92.3, 1226.0], [92.4, 1233.0], [92.5, 1236.0], [92.6, 1240.0], [92.7, 1245.0], [92.8, 1248.0], [92.9, 1254.0], [93.0, 1262.0], [93.1, 1266.0], [93.2, 1276.0], [93.3, 1285.0], [93.4, 1292.0], [93.5, 1301.0], [93.6, 1312.0], [93.7, 1335.0], [93.8, 1351.0], [93.9, 1370.0], [94.0, 1400.0], [94.1, 1421.0], [94.2, 1426.0], [94.3, 1452.0], [94.4, 1461.0], [94.5, 1490.0], [94.6, 1532.0], [94.7, 1568.0], [94.8, 1607.0], [94.9, 1671.0], [95.0, 1711.0], [95.1, 1745.0], [95.2, 1797.0], [95.3, 1928.0], [95.4, 1981.0], [95.5, 2013.0], [95.6, 2099.0], [95.7, 2137.0], [95.8, 2220.0], [95.9, 2285.0], [96.0, 2363.0], [96.1, 2484.0], [96.2, 2581.0], [96.3, 2621.0], [96.4, 2672.0], [96.5, 2697.0], [96.6, 2789.0], [96.7, 2820.0], [96.8, 2851.0], [96.9, 2924.0], [97.0, 2973.0], [97.1, 3012.0], [97.2, 3063.0], [97.3, 3109.0], [97.4, 3199.0], [97.5, 3382.0], [97.6, 3546.0], [97.7, 3688.0], [97.8, 3831.0], [97.9, 3861.0], [98.0, 3935.0], [98.1, 4036.0], [98.2, 4219.0], [98.3, 4362.0], [98.4, 4564.0], [98.5, 5133.0], [98.6, 5334.0], [98.7, 5564.0], [98.8, 6156.0], [98.9, 7841.0], [99.0, 7957.0], [99.1, 8046.0], [99.2, 8229.0], [99.3, 8464.0], [99.4, 9022.0], [99.5, 10001.0], [99.6, 10366.0], [99.7, 10569.0], [99.8, 10785.0], [99.9, 11171.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 976.0, "series": [{"data": [[0.0, 976.0], [600.0, 446.0], [700.0, 172.0], [800.0, 154.0], [900.0, 189.0], [1000.0, 73.0], [1100.0, 67.0], [1200.0, 85.0], [1300.0, 26.0], [1400.0, 30.0], [1500.0, 12.0], [1600.0, 9.0], [1700.0, 12.0], [1800.0, 3.0], [1900.0, 11.0], [2000.0, 7.0], [2100.0, 9.0], [2300.0, 5.0], [2200.0, 8.0], [2400.0, 5.0], [2500.0, 5.0], [2600.0, 15.0], [2800.0, 12.0], [2700.0, 6.0], [2900.0, 10.0], [3000.0, 12.0], [3100.0, 7.0], [3300.0, 5.0], [3200.0, 1.0], [3400.0, 2.0], [3500.0, 2.0], [3600.0, 5.0], [3700.0, 4.0], [3800.0, 8.0], [3900.0, 6.0], [4000.0, 3.0], [4100.0, 3.0], [4200.0, 4.0], [4300.0, 4.0], [4400.0, 1.0], [4500.0, 3.0], [4700.0, 1.0], [4800.0, 1.0], [4900.0, 1.0], [5000.0, 2.0], [5100.0, 1.0], [5200.0, 4.0], [5300.0, 2.0], [5600.0, 2.0], [5500.0, 2.0], [5400.0, 2.0], [5700.0, 2.0], [6100.0, 1.0], [6400.0, 1.0], [7400.0, 1.0], [7900.0, 3.0], [7800.0, 6.0], [8000.0, 8.0], [8600.0, 3.0], [8200.0, 4.0], [8300.0, 1.0], [8400.0, 2.0], [8500.0, 1.0], [9000.0, 2.0], [9200.0, 1.0], [9500.0, 1.0], [9700.0, 1.0], [10000.0, 2.0], [10100.0, 1.0], [10200.0, 2.0], [9800.0, 1.0], [10500.0, 4.0], [10700.0, 4.0], [10600.0, 2.0], [10400.0, 2.0], [10300.0, 1.0], [11000.0, 2.0], [11100.0, 1.0], [16700.0, 1.0], [17800.0, 1.0], [18400.0, 1.0], [20300.0, 1.0], [20700.0, 1.0], [100.0, 754.0], [200.0, 487.0], [300.0, 727.0], [400.0, 403.0], [500.0, 320.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 20700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3348.0, "series": [{"data": [[0.0, 3348.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1560.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 282.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.938608458390176, "minX": 1.60223898E12, "maxY": 10.0, "series": [{"data": [[1.60223928E12, 9.938608458390176], [1.60223898E12, 9.99617834394905], [1.60223916E12, 10.0], [1.60223904E12, 10.0], [1.60223922E12, 10.0], [1.6022391E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223928E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 275.0, "minX": 1.0, "maxY": 8094.0, "series": [{"data": [[8.0, 654.0], [4.0, 626.0], [2.0, 8094.0], [1.0, 7816.0], [9.0, 275.0], [10.0, 621.1540540540532], [5.0, 786.0], [6.0, 583.0], [3.0, 785.0], [7.0, 542.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990753226738633, 623.900597187436]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5330.616666666667, "minX": 1.60223898E12, "maxY": 5181300.633333334, "series": [{"data": [[1.60223928E12, 2965332.2], [1.60223898E12, 2845522.35], [1.60223916E12, 3938978.683333333], [1.60223904E12, 4673103.283333333], [1.60223922E12, 5181300.633333334], [1.6022391E12, 4038126.216666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223928E12, 5761.05], [1.60223898E12, 5929.433333333333], [1.60223916E12, 8722.283333333333], [1.60223904E12, 5330.616666666667], [1.60223922E12, 6676.766666666666], [1.6022391E12, 7528.566666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223928E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 513.1605095541399, "minX": 1.60223898E12, "maxY": 873.5477888730388, "series": [{"data": [[1.60223928E12, 625.0545702592079], [1.60223898E12, 513.1605095541399], [1.60223916E12, 527.6031468531467], [1.60223904E12, 873.5477888730388], [1.60223922E12, 629.5154994259476], [1.6022391E12, 640.9916405433642]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223928E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 511.8012738853501, "minX": 1.60223898E12, "maxY": 870.9329529243946, "series": [{"data": [[1.60223928E12, 623.5920873124142], [1.60223898E12, 511.8012738853501], [1.60223916E12, 526.4580419580416], [1.60223904E12, 870.9329529243946], [1.60223922E12, 627.7164179104482], [1.6022391E12, 639.2580982236155]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223928E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009549795361527964, "minX": 1.60223898E12, "maxY": 0.12484076433120998, "series": [{"data": [[1.60223928E12, 0.009549795361527964], [1.60223898E12, 0.12484076433120998], [1.60223916E12, 0.013986013986013998], [1.60223904E12, 0.01854493580599141], [1.60223922E12, 0.01262916188289325], [1.6022391E12, 0.01149425287356323]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223928E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.60223898E12, "maxY": 20760.0, "series": [{"data": [[1.60223928E12, 20760.0], [1.60223898E12, 18490.0], [1.60223916E12, 8270.0], [1.60223904E12, 10793.0], [1.60223922E12, 9206.0], [1.6022391E12, 20364.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223928E12, 31.0], [1.60223898E12, 30.073999812603], [1.60223916E12, 31.0], [1.60223904E12, 30.317999832630157], [1.60223922E12, 32.847999792099], [1.6022391E12, 29.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223928E12, 31.0], [1.60223898E12, 30.781400074958803], [1.60223916E12, 31.0], [1.60223904E12, 30.949800066947937], [1.60223922E12, 33.0], [1.6022391E12, 29.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223928E12, 31.0], [1.60223898E12, 30.4669999063015], [1.60223916E12, 31.0], [1.60223904E12, 30.66899991631508], [1.60223922E12, 33.0], [1.6022391E12, 29.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223928E12, 23.0], [1.60223898E12, 24.0], [1.60223916E12, 23.0], [1.60223904E12, 20.0], [1.60223922E12, 25.0], [1.6022391E12, 20.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223928E12, 310.0], [1.60223898E12, 256.0], [1.60223916E12, 245.5], [1.60223904E12, 609.0], [1.60223922E12, 487.0], [1.6022391E12, 386.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223928E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 84.0, "minX": 1.0, "maxY": 2074.5, "series": [{"data": [[32.0, 279.0], [33.0, 154.5], [2.0, 821.0], [34.0, 205.5], [35.0, 271.0], [37.0, 165.0], [36.0, 163.0], [38.0, 194.0], [39.0, 228.0], [40.0, 229.0], [41.0, 147.5], [43.0, 133.0], [44.0, 153.0], [46.0, 96.5], [3.0, 637.0], [50.0, 84.0], [61.0, 106.0], [4.0, 1410.5], [5.0, 417.0], [6.0, 513.0], [7.0, 730.0], [8.0, 969.0], [9.0, 501.0], [10.0, 612.0], [11.0, 649.0], [12.0, 619.0], [13.0, 673.0], [14.0, 552.5], [15.0, 554.0], [16.0, 480.0], [1.0, 2074.5], [17.0, 467.0], [18.0, 342.5], [19.0, 473.0], [20.0, 413.0], [21.0, 337.0], [22.0, 383.0], [23.0, 327.0], [24.0, 337.0], [25.0, 380.0], [26.0, 322.5], [27.0, 179.0], [28.0, 301.0], [29.0, 298.0], [30.0, 235.5], [31.0, 198.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 111.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 84.0, "minX": 1.0, "maxY": 2071.0, "series": [{"data": [[32.0, 278.0], [33.0, 153.0], [2.0, 817.5], [34.0, 205.0], [35.0, 271.0], [37.0, 165.0], [36.0, 162.5], [38.0, 192.5], [39.0, 227.0], [40.0, 228.5], [41.0, 145.0], [43.0, 133.0], [44.0, 152.5], [46.0, 96.5], [3.0, 633.0], [50.0, 84.0], [61.0, 104.0], [4.0, 1409.0], [5.0, 415.0], [6.0, 512.0], [7.0, 729.0], [8.0, 968.0], [9.0, 501.0], [10.0, 606.5], [11.0, 645.0], [12.0, 614.5], [13.0, 664.5], [14.0, 551.5], [15.0, 553.0], [16.0, 479.0], [1.0, 2071.0], [17.0, 463.0], [18.0, 341.0], [19.0, 472.0], [20.0, 412.5], [21.0, 337.0], [22.0, 382.5], [23.0, 326.0], [24.0, 336.0], [25.0, 378.0], [26.0, 321.5], [27.0, 179.0], [28.0, 300.0], [29.0, 297.0], [30.0, 234.5], [31.0, 196.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 111.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.683333333333334, "minX": 1.60223898E12, "maxY": 19.066666666666666, "series": [{"data": [[1.60223928E12, 12.05], [1.60223898E12, 13.25], [1.60223916E12, 19.066666666666666], [1.60223904E12, 11.683333333333334], [1.60223922E12, 14.516666666666667], [1.6022391E12, 15.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223928E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223898E12, "maxY": 19.066666666666666, "series": [{"data": [[1.60223928E12, 12.216666666666667], [1.60223898E12, 13.083333333333334], [1.60223916E12, 19.066666666666666], [1.60223904E12, 11.683333333333334], [1.60223922E12, 14.516666666666667], [1.6022391E12, 15.933333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6022391E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223928E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223898E12, "maxY": 19.066666666666666, "series": [{"data": [[1.60223928E12, 12.216666666666667], [1.60223898E12, 13.083333333333334], [1.60223916E12, 19.066666666666666], [1.60223904E12, 11.683333333333334], [1.60223922E12, 14.516666666666667], [1.6022391E12, 15.933333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6022391E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223928E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223898E12, "maxY": 19.066666666666666, "series": [{"data": [[1.60223928E12, 12.216666666666667], [1.60223898E12, 13.083333333333334], [1.60223916E12, 19.066666666666666], [1.60223904E12, 11.683333333333334], [1.60223922E12, 14.516666666666667], [1.6022391E12, 15.933333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6022391E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223928E12, "title": "Total Transactions Per Second"}},
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

