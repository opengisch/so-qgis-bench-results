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
        data: {"result": {"minY": 34.0, "minX": 0.0, "maxY": 3120.0, "series": [{"data": [[0.0, 34.0], [0.1, 36.0], [0.2, 37.0], [0.3, 37.0], [0.4, 38.0], [0.5, 39.0], [0.6, 39.0], [0.7, 39.0], [0.8, 40.0], [0.9, 40.0], [1.0, 40.0], [1.1, 41.0], [1.2, 41.0], [1.3, 41.0], [1.4, 41.0], [1.5, 42.0], [1.6, 42.0], [1.7, 42.0], [1.8, 42.0], [1.9, 42.0], [2.0, 43.0], [2.1, 43.0], [2.2, 43.0], [2.3, 44.0], [2.4, 44.0], [2.5, 44.0], [2.6, 45.0], [2.7, 45.0], [2.8, 45.0], [2.9, 45.0], [3.0, 46.0], [3.1, 46.0], [3.2, 47.0], [3.3, 47.0], [3.4, 48.0], [3.5, 49.0], [3.6, 49.0], [3.7, 50.0], [3.8, 51.0], [3.9, 53.0], [4.0, 53.0], [4.1, 54.0], [4.2, 54.0], [4.3, 55.0], [4.4, 56.0], [4.5, 57.0], [4.6, 58.0], [4.7, 59.0], [4.8, 59.0], [4.9, 60.0], [5.0, 61.0], [5.1, 63.0], [5.2, 63.0], [5.3, 64.0], [5.4, 64.0], [5.5, 65.0], [5.6, 66.0], [5.7, 66.0], [5.8, 67.0], [5.9, 67.0], [6.0, 67.0], [6.1, 68.0], [6.2, 68.0], [6.3, 68.0], [6.4, 69.0], [6.5, 69.0], [6.6, 69.0], [6.7, 70.0], [6.8, 70.0], [6.9, 70.0], [7.0, 70.0], [7.1, 70.0], [7.2, 71.0], [7.3, 71.0], [7.4, 71.0], [7.5, 71.0], [7.6, 71.0], [7.7, 71.0], [7.8, 72.0], [7.9, 72.0], [8.0, 72.0], [8.1, 72.0], [8.2, 72.0], [8.3, 72.0], [8.4, 72.0], [8.5, 72.0], [8.6, 72.0], [8.7, 73.0], [8.8, 73.0], [8.9, 73.0], [9.0, 73.0], [9.1, 73.0], [9.2, 73.0], [9.3, 73.0], [9.4, 74.0], [9.5, 74.0], [9.6, 74.0], [9.7, 74.0], [9.8, 74.0], [9.9, 74.0], [10.0, 74.0], [10.1, 74.0], [10.2, 75.0], [10.3, 75.0], [10.4, 75.0], [10.5, 75.0], [10.6, 75.0], [10.7, 75.0], [10.8, 75.0], [10.9, 75.0], [11.0, 75.0], [11.1, 75.0], [11.2, 76.0], [11.3, 76.0], [11.4, 76.0], [11.5, 76.0], [11.6, 76.0], [11.7, 76.0], [11.8, 76.0], [11.9, 76.0], [12.0, 76.0], [12.1, 77.0], [12.2, 77.0], [12.3, 77.0], [12.4, 77.0], [12.5, 77.0], [12.6, 77.0], [12.7, 77.0], [12.8, 77.0], [12.9, 77.0], [13.0, 77.0], [13.1, 78.0], [13.2, 78.0], [13.3, 78.0], [13.4, 78.0], [13.5, 78.0], [13.6, 78.0], [13.7, 78.0], [13.8, 78.0], [13.9, 78.0], [14.0, 78.0], [14.1, 78.0], [14.2, 79.0], [14.3, 79.0], [14.4, 79.0], [14.5, 79.0], [14.6, 79.0], [14.7, 79.0], [14.8, 79.0], [14.9, 79.0], [15.0, 79.0], [15.1, 79.0], [15.2, 79.0], [15.3, 79.0], [15.4, 80.0], [15.5, 80.0], [15.6, 80.0], [15.7, 80.0], [15.8, 80.0], [15.9, 80.0], [16.0, 80.0], [16.1, 80.0], [16.2, 80.0], [16.3, 80.0], [16.4, 81.0], [16.5, 81.0], [16.6, 81.0], [16.7, 81.0], [16.8, 81.0], [16.9, 81.0], [17.0, 81.0], [17.1, 81.0], [17.2, 81.0], [17.3, 81.0], [17.4, 82.0], [17.5, 82.0], [17.6, 82.0], [17.7, 82.0], [17.8, 82.0], [17.9, 82.0], [18.0, 82.0], [18.1, 82.0], [18.2, 82.0], [18.3, 82.0], [18.4, 82.0], [18.5, 83.0], [18.6, 83.0], [18.7, 83.0], [18.8, 83.0], [18.9, 83.0], [19.0, 83.0], [19.1, 83.0], [19.2, 83.0], [19.3, 83.0], [19.4, 83.0], [19.5, 83.0], [19.6, 83.0], [19.7, 84.0], [19.8, 84.0], [19.9, 84.0], [20.0, 84.0], [20.1, 84.0], [20.2, 84.0], [20.3, 84.0], [20.4, 84.0], [20.5, 84.0], [20.6, 84.0], [20.7, 85.0], [20.8, 85.0], [20.9, 85.0], [21.0, 85.0], [21.1, 85.0], [21.2, 85.0], [21.3, 85.0], [21.4, 85.0], [21.5, 85.0], [21.6, 85.0], [21.7, 85.0], [21.8, 85.0], [21.9, 86.0], [22.0, 86.0], [22.1, 86.0], [22.2, 86.0], [22.3, 86.0], [22.4, 86.0], [22.5, 86.0], [22.6, 86.0], [22.7, 86.0], [22.8, 86.0], [22.9, 86.0], [23.0, 86.0], [23.1, 87.0], [23.2, 87.0], [23.3, 87.0], [23.4, 87.0], [23.5, 87.0], [23.6, 87.0], [23.7, 87.0], [23.8, 87.0], [23.9, 87.0], [24.0, 88.0], [24.1, 88.0], [24.2, 88.0], [24.3, 88.0], [24.4, 88.0], [24.5, 88.0], [24.6, 88.0], [24.7, 88.0], [24.8, 89.0], [24.9, 89.0], [25.0, 89.0], [25.1, 89.0], [25.2, 89.0], [25.3, 89.0], [25.4, 89.0], [25.5, 90.0], [25.6, 90.0], [25.7, 90.0], [25.8, 90.0], [25.9, 90.0], [26.0, 90.0], [26.1, 91.0], [26.2, 91.0], [26.3, 91.0], [26.4, 91.0], [26.5, 91.0], [26.6, 91.0], [26.7, 92.0], [26.8, 92.0], [26.9, 92.0], [27.0, 92.0], [27.1, 93.0], [27.2, 93.0], [27.3, 93.0], [27.4, 93.0], [27.5, 93.0], [27.6, 93.0], [27.7, 94.0], [27.8, 94.0], [27.9, 94.0], [28.0, 94.0], [28.1, 95.0], [28.2, 95.0], [28.3, 95.0], [28.4, 95.0], [28.5, 96.0], [28.6, 96.0], [28.7, 96.0], [28.8, 97.0], [28.9, 97.0], [29.0, 97.0], [29.1, 98.0], [29.2, 98.0], [29.3, 98.0], [29.4, 99.0], [29.5, 99.0], [29.6, 99.0], [29.7, 100.0], [29.8, 100.0], [29.9, 100.0], [30.0, 101.0], [30.1, 101.0], [30.2, 102.0], [30.3, 102.0], [30.4, 103.0], [30.5, 103.0], [30.6, 104.0], [30.7, 104.0], [30.8, 105.0], [30.9, 105.0], [31.0, 106.0], [31.1, 106.0], [31.2, 106.0], [31.3, 107.0], [31.4, 107.0], [31.5, 108.0], [31.6, 109.0], [31.7, 109.0], [31.8, 110.0], [31.9, 111.0], [32.0, 111.0], [32.1, 111.0], [32.2, 112.0], [32.3, 112.0], [32.4, 113.0], [32.5, 113.0], [32.6, 114.0], [32.7, 114.0], [32.8, 114.0], [32.9, 115.0], [33.0, 115.0], [33.1, 116.0], [33.2, 116.0], [33.3, 117.0], [33.4, 117.0], [33.5, 118.0], [33.6, 118.0], [33.7, 119.0], [33.8, 120.0], [33.9, 120.0], [34.0, 120.0], [34.1, 121.0], [34.2, 121.0], [34.3, 121.0], [34.4, 122.0], [34.5, 122.0], [34.6, 123.0], [34.7, 124.0], [34.8, 125.0], [34.9, 126.0], [35.0, 126.0], [35.1, 127.0], [35.2, 128.0], [35.3, 128.0], [35.4, 129.0], [35.5, 129.0], [35.6, 129.0], [35.7, 130.0], [35.8, 130.0], [35.9, 130.0], [36.0, 131.0], [36.1, 132.0], [36.2, 133.0], [36.3, 134.0], [36.4, 135.0], [36.5, 135.0], [36.6, 136.0], [36.7, 137.0], [36.8, 138.0], [36.9, 138.0], [37.0, 139.0], [37.1, 140.0], [37.2, 141.0], [37.3, 142.0], [37.4, 142.0], [37.5, 143.0], [37.6, 144.0], [37.7, 145.0], [37.8, 146.0], [37.9, 146.0], [38.0, 147.0], [38.1, 147.0], [38.2, 149.0], [38.3, 150.0], [38.4, 150.0], [38.5, 150.0], [38.6, 151.0], [38.7, 153.0], [38.8, 154.0], [38.9, 154.0], [39.0, 156.0], [39.1, 157.0], [39.2, 158.0], [39.3, 158.0], [39.4, 159.0], [39.5, 160.0], [39.6, 160.0], [39.7, 162.0], [39.8, 162.0], [39.9, 164.0], [40.0, 165.0], [40.1, 166.0], [40.2, 167.0], [40.3, 167.0], [40.4, 168.0], [40.5, 168.0], [40.6, 169.0], [40.7, 171.0], [40.8, 171.0], [40.9, 173.0], [41.0, 175.0], [41.1, 175.0], [41.2, 176.0], [41.3, 177.0], [41.4, 178.0], [41.5, 179.0], [41.6, 179.0], [41.7, 180.0], [41.8, 182.0], [41.9, 182.0], [42.0, 183.0], [42.1, 183.0], [42.2, 184.0], [42.3, 186.0], [42.4, 187.0], [42.5, 187.0], [42.6, 189.0], [42.7, 190.0], [42.8, 191.0], [42.9, 191.0], [43.0, 192.0], [43.1, 193.0], [43.2, 195.0], [43.3, 195.0], [43.4, 197.0], [43.5, 197.0], [43.6, 198.0], [43.7, 199.0], [43.8, 200.0], [43.9, 202.0], [44.0, 205.0], [44.1, 206.0], [44.2, 207.0], [44.3, 209.0], [44.4, 210.0], [44.5, 212.0], [44.6, 213.0], [44.7, 214.0], [44.8, 216.0], [44.9, 217.0], [45.0, 218.0], [45.1, 219.0], [45.2, 220.0], [45.3, 221.0], [45.4, 221.0], [45.5, 223.0], [45.6, 223.0], [45.7, 224.0], [45.8, 224.0], [45.9, 225.0], [46.0, 226.0], [46.1, 228.0], [46.2, 229.0], [46.3, 230.0], [46.4, 232.0], [46.5, 233.0], [46.6, 234.0], [46.7, 235.0], [46.8, 236.0], [46.9, 237.0], [47.0, 238.0], [47.1, 240.0], [47.2, 241.0], [47.3, 242.0], [47.4, 242.0], [47.5, 244.0], [47.6, 245.0], [47.7, 246.0], [47.8, 247.0], [47.9, 249.0], [48.0, 250.0], [48.1, 252.0], [48.2, 254.0], [48.3, 254.0], [48.4, 256.0], [48.5, 257.0], [48.6, 258.0], [48.7, 258.0], [48.8, 259.0], [48.9, 260.0], [49.0, 260.0], [49.1, 262.0], [49.2, 262.0], [49.3, 263.0], [49.4, 264.0], [49.5, 264.0], [49.6, 266.0], [49.7, 266.0], [49.8, 267.0], [49.9, 267.0], [50.0, 268.0], [50.1, 269.0], [50.2, 270.0], [50.3, 271.0], [50.4, 273.0], [50.5, 274.0], [50.6, 275.0], [50.7, 276.0], [50.8, 277.0], [50.9, 278.0], [51.0, 279.0], [51.1, 280.0], [51.2, 282.0], [51.3, 282.0], [51.4, 283.0], [51.5, 284.0], [51.6, 286.0], [51.7, 286.0], [51.8, 287.0], [51.9, 287.0], [52.0, 289.0], [52.1, 289.0], [52.2, 290.0], [52.3, 291.0], [52.4, 292.0], [52.5, 294.0], [52.6, 295.0], [52.7, 297.0], [52.8, 298.0], [52.9, 298.0], [53.0, 299.0], [53.1, 300.0], [53.2, 301.0], [53.3, 302.0], [53.4, 303.0], [53.5, 304.0], [53.6, 306.0], [53.7, 306.0], [53.8, 308.0], [53.9, 310.0], [54.0, 311.0], [54.1, 312.0], [54.2, 314.0], [54.3, 315.0], [54.4, 316.0], [54.5, 317.0], [54.6, 318.0], [54.7, 319.0], [54.8, 320.0], [54.9, 322.0], [55.0, 324.0], [55.1, 326.0], [55.2, 329.0], [55.3, 331.0], [55.4, 332.0], [55.5, 333.0], [55.6, 335.0], [55.7, 337.0], [55.8, 339.0], [55.9, 341.0], [56.0, 343.0], [56.1, 346.0], [56.2, 348.0], [56.3, 349.0], [56.4, 353.0], [56.5, 354.0], [56.6, 356.0], [56.7, 357.0], [56.8, 359.0], [56.9, 362.0], [57.0, 363.0], [57.1, 364.0], [57.2, 365.0], [57.3, 366.0], [57.4, 368.0], [57.5, 369.0], [57.6, 370.0], [57.7, 371.0], [57.8, 372.0], [57.9, 373.0], [58.0, 375.0], [58.1, 376.0], [58.2, 378.0], [58.3, 380.0], [58.4, 382.0], [58.5, 382.0], [58.6, 383.0], [58.7, 384.0], [58.8, 386.0], [58.9, 388.0], [59.0, 390.0], [59.1, 390.0], [59.2, 391.0], [59.3, 394.0], [59.4, 395.0], [59.5, 395.0], [59.6, 396.0], [59.7, 397.0], [59.8, 399.0], [59.9, 400.0], [60.0, 400.0], [60.1, 401.0], [60.2, 401.0], [60.3, 403.0], [60.4, 404.0], [60.5, 405.0], [60.6, 406.0], [60.7, 407.0], [60.8, 408.0], [60.9, 409.0], [61.0, 410.0], [61.1, 412.0], [61.2, 413.0], [61.3, 414.0], [61.4, 415.0], [61.5, 416.0], [61.6, 417.0], [61.7, 420.0], [61.8, 421.0], [61.9, 422.0], [62.0, 423.0], [62.1, 424.0], [62.2, 426.0], [62.3, 427.0], [62.4, 428.0], [62.5, 429.0], [62.6, 431.0], [62.7, 432.0], [62.8, 432.0], [62.9, 433.0], [63.0, 435.0], [63.1, 436.0], [63.2, 438.0], [63.3, 440.0], [63.4, 441.0], [63.5, 442.0], [63.6, 443.0], [63.7, 444.0], [63.8, 445.0], [63.9, 446.0], [64.0, 447.0], [64.1, 448.0], [64.2, 449.0], [64.3, 450.0], [64.4, 451.0], [64.5, 452.0], [64.6, 454.0], [64.7, 456.0], [64.8, 457.0], [64.9, 459.0], [65.0, 460.0], [65.1, 461.0], [65.2, 462.0], [65.3, 464.0], [65.4, 465.0], [65.5, 467.0], [65.6, 469.0], [65.7, 472.0], [65.8, 474.0], [65.9, 475.0], [66.0, 477.0], [66.1, 478.0], [66.2, 480.0], [66.3, 482.0], [66.4, 483.0], [66.5, 485.0], [66.6, 486.0], [66.7, 488.0], [66.8, 489.0], [66.9, 490.0], [67.0, 493.0], [67.1, 494.0], [67.2, 496.0], [67.3, 497.0], [67.4, 497.0], [67.5, 498.0], [67.6, 499.0], [67.7, 501.0], [67.8, 502.0], [67.9, 504.0], [68.0, 507.0], [68.1, 509.0], [68.2, 512.0], [68.3, 514.0], [68.4, 516.0], [68.5, 517.0], [68.6, 518.0], [68.7, 520.0], [68.8, 522.0], [68.9, 523.0], [69.0, 525.0], [69.1, 527.0], [69.2, 530.0], [69.3, 532.0], [69.4, 534.0], [69.5, 534.0], [69.6, 538.0], [69.7, 541.0], [69.8, 542.0], [69.9, 544.0], [70.0, 545.0], [70.1, 546.0], [70.2, 548.0], [70.3, 552.0], [70.4, 553.0], [70.5, 555.0], [70.6, 556.0], [70.7, 558.0], [70.8, 560.0], [70.9, 561.0], [71.0, 563.0], [71.1, 565.0], [71.2, 568.0], [71.3, 569.0], [71.4, 570.0], [71.5, 572.0], [71.6, 573.0], [71.7, 575.0], [71.8, 578.0], [71.9, 581.0], [72.0, 584.0], [72.1, 585.0], [72.2, 587.0], [72.3, 589.0], [72.4, 591.0], [72.5, 592.0], [72.6, 593.0], [72.7, 594.0], [72.8, 595.0], [72.9, 598.0], [73.0, 600.0], [73.1, 600.0], [73.2, 601.0], [73.3, 603.0], [73.4, 604.0], [73.5, 606.0], [73.6, 607.0], [73.7, 609.0], [73.8, 610.0], [73.9, 612.0], [74.0, 614.0], [74.1, 617.0], [74.2, 618.0], [74.3, 619.0], [74.4, 622.0], [74.5, 624.0], [74.6, 625.0], [74.7, 627.0], [74.8, 628.0], [74.9, 631.0], [75.0, 636.0], [75.1, 638.0], [75.2, 640.0], [75.3, 641.0], [75.4, 643.0], [75.5, 645.0], [75.6, 646.0], [75.7, 648.0], [75.8, 649.0], [75.9, 650.0], [76.0, 652.0], [76.1, 654.0], [76.2, 656.0], [76.3, 660.0], [76.4, 662.0], [76.5, 663.0], [76.6, 667.0], [76.7, 669.0], [76.8, 672.0], [76.9, 674.0], [77.0, 676.0], [77.1, 679.0], [77.2, 681.0], [77.3, 683.0], [77.4, 684.0], [77.5, 687.0], [77.6, 688.0], [77.7, 690.0], [77.8, 694.0], [77.9, 696.0], [78.0, 697.0], [78.1, 701.0], [78.2, 702.0], [78.3, 705.0], [78.4, 707.0], [78.5, 708.0], [78.6, 710.0], [78.7, 712.0], [78.8, 714.0], [78.9, 715.0], [79.0, 717.0], [79.1, 720.0], [79.2, 722.0], [79.3, 723.0], [79.4, 725.0], [79.5, 727.0], [79.6, 730.0], [79.7, 731.0], [79.8, 737.0], [79.9, 738.0], [80.0, 740.0], [80.1, 744.0], [80.2, 746.0], [80.3, 751.0], [80.4, 753.0], [80.5, 757.0], [80.6, 761.0], [80.7, 762.0], [80.8, 764.0], [80.9, 766.0], [81.0, 770.0], [81.1, 773.0], [81.2, 776.0], [81.3, 778.0], [81.4, 780.0], [81.5, 781.0], [81.6, 783.0], [81.7, 786.0], [81.8, 788.0], [81.9, 789.0], [82.0, 789.0], [82.1, 791.0], [82.2, 794.0], [82.3, 794.0], [82.4, 795.0], [82.5, 799.0], [82.6, 803.0], [82.7, 806.0], [82.8, 807.0], [82.9, 810.0], [83.0, 813.0], [83.1, 814.0], [83.2, 815.0], [83.3, 818.0], [83.4, 819.0], [83.5, 821.0], [83.6, 823.0], [83.7, 825.0], [83.8, 828.0], [83.9, 829.0], [84.0, 830.0], [84.1, 833.0], [84.2, 837.0], [84.3, 838.0], [84.4, 841.0], [84.5, 843.0], [84.6, 847.0], [84.7, 848.0], [84.8, 850.0], [84.9, 853.0], [85.0, 854.0], [85.1, 857.0], [85.2, 860.0], [85.3, 863.0], [85.4, 867.0], [85.5, 870.0], [85.6, 872.0], [85.7, 873.0], [85.8, 875.0], [85.9, 882.0], [86.0, 885.0], [86.1, 887.0], [86.2, 890.0], [86.3, 893.0], [86.4, 898.0], [86.5, 901.0], [86.6, 904.0], [86.7, 907.0], [86.8, 909.0], [86.9, 914.0], [87.0, 915.0], [87.1, 921.0], [87.2, 924.0], [87.3, 929.0], [87.4, 929.0], [87.5, 936.0], [87.6, 940.0], [87.7, 943.0], [87.8, 946.0], [87.9, 954.0], [88.0, 959.0], [88.1, 962.0], [88.2, 969.0], [88.3, 973.0], [88.4, 976.0], [88.5, 981.0], [88.6, 985.0], [88.7, 988.0], [88.8, 990.0], [88.9, 995.0], [89.0, 998.0], [89.1, 1000.0], [89.2, 1002.0], [89.3, 1009.0], [89.4, 1015.0], [89.5, 1020.0], [89.6, 1027.0], [89.7, 1028.0], [89.8, 1036.0], [89.9, 1039.0], [90.0, 1044.0], [90.1, 1051.0], [90.2, 1054.0], [90.3, 1063.0], [90.4, 1065.0], [90.5, 1077.0], [90.6, 1084.0], [90.7, 1089.0], [90.8, 1096.0], [90.9, 1102.0], [91.0, 1108.0], [91.1, 1111.0], [91.2, 1118.0], [91.3, 1127.0], [91.4, 1130.0], [91.5, 1136.0], [91.6, 1139.0], [91.7, 1143.0], [91.8, 1146.0], [91.9, 1151.0], [92.0, 1159.0], [92.1, 1163.0], [92.2, 1168.0], [92.3, 1173.0], [92.4, 1177.0], [92.5, 1180.0], [92.6, 1183.0], [92.7, 1189.0], [92.8, 1198.0], [92.9, 1204.0], [93.0, 1211.0], [93.1, 1215.0], [93.2, 1222.0], [93.3, 1224.0], [93.4, 1227.0], [93.5, 1231.0], [93.6, 1234.0], [93.7, 1247.0], [93.8, 1258.0], [93.9, 1266.0], [94.0, 1269.0], [94.1, 1274.0], [94.2, 1282.0], [94.3, 1287.0], [94.4, 1298.0], [94.5, 1308.0], [94.6, 1316.0], [94.7, 1319.0], [94.8, 1327.0], [94.9, 1331.0], [95.0, 1336.0], [95.1, 1348.0], [95.2, 1365.0], [95.3, 1372.0], [95.4, 1386.0], [95.5, 1398.0], [95.6, 1407.0], [95.7, 1421.0], [95.8, 1432.0], [95.9, 1442.0], [96.0, 1453.0], [96.1, 1460.0], [96.2, 1464.0], [96.3, 1470.0], [96.4, 1476.0], [96.5, 1480.0], [96.6, 1488.0], [96.7, 1497.0], [96.8, 1526.0], [96.9, 1534.0], [97.0, 1548.0], [97.1, 1577.0], [97.2, 1584.0], [97.3, 1609.0], [97.4, 1632.0], [97.5, 1657.0], [97.6, 1707.0], [97.7, 1723.0], [97.8, 1754.0], [97.9, 1785.0], [98.0, 1810.0], [98.1, 1841.0], [98.2, 1855.0], [98.3, 1868.0], [98.4, 1883.0], [98.5, 1912.0], [98.6, 1954.0], [98.7, 1998.0], [98.8, 2019.0], [98.9, 2076.0], [99.0, 2135.0], [99.1, 2199.0], [99.2, 2279.0], [99.3, 2330.0], [99.4, 2354.0], [99.5, 2395.0], [99.6, 2425.0], [99.7, 2467.0], [99.8, 2557.0], [99.9, 2734.0], [100.0, 3120.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1558.0, "series": [{"data": [[0.0, 1558.0], [600.0, 267.0], [700.0, 235.0], [800.0, 207.0], [900.0, 138.0], [1000.0, 92.0], [1100.0, 104.0], [1200.0, 84.0], [1300.0, 59.0], [1400.0, 62.0], [1500.0, 29.0], [100.0, 743.0], [1600.0, 17.0], [1700.0, 19.0], [1800.0, 26.0], [1900.0, 14.0], [2000.0, 13.0], [2100.0, 8.0], [2300.0, 16.0], [2200.0, 6.0], [2400.0, 11.0], [2500.0, 5.0], [2600.0, 2.0], [2700.0, 2.0], [2800.0, 1.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 492.0], [300.0, 358.0], [400.0, 410.0], [500.0, 280.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 173.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3561.0, "series": [{"data": [[0.0, 3561.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1528.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 173.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.857758620689657, "minX": 1.60384524E12, "maxY": 12.0, "series": [{"data": [[1.60384524E12, 11.975100401606415], [1.60384542E12, 11.857758620689657], [1.60384536E12, 12.0], [1.6038453E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384542E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 431.94184938036227, "minX": 1.0, "maxY": 3120.0, "series": [{"data": [[4.0, 1523.5], [8.0, 2395.0], [2.0, 2467.0], [1.0, 2734.0], [9.0, 1332.0], [5.0, 1334.5], [10.0, 1642.5], [11.0, 3120.0], [6.0, 1516.0], [12.0, 431.94184938036227], [3.0, 2311.0], [7.0, 1328.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.981565944507814, 436.32003040668934]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4086.0666666666666, "minX": 1.60384524E12, "maxY": 1335881.0666666667, "series": [{"data": [[1.60384524E12, 1176241.6166666667], [1.60384542E12, 451126.95], [1.60384536E12, 1335881.0666666667], [1.6038453E12, 1287579.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384524E12, 10806.016666666666], [1.60384542E12, 4086.0666666666666], [1.60384536E12, 15760.783333333333], [1.6038453E12, 14838.083333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384542E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 399.62464985994416, "minX": 1.60384524E12, "maxY": 585.5215517241381, "series": [{"data": [[1.60384524E12, 476.8176706827311], [1.60384542E12, 585.5215517241381], [1.60384536E12, 399.62464985994416], [1.6038453E12, 405.6934389140266]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384542E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 399.2229691876752, "minX": 1.60384524E12, "maxY": 585.0948275862071, "series": [{"data": [[1.60384524E12, 476.26987951807286], [1.60384542E12, 585.0948275862071], [1.60384536E12, 399.2229691876752], [1.6038453E12, 405.265837104073]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384542E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008403361344537829, "minX": 1.60384524E12, "maxY": 0.09317269076305228, "series": [{"data": [[1.60384524E12, 0.09317269076305228], [1.60384542E12, 0.017241379310344824], [1.60384536E12, 0.008403361344537829], [1.6038453E12, 0.011312217194570144]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384542E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 34.0, "minX": 1.60384524E12, "maxY": 3120.0, "series": [{"data": [[1.60384524E12, 2340.0], [1.60384542E12, 3120.0], [1.60384536E12, 2726.0], [1.6038453E12, 2692.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384524E12, 44.21399970293045], [1.60384542E12, 40.0], [1.60384536E12, 38.0], [1.6038453E12, 52.84199915647507]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384524E12, 45.33540011882782], [1.60384542E12, 40.0], [1.60384536E12, 38.0], [1.6038453E12, 53.51310016870499]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384524E12, 44.83699985146522], [1.60384542E12, 40.0], [1.60384536E12, 38.0], [1.6038453E12, 53.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384524E12, 37.0], [1.60384542E12, 36.0], [1.60384536E12, 35.0], [1.6038453E12, 34.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384524E12, 388.0], [1.60384542E12, 347.5], [1.60384536E12, 254.0], [1.6038453E12, 235.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384542E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 77.0, "minX": 1.0, "maxY": 2734.0, "series": [{"data": [[2.0, 2088.5], [3.0, 112.0], [5.0, 2370.5], [6.0, 1529.0], [7.0, 1206.0], [8.0, 1427.0], [9.0, 1351.0], [10.0, 1180.0], [11.0, 828.5], [12.0, 870.0], [13.0, 694.5], [14.0, 800.0], [15.0, 765.5], [16.0, 762.0], [17.0, 572.0], [18.0, 655.5], [19.0, 484.5], [20.0, 578.0], [21.0, 408.5], [22.0, 455.5], [23.0, 432.0], [24.0, 455.5], [25.0, 376.0], [26.0, 287.5], [27.0, 345.0], [28.0, 374.5], [30.0, 391.0], [31.0, 292.0], [32.0, 378.5], [34.0, 170.0], [35.0, 254.0], [36.0, 141.0], [37.0, 277.0], [38.0, 93.0], [39.0, 261.5], [41.0, 92.0], [40.0, 215.5], [42.0, 194.0], [43.0, 255.0], [44.0, 221.5], [45.0, 149.0], [46.0, 189.5], [47.0, 116.0], [49.0, 195.0], [51.0, 120.0], [52.0, 116.0], [55.0, 96.0], [54.0, 86.5], [56.0, 163.0], [58.0, 174.5], [61.0, 186.0], [63.0, 92.5], [62.0, 105.0], [65.0, 145.0], [66.0, 179.5], [68.0, 89.5], [70.0, 195.5], [74.0, 77.0], [73.0, 142.0], [75.0, 85.0], [81.0, 97.0], [97.0, 97.0], [1.0, 2734.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 77.0, "minX": 1.0, "maxY": 2734.0, "series": [{"data": [[2.0, 2088.0], [3.0, 112.0], [5.0, 2370.5], [6.0, 1526.0], [7.0, 1204.5], [8.0, 1426.5], [9.0, 1349.0], [10.0, 1180.0], [11.0, 827.5], [12.0, 867.5], [13.0, 693.5], [14.0, 800.0], [15.0, 765.0], [16.0, 762.0], [17.0, 571.0], [18.0, 655.5], [19.0, 481.5], [20.0, 577.0], [21.0, 408.5], [22.0, 453.5], [23.0, 431.0], [24.0, 454.0], [25.0, 374.0], [26.0, 287.0], [27.0, 344.0], [28.0, 373.0], [30.0, 391.0], [31.0, 292.0], [32.0, 378.5], [34.0, 170.0], [35.0, 254.0], [36.0, 141.0], [37.0, 277.0], [38.0, 93.0], [39.0, 261.5], [41.0, 92.0], [40.0, 215.5], [42.0, 193.5], [43.0, 255.0], [44.0, 221.0], [45.0, 149.0], [46.0, 188.5], [47.0, 116.0], [49.0, 195.0], [51.0, 120.0], [52.0, 116.0], [55.0, 96.0], [54.0, 86.5], [56.0, 163.0], [58.0, 174.5], [61.0, 186.0], [63.0, 92.0], [62.0, 105.0], [65.0, 145.0], [66.0, 179.0], [68.0, 89.5], [70.0, 195.5], [74.0, 77.0], [73.0, 142.0], [75.0, 85.0], [81.0, 97.0], [97.0, 97.0], [1.0, 2734.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.533333333333333, "minX": 1.60384524E12, "maxY": 29.75, "series": [{"data": [[1.60384524E12, 20.95], [1.60384542E12, 7.533333333333333], [1.60384536E12, 29.75], [1.6038453E12, 29.466666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384542E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.733333333333333, "minX": 1.60384524E12, "maxY": 29.75, "series": [{"data": [[1.60384524E12, 20.75], [1.60384542E12, 7.733333333333333], [1.60384536E12, 29.75], [1.6038453E12, 29.466666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384542E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.733333333333333, "minX": 1.60384524E12, "maxY": 29.75, "series": [{"data": [[1.60384524E12, 20.75], [1.60384542E12, 7.733333333333333], [1.60384536E12, 29.75], [1.6038453E12, 29.466666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384542E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.733333333333333, "minX": 1.60384524E12, "maxY": 29.75, "series": [{"data": [[1.60384524E12, 20.75], [1.60384542E12, 7.733333333333333], [1.60384536E12, 29.75], [1.6038453E12, 29.466666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384542E12, "title": "Total Transactions Per Second"}},
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

