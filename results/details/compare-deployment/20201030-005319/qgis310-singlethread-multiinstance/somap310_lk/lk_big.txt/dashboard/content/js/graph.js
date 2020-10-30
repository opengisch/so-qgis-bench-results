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
        data: {"result": {"minY": 33.0, "minX": 0.0, "maxY": 3957.0, "series": [{"data": [[0.0, 33.0], [0.1, 34.0], [0.2, 35.0], [0.3, 36.0], [0.4, 37.0], [0.5, 37.0], [0.6, 37.0], [0.7, 38.0], [0.8, 38.0], [0.9, 38.0], [1.0, 39.0], [1.1, 39.0], [1.2, 39.0], [1.3, 40.0], [1.4, 40.0], [1.5, 40.0], [1.6, 40.0], [1.7, 40.0], [1.8, 40.0], [1.9, 41.0], [2.0, 41.0], [2.1, 41.0], [2.2, 41.0], [2.3, 41.0], [2.4, 42.0], [2.5, 42.0], [2.6, 42.0], [2.7, 42.0], [2.8, 42.0], [2.9, 43.0], [3.0, 43.0], [3.1, 43.0], [3.2, 43.0], [3.3, 44.0], [3.4, 44.0], [3.5, 44.0], [3.6, 44.0], [3.7, 44.0], [3.8, 44.0], [3.9, 45.0], [4.0, 45.0], [4.1, 45.0], [4.2, 46.0], [4.3, 46.0], [4.4, 46.0], [4.5, 47.0], [4.6, 47.0], [4.7, 47.0], [4.8, 48.0], [4.9, 48.0], [5.0, 49.0], [5.1, 49.0], [5.2, 50.0], [5.3, 50.0], [5.4, 51.0], [5.5, 52.0], [5.6, 53.0], [5.7, 54.0], [5.8, 55.0], [5.9, 56.0], [6.0, 57.0], [6.1, 57.0], [6.2, 58.0], [6.3, 59.0], [6.4, 59.0], [6.5, 60.0], [6.6, 60.0], [6.7, 60.0], [6.8, 61.0], [6.9, 62.0], [7.0, 62.0], [7.1, 63.0], [7.2, 63.0], [7.3, 64.0], [7.4, 64.0], [7.5, 64.0], [7.6, 65.0], [7.7, 65.0], [7.8, 66.0], [7.9, 66.0], [8.0, 66.0], [8.1, 66.0], [8.2, 67.0], [8.3, 67.0], [8.4, 67.0], [8.5, 67.0], [8.6, 68.0], [8.7, 68.0], [8.8, 68.0], [8.9, 68.0], [9.0, 69.0], [9.1, 69.0], [9.2, 69.0], [9.3, 69.0], [9.4, 69.0], [9.5, 69.0], [9.6, 69.0], [9.7, 70.0], [9.8, 70.0], [9.9, 70.0], [10.0, 70.0], [10.1, 70.0], [10.2, 70.0], [10.3, 70.0], [10.4, 70.0], [10.5, 71.0], [10.6, 71.0], [10.7, 71.0], [10.8, 71.0], [10.9, 71.0], [11.0, 71.0], [11.1, 71.0], [11.2, 71.0], [11.3, 71.0], [11.4, 71.0], [11.5, 72.0], [11.6, 72.0], [11.7, 72.0], [11.8, 72.0], [11.9, 72.0], [12.0, 72.0], [12.1, 72.0], [12.2, 72.0], [12.3, 72.0], [12.4, 73.0], [12.5, 73.0], [12.6, 73.0], [12.7, 73.0], [12.8, 73.0], [12.9, 73.0], [13.0, 73.0], [13.1, 73.0], [13.2, 73.0], [13.3, 73.0], [13.4, 73.0], [13.5, 74.0], [13.6, 74.0], [13.7, 74.0], [13.8, 74.0], [13.9, 74.0], [14.0, 74.0], [14.1, 74.0], [14.2, 74.0], [14.3, 74.0], [14.4, 74.0], [14.5, 74.0], [14.6, 75.0], [14.7, 75.0], [14.8, 75.0], [14.9, 75.0], [15.0, 75.0], [15.1, 75.0], [15.2, 75.0], [15.3, 75.0], [15.4, 75.0], [15.5, 75.0], [15.6, 75.0], [15.7, 75.0], [15.8, 76.0], [15.9, 76.0], [16.0, 76.0], [16.1, 76.0], [16.2, 76.0], [16.3, 76.0], [16.4, 76.0], [16.5, 76.0], [16.6, 76.0], [16.7, 76.0], [16.8, 76.0], [16.9, 76.0], [17.0, 76.0], [17.1, 77.0], [17.2, 77.0], [17.3, 77.0], [17.4, 77.0], [17.5, 77.0], [17.6, 77.0], [17.7, 77.0], [17.8, 77.0], [17.9, 77.0], [18.0, 77.0], [18.1, 77.0], [18.2, 77.0], [18.3, 77.0], [18.4, 77.0], [18.5, 77.0], [18.6, 77.0], [18.7, 78.0], [18.8, 78.0], [18.9, 78.0], [19.0, 78.0], [19.1, 78.0], [19.2, 78.0], [19.3, 78.0], [19.4, 78.0], [19.5, 78.0], [19.6, 78.0], [19.7, 78.0], [19.8, 78.0], [19.9, 78.0], [20.0, 78.0], [20.1, 79.0], [20.2, 79.0], [20.3, 79.0], [20.4, 79.0], [20.5, 79.0], [20.6, 79.0], [20.7, 79.0], [20.8, 79.0], [20.9, 79.0], [21.0, 79.0], [21.1, 79.0], [21.2, 79.0], [21.3, 80.0], [21.4, 80.0], [21.5, 80.0], [21.6, 80.0], [21.7, 80.0], [21.8, 80.0], [21.9, 80.0], [22.0, 80.0], [22.1, 80.0], [22.2, 80.0], [22.3, 81.0], [22.4, 81.0], [22.5, 81.0], [22.6, 81.0], [22.7, 81.0], [22.8, 81.0], [22.9, 81.0], [23.0, 81.0], [23.1, 81.0], [23.2, 81.0], [23.3, 81.0], [23.4, 82.0], [23.5, 82.0], [23.6, 82.0], [23.7, 82.0], [23.8, 82.0], [23.9, 82.0], [24.0, 82.0], [24.1, 82.0], [24.2, 82.0], [24.3, 82.0], [24.4, 83.0], [24.5, 83.0], [24.6, 83.0], [24.7, 83.0], [24.8, 83.0], [24.9, 83.0], [25.0, 83.0], [25.1, 83.0], [25.2, 83.0], [25.3, 83.0], [25.4, 84.0], [25.5, 84.0], [25.6, 84.0], [25.7, 84.0], [25.8, 84.0], [25.9, 84.0], [26.0, 84.0], [26.1, 84.0], [26.2, 84.0], [26.3, 85.0], [26.4, 85.0], [26.5, 85.0], [26.6, 85.0], [26.7, 85.0], [26.8, 85.0], [26.9, 85.0], [27.0, 85.0], [27.1, 86.0], [27.2, 86.0], [27.3, 86.0], [27.4, 86.0], [27.5, 86.0], [27.6, 87.0], [27.7, 87.0], [27.8, 87.0], [27.9, 87.0], [28.0, 87.0], [28.1, 87.0], [28.2, 87.0], [28.3, 88.0], [28.4, 88.0], [28.5, 88.0], [28.6, 88.0], [28.7, 88.0], [28.8, 88.0], [28.9, 89.0], [29.0, 89.0], [29.1, 89.0], [29.2, 89.0], [29.3, 90.0], [29.4, 90.0], [29.5, 90.0], [29.6, 90.0], [29.7, 91.0], [29.8, 91.0], [29.9, 91.0], [30.0, 91.0], [30.1, 92.0], [30.2, 92.0], [30.3, 92.0], [30.4, 93.0], [30.5, 93.0], [30.6, 93.0], [30.7, 94.0], [30.8, 94.0], [30.9, 95.0], [31.0, 95.0], [31.1, 97.0], [31.2, 97.0], [31.3, 97.0], [31.4, 98.0], [31.5, 98.0], [31.6, 98.0], [31.7, 99.0], [31.8, 100.0], [31.9, 100.0], [32.0, 101.0], [32.1, 101.0], [32.2, 102.0], [32.3, 103.0], [32.4, 104.0], [32.5, 105.0], [32.6, 106.0], [32.7, 107.0], [32.8, 108.0], [32.9, 109.0], [33.0, 109.0], [33.1, 109.0], [33.2, 110.0], [33.3, 110.0], [33.4, 111.0], [33.5, 111.0], [33.6, 112.0], [33.7, 112.0], [33.8, 113.0], [33.9, 114.0], [34.0, 114.0], [34.1, 115.0], [34.2, 115.0], [34.3, 115.0], [34.4, 116.0], [34.5, 116.0], [34.6, 117.0], [34.7, 117.0], [34.8, 118.0], [34.9, 118.0], [35.0, 119.0], [35.1, 119.0], [35.2, 120.0], [35.3, 120.0], [35.4, 121.0], [35.5, 122.0], [35.6, 122.0], [35.7, 123.0], [35.8, 124.0], [35.9, 125.0], [36.0, 125.0], [36.1, 126.0], [36.2, 126.0], [36.3, 127.0], [36.4, 128.0], [36.5, 129.0], [36.6, 131.0], [36.7, 132.0], [36.8, 133.0], [36.9, 134.0], [37.0, 135.0], [37.1, 136.0], [37.2, 136.0], [37.3, 137.0], [37.4, 138.0], [37.5, 138.0], [37.6, 139.0], [37.7, 139.0], [37.8, 140.0], [37.9, 141.0], [38.0, 141.0], [38.1, 142.0], [38.2, 142.0], [38.3, 143.0], [38.4, 144.0], [38.5, 144.0], [38.6, 145.0], [38.7, 145.0], [38.8, 145.0], [38.9, 146.0], [39.0, 146.0], [39.1, 147.0], [39.2, 147.0], [39.3, 148.0], [39.4, 149.0], [39.5, 150.0], [39.6, 150.0], [39.7, 152.0], [39.8, 152.0], [39.9, 152.0], [40.0, 153.0], [40.1, 153.0], [40.2, 154.0], [40.3, 154.0], [40.4, 155.0], [40.5, 155.0], [40.6, 156.0], [40.7, 156.0], [40.8, 156.0], [40.9, 157.0], [41.0, 157.0], [41.1, 157.0], [41.2, 157.0], [41.3, 158.0], [41.4, 158.0], [41.5, 159.0], [41.6, 159.0], [41.7, 161.0], [41.8, 161.0], [41.9, 162.0], [42.0, 163.0], [42.1, 163.0], [42.2, 164.0], [42.3, 165.0], [42.4, 166.0], [42.5, 166.0], [42.6, 167.0], [42.7, 167.0], [42.8, 168.0], [42.9, 169.0], [43.0, 169.0], [43.1, 170.0], [43.2, 171.0], [43.3, 171.0], [43.4, 172.0], [43.5, 173.0], [43.6, 173.0], [43.7, 174.0], [43.8, 175.0], [43.9, 175.0], [44.0, 176.0], [44.1, 177.0], [44.2, 180.0], [44.3, 181.0], [44.4, 182.0], [44.5, 184.0], [44.6, 185.0], [44.7, 185.0], [44.8, 187.0], [44.9, 188.0], [45.0, 190.0], [45.1, 191.0], [45.2, 191.0], [45.3, 193.0], [45.4, 194.0], [45.5, 196.0], [45.6, 198.0], [45.7, 199.0], [45.8, 200.0], [45.9, 200.0], [46.0, 202.0], [46.1, 203.0], [46.2, 204.0], [46.3, 206.0], [46.4, 206.0], [46.5, 209.0], [46.6, 210.0], [46.7, 211.0], [46.8, 212.0], [46.9, 213.0], [47.0, 215.0], [47.1, 216.0], [47.2, 218.0], [47.3, 221.0], [47.4, 222.0], [47.5, 223.0], [47.6, 224.0], [47.7, 226.0], [47.8, 228.0], [47.9, 229.0], [48.0, 231.0], [48.1, 233.0], [48.2, 234.0], [48.3, 235.0], [48.4, 235.0], [48.5, 237.0], [48.6, 238.0], [48.7, 239.0], [48.8, 240.0], [48.9, 241.0], [49.0, 243.0], [49.1, 244.0], [49.2, 245.0], [49.3, 246.0], [49.4, 247.0], [49.5, 247.0], [49.6, 249.0], [49.7, 250.0], [49.8, 251.0], [49.9, 251.0], [50.0, 253.0], [50.1, 253.0], [50.2, 255.0], [50.3, 256.0], [50.4, 257.0], [50.5, 258.0], [50.6, 260.0], [50.7, 261.0], [50.8, 262.0], [50.9, 263.0], [51.0, 263.0], [51.1, 264.0], [51.2, 265.0], [51.3, 266.0], [51.4, 267.0], [51.5, 268.0], [51.6, 269.0], [51.7, 269.0], [51.8, 271.0], [51.9, 272.0], [52.0, 275.0], [52.1, 275.0], [52.2, 276.0], [52.3, 277.0], [52.4, 278.0], [52.5, 279.0], [52.6, 279.0], [52.7, 281.0], [52.8, 282.0], [52.9, 283.0], [53.0, 284.0], [53.1, 285.0], [53.2, 286.0], [53.3, 287.0], [53.4, 289.0], [53.5, 290.0], [53.6, 292.0], [53.7, 293.0], [53.8, 294.0], [53.9, 296.0], [54.0, 297.0], [54.1, 299.0], [54.2, 300.0], [54.3, 301.0], [54.4, 301.0], [54.5, 303.0], [54.6, 304.0], [54.7, 305.0], [54.8, 307.0], [54.9, 308.0], [55.0, 309.0], [55.1, 310.0], [55.2, 311.0], [55.3, 313.0], [55.4, 315.0], [55.5, 316.0], [55.6, 318.0], [55.7, 319.0], [55.8, 320.0], [55.9, 322.0], [56.0, 323.0], [56.1, 325.0], [56.2, 327.0], [56.3, 329.0], [56.4, 331.0], [56.5, 332.0], [56.6, 334.0], [56.7, 335.0], [56.8, 336.0], [56.9, 338.0], [57.0, 339.0], [57.1, 340.0], [57.2, 341.0], [57.3, 343.0], [57.4, 345.0], [57.5, 346.0], [57.6, 348.0], [57.7, 350.0], [57.8, 353.0], [57.9, 354.0], [58.0, 357.0], [58.1, 359.0], [58.2, 360.0], [58.3, 363.0], [58.4, 364.0], [58.5, 365.0], [58.6, 366.0], [58.7, 368.0], [58.8, 369.0], [58.9, 371.0], [59.0, 372.0], [59.1, 373.0], [59.2, 374.0], [59.3, 376.0], [59.4, 377.0], [59.5, 379.0], [59.6, 381.0], [59.7, 382.0], [59.8, 384.0], [59.9, 387.0], [60.0, 388.0], [60.1, 389.0], [60.2, 391.0], [60.3, 392.0], [60.4, 393.0], [60.5, 394.0], [60.6, 395.0], [60.7, 396.0], [60.8, 397.0], [60.9, 399.0], [61.0, 400.0], [61.1, 402.0], [61.2, 403.0], [61.3, 404.0], [61.4, 405.0], [61.5, 406.0], [61.6, 407.0], [61.7, 408.0], [61.8, 409.0], [61.9, 411.0], [62.0, 412.0], [62.1, 414.0], [62.2, 416.0], [62.3, 416.0], [62.4, 418.0], [62.5, 419.0], [62.6, 422.0], [62.7, 422.0], [62.8, 423.0], [62.9, 425.0], [63.0, 426.0], [63.1, 427.0], [63.2, 428.0], [63.3, 430.0], [63.4, 431.0], [63.5, 432.0], [63.6, 434.0], [63.7, 434.0], [63.8, 436.0], [63.9, 437.0], [64.0, 439.0], [64.1, 440.0], [64.2, 441.0], [64.3, 442.0], [64.4, 443.0], [64.5, 445.0], [64.6, 447.0], [64.7, 449.0], [64.8, 451.0], [64.9, 452.0], [65.0, 453.0], [65.1, 454.0], [65.2, 454.0], [65.3, 456.0], [65.4, 457.0], [65.5, 459.0], [65.6, 460.0], [65.7, 462.0], [65.8, 463.0], [65.9, 464.0], [66.0, 466.0], [66.1, 468.0], [66.2, 469.0], [66.3, 470.0], [66.4, 471.0], [66.5, 474.0], [66.6, 475.0], [66.7, 477.0], [66.8, 477.0], [66.9, 479.0], [67.0, 481.0], [67.1, 482.0], [67.2, 483.0], [67.3, 484.0], [67.4, 485.0], [67.5, 486.0], [67.6, 488.0], [67.7, 489.0], [67.8, 492.0], [67.9, 494.0], [68.0, 496.0], [68.1, 499.0], [68.2, 499.0], [68.3, 501.0], [68.4, 502.0], [68.5, 505.0], [68.6, 507.0], [68.7, 509.0], [68.8, 512.0], [68.9, 516.0], [69.0, 518.0], [69.1, 520.0], [69.2, 522.0], [69.3, 523.0], [69.4, 526.0], [69.5, 528.0], [69.6, 529.0], [69.7, 531.0], [69.8, 533.0], [69.9, 535.0], [70.0, 536.0], [70.1, 539.0], [70.2, 539.0], [70.3, 541.0], [70.4, 541.0], [70.5, 543.0], [70.6, 544.0], [70.7, 547.0], [70.8, 549.0], [70.9, 553.0], [71.0, 555.0], [71.1, 556.0], [71.2, 558.0], [71.3, 559.0], [71.4, 561.0], [71.5, 562.0], [71.6, 564.0], [71.7, 566.0], [71.8, 567.0], [71.9, 569.0], [72.0, 571.0], [72.1, 572.0], [72.2, 574.0], [72.3, 574.0], [72.4, 575.0], [72.5, 576.0], [72.6, 577.0], [72.7, 579.0], [72.8, 580.0], [72.9, 582.0], [73.0, 585.0], [73.1, 586.0], [73.2, 587.0], [73.3, 589.0], [73.4, 591.0], [73.5, 592.0], [73.6, 594.0], [73.7, 596.0], [73.8, 597.0], [73.9, 598.0], [74.0, 600.0], [74.1, 602.0], [74.2, 603.0], [74.3, 604.0], [74.4, 606.0], [74.5, 609.0], [74.6, 611.0], [74.7, 613.0], [74.8, 614.0], [74.9, 616.0], [75.0, 619.0], [75.1, 620.0], [75.2, 623.0], [75.3, 625.0], [75.4, 626.0], [75.5, 628.0], [75.6, 630.0], [75.7, 631.0], [75.8, 632.0], [75.9, 633.0], [76.0, 635.0], [76.1, 637.0], [76.2, 639.0], [76.3, 640.0], [76.4, 643.0], [76.5, 645.0], [76.6, 647.0], [76.7, 649.0], [76.8, 653.0], [76.9, 654.0], [77.0, 657.0], [77.1, 658.0], [77.2, 659.0], [77.3, 662.0], [77.4, 663.0], [77.5, 664.0], [77.6, 667.0], [77.7, 668.0], [77.8, 670.0], [77.9, 671.0], [78.0, 672.0], [78.1, 673.0], [78.2, 675.0], [78.3, 678.0], [78.4, 681.0], [78.5, 683.0], [78.6, 685.0], [78.7, 689.0], [78.8, 691.0], [78.9, 692.0], [79.0, 694.0], [79.1, 697.0], [79.2, 699.0], [79.3, 701.0], [79.4, 704.0], [79.5, 704.0], [79.6, 708.0], [79.7, 709.0], [79.8, 712.0], [79.9, 713.0], [80.0, 715.0], [80.1, 717.0], [80.2, 720.0], [80.3, 722.0], [80.4, 726.0], [80.5, 729.0], [80.6, 734.0], [80.7, 736.0], [80.8, 739.0], [80.9, 743.0], [81.0, 744.0], [81.1, 746.0], [81.2, 748.0], [81.3, 749.0], [81.4, 751.0], [81.5, 753.0], [81.6, 756.0], [81.7, 759.0], [81.8, 761.0], [81.9, 763.0], [82.0, 767.0], [82.1, 769.0], [82.2, 770.0], [82.3, 772.0], [82.4, 774.0], [82.5, 775.0], [82.6, 777.0], [82.7, 778.0], [82.8, 780.0], [82.9, 782.0], [83.0, 783.0], [83.1, 785.0], [83.2, 787.0], [83.3, 788.0], [83.4, 789.0], [83.5, 792.0], [83.6, 794.0], [83.7, 796.0], [83.8, 799.0], [83.9, 801.0], [84.0, 804.0], [84.1, 804.0], [84.2, 806.0], [84.3, 808.0], [84.4, 812.0], [84.5, 814.0], [84.6, 818.0], [84.7, 820.0], [84.8, 824.0], [84.9, 825.0], [85.0, 829.0], [85.1, 832.0], [85.2, 837.0], [85.3, 839.0], [85.4, 841.0], [85.5, 844.0], [85.6, 846.0], [85.7, 847.0], [85.8, 850.0], [85.9, 853.0], [86.0, 857.0], [86.1, 862.0], [86.2, 865.0], [86.3, 867.0], [86.4, 869.0], [86.5, 871.0], [86.6, 872.0], [86.7, 876.0], [86.8, 880.0], [86.9, 884.0], [87.0, 886.0], [87.1, 889.0], [87.2, 892.0], [87.3, 897.0], [87.4, 899.0], [87.5, 902.0], [87.6, 904.0], [87.7, 909.0], [87.8, 919.0], [87.9, 927.0], [88.0, 930.0], [88.1, 935.0], [88.2, 941.0], [88.3, 951.0], [88.4, 954.0], [88.5, 957.0], [88.6, 963.0], [88.7, 966.0], [88.8, 971.0], [88.9, 973.0], [89.0, 977.0], [89.1, 982.0], [89.2, 985.0], [89.3, 989.0], [89.4, 996.0], [89.5, 998.0], [89.6, 999.0], [89.7, 1004.0], [89.8, 1005.0], [89.9, 1011.0], [90.0, 1014.0], [90.1, 1017.0], [90.2, 1021.0], [90.3, 1026.0], [90.4, 1031.0], [90.5, 1038.0], [90.6, 1040.0], [90.7, 1046.0], [90.8, 1050.0], [90.9, 1056.0], [91.0, 1058.0], [91.1, 1064.0], [91.2, 1068.0], [91.3, 1075.0], [91.4, 1079.0], [91.5, 1081.0], [91.6, 1090.0], [91.7, 1093.0], [91.8, 1099.0], [91.9, 1102.0], [92.0, 1110.0], [92.1, 1113.0], [92.2, 1116.0], [92.3, 1120.0], [92.4, 1126.0], [92.5, 1132.0], [92.6, 1136.0], [92.7, 1145.0], [92.8, 1151.0], [92.9, 1158.0], [93.0, 1162.0], [93.1, 1168.0], [93.2, 1174.0], [93.3, 1180.0], [93.4, 1187.0], [93.5, 1200.0], [93.6, 1208.0], [93.7, 1210.0], [93.8, 1214.0], [93.9, 1223.0], [94.0, 1228.0], [94.1, 1230.0], [94.2, 1238.0], [94.3, 1247.0], [94.4, 1254.0], [94.5, 1267.0], [94.6, 1273.0], [94.7, 1293.0], [94.8, 1303.0], [94.9, 1308.0], [95.0, 1317.0], [95.1, 1332.0], [95.2, 1335.0], [95.3, 1342.0], [95.4, 1356.0], [95.5, 1364.0], [95.6, 1377.0], [95.7, 1390.0], [95.8, 1398.0], [95.9, 1415.0], [96.0, 1420.0], [96.1, 1422.0], [96.2, 1438.0], [96.3, 1446.0], [96.4, 1452.0], [96.5, 1459.0], [96.6, 1475.0], [96.7, 1482.0], [96.8, 1488.0], [96.9, 1506.0], [97.0, 1513.0], [97.1, 1526.0], [97.2, 1539.0], [97.3, 1549.0], [97.4, 1559.0], [97.5, 1576.0], [97.6, 1602.0], [97.7, 1623.0], [97.8, 1655.0], [97.9, 1691.0], [98.0, 1717.0], [98.1, 1727.0], [98.2, 1761.0], [98.3, 1774.0], [98.4, 1793.0], [98.5, 1852.0], [98.6, 1873.0], [98.7, 1902.0], [98.8, 1951.0], [98.9, 1983.0], [99.0, 2072.0], [99.1, 2115.0], [99.2, 2143.0], [99.3, 2179.0], [99.4, 2241.0], [99.5, 2266.0], [99.6, 2329.0], [99.7, 2399.0], [99.8, 2475.0], [99.9, 2938.0], [100.0, 3957.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1673.0, "series": [{"data": [[0.0, 1673.0], [600.0, 276.0], [700.0, 244.0], [800.0, 189.0], [900.0, 115.0], [1000.0, 116.0], [1100.0, 86.0], [1200.0, 69.0], [1300.0, 54.0], [1400.0, 56.0], [1500.0, 38.0], [100.0, 735.0], [1600.0, 17.0], [1700.0, 27.0], [1800.0, 14.0], [1900.0, 13.0], [2000.0, 8.0], [2100.0, 13.0], [2200.0, 11.0], [2300.0, 9.0], [2400.0, 5.0], [2500.0, 2.0], [2900.0, 3.0], [3000.0, 1.0], [200.0, 444.0], [3300.0, 2.0], [3500.0, 1.0], [3900.0, 1.0], [300.0, 354.0], [400.0, 385.0], [500.0, 301.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 165.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3593.0, "series": [{"data": [[0.0, 3593.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1504.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 165.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.910669975186106, "minX": 1.60401918E12, "maxY": 12.0, "series": [{"data": [[1.60401918E12, 11.910669975186106], [1.60401936E12, 11.942708333333332], [1.60401924E12, 12.0], [1.6040193E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401936E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 415.48454788248665, "minX": 1.0, "maxY": 3957.0, "series": [{"data": [[4.0, 1224.0], [8.0, 1528.0], [2.0, 3542.0], [1.0, 3957.0], [9.0, 1079.0], [5.0, 1530.5], [10.0, 918.3333333333334], [11.0, 1262.3333333333335], [6.0, 1175.5], [12.0, 415.48454788248665], [3.0, 2290.0], [7.0, 1720.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980615735461788, 419.94241733181326]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3567.1666666666665, "minX": 1.60401918E12, "maxY": 1553003.0, "series": [{"data": [[1.60401918E12, 208044.65], [1.60401936E12, 1263294.45], [1.60401924E12, 1553003.0], [1.6040193E12, 1226817.3333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401918E12, 3567.1666666666665], [1.60401936E12, 10191.283333333333], [1.60401924E12, 12569.95], [1.6040193E12, 19162.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401936E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 318.8849557522126, "minX": 1.60401918E12, "maxY": 506.14236111111103, "series": [{"data": [[1.60401918E12, 472.6004962779155], [1.60401936E12, 506.14236111111103], [1.60401924E12, 494.4872149274357], [1.6040193E12, 318.8849557522126]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401936E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 318.56548672566447, "minX": 1.60401918E12, "maxY": 505.5772569444446, "series": [{"data": [[1.60401918E12, 472.2655086848637], [1.60401936E12, 505.5772569444446], [1.60401924E12, 493.8756046993779], [1.6040193E12, 318.56548672566447]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401936E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006944444444444447, "minX": 1.60401918E12, "maxY": 0.19354838709677447, "series": [{"data": [[1.60401918E12, 0.19354838709677447], [1.60401936E12, 0.006944444444444447], [1.60401924E12, 0.007601935038009683], [1.6040193E12, 0.011946902654867295]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401936E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 33.0, "minX": 1.60401918E12, "maxY": 3957.0, "series": [{"data": [[1.60401918E12, 1642.0], [1.60401936E12, 3957.0], [1.60401924E12, 2588.0], [1.6040193E12, 2241.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401918E12, 66.0], [1.60401936E12, 37.0], [1.60401924E12, 40.0], [1.6040193E12, 38.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401918E12, 66.0], [1.60401936E12, 37.0], [1.60401924E12, 40.0], [1.6040193E12, 38.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401918E12, 66.0], [1.60401936E12, 37.0], [1.60401924E12, 40.0], [1.6040193E12, 38.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401918E12, 46.0], [1.60401936E12, 33.0], [1.60401924E12, 35.0], [1.6040193E12, 33.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401918E12, 442.0], [1.60401936E12, 334.5], [1.60401924E12, 345.0], [1.6040193E12, 170.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401936E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 78.0, "minX": 1.0, "maxY": 3749.5, "series": [{"data": [[3.0, 2441.0], [4.0, 2111.5], [5.0, 1359.5], [6.0, 2004.5], [7.0, 1591.0], [8.0, 1156.0], [9.0, 1035.5], [10.0, 1180.5], [11.0, 896.0], [12.0, 876.5], [13.0, 748.5], [14.0, 806.5], [15.0, 665.5], [16.0, 702.5], [17.0, 630.0], [18.0, 598.5], [19.0, 561.5], [20.0, 565.5], [21.0, 501.5], [22.0, 467.5], [24.0, 471.5], [25.0, 404.0], [26.0, 366.0], [27.0, 429.0], [28.0, 350.5], [29.0, 421.0], [30.0, 159.0], [31.0, 171.0], [32.0, 92.5], [33.0, 277.0], [34.0, 283.5], [35.0, 80.0], [37.0, 296.0], [36.0, 141.5], [39.0, 202.0], [38.0, 103.0], [41.0, 159.0], [40.0, 86.5], [43.0, 114.5], [42.0, 268.0], [45.0, 197.0], [46.0, 84.0], [48.0, 109.0], [49.0, 145.0], [50.0, 146.5], [51.0, 82.0], [53.0, 88.0], [56.0, 156.0], [57.0, 191.0], [58.0, 149.0], [60.0, 200.0], [63.0, 79.0], [67.0, 85.0], [65.0, 82.5], [66.0, 112.5], [72.0, 159.0], [75.0, 153.0], [74.0, 154.0], [81.0, 86.0], [84.0, 78.0], [88.0, 82.0], [1.0, 3749.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 78.0, "minX": 1.0, "maxY": 3749.0, "series": [{"data": [[3.0, 2440.0], [4.0, 2110.5], [5.0, 1358.5], [6.0, 2002.0], [7.0, 1589.0], [8.0, 1155.5], [9.0, 1034.5], [10.0, 1179.5], [11.0, 895.0], [12.0, 876.5], [13.0, 746.0], [14.0, 806.0], [15.0, 663.0], [16.0, 701.5], [17.0, 630.0], [18.0, 597.5], [19.0, 560.5], [20.0, 565.0], [21.0, 500.0], [22.0, 467.5], [24.0, 470.5], [25.0, 404.0], [26.0, 366.0], [27.0, 429.0], [28.0, 350.0], [29.0, 420.0], [30.0, 159.0], [31.0, 171.0], [32.0, 92.5], [33.0, 277.0], [34.0, 283.0], [35.0, 80.0], [37.0, 295.5], [36.0, 141.5], [39.0, 202.0], [38.0, 103.0], [41.0, 158.0], [40.0, 86.5], [43.0, 114.5], [42.0, 267.5], [45.0, 197.0], [46.0, 83.5], [48.0, 109.0], [49.0, 145.0], [50.0, 145.5], [51.0, 82.0], [53.0, 88.0], [56.0, 155.5], [57.0, 191.0], [58.0, 149.0], [60.0, 200.0], [63.0, 79.0], [67.0, 85.0], [65.0, 82.5], [66.0, 112.5], [72.0, 159.0], [75.0, 153.0], [74.0, 153.5], [81.0, 86.0], [84.0, 78.0], [88.0, 82.0], [1.0, 3749.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.916666666666667, "minX": 1.60401918E12, "maxY": 37.666666666666664, "series": [{"data": [[1.60401918E12, 6.916666666666667], [1.60401936E12, 19.0], [1.60401924E12, 24.116666666666667], [1.6040193E12, 37.666666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401936E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.716666666666667, "minX": 1.60401918E12, "maxY": 37.666666666666664, "series": [{"data": [[1.60401918E12, 6.716666666666667], [1.60401936E12, 19.2], [1.60401924E12, 24.116666666666667], [1.6040193E12, 37.666666666666664]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401936E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.716666666666667, "minX": 1.60401918E12, "maxY": 37.666666666666664, "series": [{"data": [[1.60401918E12, 6.716666666666667], [1.60401936E12, 19.2], [1.60401924E12, 24.116666666666667], [1.6040193E12, 37.666666666666664]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401936E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.716666666666667, "minX": 1.60401918E12, "maxY": 37.666666666666664, "series": [{"data": [[1.60401918E12, 6.716666666666667], [1.60401936E12, 19.2], [1.60401924E12, 24.116666666666667], [1.6040193E12, 37.666666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401936E12, "title": "Total Transactions Per Second"}},
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

