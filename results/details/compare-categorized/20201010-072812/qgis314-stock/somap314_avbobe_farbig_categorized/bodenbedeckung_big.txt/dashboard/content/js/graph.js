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
        data: {"result": {"minY": 18.0, "minX": 0.0, "maxY": 21416.0, "series": [{"data": [[0.0, 18.0], [0.1, 23.0], [0.2, 24.0], [0.3, 25.0], [0.4, 27.0], [0.5, 28.0], [0.6, 29.0], [0.7, 30.0], [0.8, 30.0], [0.9, 31.0], [1.0, 32.0], [1.1, 32.0], [1.2, 33.0], [1.3, 33.0], [1.4, 34.0], [1.5, 34.0], [1.6, 34.0], [1.7, 35.0], [1.8, 35.0], [1.9, 35.0], [2.0, 35.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 38.0], [2.9, 38.0], [3.0, 38.0], [3.1, 38.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 40.0], [3.6, 40.0], [3.7, 40.0], [3.8, 40.0], [3.9, 41.0], [4.0, 41.0], [4.1, 42.0], [4.2, 42.0], [4.3, 42.0], [4.4, 42.0], [4.5, 43.0], [4.6, 43.0], [4.7, 43.0], [4.8, 44.0], [4.9, 44.0], [5.0, 44.0], [5.1, 45.0], [5.2, 45.0], [5.3, 46.0], [5.4, 46.0], [5.5, 46.0], [5.6, 47.0], [5.7, 47.0], [5.8, 47.0], [5.9, 47.0], [6.0, 48.0], [6.1, 48.0], [6.2, 48.0], [6.3, 49.0], [6.4, 49.0], [6.5, 49.0], [6.6, 50.0], [6.7, 50.0], [6.8, 50.0], [6.9, 51.0], [7.0, 51.0], [7.1, 51.0], [7.2, 52.0], [7.3, 52.0], [7.4, 52.0], [7.5, 53.0], [7.6, 53.0], [7.7, 54.0], [7.8, 54.0], [7.9, 55.0], [8.0, 55.0], [8.1, 55.0], [8.2, 55.0], [8.3, 56.0], [8.4, 56.0], [8.5, 56.0], [8.6, 57.0], [8.7, 57.0], [8.8, 57.0], [8.9, 58.0], [9.0, 59.0], [9.1, 59.0], [9.2, 59.0], [9.3, 59.0], [9.4, 60.0], [9.5, 60.0], [9.6, 60.0], [9.7, 61.0], [9.8, 62.0], [9.9, 62.0], [10.0, 63.0], [10.1, 63.0], [10.2, 64.0], [10.3, 65.0], [10.4, 65.0], [10.5, 66.0], [10.6, 66.0], [10.7, 66.0], [10.8, 67.0], [10.9, 67.0], [11.0, 68.0], [11.1, 68.0], [11.2, 69.0], [11.3, 69.0], [11.4, 70.0], [11.5, 70.0], [11.6, 71.0], [11.7, 71.0], [11.8, 71.0], [11.9, 72.0], [12.0, 72.0], [12.1, 72.0], [12.2, 72.0], [12.3, 73.0], [12.4, 73.0], [12.5, 73.0], [12.6, 74.0], [12.7, 74.0], [12.8, 74.0], [12.9, 75.0], [13.0, 75.0], [13.1, 76.0], [13.2, 76.0], [13.3, 77.0], [13.4, 77.0], [13.5, 78.0], [13.6, 78.0], [13.7, 79.0], [13.8, 79.0], [13.9, 79.0], [14.0, 80.0], [14.1, 80.0], [14.2, 81.0], [14.3, 81.0], [14.4, 82.0], [14.5, 82.0], [14.6, 83.0], [14.7, 83.0], [14.8, 83.0], [14.9, 84.0], [15.0, 84.0], [15.1, 85.0], [15.2, 85.0], [15.3, 85.0], [15.4, 86.0], [15.5, 86.0], [15.6, 86.0], [15.7, 87.0], [15.8, 87.0], [15.9, 88.0], [16.0, 89.0], [16.1, 89.0], [16.2, 90.0], [16.3, 91.0], [16.4, 91.0], [16.5, 92.0], [16.6, 92.0], [16.7, 93.0], [16.8, 93.0], [16.9, 94.0], [17.0, 95.0], [17.1, 95.0], [17.2, 95.0], [17.3, 96.0], [17.4, 96.0], [17.5, 97.0], [17.6, 97.0], [17.7, 98.0], [17.8, 98.0], [17.9, 99.0], [18.0, 99.0], [18.1, 100.0], [18.2, 100.0], [18.3, 100.0], [18.4, 101.0], [18.5, 102.0], [18.6, 102.0], [18.7, 103.0], [18.8, 103.0], [18.9, 104.0], [19.0, 104.0], [19.1, 105.0], [19.2, 105.0], [19.3, 106.0], [19.4, 107.0], [19.5, 108.0], [19.6, 109.0], [19.7, 109.0], [19.8, 110.0], [19.9, 111.0], [20.0, 111.0], [20.1, 112.0], [20.2, 113.0], [20.3, 113.0], [20.4, 114.0], [20.5, 115.0], [20.6, 115.0], [20.7, 116.0], [20.8, 117.0], [20.9, 117.0], [21.0, 118.0], [21.1, 119.0], [21.2, 120.0], [21.3, 121.0], [21.4, 122.0], [21.5, 122.0], [21.6, 123.0], [21.7, 123.0], [21.8, 124.0], [21.9, 124.0], [22.0, 125.0], [22.1, 126.0], [22.2, 126.0], [22.3, 127.0], [22.4, 127.0], [22.5, 128.0], [22.6, 128.0], [22.7, 129.0], [22.8, 129.0], [22.9, 130.0], [23.0, 131.0], [23.1, 132.0], [23.2, 133.0], [23.3, 133.0], [23.4, 134.0], [23.5, 134.0], [23.6, 135.0], [23.7, 135.0], [23.8, 136.0], [23.9, 138.0], [24.0, 139.0], [24.1, 139.0], [24.2, 140.0], [24.3, 140.0], [24.4, 141.0], [24.5, 141.0], [24.6, 141.0], [24.7, 142.0], [24.8, 142.0], [24.9, 143.0], [25.0, 144.0], [25.1, 145.0], [25.2, 146.0], [25.3, 146.0], [25.4, 147.0], [25.5, 148.0], [25.6, 148.0], [25.7, 149.0], [25.8, 149.0], [25.9, 150.0], [26.0, 151.0], [26.1, 152.0], [26.2, 152.0], [26.3, 153.0], [26.4, 154.0], [26.5, 154.0], [26.6, 155.0], [26.7, 156.0], [26.8, 157.0], [26.9, 158.0], [27.0, 159.0], [27.1, 159.0], [27.2, 160.0], [27.3, 161.0], [27.4, 162.0], [27.5, 162.0], [27.6, 163.0], [27.7, 163.0], [27.8, 164.0], [27.9, 165.0], [28.0, 166.0], [28.1, 167.0], [28.2, 168.0], [28.3, 170.0], [28.4, 171.0], [28.5, 171.0], [28.6, 171.0], [28.7, 172.0], [28.8, 172.0], [28.9, 173.0], [29.0, 174.0], [29.1, 175.0], [29.2, 175.0], [29.3, 177.0], [29.4, 177.0], [29.5, 178.0], [29.6, 178.0], [29.7, 179.0], [29.8, 180.0], [29.9, 180.0], [30.0, 181.0], [30.1, 182.0], [30.2, 183.0], [30.3, 184.0], [30.4, 185.0], [30.5, 185.0], [30.6, 186.0], [30.7, 187.0], [30.8, 188.0], [30.9, 189.0], [31.0, 190.0], [31.1, 191.0], [31.2, 192.0], [31.3, 193.0], [31.4, 193.0], [31.5, 194.0], [31.6, 195.0], [31.7, 195.0], [31.8, 196.0], [31.9, 197.0], [32.0, 197.0], [32.1, 198.0], [32.2, 198.0], [32.3, 199.0], [32.4, 199.0], [32.5, 200.0], [32.6, 202.0], [32.7, 202.0], [32.8, 204.0], [32.9, 205.0], [33.0, 206.0], [33.1, 206.0], [33.2, 207.0], [33.3, 208.0], [33.4, 210.0], [33.5, 211.0], [33.6, 212.0], [33.7, 213.0], [33.8, 213.0], [33.9, 214.0], [34.0, 214.0], [34.1, 215.0], [34.2, 215.0], [34.3, 216.0], [34.4, 217.0], [34.5, 218.0], [34.6, 220.0], [34.7, 220.0], [34.8, 221.0], [34.9, 222.0], [35.0, 223.0], [35.1, 224.0], [35.2, 225.0], [35.3, 227.0], [35.4, 228.0], [35.5, 229.0], [35.6, 229.0], [35.7, 231.0], [35.8, 232.0], [35.9, 233.0], [36.0, 234.0], [36.1, 234.0], [36.2, 235.0], [36.3, 236.0], [36.4, 237.0], [36.5, 238.0], [36.6, 239.0], [36.7, 241.0], [36.8, 242.0], [36.9, 243.0], [37.0, 244.0], [37.1, 245.0], [37.2, 247.0], [37.3, 248.0], [37.4, 249.0], [37.5, 250.0], [37.6, 251.0], [37.7, 253.0], [37.8, 254.0], [37.9, 255.0], [38.0, 256.0], [38.1, 257.0], [38.2, 258.0], [38.3, 259.0], [38.4, 260.0], [38.5, 262.0], [38.6, 264.0], [38.7, 264.0], [38.8, 266.0], [38.9, 267.0], [39.0, 269.0], [39.1, 270.0], [39.2, 272.0], [39.3, 272.0], [39.4, 273.0], [39.5, 275.0], [39.6, 277.0], [39.7, 278.0], [39.8, 278.0], [39.9, 279.0], [40.0, 280.0], [40.1, 281.0], [40.2, 282.0], [40.3, 283.0], [40.4, 283.0], [40.5, 285.0], [40.6, 286.0], [40.7, 287.0], [40.8, 289.0], [40.9, 290.0], [41.0, 291.0], [41.1, 291.0], [41.2, 292.0], [41.3, 293.0], [41.4, 294.0], [41.5, 295.0], [41.6, 296.0], [41.7, 296.0], [41.8, 297.0], [41.9, 298.0], [42.0, 298.0], [42.1, 299.0], [42.2, 300.0], [42.3, 301.0], [42.4, 301.0], [42.5, 302.0], [42.6, 303.0], [42.7, 305.0], [42.8, 306.0], [42.9, 306.0], [43.0, 307.0], [43.1, 308.0], [43.2, 309.0], [43.3, 310.0], [43.4, 311.0], [43.5, 312.0], [43.6, 313.0], [43.7, 314.0], [43.8, 314.0], [43.9, 315.0], [44.0, 315.0], [44.1, 316.0], [44.2, 317.0], [44.3, 317.0], [44.4, 318.0], [44.5, 319.0], [44.6, 319.0], [44.7, 320.0], [44.8, 320.0], [44.9, 320.0], [45.0, 321.0], [45.1, 321.0], [45.2, 322.0], [45.3, 322.0], [45.4, 323.0], [45.5, 324.0], [45.6, 324.0], [45.7, 325.0], [45.8, 326.0], [45.9, 326.0], [46.0, 327.0], [46.1, 328.0], [46.2, 328.0], [46.3, 329.0], [46.4, 329.0], [46.5, 330.0], [46.6, 331.0], [46.7, 331.0], [46.8, 332.0], [46.9, 332.0], [47.0, 332.0], [47.1, 333.0], [47.2, 333.0], [47.3, 334.0], [47.4, 335.0], [47.5, 335.0], [47.6, 336.0], [47.7, 337.0], [47.8, 337.0], [47.9, 338.0], [48.0, 338.0], [48.1, 339.0], [48.2, 339.0], [48.3, 339.0], [48.4, 340.0], [48.5, 341.0], [48.6, 342.0], [48.7, 343.0], [48.8, 343.0], [48.9, 344.0], [49.0, 344.0], [49.1, 345.0], [49.2, 345.0], [49.3, 346.0], [49.4, 346.0], [49.5, 347.0], [49.6, 348.0], [49.7, 348.0], [49.8, 349.0], [49.9, 349.0], [50.0, 350.0], [50.1, 350.0], [50.2, 351.0], [50.3, 352.0], [50.4, 353.0], [50.5, 354.0], [50.6, 354.0], [50.7, 355.0], [50.8, 356.0], [50.9, 357.0], [51.0, 357.0], [51.1, 357.0], [51.2, 358.0], [51.3, 358.0], [51.4, 359.0], [51.5, 360.0], [51.6, 361.0], [51.7, 361.0], [51.8, 362.0], [51.9, 363.0], [52.0, 363.0], [52.1, 365.0], [52.2, 366.0], [52.3, 366.0], [52.4, 367.0], [52.5, 368.0], [52.6, 368.0], [52.7, 369.0], [52.8, 369.0], [52.9, 370.0], [53.0, 371.0], [53.1, 371.0], [53.2, 372.0], [53.3, 372.0], [53.4, 373.0], [53.5, 373.0], [53.6, 374.0], [53.7, 375.0], [53.8, 376.0], [53.9, 377.0], [54.0, 378.0], [54.1, 378.0], [54.2, 379.0], [54.3, 379.0], [54.4, 380.0], [54.5, 381.0], [54.6, 382.0], [54.7, 383.0], [54.8, 383.0], [54.9, 384.0], [55.0, 385.0], [55.1, 386.0], [55.2, 387.0], [55.3, 388.0], [55.4, 389.0], [55.5, 389.0], [55.6, 390.0], [55.7, 391.0], [55.8, 391.0], [55.9, 391.0], [56.0, 392.0], [56.1, 393.0], [56.2, 394.0], [56.3, 395.0], [56.4, 397.0], [56.5, 398.0], [56.6, 399.0], [56.7, 400.0], [56.8, 400.0], [56.9, 402.0], [57.0, 403.0], [57.1, 403.0], [57.2, 404.0], [57.3, 407.0], [57.4, 408.0], [57.5, 408.0], [57.6, 409.0], [57.7, 409.0], [57.8, 411.0], [57.9, 413.0], [58.0, 414.0], [58.1, 415.0], [58.2, 416.0], [58.3, 417.0], [58.4, 419.0], [58.5, 420.0], [58.6, 422.0], [58.7, 423.0], [58.8, 424.0], [58.9, 427.0], [59.0, 429.0], [59.1, 430.0], [59.2, 431.0], [59.3, 433.0], [59.4, 434.0], [59.5, 435.0], [59.6, 435.0], [59.7, 437.0], [59.8, 438.0], [59.9, 439.0], [60.0, 441.0], [60.1, 442.0], [60.2, 444.0], [60.3, 445.0], [60.4, 446.0], [60.5, 448.0], [60.6, 450.0], [60.7, 450.0], [60.8, 451.0], [60.9, 453.0], [61.0, 454.0], [61.1, 456.0], [61.2, 458.0], [61.3, 459.0], [61.4, 460.0], [61.5, 462.0], [61.6, 463.0], [61.7, 463.0], [61.8, 465.0], [61.9, 467.0], [62.0, 469.0], [62.1, 471.0], [62.2, 473.0], [62.3, 474.0], [62.4, 476.0], [62.5, 478.0], [62.6, 479.0], [62.7, 479.0], [62.8, 480.0], [62.9, 482.0], [63.0, 485.0], [63.1, 487.0], [63.2, 488.0], [63.3, 489.0], [63.4, 491.0], [63.5, 492.0], [63.6, 493.0], [63.7, 495.0], [63.8, 497.0], [63.9, 499.0], [64.0, 501.0], [64.1, 502.0], [64.2, 503.0], [64.3, 504.0], [64.4, 506.0], [64.5, 508.0], [64.6, 509.0], [64.7, 511.0], [64.8, 515.0], [64.9, 518.0], [65.0, 520.0], [65.1, 521.0], [65.2, 523.0], [65.3, 524.0], [65.4, 526.0], [65.5, 527.0], [65.6, 529.0], [65.7, 531.0], [65.8, 532.0], [65.9, 535.0], [66.0, 536.0], [66.1, 537.0], [66.2, 539.0], [66.3, 541.0], [66.4, 542.0], [66.5, 543.0], [66.6, 545.0], [66.7, 547.0], [66.8, 551.0], [66.9, 553.0], [67.0, 555.0], [67.1, 559.0], [67.2, 561.0], [67.3, 563.0], [67.4, 565.0], [67.5, 566.0], [67.6, 567.0], [67.7, 570.0], [67.8, 571.0], [67.9, 572.0], [68.0, 573.0], [68.1, 574.0], [68.2, 575.0], [68.3, 578.0], [68.4, 578.0], [68.5, 579.0], [68.6, 581.0], [68.7, 582.0], [68.8, 584.0], [68.9, 585.0], [69.0, 586.0], [69.1, 587.0], [69.2, 588.0], [69.3, 590.0], [69.4, 591.0], [69.5, 592.0], [69.6, 593.0], [69.7, 595.0], [69.8, 596.0], [69.9, 597.0], [70.0, 598.0], [70.1, 599.0], [70.2, 599.0], [70.3, 600.0], [70.4, 601.0], [70.5, 602.0], [70.6, 604.0], [70.7, 605.0], [70.8, 605.0], [70.9, 606.0], [71.0, 607.0], [71.1, 608.0], [71.2, 609.0], [71.3, 611.0], [71.4, 612.0], [71.5, 613.0], [71.6, 614.0], [71.7, 615.0], [71.8, 616.0], [71.9, 617.0], [72.0, 618.0], [72.1, 618.0], [72.2, 619.0], [72.3, 620.0], [72.4, 621.0], [72.5, 622.0], [72.6, 624.0], [72.7, 625.0], [72.8, 626.0], [72.9, 626.0], [73.0, 628.0], [73.1, 629.0], [73.2, 629.0], [73.3, 630.0], [73.4, 631.0], [73.5, 632.0], [73.6, 632.0], [73.7, 633.0], [73.8, 633.0], [73.9, 634.0], [74.0, 635.0], [74.1, 637.0], [74.2, 638.0], [74.3, 639.0], [74.4, 640.0], [74.5, 641.0], [74.6, 641.0], [74.7, 642.0], [74.8, 643.0], [74.9, 643.0], [75.0, 644.0], [75.1, 645.0], [75.2, 646.0], [75.3, 646.0], [75.4, 648.0], [75.5, 650.0], [75.6, 651.0], [75.7, 652.0], [75.8, 653.0], [75.9, 654.0], [76.0, 655.0], [76.1, 656.0], [76.2, 660.0], [76.3, 661.0], [76.4, 662.0], [76.5, 663.0], [76.6, 665.0], [76.7, 665.0], [76.8, 667.0], [76.9, 668.0], [77.0, 669.0], [77.1, 669.0], [77.2, 671.0], [77.3, 672.0], [77.4, 673.0], [77.5, 676.0], [77.6, 677.0], [77.7, 679.0], [77.8, 681.0], [77.9, 683.0], [78.0, 685.0], [78.1, 687.0], [78.2, 691.0], [78.3, 693.0], [78.4, 696.0], [78.5, 698.0], [78.6, 699.0], [78.7, 703.0], [78.8, 706.0], [78.9, 706.0], [79.0, 707.0], [79.1, 710.0], [79.2, 712.0], [79.3, 714.0], [79.4, 716.0], [79.5, 717.0], [79.6, 720.0], [79.7, 721.0], [79.8, 722.0], [79.9, 726.0], [80.0, 729.0], [80.1, 731.0], [80.2, 735.0], [80.3, 737.0], [80.4, 738.0], [80.5, 741.0], [80.6, 743.0], [80.7, 746.0], [80.8, 748.0], [80.9, 752.0], [81.0, 754.0], [81.1, 756.0], [81.2, 759.0], [81.3, 760.0], [81.4, 764.0], [81.5, 765.0], [81.6, 767.0], [81.7, 770.0], [81.8, 776.0], [81.9, 780.0], [82.0, 784.0], [82.1, 790.0], [82.2, 794.0], [82.3, 796.0], [82.4, 799.0], [82.5, 801.0], [82.6, 805.0], [82.7, 807.0], [82.8, 814.0], [82.9, 818.0], [83.0, 820.0], [83.1, 823.0], [83.2, 826.0], [83.3, 830.0], [83.4, 834.0], [83.5, 838.0], [83.6, 841.0], [83.7, 847.0], [83.8, 849.0], [83.9, 851.0], [84.0, 855.0], [84.1, 859.0], [84.2, 864.0], [84.3, 868.0], [84.4, 874.0], [84.5, 880.0], [84.6, 883.0], [84.7, 885.0], [84.8, 889.0], [84.9, 891.0], [85.0, 893.0], [85.1, 895.0], [85.2, 899.0], [85.3, 901.0], [85.4, 905.0], [85.5, 907.0], [85.6, 910.0], [85.7, 911.0], [85.8, 912.0], [85.9, 915.0], [86.0, 917.0], [86.1, 918.0], [86.2, 920.0], [86.3, 922.0], [86.4, 924.0], [86.5, 925.0], [86.6, 927.0], [86.7, 929.0], [86.8, 933.0], [86.9, 934.0], [87.0, 936.0], [87.1, 939.0], [87.2, 941.0], [87.3, 944.0], [87.4, 947.0], [87.5, 949.0], [87.6, 952.0], [87.7, 954.0], [87.8, 957.0], [87.9, 960.0], [88.0, 966.0], [88.1, 969.0], [88.2, 971.0], [88.3, 974.0], [88.4, 979.0], [88.5, 984.0], [88.6, 988.0], [88.7, 990.0], [88.8, 995.0], [88.9, 1002.0], [89.0, 1009.0], [89.1, 1016.0], [89.2, 1025.0], [89.3, 1027.0], [89.4, 1039.0], [89.5, 1045.0], [89.6, 1050.0], [89.7, 1055.0], [89.8, 1062.0], [89.9, 1072.0], [90.0, 1079.0], [90.1, 1091.0], [90.2, 1098.0], [90.3, 1110.0], [90.4, 1113.0], [90.5, 1121.0], [90.6, 1128.0], [90.7, 1139.0], [90.8, 1146.0], [90.9, 1151.0], [91.0, 1153.0], [91.1, 1158.0], [91.2, 1167.0], [91.3, 1172.0], [91.4, 1174.0], [91.5, 1176.0], [91.6, 1180.0], [91.7, 1181.0], [91.8, 1184.0], [91.9, 1190.0], [92.0, 1197.0], [92.1, 1202.0], [92.2, 1209.0], [92.3, 1212.0], [92.4, 1217.0], [92.5, 1223.0], [92.6, 1226.0], [92.7, 1233.0], [92.8, 1244.0], [92.9, 1245.0], [93.0, 1253.0], [93.1, 1263.0], [93.2, 1275.0], [93.3, 1286.0], [93.4, 1295.0], [93.5, 1305.0], [93.6, 1323.0], [93.7, 1332.0], [93.8, 1364.0], [93.9, 1389.0], [94.0, 1411.0], [94.1, 1424.0], [94.2, 1481.0], [94.3, 1539.0], [94.4, 1579.0], [94.5, 1615.0], [94.6, 1648.0], [94.7, 1672.0], [94.8, 1733.0], [94.9, 1767.0], [95.0, 1873.0], [95.1, 1892.0], [95.2, 1927.0], [95.3, 2006.0], [95.4, 2038.0], [95.5, 2151.0], [95.6, 2226.0], [95.7, 2333.0], [95.8, 2430.0], [95.9, 2508.0], [96.0, 2557.0], [96.1, 2591.0], [96.2, 2646.0], [96.3, 2702.0], [96.4, 2761.0], [96.5, 2804.0], [96.6, 2850.0], [96.7, 2936.0], [96.8, 2993.0], [96.9, 3078.0], [97.0, 3117.0], [97.1, 3154.0], [97.2, 3242.0], [97.3, 3303.0], [97.4, 3374.0], [97.5, 3467.0], [97.6, 3612.0], [97.7, 3792.0], [97.8, 3912.0], [97.9, 3939.0], [98.0, 3994.0], [98.1, 4059.0], [98.2, 4376.0], [98.3, 4581.0], [98.4, 4791.0], [98.5, 5221.0], [98.6, 5364.0], [98.7, 5541.0], [98.8, 6365.0], [98.9, 7667.0], [99.0, 8040.0], [99.1, 8090.0], [99.2, 8252.0], [99.3, 8425.0], [99.4, 8572.0], [99.5, 10427.0], [99.6, 10675.0], [99.7, 10722.0], [99.8, 11010.0], [99.9, 16118.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 937.0, "series": [{"data": [[0.0, 937.0], [600.0, 436.0], [700.0, 197.0], [800.0, 148.0], [900.0, 188.0], [1000.0, 69.0], [1100.0, 94.0], [1200.0, 73.0], [1300.0, 29.0], [1400.0, 14.0], [1500.0, 11.0], [1600.0, 14.0], [1700.0, 10.0], [1800.0, 10.0], [1900.0, 9.0], [2000.0, 9.0], [2100.0, 5.0], [2300.0, 3.0], [2200.0, 6.0], [2400.0, 8.0], [2500.0, 11.0], [2600.0, 8.0], [2700.0, 12.0], [2800.0, 9.0], [2900.0, 8.0], [3000.0, 9.0], [3100.0, 7.0], [3300.0, 9.0], [3200.0, 8.0], [3400.0, 4.0], [3500.0, 3.0], [3700.0, 4.0], [3600.0, 2.0], [3800.0, 3.0], [3900.0, 13.0], [4000.0, 8.0], [4300.0, 3.0], [4400.0, 2.0], [4600.0, 3.0], [4500.0, 2.0], [4800.0, 1.0], [4700.0, 2.0], [4900.0, 3.0], [5300.0, 2.0], [5200.0, 6.0], [5400.0, 2.0], [5500.0, 3.0], [5800.0, 1.0], [6000.0, 1.0], [6300.0, 1.0], [6200.0, 1.0], [6500.0, 1.0], [6600.0, 1.0], [6800.0, 1.0], [7500.0, 1.0], [7600.0, 1.0], [7900.0, 3.0], [8000.0, 8.0], [8100.0, 3.0], [8500.0, 3.0], [8400.0, 3.0], [8300.0, 3.0], [8200.0, 3.0], [8800.0, 1.0], [9400.0, 2.0], [10500.0, 2.0], [10700.0, 4.0], [10600.0, 4.0], [10300.0, 2.0], [10400.0, 2.0], [10800.0, 1.0], [10900.0, 1.0], [11000.0, 4.0], [11300.0, 1.0], [15900.0, 1.0], [16100.0, 1.0], [16400.0, 1.0], [18900.0, 1.0], [21000.0, 1.0], [20700.0, 1.0], [21400.0, 1.0], [100.0, 747.0], [200.0, 506.0], [300.0, 753.0], [400.0, 375.0], [500.0, 327.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3319.0, "series": [{"data": [[0.0, 3319.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1573.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 298.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.922010398613516, "minX": 1.60231548E12, "maxY": 10.0, "series": [{"data": [[1.60231584E12, 9.922010398613516], [1.60231554E12, 10.0], [1.60231572E12, 10.0], [1.6023156E12, 10.0], [1.60231578E12, 10.0], [1.60231548E12, 9.965116279069774], [1.60231566E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231584E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 400.0, "minX": 1.0, "maxY": 8028.0, "series": [{"data": [[8.0, 879.0], [4.0, 1013.0], [2.0, 8028.0], [1.0, 7963.0], [9.0, 400.0], [10.0, 634.2001930501929], [5.0, 701.0], [6.0, 753.0], [3.0, 1127.0], [7.0, 718.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990753226738633, 637.2602581390877]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 671.55, "minX": 1.60231548E12, "maxY": 5760511.283333333, "series": [{"data": [[1.60231584E12, 2140448.5833333335], [1.60231554E12, 2656328.2], [1.60231572E12, 3392301.066666667], [1.6023156E12, 5760511.283333333], [1.60231578E12, 4489099.816666666], [1.60231548E12, 548667.3], [1.60231566E12, 4654488.266666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231584E12, 4528.283333333334], [1.60231554E12, 6090.933333333333], [1.60231572E12, 6835.833333333333], [1.6023156E12, 6855.883333333333], [1.60231578E12, 6131.8], [1.60231548E12, 671.55], [1.60231566E12, 8834.433333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231584E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 522.4275680421416, "minX": 1.60231548E12, "maxY": 722.8970223325061, "series": [{"data": [[1.60231584E12, 542.2149046793753], [1.60231554E12, 722.8970223325061], [1.60231572E12, 665.6234772978968], [1.6023156E12, 687.8232662192393], [1.60231578E12, 704.0165394402043], [1.60231548E12, 559.6627906976744], [1.60231566E12, 522.4275680421416]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231584E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 520.7611940298513, "minX": 1.60231548E12, "maxY": 721.5111662531021, "series": [{"data": [[1.60231584E12, 541.0641247833611], [1.60231554E12, 721.5111662531021], [1.60231572E12, 664.2668881506096], [1.6023156E12, 685.3087248322148], [1.60231578E12, 702.3727735368954], [1.60231548E12, 556.9883720930231], [1.60231566E12, 520.7611940298513]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231584E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008779631255487272, "minX": 1.60231548E12, "maxY": 0.9767441860465121, "series": [{"data": [[1.60231584E12, 0.012131715771230492], [1.60231554E12, 0.011166253101736974], [1.60231572E12, 0.014396456256921377], [1.6023156E12, 0.011185682326621928], [1.60231578E12, 0.010178117048346062], [1.60231548E12, 0.9767441860465121], [1.60231566E12, 0.008779631255487272]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231584E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.60231548E12, "maxY": 21416.0, "series": [{"data": [[1.60231584E12, 21416.0], [1.60231554E12, 18947.0], [1.60231572E12, 16118.0], [1.6023156E12, 8471.0], [1.60231578E12, 20792.0], [1.60231548E12, 1566.0], [1.60231566E12, 21036.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231584E12, 24.605999586582186], [1.60231554E12, 32.0], [1.60231572E12, 32.0], [1.6023156E12, 29.054999786615372], [1.60231578E12, 31.082999812364577], [1.60231548E12, 34.0], [1.60231566E12, 30.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231584E12, 26.16660016536713], [1.60231554E12, 32.0], [1.60231572E12, 32.0], [1.6023156E12, 29.860500085353852], [1.60231578E12, 31.791300075054167], [1.60231548E12, 34.0], [1.60231566E12, 30.55220021724701]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231584E12, 25.47299979329109], [1.60231554E12, 32.0], [1.60231572E12, 32.0], [1.6023156E12, 29.502499893307686], [1.60231578E12, 31.47649990618229], [1.60231548E12, 34.0], [1.60231566E12, 30.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231584E12, 21.0], [1.60231554E12, 27.0], [1.60231572E12, 18.0], [1.6023156E12, 20.0], [1.60231578E12, 24.0], [1.60231548E12, 34.0], [1.60231566E12, 22.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231584E12, 277.0], [1.60231554E12, 277.5], [1.60231572E12, 330.0], [1.6023156E12, 579.5], [1.60231578E12, 457.0], [1.60231548E12, 522.0], [1.60231566E12, 325.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231584E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 56.5, "minX": 1.0, "maxY": 3674.0, "series": [{"data": [[32.0, 227.0], [2.0, 2727.5], [33.0, 211.0], [35.0, 191.0], [34.0, 221.0], [36.0, 172.5], [37.0, 120.0], [39.0, 234.0], [38.0, 56.5], [41.0, 124.0], [40.0, 151.0], [42.0, 220.5], [47.0, 129.0], [3.0, 2112.0], [52.0, 93.5], [4.0, 1115.5], [64.0, 119.0], [5.0, 637.5], [6.0, 590.5], [7.0, 559.0], [8.0, 382.0], [9.0, 438.5], [10.0, 628.0], [11.0, 664.0], [12.0, 618.0], [13.0, 638.0], [14.0, 495.5], [15.0, 546.0], [1.0, 3674.0], [16.0, 367.0], [17.0, 517.0], [18.0, 462.5], [19.0, 403.0], [20.0, 412.0], [21.0, 343.5], [22.0, 427.0], [23.0, 193.0], [24.0, 366.5], [25.0, 324.5], [26.0, 296.5], [27.0, 339.0], [28.0, 263.5], [29.0, 214.0], [30.0, 194.0], [31.0, 267.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 148.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 64.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 56.0, "minX": 1.0, "maxY": 3673.0, "series": [{"data": [[32.0, 226.0], [2.0, 2725.5], [33.0, 211.0], [35.0, 189.0], [34.0, 221.0], [36.0, 171.5], [37.0, 119.0], [39.0, 233.0], [38.0, 56.0], [41.0, 123.0], [40.0, 150.5], [42.0, 220.5], [47.0, 128.5], [3.0, 2110.0], [52.0, 93.0], [4.0, 1114.5], [64.0, 119.0], [5.0, 635.5], [6.0, 587.5], [7.0, 558.0], [8.0, 380.0], [9.0, 437.0], [10.0, 626.0], [11.0, 660.5], [12.0, 612.5], [13.0, 634.0], [14.0, 494.5], [15.0, 543.0], [1.0, 3673.0], [16.0, 364.5], [17.0, 517.0], [18.0, 462.0], [19.0, 397.0], [20.0, 412.0], [21.0, 343.0], [22.0, 427.0], [23.0, 192.0], [24.0, 366.5], [25.0, 321.5], [26.0, 296.0], [27.0, 339.0], [28.0, 262.0], [29.0, 211.5], [30.0, 192.5], [31.0, 266.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 148.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 64.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6, "minX": 1.60231548E12, "maxY": 18.983333333333334, "series": [{"data": [[1.60231584E12, 9.45], [1.60231554E12, 13.433333333333334], [1.60231572E12, 15.05], [1.6023156E12, 14.9], [1.60231578E12, 13.1], [1.60231548E12, 1.6], [1.60231566E12, 18.983333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231584E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231548E12, "maxY": 18.966666666666665, "series": [{"data": [[1.60231584E12, 9.616666666666667], [1.60231554E12, 13.433333333333334], [1.60231572E12, 15.05], [1.6023156E12, 14.9], [1.60231578E12, 13.1], [1.60231548E12, 1.4333333333333333], [1.60231566E12, 18.966666666666665]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60231566E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231584E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231548E12, "maxY": 18.966666666666665, "series": [{"data": [[1.60231584E12, 9.616666666666667], [1.60231554E12, 13.433333333333334], [1.60231572E12, 15.05], [1.6023156E12, 14.9], [1.60231578E12, 13.1], [1.60231548E12, 1.4333333333333333], [1.60231566E12, 18.966666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60231566E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231584E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231548E12, "maxY": 18.966666666666665, "series": [{"data": [[1.60231584E12, 9.616666666666667], [1.60231554E12, 13.433333333333334], [1.60231572E12, 15.05], [1.6023156E12, 14.9], [1.60231578E12, 13.1], [1.60231548E12, 1.4333333333333333], [1.60231566E12, 18.966666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60231566E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231584E12, "title": "Total Transactions Per Second"}},
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

