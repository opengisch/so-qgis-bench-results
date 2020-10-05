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
        data: {"result": {"minY": 201.0, "minX": 0.0, "maxY": 7221.0, "series": [{"data": [[0.0, 201.0], [0.1, 246.0], [0.2, 280.0], [0.3, 312.0], [0.4, 341.0], [0.5, 374.0], [0.6, 402.0], [0.7, 410.0], [0.8, 413.0], [0.9, 417.0], [1.0, 420.0], [1.1, 422.0], [1.2, 426.0], [1.3, 429.0], [1.4, 431.0], [1.5, 435.0], [1.6, 437.0], [1.7, 439.0], [1.8, 441.0], [1.9, 442.0], [2.0, 445.0], [2.1, 447.0], [2.2, 450.0], [2.3, 451.0], [2.4, 453.0], [2.5, 453.0], [2.6, 456.0], [2.7, 459.0], [2.8, 459.0], [2.9, 461.0], [3.0, 462.0], [3.1, 463.0], [3.2, 464.0], [3.3, 465.0], [3.4, 467.0], [3.5, 468.0], [3.6, 470.0], [3.7, 472.0], [3.8, 472.0], [3.9, 474.0], [4.0, 475.0], [4.1, 477.0], [4.2, 478.0], [4.3, 479.0], [4.4, 480.0], [4.5, 481.0], [4.6, 483.0], [4.7, 484.0], [4.8, 486.0], [4.9, 487.0], [5.0, 488.0], [5.1, 490.0], [5.2, 492.0], [5.3, 493.0], [5.4, 494.0], [5.5, 495.0], [5.6, 496.0], [5.7, 498.0], [5.8, 501.0], [5.9, 501.0], [6.0, 502.0], [6.1, 503.0], [6.2, 504.0], [6.3, 506.0], [6.4, 507.0], [6.5, 508.0], [6.6, 509.0], [6.7, 510.0], [6.8, 511.0], [6.9, 512.0], [7.0, 513.0], [7.1, 514.0], [7.2, 515.0], [7.3, 516.0], [7.4, 517.0], [7.5, 518.0], [7.6, 521.0], [7.7, 522.0], [7.8, 522.0], [7.9, 524.0], [8.0, 524.0], [8.1, 525.0], [8.2, 526.0], [8.3, 528.0], [8.4, 530.0], [8.5, 532.0], [8.6, 533.0], [8.7, 534.0], [8.8, 534.0], [8.9, 535.0], [9.0, 536.0], [9.1, 538.0], [9.2, 539.0], [9.3, 540.0], [9.4, 541.0], [9.5, 542.0], [9.6, 545.0], [9.7, 546.0], [9.8, 547.0], [9.9, 548.0], [10.0, 549.0], [10.1, 550.0], [10.2, 551.0], [10.3, 552.0], [10.4, 553.0], [10.5, 556.0], [10.6, 556.0], [10.7, 557.0], [10.8, 560.0], [10.9, 561.0], [11.0, 562.0], [11.1, 564.0], [11.2, 565.0], [11.3, 567.0], [11.4, 568.0], [11.5, 568.0], [11.6, 569.0], [11.7, 571.0], [11.8, 572.0], [11.9, 572.0], [12.0, 574.0], [12.1, 575.0], [12.2, 576.0], [12.3, 577.0], [12.4, 578.0], [12.5, 579.0], [12.6, 580.0], [12.7, 581.0], [12.8, 583.0], [12.9, 585.0], [13.0, 586.0], [13.1, 586.0], [13.2, 588.0], [13.3, 589.0], [13.4, 590.0], [13.5, 590.0], [13.6, 591.0], [13.7, 591.0], [13.8, 593.0], [13.9, 594.0], [14.0, 594.0], [14.1, 596.0], [14.2, 596.0], [14.3, 597.0], [14.4, 598.0], [14.5, 599.0], [14.6, 600.0], [14.7, 602.0], [14.8, 603.0], [14.9, 604.0], [15.0, 604.0], [15.1, 605.0], [15.2, 605.0], [15.3, 606.0], [15.4, 607.0], [15.5, 608.0], [15.6, 609.0], [15.7, 610.0], [15.8, 610.0], [15.9, 611.0], [16.0, 613.0], [16.1, 613.0], [16.2, 615.0], [16.3, 616.0], [16.4, 618.0], [16.5, 618.0], [16.6, 620.0], [16.7, 620.0], [16.8, 621.0], [16.9, 622.0], [17.0, 623.0], [17.1, 623.0], [17.2, 624.0], [17.3, 625.0], [17.4, 625.0], [17.5, 625.0], [17.6, 626.0], [17.7, 627.0], [17.8, 629.0], [17.9, 631.0], [18.0, 631.0], [18.1, 632.0], [18.2, 633.0], [18.3, 634.0], [18.4, 635.0], [18.5, 636.0], [18.6, 636.0], [18.7, 638.0], [18.8, 638.0], [18.9, 640.0], [19.0, 641.0], [19.1, 642.0], [19.2, 643.0], [19.3, 643.0], [19.4, 644.0], [19.5, 645.0], [19.6, 646.0], [19.7, 647.0], [19.8, 648.0], [19.9, 649.0], [20.0, 650.0], [20.1, 651.0], [20.2, 652.0], [20.3, 653.0], [20.4, 654.0], [20.5, 655.0], [20.6, 656.0], [20.7, 657.0], [20.8, 657.0], [20.9, 659.0], [21.0, 660.0], [21.1, 661.0], [21.2, 662.0], [21.3, 663.0], [21.4, 664.0], [21.5, 664.0], [21.6, 665.0], [21.7, 666.0], [21.8, 667.0], [21.9, 668.0], [22.0, 670.0], [22.1, 671.0], [22.2, 673.0], [22.3, 675.0], [22.4, 675.0], [22.5, 676.0], [22.6, 677.0], [22.7, 679.0], [22.8, 679.0], [22.9, 680.0], [23.0, 682.0], [23.1, 683.0], [23.2, 684.0], [23.3, 685.0], [23.4, 686.0], [23.5, 686.0], [23.6, 687.0], [23.7, 688.0], [23.8, 689.0], [23.9, 691.0], [24.0, 692.0], [24.1, 693.0], [24.2, 694.0], [24.3, 695.0], [24.4, 696.0], [24.5, 696.0], [24.6, 698.0], [24.7, 699.0], [24.8, 700.0], [24.9, 701.0], [25.0, 702.0], [25.1, 703.0], [25.2, 704.0], [25.3, 705.0], [25.4, 706.0], [25.5, 707.0], [25.6, 708.0], [25.7, 710.0], [25.8, 711.0], [25.9, 713.0], [26.0, 715.0], [26.1, 716.0], [26.2, 717.0], [26.3, 719.0], [26.4, 720.0], [26.5, 720.0], [26.6, 721.0], [26.7, 723.0], [26.8, 724.0], [26.9, 725.0], [27.0, 726.0], [27.1, 726.0], [27.2, 727.0], [27.3, 728.0], [27.4, 729.0], [27.5, 731.0], [27.6, 732.0], [27.7, 733.0], [27.8, 735.0], [27.9, 736.0], [28.0, 737.0], [28.1, 738.0], [28.2, 739.0], [28.3, 740.0], [28.4, 741.0], [28.5, 743.0], [28.6, 746.0], [28.7, 747.0], [28.8, 749.0], [28.9, 750.0], [29.0, 752.0], [29.1, 753.0], [29.2, 755.0], [29.3, 755.0], [29.4, 756.0], [29.5, 758.0], [29.6, 759.0], [29.7, 760.0], [29.8, 760.0], [29.9, 761.0], [30.0, 762.0], [30.1, 763.0], [30.2, 764.0], [30.3, 765.0], [30.4, 767.0], [30.5, 768.0], [30.6, 769.0], [30.7, 770.0], [30.8, 772.0], [30.9, 774.0], [31.0, 775.0], [31.1, 777.0], [31.2, 779.0], [31.3, 779.0], [31.4, 780.0], [31.5, 782.0], [31.6, 785.0], [31.7, 786.0], [31.8, 786.0], [31.9, 787.0], [32.0, 788.0], [32.1, 790.0], [32.2, 791.0], [32.3, 792.0], [32.4, 794.0], [32.5, 795.0], [32.6, 798.0], [32.7, 798.0], [32.8, 800.0], [32.9, 800.0], [33.0, 801.0], [33.1, 802.0], [33.2, 802.0], [33.3, 803.0], [33.4, 804.0], [33.5, 806.0], [33.6, 808.0], [33.7, 809.0], [33.8, 810.0], [33.9, 811.0], [34.0, 811.0], [34.1, 812.0], [34.2, 813.0], [34.3, 816.0], [34.4, 816.0], [34.5, 818.0], [34.6, 819.0], [34.7, 821.0], [34.8, 822.0], [34.9, 823.0], [35.0, 824.0], [35.1, 825.0], [35.2, 826.0], [35.3, 828.0], [35.4, 829.0], [35.5, 830.0], [35.6, 831.0], [35.7, 832.0], [35.8, 834.0], [35.9, 836.0], [36.0, 837.0], [36.1, 839.0], [36.2, 840.0], [36.3, 843.0], [36.4, 845.0], [36.5, 847.0], [36.6, 847.0], [36.7, 849.0], [36.8, 849.0], [36.9, 850.0], [37.0, 851.0], [37.1, 853.0], [37.2, 855.0], [37.3, 858.0], [37.4, 858.0], [37.5, 859.0], [37.6, 860.0], [37.7, 861.0], [37.8, 862.0], [37.9, 863.0], [38.0, 863.0], [38.1, 864.0], [38.2, 866.0], [38.3, 867.0], [38.4, 868.0], [38.5, 869.0], [38.6, 870.0], [38.7, 871.0], [38.8, 872.0], [38.9, 873.0], [39.0, 874.0], [39.1, 875.0], [39.2, 876.0], [39.3, 878.0], [39.4, 880.0], [39.5, 881.0], [39.6, 882.0], [39.7, 883.0], [39.8, 887.0], [39.9, 888.0], [40.0, 891.0], [40.1, 892.0], [40.2, 893.0], [40.3, 894.0], [40.4, 896.0], [40.5, 896.0], [40.6, 899.0], [40.7, 900.0], [40.8, 901.0], [40.9, 904.0], [41.0, 905.0], [41.1, 907.0], [41.2, 909.0], [41.3, 913.0], [41.4, 915.0], [41.5, 916.0], [41.6, 916.0], [41.7, 917.0], [41.8, 918.0], [41.9, 919.0], [42.0, 920.0], [42.1, 921.0], [42.2, 923.0], [42.3, 924.0], [42.4, 926.0], [42.5, 927.0], [42.6, 928.0], [42.7, 930.0], [42.8, 931.0], [42.9, 932.0], [43.0, 934.0], [43.1, 936.0], [43.2, 938.0], [43.3, 940.0], [43.4, 941.0], [43.5, 943.0], [43.6, 943.0], [43.7, 944.0], [43.8, 945.0], [43.9, 948.0], [44.0, 951.0], [44.1, 953.0], [44.2, 954.0], [44.3, 957.0], [44.4, 959.0], [44.5, 962.0], [44.6, 964.0], [44.7, 965.0], [44.8, 967.0], [44.9, 969.0], [45.0, 971.0], [45.1, 972.0], [45.2, 973.0], [45.3, 974.0], [45.4, 975.0], [45.5, 977.0], [45.6, 979.0], [45.7, 980.0], [45.8, 980.0], [45.9, 983.0], [46.0, 984.0], [46.1, 986.0], [46.2, 987.0], [46.3, 989.0], [46.4, 990.0], [46.5, 991.0], [46.6, 992.0], [46.7, 994.0], [46.8, 995.0], [46.9, 997.0], [47.0, 998.0], [47.1, 1000.0], [47.2, 1002.0], [47.3, 1004.0], [47.4, 1008.0], [47.5, 1009.0], [47.6, 1010.0], [47.7, 1011.0], [47.8, 1013.0], [47.9, 1014.0], [48.0, 1015.0], [48.1, 1016.0], [48.2, 1020.0], [48.3, 1022.0], [48.4, 1025.0], [48.5, 1027.0], [48.6, 1028.0], [48.7, 1030.0], [48.8, 1031.0], [48.9, 1035.0], [49.0, 1035.0], [49.1, 1036.0], [49.2, 1037.0], [49.3, 1038.0], [49.4, 1038.0], [49.5, 1040.0], [49.6, 1041.0], [49.7, 1042.0], [49.8, 1044.0], [49.9, 1045.0], [50.0, 1046.0], [50.1, 1048.0], [50.2, 1049.0], [50.3, 1050.0], [50.4, 1051.0], [50.5, 1054.0], [50.6, 1055.0], [50.7, 1055.0], [50.8, 1057.0], [50.9, 1059.0], [51.0, 1059.0], [51.1, 1061.0], [51.2, 1062.0], [51.3, 1063.0], [51.4, 1064.0], [51.5, 1065.0], [51.6, 1067.0], [51.7, 1069.0], [51.8, 1071.0], [51.9, 1072.0], [52.0, 1073.0], [52.1, 1074.0], [52.2, 1076.0], [52.3, 1076.0], [52.4, 1077.0], [52.5, 1078.0], [52.6, 1080.0], [52.7, 1081.0], [52.8, 1082.0], [52.9, 1086.0], [53.0, 1088.0], [53.1, 1088.0], [53.2, 1091.0], [53.3, 1091.0], [53.4, 1093.0], [53.5, 1095.0], [53.6, 1097.0], [53.7, 1098.0], [53.8, 1100.0], [53.9, 1102.0], [54.0, 1105.0], [54.1, 1106.0], [54.2, 1108.0], [54.3, 1110.0], [54.4, 1112.0], [54.5, 1115.0], [54.6, 1117.0], [54.7, 1118.0], [54.8, 1120.0], [54.9, 1121.0], [55.0, 1123.0], [55.1, 1125.0], [55.2, 1125.0], [55.3, 1127.0], [55.4, 1127.0], [55.5, 1128.0], [55.6, 1130.0], [55.7, 1132.0], [55.8, 1133.0], [55.9, 1134.0], [56.0, 1136.0], [56.1, 1137.0], [56.2, 1139.0], [56.3, 1140.0], [56.4, 1142.0], [56.5, 1144.0], [56.6, 1147.0], [56.7, 1148.0], [56.8, 1149.0], [56.9, 1150.0], [57.0, 1152.0], [57.1, 1154.0], [57.2, 1155.0], [57.3, 1157.0], [57.4, 1159.0], [57.5, 1161.0], [57.6, 1162.0], [57.7, 1164.0], [57.8, 1165.0], [57.9, 1165.0], [58.0, 1167.0], [58.1, 1168.0], [58.2, 1170.0], [58.3, 1171.0], [58.4, 1172.0], [58.5, 1173.0], [58.6, 1174.0], [58.7, 1176.0], [58.8, 1177.0], [58.9, 1178.0], [59.0, 1179.0], [59.1, 1180.0], [59.2, 1182.0], [59.3, 1187.0], [59.4, 1187.0], [59.5, 1188.0], [59.6, 1190.0], [59.7, 1192.0], [59.8, 1194.0], [59.9, 1195.0], [60.0, 1197.0], [60.1, 1198.0], [60.2, 1200.0], [60.3, 1201.0], [60.4, 1203.0], [60.5, 1205.0], [60.6, 1206.0], [60.7, 1209.0], [60.8, 1210.0], [60.9, 1215.0], [61.0, 1216.0], [61.1, 1217.0], [61.2, 1218.0], [61.3, 1220.0], [61.4, 1221.0], [61.5, 1222.0], [61.6, 1224.0], [61.7, 1226.0], [61.8, 1228.0], [61.9, 1230.0], [62.0, 1231.0], [62.1, 1234.0], [62.2, 1236.0], [62.3, 1238.0], [62.4, 1240.0], [62.5, 1241.0], [62.6, 1244.0], [62.7, 1246.0], [62.8, 1249.0], [62.9, 1250.0], [63.0, 1253.0], [63.1, 1255.0], [63.2, 1256.0], [63.3, 1258.0], [63.4, 1260.0], [63.5, 1262.0], [63.6, 1263.0], [63.7, 1265.0], [63.8, 1267.0], [63.9, 1271.0], [64.0, 1273.0], [64.1, 1276.0], [64.2, 1278.0], [64.3, 1281.0], [64.4, 1283.0], [64.5, 1284.0], [64.6, 1286.0], [64.7, 1288.0], [64.8, 1289.0], [64.9, 1291.0], [65.0, 1294.0], [65.1, 1296.0], [65.2, 1297.0], [65.3, 1298.0], [65.4, 1299.0], [65.5, 1301.0], [65.6, 1305.0], [65.7, 1306.0], [65.8, 1307.0], [65.9, 1309.0], [66.0, 1310.0], [66.1, 1312.0], [66.2, 1315.0], [66.3, 1316.0], [66.4, 1317.0], [66.5, 1319.0], [66.6, 1321.0], [66.7, 1324.0], [66.8, 1325.0], [66.9, 1326.0], [67.0, 1328.0], [67.1, 1331.0], [67.2, 1332.0], [67.3, 1336.0], [67.4, 1337.0], [67.5, 1340.0], [67.6, 1342.0], [67.7, 1343.0], [67.8, 1345.0], [67.9, 1347.0], [68.0, 1349.0], [68.1, 1352.0], [68.2, 1354.0], [68.3, 1356.0], [68.4, 1358.0], [68.5, 1360.0], [68.6, 1360.0], [68.7, 1362.0], [68.8, 1364.0], [68.9, 1366.0], [69.0, 1367.0], [69.1, 1369.0], [69.2, 1373.0], [69.3, 1374.0], [69.4, 1377.0], [69.5, 1378.0], [69.6, 1379.0], [69.7, 1381.0], [69.8, 1383.0], [69.9, 1385.0], [70.0, 1386.0], [70.1, 1388.0], [70.2, 1391.0], [70.3, 1394.0], [70.4, 1396.0], [70.5, 1398.0], [70.6, 1402.0], [70.7, 1404.0], [70.8, 1405.0], [70.9, 1407.0], [71.0, 1408.0], [71.1, 1410.0], [71.2, 1412.0], [71.3, 1413.0], [71.4, 1416.0], [71.5, 1419.0], [71.6, 1421.0], [71.7, 1423.0], [71.8, 1426.0], [71.9, 1427.0], [72.0, 1431.0], [72.1, 1433.0], [72.2, 1436.0], [72.3, 1437.0], [72.4, 1438.0], [72.5, 1441.0], [72.6, 1443.0], [72.7, 1445.0], [72.8, 1446.0], [72.9, 1449.0], [73.0, 1450.0], [73.1, 1451.0], [73.2, 1453.0], [73.3, 1455.0], [73.4, 1456.0], [73.5, 1458.0], [73.6, 1460.0], [73.7, 1463.0], [73.8, 1465.0], [73.9, 1467.0], [74.0, 1468.0], [74.1, 1470.0], [74.2, 1473.0], [74.3, 1476.0], [74.4, 1476.0], [74.5, 1477.0], [74.6, 1479.0], [74.7, 1480.0], [74.8, 1482.0], [74.9, 1484.0], [75.0, 1485.0], [75.1, 1489.0], [75.2, 1490.0], [75.3, 1492.0], [75.4, 1493.0], [75.5, 1495.0], [75.6, 1497.0], [75.7, 1499.0], [75.8, 1501.0], [75.9, 1503.0], [76.0, 1505.0], [76.1, 1506.0], [76.2, 1507.0], [76.3, 1508.0], [76.4, 1510.0], [76.5, 1513.0], [76.6, 1515.0], [76.7, 1518.0], [76.8, 1520.0], [76.9, 1523.0], [77.0, 1525.0], [77.1, 1529.0], [77.2, 1533.0], [77.3, 1535.0], [77.4, 1537.0], [77.5, 1539.0], [77.6, 1541.0], [77.7, 1542.0], [77.8, 1543.0], [77.9, 1546.0], [78.0, 1546.0], [78.1, 1548.0], [78.2, 1549.0], [78.3, 1552.0], [78.4, 1554.0], [78.5, 1556.0], [78.6, 1559.0], [78.7, 1561.0], [78.8, 1563.0], [78.9, 1564.0], [79.0, 1566.0], [79.1, 1567.0], [79.2, 1571.0], [79.3, 1572.0], [79.4, 1574.0], [79.5, 1576.0], [79.6, 1581.0], [79.7, 1582.0], [79.8, 1584.0], [79.9, 1589.0], [80.0, 1590.0], [80.1, 1591.0], [80.2, 1593.0], [80.3, 1595.0], [80.4, 1597.0], [80.5, 1599.0], [80.6, 1601.0], [80.7, 1603.0], [80.8, 1605.0], [80.9, 1607.0], [81.0, 1609.0], [81.1, 1614.0], [81.2, 1616.0], [81.3, 1618.0], [81.4, 1623.0], [81.5, 1625.0], [81.6, 1626.0], [81.7, 1629.0], [81.8, 1633.0], [81.9, 1635.0], [82.0, 1640.0], [82.1, 1642.0], [82.2, 1645.0], [82.3, 1649.0], [82.4, 1653.0], [82.5, 1656.0], [82.6, 1656.0], [82.7, 1659.0], [82.8, 1663.0], [82.9, 1665.0], [83.0, 1666.0], [83.1, 1670.0], [83.2, 1672.0], [83.3, 1676.0], [83.4, 1679.0], [83.5, 1680.0], [83.6, 1684.0], [83.7, 1686.0], [83.8, 1690.0], [83.9, 1694.0], [84.0, 1696.0], [84.1, 1698.0], [84.2, 1702.0], [84.3, 1704.0], [84.4, 1706.0], [84.5, 1712.0], [84.6, 1714.0], [84.7, 1719.0], [84.8, 1722.0], [84.9, 1724.0], [85.0, 1726.0], [85.1, 1727.0], [85.2, 1733.0], [85.3, 1737.0], [85.4, 1742.0], [85.5, 1743.0], [85.6, 1745.0], [85.7, 1749.0], [85.8, 1752.0], [85.9, 1758.0], [86.0, 1763.0], [86.1, 1765.0], [86.2, 1768.0], [86.3, 1774.0], [86.4, 1780.0], [86.5, 1781.0], [86.6, 1784.0], [86.7, 1790.0], [86.8, 1795.0], [86.9, 1805.0], [87.0, 1808.0], [87.1, 1815.0], [87.2, 1821.0], [87.3, 1823.0], [87.4, 1829.0], [87.5, 1839.0], [87.6, 1842.0], [87.7, 1847.0], [87.8, 1853.0], [87.9, 1856.0], [88.0, 1860.0], [88.1, 1863.0], [88.2, 1866.0], [88.3, 1868.0], [88.4, 1876.0], [88.5, 1879.0], [88.6, 1882.0], [88.7, 1888.0], [88.8, 1893.0], [88.9, 1903.0], [89.0, 1907.0], [89.1, 1914.0], [89.2, 1920.0], [89.3, 1928.0], [89.4, 1940.0], [89.5, 1951.0], [89.6, 1958.0], [89.7, 1962.0], [89.8, 1969.0], [89.9, 1974.0], [90.0, 1981.0], [90.1, 1987.0], [90.2, 1990.0], [90.3, 2000.0], [90.4, 2005.0], [90.5, 2015.0], [90.6, 2022.0], [90.7, 2025.0], [90.8, 2028.0], [90.9, 2034.0], [91.0, 2041.0], [91.1, 2052.0], [91.2, 2061.0], [91.3, 2065.0], [91.4, 2071.0], [91.5, 2079.0], [91.6, 2083.0], [91.7, 2091.0], [91.8, 2101.0], [91.9, 2113.0], [92.0, 2116.0], [92.1, 2121.0], [92.2, 2141.0], [92.3, 2153.0], [92.4, 2162.0], [92.5, 2176.0], [92.6, 2187.0], [92.7, 2191.0], [92.8, 2202.0], [92.9, 2209.0], [93.0, 2227.0], [93.1, 2233.0], [93.2, 2240.0], [93.3, 2246.0], [93.4, 2255.0], [93.5, 2260.0], [93.6, 2264.0], [93.7, 2276.0], [93.8, 2283.0], [93.9, 2288.0], [94.0, 2293.0], [94.1, 2298.0], [94.2, 2300.0], [94.3, 2306.0], [94.4, 2313.0], [94.5, 2320.0], [94.6, 2332.0], [94.7, 2339.0], [94.8, 2357.0], [94.9, 2366.0], [95.0, 2373.0], [95.1, 2390.0], [95.2, 2400.0], [95.3, 2411.0], [95.4, 2426.0], [95.5, 2432.0], [95.6, 2451.0], [95.7, 2454.0], [95.8, 2474.0], [95.9, 2497.0], [96.0, 2502.0], [96.1, 2521.0], [96.2, 2561.0], [96.3, 2572.0], [96.4, 2594.0], [96.5, 2600.0], [96.6, 2647.0], [96.7, 2672.0], [96.8, 2693.0], [96.9, 2729.0], [97.0, 2755.0], [97.1, 2778.0], [97.2, 2796.0], [97.3, 2824.0], [97.4, 2838.0], [97.5, 2860.0], [97.6, 2920.0], [97.7, 2963.0], [97.8, 2995.0], [97.9, 3011.0], [98.0, 3105.0], [98.1, 3172.0], [98.2, 3203.0], [98.3, 3250.0], [98.4, 3341.0], [98.5, 3391.0], [98.6, 3435.0], [98.7, 3498.0], [98.8, 3595.0], [98.9, 3655.0], [99.0, 3771.0], [99.1, 3856.0], [99.2, 4024.0], [99.3, 4109.0], [99.4, 4179.0], [99.5, 4345.0], [99.6, 4938.0], [99.7, 5245.0], [99.8, 5608.0], [99.9, 5981.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 530.0, "series": [{"data": [[600.0, 530.0], [700.0, 416.0], [800.0, 410.0], [900.0, 332.0], [1000.0, 348.0], [1100.0, 333.0], [1200.0, 272.0], [1300.0, 265.0], [1400.0, 269.0], [1500.0, 250.0], [1600.0, 188.0], [1700.0, 139.0], [1800.0, 106.0], [1900.0, 74.0], [2000.0, 77.0], [2100.0, 53.0], [2200.0, 71.0], [2300.0, 52.0], [2400.0, 40.0], [2500.0, 28.0], [2600.0, 19.0], [2800.0, 19.0], [2700.0, 19.0], [2900.0, 13.0], [3000.0, 9.0], [3100.0, 10.0], [3200.0, 9.0], [3300.0, 8.0], [3400.0, 10.0], [3500.0, 5.0], [3700.0, 4.0], [3600.0, 9.0], [3800.0, 4.0], [3900.0, 2.0], [4000.0, 6.0], [4100.0, 6.0], [4200.0, 4.0], [4300.0, 2.0], [4400.0, 2.0], [4500.0, 1.0], [4600.0, 1.0], [5100.0, 1.0], [5000.0, 2.0], [4900.0, 2.0], [5300.0, 1.0], [5200.0, 2.0], [5600.0, 4.0], [5400.0, 1.0], [5500.0, 1.0], [5700.0, 1.0], [5900.0, 1.0], [6300.0, 1.0], [6200.0, 1.0], [6500.0, 1.0], [6400.0, 1.0], [7200.0, 1.0], [200.0, 12.0], [300.0, 18.0], [400.0, 269.0], [500.0, 456.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 38.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3610.0, "series": [{"data": [[0.0, 300.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3610.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1243.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 38.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 38.8510324483776, "minX": 1.60189824E12, "maxY": 40.0, "series": [{"data": [[1.60189836E12, 40.0], [1.6018983E12, 40.0], [1.60189842E12, 38.8510324483776], [1.60189824E12, 40.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189842E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 513.0, "minX": 1.0, "maxY": 5097.0, "series": [{"data": [[32.0, 513.0], [2.0, 5097.0], [35.0, 1042.0], [34.0, 1246.0], [37.0, 975.0], [36.0, 704.0], [39.0, 3584.0], [38.0, 1480.0], [40.0, 1187.4660326086987], [3.0, 2421.0], [4.0, 2064.0], [5.0, 1375.0], [6.0, 2001.0], [7.0, 1263.0], [8.0, 1689.0], [9.0, 1304.0], [10.0, 2253.0], [11.0, 1741.0], [12.0, 1996.0], [13.0, 2560.0], [14.0, 1839.0], [15.0, 1010.0], [16.0, 1188.0], [1.0, 2750.0], [17.0, 928.0], [18.0, 2572.0], [19.0, 885.0], [20.0, 1076.0], [21.0, 927.0], [22.0, 1452.0], [23.0, 4179.0], [24.0, 1469.0], [25.0, 2260.0], [26.0, 606.0], [27.0, 3251.0], [28.0, 2096.0], [29.0, 1422.0], [30.0, 1014.0], [31.0, 1080.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.84993257561163, 1191.7516856097125]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2696.633333333333, "minX": 1.60189824E12, "maxY": 9636433.35, "series": [{"data": [[1.60189836E12, 9108755.816666666], [1.6018983E12, 9636433.35], [1.60189842E12, 2978989.433333333], [1.60189824E12, 1960528.8833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60189836E12, 14912.483333333334], [1.6018983E12, 15847.85], [1.60189842E12, 5127.083333333333], [1.60189824E12, 2696.633333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189842E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1131.862735849058, "minX": 1.60189824E12, "maxY": 1535.4986666666653, "series": [{"data": [[1.60189836E12, 1191.9345887016839], [1.6018983E12, 1131.862735849058], [1.60189842E12, 1188.3451327433636], [1.60189824E12, 1535.4986666666653]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189842E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1129.988679245287, "minX": 1.60189824E12, "maxY": 1533.2640000000008, "series": [{"data": [[1.60189836E12, 1190.1040634291376], [1.6018983E12, 1129.988679245287], [1.60189842E12, 1186.5840707964605], [1.60189824E12, 1533.2640000000008]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189842E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60189824E12, "maxY": 1.5199999999999994, "series": [{"data": [[1.60189836E12, 0.020317145688800824], [1.6018983E12, 0.019811320754716984], [1.60189842E12, 0.0], [1.60189824E12, 1.5199999999999994]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189842E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 201.0, "minX": 1.60189824E12, "maxY": 7221.0, "series": [{"data": [[1.60189836E12, 7221.0], [1.6018983E12, 5613.0], [1.60189842E12, 5097.0], [1.60189824E12, 6572.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60189836E12, 422.13499761223795], [1.6018983E12, 385.9259989953041], [1.60189842E12, 434.0569998395443], [1.60189824E12, 538.4899986624717]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60189836E12, 428.65940038204195], [1.6018983E12, 401.15580120563504], [1.60189842E12, 434.6627000641823], [1.60189824E12, 543.5390005350113]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60189836E12, 427.0569995224476], [1.6018983E12, 396.0989984929561], [1.60189842E12, 434.3934999197721], [1.60189824E12, 541.2949993312359]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60189836E12, 273.0], [1.6018983E12, 201.0], [1.60189842E12, 420.0], [1.60189824E12, 472.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60189836E12, 1038.5], [1.6018983E12, 980.0], [1.60189842E12, 1081.5], [1.60189824E12, 1164.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189842E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 544.5, "minX": 2.0, "maxY": 6278.0, "series": [{"data": [[32.0, 1153.0], [33.0, 1177.0], [2.0, 3923.5], [34.0, 1036.0], [35.0, 1095.5], [37.0, 991.0], [36.0, 1057.0], [38.0, 968.0], [39.0, 764.0], [41.0, 935.5], [40.0, 802.5], [42.0, 837.0], [43.0, 894.0], [44.0, 919.0], [45.0, 699.0], [46.0, 692.0], [48.0, 605.5], [51.0, 594.0], [50.0, 618.5], [52.0, 556.5], [57.0, 560.0], [58.0, 544.5], [67.0, 565.0], [65.0, 771.0], [5.0, 2001.0], [13.0, 3011.0], [18.0, 1495.5], [20.0, 1349.0], [22.0, 1346.0], [23.0, 1350.0], [24.0, 1263.5], [25.0, 1288.0], [26.0, 1298.0], [27.0, 1338.5], [28.0, 1285.0], [29.0, 1197.5], [30.0, 1177.0], [31.0, 1102.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 1547.0], [35.0, 1262.0], [34.0, 868.0], [37.0, 1559.0], [36.0, 1275.0], [38.0, 1045.0], [41.0, 1684.0], [42.0, 825.0], [43.0, 6278.0], [44.0, 1147.5], [23.0, 1861.0], [27.0, 680.0], [28.0, 1780.0], [30.0, 1442.5], [31.0, 949.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 544.5, "minX": 2.0, "maxY": 6278.0, "series": [{"data": [[32.0, 1153.0], [33.0, 1177.0], [2.0, 3912.5], [34.0, 1033.0], [35.0, 1093.5], [37.0, 989.0], [36.0, 1056.0], [38.0, 966.0], [39.0, 764.0], [41.0, 935.0], [40.0, 801.0], [42.0, 836.0], [43.0, 892.0], [44.0, 919.0], [45.0, 698.0], [46.0, 691.5], [48.0, 605.5], [51.0, 594.0], [50.0, 618.5], [52.0, 556.5], [57.0, 560.0], [58.0, 544.5], [67.0, 565.0], [65.0, 771.0], [5.0, 1990.0], [13.0, 3011.0], [18.0, 1492.0], [20.0, 1346.0], [22.0, 1344.0], [23.0, 1348.5], [24.0, 1261.5], [25.0, 1288.0], [26.0, 1294.0], [27.0, 1337.0], [28.0, 1281.5], [29.0, 1196.5], [30.0, 1176.0], [31.0, 1101.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 1547.0], [35.0, 1262.0], [34.0, 868.0], [37.0, 1559.0], [36.0, 1275.0], [38.0, 1045.0], [41.0, 1684.0], [42.0, 825.0], [43.0, 6278.0], [44.0, 1147.5], [23.0, 1861.0], [27.0, 680.0], [28.0, 1780.0], [30.0, 1442.5], [31.0, 949.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.916666666666667, "minX": 1.60189824E12, "maxY": 35.333333333333336, "series": [{"data": [[1.60189836E12, 33.63333333333333], [1.6018983E12, 35.333333333333336], [1.60189842E12, 10.633333333333333], [1.60189824E12, 6.916666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189842E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60189824E12, "maxY": 35.1, "series": [{"data": [[1.60189836E12, 33.36666666666667], [1.6018983E12, 35.1], [1.60189842E12, 11.2], [1.60189824E12, 6.216666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6018983E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.60189836E12, 0.26666666666666666], [1.6018983E12, 0.21666666666666667], [1.60189842E12, 0.1], [1.60189824E12, 0.03333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189842E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60189824E12, "maxY": 35.1, "series": [{"data": [[1.60189836E12, 33.36666666666667], [1.6018983E12, 35.1], [1.60189842E12, 11.2], [1.60189824E12, 6.216666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60189836E12, 0.26666666666666666], [1.6018983E12, 0.23333333333333334], [1.60189842E12, 0.1], [1.60189824E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189842E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60189824E12, "maxY": 35.1, "series": [{"data": [[1.60189836E12, 33.36666666666667], [1.6018983E12, 35.1], [1.60189842E12, 11.2], [1.60189824E12, 6.216666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60189836E12, 0.26666666666666666], [1.6018983E12, 0.23333333333333334], [1.60189842E12, 0.1], [1.60189824E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189842E12, "title": "Total Transactions Per Second"}},
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

