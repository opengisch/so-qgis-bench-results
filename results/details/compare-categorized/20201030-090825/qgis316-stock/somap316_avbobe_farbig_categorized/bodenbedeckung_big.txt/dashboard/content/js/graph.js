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
        data: {"result": {"minY": 12.0, "minX": 0.0, "maxY": 22352.0, "series": [{"data": [[0.0, 12.0], [0.1, 13.0], [0.2, 16.0], [0.3, 17.0], [0.4, 18.0], [0.5, 19.0], [0.6, 20.0], [0.7, 21.0], [0.8, 21.0], [0.9, 23.0], [1.0, 24.0], [1.1, 24.0], [1.2, 25.0], [1.3, 26.0], [1.4, 26.0], [1.5, 26.0], [1.6, 27.0], [1.7, 27.0], [1.8, 27.0], [1.9, 27.0], [2.0, 28.0], [2.1, 28.0], [2.2, 28.0], [2.3, 29.0], [2.4, 29.0], [2.5, 29.0], [2.6, 29.0], [2.7, 30.0], [2.8, 30.0], [2.9, 31.0], [3.0, 31.0], [3.1, 31.0], [3.2, 31.0], [3.3, 32.0], [3.4, 32.0], [3.5, 32.0], [3.6, 32.0], [3.7, 33.0], [3.8, 33.0], [3.9, 33.0], [4.0, 33.0], [4.1, 34.0], [4.2, 34.0], [4.3, 34.0], [4.4, 35.0], [4.5, 35.0], [4.6, 35.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 37.0], [5.1, 37.0], [5.2, 37.0], [5.3, 38.0], [5.4, 38.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 40.0], [6.0, 40.0], [6.1, 41.0], [6.2, 41.0], [6.3, 42.0], [6.4, 42.0], [6.5, 42.0], [6.6, 43.0], [6.7, 43.0], [6.8, 44.0], [6.9, 44.0], [7.0, 44.0], [7.1, 45.0], [7.2, 45.0], [7.3, 45.0], [7.4, 46.0], [7.5, 46.0], [7.6, 46.0], [7.7, 47.0], [7.8, 48.0], [7.9, 48.0], [8.0, 48.0], [8.1, 48.0], [8.2, 49.0], [8.3, 49.0], [8.4, 49.0], [8.5, 49.0], [8.6, 50.0], [8.7, 50.0], [8.8, 50.0], [8.9, 50.0], [9.0, 51.0], [9.1, 51.0], [9.2, 52.0], [9.3, 52.0], [9.4, 52.0], [9.5, 52.0], [9.6, 53.0], [9.7, 53.0], [9.8, 53.0], [9.9, 53.0], [10.0, 54.0], [10.1, 54.0], [10.2, 54.0], [10.3, 55.0], [10.4, 55.0], [10.5, 55.0], [10.6, 56.0], [10.7, 56.0], [10.8, 56.0], [10.9, 56.0], [11.0, 57.0], [11.1, 57.0], [11.2, 57.0], [11.3, 58.0], [11.4, 58.0], [11.5, 58.0], [11.6, 58.0], [11.7, 59.0], [11.8, 59.0], [11.9, 59.0], [12.0, 60.0], [12.1, 60.0], [12.2, 60.0], [12.3, 61.0], [12.4, 61.0], [12.5, 61.0], [12.6, 62.0], [12.7, 62.0], [12.8, 62.0], [12.9, 63.0], [13.0, 63.0], [13.1, 64.0], [13.2, 64.0], [13.3, 64.0], [13.4, 65.0], [13.5, 65.0], [13.6, 66.0], [13.7, 66.0], [13.8, 66.0], [13.9, 67.0], [14.0, 67.0], [14.1, 68.0], [14.2, 68.0], [14.3, 69.0], [14.4, 69.0], [14.5, 70.0], [14.6, 71.0], [14.7, 71.0], [14.8, 72.0], [14.9, 72.0], [15.0, 73.0], [15.1, 73.0], [15.2, 73.0], [15.3, 74.0], [15.4, 74.0], [15.5, 75.0], [15.6, 75.0], [15.7, 75.0], [15.8, 76.0], [15.9, 77.0], [16.0, 77.0], [16.1, 77.0], [16.2, 78.0], [16.3, 78.0], [16.4, 79.0], [16.5, 80.0], [16.6, 80.0], [16.7, 81.0], [16.8, 81.0], [16.9, 81.0], [17.0, 82.0], [17.1, 83.0], [17.2, 83.0], [17.3, 83.0], [17.4, 84.0], [17.5, 85.0], [17.6, 86.0], [17.7, 86.0], [17.8, 86.0], [17.9, 87.0], [18.0, 87.0], [18.1, 88.0], [18.2, 88.0], [18.3, 88.0], [18.4, 89.0], [18.5, 89.0], [18.6, 89.0], [18.7, 90.0], [18.8, 90.0], [18.9, 91.0], [19.0, 91.0], [19.1, 92.0], [19.2, 92.0], [19.3, 93.0], [19.4, 94.0], [19.5, 94.0], [19.6, 95.0], [19.7, 96.0], [19.8, 96.0], [19.9, 97.0], [20.0, 98.0], [20.1, 99.0], [20.2, 99.0], [20.3, 100.0], [20.4, 100.0], [20.5, 100.0], [20.6, 101.0], [20.7, 102.0], [20.8, 102.0], [20.9, 102.0], [21.0, 103.0], [21.1, 104.0], [21.2, 104.0], [21.3, 105.0], [21.4, 105.0], [21.5, 106.0], [21.6, 107.0], [21.7, 107.0], [21.8, 108.0], [21.9, 108.0], [22.0, 109.0], [22.1, 110.0], [22.2, 111.0], [22.3, 111.0], [22.4, 112.0], [22.5, 112.0], [22.6, 113.0], [22.7, 114.0], [22.8, 114.0], [22.9, 115.0], [23.0, 116.0], [23.1, 117.0], [23.2, 118.0], [23.3, 118.0], [23.4, 119.0], [23.5, 119.0], [23.6, 120.0], [23.7, 121.0], [23.8, 122.0], [23.9, 123.0], [24.0, 124.0], [24.1, 124.0], [24.2, 125.0], [24.3, 126.0], [24.4, 127.0], [24.5, 128.0], [24.6, 128.0], [24.7, 128.0], [24.8, 130.0], [24.9, 131.0], [25.0, 132.0], [25.1, 132.0], [25.2, 132.0], [25.3, 134.0], [25.4, 134.0], [25.5, 135.0], [25.6, 136.0], [25.7, 137.0], [25.8, 138.0], [25.9, 139.0], [26.0, 140.0], [26.1, 140.0], [26.2, 141.0], [26.3, 142.0], [26.4, 142.0], [26.5, 144.0], [26.6, 144.0], [26.7, 145.0], [26.8, 146.0], [26.9, 147.0], [27.0, 148.0], [27.1, 148.0], [27.2, 149.0], [27.3, 150.0], [27.4, 150.0], [27.5, 151.0], [27.6, 152.0], [27.7, 154.0], [27.8, 155.0], [27.9, 157.0], [28.0, 158.0], [28.1, 158.0], [28.2, 160.0], [28.3, 160.0], [28.4, 161.0], [28.5, 162.0], [28.6, 163.0], [28.7, 164.0], [28.8, 165.0], [28.9, 166.0], [29.0, 167.0], [29.1, 167.0], [29.2, 168.0], [29.3, 169.0], [29.4, 170.0], [29.5, 171.0], [29.6, 171.0], [29.7, 172.0], [29.8, 173.0], [29.9, 173.0], [30.0, 173.0], [30.1, 174.0], [30.2, 174.0], [30.3, 176.0], [30.4, 176.0], [30.5, 177.0], [30.6, 178.0], [30.7, 179.0], [30.8, 180.0], [30.9, 181.0], [31.0, 182.0], [31.1, 183.0], [31.2, 185.0], [31.3, 186.0], [31.4, 187.0], [31.5, 189.0], [31.6, 189.0], [31.7, 190.0], [31.8, 191.0], [31.9, 192.0], [32.0, 192.0], [32.1, 193.0], [32.2, 194.0], [32.3, 195.0], [32.4, 196.0], [32.5, 197.0], [32.6, 198.0], [32.7, 199.0], [32.8, 200.0], [32.9, 201.0], [33.0, 202.0], [33.1, 203.0], [33.2, 204.0], [33.3, 205.0], [33.4, 206.0], [33.5, 207.0], [33.6, 208.0], [33.7, 209.0], [33.8, 210.0], [33.9, 210.0], [34.0, 211.0], [34.1, 213.0], [34.2, 214.0], [34.3, 215.0], [34.4, 216.0], [34.5, 217.0], [34.6, 217.0], [34.7, 218.0], [34.8, 219.0], [34.9, 220.0], [35.0, 220.0], [35.1, 221.0], [35.2, 222.0], [35.3, 224.0], [35.4, 224.0], [35.5, 225.0], [35.6, 226.0], [35.7, 227.0], [35.8, 229.0], [35.9, 230.0], [36.0, 231.0], [36.1, 232.0], [36.2, 232.0], [36.3, 234.0], [36.4, 235.0], [36.5, 236.0], [36.6, 237.0], [36.7, 238.0], [36.8, 239.0], [36.9, 241.0], [37.0, 242.0], [37.1, 243.0], [37.2, 244.0], [37.3, 245.0], [37.4, 248.0], [37.5, 250.0], [37.6, 251.0], [37.7, 252.0], [37.8, 253.0], [37.9, 254.0], [38.0, 255.0], [38.1, 256.0], [38.2, 257.0], [38.3, 259.0], [38.4, 259.0], [38.5, 261.0], [38.6, 262.0], [38.7, 263.0], [38.8, 264.0], [38.9, 266.0], [39.0, 267.0], [39.1, 267.0], [39.2, 268.0], [39.3, 270.0], [39.4, 271.0], [39.5, 272.0], [39.6, 273.0], [39.7, 273.0], [39.8, 273.0], [39.9, 274.0], [40.0, 275.0], [40.1, 276.0], [40.2, 277.0], [40.3, 277.0], [40.4, 278.0], [40.5, 279.0], [40.6, 280.0], [40.7, 283.0], [40.8, 284.0], [40.9, 285.0], [41.0, 286.0], [41.1, 287.0], [41.2, 288.0], [41.3, 289.0], [41.4, 289.0], [41.5, 290.0], [41.6, 292.0], [41.7, 293.0], [41.8, 293.0], [41.9, 294.0], [42.0, 295.0], [42.1, 295.0], [42.2, 296.0], [42.3, 297.0], [42.4, 297.0], [42.5, 298.0], [42.6, 299.0], [42.7, 300.0], [42.8, 301.0], [42.9, 301.0], [43.0, 302.0], [43.1, 303.0], [43.2, 304.0], [43.3, 305.0], [43.4, 305.0], [43.5, 306.0], [43.6, 306.0], [43.7, 307.0], [43.8, 307.0], [43.9, 308.0], [44.0, 308.0], [44.1, 309.0], [44.2, 310.0], [44.3, 310.0], [44.4, 311.0], [44.5, 312.0], [44.6, 312.0], [44.7, 313.0], [44.8, 314.0], [44.9, 316.0], [45.0, 316.0], [45.1, 317.0], [45.2, 317.0], [45.3, 318.0], [45.4, 319.0], [45.5, 319.0], [45.6, 320.0], [45.7, 320.0], [45.8, 321.0], [45.9, 322.0], [46.0, 322.0], [46.1, 322.0], [46.2, 323.0], [46.3, 323.0], [46.4, 324.0], [46.5, 325.0], [46.6, 325.0], [46.7, 326.0], [46.8, 326.0], [46.9, 327.0], [47.0, 327.0], [47.1, 328.0], [47.2, 329.0], [47.3, 330.0], [47.4, 331.0], [47.5, 331.0], [47.6, 332.0], [47.7, 333.0], [47.8, 333.0], [47.9, 334.0], [48.0, 334.0], [48.1, 335.0], [48.2, 336.0], [48.3, 336.0], [48.4, 337.0], [48.5, 338.0], [48.6, 338.0], [48.7, 338.0], [48.8, 339.0], [48.9, 340.0], [49.0, 341.0], [49.1, 341.0], [49.2, 342.0], [49.3, 343.0], [49.4, 344.0], [49.5, 345.0], [49.6, 346.0], [49.7, 346.0], [49.8, 347.0], [49.9, 348.0], [50.0, 348.0], [50.1, 349.0], [50.2, 350.0], [50.3, 350.0], [50.4, 351.0], [50.5, 351.0], [50.6, 352.0], [50.7, 352.0], [50.8, 353.0], [50.9, 353.0], [51.0, 354.0], [51.1, 355.0], [51.2, 356.0], [51.3, 357.0], [51.4, 357.0], [51.5, 357.0], [51.6, 358.0], [51.7, 359.0], [51.8, 360.0], [51.9, 361.0], [52.0, 361.0], [52.1, 362.0], [52.2, 363.0], [52.3, 364.0], [52.4, 365.0], [52.5, 365.0], [52.6, 366.0], [52.7, 367.0], [52.8, 367.0], [52.9, 368.0], [53.0, 368.0], [53.1, 368.0], [53.2, 369.0], [53.3, 369.0], [53.4, 370.0], [53.5, 371.0], [53.6, 371.0], [53.7, 372.0], [53.8, 372.0], [53.9, 374.0], [54.0, 374.0], [54.1, 375.0], [54.2, 375.0], [54.3, 376.0], [54.4, 377.0], [54.5, 379.0], [54.6, 380.0], [54.7, 380.0], [54.8, 381.0], [54.9, 382.0], [55.0, 383.0], [55.1, 383.0], [55.2, 384.0], [55.3, 385.0], [55.4, 386.0], [55.5, 386.0], [55.6, 387.0], [55.7, 388.0], [55.8, 389.0], [55.9, 390.0], [56.0, 391.0], [56.1, 392.0], [56.2, 393.0], [56.3, 394.0], [56.4, 394.0], [56.5, 396.0], [56.6, 397.0], [56.7, 398.0], [56.8, 399.0], [56.9, 400.0], [57.0, 401.0], [57.1, 402.0], [57.2, 403.0], [57.3, 405.0], [57.4, 406.0], [57.5, 406.0], [57.6, 407.0], [57.7, 408.0], [57.8, 410.0], [57.9, 411.0], [58.0, 412.0], [58.1, 413.0], [58.2, 414.0], [58.3, 416.0], [58.4, 417.0], [58.5, 418.0], [58.6, 420.0], [58.7, 421.0], [58.8, 421.0], [58.9, 422.0], [59.0, 423.0], [59.1, 423.0], [59.2, 426.0], [59.3, 428.0], [59.4, 429.0], [59.5, 429.0], [59.6, 430.0], [59.7, 431.0], [59.8, 432.0], [59.9, 433.0], [60.0, 435.0], [60.1, 437.0], [60.2, 437.0], [60.3, 439.0], [60.4, 441.0], [60.5, 443.0], [60.6, 444.0], [60.7, 445.0], [60.8, 445.0], [60.9, 447.0], [61.0, 448.0], [61.1, 450.0], [61.2, 451.0], [61.3, 452.0], [61.4, 454.0], [61.5, 455.0], [61.6, 456.0], [61.7, 457.0], [61.8, 458.0], [61.9, 459.0], [62.0, 460.0], [62.1, 461.0], [62.2, 462.0], [62.3, 466.0], [62.4, 467.0], [62.5, 468.0], [62.6, 470.0], [62.7, 472.0], [62.8, 473.0], [62.9, 474.0], [63.0, 475.0], [63.1, 477.0], [63.2, 478.0], [63.3, 479.0], [63.4, 481.0], [63.5, 482.0], [63.6, 483.0], [63.7, 484.0], [63.8, 486.0], [63.9, 488.0], [64.0, 491.0], [64.1, 493.0], [64.2, 496.0], [64.3, 497.0], [64.4, 500.0], [64.5, 501.0], [64.6, 502.0], [64.7, 503.0], [64.8, 504.0], [64.9, 505.0], [65.0, 506.0], [65.1, 507.0], [65.2, 510.0], [65.3, 513.0], [65.4, 514.0], [65.5, 517.0], [65.6, 519.0], [65.7, 521.0], [65.8, 523.0], [65.9, 524.0], [66.0, 525.0], [66.1, 526.0], [66.2, 527.0], [66.3, 531.0], [66.4, 534.0], [66.5, 535.0], [66.6, 539.0], [66.7, 542.0], [66.8, 543.0], [66.9, 546.0], [67.0, 548.0], [67.1, 549.0], [67.2, 551.0], [67.3, 552.0], [67.4, 554.0], [67.5, 555.0], [67.6, 559.0], [67.7, 562.0], [67.8, 564.0], [67.9, 566.0], [68.0, 568.0], [68.1, 570.0], [68.2, 571.0], [68.3, 572.0], [68.4, 574.0], [68.5, 577.0], [68.6, 578.0], [68.7, 580.0], [68.8, 581.0], [68.9, 583.0], [69.0, 584.0], [69.1, 584.0], [69.2, 588.0], [69.3, 589.0], [69.4, 590.0], [69.5, 591.0], [69.6, 592.0], [69.7, 594.0], [69.8, 594.0], [69.9, 595.0], [70.0, 596.0], [70.1, 597.0], [70.2, 598.0], [70.3, 598.0], [70.4, 599.0], [70.5, 601.0], [70.6, 602.0], [70.7, 604.0], [70.8, 605.0], [70.9, 605.0], [71.0, 606.0], [71.1, 607.0], [71.2, 608.0], [71.3, 609.0], [71.4, 609.0], [71.5, 611.0], [71.6, 612.0], [71.7, 613.0], [71.8, 614.0], [71.9, 615.0], [72.0, 616.0], [72.1, 617.0], [72.2, 618.0], [72.3, 619.0], [72.4, 620.0], [72.5, 620.0], [72.6, 622.0], [72.7, 623.0], [72.8, 623.0], [72.9, 625.0], [73.0, 625.0], [73.1, 626.0], [73.2, 627.0], [73.3, 628.0], [73.4, 628.0], [73.5, 629.0], [73.6, 630.0], [73.7, 631.0], [73.8, 632.0], [73.9, 633.0], [74.0, 634.0], [74.1, 635.0], [74.2, 636.0], [74.3, 637.0], [74.4, 638.0], [74.5, 639.0], [74.6, 639.0], [74.7, 641.0], [74.8, 643.0], [74.9, 644.0], [75.0, 645.0], [75.1, 646.0], [75.2, 646.0], [75.3, 648.0], [75.4, 648.0], [75.5, 649.0], [75.6, 650.0], [75.7, 651.0], [75.8, 653.0], [75.9, 654.0], [76.0, 655.0], [76.1, 656.0], [76.2, 657.0], [76.3, 660.0], [76.4, 661.0], [76.5, 662.0], [76.6, 663.0], [76.7, 664.0], [76.8, 666.0], [76.9, 667.0], [77.0, 669.0], [77.1, 671.0], [77.2, 672.0], [77.3, 674.0], [77.4, 677.0], [77.5, 678.0], [77.6, 680.0], [77.7, 681.0], [77.8, 682.0], [77.9, 685.0], [78.0, 686.0], [78.1, 687.0], [78.2, 688.0], [78.3, 689.0], [78.4, 691.0], [78.5, 693.0], [78.6, 696.0], [78.7, 698.0], [78.8, 700.0], [78.9, 702.0], [79.0, 705.0], [79.1, 708.0], [79.2, 711.0], [79.3, 713.0], [79.4, 716.0], [79.5, 719.0], [79.6, 720.0], [79.7, 721.0], [79.8, 722.0], [79.9, 725.0], [80.0, 728.0], [80.1, 730.0], [80.2, 733.0], [80.3, 738.0], [80.4, 744.0], [80.5, 745.0], [80.6, 751.0], [80.7, 754.0], [80.8, 758.0], [80.9, 764.0], [81.0, 766.0], [81.1, 769.0], [81.2, 771.0], [81.3, 775.0], [81.4, 778.0], [81.5, 780.0], [81.6, 784.0], [81.7, 787.0], [81.8, 792.0], [81.9, 794.0], [82.0, 797.0], [82.1, 805.0], [82.2, 809.0], [82.3, 813.0], [82.4, 816.0], [82.5, 822.0], [82.6, 826.0], [82.7, 829.0], [82.8, 835.0], [82.9, 839.0], [83.0, 844.0], [83.1, 849.0], [83.2, 853.0], [83.3, 858.0], [83.4, 864.0], [83.5, 866.0], [83.6, 869.0], [83.7, 873.0], [83.8, 877.0], [83.9, 879.0], [84.0, 880.0], [84.1, 882.0], [84.2, 886.0], [84.3, 892.0], [84.4, 893.0], [84.5, 895.0], [84.6, 900.0], [84.7, 902.0], [84.8, 903.0], [84.9, 904.0], [85.0, 905.0], [85.1, 906.0], [85.2, 909.0], [85.3, 911.0], [85.4, 913.0], [85.5, 915.0], [85.6, 917.0], [85.7, 920.0], [85.8, 921.0], [85.9, 924.0], [86.0, 925.0], [86.1, 927.0], [86.2, 928.0], [86.3, 932.0], [86.4, 934.0], [86.5, 936.0], [86.6, 938.0], [86.7, 940.0], [86.8, 943.0], [86.9, 944.0], [87.0, 946.0], [87.1, 948.0], [87.2, 951.0], [87.3, 952.0], [87.4, 955.0], [87.5, 958.0], [87.6, 961.0], [87.7, 963.0], [87.8, 966.0], [87.9, 970.0], [88.0, 974.0], [88.1, 980.0], [88.2, 985.0], [88.3, 990.0], [88.4, 992.0], [88.5, 997.0], [88.6, 1000.0], [88.7, 1006.0], [88.8, 1010.0], [88.9, 1013.0], [89.0, 1021.0], [89.1, 1031.0], [89.2, 1036.0], [89.3, 1049.0], [89.4, 1055.0], [89.5, 1062.0], [89.6, 1067.0], [89.7, 1074.0], [89.8, 1086.0], [89.9, 1095.0], [90.0, 1102.0], [90.1, 1108.0], [90.2, 1121.0], [90.3, 1126.0], [90.4, 1134.0], [90.5, 1141.0], [90.6, 1153.0], [90.7, 1159.0], [90.8, 1163.0], [90.9, 1165.0], [91.0, 1171.0], [91.1, 1185.0], [91.2, 1189.0], [91.3, 1194.0], [91.4, 1197.0], [91.5, 1201.0], [91.6, 1205.0], [91.7, 1209.0], [91.8, 1211.0], [91.9, 1214.0], [92.0, 1218.0], [92.1, 1225.0], [92.2, 1229.0], [92.3, 1233.0], [92.4, 1235.0], [92.5, 1244.0], [92.6, 1248.0], [92.7, 1256.0], [92.8, 1265.0], [92.9, 1273.0], [93.0, 1279.0], [93.1, 1284.0], [93.2, 1291.0], [93.3, 1294.0], [93.4, 1301.0], [93.5, 1313.0], [93.6, 1320.0], [93.7, 1334.0], [93.8, 1348.0], [93.9, 1388.0], [94.0, 1416.0], [94.1, 1450.0], [94.2, 1468.0], [94.3, 1498.0], [94.4, 1523.0], [94.5, 1572.0], [94.6, 1614.0], [94.7, 1656.0], [94.8, 1695.0], [94.9, 1721.0], [95.0, 1770.0], [95.1, 1800.0], [95.2, 1905.0], [95.3, 2011.0], [95.4, 2055.0], [95.5, 2087.0], [95.6, 2124.0], [95.7, 2182.0], [95.8, 2273.0], [95.9, 2334.0], [96.0, 2454.0], [96.1, 2515.0], [96.2, 2602.0], [96.3, 2706.0], [96.4, 2730.0], [96.5, 2786.0], [96.6, 2887.0], [96.7, 2975.0], [96.8, 3027.0], [96.9, 3055.0], [97.0, 3132.0], [97.1, 3193.0], [97.2, 3282.0], [97.3, 3401.0], [97.4, 3486.0], [97.5, 3623.0], [97.6, 3668.0], [97.7, 3813.0], [97.8, 4032.0], [97.9, 4151.0], [98.0, 4203.0], [98.1, 4309.0], [98.2, 4334.0], [98.3, 4564.0], [98.4, 4969.0], [98.5, 5653.0], [98.6, 5844.0], [98.7, 5993.0], [98.8, 7121.0], [98.9, 8195.0], [99.0, 8334.0], [99.1, 8396.0], [99.2, 8676.0], [99.3, 8893.0], [99.4, 9684.0], [99.5, 11010.0], [99.6, 11255.0], [99.7, 11416.0], [99.8, 11663.0], [99.9, 16416.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1049.0, "series": [{"data": [[0.0, 1049.0], [600.0, 433.0], [700.0, 168.0], [800.0, 133.0], [900.0, 207.0], [1000.0, 73.0], [1100.0, 76.0], [1200.0, 99.0], [1300.0, 29.0], [1400.0, 21.0], [1500.0, 12.0], [1600.0, 15.0], [1700.0, 13.0], [1800.0, 5.0], [1900.0, 6.0], [2000.0, 12.0], [2100.0, 12.0], [2300.0, 6.0], [2200.0, 5.0], [2400.0, 4.0], [2500.0, 7.0], [2600.0, 5.0], [2800.0, 6.0], [2700.0, 12.0], [2900.0, 8.0], [3000.0, 10.0], [3100.0, 7.0], [3300.0, 4.0], [3200.0, 5.0], [3400.0, 7.0], [3500.0, 3.0], [3600.0, 8.0], [3700.0, 3.0], [3800.0, 3.0], [3900.0, 1.0], [4000.0, 6.0], [4300.0, 7.0], [4200.0, 6.0], [4100.0, 5.0], [4400.0, 2.0], [4500.0, 2.0], [4700.0, 3.0], [4800.0, 1.0], [5100.0, 1.0], [4900.0, 1.0], [5300.0, 1.0], [5400.0, 2.0], [5600.0, 3.0], [5700.0, 2.0], [5800.0, 3.0], [5900.0, 4.0], [6400.0, 2.0], [6600.0, 2.0], [7100.0, 1.0], [8000.0, 2.0], [8100.0, 3.0], [8300.0, 8.0], [8600.0, 3.0], [8400.0, 2.0], [8500.0, 1.0], [8200.0, 3.0], [8700.0, 1.0], [8800.0, 3.0], [9000.0, 1.0], [9100.0, 1.0], [8900.0, 1.0], [9600.0, 1.0], [9300.0, 1.0], [10200.0, 2.0], [10800.0, 2.0], [10900.0, 1.0], [11200.0, 3.0], [11000.0, 1.0], [11100.0, 2.0], [11300.0, 4.0], [11400.0, 4.0], [11500.0, 1.0], [11600.0, 1.0], [11900.0, 3.0], [12300.0, 1.0], [16400.0, 1.0], [17300.0, 1.0], [18100.0, 1.0], [19400.0, 1.0], [22100.0, 1.0], [22300.0, 1.0], [100.0, 653.0], [200.0, 509.0], [300.0, 738.0], [400.0, 393.0], [500.0, 314.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 22300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 295.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3345.0, "series": [{"data": [[0.0, 3345.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1550.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 295.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.60404954E12, "maxY": 10.0, "series": [{"data": [[1.60404954E12, 9.998281786941583], [1.60404984E12, 9.971252566735112], [1.6040499E12, 1.5], [1.60404972E12, 10.0], [1.60404978E12, 10.0], [1.6040496E12, 10.0], [1.60404966E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040499E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 383.0, "minX": 1.0, "maxY": 8180.0, "series": [{"data": [[8.0, 383.0], [4.0, 721.0], [2.0, 8180.0], [1.0, 5831.0], [9.0, 593.0], [10.0, 639.8793436293452], [5.0, 1202.0], [6.0, 617.0], [3.0, 1171.0], [7.0, 542.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991136801541433, 642.467822736031]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 14.666666666666666, "minX": 1.60404954E12, "maxY": 4878587.816666666, "series": [{"data": [[1.60404954E12, 2289699.6166666667], [1.60404984E12, 3956241.9], [1.6040499E12, 1917.7], [1.60404972E12, 4748561.3], [1.60404978E12, 4878587.816666666], [1.6040496E12, 3602857.25], [1.60404966E12, 4164405.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60404954E12, 4396.75], [1.60404984E12, 7659.4], [1.6040499E12, 14.666666666666666], [1.60404972E12, 10520.05], [1.60404978E12, 6116.383333333333], [1.6040496E12, 4965.816666666667], [1.60404966E12, 6268.566666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040499E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 433.84486525855823, "minX": 1.60404954E12, "maxY": 7005.5, "series": [{"data": [[1.60404954E12, 486.57903780068716], [1.60404984E12, 616.7453798767976], [1.6040499E12, 7005.5], [1.60404972E12, 433.84486525855823], [1.60404978E12, 734.2474999999998], [1.6040496E12, 995.7283763277686], [1.60404966E12, 746.5574999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040499E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 432.61179898033487, "minX": 1.60404954E12, "maxY": 7005.0, "series": [{"data": [[1.60404954E12, 484.8298969072163], [1.60404984E12, 615.4455852156057], [1.6040499E12, 7005.0], [1.60404972E12, 432.61179898033487], [1.60404978E12, 732.2937499999999], [1.6040496E12, 993.4825493171467], [1.60404966E12, 744.3162499999995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040499E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60404954E12, "maxY": 0.1477663230240551, "series": [{"data": [[1.60404954E12, 0.1477663230240551], [1.60404984E12, 0.014373716632443544], [1.6040499E12, 0.0], [1.60404972E12, 0.010196649672250545], [1.60404978E12, 0.011249999999999996], [1.6040496E12, 0.01820940819423369], [1.60404966E12, 0.016250000000000042]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040499E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 12.0, "minX": 1.60404954E12, "maxY": 22352.0, "series": [{"data": [[1.60404954E12, 11393.0], [1.60404984E12, 22352.0], [1.6040499E12, 8180.0], [1.60404972E12, 16416.0], [1.60404978E12, 8980.0], [1.6040496E12, 19464.0], [1.60404966E12, 11945.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60404954E12, 27.0], [1.60404984E12, 21.774999767541885], [1.6040499E12, 5831.0], [1.60404972E12, 20.365999672412872], [1.60404978E12, 20.208999809026718], [1.6040496E12, 17.879999685287476], [1.60404966E12, 25.208999809026718]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60404954E12, 27.0], [1.60404984E12, 23.30500018596649], [1.6040499E12, 5831.0], [1.60404972E12, 22.205200262069702], [1.60404978E12, 20.929900076389313], [1.6040496E12, 18.534000062942503], [1.60404966E12, 25.929900076389313]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60404954E12, 27.0], [1.60404984E12, 22.524999767541885], [1.6040499E12, 5831.0], [1.60404972E12, 21.10599967241287], [1.60404978E12, 20.60949990451336], [1.6040496E12, 18.26999992132187], [1.60404966E12, 25.60949990451336]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60404954E12, 24.0], [1.60404984E12, 13.0], [1.6040499E12, 5831.0], [1.60404972E12, 13.0], [1.60404978E12, 13.0], [1.6040496E12, 12.0], [1.60404966E12, 13.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60404954E12, 277.0], [1.60404984E12, 329.0], [1.6040499E12, 7005.5], [1.60404972E12, 271.0], [1.60404978E12, 470.0], [1.6040496E12, 491.0], [1.60404966E12, 459.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040499E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 70.0, "minX": 1.0, "maxY": 3668.0, "series": [{"data": [[2.0, 2401.0], [32.0, 213.5], [33.0, 99.0], [34.0, 218.0], [35.0, 167.5], [37.0, 190.0], [38.0, 107.0], [40.0, 208.0], [42.0, 105.5], [43.0, 103.0], [45.0, 129.0], [47.0, 70.0], [3.0, 898.5], [49.0, 112.0], [4.0, 997.5], [5.0, 656.0], [6.0, 480.0], [7.0, 623.5], [8.0, 390.0], [9.0, 572.5], [10.0, 594.0], [11.0, 590.0], [12.0, 628.0], [13.0, 662.0], [14.0, 608.0], [15.0, 625.0], [16.0, 543.0], [1.0, 3668.0], [17.0, 443.0], [18.0, 451.5], [19.0, 461.0], [20.0, 382.0], [21.0, 303.5], [22.0, 362.0], [23.0, 352.5], [24.0, 336.0], [25.0, 373.5], [26.0, 314.0], [27.0, 336.0], [28.0, 321.0], [29.0, 270.5], [30.0, 317.0], [31.0, 238.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 70.0, "minX": 1.0, "maxY": 3667.0, "series": [{"data": [[2.0, 2398.0], [32.0, 213.5], [33.0, 98.5], [34.0, 217.0], [35.0, 166.5], [37.0, 190.0], [38.0, 106.5], [40.0, 206.5], [42.0, 104.5], [43.0, 102.0], [45.0, 129.0], [47.0, 70.0], [3.0, 892.5], [49.0, 111.0], [4.0, 992.5], [5.0, 651.0], [6.0, 479.0], [7.0, 618.0], [8.0, 388.0], [9.0, 567.0], [10.0, 589.5], [11.0, 586.0], [12.0, 624.0], [13.0, 660.0], [14.0, 605.0], [15.0, 621.0], [16.0, 540.5], [1.0, 3667.0], [17.0, 439.0], [18.0, 450.0], [19.0, 460.0], [20.0, 381.0], [21.0, 301.5], [22.0, 360.5], [23.0, 350.0], [24.0, 335.0], [25.0, 373.0], [26.0, 313.0], [27.0, 334.5], [28.0, 320.0], [29.0, 269.5], [30.0, 316.5], [31.0, 238.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.866666666666667, "minX": 1.60404954E12, "maxY": 22.883333333333333, "series": [{"data": [[1.60404954E12, 9.866666666666667], [1.60404984E12, 16.1], [1.60404972E12, 22.883333333333333], [1.60404978E12, 13.333333333333334], [1.6040496E12, 10.983333333333333], [1.60404966E12, 13.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404984E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60404954E12, "maxY": 22.883333333333333, "series": [{"data": [[1.60404954E12, 9.7], [1.60404984E12, 16.233333333333334], [1.6040499E12, 0.03333333333333333], [1.60404972E12, 22.883333333333333], [1.60404978E12, 13.333333333333334], [1.6040496E12, 10.983333333333333], [1.60404966E12, 13.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040499E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60404954E12, "maxY": 22.883333333333333, "series": [{"data": [[1.60404954E12, 9.7], [1.60404984E12, 16.233333333333334], [1.6040499E12, 0.03333333333333333], [1.60404972E12, 22.883333333333333], [1.60404978E12, 13.333333333333334], [1.6040496E12, 10.983333333333333], [1.60404966E12, 13.333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040499E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60404954E12, "maxY": 22.883333333333333, "series": [{"data": [[1.60404954E12, 9.7], [1.60404984E12, 16.233333333333334], [1.6040499E12, 0.03333333333333333], [1.60404972E12, 22.883333333333333], [1.60404978E12, 13.333333333333334], [1.6040496E12, 10.983333333333333], [1.60404966E12, 13.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040499E12, "title": "Total Transactions Per Second"}},
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

