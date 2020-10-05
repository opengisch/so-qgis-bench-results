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
        data: {"result": {"minY": 202.0, "minX": 0.0, "maxY": 6830.0, "series": [{"data": [[0.0, 202.0], [0.1, 243.0], [0.2, 289.0], [0.3, 323.0], [0.4, 404.0], [0.5, 407.0], [0.6, 409.0], [0.7, 411.0], [0.8, 413.0], [0.9, 418.0], [1.0, 421.0], [1.1, 423.0], [1.2, 425.0], [1.3, 427.0], [1.4, 431.0], [1.5, 432.0], [1.6, 434.0], [1.7, 435.0], [1.8, 436.0], [1.9, 437.0], [2.0, 439.0], [2.1, 440.0], [2.2, 441.0], [2.3, 442.0], [2.4, 444.0], [2.5, 445.0], [2.6, 447.0], [2.7, 448.0], [2.8, 449.0], [2.9, 451.0], [3.0, 453.0], [3.1, 454.0], [3.2, 454.0], [3.3, 456.0], [3.4, 457.0], [3.5, 458.0], [3.6, 460.0], [3.7, 463.0], [3.8, 464.0], [3.9, 465.0], [4.0, 467.0], [4.1, 468.0], [4.2, 470.0], [4.3, 471.0], [4.4, 473.0], [4.5, 474.0], [4.6, 475.0], [4.7, 476.0], [4.8, 478.0], [4.9, 479.0], [5.0, 481.0], [5.1, 482.0], [5.2, 483.0], [5.3, 485.0], [5.4, 487.0], [5.5, 488.0], [5.6, 489.0], [5.7, 490.0], [5.8, 492.0], [5.9, 494.0], [6.0, 495.0], [6.1, 497.0], [6.2, 498.0], [6.3, 499.0], [6.4, 500.0], [6.5, 501.0], [6.6, 502.0], [6.7, 503.0], [6.8, 504.0], [6.9, 507.0], [7.0, 508.0], [7.1, 510.0], [7.2, 511.0], [7.3, 512.0], [7.4, 513.0], [7.5, 514.0], [7.6, 515.0], [7.7, 515.0], [7.8, 517.0], [7.9, 518.0], [8.0, 519.0], [8.1, 521.0], [8.2, 522.0], [8.3, 523.0], [8.4, 523.0], [8.5, 524.0], [8.6, 525.0], [8.7, 526.0], [8.8, 528.0], [8.9, 529.0], [9.0, 529.0], [9.1, 530.0], [9.2, 531.0], [9.3, 532.0], [9.4, 533.0], [9.5, 535.0], [9.6, 537.0], [9.7, 539.0], [9.8, 539.0], [9.9, 540.0], [10.0, 542.0], [10.1, 543.0], [10.2, 544.0], [10.3, 546.0], [10.4, 548.0], [10.5, 549.0], [10.6, 550.0], [10.7, 552.0], [10.8, 553.0], [10.9, 554.0], [11.0, 556.0], [11.1, 558.0], [11.2, 559.0], [11.3, 560.0], [11.4, 560.0], [11.5, 561.0], [11.6, 563.0], [11.7, 563.0], [11.8, 564.0], [11.9, 565.0], [12.0, 567.0], [12.1, 568.0], [12.2, 569.0], [12.3, 570.0], [12.4, 570.0], [12.5, 571.0], [12.6, 572.0], [12.7, 572.0], [12.8, 573.0], [12.9, 574.0], [13.0, 574.0], [13.1, 575.0], [13.2, 578.0], [13.3, 578.0], [13.4, 578.0], [13.5, 580.0], [13.6, 581.0], [13.7, 582.0], [13.8, 584.0], [13.9, 585.0], [14.0, 585.0], [14.1, 587.0], [14.2, 588.0], [14.3, 588.0], [14.4, 589.0], [14.5, 591.0], [14.6, 592.0], [14.7, 594.0], [14.8, 595.0], [14.9, 596.0], [15.0, 597.0], [15.1, 597.0], [15.2, 599.0], [15.3, 600.0], [15.4, 601.0], [15.5, 602.0], [15.6, 603.0], [15.7, 604.0], [15.8, 604.0], [15.9, 606.0], [16.0, 607.0], [16.1, 607.0], [16.2, 608.0], [16.3, 609.0], [16.4, 610.0], [16.5, 611.0], [16.6, 612.0], [16.7, 613.0], [16.8, 615.0], [16.9, 616.0], [17.0, 617.0], [17.1, 618.0], [17.2, 618.0], [17.3, 619.0], [17.4, 620.0], [17.5, 622.0], [17.6, 622.0], [17.7, 624.0], [17.8, 626.0], [17.9, 628.0], [18.0, 629.0], [18.1, 630.0], [18.2, 631.0], [18.3, 632.0], [18.4, 634.0], [18.5, 635.0], [18.6, 636.0], [18.7, 637.0], [18.8, 638.0], [18.9, 639.0], [19.0, 640.0], [19.1, 641.0], [19.2, 641.0], [19.3, 641.0], [19.4, 643.0], [19.5, 645.0], [19.6, 646.0], [19.7, 646.0], [19.8, 647.0], [19.9, 648.0], [20.0, 649.0], [20.1, 650.0], [20.2, 651.0], [20.3, 652.0], [20.4, 653.0], [20.5, 655.0], [20.6, 655.0], [20.7, 656.0], [20.8, 657.0], [20.9, 659.0], [21.0, 660.0], [21.1, 661.0], [21.2, 662.0], [21.3, 663.0], [21.4, 665.0], [21.5, 666.0], [21.6, 667.0], [21.7, 668.0], [21.8, 669.0], [21.9, 670.0], [22.0, 671.0], [22.1, 671.0], [22.2, 672.0], [22.3, 673.0], [22.4, 674.0], [22.5, 674.0], [22.6, 675.0], [22.7, 676.0], [22.8, 676.0], [22.9, 678.0], [23.0, 678.0], [23.1, 681.0], [23.2, 682.0], [23.3, 683.0], [23.4, 686.0], [23.5, 688.0], [23.6, 689.0], [23.7, 690.0], [23.8, 691.0], [23.9, 692.0], [24.0, 693.0], [24.1, 693.0], [24.2, 694.0], [24.3, 696.0], [24.4, 696.0], [24.5, 697.0], [24.6, 697.0], [24.7, 700.0], [24.8, 701.0], [24.9, 701.0], [25.0, 701.0], [25.1, 703.0], [25.2, 705.0], [25.3, 705.0], [25.4, 707.0], [25.5, 708.0], [25.6, 709.0], [25.7, 711.0], [25.8, 712.0], [25.9, 712.0], [26.0, 714.0], [26.1, 715.0], [26.2, 716.0], [26.3, 717.0], [26.4, 718.0], [26.5, 720.0], [26.6, 721.0], [26.7, 721.0], [26.8, 722.0], [26.9, 723.0], [27.0, 724.0], [27.1, 726.0], [27.2, 727.0], [27.3, 728.0], [27.4, 729.0], [27.5, 729.0], [27.6, 731.0], [27.7, 732.0], [27.8, 733.0], [27.9, 735.0], [28.0, 736.0], [28.1, 737.0], [28.2, 738.0], [28.3, 739.0], [28.4, 740.0], [28.5, 741.0], [28.6, 742.0], [28.7, 743.0], [28.8, 744.0], [28.9, 745.0], [29.0, 746.0], [29.1, 748.0], [29.2, 749.0], [29.3, 750.0], [29.4, 751.0], [29.5, 751.0], [29.6, 752.0], [29.7, 754.0], [29.8, 755.0], [29.9, 755.0], [30.0, 756.0], [30.1, 757.0], [30.2, 759.0], [30.3, 760.0], [30.4, 762.0], [30.5, 762.0], [30.6, 764.0], [30.7, 766.0], [30.8, 766.0], [30.9, 767.0], [31.0, 769.0], [31.1, 770.0], [31.2, 771.0], [31.3, 772.0], [31.4, 773.0], [31.5, 774.0], [31.6, 775.0], [31.7, 777.0], [31.8, 778.0], [31.9, 778.0], [32.0, 780.0], [32.1, 781.0], [32.2, 782.0], [32.3, 784.0], [32.4, 785.0], [32.5, 786.0], [32.6, 787.0], [32.7, 788.0], [32.8, 789.0], [32.9, 790.0], [33.0, 792.0], [33.1, 793.0], [33.2, 795.0], [33.3, 795.0], [33.4, 796.0], [33.5, 797.0], [33.6, 798.0], [33.7, 799.0], [33.8, 801.0], [33.9, 802.0], [34.0, 803.0], [34.1, 804.0], [34.2, 806.0], [34.3, 807.0], [34.4, 808.0], [34.5, 809.0], [34.6, 810.0], [34.7, 811.0], [34.8, 812.0], [34.9, 813.0], [35.0, 814.0], [35.1, 816.0], [35.2, 816.0], [35.3, 817.0], [35.4, 819.0], [35.5, 820.0], [35.6, 821.0], [35.7, 822.0], [35.8, 823.0], [35.9, 825.0], [36.0, 826.0], [36.1, 828.0], [36.2, 829.0], [36.3, 831.0], [36.4, 833.0], [36.5, 834.0], [36.6, 836.0], [36.7, 837.0], [36.8, 837.0], [36.9, 839.0], [37.0, 841.0], [37.1, 841.0], [37.2, 843.0], [37.3, 845.0], [37.4, 846.0], [37.5, 848.0], [37.6, 849.0], [37.7, 850.0], [37.8, 852.0], [37.9, 853.0], [38.0, 854.0], [38.1, 856.0], [38.2, 857.0], [38.3, 858.0], [38.4, 859.0], [38.5, 861.0], [38.6, 862.0], [38.7, 863.0], [38.8, 866.0], [38.9, 868.0], [39.0, 870.0], [39.1, 872.0], [39.2, 873.0], [39.3, 876.0], [39.4, 878.0], [39.5, 878.0], [39.6, 879.0], [39.7, 879.0], [39.8, 881.0], [39.9, 883.0], [40.0, 885.0], [40.1, 886.0], [40.2, 888.0], [40.3, 890.0], [40.4, 891.0], [40.5, 893.0], [40.6, 894.0], [40.7, 897.0], [40.8, 898.0], [40.9, 899.0], [41.0, 902.0], [41.1, 904.0], [41.2, 906.0], [41.3, 906.0], [41.4, 907.0], [41.5, 910.0], [41.6, 913.0], [41.7, 913.0], [41.8, 914.0], [41.9, 915.0], [42.0, 916.0], [42.1, 918.0], [42.2, 919.0], [42.3, 921.0], [42.4, 922.0], [42.5, 924.0], [42.6, 926.0], [42.7, 927.0], [42.8, 929.0], [42.9, 932.0], [43.0, 933.0], [43.1, 934.0], [43.2, 936.0], [43.3, 938.0], [43.4, 940.0], [43.5, 942.0], [43.6, 943.0], [43.7, 943.0], [43.8, 945.0], [43.9, 946.0], [44.0, 948.0], [44.1, 948.0], [44.2, 950.0], [44.3, 951.0], [44.4, 953.0], [44.5, 953.0], [44.6, 956.0], [44.7, 956.0], [44.8, 959.0], [44.9, 960.0], [45.0, 960.0], [45.1, 962.0], [45.2, 963.0], [45.3, 965.0], [45.4, 966.0], [45.5, 968.0], [45.6, 970.0], [45.7, 971.0], [45.8, 973.0], [45.9, 975.0], [46.0, 976.0], [46.1, 977.0], [46.2, 979.0], [46.3, 981.0], [46.4, 983.0], [46.5, 985.0], [46.6, 986.0], [46.7, 988.0], [46.8, 990.0], [46.9, 992.0], [47.0, 993.0], [47.1, 995.0], [47.2, 995.0], [47.3, 996.0], [47.4, 998.0], [47.5, 999.0], [47.6, 999.0], [47.7, 1000.0], [47.8, 1002.0], [47.9, 1003.0], [48.0, 1005.0], [48.1, 1006.0], [48.2, 1008.0], [48.3, 1010.0], [48.4, 1011.0], [48.5, 1012.0], [48.6, 1013.0], [48.7, 1015.0], [48.8, 1017.0], [48.9, 1019.0], [49.0, 1020.0], [49.1, 1020.0], [49.2, 1021.0], [49.3, 1022.0], [49.4, 1025.0], [49.5, 1026.0], [49.6, 1028.0], [49.7, 1030.0], [49.8, 1031.0], [49.9, 1033.0], [50.0, 1034.0], [50.1, 1035.0], [50.2, 1036.0], [50.3, 1037.0], [50.4, 1038.0], [50.5, 1040.0], [50.6, 1042.0], [50.7, 1044.0], [50.8, 1045.0], [50.9, 1046.0], [51.0, 1048.0], [51.1, 1049.0], [51.2, 1051.0], [51.3, 1052.0], [51.4, 1054.0], [51.5, 1055.0], [51.6, 1055.0], [51.7, 1057.0], [51.8, 1059.0], [51.9, 1061.0], [52.0, 1063.0], [52.1, 1065.0], [52.2, 1065.0], [52.3, 1067.0], [52.4, 1068.0], [52.5, 1069.0], [52.6, 1070.0], [52.7, 1072.0], [52.8, 1073.0], [52.9, 1076.0], [53.0, 1078.0], [53.1, 1079.0], [53.2, 1080.0], [53.3, 1081.0], [53.4, 1082.0], [53.5, 1083.0], [53.6, 1084.0], [53.7, 1086.0], [53.8, 1087.0], [53.9, 1087.0], [54.0, 1090.0], [54.1, 1093.0], [54.2, 1094.0], [54.3, 1095.0], [54.4, 1096.0], [54.5, 1097.0], [54.6, 1098.0], [54.7, 1099.0], [54.8, 1100.0], [54.9, 1101.0], [55.0, 1103.0], [55.1, 1104.0], [55.2, 1105.0], [55.3, 1106.0], [55.4, 1107.0], [55.5, 1109.0], [55.6, 1111.0], [55.7, 1112.0], [55.8, 1113.0], [55.9, 1115.0], [56.0, 1118.0], [56.1, 1119.0], [56.2, 1120.0], [56.3, 1121.0], [56.4, 1122.0], [56.5, 1123.0], [56.6, 1125.0], [56.7, 1127.0], [56.8, 1128.0], [56.9, 1130.0], [57.0, 1132.0], [57.1, 1134.0], [57.2, 1135.0], [57.3, 1136.0], [57.4, 1139.0], [57.5, 1140.0], [57.6, 1142.0], [57.7, 1143.0], [57.8, 1145.0], [57.9, 1147.0], [58.0, 1148.0], [58.1, 1149.0], [58.2, 1151.0], [58.3, 1153.0], [58.4, 1154.0], [58.5, 1158.0], [58.6, 1160.0], [58.7, 1163.0], [58.8, 1167.0], [58.9, 1169.0], [59.0, 1169.0], [59.1, 1172.0], [59.2, 1173.0], [59.3, 1174.0], [59.4, 1175.0], [59.5, 1176.0], [59.6, 1177.0], [59.7, 1178.0], [59.8, 1179.0], [59.9, 1181.0], [60.0, 1182.0], [60.1, 1184.0], [60.2, 1186.0], [60.3, 1187.0], [60.4, 1189.0], [60.5, 1191.0], [60.6, 1192.0], [60.7, 1194.0], [60.8, 1198.0], [60.9, 1200.0], [61.0, 1201.0], [61.1, 1203.0], [61.2, 1205.0], [61.3, 1207.0], [61.4, 1208.0], [61.5, 1210.0], [61.6, 1211.0], [61.7, 1215.0], [61.8, 1216.0], [61.9, 1219.0], [62.0, 1220.0], [62.1, 1223.0], [62.2, 1226.0], [62.3, 1228.0], [62.4, 1230.0], [62.5, 1232.0], [62.6, 1233.0], [62.7, 1237.0], [62.8, 1239.0], [62.9, 1241.0], [63.0, 1244.0], [63.1, 1245.0], [63.2, 1246.0], [63.3, 1249.0], [63.4, 1251.0], [63.5, 1252.0], [63.6, 1255.0], [63.7, 1256.0], [63.8, 1257.0], [63.9, 1258.0], [64.0, 1260.0], [64.1, 1261.0], [64.2, 1263.0], [64.3, 1265.0], [64.4, 1266.0], [64.5, 1268.0], [64.6, 1270.0], [64.7, 1271.0], [64.8, 1273.0], [64.9, 1275.0], [65.0, 1277.0], [65.1, 1278.0], [65.2, 1280.0], [65.3, 1282.0], [65.4, 1283.0], [65.5, 1284.0], [65.6, 1287.0], [65.7, 1287.0], [65.8, 1290.0], [65.9, 1293.0], [66.0, 1295.0], [66.1, 1297.0], [66.2, 1299.0], [66.3, 1303.0], [66.4, 1305.0], [66.5, 1307.0], [66.6, 1310.0], [66.7, 1312.0], [66.8, 1315.0], [66.9, 1316.0], [67.0, 1317.0], [67.1, 1319.0], [67.2, 1321.0], [67.3, 1323.0], [67.4, 1325.0], [67.5, 1326.0], [67.6, 1329.0], [67.7, 1333.0], [67.8, 1334.0], [67.9, 1337.0], [68.0, 1338.0], [68.1, 1341.0], [68.2, 1342.0], [68.3, 1344.0], [68.4, 1348.0], [68.5, 1349.0], [68.6, 1351.0], [68.7, 1352.0], [68.8, 1354.0], [68.9, 1357.0], [69.0, 1361.0], [69.1, 1362.0], [69.2, 1366.0], [69.3, 1369.0], [69.4, 1370.0], [69.5, 1372.0], [69.6, 1372.0], [69.7, 1374.0], [69.8, 1376.0], [69.9, 1377.0], [70.0, 1378.0], [70.1, 1380.0], [70.2, 1383.0], [70.3, 1384.0], [70.4, 1386.0], [70.5, 1389.0], [70.6, 1389.0], [70.7, 1391.0], [70.8, 1394.0], [70.9, 1396.0], [71.0, 1399.0], [71.1, 1401.0], [71.2, 1402.0], [71.3, 1405.0], [71.4, 1407.0], [71.5, 1408.0], [71.6, 1409.0], [71.7, 1411.0], [71.8, 1415.0], [71.9, 1417.0], [72.0, 1419.0], [72.1, 1422.0], [72.2, 1423.0], [72.3, 1424.0], [72.4, 1425.0], [72.5, 1427.0], [72.6, 1429.0], [72.7, 1431.0], [72.8, 1436.0], [72.9, 1437.0], [73.0, 1438.0], [73.1, 1439.0], [73.2, 1442.0], [73.3, 1444.0], [73.4, 1446.0], [73.5, 1447.0], [73.6, 1448.0], [73.7, 1450.0], [73.8, 1451.0], [73.9, 1454.0], [74.0, 1456.0], [74.1, 1457.0], [74.2, 1459.0], [74.3, 1461.0], [74.4, 1462.0], [74.5, 1464.0], [74.6, 1465.0], [74.7, 1466.0], [74.8, 1467.0], [74.9, 1469.0], [75.0, 1471.0], [75.1, 1472.0], [75.2, 1474.0], [75.3, 1475.0], [75.4, 1478.0], [75.5, 1479.0], [75.6, 1481.0], [75.7, 1482.0], [75.8, 1483.0], [75.9, 1487.0], [76.0, 1488.0], [76.1, 1489.0], [76.2, 1490.0], [76.3, 1493.0], [76.4, 1495.0], [76.5, 1497.0], [76.6, 1498.0], [76.7, 1500.0], [76.8, 1504.0], [76.9, 1505.0], [77.0, 1507.0], [77.1, 1509.0], [77.2, 1512.0], [77.3, 1515.0], [77.4, 1518.0], [77.5, 1520.0], [77.6, 1522.0], [77.7, 1524.0], [77.8, 1526.0], [77.9, 1527.0], [78.0, 1529.0], [78.1, 1531.0], [78.2, 1532.0], [78.3, 1534.0], [78.4, 1535.0], [78.5, 1536.0], [78.6, 1539.0], [78.7, 1542.0], [78.8, 1545.0], [78.9, 1549.0], [79.0, 1551.0], [79.1, 1555.0], [79.2, 1556.0], [79.3, 1558.0], [79.4, 1560.0], [79.5, 1563.0], [79.6, 1566.0], [79.7, 1568.0], [79.8, 1571.0], [79.9, 1574.0], [80.0, 1576.0], [80.1, 1578.0], [80.2, 1582.0], [80.3, 1584.0], [80.4, 1584.0], [80.5, 1589.0], [80.6, 1592.0], [80.7, 1594.0], [80.8, 1598.0], [80.9, 1600.0], [81.0, 1602.0], [81.1, 1603.0], [81.2, 1606.0], [81.3, 1611.0], [81.4, 1613.0], [81.5, 1616.0], [81.6, 1617.0], [81.7, 1620.0], [81.8, 1624.0], [81.9, 1626.0], [82.0, 1630.0], [82.1, 1633.0], [82.2, 1636.0], [82.3, 1640.0], [82.4, 1641.0], [82.5, 1644.0], [82.6, 1645.0], [82.7, 1648.0], [82.8, 1650.0], [82.9, 1651.0], [83.0, 1653.0], [83.1, 1654.0], [83.2, 1657.0], [83.3, 1660.0], [83.4, 1661.0], [83.5, 1664.0], [83.6, 1665.0], [83.7, 1668.0], [83.8, 1672.0], [83.9, 1674.0], [84.0, 1677.0], [84.1, 1680.0], [84.2, 1683.0], [84.3, 1687.0], [84.4, 1693.0], [84.5, 1697.0], [84.6, 1701.0], [84.7, 1705.0], [84.8, 1710.0], [84.9, 1711.0], [85.0, 1715.0], [85.1, 1720.0], [85.2, 1725.0], [85.3, 1729.0], [85.4, 1734.0], [85.5, 1738.0], [85.6, 1740.0], [85.7, 1742.0], [85.8, 1745.0], [85.9, 1753.0], [86.0, 1759.0], [86.1, 1764.0], [86.2, 1770.0], [86.3, 1777.0], [86.4, 1782.0], [86.5, 1786.0], [86.6, 1792.0], [86.7, 1797.0], [86.8, 1802.0], [86.9, 1807.0], [87.0, 1812.0], [87.1, 1816.0], [87.2, 1818.0], [87.3, 1827.0], [87.4, 1833.0], [87.5, 1837.0], [87.6, 1840.0], [87.7, 1842.0], [87.8, 1848.0], [87.9, 1853.0], [88.0, 1858.0], [88.1, 1869.0], [88.2, 1873.0], [88.3, 1876.0], [88.4, 1879.0], [88.5, 1887.0], [88.6, 1891.0], [88.7, 1896.0], [88.8, 1899.0], [88.9, 1905.0], [89.0, 1909.0], [89.1, 1915.0], [89.2, 1918.0], [89.3, 1922.0], [89.4, 1929.0], [89.5, 1936.0], [89.6, 1944.0], [89.7, 1951.0], [89.8, 1956.0], [89.9, 1963.0], [90.0, 1966.0], [90.1, 1970.0], [90.2, 1975.0], [90.3, 1978.0], [90.4, 1982.0], [90.5, 1989.0], [90.6, 1995.0], [90.7, 2000.0], [90.8, 2007.0], [90.9, 2015.0], [91.0, 2026.0], [91.1, 2032.0], [91.2, 2038.0], [91.3, 2047.0], [91.4, 2053.0], [91.5, 2062.0], [91.6, 2070.0], [91.7, 2081.0], [91.8, 2088.0], [91.9, 2095.0], [92.0, 2099.0], [92.1, 2117.0], [92.2, 2127.0], [92.3, 2135.0], [92.4, 2148.0], [92.5, 2154.0], [92.6, 2166.0], [92.7, 2174.0], [92.8, 2183.0], [92.9, 2192.0], [93.0, 2195.0], [93.1, 2204.0], [93.2, 2217.0], [93.3, 2224.0], [93.4, 2227.0], [93.5, 2242.0], [93.6, 2247.0], [93.7, 2257.0], [93.8, 2264.0], [93.9, 2271.0], [94.0, 2282.0], [94.1, 2296.0], [94.2, 2301.0], [94.3, 2311.0], [94.4, 2320.0], [94.5, 2323.0], [94.6, 2335.0], [94.7, 2340.0], [94.8, 2353.0], [94.9, 2373.0], [95.0, 2378.0], [95.1, 2384.0], [95.2, 2394.0], [95.3, 2405.0], [95.4, 2413.0], [95.5, 2430.0], [95.6, 2445.0], [95.7, 2464.0], [95.8, 2469.0], [95.9, 2481.0], [96.0, 2495.0], [96.1, 2521.0], [96.2, 2552.0], [96.3, 2561.0], [96.4, 2582.0], [96.5, 2607.0], [96.6, 2615.0], [96.7, 2653.0], [96.8, 2687.0], [96.9, 2705.0], [97.0, 2734.0], [97.1, 2756.0], [97.2, 2787.0], [97.3, 2797.0], [97.4, 2828.0], [97.5, 2868.0], [97.6, 2896.0], [97.7, 2921.0], [97.8, 2950.0], [97.9, 2967.0], [98.0, 3026.0], [98.1, 3057.0], [98.2, 3089.0], [98.3, 3119.0], [98.4, 3146.0], [98.5, 3246.0], [98.6, 3301.0], [98.7, 3327.0], [98.8, 3491.0], [98.9, 3596.0], [99.0, 3700.0], [99.1, 3857.0], [99.2, 3922.0], [99.3, 4140.0], [99.4, 4259.0], [99.5, 4376.0], [99.6, 4590.0], [99.7, 5273.0], [99.8, 5575.0], [99.9, 5896.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 491.0, "series": [{"data": [[600.0, 491.0], [700.0, 469.0], [800.0, 374.0], [900.0, 348.0], [1000.0, 370.0], [1100.0, 315.0], [1200.0, 279.0], [1300.0, 250.0], [1400.0, 293.0], [1500.0, 219.0], [1600.0, 191.0], [1700.0, 114.0], [1800.0, 106.0], [1900.0, 98.0], [2000.0, 68.0], [2100.0, 53.0], [2300.0, 58.0], [2200.0, 57.0], [2400.0, 40.0], [2500.0, 24.0], [2600.0, 21.0], [2700.0, 23.0], [2800.0, 15.0], [2900.0, 17.0], [3000.0, 15.0], [3100.0, 12.0], [3300.0, 8.0], [3200.0, 7.0], [3400.0, 4.0], [3500.0, 4.0], [3600.0, 5.0], [3700.0, 2.0], [3800.0, 6.0], [3900.0, 6.0], [4000.0, 1.0], [4200.0, 4.0], [4300.0, 8.0], [4100.0, 3.0], [4500.0, 1.0], [4400.0, 1.0], [5000.0, 1.0], [5100.0, 2.0], [4900.0, 1.0], [5300.0, 1.0], [5200.0, 1.0], [5500.0, 3.0], [5400.0, 1.0], [5600.0, 1.0], [5800.0, 2.0], [5700.0, 2.0], [5900.0, 1.0], [6100.0, 1.0], [6600.0, 1.0], [6700.0, 1.0], [6800.0, 1.0], [200.0, 12.0], [300.0, 8.0], [400.0, 311.0], [500.0, 460.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 44.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3617.0, "series": [{"data": [[0.0, 332.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3617.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1198.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 44.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 39.390625, "minX": 1.601898E12, "maxY": 40.0, "series": [{"data": [[1.60189806E12, 40.0], [1.601898E12, 40.0], [1.60189812E12, 39.390625]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189812E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 754.0, "minX": 1.0, "maxY": 4140.0, "series": [{"data": [[33.0, 1530.0], [32.0, 778.0], [2.0, 2324.0], [35.0, 1177.0], [34.0, 3121.0], [37.0, 1976.0], [36.0, 1535.0], [39.0, 2097.0], [38.0, 1437.0], [40.0, 1177.3592779503056], [3.0, 1740.0], [4.0, 3402.0], [5.0, 2271.0], [6.0, 1673.0], [7.0, 1989.0], [8.0, 2752.0], [9.0, 1452.0], [10.0, 1429.0], [11.0, 2778.0], [12.0, 3795.0], [13.0, 1693.0], [14.0, 1165.0], [15.0, 1621.0], [16.0, 1732.0], [1.0, 2724.0], [17.0, 820.0], [18.0, 1153.0], [19.0, 755.0], [20.0, 850.0], [21.0, 2031.0], [22.0, 4140.0], [23.0, 754.0], [24.0, 917.0], [25.0, 917.0], [26.0, 877.0], [27.0, 3057.0], [28.0, 1019.0], [29.0, 778.0], [30.0, 830.0], [31.0, 1003.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.84973993450205, 1181.6310922750868]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9691.55, "minX": 1.601898E12, "maxY": 9181569.366666667, "series": [{"data": [[1.60189806E12, 9181569.366666667], [1.601898E12, 8943113.866666667], [1.60189812E12, 5565858.166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60189806E12, 14787.1], [1.601898E12, 14105.4], [1.60189812E12, 9691.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189812E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1119.3640625000035, "minX": 1.601898E12, "maxY": 1210.5563712637643, "series": [{"data": [[1.60189806E12, 1193.8772455089822], [1.601898E12, 1210.5563712637643], [1.60189812E12, 1119.3640625000035]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189812E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1117.574218749999, "minX": 1.601898E12, "maxY": 1208.6255899318294, "series": [{"data": [[1.60189806E12, 1192.0543912175658], [1.601898E12, 1208.6255899318294], [1.60189812E12, 1117.574218749999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189812E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.02145708582834335, "minX": 1.601898E12, "maxY": 0.2412165705296277, "series": [{"data": [[1.60189806E12, 0.02145708582834335], [1.601898E12, 0.2412165705296277], [1.60189812E12, 0.0304687500000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189812E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 202.0, "minX": 1.601898E12, "maxY": 6830.0, "series": [{"data": [[1.60189806E12, 6830.0], [1.601898E12, 6747.0], [1.60189812E12, 4389.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60189806E12, 396.2979971575737], [1.601898E12, 430.03699954867363], [1.60189812E12, 426.86999727487563]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60189806E12, 405.0], [1.601898E12, 431.0], [1.60189812E12, 432.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60189806E12, 404.0119981050491], [1.601898E12, 430.9834997743368], [1.60189812E12, 432.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60189806E12, 202.0], [1.601898E12, 404.0], [1.60189812E12, 255.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60189806E12, 1038.5], [1.601898E12, 1039.0], [1.60189812E12, 1013.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189812E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 510.0, "minX": 2.0, "maxY": 2524.0, "series": [{"data": [[33.0, 1103.0], [32.0, 1091.0], [2.0, 2524.0], [34.0, 1148.0], [35.0, 878.5], [36.0, 905.5], [37.0, 988.0], [38.0, 879.0], [39.0, 784.0], [41.0, 1000.0], [40.0, 979.0], [42.0, 861.5], [43.0, 938.0], [44.0, 960.0], [45.0, 758.0], [47.0, 598.0], [48.0, 639.0], [50.0, 510.0], [53.0, 623.0], [54.0, 816.5], [55.0, 576.0], [56.0, 585.0], [58.0, 566.0], [67.0, 521.0], [16.0, 1649.5], [17.0, 1708.5], [18.0, 1422.0], [21.0, 1838.0], [22.0, 1470.0], [23.0, 1459.0], [24.0, 1280.0], [25.0, 1264.5], [26.0, 1282.0], [27.0, 1244.5], [28.0, 1158.0], [29.0, 1269.0], [30.0, 1197.5], [31.0, 1104.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 1763.0], [32.0, 1394.0], [35.0, 949.0], [34.0, 1298.0], [36.0, 613.0], [37.0, 881.0], [38.0, 569.0], [39.0, 1034.5], [41.0, 1019.5], [40.0, 2196.0], [42.0, 782.5], [43.0, 555.0], [48.0, 755.0], [17.0, 1211.0], [21.0, 1996.0], [22.0, 1192.5], [23.0, 2069.0], [24.0, 1179.0], [26.0, 1069.0], [28.0, 1536.0], [30.0, 1100.5], [31.0, 977.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 509.5, "minX": 2.0, "maxY": 2516.5, "series": [{"data": [[33.0, 1103.0], [32.0, 1088.0], [2.0, 2516.5], [34.0, 1148.0], [35.0, 877.5], [36.0, 905.5], [37.0, 987.0], [38.0, 879.0], [39.0, 783.0], [41.0, 997.5], [40.0, 975.0], [42.0, 861.5], [43.0, 936.0], [44.0, 960.0], [45.0, 757.0], [47.0, 598.0], [48.0, 639.0], [50.0, 509.5], [53.0, 622.0], [54.0, 816.0], [55.0, 576.0], [56.0, 585.0], [58.0, 566.0], [67.0, 521.0], [16.0, 1646.0], [17.0, 1705.0], [18.0, 1419.5], [21.0, 1836.5], [22.0, 1468.5], [23.0, 1459.0], [24.0, 1275.0], [25.0, 1260.5], [26.0, 1280.5], [27.0, 1243.5], [28.0, 1154.5], [29.0, 1267.0], [30.0, 1196.5], [31.0, 1103.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 1763.0], [32.0, 1394.0], [35.0, 949.0], [34.0, 1298.0], [36.0, 613.0], [37.0, 880.5], [38.0, 569.0], [39.0, 1034.5], [41.0, 1019.5], [40.0, 2196.0], [42.0, 782.5], [43.0, 555.0], [48.0, 755.0], [17.0, 1211.0], [21.0, 1996.0], [22.0, 1192.5], [23.0, 2069.0], [24.0, 1179.0], [26.0, 1069.0], [28.0, 1536.0], [30.0, 1100.5], [31.0, 977.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 20.666666666666668, "minX": 1.601898E12, "maxY": 33.4, "series": [{"data": [[1.60189806E12, 33.4], [1.601898E12, 32.45], [1.60189812E12, 20.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189812E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.601898E12, "maxY": 33.1, "series": [{"data": [[1.60189806E12, 33.1], [1.601898E12, 31.533333333333335], [1.60189812E12, 21.15]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.601898E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.60189806E12, 0.3], [1.601898E12, 0.23333333333333334], [1.60189812E12, 0.18333333333333332]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189812E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.601898E12, "maxY": 33.1, "series": [{"data": [[1.60189806E12, 33.1], [1.601898E12, 31.533333333333335], [1.60189812E12, 21.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60189806E12, 0.3], [1.601898E12, 0.25], [1.60189812E12, 0.18333333333333332]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189812E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.601898E12, "maxY": 33.1, "series": [{"data": [[1.60189806E12, 33.1], [1.601898E12, 31.533333333333335], [1.60189812E12, 21.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60189806E12, 0.3], [1.601898E12, 0.25], [1.60189812E12, 0.18333333333333332]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189812E12, "title": "Total Transactions Per Second"}},
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

