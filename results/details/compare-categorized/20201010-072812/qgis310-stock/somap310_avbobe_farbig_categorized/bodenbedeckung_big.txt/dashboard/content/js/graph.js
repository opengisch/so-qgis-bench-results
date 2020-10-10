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
        data: {"result": {"minY": 15.0, "minX": 0.0, "maxY": 20702.0, "series": [{"data": [[0.0, 15.0], [0.1, 21.0], [0.2, 23.0], [0.3, 26.0], [0.4, 27.0], [0.5, 28.0], [0.6, 28.0], [0.7, 29.0], [0.8, 29.0], [0.9, 30.0], [1.0, 32.0], [1.1, 32.0], [1.2, 32.0], [1.3, 33.0], [1.4, 33.0], [1.5, 33.0], [1.6, 34.0], [1.7, 34.0], [1.8, 34.0], [1.9, 35.0], [2.0, 35.0], [2.1, 35.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 36.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 38.0], [3.0, 38.0], [3.1, 38.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 40.0], [3.7, 40.0], [3.8, 40.0], [3.9, 41.0], [4.0, 41.0], [4.1, 41.0], [4.2, 42.0], [4.3, 43.0], [4.4, 43.0], [4.5, 43.0], [4.6, 44.0], [4.7, 44.0], [4.8, 44.0], [4.9, 44.0], [5.0, 45.0], [5.1, 45.0], [5.2, 45.0], [5.3, 46.0], [5.4, 46.0], [5.5, 47.0], [5.6, 47.0], [5.7, 47.0], [5.8, 48.0], [5.9, 49.0], [6.0, 49.0], [6.1, 49.0], [6.2, 50.0], [6.3, 50.0], [6.4, 51.0], [6.5, 51.0], [6.6, 52.0], [6.7, 52.0], [6.8, 53.0], [6.9, 53.0], [7.0, 53.0], [7.1, 53.0], [7.2, 53.0], [7.3, 54.0], [7.4, 54.0], [7.5, 54.0], [7.6, 55.0], [7.7, 55.0], [7.8, 55.0], [7.9, 56.0], [8.0, 56.0], [8.1, 57.0], [8.2, 57.0], [8.3, 57.0], [8.4, 58.0], [8.5, 59.0], [8.6, 59.0], [8.7, 59.0], [8.8, 60.0], [8.9, 60.0], [9.0, 60.0], [9.1, 60.0], [9.2, 60.0], [9.3, 61.0], [9.4, 61.0], [9.5, 62.0], [9.6, 63.0], [9.7, 63.0], [9.8, 64.0], [9.9, 64.0], [10.0, 65.0], [10.1, 65.0], [10.2, 65.0], [10.3, 65.0], [10.4, 66.0], [10.5, 66.0], [10.6, 67.0], [10.7, 67.0], [10.8, 67.0], [10.9, 67.0], [11.0, 68.0], [11.1, 69.0], [11.2, 69.0], [11.3, 69.0], [11.4, 69.0], [11.5, 70.0], [11.6, 70.0], [11.7, 70.0], [11.8, 70.0], [11.9, 71.0], [12.0, 71.0], [12.1, 72.0], [12.2, 72.0], [12.3, 72.0], [12.4, 73.0], [12.5, 73.0], [12.6, 73.0], [12.7, 74.0], [12.8, 74.0], [12.9, 74.0], [13.0, 75.0], [13.1, 76.0], [13.2, 76.0], [13.3, 76.0], [13.4, 76.0], [13.5, 77.0], [13.6, 77.0], [13.7, 78.0], [13.8, 79.0], [13.9, 80.0], [14.0, 80.0], [14.1, 80.0], [14.2, 81.0], [14.3, 81.0], [14.4, 82.0], [14.5, 82.0], [14.6, 82.0], [14.7, 83.0], [14.8, 83.0], [14.9, 84.0], [15.0, 85.0], [15.1, 85.0], [15.2, 86.0], [15.3, 86.0], [15.4, 87.0], [15.5, 87.0], [15.6, 88.0], [15.7, 89.0], [15.8, 89.0], [15.9, 89.0], [16.0, 90.0], [16.1, 90.0], [16.2, 91.0], [16.3, 92.0], [16.4, 92.0], [16.5, 93.0], [16.6, 93.0], [16.7, 93.0], [16.8, 94.0], [16.9, 94.0], [17.0, 94.0], [17.1, 95.0], [17.2, 95.0], [17.3, 96.0], [17.4, 97.0], [17.5, 97.0], [17.6, 97.0], [17.7, 98.0], [17.8, 98.0], [17.9, 99.0], [18.0, 99.0], [18.1, 100.0], [18.2, 101.0], [18.3, 101.0], [18.4, 102.0], [18.5, 103.0], [18.6, 103.0], [18.7, 103.0], [18.8, 104.0], [18.9, 104.0], [19.0, 105.0], [19.1, 105.0], [19.2, 106.0], [19.3, 106.0], [19.4, 107.0], [19.5, 107.0], [19.6, 108.0], [19.7, 109.0], [19.8, 109.0], [19.9, 110.0], [20.0, 110.0], [20.1, 111.0], [20.2, 112.0], [20.3, 112.0], [20.4, 113.0], [20.5, 114.0], [20.6, 114.0], [20.7, 114.0], [20.8, 115.0], [20.9, 115.0], [21.0, 116.0], [21.1, 117.0], [21.2, 117.0], [21.3, 118.0], [21.4, 119.0], [21.5, 119.0], [21.6, 120.0], [21.7, 120.0], [21.8, 121.0], [21.9, 121.0], [22.0, 122.0], [22.1, 122.0], [22.2, 123.0], [22.3, 123.0], [22.4, 124.0], [22.5, 125.0], [22.6, 126.0], [22.7, 126.0], [22.8, 127.0], [22.9, 129.0], [23.0, 129.0], [23.1, 130.0], [23.2, 130.0], [23.3, 131.0], [23.4, 131.0], [23.5, 132.0], [23.6, 132.0], [23.7, 133.0], [23.8, 134.0], [23.9, 134.0], [24.0, 134.0], [24.1, 136.0], [24.2, 136.0], [24.3, 136.0], [24.4, 137.0], [24.5, 138.0], [24.6, 139.0], [24.7, 139.0], [24.8, 140.0], [24.9, 140.0], [25.0, 142.0], [25.1, 142.0], [25.2, 143.0], [25.3, 144.0], [25.4, 144.0], [25.5, 145.0], [25.6, 145.0], [25.7, 146.0], [25.8, 146.0], [25.9, 147.0], [26.0, 147.0], [26.1, 148.0], [26.2, 150.0], [26.3, 150.0], [26.4, 151.0], [26.5, 151.0], [26.6, 152.0], [26.7, 153.0], [26.8, 154.0], [26.9, 155.0], [27.0, 156.0], [27.1, 157.0], [27.2, 157.0], [27.3, 158.0], [27.4, 159.0], [27.5, 160.0], [27.6, 162.0], [27.7, 163.0], [27.8, 163.0], [27.9, 164.0], [28.0, 164.0], [28.1, 165.0], [28.2, 166.0], [28.3, 167.0], [28.4, 168.0], [28.5, 169.0], [28.6, 170.0], [28.7, 170.0], [28.8, 171.0], [28.9, 172.0], [29.0, 172.0], [29.1, 173.0], [29.2, 174.0], [29.3, 175.0], [29.4, 175.0], [29.5, 177.0], [29.6, 177.0], [29.7, 178.0], [29.8, 178.0], [29.9, 179.0], [30.0, 180.0], [30.1, 181.0], [30.2, 181.0], [30.3, 182.0], [30.4, 183.0], [30.5, 183.0], [30.6, 184.0], [30.7, 185.0], [30.8, 185.0], [30.9, 186.0], [31.0, 187.0], [31.1, 188.0], [31.2, 189.0], [31.3, 190.0], [31.4, 191.0], [31.5, 192.0], [31.6, 192.0], [31.7, 193.0], [31.8, 194.0], [31.9, 194.0], [32.0, 195.0], [32.1, 195.0], [32.2, 196.0], [32.3, 197.0], [32.4, 198.0], [32.5, 198.0], [32.6, 199.0], [32.7, 200.0], [32.8, 201.0], [32.9, 201.0], [33.0, 203.0], [33.1, 203.0], [33.2, 204.0], [33.3, 205.0], [33.4, 205.0], [33.5, 206.0], [33.6, 207.0], [33.7, 207.0], [33.8, 208.0], [33.9, 209.0], [34.0, 210.0], [34.1, 211.0], [34.2, 212.0], [34.3, 213.0], [34.4, 214.0], [34.5, 216.0], [34.6, 217.0], [34.7, 217.0], [34.8, 217.0], [34.9, 218.0], [35.0, 219.0], [35.1, 220.0], [35.2, 221.0], [35.3, 223.0], [35.4, 224.0], [35.5, 225.0], [35.6, 226.0], [35.7, 227.0], [35.8, 228.0], [35.9, 229.0], [36.0, 230.0], [36.1, 231.0], [36.2, 233.0], [36.3, 233.0], [36.4, 235.0], [36.5, 236.0], [36.6, 237.0], [36.7, 239.0], [36.8, 240.0], [36.9, 241.0], [37.0, 242.0], [37.1, 243.0], [37.2, 245.0], [37.3, 246.0], [37.4, 247.0], [37.5, 248.0], [37.6, 249.0], [37.7, 250.0], [37.8, 252.0], [37.9, 253.0], [38.0, 254.0], [38.1, 257.0], [38.2, 259.0], [38.3, 259.0], [38.4, 261.0], [38.5, 262.0], [38.6, 263.0], [38.7, 264.0], [38.8, 266.0], [38.9, 268.0], [39.0, 269.0], [39.1, 270.0], [39.2, 271.0], [39.3, 273.0], [39.4, 274.0], [39.5, 275.0], [39.6, 276.0], [39.7, 276.0], [39.8, 279.0], [39.9, 279.0], [40.0, 280.0], [40.1, 282.0], [40.2, 283.0], [40.3, 284.0], [40.4, 285.0], [40.5, 287.0], [40.6, 288.0], [40.7, 289.0], [40.8, 289.0], [40.9, 290.0], [41.0, 291.0], [41.1, 291.0], [41.2, 292.0], [41.3, 293.0], [41.4, 294.0], [41.5, 295.0], [41.6, 295.0], [41.7, 297.0], [41.8, 297.0], [41.9, 298.0], [42.0, 299.0], [42.1, 299.0], [42.2, 299.0], [42.3, 300.0], [42.4, 301.0], [42.5, 301.0], [42.6, 302.0], [42.7, 302.0], [42.8, 303.0], [42.9, 304.0], [43.0, 306.0], [43.1, 307.0], [43.2, 307.0], [43.3, 308.0], [43.4, 309.0], [43.5, 310.0], [43.6, 310.0], [43.7, 311.0], [43.8, 312.0], [43.9, 312.0], [44.0, 313.0], [44.1, 314.0], [44.2, 314.0], [44.3, 315.0], [44.4, 316.0], [44.5, 316.0], [44.6, 318.0], [44.7, 318.0], [44.8, 318.0], [44.9, 320.0], [45.0, 321.0], [45.1, 321.0], [45.2, 322.0], [45.3, 323.0], [45.4, 323.0], [45.5, 323.0], [45.6, 324.0], [45.7, 324.0], [45.8, 324.0], [45.9, 325.0], [46.0, 325.0], [46.1, 326.0], [46.2, 326.0], [46.3, 327.0], [46.4, 328.0], [46.5, 328.0], [46.6, 329.0], [46.7, 329.0], [46.8, 330.0], [46.9, 331.0], [47.0, 331.0], [47.1, 331.0], [47.2, 332.0], [47.3, 333.0], [47.4, 334.0], [47.5, 334.0], [47.6, 335.0], [47.7, 335.0], [47.8, 336.0], [47.9, 337.0], [48.0, 338.0], [48.1, 339.0], [48.2, 340.0], [48.3, 340.0], [48.4, 341.0], [48.5, 342.0], [48.6, 342.0], [48.7, 343.0], [48.8, 344.0], [48.9, 344.0], [49.0, 345.0], [49.1, 345.0], [49.2, 346.0], [49.3, 346.0], [49.4, 347.0], [49.5, 348.0], [49.6, 348.0], [49.7, 349.0], [49.8, 350.0], [49.9, 351.0], [50.0, 351.0], [50.1, 352.0], [50.2, 353.0], [50.3, 353.0], [50.4, 354.0], [50.5, 355.0], [50.6, 355.0], [50.7, 356.0], [50.8, 356.0], [50.9, 357.0], [51.0, 357.0], [51.1, 358.0], [51.2, 358.0], [51.3, 359.0], [51.4, 359.0], [51.5, 361.0], [51.6, 361.0], [51.7, 362.0], [51.8, 363.0], [51.9, 363.0], [52.0, 364.0], [52.1, 364.0], [52.2, 364.0], [52.3, 365.0], [52.4, 365.0], [52.5, 366.0], [52.6, 367.0], [52.7, 367.0], [52.8, 368.0], [52.9, 368.0], [53.0, 369.0], [53.1, 369.0], [53.2, 370.0], [53.3, 370.0], [53.4, 371.0], [53.5, 373.0], [53.6, 373.0], [53.7, 374.0], [53.8, 374.0], [53.9, 375.0], [54.0, 375.0], [54.1, 376.0], [54.2, 376.0], [54.3, 377.0], [54.4, 378.0], [54.5, 378.0], [54.6, 379.0], [54.7, 380.0], [54.8, 381.0], [54.9, 381.0], [55.0, 382.0], [55.1, 383.0], [55.2, 383.0], [55.3, 385.0], [55.4, 385.0], [55.5, 387.0], [55.6, 388.0], [55.7, 389.0], [55.8, 390.0], [55.9, 391.0], [56.0, 391.0], [56.1, 392.0], [56.2, 393.0], [56.3, 394.0], [56.4, 394.0], [56.5, 395.0], [56.6, 396.0], [56.7, 397.0], [56.8, 398.0], [56.9, 399.0], [57.0, 399.0], [57.1, 401.0], [57.2, 402.0], [57.3, 403.0], [57.4, 404.0], [57.5, 405.0], [57.6, 408.0], [57.7, 409.0], [57.8, 410.0], [57.9, 410.0], [58.0, 412.0], [58.1, 413.0], [58.2, 414.0], [58.3, 414.0], [58.4, 416.0], [58.5, 417.0], [58.6, 418.0], [58.7, 420.0], [58.8, 421.0], [58.9, 422.0], [59.0, 423.0], [59.1, 423.0], [59.2, 425.0], [59.3, 425.0], [59.4, 427.0], [59.5, 428.0], [59.6, 429.0], [59.7, 430.0], [59.8, 431.0], [59.9, 431.0], [60.0, 433.0], [60.1, 434.0], [60.2, 436.0], [60.3, 437.0], [60.4, 438.0], [60.5, 440.0], [60.6, 441.0], [60.7, 443.0], [60.8, 444.0], [60.9, 446.0], [61.0, 446.0], [61.1, 447.0], [61.2, 450.0], [61.3, 450.0], [61.4, 452.0], [61.5, 453.0], [61.6, 456.0], [61.7, 458.0], [61.8, 459.0], [61.9, 461.0], [62.0, 462.0], [62.1, 463.0], [62.2, 465.0], [62.3, 466.0], [62.4, 467.0], [62.5, 469.0], [62.6, 470.0], [62.7, 470.0], [62.8, 472.0], [62.9, 473.0], [63.0, 475.0], [63.1, 476.0], [63.2, 480.0], [63.3, 482.0], [63.4, 482.0], [63.5, 484.0], [63.6, 486.0], [63.7, 487.0], [63.8, 488.0], [63.9, 490.0], [64.0, 491.0], [64.1, 493.0], [64.2, 497.0], [64.3, 501.0], [64.4, 502.0], [64.5, 503.0], [64.6, 505.0], [64.7, 506.0], [64.8, 507.0], [64.9, 509.0], [65.0, 512.0], [65.1, 514.0], [65.2, 515.0], [65.3, 516.0], [65.4, 519.0], [65.5, 521.0], [65.6, 523.0], [65.7, 525.0], [65.8, 528.0], [65.9, 530.0], [66.0, 532.0], [66.1, 534.0], [66.2, 538.0], [66.3, 541.0], [66.4, 542.0], [66.5, 544.0], [66.6, 546.0], [66.7, 547.0], [66.8, 549.0], [66.9, 550.0], [67.0, 553.0], [67.1, 556.0], [67.2, 557.0], [67.3, 559.0], [67.4, 561.0], [67.5, 564.0], [67.6, 565.0], [67.7, 568.0], [67.8, 569.0], [67.9, 571.0], [68.0, 572.0], [68.1, 574.0], [68.2, 575.0], [68.3, 577.0], [68.4, 578.0], [68.5, 579.0], [68.6, 580.0], [68.7, 581.0], [68.8, 582.0], [68.9, 583.0], [69.0, 585.0], [69.1, 585.0], [69.2, 586.0], [69.3, 587.0], [69.4, 588.0], [69.5, 589.0], [69.6, 590.0], [69.7, 591.0], [69.8, 591.0], [69.9, 593.0], [70.0, 594.0], [70.1, 596.0], [70.2, 598.0], [70.3, 599.0], [70.4, 600.0], [70.5, 602.0], [70.6, 603.0], [70.7, 604.0], [70.8, 605.0], [70.9, 606.0], [71.0, 607.0], [71.1, 608.0], [71.2, 609.0], [71.3, 610.0], [71.4, 611.0], [71.5, 611.0], [71.6, 613.0], [71.7, 613.0], [71.8, 614.0], [71.9, 615.0], [72.0, 616.0], [72.1, 618.0], [72.2, 618.0], [72.3, 619.0], [72.4, 619.0], [72.5, 621.0], [72.6, 622.0], [72.7, 623.0], [72.8, 625.0], [72.9, 625.0], [73.0, 626.0], [73.1, 628.0], [73.2, 628.0], [73.3, 630.0], [73.4, 632.0], [73.5, 632.0], [73.6, 633.0], [73.7, 634.0], [73.8, 635.0], [73.9, 636.0], [74.0, 637.0], [74.1, 638.0], [74.2, 639.0], [74.3, 640.0], [74.4, 642.0], [74.5, 642.0], [74.6, 643.0], [74.7, 644.0], [74.8, 646.0], [74.9, 647.0], [75.0, 648.0], [75.1, 649.0], [75.2, 650.0], [75.3, 650.0], [75.4, 651.0], [75.5, 653.0], [75.6, 653.0], [75.7, 654.0], [75.8, 655.0], [75.9, 657.0], [76.0, 658.0], [76.1, 659.0], [76.2, 661.0], [76.3, 664.0], [76.4, 665.0], [76.5, 666.0], [76.6, 668.0], [76.7, 668.0], [76.8, 670.0], [76.9, 672.0], [77.0, 676.0], [77.1, 677.0], [77.2, 679.0], [77.3, 680.0], [77.4, 682.0], [77.5, 683.0], [77.6, 686.0], [77.7, 687.0], [77.8, 687.0], [77.9, 690.0], [78.0, 691.0], [78.1, 693.0], [78.2, 694.0], [78.3, 697.0], [78.4, 699.0], [78.5, 701.0], [78.6, 702.0], [78.7, 704.0], [78.8, 705.0], [78.9, 708.0], [79.0, 712.0], [79.1, 714.0], [79.2, 717.0], [79.3, 719.0], [79.4, 723.0], [79.5, 727.0], [79.6, 730.0], [79.7, 731.0], [79.8, 735.0], [79.9, 740.0], [80.0, 744.0], [80.1, 747.0], [80.2, 749.0], [80.3, 755.0], [80.4, 756.0], [80.5, 759.0], [80.6, 761.0], [80.7, 762.0], [80.8, 763.0], [80.9, 766.0], [81.0, 768.0], [81.1, 771.0], [81.2, 774.0], [81.3, 776.0], [81.4, 779.0], [81.5, 780.0], [81.6, 782.0], [81.7, 785.0], [81.8, 788.0], [81.9, 791.0], [82.0, 794.0], [82.1, 801.0], [82.2, 806.0], [82.3, 810.0], [82.4, 813.0], [82.5, 815.0], [82.6, 821.0], [82.7, 826.0], [82.8, 830.0], [82.9, 832.0], [83.0, 838.0], [83.1, 841.0], [83.2, 849.0], [83.3, 851.0], [83.4, 857.0], [83.5, 861.0], [83.6, 864.0], [83.7, 865.0], [83.8, 870.0], [83.9, 873.0], [84.0, 874.0], [84.1, 877.0], [84.2, 878.0], [84.3, 881.0], [84.4, 884.0], [84.5, 886.0], [84.6, 889.0], [84.7, 890.0], [84.8, 894.0], [84.9, 896.0], [85.0, 898.0], [85.1, 900.0], [85.2, 904.0], [85.3, 907.0], [85.4, 911.0], [85.5, 913.0], [85.6, 915.0], [85.7, 916.0], [85.8, 917.0], [85.9, 923.0], [86.0, 925.0], [86.1, 927.0], [86.2, 931.0], [86.3, 934.0], [86.4, 936.0], [86.5, 938.0], [86.6, 943.0], [86.7, 945.0], [86.8, 947.0], [86.9, 949.0], [87.0, 951.0], [87.1, 953.0], [87.2, 954.0], [87.3, 955.0], [87.4, 958.0], [87.5, 962.0], [87.6, 968.0], [87.7, 971.0], [87.8, 973.0], [87.9, 974.0], [88.0, 979.0], [88.1, 980.0], [88.2, 987.0], [88.3, 991.0], [88.4, 994.0], [88.5, 997.0], [88.6, 1001.0], [88.7, 1004.0], [88.8, 1007.0], [88.9, 1009.0], [89.0, 1013.0], [89.1, 1017.0], [89.2, 1022.0], [89.3, 1026.0], [89.4, 1036.0], [89.5, 1049.0], [89.6, 1062.0], [89.7, 1068.0], [89.8, 1080.0], [89.9, 1085.0], [90.0, 1089.0], [90.1, 1102.0], [90.2, 1111.0], [90.3, 1119.0], [90.4, 1127.0], [90.5, 1139.0], [90.6, 1154.0], [90.7, 1157.0], [90.8, 1161.0], [90.9, 1168.0], [91.0, 1177.0], [91.1, 1180.0], [91.2, 1187.0], [91.3, 1191.0], [91.4, 1195.0], [91.5, 1199.0], [91.6, 1200.0], [91.7, 1207.0], [91.8, 1208.0], [91.9, 1211.0], [92.0, 1215.0], [92.1, 1223.0], [92.2, 1229.0], [92.3, 1232.0], [92.4, 1235.0], [92.5, 1238.0], [92.6, 1243.0], [92.7, 1251.0], [92.8, 1253.0], [92.9, 1264.0], [93.0, 1270.0], [93.1, 1276.0], [93.2, 1284.0], [93.3, 1305.0], [93.4, 1323.0], [93.5, 1329.0], [93.6, 1350.0], [93.7, 1392.0], [93.8, 1420.0], [93.9, 1442.0], [94.0, 1463.0], [94.1, 1477.0], [94.2, 1505.0], [94.3, 1515.0], [94.4, 1548.0], [94.5, 1612.0], [94.6, 1635.0], [94.7, 1697.0], [94.8, 1730.0], [94.9, 1794.0], [95.0, 1880.0], [95.1, 1917.0], [95.2, 1963.0], [95.3, 2005.0], [95.4, 2050.0], [95.5, 2098.0], [95.6, 2164.0], [95.7, 2248.0], [95.8, 2374.0], [95.9, 2444.0], [96.0, 2504.0], [96.1, 2555.0], [96.2, 2573.0], [96.3, 2651.0], [96.4, 2756.0], [96.5, 2835.0], [96.6, 2900.0], [96.7, 2933.0], [96.8, 2968.0], [96.9, 3009.0], [97.0, 3087.0], [97.1, 3115.0], [97.2, 3175.0], [97.3, 3316.0], [97.4, 3403.0], [97.5, 3474.0], [97.6, 3575.0], [97.7, 3698.0], [97.8, 3756.0], [97.9, 3882.0], [98.0, 3982.0], [98.1, 4023.0], [98.2, 4105.0], [98.3, 4197.0], [98.4, 4787.0], [98.5, 5494.0], [98.6, 5650.0], [98.7, 6031.0], [98.8, 7106.0], [98.9, 7921.0], [99.0, 8003.0], [99.1, 8092.0], [99.2, 8345.0], [99.3, 8615.0], [99.4, 9629.0], [99.5, 10387.0], [99.6, 10620.0], [99.7, 10762.0], [99.8, 10851.0], [99.9, 11086.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 937.0, "series": [{"data": [[0.0, 937.0], [600.0, 420.0], [700.0, 191.0], [800.0, 154.0], [900.0, 182.0], [1000.0, 79.0], [1100.0, 77.0], [1200.0, 88.0], [1300.0, 27.0], [1400.0, 20.0], [1500.0, 15.0], [1600.0, 13.0], [1700.0, 11.0], [1800.0, 7.0], [1900.0, 13.0], [2000.0, 11.0], [2100.0, 7.0], [2300.0, 8.0], [2200.0, 3.0], [2400.0, 6.0], [2500.0, 14.0], [2600.0, 6.0], [2800.0, 6.0], [2700.0, 6.0], [2900.0, 15.0], [3000.0, 8.0], [3100.0, 10.0], [3300.0, 7.0], [3200.0, 2.0], [3400.0, 7.0], [3500.0, 5.0], [3600.0, 4.0], [3700.0, 5.0], [3800.0, 5.0], [3900.0, 7.0], [4000.0, 8.0], [4100.0, 6.0], [4300.0, 1.0], [4500.0, 2.0], [4400.0, 1.0], [4700.0, 1.0], [4800.0, 1.0], [5000.0, 1.0], [4900.0, 1.0], [5200.0, 2.0], [5600.0, 5.0], [5400.0, 1.0], [5700.0, 3.0], [5800.0, 1.0], [6000.0, 1.0], [6300.0, 1.0], [6200.0, 1.0], [6400.0, 1.0], [6700.0, 1.0], [7100.0, 1.0], [7600.0, 1.0], [7900.0, 7.0], [7800.0, 1.0], [7700.0, 1.0], [8000.0, 6.0], [8100.0, 2.0], [8300.0, 3.0], [8400.0, 2.0], [8600.0, 3.0], [8200.0, 1.0], [9000.0, 1.0], [8900.0, 1.0], [9600.0, 1.0], [9300.0, 1.0], [10100.0, 1.0], [10200.0, 1.0], [10600.0, 1.0], [10700.0, 8.0], [10300.0, 4.0], [10400.0, 2.0], [10500.0, 2.0], [10900.0, 2.0], [11100.0, 2.0], [10800.0, 2.0], [11000.0, 3.0], [15900.0, 1.0], [16800.0, 1.0], [20700.0, 1.0], [100.0, 758.0], [200.0, 497.0], [300.0, 770.0], [400.0, 374.0], [500.0, 314.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 20700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3336.0, "series": [{"data": [[0.0, 3336.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1551.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 303.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.922680412371136, "minX": 1.60231512E12, "maxY": 10.0, "series": [{"data": [[1.60231536E12, 10.0], [1.60231524E12, 10.0], [1.60231542E12, 10.0], [1.60231512E12, 9.954545454545457], [1.6023153E12, 10.0], [1.60231548E12, 9.922680412371136], [1.60231518E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231548E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 539.0, "minX": 1.0, "maxY": 8015.0, "series": [{"data": [[8.0, 581.0], [4.0, 581.0], [2.0, 7965.0], [1.0, 8015.0], [9.0, 953.0], [10.0, 631.0075275043425], [5.0, 539.0], [6.0, 756.0], [3.0, 786.0], [7.0, 610.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990945867848161, 633.9081101907133]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 346.23333333333335, "minX": 1.60231512E12, "maxY": 5645231.4, "series": [{"data": [[1.60231536E12, 3326758.4], [1.60231524E12, 5645231.4], [1.60231542E12, 4625500.583333333], [1.60231512E12, 283777.8], [1.6023153E12, 4742117.5], [1.60231548E12, 2168512.316666667], [1.60231518E12, 2850465.533333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231536E12, 7037.783333333334], [1.60231524E12, 6560.916666666667], [1.60231542E12, 6186.65], [1.60231512E12, 346.23333333333335], [1.6023153E12, 8917.0], [1.60231548E12, 4569.033333333334], [1.60231518E12, 6331.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231548E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 521.3591979075842, "minX": 1.60231512E12, "maxY": 720.6161026837805, "series": [{"data": [[1.60231536E12, 641.1924731182794], [1.60231524E12, 720.6161026837805], [1.60231542E12, 705.2997481108303], [1.60231512E12, 550.4545454545456], [1.6023153E12, 521.3591979075842], [1.60231548E12, 538.5463917525773], [1.60231518E12, 694.2401433691755]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231548E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 519.7079337401921, "minX": 1.60231512E12, "maxY": 718.1551925320888, "series": [{"data": [[1.60231536E12, 639.9043010752677], [1.60231524E12, 718.1551925320888], [1.60231542E12, 703.5692695214109], [1.60231512E12, 548.1818181818181], [1.6023153E12, 519.7079337401921], [1.60231548E12, 537.3144329896896], [1.60231518E12, 692.8972520908003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231548E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005973715651135005, "minX": 1.60231512E12, "maxY": 2.0909090909090917, "series": [{"data": [[1.60231536E12, 0.012903225806451608], [1.60231524E12, 0.014002333722287052], [1.60231542E12, 0.013853904282115888], [1.60231512E12, 2.0909090909090917], [1.6023153E12, 0.01220575414123801], [1.60231548E12, 0.008591065292096226], [1.60231518E12, 0.005973715651135005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231548E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 15.0, "minX": 1.60231512E12, "maxY": 20702.0, "series": [{"data": [[1.60231536E12, 8303.0], [1.60231524E12, 11113.0], [1.60231542E12, 11086.0], [1.60231512E12, 1259.0], [1.6023153E12, 11126.0], [1.60231548E12, 20702.0], [1.60231518E12, 16893.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231536E12, 30.0], [1.60231524E12, 31.721999795436858], [1.60231542E12, 32.15499981045723], [1.60231512E12, 37.0], [1.6023153E12, 33.0], [1.60231548E12, 26.0], [1.60231518E12, 31.08399960041046]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231536E12, 30.216900088787078], [1.60231524E12, 32.494200081825255], [1.60231542E12, 32.870500075817105], [1.60231512E12, 37.0], [1.6023153E12, 33.35530010938645], [1.60231548E12, 26.0], [1.60231518E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231536E12, 30.0], [1.60231524E12, 32.15099989771843], [1.60231542E12, 32.552499905228615], [1.60231512E12, 37.0], [1.6023153E12, 33.0], [1.60231548E12, 26.0], [1.60231518E12, 31.921999800205228]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231536E12, 15.0], [1.60231524E12, 20.0], [1.60231542E12, 27.0], [1.60231512E12, 37.0], [1.6023153E12, 21.0], [1.60231548E12, 18.0], [1.60231518E12, 25.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231536E12, 313.0], [1.60231524E12, 581.0], [1.60231542E12, 439.5], [1.60231512E12, 509.0], [1.6023153E12, 328.5], [1.60231548E12, 271.5], [1.60231518E12, 287.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231548E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 99.0, "minX": 1.0, "maxY": 2615.0, "series": [{"data": [[32.0, 286.5], [2.0, 2312.0], [33.0, 297.0], [34.0, 217.5], [36.0, 293.0], [37.0, 147.0], [39.0, 160.0], [38.0, 152.0], [40.0, 205.5], [41.0, 120.0], [42.0, 198.0], [44.0, 223.5], [45.0, 120.5], [3.0, 1123.0], [53.0, 99.0], [62.0, 108.5], [4.0, 478.0], [5.0, 683.0], [6.0, 527.0], [7.0, 363.0], [8.0, 749.0], [9.0, 592.0], [10.0, 636.0], [11.0, 668.5], [12.0, 647.5], [13.0, 646.0], [14.0, 591.0], [15.0, 477.0], [1.0, 2615.0], [16.0, 389.5], [17.0, 417.0], [18.0, 470.0], [19.0, 492.5], [20.0, 380.0], [21.0, 405.0], [22.0, 339.5], [23.0, 358.0], [24.0, 342.0], [25.0, 373.0], [26.0, 323.5], [27.0, 295.0], [28.0, 255.0], [29.0, 201.0], [30.0, 313.0], [31.0, 300.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[21.0, 151.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 99.0, "minX": 1.0, "maxY": 2605.5, "series": [{"data": [[32.0, 286.5], [2.0, 2308.5], [33.0, 297.0], [34.0, 217.0], [36.0, 292.5], [37.0, 146.0], [39.0, 158.5], [38.0, 151.5], [40.0, 205.0], [41.0, 119.0], [42.0, 197.5], [44.0, 222.5], [45.0, 119.0], [3.0, 1121.0], [53.0, 99.0], [62.0, 108.5], [4.0, 471.5], [5.0, 679.0], [6.0, 523.5], [7.0, 360.0], [8.0, 747.5], [9.0, 587.0], [10.0, 630.0], [11.0, 664.0], [12.0, 646.0], [13.0, 642.0], [14.0, 588.5], [15.0, 475.5], [1.0, 2605.5], [16.0, 387.5], [17.0, 415.0], [18.0, 465.5], [19.0, 492.0], [20.0, 378.5], [21.0, 404.0], [22.0, 336.0], [23.0, 357.5], [24.0, 341.5], [25.0, 371.0], [26.0, 321.5], [27.0, 295.0], [28.0, 251.0], [29.0, 200.0], [30.0, 313.0], [31.0, 300.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[21.0, 150.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.9, "minX": 1.60231512E12, "maxY": 19.116666666666667, "series": [{"data": [[1.60231536E12, 15.5], [1.60231524E12, 14.283333333333333], [1.60231542E12, 13.233333333333333], [1.60231512E12, 0.9], [1.6023153E12, 19.116666666666667], [1.60231548E12, 9.533333333333333], [1.60231518E12, 13.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231548E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231512E12, "maxY": 19.1, "series": [{"data": [[1.60231536E12, 15.5], [1.60231524E12, 14.283333333333333], [1.60231542E12, 13.233333333333333], [1.60231512E12, 0.7333333333333333], [1.6023153E12, 19.1], [1.60231548E12, 9.7], [1.60231518E12, 13.95]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6023153E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231548E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231512E12, "maxY": 19.1, "series": [{"data": [[1.60231536E12, 15.5], [1.60231524E12, 14.283333333333333], [1.60231542E12, 13.233333333333333], [1.60231512E12, 0.7333333333333333], [1.6023153E12, 19.1], [1.60231548E12, 9.7], [1.60231518E12, 13.95]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6023153E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231548E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231512E12, "maxY": 19.1, "series": [{"data": [[1.60231536E12, 15.5], [1.60231524E12, 14.283333333333333], [1.60231542E12, 13.233333333333333], [1.60231512E12, 0.7333333333333333], [1.6023153E12, 19.1], [1.60231548E12, 9.7], [1.60231518E12, 13.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6023153E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231548E12, "title": "Total Transactions Per Second"}},
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

