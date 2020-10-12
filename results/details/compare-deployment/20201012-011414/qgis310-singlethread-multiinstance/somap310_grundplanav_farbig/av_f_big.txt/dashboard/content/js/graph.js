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
        data: {"result": {"minY": 357.0, "minX": 0.0, "maxY": 3603.0, "series": [{"data": [[0.0, 357.0], [0.1, 357.0], [0.2, 365.0], [0.3, 376.0], [0.4, 376.0], [0.5, 395.0], [0.6, 397.0], [0.7, 398.0], [0.8, 398.0], [0.9, 406.0], [1.0, 409.0], [1.1, 413.0], [1.2, 413.0], [1.3, 418.0], [1.4, 425.0], [1.5, 433.0], [1.6, 433.0], [1.7, 439.0], [1.8, 456.0], [1.9, 456.0], [2.0, 459.0], [2.1, 476.0], [2.2, 485.0], [2.3, 485.0], [2.4, 485.0], [2.5, 497.0], [2.6, 500.0], [2.7, 500.0], [2.8, 506.0], [2.9, 512.0], [3.0, 521.0], [3.1, 521.0], [3.2, 525.0], [3.3, 536.0], [3.4, 536.0], [3.5, 536.0], [3.6, 537.0], [3.7, 543.0], [3.8, 543.0], [3.9, 545.0], [4.0, 545.0], [4.1, 548.0], [4.2, 548.0], [4.3, 549.0], [4.4, 561.0], [4.5, 562.0], [4.6, 562.0], [4.7, 567.0], [4.8, 569.0], [4.9, 584.0], [5.0, 584.0], [5.1, 590.0], [5.2, 596.0], [5.3, 596.0], [5.4, 600.0], [5.5, 601.0], [5.6, 604.0], [5.7, 604.0], [5.8, 605.0], [5.9, 605.0], [6.0, 608.0], [6.1, 608.0], [6.2, 611.0], [6.3, 614.0], [6.4, 615.0], [6.5, 615.0], [6.6, 619.0], [6.7, 619.0], [6.8, 619.0], [6.9, 621.0], [7.0, 621.0], [7.1, 621.0], [7.2, 621.0], [7.3, 622.0], [7.4, 623.0], [7.5, 625.0], [7.6, 625.0], [7.7, 625.0], [7.8, 625.0], [7.9, 626.0], [8.0, 626.0], [8.1, 627.0], [8.2, 628.0], [8.3, 630.0], [8.4, 630.0], [8.5, 631.0], [8.6, 632.0], [8.7, 632.0], [8.8, 632.0], [8.9, 633.0], [9.0, 633.0], [9.1, 633.0], [9.2, 635.0], [9.3, 635.0], [9.4, 636.0], [9.5, 636.0], [9.6, 637.0], [9.7, 637.0], [9.8, 637.0], [9.9, 637.0], [10.0, 638.0], [10.1, 639.0], [10.2, 639.0], [10.3, 639.0], [10.4, 640.0], [10.5, 640.0], [10.6, 640.0], [10.7, 641.0], [10.8, 642.0], [10.9, 645.0], [11.0, 645.0], [11.1, 646.0], [11.2, 646.0], [11.3, 646.0], [11.4, 646.0], [11.5, 647.0], [11.6, 648.0], [11.7, 648.0], [11.8, 649.0], [11.9, 651.0], [12.0, 654.0], [12.1, 654.0], [12.2, 655.0], [12.3, 655.0], [12.4, 656.0], [12.5, 656.0], [12.6, 658.0], [12.7, 662.0], [12.8, 664.0], [12.9, 664.0], [13.0, 665.0], [13.1, 665.0], [13.2, 666.0], [13.3, 666.0], [13.4, 667.0], [13.5, 673.0], [13.6, 673.0], [13.7, 674.0], [13.8, 675.0], [13.9, 675.0], [14.0, 675.0], [14.1, 676.0], [14.2, 676.0], [14.3, 677.0], [14.4, 677.0], [14.5, 678.0], [14.6, 679.0], [14.7, 679.0], [14.8, 679.0], [14.9, 681.0], [15.0, 683.0], [15.1, 683.0], [15.2, 684.0], [15.3, 685.0], [15.4, 686.0], [15.5, 686.0], [15.6, 687.0], [15.7, 689.0], [15.8, 690.0], [15.9, 690.0], [16.0, 691.0], [16.1, 695.0], [16.2, 696.0], [16.3, 696.0], [16.4, 700.0], [16.5, 702.0], [16.6, 703.0], [16.7, 703.0], [16.8, 704.0], [16.9, 705.0], [17.0, 705.0], [17.1, 706.0], [17.2, 706.0], [17.3, 707.0], [17.4, 707.0], [17.5, 708.0], [17.6, 709.0], [17.7, 709.0], [17.8, 709.0], [17.9, 710.0], [18.0, 719.0], [18.1, 724.0], [18.2, 724.0], [18.3, 724.0], [18.4, 727.0], [18.5, 727.0], [18.6, 731.0], [18.7, 740.0], [18.8, 740.0], [18.9, 740.0], [19.0, 740.0], [19.1, 741.0], [19.2, 744.0], [19.3, 744.0], [19.4, 745.0], [19.5, 749.0], [19.6, 749.0], [19.7, 749.0], [19.8, 753.0], [19.9, 755.0], [20.0, 756.0], [20.1, 756.0], [20.2, 759.0], [20.3, 761.0], [20.4, 761.0], [20.5, 762.0], [20.6, 769.0], [20.7, 777.0], [20.8, 777.0], [20.9, 782.0], [21.0, 784.0], [21.1, 790.0], [21.2, 790.0], [21.3, 790.0], [21.4, 792.0], [21.5, 797.0], [21.6, 797.0], [21.7, 800.0], [21.8, 810.0], [21.9, 810.0], [22.0, 812.0], [22.1, 812.0], [22.2, 813.0], [22.3, 813.0], [22.4, 813.0], [22.5, 814.0], [22.6, 816.0], [22.7, 816.0], [22.8, 823.0], [22.9, 823.0], [23.0, 824.0], [23.1, 824.0], [23.2, 826.0], [23.3, 831.0], [23.4, 831.0], [23.5, 837.0], [23.6, 850.0], [23.7, 851.0], [23.8, 851.0], [23.9, 851.0], [24.0, 853.0], [24.1, 854.0], [24.2, 854.0], [24.3, 855.0], [24.4, 855.0], [24.5, 859.0], [24.6, 859.0], [24.7, 861.0], [24.8, 862.0], [24.9, 864.0], [25.0, 864.0], [25.1, 873.0], [25.2, 875.0], [25.3, 875.0], [25.4, 875.0], [25.5, 876.0], [25.6, 876.0], [25.7, 876.0], [25.8, 876.0], [25.9, 878.0], [26.0, 880.0], [26.1, 880.0], [26.2, 884.0], [26.3, 884.0], [26.4, 886.0], [26.5, 886.0], [26.6, 888.0], [26.7, 888.0], [26.8, 888.0], [26.9, 888.0], [27.0, 890.0], [27.1, 892.0], [27.2, 892.0], [27.3, 895.0], [27.4, 898.0], [27.5, 900.0], [27.6, 900.0], [27.7, 900.0], [27.8, 902.0], [27.9, 902.0], [28.0, 902.0], [28.1, 902.0], [28.2, 905.0], [28.3, 908.0], [28.4, 908.0], [28.5, 909.0], [28.6, 909.0], [28.7, 909.0], [28.8, 910.0], [28.9, 910.0], [29.0, 916.0], [29.1, 916.0], [29.2, 919.0], [29.3, 921.0], [29.4, 922.0], [29.5, 922.0], [29.6, 922.0], [29.7, 922.0], [29.8, 927.0], [29.9, 927.0], [30.0, 929.0], [30.1, 930.0], [30.2, 930.0], [30.3, 933.0], [30.4, 934.0], [30.5, 938.0], [30.6, 938.0], [30.7, 940.0], [30.8, 942.0], [30.9, 942.0], [31.0, 942.0], [31.1, 943.0], [31.2, 944.0], [31.3, 945.0], [31.4, 945.0], [31.5, 947.0], [31.6, 950.0], [31.7, 950.0], [31.8, 951.0], [31.9, 954.0], [32.0, 958.0], [32.1, 958.0], [32.2, 959.0], [32.3, 960.0], [32.4, 961.0], [32.5, 961.0], [32.6, 961.0], [32.7, 962.0], [32.8, 963.0], [32.9, 963.0], [33.0, 966.0], [33.1, 966.0], [33.2, 971.0], [33.3, 971.0], [33.4, 972.0], [33.5, 982.0], [33.6, 982.0], [33.7, 982.0], [33.8, 985.0], [33.9, 986.0], [34.0, 986.0], [34.1, 986.0], [34.2, 987.0], [34.3, 987.0], [34.4, 987.0], [34.5, 992.0], [34.6, 993.0], [34.7, 994.0], [34.8, 994.0], [34.9, 995.0], [35.0, 996.0], [35.1, 996.0], [35.2, 997.0], [35.3, 998.0], [35.4, 1003.0], [35.5, 1003.0], [35.6, 1003.0], [35.7, 1005.0], [35.8, 1007.0], [35.9, 1007.0], [36.0, 1008.0], [36.1, 1008.0], [36.2, 1014.0], [36.3, 1014.0], [36.4, 1014.0], [36.5, 1015.0], [36.6, 1016.0], [36.7, 1016.0], [36.8, 1018.0], [36.9, 1018.0], [37.0, 1018.0], [37.1, 1018.0], [37.2, 1020.0], [37.3, 1026.0], [37.4, 1026.0], [37.5, 1026.0], [37.6, 1027.0], [37.7, 1030.0], [37.8, 1030.0], [37.9, 1031.0], [38.0, 1033.0], [38.1, 1040.0], [38.2, 1040.0], [38.3, 1040.0], [38.4, 1041.0], [38.5, 1041.0], [38.6, 1045.0], [38.7, 1045.0], [38.8, 1047.0], [38.9, 1047.0], [39.0, 1048.0], [39.1, 1050.0], [39.2, 1051.0], [39.3, 1051.0], [39.4, 1056.0], [39.5, 1057.0], [39.6, 1060.0], [39.7, 1060.0], [39.8, 1062.0], [39.9, 1062.0], [40.0, 1063.0], [40.1, 1063.0], [40.2, 1063.0], [40.3, 1066.0], [40.4, 1066.0], [40.5, 1068.0], [40.6, 1068.0], [40.7, 1072.0], [40.8, 1072.0], [40.9, 1072.0], [41.0, 1073.0], [41.1, 1073.0], [41.2, 1073.0], [41.3, 1073.0], [41.4, 1074.0], [41.5, 1074.0], [41.6, 1074.0], [41.7, 1076.0], [41.8, 1077.0], [41.9, 1077.0], [42.0, 1077.0], [42.1, 1079.0], [42.2, 1080.0], [42.3, 1080.0], [42.4, 1080.0], [42.5, 1081.0], [42.6, 1084.0], [42.7, 1084.0], [42.8, 1087.0], [42.9, 1091.0], [43.0, 1092.0], [43.1, 1092.0], [43.2, 1093.0], [43.3, 1099.0], [43.4, 1099.0], [43.5, 1100.0], [43.6, 1102.0], [43.7, 1103.0], [43.8, 1103.0], [43.9, 1103.0], [44.0, 1103.0], [44.1, 1105.0], [44.2, 1105.0], [44.3, 1105.0], [44.4, 1105.0], [44.5, 1108.0], [44.6, 1108.0], [44.7, 1112.0], [44.8, 1114.0], [44.9, 1115.0], [45.0, 1115.0], [45.1, 1116.0], [45.2, 1118.0], [45.3, 1118.0], [45.4, 1120.0], [45.5, 1121.0], [45.6, 1122.0], [45.7, 1122.0], [45.8, 1124.0], [45.9, 1130.0], [46.0, 1130.0], [46.1, 1130.0], [46.2, 1134.0], [46.3, 1136.0], [46.4, 1137.0], [46.5, 1137.0], [46.6, 1144.0], [46.7, 1145.0], [46.8, 1145.0], [46.9, 1148.0], [47.0, 1149.0], [47.1, 1151.0], [47.2, 1151.0], [47.3, 1152.0], [47.4, 1153.0], [47.5, 1156.0], [47.6, 1156.0], [47.7, 1158.0], [47.8, 1160.0], [47.9, 1160.0], [48.0, 1160.0], [48.1, 1162.0], [48.2, 1162.0], [48.3, 1163.0], [48.4, 1163.0], [48.5, 1165.0], [48.6, 1166.0], [48.7, 1166.0], [48.8, 1169.0], [48.9, 1170.0], [49.0, 1171.0], [49.1, 1171.0], [49.2, 1173.0], [49.3, 1174.0], [49.4, 1175.0], [49.5, 1175.0], [49.6, 1175.0], [49.7, 1176.0], [49.8, 1176.0], [49.9, 1176.0], [50.0, 1179.0], [50.1, 1181.0], [50.2, 1181.0], [50.3, 1182.0], [50.4, 1183.0], [50.5, 1187.0], [50.6, 1187.0], [50.7, 1188.0], [50.8, 1188.0], [50.9, 1190.0], [51.0, 1190.0], [51.1, 1193.0], [51.2, 1194.0], [51.3, 1197.0], [51.4, 1197.0], [51.5, 1199.0], [51.6, 1201.0], [51.7, 1201.0], [51.8, 1203.0], [51.9, 1204.0], [52.0, 1207.0], [52.1, 1207.0], [52.2, 1208.0], [52.3, 1212.0], [52.4, 1212.0], [52.5, 1212.0], [52.6, 1214.0], [52.7, 1216.0], [52.8, 1217.0], [52.9, 1217.0], [53.0, 1218.0], [53.1, 1218.0], [53.2, 1218.0], [53.3, 1218.0], [53.4, 1221.0], [53.5, 1229.0], [53.6, 1229.0], [53.7, 1230.0], [53.8, 1232.0], [53.9, 1234.0], [54.0, 1234.0], [54.1, 1238.0], [54.2, 1240.0], [54.3, 1241.0], [54.4, 1241.0], [54.5, 1241.0], [54.6, 1241.0], [54.7, 1242.0], [54.8, 1242.0], [54.9, 1242.0], [55.0, 1243.0], [55.1, 1243.0], [55.2, 1248.0], [55.3, 1248.0], [55.4, 1249.0], [55.5, 1249.0], [55.6, 1249.0], [55.7, 1251.0], [55.8, 1251.0], [55.9, 1251.0], [56.0, 1254.0], [56.1, 1256.0], [56.2, 1257.0], [56.3, 1257.0], [56.4, 1257.0], [56.5, 1258.0], [56.6, 1259.0], [56.7, 1259.0], [56.8, 1260.0], [56.9, 1260.0], [57.0, 1260.0], [57.1, 1260.0], [57.2, 1262.0], [57.3, 1263.0], [57.4, 1263.0], [57.5, 1263.0], [57.6, 1264.0], [57.7, 1266.0], [57.8, 1266.0], [57.9, 1268.0], [58.0, 1268.0], [58.1, 1269.0], [58.2, 1269.0], [58.3, 1269.0], [58.4, 1269.0], [58.5, 1269.0], [58.6, 1270.0], [58.7, 1271.0], [58.8, 1272.0], [58.9, 1272.0], [59.0, 1273.0], [59.1, 1274.0], [59.2, 1275.0], [59.3, 1275.0], [59.4, 1276.0], [59.5, 1280.0], [59.6, 1282.0], [59.7, 1282.0], [59.8, 1283.0], [59.9, 1291.0], [60.0, 1296.0], [60.1, 1296.0], [60.2, 1298.0], [60.3, 1300.0], [60.4, 1300.0], [60.5, 1301.0], [60.6, 1303.0], [60.7, 1304.0], [60.8, 1304.0], [60.9, 1307.0], [61.0, 1311.0], [61.1, 1312.0], [61.2, 1312.0], [61.3, 1319.0], [61.4, 1320.0], [61.5, 1320.0], [61.6, 1320.0], [61.7, 1322.0], [61.8, 1322.0], [61.9, 1322.0], [62.0, 1322.0], [62.1, 1324.0], [62.2, 1333.0], [62.3, 1333.0], [62.4, 1333.0], [62.5, 1336.0], [62.6, 1345.0], [62.7, 1345.0], [62.8, 1346.0], [62.9, 1346.0], [63.0, 1347.0], [63.1, 1347.0], [63.2, 1349.0], [63.3, 1351.0], [63.4, 1351.0], [63.5, 1357.0], [63.6, 1357.0], [63.7, 1359.0], [63.8, 1359.0], [63.9, 1366.0], [64.0, 1370.0], [64.1, 1370.0], [64.2, 1370.0], [64.3, 1371.0], [64.4, 1373.0], [64.5, 1375.0], [64.6, 1375.0], [64.7, 1376.0], [64.8, 1382.0], [64.9, 1383.0], [65.0, 1383.0], [65.1, 1384.0], [65.2, 1386.0], [65.3, 1386.0], [65.4, 1386.0], [65.5, 1390.0], [65.6, 1395.0], [65.7, 1395.0], [65.8, 1396.0], [65.9, 1397.0], [66.0, 1399.0], [66.1, 1399.0], [66.2, 1400.0], [66.3, 1401.0], [66.4, 1402.0], [66.5, 1402.0], [66.6, 1407.0], [66.7, 1407.0], [66.8, 1407.0], [66.9, 1409.0], [67.0, 1409.0], [67.1, 1411.0], [67.2, 1411.0], [67.3, 1413.0], [67.4, 1417.0], [67.5, 1417.0], [67.6, 1417.0], [67.7, 1418.0], [67.8, 1419.0], [67.9, 1419.0], [68.0, 1419.0], [68.1, 1424.0], [68.2, 1425.0], [68.3, 1428.0], [68.4, 1428.0], [68.5, 1435.0], [68.6, 1436.0], [68.7, 1436.0], [68.8, 1442.0], [68.9, 1442.0], [69.0, 1444.0], [69.1, 1444.0], [69.2, 1447.0], [69.3, 1448.0], [69.4, 1454.0], [69.5, 1454.0], [69.6, 1456.0], [69.7, 1461.0], [69.8, 1461.0], [69.9, 1461.0], [70.0, 1461.0], [70.1, 1462.0], [70.2, 1462.0], [70.3, 1464.0], [70.4, 1464.0], [70.5, 1466.0], [70.6, 1466.0], [70.7, 1467.0], [70.8, 1469.0], [70.9, 1474.0], [71.0, 1474.0], [71.1, 1479.0], [71.2, 1480.0], [71.3, 1480.0], [71.4, 1480.0], [71.5, 1480.0], [71.6, 1482.0], [71.7, 1482.0], [71.8, 1482.0], [71.9, 1483.0], [72.0, 1484.0], [72.1, 1484.0], [72.2, 1484.0], [72.3, 1489.0], [72.4, 1490.0], [72.5, 1490.0], [72.6, 1498.0], [72.7, 1500.0], [72.8, 1500.0], [72.9, 1500.0], [73.0, 1501.0], [73.1, 1506.0], [73.2, 1511.0], [73.3, 1511.0], [73.4, 1511.0], [73.5, 1512.0], [73.6, 1512.0], [73.7, 1515.0], [73.8, 1518.0], [73.9, 1519.0], [74.0, 1519.0], [74.1, 1519.0], [74.2, 1520.0], [74.3, 1520.0], [74.4, 1520.0], [74.5, 1524.0], [74.6, 1527.0], [74.7, 1528.0], [74.8, 1528.0], [74.9, 1528.0], [75.0, 1530.0], [75.1, 1530.0], [75.2, 1530.0], [75.3, 1533.0], [75.4, 1538.0], [75.5, 1538.0], [75.6, 1538.0], [75.7, 1538.0], [75.8, 1538.0], [75.9, 1538.0], [76.0, 1542.0], [76.1, 1542.0], [76.2, 1545.0], [76.3, 1545.0], [76.4, 1547.0], [76.5, 1553.0], [76.6, 1554.0], [76.7, 1554.0], [76.8, 1556.0], [76.9, 1557.0], [77.0, 1557.0], [77.1, 1558.0], [77.2, 1560.0], [77.3, 1562.0], [77.4, 1562.0], [77.5, 1565.0], [77.6, 1575.0], [77.7, 1575.0], [77.8, 1575.0], [77.9, 1578.0], [78.0, 1583.0], [78.1, 1592.0], [78.2, 1592.0], [78.3, 1592.0], [78.4, 1593.0], [78.5, 1593.0], [78.6, 1594.0], [78.7, 1598.0], [78.8, 1599.0], [78.9, 1599.0], [79.0, 1602.0], [79.1, 1603.0], [79.2, 1604.0], [79.3, 1604.0], [79.4, 1607.0], [79.5, 1609.0], [79.6, 1610.0], [79.7, 1610.0], [79.8, 1614.0], [79.9, 1616.0], [80.0, 1616.0], [80.1, 1616.0], [80.2, 1617.0], [80.3, 1620.0], [80.4, 1620.0], [80.5, 1625.0], [80.6, 1628.0], [80.7, 1629.0], [80.8, 1629.0], [80.9, 1632.0], [81.0, 1633.0], [81.1, 1635.0], [81.2, 1635.0], [81.3, 1640.0], [81.4, 1641.0], [81.5, 1644.0], [81.6, 1644.0], [81.7, 1648.0], [81.8, 1650.0], [81.9, 1650.0], [82.0, 1655.0], [82.1, 1658.0], [82.2, 1661.0], [82.3, 1661.0], [82.4, 1662.0], [82.5, 1665.0], [82.6, 1666.0], [82.7, 1666.0], [82.8, 1666.0], [82.9, 1667.0], [83.0, 1669.0], [83.1, 1669.0], [83.2, 1670.0], [83.3, 1670.0], [83.4, 1670.0], [83.5, 1671.0], [83.6, 1678.0], [83.7, 1693.0], [83.8, 1693.0], [83.9, 1699.0], [84.0, 1702.0], [84.1, 1706.0], [84.2, 1706.0], [84.3, 1711.0], [84.4, 1712.0], [84.5, 1716.0], [84.6, 1716.0], [84.7, 1717.0], [84.8, 1720.0], [84.9, 1725.0], [85.0, 1725.0], [85.1, 1726.0], [85.2, 1728.0], [85.3, 1728.0], [85.4, 1729.0], [85.5, 1731.0], [85.6, 1733.0], [85.7, 1733.0], [85.8, 1737.0], [85.9, 1738.0], [86.0, 1745.0], [86.1, 1745.0], [86.2, 1746.0], [86.3, 1747.0], [86.4, 1749.0], [86.5, 1749.0], [86.6, 1749.0], [86.7, 1749.0], [86.8, 1749.0], [86.9, 1759.0], [87.0, 1768.0], [87.1, 1769.0], [87.2, 1769.0], [87.3, 1774.0], [87.4, 1775.0], [87.5, 1776.0], [87.6, 1776.0], [87.7, 1778.0], [87.8, 1779.0], [87.9, 1779.0], [88.0, 1779.0], [88.1, 1785.0], [88.2, 1785.0], [88.3, 1790.0], [88.4, 1790.0], [88.5, 1794.0], [88.6, 1794.0], [88.7, 1794.0], [88.8, 1804.0], [88.9, 1807.0], [89.0, 1812.0], [89.1, 1812.0], [89.2, 1815.0], [89.3, 1825.0], [89.4, 1828.0], [89.5, 1828.0], [89.6, 1838.0], [89.7, 1840.0], [89.8, 1845.0], [89.9, 1845.0], [90.0, 1846.0], [90.1, 1849.0], [90.2, 1849.0], [90.3, 1853.0], [90.4, 1858.0], [90.5, 1859.0], [90.6, 1859.0], [90.7, 1866.0], [90.8, 1866.0], [90.9, 1870.0], [91.0, 1870.0], [91.1, 1873.0], [91.2, 1879.0], [91.3, 1881.0], [91.4, 1881.0], [91.5, 1881.0], [91.6, 1901.0], [91.7, 1901.0], [91.8, 1907.0], [91.9, 1908.0], [92.0, 1911.0], [92.1, 1911.0], [92.2, 1925.0], [92.3, 1926.0], [92.4, 1934.0], [92.5, 1934.0], [92.6, 1946.0], [92.7, 1956.0], [92.8, 1958.0], [92.9, 1958.0], [93.0, 1962.0], [93.1, 1972.0], [93.2, 1978.0], [93.3, 1978.0], [93.4, 1980.0], [93.5, 1999.0], [93.6, 1999.0], [93.7, 2011.0], [93.8, 2021.0], [93.9, 2022.0], [94.0, 2022.0], [94.1, 2030.0], [94.2, 2041.0], [94.3, 2044.0], [94.4, 2044.0], [94.5, 2044.0], [94.6, 2044.0], [94.7, 2054.0], [94.8, 2054.0], [94.9, 2058.0], [95.0, 2066.0], [95.1, 2066.0], [95.2, 2089.0], [95.3, 2094.0], [95.4, 2143.0], [95.5, 2143.0], [95.6, 2148.0], [95.7, 2234.0], [95.8, 2242.0], [95.9, 2242.0], [96.0, 2260.0], [96.1, 2319.0], [96.2, 2339.0], [96.3, 2339.0], [96.4, 2384.0], [96.5, 2403.0], [96.6, 2429.0], [96.7, 2429.0], [96.8, 2474.0], [96.9, 2507.0], [97.0, 2507.0], [97.1, 2529.0], [97.2, 2595.0], [97.3, 2621.0], [97.4, 2621.0], [97.5, 2635.0], [97.6, 2641.0], [97.7, 2667.0], [97.8, 2667.0], [97.9, 2749.0], [98.0, 2893.0], [98.1, 2907.0], [98.2, 2907.0], [98.3, 2940.0], [98.4, 2983.0], [98.5, 2983.0], [98.6, 3095.0], [98.7, 3240.0], [98.8, 3272.0], [98.9, 3272.0], [99.0, 3284.0], [99.1, 3357.0], [99.2, 3414.0], [99.3, 3414.0], [99.4, 3432.0], [99.5, 3449.0], [99.6, 3503.0], [99.7, 3503.0], [99.8, 3517.0], [99.9, 3603.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 81.0, "series": [{"data": [[600.0, 81.0], [700.0, 39.0], [800.0, 43.0], [900.0, 58.0], [1000.0, 59.0], [1100.0, 60.0], [1200.0, 64.0], [1300.0, 43.0], [1400.0, 48.0], [1500.0, 46.0], [1600.0, 37.0], [1700.0, 35.0], [1800.0, 21.0], [1900.0, 15.0], [2000.0, 13.0], [2100.0, 2.0], [2300.0, 3.0], [2200.0, 3.0], [2400.0, 3.0], [2500.0, 3.0], [2600.0, 4.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 3.0], [3000.0, 1.0], [3200.0, 3.0], [3300.0, 1.0], [3400.0, 3.0], [3500.0, 2.0], [3600.0, 1.0], [300.0, 6.0], [400.0, 13.0], [500.0, 20.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 516.0, "series": [{"data": [[0.0, 20.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 516.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 199.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.415929203539823, "minX": 1.60246542E12, "maxY": 12.0, "series": [{"data": [[1.60246548E12, 12.0], [1.60246554E12, 11.415929203539823], [1.60246542E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246554E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 645.0, "minX": 1.0, "maxY": 2474.0, "series": [{"data": [[8.0, 678.0], [4.0, 1303.0], [2.0, 1079.0], [1.0, 1345.0], [9.0, 2474.0], [10.0, 677.0], [5.0, 1304.0], [11.0, 654.0], [12.0, 1242.1892265193367], [6.0, 645.0], [3.0, 1375.0], [7.0, 2429.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1242.5959183673463]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 419.98333333333335, "minX": 1.60246542E12, "maxY": 1438864.9333333333, "series": [{"data": [[1.60246548E12, 1438864.9333333333], [1.60246554E12, 237434.38333333333], [1.60246542E12, 159473.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246548E12, 4263.8], [1.60246554E12, 839.25], [1.60246542E12, 419.98333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246554E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1020.8318584070795, "minX": 1.60246542E12, "maxY": 1427.5714285714291, "series": [{"data": [[1.60246548E12, 1268.5689045936404], [1.60246554E12, 1020.8318584070795], [1.60246542E12, 1427.5714285714291]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246554E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1019.7433628318585, "minX": 1.60246542E12, "maxY": 1426.3928571428573, "series": [{"data": [[1.60246548E12, 1267.3056537102475], [1.60246554E12, 1019.7433628318585], [1.60246542E12, 1426.3928571428573]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246554E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60246542E12, "maxY": 2.392857142857143, "series": [{"data": [[1.60246548E12, 0.026501766784452298], [1.60246554E12, 0.0], [1.60246542E12, 2.392857142857143]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246554E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 357.0, "minX": 1.60246542E12, "maxY": 3603.0, "series": [{"data": [[1.60246548E12, 3603.0], [1.60246554E12, 3432.0], [1.60246542E12, 3517.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246548E12, 409.92699878335], [1.60246554E12, 440.19599874973295], [1.60246542E12, 357.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246548E12, 414.51970048666], [1.60246554E12, 444.9156005001068], [1.60246542E12, 357.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246548E12, 412.478499391675], [1.60246554E12, 442.8179993748665], [1.60246542E12, 357.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246548E12, 395.0], [1.60246554E12, 439.0], [1.60246542E12, 357.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246548E12, 1248.5], [1.60246554E12, 878.0], [1.60246542E12, 880.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246554E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 732.0, "minX": 5.0, "maxY": 1474.5, "series": [{"data": [[8.0, 1358.0], [16.0, 762.0], [9.0, 1272.5], [5.0, 1303.5], [10.0, 1220.5], [11.0, 1307.0], [6.0, 1454.0], [12.0, 771.5], [13.0, 806.5], [7.0, 1474.5], [14.0, 822.0], [15.0, 732.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 732.0, "minX": 5.0, "maxY": 1473.5, "series": [{"data": [[8.0, 1357.5], [16.0, 762.0], [9.0, 1272.0], [5.0, 1303.5], [10.0, 1219.5], [11.0, 1306.0], [6.0, 1454.0], [12.0, 771.5], [13.0, 805.5], [7.0, 1473.5], [14.0, 821.0], [15.0, 732.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1333333333333333, "minX": 1.60246542E12, "maxY": 9.433333333333334, "series": [{"data": [[1.60246548E12, 9.433333333333334], [1.60246554E12, 1.6833333333333333], [1.60246542E12, 1.1333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246554E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.9333333333333333, "minX": 1.60246542E12, "maxY": 9.433333333333334, "series": [{"data": [[1.60246548E12, 9.433333333333334], [1.60246554E12, 1.8833333333333333], [1.60246542E12, 0.9333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246554E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.9333333333333333, "minX": 1.60246542E12, "maxY": 9.433333333333334, "series": [{"data": [[1.60246548E12, 9.433333333333334], [1.60246554E12, 1.8833333333333333], [1.60246542E12, 0.9333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246554E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.9333333333333333, "minX": 1.60246542E12, "maxY": 9.433333333333334, "series": [{"data": [[1.60246548E12, 9.433333333333334], [1.60246554E12, 1.8833333333333333], [1.60246542E12, 0.9333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246554E12, "title": "Total Transactions Per Second"}},
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

