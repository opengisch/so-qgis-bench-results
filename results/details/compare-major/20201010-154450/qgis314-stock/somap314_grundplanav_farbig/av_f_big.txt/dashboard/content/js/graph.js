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
        data: {"result": {"minY": 177.0, "minX": 0.0, "maxY": 3799.0, "series": [{"data": [[0.0, 177.0], [0.1, 177.0], [0.2, 181.0], [0.3, 207.0], [0.4, 207.0], [0.5, 210.0], [0.6, 215.0], [0.7, 216.0], [0.8, 216.0], [0.9, 216.0], [1.0, 218.0], [1.1, 219.0], [1.2, 219.0], [1.3, 224.0], [1.4, 224.0], [1.5, 225.0], [1.6, 225.0], [1.7, 225.0], [1.8, 237.0], [1.9, 237.0], [2.0, 241.0], [2.1, 253.0], [2.2, 257.0], [2.3, 257.0], [2.4, 258.0], [2.5, 258.0], [2.6, 272.0], [2.7, 272.0], [2.8, 309.0], [2.9, 315.0], [3.0, 319.0], [3.1, 319.0], [3.2, 320.0], [3.3, 325.0], [3.4, 325.0], [3.5, 329.0], [3.6, 332.0], [3.7, 332.0], [3.8, 332.0], [3.9, 333.0], [4.0, 335.0], [4.1, 335.0], [4.2, 335.0], [4.3, 338.0], [4.4, 342.0], [4.5, 344.0], [4.6, 344.0], [4.7, 345.0], [4.8, 346.0], [4.9, 346.0], [5.0, 346.0], [5.1, 346.0], [5.2, 347.0], [5.3, 347.0], [5.4, 347.0], [5.5, 348.0], [5.6, 348.0], [5.7, 348.0], [5.8, 348.0], [5.9, 350.0], [6.0, 355.0], [6.1, 355.0], [6.2, 356.0], [6.3, 357.0], [6.4, 358.0], [6.5, 358.0], [6.6, 360.0], [6.7, 361.0], [6.8, 361.0], [6.9, 362.0], [7.0, 363.0], [7.1, 364.0], [7.2, 364.0], [7.3, 365.0], [7.4, 372.0], [7.5, 374.0], [7.6, 374.0], [7.7, 377.0], [7.8, 380.0], [7.9, 385.0], [8.0, 385.0], [8.1, 393.0], [8.2, 394.0], [8.3, 397.0], [8.4, 397.0], [8.5, 401.0], [8.6, 403.0], [8.7, 403.0], [8.8, 407.0], [8.9, 408.0], [9.0, 412.0], [9.1, 412.0], [9.2, 413.0], [9.3, 413.0], [9.4, 415.0], [9.5, 415.0], [9.6, 417.0], [9.7, 418.0], [9.8, 420.0], [9.9, 420.0], [10.0, 420.0], [10.1, 425.0], [10.2, 425.0], [10.3, 426.0], [10.4, 427.0], [10.5, 431.0], [10.6, 431.0], [10.7, 431.0], [10.8, 432.0], [10.9, 432.0], [11.0, 432.0], [11.1, 434.0], [11.2, 435.0], [11.3, 435.0], [11.4, 435.0], [11.5, 438.0], [11.6, 438.0], [11.7, 438.0], [11.8, 439.0], [11.9, 439.0], [12.0, 440.0], [12.1, 440.0], [12.2, 440.0], [12.3, 441.0], [12.4, 443.0], [12.5, 443.0], [12.6, 443.0], [12.7, 443.0], [12.8, 444.0], [12.9, 444.0], [13.0, 445.0], [13.1, 446.0], [13.2, 446.0], [13.3, 446.0], [13.4, 451.0], [13.5, 451.0], [13.6, 451.0], [13.7, 452.0], [13.8, 453.0], [13.9, 453.0], [14.0, 453.0], [14.1, 454.0], [14.2, 454.0], [14.3, 457.0], [14.4, 457.0], [14.5, 457.0], [14.6, 459.0], [14.7, 460.0], [14.8, 460.0], [14.9, 460.0], [15.0, 461.0], [15.1, 461.0], [15.2, 461.0], [15.3, 461.0], [15.4, 462.0], [15.5, 462.0], [15.6, 463.0], [15.7, 463.0], [15.8, 465.0], [15.9, 465.0], [16.0, 467.0], [16.1, 468.0], [16.2, 469.0], [16.3, 469.0], [16.4, 474.0], [16.5, 475.0], [16.6, 479.0], [16.7, 479.0], [16.8, 480.0], [16.9, 480.0], [17.0, 480.0], [17.1, 482.0], [17.2, 483.0], [17.3, 484.0], [17.4, 484.0], [17.5, 485.0], [17.6, 485.0], [17.7, 486.0], [17.8, 486.0], [17.9, 488.0], [18.0, 491.0], [18.1, 492.0], [18.2, 492.0], [18.3, 493.0], [18.4, 496.0], [18.5, 496.0], [18.6, 497.0], [18.7, 499.0], [18.8, 509.0], [18.9, 509.0], [19.0, 511.0], [19.1, 513.0], [19.2, 515.0], [19.3, 515.0], [19.4, 516.0], [19.5, 516.0], [19.6, 516.0], [19.7, 516.0], [19.8, 521.0], [19.9, 523.0], [20.0, 523.0], [20.1, 526.0], [20.2, 526.0], [20.3, 526.0], [20.4, 526.0], [20.5, 526.0], [20.6, 526.0], [20.7, 530.0], [20.8, 530.0], [20.9, 535.0], [21.0, 538.0], [21.1, 538.0], [21.2, 538.0], [21.3, 541.0], [21.4, 543.0], [21.5, 543.0], [21.6, 543.0], [21.7, 546.0], [21.8, 548.0], [21.9, 548.0], [22.0, 548.0], [22.1, 550.0], [22.2, 554.0], [22.3, 554.0], [22.4, 555.0], [22.5, 557.0], [22.6, 559.0], [22.7, 559.0], [22.8, 559.0], [22.9, 561.0], [23.0, 563.0], [23.1, 563.0], [23.2, 570.0], [23.3, 572.0], [23.4, 572.0], [23.5, 574.0], [23.6, 575.0], [23.7, 576.0], [23.8, 576.0], [23.9, 580.0], [24.0, 582.0], [24.1, 591.0], [24.2, 591.0], [24.3, 592.0], [24.4, 594.0], [24.5, 598.0], [24.6, 598.0], [24.7, 599.0], [24.8, 600.0], [24.9, 603.0], [25.0, 603.0], [25.1, 604.0], [25.2, 604.0], [25.3, 604.0], [25.4, 608.0], [25.5, 610.0], [25.6, 610.0], [25.7, 610.0], [25.8, 614.0], [25.9, 615.0], [26.0, 626.0], [26.1, 626.0], [26.2, 628.0], [26.3, 629.0], [26.4, 634.0], [26.5, 634.0], [26.6, 636.0], [26.7, 637.0], [26.8, 637.0], [26.9, 638.0], [27.0, 638.0], [27.1, 639.0], [27.2, 639.0], [27.3, 642.0], [27.4, 644.0], [27.5, 647.0], [27.6, 647.0], [27.7, 647.0], [27.8, 647.0], [27.9, 648.0], [28.0, 648.0], [28.1, 648.0], [28.2, 649.0], [28.3, 649.0], [28.4, 649.0], [28.5, 650.0], [28.6, 652.0], [28.7, 652.0], [28.8, 654.0], [28.9, 654.0], [29.0, 654.0], [29.1, 654.0], [29.2, 655.0], [29.3, 656.0], [29.4, 657.0], [29.5, 657.0], [29.6, 659.0], [29.7, 660.0], [29.8, 662.0], [29.9, 662.0], [30.0, 663.0], [30.1, 663.0], [30.2, 663.0], [30.3, 664.0], [30.4, 666.0], [30.5, 668.0], [30.6, 668.0], [30.7, 671.0], [30.8, 672.0], [30.9, 673.0], [31.0, 673.0], [31.1, 673.0], [31.2, 674.0], [31.3, 676.0], [31.4, 676.0], [31.5, 676.0], [31.6, 677.0], [31.7, 677.0], [31.8, 678.0], [31.9, 680.0], [32.0, 681.0], [32.1, 681.0], [32.2, 682.0], [32.3, 682.0], [32.4, 682.0], [32.5, 682.0], [32.6, 684.0], [32.7, 687.0], [32.8, 689.0], [32.9, 689.0], [33.0, 691.0], [33.1, 691.0], [33.2, 692.0], [33.3, 692.0], [33.4, 694.0], [33.5, 695.0], [33.6, 695.0], [33.7, 697.0], [33.8, 698.0], [33.9, 699.0], [34.0, 699.0], [34.1, 699.0], [34.2, 699.0], [34.3, 699.0], [34.4, 699.0], [34.5, 700.0], [34.6, 701.0], [34.7, 702.0], [34.8, 702.0], [34.9, 702.0], [35.0, 703.0], [35.1, 703.0], [35.2, 710.0], [35.3, 713.0], [35.4, 713.0], [35.5, 713.0], [35.6, 713.0], [35.7, 718.0], [35.8, 718.0], [35.9, 718.0], [36.0, 718.0], [36.1, 721.0], [36.2, 724.0], [36.3, 724.0], [36.4, 727.0], [36.5, 727.0], [36.6, 727.0], [36.7, 727.0], [36.8, 727.0], [36.9, 728.0], [37.0, 728.0], [37.1, 729.0], [37.2, 732.0], [37.3, 735.0], [37.4, 735.0], [37.5, 736.0], [37.6, 737.0], [37.7, 737.0], [37.8, 737.0], [37.9, 737.0], [38.0, 737.0], [38.1, 738.0], [38.2, 738.0], [38.3, 738.0], [38.4, 742.0], [38.5, 742.0], [38.6, 744.0], [38.7, 747.0], [38.8, 748.0], [38.9, 748.0], [39.0, 750.0], [39.1, 753.0], [39.2, 758.0], [39.3, 758.0], [39.4, 761.0], [39.5, 763.0], [39.6, 763.0], [39.7, 763.0], [39.8, 771.0], [39.9, 774.0], [40.0, 774.0], [40.1, 774.0], [40.2, 775.0], [40.3, 775.0], [40.4, 775.0], [40.5, 775.0], [40.6, 778.0], [40.7, 779.0], [40.8, 779.0], [40.9, 782.0], [41.0, 784.0], [41.1, 786.0], [41.2, 786.0], [41.3, 788.0], [41.4, 789.0], [41.5, 790.0], [41.6, 790.0], [41.7, 793.0], [41.8, 795.0], [41.9, 795.0], [42.0, 796.0], [42.1, 796.0], [42.2, 798.0], [42.3, 798.0], [42.4, 798.0], [42.5, 800.0], [42.6, 803.0], [42.7, 803.0], [42.8, 805.0], [42.9, 806.0], [43.0, 809.0], [43.1, 809.0], [43.2, 809.0], [43.3, 812.0], [43.4, 812.0], [43.5, 813.0], [43.6, 820.0], [43.7, 821.0], [43.8, 821.0], [43.9, 824.0], [44.0, 833.0], [44.1, 837.0], [44.2, 837.0], [44.3, 839.0], [44.4, 840.0], [44.5, 848.0], [44.6, 848.0], [44.7, 848.0], [44.8, 854.0], [44.9, 856.0], [45.0, 856.0], [45.1, 858.0], [45.2, 861.0], [45.3, 861.0], [45.4, 862.0], [45.5, 863.0], [45.6, 863.0], [45.7, 863.0], [45.8, 872.0], [45.9, 872.0], [46.0, 874.0], [46.1, 874.0], [46.2, 875.0], [46.3, 876.0], [46.4, 879.0], [46.5, 879.0], [46.6, 881.0], [46.7, 882.0], [46.8, 882.0], [46.9, 885.0], [47.0, 889.0], [47.1, 897.0], [47.2, 897.0], [47.3, 898.0], [47.4, 907.0], [47.5, 907.0], [47.6, 907.0], [47.7, 909.0], [47.8, 910.0], [47.9, 913.0], [48.0, 913.0], [48.1, 914.0], [48.2, 916.0], [48.3, 916.0], [48.4, 916.0], [48.5, 920.0], [48.6, 924.0], [48.7, 924.0], [48.8, 927.0], [48.9, 929.0], [49.0, 930.0], [49.1, 930.0], [49.2, 930.0], [49.3, 932.0], [49.4, 932.0], [49.5, 932.0], [49.6, 934.0], [49.7, 935.0], [49.8, 935.0], [49.9, 935.0], [50.0, 936.0], [50.1, 937.0], [50.2, 937.0], [50.3, 938.0], [50.4, 941.0], [50.5, 946.0], [50.6, 946.0], [50.7, 946.0], [50.8, 951.0], [50.9, 956.0], [51.0, 956.0], [51.1, 959.0], [51.2, 960.0], [51.3, 963.0], [51.4, 963.0], [51.5, 963.0], [51.6, 975.0], [51.7, 975.0], [51.8, 983.0], [51.9, 984.0], [52.0, 990.0], [52.1, 990.0], [52.2, 995.0], [52.3, 997.0], [52.4, 1000.0], [52.5, 1000.0], [52.6, 1004.0], [52.7, 1004.0], [52.8, 1007.0], [52.9, 1007.0], [53.0, 1008.0], [53.1, 1009.0], [53.2, 1011.0], [53.3, 1011.0], [53.4, 1018.0], [53.5, 1020.0], [53.6, 1020.0], [53.7, 1024.0], [53.8, 1027.0], [53.9, 1033.0], [54.0, 1033.0], [54.1, 1034.0], [54.2, 1036.0], [54.3, 1041.0], [54.4, 1041.0], [54.5, 1041.0], [54.6, 1042.0], [54.7, 1053.0], [54.8, 1053.0], [54.9, 1054.0], [55.0, 1055.0], [55.1, 1055.0], [55.2, 1055.0], [55.3, 1061.0], [55.4, 1062.0], [55.5, 1062.0], [55.6, 1062.0], [55.7, 1062.0], [55.8, 1064.0], [55.9, 1064.0], [56.0, 1065.0], [56.1, 1069.0], [56.2, 1070.0], [56.3, 1070.0], [56.4, 1072.0], [56.5, 1075.0], [56.6, 1078.0], [56.7, 1078.0], [56.8, 1079.0], [56.9, 1080.0], [57.0, 1080.0], [57.1, 1081.0], [57.2, 1082.0], [57.3, 1086.0], [57.4, 1086.0], [57.5, 1087.0], [57.6, 1088.0], [57.7, 1089.0], [57.8, 1089.0], [57.9, 1090.0], [58.0, 1092.0], [58.1, 1094.0], [58.2, 1094.0], [58.3, 1095.0], [58.4, 1096.0], [58.5, 1096.0], [58.6, 1105.0], [58.7, 1106.0], [58.8, 1108.0], [58.9, 1108.0], [59.0, 1111.0], [59.1, 1113.0], [59.2, 1117.0], [59.3, 1117.0], [59.4, 1120.0], [59.5, 1120.0], [59.6, 1122.0], [59.7, 1122.0], [59.8, 1122.0], [59.9, 1123.0], [60.0, 1125.0], [60.1, 1125.0], [60.2, 1129.0], [60.3, 1130.0], [60.4, 1130.0], [60.5, 1130.0], [60.6, 1134.0], [60.7, 1135.0], [60.8, 1135.0], [60.9, 1137.0], [61.0, 1142.0], [61.1, 1143.0], [61.2, 1143.0], [61.3, 1148.0], [61.4, 1150.0], [61.5, 1151.0], [61.6, 1151.0], [61.7, 1154.0], [61.8, 1156.0], [61.9, 1156.0], [62.0, 1161.0], [62.1, 1161.0], [62.2, 1161.0], [62.3, 1161.0], [62.4, 1162.0], [62.5, 1166.0], [62.6, 1167.0], [62.7, 1167.0], [62.8, 1168.0], [62.9, 1170.0], [63.0, 1170.0], [63.1, 1170.0], [63.2, 1171.0], [63.3, 1172.0], [63.4, 1172.0], [63.5, 1173.0], [63.6, 1174.0], [63.7, 1176.0], [63.8, 1176.0], [63.9, 1178.0], [64.0, 1179.0], [64.1, 1180.0], [64.2, 1180.0], [64.3, 1184.0], [64.4, 1189.0], [64.5, 1190.0], [64.6, 1190.0], [64.7, 1194.0], [64.8, 1197.0], [64.9, 1205.0], [65.0, 1205.0], [65.1, 1206.0], [65.2, 1216.0], [65.3, 1216.0], [65.4, 1218.0], [65.5, 1220.0], [65.6, 1222.0], [65.7, 1222.0], [65.8, 1223.0], [65.9, 1224.0], [66.0, 1224.0], [66.1, 1224.0], [66.2, 1229.0], [66.3, 1231.0], [66.4, 1232.0], [66.5, 1232.0], [66.6, 1233.0], [66.7, 1234.0], [66.8, 1234.0], [66.9, 1237.0], [67.0, 1246.0], [67.1, 1247.0], [67.2, 1247.0], [67.3, 1249.0], [67.4, 1253.0], [67.5, 1256.0], [67.6, 1256.0], [67.7, 1261.0], [67.8, 1261.0], [67.9, 1262.0], [68.0, 1262.0], [68.1, 1263.0], [68.2, 1265.0], [68.3, 1266.0], [68.4, 1266.0], [68.5, 1268.0], [68.6, 1269.0], [68.7, 1269.0], [68.8, 1270.0], [68.9, 1273.0], [69.0, 1273.0], [69.1, 1273.0], [69.2, 1274.0], [69.3, 1280.0], [69.4, 1287.0], [69.5, 1287.0], [69.6, 1289.0], [69.7, 1290.0], [69.8, 1291.0], [69.9, 1291.0], [70.0, 1291.0], [70.1, 1296.0], [70.2, 1296.0], [70.3, 1298.0], [70.4, 1303.0], [70.5, 1306.0], [70.6, 1306.0], [70.7, 1310.0], [70.8, 1310.0], [70.9, 1311.0], [71.0, 1311.0], [71.1, 1313.0], [71.2, 1314.0], [71.3, 1318.0], [71.4, 1318.0], [71.5, 1327.0], [71.6, 1330.0], [71.7, 1330.0], [71.8, 1333.0], [71.9, 1341.0], [72.0, 1359.0], [72.1, 1359.0], [72.2, 1365.0], [72.3, 1367.0], [72.4, 1369.0], [72.5, 1369.0], [72.6, 1371.0], [72.7, 1381.0], [72.8, 1392.0], [72.9, 1392.0], [73.0, 1396.0], [73.1, 1398.0], [73.2, 1401.0], [73.3, 1401.0], [73.4, 1407.0], [73.5, 1409.0], [73.6, 1409.0], [73.7, 1409.0], [73.8, 1410.0], [73.9, 1411.0], [74.0, 1411.0], [74.1, 1416.0], [74.2, 1417.0], [74.3, 1419.0], [74.4, 1419.0], [74.5, 1422.0], [74.6, 1424.0], [74.7, 1425.0], [74.8, 1425.0], [74.9, 1428.0], [75.0, 1428.0], [75.1, 1428.0], [75.2, 1429.0], [75.3, 1429.0], [75.4, 1431.0], [75.5, 1431.0], [75.6, 1431.0], [75.7, 1432.0], [75.8, 1435.0], [75.9, 1435.0], [76.0, 1435.0], [76.1, 1442.0], [76.2, 1444.0], [76.3, 1444.0], [76.4, 1445.0], [76.5, 1447.0], [76.6, 1450.0], [76.7, 1450.0], [76.8, 1450.0], [76.9, 1454.0], [77.0, 1454.0], [77.1, 1454.0], [77.2, 1455.0], [77.3, 1463.0], [77.4, 1463.0], [77.5, 1463.0], [77.6, 1466.0], [77.7, 1467.0], [77.8, 1467.0], [77.9, 1472.0], [78.0, 1473.0], [78.1, 1474.0], [78.2, 1474.0], [78.3, 1475.0], [78.4, 1477.0], [78.5, 1477.0], [78.6, 1478.0], [78.7, 1484.0], [78.8, 1485.0], [78.9, 1485.0], [79.0, 1497.0], [79.1, 1502.0], [79.2, 1504.0], [79.3, 1504.0], [79.4, 1505.0], [79.5, 1506.0], [79.6, 1510.0], [79.7, 1510.0], [79.8, 1520.0], [79.9, 1520.0], [80.0, 1529.0], [80.1, 1529.0], [80.2, 1540.0], [80.3, 1544.0], [80.4, 1544.0], [80.5, 1544.0], [80.6, 1562.0], [80.7, 1563.0], [80.8, 1563.0], [80.9, 1568.0], [81.0, 1570.0], [81.1, 1572.0], [81.2, 1572.0], [81.3, 1577.0], [81.4, 1579.0], [81.5, 1588.0], [81.6, 1588.0], [81.7, 1590.0], [81.8, 1611.0], [81.9, 1611.0], [82.0, 1611.0], [82.1, 1612.0], [82.2, 1613.0], [82.3, 1613.0], [82.4, 1615.0], [82.5, 1619.0], [82.6, 1620.0], [82.7, 1620.0], [82.8, 1623.0], [82.9, 1625.0], [83.0, 1633.0], [83.1, 1633.0], [83.2, 1635.0], [83.3, 1637.0], [83.4, 1637.0], [83.5, 1638.0], [83.6, 1639.0], [83.7, 1641.0], [83.8, 1641.0], [83.9, 1647.0], [84.0, 1649.0], [84.1, 1654.0], [84.2, 1654.0], [84.3, 1664.0], [84.4, 1668.0], [84.5, 1670.0], [84.6, 1670.0], [84.7, 1672.0], [84.8, 1673.0], [84.9, 1673.0], [85.0, 1673.0], [85.1, 1676.0], [85.2, 1677.0], [85.3, 1677.0], [85.4, 1678.0], [85.5, 1690.0], [85.6, 1692.0], [85.7, 1692.0], [85.8, 1694.0], [85.9, 1698.0], [86.0, 1699.0], [86.1, 1699.0], [86.2, 1702.0], [86.3, 1709.0], [86.4, 1712.0], [86.5, 1712.0], [86.6, 1715.0], [86.7, 1718.0], [86.8, 1718.0], [86.9, 1720.0], [87.0, 1723.0], [87.1, 1726.0], [87.2, 1726.0], [87.3, 1728.0], [87.4, 1739.0], [87.5, 1741.0], [87.6, 1741.0], [87.7, 1741.0], [87.8, 1745.0], [87.9, 1751.0], [88.0, 1751.0], [88.1, 1754.0], [88.2, 1756.0], [88.3, 1757.0], [88.4, 1757.0], [88.5, 1759.0], [88.6, 1763.0], [88.7, 1763.0], [88.8, 1763.0], [88.9, 1766.0], [89.0, 1769.0], [89.1, 1769.0], [89.2, 1785.0], [89.3, 1788.0], [89.4, 1792.0], [89.5, 1792.0], [89.6, 1798.0], [89.7, 1799.0], [89.8, 1800.0], [89.9, 1800.0], [90.0, 1806.0], [90.1, 1815.0], [90.2, 1815.0], [90.3, 1816.0], [90.4, 1829.0], [90.5, 1832.0], [90.6, 1832.0], [90.7, 1836.0], [90.8, 1840.0], [90.9, 1846.0], [91.0, 1846.0], [91.1, 1849.0], [91.2, 1856.0], [91.3, 1864.0], [91.4, 1864.0], [91.5, 1868.0], [91.6, 1874.0], [91.7, 1874.0], [91.8, 1877.0], [91.9, 1878.0], [92.0, 1879.0], [92.1, 1879.0], [92.2, 1881.0], [92.3, 1883.0], [92.4, 1884.0], [92.5, 1884.0], [92.6, 1890.0], [92.7, 1919.0], [92.8, 1930.0], [92.9, 1930.0], [93.0, 1940.0], [93.1, 1943.0], [93.2, 1946.0], [93.3, 1946.0], [93.4, 1948.0], [93.5, 1949.0], [93.6, 1949.0], [93.7, 1952.0], [93.8, 1959.0], [93.9, 1966.0], [94.0, 1966.0], [94.1, 1976.0], [94.2, 1977.0], [94.3, 1995.0], [94.4, 1995.0], [94.5, 1998.0], [94.6, 2000.0], [94.7, 2001.0], [94.8, 2001.0], [94.9, 2020.0], [95.0, 2034.0], [95.1, 2034.0], [95.2, 2042.0], [95.3, 2045.0], [95.4, 2075.0], [95.5, 2075.0], [95.6, 2078.0], [95.7, 2079.0], [95.8, 2080.0], [95.9, 2080.0], [96.0, 2094.0], [96.1, 2100.0], [96.2, 2130.0], [96.3, 2130.0], [96.4, 2135.0], [96.5, 2141.0], [96.6, 2145.0], [96.7, 2145.0], [96.8, 2157.0], [96.9, 2212.0], [97.0, 2212.0], [97.1, 2218.0], [97.2, 2227.0], [97.3, 2233.0], [97.4, 2233.0], [97.5, 2278.0], [97.6, 2352.0], [97.7, 2359.0], [97.8, 2359.0], [97.9, 2385.0], [98.0, 2404.0], [98.1, 2427.0], [98.2, 2427.0], [98.3, 2479.0], [98.4, 2499.0], [98.5, 2499.0], [98.6, 2530.0], [98.7, 2602.0], [98.8, 2653.0], [98.9, 2653.0], [99.0, 2658.0], [99.1, 2720.0], [99.2, 2745.0], [99.3, 2745.0], [99.4, 3296.0], [99.5, 3398.0], [99.6, 3614.0], [99.7, 3614.0], [99.8, 3790.0], [99.9, 3799.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 76.0, "series": [{"data": [[600.0, 71.0], [700.0, 59.0], [800.0, 36.0], [900.0, 37.0], [1000.0, 45.0], [1100.0, 47.0], [1200.0, 40.0], [1300.0, 21.0], [1400.0, 43.0], [1500.0, 20.0], [1600.0, 32.0], [100.0, 2.0], [1700.0, 27.0], [1800.0, 21.0], [1900.0, 14.0], [2000.0, 11.0], [2100.0, 6.0], [2200.0, 5.0], [2300.0, 3.0], [2400.0, 4.0], [2500.0, 1.0], [2600.0, 3.0], [2700.0, 2.0], [3200.0, 1.0], [200.0, 18.0], [3300.0, 1.0], [3700.0, 2.0], [3600.0, 1.0], [300.0, 42.0], [400.0, 76.0], [500.0, 44.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 138.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 443.0, "series": [{"data": [[0.0, 138.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 443.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 154.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.925297113752123, "minX": 1.60234662E12, "maxY": 10.0, "series": [{"data": [[1.60234662E12, 10.0], [1.60234668E12, 9.925297113752123]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234668E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 524.5, "minX": 1.0, "maxY": 1699.0, "series": [{"data": [[4.0, 699.0], [2.0, 644.0], [1.0, 1173.0], [9.0, 524.5], [10.0, 1050.5137741046842], [5.0, 1699.0], [6.0, 775.0], [3.0, 1087.0], [7.0, 647.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 1048.225850340137]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1105.4833333333333, "minX": 1.60234662E12, "maxY": 1346530.3333333333, "series": [{"data": [[1.60234662E12, 489157.7], [1.60234668E12, 1346530.3333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60234662E12, 1105.4833333333333], [1.60234668E12, 4417.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234668E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1009.1714770797969, "minX": 1.60234662E12, "maxY": 1205.7808219178087, "series": [{"data": [[1.60234662E12, 1205.7808219178087], [1.60234668E12, 1009.1714770797969]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234668E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1008.2342954159585, "minX": 1.60234662E12, "maxY": 1204.5205479452056, "series": [{"data": [[1.60234662E12, 1204.5205479452056], [1.60234668E12, 1008.2342954159585]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234668E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.018675721561969408, "minX": 1.60234662E12, "maxY": 0.6232876712328762, "series": [{"data": [[1.60234662E12, 0.6232876712328762], [1.60234668E12, 0.018675721561969408]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234668E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 177.0, "minX": 1.60234662E12, "maxY": 3799.0, "series": [{"data": [[1.60234662E12, 3799.0], [1.60234668E12, 3398.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60234662E12, 178.29199985980986], [1.60234668E12, 224.30999985933303]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60234662E12, 178.82120005607604], [1.60234668E12, 224.84100005626678]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60234662E12, 178.58599992990494], [1.60234668E12, 224.60499992966652]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60234662E12, 177.0], [1.60234668E12, 207.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60234662E12, 1063.5], [1.60234668E12, 927.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234668E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 678.0, "minX": 1.0, "maxY": 2100.0, "series": [{"data": [[8.0, 1134.5], [2.0, 908.5], [9.0, 1139.5], [10.0, 1101.0], [11.0, 823.0], [12.0, 918.0], [13.0, 718.0], [14.0, 683.0], [15.0, 678.0], [1.0, 2100.0], [16.0, 707.0], [18.0, 800.5], [5.0, 1579.0], [6.0, 1221.5], [7.0, 1268.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 678.0, "minX": 1.0, "maxY": 2097.0, "series": [{"data": [[8.0, 1132.5], [2.0, 908.5], [9.0, 1138.5], [10.0, 1100.0], [11.0, 822.5], [12.0, 918.0], [13.0, 718.0], [14.0, 682.0], [15.0, 678.0], [1.0, 2097.0], [16.0, 706.5], [18.0, 800.5], [5.0, 1577.0], [6.0, 1219.0], [7.0, 1267.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.6, "minX": 1.60234662E12, "maxY": 9.65, "series": [{"data": [[1.60234662E12, 2.6], [1.60234668E12, 9.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234668E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.433333333333333, "minX": 1.60234662E12, "maxY": 9.816666666666666, "series": [{"data": [[1.60234662E12, 2.433333333333333], [1.60234668E12, 9.816666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234668E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.433333333333333, "minX": 1.60234662E12, "maxY": 9.816666666666666, "series": [{"data": [[1.60234662E12, 2.433333333333333], [1.60234668E12, 9.816666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234668E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.433333333333333, "minX": 1.60234662E12, "maxY": 9.816666666666666, "series": [{"data": [[1.60234662E12, 2.433333333333333], [1.60234668E12, 9.816666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234668E12, "title": "Total Transactions Per Second"}},
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

