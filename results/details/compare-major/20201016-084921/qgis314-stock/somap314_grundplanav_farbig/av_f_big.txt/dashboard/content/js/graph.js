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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 4242.0, "series": [{"data": [[0.0, 184.0], [0.1, 184.0], [0.2, 190.0], [0.3, 203.0], [0.4, 203.0], [0.5, 208.0], [0.6, 209.0], [0.7, 211.0], [0.8, 211.0], [0.9, 214.0], [1.0, 221.0], [1.1, 223.0], [1.2, 223.0], [1.3, 228.0], [1.4, 228.0], [1.5, 234.0], [1.6, 234.0], [1.7, 235.0], [1.8, 236.0], [1.9, 236.0], [2.0, 243.0], [2.1, 245.0], [2.2, 245.0], [2.3, 245.0], [2.4, 246.0], [2.5, 250.0], [2.6, 261.0], [2.7, 261.0], [2.8, 261.0], [2.9, 272.0], [3.0, 295.0], [3.1, 295.0], [3.2, 304.0], [3.3, 309.0], [3.4, 309.0], [3.5, 326.0], [3.6, 328.0], [3.7, 329.0], [3.8, 329.0], [3.9, 331.0], [4.0, 332.0], [4.1, 341.0], [4.2, 341.0], [4.3, 341.0], [4.4, 343.0], [4.5, 344.0], [4.6, 344.0], [4.7, 351.0], [4.8, 354.0], [4.9, 354.0], [5.0, 354.0], [5.1, 360.0], [5.2, 361.0], [5.3, 361.0], [5.4, 362.0], [5.5, 364.0], [5.6, 367.0], [5.7, 367.0], [5.8, 368.0], [5.9, 370.0], [6.0, 370.0], [6.1, 370.0], [6.2, 373.0], [6.3, 375.0], [6.4, 376.0], [6.5, 376.0], [6.6, 376.0], [6.7, 377.0], [6.8, 377.0], [6.9, 377.0], [7.0, 379.0], [7.1, 379.0], [7.2, 379.0], [7.3, 381.0], [7.4, 386.0], [7.5, 387.0], [7.6, 387.0], [7.7, 387.0], [7.8, 388.0], [7.9, 393.0], [8.0, 393.0], [8.1, 395.0], [8.2, 396.0], [8.3, 396.0], [8.4, 396.0], [8.5, 398.0], [8.6, 404.0], [8.7, 404.0], [8.8, 404.0], [8.9, 407.0], [9.0, 409.0], [9.1, 409.0], [9.2, 415.0], [9.3, 416.0], [9.4, 418.0], [9.5, 418.0], [9.6, 421.0], [9.7, 424.0], [9.8, 425.0], [9.9, 425.0], [10.0, 443.0], [10.1, 445.0], [10.2, 445.0], [10.3, 445.0], [10.4, 445.0], [10.5, 446.0], [10.6, 446.0], [10.7, 446.0], [10.8, 448.0], [10.9, 451.0], [11.0, 451.0], [11.1, 452.0], [11.2, 454.0], [11.3, 459.0], [11.4, 459.0], [11.5, 463.0], [11.6, 463.0], [11.7, 463.0], [11.8, 466.0], [11.9, 470.0], [12.0, 471.0], [12.1, 471.0], [12.2, 475.0], [12.3, 478.0], [12.4, 478.0], [12.5, 478.0], [12.6, 478.0], [12.7, 480.0], [12.8, 480.0], [12.9, 480.0], [13.0, 480.0], [13.1, 481.0], [13.2, 482.0], [13.3, 482.0], [13.4, 482.0], [13.5, 483.0], [13.6, 483.0], [13.7, 484.0], [13.8, 484.0], [13.9, 490.0], [14.0, 490.0], [14.1, 491.0], [14.2, 495.0], [14.3, 501.0], [14.4, 501.0], [14.5, 508.0], [14.6, 521.0], [14.7, 522.0], [14.8, 522.0], [14.9, 525.0], [15.0, 535.0], [15.1, 535.0], [15.2, 537.0], [15.3, 539.0], [15.4, 539.0], [15.5, 539.0], [15.6, 542.0], [15.7, 543.0], [15.8, 545.0], [15.9, 545.0], [16.0, 546.0], [16.1, 549.0], [16.2, 550.0], [16.3, 550.0], [16.4, 553.0], [16.5, 553.0], [16.6, 556.0], [16.7, 556.0], [16.8, 558.0], [16.9, 559.0], [17.0, 559.0], [17.1, 559.0], [17.2, 561.0], [17.3, 562.0], [17.4, 562.0], [17.5, 562.0], [17.6, 563.0], [17.7, 564.0], [17.8, 564.0], [17.9, 565.0], [18.0, 565.0], [18.1, 568.0], [18.2, 568.0], [18.3, 569.0], [18.4, 572.0], [18.5, 572.0], [18.6, 572.0], [18.7, 574.0], [18.8, 578.0], [18.9, 578.0], [19.0, 579.0], [19.1, 580.0], [19.2, 580.0], [19.3, 580.0], [19.4, 581.0], [19.5, 581.0], [19.6, 582.0], [19.7, 582.0], [19.8, 585.0], [19.9, 586.0], [20.0, 587.0], [20.1, 587.0], [20.2, 593.0], [20.3, 593.0], [20.4, 593.0], [20.5, 594.0], [20.6, 597.0], [20.7, 599.0], [20.8, 599.0], [20.9, 607.0], [21.0, 608.0], [21.1, 610.0], [21.2, 610.0], [21.3, 610.0], [21.4, 610.0], [21.5, 611.0], [21.6, 611.0], [21.7, 611.0], [21.8, 613.0], [21.9, 613.0], [22.0, 614.0], [22.1, 615.0], [22.2, 625.0], [22.3, 625.0], [22.4, 629.0], [22.5, 630.0], [22.6, 631.0], [22.7, 631.0], [22.8, 632.0], [22.9, 633.0], [23.0, 634.0], [23.1, 634.0], [23.2, 635.0], [23.3, 641.0], [23.4, 641.0], [23.5, 642.0], [23.6, 643.0], [23.7, 644.0], [23.8, 644.0], [23.9, 646.0], [24.0, 649.0], [24.1, 652.0], [24.2, 652.0], [24.3, 653.0], [24.4, 654.0], [24.5, 654.0], [24.6, 654.0], [24.7, 655.0], [24.8, 656.0], [24.9, 656.0], [25.0, 656.0], [25.1, 658.0], [25.2, 658.0], [25.3, 658.0], [25.4, 659.0], [25.5, 659.0], [25.6, 660.0], [25.7, 660.0], [25.8, 661.0], [25.9, 663.0], [26.0, 664.0], [26.1, 664.0], [26.2, 664.0], [26.3, 664.0], [26.4, 665.0], [26.5, 665.0], [26.6, 666.0], [26.7, 667.0], [26.8, 667.0], [26.9, 667.0], [27.0, 668.0], [27.1, 669.0], [27.2, 669.0], [27.3, 669.0], [27.4, 670.0], [27.5, 677.0], [27.6, 677.0], [27.7, 677.0], [27.8, 679.0], [27.9, 680.0], [28.0, 680.0], [28.1, 681.0], [28.2, 682.0], [28.3, 682.0], [28.4, 682.0], [28.5, 683.0], [28.6, 684.0], [28.7, 684.0], [28.8, 687.0], [28.9, 687.0], [29.0, 689.0], [29.1, 689.0], [29.2, 690.0], [29.3, 693.0], [29.4, 696.0], [29.5, 696.0], [29.6, 697.0], [29.7, 699.0], [29.8, 702.0], [29.9, 702.0], [30.0, 703.0], [30.1, 704.0], [30.2, 704.0], [30.3, 705.0], [30.4, 705.0], [30.5, 708.0], [30.6, 708.0], [30.7, 709.0], [30.8, 710.0], [30.9, 710.0], [31.0, 710.0], [31.1, 712.0], [31.2, 713.0], [31.3, 715.0], [31.4, 715.0], [31.5, 717.0], [31.6, 718.0], [31.7, 718.0], [31.8, 721.0], [31.9, 721.0], [32.0, 721.0], [32.1, 721.0], [32.2, 723.0], [32.3, 723.0], [32.4, 724.0], [32.5, 724.0], [32.6, 726.0], [32.7, 727.0], [32.8, 730.0], [32.9, 730.0], [33.0, 731.0], [33.1, 732.0], [33.2, 732.0], [33.3, 732.0], [33.4, 735.0], [33.5, 737.0], [33.6, 737.0], [33.7, 740.0], [33.8, 740.0], [33.9, 741.0], [34.0, 741.0], [34.1, 742.0], [34.2, 743.0], [34.3, 743.0], [34.4, 743.0], [34.5, 743.0], [34.6, 744.0], [34.7, 745.0], [34.8, 745.0], [34.9, 748.0], [35.0, 751.0], [35.1, 751.0], [35.2, 751.0], [35.3, 752.0], [35.4, 756.0], [35.5, 756.0], [35.6, 757.0], [35.7, 760.0], [35.8, 760.0], [35.9, 760.0], [36.0, 761.0], [36.1, 763.0], [36.2, 767.0], [36.3, 767.0], [36.4, 768.0], [36.5, 768.0], [36.6, 771.0], [36.7, 771.0], [36.8, 771.0], [36.9, 773.0], [37.0, 773.0], [37.1, 774.0], [37.2, 774.0], [37.3, 775.0], [37.4, 775.0], [37.5, 777.0], [37.6, 780.0], [37.7, 780.0], [37.8, 780.0], [37.9, 781.0], [38.0, 788.0], [38.1, 789.0], [38.2, 789.0], [38.3, 795.0], [38.4, 798.0], [38.5, 798.0], [38.6, 799.0], [38.7, 803.0], [38.8, 803.0], [38.9, 803.0], [39.0, 804.0], [39.1, 804.0], [39.2, 806.0], [39.3, 806.0], [39.4, 807.0], [39.5, 807.0], [39.6, 809.0], [39.7, 809.0], [39.8, 809.0], [39.9, 810.0], [40.0, 814.0], [40.1, 814.0], [40.2, 815.0], [40.3, 827.0], [40.4, 827.0], [40.5, 829.0], [40.6, 830.0], [40.7, 831.0], [40.8, 831.0], [40.9, 833.0], [41.0, 836.0], [41.1, 841.0], [41.2, 841.0], [41.3, 842.0], [41.4, 842.0], [41.5, 842.0], [41.6, 842.0], [41.7, 843.0], [41.8, 847.0], [41.9, 847.0], [42.0, 849.0], [42.1, 849.0], [42.2, 852.0], [42.3, 852.0], [42.4, 852.0], [42.5, 862.0], [42.6, 864.0], [42.7, 864.0], [42.8, 865.0], [42.9, 866.0], [43.0, 867.0], [43.1, 867.0], [43.2, 869.0], [43.3, 870.0], [43.4, 870.0], [43.5, 871.0], [43.6, 871.0], [43.7, 871.0], [43.8, 871.0], [43.9, 873.0], [44.0, 877.0], [44.1, 878.0], [44.2, 878.0], [44.3, 884.0], [44.4, 888.0], [44.5, 888.0], [44.6, 888.0], [44.7, 892.0], [44.8, 893.0], [44.9, 899.0], [45.0, 899.0], [45.1, 901.0], [45.2, 901.0], [45.3, 901.0], [45.4, 903.0], [45.5, 904.0], [45.6, 906.0], [45.7, 906.0], [45.8, 907.0], [45.9, 907.0], [46.0, 909.0], [46.1, 909.0], [46.2, 916.0], [46.3, 919.0], [46.4, 921.0], [46.5, 921.0], [46.6, 922.0], [46.7, 926.0], [46.8, 926.0], [46.9, 927.0], [47.0, 927.0], [47.1, 929.0], [47.2, 929.0], [47.3, 936.0], [47.4, 936.0], [47.5, 941.0], [47.6, 941.0], [47.7, 941.0], [47.8, 943.0], [47.9, 944.0], [48.0, 944.0], [48.1, 944.0], [48.2, 946.0], [48.3, 947.0], [48.4, 947.0], [48.5, 948.0], [48.6, 949.0], [48.7, 949.0], [48.8, 951.0], [48.9, 953.0], [49.0, 953.0], [49.1, 953.0], [49.2, 954.0], [49.3, 955.0], [49.4, 956.0], [49.5, 956.0], [49.6, 959.0], [49.7, 963.0], [49.8, 965.0], [49.9, 965.0], [50.0, 970.0], [50.1, 977.0], [50.2, 977.0], [50.3, 977.0], [50.4, 978.0], [50.5, 979.0], [50.6, 979.0], [50.7, 983.0], [50.8, 985.0], [50.9, 985.0], [51.0, 985.0], [51.1, 986.0], [51.2, 987.0], [51.3, 988.0], [51.4, 988.0], [51.5, 990.0], [51.6, 992.0], [51.7, 992.0], [51.8, 993.0], [51.9, 996.0], [52.0, 1003.0], [52.1, 1003.0], [52.2, 1003.0], [52.3, 1004.0], [52.4, 1008.0], [52.5, 1008.0], [52.6, 1009.0], [52.7, 1009.0], [52.8, 1015.0], [52.9, 1015.0], [53.0, 1020.0], [53.1, 1027.0], [53.2, 1031.0], [53.3, 1031.0], [53.4, 1038.0], [53.5, 1040.0], [53.6, 1040.0], [53.7, 1041.0], [53.8, 1046.0], [53.9, 1047.0], [54.0, 1047.0], [54.1, 1047.0], [54.2, 1051.0], [54.3, 1056.0], [54.4, 1056.0], [54.5, 1059.0], [54.6, 1064.0], [54.7, 1066.0], [54.8, 1066.0], [54.9, 1070.0], [55.0, 1071.0], [55.1, 1071.0], [55.2, 1072.0], [55.3, 1080.0], [55.4, 1085.0], [55.5, 1085.0], [55.6, 1091.0], [55.7, 1092.0], [55.8, 1098.0], [55.9, 1098.0], [56.0, 1099.0], [56.1, 1102.0], [56.2, 1102.0], [56.3, 1102.0], [56.4, 1104.0], [56.5, 1115.0], [56.6, 1117.0], [56.7, 1117.0], [56.8, 1119.0], [56.9, 1126.0], [57.0, 1126.0], [57.1, 1127.0], [57.2, 1128.0], [57.3, 1132.0], [57.4, 1132.0], [57.5, 1137.0], [57.6, 1140.0], [57.7, 1143.0], [57.8, 1143.0], [57.9, 1143.0], [58.0, 1144.0], [58.1, 1144.0], [58.2, 1144.0], [58.3, 1145.0], [58.4, 1148.0], [58.5, 1148.0], [58.6, 1149.0], [58.7, 1149.0], [58.8, 1151.0], [58.9, 1151.0], [59.0, 1151.0], [59.1, 1156.0], [59.2, 1158.0], [59.3, 1158.0], [59.4, 1159.0], [59.5, 1165.0], [59.6, 1167.0], [59.7, 1167.0], [59.8, 1167.0], [59.9, 1172.0], [60.0, 1173.0], [60.1, 1173.0], [60.2, 1173.0], [60.3, 1174.0], [60.4, 1174.0], [60.5, 1176.0], [60.6, 1178.0], [60.7, 1180.0], [60.8, 1180.0], [60.9, 1180.0], [61.0, 1181.0], [61.1, 1184.0], [61.2, 1184.0], [61.3, 1188.0], [61.4, 1190.0], [61.5, 1198.0], [61.6, 1198.0], [61.7, 1200.0], [61.8, 1201.0], [61.9, 1201.0], [62.0, 1202.0], [62.1, 1202.0], [62.2, 1207.0], [62.3, 1207.0], [62.4, 1213.0], [62.5, 1215.0], [62.6, 1225.0], [62.7, 1225.0], [62.8, 1225.0], [62.9, 1226.0], [63.0, 1237.0], [63.1, 1237.0], [63.2, 1238.0], [63.3, 1243.0], [63.4, 1243.0], [63.5, 1249.0], [63.6, 1251.0], [63.7, 1253.0], [63.8, 1253.0], [63.9, 1253.0], [64.0, 1254.0], [64.1, 1255.0], [64.2, 1255.0], [64.3, 1261.0], [64.4, 1262.0], [64.5, 1268.0], [64.6, 1268.0], [64.7, 1273.0], [64.8, 1274.0], [64.9, 1275.0], [65.0, 1275.0], [65.1, 1276.0], [65.2, 1278.0], [65.3, 1278.0], [65.4, 1279.0], [65.5, 1280.0], [65.6, 1281.0], [65.7, 1281.0], [65.8, 1282.0], [65.9, 1285.0], [66.0, 1285.0], [66.1, 1285.0], [66.2, 1286.0], [66.3, 1290.0], [66.4, 1292.0], [66.5, 1292.0], [66.6, 1294.0], [66.7, 1294.0], [66.8, 1294.0], [66.9, 1297.0], [67.0, 1300.0], [67.1, 1301.0], [67.2, 1301.0], [67.3, 1304.0], [67.4, 1304.0], [67.5, 1304.0], [67.6, 1304.0], [67.7, 1306.0], [67.8, 1307.0], [67.9, 1307.0], [68.0, 1307.0], [68.1, 1308.0], [68.2, 1310.0], [68.3, 1316.0], [68.4, 1316.0], [68.5, 1318.0], [68.6, 1319.0], [68.7, 1319.0], [68.8, 1323.0], [68.9, 1328.0], [69.0, 1330.0], [69.1, 1330.0], [69.2, 1333.0], [69.3, 1335.0], [69.4, 1343.0], [69.5, 1343.0], [69.6, 1345.0], [69.7, 1349.0], [69.8, 1350.0], [69.9, 1350.0], [70.0, 1351.0], [70.1, 1353.0], [70.2, 1353.0], [70.3, 1353.0], [70.4, 1357.0], [70.5, 1359.0], [70.6, 1359.0], [70.7, 1363.0], [70.8, 1363.0], [70.9, 1366.0], [71.0, 1366.0], [71.1, 1369.0], [71.2, 1370.0], [71.3, 1372.0], [71.4, 1372.0], [71.5, 1372.0], [71.6, 1376.0], [71.7, 1376.0], [71.8, 1377.0], [71.9, 1377.0], [72.0, 1380.0], [72.1, 1380.0], [72.2, 1381.0], [72.3, 1387.0], [72.4, 1387.0], [72.5, 1387.0], [72.6, 1388.0], [72.7, 1389.0], [72.8, 1391.0], [72.9, 1391.0], [73.0, 1400.0], [73.1, 1403.0], [73.2, 1404.0], [73.3, 1404.0], [73.4, 1404.0], [73.5, 1419.0], [73.6, 1419.0], [73.7, 1419.0], [73.8, 1424.0], [73.9, 1426.0], [74.0, 1426.0], [74.1, 1428.0], [74.2, 1431.0], [74.3, 1433.0], [74.4, 1433.0], [74.5, 1433.0], [74.6, 1436.0], [74.7, 1436.0], [74.8, 1436.0], [74.9, 1436.0], [75.0, 1445.0], [75.1, 1445.0], [75.2, 1445.0], [75.3, 1446.0], [75.4, 1447.0], [75.5, 1447.0], [75.6, 1449.0], [75.7, 1451.0], [75.8, 1456.0], [75.9, 1456.0], [76.0, 1460.0], [76.1, 1466.0], [76.2, 1467.0], [76.3, 1467.0], [76.4, 1477.0], [76.5, 1477.0], [76.6, 1480.0], [76.7, 1480.0], [76.8, 1485.0], [76.9, 1487.0], [77.0, 1487.0], [77.1, 1487.0], [77.2, 1494.0], [77.3, 1496.0], [77.4, 1496.0], [77.5, 1505.0], [77.6, 1506.0], [77.7, 1506.0], [77.8, 1506.0], [77.9, 1506.0], [78.0, 1507.0], [78.1, 1509.0], [78.2, 1509.0], [78.3, 1510.0], [78.4, 1510.0], [78.5, 1510.0], [78.6, 1515.0], [78.7, 1517.0], [78.8, 1518.0], [78.9, 1518.0], [79.0, 1520.0], [79.1, 1521.0], [79.2, 1531.0], [79.3, 1531.0], [79.4, 1532.0], [79.5, 1534.0], [79.6, 1539.0], [79.7, 1539.0], [79.8, 1540.0], [79.9, 1546.0], [80.0, 1552.0], [80.1, 1552.0], [80.2, 1553.0], [80.3, 1557.0], [80.4, 1557.0], [80.5, 1562.0], [80.6, 1563.0], [80.7, 1567.0], [80.8, 1567.0], [80.9, 1573.0], [81.0, 1576.0], [81.1, 1581.0], [81.2, 1581.0], [81.3, 1587.0], [81.4, 1588.0], [81.5, 1589.0], [81.6, 1589.0], [81.7, 1592.0], [81.8, 1598.0], [81.9, 1598.0], [82.0, 1598.0], [82.1, 1611.0], [82.2, 1615.0], [82.3, 1615.0], [82.4, 1620.0], [82.5, 1620.0], [82.6, 1620.0], [82.7, 1620.0], [82.8, 1622.0], [82.9, 1624.0], [83.0, 1632.0], [83.1, 1632.0], [83.2, 1648.0], [83.3, 1649.0], [83.4, 1649.0], [83.5, 1651.0], [83.6, 1652.0], [83.7, 1652.0], [83.8, 1652.0], [83.9, 1655.0], [84.0, 1658.0], [84.1, 1665.0], [84.2, 1665.0], [84.3, 1666.0], [84.4, 1671.0], [84.5, 1677.0], [84.6, 1677.0], [84.7, 1685.0], [84.8, 1689.0], [84.9, 1690.0], [85.0, 1690.0], [85.1, 1696.0], [85.2, 1696.0], [85.3, 1696.0], [85.4, 1701.0], [85.5, 1713.0], [85.6, 1715.0], [85.7, 1715.0], [85.8, 1722.0], [85.9, 1728.0], [86.0, 1730.0], [86.1, 1730.0], [86.2, 1735.0], [86.3, 1740.0], [86.4, 1753.0], [86.5, 1753.0], [86.6, 1754.0], [86.7, 1770.0], [86.8, 1770.0], [86.9, 1777.0], [87.0, 1786.0], [87.1, 1803.0], [87.2, 1803.0], [87.3, 1803.0], [87.4, 1806.0], [87.5, 1806.0], [87.6, 1806.0], [87.7, 1808.0], [87.8, 1809.0], [87.9, 1814.0], [88.0, 1814.0], [88.1, 1817.0], [88.2, 1819.0], [88.3, 1826.0], [88.4, 1826.0], [88.5, 1833.0], [88.6, 1841.0], [88.7, 1841.0], [88.8, 1843.0], [88.9, 1846.0], [89.0, 1851.0], [89.1, 1851.0], [89.2, 1861.0], [89.3, 1869.0], [89.4, 1870.0], [89.5, 1870.0], [89.6, 1870.0], [89.7, 1881.0], [89.8, 1892.0], [89.9, 1892.0], [90.0, 1892.0], [90.1, 1896.0], [90.2, 1896.0], [90.3, 1898.0], [90.4, 1898.0], [90.5, 1905.0], [90.6, 1905.0], [90.7, 1906.0], [90.8, 1910.0], [90.9, 1910.0], [91.0, 1910.0], [91.1, 1912.0], [91.2, 1915.0], [91.3, 1916.0], [91.4, 1916.0], [91.5, 1920.0], [91.6, 1922.0], [91.7, 1922.0], [91.8, 1928.0], [91.9, 1928.0], [92.0, 1932.0], [92.1, 1932.0], [92.2, 1936.0], [92.3, 1957.0], [92.4, 1959.0], [92.5, 1959.0], [92.6, 1961.0], [92.7, 1962.0], [92.8, 1968.0], [92.9, 1968.0], [93.0, 1980.0], [93.1, 1985.0], [93.2, 2005.0], [93.3, 2005.0], [93.4, 2036.0], [93.5, 2036.0], [93.6, 2036.0], [93.7, 2049.0], [93.8, 2050.0], [93.9, 2052.0], [94.0, 2052.0], [94.1, 2061.0], [94.2, 2079.0], [94.3, 2111.0], [94.4, 2111.0], [94.5, 2116.0], [94.6, 2176.0], [94.7, 2181.0], [94.8, 2181.0], [94.9, 2182.0], [95.0, 2183.0], [95.1, 2183.0], [95.2, 2192.0], [95.3, 2201.0], [95.4, 2214.0], [95.5, 2214.0], [95.6, 2215.0], [95.7, 2226.0], [95.8, 2227.0], [95.9, 2227.0], [96.0, 2264.0], [96.1, 2271.0], [96.2, 2273.0], [96.3, 2273.0], [96.4, 2282.0], [96.5, 2316.0], [96.6, 2355.0], [96.7, 2355.0], [96.8, 2356.0], [96.9, 2369.0], [97.0, 2369.0], [97.1, 2384.0], [97.2, 2441.0], [97.3, 2466.0], [97.4, 2466.0], [97.5, 2517.0], [97.6, 2585.0], [97.7, 2616.0], [97.8, 2616.0], [97.9, 2662.0], [98.0, 2771.0], [98.1, 2776.0], [98.2, 2776.0], [98.3, 2946.0], [98.4, 2954.0], [98.5, 2954.0], [98.6, 3014.0], [98.7, 3032.0], [98.8, 3174.0], [98.9, 3174.0], [99.0, 3179.0], [99.1, 3293.0], [99.2, 3379.0], [99.3, 3379.0], [99.4, 3407.0], [99.5, 3735.0], [99.6, 3948.0], [99.7, 3948.0], [99.8, 4134.0], [99.9, 4242.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 66.0, "series": [{"data": [[600.0, 66.0], [700.0, 65.0], [800.0, 47.0], [900.0, 51.0], [1000.0, 30.0], [1100.0, 41.0], [1200.0, 39.0], [1300.0, 44.0], [1400.0, 33.0], [1500.0, 34.0], [1600.0, 24.0], [100.0, 2.0], [1700.0, 13.0], [1800.0, 25.0], [1900.0, 20.0], [2000.0, 8.0], [2100.0, 7.0], [2300.0, 5.0], [2200.0, 9.0], [2400.0, 2.0], [2500.0, 2.0], [2600.0, 2.0], [2700.0, 2.0], [2900.0, 2.0], [3000.0, 2.0], [3100.0, 2.0], [3300.0, 1.0], [200.0, 21.0], [3200.0, 1.0], [3400.0, 1.0], [3700.0, 1.0], [3900.0, 1.0], [4200.0, 1.0], [4100.0, 1.0], [300.0, 40.0], [400.0, 42.0], [500.0, 48.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 105.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 464.0, "series": [{"data": [[0.0, 105.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 464.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 166.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.874999999999998, "minX": 1.60284E12, "maxY": 10.0, "series": [{"data": [[1.60284012E12, 8.874999999999998], [1.60284006E12, 10.0], [1.60284E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284012E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 341.0, "minX": 1.0, "maxY": 1176.0, "series": [{"data": [[8.0, 723.0], [4.0, 730.0], [2.0, 1176.0], [1.0, 1104.0], [9.0, 341.0], [10.0, 1104.169421487604], [5.0, 774.0], [6.0, 740.0], [3.0, 732.0], [7.0, 743.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1100.2585034013614]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 292.93333333333334, "minX": 1.60284E12, "maxY": 1232327.2333333334, "series": [{"data": [[1.60284012E12, 149078.38333333333], [1.60284006E12, 1232327.2333333334], [1.60284E12, 454272.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60284012E12, 292.93333333333334], [1.60284006E12, 4237.966666666666], [1.60284E12, 992.1333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284012E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1055.012411347518, "minX": 1.60284E12, "maxY": 1288.9618320610687, "series": [{"data": [[1.60284012E12, 1120.2249999999997], [1.60284006E12, 1055.012411347518], [1.60284E12, 1288.9618320610687]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284012E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1053.925531914893, "minX": 1.60284E12, "maxY": 1287.541984732824, "series": [{"data": [[1.60284012E12, 1118.5000000000002], [1.60284006E12, 1053.925531914893], [1.60284E12, 1287.541984732824]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284012E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60284E12, "maxY": 0.6641221374045798, "series": [{"data": [[1.60284012E12, 0.0], [1.60284006E12, 0.021276595744680854], [1.60284E12, 0.6641221374045798]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284012E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60284E12, "maxY": 4242.0, "series": [{"data": [[1.60284012E12, 3293.0], [1.60284006E12, 3948.0], [1.60284E12, 4242.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60284012E12, 295.0], [1.60284006E12, 212.44499770998954], [1.60284E12, 205.06799965381623]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60284012E12, 295.0], [1.60284006E12, 221.08950091600417], [1.60284E12, 206.37480013847352]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60284012E12, 295.0], [1.60284006E12, 217.24749885499477], [1.60284E12, 205.7939998269081]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60284012E12, 295.0], [1.60284006E12, 184.0], [1.60284E12, 203.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60284012E12, 768.5], [1.60284006E12, 953.5], [1.60284E12, 1149.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284012E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 645.0, "minX": 1.0, "maxY": 2808.0, "series": [{"data": [[1.0, 2441.0], [8.0, 1258.0], [16.0, 688.0], [9.0, 1200.0], [5.0, 1735.0], [10.0, 1012.0], [11.0, 645.0], [12.0, 780.5], [6.0, 862.5], [13.0, 742.0], [14.0, 2808.0], [7.0, 1003.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 644.0, "minX": 1.0, "maxY": 2807.0, "series": [{"data": [[1.0, 2436.0], [8.0, 1258.0], [16.0, 688.0], [9.0, 1199.0], [5.0, 1734.0], [10.0, 1011.5], [11.0, 644.0], [12.0, 780.0], [6.0, 861.5], [13.0, 741.0], [14.0, 2807.0], [7.0, 1002.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60284E12, "maxY": 9.4, "series": [{"data": [[1.60284012E12, 0.5], [1.60284006E12, 9.4], [1.60284E12, 2.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284012E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.60284E12, "maxY": 9.4, "series": [{"data": [[1.60284012E12, 0.6666666666666666], [1.60284006E12, 9.4], [1.60284E12, 2.183333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284012E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.60284E12, "maxY": 9.4, "series": [{"data": [[1.60284012E12, 0.6666666666666666], [1.60284006E12, 9.4], [1.60284E12, 2.183333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284012E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.60284E12, "maxY": 9.4, "series": [{"data": [[1.60284012E12, 0.6666666666666666], [1.60284006E12, 9.4], [1.60284E12, 2.183333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284012E12, "title": "Total Transactions Per Second"}},
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

