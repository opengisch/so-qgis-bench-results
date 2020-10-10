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
        data: {"result": {"minY": 208.0, "minX": 0.0, "maxY": 6860.0, "series": [{"data": [[0.0, 208.0], [0.1, 279.0], [0.2, 369.0], [0.3, 376.0], [0.4, 380.0], [0.5, 383.0], [0.6, 385.0], [0.7, 388.0], [0.8, 389.0], [0.9, 390.0], [1.0, 392.0], [1.1, 394.0], [1.2, 396.0], [1.3, 397.0], [1.4, 398.0], [1.5, 399.0], [1.6, 402.0], [1.7, 403.0], [1.8, 405.0], [1.9, 406.0], [2.0, 407.0], [2.1, 408.0], [2.2, 410.0], [2.3, 411.0], [2.4, 412.0], [2.5, 413.0], [2.6, 414.0], [2.7, 415.0], [2.8, 417.0], [2.9, 417.0], [3.0, 418.0], [3.1, 419.0], [3.2, 421.0], [3.3, 422.0], [3.4, 423.0], [3.5, 424.0], [3.6, 425.0], [3.7, 425.0], [3.8, 426.0], [3.9, 427.0], [4.0, 428.0], [4.1, 428.0], [4.2, 429.0], [4.3, 430.0], [4.4, 431.0], [4.5, 431.0], [4.6, 431.0], [4.7, 432.0], [4.8, 434.0], [4.9, 434.0], [5.0, 435.0], [5.1, 435.0], [5.2, 436.0], [5.3, 437.0], [5.4, 438.0], [5.5, 439.0], [5.6, 439.0], [5.7, 440.0], [5.8, 441.0], [5.9, 441.0], [6.0, 442.0], [6.1, 442.0], [6.2, 443.0], [6.3, 443.0], [6.4, 444.0], [6.5, 445.0], [6.6, 445.0], [6.7, 446.0], [6.8, 446.0], [6.9, 447.0], [7.0, 447.0], [7.1, 448.0], [7.2, 448.0], [7.3, 449.0], [7.4, 450.0], [7.5, 450.0], [7.6, 451.0], [7.7, 452.0], [7.8, 453.0], [7.9, 454.0], [8.0, 455.0], [8.1, 456.0], [8.2, 456.0], [8.3, 457.0], [8.4, 458.0], [8.5, 459.0], [8.6, 459.0], [8.7, 459.0], [8.8, 460.0], [8.9, 461.0], [9.0, 462.0], [9.1, 463.0], [9.2, 464.0], [9.3, 465.0], [9.4, 466.0], [9.5, 467.0], [9.6, 468.0], [9.7, 468.0], [9.8, 469.0], [9.9, 470.0], [10.0, 471.0], [10.1, 472.0], [10.2, 473.0], [10.3, 474.0], [10.4, 475.0], [10.5, 476.0], [10.6, 477.0], [10.7, 477.0], [10.8, 479.0], [10.9, 479.0], [11.0, 483.0], [11.1, 483.0], [11.2, 485.0], [11.3, 486.0], [11.4, 487.0], [11.5, 488.0], [11.6, 490.0], [11.7, 491.0], [11.8, 492.0], [11.9, 493.0], [12.0, 495.0], [12.1, 496.0], [12.2, 497.0], [12.3, 498.0], [12.4, 499.0], [12.5, 500.0], [12.6, 501.0], [12.7, 502.0], [12.8, 503.0], [12.9, 506.0], [13.0, 508.0], [13.1, 510.0], [13.2, 512.0], [13.3, 513.0], [13.4, 514.0], [13.5, 515.0], [13.6, 516.0], [13.7, 517.0], [13.8, 520.0], [13.9, 521.0], [14.0, 522.0], [14.1, 524.0], [14.2, 525.0], [14.3, 527.0], [14.4, 528.0], [14.5, 528.0], [14.6, 528.0], [14.7, 529.0], [14.8, 530.0], [14.9, 531.0], [15.0, 533.0], [15.1, 534.0], [15.2, 537.0], [15.3, 538.0], [15.4, 539.0], [15.5, 540.0], [15.6, 540.0], [15.7, 542.0], [15.8, 543.0], [15.9, 544.0], [16.0, 545.0], [16.1, 547.0], [16.2, 547.0], [16.3, 549.0], [16.4, 550.0], [16.5, 551.0], [16.6, 551.0], [16.7, 554.0], [16.8, 555.0], [16.9, 556.0], [17.0, 556.0], [17.1, 557.0], [17.2, 558.0], [17.3, 559.0], [17.4, 560.0], [17.5, 561.0], [17.6, 562.0], [17.7, 563.0], [17.8, 564.0], [17.9, 564.0], [18.0, 566.0], [18.1, 567.0], [18.2, 567.0], [18.3, 568.0], [18.4, 570.0], [18.5, 571.0], [18.6, 572.0], [18.7, 575.0], [18.8, 577.0], [18.9, 577.0], [19.0, 579.0], [19.1, 581.0], [19.2, 582.0], [19.3, 583.0], [19.4, 584.0], [19.5, 585.0], [19.6, 586.0], [19.7, 588.0], [19.8, 589.0], [19.9, 591.0], [20.0, 592.0], [20.1, 593.0], [20.2, 594.0], [20.3, 596.0], [20.4, 597.0], [20.5, 599.0], [20.6, 600.0], [20.7, 601.0], [20.8, 602.0], [20.9, 603.0], [21.0, 604.0], [21.1, 607.0], [21.2, 607.0], [21.3, 609.0], [21.4, 610.0], [21.5, 611.0], [21.6, 614.0], [21.7, 615.0], [21.8, 616.0], [21.9, 618.0], [22.0, 619.0], [22.1, 619.0], [22.2, 621.0], [22.3, 622.0], [22.4, 623.0], [22.5, 625.0], [22.6, 627.0], [22.7, 628.0], [22.8, 629.0], [22.9, 630.0], [23.0, 632.0], [23.1, 633.0], [23.2, 634.0], [23.3, 635.0], [23.4, 637.0], [23.5, 638.0], [23.6, 638.0], [23.7, 639.0], [23.8, 640.0], [23.9, 640.0], [24.0, 641.0], [24.1, 642.0], [24.2, 643.0], [24.3, 644.0], [24.4, 645.0], [24.5, 646.0], [24.6, 647.0], [24.7, 649.0], [24.8, 650.0], [24.9, 650.0], [25.0, 652.0], [25.1, 653.0], [25.2, 655.0], [25.3, 656.0], [25.4, 657.0], [25.5, 658.0], [25.6, 659.0], [25.7, 661.0], [25.8, 662.0], [25.9, 663.0], [26.0, 665.0], [26.1, 667.0], [26.2, 668.0], [26.3, 670.0], [26.4, 671.0], [26.5, 671.0], [26.6, 673.0], [26.7, 674.0], [26.8, 676.0], [26.9, 677.0], [27.0, 678.0], [27.1, 680.0], [27.2, 680.0], [27.3, 682.0], [27.4, 685.0], [27.5, 685.0], [27.6, 687.0], [27.7, 689.0], [27.8, 690.0], [27.9, 691.0], [28.0, 692.0], [28.1, 693.0], [28.2, 694.0], [28.3, 696.0], [28.4, 698.0], [28.5, 701.0], [28.6, 702.0], [28.7, 703.0], [28.8, 704.0], [28.9, 705.0], [29.0, 707.0], [29.1, 708.0], [29.2, 709.0], [29.3, 711.0], [29.4, 714.0], [29.5, 714.0], [29.6, 715.0], [29.7, 717.0], [29.8, 718.0], [29.9, 720.0], [30.0, 722.0], [30.1, 724.0], [30.2, 725.0], [30.3, 726.0], [30.4, 727.0], [30.5, 728.0], [30.6, 731.0], [30.7, 731.0], [30.8, 733.0], [30.9, 736.0], [31.0, 737.0], [31.1, 739.0], [31.2, 741.0], [31.3, 742.0], [31.4, 743.0], [31.5, 748.0], [31.6, 749.0], [31.7, 750.0], [31.8, 752.0], [31.9, 753.0], [32.0, 755.0], [32.1, 756.0], [32.2, 759.0], [32.3, 761.0], [32.4, 762.0], [32.5, 764.0], [32.6, 766.0], [32.7, 767.0], [32.8, 769.0], [32.9, 771.0], [33.0, 772.0], [33.1, 774.0], [33.2, 775.0], [33.3, 777.0], [33.4, 779.0], [33.5, 780.0], [33.6, 783.0], [33.7, 785.0], [33.8, 787.0], [33.9, 789.0], [34.0, 790.0], [34.1, 791.0], [34.2, 793.0], [34.3, 794.0], [34.4, 795.0], [34.5, 796.0], [34.6, 798.0], [34.7, 798.0], [34.8, 803.0], [34.9, 805.0], [35.0, 807.0], [35.1, 810.0], [35.2, 812.0], [35.3, 814.0], [35.4, 817.0], [35.5, 817.0], [35.6, 820.0], [35.7, 823.0], [35.8, 826.0], [35.9, 827.0], [36.0, 829.0], [36.1, 830.0], [36.2, 833.0], [36.3, 835.0], [36.4, 838.0], [36.5, 841.0], [36.6, 843.0], [36.7, 846.0], [36.8, 847.0], [36.9, 850.0], [37.0, 853.0], [37.1, 854.0], [37.2, 856.0], [37.3, 857.0], [37.4, 858.0], [37.5, 860.0], [37.6, 862.0], [37.7, 864.0], [37.8, 865.0], [37.9, 867.0], [38.0, 870.0], [38.1, 871.0], [38.2, 873.0], [38.3, 875.0], [38.4, 876.0], [38.5, 877.0], [38.6, 878.0], [38.7, 880.0], [38.8, 883.0], [38.9, 885.0], [39.0, 887.0], [39.1, 889.0], [39.2, 890.0], [39.3, 896.0], [39.4, 898.0], [39.5, 899.0], [39.6, 900.0], [39.7, 902.0], [39.8, 903.0], [39.9, 904.0], [40.0, 907.0], [40.1, 909.0], [40.2, 911.0], [40.3, 913.0], [40.4, 914.0], [40.5, 916.0], [40.6, 918.0], [40.7, 920.0], [40.8, 921.0], [40.9, 925.0], [41.0, 926.0], [41.1, 926.0], [41.2, 928.0], [41.3, 931.0], [41.4, 932.0], [41.5, 933.0], [41.6, 935.0], [41.7, 936.0], [41.8, 939.0], [41.9, 942.0], [42.0, 945.0], [42.1, 947.0], [42.2, 949.0], [42.3, 951.0], [42.4, 953.0], [42.5, 955.0], [42.6, 957.0], [42.7, 958.0], [42.8, 960.0], [42.9, 962.0], [43.0, 964.0], [43.1, 967.0], [43.2, 968.0], [43.3, 969.0], [43.4, 970.0], [43.5, 972.0], [43.6, 974.0], [43.7, 976.0], [43.8, 978.0], [43.9, 981.0], [44.0, 983.0], [44.1, 984.0], [44.2, 985.0], [44.3, 986.0], [44.4, 989.0], [44.5, 990.0], [44.6, 993.0], [44.7, 995.0], [44.8, 997.0], [44.9, 999.0], [45.0, 1001.0], [45.1, 1005.0], [45.2, 1009.0], [45.3, 1012.0], [45.4, 1014.0], [45.5, 1016.0], [45.6, 1020.0], [45.7, 1021.0], [45.8, 1022.0], [45.9, 1023.0], [46.0, 1025.0], [46.1, 1026.0], [46.2, 1028.0], [46.3, 1029.0], [46.4, 1032.0], [46.5, 1033.0], [46.6, 1035.0], [46.7, 1036.0], [46.8, 1037.0], [46.9, 1038.0], [47.0, 1040.0], [47.1, 1040.0], [47.2, 1046.0], [47.3, 1047.0], [47.4, 1049.0], [47.5, 1050.0], [47.6, 1051.0], [47.7, 1054.0], [47.8, 1054.0], [47.9, 1056.0], [48.0, 1058.0], [48.1, 1061.0], [48.2, 1063.0], [48.3, 1064.0], [48.4, 1065.0], [48.5, 1069.0], [48.6, 1070.0], [48.7, 1073.0], [48.8, 1075.0], [48.9, 1076.0], [49.0, 1078.0], [49.1, 1080.0], [49.2, 1083.0], [49.3, 1084.0], [49.4, 1085.0], [49.5, 1087.0], [49.6, 1089.0], [49.7, 1090.0], [49.8, 1093.0], [49.9, 1094.0], [50.0, 1095.0], [50.1, 1098.0], [50.2, 1099.0], [50.3, 1102.0], [50.4, 1104.0], [50.5, 1105.0], [50.6, 1106.0], [50.7, 1109.0], [50.8, 1110.0], [50.9, 1112.0], [51.0, 1113.0], [51.1, 1114.0], [51.2, 1115.0], [51.3, 1116.0], [51.4, 1117.0], [51.5, 1120.0], [51.6, 1122.0], [51.7, 1123.0], [51.8, 1124.0], [51.9, 1127.0], [52.0, 1129.0], [52.1, 1131.0], [52.2, 1132.0], [52.3, 1134.0], [52.4, 1136.0], [52.5, 1137.0], [52.6, 1138.0], [52.7, 1141.0], [52.8, 1143.0], [52.9, 1145.0], [53.0, 1146.0], [53.1, 1148.0], [53.2, 1149.0], [53.3, 1151.0], [53.4, 1152.0], [53.5, 1155.0], [53.6, 1158.0], [53.7, 1159.0], [53.8, 1161.0], [53.9, 1163.0], [54.0, 1165.0], [54.1, 1167.0], [54.2, 1169.0], [54.3, 1171.0], [54.4, 1173.0], [54.5, 1174.0], [54.6, 1175.0], [54.7, 1180.0], [54.8, 1182.0], [54.9, 1183.0], [55.0, 1186.0], [55.1, 1188.0], [55.2, 1190.0], [55.3, 1193.0], [55.4, 1194.0], [55.5, 1196.0], [55.6, 1199.0], [55.7, 1200.0], [55.8, 1202.0], [55.9, 1204.0], [56.0, 1206.0], [56.1, 1208.0], [56.2, 1211.0], [56.3, 1212.0], [56.4, 1215.0], [56.5, 1216.0], [56.6, 1218.0], [56.7, 1220.0], [56.8, 1221.0], [56.9, 1224.0], [57.0, 1226.0], [57.1, 1229.0], [57.2, 1230.0], [57.3, 1233.0], [57.4, 1235.0], [57.5, 1238.0], [57.6, 1241.0], [57.7, 1243.0], [57.8, 1244.0], [57.9, 1247.0], [58.0, 1249.0], [58.1, 1252.0], [58.2, 1255.0], [58.3, 1256.0], [58.4, 1257.0], [58.5, 1259.0], [58.6, 1261.0], [58.7, 1265.0], [58.8, 1266.0], [58.9, 1268.0], [59.0, 1271.0], [59.1, 1273.0], [59.2, 1275.0], [59.3, 1277.0], [59.4, 1279.0], [59.5, 1282.0], [59.6, 1283.0], [59.7, 1287.0], [59.8, 1289.0], [59.9, 1291.0], [60.0, 1292.0], [60.1, 1294.0], [60.2, 1297.0], [60.3, 1299.0], [60.4, 1301.0], [60.5, 1302.0], [60.6, 1305.0], [60.7, 1307.0], [60.8, 1311.0], [60.9, 1314.0], [61.0, 1317.0], [61.1, 1319.0], [61.2, 1321.0], [61.3, 1323.0], [61.4, 1324.0], [61.5, 1325.0], [61.6, 1330.0], [61.7, 1332.0], [61.8, 1335.0], [61.9, 1337.0], [62.0, 1339.0], [62.1, 1341.0], [62.2, 1344.0], [62.3, 1347.0], [62.4, 1349.0], [62.5, 1352.0], [62.6, 1353.0], [62.7, 1359.0], [62.8, 1361.0], [62.9, 1363.0], [63.0, 1365.0], [63.1, 1366.0], [63.2, 1368.0], [63.3, 1370.0], [63.4, 1372.0], [63.5, 1374.0], [63.6, 1375.0], [63.7, 1377.0], [63.8, 1379.0], [63.9, 1380.0], [64.0, 1382.0], [64.1, 1384.0], [64.2, 1386.0], [64.3, 1387.0], [64.4, 1391.0], [64.5, 1391.0], [64.6, 1393.0], [64.7, 1395.0], [64.8, 1397.0], [64.9, 1399.0], [65.0, 1400.0], [65.1, 1402.0], [65.2, 1405.0], [65.3, 1407.0], [65.4, 1408.0], [65.5, 1409.0], [65.6, 1412.0], [65.7, 1415.0], [65.8, 1415.0], [65.9, 1418.0], [66.0, 1420.0], [66.1, 1422.0], [66.2, 1425.0], [66.3, 1428.0], [66.4, 1430.0], [66.5, 1435.0], [66.6, 1437.0], [66.7, 1439.0], [66.8, 1442.0], [66.9, 1443.0], [67.0, 1444.0], [67.1, 1445.0], [67.2, 1447.0], [67.3, 1449.0], [67.4, 1452.0], [67.5, 1453.0], [67.6, 1454.0], [67.7, 1455.0], [67.8, 1457.0], [67.9, 1459.0], [68.0, 1462.0], [68.1, 1464.0], [68.2, 1466.0], [68.3, 1468.0], [68.4, 1469.0], [68.5, 1472.0], [68.6, 1475.0], [68.7, 1478.0], [68.8, 1479.0], [68.9, 1480.0], [69.0, 1482.0], [69.1, 1485.0], [69.2, 1486.0], [69.3, 1488.0], [69.4, 1489.0], [69.5, 1492.0], [69.6, 1493.0], [69.7, 1498.0], [69.8, 1498.0], [69.9, 1499.0], [70.0, 1502.0], [70.1, 1503.0], [70.2, 1504.0], [70.3, 1504.0], [70.4, 1506.0], [70.5, 1508.0], [70.6, 1509.0], [70.7, 1511.0], [70.8, 1512.0], [70.9, 1514.0], [71.0, 1515.0], [71.1, 1518.0], [71.2, 1519.0], [71.3, 1522.0], [71.4, 1524.0], [71.5, 1527.0], [71.6, 1529.0], [71.7, 1530.0], [71.8, 1532.0], [71.9, 1534.0], [72.0, 1535.0], [72.1, 1538.0], [72.2, 1540.0], [72.3, 1541.0], [72.4, 1544.0], [72.5, 1545.0], [72.6, 1545.0], [72.7, 1547.0], [72.8, 1551.0], [72.9, 1552.0], [73.0, 1554.0], [73.1, 1556.0], [73.2, 1557.0], [73.3, 1559.0], [73.4, 1560.0], [73.5, 1562.0], [73.6, 1564.0], [73.7, 1565.0], [73.8, 1567.0], [73.9, 1568.0], [74.0, 1569.0], [74.1, 1571.0], [74.2, 1572.0], [74.3, 1574.0], [74.4, 1576.0], [74.5, 1580.0], [74.6, 1583.0], [74.7, 1583.0], [74.8, 1585.0], [74.9, 1588.0], [75.0, 1589.0], [75.1, 1590.0], [75.2, 1591.0], [75.3, 1593.0], [75.4, 1594.0], [75.5, 1595.0], [75.6, 1597.0], [75.7, 1598.0], [75.8, 1599.0], [75.9, 1601.0], [76.0, 1604.0], [76.1, 1606.0], [76.2, 1607.0], [76.3, 1609.0], [76.4, 1611.0], [76.5, 1613.0], [76.6, 1616.0], [76.7, 1618.0], [76.8, 1619.0], [76.9, 1620.0], [77.0, 1622.0], [77.1, 1625.0], [77.2, 1629.0], [77.3, 1630.0], [77.4, 1633.0], [77.5, 1635.0], [77.6, 1637.0], [77.7, 1639.0], [77.8, 1641.0], [77.9, 1644.0], [78.0, 1644.0], [78.1, 1646.0], [78.2, 1651.0], [78.3, 1655.0], [78.4, 1657.0], [78.5, 1660.0], [78.6, 1663.0], [78.7, 1664.0], [78.8, 1667.0], [78.9, 1668.0], [79.0, 1669.0], [79.1, 1672.0], [79.2, 1674.0], [79.3, 1677.0], [79.4, 1678.0], [79.5, 1680.0], [79.6, 1683.0], [79.7, 1687.0], [79.8, 1689.0], [79.9, 1691.0], [80.0, 1693.0], [80.1, 1695.0], [80.2, 1697.0], [80.3, 1698.0], [80.4, 1700.0], [80.5, 1703.0], [80.6, 1706.0], [80.7, 1708.0], [80.8, 1711.0], [80.9, 1712.0], [81.0, 1714.0], [81.1, 1719.0], [81.2, 1721.0], [81.3, 1723.0], [81.4, 1725.0], [81.5, 1727.0], [81.6, 1730.0], [81.7, 1732.0], [81.8, 1735.0], [81.9, 1741.0], [82.0, 1745.0], [82.1, 1746.0], [82.2, 1750.0], [82.3, 1752.0], [82.4, 1754.0], [82.5, 1756.0], [82.6, 1758.0], [82.7, 1762.0], [82.8, 1764.0], [82.9, 1766.0], [83.0, 1769.0], [83.1, 1772.0], [83.2, 1776.0], [83.3, 1779.0], [83.4, 1783.0], [83.5, 1786.0], [83.6, 1790.0], [83.7, 1793.0], [83.8, 1796.0], [83.9, 1802.0], [84.0, 1805.0], [84.1, 1807.0], [84.2, 1808.0], [84.3, 1810.0], [84.4, 1813.0], [84.5, 1816.0], [84.6, 1820.0], [84.7, 1825.0], [84.8, 1830.0], [84.9, 1836.0], [85.0, 1838.0], [85.1, 1841.0], [85.2, 1845.0], [85.3, 1848.0], [85.4, 1855.0], [85.5, 1861.0], [85.6, 1864.0], [85.7, 1871.0], [85.8, 1874.0], [85.9, 1880.0], [86.0, 1883.0], [86.1, 1888.0], [86.2, 1892.0], [86.3, 1899.0], [86.4, 1902.0], [86.5, 1904.0], [86.6, 1905.0], [86.7, 1911.0], [86.8, 1913.0], [86.9, 1922.0], [87.0, 1929.0], [87.1, 1935.0], [87.2, 1940.0], [87.3, 1945.0], [87.4, 1952.0], [87.5, 1958.0], [87.6, 1962.0], [87.7, 1974.0], [87.8, 1979.0], [87.9, 1990.0], [88.0, 1994.0], [88.1, 1998.0], [88.2, 2005.0], [88.3, 2011.0], [88.4, 2014.0], [88.5, 2022.0], [88.6, 2025.0], [88.7, 2032.0], [88.8, 2038.0], [88.9, 2052.0], [89.0, 2053.0], [89.1, 2070.0], [89.2, 2073.0], [89.3, 2076.0], [89.4, 2079.0], [89.5, 2082.0], [89.6, 2090.0], [89.7, 2093.0], [89.8, 2101.0], [89.9, 2105.0], [90.0, 2107.0], [90.1, 2112.0], [90.2, 2123.0], [90.3, 2128.0], [90.4, 2135.0], [90.5, 2139.0], [90.6, 2146.0], [90.7, 2149.0], [90.8, 2153.0], [90.9, 2162.0], [91.0, 2171.0], [91.1, 2177.0], [91.2, 2187.0], [91.3, 2196.0], [91.4, 2201.0], [91.5, 2203.0], [91.6, 2211.0], [91.7, 2225.0], [91.8, 2234.0], [91.9, 2241.0], [92.0, 2253.0], [92.1, 2257.0], [92.2, 2260.0], [92.3, 2263.0], [92.4, 2267.0], [92.5, 2286.0], [92.6, 2292.0], [92.7, 2298.0], [92.8, 2305.0], [92.9, 2313.0], [93.0, 2318.0], [93.1, 2328.0], [93.2, 2342.0], [93.3, 2348.0], [93.4, 2358.0], [93.5, 2376.0], [93.6, 2384.0], [93.7, 2402.0], [93.8, 2412.0], [93.9, 2426.0], [94.0, 2435.0], [94.1, 2444.0], [94.2, 2461.0], [94.3, 2474.0], [94.4, 2482.0], [94.5, 2488.0], [94.6, 2493.0], [94.7, 2503.0], [94.8, 2526.0], [94.9, 2537.0], [95.0, 2547.0], [95.1, 2555.0], [95.2, 2564.0], [95.3, 2578.0], [95.4, 2593.0], [95.5, 2613.0], [95.6, 2618.0], [95.7, 2625.0], [95.8, 2644.0], [95.9, 2656.0], [96.0, 2673.0], [96.1, 2688.0], [96.2, 2711.0], [96.3, 2723.0], [96.4, 2741.0], [96.5, 2761.0], [96.6, 2779.0], [96.7, 2803.0], [96.8, 2828.0], [96.9, 2846.0], [97.0, 2876.0], [97.1, 2898.0], [97.2, 2926.0], [97.3, 2941.0], [97.4, 2963.0], [97.5, 2990.0], [97.6, 3032.0], [97.7, 3050.0], [97.8, 3078.0], [97.9, 3121.0], [98.0, 3164.0], [98.1, 3192.0], [98.2, 3223.0], [98.3, 3249.0], [98.4, 3295.0], [98.5, 3362.0], [98.6, 3386.0], [98.7, 3436.0], [98.8, 3471.0], [98.9, 3552.0], [99.0, 3709.0], [99.1, 3777.0], [99.2, 3863.0], [99.3, 3932.0], [99.4, 4117.0], [99.5, 4420.0], [99.6, 4559.0], [99.7, 4825.0], [99.8, 5328.0], [99.9, 5821.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 567.0, "series": [{"data": [[600.0, 411.0], [700.0, 327.0], [800.0, 251.0], [900.0, 279.0], [1000.0, 274.0], [1100.0, 283.0], [1200.0, 242.0], [1300.0, 238.0], [1400.0, 259.0], [1500.0, 307.0], [1600.0, 236.0], [1700.0, 181.0], [1800.0, 128.0], [1900.0, 94.0], [2000.0, 85.0], [2100.0, 83.0], [2300.0, 49.0], [2200.0, 71.0], [2400.0, 50.0], [2500.0, 40.0], [2600.0, 40.0], [2700.0, 25.0], [2800.0, 24.0], [2900.0, 21.0], [3000.0, 15.0], [3100.0, 16.0], [3300.0, 12.0], [3200.0, 14.0], [3400.0, 11.0], [3500.0, 4.0], [3600.0, 4.0], [3700.0, 8.0], [3800.0, 6.0], [3900.0, 5.0], [4000.0, 1.0], [4100.0, 2.0], [4200.0, 4.0], [4500.0, 6.0], [4400.0, 2.0], [4600.0, 2.0], [4800.0, 2.0], [4900.0, 2.0], [5200.0, 1.0], [5300.0, 1.0], [5400.0, 3.0], [5500.0, 1.0], [5800.0, 1.0], [6100.0, 1.0], [6200.0, 1.0], [6300.0, 1.0], [6500.0, 1.0], [6800.0, 1.0], [200.0, 6.0], [300.0, 73.0], [400.0, 567.0], [500.0, 419.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2974.0, "series": [{"data": [[0.0, 654.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2974.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1562.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.882978723404257, "minX": 1.60231644E12, "maxY": 12.0, "series": [{"data": [[1.60231662E12, 12.0], [1.60231644E12, 12.0], [1.60231692E12, 11.882978723404257], [1.60231674E12, 12.0], [1.60231656E12, 12.0], [1.60231686E12, 12.0], [1.60231668E12, 12.0], [1.6023165E12, 12.0], [1.6023168E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231692E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 663.0, "minX": 1.0, "maxY": 3249.0, "series": [{"data": [[8.0, 1612.0], [4.0, 1384.0], [2.0, 3249.0], [1.0, 3121.0], [9.0, 2116.0], [10.0, 1392.0], [5.0, 1199.0], [11.0, 1737.0], [12.0, 1224.103088803089], [6.0, 663.0], [3.0, 1027.0], [7.0, 1368.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987285686765556, 1225.1439029088808]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3163.8333333333335, "minX": 1.60231644E12, "maxY": 3435522.1666666665, "series": [{"data": [[1.60231662E12, 2808973.6333333333], [1.60231644E12, 2327471.2333333334], [1.60231692E12, 2360857.4166666665], [1.60231674E12, 2239097.5166666666], [1.60231656E12, 3435522.1666666665], [1.60231686E12, 2761116.4833333334], [1.60231668E12, 2813360.1166666667], [1.6023165E12, 2235376.933333333], [1.6023168E12, 2991251.1666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231662E12, 4611.75], [1.60231644E12, 3163.8333333333335], [1.60231692E12, 4254.116666666667], [1.60231674E12, 3924.7833333333333], [1.60231656E12, 4737.533333333334], [1.60231686E12, 4829.45], [1.60231668E12, 3577.85], [1.6023165E12, 4721.35], [1.6023168E12, 4763.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231692E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1111.5356037151694, "minX": 1.60231644E12, "maxY": 1506.748962655602, "series": [{"data": [[1.60231662E12, 1176.6266447368423], [1.60231644E12, 1433.0975056689338], [1.60231692E12, 1235.9840425531902], [1.60231674E12, 1315.3040293040306], [1.60231656E12, 1147.1391999999994], [1.60231686E12, 1128.6713836477984], [1.60231668E12, 1506.748962655602], [1.6023165E12, 1111.5356037151694], [1.6023168E12, 1116.615863141525]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231692E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1110.1222910216695, "minX": 1.60231644E12, "maxY": 1504.485477178422, "series": [{"data": [[1.60231662E12, 1174.832236842104], [1.60231644E12, 1431.1541950113362], [1.60231692E12, 1234.7517730496468], [1.60231674E12, 1313.9670329670323], [1.60231656E12, 1144.966399999999], [1.60231686E12, 1127.2672955974847], [1.60231668E12, 1504.485477178422], [1.6023165E12, 1110.1222910216695], [1.6023168E12, 1115.0824261275254]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231692E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.012578616352201262, "minX": 1.60231644E12, "maxY": 0.27891156462585015, "series": [{"data": [[1.60231662E12, 0.023026315789473725], [1.60231644E12, 0.27891156462585015], [1.60231692E12, 0.02127659574468083], [1.60231674E12, 0.023809523809523794], [1.60231656E12, 0.022400000000000038], [1.60231686E12, 0.012578616352201262], [1.60231668E12, 0.026970954356846447], [1.6023165E12, 0.02321981424148608], [1.6023168E12, 0.013996889580093317]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231692E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 208.0, "minX": 1.60231644E12, "maxY": 6860.0, "series": [{"data": [[1.60231662E12, 4666.0], [1.60231644E12, 6586.0], [1.60231692E12, 4597.0], [1.60231674E12, 6860.0], [1.60231656E12, 5437.0], [1.60231686E12, 4607.0], [1.60231668E12, 6206.0], [1.6023165E12, 3869.0], [1.6023168E12, 3436.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231662E12, 387.0], [1.60231644E12, 393.8899994730949], [1.60231692E12, 381.7649987876415], [1.60231674E12, 457.07599843502044], [1.60231656E12, 383.63399985074994], [1.60231686E12, 379.6649992406368], [1.60231668E12, 436.73499942421915], [1.6023165E12, 398.64599969148634], [1.6023168E12, 391.3879995393753]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231662E12, 387.0192000579834], [1.60231644E12, 395.879000210762], [1.60231692E12, 386.34150048494337], [1.60231674E12, 459.66120020866396], [1.60231656E12, 384.1974000597], [1.60231686E12, 381.0], [1.60231668E12, 438.90850023031237], [1.6023165E12, 399.81060012340544], [1.6023168E12, 392.3756000614166]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231662E12, 387.0], [1.60231644E12, 394.99499973654747], [1.60231692E12, 384.30749939382076], [1.60231674E12, 458.78599973917005], [1.60231656E12, 383.946999925375], [1.60231686E12, 381.0], [1.60231668E12, 437.94249971210957], [1.6023165E12, 399.29299984574317], [1.6023168E12, 392.1179999232292]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231662E12, 365.0], [1.60231644E12, 373.0], [1.60231692E12, 220.0], [1.60231674E12, 414.0], [1.60231656E12, 368.0], [1.60231686E12, 208.0], [1.60231668E12, 413.0], [1.6023165E12, 225.0], [1.6023168E12, 368.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231662E12, 1124.0], [1.60231644E12, 1224.0], [1.60231692E12, 1088.5], [1.60231674E12, 1145.0], [1.60231656E12, 885.0], [1.60231686E12, 1022.0], [1.60231668E12, 1379.0], [1.6023165E12, 909.5], [1.6023168E12, 955.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231692E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 441.0, "minX": 1.0, "maxY": 3185.0, "series": [{"data": [[2.0, 2293.0], [3.0, 1879.0], [4.0, 1872.5], [5.0, 1586.5], [6.0, 1546.0], [7.0, 1356.0], [8.0, 1374.0], [9.0, 1319.0], [10.0, 1161.0], [11.0, 1108.0], [12.0, 1026.5], [13.0, 860.0], [14.0, 652.0], [15.0, 762.0], [16.0, 975.0], [1.0, 3185.0], [17.0, 488.0], [18.0, 497.0], [19.0, 500.0], [20.0, 482.0], [21.0, 464.0], [22.0, 476.5], [23.0, 454.0], [24.0, 441.0], [25.0, 465.0], [26.0, 453.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 826.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 441.0, "minX": 1.0, "maxY": 3180.0, "series": [{"data": [[2.0, 2287.5], [3.0, 1878.0], [4.0, 1868.5], [5.0, 1582.5], [6.0, 1544.0], [7.0, 1355.0], [8.0, 1371.0], [9.0, 1318.0], [10.0, 1160.5], [11.0, 1107.0], [12.0, 1023.0], [13.0, 858.0], [14.0, 651.5], [15.0, 759.0], [16.0, 975.0], [1.0, 3180.0], [17.0, 488.0], [18.0, 497.0], [19.0, 500.0], [20.0, 481.5], [21.0, 464.0], [22.0, 476.5], [23.0, 454.0], [24.0, 441.0], [25.0, 465.0], [26.0, 453.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 826.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.55, "minX": 1.60231644E12, "maxY": 10.766666666666667, "series": [{"data": [[1.60231662E12, 10.133333333333333], [1.60231644E12, 7.55], [1.60231692E12, 9.2], [1.60231674E12, 9.1], [1.60231656E12, 10.416666666666666], [1.60231686E12, 10.6], [1.60231668E12, 8.033333333333333], [1.6023165E12, 10.766666666666667], [1.6023168E12, 10.716666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231692E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231644E12, "maxY": 10.766666666666667, "series": [{"data": [[1.60231662E12, 10.116666666666667], [1.60231644E12, 7.35], [1.60231692E12, 9.4], [1.60231674E12, 9.1], [1.60231656E12, 10.416666666666666], [1.60231686E12, 10.6], [1.60231668E12, 8.033333333333333], [1.6023165E12, 10.766666666666667], [1.6023168E12, 10.716666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60231662E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231692E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231644E12, "maxY": 10.766666666666667, "series": [{"data": [[1.60231662E12, 10.116666666666667], [1.60231644E12, 7.35], [1.60231692E12, 9.4], [1.60231674E12, 9.1], [1.60231656E12, 10.416666666666666], [1.60231686E12, 10.6], [1.60231668E12, 8.033333333333333], [1.6023165E12, 10.766666666666667], [1.6023168E12, 10.716666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60231662E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231692E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231644E12, "maxY": 10.766666666666667, "series": [{"data": [[1.60231662E12, 10.116666666666667], [1.60231644E12, 7.35], [1.60231692E12, 9.4], [1.60231674E12, 9.1], [1.60231656E12, 10.416666666666666], [1.60231686E12, 10.6], [1.60231668E12, 8.033333333333333], [1.6023165E12, 10.766666666666667], [1.6023168E12, 10.716666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60231662E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231692E12, "title": "Total Transactions Per Second"}},
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

