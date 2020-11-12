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
        data: {"result": {"minY": 202.0, "minX": 0.0, "maxY": 6498.0, "series": [{"data": [[0.0, 202.0], [0.1, 234.0], [0.2, 317.0], [0.3, 370.0], [0.4, 374.0], [0.5, 379.0], [0.6, 383.0], [0.7, 383.0], [0.8, 386.0], [0.9, 388.0], [1.0, 390.0], [1.1, 392.0], [1.2, 393.0], [1.3, 395.0], [1.4, 397.0], [1.5, 398.0], [1.6, 400.0], [1.7, 401.0], [1.8, 402.0], [1.9, 403.0], [2.0, 405.0], [2.1, 406.0], [2.2, 407.0], [2.3, 407.0], [2.4, 409.0], [2.5, 409.0], [2.6, 410.0], [2.7, 411.0], [2.8, 412.0], [2.9, 413.0], [3.0, 414.0], [3.1, 415.0], [3.2, 416.0], [3.3, 418.0], [3.4, 420.0], [3.5, 420.0], [3.6, 422.0], [3.7, 423.0], [3.8, 424.0], [3.9, 425.0], [4.0, 425.0], [4.1, 427.0], [4.2, 427.0], [4.3, 428.0], [4.4, 430.0], [4.5, 430.0], [4.6, 431.0], [4.7, 431.0], [4.8, 432.0], [4.9, 433.0], [5.0, 433.0], [5.1, 434.0], [5.2, 435.0], [5.3, 436.0], [5.4, 437.0], [5.5, 438.0], [5.6, 438.0], [5.7, 439.0], [5.8, 439.0], [5.9, 440.0], [6.0, 441.0], [6.1, 442.0], [6.2, 442.0], [6.3, 443.0], [6.4, 444.0], [6.5, 444.0], [6.6, 445.0], [6.7, 445.0], [6.8, 447.0], [6.9, 447.0], [7.0, 448.0], [7.1, 449.0], [7.2, 450.0], [7.3, 451.0], [7.4, 451.0], [7.5, 452.0], [7.6, 453.0], [7.7, 454.0], [7.8, 455.0], [7.9, 455.0], [8.0, 456.0], [8.1, 457.0], [8.2, 458.0], [8.3, 458.0], [8.4, 459.0], [8.5, 459.0], [8.6, 460.0], [8.7, 460.0], [8.8, 460.0], [8.9, 461.0], [9.0, 462.0], [9.1, 463.0], [9.2, 463.0], [9.3, 464.0], [9.4, 465.0], [9.5, 467.0], [9.6, 467.0], [9.7, 468.0], [9.8, 469.0], [9.9, 471.0], [10.0, 471.0], [10.1, 472.0], [10.2, 473.0], [10.3, 473.0], [10.4, 473.0], [10.5, 475.0], [10.6, 476.0], [10.7, 477.0], [10.8, 478.0], [10.9, 479.0], [11.0, 480.0], [11.1, 482.0], [11.2, 482.0], [11.3, 483.0], [11.4, 484.0], [11.5, 486.0], [11.6, 488.0], [11.7, 489.0], [11.8, 491.0], [11.9, 492.0], [12.0, 493.0], [12.1, 494.0], [12.2, 495.0], [12.3, 496.0], [12.4, 498.0], [12.5, 499.0], [12.6, 500.0], [12.7, 501.0], [12.8, 501.0], [12.9, 503.0], [13.0, 504.0], [13.1, 506.0], [13.2, 508.0], [13.3, 510.0], [13.4, 510.0], [13.5, 513.0], [13.6, 514.0], [13.7, 516.0], [13.8, 516.0], [13.9, 518.0], [14.0, 519.0], [14.1, 521.0], [14.2, 524.0], [14.3, 527.0], [14.4, 528.0], [14.5, 529.0], [14.6, 533.0], [14.7, 534.0], [14.8, 536.0], [14.9, 537.0], [15.0, 539.0], [15.1, 541.0], [15.2, 542.0], [15.3, 544.0], [15.4, 545.0], [15.5, 547.0], [15.6, 548.0], [15.7, 549.0], [15.8, 549.0], [15.9, 550.0], [16.0, 551.0], [16.1, 551.0], [16.2, 554.0], [16.3, 555.0], [16.4, 556.0], [16.5, 557.0], [16.6, 558.0], [16.7, 559.0], [16.8, 560.0], [16.9, 561.0], [17.0, 563.0], [17.1, 563.0], [17.2, 564.0], [17.3, 565.0], [17.4, 566.0], [17.5, 567.0], [17.6, 567.0], [17.7, 569.0], [17.8, 570.0], [17.9, 573.0], [18.0, 574.0], [18.1, 575.0], [18.2, 576.0], [18.3, 577.0], [18.4, 578.0], [18.5, 580.0], [18.6, 581.0], [18.7, 582.0], [18.8, 583.0], [18.9, 584.0], [19.0, 585.0], [19.1, 586.0], [19.2, 587.0], [19.3, 588.0], [19.4, 589.0], [19.5, 592.0], [19.6, 593.0], [19.7, 595.0], [19.8, 596.0], [19.9, 597.0], [20.0, 599.0], [20.1, 600.0], [20.2, 602.0], [20.3, 602.0], [20.4, 604.0], [20.5, 605.0], [20.6, 607.0], [20.7, 608.0], [20.8, 608.0], [20.9, 610.0], [21.0, 611.0], [21.1, 612.0], [21.2, 613.0], [21.3, 615.0], [21.4, 616.0], [21.5, 617.0], [21.6, 618.0], [21.7, 619.0], [21.8, 621.0], [21.9, 622.0], [22.0, 624.0], [22.1, 624.0], [22.2, 626.0], [22.3, 627.0], [22.4, 629.0], [22.5, 630.0], [22.6, 631.0], [22.7, 634.0], [22.8, 634.0], [22.9, 635.0], [23.0, 636.0], [23.1, 637.0], [23.2, 638.0], [23.3, 639.0], [23.4, 640.0], [23.5, 641.0], [23.6, 642.0], [23.7, 643.0], [23.8, 644.0], [23.9, 645.0], [24.0, 646.0], [24.1, 647.0], [24.2, 648.0], [24.3, 650.0], [24.4, 652.0], [24.5, 653.0], [24.6, 654.0], [24.7, 654.0], [24.8, 655.0], [24.9, 656.0], [25.0, 657.0], [25.1, 659.0], [25.2, 660.0], [25.3, 661.0], [25.4, 663.0], [25.5, 665.0], [25.6, 665.0], [25.7, 666.0], [25.8, 667.0], [25.9, 669.0], [26.0, 670.0], [26.1, 672.0], [26.2, 674.0], [26.3, 675.0], [26.4, 677.0], [26.5, 678.0], [26.6, 679.0], [26.7, 680.0], [26.8, 681.0], [26.9, 684.0], [27.0, 685.0], [27.1, 687.0], [27.2, 689.0], [27.3, 690.0], [27.4, 691.0], [27.5, 693.0], [27.6, 696.0], [27.7, 696.0], [27.8, 698.0], [27.9, 700.0], [28.0, 701.0], [28.1, 702.0], [28.2, 704.0], [28.3, 705.0], [28.4, 706.0], [28.5, 708.0], [28.6, 708.0], [28.7, 709.0], [28.8, 710.0], [28.9, 711.0], [29.0, 713.0], [29.1, 716.0], [29.2, 717.0], [29.3, 718.0], [29.4, 720.0], [29.5, 721.0], [29.6, 722.0], [29.7, 723.0], [29.8, 724.0], [29.9, 725.0], [30.0, 727.0], [30.1, 729.0], [30.2, 729.0], [30.3, 731.0], [30.4, 733.0], [30.5, 734.0], [30.6, 735.0], [30.7, 738.0], [30.8, 739.0], [30.9, 741.0], [31.0, 742.0], [31.1, 744.0], [31.2, 745.0], [31.3, 747.0], [31.4, 749.0], [31.5, 750.0], [31.6, 751.0], [31.7, 754.0], [31.8, 757.0], [31.9, 759.0], [32.0, 760.0], [32.1, 763.0], [32.2, 764.0], [32.3, 766.0], [32.4, 767.0], [32.5, 768.0], [32.6, 769.0], [32.7, 772.0], [32.8, 773.0], [32.9, 773.0], [33.0, 776.0], [33.1, 777.0], [33.2, 779.0], [33.3, 781.0], [33.4, 782.0], [33.5, 783.0], [33.6, 784.0], [33.7, 786.0], [33.8, 787.0], [33.9, 788.0], [34.0, 789.0], [34.1, 792.0], [34.2, 794.0], [34.3, 796.0], [34.4, 797.0], [34.5, 800.0], [34.6, 801.0], [34.7, 802.0], [34.8, 804.0], [34.9, 806.0], [35.0, 807.0], [35.1, 811.0], [35.2, 813.0], [35.3, 816.0], [35.4, 819.0], [35.5, 821.0], [35.6, 823.0], [35.7, 824.0], [35.8, 826.0], [35.9, 829.0], [36.0, 830.0], [36.1, 831.0], [36.2, 833.0], [36.3, 835.0], [36.4, 839.0], [36.5, 841.0], [36.6, 843.0], [36.7, 845.0], [36.8, 847.0], [36.9, 850.0], [37.0, 854.0], [37.1, 855.0], [37.2, 857.0], [37.3, 857.0], [37.4, 861.0], [37.5, 862.0], [37.6, 865.0], [37.7, 868.0], [37.8, 869.0], [37.9, 871.0], [38.0, 873.0], [38.1, 875.0], [38.2, 877.0], [38.3, 878.0], [38.4, 879.0], [38.5, 881.0], [38.6, 882.0], [38.7, 883.0], [38.8, 884.0], [38.9, 885.0], [39.0, 887.0], [39.1, 888.0], [39.2, 891.0], [39.3, 892.0], [39.4, 894.0], [39.5, 896.0], [39.6, 897.0], [39.7, 899.0], [39.8, 901.0], [39.9, 904.0], [40.0, 906.0], [40.1, 907.0], [40.2, 909.0], [40.3, 910.0], [40.4, 912.0], [40.5, 913.0], [40.6, 916.0], [40.7, 919.0], [40.8, 922.0], [40.9, 923.0], [41.0, 925.0], [41.1, 928.0], [41.2, 929.0], [41.3, 931.0], [41.4, 933.0], [41.5, 935.0], [41.6, 938.0], [41.7, 939.0], [41.8, 941.0], [41.9, 945.0], [42.0, 948.0], [42.1, 950.0], [42.2, 953.0], [42.3, 957.0], [42.4, 959.0], [42.5, 960.0], [42.6, 962.0], [42.7, 965.0], [42.8, 965.0], [42.9, 968.0], [43.0, 971.0], [43.1, 974.0], [43.2, 977.0], [43.3, 979.0], [43.4, 980.0], [43.5, 982.0], [43.6, 984.0], [43.7, 987.0], [43.8, 988.0], [43.9, 990.0], [44.0, 991.0], [44.1, 994.0], [44.2, 996.0], [44.3, 998.0], [44.4, 1000.0], [44.5, 1001.0], [44.6, 1003.0], [44.7, 1005.0], [44.8, 1009.0], [44.9, 1011.0], [45.0, 1013.0], [45.1, 1014.0], [45.2, 1015.0], [45.3, 1017.0], [45.4, 1018.0], [45.5, 1020.0], [45.6, 1022.0], [45.7, 1026.0], [45.8, 1028.0], [45.9, 1030.0], [46.0, 1031.0], [46.1, 1033.0], [46.2, 1034.0], [46.3, 1035.0], [46.4, 1038.0], [46.5, 1040.0], [46.6, 1041.0], [46.7, 1043.0], [46.8, 1045.0], [46.9, 1048.0], [47.0, 1050.0], [47.1, 1051.0], [47.2, 1052.0], [47.3, 1052.0], [47.4, 1055.0], [47.5, 1057.0], [47.6, 1059.0], [47.7, 1061.0], [47.8, 1063.0], [47.9, 1066.0], [48.0, 1066.0], [48.1, 1068.0], [48.2, 1071.0], [48.3, 1074.0], [48.4, 1076.0], [48.5, 1078.0], [48.6, 1081.0], [48.7, 1081.0], [48.8, 1082.0], [48.9, 1083.0], [49.0, 1084.0], [49.1, 1087.0], [49.2, 1089.0], [49.3, 1090.0], [49.4, 1093.0], [49.5, 1096.0], [49.6, 1097.0], [49.7, 1100.0], [49.8, 1102.0], [49.9, 1103.0], [50.0, 1105.0], [50.1, 1107.0], [50.2, 1107.0], [50.3, 1108.0], [50.4, 1112.0], [50.5, 1113.0], [50.6, 1115.0], [50.7, 1116.0], [50.8, 1117.0], [50.9, 1118.0], [51.0, 1120.0], [51.1, 1121.0], [51.2, 1122.0], [51.3, 1124.0], [51.4, 1126.0], [51.5, 1128.0], [51.6, 1130.0], [51.7, 1133.0], [51.8, 1134.0], [51.9, 1135.0], [52.0, 1138.0], [52.1, 1139.0], [52.2, 1140.0], [52.3, 1141.0], [52.4, 1142.0], [52.5, 1145.0], [52.6, 1146.0], [52.7, 1147.0], [52.8, 1148.0], [52.9, 1149.0], [53.0, 1152.0], [53.1, 1153.0], [53.2, 1155.0], [53.3, 1157.0], [53.4, 1157.0], [53.5, 1158.0], [53.6, 1162.0], [53.7, 1163.0], [53.8, 1165.0], [53.9, 1166.0], [54.0, 1167.0], [54.1, 1169.0], [54.2, 1170.0], [54.3, 1171.0], [54.4, 1174.0], [54.5, 1176.0], [54.6, 1179.0], [54.7, 1181.0], [54.8, 1183.0], [54.9, 1185.0], [55.0, 1187.0], [55.1, 1189.0], [55.2, 1191.0], [55.3, 1193.0], [55.4, 1195.0], [55.5, 1197.0], [55.6, 1199.0], [55.7, 1201.0], [55.8, 1203.0], [55.9, 1203.0], [56.0, 1204.0], [56.1, 1207.0], [56.2, 1208.0], [56.3, 1211.0], [56.4, 1214.0], [56.5, 1216.0], [56.6, 1220.0], [56.7, 1223.0], [56.8, 1225.0], [56.9, 1230.0], [57.0, 1232.0], [57.1, 1234.0], [57.2, 1237.0], [57.3, 1238.0], [57.4, 1240.0], [57.5, 1242.0], [57.6, 1245.0], [57.7, 1249.0], [57.8, 1251.0], [57.9, 1254.0], [58.0, 1255.0], [58.1, 1257.0], [58.2, 1259.0], [58.3, 1260.0], [58.4, 1262.0], [58.5, 1263.0], [58.6, 1265.0], [58.7, 1267.0], [58.8, 1268.0], [58.9, 1271.0], [59.0, 1274.0], [59.1, 1278.0], [59.2, 1280.0], [59.3, 1283.0], [59.4, 1285.0], [59.5, 1287.0], [59.6, 1288.0], [59.7, 1292.0], [59.8, 1294.0], [59.9, 1296.0], [60.0, 1297.0], [60.1, 1300.0], [60.2, 1302.0], [60.3, 1304.0], [60.4, 1306.0], [60.5, 1307.0], [60.6, 1309.0], [60.7, 1311.0], [60.8, 1313.0], [60.9, 1316.0], [61.0, 1318.0], [61.1, 1320.0], [61.2, 1321.0], [61.3, 1322.0], [61.4, 1325.0], [61.5, 1327.0], [61.6, 1330.0], [61.7, 1332.0], [61.8, 1334.0], [61.9, 1336.0], [62.0, 1338.0], [62.1, 1340.0], [62.2, 1342.0], [62.3, 1344.0], [62.4, 1346.0], [62.5, 1347.0], [62.6, 1349.0], [62.7, 1353.0], [62.8, 1354.0], [62.9, 1355.0], [63.0, 1357.0], [63.1, 1359.0], [63.2, 1363.0], [63.3, 1365.0], [63.4, 1366.0], [63.5, 1371.0], [63.6, 1372.0], [63.7, 1374.0], [63.8, 1377.0], [63.9, 1379.0], [64.0, 1381.0], [64.1, 1382.0], [64.2, 1384.0], [64.3, 1386.0], [64.4, 1387.0], [64.5, 1389.0], [64.6, 1390.0], [64.7, 1392.0], [64.8, 1394.0], [64.9, 1396.0], [65.0, 1399.0], [65.1, 1400.0], [65.2, 1401.0], [65.3, 1403.0], [65.4, 1404.0], [65.5, 1406.0], [65.6, 1408.0], [65.7, 1409.0], [65.8, 1410.0], [65.9, 1411.0], [66.0, 1412.0], [66.1, 1414.0], [66.2, 1416.0], [66.3, 1416.0], [66.4, 1419.0], [66.5, 1421.0], [66.6, 1422.0], [66.7, 1424.0], [66.8, 1425.0], [66.9, 1429.0], [67.0, 1430.0], [67.1, 1431.0], [67.2, 1432.0], [67.3, 1434.0], [67.4, 1436.0], [67.5, 1436.0], [67.6, 1438.0], [67.7, 1440.0], [67.8, 1441.0], [67.9, 1443.0], [68.0, 1445.0], [68.1, 1447.0], [68.2, 1448.0], [68.3, 1450.0], [68.4, 1452.0], [68.5, 1454.0], [68.6, 1457.0], [68.7, 1459.0], [68.8, 1460.0], [68.9, 1461.0], [69.0, 1463.0], [69.1, 1466.0], [69.2, 1468.0], [69.3, 1469.0], [69.4, 1472.0], [69.5, 1474.0], [69.6, 1477.0], [69.7, 1479.0], [69.8, 1482.0], [69.9, 1483.0], [70.0, 1485.0], [70.1, 1487.0], [70.2, 1491.0], [70.3, 1492.0], [70.4, 1493.0], [70.5, 1495.0], [70.6, 1498.0], [70.7, 1501.0], [70.8, 1503.0], [70.9, 1505.0], [71.0, 1506.0], [71.1, 1508.0], [71.2, 1509.0], [71.3, 1510.0], [71.4, 1513.0], [71.5, 1514.0], [71.6, 1516.0], [71.7, 1518.0], [71.8, 1522.0], [71.9, 1523.0], [72.0, 1525.0], [72.1, 1527.0], [72.2, 1530.0], [72.3, 1532.0], [72.4, 1533.0], [72.5, 1534.0], [72.6, 1537.0], [72.7, 1537.0], [72.8, 1539.0], [72.9, 1539.0], [73.0, 1542.0], [73.1, 1544.0], [73.2, 1547.0], [73.3, 1549.0], [73.4, 1550.0], [73.5, 1551.0], [73.6, 1553.0], [73.7, 1554.0], [73.8, 1556.0], [73.9, 1558.0], [74.0, 1558.0], [74.1, 1561.0], [74.2, 1564.0], [74.3, 1566.0], [74.4, 1569.0], [74.5, 1571.0], [74.6, 1572.0], [74.7, 1575.0], [74.8, 1577.0], [74.9, 1579.0], [75.0, 1580.0], [75.1, 1585.0], [75.2, 1588.0], [75.3, 1591.0], [75.4, 1592.0], [75.5, 1595.0], [75.6, 1599.0], [75.7, 1605.0], [75.8, 1607.0], [75.9, 1608.0], [76.0, 1610.0], [76.1, 1611.0], [76.2, 1614.0], [76.3, 1615.0], [76.4, 1617.0], [76.5, 1619.0], [76.6, 1620.0], [76.7, 1622.0], [76.8, 1624.0], [76.9, 1627.0], [77.0, 1629.0], [77.1, 1630.0], [77.2, 1633.0], [77.3, 1633.0], [77.4, 1637.0], [77.5, 1638.0], [77.6, 1641.0], [77.7, 1643.0], [77.8, 1646.0], [77.9, 1648.0], [78.0, 1650.0], [78.1, 1652.0], [78.2, 1654.0], [78.3, 1656.0], [78.4, 1658.0], [78.5, 1659.0], [78.6, 1664.0], [78.7, 1666.0], [78.8, 1667.0], [78.9, 1670.0], [79.0, 1675.0], [79.1, 1676.0], [79.2, 1677.0], [79.3, 1682.0], [79.4, 1685.0], [79.5, 1689.0], [79.6, 1693.0], [79.7, 1695.0], [79.8, 1696.0], [79.9, 1699.0], [80.0, 1701.0], [80.1, 1704.0], [80.2, 1706.0], [80.3, 1710.0], [80.4, 1712.0], [80.5, 1713.0], [80.6, 1716.0], [80.7, 1718.0], [80.8, 1720.0], [80.9, 1723.0], [81.0, 1726.0], [81.1, 1729.0], [81.2, 1732.0], [81.3, 1735.0], [81.4, 1737.0], [81.5, 1739.0], [81.6, 1742.0], [81.7, 1745.0], [81.8, 1747.0], [81.9, 1749.0], [82.0, 1751.0], [82.1, 1754.0], [82.2, 1756.0], [82.3, 1760.0], [82.4, 1765.0], [82.5, 1768.0], [82.6, 1771.0], [82.7, 1774.0], [82.8, 1777.0], [82.9, 1781.0], [83.0, 1782.0], [83.1, 1785.0], [83.2, 1786.0], [83.3, 1790.0], [83.4, 1793.0], [83.5, 1796.0], [83.6, 1799.0], [83.7, 1803.0], [83.8, 1806.0], [83.9, 1812.0], [84.0, 1817.0], [84.1, 1819.0], [84.2, 1826.0], [84.3, 1830.0], [84.4, 1832.0], [84.5, 1834.0], [84.6, 1837.0], [84.7, 1839.0], [84.8, 1842.0], [84.9, 1847.0], [85.0, 1852.0], [85.1, 1854.0], [85.2, 1858.0], [85.3, 1865.0], [85.4, 1869.0], [85.5, 1871.0], [85.6, 1877.0], [85.7, 1882.0], [85.8, 1888.0], [85.9, 1893.0], [86.0, 1895.0], [86.1, 1900.0], [86.2, 1905.0], [86.3, 1910.0], [86.4, 1918.0], [86.5, 1920.0], [86.6, 1926.0], [86.7, 1929.0], [86.8, 1936.0], [86.9, 1942.0], [87.0, 1948.0], [87.1, 1952.0], [87.2, 1955.0], [87.3, 1961.0], [87.4, 1969.0], [87.5, 1971.0], [87.6, 1978.0], [87.7, 1981.0], [87.8, 1986.0], [87.9, 1988.0], [88.0, 1995.0], [88.1, 1998.0], [88.2, 2006.0], [88.3, 2013.0], [88.4, 2015.0], [88.5, 2023.0], [88.6, 2026.0], [88.7, 2031.0], [88.8, 2038.0], [88.9, 2039.0], [89.0, 2042.0], [89.1, 2044.0], [89.2, 2049.0], [89.3, 2051.0], [89.4, 2055.0], [89.5, 2061.0], [89.6, 2069.0], [89.7, 2075.0], [89.8, 2078.0], [89.9, 2084.0], [90.0, 2091.0], [90.1, 2096.0], [90.2, 2104.0], [90.3, 2112.0], [90.4, 2118.0], [90.5, 2123.0], [90.6, 2138.0], [90.7, 2146.0], [90.8, 2152.0], [90.9, 2157.0], [91.0, 2164.0], [91.1, 2171.0], [91.2, 2186.0], [91.3, 2189.0], [91.4, 2193.0], [91.5, 2208.0], [91.6, 2212.0], [91.7, 2225.0], [91.8, 2229.0], [91.9, 2233.0], [92.0, 2245.0], [92.1, 2252.0], [92.2, 2263.0], [92.3, 2268.0], [92.4, 2274.0], [92.5, 2285.0], [92.6, 2293.0], [92.7, 2298.0], [92.8, 2311.0], [92.9, 2323.0], [93.0, 2329.0], [93.1, 2333.0], [93.2, 2342.0], [93.3, 2351.0], [93.4, 2355.0], [93.5, 2367.0], [93.6, 2374.0], [93.7, 2389.0], [93.8, 2398.0], [93.9, 2406.0], [94.0, 2414.0], [94.1, 2423.0], [94.2, 2428.0], [94.3, 2437.0], [94.4, 2449.0], [94.5, 2455.0], [94.6, 2459.0], [94.7, 2471.0], [94.8, 2479.0], [94.9, 2491.0], [95.0, 2496.0], [95.1, 2503.0], [95.2, 2514.0], [95.3, 2519.0], [95.4, 2528.0], [95.5, 2538.0], [95.6, 2540.0], [95.7, 2549.0], [95.8, 2565.0], [95.9, 2577.0], [96.0, 2586.0], [96.1, 2597.0], [96.2, 2623.0], [96.3, 2632.0], [96.4, 2640.0], [96.5, 2658.0], [96.6, 2680.0], [96.7, 2710.0], [96.8, 2731.0], [96.9, 2746.0], [97.0, 2757.0], [97.1, 2778.0], [97.2, 2801.0], [97.3, 2818.0], [97.4, 2836.0], [97.5, 2854.0], [97.6, 2879.0], [97.7, 2927.0], [97.8, 2954.0], [97.9, 3007.0], [98.0, 3023.0], [98.1, 3052.0], [98.2, 3078.0], [98.3, 3131.0], [98.4, 3160.0], [98.5, 3212.0], [98.6, 3245.0], [98.7, 3302.0], [98.8, 3380.0], [98.9, 3417.0], [99.0, 3463.0], [99.1, 3541.0], [99.2, 3719.0], [99.3, 3792.0], [99.4, 3862.0], [99.5, 4233.0], [99.6, 4363.0], [99.7, 5153.0], [99.8, 5461.0], [99.9, 5830.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 571.0, "series": [{"data": [[600.0, 408.0], [700.0, 341.0], [800.0, 273.0], [900.0, 241.0], [1000.0, 276.0], [1100.0, 310.0], [1200.0, 230.0], [1300.0, 259.0], [1400.0, 290.0], [1500.0, 256.0], [1600.0, 223.0], [1700.0, 192.0], [1800.0, 128.0], [1900.0, 107.0], [2000.0, 105.0], [2100.0, 68.0], [2200.0, 67.0], [2300.0, 56.0], [2400.0, 64.0], [2500.0, 54.0], [2600.0, 29.0], [2700.0, 27.0], [2800.0, 24.0], [2900.0, 12.0], [3000.0, 18.0], [3100.0, 14.0], [3300.0, 10.0], [3200.0, 8.0], [3400.0, 12.0], [3500.0, 4.0], [3700.0, 6.0], [3600.0, 2.0], [3800.0, 6.0], [3900.0, 1.0], [4000.0, 2.0], [4200.0, 3.0], [4300.0, 4.0], [4100.0, 1.0], [4800.0, 1.0], [5100.0, 2.0], [4900.0, 1.0], [5000.0, 1.0], [5200.0, 2.0], [5300.0, 1.0], [5500.0, 3.0], [5400.0, 1.0], [5800.0, 2.0], [6000.0, 1.0], [5900.0, 2.0], [6300.0, 1.0], [6400.0, 1.0], [200.0, 10.0], [300.0, 70.0], [400.0, 571.0], [500.0, 389.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 659.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3009.0, "series": [{"data": [[0.0, 659.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3009.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1522.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.698630136986303, "minX": 1.60506606E12, "maxY": 12.0, "series": [{"data": [[1.60506624E12, 12.0], [1.60506642E12, 12.0], [1.60506612E12, 12.0], [1.6050666E12, 11.698630136986303], [1.6050663E12, 12.0], [1.60506648E12, 12.0], [1.60506618E12, 12.0], [1.60506636E12, 12.0], [1.60506606E12, 12.0], [1.60506654E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050666E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 606.0, "minX": 1.0, "maxY": 3534.0, "series": [{"data": [[8.0, 1978.0], [4.0, 1889.0], [2.0, 3534.0], [1.0, 3109.0], [9.0, 1051.0], [10.0, 1612.0], [5.0, 987.0], [11.0, 963.0], [12.0, 1220.0778142498518], [6.0, 843.0], [3.0, 1215.0], [7.0, 606.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 1220.9190751445053]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1095.8, "minX": 1.60506606E12, "maxY": 3244965.65, "series": [{"data": [[1.60506624E12, 3041112.95], [1.60506642E12, 2193707.716666667], [1.60506612E12, 2397489.716666667], [1.6050666E12, 1028647.1666666666], [1.6050663E12, 2667176.5166666666], [1.60506648E12, 3244965.65], [1.60506618E12, 2850446.2666666666], [1.60506636E12, 2697536.65], [1.60506606E12, 1137464.6666666667], [1.60506654E12, 2724503.9833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60506624E12, 4496.366666666667], [1.60506642E12, 4480.533333333334], [1.60506612E12, 4060.483333333333], [1.6050666E12, 1643.7], [1.6050663E12, 4433.133333333333], [1.60506648E12, 4771.883333333333], [1.60506618E12, 4961.216666666666], [1.60506636E12, 3886.35], [1.60506606E12, 1095.8], [1.60506654E12, 4747.866666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050666E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1073.545590433483, "minX": 1.60506606E12, "maxY": 1646.9189189189187, "series": [{"data": [[1.60506624E12, 1207.9983108108115], [1.60506642E12, 1159.0292207792209], [1.60506612E12, 1290.7269503546095], [1.6050666E12, 1518.4748858447485], [1.6050663E12, 1228.329931972789], [1.60506648E12, 1142.2718600953897], [1.60506618E12, 1073.545590433483], [1.60506636E12, 1335.579629629629], [1.60506606E12, 1646.9189189189187], [1.60506654E12, 1156.8815999999995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050666E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1071.2481315396103, "minX": 1.60506606E12, "maxY": 1643.1621621621625, "series": [{"data": [[1.60506624E12, 1205.4442567567569], [1.60506642E12, 1157.6266233766212], [1.60506612E12, 1288.7695035460983], [1.6050666E12, 1516.8401826484017], [1.6050663E12, 1226.530612244897], [1.60506648E12, 1140.2591414944372], [1.60506618E12, 1071.2481315396103], [1.60506636E12, 1333.6944444444446], [1.60506606E12, 1643.1621621621625], [1.60506654E12, 1155.3759999999986]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050666E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60506606E12, "maxY": 0.8783783783783786, "series": [{"data": [[1.60506624E12, 0.02027027027027027], [1.60506642E12, 0.02597402597402597], [1.60506612E12, 0.02482269503546099], [1.6050666E12, 0.0], [1.6050663E12, 0.02551020408163265], [1.60506648E12, 0.01907790143084261], [1.60506618E12, 0.020926756352765336], [1.60506636E12, 0.04259259259259259], [1.60506606E12, 0.8783783783783786], [1.60506654E12, 0.017599999999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050666E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 202.0, "minX": 1.60506606E12, "maxY": 6498.0, "series": [{"data": [[1.60506624E12, 5279.0], [1.60506642E12, 4253.0], [1.60506612E12, 6498.0], [1.6050666E12, 4340.0], [1.6050663E12, 5560.0], [1.60506648E12, 3814.0], [1.60506618E12, 4884.0], [1.60506636E12, 6384.0], [1.60506606E12, 4258.0], [1.60506654E12, 4339.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60506624E12, 377.68499929308894], [1.60506642E12, 388.9769986760616], [1.60506612E12, 413.0849998652935], [1.6050666E12, 604.9399972200393], [1.6050663E12, 393.5049992978573], [1.60506648E12, 358.53999068737033], [1.60506618E12, 388.14999920129776], [1.60506636E12, 410.7379997420311], [1.60506606E12, 548.5479990053177], [1.60506654E12, 371.63399985074994]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60506624E12, 380.35350028276446], [1.60506642E12, 393.3249001765251], [1.60506612E12, 413.5935000538826], [1.6050666E12, 607.2460001468659], [1.6050663E12, 396.1555002808571], [1.60506648E12, 379.23700006008147], [1.60506618E12, 391.1650003194809], [1.60506636E12, 414.203100464344], [1.60506606E12, 552.3028003978729], [1.60506654E12, 373.1844003582001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60506624E12, 379.16749964654446], [1.60506642E12, 391.7534993380308], [1.60506612E12, 413.36749993264675], [1.6050666E12, 606.6299998164177], [1.6050663E12, 394.97749964892864], [1.60506648E12, 378.06999534368515], [1.60506618E12, 389.8249996006489], [1.60506636E12, 412.25549941956996], [1.60506606E12, 550.6339995026589], [1.60506654E12, 371.946999925375]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60506624E12, 365.0], [1.60506642E12, 234.0], [1.60506612E12, 269.0], [1.6050666E12, 553.0], [1.6050663E12, 374.0], [1.60506648E12, 206.0], [1.60506618E12, 272.0], [1.60506636E12, 400.0], [1.60506606E12, 539.0], [1.60506654E12, 202.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60506624E12, 1130.0], [1.60506642E12, 1039.5], [1.60506612E12, 1096.0], [1.6050666E12, 1384.0], [1.6050663E12, 1108.0], [1.60506648E12, 1033.0], [1.60506618E12, 836.0], [1.60506636E12, 1199.5], [1.60506606E12, 1467.5], [1.60506654E12, 1033.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050666E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 456.0, "minX": 2.0, "maxY": 1910.5, "series": [{"data": [[2.0, 1910.5], [3.0, 1730.0], [4.0, 1846.5], [5.0, 1548.0], [6.0, 1558.0], [7.0, 1406.5], [8.0, 1352.0], [9.0, 1255.5], [10.0, 1128.5], [11.0, 1123.0], [12.0, 1020.5], [13.0, 876.5], [14.0, 862.5], [15.0, 651.5], [16.0, 687.5], [17.0, 461.0], [18.0, 490.5], [19.0, 466.0], [20.0, 524.0], [21.0, 467.0], [22.0, 474.5], [23.0, 463.0], [24.0, 457.0], [25.0, 472.0], [26.0, 456.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 456.0, "minX": 2.0, "maxY": 1909.0, "series": [{"data": [[2.0, 1909.0], [3.0, 1726.0], [4.0, 1845.0], [5.0, 1538.0], [6.0, 1557.0], [7.0, 1402.0], [8.0, 1349.5], [9.0, 1254.0], [10.0, 1128.0], [11.0, 1122.0], [12.0, 1018.5], [13.0, 875.5], [14.0, 861.0], [15.0, 651.5], [16.0, 686.5], [17.0, 461.0], [18.0, 490.5], [19.0, 465.5], [20.0, 523.5], [21.0, 467.0], [22.0, 474.5], [23.0, 463.0], [24.0, 456.5], [25.0, 471.5], [26.0, 456.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.60506606E12, "maxY": 11.15, "series": [{"data": [[1.60506624E12, 9.866666666666667], [1.60506642E12, 10.266666666666667], [1.60506612E12, 9.4], [1.6050666E12, 3.45], [1.6050663E12, 9.8], [1.60506648E12, 10.483333333333333], [1.60506618E12, 11.15], [1.60506636E12, 9.0], [1.60506606E12, 2.6666666666666665], [1.60506654E12, 10.416666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050666E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.466666666666667, "minX": 1.60506606E12, "maxY": 11.15, "series": [{"data": [[1.60506624E12, 9.866666666666667], [1.60506642E12, 10.266666666666667], [1.60506612E12, 9.4], [1.6050666E12, 3.65], [1.6050663E12, 9.8], [1.60506648E12, 10.483333333333333], [1.60506618E12, 11.15], [1.60506636E12, 9.0], [1.60506606E12, 2.466666666666667], [1.60506654E12, 10.416666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050666E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.466666666666667, "minX": 1.60506606E12, "maxY": 11.15, "series": [{"data": [[1.60506624E12, 9.866666666666667], [1.60506642E12, 10.266666666666667], [1.60506612E12, 9.4], [1.6050666E12, 3.65], [1.6050663E12, 9.8], [1.60506648E12, 10.483333333333333], [1.60506618E12, 11.15], [1.60506636E12, 9.0], [1.60506606E12, 2.466666666666667], [1.60506654E12, 10.416666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050666E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.466666666666667, "minX": 1.60506606E12, "maxY": 11.15, "series": [{"data": [[1.60506624E12, 9.866666666666667], [1.60506642E12, 10.266666666666667], [1.60506612E12, 9.4], [1.6050666E12, 3.65], [1.6050663E12, 9.8], [1.60506648E12, 10.483333333333333], [1.60506618E12, 11.15], [1.60506636E12, 9.0], [1.60506606E12, 2.466666666666667], [1.60506654E12, 10.416666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050666E12, "title": "Total Transactions Per Second"}},
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

