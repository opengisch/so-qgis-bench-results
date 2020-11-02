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
        data: {"result": {"minY": 20.0, "minX": 0.0, "maxY": 20697.0, "series": [{"data": [[0.0, 20.0], [0.1, 24.0], [0.2, 24.0], [0.3, 26.0], [0.4, 28.0], [0.5, 29.0], [0.6, 30.0], [0.7, 31.0], [0.8, 32.0], [0.9, 32.0], [1.0, 32.0], [1.1, 33.0], [1.2, 33.0], [1.3, 34.0], [1.4, 34.0], [1.5, 34.0], [1.6, 35.0], [1.7, 35.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 38.0], [2.6, 38.0], [2.7, 39.0], [2.8, 39.0], [2.9, 39.0], [3.0, 39.0], [3.1, 40.0], [3.2, 40.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 41.0], [3.7, 42.0], [3.8, 42.0], [3.9, 42.0], [4.0, 43.0], [4.1, 43.0], [4.2, 43.0], [4.3, 44.0], [4.4, 44.0], [4.5, 44.0], [4.6, 45.0], [4.7, 45.0], [4.8, 45.0], [4.9, 46.0], [5.0, 46.0], [5.1, 46.0], [5.2, 46.0], [5.3, 47.0], [5.4, 47.0], [5.5, 47.0], [5.6, 48.0], [5.7, 48.0], [5.8, 48.0], [5.9, 49.0], [6.0, 50.0], [6.1, 50.0], [6.2, 50.0], [6.3, 51.0], [6.4, 52.0], [6.5, 52.0], [6.6, 53.0], [6.7, 53.0], [6.8, 53.0], [6.9, 54.0], [7.0, 55.0], [7.1, 55.0], [7.2, 55.0], [7.3, 56.0], [7.4, 57.0], [7.5, 57.0], [7.6, 58.0], [7.7, 58.0], [7.8, 58.0], [7.9, 58.0], [8.0, 59.0], [8.1, 59.0], [8.2, 59.0], [8.3, 60.0], [8.4, 60.0], [8.5, 61.0], [8.6, 61.0], [8.7, 61.0], [8.8, 62.0], [8.9, 62.0], [9.0, 63.0], [9.1, 63.0], [9.2, 64.0], [9.3, 64.0], [9.4, 64.0], [9.5, 65.0], [9.6, 65.0], [9.7, 65.0], [9.8, 66.0], [9.9, 66.0], [10.0, 67.0], [10.1, 67.0], [10.2, 68.0], [10.3, 68.0], [10.4, 69.0], [10.5, 69.0], [10.6, 70.0], [10.7, 70.0], [10.8, 70.0], [10.9, 71.0], [11.0, 71.0], [11.1, 72.0], [11.2, 73.0], [11.3, 73.0], [11.4, 73.0], [11.5, 74.0], [11.6, 74.0], [11.7, 75.0], [11.8, 75.0], [11.9, 76.0], [12.0, 76.0], [12.1, 77.0], [12.2, 77.0], [12.3, 77.0], [12.4, 78.0], [12.5, 78.0], [12.6, 79.0], [12.7, 79.0], [12.8, 80.0], [12.9, 80.0], [13.0, 80.0], [13.1, 81.0], [13.2, 81.0], [13.3, 81.0], [13.4, 82.0], [13.5, 82.0], [13.6, 83.0], [13.7, 84.0], [13.8, 84.0], [13.9, 85.0], [14.0, 85.0], [14.1, 86.0], [14.2, 86.0], [14.3, 87.0], [14.4, 87.0], [14.5, 88.0], [14.6, 88.0], [14.7, 88.0], [14.8, 89.0], [14.9, 90.0], [15.0, 90.0], [15.1, 90.0], [15.2, 90.0], [15.3, 91.0], [15.4, 91.0], [15.5, 91.0], [15.6, 92.0], [15.7, 93.0], [15.8, 93.0], [15.9, 94.0], [16.0, 94.0], [16.1, 95.0], [16.2, 95.0], [16.3, 95.0], [16.4, 96.0], [16.5, 96.0], [16.6, 97.0], [16.7, 97.0], [16.8, 97.0], [16.9, 98.0], [17.0, 98.0], [17.1, 98.0], [17.2, 98.0], [17.3, 99.0], [17.4, 99.0], [17.5, 100.0], [17.6, 101.0], [17.7, 101.0], [17.8, 102.0], [17.9, 102.0], [18.0, 102.0], [18.1, 103.0], [18.2, 103.0], [18.3, 104.0], [18.4, 104.0], [18.5, 105.0], [18.6, 105.0], [18.7, 105.0], [18.8, 106.0], [18.9, 106.0], [19.0, 107.0], [19.1, 107.0], [19.2, 108.0], [19.3, 109.0], [19.4, 109.0], [19.5, 110.0], [19.6, 111.0], [19.7, 112.0], [19.8, 112.0], [19.9, 113.0], [20.0, 113.0], [20.1, 114.0], [20.2, 115.0], [20.3, 115.0], [20.4, 115.0], [20.5, 116.0], [20.6, 117.0], [20.7, 118.0], [20.8, 118.0], [20.9, 119.0], [21.0, 120.0], [21.1, 121.0], [21.2, 121.0], [21.3, 121.0], [21.4, 122.0], [21.5, 122.0], [21.6, 123.0], [21.7, 124.0], [21.8, 124.0], [21.9, 125.0], [22.0, 126.0], [22.1, 127.0], [22.2, 128.0], [22.3, 128.0], [22.4, 129.0], [22.5, 129.0], [22.6, 130.0], [22.7, 131.0], [22.8, 131.0], [22.9, 132.0], [23.0, 132.0], [23.1, 133.0], [23.2, 134.0], [23.3, 135.0], [23.4, 136.0], [23.5, 136.0], [23.6, 137.0], [23.7, 137.0], [23.8, 138.0], [23.9, 139.0], [24.0, 139.0], [24.1, 140.0], [24.2, 141.0], [24.3, 142.0], [24.4, 142.0], [24.5, 143.0], [24.6, 143.0], [24.7, 144.0], [24.8, 145.0], [24.9, 146.0], [25.0, 146.0], [25.1, 147.0], [25.2, 148.0], [25.3, 148.0], [25.4, 149.0], [25.5, 150.0], [25.6, 150.0], [25.7, 152.0], [25.8, 152.0], [25.9, 153.0], [26.0, 153.0], [26.1, 154.0], [26.2, 155.0], [26.3, 156.0], [26.4, 157.0], [26.5, 158.0], [26.6, 160.0], [26.7, 161.0], [26.8, 161.0], [26.9, 162.0], [27.0, 164.0], [27.1, 164.0], [27.2, 165.0], [27.3, 165.0], [27.4, 166.0], [27.5, 167.0], [27.6, 168.0], [27.7, 168.0], [27.8, 169.0], [27.9, 170.0], [28.0, 170.0], [28.1, 171.0], [28.2, 172.0], [28.3, 172.0], [28.4, 173.0], [28.5, 174.0], [28.6, 174.0], [28.7, 175.0], [28.8, 175.0], [28.9, 176.0], [29.0, 177.0], [29.1, 179.0], [29.2, 179.0], [29.3, 180.0], [29.4, 181.0], [29.5, 182.0], [29.6, 182.0], [29.7, 183.0], [29.8, 183.0], [29.9, 184.0], [30.0, 185.0], [30.1, 186.0], [30.2, 186.0], [30.3, 188.0], [30.4, 189.0], [30.5, 190.0], [30.6, 191.0], [30.7, 191.0], [30.8, 192.0], [30.9, 192.0], [31.0, 193.0], [31.1, 194.0], [31.2, 195.0], [31.3, 196.0], [31.4, 197.0], [31.5, 198.0], [31.6, 199.0], [31.7, 199.0], [31.8, 200.0], [31.9, 201.0], [32.0, 201.0], [32.1, 202.0], [32.2, 203.0], [32.3, 205.0], [32.4, 206.0], [32.5, 207.0], [32.6, 208.0], [32.7, 209.0], [32.8, 210.0], [32.9, 211.0], [33.0, 211.0], [33.1, 212.0], [33.2, 213.0], [33.3, 214.0], [33.4, 215.0], [33.5, 217.0], [33.6, 218.0], [33.7, 219.0], [33.8, 219.0], [33.9, 220.0], [34.0, 221.0], [34.1, 223.0], [34.2, 224.0], [34.3, 225.0], [34.4, 226.0], [34.5, 227.0], [34.6, 228.0], [34.7, 229.0], [34.8, 230.0], [34.9, 230.0], [35.0, 231.0], [35.1, 233.0], [35.2, 234.0], [35.3, 235.0], [35.4, 236.0], [35.5, 237.0], [35.6, 238.0], [35.7, 240.0], [35.8, 240.0], [35.9, 241.0], [36.0, 241.0], [36.1, 243.0], [36.2, 245.0], [36.3, 246.0], [36.4, 247.0], [36.5, 248.0], [36.6, 249.0], [36.7, 249.0], [36.8, 250.0], [36.9, 251.0], [37.0, 252.0], [37.1, 253.0], [37.2, 254.0], [37.3, 256.0], [37.4, 257.0], [37.5, 259.0], [37.6, 260.0], [37.7, 261.0], [37.8, 262.0], [37.9, 263.0], [38.0, 265.0], [38.1, 266.0], [38.2, 267.0], [38.3, 268.0], [38.4, 269.0], [38.5, 270.0], [38.6, 270.0], [38.7, 271.0], [38.8, 272.0], [38.9, 272.0], [39.0, 273.0], [39.1, 274.0], [39.2, 275.0], [39.3, 276.0], [39.4, 277.0], [39.5, 278.0], [39.6, 279.0], [39.7, 279.0], [39.8, 280.0], [39.9, 281.0], [40.0, 282.0], [40.1, 283.0], [40.2, 284.0], [40.3, 286.0], [40.4, 287.0], [40.5, 288.0], [40.6, 289.0], [40.7, 290.0], [40.8, 290.0], [40.9, 291.0], [41.0, 292.0], [41.1, 293.0], [41.2, 294.0], [41.3, 295.0], [41.4, 296.0], [41.5, 297.0], [41.6, 299.0], [41.7, 299.0], [41.8, 300.0], [41.9, 300.0], [42.0, 301.0], [42.1, 302.0], [42.2, 303.0], [42.3, 304.0], [42.4, 305.0], [42.5, 305.0], [42.6, 307.0], [42.7, 308.0], [42.8, 309.0], [42.9, 310.0], [43.0, 310.0], [43.1, 311.0], [43.2, 313.0], [43.3, 313.0], [43.4, 313.0], [43.5, 314.0], [43.6, 315.0], [43.7, 315.0], [43.8, 316.0], [43.9, 317.0], [44.0, 317.0], [44.1, 317.0], [44.2, 318.0], [44.3, 319.0], [44.4, 319.0], [44.5, 320.0], [44.6, 321.0], [44.7, 321.0], [44.8, 321.0], [44.9, 321.0], [45.0, 322.0], [45.1, 323.0], [45.2, 323.0], [45.3, 324.0], [45.4, 325.0], [45.5, 325.0], [45.6, 326.0], [45.7, 326.0], [45.8, 327.0], [45.9, 327.0], [46.0, 328.0], [46.1, 329.0], [46.2, 329.0], [46.3, 330.0], [46.4, 330.0], [46.5, 330.0], [46.6, 331.0], [46.7, 332.0], [46.8, 332.0], [46.9, 332.0], [47.0, 333.0], [47.1, 334.0], [47.2, 334.0], [47.3, 335.0], [47.4, 335.0], [47.5, 336.0], [47.6, 336.0], [47.7, 336.0], [47.8, 337.0], [47.9, 337.0], [48.0, 338.0], [48.1, 338.0], [48.2, 338.0], [48.3, 339.0], [48.4, 339.0], [48.5, 340.0], [48.6, 341.0], [48.7, 342.0], [48.8, 342.0], [48.9, 343.0], [49.0, 343.0], [49.1, 344.0], [49.2, 344.0], [49.3, 345.0], [49.4, 345.0], [49.5, 346.0], [49.6, 347.0], [49.7, 348.0], [49.8, 348.0], [49.9, 349.0], [50.0, 350.0], [50.1, 350.0], [50.2, 351.0], [50.3, 351.0], [50.4, 352.0], [50.5, 353.0], [50.6, 354.0], [50.7, 354.0], [50.8, 355.0], [50.9, 355.0], [51.0, 355.0], [51.1, 356.0], [51.2, 356.0], [51.3, 357.0], [51.4, 357.0], [51.5, 358.0], [51.6, 358.0], [51.7, 359.0], [51.8, 359.0], [51.9, 360.0], [52.0, 360.0], [52.1, 361.0], [52.2, 361.0], [52.3, 362.0], [52.4, 363.0], [52.5, 364.0], [52.6, 364.0], [52.7, 365.0], [52.8, 366.0], [52.9, 367.0], [53.0, 368.0], [53.1, 368.0], [53.2, 368.0], [53.3, 369.0], [53.4, 370.0], [53.5, 370.0], [53.6, 371.0], [53.7, 372.0], [53.8, 373.0], [53.9, 374.0], [54.0, 375.0], [54.1, 375.0], [54.2, 377.0], [54.3, 377.0], [54.4, 378.0], [54.5, 378.0], [54.6, 379.0], [54.7, 380.0], [54.8, 381.0], [54.9, 381.0], [55.0, 382.0], [55.1, 382.0], [55.2, 383.0], [55.3, 384.0], [55.4, 384.0], [55.5, 385.0], [55.6, 386.0], [55.7, 387.0], [55.8, 388.0], [55.9, 389.0], [56.0, 390.0], [56.1, 390.0], [56.2, 391.0], [56.3, 392.0], [56.4, 393.0], [56.5, 394.0], [56.6, 395.0], [56.7, 397.0], [56.8, 398.0], [56.9, 398.0], [57.0, 399.0], [57.1, 402.0], [57.2, 403.0], [57.3, 404.0], [57.4, 405.0], [57.5, 406.0], [57.6, 407.0], [57.7, 407.0], [57.8, 408.0], [57.9, 409.0], [58.0, 410.0], [58.1, 411.0], [58.2, 413.0], [58.3, 414.0], [58.4, 414.0], [58.5, 415.0], [58.6, 416.0], [58.7, 417.0], [58.8, 418.0], [58.9, 419.0], [59.0, 421.0], [59.1, 422.0], [59.2, 423.0], [59.3, 424.0], [59.4, 425.0], [59.5, 426.0], [59.6, 427.0], [59.7, 428.0], [59.8, 429.0], [59.9, 430.0], [60.0, 432.0], [60.1, 434.0], [60.2, 436.0], [60.3, 437.0], [60.4, 438.0], [60.5, 439.0], [60.6, 442.0], [60.7, 443.0], [60.8, 444.0], [60.9, 445.0], [61.0, 446.0], [61.1, 447.0], [61.2, 449.0], [61.3, 450.0], [61.4, 451.0], [61.5, 452.0], [61.6, 454.0], [61.7, 455.0], [61.8, 455.0], [61.9, 457.0], [62.0, 458.0], [62.1, 460.0], [62.2, 463.0], [62.3, 464.0], [62.4, 465.0], [62.5, 467.0], [62.6, 469.0], [62.7, 470.0], [62.8, 472.0], [62.9, 474.0], [63.0, 474.0], [63.1, 475.0], [63.2, 477.0], [63.3, 478.0], [63.4, 481.0], [63.5, 483.0], [63.6, 484.0], [63.7, 485.0], [63.8, 486.0], [63.9, 487.0], [64.0, 488.0], [64.1, 490.0], [64.2, 491.0], [64.3, 495.0], [64.4, 496.0], [64.5, 498.0], [64.6, 502.0], [64.7, 505.0], [64.8, 507.0], [64.9, 508.0], [65.0, 509.0], [65.1, 511.0], [65.2, 512.0], [65.3, 515.0], [65.4, 516.0], [65.5, 518.0], [65.6, 521.0], [65.7, 523.0], [65.8, 526.0], [65.9, 528.0], [66.0, 529.0], [66.1, 530.0], [66.2, 531.0], [66.3, 534.0], [66.4, 536.0], [66.5, 538.0], [66.6, 542.0], [66.7, 545.0], [66.8, 547.0], [66.9, 550.0], [67.0, 553.0], [67.1, 555.0], [67.2, 558.0], [67.3, 561.0], [67.4, 563.0], [67.5, 565.0], [67.6, 567.0], [67.7, 568.0], [67.8, 571.0], [67.9, 572.0], [68.0, 574.0], [68.1, 575.0], [68.2, 578.0], [68.3, 579.0], [68.4, 581.0], [68.5, 584.0], [68.6, 584.0], [68.7, 586.0], [68.8, 587.0], [68.9, 587.0], [69.0, 590.0], [69.1, 591.0], [69.2, 592.0], [69.3, 593.0], [69.4, 594.0], [69.5, 595.0], [69.6, 595.0], [69.7, 596.0], [69.8, 596.0], [69.9, 597.0], [70.0, 599.0], [70.1, 600.0], [70.2, 600.0], [70.3, 602.0], [70.4, 602.0], [70.5, 603.0], [70.6, 604.0], [70.7, 605.0], [70.8, 605.0], [70.9, 606.0], [71.0, 607.0], [71.1, 610.0], [71.2, 610.0], [71.3, 611.0], [71.4, 613.0], [71.5, 613.0], [71.6, 614.0], [71.7, 615.0], [71.8, 616.0], [71.9, 616.0], [72.0, 617.0], [72.1, 618.0], [72.2, 619.0], [72.3, 620.0], [72.4, 622.0], [72.5, 623.0], [72.6, 623.0], [72.7, 625.0], [72.8, 626.0], [72.9, 628.0], [73.0, 629.0], [73.1, 629.0], [73.2, 630.0], [73.3, 631.0], [73.4, 631.0], [73.5, 632.0], [73.6, 633.0], [73.7, 634.0], [73.8, 636.0], [73.9, 637.0], [74.0, 637.0], [74.1, 638.0], [74.2, 638.0], [74.3, 641.0], [74.4, 642.0], [74.5, 643.0], [74.6, 643.0], [74.7, 645.0], [74.8, 646.0], [74.9, 647.0], [75.0, 648.0], [75.1, 649.0], [75.2, 650.0], [75.3, 651.0], [75.4, 653.0], [75.5, 654.0], [75.6, 655.0], [75.7, 657.0], [75.8, 658.0], [75.9, 659.0], [76.0, 660.0], [76.1, 661.0], [76.2, 662.0], [76.3, 663.0], [76.4, 664.0], [76.5, 666.0], [76.6, 666.0], [76.7, 668.0], [76.8, 670.0], [76.9, 672.0], [77.0, 674.0], [77.1, 675.0], [77.2, 677.0], [77.3, 678.0], [77.4, 680.0], [77.5, 681.0], [77.6, 683.0], [77.7, 684.0], [77.8, 686.0], [77.9, 688.0], [78.0, 689.0], [78.1, 692.0], [78.2, 693.0], [78.3, 694.0], [78.4, 696.0], [78.5, 697.0], [78.6, 699.0], [78.7, 700.0], [78.8, 701.0], [78.9, 703.0], [79.0, 707.0], [79.1, 709.0], [79.2, 712.0], [79.3, 714.0], [79.4, 716.0], [79.5, 718.0], [79.6, 722.0], [79.7, 723.0], [79.8, 728.0], [79.9, 730.0], [80.0, 732.0], [80.1, 735.0], [80.2, 737.0], [80.3, 738.0], [80.4, 741.0], [80.5, 744.0], [80.6, 745.0], [80.7, 749.0], [80.8, 753.0], [80.9, 757.0], [81.0, 762.0], [81.1, 766.0], [81.2, 770.0], [81.3, 776.0], [81.4, 778.0], [81.5, 784.0], [81.6, 792.0], [81.7, 797.0], [81.8, 801.0], [81.9, 804.0], [82.0, 807.0], [82.1, 814.0], [82.2, 817.0], [82.3, 821.0], [82.4, 824.0], [82.5, 827.0], [82.6, 829.0], [82.7, 836.0], [82.8, 839.0], [82.9, 842.0], [83.0, 847.0], [83.1, 848.0], [83.2, 852.0], [83.3, 856.0], [83.4, 861.0], [83.5, 867.0], [83.6, 869.0], [83.7, 874.0], [83.8, 875.0], [83.9, 881.0], [84.0, 884.0], [84.1, 887.0], [84.2, 889.0], [84.3, 892.0], [84.4, 895.0], [84.5, 899.0], [84.6, 901.0], [84.7, 903.0], [84.8, 905.0], [84.9, 906.0], [85.0, 908.0], [85.1, 910.0], [85.2, 912.0], [85.3, 915.0], [85.4, 917.0], [85.5, 920.0], [85.6, 922.0], [85.7, 924.0], [85.8, 925.0], [85.9, 926.0], [86.0, 929.0], [86.1, 930.0], [86.2, 932.0], [86.3, 934.0], [86.4, 935.0], [86.5, 938.0], [86.6, 941.0], [86.7, 944.0], [86.8, 945.0], [86.9, 949.0], [87.0, 951.0], [87.1, 952.0], [87.2, 955.0], [87.3, 959.0], [87.4, 962.0], [87.5, 966.0], [87.6, 969.0], [87.7, 971.0], [87.8, 974.0], [87.9, 978.0], [88.0, 983.0], [88.1, 987.0], [88.2, 990.0], [88.3, 992.0], [88.4, 995.0], [88.5, 1000.0], [88.6, 1005.0], [88.7, 1009.0], [88.8, 1012.0], [88.9, 1016.0], [89.0, 1020.0], [89.1, 1029.0], [89.2, 1035.0], [89.3, 1043.0], [89.4, 1047.0], [89.5, 1050.0], [89.6, 1064.0], [89.7, 1073.0], [89.8, 1085.0], [89.9, 1093.0], [90.0, 1102.0], [90.1, 1111.0], [90.2, 1127.0], [90.3, 1138.0], [90.4, 1145.0], [90.5, 1149.0], [90.6, 1157.0], [90.7, 1162.0], [90.8, 1167.0], [90.9, 1170.0], [91.0, 1181.0], [91.1, 1187.0], [91.2, 1189.0], [91.3, 1193.0], [91.4, 1197.0], [91.5, 1198.0], [91.6, 1204.0], [91.7, 1207.0], [91.8, 1211.0], [91.9, 1214.0], [92.0, 1218.0], [92.1, 1224.0], [92.2, 1229.0], [92.3, 1235.0], [92.4, 1238.0], [92.5, 1242.0], [92.6, 1245.0], [92.7, 1248.0], [92.8, 1256.0], [92.9, 1266.0], [93.0, 1271.0], [93.1, 1281.0], [93.2, 1288.0], [93.3, 1302.0], [93.4, 1320.0], [93.5, 1334.0], [93.6, 1343.0], [93.7, 1370.0], [93.8, 1387.0], [93.9, 1407.0], [94.0, 1426.0], [94.1, 1456.0], [94.2, 1505.0], [94.3, 1539.0], [94.4, 1608.0], [94.5, 1627.0], [94.6, 1640.0], [94.7, 1648.0], [94.8, 1703.0], [94.9, 1722.0], [95.0, 1752.0], [95.1, 1800.0], [95.2, 1881.0], [95.3, 1941.0], [95.4, 1982.0], [95.5, 2017.0], [95.6, 2063.0], [95.7, 2090.0], [95.8, 2145.0], [95.9, 2217.0], [96.0, 2251.0], [96.1, 2360.0], [96.2, 2447.0], [96.3, 2544.0], [96.4, 2639.0], [96.5, 2696.0], [96.6, 2829.0], [96.7, 2904.0], [96.8, 2924.0], [96.9, 2982.0], [97.0, 2996.0], [97.1, 3053.0], [97.2, 3107.0], [97.3, 3182.0], [97.4, 3248.0], [97.5, 3385.0], [97.6, 3488.0], [97.7, 3653.0], [97.8, 3846.0], [97.9, 3916.0], [98.0, 4005.0], [98.1, 4144.0], [98.2, 4204.0], [98.3, 4489.0], [98.4, 5178.0], [98.5, 5457.0], [98.6, 5866.0], [98.7, 6536.0], [98.8, 7270.0], [98.9, 7956.0], [99.0, 7995.0], [99.1, 8113.0], [99.2, 8245.0], [99.3, 8379.0], [99.4, 8714.0], [99.5, 10451.0], [99.6, 10651.0], [99.7, 10850.0], [99.8, 10967.0], [99.9, 11855.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 904.0, "series": [{"data": [[0.0, 904.0], [600.0, 445.0], [700.0, 163.0], [800.0, 143.0], [900.0, 206.0], [1000.0, 79.0], [1100.0, 81.0], [1200.0, 89.0], [1300.0, 31.0], [1400.0, 15.0], [1500.0, 12.0], [1600.0, 21.0], [1700.0, 15.0], [1800.0, 9.0], [1900.0, 12.0], [2000.0, 11.0], [2100.0, 8.0], [2300.0, 3.0], [2200.0, 10.0], [2400.0, 7.0], [2500.0, 3.0], [2600.0, 11.0], [2700.0, 2.0], [2800.0, 7.0], [2900.0, 17.0], [3000.0, 9.0], [3100.0, 7.0], [3200.0, 7.0], [3300.0, 3.0], [3400.0, 5.0], [3500.0, 1.0], [3600.0, 5.0], [3700.0, 3.0], [3800.0, 4.0], [3900.0, 6.0], [4000.0, 5.0], [4100.0, 6.0], [4300.0, 2.0], [4200.0, 2.0], [4400.0, 2.0], [4500.0, 1.0], [4800.0, 1.0], [5000.0, 2.0], [5100.0, 1.0], [5300.0, 4.0], [5400.0, 3.0], [5500.0, 3.0], [5800.0, 1.0], [6100.0, 1.0], [6200.0, 1.0], [6600.0, 1.0], [6400.0, 2.0], [6500.0, 1.0], [6800.0, 1.0], [6900.0, 1.0], [7000.0, 1.0], [7200.0, 1.0], [7400.0, 1.0], [7500.0, 1.0], [7800.0, 1.0], [7900.0, 8.0], [8100.0, 4.0], [8000.0, 3.0], [8300.0, 4.0], [8200.0, 4.0], [8700.0, 1.0], [8400.0, 2.0], [8500.0, 2.0], [9000.0, 1.0], [9400.0, 2.0], [10100.0, 1.0], [10600.0, 3.0], [10400.0, 2.0], [10500.0, 2.0], [10300.0, 1.0], [10700.0, 1.0], [10800.0, 4.0], [10900.0, 5.0], [11200.0, 1.0], [11000.0, 2.0], [11800.0, 1.0], [14300.0, 1.0], [16400.0, 1.0], [19000.0, 1.0], [20400.0, 1.0], [20600.0, 1.0], [100.0, 744.0], [200.0, 519.0], [300.0, 793.0], [400.0, 389.0], [500.0, 286.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 20600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 303.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3350.0, "series": [{"data": [[0.0, 3350.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1537.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 303.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.081632653061225, "minX": 1.60421994E12, "maxY": 10.0, "series": [{"data": [[1.60422024E12, 10.0], [1.60421994E12, 9.9981981981982], [1.60422012E12, 10.0], [1.6042203E12, 9.081632653061225], [1.60422E12, 10.0], [1.60422018E12, 10.0], [1.60422006E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042203E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 563.0, "minX": 1.0, "maxY": 7956.0, "series": [{"data": [[8.0, 770.0], [4.0, 842.0], [2.0, 7956.0], [1.0, 6536.0], [9.0, 714.5], [10.0, 634.2660231660224], [5.0, 597.0], [6.0, 1138.0], [3.0, 1193.0], [7.0, 563.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991136801541433, 637.0947976878624]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 388.1666666666667, "minX": 1.60421994E12, "maxY": 4754879.783333333, "series": [{"data": [[1.60422024E12, 3990918.2333333334], [1.60421994E12, 2086981.2666666666], [1.60422012E12, 4754879.783333333], [1.6042203E12, 259605.1], [1.60422E12, 3348306.783333333], [1.60422018E12, 4651314.616666666], [1.60422006E12, 4550437.883333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422024E12, 7701.233333333334], [1.60421994E12, 4184.616666666667], [1.60422012E12, 10476.216666666667], [1.6042203E12, 388.1666666666667], [1.60422E12, 4905.066666666667], [1.60422018E12, 5925.216666666666], [1.60422006E12, 6361.116666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042203E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 446.9217264081927, "minX": 1.60421994E12, "maxY": 972.4884437596304, "series": [{"data": [[1.60422024E12, 636.9244897959182], [1.60421994E12, 453.5765765765768], [1.60422012E12, 446.9217264081927], [1.6042203E12, 677.0], [1.60422E12, 972.4884437596304], [1.60422018E12, 729.2706185567006], [1.60422006E12, 724.111793611794]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042203E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 445.70373079736606, "minX": 1.60421994E12, "maxY": 970.323574730354, "series": [{"data": [[1.60422024E12, 635.6632653061224], [1.60421994E12, 451.8324324324322], [1.60422012E12, 445.70373079736606], [1.6042203E12, 675.4081632653061], [1.60422E12, 970.323574730354], [1.60422018E12, 727.4329896907223], [1.60422006E12, 721.7850122850132]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042203E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011597938144329899, "minX": 1.60421994E12, "maxY": 0.18198198198198187, "series": [{"data": [[1.60422024E12, 0.014285714285714296], [1.60421994E12, 0.18198198198198187], [1.60422012E12, 0.012435991221653255], [1.6042203E12, 0.04081632653061224], [1.60422E12, 0.020030816640986108], [1.60422018E12, 0.011597938144329899], [1.60422006E12, 0.018427518427518455]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042203E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.60421994E12, "maxY": 20697.0, "series": [{"data": [[1.60422024E12, 20697.0], [1.60421994E12, 10945.0], [1.60422012E12, 9016.0], [1.6042203E12, 7956.0], [1.60422E12, 19075.0], [1.60422018E12, 8100.0], [1.60422006E12, 20415.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422024E12, 31.828999766111373], [1.60421994E12, 39.00399986743927], [1.60422012E12, 31.311999673843385], [1.6042203E12, 32.0], [1.60422E12, 31.399999380111694], [1.60422018E12, 30.992999814748764], [1.60422006E12, 32.33499980568886]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422024E12, 32.0], [1.60421994E12, 39.50440005302429], [1.60422012E12, 32.0], [1.6042203E12, 32.0], [1.60422E12, 32.0], [1.60422018E12, 31.0], [1.60422006E12, 33.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422024E12, 32.0], [1.60421994E12, 39.28199993371963], [1.60422012E12, 31.99599983692169], [1.6042203E12, 32.0], [1.60422E12, 32.0], [1.60422018E12, 31.0], [1.60422006E12, 32.74249990284443]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422024E12, 21.0], [1.60421994E12, 35.0], [1.60422012E12, 24.0], [1.6042203E12, 32.0], [1.60422E12, 24.0], [1.60422018E12, 22.0], [1.60422006E12, 20.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422024E12, 336.0], [1.60421994E12, 292.0], [1.60422012E12, 277.0], [1.6042203E12, 341.0], [1.60422E12, 422.0], [1.60422018E12, 510.0], [1.60422006E12, 449.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042203E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 99.5, "minX": 1.0, "maxY": 2336.5, "series": [{"data": [[33.0, 264.5], [2.0, 2336.5], [32.0, 235.0], [34.0, 165.5], [36.0, 241.0], [39.0, 114.0], [38.0, 146.5], [41.0, 110.0], [43.0, 183.0], [42.0, 230.0], [44.0, 124.0], [3.0, 1158.0], [51.0, 104.0], [56.0, 99.5], [58.0, 117.0], [4.0, 782.0], [5.0, 721.5], [6.0, 339.0], [7.0, 486.0], [8.0, 655.5], [9.0, 420.0], [10.0, 649.5], [11.0, 679.0], [12.0, 653.0], [13.0, 621.5], [14.0, 632.5], [15.0, 464.0], [16.0, 545.5], [1.0, 1466.0], [17.0, 384.0], [18.0, 374.0], [19.0, 436.0], [20.0, 379.0], [21.0, 410.5], [22.0, 325.5], [23.0, 391.5], [24.0, 281.0], [25.0, 307.0], [26.0, 310.5], [27.0, 210.0], [28.0, 340.0], [29.0, 305.0], [30.0, 147.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 98.5, "minX": 1.0, "maxY": 2334.5, "series": [{"data": [[33.0, 264.5], [2.0, 2334.5], [32.0, 234.5], [34.0, 165.5], [36.0, 239.0], [39.0, 114.0], [38.0, 145.5], [41.0, 109.5], [43.0, 183.0], [42.0, 228.5], [44.0, 123.0], [3.0, 1155.5], [51.0, 103.0], [56.0, 98.5], [58.0, 116.5], [4.0, 780.5], [5.0, 719.5], [6.0, 337.0], [7.0, 484.0], [8.0, 653.0], [9.0, 419.0], [10.0, 646.5], [11.0, 673.5], [12.0, 650.0], [13.0, 618.0], [14.0, 629.5], [15.0, 463.0], [16.0, 543.0], [1.0, 1465.0], [17.0, 383.0], [18.0, 370.5], [19.0, 433.0], [20.0, 378.5], [21.0, 409.0], [22.0, 324.5], [23.0, 390.5], [24.0, 279.5], [25.0, 303.5], [26.0, 307.0], [27.0, 210.0], [28.0, 338.5], [29.0, 304.5], [30.0, 147.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.65, "minX": 1.60421994E12, "maxY": 22.783333333333335, "series": [{"data": [[1.60422024E12, 16.333333333333332], [1.60421994E12, 9.416666666666666], [1.60422012E12, 22.783333333333335], [1.6042203E12, 0.65], [1.60422E12, 10.816666666666666], [1.60422018E12, 12.933333333333334], [1.60422006E12, 13.566666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042203E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.60421994E12, "maxY": 22.783333333333335, "series": [{"data": [[1.60422024E12, 16.333333333333332], [1.60421994E12, 9.25], [1.60422012E12, 22.783333333333335], [1.6042203E12, 0.8166666666666667], [1.60422E12, 10.816666666666666], [1.60422018E12, 12.933333333333334], [1.60422006E12, 13.566666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042203E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.60421994E12, "maxY": 22.783333333333335, "series": [{"data": [[1.60422024E12, 16.333333333333332], [1.60421994E12, 9.25], [1.60422012E12, 22.783333333333335], [1.6042203E12, 0.8166666666666667], [1.60422E12, 10.816666666666666], [1.60422018E12, 12.933333333333334], [1.60422006E12, 13.566666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042203E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.60421994E12, "maxY": 22.783333333333335, "series": [{"data": [[1.60422024E12, 16.333333333333332], [1.60421994E12, 9.25], [1.60422012E12, 22.783333333333335], [1.6042203E12, 0.8166666666666667], [1.60422E12, 10.816666666666666], [1.60422018E12, 12.933333333333334], [1.60422006E12, 13.566666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042203E12, "title": "Total Transactions Per Second"}},
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

