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
        data: {"result": {"minY": 20.0, "minX": 0.0, "maxY": 20860.0, "series": [{"data": [[0.0, 20.0], [0.1, 24.0], [0.2, 25.0], [0.3, 27.0], [0.4, 29.0], [0.5, 30.0], [0.6, 31.0], [0.7, 31.0], [0.8, 32.0], [0.9, 32.0], [1.0, 33.0], [1.1, 34.0], [1.2, 34.0], [1.3, 34.0], [1.4, 35.0], [1.5, 35.0], [1.6, 35.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 38.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 38.0], [2.8, 38.0], [2.9, 39.0], [3.0, 39.0], [3.1, 39.0], [3.2, 39.0], [3.3, 40.0], [3.4, 40.0], [3.5, 40.0], [3.6, 41.0], [3.7, 41.0], [3.8, 41.0], [3.9, 41.0], [4.0, 42.0], [4.1, 42.0], [4.2, 42.0], [4.3, 43.0], [4.4, 43.0], [4.5, 44.0], [4.6, 44.0], [4.7, 44.0], [4.8, 44.0], [4.9, 45.0], [5.0, 45.0], [5.1, 45.0], [5.2, 45.0], [5.3, 46.0], [5.4, 47.0], [5.5, 47.0], [5.6, 47.0], [5.7, 47.0], [5.8, 48.0], [5.9, 48.0], [6.0, 48.0], [6.1, 48.0], [6.2, 49.0], [6.3, 49.0], [6.4, 49.0], [6.5, 50.0], [6.6, 50.0], [6.7, 50.0], [6.8, 50.0], [6.9, 51.0], [7.0, 51.0], [7.1, 51.0], [7.2, 52.0], [7.3, 52.0], [7.4, 53.0], [7.5, 53.0], [7.6, 53.0], [7.7, 53.0], [7.8, 54.0], [7.9, 54.0], [8.0, 54.0], [8.1, 55.0], [8.2, 55.0], [8.3, 55.0], [8.4, 56.0], [8.5, 56.0], [8.6, 56.0], [8.7, 56.0], [8.8, 57.0], [8.9, 57.0], [9.0, 57.0], [9.1, 57.0], [9.2, 58.0], [9.3, 58.0], [9.4, 58.0], [9.5, 59.0], [9.6, 59.0], [9.7, 59.0], [9.8, 60.0], [9.9, 60.0], [10.0, 61.0], [10.1, 61.0], [10.2, 61.0], [10.3, 62.0], [10.4, 62.0], [10.5, 62.0], [10.6, 62.0], [10.7, 63.0], [10.8, 63.0], [10.9, 64.0], [11.0, 64.0], [11.1, 64.0], [11.2, 65.0], [11.3, 65.0], [11.4, 66.0], [11.5, 67.0], [11.6, 67.0], [11.7, 67.0], [11.8, 68.0], [11.9, 68.0], [12.0, 69.0], [12.1, 69.0], [12.2, 69.0], [12.3, 70.0], [12.4, 70.0], [12.5, 71.0], [12.6, 72.0], [12.7, 72.0], [12.8, 72.0], [12.9, 73.0], [13.0, 73.0], [13.1, 73.0], [13.2, 74.0], [13.3, 74.0], [13.4, 75.0], [13.5, 75.0], [13.6, 76.0], [13.7, 77.0], [13.8, 77.0], [13.9, 77.0], [14.0, 78.0], [14.1, 78.0], [14.2, 79.0], [14.3, 79.0], [14.4, 80.0], [14.5, 80.0], [14.6, 80.0], [14.7, 80.0], [14.8, 81.0], [14.9, 81.0], [15.0, 82.0], [15.1, 82.0], [15.2, 82.0], [15.3, 83.0], [15.4, 83.0], [15.5, 84.0], [15.6, 84.0], [15.7, 85.0], [15.8, 85.0], [15.9, 86.0], [16.0, 86.0], [16.1, 87.0], [16.2, 87.0], [16.3, 88.0], [16.4, 89.0], [16.5, 89.0], [16.6, 90.0], [16.7, 91.0], [16.8, 92.0], [16.9, 92.0], [17.0, 92.0], [17.1, 93.0], [17.2, 94.0], [17.3, 94.0], [17.4, 95.0], [17.5, 95.0], [17.6, 96.0], [17.7, 97.0], [17.8, 97.0], [17.9, 98.0], [18.0, 98.0], [18.1, 98.0], [18.2, 99.0], [18.3, 99.0], [18.4, 99.0], [18.5, 100.0], [18.6, 101.0], [18.7, 101.0], [18.8, 102.0], [18.9, 103.0], [19.0, 103.0], [19.1, 103.0], [19.2, 104.0], [19.3, 104.0], [19.4, 104.0], [19.5, 105.0], [19.6, 105.0], [19.7, 106.0], [19.8, 106.0], [19.9, 107.0], [20.0, 108.0], [20.1, 108.0], [20.2, 109.0], [20.3, 109.0], [20.4, 109.0], [20.5, 110.0], [20.6, 110.0], [20.7, 111.0], [20.8, 111.0], [20.9, 112.0], [21.0, 113.0], [21.1, 113.0], [21.2, 114.0], [21.3, 115.0], [21.4, 115.0], [21.5, 115.0], [21.6, 116.0], [21.7, 116.0], [21.8, 117.0], [21.9, 117.0], [22.0, 117.0], [22.1, 118.0], [22.2, 119.0], [22.3, 120.0], [22.4, 120.0], [22.5, 121.0], [22.6, 121.0], [22.7, 122.0], [22.8, 122.0], [22.9, 123.0], [23.0, 124.0], [23.1, 125.0], [23.2, 126.0], [23.3, 127.0], [23.4, 128.0], [23.5, 128.0], [23.6, 129.0], [23.7, 129.0], [23.8, 130.0], [23.9, 130.0], [24.0, 131.0], [24.1, 132.0], [24.2, 132.0], [24.3, 133.0], [24.4, 134.0], [24.5, 134.0], [24.6, 135.0], [24.7, 136.0], [24.8, 137.0], [24.9, 138.0], [25.0, 139.0], [25.1, 139.0], [25.2, 141.0], [25.3, 141.0], [25.4, 142.0], [25.5, 143.0], [25.6, 144.0], [25.7, 144.0], [25.8, 145.0], [25.9, 146.0], [26.0, 147.0], [26.1, 148.0], [26.2, 149.0], [26.3, 150.0], [26.4, 151.0], [26.5, 151.0], [26.6, 152.0], [26.7, 153.0], [26.8, 154.0], [26.9, 155.0], [27.0, 156.0], [27.1, 157.0], [27.2, 157.0], [27.3, 157.0], [27.4, 157.0], [27.5, 158.0], [27.6, 160.0], [27.7, 161.0], [27.8, 162.0], [27.9, 162.0], [28.0, 163.0], [28.1, 163.0], [28.2, 164.0], [28.3, 165.0], [28.4, 166.0], [28.5, 167.0], [28.6, 168.0], [28.7, 170.0], [28.8, 171.0], [28.9, 172.0], [29.0, 172.0], [29.1, 172.0], [29.2, 173.0], [29.3, 174.0], [29.4, 174.0], [29.5, 176.0], [29.6, 177.0], [29.7, 177.0], [29.8, 178.0], [29.9, 179.0], [30.0, 179.0], [30.1, 181.0], [30.2, 182.0], [30.3, 183.0], [30.4, 184.0], [30.5, 184.0], [30.6, 185.0], [30.7, 187.0], [30.8, 187.0], [30.9, 188.0], [31.0, 189.0], [31.1, 190.0], [31.2, 191.0], [31.3, 191.0], [31.4, 192.0], [31.5, 192.0], [31.6, 194.0], [31.7, 194.0], [31.8, 196.0], [31.9, 197.0], [32.0, 197.0], [32.1, 198.0], [32.2, 200.0], [32.3, 201.0], [32.4, 201.0], [32.5, 202.0], [32.6, 203.0], [32.7, 203.0], [32.8, 204.0], [32.9, 205.0], [33.0, 206.0], [33.1, 206.0], [33.2, 208.0], [33.3, 209.0], [33.4, 210.0], [33.5, 211.0], [33.6, 211.0], [33.7, 212.0], [33.8, 213.0], [33.9, 213.0], [34.0, 214.0], [34.1, 214.0], [34.2, 216.0], [34.3, 217.0], [34.4, 218.0], [34.5, 219.0], [34.6, 220.0], [34.7, 221.0], [34.8, 222.0], [34.9, 222.0], [35.0, 224.0], [35.1, 225.0], [35.2, 226.0], [35.3, 226.0], [35.4, 227.0], [35.5, 228.0], [35.6, 229.0], [35.7, 230.0], [35.8, 231.0], [35.9, 232.0], [36.0, 233.0], [36.1, 234.0], [36.2, 235.0], [36.3, 236.0], [36.4, 237.0], [36.5, 239.0], [36.6, 240.0], [36.7, 240.0], [36.8, 241.0], [36.9, 244.0], [37.0, 244.0], [37.1, 246.0], [37.2, 246.0], [37.3, 248.0], [37.4, 250.0], [37.5, 251.0], [37.6, 254.0], [37.7, 255.0], [37.8, 256.0], [37.9, 257.0], [38.0, 259.0], [38.1, 259.0], [38.2, 261.0], [38.3, 262.0], [38.4, 263.0], [38.5, 265.0], [38.6, 267.0], [38.7, 267.0], [38.8, 269.0], [38.9, 269.0], [39.0, 270.0], [39.1, 271.0], [39.2, 272.0], [39.3, 274.0], [39.4, 275.0], [39.5, 276.0], [39.6, 277.0], [39.7, 278.0], [39.8, 279.0], [39.9, 279.0], [40.0, 280.0], [40.1, 281.0], [40.2, 282.0], [40.3, 282.0], [40.4, 283.0], [40.5, 284.0], [40.6, 285.0], [40.7, 287.0], [40.8, 289.0], [40.9, 290.0], [41.0, 292.0], [41.1, 293.0], [41.2, 294.0], [41.3, 295.0], [41.4, 296.0], [41.5, 297.0], [41.6, 298.0], [41.7, 298.0], [41.8, 299.0], [41.9, 300.0], [42.0, 300.0], [42.1, 301.0], [42.2, 301.0], [42.3, 302.0], [42.4, 303.0], [42.5, 303.0], [42.6, 304.0], [42.7, 306.0], [42.8, 306.0], [42.9, 307.0], [43.0, 308.0], [43.1, 308.0], [43.2, 309.0], [43.3, 310.0], [43.4, 310.0], [43.5, 311.0], [43.6, 312.0], [43.7, 313.0], [43.8, 313.0], [43.9, 314.0], [44.0, 316.0], [44.1, 317.0], [44.2, 317.0], [44.3, 318.0], [44.4, 319.0], [44.5, 319.0], [44.6, 320.0], [44.7, 321.0], [44.8, 322.0], [44.9, 322.0], [45.0, 323.0], [45.1, 323.0], [45.2, 324.0], [45.3, 324.0], [45.4, 326.0], [45.5, 326.0], [45.6, 326.0], [45.7, 327.0], [45.8, 327.0], [45.9, 328.0], [46.0, 329.0], [46.1, 329.0], [46.2, 330.0], [46.3, 331.0], [46.4, 331.0], [46.5, 332.0], [46.6, 332.0], [46.7, 333.0], [46.8, 333.0], [46.9, 334.0], [47.0, 335.0], [47.1, 335.0], [47.2, 336.0], [47.3, 337.0], [47.4, 338.0], [47.5, 338.0], [47.6, 339.0], [47.7, 339.0], [47.8, 340.0], [47.9, 341.0], [48.0, 342.0], [48.1, 342.0], [48.2, 343.0], [48.3, 344.0], [48.4, 345.0], [48.5, 345.0], [48.6, 346.0], [48.7, 347.0], [48.8, 348.0], [48.9, 348.0], [49.0, 349.0], [49.1, 349.0], [49.2, 350.0], [49.3, 351.0], [49.4, 352.0], [49.5, 352.0], [49.6, 353.0], [49.7, 354.0], [49.8, 354.0], [49.9, 355.0], [50.0, 355.0], [50.1, 356.0], [50.2, 357.0], [50.3, 357.0], [50.4, 358.0], [50.5, 358.0], [50.6, 359.0], [50.7, 360.0], [50.8, 361.0], [50.9, 361.0], [51.0, 363.0], [51.1, 363.0], [51.2, 363.0], [51.3, 364.0], [51.4, 365.0], [51.5, 365.0], [51.6, 367.0], [51.7, 368.0], [51.8, 368.0], [51.9, 368.0], [52.0, 369.0], [52.1, 370.0], [52.2, 371.0], [52.3, 373.0], [52.4, 374.0], [52.5, 375.0], [52.6, 375.0], [52.7, 376.0], [52.8, 377.0], [52.9, 378.0], [53.0, 379.0], [53.1, 379.0], [53.2, 380.0], [53.3, 381.0], [53.4, 382.0], [53.5, 382.0], [53.6, 384.0], [53.7, 385.0], [53.8, 385.0], [53.9, 386.0], [54.0, 386.0], [54.1, 388.0], [54.2, 389.0], [54.3, 389.0], [54.4, 390.0], [54.5, 391.0], [54.6, 393.0], [54.7, 393.0], [54.8, 394.0], [54.9, 396.0], [55.0, 396.0], [55.1, 397.0], [55.2, 398.0], [55.3, 398.0], [55.4, 399.0], [55.5, 399.0], [55.6, 400.0], [55.7, 401.0], [55.8, 402.0], [55.9, 403.0], [56.0, 404.0], [56.1, 405.0], [56.2, 406.0], [56.3, 406.0], [56.4, 407.0], [56.5, 407.0], [56.6, 408.0], [56.7, 409.0], [56.8, 409.0], [56.9, 411.0], [57.0, 411.0], [57.1, 412.0], [57.2, 412.0], [57.3, 413.0], [57.4, 414.0], [57.5, 415.0], [57.6, 415.0], [57.7, 417.0], [57.8, 419.0], [57.9, 421.0], [58.0, 422.0], [58.1, 423.0], [58.2, 424.0], [58.3, 424.0], [58.4, 426.0], [58.5, 427.0], [58.6, 429.0], [58.7, 430.0], [58.8, 431.0], [58.9, 431.0], [59.0, 432.0], [59.1, 435.0], [59.2, 436.0], [59.3, 437.0], [59.4, 438.0], [59.5, 438.0], [59.6, 439.0], [59.7, 440.0], [59.8, 441.0], [59.9, 442.0], [60.0, 444.0], [60.1, 445.0], [60.2, 447.0], [60.3, 448.0], [60.4, 449.0], [60.5, 450.0], [60.6, 452.0], [60.7, 452.0], [60.8, 453.0], [60.9, 456.0], [61.0, 457.0], [61.1, 457.0], [61.2, 459.0], [61.3, 461.0], [61.4, 461.0], [61.5, 462.0], [61.6, 464.0], [61.7, 465.0], [61.8, 467.0], [61.9, 469.0], [62.0, 470.0], [62.1, 472.0], [62.2, 473.0], [62.3, 475.0], [62.4, 476.0], [62.5, 478.0], [62.6, 481.0], [62.7, 483.0], [62.8, 485.0], [62.9, 488.0], [63.0, 489.0], [63.1, 492.0], [63.2, 495.0], [63.3, 497.0], [63.4, 498.0], [63.5, 501.0], [63.6, 502.0], [63.7, 505.0], [63.8, 507.0], [63.9, 509.0], [64.0, 511.0], [64.1, 513.0], [64.2, 514.0], [64.3, 517.0], [64.4, 521.0], [64.5, 523.0], [64.6, 524.0], [64.7, 526.0], [64.8, 530.0], [64.9, 532.0], [65.0, 533.0], [65.1, 535.0], [65.2, 538.0], [65.3, 541.0], [65.4, 543.0], [65.5, 544.0], [65.6, 547.0], [65.7, 548.0], [65.8, 549.0], [65.9, 550.0], [66.0, 551.0], [66.1, 554.0], [66.2, 556.0], [66.3, 558.0], [66.4, 560.0], [66.5, 563.0], [66.6, 565.0], [66.7, 567.0], [66.8, 569.0], [66.9, 569.0], [67.0, 571.0], [67.1, 572.0], [67.2, 574.0], [67.3, 575.0], [67.4, 577.0], [67.5, 579.0], [67.6, 580.0], [67.7, 581.0], [67.8, 583.0], [67.9, 585.0], [68.0, 586.0], [68.1, 588.0], [68.2, 588.0], [68.3, 588.0], [68.4, 590.0], [68.5, 592.0], [68.6, 593.0], [68.7, 594.0], [68.8, 595.0], [68.9, 596.0], [69.0, 596.0], [69.1, 597.0], [69.2, 599.0], [69.3, 600.0], [69.4, 602.0], [69.5, 603.0], [69.6, 604.0], [69.7, 605.0], [69.8, 606.0], [69.9, 607.0], [70.0, 608.0], [70.1, 609.0], [70.2, 610.0], [70.3, 611.0], [70.4, 612.0], [70.5, 613.0], [70.6, 614.0], [70.7, 615.0], [70.8, 616.0], [70.9, 617.0], [71.0, 618.0], [71.1, 619.0], [71.2, 620.0], [71.3, 620.0], [71.4, 621.0], [71.5, 622.0], [71.6, 623.0], [71.7, 624.0], [71.8, 625.0], [71.9, 626.0], [72.0, 627.0], [72.1, 627.0], [72.2, 628.0], [72.3, 629.0], [72.4, 629.0], [72.5, 632.0], [72.6, 632.0], [72.7, 633.0], [72.8, 634.0], [72.9, 634.0], [73.0, 635.0], [73.1, 635.0], [73.2, 638.0], [73.3, 638.0], [73.4, 639.0], [73.5, 640.0], [73.6, 641.0], [73.7, 641.0], [73.8, 642.0], [73.9, 643.0], [74.0, 644.0], [74.1, 645.0], [74.2, 647.0], [74.3, 648.0], [74.4, 649.0], [74.5, 651.0], [74.6, 652.0], [74.7, 652.0], [74.8, 653.0], [74.9, 655.0], [75.0, 656.0], [75.1, 657.0], [75.2, 658.0], [75.3, 659.0], [75.4, 660.0], [75.5, 661.0], [75.6, 663.0], [75.7, 664.0], [75.8, 665.0], [75.9, 667.0], [76.0, 668.0], [76.1, 669.0], [76.2, 670.0], [76.3, 671.0], [76.4, 673.0], [76.5, 674.0], [76.6, 676.0], [76.7, 677.0], [76.8, 679.0], [76.9, 680.0], [77.0, 681.0], [77.1, 682.0], [77.2, 683.0], [77.3, 684.0], [77.4, 686.0], [77.5, 687.0], [77.6, 690.0], [77.7, 692.0], [77.8, 694.0], [77.9, 695.0], [78.0, 697.0], [78.1, 699.0], [78.2, 702.0], [78.3, 704.0], [78.4, 707.0], [78.5, 708.0], [78.6, 710.0], [78.7, 712.0], [78.8, 713.0], [78.9, 715.0], [79.0, 717.0], [79.1, 717.0], [79.2, 719.0], [79.3, 720.0], [79.4, 721.0], [79.5, 725.0], [79.6, 727.0], [79.7, 729.0], [79.8, 732.0], [79.9, 738.0], [80.0, 739.0], [80.1, 741.0], [80.2, 745.0], [80.3, 745.0], [80.4, 748.0], [80.5, 752.0], [80.6, 755.0], [80.7, 760.0], [80.8, 765.0], [80.9, 766.0], [81.0, 769.0], [81.1, 773.0], [81.2, 777.0], [81.3, 779.0], [81.4, 782.0], [81.5, 787.0], [81.6, 794.0], [81.7, 797.0], [81.8, 801.0], [81.9, 805.0], [82.0, 808.0], [82.1, 812.0], [82.2, 816.0], [82.3, 824.0], [82.4, 829.0], [82.5, 835.0], [82.6, 836.0], [82.7, 838.0], [82.8, 840.0], [82.9, 843.0], [83.0, 845.0], [83.1, 851.0], [83.2, 856.0], [83.3, 858.0], [83.4, 860.0], [83.5, 861.0], [83.6, 864.0], [83.7, 867.0], [83.8, 870.0], [83.9, 873.0], [84.0, 877.0], [84.1, 880.0], [84.2, 882.0], [84.3, 885.0], [84.4, 887.0], [84.5, 890.0], [84.6, 892.0], [84.7, 896.0], [84.8, 897.0], [84.9, 899.0], [85.0, 901.0], [85.1, 904.0], [85.2, 906.0], [85.3, 908.0], [85.4, 911.0], [85.5, 912.0], [85.6, 913.0], [85.7, 914.0], [85.8, 917.0], [85.9, 920.0], [86.0, 922.0], [86.1, 923.0], [86.2, 924.0], [86.3, 926.0], [86.4, 928.0], [86.5, 929.0], [86.6, 931.0], [86.7, 933.0], [86.8, 935.0], [86.9, 939.0], [87.0, 941.0], [87.1, 942.0], [87.2, 944.0], [87.3, 946.0], [87.4, 947.0], [87.5, 949.0], [87.6, 953.0], [87.7, 957.0], [87.8, 961.0], [87.9, 966.0], [88.0, 968.0], [88.1, 970.0], [88.2, 975.0], [88.3, 978.0], [88.4, 979.0], [88.5, 983.0], [88.6, 986.0], [88.7, 992.0], [88.8, 994.0], [88.9, 1001.0], [89.0, 1006.0], [89.1, 1009.0], [89.2, 1017.0], [89.3, 1022.0], [89.4, 1032.0], [89.5, 1037.0], [89.6, 1043.0], [89.7, 1056.0], [89.8, 1070.0], [89.9, 1073.0], [90.0, 1090.0], [90.1, 1098.0], [90.2, 1102.0], [90.3, 1107.0], [90.4, 1127.0], [90.5, 1132.0], [90.6, 1151.0], [90.7, 1167.0], [90.8, 1176.0], [90.9, 1181.0], [91.0, 1187.0], [91.1, 1191.0], [91.2, 1194.0], [91.3, 1198.0], [91.4, 1205.0], [91.5, 1210.0], [91.6, 1215.0], [91.7, 1222.0], [91.8, 1226.0], [91.9, 1231.0], [92.0, 1237.0], [92.1, 1240.0], [92.2, 1245.0], [92.3, 1247.0], [92.4, 1252.0], [92.5, 1256.0], [92.6, 1260.0], [92.7, 1266.0], [92.8, 1269.0], [92.9, 1278.0], [93.0, 1283.0], [93.1, 1294.0], [93.2, 1306.0], [93.3, 1325.0], [93.4, 1330.0], [93.5, 1348.0], [93.6, 1360.0], [93.7, 1379.0], [93.8, 1419.0], [93.9, 1443.0], [94.0, 1462.0], [94.1, 1475.0], [94.2, 1519.0], [94.3, 1603.0], [94.4, 1619.0], [94.5, 1638.0], [94.6, 1660.0], [94.7, 1690.0], [94.8, 1713.0], [94.9, 1732.0], [95.0, 1777.0], [95.1, 1806.0], [95.2, 1903.0], [95.3, 1942.0], [95.4, 1983.0], [95.5, 2057.0], [95.6, 2097.0], [95.7, 2128.0], [95.8, 2237.0], [95.9, 2314.0], [96.0, 2402.0], [96.1, 2502.0], [96.2, 2521.0], [96.3, 2596.0], [96.4, 2658.0], [96.5, 2747.0], [96.6, 2811.0], [96.7, 2869.0], [96.8, 2961.0], [96.9, 2993.0], [97.0, 3018.0], [97.1, 3139.0], [97.2, 3194.0], [97.3, 3307.0], [97.4, 3450.0], [97.5, 3532.0], [97.6, 3613.0], [97.7, 3769.0], [97.8, 3856.0], [97.9, 3940.0], [98.0, 3988.0], [98.1, 4025.0], [98.2, 4173.0], [98.3, 4539.0], [98.4, 5016.0], [98.5, 5446.0], [98.6, 5600.0], [98.7, 5771.0], [98.8, 7757.0], [98.9, 8001.0], [99.0, 8102.0], [99.1, 8173.0], [99.2, 8267.0], [99.3, 8547.0], [99.4, 8900.0], [99.5, 9600.0], [99.6, 10369.0], [99.7, 10598.0], [99.8, 10717.0], [99.9, 11036.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 958.0, "series": [{"data": [[0.0, 958.0], [600.0, 459.0], [700.0, 189.0], [800.0, 164.0], [900.0, 204.0], [1000.0, 67.0], [1100.0, 62.0], [1200.0, 94.0], [1300.0, 33.0], [1400.0, 20.0], [1500.0, 6.0], [1600.0, 24.0], [1700.0, 17.0], [1800.0, 6.0], [1900.0, 12.0], [2000.0, 11.0], [2100.0, 8.0], [2300.0, 5.0], [2200.0, 6.0], [2400.0, 5.0], [2500.0, 11.0], [2600.0, 9.0], [2700.0, 5.0], [2800.0, 7.0], [2900.0, 12.0], [3000.0, 8.0], [3100.0, 6.0], [3300.0, 6.0], [3200.0, 3.0], [3400.0, 5.0], [3500.0, 4.0], [3700.0, 4.0], [3600.0, 4.0], [3800.0, 6.0], [3900.0, 11.0], [4000.0, 6.0], [4200.0, 2.0], [4300.0, 1.0], [4100.0, 4.0], [4600.0, 2.0], [4500.0, 2.0], [4700.0, 1.0], [5100.0, 2.0], [5000.0, 1.0], [5200.0, 1.0], [5400.0, 4.0], [5600.0, 4.0], [5500.0, 3.0], [5700.0, 2.0], [6200.0, 2.0], [6500.0, 1.0], [7700.0, 3.0], [7900.0, 3.0], [8100.0, 7.0], [8000.0, 6.0], [8300.0, 2.0], [8500.0, 2.0], [8200.0, 4.0], [8600.0, 2.0], [8400.0, 1.0], [8700.0, 1.0], [9000.0, 1.0], [8800.0, 1.0], [9100.0, 2.0], [8900.0, 1.0], [9500.0, 2.0], [9600.0, 2.0], [10100.0, 1.0], [10200.0, 1.0], [10600.0, 3.0], [10700.0, 3.0], [10300.0, 4.0], [10400.0, 1.0], [10500.0, 2.0], [11000.0, 2.0], [10900.0, 1.0], [10800.0, 1.0], [11100.0, 1.0], [18600.0, 1.0], [20400.0, 1.0], [20800.0, 1.0], [20700.0, 1.0], [100.0, 712.0], [200.0, 502.0], [300.0, 710.0], [400.0, 413.0], [500.0, 300.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 20800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 303.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3295.0, "series": [{"data": [[0.0, 3295.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1592.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 303.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.935064935064936, "minX": 1.60384266E12, "maxY": 10.0, "series": [{"data": [[1.60384272E12, 10.0], [1.6038429E12, 10.0], [1.60384278E12, 10.0], [1.60384296E12, 9.935064935064936], [1.60384266E12, 10.0], [1.60384284E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384296E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 280.0, "minX": 1.0, "maxY": 7757.0, "series": [{"data": [[8.0, 664.0], [4.0, 778.0], [2.0, 7757.0], [1.0, 5700.0], [9.0, 430.0], [10.0, 635.9490445859863], [5.0, 612.0], [6.0, 404.0], [3.0, 825.0], [7.0, 280.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 638.208477842003]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5442.866666666667, "minX": 1.60384266E12, "maxY": 5192579.683333334, "series": [{"data": [[1.60384272E12, 4974141.183333334], [1.6038429E12, 5192579.683333334], [1.60384278E12, 4428731.533333333], [1.60384296E12, 2721467.4166666665], [1.60384266E12, 2958086.683333333], [1.60384284E12, 3367437.1666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384272E12, 5574.233333333334], [1.6038429E12, 6453.8], [1.60384278E12, 8147.166666666667], [1.60384296E12, 5442.866666666667], [1.60384266E12, 6279.966666666666], [1.60384284E12, 8043.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384296E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 559.2539831302715, "minX": 1.60384266E12, "maxY": 839.2486338797812, "series": [{"data": [[1.60384272E12, 839.2486338797812], [1.6038429E12, 666.1346153846155], [1.60384278E12, 576.3918918918921], [1.60384296E12, 610.8629148629149], [1.60384266E12, 634.4024096385542], [1.60384284E12, 559.2539831302715]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384296E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 558.1546391752579, "minX": 1.60384266E12, "maxY": 836.2964480874308, "series": [{"data": [[1.60384272E12, 836.2964480874308], [1.6038429E12, 664.0120192307695], [1.60384278E12, 575.0347490347494], [1.60384296E12, 609.6291486291486], [1.60384266E12, 632.7530120481924], [1.60384284E12, 558.1546391752579]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384296E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.012019230769230758, "minX": 1.60384266E12, "maxY": 0.10843373493975926, "series": [{"data": [[1.60384272E12, 0.019125683060109294], [1.6038429E12, 0.012019230769230758], [1.60384278E12, 0.015444015444015441], [1.60384296E12, 0.020202020202020214], [1.60384266E12, 0.10843373493975926], [1.60384284E12, 0.012183692596063738]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384296E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.60384266E12, "maxY": 20860.0, "series": [{"data": [[1.60384272E12, 11178.0], [1.6038429E12, 10192.0], [1.60384278E12, 20860.0], [1.60384296E12, 20701.0], [1.60384266E12, 18663.0], [1.60384284E12, 8463.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384272E12, 31.59699982523918], [1.6038429E12, 33.0], [1.60384278E12, 29.0], [1.60384296E12, 30.245999834537507], [1.60384266E12, 34.0], [1.60384284E12, 34.61199974536896]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384272E12, 32.256700069904326], [1.6038429E12, 33.24670007944107], [1.60384278E12, 29.0], [1.60384296E12, 30.870600066185], [1.60384266E12, 34.0], [1.60384284E12, 35.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384272E12, 31.96349991261959], [1.6038429E12, 33.0], [1.60384278E12, 29.0], [1.60384296E12, 30.592999917268752], [1.60384266E12, 34.0], [1.60384284E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384272E12, 23.0], [1.6038429E12, 22.0], [1.60384278E12, 20.0], [1.60384296E12, 24.0], [1.60384266E12, 29.0], [1.60384284E12, 27.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384272E12, 617.0], [1.6038429E12, 552.5], [1.60384278E12, 347.5], [1.60384296E12, 301.0], [1.60384266E12, 276.0], [1.60384284E12, 292.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384296E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 102.0, "minX": 1.0, "maxY": 2555.0, "series": [{"data": [[33.0, 190.0], [2.0, 954.0], [32.0, 109.0], [34.0, 306.5], [37.0, 161.5], [36.0, 227.0], [38.0, 192.0], [39.0, 134.5], [41.0, 124.0], [40.0, 102.0], [43.0, 209.0], [42.0, 123.5], [3.0, 801.5], [58.0, 105.5], [59.0, 117.0], [4.0, 1354.5], [5.0, 624.0], [6.0, 517.0], [7.0, 589.0], [8.0, 365.0], [9.0, 411.0], [10.0, 607.5], [11.0, 635.0], [12.0, 625.5], [13.0, 609.0], [14.0, 596.0], [15.0, 597.0], [16.0, 468.5], [1.0, 2555.0], [17.0, 508.0], [18.0, 365.0], [19.0, 523.5], [20.0, 405.0], [21.0, 391.0], [22.0, 360.5], [23.0, 276.0], [24.0, 358.0], [25.0, 367.0], [26.0, 306.0], [27.0, 308.5], [28.0, 346.0], [29.0, 282.0], [30.0, 234.5], [31.0, 243.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 59.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 101.5, "minX": 1.0, "maxY": 2554.0, "series": [{"data": [[33.0, 190.0], [2.0, 953.0], [32.0, 108.5], [34.0, 306.0], [37.0, 160.5], [36.0, 226.5], [38.0, 192.0], [39.0, 134.5], [41.0, 123.0], [40.0, 101.5], [43.0, 208.0], [42.0, 122.0], [3.0, 799.0], [58.0, 105.0], [59.0, 116.0], [4.0, 1353.0], [5.0, 620.0], [6.0, 513.0], [7.0, 589.0], [8.0, 364.5], [9.0, 409.5], [10.0, 602.5], [11.0, 632.5], [12.0, 621.0], [13.0, 604.0], [14.0, 591.5], [15.0, 595.0], [16.0, 467.0], [1.0, 2554.0], [17.0, 507.5], [18.0, 360.5], [19.0, 521.5], [20.0, 401.5], [21.0, 386.0], [22.0, 359.0], [23.0, 275.0], [24.0, 356.0], [25.0, 367.0], [26.0, 305.0], [27.0, 308.0], [28.0, 344.0], [29.0, 282.0], [30.0, 233.5], [31.0, 242.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 59.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.383333333333333, "minX": 1.60384266E12, "maxY": 17.783333333333335, "series": [{"data": [[1.60384272E12, 12.2], [1.6038429E12, 13.866666666666667], [1.60384278E12, 17.266666666666666], [1.60384296E12, 11.383333333333333], [1.60384266E12, 14.0], [1.60384284E12, 17.783333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384296E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.55, "minX": 1.60384266E12, "maxY": 17.783333333333335, "series": [{"data": [[1.60384272E12, 12.2], [1.6038429E12, 13.866666666666667], [1.60384278E12, 17.266666666666666], [1.60384296E12, 11.55], [1.60384266E12, 13.833333333333334], [1.60384284E12, 17.783333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384296E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.55, "minX": 1.60384266E12, "maxY": 17.783333333333335, "series": [{"data": [[1.60384272E12, 12.2], [1.6038429E12, 13.866666666666667], [1.60384278E12, 17.266666666666666], [1.60384296E12, 11.55], [1.60384266E12, 13.833333333333334], [1.60384284E12, 17.783333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384296E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.55, "minX": 1.60384266E12, "maxY": 17.783333333333335, "series": [{"data": [[1.60384272E12, 12.2], [1.6038429E12, 13.866666666666667], [1.60384278E12, 17.266666666666666], [1.60384296E12, 11.55], [1.60384266E12, 13.833333333333334], [1.60384284E12, 17.783333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384296E12, "title": "Total Transactions Per Second"}},
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

