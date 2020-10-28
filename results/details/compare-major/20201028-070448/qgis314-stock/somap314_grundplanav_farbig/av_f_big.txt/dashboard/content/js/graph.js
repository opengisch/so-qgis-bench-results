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
        data: {"result": {"minY": 206.0, "minX": 0.0, "maxY": 4563.0, "series": [{"data": [[0.0, 206.0], [0.1, 206.0], [0.2, 213.0], [0.3, 215.0], [0.4, 215.0], [0.5, 217.0], [0.6, 224.0], [0.7, 230.0], [0.8, 230.0], [0.9, 232.0], [1.0, 232.0], [1.1, 240.0], [1.2, 240.0], [1.3, 247.0], [1.4, 247.0], [1.5, 256.0], [1.6, 256.0], [1.7, 258.0], [1.8, 260.0], [1.9, 260.0], [2.0, 294.0], [2.1, 300.0], [2.2, 311.0], [2.3, 311.0], [2.4, 313.0], [2.5, 319.0], [2.6, 321.0], [2.7, 321.0], [2.8, 321.0], [2.9, 322.0], [3.0, 323.0], [3.1, 323.0], [3.2, 323.0], [3.3, 326.0], [3.4, 326.0], [3.5, 331.0], [3.6, 333.0], [3.7, 336.0], [3.8, 336.0], [3.9, 342.0], [4.0, 343.0], [4.1, 344.0], [4.2, 344.0], [4.3, 346.0], [4.4, 347.0], [4.5, 350.0], [4.6, 350.0], [4.7, 351.0], [4.8, 355.0], [4.9, 356.0], [5.0, 356.0], [5.1, 358.0], [5.2, 364.0], [5.3, 364.0], [5.4, 365.0], [5.5, 366.0], [5.6, 366.0], [5.7, 366.0], [5.8, 370.0], [5.9, 370.0], [6.0, 371.0], [6.1, 371.0], [6.2, 372.0], [6.3, 373.0], [6.4, 373.0], [6.5, 373.0], [6.6, 374.0], [6.7, 376.0], [6.8, 376.0], [6.9, 378.0], [7.0, 380.0], [7.1, 380.0], [7.2, 380.0], [7.3, 380.0], [7.4, 381.0], [7.5, 386.0], [7.6, 386.0], [7.7, 392.0], [7.8, 392.0], [7.9, 397.0], [8.0, 397.0], [8.1, 401.0], [8.2, 402.0], [8.3, 405.0], [8.4, 405.0], [8.5, 408.0], [8.6, 410.0], [8.7, 410.0], [8.8, 411.0], [8.9, 417.0], [9.0, 418.0], [9.1, 418.0], [9.2, 418.0], [9.3, 430.0], [9.4, 432.0], [9.5, 432.0], [9.6, 436.0], [9.7, 437.0], [9.8, 438.0], [9.9, 438.0], [10.0, 439.0], [10.1, 439.0], [10.2, 439.0], [10.3, 439.0], [10.4, 439.0], [10.5, 439.0], [10.6, 439.0], [10.7, 445.0], [10.8, 446.0], [10.9, 449.0], [11.0, 449.0], [11.1, 451.0], [11.2, 451.0], [11.3, 452.0], [11.4, 452.0], [11.5, 453.0], [11.6, 455.0], [11.7, 455.0], [11.8, 456.0], [11.9, 458.0], [12.0, 458.0], [12.1, 458.0], [12.2, 459.0], [12.3, 460.0], [12.4, 461.0], [12.5, 461.0], [12.6, 462.0], [12.7, 464.0], [12.8, 464.0], [12.9, 464.0], [13.0, 469.0], [13.1, 469.0], [13.2, 469.0], [13.3, 469.0], [13.4, 471.0], [13.5, 471.0], [13.6, 471.0], [13.7, 471.0], [13.8, 473.0], [13.9, 473.0], [14.0, 473.0], [14.1, 474.0], [14.2, 475.0], [14.3, 476.0], [14.4, 476.0], [14.5, 477.0], [14.6, 478.0], [14.7, 480.0], [14.8, 480.0], [14.9, 483.0], [15.0, 483.0], [15.1, 483.0], [15.2, 485.0], [15.3, 486.0], [15.4, 488.0], [15.5, 488.0], [15.6, 489.0], [15.7, 489.0], [15.8, 493.0], [15.9, 493.0], [16.0, 497.0], [16.1, 498.0], [16.2, 507.0], [16.3, 507.0], [16.4, 509.0], [16.5, 512.0], [16.6, 517.0], [16.7, 517.0], [16.8, 517.0], [16.9, 519.0], [17.0, 519.0], [17.1, 524.0], [17.2, 529.0], [17.3, 529.0], [17.4, 529.0], [17.5, 539.0], [17.6, 546.0], [17.7, 551.0], [17.8, 551.0], [17.9, 552.0], [18.0, 552.0], [18.1, 552.0], [18.2, 552.0], [18.3, 553.0], [18.4, 553.0], [18.5, 553.0], [18.6, 554.0], [18.7, 559.0], [18.8, 561.0], [18.9, 561.0], [19.0, 562.0], [19.1, 562.0], [19.2, 564.0], [19.3, 564.0], [19.4, 565.0], [19.5, 565.0], [19.6, 572.0], [19.7, 572.0], [19.8, 577.0], [19.9, 578.0], [20.0, 580.0], [20.1, 580.0], [20.2, 584.0], [20.3, 591.0], [20.4, 591.0], [20.5, 594.0], [20.6, 595.0], [20.7, 595.0], [20.8, 595.0], [20.9, 602.0], [21.0, 603.0], [21.1, 605.0], [21.2, 605.0], [21.3, 606.0], [21.4, 608.0], [21.5, 609.0], [21.6, 609.0], [21.7, 611.0], [21.8, 614.0], [21.9, 614.0], [22.0, 618.0], [22.1, 625.0], [22.2, 629.0], [22.3, 629.0], [22.4, 632.0], [22.5, 632.0], [22.6, 640.0], [22.7, 640.0], [22.8, 642.0], [22.9, 645.0], [23.0, 646.0], [23.1, 646.0], [23.2, 648.0], [23.3, 648.0], [23.4, 648.0], [23.5, 650.0], [23.6, 653.0], [23.7, 653.0], [23.8, 653.0], [23.9, 653.0], [24.0, 654.0], [24.1, 656.0], [24.2, 656.0], [24.3, 660.0], [24.4, 661.0], [24.5, 663.0], [24.6, 663.0], [24.7, 665.0], [24.8, 666.0], [24.9, 666.0], [25.0, 666.0], [25.1, 666.0], [25.2, 667.0], [25.3, 667.0], [25.4, 668.0], [25.5, 669.0], [25.6, 670.0], [25.7, 670.0], [25.8, 674.0], [25.9, 674.0], [26.0, 675.0], [26.1, 675.0], [26.2, 675.0], [26.3, 676.0], [26.4, 678.0], [26.5, 678.0], [26.6, 679.0], [26.7, 680.0], [26.8, 680.0], [26.9, 682.0], [27.0, 682.0], [27.1, 684.0], [27.2, 684.0], [27.3, 684.0], [27.4, 687.0], [27.5, 690.0], [27.6, 690.0], [27.7, 690.0], [27.8, 691.0], [27.9, 697.0], [28.0, 697.0], [28.1, 699.0], [28.2, 699.0], [28.3, 702.0], [28.4, 702.0], [28.5, 704.0], [28.6, 704.0], [28.7, 704.0], [28.8, 705.0], [28.9, 710.0], [29.0, 711.0], [29.1, 711.0], [29.2, 715.0], [29.3, 718.0], [29.4, 718.0], [29.5, 718.0], [29.6, 720.0], [29.7, 721.0], [29.8, 722.0], [29.9, 722.0], [30.0, 723.0], [30.1, 724.0], [30.2, 724.0], [30.3, 725.0], [30.4, 726.0], [30.5, 728.0], [30.6, 728.0], [30.7, 733.0], [30.8, 734.0], [30.9, 736.0], [31.0, 736.0], [31.1, 738.0], [31.2, 739.0], [31.3, 740.0], [31.4, 740.0], [31.5, 742.0], [31.6, 744.0], [31.7, 744.0], [31.8, 746.0], [31.9, 747.0], [32.0, 747.0], [32.1, 747.0], [32.2, 747.0], [32.3, 748.0], [32.4, 748.0], [32.5, 748.0], [32.6, 748.0], [32.7, 748.0], [32.8, 748.0], [32.9, 748.0], [33.0, 749.0], [33.1, 751.0], [33.2, 751.0], [33.3, 751.0], [33.4, 751.0], [33.5, 752.0], [33.6, 752.0], [33.7, 754.0], [33.8, 757.0], [33.9, 758.0], [34.0, 758.0], [34.1, 764.0], [34.2, 764.0], [34.3, 765.0], [34.4, 765.0], [34.5, 768.0], [34.6, 770.0], [34.7, 773.0], [34.8, 773.0], [34.9, 781.0], [35.0, 781.0], [35.1, 781.0], [35.2, 782.0], [35.3, 789.0], [35.4, 790.0], [35.5, 790.0], [35.6, 791.0], [35.7, 792.0], [35.8, 793.0], [35.9, 793.0], [36.0, 795.0], [36.1, 796.0], [36.2, 798.0], [36.3, 798.0], [36.4, 800.0], [36.5, 800.0], [36.6, 807.0], [36.7, 807.0], [36.8, 809.0], [36.9, 812.0], [37.0, 812.0], [37.1, 812.0], [37.2, 817.0], [37.3, 819.0], [37.4, 819.0], [37.5, 824.0], [37.6, 825.0], [37.7, 830.0], [37.8, 830.0], [37.9, 835.0], [38.0, 838.0], [38.1, 839.0], [38.2, 839.0], [38.3, 840.0], [38.4, 840.0], [38.5, 840.0], [38.6, 844.0], [38.7, 848.0], [38.8, 849.0], [38.9, 849.0], [39.0, 849.0], [39.1, 851.0], [39.2, 856.0], [39.3, 856.0], [39.4, 868.0], [39.5, 868.0], [39.6, 871.0], [39.7, 871.0], [39.8, 871.0], [39.9, 871.0], [40.0, 872.0], [40.1, 872.0], [40.2, 872.0], [40.3, 875.0], [40.4, 875.0], [40.5, 876.0], [40.6, 879.0], [40.7, 881.0], [40.8, 881.0], [40.9, 882.0], [41.0, 886.0], [41.1, 887.0], [41.2, 887.0], [41.3, 888.0], [41.4, 892.0], [41.5, 893.0], [41.6, 893.0], [41.7, 894.0], [41.8, 897.0], [41.9, 897.0], [42.0, 900.0], [42.1, 901.0], [42.2, 902.0], [42.3, 902.0], [42.4, 906.0], [42.5, 907.0], [42.6, 907.0], [42.7, 907.0], [42.8, 907.0], [42.9, 908.0], [43.0, 908.0], [43.1, 908.0], [43.2, 909.0], [43.3, 917.0], [43.4, 917.0], [43.5, 922.0], [43.6, 923.0], [43.7, 923.0], [43.8, 923.0], [43.9, 923.0], [44.0, 924.0], [44.1, 925.0], [44.2, 925.0], [44.3, 927.0], [44.4, 927.0], [44.5, 928.0], [44.6, 928.0], [44.7, 934.0], [44.8, 934.0], [44.9, 935.0], [45.0, 935.0], [45.1, 938.0], [45.2, 939.0], [45.3, 939.0], [45.4, 942.0], [45.5, 943.0], [45.6, 946.0], [45.7, 946.0], [45.8, 946.0], [45.9, 946.0], [46.0, 948.0], [46.1, 948.0], [46.2, 950.0], [46.3, 952.0], [46.4, 955.0], [46.5, 955.0], [46.6, 957.0], [46.7, 960.0], [46.8, 960.0], [46.9, 961.0], [47.0, 962.0], [47.1, 966.0], [47.2, 966.0], [47.3, 967.0], [47.4, 970.0], [47.5, 971.0], [47.6, 971.0], [47.7, 973.0], [47.8, 974.0], [47.9, 975.0], [48.0, 975.0], [48.1, 975.0], [48.2, 987.0], [48.3, 987.0], [48.4, 987.0], [48.5, 988.0], [48.6, 988.0], [48.7, 988.0], [48.8, 989.0], [48.9, 1003.0], [49.0, 1005.0], [49.1, 1005.0], [49.2, 1008.0], [49.3, 1010.0], [49.4, 1011.0], [49.5, 1011.0], [49.6, 1015.0], [49.7, 1016.0], [49.8, 1020.0], [49.9, 1020.0], [50.0, 1033.0], [50.1, 1039.0], [50.2, 1039.0], [50.3, 1042.0], [50.4, 1045.0], [50.5, 1046.0], [50.6, 1046.0], [50.7, 1048.0], [50.8, 1049.0], [50.9, 1050.0], [51.0, 1050.0], [51.1, 1054.0], [51.2, 1054.0], [51.3, 1057.0], [51.4, 1057.0], [51.5, 1058.0], [51.6, 1058.0], [51.7, 1058.0], [51.8, 1065.0], [51.9, 1069.0], [52.0, 1071.0], [52.1, 1071.0], [52.2, 1076.0], [52.3, 1078.0], [52.4, 1082.0], [52.5, 1082.0], [52.6, 1082.0], [52.7, 1082.0], [52.8, 1085.0], [52.9, 1085.0], [53.0, 1087.0], [53.1, 1090.0], [53.2, 1102.0], [53.3, 1102.0], [53.4, 1103.0], [53.5, 1103.0], [53.6, 1103.0], [53.7, 1104.0], [53.8, 1104.0], [53.9, 1105.0], [54.0, 1105.0], [54.1, 1107.0], [54.2, 1109.0], [54.3, 1114.0], [54.4, 1114.0], [54.5, 1119.0], [54.6, 1119.0], [54.7, 1119.0], [54.8, 1119.0], [54.9, 1120.0], [55.0, 1121.0], [55.1, 1121.0], [55.2, 1121.0], [55.3, 1123.0], [55.4, 1126.0], [55.5, 1126.0], [55.6, 1127.0], [55.7, 1128.0], [55.8, 1129.0], [55.9, 1129.0], [56.0, 1130.0], [56.1, 1132.0], [56.2, 1132.0], [56.3, 1132.0], [56.4, 1133.0], [56.5, 1135.0], [56.6, 1136.0], [56.7, 1136.0], [56.8, 1137.0], [56.9, 1141.0], [57.0, 1141.0], [57.1, 1141.0], [57.2, 1143.0], [57.3, 1145.0], [57.4, 1145.0], [57.5, 1146.0], [57.6, 1146.0], [57.7, 1149.0], [57.8, 1149.0], [57.9, 1150.0], [58.0, 1154.0], [58.1, 1157.0], [58.2, 1157.0], [58.3, 1159.0], [58.4, 1159.0], [58.5, 1159.0], [58.6, 1162.0], [58.7, 1162.0], [58.8, 1169.0], [58.9, 1169.0], [59.0, 1179.0], [59.1, 1180.0], [59.2, 1181.0], [59.3, 1181.0], [59.4, 1182.0], [59.5, 1182.0], [59.6, 1183.0], [59.7, 1183.0], [59.8, 1189.0], [59.9, 1194.0], [60.0, 1194.0], [60.1, 1194.0], [60.2, 1198.0], [60.3, 1201.0], [60.4, 1201.0], [60.5, 1204.0], [60.6, 1205.0], [60.7, 1205.0], [60.8, 1205.0], [60.9, 1211.0], [61.0, 1212.0], [61.1, 1216.0], [61.2, 1216.0], [61.3, 1221.0], [61.4, 1226.0], [61.5, 1227.0], [61.6, 1227.0], [61.7, 1231.0], [61.8, 1233.0], [61.9, 1233.0], [62.0, 1237.0], [62.1, 1241.0], [62.2, 1241.0], [62.3, 1241.0], [62.4, 1244.0], [62.5, 1245.0], [62.6, 1251.0], [62.7, 1251.0], [62.8, 1251.0], [62.9, 1255.0], [63.0, 1256.0], [63.1, 1256.0], [63.2, 1257.0], [63.3, 1258.0], [63.4, 1258.0], [63.5, 1262.0], [63.6, 1263.0], [63.7, 1266.0], [63.8, 1266.0], [63.9, 1267.0], [64.0, 1268.0], [64.1, 1268.0], [64.2, 1268.0], [64.3, 1275.0], [64.4, 1276.0], [64.5, 1278.0], [64.6, 1278.0], [64.7, 1279.0], [64.8, 1279.0], [64.9, 1279.0], [65.0, 1279.0], [65.1, 1280.0], [65.2, 1281.0], [65.3, 1281.0], [65.4, 1284.0], [65.5, 1284.0], [65.6, 1285.0], [65.7, 1285.0], [65.8, 1286.0], [65.9, 1287.0], [66.0, 1288.0], [66.1, 1288.0], [66.2, 1288.0], [66.3, 1289.0], [66.4, 1293.0], [66.5, 1293.0], [66.6, 1293.0], [66.7, 1293.0], [66.8, 1293.0], [66.9, 1296.0], [67.0, 1297.0], [67.1, 1297.0], [67.2, 1297.0], [67.3, 1297.0], [67.4, 1300.0], [67.5, 1301.0], [67.6, 1301.0], [67.7, 1302.0], [67.8, 1303.0], [67.9, 1306.0], [68.0, 1306.0], [68.1, 1307.0], [68.2, 1308.0], [68.3, 1309.0], [68.4, 1309.0], [68.5, 1310.0], [68.6, 1317.0], [68.7, 1317.0], [68.8, 1321.0], [68.9, 1326.0], [69.0, 1327.0], [69.1, 1327.0], [69.2, 1334.0], [69.3, 1338.0], [69.4, 1340.0], [69.5, 1340.0], [69.6, 1341.0], [69.7, 1344.0], [69.8, 1345.0], [69.9, 1345.0], [70.0, 1346.0], [70.1, 1349.0], [70.2, 1349.0], [70.3, 1350.0], [70.4, 1352.0], [70.5, 1352.0], [70.6, 1352.0], [70.7, 1357.0], [70.8, 1360.0], [70.9, 1363.0], [71.0, 1363.0], [71.1, 1363.0], [71.2, 1364.0], [71.3, 1366.0], [71.4, 1366.0], [71.5, 1368.0], [71.6, 1373.0], [71.7, 1373.0], [71.8, 1381.0], [71.9, 1381.0], [72.0, 1388.0], [72.1, 1388.0], [72.2, 1390.0], [72.3, 1390.0], [72.4, 1394.0], [72.5, 1394.0], [72.6, 1397.0], [72.7, 1398.0], [72.8, 1398.0], [72.9, 1398.0], [73.0, 1398.0], [73.1, 1400.0], [73.2, 1405.0], [73.3, 1405.0], [73.4, 1406.0], [73.5, 1409.0], [73.6, 1409.0], [73.7, 1410.0], [73.8, 1412.0], [73.9, 1413.0], [74.0, 1413.0], [74.1, 1416.0], [74.2, 1417.0], [74.3, 1421.0], [74.4, 1421.0], [74.5, 1424.0], [74.6, 1424.0], [74.7, 1425.0], [74.8, 1425.0], [74.9, 1425.0], [75.0, 1426.0], [75.1, 1426.0], [75.2, 1428.0], [75.3, 1434.0], [75.4, 1437.0], [75.5, 1437.0], [75.6, 1437.0], [75.7, 1437.0], [75.8, 1438.0], [75.9, 1438.0], [76.0, 1438.0], [76.1, 1439.0], [76.2, 1443.0], [76.3, 1443.0], [76.4, 1443.0], [76.5, 1443.0], [76.6, 1445.0], [76.7, 1445.0], [76.8, 1446.0], [76.9, 1446.0], [77.0, 1446.0], [77.1, 1450.0], [77.2, 1456.0], [77.3, 1464.0], [77.4, 1464.0], [77.5, 1465.0], [77.6, 1469.0], [77.7, 1469.0], [77.8, 1469.0], [77.9, 1469.0], [78.0, 1470.0], [78.1, 1471.0], [78.2, 1471.0], [78.3, 1471.0], [78.4, 1474.0], [78.5, 1474.0], [78.6, 1474.0], [78.7, 1476.0], [78.8, 1478.0], [78.9, 1478.0], [79.0, 1484.0], [79.1, 1487.0], [79.2, 1487.0], [79.3, 1487.0], [79.4, 1490.0], [79.5, 1491.0], [79.6, 1492.0], [79.7, 1492.0], [79.8, 1493.0], [79.9, 1500.0], [80.0, 1501.0], [80.1, 1501.0], [80.2, 1503.0], [80.3, 1514.0], [80.4, 1514.0], [80.5, 1516.0], [80.6, 1517.0], [80.7, 1521.0], [80.8, 1521.0], [80.9, 1524.0], [81.0, 1524.0], [81.1, 1527.0], [81.2, 1527.0], [81.3, 1529.0], [81.4, 1533.0], [81.5, 1533.0], [81.6, 1533.0], [81.7, 1536.0], [81.8, 1540.0], [81.9, 1540.0], [82.0, 1541.0], [82.1, 1543.0], [82.2, 1543.0], [82.3, 1543.0], [82.4, 1549.0], [82.5, 1551.0], [82.6, 1557.0], [82.7, 1557.0], [82.8, 1557.0], [82.9, 1561.0], [83.0, 1566.0], [83.1, 1566.0], [83.2, 1572.0], [83.3, 1580.0], [83.4, 1580.0], [83.5, 1580.0], [83.6, 1582.0], [83.7, 1583.0], [83.8, 1583.0], [83.9, 1583.0], [84.0, 1586.0], [84.1, 1586.0], [84.2, 1586.0], [84.3, 1588.0], [84.4, 1589.0], [84.5, 1590.0], [84.6, 1590.0], [84.7, 1591.0], [84.8, 1595.0], [84.9, 1599.0], [85.0, 1599.0], [85.1, 1608.0], [85.2, 1609.0], [85.3, 1609.0], [85.4, 1610.0], [85.5, 1611.0], [85.6, 1613.0], [85.7, 1613.0], [85.8, 1614.0], [85.9, 1620.0], [86.0, 1628.0], [86.1, 1628.0], [86.2, 1631.0], [86.3, 1631.0], [86.4, 1633.0], [86.5, 1633.0], [86.6, 1634.0], [86.7, 1638.0], [86.8, 1638.0], [86.9, 1638.0], [87.0, 1641.0], [87.1, 1645.0], [87.2, 1645.0], [87.3, 1672.0], [87.4, 1672.0], [87.5, 1674.0], [87.6, 1674.0], [87.7, 1676.0], [87.8, 1682.0], [87.9, 1684.0], [88.0, 1684.0], [88.1, 1685.0], [88.2, 1702.0], [88.3, 1703.0], [88.4, 1703.0], [88.5, 1704.0], [88.6, 1705.0], [88.7, 1705.0], [88.8, 1730.0], [88.9, 1736.0], [89.0, 1737.0], [89.1, 1737.0], [89.2, 1737.0], [89.3, 1756.0], [89.4, 1785.0], [89.5, 1785.0], [89.6, 1789.0], [89.7, 1798.0], [89.8, 1800.0], [89.9, 1800.0], [90.0, 1823.0], [90.1, 1824.0], [90.2, 1824.0], [90.3, 1825.0], [90.4, 1826.0], [90.5, 1830.0], [90.6, 1830.0], [90.7, 1835.0], [90.8, 1838.0], [90.9, 1845.0], [91.0, 1845.0], [91.1, 1847.0], [91.2, 1849.0], [91.3, 1854.0], [91.4, 1854.0], [91.5, 1884.0], [91.6, 1894.0], [91.7, 1894.0], [91.8, 1912.0], [91.9, 1918.0], [92.0, 1923.0], [92.1, 1923.0], [92.2, 1928.0], [92.3, 1930.0], [92.4, 1956.0], [92.5, 1956.0], [92.6, 1960.0], [92.7, 1963.0], [92.8, 1965.0], [92.9, 1965.0], [93.0, 1965.0], [93.1, 1967.0], [93.2, 1970.0], [93.3, 1970.0], [93.4, 1976.0], [93.5, 1980.0], [93.6, 1980.0], [93.7, 1981.0], [93.8, 1985.0], [93.9, 1986.0], [94.0, 1986.0], [94.1, 1991.0], [94.2, 1996.0], [94.3, 2008.0], [94.4, 2008.0], [94.5, 2010.0], [94.6, 2027.0], [94.7, 2050.0], [94.8, 2050.0], [94.9, 2059.0], [95.0, 2074.0], [95.1, 2074.0], [95.2, 2083.0], [95.3, 2091.0], [95.4, 2094.0], [95.5, 2094.0], [95.6, 2098.0], [95.7, 2102.0], [95.8, 2105.0], [95.9, 2105.0], [96.0, 2124.0], [96.1, 2127.0], [96.2, 2129.0], [96.3, 2129.0], [96.4, 2138.0], [96.5, 2161.0], [96.6, 2166.0], [96.7, 2166.0], [96.8, 2167.0], [96.9, 2174.0], [97.0, 2174.0], [97.1, 2270.0], [97.2, 2282.0], [97.3, 2293.0], [97.4, 2293.0], [97.5, 2305.0], [97.6, 2340.0], [97.7, 2363.0], [97.8, 2363.0], [97.9, 2412.0], [98.0, 2533.0], [98.1, 2568.0], [98.2, 2568.0], [98.3, 2587.0], [98.4, 2812.0], [98.5, 2812.0], [98.6, 2858.0], [98.7, 2940.0], [98.8, 2950.0], [98.9, 2950.0], [99.0, 3030.0], [99.1, 3040.0], [99.2, 3092.0], [99.3, 3092.0], [99.4, 3302.0], [99.5, 3497.0], [99.6, 3665.0], [99.7, 3665.0], [99.8, 3688.0], [99.9, 4563.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 60.0, "series": [{"data": [[600.0, 55.0], [700.0, 59.0], [800.0, 41.0], [900.0, 51.0], [1000.0, 32.0], [1100.0, 52.0], [1200.0, 52.0], [1300.0, 42.0], [1400.0, 50.0], [1500.0, 38.0], [1600.0, 23.0], [1700.0, 12.0], [1800.0, 14.0], [1900.0, 19.0], [2000.0, 10.0], [2100.0, 10.0], [2200.0, 3.0], [2300.0, 3.0], [2400.0, 1.0], [2500.0, 3.0], [2800.0, 2.0], [2900.0, 2.0], [3000.0, 3.0], [3300.0, 1.0], [200.0, 15.0], [3400.0, 1.0], [3600.0, 2.0], [4500.0, 1.0], [300.0, 44.0], [400.0, 60.0], [500.0, 34.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 119.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 469.0, "series": [{"data": [[0.0, 119.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 469.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 147.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.548387096774194, "minX": 1.6038705E12, "maxY": 10.0, "series": [{"data": [[1.60387062E12, 8.548387096774194], [1.60387056E12, 10.0], [1.6038705E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387062E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 350.0, "minX": 1.0, "maxY": 1350.0, "series": [{"data": [[8.0, 747.0], [4.0, 704.0], [2.0, 1127.0], [1.0, 1306.0], [9.0, 410.0], [10.0, 1094.5454545454531], [5.0, 675.0], [6.0, 744.0], [3.0, 1350.0], [7.0, 350.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1091.2285714285701]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 222.45, "minX": 1.6038705E12, "maxY": 1289131.2333333334, "series": [{"data": [[1.60387062E12, 76932.23333333334], [1.60387056E12, 1289131.2333333334], [1.6038705E12, 469612.68333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60387062E12, 222.45], [1.60387056E12, 4255.566666666667], [1.6038705E12, 1045.0166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387062E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 895.3870967741938, "minX": 1.6038705E12, "maxY": 1273.847826086957, "series": [{"data": [[1.60387062E12, 895.3870967741938], [1.60387056E12, 1057.4293286219079], [1.6038705E12, 1273.847826086957]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387062E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 894.0322580645162, "minX": 1.6038705E12, "maxY": 1272.3333333333337, "series": [{"data": [[1.60387062E12, 894.0322580645162], [1.60387056E12, 1056.2667844522969], [1.6038705E12, 1272.3333333333337]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387062E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6038705E12, "maxY": 1.0434782608695656, "series": [{"data": [[1.60387062E12, 0.0], [1.60387056E12, 0.02120141342756184], [1.6038705E12, 1.0434782608695656]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387062E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 206.0, "minX": 1.6038705E12, "maxY": 4563.0, "series": [{"data": [[1.60387062E12, 2305.0], [1.60387056E12, 4563.0], [1.6038705E12, 3688.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60387062E12, 321.0], [1.60387056E12, 232.0], [1.6038705E12, 214.00399986743926]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60387062E12, 321.0], [1.60387056E12, 232.0], [1.6038705E12, 214.50440005302428]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60387062E12, 321.0], [1.60387056E12, 232.0], [1.6038705E12, 214.28199993371965]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60387062E12, 321.0], [1.60387056E12, 206.0], [1.6038705E12, 213.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60387062E12, 728.0], [1.60387056E12, 1009.0], [1.6038705E12, 1145.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387062E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 512.0, "minX": 1.0, "maxY": 2270.0, "series": [{"data": [[8.0, 1282.5], [9.0, 1183.0], [10.0, 1016.0], [11.0, 1032.0], [12.0, 862.5], [13.0, 748.0], [14.0, 843.5], [15.0, 512.0], [1.0, 2270.0], [16.0, 718.0], [17.0, 728.0], [5.0, 1127.0], [6.0, 1380.0], [7.0, 1272.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 512.0, "minX": 1.0, "maxY": 2266.0, "series": [{"data": [[8.0, 1277.5], [9.0, 1183.0], [10.0, 1013.5], [11.0, 1032.0], [12.0, 862.0], [13.0, 748.0], [14.0, 843.0], [15.0, 512.0], [1.0, 2266.0], [16.0, 718.0], [17.0, 728.0], [5.0, 1127.0], [6.0, 1376.5], [7.0, 1271.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.6038705E12, "maxY": 9.433333333333334, "series": [{"data": [[1.60387062E12, 0.35], [1.60387056E12, 9.433333333333334], [1.6038705E12, 2.466666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387062E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.6038705E12, "maxY": 9.433333333333334, "series": [{"data": [[1.60387062E12, 0.5166666666666667], [1.60387056E12, 9.433333333333334], [1.6038705E12, 2.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387062E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.6038705E12, "maxY": 9.433333333333334, "series": [{"data": [[1.60387062E12, 0.5166666666666667], [1.60387056E12, 9.433333333333334], [1.6038705E12, 2.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387062E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.6038705E12, "maxY": 9.433333333333334, "series": [{"data": [[1.60387062E12, 0.5166666666666667], [1.60387056E12, 9.433333333333334], [1.6038705E12, 2.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387062E12, "title": "Total Transactions Per Second"}},
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

