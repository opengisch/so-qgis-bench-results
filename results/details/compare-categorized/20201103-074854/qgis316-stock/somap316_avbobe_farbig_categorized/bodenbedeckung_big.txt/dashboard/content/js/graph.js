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
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 23004.0, "series": [{"data": [[0.0, 9.0], [0.1, 15.0], [0.2, 17.0], [0.3, 20.0], [0.4, 21.0], [0.5, 22.0], [0.6, 23.0], [0.7, 24.0], [0.8, 24.0], [0.9, 25.0], [1.0, 25.0], [1.1, 26.0], [1.2, 26.0], [1.3, 26.0], [1.4, 26.0], [1.5, 26.0], [1.6, 27.0], [1.7, 27.0], [1.8, 27.0], [1.9, 28.0], [2.0, 28.0], [2.1, 28.0], [2.2, 29.0], [2.3, 29.0], [2.4, 29.0], [2.5, 29.0], [2.6, 30.0], [2.7, 30.0], [2.8, 30.0], [2.9, 31.0], [3.0, 31.0], [3.1, 31.0], [3.2, 32.0], [3.3, 32.0], [3.4, 32.0], [3.5, 32.0], [3.6, 32.0], [3.7, 32.0], [3.8, 32.0], [3.9, 32.0], [4.0, 33.0], [4.1, 33.0], [4.2, 33.0], [4.3, 34.0], [4.4, 34.0], [4.5, 35.0], [4.6, 35.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 37.0], [5.1, 37.0], [5.2, 37.0], [5.3, 37.0], [5.4, 38.0], [5.5, 38.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 40.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 42.0], [6.8, 42.0], [6.9, 42.0], [7.0, 43.0], [7.1, 43.0], [7.2, 44.0], [7.3, 44.0], [7.4, 45.0], [7.5, 45.0], [7.6, 45.0], [7.7, 45.0], [7.8, 46.0], [7.9, 46.0], [8.0, 46.0], [8.1, 47.0], [8.2, 47.0], [8.3, 47.0], [8.4, 48.0], [8.5, 48.0], [8.6, 48.0], [8.7, 49.0], [8.8, 49.0], [8.9, 50.0], [9.0, 50.0], [9.1, 50.0], [9.2, 50.0], [9.3, 51.0], [9.4, 51.0], [9.5, 52.0], [9.6, 52.0], [9.7, 53.0], [9.8, 53.0], [9.9, 54.0], [10.0, 54.0], [10.1, 54.0], [10.2, 54.0], [10.3, 55.0], [10.4, 55.0], [10.5, 55.0], [10.6, 56.0], [10.7, 56.0], [10.8, 57.0], [10.9, 57.0], [11.0, 58.0], [11.1, 58.0], [11.2, 59.0], [11.3, 59.0], [11.4, 59.0], [11.5, 60.0], [11.6, 60.0], [11.7, 60.0], [11.8, 62.0], [11.9, 62.0], [12.0, 62.0], [12.1, 63.0], [12.2, 63.0], [12.3, 63.0], [12.4, 64.0], [12.5, 64.0], [12.6, 64.0], [12.7, 65.0], [12.8, 65.0], [12.9, 66.0], [13.0, 66.0], [13.1, 66.0], [13.2, 67.0], [13.3, 67.0], [13.4, 67.0], [13.5, 68.0], [13.6, 68.0], [13.7, 69.0], [13.8, 69.0], [13.9, 70.0], [14.0, 70.0], [14.1, 71.0], [14.2, 71.0], [14.3, 72.0], [14.4, 72.0], [14.5, 72.0], [14.6, 73.0], [14.7, 73.0], [14.8, 74.0], [14.9, 74.0], [15.0, 75.0], [15.1, 75.0], [15.2, 75.0], [15.3, 76.0], [15.4, 77.0], [15.5, 77.0], [15.6, 77.0], [15.7, 77.0], [15.8, 78.0], [15.9, 78.0], [16.0, 78.0], [16.1, 79.0], [16.2, 80.0], [16.3, 80.0], [16.4, 81.0], [16.5, 81.0], [16.6, 81.0], [16.7, 81.0], [16.8, 82.0], [16.9, 83.0], [17.0, 83.0], [17.1, 83.0], [17.2, 84.0], [17.3, 84.0], [17.4, 84.0], [17.5, 85.0], [17.6, 86.0], [17.7, 86.0], [17.8, 87.0], [17.9, 87.0], [18.0, 88.0], [18.1, 88.0], [18.2, 88.0], [18.3, 89.0], [18.4, 89.0], [18.5, 90.0], [18.6, 90.0], [18.7, 91.0], [18.8, 91.0], [18.9, 92.0], [19.0, 92.0], [19.1, 93.0], [19.2, 93.0], [19.3, 93.0], [19.4, 94.0], [19.5, 95.0], [19.6, 95.0], [19.7, 96.0], [19.8, 97.0], [19.9, 97.0], [20.0, 98.0], [20.1, 99.0], [20.2, 99.0], [20.3, 100.0], [20.4, 100.0], [20.5, 100.0], [20.6, 102.0], [20.7, 102.0], [20.8, 103.0], [20.9, 103.0], [21.0, 104.0], [21.1, 105.0], [21.2, 106.0], [21.3, 106.0], [21.4, 107.0], [21.5, 107.0], [21.6, 107.0], [21.7, 108.0], [21.8, 109.0], [21.9, 110.0], [22.0, 110.0], [22.1, 113.0], [22.2, 113.0], [22.3, 114.0], [22.4, 115.0], [22.5, 115.0], [22.6, 116.0], [22.7, 116.0], [22.8, 117.0], [22.9, 117.0], [23.0, 117.0], [23.1, 118.0], [23.2, 119.0], [23.3, 120.0], [23.4, 120.0], [23.5, 121.0], [23.6, 121.0], [23.7, 121.0], [23.8, 123.0], [23.9, 123.0], [24.0, 123.0], [24.1, 124.0], [24.2, 125.0], [24.3, 126.0], [24.4, 127.0], [24.5, 127.0], [24.6, 128.0], [24.7, 130.0], [24.8, 131.0], [24.9, 131.0], [25.0, 132.0], [25.1, 132.0], [25.2, 133.0], [25.3, 135.0], [25.4, 136.0], [25.5, 136.0], [25.6, 137.0], [25.7, 137.0], [25.8, 139.0], [25.9, 140.0], [26.0, 140.0], [26.1, 141.0], [26.2, 142.0], [26.3, 142.0], [26.4, 143.0], [26.5, 143.0], [26.6, 144.0], [26.7, 144.0], [26.8, 145.0], [26.9, 145.0], [27.0, 146.0], [27.1, 147.0], [27.2, 148.0], [27.3, 149.0], [27.4, 150.0], [27.5, 150.0], [27.6, 151.0], [27.7, 153.0], [27.8, 153.0], [27.9, 154.0], [28.0, 155.0], [28.1, 155.0], [28.2, 156.0], [28.3, 156.0], [28.4, 157.0], [28.5, 158.0], [28.6, 159.0], [28.7, 159.0], [28.8, 160.0], [28.9, 161.0], [29.0, 162.0], [29.1, 162.0], [29.2, 163.0], [29.3, 164.0], [29.4, 164.0], [29.5, 165.0], [29.6, 166.0], [29.7, 167.0], [29.8, 168.0], [29.9, 168.0], [30.0, 169.0], [30.1, 169.0], [30.2, 170.0], [30.3, 171.0], [30.4, 171.0], [30.5, 171.0], [30.6, 173.0], [30.7, 173.0], [30.8, 174.0], [30.9, 175.0], [31.0, 175.0], [31.1, 176.0], [31.2, 177.0], [31.3, 177.0], [31.4, 178.0], [31.5, 180.0], [31.6, 181.0], [31.7, 181.0], [31.8, 182.0], [31.9, 183.0], [32.0, 183.0], [32.1, 184.0], [32.2, 185.0], [32.3, 186.0], [32.4, 187.0], [32.5, 188.0], [32.6, 188.0], [32.7, 189.0], [32.8, 190.0], [32.9, 191.0], [33.0, 192.0], [33.1, 192.0], [33.2, 193.0], [33.3, 194.0], [33.4, 194.0], [33.5, 194.0], [33.6, 195.0], [33.7, 196.0], [33.8, 197.0], [33.9, 197.0], [34.0, 198.0], [34.1, 199.0], [34.2, 201.0], [34.3, 202.0], [34.4, 202.0], [34.5, 203.0], [34.6, 204.0], [34.7, 205.0], [34.8, 207.0], [34.9, 207.0], [35.0, 208.0], [35.1, 209.0], [35.2, 210.0], [35.3, 211.0], [35.4, 212.0], [35.5, 213.0], [35.6, 214.0], [35.7, 214.0], [35.8, 216.0], [35.9, 217.0], [36.0, 218.0], [36.1, 219.0], [36.2, 220.0], [36.3, 220.0], [36.4, 221.0], [36.5, 222.0], [36.6, 223.0], [36.7, 224.0], [36.8, 226.0], [36.9, 227.0], [37.0, 228.0], [37.1, 229.0], [37.2, 230.0], [37.3, 231.0], [37.4, 232.0], [37.5, 234.0], [37.6, 235.0], [37.7, 235.0], [37.8, 236.0], [37.9, 237.0], [38.0, 238.0], [38.1, 239.0], [38.2, 240.0], [38.3, 241.0], [38.4, 242.0], [38.5, 243.0], [38.6, 243.0], [38.7, 244.0], [38.8, 245.0], [38.9, 247.0], [39.0, 249.0], [39.1, 249.0], [39.2, 251.0], [39.3, 252.0], [39.4, 252.0], [39.5, 254.0], [39.6, 256.0], [39.7, 256.0], [39.8, 258.0], [39.9, 258.0], [40.0, 260.0], [40.1, 261.0], [40.2, 263.0], [40.3, 264.0], [40.4, 264.0], [40.5, 265.0], [40.6, 267.0], [40.7, 268.0], [40.8, 268.0], [40.9, 269.0], [41.0, 271.0], [41.1, 273.0], [41.2, 275.0], [41.3, 276.0], [41.4, 276.0], [41.5, 277.0], [41.6, 279.0], [41.7, 280.0], [41.8, 281.0], [41.9, 281.0], [42.0, 283.0], [42.1, 284.0], [42.2, 285.0], [42.3, 286.0], [42.4, 286.0], [42.5, 287.0], [42.6, 289.0], [42.7, 290.0], [42.8, 291.0], [42.9, 291.0], [43.0, 292.0], [43.1, 293.0], [43.2, 294.0], [43.3, 294.0], [43.4, 296.0], [43.5, 296.0], [43.6, 297.0], [43.7, 299.0], [43.8, 299.0], [43.9, 301.0], [44.0, 302.0], [44.1, 302.0], [44.2, 304.0], [44.3, 305.0], [44.4, 305.0], [44.5, 306.0], [44.6, 306.0], [44.7, 307.0], [44.8, 308.0], [44.9, 308.0], [45.0, 309.0], [45.1, 309.0], [45.2, 310.0], [45.3, 311.0], [45.4, 312.0], [45.5, 313.0], [45.6, 314.0], [45.7, 314.0], [45.8, 315.0], [45.9, 316.0], [46.0, 317.0], [46.1, 317.0], [46.2, 318.0], [46.3, 319.0], [46.4, 319.0], [46.5, 320.0], [46.6, 320.0], [46.7, 321.0], [46.8, 322.0], [46.9, 323.0], [47.0, 323.0], [47.1, 324.0], [47.2, 325.0], [47.3, 325.0], [47.4, 326.0], [47.5, 327.0], [47.6, 328.0], [47.7, 328.0], [47.8, 328.0], [47.9, 329.0], [48.0, 330.0], [48.1, 330.0], [48.2, 330.0], [48.3, 331.0], [48.4, 331.0], [48.5, 332.0], [48.6, 333.0], [48.7, 333.0], [48.8, 334.0], [48.9, 334.0], [49.0, 335.0], [49.1, 336.0], [49.2, 336.0], [49.3, 337.0], [49.4, 337.0], [49.5, 338.0], [49.6, 339.0], [49.7, 339.0], [49.8, 339.0], [49.9, 340.0], [50.0, 340.0], [50.1, 341.0], [50.2, 341.0], [50.3, 342.0], [50.4, 343.0], [50.5, 343.0], [50.6, 344.0], [50.7, 344.0], [50.8, 345.0], [50.9, 346.0], [51.0, 346.0], [51.1, 346.0], [51.2, 347.0], [51.3, 348.0], [51.4, 348.0], [51.5, 349.0], [51.6, 349.0], [51.7, 350.0], [51.8, 352.0], [51.9, 352.0], [52.0, 353.0], [52.1, 354.0], [52.2, 354.0], [52.3, 355.0], [52.4, 356.0], [52.5, 356.0], [52.6, 357.0], [52.7, 357.0], [52.8, 358.0], [52.9, 359.0], [53.0, 360.0], [53.1, 361.0], [53.2, 362.0], [53.3, 362.0], [53.4, 363.0], [53.5, 363.0], [53.6, 364.0], [53.7, 364.0], [53.8, 365.0], [53.9, 365.0], [54.0, 366.0], [54.1, 367.0], [54.2, 367.0], [54.3, 367.0], [54.4, 369.0], [54.5, 369.0], [54.6, 369.0], [54.7, 370.0], [54.8, 370.0], [54.9, 371.0], [55.0, 372.0], [55.1, 372.0], [55.2, 373.0], [55.3, 375.0], [55.4, 376.0], [55.5, 377.0], [55.6, 377.0], [55.7, 378.0], [55.8, 380.0], [55.9, 381.0], [56.0, 382.0], [56.1, 383.0], [56.2, 385.0], [56.3, 385.0], [56.4, 387.0], [56.5, 387.0], [56.6, 388.0], [56.7, 389.0], [56.8, 390.0], [56.9, 390.0], [57.0, 391.0], [57.1, 392.0], [57.2, 393.0], [57.3, 394.0], [57.4, 397.0], [57.5, 398.0], [57.6, 399.0], [57.7, 400.0], [57.8, 401.0], [57.9, 402.0], [58.0, 404.0], [58.1, 405.0], [58.2, 405.0], [58.3, 406.0], [58.4, 409.0], [58.5, 411.0], [58.6, 412.0], [58.7, 413.0], [58.8, 414.0], [58.9, 415.0], [59.0, 415.0], [59.1, 416.0], [59.2, 417.0], [59.3, 417.0], [59.4, 419.0], [59.5, 420.0], [59.6, 421.0], [59.7, 424.0], [59.8, 425.0], [59.9, 426.0], [60.0, 428.0], [60.1, 430.0], [60.2, 433.0], [60.3, 434.0], [60.4, 436.0], [60.5, 438.0], [60.6, 440.0], [60.7, 441.0], [60.8, 442.0], [60.9, 443.0], [61.0, 443.0], [61.1, 445.0], [61.2, 447.0], [61.3, 448.0], [61.4, 449.0], [61.5, 450.0], [61.6, 451.0], [61.7, 453.0], [61.8, 454.0], [61.9, 455.0], [62.0, 456.0], [62.1, 458.0], [62.2, 460.0], [62.3, 461.0], [62.4, 463.0], [62.5, 465.0], [62.6, 466.0], [62.7, 467.0], [62.8, 469.0], [62.9, 471.0], [63.0, 472.0], [63.1, 473.0], [63.2, 474.0], [63.3, 475.0], [63.4, 478.0], [63.5, 479.0], [63.6, 480.0], [63.7, 482.0], [63.8, 484.0], [63.9, 487.0], [64.0, 488.0], [64.1, 490.0], [64.2, 493.0], [64.3, 495.0], [64.4, 500.0], [64.5, 501.0], [64.6, 503.0], [64.7, 505.0], [64.8, 507.0], [64.9, 509.0], [65.0, 510.0], [65.1, 511.0], [65.2, 512.0], [65.3, 514.0], [65.4, 515.0], [65.5, 517.0], [65.6, 519.0], [65.7, 522.0], [65.8, 524.0], [65.9, 526.0], [66.0, 528.0], [66.1, 528.0], [66.2, 530.0], [66.3, 532.0], [66.4, 535.0], [66.5, 539.0], [66.6, 540.0], [66.7, 543.0], [66.8, 545.0], [66.9, 548.0], [67.0, 549.0], [67.1, 550.0], [67.2, 552.0], [67.3, 554.0], [67.4, 554.0], [67.5, 556.0], [67.6, 560.0], [67.7, 562.0], [67.8, 565.0], [67.9, 568.0], [68.0, 568.0], [68.1, 570.0], [68.2, 573.0], [68.3, 574.0], [68.4, 577.0], [68.5, 579.0], [68.6, 580.0], [68.7, 582.0], [68.8, 583.0], [68.9, 584.0], [69.0, 585.0], [69.1, 587.0], [69.2, 588.0], [69.3, 588.0], [69.4, 589.0], [69.5, 590.0], [69.6, 591.0], [69.7, 593.0], [69.8, 596.0], [69.9, 597.0], [70.0, 597.0], [70.1, 598.0], [70.2, 599.0], [70.3, 601.0], [70.4, 602.0], [70.5, 602.0], [70.6, 604.0], [70.7, 605.0], [70.8, 607.0], [70.9, 608.0], [71.0, 609.0], [71.1, 609.0], [71.2, 610.0], [71.3, 611.0], [71.4, 611.0], [71.5, 613.0], [71.6, 615.0], [71.7, 615.0], [71.8, 616.0], [71.9, 617.0], [72.0, 618.0], [72.1, 620.0], [72.2, 621.0], [72.3, 622.0], [72.4, 623.0], [72.5, 625.0], [72.6, 627.0], [72.7, 628.0], [72.8, 629.0], [72.9, 631.0], [73.0, 632.0], [73.1, 633.0], [73.2, 634.0], [73.3, 635.0], [73.4, 636.0], [73.5, 637.0], [73.6, 638.0], [73.7, 639.0], [73.8, 640.0], [73.9, 640.0], [74.0, 641.0], [74.1, 642.0], [74.2, 643.0], [74.3, 644.0], [74.4, 644.0], [74.5, 645.0], [74.6, 646.0], [74.7, 647.0], [74.8, 648.0], [74.9, 649.0], [75.0, 649.0], [75.1, 650.0], [75.2, 651.0], [75.3, 652.0], [75.4, 653.0], [75.5, 654.0], [75.6, 655.0], [75.7, 656.0], [75.8, 657.0], [75.9, 658.0], [76.0, 658.0], [76.1, 659.0], [76.2, 660.0], [76.3, 661.0], [76.4, 662.0], [76.5, 663.0], [76.6, 665.0], [76.7, 666.0], [76.8, 667.0], [76.9, 670.0], [77.0, 671.0], [77.1, 672.0], [77.2, 674.0], [77.3, 675.0], [77.4, 677.0], [77.5, 678.0], [77.6, 680.0], [77.7, 681.0], [77.8, 682.0], [77.9, 684.0], [78.0, 684.0], [78.1, 686.0], [78.2, 688.0], [78.3, 690.0], [78.4, 691.0], [78.5, 693.0], [78.6, 694.0], [78.7, 698.0], [78.8, 700.0], [78.9, 701.0], [79.0, 702.0], [79.1, 703.0], [79.2, 704.0], [79.3, 705.0], [79.4, 706.0], [79.5, 708.0], [79.6, 710.0], [79.7, 713.0], [79.8, 715.0], [79.9, 717.0], [80.0, 720.0], [80.1, 723.0], [80.2, 725.0], [80.3, 726.0], [80.4, 731.0], [80.5, 733.0], [80.6, 737.0], [80.7, 739.0], [80.8, 744.0], [80.9, 747.0], [81.0, 749.0], [81.1, 753.0], [81.2, 756.0], [81.3, 758.0], [81.4, 760.0], [81.5, 762.0], [81.6, 765.0], [81.7, 770.0], [81.8, 772.0], [81.9, 776.0], [82.0, 779.0], [82.1, 784.0], [82.2, 790.0], [82.3, 798.0], [82.4, 800.0], [82.5, 806.0], [82.6, 809.0], [82.7, 816.0], [82.8, 820.0], [82.9, 821.0], [83.0, 829.0], [83.1, 831.0], [83.2, 834.0], [83.3, 838.0], [83.4, 839.0], [83.5, 845.0], [83.6, 846.0], [83.7, 850.0], [83.8, 855.0], [83.9, 857.0], [84.0, 860.0], [84.1, 866.0], [84.2, 871.0], [84.3, 879.0], [84.4, 881.0], [84.5, 883.0], [84.6, 888.0], [84.7, 891.0], [84.8, 896.0], [84.9, 901.0], [85.0, 904.0], [85.1, 906.0], [85.2, 908.0], [85.3, 911.0], [85.4, 915.0], [85.5, 917.0], [85.6, 919.0], [85.7, 921.0], [85.8, 923.0], [85.9, 926.0], [86.0, 926.0], [86.1, 929.0], [86.2, 931.0], [86.3, 933.0], [86.4, 936.0], [86.5, 939.0], [86.6, 942.0], [86.7, 944.0], [86.8, 946.0], [86.9, 948.0], [87.0, 952.0], [87.1, 954.0], [87.2, 955.0], [87.3, 957.0], [87.4, 960.0], [87.5, 961.0], [87.6, 963.0], [87.7, 966.0], [87.8, 967.0], [87.9, 969.0], [88.0, 973.0], [88.1, 975.0], [88.2, 977.0], [88.3, 979.0], [88.4, 983.0], [88.5, 985.0], [88.6, 989.0], [88.7, 992.0], [88.8, 995.0], [88.9, 998.0], [89.0, 1005.0], [89.1, 1008.0], [89.2, 1016.0], [89.3, 1018.0], [89.4, 1026.0], [89.5, 1033.0], [89.6, 1038.0], [89.7, 1045.0], [89.8, 1053.0], [89.9, 1058.0], [90.0, 1070.0], [90.1, 1077.0], [90.2, 1090.0], [90.3, 1110.0], [90.4, 1116.0], [90.5, 1126.0], [90.6, 1139.0], [90.7, 1150.0], [90.8, 1165.0], [90.9, 1175.0], [91.0, 1182.0], [91.1, 1189.0], [91.2, 1192.0], [91.3, 1196.0], [91.4, 1202.0], [91.5, 1209.0], [91.6, 1214.0], [91.7, 1221.0], [91.8, 1227.0], [91.9, 1234.0], [92.0, 1240.0], [92.1, 1242.0], [92.2, 1250.0], [92.3, 1258.0], [92.4, 1262.0], [92.5, 1266.0], [92.6, 1270.0], [92.7, 1275.0], [92.8, 1279.0], [92.9, 1284.0], [93.0, 1289.0], [93.1, 1292.0], [93.2, 1304.0], [93.3, 1312.0], [93.4, 1324.0], [93.5, 1335.0], [93.6, 1340.0], [93.7, 1354.0], [93.8, 1378.0], [93.9, 1387.0], [94.0, 1408.0], [94.1, 1426.0], [94.2, 1455.0], [94.3, 1501.0], [94.4, 1521.0], [94.5, 1560.0], [94.6, 1580.0], [94.7, 1623.0], [94.8, 1678.0], [94.9, 1728.0], [95.0, 1745.0], [95.1, 1787.0], [95.2, 1864.0], [95.3, 1914.0], [95.4, 1963.0], [95.5, 2009.0], [95.6, 2086.0], [95.7, 2167.0], [95.8, 2249.0], [95.9, 2283.0], [96.0, 2369.0], [96.1, 2446.0], [96.2, 2548.0], [96.3, 2665.0], [96.4, 2692.0], [96.5, 2735.0], [96.6, 2782.0], [96.7, 2875.0], [96.8, 2991.0], [96.9, 3095.0], [97.0, 3184.0], [97.1, 3254.0], [97.2, 3316.0], [97.3, 3524.0], [97.4, 3603.0], [97.5, 3693.0], [97.6, 3883.0], [97.7, 3983.0], [97.8, 4199.0], [97.9, 4282.0], [98.0, 4338.0], [98.1, 4605.0], [98.2, 4830.0], [98.3, 5505.0], [98.4, 5759.0], [98.5, 5961.0], [98.6, 6450.0], [98.7, 6747.0], [98.8, 7782.0], [98.9, 8380.0], [99.0, 8571.0], [99.1, 8733.0], [99.2, 8916.0], [99.3, 9303.0], [99.4, 9705.0], [99.5, 11147.0], [99.6, 11481.0], [99.7, 11714.0], [99.8, 11818.0], [99.9, 12185.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1050.0, "series": [{"data": [[0.0, 1050.0], [100.0, 720.0], [200.0, 505.0], [300.0, 719.0], [400.0, 348.0], [500.0, 304.0], [600.0, 442.0], [700.0, 187.0], [800.0, 130.0], [900.0, 210.0], [1000.0, 69.0], [1100.0, 57.0], [1200.0, 95.0], [1300.0, 41.0], [1400.0, 17.0], [1500.0, 18.0], [1600.0, 11.0], [1700.0, 15.0], [1800.0, 5.0], [1900.0, 11.0], [2000.0, 8.0], [2100.0, 7.0], [2200.0, 10.0], [2300.0, 5.0], [2400.0, 7.0], [2500.0, 3.0], [2600.0, 11.0], [2700.0, 9.0], [2800.0, 5.0], [2900.0, 6.0], [3000.0, 5.0], [3100.0, 5.0], [3300.0, 3.0], [3200.0, 9.0], [3400.0, 1.0], [3500.0, 7.0], [3600.0, 6.0], [3700.0, 1.0], [3800.0, 5.0], [3900.0, 4.0], [4000.0, 2.0], [4300.0, 6.0], [4200.0, 7.0], [4100.0, 3.0], [4400.0, 1.0], [4600.0, 3.0], [4500.0, 1.0], [4700.0, 2.0], [4800.0, 1.0], [5000.0, 1.0], [4900.0, 1.0], [5200.0, 1.0], [5500.0, 2.0], [5600.0, 1.0], [5400.0, 1.0], [5700.0, 5.0], [5900.0, 4.0], [6100.0, 1.0], [6300.0, 2.0], [6400.0, 2.0], [6600.0, 3.0], [6500.0, 1.0], [6900.0, 1.0], [6700.0, 1.0], [6800.0, 1.0], [7000.0, 1.0], [7500.0, 1.0], [7700.0, 1.0], [8100.0, 2.0], [8300.0, 6.0], [8400.0, 2.0], [8500.0, 2.0], [8600.0, 2.0], [8700.0, 2.0], [8900.0, 4.0], [8800.0, 3.0], [9100.0, 2.0], [9300.0, 3.0], [9400.0, 2.0], [9700.0, 1.0], [9800.0, 2.0], [10700.0, 1.0], [11100.0, 2.0], [11000.0, 1.0], [10900.0, 1.0], [11300.0, 2.0], [11500.0, 1.0], [11600.0, 2.0], [11700.0, 5.0], [11400.0, 3.0], [11900.0, 2.0], [11800.0, 1.0], [12100.0, 2.0], [12200.0, 1.0], [12000.0, 1.0], [16700.0, 1.0], [19800.0, 1.0], [23000.0, 1.0], [22800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 23000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 296.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3345.0, "series": [{"data": [[0.0, 3345.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1549.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 296.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.914772727272727, "minX": 1.60439034E12, "maxY": 10.0, "series": [{"data": [[1.60439046E12, 10.0], [1.6043904E12, 10.0], [1.60439058E12, 10.0], [1.60439052E12, 10.0], [1.6043907E12, 9.914772727272727], [1.60439034E12, 9.973684210526317], [1.60439064E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043907E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 387.0, "minX": 1.0, "maxY": 8668.0, "series": [{"data": [[8.0, 462.5], [4.0, 606.0], [2.0, 8583.0], [1.0, 8668.0], [9.0, 387.0], [10.0, 640.8609501738132], [5.0, 620.0], [6.0, 673.0], [3.0, 869.0], [7.0, 607.3333333333334]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.989788053949908, 643.8402697495162]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2292.483333333333, "minX": 1.60439034E12, "maxY": 5549893.416666667, "series": [{"data": [[1.60439046E12, 5549893.416666667], [1.6043904E12, 2241140.533333333], [1.60439058E12, 4048366.6166666667], [1.60439052E12, 4635787.883333334], [1.6043907E12, 1915573.7666666666], [1.60439034E12, 1269737.7333333334], [1.60439064E12, 3981770.6333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60439046E12, 6597.133333333333], [1.6043904E12, 4893.083333333333], [1.60439058E12, 7027.4], [1.60439052E12, 8898.05], [1.6043907E12, 4147.0], [1.60439034E12, 2292.483333333333], [1.60439064E12, 6086.483333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043907E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 359.5592105263157, "minX": 1.60439034E12, "maxY": 920.3052959501559, "series": [{"data": [[1.60439046E12, 683.6666666666671], [1.6043904E12, 920.3052959501559], [1.60439058E12, 653.4525862068969], [1.60439052E12, 527.7730434782612], [1.6043907E12, 473.6022727272727], [1.60439034E12, 359.5592105263157], [1.60439064E12, 758.4903474903468]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043907E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 357.58223684210526, "minX": 1.60439034E12, "maxY": 918.6744548286606, "series": [{"data": [[1.60439046E12, 680.8931475029037], [1.6043904E12, 918.6744548286606], [1.60439058E12, 651.9396551724128], [1.60439052E12, 526.1834782608704], [1.6043907E12, 472.24431818181785], [1.60439034E12, 357.58223684210526], [1.60439064E12, 756.7220077220076]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043907E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010296010296010301, "minX": 1.60439034E12, "maxY": 0.29276315789473684, "series": [{"data": [[1.60439046E12, 0.01858304297328689], [1.6043904E12, 0.02180685358255452], [1.60439058E12, 0.01077586206896552], [1.60439052E12, 0.010434782608695648], [1.6043907E12, 0.011363636363636371], [1.60439034E12, 0.29276315789473684], [1.60439064E12, 0.010296010296010301]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043907E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.60439034E12, "maxY": 23004.0, "series": [{"data": [[1.60439046E12, 9705.0], [1.6043904E12, 19804.0], [1.60439058E12, 9124.0], [1.60439052E12, 23004.0], [1.6043907E12, 8919.0], [1.60439034E12, 1333.0], [1.60439064E12, 22859.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60439046E12, 25.0], [1.6043904E12, 26.786999846696855], [1.60439058E12, 24.0], [1.60439052E12, 25.0], [1.6043907E12, 17.76099987387657], [1.60439034E12, 23.744999927282333], [1.60439064E12, 26.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60439046E12, 25.0], [1.6043904E12, 27.0], [1.60439058E12, 24.0], [1.60439052E12, 25.0], [1.6043907E12, 18.47420010089874], [1.60439034E12, 24.0585000872612], [1.60439064E12, 26.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60439046E12, 25.0], [1.6043904E12, 27.0], [1.60439058E12, 24.0], [1.60439052E12, 25.0], [1.6043907E12, 18.05099987387657], [1.60439034E12, 23.897499963641167], [1.60439064E12, 26.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60439046E12, 14.0], [1.6043904E12, 20.0], [1.60439058E12, 9.0], [1.60439052E12, 16.0], [1.6043907E12, 14.0], [1.60439034E12, 21.0], [1.60439064E12, 14.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60439046E12, 556.0], [1.6043904E12, 233.0], [1.60439058E12, 327.5], [1.60439052E12, 314.0], [1.6043907E12, 264.0], [1.60439034E12, 310.5], [1.60439064E12, 401.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043907E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 81.0, "minX": 1.0, "maxY": 2883.5, "series": [{"data": [[2.0, 1180.5], [33.0, 213.0], [32.0, 281.5], [34.0, 239.5], [35.0, 117.0], [36.0, 235.5], [37.0, 281.0], [39.0, 155.5], [40.0, 102.5], [41.0, 166.5], [42.0, 206.5], [44.0, 144.5], [47.0, 179.0], [3.0, 1101.0], [48.0, 90.0], [52.0, 112.5], [55.0, 91.0], [4.0, 730.5], [5.0, 479.0], [6.0, 548.0], [7.0, 578.0], [8.0, 374.5], [9.0, 605.0], [10.0, 654.5], [11.0, 613.5], [12.0, 703.5], [13.0, 427.0], [14.0, 601.5], [15.0, 487.0], [1.0, 2883.5], [16.0, 509.5], [17.0, 390.0], [18.0, 369.5], [19.0, 387.0], [20.0, 470.5], [21.0, 344.0], [22.0, 328.0], [23.0, 334.0], [24.0, 289.0], [25.0, 265.5], [26.0, 339.0], [27.0, 311.0], [28.0, 315.0], [29.0, 142.0], [30.0, 211.0], [31.0, 81.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 80.0, "minX": 1.0, "maxY": 2882.0, "series": [{"data": [[2.0, 1175.0], [33.0, 213.0], [32.0, 280.5], [34.0, 238.5], [35.0, 117.0], [36.0, 234.5], [37.0, 279.0], [39.0, 154.5], [40.0, 102.0], [41.0, 165.5], [42.0, 206.0], [44.0, 144.0], [47.0, 178.0], [3.0, 1099.0], [48.0, 89.0], [52.0, 112.0], [55.0, 90.0], [4.0, 728.5], [5.0, 477.0], [6.0, 546.0], [7.0, 576.0], [8.0, 373.5], [9.0, 600.0], [10.0, 651.0], [11.0, 610.5], [12.0, 699.0], [13.0, 425.0], [14.0, 598.5], [15.0, 484.5], [1.0, 2882.0], [16.0, 508.5], [17.0, 389.0], [18.0, 368.0], [19.0, 386.0], [20.0, 469.0], [21.0, 343.0], [22.0, 324.0], [23.0, 333.0], [24.0, 288.0], [25.0, 264.5], [26.0, 338.0], [27.0, 310.5], [28.0, 314.0], [29.0, 141.0], [30.0, 210.0], [31.0, 80.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.233333333333333, "minX": 1.60439034E12, "maxY": 19.166666666666668, "series": [{"data": [[1.60439046E12, 14.35], [1.6043904E12, 10.7], [1.60439058E12, 15.466666666666667], [1.60439052E12, 19.166666666666668], [1.6043907E12, 8.633333333333333], [1.60439034E12, 5.233333333333333], [1.60439064E12, 12.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043907E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.066666666666666, "minX": 1.60439034E12, "maxY": 19.166666666666668, "series": [{"data": [[1.60439046E12, 14.35], [1.6043904E12, 10.7], [1.60439058E12, 15.466666666666667], [1.60439052E12, 19.166666666666668], [1.6043907E12, 8.8], [1.60439034E12, 5.066666666666666], [1.60439064E12, 12.95]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043907E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.066666666666666, "minX": 1.60439034E12, "maxY": 19.166666666666668, "series": [{"data": [[1.60439046E12, 14.35], [1.6043904E12, 10.7], [1.60439058E12, 15.466666666666667], [1.60439052E12, 19.166666666666668], [1.6043907E12, 8.8], [1.60439034E12, 5.066666666666666], [1.60439064E12, 12.95]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043907E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.066666666666666, "minX": 1.60439034E12, "maxY": 19.166666666666668, "series": [{"data": [[1.60439046E12, 14.35], [1.6043904E12, 10.7], [1.60439058E12, 15.466666666666667], [1.60439052E12, 19.166666666666668], [1.6043907E12, 8.8], [1.60439034E12, 5.066666666666666], [1.60439064E12, 12.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043907E12, "title": "Total Transactions Per Second"}},
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

