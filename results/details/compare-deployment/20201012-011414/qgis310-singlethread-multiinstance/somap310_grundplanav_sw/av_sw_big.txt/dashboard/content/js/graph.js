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
        data: {"result": {"minY": 219.0, "minX": 0.0, "maxY": 6342.0, "series": [{"data": [[0.0, 219.0], [0.1, 334.0], [0.2, 347.0], [0.3, 361.0], [0.4, 372.0], [0.5, 375.0], [0.6, 379.0], [0.7, 380.0], [0.8, 381.0], [0.9, 383.0], [1.0, 383.0], [1.1, 384.0], [1.2, 385.0], [1.3, 386.0], [1.4, 387.0], [1.5, 388.0], [1.6, 390.0], [1.7, 390.0], [1.8, 391.0], [1.9, 392.0], [2.0, 393.0], [2.1, 394.0], [2.2, 395.0], [2.3, 396.0], [2.4, 397.0], [2.5, 398.0], [2.6, 398.0], [2.7, 399.0], [2.8, 399.0], [2.9, 401.0], [3.0, 402.0], [3.1, 403.0], [3.2, 404.0], [3.3, 405.0], [3.4, 406.0], [3.5, 407.0], [3.6, 408.0], [3.7, 409.0], [3.8, 409.0], [3.9, 410.0], [4.0, 410.0], [4.1, 411.0], [4.2, 411.0], [4.3, 412.0], [4.4, 412.0], [4.5, 412.0], [4.6, 413.0], [4.7, 415.0], [4.8, 416.0], [4.9, 416.0], [5.0, 417.0], [5.1, 418.0], [5.2, 419.0], [5.3, 420.0], [5.4, 420.0], [5.5, 421.0], [5.6, 423.0], [5.7, 423.0], [5.8, 424.0], [5.9, 425.0], [6.0, 426.0], [6.1, 426.0], [6.2, 427.0], [6.3, 428.0], [6.4, 429.0], [6.5, 429.0], [6.6, 429.0], [6.7, 431.0], [6.8, 432.0], [6.9, 432.0], [7.0, 433.0], [7.1, 434.0], [7.2, 435.0], [7.3, 435.0], [7.4, 436.0], [7.5, 437.0], [7.6, 437.0], [7.7, 438.0], [7.8, 438.0], [7.9, 439.0], [8.0, 441.0], [8.1, 441.0], [8.2, 442.0], [8.3, 443.0], [8.4, 444.0], [8.5, 446.0], [8.6, 446.0], [8.7, 447.0], [8.8, 448.0], [8.9, 448.0], [9.0, 449.0], [9.1, 450.0], [9.2, 451.0], [9.3, 451.0], [9.4, 452.0], [9.5, 452.0], [9.6, 453.0], [9.7, 454.0], [9.8, 454.0], [9.9, 455.0], [10.0, 455.0], [10.1, 457.0], [10.2, 457.0], [10.3, 458.0], [10.4, 458.0], [10.5, 459.0], [10.6, 460.0], [10.7, 461.0], [10.8, 463.0], [10.9, 464.0], [11.0, 464.0], [11.1, 465.0], [11.2, 466.0], [11.3, 467.0], [11.4, 468.0], [11.5, 469.0], [11.6, 471.0], [11.7, 471.0], [11.8, 472.0], [11.9, 474.0], [12.0, 475.0], [12.1, 475.0], [12.2, 476.0], [12.3, 477.0], [12.4, 479.0], [12.5, 480.0], [12.6, 483.0], [12.7, 485.0], [12.8, 487.0], [12.9, 489.0], [13.0, 490.0], [13.1, 491.0], [13.2, 494.0], [13.3, 495.0], [13.4, 496.0], [13.5, 497.0], [13.6, 499.0], [13.7, 500.0], [13.8, 503.0], [13.9, 505.0], [14.0, 507.0], [14.1, 509.0], [14.2, 510.0], [14.3, 511.0], [14.4, 513.0], [14.5, 515.0], [14.6, 516.0], [14.7, 517.0], [14.8, 518.0], [14.9, 519.0], [15.0, 519.0], [15.1, 521.0], [15.2, 522.0], [15.3, 524.0], [15.4, 526.0], [15.5, 527.0], [15.6, 528.0], [15.7, 529.0], [15.8, 531.0], [15.9, 532.0], [16.0, 533.0], [16.1, 535.0], [16.2, 535.0], [16.3, 536.0], [16.4, 538.0], [16.5, 538.0], [16.6, 539.0], [16.7, 540.0], [16.8, 540.0], [16.9, 542.0], [17.0, 543.0], [17.1, 544.0], [17.2, 545.0], [17.3, 546.0], [17.4, 548.0], [17.5, 548.0], [17.6, 550.0], [17.7, 551.0], [17.8, 552.0], [17.9, 554.0], [18.0, 554.0], [18.1, 555.0], [18.2, 555.0], [18.3, 557.0], [18.4, 557.0], [18.5, 558.0], [18.6, 559.0], [18.7, 561.0], [18.8, 563.0], [18.9, 564.0], [19.0, 565.0], [19.1, 566.0], [19.2, 567.0], [19.3, 569.0], [19.4, 569.0], [19.5, 571.0], [19.6, 572.0], [19.7, 573.0], [19.8, 574.0], [19.9, 576.0], [20.0, 576.0], [20.1, 578.0], [20.2, 580.0], [20.3, 581.0], [20.4, 583.0], [20.5, 584.0], [20.6, 585.0], [20.7, 587.0], [20.8, 588.0], [20.9, 590.0], [21.0, 591.0], [21.1, 592.0], [21.2, 593.0], [21.3, 594.0], [21.4, 595.0], [21.5, 596.0], [21.6, 598.0], [21.7, 599.0], [21.8, 601.0], [21.9, 601.0], [22.0, 602.0], [22.1, 603.0], [22.2, 604.0], [22.3, 605.0], [22.4, 606.0], [22.5, 607.0], [22.6, 608.0], [22.7, 608.0], [22.8, 609.0], [22.9, 610.0], [23.0, 610.0], [23.1, 611.0], [23.2, 611.0], [23.3, 613.0], [23.4, 614.0], [23.5, 615.0], [23.6, 616.0], [23.7, 617.0], [23.8, 619.0], [23.9, 621.0], [24.0, 622.0], [24.1, 623.0], [24.2, 623.0], [24.3, 624.0], [24.4, 627.0], [24.5, 628.0], [24.6, 628.0], [24.7, 629.0], [24.8, 630.0], [24.9, 631.0], [25.0, 633.0], [25.1, 633.0], [25.2, 635.0], [25.3, 636.0], [25.4, 636.0], [25.5, 637.0], [25.6, 638.0], [25.7, 639.0], [25.8, 641.0], [25.9, 642.0], [26.0, 643.0], [26.1, 643.0], [26.2, 644.0], [26.3, 645.0], [26.4, 647.0], [26.5, 648.0], [26.6, 649.0], [26.7, 650.0], [26.8, 651.0], [26.9, 652.0], [27.0, 653.0], [27.1, 654.0], [27.2, 655.0], [27.3, 656.0], [27.4, 659.0], [27.5, 659.0], [27.6, 661.0], [27.7, 662.0], [27.8, 663.0], [27.9, 664.0], [28.0, 665.0], [28.1, 668.0], [28.2, 669.0], [28.3, 670.0], [28.4, 671.0], [28.5, 672.0], [28.6, 672.0], [28.7, 674.0], [28.8, 674.0], [28.9, 675.0], [29.0, 678.0], [29.1, 680.0], [29.2, 682.0], [29.3, 683.0], [29.4, 685.0], [29.5, 685.0], [29.6, 686.0], [29.7, 688.0], [29.8, 690.0], [29.9, 691.0], [30.0, 693.0], [30.1, 695.0], [30.2, 697.0], [30.3, 699.0], [30.4, 702.0], [30.5, 705.0], [30.6, 706.0], [30.7, 707.0], [30.8, 709.0], [30.9, 710.0], [31.0, 712.0], [31.1, 714.0], [31.2, 715.0], [31.3, 716.0], [31.4, 718.0], [31.5, 719.0], [31.6, 720.0], [31.7, 722.0], [31.8, 723.0], [31.9, 725.0], [32.0, 728.0], [32.1, 730.0], [32.2, 733.0], [32.3, 734.0], [32.4, 736.0], [32.5, 737.0], [32.6, 739.0], [32.7, 742.0], [32.8, 744.0], [32.9, 745.0], [33.0, 746.0], [33.1, 748.0], [33.2, 751.0], [33.3, 752.0], [33.4, 753.0], [33.5, 755.0], [33.6, 755.0], [33.7, 756.0], [33.8, 757.0], [33.9, 759.0], [34.0, 761.0], [34.1, 763.0], [34.2, 765.0], [34.3, 767.0], [34.4, 767.0], [34.5, 770.0], [34.6, 772.0], [34.7, 775.0], [34.8, 776.0], [34.9, 779.0], [35.0, 781.0], [35.1, 782.0], [35.2, 783.0], [35.3, 785.0], [35.4, 787.0], [35.5, 789.0], [35.6, 791.0], [35.7, 794.0], [35.8, 796.0], [35.9, 797.0], [36.0, 798.0], [36.1, 799.0], [36.2, 801.0], [36.3, 803.0], [36.4, 804.0], [36.5, 806.0], [36.6, 808.0], [36.7, 809.0], [36.8, 811.0], [36.9, 814.0], [37.0, 815.0], [37.1, 818.0], [37.2, 820.0], [37.3, 822.0], [37.4, 825.0], [37.5, 828.0], [37.6, 829.0], [37.7, 832.0], [37.8, 833.0], [37.9, 835.0], [38.0, 836.0], [38.1, 840.0], [38.2, 842.0], [38.3, 845.0], [38.4, 847.0], [38.5, 849.0], [38.6, 850.0], [38.7, 851.0], [38.8, 852.0], [38.9, 856.0], [39.0, 858.0], [39.1, 859.0], [39.2, 861.0], [39.3, 862.0], [39.4, 864.0], [39.5, 865.0], [39.6, 867.0], [39.7, 870.0], [39.8, 871.0], [39.9, 873.0], [40.0, 878.0], [40.1, 879.0], [40.2, 880.0], [40.3, 882.0], [40.4, 885.0], [40.5, 887.0], [40.6, 890.0], [40.7, 891.0], [40.8, 891.0], [40.9, 893.0], [41.0, 895.0], [41.1, 899.0], [41.2, 901.0], [41.3, 904.0], [41.4, 908.0], [41.5, 909.0], [41.6, 911.0], [41.7, 915.0], [41.8, 917.0], [41.9, 918.0], [42.0, 920.0], [42.1, 922.0], [42.2, 924.0], [42.3, 928.0], [42.4, 930.0], [42.5, 933.0], [42.6, 937.0], [42.7, 938.0], [42.8, 941.0], [42.9, 944.0], [43.0, 946.0], [43.1, 949.0], [43.2, 950.0], [43.3, 952.0], [43.4, 955.0], [43.5, 956.0], [43.6, 957.0], [43.7, 958.0], [43.8, 960.0], [43.9, 963.0], [44.0, 965.0], [44.1, 967.0], [44.2, 969.0], [44.3, 971.0], [44.4, 972.0], [44.5, 975.0], [44.6, 978.0], [44.7, 979.0], [44.8, 981.0], [44.9, 983.0], [45.0, 985.0], [45.1, 987.0], [45.2, 989.0], [45.3, 990.0], [45.4, 991.0], [45.5, 993.0], [45.6, 994.0], [45.7, 995.0], [45.8, 998.0], [45.9, 999.0], [46.0, 1002.0], [46.1, 1005.0], [46.2, 1006.0], [46.3, 1007.0], [46.4, 1011.0], [46.5, 1013.0], [46.6, 1014.0], [46.7, 1015.0], [46.8, 1017.0], [46.9, 1019.0], [47.0, 1022.0], [47.1, 1023.0], [47.2, 1027.0], [47.3, 1030.0], [47.4, 1031.0], [47.5, 1034.0], [47.6, 1035.0], [47.7, 1036.0], [47.8, 1037.0], [47.9, 1041.0], [48.0, 1042.0], [48.1, 1043.0], [48.2, 1044.0], [48.3, 1045.0], [48.4, 1047.0], [48.5, 1050.0], [48.6, 1052.0], [48.7, 1053.0], [48.8, 1055.0], [48.9, 1057.0], [49.0, 1057.0], [49.1, 1059.0], [49.2, 1061.0], [49.3, 1063.0], [49.4, 1064.0], [49.5, 1066.0], [49.6, 1068.0], [49.7, 1069.0], [49.8, 1071.0], [49.9, 1072.0], [50.0, 1073.0], [50.1, 1075.0], [50.2, 1076.0], [50.3, 1079.0], [50.4, 1080.0], [50.5, 1082.0], [50.6, 1085.0], [50.7, 1087.0], [50.8, 1088.0], [50.9, 1089.0], [51.0, 1092.0], [51.1, 1093.0], [51.2, 1095.0], [51.3, 1098.0], [51.4, 1098.0], [51.5, 1099.0], [51.6, 1103.0], [51.7, 1105.0], [51.8, 1107.0], [51.9, 1108.0], [52.0, 1109.0], [52.1, 1113.0], [52.2, 1115.0], [52.3, 1117.0], [52.4, 1119.0], [52.5, 1123.0], [52.6, 1125.0], [52.7, 1126.0], [52.8, 1130.0], [52.9, 1132.0], [53.0, 1133.0], [53.1, 1134.0], [53.2, 1136.0], [53.3, 1138.0], [53.4, 1139.0], [53.5, 1141.0], [53.6, 1144.0], [53.7, 1146.0], [53.8, 1146.0], [53.9, 1148.0], [54.0, 1150.0], [54.1, 1152.0], [54.2, 1153.0], [54.3, 1155.0], [54.4, 1156.0], [54.5, 1158.0], [54.6, 1159.0], [54.7, 1161.0], [54.8, 1163.0], [54.9, 1165.0], [55.0, 1167.0], [55.1, 1168.0], [55.2, 1170.0], [55.3, 1173.0], [55.4, 1175.0], [55.5, 1180.0], [55.6, 1183.0], [55.7, 1185.0], [55.8, 1186.0], [55.9, 1188.0], [56.0, 1189.0], [56.1, 1192.0], [56.2, 1193.0], [56.3, 1196.0], [56.4, 1197.0], [56.5, 1200.0], [56.6, 1202.0], [56.7, 1203.0], [56.8, 1205.0], [56.9, 1207.0], [57.0, 1209.0], [57.1, 1210.0], [57.2, 1213.0], [57.3, 1214.0], [57.4, 1217.0], [57.5, 1217.0], [57.6, 1219.0], [57.7, 1220.0], [57.8, 1222.0], [57.9, 1223.0], [58.0, 1225.0], [58.1, 1227.0], [58.2, 1229.0], [58.3, 1229.0], [58.4, 1232.0], [58.5, 1233.0], [58.6, 1235.0], [58.7, 1237.0], [58.8, 1239.0], [58.9, 1240.0], [59.0, 1242.0], [59.1, 1246.0], [59.2, 1251.0], [59.3, 1252.0], [59.4, 1254.0], [59.5, 1257.0], [59.6, 1258.0], [59.7, 1259.0], [59.8, 1261.0], [59.9, 1263.0], [60.0, 1264.0], [60.1, 1267.0], [60.2, 1270.0], [60.3, 1273.0], [60.4, 1276.0], [60.5, 1278.0], [60.6, 1279.0], [60.7, 1281.0], [60.8, 1282.0], [60.9, 1285.0], [61.0, 1287.0], [61.1, 1288.0], [61.2, 1291.0], [61.3, 1294.0], [61.4, 1296.0], [61.5, 1298.0], [61.6, 1299.0], [61.7, 1300.0], [61.8, 1301.0], [61.9, 1301.0], [62.0, 1303.0], [62.1, 1305.0], [62.2, 1308.0], [62.3, 1309.0], [62.4, 1310.0], [62.5, 1312.0], [62.6, 1314.0], [62.7, 1316.0], [62.8, 1317.0], [62.9, 1319.0], [63.0, 1321.0], [63.1, 1324.0], [63.2, 1325.0], [63.3, 1327.0], [63.4, 1328.0], [63.5, 1331.0], [63.6, 1331.0], [63.7, 1334.0], [63.8, 1336.0], [63.9, 1340.0], [64.0, 1341.0], [64.1, 1343.0], [64.2, 1345.0], [64.3, 1348.0], [64.4, 1349.0], [64.5, 1352.0], [64.6, 1353.0], [64.7, 1355.0], [64.8, 1358.0], [64.9, 1360.0], [65.0, 1362.0], [65.1, 1363.0], [65.2, 1364.0], [65.3, 1367.0], [65.4, 1368.0], [65.5, 1372.0], [65.6, 1373.0], [65.7, 1375.0], [65.8, 1378.0], [65.9, 1380.0], [66.0, 1384.0], [66.1, 1386.0], [66.2, 1388.0], [66.3, 1390.0], [66.4, 1392.0], [66.5, 1395.0], [66.6, 1395.0], [66.7, 1397.0], [66.8, 1399.0], [66.9, 1401.0], [67.0, 1403.0], [67.1, 1404.0], [67.2, 1405.0], [67.3, 1406.0], [67.4, 1407.0], [67.5, 1409.0], [67.6, 1411.0], [67.7, 1417.0], [67.8, 1418.0], [67.9, 1421.0], [68.0, 1424.0], [68.1, 1427.0], [68.2, 1429.0], [68.3, 1431.0], [68.4, 1432.0], [68.5, 1434.0], [68.6, 1435.0], [68.7, 1438.0], [68.8, 1439.0], [68.9, 1440.0], [69.0, 1442.0], [69.1, 1445.0], [69.2, 1449.0], [69.3, 1450.0], [69.4, 1451.0], [69.5, 1454.0], [69.6, 1457.0], [69.7, 1459.0], [69.8, 1461.0], [69.9, 1463.0], [70.0, 1466.0], [70.1, 1470.0], [70.2, 1471.0], [70.3, 1475.0], [70.4, 1475.0], [70.5, 1478.0], [70.6, 1480.0], [70.7, 1482.0], [70.8, 1485.0], [70.9, 1487.0], [71.0, 1488.0], [71.1, 1488.0], [71.2, 1490.0], [71.3, 1495.0], [71.4, 1498.0], [71.5, 1499.0], [71.6, 1500.0], [71.7, 1503.0], [71.8, 1505.0], [71.9, 1509.0], [72.0, 1510.0], [72.1, 1512.0], [72.2, 1515.0], [72.3, 1517.0], [72.4, 1519.0], [72.5, 1519.0], [72.6, 1522.0], [72.7, 1525.0], [72.8, 1527.0], [72.9, 1528.0], [73.0, 1529.0], [73.1, 1530.0], [73.2, 1532.0], [73.3, 1533.0], [73.4, 1536.0], [73.5, 1537.0], [73.6, 1538.0], [73.7, 1540.0], [73.8, 1542.0], [73.9, 1543.0], [74.0, 1544.0], [74.1, 1546.0], [74.2, 1548.0], [74.3, 1550.0], [74.4, 1551.0], [74.5, 1553.0], [74.6, 1554.0], [74.7, 1555.0], [74.8, 1556.0], [74.9, 1558.0], [75.0, 1560.0], [75.1, 1562.0], [75.2, 1562.0], [75.3, 1566.0], [75.4, 1568.0], [75.5, 1571.0], [75.6, 1572.0], [75.7, 1575.0], [75.8, 1575.0], [75.9, 1577.0], [76.0, 1578.0], [76.1, 1581.0], [76.2, 1583.0], [76.3, 1584.0], [76.4, 1587.0], [76.5, 1588.0], [76.6, 1593.0], [76.7, 1594.0], [76.8, 1595.0], [76.9, 1598.0], [77.0, 1600.0], [77.1, 1603.0], [77.2, 1606.0], [77.3, 1606.0], [77.4, 1610.0], [77.5, 1611.0], [77.6, 1614.0], [77.7, 1617.0], [77.8, 1618.0], [77.9, 1621.0], [78.0, 1623.0], [78.1, 1625.0], [78.2, 1627.0], [78.3, 1628.0], [78.4, 1630.0], [78.5, 1632.0], [78.6, 1634.0], [78.7, 1636.0], [78.8, 1639.0], [78.9, 1640.0], [79.0, 1641.0], [79.1, 1645.0], [79.2, 1647.0], [79.3, 1651.0], [79.4, 1654.0], [79.5, 1657.0], [79.6, 1660.0], [79.7, 1663.0], [79.8, 1665.0], [79.9, 1668.0], [80.0, 1669.0], [80.1, 1670.0], [80.2, 1671.0], [80.3, 1674.0], [80.4, 1677.0], [80.5, 1682.0], [80.6, 1685.0], [80.7, 1688.0], [80.8, 1693.0], [80.9, 1696.0], [81.0, 1697.0], [81.1, 1701.0], [81.2, 1703.0], [81.3, 1706.0], [81.4, 1710.0], [81.5, 1713.0], [81.6, 1714.0], [81.7, 1718.0], [81.8, 1720.0], [81.9, 1723.0], [82.0, 1725.0], [82.1, 1727.0], [82.2, 1727.0], [82.3, 1729.0], [82.4, 1733.0], [82.5, 1740.0], [82.6, 1744.0], [82.7, 1747.0], [82.8, 1749.0], [82.9, 1753.0], [83.0, 1754.0], [83.1, 1759.0], [83.2, 1764.0], [83.3, 1768.0], [83.4, 1771.0], [83.5, 1773.0], [83.6, 1775.0], [83.7, 1776.0], [83.8, 1779.0], [83.9, 1781.0], [84.0, 1782.0], [84.1, 1784.0], [84.2, 1789.0], [84.3, 1794.0], [84.4, 1800.0], [84.5, 1805.0], [84.6, 1808.0], [84.7, 1810.0], [84.8, 1814.0], [84.9, 1820.0], [85.0, 1822.0], [85.1, 1826.0], [85.2, 1830.0], [85.3, 1834.0], [85.4, 1837.0], [85.5, 1844.0], [85.6, 1847.0], [85.7, 1853.0], [85.8, 1859.0], [85.9, 1861.0], [86.0, 1865.0], [86.1, 1869.0], [86.2, 1872.0], [86.3, 1878.0], [86.4, 1882.0], [86.5, 1886.0], [86.6, 1889.0], [86.7, 1891.0], [86.8, 1895.0], [86.9, 1901.0], [87.0, 1903.0], [87.1, 1907.0], [87.2, 1915.0], [87.3, 1919.0], [87.4, 1926.0], [87.5, 1931.0], [87.6, 1937.0], [87.7, 1940.0], [87.8, 1944.0], [87.9, 1954.0], [88.0, 1959.0], [88.1, 1968.0], [88.2, 1975.0], [88.3, 1978.0], [88.4, 1982.0], [88.5, 1989.0], [88.6, 1994.0], [88.7, 1998.0], [88.8, 2002.0], [88.9, 2008.0], [89.0, 2011.0], [89.1, 2014.0], [89.2, 2019.0], [89.3, 2027.0], [89.4, 2035.0], [89.5, 2041.0], [89.6, 2047.0], [89.7, 2052.0], [89.8, 2055.0], [89.9, 2060.0], [90.0, 2071.0], [90.1, 2079.0], [90.2, 2083.0], [90.3, 2093.0], [90.4, 2096.0], [90.5, 2103.0], [90.6, 2111.0], [90.7, 2119.0], [90.8, 2124.0], [90.9, 2127.0], [91.0, 2132.0], [91.1, 2147.0], [91.2, 2155.0], [91.3, 2160.0], [91.4, 2177.0], [91.5, 2185.0], [91.6, 2200.0], [91.7, 2209.0], [91.8, 2218.0], [91.9, 2222.0], [92.0, 2237.0], [92.1, 2257.0], [92.2, 2268.0], [92.3, 2279.0], [92.4, 2291.0], [92.5, 2301.0], [92.6, 2306.0], [92.7, 2311.0], [92.8, 2322.0], [92.9, 2329.0], [93.0, 2332.0], [93.1, 2337.0], [93.2, 2346.0], [93.3, 2355.0], [93.4, 2363.0], [93.5, 2368.0], [93.6, 2376.0], [93.7, 2387.0], [93.8, 2392.0], [93.9, 2396.0], [94.0, 2408.0], [94.1, 2413.0], [94.2, 2419.0], [94.3, 2425.0], [94.4, 2435.0], [94.5, 2439.0], [94.6, 2445.0], [94.7, 2451.0], [94.8, 2457.0], [94.9, 2477.0], [95.0, 2491.0], [95.1, 2499.0], [95.2, 2516.0], [95.3, 2527.0], [95.4, 2539.0], [95.5, 2561.0], [95.6, 2575.0], [95.7, 2588.0], [95.8, 2600.0], [95.9, 2622.0], [96.0, 2638.0], [96.1, 2648.0], [96.2, 2672.0], [96.3, 2680.0], [96.4, 2701.0], [96.5, 2713.0], [96.6, 2724.0], [96.7, 2737.0], [96.8, 2757.0], [96.9, 2772.0], [97.0, 2789.0], [97.1, 2803.0], [97.2, 2819.0], [97.3, 2844.0], [97.4, 2864.0], [97.5, 2880.0], [97.6, 2897.0], [97.7, 2929.0], [97.8, 2983.0], [97.9, 3011.0], [98.0, 3034.0], [98.1, 3072.0], [98.2, 3106.0], [98.3, 3119.0], [98.4, 3161.0], [98.5, 3204.0], [98.6, 3265.0], [98.7, 3304.0], [98.8, 3408.0], [98.9, 3492.0], [99.0, 3558.0], [99.1, 3687.0], [99.2, 3773.0], [99.3, 3887.0], [99.4, 4079.0], [99.5, 4276.0], [99.6, 4412.0], [99.7, 5095.0], [99.8, 5424.0], [99.9, 5835.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 560.0, "series": [{"data": [[600.0, 447.0], [700.0, 301.0], [800.0, 259.0], [900.0, 249.0], [1000.0, 290.0], [1100.0, 258.0], [1200.0, 269.0], [1300.0, 268.0], [1400.0, 245.0], [1500.0, 280.0], [1600.0, 216.0], [1700.0, 171.0], [1800.0, 130.0], [1900.0, 95.0], [2000.0, 88.0], [2100.0, 61.0], [2300.0, 74.0], [2200.0, 46.0], [2400.0, 62.0], [2500.0, 36.0], [2600.0, 31.0], [2700.0, 34.0], [2800.0, 29.0], [2900.0, 14.0], [3000.0, 16.0], [3100.0, 16.0], [3200.0, 9.0], [3300.0, 6.0], [3400.0, 7.0], [3500.0, 5.0], [3600.0, 6.0], [3700.0, 4.0], [3800.0, 6.0], [3900.0, 1.0], [4000.0, 3.0], [4100.0, 3.0], [4200.0, 4.0], [4300.0, 3.0], [4400.0, 1.0], [4700.0, 2.0], [5000.0, 2.0], [5100.0, 1.0], [4900.0, 1.0], [5300.0, 1.0], [5200.0, 2.0], [5500.0, 2.0], [5400.0, 2.0], [5600.0, 1.0], [5800.0, 1.0], [6100.0, 1.0], [6300.0, 3.0], [6200.0, 1.0], [200.0, 3.0], [300.0, 143.0], [400.0, 560.0], [500.0, 421.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 714.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3005.0, "series": [{"data": [[0.0, 714.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3005.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1471.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.881081081081081, "minX": 1.60246554E12, "maxY": 12.0, "series": [{"data": [[1.6024656E12, 12.0], [1.60246578E12, 12.0], [1.60246596E12, 12.0], [1.60246566E12, 12.0], [1.60246584E12, 12.0], [1.60246554E12, 12.0], [1.60246602E12, 11.881081081081081], [1.60246572E12, 12.0], [1.6024659E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246602E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 660.0, "minX": 1.0, "maxY": 3674.0, "series": [{"data": [[8.0, 1006.0], [4.0, 952.0], [2.0, 1584.0], [1.0, 3674.0], [9.0, 1127.0], [10.0, 847.0], [5.0, 660.0], [11.0, 1411.0], [12.0, 1199.5408379996177], [6.0, 2106.0], [3.0, 1673.0], [7.0, 672.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 1200.02581888247]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2725.9, "minX": 1.60246554E12, "maxY": 3449882.3833333333, "series": [{"data": [[1.6024656E12, 2185480.966666667], [1.60246578E12, 2839970.55], [1.60246596E12, 2813448.2], [1.60246566E12, 3449882.3833333333], [1.60246584E12, 2318134.0], [1.60246554E12, 2023540.3166666667], [1.60246602E12, 2318946.5166666666], [1.60246572E12, 3022688.3333333335], [1.6024659E12, 3000690.3666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6024656E12, 4731.2], [1.60246578E12, 3563.1], [1.60246596E12, 4943.85], [1.60246566E12, 4689.183333333333], [1.60246584E12, 4161.35], [1.60246554E12, 2725.9], [1.60246602E12, 4184.816666666667], [1.60246572E12, 4785.833333333333], [1.6024659E12, 4792.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246602E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1107.4274691358032, "minX": 1.60246554E12, "maxY": 1487.31380753138, "series": [{"data": [[1.6024656E12, 1108.4447852760743], [1.60246578E12, 1487.31380753138], [1.60246596E12, 1107.5883256528416], [1.60246566E12, 1153.582524271844], [1.60246584E12, 1250.1435986159156], [1.60246554E12, 1379.9472295514508], [1.60246602E12, 1202.6288288288285], [1.60246572E12, 1156.7083993660865], [1.6024659E12, 1107.4274691358032]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246602E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1105.6095679012358, "minX": 1.60246554E12, "maxY": 1484.4225941422606, "series": [{"data": [[1.6024656E12, 1106.8144171779131], [1.60246578E12, 1484.4225941422606], [1.60246596E12, 1105.976958525345], [1.60246566E12, 1150.8025889967635], [1.60246584E12, 1248.6660899653998], [1.60246554E12, 1377.424802110818], [1.60246602E12, 1201.198198198199], [1.60246572E12, 1154.5958795562603], [1.6024659E12, 1105.6095679012358]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246602E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.018018018018018018, "minX": 1.60246554E12, "maxY": 0.3377308707124008, "series": [{"data": [[1.6024656E12, 0.01993865030674846], [1.60246578E12, 0.03138075313807532], [1.60246596E12, 0.026113671274961607], [1.60246566E12, 0.022653721682847933], [1.60246584E12, 0.019031141868512094], [1.60246554E12, 0.3377308707124008], [1.60246602E12, 0.018018018018018018], [1.60246572E12, 0.022187004754358197], [1.6024659E12, 0.021604938271604965]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246602E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 219.0, "minX": 1.60246554E12, "maxY": 6342.0, "series": [{"data": [[1.6024656E12, 5463.0], [1.60246578E12, 6329.0], [1.60246596E12, 3204.0], [1.60246566E12, 5225.0], [1.60246584E12, 6326.0], [1.60246554E12, 6342.0], [1.60246602E12, 4342.0], [1.60246572E12, 5243.0], [1.6024659E12, 4079.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6024656E12, 384.87699984431265], [1.60246578E12, 417.97599817276], [1.60246596E12, 372.8679998445511], [1.60246566E12, 379.1419997048378], [1.60246584E12, 387.21099986195566], [1.60246554E12, 400.87999873161317], [1.60246602E12, 348.09599681854246], [1.60246572E12, 385.68799984931945], [1.6024659E12, 380.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6024656E12, 386.3941001868248], [1.60246578E12, 424.873600730896], [1.60246596E12, 375.7288003730774], [1.60246566E12, 380.3843001770973], [1.60246584E12, 387.73210005521776], [1.60246554E12, 405.66800050735475], [1.60246602E12, 360.105601272583], [1.60246572E12, 386.2568000602722], [1.6024659E12, 380.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6024656E12, 385.610499766469], [1.60246578E12, 421.80799908638], [1.60246596E12, 374.1639995336533], [1.60246566E12, 379.7609998524189], [1.60246584E12, 387.5004999309778], [1.60246554E12, 403.5399993658066], [1.60246602E12, 354.76799840927123], [1.60246572E12, 386.00399992465975], [1.6024659E12, 380.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6024656E12, 342.0], [1.60246578E12, 341.0], [1.60246596E12, 222.0], [1.60246566E12, 353.0], [1.60246584E12, 300.0], [1.60246554E12, 384.0], [1.60246602E12, 292.0], [1.60246572E12, 365.0], [1.6024659E12, 219.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6024656E12, 926.0], [1.60246578E12, 1340.5], [1.60246596E12, 991.0], [1.60246566E12, 915.5], [1.60246584E12, 1075.5], [1.60246554E12, 1228.0], [1.60246602E12, 1087.0], [1.60246572E12, 1122.0], [1.6024659E12, 952.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246602E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 428.5, "minX": 1.0, "maxY": 3674.0, "series": [{"data": [[2.0, 2489.5], [3.0, 2039.0], [4.0, 1752.0], [5.0, 1588.0], [6.0, 1511.0], [7.0, 1404.0], [8.0, 1297.5], [9.0, 1274.0], [10.0, 1157.0], [11.0, 1091.5], [12.0, 1042.5], [13.0, 887.0], [14.0, 866.5], [15.0, 564.0], [16.0, 525.5], [1.0, 3674.0], [17.0, 605.0], [18.0, 527.5], [19.0, 496.0], [20.0, 457.0], [21.0, 475.0], [22.0, 433.5], [23.0, 446.0], [24.0, 456.5], [25.0, 430.5], [26.0, 457.5], [27.0, 428.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 428.5, "minX": 1.0, "maxY": 3663.0, "series": [{"data": [[2.0, 2486.5], [3.0, 2036.0], [4.0, 1746.5], [5.0, 1586.0], [6.0, 1504.5], [7.0, 1402.0], [8.0, 1294.0], [9.0, 1271.0], [10.0, 1156.0], [11.0, 1090.0], [12.0, 1041.0], [13.0, 886.0], [14.0, 865.0], [15.0, 564.0], [16.0, 525.5], [1.0, 3663.0], [17.0, 605.0], [18.0, 527.5], [19.0, 496.0], [20.0, 456.5], [21.0, 475.0], [22.0, 433.5], [23.0, 445.5], [24.0, 456.0], [25.0, 429.5], [26.0, 457.5], [27.0, 428.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.516666666666667, "minX": 1.60246554E12, "maxY": 10.866666666666667, "series": [{"data": [[1.6024656E12, 10.866666666666667], [1.60246578E12, 7.966666666666667], [1.60246596E12, 10.85], [1.60246566E12, 10.3], [1.60246584E12, 9.633333333333333], [1.60246554E12, 6.516666666666667], [1.60246602E12, 9.05], [1.60246572E12, 10.516666666666667], [1.6024659E12, 10.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246602E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.316666666666666, "minX": 1.60246554E12, "maxY": 10.866666666666667, "series": [{"data": [[1.6024656E12, 10.866666666666667], [1.60246578E12, 7.966666666666667], [1.60246596E12, 10.85], [1.60246566E12, 10.3], [1.60246584E12, 9.633333333333333], [1.60246554E12, 6.316666666666666], [1.60246602E12, 9.25], [1.60246572E12, 10.516666666666667], [1.6024659E12, 10.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246602E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.316666666666666, "minX": 1.60246554E12, "maxY": 10.866666666666667, "series": [{"data": [[1.6024656E12, 10.866666666666667], [1.60246578E12, 7.966666666666667], [1.60246596E12, 10.85], [1.60246566E12, 10.3], [1.60246584E12, 9.633333333333333], [1.60246554E12, 6.316666666666666], [1.60246602E12, 9.25], [1.60246572E12, 10.516666666666667], [1.6024659E12, 10.8]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246602E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.316666666666666, "minX": 1.60246554E12, "maxY": 10.866666666666667, "series": [{"data": [[1.6024656E12, 10.866666666666667], [1.60246578E12, 7.966666666666667], [1.60246596E12, 10.85], [1.60246566E12, 10.3], [1.60246584E12, 9.633333333333333], [1.60246554E12, 6.316666666666666], [1.60246602E12, 9.25], [1.60246572E12, 10.516666666666667], [1.6024659E12, 10.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246602E12, "title": "Total Transactions Per Second"}},
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

