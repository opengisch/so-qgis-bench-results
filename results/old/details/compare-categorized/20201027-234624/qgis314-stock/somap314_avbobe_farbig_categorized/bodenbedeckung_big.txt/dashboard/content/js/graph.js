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
        data: {"result": {"minY": 19.0, "minX": 0.0, "maxY": 21127.0, "series": [{"data": [[0.0, 19.0], [0.1, 27.0], [0.2, 29.0], [0.3, 30.0], [0.4, 31.0], [0.5, 32.0], [0.6, 33.0], [0.7, 33.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 36.0], [1.5, 36.0], [1.6, 36.0], [1.7, 37.0], [1.8, 37.0], [1.9, 37.0], [2.0, 38.0], [2.1, 38.0], [2.2, 38.0], [2.3, 39.0], [2.4, 39.0], [2.5, 39.0], [2.6, 39.0], [2.7, 39.0], [2.8, 40.0], [2.9, 40.0], [3.0, 40.0], [3.1, 40.0], [3.2, 41.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 42.0], [3.7, 42.0], [3.8, 43.0], [3.9, 43.0], [4.0, 43.0], [4.1, 43.0], [4.2, 44.0], [4.3, 44.0], [4.4, 44.0], [4.5, 45.0], [4.6, 45.0], [4.7, 46.0], [4.8, 46.0], [4.9, 46.0], [5.0, 46.0], [5.1, 47.0], [5.2, 47.0], [5.3, 47.0], [5.4, 48.0], [5.5, 48.0], [5.6, 49.0], [5.7, 49.0], [5.8, 49.0], [5.9, 50.0], [6.0, 50.0], [6.1, 50.0], [6.2, 51.0], [6.3, 51.0], [6.4, 51.0], [6.5, 51.0], [6.6, 52.0], [6.7, 52.0], [6.8, 52.0], [6.9, 53.0], [7.0, 53.0], [7.1, 53.0], [7.2, 53.0], [7.3, 53.0], [7.4, 54.0], [7.5, 54.0], [7.6, 54.0], [7.7, 54.0], [7.8, 55.0], [7.9, 55.0], [8.0, 55.0], [8.1, 56.0], [8.2, 56.0], [8.3, 57.0], [8.4, 57.0], [8.5, 57.0], [8.6, 58.0], [8.7, 59.0], [8.8, 59.0], [8.9, 59.0], [9.0, 60.0], [9.1, 60.0], [9.2, 61.0], [9.3, 61.0], [9.4, 62.0], [9.5, 63.0], [9.6, 63.0], [9.7, 63.0], [9.8, 64.0], [9.9, 64.0], [10.0, 65.0], [10.1, 66.0], [10.2, 66.0], [10.3, 67.0], [10.4, 67.0], [10.5, 67.0], [10.6, 68.0], [10.7, 68.0], [10.8, 68.0], [10.9, 68.0], [11.0, 68.0], [11.1, 69.0], [11.2, 70.0], [11.3, 70.0], [11.4, 71.0], [11.5, 71.0], [11.6, 72.0], [11.7, 72.0], [11.8, 73.0], [11.9, 73.0], [12.0, 73.0], [12.1, 73.0], [12.2, 74.0], [12.3, 74.0], [12.4, 74.0], [12.5, 75.0], [12.6, 75.0], [12.7, 76.0], [12.8, 77.0], [12.9, 77.0], [13.0, 77.0], [13.1, 78.0], [13.2, 78.0], [13.3, 78.0], [13.4, 79.0], [13.5, 79.0], [13.6, 79.0], [13.7, 80.0], [13.8, 81.0], [13.9, 81.0], [14.0, 81.0], [14.1, 82.0], [14.2, 82.0], [14.3, 83.0], [14.4, 84.0], [14.5, 84.0], [14.6, 85.0], [14.7, 85.0], [14.8, 86.0], [14.9, 87.0], [15.0, 87.0], [15.1, 88.0], [15.2, 88.0], [15.3, 88.0], [15.4, 88.0], [15.5, 90.0], [15.6, 90.0], [15.7, 91.0], [15.8, 92.0], [15.9, 92.0], [16.0, 93.0], [16.1, 94.0], [16.2, 94.0], [16.3, 94.0], [16.4, 95.0], [16.5, 96.0], [16.6, 96.0], [16.7, 97.0], [16.8, 97.0], [16.9, 98.0], [17.0, 99.0], [17.1, 99.0], [17.2, 99.0], [17.3, 100.0], [17.4, 101.0], [17.5, 101.0], [17.6, 101.0], [17.7, 102.0], [17.8, 102.0], [17.9, 103.0], [18.0, 103.0], [18.1, 104.0], [18.2, 104.0], [18.3, 105.0], [18.4, 105.0], [18.5, 106.0], [18.6, 107.0], [18.7, 108.0], [18.8, 108.0], [18.9, 109.0], [19.0, 109.0], [19.1, 110.0], [19.2, 110.0], [19.3, 111.0], [19.4, 111.0], [19.5, 112.0], [19.6, 112.0], [19.7, 113.0], [19.8, 113.0], [19.9, 115.0], [20.0, 115.0], [20.1, 116.0], [20.2, 117.0], [20.3, 117.0], [20.4, 117.0], [20.5, 117.0], [20.6, 118.0], [20.7, 119.0], [20.8, 119.0], [20.9, 120.0], [21.0, 121.0], [21.1, 122.0], [21.2, 122.0], [21.3, 123.0], [21.4, 123.0], [21.5, 124.0], [21.6, 125.0], [21.7, 125.0], [21.8, 125.0], [21.9, 126.0], [22.0, 127.0], [22.1, 127.0], [22.2, 128.0], [22.3, 128.0], [22.4, 129.0], [22.5, 130.0], [22.6, 130.0], [22.7, 131.0], [22.8, 132.0], [22.9, 133.0], [23.0, 134.0], [23.1, 135.0], [23.2, 136.0], [23.3, 137.0], [23.4, 138.0], [23.5, 139.0], [23.6, 139.0], [23.7, 140.0], [23.8, 140.0], [23.9, 140.0], [24.0, 141.0], [24.1, 142.0], [24.2, 142.0], [24.3, 143.0], [24.4, 144.0], [24.5, 144.0], [24.6, 145.0], [24.7, 145.0], [24.8, 146.0], [24.9, 147.0], [25.0, 148.0], [25.1, 148.0], [25.2, 148.0], [25.3, 149.0], [25.4, 150.0], [25.5, 150.0], [25.6, 151.0], [25.7, 151.0], [25.8, 152.0], [25.9, 152.0], [26.0, 153.0], [26.1, 153.0], [26.2, 154.0], [26.3, 155.0], [26.4, 156.0], [26.5, 157.0], [26.6, 158.0], [26.7, 158.0], [26.8, 159.0], [26.9, 160.0], [27.0, 160.0], [27.1, 161.0], [27.2, 162.0], [27.3, 163.0], [27.4, 163.0], [27.5, 164.0], [27.6, 165.0], [27.7, 165.0], [27.8, 166.0], [27.9, 167.0], [28.0, 168.0], [28.1, 168.0], [28.2, 170.0], [28.3, 171.0], [28.4, 172.0], [28.5, 172.0], [28.6, 173.0], [28.7, 174.0], [28.8, 175.0], [28.9, 176.0], [29.0, 176.0], [29.1, 177.0], [29.2, 177.0], [29.3, 178.0], [29.4, 179.0], [29.5, 180.0], [29.6, 181.0], [29.7, 182.0], [29.8, 184.0], [29.9, 184.0], [30.0, 186.0], [30.1, 187.0], [30.2, 188.0], [30.3, 189.0], [30.4, 190.0], [30.5, 190.0], [30.6, 191.0], [30.7, 191.0], [30.8, 191.0], [30.9, 192.0], [31.0, 193.0], [31.1, 194.0], [31.2, 196.0], [31.3, 197.0], [31.4, 198.0], [31.5, 199.0], [31.6, 200.0], [31.7, 200.0], [31.8, 201.0], [31.9, 202.0], [32.0, 203.0], [32.1, 204.0], [32.2, 206.0], [32.3, 207.0], [32.4, 207.0], [32.5, 208.0], [32.6, 208.0], [32.7, 209.0], [32.8, 210.0], [32.9, 210.0], [33.0, 212.0], [33.1, 212.0], [33.2, 214.0], [33.3, 215.0], [33.4, 216.0], [33.5, 217.0], [33.6, 218.0], [33.7, 219.0], [33.8, 220.0], [33.9, 221.0], [34.0, 223.0], [34.1, 223.0], [34.2, 224.0], [34.3, 226.0], [34.4, 226.0], [34.5, 227.0], [34.6, 228.0], [34.7, 229.0], [34.8, 230.0], [34.9, 231.0], [35.0, 232.0], [35.1, 233.0], [35.2, 234.0], [35.3, 235.0], [35.4, 236.0], [35.5, 236.0], [35.6, 237.0], [35.7, 239.0], [35.8, 240.0], [35.9, 242.0], [36.0, 242.0], [36.1, 243.0], [36.2, 243.0], [36.3, 244.0], [36.4, 246.0], [36.5, 247.0], [36.6, 248.0], [36.7, 249.0], [36.8, 250.0], [36.9, 251.0], [37.0, 252.0], [37.1, 253.0], [37.2, 254.0], [37.3, 254.0], [37.4, 257.0], [37.5, 259.0], [37.6, 260.0], [37.7, 261.0], [37.8, 263.0], [37.9, 264.0], [38.0, 265.0], [38.1, 266.0], [38.2, 267.0], [38.3, 268.0], [38.4, 270.0], [38.5, 272.0], [38.6, 273.0], [38.7, 275.0], [38.8, 276.0], [38.9, 277.0], [39.0, 279.0], [39.1, 279.0], [39.2, 280.0], [39.3, 281.0], [39.4, 282.0], [39.5, 283.0], [39.6, 284.0], [39.7, 285.0], [39.8, 286.0], [39.9, 287.0], [40.0, 288.0], [40.1, 289.0], [40.2, 290.0], [40.3, 290.0], [40.4, 290.0], [40.5, 291.0], [40.6, 293.0], [40.7, 294.0], [40.8, 295.0], [40.9, 296.0], [41.0, 297.0], [41.1, 297.0], [41.2, 298.0], [41.3, 298.0], [41.4, 299.0], [41.5, 300.0], [41.6, 301.0], [41.7, 302.0], [41.8, 302.0], [41.9, 303.0], [42.0, 304.0], [42.1, 305.0], [42.2, 305.0], [42.3, 307.0], [42.4, 307.0], [42.5, 308.0], [42.6, 309.0], [42.7, 310.0], [42.8, 312.0], [42.9, 312.0], [43.0, 313.0], [43.1, 314.0], [43.2, 315.0], [43.3, 316.0], [43.4, 317.0], [43.5, 318.0], [43.6, 318.0], [43.7, 319.0], [43.8, 319.0], [43.9, 319.0], [44.0, 320.0], [44.1, 320.0], [44.2, 320.0], [44.3, 321.0], [44.4, 322.0], [44.5, 322.0], [44.6, 323.0], [44.7, 324.0], [44.8, 324.0], [44.9, 325.0], [45.0, 326.0], [45.1, 326.0], [45.2, 327.0], [45.3, 328.0], [45.4, 329.0], [45.5, 329.0], [45.6, 329.0], [45.7, 330.0], [45.8, 330.0], [45.9, 331.0], [46.0, 332.0], [46.1, 332.0], [46.2, 333.0], [46.3, 333.0], [46.4, 334.0], [46.5, 335.0], [46.6, 335.0], [46.7, 336.0], [46.8, 337.0], [46.9, 337.0], [47.0, 338.0], [47.1, 339.0], [47.2, 340.0], [47.3, 340.0], [47.4, 341.0], [47.5, 341.0], [47.6, 342.0], [47.7, 342.0], [47.8, 343.0], [47.9, 344.0], [48.0, 344.0], [48.1, 345.0], [48.2, 345.0], [48.3, 346.0], [48.4, 346.0], [48.5, 347.0], [48.6, 347.0], [48.7, 348.0], [48.8, 348.0], [48.9, 349.0], [49.0, 350.0], [49.1, 350.0], [49.2, 351.0], [49.3, 351.0], [49.4, 352.0], [49.5, 353.0], [49.6, 353.0], [49.7, 353.0], [49.8, 354.0], [49.9, 355.0], [50.0, 355.0], [50.1, 356.0], [50.2, 357.0], [50.3, 357.0], [50.4, 358.0], [50.5, 358.0], [50.6, 359.0], [50.7, 360.0], [50.8, 360.0], [50.9, 361.0], [51.0, 361.0], [51.1, 362.0], [51.2, 363.0], [51.3, 364.0], [51.4, 364.0], [51.5, 365.0], [51.6, 366.0], [51.7, 366.0], [51.8, 367.0], [51.9, 367.0], [52.0, 368.0], [52.1, 368.0], [52.2, 368.0], [52.3, 369.0], [52.4, 370.0], [52.5, 370.0], [52.6, 371.0], [52.7, 372.0], [52.8, 372.0], [52.9, 373.0], [53.0, 374.0], [53.1, 374.0], [53.2, 375.0], [53.3, 376.0], [53.4, 377.0], [53.5, 378.0], [53.6, 379.0], [53.7, 379.0], [53.8, 380.0], [53.9, 381.0], [54.0, 382.0], [54.1, 382.0], [54.2, 382.0], [54.3, 384.0], [54.4, 385.0], [54.5, 387.0], [54.6, 387.0], [54.7, 388.0], [54.8, 389.0], [54.9, 391.0], [55.0, 391.0], [55.1, 392.0], [55.2, 394.0], [55.3, 396.0], [55.4, 396.0], [55.5, 397.0], [55.6, 398.0], [55.7, 399.0], [55.8, 399.0], [55.9, 400.0], [56.0, 402.0], [56.1, 404.0], [56.2, 405.0], [56.3, 407.0], [56.4, 408.0], [56.5, 409.0], [56.6, 410.0], [56.7, 411.0], [56.8, 412.0], [56.9, 412.0], [57.0, 414.0], [57.1, 415.0], [57.2, 415.0], [57.3, 416.0], [57.4, 417.0], [57.5, 418.0], [57.6, 419.0], [57.7, 420.0], [57.8, 421.0], [57.9, 422.0], [58.0, 423.0], [58.1, 424.0], [58.2, 425.0], [58.3, 426.0], [58.4, 427.0], [58.5, 428.0], [58.6, 429.0], [58.7, 429.0], [58.8, 431.0], [58.9, 432.0], [59.0, 433.0], [59.1, 434.0], [59.2, 435.0], [59.3, 436.0], [59.4, 436.0], [59.5, 437.0], [59.6, 439.0], [59.7, 442.0], [59.8, 442.0], [59.9, 444.0], [60.0, 446.0], [60.1, 448.0], [60.2, 448.0], [60.3, 449.0], [60.4, 451.0], [60.5, 453.0], [60.6, 454.0], [60.7, 455.0], [60.8, 456.0], [60.9, 457.0], [61.0, 457.0], [61.1, 459.0], [61.2, 459.0], [61.3, 460.0], [61.4, 461.0], [61.5, 464.0], [61.6, 465.0], [61.7, 466.0], [61.8, 470.0], [61.9, 470.0], [62.0, 472.0], [62.1, 473.0], [62.2, 475.0], [62.3, 476.0], [62.4, 477.0], [62.5, 480.0], [62.6, 482.0], [62.7, 485.0], [62.8, 486.0], [62.9, 487.0], [63.0, 488.0], [63.1, 489.0], [63.2, 491.0], [63.3, 493.0], [63.4, 495.0], [63.5, 495.0], [63.6, 498.0], [63.7, 501.0], [63.8, 503.0], [63.9, 504.0], [64.0, 506.0], [64.1, 507.0], [64.2, 508.0], [64.3, 510.0], [64.4, 512.0], [64.5, 513.0], [64.6, 515.0], [64.7, 517.0], [64.8, 520.0], [64.9, 522.0], [65.0, 524.0], [65.1, 525.0], [65.2, 527.0], [65.3, 529.0], [65.4, 530.0], [65.5, 531.0], [65.6, 532.0], [65.7, 534.0], [65.8, 535.0], [65.9, 537.0], [66.0, 539.0], [66.1, 540.0], [66.2, 542.0], [66.3, 544.0], [66.4, 546.0], [66.5, 548.0], [66.6, 549.0], [66.7, 550.0], [66.8, 552.0], [66.9, 553.0], [67.0, 556.0], [67.1, 558.0], [67.2, 559.0], [67.3, 561.0], [67.4, 565.0], [67.5, 566.0], [67.6, 568.0], [67.7, 569.0], [67.8, 571.0], [67.9, 572.0], [68.0, 574.0], [68.1, 575.0], [68.2, 577.0], [68.3, 577.0], [68.4, 579.0], [68.5, 581.0], [68.6, 584.0], [68.7, 584.0], [68.8, 586.0], [68.9, 587.0], [69.0, 588.0], [69.1, 589.0], [69.2, 590.0], [69.3, 591.0], [69.4, 592.0], [69.5, 593.0], [69.6, 594.0], [69.7, 594.0], [69.8, 595.0], [69.9, 598.0], [70.0, 599.0], [70.1, 600.0], [70.2, 602.0], [70.3, 602.0], [70.4, 604.0], [70.5, 605.0], [70.6, 606.0], [70.7, 607.0], [70.8, 608.0], [70.9, 609.0], [71.0, 610.0], [71.1, 611.0], [71.2, 612.0], [71.3, 613.0], [71.4, 614.0], [71.5, 615.0], [71.6, 616.0], [71.7, 617.0], [71.8, 618.0], [71.9, 619.0], [72.0, 620.0], [72.1, 621.0], [72.2, 623.0], [72.3, 624.0], [72.4, 625.0], [72.5, 626.0], [72.6, 627.0], [72.7, 628.0], [72.8, 629.0], [72.9, 630.0], [73.0, 630.0], [73.1, 631.0], [73.2, 632.0], [73.3, 633.0], [73.4, 633.0], [73.5, 634.0], [73.6, 635.0], [73.7, 636.0], [73.8, 637.0], [73.9, 637.0], [74.0, 638.0], [74.1, 639.0], [74.2, 640.0], [74.3, 641.0], [74.4, 642.0], [74.5, 643.0], [74.6, 643.0], [74.7, 644.0], [74.8, 646.0], [74.9, 647.0], [75.0, 648.0], [75.1, 649.0], [75.2, 650.0], [75.3, 651.0], [75.4, 652.0], [75.5, 653.0], [75.6, 655.0], [75.7, 655.0], [75.8, 657.0], [75.9, 659.0], [76.0, 659.0], [76.1, 661.0], [76.2, 662.0], [76.3, 662.0], [76.4, 663.0], [76.5, 665.0], [76.6, 666.0], [76.7, 668.0], [76.8, 668.0], [76.9, 670.0], [77.0, 671.0], [77.1, 673.0], [77.2, 675.0], [77.3, 676.0], [77.4, 677.0], [77.5, 678.0], [77.6, 681.0], [77.7, 682.0], [77.8, 683.0], [77.9, 684.0], [78.0, 685.0], [78.1, 688.0], [78.2, 690.0], [78.3, 691.0], [78.4, 692.0], [78.5, 694.0], [78.6, 697.0], [78.7, 698.0], [78.8, 700.0], [78.9, 702.0], [79.0, 705.0], [79.1, 706.0], [79.2, 708.0], [79.3, 709.0], [79.4, 711.0], [79.5, 715.0], [79.6, 717.0], [79.7, 718.0], [79.8, 722.0], [79.9, 725.0], [80.0, 729.0], [80.1, 735.0], [80.2, 736.0], [80.3, 738.0], [80.4, 741.0], [80.5, 744.0], [80.6, 749.0], [80.7, 753.0], [80.8, 755.0], [80.9, 757.0], [81.0, 759.0], [81.1, 762.0], [81.2, 765.0], [81.3, 771.0], [81.4, 775.0], [81.5, 775.0], [81.6, 782.0], [81.7, 784.0], [81.8, 787.0], [81.9, 791.0], [82.0, 793.0], [82.1, 798.0], [82.2, 801.0], [82.3, 804.0], [82.4, 806.0], [82.5, 808.0], [82.6, 812.0], [82.7, 817.0], [82.8, 821.0], [82.9, 823.0], [83.0, 825.0], [83.1, 828.0], [83.2, 831.0], [83.3, 833.0], [83.4, 837.0], [83.5, 845.0], [83.6, 847.0], [83.7, 856.0], [83.8, 863.0], [83.9, 870.0], [84.0, 873.0], [84.1, 879.0], [84.2, 881.0], [84.3, 885.0], [84.4, 888.0], [84.5, 891.0], [84.6, 895.0], [84.7, 898.0], [84.8, 900.0], [84.9, 901.0], [85.0, 903.0], [85.1, 906.0], [85.2, 908.0], [85.3, 910.0], [85.4, 912.0], [85.5, 914.0], [85.6, 917.0], [85.7, 919.0], [85.8, 921.0], [85.9, 923.0], [86.0, 925.0], [86.1, 927.0], [86.2, 929.0], [86.3, 930.0], [86.4, 932.0], [86.5, 933.0], [86.6, 938.0], [86.7, 939.0], [86.8, 942.0], [86.9, 945.0], [87.0, 949.0], [87.1, 952.0], [87.2, 956.0], [87.3, 958.0], [87.4, 960.0], [87.5, 965.0], [87.6, 968.0], [87.7, 969.0], [87.8, 970.0], [87.9, 977.0], [88.0, 979.0], [88.1, 983.0], [88.2, 986.0], [88.3, 989.0], [88.4, 993.0], [88.5, 997.0], [88.6, 1003.0], [88.7, 1007.0], [88.8, 1009.0], [88.9, 1018.0], [89.0, 1021.0], [89.1, 1025.0], [89.2, 1033.0], [89.3, 1046.0], [89.4, 1048.0], [89.5, 1061.0], [89.6, 1070.0], [89.7, 1088.0], [89.8, 1093.0], [89.9, 1096.0], [90.0, 1105.0], [90.1, 1115.0], [90.2, 1123.0], [90.3, 1132.0], [90.4, 1138.0], [90.5, 1147.0], [90.6, 1153.0], [90.7, 1160.0], [90.8, 1163.0], [90.9, 1168.0], [91.0, 1173.0], [91.1, 1183.0], [91.2, 1185.0], [91.3, 1188.0], [91.4, 1193.0], [91.5, 1198.0], [91.6, 1202.0], [91.7, 1207.0], [91.8, 1209.0], [91.9, 1213.0], [92.0, 1218.0], [92.1, 1221.0], [92.2, 1223.0], [92.3, 1229.0], [92.4, 1232.0], [92.5, 1236.0], [92.6, 1239.0], [92.7, 1243.0], [92.8, 1250.0], [92.9, 1255.0], [93.0, 1260.0], [93.1, 1266.0], [93.2, 1272.0], [93.3, 1283.0], [93.4, 1290.0], [93.5, 1305.0], [93.6, 1315.0], [93.7, 1329.0], [93.8, 1354.0], [93.9, 1380.0], [94.0, 1394.0], [94.1, 1415.0], [94.2, 1435.0], [94.3, 1487.0], [94.4, 1517.0], [94.5, 1551.0], [94.6, 1577.0], [94.7, 1609.0], [94.8, 1674.0], [94.9, 1710.0], [95.0, 1749.0], [95.1, 1812.0], [95.2, 1855.0], [95.3, 1943.0], [95.4, 1984.0], [95.5, 2053.0], [95.6, 2093.0], [95.7, 2172.0], [95.8, 2372.0], [95.9, 2392.0], [96.0, 2519.0], [96.1, 2579.0], [96.2, 2626.0], [96.3, 2689.0], [96.4, 2749.0], [96.5, 2790.0], [96.6, 2826.0], [96.7, 2865.0], [96.8, 2903.0], [96.9, 3017.0], [97.0, 3059.0], [97.1, 3103.0], [97.2, 3153.0], [97.3, 3231.0], [97.4, 3400.0], [97.5, 3518.0], [97.6, 3662.0], [97.7, 3743.0], [97.8, 3831.0], [97.9, 3945.0], [98.0, 3966.0], [98.1, 4120.0], [98.2, 4223.0], [98.3, 4664.0], [98.4, 5198.0], [98.5, 5462.0], [98.6, 5563.0], [98.7, 5965.0], [98.8, 7034.0], [98.9, 7892.0], [99.0, 8028.0], [99.1, 8212.0], [99.2, 8351.0], [99.3, 8666.0], [99.4, 9387.0], [99.5, 10459.0], [99.6, 10689.0], [99.7, 10851.0], [99.8, 11099.0], [99.9, 11652.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 894.0, "series": [{"data": [[0.0, 894.0], [600.0, 453.0], [700.0, 173.0], [800.0, 138.0], [900.0, 194.0], [1000.0, 74.0], [1100.0, 84.0], [1200.0, 100.0], [1300.0, 29.0], [1400.0, 15.0], [1500.0, 18.0], [1600.0, 11.0], [1700.0, 9.0], [1800.0, 10.0], [1900.0, 8.0], [2000.0, 10.0], [2100.0, 7.0], [2300.0, 6.0], [2200.0, 3.0], [2400.0, 3.0], [2500.0, 8.0], [2600.0, 9.0], [2700.0, 11.0], [2800.0, 14.0], [2900.0, 6.0], [3000.0, 10.0], [3100.0, 9.0], [3200.0, 4.0], [3300.0, 3.0], [3400.0, 5.0], [3500.0, 3.0], [3700.0, 6.0], [3600.0, 5.0], [3800.0, 4.0], [3900.0, 10.0], [4000.0, 3.0], [4200.0, 2.0], [4100.0, 5.0], [4400.0, 1.0], [4600.0, 3.0], [4700.0, 1.0], [5000.0, 2.0], [5100.0, 2.0], [5300.0, 4.0], [5200.0, 1.0], [5500.0, 4.0], [5400.0, 3.0], [5800.0, 1.0], [5700.0, 1.0], [5900.0, 2.0], [6600.0, 2.0], [6500.0, 1.0], [6800.0, 1.0], [7000.0, 1.0], [7800.0, 3.0], [7900.0, 4.0], [7700.0, 2.0], [8000.0, 5.0], [8100.0, 1.0], [8200.0, 5.0], [8300.0, 3.0], [8700.0, 2.0], [8600.0, 1.0], [8400.0, 2.0], [9000.0, 1.0], [8900.0, 1.0], [9300.0, 1.0], [9400.0, 1.0], [9500.0, 1.0], [10600.0, 4.0], [10400.0, 3.0], [10700.0, 3.0], [10300.0, 1.0], [10500.0, 2.0], [11200.0, 2.0], [11000.0, 2.0], [10900.0, 1.0], [10800.0, 3.0], [11100.0, 1.0], [11600.0, 1.0], [11300.0, 1.0], [15800.0, 1.0], [19100.0, 1.0], [20900.0, 2.0], [21100.0, 1.0], [100.0, 743.0], [200.0, 514.0], [300.0, 746.0], [400.0, 406.0], [500.0, 333.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 294.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3305.0, "series": [{"data": [[0.0, 3305.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1591.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 294.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.935344827586205, "minX": 1.60384302E12, "maxY": 10.0, "series": [{"data": [[1.60384332E12, 9.935344827586205], [1.60384308E12, 10.0], [1.60384314E12, 10.0], [1.60384326E12, 10.0], [1.60384302E12, 9.998778998778993], [1.6038432E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384332E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 456.0, "minX": 1.0, "maxY": 7715.0, "series": [{"data": [[8.0, 754.0], [4.0, 757.0], [2.0, 7715.0], [1.0, 5737.0], [9.0, 537.5], [10.0, 639.6164092664112], [5.0, 575.0], [6.0, 456.0], [3.0, 805.0], [7.0, 517.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991136801541433, 641.9275529865112]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5393.45, "minX": 1.60384302E12, "maxY": 5165935.5, "series": [{"data": [[1.60384332E12, 2736438.5166666666], [1.60384308E12, 4798007.85], [1.60384314E12, 4339880.633333334], [1.60384326E12, 5165935.5], [1.60384302E12, 2908847.1333333333], [1.6038432E12, 3692728.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384332E12, 5466.133333333333], [1.60384308E12, 5393.45], [1.60384314E12, 8070.266666666666], [1.60384326E12, 6431.416666666667], [1.60384302E12, 6193.8], [1.6038432E12, 8386.566666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384332E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 554.5373537353732, "minX": 1.60384302E12, "maxY": 855.6643159379405, "series": [{"data": [[1.60384332E12, 644.1795977011489], [1.60384308E12, 855.6643159379405], [1.60384314E12, 569.5877192982454], [1.60384326E12, 651.2714113389635], [1.60384302E12, 654.6971916971909], [1.6038432E12, 554.5373537353732]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384332E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 553.4401440144011, "minX": 1.60384302E12, "maxY": 852.6488011283498, "series": [{"data": [[1.60384332E12, 642.9885057471264], [1.60384308E12, 852.6488011283498], [1.60384314E12, 568.1491228070173], [1.60384326E12, 649.3437876960201], [1.60384302E12, 653.1440781440779], [1.6038432E12, 553.4401440144011]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384332E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010856453558504217, "minX": 1.60384302E12, "maxY": 0.20390720390720374, "series": [{"data": [[1.60384332E12, 0.017241379310344827], [1.60384308E12, 0.019746121297602247], [1.60384314E12, 0.012670565302144271], [1.60384326E12, 0.010856453558504217], [1.60384302E12, 0.20390720390720374], [1.6038432E12, 0.012601260126012604]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384332E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 19.0, "minX": 1.60384302E12, "maxY": 21127.0, "series": [{"data": [[1.60384332E12, 21127.0], [1.60384308E12, 10692.0], [1.60384314E12, 20971.0], [1.60384326E12, 9056.0], [1.60384302E12, 19150.0], [1.6038432E12, 15812.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384332E12, 33.0], [1.60384308E12, 32.0], [1.60384314E12, 32.24299975514412], [1.60384326E12, 35.0], [1.60384302E12, 36.0], [1.6038432E12, 33.00799973487854]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384332E12, 33.0], [1.60384308E12, 32.029000067710875], [1.60384314E12, 33.334600195884704], [1.60384326E12, 35.0], [1.60384302E12, 36.0], [1.6038432E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384332E12, 33.0], [1.60384308E12, 32.0], [1.60384314E12, 32.75649987757206], [1.60384326E12, 35.0], [1.60384302E12, 36.0], [1.6038432E12, 33.56399986743927]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384332E12, 24.0], [1.60384308E12, 26.0], [1.60384314E12, 25.0], [1.60384326E12, 19.0], [1.60384302E12, 30.0], [1.6038432E12, 24.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384332E12, 313.0], [1.60384308E12, 620.0], [1.60384314E12, 357.0], [1.60384326E12, 506.0], [1.60384302E12, 316.0], [1.6038432E12, 270.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384332E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 103.0, "minX": 1.0, "maxY": 2502.0, "series": [{"data": [[32.0, 251.0], [33.0, 273.0], [2.0, 1086.0], [35.0, 235.0], [34.0, 195.5], [36.0, 215.5], [37.0, 192.0], [39.0, 146.0], [38.0, 144.0], [40.0, 105.5], [41.0, 128.0], [42.0, 126.0], [43.0, 103.0], [45.0, 196.0], [3.0, 674.0], [61.0, 111.0], [4.0, 811.5], [5.0, 611.0], [6.0, 463.5], [7.0, 409.0], [8.0, 573.0], [9.0, 532.0], [10.0, 493.5], [11.0, 639.5], [12.0, 643.5], [13.0, 648.5], [14.0, 541.0], [15.0, 557.0], [1.0, 2502.0], [16.0, 544.0], [17.0, 463.0], [18.0, 445.5], [19.0, 457.0], [20.0, 343.5], [21.0, 347.0], [22.0, 362.0], [23.0, 323.0], [24.0, 317.0], [25.0, 331.0], [26.0, 365.0], [27.0, 319.0], [28.0, 333.5], [29.0, 233.0], [30.0, 242.5], [31.0, 265.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 102.0, "minX": 1.0, "maxY": 2500.0, "series": [{"data": [[32.0, 250.0], [33.0, 272.5], [2.0, 1083.0], [35.0, 233.0], [34.0, 195.5], [36.0, 215.0], [37.0, 190.5], [39.0, 145.0], [38.0, 143.0], [40.0, 104.5], [41.0, 128.0], [42.0, 125.0], [43.0, 102.0], [45.0, 196.0], [3.0, 674.0], [61.0, 110.0], [4.0, 806.5], [5.0, 609.0], [6.0, 462.5], [7.0, 409.0], [8.0, 568.5], [9.0, 531.0], [10.0, 493.5], [11.0, 638.5], [12.0, 637.0], [13.0, 644.0], [14.0, 536.0], [15.0, 554.0], [1.0, 2500.0], [16.0, 544.0], [17.0, 462.0], [18.0, 444.5], [19.0, 454.0], [20.0, 341.5], [21.0, 347.0], [22.0, 361.0], [23.0, 322.0], [24.0, 315.0], [25.0, 329.5], [26.0, 363.5], [27.0, 319.0], [28.0, 333.0], [29.0, 232.5], [30.0, 241.5], [31.0, 262.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.433333333333334, "minX": 1.60384302E12, "maxY": 18.516666666666666, "series": [{"data": [[1.60384332E12, 11.433333333333334], [1.60384308E12, 11.816666666666666], [1.60384314E12, 17.1], [1.60384326E12, 13.816666666666666], [1.60384302E12, 13.816666666666666], [1.6038432E12, 18.516666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384332E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.6, "minX": 1.60384302E12, "maxY": 18.516666666666666, "series": [{"data": [[1.60384332E12, 11.6], [1.60384308E12, 11.816666666666666], [1.60384314E12, 17.1], [1.60384326E12, 13.816666666666666], [1.60384302E12, 13.65], [1.6038432E12, 18.516666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384332E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.6, "minX": 1.60384302E12, "maxY": 18.516666666666666, "series": [{"data": [[1.60384332E12, 11.6], [1.60384308E12, 11.816666666666666], [1.60384314E12, 17.1], [1.60384326E12, 13.816666666666666], [1.60384302E12, 13.65], [1.6038432E12, 18.516666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384332E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.6, "minX": 1.60384302E12, "maxY": 18.516666666666666, "series": [{"data": [[1.60384332E12, 11.6], [1.60384308E12, 11.816666666666666], [1.60384314E12, 17.1], [1.60384326E12, 13.816666666666666], [1.60384302E12, 13.65], [1.6038432E12, 18.516666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384332E12, "title": "Total Transactions Per Second"}},
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

