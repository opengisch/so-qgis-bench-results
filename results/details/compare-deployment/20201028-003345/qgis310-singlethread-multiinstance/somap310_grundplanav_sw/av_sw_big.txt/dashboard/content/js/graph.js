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
        data: {"result": {"minY": 222.0, "minX": 0.0, "maxY": 9166.0, "series": [{"data": [[0.0, 222.0], [0.1, 324.0], [0.2, 368.0], [0.3, 377.0], [0.4, 383.0], [0.5, 385.0], [0.6, 387.0], [0.7, 390.0], [0.8, 390.0], [0.9, 393.0], [1.0, 395.0], [1.1, 397.0], [1.2, 398.0], [1.3, 399.0], [1.4, 401.0], [1.5, 401.0], [1.6, 402.0], [1.7, 403.0], [1.8, 406.0], [1.9, 408.0], [2.0, 409.0], [2.1, 410.0], [2.2, 411.0], [2.3, 412.0], [2.4, 413.0], [2.5, 414.0], [2.6, 415.0], [2.7, 416.0], [2.8, 416.0], [2.9, 418.0], [3.0, 419.0], [3.1, 420.0], [3.2, 421.0], [3.3, 422.0], [3.4, 423.0], [3.5, 424.0], [3.6, 425.0], [3.7, 426.0], [3.8, 428.0], [3.9, 429.0], [4.0, 430.0], [4.1, 431.0], [4.2, 432.0], [4.3, 432.0], [4.4, 434.0], [4.5, 435.0], [4.6, 435.0], [4.7, 436.0], [4.8, 438.0], [4.9, 438.0], [5.0, 439.0], [5.1, 439.0], [5.2, 441.0], [5.3, 442.0], [5.4, 442.0], [5.5, 443.0], [5.6, 444.0], [5.7, 444.0], [5.8, 445.0], [5.9, 446.0], [6.0, 447.0], [6.1, 448.0], [6.2, 449.0], [6.3, 450.0], [6.4, 451.0], [6.5, 451.0], [6.6, 452.0], [6.7, 452.0], [6.8, 453.0], [6.9, 454.0], [7.0, 454.0], [7.1, 455.0], [7.2, 455.0], [7.3, 455.0], [7.4, 456.0], [7.5, 457.0], [7.6, 457.0], [7.7, 458.0], [7.8, 459.0], [7.9, 460.0], [8.0, 461.0], [8.1, 461.0], [8.2, 462.0], [8.3, 462.0], [8.4, 463.0], [8.5, 465.0], [8.6, 467.0], [8.7, 467.0], [8.8, 468.0], [8.9, 469.0], [9.0, 470.0], [9.1, 471.0], [9.2, 472.0], [9.3, 473.0], [9.4, 474.0], [9.5, 475.0], [9.6, 476.0], [9.7, 477.0], [9.8, 478.0], [9.9, 479.0], [10.0, 480.0], [10.1, 480.0], [10.2, 481.0], [10.3, 481.0], [10.4, 482.0], [10.5, 484.0], [10.6, 485.0], [10.7, 487.0], [10.8, 487.0], [10.9, 489.0], [11.0, 490.0], [11.1, 491.0], [11.2, 493.0], [11.3, 494.0], [11.4, 495.0], [11.5, 496.0], [11.6, 497.0], [11.7, 498.0], [11.8, 499.0], [11.9, 500.0], [12.0, 503.0], [12.1, 504.0], [12.2, 506.0], [12.3, 507.0], [12.4, 509.0], [12.5, 510.0], [12.6, 511.0], [12.7, 512.0], [12.8, 516.0], [12.9, 517.0], [13.0, 520.0], [13.1, 522.0], [13.2, 523.0], [13.3, 524.0], [13.4, 525.0], [13.5, 526.0], [13.6, 529.0], [13.7, 530.0], [13.8, 533.0], [13.9, 535.0], [14.0, 536.0], [14.1, 538.0], [14.2, 540.0], [14.3, 541.0], [14.4, 543.0], [14.5, 544.0], [14.6, 545.0], [14.7, 546.0], [14.8, 547.0], [14.9, 549.0], [15.0, 549.0], [15.1, 550.0], [15.2, 551.0], [15.3, 552.0], [15.4, 553.0], [15.5, 554.0], [15.6, 554.0], [15.7, 556.0], [15.8, 557.0], [15.9, 558.0], [16.0, 560.0], [16.1, 562.0], [16.2, 563.0], [16.3, 564.0], [16.4, 566.0], [16.5, 567.0], [16.6, 568.0], [16.7, 569.0], [16.8, 571.0], [16.9, 572.0], [17.0, 574.0], [17.1, 576.0], [17.2, 576.0], [17.3, 577.0], [17.4, 578.0], [17.5, 579.0], [17.6, 580.0], [17.7, 581.0], [17.8, 582.0], [17.9, 583.0], [18.0, 584.0], [18.1, 585.0], [18.2, 586.0], [18.3, 587.0], [18.4, 588.0], [18.5, 589.0], [18.6, 590.0], [18.7, 591.0], [18.8, 593.0], [18.9, 593.0], [19.0, 595.0], [19.1, 597.0], [19.2, 597.0], [19.3, 598.0], [19.4, 599.0], [19.5, 599.0], [19.6, 601.0], [19.7, 602.0], [19.8, 604.0], [19.9, 605.0], [20.0, 606.0], [20.1, 609.0], [20.2, 611.0], [20.3, 613.0], [20.4, 614.0], [20.5, 617.0], [20.6, 619.0], [20.7, 620.0], [20.8, 621.0], [20.9, 622.0], [21.0, 623.0], [21.1, 624.0], [21.2, 626.0], [21.3, 629.0], [21.4, 630.0], [21.5, 630.0], [21.6, 631.0], [21.7, 632.0], [21.8, 633.0], [21.9, 633.0], [22.0, 634.0], [22.1, 635.0], [22.2, 637.0], [22.3, 638.0], [22.4, 638.0], [22.5, 639.0], [22.6, 641.0], [22.7, 641.0], [22.8, 642.0], [22.9, 642.0], [23.0, 643.0], [23.1, 644.0], [23.2, 645.0], [23.3, 648.0], [23.4, 648.0], [23.5, 649.0], [23.6, 650.0], [23.7, 652.0], [23.8, 654.0], [23.9, 656.0], [24.0, 658.0], [24.1, 659.0], [24.2, 661.0], [24.3, 662.0], [24.4, 663.0], [24.5, 663.0], [24.6, 665.0], [24.7, 665.0], [24.8, 667.0], [24.9, 668.0], [25.0, 668.0], [25.1, 669.0], [25.2, 670.0], [25.3, 671.0], [25.4, 673.0], [25.5, 674.0], [25.6, 674.0], [25.7, 675.0], [25.8, 676.0], [25.9, 678.0], [26.0, 678.0], [26.1, 680.0], [26.2, 681.0], [26.3, 682.0], [26.4, 683.0], [26.5, 685.0], [26.6, 686.0], [26.7, 687.0], [26.8, 688.0], [26.9, 690.0], [27.0, 691.0], [27.1, 693.0], [27.2, 694.0], [27.3, 695.0], [27.4, 697.0], [27.5, 698.0], [27.6, 699.0], [27.7, 699.0], [27.8, 701.0], [27.9, 702.0], [28.0, 703.0], [28.1, 705.0], [28.2, 706.0], [28.3, 708.0], [28.4, 709.0], [28.5, 711.0], [28.6, 713.0], [28.7, 714.0], [28.8, 716.0], [28.9, 717.0], [29.0, 721.0], [29.1, 723.0], [29.2, 724.0], [29.3, 724.0], [29.4, 725.0], [29.5, 727.0], [29.6, 728.0], [29.7, 728.0], [29.8, 730.0], [29.9, 731.0], [30.0, 733.0], [30.1, 734.0], [30.2, 735.0], [30.3, 736.0], [30.4, 738.0], [30.5, 739.0], [30.6, 740.0], [30.7, 741.0], [30.8, 742.0], [30.9, 744.0], [31.0, 746.0], [31.1, 748.0], [31.2, 750.0], [31.3, 752.0], [31.4, 754.0], [31.5, 755.0], [31.6, 757.0], [31.7, 757.0], [31.8, 758.0], [31.9, 761.0], [32.0, 763.0], [32.1, 765.0], [32.2, 767.0], [32.3, 773.0], [32.4, 773.0], [32.5, 775.0], [32.6, 779.0], [32.7, 781.0], [32.8, 783.0], [32.9, 785.0], [33.0, 788.0], [33.1, 791.0], [33.2, 794.0], [33.3, 797.0], [33.4, 800.0], [33.5, 801.0], [33.6, 803.0], [33.7, 806.0], [33.8, 808.0], [33.9, 811.0], [34.0, 812.0], [34.1, 812.0], [34.2, 813.0], [34.3, 814.0], [34.4, 815.0], [34.5, 818.0], [34.6, 820.0], [34.7, 821.0], [34.8, 822.0], [34.9, 825.0], [35.0, 826.0], [35.1, 828.0], [35.2, 830.0], [35.3, 833.0], [35.4, 836.0], [35.5, 837.0], [35.6, 839.0], [35.7, 840.0], [35.8, 843.0], [35.9, 845.0], [36.0, 847.0], [36.1, 848.0], [36.2, 850.0], [36.3, 851.0], [36.4, 853.0], [36.5, 855.0], [36.6, 856.0], [36.7, 857.0], [36.8, 859.0], [36.9, 861.0], [37.0, 862.0], [37.1, 864.0], [37.2, 865.0], [37.3, 869.0], [37.4, 872.0], [37.5, 873.0], [37.6, 875.0], [37.7, 877.0], [37.8, 880.0], [37.9, 881.0], [38.0, 883.0], [38.1, 888.0], [38.2, 890.0], [38.3, 894.0], [38.4, 896.0], [38.5, 897.0], [38.6, 900.0], [38.7, 901.0], [38.8, 903.0], [38.9, 905.0], [39.0, 909.0], [39.1, 911.0], [39.2, 913.0], [39.3, 915.0], [39.4, 917.0], [39.5, 921.0], [39.6, 922.0], [39.7, 925.0], [39.8, 928.0], [39.9, 930.0], [40.0, 931.0], [40.1, 933.0], [40.2, 935.0], [40.3, 938.0], [40.4, 940.0], [40.5, 941.0], [40.6, 945.0], [40.7, 947.0], [40.8, 949.0], [40.9, 951.0], [41.0, 953.0], [41.1, 955.0], [41.2, 956.0], [41.3, 960.0], [41.4, 964.0], [41.5, 966.0], [41.6, 968.0], [41.7, 970.0], [41.8, 972.0], [41.9, 973.0], [42.0, 975.0], [42.1, 976.0], [42.2, 978.0], [42.3, 981.0], [42.4, 982.0], [42.5, 983.0], [42.6, 986.0], [42.7, 988.0], [42.8, 991.0], [42.9, 994.0], [43.0, 995.0], [43.1, 995.0], [43.2, 997.0], [43.3, 998.0], [43.4, 1000.0], [43.5, 1003.0], [43.6, 1005.0], [43.7, 1006.0], [43.8, 1007.0], [43.9, 1009.0], [44.0, 1010.0], [44.1, 1011.0], [44.2, 1015.0], [44.3, 1019.0], [44.4, 1021.0], [44.5, 1023.0], [44.6, 1024.0], [44.7, 1025.0], [44.8, 1026.0], [44.9, 1028.0], [45.0, 1030.0], [45.1, 1030.0], [45.2, 1032.0], [45.3, 1033.0], [45.4, 1035.0], [45.5, 1036.0], [45.6, 1037.0], [45.7, 1039.0], [45.8, 1040.0], [45.9, 1044.0], [46.0, 1047.0], [46.1, 1047.0], [46.2, 1049.0], [46.3, 1052.0], [46.4, 1053.0], [46.5, 1055.0], [46.6, 1057.0], [46.7, 1057.0], [46.8, 1060.0], [46.9, 1061.0], [47.0, 1061.0], [47.1, 1063.0], [47.2, 1063.0], [47.3, 1066.0], [47.4, 1068.0], [47.5, 1070.0], [47.6, 1072.0], [47.7, 1073.0], [47.8, 1075.0], [47.9, 1077.0], [48.0, 1079.0], [48.1, 1080.0], [48.2, 1081.0], [48.3, 1084.0], [48.4, 1085.0], [48.5, 1086.0], [48.6, 1088.0], [48.7, 1089.0], [48.8, 1090.0], [48.9, 1092.0], [49.0, 1094.0], [49.1, 1095.0], [49.2, 1096.0], [49.3, 1098.0], [49.4, 1099.0], [49.5, 1101.0], [49.6, 1104.0], [49.7, 1104.0], [49.8, 1106.0], [49.9, 1108.0], [50.0, 1109.0], [50.1, 1112.0], [50.2, 1117.0], [50.3, 1119.0], [50.4, 1121.0], [50.5, 1123.0], [50.6, 1125.0], [50.7, 1126.0], [50.8, 1128.0], [50.9, 1131.0], [51.0, 1133.0], [51.1, 1136.0], [51.2, 1138.0], [51.3, 1138.0], [51.4, 1140.0], [51.5, 1142.0], [51.6, 1145.0], [51.7, 1146.0], [51.8, 1148.0], [51.9, 1149.0], [52.0, 1151.0], [52.1, 1153.0], [52.2, 1156.0], [52.3, 1156.0], [52.4, 1157.0], [52.5, 1158.0], [52.6, 1159.0], [52.7, 1162.0], [52.8, 1163.0], [52.9, 1166.0], [53.0, 1169.0], [53.1, 1170.0], [53.2, 1172.0], [53.3, 1175.0], [53.4, 1178.0], [53.5, 1181.0], [53.6, 1183.0], [53.7, 1184.0], [53.8, 1187.0], [53.9, 1188.0], [54.0, 1189.0], [54.1, 1192.0], [54.2, 1194.0], [54.3, 1195.0], [54.4, 1196.0], [54.5, 1197.0], [54.6, 1201.0], [54.7, 1203.0], [54.8, 1206.0], [54.9, 1208.0], [55.0, 1210.0], [55.1, 1211.0], [55.2, 1213.0], [55.3, 1216.0], [55.4, 1219.0], [55.5, 1221.0], [55.6, 1222.0], [55.7, 1223.0], [55.8, 1225.0], [55.9, 1227.0], [56.0, 1229.0], [56.1, 1231.0], [56.2, 1233.0], [56.3, 1236.0], [56.4, 1237.0], [56.5, 1239.0], [56.6, 1242.0], [56.7, 1243.0], [56.8, 1245.0], [56.9, 1247.0], [57.0, 1249.0], [57.1, 1250.0], [57.2, 1252.0], [57.3, 1255.0], [57.4, 1258.0], [57.5, 1261.0], [57.6, 1264.0], [57.7, 1266.0], [57.8, 1267.0], [57.9, 1270.0], [58.0, 1272.0], [58.1, 1274.0], [58.2, 1275.0], [58.3, 1276.0], [58.4, 1277.0], [58.5, 1279.0], [58.6, 1281.0], [58.7, 1283.0], [58.8, 1286.0], [58.9, 1288.0], [59.0, 1291.0], [59.1, 1292.0], [59.2, 1295.0], [59.3, 1299.0], [59.4, 1300.0], [59.5, 1301.0], [59.6, 1304.0], [59.7, 1307.0], [59.8, 1308.0], [59.9, 1311.0], [60.0, 1312.0], [60.1, 1314.0], [60.2, 1316.0], [60.3, 1319.0], [60.4, 1321.0], [60.5, 1324.0], [60.6, 1326.0], [60.7, 1327.0], [60.8, 1329.0], [60.9, 1332.0], [61.0, 1334.0], [61.1, 1337.0], [61.2, 1339.0], [61.3, 1341.0], [61.4, 1343.0], [61.5, 1346.0], [61.6, 1347.0], [61.7, 1349.0], [61.8, 1352.0], [61.9, 1354.0], [62.0, 1355.0], [62.1, 1357.0], [62.2, 1360.0], [62.3, 1363.0], [62.4, 1365.0], [62.5, 1366.0], [62.6, 1369.0], [62.7, 1370.0], [62.8, 1372.0], [62.9, 1374.0], [63.0, 1377.0], [63.1, 1381.0], [63.2, 1384.0], [63.3, 1386.0], [63.4, 1389.0], [63.5, 1392.0], [63.6, 1394.0], [63.7, 1395.0], [63.8, 1396.0], [63.9, 1398.0], [64.0, 1400.0], [64.1, 1403.0], [64.2, 1405.0], [64.3, 1406.0], [64.4, 1408.0], [64.5, 1409.0], [64.6, 1411.0], [64.7, 1414.0], [64.8, 1416.0], [64.9, 1417.0], [65.0, 1418.0], [65.1, 1419.0], [65.2, 1425.0], [65.3, 1428.0], [65.4, 1429.0], [65.5, 1430.0], [65.6, 1433.0], [65.7, 1435.0], [65.8, 1436.0], [65.9, 1439.0], [66.0, 1439.0], [66.1, 1441.0], [66.2, 1443.0], [66.3, 1444.0], [66.4, 1446.0], [66.5, 1447.0], [66.6, 1448.0], [66.7, 1452.0], [66.8, 1454.0], [66.9, 1455.0], [67.0, 1458.0], [67.1, 1460.0], [67.2, 1462.0], [67.3, 1464.0], [67.4, 1465.0], [67.5, 1468.0], [67.6, 1470.0], [67.7, 1470.0], [67.8, 1472.0], [67.9, 1474.0], [68.0, 1476.0], [68.1, 1478.0], [68.2, 1480.0], [68.3, 1482.0], [68.4, 1484.0], [68.5, 1488.0], [68.6, 1489.0], [68.7, 1490.0], [68.8, 1492.0], [68.9, 1494.0], [69.0, 1496.0], [69.1, 1498.0], [69.2, 1499.0], [69.3, 1502.0], [69.4, 1503.0], [69.5, 1504.0], [69.6, 1505.0], [69.7, 1507.0], [69.8, 1507.0], [69.9, 1508.0], [70.0, 1510.0], [70.1, 1512.0], [70.2, 1516.0], [70.3, 1517.0], [70.4, 1520.0], [70.5, 1522.0], [70.6, 1524.0], [70.7, 1525.0], [70.8, 1527.0], [70.9, 1528.0], [71.0, 1529.0], [71.1, 1530.0], [71.2, 1532.0], [71.3, 1535.0], [71.4, 1536.0], [71.5, 1537.0], [71.6, 1538.0], [71.7, 1539.0], [71.8, 1541.0], [71.9, 1543.0], [72.0, 1546.0], [72.1, 1548.0], [72.2, 1549.0], [72.3, 1552.0], [72.4, 1553.0], [72.5, 1555.0], [72.6, 1559.0], [72.7, 1562.0], [72.8, 1563.0], [72.9, 1566.0], [73.0, 1569.0], [73.1, 1573.0], [73.2, 1574.0], [73.3, 1576.0], [73.4, 1579.0], [73.5, 1582.0], [73.6, 1583.0], [73.7, 1586.0], [73.8, 1587.0], [73.9, 1590.0], [74.0, 1592.0], [74.1, 1594.0], [74.2, 1595.0], [74.3, 1599.0], [74.4, 1601.0], [74.5, 1602.0], [74.6, 1603.0], [74.7, 1606.0], [74.8, 1610.0], [74.9, 1612.0], [75.0, 1613.0], [75.1, 1614.0], [75.2, 1618.0], [75.3, 1621.0], [75.4, 1622.0], [75.5, 1625.0], [75.6, 1626.0], [75.7, 1627.0], [75.8, 1634.0], [75.9, 1636.0], [76.0, 1639.0], [76.1, 1641.0], [76.2, 1642.0], [76.3, 1645.0], [76.4, 1649.0], [76.5, 1650.0], [76.6, 1652.0], [76.7, 1654.0], [76.8, 1657.0], [76.9, 1661.0], [77.0, 1665.0], [77.1, 1667.0], [77.2, 1668.0], [77.3, 1671.0], [77.4, 1674.0], [77.5, 1677.0], [77.6, 1679.0], [77.7, 1681.0], [77.8, 1687.0], [77.9, 1689.0], [78.0, 1692.0], [78.1, 1695.0], [78.2, 1696.0], [78.3, 1698.0], [78.4, 1700.0], [78.5, 1702.0], [78.6, 1703.0], [78.7, 1706.0], [78.8, 1708.0], [78.9, 1710.0], [79.0, 1712.0], [79.1, 1713.0], [79.2, 1714.0], [79.3, 1716.0], [79.4, 1719.0], [79.5, 1723.0], [79.6, 1725.0], [79.7, 1726.0], [79.8, 1728.0], [79.9, 1732.0], [80.0, 1735.0], [80.1, 1738.0], [80.2, 1740.0], [80.3, 1744.0], [80.4, 1746.0], [80.5, 1749.0], [80.6, 1753.0], [80.7, 1756.0], [80.8, 1759.0], [80.9, 1761.0], [81.0, 1764.0], [81.1, 1766.0], [81.2, 1769.0], [81.3, 1770.0], [81.4, 1772.0], [81.5, 1776.0], [81.6, 1779.0], [81.7, 1782.0], [81.8, 1786.0], [81.9, 1786.0], [82.0, 1789.0], [82.1, 1791.0], [82.2, 1794.0], [82.3, 1798.0], [82.4, 1800.0], [82.5, 1801.0], [82.6, 1804.0], [82.7, 1806.0], [82.8, 1809.0], [82.9, 1811.0], [83.0, 1813.0], [83.1, 1815.0], [83.2, 1819.0], [83.3, 1822.0], [83.4, 1826.0], [83.5, 1828.0], [83.6, 1830.0], [83.7, 1834.0], [83.8, 1837.0], [83.9, 1840.0], [84.0, 1841.0], [84.1, 1844.0], [84.2, 1851.0], [84.3, 1854.0], [84.4, 1858.0], [84.5, 1862.0], [84.6, 1865.0], [84.7, 1873.0], [84.8, 1877.0], [84.9, 1880.0], [85.0, 1887.0], [85.1, 1891.0], [85.2, 1897.0], [85.3, 1902.0], [85.4, 1909.0], [85.5, 1915.0], [85.6, 1918.0], [85.7, 1922.0], [85.8, 1928.0], [85.9, 1930.0], [86.0, 1932.0], [86.1, 1937.0], [86.2, 1943.0], [86.3, 1949.0], [86.4, 1951.0], [86.5, 1954.0], [86.6, 1957.0], [86.7, 1960.0], [86.8, 1964.0], [86.9, 1973.0], [87.0, 1978.0], [87.1, 1982.0], [87.2, 1989.0], [87.3, 1993.0], [87.4, 1996.0], [87.5, 2001.0], [87.6, 2009.0], [87.7, 2015.0], [87.8, 2018.0], [87.9, 2024.0], [88.0, 2031.0], [88.1, 2036.0], [88.2, 2037.0], [88.3, 2040.0], [88.4, 2051.0], [88.5, 2056.0], [88.6, 2058.0], [88.7, 2066.0], [88.8, 2069.0], [88.9, 2074.0], [89.0, 2087.0], [89.1, 2092.0], [89.2, 2096.0], [89.3, 2099.0], [89.4, 2109.0], [89.5, 2119.0], [89.6, 2124.0], [89.7, 2132.0], [89.8, 2141.0], [89.9, 2147.0], [90.0, 2160.0], [90.1, 2166.0], [90.2, 2174.0], [90.3, 2180.0], [90.4, 2187.0], [90.5, 2196.0], [90.6, 2201.0], [90.7, 2207.0], [90.8, 2214.0], [90.9, 2221.0], [91.0, 2229.0], [91.1, 2242.0], [91.2, 2252.0], [91.3, 2266.0], [91.4, 2269.0], [91.5, 2273.0], [91.6, 2282.0], [91.7, 2291.0], [91.8, 2298.0], [91.9, 2305.0], [92.0, 2320.0], [92.1, 2327.0], [92.2, 2336.0], [92.3, 2347.0], [92.4, 2353.0], [92.5, 2358.0], [92.6, 2368.0], [92.7, 2375.0], [92.8, 2381.0], [92.9, 2401.0], [93.0, 2414.0], [93.1, 2420.0], [93.2, 2427.0], [93.3, 2431.0], [93.4, 2435.0], [93.5, 2439.0], [93.6, 2443.0], [93.7, 2451.0], [93.8, 2456.0], [93.9, 2470.0], [94.0, 2474.0], [94.1, 2480.0], [94.2, 2483.0], [94.3, 2489.0], [94.4, 2493.0], [94.5, 2508.0], [94.6, 2515.0], [94.7, 2517.0], [94.8, 2534.0], [94.9, 2541.0], [95.0, 2550.0], [95.1, 2561.0], [95.2, 2580.0], [95.3, 2597.0], [95.4, 2615.0], [95.5, 2635.0], [95.6, 2642.0], [95.7, 2653.0], [95.8, 2669.0], [95.9, 2692.0], [96.0, 2718.0], [96.1, 2763.0], [96.2, 2774.0], [96.3, 2799.0], [96.4, 2815.0], [96.5, 2822.0], [96.6, 2833.0], [96.7, 2846.0], [96.8, 2867.0], [96.9, 2883.0], [97.0, 2893.0], [97.1, 2906.0], [97.2, 2920.0], [97.3, 2924.0], [97.4, 2949.0], [97.5, 2961.0], [97.6, 2969.0], [97.7, 2991.0], [97.8, 3000.0], [97.9, 3022.0], [98.0, 3051.0], [98.1, 3080.0], [98.2, 3135.0], [98.3, 3168.0], [98.4, 3218.0], [98.5, 3268.0], [98.6, 3347.0], [98.7, 3411.0], [98.8, 3458.0], [98.9, 3499.0], [99.0, 3592.0], [99.1, 3669.0], [99.2, 3809.0], [99.3, 3872.0], [99.4, 4005.0], [99.5, 4263.0], [99.6, 4432.0], [99.7, 4988.0], [99.8, 5346.0], [99.9, 6107.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 545.0, "series": [{"data": [[600.0, 424.0], [700.0, 294.0], [800.0, 271.0], [900.0, 248.0], [1000.0, 314.0], [1100.0, 268.0], [1200.0, 248.0], [1300.0, 239.0], [1400.0, 272.0], [1500.0, 267.0], [1600.0, 208.0], [1700.0, 209.0], [1800.0, 148.0], [1900.0, 115.0], [2000.0, 96.0], [2100.0, 66.0], [2200.0, 64.0], [2300.0, 56.0], [2400.0, 81.0], [2500.0, 46.0], [2600.0, 31.0], [2800.0, 39.0], [2700.0, 19.0], [2900.0, 38.0], [3000.0, 21.0], [3100.0, 9.0], [3200.0, 9.0], [3300.0, 7.0], [3400.0, 12.0], [3500.0, 6.0], [3600.0, 6.0], [3700.0, 2.0], [3800.0, 8.0], [3900.0, 3.0], [4000.0, 4.0], [4100.0, 2.0], [4200.0, 2.0], [4300.0, 3.0], [4600.0, 1.0], [4400.0, 2.0], [4800.0, 2.0], [4900.0, 1.0], [5000.0, 1.0], [5100.0, 1.0], [5300.0, 2.0], [5200.0, 1.0], [5500.0, 1.0], [5600.0, 2.0], [5400.0, 1.0], [6100.0, 1.0], [6300.0, 1.0], [6600.0, 2.0], [9100.0, 1.0], [8900.0, 1.0], [200.0, 5.0], [300.0, 63.0], [400.0, 545.0], [500.0, 401.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 618.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2976.0, "series": [{"data": [[0.0, 618.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2976.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1596.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.870333988212181, "minX": 1.60384548E12, "maxY": 12.0, "series": [{"data": [[1.60384572E12, 12.0], [1.6038459E12, 12.0], [1.60384584E12, 12.0], [1.60384554E12, 12.0], [1.60384602E12, 11.870333988212181], [1.60384548E12, 12.0], [1.60384596E12, 12.0], [1.60384566E12, 12.0], [1.6038456E12, 12.0], [1.60384578E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384602E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 586.0, "minX": 1.0, "maxY": 3214.0, "series": [{"data": [[8.0, 1837.0], [4.0, 1357.0], [2.0, 3214.0], [1.0, 2961.0], [9.0, 1447.0], [10.0, 642.0], [5.0, 586.0], [11.0, 1127.0], [12.0, 1245.9397567097926], [6.0, 606.0], [3.0, 2122.0], [7.0, 902.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 1246.5362235067466]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 160.45, "minX": 1.60384548E12, "maxY": 3274652.283333333, "series": [{"data": [[1.60384572E12, 2815316.783333333], [1.6038459E12, 3050111.5833333335], [1.60384584E12, 2091783.2333333334], [1.60384554E12, 2706825.3833333333], [1.60384602E12, 2244157.933333333], [1.60384548E12, 146519.65], [1.60384596E12, 2673896.2333333334], [1.60384566E12, 3274652.283333333], [1.6038456E12, 2319371.0833333335], [1.60384578E12, 2649695.9166666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384572E12, 4688.416666666667], [1.6038459E12, 4375.983333333334], [1.60384584E12, 4200.35], [1.60384554E12, 3874.6833333333334], [1.60384602E12, 3840.8], [1.60384548E12, 160.45], [1.60384596E12, 4702.166666666667], [1.60384566E12, 4654.916666666667], [1.6038456E12, 4467.733333333334], [1.60384578E12, 3611.8333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384602E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1159.5, "minX": 1.60384548E12, "maxY": 2320.809523809524, "series": [{"data": [[1.60384572E12, 1173.5525040387715], [1.6038459E12, 1217.7159863945567], [1.60384584E12, 1240.7814113597244], [1.60384554E12, 1324.5594795539032], [1.60384602E12, 1308.3104125736731], [1.60384548E12, 2320.809523809524], [1.60384596E12, 1169.770597738287], [1.60384566E12, 1159.5], [1.6038456E12, 1188.3579638752033], [1.60384578E12, 1461.7317073170748]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384602E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1157.2801302931603, "minX": 1.60384548E12, "maxY": 2316.904761904762, "series": [{"data": [[1.60384572E12, 1171.6704361873983], [1.6038459E12, 1215.702380952381], [1.60384584E12, 1239.1325301204815], [1.60384554E12, 1322.3438661710038], [1.60384602E12, 1306.5795677799604], [1.60384548E12, 2316.904761904762], [1.60384596E12, 1167.9208400646214], [1.60384566E12, 1157.2801302931603], [1.6038456E12, 1186.3054187192126], [1.60384578E12, 1459.5467479674808]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384602E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011400651465798047, "minX": 1.60384548E12, "maxY": 5.476190476190479, "series": [{"data": [[1.60384572E12, 0.01938610662358644], [1.6038459E12, 0.020408163265306128], [1.60384584E12, 0.027538726333907044], [1.60384554E12, 0.022304832713754653], [1.60384602E12, 0.017681728880157163], [1.60384548E12, 5.476190476190479], [1.60384596E12, 0.02423263327948304], [1.60384566E12, 0.011400651465798047], [1.6038456E12, 0.03284072249589491], [1.60384578E12, 0.026422764227642295]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384602E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 222.0, "minX": 1.60384548E12, "maxY": 9166.0, "series": [{"data": [[1.60384572E12, 5668.0], [1.6038459E12, 3347.0], [1.60384584E12, 6621.0], [1.60384554E12, 9166.0], [1.60384602E12, 4432.0], [1.60384548E12, 4126.0], [1.60384596E12, 3422.0], [1.60384566E12, 4616.0], [1.6038456E12, 4324.0], [1.60384578E12, 8947.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384572E12, 384.0], [1.6038459E12, 432.5049992978573], [1.60384584E12, 387.71399958372115], [1.60384554E12, 430.36099858641626], [1.60384602E12, 386.17999975681306], [1.60384548E12, 554.0], [1.60384596E12, 403.7399995565414], [1.60384566E12, 381.5349998533726], [1.6038456E12, 397.48999985456464], [1.60384578E12, 443.43699988245965]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384572E12, 384.27600011825564], [1.6038459E12, 435.1555002808571], [1.60384584E12, 389.2854001665115], [1.60384554E12, 434.0166003084183], [1.60384602E12, 387.1960001945496], [1.60384548E12, 554.0], [1.60384596E12, 405.4140001773834], [1.60384566E12, 382.2655001759529], [1.6038456E12, 398.0], [1.60384578E12, 443.88070004701615]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384572E12, 384.0], [1.6038459E12, 433.97749964892864], [1.60384584E12, 388.5869997918606], [1.60384554E12, 432.72299961447715], [1.60384602E12, 386.6899998784065], [1.60384548E12, 554.0], [1.60384596E12, 404.6699997782707], [1.60384566E12, 381.8424999266863], [1.6038456E12, 397.79499992728233], [1.60384578E12, 443.6834999412298]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384572E12, 361.0], [1.6038459E12, 337.0], [1.60384584E12, 241.0], [1.60384554E12, 222.0], [1.60384602E12, 252.0], [1.60384548E12, 554.0], [1.60384596E12, 385.0], [1.60384566E12, 260.0], [1.6038456E12, 285.0], [1.60384578E12, 419.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384572E12, 1061.0], [1.6038459E12, 1074.0], [1.60384584E12, 1088.0], [1.60384554E12, 1145.5], [1.60384602E12, 1190.0], [1.60384548E12, 2838.0], [1.60384596E12, 1063.0], [1.60384566E12, 1004.0], [1.6038456E12, 933.0], [1.60384578E12, 1291.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384602E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 435.5, "minX": 1.0, "maxY": 2961.0, "series": [{"data": [[2.0, 2145.5], [3.0, 1317.5], [4.0, 1919.0], [5.0, 1720.0], [6.0, 1537.5], [7.0, 1436.0], [8.0, 1354.0], [9.0, 1289.0], [10.0, 1224.0], [11.0, 1157.0], [12.0, 1034.5], [13.0, 884.5], [14.0, 599.5], [15.0, 627.5], [16.0, 713.0], [1.0, 2961.0], [17.0, 540.0], [18.0, 586.0], [19.0, 487.0], [20.0, 474.0], [21.0, 462.0], [22.0, 454.0], [23.0, 463.5], [24.0, 462.5], [25.0, 452.0], [26.0, 435.5], [27.0, 442.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 435.0, "minX": 1.0, "maxY": 2961.0, "series": [{"data": [[2.0, 2142.0], [3.0, 1316.0], [4.0, 1915.0], [5.0, 1715.0], [6.0, 1535.0], [7.0, 1432.0], [8.0, 1353.0], [9.0, 1286.0], [10.0, 1223.0], [11.0, 1156.0], [12.0, 1031.0], [13.0, 882.5], [14.0, 599.5], [15.0, 627.5], [16.0, 712.5], [1.0, 2961.0], [17.0, 540.0], [18.0, 586.0], [19.0, 486.0], [20.0, 473.0], [21.0, 462.0], [22.0, 453.5], [23.0, 462.5], [24.0, 462.0], [25.0, 452.0], [26.0, 435.0], [27.0, 441.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.55, "minX": 1.60384548E12, "maxY": 10.316666666666666, "series": [{"data": [[1.60384572E12, 10.316666666666666], [1.6038459E12, 9.8], [1.60384584E12, 9.683333333333334], [1.60384554E12, 8.966666666666667], [1.60384602E12, 8.283333333333333], [1.60384548E12, 0.55], [1.60384596E12, 10.316666666666666], [1.60384566E12, 10.233333333333333], [1.6038456E12, 10.15], [1.60384578E12, 8.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384602E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.60384548E12, "maxY": 10.316666666666666, "series": [{"data": [[1.60384572E12, 10.316666666666666], [1.6038459E12, 9.8], [1.60384584E12, 9.683333333333334], [1.60384554E12, 8.966666666666667], [1.60384602E12, 8.483333333333333], [1.60384548E12, 0.35], [1.60384596E12, 10.316666666666666], [1.60384566E12, 10.233333333333333], [1.6038456E12, 10.15], [1.60384578E12, 8.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384602E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.60384548E12, "maxY": 10.316666666666666, "series": [{"data": [[1.60384572E12, 10.316666666666666], [1.6038459E12, 9.8], [1.60384584E12, 9.683333333333334], [1.60384554E12, 8.966666666666667], [1.60384602E12, 8.483333333333333], [1.60384548E12, 0.35], [1.60384596E12, 10.316666666666666], [1.60384566E12, 10.233333333333333], [1.6038456E12, 10.15], [1.60384578E12, 8.2]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384602E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.60384548E12, "maxY": 10.316666666666666, "series": [{"data": [[1.60384572E12, 10.316666666666666], [1.6038459E12, 9.8], [1.60384584E12, 9.683333333333334], [1.60384554E12, 8.966666666666667], [1.60384602E12, 8.483333333333333], [1.60384548E12, 0.35], [1.60384596E12, 10.316666666666666], [1.60384566E12, 10.233333333333333], [1.6038456E12, 10.15], [1.60384578E12, 8.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384602E12, "title": "Total Transactions Per Second"}},
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

