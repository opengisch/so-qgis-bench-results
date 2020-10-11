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
        data: {"result": {"minY": 397.0, "minX": 0.0, "maxY": 3893.0, "series": [{"data": [[0.0, 397.0], [0.1, 397.0], [0.2, 404.0], [0.3, 405.0], [0.4, 405.0], [0.5, 406.0], [0.6, 407.0], [0.7, 411.0], [0.8, 411.0], [0.9, 424.0], [1.0, 434.0], [1.1, 440.0], [1.2, 440.0], [1.3, 447.0], [1.4, 450.0], [1.5, 456.0], [1.6, 456.0], [1.7, 465.0], [1.8, 477.0], [1.9, 477.0], [2.0, 481.0], [2.1, 484.0], [2.2, 487.0], [2.3, 487.0], [2.4, 490.0], [2.5, 516.0], [2.6, 519.0], [2.7, 519.0], [2.8, 530.0], [2.9, 539.0], [3.0, 545.0], [3.1, 545.0], [3.2, 550.0], [3.3, 551.0], [3.4, 551.0], [3.5, 557.0], [3.6, 558.0], [3.7, 558.0], [3.8, 558.0], [3.9, 567.0], [4.0, 568.0], [4.1, 568.0], [4.2, 568.0], [4.3, 575.0], [4.4, 578.0], [4.5, 581.0], [4.6, 581.0], [4.7, 585.0], [4.8, 600.0], [4.9, 602.0], [5.0, 602.0], [5.1, 606.0], [5.2, 617.0], [5.3, 617.0], [5.4, 619.0], [5.5, 620.0], [5.6, 622.0], [5.7, 622.0], [5.8, 622.0], [5.9, 625.0], [6.0, 626.0], [6.1, 626.0], [6.2, 627.0], [6.3, 631.0], [6.4, 634.0], [6.5, 634.0], [6.6, 636.0], [6.7, 638.0], [6.8, 638.0], [6.9, 639.0], [7.0, 640.0], [7.1, 640.0], [7.2, 640.0], [7.3, 642.0], [7.4, 643.0], [7.5, 644.0], [7.6, 644.0], [7.7, 644.0], [7.8, 645.0], [7.9, 646.0], [8.0, 646.0], [8.1, 647.0], [8.2, 650.0], [8.3, 650.0], [8.4, 650.0], [8.5, 652.0], [8.6, 652.0], [8.7, 652.0], [8.8, 652.0], [8.9, 653.0], [9.0, 655.0], [9.1, 655.0], [9.2, 655.0], [9.3, 657.0], [9.4, 663.0], [9.5, 663.0], [9.6, 665.0], [9.7, 667.0], [9.8, 668.0], [9.9, 668.0], [10.0, 668.0], [10.1, 669.0], [10.2, 669.0], [10.3, 669.0], [10.4, 670.0], [10.5, 670.0], [10.6, 670.0], [10.7, 671.0], [10.8, 673.0], [10.9, 673.0], [11.0, 673.0], [11.1, 673.0], [11.2, 674.0], [11.3, 674.0], [11.4, 674.0], [11.5, 675.0], [11.6, 678.0], [11.7, 678.0], [11.8, 678.0], [11.9, 679.0], [12.0, 680.0], [12.1, 680.0], [12.2, 680.0], [12.3, 684.0], [12.4, 684.0], [12.5, 684.0], [12.6, 685.0], [12.7, 686.0], [12.8, 688.0], [12.9, 688.0], [13.0, 691.0], [13.1, 694.0], [13.2, 696.0], [13.3, 696.0], [13.4, 696.0], [13.5, 696.0], [13.6, 696.0], [13.7, 696.0], [13.8, 697.0], [13.9, 697.0], [14.0, 697.0], [14.1, 697.0], [14.2, 697.0], [14.3, 698.0], [14.4, 698.0], [14.5, 699.0], [14.6, 704.0], [14.7, 705.0], [14.8, 705.0], [14.9, 707.0], [15.0, 707.0], [15.1, 707.0], [15.2, 707.0], [15.3, 709.0], [15.4, 710.0], [15.5, 710.0], [15.6, 710.0], [15.7, 716.0], [15.8, 717.0], [15.9, 717.0], [16.0, 723.0], [16.1, 724.0], [16.2, 724.0], [16.3, 724.0], [16.4, 730.0], [16.5, 732.0], [16.6, 737.0], [16.7, 737.0], [16.8, 738.0], [16.9, 738.0], [17.0, 738.0], [17.1, 743.0], [17.2, 746.0], [17.3, 746.0], [17.4, 746.0], [17.5, 749.0], [17.6, 751.0], [17.7, 753.0], [17.8, 753.0], [17.9, 755.0], [18.0, 755.0], [18.1, 756.0], [18.2, 756.0], [18.3, 757.0], [18.4, 759.0], [18.5, 759.0], [18.6, 761.0], [18.7, 768.0], [18.8, 769.0], [18.9, 769.0], [19.0, 771.0], [19.1, 771.0], [19.2, 772.0], [19.3, 772.0], [19.4, 773.0], [19.5, 773.0], [19.6, 774.0], [19.7, 774.0], [19.8, 774.0], [19.9, 777.0], [20.0, 780.0], [20.1, 780.0], [20.2, 780.0], [20.3, 781.0], [20.4, 781.0], [20.5, 784.0], [20.6, 785.0], [20.7, 786.0], [20.8, 786.0], [20.9, 786.0], [21.0, 789.0], [21.1, 793.0], [21.2, 793.0], [21.3, 794.0], [21.4, 795.0], [21.5, 796.0], [21.6, 796.0], [21.7, 797.0], [21.8, 800.0], [21.9, 800.0], [22.0, 806.0], [22.1, 807.0], [22.2, 813.0], [22.3, 813.0], [22.4, 813.0], [22.5, 816.0], [22.6, 820.0], [22.7, 820.0], [22.8, 826.0], [22.9, 829.0], [23.0, 832.0], [23.1, 832.0], [23.2, 835.0], [23.3, 835.0], [23.4, 835.0], [23.5, 840.0], [23.6, 851.0], [23.7, 853.0], [23.8, 853.0], [23.9, 854.0], [24.0, 859.0], [24.1, 863.0], [24.2, 863.0], [24.3, 864.0], [24.4, 864.0], [24.5, 865.0], [24.6, 865.0], [24.7, 869.0], [24.8, 870.0], [24.9, 872.0], [25.0, 872.0], [25.1, 873.0], [25.2, 874.0], [25.3, 874.0], [25.4, 875.0], [25.5, 877.0], [25.6, 877.0], [25.7, 877.0], [25.8, 877.0], [25.9, 878.0], [26.0, 879.0], [26.1, 879.0], [26.2, 881.0], [26.3, 882.0], [26.4, 883.0], [26.5, 883.0], [26.6, 885.0], [26.7, 885.0], [26.8, 885.0], [26.9, 888.0], [27.0, 888.0], [27.1, 890.0], [27.2, 890.0], [27.3, 892.0], [27.4, 896.0], [27.5, 897.0], [27.6, 897.0], [27.7, 899.0], [27.8, 899.0], [27.9, 900.0], [28.0, 900.0], [28.1, 903.0], [28.2, 903.0], [28.3, 906.0], [28.4, 906.0], [28.5, 911.0], [28.6, 912.0], [28.7, 912.0], [28.8, 913.0], [28.9, 915.0], [29.0, 915.0], [29.1, 915.0], [29.2, 916.0], [29.3, 917.0], [29.4, 918.0], [29.5, 918.0], [29.6, 918.0], [29.7, 919.0], [29.8, 921.0], [29.9, 921.0], [30.0, 923.0], [30.1, 925.0], [30.2, 925.0], [30.3, 925.0], [30.4, 926.0], [30.5, 928.0], [30.6, 928.0], [30.7, 928.0], [30.8, 933.0], [30.9, 933.0], [31.0, 933.0], [31.1, 934.0], [31.2, 938.0], [31.3, 939.0], [31.4, 939.0], [31.5, 942.0], [31.6, 942.0], [31.7, 942.0], [31.8, 944.0], [31.9, 945.0], [32.0, 946.0], [32.1, 946.0], [32.2, 948.0], [32.3, 949.0], [32.4, 950.0], [32.5, 950.0], [32.6, 950.0], [32.7, 951.0], [32.8, 952.0], [32.9, 952.0], [33.0, 952.0], [33.1, 952.0], [33.2, 953.0], [33.3, 953.0], [33.4, 955.0], [33.5, 957.0], [33.6, 957.0], [33.7, 957.0], [33.8, 960.0], [33.9, 961.0], [34.0, 961.0], [34.1, 964.0], [34.2, 965.0], [34.3, 967.0], [34.4, 967.0], [34.5, 969.0], [34.6, 970.0], [34.7, 976.0], [34.8, 976.0], [34.9, 976.0], [35.0, 977.0], [35.1, 977.0], [35.2, 985.0], [35.3, 985.0], [35.4, 987.0], [35.5, 987.0], [35.6, 987.0], [35.7, 989.0], [35.8, 1000.0], [35.9, 1000.0], [36.0, 1001.0], [36.1, 1004.0], [36.2, 1007.0], [36.3, 1007.0], [36.4, 1011.0], [36.5, 1016.0], [36.6, 1022.0], [36.7, 1022.0], [36.8, 1023.0], [36.9, 1023.0], [37.0, 1023.0], [37.1, 1025.0], [37.2, 1029.0], [37.3, 1029.0], [37.4, 1029.0], [37.5, 1032.0], [37.6, 1032.0], [37.7, 1032.0], [37.8, 1032.0], [37.9, 1034.0], [38.0, 1035.0], [38.1, 1037.0], [38.2, 1037.0], [38.3, 1043.0], [38.4, 1045.0], [38.5, 1045.0], [38.6, 1046.0], [38.7, 1048.0], [38.8, 1049.0], [38.9, 1049.0], [39.0, 1049.0], [39.1, 1053.0], [39.2, 1058.0], [39.3, 1058.0], [39.4, 1059.0], [39.5, 1061.0], [39.6, 1064.0], [39.7, 1064.0], [39.8, 1064.0], [39.9, 1064.0], [40.0, 1065.0], [40.1, 1065.0], [40.2, 1066.0], [40.3, 1067.0], [40.4, 1067.0], [40.5, 1068.0], [40.6, 1069.0], [40.7, 1070.0], [40.8, 1070.0], [40.9, 1071.0], [41.0, 1074.0], [41.1, 1075.0], [41.2, 1075.0], [41.3, 1076.0], [41.4, 1076.0], [41.5, 1076.0], [41.6, 1076.0], [41.7, 1078.0], [41.8, 1079.0], [41.9, 1079.0], [42.0, 1079.0], [42.1, 1080.0], [42.2, 1080.0], [42.3, 1080.0], [42.4, 1081.0], [42.5, 1082.0], [42.6, 1084.0], [42.7, 1084.0], [42.8, 1086.0], [42.9, 1088.0], [43.0, 1090.0], [43.1, 1090.0], [43.2, 1090.0], [43.3, 1092.0], [43.4, 1092.0], [43.5, 1093.0], [43.6, 1094.0], [43.7, 1097.0], [43.8, 1097.0], [43.9, 1098.0], [44.0, 1099.0], [44.1, 1100.0], [44.2, 1100.0], [44.3, 1100.0], [44.4, 1101.0], [44.5, 1102.0], [44.6, 1102.0], [44.7, 1102.0], [44.8, 1102.0], [44.9, 1108.0], [45.0, 1108.0], [45.1, 1109.0], [45.2, 1110.0], [45.3, 1110.0], [45.4, 1110.0], [45.5, 1111.0], [45.6, 1112.0], [45.7, 1112.0], [45.8, 1113.0], [45.9, 1117.0], [46.0, 1117.0], [46.1, 1117.0], [46.2, 1118.0], [46.3, 1120.0], [46.4, 1121.0], [46.5, 1121.0], [46.6, 1123.0], [46.7, 1126.0], [46.8, 1126.0], [46.9, 1126.0], [47.0, 1126.0], [47.1, 1127.0], [47.2, 1127.0], [47.3, 1127.0], [47.4, 1130.0], [47.5, 1130.0], [47.6, 1130.0], [47.7, 1130.0], [47.8, 1131.0], [47.9, 1132.0], [48.0, 1132.0], [48.1, 1134.0], [48.2, 1135.0], [48.3, 1135.0], [48.4, 1135.0], [48.5, 1136.0], [48.6, 1136.0], [48.7, 1136.0], [48.8, 1136.0], [48.9, 1137.0], [49.0, 1141.0], [49.1, 1141.0], [49.2, 1142.0], [49.3, 1142.0], [49.4, 1145.0], [49.5, 1145.0], [49.6, 1148.0], [49.7, 1149.0], [49.8, 1152.0], [49.9, 1152.0], [50.0, 1152.0], [50.1, 1153.0], [50.2, 1153.0], [50.3, 1155.0], [50.4, 1156.0], [50.5, 1161.0], [50.6, 1161.0], [50.7, 1162.0], [50.8, 1163.0], [50.9, 1167.0], [51.0, 1167.0], [51.1, 1169.0], [51.2, 1169.0], [51.3, 1171.0], [51.4, 1171.0], [51.5, 1174.0], [51.6, 1177.0], [51.7, 1177.0], [51.8, 1179.0], [51.9, 1182.0], [52.0, 1183.0], [52.1, 1183.0], [52.2, 1183.0], [52.3, 1183.0], [52.4, 1187.0], [52.5, 1187.0], [52.6, 1187.0], [52.7, 1188.0], [52.8, 1189.0], [52.9, 1189.0], [53.0, 1190.0], [53.1, 1192.0], [53.2, 1193.0], [53.3, 1193.0], [53.4, 1194.0], [53.5, 1196.0], [53.6, 1196.0], [53.7, 1197.0], [53.8, 1199.0], [53.9, 1204.0], [54.0, 1204.0], [54.1, 1205.0], [54.2, 1207.0], [54.3, 1209.0], [54.4, 1209.0], [54.5, 1211.0], [54.6, 1212.0], [54.7, 1213.0], [54.8, 1213.0], [54.9, 1214.0], [55.0, 1216.0], [55.1, 1216.0], [55.2, 1217.0], [55.3, 1217.0], [55.4, 1218.0], [55.5, 1218.0], [55.6, 1218.0], [55.7, 1219.0], [55.8, 1219.0], [55.9, 1219.0], [56.0, 1220.0], [56.1, 1220.0], [56.2, 1220.0], [56.3, 1220.0], [56.4, 1221.0], [56.5, 1221.0], [56.6, 1222.0], [56.7, 1222.0], [56.8, 1222.0], [56.9, 1223.0], [57.0, 1223.0], [57.1, 1224.0], [57.2, 1228.0], [57.3, 1228.0], [57.4, 1228.0], [57.5, 1228.0], [57.6, 1229.0], [57.7, 1229.0], [57.8, 1229.0], [57.9, 1229.0], [58.0, 1230.0], [58.1, 1230.0], [58.2, 1230.0], [58.3, 1230.0], [58.4, 1230.0], [58.5, 1230.0], [58.6, 1234.0], [58.7, 1236.0], [58.8, 1236.0], [58.9, 1236.0], [59.0, 1237.0], [59.1, 1238.0], [59.2, 1238.0], [59.3, 1238.0], [59.4, 1241.0], [59.5, 1245.0], [59.6, 1246.0], [59.7, 1246.0], [59.8, 1246.0], [59.9, 1247.0], [60.0, 1248.0], [60.1, 1248.0], [60.2, 1248.0], [60.3, 1250.0], [60.4, 1250.0], [60.5, 1254.0], [60.6, 1254.0], [60.7, 1254.0], [60.8, 1254.0], [60.9, 1255.0], [61.0, 1256.0], [61.1, 1257.0], [61.2, 1257.0], [61.3, 1258.0], [61.4, 1260.0], [61.5, 1260.0], [61.6, 1260.0], [61.7, 1260.0], [61.8, 1266.0], [61.9, 1266.0], [62.0, 1269.0], [62.1, 1269.0], [62.2, 1270.0], [62.3, 1270.0], [62.4, 1275.0], [62.5, 1277.0], [62.6, 1277.0], [62.7, 1277.0], [62.8, 1280.0], [62.9, 1280.0], [63.0, 1281.0], [63.1, 1281.0], [63.2, 1281.0], [63.3, 1283.0], [63.4, 1283.0], [63.5, 1283.0], [63.6, 1285.0], [63.7, 1286.0], [63.8, 1286.0], [63.9, 1292.0], [64.0, 1293.0], [64.1, 1296.0], [64.2, 1296.0], [64.3, 1297.0], [64.4, 1298.0], [64.5, 1300.0], [64.6, 1300.0], [64.7, 1301.0], [64.8, 1303.0], [64.9, 1304.0], [65.0, 1304.0], [65.1, 1304.0], [65.2, 1304.0], [65.3, 1304.0], [65.4, 1306.0], [65.5, 1306.0], [65.6, 1308.0], [65.7, 1308.0], [65.8, 1309.0], [65.9, 1310.0], [66.0, 1313.0], [66.1, 1313.0], [66.2, 1314.0], [66.3, 1317.0], [66.4, 1320.0], [66.5, 1320.0], [66.6, 1327.0], [66.7, 1327.0], [66.8, 1327.0], [66.9, 1333.0], [67.0, 1334.0], [67.1, 1334.0], [67.2, 1334.0], [67.3, 1338.0], [67.4, 1338.0], [67.5, 1344.0], [67.6, 1344.0], [67.7, 1346.0], [67.8, 1347.0], [67.9, 1353.0], [68.0, 1353.0], [68.1, 1354.0], [68.2, 1363.0], [68.3, 1363.0], [68.4, 1363.0], [68.5, 1365.0], [68.6, 1372.0], [68.7, 1372.0], [68.8, 1374.0], [68.9, 1380.0], [69.0, 1386.0], [69.1, 1386.0], [69.2, 1388.0], [69.3, 1389.0], [69.4, 1392.0], [69.5, 1392.0], [69.6, 1394.0], [69.7, 1397.0], [69.8, 1398.0], [69.9, 1398.0], [70.0, 1399.0], [70.1, 1408.0], [70.2, 1408.0], [70.3, 1412.0], [70.4, 1413.0], [70.5, 1413.0], [70.6, 1413.0], [70.7, 1418.0], [70.8, 1419.0], [70.9, 1422.0], [71.0, 1422.0], [71.1, 1422.0], [71.2, 1424.0], [71.3, 1425.0], [71.4, 1425.0], [71.5, 1427.0], [71.6, 1438.0], [71.7, 1438.0], [71.8, 1438.0], [71.9, 1442.0], [72.0, 1442.0], [72.1, 1442.0], [72.2, 1444.0], [72.3, 1446.0], [72.4, 1450.0], [72.5, 1450.0], [72.6, 1450.0], [72.7, 1451.0], [72.8, 1451.0], [72.9, 1451.0], [73.0, 1453.0], [73.1, 1455.0], [73.2, 1458.0], [73.3, 1458.0], [73.4, 1458.0], [73.5, 1462.0], [73.6, 1462.0], [73.7, 1467.0], [73.8, 1468.0], [73.9, 1472.0], [74.0, 1472.0], [74.1, 1478.0], [74.2, 1481.0], [74.3, 1482.0], [74.4, 1482.0], [74.5, 1484.0], [74.6, 1485.0], [74.7, 1486.0], [74.8, 1486.0], [74.9, 1487.0], [75.0, 1496.0], [75.1, 1496.0], [75.2, 1508.0], [75.3, 1509.0], [75.4, 1512.0], [75.5, 1512.0], [75.6, 1512.0], [75.7, 1513.0], [75.8, 1514.0], [75.9, 1514.0], [76.0, 1519.0], [76.1, 1519.0], [76.2, 1521.0], [76.3, 1521.0], [76.4, 1523.0], [76.5, 1525.0], [76.6, 1531.0], [76.7, 1531.0], [76.8, 1544.0], [76.9, 1546.0], [77.0, 1546.0], [77.1, 1550.0], [77.2, 1552.0], [77.3, 1557.0], [77.4, 1557.0], [77.5, 1565.0], [77.6, 1569.0], [77.7, 1569.0], [77.8, 1569.0], [77.9, 1580.0], [78.0, 1583.0], [78.1, 1584.0], [78.2, 1584.0], [78.3, 1586.0], [78.4, 1590.0], [78.5, 1590.0], [78.6, 1596.0], [78.7, 1597.0], [78.8, 1600.0], [78.9, 1600.0], [79.0, 1604.0], [79.1, 1609.0], [79.2, 1611.0], [79.3, 1611.0], [79.4, 1612.0], [79.5, 1614.0], [79.6, 1615.0], [79.7, 1615.0], [79.8, 1615.0], [79.9, 1624.0], [80.0, 1625.0], [80.1, 1625.0], [80.2, 1629.0], [80.3, 1632.0], [80.4, 1632.0], [80.5, 1634.0], [80.6, 1636.0], [80.7, 1640.0], [80.8, 1640.0], [80.9, 1644.0], [81.0, 1654.0], [81.1, 1656.0], [81.2, 1656.0], [81.3, 1656.0], [81.4, 1658.0], [81.5, 1664.0], [81.6, 1664.0], [81.7, 1668.0], [81.8, 1673.0], [81.9, 1673.0], [82.0, 1675.0], [82.1, 1676.0], [82.2, 1679.0], [82.3, 1679.0], [82.4, 1681.0], [82.5, 1684.0], [82.6, 1689.0], [82.7, 1689.0], [82.8, 1691.0], [82.9, 1694.0], [83.0, 1695.0], [83.1, 1695.0], [83.2, 1698.0], [83.3, 1710.0], [83.4, 1710.0], [83.5, 1719.0], [83.6, 1721.0], [83.7, 1724.0], [83.8, 1724.0], [83.9, 1724.0], [84.0, 1732.0], [84.1, 1732.0], [84.2, 1732.0], [84.3, 1734.0], [84.4, 1740.0], [84.5, 1740.0], [84.6, 1740.0], [84.7, 1743.0], [84.8, 1746.0], [84.9, 1751.0], [85.0, 1751.0], [85.1, 1752.0], [85.2, 1754.0], [85.3, 1754.0], [85.4, 1757.0], [85.5, 1760.0], [85.6, 1760.0], [85.7, 1760.0], [85.8, 1761.0], [85.9, 1770.0], [86.0, 1771.0], [86.1, 1771.0], [86.2, 1772.0], [86.3, 1778.0], [86.4, 1781.0], [86.5, 1781.0], [86.6, 1785.0], [86.7, 1786.0], [86.8, 1786.0], [86.9, 1793.0], [87.0, 1795.0], [87.1, 1796.0], [87.2, 1796.0], [87.3, 1801.0], [87.4, 1802.0], [87.5, 1802.0], [87.6, 1802.0], [87.7, 1803.0], [87.8, 1805.0], [87.9, 1805.0], [88.0, 1805.0], [88.1, 1809.0], [88.2, 1813.0], [88.3, 1814.0], [88.4, 1814.0], [88.5, 1815.0], [88.6, 1815.0], [88.7, 1815.0], [88.8, 1817.0], [88.9, 1819.0], [89.0, 1819.0], [89.1, 1819.0], [89.2, 1823.0], [89.3, 1828.0], [89.4, 1830.0], [89.5, 1830.0], [89.6, 1832.0], [89.7, 1832.0], [89.8, 1836.0], [89.9, 1836.0], [90.0, 1858.0], [90.1, 1860.0], [90.2, 1860.0], [90.3, 1885.0], [90.4, 1886.0], [90.5, 1889.0], [90.6, 1889.0], [90.7, 1891.0], [90.8, 1893.0], [90.9, 1904.0], [91.0, 1904.0], [91.1, 1920.0], [91.2, 1946.0], [91.3, 1956.0], [91.4, 1956.0], [91.5, 1959.0], [91.6, 1967.0], [91.7, 1967.0], [91.8, 1974.0], [91.9, 1980.0], [92.0, 1983.0], [92.1, 1983.0], [92.2, 1991.0], [92.3, 2016.0], [92.4, 2028.0], [92.5, 2028.0], [92.6, 2053.0], [92.7, 2063.0], [92.8, 2081.0], [92.9, 2081.0], [93.0, 2107.0], [93.1, 2120.0], [93.2, 2129.0], [93.3, 2129.0], [93.4, 2131.0], [93.5, 2134.0], [93.6, 2134.0], [93.7, 2160.0], [93.8, 2161.0], [93.9, 2178.0], [94.0, 2178.0], [94.1, 2180.0], [94.2, 2188.0], [94.3, 2215.0], [94.4, 2215.0], [94.5, 2228.0], [94.6, 2247.0], [94.7, 2258.0], [94.8, 2258.0], [94.9, 2264.0], [95.0, 2272.0], [95.1, 2272.0], [95.2, 2278.0], [95.3, 2295.0], [95.4, 2299.0], [95.5, 2299.0], [95.6, 2318.0], [95.7, 2319.0], [95.8, 2327.0], [95.9, 2327.0], [96.0, 2339.0], [96.1, 2344.0], [96.2, 2347.0], [96.3, 2347.0], [96.4, 2375.0], [96.5, 2416.0], [96.6, 2434.0], [96.7, 2434.0], [96.8, 2478.0], [96.9, 2493.0], [97.0, 2493.0], [97.1, 2498.0], [97.2, 2509.0], [97.3, 2514.0], [97.4, 2514.0], [97.5, 2524.0], [97.6, 2559.0], [97.7, 2764.0], [97.8, 2764.0], [97.9, 2799.0], [98.0, 2873.0], [98.1, 2899.0], [98.2, 2899.0], [98.3, 2969.0], [98.4, 3029.0], [98.5, 3029.0], [98.6, 3034.0], [98.7, 3071.0], [98.8, 3213.0], [98.9, 3213.0], [99.0, 3247.0], [99.1, 3270.0], [99.2, 3297.0], [99.3, 3297.0], [99.4, 3308.0], [99.5, 3673.0], [99.6, 3823.0], [99.7, 3823.0], [99.8, 3891.0], [99.9, 3893.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 78.0, "series": [{"data": [[600.0, 72.0], [700.0, 53.0], [800.0, 45.0], [900.0, 58.0], [1000.0, 61.0], [1100.0, 72.0], [1200.0, 78.0], [1300.0, 41.0], [1400.0, 37.0], [1500.0, 27.0], [1600.0, 33.0], [1700.0, 29.0], [1800.0, 27.0], [1900.0, 10.0], [2000.0, 5.0], [2100.0, 10.0], [2200.0, 9.0], [2300.0, 7.0], [2400.0, 5.0], [2500.0, 4.0], [2800.0, 2.0], [2700.0, 2.0], [2900.0, 1.0], [3000.0, 3.0], [3300.0, 1.0], [3200.0, 4.0], [3600.0, 1.0], [3800.0, 3.0], [300.0, 1.0], [400.0, 17.0], [500.0, 17.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 18.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 534.0, "series": [{"data": [[0.0, 18.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 534.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 183.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.76678445229682, "minX": 1.60237674E12, "maxY": 12.0, "series": [{"data": [[1.6023768E12, 11.76678445229682], [1.60237674E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023768E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 643.0, "minX": 1.0, "maxY": 2347.0, "series": [{"data": [[8.0, 670.0], [4.0, 1236.0], [2.0, 1136.0], [1.0, 1130.0], [9.0, 1668.0], [10.0, 2347.0], [5.0, 1110.0], [11.0, 643.0], [12.0, 1244.6947513812147], [6.0, 674.0], [3.0, 646.0], [7.0, 738.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1242.3904761904757]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2125.4166666666665, "minX": 1.60237674E12, "maxY": 1210346.3333333333, "series": [{"data": [[1.6023768E12, 625423.6], [1.60237674E12, 1210346.3333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023768E12, 2125.4166666666665], [1.60237674E12, 3397.616666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023768E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1216.6007067137803, "minX": 1.60237674E12, "maxY": 1258.5376106194683, "series": [{"data": [[1.6023768E12, 1216.6007067137803], [1.60237674E12, 1258.5376106194683]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023768E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1215.4840989399293, "minX": 1.60237674E12, "maxY": 1257.2455752212388, "series": [{"data": [[1.6023768E12, 1215.4840989399293], [1.60237674E12, 1257.2455752212388]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023768E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.056537102473498226, "minX": 1.60237674E12, "maxY": 0.23230088495575213, "series": [{"data": [[1.6023768E12, 0.056537102473498226], [1.60237674E12, 0.23230088495575213]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023768E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 397.0, "minX": 1.60237674E12, "maxY": 3893.0, "series": [{"data": [[1.6023768E12, 2873.0], [1.60237674E12, 3893.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023768E12, 542.3359995937348], [1.60237674E12, 406.07699989199637]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023768E12, 543.8696001625061], [1.60237674E12, 406.4847000432014]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023768E12, 543.1879997968674], [1.60237674E12, 406.30349994599817]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023768E12, 481.0], [1.60237674E12, 397.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023768E12, 1149.0], [1.60237674E12, 1158.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023768E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 618.0, "minX": 1.0, "maxY": 2514.0, "series": [{"data": [[8.0, 1298.5], [2.0, 1133.0], [9.0, 1277.5], [10.0, 1188.0], [11.0, 1118.0], [12.0, 982.5], [13.0, 836.0], [14.0, 796.5], [15.0, 786.0], [1.0, 2514.0], [16.0, 618.0], [5.0, 1405.0], [6.0, 1465.5], [7.0, 1432.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 618.0, "minX": 1.0, "maxY": 2511.0, "series": [{"data": [[8.0, 1296.5], [2.0, 1132.5], [9.0, 1276.0], [10.0, 1187.5], [11.0, 1116.0], [12.0, 979.5], [13.0, 835.5], [14.0, 796.5], [15.0, 786.0], [1.0, 2511.0], [16.0, 618.0], [5.0, 1403.0], [6.0, 1464.5], [7.0, 1428.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.516666666666667, "minX": 1.60237674E12, "maxY": 7.733333333333333, "series": [{"data": [[1.6023768E12, 4.516666666666667], [1.60237674E12, 7.733333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023768E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.716666666666667, "minX": 1.60237674E12, "maxY": 7.533333333333333, "series": [{"data": [[1.6023768E12, 4.716666666666667], [1.60237674E12, 7.533333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023768E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.716666666666667, "minX": 1.60237674E12, "maxY": 7.533333333333333, "series": [{"data": [[1.6023768E12, 4.716666666666667], [1.60237674E12, 7.533333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023768E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.716666666666667, "minX": 1.60237674E12, "maxY": 7.533333333333333, "series": [{"data": [[1.6023768E12, 4.716666666666667], [1.60237674E12, 7.533333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023768E12, "title": "Total Transactions Per Second"}},
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

