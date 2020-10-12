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
        data: {"result": {"minY": 21.0, "minX": 0.0, "maxY": 21601.0, "series": [{"data": [[0.0, 21.0], [0.1, 25.0], [0.2, 26.0], [0.3, 27.0], [0.4, 29.0], [0.5, 30.0], [0.6, 31.0], [0.7, 32.0], [0.8, 32.0], [0.9, 33.0], [1.0, 33.0], [1.1, 34.0], [1.2, 34.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 37.0], [2.1, 37.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 39.0], [2.6, 39.0], [2.7, 40.0], [2.8, 40.0], [2.9, 40.0], [3.0, 40.0], [3.1, 41.0], [3.2, 41.0], [3.3, 41.0], [3.4, 42.0], [3.5, 42.0], [3.6, 43.0], [3.7, 43.0], [3.8, 43.0], [3.9, 44.0], [4.0, 44.0], [4.1, 44.0], [4.2, 45.0], [4.3, 45.0], [4.4, 45.0], [4.5, 46.0], [4.6, 46.0], [4.7, 46.0], [4.8, 47.0], [4.9, 47.0], [5.0, 48.0], [5.1, 48.0], [5.2, 48.0], [5.3, 48.0], [5.4, 49.0], [5.5, 49.0], [5.6, 49.0], [5.7, 50.0], [5.8, 50.0], [5.9, 50.0], [6.0, 51.0], [6.1, 51.0], [6.2, 51.0], [6.3, 51.0], [6.4, 52.0], [6.5, 52.0], [6.6, 52.0], [6.7, 53.0], [6.8, 53.0], [6.9, 53.0], [7.0, 53.0], [7.1, 54.0], [7.2, 54.0], [7.3, 55.0], [7.4, 55.0], [7.5, 56.0], [7.6, 56.0], [7.7, 56.0], [7.8, 56.0], [7.9, 57.0], [8.0, 58.0], [8.1, 58.0], [8.2, 58.0], [8.3, 59.0], [8.4, 59.0], [8.5, 60.0], [8.6, 61.0], [8.7, 61.0], [8.8, 61.0], [8.9, 61.0], [9.0, 62.0], [9.1, 62.0], [9.2, 63.0], [9.3, 64.0], [9.4, 64.0], [9.5, 64.0], [9.6, 65.0], [9.7, 66.0], [9.8, 66.0], [9.9, 67.0], [10.0, 67.0], [10.1, 67.0], [10.2, 68.0], [10.3, 68.0], [10.4, 69.0], [10.5, 70.0], [10.6, 71.0], [10.7, 71.0], [10.8, 71.0], [10.9, 72.0], [11.0, 72.0], [11.1, 72.0], [11.2, 72.0], [11.3, 73.0], [11.4, 73.0], [11.5, 74.0], [11.6, 74.0], [11.7, 75.0], [11.8, 75.0], [11.9, 75.0], [12.0, 76.0], [12.1, 76.0], [12.2, 77.0], [12.3, 77.0], [12.4, 77.0], [12.5, 78.0], [12.6, 79.0], [12.7, 79.0], [12.8, 80.0], [12.9, 80.0], [13.0, 81.0], [13.1, 81.0], [13.2, 82.0], [13.3, 82.0], [13.4, 83.0], [13.5, 84.0], [13.6, 84.0], [13.7, 85.0], [13.8, 85.0], [13.9, 85.0], [14.0, 86.0], [14.1, 86.0], [14.2, 87.0], [14.3, 87.0], [14.4, 88.0], [14.5, 88.0], [14.6, 89.0], [14.7, 89.0], [14.8, 90.0], [14.9, 90.0], [15.0, 91.0], [15.1, 91.0], [15.2, 92.0], [15.3, 92.0], [15.4, 93.0], [15.5, 93.0], [15.6, 94.0], [15.7, 94.0], [15.8, 95.0], [15.9, 96.0], [16.0, 96.0], [16.1, 96.0], [16.2, 97.0], [16.3, 97.0], [16.4, 98.0], [16.5, 98.0], [16.6, 99.0], [16.7, 99.0], [16.8, 100.0], [16.9, 101.0], [17.0, 101.0], [17.1, 102.0], [17.2, 102.0], [17.3, 103.0], [17.4, 103.0], [17.5, 104.0], [17.6, 104.0], [17.7, 105.0], [17.8, 105.0], [17.9, 106.0], [18.0, 106.0], [18.1, 107.0], [18.2, 107.0], [18.3, 108.0], [18.4, 109.0], [18.5, 110.0], [18.6, 110.0], [18.7, 111.0], [18.8, 112.0], [18.9, 112.0], [19.0, 113.0], [19.1, 114.0], [19.2, 115.0], [19.3, 115.0], [19.4, 116.0], [19.5, 117.0], [19.6, 118.0], [19.7, 119.0], [19.8, 119.0], [19.9, 119.0], [20.0, 120.0], [20.1, 120.0], [20.2, 121.0], [20.3, 121.0], [20.4, 122.0], [20.5, 123.0], [20.6, 124.0], [20.7, 125.0], [20.8, 126.0], [20.9, 127.0], [21.0, 127.0], [21.1, 128.0], [21.2, 128.0], [21.3, 129.0], [21.4, 130.0], [21.5, 130.0], [21.6, 131.0], [21.7, 131.0], [21.8, 132.0], [21.9, 132.0], [22.0, 133.0], [22.1, 133.0], [22.2, 134.0], [22.3, 135.0], [22.4, 136.0], [22.5, 136.0], [22.6, 137.0], [22.7, 137.0], [22.8, 139.0], [22.9, 139.0], [23.0, 140.0], [23.1, 140.0], [23.2, 141.0], [23.3, 141.0], [23.4, 143.0], [23.5, 143.0], [23.6, 144.0], [23.7, 144.0], [23.8, 145.0], [23.9, 145.0], [24.0, 146.0], [24.1, 146.0], [24.2, 146.0], [24.3, 147.0], [24.4, 148.0], [24.5, 149.0], [24.6, 149.0], [24.7, 150.0], [24.8, 151.0], [24.9, 152.0], [25.0, 153.0], [25.1, 153.0], [25.2, 154.0], [25.3, 155.0], [25.4, 156.0], [25.5, 157.0], [25.6, 157.0], [25.7, 158.0], [25.8, 158.0], [25.9, 159.0], [26.0, 160.0], [26.1, 160.0], [26.2, 162.0], [26.3, 163.0], [26.4, 163.0], [26.5, 164.0], [26.6, 165.0], [26.7, 165.0], [26.8, 166.0], [26.9, 167.0], [27.0, 168.0], [27.1, 169.0], [27.2, 169.0], [27.3, 169.0], [27.4, 170.0], [27.5, 171.0], [27.6, 172.0], [27.7, 172.0], [27.8, 172.0], [27.9, 173.0], [28.0, 174.0], [28.1, 175.0], [28.2, 176.0], [28.3, 177.0], [28.4, 178.0], [28.5, 178.0], [28.6, 179.0], [28.7, 180.0], [28.8, 181.0], [28.9, 181.0], [29.0, 181.0], [29.1, 182.0], [29.2, 183.0], [29.3, 184.0], [29.4, 184.0], [29.5, 185.0], [29.6, 186.0], [29.7, 187.0], [29.8, 187.0], [29.9, 188.0], [30.0, 189.0], [30.1, 190.0], [30.2, 190.0], [30.3, 191.0], [30.4, 193.0], [30.5, 194.0], [30.6, 195.0], [30.7, 197.0], [30.8, 197.0], [30.9, 198.0], [31.0, 199.0], [31.1, 199.0], [31.2, 200.0], [31.3, 201.0], [31.4, 201.0], [31.5, 202.0], [31.6, 203.0], [31.7, 204.0], [31.8, 204.0], [31.9, 205.0], [32.0, 206.0], [32.1, 207.0], [32.2, 208.0], [32.3, 209.0], [32.4, 210.0], [32.5, 211.0], [32.6, 211.0], [32.7, 213.0], [32.8, 213.0], [32.9, 214.0], [33.0, 215.0], [33.1, 216.0], [33.2, 217.0], [33.3, 218.0], [33.4, 219.0], [33.5, 220.0], [33.6, 221.0], [33.7, 223.0], [33.8, 224.0], [33.9, 224.0], [34.0, 226.0], [34.1, 227.0], [34.2, 228.0], [34.3, 228.0], [34.4, 230.0], [34.5, 231.0], [34.6, 232.0], [34.7, 233.0], [34.8, 235.0], [34.9, 237.0], [35.0, 238.0], [35.1, 240.0], [35.2, 240.0], [35.3, 242.0], [35.4, 243.0], [35.5, 245.0], [35.6, 246.0], [35.7, 247.0], [35.8, 249.0], [35.9, 249.0], [36.0, 250.0], [36.1, 251.0], [36.2, 252.0], [36.3, 253.0], [36.4, 254.0], [36.5, 255.0], [36.6, 256.0], [36.7, 258.0], [36.8, 259.0], [36.9, 260.0], [37.0, 261.0], [37.1, 262.0], [37.2, 263.0], [37.3, 264.0], [37.4, 265.0], [37.5, 266.0], [37.6, 267.0], [37.7, 268.0], [37.8, 269.0], [37.9, 270.0], [38.0, 271.0], [38.1, 273.0], [38.2, 273.0], [38.3, 274.0], [38.4, 274.0], [38.5, 276.0], [38.6, 276.0], [38.7, 277.0], [38.8, 278.0], [38.9, 279.0], [39.0, 280.0], [39.1, 281.0], [39.2, 281.0], [39.3, 282.0], [39.4, 282.0], [39.5, 283.0], [39.6, 285.0], [39.7, 286.0], [39.8, 287.0], [39.9, 289.0], [40.0, 289.0], [40.1, 291.0], [40.2, 293.0], [40.3, 295.0], [40.4, 296.0], [40.5, 297.0], [40.6, 298.0], [40.7, 299.0], [40.8, 300.0], [40.9, 300.0], [41.0, 301.0], [41.1, 302.0], [41.2, 302.0], [41.3, 303.0], [41.4, 304.0], [41.5, 305.0], [41.6, 307.0], [41.7, 307.0], [41.8, 308.0], [41.9, 309.0], [42.0, 310.0], [42.1, 311.0], [42.2, 312.0], [42.3, 314.0], [42.4, 315.0], [42.5, 316.0], [42.6, 317.0], [42.7, 317.0], [42.8, 319.0], [42.9, 320.0], [43.0, 320.0], [43.1, 322.0], [43.2, 322.0], [43.3, 323.0], [43.4, 324.0], [43.5, 324.0], [43.6, 325.0], [43.7, 327.0], [43.8, 327.0], [43.9, 327.0], [44.0, 328.0], [44.1, 328.0], [44.2, 329.0], [44.3, 329.0], [44.4, 329.0], [44.5, 331.0], [44.6, 331.0], [44.7, 332.0], [44.8, 333.0], [44.9, 333.0], [45.0, 334.0], [45.1, 335.0], [45.2, 335.0], [45.3, 336.0], [45.4, 336.0], [45.5, 337.0], [45.6, 337.0], [45.7, 338.0], [45.8, 339.0], [45.9, 339.0], [46.0, 339.0], [46.1, 340.0], [46.2, 340.0], [46.3, 341.0], [46.4, 342.0], [46.5, 342.0], [46.6, 343.0], [46.7, 344.0], [46.8, 344.0], [46.9, 345.0], [47.0, 346.0], [47.1, 346.0], [47.2, 347.0], [47.3, 347.0], [47.4, 348.0], [47.5, 349.0], [47.6, 350.0], [47.7, 350.0], [47.8, 351.0], [47.9, 353.0], [48.0, 354.0], [48.1, 355.0], [48.2, 355.0], [48.3, 355.0], [48.4, 356.0], [48.5, 357.0], [48.6, 357.0], [48.7, 358.0], [48.8, 359.0], [48.9, 359.0], [49.0, 360.0], [49.1, 361.0], [49.2, 362.0], [49.3, 362.0], [49.4, 363.0], [49.5, 364.0], [49.6, 365.0], [49.7, 365.0], [49.8, 366.0], [49.9, 367.0], [50.0, 369.0], [50.1, 370.0], [50.2, 370.0], [50.3, 370.0], [50.4, 371.0], [50.5, 372.0], [50.6, 373.0], [50.7, 374.0], [50.8, 374.0], [50.9, 375.0], [51.0, 376.0], [51.1, 377.0], [51.2, 377.0], [51.3, 378.0], [51.4, 378.0], [51.5, 379.0], [51.6, 380.0], [51.7, 380.0], [51.8, 381.0], [51.9, 381.0], [52.0, 382.0], [52.1, 382.0], [52.2, 383.0], [52.3, 384.0], [52.4, 385.0], [52.5, 386.0], [52.6, 387.0], [52.7, 387.0], [52.8, 388.0], [52.9, 389.0], [53.0, 390.0], [53.1, 391.0], [53.2, 391.0], [53.3, 392.0], [53.4, 393.0], [53.5, 394.0], [53.6, 394.0], [53.7, 395.0], [53.8, 395.0], [53.9, 396.0], [54.0, 396.0], [54.1, 397.0], [54.2, 397.0], [54.3, 398.0], [54.4, 399.0], [54.5, 401.0], [54.6, 402.0], [54.7, 402.0], [54.8, 402.0], [54.9, 403.0], [55.0, 404.0], [55.1, 405.0], [55.2, 406.0], [55.3, 408.0], [55.4, 408.0], [55.5, 409.0], [55.6, 410.0], [55.7, 410.0], [55.8, 412.0], [55.9, 413.0], [56.0, 414.0], [56.1, 414.0], [56.2, 415.0], [56.3, 416.0], [56.4, 417.0], [56.5, 418.0], [56.6, 419.0], [56.7, 420.0], [56.8, 421.0], [56.9, 422.0], [57.0, 424.0], [57.1, 425.0], [57.2, 425.0], [57.3, 427.0], [57.4, 428.0], [57.5, 430.0], [57.6, 431.0], [57.7, 432.0], [57.8, 433.0], [57.9, 434.0], [58.0, 434.0], [58.1, 436.0], [58.2, 437.0], [58.3, 438.0], [58.4, 438.0], [58.5, 440.0], [58.6, 441.0], [58.7, 441.0], [58.8, 442.0], [58.9, 443.0], [59.0, 444.0], [59.1, 445.0], [59.2, 446.0], [59.3, 448.0], [59.4, 449.0], [59.5, 450.0], [59.6, 450.0], [59.7, 452.0], [59.8, 453.0], [59.9, 453.0], [60.0, 454.0], [60.1, 456.0], [60.2, 457.0], [60.3, 458.0], [60.4, 459.0], [60.5, 461.0], [60.6, 462.0], [60.7, 463.0], [60.8, 464.0], [60.9, 465.0], [61.0, 468.0], [61.1, 471.0], [61.2, 474.0], [61.3, 476.0], [61.4, 477.0], [61.5, 478.0], [61.6, 481.0], [61.7, 483.0], [61.8, 484.0], [61.9, 485.0], [62.0, 486.0], [62.1, 488.0], [62.2, 491.0], [62.3, 494.0], [62.4, 495.0], [62.5, 496.0], [62.6, 498.0], [62.7, 500.0], [62.8, 501.0], [62.9, 502.0], [63.0, 503.0], [63.1, 505.0], [63.2, 506.0], [63.3, 507.0], [63.4, 508.0], [63.5, 511.0], [63.6, 512.0], [63.7, 514.0], [63.8, 515.0], [63.9, 516.0], [64.0, 518.0], [64.1, 519.0], [64.2, 521.0], [64.3, 526.0], [64.4, 529.0], [64.5, 531.0], [64.6, 532.0], [64.7, 534.0], [64.8, 538.0], [64.9, 540.0], [65.0, 541.0], [65.1, 543.0], [65.2, 547.0], [65.3, 549.0], [65.4, 551.0], [65.5, 553.0], [65.6, 554.0], [65.7, 555.0], [65.8, 557.0], [65.9, 561.0], [66.0, 563.0], [66.1, 565.0], [66.2, 566.0], [66.3, 567.0], [66.4, 569.0], [66.5, 571.0], [66.6, 573.0], [66.7, 574.0], [66.8, 575.0], [66.9, 577.0], [67.0, 578.0], [67.1, 581.0], [67.2, 582.0], [67.3, 583.0], [67.4, 586.0], [67.5, 587.0], [67.6, 589.0], [67.7, 591.0], [67.8, 591.0], [67.9, 594.0], [68.0, 595.0], [68.1, 595.0], [68.2, 596.0], [68.3, 596.0], [68.4, 597.0], [68.5, 598.0], [68.6, 599.0], [68.7, 600.0], [68.8, 601.0], [68.9, 602.0], [69.0, 603.0], [69.1, 604.0], [69.2, 604.0], [69.3, 605.0], [69.4, 606.0], [69.5, 608.0], [69.6, 609.0], [69.7, 610.0], [69.8, 611.0], [69.9, 612.0], [70.0, 613.0], [70.1, 614.0], [70.2, 616.0], [70.3, 617.0], [70.4, 617.0], [70.5, 618.0], [70.6, 620.0], [70.7, 620.0], [70.8, 621.0], [70.9, 622.0], [71.0, 623.0], [71.1, 625.0], [71.2, 626.0], [71.3, 627.0], [71.4, 628.0], [71.5, 630.0], [71.6, 631.0], [71.7, 632.0], [71.8, 633.0], [71.9, 634.0], [72.0, 635.0], [72.1, 635.0], [72.2, 636.0], [72.3, 637.0], [72.4, 638.0], [72.5, 639.0], [72.6, 640.0], [72.7, 641.0], [72.8, 642.0], [72.9, 642.0], [73.0, 643.0], [73.1, 644.0], [73.2, 645.0], [73.3, 646.0], [73.4, 647.0], [73.5, 649.0], [73.6, 650.0], [73.7, 651.0], [73.8, 651.0], [73.9, 652.0], [74.0, 653.0], [74.1, 654.0], [74.2, 654.0], [74.3, 655.0], [74.4, 656.0], [74.5, 657.0], [74.6, 659.0], [74.7, 660.0], [74.8, 662.0], [74.9, 664.0], [75.0, 664.0], [75.1, 665.0], [75.2, 666.0], [75.3, 668.0], [75.4, 671.0], [75.5, 671.0], [75.6, 672.0], [75.7, 673.0], [75.8, 675.0], [75.9, 677.0], [76.0, 678.0], [76.1, 679.0], [76.2, 680.0], [76.3, 682.0], [76.4, 683.0], [76.5, 684.0], [76.6, 686.0], [76.7, 688.0], [76.8, 690.0], [76.9, 691.0], [77.0, 692.0], [77.1, 692.0], [77.2, 694.0], [77.3, 694.0], [77.4, 697.0], [77.5, 699.0], [77.6, 700.0], [77.7, 701.0], [77.8, 702.0], [77.9, 704.0], [78.0, 708.0], [78.1, 709.0], [78.2, 711.0], [78.3, 713.0], [78.4, 715.0], [78.5, 716.0], [78.6, 719.0], [78.7, 722.0], [78.8, 723.0], [78.9, 725.0], [79.0, 727.0], [79.1, 730.0], [79.2, 732.0], [79.3, 734.0], [79.4, 736.0], [79.5, 740.0], [79.6, 741.0], [79.7, 744.0], [79.8, 745.0], [79.9, 747.0], [80.0, 750.0], [80.1, 753.0], [80.2, 756.0], [80.3, 758.0], [80.4, 761.0], [80.5, 763.0], [80.6, 764.0], [80.7, 766.0], [80.8, 768.0], [80.9, 771.0], [81.0, 776.0], [81.1, 779.0], [81.2, 782.0], [81.3, 783.0], [81.4, 785.0], [81.5, 790.0], [81.6, 796.0], [81.7, 799.0], [81.8, 804.0], [81.9, 809.0], [82.0, 814.0], [82.1, 818.0], [82.2, 822.0], [82.3, 824.0], [82.4, 827.0], [82.5, 832.0], [82.6, 837.0], [82.7, 842.0], [82.8, 851.0], [82.9, 854.0], [83.0, 858.0], [83.1, 865.0], [83.2, 870.0], [83.3, 874.0], [83.4, 877.0], [83.5, 879.0], [83.6, 883.0], [83.7, 889.0], [83.8, 892.0], [83.9, 896.0], [84.0, 899.0], [84.1, 901.0], [84.2, 902.0], [84.3, 904.0], [84.4, 909.0], [84.5, 910.0], [84.6, 915.0], [84.7, 916.0], [84.8, 918.0], [84.9, 919.0], [85.0, 924.0], [85.1, 926.0], [85.2, 930.0], [85.3, 935.0], [85.4, 938.0], [85.5, 940.0], [85.6, 942.0], [85.7, 943.0], [85.8, 948.0], [85.9, 951.0], [86.0, 953.0], [86.1, 955.0], [86.2, 956.0], [86.3, 958.0], [86.4, 959.0], [86.5, 962.0], [86.6, 965.0], [86.7, 967.0], [86.8, 970.0], [86.9, 972.0], [87.0, 976.0], [87.1, 979.0], [87.2, 981.0], [87.3, 983.0], [87.4, 986.0], [87.5, 989.0], [87.6, 991.0], [87.7, 995.0], [87.8, 999.0], [87.9, 1003.0], [88.0, 1006.0], [88.1, 1010.0], [88.2, 1014.0], [88.3, 1017.0], [88.4, 1020.0], [88.5, 1030.0], [88.6, 1033.0], [88.7, 1039.0], [88.8, 1047.0], [88.9, 1050.0], [89.0, 1053.0], [89.1, 1059.0], [89.2, 1067.0], [89.3, 1068.0], [89.4, 1077.0], [89.5, 1087.0], [89.6, 1093.0], [89.7, 1100.0], [89.8, 1113.0], [89.9, 1132.0], [90.0, 1138.0], [90.1, 1144.0], [90.2, 1153.0], [90.3, 1159.0], [90.4, 1165.0], [90.5, 1171.0], [90.6, 1177.0], [90.7, 1181.0], [90.8, 1183.0], [90.9, 1188.0], [91.0, 1192.0], [91.1, 1200.0], [91.2, 1203.0], [91.3, 1211.0], [91.4, 1215.0], [91.5, 1217.0], [91.6, 1221.0], [91.7, 1227.0], [91.8, 1234.0], [91.9, 1240.0], [92.0, 1242.0], [92.1, 1247.0], [92.2, 1253.0], [92.3, 1260.0], [92.4, 1264.0], [92.5, 1277.0], [92.6, 1282.0], [92.7, 1287.0], [92.8, 1298.0], [92.9, 1301.0], [93.0, 1303.0], [93.1, 1316.0], [93.2, 1331.0], [93.3, 1344.0], [93.4, 1360.0], [93.5, 1372.0], [93.6, 1384.0], [93.7, 1405.0], [93.8, 1414.0], [93.9, 1438.0], [94.0, 1460.0], [94.1, 1471.0], [94.2, 1487.0], [94.3, 1520.0], [94.4, 1575.0], [94.5, 1601.0], [94.6, 1633.0], [94.7, 1668.0], [94.8, 1693.0], [94.9, 1747.0], [95.0, 1794.0], [95.1, 1886.0], [95.2, 1956.0], [95.3, 2028.0], [95.4, 2065.0], [95.5, 2114.0], [95.6, 2172.0], [95.7, 2196.0], [95.8, 2266.0], [95.9, 2376.0], [96.0, 2424.0], [96.1, 2534.0], [96.2, 2579.0], [96.3, 2639.0], [96.4, 2726.0], [96.5, 2775.0], [96.6, 2892.0], [96.7, 2967.0], [96.8, 3014.0], [96.9, 3076.0], [97.0, 3093.0], [97.1, 3195.0], [97.2, 3243.0], [97.3, 3271.0], [97.4, 3426.0], [97.5, 3511.0], [97.6, 3677.0], [97.7, 3788.0], [97.8, 3866.0], [97.9, 3976.0], [98.0, 4007.0], [98.1, 4042.0], [98.2, 4106.0], [98.3, 4358.0], [98.4, 4762.0], [98.5, 5517.0], [98.6, 5687.0], [98.7, 5967.0], [98.8, 6698.0], [98.9, 8010.0], [99.0, 8104.0], [99.1, 8323.0], [99.2, 8462.0], [99.3, 8739.0], [99.4, 9025.0], [99.5, 10582.0], [99.6, 10913.0], [99.7, 11000.0], [99.8, 11290.0], [99.9, 13421.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 870.0, "series": [{"data": [[0.0, 870.0], [600.0, 462.0], [700.0, 215.0], [800.0, 119.0], [900.0, 198.0], [1000.0, 97.0], [1100.0, 72.0], [1200.0, 92.0], [1300.0, 44.0], [1400.0, 29.0], [1500.0, 11.0], [1600.0, 19.0], [1700.0, 9.0], [1800.0, 5.0], [1900.0, 5.0], [2000.0, 15.0], [2100.0, 11.0], [2200.0, 9.0], [2300.0, 4.0], [2400.0, 6.0], [2500.0, 7.0], [2600.0, 10.0], [2700.0, 6.0], [2800.0, 5.0], [2900.0, 7.0], [3000.0, 14.0], [3100.0, 5.0], [3200.0, 10.0], [3300.0, 5.0], [3400.0, 5.0], [3500.0, 5.0], [3600.0, 3.0], [3700.0, 3.0], [3800.0, 5.0], [3900.0, 8.0], [4000.0, 12.0], [4300.0, 3.0], [4200.0, 2.0], [4100.0, 2.0], [4400.0, 3.0], [4700.0, 2.0], [4800.0, 1.0], [4900.0, 1.0], [5000.0, 1.0], [5400.0, 1.0], [5500.0, 5.0], [5600.0, 1.0], [5800.0, 2.0], [5700.0, 1.0], [5900.0, 2.0], [6000.0, 2.0], [6300.0, 1.0], [6600.0, 2.0], [7100.0, 1.0], [7900.0, 2.0], [7700.0, 1.0], [8000.0, 5.0], [8100.0, 5.0], [8400.0, 4.0], [8700.0, 4.0], [8500.0, 2.0], [8300.0, 2.0], [8600.0, 1.0], [8200.0, 1.0], [9000.0, 3.0], [8800.0, 1.0], [9900.0, 1.0], [10000.0, 1.0], [10400.0, 2.0], [10500.0, 1.0], [10600.0, 2.0], [11200.0, 3.0], [10900.0, 6.0], [11000.0, 3.0], [10800.0, 1.0], [11400.0, 1.0], [11300.0, 2.0], [11500.0, 1.0], [13400.0, 1.0], [15300.0, 1.0], [17000.0, 1.0], [18800.0, 1.0], [20900.0, 1.0], [21600.0, 1.0], [100.0, 746.0], [200.0, 500.0], [300.0, 711.0], [400.0, 427.0], [500.0, 310.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 298.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3258.0, "series": [{"data": [[0.0, 3258.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1634.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 298.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.940860215053764, "minX": 1.60249716E12, "maxY": 10.0, "series": [{"data": [[1.60249746E12, 9.940860215053764], [1.60249728E12, 10.0], [1.60249734E12, 10.0], [1.60249716E12, 9.997584541062816], [1.60249722E12, 10.0], [1.6024974E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249746E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 542.0, "minX": 1.0, "maxY": 8508.0, "series": [{"data": [[8.0, 665.5], [4.0, 780.0], [2.0, 8508.0], [1.0, 8206.0], [10.0, 650.2173325612803], [5.0, 648.0], [6.0, 1171.0], [3.0, 1241.0], [7.0, 542.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99113680154139, 653.4109826589588]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5526.233333333334, "minX": 1.60249716E12, "maxY": 4966902.566666666, "series": [{"data": [[1.60249746E12, 3003114.7333333334], [1.60249728E12, 4156335.533333333], [1.60249734E12, 3617172.7], [1.60249716E12, 2957382.566666667], [1.60249722E12, 4941449.483333333], [1.6024974E12, 4966902.566666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60249746E12, 5847.983333333334], [1.60249728E12, 7873.783333333334], [1.60249734E12, 8176.433333333333], [1.60249716E12, 6264.416666666667], [1.60249722E12, 5526.233333333334], [1.6024974E12, 6252.783333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249746E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 566.5282669138097, "minX": 1.60249716E12, "maxY": 858.7203856749308, "series": [{"data": [[1.60249746E12, 635.6370967741935], [1.60249728E12, 594.2777222777236], [1.60249734E12, 566.5282669138097], [1.60249716E12, 626.9202898550732], [1.60249722E12, 858.7203856749308], [1.6024974E12, 701.4926108374383]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249746E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 565.359592215014, "minX": 1.60249716E12, "maxY": 856.0027548209358, "series": [{"data": [[1.60249746E12, 634.450268817204], [1.60249728E12, 592.4825174825173], [1.60249734E12, 565.359592215014], [1.60249716E12, 625.268115942029], [1.60249722E12, 856.0027548209358], [1.6024974E12, 699.624384236453]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249746E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011083743842364538, "minX": 1.60249716E12, "maxY": 0.11835748792270535, "series": [{"data": [[1.60249746E12, 0.012096774193548385], [1.60249728E12, 0.015984015984016015], [1.60249734E12, 0.013901760889712707], [1.60249716E12, 0.11835748792270535], [1.60249722E12, 0.01928374655647385], [1.6024974E12, 0.011083743842364538]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249746E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 21.0, "minX": 1.60249716E12, "maxY": 21601.0, "series": [{"data": [[1.60249746E12, 20984.0], [1.60249728E12, 21601.0], [1.60249734E12, 8757.0], [1.60249716E12, 18895.0], [1.60249722E12, 17031.0], [1.6024974E12, 15313.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60249746E12, 33.704999822378156], [1.60249728E12, 28.035999522209167], [1.60249734E12, 32.0], [1.60249716E12, 33.0], [1.60249722E12, 31.085999653339385], [1.6024974E12, 37.950999418497084]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60249746E12, 34.0], [1.60249728E12, 29.839600191116332], [1.60249734E12, 32.0], [1.60249716E12, 33.2071000790596], [1.60249722E12, 32.19730006933212], [1.6024974E12, 40.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60249746E12, 34.0], [1.60249728E12, 29.037999761104583], [1.60249734E12, 32.0], [1.60249716E12, 33.0], [1.60249722E12, 31.812999826669692], [1.6024974E12, 39.17049970924854]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60249746E12, 29.0], [1.60249728E12, 22.0], [1.60249734E12, 25.0], [1.60249716E12, 28.0], [1.60249722E12, 26.0], [1.6024974E12, 21.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60249746E12, 330.5], [1.60249728E12, 355.0], [1.60249734E12, 287.0], [1.60249716E12, 297.5], [1.60249722E12, 617.0], [1.6024974E12, 578.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249746E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 102.5, "minX": 1.0, "maxY": 2634.0, "series": [{"data": [[32.0, 232.0], [2.0, 1103.5], [33.0, 211.0], [35.0, 168.5], [34.0, 215.0], [37.0, 215.5], [36.0, 148.0], [40.0, 220.5], [45.0, 178.5], [46.0, 120.0], [47.0, 140.0], [3.0, 981.5], [54.0, 122.0], [58.0, 102.5], [4.0, 672.0], [5.0, 598.0], [6.0, 423.0], [7.0, 380.0], [8.0, 613.0], [9.0, 548.5], [10.0, 681.0], [11.0, 670.0], [12.0, 640.5], [13.0, 642.0], [14.0, 586.0], [15.0, 500.0], [16.0, 441.5], [1.0, 2634.0], [17.0, 461.0], [18.0, 355.5], [19.0, 395.5], [20.0, 389.0], [21.0, 464.5], [22.0, 434.0], [23.0, 262.0], [24.0, 318.0], [25.0, 370.0], [26.0, 268.0], [27.0, 274.0], [28.0, 308.5], [29.0, 263.5], [30.0, 281.5], [31.0, 152.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 102.0, "minX": 1.0, "maxY": 2631.0, "series": [{"data": [[32.0, 231.5], [2.0, 1101.5], [33.0, 210.5], [35.0, 168.0], [34.0, 213.5], [37.0, 215.0], [36.0, 147.0], [40.0, 220.5], [45.0, 178.0], [46.0, 118.5], [47.0, 138.0], [3.0, 978.0], [54.0, 121.0], [58.0, 102.0], [4.0, 668.0], [5.0, 597.0], [6.0, 422.5], [7.0, 379.0], [8.0, 609.0], [9.0, 545.0], [10.0, 679.5], [11.0, 669.0], [12.0, 638.0], [13.0, 640.0], [14.0, 583.5], [15.0, 495.0], [16.0, 441.0], [1.0, 2631.0], [17.0, 459.0], [18.0, 355.0], [19.0, 394.0], [20.0, 386.0], [21.0, 462.5], [22.0, 433.5], [23.0, 260.0], [24.0, 316.0], [25.0, 369.0], [26.0, 267.5], [27.0, 273.0], [28.0, 308.0], [29.0, 262.5], [30.0, 279.5], [31.0, 151.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.1, "minX": 1.60249716E12, "maxY": 17.983333333333334, "series": [{"data": [[1.60249746E12, 12.233333333333333], [1.60249728E12, 16.683333333333334], [1.60249734E12, 17.983333333333334], [1.60249716E12, 13.966666666666667], [1.60249722E12, 12.1], [1.6024974E12, 13.533333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249746E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.1, "minX": 1.60249716E12, "maxY": 17.983333333333334, "series": [{"data": [[1.60249746E12, 12.4], [1.60249728E12, 16.683333333333334], [1.60249734E12, 17.983333333333334], [1.60249716E12, 13.8], [1.60249722E12, 12.1], [1.6024974E12, 13.533333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249746E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.1, "minX": 1.60249716E12, "maxY": 17.983333333333334, "series": [{"data": [[1.60249746E12, 12.4], [1.60249728E12, 16.683333333333334], [1.60249734E12, 17.983333333333334], [1.60249716E12, 13.8], [1.60249722E12, 12.1], [1.6024974E12, 13.533333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249746E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.1, "minX": 1.60249716E12, "maxY": 17.983333333333334, "series": [{"data": [[1.60249746E12, 12.4], [1.60249728E12, 16.683333333333334], [1.60249734E12, 17.983333333333334], [1.60249716E12, 13.8], [1.60249722E12, 12.1], [1.6024974E12, 13.533333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249746E12, "title": "Total Transactions Per Second"}},
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

