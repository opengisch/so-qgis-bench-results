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
        data: {"result": {"minY": 188.0, "minX": 0.0, "maxY": 9327.0, "series": [{"data": [[0.0, 188.0], [0.1, 225.0], [0.2, 283.0], [0.3, 365.0], [0.4, 374.0], [0.5, 378.0], [0.6, 381.0], [0.7, 384.0], [0.8, 386.0], [0.9, 387.0], [1.0, 389.0], [1.1, 392.0], [1.2, 393.0], [1.3, 396.0], [1.4, 397.0], [1.5, 399.0], [1.6, 401.0], [1.7, 404.0], [1.8, 406.0], [1.9, 407.0], [2.0, 409.0], [2.1, 410.0], [2.2, 411.0], [2.3, 412.0], [2.4, 413.0], [2.5, 414.0], [2.6, 415.0], [2.7, 417.0], [2.8, 419.0], [2.9, 420.0], [3.0, 421.0], [3.1, 422.0], [3.2, 423.0], [3.3, 424.0], [3.4, 425.0], [3.5, 426.0], [3.6, 427.0], [3.7, 428.0], [3.8, 428.0], [3.9, 429.0], [4.0, 430.0], [4.1, 430.0], [4.2, 431.0], [4.3, 432.0], [4.4, 433.0], [4.5, 433.0], [4.6, 434.0], [4.7, 434.0], [4.8, 435.0], [4.9, 436.0], [5.0, 437.0], [5.1, 437.0], [5.2, 438.0], [5.3, 438.0], [5.4, 439.0], [5.5, 439.0], [5.6, 440.0], [5.7, 440.0], [5.8, 441.0], [5.9, 441.0], [6.0, 442.0], [6.1, 442.0], [6.2, 443.0], [6.3, 443.0], [6.4, 444.0], [6.5, 444.0], [6.6, 445.0], [6.7, 446.0], [6.8, 447.0], [6.9, 448.0], [7.0, 448.0], [7.1, 449.0], [7.2, 449.0], [7.3, 449.0], [7.4, 451.0], [7.5, 452.0], [7.6, 453.0], [7.7, 454.0], [7.8, 454.0], [7.9, 454.0], [8.0, 455.0], [8.1, 456.0], [8.2, 457.0], [8.3, 457.0], [8.4, 458.0], [8.5, 458.0], [8.6, 459.0], [8.7, 459.0], [8.8, 461.0], [8.9, 461.0], [9.0, 462.0], [9.1, 462.0], [9.2, 463.0], [9.3, 464.0], [9.4, 464.0], [9.5, 465.0], [9.6, 466.0], [9.7, 467.0], [9.8, 467.0], [9.9, 468.0], [10.0, 469.0], [10.1, 470.0], [10.2, 471.0], [10.3, 472.0], [10.4, 472.0], [10.5, 473.0], [10.6, 474.0], [10.7, 474.0], [10.8, 475.0], [10.9, 475.0], [11.0, 476.0], [11.1, 477.0], [11.2, 478.0], [11.3, 478.0], [11.4, 479.0], [11.5, 480.0], [11.6, 480.0], [11.7, 481.0], [11.8, 483.0], [11.9, 484.0], [12.0, 486.0], [12.1, 487.0], [12.2, 489.0], [12.3, 490.0], [12.4, 492.0], [12.5, 493.0], [12.6, 495.0], [12.7, 496.0], [12.8, 496.0], [12.9, 497.0], [13.0, 499.0], [13.1, 501.0], [13.2, 502.0], [13.3, 503.0], [13.4, 505.0], [13.5, 506.0], [13.6, 507.0], [13.7, 511.0], [13.8, 512.0], [13.9, 513.0], [14.0, 515.0], [14.1, 518.0], [14.2, 520.0], [14.3, 522.0], [14.4, 524.0], [14.5, 526.0], [14.6, 527.0], [14.7, 529.0], [14.8, 530.0], [14.9, 532.0], [15.0, 534.0], [15.1, 536.0], [15.2, 537.0], [15.3, 538.0], [15.4, 539.0], [15.5, 540.0], [15.6, 541.0], [15.7, 543.0], [15.8, 544.0], [15.9, 544.0], [16.0, 545.0], [16.1, 546.0], [16.2, 548.0], [16.3, 549.0], [16.4, 550.0], [16.5, 551.0], [16.6, 552.0], [16.7, 553.0], [16.8, 554.0], [16.9, 555.0], [17.0, 557.0], [17.1, 558.0], [17.2, 559.0], [17.3, 560.0], [17.4, 561.0], [17.5, 564.0], [17.6, 565.0], [17.7, 566.0], [17.8, 568.0], [17.9, 570.0], [18.0, 571.0], [18.1, 572.0], [18.2, 573.0], [18.3, 574.0], [18.4, 575.0], [18.5, 576.0], [18.6, 577.0], [18.7, 578.0], [18.8, 579.0], [18.9, 582.0], [19.0, 583.0], [19.1, 584.0], [19.2, 585.0], [19.3, 586.0], [19.4, 588.0], [19.5, 589.0], [19.6, 592.0], [19.7, 593.0], [19.8, 594.0], [19.9, 596.0], [20.0, 598.0], [20.1, 600.0], [20.2, 600.0], [20.3, 602.0], [20.4, 602.0], [20.5, 604.0], [20.6, 604.0], [20.7, 605.0], [20.8, 606.0], [20.9, 607.0], [21.0, 608.0], [21.1, 609.0], [21.2, 610.0], [21.3, 610.0], [21.4, 611.0], [21.5, 612.0], [21.6, 613.0], [21.7, 614.0], [21.8, 615.0], [21.9, 617.0], [22.0, 617.0], [22.1, 619.0], [22.2, 619.0], [22.3, 621.0], [22.4, 621.0], [22.5, 622.0], [22.6, 624.0], [22.7, 625.0], [22.8, 626.0], [22.9, 627.0], [23.0, 628.0], [23.1, 628.0], [23.2, 630.0], [23.3, 631.0], [23.4, 632.0], [23.5, 632.0], [23.6, 633.0], [23.7, 635.0], [23.8, 636.0], [23.9, 637.0], [24.0, 638.0], [24.1, 638.0], [24.2, 640.0], [24.3, 641.0], [24.4, 641.0], [24.5, 642.0], [24.6, 643.0], [24.7, 646.0], [24.8, 647.0], [24.9, 648.0], [25.0, 650.0], [25.1, 651.0], [25.2, 653.0], [25.3, 654.0], [25.4, 655.0], [25.5, 656.0], [25.6, 656.0], [25.7, 658.0], [25.8, 659.0], [25.9, 660.0], [26.0, 661.0], [26.1, 663.0], [26.2, 663.0], [26.3, 664.0], [26.4, 666.0], [26.5, 666.0], [26.6, 667.0], [26.7, 667.0], [26.8, 669.0], [26.9, 670.0], [27.0, 671.0], [27.1, 673.0], [27.2, 674.0], [27.3, 675.0], [27.4, 677.0], [27.5, 679.0], [27.6, 679.0], [27.7, 680.0], [27.8, 681.0], [27.9, 682.0], [28.0, 684.0], [28.1, 686.0], [28.2, 688.0], [28.3, 690.0], [28.4, 691.0], [28.5, 693.0], [28.6, 695.0], [28.7, 696.0], [28.8, 697.0], [28.9, 699.0], [29.0, 700.0], [29.1, 702.0], [29.2, 703.0], [29.3, 704.0], [29.4, 706.0], [29.5, 707.0], [29.6, 708.0], [29.7, 710.0], [29.8, 712.0], [29.9, 713.0], [30.0, 715.0], [30.1, 716.0], [30.2, 717.0], [30.3, 719.0], [30.4, 721.0], [30.5, 723.0], [30.6, 725.0], [30.7, 727.0], [30.8, 729.0], [30.9, 731.0], [31.0, 734.0], [31.1, 736.0], [31.2, 738.0], [31.3, 740.0], [31.4, 741.0], [31.5, 743.0], [31.6, 746.0], [31.7, 747.0], [31.8, 750.0], [31.9, 751.0], [32.0, 753.0], [32.1, 754.0], [32.2, 755.0], [32.3, 757.0], [32.4, 759.0], [32.5, 761.0], [32.6, 762.0], [32.7, 764.0], [32.8, 766.0], [32.9, 767.0], [33.0, 769.0], [33.1, 771.0], [33.2, 773.0], [33.3, 775.0], [33.4, 777.0], [33.5, 779.0], [33.6, 780.0], [33.7, 782.0], [33.8, 783.0], [33.9, 785.0], [34.0, 788.0], [34.1, 790.0], [34.2, 792.0], [34.3, 794.0], [34.4, 796.0], [34.5, 798.0], [34.6, 800.0], [34.7, 801.0], [34.8, 803.0], [34.9, 804.0], [35.0, 806.0], [35.1, 807.0], [35.2, 810.0], [35.3, 811.0], [35.4, 813.0], [35.5, 815.0], [35.6, 816.0], [35.7, 818.0], [35.8, 821.0], [35.9, 823.0], [36.0, 827.0], [36.1, 830.0], [36.2, 832.0], [36.3, 834.0], [36.4, 836.0], [36.5, 838.0], [36.6, 839.0], [36.7, 840.0], [36.8, 842.0], [36.9, 844.0], [37.0, 846.0], [37.1, 847.0], [37.2, 849.0], [37.3, 850.0], [37.4, 852.0], [37.5, 853.0], [37.6, 856.0], [37.7, 858.0], [37.8, 858.0], [37.9, 862.0], [38.0, 864.0], [38.1, 867.0], [38.2, 868.0], [38.3, 869.0], [38.4, 870.0], [38.5, 872.0], [38.6, 874.0], [38.7, 876.0], [38.8, 877.0], [38.9, 879.0], [39.0, 881.0], [39.1, 883.0], [39.2, 885.0], [39.3, 890.0], [39.4, 894.0], [39.5, 895.0], [39.6, 898.0], [39.7, 900.0], [39.8, 904.0], [39.9, 905.0], [40.0, 907.0], [40.1, 910.0], [40.2, 914.0], [40.3, 914.0], [40.4, 917.0], [40.5, 920.0], [40.6, 922.0], [40.7, 923.0], [40.8, 925.0], [40.9, 928.0], [41.0, 931.0], [41.1, 933.0], [41.2, 934.0], [41.3, 937.0], [41.4, 940.0], [41.5, 944.0], [41.6, 946.0], [41.7, 949.0], [41.8, 950.0], [41.9, 954.0], [42.0, 955.0], [42.1, 956.0], [42.2, 957.0], [42.3, 958.0], [42.4, 960.0], [42.5, 963.0], [42.6, 964.0], [42.7, 966.0], [42.8, 968.0], [42.9, 969.0], [43.0, 971.0], [43.1, 972.0], [43.2, 973.0], [43.3, 975.0], [43.4, 977.0], [43.5, 980.0], [43.6, 981.0], [43.7, 983.0], [43.8, 983.0], [43.9, 984.0], [44.0, 988.0], [44.1, 989.0], [44.2, 991.0], [44.3, 992.0], [44.4, 993.0], [44.5, 996.0], [44.6, 997.0], [44.7, 999.0], [44.8, 1001.0], [44.9, 1002.0], [45.0, 1005.0], [45.1, 1006.0], [45.2, 1008.0], [45.3, 1010.0], [45.4, 1014.0], [45.5, 1015.0], [45.6, 1016.0], [45.7, 1020.0], [45.8, 1022.0], [45.9, 1023.0], [46.0, 1025.0], [46.1, 1029.0], [46.2, 1029.0], [46.3, 1032.0], [46.4, 1034.0], [46.5, 1035.0], [46.6, 1035.0], [46.7, 1038.0], [46.8, 1039.0], [46.9, 1041.0], [47.0, 1042.0], [47.1, 1044.0], [47.2, 1046.0], [47.3, 1049.0], [47.4, 1052.0], [47.5, 1054.0], [47.6, 1055.0], [47.7, 1056.0], [47.8, 1058.0], [47.9, 1059.0], [48.0, 1061.0], [48.1, 1062.0], [48.2, 1066.0], [48.3, 1068.0], [48.4, 1069.0], [48.5, 1071.0], [48.6, 1074.0], [48.7, 1079.0], [48.8, 1080.0], [48.9, 1082.0], [49.0, 1085.0], [49.1, 1087.0], [49.2, 1090.0], [49.3, 1092.0], [49.4, 1094.0], [49.5, 1096.0], [49.6, 1099.0], [49.7, 1101.0], [49.8, 1103.0], [49.9, 1106.0], [50.0, 1108.0], [50.1, 1109.0], [50.2, 1111.0], [50.3, 1112.0], [50.4, 1113.0], [50.5, 1118.0], [50.6, 1120.0], [50.7, 1122.0], [50.8, 1124.0], [50.9, 1125.0], [51.0, 1127.0], [51.1, 1128.0], [51.2, 1129.0], [51.3, 1131.0], [51.4, 1133.0], [51.5, 1134.0], [51.6, 1135.0], [51.7, 1138.0], [51.8, 1140.0], [51.9, 1142.0], [52.0, 1144.0], [52.1, 1146.0], [52.2, 1148.0], [52.3, 1149.0], [52.4, 1151.0], [52.5, 1153.0], [52.6, 1156.0], [52.7, 1158.0], [52.8, 1159.0], [52.9, 1163.0], [53.0, 1166.0], [53.1, 1168.0], [53.2, 1170.0], [53.3, 1171.0], [53.4, 1174.0], [53.5, 1175.0], [53.6, 1177.0], [53.7, 1178.0], [53.8, 1181.0], [53.9, 1182.0], [54.0, 1183.0], [54.1, 1184.0], [54.2, 1187.0], [54.3, 1188.0], [54.4, 1189.0], [54.5, 1192.0], [54.6, 1193.0], [54.7, 1196.0], [54.8, 1197.0], [54.9, 1200.0], [55.0, 1203.0], [55.1, 1204.0], [55.2, 1206.0], [55.3, 1207.0], [55.4, 1209.0], [55.5, 1210.0], [55.6, 1214.0], [55.7, 1216.0], [55.8, 1219.0], [55.9, 1223.0], [56.0, 1223.0], [56.1, 1225.0], [56.2, 1227.0], [56.3, 1228.0], [56.4, 1232.0], [56.5, 1235.0], [56.6, 1237.0], [56.7, 1239.0], [56.8, 1240.0], [56.9, 1243.0], [57.0, 1246.0], [57.1, 1246.0], [57.2, 1248.0], [57.3, 1250.0], [57.4, 1251.0], [57.5, 1253.0], [57.6, 1256.0], [57.7, 1256.0], [57.8, 1258.0], [57.9, 1260.0], [58.0, 1262.0], [58.1, 1264.0], [58.2, 1266.0], [58.3, 1268.0], [58.4, 1269.0], [58.5, 1270.0], [58.6, 1272.0], [58.7, 1274.0], [58.8, 1276.0], [58.9, 1278.0], [59.0, 1279.0], [59.1, 1282.0], [59.2, 1284.0], [59.3, 1285.0], [59.4, 1288.0], [59.5, 1290.0], [59.6, 1291.0], [59.7, 1293.0], [59.8, 1296.0], [59.9, 1300.0], [60.0, 1301.0], [60.1, 1303.0], [60.2, 1305.0], [60.3, 1306.0], [60.4, 1310.0], [60.5, 1312.0], [60.6, 1315.0], [60.7, 1317.0], [60.8, 1321.0], [60.9, 1322.0], [61.0, 1326.0], [61.1, 1328.0], [61.2, 1331.0], [61.3, 1334.0], [61.4, 1335.0], [61.5, 1336.0], [61.6, 1338.0], [61.7, 1341.0], [61.8, 1345.0], [61.9, 1346.0], [62.0, 1347.0], [62.1, 1349.0], [62.2, 1351.0], [62.3, 1353.0], [62.4, 1355.0], [62.5, 1357.0], [62.6, 1358.0], [62.7, 1360.0], [62.8, 1361.0], [62.9, 1364.0], [63.0, 1365.0], [63.1, 1367.0], [63.2, 1368.0], [63.3, 1369.0], [63.4, 1371.0], [63.5, 1373.0], [63.6, 1376.0], [63.7, 1379.0], [63.8, 1381.0], [63.9, 1383.0], [64.0, 1384.0], [64.1, 1385.0], [64.2, 1387.0], [64.3, 1389.0], [64.4, 1389.0], [64.5, 1390.0], [64.6, 1391.0], [64.7, 1395.0], [64.8, 1396.0], [64.9, 1398.0], [65.0, 1401.0], [65.1, 1402.0], [65.2, 1403.0], [65.3, 1406.0], [65.4, 1408.0], [65.5, 1410.0], [65.6, 1413.0], [65.7, 1415.0], [65.8, 1417.0], [65.9, 1418.0], [66.0, 1422.0], [66.1, 1423.0], [66.2, 1423.0], [66.3, 1426.0], [66.4, 1429.0], [66.5, 1434.0], [66.6, 1435.0], [66.7, 1437.0], [66.8, 1439.0], [66.9, 1442.0], [67.0, 1444.0], [67.1, 1447.0], [67.2, 1448.0], [67.3, 1451.0], [67.4, 1453.0], [67.5, 1455.0], [67.6, 1458.0], [67.7, 1459.0], [67.8, 1459.0], [67.9, 1460.0], [68.0, 1462.0], [68.1, 1465.0], [68.2, 1468.0], [68.3, 1470.0], [68.4, 1472.0], [68.5, 1473.0], [68.6, 1475.0], [68.7, 1476.0], [68.8, 1478.0], [68.9, 1481.0], [69.0, 1484.0], [69.1, 1486.0], [69.2, 1488.0], [69.3, 1491.0], [69.4, 1492.0], [69.5, 1494.0], [69.6, 1495.0], [69.7, 1498.0], [69.8, 1499.0], [69.9, 1501.0], [70.0, 1502.0], [70.1, 1504.0], [70.2, 1507.0], [70.3, 1508.0], [70.4, 1509.0], [70.5, 1512.0], [70.6, 1515.0], [70.7, 1517.0], [70.8, 1519.0], [70.9, 1522.0], [71.0, 1523.0], [71.1, 1524.0], [71.2, 1527.0], [71.3, 1529.0], [71.4, 1530.0], [71.5, 1531.0], [71.6, 1532.0], [71.7, 1534.0], [71.8, 1536.0], [71.9, 1540.0], [72.0, 1543.0], [72.1, 1544.0], [72.2, 1545.0], [72.3, 1547.0], [72.4, 1548.0], [72.5, 1549.0], [72.6, 1550.0], [72.7, 1552.0], [72.8, 1553.0], [72.9, 1554.0], [73.0, 1556.0], [73.1, 1559.0], [73.2, 1562.0], [73.3, 1563.0], [73.4, 1565.0], [73.5, 1567.0], [73.6, 1568.0], [73.7, 1570.0], [73.8, 1576.0], [73.9, 1577.0], [74.0, 1578.0], [74.1, 1581.0], [74.2, 1582.0], [74.3, 1584.0], [74.4, 1585.0], [74.5, 1589.0], [74.6, 1592.0], [74.7, 1593.0], [74.8, 1596.0], [74.9, 1597.0], [75.0, 1599.0], [75.1, 1601.0], [75.2, 1604.0], [75.3, 1605.0], [75.4, 1606.0], [75.5, 1607.0], [75.6, 1609.0], [75.7, 1612.0], [75.8, 1613.0], [75.9, 1615.0], [76.0, 1618.0], [76.1, 1619.0], [76.2, 1620.0], [76.3, 1621.0], [76.4, 1624.0], [76.5, 1628.0], [76.6, 1632.0], [76.7, 1633.0], [76.8, 1634.0], [76.9, 1636.0], [77.0, 1640.0], [77.1, 1641.0], [77.2, 1644.0], [77.3, 1648.0], [77.4, 1649.0], [77.5, 1651.0], [77.6, 1653.0], [77.7, 1655.0], [77.8, 1655.0], [77.9, 1657.0], [78.0, 1658.0], [78.1, 1662.0], [78.2, 1664.0], [78.3, 1667.0], [78.4, 1670.0], [78.5, 1672.0], [78.6, 1674.0], [78.7, 1676.0], [78.8, 1677.0], [78.9, 1679.0], [79.0, 1682.0], [79.1, 1685.0], [79.2, 1686.0], [79.3, 1689.0], [79.4, 1690.0], [79.5, 1692.0], [79.6, 1694.0], [79.7, 1699.0], [79.8, 1700.0], [79.9, 1703.0], [80.0, 1704.0], [80.1, 1707.0], [80.2, 1710.0], [80.3, 1713.0], [80.4, 1714.0], [80.5, 1716.0], [80.6, 1719.0], [80.7, 1722.0], [80.8, 1724.0], [80.9, 1726.0], [81.0, 1728.0], [81.1, 1731.0], [81.2, 1733.0], [81.3, 1737.0], [81.4, 1739.0], [81.5, 1742.0], [81.6, 1744.0], [81.7, 1747.0], [81.8, 1749.0], [81.9, 1750.0], [82.0, 1754.0], [82.1, 1756.0], [82.2, 1760.0], [82.3, 1763.0], [82.4, 1765.0], [82.5, 1770.0], [82.6, 1774.0], [82.7, 1776.0], [82.8, 1778.0], [82.9, 1779.0], [83.0, 1783.0], [83.1, 1787.0], [83.2, 1792.0], [83.3, 1797.0], [83.4, 1800.0], [83.5, 1801.0], [83.6, 1803.0], [83.7, 1809.0], [83.8, 1812.0], [83.9, 1814.0], [84.0, 1820.0], [84.1, 1824.0], [84.2, 1828.0], [84.3, 1830.0], [84.4, 1831.0], [84.5, 1834.0], [84.6, 1839.0], [84.7, 1840.0], [84.8, 1843.0], [84.9, 1847.0], [85.0, 1852.0], [85.1, 1857.0], [85.2, 1862.0], [85.3, 1864.0], [85.4, 1869.0], [85.5, 1873.0], [85.6, 1878.0], [85.7, 1884.0], [85.8, 1888.0], [85.9, 1892.0], [86.0, 1900.0], [86.1, 1903.0], [86.2, 1906.0], [86.3, 1912.0], [86.4, 1919.0], [86.5, 1922.0], [86.6, 1924.0], [86.7, 1926.0], [86.8, 1929.0], [86.9, 1933.0], [87.0, 1938.0], [87.1, 1943.0], [87.2, 1947.0], [87.3, 1951.0], [87.4, 1957.0], [87.5, 1962.0], [87.6, 1968.0], [87.7, 1971.0], [87.8, 1975.0], [87.9, 1979.0], [88.0, 1984.0], [88.1, 1988.0], [88.2, 1996.0], [88.3, 2002.0], [88.4, 2008.0], [88.5, 2020.0], [88.6, 2025.0], [88.7, 2033.0], [88.8, 2042.0], [88.9, 2047.0], [89.0, 2055.0], [89.1, 2064.0], [89.2, 2073.0], [89.3, 2081.0], [89.4, 2084.0], [89.5, 2089.0], [89.6, 2094.0], [89.7, 2106.0], [89.8, 2110.0], [89.9, 2116.0], [90.0, 2122.0], [90.1, 2130.0], [90.2, 2135.0], [90.3, 2142.0], [90.4, 2149.0], [90.5, 2155.0], [90.6, 2159.0], [90.7, 2163.0], [90.8, 2166.0], [90.9, 2174.0], [91.0, 2191.0], [91.1, 2195.0], [91.2, 2206.0], [91.3, 2213.0], [91.4, 2221.0], [91.5, 2230.0], [91.6, 2236.0], [91.7, 2242.0], [91.8, 2248.0], [91.9, 2255.0], [92.0, 2262.0], [92.1, 2267.0], [92.2, 2281.0], [92.3, 2288.0], [92.4, 2298.0], [92.5, 2305.0], [92.6, 2308.0], [92.7, 2316.0], [92.8, 2320.0], [92.9, 2325.0], [93.0, 2335.0], [93.1, 2349.0], [93.2, 2358.0], [93.3, 2372.0], [93.4, 2378.0], [93.5, 2387.0], [93.6, 2394.0], [93.7, 2402.0], [93.8, 2409.0], [93.9, 2416.0], [94.0, 2433.0], [94.1, 2441.0], [94.2, 2446.0], [94.3, 2453.0], [94.4, 2465.0], [94.5, 2479.0], [94.6, 2485.0], [94.7, 2501.0], [94.8, 2511.0], [94.9, 2530.0], [95.0, 2540.0], [95.1, 2547.0], [95.2, 2554.0], [95.3, 2570.0], [95.4, 2581.0], [95.5, 2590.0], [95.6, 2602.0], [95.7, 2617.0], [95.8, 2631.0], [95.9, 2643.0], [96.0, 2658.0], [96.1, 2666.0], [96.2, 2680.0], [96.3, 2701.0], [96.4, 2714.0], [96.5, 2723.0], [96.6, 2733.0], [96.7, 2744.0], [96.8, 2749.0], [96.9, 2771.0], [97.0, 2784.0], [97.1, 2810.0], [97.2, 2838.0], [97.3, 2854.0], [97.4, 2875.0], [97.5, 2907.0], [97.6, 2921.0], [97.7, 2957.0], [97.8, 2999.0], [97.9, 3020.0], [98.0, 3050.0], [98.1, 3093.0], [98.2, 3158.0], [98.3, 3202.0], [98.4, 3261.0], [98.5, 3294.0], [98.6, 3315.0], [98.7, 3345.0], [98.8, 3366.0], [98.9, 3402.0], [99.0, 3483.0], [99.1, 3573.0], [99.2, 3625.0], [99.3, 3757.0], [99.4, 3868.0], [99.5, 3980.0], [99.6, 4318.0], [99.7, 4843.0], [99.8, 5252.0], [99.9, 5775.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 596.0, "series": [{"data": [[600.0, 461.0], [700.0, 292.0], [800.0, 264.0], [900.0, 265.0], [1000.0, 251.0], [1100.0, 273.0], [1200.0, 261.0], [1300.0, 263.0], [1400.0, 252.0], [1500.0, 270.0], [1600.0, 247.0], [1700.0, 188.0], [1800.0, 135.0], [1900.0, 117.0], [2000.0, 72.0], [2100.0, 78.0], [2200.0, 67.0], [2300.0, 64.0], [2400.0, 53.0], [2500.0, 47.0], [2600.0, 36.0], [2700.0, 40.0], [2800.0, 21.0], [2900.0, 18.0], [3000.0, 16.0], [3100.0, 9.0], [3300.0, 17.0], [3200.0, 13.0], [3400.0, 8.0], [3500.0, 7.0], [3700.0, 4.0], [3600.0, 5.0], [3800.0, 6.0], [3900.0, 4.0], [4000.0, 3.0], [4300.0, 2.0], [4100.0, 1.0], [4400.0, 1.0], [4500.0, 1.0], [4800.0, 1.0], [4700.0, 1.0], [5000.0, 2.0], [5100.0, 1.0], [4900.0, 1.0], [5200.0, 2.0], [5500.0, 1.0], [5400.0, 1.0], [5700.0, 2.0], [5800.0, 2.0], [6300.0, 1.0], [9000.0, 1.0], [9300.0, 1.0], [100.0, 2.0], [200.0, 10.0], [300.0, 67.0], [400.0, 596.0], [500.0, 367.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2945.0, "series": [{"data": [[0.0, 680.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2945.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1565.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.56521739130435, "minX": 1.60219038E12, "maxY": 12.0, "series": [{"data": [[1.60219062E12, 12.0], [1.6021905E12, 12.0], [1.60219092E12, 10.56521739130435], [1.60219074E12, 12.0], [1.60219038E12, 12.0], [1.60219056E12, 12.0], [1.60219086E12, 12.0], [1.60219068E12, 12.0], [1.60219044E12, 12.0], [1.6021908E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219092E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 513.0, "minX": 1.0, "maxY": 3448.0, "series": [{"data": [[8.0, 641.0], [4.0, 1831.0], [2.0, 3448.0], [1.0, 3282.0], [9.0, 2414.0], [10.0, 1944.0], [5.0, 1424.0], [11.0, 678.0], [12.0, 1224.5407335907366], [6.0, 1650.0], [3.0, 1069.0], [7.0, 513.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987285686765556, 1225.5856289732262]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 355.21666666666664, "minX": 1.60219038E12, "maxY": 3305764.816666667, "series": [{"data": [[1.60219062E12, 2686140.466666667], [1.6021905E12, 3305764.816666667], [1.60219092E12, 203159.5], [1.60219074E12, 2777147.3333333335], [1.60219038E12, 2033599.5166666666], [1.60219056E12, 3116897.65], [1.60219086E12, 2581604.0833333335], [1.60219068E12, 2383832.783333333], [1.60219044E12, 2152530.4166666665], [1.6021908E12, 2732469.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60219062E12, 3855.016666666667], [1.6021905E12, 4627.566666666667], [1.60219092E12, 355.21666666666664], [1.60219074E12, 4646.816666666667], [1.60219038E12, 2748.1666666666665], [1.60219056E12, 4392.983333333334], [1.60219086E12, 4435.616666666667], [1.60219068E12, 3964.866666666667], [1.60219044E12, 4678.333333333333], [1.6021908E12, 4879.466666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219092E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1121.9502332814936, "minX": 1.60219038E12, "maxY": 1485.3043478260872, "series": [{"data": [[1.60219062E12, 1359.5406976744182], [1.6021905E12, 1173.1754098360636], [1.60219092E12, 1485.3043478260872], [1.60219074E12, 1148.6582278481], [1.60219038E12, 1393.2382198952873], [1.60219056E12, 1260.4342560553641], [1.60219086E12, 1214.1785714285706], [1.60219068E12, 1320.7622504537205], [1.60219044E12, 1126.7286821705422], [1.6021908E12, 1121.9502332814936]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219092E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1120.396578538101, "minX": 1.60219038E12, "maxY": 1483.804347826087, "series": [{"data": [[1.60219062E12, 1357.4379844961243], [1.6021905E12, 1170.7147540983622], [1.60219092E12, 1483.804347826087], [1.60219074E12, 1147.0110759493668], [1.60219038E12, 1390.9319371727752], [1.60219056E12, 1258.2698961937713], [1.60219086E12, 1212.5561224489793], [1.60219068E12, 1319.165154264973], [1.60219044E12, 1125.2992248062008], [1.6021908E12, 1120.396578538101]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219092E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60219038E12, "maxY": 0.3717277486910995, "series": [{"data": [[1.60219062E12, 0.021317829457364337], [1.6021905E12, 0.031147540983606545], [1.60219092E12, 0.0], [1.60219074E12, 0.014240506329113925], [1.60219038E12, 0.3717277486910995], [1.60219056E12, 0.020761245674740463], [1.60219086E12, 0.020408163265306103], [1.60219068E12, 0.032667876588021776], [1.60219044E12, 0.021705426356589178], [1.6021908E12, 0.018662519440124398]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219092E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 188.0, "minX": 1.60219038E12, "maxY": 9327.0, "series": [{"data": [[1.60219062E12, 5801.0], [1.6021905E12, 5252.0], [1.60219092E12, 3448.0], [1.60219074E12, 3901.0], [1.60219038E12, 9037.0], [1.60219056E12, 5158.0], [1.60219086E12, 4008.0], [1.60219068E12, 9327.0], [1.60219044E12, 5705.0], [1.6021908E12, 3644.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60219062E12, 380.6119995069504], [1.6021905E12, 382.4969995629788], [1.60219092E12, 513.0], [1.60219074E12, 392.69699984908107], [1.60219038E12, 398.1289993607998], [1.60219056E12, 406.6059995865822], [1.60219086E12, 380.0], [1.60219068E12, 435.51999802589415], [1.60219044E12, 422.9539983057976], [1.6021908E12, 240.55199815750123]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60219062E12, 382.8281003451347], [1.6021905E12, 384.0489000582695], [1.60219092E12, 513.0], [1.60219074E12, 395.66700060367583], [1.60219038E12, 400.5419002556801], [1.60219056E12, 408.16660016536713], [1.60219086E12, 380.0], [1.60219068E12, 436.92960010528566], [1.60219044E12, 425.7908001232147], [1.6021908E12, 258.024002456665]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60219062E12, 381.64599975347517], [1.6021905E12, 383.41349978148935], [1.60219092E12, 513.0], [1.60219074E12, 393.1349992454052], [1.60219038E12, 399.4694996803999], [1.60219056E12, 407.4729997932911], [1.60219086E12, 380.0], [1.60219068E12, 436.48799986839293], [1.60219044E12, 425.2739998459816], [1.6021908E12, 247.71999692916867]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60219062E12, 367.0], [1.6021905E12, 342.0], [1.60219092E12, 513.0], [1.60219074E12, 193.0], [1.60219038E12, 387.0], [1.60219056E12, 223.0], [1.60219086E12, 354.0], [1.60219068E12, 304.0], [1.60219044E12, 225.0], [1.6021908E12, 188.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60219062E12, 1260.0], [1.6021905E12, 952.0], [1.60219092E12, 1332.5], [1.60219074E12, 1025.5], [1.60219038E12, 1253.0], [1.60219056E12, 1226.0], [1.60219086E12, 1108.5], [1.60219068E12, 1135.0], [1.60219044E12, 957.0], [1.6021908E12, 991.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219092E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 450.5, "minX": 2.0, "maxY": 2745.0, "series": [{"data": [[8.0, 1409.0], [2.0, 2745.0], [9.0, 1225.0], [10.0, 1184.5], [11.0, 1159.0], [3.0, 2267.0], [12.0, 975.0], [13.0, 964.0], [14.0, 708.5], [15.0, 708.0], [4.0, 1764.0], [16.0, 625.0], [17.0, 473.0], [18.0, 523.5], [19.0, 546.0], [5.0, 1654.0], [20.0, 501.0], [21.0, 477.5], [22.0, 480.5], [6.0, 1478.0], [24.0, 450.5], [25.0, 460.0], [26.0, 459.0], [7.0, 1451.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 548.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 450.5, "minX": 2.0, "maxY": 2742.5, "series": [{"data": [[8.0, 1406.5], [2.0, 2742.5], [9.0, 1223.0], [10.0, 1179.5], [11.0, 1159.0], [3.0, 2264.0], [12.0, 974.5], [13.0, 962.0], [14.0, 708.5], [15.0, 708.0], [4.0, 1756.5], [16.0, 624.5], [17.0, 473.0], [18.0, 523.5], [19.0, 546.0], [5.0, 1653.0], [20.0, 501.0], [21.0, 477.5], [22.0, 480.0], [6.0, 1476.0], [24.0, 450.5], [25.0, 460.0], [26.0, 459.0], [7.0, 1447.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 548.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.60219038E12, "maxY": 10.75, "series": [{"data": [[1.60219062E12, 8.6], [1.6021905E12, 10.166666666666666], [1.60219092E12, 0.5666666666666667], [1.60219074E12, 10.533333333333333], [1.60219038E12, 6.566666666666666], [1.60219056E12, 9.633333333333333], [1.60219086E12, 9.8], [1.60219068E12, 9.183333333333334], [1.60219044E12, 10.75], [1.6021908E12, 10.716666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219092E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60219038E12, "maxY": 10.75, "series": [{"data": [[1.60219062E12, 8.6], [1.6021905E12, 10.166666666666666], [1.60219092E12, 0.7666666666666667], [1.60219074E12, 10.533333333333333], [1.60219038E12, 6.366666666666666], [1.60219056E12, 9.616666666666667], [1.60219086E12, 9.8], [1.60219068E12, 9.183333333333334], [1.60219044E12, 10.75], [1.6021908E12, 10.716666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60219056E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219092E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60219038E12, "maxY": 10.75, "series": [{"data": [[1.60219062E12, 8.6], [1.6021905E12, 10.166666666666666], [1.60219092E12, 0.7666666666666667], [1.60219074E12, 10.533333333333333], [1.60219038E12, 6.366666666666666], [1.60219056E12, 9.616666666666667], [1.60219086E12, 9.8], [1.60219068E12, 9.183333333333334], [1.60219044E12, 10.75], [1.6021908E12, 10.716666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60219056E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219092E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60219038E12, "maxY": 10.75, "series": [{"data": [[1.60219062E12, 8.6], [1.6021905E12, 10.166666666666666], [1.60219092E12, 0.7666666666666667], [1.60219074E12, 10.533333333333333], [1.60219038E12, 6.366666666666666], [1.60219056E12, 9.616666666666667], [1.60219086E12, 9.8], [1.60219068E12, 9.183333333333334], [1.60219044E12, 10.75], [1.6021908E12, 10.716666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60219056E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219092E12, "title": "Total Transactions Per Second"}},
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

