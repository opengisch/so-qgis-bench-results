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
        data: {"result": {"minY": 208.0, "minX": 0.0, "maxY": 4250.0, "series": [{"data": [[0.0, 208.0], [0.1, 208.0], [0.2, 220.0], [0.3, 224.0], [0.4, 224.0], [0.5, 224.0], [0.6, 225.0], [0.7, 226.0], [0.8, 226.0], [0.9, 229.0], [1.0, 232.0], [1.1, 237.0], [1.2, 237.0], [1.3, 237.0], [1.4, 238.0], [1.5, 240.0], [1.6, 240.0], [1.7, 240.0], [1.8, 240.0], [1.9, 240.0], [2.0, 248.0], [2.1, 251.0], [2.2, 251.0], [2.3, 251.0], [2.4, 255.0], [2.5, 258.0], [2.6, 260.0], [2.7, 260.0], [2.8, 261.0], [2.9, 278.0], [3.0, 279.0], [3.1, 279.0], [3.2, 285.0], [3.3, 293.0], [3.4, 293.0], [3.5, 296.0], [3.6, 319.0], [3.7, 325.0], [3.8, 325.0], [3.9, 328.0], [4.0, 335.0], [4.1, 341.0], [4.2, 341.0], [4.3, 341.0], [4.4, 345.0], [4.5, 349.0], [4.6, 349.0], [4.7, 351.0], [4.8, 356.0], [4.9, 358.0], [5.0, 358.0], [5.1, 360.0], [5.2, 360.0], [5.3, 360.0], [5.4, 360.0], [5.5, 361.0], [5.6, 361.0], [5.7, 361.0], [5.8, 361.0], [5.9, 361.0], [6.0, 363.0], [6.1, 363.0], [6.2, 363.0], [6.3, 364.0], [6.4, 367.0], [6.5, 367.0], [6.6, 368.0], [6.7, 368.0], [6.8, 368.0], [6.9, 369.0], [7.0, 371.0], [7.1, 372.0], [7.2, 372.0], [7.3, 376.0], [7.4, 377.0], [7.5, 379.0], [7.6, 379.0], [7.7, 381.0], [7.8, 382.0], [7.9, 383.0], [8.0, 383.0], [8.1, 383.0], [8.2, 384.0], [8.3, 387.0], [8.4, 387.0], [8.5, 389.0], [8.6, 391.0], [8.7, 391.0], [8.8, 393.0], [8.9, 394.0], [9.0, 412.0], [9.1, 412.0], [9.2, 413.0], [9.3, 417.0], [9.4, 421.0], [9.5, 421.0], [9.6, 428.0], [9.7, 438.0], [9.8, 445.0], [9.9, 445.0], [10.0, 447.0], [10.1, 447.0], [10.2, 447.0], [10.3, 448.0], [10.4, 449.0], [10.5, 453.0], [10.6, 453.0], [10.7, 454.0], [10.8, 454.0], [10.9, 455.0], [11.0, 455.0], [11.1, 456.0], [11.2, 459.0], [11.3, 465.0], [11.4, 465.0], [11.5, 468.0], [11.6, 470.0], [11.7, 470.0], [11.8, 470.0], [11.9, 471.0], [12.0, 472.0], [12.1, 472.0], [12.2, 472.0], [12.3, 473.0], [12.4, 473.0], [12.5, 473.0], [12.6, 476.0], [12.7, 477.0], [12.8, 479.0], [12.9, 479.0], [13.0, 485.0], [13.1, 486.0], [13.2, 486.0], [13.3, 486.0], [13.4, 488.0], [13.5, 489.0], [13.6, 489.0], [13.7, 490.0], [13.8, 491.0], [13.9, 491.0], [14.0, 491.0], [14.1, 491.0], [14.2, 492.0], [14.3, 498.0], [14.4, 498.0], [14.5, 498.0], [14.6, 499.0], [14.7, 501.0], [14.8, 501.0], [14.9, 502.0], [15.0, 506.0], [15.1, 506.0], [15.2, 507.0], [15.3, 517.0], [15.4, 517.0], [15.5, 517.0], [15.6, 519.0], [15.7, 519.0], [15.8, 521.0], [15.9, 521.0], [16.0, 527.0], [16.1, 539.0], [16.2, 539.0], [16.3, 539.0], [16.4, 544.0], [16.5, 548.0], [16.6, 549.0], [16.7, 549.0], [16.8, 552.0], [16.9, 552.0], [17.0, 552.0], [17.1, 554.0], [17.2, 558.0], [17.3, 560.0], [17.4, 560.0], [17.5, 563.0], [17.6, 566.0], [17.7, 567.0], [17.8, 567.0], [17.9, 568.0], [18.0, 570.0], [18.1, 573.0], [18.2, 573.0], [18.3, 578.0], [18.4, 580.0], [18.5, 580.0], [18.6, 580.0], [18.7, 581.0], [18.8, 584.0], [18.9, 584.0], [19.0, 585.0], [19.1, 589.0], [19.2, 592.0], [19.3, 592.0], [19.4, 592.0], [19.5, 600.0], [19.6, 605.0], [19.7, 605.0], [19.8, 607.0], [19.9, 613.0], [20.0, 618.0], [20.1, 618.0], [20.2, 622.0], [20.3, 626.0], [20.4, 626.0], [20.5, 628.0], [20.6, 630.0], [20.7, 632.0], [20.8, 632.0], [20.9, 632.0], [21.0, 636.0], [21.1, 643.0], [21.2, 643.0], [21.3, 643.0], [21.4, 644.0], [21.5, 645.0], [21.6, 645.0], [21.7, 646.0], [21.8, 648.0], [21.9, 648.0], [22.0, 649.0], [22.1, 650.0], [22.2, 651.0], [22.3, 651.0], [22.4, 651.0], [22.5, 651.0], [22.6, 652.0], [22.7, 652.0], [22.8, 652.0], [22.9, 655.0], [23.0, 655.0], [23.1, 655.0], [23.2, 657.0], [23.3, 658.0], [23.4, 658.0], [23.5, 658.0], [23.6, 659.0], [23.7, 662.0], [23.8, 662.0], [23.9, 663.0], [24.0, 664.0], [24.1, 664.0], [24.2, 664.0], [24.3, 665.0], [24.4, 666.0], [24.5, 666.0], [24.6, 666.0], [24.7, 667.0], [24.8, 669.0], [24.9, 672.0], [25.0, 672.0], [25.1, 672.0], [25.2, 673.0], [25.3, 673.0], [25.4, 674.0], [25.5, 677.0], [25.6, 677.0], [25.7, 677.0], [25.8, 678.0], [25.9, 679.0], [26.0, 680.0], [26.1, 680.0], [26.2, 681.0], [26.3, 689.0], [26.4, 691.0], [26.5, 691.0], [26.6, 695.0], [26.7, 696.0], [26.8, 696.0], [26.9, 696.0], [27.0, 698.0], [27.1, 699.0], [27.2, 699.0], [27.3, 700.0], [27.4, 702.0], [27.5, 705.0], [27.6, 705.0], [27.7, 707.0], [27.8, 708.0], [27.9, 709.0], [28.0, 709.0], [28.1, 710.0], [28.2, 713.0], [28.3, 715.0], [28.4, 715.0], [28.5, 715.0], [28.6, 716.0], [28.7, 716.0], [28.8, 719.0], [28.9, 721.0], [29.0, 722.0], [29.1, 722.0], [29.2, 722.0], [29.3, 723.0], [29.4, 723.0], [29.5, 723.0], [29.6, 723.0], [29.7, 725.0], [29.8, 726.0], [29.9, 726.0], [30.0, 726.0], [30.1, 727.0], [30.2, 727.0], [30.3, 728.0], [30.4, 730.0], [30.5, 732.0], [30.6, 732.0], [30.7, 732.0], [30.8, 733.0], [30.9, 738.0], [31.0, 738.0], [31.1, 738.0], [31.2, 741.0], [31.3, 742.0], [31.4, 742.0], [31.5, 743.0], [31.6, 743.0], [31.7, 743.0], [31.8, 744.0], [31.9, 745.0], [32.0, 746.0], [32.1, 746.0], [32.2, 747.0], [32.3, 747.0], [32.4, 750.0], [32.5, 750.0], [32.6, 752.0], [32.7, 754.0], [32.8, 755.0], [32.9, 755.0], [33.0, 755.0], [33.1, 756.0], [33.2, 758.0], [33.3, 758.0], [33.4, 758.0], [33.5, 759.0], [33.6, 759.0], [33.7, 759.0], [33.8, 759.0], [33.9, 763.0], [34.0, 763.0], [34.1, 764.0], [34.2, 764.0], [34.3, 768.0], [34.4, 768.0], [34.5, 768.0], [34.6, 768.0], [34.7, 768.0], [34.8, 768.0], [34.9, 769.0], [35.0, 770.0], [35.1, 770.0], [35.2, 772.0], [35.3, 773.0], [35.4, 774.0], [35.5, 774.0], [35.6, 777.0], [35.7, 777.0], [35.8, 778.0], [35.9, 778.0], [36.0, 778.0], [36.1, 786.0], [36.2, 788.0], [36.3, 788.0], [36.4, 790.0], [36.5, 790.0], [36.6, 791.0], [36.7, 791.0], [36.8, 792.0], [36.9, 793.0], [37.0, 793.0], [37.1, 796.0], [37.2, 797.0], [37.3, 798.0], [37.4, 798.0], [37.5, 801.0], [37.6, 801.0], [37.7, 804.0], [37.8, 804.0], [37.9, 805.0], [38.0, 806.0], [38.1, 808.0], [38.2, 808.0], [38.3, 809.0], [38.4, 810.0], [38.5, 810.0], [38.6, 811.0], [38.7, 812.0], [38.8, 817.0], [38.9, 817.0], [39.0, 819.0], [39.1, 820.0], [39.2, 822.0], [39.3, 822.0], [39.4, 822.0], [39.5, 823.0], [39.6, 823.0], [39.7, 823.0], [39.8, 823.0], [39.9, 823.0], [40.0, 824.0], [40.1, 824.0], [40.2, 828.0], [40.3, 839.0], [40.4, 839.0], [40.5, 840.0], [40.6, 840.0], [40.7, 841.0], [40.8, 841.0], [40.9, 844.0], [41.0, 845.0], [41.1, 848.0], [41.2, 848.0], [41.3, 849.0], [41.4, 851.0], [41.5, 854.0], [41.6, 854.0], [41.7, 860.0], [41.8, 860.0], [41.9, 860.0], [42.0, 861.0], [42.1, 862.0], [42.2, 863.0], [42.3, 863.0], [42.4, 865.0], [42.5, 866.0], [42.6, 866.0], [42.7, 866.0], [42.8, 867.0], [42.9, 872.0], [43.0, 874.0], [43.1, 874.0], [43.2, 874.0], [43.3, 875.0], [43.4, 875.0], [43.5, 878.0], [43.6, 883.0], [43.7, 884.0], [43.8, 884.0], [43.9, 884.0], [44.0, 892.0], [44.1, 894.0], [44.2, 894.0], [44.3, 898.0], [44.4, 903.0], [44.5, 904.0], [44.6, 904.0], [44.7, 904.0], [44.8, 907.0], [44.9, 910.0], [45.0, 910.0], [45.1, 910.0], [45.2, 911.0], [45.3, 911.0], [45.4, 912.0], [45.5, 914.0], [45.6, 915.0], [45.7, 915.0], [45.8, 917.0], [45.9, 923.0], [46.0, 923.0], [46.1, 923.0], [46.2, 923.0], [46.3, 925.0], [46.4, 926.0], [46.5, 926.0], [46.6, 928.0], [46.7, 928.0], [46.8, 928.0], [46.9, 932.0], [47.0, 933.0], [47.1, 933.0], [47.2, 933.0], [47.3, 938.0], [47.4, 939.0], [47.5, 940.0], [47.6, 940.0], [47.7, 947.0], [47.8, 950.0], [47.9, 955.0], [48.0, 955.0], [48.1, 964.0], [48.2, 966.0], [48.3, 977.0], [48.4, 977.0], [48.5, 982.0], [48.6, 986.0], [48.7, 986.0], [48.8, 987.0], [48.9, 987.0], [49.0, 994.0], [49.1, 994.0], [49.2, 995.0], [49.3, 1001.0], [49.4, 1001.0], [49.5, 1001.0], [49.6, 1005.0], [49.7, 1005.0], [49.8, 1008.0], [49.9, 1008.0], [50.0, 1011.0], [50.1, 1013.0], [50.2, 1013.0], [50.3, 1021.0], [50.4, 1022.0], [50.5, 1022.0], [50.6, 1022.0], [50.7, 1023.0], [50.8, 1026.0], [50.9, 1027.0], [51.0, 1027.0], [51.1, 1027.0], [51.2, 1030.0], [51.3, 1030.0], [51.4, 1030.0], [51.5, 1031.0], [51.6, 1031.0], [51.7, 1031.0], [51.8, 1033.0], [51.9, 1042.0], [52.0, 1042.0], [52.1, 1042.0], [52.2, 1052.0], [52.3, 1055.0], [52.4, 1060.0], [52.5, 1060.0], [52.6, 1061.0], [52.7, 1069.0], [52.8, 1070.0], [52.9, 1070.0], [53.0, 1072.0], [53.1, 1076.0], [53.2, 1080.0], [53.3, 1080.0], [53.4, 1083.0], [53.5, 1083.0], [53.6, 1083.0], [53.7, 1083.0], [53.8, 1086.0], [53.9, 1089.0], [54.0, 1089.0], [54.1, 1092.0], [54.2, 1094.0], [54.3, 1094.0], [54.4, 1094.0], [54.5, 1098.0], [54.6, 1099.0], [54.7, 1100.0], [54.8, 1100.0], [54.9, 1103.0], [55.0, 1104.0], [55.1, 1104.0], [55.2, 1107.0], [55.3, 1111.0], [55.4, 1115.0], [55.5, 1115.0], [55.6, 1117.0], [55.7, 1121.0], [55.8, 1122.0], [55.9, 1122.0], [56.0, 1127.0], [56.1, 1129.0], [56.2, 1131.0], [56.3, 1131.0], [56.4, 1131.0], [56.5, 1134.0], [56.6, 1136.0], [56.7, 1136.0], [56.8, 1141.0], [56.9, 1145.0], [57.0, 1145.0], [57.1, 1145.0], [57.2, 1148.0], [57.3, 1152.0], [57.4, 1152.0], [57.5, 1153.0], [57.6, 1154.0], [57.7, 1156.0], [57.8, 1156.0], [57.9, 1158.0], [58.0, 1160.0], [58.1, 1161.0], [58.2, 1161.0], [58.3, 1165.0], [58.4, 1167.0], [58.5, 1167.0], [58.6, 1168.0], [58.7, 1168.0], [58.8, 1170.0], [58.9, 1170.0], [59.0, 1171.0], [59.1, 1172.0], [59.2, 1174.0], [59.3, 1174.0], [59.4, 1177.0], [59.5, 1181.0], [59.6, 1181.0], [59.7, 1181.0], [59.8, 1183.0], [59.9, 1183.0], [60.0, 1183.0], [60.1, 1183.0], [60.2, 1184.0], [60.3, 1185.0], [60.4, 1185.0], [60.5, 1187.0], [60.6, 1189.0], [60.7, 1192.0], [60.8, 1192.0], [60.9, 1193.0], [61.0, 1194.0], [61.1, 1194.0], [61.2, 1194.0], [61.3, 1194.0], [61.4, 1196.0], [61.5, 1197.0], [61.6, 1197.0], [61.7, 1198.0], [61.8, 1199.0], [61.9, 1199.0], [62.0, 1204.0], [62.1, 1208.0], [62.2, 1209.0], [62.3, 1209.0], [62.4, 1215.0], [62.5, 1216.0], [62.6, 1217.0], [62.7, 1217.0], [62.8, 1221.0], [62.9, 1225.0], [63.0, 1230.0], [63.1, 1230.0], [63.2, 1233.0], [63.3, 1236.0], [63.4, 1236.0], [63.5, 1237.0], [63.6, 1238.0], [63.7, 1245.0], [63.8, 1245.0], [63.9, 1247.0], [64.0, 1248.0], [64.1, 1252.0], [64.2, 1252.0], [64.3, 1252.0], [64.4, 1254.0], [64.5, 1262.0], [64.6, 1262.0], [64.7, 1262.0], [64.8, 1264.0], [64.9, 1266.0], [65.0, 1266.0], [65.1, 1267.0], [65.2, 1274.0], [65.3, 1274.0], [65.4, 1274.0], [65.5, 1275.0], [65.6, 1278.0], [65.7, 1278.0], [65.8, 1280.0], [65.9, 1283.0], [66.0, 1285.0], [66.1, 1285.0], [66.2, 1285.0], [66.3, 1286.0], [66.4, 1287.0], [66.5, 1287.0], [66.6, 1288.0], [66.7, 1291.0], [66.8, 1291.0], [66.9, 1292.0], [67.0, 1295.0], [67.1, 1298.0], [67.2, 1298.0], [67.3, 1299.0], [67.4, 1304.0], [67.5, 1304.0], [67.6, 1304.0], [67.7, 1308.0], [67.8, 1309.0], [67.9, 1315.0], [68.0, 1315.0], [68.1, 1315.0], [68.2, 1321.0], [68.3, 1323.0], [68.4, 1323.0], [68.5, 1327.0], [68.6, 1327.0], [68.7, 1327.0], [68.8, 1329.0], [68.9, 1331.0], [69.0, 1335.0], [69.1, 1335.0], [69.2, 1337.0], [69.3, 1338.0], [69.4, 1341.0], [69.5, 1341.0], [69.6, 1346.0], [69.7, 1346.0], [69.8, 1348.0], [69.9, 1348.0], [70.0, 1349.0], [70.1, 1349.0], [70.2, 1349.0], [70.3, 1351.0], [70.4, 1351.0], [70.5, 1353.0], [70.6, 1353.0], [70.7, 1359.0], [70.8, 1364.0], [70.9, 1367.0], [71.0, 1367.0], [71.1, 1375.0], [71.2, 1377.0], [71.3, 1380.0], [71.4, 1380.0], [71.5, 1382.0], [71.6, 1385.0], [71.7, 1385.0], [71.8, 1386.0], [71.9, 1387.0], [72.0, 1388.0], [72.1, 1388.0], [72.2, 1390.0], [72.3, 1391.0], [72.4, 1396.0], [72.5, 1396.0], [72.6, 1400.0], [72.7, 1405.0], [72.8, 1409.0], [72.9, 1409.0], [73.0, 1411.0], [73.1, 1413.0], [73.2, 1417.0], [73.3, 1417.0], [73.4, 1417.0], [73.5, 1420.0], [73.6, 1420.0], [73.7, 1425.0], [73.8, 1438.0], [73.9, 1440.0], [74.0, 1440.0], [74.1, 1440.0], [74.2, 1442.0], [74.3, 1444.0], [74.4, 1444.0], [74.5, 1448.0], [74.6, 1450.0], [74.7, 1450.0], [74.8, 1450.0], [74.9, 1452.0], [75.0, 1454.0], [75.1, 1454.0], [75.2, 1456.0], [75.3, 1459.0], [75.4, 1460.0], [75.5, 1460.0], [75.6, 1460.0], [75.7, 1461.0], [75.8, 1461.0], [75.9, 1461.0], [76.0, 1464.0], [76.1, 1464.0], [76.2, 1472.0], [76.3, 1472.0], [76.4, 1472.0], [76.5, 1475.0], [76.6, 1475.0], [76.7, 1475.0], [76.8, 1475.0], [76.9, 1476.0], [77.0, 1476.0], [77.1, 1477.0], [77.2, 1480.0], [77.3, 1482.0], [77.4, 1482.0], [77.5, 1483.0], [77.6, 1483.0], [77.7, 1490.0], [77.8, 1490.0], [77.9, 1494.0], [78.0, 1497.0], [78.1, 1498.0], [78.2, 1498.0], [78.3, 1502.0], [78.4, 1502.0], [78.5, 1502.0], [78.6, 1503.0], [78.7, 1513.0], [78.8, 1525.0], [78.9, 1525.0], [79.0, 1529.0], [79.1, 1530.0], [79.2, 1530.0], [79.3, 1530.0], [79.4, 1541.0], [79.5, 1548.0], [79.6, 1550.0], [79.7, 1550.0], [79.8, 1555.0], [79.9, 1555.0], [80.0, 1558.0], [80.1, 1558.0], [80.2, 1564.0], [80.3, 1581.0], [80.4, 1581.0], [80.5, 1585.0], [80.6, 1588.0], [80.7, 1595.0], [80.8, 1595.0], [80.9, 1597.0], [81.0, 1598.0], [81.1, 1601.0], [81.2, 1601.0], [81.3, 1603.0], [81.4, 1612.0], [81.5, 1614.0], [81.6, 1614.0], [81.7, 1619.0], [81.8, 1619.0], [81.9, 1619.0], [82.0, 1622.0], [82.1, 1658.0], [82.2, 1661.0], [82.3, 1661.0], [82.4, 1663.0], [82.5, 1666.0], [82.6, 1667.0], [82.7, 1667.0], [82.8, 1670.0], [82.9, 1670.0], [83.0, 1673.0], [83.1, 1673.0], [83.2, 1684.0], [83.3, 1690.0], [83.4, 1690.0], [83.5, 1700.0], [83.6, 1700.0], [83.7, 1706.0], [83.8, 1706.0], [83.9, 1707.0], [84.0, 1709.0], [84.1, 1715.0], [84.2, 1715.0], [84.3, 1717.0], [84.4, 1720.0], [84.5, 1722.0], [84.6, 1722.0], [84.7, 1726.0], [84.8, 1730.0], [84.9, 1731.0], [85.0, 1731.0], [85.1, 1732.0], [85.2, 1735.0], [85.3, 1735.0], [85.4, 1735.0], [85.5, 1749.0], [85.6, 1751.0], [85.7, 1751.0], [85.8, 1754.0], [85.9, 1756.0], [86.0, 1756.0], [86.1, 1756.0], [86.2, 1761.0], [86.3, 1767.0], [86.4, 1768.0], [86.5, 1768.0], [86.6, 1775.0], [86.7, 1775.0], [86.8, 1775.0], [86.9, 1776.0], [87.0, 1781.0], [87.1, 1783.0], [87.2, 1783.0], [87.3, 1787.0], [87.4, 1788.0], [87.5, 1791.0], [87.6, 1791.0], [87.7, 1794.0], [87.8, 1796.0], [87.9, 1798.0], [88.0, 1798.0], [88.1, 1803.0], [88.2, 1804.0], [88.3, 1809.0], [88.4, 1809.0], [88.5, 1810.0], [88.6, 1832.0], [88.7, 1832.0], [88.8, 1848.0], [88.9, 1848.0], [89.0, 1848.0], [89.1, 1848.0], [89.2, 1848.0], [89.3, 1851.0], [89.4, 1857.0], [89.5, 1857.0], [89.6, 1862.0], [89.7, 1864.0], [89.8, 1872.0], [89.9, 1872.0], [90.0, 1874.0], [90.1, 1899.0], [90.2, 1899.0], [90.3, 1900.0], [90.4, 1905.0], [90.5, 1909.0], [90.6, 1909.0], [90.7, 1917.0], [90.8, 1919.0], [90.9, 1927.0], [91.0, 1927.0], [91.1, 1930.0], [91.2, 1938.0], [91.3, 1967.0], [91.4, 1967.0], [91.5, 1967.0], [91.6, 1971.0], [91.7, 1971.0], [91.8, 1973.0], [91.9, 1975.0], [92.0, 1992.0], [92.1, 1992.0], [92.2, 1995.0], [92.3, 2004.0], [92.4, 2004.0], [92.5, 2004.0], [92.6, 2023.0], [92.7, 2028.0], [92.8, 2029.0], [92.9, 2029.0], [93.0, 2052.0], [93.1, 2072.0], [93.2, 2073.0], [93.3, 2073.0], [93.4, 2074.0], [93.5, 2076.0], [93.6, 2076.0], [93.7, 2077.0], [93.8, 2080.0], [93.9, 2083.0], [94.0, 2083.0], [94.1, 2085.0], [94.2, 2085.0], [94.3, 2098.0], [94.4, 2098.0], [94.5, 2105.0], [94.6, 2124.0], [94.7, 2154.0], [94.8, 2154.0], [94.9, 2155.0], [95.0, 2156.0], [95.1, 2156.0], [95.2, 2174.0], [95.3, 2204.0], [95.4, 2206.0], [95.5, 2206.0], [95.6, 2212.0], [95.7, 2240.0], [95.8, 2258.0], [95.9, 2258.0], [96.0, 2266.0], [96.1, 2268.0], [96.2, 2287.0], [96.3, 2287.0], [96.4, 2290.0], [96.5, 2297.0], [96.6, 2365.0], [96.7, 2365.0], [96.8, 2380.0], [96.9, 2380.0], [97.0, 2380.0], [97.1, 2393.0], [97.2, 2425.0], [97.3, 2470.0], [97.4, 2470.0], [97.5, 2527.0], [97.6, 2550.0], [97.7, 2555.0], [97.8, 2555.0], [97.9, 2573.0], [98.0, 2574.0], [98.1, 2610.0], [98.2, 2610.0], [98.3, 2762.0], [98.4, 2925.0], [98.5, 2925.0], [98.6, 3093.0], [98.7, 3162.0], [98.8, 3291.0], [98.9, 3291.0], [99.0, 3300.0], [99.1, 3621.0], [99.2, 3774.0], [99.3, 3774.0], [99.4, 3848.0], [99.5, 3859.0], [99.6, 3907.0], [99.7, 3907.0], [99.8, 4236.0], [99.9, 4250.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 75.0, "series": [{"data": [[600.0, 57.0], [700.0, 75.0], [800.0, 51.0], [900.0, 36.0], [1000.0, 40.0], [1100.0, 53.0], [1200.0, 40.0], [1300.0, 38.0], [1400.0, 42.0], [1500.0, 21.0], [1600.0, 17.0], [1700.0, 34.0], [1800.0, 16.0], [1900.0, 15.0], [2000.0, 16.0], [2100.0, 6.0], [2300.0, 4.0], [2200.0, 10.0], [2400.0, 2.0], [2500.0, 5.0], [2600.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [3200.0, 1.0], [3300.0, 1.0], [200.0, 26.0], [3700.0, 1.0], [3600.0, 1.0], [3800.0, 2.0], [3900.0, 1.0], [4200.0, 2.0], [300.0, 40.0], [400.0, 42.0], [500.0, 35.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 108.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 467.0, "series": [{"data": [[0.0, 108.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 467.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 160.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.693877551020407, "minX": 1.60248762E12, "maxY": 10.0, "series": [{"data": [[1.60248762E12, 10.0], [1.60248774E12, 9.693877551020407], [1.60248768E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248774E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 360.0, "minX": 1.0, "maxY": 1198.0, "series": [{"data": [[8.0, 705.0], [4.0, 866.0], [2.0, 747.0], [1.0, 1198.0], [9.0, 786.0], [10.0, 1118.1019283746568], [5.0, 810.0], [6.0, 823.0], [3.0, 1148.0], [7.0, 360.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1114.5374149659876]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 435.73333333333335, "minX": 1.60248762E12, "maxY": 1353853.3166666667, "series": [{"data": [[1.60248762E12, 173348.88333333333], [1.60248774E12, 308499.05], [1.60248768E12, 1353853.3166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60248762E12, 435.73333333333335], [1.60248774E12, 1095.9166666666667], [1.60248768E12, 3991.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248774E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 965.5102040816329, "minX": 1.60248762E12, "maxY": 1300.1379310344828, "series": [{"data": [[1.60248762E12, 1300.1379310344828], [1.60248774E12, 965.5102040816329], [1.60248768E12, 1135.5603773584894]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248774E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 964.5782312925174, "minX": 1.60248762E12, "maxY": 1298.9137931034475, "series": [{"data": [[1.60248762E12, 1298.9137931034475], [1.60248774E12, 964.5782312925174], [1.60248768E12, 1134.3396226415102]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248774E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60248762E12, "maxY": 1.6896551724137931, "series": [{"data": [[1.60248762E12, 1.6896551724137931], [1.60248774E12, 0.0], [1.60248768E12, 0.020754716981132074]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248774E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 208.0, "minX": 1.60248762E12, "maxY": 4250.0, "series": [{"data": [[1.60248762E12, 4236.0], [1.60248774E12, 2555.0], [1.60248768E12, 4250.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60248762E12, 220.0], [1.60248774E12, 237.61999876499175], [1.60248768E12, 230.45299911379814]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60248762E12, 220.0], [1.60248774E12, 242.28200049400328], [1.60248768E12, 233.28450025320052]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60248762E12, 220.0], [1.60248774E12, 240.20999938249588], [1.60248768E12, 232.22249968349934]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60248762E12, 220.0], [1.60248774E12, 226.0], [1.60248768E12, 208.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60248762E12, 855.0], [1.60248774E12, 866.0], [1.60248768E12, 1076.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248774E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 654.0, "minX": 1.0, "maxY": 1795.5, "series": [{"data": [[1.0, 1795.5], [8.0, 1207.0], [9.0, 1176.5], [10.0, 1083.0], [5.0, 1051.5], [11.0, 823.5], [12.0, 722.5], [6.0, 1294.5], [13.0, 819.0], [7.0, 1303.0], [14.0, 714.0], [15.0, 654.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 653.5, "minX": 1.0, "maxY": 1793.5, "series": [{"data": [[1.0, 1793.5], [8.0, 1205.5], [9.0, 1176.0], [10.0, 1082.5], [5.0, 1050.5], [11.0, 823.0], [12.0, 721.5], [6.0, 1291.5], [13.0, 818.0], [7.0, 1302.0], [14.0, 714.0], [15.0, 653.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1333333333333333, "minX": 1.60248762E12, "maxY": 8.833333333333334, "series": [{"data": [[1.60248762E12, 1.1333333333333333], [1.60248774E12, 2.283333333333333], [1.60248768E12, 8.833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248774E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.9666666666666667, "minX": 1.60248762E12, "maxY": 8.833333333333334, "series": [{"data": [[1.60248762E12, 0.9666666666666667], [1.60248774E12, 2.45], [1.60248768E12, 8.833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248774E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.9666666666666667, "minX": 1.60248762E12, "maxY": 8.833333333333334, "series": [{"data": [[1.60248762E12, 0.9666666666666667], [1.60248774E12, 2.45], [1.60248768E12, 8.833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248774E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.9666666666666667, "minX": 1.60248762E12, "maxY": 8.833333333333334, "series": [{"data": [[1.60248762E12, 0.9666666666666667], [1.60248774E12, 2.45], [1.60248768E12, 8.833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248774E12, "title": "Total Transactions Per Second"}},
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

