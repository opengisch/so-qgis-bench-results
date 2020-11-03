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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 5654.0, "series": [{"data": [[0.0, 5.0], [0.1, 7.0], [0.2, 8.0], [0.3, 9.0], [0.4, 10.0], [0.5, 10.0], [0.6, 11.0], [0.7, 11.0], [0.8, 12.0], [0.9, 13.0], [1.0, 13.0], [1.1, 14.0], [1.2, 14.0], [1.3, 14.0], [1.4, 14.0], [1.5, 14.0], [1.6, 15.0], [1.7, 15.0], [1.8, 15.0], [1.9, 15.0], [2.0, 15.0], [2.1, 15.0], [2.2, 16.0], [2.3, 16.0], [2.4, 16.0], [2.5, 16.0], [2.6, 16.0], [2.7, 17.0], [2.8, 17.0], [2.9, 17.0], [3.0, 17.0], [3.1, 17.0], [3.2, 17.0], [3.3, 18.0], [3.4, 18.0], [3.5, 18.0], [3.6, 18.0], [3.7, 18.0], [3.8, 18.0], [3.9, 18.0], [4.0, 18.0], [4.1, 18.0], [4.2, 19.0], [4.3, 19.0], [4.4, 19.0], [4.5, 19.0], [4.6, 19.0], [4.7, 19.0], [4.8, 19.0], [4.9, 20.0], [5.0, 20.0], [5.1, 20.0], [5.2, 20.0], [5.3, 20.0], [5.4, 20.0], [5.5, 20.0], [5.6, 20.0], [5.7, 20.0], [5.8, 20.0], [5.9, 21.0], [6.0, 21.0], [6.1, 21.0], [6.2, 21.0], [6.3, 21.0], [6.4, 21.0], [6.5, 21.0], [6.6, 21.0], [6.7, 21.0], [6.8, 22.0], [6.9, 22.0], [7.0, 22.0], [7.1, 22.0], [7.2, 22.0], [7.3, 22.0], [7.4, 22.0], [7.5, 23.0], [7.6, 23.0], [7.7, 23.0], [7.8, 23.0], [7.9, 23.0], [8.0, 23.0], [8.1, 23.0], [8.2, 23.0], [8.3, 23.0], [8.4, 24.0], [8.5, 24.0], [8.6, 24.0], [8.7, 24.0], [8.8, 24.0], [8.9, 24.0], [9.0, 24.0], [9.1, 25.0], [9.2, 25.0], [9.3, 25.0], [9.4, 25.0], [9.5, 25.0], [9.6, 25.0], [9.7, 25.0], [9.8, 26.0], [9.9, 26.0], [10.0, 26.0], [10.1, 26.0], [10.2, 26.0], [10.3, 26.0], [10.4, 26.0], [10.5, 27.0], [10.6, 27.0], [10.7, 27.0], [10.8, 27.0], [10.9, 27.0], [11.0, 27.0], [11.1, 27.0], [11.2, 27.0], [11.3, 28.0], [11.4, 28.0], [11.5, 28.0], [11.6, 28.0], [11.7, 28.0], [11.8, 28.0], [11.9, 29.0], [12.0, 29.0], [12.1, 29.0], [12.2, 29.0], [12.3, 29.0], [12.4, 30.0], [12.5, 30.0], [12.6, 30.0], [12.7, 30.0], [12.8, 30.0], [12.9, 30.0], [13.0, 30.0], [13.1, 31.0], [13.2, 31.0], [13.3, 31.0], [13.4, 31.0], [13.5, 32.0], [13.6, 32.0], [13.7, 32.0], [13.8, 32.0], [13.9, 32.0], [14.0, 32.0], [14.1, 33.0], [14.2, 33.0], [14.3, 33.0], [14.4, 33.0], [14.5, 33.0], [14.6, 34.0], [14.7, 34.0], [14.8, 34.0], [14.9, 34.0], [15.0, 35.0], [15.1, 35.0], [15.2, 35.0], [15.3, 36.0], [15.4, 36.0], [15.5, 36.0], [15.6, 36.0], [15.7, 36.0], [15.8, 37.0], [15.9, 37.0], [16.0, 37.0], [16.1, 37.0], [16.2, 38.0], [16.3, 38.0], [16.4, 38.0], [16.5, 39.0], [16.6, 39.0], [16.7, 39.0], [16.8, 40.0], [16.9, 40.0], [17.0, 40.0], [17.1, 40.0], [17.2, 41.0], [17.3, 41.0], [17.4, 41.0], [17.5, 41.0], [17.6, 42.0], [17.7, 42.0], [17.8, 43.0], [17.9, 44.0], [18.0, 44.0], [18.1, 45.0], [18.2, 45.0], [18.3, 46.0], [18.4, 47.0], [18.5, 47.0], [18.6, 48.0], [18.7, 49.0], [18.8, 50.0], [18.9, 51.0], [19.0, 53.0], [19.1, 54.0], [19.2, 56.0], [19.3, 57.0], [19.4, 57.0], [19.5, 61.0], [19.6, 62.0], [19.7, 65.0], [19.8, 68.0], [19.9, 73.0], [20.0, 77.0], [20.1, 79.0], [20.2, 80.0], [20.3, 82.0], [20.4, 84.0], [20.5, 86.0], [20.6, 89.0], [20.7, 90.0], [20.8, 91.0], [20.9, 92.0], [21.0, 93.0], [21.1, 94.0], [21.2, 95.0], [21.3, 96.0], [21.4, 97.0], [21.5, 98.0], [21.6, 98.0], [21.7, 98.0], [21.8, 99.0], [21.9, 99.0], [22.0, 99.0], [22.1, 100.0], [22.2, 100.0], [22.3, 100.0], [22.4, 100.0], [22.5, 101.0], [22.6, 101.0], [22.7, 101.0], [22.8, 102.0], [22.9, 102.0], [23.0, 102.0], [23.1, 103.0], [23.2, 103.0], [23.3, 103.0], [23.4, 104.0], [23.5, 104.0], [23.6, 104.0], [23.7, 105.0], [23.8, 105.0], [23.9, 105.0], [24.0, 106.0], [24.1, 106.0], [24.2, 106.0], [24.3, 106.0], [24.4, 106.0], [24.5, 107.0], [24.6, 107.0], [24.7, 107.0], [24.8, 108.0], [24.9, 108.0], [25.0, 109.0], [25.1, 109.0], [25.2, 109.0], [25.3, 110.0], [25.4, 110.0], [25.5, 110.0], [25.6, 111.0], [25.7, 111.0], [25.8, 112.0], [25.9, 112.0], [26.0, 112.0], [26.1, 112.0], [26.2, 113.0], [26.3, 113.0], [26.4, 113.0], [26.5, 113.0], [26.6, 114.0], [26.7, 114.0], [26.8, 115.0], [26.9, 115.0], [27.0, 115.0], [27.1, 116.0], [27.2, 116.0], [27.3, 116.0], [27.4, 117.0], [27.5, 117.0], [27.6, 117.0], [27.7, 118.0], [27.8, 118.0], [27.9, 119.0], [28.0, 119.0], [28.1, 119.0], [28.2, 119.0], [28.3, 120.0], [28.4, 120.0], [28.5, 121.0], [28.6, 121.0], [28.7, 121.0], [28.8, 122.0], [28.9, 122.0], [29.0, 122.0], [29.1, 123.0], [29.2, 123.0], [29.3, 123.0], [29.4, 124.0], [29.5, 124.0], [29.6, 125.0], [29.7, 126.0], [29.8, 126.0], [29.9, 126.0], [30.0, 127.0], [30.1, 127.0], [30.2, 127.0], [30.3, 127.0], [30.4, 128.0], [30.5, 128.0], [30.6, 128.0], [30.7, 129.0], [30.8, 129.0], [30.9, 129.0], [31.0, 130.0], [31.1, 130.0], [31.2, 130.0], [31.3, 131.0], [31.4, 131.0], [31.5, 131.0], [31.6, 132.0], [31.7, 132.0], [31.8, 132.0], [31.9, 132.0], [32.0, 133.0], [32.1, 133.0], [32.2, 133.0], [32.3, 133.0], [32.4, 134.0], [32.5, 134.0], [32.6, 135.0], [32.7, 135.0], [32.8, 135.0], [32.9, 136.0], [33.0, 136.0], [33.1, 136.0], [33.2, 137.0], [33.3, 137.0], [33.4, 138.0], [33.5, 138.0], [33.6, 138.0], [33.7, 139.0], [33.8, 139.0], [33.9, 140.0], [34.0, 141.0], [34.1, 141.0], [34.2, 141.0], [34.3, 142.0], [34.4, 143.0], [34.5, 143.0], [34.6, 143.0], [34.7, 144.0], [34.8, 144.0], [34.9, 145.0], [35.0, 145.0], [35.1, 146.0], [35.2, 146.0], [35.3, 147.0], [35.4, 147.0], [35.5, 148.0], [35.6, 148.0], [35.7, 149.0], [35.8, 150.0], [35.9, 150.0], [36.0, 150.0], [36.1, 151.0], [36.2, 152.0], [36.3, 152.0], [36.4, 153.0], [36.5, 154.0], [36.6, 155.0], [36.7, 155.0], [36.8, 156.0], [36.9, 156.0], [37.0, 157.0], [37.1, 157.0], [37.2, 158.0], [37.3, 159.0], [37.4, 159.0], [37.5, 160.0], [37.6, 161.0], [37.7, 161.0], [37.8, 161.0], [37.9, 162.0], [38.0, 164.0], [38.1, 164.0], [38.2, 164.0], [38.3, 165.0], [38.4, 165.0], [38.5, 166.0], [38.6, 166.0], [38.7, 168.0], [38.8, 168.0], [38.9, 168.0], [39.0, 169.0], [39.1, 170.0], [39.2, 171.0], [39.3, 171.0], [39.4, 172.0], [39.5, 173.0], [39.6, 175.0], [39.7, 176.0], [39.8, 176.0], [39.9, 177.0], [40.0, 178.0], [40.1, 179.0], [40.2, 181.0], [40.3, 181.0], [40.4, 182.0], [40.5, 183.0], [40.6, 183.0], [40.7, 184.0], [40.8, 185.0], [40.9, 185.0], [41.0, 187.0], [41.1, 187.0], [41.2, 188.0], [41.3, 189.0], [41.4, 190.0], [41.5, 192.0], [41.6, 193.0], [41.7, 193.0], [41.8, 194.0], [41.9, 195.0], [42.0, 196.0], [42.1, 197.0], [42.2, 198.0], [42.3, 200.0], [42.4, 201.0], [42.5, 202.0], [42.6, 203.0], [42.7, 204.0], [42.8, 206.0], [42.9, 206.0], [43.0, 208.0], [43.1, 209.0], [43.2, 209.0], [43.3, 211.0], [43.4, 212.0], [43.5, 213.0], [43.6, 214.0], [43.7, 215.0], [43.8, 216.0], [43.9, 217.0], [44.0, 217.0], [44.1, 219.0], [44.2, 219.0], [44.3, 222.0], [44.4, 223.0], [44.5, 224.0], [44.6, 226.0], [44.7, 227.0], [44.8, 228.0], [44.9, 229.0], [45.0, 230.0], [45.1, 231.0], [45.2, 233.0], [45.3, 234.0], [45.4, 235.0], [45.5, 236.0], [45.6, 238.0], [45.7, 239.0], [45.8, 239.0], [45.9, 242.0], [46.0, 243.0], [46.1, 245.0], [46.2, 247.0], [46.3, 248.0], [46.4, 250.0], [46.5, 252.0], [46.6, 253.0], [46.7, 254.0], [46.8, 255.0], [46.9, 259.0], [47.0, 261.0], [47.1, 261.0], [47.2, 263.0], [47.3, 264.0], [47.4, 265.0], [47.5, 266.0], [47.6, 266.0], [47.7, 268.0], [47.8, 270.0], [47.9, 272.0], [48.0, 273.0], [48.1, 275.0], [48.2, 278.0], [48.3, 279.0], [48.4, 280.0], [48.5, 281.0], [48.6, 284.0], [48.7, 285.0], [48.8, 286.0], [48.9, 287.0], [49.0, 288.0], [49.1, 290.0], [49.2, 291.0], [49.3, 292.0], [49.4, 294.0], [49.5, 295.0], [49.6, 296.0], [49.7, 297.0], [49.8, 298.0], [49.9, 299.0], [50.0, 300.0], [50.1, 302.0], [50.2, 304.0], [50.3, 307.0], [50.4, 308.0], [50.5, 309.0], [50.6, 311.0], [50.7, 311.0], [50.8, 312.0], [50.9, 314.0], [51.0, 315.0], [51.1, 318.0], [51.2, 319.0], [51.3, 320.0], [51.4, 321.0], [51.5, 322.0], [51.6, 324.0], [51.7, 325.0], [51.8, 326.0], [51.9, 328.0], [52.0, 329.0], [52.1, 331.0], [52.2, 333.0], [52.3, 334.0], [52.4, 336.0], [52.5, 337.0], [52.6, 340.0], [52.7, 341.0], [52.8, 342.0], [52.9, 344.0], [53.0, 346.0], [53.1, 347.0], [53.2, 348.0], [53.3, 350.0], [53.4, 351.0], [53.5, 352.0], [53.6, 354.0], [53.7, 355.0], [53.8, 357.0], [53.9, 358.0], [54.0, 360.0], [54.1, 361.0], [54.2, 362.0], [54.3, 365.0], [54.4, 365.0], [54.5, 367.0], [54.6, 368.0], [54.7, 371.0], [54.8, 372.0], [54.9, 374.0], [55.0, 377.0], [55.1, 378.0], [55.2, 379.0], [55.3, 381.0], [55.4, 383.0], [55.5, 384.0], [55.6, 385.0], [55.7, 387.0], [55.8, 389.0], [55.9, 390.0], [56.0, 392.0], [56.1, 393.0], [56.2, 394.0], [56.3, 397.0], [56.4, 399.0], [56.5, 401.0], [56.6, 403.0], [56.7, 405.0], [56.8, 406.0], [56.9, 408.0], [57.0, 408.0], [57.1, 409.0], [57.2, 411.0], [57.3, 414.0], [57.4, 417.0], [57.5, 418.0], [57.6, 419.0], [57.7, 420.0], [57.8, 421.0], [57.9, 422.0], [58.0, 423.0], [58.1, 424.0], [58.2, 426.0], [58.3, 426.0], [58.4, 428.0], [58.5, 429.0], [58.6, 430.0], [58.7, 431.0], [58.8, 432.0], [58.9, 434.0], [59.0, 436.0], [59.1, 438.0], [59.2, 438.0], [59.3, 442.0], [59.4, 443.0], [59.5, 443.0], [59.6, 445.0], [59.7, 446.0], [59.8, 448.0], [59.9, 449.0], [60.0, 450.0], [60.1, 452.0], [60.2, 453.0], [60.3, 455.0], [60.4, 456.0], [60.5, 458.0], [60.6, 460.0], [60.7, 461.0], [60.8, 463.0], [60.9, 464.0], [61.0, 466.0], [61.1, 468.0], [61.2, 470.0], [61.3, 471.0], [61.4, 473.0], [61.5, 475.0], [61.6, 478.0], [61.7, 479.0], [61.8, 480.0], [61.9, 482.0], [62.0, 484.0], [62.1, 485.0], [62.2, 487.0], [62.3, 488.0], [62.4, 490.0], [62.5, 491.0], [62.6, 492.0], [62.7, 494.0], [62.8, 495.0], [62.9, 496.0], [63.0, 497.0], [63.1, 500.0], [63.2, 502.0], [63.3, 504.0], [63.4, 504.0], [63.5, 506.0], [63.6, 509.0], [63.7, 510.0], [63.8, 512.0], [63.9, 513.0], [64.0, 514.0], [64.1, 515.0], [64.2, 516.0], [64.3, 518.0], [64.4, 520.0], [64.5, 521.0], [64.6, 524.0], [64.7, 525.0], [64.8, 528.0], [64.9, 531.0], [65.0, 534.0], [65.1, 535.0], [65.2, 537.0], [65.3, 539.0], [65.4, 540.0], [65.5, 541.0], [65.6, 542.0], [65.7, 542.0], [65.8, 544.0], [65.9, 545.0], [66.0, 546.0], [66.1, 549.0], [66.2, 550.0], [66.3, 551.0], [66.4, 553.0], [66.5, 554.0], [66.6, 556.0], [66.7, 557.0], [66.8, 559.0], [66.9, 561.0], [67.0, 564.0], [67.1, 565.0], [67.2, 569.0], [67.3, 571.0], [67.4, 573.0], [67.5, 575.0], [67.6, 578.0], [67.7, 579.0], [67.8, 580.0], [67.9, 583.0], [68.0, 584.0], [68.1, 585.0], [68.2, 586.0], [68.3, 588.0], [68.4, 590.0], [68.5, 592.0], [68.6, 593.0], [68.7, 596.0], [68.8, 596.0], [68.9, 600.0], [69.0, 602.0], [69.1, 604.0], [69.2, 608.0], [69.3, 610.0], [69.4, 612.0], [69.5, 615.0], [69.6, 617.0], [69.7, 621.0], [69.8, 624.0], [69.9, 627.0], [70.0, 628.0], [70.1, 629.0], [70.2, 631.0], [70.3, 633.0], [70.4, 636.0], [70.5, 638.0], [70.6, 642.0], [70.7, 644.0], [70.8, 646.0], [70.9, 649.0], [71.0, 652.0], [71.1, 655.0], [71.2, 657.0], [71.3, 660.0], [71.4, 664.0], [71.5, 667.0], [71.6, 669.0], [71.7, 672.0], [71.8, 673.0], [71.9, 674.0], [72.0, 677.0], [72.1, 678.0], [72.2, 679.0], [72.3, 680.0], [72.4, 684.0], [72.5, 687.0], [72.6, 689.0], [72.7, 692.0], [72.8, 693.0], [72.9, 694.0], [73.0, 697.0], [73.1, 700.0], [73.2, 704.0], [73.3, 705.0], [73.4, 706.0], [73.5, 708.0], [73.6, 711.0], [73.7, 713.0], [73.8, 715.0], [73.9, 717.0], [74.0, 719.0], [74.1, 721.0], [74.2, 723.0], [74.3, 725.0], [74.4, 726.0], [74.5, 728.0], [74.6, 730.0], [74.7, 733.0], [74.8, 737.0], [74.9, 741.0], [75.0, 744.0], [75.1, 748.0], [75.2, 751.0], [75.3, 755.0], [75.4, 757.0], [75.5, 758.0], [75.6, 762.0], [75.7, 767.0], [75.8, 769.0], [75.9, 771.0], [76.0, 776.0], [76.1, 778.0], [76.2, 780.0], [76.3, 782.0], [76.4, 787.0], [76.5, 789.0], [76.6, 793.0], [76.7, 795.0], [76.8, 797.0], [76.9, 801.0], [77.0, 804.0], [77.1, 808.0], [77.2, 811.0], [77.3, 814.0], [77.4, 816.0], [77.5, 818.0], [77.6, 819.0], [77.7, 820.0], [77.8, 823.0], [77.9, 826.0], [78.0, 828.0], [78.1, 830.0], [78.2, 834.0], [78.3, 837.0], [78.4, 841.0], [78.5, 845.0], [78.6, 847.0], [78.7, 849.0], [78.8, 851.0], [78.9, 854.0], [79.0, 860.0], [79.1, 863.0], [79.2, 866.0], [79.3, 869.0], [79.4, 871.0], [79.5, 875.0], [79.6, 881.0], [79.7, 883.0], [79.8, 888.0], [79.9, 890.0], [80.0, 893.0], [80.1, 895.0], [80.2, 900.0], [80.3, 907.0], [80.4, 907.0], [80.5, 909.0], [80.6, 912.0], [80.7, 918.0], [80.8, 920.0], [80.9, 924.0], [81.0, 927.0], [81.1, 930.0], [81.2, 932.0], [81.3, 936.0], [81.4, 938.0], [81.5, 943.0], [81.6, 946.0], [81.7, 949.0], [81.8, 951.0], [81.9, 954.0], [82.0, 955.0], [82.1, 957.0], [82.2, 960.0], [82.3, 963.0], [82.4, 966.0], [82.5, 969.0], [82.6, 971.0], [82.7, 975.0], [82.8, 979.0], [82.9, 982.0], [83.0, 984.0], [83.1, 988.0], [83.2, 991.0], [83.3, 993.0], [83.4, 995.0], [83.5, 997.0], [83.6, 1003.0], [83.7, 1007.0], [83.8, 1012.0], [83.9, 1013.0], [84.0, 1016.0], [84.1, 1019.0], [84.2, 1022.0], [84.3, 1026.0], [84.4, 1027.0], [84.5, 1029.0], [84.6, 1032.0], [84.7, 1037.0], [84.8, 1040.0], [84.9, 1044.0], [85.0, 1047.0], [85.1, 1050.0], [85.2, 1051.0], [85.3, 1053.0], [85.4, 1055.0], [85.5, 1059.0], [85.6, 1062.0], [85.7, 1065.0], [85.8, 1068.0], [85.9, 1073.0], [86.0, 1077.0], [86.1, 1079.0], [86.2, 1083.0], [86.3, 1086.0], [86.4, 1089.0], [86.5, 1092.0], [86.6, 1093.0], [86.7, 1095.0], [86.8, 1099.0], [86.9, 1106.0], [87.0, 1111.0], [87.1, 1113.0], [87.2, 1117.0], [87.3, 1120.0], [87.4, 1127.0], [87.5, 1129.0], [87.6, 1134.0], [87.7, 1136.0], [87.8, 1140.0], [87.9, 1144.0], [88.0, 1147.0], [88.1, 1151.0], [88.2, 1152.0], [88.3, 1154.0], [88.4, 1158.0], [88.5, 1161.0], [88.6, 1164.0], [88.7, 1166.0], [88.8, 1168.0], [88.9, 1172.0], [89.0, 1176.0], [89.1, 1182.0], [89.2, 1184.0], [89.3, 1188.0], [89.4, 1192.0], [89.5, 1196.0], [89.6, 1198.0], [89.7, 1204.0], [89.8, 1208.0], [89.9, 1214.0], [90.0, 1218.0], [90.1, 1221.0], [90.2, 1225.0], [90.3, 1229.0], [90.4, 1233.0], [90.5, 1235.0], [90.6, 1236.0], [90.7, 1241.0], [90.8, 1245.0], [90.9, 1247.0], [91.0, 1250.0], [91.1, 1255.0], [91.2, 1258.0], [91.3, 1261.0], [91.4, 1263.0], [91.5, 1273.0], [91.6, 1278.0], [91.7, 1281.0], [91.8, 1289.0], [91.9, 1291.0], [92.0, 1297.0], [92.1, 1303.0], [92.2, 1313.0], [92.3, 1315.0], [92.4, 1321.0], [92.5, 1325.0], [92.6, 1327.0], [92.7, 1331.0], [92.8, 1335.0], [92.9, 1337.0], [93.0, 1343.0], [93.1, 1349.0], [93.2, 1357.0], [93.3, 1361.0], [93.4, 1365.0], [93.5, 1367.0], [93.6, 1369.0], [93.7, 1375.0], [93.8, 1378.0], [93.9, 1381.0], [94.0, 1387.0], [94.1, 1393.0], [94.2, 1395.0], [94.3, 1404.0], [94.4, 1410.0], [94.5, 1417.0], [94.6, 1425.0], [94.7, 1433.0], [94.8, 1438.0], [94.9, 1441.0], [95.0, 1443.0], [95.1, 1452.0], [95.2, 1460.0], [95.3, 1479.0], [95.4, 1492.0], [95.5, 1500.0], [95.6, 1506.0], [95.7, 1512.0], [95.8, 1520.0], [95.9, 1530.0], [96.0, 1536.0], [96.1, 1550.0], [96.2, 1553.0], [96.3, 1564.0], [96.4, 1573.0], [96.5, 1583.0], [96.6, 1593.0], [96.7, 1618.0], [96.8, 1627.0], [96.9, 1661.0], [97.0, 1673.0], [97.1, 1692.0], [97.2, 1710.0], [97.3, 1749.0], [97.4, 1764.0], [97.5, 1783.0], [97.6, 1807.0], [97.7, 1820.0], [97.8, 1857.0], [97.9, 1899.0], [98.0, 1906.0], [98.1, 1944.0], [98.2, 1970.0], [98.3, 2012.0], [98.4, 2054.0], [98.5, 2106.0], [98.6, 2157.0], [98.7, 2220.0], [98.8, 2248.0], [98.9, 2283.0], [99.0, 2321.0], [99.1, 2354.0], [99.2, 2373.0], [99.3, 2490.0], [99.4, 2538.0], [99.5, 2641.0], [99.6, 3006.0], [99.7, 3258.0], [99.8, 4083.0], [99.9, 4915.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1142.0, "series": [{"data": [[0.0, 1142.0], [600.0, 218.0], [700.0, 195.0], [800.0, 174.0], [900.0, 175.0], [1000.0, 168.0], [1100.0, 147.0], [1200.0, 126.0], [1300.0, 114.0], [1400.0, 64.0], [1500.0, 60.0], [100.0, 1052.0], [1600.0, 26.0], [1700.0, 21.0], [1800.0, 20.0], [1900.0, 17.0], [2000.0, 12.0], [2100.0, 8.0], [2200.0, 17.0], [2300.0, 13.0], [2400.0, 4.0], [2500.0, 8.0], [2600.0, 5.0], [2800.0, 1.0], [2700.0, 1.0], [3000.0, 3.0], [3100.0, 1.0], [200.0, 399.0], [3300.0, 1.0], [3200.0, 2.0], [3500.0, 2.0], [4000.0, 2.0], [4100.0, 2.0], [4400.0, 1.0], [300.0, 336.0], [4700.0, 1.0], [4900.0, 3.0], [5000.0, 1.0], [5600.0, 2.0], [400.0, 345.0], [500.0, 301.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 231.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3279.0, "series": [{"data": [[0.0, 3279.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1680.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 231.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.93741307371349, "minX": 1.60438662E12, "maxY": 10.0, "series": [{"data": [[1.6043868E12, 10.0], [1.60438668E12, 10.0], [1.60438686E12, 9.93741307371349], [1.60438674E12, 10.0], [1.60438662E12, 9.986052998605302]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438686E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 251.0, "minX": 1.0, "maxY": 2341.0, "series": [{"data": [[8.0, 368.0], [4.0, 677.0], [2.0, 1570.0], [1.0, 2341.0], [9.0, 251.0], [5.0, 503.0], [10.0, 492.38219389725714], [6.0, 424.5], [3.0, 910.0], [7.0, 633.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.989402697495155, 492.9500963391132]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5188.866666666667, "minX": 1.60438662E12, "maxY": 6116478.366666666, "series": [{"data": [[1.6043868E12, 5689217.083333333], [1.60438668E12, 6116478.366666666], [1.60438686E12, 3146986.533333333], [1.60438674E12, 5517592.7], [1.60438662E12, 3505391.5833333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6043868E12, 9705.5], [1.60438668E12, 10020.016666666666], [1.60438686E12, 5442.916666666667], [1.60438674E12, 8220.033333333333], [1.60438662E12, 5188.866666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438686E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 449.71310861423245, "minX": 1.60438662E12, "maxY": 555.3417015341707, "series": [{"data": [[1.6043868E12, 460.0214888718347], [1.60438668E12, 449.71310861423245], [1.60438686E12, 505.904033379694], [1.60438674E12, 534.6872759856631], [1.60438662E12, 555.3417015341707]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438686E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 447.6561797752805, "minX": 1.60438662E12, "maxY": 553.0390516039045, "series": [{"data": [[1.6043868E12, 458.22716807367595], [1.60438668E12, 447.6561797752805], [1.60438686E12, 503.8678720445063], [1.60438674E12, 532.5869175627233], [1.60438662E12, 553.0390516039045]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438686E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.004172461752433937, "minX": 1.60438662E12, "maxY": 0.2050209205020921, "series": [{"data": [[1.6043868E12, 0.004604758250191874], [1.60438668E12, 0.008988764044943823], [1.60438686E12, 0.004172461752433937], [1.60438674E12, 0.007168458781362016], [1.60438662E12, 0.2050209205020921]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438686E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60438662E12, "maxY": 5654.0, "series": [{"data": [[1.6043868E12, 3006.0], [1.60438668E12, 5039.0], [1.60438686E12, 3258.0], [1.60438674E12, 5654.0], [1.60438662E12, 5616.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6043868E12, 10.735999689102172], [1.60438668E12, 10.023999681472779], [1.60438686E12, 15.0], [1.60438674E12, 13.0], [1.60438662E12, 17.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6043868E12, 11.0], [1.60438668E12, 11.0], [1.60438686E12, 15.0], [1.60438674E12, 13.0], [1.60438662E12, 17.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6043868E12, 11.0], [1.60438668E12, 10.691999840736388], [1.60438686E12, 15.0], [1.60438674E12, 13.0], [1.60438662E12, 17.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6043868E12, 5.0], [1.60438668E12, 6.0], [1.60438686E12, 12.0], [1.60438674E12, 8.0], [1.60438662E12, 8.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6043868E12, 200.0], [1.60438668E12, 169.0], [1.60438686E12, 344.0], [1.60438674E12, 417.0], [1.60438662E12, 429.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438686E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 21.5, "minX": 1.0, "maxY": 2341.0, "series": [{"data": [[2.0, 177.5], [33.0, 66.5], [34.0, 133.5], [35.0, 29.0], [37.0, 40.0], [38.0, 25.0], [42.0, 105.5], [43.0, 32.0], [3.0, 910.0], [50.0, 21.5], [55.0, 41.0], [56.0, 23.0], [58.0, 37.0], [61.0, 38.0], [60.0, 23.0], [64.0, 40.5], [90.0, 33.0], [6.0, 1121.0], [100.0, 29.0], [7.0, 1017.5], [8.0, 928.5], [9.0, 812.0], [10.0, 606.5], [11.0, 665.0], [12.0, 593.0], [13.0, 576.0], [14.0, 606.5], [15.0, 534.5], [16.0, 539.5], [1.0, 2341.0], [17.0, 432.0], [18.0, 506.5], [19.0, 368.0], [20.0, 376.5], [21.0, 410.0], [22.0, 308.0], [23.0, 326.0], [24.0, 309.0], [25.0, 241.5], [26.0, 308.5], [27.0, 326.0], [28.0, 207.5], [29.0, 208.0], [30.0, 322.0], [31.0, 95.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 21.0, "minX": 1.0, "maxY": 2328.0, "series": [{"data": [[2.0, 175.5], [33.0, 66.0], [34.0, 133.5], [35.0, 25.0], [37.0, 40.0], [38.0, 24.5], [42.0, 105.0], [43.0, 31.5], [3.0, 908.0], [50.0, 21.0], [55.0, 41.0], [56.0, 21.5], [58.0, 36.0], [61.0, 38.0], [60.0, 22.0], [64.0, 39.5], [90.0, 32.5], [6.0, 1116.0], [100.0, 28.5], [7.0, 1016.0], [8.0, 927.0], [9.0, 812.0], [10.0, 605.5], [11.0, 664.0], [12.0, 587.0], [13.0, 574.0], [14.0, 606.0], [15.0, 527.5], [16.0, 537.0], [1.0, 2328.0], [17.0, 430.5], [18.0, 506.0], [19.0, 361.0], [20.0, 376.0], [21.0, 409.0], [22.0, 307.5], [23.0, 324.0], [24.0, 308.0], [25.0, 241.0], [26.0, 304.0], [27.0, 325.0], [28.0, 207.5], [29.0, 207.0], [30.0, 318.5], [31.0, 95.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.816666666666666, "minX": 1.60438662E12, "maxY": 22.25, "series": [{"data": [[1.6043868E12, 21.716666666666665], [1.60438668E12, 22.25], [1.60438686E12, 11.816666666666666], [1.60438674E12, 18.6], [1.60438662E12, 12.116666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438686E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.95, "minX": 1.60438662E12, "maxY": 22.25, "series": [{"data": [[1.6043868E12, 21.716666666666665], [1.60438668E12, 22.25], [1.60438686E12, 11.983333333333333], [1.60438674E12, 18.6], [1.60438662E12, 11.95]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438686E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.95, "minX": 1.60438662E12, "maxY": 22.25, "series": [{"data": [[1.6043868E12, 21.716666666666665], [1.60438668E12, 22.25], [1.60438686E12, 11.983333333333333], [1.60438674E12, 18.6], [1.60438662E12, 11.95]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438686E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.95, "minX": 1.60438662E12, "maxY": 22.25, "series": [{"data": [[1.6043868E12, 21.716666666666665], [1.60438668E12, 22.25], [1.60438686E12, 11.983333333333333], [1.60438674E12, 18.6], [1.60438662E12, 11.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438686E12, "title": "Total Transactions Per Second"}},
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

