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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 8959.0, "series": [{"data": [[0.0, 5.0], [0.1, 6.0], [0.2, 7.0], [0.3, 7.0], [0.4, 8.0], [0.5, 9.0], [0.6, 11.0], [0.7, 12.0], [0.8, 12.0], [0.9, 12.0], [1.0, 13.0], [1.1, 13.0], [1.2, 13.0], [1.3, 13.0], [1.4, 13.0], [1.5, 13.0], [1.6, 14.0], [1.7, 14.0], [1.8, 14.0], [1.9, 14.0], [2.0, 14.0], [2.1, 14.0], [2.2, 15.0], [2.3, 15.0], [2.4, 15.0], [2.5, 16.0], [2.6, 16.0], [2.7, 16.0], [2.8, 16.0], [2.9, 16.0], [3.0, 17.0], [3.1, 17.0], [3.2, 17.0], [3.3, 17.0], [3.4, 18.0], [3.5, 18.0], [3.6, 18.0], [3.7, 19.0], [3.8, 19.0], [3.9, 19.0], [4.0, 19.0], [4.1, 19.0], [4.2, 19.0], [4.3, 20.0], [4.4, 20.0], [4.5, 20.0], [4.6, 20.0], [4.7, 20.0], [4.8, 21.0], [4.9, 21.0], [5.0, 21.0], [5.1, 21.0], [5.2, 21.0], [5.3, 21.0], [5.4, 21.0], [5.5, 22.0], [5.6, 22.0], [5.7, 22.0], [5.8, 22.0], [5.9, 22.0], [6.0, 22.0], [6.1, 22.0], [6.2, 22.0], [6.3, 22.0], [6.4, 23.0], [6.5, 23.0], [6.6, 23.0], [6.7, 23.0], [6.8, 23.0], [6.9, 23.0], [7.0, 23.0], [7.1, 23.0], [7.2, 24.0], [7.3, 24.0], [7.4, 24.0], [7.5, 24.0], [7.6, 24.0], [7.7, 24.0], [7.8, 25.0], [7.9, 25.0], [8.0, 25.0], [8.1, 25.0], [8.2, 25.0], [8.3, 25.0], [8.4, 26.0], [8.5, 26.0], [8.6, 26.0], [8.7, 26.0], [8.8, 26.0], [8.9, 26.0], [9.0, 27.0], [9.1, 27.0], [9.2, 27.0], [9.3, 28.0], [9.4, 28.0], [9.5, 28.0], [9.6, 28.0], [9.7, 28.0], [9.8, 28.0], [9.9, 29.0], [10.0, 29.0], [10.1, 29.0], [10.2, 29.0], [10.3, 30.0], [10.4, 30.0], [10.5, 30.0], [10.6, 30.0], [10.7, 31.0], [10.8, 31.0], [10.9, 31.0], [11.0, 31.0], [11.1, 32.0], [11.2, 32.0], [11.3, 32.0], [11.4, 33.0], [11.5, 33.0], [11.6, 33.0], [11.7, 33.0], [11.8, 34.0], [11.9, 34.0], [12.0, 34.0], [12.1, 35.0], [12.2, 35.0], [12.3, 35.0], [12.4, 36.0], [12.5, 36.0], [12.6, 37.0], [12.7, 38.0], [12.8, 38.0], [12.9, 38.0], [13.0, 39.0], [13.1, 39.0], [13.2, 40.0], [13.3, 40.0], [13.4, 40.0], [13.5, 41.0], [13.6, 41.0], [13.7, 41.0], [13.8, 41.0], [13.9, 42.0], [14.0, 42.0], [14.1, 43.0], [14.2, 43.0], [14.3, 44.0], [14.4, 45.0], [14.5, 45.0], [14.6, 46.0], [14.7, 46.0], [14.8, 47.0], [14.9, 47.0], [15.0, 48.0], [15.1, 49.0], [15.2, 49.0], [15.3, 51.0], [15.4, 52.0], [15.5, 55.0], [15.6, 58.0], [15.7, 59.0], [15.8, 59.0], [15.9, 60.0], [16.0, 61.0], [16.1, 63.0], [16.2, 64.0], [16.3, 66.0], [16.4, 68.0], [16.5, 74.0], [16.6, 77.0], [16.7, 86.0], [16.8, 89.0], [16.9, 93.0], [17.0, 95.0], [17.1, 96.0], [17.2, 97.0], [17.3, 100.0], [17.4, 101.0], [17.5, 102.0], [17.6, 103.0], [17.7, 104.0], [17.8, 106.0], [17.9, 108.0], [18.0, 109.0], [18.1, 110.0], [18.2, 110.0], [18.3, 111.0], [18.4, 111.0], [18.5, 112.0], [18.6, 112.0], [18.7, 112.0], [18.8, 113.0], [18.9, 113.0], [19.0, 113.0], [19.1, 114.0], [19.2, 114.0], [19.3, 114.0], [19.4, 115.0], [19.5, 115.0], [19.6, 115.0], [19.7, 115.0], [19.8, 115.0], [19.9, 116.0], [20.0, 116.0], [20.1, 117.0], [20.2, 117.0], [20.3, 117.0], [20.4, 118.0], [20.5, 118.0], [20.6, 118.0], [20.7, 118.0], [20.8, 119.0], [20.9, 119.0], [21.0, 119.0], [21.1, 120.0], [21.2, 120.0], [21.3, 121.0], [21.4, 121.0], [21.5, 122.0], [21.6, 122.0], [21.7, 122.0], [21.8, 123.0], [21.9, 123.0], [22.0, 124.0], [22.1, 124.0], [22.2, 125.0], [22.3, 125.0], [22.4, 126.0], [22.5, 126.0], [22.6, 127.0], [22.7, 128.0], [22.8, 128.0], [22.9, 129.0], [23.0, 130.0], [23.1, 130.0], [23.2, 131.0], [23.3, 132.0], [23.4, 133.0], [23.5, 134.0], [23.6, 134.0], [23.7, 135.0], [23.8, 136.0], [23.9, 137.0], [24.0, 139.0], [24.1, 139.0], [24.2, 140.0], [24.3, 141.0], [24.4, 141.0], [24.5, 142.0], [24.6, 143.0], [24.7, 145.0], [24.8, 146.0], [24.9, 147.0], [25.0, 148.0], [25.1, 149.0], [25.2, 150.0], [25.3, 151.0], [25.4, 153.0], [25.5, 154.0], [25.6, 155.0], [25.7, 155.0], [25.8, 156.0], [25.9, 157.0], [26.0, 159.0], [26.1, 161.0], [26.2, 163.0], [26.3, 164.0], [26.4, 167.0], [26.5, 168.0], [26.6, 169.0], [26.7, 173.0], [26.8, 175.0], [26.9, 176.0], [27.0, 177.0], [27.1, 179.0], [27.2, 180.0], [27.3, 181.0], [27.4, 183.0], [27.5, 183.0], [27.6, 184.0], [27.7, 186.0], [27.8, 187.0], [27.9, 188.0], [28.0, 189.0], [28.1, 190.0], [28.2, 192.0], [28.3, 193.0], [28.4, 195.0], [28.5, 197.0], [28.6, 197.0], [28.7, 200.0], [28.8, 201.0], [28.9, 204.0], [29.0, 205.0], [29.1, 206.0], [29.2, 207.0], [29.3, 208.0], [29.4, 210.0], [29.5, 212.0], [29.6, 213.0], [29.7, 213.0], [29.8, 215.0], [29.9, 216.0], [30.0, 216.0], [30.1, 217.0], [30.2, 218.0], [30.3, 218.0], [30.4, 219.0], [30.5, 219.0], [30.6, 220.0], [30.7, 221.0], [30.8, 222.0], [30.9, 222.0], [31.0, 223.0], [31.1, 224.0], [31.2, 225.0], [31.3, 225.0], [31.4, 226.0], [31.5, 227.0], [31.6, 227.0], [31.7, 228.0], [31.8, 229.0], [31.9, 230.0], [32.0, 231.0], [32.1, 233.0], [32.2, 234.0], [32.3, 235.0], [32.4, 236.0], [32.5, 237.0], [32.6, 238.0], [32.7, 239.0], [32.8, 239.0], [32.9, 240.0], [33.0, 241.0], [33.1, 241.0], [33.2, 242.0], [33.3, 243.0], [33.4, 244.0], [33.5, 246.0], [33.6, 247.0], [33.7, 248.0], [33.8, 249.0], [33.9, 250.0], [34.0, 251.0], [34.1, 253.0], [34.2, 254.0], [34.3, 256.0], [34.4, 256.0], [34.5, 258.0], [34.6, 258.0], [34.7, 259.0], [34.8, 259.0], [34.9, 260.0], [35.0, 260.0], [35.1, 261.0], [35.2, 262.0], [35.3, 264.0], [35.4, 266.0], [35.5, 267.0], [35.6, 268.0], [35.7, 269.0], [35.8, 269.0], [35.9, 271.0], [36.0, 273.0], [36.1, 273.0], [36.2, 274.0], [36.3, 275.0], [36.4, 276.0], [36.5, 277.0], [36.6, 279.0], [36.7, 280.0], [36.8, 282.0], [36.9, 282.0], [37.0, 284.0], [37.1, 285.0], [37.2, 285.0], [37.3, 287.0], [37.4, 289.0], [37.5, 290.0], [37.6, 291.0], [37.7, 293.0], [37.8, 294.0], [37.9, 296.0], [38.0, 297.0], [38.1, 299.0], [38.2, 300.0], [38.3, 301.0], [38.4, 304.0], [38.5, 306.0], [38.6, 308.0], [38.7, 309.0], [38.8, 310.0], [38.9, 312.0], [39.0, 313.0], [39.1, 314.0], [39.2, 316.0], [39.3, 317.0], [39.4, 318.0], [39.5, 320.0], [39.6, 322.0], [39.7, 323.0], [39.8, 324.0], [39.9, 327.0], [40.0, 328.0], [40.1, 330.0], [40.2, 332.0], [40.3, 333.0], [40.4, 335.0], [40.5, 338.0], [40.6, 341.0], [40.7, 341.0], [40.8, 343.0], [40.9, 344.0], [41.0, 345.0], [41.1, 347.0], [41.2, 349.0], [41.3, 349.0], [41.4, 351.0], [41.5, 354.0], [41.6, 356.0], [41.7, 358.0], [41.8, 359.0], [41.9, 360.0], [42.0, 361.0], [42.1, 363.0], [42.2, 366.0], [42.3, 369.0], [42.4, 370.0], [42.5, 373.0], [42.6, 374.0], [42.7, 376.0], [42.8, 378.0], [42.9, 380.0], [43.0, 382.0], [43.1, 384.0], [43.2, 386.0], [43.3, 386.0], [43.4, 388.0], [43.5, 390.0], [43.6, 392.0], [43.7, 396.0], [43.8, 397.0], [43.9, 398.0], [44.0, 399.0], [44.1, 402.0], [44.2, 403.0], [44.3, 405.0], [44.4, 408.0], [44.5, 410.0], [44.6, 412.0], [44.7, 414.0], [44.8, 416.0], [44.9, 417.0], [45.0, 418.0], [45.1, 422.0], [45.2, 424.0], [45.3, 426.0], [45.4, 429.0], [45.5, 431.0], [45.6, 432.0], [45.7, 434.0], [45.8, 435.0], [45.9, 436.0], [46.0, 437.0], [46.1, 439.0], [46.2, 441.0], [46.3, 444.0], [46.4, 445.0], [46.5, 447.0], [46.6, 449.0], [46.7, 452.0], [46.8, 454.0], [46.9, 454.0], [47.0, 457.0], [47.1, 459.0], [47.2, 461.0], [47.3, 465.0], [47.4, 467.0], [47.5, 469.0], [47.6, 472.0], [47.7, 474.0], [47.8, 476.0], [47.9, 479.0], [48.0, 482.0], [48.1, 485.0], [48.2, 490.0], [48.3, 491.0], [48.4, 492.0], [48.5, 496.0], [48.6, 497.0], [48.7, 497.0], [48.8, 499.0], [48.9, 502.0], [49.0, 504.0], [49.1, 505.0], [49.2, 506.0], [49.3, 508.0], [49.4, 510.0], [49.5, 512.0], [49.6, 514.0], [49.7, 516.0], [49.8, 518.0], [49.9, 521.0], [50.0, 524.0], [50.1, 525.0], [50.2, 527.0], [50.3, 528.0], [50.4, 532.0], [50.5, 534.0], [50.6, 538.0], [50.7, 540.0], [50.8, 541.0], [50.9, 543.0], [51.0, 545.0], [51.1, 548.0], [51.2, 552.0], [51.3, 553.0], [51.4, 555.0], [51.5, 557.0], [51.6, 560.0], [51.7, 563.0], [51.8, 566.0], [51.9, 569.0], [52.0, 571.0], [52.1, 573.0], [52.2, 577.0], [52.3, 581.0], [52.4, 582.0], [52.5, 586.0], [52.6, 588.0], [52.7, 592.0], [52.8, 595.0], [52.9, 597.0], [53.0, 600.0], [53.1, 601.0], [53.2, 604.0], [53.3, 606.0], [53.4, 609.0], [53.5, 612.0], [53.6, 614.0], [53.7, 617.0], [53.8, 618.0], [53.9, 619.0], [54.0, 621.0], [54.1, 622.0], [54.2, 623.0], [54.3, 626.0], [54.4, 628.0], [54.5, 631.0], [54.6, 634.0], [54.7, 637.0], [54.8, 640.0], [54.9, 641.0], [55.0, 643.0], [55.1, 644.0], [55.2, 645.0], [55.3, 647.0], [55.4, 649.0], [55.5, 651.0], [55.6, 654.0], [55.7, 657.0], [55.8, 657.0], [55.9, 659.0], [56.0, 663.0], [56.1, 665.0], [56.2, 666.0], [56.3, 669.0], [56.4, 673.0], [56.5, 675.0], [56.6, 678.0], [56.7, 680.0], [56.8, 683.0], [56.9, 685.0], [57.0, 687.0], [57.1, 690.0], [57.2, 691.0], [57.3, 693.0], [57.4, 696.0], [57.5, 699.0], [57.6, 701.0], [57.7, 702.0], [57.8, 705.0], [57.9, 707.0], [58.0, 710.0], [58.1, 712.0], [58.2, 713.0], [58.3, 716.0], [58.4, 717.0], [58.5, 719.0], [58.6, 722.0], [58.7, 723.0], [58.8, 725.0], [58.9, 729.0], [59.0, 731.0], [59.1, 732.0], [59.2, 737.0], [59.3, 740.0], [59.4, 741.0], [59.5, 744.0], [59.6, 745.0], [59.7, 747.0], [59.8, 748.0], [59.9, 750.0], [60.0, 753.0], [60.1, 755.0], [60.2, 756.0], [60.3, 759.0], [60.4, 761.0], [60.5, 762.0], [60.6, 763.0], [60.7, 764.0], [60.8, 767.0], [60.9, 771.0], [61.0, 772.0], [61.1, 775.0], [61.2, 777.0], [61.3, 779.0], [61.4, 782.0], [61.5, 784.0], [61.6, 788.0], [61.7, 790.0], [61.8, 796.0], [61.9, 798.0], [62.0, 800.0], [62.1, 802.0], [62.2, 805.0], [62.3, 808.0], [62.4, 810.0], [62.5, 814.0], [62.6, 819.0], [62.7, 821.0], [62.8, 823.0], [62.9, 826.0], [63.0, 827.0], [63.1, 830.0], [63.2, 831.0], [63.3, 833.0], [63.4, 836.0], [63.5, 839.0], [63.6, 844.0], [63.7, 847.0], [63.8, 850.0], [63.9, 852.0], [64.0, 855.0], [64.1, 856.0], [64.2, 860.0], [64.3, 862.0], [64.4, 863.0], [64.5, 866.0], [64.6, 870.0], [64.7, 872.0], [64.8, 875.0], [64.9, 877.0], [65.0, 880.0], [65.1, 882.0], [65.2, 883.0], [65.3, 886.0], [65.4, 888.0], [65.5, 891.0], [65.6, 894.0], [65.7, 895.0], [65.8, 900.0], [65.9, 900.0], [66.0, 903.0], [66.1, 907.0], [66.2, 908.0], [66.3, 909.0], [66.4, 911.0], [66.5, 914.0], [66.6, 916.0], [66.7, 917.0], [66.8, 920.0], [66.9, 922.0], [67.0, 924.0], [67.1, 926.0], [67.2, 929.0], [67.3, 930.0], [67.4, 933.0], [67.5, 934.0], [67.6, 937.0], [67.7, 939.0], [67.8, 942.0], [67.9, 944.0], [68.0, 947.0], [68.1, 948.0], [68.2, 952.0], [68.3, 957.0], [68.4, 959.0], [68.5, 962.0], [68.6, 965.0], [68.7, 969.0], [68.8, 972.0], [68.9, 977.0], [69.0, 981.0], [69.1, 982.0], [69.2, 984.0], [69.3, 985.0], [69.4, 987.0], [69.5, 991.0], [69.6, 993.0], [69.7, 996.0], [69.8, 998.0], [69.9, 999.0], [70.0, 1001.0], [70.1, 1003.0], [70.2, 1006.0], [70.3, 1009.0], [70.4, 1010.0], [70.5, 1011.0], [70.6, 1012.0], [70.7, 1013.0], [70.8, 1015.0], [70.9, 1015.0], [71.0, 1017.0], [71.1, 1019.0], [71.2, 1022.0], [71.3, 1025.0], [71.4, 1027.0], [71.5, 1029.0], [71.6, 1031.0], [71.7, 1032.0], [71.8, 1033.0], [71.9, 1034.0], [72.0, 1036.0], [72.1, 1038.0], [72.2, 1041.0], [72.3, 1043.0], [72.4, 1046.0], [72.5, 1049.0], [72.6, 1051.0], [72.7, 1052.0], [72.8, 1054.0], [72.9, 1057.0], [73.0, 1059.0], [73.1, 1061.0], [73.2, 1062.0], [73.3, 1063.0], [73.4, 1064.0], [73.5, 1067.0], [73.6, 1069.0], [73.7, 1072.0], [73.8, 1074.0], [73.9, 1075.0], [74.0, 1076.0], [74.1, 1079.0], [74.2, 1079.0], [74.3, 1081.0], [74.4, 1084.0], [74.5, 1086.0], [74.6, 1088.0], [74.7, 1090.0], [74.8, 1092.0], [74.9, 1095.0], [75.0, 1097.0], [75.1, 1098.0], [75.2, 1101.0], [75.3, 1106.0], [75.4, 1108.0], [75.5, 1109.0], [75.6, 1111.0], [75.7, 1114.0], [75.8, 1115.0], [75.9, 1117.0], [76.0, 1119.0], [76.1, 1122.0], [76.2, 1125.0], [76.3, 1127.0], [76.4, 1130.0], [76.5, 1131.0], [76.6, 1132.0], [76.7, 1134.0], [76.8, 1136.0], [76.9, 1140.0], [77.0, 1142.0], [77.1, 1145.0], [77.2, 1146.0], [77.3, 1148.0], [77.4, 1151.0], [77.5, 1153.0], [77.6, 1155.0], [77.7, 1159.0], [77.8, 1162.0], [77.9, 1164.0], [78.0, 1168.0], [78.1, 1169.0], [78.2, 1172.0], [78.3, 1174.0], [78.4, 1174.0], [78.5, 1176.0], [78.6, 1178.0], [78.7, 1179.0], [78.8, 1180.0], [78.9, 1182.0], [79.0, 1186.0], [79.1, 1190.0], [79.2, 1193.0], [79.3, 1196.0], [79.4, 1199.0], [79.5, 1201.0], [79.6, 1202.0], [79.7, 1206.0], [79.8, 1208.0], [79.9, 1210.0], [80.0, 1211.0], [80.1, 1213.0], [80.2, 1219.0], [80.3, 1221.0], [80.4, 1224.0], [80.5, 1227.0], [80.6, 1228.0], [80.7, 1229.0], [80.8, 1232.0], [80.9, 1235.0], [81.0, 1236.0], [81.1, 1239.0], [81.2, 1240.0], [81.3, 1244.0], [81.4, 1245.0], [81.5, 1247.0], [81.6, 1249.0], [81.7, 1251.0], [81.8, 1252.0], [81.9, 1255.0], [82.0, 1258.0], [82.1, 1260.0], [82.2, 1264.0], [82.3, 1267.0], [82.4, 1267.0], [82.5, 1269.0], [82.6, 1274.0], [82.7, 1278.0], [82.8, 1281.0], [82.9, 1283.0], [83.0, 1285.0], [83.1, 1288.0], [83.2, 1291.0], [83.3, 1293.0], [83.4, 1297.0], [83.5, 1299.0], [83.6, 1300.0], [83.7, 1303.0], [83.8, 1305.0], [83.9, 1308.0], [84.0, 1310.0], [84.1, 1314.0], [84.2, 1317.0], [84.3, 1325.0], [84.4, 1328.0], [84.5, 1331.0], [84.6, 1333.0], [84.7, 1337.0], [84.8, 1342.0], [84.9, 1344.0], [85.0, 1346.0], [85.1, 1348.0], [85.2, 1351.0], [85.3, 1354.0], [85.4, 1357.0], [85.5, 1361.0], [85.6, 1363.0], [85.7, 1364.0], [85.8, 1370.0], [85.9, 1372.0], [86.0, 1376.0], [86.1, 1383.0], [86.2, 1385.0], [86.3, 1386.0], [86.4, 1390.0], [86.5, 1395.0], [86.6, 1402.0], [86.7, 1407.0], [86.8, 1413.0], [86.9, 1417.0], [87.0, 1421.0], [87.1, 1423.0], [87.2, 1427.0], [87.3, 1430.0], [87.4, 1434.0], [87.5, 1437.0], [87.6, 1441.0], [87.7, 1443.0], [87.8, 1456.0], [87.9, 1463.0], [88.0, 1473.0], [88.1, 1477.0], [88.2, 1481.0], [88.3, 1486.0], [88.4, 1490.0], [88.5, 1498.0], [88.6, 1504.0], [88.7, 1509.0], [88.8, 1513.0], [88.9, 1519.0], [89.0, 1527.0], [89.1, 1533.0], [89.2, 1544.0], [89.3, 1551.0], [89.4, 1555.0], [89.5, 1567.0], [89.6, 1571.0], [89.7, 1578.0], [89.8, 1584.0], [89.9, 1586.0], [90.0, 1597.0], [90.1, 1604.0], [90.2, 1607.0], [90.3, 1613.0], [90.4, 1619.0], [90.5, 1624.0], [90.6, 1630.0], [90.7, 1637.0], [90.8, 1641.0], [90.9, 1649.0], [91.0, 1652.0], [91.1, 1662.0], [91.2, 1669.0], [91.3, 1676.0], [91.4, 1686.0], [91.5, 1692.0], [91.6, 1703.0], [91.7, 1710.0], [91.8, 1713.0], [91.9, 1717.0], [92.0, 1728.0], [92.1, 1732.0], [92.2, 1739.0], [92.3, 1743.0], [92.4, 1753.0], [92.5, 1761.0], [92.6, 1768.0], [92.7, 1793.0], [92.8, 1803.0], [92.9, 1809.0], [93.0, 1820.0], [93.1, 1826.0], [93.2, 1845.0], [93.3, 1852.0], [93.4, 1859.0], [93.5, 1870.0], [93.6, 1885.0], [93.7, 1902.0], [93.8, 1910.0], [93.9, 1917.0], [94.0, 1931.0], [94.1, 1945.0], [94.2, 1965.0], [94.3, 1970.0], [94.4, 1976.0], [94.5, 1989.0], [94.6, 2007.0], [94.7, 2014.0], [94.8, 2028.0], [94.9, 2035.0], [95.0, 2051.0], [95.1, 2063.0], [95.2, 2074.0], [95.3, 2084.0], [95.4, 2090.0], [95.5, 2094.0], [95.6, 2108.0], [95.7, 2120.0], [95.8, 2129.0], [95.9, 2141.0], [96.0, 2154.0], [96.1, 2182.0], [96.2, 2192.0], [96.3, 2234.0], [96.4, 2246.0], [96.5, 2256.0], [96.6, 2271.0], [96.7, 2286.0], [96.8, 2298.0], [96.9, 2322.0], [97.0, 2343.0], [97.1, 2356.0], [97.2, 2376.0], [97.3, 2408.0], [97.4, 2421.0], [97.5, 2453.0], [97.6, 2467.0], [97.7, 2479.0], [97.8, 2497.0], [97.9, 2533.0], [98.0, 2556.0], [98.1, 2590.0], [98.2, 2607.0], [98.3, 2676.0], [98.4, 2702.0], [98.5, 2747.0], [98.6, 2768.0], [98.7, 2828.0], [98.8, 2878.0], [98.9, 2945.0], [99.0, 3047.0], [99.1, 3137.0], [99.2, 3194.0], [99.3, 3314.0], [99.4, 3462.0], [99.5, 3625.0], [99.6, 3761.0], [99.7, 4322.0], [99.8, 4866.0], [99.9, 5496.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 897.0, "series": [{"data": [[0.0, 897.0], [600.0, 236.0], [700.0, 231.0], [800.0, 198.0], [900.0, 213.0], [1000.0, 272.0], [1100.0, 221.0], [1200.0, 216.0], [1300.0, 156.0], [1400.0, 102.0], [1500.0, 78.0], [1600.0, 80.0], [1700.0, 62.0], [1800.0, 47.0], [1900.0, 47.0], [2000.0, 51.0], [2100.0, 33.0], [2300.0, 25.0], [2200.0, 31.0], [2400.0, 27.0], [2500.0, 17.0], [2600.0, 13.0], [2800.0, 8.0], [2700.0, 14.0], [2900.0, 9.0], [3000.0, 4.0], [3100.0, 9.0], [3200.0, 3.0], [3300.0, 2.0], [3400.0, 5.0], [3500.0, 4.0], [3700.0, 3.0], [3600.0, 3.0], [3800.0, 1.0], [4200.0, 3.0], [4300.0, 1.0], [4600.0, 1.0], [4400.0, 2.0], [4500.0, 1.0], [4800.0, 1.0], [5000.0, 2.0], [5200.0, 1.0], [5500.0, 1.0], [5400.0, 2.0], [5700.0, 1.0], [6000.0, 1.0], [7800.0, 1.0], [8900.0, 1.0], [100.0, 592.0], [200.0, 491.0], [300.0, 306.0], [400.0, 247.0], [500.0, 217.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 595.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2533.0, "series": [{"data": [[0.0, 2533.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2062.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 595.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.926174496644297, "minX": 1.60507656E12, "maxY": 10.0, "series": [{"data": [[1.60507686E12, 10.0], [1.60507668E12, 10.0], [1.6050768E12, 10.0], [1.60507662E12, 10.0], [1.60507692E12, 9.926174496644297], [1.60507674E12, 10.0], [1.60507656E12, 9.967741935483865]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507692E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 375.0, "minX": 1.0, "maxY": 2686.0, "series": [{"data": [[4.0, 909.0], [8.0, 699.0], [2.0, 762.0], [1.0, 2686.0], [9.0, 684.0], [5.0, 544.5], [10.0, 716.1677930102327], [6.0, 930.0], [3.0, 375.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.989402697495219, 716.5269749518318]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2460.5833333333335, "minX": 1.60507656E12, "maxY": 4526529.933333334, "series": [{"data": [[1.60507686E12, 4526529.933333334], [1.60507668E12, 4472728.35], [1.6050768E12, 3218074.45], [1.60507662E12, 3630217.033333333], [1.60507692E12, 2539098.8], [1.60507674E12, 3741397.2333333334], [1.60507656E12, 1858083.6333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507686E12, 6708.8], [1.60507668E12, 6971.966666666666], [1.6050768E12, 6406.283333333334], [1.60507662E12, 6360.933333333333], [1.60507692E12, 4500.366666666667], [1.60507674E12, 5168.4], [1.60507656E12, 2460.5833333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507692E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 652.381936887921, "minX": 1.60507656E12, "maxY": 876.9765395894426, "series": [{"data": [[1.60507686E12, 674.7406568516417], [1.60507668E12, 652.381936887921], [1.6050768E12, 672.918827508454], [1.60507662E12, 687.4718066743391], [1.60507692E12, 720.6375838926168], [1.60507674E12, 864.1712230215842], [1.60507656E12, 876.9765395894426]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507692E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 650.2187159956478, "minX": 1.60507656E12, "maxY": 874.6510263929614, "series": [{"data": [[1.60507686E12, 673.0747451868637], [1.60507668E12, 650.2187159956478], [1.6050768E12, 671.7801578354012], [1.60507662E12, 685.5523590333721], [1.60507692E12, 719.2181208053684], [1.60507674E12, 862.4043165467618], [1.60507656E12, 874.6510263929614]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507692E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.012401352874859096, "minX": 1.60507656E12, "maxY": 0.24926686217008803, "series": [{"data": [[1.60507686E12, 0.01359003397508494], [1.60507668E12, 0.015233949945593041], [1.6050768E12, 0.012401352874859096], [1.60507662E12, 0.013808975834292286], [1.60507692E12, 0.020134228187919462], [1.60507674E12, 0.014388489208633096], [1.60507656E12, 0.24926686217008803]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507692E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60507656E12, "maxY": 8959.0, "series": [{"data": [[1.60507686E12, 3426.0], [1.60507668E12, 3700.0], [1.6050768E12, 7808.0], [1.60507662E12, 5555.0], [1.60507692E12, 3761.0], [1.60507674E12, 8959.0], [1.60507656E12, 5267.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507686E12, 9.0], [1.60507668E12, 14.0], [1.6050768E12, 10.991999788284302], [1.60507662E12, 11.319999170303344], [1.60507692E12, 13.0], [1.60507674E12, 12.0], [1.60507656E12, 18.077999918460847]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507686E12, 10.50320016860962], [1.60507668E12, 14.0], [1.6050768E12, 11.79120008468628], [1.60507662E12, 12.0], [1.60507692E12, 13.0], [1.60507674E12, 12.0], [1.60507656E12, 18.385800032615663]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507686E12, 9.795999789237975], [1.60507668E12, 14.0], [1.6050768E12, 11.43599989414215], [1.60507662E12, 12.0], [1.60507692E12, 13.0], [1.60507674E12, 12.0], [1.60507656E12, 18.248999959230424]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507686E12, 5.0], [1.60507668E12, 5.0], [1.6050768E12, 6.0], [1.60507662E12, 6.0], [1.60507692E12, 6.0], [1.60507674E12, 11.0], [1.60507656E12, 15.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507686E12, 468.0], [1.60507668E12, 379.0], [1.6050768E12, 488.0], [1.60507662E12, 443.0], [1.60507692E12, 543.0], [1.60507674E12, 719.0], [1.60507656E12, 670.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507692E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 16.5, "minX": 1.0, "maxY": 2686.0, "series": [{"data": [[32.0, 150.5], [33.0, 31.0], [36.0, 30.0], [37.0, 47.0], [38.0, 52.0], [42.0, 29.0], [45.0, 59.0], [47.0, 37.0], [3.0, 924.0], [48.0, 50.0], [49.0, 60.0], [50.0, 16.5], [4.0, 1503.0], [71.0, 41.0], [5.0, 1105.0], [89.0, 34.0], [6.0, 1058.0], [7.0, 1049.5], [8.0, 1013.5], [9.0, 962.0], [10.0, 915.0], [11.0, 829.0], [12.0, 755.5], [13.0, 734.0], [14.0, 625.0], [15.0, 521.0], [16.0, 478.5], [1.0, 2686.0], [17.0, 448.0], [18.0, 435.0], [19.0, 398.0], [20.0, 408.5], [21.0, 231.0], [22.0, 374.5], [23.0, 249.5], [24.0, 247.5], [25.0, 317.0], [26.0, 236.5], [27.0, 194.0], [28.0, 126.5], [29.0, 35.0], [30.0, 24.5], [31.0, 60.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 16.5, "minX": 1.0, "maxY": 2675.0, "series": [{"data": [[32.0, 150.0], [33.0, 31.0], [36.0, 29.0], [37.0, 47.0], [38.0, 51.5], [42.0, 29.0], [45.0, 59.0], [47.0, 36.0], [3.0, 919.0], [48.0, 49.5], [49.0, 60.0], [50.0, 16.5], [4.0, 1500.5], [71.0, 41.0], [5.0, 1102.0], [89.0, 34.0], [6.0, 1057.5], [7.0, 1044.5], [8.0, 1011.0], [9.0, 962.0], [10.0, 913.5], [11.0, 827.0], [12.0, 753.0], [13.0, 733.0], [14.0, 624.5], [15.0, 520.5], [16.0, 478.0], [1.0, 2675.0], [17.0, 445.5], [18.0, 433.5], [19.0, 396.5], [20.0, 406.5], [21.0, 230.0], [22.0, 374.0], [23.0, 249.5], [24.0, 247.5], [25.0, 317.0], [26.0, 235.0], [27.0, 194.0], [28.0, 126.5], [29.0, 34.0], [30.0, 24.5], [31.0, 60.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.85, "minX": 1.60507656E12, "maxY": 15.316666666666666, "series": [{"data": [[1.60507686E12, 14.7], [1.60507668E12, 15.316666666666666], [1.6050768E12, 14.783333333333333], [1.60507662E12, 14.483333333333333], [1.60507692E12, 9.783333333333333], [1.60507674E12, 11.583333333333334], [1.60507656E12, 5.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507692E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.683333333333334, "minX": 1.60507656E12, "maxY": 15.316666666666666, "series": [{"data": [[1.60507686E12, 14.716666666666667], [1.60507668E12, 15.316666666666666], [1.6050768E12, 14.783333333333333], [1.60507662E12, 14.483333333333333], [1.60507692E12, 9.933333333333334], [1.60507674E12, 11.583333333333334], [1.60507656E12, 5.683333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507692E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.683333333333334, "minX": 1.60507656E12, "maxY": 15.316666666666666, "series": [{"data": [[1.60507686E12, 14.716666666666667], [1.60507668E12, 15.316666666666666], [1.6050768E12, 14.783333333333333], [1.60507662E12, 14.483333333333333], [1.60507692E12, 9.933333333333334], [1.60507674E12, 11.583333333333334], [1.60507656E12, 5.683333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507692E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.683333333333334, "minX": 1.60507656E12, "maxY": 15.316666666666666, "series": [{"data": [[1.60507686E12, 14.716666666666667], [1.60507668E12, 15.316666666666666], [1.6050768E12, 14.783333333333333], [1.60507662E12, 14.483333333333333], [1.60507692E12, 9.933333333333334], [1.60507674E12, 11.583333333333334], [1.60507656E12, 5.683333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507692E12, "title": "Total Transactions Per Second"}},
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

