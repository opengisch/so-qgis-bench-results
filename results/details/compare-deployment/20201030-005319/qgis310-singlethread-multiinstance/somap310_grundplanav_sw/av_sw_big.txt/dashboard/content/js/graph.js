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
        data: {"result": {"minY": 223.0, "minX": 0.0, "maxY": 6121.0, "series": [{"data": [[0.0, 223.0], [0.1, 323.0], [0.2, 356.0], [0.3, 368.0], [0.4, 369.0], [0.5, 372.0], [0.6, 375.0], [0.7, 377.0], [0.8, 379.0], [0.9, 380.0], [1.0, 381.0], [1.1, 383.0], [1.2, 384.0], [1.3, 384.0], [1.4, 385.0], [1.5, 386.0], [1.6, 387.0], [1.7, 387.0], [1.8, 388.0], [1.9, 389.0], [2.0, 389.0], [2.1, 390.0], [2.2, 391.0], [2.3, 391.0], [2.4, 392.0], [2.5, 393.0], [2.6, 393.0], [2.7, 394.0], [2.8, 395.0], [2.9, 396.0], [3.0, 397.0], [3.1, 398.0], [3.2, 399.0], [3.3, 400.0], [3.4, 401.0], [3.5, 401.0], [3.6, 402.0], [3.7, 403.0], [3.8, 404.0], [3.9, 405.0], [4.0, 406.0], [4.1, 407.0], [4.2, 408.0], [4.3, 409.0], [4.4, 409.0], [4.5, 410.0], [4.6, 411.0], [4.7, 412.0], [4.8, 413.0], [4.9, 414.0], [5.0, 414.0], [5.1, 415.0], [5.2, 416.0], [5.3, 417.0], [5.4, 418.0], [5.5, 420.0], [5.6, 420.0], [5.7, 421.0], [5.8, 422.0], [5.9, 423.0], [6.0, 424.0], [6.1, 425.0], [6.2, 425.0], [6.3, 426.0], [6.4, 427.0], [6.5, 428.0], [6.6, 429.0], [6.7, 430.0], [6.8, 431.0], [6.9, 432.0], [7.0, 433.0], [7.1, 434.0], [7.2, 435.0], [7.3, 435.0], [7.4, 436.0], [7.5, 437.0], [7.6, 438.0], [7.7, 439.0], [7.8, 440.0], [7.9, 441.0], [8.0, 441.0], [8.1, 442.0], [8.2, 443.0], [8.3, 444.0], [8.4, 445.0], [8.5, 445.0], [8.6, 446.0], [8.7, 447.0], [8.8, 447.0], [8.9, 448.0], [9.0, 448.0], [9.1, 449.0], [9.2, 449.0], [9.3, 450.0], [9.4, 450.0], [9.5, 451.0], [9.6, 451.0], [9.7, 452.0], [9.8, 453.0], [9.9, 454.0], [10.0, 454.0], [10.1, 455.0], [10.2, 456.0], [10.3, 457.0], [10.4, 457.0], [10.5, 458.0], [10.6, 458.0], [10.7, 459.0], [10.8, 459.0], [10.9, 461.0], [11.0, 461.0], [11.1, 462.0], [11.2, 462.0], [11.3, 463.0], [11.4, 465.0], [11.5, 466.0], [11.6, 467.0], [11.7, 469.0], [11.8, 469.0], [11.9, 470.0], [12.0, 472.0], [12.1, 474.0], [12.2, 475.0], [12.3, 476.0], [12.4, 476.0], [12.5, 477.0], [12.6, 478.0], [12.7, 480.0], [12.8, 482.0], [12.9, 484.0], [13.0, 486.0], [13.1, 486.0], [13.2, 487.0], [13.3, 488.0], [13.4, 490.0], [13.5, 492.0], [13.6, 493.0], [13.7, 495.0], [13.8, 496.0], [13.9, 499.0], [14.0, 501.0], [14.1, 502.0], [14.2, 505.0], [14.3, 507.0], [14.4, 509.0], [14.5, 513.0], [14.6, 514.0], [14.7, 516.0], [14.8, 518.0], [14.9, 520.0], [15.0, 521.0], [15.1, 523.0], [15.2, 526.0], [15.3, 528.0], [15.4, 531.0], [15.5, 531.0], [15.6, 532.0], [15.7, 532.0], [15.8, 533.0], [15.9, 534.0], [16.0, 535.0], [16.1, 536.0], [16.2, 537.0], [16.3, 538.0], [16.4, 539.0], [16.5, 540.0], [16.6, 541.0], [16.7, 542.0], [16.8, 543.0], [16.9, 544.0], [17.0, 544.0], [17.1, 545.0], [17.2, 547.0], [17.3, 548.0], [17.4, 549.0], [17.5, 550.0], [17.6, 551.0], [17.7, 552.0], [17.8, 553.0], [17.9, 555.0], [18.0, 556.0], [18.1, 557.0], [18.2, 558.0], [18.3, 560.0], [18.4, 561.0], [18.5, 563.0], [18.6, 564.0], [18.7, 565.0], [18.8, 566.0], [18.9, 568.0], [19.0, 569.0], [19.1, 571.0], [19.2, 572.0], [19.3, 572.0], [19.4, 574.0], [19.5, 575.0], [19.6, 576.0], [19.7, 578.0], [19.8, 579.0], [19.9, 580.0], [20.0, 582.0], [20.1, 583.0], [20.2, 584.0], [20.3, 585.0], [20.4, 586.0], [20.5, 587.0], [20.6, 588.0], [20.7, 589.0], [20.8, 590.0], [20.9, 592.0], [21.0, 594.0], [21.1, 595.0], [21.2, 596.0], [21.3, 597.0], [21.4, 599.0], [21.5, 599.0], [21.6, 601.0], [21.7, 602.0], [21.8, 603.0], [21.9, 604.0], [22.0, 605.0], [22.1, 606.0], [22.2, 607.0], [22.3, 608.0], [22.4, 609.0], [22.5, 610.0], [22.6, 611.0], [22.7, 612.0], [22.8, 613.0], [22.9, 614.0], [23.0, 616.0], [23.1, 617.0], [23.2, 618.0], [23.3, 618.0], [23.4, 619.0], [23.5, 621.0], [23.6, 621.0], [23.7, 622.0], [23.8, 623.0], [23.9, 623.0], [24.0, 625.0], [24.1, 627.0], [24.2, 628.0], [24.3, 629.0], [24.4, 629.0], [24.5, 630.0], [24.6, 631.0], [24.7, 631.0], [24.8, 633.0], [24.9, 633.0], [25.0, 635.0], [25.1, 636.0], [25.2, 637.0], [25.3, 638.0], [25.4, 639.0], [25.5, 640.0], [25.6, 641.0], [25.7, 641.0], [25.8, 643.0], [25.9, 645.0], [26.0, 646.0], [26.1, 647.0], [26.2, 648.0], [26.3, 650.0], [26.4, 652.0], [26.5, 652.0], [26.6, 654.0], [26.7, 656.0], [26.8, 657.0], [26.9, 658.0], [27.0, 660.0], [27.1, 661.0], [27.2, 662.0], [27.3, 663.0], [27.4, 664.0], [27.5, 664.0], [27.6, 665.0], [27.7, 666.0], [27.8, 667.0], [27.9, 670.0], [28.0, 671.0], [28.1, 672.0], [28.2, 673.0], [28.3, 674.0], [28.4, 675.0], [28.5, 676.0], [28.6, 678.0], [28.7, 680.0], [28.8, 681.0], [28.9, 682.0], [29.0, 683.0], [29.1, 684.0], [29.2, 685.0], [29.3, 686.0], [29.4, 688.0], [29.5, 689.0], [29.6, 690.0], [29.7, 692.0], [29.8, 693.0], [29.9, 695.0], [30.0, 696.0], [30.1, 698.0], [30.2, 698.0], [30.3, 701.0], [30.4, 702.0], [30.5, 704.0], [30.6, 705.0], [30.7, 708.0], [30.8, 709.0], [30.9, 711.0], [31.0, 712.0], [31.1, 714.0], [31.2, 716.0], [31.3, 717.0], [31.4, 719.0], [31.5, 720.0], [31.6, 722.0], [31.7, 724.0], [31.8, 725.0], [31.9, 727.0], [32.0, 728.0], [32.1, 731.0], [32.2, 732.0], [32.3, 734.0], [32.4, 736.0], [32.5, 739.0], [32.6, 741.0], [32.7, 742.0], [32.8, 744.0], [32.9, 748.0], [33.0, 749.0], [33.1, 751.0], [33.2, 752.0], [33.3, 753.0], [33.4, 756.0], [33.5, 758.0], [33.6, 759.0], [33.7, 761.0], [33.8, 763.0], [33.9, 765.0], [34.0, 766.0], [34.1, 768.0], [34.2, 770.0], [34.3, 773.0], [34.4, 774.0], [34.5, 778.0], [34.6, 779.0], [34.7, 780.0], [34.8, 782.0], [34.9, 784.0], [35.0, 785.0], [35.1, 787.0], [35.2, 787.0], [35.3, 790.0], [35.4, 792.0], [35.5, 794.0], [35.6, 795.0], [35.7, 798.0], [35.8, 801.0], [35.9, 803.0], [36.0, 805.0], [36.1, 808.0], [36.2, 810.0], [36.3, 812.0], [36.4, 813.0], [36.5, 815.0], [36.6, 818.0], [36.7, 819.0], [36.8, 820.0], [36.9, 822.0], [37.0, 824.0], [37.1, 826.0], [37.2, 827.0], [37.3, 829.0], [37.4, 831.0], [37.5, 833.0], [37.6, 835.0], [37.7, 837.0], [37.8, 839.0], [37.9, 841.0], [38.0, 843.0], [38.1, 845.0], [38.2, 846.0], [38.3, 848.0], [38.4, 850.0], [38.5, 853.0], [38.6, 854.0], [38.7, 857.0], [38.8, 858.0], [38.9, 861.0], [39.0, 862.0], [39.1, 865.0], [39.2, 867.0], [39.3, 870.0], [39.4, 873.0], [39.5, 875.0], [39.6, 878.0], [39.7, 880.0], [39.8, 882.0], [39.9, 884.0], [40.0, 886.0], [40.1, 889.0], [40.2, 890.0], [40.3, 892.0], [40.4, 894.0], [40.5, 897.0], [40.6, 900.0], [40.7, 903.0], [40.8, 905.0], [40.9, 906.0], [41.0, 907.0], [41.1, 910.0], [41.2, 914.0], [41.3, 915.0], [41.4, 917.0], [41.5, 919.0], [41.6, 920.0], [41.7, 922.0], [41.8, 924.0], [41.9, 926.0], [42.0, 927.0], [42.1, 931.0], [42.2, 932.0], [42.3, 934.0], [42.4, 936.0], [42.5, 937.0], [42.6, 938.0], [42.7, 939.0], [42.8, 941.0], [42.9, 943.0], [43.0, 945.0], [43.1, 947.0], [43.2, 951.0], [43.3, 952.0], [43.4, 954.0], [43.5, 956.0], [43.6, 957.0], [43.7, 961.0], [43.8, 962.0], [43.9, 964.0], [44.0, 965.0], [44.1, 966.0], [44.2, 966.0], [44.3, 968.0], [44.4, 969.0], [44.5, 970.0], [44.6, 972.0], [44.7, 973.0], [44.8, 975.0], [44.9, 980.0], [45.0, 982.0], [45.1, 985.0], [45.2, 987.0], [45.3, 989.0], [45.4, 992.0], [45.5, 993.0], [45.6, 995.0], [45.7, 996.0], [45.8, 998.0], [45.9, 1002.0], [46.0, 1003.0], [46.1, 1007.0], [46.2, 1008.0], [46.3, 1009.0], [46.4, 1010.0], [46.5, 1012.0], [46.6, 1013.0], [46.7, 1015.0], [46.8, 1015.0], [46.9, 1017.0], [47.0, 1017.0], [47.1, 1019.0], [47.2, 1020.0], [47.3, 1022.0], [47.4, 1023.0], [47.5, 1024.0], [47.6, 1025.0], [47.7, 1026.0], [47.8, 1027.0], [47.9, 1029.0], [48.0, 1029.0], [48.1, 1030.0], [48.2, 1032.0], [48.3, 1035.0], [48.4, 1036.0], [48.5, 1037.0], [48.6, 1039.0], [48.7, 1041.0], [48.8, 1044.0], [48.9, 1046.0], [49.0, 1047.0], [49.1, 1048.0], [49.2, 1049.0], [49.3, 1050.0], [49.4, 1052.0], [49.5, 1054.0], [49.6, 1054.0], [49.7, 1054.0], [49.8, 1057.0], [49.9, 1058.0], [50.0, 1059.0], [50.1, 1061.0], [50.2, 1061.0], [50.3, 1063.0], [50.4, 1064.0], [50.5, 1065.0], [50.6, 1067.0], [50.7, 1069.0], [50.8, 1071.0], [50.9, 1073.0], [51.0, 1074.0], [51.1, 1075.0], [51.2, 1076.0], [51.3, 1078.0], [51.4, 1079.0], [51.5, 1081.0], [51.6, 1084.0], [51.7, 1086.0], [51.8, 1087.0], [51.9, 1089.0], [52.0, 1091.0], [52.1, 1093.0], [52.2, 1095.0], [52.3, 1098.0], [52.4, 1100.0], [52.5, 1102.0], [52.6, 1103.0], [52.7, 1105.0], [52.8, 1105.0], [52.9, 1107.0], [53.0, 1108.0], [53.1, 1110.0], [53.2, 1112.0], [53.3, 1113.0], [53.4, 1114.0], [53.5, 1117.0], [53.6, 1120.0], [53.7, 1121.0], [53.8, 1123.0], [53.9, 1124.0], [54.0, 1125.0], [54.1, 1126.0], [54.2, 1129.0], [54.3, 1130.0], [54.4, 1132.0], [54.5, 1134.0], [54.6, 1135.0], [54.7, 1138.0], [54.8, 1141.0], [54.9, 1143.0], [55.0, 1144.0], [55.1, 1147.0], [55.2, 1150.0], [55.3, 1153.0], [55.4, 1155.0], [55.5, 1156.0], [55.6, 1158.0], [55.7, 1160.0], [55.8, 1163.0], [55.9, 1164.0], [56.0, 1167.0], [56.1, 1167.0], [56.2, 1169.0], [56.3, 1171.0], [56.4, 1173.0], [56.5, 1174.0], [56.6, 1175.0], [56.7, 1177.0], [56.8, 1179.0], [56.9, 1181.0], [57.0, 1184.0], [57.1, 1185.0], [57.2, 1187.0], [57.3, 1189.0], [57.4, 1192.0], [57.5, 1194.0], [57.6, 1197.0], [57.7, 1199.0], [57.8, 1200.0], [57.9, 1202.0], [58.0, 1204.0], [58.1, 1205.0], [58.2, 1208.0], [58.3, 1211.0], [58.4, 1216.0], [58.5, 1220.0], [58.6, 1222.0], [58.7, 1223.0], [58.8, 1224.0], [58.9, 1226.0], [59.0, 1227.0], [59.1, 1229.0], [59.2, 1231.0], [59.3, 1237.0], [59.4, 1239.0], [59.5, 1240.0], [59.6, 1241.0], [59.7, 1244.0], [59.8, 1246.0], [59.9, 1248.0], [60.0, 1249.0], [60.1, 1251.0], [60.2, 1253.0], [60.3, 1254.0], [60.4, 1257.0], [60.5, 1259.0], [60.6, 1262.0], [60.7, 1265.0], [60.8, 1265.0], [60.9, 1267.0], [61.0, 1269.0], [61.1, 1271.0], [61.2, 1274.0], [61.3, 1277.0], [61.4, 1281.0], [61.5, 1284.0], [61.6, 1287.0], [61.7, 1290.0], [61.8, 1291.0], [61.9, 1293.0], [62.0, 1295.0], [62.1, 1296.0], [62.2, 1301.0], [62.3, 1302.0], [62.4, 1304.0], [62.5, 1305.0], [62.6, 1307.0], [62.7, 1310.0], [62.8, 1313.0], [62.9, 1314.0], [63.0, 1315.0], [63.1, 1317.0], [63.2, 1319.0], [63.3, 1321.0], [63.4, 1322.0], [63.5, 1326.0], [63.6, 1328.0], [63.7, 1330.0], [63.8, 1332.0], [63.9, 1335.0], [64.0, 1336.0], [64.1, 1338.0], [64.2, 1341.0], [64.3, 1343.0], [64.4, 1345.0], [64.5, 1348.0], [64.6, 1350.0], [64.7, 1353.0], [64.8, 1355.0], [64.9, 1357.0], [65.0, 1359.0], [65.1, 1360.0], [65.2, 1362.0], [65.3, 1364.0], [65.4, 1366.0], [65.5, 1367.0], [65.6, 1368.0], [65.7, 1373.0], [65.8, 1375.0], [65.9, 1377.0], [66.0, 1378.0], [66.1, 1379.0], [66.2, 1380.0], [66.3, 1383.0], [66.4, 1385.0], [66.5, 1387.0], [66.6, 1388.0], [66.7, 1390.0], [66.8, 1393.0], [66.9, 1395.0], [67.0, 1397.0], [67.1, 1398.0], [67.2, 1399.0], [67.3, 1401.0], [67.4, 1404.0], [67.5, 1406.0], [67.6, 1407.0], [67.7, 1409.0], [67.8, 1411.0], [67.9, 1413.0], [68.0, 1415.0], [68.1, 1416.0], [68.2, 1417.0], [68.3, 1419.0], [68.4, 1420.0], [68.5, 1423.0], [68.6, 1424.0], [68.7, 1426.0], [68.8, 1427.0], [68.9, 1429.0], [69.0, 1430.0], [69.1, 1433.0], [69.2, 1435.0], [69.3, 1438.0], [69.4, 1439.0], [69.5, 1442.0], [69.6, 1444.0], [69.7, 1447.0], [69.8, 1448.0], [69.9, 1450.0], [70.0, 1450.0], [70.1, 1452.0], [70.2, 1455.0], [70.3, 1456.0], [70.4, 1458.0], [70.5, 1459.0], [70.6, 1460.0], [70.7, 1463.0], [70.8, 1464.0], [70.9, 1467.0], [71.0, 1469.0], [71.1, 1471.0], [71.2, 1471.0], [71.3, 1473.0], [71.4, 1475.0], [71.5, 1477.0], [71.6, 1478.0], [71.7, 1482.0], [71.8, 1484.0], [71.9, 1488.0], [72.0, 1489.0], [72.1, 1491.0], [72.2, 1493.0], [72.3, 1497.0], [72.4, 1498.0], [72.5, 1500.0], [72.6, 1502.0], [72.7, 1505.0], [72.8, 1505.0], [72.9, 1506.0], [73.0, 1508.0], [73.1, 1509.0], [73.2, 1510.0], [73.3, 1513.0], [73.4, 1514.0], [73.5, 1516.0], [73.6, 1518.0], [73.7, 1518.0], [73.8, 1520.0], [73.9, 1522.0], [74.0, 1524.0], [74.1, 1525.0], [74.2, 1527.0], [74.3, 1530.0], [74.4, 1532.0], [74.5, 1534.0], [74.6, 1536.0], [74.7, 1537.0], [74.8, 1542.0], [74.9, 1544.0], [75.0, 1546.0], [75.1, 1547.0], [75.2, 1552.0], [75.3, 1554.0], [75.4, 1555.0], [75.5, 1557.0], [75.6, 1560.0], [75.7, 1563.0], [75.8, 1565.0], [75.9, 1566.0], [76.0, 1569.0], [76.1, 1569.0], [76.2, 1573.0], [76.3, 1575.0], [76.4, 1577.0], [76.5, 1581.0], [76.6, 1583.0], [76.7, 1585.0], [76.8, 1588.0], [76.9, 1590.0], [77.0, 1593.0], [77.1, 1597.0], [77.2, 1598.0], [77.3, 1599.0], [77.4, 1601.0], [77.5, 1602.0], [77.6, 1605.0], [77.7, 1606.0], [77.8, 1607.0], [77.9, 1610.0], [78.0, 1612.0], [78.1, 1614.0], [78.2, 1616.0], [78.3, 1618.0], [78.4, 1621.0], [78.5, 1624.0], [78.6, 1626.0], [78.7, 1628.0], [78.8, 1632.0], [78.9, 1634.0], [79.0, 1638.0], [79.1, 1641.0], [79.2, 1643.0], [79.3, 1645.0], [79.4, 1646.0], [79.5, 1648.0], [79.6, 1649.0], [79.7, 1652.0], [79.8, 1654.0], [79.9, 1656.0], [80.0, 1659.0], [80.1, 1661.0], [80.2, 1666.0], [80.3, 1666.0], [80.4, 1667.0], [80.5, 1668.0], [80.6, 1672.0], [80.7, 1673.0], [80.8, 1676.0], [80.9, 1681.0], [81.0, 1682.0], [81.1, 1685.0], [81.2, 1687.0], [81.3, 1689.0], [81.4, 1690.0], [81.5, 1693.0], [81.6, 1698.0], [81.7, 1701.0], [81.8, 1704.0], [81.9, 1707.0], [82.0, 1708.0], [82.1, 1711.0], [82.2, 1714.0], [82.3, 1716.0], [82.4, 1721.0], [82.5, 1722.0], [82.6, 1724.0], [82.7, 1726.0], [82.8, 1729.0], [82.9, 1734.0], [83.0, 1738.0], [83.1, 1739.0], [83.2, 1741.0], [83.3, 1744.0], [83.4, 1751.0], [83.5, 1755.0], [83.6, 1758.0], [83.7, 1759.0], [83.8, 1762.0], [83.9, 1765.0], [84.0, 1770.0], [84.1, 1778.0], [84.2, 1781.0], [84.3, 1783.0], [84.4, 1787.0], [84.5, 1792.0], [84.6, 1794.0], [84.7, 1798.0], [84.8, 1802.0], [84.9, 1809.0], [85.0, 1810.0], [85.1, 1814.0], [85.2, 1816.0], [85.3, 1820.0], [85.4, 1825.0], [85.5, 1831.0], [85.6, 1836.0], [85.7, 1839.0], [85.8, 1843.0], [85.9, 1846.0], [86.0, 1852.0], [86.1, 1855.0], [86.2, 1858.0], [86.3, 1863.0], [86.4, 1867.0], [86.5, 1873.0], [86.6, 1879.0], [86.7, 1884.0], [86.8, 1888.0], [86.9, 1891.0], [87.0, 1896.0], [87.1, 1905.0], [87.2, 1908.0], [87.3, 1914.0], [87.4, 1923.0], [87.5, 1929.0], [87.6, 1933.0], [87.7, 1940.0], [87.8, 1949.0], [87.9, 1953.0], [88.0, 1959.0], [88.1, 1970.0], [88.2, 1975.0], [88.3, 1979.0], [88.4, 1984.0], [88.5, 1990.0], [88.6, 1997.0], [88.7, 2001.0], [88.8, 2009.0], [88.9, 2017.0], [89.0, 2026.0], [89.1, 2033.0], [89.2, 2041.0], [89.3, 2053.0], [89.4, 2059.0], [89.5, 2062.0], [89.6, 2069.0], [89.7, 2074.0], [89.8, 2079.0], [89.9, 2081.0], [90.0, 2088.0], [90.1, 2097.0], [90.2, 2102.0], [90.3, 2107.0], [90.4, 2115.0], [90.5, 2123.0], [90.6, 2131.0], [90.7, 2143.0], [90.8, 2154.0], [90.9, 2159.0], [91.0, 2169.0], [91.1, 2179.0], [91.2, 2189.0], [91.3, 2195.0], [91.4, 2199.0], [91.5, 2210.0], [91.6, 2214.0], [91.7, 2225.0], [91.8, 2230.0], [91.9, 2236.0], [92.0, 2241.0], [92.1, 2248.0], [92.2, 2256.0], [92.3, 2278.0], [92.4, 2284.0], [92.5, 2288.0], [92.6, 2292.0], [92.7, 2301.0], [92.8, 2310.0], [92.9, 2319.0], [93.0, 2329.0], [93.1, 2333.0], [93.2, 2340.0], [93.3, 2346.0], [93.4, 2352.0], [93.5, 2368.0], [93.6, 2373.0], [93.7, 2382.0], [93.8, 2386.0], [93.9, 2391.0], [94.0, 2397.0], [94.1, 2404.0], [94.2, 2413.0], [94.3, 2420.0], [94.4, 2426.0], [94.5, 2441.0], [94.6, 2447.0], [94.7, 2456.0], [94.8, 2473.0], [94.9, 2486.0], [95.0, 2500.0], [95.1, 2509.0], [95.2, 2516.0], [95.3, 2526.0], [95.4, 2535.0], [95.5, 2548.0], [95.6, 2567.0], [95.7, 2599.0], [95.8, 2618.0], [95.9, 2634.0], [96.0, 2638.0], [96.1, 2650.0], [96.2, 2666.0], [96.3, 2687.0], [96.4, 2704.0], [96.5, 2716.0], [96.6, 2729.0], [96.7, 2737.0], [96.8, 2759.0], [96.9, 2773.0], [97.0, 2789.0], [97.1, 2799.0], [97.2, 2812.0], [97.3, 2848.0], [97.4, 2871.0], [97.5, 2881.0], [97.6, 2906.0], [97.7, 2920.0], [97.8, 2947.0], [97.9, 2982.0], [98.0, 3009.0], [98.1, 3031.0], [98.2, 3053.0], [98.3, 3077.0], [98.4, 3111.0], [98.5, 3131.0], [98.6, 3172.0], [98.7, 3206.0], [98.8, 3285.0], [98.9, 3434.0], [99.0, 3559.0], [99.1, 3618.0], [99.2, 3689.0], [99.3, 3884.0], [99.4, 3966.0], [99.5, 4386.0], [99.6, 4558.0], [99.7, 4811.0], [99.8, 5254.0], [99.9, 5604.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 555.0, "series": [{"data": [[600.0, 454.0], [700.0, 284.0], [800.0, 253.0], [900.0, 273.0], [1000.0, 339.0], [1100.0, 277.0], [1200.0, 232.0], [1300.0, 260.0], [1400.0, 274.0], [1500.0, 250.0], [1600.0, 225.0], [1700.0, 162.0], [1800.0, 118.0], [1900.0, 86.0], [2000.0, 76.0], [2100.0, 65.0], [2200.0, 66.0], [2300.0, 70.0], [2400.0, 50.0], [2500.0, 37.0], [2600.0, 36.0], [2800.0, 22.0], [2700.0, 38.0], [2900.0, 21.0], [3000.0, 21.0], [3100.0, 17.0], [3300.0, 3.0], [3200.0, 7.0], [3400.0, 4.0], [3500.0, 7.0], [3600.0, 6.0], [3700.0, 3.0], [3800.0, 3.0], [3900.0, 5.0], [4000.0, 1.0], [4200.0, 1.0], [4300.0, 2.0], [4100.0, 1.0], [4500.0, 4.0], [4400.0, 2.0], [4600.0, 2.0], [4800.0, 2.0], [4700.0, 1.0], [5100.0, 1.0], [4900.0, 1.0], [5000.0, 1.0], [5300.0, 2.0], [5200.0, 2.0], [5600.0, 1.0], [5400.0, 1.0], [5800.0, 1.0], [5700.0, 1.0], [6100.0, 1.0], [5900.0, 1.0], [6000.0, 1.0], [200.0, 3.0], [300.0, 165.0], [400.0, 555.0], [500.0, 393.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 725.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3040.0, "series": [{"data": [[0.0, 725.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3040.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1425.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.885217391304348, "minX": 1.60401948E12, "maxY": 12.0, "series": [{"data": [[1.6040199E12, 12.0], [1.60401972E12, 12.0], [1.60401954E12, 12.0], [1.60401984E12, 12.0], [1.60401966E12, 12.0], [1.60401948E12, 12.0], [1.60401996E12, 11.885217391304348], [1.60401978E12, 12.0], [1.6040196E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401996E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 665.0, "minX": 1.0, "maxY": 2982.0, "series": [{"data": [[8.0, 811.0], [4.0, 836.0], [2.0, 2916.0], [1.0, 2982.0], [9.0, 1843.0], [10.0, 1108.0], [5.0, 1646.0], [11.0, 1930.0], [12.0, 1193.1963699555924], [6.0, 1062.0], [3.0, 1052.0], [7.0, 665.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 1193.9142581888273]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2507.5666666666666, "minX": 1.60401948E12, "maxY": 3328119.0166666666, "series": [{"data": [[1.6040199E12, 2806041.316666667], [1.60401972E12, 2773010.933333333], [1.60401954E12, 2217968.683333333], [1.60401984E12, 2954933.2], [1.60401966E12, 3184131.9166666665], [1.60401948E12, 1879133.8166666667], [1.60401996E12, 2452497.6333333333], [1.60401978E12, 2376219.6333333333], [1.6040196E12, 3328119.0166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6040199E12, 4972.233333333334], [1.60401972E12, 3865.4], [1.60401954E12, 4686.516666666666], [1.60401984E12, 4835.283333333334], [1.60401966E12, 4574.133333333333], [1.60401948E12, 2507.5666666666666], [1.60401996E12, 4338.95], [1.60401978E12, 4080.8333333333335], [1.6040196E12, 4716.416666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401996E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1093.170992366411, "minX": 1.60401948E12, "maxY": 1379.8965517241384, "series": [{"data": [[1.6040199E12, 1093.170992366411], [1.60401972E12, 1374.239382239383], [1.60401954E12, 1116.7698289269053], [1.60401984E12, 1103.7832061068707], [1.60401966E12, 1204.184385382059], [1.60401948E12, 1379.8965517241384], [1.60401996E12, 1196.3060869565222], [1.60401978E12, 1269.2645502645507], [1.6040196E12, 1140.030303030304]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401996E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1091.5603053435113, "minX": 1.60401948E12, "maxY": 1377.4080459770119, "series": [{"data": [[1.6040199E12, 1091.5603053435113], [1.60401972E12, 1371.9826254826255], [1.60401954E12, 1115.1524105754281], [1.60401984E12, 1102.083969465649], [1.60401966E12, 1201.6179401993356], [1.60401948E12, 1377.4080459770119], [1.60401996E12, 1194.7565217391323], [1.60401978E12, 1267.7689594356257], [1.6040196E12, 1137.2551834130782]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401996E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.020733652312599667, "minX": 1.60401948E12, "maxY": 0.3678160919540227, "series": [{"data": [[1.6040199E12, 0.024427480916030555], [1.60401972E12, 0.02509652509652509], [1.60401954E12, 0.023328149300155532], [1.60401984E12, 0.025954198473282467], [1.60401966E12, 0.026578073089701004], [1.60401948E12, 0.3678160919540227], [1.60401996E12, 0.03304347826086958], [1.60401978E12, 0.047619047619047575], [1.6040196E12, 0.020733652312599667]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401996E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 223.0, "minX": 1.60401948E12, "maxY": 6121.0, "series": [{"data": [[1.6040199E12, 4132.0], [1.60401972E12, 6121.0], [1.60401954E12, 5329.0], [1.60401984E12, 3676.0], [1.60401966E12, 4766.0], [1.60401948E12, 5884.0], [1.60401996E12, 3966.0], [1.60401978E12, 6004.0], [1.6040196E12, 5119.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6040199E12, 374.4239990615845], [1.60401972E12, 388.02599925756454], [1.60401954E12, 380.7959998464584], [1.60401984E12, 380.0], [1.60401966E12, 372.4269998562336], [1.60401948E12, 386.8459995007515], [1.60401996E12, 383.7359994506836], [1.60401978E12, 395.11999864578246], [1.6040196E12, 354.3039997005463]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6040199E12, 375.49440006256106], [1.60401972E12, 390.1381000494957], [1.60401954E12, 382.1268001842499], [1.60401984E12, 380.98880012512205], [1.60401966E12, 372.96970005750654], [1.60401948E12, 388.7306001996994], [1.60401996E12, 385.8096002197266], [1.60401978E12, 400.232000541687], [1.6040196E12, 355.65160017967224]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6040199E12, 375.2319999217987], [1.60401972E12, 389.58299962878226], [1.60401954E12, 381.3539997696877], [1.60401984E12, 380.46399984359743], [1.60401966E12, 372.7284999281168], [1.60401948E12, 387.89299975037574], [1.60401996E12, 384.8879997253418], [1.60401978E12, 397.95999932289124], [1.6040196E12, 354.93199985027314]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6040199E12, 223.0], [1.60401972E12, 378.0], [1.60401954E12, 323.0], [1.60401984E12, 369.0], [1.60401966E12, 355.0], [1.60401948E12, 374.0], [1.60401996E12, 375.0], [1.60401978E12, 385.0], [1.6040196E12, 273.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6040199E12, 1015.0], [1.60401972E12, 1258.5], [1.60401954E12, 952.0], [1.60401984E12, 939.0], [1.60401966E12, 1132.0], [1.60401948E12, 1144.0], [1.60401996E12, 1077.0], [1.60401978E12, 1104.0], [1.6040196E12, 883.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401996E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 431.5, "minX": 1.0, "maxY": 2736.0, "series": [{"data": [[2.0, 2485.0], [3.0, 1850.0], [4.0, 1545.5], [5.0, 1619.0], [6.0, 1515.0], [7.0, 1366.0], [8.0, 1412.5], [9.0, 1168.0], [10.0, 1175.0], [11.0, 1051.0], [12.0, 966.0], [13.0, 844.0], [14.0, 722.0], [15.0, 647.0], [16.0, 615.5], [1.0, 2736.0], [17.0, 608.0], [18.0, 568.5], [19.0, 478.0], [20.0, 510.0], [21.0, 460.0], [22.0, 437.0], [23.0, 447.0], [25.0, 435.0], [26.0, 441.5], [28.0, 431.5], [29.0, 436.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 431.0, "minX": 1.0, "maxY": 2726.0, "series": [{"data": [[2.0, 2481.5], [3.0, 1845.0], [4.0, 1537.5], [5.0, 1608.0], [6.0, 1507.5], [7.0, 1363.0], [8.0, 1410.5], [9.0, 1167.0], [10.0, 1173.5], [11.0, 1051.0], [12.0, 966.0], [13.0, 844.0], [14.0, 721.0], [15.0, 647.0], [16.0, 615.0], [1.0, 2726.0], [17.0, 607.5], [18.0, 567.5], [19.0, 478.0], [20.0, 510.0], [21.0, 460.0], [22.0, 437.0], [23.0, 447.0], [25.0, 434.5], [26.0, 441.0], [28.0, 431.0], [29.0, 436.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60401948E12, "maxY": 10.916666666666666, "series": [{"data": [[1.6040199E12, 10.916666666666666], [1.60401972E12, 8.633333333333333], [1.60401954E12, 10.716666666666667], [1.60401984E12, 10.916666666666666], [1.60401966E12, 10.033333333333333], [1.60401948E12, 6.0], [1.60401996E12, 9.383333333333333], [1.60401978E12, 9.45], [1.6040196E12, 10.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401996E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.8, "minX": 1.60401948E12, "maxY": 10.916666666666666, "series": [{"data": [[1.6040199E12, 10.916666666666666], [1.60401972E12, 8.633333333333333], [1.60401954E12, 10.716666666666667], [1.60401984E12, 10.916666666666666], [1.60401966E12, 10.033333333333333], [1.60401948E12, 5.8], [1.60401996E12, 9.583333333333334], [1.60401978E12, 9.45], [1.6040196E12, 10.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401996E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.8, "minX": 1.60401948E12, "maxY": 10.916666666666666, "series": [{"data": [[1.6040199E12, 10.916666666666666], [1.60401972E12, 8.633333333333333], [1.60401954E12, 10.716666666666667], [1.60401984E12, 10.916666666666666], [1.60401966E12, 10.033333333333333], [1.60401948E12, 5.8], [1.60401996E12, 9.583333333333334], [1.60401978E12, 9.45], [1.6040196E12, 10.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401996E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.8, "minX": 1.60401948E12, "maxY": 10.916666666666666, "series": [{"data": [[1.6040199E12, 10.916666666666666], [1.60401972E12, 8.633333333333333], [1.60401954E12, 10.716666666666667], [1.60401984E12, 10.916666666666666], [1.60401966E12, 10.033333333333333], [1.60401948E12, 5.8], [1.60401996E12, 9.583333333333334], [1.60401978E12, 9.45], [1.6040196E12, 10.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401996E12, "title": "Total Transactions Per Second"}},
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

