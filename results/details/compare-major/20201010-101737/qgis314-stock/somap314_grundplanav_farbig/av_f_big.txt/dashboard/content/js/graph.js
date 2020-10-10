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
        data: {"result": {"minY": 198.0, "minX": 0.0, "maxY": 4306.0, "series": [{"data": [[0.0, 198.0], [0.1, 198.0], [0.2, 204.0], [0.3, 209.0], [0.4, 209.0], [0.5, 210.0], [0.6, 210.0], [0.7, 211.0], [0.8, 211.0], [0.9, 214.0], [1.0, 218.0], [1.1, 222.0], [1.2, 222.0], [1.3, 224.0], [1.4, 227.0], [1.5, 230.0], [1.6, 230.0], [1.7, 245.0], [1.8, 246.0], [1.9, 246.0], [2.0, 247.0], [2.1, 266.0], [2.2, 294.0], [2.3, 294.0], [2.4, 303.0], [2.5, 308.0], [2.6, 309.0], [2.7, 309.0], [2.8, 309.0], [2.9, 314.0], [3.0, 328.0], [3.1, 328.0], [3.2, 330.0], [3.3, 334.0], [3.4, 334.0], [3.5, 335.0], [3.6, 337.0], [3.7, 339.0], [3.8, 339.0], [3.9, 339.0], [4.0, 340.0], [4.1, 342.0], [4.2, 342.0], [4.3, 342.0], [4.4, 343.0], [4.5, 343.0], [4.6, 343.0], [4.7, 346.0], [4.8, 347.0], [4.9, 348.0], [5.0, 348.0], [5.1, 349.0], [5.2, 350.0], [5.3, 350.0], [5.4, 350.0], [5.5, 355.0], [5.6, 355.0], [5.7, 355.0], [5.8, 356.0], [5.9, 361.0], [6.0, 361.0], [6.1, 361.0], [6.2, 361.0], [6.3, 363.0], [6.4, 367.0], [6.5, 367.0], [6.6, 369.0], [6.7, 371.0], [6.8, 371.0], [6.9, 371.0], [7.0, 373.0], [7.1, 373.0], [7.2, 373.0], [7.3, 377.0], [7.4, 379.0], [7.5, 387.0], [7.6, 387.0], [7.7, 398.0], [7.8, 401.0], [7.9, 402.0], [8.0, 402.0], [8.1, 402.0], [8.2, 405.0], [8.3, 412.0], [8.4, 412.0], [8.5, 413.0], [8.6, 420.0], [8.7, 420.0], [8.8, 423.0], [8.9, 425.0], [9.0, 425.0], [9.1, 425.0], [9.2, 428.0], [9.3, 430.0], [9.4, 432.0], [9.5, 432.0], [9.6, 438.0], [9.7, 439.0], [9.8, 439.0], [9.9, 439.0], [10.0, 440.0], [10.1, 441.0], [10.2, 441.0], [10.3, 443.0], [10.4, 444.0], [10.5, 444.0], [10.6, 444.0], [10.7, 445.0], [10.8, 447.0], [10.9, 447.0], [11.0, 447.0], [11.1, 447.0], [11.2, 448.0], [11.3, 448.0], [11.4, 448.0], [11.5, 448.0], [11.6, 450.0], [11.7, 450.0], [11.8, 451.0], [11.9, 451.0], [12.0, 452.0], [12.1, 452.0], [12.2, 459.0], [12.3, 460.0], [12.4, 461.0], [12.5, 461.0], [12.6, 461.0], [12.7, 461.0], [12.8, 463.0], [12.9, 463.0], [13.0, 463.0], [13.1, 465.0], [13.2, 471.0], [13.3, 471.0], [13.4, 472.0], [13.5, 476.0], [13.6, 476.0], [13.7, 479.0], [13.8, 482.0], [13.9, 482.0], [14.0, 482.0], [14.1, 485.0], [14.2, 487.0], [14.3, 489.0], [14.4, 489.0], [14.5, 489.0], [14.6, 490.0], [14.7, 493.0], [14.8, 493.0], [14.9, 493.0], [15.0, 504.0], [15.1, 504.0], [15.2, 509.0], [15.3, 517.0], [15.4, 517.0], [15.5, 517.0], [15.6, 521.0], [15.7, 523.0], [15.8, 524.0], [15.9, 524.0], [16.0, 524.0], [16.1, 524.0], [16.2, 532.0], [16.3, 532.0], [16.4, 541.0], [16.5, 545.0], [16.6, 546.0], [16.7, 546.0], [16.8, 547.0], [16.9, 549.0], [17.0, 549.0], [17.1, 550.0], [17.2, 554.0], [17.3, 554.0], [17.4, 554.0], [17.5, 555.0], [17.6, 556.0], [17.7, 556.0], [17.8, 556.0], [17.9, 557.0], [18.0, 558.0], [18.1, 558.0], [18.2, 558.0], [18.3, 559.0], [18.4, 565.0], [18.5, 565.0], [18.6, 566.0], [18.7, 568.0], [18.8, 571.0], [18.9, 571.0], [19.0, 571.0], [19.1, 572.0], [19.2, 576.0], [19.3, 576.0], [19.4, 587.0], [19.5, 589.0], [19.6, 591.0], [19.7, 591.0], [19.8, 592.0], [19.9, 599.0], [20.0, 600.0], [20.1, 600.0], [20.2, 601.0], [20.3, 602.0], [20.4, 602.0], [20.5, 606.0], [20.6, 609.0], [20.7, 610.0], [20.8, 610.0], [20.9, 614.0], [21.0, 615.0], [21.1, 615.0], [21.2, 615.0], [21.3, 618.0], [21.4, 620.0], [21.5, 624.0], [21.6, 624.0], [21.7, 626.0], [21.8, 630.0], [21.9, 630.0], [22.0, 630.0], [22.1, 631.0], [22.2, 631.0], [22.3, 631.0], [22.4, 631.0], [22.5, 631.0], [22.6, 633.0], [22.7, 633.0], [22.8, 635.0], [22.9, 635.0], [23.0, 638.0], [23.1, 638.0], [23.2, 639.0], [23.3, 644.0], [23.4, 644.0], [23.5, 649.0], [23.6, 652.0], [23.7, 652.0], [23.8, 652.0], [23.9, 652.0], [24.0, 653.0], [24.1, 655.0], [24.2, 655.0], [24.3, 656.0], [24.4, 660.0], [24.5, 660.0], [24.6, 660.0], [24.7, 661.0], [24.8, 662.0], [24.9, 662.0], [25.0, 662.0], [25.1, 665.0], [25.2, 667.0], [25.3, 667.0], [25.4, 667.0], [25.5, 669.0], [25.6, 670.0], [25.7, 670.0], [25.8, 671.0], [25.9, 674.0], [26.0, 674.0], [26.1, 674.0], [26.2, 674.0], [26.3, 676.0], [26.4, 676.0], [26.5, 676.0], [26.6, 677.0], [26.7, 677.0], [26.8, 677.0], [26.9, 677.0], [27.0, 678.0], [27.1, 679.0], [27.2, 679.0], [27.3, 682.0], [27.4, 683.0], [27.5, 684.0], [27.6, 684.0], [27.7, 684.0], [27.8, 685.0], [27.9, 687.0], [28.0, 687.0], [28.1, 688.0], [28.2, 688.0], [28.3, 689.0], [28.4, 689.0], [28.5, 690.0], [28.6, 690.0], [28.7, 690.0], [28.8, 690.0], [28.9, 691.0], [29.0, 692.0], [29.1, 692.0], [29.2, 695.0], [29.3, 695.0], [29.4, 696.0], [29.5, 696.0], [29.6, 701.0], [29.7, 703.0], [29.8, 704.0], [29.9, 704.0], [30.0, 704.0], [30.1, 705.0], [30.2, 705.0], [30.3, 706.0], [30.4, 706.0], [30.5, 707.0], [30.6, 707.0], [30.7, 708.0], [30.8, 709.0], [30.9, 709.0], [31.0, 709.0], [31.1, 710.0], [31.2, 710.0], [31.3, 711.0], [31.4, 711.0], [31.5, 718.0], [31.6, 719.0], [31.7, 719.0], [31.8, 721.0], [31.9, 721.0], [32.0, 723.0], [32.1, 723.0], [32.2, 724.0], [32.3, 725.0], [32.4, 726.0], [32.5, 726.0], [32.6, 727.0], [32.7, 727.0], [32.8, 736.0], [32.9, 736.0], [33.0, 743.0], [33.1, 745.0], [33.2, 745.0], [33.3, 745.0], [33.4, 748.0], [33.5, 748.0], [33.6, 748.0], [33.7, 749.0], [33.8, 749.0], [33.9, 749.0], [34.0, 749.0], [34.1, 749.0], [34.2, 750.0], [34.3, 752.0], [34.4, 752.0], [34.5, 759.0], [34.6, 760.0], [34.7, 761.0], [34.8, 761.0], [34.9, 766.0], [35.0, 766.0], [35.1, 766.0], [35.2, 768.0], [35.3, 773.0], [35.4, 773.0], [35.5, 773.0], [35.6, 777.0], [35.7, 778.0], [35.8, 778.0], [35.9, 778.0], [36.0, 779.0], [36.1, 780.0], [36.2, 782.0], [36.3, 782.0], [36.4, 783.0], [36.5, 785.0], [36.6, 786.0], [36.7, 786.0], [36.8, 787.0], [36.9, 789.0], [37.0, 789.0], [37.1, 790.0], [37.2, 790.0], [37.3, 792.0], [37.4, 792.0], [37.5, 792.0], [37.6, 792.0], [37.7, 796.0], [37.8, 796.0], [37.9, 797.0], [38.0, 799.0], [38.1, 800.0], [38.2, 800.0], [38.3, 801.0], [38.4, 803.0], [38.5, 803.0], [38.6, 807.0], [38.7, 807.0], [38.8, 807.0], [38.9, 807.0], [39.0, 808.0], [39.1, 809.0], [39.2, 811.0], [39.3, 811.0], [39.4, 817.0], [39.5, 822.0], [39.6, 830.0], [39.7, 830.0], [39.8, 832.0], [39.9, 834.0], [40.0, 835.0], [40.1, 835.0], [40.2, 835.0], [40.3, 836.0], [40.4, 836.0], [40.5, 840.0], [40.6, 840.0], [40.7, 846.0], [40.8, 846.0], [40.9, 847.0], [41.0, 848.0], [41.1, 855.0], [41.2, 855.0], [41.3, 855.0], [41.4, 857.0], [41.5, 859.0], [41.6, 859.0], [41.7, 863.0], [41.8, 865.0], [41.9, 865.0], [42.0, 865.0], [42.1, 867.0], [42.2, 868.0], [42.3, 868.0], [42.4, 870.0], [42.5, 877.0], [42.6, 877.0], [42.7, 877.0], [42.8, 878.0], [42.9, 879.0], [43.0, 880.0], [43.1, 880.0], [43.2, 881.0], [43.3, 886.0], [43.4, 886.0], [43.5, 888.0], [43.6, 893.0], [43.7, 893.0], [43.8, 893.0], [43.9, 894.0], [44.0, 895.0], [44.1, 895.0], [44.2, 895.0], [44.3, 898.0], [44.4, 899.0], [44.5, 900.0], [44.6, 900.0], [44.7, 903.0], [44.8, 906.0], [44.9, 906.0], [45.0, 906.0], [45.1, 907.0], [45.2, 907.0], [45.3, 907.0], [45.4, 908.0], [45.5, 910.0], [45.6, 913.0], [45.7, 913.0], [45.8, 916.0], [45.9, 916.0], [46.0, 917.0], [46.1, 917.0], [46.2, 918.0], [46.3, 918.0], [46.4, 918.0], [46.5, 918.0], [46.6, 919.0], [46.7, 919.0], [46.8, 919.0], [46.9, 922.0], [47.0, 923.0], [47.1, 925.0], [47.2, 925.0], [47.3, 925.0], [47.4, 925.0], [47.5, 928.0], [47.6, 928.0], [47.7, 928.0], [47.8, 928.0], [47.9, 931.0], [48.0, 931.0], [48.1, 934.0], [48.2, 935.0], [48.3, 944.0], [48.4, 944.0], [48.5, 946.0], [48.6, 946.0], [48.7, 946.0], [48.8, 947.0], [48.9, 948.0], [49.0, 950.0], [49.1, 950.0], [49.2, 950.0], [49.3, 950.0], [49.4, 951.0], [49.5, 951.0], [49.6, 953.0], [49.7, 954.0], [49.8, 956.0], [49.9, 956.0], [50.0, 958.0], [50.1, 958.0], [50.2, 958.0], [50.3, 959.0], [50.4, 963.0], [50.5, 965.0], [50.6, 965.0], [50.7, 965.0], [50.8, 970.0], [50.9, 971.0], [51.0, 971.0], [51.1, 972.0], [51.2, 976.0], [51.3, 977.0], [51.4, 977.0], [51.5, 982.0], [51.6, 986.0], [51.7, 986.0], [51.8, 993.0], [51.9, 1002.0], [52.0, 1003.0], [52.1, 1003.0], [52.2, 1006.0], [52.3, 1008.0], [52.4, 1008.0], [52.5, 1008.0], [52.6, 1025.0], [52.7, 1029.0], [52.8, 1034.0], [52.9, 1034.0], [53.0, 1036.0], [53.1, 1036.0], [53.2, 1037.0], [53.3, 1037.0], [53.4, 1037.0], [53.5, 1038.0], [53.6, 1038.0], [53.7, 1040.0], [53.8, 1040.0], [53.9, 1042.0], [54.0, 1042.0], [54.1, 1045.0], [54.2, 1050.0], [54.3, 1052.0], [54.4, 1052.0], [54.5, 1053.0], [54.6, 1054.0], [54.7, 1057.0], [54.8, 1057.0], [54.9, 1058.0], [55.0, 1059.0], [55.1, 1059.0], [55.2, 1059.0], [55.3, 1065.0], [55.4, 1067.0], [55.5, 1067.0], [55.6, 1067.0], [55.7, 1071.0], [55.8, 1076.0], [55.9, 1076.0], [56.0, 1077.0], [56.1, 1078.0], [56.2, 1079.0], [56.3, 1079.0], [56.4, 1087.0], [56.5, 1088.0], [56.6, 1093.0], [56.7, 1093.0], [56.8, 1095.0], [56.9, 1095.0], [57.0, 1095.0], [57.1, 1095.0], [57.2, 1100.0], [57.3, 1100.0], [57.4, 1100.0], [57.5, 1103.0], [57.6, 1106.0], [57.7, 1108.0], [57.8, 1108.0], [57.9, 1109.0], [58.0, 1109.0], [58.1, 1110.0], [58.2, 1110.0], [58.3, 1113.0], [58.4, 1114.0], [58.5, 1114.0], [58.6, 1114.0], [58.7, 1114.0], [58.8, 1114.0], [58.9, 1114.0], [59.0, 1115.0], [59.1, 1116.0], [59.2, 1116.0], [59.3, 1116.0], [59.4, 1119.0], [59.5, 1122.0], [59.6, 1122.0], [59.7, 1122.0], [59.8, 1128.0], [59.9, 1128.0], [60.0, 1131.0], [60.1, 1131.0], [60.2, 1132.0], [60.3, 1133.0], [60.4, 1133.0], [60.5, 1133.0], [60.6, 1133.0], [60.7, 1135.0], [60.8, 1135.0], [60.9, 1136.0], [61.0, 1138.0], [61.1, 1139.0], [61.2, 1139.0], [61.3, 1141.0], [61.4, 1141.0], [61.5, 1142.0], [61.6, 1142.0], [61.7, 1142.0], [61.8, 1144.0], [61.9, 1144.0], [62.0, 1151.0], [62.1, 1152.0], [62.2, 1153.0], [62.3, 1153.0], [62.4, 1153.0], [62.5, 1156.0], [62.6, 1158.0], [62.7, 1158.0], [62.8, 1160.0], [62.9, 1164.0], [63.0, 1173.0], [63.1, 1173.0], [63.2, 1175.0], [63.3, 1177.0], [63.4, 1177.0], [63.5, 1178.0], [63.6, 1180.0], [63.7, 1181.0], [63.8, 1181.0], [63.9, 1184.0], [64.0, 1185.0], [64.1, 1188.0], [64.2, 1188.0], [64.3, 1189.0], [64.4, 1191.0], [64.5, 1194.0], [64.6, 1194.0], [64.7, 1194.0], [64.8, 1202.0], [64.9, 1203.0], [65.0, 1203.0], [65.1, 1204.0], [65.2, 1204.0], [65.3, 1204.0], [65.4, 1205.0], [65.5, 1208.0], [65.6, 1218.0], [65.7, 1218.0], [65.8, 1219.0], [65.9, 1224.0], [66.0, 1228.0], [66.1, 1228.0], [66.2, 1229.0], [66.3, 1232.0], [66.4, 1234.0], [66.5, 1234.0], [66.6, 1234.0], [66.7, 1242.0], [66.8, 1242.0], [66.9, 1243.0], [67.0, 1244.0], [67.1, 1244.0], [67.2, 1244.0], [67.3, 1247.0], [67.4, 1249.0], [67.5, 1252.0], [67.6, 1252.0], [67.7, 1253.0], [67.8, 1256.0], [67.9, 1266.0], [68.0, 1266.0], [68.1, 1267.0], [68.2, 1268.0], [68.3, 1270.0], [68.4, 1270.0], [68.5, 1272.0], [68.6, 1272.0], [68.7, 1272.0], [68.8, 1273.0], [68.9, 1276.0], [69.0, 1279.0], [69.1, 1279.0], [69.2, 1281.0], [69.3, 1291.0], [69.4, 1293.0], [69.5, 1293.0], [69.6, 1298.0], [69.7, 1300.0], [69.8, 1301.0], [69.9, 1301.0], [70.0, 1302.0], [70.1, 1304.0], [70.2, 1304.0], [70.3, 1305.0], [70.4, 1307.0], [70.5, 1307.0], [70.6, 1307.0], [70.7, 1307.0], [70.8, 1314.0], [70.9, 1315.0], [71.0, 1315.0], [71.1, 1319.0], [71.2, 1324.0], [71.3, 1326.0], [71.4, 1326.0], [71.5, 1327.0], [71.6, 1329.0], [71.7, 1329.0], [71.8, 1330.0], [71.9, 1332.0], [72.0, 1337.0], [72.1, 1337.0], [72.2, 1338.0], [72.3, 1338.0], [72.4, 1344.0], [72.5, 1344.0], [72.6, 1345.0], [72.7, 1345.0], [72.8, 1346.0], [72.9, 1346.0], [73.0, 1347.0], [73.1, 1349.0], [73.2, 1351.0], [73.3, 1351.0], [73.4, 1355.0], [73.5, 1357.0], [73.6, 1357.0], [73.7, 1358.0], [73.8, 1358.0], [73.9, 1361.0], [74.0, 1361.0], [74.1, 1364.0], [74.2, 1368.0], [74.3, 1374.0], [74.4, 1374.0], [74.5, 1376.0], [74.6, 1382.0], [74.7, 1382.0], [74.8, 1382.0], [74.9, 1390.0], [75.0, 1390.0], [75.1, 1390.0], [75.2, 1392.0], [75.3, 1396.0], [75.4, 1396.0], [75.5, 1396.0], [75.6, 1397.0], [75.7, 1409.0], [75.8, 1410.0], [75.9, 1410.0], [76.0, 1410.0], [76.1, 1412.0], [76.2, 1416.0], [76.3, 1416.0], [76.4, 1419.0], [76.5, 1419.0], [76.6, 1420.0], [76.7, 1420.0], [76.8, 1423.0], [76.9, 1430.0], [77.0, 1430.0], [77.1, 1431.0], [77.2, 1435.0], [77.3, 1436.0], [77.4, 1436.0], [77.5, 1437.0], [77.6, 1439.0], [77.7, 1443.0], [77.8, 1443.0], [77.9, 1443.0], [78.0, 1453.0], [78.1, 1453.0], [78.2, 1453.0], [78.3, 1455.0], [78.4, 1456.0], [78.5, 1456.0], [78.6, 1458.0], [78.7, 1467.0], [78.8, 1470.0], [78.9, 1470.0], [79.0, 1473.0], [79.1, 1475.0], [79.2, 1477.0], [79.3, 1477.0], [79.4, 1479.0], [79.5, 1479.0], [79.6, 1481.0], [79.7, 1481.0], [79.8, 1485.0], [79.9, 1486.0], [80.0, 1489.0], [80.1, 1489.0], [80.2, 1490.0], [80.3, 1494.0], [80.4, 1494.0], [80.5, 1495.0], [80.6, 1497.0], [80.7, 1502.0], [80.8, 1502.0], [80.9, 1505.0], [81.0, 1506.0], [81.1, 1507.0], [81.2, 1507.0], [81.3, 1516.0], [81.4, 1517.0], [81.5, 1518.0], [81.6, 1518.0], [81.7, 1528.0], [81.8, 1528.0], [81.9, 1528.0], [82.0, 1528.0], [82.1, 1528.0], [82.2, 1533.0], [82.3, 1533.0], [82.4, 1534.0], [82.5, 1537.0], [82.6, 1538.0], [82.7, 1538.0], [82.8, 1543.0], [82.9, 1550.0], [83.0, 1565.0], [83.1, 1565.0], [83.2, 1569.0], [83.3, 1570.0], [83.4, 1570.0], [83.5, 1570.0], [83.6, 1571.0], [83.7, 1572.0], [83.8, 1572.0], [83.9, 1573.0], [84.0, 1578.0], [84.1, 1578.0], [84.2, 1578.0], [84.3, 1581.0], [84.4, 1584.0], [84.5, 1587.0], [84.6, 1587.0], [84.7, 1592.0], [84.8, 1595.0], [84.9, 1602.0], [85.0, 1602.0], [85.1, 1605.0], [85.2, 1611.0], [85.3, 1611.0], [85.4, 1612.0], [85.5, 1613.0], [85.6, 1619.0], [85.7, 1619.0], [85.8, 1619.0], [85.9, 1622.0], [86.0, 1625.0], [86.1, 1625.0], [86.2, 1638.0], [86.3, 1642.0], [86.4, 1642.0], [86.5, 1642.0], [86.6, 1643.0], [86.7, 1645.0], [86.8, 1645.0], [86.9, 1647.0], [87.0, 1659.0], [87.1, 1663.0], [87.2, 1663.0], [87.3, 1667.0], [87.4, 1677.0], [87.5, 1681.0], [87.6, 1681.0], [87.7, 1686.0], [87.8, 1694.0], [87.9, 1704.0], [88.0, 1704.0], [88.1, 1707.0], [88.2, 1707.0], [88.3, 1718.0], [88.4, 1718.0], [88.5, 1718.0], [88.6, 1718.0], [88.7, 1718.0], [88.8, 1720.0], [88.9, 1732.0], [89.0, 1736.0], [89.1, 1736.0], [89.2, 1742.0], [89.3, 1748.0], [89.4, 1751.0], [89.5, 1751.0], [89.6, 1753.0], [89.7, 1755.0], [89.8, 1756.0], [89.9, 1756.0], [90.0, 1756.0], [90.1, 1756.0], [90.2, 1756.0], [90.3, 1760.0], [90.4, 1760.0], [90.5, 1762.0], [90.6, 1762.0], [90.7, 1765.0], [90.8, 1782.0], [90.9, 1782.0], [91.0, 1782.0], [91.1, 1783.0], [91.2, 1784.0], [91.3, 1786.0], [91.4, 1786.0], [91.5, 1789.0], [91.6, 1794.0], [91.7, 1794.0], [91.8, 1796.0], [91.9, 1800.0], [92.0, 1800.0], [92.1, 1800.0], [92.2, 1810.0], [92.3, 1810.0], [92.4, 1811.0], [92.5, 1811.0], [92.6, 1821.0], [92.7, 1823.0], [92.8, 1824.0], [92.9, 1824.0], [93.0, 1825.0], [93.1, 1829.0], [93.2, 1835.0], [93.3, 1835.0], [93.4, 1841.0], [93.5, 1846.0], [93.6, 1846.0], [93.7, 1852.0], [93.8, 1861.0], [93.9, 1868.0], [94.0, 1868.0], [94.1, 1914.0], [94.2, 1922.0], [94.3, 1927.0], [94.4, 1927.0], [94.5, 1929.0], [94.6, 1931.0], [94.7, 1940.0], [94.8, 1940.0], [94.9, 1948.0], [95.0, 1980.0], [95.1, 1980.0], [95.2, 1981.0], [95.3, 2007.0], [95.4, 2014.0], [95.5, 2014.0], [95.6, 2018.0], [95.7, 2020.0], [95.8, 2026.0], [95.9, 2026.0], [96.0, 2026.0], [96.1, 2038.0], [96.2, 2042.0], [96.3, 2042.0], [96.4, 2061.0], [96.5, 2109.0], [96.6, 2109.0], [96.7, 2109.0], [96.8, 2116.0], [96.9, 2123.0], [97.0, 2123.0], [97.1, 2149.0], [97.2, 2155.0], [97.3, 2197.0], [97.4, 2197.0], [97.5, 2236.0], [97.6, 2273.0], [97.7, 2308.0], [97.8, 2308.0], [97.9, 2383.0], [98.0, 2420.0], [98.1, 2534.0], [98.2, 2534.0], [98.3, 2549.0], [98.4, 2560.0], [98.5, 2560.0], [98.6, 2561.0], [98.7, 2604.0], [98.8, 2719.0], [98.9, 2719.0], [99.0, 2785.0], [99.1, 2803.0], [99.2, 3156.0], [99.3, 3156.0], [99.4, 3375.0], [99.5, 3701.0], [99.6, 3952.0], [99.7, 3952.0], [99.8, 4032.0], [99.9, 4306.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 70.0, "series": [{"data": [[600.0, 70.0], [700.0, 63.0], [800.0, 47.0], [900.0, 54.0], [1000.0, 39.0], [1100.0, 56.0], [1200.0, 36.0], [1300.0, 44.0], [1400.0, 37.0], [1500.0, 31.0], [100.0, 1.0], [1600.0, 22.0], [1700.0, 29.0], [1800.0, 16.0], [1900.0, 9.0], [2000.0, 9.0], [2100.0, 7.0], [2300.0, 2.0], [2200.0, 2.0], [2400.0, 1.0], [2500.0, 4.0], [2600.0, 1.0], [2700.0, 2.0], [2800.0, 1.0], [3100.0, 1.0], [3300.0, 1.0], [200.0, 16.0], [3700.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4300.0, 1.0], [300.0, 40.0], [400.0, 53.0], [500.0, 37.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 110.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 483.0, "series": [{"data": [[0.0, 110.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 483.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 142.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.85483870967742, "minX": 1.602327E12, "maxY": 10.0, "series": [{"data": [[1.60232706E12, 9.85483870967742], [1.602327E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232706E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 308.0, "minX": 1.0, "maxY": 2561.0, "series": [{"data": [[8.0, 690.0], [4.0, 635.0], [2.0, 1247.0], [1.0, 1077.0], [9.0, 308.0], [10.0, 1060.838842975208], [5.0, 707.0], [6.0, 674.0], [3.0, 2561.0], [7.0, 807.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1059.6938775510218]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2330.35, "minX": 1.602327E12, "maxY": 1124287.95, "series": [{"data": [[1.60232706E12, 711400.4166666666], [1.602327E12, 1124287.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232706E12, 2330.35], [1.602327E12, 3192.6833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232706E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1053.2423529411758, "minX": 1.602327E12, "maxY": 1068.5387096774207, "series": [{"data": [[1.60232706E12, 1068.5387096774207], [1.602327E12, 1053.2423529411758]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232706E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1052.1764705882338, "minX": 1.602327E12, "maxY": 1067.6129032258057, "series": [{"data": [[1.60232706E12, 1067.6129032258057], [1.602327E12, 1052.1764705882338]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232706E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03870967741935484, "minX": 1.602327E12, "maxY": 0.1929411764705881, "series": [{"data": [[1.60232706E12, 0.03870967741935484], [1.602327E12, 0.1929411764705881]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232706E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 198.0, "minX": 1.602327E12, "maxY": 4306.0, "series": [{"data": [[1.60232706E12, 2561.0], [1.602327E12, 4306.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232706E12, 292.32199421644214], [1.602327E12, 209.8339998984337]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232706E12, 308.0789000296593], [1.602327E12, 210.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232706E12, 304.45099710822103], [1.602327E12, 210.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232706E12, 211.0], [1.602327E12, 198.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232706E12, 1037.5], [1.602327E12, 934.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232706E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 553.0, "minX": 1.0, "maxY": 2383.0, "series": [{"data": [[8.0, 1097.5], [2.0, 1162.0], [9.0, 1177.0], [10.0, 1027.0], [11.0, 920.0], [12.0, 681.0], [13.0, 740.0], [15.0, 764.5], [1.0, 2383.0], [16.0, 553.0], [5.0, 1506.5], [6.0, 1309.0], [7.0, 1327.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 553.0, "minX": 1.0, "maxY": 2379.0, "series": [{"data": [[8.0, 1097.0], [2.0, 1161.5], [9.0, 1176.0], [10.0, 1026.0], [11.0, 920.0], [12.0, 681.0], [13.0, 739.5], [15.0, 764.0], [1.0, 2379.0], [16.0, 553.0], [5.0, 1502.0], [6.0, 1308.0], [7.0, 1326.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.602327E12, "maxY": 7.25, "series": [{"data": [[1.60232706E12, 5.0], [1.602327E12, 7.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232706E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.166666666666667, "minX": 1.602327E12, "maxY": 7.083333333333333, "series": [{"data": [[1.60232706E12, 5.166666666666667], [1.602327E12, 7.083333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232706E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.166666666666667, "minX": 1.602327E12, "maxY": 7.083333333333333, "series": [{"data": [[1.60232706E12, 5.166666666666667], [1.602327E12, 7.083333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232706E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.166666666666667, "minX": 1.602327E12, "maxY": 7.083333333333333, "series": [{"data": [[1.60232706E12, 5.166666666666667], [1.602327E12, 7.083333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232706E12, "title": "Total Transactions Per Second"}},
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

