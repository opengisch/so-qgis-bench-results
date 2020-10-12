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
        data: {"result": {"minY": 22.0, "minX": 0.0, "maxY": 21822.0, "series": [{"data": [[0.0, 22.0], [0.1, 25.0], [0.2, 27.0], [0.3, 29.0], [0.4, 30.0], [0.5, 31.0], [0.6, 32.0], [0.7, 33.0], [0.8, 33.0], [0.9, 34.0], [1.0, 34.0], [1.1, 34.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 37.0], [2.0, 37.0], [2.1, 37.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 39.0], [2.6, 39.0], [2.7, 39.0], [2.8, 40.0], [2.9, 40.0], [3.0, 40.0], [3.1, 40.0], [3.2, 40.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 41.0], [3.7, 41.0], [3.8, 42.0], [3.9, 42.0], [4.0, 42.0], [4.1, 43.0], [4.2, 43.0], [4.3, 44.0], [4.4, 44.0], [4.5, 44.0], [4.6, 44.0], [4.7, 45.0], [4.8, 45.0], [4.9, 45.0], [5.0, 45.0], [5.1, 46.0], [5.2, 46.0], [5.3, 46.0], [5.4, 47.0], [5.5, 47.0], [5.6, 47.0], [5.7, 47.0], [5.8, 48.0], [5.9, 48.0], [6.0, 48.0], [6.1, 48.0], [6.2, 49.0], [6.3, 49.0], [6.4, 49.0], [6.5, 50.0], [6.6, 50.0], [6.7, 50.0], [6.8, 50.0], [6.9, 51.0], [7.0, 51.0], [7.1, 51.0], [7.2, 52.0], [7.3, 52.0], [7.4, 52.0], [7.5, 52.0], [7.6, 53.0], [7.7, 53.0], [7.8, 53.0], [7.9, 54.0], [8.0, 54.0], [8.1, 54.0], [8.2, 54.0], [8.3, 55.0], [8.4, 55.0], [8.5, 55.0], [8.6, 56.0], [8.7, 56.0], [8.8, 56.0], [8.9, 57.0], [9.0, 57.0], [9.1, 57.0], [9.2, 57.0], [9.3, 58.0], [9.4, 58.0], [9.5, 58.0], [9.6, 59.0], [9.7, 59.0], [9.8, 60.0], [9.9, 60.0], [10.0, 60.0], [10.1, 61.0], [10.2, 61.0], [10.3, 62.0], [10.4, 62.0], [10.5, 62.0], [10.6, 62.0], [10.7, 63.0], [10.8, 63.0], [10.9, 64.0], [11.0, 64.0], [11.1, 65.0], [11.2, 65.0], [11.3, 65.0], [11.4, 66.0], [11.5, 67.0], [11.6, 67.0], [11.7, 68.0], [11.8, 68.0], [11.9, 69.0], [12.0, 69.0], [12.1, 69.0], [12.2, 70.0], [12.3, 70.0], [12.4, 71.0], [12.5, 71.0], [12.6, 71.0], [12.7, 72.0], [12.8, 73.0], [12.9, 73.0], [13.0, 74.0], [13.1, 74.0], [13.2, 75.0], [13.3, 75.0], [13.4, 75.0], [13.5, 76.0], [13.6, 76.0], [13.7, 77.0], [13.8, 77.0], [13.9, 77.0], [14.0, 78.0], [14.1, 78.0], [14.2, 79.0], [14.3, 79.0], [14.4, 79.0], [14.5, 80.0], [14.6, 80.0], [14.7, 81.0], [14.8, 82.0], [14.9, 82.0], [15.0, 82.0], [15.1, 83.0], [15.2, 83.0], [15.3, 83.0], [15.4, 84.0], [15.5, 84.0], [15.6, 84.0], [15.7, 85.0], [15.8, 86.0], [15.9, 86.0], [16.0, 87.0], [16.1, 87.0], [16.2, 88.0], [16.3, 89.0], [16.4, 89.0], [16.5, 90.0], [16.6, 90.0], [16.7, 91.0], [16.8, 91.0], [16.9, 92.0], [17.0, 92.0], [17.1, 92.0], [17.2, 93.0], [17.3, 93.0], [17.4, 93.0], [17.5, 94.0], [17.6, 95.0], [17.7, 95.0], [17.8, 95.0], [17.9, 96.0], [18.0, 96.0], [18.1, 96.0], [18.2, 97.0], [18.3, 97.0], [18.4, 98.0], [18.5, 98.0], [18.6, 99.0], [18.7, 100.0], [18.8, 100.0], [18.9, 101.0], [19.0, 101.0], [19.1, 102.0], [19.2, 103.0], [19.3, 103.0], [19.4, 104.0], [19.5, 104.0], [19.6, 105.0], [19.7, 105.0], [19.8, 105.0], [19.9, 107.0], [20.0, 107.0], [20.1, 108.0], [20.2, 108.0], [20.3, 109.0], [20.4, 110.0], [20.5, 110.0], [20.6, 111.0], [20.7, 111.0], [20.8, 111.0], [20.9, 112.0], [21.0, 112.0], [21.1, 113.0], [21.2, 113.0], [21.3, 114.0], [21.4, 114.0], [21.5, 115.0], [21.6, 116.0], [21.7, 116.0], [21.8, 117.0], [21.9, 117.0], [22.0, 118.0], [22.1, 119.0], [22.2, 119.0], [22.3, 120.0], [22.4, 120.0], [22.5, 121.0], [22.6, 122.0], [22.7, 122.0], [22.8, 122.0], [22.9, 123.0], [23.0, 123.0], [23.1, 125.0], [23.2, 126.0], [23.3, 127.0], [23.4, 127.0], [23.5, 128.0], [23.6, 129.0], [23.7, 130.0], [23.8, 131.0], [23.9, 131.0], [24.0, 132.0], [24.1, 133.0], [24.2, 134.0], [24.3, 135.0], [24.4, 135.0], [24.5, 136.0], [24.6, 137.0], [24.7, 137.0], [24.8, 138.0], [24.9, 139.0], [25.0, 140.0], [25.1, 140.0], [25.2, 141.0], [25.3, 142.0], [25.4, 143.0], [25.5, 144.0], [25.6, 144.0], [25.7, 145.0], [25.8, 146.0], [25.9, 147.0], [26.0, 148.0], [26.1, 148.0], [26.2, 148.0], [26.3, 149.0], [26.4, 150.0], [26.5, 150.0], [26.6, 151.0], [26.7, 152.0], [26.8, 153.0], [26.9, 153.0], [27.0, 154.0], [27.1, 155.0], [27.2, 155.0], [27.3, 156.0], [27.4, 157.0], [27.5, 158.0], [27.6, 159.0], [27.7, 160.0], [27.8, 160.0], [27.9, 161.0], [28.0, 161.0], [28.1, 162.0], [28.2, 163.0], [28.3, 164.0], [28.4, 164.0], [28.5, 165.0], [28.6, 166.0], [28.7, 167.0], [28.8, 168.0], [28.9, 170.0], [29.0, 170.0], [29.1, 171.0], [29.2, 172.0], [29.3, 172.0], [29.4, 172.0], [29.5, 173.0], [29.6, 174.0], [29.7, 174.0], [29.8, 175.0], [29.9, 176.0], [30.0, 176.0], [30.1, 177.0], [30.2, 178.0], [30.3, 179.0], [30.4, 179.0], [30.5, 179.0], [30.6, 180.0], [30.7, 181.0], [30.8, 182.0], [30.9, 182.0], [31.0, 182.0], [31.1, 183.0], [31.2, 184.0], [31.3, 184.0], [31.4, 185.0], [31.5, 185.0], [31.6, 186.0], [31.7, 187.0], [31.8, 188.0], [31.9, 188.0], [32.0, 189.0], [32.1, 189.0], [32.2, 191.0], [32.3, 191.0], [32.4, 192.0], [32.5, 193.0], [32.6, 195.0], [32.7, 196.0], [32.8, 196.0], [32.9, 197.0], [33.0, 197.0], [33.1, 198.0], [33.2, 199.0], [33.3, 199.0], [33.4, 200.0], [33.5, 201.0], [33.6, 202.0], [33.7, 202.0], [33.8, 203.0], [33.9, 204.0], [34.0, 205.0], [34.1, 205.0], [34.2, 207.0], [34.3, 207.0], [34.4, 209.0], [34.5, 210.0], [34.6, 210.0], [34.7, 211.0], [34.8, 212.0], [34.9, 213.0], [35.0, 213.0], [35.1, 215.0], [35.2, 216.0], [35.3, 217.0], [35.4, 218.0], [35.5, 220.0], [35.6, 220.0], [35.7, 221.0], [35.8, 222.0], [35.9, 223.0], [36.0, 224.0], [36.1, 225.0], [36.2, 226.0], [36.3, 227.0], [36.4, 229.0], [36.5, 230.0], [36.6, 232.0], [36.7, 232.0], [36.8, 233.0], [36.9, 235.0], [37.0, 237.0], [37.1, 238.0], [37.2, 240.0], [37.3, 242.0], [37.4, 242.0], [37.5, 243.0], [37.6, 245.0], [37.7, 245.0], [37.8, 246.0], [37.9, 248.0], [38.0, 249.0], [38.1, 250.0], [38.2, 252.0], [38.3, 253.0], [38.4, 255.0], [38.5, 256.0], [38.6, 258.0], [38.7, 258.0], [38.8, 260.0], [38.9, 261.0], [39.0, 263.0], [39.1, 264.0], [39.2, 265.0], [39.3, 266.0], [39.4, 267.0], [39.5, 268.0], [39.6, 269.0], [39.7, 270.0], [39.8, 271.0], [39.9, 272.0], [40.0, 273.0], [40.1, 274.0], [40.2, 276.0], [40.3, 277.0], [40.4, 279.0], [40.5, 279.0], [40.6, 280.0], [40.7, 281.0], [40.8, 282.0], [40.9, 283.0], [41.0, 284.0], [41.1, 285.0], [41.2, 286.0], [41.3, 287.0], [41.4, 288.0], [41.5, 289.0], [41.6, 290.0], [41.7, 291.0], [41.8, 291.0], [41.9, 292.0], [42.0, 293.0], [42.1, 294.0], [42.2, 294.0], [42.3, 296.0], [42.4, 297.0], [42.5, 297.0], [42.6, 298.0], [42.7, 299.0], [42.8, 299.0], [42.9, 300.0], [43.0, 301.0], [43.1, 302.0], [43.2, 305.0], [43.3, 305.0], [43.4, 306.0], [43.5, 307.0], [43.6, 309.0], [43.7, 310.0], [43.8, 311.0], [43.9, 311.0], [44.0, 312.0], [44.1, 314.0], [44.2, 314.0], [44.3, 315.0], [44.4, 316.0], [44.5, 317.0], [44.6, 317.0], [44.7, 318.0], [44.8, 320.0], [44.9, 320.0], [45.0, 321.0], [45.1, 322.0], [45.2, 322.0], [45.3, 322.0], [45.4, 323.0], [45.5, 324.0], [45.6, 325.0], [45.7, 325.0], [45.8, 326.0], [45.9, 326.0], [46.0, 327.0], [46.1, 328.0], [46.2, 329.0], [46.3, 330.0], [46.4, 331.0], [46.5, 331.0], [46.6, 332.0], [46.7, 332.0], [46.8, 333.0], [46.9, 334.0], [47.0, 335.0], [47.1, 336.0], [47.2, 337.0], [47.3, 338.0], [47.4, 339.0], [47.5, 340.0], [47.6, 340.0], [47.7, 341.0], [47.8, 341.0], [47.9, 343.0], [48.0, 343.0], [48.1, 343.0], [48.2, 344.0], [48.3, 345.0], [48.4, 345.0], [48.5, 346.0], [48.6, 347.0], [48.7, 347.0], [48.8, 348.0], [48.9, 348.0], [49.0, 349.0], [49.1, 350.0], [49.2, 351.0], [49.3, 351.0], [49.4, 352.0], [49.5, 352.0], [49.6, 353.0], [49.7, 354.0], [49.8, 354.0], [49.9, 355.0], [50.0, 355.0], [50.1, 356.0], [50.2, 357.0], [50.3, 357.0], [50.4, 359.0], [50.5, 360.0], [50.6, 361.0], [50.7, 362.0], [50.8, 362.0], [50.9, 362.0], [51.0, 363.0], [51.1, 363.0], [51.2, 364.0], [51.3, 365.0], [51.4, 367.0], [51.5, 368.0], [51.6, 368.0], [51.7, 369.0], [51.8, 369.0], [51.9, 369.0], [52.0, 371.0], [52.1, 371.0], [52.2, 372.0], [52.3, 372.0], [52.4, 373.0], [52.5, 374.0], [52.6, 374.0], [52.7, 375.0], [52.8, 376.0], [52.9, 376.0], [53.0, 377.0], [53.1, 378.0], [53.2, 378.0], [53.3, 379.0], [53.4, 379.0], [53.5, 380.0], [53.6, 380.0], [53.7, 381.0], [53.8, 381.0], [53.9, 382.0], [54.0, 382.0], [54.1, 383.0], [54.2, 383.0], [54.3, 384.0], [54.4, 385.0], [54.5, 386.0], [54.6, 388.0], [54.7, 388.0], [54.8, 389.0], [54.9, 390.0], [55.0, 390.0], [55.1, 391.0], [55.2, 392.0], [55.3, 394.0], [55.4, 394.0], [55.5, 395.0], [55.6, 395.0], [55.7, 396.0], [55.8, 398.0], [55.9, 398.0], [56.0, 398.0], [56.1, 399.0], [56.2, 400.0], [56.3, 401.0], [56.4, 402.0], [56.5, 403.0], [56.6, 405.0], [56.7, 406.0], [56.8, 406.0], [56.9, 407.0], [57.0, 408.0], [57.1, 408.0], [57.2, 410.0], [57.3, 410.0], [57.4, 412.0], [57.5, 413.0], [57.6, 415.0], [57.7, 415.0], [57.8, 416.0], [57.9, 417.0], [58.0, 417.0], [58.1, 418.0], [58.2, 419.0], [58.3, 421.0], [58.4, 421.0], [58.5, 422.0], [58.6, 424.0], [58.7, 424.0], [58.8, 426.0], [58.9, 427.0], [59.0, 429.0], [59.1, 429.0], [59.2, 430.0], [59.3, 431.0], [59.4, 432.0], [59.5, 433.0], [59.6, 433.0], [59.7, 435.0], [59.8, 436.0], [59.9, 437.0], [60.0, 438.0], [60.1, 440.0], [60.2, 441.0], [60.3, 441.0], [60.4, 443.0], [60.5, 443.0], [60.6, 445.0], [60.7, 446.0], [60.8, 448.0], [60.9, 449.0], [61.0, 452.0], [61.1, 453.0], [61.2, 454.0], [61.3, 455.0], [61.4, 457.0], [61.5, 458.0], [61.6, 463.0], [61.7, 464.0], [61.8, 465.0], [61.9, 466.0], [62.0, 468.0], [62.1, 469.0], [62.2, 472.0], [62.3, 474.0], [62.4, 475.0], [62.5, 477.0], [62.6, 478.0], [62.7, 480.0], [62.8, 481.0], [62.9, 483.0], [63.0, 485.0], [63.1, 487.0], [63.2, 489.0], [63.3, 490.0], [63.4, 493.0], [63.5, 495.0], [63.6, 496.0], [63.7, 498.0], [63.8, 499.0], [63.9, 502.0], [64.0, 503.0], [64.1, 505.0], [64.2, 507.0], [64.3, 510.0], [64.4, 511.0], [64.5, 514.0], [64.6, 516.0], [64.7, 518.0], [64.8, 519.0], [64.9, 520.0], [65.0, 521.0], [65.1, 522.0], [65.2, 526.0], [65.3, 527.0], [65.4, 529.0], [65.5, 531.0], [65.6, 532.0], [65.7, 535.0], [65.8, 537.0], [65.9, 539.0], [66.0, 542.0], [66.1, 545.0], [66.2, 546.0], [66.3, 548.0], [66.4, 549.0], [66.5, 551.0], [66.6, 553.0], [66.7, 554.0], [66.8, 555.0], [66.9, 559.0], [67.0, 560.0], [67.1, 561.0], [67.2, 562.0], [67.3, 564.0], [67.4, 567.0], [67.5, 568.0], [67.6, 571.0], [67.7, 575.0], [67.8, 576.0], [67.9, 578.0], [68.0, 580.0], [68.1, 582.0], [68.2, 584.0], [68.3, 586.0], [68.4, 587.0], [68.5, 590.0], [68.6, 591.0], [68.7, 593.0], [68.8, 594.0], [68.9, 595.0], [69.0, 596.0], [69.1, 598.0], [69.2, 600.0], [69.3, 601.0], [69.4, 603.0], [69.5, 604.0], [69.6, 605.0], [69.7, 606.0], [69.8, 607.0], [69.9, 608.0], [70.0, 608.0], [70.1, 609.0], [70.2, 610.0], [70.3, 611.0], [70.4, 612.0], [70.5, 613.0], [70.6, 614.0], [70.7, 615.0], [70.8, 616.0], [70.9, 617.0], [71.0, 618.0], [71.1, 618.0], [71.2, 621.0], [71.3, 622.0], [71.4, 623.0], [71.5, 624.0], [71.6, 625.0], [71.7, 625.0], [71.8, 626.0], [71.9, 627.0], [72.0, 628.0], [72.1, 628.0], [72.2, 630.0], [72.3, 631.0], [72.4, 631.0], [72.5, 633.0], [72.6, 633.0], [72.7, 634.0], [72.8, 635.0], [72.9, 636.0], [73.0, 637.0], [73.1, 639.0], [73.2, 640.0], [73.3, 641.0], [73.4, 642.0], [73.5, 643.0], [73.6, 644.0], [73.7, 645.0], [73.8, 646.0], [73.9, 647.0], [74.0, 648.0], [74.1, 649.0], [74.2, 651.0], [74.3, 652.0], [74.4, 653.0], [74.5, 653.0], [74.6, 654.0], [74.7, 656.0], [74.8, 656.0], [74.9, 657.0], [75.0, 658.0], [75.1, 659.0], [75.2, 660.0], [75.3, 662.0], [75.4, 663.0], [75.5, 664.0], [75.6, 665.0], [75.7, 665.0], [75.8, 667.0], [75.9, 669.0], [76.0, 670.0], [76.1, 670.0], [76.2, 673.0], [76.3, 674.0], [76.4, 676.0], [76.5, 676.0], [76.6, 678.0], [76.7, 680.0], [76.8, 682.0], [76.9, 683.0], [77.0, 684.0], [77.1, 685.0], [77.2, 687.0], [77.3, 689.0], [77.4, 690.0], [77.5, 692.0], [77.6, 693.0], [77.7, 693.0], [77.8, 696.0], [77.9, 697.0], [78.0, 699.0], [78.1, 701.0], [78.2, 702.0], [78.3, 704.0], [78.4, 704.0], [78.5, 706.0], [78.6, 708.0], [78.7, 708.0], [78.8, 710.0], [78.9, 713.0], [79.0, 714.0], [79.1, 716.0], [79.2, 718.0], [79.3, 720.0], [79.4, 723.0], [79.5, 726.0], [79.6, 727.0], [79.7, 728.0], [79.8, 731.0], [79.9, 733.0], [80.0, 735.0], [80.1, 736.0], [80.2, 739.0], [80.3, 740.0], [80.4, 742.0], [80.5, 745.0], [80.6, 748.0], [80.7, 750.0], [80.8, 754.0], [80.9, 759.0], [81.0, 761.0], [81.1, 762.0], [81.2, 767.0], [81.3, 771.0], [81.4, 773.0], [81.5, 776.0], [81.6, 779.0], [81.7, 781.0], [81.8, 789.0], [81.9, 792.0], [82.0, 796.0], [82.1, 800.0], [82.2, 805.0], [82.3, 809.0], [82.4, 813.0], [82.5, 819.0], [82.6, 822.0], [82.7, 829.0], [82.8, 832.0], [82.9, 835.0], [83.0, 839.0], [83.1, 847.0], [83.2, 848.0], [83.3, 854.0], [83.4, 860.0], [83.5, 868.0], [83.6, 871.0], [83.7, 874.0], [83.8, 877.0], [83.9, 882.0], [84.0, 884.0], [84.1, 886.0], [84.2, 890.0], [84.3, 895.0], [84.4, 899.0], [84.5, 901.0], [84.6, 905.0], [84.7, 908.0], [84.8, 911.0], [84.9, 916.0], [85.0, 921.0], [85.1, 926.0], [85.2, 928.0], [85.3, 931.0], [85.4, 933.0], [85.5, 935.0], [85.6, 938.0], [85.7, 941.0], [85.8, 945.0], [85.9, 947.0], [86.0, 951.0], [86.1, 953.0], [86.2, 956.0], [86.3, 959.0], [86.4, 962.0], [86.5, 963.0], [86.6, 964.0], [86.7, 968.0], [86.8, 972.0], [86.9, 975.0], [87.0, 976.0], [87.1, 978.0], [87.2, 982.0], [87.3, 987.0], [87.4, 990.0], [87.5, 991.0], [87.6, 995.0], [87.7, 1000.0], [87.8, 1006.0], [87.9, 1013.0], [88.0, 1017.0], [88.1, 1020.0], [88.2, 1024.0], [88.3, 1028.0], [88.4, 1033.0], [88.5, 1036.0], [88.6, 1042.0], [88.7, 1052.0], [88.8, 1056.0], [88.9, 1059.0], [89.0, 1069.0], [89.1, 1073.0], [89.2, 1077.0], [89.3, 1085.0], [89.4, 1100.0], [89.5, 1117.0], [89.6, 1126.0], [89.7, 1135.0], [89.8, 1144.0], [89.9, 1148.0], [90.0, 1158.0], [90.1, 1167.0], [90.2, 1173.0], [90.3, 1179.0], [90.4, 1186.0], [90.5, 1190.0], [90.6, 1197.0], [90.7, 1200.0], [90.8, 1206.0], [90.9, 1208.0], [91.0, 1213.0], [91.1, 1222.0], [91.2, 1226.0], [91.3, 1229.0], [91.4, 1232.0], [91.5, 1236.0], [91.6, 1240.0], [91.7, 1245.0], [91.8, 1248.0], [91.9, 1250.0], [92.0, 1257.0], [92.1, 1265.0], [92.2, 1270.0], [92.3, 1276.0], [92.4, 1286.0], [92.5, 1291.0], [92.6, 1298.0], [92.7, 1304.0], [92.8, 1307.0], [92.9, 1312.0], [93.0, 1316.0], [93.1, 1322.0], [93.2, 1328.0], [93.3, 1336.0], [93.4, 1357.0], [93.5, 1390.0], [93.6, 1401.0], [93.7, 1411.0], [93.8, 1415.0], [93.9, 1449.0], [94.0, 1469.0], [94.1, 1490.0], [94.2, 1509.0], [94.3, 1539.0], [94.4, 1583.0], [94.5, 1614.0], [94.6, 1628.0], [94.7, 1678.0], [94.8, 1717.0], [94.9, 1760.0], [95.0, 1809.0], [95.1, 1863.0], [95.2, 1892.0], [95.3, 1958.0], [95.4, 2004.0], [95.5, 2075.0], [95.6, 2121.0], [95.7, 2165.0], [95.8, 2263.0], [95.9, 2318.0], [96.0, 2399.0], [96.1, 2598.0], [96.2, 2649.0], [96.3, 2690.0], [96.4, 2742.0], [96.5, 2779.0], [96.6, 2848.0], [96.7, 2962.0], [96.8, 3025.0], [96.9, 3078.0], [97.0, 3127.0], [97.1, 3234.0], [97.2, 3270.0], [97.3, 3345.0], [97.4, 3441.0], [97.5, 3540.0], [97.6, 3679.0], [97.7, 3822.0], [97.8, 3963.0], [97.9, 4021.0], [98.0, 4074.0], [98.1, 4174.0], [98.2, 4216.0], [98.3, 4613.0], [98.4, 5088.0], [98.5, 5572.0], [98.6, 5775.0], [98.7, 7134.0], [98.8, 8024.0], [98.9, 8281.0], [99.0, 8370.0], [99.1, 8534.0], [99.2, 8652.0], [99.3, 8932.0], [99.4, 10120.0], [99.5, 10734.0], [99.6, 10921.0], [99.7, 11002.0], [99.8, 11283.0], [99.9, 11585.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 970.0, "series": [{"data": [[0.0, 970.0], [600.0, 459.0], [700.0, 210.0], [800.0, 122.0], [900.0, 168.0], [1000.0, 89.0], [1100.0, 67.0], [1200.0, 103.0], [1300.0, 47.0], [1400.0, 29.0], [1500.0, 18.0], [1600.0, 14.0], [1700.0, 13.0], [1800.0, 12.0], [1900.0, 9.0], [2000.0, 8.0], [2100.0, 10.0], [2200.0, 7.0], [2300.0, 7.0], [2400.0, 3.0], [2500.0, 3.0], [2600.0, 9.0], [2700.0, 12.0], [2800.0, 5.0], [2900.0, 5.0], [3000.0, 10.0], [3100.0, 7.0], [3200.0, 11.0], [3300.0, 6.0], [3400.0, 6.0], [3500.0, 3.0], [3600.0, 3.0], [3700.0, 4.0], [3800.0, 3.0], [3900.0, 6.0], [4000.0, 9.0], [4300.0, 1.0], [4100.0, 7.0], [4200.0, 3.0], [4500.0, 2.0], [4600.0, 1.0], [4700.0, 1.0], [5000.0, 2.0], [4900.0, 2.0], [5300.0, 1.0], [5200.0, 2.0], [5500.0, 3.0], [5600.0, 2.0], [5400.0, 1.0], [5800.0, 1.0], [5700.0, 2.0], [5900.0, 1.0], [6100.0, 1.0], [7100.0, 2.0], [7300.0, 3.0], [7500.0, 1.0], [8100.0, 2.0], [8000.0, 2.0], [8300.0, 6.0], [8200.0, 3.0], [8400.0, 3.0], [8600.0, 3.0], [8500.0, 4.0], [8700.0, 2.0], [8900.0, 3.0], [9000.0, 1.0], [9500.0, 2.0], [10100.0, 1.0], [10600.0, 4.0], [10500.0, 1.0], [10700.0, 2.0], [10900.0, 5.0], [10800.0, 3.0], [11200.0, 1.0], [11000.0, 5.0], [11400.0, 1.0], [11300.0, 1.0], [11500.0, 3.0], [16300.0, 1.0], [16900.0, 1.0], [18900.0, 1.0], [21200.0, 1.0], [21800.0, 1.0], [100.0, 760.0], [200.0, 492.0], [300.0, 690.0], [400.0, 400.0], [500.0, 279.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 305.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3315.0, "series": [{"data": [[0.0, 3315.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1570.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 305.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.941406250000002, "minX": 1.60249752E12, "maxY": 10.0, "series": [{"data": [[1.60249776E12, 10.0], [1.60249782E12, 9.941406250000002], [1.60249764E12, 10.0], [1.6024977E12, 10.0], [1.60249752E12, 9.99749373433585], [1.60249758E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249782E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 481.0, "minX": 1.0, "maxY": 8370.0, "series": [{"data": [[8.0, 636.0], [4.0, 792.0], [2.0, 8370.0], [1.0, 8024.0], [9.0, 850.0], [10.0, 646.5882239382239], [5.0, 625.0], [6.0, 705.0], [3.0, 1169.0], [7.0, 481.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331403, 649.6368015414255]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5246.166666666667, "minX": 1.60249752E12, "maxY": 5306532.55, "series": [{"data": [[1.60249776E12, 5306532.55], [1.60249782E12, 3144212.8333333335], [1.60249764E12, 3791624.183333333], [1.6024977E12, 3873502.2666666666], [1.60249752E12, 2867323.3666666667], [1.60249758E12, 4658643.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60249776E12, 7033.15], [1.60249782E12, 6035.833333333333], [1.60249764E12, 6921.016666666666], [1.6024977E12, 8675.116666666667], [1.60249752E12, 6030.35], [1.60249758E12, 5246.166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249782E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 516.8182616330112, "minX": 1.60249752E12, "maxY": 886.578260869565, "series": [{"data": [[1.60249776E12, 667.2248908296942], [1.60249782E12, 640.6953125000007], [1.60249764E12, 694.8179749715599], [1.6024977E12, 516.8182616330112], [1.60249752E12, 572.9862155388469], [1.60249758E12, 886.578260869565]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249782E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 515.619841966637, "minX": 1.60249752E12, "maxY": 883.913043478261, "series": [{"data": [[1.60249776E12, 665.4814410480353], [1.60249782E12, 639.3763020833342], [1.60249764E12, 693.0068259385664], [1.6024977E12, 515.619841966637], [1.60249752E12, 571.3696741854633], [1.60249758E12, 883.913043478261]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249782E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010535557506584716, "minX": 1.60249752E12, "maxY": 0.10150375939849626, "series": [{"data": [[1.60249776E12, 0.012008733624454157], [1.60249782E12, 0.011718750000000005], [1.60249764E12, 0.01592718998862342], [1.6024977E12, 0.010535557506584716], [1.60249752E12, 0.10150375939849626], [1.60249758E12, 0.013043478260869561]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249782E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 22.0, "minX": 1.60249752E12, "maxY": 21822.0, "series": [{"data": [[1.60249776E12, 9041.0], [1.60249782E12, 21234.0], [1.60249764E12, 21822.0], [1.6024977E12, 16929.0], [1.60249752E12, 18999.0], [1.60249758E12, 11283.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60249776E12, 33.252999781370164], [1.60249782E12, 32.0], [1.60249764E12, 35.91999979019165], [1.6024977E12, 34.0], [1.60249752E12, 34.19099980950355], [1.60249758E12, 31.437999670505526]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60249776E12, 34.0], [1.60249782E12, 32.613100073337556], [1.60249764E12, 37.42400016784668], [1.6024977E12, 34.0], [1.60249752E12, 34.910100076198574], [1.60249758E12, 32.68180013179779]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60249776E12, 33.71149989068508], [1.60249782E12, 32.30549990832806], [1.60249764E12, 36.71999979019165], [1.6024977E12, 34.0], [1.60249752E12, 34.59049990475178], [1.60249758E12, 32.12899983525276]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60249776E12, 22.0], [1.60249782E12, 26.0], [1.60249764E12, 25.0], [1.6024977E12, 25.0], [1.60249752E12, 29.0], [1.60249758E12, 23.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60249776E12, 473.0], [1.60249782E12, 301.5], [1.60249764E12, 408.0], [1.6024977E12, 232.0], [1.60249752E12, 274.5], [1.60249758E12, 613.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249782E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 92.5, "minX": 1.0, "maxY": 1405.5, "series": [{"data": [[2.0, 1405.5], [32.0, 188.0], [34.0, 247.5], [35.0, 128.0], [37.0, 201.0], [36.0, 112.5], [38.0, 240.0], [39.0, 138.0], [42.0, 139.5], [44.0, 245.0], [45.0, 125.0], [47.0, 103.0], [46.0, 92.5], [3.0, 621.0], [53.0, 116.0], [54.0, 106.0], [56.0, 113.5], [4.0, 492.5], [5.0, 396.0], [6.0, 152.5], [7.0, 334.0], [8.0, 666.5], [9.0, 648.0], [10.0, 699.0], [11.0, 665.0], [12.0, 688.0], [13.0, 684.0], [14.0, 436.5], [15.0, 475.0], [16.0, 538.0], [1.0, 1169.0], [17.0, 515.0], [18.0, 455.5], [19.0, 405.0], [20.0, 390.5], [21.0, 345.0], [22.0, 369.0], [23.0, 324.0], [24.0, 307.0], [25.0, 361.0], [26.0, 325.5], [27.0, 283.0], [28.0, 296.0], [29.0, 247.0], [30.0, 174.5], [31.0, 222.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 56.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 91.5, "minX": 1.0, "maxY": 1404.5, "series": [{"data": [[2.0, 1404.5], [32.0, 187.0], [34.0, 246.0], [35.0, 127.0], [37.0, 201.0], [36.0, 111.5], [38.0, 240.0], [39.0, 137.0], [42.0, 138.0], [44.0, 245.0], [45.0, 124.0], [47.0, 103.0], [46.0, 91.5], [3.0, 618.0], [53.0, 115.0], [54.0, 106.0], [56.0, 112.5], [4.0, 491.5], [5.0, 395.0], [6.0, 151.5], [7.0, 332.5], [8.0, 662.0], [9.0, 642.0], [10.0, 696.0], [11.0, 661.0], [12.0, 684.5], [13.0, 683.5], [14.0, 435.0], [15.0, 474.0], [16.0, 537.0], [1.0, 1164.0], [17.0, 511.0], [18.0, 453.0], [19.0, 404.0], [20.0, 388.5], [21.0, 343.0], [22.0, 367.5], [23.0, 322.0], [24.0, 307.0], [25.0, 358.0], [26.0, 324.0], [27.0, 283.0], [28.0, 295.0], [29.0, 246.0], [30.0, 172.5], [31.0, 220.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 56.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.5, "minX": 1.60249752E12, "maxY": 18.983333333333334, "series": [{"data": [[1.60249776E12, 15.266666666666667], [1.60249782E12, 12.633333333333333], [1.60249764E12, 14.65], [1.6024977E12, 18.983333333333334], [1.60249752E12, 13.466666666666667], [1.60249758E12, 11.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249782E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.5, "minX": 1.60249752E12, "maxY": 18.983333333333334, "series": [{"data": [[1.60249776E12, 15.266666666666667], [1.60249782E12, 12.8], [1.60249764E12, 14.65], [1.6024977E12, 18.983333333333334], [1.60249752E12, 13.3], [1.60249758E12, 11.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249782E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.5, "minX": 1.60249752E12, "maxY": 18.983333333333334, "series": [{"data": [[1.60249776E12, 15.266666666666667], [1.60249782E12, 12.8], [1.60249764E12, 14.65], [1.6024977E12, 18.983333333333334], [1.60249752E12, 13.3], [1.60249758E12, 11.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249782E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.5, "minX": 1.60249752E12, "maxY": 18.983333333333334, "series": [{"data": [[1.60249776E12, 15.266666666666667], [1.60249782E12, 12.8], [1.60249764E12, 14.65], [1.6024977E12, 18.983333333333334], [1.60249752E12, 13.3], [1.60249758E12, 11.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249782E12, "title": "Total Transactions Per Second"}},
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

