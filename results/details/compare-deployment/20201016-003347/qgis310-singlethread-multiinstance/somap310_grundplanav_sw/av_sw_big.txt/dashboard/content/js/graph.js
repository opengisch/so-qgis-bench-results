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
        data: {"result": {"minY": 199.0, "minX": 0.0, "maxY": 8939.0, "series": [{"data": [[0.0, 199.0], [0.1, 222.0], [0.2, 276.0], [0.3, 323.0], [0.4, 366.0], [0.5, 374.0], [0.6, 378.0], [0.7, 380.0], [0.8, 380.0], [0.9, 382.0], [1.0, 383.0], [1.1, 384.0], [1.2, 385.0], [1.3, 386.0], [1.4, 388.0], [1.5, 389.0], [1.6, 390.0], [1.7, 391.0], [1.8, 392.0], [1.9, 393.0], [2.0, 393.0], [2.1, 394.0], [2.2, 395.0], [2.3, 395.0], [2.4, 396.0], [2.5, 396.0], [2.6, 397.0], [2.7, 399.0], [2.8, 399.0], [2.9, 400.0], [3.0, 401.0], [3.1, 402.0], [3.2, 403.0], [3.3, 404.0], [3.4, 405.0], [3.5, 405.0], [3.6, 406.0], [3.7, 407.0], [3.8, 407.0], [3.9, 408.0], [4.0, 408.0], [4.1, 410.0], [4.2, 411.0], [4.3, 412.0], [4.4, 412.0], [4.5, 413.0], [4.6, 413.0], [4.7, 414.0], [4.8, 416.0], [4.9, 417.0], [5.0, 418.0], [5.1, 419.0], [5.2, 419.0], [5.3, 420.0], [5.4, 420.0], [5.5, 421.0], [5.6, 422.0], [5.7, 423.0], [5.8, 424.0], [5.9, 425.0], [6.0, 425.0], [6.1, 426.0], [6.2, 427.0], [6.3, 428.0], [6.4, 429.0], [6.5, 430.0], [6.6, 431.0], [6.7, 431.0], [6.8, 432.0], [6.9, 433.0], [7.0, 433.0], [7.1, 434.0], [7.2, 435.0], [7.3, 436.0], [7.4, 437.0], [7.5, 438.0], [7.6, 438.0], [7.7, 439.0], [7.8, 440.0], [7.9, 441.0], [8.0, 442.0], [8.1, 443.0], [8.2, 444.0], [8.3, 445.0], [8.4, 445.0], [8.5, 446.0], [8.6, 447.0], [8.7, 448.0], [8.8, 448.0], [8.9, 449.0], [9.0, 450.0], [9.1, 451.0], [9.2, 451.0], [9.3, 452.0], [9.4, 452.0], [9.5, 453.0], [9.6, 454.0], [9.7, 455.0], [9.8, 457.0], [9.9, 457.0], [10.0, 458.0], [10.1, 458.0], [10.2, 459.0], [10.3, 460.0], [10.4, 460.0], [10.5, 461.0], [10.6, 462.0], [10.7, 463.0], [10.8, 463.0], [10.9, 464.0], [11.0, 464.0], [11.1, 465.0], [11.2, 466.0], [11.3, 467.0], [11.4, 468.0], [11.5, 469.0], [11.6, 470.0], [11.7, 472.0], [11.8, 473.0], [11.9, 474.0], [12.0, 475.0], [12.1, 476.0], [12.2, 477.0], [12.3, 479.0], [12.4, 480.0], [12.5, 482.0], [12.6, 483.0], [12.7, 485.0], [12.8, 486.0], [12.9, 488.0], [13.0, 489.0], [13.1, 490.0], [13.2, 492.0], [13.3, 493.0], [13.4, 495.0], [13.5, 497.0], [13.6, 499.0], [13.7, 501.0], [13.8, 503.0], [13.9, 504.0], [14.0, 505.0], [14.1, 510.0], [14.2, 510.0], [14.3, 514.0], [14.4, 515.0], [14.5, 517.0], [14.6, 517.0], [14.7, 520.0], [14.8, 522.0], [14.9, 523.0], [15.0, 525.0], [15.1, 526.0], [15.2, 528.0], [15.3, 530.0], [15.4, 530.0], [15.5, 531.0], [15.6, 532.0], [15.7, 533.0], [15.8, 535.0], [15.9, 537.0], [16.0, 537.0], [16.1, 538.0], [16.2, 540.0], [16.3, 541.0], [16.4, 543.0], [16.5, 544.0], [16.6, 545.0], [16.7, 547.0], [16.8, 548.0], [16.9, 549.0], [17.0, 550.0], [17.1, 551.0], [17.2, 552.0], [17.3, 554.0], [17.4, 555.0], [17.5, 556.0], [17.6, 558.0], [17.7, 559.0], [17.8, 560.0], [17.9, 561.0], [18.0, 562.0], [18.1, 564.0], [18.2, 565.0], [18.3, 567.0], [18.4, 567.0], [18.5, 568.0], [18.6, 569.0], [18.7, 570.0], [18.8, 571.0], [18.9, 572.0], [19.0, 573.0], [19.1, 574.0], [19.2, 575.0], [19.3, 576.0], [19.4, 577.0], [19.5, 578.0], [19.6, 579.0], [19.7, 580.0], [19.8, 581.0], [19.9, 582.0], [20.0, 583.0], [20.1, 584.0], [20.2, 585.0], [20.3, 586.0], [20.4, 587.0], [20.5, 588.0], [20.6, 590.0], [20.7, 591.0], [20.8, 593.0], [20.9, 594.0], [21.0, 596.0], [21.1, 597.0], [21.2, 598.0], [21.3, 600.0], [21.4, 601.0], [21.5, 602.0], [21.6, 603.0], [21.7, 604.0], [21.8, 604.0], [21.9, 606.0], [22.0, 607.0], [22.1, 608.0], [22.2, 609.0], [22.3, 610.0], [22.4, 611.0], [22.5, 612.0], [22.6, 613.0], [22.7, 614.0], [22.8, 615.0], [22.9, 617.0], [23.0, 617.0], [23.1, 618.0], [23.2, 619.0], [23.3, 620.0], [23.4, 621.0], [23.5, 621.0], [23.6, 623.0], [23.7, 624.0], [23.8, 625.0], [23.9, 626.0], [24.0, 627.0], [24.1, 628.0], [24.2, 629.0], [24.3, 630.0], [24.4, 632.0], [24.5, 634.0], [24.6, 635.0], [24.7, 636.0], [24.8, 639.0], [24.9, 639.0], [25.0, 641.0], [25.1, 642.0], [25.2, 643.0], [25.3, 643.0], [25.4, 644.0], [25.5, 646.0], [25.6, 647.0], [25.7, 648.0], [25.8, 650.0], [25.9, 650.0], [26.0, 652.0], [26.1, 653.0], [26.2, 654.0], [26.3, 655.0], [26.4, 655.0], [26.5, 656.0], [26.6, 657.0], [26.7, 658.0], [26.8, 659.0], [26.9, 661.0], [27.0, 662.0], [27.1, 663.0], [27.2, 665.0], [27.3, 665.0], [27.4, 667.0], [27.5, 668.0], [27.6, 670.0], [27.7, 671.0], [27.8, 674.0], [27.9, 675.0], [28.0, 676.0], [28.1, 677.0], [28.2, 678.0], [28.3, 679.0], [28.4, 680.0], [28.5, 682.0], [28.6, 683.0], [28.7, 685.0], [28.8, 686.0], [28.9, 689.0], [29.0, 690.0], [29.1, 691.0], [29.2, 692.0], [29.3, 695.0], [29.4, 697.0], [29.5, 700.0], [29.6, 702.0], [29.7, 703.0], [29.8, 704.0], [29.9, 705.0], [30.0, 708.0], [30.1, 710.0], [30.2, 711.0], [30.3, 712.0], [30.4, 714.0], [30.5, 716.0], [30.6, 718.0], [30.7, 720.0], [30.8, 722.0], [30.9, 724.0], [31.0, 727.0], [31.1, 729.0], [31.2, 730.0], [31.3, 733.0], [31.4, 734.0], [31.5, 735.0], [31.6, 737.0], [31.7, 739.0], [31.8, 740.0], [31.9, 741.0], [32.0, 743.0], [32.1, 746.0], [32.2, 748.0], [32.3, 752.0], [32.4, 756.0], [32.5, 757.0], [32.6, 758.0], [32.7, 760.0], [32.8, 763.0], [32.9, 764.0], [33.0, 766.0], [33.1, 768.0], [33.2, 770.0], [33.3, 773.0], [33.4, 774.0], [33.5, 777.0], [33.6, 778.0], [33.7, 780.0], [33.8, 781.0], [33.9, 782.0], [34.0, 784.0], [34.1, 786.0], [34.2, 788.0], [34.3, 790.0], [34.4, 791.0], [34.5, 791.0], [34.6, 792.0], [34.7, 794.0], [34.8, 797.0], [34.9, 799.0], [35.0, 801.0], [35.1, 805.0], [35.2, 807.0], [35.3, 812.0], [35.4, 815.0], [35.5, 815.0], [35.6, 817.0], [35.7, 819.0], [35.8, 823.0], [35.9, 824.0], [36.0, 826.0], [36.1, 830.0], [36.2, 831.0], [36.3, 836.0], [36.4, 837.0], [36.5, 840.0], [36.6, 843.0], [36.7, 845.0], [36.8, 848.0], [36.9, 850.0], [37.0, 852.0], [37.1, 853.0], [37.2, 856.0], [37.3, 857.0], [37.4, 860.0], [37.5, 862.0], [37.6, 864.0], [37.7, 866.0], [37.8, 868.0], [37.9, 870.0], [38.0, 872.0], [38.1, 874.0], [38.2, 875.0], [38.3, 877.0], [38.4, 878.0], [38.5, 881.0], [38.6, 883.0], [38.7, 885.0], [38.8, 887.0], [38.9, 888.0], [39.0, 890.0], [39.1, 892.0], [39.2, 893.0], [39.3, 895.0], [39.4, 898.0], [39.5, 900.0], [39.6, 901.0], [39.7, 904.0], [39.8, 905.0], [39.9, 906.0], [40.0, 909.0], [40.1, 909.0], [40.2, 912.0], [40.3, 912.0], [40.4, 915.0], [40.5, 918.0], [40.6, 920.0], [40.7, 922.0], [40.8, 924.0], [40.9, 927.0], [41.0, 928.0], [41.1, 930.0], [41.2, 932.0], [41.3, 935.0], [41.4, 936.0], [41.5, 939.0], [41.6, 941.0], [41.7, 942.0], [41.8, 944.0], [41.9, 945.0], [42.0, 947.0], [42.1, 949.0], [42.2, 953.0], [42.3, 954.0], [42.4, 955.0], [42.5, 956.0], [42.6, 958.0], [42.7, 961.0], [42.8, 962.0], [42.9, 965.0], [43.0, 967.0], [43.1, 969.0], [43.2, 972.0], [43.3, 975.0], [43.4, 977.0], [43.5, 979.0], [43.6, 980.0], [43.7, 982.0], [43.8, 985.0], [43.9, 987.0], [44.0, 990.0], [44.1, 991.0], [44.2, 992.0], [44.3, 995.0], [44.4, 997.0], [44.5, 998.0], [44.6, 1001.0], [44.7, 1003.0], [44.8, 1006.0], [44.9, 1009.0], [45.0, 1011.0], [45.1, 1013.0], [45.2, 1015.0], [45.3, 1017.0], [45.4, 1017.0], [45.5, 1020.0], [45.6, 1024.0], [45.7, 1026.0], [45.8, 1028.0], [45.9, 1030.0], [46.0, 1031.0], [46.1, 1033.0], [46.2, 1037.0], [46.3, 1039.0], [46.4, 1042.0], [46.5, 1043.0], [46.6, 1046.0], [46.7, 1048.0], [46.8, 1049.0], [46.9, 1052.0], [47.0, 1053.0], [47.1, 1056.0], [47.2, 1057.0], [47.3, 1060.0], [47.4, 1061.0], [47.5, 1063.0], [47.6, 1065.0], [47.7, 1066.0], [47.8, 1067.0], [47.9, 1068.0], [48.0, 1071.0], [48.1, 1072.0], [48.2, 1074.0], [48.3, 1076.0], [48.4, 1077.0], [48.5, 1079.0], [48.6, 1081.0], [48.7, 1082.0], [48.8, 1086.0], [48.9, 1088.0], [49.0, 1089.0], [49.1, 1092.0], [49.2, 1094.0], [49.3, 1096.0], [49.4, 1098.0], [49.5, 1102.0], [49.6, 1105.0], [49.7, 1106.0], [49.8, 1109.0], [49.9, 1110.0], [50.0, 1112.0], [50.1, 1114.0], [50.2, 1116.0], [50.3, 1117.0], [50.4, 1124.0], [50.5, 1125.0], [50.6, 1128.0], [50.7, 1129.0], [50.8, 1131.0], [50.9, 1133.0], [51.0, 1133.0], [51.1, 1135.0], [51.2, 1137.0], [51.3, 1138.0], [51.4, 1139.0], [51.5, 1141.0], [51.6, 1142.0], [51.7, 1143.0], [51.8, 1145.0], [51.9, 1147.0], [52.0, 1149.0], [52.1, 1152.0], [52.2, 1155.0], [52.3, 1157.0], [52.4, 1158.0], [52.5, 1159.0], [52.6, 1161.0], [52.7, 1163.0], [52.8, 1165.0], [52.9, 1167.0], [53.0, 1168.0], [53.1, 1171.0], [53.2, 1172.0], [53.3, 1176.0], [53.4, 1179.0], [53.5, 1181.0], [53.6, 1182.0], [53.7, 1185.0], [53.8, 1186.0], [53.9, 1189.0], [54.0, 1189.0], [54.1, 1191.0], [54.2, 1194.0], [54.3, 1198.0], [54.4, 1200.0], [54.5, 1201.0], [54.6, 1203.0], [54.7, 1206.0], [54.8, 1207.0], [54.9, 1209.0], [55.0, 1212.0], [55.1, 1213.0], [55.2, 1215.0], [55.3, 1218.0], [55.4, 1220.0], [55.5, 1221.0], [55.6, 1224.0], [55.7, 1225.0], [55.8, 1227.0], [55.9, 1229.0], [56.0, 1230.0], [56.1, 1231.0], [56.2, 1233.0], [56.3, 1236.0], [56.4, 1238.0], [56.5, 1239.0], [56.6, 1241.0], [56.7, 1245.0], [56.8, 1248.0], [56.9, 1249.0], [57.0, 1251.0], [57.1, 1253.0], [57.2, 1256.0], [57.3, 1259.0], [57.4, 1259.0], [57.5, 1262.0], [57.6, 1264.0], [57.7, 1265.0], [57.8, 1267.0], [57.9, 1268.0], [58.0, 1269.0], [58.1, 1272.0], [58.2, 1274.0], [58.3, 1277.0], [58.4, 1280.0], [58.5, 1281.0], [58.6, 1284.0], [58.7, 1285.0], [58.8, 1287.0], [58.9, 1289.0], [59.0, 1291.0], [59.1, 1292.0], [59.2, 1294.0], [59.3, 1295.0], [59.4, 1297.0], [59.5, 1298.0], [59.6, 1299.0], [59.7, 1301.0], [59.8, 1303.0], [59.9, 1303.0], [60.0, 1307.0], [60.1, 1310.0], [60.2, 1314.0], [60.3, 1315.0], [60.4, 1316.0], [60.5, 1318.0], [60.6, 1319.0], [60.7, 1322.0], [60.8, 1324.0], [60.9, 1326.0], [61.0, 1329.0], [61.1, 1331.0], [61.2, 1333.0], [61.3, 1334.0], [61.4, 1336.0], [61.5, 1338.0], [61.6, 1339.0], [61.7, 1341.0], [61.8, 1343.0], [61.9, 1344.0], [62.0, 1345.0], [62.1, 1346.0], [62.2, 1350.0], [62.3, 1353.0], [62.4, 1355.0], [62.5, 1358.0], [62.6, 1359.0], [62.7, 1361.0], [62.8, 1363.0], [62.9, 1366.0], [63.0, 1367.0], [63.1, 1368.0], [63.2, 1370.0], [63.3, 1371.0], [63.4, 1373.0], [63.5, 1374.0], [63.6, 1377.0], [63.7, 1380.0], [63.8, 1382.0], [63.9, 1385.0], [64.0, 1386.0], [64.1, 1388.0], [64.2, 1391.0], [64.3, 1394.0], [64.4, 1396.0], [64.5, 1397.0], [64.6, 1400.0], [64.7, 1402.0], [64.8, 1405.0], [64.9, 1406.0], [65.0, 1409.0], [65.1, 1412.0], [65.2, 1413.0], [65.3, 1416.0], [65.4, 1418.0], [65.5, 1420.0], [65.6, 1421.0], [65.7, 1423.0], [65.8, 1425.0], [65.9, 1427.0], [66.0, 1428.0], [66.1, 1430.0], [66.2, 1434.0], [66.3, 1435.0], [66.4, 1437.0], [66.5, 1440.0], [66.6, 1441.0], [66.7, 1442.0], [66.8, 1444.0], [66.9, 1446.0], [67.0, 1448.0], [67.1, 1451.0], [67.2, 1452.0], [67.3, 1455.0], [67.4, 1457.0], [67.5, 1460.0], [67.6, 1462.0], [67.7, 1464.0], [67.8, 1465.0], [67.9, 1468.0], [68.0, 1469.0], [68.1, 1470.0], [68.2, 1472.0], [68.3, 1474.0], [68.4, 1475.0], [68.5, 1477.0], [68.6, 1479.0], [68.7, 1481.0], [68.8, 1483.0], [68.9, 1485.0], [69.0, 1487.0], [69.1, 1489.0], [69.2, 1490.0], [69.3, 1492.0], [69.4, 1494.0], [69.5, 1496.0], [69.6, 1498.0], [69.7, 1499.0], [69.8, 1500.0], [69.9, 1502.0], [70.0, 1502.0], [70.1, 1504.0], [70.2, 1505.0], [70.3, 1507.0], [70.4, 1509.0], [70.5, 1513.0], [70.6, 1515.0], [70.7, 1515.0], [70.8, 1516.0], [70.9, 1518.0], [71.0, 1520.0], [71.1, 1522.0], [71.2, 1523.0], [71.3, 1525.0], [71.4, 1528.0], [71.5, 1530.0], [71.6, 1532.0], [71.7, 1533.0], [71.8, 1535.0], [71.9, 1537.0], [72.0, 1539.0], [72.1, 1540.0], [72.2, 1543.0], [72.3, 1546.0], [72.4, 1548.0], [72.5, 1551.0], [72.6, 1552.0], [72.7, 1555.0], [72.8, 1557.0], [72.9, 1558.0], [73.0, 1561.0], [73.1, 1563.0], [73.2, 1566.0], [73.3, 1567.0], [73.4, 1571.0], [73.5, 1572.0], [73.6, 1574.0], [73.7, 1575.0], [73.8, 1577.0], [73.9, 1579.0], [74.0, 1581.0], [74.1, 1583.0], [74.2, 1585.0], [74.3, 1587.0], [74.4, 1588.0], [74.5, 1589.0], [74.6, 1590.0], [74.7, 1593.0], [74.8, 1598.0], [74.9, 1600.0], [75.0, 1602.0], [75.1, 1604.0], [75.2, 1607.0], [75.3, 1610.0], [75.4, 1611.0], [75.5, 1612.0], [75.6, 1616.0], [75.7, 1616.0], [75.8, 1618.0], [75.9, 1621.0], [76.0, 1622.0], [76.1, 1625.0], [76.2, 1627.0], [76.3, 1628.0], [76.4, 1632.0], [76.5, 1633.0], [76.6, 1636.0], [76.7, 1637.0], [76.8, 1639.0], [76.9, 1643.0], [77.0, 1646.0], [77.1, 1647.0], [77.2, 1648.0], [77.3, 1649.0], [77.4, 1652.0], [77.5, 1654.0], [77.6, 1655.0], [77.7, 1658.0], [77.8, 1659.0], [77.9, 1663.0], [78.0, 1666.0], [78.1, 1667.0], [78.2, 1669.0], [78.3, 1671.0], [78.4, 1673.0], [78.5, 1675.0], [78.6, 1677.0], [78.7, 1679.0], [78.8, 1680.0], [78.9, 1681.0], [79.0, 1685.0], [79.1, 1687.0], [79.2, 1690.0], [79.3, 1692.0], [79.4, 1694.0], [79.5, 1695.0], [79.6, 1697.0], [79.7, 1700.0], [79.8, 1703.0], [79.9, 1705.0], [80.0, 1706.0], [80.1, 1708.0], [80.2, 1710.0], [80.3, 1711.0], [80.4, 1714.0], [80.5, 1718.0], [80.6, 1721.0], [80.7, 1724.0], [80.8, 1726.0], [80.9, 1729.0], [81.0, 1733.0], [81.1, 1736.0], [81.2, 1741.0], [81.3, 1743.0], [81.4, 1747.0], [81.5, 1750.0], [81.6, 1751.0], [81.7, 1754.0], [81.8, 1757.0], [81.9, 1760.0], [82.0, 1764.0], [82.1, 1766.0], [82.2, 1769.0], [82.3, 1772.0], [82.4, 1775.0], [82.5, 1776.0], [82.6, 1780.0], [82.7, 1783.0], [82.8, 1786.0], [82.9, 1788.0], [83.0, 1792.0], [83.1, 1793.0], [83.2, 1797.0], [83.3, 1801.0], [83.4, 1806.0], [83.5, 1809.0], [83.6, 1814.0], [83.7, 1818.0], [83.8, 1824.0], [83.9, 1827.0], [84.0, 1828.0], [84.1, 1835.0], [84.2, 1839.0], [84.3, 1845.0], [84.4, 1847.0], [84.5, 1858.0], [84.6, 1859.0], [84.7, 1861.0], [84.8, 1869.0], [84.9, 1872.0], [85.0, 1874.0], [85.1, 1877.0], [85.2, 1882.0], [85.3, 1885.0], [85.4, 1890.0], [85.5, 1896.0], [85.6, 1900.0], [85.7, 1904.0], [85.8, 1907.0], [85.9, 1914.0], [86.0, 1918.0], [86.1, 1927.0], [86.2, 1929.0], [86.3, 1937.0], [86.4, 1942.0], [86.5, 1946.0], [86.6, 1948.0], [86.7, 1956.0], [86.8, 1960.0], [86.9, 1967.0], [87.0, 1969.0], [87.1, 1972.0], [87.2, 1975.0], [87.3, 1978.0], [87.4, 1983.0], [87.5, 1990.0], [87.6, 1995.0], [87.7, 2004.0], [87.8, 2008.0], [87.9, 2011.0], [88.0, 2018.0], [88.1, 2021.0], [88.2, 2022.0], [88.3, 2026.0], [88.4, 2029.0], [88.5, 2033.0], [88.6, 2038.0], [88.7, 2045.0], [88.8, 2048.0], [88.9, 2050.0], [89.0, 2058.0], [89.1, 2059.0], [89.2, 2068.0], [89.3, 2072.0], [89.4, 2080.0], [89.5, 2091.0], [89.6, 2102.0], [89.7, 2110.0], [89.8, 2114.0], [89.9, 2116.0], [90.0, 2122.0], [90.1, 2132.0], [90.2, 2137.0], [90.3, 2148.0], [90.4, 2151.0], [90.5, 2158.0], [90.6, 2162.0], [90.7, 2172.0], [90.8, 2175.0], [90.9, 2184.0], [91.0, 2192.0], [91.1, 2207.0], [91.2, 2215.0], [91.3, 2224.0], [91.4, 2232.0], [91.5, 2239.0], [91.6, 2252.0], [91.7, 2254.0], [91.8, 2269.0], [91.9, 2279.0], [92.0, 2284.0], [92.1, 2290.0], [92.2, 2298.0], [92.3, 2308.0], [92.4, 2317.0], [92.5, 2327.0], [92.6, 2335.0], [92.7, 2348.0], [92.8, 2362.0], [92.9, 2376.0], [93.0, 2382.0], [93.1, 2395.0], [93.2, 2409.0], [93.3, 2412.0], [93.4, 2424.0], [93.5, 2435.0], [93.6, 2450.0], [93.7, 2466.0], [93.8, 2470.0], [93.9, 2473.0], [94.0, 2475.0], [94.1, 2482.0], [94.2, 2495.0], [94.3, 2501.0], [94.4, 2509.0], [94.5, 2515.0], [94.6, 2525.0], [94.7, 2536.0], [94.8, 2541.0], [94.9, 2545.0], [95.0, 2564.0], [95.1, 2576.0], [95.2, 2581.0], [95.3, 2600.0], [95.4, 2606.0], [95.5, 2611.0], [95.6, 2623.0], [95.7, 2629.0], [95.8, 2644.0], [95.9, 2656.0], [96.0, 2670.0], [96.1, 2676.0], [96.2, 2680.0], [96.3, 2692.0], [96.4, 2700.0], [96.5, 2705.0], [96.6, 2720.0], [96.7, 2739.0], [96.8, 2756.0], [96.9, 2772.0], [97.0, 2799.0], [97.1, 2816.0], [97.2, 2838.0], [97.3, 2862.0], [97.4, 2885.0], [97.5, 2901.0], [97.6, 2917.0], [97.7, 2938.0], [97.8, 2949.0], [97.9, 2994.0], [98.0, 3027.0], [98.1, 3043.0], [98.2, 3057.0], [98.3, 3097.0], [98.4, 3125.0], [98.5, 3187.0], [98.6, 3228.0], [98.7, 3317.0], [98.8, 3335.0], [98.9, 3373.0], [99.0, 3519.0], [99.1, 3549.0], [99.2, 3623.0], [99.3, 3803.0], [99.4, 3931.0], [99.5, 4169.0], [99.6, 4567.0], [99.7, 5000.0], [99.8, 5215.0], [99.9, 5818.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 556.0, "series": [{"data": [[600.0, 427.0], [700.0, 282.0], [800.0, 234.0], [900.0, 265.0], [1000.0, 253.0], [1100.0, 258.0], [1200.0, 272.0], [1300.0, 257.0], [1400.0, 269.0], [1500.0, 266.0], [1600.0, 249.0], [1700.0, 185.0], [1800.0, 121.0], [1900.0, 107.0], [2000.0, 101.0], [2100.0, 75.0], [2200.0, 61.0], [2300.0, 49.0], [2400.0, 57.0], [2500.0, 54.0], [2600.0, 57.0], [2700.0, 32.0], [2800.0, 25.0], [2900.0, 23.0], [3000.0, 19.0], [3100.0, 12.0], [3200.0, 8.0], [3300.0, 12.0], [3400.0, 2.0], [3500.0, 12.0], [3600.0, 5.0], [3800.0, 5.0], [3900.0, 3.0], [4100.0, 5.0], [4300.0, 1.0], [4200.0, 1.0], [4500.0, 2.0], [4600.0, 2.0], [4900.0, 2.0], [5100.0, 2.0], [5000.0, 3.0], [5200.0, 1.0], [5600.0, 3.0], [5400.0, 1.0], [5800.0, 1.0], [6200.0, 1.0], [6300.0, 1.0], [6400.0, 1.0], [8900.0, 2.0], [100.0, 1.0], [200.0, 13.0], [300.0, 136.0], [400.0, 556.0], [500.0, 398.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 708.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2917.0, "series": [{"data": [[0.0, 708.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2917.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1565.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.832487309644673, "minX": 1.60280868E12, "maxY": 12.0, "series": [{"data": [[1.60280874E12, 12.0], [1.60280922E12, 11.832487309644673], [1.60280904E12, 12.0], [1.6028091E12, 12.0], [1.60280892E12, 12.0], [1.60280898E12, 12.0], [1.6028088E12, 12.0], [1.60280886E12, 12.0], [1.60280868E12, 12.0], [1.60280916E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280922E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 567.0, "minX": 1.0, "maxY": 2901.0, "series": [{"data": [[8.0, 1170.0], [4.0, 2515.0], [2.0, 2897.0], [1.0, 2901.0], [9.0, 1249.0], [10.0, 570.0], [5.0, 1139.0], [11.0, 2327.0], [12.0, 1225.9032631782131], [6.0, 567.0], [3.0, 1443.0], [7.0, 1437.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 1226.8146435452725]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 436.5833333333333, "minX": 1.60280868E12, "maxY": 3192491.05, "series": [{"data": [[1.60280874E12, 2711615.1166666667], [1.60280922E12, 1765207.4], [1.60280904E12, 2184439.0], [1.6028091E12, 3118991.466666667], [1.60280892E12, 2735268.5], [1.60280898E12, 2731687.033333333], [1.6028088E12, 2444817.4833333334], [1.60280886E12, 3192491.05], [1.60280868E12, 351904.38333333336], [1.60280916E12, 2736692.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280874E12, 3896.733333333333], [1.60280922E12, 2967.9666666666667], [1.60280904E12, 4403.833333333333], [1.6028091E12, 4430.416666666667], [1.60280892E12, 4637.383333333333], [1.60280898E12, 3822.0333333333333], [1.6028088E12, 4480.266666666666], [1.60280886E12, 4677.033333333334], [1.60280868E12, 436.5833333333333], [1.60280916E12, 4825.083333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280922E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1142.9874015748012, "minX": 1.60280868E12, "maxY": 1632.280701754387, "series": [{"data": [[1.60280874E12, 1334.8394833948325], [1.60280922E12, 1323.4873096446695], [1.60280904E12, 1196.0963455149504], [1.6028091E12, 1189.8756302521003], [1.60280892E12, 1171.9820261437912], [1.60280898E12, 1379.2438095238094], [1.6028088E12, 1171.5557377049195], [1.60280886E12, 1164.0177993527514], [1.60280868E12, 1632.280701754387], [1.60280916E12, 1142.9874015748012]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280922E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1141.385826771655, "minX": 1.60280868E12, "maxY": 1629.438596491228, "series": [{"data": [[1.60280874E12, 1332.503690036901], [1.60280922E12, 1321.8832487309644], [1.60280904E12, 1194.7674418604654], [1.6028091E12, 1187.821848739496], [1.60280892E12, 1169.9068627450977], [1.60280898E12, 1377.1428571428567], [1.6028088E12, 1169.567213114755], [1.60280886E12, 1161.561488673139], [1.60280868E12, 1629.438596491228], [1.60280916E12, 1141.385826771655]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280922E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.013445378151260505, "minX": 1.60280868E12, "maxY": 1.9824561403508771, "series": [{"data": [[1.60280874E12, 0.025830258302583033], [1.60280922E12, 0.015228426395939097], [1.60280904E12, 0.033222591362126255], [1.6028091E12, 0.013445378151260505], [1.60280892E12, 0.021241830065359478], [1.60280898E12, 0.024761904761904763], [1.6028088E12, 0.029508196721311473], [1.60280886E12, 0.024271844660194167], [1.60280868E12, 1.9824561403508771], [1.60280916E12, 0.02204724409448821]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280922E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 199.0, "minX": 1.60280868E12, "maxY": 8939.0, "series": [{"data": [[1.60280874E12, 8939.0], [1.60280922E12, 4606.0], [1.60280904E12, 6379.0], [1.6028091E12, 3228.0], [1.60280892E12, 5818.0], [1.60280898E12, 8933.0], [1.6028088E12, 5494.0], [1.60280886E12, 3623.0], [1.60280868E12, 4193.0], [1.60280916E12, 5215.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280874E12, 396.77399974107743], [1.60280922E12, 381.10999981164935], [1.60280904E12, 341.0359902238846], [1.6028091E12, 308.95198323249815], [1.60280892E12, 378.5169998538494], [1.60280898E12, 430.1379991221428], [1.6028088E12, 346.95399329900744], [1.60280886E12, 379.5709998524189], [1.60280868E12, 465.0], [1.60280916E12, 384.4479996967316]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280874E12, 398.8785002589226], [1.60280922E12, 381.8210000753403], [1.60280904E12, 377.9396039104462], [1.6028091E12, 372.2472067070007], [1.60280892E12, 379.0], [1.60280898E12, 432.20740005016324], [1.6028088E12, 370.3423004078865], [1.60280886E12, 380.2562001180649], [1.60280868E12, 465.0], [1.60280916E12, 386.1856002426147]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280874E12, 397.7924996763468], [1.60280922E12, 381.50499990582466], [1.60280904E12, 361.5379951119422], [1.6028091E12, 344.11599161624906], [1.60280892E12, 378.8234999269247], [1.60280898E12, 431.9789995610714], [1.6028088E12, 361.0069966495037], [1.60280886E12, 379.88049992620944], [1.60280868E12, 465.0], [1.60280916E12, 385.16799969673156]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280874E12, 228.0], [1.60280922E12, 376.0], [1.60280904E12, 199.0], [1.6028091E12, 220.0], [1.60280892E12, 286.0], [1.60280898E12, 421.0], [1.6028088E12, 276.0], [1.60280886E12, 361.0], [1.60280868E12, 465.0], [1.60280916E12, 364.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280874E12, 1189.0], [1.60280922E12, 1227.0], [1.60280904E12, 1044.5], [1.6028091E12, 1053.0], [1.60280892E12, 1042.0], [1.60280898E12, 1268.0], [1.6028088E12, 962.5], [1.60280886E12, 1091.0], [1.60280868E12, 1157.0], [1.60280916E12, 1056.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280922E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 417.0, "minX": 1.0, "maxY": 3247.0, "series": [{"data": [[2.0, 2827.0], [3.0, 1680.0], [4.0, 1633.5], [5.0, 1661.0], [6.0, 1461.0], [7.0, 1495.0], [8.0, 1370.0], [9.0, 1161.0], [10.0, 1211.0], [11.0, 1196.0], [12.0, 991.5], [13.0, 871.0], [14.0, 778.5], [15.0, 676.0], [16.0, 658.5], [1.0, 3247.0], [17.0, 581.0], [18.0, 676.0], [19.0, 532.5], [20.0, 433.5], [21.0, 459.0], [22.0, 458.5], [23.0, 474.0], [24.0, 451.0], [25.0, 457.0], [27.0, 432.0], [28.0, 432.0], [29.0, 417.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 417.0, "minX": 1.0, "maxY": 3242.0, "series": [{"data": [[2.0, 2819.0], [3.0, 1677.0], [4.0, 1633.0], [5.0, 1660.0], [6.0, 1453.0], [7.0, 1493.0], [8.0, 1369.0], [9.0, 1156.0], [10.0, 1209.5], [11.0, 1192.5], [12.0, 989.0], [13.0, 869.0], [14.0, 777.0], [15.0, 674.0], [16.0, 658.0], [1.0, 3242.0], [17.0, 579.0], [18.0, 674.5], [19.0, 532.0], [20.0, 432.5], [21.0, 459.0], [22.0, 457.5], [23.0, 474.0], [24.0, 450.5], [25.0, 457.0], [27.0, 431.0], [28.0, 431.5], [29.0, 417.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.60280868E12, "maxY": 10.583333333333334, "series": [{"data": [[1.60280874E12, 9.033333333333333], [1.60280922E12, 6.366666666666666], [1.60280904E12, 10.033333333333333], [1.6028091E12, 9.916666666666666], [1.60280892E12, 10.2], [1.60280898E12, 8.75], [1.6028088E12, 10.166666666666666], [1.60280886E12, 10.3], [1.60280868E12, 1.15], [1.60280916E12, 10.583333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280922E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.60280868E12, "maxY": 10.583333333333334, "series": [{"data": [[1.60280874E12, 9.033333333333333], [1.60280922E12, 6.566666666666666], [1.60280904E12, 10.033333333333333], [1.6028091E12, 9.916666666666666], [1.60280892E12, 10.2], [1.60280898E12, 8.75], [1.6028088E12, 10.166666666666666], [1.60280886E12, 10.3], [1.60280868E12, 0.95], [1.60280916E12, 10.583333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280922E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.60280868E12, "maxY": 10.583333333333334, "series": [{"data": [[1.60280874E12, 9.033333333333333], [1.60280922E12, 6.566666666666666], [1.60280904E12, 10.033333333333333], [1.6028091E12, 9.916666666666666], [1.60280892E12, 10.2], [1.60280898E12, 8.75], [1.6028088E12, 10.166666666666666], [1.60280886E12, 10.3], [1.60280868E12, 0.95], [1.60280916E12, 10.583333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280922E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.60280868E12, "maxY": 10.583333333333334, "series": [{"data": [[1.60280874E12, 9.033333333333333], [1.60280922E12, 6.566666666666666], [1.60280904E12, 10.033333333333333], [1.6028091E12, 9.916666666666666], [1.60280892E12, 10.2], [1.60280898E12, 8.75], [1.6028088E12, 10.166666666666666], [1.60280886E12, 10.3], [1.60280868E12, 0.95], [1.60280916E12, 10.583333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280922E12, "title": "Total Transactions Per Second"}},
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

