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
        data: {"result": {"minY": 189.0, "minX": 0.0, "maxY": 3730.0, "series": [{"data": [[0.0, 189.0], [0.1, 189.0], [0.2, 200.0], [0.3, 202.0], [0.4, 202.0], [0.5, 202.0], [0.6, 211.0], [0.7, 212.0], [0.8, 212.0], [0.9, 217.0], [1.0, 225.0], [1.1, 227.0], [1.2, 227.0], [1.3, 240.0], [1.4, 302.0], [1.5, 307.0], [1.6, 307.0], [1.7, 310.0], [1.8, 313.0], [1.9, 313.0], [2.0, 314.0], [2.1, 314.0], [2.2, 326.0], [2.3, 326.0], [2.4, 326.0], [2.5, 331.0], [2.6, 337.0], [2.7, 337.0], [2.8, 340.0], [2.9, 342.0], [3.0, 344.0], [3.1, 344.0], [3.2, 344.0], [3.3, 346.0], [3.4, 346.0], [3.5, 346.0], [3.6, 347.0], [3.7, 348.0], [3.8, 348.0], [3.9, 351.0], [4.0, 353.0], [4.1, 354.0], [4.2, 354.0], [4.3, 356.0], [4.4, 359.0], [4.5, 360.0], [4.6, 360.0], [4.7, 361.0], [4.8, 365.0], [4.9, 368.0], [5.0, 368.0], [5.1, 371.0], [5.2, 375.0], [5.3, 375.0], [5.4, 375.0], [5.5, 377.0], [5.6, 378.0], [5.7, 378.0], [5.8, 380.0], [5.9, 380.0], [6.0, 388.0], [6.1, 388.0], [6.2, 390.0], [6.3, 390.0], [6.4, 395.0], [6.5, 395.0], [6.6, 397.0], [6.7, 405.0], [6.8, 405.0], [6.9, 406.0], [7.0, 413.0], [7.1, 414.0], [7.2, 414.0], [7.3, 414.0], [7.4, 417.0], [7.5, 421.0], [7.6, 421.0], [7.7, 424.0], [7.8, 427.0], [7.9, 432.0], [8.0, 432.0], [8.1, 432.0], [8.2, 432.0], [8.3, 437.0], [8.4, 437.0], [8.5, 439.0], [8.6, 439.0], [8.7, 439.0], [8.8, 440.0], [8.9, 443.0], [9.0, 448.0], [9.1, 448.0], [9.2, 450.0], [9.3, 453.0], [9.4, 454.0], [9.5, 454.0], [9.6, 454.0], [9.7, 454.0], [9.8, 455.0], [9.9, 455.0], [10.0, 461.0], [10.1, 468.0], [10.2, 468.0], [10.3, 471.0], [10.4, 473.0], [10.5, 475.0], [10.6, 475.0], [10.7, 477.0], [10.8, 479.0], [10.9, 479.0], [11.0, 479.0], [11.1, 480.0], [11.2, 481.0], [11.3, 484.0], [11.4, 484.0], [11.5, 491.0], [11.6, 512.0], [11.7, 512.0], [11.8, 513.0], [11.9, 526.0], [12.0, 531.0], [12.1, 531.0], [12.2, 531.0], [12.3, 534.0], [12.4, 536.0], [12.5, 536.0], [12.6, 536.0], [12.7, 538.0], [12.8, 542.0], [12.9, 542.0], [13.0, 542.0], [13.1, 546.0], [13.2, 547.0], [13.3, 547.0], [13.4, 547.0], [13.5, 551.0], [13.6, 551.0], [13.7, 552.0], [13.8, 553.0], [13.9, 558.0], [14.0, 558.0], [14.1, 558.0], [14.2, 560.0], [14.3, 562.0], [14.4, 562.0], [14.5, 564.0], [14.6, 565.0], [14.7, 566.0], [14.8, 566.0], [14.9, 568.0], [15.0, 570.0], [15.1, 570.0], [15.2, 571.0], [15.3, 572.0], [15.4, 572.0], [15.5, 572.0], [15.6, 577.0], [15.7, 577.0], [15.8, 577.0], [15.9, 577.0], [16.0, 578.0], [16.1, 580.0], [16.2, 580.0], [16.3, 580.0], [16.4, 581.0], [16.5, 582.0], [16.6, 585.0], [16.7, 585.0], [16.8, 587.0], [16.9, 595.0], [17.0, 595.0], [17.1, 595.0], [17.2, 599.0], [17.3, 600.0], [17.4, 600.0], [17.5, 603.0], [17.6, 605.0], [17.7, 606.0], [17.8, 606.0], [17.9, 609.0], [18.0, 609.0], [18.1, 610.0], [18.2, 610.0], [18.3, 613.0], [18.4, 614.0], [18.5, 614.0], [18.6, 616.0], [18.7, 617.0], [18.8, 618.0], [18.9, 618.0], [19.0, 618.0], [19.1, 619.0], [19.2, 619.0], [19.3, 619.0], [19.4, 619.0], [19.5, 626.0], [19.6, 626.0], [19.7, 626.0], [19.8, 630.0], [19.9, 631.0], [20.0, 632.0], [20.1, 632.0], [20.2, 633.0], [20.3, 634.0], [20.4, 634.0], [20.5, 635.0], [20.6, 636.0], [20.7, 637.0], [20.8, 637.0], [20.9, 637.0], [21.0, 641.0], [21.1, 642.0], [21.2, 642.0], [21.3, 642.0], [21.4, 642.0], [21.5, 643.0], [21.6, 643.0], [21.7, 644.0], [21.8, 645.0], [21.9, 645.0], [22.0, 645.0], [22.1, 647.0], [22.2, 647.0], [22.3, 647.0], [22.4, 649.0], [22.5, 649.0], [22.6, 651.0], [22.7, 651.0], [22.8, 651.0], [22.9, 652.0], [23.0, 653.0], [23.1, 653.0], [23.2, 653.0], [23.3, 653.0], [23.4, 653.0], [23.5, 654.0], [23.6, 655.0], [23.7, 655.0], [23.8, 655.0], [23.9, 656.0], [24.0, 656.0], [24.1, 657.0], [24.2, 657.0], [24.3, 657.0], [24.4, 661.0], [24.5, 663.0], [24.6, 663.0], [24.7, 663.0], [24.8, 666.0], [24.9, 667.0], [25.0, 667.0], [25.1, 669.0], [25.2, 670.0], [25.3, 670.0], [25.4, 670.0], [25.5, 671.0], [25.6, 672.0], [25.7, 672.0], [25.8, 678.0], [25.9, 680.0], [26.0, 681.0], [26.1, 681.0], [26.2, 681.0], [26.3, 686.0], [26.4, 686.0], [26.5, 686.0], [26.6, 687.0], [26.7, 688.0], [26.8, 688.0], [26.9, 690.0], [27.0, 690.0], [27.1, 690.0], [27.2, 690.0], [27.3, 692.0], [27.4, 692.0], [27.5, 692.0], [27.6, 692.0], [27.7, 695.0], [27.8, 696.0], [27.9, 698.0], [28.0, 698.0], [28.1, 699.0], [28.2, 700.0], [28.3, 700.0], [28.4, 700.0], [28.5, 701.0], [28.6, 701.0], [28.7, 701.0], [28.8, 701.0], [28.9, 703.0], [29.0, 703.0], [29.1, 703.0], [29.2, 705.0], [29.3, 706.0], [29.4, 709.0], [29.5, 709.0], [29.6, 709.0], [29.7, 709.0], [29.8, 710.0], [29.9, 710.0], [30.0, 710.0], [30.1, 712.0], [30.2, 712.0], [30.3, 713.0], [30.4, 713.0], [30.5, 713.0], [30.6, 713.0], [30.7, 714.0], [30.8, 715.0], [30.9, 715.0], [31.0, 715.0], [31.1, 718.0], [31.2, 718.0], [31.3, 718.0], [31.4, 718.0], [31.5, 718.0], [31.6, 720.0], [31.7, 720.0], [31.8, 720.0], [31.9, 722.0], [32.0, 724.0], [32.1, 724.0], [32.2, 728.0], [32.3, 729.0], [32.4, 729.0], [32.5, 729.0], [32.6, 729.0], [32.7, 730.0], [32.8, 731.0], [32.9, 731.0], [33.0, 731.0], [33.1, 731.0], [33.2, 732.0], [33.3, 732.0], [33.4, 732.0], [33.5, 737.0], [33.6, 737.0], [33.7, 737.0], [33.8, 738.0], [33.9, 740.0], [34.0, 740.0], [34.1, 742.0], [34.2, 742.0], [34.3, 747.0], [34.4, 747.0], [34.5, 747.0], [34.6, 748.0], [34.7, 749.0], [34.8, 749.0], [34.9, 751.0], [35.0, 751.0], [35.1, 751.0], [35.2, 751.0], [35.3, 751.0], [35.4, 760.0], [35.5, 760.0], [35.6, 762.0], [35.7, 763.0], [35.8, 771.0], [35.9, 771.0], [36.0, 772.0], [36.1, 772.0], [36.2, 772.0], [36.3, 772.0], [36.4, 776.0], [36.5, 777.0], [36.6, 777.0], [36.7, 777.0], [36.8, 782.0], [36.9, 785.0], [37.0, 785.0], [37.1, 785.0], [37.2, 795.0], [37.3, 796.0], [37.4, 796.0], [37.5, 797.0], [37.6, 799.0], [37.7, 801.0], [37.8, 801.0], [37.9, 801.0], [38.0, 803.0], [38.1, 809.0], [38.2, 809.0], [38.3, 811.0], [38.4, 813.0], [38.5, 813.0], [38.6, 819.0], [38.7, 819.0], [38.8, 822.0], [38.9, 822.0], [39.0, 823.0], [39.1, 833.0], [39.2, 838.0], [39.3, 838.0], [39.4, 840.0], [39.5, 846.0], [39.6, 848.0], [39.7, 848.0], [39.8, 850.0], [39.9, 851.0], [40.0, 854.0], [40.1, 854.0], [40.2, 858.0], [40.3, 863.0], [40.4, 863.0], [40.5, 865.0], [40.6, 866.0], [40.7, 866.0], [40.8, 866.0], [40.9, 868.0], [41.0, 871.0], [41.1, 872.0], [41.2, 872.0], [41.3, 872.0], [41.4, 879.0], [41.5, 880.0], [41.6, 880.0], [41.7, 880.0], [41.8, 884.0], [41.9, 884.0], [42.0, 884.0], [42.1, 885.0], [42.2, 886.0], [42.3, 886.0], [42.4, 887.0], [42.5, 890.0], [42.6, 891.0], [42.7, 891.0], [42.8, 892.0], [42.9, 893.0], [43.0, 894.0], [43.1, 894.0], [43.2, 894.0], [43.3, 895.0], [43.4, 895.0], [43.5, 897.0], [43.6, 897.0], [43.7, 898.0], [43.8, 898.0], [43.9, 902.0], [44.0, 903.0], [44.1, 903.0], [44.2, 903.0], [44.3, 911.0], [44.4, 911.0], [44.5, 916.0], [44.6, 916.0], [44.7, 916.0], [44.8, 920.0], [44.9, 924.0], [45.0, 924.0], [45.1, 925.0], [45.2, 925.0], [45.3, 925.0], [45.4, 927.0], [45.5, 930.0], [45.6, 931.0], [45.7, 931.0], [45.8, 933.0], [45.9, 934.0], [46.0, 937.0], [46.1, 937.0], [46.2, 937.0], [46.3, 943.0], [46.4, 943.0], [46.5, 943.0], [46.6, 946.0], [46.7, 947.0], [46.8, 947.0], [46.9, 948.0], [47.0, 948.0], [47.1, 955.0], [47.2, 955.0], [47.3, 956.0], [47.4, 958.0], [47.5, 960.0], [47.6, 960.0], [47.7, 961.0], [47.8, 964.0], [47.9, 965.0], [48.0, 965.0], [48.1, 965.0], [48.2, 967.0], [48.3, 971.0], [48.4, 971.0], [48.5, 973.0], [48.6, 974.0], [48.7, 974.0], [48.8, 975.0], [48.9, 975.0], [49.0, 988.0], [49.1, 988.0], [49.2, 988.0], [49.3, 994.0], [49.4, 995.0], [49.5, 995.0], [49.6, 1000.0], [49.7, 1001.0], [49.8, 1002.0], [49.9, 1002.0], [50.0, 1004.0], [50.1, 1012.0], [50.2, 1012.0], [50.3, 1014.0], [50.4, 1014.0], [50.5, 1015.0], [50.6, 1015.0], [50.7, 1021.0], [50.8, 1022.0], [50.9, 1024.0], [51.0, 1024.0], [51.1, 1034.0], [51.2, 1034.0], [51.3, 1035.0], [51.4, 1035.0], [51.5, 1037.0], [51.6, 1041.0], [51.7, 1041.0], [51.8, 1044.0], [51.9, 1045.0], [52.0, 1046.0], [52.1, 1046.0], [52.2, 1050.0], [52.3, 1064.0], [52.4, 1066.0], [52.5, 1066.0], [52.6, 1067.0], [52.7, 1069.0], [52.8, 1075.0], [52.9, 1075.0], [53.0, 1075.0], [53.1, 1082.0], [53.2, 1085.0], [53.3, 1085.0], [53.4, 1086.0], [53.5, 1089.0], [53.6, 1089.0], [53.7, 1092.0], [53.8, 1093.0], [53.9, 1095.0], [54.0, 1095.0], [54.1, 1097.0], [54.2, 1098.0], [54.3, 1098.0], [54.4, 1098.0], [54.5, 1102.0], [54.6, 1111.0], [54.7, 1113.0], [54.8, 1113.0], [54.9, 1118.0], [55.0, 1118.0], [55.1, 1118.0], [55.2, 1118.0], [55.3, 1119.0], [55.4, 1120.0], [55.5, 1120.0], [55.6, 1120.0], [55.7, 1123.0], [55.8, 1127.0], [55.9, 1127.0], [56.0, 1127.0], [56.1, 1131.0], [56.2, 1134.0], [56.3, 1134.0], [56.4, 1134.0], [56.5, 1137.0], [56.6, 1140.0], [56.7, 1140.0], [56.8, 1140.0], [56.9, 1141.0], [57.0, 1141.0], [57.1, 1142.0], [57.2, 1143.0], [57.3, 1144.0], [57.4, 1144.0], [57.5, 1145.0], [57.6, 1146.0], [57.7, 1147.0], [57.8, 1147.0], [57.9, 1149.0], [58.0, 1151.0], [58.1, 1151.0], [58.2, 1151.0], [58.3, 1152.0], [58.4, 1153.0], [58.5, 1153.0], [58.6, 1155.0], [58.7, 1155.0], [58.8, 1156.0], [58.9, 1156.0], [59.0, 1156.0], [59.1, 1157.0], [59.2, 1157.0], [59.3, 1157.0], [59.4, 1159.0], [59.5, 1159.0], [59.6, 1160.0], [59.7, 1160.0], [59.8, 1160.0], [59.9, 1162.0], [60.0, 1163.0], [60.1, 1163.0], [60.2, 1164.0], [60.3, 1167.0], [60.4, 1167.0], [60.5, 1169.0], [60.6, 1172.0], [60.7, 1174.0], [60.8, 1174.0], [60.9, 1175.0], [61.0, 1175.0], [61.1, 1176.0], [61.2, 1176.0], [61.3, 1177.0], [61.4, 1178.0], [61.5, 1179.0], [61.6, 1179.0], [61.7, 1182.0], [61.8, 1183.0], [61.9, 1183.0], [62.0, 1183.0], [62.1, 1185.0], [62.2, 1186.0], [62.3, 1186.0], [62.4, 1189.0], [62.5, 1189.0], [62.6, 1192.0], [62.7, 1192.0], [62.8, 1196.0], [62.9, 1199.0], [63.0, 1200.0], [63.1, 1200.0], [63.2, 1207.0], [63.3, 1211.0], [63.4, 1211.0], [63.5, 1214.0], [63.6, 1216.0], [63.7, 1218.0], [63.8, 1218.0], [63.9, 1219.0], [64.0, 1222.0], [64.1, 1224.0], [64.2, 1224.0], [64.3, 1226.0], [64.4, 1227.0], [64.5, 1228.0], [64.6, 1228.0], [64.7, 1229.0], [64.8, 1231.0], [64.9, 1231.0], [65.0, 1231.0], [65.1, 1233.0], [65.2, 1234.0], [65.3, 1234.0], [65.4, 1234.0], [65.5, 1234.0], [65.6, 1244.0], [65.7, 1244.0], [65.8, 1248.0], [65.9, 1249.0], [66.0, 1250.0], [66.1, 1250.0], [66.2, 1251.0], [66.3, 1252.0], [66.4, 1253.0], [66.5, 1253.0], [66.6, 1253.0], [66.7, 1254.0], [66.8, 1254.0], [66.9, 1254.0], [67.0, 1255.0], [67.1, 1257.0], [67.2, 1257.0], [67.3, 1257.0], [67.4, 1264.0], [67.5, 1264.0], [67.6, 1264.0], [67.7, 1266.0], [67.8, 1266.0], [67.9, 1267.0], [68.0, 1267.0], [68.1, 1268.0], [68.2, 1270.0], [68.3, 1270.0], [68.4, 1270.0], [68.5, 1272.0], [68.6, 1272.0], [68.7, 1272.0], [68.8, 1277.0], [68.9, 1278.0], [69.0, 1278.0], [69.1, 1278.0], [69.2, 1280.0], [69.3, 1281.0], [69.4, 1282.0], [69.5, 1282.0], [69.6, 1282.0], [69.7, 1283.0], [69.8, 1284.0], [69.9, 1284.0], [70.0, 1284.0], [70.1, 1292.0], [70.2, 1292.0], [70.3, 1292.0], [70.4, 1294.0], [70.5, 1296.0], [70.6, 1296.0], [70.7, 1302.0], [70.8, 1305.0], [70.9, 1306.0], [71.0, 1306.0], [71.1, 1308.0], [71.2, 1312.0], [71.3, 1313.0], [71.4, 1313.0], [71.5, 1315.0], [71.6, 1321.0], [71.7, 1321.0], [71.8, 1325.0], [71.9, 1325.0], [72.0, 1326.0], [72.1, 1326.0], [72.2, 1327.0], [72.3, 1330.0], [72.4, 1332.0], [72.5, 1332.0], [72.6, 1334.0], [72.7, 1334.0], [72.8, 1337.0], [72.9, 1337.0], [73.0, 1346.0], [73.1, 1348.0], [73.2, 1349.0], [73.3, 1349.0], [73.4, 1350.0], [73.5, 1351.0], [73.6, 1351.0], [73.7, 1354.0], [73.8, 1354.0], [73.9, 1355.0], [74.0, 1355.0], [74.1, 1361.0], [74.2, 1362.0], [74.3, 1363.0], [74.4, 1363.0], [74.5, 1368.0], [74.6, 1372.0], [74.7, 1375.0], [74.8, 1375.0], [74.9, 1377.0], [75.0, 1379.0], [75.1, 1379.0], [75.2, 1382.0], [75.3, 1383.0], [75.4, 1383.0], [75.5, 1383.0], [75.6, 1386.0], [75.7, 1386.0], [75.8, 1386.0], [75.9, 1386.0], [76.0, 1389.0], [76.1, 1391.0], [76.2, 1391.0], [76.3, 1391.0], [76.4, 1393.0], [76.5, 1395.0], [76.6, 1395.0], [76.7, 1395.0], [76.8, 1396.0], [76.9, 1399.0], [77.0, 1399.0], [77.1, 1400.0], [77.2, 1407.0], [77.3, 1409.0], [77.4, 1409.0], [77.5, 1413.0], [77.6, 1413.0], [77.7, 1417.0], [77.8, 1417.0], [77.9, 1419.0], [78.0, 1423.0], [78.1, 1423.0], [78.2, 1423.0], [78.3, 1425.0], [78.4, 1433.0], [78.5, 1433.0], [78.6, 1440.0], [78.7, 1442.0], [78.8, 1443.0], [78.9, 1443.0], [79.0, 1448.0], [79.1, 1453.0], [79.2, 1454.0], [79.3, 1454.0], [79.4, 1461.0], [79.5, 1464.0], [79.6, 1467.0], [79.7, 1467.0], [79.8, 1469.0], [79.9, 1470.0], [80.0, 1470.0], [80.1, 1470.0], [80.2, 1470.0], [80.3, 1471.0], [80.4, 1471.0], [80.5, 1472.0], [80.6, 1475.0], [80.7, 1476.0], [80.8, 1476.0], [80.9, 1481.0], [81.0, 1486.0], [81.1, 1497.0], [81.2, 1497.0], [81.3, 1497.0], [81.4, 1499.0], [81.5, 1500.0], [81.6, 1500.0], [81.7, 1501.0], [81.8, 1501.0], [81.9, 1501.0], [82.0, 1504.0], [82.1, 1504.0], [82.2, 1508.0], [82.3, 1508.0], [82.4, 1512.0], [82.5, 1514.0], [82.6, 1516.0], [82.7, 1516.0], [82.8, 1519.0], [82.9, 1519.0], [83.0, 1520.0], [83.1, 1520.0], [83.2, 1522.0], [83.3, 1530.0], [83.4, 1530.0], [83.5, 1532.0], [83.6, 1533.0], [83.7, 1534.0], [83.8, 1534.0], [83.9, 1534.0], [84.0, 1537.0], [84.1, 1540.0], [84.2, 1540.0], [84.3, 1544.0], [84.4, 1547.0], [84.5, 1561.0], [84.6, 1561.0], [84.7, 1561.0], [84.8, 1562.0], [84.9, 1570.0], [85.0, 1570.0], [85.1, 1583.0], [85.2, 1584.0], [85.3, 1584.0], [85.4, 1588.0], [85.5, 1591.0], [85.6, 1594.0], [85.7, 1594.0], [85.8, 1597.0], [85.9, 1603.0], [86.0, 1603.0], [86.1, 1603.0], [86.2, 1608.0], [86.3, 1612.0], [86.4, 1618.0], [86.5, 1618.0], [86.6, 1619.0], [86.7, 1620.0], [86.8, 1620.0], [86.9, 1626.0], [87.0, 1631.0], [87.1, 1633.0], [87.2, 1633.0], [87.3, 1638.0], [87.4, 1642.0], [87.5, 1648.0], [87.6, 1648.0], [87.7, 1648.0], [87.8, 1657.0], [87.9, 1659.0], [88.0, 1659.0], [88.1, 1665.0], [88.2, 1666.0], [88.3, 1672.0], [88.4, 1672.0], [88.5, 1675.0], [88.6, 1678.0], [88.7, 1678.0], [88.8, 1678.0], [88.9, 1679.0], [89.0, 1684.0], [89.1, 1684.0], [89.2, 1684.0], [89.3, 1690.0], [89.4, 1694.0], [89.5, 1694.0], [89.6, 1695.0], [89.7, 1699.0], [89.8, 1712.0], [89.9, 1712.0], [90.0, 1714.0], [90.1, 1714.0], [90.2, 1714.0], [90.3, 1714.0], [90.4, 1719.0], [90.5, 1723.0], [90.6, 1723.0], [90.7, 1729.0], [90.8, 1732.0], [90.9, 1733.0], [91.0, 1733.0], [91.1, 1737.0], [91.2, 1744.0], [91.3, 1745.0], [91.4, 1745.0], [91.5, 1759.0], [91.6, 1769.0], [91.7, 1769.0], [91.8, 1773.0], [91.9, 1774.0], [92.0, 1778.0], [92.1, 1778.0], [92.2, 1780.0], [92.3, 1791.0], [92.4, 1797.0], [92.5, 1797.0], [92.6, 1797.0], [92.7, 1817.0], [92.8, 1818.0], [92.9, 1818.0], [93.0, 1831.0], [93.1, 1834.0], [93.2, 1850.0], [93.3, 1850.0], [93.4, 1850.0], [93.5, 1855.0], [93.6, 1855.0], [93.7, 1855.0], [93.8, 1860.0], [93.9, 1861.0], [94.0, 1861.0], [94.1, 1861.0], [94.2, 1869.0], [94.3, 1882.0], [94.4, 1882.0], [94.5, 1885.0], [94.6, 1886.0], [94.7, 1906.0], [94.8, 1906.0], [94.9, 1908.0], [95.0, 1926.0], [95.1, 1926.0], [95.2, 1953.0], [95.3, 1961.0], [95.4, 1964.0], [95.5, 1964.0], [95.6, 1991.0], [95.7, 2004.0], [95.8, 2019.0], [95.9, 2019.0], [96.0, 2020.0], [96.1, 2025.0], [96.2, 2028.0], [96.3, 2028.0], [96.4, 2059.0], [96.5, 2062.0], [96.6, 2098.0], [96.7, 2098.0], [96.8, 2136.0], [96.9, 2151.0], [97.0, 2151.0], [97.1, 2161.0], [97.2, 2235.0], [97.3, 2268.0], [97.4, 2268.0], [97.5, 2278.0], [97.6, 2394.0], [97.7, 2504.0], [97.8, 2504.0], [97.9, 2590.0], [98.0, 2595.0], [98.1, 2616.0], [98.2, 2616.0], [98.3, 2782.0], [98.4, 3028.0], [98.5, 3028.0], [98.6, 3041.0], [98.7, 3165.0], [98.8, 3265.0], [98.9, 3265.0], [99.0, 3347.0], [99.1, 3364.0], [99.2, 3385.0], [99.3, 3385.0], [99.4, 3460.0], [99.5, 3530.0], [99.6, 3603.0], [99.7, 3603.0], [99.8, 3690.0], [99.9, 3730.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 80.0, "series": [{"data": [[600.0, 80.0], [700.0, 70.0], [800.0, 45.0], [900.0, 42.0], [1000.0, 36.0], [1100.0, 63.0], [1200.0, 56.0], [1300.0, 47.0], [1400.0, 33.0], [1500.0, 32.0], [1600.0, 29.0], [100.0, 1.0], [1700.0, 21.0], [1800.0, 15.0], [1900.0, 7.0], [2000.0, 8.0], [2100.0, 3.0], [2200.0, 3.0], [2300.0, 1.0], [2500.0, 3.0], [2600.0, 1.0], [2700.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [3200.0, 1.0], [3300.0, 3.0], [200.0, 9.0], [3400.0, 1.0], [3500.0, 1.0], [3600.0, 2.0], [3700.0, 1.0], [300.0, 39.0], [400.0, 36.0], [500.0, 42.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 85.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 515.0, "series": [{"data": [[0.0, 85.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 515.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 135.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.913127413127416, "minX": 1.60224852E12, "maxY": 10.0, "series": [{"data": [[1.60224852E12, 10.0], [1.60224858E12, 9.913127413127416]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224858E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 326.0, "minX": 1.0, "maxY": 1759.0, "series": [{"data": [[8.0, 1759.0], [4.0, 690.0], [2.0, 1386.0], [1.0, 1350.0], [9.0, 626.0], [10.0, 1078.1446280991736], [5.0, 618.0], [6.0, 649.0], [3.0, 698.0], [7.0, 326.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1075.9659863945583]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1642.1666666666667, "minX": 1.60224852E12, "maxY": 1177676.15, "series": [{"data": [[1.60224852E12, 658101.0], [1.60224858E12, 1177676.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224852E12, 1642.1666666666667], [1.60224858E12, 3880.866666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224858E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1002.436293436293, "minX": 1.60224852E12, "maxY": 1251.4884792626733, "series": [{"data": [[1.60224852E12, 1251.4884792626733], [1.60224858E12, 1002.436293436293]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224858E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1001.4806949806963, "minX": 1.60224852E12, "maxY": 1250.345622119815, "series": [{"data": [[1.60224852E12, 1250.345622119815], [1.60224858E12, 1001.4806949806963]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224858E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.025096525096525078, "minX": 1.60224852E12, "maxY": 0.4423963133640558, "series": [{"data": [[1.60224852E12, 0.4423963133640558], [1.60224858E12, 0.025096525096525078]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224858E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 189.0, "minX": 1.60224852E12, "maxY": 3730.0, "series": [{"data": [[1.60224852E12, 3690.0], [1.60224858E12, 3730.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224852E12, 369.37599230766295], [1.60224858E12, 208.0389988863468]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224852E12, 375.7910001039505], [1.60224858E12, 211.1381000494957]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224852E12, 375.3549998700619], [1.60224858E12, 210.3744994431734]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224852E12, 227.0], [1.60224858E12, 189.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224852E12, 1159.0], [1.60224858E12, 928.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224858E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 455.0, "minX": 1.0, "maxY": 2504.0, "series": [{"data": [[8.0, 1198.0], [9.0, 1153.5], [10.0, 965.0], [11.0, 988.5], [12.0, 836.5], [13.0, 669.0], [14.0, 740.0], [15.0, 699.0], [1.0, 2504.0], [16.0, 620.0], [17.0, 455.0], [6.0, 1230.5], [7.0, 1184.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 454.0, "minX": 1.0, "maxY": 2501.0, "series": [{"data": [[8.0, 1197.5], [9.0, 1152.5], [10.0, 964.0], [11.0, 988.0], [12.0, 836.5], [13.0, 668.0], [14.0, 739.5], [15.0, 699.0], [1.0, 2501.0], [16.0, 619.5], [17.0, 454.0], [6.0, 1227.5], [7.0, 1184.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.783333333333333, "minX": 1.60224852E12, "maxY": 8.466666666666667, "series": [{"data": [[1.60224852E12, 3.783333333333333], [1.60224858E12, 8.466666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224858E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.6166666666666667, "minX": 1.60224852E12, "maxY": 8.633333333333333, "series": [{"data": [[1.60224852E12, 3.6166666666666667], [1.60224858E12, 8.633333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224858E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.6166666666666667, "minX": 1.60224852E12, "maxY": 8.633333333333333, "series": [{"data": [[1.60224852E12, 3.6166666666666667], [1.60224858E12, 8.633333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224858E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.6166666666666667, "minX": 1.60224852E12, "maxY": 8.633333333333333, "series": [{"data": [[1.60224852E12, 3.6166666666666667], [1.60224858E12, 8.633333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224858E12, "title": "Total Transactions Per Second"}},
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

