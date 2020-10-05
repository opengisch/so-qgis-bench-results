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
        data: {"result": {"minY": 203.0, "minX": 0.0, "maxY": 6540.0, "series": [{"data": [[0.0, 203.0], [0.1, 261.0], [0.2, 300.0], [0.3, 385.0], [0.4, 397.0], [0.5, 405.0], [0.6, 410.0], [0.7, 412.0], [0.8, 414.0], [0.9, 415.0], [1.0, 417.0], [1.1, 418.0], [1.2, 419.0], [1.3, 420.0], [1.4, 421.0], [1.5, 424.0], [1.6, 426.0], [1.7, 427.0], [1.8, 428.0], [1.9, 429.0], [2.0, 432.0], [2.1, 434.0], [2.2, 435.0], [2.3, 436.0], [2.4, 439.0], [2.5, 442.0], [2.6, 444.0], [2.7, 447.0], [2.8, 448.0], [2.9, 449.0], [3.0, 450.0], [3.1, 452.0], [3.2, 453.0], [3.3, 454.0], [3.4, 455.0], [3.5, 456.0], [3.6, 457.0], [3.7, 460.0], [3.8, 463.0], [3.9, 464.0], [4.0, 465.0], [4.1, 466.0], [4.2, 467.0], [4.3, 468.0], [4.4, 469.0], [4.5, 472.0], [4.6, 474.0], [4.7, 474.0], [4.8, 475.0], [4.9, 476.0], [5.0, 477.0], [5.1, 480.0], [5.2, 482.0], [5.3, 484.0], [5.4, 485.0], [5.5, 486.0], [5.6, 486.0], [5.7, 487.0], [5.8, 488.0], [5.9, 491.0], [6.0, 492.0], [6.1, 493.0], [6.2, 494.0], [6.3, 495.0], [6.4, 496.0], [6.5, 497.0], [6.6, 498.0], [6.7, 499.0], [6.8, 500.0], [6.9, 501.0], [7.0, 502.0], [7.1, 504.0], [7.2, 506.0], [7.3, 507.0], [7.4, 508.0], [7.5, 510.0], [7.6, 511.0], [7.7, 511.0], [7.8, 513.0], [7.9, 515.0], [8.0, 516.0], [8.1, 516.0], [8.2, 518.0], [8.3, 519.0], [8.4, 521.0], [8.5, 521.0], [8.6, 523.0], [8.7, 524.0], [8.8, 525.0], [8.9, 527.0], [9.0, 528.0], [9.1, 529.0], [9.2, 530.0], [9.3, 530.0], [9.4, 531.0], [9.5, 533.0], [9.6, 535.0], [9.7, 536.0], [9.8, 538.0], [9.9, 539.0], [10.0, 540.0], [10.1, 541.0], [10.2, 542.0], [10.3, 542.0], [10.4, 543.0], [10.5, 545.0], [10.6, 546.0], [10.7, 549.0], [10.8, 549.0], [10.9, 551.0], [11.0, 552.0], [11.1, 553.0], [11.2, 553.0], [11.3, 554.0], [11.4, 555.0], [11.5, 556.0], [11.6, 557.0], [11.7, 558.0], [11.8, 558.0], [11.9, 560.0], [12.0, 561.0], [12.1, 563.0], [12.2, 563.0], [12.3, 565.0], [12.4, 566.0], [12.5, 568.0], [12.6, 569.0], [12.7, 570.0], [12.8, 571.0], [12.9, 571.0], [13.0, 572.0], [13.1, 574.0], [13.2, 575.0], [13.3, 577.0], [13.4, 579.0], [13.5, 580.0], [13.6, 580.0], [13.7, 581.0], [13.8, 582.0], [13.9, 583.0], [14.0, 584.0], [14.1, 585.0], [14.2, 587.0], [14.3, 588.0], [14.4, 589.0], [14.5, 589.0], [14.6, 590.0], [14.7, 592.0], [14.8, 592.0], [14.9, 593.0], [15.0, 595.0], [15.1, 597.0], [15.2, 597.0], [15.3, 598.0], [15.4, 598.0], [15.5, 599.0], [15.6, 600.0], [15.7, 601.0], [15.8, 602.0], [15.9, 603.0], [16.0, 604.0], [16.1, 605.0], [16.2, 606.0], [16.3, 608.0], [16.4, 609.0], [16.5, 610.0], [16.6, 611.0], [16.7, 612.0], [16.8, 614.0], [16.9, 615.0], [17.0, 615.0], [17.1, 617.0], [17.2, 618.0], [17.3, 620.0], [17.4, 620.0], [17.5, 621.0], [17.6, 622.0], [17.7, 623.0], [17.8, 624.0], [17.9, 625.0], [18.0, 626.0], [18.1, 627.0], [18.2, 627.0], [18.3, 629.0], [18.4, 631.0], [18.5, 632.0], [18.6, 632.0], [18.7, 634.0], [18.8, 635.0], [18.9, 636.0], [19.0, 637.0], [19.1, 638.0], [19.2, 639.0], [19.3, 640.0], [19.4, 642.0], [19.5, 642.0], [19.6, 643.0], [19.7, 643.0], [19.8, 644.0], [19.9, 644.0], [20.0, 646.0], [20.1, 646.0], [20.2, 647.0], [20.3, 648.0], [20.4, 649.0], [20.5, 650.0], [20.6, 653.0], [20.7, 653.0], [20.8, 654.0], [20.9, 655.0], [21.0, 657.0], [21.1, 657.0], [21.2, 658.0], [21.3, 660.0], [21.4, 662.0], [21.5, 663.0], [21.6, 663.0], [21.7, 665.0], [21.8, 667.0], [21.9, 668.0], [22.0, 669.0], [22.1, 671.0], [22.2, 672.0], [22.3, 673.0], [22.4, 674.0], [22.5, 675.0], [22.6, 676.0], [22.7, 677.0], [22.8, 678.0], [22.9, 681.0], [23.0, 682.0], [23.1, 684.0], [23.2, 685.0], [23.3, 686.0], [23.4, 687.0], [23.5, 688.0], [23.6, 690.0], [23.7, 691.0], [23.8, 692.0], [23.9, 694.0], [24.0, 694.0], [24.1, 696.0], [24.2, 697.0], [24.3, 697.0], [24.4, 698.0], [24.5, 699.0], [24.6, 700.0], [24.7, 702.0], [24.8, 703.0], [24.9, 703.0], [25.0, 705.0], [25.1, 707.0], [25.2, 708.0], [25.3, 709.0], [25.4, 709.0], [25.5, 710.0], [25.6, 711.0], [25.7, 713.0], [25.8, 713.0], [25.9, 714.0], [26.0, 716.0], [26.1, 717.0], [26.2, 718.0], [26.3, 718.0], [26.4, 719.0], [26.5, 721.0], [26.6, 721.0], [26.7, 722.0], [26.8, 723.0], [26.9, 724.0], [27.0, 725.0], [27.1, 726.0], [27.2, 728.0], [27.3, 730.0], [27.4, 731.0], [27.5, 733.0], [27.6, 734.0], [27.7, 735.0], [27.8, 735.0], [27.9, 736.0], [28.0, 738.0], [28.1, 738.0], [28.2, 740.0], [28.3, 741.0], [28.4, 742.0], [28.5, 742.0], [28.6, 743.0], [28.7, 744.0], [28.8, 746.0], [28.9, 747.0], [29.0, 749.0], [29.1, 750.0], [29.2, 752.0], [29.3, 753.0], [29.4, 755.0], [29.5, 755.0], [29.6, 756.0], [29.7, 757.0], [29.8, 759.0], [29.9, 759.0], [30.0, 761.0], [30.1, 762.0], [30.2, 765.0], [30.3, 766.0], [30.4, 768.0], [30.5, 770.0], [30.6, 771.0], [30.7, 772.0], [30.8, 772.0], [30.9, 773.0], [31.0, 775.0], [31.1, 776.0], [31.2, 777.0], [31.3, 778.0], [31.4, 781.0], [31.5, 782.0], [31.6, 783.0], [31.7, 785.0], [31.8, 786.0], [31.9, 787.0], [32.0, 788.0], [32.1, 789.0], [32.2, 791.0], [32.3, 792.0], [32.4, 793.0], [32.5, 795.0], [32.6, 796.0], [32.7, 797.0], [32.8, 801.0], [32.9, 801.0], [33.0, 804.0], [33.1, 805.0], [33.2, 806.0], [33.3, 807.0], [33.4, 807.0], [33.5, 808.0], [33.6, 810.0], [33.7, 811.0], [33.8, 813.0], [33.9, 813.0], [34.0, 815.0], [34.1, 816.0], [34.2, 817.0], [34.3, 818.0], [34.4, 820.0], [34.5, 820.0], [34.6, 823.0], [34.7, 824.0], [34.8, 825.0], [34.9, 827.0], [35.0, 828.0], [35.1, 830.0], [35.2, 831.0], [35.3, 832.0], [35.4, 833.0], [35.5, 836.0], [35.6, 837.0], [35.7, 839.0], [35.8, 840.0], [35.9, 841.0], [36.0, 843.0], [36.1, 845.0], [36.2, 846.0], [36.3, 847.0], [36.4, 848.0], [36.5, 850.0], [36.6, 851.0], [36.7, 853.0], [36.8, 856.0], [36.9, 857.0], [37.0, 858.0], [37.1, 860.0], [37.2, 861.0], [37.3, 862.0], [37.4, 864.0], [37.5, 865.0], [37.6, 867.0], [37.7, 869.0], [37.8, 870.0], [37.9, 871.0], [38.0, 872.0], [38.1, 874.0], [38.2, 875.0], [38.3, 876.0], [38.4, 877.0], [38.5, 878.0], [38.6, 880.0], [38.7, 881.0], [38.8, 882.0], [38.9, 884.0], [39.0, 884.0], [39.1, 886.0], [39.2, 888.0], [39.3, 889.0], [39.4, 890.0], [39.5, 891.0], [39.6, 893.0], [39.7, 895.0], [39.8, 896.0], [39.9, 897.0], [40.0, 899.0], [40.1, 899.0], [40.2, 900.0], [40.3, 903.0], [40.4, 904.0], [40.5, 906.0], [40.6, 907.0], [40.7, 908.0], [40.8, 910.0], [40.9, 910.0], [41.0, 911.0], [41.1, 912.0], [41.2, 914.0], [41.3, 916.0], [41.4, 917.0], [41.5, 919.0], [41.6, 920.0], [41.7, 921.0], [41.8, 922.0], [41.9, 923.0], [42.0, 925.0], [42.1, 926.0], [42.2, 928.0], [42.3, 929.0], [42.4, 930.0], [42.5, 931.0], [42.6, 932.0], [42.7, 934.0], [42.8, 936.0], [42.9, 937.0], [43.0, 939.0], [43.1, 942.0], [43.2, 942.0], [43.3, 943.0], [43.4, 946.0], [43.5, 948.0], [43.6, 949.0], [43.7, 950.0], [43.8, 951.0], [43.9, 953.0], [44.0, 955.0], [44.1, 956.0], [44.2, 957.0], [44.3, 960.0], [44.4, 961.0], [44.5, 963.0], [44.6, 964.0], [44.7, 965.0], [44.8, 966.0], [44.9, 968.0], [45.0, 970.0], [45.1, 971.0], [45.2, 973.0], [45.3, 974.0], [45.4, 976.0], [45.5, 978.0], [45.6, 979.0], [45.7, 981.0], [45.8, 983.0], [45.9, 984.0], [46.0, 985.0], [46.1, 988.0], [46.2, 989.0], [46.3, 990.0], [46.4, 991.0], [46.5, 992.0], [46.6, 996.0], [46.7, 997.0], [46.8, 997.0], [46.9, 999.0], [47.0, 1000.0], [47.1, 1000.0], [47.2, 1004.0], [47.3, 1007.0], [47.4, 1009.0], [47.5, 1009.0], [47.6, 1010.0], [47.7, 1013.0], [47.8, 1015.0], [47.9, 1016.0], [48.0, 1016.0], [48.1, 1019.0], [48.2, 1020.0], [48.3, 1021.0], [48.4, 1022.0], [48.5, 1023.0], [48.6, 1025.0], [48.7, 1026.0], [48.8, 1027.0], [48.9, 1028.0], [49.0, 1029.0], [49.1, 1031.0], [49.2, 1032.0], [49.3, 1034.0], [49.4, 1036.0], [49.5, 1037.0], [49.6, 1038.0], [49.7, 1039.0], [49.8, 1039.0], [49.9, 1040.0], [50.0, 1042.0], [50.1, 1043.0], [50.2, 1044.0], [50.3, 1046.0], [50.4, 1049.0], [50.5, 1050.0], [50.6, 1051.0], [50.7, 1053.0], [50.8, 1055.0], [50.9, 1057.0], [51.0, 1060.0], [51.1, 1061.0], [51.2, 1063.0], [51.3, 1065.0], [51.4, 1066.0], [51.5, 1067.0], [51.6, 1068.0], [51.7, 1069.0], [51.8, 1070.0], [51.9, 1071.0], [52.0, 1073.0], [52.1, 1074.0], [52.2, 1076.0], [52.3, 1077.0], [52.4, 1079.0], [52.5, 1079.0], [52.6, 1081.0], [52.7, 1083.0], [52.8, 1084.0], [52.9, 1086.0], [53.0, 1086.0], [53.1, 1089.0], [53.2, 1090.0], [53.3, 1091.0], [53.4, 1092.0], [53.5, 1093.0], [53.6, 1095.0], [53.7, 1096.0], [53.8, 1097.0], [53.9, 1099.0], [54.0, 1102.0], [54.1, 1103.0], [54.2, 1106.0], [54.3, 1108.0], [54.4, 1109.0], [54.5, 1111.0], [54.6, 1113.0], [54.7, 1115.0], [54.8, 1116.0], [54.9, 1117.0], [55.0, 1119.0], [55.1, 1120.0], [55.2, 1122.0], [55.3, 1123.0], [55.4, 1125.0], [55.5, 1127.0], [55.6, 1130.0], [55.7, 1131.0], [55.8, 1132.0], [55.9, 1134.0], [56.0, 1135.0], [56.1, 1137.0], [56.2, 1139.0], [56.3, 1141.0], [56.4, 1142.0], [56.5, 1143.0], [56.6, 1146.0], [56.7, 1149.0], [56.8, 1150.0], [56.9, 1151.0], [57.0, 1154.0], [57.1, 1156.0], [57.2, 1158.0], [57.3, 1159.0], [57.4, 1160.0], [57.5, 1161.0], [57.6, 1163.0], [57.7, 1164.0], [57.8, 1166.0], [57.9, 1168.0], [58.0, 1170.0], [58.1, 1172.0], [58.2, 1174.0], [58.3, 1175.0], [58.4, 1176.0], [58.5, 1178.0], [58.6, 1179.0], [58.7, 1181.0], [58.8, 1183.0], [58.9, 1184.0], [59.0, 1186.0], [59.1, 1189.0], [59.2, 1190.0], [59.3, 1191.0], [59.4, 1194.0], [59.5, 1196.0], [59.6, 1197.0], [59.7, 1200.0], [59.8, 1202.0], [59.9, 1203.0], [60.0, 1206.0], [60.1, 1207.0], [60.2, 1210.0], [60.3, 1212.0], [60.4, 1214.0], [60.5, 1216.0], [60.6, 1217.0], [60.7, 1218.0], [60.8, 1219.0], [60.9, 1220.0], [61.0, 1223.0], [61.1, 1224.0], [61.2, 1225.0], [61.3, 1228.0], [61.4, 1229.0], [61.5, 1230.0], [61.6, 1232.0], [61.7, 1234.0], [61.8, 1234.0], [61.9, 1235.0], [62.0, 1238.0], [62.1, 1239.0], [62.2, 1240.0], [62.3, 1242.0], [62.4, 1243.0], [62.5, 1245.0], [62.6, 1247.0], [62.7, 1248.0], [62.8, 1250.0], [62.9, 1254.0], [63.0, 1256.0], [63.1, 1259.0], [63.2, 1260.0], [63.3, 1261.0], [63.4, 1263.0], [63.5, 1264.0], [63.6, 1267.0], [63.7, 1268.0], [63.8, 1269.0], [63.9, 1271.0], [64.0, 1272.0], [64.1, 1274.0], [64.2, 1276.0], [64.3, 1276.0], [64.4, 1278.0], [64.5, 1281.0], [64.6, 1284.0], [64.7, 1285.0], [64.8, 1287.0], [64.9, 1290.0], [65.0, 1292.0], [65.1, 1293.0], [65.2, 1294.0], [65.3, 1297.0], [65.4, 1299.0], [65.5, 1300.0], [65.6, 1303.0], [65.7, 1304.0], [65.8, 1304.0], [65.9, 1305.0], [66.0, 1308.0], [66.1, 1309.0], [66.2, 1310.0], [66.3, 1312.0], [66.4, 1313.0], [66.5, 1315.0], [66.6, 1317.0], [66.7, 1318.0], [66.8, 1320.0], [66.9, 1321.0], [67.0, 1322.0], [67.1, 1326.0], [67.2, 1329.0], [67.3, 1330.0], [67.4, 1331.0], [67.5, 1333.0], [67.6, 1335.0], [67.7, 1336.0], [67.8, 1337.0], [67.9, 1339.0], [68.0, 1340.0], [68.1, 1341.0], [68.2, 1343.0], [68.3, 1345.0], [68.4, 1347.0], [68.5, 1350.0], [68.6, 1353.0], [68.7, 1356.0], [68.8, 1358.0], [68.9, 1360.0], [69.0, 1361.0], [69.1, 1363.0], [69.2, 1365.0], [69.3, 1367.0], [69.4, 1368.0], [69.5, 1370.0], [69.6, 1372.0], [69.7, 1375.0], [69.8, 1376.0], [69.9, 1378.0], [70.0, 1381.0], [70.1, 1382.0], [70.2, 1384.0], [70.3, 1385.0], [70.4, 1386.0], [70.5, 1387.0], [70.6, 1389.0], [70.7, 1393.0], [70.8, 1394.0], [70.9, 1398.0], [71.0, 1401.0], [71.1, 1404.0], [71.2, 1405.0], [71.3, 1407.0], [71.4, 1407.0], [71.5, 1410.0], [71.6, 1412.0], [71.7, 1415.0], [71.8, 1417.0], [71.9, 1419.0], [72.0, 1419.0], [72.1, 1421.0], [72.2, 1422.0], [72.3, 1424.0], [72.4, 1426.0], [72.5, 1429.0], [72.6, 1429.0], [72.7, 1431.0], [72.8, 1433.0], [72.9, 1436.0], [73.0, 1437.0], [73.1, 1439.0], [73.2, 1441.0], [73.3, 1443.0], [73.4, 1444.0], [73.5, 1445.0], [73.6, 1446.0], [73.7, 1447.0], [73.8, 1449.0], [73.9, 1451.0], [74.0, 1453.0], [74.1, 1455.0], [74.2, 1456.0], [74.3, 1458.0], [74.4, 1460.0], [74.5, 1462.0], [74.6, 1463.0], [74.7, 1466.0], [74.8, 1468.0], [74.9, 1469.0], [75.0, 1470.0], [75.1, 1472.0], [75.2, 1475.0], [75.3, 1476.0], [75.4, 1479.0], [75.5, 1479.0], [75.6, 1481.0], [75.7, 1482.0], [75.8, 1485.0], [75.9, 1486.0], [76.0, 1487.0], [76.1, 1488.0], [76.2, 1490.0], [76.3, 1491.0], [76.4, 1494.0], [76.5, 1494.0], [76.6, 1497.0], [76.7, 1499.0], [76.8, 1500.0], [76.9, 1503.0], [77.0, 1507.0], [77.1, 1509.0], [77.2, 1510.0], [77.3, 1513.0], [77.4, 1515.0], [77.5, 1517.0], [77.6, 1519.0], [77.7, 1522.0], [77.8, 1525.0], [77.9, 1527.0], [78.0, 1528.0], [78.1, 1529.0], [78.2, 1531.0], [78.3, 1532.0], [78.4, 1536.0], [78.5, 1540.0], [78.6, 1541.0], [78.7, 1544.0], [78.8, 1546.0], [78.9, 1547.0], [79.0, 1549.0], [79.1, 1552.0], [79.2, 1555.0], [79.3, 1558.0], [79.4, 1559.0], [79.5, 1562.0], [79.6, 1565.0], [79.7, 1568.0], [79.8, 1571.0], [79.9, 1573.0], [80.0, 1576.0], [80.1, 1578.0], [80.2, 1580.0], [80.3, 1584.0], [80.4, 1586.0], [80.5, 1588.0], [80.6, 1591.0], [80.7, 1593.0], [80.8, 1594.0], [80.9, 1595.0], [81.0, 1597.0], [81.1, 1598.0], [81.2, 1602.0], [81.3, 1604.0], [81.4, 1607.0], [81.5, 1609.0], [81.6, 1611.0], [81.7, 1616.0], [81.8, 1618.0], [81.9, 1624.0], [82.0, 1625.0], [82.1, 1627.0], [82.2, 1633.0], [82.3, 1638.0], [82.4, 1640.0], [82.5, 1641.0], [82.6, 1642.0], [82.7, 1644.0], [82.8, 1649.0], [82.9, 1652.0], [83.0, 1654.0], [83.1, 1656.0], [83.2, 1659.0], [83.3, 1660.0], [83.4, 1664.0], [83.5, 1668.0], [83.6, 1671.0], [83.7, 1675.0], [83.8, 1678.0], [83.9, 1682.0], [84.0, 1686.0], [84.1, 1688.0], [84.2, 1692.0], [84.3, 1697.0], [84.4, 1700.0], [84.5, 1704.0], [84.6, 1706.0], [84.7, 1711.0], [84.8, 1712.0], [84.9, 1714.0], [85.0, 1719.0], [85.1, 1723.0], [85.2, 1725.0], [85.3, 1730.0], [85.4, 1734.0], [85.5, 1737.0], [85.6, 1744.0], [85.7, 1746.0], [85.8, 1751.0], [85.9, 1758.0], [86.0, 1768.0], [86.1, 1771.0], [86.2, 1775.0], [86.3, 1778.0], [86.4, 1784.0], [86.5, 1788.0], [86.6, 1791.0], [86.7, 1797.0], [86.8, 1801.0], [86.9, 1804.0], [87.0, 1806.0], [87.1, 1808.0], [87.2, 1813.0], [87.3, 1823.0], [87.4, 1826.0], [87.5, 1834.0], [87.6, 1839.0], [87.7, 1842.0], [87.8, 1850.0], [87.9, 1855.0], [88.0, 1860.0], [88.1, 1865.0], [88.2, 1874.0], [88.3, 1879.0], [88.4, 1885.0], [88.5, 1888.0], [88.6, 1891.0], [88.7, 1892.0], [88.8, 1902.0], [88.9, 1906.0], [89.0, 1911.0], [89.1, 1919.0], [89.2, 1923.0], [89.3, 1929.0], [89.4, 1934.0], [89.5, 1940.0], [89.6, 1947.0], [89.7, 1951.0], [89.8, 1959.0], [89.9, 1963.0], [90.0, 1968.0], [90.1, 1975.0], [90.2, 1986.0], [90.3, 1992.0], [90.4, 1999.0], [90.5, 2006.0], [90.6, 2014.0], [90.7, 2020.0], [90.8, 2024.0], [90.9, 2030.0], [91.0, 2036.0], [91.1, 2044.0], [91.2, 2058.0], [91.3, 2063.0], [91.4, 2069.0], [91.5, 2076.0], [91.6, 2084.0], [91.7, 2096.0], [91.8, 2104.0], [91.9, 2110.0], [92.0, 2124.0], [92.1, 2129.0], [92.2, 2134.0], [92.3, 2143.0], [92.4, 2153.0], [92.5, 2155.0], [92.6, 2163.0], [92.7, 2174.0], [92.8, 2189.0], [92.9, 2193.0], [93.0, 2198.0], [93.1, 2205.0], [93.2, 2219.0], [93.3, 2227.0], [93.4, 2234.0], [93.5, 2239.0], [93.6, 2253.0], [93.7, 2258.0], [93.8, 2263.0], [93.9, 2271.0], [94.0, 2276.0], [94.1, 2280.0], [94.2, 2290.0], [94.3, 2302.0], [94.4, 2305.0], [94.5, 2313.0], [94.6, 2326.0], [94.7, 2333.0], [94.8, 2344.0], [94.9, 2353.0], [95.0, 2361.0], [95.1, 2366.0], [95.2, 2372.0], [95.3, 2383.0], [95.4, 2392.0], [95.5, 2413.0], [95.6, 2425.0], [95.7, 2446.0], [95.8, 2457.0], [95.9, 2472.0], [96.0, 2475.0], [96.1, 2499.0], [96.2, 2509.0], [96.3, 2523.0], [96.4, 2533.0], [96.5, 2576.0], [96.6, 2608.0], [96.7, 2656.0], [96.8, 2681.0], [96.9, 2702.0], [97.0, 2733.0], [97.1, 2758.0], [97.2, 2774.0], [97.3, 2799.0], [97.4, 2836.0], [97.5, 2879.0], [97.6, 2920.0], [97.7, 2946.0], [97.8, 2990.0], [97.9, 3019.0], [98.0, 3067.0], [98.1, 3108.0], [98.2, 3164.0], [98.3, 3226.0], [98.4, 3267.0], [98.5, 3383.0], [98.6, 3478.0], [98.7, 3515.0], [98.8, 3559.0], [98.9, 3599.0], [99.0, 3685.0], [99.1, 3773.0], [99.2, 3857.0], [99.3, 3969.0], [99.4, 4041.0], [99.5, 4290.0], [99.6, 4729.0], [99.7, 5038.0], [99.8, 5341.0], [99.9, 5748.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 467.0, "series": [{"data": [[600.0, 467.0], [700.0, 426.0], [800.0, 385.0], [900.0, 355.0], [1000.0, 359.0], [1100.0, 301.0], [1200.0, 297.0], [1300.0, 285.0], [1400.0, 301.0], [1500.0, 230.0], [1600.0, 168.0], [1700.0, 121.0], [1800.0, 107.0], [1900.0, 86.0], [2000.0, 70.0], [2100.0, 65.0], [2200.0, 64.0], [2300.0, 60.0], [2400.0, 36.0], [2500.0, 24.0], [2600.0, 17.0], [2800.0, 14.0], [2700.0, 21.0], [2900.0, 15.0], [3000.0, 12.0], [3100.0, 8.0], [3200.0, 8.0], [3300.0, 7.0], [3400.0, 4.0], [3500.0, 15.0], [3700.0, 5.0], [3600.0, 6.0], [3800.0, 7.0], [3900.0, 6.0], [4000.0, 3.0], [4300.0, 2.0], [4100.0, 3.0], [4200.0, 2.0], [4600.0, 2.0], [4800.0, 2.0], [4700.0, 1.0], [4900.0, 2.0], [5100.0, 1.0], [5000.0, 1.0], [5300.0, 2.0], [5200.0, 2.0], [5400.0, 1.0], [5600.0, 1.0], [5500.0, 2.0], [5700.0, 2.0], [6000.0, 1.0], [6500.0, 2.0], [6400.0, 1.0], [200.0, 10.0], [300.0, 12.0], [400.0, 326.0], [500.0, 458.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 46.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3598.0, "series": [{"data": [[0.0, 354.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3598.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1193.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 46.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 39.59062170706006, "minX": 1.6018977E12, "maxY": 40.0, "series": [{"data": [[1.6018977E12, 40.0], [1.60189782E12, 39.59062170706006], [1.60189776E12, 40.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189782E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 698.0, "minX": 1.0, "maxY": 3857.0, "series": [{"data": [[33.0, 2255.0], [32.0, 916.0], [2.0, 1903.0], [35.0, 2379.0], [34.0, 1164.0], [37.0, 1929.0], [36.0, 1469.0], [39.0, 1344.5], [40.0, 1181.432259316771], [3.0, 1387.0], [4.0, 1334.0], [5.0, 2007.0], [6.0, 2896.0], [7.0, 1137.0], [8.0, 2006.0], [10.0, 2041.0], [11.0, 1952.0], [12.0, 906.0], [13.0, 1122.0], [14.0, 1228.0], [15.0, 1169.0], [16.0, 1065.0], [1.0, 2617.0], [17.0, 1068.0], [18.0, 1389.0], [19.0, 698.0], [20.0, 1611.0], [21.0, 2271.0], [22.0, 3540.0], [24.0, 2512.5], [25.0, 1999.0], [26.0, 797.0], [27.0, 2143.0], [28.0, 795.0], [29.0, 899.0], [30.0, 2956.0], [31.0, 3857.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.85031785783087, 1185.7828934694671]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9446.583333333334, "minX": 1.6018977E12, "maxY": 9647266.5, "series": [{"data": [[1.6018977E12, 5895124.0], [1.60189782E12, 8234347.05], [1.60189776E12, 9647266.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6018977E12, 9446.583333333334], [1.60189782E12, 14236.183333333332], [1.60189776E12, 14901.283333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189782E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1128.6401475237099, "minX": 1.6018977E12, "maxY": 1260.734520123839, "series": [{"data": [[1.6018977E12, 1260.734520123839], [1.60189782E12, 1128.6401475237099], [1.60189776E12, 1191.5897051474253]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189782E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1126.9404636459446, "minX": 1.6018977E12, "maxY": 1258.8266253869963, "series": [{"data": [[1.6018977E12, 1258.8266253869963], [1.60189782E12, 1126.9404636459446], [1.60189776E12, 1189.6456771614178]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189782E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.017913593256059006, "minX": 1.6018977E12, "maxY": 0.4852941176470599, "series": [{"data": [[1.6018977E12, 0.4852941176470599], [1.60189782E12, 0.017913593256059006], [1.60189776E12, 0.020489755122438787]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189782E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 203.0, "minX": 1.6018977E12, "maxY": 6540.0, "series": [{"data": [[1.6018977E12, 6059.0], [1.60189782E12, 4955.0], [1.60189776E12, 6540.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6018977E12, 419.0], [1.60189782E12, 415.9559995508194], [1.60189776E12, 409.846999527216]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6018977E12, 419.0], [1.60189782E12, 418.0], [1.60189776E12, 411.26340037822723]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6018977E12, 419.0], [1.60189782E12, 417.7959995508194], [1.60189776E12, 410.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6018977E12, 387.0], [1.60189782E12, 300.0], [1.60189776E12, 203.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6018977E12, 1045.5], [1.60189782E12, 1000.0], [1.60189776E12, 1073.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189782E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 485.0, "minX": 1.0, "maxY": 2812.0, "series": [{"data": [[32.0, 1040.0], [33.0, 1122.0], [35.0, 1215.0], [34.0, 1129.5], [37.0, 1034.5], [36.0, 974.0], [38.0, 1207.0], [39.0, 910.0], [40.0, 894.0], [41.0, 731.0], [43.0, 890.0], [42.0, 914.5], [45.0, 803.0], [44.0, 720.0], [47.0, 740.0], [46.0, 1176.5], [48.0, 1012.0], [49.0, 676.0], [3.0, 1387.0], [50.0, 631.5], [52.0, 660.0], [54.0, 893.5], [56.0, 556.0], [58.0, 615.5], [65.0, 494.0], [68.0, 516.5], [70.0, 485.0], [16.0, 1688.5], [1.0, 2617.0], [18.0, 1156.0], [19.0, 1795.0], [20.0, 1393.5], [21.0, 1261.0], [23.0, 1350.5], [24.0, 1371.0], [25.0, 1539.5], [26.0, 1356.0], [27.0, 1259.0], [28.0, 1087.0], [29.0, 1164.0], [30.0, 1188.0], [31.0, 1096.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 644.0], [33.0, 1526.5], [34.0, 1261.0], [35.0, 1331.0], [36.0, 611.0], [37.0, 870.0], [38.0, 929.0], [41.0, 502.0], [40.0, 560.0], [45.0, 826.0], [48.0, 1060.0], [50.0, 711.0], [65.0, 550.0], [18.0, 1855.0], [19.0, 942.0], [21.0, 1618.0], [24.0, 2211.0], [27.0, 2812.0], [29.0, 1021.0], [30.0, 908.0], [31.0, 1476.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 485.0, "minX": 1.0, "maxY": 2812.0, "series": [{"data": [[32.0, 1040.0], [33.0, 1122.0], [35.0, 1212.0], [34.0, 1129.5], [37.0, 1034.5], [36.0, 973.0], [38.0, 1207.0], [39.0, 908.0], [40.0, 894.0], [41.0, 730.5], [43.0, 890.0], [42.0, 914.0], [45.0, 802.0], [44.0, 718.0], [47.0, 740.0], [46.0, 1175.0], [48.0, 1010.0], [49.0, 675.0], [3.0, 1387.0], [50.0, 630.5], [52.0, 660.0], [54.0, 893.5], [56.0, 556.0], [58.0, 615.5], [65.0, 494.0], [68.0, 516.5], [70.0, 485.0], [16.0, 1685.0], [1.0, 2601.0], [18.0, 1155.0], [19.0, 1794.5], [20.0, 1392.5], [21.0, 1259.0], [23.0, 1349.0], [24.0, 1368.0], [25.0, 1535.5], [26.0, 1351.0], [27.0, 1253.5], [28.0, 1086.0], [29.0, 1163.0], [30.0, 1185.0], [31.0, 1095.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 644.0], [33.0, 1526.5], [34.0, 1261.0], [35.0, 1330.0], [36.0, 611.0], [37.0, 870.0], [38.0, 929.0], [41.0, 502.0], [40.0, 560.0], [45.0, 826.0], [48.0, 1060.0], [50.0, 711.0], [65.0, 550.0], [18.0, 1855.0], [19.0, 942.0], [21.0, 1618.0], [24.0, 2211.0], [27.0, 2812.0], [29.0, 1021.0], [30.0, 908.0], [31.0, 1476.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 22.2, "minX": 1.6018977E12, "maxY": 33.35, "series": [{"data": [[1.6018977E12, 22.2], [1.60189782E12, 30.966666666666665], [1.60189776E12, 33.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189782E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6018977E12, "maxY": 33.03333333333333, "series": [{"data": [[1.6018977E12, 21.333333333333332], [1.60189782E12, 31.383333333333333], [1.60189776E12, 33.03333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60189776E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.6018977E12, 0.2], [1.60189782E12, 0.25], [1.60189776E12, 0.3]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189782E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.6018977E12, "maxY": 33.03333333333333, "series": [{"data": [[1.6018977E12, 21.333333333333332], [1.60189782E12, 31.383333333333333], [1.60189776E12, 33.03333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6018977E12, 0.2], [1.60189782E12, 0.25], [1.60189776E12, 0.31666666666666665]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189782E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.6018977E12, "maxY": 33.03333333333333, "series": [{"data": [[1.6018977E12, 21.333333333333332], [1.60189782E12, 31.383333333333333], [1.60189776E12, 33.03333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6018977E12, 0.2], [1.60189782E12, 0.25], [1.60189776E12, 0.31666666666666665]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189782E12, "title": "Total Transactions Per Second"}},
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

