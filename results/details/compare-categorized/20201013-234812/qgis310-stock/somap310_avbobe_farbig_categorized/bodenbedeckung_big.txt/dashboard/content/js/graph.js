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
        data: {"result": {"minY": 19.0, "minX": 0.0, "maxY": 20702.0, "series": [{"data": [[0.0, 19.0], [0.1, 26.0], [0.2, 28.0], [0.3, 29.0], [0.4, 29.0], [0.5, 30.0], [0.6, 31.0], [0.7, 32.0], [0.8, 32.0], [0.9, 32.0], [1.0, 33.0], [1.1, 33.0], [1.2, 34.0], [1.3, 34.0], [1.4, 34.0], [1.5, 34.0], [1.6, 35.0], [1.7, 35.0], [1.8, 35.0], [1.9, 35.0], [2.0, 36.0], [2.1, 36.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 38.0], [2.6, 38.0], [2.7, 38.0], [2.8, 38.0], [2.9, 39.0], [3.0, 39.0], [3.1, 39.0], [3.2, 40.0], [3.3, 40.0], [3.4, 40.0], [3.5, 40.0], [3.6, 41.0], [3.7, 41.0], [3.8, 41.0], [3.9, 41.0], [4.0, 41.0], [4.1, 41.0], [4.2, 42.0], [4.3, 42.0], [4.4, 42.0], [4.5, 43.0], [4.6, 43.0], [4.7, 43.0], [4.8, 44.0], [4.9, 44.0], [5.0, 45.0], [5.1, 45.0], [5.2, 45.0], [5.3, 45.0], [5.4, 46.0], [5.5, 46.0], [5.6, 47.0], [5.7, 47.0], [5.8, 48.0], [5.9, 48.0], [6.0, 48.0], [6.1, 48.0], [6.2, 49.0], [6.3, 49.0], [6.4, 49.0], [6.5, 50.0], [6.6, 50.0], [6.7, 51.0], [6.8, 51.0], [6.9, 51.0], [7.0, 52.0], [7.1, 52.0], [7.2, 52.0], [7.3, 53.0], [7.4, 54.0], [7.5, 54.0], [7.6, 55.0], [7.7, 55.0], [7.8, 56.0], [7.9, 57.0], [8.0, 57.0], [8.1, 57.0], [8.2, 58.0], [8.3, 58.0], [8.4, 59.0], [8.5, 59.0], [8.6, 60.0], [8.7, 60.0], [8.8, 61.0], [8.9, 62.0], [9.0, 62.0], [9.1, 63.0], [9.2, 63.0], [9.3, 64.0], [9.4, 64.0], [9.5, 64.0], [9.6, 65.0], [9.7, 65.0], [9.8, 66.0], [9.9, 67.0], [10.0, 67.0], [10.1, 67.0], [10.2, 68.0], [10.3, 68.0], [10.4, 69.0], [10.5, 69.0], [10.6, 69.0], [10.7, 70.0], [10.8, 70.0], [10.9, 71.0], [11.0, 72.0], [11.1, 72.0], [11.2, 72.0], [11.3, 73.0], [11.4, 73.0], [11.5, 74.0], [11.6, 74.0], [11.7, 75.0], [11.8, 75.0], [11.9, 76.0], [12.0, 77.0], [12.1, 78.0], [12.2, 78.0], [12.3, 79.0], [12.4, 79.0], [12.5, 79.0], [12.6, 80.0], [12.7, 80.0], [12.8, 81.0], [12.9, 81.0], [13.0, 81.0], [13.1, 82.0], [13.2, 82.0], [13.3, 83.0], [13.4, 83.0], [13.5, 84.0], [13.6, 84.0], [13.7, 85.0], [13.8, 86.0], [13.9, 86.0], [14.0, 87.0], [14.1, 87.0], [14.2, 88.0], [14.3, 88.0], [14.4, 89.0], [14.5, 89.0], [14.6, 90.0], [14.7, 90.0], [14.8, 91.0], [14.9, 91.0], [15.0, 92.0], [15.1, 92.0], [15.2, 93.0], [15.3, 94.0], [15.4, 94.0], [15.5, 95.0], [15.6, 96.0], [15.7, 96.0], [15.8, 96.0], [15.9, 96.0], [16.0, 97.0], [16.1, 97.0], [16.2, 98.0], [16.3, 98.0], [16.4, 99.0], [16.5, 99.0], [16.6, 99.0], [16.7, 100.0], [16.8, 100.0], [16.9, 101.0], [17.0, 102.0], [17.1, 102.0], [17.2, 103.0], [17.3, 103.0], [17.4, 103.0], [17.5, 104.0], [17.6, 105.0], [17.7, 105.0], [17.8, 106.0], [17.9, 106.0], [18.0, 106.0], [18.1, 107.0], [18.2, 107.0], [18.3, 107.0], [18.4, 108.0], [18.5, 108.0], [18.6, 109.0], [18.7, 109.0], [18.8, 110.0], [18.9, 110.0], [19.0, 111.0], [19.1, 111.0], [19.2, 112.0], [19.3, 112.0], [19.4, 113.0], [19.5, 114.0], [19.6, 114.0], [19.7, 115.0], [19.8, 115.0], [19.9, 116.0], [20.0, 116.0], [20.1, 117.0], [20.2, 118.0], [20.3, 118.0], [20.4, 118.0], [20.5, 119.0], [20.6, 119.0], [20.7, 120.0], [20.8, 120.0], [20.9, 121.0], [21.0, 121.0], [21.1, 122.0], [21.2, 122.0], [21.3, 123.0], [21.4, 123.0], [21.5, 124.0], [21.6, 125.0], [21.7, 126.0], [21.8, 126.0], [21.9, 127.0], [22.0, 128.0], [22.1, 128.0], [22.2, 129.0], [22.3, 130.0], [22.4, 130.0], [22.5, 131.0], [22.6, 132.0], [22.7, 133.0], [22.8, 133.0], [22.9, 134.0], [23.0, 135.0], [23.1, 135.0], [23.2, 136.0], [23.3, 136.0], [23.4, 137.0], [23.5, 137.0], [23.6, 138.0], [23.7, 138.0], [23.8, 139.0], [23.9, 140.0], [24.0, 141.0], [24.1, 141.0], [24.2, 142.0], [24.3, 143.0], [24.4, 144.0], [24.5, 145.0], [24.6, 145.0], [24.7, 146.0], [24.8, 146.0], [24.9, 148.0], [25.0, 148.0], [25.1, 149.0], [25.2, 149.0], [25.3, 150.0], [25.4, 151.0], [25.5, 151.0], [25.6, 152.0], [25.7, 153.0], [25.8, 154.0], [25.9, 154.0], [26.0, 155.0], [26.1, 156.0], [26.2, 157.0], [26.3, 158.0], [26.4, 158.0], [26.5, 159.0], [26.6, 159.0], [26.7, 160.0], [26.8, 160.0], [26.9, 161.0], [27.0, 162.0], [27.1, 163.0], [27.2, 163.0], [27.3, 164.0], [27.4, 164.0], [27.5, 165.0], [27.6, 166.0], [27.7, 167.0], [27.8, 168.0], [27.9, 169.0], [28.0, 169.0], [28.1, 170.0], [28.2, 170.0], [28.3, 171.0], [28.4, 171.0], [28.5, 172.0], [28.6, 173.0], [28.7, 174.0], [28.8, 175.0], [28.9, 176.0], [29.0, 176.0], [29.1, 176.0], [29.2, 177.0], [29.3, 178.0], [29.4, 179.0], [29.5, 180.0], [29.6, 180.0], [29.7, 181.0], [29.8, 182.0], [29.9, 183.0], [30.0, 184.0], [30.1, 184.0], [30.2, 185.0], [30.3, 185.0], [30.4, 186.0], [30.5, 187.0], [30.6, 188.0], [30.7, 189.0], [30.8, 189.0], [30.9, 190.0], [31.0, 190.0], [31.1, 191.0], [31.2, 192.0], [31.3, 193.0], [31.4, 194.0], [31.5, 194.0], [31.6, 195.0], [31.7, 195.0], [31.8, 196.0], [31.9, 197.0], [32.0, 199.0], [32.1, 200.0], [32.2, 201.0], [32.3, 202.0], [32.4, 203.0], [32.5, 203.0], [32.6, 205.0], [32.7, 205.0], [32.8, 207.0], [32.9, 207.0], [33.0, 208.0], [33.1, 209.0], [33.2, 210.0], [33.3, 211.0], [33.4, 213.0], [33.5, 214.0], [33.6, 215.0], [33.7, 216.0], [33.8, 217.0], [33.9, 217.0], [34.0, 218.0], [34.1, 219.0], [34.2, 220.0], [34.3, 221.0], [34.4, 221.0], [34.5, 222.0], [34.6, 223.0], [34.7, 224.0], [34.8, 225.0], [34.9, 227.0], [35.0, 228.0], [35.1, 229.0], [35.2, 230.0], [35.3, 231.0], [35.4, 232.0], [35.5, 233.0], [35.6, 235.0], [35.7, 236.0], [35.8, 237.0], [35.9, 238.0], [36.0, 238.0], [36.1, 239.0], [36.2, 239.0], [36.3, 241.0], [36.4, 242.0], [36.5, 244.0], [36.6, 245.0], [36.7, 246.0], [36.8, 247.0], [36.9, 248.0], [37.0, 249.0], [37.1, 250.0], [37.2, 251.0], [37.3, 251.0], [37.4, 253.0], [37.5, 254.0], [37.6, 254.0], [37.7, 255.0], [37.8, 257.0], [37.9, 258.0], [38.0, 258.0], [38.1, 259.0], [38.2, 260.0], [38.3, 261.0], [38.4, 261.0], [38.5, 263.0], [38.6, 264.0], [38.7, 265.0], [38.8, 265.0], [38.9, 267.0], [39.0, 267.0], [39.1, 268.0], [39.2, 269.0], [39.3, 271.0], [39.4, 272.0], [39.5, 273.0], [39.6, 275.0], [39.7, 275.0], [39.8, 276.0], [39.9, 277.0], [40.0, 278.0], [40.1, 279.0], [40.2, 280.0], [40.3, 280.0], [40.4, 281.0], [40.5, 282.0], [40.6, 283.0], [40.7, 284.0], [40.8, 285.0], [40.9, 286.0], [41.0, 287.0], [41.1, 288.0], [41.2, 289.0], [41.3, 289.0], [41.4, 290.0], [41.5, 290.0], [41.6, 292.0], [41.7, 292.0], [41.8, 292.0], [41.9, 293.0], [42.0, 294.0], [42.1, 295.0], [42.2, 296.0], [42.3, 296.0], [42.4, 297.0], [42.5, 298.0], [42.6, 298.0], [42.7, 299.0], [42.8, 300.0], [42.9, 301.0], [43.0, 302.0], [43.1, 303.0], [43.2, 304.0], [43.3, 304.0], [43.4, 306.0], [43.5, 306.0], [43.6, 307.0], [43.7, 309.0], [43.8, 309.0], [43.9, 310.0], [44.0, 311.0], [44.1, 312.0], [44.2, 312.0], [44.3, 312.0], [44.4, 313.0], [44.5, 313.0], [44.6, 314.0], [44.7, 315.0], [44.8, 316.0], [44.9, 317.0], [45.0, 317.0], [45.1, 318.0], [45.2, 318.0], [45.3, 320.0], [45.4, 320.0], [45.5, 321.0], [45.6, 322.0], [45.7, 322.0], [45.8, 323.0], [45.9, 323.0], [46.0, 324.0], [46.1, 325.0], [46.2, 325.0], [46.3, 326.0], [46.4, 326.0], [46.5, 327.0], [46.6, 328.0], [46.7, 329.0], [46.8, 329.0], [46.9, 330.0], [47.0, 330.0], [47.1, 330.0], [47.2, 331.0], [47.3, 332.0], [47.4, 332.0], [47.5, 333.0], [47.6, 333.0], [47.7, 333.0], [47.8, 334.0], [47.9, 334.0], [48.0, 335.0], [48.1, 335.0], [48.2, 336.0], [48.3, 336.0], [48.4, 337.0], [48.5, 338.0], [48.6, 338.0], [48.7, 339.0], [48.8, 340.0], [48.9, 340.0], [49.0, 340.0], [49.1, 342.0], [49.2, 342.0], [49.3, 342.0], [49.4, 342.0], [49.5, 343.0], [49.6, 344.0], [49.7, 345.0], [49.8, 345.0], [49.9, 346.0], [50.0, 347.0], [50.1, 347.0], [50.2, 349.0], [50.3, 350.0], [50.4, 350.0], [50.5, 351.0], [50.6, 352.0], [50.7, 352.0], [50.8, 353.0], [50.9, 354.0], [51.0, 354.0], [51.1, 355.0], [51.2, 355.0], [51.3, 356.0], [51.4, 357.0], [51.5, 359.0], [51.6, 359.0], [51.7, 360.0], [51.8, 360.0], [51.9, 361.0], [52.0, 362.0], [52.1, 362.0], [52.2, 363.0], [52.3, 364.0], [52.4, 366.0], [52.5, 366.0], [52.6, 367.0], [52.7, 368.0], [52.8, 368.0], [52.9, 369.0], [53.0, 370.0], [53.1, 371.0], [53.2, 372.0], [53.3, 372.0], [53.4, 373.0], [53.5, 374.0], [53.6, 374.0], [53.7, 375.0], [53.8, 376.0], [53.9, 377.0], [54.0, 378.0], [54.1, 379.0], [54.2, 380.0], [54.3, 382.0], [54.4, 383.0], [54.5, 383.0], [54.6, 384.0], [54.7, 384.0], [54.8, 385.0], [54.9, 385.0], [55.0, 386.0], [55.1, 386.0], [55.2, 387.0], [55.3, 388.0], [55.4, 388.0], [55.5, 390.0], [55.6, 390.0], [55.7, 391.0], [55.8, 392.0], [55.9, 392.0], [56.0, 393.0], [56.1, 394.0], [56.2, 395.0], [56.3, 395.0], [56.4, 396.0], [56.5, 397.0], [56.6, 398.0], [56.7, 399.0], [56.8, 400.0], [56.9, 401.0], [57.0, 403.0], [57.1, 403.0], [57.2, 404.0], [57.3, 405.0], [57.4, 406.0], [57.5, 407.0], [57.6, 409.0], [57.7, 410.0], [57.8, 411.0], [57.9, 413.0], [58.0, 414.0], [58.1, 415.0], [58.2, 417.0], [58.3, 417.0], [58.4, 418.0], [58.5, 419.0], [58.6, 421.0], [58.7, 423.0], [58.8, 424.0], [58.9, 426.0], [59.0, 427.0], [59.1, 428.0], [59.2, 429.0], [59.3, 430.0], [59.4, 431.0], [59.5, 433.0], [59.6, 435.0], [59.7, 435.0], [59.8, 437.0], [59.9, 437.0], [60.0, 438.0], [60.1, 441.0], [60.2, 442.0], [60.3, 443.0], [60.4, 444.0], [60.5, 446.0], [60.6, 448.0], [60.7, 449.0], [60.8, 451.0], [60.9, 453.0], [61.0, 455.0], [61.1, 458.0], [61.2, 459.0], [61.3, 461.0], [61.4, 461.0], [61.5, 463.0], [61.6, 465.0], [61.7, 466.0], [61.8, 468.0], [61.9, 471.0], [62.0, 472.0], [62.1, 473.0], [62.2, 475.0], [62.3, 475.0], [62.4, 476.0], [62.5, 478.0], [62.6, 479.0], [62.7, 480.0], [62.8, 481.0], [62.9, 482.0], [63.0, 484.0], [63.1, 486.0], [63.2, 488.0], [63.3, 490.0], [63.4, 491.0], [63.5, 492.0], [63.6, 494.0], [63.7, 496.0], [63.8, 499.0], [63.9, 502.0], [64.0, 504.0], [64.1, 505.0], [64.2, 507.0], [64.3, 509.0], [64.4, 512.0], [64.5, 513.0], [64.6, 515.0], [64.7, 516.0], [64.8, 518.0], [64.9, 519.0], [65.0, 522.0], [65.1, 523.0], [65.2, 524.0], [65.3, 525.0], [65.4, 528.0], [65.5, 529.0], [65.6, 532.0], [65.7, 534.0], [65.8, 535.0], [65.9, 537.0], [66.0, 539.0], [66.1, 541.0], [66.2, 542.0], [66.3, 544.0], [66.4, 546.0], [66.5, 547.0], [66.6, 549.0], [66.7, 550.0], [66.8, 553.0], [66.9, 554.0], [67.0, 555.0], [67.1, 556.0], [67.2, 558.0], [67.3, 559.0], [67.4, 561.0], [67.5, 563.0], [67.6, 563.0], [67.7, 564.0], [67.8, 566.0], [67.9, 567.0], [68.0, 568.0], [68.1, 569.0], [68.2, 570.0], [68.3, 572.0], [68.4, 574.0], [68.5, 574.0], [68.6, 575.0], [68.7, 576.0], [68.8, 578.0], [68.9, 579.0], [69.0, 580.0], [69.1, 581.0], [69.2, 582.0], [69.3, 583.0], [69.4, 584.0], [69.5, 585.0], [69.6, 586.0], [69.7, 588.0], [69.8, 589.0], [69.9, 589.0], [70.0, 591.0], [70.1, 592.0], [70.2, 593.0], [70.3, 595.0], [70.4, 596.0], [70.5, 597.0], [70.6, 598.0], [70.7, 600.0], [70.8, 601.0], [70.9, 603.0], [71.0, 603.0], [71.1, 604.0], [71.2, 604.0], [71.3, 605.0], [71.4, 606.0], [71.5, 606.0], [71.6, 607.0], [71.7, 609.0], [71.8, 611.0], [71.9, 611.0], [72.0, 612.0], [72.1, 612.0], [72.2, 614.0], [72.3, 614.0], [72.4, 615.0], [72.5, 616.0], [72.6, 617.0], [72.7, 618.0], [72.8, 619.0], [72.9, 620.0], [73.0, 621.0], [73.1, 621.0], [73.2, 622.0], [73.3, 623.0], [73.4, 624.0], [73.5, 625.0], [73.6, 626.0], [73.7, 628.0], [73.8, 628.0], [73.9, 629.0], [74.0, 630.0], [74.1, 631.0], [74.2, 632.0], [74.3, 633.0], [74.4, 634.0], [74.5, 635.0], [74.6, 635.0], [74.7, 635.0], [74.8, 636.0], [74.9, 637.0], [75.0, 637.0], [75.1, 638.0], [75.2, 639.0], [75.3, 639.0], [75.4, 640.0], [75.5, 642.0], [75.6, 644.0], [75.7, 646.0], [75.8, 647.0], [75.9, 648.0], [76.0, 649.0], [76.1, 650.0], [76.2, 651.0], [76.3, 652.0], [76.4, 653.0], [76.5, 654.0], [76.6, 655.0], [76.7, 656.0], [76.8, 657.0], [76.9, 658.0], [77.0, 660.0], [77.1, 661.0], [77.2, 662.0], [77.3, 664.0], [77.4, 665.0], [77.5, 666.0], [77.6, 667.0], [77.7, 669.0], [77.8, 670.0], [77.9, 673.0], [78.0, 674.0], [78.1, 675.0], [78.2, 676.0], [78.3, 678.0], [78.4, 679.0], [78.5, 680.0], [78.6, 685.0], [78.7, 686.0], [78.8, 688.0], [78.9, 690.0], [79.0, 692.0], [79.1, 693.0], [79.2, 697.0], [79.3, 698.0], [79.4, 701.0], [79.5, 705.0], [79.6, 708.0], [79.7, 710.0], [79.8, 710.0], [79.9, 712.0], [80.0, 713.0], [80.1, 718.0], [80.2, 720.0], [80.3, 725.0], [80.4, 727.0], [80.5, 730.0], [80.6, 732.0], [80.7, 737.0], [80.8, 740.0], [80.9, 743.0], [81.0, 746.0], [81.1, 750.0], [81.2, 751.0], [81.3, 756.0], [81.4, 759.0], [81.5, 762.0], [81.6, 766.0], [81.7, 778.0], [81.8, 779.0], [81.9, 782.0], [82.0, 785.0], [82.1, 793.0], [82.2, 796.0], [82.3, 802.0], [82.4, 806.0], [82.5, 813.0], [82.6, 818.0], [82.7, 821.0], [82.8, 827.0], [82.9, 832.0], [83.0, 838.0], [83.1, 842.0], [83.2, 846.0], [83.3, 849.0], [83.4, 856.0], [83.5, 861.0], [83.6, 865.0], [83.7, 869.0], [83.8, 871.0], [83.9, 872.0], [84.0, 877.0], [84.1, 880.0], [84.2, 882.0], [84.3, 886.0], [84.4, 891.0], [84.5, 893.0], [84.6, 896.0], [84.7, 898.0], [84.8, 899.0], [84.9, 900.0], [85.0, 902.0], [85.1, 903.0], [85.2, 905.0], [85.3, 906.0], [85.4, 907.0], [85.5, 910.0], [85.6, 912.0], [85.7, 915.0], [85.8, 917.0], [85.9, 919.0], [86.0, 920.0], [86.1, 921.0], [86.2, 924.0], [86.3, 925.0], [86.4, 928.0], [86.5, 930.0], [86.6, 931.0], [86.7, 934.0], [86.8, 936.0], [86.9, 938.0], [87.0, 940.0], [87.1, 940.0], [87.2, 942.0], [87.3, 942.0], [87.4, 947.0], [87.5, 950.0], [87.6, 955.0], [87.7, 958.0], [87.8, 960.0], [87.9, 963.0], [88.0, 967.0], [88.1, 971.0], [88.2, 974.0], [88.3, 976.0], [88.4, 984.0], [88.5, 993.0], [88.6, 994.0], [88.7, 1000.0], [88.8, 1006.0], [88.9, 1011.0], [89.0, 1021.0], [89.1, 1026.0], [89.2, 1033.0], [89.3, 1037.0], [89.4, 1048.0], [89.5, 1067.0], [89.6, 1075.0], [89.7, 1082.0], [89.8, 1091.0], [89.9, 1095.0], [90.0, 1105.0], [90.1, 1117.0], [90.2, 1127.0], [90.3, 1137.0], [90.4, 1141.0], [90.5, 1145.0], [90.6, 1149.0], [90.7, 1154.0], [90.8, 1157.0], [90.9, 1159.0], [91.0, 1161.0], [91.1, 1166.0], [91.2, 1170.0], [91.3, 1174.0], [91.4, 1176.0], [91.5, 1182.0], [91.6, 1188.0], [91.7, 1191.0], [91.8, 1193.0], [91.9, 1200.0], [92.0, 1204.0], [92.1, 1207.0], [92.2, 1213.0], [92.3, 1223.0], [92.4, 1226.0], [92.5, 1230.0], [92.6, 1234.0], [92.7, 1240.0], [92.8, 1245.0], [92.9, 1255.0], [93.0, 1259.0], [93.1, 1264.0], [93.2, 1272.0], [93.3, 1286.0], [93.4, 1300.0], [93.5, 1316.0], [93.6, 1331.0], [93.7, 1360.0], [93.8, 1394.0], [93.9, 1402.0], [94.0, 1423.0], [94.1, 1441.0], [94.2, 1455.0], [94.3, 1474.0], [94.4, 1506.0], [94.5, 1527.0], [94.6, 1558.0], [94.7, 1578.0], [94.8, 1603.0], [94.9, 1623.0], [95.0, 1647.0], [95.1, 1671.0], [95.2, 1707.0], [95.3, 1782.0], [95.4, 1831.0], [95.5, 1879.0], [95.6, 1936.0], [95.7, 1983.0], [95.8, 2035.0], [95.9, 2102.0], [96.0, 2146.0], [96.1, 2238.0], [96.2, 2414.0], [96.3, 2431.0], [96.4, 2484.0], [96.5, 2561.0], [96.6, 2677.0], [96.7, 2747.0], [96.8, 2851.0], [96.9, 2893.0], [97.0, 2967.0], [97.1, 3032.0], [97.2, 3096.0], [97.3, 3116.0], [97.4, 3302.0], [97.5, 3331.0], [97.6, 3420.0], [97.7, 3532.0], [97.8, 3741.0], [97.9, 3865.0], [98.0, 3948.0], [98.1, 4045.0], [98.2, 4198.0], [98.3, 4757.0], [98.4, 5057.0], [98.5, 5363.0], [98.6, 5756.0], [98.7, 6270.0], [98.8, 7555.0], [98.9, 7777.0], [99.0, 7982.0], [99.1, 8146.0], [99.2, 8482.0], [99.3, 8996.0], [99.4, 9476.0], [99.5, 10209.0], [99.6, 10297.0], [99.7, 10498.0], [99.8, 10619.0], [99.9, 10757.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 864.0, "series": [{"data": [[0.0, 864.0], [600.0, 451.0], [700.0, 152.0], [800.0, 135.0], [900.0, 199.0], [1000.0, 64.0], [1100.0, 102.0], [1200.0, 78.0], [1300.0, 25.0], [1400.0, 26.0], [1500.0, 22.0], [1600.0, 20.0], [1700.0, 8.0], [1800.0, 13.0], [1900.0, 6.0], [2000.0, 10.0], [2100.0, 8.0], [2200.0, 4.0], [2300.0, 3.0], [2400.0, 13.0], [2500.0, 6.0], [2600.0, 4.0], [2700.0, 7.0], [2800.0, 8.0], [2900.0, 7.0], [3000.0, 9.0], [3100.0, 5.0], [3200.0, 4.0], [3300.0, 9.0], [3400.0, 5.0], [3500.0, 4.0], [3700.0, 4.0], [3800.0, 6.0], [3900.0, 5.0], [4000.0, 7.0], [4100.0, 2.0], [4300.0, 2.0], [4200.0, 1.0], [4400.0, 1.0], [4700.0, 1.0], [5100.0, 3.0], [5000.0, 3.0], [4900.0, 3.0], [5300.0, 1.0], [5200.0, 1.0], [5600.0, 1.0], [5400.0, 1.0], [5700.0, 4.0], [5800.0, 1.0], [6000.0, 1.0], [5900.0, 1.0], [6200.0, 1.0], [6400.0, 2.0], [7400.0, 1.0], [7500.0, 2.0], [7900.0, 1.0], [7800.0, 5.0], [7700.0, 5.0], [8100.0, 5.0], [8000.0, 2.0], [8500.0, 1.0], [8400.0, 2.0], [8700.0, 2.0], [8200.0, 1.0], [8900.0, 2.0], [9000.0, 1.0], [9400.0, 3.0], [9300.0, 1.0], [9600.0, 1.0], [10100.0, 2.0], [10200.0, 6.0], [10000.0, 2.0], [10700.0, 4.0], [10400.0, 4.0], [10600.0, 4.0], [10300.0, 1.0], [10500.0, 3.0], [15500.0, 1.0], [18200.0, 1.0], [20500.0, 1.0], [20700.0, 1.0], [100.0, 798.0], [200.0, 556.0], [300.0, 728.0], [400.0, 366.0], [500.0, 354.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 20700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 292.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3314.0, "series": [{"data": [[0.0, 3314.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1584.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 292.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.893617021276595, "minX": 1.60263312E12, "maxY": 10.0, "series": [{"data": [[1.60263312E12, 9.994169096209903], [1.6026333E12, 10.0], [1.60263348E12, 9.893617021276595], [1.60263318E12, 10.0], [1.60263336E12, 10.0], [1.60263324E12, 10.0], [1.60263342E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263348E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 346.0, "minX": 1.0, "maxY": 7740.0, "series": [{"data": [[8.0, 407.5], [4.0, 597.0], [2.0, 800.0], [1.0, 7740.0], [9.0, 364.0], [10.0, 628.5081081081058], [5.0, 614.0], [6.0, 539.0], [3.0, 740.0], [7.0, 346.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331403, 629.7161849711003]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2576.2166666666667, "minX": 1.60263312E12, "maxY": 5525078.683333334, "series": [{"data": [[1.60263312E12, 1361688.8], [1.6026333E12, 5011035.566666666], [1.60263348E12, 1504110.0833333333], [1.60263318E12, 2223866.5], [1.60263336E12, 4416047.116666666], [1.60263324E12, 5525078.683333334], [1.60263342E12, 3600530.1666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263312E12, 2576.2166666666667], [1.6026333E12, 9833.283333333333], [1.60263348E12, 3321.4166666666665], [1.60263318E12, 4778.316666666667], [1.60263336E12, 6521.6], [1.60263324E12, 6569.266666666666], [1.60263342E12, 6341.533333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263348E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 342.39716312056777, "minX": 1.60263312E12, "maxY": 954.0175718849837, "series": [{"data": [[1.60263312E12, 369.588921282799], [1.6026333E12, 502.5882352941188], [1.60263348E12, 342.39716312056777], [1.60263318E12, 954.0175718849837], [1.60263336E12, 696.7209302325584], [1.60263324E12, 651.5280373831773], [1.60263342E12, 745.6270136307317]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263348E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 341.2387706855793, "minX": 1.60263312E12, "maxY": 952.5223642172522, "series": [{"data": [[1.60263312E12, 367.868804664723], [1.6026333E12, 501.28078431372575], [1.60263348E12, 341.2387706855793], [1.60263318E12, 952.5223642172522], [1.60263336E12, 695.1325581395346], [1.60263324E12, 648.8539719626175], [1.60263342E12, 744.0557620817849]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263348E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.004728132387706855, "minX": 1.60263312E12, "maxY": 0.24781341107871727, "series": [{"data": [[1.60263312E12, 0.24781341107871727], [1.6026333E12, 0.011764705882352934], [1.60263348E12, 0.004728132387706855], [1.60263318E12, 0.023961661341853038], [1.60263336E12, 0.011627906976744184], [1.60263324E12, 0.012850467289719633], [1.60263342E12, 0.01858736059479554]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263348E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 19.0, "minX": 1.60263312E12, "maxY": 20702.0, "series": [{"data": [[1.60263312E12, 1441.0], [1.6026333E12, 20539.0], [1.60263348E12, 7740.0], [1.60263318E12, 18237.0], [1.60263336E12, 15515.0], [1.60263324E12, 10077.0], [1.60263342E12, 20702.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263312E12, 33.09599991798401], [1.6026333E12, 31.0], [1.60263348E12, 32.81599989891052], [1.60263318E12, 29.64299985051155], [1.60263336E12, 33.0], [1.60263324E12, 33.0], [1.60263342E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263312E12, 33.4056000328064], [1.6026333E12, 31.632400121688843], [1.60263348E12, 33.39520008087158], [1.60263318E12, 30.41460011959076], [1.60263336E12, 33.52390008211136], [1.60263324E12, 33.48430008172989], [1.60263342E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263312E12, 33.26799995899201], [1.6026333E12, 31.121999847888944], [1.60263348E12, 33.05599989891052], [1.60263318E12, 29.956499925255777], [1.60263336E12, 33.1794998973608], [1.60263324E12, 33.14149989783764], [1.60263342E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263312E12, 31.0], [1.6026333E12, 21.0], [1.60263348E12, 26.0], [1.60263318E12, 23.0], [1.60263336E12, 27.0], [1.60263324E12, 30.0], [1.60263342E12, 19.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263312E12, 320.0], [1.6026333E12, 311.0], [1.60263348E12, 248.0], [1.60263318E12, 280.0], [1.60263336E12, 368.5], [1.60263324E12, 521.5], [1.60263342E12, 424.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263348E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 108.0, "minX": 1.0, "maxY": 2370.0, "series": [{"data": [[32.0, 195.5], [33.0, 220.0], [2.0, 2176.0], [34.0, 250.5], [36.0, 211.5], [37.0, 168.0], [39.0, 174.5], [38.0, 115.5], [41.0, 113.5], [40.0, 203.5], [44.0, 128.0], [3.0, 1042.5], [48.0, 116.0], [49.0, 123.5], [52.0, 108.0], [4.0, 604.0], [5.0, 701.5], [6.0, 538.0], [7.0, 343.0], [8.0, 603.5], [9.0, 679.0], [10.0, 549.0], [11.0, 647.0], [12.0, 666.5], [13.0, 604.0], [14.0, 607.5], [15.0, 585.0], [1.0, 2370.0], [16.0, 389.0], [17.0, 466.0], [18.0, 396.5], [19.0, 378.5], [20.0, 341.0], [21.0, 446.0], [22.0, 354.5], [23.0, 261.5], [24.0, 338.5], [25.0, 352.0], [26.0, 319.5], [27.0, 239.0], [28.0, 266.0], [29.0, 264.0], [30.0, 294.0], [31.0, 307.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 52.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 107.0, "minX": 1.0, "maxY": 2368.5, "series": [{"data": [[32.0, 195.0], [33.0, 220.0], [2.0, 2175.5], [34.0, 250.5], [36.0, 210.5], [37.0, 168.0], [39.0, 173.5], [38.0, 114.5], [41.0, 113.0], [40.0, 203.5], [44.0, 126.5], [3.0, 1038.5], [48.0, 115.5], [49.0, 122.0], [52.0, 107.0], [4.0, 601.5], [5.0, 699.5], [6.0, 537.5], [7.0, 341.0], [8.0, 600.5], [9.0, 672.5], [10.0, 547.5], [11.0, 642.5], [12.0, 662.0], [13.0, 598.5], [14.0, 604.5], [15.0, 582.0], [1.0, 2368.5], [16.0, 385.5], [17.0, 466.0], [18.0, 393.5], [19.0, 377.0], [20.0, 339.5], [21.0, 445.0], [22.0, 352.5], [23.0, 261.5], [24.0, 336.5], [25.0, 352.0], [26.0, 317.5], [27.0, 238.0], [28.0, 262.5], [29.0, 263.5], [30.0, 292.0], [31.0, 305.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 52.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.883333333333334, "minX": 1.60263312E12, "maxY": 21.25, "series": [{"data": [[1.60263312E12, 5.883333333333334], [1.6026333E12, 21.25], [1.60263348E12, 6.883333333333334], [1.60263318E12, 10.433333333333334], [1.60263336E12, 14.333333333333334], [1.60263324E12, 14.266666666666667], [1.60263342E12, 13.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263348E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.716666666666667, "minX": 1.60263312E12, "maxY": 21.25, "series": [{"data": [[1.60263312E12, 5.716666666666667], [1.6026333E12, 21.25], [1.60263348E12, 7.05], [1.60263318E12, 10.433333333333334], [1.60263336E12, 14.333333333333334], [1.60263324E12, 14.266666666666667], [1.60263342E12, 13.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263348E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.716666666666667, "minX": 1.60263312E12, "maxY": 21.25, "series": [{"data": [[1.60263312E12, 5.716666666666667], [1.6026333E12, 21.25], [1.60263348E12, 7.05], [1.60263318E12, 10.433333333333334], [1.60263336E12, 14.333333333333334], [1.60263324E12, 14.266666666666667], [1.60263342E12, 13.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263348E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.716666666666667, "minX": 1.60263312E12, "maxY": 21.25, "series": [{"data": [[1.60263312E12, 5.716666666666667], [1.6026333E12, 21.25], [1.60263348E12, 7.05], [1.60263318E12, 10.433333333333334], [1.60263336E12, 14.333333333333334], [1.60263324E12, 14.266666666666667], [1.60263342E12, 13.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263348E12, "title": "Total Transactions Per Second"}},
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

