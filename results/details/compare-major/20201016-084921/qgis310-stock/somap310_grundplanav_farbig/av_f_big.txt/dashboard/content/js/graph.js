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
        data: {"result": {"minY": 191.0, "minX": 0.0, "maxY": 3714.0, "series": [{"data": [[0.0, 191.0], [0.1, 191.0], [0.2, 192.0], [0.3, 199.0], [0.4, 199.0], [0.5, 202.0], [0.6, 203.0], [0.7, 205.0], [0.8, 205.0], [0.9, 210.0], [1.0, 214.0], [1.1, 214.0], [1.2, 214.0], [1.3, 216.0], [1.4, 217.0], [1.5, 222.0], [1.6, 222.0], [1.7, 226.0], [1.8, 227.0], [1.9, 227.0], [2.0, 228.0], [2.1, 230.0], [2.2, 237.0], [2.3, 237.0], [2.4, 242.0], [2.5, 247.0], [2.6, 250.0], [2.7, 250.0], [2.8, 255.0], [2.9, 261.0], [3.0, 264.0], [3.1, 264.0], [3.2, 278.0], [3.3, 306.0], [3.4, 306.0], [3.5, 311.0], [3.6, 318.0], [3.7, 319.0], [3.8, 319.0], [3.9, 321.0], [4.0, 323.0], [4.1, 324.0], [4.2, 324.0], [4.3, 328.0], [4.4, 329.0], [4.5, 330.0], [4.6, 330.0], [4.7, 331.0], [4.8, 332.0], [4.9, 335.0], [5.0, 335.0], [5.1, 337.0], [5.2, 338.0], [5.3, 338.0], [5.4, 339.0], [5.5, 341.0], [5.6, 343.0], [5.7, 343.0], [5.8, 347.0], [5.9, 349.0], [6.0, 351.0], [6.1, 351.0], [6.2, 351.0], [6.3, 352.0], [6.4, 353.0], [6.5, 353.0], [6.6, 353.0], [6.7, 354.0], [6.8, 354.0], [6.9, 356.0], [7.0, 360.0], [7.1, 362.0], [7.2, 362.0], [7.3, 362.0], [7.4, 364.0], [7.5, 365.0], [7.6, 365.0], [7.7, 367.0], [7.8, 367.0], [7.9, 368.0], [8.0, 368.0], [8.1, 370.0], [8.2, 371.0], [8.3, 371.0], [8.4, 371.0], [8.5, 378.0], [8.6, 383.0], [8.7, 383.0], [8.8, 386.0], [8.9, 388.0], [9.0, 390.0], [9.1, 390.0], [9.2, 392.0], [9.3, 392.0], [9.4, 393.0], [9.5, 393.0], [9.6, 395.0], [9.7, 403.0], [9.8, 405.0], [9.9, 405.0], [10.0, 405.0], [10.1, 408.0], [10.2, 408.0], [10.3, 412.0], [10.4, 414.0], [10.5, 416.0], [10.6, 416.0], [10.7, 419.0], [10.8, 420.0], [10.9, 423.0], [11.0, 423.0], [11.1, 428.0], [11.2, 429.0], [11.3, 430.0], [11.4, 430.0], [11.5, 430.0], [11.6, 433.0], [11.7, 433.0], [11.8, 435.0], [11.9, 437.0], [12.0, 439.0], [12.1, 439.0], [12.2, 441.0], [12.3, 443.0], [12.4, 444.0], [12.5, 444.0], [12.6, 446.0], [12.7, 449.0], [12.8, 452.0], [12.9, 452.0], [13.0, 452.0], [13.1, 453.0], [13.2, 453.0], [13.3, 453.0], [13.4, 455.0], [13.5, 457.0], [13.6, 457.0], [13.7, 460.0], [13.8, 461.0], [13.9, 462.0], [14.0, 462.0], [14.1, 463.0], [14.2, 467.0], [14.3, 471.0], [14.4, 471.0], [14.5, 472.0], [14.6, 472.0], [14.7, 475.0], [14.8, 475.0], [14.9, 480.0], [15.0, 485.0], [15.1, 485.0], [15.2, 487.0], [15.3, 488.0], [15.4, 495.0], [15.5, 495.0], [15.6, 500.0], [15.7, 500.0], [15.8, 505.0], [15.9, 505.0], [16.0, 508.0], [16.1, 509.0], [16.2, 510.0], [16.3, 510.0], [16.4, 510.0], [16.5, 510.0], [16.6, 512.0], [16.7, 512.0], [16.8, 512.0], [16.9, 513.0], [17.0, 513.0], [17.1, 517.0], [17.2, 518.0], [17.3, 520.0], [17.4, 520.0], [17.5, 523.0], [17.6, 523.0], [17.7, 524.0], [17.8, 524.0], [17.9, 527.0], [18.0, 531.0], [18.1, 532.0], [18.2, 532.0], [18.3, 534.0], [18.4, 535.0], [18.5, 535.0], [18.6, 543.0], [18.7, 551.0], [18.8, 554.0], [18.9, 554.0], [19.0, 555.0], [19.1, 558.0], [19.2, 560.0], [19.3, 560.0], [19.4, 564.0], [19.5, 569.0], [19.6, 573.0], [19.7, 573.0], [19.8, 575.0], [19.9, 578.0], [20.0, 579.0], [20.1, 579.0], [20.2, 579.0], [20.3, 579.0], [20.4, 579.0], [20.5, 582.0], [20.6, 585.0], [20.7, 589.0], [20.8, 589.0], [20.9, 596.0], [21.0, 597.0], [21.1, 598.0], [21.2, 598.0], [21.3, 605.0], [21.4, 606.0], [21.5, 607.0], [21.6, 607.0], [21.7, 610.0], [21.8, 612.0], [21.9, 612.0], [22.0, 612.0], [22.1, 612.0], [22.2, 620.0], [22.3, 620.0], [22.4, 621.0], [22.5, 623.0], [22.6, 625.0], [22.7, 625.0], [22.8, 625.0], [22.9, 626.0], [23.0, 627.0], [23.1, 627.0], [23.2, 627.0], [23.3, 630.0], [23.4, 630.0], [23.5, 637.0], [23.6, 638.0], [23.7, 641.0], [23.8, 641.0], [23.9, 641.0], [24.0, 644.0], [24.1, 645.0], [24.2, 645.0], [24.3, 647.0], [24.4, 654.0], [24.5, 654.0], [24.6, 654.0], [24.7, 655.0], [24.8, 655.0], [24.9, 657.0], [25.0, 657.0], [25.1, 658.0], [25.2, 661.0], [25.3, 661.0], [25.4, 664.0], [25.5, 670.0], [25.6, 670.0], [25.7, 670.0], [25.8, 671.0], [25.9, 672.0], [26.0, 672.0], [26.1, 672.0], [26.2, 673.0], [26.3, 673.0], [26.4, 673.0], [26.5, 673.0], [26.6, 674.0], [26.7, 677.0], [26.8, 677.0], [26.9, 677.0], [27.0, 678.0], [27.1, 682.0], [27.2, 682.0], [27.3, 683.0], [27.4, 683.0], [27.5, 683.0], [27.6, 683.0], [27.7, 688.0], [27.8, 688.0], [27.9, 689.0], [28.0, 689.0], [28.1, 689.0], [28.2, 689.0], [28.3, 690.0], [28.4, 690.0], [28.5, 695.0], [28.6, 695.0], [28.7, 695.0], [28.8, 698.0], [28.9, 700.0], [29.0, 701.0], [29.1, 701.0], [29.2, 701.0], [29.3, 704.0], [29.4, 704.0], [29.5, 704.0], [29.6, 706.0], [29.7, 707.0], [29.8, 707.0], [29.9, 707.0], [30.0, 708.0], [30.1, 709.0], [30.2, 709.0], [30.3, 711.0], [30.4, 711.0], [30.5, 712.0], [30.6, 712.0], [30.7, 712.0], [30.8, 712.0], [30.9, 713.0], [31.0, 713.0], [31.1, 716.0], [31.2, 717.0], [31.3, 717.0], [31.4, 717.0], [31.5, 718.0], [31.6, 718.0], [31.7, 718.0], [31.8, 718.0], [31.9, 722.0], [32.0, 723.0], [32.1, 723.0], [32.2, 725.0], [32.3, 730.0], [32.4, 731.0], [32.5, 731.0], [32.6, 732.0], [32.7, 733.0], [32.8, 734.0], [32.9, 734.0], [33.0, 735.0], [33.1, 735.0], [33.2, 736.0], [33.3, 736.0], [33.4, 737.0], [33.5, 738.0], [33.6, 738.0], [33.7, 739.0], [33.8, 739.0], [33.9, 742.0], [34.0, 742.0], [34.1, 745.0], [34.2, 747.0], [34.3, 749.0], [34.4, 749.0], [34.5, 752.0], [34.6, 755.0], [34.7, 756.0], [34.8, 756.0], [34.9, 759.0], [35.0, 760.0], [35.1, 760.0], [35.2, 763.0], [35.3, 764.0], [35.4, 765.0], [35.5, 765.0], [35.6, 768.0], [35.7, 772.0], [35.8, 773.0], [35.9, 773.0], [36.0, 773.0], [36.1, 774.0], [36.2, 775.0], [36.3, 775.0], [36.4, 775.0], [36.5, 776.0], [36.6, 782.0], [36.7, 782.0], [36.8, 785.0], [36.9, 788.0], [37.0, 788.0], [37.1, 789.0], [37.2, 790.0], [37.3, 791.0], [37.4, 791.0], [37.5, 803.0], [37.6, 803.0], [37.7, 804.0], [37.8, 804.0], [37.9, 804.0], [38.0, 805.0], [38.1, 807.0], [38.2, 807.0], [38.3, 817.0], [38.4, 828.0], [38.5, 828.0], [38.6, 830.0], [38.7, 839.0], [38.8, 839.0], [38.9, 839.0], [39.0, 840.0], [39.1, 840.0], [39.2, 842.0], [39.3, 842.0], [39.4, 843.0], [39.5, 845.0], [39.6, 848.0], [39.7, 848.0], [39.8, 850.0], [39.9, 853.0], [40.0, 853.0], [40.1, 853.0], [40.2, 857.0], [40.3, 863.0], [40.4, 863.0], [40.5, 863.0], [40.6, 865.0], [40.7, 868.0], [40.8, 868.0], [40.9, 869.0], [41.0, 870.0], [41.1, 870.0], [41.2, 870.0], [41.3, 871.0], [41.4, 876.0], [41.5, 876.0], [41.6, 876.0], [41.7, 877.0], [41.8, 879.0], [41.9, 879.0], [42.0, 881.0], [42.1, 881.0], [42.2, 884.0], [42.3, 884.0], [42.4, 890.0], [42.5, 894.0], [42.6, 897.0], [42.7, 897.0], [42.8, 898.0], [42.9, 907.0], [43.0, 911.0], [43.1, 911.0], [43.2, 912.0], [43.3, 912.0], [43.4, 912.0], [43.5, 913.0], [43.6, 913.0], [43.7, 915.0], [43.8, 915.0], [43.9, 915.0], [44.0, 916.0], [44.1, 917.0], [44.2, 917.0], [44.3, 920.0], [44.4, 923.0], [44.5, 924.0], [44.6, 924.0], [44.7, 931.0], [44.8, 931.0], [44.9, 933.0], [45.0, 933.0], [45.1, 936.0], [45.2, 936.0], [45.3, 936.0], [45.4, 941.0], [45.5, 943.0], [45.6, 943.0], [45.7, 943.0], [45.8, 944.0], [45.9, 945.0], [46.0, 947.0], [46.1, 947.0], [46.2, 953.0], [46.3, 953.0], [46.4, 954.0], [46.5, 954.0], [46.6, 958.0], [46.7, 960.0], [46.8, 960.0], [46.9, 961.0], [47.0, 962.0], [47.1, 962.0], [47.2, 962.0], [47.3, 963.0], [47.4, 965.0], [47.5, 971.0], [47.6, 971.0], [47.7, 976.0], [47.8, 977.0], [47.9, 979.0], [48.0, 979.0], [48.1, 979.0], [48.2, 980.0], [48.3, 982.0], [48.4, 982.0], [48.5, 982.0], [48.6, 983.0], [48.7, 983.0], [48.8, 984.0], [48.9, 990.0], [49.0, 992.0], [49.1, 992.0], [49.2, 996.0], [49.3, 997.0], [49.4, 997.0], [49.5, 997.0], [49.6, 998.0], [49.7, 1001.0], [49.8, 1004.0], [49.9, 1004.0], [50.0, 1004.0], [50.1, 1006.0], [50.2, 1006.0], [50.3, 1011.0], [50.4, 1017.0], [50.5, 1017.0], [50.6, 1017.0], [50.7, 1017.0], [50.8, 1022.0], [50.9, 1029.0], [51.0, 1029.0], [51.1, 1029.0], [51.2, 1030.0], [51.3, 1032.0], [51.4, 1032.0], [51.5, 1034.0], [51.6, 1035.0], [51.7, 1035.0], [51.8, 1035.0], [51.9, 1043.0], [52.0, 1044.0], [52.1, 1044.0], [52.2, 1046.0], [52.3, 1047.0], [52.4, 1049.0], [52.5, 1049.0], [52.6, 1053.0], [52.7, 1054.0], [52.8, 1058.0], [52.9, 1058.0], [53.0, 1059.0], [53.1, 1059.0], [53.2, 1060.0], [53.3, 1060.0], [53.4, 1066.0], [53.5, 1066.0], [53.6, 1066.0], [53.7, 1069.0], [53.8, 1075.0], [53.9, 1076.0], [54.0, 1076.0], [54.1, 1077.0], [54.2, 1077.0], [54.3, 1079.0], [54.4, 1079.0], [54.5, 1080.0], [54.6, 1080.0], [54.7, 1084.0], [54.8, 1084.0], [54.9, 1090.0], [55.0, 1091.0], [55.1, 1091.0], [55.2, 1091.0], [55.3, 1091.0], [55.4, 1091.0], [55.5, 1091.0], [55.6, 1092.0], [55.7, 1093.0], [55.8, 1094.0], [55.9, 1094.0], [56.0, 1095.0], [56.1, 1099.0], [56.2, 1099.0], [56.3, 1099.0], [56.4, 1100.0], [56.5, 1103.0], [56.6, 1103.0], [56.7, 1103.0], [56.8, 1107.0], [56.9, 1107.0], [57.0, 1107.0], [57.1, 1108.0], [57.2, 1110.0], [57.3, 1111.0], [57.4, 1111.0], [57.5, 1114.0], [57.6, 1114.0], [57.7, 1117.0], [57.8, 1117.0], [57.9, 1120.0], [58.0, 1122.0], [58.1, 1122.0], [58.2, 1122.0], [58.3, 1124.0], [58.4, 1124.0], [58.5, 1124.0], [58.6, 1126.0], [58.7, 1126.0], [58.8, 1128.0], [58.9, 1128.0], [59.0, 1130.0], [59.1, 1135.0], [59.2, 1136.0], [59.3, 1136.0], [59.4, 1138.0], [59.5, 1140.0], [59.6, 1144.0], [59.7, 1144.0], [59.8, 1146.0], [59.9, 1147.0], [60.0, 1151.0], [60.1, 1151.0], [60.2, 1152.0], [60.3, 1153.0], [60.4, 1153.0], [60.5, 1155.0], [60.6, 1158.0], [60.7, 1159.0], [60.8, 1159.0], [60.9, 1162.0], [61.0, 1165.0], [61.1, 1165.0], [61.2, 1165.0], [61.3, 1166.0], [61.4, 1167.0], [61.5, 1170.0], [61.6, 1170.0], [61.7, 1171.0], [61.8, 1173.0], [61.9, 1173.0], [62.0, 1178.0], [62.1, 1181.0], [62.2, 1181.0], [62.3, 1181.0], [62.4, 1184.0], [62.5, 1185.0], [62.6, 1186.0], [62.7, 1186.0], [62.8, 1191.0], [62.9, 1196.0], [63.0, 1199.0], [63.1, 1199.0], [63.2, 1201.0], [63.3, 1203.0], [63.4, 1203.0], [63.5, 1207.0], [63.6, 1210.0], [63.7, 1211.0], [63.8, 1211.0], [63.9, 1212.0], [64.0, 1214.0], [64.1, 1216.0], [64.2, 1216.0], [64.3, 1217.0], [64.4, 1217.0], [64.5, 1225.0], [64.6, 1225.0], [64.7, 1227.0], [64.8, 1230.0], [64.9, 1234.0], [65.0, 1234.0], [65.1, 1234.0], [65.2, 1235.0], [65.3, 1235.0], [65.4, 1238.0], [65.5, 1239.0], [65.6, 1240.0], [65.7, 1240.0], [65.8, 1240.0], [65.9, 1246.0], [66.0, 1247.0], [66.1, 1247.0], [66.2, 1249.0], [66.3, 1249.0], [66.4, 1250.0], [66.5, 1250.0], [66.6, 1260.0], [66.7, 1262.0], [66.8, 1262.0], [66.9, 1263.0], [67.0, 1264.0], [67.1, 1265.0], [67.2, 1265.0], [67.3, 1266.0], [67.4, 1273.0], [67.5, 1274.0], [67.6, 1274.0], [67.7, 1276.0], [67.8, 1277.0], [67.9, 1278.0], [68.0, 1278.0], [68.1, 1283.0], [68.2, 1283.0], [68.3, 1287.0], [68.4, 1287.0], [68.5, 1287.0], [68.6, 1293.0], [68.7, 1293.0], [68.8, 1294.0], [68.9, 1296.0], [69.0, 1300.0], [69.1, 1300.0], [69.2, 1300.0], [69.3, 1310.0], [69.4, 1310.0], [69.5, 1310.0], [69.6, 1312.0], [69.7, 1320.0], [69.8, 1324.0], [69.9, 1324.0], [70.0, 1325.0], [70.1, 1328.0], [70.2, 1328.0], [70.3, 1332.0], [70.4, 1336.0], [70.5, 1337.0], [70.6, 1337.0], [70.7, 1337.0], [70.8, 1338.0], [70.9, 1339.0], [71.0, 1339.0], [71.1, 1341.0], [71.2, 1342.0], [71.3, 1343.0], [71.4, 1343.0], [71.5, 1343.0], [71.6, 1347.0], [71.7, 1347.0], [71.8, 1352.0], [71.9, 1352.0], [72.0, 1353.0], [72.1, 1353.0], [72.2, 1354.0], [72.3, 1355.0], [72.4, 1356.0], [72.5, 1356.0], [72.6, 1362.0], [72.7, 1372.0], [72.8, 1373.0], [72.9, 1373.0], [73.0, 1373.0], [73.1, 1378.0], [73.2, 1379.0], [73.3, 1379.0], [73.4, 1380.0], [73.5, 1380.0], [73.6, 1380.0], [73.7, 1380.0], [73.8, 1381.0], [73.9, 1382.0], [74.0, 1382.0], [74.1, 1388.0], [74.2, 1389.0], [74.3, 1391.0], [74.4, 1391.0], [74.5, 1394.0], [74.6, 1396.0], [74.7, 1398.0], [74.8, 1398.0], [74.9, 1405.0], [75.0, 1409.0], [75.1, 1409.0], [75.2, 1411.0], [75.3, 1416.0], [75.4, 1417.0], [75.5, 1417.0], [75.6, 1420.0], [75.7, 1422.0], [75.8, 1423.0], [75.9, 1423.0], [76.0, 1423.0], [76.1, 1424.0], [76.2, 1424.0], [76.3, 1424.0], [76.4, 1425.0], [76.5, 1425.0], [76.6, 1428.0], [76.7, 1428.0], [76.8, 1429.0], [76.9, 1434.0], [77.0, 1434.0], [77.1, 1434.0], [77.2, 1435.0], [77.3, 1436.0], [77.4, 1436.0], [77.5, 1437.0], [77.6, 1437.0], [77.7, 1438.0], [77.8, 1438.0], [77.9, 1439.0], [78.0, 1442.0], [78.1, 1444.0], [78.2, 1444.0], [78.3, 1444.0], [78.4, 1445.0], [78.5, 1445.0], [78.6, 1448.0], [78.7, 1449.0], [78.8, 1454.0], [78.9, 1454.0], [79.0, 1460.0], [79.1, 1463.0], [79.2, 1465.0], [79.3, 1465.0], [79.4, 1467.0], [79.5, 1473.0], [79.6, 1476.0], [79.7, 1476.0], [79.8, 1478.0], [79.9, 1482.0], [80.0, 1483.0], [80.1, 1483.0], [80.2, 1488.0], [80.3, 1488.0], [80.4, 1488.0], [80.5, 1491.0], [80.6, 1496.0], [80.7, 1496.0], [80.8, 1496.0], [80.9, 1499.0], [81.0, 1500.0], [81.1, 1504.0], [81.2, 1504.0], [81.3, 1509.0], [81.4, 1509.0], [81.5, 1509.0], [81.6, 1509.0], [81.7, 1510.0], [81.8, 1510.0], [81.9, 1510.0], [82.0, 1512.0], [82.1, 1518.0], [82.2, 1524.0], [82.3, 1524.0], [82.4, 1525.0], [82.5, 1526.0], [82.6, 1526.0], [82.7, 1526.0], [82.8, 1526.0], [82.9, 1529.0], [83.0, 1531.0], [83.1, 1531.0], [83.2, 1536.0], [83.3, 1537.0], [83.4, 1537.0], [83.5, 1542.0], [83.6, 1543.0], [83.7, 1545.0], [83.8, 1545.0], [83.9, 1550.0], [84.0, 1550.0], [84.1, 1553.0], [84.2, 1553.0], [84.3, 1562.0], [84.4, 1565.0], [84.5, 1570.0], [84.6, 1570.0], [84.7, 1570.0], [84.8, 1574.0], [84.9, 1575.0], [85.0, 1575.0], [85.1, 1582.0], [85.2, 1583.0], [85.3, 1583.0], [85.4, 1587.0], [85.5, 1588.0], [85.6, 1592.0], [85.7, 1592.0], [85.8, 1598.0], [85.9, 1599.0], [86.0, 1601.0], [86.1, 1601.0], [86.2, 1604.0], [86.3, 1605.0], [86.4, 1612.0], [86.5, 1612.0], [86.6, 1613.0], [86.7, 1630.0], [86.8, 1630.0], [86.9, 1630.0], [87.0, 1631.0], [87.1, 1631.0], [87.2, 1631.0], [87.3, 1639.0], [87.4, 1643.0], [87.5, 1644.0], [87.6, 1644.0], [87.7, 1647.0], [87.8, 1650.0], [87.9, 1653.0], [88.0, 1653.0], [88.1, 1656.0], [88.2, 1659.0], [88.3, 1659.0], [88.4, 1659.0], [88.5, 1663.0], [88.6, 1663.0], [88.7, 1663.0], [88.8, 1667.0], [88.9, 1668.0], [89.0, 1672.0], [89.1, 1672.0], [89.2, 1680.0], [89.3, 1680.0], [89.4, 1682.0], [89.5, 1682.0], [89.6, 1685.0], [89.7, 1687.0], [89.8, 1691.0], [89.9, 1691.0], [90.0, 1721.0], [90.1, 1728.0], [90.2, 1728.0], [90.3, 1730.0], [90.4, 1735.0], [90.5, 1741.0], [90.6, 1741.0], [90.7, 1742.0], [90.8, 1756.0], [90.9, 1762.0], [91.0, 1762.0], [91.1, 1763.0], [91.2, 1778.0], [91.3, 1784.0], [91.4, 1784.0], [91.5, 1787.0], [91.6, 1790.0], [91.7, 1790.0], [91.8, 1795.0], [91.9, 1795.0], [92.0, 1795.0], [92.1, 1795.0], [92.2, 1802.0], [92.3, 1805.0], [92.4, 1809.0], [92.5, 1809.0], [92.6, 1812.0], [92.7, 1832.0], [92.8, 1837.0], [92.9, 1837.0], [93.0, 1873.0], [93.1, 1876.0], [93.2, 1879.0], [93.3, 1879.0], [93.4, 1895.0], [93.5, 1903.0], [93.6, 1903.0], [93.7, 1938.0], [93.8, 1939.0], [93.9, 1950.0], [94.0, 1950.0], [94.1, 1960.0], [94.2, 1990.0], [94.3, 2005.0], [94.4, 2005.0], [94.5, 2009.0], [94.6, 2017.0], [94.7, 2032.0], [94.8, 2032.0], [94.9, 2058.0], [95.0, 2086.0], [95.1, 2086.0], [95.2, 2092.0], [95.3, 2116.0], [95.4, 2118.0], [95.5, 2118.0], [95.6, 2121.0], [95.7, 2145.0], [95.8, 2186.0], [95.9, 2186.0], [96.0, 2200.0], [96.1, 2225.0], [96.2, 2245.0], [96.3, 2245.0], [96.4, 2268.0], [96.5, 2300.0], [96.6, 2355.0], [96.7, 2355.0], [96.8, 2366.0], [96.9, 2398.0], [97.0, 2398.0], [97.1, 2434.0], [97.2, 2500.0], [97.3, 2642.0], [97.4, 2642.0], [97.5, 2666.0], [97.6, 2759.0], [97.7, 2768.0], [97.8, 2768.0], [97.9, 2789.0], [98.0, 2935.0], [98.1, 3060.0], [98.2, 3060.0], [98.3, 3097.0], [98.4, 3173.0], [98.5, 3173.0], [98.6, 3232.0], [98.7, 3296.0], [98.8, 3305.0], [98.9, 3305.0], [99.0, 3355.0], [99.1, 3445.0], [99.2, 3450.0], [99.3, 3450.0], [99.4, 3510.0], [99.5, 3564.0], [99.6, 3570.0], [99.7, 3570.0], [99.8, 3691.0], [99.9, 3714.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 63.0, "series": [{"data": [[600.0, 56.0], [700.0, 63.0], [800.0, 40.0], [900.0, 50.0], [1000.0, 49.0], [1100.0, 50.0], [1200.0, 43.0], [1300.0, 43.0], [1400.0, 45.0], [1500.0, 37.0], [1600.0, 29.0], [100.0, 3.0], [1700.0, 16.0], [1800.0, 10.0], [1900.0, 6.0], [2000.0, 7.0], [2100.0, 5.0], [2300.0, 4.0], [2200.0, 4.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 2.0], [2700.0, 3.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [3200.0, 2.0], [200.0, 21.0], [3300.0, 2.0], [3400.0, 2.0], [3500.0, 3.0], [3600.0, 1.0], [3700.0, 1.0], [300.0, 47.0], [400.0, 43.0], [500.0, 42.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 116.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 480.0, "series": [{"data": [[0.0, 116.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 480.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 139.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.872521246458923, "minX": 1.60283916E12, "maxY": 10.0, "series": [{"data": [[1.60283916E12, 10.0], [1.60283922E12, 9.872521246458923]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283922E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 365.0, "minX": 1.0, "maxY": 2768.0, "series": [{"data": [[8.0, 365.0], [4.0, 803.0], [2.0, 1332.0], [1.0, 1092.0], [9.0, 2768.0], [10.0, 1073.8292011019262], [5.0, 1778.0], [6.0, 773.0], [3.0, 1362.0], [7.0, 701.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1075.6108843537393]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2647.983333333333, "minX": 1.60283916E12, "maxY": 1014440.15, "series": [{"data": [[1.60283916E12, 1014440.15], [1.60283922E12, 821329.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60283916E12, 2875.05], [1.60283922E12, 2647.983333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283922E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1071.6317280453268, "minX": 1.60283916E12, "maxY": 1079.2879581151822, "series": [{"data": [[1.60283916E12, 1079.2879581151822], [1.60283922E12, 1071.6317280453268]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283922E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1070.5099150141646, "minX": 1.60283916E12, "maxY": 1078.0811518324624, "series": [{"data": [[1.60283916E12, 1078.0811518324624], [1.60283922E12, 1070.5099150141646]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283922E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03966005665722383, "minX": 1.60283916E12, "maxY": 0.27486910994764374, "series": [{"data": [[1.60283916E12, 0.27486910994764374], [1.60283922E12, 0.03966005665722383]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283922E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 191.0, "minX": 1.60283916E12, "maxY": 3714.0, "series": [{"data": [[1.60283916E12, 3714.0], [1.60283922E12, 3564.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60283916E12, 211.78799963474273], [1.60283922E12, 203.37199983119964]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60283916E12, 213.1668001461029], [1.60283922E12, 204.00920006752014]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60283916E12, 212.55399981737136], [1.60283922E12, 203.72599991559983]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60283916E12, 191.0], [1.60283922E12, 199.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60283916E12, 971.0], [1.60283922E12, 1044.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283922E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 559.5, "minX": 2.0, "maxY": 3042.5, "series": [{"data": [[2.0, 3042.5], [8.0, 1208.5], [9.0, 1114.0], [10.0, 923.0], [11.0, 1039.0], [12.0, 902.5], [13.0, 739.0], [14.0, 841.0], [4.0, 1212.0], [17.0, 688.0], [20.0, 559.5], [6.0, 1038.5], [7.0, 1280.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 559.0, "minX": 2.0, "maxY": 3040.0, "series": [{"data": [[2.0, 3040.0], [8.0, 1208.0], [9.0, 1113.0], [10.0, 922.5], [11.0, 1038.5], [12.0, 902.5], [13.0, 738.0], [14.0, 839.0], [4.0, 1211.5], [17.0, 688.0], [20.0, 559.0], [6.0, 1038.0], [7.0, 1278.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.716666666666667, "minX": 1.60283916E12, "maxY": 6.533333333333333, "series": [{"data": [[1.60283916E12, 6.533333333333333], [1.60283922E12, 5.716666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283922E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.883333333333334, "minX": 1.60283916E12, "maxY": 6.366666666666666, "series": [{"data": [[1.60283916E12, 6.366666666666666], [1.60283922E12, 5.883333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283922E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.883333333333334, "minX": 1.60283916E12, "maxY": 6.366666666666666, "series": [{"data": [[1.60283916E12, 6.366666666666666], [1.60283922E12, 5.883333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283922E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.883333333333334, "minX": 1.60283916E12, "maxY": 6.366666666666666, "series": [{"data": [[1.60283916E12, 6.366666666666666], [1.60283922E12, 5.883333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283922E12, "title": "Total Transactions Per Second"}},
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

