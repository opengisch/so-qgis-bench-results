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
        data: {"result": {"minY": 213.0, "minX": 0.0, "maxY": 4615.0, "series": [{"data": [[0.0, 213.0], [0.1, 213.0], [0.2, 226.0], [0.3, 233.0], [0.4, 233.0], [0.5, 234.0], [0.6, 235.0], [0.7, 236.0], [0.8, 236.0], [0.9, 238.0], [1.0, 239.0], [1.1, 239.0], [1.2, 239.0], [1.3, 250.0], [1.4, 250.0], [1.5, 251.0], [1.6, 251.0], [1.7, 251.0], [1.8, 251.0], [1.9, 251.0], [2.0, 253.0], [2.1, 258.0], [2.2, 258.0], [2.3, 258.0], [2.4, 260.0], [2.5, 260.0], [2.6, 260.0], [2.7, 260.0], [2.8, 264.0], [2.9, 278.0], [3.0, 281.0], [3.1, 281.0], [3.2, 296.0], [3.3, 309.0], [3.4, 309.0], [3.5, 310.0], [3.6, 333.0], [3.7, 338.0], [3.8, 338.0], [3.9, 343.0], [4.0, 345.0], [4.1, 345.0], [4.2, 345.0], [4.3, 350.0], [4.4, 353.0], [4.5, 359.0], [4.6, 359.0], [4.7, 362.0], [4.8, 365.0], [4.9, 367.0], [5.0, 367.0], [5.1, 369.0], [5.2, 371.0], [5.3, 371.0], [5.4, 372.0], [5.5, 375.0], [5.6, 379.0], [5.7, 379.0], [5.8, 379.0], [5.9, 381.0], [6.0, 381.0], [6.1, 381.0], [6.2, 381.0], [6.3, 385.0], [6.4, 387.0], [6.5, 387.0], [6.6, 389.0], [6.7, 390.0], [6.8, 390.0], [6.9, 391.0], [7.0, 393.0], [7.1, 393.0], [7.2, 393.0], [7.3, 396.0], [7.4, 396.0], [7.5, 401.0], [7.6, 401.0], [7.7, 402.0], [7.8, 404.0], [7.9, 410.0], [8.0, 410.0], [8.1, 412.0], [8.2, 415.0], [8.3, 416.0], [8.4, 416.0], [8.5, 417.0], [8.6, 420.0], [8.7, 420.0], [8.8, 422.0], [8.9, 423.0], [9.0, 430.0], [9.1, 430.0], [9.2, 434.0], [9.3, 438.0], [9.4, 438.0], [9.5, 438.0], [9.6, 438.0], [9.7, 444.0], [9.8, 451.0], [9.9, 451.0], [10.0, 453.0], [10.1, 454.0], [10.2, 454.0], [10.3, 456.0], [10.4, 456.0], [10.5, 457.0], [10.6, 457.0], [10.7, 458.0], [10.8, 458.0], [10.9, 458.0], [11.0, 458.0], [11.1, 459.0], [11.2, 462.0], [11.3, 463.0], [11.4, 463.0], [11.5, 464.0], [11.6, 466.0], [11.7, 466.0], [11.8, 467.0], [11.9, 467.0], [12.0, 468.0], [12.1, 468.0], [12.2, 471.0], [12.3, 472.0], [12.4, 474.0], [12.5, 474.0], [12.6, 475.0], [12.7, 475.0], [12.8, 477.0], [12.9, 477.0], [13.0, 477.0], [13.1, 480.0], [13.2, 482.0], [13.3, 482.0], [13.4, 482.0], [13.5, 483.0], [13.6, 483.0], [13.7, 484.0], [13.8, 484.0], [13.9, 486.0], [14.0, 486.0], [14.1, 486.0], [14.2, 486.0], [14.3, 487.0], [14.4, 487.0], [14.5, 488.0], [14.6, 489.0], [14.7, 489.0], [14.8, 489.0], [14.9, 491.0], [15.0, 491.0], [15.1, 491.0], [15.2, 493.0], [15.3, 494.0], [15.4, 496.0], [15.5, 496.0], [15.6, 497.0], [15.7, 498.0], [15.8, 498.0], [15.9, 498.0], [16.0, 502.0], [16.1, 502.0], [16.2, 503.0], [16.3, 503.0], [16.4, 504.0], [16.5, 505.0], [16.6, 505.0], [16.7, 505.0], [16.8, 506.0], [16.9, 507.0], [17.0, 507.0], [17.1, 507.0], [17.2, 508.0], [17.3, 508.0], [17.4, 508.0], [17.5, 510.0], [17.6, 515.0], [17.7, 523.0], [17.8, 523.0], [17.9, 530.0], [18.0, 533.0], [18.1, 535.0], [18.2, 535.0], [18.3, 540.0], [18.4, 541.0], [18.5, 541.0], [18.6, 542.0], [18.7, 545.0], [18.8, 547.0], [18.9, 547.0], [19.0, 550.0], [19.1, 553.0], [19.2, 554.0], [19.3, 554.0], [19.4, 556.0], [19.5, 562.0], [19.6, 563.0], [19.7, 563.0], [19.8, 567.0], [19.9, 574.0], [20.0, 576.0], [20.1, 576.0], [20.2, 576.0], [20.3, 582.0], [20.4, 582.0], [20.5, 590.0], [20.6, 591.0], [20.7, 594.0], [20.8, 594.0], [20.9, 594.0], [21.0, 599.0], [21.1, 602.0], [21.2, 602.0], [21.3, 602.0], [21.4, 603.0], [21.5, 604.0], [21.6, 604.0], [21.7, 605.0], [21.8, 606.0], [21.9, 606.0], [22.0, 612.0], [22.1, 613.0], [22.2, 614.0], [22.3, 614.0], [22.4, 615.0], [22.5, 616.0], [22.6, 617.0], [22.7, 617.0], [22.8, 620.0], [22.9, 621.0], [23.0, 622.0], [23.1, 622.0], [23.2, 625.0], [23.3, 625.0], [23.4, 625.0], [23.5, 630.0], [23.6, 630.0], [23.7, 631.0], [23.8, 631.0], [23.9, 636.0], [24.0, 637.0], [24.1, 643.0], [24.2, 643.0], [24.3, 649.0], [24.4, 650.0], [24.5, 652.0], [24.6, 652.0], [24.7, 653.0], [24.8, 654.0], [24.9, 655.0], [25.0, 655.0], [25.1, 655.0], [25.2, 658.0], [25.3, 658.0], [25.4, 659.0], [25.5, 659.0], [25.6, 663.0], [25.7, 663.0], [25.8, 663.0], [25.9, 665.0], [26.0, 669.0], [26.1, 669.0], [26.2, 671.0], [26.3, 672.0], [26.4, 672.0], [26.5, 672.0], [26.6, 679.0], [26.7, 681.0], [26.8, 681.0], [26.9, 682.0], [27.0, 683.0], [27.1, 683.0], [27.2, 683.0], [27.3, 683.0], [27.4, 686.0], [27.5, 687.0], [27.6, 687.0], [27.7, 689.0], [27.8, 691.0], [27.9, 692.0], [28.0, 692.0], [28.1, 692.0], [28.2, 692.0], [28.3, 694.0], [28.4, 694.0], [28.5, 694.0], [28.6, 698.0], [28.7, 698.0], [28.8, 699.0], [28.9, 699.0], [29.0, 700.0], [29.1, 700.0], [29.2, 703.0], [29.3, 704.0], [29.4, 706.0], [29.5, 706.0], [29.6, 707.0], [29.7, 708.0], [29.8, 711.0], [29.9, 711.0], [30.0, 713.0], [30.1, 713.0], [30.2, 713.0], [30.3, 716.0], [30.4, 719.0], [30.5, 720.0], [30.6, 720.0], [30.7, 720.0], [30.8, 721.0], [30.9, 722.0], [31.0, 722.0], [31.1, 722.0], [31.2, 724.0], [31.3, 727.0], [31.4, 727.0], [31.5, 727.0], [31.6, 728.0], [31.7, 728.0], [31.8, 730.0], [31.9, 732.0], [32.0, 733.0], [32.1, 733.0], [32.2, 735.0], [32.3, 735.0], [32.4, 737.0], [32.5, 737.0], [32.6, 738.0], [32.7, 742.0], [32.8, 744.0], [32.9, 744.0], [33.0, 744.0], [33.1, 744.0], [33.2, 744.0], [33.3, 744.0], [33.4, 745.0], [33.5, 749.0], [33.6, 749.0], [33.7, 749.0], [33.8, 750.0], [33.9, 750.0], [34.0, 750.0], [34.1, 751.0], [34.2, 751.0], [34.3, 759.0], [34.4, 759.0], [34.5, 759.0], [34.6, 760.0], [34.7, 760.0], [34.8, 760.0], [34.9, 761.0], [35.0, 763.0], [35.1, 763.0], [35.2, 764.0], [35.3, 766.0], [35.4, 766.0], [35.5, 766.0], [35.6, 767.0], [35.7, 767.0], [35.8, 769.0], [35.9, 769.0], [36.0, 773.0], [36.1, 773.0], [36.2, 773.0], [36.3, 773.0], [36.4, 775.0], [36.5, 777.0], [36.6, 780.0], [36.7, 780.0], [36.8, 781.0], [36.9, 781.0], [37.0, 781.0], [37.1, 781.0], [37.2, 787.0], [37.3, 791.0], [37.4, 791.0], [37.5, 791.0], [37.6, 793.0], [37.7, 794.0], [37.8, 794.0], [37.9, 796.0], [38.0, 798.0], [38.1, 799.0], [38.2, 799.0], [38.3, 801.0], [38.4, 803.0], [38.5, 803.0], [38.6, 803.0], [38.7, 804.0], [38.8, 804.0], [38.9, 804.0], [39.0, 804.0], [39.1, 808.0], [39.2, 808.0], [39.3, 808.0], [39.4, 811.0], [39.5, 814.0], [39.6, 821.0], [39.7, 821.0], [39.8, 826.0], [39.9, 829.0], [40.0, 830.0], [40.1, 830.0], [40.2, 830.0], [40.3, 831.0], [40.4, 831.0], [40.5, 832.0], [40.6, 833.0], [40.7, 834.0], [40.8, 834.0], [40.9, 843.0], [41.0, 848.0], [41.1, 848.0], [41.2, 848.0], [41.3, 854.0], [41.4, 858.0], [41.5, 860.0], [41.6, 860.0], [41.7, 861.0], [41.8, 864.0], [41.9, 864.0], [42.0, 864.0], [42.1, 865.0], [42.2, 867.0], [42.3, 867.0], [42.4, 868.0], [42.5, 868.0], [42.6, 870.0], [42.7, 870.0], [42.8, 871.0], [42.9, 871.0], [43.0, 873.0], [43.1, 873.0], [43.2, 876.0], [43.3, 877.0], [43.4, 877.0], [43.5, 879.0], [43.6, 879.0], [43.7, 880.0], [43.8, 880.0], [43.9, 880.0], [44.0, 882.0], [44.1, 883.0], [44.2, 883.0], [44.3, 884.0], [44.4, 884.0], [44.5, 885.0], [44.6, 885.0], [44.7, 893.0], [44.8, 895.0], [44.9, 896.0], [45.0, 896.0], [45.1, 900.0], [45.2, 902.0], [45.3, 902.0], [45.4, 904.0], [45.5, 905.0], [45.6, 906.0], [45.7, 906.0], [45.8, 909.0], [45.9, 914.0], [46.0, 917.0], [46.1, 917.0], [46.2, 924.0], [46.3, 925.0], [46.4, 927.0], [46.5, 927.0], [46.6, 928.0], [46.7, 929.0], [46.8, 929.0], [46.9, 931.0], [47.0, 938.0], [47.1, 938.0], [47.2, 938.0], [47.3, 945.0], [47.4, 946.0], [47.5, 948.0], [47.6, 948.0], [47.7, 952.0], [47.8, 956.0], [47.9, 957.0], [48.0, 957.0], [48.1, 958.0], [48.2, 958.0], [48.3, 960.0], [48.4, 960.0], [48.5, 963.0], [48.6, 965.0], [48.7, 965.0], [48.8, 967.0], [48.9, 970.0], [49.0, 972.0], [49.1, 972.0], [49.2, 973.0], [49.3, 980.0], [49.4, 986.0], [49.5, 986.0], [49.6, 986.0], [49.7, 989.0], [49.8, 990.0], [49.9, 990.0], [50.0, 991.0], [50.1, 991.0], [50.2, 991.0], [50.3, 992.0], [50.4, 992.0], [50.5, 992.0], [50.6, 992.0], [50.7, 994.0], [50.8, 995.0], [50.9, 995.0], [51.0, 995.0], [51.1, 997.0], [51.2, 998.0], [51.3, 1003.0], [51.4, 1003.0], [51.5, 1005.0], [51.6, 1005.0], [51.7, 1005.0], [51.8, 1006.0], [51.9, 1007.0], [52.0, 1007.0], [52.1, 1007.0], [52.2, 1007.0], [52.3, 1010.0], [52.4, 1013.0], [52.5, 1013.0], [52.6, 1016.0], [52.7, 1017.0], [52.8, 1019.0], [52.9, 1019.0], [53.0, 1019.0], [53.1, 1019.0], [53.2, 1019.0], [53.3, 1019.0], [53.4, 1019.0], [53.5, 1020.0], [53.6, 1020.0], [53.7, 1021.0], [53.8, 1025.0], [53.9, 1025.0], [54.0, 1025.0], [54.1, 1027.0], [54.2, 1027.0], [54.3, 1029.0], [54.4, 1029.0], [54.5, 1031.0], [54.6, 1035.0], [54.7, 1040.0], [54.8, 1040.0], [54.9, 1040.0], [55.0, 1041.0], [55.1, 1041.0], [55.2, 1042.0], [55.3, 1047.0], [55.4, 1047.0], [55.5, 1047.0], [55.6, 1050.0], [55.7, 1052.0], [55.8, 1053.0], [55.9, 1053.0], [56.0, 1053.0], [56.1, 1056.0], [56.2, 1063.0], [56.3, 1063.0], [56.4, 1063.0], [56.5, 1063.0], [56.6, 1066.0], [56.7, 1066.0], [56.8, 1069.0], [56.9, 1072.0], [57.0, 1072.0], [57.1, 1081.0], [57.2, 1088.0], [57.3, 1090.0], [57.4, 1090.0], [57.5, 1090.0], [57.6, 1093.0], [57.7, 1093.0], [57.8, 1093.0], [57.9, 1095.0], [58.0, 1101.0], [58.1, 1115.0], [58.2, 1115.0], [58.3, 1115.0], [58.4, 1116.0], [58.5, 1116.0], [58.6, 1123.0], [58.7, 1124.0], [58.8, 1128.0], [58.9, 1128.0], [59.0, 1128.0], [59.1, 1128.0], [59.2, 1128.0], [59.3, 1128.0], [59.4, 1129.0], [59.5, 1131.0], [59.6, 1131.0], [59.7, 1131.0], [59.8, 1133.0], [59.9, 1135.0], [60.0, 1148.0], [60.1, 1148.0], [60.2, 1149.0], [60.3, 1152.0], [60.4, 1152.0], [60.5, 1158.0], [60.6, 1160.0], [60.7, 1165.0], [60.8, 1165.0], [60.9, 1168.0], [61.0, 1171.0], [61.1, 1173.0], [61.2, 1173.0], [61.3, 1179.0], [61.4, 1179.0], [61.5, 1180.0], [61.6, 1180.0], [61.7, 1184.0], [61.8, 1184.0], [61.9, 1184.0], [62.0, 1185.0], [62.1, 1191.0], [62.2, 1191.0], [62.3, 1191.0], [62.4, 1193.0], [62.5, 1195.0], [62.6, 1196.0], [62.7, 1196.0], [62.8, 1197.0], [62.9, 1200.0], [63.0, 1200.0], [63.1, 1200.0], [63.2, 1203.0], [63.3, 1206.0], [63.4, 1206.0], [63.5, 1211.0], [63.6, 1212.0], [63.7, 1213.0], [63.8, 1213.0], [63.9, 1213.0], [64.0, 1213.0], [64.1, 1215.0], [64.2, 1215.0], [64.3, 1217.0], [64.4, 1218.0], [64.5, 1219.0], [64.6, 1219.0], [64.7, 1226.0], [64.8, 1230.0], [64.9, 1231.0], [65.0, 1231.0], [65.1, 1235.0], [65.2, 1236.0], [65.3, 1236.0], [65.4, 1237.0], [65.5, 1239.0], [65.6, 1244.0], [65.7, 1244.0], [65.8, 1250.0], [65.9, 1254.0], [66.0, 1255.0], [66.1, 1255.0], [66.2, 1258.0], [66.3, 1259.0], [66.4, 1262.0], [66.5, 1262.0], [66.6, 1262.0], [66.7, 1264.0], [66.8, 1264.0], [66.9, 1264.0], [67.0, 1270.0], [67.1, 1272.0], [67.2, 1272.0], [67.3, 1273.0], [67.4, 1274.0], [67.5, 1277.0], [67.6, 1277.0], [67.7, 1277.0], [67.8, 1285.0], [67.9, 1285.0], [68.0, 1285.0], [68.1, 1288.0], [68.2, 1288.0], [68.3, 1299.0], [68.4, 1299.0], [68.5, 1299.0], [68.6, 1303.0], [68.7, 1303.0], [68.8, 1304.0], [68.9, 1306.0], [69.0, 1307.0], [69.1, 1307.0], [69.2, 1315.0], [69.3, 1318.0], [69.4, 1322.0], [69.5, 1322.0], [69.6, 1323.0], [69.7, 1326.0], [69.8, 1330.0], [69.9, 1330.0], [70.0, 1335.0], [70.1, 1337.0], [70.2, 1337.0], [70.3, 1338.0], [70.4, 1338.0], [70.5, 1342.0], [70.6, 1342.0], [70.7, 1343.0], [70.8, 1345.0], [70.9, 1345.0], [71.0, 1345.0], [71.1, 1347.0], [71.2, 1348.0], [71.3, 1350.0], [71.4, 1350.0], [71.5, 1351.0], [71.6, 1353.0], [71.7, 1353.0], [71.8, 1355.0], [71.9, 1355.0], [72.0, 1355.0], [72.1, 1355.0], [72.2, 1357.0], [72.3, 1358.0], [72.4, 1361.0], [72.5, 1361.0], [72.6, 1363.0], [72.7, 1370.0], [72.8, 1372.0], [72.9, 1372.0], [73.0, 1375.0], [73.1, 1375.0], [73.2, 1390.0], [73.3, 1390.0], [73.4, 1391.0], [73.5, 1393.0], [73.6, 1393.0], [73.7, 1400.0], [73.8, 1401.0], [73.9, 1402.0], [74.0, 1402.0], [74.1, 1405.0], [74.2, 1408.0], [74.3, 1411.0], [74.4, 1411.0], [74.5, 1412.0], [74.6, 1412.0], [74.7, 1414.0], [74.8, 1414.0], [74.9, 1417.0], [75.0, 1419.0], [75.1, 1419.0], [75.2, 1422.0], [75.3, 1432.0], [75.4, 1434.0], [75.5, 1434.0], [75.6, 1441.0], [75.7, 1442.0], [75.8, 1450.0], [75.9, 1450.0], [76.0, 1451.0], [76.1, 1452.0], [76.2, 1454.0], [76.3, 1454.0], [76.4, 1456.0], [76.5, 1459.0], [76.6, 1473.0], [76.7, 1473.0], [76.8, 1495.0], [76.9, 1497.0], [77.0, 1497.0], [77.1, 1498.0], [77.2, 1501.0], [77.3, 1508.0], [77.4, 1508.0], [77.5, 1528.0], [77.6, 1529.0], [77.7, 1534.0], [77.8, 1534.0], [77.9, 1534.0], [78.0, 1535.0], [78.1, 1538.0], [78.2, 1538.0], [78.3, 1542.0], [78.4, 1550.0], [78.5, 1550.0], [78.6, 1550.0], [78.7, 1551.0], [78.8, 1551.0], [78.9, 1551.0], [79.0, 1551.0], [79.1, 1552.0], [79.2, 1553.0], [79.3, 1553.0], [79.4, 1554.0], [79.5, 1556.0], [79.6, 1557.0], [79.7, 1557.0], [79.8, 1560.0], [79.9, 1560.0], [80.0, 1563.0], [80.1, 1563.0], [80.2, 1566.0], [80.3, 1570.0], [80.4, 1570.0], [80.5, 1571.0], [80.6, 1573.0], [80.7, 1576.0], [80.8, 1576.0], [80.9, 1579.0], [81.0, 1580.0], [81.1, 1580.0], [81.2, 1580.0], [81.3, 1581.0], [81.4, 1584.0], [81.5, 1584.0], [81.6, 1584.0], [81.7, 1586.0], [81.8, 1594.0], [81.9, 1594.0], [82.0, 1597.0], [82.1, 1599.0], [82.2, 1608.0], [82.3, 1608.0], [82.4, 1609.0], [82.5, 1610.0], [82.6, 1613.0], [82.7, 1613.0], [82.8, 1613.0], [82.9, 1614.0], [83.0, 1620.0], [83.1, 1620.0], [83.2, 1626.0], [83.3, 1632.0], [83.4, 1632.0], [83.5, 1636.0], [83.6, 1640.0], [83.7, 1645.0], [83.8, 1645.0], [83.9, 1649.0], [84.0, 1650.0], [84.1, 1652.0], [84.2, 1652.0], [84.3, 1658.0], [84.4, 1659.0], [84.5, 1669.0], [84.6, 1669.0], [84.7, 1675.0], [84.8, 1682.0], [84.9, 1689.0], [85.0, 1689.0], [85.1, 1690.0], [85.2, 1691.0], [85.3, 1691.0], [85.4, 1696.0], [85.5, 1704.0], [85.6, 1705.0], [85.7, 1705.0], [85.8, 1706.0], [85.9, 1714.0], [86.0, 1715.0], [86.1, 1715.0], [86.2, 1716.0], [86.3, 1716.0], [86.4, 1719.0], [86.5, 1719.0], [86.6, 1724.0], [86.7, 1725.0], [86.8, 1725.0], [86.9, 1727.0], [87.0, 1727.0], [87.1, 1732.0], [87.2, 1732.0], [87.3, 1732.0], [87.4, 1738.0], [87.5, 1738.0], [87.6, 1738.0], [87.7, 1744.0], [87.8, 1744.0], [87.9, 1751.0], [88.0, 1751.0], [88.1, 1753.0], [88.2, 1753.0], [88.3, 1756.0], [88.4, 1756.0], [88.5, 1758.0], [88.6, 1759.0], [88.7, 1759.0], [88.8, 1767.0], [88.9, 1771.0], [89.0, 1775.0], [89.1, 1775.0], [89.2, 1779.0], [89.3, 1792.0], [89.4, 1801.0], [89.5, 1801.0], [89.6, 1805.0], [89.7, 1805.0], [89.8, 1813.0], [89.9, 1813.0], [90.0, 1827.0], [90.1, 1832.0], [90.2, 1832.0], [90.3, 1850.0], [90.4, 1854.0], [90.5, 1856.0], [90.6, 1856.0], [90.7, 1861.0], [90.8, 1864.0], [90.9, 1873.0], [91.0, 1873.0], [91.1, 1882.0], [91.2, 1887.0], [91.3, 1890.0], [91.4, 1890.0], [91.5, 1890.0], [91.6, 1896.0], [91.7, 1896.0], [91.8, 1909.0], [91.9, 1916.0], [92.0, 1919.0], [92.1, 1919.0], [92.2, 1936.0], [92.3, 1939.0], [92.4, 1947.0], [92.5, 1947.0], [92.6, 1952.0], [92.7, 1956.0], [92.8, 1959.0], [92.9, 1959.0], [93.0, 1972.0], [93.1, 1976.0], [93.2, 1982.0], [93.3, 1982.0], [93.4, 1988.0], [93.5, 1994.0], [93.6, 1994.0], [93.7, 1997.0], [93.8, 2009.0], [93.9, 2011.0], [94.0, 2011.0], [94.1, 2021.0], [94.2, 2050.0], [94.3, 2060.0], [94.4, 2060.0], [94.5, 2061.0], [94.6, 2068.0], [94.7, 2070.0], [94.8, 2070.0], [94.9, 2080.0], [95.0, 2095.0], [95.1, 2095.0], [95.2, 2105.0], [95.3, 2106.0], [95.4, 2115.0], [95.5, 2115.0], [95.6, 2123.0], [95.7, 2125.0], [95.8, 2139.0], [95.9, 2139.0], [96.0, 2184.0], [96.1, 2188.0], [96.2, 2197.0], [96.3, 2197.0], [96.4, 2209.0], [96.5, 2264.0], [96.6, 2269.0], [96.7, 2269.0], [96.8, 2281.0], [96.9, 2291.0], [97.0, 2291.0], [97.1, 2297.0], [97.2, 2307.0], [97.3, 2367.0], [97.4, 2367.0], [97.5, 2386.0], [97.6, 2409.0], [97.7, 2419.0], [97.8, 2419.0], [97.9, 2419.0], [98.0, 2499.0], [98.1, 2520.0], [98.2, 2520.0], [98.3, 2546.0], [98.4, 2663.0], [98.5, 2663.0], [98.6, 2801.0], [98.7, 2858.0], [98.8, 2911.0], [98.9, 2911.0], [99.0, 3020.0], [99.1, 3131.0], [99.2, 3312.0], [99.3, 3312.0], [99.4, 3351.0], [99.5, 3354.0], [99.6, 3695.0], [99.7, 3695.0], [99.8, 3897.0], [99.9, 4615.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 68.0, "series": [{"data": [[600.0, 58.0], [700.0, 68.0], [800.0, 50.0], [900.0, 46.0], [1000.0, 49.0], [1100.0, 36.0], [1200.0, 42.0], [1300.0, 37.0], [1400.0, 26.0], [1500.0, 37.0], [1600.0, 24.0], [1700.0, 29.0], [1800.0, 17.0], [1900.0, 15.0], [2000.0, 10.0], [2100.0, 9.0], [2200.0, 6.0], [2300.0, 3.0], [2400.0, 4.0], [2500.0, 2.0], [2600.0, 1.0], [2800.0, 2.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 24.0], [3300.0, 3.0], [3600.0, 1.0], [3800.0, 1.0], [4600.0, 1.0], [300.0, 31.0], [400.0, 62.0], [500.0, 38.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 117.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 450.0, "series": [{"data": [[0.0, 117.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 450.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 168.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.856230031948884, "minX": 1.60440786E12, "maxY": 9.985781990521318, "series": [{"data": [[1.60440786E12, 9.985781990521318], [1.60440792E12, 9.856230031948884]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440792E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 350.0, "minX": 1.0, "maxY": 1288.0, "series": [{"data": [[8.0, 919.5], [4.0, 781.0], [2.0, 830.0], [1.0, 1236.0], [9.0, 716.0], [10.0, 1088.9157458563543], [5.0, 764.0], [6.0, 530.0], [3.0, 1288.0], [7.0, 350.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.930612244897949, 1084.6789115646252]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2353.383333333333, "minX": 1.60440786E12, "maxY": 1108020.4833333334, "series": [{"data": [[1.60440786E12, 1108020.4833333334], [1.60440792E12, 727680.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60440786E12, 3169.65], [1.60440792E12, 2353.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440792E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1064.9146919431282, "minX": 1.60440786E12, "maxY": 1111.3258785942492, "series": [{"data": [[1.60440786E12, 1064.9146919431282], [1.60440792E12, 1111.3258785942492]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440792E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1063.6540284360203, "minX": 1.60440786E12, "maxY": 1110.1405750798706, "series": [{"data": [[1.60440786E12, 1063.6540284360203], [1.60440792E12, 1110.1405750798706]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440792E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.035143769968051145, "minX": 1.60440786E12, "maxY": 0.25592417061611344, "series": [{"data": [[1.60440786E12, 0.25592417061611344], [1.60440792E12, 0.035143769968051145]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440792E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 213.0, "minX": 1.60440786E12, "maxY": 4615.0, "series": [{"data": [[1.60440786E12, 4615.0], [1.60440792E12, 2801.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60440786E12, 233.80699989914893], [1.60440792E12, 359.9119991016388]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60440786E12, 234.18770004034042], [1.60440792E12, 362.7602002096176]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60440786E12, 234.01849994957448], [1.60440792E12, 361.7959995508194]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60440786E12, 213.0], [1.60440792E12, 333.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60440786E12, 923.0], [1.60440792E12, 1019.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440792E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 258.0, "minX": 1.0, "maxY": 2858.0, "series": [{"data": [[8.0, 1187.5], [9.0, 1149.0], [10.0, 990.5], [11.0, 745.5], [3.0, 258.0], [12.0, 879.5], [13.0, 956.0], [14.0, 732.5], [15.0, 751.0], [4.0, 914.0], [1.0, 2858.0], [5.0, 801.0], [6.0, 1433.5], [7.0, 1185.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 257.0, "minX": 1.0, "maxY": 2856.0, "series": [{"data": [[8.0, 1186.5], [9.0, 1149.0], [10.0, 988.0], [11.0, 744.5], [3.0, 257.0], [12.0, 879.0], [13.0, 956.0], [14.0, 732.5], [15.0, 751.0], [4.0, 913.0], [1.0, 2856.0], [5.0, 800.0], [6.0, 1432.5], [7.0, 1184.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.05, "minX": 1.60440786E12, "maxY": 7.2, "series": [{"data": [[1.60440786E12, 7.2], [1.60440792E12, 5.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440792E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.216666666666667, "minX": 1.60440786E12, "maxY": 7.033333333333333, "series": [{"data": [[1.60440786E12, 7.033333333333333], [1.60440792E12, 5.216666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440792E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.216666666666667, "minX": 1.60440786E12, "maxY": 7.033333333333333, "series": [{"data": [[1.60440786E12, 7.033333333333333], [1.60440792E12, 5.216666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440792E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.216666666666667, "minX": 1.60440786E12, "maxY": 7.033333333333333, "series": [{"data": [[1.60440786E12, 7.033333333333333], [1.60440792E12, 5.216666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440792E12, "title": "Total Transactions Per Second"}},
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

