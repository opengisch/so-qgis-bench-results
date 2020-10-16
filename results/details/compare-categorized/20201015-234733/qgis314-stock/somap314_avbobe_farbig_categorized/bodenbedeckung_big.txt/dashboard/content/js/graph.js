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
        data: {"result": {"minY": 18.0, "minX": 0.0, "maxY": 20663.0, "series": [{"data": [[0.0, 18.0], [0.1, 24.0], [0.2, 25.0], [0.3, 26.0], [0.4, 28.0], [0.5, 29.0], [0.6, 31.0], [0.7, 31.0], [0.8, 31.0], [0.9, 33.0], [1.0, 33.0], [1.1, 34.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 37.0], [2.0, 37.0], [2.1, 37.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 39.0], [2.8, 39.0], [2.9, 39.0], [3.0, 39.0], [3.1, 40.0], [3.2, 40.0], [3.3, 40.0], [3.4, 41.0], [3.5, 41.0], [3.6, 41.0], [3.7, 42.0], [3.8, 42.0], [3.9, 43.0], [4.0, 43.0], [4.1, 44.0], [4.2, 44.0], [4.3, 44.0], [4.4, 44.0], [4.5, 45.0], [4.6, 45.0], [4.7, 46.0], [4.8, 46.0], [4.9, 46.0], [5.0, 47.0], [5.1, 47.0], [5.2, 48.0], [5.3, 48.0], [5.4, 48.0], [5.5, 48.0], [5.6, 49.0], [5.7, 49.0], [5.8, 49.0], [5.9, 50.0], [6.0, 51.0], [6.1, 51.0], [6.2, 51.0], [6.3, 51.0], [6.4, 52.0], [6.5, 52.0], [6.6, 52.0], [6.7, 53.0], [6.8, 54.0], [6.9, 54.0], [7.0, 54.0], [7.1, 55.0], [7.2, 55.0], [7.3, 56.0], [7.4, 56.0], [7.5, 56.0], [7.6, 57.0], [7.7, 57.0], [7.8, 57.0], [7.9, 58.0], [8.0, 58.0], [8.1, 58.0], [8.2, 58.0], [8.3, 59.0], [8.4, 60.0], [8.5, 60.0], [8.6, 61.0], [8.7, 61.0], [8.8, 62.0], [8.9, 63.0], [9.0, 63.0], [9.1, 64.0], [9.2, 64.0], [9.3, 65.0], [9.4, 65.0], [9.5, 65.0], [9.6, 66.0], [9.7, 67.0], [9.8, 67.0], [9.9, 67.0], [10.0, 68.0], [10.1, 68.0], [10.2, 69.0], [10.3, 69.0], [10.4, 70.0], [10.5, 70.0], [10.6, 71.0], [10.7, 71.0], [10.8, 72.0], [10.9, 72.0], [11.0, 73.0], [11.1, 73.0], [11.2, 74.0], [11.3, 74.0], [11.4, 74.0], [11.5, 74.0], [11.6, 75.0], [11.7, 75.0], [11.8, 76.0], [11.9, 76.0], [12.0, 76.0], [12.1, 77.0], [12.2, 77.0], [12.3, 77.0], [12.4, 78.0], [12.5, 78.0], [12.6, 78.0], [12.7, 79.0], [12.8, 79.0], [12.9, 79.0], [13.0, 80.0], [13.1, 81.0], [13.2, 81.0], [13.3, 82.0], [13.4, 82.0], [13.5, 83.0], [13.6, 83.0], [13.7, 84.0], [13.8, 84.0], [13.9, 85.0], [14.0, 85.0], [14.1, 86.0], [14.2, 87.0], [14.3, 87.0], [14.4, 88.0], [14.5, 88.0], [14.6, 88.0], [14.7, 89.0], [14.8, 89.0], [14.9, 90.0], [15.0, 90.0], [15.1, 90.0], [15.2, 91.0], [15.3, 92.0], [15.4, 92.0], [15.5, 93.0], [15.6, 94.0], [15.7, 94.0], [15.8, 94.0], [15.9, 95.0], [16.0, 95.0], [16.1, 96.0], [16.2, 96.0], [16.3, 97.0], [16.4, 98.0], [16.5, 98.0], [16.6, 99.0], [16.7, 99.0], [16.8, 99.0], [16.9, 100.0], [17.0, 100.0], [17.1, 100.0], [17.2, 102.0], [17.3, 102.0], [17.4, 103.0], [17.5, 103.0], [17.6, 104.0], [17.7, 104.0], [17.8, 104.0], [17.9, 105.0], [18.0, 105.0], [18.1, 106.0], [18.2, 107.0], [18.3, 107.0], [18.4, 108.0], [18.5, 109.0], [18.6, 109.0], [18.7, 109.0], [18.8, 110.0], [18.9, 110.0], [19.0, 111.0], [19.1, 111.0], [19.2, 112.0], [19.3, 112.0], [19.4, 113.0], [19.5, 113.0], [19.6, 114.0], [19.7, 114.0], [19.8, 115.0], [19.9, 115.0], [20.0, 116.0], [20.1, 117.0], [20.2, 118.0], [20.3, 118.0], [20.4, 119.0], [20.5, 119.0], [20.6, 120.0], [20.7, 121.0], [20.8, 121.0], [20.9, 122.0], [21.0, 122.0], [21.1, 123.0], [21.2, 124.0], [21.3, 124.0], [21.4, 125.0], [21.5, 126.0], [21.6, 126.0], [21.7, 126.0], [21.8, 127.0], [21.9, 128.0], [22.0, 129.0], [22.1, 129.0], [22.2, 130.0], [22.3, 130.0], [22.4, 131.0], [22.5, 132.0], [22.6, 133.0], [22.7, 133.0], [22.8, 134.0], [22.9, 135.0], [23.0, 135.0], [23.1, 136.0], [23.2, 137.0], [23.3, 137.0], [23.4, 137.0], [23.5, 138.0], [23.6, 139.0], [23.7, 139.0], [23.8, 140.0], [23.9, 140.0], [24.0, 141.0], [24.1, 142.0], [24.2, 142.0], [24.3, 143.0], [24.4, 143.0], [24.5, 144.0], [24.6, 144.0], [24.7, 145.0], [24.8, 146.0], [24.9, 147.0], [25.0, 148.0], [25.1, 148.0], [25.2, 149.0], [25.3, 149.0], [25.4, 150.0], [25.5, 151.0], [25.6, 151.0], [25.7, 152.0], [25.8, 152.0], [25.9, 153.0], [26.0, 154.0], [26.1, 155.0], [26.2, 155.0], [26.3, 156.0], [26.4, 156.0], [26.5, 157.0], [26.6, 157.0], [26.7, 158.0], [26.8, 159.0], [26.9, 160.0], [27.0, 161.0], [27.1, 161.0], [27.2, 162.0], [27.3, 163.0], [27.4, 163.0], [27.5, 164.0], [27.6, 164.0], [27.7, 165.0], [27.8, 166.0], [27.9, 166.0], [28.0, 167.0], [28.1, 168.0], [28.2, 169.0], [28.3, 170.0], [28.4, 171.0], [28.5, 171.0], [28.6, 172.0], [28.7, 173.0], [28.8, 174.0], [28.9, 174.0], [29.0, 174.0], [29.1, 175.0], [29.2, 176.0], [29.3, 177.0], [29.4, 177.0], [29.5, 179.0], [29.6, 179.0], [29.7, 180.0], [29.8, 181.0], [29.9, 181.0], [30.0, 182.0], [30.1, 182.0], [30.2, 183.0], [30.3, 183.0], [30.4, 184.0], [30.5, 185.0], [30.6, 186.0], [30.7, 187.0], [30.8, 188.0], [30.9, 189.0], [31.0, 190.0], [31.1, 191.0], [31.2, 191.0], [31.3, 192.0], [31.4, 193.0], [31.5, 194.0], [31.6, 195.0], [31.7, 196.0], [31.8, 197.0], [31.9, 197.0], [32.0, 198.0], [32.1, 198.0], [32.2, 198.0], [32.3, 199.0], [32.4, 200.0], [32.5, 200.0], [32.6, 201.0], [32.7, 202.0], [32.8, 204.0], [32.9, 204.0], [33.0, 205.0], [33.1, 205.0], [33.2, 207.0], [33.3, 208.0], [33.4, 210.0], [33.5, 211.0], [33.6, 212.0], [33.7, 212.0], [33.8, 213.0], [33.9, 213.0], [34.0, 214.0], [34.1, 214.0], [34.2, 216.0], [34.3, 216.0], [34.4, 218.0], [34.5, 218.0], [34.6, 220.0], [34.7, 220.0], [34.8, 221.0], [34.9, 222.0], [35.0, 222.0], [35.1, 223.0], [35.2, 224.0], [35.3, 225.0], [35.4, 226.0], [35.5, 226.0], [35.6, 227.0], [35.7, 228.0], [35.8, 228.0], [35.9, 229.0], [36.0, 230.0], [36.1, 231.0], [36.2, 232.0], [36.3, 233.0], [36.4, 234.0], [36.5, 235.0], [36.6, 236.0], [36.7, 236.0], [36.8, 237.0], [36.9, 237.0], [37.0, 239.0], [37.1, 240.0], [37.2, 241.0], [37.3, 243.0], [37.4, 244.0], [37.5, 245.0], [37.6, 246.0], [37.7, 247.0], [37.8, 248.0], [37.9, 249.0], [38.0, 250.0], [38.1, 251.0], [38.2, 252.0], [38.3, 254.0], [38.4, 254.0], [38.5, 256.0], [38.6, 258.0], [38.7, 260.0], [38.8, 260.0], [38.9, 261.0], [39.0, 265.0], [39.1, 266.0], [39.2, 267.0], [39.3, 267.0], [39.4, 269.0], [39.5, 270.0], [39.6, 272.0], [39.7, 272.0], [39.8, 273.0], [39.9, 274.0], [40.0, 274.0], [40.1, 275.0], [40.2, 276.0], [40.3, 277.0], [40.4, 278.0], [40.5, 279.0], [40.6, 279.0], [40.7, 281.0], [40.8, 282.0], [40.9, 282.0], [41.0, 283.0], [41.1, 284.0], [41.2, 285.0], [41.3, 286.0], [41.4, 287.0], [41.5, 288.0], [41.6, 289.0], [41.7, 290.0], [41.8, 290.0], [41.9, 291.0], [42.0, 292.0], [42.1, 292.0], [42.2, 294.0], [42.3, 294.0], [42.4, 296.0], [42.5, 297.0], [42.6, 298.0], [42.7, 299.0], [42.8, 300.0], [42.9, 300.0], [43.0, 301.0], [43.1, 302.0], [43.2, 303.0], [43.3, 305.0], [43.4, 305.0], [43.5, 306.0], [43.6, 308.0], [43.7, 308.0], [43.8, 309.0], [43.9, 310.0], [44.0, 310.0], [44.1, 311.0], [44.2, 311.0], [44.3, 312.0], [44.4, 313.0], [44.5, 313.0], [44.6, 314.0], [44.7, 314.0], [44.8, 315.0], [44.9, 315.0], [45.0, 316.0], [45.1, 316.0], [45.2, 317.0], [45.3, 318.0], [45.4, 318.0], [45.5, 319.0], [45.6, 320.0], [45.7, 320.0], [45.8, 320.0], [45.9, 321.0], [46.0, 321.0], [46.1, 321.0], [46.2, 322.0], [46.3, 323.0], [46.4, 323.0], [46.5, 324.0], [46.6, 325.0], [46.7, 326.0], [46.8, 326.0], [46.9, 327.0], [47.0, 328.0], [47.1, 328.0], [47.2, 329.0], [47.3, 329.0], [47.4, 330.0], [47.5, 331.0], [47.6, 332.0], [47.7, 332.0], [47.8, 333.0], [47.9, 333.0], [48.0, 333.0], [48.1, 334.0], [48.2, 334.0], [48.3, 335.0], [48.4, 335.0], [48.5, 337.0], [48.6, 337.0], [48.7, 337.0], [48.8, 338.0], [48.9, 338.0], [49.0, 339.0], [49.1, 339.0], [49.2, 340.0], [49.3, 340.0], [49.4, 341.0], [49.5, 342.0], [49.6, 342.0], [49.7, 343.0], [49.8, 343.0], [49.9, 344.0], [50.0, 344.0], [50.1, 345.0], [50.2, 345.0], [50.3, 346.0], [50.4, 346.0], [50.5, 347.0], [50.6, 347.0], [50.7, 348.0], [50.8, 348.0], [50.9, 349.0], [51.0, 350.0], [51.1, 351.0], [51.2, 351.0], [51.3, 352.0], [51.4, 353.0], [51.5, 354.0], [51.6, 354.0], [51.7, 354.0], [51.8, 355.0], [51.9, 355.0], [52.0, 356.0], [52.1, 356.0], [52.2, 357.0], [52.3, 358.0], [52.4, 359.0], [52.5, 360.0], [52.6, 360.0], [52.7, 360.0], [52.8, 362.0], [52.9, 363.0], [53.0, 363.0], [53.1, 364.0], [53.2, 365.0], [53.3, 366.0], [53.4, 366.0], [53.5, 366.0], [53.6, 367.0], [53.7, 368.0], [53.8, 368.0], [53.9, 369.0], [54.0, 370.0], [54.1, 371.0], [54.2, 371.0], [54.3, 373.0], [54.4, 373.0], [54.5, 374.0], [54.6, 376.0], [54.7, 376.0], [54.8, 377.0], [54.9, 379.0], [55.0, 380.0], [55.1, 380.0], [55.2, 381.0], [55.3, 382.0], [55.4, 383.0], [55.5, 384.0], [55.6, 384.0], [55.7, 385.0], [55.8, 385.0], [55.9, 386.0], [56.0, 387.0], [56.1, 388.0], [56.2, 389.0], [56.3, 390.0], [56.4, 390.0], [56.5, 391.0], [56.6, 392.0], [56.7, 393.0], [56.8, 394.0], [56.9, 395.0], [57.0, 396.0], [57.1, 397.0], [57.2, 398.0], [57.3, 398.0], [57.4, 400.0], [57.5, 401.0], [57.6, 401.0], [57.7, 402.0], [57.8, 403.0], [57.9, 404.0], [58.0, 405.0], [58.1, 406.0], [58.2, 408.0], [58.3, 409.0], [58.4, 410.0], [58.5, 411.0], [58.6, 411.0], [58.7, 412.0], [58.8, 414.0], [58.9, 415.0], [59.0, 415.0], [59.1, 416.0], [59.2, 417.0], [59.3, 419.0], [59.4, 420.0], [59.5, 422.0], [59.6, 423.0], [59.7, 424.0], [59.8, 425.0], [59.9, 426.0], [60.0, 427.0], [60.1, 428.0], [60.2, 429.0], [60.3, 432.0], [60.4, 433.0], [60.5, 434.0], [60.6, 436.0], [60.7, 437.0], [60.8, 438.0], [60.9, 441.0], [61.0, 442.0], [61.1, 443.0], [61.2, 445.0], [61.3, 446.0], [61.4, 448.0], [61.5, 449.0], [61.6, 451.0], [61.7, 453.0], [61.8, 454.0], [61.9, 456.0], [62.0, 458.0], [62.1, 459.0], [62.2, 461.0], [62.3, 462.0], [62.4, 463.0], [62.5, 465.0], [62.6, 466.0], [62.7, 468.0], [62.8, 469.0], [62.9, 470.0], [63.0, 471.0], [63.1, 473.0], [63.2, 475.0], [63.3, 477.0], [63.4, 480.0], [63.5, 483.0], [63.6, 485.0], [63.7, 486.0], [63.8, 488.0], [63.9, 490.0], [64.0, 491.0], [64.1, 493.0], [64.2, 495.0], [64.3, 496.0], [64.4, 498.0], [64.5, 500.0], [64.6, 501.0], [64.7, 503.0], [64.8, 505.0], [64.9, 507.0], [65.0, 508.0], [65.1, 511.0], [65.2, 512.0], [65.3, 516.0], [65.4, 517.0], [65.5, 518.0], [65.6, 520.0], [65.7, 521.0], [65.8, 525.0], [65.9, 527.0], [66.0, 530.0], [66.1, 532.0], [66.2, 534.0], [66.3, 537.0], [66.4, 539.0], [66.5, 541.0], [66.6, 543.0], [66.7, 545.0], [66.8, 547.0], [66.9, 549.0], [67.0, 551.0], [67.1, 553.0], [67.2, 555.0], [67.3, 556.0], [67.4, 559.0], [67.5, 560.0], [67.6, 561.0], [67.7, 563.0], [67.8, 564.0], [67.9, 566.0], [68.0, 567.0], [68.1, 568.0], [68.2, 571.0], [68.3, 573.0], [68.4, 574.0], [68.5, 575.0], [68.6, 576.0], [68.7, 577.0], [68.8, 578.0], [68.9, 579.0], [69.0, 580.0], [69.1, 581.0], [69.2, 581.0], [69.3, 583.0], [69.4, 583.0], [69.5, 583.0], [69.6, 584.0], [69.7, 586.0], [69.8, 587.0], [69.9, 588.0], [70.0, 590.0], [70.1, 591.0], [70.2, 592.0], [70.3, 593.0], [70.4, 594.0], [70.5, 595.0], [70.6, 596.0], [70.7, 596.0], [70.8, 597.0], [70.9, 598.0], [71.0, 599.0], [71.1, 599.0], [71.2, 600.0], [71.3, 601.0], [71.4, 602.0], [71.5, 603.0], [71.6, 604.0], [71.7, 605.0], [71.8, 606.0], [71.9, 607.0], [72.0, 608.0], [72.1, 609.0], [72.2, 610.0], [72.3, 611.0], [72.4, 612.0], [72.5, 613.0], [72.6, 613.0], [72.7, 614.0], [72.8, 615.0], [72.9, 616.0], [73.0, 617.0], [73.1, 617.0], [73.2, 618.0], [73.3, 619.0], [73.4, 620.0], [73.5, 620.0], [73.6, 621.0], [73.7, 621.0], [73.8, 623.0], [73.9, 624.0], [74.0, 626.0], [74.1, 626.0], [74.2, 628.0], [74.3, 629.0], [74.4, 629.0], [74.5, 630.0], [74.6, 631.0], [74.7, 632.0], [74.8, 633.0], [74.9, 634.0], [75.0, 634.0], [75.1, 635.0], [75.2, 636.0], [75.3, 636.0], [75.4, 637.0], [75.5, 639.0], [75.6, 639.0], [75.7, 639.0], [75.8, 640.0], [75.9, 641.0], [76.0, 642.0], [76.1, 644.0], [76.2, 645.0], [76.3, 645.0], [76.4, 647.0], [76.5, 649.0], [76.6, 650.0], [76.7, 652.0], [76.8, 653.0], [76.9, 654.0], [77.0, 656.0], [77.1, 658.0], [77.2, 661.0], [77.3, 663.0], [77.4, 664.0], [77.5, 666.0], [77.6, 667.0], [77.7, 668.0], [77.8, 669.0], [77.9, 671.0], [78.0, 672.0], [78.1, 674.0], [78.2, 675.0], [78.3, 676.0], [78.4, 677.0], [78.5, 678.0], [78.6, 679.0], [78.7, 680.0], [78.8, 681.0], [78.9, 683.0], [79.0, 686.0], [79.1, 691.0], [79.2, 693.0], [79.3, 695.0], [79.4, 697.0], [79.5, 700.0], [79.6, 701.0], [79.7, 702.0], [79.8, 702.0], [79.9, 703.0], [80.0, 706.0], [80.1, 709.0], [80.2, 711.0], [80.3, 713.0], [80.4, 715.0], [80.5, 720.0], [80.6, 723.0], [80.7, 725.0], [80.8, 730.0], [80.9, 733.0], [81.0, 736.0], [81.1, 739.0], [81.2, 741.0], [81.3, 744.0], [81.4, 750.0], [81.5, 752.0], [81.6, 755.0], [81.7, 758.0], [81.8, 761.0], [81.9, 766.0], [82.0, 770.0], [82.1, 772.0], [82.2, 776.0], [82.3, 778.0], [82.4, 783.0], [82.5, 787.0], [82.6, 799.0], [82.7, 800.0], [82.8, 803.0], [82.9, 807.0], [83.0, 813.0], [83.1, 815.0], [83.2, 819.0], [83.3, 821.0], [83.4, 823.0], [83.5, 827.0], [83.6, 830.0], [83.7, 833.0], [83.8, 837.0], [83.9, 841.0], [84.0, 845.0], [84.1, 847.0], [84.2, 850.0], [84.3, 853.0], [84.4, 857.0], [84.5, 861.0], [84.6, 862.0], [84.7, 867.0], [84.8, 870.0], [84.9, 875.0], [85.0, 879.0], [85.1, 882.0], [85.2, 883.0], [85.3, 884.0], [85.4, 887.0], [85.5, 890.0], [85.6, 893.0], [85.7, 895.0], [85.8, 898.0], [85.9, 899.0], [86.0, 901.0], [86.1, 903.0], [86.2, 904.0], [86.3, 908.0], [86.4, 911.0], [86.5, 915.0], [86.6, 916.0], [86.7, 918.0], [86.8, 922.0], [86.9, 924.0], [87.0, 926.0], [87.1, 928.0], [87.2, 933.0], [87.3, 935.0], [87.4, 937.0], [87.5, 941.0], [87.6, 944.0], [87.7, 946.0], [87.8, 948.0], [87.9, 950.0], [88.0, 956.0], [88.1, 959.0], [88.2, 963.0], [88.3, 967.0], [88.4, 974.0], [88.5, 979.0], [88.6, 983.0], [88.7, 987.0], [88.8, 991.0], [88.9, 1000.0], [89.0, 1004.0], [89.1, 1008.0], [89.2, 1015.0], [89.3, 1022.0], [89.4, 1034.0], [89.5, 1040.0], [89.6, 1044.0], [89.7, 1048.0], [89.8, 1052.0], [89.9, 1064.0], [90.0, 1079.0], [90.1, 1084.0], [90.2, 1093.0], [90.3, 1098.0], [90.4, 1113.0], [90.5, 1117.0], [90.6, 1122.0], [90.7, 1130.0], [90.8, 1135.0], [90.9, 1140.0], [91.0, 1145.0], [91.1, 1151.0], [91.2, 1157.0], [91.3, 1160.0], [91.4, 1166.0], [91.5, 1171.0], [91.6, 1176.0], [91.7, 1186.0], [91.8, 1196.0], [91.9, 1202.0], [92.0, 1206.0], [92.1, 1210.0], [92.2, 1213.0], [92.3, 1218.0], [92.4, 1223.0], [92.5, 1229.0], [92.6, 1231.0], [92.7, 1236.0], [92.8, 1241.0], [92.9, 1250.0], [93.0, 1255.0], [93.1, 1260.0], [93.2, 1265.0], [93.3, 1272.0], [93.4, 1284.0], [93.5, 1290.0], [93.6, 1310.0], [93.7, 1348.0], [93.8, 1352.0], [93.9, 1370.0], [94.0, 1396.0], [94.1, 1444.0], [94.2, 1470.0], [94.3, 1521.0], [94.4, 1540.0], [94.5, 1563.0], [94.6, 1584.0], [94.7, 1614.0], [94.8, 1634.0], [94.9, 1685.0], [95.0, 1719.0], [95.1, 1774.0], [95.2, 1809.0], [95.3, 1842.0], [95.4, 1871.0], [95.5, 1904.0], [95.6, 2059.0], [95.7, 2097.0], [95.8, 2131.0], [95.9, 2228.0], [96.0, 2353.0], [96.1, 2415.0], [96.2, 2473.0], [96.3, 2510.0], [96.4, 2559.0], [96.5, 2629.0], [96.6, 2663.0], [96.7, 2722.0], [96.8, 2782.0], [96.9, 2885.0], [97.0, 2923.0], [97.1, 3049.0], [97.2, 3099.0], [97.3, 3235.0], [97.4, 3392.0], [97.5, 3450.0], [97.6, 3599.0], [97.7, 3726.0], [97.8, 3786.0], [97.9, 3885.0], [98.0, 3992.0], [98.1, 4053.0], [98.2, 4168.0], [98.3, 4331.0], [98.4, 4467.0], [98.5, 5209.0], [98.6, 5477.0], [98.7, 5686.0], [98.8, 6486.0], [98.9, 7804.0], [99.0, 8050.0], [99.1, 8133.0], [99.2, 8248.0], [99.3, 8396.0], [99.4, 9214.0], [99.5, 10332.0], [99.6, 10525.0], [99.7, 10678.0], [99.8, 10873.0], [99.9, 11051.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 877.0, "series": [{"data": [[0.0, 877.0], [600.0, 435.0], [700.0, 162.0], [800.0, 172.0], [900.0, 153.0], [1000.0, 76.0], [1100.0, 79.0], [1200.0, 88.0], [1300.0, 23.0], [1400.0, 11.0], [1500.0, 23.0], [1600.0, 15.0], [1700.0, 12.0], [1800.0, 15.0], [1900.0, 4.0], [2000.0, 9.0], [2100.0, 9.0], [2200.0, 5.0], [2300.0, 3.0], [2400.0, 11.0], [2500.0, 11.0], [2600.0, 10.0], [2800.0, 9.0], [2700.0, 7.0], [2900.0, 5.0], [3000.0, 7.0], [3100.0, 4.0], [3200.0, 3.0], [3300.0, 6.0], [3400.0, 6.0], [3500.0, 2.0], [3700.0, 6.0], [3600.0, 4.0], [3800.0, 10.0], [3900.0, 1.0], [4000.0, 7.0], [4100.0, 4.0], [4300.0, 4.0], [4200.0, 3.0], [4500.0, 3.0], [4400.0, 2.0], [5000.0, 1.0], [4900.0, 1.0], [5200.0, 2.0], [5300.0, 1.0], [5500.0, 2.0], [5400.0, 4.0], [5600.0, 2.0], [6000.0, 1.0], [6200.0, 1.0], [6400.0, 3.0], [6600.0, 2.0], [7900.0, 3.0], [7800.0, 4.0], [7700.0, 1.0], [8100.0, 6.0], [8000.0, 3.0], [8300.0, 3.0], [8500.0, 2.0], [8200.0, 4.0], [8700.0, 1.0], [9200.0, 2.0], [10100.0, 1.0], [10200.0, 3.0], [10600.0, 3.0], [10700.0, 2.0], [10500.0, 5.0], [10300.0, 3.0], [10400.0, 2.0], [10900.0, 1.0], [11000.0, 3.0], [10800.0, 3.0], [14300.0, 1.0], [15500.0, 2.0], [18900.0, 1.0], [20600.0, 1.0], [100.0, 800.0], [200.0, 543.0], [300.0, 758.0], [400.0, 367.0], [500.0, 346.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 20600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 299.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3352.0, "series": [{"data": [[0.0, 3352.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1539.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 299.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.915730337078653, "minX": 1.60280622E12, "maxY": 10.0, "series": [{"data": [[1.60280652E12, 10.0], [1.60280622E12, 10.0], [1.60280634E12, 10.0], [1.60280628E12, 10.0], [1.60280646E12, 10.0], [1.6028064E12, 10.0], [1.60280658E12, 9.915730337078653]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280658E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 580.0, "minX": 1.0, "maxY": 8118.0, "series": [{"data": [[8.0, 695.0], [4.0, 872.0], [2.0, 8050.0], [1.0, 8118.0], [9.0, 580.0], [10.0, 620.738467477323], [5.0, 617.0], [6.0, 735.0], [3.0, 850.0], [7.0, 1207.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 623.8477842003874]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 94.5, "minX": 1.60280622E12, "maxY": 5466122.8, "series": [{"data": [[1.60280652E12, 4306406.5], [1.60280622E12, 68612.16666666667], [1.60280634E12, 5466122.8], [1.60280628E12, 2954016.783333333], [1.60280646E12, 4103411.25], [1.6028064E12, 4832657.05], [1.60280658E12, 1910611.3666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280652E12, 6222.7], [1.60280622E12, 94.5], [1.60280634E12, 6343.816666666667], [1.60280628E12, 6309.233333333334], [1.60280646E12, 7935.916666666667], [1.6028064E12, 8841.183333333332], [1.60280658E12, 4194.283333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280658E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 444.33333333333337, "minX": 1.60280622E12, "maxY": 750.7047738693454, "series": [{"data": [[1.60280652E12, 750.7047738693454], [1.60280622E12, 698.0833333333333], [1.60280634E12, 746.1566265060239], [1.60280628E12, 693.6942446043164], [1.60280646E12, 568.581351094195], [1.6028064E12, 528.7978817299199], [1.60280658E12, 444.33333333333337]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280658E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 443.22284644194787, "minX": 1.60280622E12, "maxY": 749.1494974874375, "series": [{"data": [[1.60280652E12, 749.1494974874375], [1.60280622E12, 695.4166666666667], [1.60280634E12, 743.5771084337351], [1.60280628E12, 692.0863309352519], [1.60280646E12, 567.3682207421507], [1.6028064E12, 527.2383053839366], [1.60280658E12, 443.22284644194787]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280658E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005995203836930459, "minX": 1.60280622E12, "maxY": 10.41666666666667, "series": [{"data": [[1.60280652E12, 0.012562814070351765], [1.60280622E12, 10.41666666666667], [1.60280634E12, 0.016867469879518086], [1.60280628E12, 0.005995203836930459], [1.60280646E12, 0.008563273073263567], [1.6028064E12, 0.012356575463371574], [1.60280658E12, 0.01310861423220973]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280658E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.60280622E12, "maxY": 20663.0, "series": [{"data": [[1.60280652E12, 20663.0], [1.60280622E12, 1358.0], [1.60280634E12, 11045.0], [1.60280628E12, 18917.0], [1.60280646E12, 15580.0], [1.6028064E12, 15511.0], [1.60280658E12, 8118.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280652E12, 34.0], [1.60280622E12, 46.0], [1.60280634E12, 35.0], [1.60280628E12, 39.0], [1.60280646E12, 31.467999749183655], [1.6028064E12, 29.411999459266664], [1.60280658E12, 28.81499987244606]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280652E12, 34.0], [1.60280622E12, 46.0], [1.60280634E12, 35.0], [1.60280628E12, 39.266500079631804], [1.60280646E12, 32.0], [1.6028064E12, 31.0], [1.60280658E12, 29.593000102043153]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280652E12, 34.0], [1.60280622E12, 46.0], [1.60280634E12, 35.0], [1.60280628E12, 39.0], [1.60280646E12, 31.99399987459183], [1.6028064E12, 30.54599972963333], [1.60280658E12, 29.16499987244606]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280652E12, 23.0], [1.60280622E12, 46.0], [1.60280634E12, 23.0], [1.60280628E12, 29.0], [1.60280646E12, 18.0], [1.6028064E12, 25.0], [1.60280658E12, 20.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280652E12, 437.5], [1.60280622E12, 765.0], [1.60280634E12, 591.0], [1.60280628E12, 300.0], [1.60280646E12, 293.0], [1.6028064E12, 326.0], [1.60280658E12, 289.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280658E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 87.0, "minX": 1.0, "maxY": 3022.0, "series": [{"data": [[33.0, 226.5], [2.0, 1239.0], [32.0, 222.5], [34.0, 174.0], [35.0, 120.0], [37.0, 301.0], [36.0, 112.0], [39.0, 136.0], [38.0, 177.0], [41.0, 232.0], [40.0, 140.0], [43.0, 227.0], [45.0, 105.0], [46.0, 87.0], [47.0, 88.0], [3.0, 1476.5], [52.0, 125.0], [53.0, 109.0], [4.0, 1140.0], [5.0, 735.0], [6.0, 509.5], [7.0, 529.0], [8.0, 359.0], [9.0, 602.0], [10.0, 638.5], [11.0, 604.0], [12.0, 611.5], [13.0, 635.0], [14.0, 522.5], [15.0, 592.0], [1.0, 3022.0], [16.0, 327.0], [17.0, 415.0], [18.0, 441.5], [19.0, 489.5], [20.0, 350.5], [21.0, 355.0], [22.0, 327.0], [23.0, 354.0], [24.0, 374.5], [25.0, 277.0], [26.0, 273.0], [27.0, 323.0], [28.0, 264.5], [29.0, 292.0], [30.0, 312.0], [31.0, 297.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 53.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 87.0, "minX": 1.0, "maxY": 3019.0, "series": [{"data": [[33.0, 225.5], [2.0, 1234.0], [32.0, 222.0], [34.0, 174.0], [35.0, 120.0], [37.0, 301.0], [36.0, 112.0], [39.0, 136.0], [38.0, 176.5], [41.0, 230.0], [40.0, 139.5], [43.0, 227.0], [45.0, 105.0], [46.0, 87.0], [47.0, 87.0], [3.0, 1471.5], [52.0, 124.0], [53.0, 109.0], [4.0, 1139.0], [5.0, 734.0], [6.0, 508.5], [7.0, 528.0], [8.0, 358.5], [9.0, 597.0], [10.0, 633.0], [11.0, 600.0], [12.0, 608.5], [13.0, 632.0], [14.0, 520.0], [15.0, 587.0], [1.0, 3019.0], [16.0, 325.0], [17.0, 415.0], [18.0, 441.0], [19.0, 489.5], [20.0, 350.0], [21.0, 353.0], [22.0, 326.0], [23.0, 350.5], [24.0, 371.0], [25.0, 276.0], [26.0, 271.0], [27.0, 319.0], [28.0, 263.5], [29.0, 289.0], [30.0, 310.5], [31.0, 295.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 53.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.60280622E12, "maxY": 18.883333333333333, "series": [{"data": [[1.60280652E12, 13.266666666666667], [1.60280622E12, 0.36666666666666664], [1.60280634E12, 13.833333333333334], [1.60280628E12, 13.9], [1.60280646E12, 17.516666666666666], [1.6028064E12, 18.883333333333333], [1.60280658E12, 8.733333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280658E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.60280622E12, "maxY": 18.883333333333333, "series": [{"data": [[1.60280652E12, 13.266666666666667], [1.60280622E12, 0.2], [1.60280634E12, 13.833333333333334], [1.60280628E12, 13.9], [1.60280646E12, 17.516666666666666], [1.6028064E12, 18.883333333333333], [1.60280658E12, 8.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280658E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.60280622E12, "maxY": 18.883333333333333, "series": [{"data": [[1.60280652E12, 13.266666666666667], [1.60280622E12, 0.2], [1.60280634E12, 13.833333333333334], [1.60280628E12, 13.9], [1.60280646E12, 17.516666666666666], [1.6028064E12, 18.883333333333333], [1.60280658E12, 8.9]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280658E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.60280622E12, "maxY": 18.883333333333333, "series": [{"data": [[1.60280652E12, 13.266666666666667], [1.60280622E12, 0.2], [1.60280634E12, 13.833333333333334], [1.60280628E12, 13.9], [1.60280646E12, 17.516666666666666], [1.6028064E12, 18.883333333333333], [1.60280658E12, 8.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280658E12, "title": "Total Transactions Per Second"}},
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

