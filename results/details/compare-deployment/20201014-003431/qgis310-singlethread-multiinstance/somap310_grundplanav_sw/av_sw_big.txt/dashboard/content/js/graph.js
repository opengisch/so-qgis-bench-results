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
        data: {"result": {"minY": 207.0, "minX": 0.0, "maxY": 6661.0, "series": [{"data": [[0.0, 207.0], [0.1, 316.0], [0.2, 353.0], [0.3, 369.0], [0.4, 373.0], [0.5, 376.0], [0.6, 377.0], [0.7, 378.0], [0.8, 379.0], [0.9, 382.0], [1.0, 383.0], [1.1, 384.0], [1.2, 385.0], [1.3, 386.0], [1.4, 388.0], [1.5, 389.0], [1.6, 390.0], [1.7, 391.0], [1.8, 392.0], [1.9, 392.0], [2.0, 393.0], [2.1, 393.0], [2.2, 395.0], [2.3, 396.0], [2.4, 397.0], [2.5, 398.0], [2.6, 398.0], [2.7, 399.0], [2.8, 400.0], [2.9, 401.0], [3.0, 402.0], [3.1, 403.0], [3.2, 404.0], [3.3, 405.0], [3.4, 406.0], [3.5, 408.0], [3.6, 409.0], [3.7, 410.0], [3.8, 410.0], [3.9, 411.0], [4.0, 412.0], [4.1, 412.0], [4.2, 413.0], [4.3, 413.0], [4.4, 414.0], [4.5, 415.0], [4.6, 415.0], [4.7, 416.0], [4.8, 416.0], [4.9, 417.0], [5.0, 418.0], [5.1, 419.0], [5.2, 419.0], [5.3, 420.0], [5.4, 421.0], [5.5, 422.0], [5.6, 423.0], [5.7, 424.0], [5.8, 425.0], [5.9, 426.0], [6.0, 426.0], [6.1, 427.0], [6.2, 428.0], [6.3, 429.0], [6.4, 429.0], [6.5, 430.0], [6.6, 432.0], [6.7, 434.0], [6.8, 434.0], [6.9, 435.0], [7.0, 436.0], [7.1, 436.0], [7.2, 437.0], [7.3, 437.0], [7.4, 440.0], [7.5, 440.0], [7.6, 441.0], [7.7, 442.0], [7.8, 443.0], [7.9, 443.0], [8.0, 444.0], [8.1, 445.0], [8.2, 446.0], [8.3, 447.0], [8.4, 448.0], [8.5, 449.0], [8.6, 449.0], [8.7, 450.0], [8.8, 451.0], [8.9, 452.0], [9.0, 453.0], [9.1, 454.0], [9.2, 454.0], [9.3, 455.0], [9.4, 455.0], [9.5, 456.0], [9.6, 456.0], [9.7, 457.0], [9.8, 458.0], [9.9, 459.0], [10.0, 459.0], [10.1, 461.0], [10.2, 462.0], [10.3, 462.0], [10.4, 463.0], [10.5, 464.0], [10.6, 466.0], [10.7, 466.0], [10.8, 467.0], [10.9, 468.0], [11.0, 469.0], [11.1, 470.0], [11.2, 471.0], [11.3, 472.0], [11.4, 473.0], [11.5, 474.0], [11.6, 476.0], [11.7, 478.0], [11.8, 478.0], [11.9, 479.0], [12.0, 481.0], [12.1, 481.0], [12.2, 483.0], [12.3, 484.0], [12.4, 485.0], [12.5, 486.0], [12.6, 487.0], [12.7, 489.0], [12.8, 490.0], [12.9, 492.0], [13.0, 495.0], [13.1, 497.0], [13.2, 498.0], [13.3, 500.0], [13.4, 501.0], [13.5, 503.0], [13.6, 504.0], [13.7, 505.0], [13.8, 508.0], [13.9, 508.0], [14.0, 510.0], [14.1, 511.0], [14.2, 513.0], [14.3, 515.0], [14.4, 518.0], [14.5, 519.0], [14.6, 521.0], [14.7, 522.0], [14.8, 524.0], [14.9, 527.0], [15.0, 528.0], [15.1, 528.0], [15.2, 531.0], [15.3, 532.0], [15.4, 533.0], [15.5, 534.0], [15.6, 535.0], [15.7, 537.0], [15.8, 539.0], [15.9, 540.0], [16.0, 541.0], [16.1, 541.0], [16.2, 541.0], [16.3, 542.0], [16.4, 544.0], [16.5, 545.0], [16.6, 545.0], [16.7, 546.0], [16.8, 547.0], [16.9, 549.0], [17.0, 550.0], [17.1, 551.0], [17.2, 554.0], [17.3, 557.0], [17.4, 558.0], [17.5, 559.0], [17.6, 561.0], [17.7, 562.0], [17.8, 562.0], [17.9, 563.0], [18.0, 565.0], [18.1, 566.0], [18.2, 567.0], [18.3, 568.0], [18.4, 570.0], [18.5, 571.0], [18.6, 573.0], [18.7, 573.0], [18.8, 575.0], [18.9, 575.0], [19.0, 577.0], [19.1, 578.0], [19.2, 578.0], [19.3, 579.0], [19.4, 580.0], [19.5, 582.0], [19.6, 584.0], [19.7, 585.0], [19.8, 586.0], [19.9, 587.0], [20.0, 588.0], [20.1, 589.0], [20.2, 590.0], [20.3, 592.0], [20.4, 594.0], [20.5, 594.0], [20.6, 596.0], [20.7, 596.0], [20.8, 597.0], [20.9, 599.0], [21.0, 600.0], [21.1, 601.0], [21.2, 602.0], [21.3, 603.0], [21.4, 604.0], [21.5, 607.0], [21.6, 609.0], [21.7, 610.0], [21.8, 611.0], [21.9, 612.0], [22.0, 612.0], [22.1, 613.0], [22.2, 616.0], [22.3, 617.0], [22.4, 618.0], [22.5, 618.0], [22.6, 619.0], [22.7, 620.0], [22.8, 621.0], [22.9, 623.0], [23.0, 623.0], [23.1, 624.0], [23.2, 625.0], [23.3, 626.0], [23.4, 628.0], [23.5, 629.0], [23.6, 631.0], [23.7, 633.0], [23.8, 633.0], [23.9, 634.0], [24.0, 635.0], [24.1, 636.0], [24.2, 637.0], [24.3, 638.0], [24.4, 640.0], [24.5, 640.0], [24.6, 641.0], [24.7, 642.0], [24.8, 643.0], [24.9, 644.0], [25.0, 645.0], [25.1, 646.0], [25.2, 647.0], [25.3, 648.0], [25.4, 649.0], [25.5, 650.0], [25.6, 653.0], [25.7, 654.0], [25.8, 655.0], [25.9, 657.0], [26.0, 658.0], [26.1, 659.0], [26.2, 660.0], [26.3, 661.0], [26.4, 664.0], [26.5, 664.0], [26.6, 665.0], [26.7, 665.0], [26.8, 667.0], [26.9, 669.0], [27.0, 671.0], [27.1, 672.0], [27.2, 673.0], [27.3, 674.0], [27.4, 675.0], [27.5, 676.0], [27.6, 677.0], [27.7, 678.0], [27.8, 679.0], [27.9, 680.0], [28.0, 681.0], [28.1, 683.0], [28.2, 684.0], [28.3, 685.0], [28.4, 685.0], [28.5, 687.0], [28.6, 688.0], [28.7, 690.0], [28.8, 691.0], [28.9, 692.0], [29.0, 695.0], [29.1, 698.0], [29.2, 699.0], [29.3, 701.0], [29.4, 703.0], [29.5, 704.0], [29.6, 705.0], [29.7, 707.0], [29.8, 708.0], [29.9, 709.0], [30.0, 711.0], [30.1, 714.0], [30.2, 716.0], [30.3, 718.0], [30.4, 718.0], [30.5, 721.0], [30.6, 722.0], [30.7, 723.0], [30.8, 725.0], [30.9, 727.0], [31.0, 730.0], [31.1, 731.0], [31.2, 733.0], [31.3, 734.0], [31.4, 735.0], [31.5, 737.0], [31.6, 738.0], [31.7, 739.0], [31.8, 742.0], [31.9, 742.0], [32.0, 744.0], [32.1, 747.0], [32.2, 747.0], [32.3, 750.0], [32.4, 752.0], [32.5, 753.0], [32.6, 754.0], [32.7, 757.0], [32.8, 758.0], [32.9, 760.0], [33.0, 761.0], [33.1, 763.0], [33.2, 766.0], [33.3, 767.0], [33.4, 770.0], [33.5, 770.0], [33.6, 772.0], [33.7, 774.0], [33.8, 776.0], [33.9, 779.0], [34.0, 781.0], [34.1, 782.0], [34.2, 783.0], [34.3, 784.0], [34.4, 786.0], [34.5, 789.0], [34.6, 790.0], [34.7, 791.0], [34.8, 794.0], [34.9, 794.0], [35.0, 795.0], [35.1, 795.0], [35.2, 797.0], [35.3, 798.0], [35.4, 800.0], [35.5, 802.0], [35.6, 804.0], [35.7, 806.0], [35.8, 808.0], [35.9, 809.0], [36.0, 810.0], [36.1, 811.0], [36.2, 813.0], [36.3, 814.0], [36.4, 815.0], [36.5, 818.0], [36.6, 819.0], [36.7, 820.0], [36.8, 822.0], [36.9, 825.0], [37.0, 829.0], [37.1, 831.0], [37.2, 833.0], [37.3, 834.0], [37.4, 838.0], [37.5, 841.0], [37.6, 843.0], [37.7, 846.0], [37.8, 847.0], [37.9, 850.0], [38.0, 851.0], [38.1, 853.0], [38.2, 855.0], [38.3, 859.0], [38.4, 862.0], [38.5, 864.0], [38.6, 866.0], [38.7, 871.0], [38.8, 872.0], [38.9, 873.0], [39.0, 876.0], [39.1, 876.0], [39.2, 879.0], [39.3, 881.0], [39.4, 883.0], [39.5, 885.0], [39.6, 890.0], [39.7, 891.0], [39.8, 892.0], [39.9, 894.0], [40.0, 897.0], [40.1, 898.0], [40.2, 901.0], [40.3, 903.0], [40.4, 905.0], [40.5, 905.0], [40.6, 907.0], [40.7, 908.0], [40.8, 910.0], [40.9, 911.0], [41.0, 914.0], [41.1, 917.0], [41.2, 919.0], [41.3, 922.0], [41.4, 924.0], [41.5, 925.0], [41.6, 926.0], [41.7, 928.0], [41.8, 931.0], [41.9, 934.0], [42.0, 936.0], [42.1, 937.0], [42.2, 939.0], [42.3, 942.0], [42.4, 944.0], [42.5, 946.0], [42.6, 948.0], [42.7, 950.0], [42.8, 951.0], [42.9, 955.0], [43.0, 957.0], [43.1, 959.0], [43.2, 961.0], [43.3, 964.0], [43.4, 967.0], [43.5, 971.0], [43.6, 973.0], [43.7, 976.0], [43.8, 977.0], [43.9, 978.0], [44.0, 980.0], [44.1, 982.0], [44.2, 983.0], [44.3, 986.0], [44.4, 988.0], [44.5, 991.0], [44.6, 993.0], [44.7, 994.0], [44.8, 996.0], [44.9, 1000.0], [45.0, 1002.0], [45.1, 1005.0], [45.2, 1006.0], [45.3, 1007.0], [45.4, 1009.0], [45.5, 1011.0], [45.6, 1012.0], [45.7, 1015.0], [45.8, 1016.0], [45.9, 1017.0], [46.0, 1019.0], [46.1, 1020.0], [46.2, 1022.0], [46.3, 1023.0], [46.4, 1026.0], [46.5, 1027.0], [46.6, 1029.0], [46.7, 1031.0], [46.8, 1033.0], [46.9, 1035.0], [47.0, 1037.0], [47.1, 1039.0], [47.2, 1042.0], [47.3, 1043.0], [47.4, 1044.0], [47.5, 1046.0], [47.6, 1048.0], [47.7, 1049.0], [47.8, 1050.0], [47.9, 1051.0], [48.0, 1053.0], [48.1, 1053.0], [48.2, 1055.0], [48.3, 1058.0], [48.4, 1060.0], [48.5, 1062.0], [48.6, 1062.0], [48.7, 1063.0], [48.8, 1065.0], [48.9, 1066.0], [49.0, 1068.0], [49.1, 1072.0], [49.2, 1073.0], [49.3, 1075.0], [49.4, 1077.0], [49.5, 1079.0], [49.6, 1080.0], [49.7, 1081.0], [49.8, 1082.0], [49.9, 1085.0], [50.0, 1087.0], [50.1, 1088.0], [50.2, 1091.0], [50.3, 1093.0], [50.4, 1096.0], [50.5, 1098.0], [50.6, 1099.0], [50.7, 1104.0], [50.8, 1105.0], [50.9, 1107.0], [51.0, 1108.0], [51.1, 1110.0], [51.2, 1111.0], [51.3, 1112.0], [51.4, 1113.0], [51.5, 1114.0], [51.6, 1116.0], [51.7, 1118.0], [51.8, 1120.0], [51.9, 1121.0], [52.0, 1123.0], [52.1, 1125.0], [52.2, 1127.0], [52.3, 1127.0], [52.4, 1129.0], [52.5, 1131.0], [52.6, 1132.0], [52.7, 1134.0], [52.8, 1135.0], [52.9, 1138.0], [53.0, 1139.0], [53.1, 1140.0], [53.2, 1143.0], [53.3, 1146.0], [53.4, 1147.0], [53.5, 1148.0], [53.6, 1150.0], [53.7, 1152.0], [53.8, 1154.0], [53.9, 1155.0], [54.0, 1156.0], [54.1, 1156.0], [54.2, 1158.0], [54.3, 1161.0], [54.4, 1162.0], [54.5, 1165.0], [54.6, 1168.0], [54.7, 1170.0], [54.8, 1173.0], [54.9, 1174.0], [55.0, 1176.0], [55.1, 1177.0], [55.2, 1178.0], [55.3, 1180.0], [55.4, 1181.0], [55.5, 1182.0], [55.6, 1183.0], [55.7, 1187.0], [55.8, 1190.0], [55.9, 1191.0], [56.0, 1193.0], [56.1, 1195.0], [56.2, 1198.0], [56.3, 1200.0], [56.4, 1201.0], [56.5, 1201.0], [56.6, 1204.0], [56.7, 1206.0], [56.8, 1209.0], [56.9, 1211.0], [57.0, 1213.0], [57.1, 1215.0], [57.2, 1217.0], [57.3, 1217.0], [57.4, 1220.0], [57.5, 1222.0], [57.6, 1225.0], [57.7, 1226.0], [57.8, 1227.0], [57.9, 1229.0], [58.0, 1231.0], [58.1, 1232.0], [58.2, 1234.0], [58.3, 1236.0], [58.4, 1238.0], [58.5, 1239.0], [58.6, 1241.0], [58.7, 1243.0], [58.8, 1244.0], [58.9, 1246.0], [59.0, 1248.0], [59.1, 1249.0], [59.2, 1252.0], [59.3, 1255.0], [59.4, 1258.0], [59.5, 1263.0], [59.6, 1266.0], [59.7, 1267.0], [59.8, 1269.0], [59.9, 1271.0], [60.0, 1272.0], [60.1, 1276.0], [60.2, 1278.0], [60.3, 1280.0], [60.4, 1282.0], [60.5, 1284.0], [60.6, 1286.0], [60.7, 1287.0], [60.8, 1289.0], [60.9, 1290.0], [61.0, 1293.0], [61.1, 1294.0], [61.2, 1297.0], [61.3, 1299.0], [61.4, 1301.0], [61.5, 1302.0], [61.6, 1305.0], [61.7, 1306.0], [61.8, 1308.0], [61.9, 1310.0], [62.0, 1312.0], [62.1, 1315.0], [62.2, 1318.0], [62.3, 1321.0], [62.4, 1324.0], [62.5, 1327.0], [62.6, 1330.0], [62.7, 1331.0], [62.8, 1333.0], [62.9, 1335.0], [63.0, 1337.0], [63.1, 1339.0], [63.2, 1344.0], [63.3, 1345.0], [63.4, 1347.0], [63.5, 1348.0], [63.6, 1349.0], [63.7, 1350.0], [63.8, 1353.0], [63.9, 1354.0], [64.0, 1357.0], [64.1, 1358.0], [64.2, 1359.0], [64.3, 1362.0], [64.4, 1364.0], [64.5, 1366.0], [64.6, 1370.0], [64.7, 1372.0], [64.8, 1374.0], [64.9, 1376.0], [65.0, 1378.0], [65.1, 1380.0], [65.2, 1382.0], [65.3, 1385.0], [65.4, 1388.0], [65.5, 1389.0], [65.6, 1393.0], [65.7, 1393.0], [65.8, 1395.0], [65.9, 1397.0], [66.0, 1398.0], [66.1, 1399.0], [66.2, 1401.0], [66.3, 1402.0], [66.4, 1407.0], [66.5, 1409.0], [66.6, 1411.0], [66.7, 1412.0], [66.8, 1415.0], [66.9, 1416.0], [67.0, 1419.0], [67.1, 1421.0], [67.2, 1423.0], [67.3, 1428.0], [67.4, 1431.0], [67.5, 1434.0], [67.6, 1435.0], [67.7, 1436.0], [67.8, 1437.0], [67.9, 1440.0], [68.0, 1441.0], [68.1, 1443.0], [68.2, 1446.0], [68.3, 1447.0], [68.4, 1449.0], [68.5, 1451.0], [68.6, 1453.0], [68.7, 1454.0], [68.8, 1456.0], [68.9, 1458.0], [69.0, 1461.0], [69.1, 1462.0], [69.2, 1463.0], [69.3, 1465.0], [69.4, 1467.0], [69.5, 1469.0], [69.6, 1470.0], [69.7, 1473.0], [69.8, 1475.0], [69.9, 1477.0], [70.0, 1479.0], [70.1, 1480.0], [70.2, 1480.0], [70.3, 1484.0], [70.4, 1485.0], [70.5, 1487.0], [70.6, 1489.0], [70.7, 1491.0], [70.8, 1491.0], [70.9, 1493.0], [71.0, 1494.0], [71.1, 1496.0], [71.2, 1497.0], [71.3, 1498.0], [71.4, 1499.0], [71.5, 1500.0], [71.6, 1502.0], [71.7, 1506.0], [71.8, 1508.0], [71.9, 1511.0], [72.0, 1512.0], [72.1, 1514.0], [72.2, 1516.0], [72.3, 1516.0], [72.4, 1518.0], [72.5, 1518.0], [72.6, 1519.0], [72.7, 1522.0], [72.8, 1524.0], [72.9, 1526.0], [73.0, 1527.0], [73.1, 1529.0], [73.2, 1530.0], [73.3, 1533.0], [73.4, 1534.0], [73.5, 1536.0], [73.6, 1538.0], [73.7, 1540.0], [73.8, 1542.0], [73.9, 1544.0], [74.0, 1545.0], [74.1, 1550.0], [74.2, 1553.0], [74.3, 1555.0], [74.4, 1557.0], [74.5, 1559.0], [74.6, 1560.0], [74.7, 1565.0], [74.8, 1566.0], [74.9, 1567.0], [75.0, 1570.0], [75.1, 1572.0], [75.2, 1575.0], [75.3, 1577.0], [75.4, 1580.0], [75.5, 1582.0], [75.6, 1584.0], [75.7, 1585.0], [75.8, 1588.0], [75.9, 1591.0], [76.0, 1595.0], [76.1, 1598.0], [76.2, 1600.0], [76.3, 1604.0], [76.4, 1606.0], [76.5, 1608.0], [76.6, 1609.0], [76.7, 1610.0], [76.8, 1613.0], [76.9, 1615.0], [77.0, 1617.0], [77.1, 1618.0], [77.2, 1619.0], [77.3, 1621.0], [77.4, 1625.0], [77.5, 1627.0], [77.6, 1631.0], [77.7, 1632.0], [77.8, 1634.0], [77.9, 1636.0], [78.0, 1637.0], [78.1, 1639.0], [78.2, 1642.0], [78.3, 1644.0], [78.4, 1646.0], [78.5, 1648.0], [78.6, 1650.0], [78.7, 1652.0], [78.8, 1654.0], [78.9, 1656.0], [79.0, 1657.0], [79.1, 1660.0], [79.2, 1663.0], [79.3, 1666.0], [79.4, 1667.0], [79.5, 1669.0], [79.6, 1671.0], [79.7, 1674.0], [79.8, 1676.0], [79.9, 1678.0], [80.0, 1680.0], [80.1, 1683.0], [80.2, 1685.0], [80.3, 1688.0], [80.4, 1689.0], [80.5, 1692.0], [80.6, 1694.0], [80.7, 1695.0], [80.8, 1697.0], [80.9, 1698.0], [81.0, 1699.0], [81.1, 1702.0], [81.2, 1705.0], [81.3, 1711.0], [81.4, 1713.0], [81.5, 1715.0], [81.6, 1716.0], [81.7, 1718.0], [81.8, 1722.0], [81.9, 1726.0], [82.0, 1728.0], [82.1, 1730.0], [82.2, 1732.0], [82.3, 1735.0], [82.4, 1737.0], [82.5, 1740.0], [82.6, 1743.0], [82.7, 1746.0], [82.8, 1750.0], [82.9, 1751.0], [83.0, 1753.0], [83.1, 1759.0], [83.2, 1762.0], [83.3, 1764.0], [83.4, 1766.0], [83.5, 1768.0], [83.6, 1770.0], [83.7, 1774.0], [83.8, 1776.0], [83.9, 1782.0], [84.0, 1785.0], [84.1, 1790.0], [84.2, 1792.0], [84.3, 1799.0], [84.4, 1802.0], [84.5, 1806.0], [84.6, 1809.0], [84.7, 1812.0], [84.8, 1816.0], [84.9, 1819.0], [85.0, 1825.0], [85.1, 1827.0], [85.2, 1830.0], [85.3, 1835.0], [85.4, 1840.0], [85.5, 1842.0], [85.6, 1846.0], [85.7, 1850.0], [85.8, 1855.0], [85.9, 1858.0], [86.0, 1863.0], [86.1, 1868.0], [86.2, 1874.0], [86.3, 1878.0], [86.4, 1883.0], [86.5, 1888.0], [86.6, 1896.0], [86.7, 1900.0], [86.8, 1903.0], [86.9, 1906.0], [87.0, 1910.0], [87.1, 1914.0], [87.2, 1917.0], [87.3, 1926.0], [87.4, 1933.0], [87.5, 1938.0], [87.6, 1946.0], [87.7, 1951.0], [87.8, 1957.0], [87.9, 1962.0], [88.0, 1968.0], [88.1, 1971.0], [88.2, 1974.0], [88.3, 1981.0], [88.4, 1984.0], [88.5, 1991.0], [88.6, 2001.0], [88.7, 2006.0], [88.8, 2011.0], [88.9, 2015.0], [89.0, 2021.0], [89.1, 2026.0], [89.2, 2032.0], [89.3, 2040.0], [89.4, 2044.0], [89.5, 2054.0], [89.6, 2058.0], [89.7, 2060.0], [89.8, 2065.0], [89.9, 2073.0], [90.0, 2078.0], [90.1, 2082.0], [90.2, 2088.0], [90.3, 2095.0], [90.4, 2098.0], [90.5, 2106.0], [90.6, 2116.0], [90.7, 2123.0], [90.8, 2127.0], [90.9, 2137.0], [91.0, 2142.0], [91.1, 2153.0], [91.2, 2157.0], [91.3, 2161.0], [91.4, 2166.0], [91.5, 2174.0], [91.6, 2180.0], [91.7, 2190.0], [91.8, 2195.0], [91.9, 2198.0], [92.0, 2207.0], [92.1, 2219.0], [92.2, 2226.0], [92.3, 2237.0], [92.4, 2246.0], [92.5, 2253.0], [92.6, 2259.0], [92.7, 2266.0], [92.8, 2279.0], [92.9, 2296.0], [93.0, 2302.0], [93.1, 2309.0], [93.2, 2315.0], [93.3, 2321.0], [93.4, 2326.0], [93.5, 2329.0], [93.6, 2339.0], [93.7, 2352.0], [93.8, 2363.0], [93.9, 2372.0], [94.0, 2380.0], [94.1, 2388.0], [94.2, 2394.0], [94.3, 2401.0], [94.4, 2408.0], [94.5, 2414.0], [94.6, 2424.0], [94.7, 2438.0], [94.8, 2444.0], [94.9, 2457.0], [95.0, 2470.0], [95.1, 2480.0], [95.2, 2493.0], [95.3, 2501.0], [95.4, 2511.0], [95.5, 2518.0], [95.6, 2526.0], [95.7, 2533.0], [95.8, 2549.0], [95.9, 2559.0], [96.0, 2584.0], [96.1, 2600.0], [96.2, 2613.0], [96.3, 2629.0], [96.4, 2660.0], [96.5, 2679.0], [96.6, 2713.0], [96.7, 2723.0], [96.8, 2738.0], [96.9, 2748.0], [97.0, 2757.0], [97.1, 2773.0], [97.2, 2784.0], [97.3, 2802.0], [97.4, 2831.0], [97.5, 2872.0], [97.6, 2885.0], [97.7, 2905.0], [97.8, 2938.0], [97.9, 2998.0], [98.0, 3032.0], [98.1, 3053.0], [98.2, 3078.0], [98.3, 3158.0], [98.4, 3174.0], [98.5, 3195.0], [98.6, 3247.0], [98.7, 3306.0], [98.8, 3356.0], [98.9, 3498.0], [99.0, 3555.0], [99.1, 3651.0], [99.2, 3704.0], [99.3, 3747.0], [99.4, 3840.0], [99.5, 4045.0], [99.6, 4639.0], [99.7, 5085.0], [99.8, 5301.0], [99.9, 6169.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 543.0, "series": [{"data": [[600.0, 431.0], [700.0, 319.0], [800.0, 248.0], [900.0, 246.0], [1000.0, 297.0], [1100.0, 292.0], [1200.0, 264.0], [1300.0, 248.0], [1400.0, 278.0], [1500.0, 245.0], [1600.0, 252.0], [1700.0, 173.0], [1800.0, 119.0], [1900.0, 99.0], [2000.0, 95.0], [2100.0, 78.0], [2300.0, 68.0], [2200.0, 56.0], [2400.0, 52.0], [2500.0, 41.0], [2600.0, 22.0], [2700.0, 40.0], [2800.0, 19.0], [2900.0, 14.0], [3000.0, 17.0], [3100.0, 14.0], [3300.0, 8.0], [3200.0, 9.0], [3400.0, 3.0], [3500.0, 8.0], [3600.0, 7.0], [3700.0, 7.0], [3800.0, 6.0], [3900.0, 1.0], [4000.0, 5.0], [4200.0, 1.0], [4500.0, 1.0], [4600.0, 3.0], [4700.0, 1.0], [5100.0, 2.0], [5000.0, 2.0], [4900.0, 1.0], [5300.0, 1.0], [5200.0, 1.0], [5600.0, 1.0], [5700.0, 1.0], [6100.0, 2.0], [5900.0, 1.0], [6300.0, 1.0], [6400.0, 2.0], [6600.0, 1.0], [6500.0, 1.0], [200.0, 5.0], [300.0, 140.0], [400.0, 543.0], [500.0, 398.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 692.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3019.0, "series": [{"data": [[0.0, 692.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3019.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1479.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.541666666666664, "minX": 1.60263594E12, "maxY": 12.0, "series": [{"data": [[1.6026363E12, 12.0], [1.60263612E12, 12.0], [1.60263642E12, 12.0], [1.60263594E12, 12.0], [1.60263624E12, 12.0], [1.60263606E12, 12.0], [1.60263636E12, 12.0], [1.60263618E12, 12.0], [1.60263648E12, 11.541666666666664], [1.602636E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263648E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 692.0, "minX": 1.0, "maxY": 3194.0, "series": [{"data": [[8.0, 1085.0], [4.0, 1194.0], [2.0, 3194.0], [1.0, 2842.0], [9.0, 692.0], [10.0, 1906.0], [5.0, 718.0], [11.0, 825.0], [12.0, 1205.7086310098484], [6.0, 1577.0], [3.0, 1213.0], [7.0, 1414.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 1206.363198458575]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1084.4666666666667, "minX": 1.60263594E12, "maxY": 3241693.966666667, "series": [{"data": [[1.6026363E12, 2306418.216666667], [1.60263612E12, 2979993.45], [1.60263642E12, 2634162.316666667], [1.60263594E12, 1292176.2166666666], [1.60263624E12, 2748573.35], [1.60263606E12, 2994568.5], [1.60263636E12, 3241693.966666667], [1.60263618E12, 2747767.783333333], [1.60263648E12, 675827.5666666667], [1.602636E12, 2351373.1666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6026363E12, 4501.45], [1.60263612E12, 4565.15], [1.60263642E12, 4695.2], [1.60263594E12, 1388.3833333333334], [1.60263624E12, 3932.133333333333], [1.60263606E12, 5031.8], [1.60263636E12, 4924.783333333334], [1.60263618E12, 4393.85], [1.60263648E12, 1084.4666666666667], [1.602636E12, 4060.116666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263648E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1063.343703703704, "minX": 1.60263594E12, "maxY": 1619.441489361702, "series": [{"data": [[1.6026363E12, 1165.1312803889791], [1.60263612E12, 1207.2512479201334], [1.60263642E12, 1155.6177419354844], [1.60263594E12, 1619.441489361702], [1.60263624E12, 1315.6131386861316], [1.60263606E12, 1063.343703703704], [1.60263636E12, 1109.5285053929124], [1.60263618E12, 1221.445017182131], [1.60263648E12, 1456.9097222222222], [1.602636E12, 1265.3180212014129]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263648E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1061.0903703703705, "minX": 1.60263594E12, "maxY": 1616.1436170212764, "series": [{"data": [[1.6026363E12, 1163.5980551053497], [1.60263612E12, 1204.8535773710482], [1.60263642E12, 1154.1435483870985], [1.60263594E12, 1616.1436170212764], [1.60263624E12, 1313.8448905109487], [1.60263606E12, 1061.0903703703705], [1.60263636E12, 1107.6409861325108], [1.60263618E12, 1219.5360824742268], [1.60263648E12, 1455.4583333333333], [1.602636E12, 1263.5053003533592]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263648E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60263594E12, "maxY": 0.6329787234042556, "series": [{"data": [[1.6026363E12, 0.025931928687196102], [1.60263612E12, 0.033277870216306155], [1.60263642E12, 0.01451612903225807], [1.60263594E12, 0.6329787234042556], [1.60263624E12, 0.04562043795620438], [1.60263606E12, 0.02222222222222221], [1.60263636E12, 0.01694915254237289], [1.60263618E12, 0.018900343642611662], [1.60263648E12, 0.0], [1.602636E12, 0.02473498233215548]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263648E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 207.0, "minX": 1.60263594E12, "maxY": 6661.0, "series": [{"data": [[1.6026363E12, 3704.0], [1.60263612E12, 3740.0], [1.60263642E12, 4045.0], [1.60263594E12, 5301.0], [1.60263624E12, 6661.0], [1.60263606E12, 4691.0], [1.60263636E12, 3167.0], [1.60263618E12, 5608.0], [1.60263648E12, 4064.0], [1.602636E12, 6494.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6026363E12, 391.0], [1.60263612E12, 386.5079991388321], [1.60263642E12, 374.7669995558262], [1.60263594E12, 385.50499977469445], [1.60263624E12, 410.0], [1.60263606E12, 379.1679996776581], [1.60263636E12, 373.0], [1.60263618E12, 371.74099958300593], [1.60263648E12, 669.0649988591671], [1.602636E12, 412.44199810743334]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6026363E12, 391.1182000589371], [1.60263612E12, 389.75880034446715], [1.60263642E12, 376.14790005922316], [1.60263594E12, 386.35550009012223], [1.60263624E12, 413.9159004712105], [1.60263606E12, 380.3848001289368], [1.60263636E12, 373.43500006198883], [1.60263618E12, 373.31510016679766], [1.60263648E12, 673.3715004563331], [1.602636E12, 419.5862007570267]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6026363E12, 391.0], [1.60263612E12, 388.31399956941607], [1.60263642E12, 375.69849977791307], [1.60263594E12, 385.9774998873472], [1.60263624E12, 411.9394994109869], [1.60263606E12, 379.84399983882906], [1.60263636E12, 373.17499992251396], [1.60263618E12, 372.61549979150294], [1.60263648E12, 671.4574994295835], [1.602636E12, 416.41099905371664]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6026363E12, 207.0], [1.60263612E12, 216.0], [1.60263642E12, 220.0], [1.60263594E12, 382.0], [1.60263624E12, 398.0], [1.60263606E12, 285.0], [1.60263636E12, 363.0], [1.60263618E12, 316.0], [1.60263648E12, 659.0], [1.602636E12, 375.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6026363E12, 1026.0], [1.60263612E12, 1129.0], [1.60263642E12, 1072.0], [1.60263594E12, 1406.0], [1.60263624E12, 1153.0], [1.60263606E12, 753.0], [1.60263636E12, 1026.0], [1.60263618E12, 1082.5], [1.60263648E12, 1306.0], [1.602636E12, 1113.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263648E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 420.0, "minX": 2.0, "maxY": 2394.0, "series": [{"data": [[2.0, 2394.0], [3.0, 2060.0], [4.0, 2138.0], [5.0, 1553.0], [6.0, 1608.5], [7.0, 1397.0], [8.0, 1285.0], [9.0, 1349.0], [10.0, 1150.0], [11.0, 1110.0], [12.0, 953.5], [13.0, 877.0], [14.0, 814.5], [15.0, 686.0], [16.0, 646.5], [17.0, 564.0], [18.0, 544.5], [19.0, 462.0], [20.0, 461.0], [21.0, 472.0], [22.0, 485.5], [23.0, 442.5], [24.0, 454.5], [25.0, 473.5], [26.0, 430.0], [27.0, 420.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 419.0, "minX": 2.0, "maxY": 2392.0, "series": [{"data": [[2.0, 2392.0], [3.0, 2057.0], [4.0, 2134.5], [5.0, 1552.0], [6.0, 1606.0], [7.0, 1396.0], [8.0, 1283.0], [9.0, 1346.0], [10.0, 1147.5], [11.0, 1108.5], [12.0, 953.0], [13.0, 876.5], [14.0, 813.0], [15.0, 685.5], [16.0, 646.0], [17.0, 564.0], [18.0, 544.0], [19.0, 462.0], [20.0, 461.0], [21.0, 471.0], [22.0, 485.0], [23.0, 442.0], [24.0, 454.5], [25.0, 473.0], [26.0, 430.0], [27.0, 419.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.2, "minX": 1.60263594E12, "maxY": 11.25, "series": [{"data": [[1.6026363E12, 10.283333333333333], [1.60263612E12, 10.016666666666667], [1.60263642E12, 10.333333333333334], [1.60263594E12, 3.3333333333333335], [1.60263624E12, 9.133333333333333], [1.60263606E12, 11.25], [1.60263636E12, 10.816666666666666], [1.60263618E12, 9.7], [1.60263648E12, 2.2], [1.602636E12, 9.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263648E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.4, "minX": 1.60263594E12, "maxY": 11.25, "series": [{"data": [[1.6026363E12, 10.283333333333333], [1.60263612E12, 10.016666666666667], [1.60263642E12, 10.333333333333334], [1.60263594E12, 3.1333333333333333], [1.60263624E12, 9.133333333333333], [1.60263606E12, 11.25], [1.60263636E12, 10.816666666666666], [1.60263618E12, 9.7], [1.60263648E12, 2.4], [1.602636E12, 9.433333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263648E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.4, "minX": 1.60263594E12, "maxY": 11.25, "series": [{"data": [[1.6026363E12, 10.283333333333333], [1.60263612E12, 10.016666666666667], [1.60263642E12, 10.333333333333334], [1.60263594E12, 3.1333333333333333], [1.60263624E12, 9.133333333333333], [1.60263606E12, 11.25], [1.60263636E12, 10.816666666666666], [1.60263618E12, 9.7], [1.60263648E12, 2.4], [1.602636E12, 9.433333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263648E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.4, "minX": 1.60263594E12, "maxY": 11.25, "series": [{"data": [[1.6026363E12, 10.283333333333333], [1.60263612E12, 10.016666666666667], [1.60263642E12, 10.333333333333334], [1.60263594E12, 3.1333333333333333], [1.60263624E12, 9.133333333333333], [1.60263606E12, 11.25], [1.60263636E12, 10.816666666666666], [1.60263618E12, 9.7], [1.60263648E12, 2.4], [1.602636E12, 9.433333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263648E12, "title": "Total Transactions Per Second"}},
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

