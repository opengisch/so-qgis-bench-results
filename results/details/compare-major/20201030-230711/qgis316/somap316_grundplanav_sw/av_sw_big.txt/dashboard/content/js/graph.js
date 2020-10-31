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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 6329.0, "series": [{"data": [[0.0, 5.0], [0.1, 7.0], [0.2, 7.0], [0.3, 8.0], [0.4, 10.0], [0.5, 12.0], [0.6, 13.0], [0.7, 13.0], [0.8, 13.0], [0.9, 13.0], [1.0, 14.0], [1.1, 14.0], [1.2, 14.0], [1.3, 14.0], [1.4, 14.0], [1.5, 14.0], [1.6, 15.0], [1.7, 15.0], [1.8, 15.0], [1.9, 16.0], [2.0, 16.0], [2.1, 16.0], [2.2, 16.0], [2.3, 17.0], [2.4, 17.0], [2.5, 17.0], [2.6, 17.0], [2.7, 17.0], [2.8, 18.0], [2.9, 18.0], [3.0, 18.0], [3.1, 18.0], [3.2, 18.0], [3.3, 18.0], [3.4, 18.0], [3.5, 19.0], [3.6, 19.0], [3.7, 19.0], [3.8, 19.0], [3.9, 19.0], [4.0, 20.0], [4.1, 20.0], [4.2, 20.0], [4.3, 20.0], [4.4, 20.0], [4.5, 20.0], [4.6, 21.0], [4.7, 21.0], [4.8, 21.0], [4.9, 21.0], [5.0, 21.0], [5.1, 21.0], [5.2, 21.0], [5.3, 22.0], [5.4, 22.0], [5.5, 22.0], [5.6, 22.0], [5.7, 22.0], [5.8, 22.0], [5.9, 22.0], [6.0, 22.0], [6.1, 23.0], [6.2, 23.0], [6.3, 23.0], [6.4, 23.0], [6.5, 23.0], [6.6, 23.0], [6.7, 24.0], [6.8, 24.0], [6.9, 24.0], [7.0, 24.0], [7.1, 25.0], [7.2, 25.0], [7.3, 25.0], [7.4, 25.0], [7.5, 25.0], [7.6, 25.0], [7.7, 26.0], [7.8, 26.0], [7.9, 26.0], [8.0, 27.0], [8.1, 27.0], [8.2, 27.0], [8.3, 27.0], [8.4, 27.0], [8.5, 28.0], [8.6, 28.0], [8.7, 28.0], [8.8, 28.0], [8.9, 29.0], [9.0, 29.0], [9.1, 29.0], [9.2, 30.0], [9.3, 30.0], [9.4, 31.0], [9.5, 31.0], [9.6, 31.0], [9.7, 31.0], [9.8, 31.0], [9.9, 32.0], [10.0, 32.0], [10.1, 32.0], [10.2, 33.0], [10.3, 33.0], [10.4, 33.0], [10.5, 33.0], [10.6, 34.0], [10.7, 34.0], [10.8, 35.0], [10.9, 35.0], [11.0, 35.0], [11.1, 35.0], [11.2, 36.0], [11.3, 36.0], [11.4, 37.0], [11.5, 37.0], [11.6, 37.0], [11.7, 38.0], [11.8, 39.0], [11.9, 39.0], [12.0, 40.0], [12.1, 40.0], [12.2, 40.0], [12.3, 40.0], [12.4, 41.0], [12.5, 41.0], [12.6, 41.0], [12.7, 41.0], [12.8, 41.0], [12.9, 42.0], [13.0, 42.0], [13.1, 43.0], [13.2, 43.0], [13.3, 44.0], [13.4, 44.0], [13.5, 45.0], [13.6, 45.0], [13.7, 45.0], [13.8, 46.0], [13.9, 46.0], [14.0, 46.0], [14.1, 47.0], [14.2, 47.0], [14.3, 48.0], [14.4, 49.0], [14.5, 49.0], [14.6, 50.0], [14.7, 50.0], [14.8, 51.0], [14.9, 52.0], [15.0, 53.0], [15.1, 54.0], [15.2, 56.0], [15.3, 56.0], [15.4, 58.0], [15.5, 59.0], [15.6, 60.0], [15.7, 60.0], [15.8, 63.0], [15.9, 65.0], [16.0, 66.0], [16.1, 69.0], [16.2, 72.0], [16.3, 75.0], [16.4, 79.0], [16.5, 86.0], [16.6, 94.0], [16.7, 96.0], [16.8, 98.0], [16.9, 99.0], [17.0, 101.0], [17.1, 103.0], [17.2, 104.0], [17.3, 105.0], [17.4, 108.0], [17.5, 109.0], [17.6, 110.0], [17.7, 111.0], [17.8, 111.0], [17.9, 112.0], [18.0, 112.0], [18.1, 112.0], [18.2, 113.0], [18.3, 113.0], [18.4, 113.0], [18.5, 114.0], [18.6, 114.0], [18.7, 114.0], [18.8, 115.0], [18.9, 115.0], [19.0, 115.0], [19.1, 116.0], [19.2, 116.0], [19.3, 116.0], [19.4, 117.0], [19.5, 117.0], [19.6, 117.0], [19.7, 118.0], [19.8, 118.0], [19.9, 119.0], [20.0, 119.0], [20.1, 119.0], [20.2, 120.0], [20.3, 120.0], [20.4, 120.0], [20.5, 121.0], [20.6, 121.0], [20.7, 122.0], [20.8, 123.0], [20.9, 123.0], [21.0, 123.0], [21.1, 124.0], [21.2, 124.0], [21.3, 125.0], [21.4, 125.0], [21.5, 126.0], [21.6, 127.0], [21.7, 128.0], [21.8, 128.0], [21.9, 129.0], [22.0, 130.0], [22.1, 130.0], [22.2, 131.0], [22.3, 131.0], [22.4, 132.0], [22.5, 133.0], [22.6, 133.0], [22.7, 135.0], [22.8, 136.0], [22.9, 136.0], [23.0, 138.0], [23.1, 138.0], [23.2, 139.0], [23.3, 140.0], [23.4, 140.0], [23.5, 142.0], [23.6, 142.0], [23.7, 143.0], [23.8, 144.0], [23.9, 145.0], [24.0, 146.0], [24.1, 147.0], [24.2, 147.0], [24.3, 149.0], [24.4, 150.0], [24.5, 151.0], [24.6, 152.0], [24.7, 153.0], [24.8, 154.0], [24.9, 155.0], [25.0, 155.0], [25.1, 156.0], [25.2, 158.0], [25.3, 159.0], [25.4, 161.0], [25.5, 161.0], [25.6, 163.0], [25.7, 164.0], [25.8, 166.0], [25.9, 167.0], [26.0, 168.0], [26.1, 170.0], [26.2, 171.0], [26.3, 172.0], [26.4, 175.0], [26.5, 176.0], [26.6, 177.0], [26.7, 179.0], [26.8, 181.0], [26.9, 182.0], [27.0, 183.0], [27.1, 185.0], [27.2, 186.0], [27.3, 187.0], [27.4, 189.0], [27.5, 190.0], [27.6, 191.0], [27.7, 194.0], [27.8, 195.0], [27.9, 196.0], [28.0, 198.0], [28.1, 199.0], [28.2, 201.0], [28.3, 203.0], [28.4, 203.0], [28.5, 204.0], [28.6, 205.0], [28.7, 206.0], [28.8, 209.0], [28.9, 210.0], [29.0, 211.0], [29.1, 213.0], [29.2, 214.0], [29.3, 214.0], [29.4, 216.0], [29.5, 216.0], [29.6, 217.0], [29.7, 218.0], [29.8, 218.0], [29.9, 219.0], [30.0, 220.0], [30.1, 220.0], [30.2, 221.0], [30.3, 221.0], [30.4, 222.0], [30.5, 223.0], [30.6, 223.0], [30.7, 224.0], [30.8, 225.0], [30.9, 225.0], [31.0, 225.0], [31.1, 226.0], [31.2, 227.0], [31.3, 227.0], [31.4, 228.0], [31.5, 229.0], [31.6, 230.0], [31.7, 231.0], [31.8, 232.0], [31.9, 233.0], [32.0, 233.0], [32.1, 235.0], [32.2, 236.0], [32.3, 237.0], [32.4, 238.0], [32.5, 239.0], [32.6, 239.0], [32.7, 241.0], [32.8, 242.0], [32.9, 245.0], [33.0, 246.0], [33.1, 248.0], [33.2, 249.0], [33.3, 252.0], [33.4, 253.0], [33.5, 254.0], [33.6, 255.0], [33.7, 255.0], [33.8, 256.0], [33.9, 258.0], [34.0, 259.0], [34.1, 259.0], [34.2, 260.0], [34.3, 261.0], [34.4, 262.0], [34.5, 263.0], [34.6, 264.0], [34.7, 266.0], [34.8, 267.0], [34.9, 268.0], [35.0, 269.0], [35.1, 270.0], [35.2, 271.0], [35.3, 272.0], [35.4, 273.0], [35.5, 274.0], [35.6, 275.0], [35.7, 276.0], [35.8, 278.0], [35.9, 279.0], [36.0, 281.0], [36.1, 283.0], [36.2, 284.0], [36.3, 285.0], [36.4, 286.0], [36.5, 288.0], [36.6, 289.0], [36.7, 291.0], [36.8, 292.0], [36.9, 294.0], [37.0, 297.0], [37.1, 298.0], [37.2, 299.0], [37.3, 300.0], [37.4, 301.0], [37.5, 302.0], [37.6, 304.0], [37.7, 305.0], [37.8, 307.0], [37.9, 307.0], [38.0, 308.0], [38.1, 310.0], [38.2, 312.0], [38.3, 314.0], [38.4, 315.0], [38.5, 317.0], [38.6, 318.0], [38.7, 320.0], [38.8, 322.0], [38.9, 324.0], [39.0, 326.0], [39.1, 328.0], [39.2, 329.0], [39.3, 332.0], [39.4, 332.0], [39.5, 334.0], [39.6, 335.0], [39.7, 339.0], [39.8, 341.0], [39.9, 344.0], [40.0, 346.0], [40.1, 348.0], [40.2, 349.0], [40.3, 350.0], [40.4, 351.0], [40.5, 354.0], [40.6, 357.0], [40.7, 358.0], [40.8, 359.0], [40.9, 360.0], [41.0, 362.0], [41.1, 363.0], [41.2, 364.0], [41.3, 365.0], [41.4, 368.0], [41.5, 369.0], [41.6, 371.0], [41.7, 373.0], [41.8, 373.0], [41.9, 375.0], [42.0, 377.0], [42.1, 379.0], [42.2, 381.0], [42.3, 383.0], [42.4, 386.0], [42.5, 389.0], [42.6, 391.0], [42.7, 395.0], [42.8, 397.0], [42.9, 399.0], [43.0, 402.0], [43.1, 403.0], [43.2, 406.0], [43.3, 407.0], [43.4, 409.0], [43.5, 411.0], [43.6, 414.0], [43.7, 416.0], [43.8, 419.0], [43.9, 424.0], [44.0, 426.0], [44.1, 429.0], [44.2, 430.0], [44.3, 432.0], [44.4, 434.0], [44.5, 435.0], [44.6, 437.0], [44.7, 439.0], [44.8, 441.0], [44.9, 442.0], [45.0, 444.0], [45.1, 446.0], [45.2, 448.0], [45.3, 450.0], [45.4, 452.0], [45.5, 455.0], [45.6, 457.0], [45.7, 458.0], [45.8, 460.0], [45.9, 460.0], [46.0, 462.0], [46.1, 464.0], [46.2, 466.0], [46.3, 467.0], [46.4, 469.0], [46.5, 471.0], [46.6, 473.0], [46.7, 474.0], [46.8, 476.0], [46.9, 478.0], [47.0, 480.0], [47.1, 481.0], [47.2, 482.0], [47.3, 484.0], [47.4, 486.0], [47.5, 488.0], [47.6, 491.0], [47.7, 491.0], [47.8, 493.0], [47.9, 497.0], [48.0, 498.0], [48.1, 500.0], [48.2, 501.0], [48.3, 504.0], [48.4, 506.0], [48.5, 506.0], [48.6, 508.0], [48.7, 509.0], [48.8, 511.0], [48.9, 512.0], [49.0, 515.0], [49.1, 516.0], [49.2, 519.0], [49.3, 524.0], [49.4, 526.0], [49.5, 528.0], [49.6, 529.0], [49.7, 531.0], [49.8, 533.0], [49.9, 534.0], [50.0, 536.0], [50.1, 537.0], [50.2, 539.0], [50.3, 541.0], [50.4, 543.0], [50.5, 545.0], [50.6, 548.0], [50.7, 550.0], [50.8, 554.0], [50.9, 557.0], [51.0, 559.0], [51.1, 562.0], [51.2, 564.0], [51.3, 565.0], [51.4, 568.0], [51.5, 570.0], [51.6, 571.0], [51.7, 573.0], [51.8, 575.0], [51.9, 579.0], [52.0, 583.0], [52.1, 584.0], [52.2, 586.0], [52.3, 588.0], [52.4, 589.0], [52.5, 593.0], [52.6, 595.0], [52.7, 598.0], [52.8, 600.0], [52.9, 601.0], [53.0, 603.0], [53.1, 604.0], [53.2, 606.0], [53.3, 608.0], [53.4, 610.0], [53.5, 611.0], [53.6, 613.0], [53.7, 617.0], [53.8, 618.0], [53.9, 619.0], [54.0, 620.0], [54.1, 623.0], [54.2, 625.0], [54.3, 628.0], [54.4, 630.0], [54.5, 633.0], [54.6, 634.0], [54.7, 636.0], [54.8, 638.0], [54.9, 639.0], [55.0, 642.0], [55.1, 645.0], [55.2, 648.0], [55.3, 651.0], [55.4, 653.0], [55.5, 654.0], [55.6, 657.0], [55.7, 659.0], [55.8, 660.0], [55.9, 661.0], [56.0, 663.0], [56.1, 665.0], [56.2, 667.0], [56.3, 669.0], [56.4, 672.0], [56.5, 673.0], [56.6, 675.0], [56.7, 677.0], [56.8, 679.0], [56.9, 683.0], [57.0, 685.0], [57.1, 686.0], [57.2, 690.0], [57.3, 692.0], [57.4, 694.0], [57.5, 695.0], [57.6, 696.0], [57.7, 700.0], [57.8, 702.0], [57.9, 708.0], [58.0, 710.0], [58.1, 713.0], [58.2, 715.0], [58.3, 717.0], [58.4, 718.0], [58.5, 721.0], [58.6, 724.0], [58.7, 726.0], [58.8, 726.0], [58.9, 730.0], [59.0, 733.0], [59.1, 734.0], [59.2, 737.0], [59.3, 738.0], [59.4, 741.0], [59.5, 744.0], [59.6, 747.0], [59.7, 749.0], [59.8, 751.0], [59.9, 751.0], [60.0, 753.0], [60.1, 755.0], [60.2, 758.0], [60.3, 760.0], [60.4, 762.0], [60.5, 764.0], [60.6, 766.0], [60.7, 768.0], [60.8, 771.0], [60.9, 775.0], [61.0, 778.0], [61.1, 780.0], [61.2, 782.0], [61.3, 784.0], [61.4, 787.0], [61.5, 789.0], [61.6, 791.0], [61.7, 794.0], [61.8, 797.0], [61.9, 799.0], [62.0, 806.0], [62.1, 808.0], [62.2, 812.0], [62.3, 814.0], [62.4, 815.0], [62.5, 817.0], [62.6, 820.0], [62.7, 824.0], [62.8, 825.0], [62.9, 829.0], [63.0, 830.0], [63.1, 832.0], [63.2, 837.0], [63.3, 842.0], [63.4, 844.0], [63.5, 846.0], [63.6, 848.0], [63.7, 851.0], [63.8, 853.0], [63.9, 857.0], [64.0, 858.0], [64.1, 859.0], [64.2, 861.0], [64.3, 863.0], [64.4, 867.0], [64.5, 868.0], [64.6, 870.0], [64.7, 873.0], [64.8, 875.0], [64.9, 879.0], [65.0, 882.0], [65.1, 884.0], [65.2, 886.0], [65.3, 888.0], [65.4, 890.0], [65.5, 892.0], [65.6, 894.0], [65.7, 896.0], [65.8, 898.0], [65.9, 899.0], [66.0, 902.0], [66.1, 903.0], [66.2, 907.0], [66.3, 909.0], [66.4, 911.0], [66.5, 912.0], [66.6, 914.0], [66.7, 917.0], [66.8, 920.0], [66.9, 923.0], [67.0, 925.0], [67.1, 926.0], [67.2, 928.0], [67.3, 931.0], [67.4, 934.0], [67.5, 936.0], [67.6, 938.0], [67.7, 941.0], [67.8, 942.0], [67.9, 944.0], [68.0, 948.0], [68.1, 950.0], [68.2, 951.0], [68.3, 953.0], [68.4, 954.0], [68.5, 958.0], [68.6, 959.0], [68.7, 963.0], [68.8, 966.0], [68.9, 967.0], [69.0, 969.0], [69.1, 971.0], [69.2, 973.0], [69.3, 975.0], [69.4, 977.0], [69.5, 982.0], [69.6, 984.0], [69.7, 984.0], [69.8, 988.0], [69.9, 990.0], [70.0, 993.0], [70.1, 995.0], [70.2, 996.0], [70.3, 997.0], [70.4, 1000.0], [70.5, 1002.0], [70.6, 1006.0], [70.7, 1010.0], [70.8, 1012.0], [70.9, 1013.0], [71.0, 1014.0], [71.1, 1016.0], [71.2, 1019.0], [71.3, 1021.0], [71.4, 1023.0], [71.5, 1024.0], [71.6, 1026.0], [71.7, 1028.0], [71.8, 1029.0], [71.9, 1030.0], [72.0, 1033.0], [72.1, 1035.0], [72.2, 1037.0], [72.3, 1039.0], [72.4, 1040.0], [72.5, 1041.0], [72.6, 1043.0], [72.7, 1046.0], [72.8, 1048.0], [72.9, 1051.0], [73.0, 1054.0], [73.1, 1056.0], [73.2, 1058.0], [73.3, 1059.0], [73.4, 1062.0], [73.5, 1063.0], [73.6, 1065.0], [73.7, 1069.0], [73.8, 1075.0], [73.9, 1077.0], [74.0, 1079.0], [74.1, 1081.0], [74.2, 1082.0], [74.3, 1085.0], [74.4, 1086.0], [74.5, 1088.0], [74.6, 1091.0], [74.7, 1093.0], [74.8, 1094.0], [74.9, 1098.0], [75.0, 1101.0], [75.1, 1102.0], [75.2, 1103.0], [75.3, 1105.0], [75.4, 1107.0], [75.5, 1109.0], [75.6, 1111.0], [75.7, 1113.0], [75.8, 1115.0], [75.9, 1117.0], [76.0, 1121.0], [76.1, 1123.0], [76.2, 1124.0], [76.3, 1126.0], [76.4, 1127.0], [76.5, 1129.0], [76.6, 1131.0], [76.7, 1133.0], [76.8, 1135.0], [76.9, 1136.0], [77.0, 1139.0], [77.1, 1141.0], [77.2, 1142.0], [77.3, 1143.0], [77.4, 1145.0], [77.5, 1147.0], [77.6, 1149.0], [77.7, 1151.0], [77.8, 1155.0], [77.9, 1157.0], [78.0, 1158.0], [78.1, 1159.0], [78.2, 1160.0], [78.3, 1164.0], [78.4, 1169.0], [78.5, 1173.0], [78.6, 1176.0], [78.7, 1177.0], [78.8, 1180.0], [78.9, 1181.0], [79.0, 1182.0], [79.1, 1185.0], [79.2, 1186.0], [79.3, 1188.0], [79.4, 1190.0], [79.5, 1192.0], [79.6, 1193.0], [79.7, 1195.0], [79.8, 1199.0], [79.9, 1200.0], [80.0, 1202.0], [80.1, 1206.0], [80.2, 1209.0], [80.3, 1211.0], [80.4, 1214.0], [80.5, 1217.0], [80.6, 1220.0], [80.7, 1224.0], [80.8, 1226.0], [80.9, 1228.0], [81.0, 1231.0], [81.1, 1236.0], [81.2, 1239.0], [81.3, 1242.0], [81.4, 1245.0], [81.5, 1247.0], [81.6, 1248.0], [81.7, 1251.0], [81.8, 1255.0], [81.9, 1257.0], [82.0, 1259.0], [82.1, 1260.0], [82.2, 1263.0], [82.3, 1265.0], [82.4, 1266.0], [82.5, 1268.0], [82.6, 1270.0], [82.7, 1274.0], [82.8, 1279.0], [82.9, 1282.0], [83.0, 1283.0], [83.1, 1284.0], [83.2, 1290.0], [83.3, 1290.0], [83.4, 1292.0], [83.5, 1294.0], [83.6, 1296.0], [83.7, 1301.0], [83.8, 1302.0], [83.9, 1306.0], [84.0, 1310.0], [84.1, 1311.0], [84.2, 1313.0], [84.3, 1317.0], [84.4, 1318.0], [84.5, 1320.0], [84.6, 1323.0], [84.7, 1324.0], [84.8, 1326.0], [84.9, 1328.0], [85.0, 1332.0], [85.1, 1335.0], [85.2, 1337.0], [85.3, 1340.0], [85.4, 1345.0], [85.5, 1347.0], [85.6, 1351.0], [85.7, 1353.0], [85.8, 1354.0], [85.9, 1356.0], [86.0, 1359.0], [86.1, 1360.0], [86.2, 1363.0], [86.3, 1366.0], [86.4, 1370.0], [86.5, 1373.0], [86.6, 1376.0], [86.7, 1376.0], [86.8, 1382.0], [86.9, 1391.0], [87.0, 1394.0], [87.1, 1397.0], [87.2, 1399.0], [87.3, 1400.0], [87.4, 1411.0], [87.5, 1416.0], [87.6, 1421.0], [87.7, 1429.0], [87.8, 1431.0], [87.9, 1437.0], [88.0, 1450.0], [88.1, 1455.0], [88.2, 1466.0], [88.3, 1468.0], [88.4, 1471.0], [88.5, 1480.0], [88.6, 1484.0], [88.7, 1489.0], [88.8, 1494.0], [88.9, 1501.0], [89.0, 1510.0], [89.1, 1522.0], [89.2, 1525.0], [89.3, 1534.0], [89.4, 1535.0], [89.5, 1547.0], [89.6, 1549.0], [89.7, 1554.0], [89.8, 1558.0], [89.9, 1564.0], [90.0, 1571.0], [90.1, 1578.0], [90.2, 1581.0], [90.3, 1586.0], [90.4, 1590.0], [90.5, 1607.0], [90.6, 1614.0], [90.7, 1625.0], [90.8, 1628.0], [90.9, 1635.0], [91.0, 1639.0], [91.1, 1647.0], [91.2, 1657.0], [91.3, 1659.0], [91.4, 1665.0], [91.5, 1673.0], [91.6, 1682.0], [91.7, 1689.0], [91.8, 1692.0], [91.9, 1695.0], [92.0, 1706.0], [92.1, 1711.0], [92.2, 1720.0], [92.3, 1726.0], [92.4, 1733.0], [92.5, 1742.0], [92.6, 1755.0], [92.7, 1769.0], [92.8, 1777.0], [92.9, 1786.0], [93.0, 1799.0], [93.1, 1806.0], [93.2, 1813.0], [93.3, 1830.0], [93.4, 1838.0], [93.5, 1853.0], [93.6, 1873.0], [93.7, 1887.0], [93.8, 1898.0], [93.9, 1908.0], [94.0, 1911.0], [94.1, 1919.0], [94.2, 1936.0], [94.3, 1951.0], [94.4, 1969.0], [94.5, 1978.0], [94.6, 1992.0], [94.7, 2000.0], [94.8, 2004.0], [94.9, 2013.0], [95.0, 2021.0], [95.1, 2030.0], [95.2, 2039.0], [95.3, 2047.0], [95.4, 2066.0], [95.5, 2082.0], [95.6, 2092.0], [95.7, 2104.0], [95.8, 2121.0], [95.9, 2135.0], [96.0, 2146.0], [96.1, 2163.0], [96.2, 2178.0], [96.3, 2182.0], [96.4, 2214.0], [96.5, 2232.0], [96.6, 2250.0], [96.7, 2278.0], [96.8, 2290.0], [96.9, 2313.0], [97.0, 2327.0], [97.1, 2350.0], [97.2, 2358.0], [97.3, 2368.0], [97.4, 2409.0], [97.5, 2433.0], [97.6, 2449.0], [97.7, 2467.0], [97.8, 2500.0], [97.9, 2523.0], [98.0, 2576.0], [98.1, 2621.0], [98.2, 2651.0], [98.3, 2695.0], [98.4, 2721.0], [98.5, 2774.0], [98.6, 2827.0], [98.7, 2887.0], [98.8, 2919.0], [98.9, 2998.0], [99.0, 3042.0], [99.1, 3091.0], [99.2, 3138.0], [99.3, 3241.0], [99.4, 3353.0], [99.5, 3698.0], [99.6, 4010.0], [99.7, 4220.0], [99.8, 4660.0], [99.9, 5063.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 879.0, "series": [{"data": [[0.0, 879.0], [600.0, 254.0], [700.0, 219.0], [800.0, 208.0], [900.0, 231.0], [1000.0, 238.0], [1100.0, 256.0], [1200.0, 194.0], [1300.0, 190.0], [1400.0, 83.0], [1500.0, 81.0], [1600.0, 78.0], [1700.0, 55.0], [1800.0, 43.0], [1900.0, 44.0], [2000.0, 52.0], [2100.0, 36.0], [2200.0, 24.0], [2300.0, 27.0], [2400.0, 21.0], [2500.0, 16.0], [2600.0, 14.0], [2800.0, 10.0], [2700.0, 10.0], [2900.0, 9.0], [3000.0, 13.0], [3100.0, 6.0], [3200.0, 5.0], [3300.0, 2.0], [3500.0, 3.0], [3700.0, 3.0], [3600.0, 3.0], [3800.0, 1.0], [4000.0, 3.0], [4200.0, 3.0], [4100.0, 2.0], [4600.0, 1.0], [4500.0, 1.0], [4400.0, 1.0], [4800.0, 2.0], [4700.0, 1.0], [5000.0, 2.0], [5400.0, 1.0], [5600.0, 1.0], [5700.0, 1.0], [5800.0, 1.0], [6300.0, 1.0], [100.0, 581.0], [200.0, 471.0], [300.0, 297.0], [400.0, 266.0], [500.0, 246.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 577.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2500.0, "series": [{"data": [[0.0, 2500.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2113.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 577.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.901960784313726, "minX": 1.60410186E12, "maxY": 10.0, "series": [{"data": [[1.60410216E12, 10.0], [1.60410186E12, 10.0], [1.60410204E12, 10.0], [1.60410222E12, 9.901960784313726], [1.60410192E12, 10.0], [1.6041021E12, 10.0], [1.60410198E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410222E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 188.0, "minX": 1.0, "maxY": 3241.0, "series": [{"data": [[8.0, 188.0], [4.0, 1391.0], [2.0, 3002.0], [1.0, 3241.0], [9.0, 1053.0], [10.0, 715.1044199961387], [5.0, 1623.0], [6.0, 544.0], [3.0, 946.0], [7.0, 541.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 716.2784200385349]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2789.8333333333335, "minX": 1.60410186E12, "maxY": 4460353.683333334, "series": [{"data": [[1.60410216E12, 4460353.683333334], [1.60410186E12, 2077369.25], [1.60410204E12, 3807890.3833333333], [1.60410222E12, 2210819.05], [1.60410192E12, 3711734.8], [1.6041021E12, 3376695.183333333], [1.60410198E12, 4330174.833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60410216E12, 7359.333333333333], [1.60410186E12, 2789.8333333333335], [1.60410204E12, 5576.733333333334], [1.60410222E12, 3467.383333333333], [1.60410192E12, 6381.6], [1.6041021E12, 6265.033333333334], [1.60410198E12, 6737.416666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410222E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 617.90412371134, "minX": 1.60410186E12, "maxY": 873.0283505154641, "series": [{"data": [[1.60410216E12, 617.90412371134], [1.60410186E12, 873.0283505154641], [1.60410204E12, 802.069057104914], [1.60410222E12, 825.7015250544658], [1.60410192E12, 696.0518433179723], [1.6041021E12, 691.6562499999998], [1.60410198E12, 669.6666666666669]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410222E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 616.2226804123711, "minX": 1.60410186E12, "maxY": 870.688144329897, "series": [{"data": [[1.60410216E12, 616.2226804123711], [1.60410186E12, 870.688144329897], [1.60410204E12, 800.1620185922974], [1.60410222E12, 823.6710239651409], [1.60410192E12, 694.1762672811059], [1.6041021E12, 690.1724537037043], [1.60410198E12, 667.5664414414414]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410222E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011520737327188928, "minX": 1.60410186E12, "maxY": 0.2628865979381442, "series": [{"data": [[1.60410216E12, 0.014432989690721657], [1.60410186E12, 0.2628865979381442], [1.60410204E12, 0.014608233731739721], [1.60410222E12, 0.015250544662309382], [1.60410192E12, 0.011520737327188928], [1.6041021E12, 0.016203703703703703], [1.60410198E12, 0.018018018018018025]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410222E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60410186E12, "maxY": 6329.0, "series": [{"data": [[1.60410216E12, 3759.0], [1.60410186E12, 5706.0], [1.60410204E12, 6329.0], [1.60410222E12, 4238.0], [1.60410192E12, 4660.0], [1.6041021E12, 5624.0], [1.60410198E12, 4842.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60410216E12, 13.0], [1.60410186E12, 19.0], [1.60410204E12, 13.0], [1.60410222E12, 22.0], [1.60410192E12, 15.64199958562851], [1.6041021E12, 11.78499979376793], [1.60410198E12, 14.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60410216E12, 13.0], [1.60410186E12, 19.0], [1.60410204E12, 13.0], [1.60410222E12, 22.0], [1.60410192E12, 17.206200165748598], [1.6041021E12, 12.563500082492828], [1.60410198E12, 14.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60410216E12, 13.0], [1.60410186E12, 19.0], [1.60410204E12, 13.0], [1.60410222E12, 22.0], [1.60410192E12, 16.510999792814253], [1.6041021E12, 12.217499896883965], [1.60410198E12, 14.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60410216E12, 5.0], [1.60410186E12, 18.0], [1.60410204E12, 12.0], [1.60410222E12, 12.0], [1.60410192E12, 6.0], [1.6041021E12, 7.0], [1.60410198E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60410216E12, 306.5], [1.60410186E12, 711.5], [1.60410204E12, 628.0], [1.60410222E12, 695.0], [1.60410192E12, 466.5], [1.6041021E12, 522.5], [1.60410198E12, 435.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410222E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 16.5, "minX": 2.0, "maxY": 2537.0, "series": [{"data": [[2.0, 2537.0], [32.0, 49.5], [35.0, 60.0], [34.0, 31.5], [36.0, 24.5], [39.0, 170.0], [38.0, 26.5], [41.0, 25.0], [40.0, 48.0], [45.0, 29.0], [47.0, 66.0], [3.0, 1085.0], [49.0, 31.0], [50.0, 16.5], [51.0, 37.0], [54.0, 56.0], [4.0, 1510.5], [68.0, 46.0], [5.0, 1568.0], [92.0, 45.0], [6.0, 1126.0], [7.0, 1036.0], [8.0, 1009.0], [9.0, 925.0], [10.0, 940.5], [11.0, 715.0], [12.0, 762.0], [13.0, 730.0], [14.0, 690.5], [15.0, 626.5], [16.0, 559.5], [17.0, 498.0], [18.0, 493.5], [19.0, 393.0], [20.0, 433.5], [21.0, 227.0], [22.0, 259.5], [23.0, 239.0], [24.0, 292.0], [25.0, 217.0], [26.0, 78.5], [27.0, 18.0], [29.0, 144.5], [30.0, 26.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 92.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 16.5, "minX": 2.0, "maxY": 2527.5, "series": [{"data": [[2.0, 2527.5], [32.0, 49.0], [35.0, 60.0], [34.0, 31.5], [36.0, 24.0], [39.0, 169.0], [38.0, 26.0], [41.0, 25.0], [40.0, 47.5], [45.0, 29.0], [47.0, 65.0], [3.0, 1071.0], [49.0, 31.0], [50.0, 16.5], [51.0, 37.0], [54.0, 56.0], [4.0, 1506.5], [68.0, 46.0], [5.0, 1566.0], [92.0, 44.5], [6.0, 1119.0], [7.0, 1034.0], [8.0, 1006.5], [9.0, 922.0], [10.0, 939.5], [11.0, 713.0], [12.0, 761.5], [13.0, 729.0], [14.0, 689.0], [15.0, 624.5], [16.0, 558.5], [17.0, 497.0], [18.0, 492.0], [19.0, 393.0], [20.0, 432.5], [21.0, 227.0], [22.0, 259.5], [23.0, 237.5], [24.0, 291.5], [25.0, 215.0], [26.0, 78.5], [27.0, 18.0], [29.0, 144.0], [30.0, 26.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 92.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.633333333333334, "minX": 1.60410186E12, "maxY": 16.166666666666668, "series": [{"data": [[1.60410216E12, 16.166666666666668], [1.60410186E12, 6.633333333333334], [1.60410204E12, 12.55], [1.60410222E12, 7.483333333333333], [1.60410192E12, 14.45], [1.6041021E12, 14.4], [1.60410198E12, 14.816666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410222E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.466666666666667, "minX": 1.60410186E12, "maxY": 16.166666666666668, "series": [{"data": [[1.60410216E12, 16.166666666666668], [1.60410186E12, 6.466666666666667], [1.60410204E12, 12.55], [1.60410222E12, 7.65], [1.60410192E12, 14.466666666666667], [1.6041021E12, 14.4], [1.60410198E12, 14.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410222E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.466666666666667, "minX": 1.60410186E12, "maxY": 16.166666666666668, "series": [{"data": [[1.60410216E12, 16.166666666666668], [1.60410186E12, 6.466666666666667], [1.60410204E12, 12.55], [1.60410222E12, 7.65], [1.60410192E12, 14.466666666666667], [1.6041021E12, 14.4], [1.60410198E12, 14.8]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410222E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.466666666666667, "minX": 1.60410186E12, "maxY": 16.166666666666668, "series": [{"data": [[1.60410216E12, 16.166666666666668], [1.60410186E12, 6.466666666666667], [1.60410204E12, 12.55], [1.60410222E12, 7.65], [1.60410192E12, 14.466666666666667], [1.6041021E12, 14.4], [1.60410198E12, 14.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410222E12, "title": "Total Transactions Per Second"}},
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

