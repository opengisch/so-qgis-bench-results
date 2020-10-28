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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 9979.0, "series": [{"data": [[0.0, 5.0], [0.1, 6.0], [0.2, 7.0], [0.3, 8.0], [0.4, 9.0], [0.5, 10.0], [0.6, 12.0], [0.7, 13.0], [0.8, 13.0], [0.9, 13.0], [1.0, 14.0], [1.1, 14.0], [1.2, 14.0], [1.3, 15.0], [1.4, 15.0], [1.5, 15.0], [1.6, 16.0], [1.7, 16.0], [1.8, 17.0], [1.9, 17.0], [2.0, 17.0], [2.1, 18.0], [2.2, 18.0], [2.3, 18.0], [2.4, 19.0], [2.5, 19.0], [2.6, 19.0], [2.7, 20.0], [2.8, 20.0], [2.9, 20.0], [3.0, 20.0], [3.1, 21.0], [3.2, 21.0], [3.3, 21.0], [3.4, 22.0], [3.5, 22.0], [3.6, 22.0], [3.7, 22.0], [3.8, 22.0], [3.9, 22.0], [4.0, 23.0], [4.1, 23.0], [4.2, 23.0], [4.3, 23.0], [4.4, 23.0], [4.5, 24.0], [4.6, 24.0], [4.7, 24.0], [4.8, 24.0], [4.9, 24.0], [5.0, 24.0], [5.1, 25.0], [5.2, 25.0], [5.3, 25.0], [5.4, 25.0], [5.5, 26.0], [5.6, 26.0], [5.7, 26.0], [5.8, 26.0], [5.9, 27.0], [6.0, 27.0], [6.1, 27.0], [6.2, 27.0], [6.3, 27.0], [6.4, 28.0], [6.5, 28.0], [6.6, 28.0], [6.7, 28.0], [6.8, 28.0], [6.9, 28.0], [7.0, 29.0], [7.1, 29.0], [7.2, 29.0], [7.3, 29.0], [7.4, 30.0], [7.5, 30.0], [7.6, 30.0], [7.7, 30.0], [7.8, 31.0], [7.9, 31.0], [8.0, 31.0], [8.1, 31.0], [8.2, 31.0], [8.3, 31.0], [8.4, 32.0], [8.5, 32.0], [8.6, 32.0], [8.7, 32.0], [8.8, 32.0], [8.9, 33.0], [9.0, 33.0], [9.1, 34.0], [9.2, 34.0], [9.3, 34.0], [9.4, 34.0], [9.5, 35.0], [9.6, 36.0], [9.7, 36.0], [9.8, 37.0], [9.9, 37.0], [10.0, 38.0], [10.1, 38.0], [10.2, 38.0], [10.3, 39.0], [10.4, 39.0], [10.5, 39.0], [10.6, 39.0], [10.7, 39.0], [10.8, 39.0], [10.9, 40.0], [11.0, 40.0], [11.1, 40.0], [11.2, 40.0], [11.3, 41.0], [11.4, 41.0], [11.5, 42.0], [11.6, 42.0], [11.7, 42.0], [11.8, 42.0], [11.9, 43.0], [12.0, 43.0], [12.1, 43.0], [12.2, 43.0], [12.3, 44.0], [12.4, 44.0], [12.5, 44.0], [12.6, 44.0], [12.7, 44.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 46.0], [13.3, 46.0], [13.4, 47.0], [13.5, 47.0], [13.6, 47.0], [13.7, 47.0], [13.8, 48.0], [13.9, 49.0], [14.0, 49.0], [14.1, 50.0], [14.2, 50.0], [14.3, 51.0], [14.4, 51.0], [14.5, 51.0], [14.6, 52.0], [14.7, 53.0], [14.8, 53.0], [14.9, 53.0], [15.0, 54.0], [15.1, 56.0], [15.2, 58.0], [15.3, 59.0], [15.4, 60.0], [15.5, 61.0], [15.6, 61.0], [15.7, 63.0], [15.8, 63.0], [15.9, 65.0], [16.0, 66.0], [16.1, 67.0], [16.2, 71.0], [16.3, 81.0], [16.4, 87.0], [16.5, 89.0], [16.6, 92.0], [16.7, 94.0], [16.8, 98.0], [16.9, 100.0], [17.0, 102.0], [17.1, 102.0], [17.2, 105.0], [17.3, 106.0], [17.4, 109.0], [17.5, 110.0], [17.6, 111.0], [17.7, 112.0], [17.8, 112.0], [17.9, 113.0], [18.0, 113.0], [18.1, 113.0], [18.2, 114.0], [18.3, 114.0], [18.4, 114.0], [18.5, 115.0], [18.6, 115.0], [18.7, 115.0], [18.8, 115.0], [18.9, 116.0], [19.0, 116.0], [19.1, 116.0], [19.2, 116.0], [19.3, 117.0], [19.4, 117.0], [19.5, 117.0], [19.6, 117.0], [19.7, 118.0], [19.8, 118.0], [19.9, 118.0], [20.0, 119.0], [20.1, 119.0], [20.2, 119.0], [20.3, 120.0], [20.4, 120.0], [20.5, 121.0], [20.6, 121.0], [20.7, 122.0], [20.8, 122.0], [20.9, 122.0], [21.0, 123.0], [21.1, 123.0], [21.2, 124.0], [21.3, 124.0], [21.4, 124.0], [21.5, 125.0], [21.6, 126.0], [21.7, 127.0], [21.8, 127.0], [21.9, 127.0], [22.0, 128.0], [22.1, 128.0], [22.2, 129.0], [22.3, 129.0], [22.4, 130.0], [22.5, 130.0], [22.6, 131.0], [22.7, 132.0], [22.8, 132.0], [22.9, 133.0], [23.0, 134.0], [23.1, 134.0], [23.2, 135.0], [23.3, 136.0], [23.4, 137.0], [23.5, 137.0], [23.6, 138.0], [23.7, 139.0], [23.8, 139.0], [23.9, 140.0], [24.0, 141.0], [24.1, 141.0], [24.2, 142.0], [24.3, 143.0], [24.4, 144.0], [24.5, 145.0], [24.6, 145.0], [24.7, 146.0], [24.8, 147.0], [24.9, 148.0], [25.0, 149.0], [25.1, 150.0], [25.2, 151.0], [25.3, 153.0], [25.4, 154.0], [25.5, 156.0], [25.6, 157.0], [25.7, 158.0], [25.8, 160.0], [25.9, 162.0], [26.0, 163.0], [26.1, 164.0], [26.2, 165.0], [26.3, 166.0], [26.4, 168.0], [26.5, 170.0], [26.6, 172.0], [26.7, 173.0], [26.8, 176.0], [26.9, 177.0], [27.0, 178.0], [27.1, 179.0], [27.2, 180.0], [27.3, 181.0], [27.4, 184.0], [27.5, 186.0], [27.6, 187.0], [27.7, 188.0], [27.8, 189.0], [27.9, 192.0], [28.0, 192.0], [28.1, 193.0], [28.2, 194.0], [28.3, 196.0], [28.4, 197.0], [28.5, 200.0], [28.6, 200.0], [28.7, 202.0], [28.8, 205.0], [28.9, 206.0], [29.0, 208.0], [29.1, 208.0], [29.2, 210.0], [29.3, 211.0], [29.4, 212.0], [29.5, 213.0], [29.6, 214.0], [29.7, 215.0], [29.8, 217.0], [29.9, 218.0], [30.0, 218.0], [30.1, 220.0], [30.2, 221.0], [30.3, 222.0], [30.4, 223.0], [30.5, 223.0], [30.6, 224.0], [30.7, 225.0], [30.8, 225.0], [30.9, 226.0], [31.0, 226.0], [31.1, 227.0], [31.2, 227.0], [31.3, 228.0], [31.4, 228.0], [31.5, 229.0], [31.6, 230.0], [31.7, 230.0], [31.8, 231.0], [31.9, 231.0], [32.0, 232.0], [32.1, 232.0], [32.2, 233.0], [32.3, 234.0], [32.4, 236.0], [32.5, 236.0], [32.6, 237.0], [32.7, 238.0], [32.8, 238.0], [32.9, 239.0], [33.0, 240.0], [33.1, 242.0], [33.2, 243.0], [33.3, 244.0], [33.4, 245.0], [33.5, 245.0], [33.6, 247.0], [33.7, 248.0], [33.8, 248.0], [33.9, 250.0], [34.0, 251.0], [34.1, 252.0], [34.2, 253.0], [34.3, 254.0], [34.4, 255.0], [34.5, 256.0], [34.6, 259.0], [34.7, 260.0], [34.8, 262.0], [34.9, 263.0], [35.0, 265.0], [35.1, 267.0], [35.2, 268.0], [35.3, 269.0], [35.4, 271.0], [35.5, 273.0], [35.6, 274.0], [35.7, 276.0], [35.8, 276.0], [35.9, 278.0], [36.0, 279.0], [36.1, 281.0], [36.2, 282.0], [36.3, 284.0], [36.4, 285.0], [36.5, 285.0], [36.6, 286.0], [36.7, 287.0], [36.8, 289.0], [36.9, 291.0], [37.0, 293.0], [37.1, 294.0], [37.2, 294.0], [37.3, 295.0], [37.4, 297.0], [37.5, 298.0], [37.6, 300.0], [37.7, 300.0], [37.8, 302.0], [37.9, 304.0], [38.0, 306.0], [38.1, 306.0], [38.2, 309.0], [38.3, 311.0], [38.4, 313.0], [38.5, 314.0], [38.6, 315.0], [38.7, 316.0], [38.8, 317.0], [38.9, 319.0], [39.0, 319.0], [39.1, 321.0], [39.2, 321.0], [39.3, 323.0], [39.4, 325.0], [39.5, 326.0], [39.6, 328.0], [39.7, 330.0], [39.8, 332.0], [39.9, 335.0], [40.0, 338.0], [40.1, 339.0], [40.2, 341.0], [40.3, 343.0], [40.4, 345.0], [40.5, 346.0], [40.6, 350.0], [40.7, 351.0], [40.8, 352.0], [40.9, 354.0], [41.0, 355.0], [41.1, 356.0], [41.2, 359.0], [41.3, 360.0], [41.4, 362.0], [41.5, 363.0], [41.6, 365.0], [41.7, 367.0], [41.8, 368.0], [41.9, 370.0], [42.0, 373.0], [42.1, 376.0], [42.2, 379.0], [42.3, 380.0], [42.4, 383.0], [42.5, 385.0], [42.6, 387.0], [42.7, 390.0], [42.8, 393.0], [42.9, 394.0], [43.0, 398.0], [43.1, 399.0], [43.2, 401.0], [43.3, 402.0], [43.4, 404.0], [43.5, 405.0], [43.6, 408.0], [43.7, 411.0], [43.8, 413.0], [43.9, 414.0], [44.0, 415.0], [44.1, 418.0], [44.2, 421.0], [44.3, 423.0], [44.4, 425.0], [44.5, 428.0], [44.6, 430.0], [44.7, 431.0], [44.8, 433.0], [44.9, 435.0], [45.0, 437.0], [45.1, 439.0], [45.2, 441.0], [45.3, 444.0], [45.4, 446.0], [45.5, 448.0], [45.6, 450.0], [45.7, 452.0], [45.8, 455.0], [45.9, 456.0], [46.0, 460.0], [46.1, 463.0], [46.2, 464.0], [46.3, 467.0], [46.4, 469.0], [46.5, 472.0], [46.6, 473.0], [46.7, 477.0], [46.8, 480.0], [46.9, 483.0], [47.0, 485.0], [47.1, 488.0], [47.2, 489.0], [47.3, 492.0], [47.4, 493.0], [47.5, 493.0], [47.6, 495.0], [47.7, 497.0], [47.8, 499.0], [47.9, 500.0], [48.0, 502.0], [48.1, 505.0], [48.2, 507.0], [48.3, 508.0], [48.4, 511.0], [48.5, 512.0], [48.6, 515.0], [48.7, 519.0], [48.8, 520.0], [48.9, 522.0], [49.0, 524.0], [49.1, 527.0], [49.2, 528.0], [49.3, 531.0], [49.4, 532.0], [49.5, 534.0], [49.6, 535.0], [49.7, 540.0], [49.8, 541.0], [49.9, 543.0], [50.0, 546.0], [50.1, 549.0], [50.2, 551.0], [50.3, 554.0], [50.4, 555.0], [50.5, 557.0], [50.6, 558.0], [50.7, 561.0], [50.8, 563.0], [50.9, 566.0], [51.0, 568.0], [51.1, 569.0], [51.2, 571.0], [51.3, 573.0], [51.4, 575.0], [51.5, 578.0], [51.6, 581.0], [51.7, 582.0], [51.8, 584.0], [51.9, 585.0], [52.0, 588.0], [52.1, 590.0], [52.2, 592.0], [52.3, 596.0], [52.4, 599.0], [52.5, 601.0], [52.6, 605.0], [52.7, 607.0], [52.8, 608.0], [52.9, 611.0], [53.0, 614.0], [53.1, 615.0], [53.2, 616.0], [53.3, 618.0], [53.4, 620.0], [53.5, 622.0], [53.6, 623.0], [53.7, 625.0], [53.8, 626.0], [53.9, 628.0], [54.0, 630.0], [54.1, 631.0], [54.2, 634.0], [54.3, 635.0], [54.4, 637.0], [54.5, 639.0], [54.6, 641.0], [54.7, 644.0], [54.8, 649.0], [54.9, 650.0], [55.0, 651.0], [55.1, 652.0], [55.2, 653.0], [55.3, 656.0], [55.4, 657.0], [55.5, 658.0], [55.6, 659.0], [55.7, 661.0], [55.8, 666.0], [55.9, 668.0], [56.0, 669.0], [56.1, 671.0], [56.2, 672.0], [56.3, 673.0], [56.4, 675.0], [56.5, 678.0], [56.6, 680.0], [56.7, 681.0], [56.8, 682.0], [56.9, 683.0], [57.0, 686.0], [57.1, 688.0], [57.2, 688.0], [57.3, 690.0], [57.4, 692.0], [57.5, 695.0], [57.6, 697.0], [57.7, 698.0], [57.8, 700.0], [57.9, 703.0], [58.0, 705.0], [58.1, 707.0], [58.2, 709.0], [58.3, 711.0], [58.4, 716.0], [58.5, 719.0], [58.6, 720.0], [58.7, 724.0], [58.8, 726.0], [58.9, 729.0], [59.0, 732.0], [59.1, 733.0], [59.2, 735.0], [59.3, 737.0], [59.4, 738.0], [59.5, 739.0], [59.6, 741.0], [59.7, 742.0], [59.8, 743.0], [59.9, 746.0], [60.0, 747.0], [60.1, 752.0], [60.2, 755.0], [60.3, 758.0], [60.4, 761.0], [60.5, 762.0], [60.6, 766.0], [60.7, 767.0], [60.8, 770.0], [60.9, 774.0], [61.0, 777.0], [61.1, 781.0], [61.2, 784.0], [61.3, 789.0], [61.4, 791.0], [61.5, 793.0], [61.6, 796.0], [61.7, 802.0], [61.8, 803.0], [61.9, 805.0], [62.0, 807.0], [62.1, 810.0], [62.2, 814.0], [62.3, 818.0], [62.4, 821.0], [62.5, 823.0], [62.6, 826.0], [62.7, 827.0], [62.8, 830.0], [62.9, 831.0], [63.0, 836.0], [63.1, 840.0], [63.2, 842.0], [63.3, 846.0], [63.4, 847.0], [63.5, 851.0], [63.6, 854.0], [63.7, 857.0], [63.8, 859.0], [63.9, 860.0], [64.0, 862.0], [64.1, 864.0], [64.2, 868.0], [64.3, 872.0], [64.4, 875.0], [64.5, 877.0], [64.6, 880.0], [64.7, 883.0], [64.8, 886.0], [64.9, 887.0], [65.0, 891.0], [65.1, 893.0], [65.2, 899.0], [65.3, 902.0], [65.4, 905.0], [65.5, 909.0], [65.6, 910.0], [65.7, 913.0], [65.8, 915.0], [65.9, 917.0], [66.0, 918.0], [66.1, 920.0], [66.2, 923.0], [66.3, 926.0], [66.4, 929.0], [66.5, 931.0], [66.6, 934.0], [66.7, 937.0], [66.8, 941.0], [66.9, 943.0], [67.0, 945.0], [67.1, 946.0], [67.2, 952.0], [67.3, 955.0], [67.4, 957.0], [67.5, 959.0], [67.6, 965.0], [67.7, 966.0], [67.8, 968.0], [67.9, 971.0], [68.0, 973.0], [68.1, 974.0], [68.2, 977.0], [68.3, 978.0], [68.4, 982.0], [68.5, 986.0], [68.6, 987.0], [68.7, 990.0], [68.8, 992.0], [68.9, 993.0], [69.0, 996.0], [69.1, 998.0], [69.2, 1002.0], [69.3, 1003.0], [69.4, 1005.0], [69.5, 1007.0], [69.6, 1008.0], [69.7, 1010.0], [69.8, 1012.0], [69.9, 1013.0], [70.0, 1015.0], [70.1, 1018.0], [70.2, 1020.0], [70.3, 1023.0], [70.4, 1025.0], [70.5, 1027.0], [70.6, 1029.0], [70.7, 1030.0], [70.8, 1032.0], [70.9, 1034.0], [71.0, 1036.0], [71.1, 1039.0], [71.2, 1041.0], [71.3, 1043.0], [71.4, 1044.0], [71.5, 1047.0], [71.6, 1049.0], [71.7, 1049.0], [71.8, 1052.0], [71.9, 1053.0], [72.0, 1054.0], [72.1, 1057.0], [72.2, 1061.0], [72.3, 1062.0], [72.4, 1063.0], [72.5, 1065.0], [72.6, 1066.0], [72.7, 1069.0], [72.8, 1072.0], [72.9, 1073.0], [73.0, 1075.0], [73.1, 1077.0], [73.2, 1078.0], [73.3, 1080.0], [73.4, 1080.0], [73.5, 1082.0], [73.6, 1083.0], [73.7, 1086.0], [73.8, 1088.0], [73.9, 1091.0], [74.0, 1092.0], [74.1, 1093.0], [74.2, 1096.0], [74.3, 1097.0], [74.4, 1099.0], [74.5, 1101.0], [74.6, 1102.0], [74.7, 1104.0], [74.8, 1106.0], [74.9, 1109.0], [75.0, 1111.0], [75.1, 1113.0], [75.2, 1116.0], [75.3, 1119.0], [75.4, 1122.0], [75.5, 1123.0], [75.6, 1123.0], [75.7, 1126.0], [75.8, 1128.0], [75.9, 1132.0], [76.0, 1133.0], [76.1, 1135.0], [76.2, 1137.0], [76.3, 1138.0], [76.4, 1141.0], [76.5, 1143.0], [76.6, 1144.0], [76.7, 1146.0], [76.8, 1149.0], [76.9, 1151.0], [77.0, 1153.0], [77.1, 1156.0], [77.2, 1157.0], [77.3, 1160.0], [77.4, 1161.0], [77.5, 1164.0], [77.6, 1166.0], [77.7, 1169.0], [77.8, 1173.0], [77.9, 1175.0], [78.0, 1179.0], [78.1, 1181.0], [78.2, 1183.0], [78.3, 1185.0], [78.4, 1188.0], [78.5, 1192.0], [78.6, 1195.0], [78.7, 1197.0], [78.8, 1200.0], [78.9, 1201.0], [79.0, 1203.0], [79.1, 1205.0], [79.2, 1207.0], [79.3, 1208.0], [79.4, 1210.0], [79.5, 1213.0], [79.6, 1215.0], [79.7, 1216.0], [79.8, 1217.0], [79.9, 1222.0], [80.0, 1223.0], [80.1, 1225.0], [80.2, 1227.0], [80.3, 1229.0], [80.4, 1230.0], [80.5, 1232.0], [80.6, 1236.0], [80.7, 1239.0], [80.8, 1240.0], [80.9, 1246.0], [81.0, 1249.0], [81.1, 1254.0], [81.2, 1256.0], [81.3, 1259.0], [81.4, 1261.0], [81.5, 1264.0], [81.6, 1268.0], [81.7, 1270.0], [81.8, 1272.0], [81.9, 1273.0], [82.0, 1275.0], [82.1, 1277.0], [82.2, 1280.0], [82.3, 1281.0], [82.4, 1281.0], [82.5, 1284.0], [82.6, 1286.0], [82.7, 1289.0], [82.8, 1291.0], [82.9, 1293.0], [83.0, 1294.0], [83.1, 1299.0], [83.2, 1300.0], [83.3, 1304.0], [83.4, 1305.0], [83.5, 1307.0], [83.6, 1311.0], [83.7, 1315.0], [83.8, 1316.0], [83.9, 1317.0], [84.0, 1320.0], [84.1, 1321.0], [84.2, 1324.0], [84.3, 1326.0], [84.4, 1329.0], [84.5, 1331.0], [84.6, 1332.0], [84.7, 1334.0], [84.8, 1338.0], [84.9, 1340.0], [85.0, 1343.0], [85.1, 1346.0], [85.2, 1346.0], [85.3, 1350.0], [85.4, 1355.0], [85.5, 1361.0], [85.6, 1362.0], [85.7, 1365.0], [85.8, 1374.0], [85.9, 1377.0], [86.0, 1378.0], [86.1, 1382.0], [86.2, 1388.0], [86.3, 1392.0], [86.4, 1396.0], [86.5, 1399.0], [86.6, 1402.0], [86.7, 1406.0], [86.8, 1410.0], [86.9, 1414.0], [87.0, 1417.0], [87.1, 1425.0], [87.2, 1426.0], [87.3, 1430.0], [87.4, 1439.0], [87.5, 1451.0], [87.6, 1456.0], [87.7, 1464.0], [87.8, 1467.0], [87.9, 1474.0], [88.0, 1479.0], [88.1, 1482.0], [88.2, 1485.0], [88.3, 1489.0], [88.4, 1493.0], [88.5, 1498.0], [88.6, 1501.0], [88.7, 1504.0], [88.8, 1508.0], [88.9, 1512.0], [89.0, 1516.0], [89.1, 1523.0], [89.2, 1528.0], [89.3, 1530.0], [89.4, 1532.0], [89.5, 1539.0], [89.6, 1549.0], [89.7, 1554.0], [89.8, 1562.0], [89.9, 1567.0], [90.0, 1575.0], [90.1, 1581.0], [90.2, 1588.0], [90.3, 1594.0], [90.4, 1595.0], [90.5, 1597.0], [90.6, 1609.0], [90.7, 1613.0], [90.8, 1617.0], [90.9, 1625.0], [91.0, 1631.0], [91.1, 1637.0], [91.2, 1649.0], [91.3, 1660.0], [91.4, 1664.0], [91.5, 1670.0], [91.6, 1678.0], [91.7, 1686.0], [91.8, 1693.0], [91.9, 1708.0], [92.0, 1716.0], [92.1, 1725.0], [92.2, 1731.0], [92.3, 1742.0], [92.4, 1751.0], [92.5, 1753.0], [92.6, 1761.0], [92.7, 1779.0], [92.8, 1789.0], [92.9, 1793.0], [93.0, 1809.0], [93.1, 1812.0], [93.2, 1833.0], [93.3, 1838.0], [93.4, 1850.0], [93.5, 1856.0], [93.6, 1865.0], [93.7, 1897.0], [93.8, 1906.0], [93.9, 1923.0], [94.0, 1948.0], [94.1, 1965.0], [94.2, 1985.0], [94.3, 1996.0], [94.4, 2008.0], [94.5, 2014.0], [94.6, 2019.0], [94.7, 2025.0], [94.8, 2032.0], [94.9, 2044.0], [95.0, 2051.0], [95.1, 2067.0], [95.2, 2072.0], [95.3, 2094.0], [95.4, 2111.0], [95.5, 2120.0], [95.6, 2152.0], [95.7, 2159.0], [95.8, 2180.0], [95.9, 2189.0], [96.0, 2207.0], [96.1, 2224.0], [96.2, 2232.0], [96.3, 2247.0], [96.4, 2260.0], [96.5, 2282.0], [96.6, 2309.0], [96.7, 2320.0], [96.8, 2332.0], [96.9, 2363.0], [97.0, 2385.0], [97.1, 2409.0], [97.2, 2441.0], [97.3, 2461.0], [97.4, 2495.0], [97.5, 2542.0], [97.6, 2564.0], [97.7, 2606.0], [97.8, 2634.0], [97.9, 2656.0], [98.0, 2668.0], [98.1, 2729.0], [98.2, 2760.0], [98.3, 2778.0], [98.4, 2795.0], [98.5, 2865.0], [98.6, 2903.0], [98.7, 2945.0], [98.8, 3038.0], [98.9, 3112.0], [99.0, 3168.0], [99.1, 3266.0], [99.2, 3396.0], [99.3, 3451.0], [99.4, 3541.0], [99.5, 3659.0], [99.6, 3965.0], [99.7, 4214.0], [99.8, 4636.0], [99.9, 5418.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 877.0, "series": [{"data": [[0.0, 877.0], [600.0, 276.0], [700.0, 203.0], [800.0, 183.0], [900.0, 204.0], [1000.0, 275.0], [1100.0, 224.0], [1200.0, 226.0], [1300.0, 176.0], [1400.0, 106.0], [1500.0, 102.0], [1600.0, 68.0], [1700.0, 57.0], [1800.0, 41.0], [1900.0, 32.0], [2000.0, 52.0], [2100.0, 31.0], [2300.0, 26.0], [2200.0, 32.0], [2400.0, 19.0], [2500.0, 14.0], [2600.0, 19.0], [2800.0, 10.0], [2700.0, 18.0], [2900.0, 8.0], [3000.0, 6.0], [3100.0, 10.0], [3300.0, 6.0], [3200.0, 3.0], [3400.0, 7.0], [3500.0, 3.0], [3600.0, 5.0], [3700.0, 3.0], [3900.0, 3.0], [4000.0, 1.0], [4200.0, 3.0], [4100.0, 1.0], [4600.0, 2.0], [4500.0, 2.0], [4800.0, 1.0], [4700.0, 1.0], [5100.0, 1.0], [5300.0, 1.0], [5600.0, 1.0], [5400.0, 1.0], [5700.0, 1.0], [5900.0, 1.0], [6000.0, 1.0], [9900.0, 1.0], [100.0, 602.0], [200.0, 472.0], [300.0, 290.0], [400.0, 242.0], [500.0, 240.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 593.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2487.0, "series": [{"data": [[0.0, 2487.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2110.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 593.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.977272727272728, "minX": 1.6038714E12, "maxY": 10.0, "series": [{"data": [[1.6038714E12, 10.0], [1.60387158E12, 10.0], [1.60387152E12, 10.0], [1.6038717E12, 10.0], [1.60387164E12, 10.0], [1.60387182E12, 8.977272727272728], [1.60387176E12, 10.0], [1.60387146E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387182E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 313.0, "minX": 1.0, "maxY": 3455.0, "series": [{"data": [[8.0, 976.0], [4.0, 1045.0], [2.0, 2844.0], [1.0, 3455.0], [9.0, 345.0], [10.0, 725.0164060992097], [5.0, 1266.0], [6.0, 3005.0], [3.0, 1829.0], [7.0, 313.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 726.6643545279394]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 340.1, "minX": 1.6038714E12, "maxY": 4611212.666666667, "series": [{"data": [[1.6038714E12, 869579.2666666667], [1.60387158E12, 3812952.6], [1.60387152E12, 4611212.666666667], [1.6038717E12, 4332490.116666666], [1.60387164E12, 3299422.8], [1.60387182E12, 201317.78333333333], [1.60387176E12, 3590888.466666667], [1.60387146E12, 3257053.9833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6038714E12, 896.2166666666667], [1.60387158E12, 6111.483333333334], [1.60387152E12, 6287.35], [1.6038717E12, 7451.05], [1.60387164E12, 5024.633333333333], [1.60387182E12, 340.1], [1.60387176E12, 6082.633333333333], [1.60387146E12, 6383.866666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387182E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 595.3033033033036, "minX": 1.6038714E12, "maxY": 1100.258333333333, "series": [{"data": [[1.6038714E12, 1100.258333333333], [1.60387158E12, 745.06195786865], [1.60387152E12, 717.9147659063625], [1.6038717E12, 595.3033033033036], [1.60387164E12, 856.4091559370538], [1.60387182E12, 1040.6363636363635], [1.60387176E12, 743.8072139303483], [1.60387146E12, 682.0384615384605]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387182E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 593.9019019019016, "minX": 1.6038714E12, "maxY": 1096.9583333333333, "series": [{"data": [[1.6038714E12, 1096.9583333333333], [1.60387158E12, 743.333333333333], [1.60387152E12, 715.7995198079227], [1.6038717E12, 593.9019019019016], [1.60387164E12, 854.7052932761093], [1.60387182E12, 1039.318181818182], [1.60387176E12, 742.3134328358208], [1.60387146E12, 680.37443438914]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387182E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6038714E12, "maxY": 1.0000000000000007, "series": [{"data": [[1.6038714E12, 1.0000000000000007], [1.60387158E12, 0.018587360594795543], [1.60387152E12, 0.028811524609843927], [1.6038717E12, 0.012012012012012015], [1.60387164E12, 0.01716738197424893], [1.60387182E12, 0.0], [1.60387176E12, 0.01492537313432837], [1.60387146E12, 0.013574660633484167]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387182E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.6038714E12, "maxY": 9979.0, "series": [{"data": [[1.6038714E12, 3474.0], [1.60387158E12, 4583.0], [1.60387152E12, 4603.0], [1.6038717E12, 3739.0], [1.60387164E12, 9979.0], [1.60387182E12, 3455.0], [1.60387176E12, 4158.0], [1.60387146E12, 5772.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6038714E12, 21.088999971151352], [1.60387158E12, 13.0], [1.60387152E12, 12.505999801158906], [1.6038717E12, 12.999999284744263], [1.60387164E12, 17.0], [1.60387182E12, 116.0], [1.60387176E12, 12.489999616146088], [1.60387146E12, 11.929999577999116]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6038714E12, 21.19790001153946], [1.60387158E12, 13.0], [1.60387152E12, 13.256600079536438], [1.6038717E12, 13.0], [1.60387164E12, 17.0], [1.60387182E12, 116.0], [1.60387176E12, 13.939000153541565], [1.60387146E12, 13.523000168800355]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6038714E12, 21.149499985575677], [1.60387158E12, 13.0], [1.60387152E12, 12.922999900579452], [1.6038717E12, 13.0], [1.60387164E12, 17.0], [1.60387182E12, 116.0], [1.60387176E12, 13.294999808073042], [1.60387146E12, 12.814999788999557]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6038714E12, 21.0], [1.60387158E12, 7.0], [1.60387152E12, 5.0], [1.6038717E12, 7.0], [1.60387164E12, 7.0], [1.60387182E12, 116.0], [1.60387176E12, 5.0], [1.60387146E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6038714E12, 948.5], [1.60387158E12, 584.0], [1.60387152E12, 450.0], [1.6038717E12, 319.0], [1.60387164E12, 675.0], [1.60387182E12, 868.5], [1.60387176E12, 626.0], [1.60387146E12, 481.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387182E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 30.0, "minX": 2.0, "maxY": 1582.0, "series": [{"data": [[33.0, 35.0], [32.0, 69.5], [2.0, 1116.5], [34.0, 35.0], [37.0, 39.0], [39.0, 44.0], [46.0, 49.0], [49.0, 47.0], [3.0, 683.0], [51.0, 63.0], [56.0, 58.5], [4.0, 1050.0], [65.0, 30.0], [79.0, 45.0], [5.0, 1582.0], [89.0, 45.0], [6.0, 1267.5], [7.0, 1098.5], [8.0, 1013.5], [9.0, 993.5], [10.0, 909.5], [11.0, 827.0], [12.0, 782.5], [13.0, 621.0], [14.0, 581.5], [15.0, 575.0], [16.0, 537.5], [17.0, 414.0], [18.0, 408.5], [19.0, 448.0], [20.0, 442.5], [21.0, 365.0], [22.0, 362.0], [23.0, 142.5], [24.0, 167.5], [25.0, 150.0], [26.0, 130.0], [27.0, 296.5], [28.0, 128.0], [29.0, 130.0], [31.0, 129.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 29.0, "minX": 2.0, "maxY": 1580.5, "series": [{"data": [[33.0, 35.0], [32.0, 69.0], [2.0, 1113.0], [34.0, 33.0], [37.0, 39.0], [39.0, 44.0], [46.0, 49.0], [49.0, 47.0], [3.0, 680.0], [51.0, 63.0], [56.0, 58.5], [4.0, 1049.0], [65.0, 29.0], [79.0, 45.0], [5.0, 1580.5], [89.0, 44.0], [6.0, 1266.5], [7.0, 1096.0], [8.0, 1012.5], [9.0, 993.5], [10.0, 908.5], [11.0, 824.0], [12.0, 782.0], [13.0, 619.5], [14.0, 581.5], [15.0, 571.0], [16.0, 537.0], [17.0, 413.0], [18.0, 408.5], [19.0, 446.0], [20.0, 441.5], [21.0, 364.5], [22.0, 360.0], [23.0, 142.0], [24.0, 166.5], [25.0, 150.0], [26.0, 129.5], [27.0, 294.0], [28.0, 127.5], [29.0, 130.0], [31.0, 128.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.6038714E12, "maxY": 16.65, "series": [{"data": [[1.6038714E12, 2.1666666666666665], [1.60387158E12, 13.45], [1.60387152E12, 13.883333333333333], [1.6038717E12, 16.65], [1.60387164E12, 11.65], [1.60387182E12, 0.5666666666666667], [1.60387176E12, 13.4], [1.60387146E12, 14.733333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387182E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.7333333333333333, "minX": 1.6038714E12, "maxY": 16.65, "series": [{"data": [[1.6038714E12, 2.0], [1.60387158E12, 13.45], [1.60387152E12, 13.883333333333333], [1.6038717E12, 16.65], [1.60387164E12, 11.65], [1.60387182E12, 0.7333333333333333], [1.60387176E12, 13.4], [1.60387146E12, 14.733333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387182E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.7333333333333333, "minX": 1.6038714E12, "maxY": 16.65, "series": [{"data": [[1.6038714E12, 2.0], [1.60387158E12, 13.45], [1.60387152E12, 13.883333333333333], [1.6038717E12, 16.65], [1.60387164E12, 11.65], [1.60387182E12, 0.7333333333333333], [1.60387176E12, 13.4], [1.60387146E12, 14.733333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387182E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.7333333333333333, "minX": 1.6038714E12, "maxY": 16.65, "series": [{"data": [[1.6038714E12, 2.0], [1.60387158E12, 13.45], [1.60387152E12, 13.883333333333333], [1.6038717E12, 16.65], [1.60387164E12, 11.65], [1.60387182E12, 0.7333333333333333], [1.60387176E12, 13.4], [1.60387146E12, 14.733333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387182E12, "title": "Total Transactions Per Second"}},
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

