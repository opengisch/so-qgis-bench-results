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
        data: {"result": {"minY": 34.0, "minX": 0.0, "maxY": 3668.0, "series": [{"data": [[0.0, 34.0], [0.1, 36.0], [0.2, 37.0], [0.3, 37.0], [0.4, 38.0], [0.5, 38.0], [0.6, 38.0], [0.7, 39.0], [0.8, 39.0], [0.9, 39.0], [1.0, 40.0], [1.1, 40.0], [1.2, 40.0], [1.3, 40.0], [1.4, 41.0], [1.5, 41.0], [1.6, 41.0], [1.7, 42.0], [1.8, 42.0], [1.9, 42.0], [2.0, 42.0], [2.1, 43.0], [2.2, 43.0], [2.3, 43.0], [2.4, 44.0], [2.5, 44.0], [2.6, 44.0], [2.7, 44.0], [2.8, 44.0], [2.9, 45.0], [3.0, 45.0], [3.1, 45.0], [3.2, 45.0], [3.3, 46.0], [3.4, 46.0], [3.5, 46.0], [3.6, 47.0], [3.7, 47.0], [3.8, 47.0], [3.9, 48.0], [4.0, 48.0], [4.1, 48.0], [4.2, 49.0], [4.3, 49.0], [4.4, 49.0], [4.5, 49.0], [4.6, 50.0], [4.7, 51.0], [4.8, 52.0], [4.9, 52.0], [5.0, 52.0], [5.1, 53.0], [5.2, 53.0], [5.3, 54.0], [5.4, 56.0], [5.5, 58.0], [5.6, 58.0], [5.7, 59.0], [5.8, 59.0], [5.9, 60.0], [6.0, 61.0], [6.1, 61.0], [6.2, 62.0], [6.3, 63.0], [6.4, 63.0], [6.5, 64.0], [6.6, 64.0], [6.7, 64.0], [6.8, 65.0], [6.9, 65.0], [7.0, 66.0], [7.1, 66.0], [7.2, 67.0], [7.3, 67.0], [7.4, 67.0], [7.5, 68.0], [7.6, 68.0], [7.7, 69.0], [7.8, 69.0], [7.9, 69.0], [8.0, 70.0], [8.1, 70.0], [8.2, 70.0], [8.3, 70.0], [8.4, 71.0], [8.5, 71.0], [8.6, 71.0], [8.7, 72.0], [8.8, 72.0], [8.9, 72.0], [9.0, 72.0], [9.1, 72.0], [9.2, 73.0], [9.3, 73.0], [9.4, 73.0], [9.5, 73.0], [9.6, 73.0], [9.7, 73.0], [9.8, 74.0], [9.9, 74.0], [10.0, 74.0], [10.1, 74.0], [10.2, 74.0], [10.3, 75.0], [10.4, 75.0], [10.5, 75.0], [10.6, 75.0], [10.7, 75.0], [10.8, 75.0], [10.9, 75.0], [11.0, 75.0], [11.1, 76.0], [11.2, 76.0], [11.3, 76.0], [11.4, 76.0], [11.5, 76.0], [11.6, 76.0], [11.7, 76.0], [11.8, 76.0], [11.9, 77.0], [12.0, 77.0], [12.1, 77.0], [12.2, 77.0], [12.3, 77.0], [12.4, 77.0], [12.5, 77.0], [12.6, 77.0], [12.7, 77.0], [12.8, 77.0], [12.9, 78.0], [13.0, 78.0], [13.1, 78.0], [13.2, 78.0], [13.3, 78.0], [13.4, 78.0], [13.5, 78.0], [13.6, 78.0], [13.7, 78.0], [13.8, 78.0], [13.9, 78.0], [14.0, 79.0], [14.1, 79.0], [14.2, 79.0], [14.3, 79.0], [14.4, 79.0], [14.5, 79.0], [14.6, 79.0], [14.7, 79.0], [14.8, 79.0], [14.9, 79.0], [15.0, 80.0], [15.1, 80.0], [15.2, 80.0], [15.3, 80.0], [15.4, 80.0], [15.5, 80.0], [15.6, 80.0], [15.7, 80.0], [15.8, 80.0], [15.9, 80.0], [16.0, 80.0], [16.1, 80.0], [16.2, 81.0], [16.3, 81.0], [16.4, 81.0], [16.5, 81.0], [16.6, 81.0], [16.7, 81.0], [16.8, 81.0], [16.9, 81.0], [17.0, 81.0], [17.1, 81.0], [17.2, 81.0], [17.3, 82.0], [17.4, 82.0], [17.5, 82.0], [17.6, 82.0], [17.7, 82.0], [17.8, 82.0], [17.9, 82.0], [18.0, 82.0], [18.1, 82.0], [18.2, 83.0], [18.3, 83.0], [18.4, 83.0], [18.5, 83.0], [18.6, 83.0], [18.7, 83.0], [18.8, 83.0], [18.9, 83.0], [19.0, 83.0], [19.1, 84.0], [19.2, 84.0], [19.3, 84.0], [19.4, 84.0], [19.5, 84.0], [19.6, 84.0], [19.7, 84.0], [19.8, 84.0], [19.9, 84.0], [20.0, 84.0], [20.1, 85.0], [20.2, 85.0], [20.3, 85.0], [20.4, 85.0], [20.5, 85.0], [20.6, 85.0], [20.7, 85.0], [20.8, 85.0], [20.9, 85.0], [21.0, 85.0], [21.1, 85.0], [21.2, 86.0], [21.3, 86.0], [21.4, 86.0], [21.5, 86.0], [21.6, 86.0], [21.7, 86.0], [21.8, 86.0], [21.9, 86.0], [22.0, 86.0], [22.1, 87.0], [22.2, 87.0], [22.3, 87.0], [22.4, 87.0], [22.5, 87.0], [22.6, 87.0], [22.7, 87.0], [22.8, 87.0], [22.9, 87.0], [23.0, 88.0], [23.1, 88.0], [23.2, 88.0], [23.3, 88.0], [23.4, 88.0], [23.5, 88.0], [23.6, 88.0], [23.7, 88.0], [23.8, 88.0], [23.9, 89.0], [24.0, 89.0], [24.1, 89.0], [24.2, 89.0], [24.3, 89.0], [24.4, 89.0], [24.5, 89.0], [24.6, 89.0], [24.7, 89.0], [24.8, 89.0], [24.9, 90.0], [25.0, 90.0], [25.1, 90.0], [25.2, 90.0], [25.3, 90.0], [25.4, 90.0], [25.5, 90.0], [25.6, 90.0], [25.7, 90.0], [25.8, 91.0], [25.9, 91.0], [26.0, 91.0], [26.1, 91.0], [26.2, 91.0], [26.3, 91.0], [26.4, 92.0], [26.5, 92.0], [26.6, 92.0], [26.7, 92.0], [26.8, 92.0], [26.9, 93.0], [27.0, 93.0], [27.1, 93.0], [27.2, 93.0], [27.3, 93.0], [27.4, 94.0], [27.5, 94.0], [27.6, 94.0], [27.7, 94.0], [27.8, 94.0], [27.9, 94.0], [28.0, 95.0], [28.1, 95.0], [28.2, 95.0], [28.3, 95.0], [28.4, 95.0], [28.5, 96.0], [28.6, 96.0], [28.7, 96.0], [28.8, 96.0], [28.9, 97.0], [29.0, 97.0], [29.1, 97.0], [29.2, 97.0], [29.3, 98.0], [29.4, 98.0], [29.5, 98.0], [29.6, 98.0], [29.7, 99.0], [29.8, 99.0], [29.9, 99.0], [30.0, 100.0], [30.1, 100.0], [30.2, 100.0], [30.3, 100.0], [30.4, 101.0], [30.5, 101.0], [30.6, 102.0], [30.7, 102.0], [30.8, 102.0], [30.9, 103.0], [31.0, 103.0], [31.1, 103.0], [31.2, 104.0], [31.3, 104.0], [31.4, 105.0], [31.5, 105.0], [31.6, 106.0], [31.7, 106.0], [31.8, 107.0], [31.9, 107.0], [32.0, 107.0], [32.1, 107.0], [32.2, 108.0], [32.3, 108.0], [32.4, 108.0], [32.5, 109.0], [32.6, 109.0], [32.7, 110.0], [32.8, 110.0], [32.9, 111.0], [33.0, 112.0], [33.1, 112.0], [33.2, 112.0], [33.3, 113.0], [33.4, 114.0], [33.5, 114.0], [33.6, 115.0], [33.7, 115.0], [33.8, 116.0], [33.9, 116.0], [34.0, 116.0], [34.1, 117.0], [34.2, 117.0], [34.3, 118.0], [34.4, 118.0], [34.5, 119.0], [34.6, 119.0], [34.7, 120.0], [34.8, 120.0], [34.9, 121.0], [35.0, 121.0], [35.1, 121.0], [35.2, 122.0], [35.3, 122.0], [35.4, 122.0], [35.5, 123.0], [35.6, 124.0], [35.7, 125.0], [35.8, 125.0], [35.9, 126.0], [36.0, 127.0], [36.1, 127.0], [36.2, 128.0], [36.3, 129.0], [36.4, 129.0], [36.5, 130.0], [36.6, 131.0], [36.7, 133.0], [36.8, 134.0], [36.9, 135.0], [37.0, 136.0], [37.1, 138.0], [37.2, 138.0], [37.3, 139.0], [37.4, 140.0], [37.5, 141.0], [37.6, 142.0], [37.7, 143.0], [37.8, 143.0], [37.9, 145.0], [38.0, 146.0], [38.1, 147.0], [38.2, 148.0], [38.3, 148.0], [38.4, 149.0], [38.5, 150.0], [38.6, 151.0], [38.7, 152.0], [38.8, 153.0], [38.9, 153.0], [39.0, 154.0], [39.1, 155.0], [39.2, 156.0], [39.3, 156.0], [39.4, 158.0], [39.5, 159.0], [39.6, 160.0], [39.7, 161.0], [39.8, 161.0], [39.9, 163.0], [40.0, 164.0], [40.1, 165.0], [40.2, 165.0], [40.3, 166.0], [40.4, 167.0], [40.5, 168.0], [40.6, 169.0], [40.7, 170.0], [40.8, 171.0], [40.9, 174.0], [41.0, 175.0], [41.1, 176.0], [41.2, 177.0], [41.3, 177.0], [41.4, 177.0], [41.5, 178.0], [41.6, 180.0], [41.7, 181.0], [41.8, 182.0], [41.9, 183.0], [42.0, 185.0], [42.1, 185.0], [42.2, 187.0], [42.3, 188.0], [42.4, 189.0], [42.5, 190.0], [42.6, 191.0], [42.7, 191.0], [42.8, 193.0], [42.9, 195.0], [43.0, 195.0], [43.1, 196.0], [43.2, 199.0], [43.3, 200.0], [43.4, 200.0], [43.5, 201.0], [43.6, 203.0], [43.7, 203.0], [43.8, 204.0], [43.9, 205.0], [44.0, 207.0], [44.1, 209.0], [44.2, 210.0], [44.3, 211.0], [44.4, 212.0], [44.5, 213.0], [44.6, 213.0], [44.7, 215.0], [44.8, 215.0], [44.9, 216.0], [45.0, 218.0], [45.1, 220.0], [45.2, 221.0], [45.3, 222.0], [45.4, 223.0], [45.5, 225.0], [45.6, 226.0], [45.7, 227.0], [45.8, 228.0], [45.9, 229.0], [46.0, 231.0], [46.1, 232.0], [46.2, 235.0], [46.3, 235.0], [46.4, 236.0], [46.5, 238.0], [46.6, 239.0], [46.7, 240.0], [46.8, 241.0], [46.9, 242.0], [47.0, 243.0], [47.1, 243.0], [47.2, 244.0], [47.3, 245.0], [47.4, 246.0], [47.5, 246.0], [47.6, 247.0], [47.7, 249.0], [47.8, 250.0], [47.9, 252.0], [48.0, 252.0], [48.1, 254.0], [48.2, 256.0], [48.3, 256.0], [48.4, 257.0], [48.5, 258.0], [48.6, 259.0], [48.7, 260.0], [48.8, 261.0], [48.9, 262.0], [49.0, 263.0], [49.1, 264.0], [49.2, 264.0], [49.3, 265.0], [49.4, 266.0], [49.5, 267.0], [49.6, 269.0], [49.7, 270.0], [49.8, 270.0], [49.9, 272.0], [50.0, 273.0], [50.1, 274.0], [50.2, 275.0], [50.3, 276.0], [50.4, 276.0], [50.5, 278.0], [50.6, 279.0], [50.7, 280.0], [50.8, 281.0], [50.9, 282.0], [51.0, 282.0], [51.1, 284.0], [51.2, 285.0], [51.3, 286.0], [51.4, 286.0], [51.5, 287.0], [51.6, 288.0], [51.7, 289.0], [51.8, 290.0], [51.9, 290.0], [52.0, 292.0], [52.1, 293.0], [52.2, 294.0], [52.3, 295.0], [52.4, 297.0], [52.5, 298.0], [52.6, 299.0], [52.7, 300.0], [52.8, 300.0], [52.9, 302.0], [53.0, 303.0], [53.1, 306.0], [53.2, 306.0], [53.3, 308.0], [53.4, 310.0], [53.5, 311.0], [53.6, 312.0], [53.7, 313.0], [53.8, 315.0], [53.9, 316.0], [54.0, 318.0], [54.1, 320.0], [54.2, 320.0], [54.3, 321.0], [54.4, 322.0], [54.5, 323.0], [54.6, 324.0], [54.7, 326.0], [54.8, 327.0], [54.9, 329.0], [55.0, 330.0], [55.1, 332.0], [55.2, 334.0], [55.3, 335.0], [55.4, 337.0], [55.5, 339.0], [55.6, 340.0], [55.7, 341.0], [55.8, 343.0], [55.9, 345.0], [56.0, 346.0], [56.1, 347.0], [56.2, 349.0], [56.3, 350.0], [56.4, 351.0], [56.5, 353.0], [56.6, 355.0], [56.7, 356.0], [56.8, 360.0], [56.9, 361.0], [57.0, 363.0], [57.1, 366.0], [57.2, 368.0], [57.3, 370.0], [57.4, 373.0], [57.5, 374.0], [57.6, 375.0], [57.7, 377.0], [57.8, 378.0], [57.9, 378.0], [58.0, 379.0], [58.1, 380.0], [58.2, 381.0], [58.3, 382.0], [58.4, 384.0], [58.5, 385.0], [58.6, 387.0], [58.7, 388.0], [58.8, 392.0], [58.9, 393.0], [59.0, 394.0], [59.1, 394.0], [59.2, 396.0], [59.3, 397.0], [59.4, 398.0], [59.5, 399.0], [59.6, 401.0], [59.7, 403.0], [59.8, 403.0], [59.9, 406.0], [60.0, 407.0], [60.1, 409.0], [60.2, 411.0], [60.3, 412.0], [60.4, 414.0], [60.5, 416.0], [60.6, 416.0], [60.7, 419.0], [60.8, 420.0], [60.9, 421.0], [61.0, 422.0], [61.1, 425.0], [61.2, 427.0], [61.3, 428.0], [61.4, 429.0], [61.5, 431.0], [61.6, 431.0], [61.7, 432.0], [61.8, 434.0], [61.9, 435.0], [62.0, 435.0], [62.1, 436.0], [62.2, 438.0], [62.3, 440.0], [62.4, 442.0], [62.5, 443.0], [62.6, 444.0], [62.7, 446.0], [62.8, 447.0], [62.9, 447.0], [63.0, 449.0], [63.1, 450.0], [63.2, 451.0], [63.3, 452.0], [63.4, 453.0], [63.5, 454.0], [63.6, 455.0], [63.7, 457.0], [63.8, 458.0], [63.9, 460.0], [64.0, 462.0], [64.1, 462.0], [64.2, 464.0], [64.3, 465.0], [64.4, 466.0], [64.5, 467.0], [64.6, 469.0], [64.7, 470.0], [64.8, 472.0], [64.9, 474.0], [65.0, 475.0], [65.1, 476.0], [65.2, 477.0], [65.3, 478.0], [65.4, 479.0], [65.5, 480.0], [65.6, 482.0], [65.7, 483.0], [65.8, 484.0], [65.9, 484.0], [66.0, 485.0], [66.1, 486.0], [66.2, 488.0], [66.3, 488.0], [66.4, 490.0], [66.5, 493.0], [66.6, 497.0], [66.7, 497.0], [66.8, 499.0], [66.9, 501.0], [67.0, 503.0], [67.1, 504.0], [67.2, 507.0], [67.3, 508.0], [67.4, 510.0], [67.5, 512.0], [67.6, 513.0], [67.7, 514.0], [67.8, 516.0], [67.9, 518.0], [68.0, 518.0], [68.1, 519.0], [68.2, 520.0], [68.3, 521.0], [68.4, 522.0], [68.5, 524.0], [68.6, 526.0], [68.7, 527.0], [68.8, 529.0], [68.9, 531.0], [69.0, 532.0], [69.1, 534.0], [69.2, 535.0], [69.3, 539.0], [69.4, 541.0], [69.5, 542.0], [69.6, 543.0], [69.7, 546.0], [69.8, 548.0], [69.9, 549.0], [70.0, 550.0], [70.1, 552.0], [70.2, 553.0], [70.3, 556.0], [70.4, 557.0], [70.5, 560.0], [70.6, 562.0], [70.7, 567.0], [70.8, 569.0], [70.9, 573.0], [71.0, 575.0], [71.1, 576.0], [71.2, 578.0], [71.3, 580.0], [71.4, 582.0], [71.5, 583.0], [71.6, 585.0], [71.7, 586.0], [71.8, 588.0], [71.9, 589.0], [72.0, 590.0], [72.1, 591.0], [72.2, 593.0], [72.3, 596.0], [72.4, 597.0], [72.5, 598.0], [72.6, 600.0], [72.7, 601.0], [72.8, 602.0], [72.9, 603.0], [73.0, 603.0], [73.1, 605.0], [73.2, 607.0], [73.3, 609.0], [73.4, 611.0], [73.5, 612.0], [73.6, 614.0], [73.7, 616.0], [73.8, 618.0], [73.9, 620.0], [74.0, 622.0], [74.1, 625.0], [74.2, 626.0], [74.3, 628.0], [74.4, 630.0], [74.5, 632.0], [74.6, 635.0], [74.7, 637.0], [74.8, 640.0], [74.9, 642.0], [75.0, 644.0], [75.1, 645.0], [75.2, 647.0], [75.3, 649.0], [75.4, 652.0], [75.5, 654.0], [75.6, 656.0], [75.7, 659.0], [75.8, 660.0], [75.9, 663.0], [76.0, 664.0], [76.1, 667.0], [76.2, 668.0], [76.3, 670.0], [76.4, 674.0], [76.5, 677.0], [76.6, 679.0], [76.7, 680.0], [76.8, 682.0], [76.9, 683.0], [77.0, 685.0], [77.1, 688.0], [77.2, 690.0], [77.3, 692.0], [77.4, 692.0], [77.5, 695.0], [77.6, 697.0], [77.7, 699.0], [77.8, 701.0], [77.9, 702.0], [78.0, 705.0], [78.1, 707.0], [78.2, 709.0], [78.3, 712.0], [78.4, 715.0], [78.5, 717.0], [78.6, 719.0], [78.7, 721.0], [78.8, 723.0], [78.9, 724.0], [79.0, 726.0], [79.1, 728.0], [79.2, 731.0], [79.3, 733.0], [79.4, 735.0], [79.5, 739.0], [79.6, 741.0], [79.7, 742.0], [79.8, 747.0], [79.9, 750.0], [80.0, 751.0], [80.1, 754.0], [80.2, 756.0], [80.3, 758.0], [80.4, 763.0], [80.5, 765.0], [80.6, 768.0], [80.7, 770.0], [80.8, 772.0], [80.9, 774.0], [81.0, 776.0], [81.1, 779.0], [81.2, 782.0], [81.3, 785.0], [81.4, 786.0], [81.5, 787.0], [81.6, 787.0], [81.7, 791.0], [81.8, 793.0], [81.9, 795.0], [82.0, 800.0], [82.1, 801.0], [82.2, 802.0], [82.3, 803.0], [82.4, 805.0], [82.5, 806.0], [82.6, 809.0], [82.7, 810.0], [82.8, 812.0], [82.9, 813.0], [83.0, 815.0], [83.1, 817.0], [83.2, 821.0], [83.3, 824.0], [83.4, 826.0], [83.5, 829.0], [83.6, 832.0], [83.7, 837.0], [83.8, 839.0], [83.9, 842.0], [84.0, 845.0], [84.1, 847.0], [84.2, 848.0], [84.3, 850.0], [84.4, 851.0], [84.5, 852.0], [84.6, 853.0], [84.7, 854.0], [84.8, 858.0], [84.9, 860.0], [85.0, 864.0], [85.1, 866.0], [85.2, 868.0], [85.3, 870.0], [85.4, 871.0], [85.5, 874.0], [85.6, 875.0], [85.7, 878.0], [85.8, 883.0], [85.9, 887.0], [86.0, 891.0], [86.1, 895.0], [86.2, 897.0], [86.3, 898.0], [86.4, 901.0], [86.5, 902.0], [86.6, 905.0], [86.7, 908.0], [86.8, 912.0], [86.9, 916.0], [87.0, 921.0], [87.1, 923.0], [87.2, 928.0], [87.3, 931.0], [87.4, 934.0], [87.5, 941.0], [87.6, 949.0], [87.7, 952.0], [87.8, 955.0], [87.9, 956.0], [88.0, 962.0], [88.1, 965.0], [88.2, 968.0], [88.3, 973.0], [88.4, 976.0], [88.5, 981.0], [88.6, 985.0], [88.7, 991.0], [88.8, 997.0], [88.9, 1002.0], [89.0, 1008.0], [89.1, 1013.0], [89.2, 1018.0], [89.3, 1021.0], [89.4, 1025.0], [89.5, 1028.0], [89.6, 1034.0], [89.7, 1037.0], [89.8, 1040.0], [89.9, 1048.0], [90.0, 1054.0], [90.1, 1059.0], [90.2, 1061.0], [90.3, 1066.0], [90.4, 1071.0], [90.5, 1076.0], [90.6, 1085.0], [90.7, 1089.0], [90.8, 1093.0], [90.9, 1101.0], [91.0, 1105.0], [91.1, 1107.0], [91.2, 1116.0], [91.3, 1121.0], [91.4, 1124.0], [91.5, 1128.0], [91.6, 1132.0], [91.7, 1135.0], [91.8, 1138.0], [91.9, 1143.0], [92.0, 1153.0], [92.1, 1162.0], [92.2, 1165.0], [92.3, 1173.0], [92.4, 1175.0], [92.5, 1179.0], [92.6, 1183.0], [92.7, 1187.0], [92.8, 1195.0], [92.9, 1200.0], [93.0, 1204.0], [93.1, 1209.0], [93.2, 1214.0], [93.3, 1225.0], [93.4, 1232.0], [93.5, 1236.0], [93.6, 1239.0], [93.7, 1245.0], [93.8, 1249.0], [93.9, 1260.0], [94.0, 1267.0], [94.1, 1274.0], [94.2, 1279.0], [94.3, 1291.0], [94.4, 1298.0], [94.5, 1302.0], [94.6, 1305.0], [94.7, 1318.0], [94.8, 1326.0], [94.9, 1336.0], [95.0, 1343.0], [95.1, 1356.0], [95.2, 1366.0], [95.3, 1385.0], [95.4, 1389.0], [95.5, 1396.0], [95.6, 1405.0], [95.7, 1417.0], [95.8, 1422.0], [95.9, 1439.0], [96.0, 1443.0], [96.1, 1453.0], [96.2, 1464.0], [96.3, 1488.0], [96.4, 1496.0], [96.5, 1502.0], [96.6, 1516.0], [96.7, 1524.0], [96.8, 1535.0], [96.9, 1539.0], [97.0, 1554.0], [97.1, 1568.0], [97.2, 1589.0], [97.3, 1608.0], [97.4, 1629.0], [97.5, 1649.0], [97.6, 1675.0], [97.7, 1708.0], [97.8, 1737.0], [97.9, 1767.0], [98.0, 1791.0], [98.1, 1828.0], [98.2, 1853.0], [98.3, 1891.0], [98.4, 1912.0], [98.5, 1935.0], [98.6, 1967.0], [98.7, 2025.0], [98.8, 2038.0], [98.9, 2077.0], [99.0, 2117.0], [99.1, 2166.0], [99.2, 2231.0], [99.3, 2289.0], [99.4, 2353.0], [99.5, 2409.0], [99.6, 2451.0], [99.7, 2533.0], [99.8, 2613.0], [99.9, 2963.0], [100.0, 3668.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1578.0, "series": [{"data": [[0.0, 1578.0], [600.0, 272.0], [700.0, 225.0], [800.0, 231.0], [900.0, 130.0], [1000.0, 107.0], [1100.0, 106.0], [1200.0, 83.0], [1300.0, 56.0], [1400.0, 49.0], [1500.0, 41.0], [100.0, 700.0], [1600.0, 21.0], [1700.0, 22.0], [1800.0, 15.0], [1900.0, 16.0], [2000.0, 16.0], [2100.0, 11.0], [2300.0, 8.0], [2200.0, 9.0], [2400.0, 8.0], [2500.0, 7.0], [2600.0, 2.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 3.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 494.0], [3500.0, 1.0], [3600.0, 2.0], [300.0, 360.0], [400.0, 385.0], [500.0, 300.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 186.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3519.0, "series": [{"data": [[0.0, 3519.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1557.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 186.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.92280701754386, "minX": 1.60422996E12, "maxY": 12.0, "series": [{"data": [[1.60423002E12, 12.0], [1.60423014E12, 11.92280701754386], [1.60422996E12, 11.971623155505103], [1.60423008E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423014E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 435.19317315026757, "minX": 1.0, "maxY": 3570.0, "series": [{"data": [[8.0, 2533.0], [4.0, 2289.0], [2.0, 2827.0], [1.0, 3570.0], [9.0, 1259.5], [5.0, 1943.0], [10.0, 1921.5], [11.0, 700.6666666666667], [6.0, 1259.5], [12.0, 435.19317315026757], [3.0, 2427.0], [7.0, 1419.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.982706195362992, 439.6628658304822]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7542.383333333333, "minX": 1.60422996E12, "maxY": 1374389.2333333334, "series": [{"data": [[1.60423002E12, 1374389.2333333334], [1.60423014E12, 670698.4166666666], [1.60422996E12, 832419.3666666667], [1.60423008E12, 1373651.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423002E12, 15554.466666666667], [1.60423014E12, 7542.383333333333], [1.60422996E12, 7641.066666666667], [1.60423008E12, 14753.033333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423014E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 388.7218614718612, "minX": 1.60422996E12, "maxY": 522.3677639046538, "series": [{"data": [[1.60423002E12, 388.7218614718612], [1.60423014E12, 485.74970760233947], [1.60422996E12, 522.3677639046538], [1.60423008E12, 428.8593563766389]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423014E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 388.2895021645021, "minX": 1.60422996E12, "maxY": 521.7854710556195, "series": [{"data": [[1.60423002E12, 388.2895021645021], [1.60423014E12, 485.35087719298235], [1.60422996E12, 521.7854710556195], [1.60423008E12, 428.42729439809324]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423014E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009356725146198843, "minX": 1.60422996E12, "maxY": 0.15437003405221333, "series": [{"data": [[1.60423002E12, 0.015151515151515126], [1.60423014E12, 0.009356725146198843], [1.60422996E12, 0.15437003405221333], [1.60423008E12, 0.011918951132300362]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423014E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 34.0, "minX": 1.60422996E12, "maxY": 3668.0, "series": [{"data": [[1.60423002E12, 3010.0], [1.60423014E12, 3668.0], [1.60422996E12, 2363.0], [1.60423008E12, 3132.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423002E12, 44.0], [1.60423014E12, 37.703999795913695], [1.60422996E12, 60.937999789714816], [1.60423008E12, 38.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423002E12, 45.0], [1.60423014E12, 38.0], [1.60422996E12, 61.0], [1.60423008E12, 38.62210016012192]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423002E12, 44.56549977958203], [1.60423014E12, 38.0], [1.60422996E12, 61.0], [1.60423008E12, 38.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423002E12, 38.0], [1.60423014E12, 35.0], [1.60422996E12, 53.0], [1.60423008E12, 34.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423002E12, 227.0], [1.60423014E12, 331.0], [1.60422996E12, 425.0], [1.60423008E12, 269.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423014E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 78.0, "minX": 2.0, "maxY": 3198.5, "series": [{"data": [[2.0, 3198.5], [4.0, 1539.5], [5.0, 2358.0], [6.0, 1533.0], [7.0, 1443.5], [8.0, 1279.0], [9.0, 1321.0], [10.0, 1171.0], [11.0, 978.0], [12.0, 1013.0], [13.0, 813.5], [14.0, 787.0], [15.0, 705.0], [16.0, 733.0], [17.0, 598.0], [18.0, 646.5], [19.0, 508.0], [20.0, 521.0], [21.0, 583.0], [22.0, 453.5], [23.0, 405.5], [24.0, 481.5], [25.0, 435.0], [26.0, 309.0], [27.0, 350.0], [28.0, 341.0], [29.0, 308.0], [30.0, 111.5], [31.0, 119.0], [33.0, 90.0], [32.0, 78.0], [35.0, 196.5], [34.0, 249.5], [36.0, 194.5], [37.0, 101.0], [38.0, 152.0], [39.0, 262.0], [41.0, 173.0], [40.0, 87.0], [42.0, 212.5], [43.0, 183.0], [44.0, 88.0], [46.0, 145.5], [47.0, 299.0], [49.0, 155.0], [51.0, 90.0], [50.0, 238.0], [52.0, 98.5], [53.0, 165.0], [54.0, 121.5], [55.0, 110.0], [56.0, 156.0], [57.0, 144.0], [60.0, 203.5], [61.0, 168.0], [65.0, 94.0], [64.0, 103.0], [70.0, 177.0], [74.0, 84.5], [75.0, 156.0], [72.0, 121.5], [76.0, 94.0], [77.0, 83.0], [82.0, 90.5], [88.0, 96.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 77.0, "minX": 2.0, "maxY": 3198.5, "series": [{"data": [[2.0, 3198.5], [4.0, 1538.0], [5.0, 2357.5], [6.0, 1532.0], [7.0, 1443.5], [8.0, 1277.0], [9.0, 1321.0], [10.0, 1167.5], [11.0, 976.0], [12.0, 1012.5], [13.0, 813.0], [14.0, 786.0], [15.0, 704.0], [16.0, 732.5], [17.0, 598.0], [18.0, 646.0], [19.0, 508.0], [20.0, 519.5], [21.0, 583.0], [22.0, 453.0], [23.0, 405.0], [24.0, 481.0], [25.0, 435.0], [26.0, 308.0], [27.0, 350.0], [28.0, 341.0], [29.0, 303.0], [30.0, 111.5], [31.0, 118.0], [33.0, 90.0], [32.0, 77.0], [35.0, 195.5], [34.0, 249.5], [36.0, 194.0], [37.0, 101.0], [38.0, 152.0], [39.0, 262.0], [41.0, 172.5], [40.0, 86.5], [42.0, 212.5], [43.0, 182.5], [44.0, 88.0], [46.0, 145.5], [47.0, 299.0], [49.0, 155.0], [51.0, 90.0], [50.0, 238.0], [52.0, 98.5], [53.0, 164.0], [54.0, 121.5], [55.0, 110.0], [56.0, 156.0], [57.0, 144.0], [60.0, 203.5], [61.0, 167.0], [65.0, 94.0], [64.0, 103.0], [70.0, 176.5], [74.0, 84.5], [75.0, 156.0], [72.0, 121.5], [76.0, 94.0], [77.0, 83.0], [82.0, 90.5], [88.0, 96.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 14.05, "minX": 1.60422996E12, "maxY": 30.8, "series": [{"data": [[1.60423002E12, 30.8], [1.60423014E12, 14.05], [1.60422996E12, 14.883333333333333], [1.60423008E12, 27.966666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423014E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 14.25, "minX": 1.60422996E12, "maxY": 30.8, "series": [{"data": [[1.60423002E12, 30.8], [1.60423014E12, 14.25], [1.60422996E12, 14.683333333333334], [1.60423008E12, 27.966666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423014E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 14.25, "minX": 1.60422996E12, "maxY": 30.8, "series": [{"data": [[1.60423002E12, 30.8], [1.60423014E12, 14.25], [1.60422996E12, 14.683333333333334], [1.60423008E12, 27.966666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423014E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 14.25, "minX": 1.60422996E12, "maxY": 30.8, "series": [{"data": [[1.60423002E12, 30.8], [1.60423014E12, 14.25], [1.60422996E12, 14.683333333333334], [1.60423008E12, 27.966666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423014E12, "title": "Total Transactions Per Second"}},
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

