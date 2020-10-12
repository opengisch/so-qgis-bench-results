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
        data: {"result": {"minY": 16.0, "minX": 0.0, "maxY": 20707.0, "series": [{"data": [[0.0, 16.0], [0.1, 23.0], [0.2, 25.0], [0.3, 26.0], [0.4, 28.0], [0.5, 29.0], [0.6, 30.0], [0.7, 31.0], [0.8, 31.0], [0.9, 32.0], [1.0, 33.0], [1.1, 33.0], [1.2, 34.0], [1.3, 34.0], [1.4, 34.0], [1.5, 35.0], [1.6, 35.0], [1.7, 35.0], [1.8, 35.0], [1.9, 36.0], [2.0, 36.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 38.0], [2.7, 38.0], [2.8, 38.0], [2.9, 38.0], [3.0, 39.0], [3.1, 39.0], [3.2, 39.0], [3.3, 40.0], [3.4, 40.0], [3.5, 40.0], [3.6, 40.0], [3.7, 41.0], [3.8, 41.0], [3.9, 41.0], [4.0, 42.0], [4.1, 42.0], [4.2, 42.0], [4.3, 42.0], [4.4, 43.0], [4.5, 43.0], [4.6, 43.0], [4.7, 44.0], [4.8, 44.0], [4.9, 44.0], [5.0, 45.0], [5.1, 45.0], [5.2, 46.0], [5.3, 46.0], [5.4, 46.0], [5.5, 47.0], [5.6, 47.0], [5.7, 47.0], [5.8, 48.0], [5.9, 48.0], [6.0, 48.0], [6.1, 49.0], [6.2, 50.0], [6.3, 50.0], [6.4, 51.0], [6.5, 51.0], [6.6, 51.0], [6.7, 51.0], [6.8, 52.0], [6.9, 52.0], [7.0, 52.0], [7.1, 53.0], [7.2, 53.0], [7.3, 53.0], [7.4, 53.0], [7.5, 54.0], [7.6, 54.0], [7.7, 54.0], [7.8, 55.0], [7.9, 55.0], [8.0, 55.0], [8.1, 56.0], [8.2, 56.0], [8.3, 56.0], [8.4, 56.0], [8.5, 57.0], [8.6, 57.0], [8.7, 58.0], [8.8, 58.0], [8.9, 58.0], [9.0, 59.0], [9.1, 59.0], [9.2, 60.0], [9.3, 60.0], [9.4, 60.0], [9.5, 61.0], [9.6, 61.0], [9.7, 61.0], [9.8, 62.0], [9.9, 62.0], [10.0, 63.0], [10.1, 63.0], [10.2, 63.0], [10.3, 64.0], [10.4, 64.0], [10.5, 64.0], [10.6, 65.0], [10.7, 65.0], [10.8, 66.0], [10.9, 67.0], [11.0, 67.0], [11.1, 68.0], [11.2, 68.0], [11.3, 69.0], [11.4, 69.0], [11.5, 70.0], [11.6, 70.0], [11.7, 70.0], [11.8, 71.0], [11.9, 71.0], [12.0, 71.0], [12.1, 72.0], [12.2, 72.0], [12.3, 73.0], [12.4, 73.0], [12.5, 74.0], [12.6, 74.0], [12.7, 75.0], [12.8, 75.0], [12.9, 75.0], [13.0, 76.0], [13.1, 76.0], [13.2, 77.0], [13.3, 77.0], [13.4, 77.0], [13.5, 78.0], [13.6, 78.0], [13.7, 79.0], [13.8, 79.0], [13.9, 80.0], [14.0, 80.0], [14.1, 80.0], [14.2, 81.0], [14.3, 82.0], [14.4, 82.0], [14.5, 82.0], [14.6, 83.0], [14.7, 84.0], [14.8, 84.0], [14.9, 85.0], [15.0, 85.0], [15.1, 85.0], [15.2, 86.0], [15.3, 86.0], [15.4, 87.0], [15.5, 87.0], [15.6, 88.0], [15.7, 88.0], [15.8, 89.0], [15.9, 89.0], [16.0, 89.0], [16.1, 90.0], [16.2, 91.0], [16.3, 91.0], [16.4, 93.0], [16.5, 93.0], [16.6, 93.0], [16.7, 94.0], [16.8, 94.0], [16.9, 94.0], [17.0, 95.0], [17.1, 95.0], [17.2, 95.0], [17.3, 96.0], [17.4, 96.0], [17.5, 97.0], [17.6, 97.0], [17.7, 97.0], [17.8, 98.0], [17.9, 98.0], [18.0, 99.0], [18.1, 100.0], [18.2, 100.0], [18.3, 100.0], [18.4, 101.0], [18.5, 101.0], [18.6, 102.0], [18.7, 102.0], [18.8, 103.0], [18.9, 104.0], [19.0, 104.0], [19.1, 105.0], [19.2, 105.0], [19.3, 106.0], [19.4, 107.0], [19.5, 107.0], [19.6, 108.0], [19.7, 109.0], [19.8, 109.0], [19.9, 109.0], [20.0, 110.0], [20.1, 110.0], [20.2, 111.0], [20.3, 112.0], [20.4, 112.0], [20.5, 113.0], [20.6, 113.0], [20.7, 114.0], [20.8, 114.0], [20.9, 115.0], [21.0, 115.0], [21.1, 116.0], [21.2, 118.0], [21.3, 118.0], [21.4, 119.0], [21.5, 120.0], [21.6, 120.0], [21.7, 120.0], [21.8, 121.0], [21.9, 122.0], [22.0, 123.0], [22.1, 123.0], [22.2, 124.0], [22.3, 124.0], [22.4, 125.0], [22.5, 126.0], [22.6, 127.0], [22.7, 128.0], [22.8, 129.0], [22.9, 130.0], [23.0, 131.0], [23.1, 131.0], [23.2, 132.0], [23.3, 133.0], [23.4, 134.0], [23.5, 135.0], [23.6, 135.0], [23.7, 136.0], [23.8, 137.0], [23.9, 137.0], [24.0, 138.0], [24.1, 139.0], [24.2, 139.0], [24.3, 140.0], [24.4, 141.0], [24.5, 142.0], [24.6, 142.0], [24.7, 143.0], [24.8, 143.0], [24.9, 144.0], [25.0, 145.0], [25.1, 146.0], [25.2, 147.0], [25.3, 148.0], [25.4, 149.0], [25.5, 149.0], [25.6, 150.0], [25.7, 151.0], [25.8, 152.0], [25.9, 153.0], [26.0, 153.0], [26.1, 155.0], [26.2, 155.0], [26.3, 156.0], [26.4, 156.0], [26.5, 157.0], [26.6, 157.0], [26.7, 158.0], [26.8, 159.0], [26.9, 160.0], [27.0, 160.0], [27.1, 161.0], [27.2, 162.0], [27.3, 163.0], [27.4, 163.0], [27.5, 164.0], [27.6, 164.0], [27.7, 165.0], [27.8, 167.0], [27.9, 168.0], [28.0, 168.0], [28.1, 169.0], [28.2, 170.0], [28.3, 171.0], [28.4, 171.0], [28.5, 172.0], [28.6, 173.0], [28.7, 173.0], [28.8, 175.0], [28.9, 175.0], [29.0, 176.0], [29.1, 177.0], [29.2, 177.0], [29.3, 178.0], [29.4, 179.0], [29.5, 180.0], [29.6, 181.0], [29.7, 182.0], [29.8, 182.0], [29.9, 183.0], [30.0, 184.0], [30.1, 185.0], [30.2, 185.0], [30.3, 186.0], [30.4, 188.0], [30.5, 188.0], [30.6, 189.0], [30.7, 190.0], [30.8, 190.0], [30.9, 191.0], [31.0, 191.0], [31.1, 192.0], [31.2, 193.0], [31.3, 194.0], [31.4, 195.0], [31.5, 195.0], [31.6, 196.0], [31.7, 197.0], [31.8, 199.0], [31.9, 199.0], [32.0, 200.0], [32.1, 201.0], [32.2, 202.0], [32.3, 203.0], [32.4, 204.0], [32.5, 205.0], [32.6, 205.0], [32.7, 207.0], [32.8, 208.0], [32.9, 210.0], [33.0, 211.0], [33.1, 212.0], [33.2, 214.0], [33.3, 215.0], [33.4, 216.0], [33.5, 218.0], [33.6, 219.0], [33.7, 220.0], [33.8, 221.0], [33.9, 223.0], [34.0, 224.0], [34.1, 224.0], [34.2, 225.0], [34.3, 227.0], [34.4, 227.0], [34.5, 228.0], [34.6, 229.0], [34.7, 230.0], [34.8, 231.0], [34.9, 232.0], [35.0, 233.0], [35.1, 234.0], [35.2, 236.0], [35.3, 236.0], [35.4, 237.0], [35.5, 238.0], [35.6, 240.0], [35.7, 241.0], [35.8, 242.0], [35.9, 243.0], [36.0, 244.0], [36.1, 246.0], [36.2, 247.0], [36.3, 250.0], [36.4, 252.0], [36.5, 254.0], [36.6, 255.0], [36.7, 256.0], [36.8, 258.0], [36.9, 259.0], [37.0, 259.0], [37.1, 261.0], [37.2, 262.0], [37.3, 264.0], [37.4, 265.0], [37.5, 266.0], [37.6, 267.0], [37.7, 269.0], [37.8, 270.0], [37.9, 271.0], [38.0, 272.0], [38.1, 273.0], [38.2, 274.0], [38.3, 275.0], [38.4, 276.0], [38.5, 277.0], [38.6, 277.0], [38.7, 278.0], [38.8, 279.0], [38.9, 280.0], [39.0, 281.0], [39.1, 282.0], [39.2, 283.0], [39.3, 284.0], [39.4, 285.0], [39.5, 286.0], [39.6, 287.0], [39.7, 288.0], [39.8, 289.0], [39.9, 289.0], [40.0, 291.0], [40.1, 291.0], [40.2, 292.0], [40.3, 293.0], [40.4, 293.0], [40.5, 294.0], [40.6, 295.0], [40.7, 296.0], [40.8, 297.0], [40.9, 298.0], [41.0, 298.0], [41.1, 300.0], [41.2, 300.0], [41.3, 301.0], [41.4, 302.0], [41.5, 302.0], [41.6, 302.0], [41.7, 304.0], [41.8, 304.0], [41.9, 305.0], [42.0, 305.0], [42.1, 306.0], [42.2, 307.0], [42.3, 308.0], [42.4, 309.0], [42.5, 309.0], [42.6, 310.0], [42.7, 311.0], [42.8, 311.0], [42.9, 312.0], [43.0, 312.0], [43.1, 313.0], [43.2, 314.0], [43.3, 314.0], [43.4, 315.0], [43.5, 315.0], [43.6, 316.0], [43.7, 316.0], [43.8, 317.0], [43.9, 317.0], [44.0, 318.0], [44.1, 318.0], [44.2, 319.0], [44.3, 319.0], [44.4, 319.0], [44.5, 320.0], [44.6, 320.0], [44.7, 321.0], [44.8, 321.0], [44.9, 322.0], [45.0, 323.0], [45.1, 323.0], [45.2, 324.0], [45.3, 325.0], [45.4, 325.0], [45.5, 326.0], [45.6, 327.0], [45.7, 327.0], [45.8, 328.0], [45.9, 328.0], [46.0, 329.0], [46.1, 329.0], [46.2, 330.0], [46.3, 331.0], [46.4, 331.0], [46.5, 332.0], [46.6, 332.0], [46.7, 333.0], [46.8, 333.0], [46.9, 334.0], [47.0, 334.0], [47.1, 335.0], [47.2, 335.0], [47.3, 336.0], [47.4, 337.0], [47.5, 337.0], [47.6, 338.0], [47.7, 338.0], [47.8, 339.0], [47.9, 339.0], [48.0, 340.0], [48.1, 341.0], [48.2, 341.0], [48.3, 342.0], [48.4, 342.0], [48.5, 343.0], [48.6, 343.0], [48.7, 344.0], [48.8, 345.0], [48.9, 346.0], [49.0, 347.0], [49.1, 347.0], [49.2, 348.0], [49.3, 348.0], [49.4, 349.0], [49.5, 349.0], [49.6, 350.0], [49.7, 350.0], [49.8, 351.0], [49.9, 351.0], [50.0, 352.0], [50.1, 352.0], [50.2, 353.0], [50.3, 353.0], [50.4, 354.0], [50.5, 355.0], [50.6, 355.0], [50.7, 355.0], [50.8, 356.0], [50.9, 356.0], [51.0, 357.0], [51.1, 358.0], [51.2, 359.0], [51.3, 359.0], [51.4, 359.0], [51.5, 360.0], [51.6, 362.0], [51.7, 363.0], [51.8, 363.0], [51.9, 364.0], [52.0, 364.0], [52.1, 364.0], [52.2, 366.0], [52.3, 366.0], [52.4, 367.0], [52.5, 368.0], [52.6, 368.0], [52.7, 370.0], [52.8, 370.0], [52.9, 371.0], [53.0, 371.0], [53.1, 371.0], [53.2, 373.0], [53.3, 373.0], [53.4, 374.0], [53.5, 375.0], [53.6, 375.0], [53.7, 376.0], [53.8, 376.0], [53.9, 377.0], [54.0, 377.0], [54.1, 379.0], [54.2, 379.0], [54.3, 380.0], [54.4, 381.0], [54.5, 382.0], [54.6, 383.0], [54.7, 383.0], [54.8, 384.0], [54.9, 384.0], [55.0, 386.0], [55.1, 386.0], [55.2, 387.0], [55.3, 388.0], [55.4, 389.0], [55.5, 390.0], [55.6, 390.0], [55.7, 391.0], [55.8, 391.0], [55.9, 393.0], [56.0, 394.0], [56.1, 395.0], [56.2, 396.0], [56.3, 396.0], [56.4, 397.0], [56.5, 398.0], [56.6, 399.0], [56.7, 400.0], [56.8, 400.0], [56.9, 401.0], [57.0, 402.0], [57.1, 402.0], [57.2, 403.0], [57.3, 404.0], [57.4, 406.0], [57.5, 407.0], [57.6, 409.0], [57.7, 410.0], [57.8, 411.0], [57.9, 412.0], [58.0, 413.0], [58.1, 414.0], [58.2, 416.0], [58.3, 416.0], [58.4, 417.0], [58.5, 417.0], [58.6, 418.0], [58.7, 420.0], [58.8, 421.0], [58.9, 422.0], [59.0, 423.0], [59.1, 424.0], [59.2, 424.0], [59.3, 425.0], [59.4, 426.0], [59.5, 427.0], [59.6, 429.0], [59.7, 431.0], [59.8, 432.0], [59.9, 433.0], [60.0, 433.0], [60.1, 433.0], [60.2, 435.0], [60.3, 437.0], [60.4, 438.0], [60.5, 440.0], [60.6, 440.0], [60.7, 441.0], [60.8, 441.0], [60.9, 442.0], [61.0, 443.0], [61.1, 446.0], [61.2, 447.0], [61.3, 448.0], [61.4, 450.0], [61.5, 450.0], [61.6, 453.0], [61.7, 454.0], [61.8, 455.0], [61.9, 457.0], [62.0, 459.0], [62.1, 460.0], [62.2, 463.0], [62.3, 464.0], [62.4, 465.0], [62.5, 466.0], [62.6, 467.0], [62.7, 468.0], [62.8, 470.0], [62.9, 471.0], [63.0, 474.0], [63.1, 475.0], [63.2, 477.0], [63.3, 479.0], [63.4, 479.0], [63.5, 481.0], [63.6, 482.0], [63.7, 487.0], [63.8, 488.0], [63.9, 490.0], [64.0, 492.0], [64.1, 494.0], [64.2, 495.0], [64.3, 496.0], [64.4, 497.0], [64.5, 499.0], [64.6, 501.0], [64.7, 502.0], [64.8, 504.0], [64.9, 506.0], [65.0, 507.0], [65.1, 508.0], [65.2, 509.0], [65.3, 510.0], [65.4, 512.0], [65.5, 513.0], [65.6, 515.0], [65.7, 515.0], [65.8, 517.0], [65.9, 519.0], [66.0, 521.0], [66.1, 522.0], [66.2, 524.0], [66.3, 525.0], [66.4, 526.0], [66.5, 529.0], [66.6, 530.0], [66.7, 533.0], [66.8, 534.0], [66.9, 536.0], [67.0, 538.0], [67.1, 541.0], [67.2, 544.0], [67.3, 546.0], [67.4, 549.0], [67.5, 553.0], [67.6, 554.0], [67.7, 556.0], [67.8, 557.0], [67.9, 560.0], [68.0, 561.0], [68.1, 562.0], [68.2, 566.0], [68.3, 567.0], [68.4, 568.0], [68.5, 570.0], [68.6, 571.0], [68.7, 573.0], [68.8, 573.0], [68.9, 574.0], [69.0, 576.0], [69.1, 578.0], [69.2, 579.0], [69.3, 579.0], [69.4, 580.0], [69.5, 582.0], [69.6, 582.0], [69.7, 583.0], [69.8, 584.0], [69.9, 585.0], [70.0, 585.0], [70.1, 586.0], [70.2, 587.0], [70.3, 587.0], [70.4, 588.0], [70.5, 589.0], [70.6, 590.0], [70.7, 591.0], [70.8, 592.0], [70.9, 593.0], [71.0, 594.0], [71.1, 596.0], [71.2, 597.0], [71.3, 598.0], [71.4, 598.0], [71.5, 599.0], [71.6, 600.0], [71.7, 600.0], [71.8, 602.0], [71.9, 602.0], [72.0, 603.0], [72.1, 604.0], [72.2, 604.0], [72.3, 606.0], [72.4, 607.0], [72.5, 610.0], [72.6, 611.0], [72.7, 612.0], [72.8, 613.0], [72.9, 614.0], [73.0, 615.0], [73.1, 615.0], [73.2, 616.0], [73.3, 617.0], [73.4, 619.0], [73.5, 619.0], [73.6, 620.0], [73.7, 621.0], [73.8, 622.0], [73.9, 623.0], [74.0, 624.0], [74.1, 626.0], [74.2, 626.0], [74.3, 628.0], [74.4, 628.0], [74.5, 629.0], [74.6, 630.0], [74.7, 631.0], [74.8, 631.0], [74.9, 632.0], [75.0, 633.0], [75.1, 634.0], [75.2, 634.0], [75.3, 635.0], [75.4, 636.0], [75.5, 637.0], [75.6, 639.0], [75.7, 640.0], [75.8, 640.0], [75.9, 641.0], [76.0, 642.0], [76.1, 643.0], [76.2, 644.0], [76.3, 646.0], [76.4, 647.0], [76.5, 648.0], [76.6, 649.0], [76.7, 650.0], [76.8, 651.0], [76.9, 653.0], [77.0, 654.0], [77.1, 657.0], [77.2, 658.0], [77.3, 659.0], [77.4, 662.0], [77.5, 663.0], [77.6, 664.0], [77.7, 665.0], [77.8, 666.0], [77.9, 667.0], [78.0, 668.0], [78.1, 669.0], [78.2, 671.0], [78.3, 672.0], [78.4, 675.0], [78.5, 679.0], [78.6, 681.0], [78.7, 682.0], [78.8, 685.0], [78.9, 687.0], [79.0, 690.0], [79.1, 692.0], [79.2, 694.0], [79.3, 697.0], [79.4, 700.0], [79.5, 703.0], [79.6, 707.0], [79.7, 708.0], [79.8, 709.0], [79.9, 712.0], [80.0, 715.0], [80.1, 716.0], [80.2, 721.0], [80.3, 725.0], [80.4, 726.0], [80.5, 729.0], [80.6, 731.0], [80.7, 733.0], [80.8, 737.0], [80.9, 742.0], [81.0, 746.0], [81.1, 748.0], [81.2, 751.0], [81.3, 753.0], [81.4, 755.0], [81.5, 757.0], [81.6, 764.0], [81.7, 765.0], [81.8, 770.0], [81.9, 774.0], [82.0, 781.0], [82.1, 786.0], [82.2, 793.0], [82.3, 798.0], [82.4, 801.0], [82.5, 803.0], [82.6, 805.0], [82.7, 809.0], [82.8, 813.0], [82.9, 819.0], [83.0, 823.0], [83.1, 827.0], [83.2, 832.0], [83.3, 833.0], [83.4, 838.0], [83.5, 842.0], [83.6, 846.0], [83.7, 849.0], [83.8, 853.0], [83.9, 858.0], [84.0, 859.0], [84.1, 862.0], [84.2, 865.0], [84.3, 865.0], [84.4, 869.0], [84.5, 871.0], [84.6, 873.0], [84.7, 875.0], [84.8, 880.0], [84.9, 881.0], [85.0, 884.0], [85.1, 885.0], [85.2, 886.0], [85.3, 890.0], [85.4, 892.0], [85.5, 894.0], [85.6, 895.0], [85.7, 899.0], [85.8, 903.0], [85.9, 905.0], [86.0, 907.0], [86.1, 909.0], [86.2, 911.0], [86.3, 915.0], [86.4, 918.0], [86.5, 918.0], [86.6, 919.0], [86.7, 920.0], [86.8, 921.0], [86.9, 924.0], [87.0, 926.0], [87.1, 927.0], [87.2, 930.0], [87.3, 931.0], [87.4, 934.0], [87.5, 936.0], [87.6, 937.0], [87.7, 939.0], [87.8, 940.0], [87.9, 941.0], [88.0, 945.0], [88.1, 951.0], [88.2, 953.0], [88.3, 956.0], [88.4, 959.0], [88.5, 965.0], [88.6, 970.0], [88.7, 976.0], [88.8, 980.0], [88.9, 982.0], [89.0, 991.0], [89.1, 994.0], [89.2, 999.0], [89.3, 1004.0], [89.4, 1010.0], [89.5, 1020.0], [89.6, 1032.0], [89.7, 1040.0], [89.8, 1056.0], [89.9, 1061.0], [90.0, 1076.0], [90.1, 1080.0], [90.2, 1094.0], [90.3, 1101.0], [90.4, 1107.0], [90.5, 1113.0], [90.6, 1120.0], [90.7, 1128.0], [90.8, 1129.0], [90.9, 1138.0], [91.0, 1143.0], [91.1, 1146.0], [91.2, 1149.0], [91.3, 1154.0], [91.4, 1156.0], [91.5, 1159.0], [91.6, 1165.0], [91.7, 1166.0], [91.8, 1169.0], [91.9, 1173.0], [92.0, 1177.0], [92.1, 1178.0], [92.2, 1185.0], [92.3, 1189.0], [92.4, 1193.0], [92.5, 1202.0], [92.6, 1205.0], [92.7, 1212.0], [92.8, 1216.0], [92.9, 1223.0], [93.0, 1231.0], [93.1, 1233.0], [93.2, 1245.0], [93.3, 1254.0], [93.4, 1266.0], [93.5, 1280.0], [93.6, 1300.0], [93.7, 1318.0], [93.8, 1342.0], [93.9, 1371.0], [94.0, 1401.0], [94.1, 1411.0], [94.2, 1422.0], [94.3, 1438.0], [94.4, 1466.0], [94.5, 1498.0], [94.6, 1543.0], [94.7, 1563.0], [94.8, 1610.0], [94.9, 1661.0], [95.0, 1755.0], [95.1, 1803.0], [95.2, 1831.0], [95.3, 1874.0], [95.4, 1885.0], [95.5, 2033.0], [95.6, 2056.0], [95.7, 2122.0], [95.8, 2160.0], [95.9, 2256.0], [96.0, 2340.0], [96.1, 2411.0], [96.2, 2492.0], [96.3, 2573.0], [96.4, 2614.0], [96.5, 2663.0], [96.6, 2779.0], [96.7, 2855.0], [96.8, 2929.0], [96.9, 2988.0], [97.0, 3022.0], [97.1, 3076.0], [97.2, 3194.0], [97.3, 3291.0], [97.4, 3348.0], [97.5, 3418.0], [97.6, 3631.0], [97.7, 3810.0], [97.8, 3861.0], [97.9, 3899.0], [98.0, 3937.0], [98.1, 4028.0], [98.2, 4193.0], [98.3, 4367.0], [98.4, 4482.0], [98.5, 5040.0], [98.6, 5391.0], [98.7, 5772.0], [98.8, 7180.0], [98.9, 7807.0], [99.0, 7926.0], [99.1, 8006.0], [99.2, 8200.0], [99.3, 8350.0], [99.4, 8538.0], [99.5, 10060.0], [99.6, 10239.0], [99.7, 10394.0], [99.8, 10567.0], [99.9, 10679.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 939.0, "series": [{"data": [[0.0, 939.0], [600.0, 407.0], [700.0, 154.0], [800.0, 176.0], [900.0, 180.0], [1000.0, 56.0], [1100.0, 112.0], [1200.0, 59.0], [1300.0, 21.0], [1400.0, 27.0], [1500.0, 13.0], [1600.0, 10.0], [1700.0, 6.0], [1800.0, 18.0], [1900.0, 2.0], [2000.0, 9.0], [2100.0, 12.0], [2200.0, 3.0], [2300.0, 8.0], [2400.0, 8.0], [2500.0, 5.0], [2600.0, 11.0], [2800.0, 8.0], [2700.0, 5.0], [2900.0, 9.0], [3000.0, 9.0], [3100.0, 4.0], [3300.0, 7.0], [3200.0, 7.0], [3400.0, 3.0], [3500.0, 2.0], [3600.0, 3.0], [3700.0, 3.0], [3800.0, 12.0], [3900.0, 8.0], [4000.0, 5.0], [4300.0, 2.0], [4100.0, 3.0], [4200.0, 3.0], [4400.0, 4.0], [4500.0, 2.0], [4600.0, 1.0], [4800.0, 1.0], [5000.0, 2.0], [5300.0, 4.0], [5200.0, 1.0], [5400.0, 3.0], [5600.0, 1.0], [5700.0, 1.0], [6000.0, 1.0], [6200.0, 2.0], [6500.0, 1.0], [7100.0, 1.0], [7600.0, 4.0], [7900.0, 6.0], [7800.0, 5.0], [8000.0, 3.0], [8100.0, 2.0], [8500.0, 3.0], [8400.0, 1.0], [8300.0, 4.0], [8200.0, 4.0], [9100.0, 1.0], [9000.0, 1.0], [9700.0, 1.0], [10000.0, 3.0], [10100.0, 3.0], [10200.0, 2.0], [10300.0, 4.0], [10400.0, 2.0], [10600.0, 4.0], [10500.0, 4.0], [14100.0, 1.0], [15700.0, 1.0], [18300.0, 1.0], [20000.0, 1.0], [20700.0, 1.0], [100.0, 717.0], [200.0, 475.0], [300.0, 807.0], [400.0, 411.0], [500.0, 364.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 20700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 284.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3350.0, "series": [{"data": [[0.0, 3350.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1556.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 284.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.950495049504953, "minX": 1.60246308E12, "maxY": 10.0, "series": [{"data": [[1.60246308E12, 9.996655518394643], [1.60246338E12, 9.950495049504953], [1.6024632E12, 10.0], [1.60246326E12, 10.0], [1.60246314E12, 10.0], [1.60246332E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246338E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 295.0, "minX": 1.0, "maxY": 7943.0, "series": [{"data": [[8.0, 665.0], [4.0, 616.0], [2.0, 7943.0], [1.0, 7924.0], [9.0, 295.0], [10.0, 621.6594594594629], [5.0, 770.0], [6.0, 595.0], [3.0, 746.0], [7.0, 402.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331403, 624.43487475915]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4520.633333333333, "minX": 1.60246308E12, "maxY": 5110921.1, "series": [{"data": [[1.60246308E12, 2317211.9166666665], [1.60246338E12, 3692921.6], [1.6024632E12, 4094064.783333333], [1.60246326E12, 4493507.35], [1.60246314E12, 3933211.25], [1.60246332E12, 5110921.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246308E12, 4520.633333333333], [1.60246338E12, 7153.0], [1.6024632E12, 6630.433333333333], [1.60246326E12, 10084.583333333334], [1.60246314E12, 5055.633333333333], [1.60246332E12, 6497.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246338E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 452.36418816388516, "minX": 1.60246308E12, "maxY": 926.6770833333339, "series": [{"data": [[1.60246308E12, 479.79096989966575], [1.60246338E12, 588.128712871287], [1.6024632E12, 704.2594786729851], [1.60246326E12, 452.36418816388516], [1.60246314E12, 926.6770833333339], [1.60246332E12, 713.7279151943465]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246338E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 451.1684370257962, "minX": 1.60246308E12, "maxY": 924.3928571428573, "series": [{"data": [[1.60246308E12, 478.1521739130433], [1.60246338E12, 586.9801980198024], [1.6024632E12, 702.2867298578199], [1.60246326E12, 451.1684370257962], [1.60246314E12, 924.3928571428573], [1.60246332E12, 712.1118963486458]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246338E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007587253414264045, "minX": 1.60246308E12, "maxY": 0.23745819397993323, "series": [{"data": [[1.60246308E12, 0.23745819397993323], [1.60246338E12, 0.0187018701870187], [1.6024632E12, 0.01540284360189576], [1.60246326E12, 0.007587253414264045], [1.60246314E12, 0.019345238095238075], [1.60246332E12, 0.016489988221437015]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246338E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 16.0, "minX": 1.60246308E12, "maxY": 20707.0, "series": [{"data": [[1.60246308E12, 10679.0], [1.60246338E12, 20707.0], [1.6024632E12, 10625.0], [1.60246326E12, 15746.0], [1.60246314E12, 18389.0], [1.60246332E12, 14120.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246308E12, 35.0], [1.60246338E12, 33.0], [1.6024632E12, 35.2099995970726], [1.60246326E12, 31.0], [1.60246314E12, 27.056999839544297], [1.60246332E12, 31.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246308E12, 35.0], [1.60246338E12, 33.0], [1.6024632E12, 36.0], [1.60246326E12, 31.058100125789643], [1.60246314E12, 27.662700064182282], [1.60246332E12, 31.415000081062317]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246308E12, 35.0], [1.60246338E12, 33.0], [1.6024632E12, 36.0], [1.60246326E12, 31.0], [1.60246314E12, 27.393499919772147], [1.60246332E12, 31.074999898672104]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246308E12, 30.0], [1.60246338E12, 25.0], [1.6024632E12, 23.0], [1.60246326E12, 23.0], [1.60246314E12, 22.0], [1.60246332E12, 16.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246308E12, 284.0], [1.60246338E12, 334.0], [1.6024632E12, 439.0], [1.60246326E12, 279.0], [1.60246314E12, 547.0], [1.60246332E12, 492.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246338E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 82.0, "minX": 1.0, "maxY": 4849.5, "series": [{"data": [[2.0, 2727.0], [33.0, 338.5], [32.0, 272.0], [35.0, 212.0], [36.0, 276.5], [37.0, 178.0], [38.0, 141.5], [41.0, 126.5], [40.0, 117.5], [43.0, 82.0], [44.0, 189.5], [47.0, 118.0], [3.0, 992.0], [58.0, 108.5], [61.0, 101.0], [4.0, 914.0], [5.0, 681.0], [6.0, 588.5], [7.0, 547.0], [8.0, 948.5], [9.0, 1004.0], [10.0, 398.0], [11.0, 572.0], [12.0, 629.0], [13.0, 596.0], [14.0, 593.0], [15.0, 393.5], [16.0, 357.0], [1.0, 4849.5], [17.0, 474.5], [18.0, 515.0], [19.0, 426.0], [20.0, 384.5], [21.0, 389.0], [22.0, 354.0], [23.0, 316.0], [24.0, 353.5], [25.0, 329.0], [26.0, 353.5], [27.0, 309.0], [28.0, 345.0], [29.0, 218.0], [30.0, 258.5], [31.0, 230.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 81.0, "minX": 1.0, "maxY": 4847.5, "series": [{"data": [[2.0, 2725.5], [33.0, 338.0], [32.0, 271.5], [35.0, 212.0], [36.0, 276.0], [37.0, 177.0], [38.0, 141.0], [41.0, 126.0], [40.0, 117.0], [43.0, 81.0], [44.0, 189.5], [47.0, 118.0], [3.0, 991.0], [58.0, 108.0], [61.0, 100.0], [4.0, 912.0], [5.0, 680.0], [6.0, 585.0], [7.0, 546.0], [8.0, 945.5], [9.0, 1002.5], [10.0, 397.0], [11.0, 571.0], [12.0, 625.5], [13.0, 592.0], [14.0, 589.5], [15.0, 392.5], [16.0, 355.0], [1.0, 4847.5], [17.0, 473.5], [18.0, 512.5], [19.0, 425.0], [20.0, 383.0], [21.0, 388.0], [22.0, 352.5], [23.0, 316.0], [24.0, 352.5], [25.0, 327.0], [26.0, 352.5], [27.0, 308.0], [28.0, 344.5], [29.0, 217.0], [30.0, 257.0], [31.0, 230.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.133333333333333, "minX": 1.60246308E12, "maxY": 21.966666666666665, "series": [{"data": [[1.60246308E12, 10.133333333333333], [1.60246338E12, 14.983333333333333], [1.6024632E12, 14.066666666666666], [1.60246326E12, 21.966666666666665], [1.60246314E12, 11.2], [1.60246332E12, 14.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246338E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.966666666666667, "minX": 1.60246308E12, "maxY": 21.966666666666665, "series": [{"data": [[1.60246308E12, 9.966666666666667], [1.60246338E12, 15.15], [1.6024632E12, 14.066666666666666], [1.60246326E12, 21.966666666666665], [1.60246314E12, 11.2], [1.60246332E12, 14.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246338E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.966666666666667, "minX": 1.60246308E12, "maxY": 21.966666666666665, "series": [{"data": [[1.60246308E12, 9.966666666666667], [1.60246338E12, 15.15], [1.6024632E12, 14.066666666666666], [1.60246326E12, 21.966666666666665], [1.60246314E12, 11.2], [1.60246332E12, 14.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246338E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.966666666666667, "minX": 1.60246308E12, "maxY": 21.966666666666665, "series": [{"data": [[1.60246308E12, 9.966666666666667], [1.60246338E12, 15.15], [1.6024632E12, 14.066666666666666], [1.60246326E12, 21.966666666666665], [1.60246314E12, 11.2], [1.60246332E12, 14.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246338E12, "title": "Total Transactions Per Second"}},
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

