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
        data: {"result": {"minY": 236.0, "minX": 0.0, "maxY": 7000.0, "series": [{"data": [[0.0, 236.0], [0.1, 270.0], [0.2, 310.0], [0.3, 349.0], [0.4, 375.0], [0.5, 383.0], [0.6, 398.0], [0.7, 408.0], [0.8, 414.0], [0.9, 416.0], [1.0, 419.0], [1.1, 421.0], [1.2, 425.0], [1.3, 427.0], [1.4, 429.0], [1.5, 431.0], [1.6, 434.0], [1.7, 437.0], [1.8, 440.0], [1.9, 441.0], [2.0, 442.0], [2.1, 444.0], [2.2, 445.0], [2.3, 447.0], [2.4, 448.0], [2.5, 450.0], [2.6, 452.0], [2.7, 453.0], [2.8, 456.0], [2.9, 457.0], [3.0, 459.0], [3.1, 460.0], [3.2, 461.0], [3.3, 463.0], [3.4, 464.0], [3.5, 466.0], [3.6, 467.0], [3.7, 469.0], [3.8, 469.0], [3.9, 471.0], [4.0, 471.0], [4.1, 472.0], [4.2, 473.0], [4.3, 475.0], [4.4, 475.0], [4.5, 477.0], [4.6, 478.0], [4.7, 479.0], [4.8, 481.0], [4.9, 483.0], [5.0, 484.0], [5.1, 486.0], [5.2, 487.0], [5.3, 489.0], [5.4, 491.0], [5.5, 491.0], [5.6, 492.0], [5.7, 493.0], [5.8, 495.0], [5.9, 496.0], [6.0, 497.0], [6.1, 497.0], [6.2, 498.0], [6.3, 500.0], [6.4, 501.0], [6.5, 503.0], [6.6, 504.0], [6.7, 506.0], [6.8, 507.0], [6.9, 510.0], [7.0, 511.0], [7.1, 512.0], [7.2, 515.0], [7.3, 516.0], [7.4, 517.0], [7.5, 518.0], [7.6, 519.0], [7.7, 521.0], [7.8, 522.0], [7.9, 524.0], [8.0, 525.0], [8.1, 526.0], [8.2, 526.0], [8.3, 528.0], [8.4, 529.0], [8.5, 530.0], [8.6, 531.0], [8.7, 533.0], [8.8, 535.0], [8.9, 537.0], [9.0, 537.0], [9.1, 539.0], [9.2, 539.0], [9.3, 540.0], [9.4, 541.0], [9.5, 543.0], [9.6, 544.0], [9.7, 546.0], [9.8, 547.0], [9.9, 548.0], [10.0, 549.0], [10.1, 550.0], [10.2, 551.0], [10.3, 552.0], [10.4, 552.0], [10.5, 553.0], [10.6, 554.0], [10.7, 557.0], [10.8, 557.0], [10.9, 558.0], [11.0, 559.0], [11.1, 560.0], [11.2, 561.0], [11.3, 562.0], [11.4, 564.0], [11.5, 565.0], [11.6, 566.0], [11.7, 566.0], [11.8, 568.0], [11.9, 569.0], [12.0, 570.0], [12.1, 571.0], [12.2, 572.0], [12.3, 573.0], [12.4, 574.0], [12.5, 576.0], [12.6, 577.0], [12.7, 578.0], [12.8, 579.0], [12.9, 580.0], [13.0, 580.0], [13.1, 581.0], [13.2, 582.0], [13.3, 583.0], [13.4, 584.0], [13.5, 585.0], [13.6, 586.0], [13.7, 587.0], [13.8, 588.0], [13.9, 589.0], [14.0, 590.0], [14.1, 591.0], [14.2, 592.0], [14.3, 593.0], [14.4, 594.0], [14.5, 595.0], [14.6, 596.0], [14.7, 597.0], [14.8, 598.0], [14.9, 599.0], [15.0, 599.0], [15.1, 600.0], [15.2, 601.0], [15.3, 601.0], [15.4, 602.0], [15.5, 602.0], [15.6, 603.0], [15.7, 605.0], [15.8, 606.0], [15.9, 606.0], [16.0, 607.0], [16.1, 608.0], [16.2, 609.0], [16.3, 611.0], [16.4, 612.0], [16.5, 613.0], [16.6, 615.0], [16.7, 615.0], [16.8, 616.0], [16.9, 616.0], [17.0, 617.0], [17.1, 619.0], [17.2, 620.0], [17.3, 621.0], [17.4, 622.0], [17.5, 623.0], [17.6, 623.0], [17.7, 625.0], [17.8, 626.0], [17.9, 627.0], [18.0, 628.0], [18.1, 629.0], [18.2, 630.0], [18.3, 632.0], [18.4, 634.0], [18.5, 635.0], [18.6, 636.0], [18.7, 637.0], [18.8, 638.0], [18.9, 639.0], [19.0, 641.0], [19.1, 642.0], [19.2, 643.0], [19.3, 644.0], [19.4, 645.0], [19.5, 645.0], [19.6, 648.0], [19.7, 649.0], [19.8, 650.0], [19.9, 652.0], [20.0, 653.0], [20.1, 654.0], [20.2, 655.0], [20.3, 656.0], [20.4, 657.0], [20.5, 657.0], [20.6, 658.0], [20.7, 659.0], [20.8, 660.0], [20.9, 661.0], [21.0, 662.0], [21.1, 663.0], [21.2, 664.0], [21.3, 665.0], [21.4, 666.0], [21.5, 668.0], [21.6, 670.0], [21.7, 670.0], [21.8, 671.0], [21.9, 672.0], [22.0, 674.0], [22.1, 675.0], [22.2, 675.0], [22.3, 676.0], [22.4, 678.0], [22.5, 678.0], [22.6, 680.0], [22.7, 682.0], [22.8, 682.0], [22.9, 684.0], [23.0, 685.0], [23.1, 686.0], [23.2, 687.0], [23.3, 688.0], [23.4, 690.0], [23.5, 690.0], [23.6, 691.0], [23.7, 692.0], [23.8, 693.0], [23.9, 693.0], [24.0, 694.0], [24.1, 695.0], [24.2, 696.0], [24.3, 697.0], [24.4, 698.0], [24.5, 699.0], [24.6, 699.0], [24.7, 701.0], [24.8, 702.0], [24.9, 704.0], [25.0, 705.0], [25.1, 707.0], [25.2, 708.0], [25.3, 710.0], [25.4, 712.0], [25.5, 713.0], [25.6, 713.0], [25.7, 714.0], [25.8, 716.0], [25.9, 717.0], [26.0, 718.0], [26.1, 718.0], [26.2, 719.0], [26.3, 721.0], [26.4, 722.0], [26.5, 724.0], [26.6, 725.0], [26.7, 726.0], [26.8, 728.0], [26.9, 729.0], [27.0, 730.0], [27.1, 732.0], [27.2, 733.0], [27.3, 735.0], [27.4, 736.0], [27.5, 737.0], [27.6, 738.0], [27.7, 739.0], [27.8, 740.0], [27.9, 740.0], [28.0, 741.0], [28.1, 742.0], [28.2, 743.0], [28.3, 743.0], [28.4, 744.0], [28.5, 745.0], [28.6, 746.0], [28.7, 747.0], [28.8, 749.0], [28.9, 750.0], [29.0, 750.0], [29.1, 753.0], [29.2, 754.0], [29.3, 756.0], [29.4, 758.0], [29.5, 759.0], [29.6, 761.0], [29.7, 762.0], [29.8, 763.0], [29.9, 764.0], [30.0, 766.0], [30.1, 767.0], [30.2, 769.0], [30.3, 771.0], [30.4, 772.0], [30.5, 773.0], [30.6, 774.0], [30.7, 775.0], [30.8, 775.0], [30.9, 776.0], [31.0, 777.0], [31.1, 778.0], [31.2, 779.0], [31.3, 780.0], [31.4, 781.0], [31.5, 782.0], [31.6, 783.0], [31.7, 783.0], [31.8, 786.0], [31.9, 787.0], [32.0, 788.0], [32.1, 790.0], [32.2, 791.0], [32.3, 792.0], [32.4, 794.0], [32.5, 795.0], [32.6, 796.0], [32.7, 796.0], [32.8, 797.0], [32.9, 798.0], [33.0, 799.0], [33.1, 801.0], [33.2, 802.0], [33.3, 803.0], [33.4, 803.0], [33.5, 804.0], [33.6, 805.0], [33.7, 807.0], [33.8, 809.0], [33.9, 811.0], [34.0, 812.0], [34.1, 814.0], [34.2, 815.0], [34.3, 816.0], [34.4, 817.0], [34.5, 818.0], [34.6, 820.0], [34.7, 821.0], [34.8, 822.0], [34.9, 823.0], [35.0, 826.0], [35.1, 827.0], [35.2, 829.0], [35.3, 830.0], [35.4, 830.0], [35.5, 832.0], [35.6, 835.0], [35.7, 837.0], [35.8, 838.0], [35.9, 840.0], [36.0, 842.0], [36.1, 844.0], [36.2, 845.0], [36.3, 846.0], [36.4, 847.0], [36.5, 850.0], [36.6, 851.0], [36.7, 852.0], [36.8, 853.0], [36.9, 854.0], [37.0, 856.0], [37.1, 858.0], [37.2, 860.0], [37.3, 861.0], [37.4, 862.0], [37.5, 863.0], [37.6, 863.0], [37.7, 865.0], [37.8, 865.0], [37.9, 867.0], [38.0, 867.0], [38.1, 869.0], [38.2, 870.0], [38.3, 871.0], [38.4, 872.0], [38.5, 873.0], [38.6, 874.0], [38.7, 875.0], [38.8, 877.0], [38.9, 879.0], [39.0, 879.0], [39.1, 880.0], [39.2, 881.0], [39.3, 882.0], [39.4, 883.0], [39.5, 884.0], [39.6, 885.0], [39.7, 886.0], [39.8, 888.0], [39.9, 889.0], [40.0, 891.0], [40.1, 893.0], [40.2, 894.0], [40.3, 895.0], [40.4, 896.0], [40.5, 897.0], [40.6, 898.0], [40.7, 900.0], [40.8, 902.0], [40.9, 903.0], [41.0, 904.0], [41.1, 905.0], [41.2, 906.0], [41.3, 908.0], [41.4, 909.0], [41.5, 910.0], [41.6, 911.0], [41.7, 912.0], [41.8, 913.0], [41.9, 916.0], [42.0, 917.0], [42.1, 919.0], [42.2, 919.0], [42.3, 922.0], [42.4, 923.0], [42.5, 924.0], [42.6, 925.0], [42.7, 926.0], [42.8, 927.0], [42.9, 929.0], [43.0, 932.0], [43.1, 934.0], [43.2, 935.0], [43.3, 937.0], [43.4, 938.0], [43.5, 939.0], [43.6, 941.0], [43.7, 942.0], [43.8, 944.0], [43.9, 945.0], [44.0, 947.0], [44.1, 948.0], [44.2, 950.0], [44.3, 952.0], [44.4, 953.0], [44.5, 954.0], [44.6, 955.0], [44.7, 957.0], [44.8, 958.0], [44.9, 960.0], [45.0, 962.0], [45.1, 964.0], [45.2, 965.0], [45.3, 967.0], [45.4, 969.0], [45.5, 969.0], [45.6, 972.0], [45.7, 973.0], [45.8, 975.0], [45.9, 976.0], [46.0, 978.0], [46.1, 981.0], [46.2, 984.0], [46.3, 985.0], [46.4, 986.0], [46.5, 989.0], [46.6, 992.0], [46.7, 993.0], [46.8, 994.0], [46.9, 995.0], [47.0, 996.0], [47.1, 996.0], [47.2, 998.0], [47.3, 999.0], [47.4, 1000.0], [47.5, 1002.0], [47.6, 1003.0], [47.7, 1005.0], [47.8, 1008.0], [47.9, 1010.0], [48.0, 1011.0], [48.1, 1012.0], [48.2, 1014.0], [48.3, 1016.0], [48.4, 1017.0], [48.5, 1018.0], [48.6, 1020.0], [48.7, 1021.0], [48.8, 1023.0], [48.9, 1025.0], [49.0, 1026.0], [49.1, 1027.0], [49.2, 1029.0], [49.3, 1031.0], [49.4, 1033.0], [49.5, 1035.0], [49.6, 1036.0], [49.7, 1037.0], [49.8, 1040.0], [49.9, 1041.0], [50.0, 1043.0], [50.1, 1044.0], [50.2, 1045.0], [50.3, 1046.0], [50.4, 1047.0], [50.5, 1048.0], [50.6, 1050.0], [50.7, 1052.0], [50.8, 1053.0], [50.9, 1054.0], [51.0, 1056.0], [51.1, 1058.0], [51.2, 1059.0], [51.3, 1060.0], [51.4, 1061.0], [51.5, 1062.0], [51.6, 1064.0], [51.7, 1065.0], [51.8, 1066.0], [51.9, 1068.0], [52.0, 1069.0], [52.1, 1071.0], [52.2, 1072.0], [52.3, 1073.0], [52.4, 1073.0], [52.5, 1075.0], [52.6, 1077.0], [52.7, 1078.0], [52.8, 1079.0], [52.9, 1080.0], [53.0, 1082.0], [53.1, 1084.0], [53.2, 1085.0], [53.3, 1087.0], [53.4, 1089.0], [53.5, 1091.0], [53.6, 1092.0], [53.7, 1093.0], [53.8, 1095.0], [53.9, 1096.0], [54.0, 1098.0], [54.1, 1100.0], [54.2, 1100.0], [54.3, 1102.0], [54.4, 1104.0], [54.5, 1105.0], [54.6, 1107.0], [54.7, 1109.0], [54.8, 1110.0], [54.9, 1111.0], [55.0, 1112.0], [55.1, 1113.0], [55.2, 1114.0], [55.3, 1115.0], [55.4, 1117.0], [55.5, 1119.0], [55.6, 1121.0], [55.7, 1123.0], [55.8, 1125.0], [55.9, 1126.0], [56.0, 1128.0], [56.1, 1130.0], [56.2, 1132.0], [56.3, 1134.0], [56.4, 1135.0], [56.5, 1136.0], [56.6, 1136.0], [56.7, 1137.0], [56.8, 1138.0], [56.9, 1140.0], [57.0, 1142.0], [57.1, 1143.0], [57.2, 1144.0], [57.3, 1145.0], [57.4, 1149.0], [57.5, 1150.0], [57.6, 1151.0], [57.7, 1152.0], [57.8, 1153.0], [57.9, 1155.0], [58.0, 1157.0], [58.1, 1158.0], [58.2, 1160.0], [58.3, 1161.0], [58.4, 1163.0], [58.5, 1164.0], [58.6, 1166.0], [58.7, 1168.0], [58.8, 1169.0], [58.9, 1171.0], [59.0, 1173.0], [59.1, 1174.0], [59.2, 1175.0], [59.3, 1178.0], [59.4, 1180.0], [59.5, 1182.0], [59.6, 1183.0], [59.7, 1185.0], [59.8, 1186.0], [59.9, 1188.0], [60.0, 1189.0], [60.1, 1192.0], [60.2, 1194.0], [60.3, 1195.0], [60.4, 1197.0], [60.5, 1198.0], [60.6, 1199.0], [60.7, 1203.0], [60.8, 1205.0], [60.9, 1207.0], [61.0, 1208.0], [61.1, 1210.0], [61.2, 1212.0], [61.3, 1214.0], [61.4, 1215.0], [61.5, 1217.0], [61.6, 1217.0], [61.7, 1220.0], [61.8, 1221.0], [61.9, 1223.0], [62.0, 1224.0], [62.1, 1225.0], [62.2, 1226.0], [62.3, 1227.0], [62.4, 1230.0], [62.5, 1233.0], [62.6, 1235.0], [62.7, 1237.0], [62.8, 1238.0], [62.9, 1240.0], [63.0, 1241.0], [63.1, 1243.0], [63.2, 1244.0], [63.3, 1246.0], [63.4, 1248.0], [63.5, 1250.0], [63.6, 1251.0], [63.7, 1253.0], [63.8, 1254.0], [63.9, 1257.0], [64.0, 1258.0], [64.1, 1260.0], [64.2, 1261.0], [64.3, 1263.0], [64.4, 1266.0], [64.5, 1268.0], [64.6, 1270.0], [64.7, 1273.0], [64.8, 1274.0], [64.9, 1276.0], [65.0, 1277.0], [65.1, 1279.0], [65.2, 1280.0], [65.3, 1283.0], [65.4, 1287.0], [65.5, 1289.0], [65.6, 1290.0], [65.7, 1294.0], [65.8, 1295.0], [65.9, 1296.0], [66.0, 1298.0], [66.1, 1300.0], [66.2, 1302.0], [66.3, 1305.0], [66.4, 1306.0], [66.5, 1310.0], [66.6, 1314.0], [66.7, 1317.0], [66.8, 1318.0], [66.9, 1321.0], [67.0, 1323.0], [67.1, 1324.0], [67.2, 1326.0], [67.3, 1328.0], [67.4, 1329.0], [67.5, 1330.0], [67.6, 1332.0], [67.7, 1334.0], [67.8, 1336.0], [67.9, 1340.0], [68.0, 1341.0], [68.1, 1344.0], [68.2, 1346.0], [68.3, 1348.0], [68.4, 1350.0], [68.5, 1351.0], [68.6, 1353.0], [68.7, 1354.0], [68.8, 1358.0], [68.9, 1359.0], [69.0, 1362.0], [69.1, 1364.0], [69.2, 1366.0], [69.3, 1367.0], [69.4, 1368.0], [69.5, 1369.0], [69.6, 1371.0], [69.7, 1373.0], [69.8, 1374.0], [69.9, 1377.0], [70.0, 1377.0], [70.1, 1379.0], [70.2, 1382.0], [70.3, 1383.0], [70.4, 1385.0], [70.5, 1387.0], [70.6, 1388.0], [70.7, 1390.0], [70.8, 1393.0], [70.9, 1395.0], [71.0, 1397.0], [71.1, 1399.0], [71.2, 1401.0], [71.3, 1403.0], [71.4, 1405.0], [71.5, 1407.0], [71.6, 1410.0], [71.7, 1414.0], [71.8, 1417.0], [71.9, 1419.0], [72.0, 1421.0], [72.1, 1424.0], [72.2, 1426.0], [72.3, 1428.0], [72.4, 1430.0], [72.5, 1431.0], [72.6, 1433.0], [72.7, 1435.0], [72.8, 1437.0], [72.9, 1440.0], [73.0, 1442.0], [73.1, 1444.0], [73.2, 1445.0], [73.3, 1448.0], [73.4, 1450.0], [73.5, 1452.0], [73.6, 1454.0], [73.7, 1456.0], [73.8, 1457.0], [73.9, 1459.0], [74.0, 1461.0], [74.1, 1464.0], [74.2, 1467.0], [74.3, 1468.0], [74.4, 1470.0], [74.5, 1472.0], [74.6, 1474.0], [74.7, 1475.0], [74.8, 1479.0], [74.9, 1481.0], [75.0, 1482.0], [75.1, 1484.0], [75.2, 1487.0], [75.3, 1489.0], [75.4, 1491.0], [75.5, 1492.0], [75.6, 1495.0], [75.7, 1496.0], [75.8, 1497.0], [75.9, 1499.0], [76.0, 1500.0], [76.1, 1500.0], [76.2, 1502.0], [76.3, 1503.0], [76.4, 1505.0], [76.5, 1508.0], [76.6, 1509.0], [76.7, 1512.0], [76.8, 1513.0], [76.9, 1513.0], [77.0, 1515.0], [77.1, 1517.0], [77.2, 1517.0], [77.3, 1518.0], [77.4, 1520.0], [77.5, 1523.0], [77.6, 1524.0], [77.7, 1526.0], [77.8, 1527.0], [77.9, 1529.0], [78.0, 1531.0], [78.1, 1536.0], [78.2, 1537.0], [78.3, 1539.0], [78.4, 1541.0], [78.5, 1543.0], [78.6, 1545.0], [78.7, 1546.0], [78.8, 1547.0], [78.9, 1551.0], [79.0, 1553.0], [79.1, 1554.0], [79.2, 1557.0], [79.3, 1560.0], [79.4, 1562.0], [79.5, 1563.0], [79.6, 1565.0], [79.7, 1570.0], [79.8, 1572.0], [79.9, 1573.0], [80.0, 1576.0], [80.1, 1577.0], [80.2, 1579.0], [80.3, 1581.0], [80.4, 1583.0], [80.5, 1584.0], [80.6, 1587.0], [80.7, 1590.0], [80.8, 1594.0], [80.9, 1596.0], [81.0, 1600.0], [81.1, 1602.0], [81.2, 1606.0], [81.3, 1608.0], [81.4, 1609.0], [81.5, 1611.0], [81.6, 1613.0], [81.7, 1617.0], [81.8, 1619.0], [81.9, 1621.0], [82.0, 1624.0], [82.1, 1626.0], [82.2, 1627.0], [82.3, 1631.0], [82.4, 1632.0], [82.5, 1636.0], [82.6, 1638.0], [82.7, 1641.0], [82.8, 1644.0], [82.9, 1647.0], [83.0, 1655.0], [83.1, 1660.0], [83.2, 1662.0], [83.3, 1665.0], [83.4, 1667.0], [83.5, 1670.0], [83.6, 1671.0], [83.7, 1674.0], [83.8, 1680.0], [83.9, 1683.0], [84.0, 1687.0], [84.1, 1690.0], [84.2, 1694.0], [84.3, 1696.0], [84.4, 1698.0], [84.5, 1702.0], [84.6, 1705.0], [84.7, 1710.0], [84.8, 1713.0], [84.9, 1718.0], [85.0, 1721.0], [85.1, 1726.0], [85.2, 1728.0], [85.3, 1736.0], [85.4, 1740.0], [85.5, 1749.0], [85.6, 1751.0], [85.7, 1755.0], [85.8, 1760.0], [85.9, 1764.0], [86.0, 1769.0], [86.1, 1772.0], [86.2, 1773.0], [86.3, 1777.0], [86.4, 1779.0], [86.5, 1782.0], [86.6, 1786.0], [86.7, 1790.0], [86.8, 1794.0], [86.9, 1799.0], [87.0, 1804.0], [87.1, 1808.0], [87.2, 1812.0], [87.3, 1816.0], [87.4, 1820.0], [87.5, 1828.0], [87.6, 1835.0], [87.7, 1841.0], [87.8, 1845.0], [87.9, 1847.0], [88.0, 1852.0], [88.1, 1856.0], [88.2, 1859.0], [88.3, 1866.0], [88.4, 1868.0], [88.5, 1873.0], [88.6, 1883.0], [88.7, 1888.0], [88.8, 1892.0], [88.9, 1898.0], [89.0, 1900.0], [89.1, 1906.0], [89.2, 1909.0], [89.3, 1919.0], [89.4, 1926.0], [89.5, 1931.0], [89.6, 1934.0], [89.7, 1940.0], [89.8, 1944.0], [89.9, 1953.0], [90.0, 1961.0], [90.1, 1972.0], [90.2, 1978.0], [90.3, 1984.0], [90.4, 1990.0], [90.5, 1996.0], [90.6, 2007.0], [90.7, 2016.0], [90.8, 2022.0], [90.9, 2031.0], [91.0, 2037.0], [91.1, 2049.0], [91.2, 2055.0], [91.3, 2071.0], [91.4, 2082.0], [91.5, 2088.0], [91.6, 2090.0], [91.7, 2096.0], [91.8, 2100.0], [91.9, 2108.0], [92.0, 2115.0], [92.1, 2127.0], [92.2, 2138.0], [92.3, 2139.0], [92.4, 2144.0], [92.5, 2153.0], [92.6, 2166.0], [92.7, 2173.0], [92.8, 2178.0], [92.9, 2186.0], [93.0, 2203.0], [93.1, 2214.0], [93.2, 2222.0], [93.3, 2231.0], [93.4, 2240.0], [93.5, 2249.0], [93.6, 2259.0], [93.7, 2267.0], [93.8, 2277.0], [93.9, 2282.0], [94.0, 2288.0], [94.1, 2291.0], [94.2, 2297.0], [94.3, 2311.0], [94.4, 2324.0], [94.5, 2337.0], [94.6, 2343.0], [94.7, 2353.0], [94.8, 2365.0], [94.9, 2375.0], [95.0, 2381.0], [95.1, 2391.0], [95.2, 2402.0], [95.3, 2411.0], [95.4, 2422.0], [95.5, 2430.0], [95.6, 2444.0], [95.7, 2463.0], [95.8, 2479.0], [95.9, 2494.0], [96.0, 2504.0], [96.1, 2519.0], [96.2, 2535.0], [96.3, 2549.0], [96.4, 2560.0], [96.5, 2567.0], [96.6, 2582.0], [96.7, 2600.0], [96.8, 2656.0], [96.9, 2678.0], [97.0, 2700.0], [97.1, 2714.0], [97.2, 2749.0], [97.3, 2756.0], [97.4, 2783.0], [97.5, 2825.0], [97.6, 2896.0], [97.7, 2913.0], [97.8, 2941.0], [97.9, 2985.0], [98.0, 3037.0], [98.1, 3070.0], [98.2, 3095.0], [98.3, 3124.0], [98.4, 3197.0], [98.5, 3266.0], [98.6, 3304.0], [98.7, 3372.0], [98.8, 3480.0], [98.9, 3621.0], [99.0, 3783.0], [99.1, 3846.0], [99.2, 3936.0], [99.3, 3969.0], [99.4, 4073.0], [99.5, 4336.0], [99.6, 4464.0], [99.7, 4838.0], [99.8, 5366.0], [99.9, 5550.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 497.0, "series": [{"data": [[600.0, 497.0], [700.0, 438.0], [800.0, 397.0], [900.0, 344.0], [1000.0, 352.0], [1100.0, 338.0], [1200.0, 283.0], [1300.0, 262.0], [1400.0, 252.0], [1500.0, 260.0], [1600.0, 182.0], [1700.0, 126.0], [1800.0, 107.0], [1900.0, 80.0], [2000.0, 67.0], [2100.0, 60.0], [2200.0, 65.0], [2300.0, 51.0], [2400.0, 39.0], [2500.0, 39.0], [2600.0, 16.0], [2800.0, 10.0], [2700.0, 24.0], [2900.0, 16.0], [3000.0, 14.0], [3100.0, 9.0], [3300.0, 8.0], [3200.0, 9.0], [3400.0, 4.0], [3500.0, 4.0], [3700.0, 6.0], [3600.0, 1.0], [3800.0, 8.0], [3900.0, 9.0], [4000.0, 4.0], [4100.0, 2.0], [4300.0, 3.0], [4200.0, 1.0], [4400.0, 4.0], [4500.0, 3.0], [4800.0, 2.0], [5000.0, 1.0], [5200.0, 2.0], [5300.0, 3.0], [5500.0, 3.0], [5400.0, 1.0], [5700.0, 1.0], [5800.0, 1.0], [5900.0, 1.0], [6900.0, 1.0], [7000.0, 1.0], [200.0, 7.0], [300.0, 25.0], [400.0, 294.0], [500.0, 454.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 52.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3581.0, "series": [{"data": [[0.0, 327.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3581.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1231.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 52.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 31.05747126436781, "minX": 1.60189854E12, "maxY": 40.0, "series": [{"data": [[1.60189854E12, 40.0], [1.60189866E12, 40.0], [1.6018986E12, 40.0], [1.60189872E12, 31.05747126436781]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189872E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 729.0, "minX": 1.0, "maxY": 3828.0, "series": [{"data": [[33.0, 2049.0], [32.0, 1772.0], [2.0, 3095.0], [35.0, 1932.0], [34.0, 1398.0], [37.0, 786.0], [36.0, 804.0], [39.0, 919.0], [38.0, 1408.0], [40.0, 1180.1622670807458], [3.0, 1350.0], [4.0, 1494.0], [5.0, 2138.0], [6.0, 1506.0], [7.0, 1276.0], [8.0, 1447.0], [9.0, 1022.0], [10.0, 3070.0], [11.0, 2049.0], [12.0, 3828.0], [14.0, 1606.0], [15.0, 3480.0], [16.0, 1772.0], [1.0, 2728.0], [17.0, 884.0], [18.0, 1546.0], [19.0, 1646.0], [20.0, 1028.0], [21.0, 729.0], [22.0, 897.0], [23.0, 1531.0], [24.0, 733.0], [25.0, 888.0], [26.0, 2186.0], [27.0, 1736.0], [29.0, 2414.5], [30.0, 1483.0], [31.0, 2037.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.85012521672124, 1184.1425544211131]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 661.3166666666667, "minX": 1.60189854E12, "maxY": 1.0057046516666668E7, "series": [{"data": [[1.60189854E12, 3986957.7], [1.60189866E12, 9205763.95], [1.6018986E12, 1.0057046516666668E7], [1.60189872E12, 393076.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60189854E12, 7077.7], [1.60189866E12, 15772.4], [1.6018986E12, 15072.633333333333], [1.60189872E12, 661.3166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189872E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1137.8087121212145, "minX": 1.60189854E12, "maxY": 1536.4367816091954, "series": [{"data": [[1.60189854E12, 1254.1048304213803], [1.60189866E12, 1137.8087121212145], [1.6018986E12, 1183.713719663198], [1.60189872E12, 1536.4367816091954]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189872E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1136.0426136363662, "minX": 1.60189854E12, "maxY": 1534.6551724137935, "series": [{"data": [[1.60189854E12, 1252.4501541623836], [1.60189866E12, 1136.0426136363662], [1.6018986E12, 1181.7231302625057], [1.60189872E12, 1534.6551724137935]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189872E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60189854E12, "maxY": 0.5313463514902361, "series": [{"data": [[1.60189854E12, 0.5313463514902361], [1.60189866E12, 0.021780303030303098], [1.6018986E12, 0.022783556215948533], [1.60189872E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189872E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 236.0, "minX": 1.60189854E12, "maxY": 7000.0, "series": [{"data": [[1.60189854E12, 5743.0], [1.60189866E12, 7000.0], [1.6018986E12, 5984.0], [1.60189872E12, 4073.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60189854E12, 437.48999770879743], [1.60189866E12, 420.0], [1.6018986E12, 379.0449976146221], [1.60189872E12, 536.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60189854E12, 441.5139000916481], [1.60189866E12, 421.7306001996994], [1.6018986E12, 392.90890209913255], [1.60189872E12, 536.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60189854E12, 441.1294998854399], [1.60189866E12, 420.89299975037574], [1.6018986E12, 384.1044973760843], [1.60189872E12, 536.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60189854E12, 413.0], [1.60189866E12, 281.0], [1.6018986E12, 236.0], [1.60189872E12, 536.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60189854E12, 1018.0], [1.60189866E12, 995.0], [1.6018986E12, 1087.0], [1.60189872E12, 1374.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189872E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 466.0, "minX": 2.0, "maxY": 3088.0, "series": [{"data": [[33.0, 1088.0], [32.0, 1034.0], [2.0, 2911.5], [35.0, 1115.0], [34.0, 1114.0], [37.0, 940.0], [36.0, 909.0], [38.0, 894.5], [39.0, 841.0], [40.0, 937.0], [42.0, 895.0], [43.0, 878.5], [45.0, 852.0], [44.0, 663.0], [47.0, 690.0], [46.0, 589.0], [49.0, 815.0], [50.0, 869.0], [51.0, 620.0], [55.0, 577.0], [57.0, 590.0], [58.0, 546.5], [59.0, 789.0], [68.0, 523.5], [72.0, 538.0], [6.0, 1470.5], [14.0, 1609.5], [17.0, 3088.0], [18.0, 1567.0], [19.0, 1303.0], [21.0, 1627.0], [23.0, 1109.0], [24.0, 1403.0], [25.0, 1348.0], [26.0, 1314.0], [27.0, 1453.5], [28.0, 1273.0], [29.0, 1177.0], [30.0, 1240.5], [31.0, 1139.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 691.0], [32.0, 1429.0], [34.0, 1490.0], [37.0, 1030.0], [36.0, 806.0], [38.0, 731.0], [40.0, 693.0], [42.0, 1116.0], [45.0, 762.0], [46.0, 466.0], [51.0, 531.0], [18.0, 2267.0], [21.0, 918.0], [24.0, 792.0], [25.0, 692.0], [26.0, 939.0], [27.0, 1088.0], [28.0, 1137.0], [29.0, 1367.0], [30.0, 1217.0], [31.0, 2884.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 72.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 466.0, "minX": 2.0, "maxY": 3088.0, "series": [{"data": [[33.0, 1086.0], [32.0, 1031.0], [2.0, 2897.0], [35.0, 1111.0], [34.0, 1110.0], [37.0, 939.0], [36.0, 908.0], [38.0, 892.0], [39.0, 841.0], [40.0, 934.0], [42.0, 893.0], [43.0, 876.0], [45.0, 851.0], [44.0, 663.0], [47.0, 688.5], [46.0, 589.0], [49.0, 811.0], [50.0, 868.5], [51.0, 620.0], [55.0, 577.0], [57.0, 590.0], [58.0, 546.5], [59.0, 788.0], [68.0, 523.5], [72.0, 537.5], [6.0, 1468.5], [14.0, 1606.0], [17.0, 3088.0], [18.0, 1564.0], [19.0, 1302.0], [21.0, 1625.0], [23.0, 1105.0], [24.0, 1394.0], [25.0, 1348.0], [26.0, 1310.0], [27.0, 1452.5], [28.0, 1271.0], [29.0, 1174.0], [30.0, 1240.0], [31.0, 1138.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 691.0], [32.0, 1429.0], [34.0, 1490.0], [37.0, 1030.0], [36.0, 806.0], [38.0, 731.0], [40.0, 693.0], [42.0, 1116.0], [45.0, 762.0], [46.0, 466.0], [51.0, 531.0], [18.0, 2267.0], [21.0, 918.0], [24.0, 792.0], [25.0, 692.0], [26.0, 939.0], [27.0, 1088.0], [28.0, 1137.0], [29.0, 1367.0], [30.0, 1217.0], [31.0, 2884.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 72.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.60189854E12, "maxY": 35.2, "series": [{"data": [[1.60189854E12, 16.883333333333333], [1.60189866E12, 35.2], [1.6018986E12, 33.65], [1.60189872E12, 0.7833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189872E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189854E12, "maxY": 34.88333333333333, "series": [{"data": [[1.60189854E12, 16.0], [1.60189866E12, 34.88333333333333], [1.6018986E12, 33.333333333333336], [1.60189872E12, 1.4333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6018986E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.60189854E12, 0.21666666666666667], [1.60189866E12, 0.31666666666666665], [1.6018986E12, 0.3], [1.60189872E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189872E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189854E12, "maxY": 34.88333333333333, "series": [{"data": [[1.60189854E12, 16.0], [1.60189866E12, 34.88333333333333], [1.6018986E12, 33.333333333333336], [1.60189872E12, 1.4333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60189854E12, 0.21666666666666667], [1.60189866E12, 0.31666666666666665], [1.6018986E12, 0.31666666666666665], [1.60189872E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189872E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189854E12, "maxY": 34.88333333333333, "series": [{"data": [[1.60189854E12, 16.0], [1.60189866E12, 34.88333333333333], [1.6018986E12, 33.333333333333336], [1.60189872E12, 1.4333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60189854E12, 0.21666666666666667], [1.60189866E12, 0.31666666666666665], [1.6018986E12, 0.31666666666666665], [1.60189872E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189872E12, "title": "Total Transactions Per Second"}},
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

