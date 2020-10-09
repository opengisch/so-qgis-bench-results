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
        data: {"result": {"minY": 16.0, "minX": 0.0, "maxY": 21262.0, "series": [{"data": [[0.0, 16.0], [0.1, 23.0], [0.2, 24.0], [0.3, 26.0], [0.4, 28.0], [0.5, 28.0], [0.6, 29.0], [0.7, 30.0], [0.8, 31.0], [0.9, 31.0], [1.0, 32.0], [1.1, 32.0], [1.2, 32.0], [1.3, 33.0], [1.4, 33.0], [1.5, 33.0], [1.6, 34.0], [1.7, 34.0], [1.8, 34.0], [1.9, 34.0], [2.0, 34.0], [2.1, 35.0], [2.2, 35.0], [2.3, 35.0], [2.4, 35.0], [2.5, 36.0], [2.6, 36.0], [2.7, 36.0], [2.8, 36.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 38.0], [3.4, 38.0], [3.5, 39.0], [3.6, 39.0], [3.7, 39.0], [3.8, 40.0], [3.9, 40.0], [4.0, 40.0], [4.1, 41.0], [4.2, 41.0], [4.3, 41.0], [4.4, 42.0], [4.5, 42.0], [4.6, 42.0], [4.7, 43.0], [4.8, 44.0], [4.9, 44.0], [5.0, 44.0], [5.1, 45.0], [5.2, 45.0], [5.3, 45.0], [5.4, 46.0], [5.5, 46.0], [5.6, 46.0], [5.7, 46.0], [5.8, 47.0], [5.9, 47.0], [6.0, 47.0], [6.1, 48.0], [6.2, 48.0], [6.3, 49.0], [6.4, 49.0], [6.5, 49.0], [6.6, 49.0], [6.7, 50.0], [6.8, 50.0], [6.9, 51.0], [7.0, 51.0], [7.1, 52.0], [7.2, 52.0], [7.3, 52.0], [7.4, 53.0], [7.5, 53.0], [7.6, 53.0], [7.7, 53.0], [7.8, 54.0], [7.9, 54.0], [8.0, 55.0], [8.1, 55.0], [8.2, 56.0], [8.3, 57.0], [8.4, 57.0], [8.5, 58.0], [8.6, 58.0], [8.7, 58.0], [8.8, 58.0], [8.9, 59.0], [9.0, 59.0], [9.1, 60.0], [9.2, 60.0], [9.3, 60.0], [9.4, 61.0], [9.5, 61.0], [9.6, 62.0], [9.7, 62.0], [9.8, 62.0], [9.9, 62.0], [10.0, 63.0], [10.1, 63.0], [10.2, 64.0], [10.3, 64.0], [10.4, 65.0], [10.5, 65.0], [10.6, 66.0], [10.7, 66.0], [10.8, 66.0], [10.9, 67.0], [11.0, 67.0], [11.1, 68.0], [11.2, 68.0], [11.3, 69.0], [11.4, 69.0], [11.5, 70.0], [11.6, 70.0], [11.7, 71.0], [11.8, 71.0], [11.9, 72.0], [12.0, 72.0], [12.1, 73.0], [12.2, 73.0], [12.3, 73.0], [12.4, 73.0], [12.5, 74.0], [12.6, 75.0], [12.7, 75.0], [12.8, 76.0], [12.9, 76.0], [13.0, 76.0], [13.1, 77.0], [13.2, 77.0], [13.3, 78.0], [13.4, 79.0], [13.5, 80.0], [13.6, 80.0], [13.7, 81.0], [13.8, 81.0], [13.9, 81.0], [14.0, 82.0], [14.1, 83.0], [14.2, 83.0], [14.3, 84.0], [14.4, 84.0], [14.5, 85.0], [14.6, 86.0], [14.7, 86.0], [14.8, 86.0], [14.9, 87.0], [15.0, 88.0], [15.1, 88.0], [15.2, 88.0], [15.3, 89.0], [15.4, 89.0], [15.5, 90.0], [15.6, 91.0], [15.7, 91.0], [15.8, 92.0], [15.9, 92.0], [16.0, 92.0], [16.1, 93.0], [16.2, 93.0], [16.3, 94.0], [16.4, 94.0], [16.5, 95.0], [16.6, 96.0], [16.7, 96.0], [16.8, 96.0], [16.9, 97.0], [17.0, 98.0], [17.1, 98.0], [17.2, 98.0], [17.3, 99.0], [17.4, 99.0], [17.5, 100.0], [17.6, 100.0], [17.7, 101.0], [17.8, 101.0], [17.9, 102.0], [18.0, 103.0], [18.1, 104.0], [18.2, 104.0], [18.3, 104.0], [18.4, 105.0], [18.5, 106.0], [18.6, 106.0], [18.7, 106.0], [18.8, 106.0], [18.9, 107.0], [19.0, 108.0], [19.1, 108.0], [19.2, 108.0], [19.3, 109.0], [19.4, 109.0], [19.5, 110.0], [19.6, 110.0], [19.7, 111.0], [19.8, 111.0], [19.9, 112.0], [20.0, 112.0], [20.1, 112.0], [20.2, 113.0], [20.3, 113.0], [20.4, 114.0], [20.5, 114.0], [20.6, 115.0], [20.7, 115.0], [20.8, 116.0], [20.9, 117.0], [21.0, 118.0], [21.1, 119.0], [21.2, 119.0], [21.3, 120.0], [21.4, 120.0], [21.5, 120.0], [21.6, 121.0], [21.7, 121.0], [21.8, 122.0], [21.9, 122.0], [22.0, 123.0], [22.1, 123.0], [22.2, 124.0], [22.3, 125.0], [22.4, 125.0], [22.5, 126.0], [22.6, 127.0], [22.7, 128.0], [22.8, 129.0], [22.9, 130.0], [23.0, 130.0], [23.1, 131.0], [23.2, 132.0], [23.3, 132.0], [23.4, 133.0], [23.5, 133.0], [23.6, 134.0], [23.7, 134.0], [23.8, 135.0], [23.9, 136.0], [24.0, 136.0], [24.1, 137.0], [24.2, 137.0], [24.3, 137.0], [24.4, 138.0], [24.5, 139.0], [24.6, 139.0], [24.7, 140.0], [24.8, 140.0], [24.9, 141.0], [25.0, 142.0], [25.1, 143.0], [25.2, 143.0], [25.3, 144.0], [25.4, 145.0], [25.5, 146.0], [25.6, 147.0], [25.7, 148.0], [25.8, 149.0], [25.9, 149.0], [26.0, 150.0], [26.1, 151.0], [26.2, 152.0], [26.3, 153.0], [26.4, 153.0], [26.5, 154.0], [26.6, 154.0], [26.7, 155.0], [26.8, 156.0], [26.9, 156.0], [27.0, 156.0], [27.1, 157.0], [27.2, 158.0], [27.3, 159.0], [27.4, 160.0], [27.5, 161.0], [27.6, 162.0], [27.7, 163.0], [27.8, 163.0], [27.9, 164.0], [28.0, 164.0], [28.1, 165.0], [28.2, 166.0], [28.3, 166.0], [28.4, 167.0], [28.5, 167.0], [28.6, 168.0], [28.7, 168.0], [28.8, 169.0], [28.9, 170.0], [29.0, 170.0], [29.1, 171.0], [29.2, 171.0], [29.3, 172.0], [29.4, 173.0], [29.5, 174.0], [29.6, 175.0], [29.7, 176.0], [29.8, 176.0], [29.9, 178.0], [30.0, 178.0], [30.1, 179.0], [30.2, 180.0], [30.3, 181.0], [30.4, 182.0], [30.5, 183.0], [30.6, 183.0], [30.7, 184.0], [30.8, 185.0], [30.9, 186.0], [31.0, 186.0], [31.1, 187.0], [31.2, 188.0], [31.3, 189.0], [31.4, 189.0], [31.5, 191.0], [31.6, 191.0], [31.7, 191.0], [31.8, 192.0], [31.9, 193.0], [32.0, 194.0], [32.1, 194.0], [32.2, 194.0], [32.3, 196.0], [32.4, 197.0], [32.5, 199.0], [32.6, 199.0], [32.7, 200.0], [32.8, 201.0], [32.9, 202.0], [33.0, 203.0], [33.1, 203.0], [33.2, 205.0], [33.3, 205.0], [33.4, 206.0], [33.5, 207.0], [33.6, 208.0], [33.7, 209.0], [33.8, 210.0], [33.9, 211.0], [34.0, 213.0], [34.1, 214.0], [34.2, 214.0], [34.3, 215.0], [34.4, 217.0], [34.5, 218.0], [34.6, 219.0], [34.7, 220.0], [34.8, 221.0], [34.9, 222.0], [35.0, 223.0], [35.1, 224.0], [35.2, 226.0], [35.3, 226.0], [35.4, 227.0], [35.5, 228.0], [35.6, 228.0], [35.7, 230.0], [35.8, 230.0], [35.9, 231.0], [36.0, 233.0], [36.1, 234.0], [36.2, 236.0], [36.3, 237.0], [36.4, 239.0], [36.5, 240.0], [36.6, 240.0], [36.7, 241.0], [36.8, 242.0], [36.9, 243.0], [37.0, 244.0], [37.1, 245.0], [37.2, 246.0], [37.3, 248.0], [37.4, 250.0], [37.5, 251.0], [37.6, 251.0], [37.7, 252.0], [37.8, 253.0], [37.9, 255.0], [38.0, 256.0], [38.1, 257.0], [38.2, 258.0], [38.3, 259.0], [38.4, 259.0], [38.5, 260.0], [38.6, 261.0], [38.7, 262.0], [38.8, 264.0], [38.9, 264.0], [39.0, 266.0], [39.1, 266.0], [39.2, 267.0], [39.3, 268.0], [39.4, 269.0], [39.5, 270.0], [39.6, 272.0], [39.7, 275.0], [39.8, 276.0], [39.9, 277.0], [40.0, 277.0], [40.1, 278.0], [40.2, 280.0], [40.3, 281.0], [40.4, 282.0], [40.5, 283.0], [40.6, 284.0], [40.7, 285.0], [40.8, 287.0], [40.9, 287.0], [41.0, 288.0], [41.1, 289.0], [41.2, 290.0], [41.3, 291.0], [41.4, 292.0], [41.5, 292.0], [41.6, 293.0], [41.7, 294.0], [41.8, 295.0], [41.9, 296.0], [42.0, 297.0], [42.1, 298.0], [42.2, 299.0], [42.3, 300.0], [42.4, 301.0], [42.5, 302.0], [42.6, 303.0], [42.7, 304.0], [42.8, 305.0], [42.9, 306.0], [43.0, 307.0], [43.1, 307.0], [43.2, 308.0], [43.3, 308.0], [43.4, 309.0], [43.5, 310.0], [43.6, 312.0], [43.7, 313.0], [43.8, 315.0], [43.9, 315.0], [44.0, 316.0], [44.1, 317.0], [44.2, 318.0], [44.3, 319.0], [44.4, 320.0], [44.5, 320.0], [44.6, 321.0], [44.7, 322.0], [44.8, 322.0], [44.9, 323.0], [45.0, 323.0], [45.1, 324.0], [45.2, 324.0], [45.3, 325.0], [45.4, 325.0], [45.5, 326.0], [45.6, 326.0], [45.7, 327.0], [45.8, 327.0], [45.9, 328.0], [46.0, 329.0], [46.1, 329.0], [46.2, 330.0], [46.3, 331.0], [46.4, 331.0], [46.5, 332.0], [46.6, 332.0], [46.7, 333.0], [46.8, 333.0], [46.9, 333.0], [47.0, 334.0], [47.1, 335.0], [47.2, 335.0], [47.3, 336.0], [47.4, 337.0], [47.5, 337.0], [47.6, 338.0], [47.7, 338.0], [47.8, 339.0], [47.9, 340.0], [48.0, 340.0], [48.1, 341.0], [48.2, 341.0], [48.3, 342.0], [48.4, 342.0], [48.5, 343.0], [48.6, 344.0], [48.7, 344.0], [48.8, 345.0], [48.9, 346.0], [49.0, 347.0], [49.1, 347.0], [49.2, 348.0], [49.3, 348.0], [49.4, 349.0], [49.5, 349.0], [49.6, 350.0], [49.7, 351.0], [49.8, 352.0], [49.9, 352.0], [50.0, 352.0], [50.1, 353.0], [50.2, 354.0], [50.3, 355.0], [50.4, 355.0], [50.5, 356.0], [50.6, 356.0], [50.7, 357.0], [50.8, 357.0], [50.9, 358.0], [51.0, 359.0], [51.1, 359.0], [51.2, 360.0], [51.3, 361.0], [51.4, 362.0], [51.5, 363.0], [51.6, 363.0], [51.7, 364.0], [51.8, 365.0], [51.9, 366.0], [52.0, 367.0], [52.1, 367.0], [52.2, 368.0], [52.3, 368.0], [52.4, 369.0], [52.5, 369.0], [52.6, 370.0], [52.7, 371.0], [52.8, 372.0], [52.9, 373.0], [53.0, 374.0], [53.1, 374.0], [53.2, 375.0], [53.3, 375.0], [53.4, 376.0], [53.5, 376.0], [53.6, 378.0], [53.7, 379.0], [53.8, 379.0], [53.9, 380.0], [54.0, 381.0], [54.1, 382.0], [54.2, 382.0], [54.3, 383.0], [54.4, 383.0], [54.5, 385.0], [54.6, 386.0], [54.7, 386.0], [54.8, 387.0], [54.9, 388.0], [55.0, 388.0], [55.1, 390.0], [55.2, 391.0], [55.3, 392.0], [55.4, 393.0], [55.5, 394.0], [55.6, 395.0], [55.7, 396.0], [55.8, 397.0], [55.9, 397.0], [56.0, 398.0], [56.1, 399.0], [56.2, 399.0], [56.3, 401.0], [56.4, 401.0], [56.5, 402.0], [56.6, 402.0], [56.7, 403.0], [56.8, 405.0], [56.9, 405.0], [57.0, 405.0], [57.1, 407.0], [57.2, 408.0], [57.3, 409.0], [57.4, 411.0], [57.5, 411.0], [57.6, 412.0], [57.7, 414.0], [57.8, 414.0], [57.9, 416.0], [58.0, 417.0], [58.1, 419.0], [58.2, 421.0], [58.3, 422.0], [58.4, 423.0], [58.5, 425.0], [58.6, 426.0], [58.7, 427.0], [58.8, 427.0], [58.9, 429.0], [59.0, 430.0], [59.1, 430.0], [59.2, 432.0], [59.3, 433.0], [59.4, 433.0], [59.5, 435.0], [59.6, 436.0], [59.7, 437.0], [59.8, 438.0], [59.9, 439.0], [60.0, 441.0], [60.1, 442.0], [60.2, 443.0], [60.3, 444.0], [60.4, 445.0], [60.5, 446.0], [60.6, 448.0], [60.7, 449.0], [60.8, 451.0], [60.9, 452.0], [61.0, 453.0], [61.1, 454.0], [61.2, 455.0], [61.3, 456.0], [61.4, 459.0], [61.5, 460.0], [61.6, 463.0], [61.7, 464.0], [61.8, 465.0], [61.9, 466.0], [62.0, 467.0], [62.1, 468.0], [62.2, 470.0], [62.3, 472.0], [62.4, 474.0], [62.5, 475.0], [62.6, 476.0], [62.7, 478.0], [62.8, 478.0], [62.9, 480.0], [63.0, 481.0], [63.1, 482.0], [63.2, 484.0], [63.3, 486.0], [63.4, 487.0], [63.5, 487.0], [63.6, 489.0], [63.7, 489.0], [63.8, 491.0], [63.9, 493.0], [64.0, 494.0], [64.1, 497.0], [64.2, 499.0], [64.3, 500.0], [64.4, 503.0], [64.5, 505.0], [64.6, 506.0], [64.7, 508.0], [64.8, 509.0], [64.9, 512.0], [65.0, 513.0], [65.1, 517.0], [65.2, 518.0], [65.3, 519.0], [65.4, 521.0], [65.5, 523.0], [65.6, 523.0], [65.7, 527.0], [65.8, 529.0], [65.9, 531.0], [66.0, 533.0], [66.1, 535.0], [66.2, 537.0], [66.3, 540.0], [66.4, 543.0], [66.5, 546.0], [66.6, 550.0], [66.7, 552.0], [66.8, 554.0], [66.9, 555.0], [67.0, 557.0], [67.1, 559.0], [67.2, 560.0], [67.3, 562.0], [67.4, 563.0], [67.5, 564.0], [67.6, 565.0], [67.7, 567.0], [67.8, 568.0], [67.9, 570.0], [68.0, 572.0], [68.1, 573.0], [68.2, 574.0], [68.3, 575.0], [68.4, 576.0], [68.5, 578.0], [68.6, 579.0], [68.7, 581.0], [68.8, 583.0], [68.9, 584.0], [69.0, 585.0], [69.1, 586.0], [69.2, 587.0], [69.3, 588.0], [69.4, 589.0], [69.5, 590.0], [69.6, 592.0], [69.7, 593.0], [69.8, 594.0], [69.9, 594.0], [70.0, 595.0], [70.1, 596.0], [70.2, 597.0], [70.3, 598.0], [70.4, 600.0], [70.5, 600.0], [70.6, 601.0], [70.7, 602.0], [70.8, 602.0], [70.9, 603.0], [71.0, 603.0], [71.1, 604.0], [71.2, 605.0], [71.3, 606.0], [71.4, 606.0], [71.5, 607.0], [71.6, 607.0], [71.7, 608.0], [71.8, 610.0], [71.9, 611.0], [72.0, 612.0], [72.1, 613.0], [72.2, 614.0], [72.3, 615.0], [72.4, 616.0], [72.5, 617.0], [72.6, 617.0], [72.7, 618.0], [72.8, 619.0], [72.9, 619.0], [73.0, 620.0], [73.1, 621.0], [73.2, 621.0], [73.3, 622.0], [73.4, 623.0], [73.5, 624.0], [73.6, 625.0], [73.7, 626.0], [73.8, 626.0], [73.9, 627.0], [74.0, 628.0], [74.1, 629.0], [74.2, 629.0], [74.3, 630.0], [74.4, 631.0], [74.5, 632.0], [74.6, 632.0], [74.7, 634.0], [74.8, 635.0], [74.9, 636.0], [75.0, 637.0], [75.1, 638.0], [75.2, 639.0], [75.3, 640.0], [75.4, 642.0], [75.5, 643.0], [75.6, 643.0], [75.7, 644.0], [75.8, 645.0], [75.9, 646.0], [76.0, 647.0], [76.1, 649.0], [76.2, 649.0], [76.3, 649.0], [76.4, 650.0], [76.5, 651.0], [76.6, 652.0], [76.7, 653.0], [76.8, 654.0], [76.9, 655.0], [77.0, 657.0], [77.1, 658.0], [77.2, 660.0], [77.3, 662.0], [77.4, 664.0], [77.5, 666.0], [77.6, 667.0], [77.7, 668.0], [77.8, 670.0], [77.9, 671.0], [78.0, 673.0], [78.1, 675.0], [78.2, 676.0], [78.3, 678.0], [78.4, 679.0], [78.5, 681.0], [78.6, 683.0], [78.7, 685.0], [78.8, 687.0], [78.9, 689.0], [79.0, 691.0], [79.1, 693.0], [79.2, 696.0], [79.3, 700.0], [79.4, 702.0], [79.5, 704.0], [79.6, 705.0], [79.7, 707.0], [79.8, 708.0], [79.9, 710.0], [80.0, 713.0], [80.1, 716.0], [80.2, 718.0], [80.3, 723.0], [80.4, 726.0], [80.5, 729.0], [80.6, 732.0], [80.7, 739.0], [80.8, 740.0], [80.9, 741.0], [81.0, 745.0], [81.1, 747.0], [81.2, 751.0], [81.3, 753.0], [81.4, 755.0], [81.5, 758.0], [81.6, 762.0], [81.7, 766.0], [81.8, 768.0], [81.9, 776.0], [82.0, 782.0], [82.1, 785.0], [82.2, 789.0], [82.3, 793.0], [82.4, 798.0], [82.5, 801.0], [82.6, 805.0], [82.7, 808.0], [82.8, 811.0], [82.9, 816.0], [83.0, 819.0], [83.1, 825.0], [83.2, 828.0], [83.3, 836.0], [83.4, 842.0], [83.5, 844.0], [83.6, 847.0], [83.7, 850.0], [83.8, 855.0], [83.9, 860.0], [84.0, 864.0], [84.1, 870.0], [84.2, 873.0], [84.3, 877.0], [84.4, 880.0], [84.5, 881.0], [84.6, 884.0], [84.7, 886.0], [84.8, 888.0], [84.9, 891.0], [85.0, 893.0], [85.1, 896.0], [85.2, 899.0], [85.3, 903.0], [85.4, 905.0], [85.5, 908.0], [85.6, 909.0], [85.7, 912.0], [85.8, 913.0], [85.9, 915.0], [86.0, 916.0], [86.1, 919.0], [86.2, 921.0], [86.3, 923.0], [86.4, 925.0], [86.5, 927.0], [86.6, 930.0], [86.7, 932.0], [86.8, 934.0], [86.9, 936.0], [87.0, 937.0], [87.1, 938.0], [87.2, 939.0], [87.3, 940.0], [87.4, 942.0], [87.5, 943.0], [87.6, 945.0], [87.7, 949.0], [87.8, 950.0], [87.9, 952.0], [88.0, 957.0], [88.1, 960.0], [88.2, 963.0], [88.3, 967.0], [88.4, 972.0], [88.5, 978.0], [88.6, 981.0], [88.7, 984.0], [88.8, 986.0], [88.9, 989.0], [89.0, 992.0], [89.1, 995.0], [89.2, 998.0], [89.3, 1010.0], [89.4, 1023.0], [89.5, 1029.0], [89.6, 1037.0], [89.7, 1042.0], [89.8, 1048.0], [89.9, 1062.0], [90.0, 1066.0], [90.1, 1076.0], [90.2, 1090.0], [90.3, 1097.0], [90.4, 1101.0], [90.5, 1119.0], [90.6, 1125.0], [90.7, 1141.0], [90.8, 1150.0], [90.9, 1154.0], [91.0, 1160.0], [91.1, 1168.0], [91.2, 1175.0], [91.3, 1183.0], [91.4, 1185.0], [91.5, 1189.0], [91.6, 1191.0], [91.7, 1196.0], [91.8, 1202.0], [91.9, 1208.0], [92.0, 1211.0], [92.1, 1220.0], [92.2, 1224.0], [92.3, 1229.0], [92.4, 1233.0], [92.5, 1242.0], [92.6, 1244.0], [92.7, 1248.0], [92.8, 1255.0], [92.9, 1263.0], [93.0, 1271.0], [93.1, 1275.0], [93.2, 1290.0], [93.3, 1299.0], [93.4, 1310.0], [93.5, 1322.0], [93.6, 1338.0], [93.7, 1348.0], [93.8, 1383.0], [93.9, 1397.0], [94.0, 1431.0], [94.1, 1466.0], [94.2, 1481.0], [94.3, 1536.0], [94.4, 1569.0], [94.5, 1597.0], [94.6, 1643.0], [94.7, 1670.0], [94.8, 1696.0], [94.9, 1735.0], [95.0, 1778.0], [95.1, 1829.0], [95.2, 1877.0], [95.3, 1921.0], [95.4, 2005.0], [95.5, 2068.0], [95.6, 2126.0], [95.7, 2152.0], [95.8, 2205.0], [95.9, 2312.0], [96.0, 2443.0], [96.1, 2531.0], [96.2, 2583.0], [96.3, 2637.0], [96.4, 2658.0], [96.5, 2722.0], [96.6, 2738.0], [96.7, 2850.0], [96.8, 2895.0], [96.9, 2940.0], [97.0, 2995.0], [97.1, 3051.0], [97.2, 3108.0], [97.3, 3160.0], [97.4, 3245.0], [97.5, 3432.0], [97.6, 3575.0], [97.7, 3741.0], [97.8, 3835.0], [97.9, 3909.0], [98.0, 3975.0], [98.1, 3999.0], [98.2, 4238.0], [98.3, 4506.0], [98.4, 5009.0], [98.5, 5377.0], [98.6, 5666.0], [98.7, 6119.0], [98.8, 6624.0], [98.9, 7894.0], [99.0, 8046.0], [99.1, 8289.0], [99.2, 8452.0], [99.3, 8614.0], [99.4, 9033.0], [99.5, 10396.0], [99.6, 10563.0], [99.7, 10602.0], [99.8, 10830.0], [99.9, 11323.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 907.0, "series": [{"data": [[0.0, 907.0], [600.0, 464.0], [700.0, 164.0], [800.0, 143.0], [900.0, 209.0], [1000.0, 60.0], [1100.0, 73.0], [1200.0, 79.0], [1300.0, 31.0], [1400.0, 17.0], [1500.0, 14.0], [1600.0, 16.0], [1700.0, 11.0], [1800.0, 12.0], [1900.0, 7.0], [2000.0, 9.0], [2100.0, 11.0], [2300.0, 4.0], [2200.0, 6.0], [2400.0, 4.0], [2500.0, 10.0], [2600.0, 12.0], [2700.0, 9.0], [2800.0, 9.0], [2900.0, 10.0], [3000.0, 8.0], [3100.0, 9.0], [3200.0, 5.0], [3300.0, 2.0], [3400.0, 5.0], [3500.0, 2.0], [3600.0, 3.0], [3700.0, 5.0], [3800.0, 6.0], [3900.0, 12.0], [4000.0, 2.0], [4100.0, 1.0], [4300.0, 1.0], [4200.0, 2.0], [4400.0, 2.0], [4500.0, 3.0], [4600.0, 3.0], [5100.0, 2.0], [5000.0, 3.0], [5300.0, 1.0], [5200.0, 1.0], [5500.0, 2.0], [5400.0, 2.0], [5600.0, 1.0], [5800.0, 2.0], [6100.0, 4.0], [6000.0, 1.0], [6200.0, 1.0], [6400.0, 1.0], [6600.0, 1.0], [6900.0, 1.0], [6800.0, 1.0], [7800.0, 3.0], [7900.0, 1.0], [8000.0, 6.0], [8100.0, 2.0], [8200.0, 2.0], [8600.0, 3.0], [8500.0, 1.0], [8400.0, 4.0], [8300.0, 3.0], [8700.0, 1.0], [8800.0, 1.0], [8900.0, 1.0], [9000.0, 1.0], [9700.0, 2.0], [10200.0, 3.0], [10500.0, 5.0], [10300.0, 1.0], [10400.0, 3.0], [10600.0, 4.0], [10700.0, 1.0], [10800.0, 2.0], [10900.0, 3.0], [11100.0, 1.0], [11300.0, 2.0], [15800.0, 1.0], [17600.0, 1.0], [20500.0, 1.0], [21200.0, 1.0], [100.0, 789.0], [200.0, 498.0], [300.0, 725.0], [400.0, 414.0], [500.0, 319.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3337.0, "series": [{"data": [[0.0, 3337.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1554.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 299.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.9296875, "minX": 1.60223934E12, "maxY": 10.0, "series": [{"data": [[1.60223946E12, 10.0], [1.60223964E12, 9.9296875], [1.60223934E12, 9.99758745476479], [1.60223952E12, 10.0], [1.6022394E12, 10.0], [1.60223958E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223964E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 420.5, "minX": 1.0, "maxY": 8043.0, "series": [{"data": [[8.0, 420.5], [4.0, 714.0], [2.0, 8043.0], [1.0, 6029.0], [9.0, 797.0], [10.0, 629.0912951167754], [5.0, 559.0], [6.0, 525.0], [3.0, 754.0], [7.0, 437.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990945867848161, 631.4816027740337]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5029.75, "minX": 1.60223934E12, "maxY": 5173706.166666667, "series": [{"data": [[1.60223946E12, 4480702.683333334], [1.60223964E12, 2436330.4], [1.60223934E12, 2957588.283333333], [1.60223952E12, 3583260.8833333333], [1.6022394E12, 5010256.183333334], [1.60223958E12, 5173706.166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223946E12, 8233.95], [1.60223964E12, 5029.75], [1.60223934E12, 6272.183333333333], [1.60223952E12, 8297.183333333332], [1.6022394E12, 5620.35], [1.60223958E12, 6495.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223964E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 545.4323342415983, "minX": 1.60223934E12, "maxY": 823.7913279132797, "series": [{"data": [[1.60223946E12, 572.5004775549182], [1.60223964E12, 579.7093749999999], [1.60223934E12, 644.4294330518699], [1.60223952E12, 545.4323342415983], [1.6022394E12, 823.7913279132797], [1.60223958E12, 675.7033492822969]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223964E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 544.3932788374198, "minX": 1.60223934E12, "maxY": 821.2303523035234, "series": [{"data": [[1.60223946E12, 570.8710601719205], [1.60223964E12, 578.3874999999988], [1.60223934E12, 643.0711700844389], [1.60223952E12, 544.3932788374198], [1.6022394E12, 821.2303523035234], [1.60223958E12, 673.7703349282293]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223964E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009990917347865573, "minX": 1.60223934E12, "maxY": 0.1266586248492161, "series": [{"data": [[1.60223946E12, 0.012416427889207255], [1.60223964E12, 0.015624999999999997], [1.60223934E12, 0.1266586248492161], [1.60223952E12, 0.009990917347865573], [1.6022394E12, 0.017615176151761516], [1.60223958E12, 0.01674641148325359]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223964E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 16.0, "minX": 1.60223934E12, "maxY": 21262.0, "series": [{"data": [[1.60223946E12, 11153.0], [1.60223964E12, 21262.0], [1.60223934E12, 17678.0], [1.60223952E12, 15880.0], [1.6022394E12, 11323.0], [1.60223958E12, 10972.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223946E12, 28.0], [1.60223964E12, 32.0], [1.60223934E12, 32.46999980211258], [1.60223952E12, 29.917999737262726], [1.6022394E12, 26.95299947142601], [1.60223958E12, 33.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223946E12, 28.3653000998497], [1.60223964E12, 32.34590006113052], [1.60223934E12, 33.0], [1.60223952E12, 30.0], [1.6022394E12, 28.31610007047653], [1.60223958E12, 33.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223946E12, 28.0], [1.60223964E12, 32.08949992358684], [1.60223934E12, 32.88499990105629], [1.60223952E12, 30.0], [1.6022394E12, 28.020499911904334], [1.60223958E12, 33.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223946E12, 22.0], [1.60223964E12, 26.0], [1.60223934E12, 26.0], [1.60223952E12, 16.0], [1.6022394E12, 20.0], [1.60223958E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223946E12, 355.5], [1.60223964E12, 299.5], [1.60223934E12, 304.0], [1.60223952E12, 261.0], [1.6022394E12, 597.0], [1.60223958E12, 484.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223964E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 99.0, "minX": 1.0, "maxY": 1972.0, "series": [{"data": [[33.0, 248.5], [2.0, 1448.5], [32.0, 196.0], [34.0, 228.5], [35.0, 272.0], [36.0, 263.5], [37.0, 195.0], [38.0, 110.0], [39.0, 132.0], [40.0, 129.0], [41.0, 99.0], [43.0, 130.0], [42.0, 100.5], [44.0, 131.5], [46.0, 115.5], [3.0, 649.0], [54.0, 117.5], [61.0, 114.0], [4.0, 734.0], [5.0, 606.0], [6.0, 641.0], [7.0, 456.0], [8.0, 645.5], [9.0, 471.0], [10.0, 888.5], [11.0, 597.0], [12.0, 584.5], [13.0, 650.0], [14.0, 570.5], [15.0, 545.5], [16.0, 433.5], [1.0, 1972.0], [17.0, 489.0], [18.0, 444.0], [19.0, 364.0], [20.0, 418.0], [21.0, 483.5], [22.0, 313.5], [23.0, 352.0], [24.0, 356.0], [25.0, 349.5], [26.0, 290.5], [27.0, 228.0], [28.0, 327.0], [29.0, 223.0], [30.0, 318.5], [31.0, 341.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[28.0, 191.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 98.0, "minX": 1.0, "maxY": 1971.0, "series": [{"data": [[33.0, 246.5], [2.0, 1447.5], [32.0, 195.5], [34.0, 228.5], [35.0, 271.5], [36.0, 262.5], [37.0, 195.0], [38.0, 110.0], [39.0, 130.5], [40.0, 128.5], [41.0, 98.0], [43.0, 129.0], [42.0, 100.0], [44.0, 130.5], [46.0, 114.5], [3.0, 646.0], [54.0, 117.5], [61.0, 114.0], [4.0, 729.5], [5.0, 602.0], [6.0, 638.5], [7.0, 455.0], [8.0, 643.0], [9.0, 469.0], [10.0, 886.0], [11.0, 592.0], [12.0, 582.0], [13.0, 646.0], [14.0, 569.0], [15.0, 541.5], [16.0, 429.5], [1.0, 1971.0], [17.0, 489.0], [18.0, 442.0], [19.0, 363.5], [20.0, 413.0], [21.0, 481.5], [22.0, 312.5], [23.0, 351.0], [24.0, 355.0], [25.0, 345.5], [26.0, 289.5], [27.0, 227.0], [28.0, 325.0], [29.0, 223.0], [30.0, 314.5], [31.0, 339.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[28.0, 191.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.5, "minX": 1.60223934E12, "maxY": 18.35, "series": [{"data": [[1.60223946E12, 17.45], [1.60223964E12, 10.5], [1.60223934E12, 13.983333333333333], [1.60223952E12, 18.35], [1.6022394E12, 12.3], [1.60223958E12, 13.933333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223964E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223934E12, "maxY": 18.35, "series": [{"data": [[1.60223946E12, 17.433333333333334], [1.60223964E12, 10.666666666666666], [1.60223934E12, 13.816666666666666], [1.60223952E12, 18.35], [1.6022394E12, 12.3], [1.60223958E12, 13.933333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60223946E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223964E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223934E12, "maxY": 18.35, "series": [{"data": [[1.60223946E12, 17.433333333333334], [1.60223964E12, 10.666666666666666], [1.60223934E12, 13.816666666666666], [1.60223952E12, 18.35], [1.6022394E12, 12.3], [1.60223958E12, 13.933333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60223946E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223964E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223934E12, "maxY": 18.35, "series": [{"data": [[1.60223946E12, 17.433333333333334], [1.60223964E12, 10.666666666666666], [1.60223934E12, 13.816666666666666], [1.60223952E12, 18.35], [1.6022394E12, 12.3], [1.60223958E12, 13.933333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60223946E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223964E12, "title": "Total Transactions Per Second"}},
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

