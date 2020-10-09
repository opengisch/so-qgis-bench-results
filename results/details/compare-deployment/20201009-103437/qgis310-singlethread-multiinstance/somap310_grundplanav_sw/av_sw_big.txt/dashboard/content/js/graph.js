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
        data: {"result": {"minY": 198.0, "minX": 0.0, "maxY": 7539.0, "series": [{"data": [[0.0, 198.0], [0.1, 349.0], [0.2, 370.0], [0.3, 379.0], [0.4, 385.0], [0.5, 388.0], [0.6, 390.0], [0.7, 391.0], [0.8, 394.0], [0.9, 396.0], [1.0, 398.0], [1.1, 400.0], [1.2, 402.0], [1.3, 403.0], [1.4, 405.0], [1.5, 407.0], [1.6, 409.0], [1.7, 410.0], [1.8, 412.0], [1.9, 413.0], [2.0, 414.0], [2.1, 416.0], [2.2, 416.0], [2.3, 417.0], [2.4, 419.0], [2.5, 419.0], [2.6, 420.0], [2.7, 422.0], [2.8, 424.0], [2.9, 425.0], [3.0, 426.0], [3.1, 427.0], [3.2, 428.0], [3.3, 429.0], [3.4, 430.0], [3.5, 431.0], [3.6, 431.0], [3.7, 432.0], [3.8, 432.0], [3.9, 432.0], [4.0, 433.0], [4.1, 434.0], [4.2, 435.0], [4.3, 436.0], [4.4, 436.0], [4.5, 437.0], [4.6, 438.0], [4.7, 439.0], [4.8, 439.0], [4.9, 440.0], [5.0, 441.0], [5.1, 441.0], [5.2, 442.0], [5.3, 443.0], [5.4, 444.0], [5.5, 445.0], [5.6, 445.0], [5.7, 446.0], [5.8, 447.0], [5.9, 448.0], [6.0, 449.0], [6.1, 450.0], [6.2, 451.0], [6.3, 451.0], [6.4, 452.0], [6.5, 452.0], [6.6, 453.0], [6.7, 454.0], [6.8, 455.0], [6.9, 455.0], [7.0, 456.0], [7.1, 456.0], [7.2, 457.0], [7.3, 457.0], [7.4, 458.0], [7.5, 458.0], [7.6, 459.0], [7.7, 459.0], [7.8, 460.0], [7.9, 460.0], [8.0, 461.0], [8.1, 461.0], [8.2, 462.0], [8.3, 462.0], [8.4, 463.0], [8.5, 464.0], [8.6, 464.0], [8.7, 465.0], [8.8, 465.0], [8.9, 466.0], [9.0, 467.0], [9.1, 468.0], [9.2, 468.0], [9.3, 469.0], [9.4, 470.0], [9.5, 471.0], [9.6, 472.0], [9.7, 472.0], [9.8, 473.0], [9.9, 473.0], [10.0, 474.0], [10.1, 475.0], [10.2, 475.0], [10.3, 476.0], [10.4, 477.0], [10.5, 478.0], [10.6, 479.0], [10.7, 480.0], [10.8, 481.0], [10.9, 482.0], [11.0, 482.0], [11.1, 483.0], [11.2, 484.0], [11.3, 486.0], [11.4, 487.0], [11.5, 489.0], [11.6, 489.0], [11.7, 492.0], [11.8, 494.0], [11.9, 496.0], [12.0, 497.0], [12.1, 499.0], [12.2, 501.0], [12.3, 503.0], [12.4, 504.0], [12.5, 505.0], [12.6, 507.0], [12.7, 508.0], [12.8, 509.0], [12.9, 510.0], [13.0, 511.0], [13.1, 513.0], [13.2, 514.0], [13.3, 515.0], [13.4, 516.0], [13.5, 517.0], [13.6, 517.0], [13.7, 520.0], [13.8, 520.0], [13.9, 522.0], [14.0, 523.0], [14.1, 524.0], [14.2, 527.0], [14.3, 529.0], [14.4, 531.0], [14.5, 534.0], [14.6, 535.0], [14.7, 536.0], [14.8, 537.0], [14.9, 537.0], [15.0, 539.0], [15.1, 540.0], [15.2, 542.0], [15.3, 543.0], [15.4, 544.0], [15.5, 545.0], [15.6, 546.0], [15.7, 547.0], [15.8, 550.0], [15.9, 550.0], [16.0, 551.0], [16.1, 552.0], [16.2, 553.0], [16.3, 555.0], [16.4, 556.0], [16.5, 557.0], [16.6, 557.0], [16.7, 560.0], [16.8, 563.0], [16.9, 565.0], [17.0, 567.0], [17.1, 568.0], [17.2, 569.0], [17.3, 573.0], [17.4, 574.0], [17.5, 574.0], [17.6, 576.0], [17.7, 577.0], [17.8, 579.0], [17.9, 581.0], [18.0, 583.0], [18.1, 585.0], [18.2, 587.0], [18.3, 588.0], [18.4, 589.0], [18.5, 591.0], [18.6, 592.0], [18.7, 594.0], [18.8, 595.0], [18.9, 596.0], [19.0, 597.0], [19.1, 599.0], [19.2, 600.0], [19.3, 602.0], [19.4, 603.0], [19.5, 604.0], [19.6, 605.0], [19.7, 606.0], [19.8, 608.0], [19.9, 610.0], [20.0, 611.0], [20.1, 611.0], [20.2, 613.0], [20.3, 614.0], [20.4, 615.0], [20.5, 616.0], [20.6, 618.0], [20.7, 618.0], [20.8, 620.0], [20.9, 622.0], [21.0, 623.0], [21.1, 624.0], [21.2, 625.0], [21.3, 626.0], [21.4, 626.0], [21.5, 627.0], [21.6, 628.0], [21.7, 628.0], [21.8, 629.0], [21.9, 630.0], [22.0, 631.0], [22.1, 632.0], [22.2, 633.0], [22.3, 633.0], [22.4, 635.0], [22.5, 636.0], [22.6, 636.0], [22.7, 637.0], [22.8, 639.0], [22.9, 640.0], [23.0, 640.0], [23.1, 641.0], [23.2, 642.0], [23.3, 642.0], [23.4, 644.0], [23.5, 644.0], [23.6, 645.0], [23.7, 646.0], [23.8, 647.0], [23.9, 648.0], [24.0, 649.0], [24.1, 651.0], [24.2, 652.0], [24.3, 652.0], [24.4, 653.0], [24.5, 656.0], [24.6, 656.0], [24.7, 657.0], [24.8, 658.0], [24.9, 659.0], [25.0, 660.0], [25.1, 660.0], [25.2, 662.0], [25.3, 664.0], [25.4, 664.0], [25.5, 666.0], [25.6, 667.0], [25.7, 668.0], [25.8, 668.0], [25.9, 669.0], [26.0, 670.0], [26.1, 671.0], [26.2, 673.0], [26.3, 674.0], [26.4, 676.0], [26.5, 678.0], [26.6, 679.0], [26.7, 681.0], [26.8, 682.0], [26.9, 683.0], [27.0, 684.0], [27.1, 685.0], [27.2, 687.0], [27.3, 688.0], [27.4, 689.0], [27.5, 690.0], [27.6, 691.0], [27.7, 691.0], [27.8, 693.0], [27.9, 693.0], [28.0, 694.0], [28.1, 695.0], [28.2, 695.0], [28.3, 696.0], [28.4, 697.0], [28.5, 698.0], [28.6, 701.0], [28.7, 702.0], [28.8, 703.0], [28.9, 705.0], [29.0, 707.0], [29.1, 709.0], [29.2, 710.0], [29.3, 711.0], [29.4, 713.0], [29.5, 715.0], [29.6, 716.0], [29.7, 717.0], [29.8, 718.0], [29.9, 719.0], [30.0, 720.0], [30.1, 721.0], [30.2, 722.0], [30.3, 724.0], [30.4, 727.0], [30.5, 729.0], [30.6, 730.0], [30.7, 732.0], [30.8, 736.0], [30.9, 737.0], [31.0, 739.0], [31.1, 741.0], [31.2, 743.0], [31.3, 745.0], [31.4, 746.0], [31.5, 750.0], [31.6, 751.0], [31.7, 753.0], [31.8, 756.0], [31.9, 758.0], [32.0, 762.0], [32.1, 763.0], [32.2, 764.0], [32.3, 766.0], [32.4, 768.0], [32.5, 770.0], [32.6, 772.0], [32.7, 774.0], [32.8, 776.0], [32.9, 777.0], [33.0, 779.0], [33.1, 779.0], [33.2, 781.0], [33.3, 785.0], [33.4, 786.0], [33.5, 788.0], [33.6, 791.0], [33.7, 793.0], [33.8, 794.0], [33.9, 795.0], [34.0, 795.0], [34.1, 797.0], [34.2, 798.0], [34.3, 799.0], [34.4, 800.0], [34.5, 802.0], [34.6, 805.0], [34.7, 808.0], [34.8, 809.0], [34.9, 811.0], [35.0, 813.0], [35.1, 815.0], [35.2, 816.0], [35.3, 819.0], [35.4, 820.0], [35.5, 822.0], [35.6, 825.0], [35.7, 827.0], [35.8, 828.0], [35.9, 830.0], [36.0, 832.0], [36.1, 834.0], [36.2, 836.0], [36.3, 837.0], [36.4, 839.0], [36.5, 840.0], [36.6, 842.0], [36.7, 846.0], [36.8, 847.0], [36.9, 849.0], [37.0, 853.0], [37.1, 856.0], [37.2, 857.0], [37.3, 860.0], [37.4, 862.0], [37.5, 864.0], [37.6, 865.0], [37.7, 866.0], [37.8, 868.0], [37.9, 870.0], [38.0, 872.0], [38.1, 873.0], [38.2, 877.0], [38.3, 880.0], [38.4, 881.0], [38.5, 883.0], [38.6, 886.0], [38.7, 888.0], [38.8, 890.0], [38.9, 891.0], [39.0, 892.0], [39.1, 895.0], [39.2, 897.0], [39.3, 899.0], [39.4, 900.0], [39.5, 902.0], [39.6, 903.0], [39.7, 904.0], [39.8, 905.0], [39.9, 907.0], [40.0, 909.0], [40.1, 911.0], [40.2, 912.0], [40.3, 914.0], [40.4, 918.0], [40.5, 920.0], [40.6, 921.0], [40.7, 922.0], [40.8, 925.0], [40.9, 927.0], [41.0, 929.0], [41.1, 930.0], [41.2, 931.0], [41.3, 933.0], [41.4, 935.0], [41.5, 936.0], [41.6, 936.0], [41.7, 938.0], [41.8, 941.0], [41.9, 943.0], [42.0, 945.0], [42.1, 945.0], [42.2, 947.0], [42.3, 950.0], [42.4, 952.0], [42.5, 953.0], [42.6, 955.0], [42.7, 958.0], [42.8, 959.0], [42.9, 960.0], [43.0, 962.0], [43.1, 966.0], [43.2, 967.0], [43.3, 968.0], [43.4, 970.0], [43.5, 971.0], [43.6, 972.0], [43.7, 973.0], [43.8, 976.0], [43.9, 978.0], [44.0, 980.0], [44.1, 983.0], [44.2, 986.0], [44.3, 987.0], [44.4, 988.0], [44.5, 989.0], [44.6, 990.0], [44.7, 992.0], [44.8, 994.0], [44.9, 995.0], [45.0, 996.0], [45.1, 996.0], [45.2, 998.0], [45.3, 999.0], [45.4, 1000.0], [45.5, 1002.0], [45.6, 1004.0], [45.7, 1005.0], [45.8, 1007.0], [45.9, 1008.0], [46.0, 1009.0], [46.1, 1012.0], [46.2, 1014.0], [46.3, 1016.0], [46.4, 1018.0], [46.5, 1019.0], [46.6, 1023.0], [46.7, 1024.0], [46.8, 1026.0], [46.9, 1030.0], [47.0, 1031.0], [47.1, 1033.0], [47.2, 1034.0], [47.3, 1036.0], [47.4, 1036.0], [47.5, 1039.0], [47.6, 1042.0], [47.7, 1044.0], [47.8, 1045.0], [47.9, 1046.0], [48.0, 1049.0], [48.1, 1051.0], [48.2, 1053.0], [48.3, 1055.0], [48.4, 1055.0], [48.5, 1056.0], [48.6, 1058.0], [48.7, 1060.0], [48.8, 1062.0], [48.9, 1064.0], [49.0, 1066.0], [49.1, 1067.0], [49.2, 1068.0], [49.3, 1071.0], [49.4, 1073.0], [49.5, 1073.0], [49.6, 1075.0], [49.7, 1077.0], [49.8, 1079.0], [49.9, 1081.0], [50.0, 1083.0], [50.1, 1084.0], [50.2, 1085.0], [50.3, 1089.0], [50.4, 1091.0], [50.5, 1091.0], [50.6, 1092.0], [50.7, 1093.0], [50.8, 1095.0], [50.9, 1097.0], [51.0, 1100.0], [51.1, 1101.0], [51.2, 1102.0], [51.3, 1105.0], [51.4, 1107.0], [51.5, 1108.0], [51.6, 1110.0], [51.7, 1111.0], [51.8, 1113.0], [51.9, 1114.0], [52.0, 1115.0], [52.1, 1119.0], [52.2, 1121.0], [52.3, 1124.0], [52.4, 1126.0], [52.5, 1127.0], [52.6, 1129.0], [52.7, 1130.0], [52.8, 1132.0], [52.9, 1134.0], [53.0, 1135.0], [53.1, 1138.0], [53.2, 1140.0], [53.3, 1142.0], [53.4, 1143.0], [53.5, 1144.0], [53.6, 1146.0], [53.7, 1148.0], [53.8, 1152.0], [53.9, 1153.0], [54.0, 1156.0], [54.1, 1159.0], [54.2, 1160.0], [54.3, 1162.0], [54.4, 1164.0], [54.5, 1166.0], [54.6, 1168.0], [54.7, 1170.0], [54.8, 1171.0], [54.9, 1174.0], [55.0, 1175.0], [55.1, 1177.0], [55.2, 1179.0], [55.3, 1181.0], [55.4, 1184.0], [55.5, 1186.0], [55.6, 1188.0], [55.7, 1191.0], [55.8, 1193.0], [55.9, 1197.0], [56.0, 1197.0], [56.1, 1198.0], [56.2, 1203.0], [56.3, 1204.0], [56.4, 1207.0], [56.5, 1209.0], [56.6, 1212.0], [56.7, 1212.0], [56.8, 1215.0], [56.9, 1216.0], [57.0, 1218.0], [57.1, 1219.0], [57.2, 1221.0], [57.3, 1223.0], [57.4, 1225.0], [57.5, 1227.0], [57.6, 1230.0], [57.7, 1232.0], [57.8, 1234.0], [57.9, 1236.0], [58.0, 1238.0], [58.1, 1239.0], [58.2, 1243.0], [58.3, 1244.0], [58.4, 1247.0], [58.5, 1248.0], [58.6, 1249.0], [58.7, 1251.0], [58.8, 1252.0], [58.9, 1257.0], [59.0, 1259.0], [59.1, 1262.0], [59.2, 1267.0], [59.3, 1271.0], [59.4, 1272.0], [59.5, 1274.0], [59.6, 1276.0], [59.7, 1279.0], [59.8, 1281.0], [59.9, 1283.0], [60.0, 1284.0], [60.1, 1287.0], [60.2, 1292.0], [60.3, 1293.0], [60.4, 1296.0], [60.5, 1298.0], [60.6, 1301.0], [60.7, 1303.0], [60.8, 1305.0], [60.9, 1307.0], [61.0, 1308.0], [61.1, 1310.0], [61.2, 1311.0], [61.3, 1312.0], [61.4, 1315.0], [61.5, 1317.0], [61.6, 1319.0], [61.7, 1320.0], [61.8, 1322.0], [61.9, 1323.0], [62.0, 1326.0], [62.1, 1328.0], [62.2, 1330.0], [62.3, 1335.0], [62.4, 1339.0], [62.5, 1340.0], [62.6, 1343.0], [62.7, 1344.0], [62.8, 1345.0], [62.9, 1348.0], [63.0, 1351.0], [63.1, 1353.0], [63.2, 1354.0], [63.3, 1358.0], [63.4, 1362.0], [63.5, 1363.0], [63.6, 1366.0], [63.7, 1367.0], [63.8, 1370.0], [63.9, 1373.0], [64.0, 1376.0], [64.1, 1378.0], [64.2, 1380.0], [64.3, 1383.0], [64.4, 1385.0], [64.5, 1388.0], [64.6, 1389.0], [64.7, 1390.0], [64.8, 1393.0], [64.9, 1395.0], [65.0, 1398.0], [65.1, 1401.0], [65.2, 1403.0], [65.3, 1404.0], [65.4, 1406.0], [65.5, 1410.0], [65.6, 1413.0], [65.7, 1414.0], [65.8, 1415.0], [65.9, 1417.0], [66.0, 1420.0], [66.1, 1422.0], [66.2, 1423.0], [66.3, 1425.0], [66.4, 1427.0], [66.5, 1430.0], [66.6, 1433.0], [66.7, 1435.0], [66.8, 1436.0], [66.9, 1437.0], [67.0, 1441.0], [67.1, 1442.0], [67.2, 1444.0], [67.3, 1446.0], [67.4, 1449.0], [67.5, 1450.0], [67.6, 1452.0], [67.7, 1453.0], [67.8, 1455.0], [67.9, 1459.0], [68.0, 1462.0], [68.1, 1465.0], [68.2, 1467.0], [68.3, 1468.0], [68.4, 1471.0], [68.5, 1474.0], [68.6, 1477.0], [68.7, 1479.0], [68.8, 1480.0], [68.9, 1481.0], [69.0, 1482.0], [69.1, 1484.0], [69.2, 1486.0], [69.3, 1487.0], [69.4, 1489.0], [69.5, 1490.0], [69.6, 1491.0], [69.7, 1493.0], [69.8, 1494.0], [69.9, 1495.0], [70.0, 1496.0], [70.1, 1498.0], [70.2, 1500.0], [70.3, 1502.0], [70.4, 1503.0], [70.5, 1505.0], [70.6, 1506.0], [70.7, 1508.0], [70.8, 1509.0], [70.9, 1512.0], [71.0, 1514.0], [71.1, 1515.0], [71.2, 1517.0], [71.3, 1518.0], [71.4, 1520.0], [71.5, 1521.0], [71.6, 1523.0], [71.7, 1525.0], [71.8, 1527.0], [71.9, 1528.0], [72.0, 1532.0], [72.1, 1533.0], [72.2, 1535.0], [72.3, 1539.0], [72.4, 1540.0], [72.5, 1541.0], [72.6, 1543.0], [72.7, 1545.0], [72.8, 1547.0], [72.9, 1548.0], [73.0, 1550.0], [73.1, 1551.0], [73.2, 1553.0], [73.3, 1554.0], [73.4, 1555.0], [73.5, 1556.0], [73.6, 1558.0], [73.7, 1560.0], [73.8, 1563.0], [73.9, 1565.0], [74.0, 1566.0], [74.1, 1568.0], [74.2, 1569.0], [74.3, 1571.0], [74.4, 1574.0], [74.5, 1575.0], [74.6, 1576.0], [74.7, 1578.0], [74.8, 1582.0], [74.9, 1585.0], [75.0, 1587.0], [75.1, 1589.0], [75.2, 1591.0], [75.3, 1592.0], [75.4, 1593.0], [75.5, 1595.0], [75.6, 1597.0], [75.7, 1599.0], [75.8, 1600.0], [75.9, 1603.0], [76.0, 1604.0], [76.1, 1605.0], [76.2, 1607.0], [76.3, 1608.0], [76.4, 1610.0], [76.5, 1612.0], [76.6, 1612.0], [76.7, 1615.0], [76.8, 1617.0], [76.9, 1619.0], [77.0, 1621.0], [77.1, 1622.0], [77.2, 1623.0], [77.3, 1624.0], [77.4, 1625.0], [77.5, 1629.0], [77.6, 1630.0], [77.7, 1633.0], [77.8, 1636.0], [77.9, 1637.0], [78.0, 1640.0], [78.1, 1643.0], [78.2, 1644.0], [78.3, 1646.0], [78.4, 1649.0], [78.5, 1651.0], [78.6, 1653.0], [78.7, 1657.0], [78.8, 1661.0], [78.9, 1663.0], [79.0, 1665.0], [79.1, 1666.0], [79.2, 1668.0], [79.3, 1674.0], [79.4, 1676.0], [79.5, 1677.0], [79.6, 1682.0], [79.7, 1684.0], [79.8, 1687.0], [79.9, 1689.0], [80.0, 1690.0], [80.1, 1692.0], [80.2, 1695.0], [80.3, 1697.0], [80.4, 1699.0], [80.5, 1699.0], [80.6, 1701.0], [80.7, 1704.0], [80.8, 1706.0], [80.9, 1708.0], [81.0, 1710.0], [81.1, 1711.0], [81.2, 1717.0], [81.3, 1720.0], [81.4, 1722.0], [81.5, 1724.0], [81.6, 1727.0], [81.7, 1730.0], [81.8, 1732.0], [81.9, 1734.0], [82.0, 1737.0], [82.1, 1738.0], [82.2, 1741.0], [82.3, 1744.0], [82.4, 1747.0], [82.5, 1750.0], [82.6, 1752.0], [82.7, 1756.0], [82.8, 1758.0], [82.9, 1763.0], [83.0, 1764.0], [83.1, 1768.0], [83.2, 1769.0], [83.3, 1771.0], [83.4, 1774.0], [83.5, 1776.0], [83.6, 1779.0], [83.7, 1784.0], [83.8, 1788.0], [83.9, 1791.0], [84.0, 1796.0], [84.1, 1797.0], [84.2, 1799.0], [84.3, 1804.0], [84.4, 1807.0], [84.5, 1810.0], [84.6, 1814.0], [84.7, 1816.0], [84.8, 1818.0], [84.9, 1821.0], [85.0, 1827.0], [85.1, 1831.0], [85.2, 1835.0], [85.3, 1839.0], [85.4, 1844.0], [85.5, 1848.0], [85.6, 1854.0], [85.7, 1857.0], [85.8, 1862.0], [85.9, 1867.0], [86.0, 1870.0], [86.1, 1873.0], [86.2, 1877.0], [86.3, 1882.0], [86.4, 1889.0], [86.5, 1892.0], [86.6, 1896.0], [86.7, 1903.0], [86.8, 1905.0], [86.9, 1908.0], [87.0, 1916.0], [87.1, 1920.0], [87.2, 1923.0], [87.3, 1928.0], [87.4, 1935.0], [87.5, 1941.0], [87.6, 1944.0], [87.7, 1946.0], [87.8, 1951.0], [87.9, 1959.0], [88.0, 1964.0], [88.1, 1969.0], [88.2, 1973.0], [88.3, 1979.0], [88.4, 1985.0], [88.5, 1994.0], [88.6, 1999.0], [88.7, 2004.0], [88.8, 2010.0], [88.9, 2015.0], [89.0, 2022.0], [89.1, 2029.0], [89.2, 2036.0], [89.3, 2042.0], [89.4, 2048.0], [89.5, 2055.0], [89.6, 2064.0], [89.7, 2071.0], [89.8, 2075.0], [89.9, 2081.0], [90.0, 2083.0], [90.1, 2092.0], [90.2, 2098.0], [90.3, 2102.0], [90.4, 2110.0], [90.5, 2115.0], [90.6, 2124.0], [90.7, 2133.0], [90.8, 2138.0], [90.9, 2151.0], [91.0, 2160.0], [91.1, 2167.0], [91.2, 2175.0], [91.3, 2179.0], [91.4, 2187.0], [91.5, 2193.0], [91.6, 2208.0], [91.7, 2221.0], [91.8, 2229.0], [91.9, 2238.0], [92.0, 2248.0], [92.1, 2258.0], [92.2, 2263.0], [92.3, 2272.0], [92.4, 2278.0], [92.5, 2280.0], [92.6, 2287.0], [92.7, 2296.0], [92.8, 2306.0], [92.9, 2325.0], [93.0, 2331.0], [93.1, 2339.0], [93.2, 2354.0], [93.3, 2359.0], [93.4, 2370.0], [93.5, 2375.0], [93.6, 2393.0], [93.7, 2401.0], [93.8, 2410.0], [93.9, 2423.0], [94.0, 2440.0], [94.1, 2450.0], [94.2, 2456.0], [94.3, 2478.0], [94.4, 2483.0], [94.5, 2499.0], [94.6, 2509.0], [94.7, 2518.0], [94.8, 2526.0], [94.9, 2532.0], [95.0, 2543.0], [95.1, 2558.0], [95.2, 2565.0], [95.3, 2573.0], [95.4, 2593.0], [95.5, 2607.0], [95.6, 2616.0], [95.7, 2626.0], [95.8, 2639.0], [95.9, 2651.0], [96.0, 2665.0], [96.1, 2677.0], [96.2, 2687.0], [96.3, 2710.0], [96.4, 2721.0], [96.5, 2743.0], [96.6, 2753.0], [96.7, 2772.0], [96.8, 2786.0], [96.9, 2805.0], [97.0, 2814.0], [97.1, 2839.0], [97.2, 2853.0], [97.3, 2871.0], [97.4, 2890.0], [97.5, 2908.0], [97.6, 2936.0], [97.7, 2977.0], [97.8, 3018.0], [97.9, 3043.0], [98.0, 3084.0], [98.1, 3123.0], [98.2, 3142.0], [98.3, 3187.0], [98.4, 3232.0], [98.5, 3287.0], [98.6, 3350.0], [98.7, 3394.0], [98.8, 3453.0], [98.9, 3494.0], [99.0, 3544.0], [99.1, 3615.0], [99.2, 3695.0], [99.3, 3805.0], [99.4, 4035.0], [99.5, 4239.0], [99.6, 4488.0], [99.7, 4933.0], [99.8, 5542.0], [99.9, 6129.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 574.0, "series": [{"data": [[600.0, 488.0], [700.0, 303.0], [800.0, 261.0], [900.0, 309.0], [1000.0, 291.0], [1100.0, 269.0], [1200.0, 229.0], [1300.0, 233.0], [1400.0, 267.0], [1500.0, 290.0], [1600.0, 247.0], [1700.0, 191.0], [1800.0, 128.0], [1900.0, 102.0], [2000.0, 84.0], [2100.0, 66.0], [2200.0, 65.0], [2300.0, 46.0], [2400.0, 44.0], [2500.0, 50.0], [2600.0, 39.0], [2700.0, 34.0], [2800.0, 29.0], [2900.0, 17.0], [3000.0, 15.0], [3100.0, 14.0], [3300.0, 10.0], [3200.0, 10.0], [3400.0, 11.0], [3500.0, 9.0], [3600.0, 6.0], [3700.0, 4.0], [3800.0, 5.0], [4000.0, 1.0], [4100.0, 3.0], [4200.0, 4.0], [4300.0, 3.0], [4400.0, 1.0], [4500.0, 1.0], [4700.0, 2.0], [5000.0, 1.0], [4900.0, 2.0], [5100.0, 1.0], [5300.0, 1.0], [5500.0, 2.0], [5400.0, 1.0], [5800.0, 1.0], [5700.0, 2.0], [6100.0, 2.0], [6300.0, 1.0], [6500.0, 1.0], [7000.0, 1.0], [7500.0, 1.0], [100.0, 1.0], [200.0, 3.0], [300.0, 52.0], [400.0, 574.0], [500.0, 363.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3013.0, "series": [{"data": [[0.0, 633.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3013.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1544.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.71914893617021, "minX": 1.60223994E12, "maxY": 12.0, "series": [{"data": [[1.60224024E12, 12.0], [1.60223994E12, 12.0], [1.60224042E12, 12.0], [1.60224012E12, 12.0], [1.6022403E12, 12.0], [1.60224E12, 12.0], [1.60224048E12, 11.71914893617021], [1.60224018E12, 12.0], [1.60224036E12, 12.0], [1.60224006E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224048E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 641.0, "minX": 1.0, "maxY": 3494.0, "series": [{"data": [[8.0, 2502.0], [4.0, 1561.0], [2.0, 1130.0], [1.0, 3494.0], [9.0, 641.0], [10.0, 1247.0], [5.0, 857.0], [11.0, 1401.0], [12.0, 1221.1947876447896], [6.0, 2011.0], [3.0, 2261.0], [7.0, 852.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987285686765556, 1222.066268541709]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1025.25, "minX": 1.60223994E12, "maxY": 3307812.3666666667, "series": [{"data": [[1.60224024E12, 2698112.05], [1.60223994E12, 1033482.1166666667], [1.60224042E12, 2643839.95], [1.60224012E12, 3083970.066666667], [1.6022403E12, 2140311.1166666667], [1.60224E12, 2363587.716666667], [1.60224048E12, 1194087.6666666667], [1.60224018E12, 2706240.2333333334], [1.60224036E12, 3307812.3666666667], [1.60224006E12, 2801343.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224024E12, 3881.133333333333], [1.60223994E12, 1025.25], [1.60224042E12, 4741.666666666667], [1.60224012E12, 4691.3], [1.6022403E12, 4550.933333333333], [1.60224E12, 4016.15], [1.60224048E12, 1764.85], [1.60224018E12, 4430.483333333334], [1.60224036E12, 4755.433333333333], [1.60224006E12, 4726.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224048E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1128.0282131661427, "minX": 1.60223994E12, "maxY": 1647.0362318840575, "series": [{"data": [[1.60224024E12, 1345.7992565055772], [1.60223994E12, 1647.0362318840575], [1.60224042E12, 1144.4887820512809], [1.60224012E12, 1157.205169628434], [1.6022403E12, 1150.3945686900954], [1.60224E12, 1303.7741935483868], [1.60224048E12, 1507.9148936170213], [1.60224018E12, 1224.908163265306], [1.60224036E12, 1148.3301435406686], [1.60224006E12, 1128.0282131661427]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224048E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1126.0846394984333, "minX": 1.60223994E12, "maxY": 1643.7826086956522, "series": [{"data": [[1.60224024E12, 1343.5706319702601], [1.60223994E12, 1643.7826086956522], [1.60224042E12, 1142.9743589743573], [1.60224012E12, 1155.0129240710814], [1.6022403E12, 1149.1118210862626], [1.60224E12, 1301.9982078853059], [1.60224048E12, 1506.0553191489366], [1.60224018E12, 1222.9285714285716], [1.60224036E12, 1146.3397129186615], [1.60224006E12, 1126.0846394984333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224048E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60223994E12, "maxY": 0.9057971014492766, "series": [{"data": [[1.60224024E12, 0.046468401486988824], [1.60223994E12, 0.9057971014492766], [1.60224042E12, 0.020833333333333325], [1.60224012E12, 0.019386106623586426], [1.6022403E12, 0.023961661341853045], [1.60224E12, 0.046594982078853014], [1.60224048E12, 0.0], [1.60224018E12, 0.018707482993197265], [1.60224036E12, 0.02232854864433812], [1.60224006E12, 0.02351097178683387]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224048E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 198.0, "minX": 1.60223994E12, "maxY": 7539.0, "series": [{"data": [[1.60224024E12, 7539.0], [1.60223994E12, 4188.0], [1.60224042E12, 3797.0], [1.60224012E12, 4523.0], [1.6022403E12, 4333.0], [1.60224E12, 5864.0], [1.60224048E12, 4390.0], [1.60224018E12, 7067.0], [1.60224036E12, 3747.0], [1.60224006E12, 4266.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224024E12, 397.70199974298475], [1.60223994E12, 480.5619979453087], [1.60224042E12, 398.0], [1.60224012E12, 377.1419997048378], [1.6022403E12, 391.64299985051156], [1.60224E12, 420.2169990670681], [1.60224048E12, 440.85199870586393], [1.60224018E12, 388.6019997191429], [1.60224036E12, 386.0], [1.60224006E12, 409.25299954295156]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224024E12, 398.6722001028061], [1.60223994E12, 488.31820082187653], [1.60224042E12, 398.9375002980232], [1.60224012E12, 378.76860035419463], [1.6022403E12, 392.4146001195908], [1.60224E12, 423.7387003731728], [1.60224048E12, 445.7372005176544], [1.60224018E12, 389.6622001123428], [1.60224036E12, 388.17200059890746], [1.60224006E12, 411.3044002437592]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224024E12, 398.24099987149236], [1.60223994E12, 484.8709989726543], [1.60224042E12, 398.0], [1.60224012E12, 377.7609998524189], [1.6022403E12, 391.9564999252558], [1.60224E12, 422.173499533534], [1.60224048E12, 443.56599935293195], [1.60224018E12, 389.19099985957143], [1.60224036E12, 386.0], [1.60224006E12, 410.28199969530107]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224024E12, 388.0], [1.60223994E12, 465.0], [1.60224042E12, 349.0], [1.60224012E12, 198.0], [1.6022403E12, 228.0], [1.60224E12, 362.0], [1.60224048E12, 427.0], [1.60224018E12, 374.0], [1.60224036E12, 369.0], [1.60224006E12, 310.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224024E12, 1212.0], [1.60223994E12, 1543.5], [1.60224042E12, 999.5], [1.60224012E12, 1009.0], [1.6022403E12, 969.5], [1.60224E12, 1101.5], [1.60224048E12, 1412.0], [1.60224018E12, 1113.0], [1.60224036E12, 1005.0], [1.60224006E12, 888.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224048E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 441.0, "minX": 1.0, "maxY": 3055.0, "series": [{"data": [[2.0, 1804.0], [3.0, 1555.0], [4.0, 1667.5], [5.0, 1584.0], [6.0, 1525.5], [7.0, 1499.0], [8.0, 1306.0], [9.0, 1185.0], [10.0, 1220.5], [11.0, 1161.0], [12.0, 995.0], [13.0, 857.0], [14.0, 817.0], [15.0, 707.0], [16.0, 641.5], [1.0, 3055.0], [17.0, 547.0], [18.0, 516.5], [19.0, 464.5], [20.0, 463.0], [21.0, 468.0], [22.0, 460.0], [23.0, 505.0], [24.0, 476.0], [26.0, 441.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 730.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 441.0, "minX": 1.0, "maxY": 3043.0, "series": [{"data": [[2.0, 1803.0], [3.0, 1552.5], [4.0, 1663.0], [5.0, 1577.0], [6.0, 1520.5], [7.0, 1495.0], [8.0, 1303.0], [9.0, 1184.0], [10.0, 1220.5], [11.0, 1160.0], [12.0, 993.5], [13.0, 857.0], [14.0, 814.5], [15.0, 706.0], [16.0, 641.0], [1.0, 3043.0], [17.0, 547.0], [18.0, 516.5], [19.0, 464.5], [20.0, 463.0], [21.0, 468.0], [22.0, 460.0], [23.0, 505.0], [24.0, 476.0], [26.0, 441.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 730.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.60223994E12, "maxY": 10.633333333333333, "series": [{"data": [[1.60224024E12, 8.966666666666667], [1.60223994E12, 2.5], [1.60224042E12, 10.4], [1.60224012E12, 10.316666666666666], [1.6022403E12, 10.433333333333334], [1.60224E12, 9.3], [1.60224048E12, 3.716666666666667], [1.60224018E12, 9.8], [1.60224036E12, 10.45], [1.60224006E12, 10.633333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224048E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223994E12, "maxY": 10.633333333333333, "series": [{"data": [[1.60224024E12, 8.966666666666667], [1.60223994E12, 2.3], [1.60224042E12, 10.4], [1.60224012E12, 10.3], [1.6022403E12, 10.433333333333334], [1.60224E12, 9.3], [1.60224048E12, 3.9166666666666665], [1.60224018E12, 9.8], [1.60224036E12, 10.45], [1.60224006E12, 10.633333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60224012E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224048E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223994E12, "maxY": 10.633333333333333, "series": [{"data": [[1.60224024E12, 8.966666666666667], [1.60223994E12, 2.3], [1.60224042E12, 10.4], [1.60224012E12, 10.3], [1.6022403E12, 10.433333333333334], [1.60224E12, 9.3], [1.60224048E12, 3.9166666666666665], [1.60224018E12, 9.8], [1.60224036E12, 10.45], [1.60224006E12, 10.633333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60224012E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224048E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223994E12, "maxY": 10.633333333333333, "series": [{"data": [[1.60224024E12, 8.966666666666667], [1.60223994E12, 2.3], [1.60224042E12, 10.4], [1.60224012E12, 10.3], [1.6022403E12, 10.433333333333334], [1.60224E12, 9.3], [1.60224048E12, 3.9166666666666665], [1.60224018E12, 9.8], [1.60224036E12, 10.45], [1.60224006E12, 10.633333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60224012E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224048E12, "title": "Total Transactions Per Second"}},
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

