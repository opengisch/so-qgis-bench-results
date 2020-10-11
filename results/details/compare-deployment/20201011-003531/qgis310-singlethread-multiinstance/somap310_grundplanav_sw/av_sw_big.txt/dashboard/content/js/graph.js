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
        data: {"result": {"minY": 218.0, "minX": 0.0, "maxY": 9789.0, "series": [{"data": [[0.0, 218.0], [0.1, 247.0], [0.2, 363.0], [0.3, 373.0], [0.4, 374.0], [0.5, 377.0], [0.6, 380.0], [0.7, 382.0], [0.8, 384.0], [0.9, 385.0], [1.0, 387.0], [1.1, 388.0], [1.2, 390.0], [1.3, 391.0], [1.4, 394.0], [1.5, 395.0], [1.6, 396.0], [1.7, 397.0], [1.8, 398.0], [1.9, 398.0], [2.0, 399.0], [2.1, 400.0], [2.2, 401.0], [2.3, 402.0], [2.4, 403.0], [2.5, 404.0], [2.6, 406.0], [2.7, 407.0], [2.8, 408.0], [2.9, 409.0], [3.0, 410.0], [3.1, 411.0], [3.2, 412.0], [3.3, 413.0], [3.4, 414.0], [3.5, 415.0], [3.6, 416.0], [3.7, 417.0], [3.8, 418.0], [3.9, 418.0], [4.0, 419.0], [4.1, 420.0], [4.2, 421.0], [4.3, 422.0], [4.4, 423.0], [4.5, 424.0], [4.6, 425.0], [4.7, 426.0], [4.8, 427.0], [4.9, 428.0], [5.0, 429.0], [5.1, 429.0], [5.2, 430.0], [5.3, 431.0], [5.4, 431.0], [5.5, 432.0], [5.6, 433.0], [5.7, 434.0], [5.8, 434.0], [5.9, 435.0], [6.0, 436.0], [6.1, 436.0], [6.2, 437.0], [6.3, 438.0], [6.4, 439.0], [6.5, 441.0], [6.6, 441.0], [6.7, 442.0], [6.8, 443.0], [6.9, 444.0], [7.0, 444.0], [7.1, 445.0], [7.2, 446.0], [7.3, 446.0], [7.4, 447.0], [7.5, 448.0], [7.6, 449.0], [7.7, 449.0], [7.8, 450.0], [7.9, 452.0], [8.0, 452.0], [8.1, 453.0], [8.2, 454.0], [8.3, 455.0], [8.4, 455.0], [8.5, 457.0], [8.6, 457.0], [8.7, 458.0], [8.8, 459.0], [8.9, 460.0], [9.0, 460.0], [9.1, 461.0], [9.2, 462.0], [9.3, 463.0], [9.4, 463.0], [9.5, 465.0], [9.6, 466.0], [9.7, 467.0], [9.8, 467.0], [9.9, 468.0], [10.0, 469.0], [10.1, 470.0], [10.2, 471.0], [10.3, 471.0], [10.4, 472.0], [10.5, 473.0], [10.6, 475.0], [10.7, 476.0], [10.8, 478.0], [10.9, 479.0], [11.0, 479.0], [11.1, 480.0], [11.2, 482.0], [11.3, 482.0], [11.4, 483.0], [11.5, 485.0], [11.6, 486.0], [11.7, 487.0], [11.8, 488.0], [11.9, 490.0], [12.0, 491.0], [12.1, 492.0], [12.2, 494.0], [12.3, 495.0], [12.4, 496.0], [12.5, 498.0], [12.6, 499.0], [12.7, 501.0], [12.8, 502.0], [12.9, 504.0], [13.0, 505.0], [13.1, 506.0], [13.2, 508.0], [13.3, 509.0], [13.4, 511.0], [13.5, 513.0], [13.6, 515.0], [13.7, 516.0], [13.8, 517.0], [13.9, 518.0], [14.0, 520.0], [14.1, 521.0], [14.2, 522.0], [14.3, 524.0], [14.4, 525.0], [14.5, 527.0], [14.6, 529.0], [14.7, 530.0], [14.8, 531.0], [14.9, 532.0], [15.0, 533.0], [15.1, 534.0], [15.2, 536.0], [15.3, 538.0], [15.4, 539.0], [15.5, 541.0], [15.6, 542.0], [15.7, 543.0], [15.8, 545.0], [15.9, 546.0], [16.0, 547.0], [16.1, 548.0], [16.2, 549.0], [16.3, 551.0], [16.4, 552.0], [16.5, 553.0], [16.6, 554.0], [16.7, 555.0], [16.8, 557.0], [16.9, 559.0], [17.0, 559.0], [17.1, 561.0], [17.2, 562.0], [17.3, 562.0], [17.4, 564.0], [17.5, 565.0], [17.6, 566.0], [17.7, 568.0], [17.8, 568.0], [17.9, 570.0], [18.0, 572.0], [18.1, 573.0], [18.2, 574.0], [18.3, 575.0], [18.4, 576.0], [18.5, 578.0], [18.6, 580.0], [18.7, 581.0], [18.8, 583.0], [18.9, 584.0], [19.0, 586.0], [19.1, 587.0], [19.2, 590.0], [19.3, 591.0], [19.4, 591.0], [19.5, 593.0], [19.6, 594.0], [19.7, 595.0], [19.8, 597.0], [19.9, 598.0], [20.0, 599.0], [20.1, 601.0], [20.2, 602.0], [20.3, 603.0], [20.4, 603.0], [20.5, 604.0], [20.6, 606.0], [20.7, 607.0], [20.8, 609.0], [20.9, 609.0], [21.0, 611.0], [21.1, 611.0], [21.2, 612.0], [21.3, 613.0], [21.4, 615.0], [21.5, 615.0], [21.6, 617.0], [21.7, 618.0], [21.8, 619.0], [21.9, 620.0], [22.0, 621.0], [22.1, 622.0], [22.2, 624.0], [22.3, 625.0], [22.4, 625.0], [22.5, 626.0], [22.6, 627.0], [22.7, 629.0], [22.8, 629.0], [22.9, 630.0], [23.0, 632.0], [23.1, 632.0], [23.2, 634.0], [23.3, 635.0], [23.4, 636.0], [23.5, 636.0], [23.6, 637.0], [23.7, 638.0], [23.8, 639.0], [23.9, 639.0], [24.0, 642.0], [24.1, 643.0], [24.2, 644.0], [24.3, 645.0], [24.4, 646.0], [24.5, 648.0], [24.6, 648.0], [24.7, 649.0], [24.8, 650.0], [24.9, 651.0], [25.0, 652.0], [25.1, 653.0], [25.2, 654.0], [25.3, 654.0], [25.4, 655.0], [25.5, 657.0], [25.6, 658.0], [25.7, 658.0], [25.8, 659.0], [25.9, 660.0], [26.0, 661.0], [26.1, 662.0], [26.2, 664.0], [26.3, 665.0], [26.4, 666.0], [26.5, 668.0], [26.6, 669.0], [26.7, 670.0], [26.8, 671.0], [26.9, 673.0], [27.0, 673.0], [27.1, 674.0], [27.2, 677.0], [27.3, 680.0], [27.4, 681.0], [27.5, 683.0], [27.6, 684.0], [27.7, 686.0], [27.8, 688.0], [27.9, 690.0], [28.0, 691.0], [28.1, 692.0], [28.2, 694.0], [28.3, 696.0], [28.4, 697.0], [28.5, 699.0], [28.6, 700.0], [28.7, 701.0], [28.8, 703.0], [28.9, 703.0], [29.0, 705.0], [29.1, 706.0], [29.2, 707.0], [29.3, 710.0], [29.4, 711.0], [29.5, 712.0], [29.6, 713.0], [29.7, 714.0], [29.8, 715.0], [29.9, 716.0], [30.0, 716.0], [30.1, 720.0], [30.2, 721.0], [30.3, 723.0], [30.4, 727.0], [30.5, 728.0], [30.6, 730.0], [30.7, 733.0], [30.8, 735.0], [30.9, 739.0], [31.0, 741.0], [31.1, 744.0], [31.2, 744.0], [31.3, 745.0], [31.4, 747.0], [31.5, 749.0], [31.6, 751.0], [31.7, 753.0], [31.8, 754.0], [31.9, 757.0], [32.0, 758.0], [32.1, 760.0], [32.2, 762.0], [32.3, 764.0], [32.4, 765.0], [32.5, 767.0], [32.6, 768.0], [32.7, 771.0], [32.8, 772.0], [32.9, 773.0], [33.0, 776.0], [33.1, 779.0], [33.2, 780.0], [33.3, 782.0], [33.4, 785.0], [33.5, 787.0], [33.6, 790.0], [33.7, 793.0], [33.8, 796.0], [33.9, 798.0], [34.0, 801.0], [34.1, 804.0], [34.2, 805.0], [34.3, 810.0], [34.4, 813.0], [34.5, 815.0], [34.6, 816.0], [34.7, 817.0], [34.8, 820.0], [34.9, 821.0], [35.0, 822.0], [35.1, 825.0], [35.2, 828.0], [35.3, 830.0], [35.4, 832.0], [35.5, 833.0], [35.6, 835.0], [35.7, 837.0], [35.8, 839.0], [35.9, 840.0], [36.0, 842.0], [36.1, 843.0], [36.2, 843.0], [36.3, 847.0], [36.4, 850.0], [36.5, 851.0], [36.6, 852.0], [36.7, 855.0], [36.8, 857.0], [36.9, 860.0], [37.0, 862.0], [37.1, 863.0], [37.2, 865.0], [37.3, 868.0], [37.4, 870.0], [37.5, 871.0], [37.6, 873.0], [37.7, 877.0], [37.8, 878.0], [37.9, 880.0], [38.0, 882.0], [38.1, 885.0], [38.2, 885.0], [38.3, 886.0], [38.4, 887.0], [38.5, 891.0], [38.6, 892.0], [38.7, 894.0], [38.8, 896.0], [38.9, 899.0], [39.0, 903.0], [39.1, 906.0], [39.2, 907.0], [39.3, 909.0], [39.4, 910.0], [39.5, 912.0], [39.6, 912.0], [39.7, 915.0], [39.8, 918.0], [39.9, 920.0], [40.0, 920.0], [40.1, 921.0], [40.2, 923.0], [40.3, 923.0], [40.4, 926.0], [40.5, 929.0], [40.6, 931.0], [40.7, 933.0], [40.8, 934.0], [40.9, 936.0], [41.0, 937.0], [41.1, 939.0], [41.2, 941.0], [41.3, 942.0], [41.4, 945.0], [41.5, 946.0], [41.6, 948.0], [41.7, 950.0], [41.8, 951.0], [41.9, 952.0], [42.0, 953.0], [42.1, 955.0], [42.2, 956.0], [42.3, 958.0], [42.4, 959.0], [42.5, 962.0], [42.6, 963.0], [42.7, 964.0], [42.8, 967.0], [42.9, 968.0], [43.0, 970.0], [43.1, 972.0], [43.2, 974.0], [43.3, 977.0], [43.4, 979.0], [43.5, 982.0], [43.6, 984.0], [43.7, 988.0], [43.8, 989.0], [43.9, 990.0], [44.0, 992.0], [44.1, 994.0], [44.2, 996.0], [44.3, 999.0], [44.4, 1001.0], [44.5, 1002.0], [44.6, 1004.0], [44.7, 1005.0], [44.8, 1007.0], [44.9, 1008.0], [45.0, 1009.0], [45.1, 1009.0], [45.2, 1010.0], [45.3, 1013.0], [45.4, 1014.0], [45.5, 1016.0], [45.6, 1018.0], [45.7, 1020.0], [45.8, 1021.0], [45.9, 1023.0], [46.0, 1024.0], [46.1, 1026.0], [46.2, 1027.0], [46.3, 1030.0], [46.4, 1032.0], [46.5, 1034.0], [46.6, 1035.0], [46.7, 1037.0], [46.8, 1039.0], [46.9, 1041.0], [47.0, 1044.0], [47.1, 1045.0], [47.2, 1046.0], [47.3, 1048.0], [47.4, 1051.0], [47.5, 1051.0], [47.6, 1054.0], [47.7, 1055.0], [47.8, 1056.0], [47.9, 1057.0], [48.0, 1059.0], [48.1, 1062.0], [48.2, 1064.0], [48.3, 1066.0], [48.4, 1068.0], [48.5, 1070.0], [48.6, 1072.0], [48.7, 1073.0], [48.8, 1075.0], [48.9, 1076.0], [49.0, 1078.0], [49.1, 1081.0], [49.2, 1082.0], [49.3, 1083.0], [49.4, 1084.0], [49.5, 1085.0], [49.6, 1087.0], [49.7, 1088.0], [49.8, 1090.0], [49.9, 1093.0], [50.0, 1094.0], [50.1, 1096.0], [50.2, 1098.0], [50.3, 1099.0], [50.4, 1102.0], [50.5, 1105.0], [50.6, 1107.0], [50.7, 1109.0], [50.8, 1110.0], [50.9, 1111.0], [51.0, 1113.0], [51.1, 1115.0], [51.2, 1115.0], [51.3, 1117.0], [51.4, 1117.0], [51.5, 1117.0], [51.6, 1118.0], [51.7, 1120.0], [51.8, 1123.0], [51.9, 1125.0], [52.0, 1126.0], [52.1, 1128.0], [52.2, 1131.0], [52.3, 1132.0], [52.4, 1134.0], [52.5, 1136.0], [52.6, 1137.0], [52.7, 1138.0], [52.8, 1140.0], [52.9, 1142.0], [53.0, 1143.0], [53.1, 1146.0], [53.2, 1148.0], [53.3, 1150.0], [53.4, 1152.0], [53.5, 1154.0], [53.6, 1155.0], [53.7, 1157.0], [53.8, 1158.0], [53.9, 1158.0], [54.0, 1160.0], [54.1, 1163.0], [54.2, 1166.0], [54.3, 1168.0], [54.4, 1170.0], [54.5, 1172.0], [54.6, 1174.0], [54.7, 1176.0], [54.8, 1180.0], [54.9, 1182.0], [55.0, 1184.0], [55.1, 1186.0], [55.2, 1188.0], [55.3, 1189.0], [55.4, 1192.0], [55.5, 1193.0], [55.6, 1195.0], [55.7, 1197.0], [55.8, 1199.0], [55.9, 1201.0], [56.0, 1203.0], [56.1, 1204.0], [56.2, 1206.0], [56.3, 1207.0], [56.4, 1212.0], [56.5, 1214.0], [56.6, 1216.0], [56.7, 1217.0], [56.8, 1219.0], [56.9, 1221.0], [57.0, 1226.0], [57.1, 1230.0], [57.2, 1231.0], [57.3, 1233.0], [57.4, 1235.0], [57.5, 1239.0], [57.6, 1241.0], [57.7, 1243.0], [57.8, 1245.0], [57.9, 1247.0], [58.0, 1249.0], [58.1, 1252.0], [58.2, 1253.0], [58.3, 1258.0], [58.4, 1261.0], [58.5, 1265.0], [58.6, 1267.0], [58.7, 1268.0], [58.8, 1270.0], [58.9, 1272.0], [59.0, 1274.0], [59.1, 1276.0], [59.2, 1278.0], [59.3, 1279.0], [59.4, 1281.0], [59.5, 1283.0], [59.6, 1286.0], [59.7, 1288.0], [59.8, 1292.0], [59.9, 1294.0], [60.0, 1296.0], [60.1, 1298.0], [60.2, 1299.0], [60.3, 1300.0], [60.4, 1302.0], [60.5, 1303.0], [60.6, 1306.0], [60.7, 1308.0], [60.8, 1310.0], [60.9, 1313.0], [61.0, 1315.0], [61.1, 1318.0], [61.2, 1319.0], [61.3, 1320.0], [61.4, 1324.0], [61.5, 1326.0], [61.6, 1327.0], [61.7, 1330.0], [61.8, 1332.0], [61.9, 1334.0], [62.0, 1336.0], [62.1, 1339.0], [62.2, 1342.0], [62.3, 1344.0], [62.4, 1345.0], [62.5, 1350.0], [62.6, 1351.0], [62.7, 1353.0], [62.8, 1354.0], [62.9, 1356.0], [63.0, 1358.0], [63.1, 1360.0], [63.2, 1362.0], [63.3, 1365.0], [63.4, 1368.0], [63.5, 1369.0], [63.6, 1371.0], [63.7, 1372.0], [63.8, 1374.0], [63.9, 1376.0], [64.0, 1379.0], [64.1, 1380.0], [64.2, 1382.0], [64.3, 1385.0], [64.4, 1386.0], [64.5, 1388.0], [64.6, 1392.0], [64.7, 1395.0], [64.8, 1397.0], [64.9, 1399.0], [65.0, 1401.0], [65.1, 1404.0], [65.2, 1407.0], [65.3, 1409.0], [65.4, 1411.0], [65.5, 1412.0], [65.6, 1415.0], [65.7, 1416.0], [65.8, 1417.0], [65.9, 1420.0], [66.0, 1421.0], [66.1, 1422.0], [66.2, 1424.0], [66.3, 1426.0], [66.4, 1427.0], [66.5, 1430.0], [66.6, 1433.0], [66.7, 1434.0], [66.8, 1435.0], [66.9, 1438.0], [67.0, 1440.0], [67.1, 1441.0], [67.2, 1443.0], [67.3, 1444.0], [67.4, 1446.0], [67.5, 1449.0], [67.6, 1450.0], [67.7, 1451.0], [67.8, 1452.0], [67.9, 1454.0], [68.0, 1455.0], [68.1, 1457.0], [68.2, 1460.0], [68.3, 1461.0], [68.4, 1463.0], [68.5, 1465.0], [68.6, 1467.0], [68.7, 1469.0], [68.8, 1471.0], [68.9, 1473.0], [69.0, 1474.0], [69.1, 1477.0], [69.2, 1479.0], [69.3, 1481.0], [69.4, 1483.0], [69.5, 1486.0], [69.6, 1486.0], [69.7, 1488.0], [69.8, 1489.0], [69.9, 1491.0], [70.0, 1492.0], [70.1, 1493.0], [70.2, 1494.0], [70.3, 1496.0], [70.4, 1499.0], [70.5, 1500.0], [70.6, 1502.0], [70.7, 1503.0], [70.8, 1505.0], [70.9, 1506.0], [71.0, 1509.0], [71.1, 1510.0], [71.2, 1512.0], [71.3, 1514.0], [71.4, 1517.0], [71.5, 1519.0], [71.6, 1520.0], [71.7, 1522.0], [71.8, 1523.0], [71.9, 1524.0], [72.0, 1525.0], [72.1, 1526.0], [72.2, 1528.0], [72.3, 1531.0], [72.4, 1533.0], [72.5, 1534.0], [72.6, 1537.0], [72.7, 1540.0], [72.8, 1543.0], [72.9, 1545.0], [73.0, 1545.0], [73.1, 1547.0], [73.2, 1549.0], [73.3, 1551.0], [73.4, 1553.0], [73.5, 1555.0], [73.6, 1557.0], [73.7, 1559.0], [73.8, 1562.0], [73.9, 1564.0], [74.0, 1565.0], [74.1, 1567.0], [74.2, 1569.0], [74.3, 1571.0], [74.4, 1572.0], [74.5, 1576.0], [74.6, 1576.0], [74.7, 1577.0], [74.8, 1579.0], [74.9, 1583.0], [75.0, 1585.0], [75.1, 1586.0], [75.2, 1589.0], [75.3, 1592.0], [75.4, 1594.0], [75.5, 1595.0], [75.6, 1597.0], [75.7, 1601.0], [75.8, 1603.0], [75.9, 1604.0], [76.0, 1605.0], [76.1, 1608.0], [76.2, 1609.0], [76.3, 1611.0], [76.4, 1614.0], [76.5, 1616.0], [76.6, 1618.0], [76.7, 1620.0], [76.8, 1622.0], [76.9, 1624.0], [77.0, 1625.0], [77.1, 1628.0], [77.2, 1630.0], [77.3, 1632.0], [77.4, 1634.0], [77.5, 1636.0], [77.6, 1639.0], [77.7, 1641.0], [77.8, 1643.0], [77.9, 1646.0], [78.0, 1648.0], [78.1, 1650.0], [78.2, 1652.0], [78.3, 1655.0], [78.4, 1657.0], [78.5, 1659.0], [78.6, 1662.0], [78.7, 1663.0], [78.8, 1670.0], [78.9, 1673.0], [79.0, 1677.0], [79.1, 1678.0], [79.2, 1680.0], [79.3, 1683.0], [79.4, 1685.0], [79.5, 1688.0], [79.6, 1691.0], [79.7, 1693.0], [79.8, 1696.0], [79.9, 1698.0], [80.0, 1700.0], [80.1, 1701.0], [80.2, 1703.0], [80.3, 1704.0], [80.4, 1706.0], [80.5, 1707.0], [80.6, 1710.0], [80.7, 1714.0], [80.8, 1715.0], [80.9, 1718.0], [81.0, 1721.0], [81.1, 1726.0], [81.2, 1728.0], [81.3, 1730.0], [81.4, 1732.0], [81.5, 1733.0], [81.6, 1736.0], [81.7, 1738.0], [81.8, 1744.0], [81.9, 1746.0], [82.0, 1749.0], [82.1, 1754.0], [82.2, 1759.0], [82.3, 1760.0], [82.4, 1764.0], [82.5, 1765.0], [82.6, 1767.0], [82.7, 1772.0], [82.8, 1775.0], [82.9, 1780.0], [83.0, 1783.0], [83.1, 1785.0], [83.2, 1788.0], [83.3, 1791.0], [83.4, 1792.0], [83.5, 1795.0], [83.6, 1797.0], [83.7, 1802.0], [83.8, 1805.0], [83.9, 1808.0], [84.0, 1810.0], [84.1, 1812.0], [84.2, 1814.0], [84.3, 1818.0], [84.4, 1819.0], [84.5, 1823.0], [84.6, 1827.0], [84.7, 1830.0], [84.8, 1835.0], [84.9, 1840.0], [85.0, 1843.0], [85.1, 1847.0], [85.2, 1850.0], [85.3, 1855.0], [85.4, 1859.0], [85.5, 1860.0], [85.6, 1864.0], [85.7, 1869.0], [85.8, 1873.0], [85.9, 1877.0], [86.0, 1881.0], [86.1, 1884.0], [86.2, 1889.0], [86.3, 1890.0], [86.4, 1896.0], [86.5, 1902.0], [86.6, 1905.0], [86.7, 1910.0], [86.8, 1917.0], [86.9, 1918.0], [87.0, 1927.0], [87.1, 1935.0], [87.2, 1941.0], [87.3, 1943.0], [87.4, 1946.0], [87.5, 1952.0], [87.6, 1957.0], [87.7, 1963.0], [87.8, 1967.0], [87.9, 1972.0], [88.0, 1977.0], [88.1, 1982.0], [88.2, 1987.0], [88.3, 1991.0], [88.4, 1999.0], [88.5, 2008.0], [88.6, 2011.0], [88.7, 2015.0], [88.8, 2023.0], [88.9, 2026.0], [89.0, 2032.0], [89.1, 2038.0], [89.2, 2043.0], [89.3, 2052.0], [89.4, 2059.0], [89.5, 2068.0], [89.6, 2072.0], [89.7, 2075.0], [89.8, 2081.0], [89.9, 2089.0], [90.0, 2096.0], [90.1, 2102.0], [90.2, 2111.0], [90.3, 2116.0], [90.4, 2118.0], [90.5, 2122.0], [90.6, 2133.0], [90.7, 2141.0], [90.8, 2146.0], [90.9, 2151.0], [91.0, 2153.0], [91.1, 2163.0], [91.2, 2170.0], [91.3, 2179.0], [91.4, 2187.0], [91.5, 2195.0], [91.6, 2206.0], [91.7, 2220.0], [91.8, 2228.0], [91.9, 2240.0], [92.0, 2246.0], [92.1, 2267.0], [92.2, 2276.0], [92.3, 2285.0], [92.4, 2301.0], [92.5, 2309.0], [92.6, 2316.0], [92.7, 2322.0], [92.8, 2330.0], [92.9, 2335.0], [93.0, 2340.0], [93.1, 2350.0], [93.2, 2360.0], [93.3, 2369.0], [93.4, 2372.0], [93.5, 2378.0], [93.6, 2384.0], [93.7, 2395.0], [93.8, 2402.0], [93.9, 2409.0], [94.0, 2411.0], [94.1, 2417.0], [94.2, 2432.0], [94.3, 2448.0], [94.4, 2456.0], [94.5, 2465.0], [94.6, 2472.0], [94.7, 2477.0], [94.8, 2490.0], [94.9, 2505.0], [95.0, 2512.0], [95.1, 2517.0], [95.2, 2531.0], [95.3, 2543.0], [95.4, 2560.0], [95.5, 2574.0], [95.6, 2584.0], [95.7, 2591.0], [95.8, 2603.0], [95.9, 2634.0], [96.0, 2645.0], [96.1, 2653.0], [96.2, 2669.0], [96.3, 2680.0], [96.4, 2715.0], [96.5, 2729.0], [96.6, 2742.0], [96.7, 2753.0], [96.8, 2770.0], [96.9, 2788.0], [97.0, 2803.0], [97.1, 2812.0], [97.2, 2821.0], [97.3, 2831.0], [97.4, 2856.0], [97.5, 2872.0], [97.6, 2878.0], [97.7, 2885.0], [97.8, 2913.0], [97.9, 2949.0], [98.0, 2969.0], [98.1, 3030.0], [98.2, 3065.0], [98.3, 3113.0], [98.4, 3153.0], [98.5, 3220.0], [98.6, 3258.0], [98.7, 3301.0], [98.8, 3319.0], [98.9, 3408.0], [99.0, 3450.0], [99.1, 3564.0], [99.2, 3687.0], [99.3, 3768.0], [99.4, 3827.0], [99.5, 3887.0], [99.6, 4754.0], [99.7, 4949.0], [99.8, 5464.0], [99.9, 6198.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 549.0, "series": [{"data": [[600.0, 443.0], [700.0, 281.0], [800.0, 258.0], [900.0, 280.0], [1000.0, 313.0], [1100.0, 285.0], [1200.0, 228.0], [1300.0, 243.0], [1400.0, 288.0], [1500.0, 270.0], [1600.0, 223.0], [1700.0, 192.0], [1800.0, 143.0], [1900.0, 104.0], [2000.0, 85.0], [2100.0, 77.0], [2300.0, 72.0], [2200.0, 44.0], [2400.0, 56.0], [2500.0, 49.0], [2600.0, 29.0], [2700.0, 32.0], [2800.0, 40.0], [2900.0, 18.0], [3000.0, 8.0], [3100.0, 12.0], [3200.0, 11.0], [3300.0, 10.0], [3400.0, 7.0], [3500.0, 6.0], [3600.0, 5.0], [3700.0, 7.0], [3800.0, 9.0], [4100.0, 2.0], [4300.0, 1.0], [4800.0, 3.0], [4700.0, 1.0], [5000.0, 1.0], [4900.0, 2.0], [5200.0, 2.0], [5400.0, 2.0], [5600.0, 1.0], [5900.0, 1.0], [6100.0, 2.0], [6000.0, 1.0], [6200.0, 1.0], [6400.0, 1.0], [6500.0, 1.0], [8900.0, 1.0], [9700.0, 1.0], [200.0, 7.0], [300.0, 99.0], [400.0, 549.0], [500.0, 383.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 659.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3002.0, "series": [{"data": [[0.0, 659.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3002.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1529.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.654450261780104, "minX": 1.6023768E12, "maxY": 12.0, "series": [{"data": [[1.60237686E12, 12.0], [1.60237716E12, 12.0], [1.60237734E12, 11.654450261780104], [1.60237698E12, 12.0], [1.60237728E12, 12.0], [1.6023768E12, 12.0], [1.6023771E12, 12.0], [1.60237692E12, 12.0], [1.60237722E12, 12.0], [1.60237704E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237734E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 604.0, "minX": 1.0, "maxY": 3065.0, "series": [{"data": [[8.0, 1376.0], [4.0, 1075.0], [2.0, 3065.0], [1.0, 2913.0], [9.0, 1479.0], [10.0, 1028.0], [5.0, 654.0], [11.0, 1827.0], [12.0, 1221.4085730836034], [6.0, 604.0], [3.0, 1127.0], [7.0, 870.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 1221.9061657032719]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1374.2666666666667, "minX": 1.6023768E12, "maxY": 3173137.1166666667, "series": [{"data": [[1.60237686E12, 2353256.5], [1.60237716E12, 2193924.0], [1.60237734E12, 892242.0666666667], [1.60237698E12, 3050716.95], [1.60237728E12, 2749681.0166666666], [1.6023768E12, 1264909.1166666667], [1.6023771E12, 2618550.0166666666], [1.60237692E12, 2929235.5833333335], [1.60237722E12, 3173137.1166666667], [1.60237704E12, 2747184.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237686E12, 3988.1], [1.60237716E12, 4419.05], [1.60237734E12, 1433.6333333333334], [1.60237698E12, 4530.316666666667], [1.60237728E12, 4804.516666666666], [1.6023768E12, 1374.2666666666667], [1.6023771E12, 3809.233333333333], [1.60237692E12, 5040.983333333334], [1.60237722E12, 4756.483333333334], [1.60237704E12, 4420.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237734E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1063.3249630723788, "minX": 1.6023768E12, "maxY": 1598.5860215053767, "series": [{"data": [[1.60237686E12, 1294.55215827338], [1.60237716E12, 1187.1614497528842], [1.60237734E12, 1511.4397905759156], [1.60237698E12, 1211.9144295302017], [1.60237728E12, 1137.2432859399678], [1.6023768E12, 1598.5860215053767], [1.6023771E12, 1355.504708097927], [1.60237692E12, 1063.3249630723788], [1.60237722E12, 1146.5518341307804], [1.60237704E12, 1219.4283276450512]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237734E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1061.217134416543, "minX": 1.6023768E12, "maxY": 1595.4032258064522, "series": [{"data": [[1.60237686E12, 1292.6097122302156], [1.60237716E12, 1185.59802306425], [1.60237734E12, 1509.633507853404], [1.60237698E12, 1209.4748322147655], [1.60237728E12, 1135.4328593996836], [1.6023768E12, 1595.4032258064522], [1.6023771E12, 1353.1431261770242], [1.60237692E12, 1061.217134416543], [1.60237722E12, 1144.3987240829324], [1.60237704E12, 1217.2030716723548]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237734E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6023768E12, "maxY": 0.8225806451612909, "series": [{"data": [[1.60237686E12, 0.04136690647482014], [1.60237716E12, 0.014827018121911043], [1.60237734E12, 0.0], [1.60237698E12, 0.030201342281879193], [1.60237728E12, 0.01895734597156399], [1.6023768E12, 0.8225806451612909], [1.6023771E12, 0.030131826741996284], [1.60237692E12, 0.017725258493353033], [1.60237722E12, 0.022328548644338128], [1.60237704E12, 0.0221843003412969]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237734E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 218.0, "minX": 1.6023768E12, "maxY": 9789.0, "series": [{"data": [[1.60237686E12, 8911.0], [1.60237716E12, 4108.0], [1.60237734E12, 3887.0], [1.60237698E12, 3543.0], [1.60237728E12, 3507.0], [1.6023768E12, 5916.0], [1.6023771E12, 9789.0], [1.60237692E12, 5203.0], [1.60237722E12, 3889.0], [1.60237704E12, 6198.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237686E12, 399.01299986720085], [1.60237716E12, 344.46399463653563], [1.60237734E12, 640.3999977111816], [1.60237698E12, 373.0], [1.60237728E12, 380.5299992442131], [1.6023768E12, 416.4639996433258], [1.6023771E12, 429.72799923896787], [1.60237692E12, 396.2039996767044], [1.60237722E12, 389.9559995508194], [1.60237704E12, 377.13199944019317]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237686E12, 399.51430005311965], [1.60237716E12, 364.59520179748534], [1.60237734E12, 649.0400009155273], [1.60237698E12, 373.0], [1.60237728E12, 382.0], [1.6023768E12, 417.81040014266966], [1.6023771E12, 431.8004001522064], [1.60237692E12, 397.42440012931826], [1.60237722E12, 391.0], [1.60237704E12, 379.2452002239227]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237686E12, 399.29149993360045], [1.60237716E12, 355.7119973182678], [1.60237734E12, 645.1999988555908], [1.60237698E12, 373.0], [1.60237728E12, 382.0], [1.6023768E12, 417.2119998216629], [1.6023771E12, 431.161999809742], [1.60237692E12, 396.8819998383522], [1.60237722E12, 390.8979997754097], [1.60237704E12, 378.30599972009657]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237686E12, 218.0], [1.60237716E12, 234.0], [1.60237734E12, 604.0], [1.60237698E12, 226.0], [1.60237728E12, 367.0], [1.6023768E12, 411.0], [1.6023771E12, 398.0], [1.60237692E12, 331.0], [1.60237722E12, 362.0], [1.60237704E12, 368.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237686E12, 1136.0], [1.60237716E12, 1007.0], [1.60237734E12, 1386.0], [1.60237698E12, 1113.5], [1.60237728E12, 1013.0], [1.6023768E12, 1380.5], [1.6023771E12, 1188.0], [1.60237692E12, 815.0], [1.60237722E12, 906.0], [1.60237704E12, 1116.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237734E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 434.0, "minX": 2.0, "maxY": 2685.0, "series": [{"data": [[2.0, 2685.0], [3.0, 1939.0], [4.0, 1549.5], [5.0, 1514.0], [6.0, 1512.0], [7.0, 1455.5], [8.0, 1371.5], [9.0, 1299.0], [10.0, 1128.0], [11.0, 1116.5], [12.0, 1015.0], [13.0, 868.0], [14.0, 822.0], [15.0, 685.0], [16.0, 587.5], [17.0, 532.5], [18.0, 627.5], [19.0, 508.5], [20.0, 464.0], [21.0, 489.0], [22.0, 487.0], [23.0, 454.0], [24.0, 441.0], [25.0, 434.0], [26.0, 443.5], [27.0, 434.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 434.0, "minX": 2.0, "maxY": 2683.0, "series": [{"data": [[2.0, 2683.0], [3.0, 1934.0], [4.0, 1547.0], [5.0, 1512.0], [6.0, 1509.5], [7.0, 1453.0], [8.0, 1369.0], [9.0, 1299.0], [10.0, 1125.0], [11.0, 1115.0], [12.0, 1013.5], [13.0, 866.0], [14.0, 820.5], [15.0, 685.0], [16.0, 587.5], [17.0, 532.5], [18.0, 626.5], [19.0, 507.5], [20.0, 463.5], [21.0, 489.0], [22.0, 487.0], [23.0, 453.5], [24.0, 440.5], [25.0, 434.0], [26.0, 443.5], [27.0, 434.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.9833333333333334, "minX": 1.6023768E12, "maxY": 11.283333333333333, "series": [{"data": [[1.60237686E12, 9.266666666666667], [1.60237716E12, 10.116666666666667], [1.60237734E12, 2.9833333333333334], [1.60237698E12, 9.933333333333334], [1.60237728E12, 10.55], [1.6023768E12, 3.3], [1.6023771E12, 8.85], [1.60237692E12, 11.283333333333333], [1.60237722E12, 10.45], [1.60237704E12, 9.766666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237734E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.1, "minX": 1.6023768E12, "maxY": 11.283333333333333, "series": [{"data": [[1.60237686E12, 9.266666666666667], [1.60237716E12, 10.116666666666667], [1.60237734E12, 3.183333333333333], [1.60237698E12, 9.933333333333334], [1.60237728E12, 10.55], [1.6023768E12, 3.1], [1.6023771E12, 8.85], [1.60237692E12, 11.283333333333333], [1.60237722E12, 10.45], [1.60237704E12, 9.766666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237734E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.1, "minX": 1.6023768E12, "maxY": 11.283333333333333, "series": [{"data": [[1.60237686E12, 9.266666666666667], [1.60237716E12, 10.116666666666667], [1.60237734E12, 3.183333333333333], [1.60237698E12, 9.933333333333334], [1.60237728E12, 10.55], [1.6023768E12, 3.1], [1.6023771E12, 8.85], [1.60237692E12, 11.283333333333333], [1.60237722E12, 10.45], [1.60237704E12, 9.766666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237734E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.1, "minX": 1.6023768E12, "maxY": 11.283333333333333, "series": [{"data": [[1.60237686E12, 9.266666666666667], [1.60237716E12, 10.116666666666667], [1.60237734E12, 3.183333333333333], [1.60237698E12, 9.933333333333334], [1.60237728E12, 10.55], [1.6023768E12, 3.1], [1.6023771E12, 8.85], [1.60237692E12, 11.283333333333333], [1.60237722E12, 10.45], [1.60237704E12, 9.766666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237734E12, "title": "Total Transactions Per Second"}},
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

