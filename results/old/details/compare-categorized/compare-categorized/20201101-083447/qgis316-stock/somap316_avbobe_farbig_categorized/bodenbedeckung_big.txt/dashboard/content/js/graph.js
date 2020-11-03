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
        data: {"result": {"minY": 11.0, "minX": 0.0, "maxY": 22319.0, "series": [{"data": [[0.0, 11.0], [0.1, 15.0], [0.2, 16.0], [0.3, 17.0], [0.4, 19.0], [0.5, 19.0], [0.6, 22.0], [0.7, 22.0], [0.8, 22.0], [0.9, 23.0], [1.0, 23.0], [1.1, 24.0], [1.2, 24.0], [1.3, 25.0], [1.4, 25.0], [1.5, 26.0], [1.6, 26.0], [1.7, 26.0], [1.8, 26.0], [1.9, 27.0], [2.0, 27.0], [2.1, 28.0], [2.2, 28.0], [2.3, 28.0], [2.4, 29.0], [2.5, 29.0], [2.6, 29.0], [2.7, 29.0], [2.8, 30.0], [2.9, 30.0], [3.0, 30.0], [3.1, 30.0], [3.2, 31.0], [3.3, 31.0], [3.4, 31.0], [3.5, 32.0], [3.6, 32.0], [3.7, 32.0], [3.8, 32.0], [3.9, 32.0], [4.0, 33.0], [4.1, 33.0], [4.2, 33.0], [4.3, 34.0], [4.4, 34.0], [4.5, 35.0], [4.6, 35.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 37.0], [5.1, 37.0], [5.2, 38.0], [5.3, 38.0], [5.4, 38.0], [5.5, 38.0], [5.6, 39.0], [5.7, 39.0], [5.8, 40.0], [5.9, 40.0], [6.0, 40.0], [6.1, 41.0], [6.2, 41.0], [6.3, 42.0], [6.4, 42.0], [6.5, 43.0], [6.6, 43.0], [6.7, 44.0], [6.8, 44.0], [6.9, 44.0], [7.0, 44.0], [7.1, 45.0], [7.2, 45.0], [7.3, 46.0], [7.4, 46.0], [7.5, 46.0], [7.6, 47.0], [7.7, 47.0], [7.8, 47.0], [7.9, 47.0], [8.0, 48.0], [8.1, 48.0], [8.2, 48.0], [8.3, 48.0], [8.4, 49.0], [8.5, 50.0], [8.6, 50.0], [8.7, 50.0], [8.8, 51.0], [8.9, 51.0], [9.0, 52.0], [9.1, 52.0], [9.2, 52.0], [9.3, 53.0], [9.4, 53.0], [9.5, 54.0], [9.6, 54.0], [9.7, 55.0], [9.8, 55.0], [9.9, 56.0], [10.0, 56.0], [10.1, 57.0], [10.2, 57.0], [10.3, 57.0], [10.4, 58.0], [10.5, 58.0], [10.6, 59.0], [10.7, 59.0], [10.8, 59.0], [10.9, 59.0], [11.0, 60.0], [11.1, 60.0], [11.2, 61.0], [11.3, 61.0], [11.4, 61.0], [11.5, 62.0], [11.6, 62.0], [11.7, 63.0], [11.8, 63.0], [11.9, 63.0], [12.0, 63.0], [12.1, 64.0], [12.2, 64.0], [12.3, 65.0], [12.4, 65.0], [12.5, 65.0], [12.6, 66.0], [12.7, 66.0], [12.8, 67.0], [12.9, 67.0], [13.0, 68.0], [13.1, 68.0], [13.2, 69.0], [13.3, 69.0], [13.4, 69.0], [13.5, 69.0], [13.6, 69.0], [13.7, 70.0], [13.8, 71.0], [13.9, 71.0], [14.0, 71.0], [14.1, 71.0], [14.2, 72.0], [14.3, 72.0], [14.4, 72.0], [14.5, 73.0], [14.6, 73.0], [14.7, 73.0], [14.8, 74.0], [14.9, 74.0], [15.0, 74.0], [15.1, 75.0], [15.2, 75.0], [15.3, 76.0], [15.4, 76.0], [15.5, 77.0], [15.6, 77.0], [15.7, 78.0], [15.8, 78.0], [15.9, 79.0], [16.0, 79.0], [16.1, 79.0], [16.2, 79.0], [16.3, 80.0], [16.4, 80.0], [16.5, 81.0], [16.6, 81.0], [16.7, 81.0], [16.8, 82.0], [16.9, 82.0], [17.0, 82.0], [17.1, 83.0], [17.2, 83.0], [17.3, 84.0], [17.4, 84.0], [17.5, 84.0], [17.6, 85.0], [17.7, 85.0], [17.8, 86.0], [17.9, 86.0], [18.0, 87.0], [18.1, 87.0], [18.2, 87.0], [18.3, 88.0], [18.4, 88.0], [18.5, 88.0], [18.6, 89.0], [18.7, 90.0], [18.8, 90.0], [18.9, 91.0], [19.0, 91.0], [19.1, 92.0], [19.2, 92.0], [19.3, 92.0], [19.4, 93.0], [19.5, 94.0], [19.6, 94.0], [19.7, 95.0], [19.8, 95.0], [19.9, 96.0], [20.0, 97.0], [20.1, 97.0], [20.2, 98.0], [20.3, 99.0], [20.4, 99.0], [20.5, 99.0], [20.6, 100.0], [20.7, 100.0], [20.8, 102.0], [20.9, 103.0], [21.0, 103.0], [21.1, 104.0], [21.2, 105.0], [21.3, 105.0], [21.4, 106.0], [21.5, 106.0], [21.6, 107.0], [21.7, 108.0], [21.8, 109.0], [21.9, 109.0], [22.0, 110.0], [22.1, 111.0], [22.2, 111.0], [22.3, 112.0], [22.4, 113.0], [22.5, 113.0], [22.6, 113.0], [22.7, 114.0], [22.8, 115.0], [22.9, 116.0], [23.0, 116.0], [23.1, 117.0], [23.2, 117.0], [23.3, 118.0], [23.4, 118.0], [23.5, 119.0], [23.6, 120.0], [23.7, 120.0], [23.8, 121.0], [23.9, 121.0], [24.0, 122.0], [24.1, 122.0], [24.2, 123.0], [24.3, 123.0], [24.4, 124.0], [24.5, 125.0], [24.6, 125.0], [24.7, 125.0], [24.8, 126.0], [24.9, 126.0], [25.0, 127.0], [25.1, 127.0], [25.2, 128.0], [25.3, 129.0], [25.4, 131.0], [25.5, 131.0], [25.6, 132.0], [25.7, 133.0], [25.8, 134.0], [25.9, 135.0], [26.0, 135.0], [26.1, 136.0], [26.2, 137.0], [26.3, 138.0], [26.4, 139.0], [26.5, 139.0], [26.6, 141.0], [26.7, 142.0], [26.8, 142.0], [26.9, 143.0], [27.0, 144.0], [27.1, 144.0], [27.2, 146.0], [27.3, 146.0], [27.4, 148.0], [27.5, 148.0], [27.6, 149.0], [27.7, 150.0], [27.8, 151.0], [27.9, 151.0], [28.0, 151.0], [28.1, 152.0], [28.2, 153.0], [28.3, 154.0], [28.4, 154.0], [28.5, 155.0], [28.6, 156.0], [28.7, 157.0], [28.8, 158.0], [28.9, 159.0], [29.0, 159.0], [29.1, 160.0], [29.2, 160.0], [29.3, 161.0], [29.4, 161.0], [29.5, 162.0], [29.6, 163.0], [29.7, 164.0], [29.8, 164.0], [29.9, 165.0], [30.0, 165.0], [30.1, 166.0], [30.2, 167.0], [30.3, 167.0], [30.4, 169.0], [30.5, 169.0], [30.6, 170.0], [30.7, 171.0], [30.8, 172.0], [30.9, 172.0], [31.0, 173.0], [31.1, 174.0], [31.2, 176.0], [31.3, 176.0], [31.4, 176.0], [31.5, 178.0], [31.6, 178.0], [31.7, 179.0], [31.8, 180.0], [31.9, 181.0], [32.0, 182.0], [32.1, 183.0], [32.2, 183.0], [32.3, 185.0], [32.4, 185.0], [32.5, 186.0], [32.6, 187.0], [32.7, 188.0], [32.8, 188.0], [32.9, 189.0], [33.0, 189.0], [33.1, 190.0], [33.2, 191.0], [33.3, 192.0], [33.4, 193.0], [33.5, 194.0], [33.6, 195.0], [33.7, 196.0], [33.8, 197.0], [33.9, 198.0], [34.0, 199.0], [34.1, 201.0], [34.2, 202.0], [34.3, 203.0], [34.4, 204.0], [34.5, 205.0], [34.6, 206.0], [34.7, 207.0], [34.8, 209.0], [34.9, 210.0], [35.0, 211.0], [35.1, 212.0], [35.2, 212.0], [35.3, 213.0], [35.4, 214.0], [35.5, 215.0], [35.6, 216.0], [35.7, 218.0], [35.8, 219.0], [35.9, 220.0], [36.0, 222.0], [36.1, 223.0], [36.2, 224.0], [36.3, 224.0], [36.4, 226.0], [36.5, 227.0], [36.6, 229.0], [36.7, 230.0], [36.8, 230.0], [36.9, 233.0], [37.0, 234.0], [37.1, 235.0], [37.2, 235.0], [37.3, 236.0], [37.4, 238.0], [37.5, 241.0], [37.6, 243.0], [37.7, 244.0], [37.8, 245.0], [37.9, 247.0], [38.0, 248.0], [38.1, 249.0], [38.2, 249.0], [38.3, 250.0], [38.4, 252.0], [38.5, 253.0], [38.6, 254.0], [38.7, 255.0], [38.8, 257.0], [38.9, 257.0], [39.0, 259.0], [39.1, 260.0], [39.2, 260.0], [39.3, 262.0], [39.4, 264.0], [39.5, 265.0], [39.6, 266.0], [39.7, 266.0], [39.8, 268.0], [39.9, 269.0], [40.0, 270.0], [40.1, 270.0], [40.2, 271.0], [40.3, 271.0], [40.4, 272.0], [40.5, 272.0], [40.6, 274.0], [40.7, 275.0], [40.8, 276.0], [40.9, 277.0], [41.0, 277.0], [41.1, 278.0], [41.2, 279.0], [41.3, 279.0], [41.4, 280.0], [41.5, 281.0], [41.6, 282.0], [41.7, 282.0], [41.8, 284.0], [41.9, 285.0], [42.0, 285.0], [42.1, 287.0], [42.2, 288.0], [42.3, 289.0], [42.4, 290.0], [42.5, 291.0], [42.6, 291.0], [42.7, 292.0], [42.8, 293.0], [42.9, 294.0], [43.0, 294.0], [43.1, 295.0], [43.2, 297.0], [43.3, 297.0], [43.4, 298.0], [43.5, 299.0], [43.6, 300.0], [43.7, 301.0], [43.8, 302.0], [43.9, 302.0], [44.0, 303.0], [44.1, 304.0], [44.2, 304.0], [44.3, 305.0], [44.4, 306.0], [44.5, 307.0], [44.6, 307.0], [44.7, 308.0], [44.8, 308.0], [44.9, 309.0], [45.0, 310.0], [45.1, 310.0], [45.2, 311.0], [45.3, 312.0], [45.4, 312.0], [45.5, 313.0], [45.6, 313.0], [45.7, 314.0], [45.8, 314.0], [45.9, 315.0], [46.0, 315.0], [46.1, 316.0], [46.2, 316.0], [46.3, 316.0], [46.4, 317.0], [46.5, 317.0], [46.6, 318.0], [46.7, 319.0], [46.8, 320.0], [46.9, 321.0], [47.0, 321.0], [47.1, 322.0], [47.2, 322.0], [47.3, 323.0], [47.4, 324.0], [47.5, 325.0], [47.6, 325.0], [47.7, 326.0], [47.8, 326.0], [47.9, 327.0], [48.0, 328.0], [48.1, 328.0], [48.2, 329.0], [48.3, 330.0], [48.4, 330.0], [48.5, 330.0], [48.6, 331.0], [48.7, 332.0], [48.8, 332.0], [48.9, 333.0], [49.0, 333.0], [49.1, 334.0], [49.2, 334.0], [49.3, 335.0], [49.4, 335.0], [49.5, 336.0], [49.6, 336.0], [49.7, 337.0], [49.8, 338.0], [49.9, 339.0], [50.0, 340.0], [50.1, 341.0], [50.2, 342.0], [50.3, 342.0], [50.4, 343.0], [50.5, 344.0], [50.6, 345.0], [50.7, 346.0], [50.8, 347.0], [50.9, 347.0], [51.0, 348.0], [51.1, 349.0], [51.2, 350.0], [51.3, 350.0], [51.4, 351.0], [51.5, 351.0], [51.6, 352.0], [51.7, 352.0], [51.8, 353.0], [51.9, 353.0], [52.0, 354.0], [52.1, 355.0], [52.2, 356.0], [52.3, 356.0], [52.4, 357.0], [52.5, 358.0], [52.6, 359.0], [52.7, 359.0], [52.8, 360.0], [52.9, 360.0], [53.0, 361.0], [53.1, 362.0], [53.2, 363.0], [53.3, 363.0], [53.4, 364.0], [53.5, 364.0], [53.6, 365.0], [53.7, 366.0], [53.8, 366.0], [53.9, 366.0], [54.0, 367.0], [54.1, 368.0], [54.2, 369.0], [54.3, 371.0], [54.4, 371.0], [54.5, 372.0], [54.6, 373.0], [54.7, 373.0], [54.8, 375.0], [54.9, 375.0], [55.0, 376.0], [55.1, 376.0], [55.2, 377.0], [55.3, 378.0], [55.4, 379.0], [55.5, 380.0], [55.6, 380.0], [55.7, 381.0], [55.8, 383.0], [55.9, 384.0], [56.0, 384.0], [56.1, 385.0], [56.2, 385.0], [56.3, 386.0], [56.4, 387.0], [56.5, 388.0], [56.6, 391.0], [56.7, 391.0], [56.8, 393.0], [56.9, 395.0], [57.0, 396.0], [57.1, 397.0], [57.2, 398.0], [57.3, 399.0], [57.4, 400.0], [57.5, 401.0], [57.6, 403.0], [57.7, 403.0], [57.8, 404.0], [57.9, 407.0], [58.0, 408.0], [58.1, 408.0], [58.2, 410.0], [58.3, 411.0], [58.4, 412.0], [58.5, 414.0], [58.6, 415.0], [58.7, 416.0], [58.8, 417.0], [58.9, 418.0], [59.0, 419.0], [59.1, 420.0], [59.2, 422.0], [59.3, 423.0], [59.4, 424.0], [59.5, 426.0], [59.6, 426.0], [59.7, 429.0], [59.8, 429.0], [59.9, 431.0], [60.0, 432.0], [60.1, 434.0], [60.2, 435.0], [60.3, 436.0], [60.4, 438.0], [60.5, 440.0], [60.6, 441.0], [60.7, 444.0], [60.8, 446.0], [60.9, 447.0], [61.0, 447.0], [61.1, 448.0], [61.2, 449.0], [61.3, 450.0], [61.4, 451.0], [61.5, 454.0], [61.6, 455.0], [61.7, 456.0], [61.8, 459.0], [61.9, 461.0], [62.0, 462.0], [62.1, 464.0], [62.2, 467.0], [62.3, 467.0], [62.4, 470.0], [62.5, 471.0], [62.6, 472.0], [62.7, 474.0], [62.8, 476.0], [62.9, 479.0], [63.0, 481.0], [63.1, 483.0], [63.2, 485.0], [63.3, 486.0], [63.4, 487.0], [63.5, 488.0], [63.6, 489.0], [63.7, 490.0], [63.8, 492.0], [63.9, 493.0], [64.0, 496.0], [64.1, 497.0], [64.2, 499.0], [64.3, 500.0], [64.4, 501.0], [64.5, 503.0], [64.6, 506.0], [64.7, 507.0], [64.8, 509.0], [64.9, 511.0], [65.0, 513.0], [65.1, 514.0], [65.2, 515.0], [65.3, 516.0], [65.4, 518.0], [65.5, 520.0], [65.6, 521.0], [65.7, 523.0], [65.8, 526.0], [65.9, 530.0], [66.0, 532.0], [66.1, 535.0], [66.2, 535.0], [66.3, 536.0], [66.4, 537.0], [66.5, 539.0], [66.6, 540.0], [66.7, 543.0], [66.8, 544.0], [66.9, 546.0], [67.0, 550.0], [67.1, 553.0], [67.2, 555.0], [67.3, 556.0], [67.4, 559.0], [67.5, 561.0], [67.6, 563.0], [67.7, 564.0], [67.8, 566.0], [67.9, 569.0], [68.0, 570.0], [68.1, 571.0], [68.2, 571.0], [68.3, 572.0], [68.4, 574.0], [68.5, 575.0], [68.6, 577.0], [68.7, 578.0], [68.8, 579.0], [68.9, 581.0], [69.0, 582.0], [69.1, 584.0], [69.2, 585.0], [69.3, 587.0], [69.4, 588.0], [69.5, 590.0], [69.6, 590.0], [69.7, 591.0], [69.8, 592.0], [69.9, 593.0], [70.0, 593.0], [70.1, 594.0], [70.2, 596.0], [70.3, 597.0], [70.4, 598.0], [70.5, 599.0], [70.6, 600.0], [70.7, 602.0], [70.8, 602.0], [70.9, 602.0], [71.0, 603.0], [71.1, 604.0], [71.2, 605.0], [71.3, 606.0], [71.4, 607.0], [71.5, 608.0], [71.6, 609.0], [71.7, 609.0], [71.8, 610.0], [71.9, 611.0], [72.0, 612.0], [72.1, 613.0], [72.2, 614.0], [72.3, 615.0], [72.4, 616.0], [72.5, 617.0], [72.6, 617.0], [72.7, 618.0], [72.8, 619.0], [72.9, 619.0], [73.0, 620.0], [73.1, 622.0], [73.2, 623.0], [73.3, 624.0], [73.4, 625.0], [73.5, 625.0], [73.6, 627.0], [73.7, 627.0], [73.8, 628.0], [73.9, 628.0], [74.0, 630.0], [74.1, 630.0], [74.2, 631.0], [74.3, 632.0], [74.4, 634.0], [74.5, 634.0], [74.6, 635.0], [74.7, 636.0], [74.8, 637.0], [74.9, 638.0], [75.0, 638.0], [75.1, 639.0], [75.2, 640.0], [75.3, 641.0], [75.4, 641.0], [75.5, 642.0], [75.6, 643.0], [75.7, 644.0], [75.8, 645.0], [75.9, 646.0], [76.0, 647.0], [76.1, 648.0], [76.2, 649.0], [76.3, 650.0], [76.4, 651.0], [76.5, 652.0], [76.6, 654.0], [76.7, 654.0], [76.8, 656.0], [76.9, 657.0], [77.0, 658.0], [77.1, 659.0], [77.2, 660.0], [77.3, 661.0], [77.4, 662.0], [77.5, 664.0], [77.6, 666.0], [77.7, 667.0], [77.8, 668.0], [77.9, 669.0], [78.0, 670.0], [78.1, 671.0], [78.2, 672.0], [78.3, 674.0], [78.4, 677.0], [78.5, 681.0], [78.6, 683.0], [78.7, 685.0], [78.8, 686.0], [78.9, 687.0], [79.0, 689.0], [79.1, 689.0], [79.2, 692.0], [79.3, 693.0], [79.4, 695.0], [79.5, 698.0], [79.6, 699.0], [79.7, 701.0], [79.8, 702.0], [79.9, 704.0], [80.0, 706.0], [80.1, 707.0], [80.2, 709.0], [80.3, 712.0], [80.4, 715.0], [80.5, 717.0], [80.6, 721.0], [80.7, 728.0], [80.8, 731.0], [80.9, 735.0], [81.0, 737.0], [81.1, 740.0], [81.2, 744.0], [81.3, 745.0], [81.4, 748.0], [81.5, 753.0], [81.6, 756.0], [81.7, 759.0], [81.8, 763.0], [81.9, 765.0], [82.0, 774.0], [82.1, 780.0], [82.2, 784.0], [82.3, 787.0], [82.4, 794.0], [82.5, 801.0], [82.6, 804.0], [82.7, 808.0], [82.8, 812.0], [82.9, 817.0], [83.0, 820.0], [83.1, 825.0], [83.2, 829.0], [83.3, 832.0], [83.4, 836.0], [83.5, 839.0], [83.6, 847.0], [83.7, 851.0], [83.8, 855.0], [83.9, 861.0], [84.0, 864.0], [84.1, 866.0], [84.2, 871.0], [84.3, 873.0], [84.4, 876.0], [84.5, 878.0], [84.6, 880.0], [84.7, 882.0], [84.8, 884.0], [84.9, 885.0], [85.0, 887.0], [85.1, 890.0], [85.2, 892.0], [85.3, 894.0], [85.4, 897.0], [85.5, 899.0], [85.6, 901.0], [85.7, 904.0], [85.8, 908.0], [85.9, 909.0], [86.0, 911.0], [86.1, 912.0], [86.2, 913.0], [86.3, 916.0], [86.4, 918.0], [86.5, 922.0], [86.6, 926.0], [86.7, 927.0], [86.8, 928.0], [86.9, 931.0], [87.0, 934.0], [87.1, 938.0], [87.2, 939.0], [87.3, 942.0], [87.4, 944.0], [87.5, 948.0], [87.6, 951.0], [87.7, 955.0], [87.8, 957.0], [87.9, 960.0], [88.0, 962.0], [88.1, 965.0], [88.2, 969.0], [88.3, 971.0], [88.4, 976.0], [88.5, 983.0], [88.6, 987.0], [88.7, 991.0], [88.8, 995.0], [88.9, 998.0], [89.0, 1005.0], [89.1, 1009.0], [89.2, 1012.0], [89.3, 1022.0], [89.4, 1027.0], [89.5, 1043.0], [89.6, 1049.0], [89.7, 1052.0], [89.8, 1065.0], [89.9, 1070.0], [90.0, 1091.0], [90.1, 1100.0], [90.2, 1115.0], [90.3, 1127.0], [90.4, 1136.0], [90.5, 1144.0], [90.6, 1147.0], [90.7, 1155.0], [90.8, 1162.0], [90.9, 1165.0], [91.0, 1169.0], [91.1, 1171.0], [91.2, 1179.0], [91.3, 1185.0], [91.4, 1189.0], [91.5, 1193.0], [91.6, 1198.0], [91.7, 1201.0], [91.8, 1202.0], [91.9, 1207.0], [92.0, 1211.0], [92.1, 1215.0], [92.2, 1220.0], [92.3, 1223.0], [92.4, 1234.0], [92.5, 1237.0], [92.6, 1242.0], [92.7, 1248.0], [92.8, 1252.0], [92.9, 1261.0], [93.0, 1265.0], [93.1, 1270.0], [93.2, 1280.0], [93.3, 1284.0], [93.4, 1294.0], [93.5, 1313.0], [93.6, 1333.0], [93.7, 1365.0], [93.8, 1381.0], [93.9, 1389.0], [94.0, 1426.0], [94.1, 1447.0], [94.2, 1468.0], [94.3, 1524.0], [94.4, 1566.0], [94.5, 1618.0], [94.6, 1662.0], [94.7, 1684.0], [94.8, 1707.0], [94.9, 1750.0], [95.0, 1801.0], [95.1, 1833.0], [95.2, 1929.0], [95.3, 1991.0], [95.4, 2047.0], [95.5, 2105.0], [95.6, 2177.0], [95.7, 2286.0], [95.8, 2421.0], [95.9, 2528.0], [96.0, 2564.0], [96.1, 2603.0], [96.2, 2654.0], [96.3, 2700.0], [96.4, 2767.0], [96.5, 2804.0], [96.6, 2880.0], [96.7, 2955.0], [96.8, 3017.0], [96.9, 3057.0], [97.0, 3095.0], [97.1, 3178.0], [97.2, 3276.0], [97.3, 3407.0], [97.4, 3502.0], [97.5, 3575.0], [97.6, 3728.0], [97.7, 3847.0], [97.8, 3914.0], [97.9, 4007.0], [98.0, 4040.0], [98.1, 4127.0], [98.2, 4183.0], [98.3, 4467.0], [98.4, 5143.0], [98.5, 5507.0], [98.6, 5941.0], [98.7, 6581.0], [98.8, 8071.0], [98.9, 8183.0], [99.0, 8416.0], [99.1, 8506.0], [99.2, 8663.0], [99.3, 9014.0], [99.4, 9645.0], [99.5, 10858.0], [99.6, 11016.0], [99.7, 11242.0], [99.8, 11465.0], [99.9, 11616.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1065.0, "series": [{"data": [[0.0, 1065.0], [600.0, 471.0], [700.0, 147.0], [800.0, 160.0], [900.0, 174.0], [1000.0, 60.0], [1100.0, 83.0], [1200.0, 90.0], [1300.0, 27.0], [1400.0, 17.0], [1500.0, 10.0], [1600.0, 17.0], [1700.0, 11.0], [1800.0, 9.0], [1900.0, 8.0], [2000.0, 9.0], [2100.0, 6.0], [2300.0, 4.0], [2200.0, 6.0], [2400.0, 4.0], [2500.0, 10.0], [2600.0, 11.0], [2800.0, 9.0], [2700.0, 10.0], [2900.0, 7.0], [3000.0, 12.0], [3100.0, 6.0], [3200.0, 5.0], [3300.0, 3.0], [3400.0, 6.0], [3500.0, 7.0], [3700.0, 4.0], [3600.0, 3.0], [3800.0, 4.0], [3900.0, 5.0], [4000.0, 13.0], [4200.0, 3.0], [4300.0, 1.0], [4100.0, 6.0], [4600.0, 1.0], [4400.0, 1.0], [4700.0, 2.0], [5100.0, 2.0], [4900.0, 1.0], [5300.0, 1.0], [5400.0, 3.0], [5500.0, 3.0], [5700.0, 2.0], [6000.0, 2.0], [5900.0, 1.0], [6200.0, 2.0], [6500.0, 1.0], [6900.0, 1.0], [8000.0, 5.0], [8100.0, 5.0], [8600.0, 4.0], [8500.0, 3.0], [8200.0, 2.0], [8300.0, 2.0], [8400.0, 5.0], [8700.0, 1.0], [9000.0, 3.0], [8900.0, 1.0], [8800.0, 1.0], [9600.0, 3.0], [10300.0, 3.0], [10600.0, 1.0], [10700.0, 1.0], [11000.0, 1.0], [10900.0, 4.0], [10800.0, 1.0], [11100.0, 3.0], [11200.0, 4.0], [11500.0, 3.0], [11300.0, 1.0], [11400.0, 3.0], [11600.0, 1.0], [11700.0, 2.0], [19300.0, 1.0], [22300.0, 1.0], [21700.0, 1.0], [100.0, 703.0], [200.0, 491.0], [300.0, 719.0], [400.0, 354.0], [500.0, 331.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 22300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 298.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3338.0, "series": [{"data": [[0.0, 3338.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1554.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 298.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.6042203E12, "maxY": 10.0, "series": [{"data": [[1.60422042E12, 10.0], [1.6042206E12, 9.978505629477997], [1.60422066E12, 2.0], [1.6042203E12, 9.994791666666682], [1.60422048E12, 10.0], [1.60422036E12, 10.0], [1.60422054E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422066E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 396.5, "minX": 1.0, "maxY": 8181.0, "series": [{"data": [[8.0, 850.5], [4.0, 612.0], [2.0, 1193.0], [1.0, 8146.0], [9.0, 396.5], [10.0, 631.72234022012], [5.0, 753.0], [6.0, 796.0], [3.0, 8181.0], [7.0, 785.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990751445086751, 634.8073217726388]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 21.866666666666667, "minX": 1.6042203E12, "maxY": 4821629.166666667, "series": [{"data": [[1.60422042E12, 4198722.366666666], [1.6042206E12, 3993304.95], [1.60422066E12, 20245.833333333332], [1.6042203E12, 2121207.283333333], [1.60422048E12, 4735571.516666667], [1.60422036E12, 3751589.55], [1.60422054E12, 4821629.166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422042E12, 6306.45], [1.6042206E12, 7681.833333333333], [1.60422066E12, 21.866666666666667], [1.6042203E12, 4348.033333333334], [1.60422048E12, 10426.783333333333], [1.60422036E12, 5007.833333333333], [1.60422054E12, 6148.833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422066E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 437.65540044085225, "minX": 1.6042203E12, "maxY": 5840.0, "series": [{"data": [[1.60422042E12, 738.2], [1.6042206E12, 599.3674513817804], [1.60422066E12, 5840.0], [1.6042203E12, 470.00868055555554], [1.60422048E12, 437.65540044085225], [1.60422036E12, 941.4262048192758], [1.60422054E12, 753.5024875621887]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422066E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 436.56208670095504, "minX": 1.6042203E12, "maxY": 5838.0, "series": [{"data": [[1.60422042E12, 736.0024844720497], [1.6042206E12, 598.1443193449337], [1.60422066E12, 5838.0], [1.6042203E12, 468.43402777777794], [1.60422048E12, 436.56208670095504], [1.60422036E12, 939.1626506024091], [1.60422054E12, 751.6417910447753]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422066E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6042203E12, "maxY": 0.1423611111111111, "series": [{"data": [[1.60422042E12, 0.009937888198757773], [1.6042206E12, 0.010235414534288632], [1.60422066E12, 0.0], [1.6042203E12, 0.1423611111111111], [1.60422048E12, 0.011021307861866276], [1.60422036E12, 0.022590361445783146], [1.60422054E12, 0.019900497512437814]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422066E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 11.0, "minX": 1.6042203E12, "maxY": 22319.0, "series": [{"data": [[1.60422042E12, 22319.0], [1.6042206E12, 21770.0], [1.60422066E12, 8181.0], [1.6042203E12, 11136.0], [1.60422048E12, 9014.0], [1.60422036E12, 19373.0], [1.60422054E12, 10619.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422042E12, 23.253999807834624], [1.6042206E12, 20.80199976682663], [1.60422066E12, 1193.0], [1.6042203E12, 26.0], [1.60422048E12, 25.0], [1.60422036E12, 17.0], [1.60422054E12, 19.734999424219133]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422042E12, 23.97940007686615], [1.6042206E12, 21.0], [1.60422066E12, 1193.0], [1.6042203E12, 26.0], [1.60422048E12, 26.451400389671328], [1.60422036E12, 19.917500317096714], [1.60422054E12, 21.90850023031235]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422042E12, 23.656999903917313], [1.6042206E12, 21.0], [1.60422066E12, 1193.0], [1.6042203E12, 26.0], [1.60422048E12, 25.0], [1.60422036E12, 18.58749960362911], [1.60422054E12, 20.942499712109562]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422042E12, 15.0], [1.6042206E12, 12.0], [1.60422066E12, 1193.0], [1.6042203E12, 23.0], [1.60422048E12, 18.0], [1.60422036E12, 13.0], [1.60422054E12, 11.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422042E12, 432.0], [1.6042206E12, 331.0], [1.60422066E12, 8146.0], [1.6042203E12, 285.0], [1.60422048E12, 266.0], [1.60422036E12, 448.0], [1.60422054E12, 532.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422066E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 80.0, "minX": 1.0, "maxY": 2249.5, "series": [{"data": [[32.0, 214.5], [33.0, 200.0], [2.0, 1484.0], [34.0, 204.5], [35.0, 181.5], [37.0, 259.0], [36.0, 263.0], [38.0, 272.0], [40.0, 119.0], [44.0, 146.5], [45.0, 181.0], [3.0, 1114.0], [49.0, 108.0], [50.0, 80.0], [51.0, 92.0], [55.0, 97.0], [4.0, 554.5], [5.0, 602.0], [6.0, 367.0], [7.0, 160.5], [8.0, 566.0], [9.0, 907.5], [10.0, 618.0], [11.0, 415.0], [12.0, 653.0], [13.0, 638.0], [14.0, 628.0], [15.0, 383.5], [1.0, 2249.5], [16.0, 456.5], [17.0, 540.0], [18.0, 444.0], [19.0, 502.5], [20.0, 350.5], [21.0, 369.0], [22.0, 324.5], [23.0, 277.5], [24.0, 347.5], [25.0, 223.5], [26.0, 316.5], [27.0, 131.0], [28.0, 250.0], [29.0, 336.5], [30.0, 298.0], [31.0, 313.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 78.0, "minX": 1.0, "maxY": 2246.5, "series": [{"data": [[32.0, 213.5], [33.0, 199.5], [2.0, 1481.5], [34.0, 204.0], [35.0, 180.0], [37.0, 257.0], [36.0, 262.0], [38.0, 271.5], [40.0, 118.0], [44.0, 146.0], [45.0, 180.0], [3.0, 1112.0], [49.0, 106.0], [50.0, 78.0], [51.0, 92.0], [55.0, 96.0], [4.0, 551.5], [5.0, 599.0], [6.0, 366.5], [7.0, 159.0], [8.0, 563.5], [9.0, 904.0], [10.0, 614.5], [11.0, 413.5], [12.0, 643.5], [13.0, 635.5], [14.0, 625.5], [15.0, 382.5], [1.0, 2246.5], [16.0, 454.0], [17.0, 540.0], [18.0, 443.0], [19.0, 498.0], [20.0, 345.5], [21.0, 368.0], [22.0, 321.5], [23.0, 276.0], [24.0, 346.5], [25.0, 222.5], [26.0, 315.0], [27.0, 131.0], [28.0, 249.5], [29.0, 335.5], [30.0, 298.0], [31.0, 312.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.766666666666667, "minX": 1.6042203E12, "maxY": 22.683333333333334, "series": [{"data": [[1.60422042E12, 13.416666666666666], [1.6042206E12, 16.166666666666668], [1.6042203E12, 9.766666666666667], [1.60422048E12, 22.683333333333334], [1.60422036E12, 11.066666666666666], [1.60422054E12, 13.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042206E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.6042203E12, "maxY": 22.683333333333334, "series": [{"data": [[1.60422042E12, 13.416666666666666], [1.6042206E12, 16.283333333333335], [1.60422066E12, 0.05], [1.6042203E12, 9.6], [1.60422048E12, 22.683333333333334], [1.60422036E12, 11.066666666666666], [1.60422054E12, 13.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422066E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.6042203E12, "maxY": 22.683333333333334, "series": [{"data": [[1.60422042E12, 13.416666666666666], [1.6042206E12, 16.283333333333335], [1.60422066E12, 0.05], [1.6042203E12, 9.6], [1.60422048E12, 22.683333333333334], [1.60422036E12, 11.066666666666666], [1.60422054E12, 13.4]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422066E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.6042203E12, "maxY": 22.683333333333334, "series": [{"data": [[1.60422042E12, 13.416666666666666], [1.6042206E12, 16.283333333333335], [1.60422066E12, 0.05], [1.6042203E12, 9.6], [1.60422048E12, 22.683333333333334], [1.60422036E12, 11.066666666666666], [1.60422054E12, 13.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422066E12, "title": "Total Transactions Per Second"}},
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

