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
        data: {"result": {"minY": 21.0, "minX": 0.0, "maxY": 21273.0, "series": [{"data": [[0.0, 21.0], [0.1, 26.0], [0.2, 28.0], [0.3, 29.0], [0.4, 30.0], [0.5, 31.0], [0.6, 32.0], [0.7, 32.0], [0.8, 33.0], [0.9, 33.0], [1.0, 34.0], [1.1, 34.0], [1.2, 34.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 37.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 39.0], [2.8, 39.0], [2.9, 39.0], [3.0, 39.0], [3.1, 40.0], [3.2, 40.0], [3.3, 40.0], [3.4, 40.0], [3.5, 41.0], [3.6, 41.0], [3.7, 41.0], [3.8, 41.0], [3.9, 42.0], [4.0, 42.0], [4.1, 42.0], [4.2, 43.0], [4.3, 43.0], [4.4, 43.0], [4.5, 43.0], [4.6, 44.0], [4.7, 44.0], [4.8, 44.0], [4.9, 44.0], [5.0, 45.0], [5.1, 45.0], [5.2, 45.0], [5.3, 46.0], [5.4, 46.0], [5.5, 46.0], [5.6, 46.0], [5.7, 47.0], [5.8, 47.0], [5.9, 47.0], [6.0, 47.0], [6.1, 48.0], [6.2, 48.0], [6.3, 48.0], [6.4, 48.0], [6.5, 49.0], [6.6, 49.0], [6.7, 49.0], [6.8, 49.0], [6.9, 50.0], [7.0, 50.0], [7.1, 50.0], [7.2, 50.0], [7.3, 51.0], [7.4, 51.0], [7.5, 51.0], [7.6, 51.0], [7.7, 51.0], [7.8, 52.0], [7.9, 52.0], [8.0, 52.0], [8.1, 53.0], [8.2, 53.0], [8.3, 53.0], [8.4, 54.0], [8.5, 54.0], [8.6, 54.0], [8.7, 55.0], [8.8, 55.0], [8.9, 55.0], [9.0, 56.0], [9.1, 56.0], [9.2, 57.0], [9.3, 57.0], [9.4, 58.0], [9.5, 58.0], [9.6, 58.0], [9.7, 59.0], [9.8, 59.0], [9.9, 59.0], [10.0, 60.0], [10.1, 60.0], [10.2, 60.0], [10.3, 61.0], [10.4, 62.0], [10.5, 62.0], [10.6, 63.0], [10.7, 63.0], [10.8, 63.0], [10.9, 64.0], [11.0, 64.0], [11.1, 64.0], [11.2, 65.0], [11.3, 65.0], [11.4, 65.0], [11.5, 66.0], [11.6, 66.0], [11.7, 67.0], [11.8, 67.0], [11.9, 67.0], [12.0, 67.0], [12.1, 67.0], [12.2, 68.0], [12.3, 68.0], [12.4, 69.0], [12.5, 69.0], [12.6, 70.0], [12.7, 70.0], [12.8, 71.0], [12.9, 72.0], [13.0, 72.0], [13.1, 72.0], [13.2, 73.0], [13.3, 73.0], [13.4, 73.0], [13.5, 74.0], [13.6, 74.0], [13.7, 74.0], [13.8, 75.0], [13.9, 75.0], [14.0, 76.0], [14.1, 76.0], [14.2, 76.0], [14.3, 77.0], [14.4, 77.0], [14.5, 78.0], [14.6, 78.0], [14.7, 78.0], [14.8, 79.0], [14.9, 79.0], [15.0, 79.0], [15.1, 80.0], [15.2, 81.0], [15.3, 81.0], [15.4, 82.0], [15.5, 82.0], [15.6, 83.0], [15.7, 83.0], [15.8, 84.0], [15.9, 84.0], [16.0, 85.0], [16.1, 85.0], [16.2, 85.0], [16.3, 86.0], [16.4, 86.0], [16.5, 87.0], [16.6, 87.0], [16.7, 88.0], [16.8, 89.0], [16.9, 90.0], [17.0, 91.0], [17.1, 91.0], [17.2, 92.0], [17.3, 92.0], [17.4, 93.0], [17.5, 93.0], [17.6, 94.0], [17.7, 94.0], [17.8, 94.0], [17.9, 95.0], [18.0, 95.0], [18.1, 96.0], [18.2, 97.0], [18.3, 97.0], [18.4, 98.0], [18.5, 98.0], [18.6, 98.0], [18.7, 99.0], [18.8, 100.0], [18.9, 101.0], [19.0, 101.0], [19.1, 101.0], [19.2, 102.0], [19.3, 102.0], [19.4, 103.0], [19.5, 104.0], [19.6, 105.0], [19.7, 105.0], [19.8, 105.0], [19.9, 106.0], [20.0, 106.0], [20.1, 107.0], [20.2, 107.0], [20.3, 108.0], [20.4, 108.0], [20.5, 109.0], [20.6, 109.0], [20.7, 110.0], [20.8, 111.0], [20.9, 111.0], [21.0, 112.0], [21.1, 113.0], [21.2, 113.0], [21.3, 113.0], [21.4, 114.0], [21.5, 115.0], [21.6, 115.0], [21.7, 116.0], [21.8, 117.0], [21.9, 117.0], [22.0, 118.0], [22.1, 119.0], [22.2, 120.0], [22.3, 120.0], [22.4, 121.0], [22.5, 122.0], [22.6, 122.0], [22.7, 123.0], [22.8, 124.0], [22.9, 125.0], [23.0, 125.0], [23.1, 126.0], [23.2, 127.0], [23.3, 128.0], [23.4, 128.0], [23.5, 129.0], [23.6, 130.0], [23.7, 131.0], [23.8, 132.0], [23.9, 132.0], [24.0, 133.0], [24.1, 134.0], [24.2, 134.0], [24.3, 135.0], [24.4, 135.0], [24.5, 136.0], [24.6, 136.0], [24.7, 137.0], [24.8, 138.0], [24.9, 139.0], [25.0, 140.0], [25.1, 141.0], [25.2, 142.0], [25.3, 143.0], [25.4, 143.0], [25.5, 145.0], [25.6, 145.0], [25.7, 146.0], [25.8, 146.0], [25.9, 147.0], [26.0, 148.0], [26.1, 148.0], [26.2, 149.0], [26.3, 150.0], [26.4, 151.0], [26.5, 151.0], [26.6, 152.0], [26.7, 152.0], [26.8, 154.0], [26.9, 155.0], [27.0, 155.0], [27.1, 157.0], [27.2, 157.0], [27.3, 158.0], [27.4, 159.0], [27.5, 159.0], [27.6, 160.0], [27.7, 161.0], [27.8, 162.0], [27.9, 163.0], [28.0, 164.0], [28.1, 164.0], [28.2, 164.0], [28.3, 165.0], [28.4, 166.0], [28.5, 167.0], [28.6, 168.0], [28.7, 169.0], [28.8, 170.0], [28.9, 170.0], [29.0, 172.0], [29.1, 172.0], [29.2, 174.0], [29.3, 174.0], [29.4, 175.0], [29.5, 176.0], [29.6, 176.0], [29.7, 176.0], [29.8, 178.0], [29.9, 178.0], [30.0, 179.0], [30.1, 179.0], [30.2, 180.0], [30.3, 181.0], [30.4, 181.0], [30.5, 182.0], [30.6, 183.0], [30.7, 183.0], [30.8, 184.0], [30.9, 185.0], [31.0, 186.0], [31.1, 186.0], [31.2, 186.0], [31.3, 187.0], [31.4, 188.0], [31.5, 188.0], [31.6, 189.0], [31.7, 190.0], [31.8, 190.0], [31.9, 191.0], [32.0, 192.0], [32.1, 193.0], [32.2, 194.0], [32.3, 194.0], [32.4, 195.0], [32.5, 196.0], [32.6, 197.0], [32.7, 198.0], [32.8, 199.0], [32.9, 200.0], [33.0, 201.0], [33.1, 202.0], [33.2, 202.0], [33.3, 203.0], [33.4, 204.0], [33.5, 205.0], [33.6, 206.0], [33.7, 206.0], [33.8, 207.0], [33.9, 208.0], [34.0, 209.0], [34.1, 210.0], [34.2, 211.0], [34.3, 212.0], [34.4, 213.0], [34.5, 214.0], [34.6, 215.0], [34.7, 215.0], [34.8, 216.0], [34.9, 217.0], [35.0, 219.0], [35.1, 219.0], [35.2, 221.0], [35.3, 222.0], [35.4, 223.0], [35.5, 224.0], [35.6, 225.0], [35.7, 226.0], [35.8, 227.0], [35.9, 228.0], [36.0, 230.0], [36.1, 231.0], [36.2, 232.0], [36.3, 232.0], [36.4, 233.0], [36.5, 235.0], [36.6, 236.0], [36.7, 236.0], [36.8, 239.0], [36.9, 240.0], [37.0, 242.0], [37.1, 243.0], [37.2, 244.0], [37.3, 245.0], [37.4, 246.0], [37.5, 247.0], [37.6, 250.0], [37.7, 250.0], [37.8, 251.0], [37.9, 251.0], [38.0, 252.0], [38.1, 253.0], [38.2, 255.0], [38.3, 256.0], [38.4, 257.0], [38.5, 258.0], [38.6, 258.0], [38.7, 259.0], [38.8, 261.0], [38.9, 262.0], [39.0, 263.0], [39.1, 263.0], [39.2, 265.0], [39.3, 266.0], [39.4, 267.0], [39.5, 268.0], [39.6, 268.0], [39.7, 270.0], [39.8, 271.0], [39.9, 272.0], [40.0, 274.0], [40.1, 274.0], [40.2, 275.0], [40.3, 275.0], [40.4, 276.0], [40.5, 277.0], [40.6, 278.0], [40.7, 279.0], [40.8, 280.0], [40.9, 281.0], [41.0, 282.0], [41.1, 283.0], [41.2, 285.0], [41.3, 285.0], [41.4, 286.0], [41.5, 287.0], [41.6, 288.0], [41.7, 288.0], [41.8, 290.0], [41.9, 290.0], [42.0, 291.0], [42.1, 292.0], [42.2, 292.0], [42.3, 293.0], [42.4, 294.0], [42.5, 296.0], [42.6, 297.0], [42.7, 298.0], [42.8, 299.0], [42.9, 299.0], [43.0, 301.0], [43.1, 303.0], [43.2, 303.0], [43.3, 304.0], [43.4, 306.0], [43.5, 306.0], [43.6, 307.0], [43.7, 308.0], [43.8, 310.0], [43.9, 310.0], [44.0, 311.0], [44.1, 312.0], [44.2, 312.0], [44.3, 313.0], [44.4, 314.0], [44.5, 315.0], [44.6, 316.0], [44.7, 316.0], [44.8, 317.0], [44.9, 317.0], [45.0, 318.0], [45.1, 319.0], [45.2, 320.0], [45.3, 321.0], [45.4, 322.0], [45.5, 322.0], [45.6, 323.0], [45.7, 324.0], [45.8, 325.0], [45.9, 325.0], [46.0, 326.0], [46.1, 326.0], [46.2, 327.0], [46.3, 327.0], [46.4, 328.0], [46.5, 329.0], [46.6, 329.0], [46.7, 330.0], [46.8, 330.0], [46.9, 331.0], [47.0, 332.0], [47.1, 332.0], [47.2, 333.0], [47.3, 334.0], [47.4, 334.0], [47.5, 335.0], [47.6, 336.0], [47.7, 336.0], [47.8, 337.0], [47.9, 338.0], [48.0, 339.0], [48.1, 340.0], [48.2, 341.0], [48.3, 341.0], [48.4, 342.0], [48.5, 342.0], [48.6, 343.0], [48.7, 343.0], [48.8, 344.0], [48.9, 345.0], [49.0, 346.0], [49.1, 347.0], [49.2, 348.0], [49.3, 348.0], [49.4, 349.0], [49.5, 350.0], [49.6, 351.0], [49.7, 352.0], [49.8, 352.0], [49.9, 353.0], [50.0, 353.0], [50.1, 353.0], [50.2, 354.0], [50.3, 354.0], [50.4, 355.0], [50.5, 355.0], [50.6, 356.0], [50.7, 356.0], [50.8, 357.0], [50.9, 357.0], [51.0, 358.0], [51.1, 359.0], [51.2, 359.0], [51.3, 360.0], [51.4, 360.0], [51.5, 361.0], [51.6, 362.0], [51.7, 363.0], [51.8, 363.0], [51.9, 363.0], [52.0, 364.0], [52.1, 364.0], [52.2, 365.0], [52.3, 366.0], [52.4, 367.0], [52.5, 368.0], [52.6, 368.0], [52.7, 369.0], [52.8, 370.0], [52.9, 371.0], [53.0, 371.0], [53.1, 372.0], [53.2, 372.0], [53.3, 373.0], [53.4, 374.0], [53.5, 374.0], [53.6, 375.0], [53.7, 376.0], [53.8, 377.0], [53.9, 377.0], [54.0, 378.0], [54.1, 379.0], [54.2, 379.0], [54.3, 380.0], [54.4, 381.0], [54.5, 382.0], [54.6, 382.0], [54.7, 383.0], [54.8, 384.0], [54.9, 385.0], [55.0, 386.0], [55.1, 387.0], [55.2, 388.0], [55.3, 388.0], [55.4, 389.0], [55.5, 390.0], [55.6, 390.0], [55.7, 391.0], [55.8, 391.0], [55.9, 392.0], [56.0, 393.0], [56.1, 394.0], [56.2, 394.0], [56.3, 395.0], [56.4, 396.0], [56.5, 397.0], [56.6, 398.0], [56.7, 398.0], [56.8, 399.0], [56.9, 400.0], [57.0, 401.0], [57.1, 401.0], [57.2, 402.0], [57.3, 402.0], [57.4, 403.0], [57.5, 404.0], [57.6, 405.0], [57.7, 406.0], [57.8, 407.0], [57.9, 408.0], [58.0, 409.0], [58.1, 410.0], [58.2, 411.0], [58.3, 412.0], [58.4, 413.0], [58.5, 414.0], [58.6, 416.0], [58.7, 417.0], [58.8, 417.0], [58.9, 418.0], [59.0, 419.0], [59.1, 420.0], [59.2, 421.0], [59.3, 423.0], [59.4, 424.0], [59.5, 426.0], [59.6, 427.0], [59.7, 428.0], [59.8, 429.0], [59.9, 430.0], [60.0, 433.0], [60.1, 435.0], [60.2, 437.0], [60.3, 439.0], [60.4, 440.0], [60.5, 442.0], [60.6, 443.0], [60.7, 444.0], [60.8, 445.0], [60.9, 447.0], [61.0, 449.0], [61.1, 451.0], [61.2, 452.0], [61.3, 454.0], [61.4, 454.0], [61.5, 455.0], [61.6, 457.0], [61.7, 459.0], [61.8, 460.0], [61.9, 461.0], [62.0, 463.0], [62.1, 465.0], [62.2, 467.0], [62.3, 468.0], [62.4, 470.0], [62.5, 471.0], [62.6, 473.0], [62.7, 475.0], [62.8, 478.0], [62.9, 479.0], [63.0, 481.0], [63.1, 482.0], [63.2, 484.0], [63.3, 485.0], [63.4, 488.0], [63.5, 489.0], [63.6, 490.0], [63.7, 492.0], [63.8, 494.0], [63.9, 495.0], [64.0, 501.0], [64.1, 502.0], [64.2, 503.0], [64.3, 504.0], [64.4, 505.0], [64.5, 506.0], [64.6, 507.0], [64.7, 509.0], [64.8, 512.0], [64.9, 514.0], [65.0, 515.0], [65.1, 518.0], [65.2, 520.0], [65.3, 521.0], [65.4, 523.0], [65.5, 524.0], [65.6, 526.0], [65.7, 527.0], [65.8, 529.0], [65.9, 531.0], [66.0, 534.0], [66.1, 537.0], [66.2, 539.0], [66.3, 541.0], [66.4, 542.0], [66.5, 544.0], [66.6, 545.0], [66.7, 546.0], [66.8, 550.0], [66.9, 551.0], [67.0, 552.0], [67.1, 556.0], [67.2, 561.0], [67.3, 562.0], [67.4, 566.0], [67.5, 570.0], [67.6, 573.0], [67.7, 575.0], [67.8, 577.0], [67.9, 578.0], [68.0, 580.0], [68.1, 584.0], [68.2, 587.0], [68.3, 588.0], [68.4, 589.0], [68.5, 591.0], [68.6, 594.0], [68.7, 595.0], [68.8, 596.0], [68.9, 597.0], [69.0, 598.0], [69.1, 599.0], [69.2, 600.0], [69.3, 600.0], [69.4, 602.0], [69.5, 603.0], [69.6, 604.0], [69.7, 605.0], [69.8, 605.0], [69.9, 606.0], [70.0, 608.0], [70.1, 610.0], [70.2, 612.0], [70.3, 613.0], [70.4, 613.0], [70.5, 614.0], [70.6, 615.0], [70.7, 616.0], [70.8, 617.0], [70.9, 618.0], [71.0, 619.0], [71.1, 621.0], [71.2, 622.0], [71.3, 623.0], [71.4, 624.0], [71.5, 624.0], [71.6, 626.0], [71.7, 627.0], [71.8, 627.0], [71.9, 629.0], [72.0, 630.0], [72.1, 632.0], [72.2, 633.0], [72.3, 633.0], [72.4, 634.0], [72.5, 635.0], [72.6, 635.0], [72.7, 637.0], [72.8, 639.0], [72.9, 640.0], [73.0, 640.0], [73.1, 640.0], [73.2, 643.0], [73.3, 644.0], [73.4, 645.0], [73.5, 647.0], [73.6, 648.0], [73.7, 650.0], [73.8, 652.0], [73.9, 652.0], [74.0, 653.0], [74.1, 654.0], [74.2, 655.0], [74.3, 657.0], [74.4, 658.0], [74.5, 659.0], [74.6, 660.0], [74.7, 661.0], [74.8, 662.0], [74.9, 663.0], [75.0, 665.0], [75.1, 666.0], [75.2, 667.0], [75.3, 668.0], [75.4, 670.0], [75.5, 671.0], [75.6, 671.0], [75.7, 673.0], [75.8, 676.0], [75.9, 677.0], [76.0, 678.0], [76.1, 679.0], [76.2, 680.0], [76.3, 680.0], [76.4, 683.0], [76.5, 685.0], [76.6, 686.0], [76.7, 688.0], [76.8, 688.0], [76.9, 690.0], [77.0, 692.0], [77.1, 693.0], [77.2, 694.0], [77.3, 695.0], [77.4, 697.0], [77.5, 698.0], [77.6, 700.0], [77.7, 701.0], [77.8, 702.0], [77.9, 704.0], [78.0, 705.0], [78.1, 707.0], [78.2, 708.0], [78.3, 709.0], [78.4, 710.0], [78.5, 712.0], [78.6, 713.0], [78.7, 714.0], [78.8, 715.0], [78.9, 716.0], [79.0, 717.0], [79.1, 720.0], [79.2, 722.0], [79.3, 723.0], [79.4, 727.0], [79.5, 728.0], [79.6, 731.0], [79.7, 733.0], [79.8, 735.0], [79.9, 737.0], [80.0, 739.0], [80.1, 741.0], [80.2, 744.0], [80.3, 748.0], [80.4, 752.0], [80.5, 754.0], [80.6, 757.0], [80.7, 759.0], [80.8, 762.0], [80.9, 764.0], [81.0, 769.0], [81.1, 772.0], [81.2, 777.0], [81.3, 782.0], [81.4, 787.0], [81.5, 789.0], [81.6, 797.0], [81.7, 801.0], [81.8, 803.0], [81.9, 806.0], [82.0, 811.0], [82.1, 814.0], [82.2, 820.0], [82.3, 823.0], [82.4, 829.0], [82.5, 831.0], [82.6, 835.0], [82.7, 839.0], [82.8, 843.0], [82.9, 850.0], [83.0, 855.0], [83.1, 860.0], [83.2, 865.0], [83.3, 871.0], [83.4, 878.0], [83.5, 882.0], [83.6, 883.0], [83.7, 888.0], [83.8, 891.0], [83.9, 892.0], [84.0, 895.0], [84.1, 897.0], [84.2, 901.0], [84.3, 903.0], [84.4, 905.0], [84.5, 909.0], [84.6, 910.0], [84.7, 913.0], [84.8, 918.0], [84.9, 919.0], [85.0, 921.0], [85.1, 926.0], [85.2, 927.0], [85.3, 929.0], [85.4, 932.0], [85.5, 933.0], [85.6, 936.0], [85.7, 937.0], [85.8, 939.0], [85.9, 940.0], [86.0, 942.0], [86.1, 944.0], [86.2, 946.0], [86.3, 951.0], [86.4, 953.0], [86.5, 955.0], [86.6, 956.0], [86.7, 958.0], [86.8, 961.0], [86.9, 962.0], [87.0, 963.0], [87.1, 966.0], [87.2, 969.0], [87.3, 970.0], [87.4, 972.0], [87.5, 973.0], [87.6, 975.0], [87.7, 980.0], [87.8, 980.0], [87.9, 983.0], [88.0, 985.0], [88.1, 988.0], [88.2, 992.0], [88.3, 997.0], [88.4, 998.0], [88.5, 1000.0], [88.6, 1006.0], [88.7, 1012.0], [88.8, 1014.0], [88.9, 1026.0], [89.0, 1031.0], [89.1, 1035.0], [89.2, 1044.0], [89.3, 1049.0], [89.4, 1056.0], [89.5, 1061.0], [89.6, 1069.0], [89.7, 1079.0], [89.8, 1085.0], [89.9, 1094.0], [90.0, 1106.0], [90.1, 1114.0], [90.2, 1129.0], [90.3, 1137.0], [90.4, 1148.0], [90.5, 1160.0], [90.6, 1169.0], [90.7, 1180.0], [90.8, 1184.0], [90.9, 1191.0], [91.0, 1197.0], [91.1, 1204.0], [91.2, 1208.0], [91.3, 1218.0], [91.4, 1222.0], [91.5, 1224.0], [91.6, 1233.0], [91.7, 1236.0], [91.8, 1244.0], [91.9, 1245.0], [92.0, 1249.0], [92.1, 1255.0], [92.2, 1259.0], [92.3, 1264.0], [92.4, 1270.0], [92.5, 1283.0], [92.6, 1286.0], [92.7, 1295.0], [92.8, 1303.0], [92.9, 1314.0], [93.0, 1325.0], [93.1, 1333.0], [93.2, 1354.0], [93.3, 1373.0], [93.4, 1397.0], [93.5, 1407.0], [93.6, 1413.0], [93.7, 1433.0], [93.8, 1438.0], [93.9, 1474.0], [94.0, 1494.0], [94.1, 1537.0], [94.2, 1563.0], [94.3, 1572.0], [94.4, 1635.0], [94.5, 1685.0], [94.6, 1713.0], [94.7, 1750.0], [94.8, 1812.0], [94.9, 1873.0], [95.0, 1922.0], [95.1, 2000.0], [95.2, 2039.0], [95.3, 2128.0], [95.4, 2166.0], [95.5, 2240.0], [95.6, 2310.0], [95.7, 2346.0], [95.8, 2403.0], [95.9, 2505.0], [96.0, 2589.0], [96.1, 2683.0], [96.2, 2724.0], [96.3, 2785.0], [96.4, 2845.0], [96.5, 2918.0], [96.6, 2944.0], [96.7, 2967.0], [96.8, 3035.0], [96.9, 3079.0], [97.0, 3112.0], [97.1, 3175.0], [97.2, 3275.0], [97.3, 3322.0], [97.4, 3492.0], [97.5, 3593.0], [97.6, 3651.0], [97.7, 3806.0], [97.8, 3978.0], [97.9, 4045.0], [98.0, 4101.0], [98.1, 4128.0], [98.2, 4219.0], [98.3, 4605.0], [98.4, 5245.0], [98.5, 5487.0], [98.6, 5723.0], [98.7, 6739.0], [98.8, 7943.0], [98.9, 8329.0], [99.0, 8389.0], [99.1, 8534.0], [99.2, 8626.0], [99.3, 8911.0], [99.4, 9328.0], [99.5, 10828.0], [99.6, 10935.0], [99.7, 11090.0], [99.8, 11213.0], [99.9, 16321.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 972.0, "series": [{"data": [[0.0, 972.0], [600.0, 438.0], [700.0, 214.0], [800.0, 126.0], [900.0, 227.0], [1000.0, 73.0], [1100.0, 60.0], [1200.0, 88.0], [1300.0, 35.0], [1400.0, 31.0], [1500.0, 17.0], [1600.0, 11.0], [1700.0, 12.0], [1800.0, 9.0], [1900.0, 6.0], [2000.0, 10.0], [2100.0, 7.0], [2200.0, 9.0], [2300.0, 11.0], [2400.0, 5.0], [2500.0, 6.0], [2600.0, 7.0], [2700.0, 9.0], [2800.0, 8.0], [2900.0, 15.0], [3000.0, 12.0], [3100.0, 6.0], [3200.0, 7.0], [3300.0, 6.0], [3400.0, 3.0], [3500.0, 6.0], [3700.0, 2.0], [3600.0, 6.0], [3800.0, 3.0], [3900.0, 3.0], [4000.0, 10.0], [4100.0, 8.0], [4200.0, 4.0], [4400.0, 1.0], [4500.0, 2.0], [4600.0, 1.0], [4700.0, 1.0], [4900.0, 3.0], [5200.0, 2.0], [5300.0, 3.0], [5400.0, 2.0], [5500.0, 3.0], [5600.0, 1.0], [5800.0, 1.0], [5700.0, 2.0], [6000.0, 1.0], [6100.0, 1.0], [6800.0, 1.0], [6900.0, 1.0], [6700.0, 1.0], [7300.0, 1.0], [7900.0, 3.0], [8000.0, 1.0], [8100.0, 1.0], [8300.0, 9.0], [8400.0, 2.0], [8700.0, 1.0], [8500.0, 5.0], [8600.0, 2.0], [9200.0, 1.0], [8800.0, 3.0], [9000.0, 1.0], [8900.0, 3.0], [9300.0, 1.0], [9900.0, 1.0], [10700.0, 3.0], [10400.0, 1.0], [10900.0, 6.0], [11200.0, 3.0], [10800.0, 3.0], [11000.0, 2.0], [11100.0, 4.0], [11300.0, 1.0], [16300.0, 2.0], [17100.0, 1.0], [19000.0, 1.0], [21200.0, 2.0], [21100.0, 1.0], [100.0, 734.0], [200.0, 521.0], [300.0, 725.0], [400.0, 369.0], [500.0, 267.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 310.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3321.0, "series": [{"data": [[0.0, 3321.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1559.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 310.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.951612903225808, "minX": 1.60404918E12, "maxY": 10.0, "series": [{"data": [[1.60404936E12, 10.0], [1.60404942E12, 10.0], [1.60404924E12, 10.0], [1.6040493E12, 10.0], [1.60404918E12, 10.0], [1.60404948E12, 9.951612903225808]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404948E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 503.0, "minX": 1.0, "maxY": 8578.0, "series": [{"data": [[8.0, 799.0], [4.0, 772.0], [2.0, 8578.0], [1.0, 8416.0], [9.0, 503.0], [10.0, 649.9164254005008], [5.0, 672.0], [6.0, 727.0], [3.0, 805.0], [7.0, 811.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 653.0443159922918]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4894.75, "minX": 1.60404918E12, "maxY": 5014669.066666666, "series": [{"data": [[1.60404936E12, 4110705.8], [1.60404942E12, 5014669.066666666], [1.60404924E12, 4349686.566666666], [1.6040493E12, 3597480.15], [1.60404918E12, 2818510.8666666667], [1.60404948E12, 3751391.216666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60404936E12, 9675.116666666667], [1.60404942E12, 6191.833333333333], [1.60404924E12, 4894.75], [1.6040493E12, 6056.433333333333], [1.60404918E12, 5805.9], [1.60404948E12, 7317.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404948E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 458.1302288871352, "minX": 1.60404918E12, "maxY": 955.9148606811134, "series": [{"data": [[1.60404936E12, 458.1302288871352], [1.60404942E12, 735.0123456790135], [1.60404924E12, 955.9148606811134], [1.6040493E12, 780.4557291666666], [1.60404918E12, 524.0208062418723], [1.60404948E12, 638.2860215053764]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404948E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 456.99131807419104, "minX": 1.60404918E12, "maxY": 953.1687306501542, "series": [{"data": [[1.60404936E12, 456.99131807419104], [1.60404942E12, 732.956790123457], [1.60404924E12, 953.1687306501542], [1.6040493E12, 778.5234374999992], [1.60404918E12, 522.3966189856953], [1.60404948E12, 636.8537634408596]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404948E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008602150537634405, "minX": 1.60404918E12, "maxY": 0.14044213263979188, "series": [{"data": [[1.60404936E12, 0.011838989739542215], [1.60404942E12, 0.019753086419753107], [1.60404924E12, 0.023219814241486073], [1.6040493E12, 0.016927083333333343], [1.60404918E12, 0.14044213263979188], [1.60404948E12, 0.008602150537634405]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404948E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 21.0, "minX": 1.60404918E12, "maxY": 21273.0, "series": [{"data": [[1.60404936E12, 16321.0], [1.60404942E12, 8933.0], [1.60404924E12, 11324.0], [1.6040493E12, 21246.0], [1.60404918E12, 19075.0], [1.60404948E12, 21273.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60404936E12, 33.0], [1.60404942E12, 31.0], [1.60404924E12, 35.82299984574318], [1.6040493E12, 35.0], [1.60404918E12, 33.92999981641769], [1.60404948E12, 30.757999556064608]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60404936E12, 33.0], [1.60404942E12, 31.02890007734299], [1.60404924E12, 36.0], [1.6040493E12, 36.22620014667511], [1.60404918E12, 34.0], [1.60404948E12, 32.21690008878708]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60404936E12, 33.0], [1.60404942E12, 31.0], [1.60404924E12, 36.0], [1.6040493E12, 35.61099981665611], [1.60404918E12, 34.0], [1.60404948E12, 31.6889997780323]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60404936E12, 28.0], [1.60404942E12, 21.0], [1.60404924E12, 27.0], [1.6040493E12, 26.0], [1.60404918E12, 30.0], [1.60404948E12, 21.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60404936E12, 224.0], [1.60404942E12, 577.5], [1.60404924E12, 639.5], [1.6040493E12, 426.0], [1.60404918E12, 290.0], [1.60404948E12, 330.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404948E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 67.0, "minX": 1.0, "maxY": 4219.0, "series": [{"data": [[33.0, 201.0], [32.0, 183.0], [2.0, 2950.0], [34.0, 171.0], [35.0, 67.0], [36.0, 253.0], [37.0, 113.0], [39.0, 122.0], [41.0, 166.5], [42.0, 93.0], [46.0, 124.5], [47.0, 117.0], [3.0, 613.5], [54.0, 112.0], [4.0, 781.5], [5.0, 439.0], [6.0, 187.0], [7.0, 427.0], [8.0, 555.0], [9.0, 598.5], [10.0, 644.5], [11.0, 632.0], [12.0, 650.0], [13.0, 612.0], [14.0, 614.0], [15.0, 586.0], [1.0, 4219.0], [16.0, 594.5], [17.0, 502.0], [18.0, 415.5], [19.0, 424.0], [20.0, 390.5], [21.0, 354.0], [22.0, 346.0], [23.0, 360.0], [24.0, 311.5], [25.0, 318.0], [26.0, 302.0], [27.0, 291.5], [28.0, 320.0], [29.0, 236.5], [30.0, 196.0], [31.0, 221.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 54.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 66.0, "minX": 1.0, "maxY": 4218.0, "series": [{"data": [[33.0, 200.0], [32.0, 182.5], [2.0, 2948.0], [34.0, 171.0], [35.0, 66.0], [36.0, 252.5], [37.0, 112.0], [39.0, 121.0], [41.0, 166.0], [42.0, 91.5], [46.0, 123.5], [47.0, 116.0], [3.0, 608.0], [54.0, 111.0], [4.0, 780.5], [5.0, 437.5], [6.0, 186.0], [7.0, 425.0], [8.0, 553.5], [9.0, 594.5], [10.0, 635.0], [11.0, 629.0], [12.0, 645.5], [13.0, 609.0], [14.0, 610.5], [15.0, 577.5], [1.0, 4218.0], [16.0, 591.5], [17.0, 501.0], [18.0, 412.5], [19.0, 424.0], [20.0, 389.5], [21.0, 349.0], [22.0, 344.5], [23.0, 360.0], [24.0, 311.0], [25.0, 317.5], [26.0, 301.0], [27.0, 290.5], [28.0, 319.5], [29.0, 236.0], [30.0, 196.0], [31.0, 220.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 54.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.766666666666667, "minX": 1.60404918E12, "maxY": 21.116666666666667, "series": [{"data": [[1.60404936E12, 21.116666666666667], [1.60404942E12, 13.5], [1.60404924E12, 10.766666666666667], [1.6040493E12, 12.8], [1.60404918E12, 12.983333333333333], [1.60404948E12, 15.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404948E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.766666666666667, "minX": 1.60404918E12, "maxY": 21.116666666666667, "series": [{"data": [[1.60404936E12, 21.116666666666667], [1.60404942E12, 13.5], [1.60404924E12, 10.766666666666667], [1.6040493E12, 12.8], [1.60404918E12, 12.816666666666666], [1.60404948E12, 15.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404948E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.766666666666667, "minX": 1.60404918E12, "maxY": 21.116666666666667, "series": [{"data": [[1.60404936E12, 21.116666666666667], [1.60404942E12, 13.5], [1.60404924E12, 10.766666666666667], [1.6040493E12, 12.8], [1.60404918E12, 12.816666666666666], [1.60404948E12, 15.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404948E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.766666666666667, "minX": 1.60404918E12, "maxY": 21.116666666666667, "series": [{"data": [[1.60404936E12, 21.116666666666667], [1.60404942E12, 13.5], [1.60404924E12, 10.766666666666667], [1.6040493E12, 12.8], [1.60404918E12, 12.816666666666666], [1.60404948E12, 15.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404948E12, "title": "Total Transactions Per Second"}},
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

