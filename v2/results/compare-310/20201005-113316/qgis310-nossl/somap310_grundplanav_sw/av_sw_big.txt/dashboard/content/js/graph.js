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
        data: {"result": {"minY": 223.0, "minX": 0.0, "maxY": 7059.0, "series": [{"data": [[0.0, 223.0], [0.1, 275.0], [0.2, 316.0], [0.3, 344.0], [0.4, 394.0], [0.5, 405.0], [0.6, 413.0], [0.7, 416.0], [0.8, 423.0], [0.9, 424.0], [1.0, 427.0], [1.1, 429.0], [1.2, 432.0], [1.3, 433.0], [1.4, 434.0], [1.5, 436.0], [1.6, 440.0], [1.7, 441.0], [1.8, 443.0], [1.9, 443.0], [2.0, 445.0], [2.1, 447.0], [2.2, 448.0], [2.3, 449.0], [2.4, 451.0], [2.5, 451.0], [2.6, 451.0], [2.7, 454.0], [2.8, 455.0], [2.9, 456.0], [3.0, 458.0], [3.1, 459.0], [3.2, 461.0], [3.3, 463.0], [3.4, 465.0], [3.5, 468.0], [3.6, 469.0], [3.7, 471.0], [3.8, 473.0], [3.9, 474.0], [4.0, 476.0], [4.1, 478.0], [4.2, 478.0], [4.3, 479.0], [4.4, 480.0], [4.5, 481.0], [4.6, 483.0], [4.7, 485.0], [4.8, 486.0], [4.9, 487.0], [5.0, 488.0], [5.1, 489.0], [5.2, 490.0], [5.3, 491.0], [5.4, 493.0], [5.5, 494.0], [5.6, 496.0], [5.7, 496.0], [5.8, 498.0], [5.9, 499.0], [6.0, 500.0], [6.1, 501.0], [6.2, 503.0], [6.3, 505.0], [6.4, 507.0], [6.5, 507.0], [6.6, 508.0], [6.7, 509.0], [6.8, 510.0], [6.9, 512.0], [7.0, 512.0], [7.1, 514.0], [7.2, 514.0], [7.3, 516.0], [7.4, 518.0], [7.5, 519.0], [7.6, 520.0], [7.7, 522.0], [7.8, 523.0], [7.9, 524.0], [8.0, 525.0], [8.1, 526.0], [8.2, 527.0], [8.3, 528.0], [8.4, 530.0], [8.5, 531.0], [8.6, 533.0], [8.7, 533.0], [8.8, 535.0], [8.9, 535.0], [9.0, 536.0], [9.1, 537.0], [9.2, 538.0], [9.3, 539.0], [9.4, 540.0], [9.5, 542.0], [9.6, 543.0], [9.7, 543.0], [9.8, 544.0], [9.9, 544.0], [10.0, 546.0], [10.1, 547.0], [10.2, 548.0], [10.3, 549.0], [10.4, 551.0], [10.5, 552.0], [10.6, 553.0], [10.7, 554.0], [10.8, 557.0], [10.9, 557.0], [11.0, 558.0], [11.1, 560.0], [11.2, 560.0], [11.3, 561.0], [11.4, 562.0], [11.5, 563.0], [11.6, 563.0], [11.7, 564.0], [11.8, 564.0], [11.9, 566.0], [12.0, 567.0], [12.1, 568.0], [12.2, 568.0], [12.3, 569.0], [12.4, 570.0], [12.5, 571.0], [12.6, 571.0], [12.7, 573.0], [12.8, 573.0], [12.9, 574.0], [13.0, 576.0], [13.1, 577.0], [13.2, 578.0], [13.3, 580.0], [13.4, 580.0], [13.5, 581.0], [13.6, 582.0], [13.7, 583.0], [13.8, 584.0], [13.9, 585.0], [14.0, 586.0], [14.1, 587.0], [14.2, 588.0], [14.3, 589.0], [14.4, 591.0], [14.5, 592.0], [14.6, 593.0], [14.7, 594.0], [14.8, 595.0], [14.9, 597.0], [15.0, 597.0], [15.1, 598.0], [15.2, 599.0], [15.3, 600.0], [15.4, 601.0], [15.5, 602.0], [15.6, 603.0], [15.7, 604.0], [15.8, 605.0], [15.9, 606.0], [16.0, 607.0], [16.1, 608.0], [16.2, 609.0], [16.3, 610.0], [16.4, 611.0], [16.5, 611.0], [16.6, 613.0], [16.7, 614.0], [16.8, 615.0], [16.9, 616.0], [17.0, 618.0], [17.1, 618.0], [17.2, 619.0], [17.3, 621.0], [17.4, 621.0], [17.5, 622.0], [17.6, 623.0], [17.7, 623.0], [17.8, 624.0], [17.9, 625.0], [18.0, 626.0], [18.1, 627.0], [18.2, 627.0], [18.3, 628.0], [18.4, 629.0], [18.5, 630.0], [18.6, 631.0], [18.7, 632.0], [18.8, 633.0], [18.9, 633.0], [19.0, 634.0], [19.1, 635.0], [19.2, 636.0], [19.3, 638.0], [19.4, 638.0], [19.5, 639.0], [19.6, 641.0], [19.7, 642.0], [19.8, 643.0], [19.9, 644.0], [20.0, 645.0], [20.1, 646.0], [20.2, 648.0], [20.3, 649.0], [20.4, 650.0], [20.5, 651.0], [20.6, 652.0], [20.7, 653.0], [20.8, 653.0], [20.9, 654.0], [21.0, 655.0], [21.1, 656.0], [21.2, 657.0], [21.3, 658.0], [21.4, 660.0], [21.5, 662.0], [21.6, 663.0], [21.7, 664.0], [21.8, 665.0], [21.9, 667.0], [22.0, 667.0], [22.1, 668.0], [22.2, 670.0], [22.3, 671.0], [22.4, 672.0], [22.5, 674.0], [22.6, 676.0], [22.7, 677.0], [22.8, 678.0], [22.9, 679.0], [23.0, 680.0], [23.1, 681.0], [23.2, 682.0], [23.3, 684.0], [23.4, 685.0], [23.5, 687.0], [23.6, 689.0], [23.7, 691.0], [23.8, 692.0], [23.9, 693.0], [24.0, 694.0], [24.1, 696.0], [24.2, 696.0], [24.3, 697.0], [24.4, 698.0], [24.5, 699.0], [24.6, 700.0], [24.7, 701.0], [24.8, 701.0], [24.9, 703.0], [25.0, 705.0], [25.1, 706.0], [25.2, 707.0], [25.3, 708.0], [25.4, 708.0], [25.5, 710.0], [25.6, 711.0], [25.7, 712.0], [25.8, 713.0], [25.9, 714.0], [26.0, 715.0], [26.1, 717.0], [26.2, 718.0], [26.3, 718.0], [26.4, 719.0], [26.5, 720.0], [26.6, 721.0], [26.7, 723.0], [26.8, 724.0], [26.9, 726.0], [27.0, 727.0], [27.1, 728.0], [27.2, 729.0], [27.3, 730.0], [27.4, 731.0], [27.5, 732.0], [27.6, 734.0], [27.7, 735.0], [27.8, 737.0], [27.9, 738.0], [28.0, 739.0], [28.1, 740.0], [28.2, 741.0], [28.3, 742.0], [28.4, 745.0], [28.5, 745.0], [28.6, 746.0], [28.7, 747.0], [28.8, 749.0], [28.9, 749.0], [29.0, 750.0], [29.1, 751.0], [29.2, 751.0], [29.3, 753.0], [29.4, 754.0], [29.5, 755.0], [29.6, 756.0], [29.7, 757.0], [29.8, 757.0], [29.9, 760.0], [30.0, 760.0], [30.1, 761.0], [30.2, 762.0], [30.3, 763.0], [30.4, 763.0], [30.5, 764.0], [30.6, 764.0], [30.7, 765.0], [30.8, 766.0], [30.9, 767.0], [31.0, 768.0], [31.1, 769.0], [31.2, 770.0], [31.3, 772.0], [31.4, 773.0], [31.5, 774.0], [31.6, 775.0], [31.7, 776.0], [31.8, 777.0], [31.9, 778.0], [32.0, 780.0], [32.1, 781.0], [32.2, 782.0], [32.3, 784.0], [32.4, 785.0], [32.5, 786.0], [32.6, 786.0], [32.7, 787.0], [32.8, 788.0], [32.9, 790.0], [33.0, 792.0], [33.1, 793.0], [33.2, 794.0], [33.3, 796.0], [33.4, 797.0], [33.5, 799.0], [33.6, 800.0], [33.7, 803.0], [33.8, 804.0], [33.9, 805.0], [34.0, 807.0], [34.1, 808.0], [34.2, 810.0], [34.3, 812.0], [34.4, 814.0], [34.5, 814.0], [34.6, 817.0], [34.7, 819.0], [34.8, 820.0], [34.9, 822.0], [35.0, 823.0], [35.1, 824.0], [35.2, 826.0], [35.3, 827.0], [35.4, 827.0], [35.5, 829.0], [35.6, 831.0], [35.7, 833.0], [35.8, 834.0], [35.9, 835.0], [36.0, 837.0], [36.1, 838.0], [36.2, 840.0], [36.3, 841.0], [36.4, 842.0], [36.5, 843.0], [36.6, 844.0], [36.7, 846.0], [36.8, 847.0], [36.9, 849.0], [37.0, 850.0], [37.1, 852.0], [37.2, 853.0], [37.3, 854.0], [37.4, 855.0], [37.5, 856.0], [37.6, 857.0], [37.7, 858.0], [37.8, 859.0], [37.9, 860.0], [38.0, 861.0], [38.1, 863.0], [38.2, 864.0], [38.3, 866.0], [38.4, 867.0], [38.5, 868.0], [38.6, 870.0], [38.7, 871.0], [38.8, 873.0], [38.9, 876.0], [39.0, 877.0], [39.1, 878.0], [39.2, 879.0], [39.3, 881.0], [39.4, 882.0], [39.5, 885.0], [39.6, 887.0], [39.7, 888.0], [39.8, 889.0], [39.9, 889.0], [40.0, 889.0], [40.1, 891.0], [40.2, 894.0], [40.3, 895.0], [40.4, 897.0], [40.5, 899.0], [40.6, 901.0], [40.7, 902.0], [40.8, 903.0], [40.9, 904.0], [41.0, 906.0], [41.1, 908.0], [41.2, 909.0], [41.3, 912.0], [41.4, 914.0], [41.5, 916.0], [41.6, 917.0], [41.7, 918.0], [41.8, 920.0], [41.9, 921.0], [42.0, 923.0], [42.1, 924.0], [42.2, 927.0], [42.3, 929.0], [42.4, 930.0], [42.5, 932.0], [42.6, 932.0], [42.7, 935.0], [42.8, 936.0], [42.9, 937.0], [43.0, 938.0], [43.1, 939.0], [43.2, 941.0], [43.3, 941.0], [43.4, 944.0], [43.5, 946.0], [43.6, 948.0], [43.7, 949.0], [43.8, 951.0], [43.9, 953.0], [44.0, 954.0], [44.1, 956.0], [44.2, 957.0], [44.3, 957.0], [44.4, 958.0], [44.5, 961.0], [44.6, 961.0], [44.7, 963.0], [44.8, 965.0], [44.9, 966.0], [45.0, 967.0], [45.1, 968.0], [45.2, 970.0], [45.3, 971.0], [45.4, 972.0], [45.5, 973.0], [45.6, 974.0], [45.7, 975.0], [45.8, 977.0], [45.9, 978.0], [46.0, 979.0], [46.1, 981.0], [46.2, 982.0], [46.3, 983.0], [46.4, 984.0], [46.5, 985.0], [46.6, 987.0], [46.7, 988.0], [46.8, 989.0], [46.9, 992.0], [47.0, 993.0], [47.1, 994.0], [47.2, 996.0], [47.3, 997.0], [47.4, 998.0], [47.5, 1000.0], [47.6, 1002.0], [47.7, 1003.0], [47.8, 1005.0], [47.9, 1007.0], [48.0, 1008.0], [48.1, 1009.0], [48.2, 1011.0], [48.3, 1012.0], [48.4, 1013.0], [48.5, 1014.0], [48.6, 1016.0], [48.7, 1018.0], [48.8, 1018.0], [48.9, 1019.0], [49.0, 1020.0], [49.1, 1021.0], [49.2, 1023.0], [49.3, 1025.0], [49.4, 1027.0], [49.5, 1028.0], [49.6, 1028.0], [49.7, 1029.0], [49.8, 1030.0], [49.9, 1032.0], [50.0, 1034.0], [50.1, 1035.0], [50.2, 1036.0], [50.3, 1038.0], [50.4, 1039.0], [50.5, 1040.0], [50.6, 1041.0], [50.7, 1042.0], [50.8, 1043.0], [50.9, 1044.0], [51.0, 1046.0], [51.1, 1048.0], [51.2, 1049.0], [51.3, 1050.0], [51.4, 1054.0], [51.5, 1055.0], [51.6, 1057.0], [51.7, 1058.0], [51.8, 1059.0], [51.9, 1060.0], [52.0, 1062.0], [52.1, 1063.0], [52.2, 1064.0], [52.3, 1065.0], [52.4, 1069.0], [52.5, 1071.0], [52.6, 1073.0], [52.7, 1075.0], [52.8, 1077.0], [52.9, 1078.0], [53.0, 1079.0], [53.1, 1080.0], [53.2, 1082.0], [53.3, 1083.0], [53.4, 1084.0], [53.5, 1088.0], [53.6, 1091.0], [53.7, 1093.0], [53.8, 1095.0], [53.9, 1096.0], [54.0, 1097.0], [54.1, 1098.0], [54.2, 1099.0], [54.3, 1101.0], [54.4, 1103.0], [54.5, 1105.0], [54.6, 1106.0], [54.7, 1108.0], [54.8, 1111.0], [54.9, 1111.0], [55.0, 1112.0], [55.1, 1113.0], [55.2, 1114.0], [55.3, 1115.0], [55.4, 1117.0], [55.5, 1119.0], [55.6, 1121.0], [55.7, 1124.0], [55.8, 1125.0], [55.9, 1126.0], [56.0, 1128.0], [56.1, 1130.0], [56.2, 1132.0], [56.3, 1134.0], [56.4, 1136.0], [56.5, 1138.0], [56.6, 1139.0], [56.7, 1141.0], [56.8, 1141.0], [56.9, 1142.0], [57.0, 1144.0], [57.1, 1145.0], [57.2, 1146.0], [57.3, 1148.0], [57.4, 1149.0], [57.5, 1150.0], [57.6, 1151.0], [57.7, 1155.0], [57.8, 1155.0], [57.9, 1157.0], [58.0, 1158.0], [58.1, 1159.0], [58.2, 1160.0], [58.3, 1162.0], [58.4, 1166.0], [58.5, 1167.0], [58.6, 1168.0], [58.7, 1169.0], [58.8, 1171.0], [58.9, 1172.0], [59.0, 1174.0], [59.1, 1177.0], [59.2, 1178.0], [59.3, 1181.0], [59.4, 1182.0], [59.5, 1183.0], [59.6, 1184.0], [59.7, 1187.0], [59.8, 1188.0], [59.9, 1190.0], [60.0, 1192.0], [60.1, 1194.0], [60.2, 1194.0], [60.3, 1197.0], [60.4, 1197.0], [60.5, 1198.0], [60.6, 1200.0], [60.7, 1201.0], [60.8, 1204.0], [60.9, 1206.0], [61.0, 1211.0], [61.1, 1213.0], [61.2, 1214.0], [61.3, 1217.0], [61.4, 1218.0], [61.5, 1219.0], [61.6, 1221.0], [61.7, 1223.0], [61.8, 1225.0], [61.9, 1228.0], [62.0, 1230.0], [62.1, 1230.0], [62.2, 1233.0], [62.3, 1235.0], [62.4, 1236.0], [62.5, 1238.0], [62.6, 1242.0], [62.7, 1243.0], [62.8, 1245.0], [62.9, 1245.0], [63.0, 1249.0], [63.1, 1249.0], [63.2, 1251.0], [63.3, 1252.0], [63.4, 1254.0], [63.5, 1256.0], [63.6, 1257.0], [63.7, 1259.0], [63.8, 1260.0], [63.9, 1262.0], [64.0, 1264.0], [64.1, 1266.0], [64.2, 1267.0], [64.3, 1269.0], [64.4, 1271.0], [64.5, 1272.0], [64.6, 1273.0], [64.7, 1277.0], [64.8, 1280.0], [64.9, 1281.0], [65.0, 1283.0], [65.1, 1284.0], [65.2, 1286.0], [65.3, 1289.0], [65.4, 1290.0], [65.5, 1292.0], [65.6, 1295.0], [65.7, 1298.0], [65.8, 1300.0], [65.9, 1302.0], [66.0, 1303.0], [66.1, 1306.0], [66.2, 1308.0], [66.3, 1310.0], [66.4, 1312.0], [66.5, 1313.0], [66.6, 1315.0], [66.7, 1316.0], [66.8, 1318.0], [66.9, 1320.0], [67.0, 1321.0], [67.1, 1323.0], [67.2, 1324.0], [67.3, 1325.0], [67.4, 1327.0], [67.5, 1329.0], [67.6, 1331.0], [67.7, 1333.0], [67.8, 1336.0], [67.9, 1337.0], [68.0, 1339.0], [68.1, 1343.0], [68.2, 1345.0], [68.3, 1347.0], [68.4, 1348.0], [68.5, 1351.0], [68.6, 1352.0], [68.7, 1353.0], [68.8, 1355.0], [68.9, 1358.0], [69.0, 1359.0], [69.1, 1361.0], [69.2, 1364.0], [69.3, 1365.0], [69.4, 1366.0], [69.5, 1368.0], [69.6, 1371.0], [69.7, 1373.0], [69.8, 1374.0], [69.9, 1376.0], [70.0, 1379.0], [70.1, 1380.0], [70.2, 1383.0], [70.3, 1385.0], [70.4, 1388.0], [70.5, 1391.0], [70.6, 1393.0], [70.7, 1396.0], [70.8, 1397.0], [70.9, 1400.0], [71.0, 1401.0], [71.1, 1403.0], [71.2, 1405.0], [71.3, 1409.0], [71.4, 1410.0], [71.5, 1412.0], [71.6, 1414.0], [71.7, 1417.0], [71.8, 1419.0], [71.9, 1422.0], [72.0, 1424.0], [72.1, 1425.0], [72.2, 1427.0], [72.3, 1430.0], [72.4, 1431.0], [72.5, 1434.0], [72.6, 1435.0], [72.7, 1436.0], [72.8, 1439.0], [72.9, 1442.0], [73.0, 1443.0], [73.1, 1444.0], [73.2, 1447.0], [73.3, 1450.0], [73.4, 1451.0], [73.5, 1455.0], [73.6, 1456.0], [73.7, 1458.0], [73.8, 1459.0], [73.9, 1464.0], [74.0, 1465.0], [74.1, 1467.0], [74.2, 1469.0], [74.3, 1473.0], [74.4, 1476.0], [74.5, 1478.0], [74.6, 1480.0], [74.7, 1482.0], [74.8, 1487.0], [74.9, 1489.0], [75.0, 1490.0], [75.1, 1491.0], [75.2, 1492.0], [75.3, 1495.0], [75.4, 1497.0], [75.5, 1500.0], [75.6, 1501.0], [75.7, 1503.0], [75.8, 1504.0], [75.9, 1505.0], [76.0, 1507.0], [76.1, 1509.0], [76.2, 1511.0], [76.3, 1512.0], [76.4, 1514.0], [76.5, 1516.0], [76.6, 1517.0], [76.7, 1519.0], [76.8, 1520.0], [76.9, 1524.0], [77.0, 1526.0], [77.1, 1528.0], [77.2, 1530.0], [77.3, 1532.0], [77.4, 1533.0], [77.5, 1533.0], [77.6, 1535.0], [77.7, 1536.0], [77.8, 1538.0], [77.9, 1539.0], [78.0, 1542.0], [78.1, 1545.0], [78.2, 1547.0], [78.3, 1549.0], [78.4, 1550.0], [78.5, 1552.0], [78.6, 1554.0], [78.7, 1556.0], [78.8, 1558.0], [78.9, 1563.0], [79.0, 1564.0], [79.1, 1568.0], [79.2, 1570.0], [79.3, 1572.0], [79.4, 1572.0], [79.5, 1575.0], [79.6, 1577.0], [79.7, 1579.0], [79.8, 1583.0], [79.9, 1584.0], [80.0, 1585.0], [80.1, 1587.0], [80.2, 1589.0], [80.3, 1594.0], [80.4, 1597.0], [80.5, 1598.0], [80.6, 1601.0], [80.7, 1604.0], [80.8, 1604.0], [80.9, 1605.0], [81.0, 1608.0], [81.1, 1610.0], [81.2, 1613.0], [81.3, 1614.0], [81.4, 1617.0], [81.5, 1622.0], [81.6, 1624.0], [81.7, 1627.0], [81.8, 1630.0], [81.9, 1632.0], [82.0, 1636.0], [82.1, 1637.0], [82.2, 1640.0], [82.3, 1643.0], [82.4, 1645.0], [82.5, 1649.0], [82.6, 1653.0], [82.7, 1655.0], [82.8, 1657.0], [82.9, 1662.0], [83.0, 1664.0], [83.1, 1666.0], [83.2, 1670.0], [83.3, 1673.0], [83.4, 1676.0], [83.5, 1678.0], [83.6, 1679.0], [83.7, 1682.0], [83.8, 1684.0], [83.9, 1687.0], [84.0, 1690.0], [84.1, 1695.0], [84.2, 1698.0], [84.3, 1700.0], [84.4, 1704.0], [84.5, 1707.0], [84.6, 1711.0], [84.7, 1716.0], [84.8, 1718.0], [84.9, 1723.0], [85.0, 1726.0], [85.1, 1728.0], [85.2, 1730.0], [85.3, 1735.0], [85.4, 1739.0], [85.5, 1744.0], [85.6, 1745.0], [85.7, 1750.0], [85.8, 1751.0], [85.9, 1756.0], [86.0, 1761.0], [86.1, 1765.0], [86.2, 1769.0], [86.3, 1772.0], [86.4, 1776.0], [86.5, 1781.0], [86.6, 1785.0], [86.7, 1788.0], [86.8, 1796.0], [86.9, 1801.0], [87.0, 1808.0], [87.1, 1814.0], [87.2, 1819.0], [87.3, 1823.0], [87.4, 1830.0], [87.5, 1834.0], [87.6, 1835.0], [87.7, 1839.0], [87.8, 1842.0], [87.9, 1845.0], [88.0, 1850.0], [88.1, 1855.0], [88.2, 1857.0], [88.3, 1860.0], [88.4, 1865.0], [88.5, 1870.0], [88.6, 1873.0], [88.7, 1876.0], [88.8, 1882.0], [88.9, 1884.0], [89.0, 1893.0], [89.1, 1898.0], [89.2, 1904.0], [89.3, 1909.0], [89.4, 1917.0], [89.5, 1924.0], [89.6, 1933.0], [89.7, 1935.0], [89.8, 1939.0], [89.9, 1950.0], [90.0, 1957.0], [90.1, 1969.0], [90.2, 1976.0], [90.3, 1981.0], [90.4, 1990.0], [90.5, 1997.0], [90.6, 2010.0], [90.7, 2021.0], [90.8, 2036.0], [90.9, 2049.0], [91.0, 2059.0], [91.1, 2073.0], [91.2, 2086.0], [91.3, 2093.0], [91.4, 2104.0], [91.5, 2109.0], [91.6, 2116.0], [91.7, 2122.0], [91.8, 2133.0], [91.9, 2136.0], [92.0, 2142.0], [92.1, 2149.0], [92.2, 2161.0], [92.3, 2170.0], [92.4, 2172.0], [92.5, 2176.0], [92.6, 2185.0], [92.7, 2192.0], [92.8, 2201.0], [92.9, 2214.0], [93.0, 2224.0], [93.1, 2227.0], [93.2, 2233.0], [93.3, 2242.0], [93.4, 2249.0], [93.5, 2255.0], [93.6, 2260.0], [93.7, 2264.0], [93.8, 2272.0], [93.9, 2278.0], [94.0, 2286.0], [94.1, 2294.0], [94.2, 2303.0], [94.3, 2306.0], [94.4, 2314.0], [94.5, 2318.0], [94.6, 2340.0], [94.7, 2348.0], [94.8, 2359.0], [94.9, 2368.0], [95.0, 2387.0], [95.1, 2402.0], [95.2, 2411.0], [95.3, 2421.0], [95.4, 2426.0], [95.5, 2434.0], [95.6, 2454.0], [95.7, 2458.0], [95.8, 2468.0], [95.9, 2475.0], [96.0, 2486.0], [96.1, 2512.0], [96.2, 2542.0], [96.3, 2560.0], [96.4, 2593.0], [96.5, 2601.0], [96.6, 2634.0], [96.7, 2649.0], [96.8, 2680.0], [96.9, 2717.0], [97.0, 2733.0], [97.1, 2752.0], [97.2, 2793.0], [97.3, 2836.0], [97.4, 2869.0], [97.5, 2922.0], [97.6, 2959.0], [97.7, 2986.0], [97.8, 3023.0], [97.9, 3043.0], [98.0, 3076.0], [98.1, 3104.0], [98.2, 3136.0], [98.3, 3189.0], [98.4, 3258.0], [98.5, 3313.0], [98.6, 3392.0], [98.7, 3484.0], [98.8, 3583.0], [98.9, 3712.0], [99.0, 3844.0], [99.1, 3883.0], [99.2, 4079.0], [99.3, 4206.0], [99.4, 4291.0], [99.5, 4488.0], [99.6, 4664.0], [99.7, 4855.0], [99.8, 5508.0], [99.9, 5870.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 484.0, "series": [{"data": [[600.0, 481.0], [700.0, 469.0], [800.0, 363.0], [900.0, 359.0], [1000.0, 351.0], [1100.0, 330.0], [1200.0, 270.0], [1300.0, 265.0], [1400.0, 238.0], [1500.0, 263.0], [1600.0, 193.0], [1700.0, 135.0], [1800.0, 117.0], [1900.0, 74.0], [2000.0, 43.0], [2100.0, 74.0], [2200.0, 71.0], [2300.0, 47.0], [2400.0, 52.0], [2500.0, 22.0], [2600.0, 19.0], [2700.0, 19.0], [2800.0, 11.0], [2900.0, 16.0], [3000.0, 17.0], [3100.0, 13.0], [3200.0, 9.0], [3300.0, 6.0], [3400.0, 5.0], [3500.0, 6.0], [3700.0, 5.0], [3600.0, 3.0], [3800.0, 7.0], [3900.0, 4.0], [4000.0, 1.0], [4200.0, 7.0], [4300.0, 2.0], [4100.0, 4.0], [4600.0, 4.0], [4500.0, 2.0], [4400.0, 3.0], [4800.0, 2.0], [4700.0, 2.0], [5100.0, 1.0], [5000.0, 2.0], [5500.0, 2.0], [5400.0, 1.0], [5600.0, 2.0], [5800.0, 1.0], [5700.0, 1.0], [5900.0, 1.0], [6300.0, 1.0], [6200.0, 1.0], [6500.0, 1.0], [7000.0, 1.0], [200.0, 7.0], [300.0, 15.0], [400.0, 286.0], [500.0, 484.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 73.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3562.0, "series": [{"data": [[0.0, 310.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3562.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1246.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 73.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 39.30044843049328, "minX": 1.60189908E12, "maxY": 40.0, "series": [{"data": [[1.60189914E12, 40.0], [1.60189908E12, 40.0], [1.60189926E12, 39.30044843049328], [1.6018992E12, 40.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189926E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 637.0, "minX": 1.0, "maxY": 4711.0, "series": [{"data": [[33.0, 1578.0], [32.0, 1214.0], [2.0, 4711.0], [35.0, 763.0], [34.0, 1931.0], [37.0, 1425.0], [36.0, 887.0], [39.0, 773.0], [38.0, 2116.0], [40.0, 1183.8847049689475], [3.0, 2264.0], [4.0, 2217.0], [5.0, 2860.0], [6.0, 2010.0], [7.0, 2191.0], [8.0, 2094.0], [9.0, 1741.0], [10.0, 1021.0], [11.0, 1019.0], [12.0, 2271.0], [13.0, 799.0], [14.0, 833.0], [15.0, 1854.0], [16.0, 2312.0], [1.0, 2732.0], [17.0, 1048.0], [18.0, 3725.0], [19.0, 1063.0], [20.0, 734.0], [21.0, 1042.0], [22.0, 775.0], [23.0, 834.0], [24.0, 637.0], [25.0, 1594.0], [26.0, 2263.0], [27.0, 992.0], [28.0, 3844.0], [29.0, 1411.0], [30.0, 963.0], [31.0, 1444.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.84973993450205, 1187.701598921214]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 77.05, "minX": 1.60189908E12, "maxY": 9450786.2, "series": [{"data": [[1.60189914E12, 9450786.2], [1.60189908E12, 33563.01666666667], [1.60189926E12, 4789155.3], [1.6018992E12, 9192187.516666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60189914E12, 15377.6], [1.60189908E12, 77.05], [1.60189926E12, 8442.316666666668], [1.6018992E12, 14687.083333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189926E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1144.4582959641257, "minX": 1.60189908E12, "maxY": 3077.0, "series": [{"data": [[1.60189914E12, 1191.3850602409655], [1.60189908E12, 3077.0], [1.60189926E12, 1144.4582959641257], [1.6018992E12, 1198.5906579608218]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189926E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1142.6744394618836, "minX": 1.60189908E12, "maxY": 3075.4, "series": [{"data": [[1.60189914E12, 1189.5378313252993], [1.60189908E12, 3075.4], [1.60189926E12, 1142.6744394618836], [1.6018992E12, 1196.7343043696624]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189926E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00896860986547085, "minX": 1.60189908E12, "maxY": 15.100000000000001, "series": [{"data": [[1.60189914E12, 0.1628915662650609], [1.60189908E12, 15.100000000000001], [1.60189926E12, 0.00896860986547085], [1.6018992E12, 0.014063284781516834]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189926E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 223.0, "minX": 1.60189908E12, "maxY": 7059.0, "series": [{"data": [[1.60189914E12, 7059.0], [1.60189908E12, 3259.0], [1.60189926E12, 4711.0], [1.6018992E12, 6546.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60189914E12, 424.0], [1.60189908E12, 2962.0], [1.60189926E12, 429.0], [1.6018992E12, 414.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60189914E12, 427.2059001946449], [1.60189908E12, 2962.0], [1.60189926E12, 431.81850031614306], [1.6018992E12, 414.907000374794]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60189914E12, 425.1684992700815], [1.60189908E12, 2962.0], [1.60189926E12, 430.4924996048212], [1.6018992E12, 414.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60189914E12, 223.0], [1.60189908E12, 2962.0], [1.60189926E12, 330.0], [1.6018992E12, 236.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60189914E12, 1011.0], [1.60189908E12, 3048.5], [1.60189926E12, 1039.5], [1.6018992E12, 1045.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189926E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 428.0, "minX": 4.0, "maxY": 3048.5, "series": [{"data": [[33.0, 1111.0], [32.0, 1066.0], [34.0, 1116.0], [35.0, 1059.0], [36.0, 1083.5], [37.0, 936.0], [38.0, 1008.0], [39.0, 821.0], [40.0, 823.0], [41.0, 668.0], [43.0, 952.0], [42.0, 778.0], [44.0, 649.0], [46.0, 799.5], [47.0, 714.5], [49.0, 596.0], [51.0, 612.0], [50.0, 727.0], [53.0, 638.5], [54.0, 644.5], [55.0, 569.0], [56.0, 622.5], [59.0, 541.0], [58.0, 536.0], [61.0, 535.0], [66.0, 617.0], [4.0, 2498.0], [10.0, 3048.5], [16.0, 1797.5], [17.0, 1981.0], [19.0, 1379.0], [20.0, 1372.0], [21.0, 1380.0], [22.0, 1215.5], [24.0, 1287.0], [25.0, 1310.0], [26.0, 1042.0], [27.0, 1295.0], [28.0, 1289.0], [29.0, 1344.0], [30.0, 1157.0], [31.0, 1141.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 2814.0], [32.0, 1200.0], [34.0, 909.0], [35.0, 1182.5], [36.0, 1590.5], [37.0, 847.5], [38.0, 1347.0], [40.0, 877.0], [43.0, 632.0], [47.0, 757.0], [53.0, 1803.0], [59.0, 428.0], [19.0, 1476.0], [20.0, 1623.0], [21.0, 2232.0], [24.0, 1139.0], [25.0, 1422.0], [26.0, 839.0], [27.0, 1177.0], [28.0, 1692.5], [29.0, 1142.0], [30.0, 768.0], [31.0, 1133.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 428.0, "minX": 4.0, "maxY": 3047.5, "series": [{"data": [[33.0, 1110.0], [32.0, 1064.0], [34.0, 1115.0], [35.0, 1059.0], [36.0, 1082.5], [37.0, 936.0], [38.0, 1007.0], [39.0, 819.5], [40.0, 823.0], [41.0, 667.0], [43.0, 950.5], [42.0, 778.0], [44.0, 649.0], [46.0, 799.5], [47.0, 714.5], [49.0, 596.0], [51.0, 611.0], [50.0, 727.0], [53.0, 638.5], [54.0, 644.5], [55.0, 569.0], [56.0, 622.5], [59.0, 541.0], [58.0, 536.0], [61.0, 535.0], [66.0, 617.0], [4.0, 2490.0], [10.0, 3047.5], [16.0, 1790.5], [17.0, 1979.0], [19.0, 1375.5], [20.0, 1370.0], [21.0, 1379.0], [22.0, 1212.0], [24.0, 1286.0], [25.0, 1309.0], [26.0, 1037.0], [27.0, 1293.0], [28.0, 1283.5], [29.0, 1343.0], [30.0, 1157.0], [31.0, 1140.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 2814.0], [32.0, 1200.0], [34.0, 909.0], [35.0, 1182.5], [36.0, 1590.5], [37.0, 847.0], [38.0, 1346.0], [40.0, 877.0], [43.0, 632.0], [47.0, 757.0], [53.0, 1803.0], [59.0, 428.0], [19.0, 1476.0], [20.0, 1623.0], [21.0, 2232.0], [24.0, 1139.0], [25.0, 1422.0], [26.0, 839.0], [27.0, 1177.0], [28.0, 1692.5], [29.0, 1142.0], [30.0, 768.0], [31.0, 1133.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.60189908E12, "maxY": 34.583333333333336, "series": [{"data": [[1.60189914E12, 34.583333333333336], [1.60189908E12, 0.8333333333333334], [1.60189926E12, 17.916666666666668], [1.6018992E12, 33.18333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189926E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189908E12, "maxY": 34.0, "series": [{"data": [[1.60189914E12, 34.0], [1.60189908E12, 0.16666666666666666], [1.60189926E12, 18.4], [1.6018992E12, 32.733333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60189914E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.60189914E12, 0.5666666666666667], [1.60189926E12, 0.18333333333333332], [1.6018992E12, 0.45]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189926E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60189908E12, "maxY": 34.0, "series": [{"data": [[1.60189914E12, 34.0], [1.60189908E12, 0.16666666666666666], [1.60189926E12, 18.4], [1.6018992E12, 32.733333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60189914E12, 0.5833333333333334], [1.60189926E12, 0.18333333333333332], [1.6018992E12, 0.45]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189926E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60189908E12, "maxY": 34.0, "series": [{"data": [[1.60189914E12, 34.0], [1.60189908E12, 0.16666666666666666], [1.60189926E12, 18.4], [1.6018992E12, 32.733333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60189914E12, 0.5833333333333334], [1.60189926E12, 0.18333333333333332], [1.6018992E12, 0.45]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189926E12, "title": "Total Transactions Per Second"}},
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

