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
        data: {"result": {"minY": 237.0, "minX": 0.0, "maxY": 9745.0, "series": [{"data": [[0.0, 237.0], [0.1, 353.0], [0.2, 377.0], [0.3, 386.0], [0.4, 388.0], [0.5, 390.0], [0.6, 392.0], [0.7, 394.0], [0.8, 394.0], [0.9, 395.0], [1.0, 397.0], [1.1, 398.0], [1.2, 399.0], [1.3, 400.0], [1.4, 402.0], [1.5, 403.0], [1.6, 405.0], [1.7, 405.0], [1.8, 407.0], [1.9, 408.0], [2.0, 408.0], [2.1, 409.0], [2.2, 410.0], [2.3, 411.0], [2.4, 412.0], [2.5, 414.0], [2.6, 414.0], [2.7, 417.0], [2.8, 418.0], [2.9, 418.0], [3.0, 420.0], [3.1, 421.0], [3.2, 422.0], [3.3, 422.0], [3.4, 424.0], [3.5, 424.0], [3.6, 425.0], [3.7, 425.0], [3.8, 426.0], [3.9, 427.0], [4.0, 428.0], [4.1, 429.0], [4.2, 430.0], [4.3, 431.0], [4.4, 431.0], [4.5, 432.0], [4.6, 432.0], [4.7, 433.0], [4.8, 433.0], [4.9, 434.0], [5.0, 435.0], [5.1, 436.0], [5.2, 436.0], [5.3, 438.0], [5.4, 439.0], [5.5, 439.0], [5.6, 441.0], [5.7, 441.0], [5.8, 442.0], [5.9, 442.0], [6.0, 443.0], [6.1, 443.0], [6.2, 444.0], [6.3, 444.0], [6.4, 445.0], [6.5, 445.0], [6.6, 446.0], [6.7, 447.0], [6.8, 447.0], [6.9, 448.0], [7.0, 449.0], [7.1, 450.0], [7.2, 450.0], [7.3, 451.0], [7.4, 451.0], [7.5, 452.0], [7.6, 453.0], [7.7, 453.0], [7.8, 454.0], [7.9, 454.0], [8.0, 455.0], [8.1, 456.0], [8.2, 456.0], [8.3, 457.0], [8.4, 458.0], [8.5, 459.0], [8.6, 460.0], [8.7, 460.0], [8.8, 461.0], [8.9, 463.0], [9.0, 464.0], [9.1, 465.0], [9.2, 465.0], [9.3, 466.0], [9.4, 467.0], [9.5, 468.0], [9.6, 470.0], [9.7, 471.0], [9.8, 472.0], [9.9, 474.0], [10.0, 475.0], [10.1, 476.0], [10.2, 478.0], [10.3, 478.0], [10.4, 479.0], [10.5, 479.0], [10.6, 481.0], [10.7, 482.0], [10.8, 482.0], [10.9, 483.0], [11.0, 484.0], [11.1, 485.0], [11.2, 486.0], [11.3, 487.0], [11.4, 488.0], [11.5, 489.0], [11.6, 490.0], [11.7, 490.0], [11.8, 491.0], [11.9, 493.0], [12.0, 494.0], [12.1, 496.0], [12.2, 498.0], [12.3, 499.0], [12.4, 500.0], [12.5, 501.0], [12.6, 503.0], [12.7, 506.0], [12.8, 507.0], [12.9, 508.0], [13.0, 509.0], [13.1, 511.0], [13.2, 512.0], [13.3, 513.0], [13.4, 516.0], [13.5, 517.0], [13.6, 520.0], [13.7, 522.0], [13.8, 524.0], [13.9, 526.0], [14.0, 527.0], [14.1, 528.0], [14.2, 530.0], [14.3, 531.0], [14.4, 532.0], [14.5, 533.0], [14.6, 536.0], [14.7, 537.0], [14.8, 538.0], [14.9, 540.0], [15.0, 541.0], [15.1, 542.0], [15.2, 543.0], [15.3, 545.0], [15.4, 546.0], [15.5, 547.0], [15.6, 548.0], [15.7, 549.0], [15.8, 551.0], [15.9, 552.0], [16.0, 553.0], [16.1, 554.0], [16.2, 555.0], [16.3, 556.0], [16.4, 558.0], [16.5, 559.0], [16.6, 560.0], [16.7, 561.0], [16.8, 562.0], [16.9, 563.0], [17.0, 564.0], [17.1, 565.0], [17.2, 566.0], [17.3, 567.0], [17.4, 568.0], [17.5, 569.0], [17.6, 571.0], [17.7, 572.0], [17.8, 573.0], [17.9, 574.0], [18.0, 575.0], [18.1, 576.0], [18.2, 578.0], [18.3, 580.0], [18.4, 582.0], [18.5, 584.0], [18.6, 585.0], [18.7, 586.0], [18.8, 588.0], [18.9, 589.0], [19.0, 590.0], [19.1, 591.0], [19.2, 591.0], [19.3, 592.0], [19.4, 593.0], [19.5, 594.0], [19.6, 596.0], [19.7, 597.0], [19.8, 598.0], [19.9, 599.0], [20.0, 602.0], [20.1, 603.0], [20.2, 604.0], [20.3, 605.0], [20.4, 607.0], [20.5, 610.0], [20.6, 611.0], [20.7, 613.0], [20.8, 613.0], [20.9, 614.0], [21.0, 615.0], [21.1, 616.0], [21.2, 617.0], [21.3, 618.0], [21.4, 620.0], [21.5, 621.0], [21.6, 622.0], [21.7, 625.0], [21.8, 626.0], [21.9, 628.0], [22.0, 629.0], [22.1, 630.0], [22.2, 632.0], [22.3, 633.0], [22.4, 634.0], [22.5, 635.0], [22.6, 636.0], [22.7, 637.0], [22.8, 638.0], [22.9, 639.0], [23.0, 640.0], [23.1, 641.0], [23.2, 642.0], [23.3, 643.0], [23.4, 644.0], [23.5, 644.0], [23.6, 645.0], [23.7, 646.0], [23.8, 647.0], [23.9, 648.0], [24.0, 650.0], [24.1, 650.0], [24.2, 651.0], [24.3, 653.0], [24.4, 655.0], [24.5, 656.0], [24.6, 656.0], [24.7, 657.0], [24.8, 658.0], [24.9, 660.0], [25.0, 662.0], [25.1, 664.0], [25.2, 666.0], [25.3, 667.0], [25.4, 668.0], [25.5, 670.0], [25.6, 671.0], [25.7, 673.0], [25.8, 674.0], [25.9, 675.0], [26.0, 676.0], [26.1, 677.0], [26.2, 679.0], [26.3, 680.0], [26.4, 681.0], [26.5, 682.0], [26.6, 684.0], [26.7, 685.0], [26.8, 687.0], [26.9, 690.0], [27.0, 692.0], [27.1, 692.0], [27.2, 695.0], [27.3, 696.0], [27.4, 698.0], [27.5, 699.0], [27.6, 701.0], [27.7, 702.0], [27.8, 703.0], [27.9, 705.0], [28.0, 705.0], [28.1, 707.0], [28.2, 710.0], [28.3, 711.0], [28.4, 711.0], [28.5, 713.0], [28.6, 714.0], [28.7, 716.0], [28.8, 719.0], [28.9, 722.0], [29.0, 723.0], [29.1, 724.0], [29.2, 725.0], [29.3, 727.0], [29.4, 728.0], [29.5, 728.0], [29.6, 731.0], [29.7, 732.0], [29.8, 735.0], [29.9, 736.0], [30.0, 739.0], [30.1, 741.0], [30.2, 742.0], [30.3, 743.0], [30.4, 745.0], [30.5, 746.0], [30.6, 748.0], [30.7, 750.0], [30.8, 751.0], [30.9, 752.0], [31.0, 754.0], [31.1, 757.0], [31.2, 759.0], [31.3, 760.0], [31.4, 762.0], [31.5, 765.0], [31.6, 766.0], [31.7, 767.0], [31.8, 769.0], [31.9, 769.0], [32.0, 774.0], [32.1, 775.0], [32.2, 778.0], [32.3, 782.0], [32.4, 785.0], [32.5, 788.0], [32.6, 790.0], [32.7, 792.0], [32.8, 795.0], [32.9, 797.0], [33.0, 798.0], [33.1, 799.0], [33.2, 801.0], [33.3, 802.0], [33.4, 804.0], [33.5, 806.0], [33.6, 808.0], [33.7, 811.0], [33.8, 815.0], [33.9, 816.0], [34.0, 818.0], [34.1, 819.0], [34.2, 823.0], [34.3, 825.0], [34.4, 828.0], [34.5, 828.0], [34.6, 831.0], [34.7, 833.0], [34.8, 835.0], [34.9, 837.0], [35.0, 839.0], [35.1, 840.0], [35.2, 842.0], [35.3, 845.0], [35.4, 846.0], [35.5, 847.0], [35.6, 849.0], [35.7, 850.0], [35.8, 853.0], [35.9, 855.0], [36.0, 858.0], [36.1, 861.0], [36.2, 862.0], [36.3, 863.0], [36.4, 865.0], [36.5, 868.0], [36.6, 870.0], [36.7, 873.0], [36.8, 876.0], [36.9, 879.0], [37.0, 881.0], [37.1, 882.0], [37.2, 883.0], [37.3, 884.0], [37.4, 887.0], [37.5, 888.0], [37.6, 889.0], [37.7, 892.0], [37.8, 893.0], [37.9, 895.0], [38.0, 897.0], [38.1, 899.0], [38.2, 902.0], [38.3, 903.0], [38.4, 905.0], [38.5, 908.0], [38.6, 909.0], [38.7, 912.0], [38.8, 914.0], [38.9, 916.0], [39.0, 919.0], [39.1, 920.0], [39.2, 922.0], [39.3, 926.0], [39.4, 927.0], [39.5, 928.0], [39.6, 930.0], [39.7, 931.0], [39.8, 933.0], [39.9, 936.0], [40.0, 939.0], [40.1, 941.0], [40.2, 942.0], [40.3, 944.0], [40.4, 945.0], [40.5, 948.0], [40.6, 952.0], [40.7, 956.0], [40.8, 957.0], [40.9, 959.0], [41.0, 963.0], [41.1, 964.0], [41.2, 967.0], [41.3, 970.0], [41.4, 973.0], [41.5, 975.0], [41.6, 977.0], [41.7, 978.0], [41.8, 982.0], [41.9, 985.0], [42.0, 988.0], [42.1, 989.0], [42.2, 990.0], [42.3, 992.0], [42.4, 996.0], [42.5, 998.0], [42.6, 1000.0], [42.7, 1002.0], [42.8, 1004.0], [42.9, 1006.0], [43.0, 1009.0], [43.1, 1012.0], [43.2, 1015.0], [43.3, 1017.0], [43.4, 1018.0], [43.5, 1019.0], [43.6, 1021.0], [43.7, 1024.0], [43.8, 1026.0], [43.9, 1026.0], [44.0, 1029.0], [44.1, 1031.0], [44.2, 1033.0], [44.3, 1036.0], [44.4, 1037.0], [44.5, 1037.0], [44.6, 1039.0], [44.7, 1042.0], [44.8, 1043.0], [44.9, 1044.0], [45.0, 1046.0], [45.1, 1047.0], [45.2, 1049.0], [45.3, 1051.0], [45.4, 1053.0], [45.5, 1054.0], [45.6, 1057.0], [45.7, 1058.0], [45.8, 1062.0], [45.9, 1063.0], [46.0, 1065.0], [46.1, 1066.0], [46.2, 1068.0], [46.3, 1070.0], [46.4, 1074.0], [46.5, 1076.0], [46.6, 1077.0], [46.7, 1081.0], [46.8, 1082.0], [46.9, 1085.0], [47.0, 1086.0], [47.1, 1087.0], [47.2, 1089.0], [47.3, 1090.0], [47.4, 1093.0], [47.5, 1094.0], [47.6, 1095.0], [47.7, 1096.0], [47.8, 1097.0], [47.9, 1099.0], [48.0, 1102.0], [48.1, 1104.0], [48.2, 1105.0], [48.3, 1107.0], [48.4, 1109.0], [48.5, 1111.0], [48.6, 1112.0], [48.7, 1114.0], [48.8, 1119.0], [48.9, 1121.0], [49.0, 1123.0], [49.1, 1124.0], [49.2, 1126.0], [49.3, 1128.0], [49.4, 1129.0], [49.5, 1130.0], [49.6, 1131.0], [49.7, 1135.0], [49.8, 1137.0], [49.9, 1140.0], [50.0, 1140.0], [50.1, 1144.0], [50.2, 1145.0], [50.3, 1148.0], [50.4, 1150.0], [50.5, 1153.0], [50.6, 1156.0], [50.7, 1157.0], [50.8, 1160.0], [50.9, 1162.0], [51.0, 1164.0], [51.1, 1169.0], [51.2, 1170.0], [51.3, 1171.0], [51.4, 1176.0], [51.5, 1178.0], [51.6, 1180.0], [51.7, 1182.0], [51.8, 1183.0], [51.9, 1185.0], [52.0, 1186.0], [52.1, 1188.0], [52.2, 1191.0], [52.3, 1195.0], [52.4, 1197.0], [52.5, 1200.0], [52.6, 1200.0], [52.7, 1205.0], [52.8, 1206.0], [52.9, 1208.0], [53.0, 1210.0], [53.1, 1211.0], [53.2, 1213.0], [53.3, 1216.0], [53.4, 1219.0], [53.5, 1222.0], [53.6, 1224.0], [53.7, 1225.0], [53.8, 1226.0], [53.9, 1227.0], [54.0, 1231.0], [54.1, 1232.0], [54.2, 1236.0], [54.3, 1237.0], [54.4, 1238.0], [54.5, 1239.0], [54.6, 1240.0], [54.7, 1243.0], [54.8, 1244.0], [54.9, 1245.0], [55.0, 1245.0], [55.1, 1247.0], [55.2, 1249.0], [55.3, 1251.0], [55.4, 1253.0], [55.5, 1254.0], [55.6, 1256.0], [55.7, 1258.0], [55.8, 1262.0], [55.9, 1263.0], [56.0, 1266.0], [56.1, 1266.0], [56.2, 1267.0], [56.3, 1270.0], [56.4, 1272.0], [56.5, 1273.0], [56.6, 1275.0], [56.7, 1279.0], [56.8, 1285.0], [56.9, 1287.0], [57.0, 1289.0], [57.1, 1290.0], [57.2, 1292.0], [57.3, 1295.0], [57.4, 1297.0], [57.5, 1299.0], [57.6, 1301.0], [57.7, 1302.0], [57.8, 1304.0], [57.9, 1307.0], [58.0, 1308.0], [58.1, 1310.0], [58.2, 1313.0], [58.3, 1315.0], [58.4, 1318.0], [58.5, 1320.0], [58.6, 1321.0], [58.7, 1324.0], [58.8, 1325.0], [58.9, 1327.0], [59.0, 1329.0], [59.1, 1332.0], [59.2, 1333.0], [59.3, 1335.0], [59.4, 1336.0], [59.5, 1339.0], [59.6, 1341.0], [59.7, 1344.0], [59.8, 1345.0], [59.9, 1347.0], [60.0, 1351.0], [60.1, 1352.0], [60.2, 1355.0], [60.3, 1357.0], [60.4, 1359.0], [60.5, 1360.0], [60.6, 1361.0], [60.7, 1364.0], [60.8, 1365.0], [60.9, 1367.0], [61.0, 1368.0], [61.1, 1370.0], [61.2, 1373.0], [61.3, 1376.0], [61.4, 1378.0], [61.5, 1380.0], [61.6, 1383.0], [61.7, 1385.0], [61.8, 1386.0], [61.9, 1389.0], [62.0, 1391.0], [62.1, 1392.0], [62.2, 1393.0], [62.3, 1395.0], [62.4, 1397.0], [62.5, 1399.0], [62.6, 1401.0], [62.7, 1403.0], [62.8, 1405.0], [62.9, 1406.0], [63.0, 1409.0], [63.1, 1411.0], [63.2, 1412.0], [63.3, 1415.0], [63.4, 1416.0], [63.5, 1419.0], [63.6, 1420.0], [63.7, 1422.0], [63.8, 1425.0], [63.9, 1427.0], [64.0, 1428.0], [64.1, 1429.0], [64.2, 1431.0], [64.3, 1434.0], [64.4, 1436.0], [64.5, 1438.0], [64.6, 1440.0], [64.7, 1441.0], [64.8, 1443.0], [64.9, 1445.0], [65.0, 1446.0], [65.1, 1449.0], [65.2, 1452.0], [65.3, 1453.0], [65.4, 1455.0], [65.5, 1458.0], [65.6, 1460.0], [65.7, 1463.0], [65.8, 1464.0], [65.9, 1466.0], [66.0, 1468.0], [66.1, 1469.0], [66.2, 1471.0], [66.3, 1473.0], [66.4, 1476.0], [66.5, 1479.0], [66.6, 1482.0], [66.7, 1483.0], [66.8, 1484.0], [66.9, 1488.0], [67.0, 1491.0], [67.1, 1494.0], [67.2, 1496.0], [67.3, 1496.0], [67.4, 1498.0], [67.5, 1499.0], [67.6, 1500.0], [67.7, 1502.0], [67.8, 1503.0], [67.9, 1505.0], [68.0, 1507.0], [68.1, 1509.0], [68.2, 1510.0], [68.3, 1512.0], [68.4, 1516.0], [68.5, 1518.0], [68.6, 1522.0], [68.7, 1522.0], [68.8, 1525.0], [68.9, 1527.0], [69.0, 1529.0], [69.1, 1531.0], [69.2, 1534.0], [69.3, 1535.0], [69.4, 1538.0], [69.5, 1540.0], [69.6, 1540.0], [69.7, 1541.0], [69.8, 1543.0], [69.9, 1545.0], [70.0, 1547.0], [70.1, 1548.0], [70.2, 1550.0], [70.3, 1551.0], [70.4, 1554.0], [70.5, 1555.0], [70.6, 1558.0], [70.7, 1560.0], [70.8, 1562.0], [70.9, 1564.0], [71.0, 1565.0], [71.1, 1568.0], [71.2, 1569.0], [71.3, 1573.0], [71.4, 1574.0], [71.5, 1576.0], [71.6, 1577.0], [71.7, 1580.0], [71.8, 1580.0], [71.9, 1582.0], [72.0, 1586.0], [72.1, 1588.0], [72.2, 1590.0], [72.3, 1592.0], [72.4, 1594.0], [72.5, 1595.0], [72.6, 1596.0], [72.7, 1599.0], [72.8, 1600.0], [72.9, 1601.0], [73.0, 1602.0], [73.1, 1604.0], [73.2, 1605.0], [73.3, 1607.0], [73.4, 1609.0], [73.5, 1612.0], [73.6, 1615.0], [73.7, 1616.0], [73.8, 1618.0], [73.9, 1620.0], [74.0, 1621.0], [74.1, 1625.0], [74.2, 1626.0], [74.3, 1629.0], [74.4, 1631.0], [74.5, 1636.0], [74.6, 1639.0], [74.7, 1642.0], [74.8, 1645.0], [74.9, 1648.0], [75.0, 1650.0], [75.1, 1652.0], [75.2, 1655.0], [75.3, 1658.0], [75.4, 1664.0], [75.5, 1667.0], [75.6, 1671.0], [75.7, 1674.0], [75.8, 1676.0], [75.9, 1678.0], [76.0, 1679.0], [76.1, 1683.0], [76.2, 1685.0], [76.3, 1687.0], [76.4, 1690.0], [76.5, 1690.0], [76.6, 1692.0], [76.7, 1694.0], [76.8, 1696.0], [76.9, 1698.0], [77.0, 1700.0], [77.1, 1703.0], [77.2, 1705.0], [77.3, 1707.0], [77.4, 1710.0], [77.5, 1712.0], [77.6, 1714.0], [77.7, 1715.0], [77.8, 1718.0], [77.9, 1720.0], [78.0, 1722.0], [78.1, 1724.0], [78.2, 1727.0], [78.3, 1731.0], [78.4, 1733.0], [78.5, 1735.0], [78.6, 1737.0], [78.7, 1740.0], [78.8, 1741.0], [78.9, 1742.0], [79.0, 1745.0], [79.1, 1749.0], [79.2, 1751.0], [79.3, 1752.0], [79.4, 1754.0], [79.5, 1757.0], [79.6, 1757.0], [79.7, 1759.0], [79.8, 1760.0], [79.9, 1761.0], [80.0, 1762.0], [80.1, 1767.0], [80.2, 1771.0], [80.3, 1775.0], [80.4, 1778.0], [80.5, 1779.0], [80.6, 1782.0], [80.7, 1786.0], [80.8, 1788.0], [80.9, 1789.0], [81.0, 1791.0], [81.1, 1794.0], [81.2, 1797.0], [81.3, 1799.0], [81.4, 1802.0], [81.5, 1802.0], [81.6, 1804.0], [81.7, 1806.0], [81.8, 1807.0], [81.9, 1810.0], [82.0, 1813.0], [82.1, 1814.0], [82.2, 1816.0], [82.3, 1817.0], [82.4, 1820.0], [82.5, 1823.0], [82.6, 1827.0], [82.7, 1832.0], [82.8, 1836.0], [82.9, 1840.0], [83.0, 1842.0], [83.1, 1846.0], [83.2, 1851.0], [83.3, 1854.0], [83.4, 1858.0], [83.5, 1860.0], [83.6, 1866.0], [83.7, 1873.0], [83.8, 1876.0], [83.9, 1879.0], [84.0, 1881.0], [84.1, 1886.0], [84.2, 1889.0], [84.3, 1891.0], [84.4, 1897.0], [84.5, 1906.0], [84.6, 1911.0], [84.7, 1913.0], [84.8, 1917.0], [84.9, 1922.0], [85.0, 1928.0], [85.1, 1936.0], [85.2, 1940.0], [85.3, 1941.0], [85.4, 1944.0], [85.5, 1947.0], [85.6, 1951.0], [85.7, 1954.0], [85.8, 1958.0], [85.9, 1965.0], [86.0, 1975.0], [86.1, 1979.0], [86.2, 1982.0], [86.3, 1985.0], [86.4, 1989.0], [86.5, 1991.0], [86.6, 1999.0], [86.7, 2005.0], [86.8, 2008.0], [86.9, 2016.0], [87.0, 2025.0], [87.1, 2037.0], [87.2, 2046.0], [87.3, 2052.0], [87.4, 2055.0], [87.5, 2060.0], [87.6, 2065.0], [87.7, 2069.0], [87.8, 2073.0], [87.9, 2075.0], [88.0, 2083.0], [88.1, 2089.0], [88.2, 2095.0], [88.3, 2098.0], [88.4, 2103.0], [88.5, 2110.0], [88.6, 2115.0], [88.7, 2122.0], [88.8, 2128.0], [88.9, 2135.0], [89.0, 2142.0], [89.1, 2144.0], [89.2, 2150.0], [89.3, 2162.0], [89.4, 2166.0], [89.5, 2170.0], [89.6, 2173.0], [89.7, 2180.0], [89.8, 2188.0], [89.9, 2199.0], [90.0, 2206.0], [90.1, 2213.0], [90.2, 2218.0], [90.3, 2232.0], [90.4, 2235.0], [90.5, 2238.0], [90.6, 2251.0], [90.7, 2259.0], [90.8, 2265.0], [90.9, 2270.0], [91.0, 2274.0], [91.1, 2279.0], [91.2, 2285.0], [91.3, 2289.0], [91.4, 2294.0], [91.5, 2303.0], [91.6, 2311.0], [91.7, 2322.0], [91.8, 2325.0], [91.9, 2334.0], [92.0, 2341.0], [92.1, 2352.0], [92.2, 2355.0], [92.3, 2360.0], [92.4, 2364.0], [92.5, 2370.0], [92.6, 2378.0], [92.7, 2385.0], [92.8, 2394.0], [92.9, 2401.0], [93.0, 2405.0], [93.1, 2413.0], [93.2, 2424.0], [93.3, 2428.0], [93.4, 2441.0], [93.5, 2451.0], [93.6, 2467.0], [93.7, 2474.0], [93.8, 2477.0], [93.9, 2488.0], [94.0, 2496.0], [94.1, 2500.0], [94.2, 2508.0], [94.3, 2515.0], [94.4, 2535.0], [94.5, 2543.0], [94.6, 2556.0], [94.7, 2561.0], [94.8, 2578.0], [94.9, 2588.0], [95.0, 2599.0], [95.1, 2619.0], [95.2, 2638.0], [95.3, 2659.0], [95.4, 2682.0], [95.5, 2691.0], [95.6, 2702.0], [95.7, 2712.0], [95.8, 2739.0], [95.9, 2757.0], [96.0, 2767.0], [96.1, 2783.0], [96.2, 2795.0], [96.3, 2822.0], [96.4, 2828.0], [96.5, 2836.0], [96.6, 2852.0], [96.7, 2866.0], [96.8, 2882.0], [96.9, 2895.0], [97.0, 2910.0], [97.1, 2938.0], [97.2, 2964.0], [97.3, 2987.0], [97.4, 3015.0], [97.5, 3051.0], [97.6, 3092.0], [97.7, 3107.0], [97.8, 3152.0], [97.9, 3176.0], [98.0, 3232.0], [98.1, 3265.0], [98.2, 3344.0], [98.3, 3365.0], [98.4, 3391.0], [98.5, 3432.0], [98.6, 3466.0], [98.7, 3516.0], [98.8, 3536.0], [98.9, 3576.0], [99.0, 3613.0], [99.1, 3666.0], [99.2, 3737.0], [99.3, 3852.0], [99.4, 3967.0], [99.5, 4225.0], [99.6, 4643.0], [99.7, 5138.0], [99.8, 5652.0], [99.9, 6141.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 575.0, "series": [{"data": [[600.0, 394.0], [700.0, 292.0], [800.0, 258.0], [900.0, 231.0], [1000.0, 277.0], [1100.0, 237.0], [1200.0, 263.0], [1300.0, 257.0], [1400.0, 261.0], [1500.0, 272.0], [1600.0, 218.0], [1700.0, 225.0], [1800.0, 161.0], [1900.0, 114.0], [2000.0, 89.0], [2100.0, 82.0], [2200.0, 82.0], [2300.0, 72.0], [2400.0, 62.0], [2500.0, 49.0], [2600.0, 30.0], [2700.0, 33.0], [2800.0, 37.0], [2900.0, 20.0], [3000.0, 18.0], [3100.0, 15.0], [3300.0, 14.0], [3200.0, 9.0], [3400.0, 12.0], [3500.0, 16.0], [3600.0, 10.0], [3700.0, 8.0], [3800.0, 2.0], [3900.0, 5.0], [4000.0, 2.0], [4300.0, 3.0], [4200.0, 1.0], [4100.0, 2.0], [4400.0, 1.0], [4600.0, 2.0], [4800.0, 1.0], [4700.0, 1.0], [5100.0, 1.0], [4900.0, 1.0], [5300.0, 3.0], [5600.0, 1.0], [5500.0, 1.0], [5700.0, 1.0], [5900.0, 2.0], [6100.0, 2.0], [6000.0, 1.0], [6500.0, 1.0], [6600.0, 1.0], [6900.0, 1.0], [9700.0, 1.0], [200.0, 2.0], [300.0, 63.0], [400.0, 575.0], [500.0, 395.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 644.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2865.0, "series": [{"data": [[0.0, 644.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2865.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1681.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.579617834394904, "minX": 1.60423026E12, "maxY": 12.0, "series": [{"data": [[1.60423038E12, 12.0], [1.60423068E12, 12.0], [1.6042305E12, 12.0], [1.60423032E12, 12.0], [1.6042308E12, 11.579617834394904], [1.60423062E12, 12.0], [1.60423044E12, 12.0], [1.60423026E12, 12.0], [1.60423074E12, 12.0], [1.60423056E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042308E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 719.0, "minX": 1.0, "maxY": 3044.0, "series": [{"data": [[8.0, 2260.0], [4.0, 2284.0], [2.0, 2982.0], [1.0, 3044.0], [9.0, 1145.0], [10.0, 1206.0], [5.0, 990.0], [11.0, 1237.0], [12.0, 1266.45858273798], [6.0, 719.0], [3.0, 1342.0], [7.0, 1210.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 1267.3233140655102]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1180.8166666666666, "minX": 1.60423026E12, "maxY": 3304821.95, "series": [{"data": [[1.60423038E12, 3304821.95], [1.60423068E12, 2978427.1666666665], [1.6042305E12, 2577675.8333333335], [1.60423032E12, 2077169.9833333334], [1.6042308E12, 735398.4333333333], [1.60423062E12, 2273345.1166666667], [1.60423044E12, 2927246.6333333333], [1.60423026E12, 2105665.7666666666], [1.60423074E12, 2537468.2], [1.60423056E12, 2455367.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423038E12, 4512.15], [1.60423068E12, 4675.333333333333], [1.6042305E12, 4012.0666666666666], [1.60423032E12, 4559.183333333333], [1.6042308E12, 1180.8166666666666], [1.60423062E12, 4310.766666666666], [1.60423044E12, 4235.383333333333], [1.60423026E12, 2809.9166666666665], [1.60423074E12, 4466.416666666667], [1.60423056E12, 3815.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042308E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1159.0430622009571, "minX": 1.60423026E12, "maxY": 1579.254777070064, "series": [{"data": [[1.60423038E12, 1201.578859060401], [1.60423068E12, 1172.0388978930312], [1.6042305E12, 1350.8803738317754], [1.60423032E12, 1159.0430622009571], [1.6042308E12, 1579.254777070064], [1.60423062E12, 1229.2813559322017], [1.60423044E12, 1283.4919210053843], [1.60423026E12, 1461.7774936061394], [1.60423074E12, 1217.2546689303892], [1.60423056E12, 1340.9340866290029]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042308E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1157.4736842105256, "minX": 1.60423026E12, "maxY": 1576.6560509554138, "series": [{"data": [[1.60423038E12, 1198.838926174497], [1.60423068E12, 1170.0940032414921], [1.6042305E12, 1348.5046728971972], [1.60423032E12, 1157.4736842105256], [1.6042308E12, 1576.6560509554138], [1.60423062E12, 1227.6898305084749], [1.60423044E12, 1280.9389587073613], [1.60423026E12, 1459.2250639386186], [1.60423074E12, 1215.502546689304], [1.60423056E12, 1339.2617702448208]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042308E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0169779286926995, "minX": 1.60423026E12, "maxY": 0.29156010230179036, "series": [{"data": [[1.60423038E12, 0.023489932885906083], [1.60423068E12, 0.02593192868719613], [1.6042305E12, 0.024299065420560716], [1.60423032E12, 0.025518341307814985], [1.6042308E12, 0.0573248407643312], [1.60423062E12, 0.0271186440677966], [1.60423044E12, 0.03949730700179531], [1.60423026E12, 0.29156010230179036], [1.60423074E12, 0.0169779286926995], [1.60423056E12, 0.03766478342749534]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042308E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 237.0, "minX": 1.60423026E12, "maxY": 9745.0, "series": [{"data": [[1.60423038E12, 5750.0], [1.60423068E12, 3386.0], [1.6042305E12, 6141.0], [1.60423032E12, 5997.0], [1.6042308E12, 4010.0], [1.60423062E12, 4318.0], [1.60423044E12, 4643.0], [1.60423026E12, 5936.0], [1.60423074E12, 4303.0], [1.60423056E12, 9745.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423038E12, 387.3729998576641], [1.60423068E12, 390.2479994106293], [1.6042305E12, 391.47199961662295], [1.60423032E12, 392.6519998502731], [1.6042308E12, 515.8939895653725], [1.60423062E12, 391.0], [1.60423044E12, 407.02199986696246], [1.60423026E12, 421.5279999065399], [1.60423074E12, 401.85999915599825], [1.60423056E12, 416.51599911212924]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423038E12, 387.9103000569344], [1.60423068E12, 392.23640011787415], [1.6042305E12, 392.6128001022339], [1.60423032E12, 393.21720005989073], [1.6042308E12, 555.2834041738511], [1.60423062E12, 391.0], [1.60423044E12, 407.52420005321505], [1.60423026E12, 421.880800037384], [1.60423074E12, 405.04600033760073], [1.60423056E12, 419.86760035514834]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423038E12, 387.6714999288321], [1.60423068E12, 391.48399970531466], [1.6042305E12, 392.18399987220766], [1.60423032E12, 392.96599992513654], [1.6042308E12, 537.7769947826862], [1.60423062E12, 391.0], [1.60423044E12, 407.3009999334812], [1.60423026E12, 421.72399995327], [1.60423074E12, 403.6299995779991], [1.60423056E12, 418.3779995560646]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423038E12, 323.0], [1.60423068E12, 237.0], [1.6042305E12, 375.0], [1.60423032E12, 380.0], [1.6042308E12, 399.0], [1.60423062E12, 374.0], [1.60423044E12, 377.0], [1.60423026E12, 411.0], [1.60423074E12, 246.0], [1.60423056E12, 389.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423038E12, 931.5], [1.60423068E12, 1040.0], [1.6042305E12, 1235.0], [1.60423032E12, 988.0], [1.6042308E12, 1468.0], [1.60423062E12, 1050.5], [1.60423044E12, 1245.0], [1.60423026E12, 1329.0], [1.60423074E12, 1065.0], [1.60423056E12, 1177.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042308E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 440.5, "minX": 2.0, "maxY": 2538.0, "series": [{"data": [[2.0, 2538.0], [3.0, 1816.0], [4.0, 1572.5], [5.0, 1658.5], [6.0, 1570.0], [7.0, 1465.0], [8.0, 1359.5], [9.0, 1254.0], [10.0, 1180.5], [11.0, 1214.0], [12.0, 940.5], [13.0, 826.5], [14.0, 736.5], [15.0, 718.0], [16.0, 510.0], [17.0, 517.0], [18.0, 553.0], [19.0, 517.5], [20.0, 479.5], [21.0, 463.0], [22.0, 446.5], [24.0, 459.5], [25.0, 443.0], [26.0, 440.5], [28.0, 453.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 440.0, "minX": 2.0, "maxY": 2533.5, "series": [{"data": [[2.0, 2533.5], [3.0, 1813.0], [4.0, 1569.0], [5.0, 1656.5], [6.0, 1568.5], [7.0, 1461.5], [8.0, 1358.0], [9.0, 1252.0], [10.0, 1178.0], [11.0, 1211.0], [12.0, 940.0], [13.0, 826.0], [14.0, 736.0], [15.0, 717.0], [16.0, 510.0], [17.0, 517.0], [18.0, 553.0], [19.0, 517.0], [20.0, 479.0], [21.0, 463.0], [22.0, 446.0], [24.0, 459.0], [25.0, 442.0], [26.0, 440.0], [28.0, 453.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.4166666666666665, "minX": 1.60423026E12, "maxY": 10.45, "series": [{"data": [[1.60423038E12, 9.933333333333334], [1.60423068E12, 10.283333333333333], [1.6042305E12, 8.916666666666666], [1.60423032E12, 10.45], [1.6042308E12, 2.4166666666666665], [1.60423062E12, 9.833333333333334], [1.60423044E12, 9.283333333333333], [1.60423026E12, 6.716666666666667], [1.60423074E12, 9.816666666666666], [1.60423056E12, 8.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042308E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.6166666666666667, "minX": 1.60423026E12, "maxY": 10.45, "series": [{"data": [[1.60423038E12, 9.933333333333334], [1.60423068E12, 10.283333333333333], [1.6042305E12, 8.916666666666666], [1.60423032E12, 10.45], [1.6042308E12, 2.6166666666666667], [1.60423062E12, 9.833333333333334], [1.60423044E12, 9.283333333333333], [1.60423026E12, 6.516666666666667], [1.60423074E12, 9.816666666666666], [1.60423056E12, 8.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042308E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.6166666666666667, "minX": 1.60423026E12, "maxY": 10.45, "series": [{"data": [[1.60423038E12, 9.933333333333334], [1.60423068E12, 10.283333333333333], [1.6042305E12, 8.916666666666666], [1.60423032E12, 10.45], [1.6042308E12, 2.6166666666666667], [1.60423062E12, 9.833333333333334], [1.60423044E12, 9.283333333333333], [1.60423026E12, 6.516666666666667], [1.60423074E12, 9.816666666666666], [1.60423056E12, 8.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042308E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.6166666666666667, "minX": 1.60423026E12, "maxY": 10.45, "series": [{"data": [[1.60423038E12, 9.933333333333334], [1.60423068E12, 10.283333333333333], [1.6042305E12, 8.916666666666666], [1.60423032E12, 10.45], [1.6042308E12, 2.6166666666666667], [1.60423062E12, 9.833333333333334], [1.60423044E12, 9.283333333333333], [1.60423026E12, 6.516666666666667], [1.60423074E12, 9.816666666666666], [1.60423056E12, 8.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042308E12, "title": "Total Transactions Per Second"}},
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

