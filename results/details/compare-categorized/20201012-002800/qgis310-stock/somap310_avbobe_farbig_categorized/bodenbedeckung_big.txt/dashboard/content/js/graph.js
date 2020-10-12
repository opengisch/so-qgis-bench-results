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
        data: {"result": {"minY": 21.0, "minX": 0.0, "maxY": 20207.0, "series": [{"data": [[0.0, 21.0], [0.1, 25.0], [0.2, 26.0], [0.3, 28.0], [0.4, 28.0], [0.5, 29.0], [0.6, 30.0], [0.7, 31.0], [0.8, 31.0], [0.9, 32.0], [1.0, 32.0], [1.1, 33.0], [1.2, 34.0], [1.3, 34.0], [1.4, 34.0], [1.5, 35.0], [1.6, 35.0], [1.7, 35.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 38.0], [2.6, 38.0], [2.7, 38.0], [2.8, 38.0], [2.9, 39.0], [3.0, 39.0], [3.1, 39.0], [3.2, 40.0], [3.3, 40.0], [3.4, 40.0], [3.5, 41.0], [3.6, 41.0], [3.7, 42.0], [3.8, 42.0], [3.9, 42.0], [4.0, 43.0], [4.1, 43.0], [4.2, 43.0], [4.3, 43.0], [4.4, 43.0], [4.5, 44.0], [4.6, 44.0], [4.7, 44.0], [4.8, 45.0], [4.9, 45.0], [5.0, 46.0], [5.1, 46.0], [5.2, 46.0], [5.3, 47.0], [5.4, 48.0], [5.5, 48.0], [5.6, 48.0], [5.7, 49.0], [5.8, 49.0], [5.9, 50.0], [6.0, 50.0], [6.1, 50.0], [6.2, 51.0], [6.3, 51.0], [6.4, 51.0], [6.5, 52.0], [6.6, 52.0], [6.7, 52.0], [6.8, 53.0], [6.9, 53.0], [7.0, 53.0], [7.1, 54.0], [7.2, 54.0], [7.3, 54.0], [7.4, 55.0], [7.5, 55.0], [7.6, 56.0], [7.7, 56.0], [7.8, 57.0], [7.9, 57.0], [8.0, 58.0], [8.1, 59.0], [8.2, 59.0], [8.3, 60.0], [8.4, 60.0], [8.5, 61.0], [8.6, 61.0], [8.7, 61.0], [8.8, 62.0], [8.9, 63.0], [9.0, 64.0], [9.1, 64.0], [9.2, 65.0], [9.3, 65.0], [9.4, 66.0], [9.5, 66.0], [9.6, 66.0], [9.7, 67.0], [9.8, 68.0], [9.9, 68.0], [10.0, 68.0], [10.1, 69.0], [10.2, 70.0], [10.3, 70.0], [10.4, 71.0], [10.5, 71.0], [10.6, 72.0], [10.7, 72.0], [10.8, 73.0], [10.9, 73.0], [11.0, 74.0], [11.1, 75.0], [11.2, 75.0], [11.3, 75.0], [11.4, 75.0], [11.5, 76.0], [11.6, 76.0], [11.7, 77.0], [11.8, 78.0], [11.9, 78.0], [12.0, 78.0], [12.1, 79.0], [12.2, 79.0], [12.3, 80.0], [12.4, 80.0], [12.5, 81.0], [12.6, 81.0], [12.7, 81.0], [12.8, 83.0], [12.9, 83.0], [13.0, 84.0], [13.1, 84.0], [13.2, 85.0], [13.3, 86.0], [13.4, 86.0], [13.5, 86.0], [13.6, 86.0], [13.7, 87.0], [13.8, 87.0], [13.9, 87.0], [14.0, 88.0], [14.1, 88.0], [14.2, 89.0], [14.3, 89.0], [14.4, 90.0], [14.5, 90.0], [14.6, 91.0], [14.7, 91.0], [14.8, 92.0], [14.9, 93.0], [15.0, 93.0], [15.1, 94.0], [15.2, 95.0], [15.3, 95.0], [15.4, 95.0], [15.5, 96.0], [15.6, 96.0], [15.7, 97.0], [15.8, 97.0], [15.9, 97.0], [16.0, 98.0], [16.1, 98.0], [16.2, 98.0], [16.3, 98.0], [16.4, 99.0], [16.5, 99.0], [16.6, 100.0], [16.7, 101.0], [16.8, 101.0], [16.9, 101.0], [17.0, 102.0], [17.1, 102.0], [17.2, 103.0], [17.3, 103.0], [17.4, 104.0], [17.5, 104.0], [17.6, 105.0], [17.7, 105.0], [17.8, 106.0], [17.9, 107.0], [18.0, 107.0], [18.1, 108.0], [18.2, 108.0], [18.3, 109.0], [18.4, 109.0], [18.5, 110.0], [18.6, 110.0], [18.7, 111.0], [18.8, 112.0], [18.9, 112.0], [19.0, 113.0], [19.1, 114.0], [19.2, 114.0], [19.3, 115.0], [19.4, 115.0], [19.5, 116.0], [19.6, 116.0], [19.7, 117.0], [19.8, 117.0], [19.9, 118.0], [20.0, 119.0], [20.1, 119.0], [20.2, 120.0], [20.3, 120.0], [20.4, 121.0], [20.5, 121.0], [20.6, 122.0], [20.7, 122.0], [20.8, 123.0], [20.9, 123.0], [21.0, 124.0], [21.1, 125.0], [21.2, 126.0], [21.3, 126.0], [21.4, 126.0], [21.5, 127.0], [21.6, 128.0], [21.7, 128.0], [21.8, 128.0], [21.9, 129.0], [22.0, 130.0], [22.1, 130.0], [22.2, 131.0], [22.3, 132.0], [22.4, 133.0], [22.5, 133.0], [22.6, 134.0], [22.7, 135.0], [22.8, 136.0], [22.9, 136.0], [23.0, 137.0], [23.1, 138.0], [23.2, 139.0], [23.3, 140.0], [23.4, 140.0], [23.5, 141.0], [23.6, 142.0], [23.7, 143.0], [23.8, 143.0], [23.9, 143.0], [24.0, 144.0], [24.1, 144.0], [24.2, 145.0], [24.3, 145.0], [24.4, 146.0], [24.5, 148.0], [24.6, 148.0], [24.7, 148.0], [24.8, 149.0], [24.9, 149.0], [25.0, 150.0], [25.1, 151.0], [25.2, 152.0], [25.3, 153.0], [25.4, 153.0], [25.5, 155.0], [25.6, 155.0], [25.7, 156.0], [25.8, 157.0], [25.9, 157.0], [26.0, 158.0], [26.1, 160.0], [26.2, 161.0], [26.3, 161.0], [26.4, 162.0], [26.5, 162.0], [26.6, 163.0], [26.7, 163.0], [26.8, 163.0], [26.9, 165.0], [27.0, 165.0], [27.1, 166.0], [27.2, 166.0], [27.3, 167.0], [27.4, 168.0], [27.5, 168.0], [27.6, 169.0], [27.7, 170.0], [27.8, 171.0], [27.9, 172.0], [28.0, 173.0], [28.1, 173.0], [28.2, 175.0], [28.3, 175.0], [28.4, 176.0], [28.5, 176.0], [28.6, 177.0], [28.7, 178.0], [28.8, 179.0], [28.9, 180.0], [29.0, 181.0], [29.1, 181.0], [29.2, 183.0], [29.3, 183.0], [29.4, 183.0], [29.5, 184.0], [29.6, 186.0], [29.7, 186.0], [29.8, 187.0], [29.9, 188.0], [30.0, 189.0], [30.1, 189.0], [30.2, 190.0], [30.3, 191.0], [30.4, 193.0], [30.5, 193.0], [30.6, 194.0], [30.7, 195.0], [30.8, 195.0], [30.9, 196.0], [31.0, 197.0], [31.1, 198.0], [31.2, 199.0], [31.3, 200.0], [31.4, 200.0], [31.5, 201.0], [31.6, 202.0], [31.7, 203.0], [31.8, 204.0], [31.9, 205.0], [32.0, 205.0], [32.1, 206.0], [32.2, 207.0], [32.3, 208.0], [32.4, 209.0], [32.5, 210.0], [32.6, 210.0], [32.7, 211.0], [32.8, 212.0], [32.9, 213.0], [33.0, 214.0], [33.1, 214.0], [33.2, 216.0], [33.3, 216.0], [33.4, 217.0], [33.5, 218.0], [33.6, 219.0], [33.7, 220.0], [33.8, 222.0], [33.9, 222.0], [34.0, 224.0], [34.1, 224.0], [34.2, 225.0], [34.3, 226.0], [34.4, 228.0], [34.5, 230.0], [34.6, 230.0], [34.7, 231.0], [34.8, 232.0], [34.9, 233.0], [35.0, 234.0], [35.1, 235.0], [35.2, 236.0], [35.3, 237.0], [35.4, 238.0], [35.5, 239.0], [35.6, 239.0], [35.7, 240.0], [35.8, 241.0], [35.9, 242.0], [36.0, 243.0], [36.1, 244.0], [36.2, 245.0], [36.3, 246.0], [36.4, 246.0], [36.5, 247.0], [36.6, 248.0], [36.7, 250.0], [36.8, 252.0], [36.9, 253.0], [37.0, 254.0], [37.1, 255.0], [37.2, 256.0], [37.3, 257.0], [37.4, 259.0], [37.5, 260.0], [37.6, 261.0], [37.7, 262.0], [37.8, 263.0], [37.9, 264.0], [38.0, 264.0], [38.1, 266.0], [38.2, 266.0], [38.3, 267.0], [38.4, 269.0], [38.5, 270.0], [38.6, 271.0], [38.7, 271.0], [38.8, 274.0], [38.9, 274.0], [39.0, 275.0], [39.1, 275.0], [39.2, 276.0], [39.3, 277.0], [39.4, 278.0], [39.5, 279.0], [39.6, 279.0], [39.7, 280.0], [39.8, 281.0], [39.9, 282.0], [40.0, 284.0], [40.1, 284.0], [40.2, 285.0], [40.3, 286.0], [40.4, 287.0], [40.5, 288.0], [40.6, 289.0], [40.7, 290.0], [40.8, 291.0], [40.9, 292.0], [41.0, 292.0], [41.1, 293.0], [41.2, 294.0], [41.3, 295.0], [41.4, 296.0], [41.5, 297.0], [41.6, 298.0], [41.7, 299.0], [41.8, 299.0], [41.9, 300.0], [42.0, 300.0], [42.1, 301.0], [42.2, 302.0], [42.3, 303.0], [42.4, 304.0], [42.5, 305.0], [42.6, 306.0], [42.7, 306.0], [42.8, 307.0], [42.9, 308.0], [43.0, 309.0], [43.1, 309.0], [43.2, 310.0], [43.3, 310.0], [43.4, 311.0], [43.5, 312.0], [43.6, 313.0], [43.7, 313.0], [43.8, 313.0], [43.9, 314.0], [44.0, 315.0], [44.1, 315.0], [44.2, 316.0], [44.3, 317.0], [44.4, 317.0], [44.5, 318.0], [44.6, 318.0], [44.7, 319.0], [44.8, 320.0], [44.9, 320.0], [45.0, 321.0], [45.1, 321.0], [45.2, 322.0], [45.3, 322.0], [45.4, 322.0], [45.5, 323.0], [45.6, 324.0], [45.7, 325.0], [45.8, 325.0], [45.9, 326.0], [46.0, 327.0], [46.1, 328.0], [46.2, 328.0], [46.3, 329.0], [46.4, 329.0], [46.5, 330.0], [46.6, 331.0], [46.7, 331.0], [46.8, 332.0], [46.9, 332.0], [47.0, 333.0], [47.1, 334.0], [47.2, 334.0], [47.3, 335.0], [47.4, 335.0], [47.5, 336.0], [47.6, 336.0], [47.7, 337.0], [47.8, 337.0], [47.9, 338.0], [48.0, 339.0], [48.1, 339.0], [48.2, 340.0], [48.3, 340.0], [48.4, 340.0], [48.5, 341.0], [48.6, 341.0], [48.7, 342.0], [48.8, 343.0], [48.9, 343.0], [49.0, 344.0], [49.1, 344.0], [49.2, 345.0], [49.3, 345.0], [49.4, 345.0], [49.5, 346.0], [49.6, 346.0], [49.7, 347.0], [49.8, 348.0], [49.9, 348.0], [50.0, 349.0], [50.1, 349.0], [50.2, 350.0], [50.3, 351.0], [50.4, 351.0], [50.5, 352.0], [50.6, 352.0], [50.7, 353.0], [50.8, 353.0], [50.9, 354.0], [51.0, 355.0], [51.1, 355.0], [51.2, 356.0], [51.3, 356.0], [51.4, 357.0], [51.5, 358.0], [51.6, 359.0], [51.7, 359.0], [51.8, 360.0], [51.9, 360.0], [52.0, 361.0], [52.1, 361.0], [52.2, 361.0], [52.3, 363.0], [52.4, 363.0], [52.5, 364.0], [52.6, 365.0], [52.7, 366.0], [52.8, 367.0], [52.9, 368.0], [53.0, 368.0], [53.1, 369.0], [53.2, 370.0], [53.3, 371.0], [53.4, 372.0], [53.5, 372.0], [53.6, 373.0], [53.7, 374.0], [53.8, 374.0], [53.9, 375.0], [54.0, 375.0], [54.1, 376.0], [54.2, 376.0], [54.3, 377.0], [54.4, 378.0], [54.5, 379.0], [54.6, 379.0], [54.7, 381.0], [54.8, 381.0], [54.9, 382.0], [55.0, 382.0], [55.1, 383.0], [55.2, 384.0], [55.3, 385.0], [55.4, 385.0], [55.5, 386.0], [55.6, 387.0], [55.7, 388.0], [55.8, 388.0], [55.9, 389.0], [56.0, 390.0], [56.1, 391.0], [56.2, 391.0], [56.3, 392.0], [56.4, 393.0], [56.5, 393.0], [56.6, 394.0], [56.7, 395.0], [56.8, 397.0], [56.9, 398.0], [57.0, 399.0], [57.1, 400.0], [57.2, 400.0], [57.3, 400.0], [57.4, 401.0], [57.5, 402.0], [57.6, 402.0], [57.7, 404.0], [57.8, 405.0], [57.9, 405.0], [58.0, 405.0], [58.1, 407.0], [58.2, 408.0], [58.3, 409.0], [58.4, 410.0], [58.5, 411.0], [58.6, 412.0], [58.7, 412.0], [58.8, 413.0], [58.9, 414.0], [59.0, 417.0], [59.1, 419.0], [59.2, 420.0], [59.3, 421.0], [59.4, 422.0], [59.5, 423.0], [59.6, 423.0], [59.7, 424.0], [59.8, 425.0], [59.9, 427.0], [60.0, 428.0], [60.1, 429.0], [60.2, 430.0], [60.3, 431.0], [60.4, 434.0], [60.5, 434.0], [60.6, 436.0], [60.7, 438.0], [60.8, 440.0], [60.9, 442.0], [61.0, 442.0], [61.1, 445.0], [61.2, 447.0], [61.3, 449.0], [61.4, 451.0], [61.5, 451.0], [61.6, 452.0], [61.7, 454.0], [61.8, 455.0], [61.9, 456.0], [62.0, 457.0], [62.1, 458.0], [62.2, 460.0], [62.3, 461.0], [62.4, 462.0], [62.5, 463.0], [62.6, 464.0], [62.7, 466.0], [62.8, 468.0], [62.9, 469.0], [63.0, 472.0], [63.1, 473.0], [63.2, 474.0], [63.3, 476.0], [63.4, 477.0], [63.5, 479.0], [63.6, 481.0], [63.7, 483.0], [63.8, 487.0], [63.9, 488.0], [64.0, 489.0], [64.1, 492.0], [64.2, 493.0], [64.3, 495.0], [64.4, 496.0], [64.5, 497.0], [64.6, 497.0], [64.7, 498.0], [64.8, 499.0], [64.9, 502.0], [65.0, 504.0], [65.1, 506.0], [65.2, 510.0], [65.3, 512.0], [65.4, 516.0], [65.5, 517.0], [65.6, 519.0], [65.7, 522.0], [65.8, 524.0], [65.9, 526.0], [66.0, 529.0], [66.1, 531.0], [66.2, 535.0], [66.3, 538.0], [66.4, 539.0], [66.5, 542.0], [66.6, 546.0], [66.7, 547.0], [66.8, 549.0], [66.9, 552.0], [67.0, 553.0], [67.1, 554.0], [67.2, 554.0], [67.3, 555.0], [67.4, 558.0], [67.5, 559.0], [67.6, 560.0], [67.7, 562.0], [67.8, 563.0], [67.9, 564.0], [68.0, 565.0], [68.1, 566.0], [68.2, 568.0], [68.3, 570.0], [68.4, 571.0], [68.5, 572.0], [68.6, 572.0], [68.7, 573.0], [68.8, 575.0], [68.9, 576.0], [69.0, 577.0], [69.1, 577.0], [69.2, 578.0], [69.3, 580.0], [69.4, 580.0], [69.5, 581.0], [69.6, 582.0], [69.7, 583.0], [69.8, 584.0], [69.9, 585.0], [70.0, 586.0], [70.1, 587.0], [70.2, 588.0], [70.3, 589.0], [70.4, 589.0], [70.5, 591.0], [70.6, 592.0], [70.7, 593.0], [70.8, 593.0], [70.9, 594.0], [71.0, 594.0], [71.1, 595.0], [71.2, 596.0], [71.3, 597.0], [71.4, 598.0], [71.5, 598.0], [71.6, 600.0], [71.7, 600.0], [71.8, 601.0], [71.9, 602.0], [72.0, 603.0], [72.1, 604.0], [72.2, 606.0], [72.3, 607.0], [72.4, 607.0], [72.5, 608.0], [72.6, 609.0], [72.7, 610.0], [72.8, 610.0], [72.9, 611.0], [73.0, 611.0], [73.1, 612.0], [73.2, 613.0], [73.3, 615.0], [73.4, 615.0], [73.5, 617.0], [73.6, 618.0], [73.7, 620.0], [73.8, 620.0], [73.9, 621.0], [74.0, 622.0], [74.1, 622.0], [74.2, 623.0], [74.3, 623.0], [74.4, 625.0], [74.5, 626.0], [74.6, 627.0], [74.7, 628.0], [74.8, 629.0], [74.9, 630.0], [75.0, 631.0], [75.1, 632.0], [75.2, 633.0], [75.3, 634.0], [75.4, 635.0], [75.5, 636.0], [75.6, 638.0], [75.7, 639.0], [75.8, 640.0], [75.9, 641.0], [76.0, 643.0], [76.1, 643.0], [76.2, 644.0], [76.3, 645.0], [76.4, 646.0], [76.5, 648.0], [76.6, 649.0], [76.7, 651.0], [76.8, 652.0], [76.9, 655.0], [77.0, 655.0], [77.1, 656.0], [77.2, 657.0], [77.3, 658.0], [77.4, 660.0], [77.5, 661.0], [77.6, 662.0], [77.7, 663.0], [77.8, 664.0], [77.9, 666.0], [78.0, 667.0], [78.1, 668.0], [78.2, 669.0], [78.3, 671.0], [78.4, 673.0], [78.5, 675.0], [78.6, 676.0], [78.7, 677.0], [78.8, 680.0], [78.9, 682.0], [79.0, 683.0], [79.1, 687.0], [79.2, 689.0], [79.3, 693.0], [79.4, 695.0], [79.5, 697.0], [79.6, 697.0], [79.7, 700.0], [79.8, 702.0], [79.9, 705.0], [80.0, 710.0], [80.1, 712.0], [80.2, 714.0], [80.3, 716.0], [80.4, 717.0], [80.5, 719.0], [80.6, 723.0], [80.7, 725.0], [80.8, 729.0], [80.9, 734.0], [81.0, 738.0], [81.1, 743.0], [81.2, 746.0], [81.3, 748.0], [81.4, 751.0], [81.5, 752.0], [81.6, 755.0], [81.7, 757.0], [81.8, 762.0], [81.9, 764.0], [82.0, 770.0], [82.1, 775.0], [82.2, 780.0], [82.3, 786.0], [82.4, 790.0], [82.5, 793.0], [82.6, 797.0], [82.7, 802.0], [82.8, 807.0], [82.9, 811.0], [83.0, 814.0], [83.1, 821.0], [83.2, 824.0], [83.3, 828.0], [83.4, 831.0], [83.5, 835.0], [83.6, 840.0], [83.7, 846.0], [83.8, 847.0], [83.9, 849.0], [84.0, 851.0], [84.1, 855.0], [84.2, 859.0], [84.3, 865.0], [84.4, 866.0], [84.5, 872.0], [84.6, 875.0], [84.7, 875.0], [84.8, 877.0], [84.9, 879.0], [85.0, 883.0], [85.1, 886.0], [85.2, 888.0], [85.3, 889.0], [85.4, 890.0], [85.5, 893.0], [85.6, 895.0], [85.7, 897.0], [85.8, 900.0], [85.9, 901.0], [86.0, 902.0], [86.1, 903.0], [86.2, 904.0], [86.3, 905.0], [86.4, 907.0], [86.5, 911.0], [86.6, 912.0], [86.7, 913.0], [86.8, 914.0], [86.9, 919.0], [87.0, 921.0], [87.1, 924.0], [87.2, 925.0], [87.3, 926.0], [87.4, 930.0], [87.5, 931.0], [87.6, 932.0], [87.7, 935.0], [87.8, 940.0], [87.9, 944.0], [88.0, 947.0], [88.1, 948.0], [88.2, 950.0], [88.3, 955.0], [88.4, 957.0], [88.5, 960.0], [88.6, 963.0], [88.7, 966.0], [88.8, 969.0], [88.9, 980.0], [89.0, 982.0], [89.1, 986.0], [89.2, 997.0], [89.3, 999.0], [89.4, 1002.0], [89.5, 1009.0], [89.6, 1015.0], [89.7, 1028.0], [89.8, 1039.0], [89.9, 1045.0], [90.0, 1060.0], [90.1, 1078.0], [90.2, 1091.0], [90.3, 1107.0], [90.4, 1115.0], [90.5, 1123.0], [90.6, 1141.0], [90.7, 1147.0], [90.8, 1150.0], [90.9, 1154.0], [91.0, 1160.0], [91.1, 1163.0], [91.2, 1166.0], [91.3, 1174.0], [91.4, 1176.0], [91.5, 1180.0], [91.6, 1185.0], [91.7, 1194.0], [91.8, 1196.0], [91.9, 1202.0], [92.0, 1203.0], [92.1, 1207.0], [92.2, 1209.0], [92.3, 1212.0], [92.4, 1214.0], [92.5, 1218.0], [92.6, 1222.0], [92.7, 1233.0], [92.8, 1238.0], [92.9, 1246.0], [93.0, 1252.0], [93.1, 1256.0], [93.2, 1260.0], [93.3, 1274.0], [93.4, 1281.0], [93.5, 1288.0], [93.6, 1311.0], [93.7, 1337.0], [93.8, 1355.0], [93.9, 1382.0], [94.0, 1426.0], [94.1, 1437.0], [94.2, 1442.0], [94.3, 1519.0], [94.4, 1546.0], [94.5, 1575.0], [94.6, 1593.0], [94.7, 1603.0], [94.8, 1645.0], [94.9, 1702.0], [95.0, 1727.0], [95.1, 1803.0], [95.2, 1874.0], [95.3, 1946.0], [95.4, 2025.0], [95.5, 2061.0], [95.6, 2084.0], [95.7, 2161.0], [95.8, 2217.0], [95.9, 2255.0], [96.0, 2309.0], [96.1, 2415.0], [96.2, 2476.0], [96.3, 2555.0], [96.4, 2596.0], [96.5, 2650.0], [96.6, 2680.0], [96.7, 2733.0], [96.8, 2795.0], [96.9, 2863.0], [97.0, 2910.0], [97.1, 2944.0], [97.2, 3002.0], [97.3, 3039.0], [97.4, 3246.0], [97.5, 3317.0], [97.6, 3425.0], [97.7, 3525.0], [97.8, 3739.0], [97.9, 3804.0], [98.0, 3823.0], [98.1, 3868.0], [98.2, 3962.0], [98.3, 4276.0], [98.4, 4807.0], [98.5, 5212.0], [98.6, 5298.0], [98.7, 5786.0], [98.8, 7711.0], [98.9, 7792.0], [99.0, 7927.0], [99.1, 8049.0], [99.2, 8079.0], [99.3, 8272.0], [99.4, 8446.0], [99.5, 9995.0], [99.6, 10211.0], [99.7, 10309.0], [99.8, 10446.0], [99.9, 10685.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 857.0, "series": [{"data": [[0.0, 857.0], [600.0, 418.0], [700.0, 157.0], [800.0, 162.0], [900.0, 184.0], [1000.0, 47.0], [1100.0, 82.0], [1200.0, 89.0], [1300.0, 20.0], [1400.0, 17.0], [1500.0, 21.0], [1600.0, 12.0], [1700.0, 10.0], [1800.0, 8.0], [1900.0, 7.0], [2000.0, 12.0], [2100.0, 9.0], [2200.0, 10.0], [2300.0, 6.0], [2400.0, 7.0], [2500.0, 11.0], [2600.0, 10.0], [2700.0, 9.0], [2800.0, 9.0], [2900.0, 11.0], [3000.0, 7.0], [3100.0, 3.0], [3300.0, 4.0], [3200.0, 6.0], [3400.0, 6.0], [3500.0, 2.0], [3600.0, 3.0], [3700.0, 6.0], [3800.0, 13.0], [3900.0, 3.0], [4000.0, 3.0], [4300.0, 2.0], [4200.0, 2.0], [4500.0, 1.0], [4600.0, 1.0], [4800.0, 2.0], [5000.0, 1.0], [5100.0, 3.0], [5200.0, 6.0], [5400.0, 1.0], [5700.0, 5.0], [5800.0, 1.0], [6800.0, 1.0], [7500.0, 1.0], [7700.0, 6.0], [7800.0, 4.0], [7900.0, 4.0], [8000.0, 9.0], [8100.0, 1.0], [8200.0, 4.0], [8500.0, 1.0], [8400.0, 2.0], [8300.0, 2.0], [9200.0, 1.0], [8800.0, 1.0], [9500.0, 1.0], [10200.0, 4.0], [10000.0, 1.0], [9900.0, 2.0], [10100.0, 3.0], [10500.0, 3.0], [10400.0, 3.0], [10300.0, 4.0], [10600.0, 2.0], [10800.0, 1.0], [14000.0, 1.0], [17000.0, 1.0], [20100.0, 1.0], [20200.0, 1.0], [100.0, 765.0], [200.0, 552.0], [300.0, 789.0], [400.0, 401.0], [500.0, 352.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 20200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 298.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3365.0, "series": [{"data": [[0.0, 3365.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1527.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 298.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.783783783783784, "minX": 1.60246272E12, "maxY": 10.0, "series": [{"data": [[1.60246308E12, 8.783783783783784], [1.60246278E12, 10.0], [1.60246272E12, 9.991886409736319], [1.6024629E12, 10.0], [1.60246284E12, 10.0], [1.60246302E12, 10.0], [1.60246296E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246308E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 383.5, "minX": 1.0, "maxY": 7526.0, "series": [{"data": [[8.0, 742.0], [4.0, 593.0], [2.0, 838.0], [1.0, 7526.0], [9.0, 383.5], [10.0, 621.0486580420917], [5.0, 845.0], [6.0, 696.0], [3.0, 725.0], [7.0, 728.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99055876685938, 622.4660886319888]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 294.85, "minX": 1.60246272E12, "maxY": 5108677.466666667, "series": [{"data": [[1.60246308E12, 209384.16666666666], [1.60246278E12, 2879097.783333333], [1.60246272E12, 1956082.8], [1.6024629E12, 4821367.483333333], [1.60246284E12, 5108677.466666667], [1.60246302E12, 4060553.0], [1.60246296E12, 4607194.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246308E12, 294.85], [1.60246278E12, 4998.15], [1.60246272E12, 3705.6666666666665], [1.6024629E12, 10591.966666666667], [1.60246284E12, 6668.866666666667], [1.60246302E12, 7849.433333333333], [1.60246296E12, 5832.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246308E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 368.53752535496966, "minX": 1.60246272E12, "maxY": 961.8482549317147, "series": [{"data": [[1.60246308E12, 644.1351351351351], [1.60246278E12, 961.8482549317147], [1.60246272E12, 368.53752535496966], [1.6024629E12, 426.29160636758365], [1.60246284E12, 700.0806074766355], [1.60246302E12, 638.1361361361362], [1.60246296E12, 739.9437172774868]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246308E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 366.8052738336711, "minX": 1.60246272E12, "maxY": 960.072837632776, "series": [{"data": [[1.60246308E12, 642.2162162162163], [1.60246278E12, 960.072837632776], [1.60246272E12, 366.8052738336711], [1.6024629E12, 425.0448625180901], [1.60246284E12, 697.7032710280372], [1.60246302E12, 636.8128128128135], [1.60246296E12, 738.174083769634]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246308E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60246272E12, "maxY": 0.16632860040567943, "series": [{"data": [[1.60246308E12, 0.0], [1.60246278E12, 0.01820940819423369], [1.60246272E12, 0.16632860040567943], [1.6024629E12, 0.010130246020260502], [1.60246284E12, 0.015186915887850486], [1.60246302E12, 0.010010010010010012], [1.60246296E12, 0.009162303664921462]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246308E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 21.0, "minX": 1.60246272E12, "maxY": 20207.0, "series": [{"data": [[1.60246308E12, 7526.0], [1.60246278E12, 17018.0], [1.60246272E12, 5182.0], [1.6024629E12, 8322.0], [1.60246284E12, 10685.0], [1.60246302E12, 20207.0], [1.60246296E12, 5751.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246308E12, 96.0], [1.60246278E12, 27.939999842643736], [1.60246272E12, 34.0], [1.6024629E12, 30.0], [1.60246284E12, 33.42599959135055], [1.60246302E12, 32.99999976158142], [1.60246296E12, 31.88499981760979]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246308E12, 96.0], [1.60246278E12, 28.534000062942503], [1.60246272E12, 34.0], [1.6024629E12, 30.691700131893157], [1.60246284E12, 34.96860016345978], [1.60246302E12, 33.0], [1.60246296E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246308E12, 96.0], [1.60246278E12, 28.26999992132187], [1.60246272E12, 34.0], [1.6024629E12, 30.13849983513355], [1.60246284E12, 34.28299979567528], [1.60246302E12, 33.0], [1.60246296E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246308E12, 96.0], [1.60246278E12, 23.0], [1.60246272E12, 30.0], [1.6024629E12, 24.0], [1.60246284E12, 26.0], [1.60246302E12, 25.0], [1.60246296E12, 21.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246308E12, 465.0], [1.60246278E12, 353.0], [1.60246272E12, 304.0], [1.6024629E12, 269.5], [1.60246284E12, 486.0], [1.60246302E12, 346.0], [1.60246296E12, 531.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246308E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 113.5, "minX": 1.0, "maxY": 3785.0, "series": [{"data": [[32.0, 284.0], [2.0, 884.0], [33.0, 263.0], [35.0, 200.0], [34.0, 162.5], [36.0, 225.5], [37.0, 117.5], [39.0, 267.5], [38.0, 225.5], [41.0, 164.0], [42.0, 135.5], [43.0, 143.0], [45.0, 126.0], [3.0, 1200.5], [58.0, 113.5], [4.0, 904.0], [65.0, 118.0], [5.0, 674.0], [6.0, 507.5], [7.0, 1066.0], [8.0, 291.5], [9.0, 402.0], [10.0, 615.5], [11.0, 610.0], [12.0, 595.5], [13.0, 636.0], [14.0, 637.5], [15.0, 473.5], [16.0, 498.0], [1.0, 3785.0], [17.0, 410.0], [18.0, 548.0], [19.0, 351.0], [20.0, 388.5], [21.0, 388.0], [22.0, 386.0], [23.0, 333.5], [24.0, 324.0], [25.0, 351.5], [26.0, 348.5], [27.0, 274.0], [28.0, 331.5], [29.0, 288.5], [30.0, 291.5], [31.0, 183.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 111.5, "minX": 1.0, "maxY": 3784.0, "series": [{"data": [[32.0, 282.0], [2.0, 883.5], [33.0, 259.0], [35.0, 199.5], [34.0, 162.0], [36.0, 225.0], [37.0, 117.5], [39.0, 263.5], [38.0, 225.0], [41.0, 164.0], [42.0, 134.0], [43.0, 139.0], [45.0, 126.0], [3.0, 1197.5], [58.0, 111.5], [4.0, 901.5], [65.0, 117.0], [5.0, 673.5], [6.0, 507.0], [7.0, 1065.0], [8.0, 291.0], [9.0, 401.0], [10.0, 610.0], [11.0, 603.0], [12.0, 592.0], [13.0, 632.0], [14.0, 633.0], [15.0, 473.0], [16.0, 497.5], [1.0, 3784.0], [17.0, 409.0], [18.0, 547.5], [19.0, 350.0], [20.0, 387.0], [21.0, 387.0], [22.0, 382.0], [23.0, 332.5], [24.0, 323.0], [25.0, 348.5], [26.0, 348.0], [27.0, 273.0], [28.0, 330.5], [29.0, 286.5], [30.0, 290.5], [31.0, 183.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.60246272E12, "maxY": 23.033333333333335, "series": [{"data": [[1.60246308E12, 0.45], [1.60246278E12, 10.983333333333333], [1.60246272E12, 8.383333333333333], [1.6024629E12, 23.033333333333335], [1.60246284E12, 14.266666666666667], [1.60246302E12, 16.65], [1.60246296E12, 12.733333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246308E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.60246272E12, "maxY": 23.033333333333335, "series": [{"data": [[1.60246308E12, 0.6166666666666667], [1.60246278E12, 10.983333333333333], [1.60246272E12, 8.216666666666667], [1.6024629E12, 23.033333333333335], [1.60246284E12, 14.266666666666667], [1.60246302E12, 16.65], [1.60246296E12, 12.733333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246308E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.60246272E12, "maxY": 23.033333333333335, "series": [{"data": [[1.60246308E12, 0.6166666666666667], [1.60246278E12, 10.983333333333333], [1.60246272E12, 8.216666666666667], [1.6024629E12, 23.033333333333335], [1.60246284E12, 14.266666666666667], [1.60246302E12, 16.65], [1.60246296E12, 12.733333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246308E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.60246272E12, "maxY": 23.033333333333335, "series": [{"data": [[1.60246308E12, 0.6166666666666667], [1.60246278E12, 10.983333333333333], [1.60246272E12, 8.216666666666667], [1.6024629E12, 23.033333333333335], [1.60246284E12, 14.266666666666667], [1.60246302E12, 16.65], [1.60246296E12, 12.733333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246308E12, "title": "Total Transactions Per Second"}},
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

