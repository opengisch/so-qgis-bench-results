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
        data: {"result": {"minY": 234.0, "minX": 0.0, "maxY": 6890.0, "series": [{"data": [[0.0, 234.0], [0.1, 264.0], [0.2, 311.0], [0.3, 352.0], [0.4, 395.0], [0.5, 402.0], [0.6, 409.0], [0.7, 412.0], [0.8, 414.0], [0.9, 415.0], [1.0, 419.0], [1.1, 424.0], [1.2, 430.0], [1.3, 431.0], [1.4, 434.0], [1.5, 435.0], [1.6, 439.0], [1.7, 441.0], [1.8, 444.0], [1.9, 445.0], [2.0, 447.0], [2.1, 450.0], [2.2, 451.0], [2.3, 454.0], [2.4, 457.0], [2.5, 459.0], [2.6, 460.0], [2.7, 463.0], [2.8, 464.0], [2.9, 465.0], [3.0, 466.0], [3.1, 469.0], [3.2, 471.0], [3.3, 472.0], [3.4, 473.0], [3.5, 474.0], [3.6, 475.0], [3.7, 477.0], [3.8, 478.0], [3.9, 479.0], [4.0, 480.0], [4.1, 481.0], [4.2, 482.0], [4.3, 483.0], [4.4, 484.0], [4.5, 485.0], [4.6, 486.0], [4.7, 488.0], [4.8, 489.0], [4.9, 490.0], [5.0, 491.0], [5.1, 492.0], [5.2, 493.0], [5.3, 494.0], [5.4, 496.0], [5.5, 497.0], [5.6, 499.0], [5.7, 500.0], [5.8, 502.0], [5.9, 503.0], [6.0, 504.0], [6.1, 506.0], [6.2, 506.0], [6.3, 507.0], [6.4, 508.0], [6.5, 510.0], [6.6, 512.0], [6.7, 513.0], [6.8, 515.0], [6.9, 516.0], [7.0, 517.0], [7.1, 518.0], [7.2, 519.0], [7.3, 519.0], [7.4, 520.0], [7.5, 522.0], [7.6, 523.0], [7.7, 524.0], [7.8, 525.0], [7.9, 527.0], [8.0, 528.0], [8.1, 530.0], [8.2, 531.0], [8.3, 532.0], [8.4, 535.0], [8.5, 536.0], [8.6, 537.0], [8.7, 538.0], [8.8, 539.0], [8.9, 540.0], [9.0, 542.0], [9.1, 543.0], [9.2, 544.0], [9.3, 546.0], [9.4, 547.0], [9.5, 548.0], [9.6, 549.0], [9.7, 550.0], [9.8, 551.0], [9.9, 552.0], [10.0, 553.0], [10.1, 554.0], [10.2, 555.0], [10.3, 557.0], [10.4, 557.0], [10.5, 558.0], [10.6, 558.0], [10.7, 559.0], [10.8, 561.0], [10.9, 562.0], [11.0, 564.0], [11.1, 564.0], [11.2, 566.0], [11.3, 567.0], [11.4, 568.0], [11.5, 568.0], [11.6, 570.0], [11.7, 571.0], [11.8, 572.0], [11.9, 572.0], [12.0, 573.0], [12.1, 574.0], [12.2, 575.0], [12.3, 575.0], [12.4, 576.0], [12.5, 577.0], [12.6, 579.0], [12.7, 580.0], [12.8, 581.0], [12.9, 581.0], [13.0, 583.0], [13.1, 584.0], [13.2, 585.0], [13.3, 585.0], [13.4, 587.0], [13.5, 588.0], [13.6, 590.0], [13.7, 590.0], [13.8, 591.0], [13.9, 592.0], [14.0, 592.0], [14.1, 594.0], [14.2, 595.0], [14.3, 596.0], [14.4, 596.0], [14.5, 598.0], [14.6, 599.0], [14.7, 600.0], [14.8, 601.0], [14.9, 602.0], [15.0, 603.0], [15.1, 604.0], [15.2, 605.0], [15.3, 606.0], [15.4, 606.0], [15.5, 607.0], [15.6, 608.0], [15.7, 609.0], [15.8, 610.0], [15.9, 611.0], [16.0, 611.0], [16.1, 613.0], [16.2, 614.0], [16.3, 615.0], [16.4, 616.0], [16.5, 616.0], [16.6, 617.0], [16.7, 618.0], [16.8, 618.0], [16.9, 619.0], [17.0, 621.0], [17.1, 621.0], [17.2, 622.0], [17.3, 623.0], [17.4, 623.0], [17.5, 624.0], [17.6, 625.0], [17.7, 626.0], [17.8, 627.0], [17.9, 628.0], [18.0, 629.0], [18.1, 631.0], [18.2, 632.0], [18.3, 634.0], [18.4, 637.0], [18.5, 638.0], [18.6, 639.0], [18.7, 640.0], [18.8, 640.0], [18.9, 641.0], [19.0, 642.0], [19.1, 642.0], [19.2, 643.0], [19.3, 644.0], [19.4, 645.0], [19.5, 647.0], [19.6, 648.0], [19.7, 649.0], [19.8, 650.0], [19.9, 651.0], [20.0, 652.0], [20.1, 653.0], [20.2, 653.0], [20.3, 655.0], [20.4, 655.0], [20.5, 656.0], [20.6, 657.0], [20.7, 658.0], [20.8, 660.0], [20.9, 661.0], [21.0, 661.0], [21.1, 662.0], [21.2, 663.0], [21.3, 663.0], [21.4, 665.0], [21.5, 666.0], [21.6, 667.0], [21.7, 668.0], [21.8, 668.0], [21.9, 669.0], [22.0, 670.0], [22.1, 671.0], [22.2, 673.0], [22.3, 674.0], [22.4, 675.0], [22.5, 676.0], [22.6, 677.0], [22.7, 679.0], [22.8, 679.0], [22.9, 680.0], [23.0, 681.0], [23.1, 682.0], [23.2, 683.0], [23.3, 684.0], [23.4, 685.0], [23.5, 686.0], [23.6, 688.0], [23.7, 689.0], [23.8, 690.0], [23.9, 691.0], [24.0, 692.0], [24.1, 693.0], [24.2, 694.0], [24.3, 695.0], [24.4, 695.0], [24.5, 697.0], [24.6, 698.0], [24.7, 699.0], [24.8, 700.0], [24.9, 701.0], [25.0, 701.0], [25.1, 703.0], [25.2, 705.0], [25.3, 706.0], [25.4, 708.0], [25.5, 708.0], [25.6, 709.0], [25.7, 710.0], [25.8, 711.0], [25.9, 712.0], [26.0, 713.0], [26.1, 714.0], [26.2, 715.0], [26.3, 717.0], [26.4, 718.0], [26.5, 719.0], [26.6, 720.0], [26.7, 722.0], [26.8, 723.0], [26.9, 723.0], [27.0, 724.0], [27.1, 726.0], [27.2, 726.0], [27.3, 728.0], [27.4, 729.0], [27.5, 731.0], [27.6, 731.0], [27.7, 733.0], [27.8, 735.0], [27.9, 736.0], [28.0, 737.0], [28.1, 737.0], [28.2, 738.0], [28.3, 739.0], [28.4, 741.0], [28.5, 742.0], [28.6, 745.0], [28.7, 746.0], [28.8, 746.0], [28.9, 747.0], [29.0, 749.0], [29.1, 750.0], [29.2, 752.0], [29.3, 753.0], [29.4, 755.0], [29.5, 756.0], [29.6, 758.0], [29.7, 760.0], [29.8, 761.0], [29.9, 762.0], [30.0, 763.0], [30.1, 765.0], [30.2, 766.0], [30.3, 767.0], [30.4, 769.0], [30.5, 770.0], [30.6, 772.0], [30.7, 774.0], [30.8, 778.0], [30.9, 779.0], [31.0, 781.0], [31.1, 782.0], [31.2, 784.0], [31.3, 785.0], [31.4, 787.0], [31.5, 789.0], [31.6, 789.0], [31.7, 791.0], [31.8, 792.0], [31.9, 793.0], [32.0, 795.0], [32.1, 796.0], [32.2, 797.0], [32.3, 798.0], [32.4, 799.0], [32.5, 801.0], [32.6, 802.0], [32.7, 804.0], [32.8, 804.0], [32.9, 805.0], [33.0, 805.0], [33.1, 806.0], [33.2, 808.0], [33.3, 808.0], [33.4, 809.0], [33.5, 811.0], [33.6, 812.0], [33.7, 812.0], [33.8, 814.0], [33.9, 815.0], [34.0, 816.0], [34.1, 818.0], [34.2, 820.0], [34.3, 821.0], [34.4, 823.0], [34.5, 824.0], [34.6, 825.0], [34.7, 827.0], [34.8, 828.0], [34.9, 830.0], [35.0, 832.0], [35.1, 833.0], [35.2, 834.0], [35.3, 837.0], [35.4, 838.0], [35.5, 839.0], [35.6, 840.0], [35.7, 842.0], [35.8, 843.0], [35.9, 844.0], [36.0, 846.0], [36.1, 848.0], [36.2, 851.0], [36.3, 853.0], [36.4, 853.0], [36.5, 854.0], [36.6, 856.0], [36.7, 857.0], [36.8, 859.0], [36.9, 859.0], [37.0, 861.0], [37.1, 862.0], [37.2, 864.0], [37.3, 864.0], [37.4, 864.0], [37.5, 865.0], [37.6, 866.0], [37.7, 867.0], [37.8, 868.0], [37.9, 870.0], [38.0, 871.0], [38.1, 872.0], [38.2, 874.0], [38.3, 875.0], [38.4, 876.0], [38.5, 878.0], [38.6, 878.0], [38.7, 879.0], [38.8, 883.0], [38.9, 885.0], [39.0, 886.0], [39.1, 887.0], [39.2, 888.0], [39.3, 890.0], [39.4, 891.0], [39.5, 891.0], [39.6, 893.0], [39.7, 893.0], [39.8, 894.0], [39.9, 896.0], [40.0, 898.0], [40.1, 898.0], [40.2, 899.0], [40.3, 902.0], [40.4, 904.0], [40.5, 905.0], [40.6, 905.0], [40.7, 907.0], [40.8, 908.0], [40.9, 910.0], [41.0, 912.0], [41.1, 913.0], [41.2, 915.0], [41.3, 917.0], [41.4, 919.0], [41.5, 921.0], [41.6, 922.0], [41.7, 923.0], [41.8, 924.0], [41.9, 926.0], [42.0, 927.0], [42.1, 929.0], [42.2, 929.0], [42.3, 932.0], [42.4, 934.0], [42.5, 935.0], [42.6, 936.0], [42.7, 938.0], [42.8, 939.0], [42.9, 941.0], [43.0, 943.0], [43.1, 943.0], [43.2, 944.0], [43.3, 946.0], [43.4, 946.0], [43.5, 948.0], [43.6, 950.0], [43.7, 951.0], [43.8, 954.0], [43.9, 955.0], [44.0, 957.0], [44.1, 959.0], [44.2, 959.0], [44.3, 960.0], [44.4, 962.0], [44.5, 964.0], [44.6, 968.0], [44.7, 968.0], [44.8, 970.0], [44.9, 971.0], [45.0, 972.0], [45.1, 974.0], [45.2, 975.0], [45.3, 977.0], [45.4, 979.0], [45.5, 981.0], [45.6, 983.0], [45.7, 984.0], [45.8, 985.0], [45.9, 985.0], [46.0, 989.0], [46.1, 990.0], [46.2, 991.0], [46.3, 992.0], [46.4, 993.0], [46.5, 996.0], [46.6, 998.0], [46.7, 998.0], [46.8, 1000.0], [46.9, 1002.0], [47.0, 1003.0], [47.1, 1006.0], [47.2, 1007.0], [47.3, 1008.0], [47.4, 1008.0], [47.5, 1009.0], [47.6, 1011.0], [47.7, 1012.0], [47.8, 1013.0], [47.9, 1014.0], [48.0, 1016.0], [48.1, 1017.0], [48.2, 1019.0], [48.3, 1020.0], [48.4, 1020.0], [48.5, 1022.0], [48.6, 1024.0], [48.7, 1025.0], [48.8, 1027.0], [48.9, 1030.0], [49.0, 1031.0], [49.1, 1032.0], [49.2, 1034.0], [49.3, 1037.0], [49.4, 1039.0], [49.5, 1041.0], [49.6, 1042.0], [49.7, 1043.0], [49.8, 1044.0], [49.9, 1045.0], [50.0, 1047.0], [50.1, 1050.0], [50.2, 1052.0], [50.3, 1054.0], [50.4, 1057.0], [50.5, 1058.0], [50.6, 1060.0], [50.7, 1060.0], [50.8, 1061.0], [50.9, 1063.0], [51.0, 1064.0], [51.1, 1066.0], [51.2, 1067.0], [51.3, 1069.0], [51.4, 1071.0], [51.5, 1072.0], [51.6, 1073.0], [51.7, 1074.0], [51.8, 1075.0], [51.9, 1076.0], [52.0, 1077.0], [52.1, 1078.0], [52.2, 1079.0], [52.3, 1081.0], [52.4, 1082.0], [52.5, 1083.0], [52.6, 1084.0], [52.7, 1085.0], [52.8, 1086.0], [52.9, 1088.0], [53.0, 1088.0], [53.1, 1089.0], [53.2, 1091.0], [53.3, 1092.0], [53.4, 1093.0], [53.5, 1094.0], [53.6, 1095.0], [53.7, 1098.0], [53.8, 1099.0], [53.9, 1100.0], [54.0, 1102.0], [54.1, 1105.0], [54.2, 1106.0], [54.3, 1108.0], [54.4, 1109.0], [54.5, 1110.0], [54.6, 1112.0], [54.7, 1114.0], [54.8, 1115.0], [54.9, 1116.0], [55.0, 1118.0], [55.1, 1120.0], [55.2, 1121.0], [55.3, 1122.0], [55.4, 1123.0], [55.5, 1126.0], [55.6, 1127.0], [55.7, 1129.0], [55.8, 1130.0], [55.9, 1132.0], [56.0, 1133.0], [56.1, 1134.0], [56.2, 1135.0], [56.3, 1137.0], [56.4, 1138.0], [56.5, 1140.0], [56.6, 1141.0], [56.7, 1143.0], [56.8, 1144.0], [56.9, 1147.0], [57.0, 1149.0], [57.1, 1150.0], [57.2, 1151.0], [57.3, 1153.0], [57.4, 1155.0], [57.5, 1156.0], [57.6, 1159.0], [57.7, 1162.0], [57.8, 1163.0], [57.9, 1164.0], [58.0, 1165.0], [58.1, 1167.0], [58.2, 1168.0], [58.3, 1169.0], [58.4, 1171.0], [58.5, 1173.0], [58.6, 1174.0], [58.7, 1175.0], [58.8, 1179.0], [58.9, 1181.0], [59.0, 1182.0], [59.1, 1183.0], [59.2, 1185.0], [59.3, 1186.0], [59.4, 1187.0], [59.5, 1189.0], [59.6, 1190.0], [59.7, 1193.0], [59.8, 1193.0], [59.9, 1196.0], [60.0, 1197.0], [60.1, 1199.0], [60.2, 1201.0], [60.3, 1203.0], [60.4, 1204.0], [60.5, 1207.0], [60.6, 1208.0], [60.7, 1210.0], [60.8, 1211.0], [60.9, 1212.0], [61.0, 1213.0], [61.1, 1214.0], [61.2, 1216.0], [61.3, 1217.0], [61.4, 1220.0], [61.5, 1221.0], [61.6, 1221.0], [61.7, 1224.0], [61.8, 1225.0], [61.9, 1226.0], [62.0, 1228.0], [62.1, 1230.0], [62.2, 1231.0], [62.3, 1236.0], [62.4, 1238.0], [62.5, 1240.0], [62.6, 1243.0], [62.7, 1246.0], [62.8, 1249.0], [62.9, 1252.0], [63.0, 1256.0], [63.1, 1257.0], [63.2, 1260.0], [63.3, 1262.0], [63.4, 1265.0], [63.5, 1267.0], [63.6, 1271.0], [63.7, 1273.0], [63.8, 1275.0], [63.9, 1277.0], [64.0, 1279.0], [64.1, 1279.0], [64.2, 1280.0], [64.3, 1281.0], [64.4, 1283.0], [64.5, 1284.0], [64.6, 1287.0], [64.7, 1289.0], [64.8, 1291.0], [64.9, 1292.0], [65.0, 1296.0], [65.1, 1297.0], [65.2, 1298.0], [65.3, 1299.0], [65.4, 1300.0], [65.5, 1304.0], [65.6, 1306.0], [65.7, 1307.0], [65.8, 1308.0], [65.9, 1309.0], [66.0, 1313.0], [66.1, 1314.0], [66.2, 1315.0], [66.3, 1318.0], [66.4, 1322.0], [66.5, 1324.0], [66.6, 1326.0], [66.7, 1327.0], [66.8, 1330.0], [66.9, 1331.0], [67.0, 1334.0], [67.1, 1336.0], [67.2, 1337.0], [67.3, 1340.0], [67.4, 1341.0], [67.5, 1343.0], [67.6, 1345.0], [67.7, 1347.0], [67.8, 1348.0], [67.9, 1348.0], [68.0, 1351.0], [68.1, 1354.0], [68.2, 1355.0], [68.3, 1357.0], [68.4, 1358.0], [68.5, 1359.0], [68.6, 1363.0], [68.7, 1365.0], [68.8, 1366.0], [68.9, 1370.0], [69.0, 1371.0], [69.1, 1373.0], [69.2, 1376.0], [69.3, 1378.0], [69.4, 1380.0], [69.5, 1382.0], [69.6, 1383.0], [69.7, 1385.0], [69.8, 1386.0], [69.9, 1388.0], [70.0, 1389.0], [70.1, 1391.0], [70.2, 1394.0], [70.3, 1396.0], [70.4, 1397.0], [70.5, 1400.0], [70.6, 1401.0], [70.7, 1403.0], [70.8, 1405.0], [70.9, 1407.0], [71.0, 1408.0], [71.1, 1411.0], [71.2, 1416.0], [71.3, 1418.0], [71.4, 1420.0], [71.5, 1421.0], [71.6, 1422.0], [71.7, 1425.0], [71.8, 1428.0], [71.9, 1430.0], [72.0, 1430.0], [72.1, 1432.0], [72.2, 1433.0], [72.3, 1436.0], [72.4, 1438.0], [72.5, 1440.0], [72.6, 1442.0], [72.7, 1444.0], [72.8, 1445.0], [72.9, 1447.0], [73.0, 1449.0], [73.1, 1451.0], [73.2, 1452.0], [73.3, 1456.0], [73.4, 1457.0], [73.5, 1458.0], [73.6, 1462.0], [73.7, 1464.0], [73.8, 1465.0], [73.9, 1466.0], [74.0, 1467.0], [74.1, 1467.0], [74.2, 1470.0], [74.3, 1473.0], [74.4, 1475.0], [74.5, 1477.0], [74.6, 1479.0], [74.7, 1480.0], [74.8, 1482.0], [74.9, 1483.0], [75.0, 1485.0], [75.1, 1486.0], [75.2, 1488.0], [75.3, 1489.0], [75.4, 1492.0], [75.5, 1494.0], [75.6, 1497.0], [75.7, 1498.0], [75.8, 1499.0], [75.9, 1500.0], [76.0, 1504.0], [76.1, 1505.0], [76.2, 1507.0], [76.3, 1509.0], [76.4, 1510.0], [76.5, 1512.0], [76.6, 1513.0], [76.7, 1514.0], [76.8, 1517.0], [76.9, 1519.0], [77.0, 1520.0], [77.1, 1523.0], [77.2, 1524.0], [77.3, 1526.0], [77.4, 1528.0], [77.5, 1529.0], [77.6, 1530.0], [77.7, 1532.0], [77.8, 1536.0], [77.9, 1540.0], [78.0, 1541.0], [78.1, 1543.0], [78.2, 1546.0], [78.3, 1547.0], [78.4, 1550.0], [78.5, 1554.0], [78.6, 1556.0], [78.7, 1558.0], [78.8, 1560.0], [78.9, 1562.0], [79.0, 1565.0], [79.1, 1566.0], [79.2, 1567.0], [79.3, 1570.0], [79.4, 1574.0], [79.5, 1577.0], [79.6, 1579.0], [79.7, 1581.0], [79.8, 1583.0], [79.9, 1584.0], [80.0, 1586.0], [80.1, 1588.0], [80.2, 1590.0], [80.3, 1592.0], [80.4, 1594.0], [80.5, 1595.0], [80.6, 1598.0], [80.7, 1602.0], [80.8, 1604.0], [80.9, 1607.0], [81.0, 1610.0], [81.1, 1612.0], [81.2, 1617.0], [81.3, 1620.0], [81.4, 1621.0], [81.5, 1622.0], [81.6, 1625.0], [81.7, 1628.0], [81.8, 1633.0], [81.9, 1636.0], [82.0, 1640.0], [82.1, 1641.0], [82.2, 1644.0], [82.3, 1647.0], [82.4, 1649.0], [82.5, 1651.0], [82.6, 1654.0], [82.7, 1656.0], [82.8, 1658.0], [82.9, 1661.0], [83.0, 1662.0], [83.1, 1665.0], [83.2, 1667.0], [83.3, 1670.0], [83.4, 1672.0], [83.5, 1675.0], [83.6, 1675.0], [83.7, 1677.0], [83.8, 1680.0], [83.9, 1687.0], [84.0, 1690.0], [84.1, 1691.0], [84.2, 1694.0], [84.3, 1702.0], [84.4, 1704.0], [84.5, 1706.0], [84.6, 1708.0], [84.7, 1710.0], [84.8, 1711.0], [84.9, 1718.0], [85.0, 1722.0], [85.1, 1726.0], [85.2, 1727.0], [85.3, 1730.0], [85.4, 1735.0], [85.5, 1739.0], [85.6, 1742.0], [85.7, 1745.0], [85.8, 1749.0], [85.9, 1752.0], [86.0, 1756.0], [86.1, 1760.0], [86.2, 1765.0], [86.3, 1766.0], [86.4, 1771.0], [86.5, 1777.0], [86.6, 1788.0], [86.7, 1791.0], [86.8, 1794.0], [86.9, 1798.0], [87.0, 1803.0], [87.1, 1814.0], [87.2, 1817.0], [87.3, 1820.0], [87.4, 1824.0], [87.5, 1828.0], [87.6, 1833.0], [87.7, 1838.0], [87.8, 1843.0], [87.9, 1850.0], [88.0, 1856.0], [88.1, 1862.0], [88.2, 1867.0], [88.3, 1875.0], [88.4, 1881.0], [88.5, 1891.0], [88.6, 1897.0], [88.7, 1907.0], [88.8, 1911.0], [88.9, 1915.0], [89.0, 1919.0], [89.1, 1928.0], [89.2, 1931.0], [89.3, 1936.0], [89.4, 1939.0], [89.5, 1953.0], [89.6, 1961.0], [89.7, 1966.0], [89.8, 1976.0], [89.9, 1980.0], [90.0, 1983.0], [90.1, 1989.0], [90.2, 1995.0], [90.3, 2005.0], [90.4, 2011.0], [90.5, 2020.0], [90.6, 2027.0], [90.7, 2036.0], [90.8, 2042.0], [90.9, 2047.0], [91.0, 2054.0], [91.1, 2064.0], [91.2, 2070.0], [91.3, 2075.0], [91.4, 2079.0], [91.5, 2080.0], [91.6, 2090.0], [91.7, 2103.0], [91.8, 2108.0], [91.9, 2119.0], [92.0, 2126.0], [92.1, 2133.0], [92.2, 2142.0], [92.3, 2148.0], [92.4, 2156.0], [92.5, 2163.0], [92.6, 2173.0], [92.7, 2181.0], [92.8, 2186.0], [92.9, 2195.0], [93.0, 2201.0], [93.1, 2208.0], [93.2, 2213.0], [93.3, 2219.0], [93.4, 2227.0], [93.5, 2239.0], [93.6, 2248.0], [93.7, 2263.0], [93.8, 2271.0], [93.9, 2287.0], [94.0, 2297.0], [94.1, 2299.0], [94.2, 2304.0], [94.3, 2321.0], [94.4, 2326.0], [94.5, 2341.0], [94.6, 2345.0], [94.7, 2356.0], [94.8, 2366.0], [94.9, 2374.0], [95.0, 2377.0], [95.1, 2381.0], [95.2, 2386.0], [95.3, 2393.0], [95.4, 2403.0], [95.5, 2414.0], [95.6, 2420.0], [95.7, 2428.0], [95.8, 2445.0], [95.9, 2452.0], [96.0, 2473.0], [96.1, 2488.0], [96.2, 2496.0], [96.3, 2509.0], [96.4, 2526.0], [96.5, 2536.0], [96.6, 2557.0], [96.7, 2570.0], [96.8, 2595.0], [96.9, 2642.0], [97.0, 2663.0], [97.1, 2687.0], [97.2, 2717.0], [97.3, 2752.0], [97.4, 2802.0], [97.5, 2845.0], [97.6, 2894.0], [97.7, 2922.0], [97.8, 2981.0], [97.9, 3025.0], [98.0, 3079.0], [98.1, 3124.0], [98.2, 3156.0], [98.3, 3225.0], [98.4, 3296.0], [98.5, 3352.0], [98.6, 3380.0], [98.7, 3458.0], [98.8, 3562.0], [98.9, 3665.0], [99.0, 3802.0], [99.1, 3880.0], [99.2, 3997.0], [99.3, 4128.0], [99.4, 4285.0], [99.5, 4634.0], [99.6, 4892.0], [99.7, 5278.0], [99.8, 5585.0], [99.9, 5721.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 526.0, "series": [{"data": [[600.0, 526.0], [700.0, 397.0], [800.0, 403.0], [900.0, 340.0], [1000.0, 367.0], [1100.0, 326.0], [1200.0, 271.0], [1300.0, 268.0], [1400.0, 278.0], [1500.0, 250.0], [1600.0, 187.0], [1700.0, 139.0], [1800.0, 88.0], [1900.0, 82.0], [2000.0, 76.0], [2100.0, 67.0], [2300.0, 64.0], [2200.0, 61.0], [2400.0, 45.0], [2500.0, 29.0], [2600.0, 17.0], [2700.0, 14.0], [2800.0, 11.0], [2900.0, 13.0], [3000.0, 9.0], [3100.0, 11.0], [3300.0, 11.0], [3200.0, 8.0], [3400.0, 7.0], [3500.0, 4.0], [3600.0, 6.0], [3700.0, 3.0], [3800.0, 7.0], [3900.0, 4.0], [4000.0, 3.0], [4100.0, 3.0], [4300.0, 2.0], [4200.0, 4.0], [4400.0, 2.0], [4500.0, 1.0], [4600.0, 1.0], [4800.0, 3.0], [4700.0, 2.0], [5000.0, 1.0], [5100.0, 1.0], [5200.0, 3.0], [5300.0, 1.0], [5600.0, 3.0], [5500.0, 4.0], [5400.0, 1.0], [5700.0, 2.0], [5900.0, 1.0], [6500.0, 2.0], [6800.0, 1.0], [200.0, 9.0], [300.0, 15.0], [400.0, 269.0], [500.0, 468.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 47.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3612.0, "series": [{"data": [[0.0, 296.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3612.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1236.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 47.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 39.53164556962025, "minX": 1.60189884E12, "maxY": 40.0, "series": [{"data": [[1.60189884E12, 40.0], [1.60189896E12, 39.53164556962025], [1.6018989E12, 40.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189896E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 674.0, "minX": 1.0, "maxY": 5104.0, "series": [{"data": [[33.0, 1327.0], [32.0, 2516.0], [2.0, 5104.0], [35.0, 1667.0], [34.0, 1809.0], [37.0, 2188.0], [36.0, 1094.0], [39.0, 674.0], [38.0, 1970.0], [40.0, 1187.556482919257], [3.0, 2961.0], [4.0, 1742.0], [5.0, 1983.0], [6.0, 1497.0], [7.0, 2078.0], [8.0, 968.0], [9.0, 1020.0], [10.0, 1447.0], [13.0, 1238.6666666666667], [14.0, 926.0], [15.0, 984.0], [16.0, 884.0], [1.0, 2642.0], [17.0, 1382.0], [18.0, 2382.0], [19.0, 749.0], [20.0, 2285.0], [21.0, 805.0], [22.0, 1095.0], [23.0, 4280.0], [24.0, 1909.0], [25.0, 3896.0], [26.0, 1677.0], [27.0, 1303.0], [28.0, 1790.0], [29.0, 1272.0], [30.0, 968.0], [31.0, 1389.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.85031785783088, 1191.8069736081702]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11323.0, "minX": 1.60189884E12, "maxY": 9057705.966666667, "series": [{"data": [[1.60189884E12, 6908086.966666667], [1.60189896E12, 7607985.7], [1.6018989E12, 9057705.966666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60189884E12, 11323.0], [1.60189896E12, 12485.4], [1.6018989E12, 14775.65]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189896E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1149.4370102471366, "minX": 1.60189884E12, "maxY": 1212.854545454549, "series": [{"data": [[1.60189884E12, 1212.854545454549], [1.60189896E12, 1149.4370102471366], [1.6018989E12, 1210.822289156628]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189896E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1147.5623869801068, "minX": 1.60189884E12, "maxY": 1210.9694805194817, "series": [{"data": [[1.60189884E12, 1210.9694805194817], [1.60189896E12, 1147.5623869801068], [1.6018989E12, 1208.9784136546155]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189896E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.020582329317269072, "minX": 1.60189884E12, "maxY": 0.41623376623376596, "series": [{"data": [[1.60189884E12, 0.41623376623376596], [1.60189896E12, 0.0229053646775166], [1.6018989E12, 0.020582329317269072]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189896E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 234.0, "minX": 1.60189884E12, "maxY": 6890.0, "series": [{"data": [[1.60189884E12, 5721.0], [1.60189896E12, 5104.0], [1.6018989E12, 6890.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60189884E12, 445.43199927330016], [1.60189896E12, 421.3999984264374], [1.6018989E12, 402.75699952960014]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60189884E12, 449.0], [1.60189896E12, 425.34500110149384], [1.6018989E12, 407.13080075263974]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60189884E12, 447.43399945497515], [1.60189896E12, 422.6749998033047], [1.6018989E12, 404.48699952960015]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60189884E12, 402.0], [1.60189896E12, 264.0], [1.6018989E12, 234.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60189884E12, 985.0], [1.60189896E12, 1051.0], [1.6018989E12, 1085.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189896E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 504.0, "minX": 1.0, "maxY": 2961.0, "series": [{"data": [[32.0, 1310.5], [33.0, 971.0], [34.0, 1135.0], [35.0, 1105.0], [37.0, 994.0], [36.0, 971.0], [39.0, 898.0], [38.0, 648.0], [41.0, 1094.0], [40.0, 803.5], [43.0, 853.5], [42.0, 890.0], [45.0, 738.0], [44.0, 726.0], [47.0, 663.0], [46.0, 726.0], [3.0, 2961.0], [50.0, 785.5], [51.0, 814.5], [55.0, 579.0], [57.0, 616.0], [60.0, 566.5], [68.0, 529.5], [71.0, 573.0], [1.0, 2759.0], [18.0, 1365.0], [19.0, 2337.0], [20.0, 1410.5], [21.0, 1611.0], [22.0, 1378.0], [24.0, 1348.0], [25.0, 1161.5], [26.0, 1375.5], [27.0, 1182.0], [28.0, 1109.0], [29.0, 1229.0], [30.0, 1082.0], [31.0, 1149.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 1619.5], [32.0, 1645.0], [34.0, 861.0], [36.0, 1060.0], [39.0, 664.0], [41.0, 1085.0], [40.0, 1259.0], [43.0, 748.0], [42.0, 504.0], [45.0, 2155.0], [44.0, 1536.0], [46.0, 894.0], [55.0, 845.0], [57.0, 629.0], [18.0, 1565.0], [21.0, 805.0], [22.0, 1067.0], [24.0, 1093.0], [25.0, 1110.5], [26.0, 1149.5], [28.0, 926.5], [29.0, 1212.0], [30.0, 1779.0], [31.0, 1548.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 71.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 504.0, "minX": 1.0, "maxY": 2950.0, "series": [{"data": [[32.0, 1310.0], [33.0, 970.5], [34.0, 1135.0], [35.0, 1103.0], [37.0, 993.0], [36.0, 969.0], [39.0, 894.5], [38.0, 648.0], [41.0, 1089.0], [40.0, 803.0], [43.0, 853.5], [42.0, 890.0], [45.0, 737.0], [44.0, 726.0], [47.0, 663.0], [46.0, 725.0], [3.0, 2950.0], [50.0, 785.5], [51.0, 807.0], [55.0, 579.0], [57.0, 616.0], [60.0, 566.5], [68.0, 529.5], [71.0, 573.0], [1.0, 2754.0], [18.0, 1362.0], [19.0, 2328.5], [20.0, 1408.5], [21.0, 1610.0], [22.0, 1376.5], [24.0, 1344.0], [25.0, 1160.0], [26.0, 1371.0], [27.0, 1179.0], [28.0, 1108.0], [29.0, 1226.0], [30.0, 1082.0], [31.0, 1148.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 1619.0], [32.0, 1645.0], [34.0, 861.0], [36.0, 1060.0], [39.0, 664.0], [41.0, 1085.0], [40.0, 1259.0], [43.0, 748.0], [42.0, 504.0], [45.0, 2154.0], [44.0, 1536.0], [46.0, 894.0], [55.0, 845.0], [57.0, 629.0], [18.0, 1565.0], [21.0, 805.0], [22.0, 1067.0], [24.0, 1093.0], [25.0, 1110.5], [26.0, 1149.5], [28.0, 926.5], [29.0, 1212.0], [30.0, 1779.0], [31.0, 1548.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 71.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 26.333333333333332, "minX": 1.60189884E12, "maxY": 33.2, "series": [{"data": [[1.60189884E12, 26.333333333333332], [1.60189896E12, 26.983333333333334], [1.6018989E12, 33.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189896E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189884E12, "maxY": 32.86666666666667, "series": [{"data": [[1.60189884E12, 25.383333333333333], [1.60189896E12, 27.483333333333334], [1.6018989E12, 32.86666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6018989E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.60189884E12, 0.2833333333333333], [1.60189896E12, 0.16666666666666666], [1.6018989E12, 0.31666666666666665]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189896E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60189884E12, "maxY": 32.86666666666667, "series": [{"data": [[1.60189884E12, 25.383333333333333], [1.60189896E12, 27.483333333333334], [1.6018989E12, 32.86666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60189884E12, 0.2833333333333333], [1.60189896E12, 0.16666666666666666], [1.6018989E12, 0.3333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189896E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60189884E12, "maxY": 32.86666666666667, "series": [{"data": [[1.60189884E12, 25.383333333333333], [1.60189896E12, 27.483333333333334], [1.6018989E12, 32.86666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60189884E12, 0.2833333333333333], [1.60189896E12, 0.16666666666666666], [1.6018989E12, 0.3333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189896E12, "title": "Total Transactions Per Second"}},
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

