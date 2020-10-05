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
        data: {"result": {"minY": 122.0, "minX": 0.0, "maxY": 8520.0, "series": [{"data": [[0.0, 122.0], [0.1, 158.0], [0.2, 160.0], [0.3, 164.0], [0.4, 167.0], [0.5, 169.0], [0.6, 170.0], [0.7, 177.0], [0.8, 179.0], [0.9, 182.0], [1.0, 183.0], [1.1, 185.0], [1.2, 187.0], [1.3, 188.0], [1.4, 189.0], [1.5, 190.0], [1.6, 191.0], [1.7, 193.0], [1.8, 194.0], [1.9, 196.0], [2.0, 197.0], [2.1, 197.0], [2.2, 198.0], [2.3, 199.0], [2.4, 200.0], [2.5, 201.0], [2.6, 201.0], [2.7, 203.0], [2.8, 203.0], [2.9, 204.0], [3.0, 205.0], [3.1, 206.0], [3.2, 206.0], [3.3, 207.0], [3.4, 207.0], [3.5, 208.0], [3.6, 209.0], [3.7, 209.0], [3.8, 209.0], [3.9, 210.0], [4.0, 211.0], [4.1, 212.0], [4.2, 212.0], [4.3, 213.0], [4.4, 213.0], [4.5, 214.0], [4.6, 215.0], [4.7, 215.0], [4.8, 216.0], [4.9, 216.0], [5.0, 217.0], [5.1, 217.0], [5.2, 218.0], [5.3, 219.0], [5.4, 219.0], [5.5, 219.0], [5.6, 220.0], [5.7, 220.0], [5.8, 220.0], [5.9, 221.0], [6.0, 222.0], [6.1, 223.0], [6.2, 224.0], [6.3, 225.0], [6.4, 226.0], [6.5, 227.0], [6.6, 227.0], [6.7, 228.0], [6.8, 229.0], [6.9, 229.0], [7.0, 230.0], [7.1, 231.0], [7.2, 232.0], [7.3, 233.0], [7.4, 235.0], [7.5, 236.0], [7.6, 236.0], [7.7, 237.0], [7.8, 238.0], [7.9, 238.0], [8.0, 239.0], [8.1, 240.0], [8.2, 240.0], [8.3, 240.0], [8.4, 241.0], [8.5, 241.0], [8.6, 242.0], [8.7, 242.0], [8.8, 243.0], [8.9, 244.0], [9.0, 244.0], [9.1, 245.0], [9.2, 246.0], [9.3, 248.0], [9.4, 249.0], [9.5, 250.0], [9.6, 251.0], [9.7, 252.0], [9.8, 253.0], [9.9, 254.0], [10.0, 256.0], [10.1, 257.0], [10.2, 258.0], [10.3, 259.0], [10.4, 259.0], [10.5, 260.0], [10.6, 263.0], [10.7, 273.0], [10.8, 278.0], [10.9, 282.0], [11.0, 289.0], [11.1, 296.0], [11.2, 301.0], [11.3, 313.0], [11.4, 318.0], [11.5, 322.0], [11.6, 324.0], [11.7, 327.0], [11.8, 331.0], [11.9, 336.0], [12.0, 340.0], [12.1, 342.0], [12.2, 345.0], [12.3, 347.0], [12.4, 350.0], [12.5, 356.0], [12.6, 365.0], [12.7, 369.0], [12.8, 373.0], [12.9, 375.0], [13.0, 377.0], [13.1, 380.0], [13.2, 382.0], [13.3, 383.0], [13.4, 386.0], [13.5, 387.0], [13.6, 390.0], [13.7, 394.0], [13.8, 397.0], [13.9, 399.0], [14.0, 401.0], [14.1, 402.0], [14.2, 407.0], [14.3, 408.0], [14.4, 410.0], [14.5, 413.0], [14.6, 415.0], [14.7, 415.0], [14.8, 417.0], [14.9, 418.0], [15.0, 420.0], [15.1, 422.0], [15.2, 424.0], [15.3, 425.0], [15.4, 426.0], [15.5, 428.0], [15.6, 429.0], [15.7, 431.0], [15.8, 431.0], [15.9, 433.0], [16.0, 435.0], [16.1, 436.0], [16.2, 437.0], [16.3, 439.0], [16.4, 440.0], [16.5, 442.0], [16.6, 443.0], [16.7, 444.0], [16.8, 445.0], [16.9, 446.0], [17.0, 448.0], [17.1, 448.0], [17.2, 449.0], [17.3, 450.0], [17.4, 451.0], [17.5, 452.0], [17.6, 452.0], [17.7, 453.0], [17.8, 454.0], [17.9, 457.0], [18.0, 458.0], [18.1, 459.0], [18.2, 460.0], [18.3, 461.0], [18.4, 462.0], [18.5, 463.0], [18.6, 464.0], [18.7, 466.0], [18.8, 469.0], [18.9, 470.0], [19.0, 472.0], [19.1, 473.0], [19.2, 476.0], [19.3, 477.0], [19.4, 478.0], [19.5, 479.0], [19.6, 480.0], [19.7, 481.0], [19.8, 484.0], [19.9, 487.0], [20.0, 487.0], [20.1, 490.0], [20.2, 492.0], [20.3, 495.0], [20.4, 496.0], [20.5, 497.0], [20.6, 499.0], [20.7, 500.0], [20.8, 502.0], [20.9, 503.0], [21.0, 504.0], [21.1, 505.0], [21.2, 508.0], [21.3, 509.0], [21.4, 511.0], [21.5, 513.0], [21.6, 515.0], [21.7, 516.0], [21.8, 517.0], [21.9, 519.0], [22.0, 520.0], [22.1, 522.0], [22.2, 524.0], [22.3, 525.0], [22.4, 526.0], [22.5, 528.0], [22.6, 529.0], [22.7, 530.0], [22.8, 531.0], [22.9, 533.0], [23.0, 534.0], [23.1, 534.0], [23.2, 536.0], [23.3, 537.0], [23.4, 539.0], [23.5, 541.0], [23.6, 542.0], [23.7, 543.0], [23.8, 543.0], [23.9, 544.0], [24.0, 546.0], [24.1, 547.0], [24.2, 548.0], [24.3, 549.0], [24.4, 551.0], [24.5, 551.0], [24.6, 554.0], [24.7, 555.0], [24.8, 556.0], [24.9, 558.0], [25.0, 559.0], [25.1, 561.0], [25.2, 562.0], [25.3, 565.0], [25.4, 568.0], [25.5, 571.0], [25.6, 572.0], [25.7, 574.0], [25.8, 575.0], [25.9, 576.0], [26.0, 577.0], [26.1, 578.0], [26.2, 581.0], [26.3, 582.0], [26.4, 586.0], [26.5, 587.0], [26.6, 588.0], [26.7, 591.0], [26.8, 595.0], [26.9, 599.0], [27.0, 601.0], [27.1, 603.0], [27.2, 604.0], [27.3, 605.0], [27.4, 607.0], [27.5, 609.0], [27.6, 612.0], [27.7, 613.0], [27.8, 615.0], [27.9, 616.0], [28.0, 618.0], [28.1, 620.0], [28.2, 622.0], [28.3, 625.0], [28.4, 626.0], [28.5, 628.0], [28.6, 630.0], [28.7, 632.0], [28.8, 633.0], [28.9, 635.0], [29.0, 636.0], [29.1, 642.0], [29.2, 645.0], [29.3, 647.0], [29.4, 648.0], [29.5, 650.0], [29.6, 652.0], [29.7, 655.0], [29.8, 658.0], [29.9, 660.0], [30.0, 663.0], [30.1, 665.0], [30.2, 668.0], [30.3, 668.0], [30.4, 669.0], [30.5, 671.0], [30.6, 672.0], [30.7, 675.0], [30.8, 679.0], [30.9, 680.0], [31.0, 682.0], [31.1, 682.0], [31.2, 685.0], [31.3, 689.0], [31.4, 691.0], [31.5, 692.0], [31.6, 693.0], [31.7, 695.0], [31.8, 696.0], [31.9, 697.0], [32.0, 698.0], [32.1, 699.0], [32.2, 701.0], [32.3, 702.0], [32.4, 705.0], [32.5, 706.0], [32.6, 707.0], [32.7, 709.0], [32.8, 710.0], [32.9, 712.0], [33.0, 714.0], [33.1, 715.0], [33.2, 717.0], [33.3, 718.0], [33.4, 719.0], [33.5, 720.0], [33.6, 721.0], [33.7, 722.0], [33.8, 724.0], [33.9, 726.0], [34.0, 727.0], [34.1, 730.0], [34.2, 732.0], [34.3, 733.0], [34.4, 735.0], [34.5, 736.0], [34.6, 739.0], [34.7, 741.0], [34.8, 742.0], [34.9, 743.0], [35.0, 745.0], [35.1, 746.0], [35.2, 748.0], [35.3, 749.0], [35.4, 750.0], [35.5, 752.0], [35.6, 755.0], [35.7, 757.0], [35.8, 759.0], [35.9, 761.0], [36.0, 764.0], [36.1, 765.0], [36.2, 766.0], [36.3, 767.0], [36.4, 769.0], [36.5, 770.0], [36.6, 771.0], [36.7, 774.0], [36.8, 778.0], [36.9, 779.0], [37.0, 781.0], [37.1, 782.0], [37.2, 784.0], [37.3, 785.0], [37.4, 786.0], [37.5, 789.0], [37.6, 790.0], [37.7, 792.0], [37.8, 793.0], [37.9, 795.0], [38.0, 797.0], [38.1, 799.0], [38.2, 801.0], [38.3, 804.0], [38.4, 806.0], [38.5, 808.0], [38.6, 810.0], [38.7, 812.0], [38.8, 815.0], [38.9, 817.0], [39.0, 820.0], [39.1, 822.0], [39.2, 823.0], [39.3, 825.0], [39.4, 827.0], [39.5, 828.0], [39.6, 829.0], [39.7, 830.0], [39.8, 833.0], [39.9, 835.0], [40.0, 836.0], [40.1, 838.0], [40.2, 840.0], [40.3, 842.0], [40.4, 845.0], [40.5, 848.0], [40.6, 849.0], [40.7, 851.0], [40.8, 852.0], [40.9, 855.0], [41.0, 857.0], [41.1, 860.0], [41.2, 861.0], [41.3, 862.0], [41.4, 865.0], [41.5, 868.0], [41.6, 869.0], [41.7, 873.0], [41.8, 874.0], [41.9, 878.0], [42.0, 881.0], [42.1, 882.0], [42.2, 885.0], [42.3, 886.0], [42.4, 887.0], [42.5, 888.0], [42.6, 891.0], [42.7, 894.0], [42.8, 895.0], [42.9, 896.0], [43.0, 899.0], [43.1, 901.0], [43.2, 902.0], [43.3, 903.0], [43.4, 904.0], [43.5, 907.0], [43.6, 908.0], [43.7, 910.0], [43.8, 914.0], [43.9, 915.0], [44.0, 916.0], [44.1, 917.0], [44.2, 920.0], [44.3, 921.0], [44.4, 922.0], [44.5, 925.0], [44.6, 927.0], [44.7, 929.0], [44.8, 930.0], [44.9, 930.0], [45.0, 932.0], [45.1, 933.0], [45.2, 935.0], [45.3, 937.0], [45.4, 938.0], [45.5, 940.0], [45.6, 942.0], [45.7, 943.0], [45.8, 946.0], [45.9, 947.0], [46.0, 949.0], [46.1, 951.0], [46.2, 952.0], [46.3, 953.0], [46.4, 956.0], [46.5, 960.0], [46.6, 962.0], [46.7, 965.0], [46.8, 967.0], [46.9, 969.0], [47.0, 972.0], [47.1, 975.0], [47.2, 980.0], [47.3, 983.0], [47.4, 985.0], [47.5, 987.0], [47.6, 991.0], [47.7, 994.0], [47.8, 995.0], [47.9, 996.0], [48.0, 997.0], [48.1, 999.0], [48.2, 1001.0], [48.3, 1003.0], [48.4, 1005.0], [48.5, 1007.0], [48.6, 1008.0], [48.7, 1011.0], [48.8, 1013.0], [48.9, 1016.0], [49.0, 1021.0], [49.1, 1025.0], [49.2, 1027.0], [49.3, 1028.0], [49.4, 1031.0], [49.5, 1034.0], [49.6, 1036.0], [49.7, 1039.0], [49.8, 1040.0], [49.9, 1044.0], [50.0, 1046.0], [50.1, 1049.0], [50.2, 1054.0], [50.3, 1056.0], [50.4, 1061.0], [50.5, 1065.0], [50.6, 1069.0], [50.7, 1073.0], [50.8, 1074.0], [50.9, 1079.0], [51.0, 1080.0], [51.1, 1084.0], [51.2, 1088.0], [51.3, 1091.0], [51.4, 1091.0], [51.5, 1094.0], [51.6, 1097.0], [51.7, 1099.0], [51.8, 1103.0], [51.9, 1105.0], [52.0, 1108.0], [52.1, 1113.0], [52.2, 1117.0], [52.3, 1121.0], [52.4, 1124.0], [52.5, 1127.0], [52.6, 1130.0], [52.7, 1133.0], [52.8, 1136.0], [52.9, 1138.0], [53.0, 1143.0], [53.1, 1145.0], [53.2, 1148.0], [53.3, 1153.0], [53.4, 1155.0], [53.5, 1157.0], [53.6, 1158.0], [53.7, 1159.0], [53.8, 1160.0], [53.9, 1162.0], [54.0, 1163.0], [54.1, 1165.0], [54.2, 1167.0], [54.3, 1169.0], [54.4, 1170.0], [54.5, 1171.0], [54.6, 1173.0], [54.7, 1176.0], [54.8, 1178.0], [54.9, 1182.0], [55.0, 1184.0], [55.1, 1186.0], [55.2, 1188.0], [55.3, 1194.0], [55.4, 1197.0], [55.5, 1200.0], [55.6, 1201.0], [55.7, 1204.0], [55.8, 1206.0], [55.9, 1207.0], [56.0, 1210.0], [56.1, 1212.0], [56.2, 1214.0], [56.3, 1217.0], [56.4, 1219.0], [56.5, 1221.0], [56.6, 1222.0], [56.7, 1223.0], [56.8, 1225.0], [56.9, 1228.0], [57.0, 1229.0], [57.1, 1230.0], [57.2, 1233.0], [57.3, 1235.0], [57.4, 1240.0], [57.5, 1242.0], [57.6, 1243.0], [57.7, 1246.0], [57.8, 1249.0], [57.9, 1253.0], [58.0, 1254.0], [58.1, 1255.0], [58.2, 1259.0], [58.3, 1262.0], [58.4, 1265.0], [58.5, 1267.0], [58.6, 1270.0], [58.7, 1273.0], [58.8, 1274.0], [58.9, 1277.0], [59.0, 1280.0], [59.1, 1281.0], [59.2, 1283.0], [59.3, 1284.0], [59.4, 1287.0], [59.5, 1288.0], [59.6, 1291.0], [59.7, 1294.0], [59.8, 1296.0], [59.9, 1300.0], [60.0, 1304.0], [60.1, 1308.0], [60.2, 1311.0], [60.3, 1315.0], [60.4, 1320.0], [60.5, 1323.0], [60.6, 1324.0], [60.7, 1327.0], [60.8, 1329.0], [60.9, 1331.0], [61.0, 1333.0], [61.1, 1338.0], [61.2, 1342.0], [61.3, 1346.0], [61.4, 1349.0], [61.5, 1352.0], [61.6, 1354.0], [61.7, 1357.0], [61.8, 1362.0], [61.9, 1368.0], [62.0, 1370.0], [62.1, 1374.0], [62.2, 1376.0], [62.3, 1377.0], [62.4, 1379.0], [62.5, 1381.0], [62.6, 1386.0], [62.7, 1388.0], [62.8, 1389.0], [62.9, 1393.0], [63.0, 1397.0], [63.1, 1400.0], [63.2, 1403.0], [63.3, 1406.0], [63.4, 1409.0], [63.5, 1413.0], [63.6, 1418.0], [63.7, 1421.0], [63.8, 1425.0], [63.9, 1428.0], [64.0, 1432.0], [64.1, 1434.0], [64.2, 1437.0], [64.3, 1440.0], [64.4, 1443.0], [64.5, 1447.0], [64.6, 1448.0], [64.7, 1453.0], [64.8, 1455.0], [64.9, 1458.0], [65.0, 1461.0], [65.1, 1464.0], [65.2, 1470.0], [65.3, 1473.0], [65.4, 1478.0], [65.5, 1482.0], [65.6, 1485.0], [65.7, 1486.0], [65.8, 1488.0], [65.9, 1495.0], [66.0, 1498.0], [66.1, 1500.0], [66.2, 1503.0], [66.3, 1507.0], [66.4, 1510.0], [66.5, 1511.0], [66.6, 1515.0], [66.7, 1517.0], [66.8, 1523.0], [66.9, 1524.0], [67.0, 1531.0], [67.1, 1536.0], [67.2, 1537.0], [67.3, 1542.0], [67.4, 1545.0], [67.5, 1548.0], [67.6, 1551.0], [67.7, 1556.0], [67.8, 1561.0], [67.9, 1566.0], [68.0, 1569.0], [68.1, 1574.0], [68.2, 1576.0], [68.3, 1581.0], [68.4, 1591.0], [68.5, 1597.0], [68.6, 1600.0], [68.7, 1603.0], [68.8, 1611.0], [68.9, 1613.0], [69.0, 1616.0], [69.1, 1618.0], [69.2, 1624.0], [69.3, 1626.0], [69.4, 1629.0], [69.5, 1632.0], [69.6, 1635.0], [69.7, 1636.0], [69.8, 1638.0], [69.9, 1640.0], [70.0, 1642.0], [70.1, 1643.0], [70.2, 1645.0], [70.3, 1648.0], [70.4, 1651.0], [70.5, 1653.0], [70.6, 1655.0], [70.7, 1660.0], [70.8, 1662.0], [70.9, 1664.0], [71.0, 1669.0], [71.1, 1671.0], [71.2, 1678.0], [71.3, 1681.0], [71.4, 1689.0], [71.5, 1694.0], [71.6, 1697.0], [71.7, 1708.0], [71.8, 1710.0], [71.9, 1715.0], [72.0, 1719.0], [72.1, 1722.0], [72.2, 1726.0], [72.3, 1728.0], [72.4, 1731.0], [72.5, 1735.0], [72.6, 1739.0], [72.7, 1743.0], [72.8, 1748.0], [72.9, 1751.0], [73.0, 1754.0], [73.1, 1755.0], [73.2, 1756.0], [73.3, 1758.0], [73.4, 1764.0], [73.5, 1769.0], [73.6, 1773.0], [73.7, 1775.0], [73.8, 1785.0], [73.9, 1791.0], [74.0, 1797.0], [74.1, 1799.0], [74.2, 1805.0], [74.3, 1812.0], [74.4, 1818.0], [74.5, 1823.0], [74.6, 1830.0], [74.7, 1835.0], [74.8, 1837.0], [74.9, 1843.0], [75.0, 1846.0], [75.1, 1853.0], [75.2, 1857.0], [75.3, 1861.0], [75.4, 1864.0], [75.5, 1868.0], [75.6, 1873.0], [75.7, 1876.0], [75.8, 1879.0], [75.9, 1881.0], [76.0, 1885.0], [76.1, 1889.0], [76.2, 1894.0], [76.3, 1898.0], [76.4, 1901.0], [76.5, 1904.0], [76.6, 1910.0], [76.7, 1915.0], [76.8, 1920.0], [76.9, 1925.0], [77.0, 1934.0], [77.1, 1940.0], [77.2, 1942.0], [77.3, 1948.0], [77.4, 1951.0], [77.5, 1953.0], [77.6, 1961.0], [77.7, 1965.0], [77.8, 1970.0], [77.9, 1975.0], [78.0, 1981.0], [78.1, 1987.0], [78.2, 1987.0], [78.3, 1993.0], [78.4, 1999.0], [78.5, 2003.0], [78.6, 2005.0], [78.7, 2013.0], [78.8, 2020.0], [78.9, 2024.0], [79.0, 2031.0], [79.1, 2033.0], [79.2, 2038.0], [79.3, 2041.0], [79.4, 2044.0], [79.5, 2048.0], [79.6, 2050.0], [79.7, 2054.0], [79.8, 2060.0], [79.9, 2068.0], [80.0, 2073.0], [80.1, 2077.0], [80.2, 2082.0], [80.3, 2085.0], [80.4, 2090.0], [80.5, 2095.0], [80.6, 2103.0], [80.7, 2106.0], [80.8, 2112.0], [80.9, 2117.0], [81.0, 2122.0], [81.1, 2126.0], [81.2, 2134.0], [81.3, 2142.0], [81.4, 2145.0], [81.5, 2151.0], [81.6, 2158.0], [81.7, 2161.0], [81.8, 2168.0], [81.9, 2169.0], [82.0, 2175.0], [82.1, 2179.0], [82.2, 2182.0], [82.3, 2187.0], [82.4, 2195.0], [82.5, 2198.0], [82.6, 2200.0], [82.7, 2203.0], [82.8, 2211.0], [82.9, 2216.0], [83.0, 2219.0], [83.1, 2223.0], [83.2, 2231.0], [83.3, 2234.0], [83.4, 2237.0], [83.5, 2241.0], [83.6, 2243.0], [83.7, 2246.0], [83.8, 2249.0], [83.9, 2259.0], [84.0, 2265.0], [84.1, 2277.0], [84.2, 2285.0], [84.3, 2291.0], [84.4, 2303.0], [84.5, 2312.0], [84.6, 2317.0], [84.7, 2323.0], [84.8, 2329.0], [84.9, 2334.0], [85.0, 2340.0], [85.1, 2346.0], [85.2, 2349.0], [85.3, 2358.0], [85.4, 2366.0], [85.5, 2369.0], [85.6, 2372.0], [85.7, 2375.0], [85.8, 2381.0], [85.9, 2389.0], [86.0, 2395.0], [86.1, 2399.0], [86.2, 2403.0], [86.3, 2412.0], [86.4, 2416.0], [86.5, 2419.0], [86.6, 2435.0], [86.7, 2443.0], [86.8, 2448.0], [86.9, 2456.0], [87.0, 2465.0], [87.1, 2470.0], [87.2, 2483.0], [87.3, 2493.0], [87.4, 2500.0], [87.5, 2508.0], [87.6, 2514.0], [87.7, 2526.0], [87.8, 2531.0], [87.9, 2544.0], [88.0, 2549.0], [88.1, 2554.0], [88.2, 2561.0], [88.3, 2569.0], [88.4, 2573.0], [88.5, 2581.0], [88.6, 2583.0], [88.7, 2590.0], [88.8, 2596.0], [88.9, 2601.0], [89.0, 2611.0], [89.1, 2619.0], [89.2, 2625.0], [89.3, 2640.0], [89.4, 2644.0], [89.5, 2658.0], [89.6, 2661.0], [89.7, 2669.0], [89.8, 2679.0], [89.9, 2690.0], [90.0, 2696.0], [90.1, 2705.0], [90.2, 2712.0], [90.3, 2724.0], [90.4, 2729.0], [90.5, 2743.0], [90.6, 2750.0], [90.7, 2765.0], [90.8, 2778.0], [90.9, 2788.0], [91.0, 2803.0], [91.1, 2807.0], [91.2, 2826.0], [91.3, 2834.0], [91.4, 2844.0], [91.5, 2856.0], [91.6, 2864.0], [91.7, 2873.0], [91.8, 2882.0], [91.9, 2888.0], [92.0, 2894.0], [92.1, 2906.0], [92.2, 2920.0], [92.3, 2928.0], [92.4, 2940.0], [92.5, 2948.0], [92.6, 2968.0], [92.7, 2984.0], [92.8, 2997.0], [92.9, 3006.0], [93.0, 3012.0], [93.1, 3026.0], [93.2, 3036.0], [93.3, 3043.0], [93.4, 3055.0], [93.5, 3060.0], [93.6, 3064.0], [93.7, 3071.0], [93.8, 3081.0], [93.9, 3088.0], [94.0, 3097.0], [94.1, 3108.0], [94.2, 3110.0], [94.3, 3125.0], [94.4, 3137.0], [94.5, 3148.0], [94.6, 3154.0], [94.7, 3167.0], [94.8, 3187.0], [94.9, 3204.0], [95.0, 3225.0], [95.1, 3242.0], [95.2, 3260.0], [95.3, 3266.0], [95.4, 3277.0], [95.5, 3289.0], [95.6, 3313.0], [95.7, 3359.0], [95.8, 3387.0], [95.9, 3392.0], [96.0, 3419.0], [96.1, 3430.0], [96.2, 3453.0], [96.3, 3480.0], [96.4, 3501.0], [96.5, 3538.0], [96.6, 3549.0], [96.7, 3575.0], [96.8, 3601.0], [96.9, 3633.0], [97.0, 3658.0], [97.1, 3671.0], [97.2, 3677.0], [97.3, 3696.0], [97.4, 3706.0], [97.5, 3741.0], [97.6, 3758.0], [97.7, 3817.0], [97.8, 3859.0], [97.9, 3896.0], [98.0, 3930.0], [98.1, 4014.0], [98.2, 4057.0], [98.3, 4112.0], [98.4, 4149.0], [98.5, 4217.0], [98.6, 4291.0], [98.7, 4324.0], [98.8, 4372.0], [98.9, 4453.0], [99.0, 4517.0], [99.1, 4581.0], [99.2, 4621.0], [99.3, 4689.0], [99.4, 4788.0], [99.5, 4933.0], [99.6, 5131.0], [99.7, 5321.0], [99.8, 5569.0], [99.9, 6055.0], [100.0, 8520.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 464.0, "series": [{"data": [[600.0, 272.0], [700.0, 316.0], [800.0, 258.0], [900.0, 269.0], [1000.0, 190.0], [1100.0, 198.0], [1200.0, 233.0], [1300.0, 167.0], [1400.0, 159.0], [1500.0, 133.0], [1600.0, 160.0], [1700.0, 131.0], [1800.0, 119.0], [1900.0, 109.0], [2000.0, 111.0], [2100.0, 106.0], [2200.0, 97.0], [2300.0, 93.0], [2400.0, 65.0], [2500.0, 77.0], [2600.0, 64.0], [2800.0, 56.0], [2700.0, 49.0], [2900.0, 41.0], [3000.0, 62.0], [3100.0, 46.0], [3200.0, 34.0], [3300.0, 23.0], [3400.0, 23.0], [3500.0, 21.0], [3700.0, 17.0], [3600.0, 29.0], [3800.0, 13.0], [3900.0, 7.0], [4000.0, 12.0], [4200.0, 8.0], [4300.0, 9.0], [4100.0, 11.0], [4500.0, 10.0], [4400.0, 9.0], [4600.0, 9.0], [4700.0, 5.0], [4800.0, 3.0], [4900.0, 3.0], [5100.0, 4.0], [5000.0, 1.0], [5300.0, 4.0], [5200.0, 3.0], [5400.0, 1.0], [5500.0, 1.0], [5800.0, 1.0], [5700.0, 1.0], [5900.0, 2.0], [6000.0, 1.0], [6500.0, 2.0], [6900.0, 1.0], [7100.0, 1.0], [8500.0, 1.0], [100.0, 125.0], [200.0, 464.0], [300.0, 146.0], [400.0, 355.0], [500.0, 331.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1094.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2392.0, "series": [{"data": [[0.0, 1094.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2392.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1786.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 38.86462882096069, "minX": 1.60190076E12, "maxY": 40.0, "series": [{"data": [[1.60190076E12, 39.88415446071905], [1.60190094E12, 38.86462882096069], [1.60190088E12, 40.0], [1.60190082E12, 40.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190094E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1105.5, "minX": 1.0, "maxY": 8520.0, "series": [{"data": [[33.0, 1887.0], [32.0, 1616.0], [2.0, 6966.0], [34.0, 1410.0], [35.0, 1134.5], [37.0, 1126.0], [36.0, 2920.0], [39.0, 1142.0], [38.0, 1134.0], [40.0, 1305.3457120980077], [3.0, 6055.0], [4.0, 5908.0], [5.0, 5761.0], [6.0, 5321.0], [7.0, 5131.0], [8.0, 4872.0], [9.0, 4698.0], [10.0, 4372.0], [11.0, 4612.0], [12.0, 4240.0], [13.0, 4195.0], [14.0, 3726.0], [15.0, 3930.0], [16.0, 3395.0], [1.0, 8520.0], [17.0, 3121.0], [18.0, 3138.0], [19.0, 2887.0], [20.0, 2928.0], [21.0, 2844.0], [22.0, 1374.0], [23.0, 1342.0], [24.0, 1162.5], [25.0, 2158.0], [26.0, 2504.0], [27.0, 2373.0], [28.0, 1381.0], [29.0, 1681.0], [30.0, 1696.0], [31.0, 1105.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.83554628224581, 1319.4366464339892]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6079.75, "minX": 1.60190076E12, "maxY": 1586365.4833333334, "series": [{"data": [[1.60190076E12, 619296.5], [1.60190094E12, 593314.7833333333], [1.60190088E12, 1492720.7666666666], [1.60190082E12, 1586365.4833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60190076E12, 6447.05], [1.60190094E12, 6079.75], [1.60190088E12, 16757.833333333332], [1.60190082E12, 16294.916666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190094E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1247.9167103195396, "minX": 1.60190076E12, "maxY": 1500.2896652110635, "series": [{"data": [[1.60190076E12, 1471.7097203728372], [1.60190094E12, 1500.2896652110635], [1.60190088E12, 1247.9167103195396], [1.60190082E12, 1266.412467532469]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190094E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1247.544264012571, "minX": 1.60190076E12, "maxY": 1499.9039301310027, "series": [{"data": [[1.60190076E12, 1471.2330226364852], [1.60190094E12, 1499.9039301310027], [1.60190088E12, 1247.544264012571], [1.60190082E12, 1266.023896103895]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190094E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60190076E12, "maxY": 1.0332889480692424, "series": [{"data": [[1.60190076E12, 1.0332889480692424], [1.60190094E12, 0.0], [1.60190088E12, 0.024096385542168693], [1.60190082E12, 0.023896103896103926]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190094E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 122.0, "minX": 1.60190076E12, "maxY": 8520.0, "series": [{"data": [[1.60190076E12, 5343.0], [1.60190094E12, 8520.0], [1.60190088E12, 5157.0], [1.60190082E12, 7194.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60190076E12, 211.76799982070924], [1.60190094E12, 168.191999835968], [1.60190088E12, 197.18999954462052], [1.60190082E12, 168.33399954080582]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60190076E12, 212.0], [1.60190094E12, 168.81120006561278], [1.60190088E12, 198.0], [1.60190082E12, 169.06740018367768]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60190076E12, 212.0], [1.60190094E12, 168.53599991798401], [1.60190088E12, 198.0], [1.60190082E12, 169.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60190076E12, 197.0], [1.60190094E12, 160.0], [1.60190088E12, 162.0], [1.60190082E12, 122.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60190076E12, 1294.0], [1.60190094E12, 1210.0], [1.60190088E12, 1035.0], [1.60190082E12, 933.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190094E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 368.5, "minX": 1.0, "maxY": 8520.0, "series": [{"data": [[3.0, 6055.0], [4.0, 4401.0], [5.0, 4372.0], [6.0, 2607.0], [8.0, 2575.0], [10.0, 2930.0], [11.0, 2736.0], [12.0, 2729.0], [13.0, 2489.0], [14.0, 2206.0], [15.0, 2230.0], [16.0, 1577.5], [17.0, 2029.0], [18.0, 1914.0], [19.0, 1639.0], [20.0, 1653.0], [21.0, 1470.0], [22.0, 1623.5], [23.0, 1603.0], [24.0, 1580.5], [25.0, 1094.0], [26.0, 1196.5], [27.0, 1354.0], [28.0, 1657.0], [29.0, 1209.0], [30.0, 1160.0], [31.0, 808.0], [32.0, 1234.5], [33.0, 1386.0], [34.0, 1669.0], [35.0, 1011.0], [36.0, 1146.0], [37.0, 970.0], [39.0, 1342.5], [38.0, 1223.5], [40.0, 1223.5], [43.0, 903.0], [42.0, 698.0], [45.0, 838.0], [44.0, 928.0], [46.0, 734.0], [49.0, 986.0], [48.0, 834.0], [51.0, 592.0], [53.0, 539.0], [52.0, 525.0], [55.0, 766.5], [54.0, 692.0], [56.0, 779.5], [62.0, 532.0], [65.0, 626.0], [66.0, 504.5], [64.0, 516.5], [69.0, 679.0], [68.0, 606.0], [70.0, 577.5], [73.0, 452.0], [79.0, 452.5], [80.0, 468.5], [86.0, 368.5], [87.0, 448.0], [1.0, 8520.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 368.5, "minX": 1.0, "maxY": 8519.0, "series": [{"data": [[3.0, 6055.0], [4.0, 4400.0], [5.0, 4371.0], [6.0, 2602.0], [8.0, 2574.0], [10.0, 2927.0], [11.0, 2735.0], [12.0, 2728.5], [13.0, 2488.0], [14.0, 2202.5], [15.0, 2229.0], [16.0, 1577.5], [17.0, 2028.0], [18.0, 1913.5], [19.0, 1636.0], [20.0, 1652.5], [21.0, 1470.0], [22.0, 1623.5], [23.0, 1603.0], [24.0, 1580.5], [25.0, 1094.0], [26.0, 1196.5], [27.0, 1354.0], [28.0, 1657.0], [29.0, 1209.0], [30.0, 1160.0], [31.0, 808.0], [32.0, 1234.5], [33.0, 1386.0], [34.0, 1669.0], [35.0, 1011.0], [36.0, 1146.0], [37.0, 970.0], [39.0, 1342.5], [38.0, 1223.5], [40.0, 1223.5], [43.0, 903.0], [42.0, 697.5], [45.0, 838.0], [44.0, 928.0], [46.0, 734.0], [49.0, 986.0], [48.0, 834.0], [51.0, 592.0], [53.0, 539.0], [52.0, 525.0], [55.0, 766.5], [54.0, 692.0], [56.0, 779.5], [62.0, 532.0], [65.0, 626.0], [66.0, 504.5], [64.0, 516.5], [69.0, 679.0], [68.0, 605.5], [70.0, 577.5], [73.0, 452.0], [79.0, 452.5], [80.0, 468.5], [86.0, 368.5], [87.0, 448.0], [1.0, 8519.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.783333333333333, "minX": 1.60190076E12, "maxY": 32.083333333333336, "series": [{"data": [[1.60190076E12, 13.183333333333334], [1.60190094E12, 10.783333333333333], [1.60190088E12, 31.816666666666666], [1.60190082E12, 32.083333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190094E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.45, "minX": 1.60190076E12, "maxY": 32.083333333333336, "series": [{"data": [[1.60190076E12, 12.516666666666667], [1.60190094E12, 11.45], [1.60190088E12, 31.816666666666666], [1.60190082E12, 32.083333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190094E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.45, "minX": 1.60190076E12, "maxY": 32.083333333333336, "series": [{"data": [[1.60190076E12, 12.516666666666667], [1.60190094E12, 11.45], [1.60190088E12, 31.816666666666666], [1.60190082E12, 32.083333333333336]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190094E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.45, "minX": 1.60190076E12, "maxY": 32.083333333333336, "series": [{"data": [[1.60190076E12, 12.516666666666667], [1.60190094E12, 11.45], [1.60190088E12, 31.816666666666666], [1.60190082E12, 32.083333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190094E12, "title": "Total Transactions Per Second"}},
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

