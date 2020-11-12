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
        data: {"result": {"minY": 198.0, "minX": 0.0, "maxY": 4134.0, "series": [{"data": [[0.0, 198.0], [0.1, 198.0], [0.2, 207.0], [0.3, 207.0], [0.4, 207.0], [0.5, 218.0], [0.6, 220.0], [0.7, 221.0], [0.8, 221.0], [0.9, 224.0], [1.0, 228.0], [1.1, 229.0], [1.2, 229.0], [1.3, 230.0], [1.4, 232.0], [1.5, 236.0], [1.6, 236.0], [1.7, 236.0], [1.8, 236.0], [1.9, 236.0], [2.0, 241.0], [2.1, 242.0], [2.2, 244.0], [2.3, 244.0], [2.4, 245.0], [2.5, 253.0], [2.6, 256.0], [2.7, 256.0], [2.8, 258.0], [2.9, 260.0], [3.0, 263.0], [3.1, 263.0], [3.2, 265.0], [3.3, 266.0], [3.4, 266.0], [3.5, 276.0], [3.6, 276.0], [3.7, 301.0], [3.8, 301.0], [3.9, 305.0], [4.0, 323.0], [4.1, 324.0], [4.2, 324.0], [4.3, 328.0], [4.4, 330.0], [4.5, 343.0], [4.6, 343.0], [4.7, 343.0], [4.8, 343.0], [4.9, 344.0], [5.0, 344.0], [5.1, 348.0], [5.2, 349.0], [5.3, 349.0], [5.4, 350.0], [5.5, 350.0], [5.6, 352.0], [5.7, 352.0], [5.8, 354.0], [5.9, 356.0], [6.0, 357.0], [6.1, 357.0], [6.2, 359.0], [6.3, 360.0], [6.4, 360.0], [6.5, 360.0], [6.6, 363.0], [6.7, 363.0], [6.8, 363.0], [6.9, 366.0], [7.0, 367.0], [7.1, 368.0], [7.2, 368.0], [7.3, 370.0], [7.4, 374.0], [7.5, 374.0], [7.6, 374.0], [7.7, 377.0], [7.8, 380.0], [7.9, 380.0], [8.0, 380.0], [8.1, 385.0], [8.2, 388.0], [8.3, 388.0], [8.4, 388.0], [8.5, 388.0], [8.6, 389.0], [8.7, 389.0], [8.8, 390.0], [8.9, 392.0], [9.0, 394.0], [9.1, 394.0], [9.2, 396.0], [9.3, 400.0], [9.4, 401.0], [9.5, 401.0], [9.6, 404.0], [9.7, 405.0], [9.8, 406.0], [9.9, 406.0], [10.0, 407.0], [10.1, 409.0], [10.2, 409.0], [10.3, 409.0], [10.4, 410.0], [10.5, 412.0], [10.6, 412.0], [10.7, 413.0], [10.8, 414.0], [10.9, 416.0], [11.0, 416.0], [11.1, 423.0], [11.2, 424.0], [11.3, 432.0], [11.4, 432.0], [11.5, 434.0], [11.6, 438.0], [11.7, 438.0], [11.8, 442.0], [11.9, 445.0], [12.0, 447.0], [12.1, 447.0], [12.2, 448.0], [12.3, 449.0], [12.4, 449.0], [12.5, 449.0], [12.6, 451.0], [12.7, 452.0], [12.8, 454.0], [12.9, 454.0], [13.0, 455.0], [13.1, 455.0], [13.2, 457.0], [13.3, 457.0], [13.4, 457.0], [13.5, 459.0], [13.6, 459.0], [13.7, 459.0], [13.8, 459.0], [13.9, 461.0], [14.0, 461.0], [14.1, 461.0], [14.2, 465.0], [14.3, 466.0], [14.4, 466.0], [14.5, 467.0], [14.6, 468.0], [14.7, 470.0], [14.8, 470.0], [14.9, 470.0], [15.0, 471.0], [15.1, 471.0], [15.2, 471.0], [15.3, 472.0], [15.4, 472.0], [15.5, 472.0], [15.6, 472.0], [15.7, 472.0], [15.8, 473.0], [15.9, 473.0], [16.0, 474.0], [16.1, 476.0], [16.2, 476.0], [16.3, 476.0], [16.4, 476.0], [16.5, 476.0], [16.6, 477.0], [16.7, 477.0], [16.8, 478.0], [16.9, 478.0], [17.0, 478.0], [17.1, 479.0], [17.2, 480.0], [17.3, 481.0], [17.4, 481.0], [17.5, 481.0], [17.6, 482.0], [17.7, 484.0], [17.8, 484.0], [17.9, 485.0], [18.0, 487.0], [18.1, 487.0], [18.2, 487.0], [18.3, 488.0], [18.4, 488.0], [18.5, 488.0], [18.6, 489.0], [18.7, 491.0], [18.8, 493.0], [18.9, 493.0], [19.0, 494.0], [19.1, 494.0], [19.2, 495.0], [19.3, 495.0], [19.4, 495.0], [19.5, 498.0], [19.6, 498.0], [19.7, 498.0], [19.8, 510.0], [19.9, 512.0], [20.0, 513.0], [20.1, 513.0], [20.2, 516.0], [20.3, 525.0], [20.4, 525.0], [20.5, 528.0], [20.6, 528.0], [20.7, 534.0], [20.8, 534.0], [20.9, 534.0], [21.0, 535.0], [21.1, 539.0], [21.2, 539.0], [21.3, 540.0], [21.4, 551.0], [21.5, 554.0], [21.6, 554.0], [21.7, 555.0], [21.8, 556.0], [21.9, 556.0], [22.0, 557.0], [22.1, 558.0], [22.2, 561.0], [22.3, 561.0], [22.4, 564.0], [22.5, 567.0], [22.6, 570.0], [22.7, 570.0], [22.8, 572.0], [22.9, 572.0], [23.0, 572.0], [23.1, 572.0], [23.2, 576.0], [23.3, 576.0], [23.4, 576.0], [23.5, 581.0], [23.6, 582.0], [23.7, 583.0], [23.8, 583.0], [23.9, 583.0], [24.0, 587.0], [24.1, 590.0], [24.2, 590.0], [24.3, 592.0], [24.4, 597.0], [24.5, 597.0], [24.6, 597.0], [24.7, 598.0], [24.8, 599.0], [24.9, 600.0], [25.0, 600.0], [25.1, 604.0], [25.2, 611.0], [25.3, 611.0], [25.4, 612.0], [25.5, 615.0], [25.6, 617.0], [25.7, 617.0], [25.8, 617.0], [25.9, 619.0], [26.0, 620.0], [26.1, 620.0], [26.2, 620.0], [26.3, 623.0], [26.4, 624.0], [26.5, 624.0], [26.6, 630.0], [26.7, 632.0], [26.8, 632.0], [26.9, 633.0], [27.0, 633.0], [27.1, 634.0], [27.2, 634.0], [27.3, 634.0], [27.4, 634.0], [27.5, 636.0], [27.6, 636.0], [27.7, 641.0], [27.8, 644.0], [27.9, 644.0], [28.0, 644.0], [28.1, 644.0], [28.2, 645.0], [28.3, 646.0], [28.4, 646.0], [28.5, 646.0], [28.6, 649.0], [28.7, 649.0], [28.8, 649.0], [28.9, 650.0], [29.0, 653.0], [29.1, 653.0], [29.2, 655.0], [29.3, 659.0], [29.4, 661.0], [29.5, 661.0], [29.6, 661.0], [29.7, 662.0], [29.8, 663.0], [29.9, 663.0], [30.0, 664.0], [30.1, 667.0], [30.2, 667.0], [30.3, 669.0], [30.4, 671.0], [30.5, 674.0], [30.6, 674.0], [30.7, 675.0], [30.8, 677.0], [30.9, 679.0], [31.0, 679.0], [31.1, 681.0], [31.2, 683.0], [31.3, 684.0], [31.4, 684.0], [31.5, 686.0], [31.6, 686.0], [31.7, 686.0], [31.8, 689.0], [31.9, 691.0], [32.0, 694.0], [32.1, 694.0], [32.2, 695.0], [32.3, 696.0], [32.4, 698.0], [32.5, 698.0], [32.6, 699.0], [32.7, 700.0], [32.8, 700.0], [32.9, 700.0], [33.0, 705.0], [33.1, 705.0], [33.2, 707.0], [33.3, 707.0], [33.4, 709.0], [33.5, 710.0], [33.6, 710.0], [33.7, 711.0], [33.8, 711.0], [33.9, 713.0], [34.0, 713.0], [34.1, 713.0], [34.2, 714.0], [34.3, 715.0], [34.4, 715.0], [34.5, 719.0], [34.6, 721.0], [34.7, 726.0], [34.8, 726.0], [34.9, 727.0], [35.0, 727.0], [35.1, 727.0], [35.2, 727.0], [35.3, 731.0], [35.4, 734.0], [35.5, 734.0], [35.6, 735.0], [35.7, 740.0], [35.8, 742.0], [35.9, 742.0], [36.0, 744.0], [36.1, 747.0], [36.2, 748.0], [36.3, 748.0], [36.4, 750.0], [36.5, 751.0], [36.6, 751.0], [36.7, 751.0], [36.8, 752.0], [36.9, 754.0], [37.0, 754.0], [37.1, 755.0], [37.2, 756.0], [37.3, 756.0], [37.4, 756.0], [37.5, 757.0], [37.6, 757.0], [37.7, 760.0], [37.8, 760.0], [37.9, 760.0], [38.0, 761.0], [38.1, 761.0], [38.2, 761.0], [38.3, 763.0], [38.4, 764.0], [38.5, 764.0], [38.6, 764.0], [38.7, 764.0], [38.8, 765.0], [38.9, 765.0], [39.0, 770.0], [39.1, 770.0], [39.2, 771.0], [39.3, 771.0], [39.4, 772.0], [39.5, 774.0], [39.6, 776.0], [39.7, 776.0], [39.8, 777.0], [39.9, 788.0], [40.0, 790.0], [40.1, 790.0], [40.2, 792.0], [40.3, 793.0], [40.4, 793.0], [40.5, 795.0], [40.6, 797.0], [40.7, 798.0], [40.8, 798.0], [40.9, 802.0], [41.0, 803.0], [41.1, 805.0], [41.2, 805.0], [41.3, 806.0], [41.4, 808.0], [41.5, 808.0], [41.6, 808.0], [41.7, 812.0], [41.8, 813.0], [41.9, 813.0], [42.0, 821.0], [42.1, 822.0], [42.2, 824.0], [42.3, 824.0], [42.4, 826.0], [42.5, 827.0], [42.6, 828.0], [42.7, 828.0], [42.8, 829.0], [42.9, 832.0], [43.0, 833.0], [43.1, 833.0], [43.2, 834.0], [43.3, 837.0], [43.4, 837.0], [43.5, 837.0], [43.6, 840.0], [43.7, 841.0], [43.8, 841.0], [43.9, 841.0], [44.0, 842.0], [44.1, 849.0], [44.2, 849.0], [44.3, 852.0], [44.4, 852.0], [44.5, 853.0], [44.6, 853.0], [44.7, 853.0], [44.8, 854.0], [44.9, 857.0], [45.0, 857.0], [45.1, 859.0], [45.2, 859.0], [45.3, 859.0], [45.4, 862.0], [45.5, 864.0], [45.6, 865.0], [45.7, 865.0], [45.8, 866.0], [45.9, 879.0], [46.0, 879.0], [46.1, 879.0], [46.2, 879.0], [46.3, 879.0], [46.4, 885.0], [46.5, 885.0], [46.6, 892.0], [46.7, 895.0], [46.8, 895.0], [46.9, 899.0], [47.0, 901.0], [47.1, 907.0], [47.2, 907.0], [47.3, 911.0], [47.4, 911.0], [47.5, 913.0], [47.6, 913.0], [47.7, 914.0], [47.8, 917.0], [47.9, 936.0], [48.0, 936.0], [48.1, 939.0], [48.2, 942.0], [48.3, 942.0], [48.4, 942.0], [48.5, 943.0], [48.6, 943.0], [48.7, 943.0], [48.8, 944.0], [48.9, 953.0], [49.0, 956.0], [49.1, 956.0], [49.2, 959.0], [49.3, 962.0], [49.4, 968.0], [49.5, 968.0], [49.6, 970.0], [49.7, 972.0], [49.8, 975.0], [49.9, 975.0], [50.0, 977.0], [50.1, 980.0], [50.2, 980.0], [50.3, 989.0], [50.4, 993.0], [50.5, 995.0], [50.6, 995.0], [50.7, 999.0], [50.8, 1007.0], [50.9, 1013.0], [51.0, 1013.0], [51.1, 1020.0], [51.2, 1021.0], [51.3, 1031.0], [51.4, 1031.0], [51.5, 1032.0], [51.6, 1035.0], [51.7, 1035.0], [51.8, 1037.0], [51.9, 1037.0], [52.0, 1039.0], [52.1, 1039.0], [52.2, 1041.0], [52.3, 1044.0], [52.4, 1047.0], [52.5, 1047.0], [52.6, 1056.0], [52.7, 1061.0], [52.8, 1062.0], [52.9, 1062.0], [53.0, 1073.0], [53.1, 1077.0], [53.2, 1077.0], [53.3, 1077.0], [53.4, 1081.0], [53.5, 1082.0], [53.6, 1082.0], [53.7, 1084.0], [53.8, 1086.0], [53.9, 1089.0], [54.0, 1089.0], [54.1, 1091.0], [54.2, 1091.0], [54.3, 1093.0], [54.4, 1093.0], [54.5, 1094.0], [54.6, 1094.0], [54.7, 1095.0], [54.8, 1095.0], [54.9, 1098.0], [55.0, 1101.0], [55.1, 1101.0], [55.2, 1103.0], [55.3, 1103.0], [55.4, 1104.0], [55.5, 1104.0], [55.6, 1104.0], [55.7, 1118.0], [55.8, 1118.0], [55.9, 1118.0], [56.0, 1120.0], [56.1, 1121.0], [56.2, 1124.0], [56.3, 1124.0], [56.4, 1132.0], [56.5, 1133.0], [56.6, 1137.0], [56.7, 1137.0], [56.8, 1140.0], [56.9, 1142.0], [57.0, 1142.0], [57.1, 1144.0], [57.2, 1147.0], [57.3, 1147.0], [57.4, 1147.0], [57.5, 1150.0], [57.6, 1150.0], [57.7, 1151.0], [57.8, 1151.0], [57.9, 1151.0], [58.0, 1153.0], [58.1, 1154.0], [58.2, 1154.0], [58.3, 1155.0], [58.4, 1156.0], [58.5, 1156.0], [58.6, 1156.0], [58.7, 1157.0], [58.8, 1158.0], [58.9, 1158.0], [59.0, 1159.0], [59.1, 1163.0], [59.2, 1163.0], [59.3, 1163.0], [59.4, 1166.0], [59.5, 1170.0], [59.6, 1174.0], [59.7, 1174.0], [59.8, 1181.0], [59.9, 1181.0], [60.0, 1185.0], [60.1, 1185.0], [60.2, 1191.0], [60.3, 1194.0], [60.4, 1194.0], [60.5, 1194.0], [60.6, 1198.0], [60.7, 1198.0], [60.8, 1198.0], [60.9, 1198.0], [61.0, 1199.0], [61.1, 1201.0], [61.2, 1201.0], [61.3, 1206.0], [61.4, 1206.0], [61.5, 1208.0], [61.6, 1208.0], [61.7, 1208.0], [61.8, 1211.0], [61.9, 1211.0], [62.0, 1212.0], [62.1, 1212.0], [62.2, 1217.0], [62.3, 1217.0], [62.4, 1217.0], [62.5, 1217.0], [62.6, 1220.0], [62.7, 1220.0], [62.8, 1221.0], [62.9, 1226.0], [63.0, 1226.0], [63.1, 1226.0], [63.2, 1227.0], [63.3, 1229.0], [63.4, 1229.0], [63.5, 1230.0], [63.6, 1232.0], [63.7, 1234.0], [63.8, 1234.0], [63.9, 1239.0], [64.0, 1239.0], [64.1, 1242.0], [64.2, 1242.0], [64.3, 1243.0], [64.4, 1249.0], [64.5, 1251.0], [64.6, 1251.0], [64.7, 1252.0], [64.8, 1252.0], [64.9, 1260.0], [65.0, 1260.0], [65.1, 1261.0], [65.2, 1261.0], [65.3, 1261.0], [65.4, 1268.0], [65.5, 1280.0], [65.6, 1284.0], [65.7, 1284.0], [65.8, 1289.0], [65.9, 1292.0], [66.0, 1294.0], [66.1, 1294.0], [66.2, 1296.0], [66.3, 1296.0], [66.4, 1301.0], [66.5, 1301.0], [66.6, 1302.0], [66.7, 1306.0], [66.8, 1306.0], [66.9, 1307.0], [67.0, 1308.0], [67.1, 1309.0], [67.2, 1309.0], [67.3, 1310.0], [67.4, 1322.0], [67.5, 1331.0], [67.6, 1331.0], [67.7, 1333.0], [67.8, 1336.0], [67.9, 1337.0], [68.0, 1337.0], [68.1, 1338.0], [68.2, 1339.0], [68.3, 1341.0], [68.4, 1341.0], [68.5, 1343.0], [68.6, 1345.0], [68.7, 1345.0], [68.8, 1351.0], [68.9, 1352.0], [69.0, 1357.0], [69.1, 1357.0], [69.2, 1360.0], [69.3, 1366.0], [69.4, 1368.0], [69.5, 1368.0], [69.6, 1370.0], [69.7, 1373.0], [69.8, 1373.0], [69.9, 1373.0], [70.0, 1375.0], [70.1, 1378.0], [70.2, 1378.0], [70.3, 1378.0], [70.4, 1393.0], [70.5, 1395.0], [70.6, 1395.0], [70.7, 1408.0], [70.8, 1410.0], [70.9, 1414.0], [71.0, 1414.0], [71.1, 1417.0], [71.2, 1417.0], [71.3, 1418.0], [71.4, 1418.0], [71.5, 1419.0], [71.6, 1420.0], [71.7, 1420.0], [71.8, 1421.0], [71.9, 1425.0], [72.0, 1425.0], [72.1, 1425.0], [72.2, 1427.0], [72.3, 1434.0], [72.4, 1435.0], [72.5, 1435.0], [72.6, 1440.0], [72.7, 1444.0], [72.8, 1444.0], [72.9, 1444.0], [73.0, 1445.0], [73.1, 1445.0], [73.2, 1447.0], [73.3, 1447.0], [73.4, 1447.0], [73.5, 1448.0], [73.6, 1448.0], [73.7, 1450.0], [73.8, 1453.0], [73.9, 1456.0], [74.0, 1456.0], [74.1, 1458.0], [74.2, 1458.0], [74.3, 1461.0], [74.4, 1461.0], [74.5, 1468.0], [74.6, 1470.0], [74.7, 1471.0], [74.8, 1471.0], [74.9, 1471.0], [75.0, 1480.0], [75.1, 1480.0], [75.2, 1481.0], [75.3, 1481.0], [75.4, 1484.0], [75.5, 1484.0], [75.6, 1489.0], [75.7, 1490.0], [75.8, 1497.0], [75.9, 1497.0], [76.0, 1499.0], [76.1, 1505.0], [76.2, 1510.0], [76.3, 1510.0], [76.4, 1515.0], [76.5, 1519.0], [76.6, 1520.0], [76.7, 1520.0], [76.8, 1520.0], [76.9, 1522.0], [77.0, 1522.0], [77.1, 1524.0], [77.2, 1526.0], [77.3, 1527.0], [77.4, 1527.0], [77.5, 1528.0], [77.6, 1530.0], [77.7, 1532.0], [77.8, 1532.0], [77.9, 1532.0], [78.0, 1533.0], [78.1, 1536.0], [78.2, 1536.0], [78.3, 1539.0], [78.4, 1540.0], [78.5, 1540.0], [78.6, 1541.0], [78.7, 1541.0], [78.8, 1542.0], [78.9, 1542.0], [79.0, 1542.0], [79.1, 1545.0], [79.2, 1546.0], [79.3, 1546.0], [79.4, 1551.0], [79.5, 1554.0], [79.6, 1557.0], [79.7, 1557.0], [79.8, 1573.0], [79.9, 1573.0], [80.0, 1575.0], [80.1, 1575.0], [80.2, 1576.0], [80.3, 1580.0], [80.4, 1580.0], [80.5, 1581.0], [80.6, 1584.0], [80.7, 1588.0], [80.8, 1588.0], [80.9, 1588.0], [81.0, 1590.0], [81.1, 1594.0], [81.2, 1594.0], [81.3, 1595.0], [81.4, 1602.0], [81.5, 1603.0], [81.6, 1603.0], [81.7, 1605.0], [81.8, 1607.0], [81.9, 1607.0], [82.0, 1607.0], [82.1, 1608.0], [82.2, 1612.0], [82.3, 1612.0], [82.4, 1613.0], [82.5, 1614.0], [82.6, 1622.0], [82.7, 1622.0], [82.8, 1625.0], [82.9, 1637.0], [83.0, 1642.0], [83.1, 1642.0], [83.2, 1647.0], [83.3, 1648.0], [83.4, 1648.0], [83.5, 1666.0], [83.6, 1666.0], [83.7, 1668.0], [83.8, 1668.0], [83.9, 1668.0], [84.0, 1675.0], [84.1, 1686.0], [84.2, 1686.0], [84.3, 1686.0], [84.4, 1687.0], [84.5, 1690.0], [84.6, 1690.0], [84.7, 1691.0], [84.8, 1692.0], [84.9, 1695.0], [85.0, 1695.0], [85.1, 1696.0], [85.2, 1700.0], [85.3, 1700.0], [85.4, 1703.0], [85.5, 1708.0], [85.6, 1708.0], [85.7, 1708.0], [85.8, 1710.0], [85.9, 1711.0], [86.0, 1715.0], [86.1, 1715.0], [86.2, 1716.0], [86.3, 1719.0], [86.4, 1720.0], [86.5, 1720.0], [86.6, 1726.0], [86.7, 1726.0], [86.8, 1726.0], [86.9, 1729.0], [87.0, 1740.0], [87.1, 1745.0], [87.2, 1745.0], [87.3, 1754.0], [87.4, 1766.0], [87.5, 1768.0], [87.6, 1768.0], [87.7, 1769.0], [87.8, 1775.0], [87.9, 1778.0], [88.0, 1778.0], [88.1, 1780.0], [88.2, 1786.0], [88.3, 1798.0], [88.4, 1798.0], [88.5, 1801.0], [88.6, 1803.0], [88.7, 1803.0], [88.8, 1803.0], [88.9, 1806.0], [89.0, 1807.0], [89.1, 1807.0], [89.2, 1810.0], [89.3, 1812.0], [89.4, 1813.0], [89.5, 1813.0], [89.6, 1820.0], [89.7, 1824.0], [89.8, 1825.0], [89.9, 1825.0], [90.0, 1827.0], [90.1, 1827.0], [90.2, 1827.0], [90.3, 1832.0], [90.4, 1848.0], [90.5, 1851.0], [90.6, 1851.0], [90.7, 1861.0], [90.8, 1867.0], [90.9, 1876.0], [91.0, 1876.0], [91.1, 1876.0], [91.2, 1877.0], [91.3, 1885.0], [91.4, 1885.0], [91.5, 1887.0], [91.6, 1887.0], [91.7, 1887.0], [91.8, 1893.0], [91.9, 1894.0], [92.0, 1906.0], [92.1, 1906.0], [92.2, 1911.0], [92.3, 1930.0], [92.4, 1939.0], [92.5, 1939.0], [92.6, 1942.0], [92.7, 1943.0], [92.8, 1949.0], [92.9, 1949.0], [93.0, 1952.0], [93.1, 1953.0], [93.2, 1958.0], [93.3, 1958.0], [93.4, 1959.0], [93.5, 1965.0], [93.6, 1965.0], [93.7, 1972.0], [93.8, 1982.0], [93.9, 1999.0], [94.0, 1999.0], [94.1, 2002.0], [94.2, 2005.0], [94.3, 2008.0], [94.4, 2008.0], [94.5, 2013.0], [94.6, 2020.0], [94.7, 2021.0], [94.8, 2021.0], [94.9, 2029.0], [95.0, 2041.0], [95.1, 2041.0], [95.2, 2042.0], [95.3, 2043.0], [95.4, 2059.0], [95.5, 2059.0], [95.6, 2071.0], [95.7, 2103.0], [95.8, 2124.0], [95.9, 2124.0], [96.0, 2140.0], [96.1, 2143.0], [96.2, 2217.0], [96.3, 2217.0], [96.4, 2228.0], [96.5, 2241.0], [96.6, 2268.0], [96.7, 2268.0], [96.8, 2289.0], [96.9, 2302.0], [97.0, 2302.0], [97.1, 2310.0], [97.2, 2313.0], [97.3, 2387.0], [97.4, 2387.0], [97.5, 2415.0], [97.6, 2443.0], [97.7, 2462.0], [97.8, 2462.0], [97.9, 2465.0], [98.0, 2468.0], [98.1, 2477.0], [98.2, 2477.0], [98.3, 2569.0], [98.4, 2579.0], [98.5, 2579.0], [98.6, 2638.0], [98.7, 2645.0], [98.8, 2793.0], [98.9, 2793.0], [99.0, 2878.0], [99.1, 2908.0], [99.2, 3231.0], [99.3, 3231.0], [99.4, 3303.0], [99.5, 3489.0], [99.6, 3696.0], [99.7, 3696.0], [99.8, 3857.0], [99.9, 4134.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 77.0, "series": [{"data": [[600.0, 57.0], [700.0, 60.0], [800.0, 45.0], [900.0, 28.0], [1000.0, 31.0], [1100.0, 45.0], [1200.0, 39.0], [1300.0, 31.0], [1400.0, 40.0], [1500.0, 39.0], [1600.0, 28.0], [100.0, 1.0], [1700.0, 24.0], [1800.0, 26.0], [1900.0, 15.0], [2000.0, 12.0], [2100.0, 4.0], [2300.0, 4.0], [2200.0, 5.0], [2400.0, 6.0], [2500.0, 2.0], [2600.0, 2.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 1.0], [200.0, 26.0], [3300.0, 1.0], [3200.0, 1.0], [3400.0, 1.0], [3600.0, 1.0], [3800.0, 1.0], [4100.0, 1.0], [300.0, 41.0], [400.0, 77.0], [500.0, 38.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 145.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 414.0, "series": [{"data": [[0.0, 145.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 414.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 176.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.907786885245905, "minX": 1.60507566E12, "maxY": 10.0, "series": [{"data": [[1.60507566E12, 10.0], [1.60507572E12, 9.907786885245905]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507572E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 705.0, "minX": 1.0, "maxY": 1150.0, "series": [{"data": [[8.0, 705.0], [4.0, 755.0], [2.0, 792.0], [1.0, 1089.0], [9.0, 707.0], [10.0, 1079.590909090908], [5.0, 1101.0], [6.0, 1150.0], [3.0, 770.0], [7.0, 719.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1076.9673469387742]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1868.6833333333334, "minX": 1.60507566E12, "maxY": 1117277.65, "series": [{"data": [[1.60507566E12, 718909.5166666667], [1.60507572E12, 1117277.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507566E12, 1868.6833333333334], [1.60507572E12, 3654.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507572E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1016.9528688524591, "minX": 1.60507566E12, "maxY": 1195.5384615384612, "series": [{"data": [[1.60507566E12, 1195.5384615384612], [1.60507572E12, 1016.9528688524591]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507572E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1015.7848360655737, "minX": 1.60507566E12, "maxY": 1194.2186234817814, "series": [{"data": [[1.60507566E12, 1194.2186234817814], [1.60507572E12, 1015.7848360655737]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507572E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.02868852459016394, "minX": 1.60507566E12, "maxY": 0.4291497975708505, "series": [{"data": [[1.60507566E12, 0.4291497975708505], [1.60507572E12, 0.02868852459016394]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507572E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 198.0, "minX": 1.60507566E12, "maxY": 4134.0, "series": [{"data": [[1.60507566E12, 3489.0], [1.60507572E12, 4134.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507566E12, 222.62399958610536], [1.60507572E12, 221.60399953365325]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507566E12, 224.18640016555787], [1.60507572E12, 223.3644001865387]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507566E12, 223.49199979305268], [1.60507572E12, 222.58199976682664]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507566E12, 198.0], [1.60507572E12, 207.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507566E12, 1181.0], [1.60507572E12, 915.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507572E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 684.5, "minX": 3.0, "maxY": 1476.5, "series": [{"data": [[4.0, 899.0], [8.0, 1151.5], [9.0, 1208.0], [10.0, 1019.5], [11.0, 804.5], [3.0, 1445.0], [6.0, 1476.5], [12.0, 827.0], [13.0, 684.5], [7.0, 1232.0], [14.0, 705.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 684.5, "minX": 3.0, "maxY": 1473.5, "series": [{"data": [[4.0, 896.0], [8.0, 1150.5], [9.0, 1206.0], [10.0, 1017.0], [11.0, 804.0], [3.0, 1442.0], [6.0, 1473.5], [12.0, 826.5], [13.0, 684.5], [7.0, 1231.0], [14.0, 705.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.283333333333333, "minX": 1.60507566E12, "maxY": 7.966666666666667, "series": [{"data": [[1.60507566E12, 4.283333333333333], [1.60507572E12, 7.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507572E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.116666666666666, "minX": 1.60507566E12, "maxY": 8.133333333333333, "series": [{"data": [[1.60507566E12, 4.116666666666666], [1.60507572E12, 8.133333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507572E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.116666666666666, "minX": 1.60507566E12, "maxY": 8.133333333333333, "series": [{"data": [[1.60507566E12, 4.116666666666666], [1.60507572E12, 8.133333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507572E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.116666666666666, "minX": 1.60507566E12, "maxY": 8.133333333333333, "series": [{"data": [[1.60507566E12, 4.116666666666666], [1.60507572E12, 8.133333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507572E12, "title": "Total Transactions Per Second"}},
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

