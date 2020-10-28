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
        data: {"result": {"minY": 199.0, "minX": 0.0, "maxY": 4355.0, "series": [{"data": [[0.0, 199.0], [0.1, 199.0], [0.2, 201.0], [0.3, 209.0], [0.4, 209.0], [0.5, 213.0], [0.6, 214.0], [0.7, 220.0], [0.8, 220.0], [0.9, 220.0], [1.0, 225.0], [1.1, 227.0], [1.2, 227.0], [1.3, 229.0], [1.4, 231.0], [1.5, 241.0], [1.6, 241.0], [1.7, 242.0], [1.8, 243.0], [1.9, 243.0], [2.0, 246.0], [2.1, 246.0], [2.2, 248.0], [2.3, 248.0], [2.4, 249.0], [2.5, 250.0], [2.6, 255.0], [2.7, 255.0], [2.8, 293.0], [2.9, 304.0], [3.0, 309.0], [3.1, 309.0], [3.2, 314.0], [3.3, 316.0], [3.4, 316.0], [3.5, 317.0], [3.6, 327.0], [3.7, 331.0], [3.8, 331.0], [3.9, 332.0], [4.0, 332.0], [4.1, 336.0], [4.2, 336.0], [4.3, 338.0], [4.4, 340.0], [4.5, 340.0], [4.6, 340.0], [4.7, 341.0], [4.8, 345.0], [4.9, 350.0], [5.0, 350.0], [5.1, 351.0], [5.2, 352.0], [5.3, 352.0], [5.4, 354.0], [5.5, 355.0], [5.6, 359.0], [5.7, 359.0], [5.8, 362.0], [5.9, 364.0], [6.0, 366.0], [6.1, 366.0], [6.2, 366.0], [6.3, 369.0], [6.4, 370.0], [6.5, 370.0], [6.6, 375.0], [6.7, 375.0], [6.8, 375.0], [6.9, 376.0], [7.0, 378.0], [7.1, 381.0], [7.2, 381.0], [7.3, 381.0], [7.4, 384.0], [7.5, 390.0], [7.6, 390.0], [7.7, 391.0], [7.8, 394.0], [7.9, 399.0], [8.0, 399.0], [8.1, 403.0], [8.2, 405.0], [8.3, 408.0], [8.4, 408.0], [8.5, 411.0], [8.6, 412.0], [8.7, 412.0], [8.8, 412.0], [8.9, 413.0], [9.0, 418.0], [9.1, 418.0], [9.2, 421.0], [9.3, 429.0], [9.4, 430.0], [9.5, 430.0], [9.6, 431.0], [9.7, 432.0], [9.8, 442.0], [9.9, 442.0], [10.0, 445.0], [10.1, 445.0], [10.2, 445.0], [10.3, 448.0], [10.4, 453.0], [10.5, 453.0], [10.6, 453.0], [10.7, 454.0], [10.8, 454.0], [10.9, 455.0], [11.0, 455.0], [11.1, 456.0], [11.2, 457.0], [11.3, 458.0], [11.4, 458.0], [11.5, 459.0], [11.6, 461.0], [11.7, 461.0], [11.8, 463.0], [11.9, 463.0], [12.0, 464.0], [12.1, 464.0], [12.2, 465.0], [12.3, 466.0], [12.4, 466.0], [12.5, 466.0], [12.6, 467.0], [12.7, 468.0], [12.8, 468.0], [12.9, 468.0], [13.0, 470.0], [13.1, 472.0], [13.2, 472.0], [13.3, 472.0], [13.4, 474.0], [13.5, 475.0], [13.6, 475.0], [13.7, 475.0], [13.8, 482.0], [13.9, 483.0], [14.0, 483.0], [14.1, 484.0], [14.2, 486.0], [14.3, 487.0], [14.4, 487.0], [14.5, 487.0], [14.6, 489.0], [14.7, 491.0], [14.8, 491.0], [14.9, 496.0], [15.0, 504.0], [15.1, 504.0], [15.2, 508.0], [15.3, 511.0], [15.4, 511.0], [15.5, 511.0], [15.6, 512.0], [15.7, 517.0], [15.8, 519.0], [15.9, 519.0], [16.0, 524.0], [16.1, 525.0], [16.2, 528.0], [16.3, 528.0], [16.4, 530.0], [16.5, 531.0], [16.6, 536.0], [16.7, 536.0], [16.8, 536.0], [16.9, 537.0], [17.0, 537.0], [17.1, 538.0], [17.2, 538.0], [17.3, 545.0], [17.4, 545.0], [17.5, 545.0], [17.6, 547.0], [17.7, 551.0], [17.8, 551.0], [17.9, 555.0], [18.0, 565.0], [18.1, 567.0], [18.2, 567.0], [18.3, 568.0], [18.4, 570.0], [18.5, 570.0], [18.6, 570.0], [18.7, 570.0], [18.8, 571.0], [18.9, 571.0], [19.0, 575.0], [19.1, 577.0], [19.2, 577.0], [19.3, 577.0], [19.4, 582.0], [19.5, 592.0], [19.6, 593.0], [19.7, 593.0], [19.8, 597.0], [19.9, 601.0], [20.0, 602.0], [20.1, 602.0], [20.2, 602.0], [20.3, 606.0], [20.4, 606.0], [20.5, 622.0], [20.6, 623.0], [20.7, 624.0], [20.8, 624.0], [20.9, 626.0], [21.0, 630.0], [21.1, 631.0], [21.2, 631.0], [21.3, 631.0], [21.4, 631.0], [21.5, 633.0], [21.6, 633.0], [21.7, 636.0], [21.8, 636.0], [21.9, 636.0], [22.0, 637.0], [22.1, 642.0], [22.2, 644.0], [22.3, 644.0], [22.4, 649.0], [22.5, 652.0], [22.6, 653.0], [22.7, 653.0], [22.8, 653.0], [22.9, 654.0], [23.0, 656.0], [23.1, 656.0], [23.2, 660.0], [23.3, 661.0], [23.4, 661.0], [23.5, 661.0], [23.6, 661.0], [23.7, 661.0], [23.8, 661.0], [23.9, 662.0], [24.0, 667.0], [24.1, 671.0], [24.2, 671.0], [24.3, 671.0], [24.4, 673.0], [24.5, 676.0], [24.6, 676.0], [24.7, 677.0], [24.8, 677.0], [24.9, 677.0], [25.0, 677.0], [25.1, 678.0], [25.2, 681.0], [25.3, 681.0], [25.4, 682.0], [25.5, 686.0], [25.6, 687.0], [25.7, 687.0], [25.8, 690.0], [25.9, 692.0], [26.0, 694.0], [26.1, 694.0], [26.2, 694.0], [26.3, 695.0], [26.4, 695.0], [26.5, 695.0], [26.6, 696.0], [26.7, 697.0], [26.8, 697.0], [26.9, 698.0], [27.0, 701.0], [27.1, 703.0], [27.2, 703.0], [27.3, 703.0], [27.4, 704.0], [27.5, 706.0], [27.6, 706.0], [27.7, 707.0], [27.8, 708.0], [27.9, 710.0], [28.0, 710.0], [28.1, 710.0], [28.2, 711.0], [28.3, 712.0], [28.4, 712.0], [28.5, 714.0], [28.6, 714.0], [28.7, 714.0], [28.8, 715.0], [28.9, 715.0], [29.0, 718.0], [29.1, 718.0], [29.2, 718.0], [29.3, 720.0], [29.4, 721.0], [29.5, 721.0], [29.6, 722.0], [29.7, 722.0], [29.8, 723.0], [29.9, 723.0], [30.0, 723.0], [30.1, 723.0], [30.2, 723.0], [30.3, 725.0], [30.4, 725.0], [30.5, 725.0], [30.6, 725.0], [30.7, 727.0], [30.8, 728.0], [30.9, 729.0], [31.0, 729.0], [31.1, 730.0], [31.2, 730.0], [31.3, 732.0], [31.4, 732.0], [31.5, 733.0], [31.6, 733.0], [31.7, 733.0], [31.8, 736.0], [31.9, 736.0], [32.0, 737.0], [32.1, 737.0], [32.2, 737.0], [32.3, 739.0], [32.4, 740.0], [32.5, 740.0], [32.6, 740.0], [32.7, 740.0], [32.8, 742.0], [32.9, 742.0], [33.0, 743.0], [33.1, 747.0], [33.2, 747.0], [33.3, 747.0], [33.4, 749.0], [33.5, 750.0], [33.6, 750.0], [33.7, 751.0], [33.8, 751.0], [33.9, 751.0], [34.0, 751.0], [34.1, 752.0], [34.2, 753.0], [34.3, 754.0], [34.4, 754.0], [34.5, 756.0], [34.6, 758.0], [34.7, 760.0], [34.8, 760.0], [34.9, 763.0], [35.0, 763.0], [35.1, 763.0], [35.2, 764.0], [35.3, 765.0], [35.4, 767.0], [35.5, 767.0], [35.6, 769.0], [35.7, 769.0], [35.8, 775.0], [35.9, 775.0], [36.0, 779.0], [36.1, 780.0], [36.2, 782.0], [36.3, 782.0], [36.4, 784.0], [36.5, 784.0], [36.6, 784.0], [36.7, 784.0], [36.8, 789.0], [36.9, 790.0], [37.0, 790.0], [37.1, 791.0], [37.2, 792.0], [37.3, 793.0], [37.4, 793.0], [37.5, 796.0], [37.6, 801.0], [37.7, 802.0], [37.8, 802.0], [37.9, 807.0], [38.0, 808.0], [38.1, 810.0], [38.2, 810.0], [38.3, 811.0], [38.4, 814.0], [38.5, 814.0], [38.6, 821.0], [38.7, 821.0], [38.8, 824.0], [38.9, 824.0], [39.0, 825.0], [39.1, 826.0], [39.2, 831.0], [39.3, 831.0], [39.4, 832.0], [39.5, 833.0], [39.6, 842.0], [39.7, 842.0], [39.8, 847.0], [39.9, 851.0], [40.0, 852.0], [40.1, 852.0], [40.2, 855.0], [40.3, 855.0], [40.4, 855.0], [40.5, 861.0], [40.6, 863.0], [40.7, 865.0], [40.8, 865.0], [40.9, 866.0], [41.0, 867.0], [41.1, 868.0], [41.2, 868.0], [41.3, 872.0], [41.4, 877.0], [41.5, 879.0], [41.6, 879.0], [41.7, 881.0], [41.8, 883.0], [41.9, 883.0], [42.0, 884.0], [42.1, 887.0], [42.2, 888.0], [42.3, 888.0], [42.4, 888.0], [42.5, 890.0], [42.6, 891.0], [42.7, 891.0], [42.8, 891.0], [42.9, 894.0], [43.0, 896.0], [43.1, 896.0], [43.2, 898.0], [43.3, 898.0], [43.4, 898.0], [43.5, 903.0], [43.6, 904.0], [43.7, 906.0], [43.8, 906.0], [43.9, 909.0], [44.0, 911.0], [44.1, 911.0], [44.2, 911.0], [44.3, 915.0], [44.4, 916.0], [44.5, 919.0], [44.6, 919.0], [44.7, 920.0], [44.8, 925.0], [44.9, 926.0], [45.0, 926.0], [45.1, 927.0], [45.2, 929.0], [45.3, 929.0], [45.4, 931.0], [45.5, 934.0], [45.6, 936.0], [45.7, 936.0], [45.8, 936.0], [45.9, 937.0], [46.0, 939.0], [46.1, 939.0], [46.2, 939.0], [46.3, 940.0], [46.4, 941.0], [46.5, 941.0], [46.6, 942.0], [46.7, 942.0], [46.8, 942.0], [46.9, 943.0], [47.0, 944.0], [47.1, 948.0], [47.2, 948.0], [47.3, 948.0], [47.4, 951.0], [47.5, 952.0], [47.6, 952.0], [47.7, 954.0], [47.8, 954.0], [47.9, 955.0], [48.0, 955.0], [48.1, 964.0], [48.2, 965.0], [48.3, 966.0], [48.4, 966.0], [48.5, 967.0], [48.6, 968.0], [48.7, 968.0], [48.8, 969.0], [48.9, 970.0], [49.0, 973.0], [49.1, 973.0], [49.2, 973.0], [49.3, 974.0], [49.4, 974.0], [49.5, 974.0], [49.6, 976.0], [49.7, 977.0], [49.8, 981.0], [49.9, 981.0], [50.0, 981.0], [50.1, 982.0], [50.2, 982.0], [50.3, 982.0], [50.4, 984.0], [50.5, 987.0], [50.6, 987.0], [50.7, 988.0], [50.8, 988.0], [50.9, 988.0], [51.0, 988.0], [51.1, 991.0], [51.2, 991.0], [51.3, 995.0], [51.4, 995.0], [51.5, 998.0], [51.6, 1000.0], [51.7, 1000.0], [51.8, 1000.0], [51.9, 1004.0], [52.0, 1005.0], [52.1, 1005.0], [52.2, 1005.0], [52.3, 1005.0], [52.4, 1013.0], [52.5, 1013.0], [52.6, 1014.0], [52.7, 1014.0], [52.8, 1019.0], [52.9, 1019.0], [53.0, 1021.0], [53.1, 1021.0], [53.2, 1021.0], [53.3, 1021.0], [53.4, 1022.0], [53.5, 1025.0], [53.6, 1025.0], [53.7, 1026.0], [53.8, 1031.0], [53.9, 1033.0], [54.0, 1033.0], [54.1, 1035.0], [54.2, 1038.0], [54.3, 1038.0], [54.4, 1038.0], [54.5, 1044.0], [54.6, 1046.0], [54.7, 1046.0], [54.8, 1046.0], [54.9, 1051.0], [55.0, 1051.0], [55.1, 1051.0], [55.2, 1057.0], [55.3, 1060.0], [55.4, 1063.0], [55.5, 1063.0], [55.6, 1064.0], [55.7, 1068.0], [55.8, 1068.0], [55.9, 1068.0], [56.0, 1069.0], [56.1, 1070.0], [56.2, 1070.0], [56.3, 1070.0], [56.4, 1071.0], [56.5, 1074.0], [56.6, 1074.0], [56.7, 1074.0], [56.8, 1077.0], [56.9, 1077.0], [57.0, 1077.0], [57.1, 1078.0], [57.2, 1079.0], [57.3, 1079.0], [57.4, 1079.0], [57.5, 1081.0], [57.6, 1081.0], [57.7, 1083.0], [57.8, 1083.0], [57.9, 1084.0], [58.0, 1084.0], [58.1, 1085.0], [58.2, 1085.0], [58.3, 1086.0], [58.4, 1087.0], [58.5, 1087.0], [58.6, 1089.0], [58.7, 1090.0], [58.8, 1093.0], [58.9, 1093.0], [59.0, 1094.0], [59.1, 1095.0], [59.2, 1095.0], [59.3, 1095.0], [59.4, 1096.0], [59.5, 1097.0], [59.6, 1098.0], [59.7, 1098.0], [59.8, 1099.0], [59.9, 1101.0], [60.0, 1102.0], [60.1, 1102.0], [60.2, 1102.0], [60.3, 1103.0], [60.4, 1103.0], [60.5, 1103.0], [60.6, 1103.0], [60.7, 1115.0], [60.8, 1115.0], [60.9, 1118.0], [61.0, 1119.0], [61.1, 1119.0], [61.2, 1119.0], [61.3, 1121.0], [61.4, 1122.0], [61.5, 1124.0], [61.6, 1124.0], [61.7, 1124.0], [61.8, 1125.0], [61.9, 1125.0], [62.0, 1128.0], [62.1, 1130.0], [62.2, 1130.0], [62.3, 1130.0], [62.4, 1131.0], [62.5, 1139.0], [62.6, 1141.0], [62.7, 1141.0], [62.8, 1142.0], [62.9, 1144.0], [63.0, 1145.0], [63.1, 1145.0], [63.2, 1145.0], [63.3, 1147.0], [63.4, 1147.0], [63.5, 1148.0], [63.6, 1148.0], [63.7, 1148.0], [63.8, 1148.0], [63.9, 1150.0], [64.0, 1158.0], [64.1, 1162.0], [64.2, 1162.0], [64.3, 1167.0], [64.4, 1167.0], [64.5, 1169.0], [64.6, 1169.0], [64.7, 1169.0], [64.8, 1170.0], [64.9, 1173.0], [65.0, 1173.0], [65.1, 1174.0], [65.2, 1175.0], [65.3, 1175.0], [65.4, 1176.0], [65.5, 1178.0], [65.6, 1179.0], [65.7, 1179.0], [65.8, 1181.0], [65.9, 1183.0], [66.0, 1183.0], [66.1, 1183.0], [66.2, 1187.0], [66.3, 1187.0], [66.4, 1192.0], [66.5, 1192.0], [66.6, 1193.0], [66.7, 1194.0], [66.8, 1194.0], [66.9, 1196.0], [67.0, 1198.0], [67.1, 1203.0], [67.2, 1203.0], [67.3, 1203.0], [67.4, 1205.0], [67.5, 1207.0], [67.6, 1207.0], [67.7, 1208.0], [67.8, 1215.0], [67.9, 1219.0], [68.0, 1219.0], [68.1, 1225.0], [68.2, 1228.0], [68.3, 1234.0], [68.4, 1234.0], [68.5, 1234.0], [68.6, 1235.0], [68.7, 1235.0], [68.8, 1236.0], [68.9, 1237.0], [69.0, 1240.0], [69.1, 1240.0], [69.2, 1247.0], [69.3, 1251.0], [69.4, 1255.0], [69.5, 1255.0], [69.6, 1260.0], [69.7, 1262.0], [69.8, 1262.0], [69.9, 1262.0], [70.0, 1263.0], [70.1, 1263.0], [70.2, 1263.0], [70.3, 1264.0], [70.4, 1272.0], [70.5, 1276.0], [70.6, 1276.0], [70.7, 1279.0], [70.8, 1287.0], [70.9, 1288.0], [71.0, 1288.0], [71.1, 1290.0], [71.2, 1293.0], [71.3, 1295.0], [71.4, 1295.0], [71.5, 1296.0], [71.6, 1297.0], [71.7, 1297.0], [71.8, 1302.0], [71.9, 1303.0], [72.0, 1304.0], [72.1, 1304.0], [72.2, 1305.0], [72.3, 1308.0], [72.4, 1311.0], [72.5, 1311.0], [72.6, 1315.0], [72.7, 1318.0], [72.8, 1319.0], [72.9, 1319.0], [73.0, 1320.0], [73.1, 1321.0], [73.2, 1322.0], [73.3, 1322.0], [73.4, 1322.0], [73.5, 1322.0], [73.6, 1322.0], [73.7, 1323.0], [73.8, 1324.0], [73.9, 1326.0], [74.0, 1326.0], [74.1, 1328.0], [74.2, 1332.0], [74.3, 1332.0], [74.4, 1332.0], [74.5, 1335.0], [74.6, 1336.0], [74.7, 1344.0], [74.8, 1344.0], [74.9, 1345.0], [75.0, 1352.0], [75.1, 1352.0], [75.2, 1357.0], [75.3, 1358.0], [75.4, 1359.0], [75.5, 1359.0], [75.6, 1361.0], [75.7, 1366.0], [75.8, 1368.0], [75.9, 1368.0], [76.0, 1373.0], [76.1, 1373.0], [76.2, 1374.0], [76.3, 1374.0], [76.4, 1378.0], [76.5, 1378.0], [76.6, 1382.0], [76.7, 1382.0], [76.8, 1384.0], [76.9, 1384.0], [77.0, 1384.0], [77.1, 1388.0], [77.2, 1391.0], [77.3, 1391.0], [77.4, 1391.0], [77.5, 1396.0], [77.6, 1396.0], [77.7, 1399.0], [77.8, 1399.0], [77.9, 1405.0], [78.0, 1406.0], [78.1, 1406.0], [78.2, 1406.0], [78.3, 1409.0], [78.4, 1412.0], [78.5, 1412.0], [78.6, 1414.0], [78.7, 1417.0], [78.8, 1421.0], [78.9, 1421.0], [79.0, 1421.0], [79.1, 1427.0], [79.2, 1430.0], [79.3, 1430.0], [79.4, 1432.0], [79.5, 1434.0], [79.6, 1436.0], [79.7, 1436.0], [79.8, 1438.0], [79.9, 1439.0], [80.0, 1443.0], [80.1, 1443.0], [80.2, 1445.0], [80.3, 1448.0], [80.4, 1448.0], [80.5, 1448.0], [80.6, 1454.0], [80.7, 1456.0], [80.8, 1456.0], [80.9, 1472.0], [81.0, 1476.0], [81.1, 1482.0], [81.2, 1482.0], [81.3, 1484.0], [81.4, 1486.0], [81.5, 1488.0], [81.6, 1488.0], [81.7, 1489.0], [81.8, 1490.0], [81.9, 1490.0], [82.0, 1490.0], [82.1, 1491.0], [82.2, 1499.0], [82.3, 1499.0], [82.4, 1503.0], [82.5, 1504.0], [82.6, 1505.0], [82.7, 1505.0], [82.8, 1507.0], [82.9, 1508.0], [83.0, 1508.0], [83.1, 1508.0], [83.2, 1509.0], [83.3, 1513.0], [83.4, 1513.0], [83.5, 1515.0], [83.6, 1517.0], [83.7, 1520.0], [83.8, 1520.0], [83.9, 1522.0], [84.0, 1525.0], [84.1, 1529.0], [84.2, 1529.0], [84.3, 1537.0], [84.4, 1540.0], [84.5, 1543.0], [84.6, 1543.0], [84.7, 1551.0], [84.8, 1554.0], [84.9, 1559.0], [85.0, 1559.0], [85.1, 1565.0], [85.2, 1570.0], [85.3, 1570.0], [85.4, 1583.0], [85.5, 1591.0], [85.6, 1594.0], [85.7, 1594.0], [85.8, 1594.0], [85.9, 1597.0], [86.0, 1605.0], [86.1, 1605.0], [86.2, 1605.0], [86.3, 1607.0], [86.4, 1607.0], [86.5, 1607.0], [86.6, 1610.0], [86.7, 1616.0], [86.8, 1616.0], [86.9, 1622.0], [87.0, 1627.0], [87.1, 1631.0], [87.2, 1631.0], [87.3, 1633.0], [87.4, 1635.0], [87.5, 1649.0], [87.6, 1649.0], [87.7, 1651.0], [87.8, 1659.0], [87.9, 1659.0], [88.0, 1659.0], [88.1, 1660.0], [88.2, 1660.0], [88.3, 1664.0], [88.4, 1664.0], [88.5, 1666.0], [88.6, 1666.0], [88.7, 1666.0], [88.8, 1670.0], [88.9, 1674.0], [89.0, 1676.0], [89.1, 1676.0], [89.2, 1678.0], [89.3, 1696.0], [89.4, 1697.0], [89.5, 1697.0], [89.6, 1701.0], [89.7, 1701.0], [89.8, 1702.0], [89.9, 1702.0], [90.0, 1707.0], [90.1, 1717.0], [90.2, 1717.0], [90.3, 1717.0], [90.4, 1719.0], [90.5, 1721.0], [90.6, 1721.0], [90.7, 1726.0], [90.8, 1728.0], [90.9, 1729.0], [91.0, 1729.0], [91.1, 1730.0], [91.2, 1744.0], [91.3, 1748.0], [91.4, 1748.0], [91.5, 1762.0], [91.6, 1777.0], [91.7, 1777.0], [91.8, 1784.0], [91.9, 1796.0], [92.0, 1798.0], [92.1, 1798.0], [92.2, 1811.0], [92.3, 1812.0], [92.4, 1818.0], [92.5, 1818.0], [92.6, 1820.0], [92.7, 1823.0], [92.8, 1833.0], [92.9, 1833.0], [93.0, 1851.0], [93.1, 1854.0], [93.2, 1858.0], [93.3, 1858.0], [93.4, 1875.0], [93.5, 1895.0], [93.6, 1895.0], [93.7, 1896.0], [93.8, 1896.0], [93.9, 1899.0], [94.0, 1899.0], [94.1, 1904.0], [94.2, 1917.0], [94.3, 1919.0], [94.4, 1919.0], [94.5, 1937.0], [94.6, 1939.0], [94.7, 1955.0], [94.8, 1955.0], [94.9, 1965.0], [95.0, 1973.0], [95.1, 1973.0], [95.2, 1990.0], [95.3, 2066.0], [95.4, 2073.0], [95.5, 2073.0], [95.6, 2075.0], [95.7, 2080.0], [95.8, 2097.0], [95.9, 2097.0], [96.0, 2098.0], [96.1, 2109.0], [96.2, 2109.0], [96.3, 2109.0], [96.4, 2172.0], [96.5, 2173.0], [96.6, 2193.0], [96.7, 2193.0], [96.8, 2210.0], [96.9, 2214.0], [97.0, 2214.0], [97.1, 2268.0], [97.2, 2276.0], [97.3, 2405.0], [97.4, 2405.0], [97.5, 2477.0], [97.6, 2501.0], [97.7, 2555.0], [97.8, 2555.0], [97.9, 2562.0], [98.0, 2805.0], [98.1, 2903.0], [98.2, 2903.0], [98.3, 2959.0], [98.4, 2984.0], [98.5, 2984.0], [98.6, 2989.0], [98.7, 3200.0], [98.8, 3208.0], [98.9, 3208.0], [99.0, 3284.0], [99.1, 3353.0], [99.2, 3367.0], [99.3, 3367.0], [99.4, 3499.0], [99.5, 3505.0], [99.6, 3802.0], [99.7, 3802.0], [99.8, 4020.0], [99.9, 4355.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 78.0, "series": [{"data": [[600.0, 52.0], [700.0, 78.0], [800.0, 43.0], [900.0, 60.0], [1000.0, 61.0], [1100.0, 53.0], [1200.0, 34.0], [1300.0, 45.0], [1400.0, 33.0], [1500.0, 27.0], [1600.0, 26.0], [100.0, 1.0], [1700.0, 19.0], [1800.0, 14.0], [1900.0, 9.0], [2000.0, 6.0], [2100.0, 5.0], [2200.0, 4.0], [2400.0, 2.0], [2500.0, 3.0], [2800.0, 1.0], [2900.0, 4.0], [3200.0, 3.0], [3300.0, 2.0], [200.0, 20.0], [3400.0, 1.0], [3500.0, 1.0], [3800.0, 1.0], [4000.0, 1.0], [4300.0, 1.0], [300.0, 38.0], [400.0, 51.0], [500.0, 36.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 110.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 495.0, "series": [{"data": [[0.0, 110.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 495.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 130.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.904347826086958, "minX": 1.60386966E12, "maxY": 10.0, "series": [{"data": [[1.60386966E12, 10.0], [1.60386972E12, 9.904347826086958]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386972E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 332.0, "minX": 1.0, "maxY": 2984.0, "series": [{"data": [[8.0, 332.0], [4.0, 1550.0], [2.0, 1170.0], [1.0, 1077.0], [9.0, 754.0], [10.0, 1058.4779614325078], [5.0, 728.0], [6.0, 733.0], [7.0, 2984.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 1060.3170068027216]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2080.133333333333, "minX": 1.60386966E12, "maxY": 1078600.0, "series": [{"data": [[1.60386966E12, 757242.1333333333], [1.60386972E12, 1078600.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60386966E12, 2080.133333333333], [1.60386972E12, 3442.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386972E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 990.1413043478262, "minX": 1.60386966E12, "maxY": 1177.7018181818178, "series": [{"data": [[1.60386966E12, 1177.7018181818178], [1.60386972E12, 990.1413043478262]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386972E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 988.9521739130442, "minX": 1.60386966E12, "maxY": 1176.2836363636354, "series": [{"data": [[1.60386966E12, 1176.2836363636354], [1.60386972E12, 988.9521739130442]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386972E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.023913043478260867, "minX": 1.60386966E12, "maxY": 0.2872727272727276, "series": [{"data": [[1.60386966E12, 0.2872727272727276], [1.60386972E12, 0.023913043478260867]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386972E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 199.0, "minX": 1.60386966E12, "maxY": 4355.0, "series": [{"data": [[1.60386966E12, 4020.0], [1.60386972E12, 4355.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60386966E12, 216.90399960517883], [1.60386972E12, 220.74499945044516]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60386966E12, 218.39440015792846], [1.60386972E12, 222.81950021982192]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60386966E12, 217.73199980258943], [1.60386972E12, 221.8974997252226]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60386966E12, 209.0], [1.60386972E12, 199.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60386966E12, 1074.0], [1.60386972E12, 942.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386972E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 597.0, "minX": 2.0, "maxY": 3006.5, "series": [{"data": [[2.0, 3006.5], [8.0, 1157.0], [16.0, 749.5], [9.0, 1100.0], [10.0, 1038.5], [11.0, 758.5], [12.0, 920.0], [6.0, 1195.0], [13.0, 749.0], [7.0, 1289.0], [14.0, 700.5], [15.0, 597.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 596.0, "minX": 2.0, "maxY": 3004.0, "series": [{"data": [[2.0, 3004.0], [8.0, 1156.0], [16.0, 748.5], [9.0, 1098.5], [10.0, 1038.0], [11.0, 757.5], [12.0, 919.5], [6.0, 1193.5], [13.0, 749.0], [7.0, 1287.5], [14.0, 700.0], [15.0, 596.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.75, "minX": 1.60386966E12, "maxY": 7.5, "series": [{"data": [[1.60386966E12, 4.75], [1.60386972E12, 7.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386972E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.583333333333333, "minX": 1.60386966E12, "maxY": 7.666666666666667, "series": [{"data": [[1.60386966E12, 4.583333333333333], [1.60386972E12, 7.666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386972E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.583333333333333, "minX": 1.60386966E12, "maxY": 7.666666666666667, "series": [{"data": [[1.60386966E12, 4.583333333333333], [1.60386972E12, 7.666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386972E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.583333333333333, "minX": 1.60386966E12, "maxY": 7.666666666666667, "series": [{"data": [[1.60386966E12, 4.583333333333333], [1.60386972E12, 7.666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386972E12, "title": "Total Transactions Per Second"}},
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

