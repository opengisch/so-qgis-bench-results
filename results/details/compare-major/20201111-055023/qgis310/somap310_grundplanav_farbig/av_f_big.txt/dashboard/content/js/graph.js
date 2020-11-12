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
        data: {"result": {"minY": 201.0, "minX": 0.0, "maxY": 3797.0, "series": [{"data": [[0.0, 201.0], [0.1, 201.0], [0.2, 214.0], [0.3, 215.0], [0.4, 215.0], [0.5, 222.0], [0.6, 227.0], [0.7, 228.0], [0.8, 228.0], [0.9, 230.0], [1.0, 232.0], [1.1, 232.0], [1.2, 232.0], [1.3, 233.0], [1.4, 235.0], [1.5, 237.0], [1.6, 237.0], [1.7, 246.0], [1.8, 250.0], [1.9, 250.0], [2.0, 253.0], [2.1, 279.0], [2.2, 301.0], [2.3, 301.0], [2.4, 316.0], [2.5, 317.0], [2.6, 324.0], [2.7, 324.0], [2.8, 327.0], [2.9, 327.0], [3.0, 328.0], [3.1, 328.0], [3.2, 330.0], [3.3, 330.0], [3.4, 330.0], [3.5, 330.0], [3.6, 335.0], [3.7, 341.0], [3.8, 341.0], [3.9, 343.0], [4.0, 345.0], [4.1, 345.0], [4.2, 345.0], [4.3, 347.0], [4.4, 348.0], [4.5, 350.0], [4.6, 350.0], [4.7, 352.0], [4.8, 353.0], [4.9, 354.0], [5.0, 354.0], [5.1, 355.0], [5.2, 356.0], [5.3, 356.0], [5.4, 357.0], [5.5, 357.0], [5.6, 358.0], [5.7, 358.0], [5.8, 364.0], [5.9, 365.0], [6.0, 366.0], [6.1, 366.0], [6.2, 370.0], [6.3, 371.0], [6.4, 371.0], [6.5, 371.0], [6.6, 371.0], [6.7, 373.0], [6.8, 373.0], [6.9, 374.0], [7.0, 378.0], [7.1, 378.0], [7.2, 378.0], [7.3, 378.0], [7.4, 379.0], [7.5, 380.0], [7.6, 380.0], [7.7, 382.0], [7.8, 382.0], [7.9, 383.0], [8.0, 383.0], [8.1, 383.0], [8.2, 384.0], [8.3, 385.0], [8.4, 385.0], [8.5, 389.0], [8.6, 390.0], [8.7, 390.0], [8.8, 395.0], [8.9, 399.0], [9.0, 402.0], [9.1, 402.0], [9.2, 407.0], [9.3, 408.0], [9.4, 409.0], [9.5, 409.0], [9.6, 415.0], [9.7, 415.0], [9.8, 419.0], [9.9, 419.0], [10.0, 421.0], [10.1, 430.0], [10.2, 430.0], [10.3, 431.0], [10.4, 432.0], [10.5, 434.0], [10.6, 434.0], [10.7, 441.0], [10.8, 444.0], [10.9, 446.0], [11.0, 446.0], [11.1, 448.0], [11.2, 450.0], [11.3, 452.0], [11.4, 452.0], [11.5, 452.0], [11.6, 452.0], [11.7, 452.0], [11.8, 453.0], [11.9, 453.0], [12.0, 456.0], [12.1, 456.0], [12.2, 456.0], [12.3, 456.0], [12.4, 456.0], [12.5, 456.0], [12.6, 457.0], [12.7, 460.0], [12.8, 463.0], [12.9, 463.0], [13.0, 463.0], [13.1, 463.0], [13.2, 464.0], [13.3, 464.0], [13.4, 464.0], [13.5, 466.0], [13.6, 466.0], [13.7, 468.0], [13.8, 469.0], [13.9, 471.0], [14.0, 471.0], [14.1, 472.0], [14.2, 473.0], [14.3, 473.0], [14.4, 473.0], [14.5, 475.0], [14.6, 476.0], [14.7, 476.0], [14.8, 476.0], [14.9, 481.0], [15.0, 482.0], [15.1, 482.0], [15.2, 483.0], [15.3, 484.0], [15.4, 486.0], [15.5, 486.0], [15.6, 486.0], [15.7, 489.0], [15.8, 494.0], [15.9, 494.0], [16.0, 494.0], [16.1, 496.0], [16.2, 499.0], [16.3, 499.0], [16.4, 500.0], [16.5, 501.0], [16.6, 501.0], [16.7, 501.0], [16.8, 505.0], [16.9, 505.0], [17.0, 505.0], [17.1, 506.0], [17.2, 507.0], [17.3, 510.0], [17.4, 510.0], [17.5, 512.0], [17.6, 515.0], [17.7, 516.0], [17.8, 516.0], [17.9, 516.0], [18.0, 517.0], [18.1, 518.0], [18.2, 518.0], [18.3, 518.0], [18.4, 523.0], [18.5, 523.0], [18.6, 535.0], [18.7, 537.0], [18.8, 538.0], [18.9, 538.0], [19.0, 539.0], [19.1, 541.0], [19.2, 542.0], [19.3, 542.0], [19.4, 544.0], [19.5, 545.0], [19.6, 547.0], [19.7, 547.0], [19.8, 548.0], [19.9, 553.0], [20.0, 555.0], [20.1, 555.0], [20.2, 559.0], [20.3, 560.0], [20.4, 560.0], [20.5, 561.0], [20.6, 566.0], [20.7, 567.0], [20.8, 567.0], [20.9, 570.0], [21.0, 572.0], [21.1, 578.0], [21.2, 578.0], [21.3, 578.0], [21.4, 581.0], [21.5, 583.0], [21.6, 583.0], [21.7, 585.0], [21.8, 585.0], [21.9, 585.0], [22.0, 586.0], [22.1, 589.0], [22.2, 590.0], [22.3, 590.0], [22.4, 590.0], [22.5, 590.0], [22.6, 590.0], [22.7, 590.0], [22.8, 592.0], [22.9, 592.0], [23.0, 592.0], [23.1, 592.0], [23.2, 593.0], [23.3, 595.0], [23.4, 595.0], [23.5, 599.0], [23.6, 600.0], [23.7, 602.0], [23.8, 602.0], [23.9, 603.0], [24.0, 607.0], [24.1, 609.0], [24.2, 609.0], [24.3, 610.0], [24.4, 610.0], [24.5, 611.0], [24.6, 611.0], [24.7, 612.0], [24.8, 616.0], [24.9, 616.0], [25.0, 616.0], [25.1, 617.0], [25.2, 621.0], [25.3, 621.0], [25.4, 622.0], [25.5, 623.0], [25.6, 623.0], [25.7, 623.0], [25.8, 623.0], [25.9, 623.0], [26.0, 623.0], [26.1, 623.0], [26.2, 626.0], [26.3, 631.0], [26.4, 634.0], [26.5, 634.0], [26.6, 635.0], [26.7, 635.0], [26.8, 635.0], [26.9, 635.0], [27.0, 636.0], [27.1, 637.0], [27.2, 637.0], [27.3, 640.0], [27.4, 641.0], [27.5, 642.0], [27.6, 642.0], [27.7, 643.0], [27.8, 643.0], [27.9, 644.0], [28.0, 644.0], [28.1, 645.0], [28.2, 646.0], [28.3, 648.0], [28.4, 648.0], [28.5, 650.0], [28.6, 650.0], [28.7, 650.0], [28.8, 651.0], [28.9, 653.0], [29.0, 653.0], [29.1, 653.0], [29.2, 653.0], [29.3, 658.0], [29.4, 658.0], [29.5, 658.0], [29.6, 664.0], [29.7, 665.0], [29.8, 670.0], [29.9, 670.0], [30.0, 671.0], [30.1, 673.0], [30.2, 673.0], [30.3, 675.0], [30.4, 676.0], [30.5, 678.0], [30.6, 678.0], [30.7, 682.0], [30.8, 684.0], [30.9, 685.0], [31.0, 685.0], [31.1, 685.0], [31.2, 686.0], [31.3, 689.0], [31.4, 689.0], [31.5, 690.0], [31.6, 690.0], [31.7, 690.0], [31.8, 693.0], [31.9, 695.0], [32.0, 695.0], [32.1, 695.0], [32.2, 698.0], [32.3, 698.0], [32.4, 699.0], [32.5, 699.0], [32.6, 700.0], [32.7, 702.0], [32.8, 702.0], [32.9, 702.0], [33.0, 703.0], [33.1, 704.0], [33.2, 704.0], [33.3, 704.0], [33.4, 704.0], [33.5, 705.0], [33.6, 705.0], [33.7, 706.0], [33.8, 706.0], [33.9, 707.0], [34.0, 707.0], [34.1, 708.0], [34.2, 709.0], [34.3, 710.0], [34.4, 710.0], [34.5, 711.0], [34.6, 715.0], [34.7, 716.0], [34.8, 716.0], [34.9, 718.0], [35.0, 718.0], [35.1, 718.0], [35.2, 719.0], [35.3, 719.0], [35.4, 719.0], [35.5, 719.0], [35.6, 724.0], [35.7, 724.0], [35.8, 724.0], [35.9, 724.0], [36.0, 726.0], [36.1, 726.0], [36.2, 726.0], [36.3, 726.0], [36.4, 729.0], [36.5, 730.0], [36.6, 730.0], [36.7, 730.0], [36.8, 732.0], [36.9, 732.0], [37.0, 732.0], [37.1, 732.0], [37.2, 733.0], [37.3, 733.0], [37.4, 733.0], [37.5, 737.0], [37.6, 740.0], [37.7, 742.0], [37.8, 742.0], [37.9, 745.0], [38.0, 750.0], [38.1, 750.0], [38.2, 750.0], [38.3, 751.0], [38.4, 753.0], [38.5, 753.0], [38.6, 757.0], [38.7, 757.0], [38.8, 763.0], [38.9, 763.0], [39.0, 767.0], [39.1, 769.0], [39.2, 771.0], [39.3, 771.0], [39.4, 774.0], [39.5, 775.0], [39.6, 777.0], [39.7, 777.0], [39.8, 778.0], [39.9, 779.0], [40.0, 779.0], [40.1, 779.0], [40.2, 780.0], [40.3, 783.0], [40.4, 783.0], [40.5, 789.0], [40.6, 790.0], [40.7, 790.0], [40.8, 790.0], [40.9, 792.0], [41.0, 794.0], [41.1, 798.0], [41.2, 798.0], [41.3, 802.0], [41.4, 810.0], [41.5, 815.0], [41.6, 815.0], [41.7, 828.0], [41.8, 834.0], [41.9, 834.0], [42.0, 835.0], [42.1, 836.0], [42.2, 837.0], [42.3, 837.0], [42.4, 842.0], [42.5, 842.0], [42.6, 843.0], [42.7, 843.0], [42.8, 844.0], [42.9, 845.0], [43.0, 846.0], [43.1, 846.0], [43.2, 846.0], [43.3, 851.0], [43.4, 851.0], [43.5, 852.0], [43.6, 854.0], [43.7, 855.0], [43.8, 855.0], [43.9, 856.0], [44.0, 865.0], [44.1, 867.0], [44.2, 867.0], [44.3, 875.0], [44.4, 877.0], [44.5, 880.0], [44.6, 880.0], [44.7, 883.0], [44.8, 883.0], [44.9, 884.0], [45.0, 884.0], [45.1, 885.0], [45.2, 885.0], [45.3, 885.0], [45.4, 892.0], [45.5, 893.0], [45.6, 895.0], [45.7, 895.0], [45.8, 896.0], [45.9, 898.0], [46.0, 900.0], [46.1, 900.0], [46.2, 901.0], [46.3, 907.0], [46.4, 908.0], [46.5, 908.0], [46.6, 911.0], [46.7, 911.0], [46.8, 911.0], [46.9, 913.0], [47.0, 916.0], [47.1, 916.0], [47.2, 916.0], [47.3, 924.0], [47.4, 932.0], [47.5, 932.0], [47.6, 932.0], [47.7, 934.0], [47.8, 937.0], [47.9, 938.0], [48.0, 938.0], [48.1, 939.0], [48.2, 942.0], [48.3, 944.0], [48.4, 944.0], [48.5, 946.0], [48.6, 951.0], [48.7, 951.0], [48.8, 952.0], [48.9, 957.0], [49.0, 958.0], [49.1, 958.0], [49.2, 961.0], [49.3, 962.0], [49.4, 965.0], [49.5, 965.0], [49.6, 966.0], [49.7, 968.0], [49.8, 968.0], [49.9, 968.0], [50.0, 974.0], [50.1, 980.0], [50.2, 980.0], [50.3, 981.0], [50.4, 981.0], [50.5, 983.0], [50.6, 983.0], [50.7, 985.0], [50.8, 988.0], [50.9, 994.0], [51.0, 994.0], [51.1, 996.0], [51.2, 997.0], [51.3, 998.0], [51.4, 998.0], [51.5, 1001.0], [51.6, 1003.0], [51.7, 1003.0], [51.8, 1004.0], [51.9, 1004.0], [52.0, 1009.0], [52.1, 1009.0], [52.2, 1010.0], [52.3, 1015.0], [52.4, 1023.0], [52.5, 1023.0], [52.6, 1023.0], [52.7, 1026.0], [52.8, 1029.0], [52.9, 1029.0], [53.0, 1033.0], [53.1, 1036.0], [53.2, 1038.0], [53.3, 1038.0], [53.4, 1045.0], [53.5, 1047.0], [53.6, 1047.0], [53.7, 1051.0], [53.8, 1051.0], [53.9, 1057.0], [54.0, 1057.0], [54.1, 1063.0], [54.2, 1063.0], [54.3, 1067.0], [54.4, 1067.0], [54.5, 1070.0], [54.6, 1084.0], [54.7, 1089.0], [54.8, 1089.0], [54.9, 1091.0], [55.0, 1092.0], [55.1, 1092.0], [55.2, 1093.0], [55.3, 1095.0], [55.4, 1097.0], [55.5, 1097.0], [55.6, 1098.0], [55.7, 1098.0], [55.8, 1100.0], [55.9, 1100.0], [56.0, 1101.0], [56.1, 1104.0], [56.2, 1107.0], [56.3, 1107.0], [56.4, 1108.0], [56.5, 1111.0], [56.6, 1113.0], [56.7, 1113.0], [56.8, 1116.0], [56.9, 1116.0], [57.0, 1116.0], [57.1, 1117.0], [57.2, 1119.0], [57.3, 1121.0], [57.4, 1121.0], [57.5, 1122.0], [57.6, 1122.0], [57.7, 1123.0], [57.8, 1123.0], [57.9, 1125.0], [58.0, 1128.0], [58.1, 1128.0], [58.2, 1128.0], [58.3, 1130.0], [58.4, 1133.0], [58.5, 1133.0], [58.6, 1139.0], [58.7, 1144.0], [58.8, 1144.0], [58.9, 1144.0], [59.0, 1145.0], [59.1, 1148.0], [59.2, 1148.0], [59.3, 1148.0], [59.4, 1149.0], [59.5, 1150.0], [59.6, 1151.0], [59.7, 1151.0], [59.8, 1153.0], [59.9, 1154.0], [60.0, 1157.0], [60.1, 1157.0], [60.2, 1161.0], [60.3, 1167.0], [60.4, 1167.0], [60.5, 1171.0], [60.6, 1174.0], [60.7, 1176.0], [60.8, 1176.0], [60.9, 1177.0], [61.0, 1178.0], [61.1, 1180.0], [61.2, 1180.0], [61.3, 1183.0], [61.4, 1183.0], [61.5, 1185.0], [61.6, 1185.0], [61.7, 1189.0], [61.8, 1189.0], [61.9, 1189.0], [62.0, 1190.0], [62.1, 1190.0], [62.2, 1190.0], [62.3, 1190.0], [62.4, 1191.0], [62.5, 1195.0], [62.6, 1201.0], [62.7, 1201.0], [62.8, 1201.0], [62.9, 1203.0], [63.0, 1206.0], [63.1, 1206.0], [63.2, 1207.0], [63.3, 1207.0], [63.4, 1207.0], [63.5, 1207.0], [63.6, 1212.0], [63.7, 1213.0], [63.8, 1213.0], [63.9, 1213.0], [64.0, 1214.0], [64.1, 1215.0], [64.2, 1215.0], [64.3, 1216.0], [64.4, 1217.0], [64.5, 1218.0], [64.6, 1218.0], [64.7, 1226.0], [64.8, 1229.0], [64.9, 1229.0], [65.0, 1229.0], [65.1, 1234.0], [65.2, 1237.0], [65.3, 1237.0], [65.4, 1239.0], [65.5, 1240.0], [65.6, 1245.0], [65.7, 1245.0], [65.8, 1245.0], [65.9, 1248.0], [66.0, 1251.0], [66.1, 1251.0], [66.2, 1252.0], [66.3, 1253.0], [66.4, 1254.0], [66.5, 1254.0], [66.6, 1258.0], [66.7, 1263.0], [66.8, 1263.0], [66.9, 1267.0], [67.0, 1273.0], [67.1, 1274.0], [67.2, 1274.0], [67.3, 1275.0], [67.4, 1277.0], [67.5, 1278.0], [67.6, 1278.0], [67.7, 1280.0], [67.8, 1285.0], [67.9, 1286.0], [68.0, 1286.0], [68.1, 1291.0], [68.2, 1292.0], [68.3, 1299.0], [68.4, 1299.0], [68.5, 1299.0], [68.6, 1307.0], [68.7, 1307.0], [68.8, 1311.0], [68.9, 1316.0], [69.0, 1319.0], [69.1, 1319.0], [69.2, 1319.0], [69.3, 1321.0], [69.4, 1323.0], [69.5, 1323.0], [69.6, 1323.0], [69.7, 1323.0], [69.8, 1323.0], [69.9, 1323.0], [70.0, 1325.0], [70.1, 1325.0], [70.2, 1325.0], [70.3, 1329.0], [70.4, 1332.0], [70.5, 1334.0], [70.6, 1334.0], [70.7, 1339.0], [70.8, 1343.0], [70.9, 1345.0], [71.0, 1345.0], [71.1, 1347.0], [71.2, 1350.0], [71.3, 1354.0], [71.4, 1354.0], [71.5, 1354.0], [71.6, 1357.0], [71.7, 1357.0], [71.8, 1361.0], [71.9, 1364.0], [72.0, 1366.0], [72.1, 1366.0], [72.2, 1367.0], [72.3, 1367.0], [72.4, 1369.0], [72.5, 1369.0], [72.6, 1380.0], [72.7, 1384.0], [72.8, 1385.0], [72.9, 1385.0], [73.0, 1386.0], [73.1, 1386.0], [73.2, 1389.0], [73.3, 1389.0], [73.4, 1392.0], [73.5, 1392.0], [73.6, 1392.0], [73.7, 1398.0], [73.8, 1398.0], [73.9, 1399.0], [74.0, 1399.0], [74.1, 1399.0], [74.2, 1400.0], [74.3, 1401.0], [74.4, 1401.0], [74.5, 1406.0], [74.6, 1410.0], [74.7, 1411.0], [74.8, 1411.0], [74.9, 1413.0], [75.0, 1415.0], [75.1, 1415.0], [75.2, 1415.0], [75.3, 1417.0], [75.4, 1421.0], [75.5, 1421.0], [75.6, 1421.0], [75.7, 1421.0], [75.8, 1425.0], [75.9, 1425.0], [76.0, 1427.0], [76.1, 1428.0], [76.2, 1431.0], [76.3, 1431.0], [76.4, 1435.0], [76.5, 1451.0], [76.6, 1457.0], [76.7, 1457.0], [76.8, 1462.0], [76.9, 1464.0], [77.0, 1464.0], [77.1, 1466.0], [77.2, 1470.0], [77.3, 1471.0], [77.4, 1471.0], [77.5, 1472.0], [77.6, 1474.0], [77.7, 1479.0], [77.8, 1479.0], [77.9, 1480.0], [78.0, 1480.0], [78.1, 1487.0], [78.2, 1487.0], [78.3, 1491.0], [78.4, 1494.0], [78.5, 1494.0], [78.6, 1495.0], [78.7, 1500.0], [78.8, 1501.0], [78.9, 1501.0], [79.0, 1502.0], [79.1, 1502.0], [79.2, 1503.0], [79.3, 1503.0], [79.4, 1505.0], [79.5, 1506.0], [79.6, 1509.0], [79.7, 1509.0], [79.8, 1510.0], [79.9, 1510.0], [80.0, 1517.0], [80.1, 1517.0], [80.2, 1518.0], [80.3, 1521.0], [80.4, 1521.0], [80.5, 1526.0], [80.6, 1529.0], [80.7, 1531.0], [80.8, 1531.0], [80.9, 1534.0], [81.0, 1535.0], [81.1, 1547.0], [81.2, 1547.0], [81.3, 1551.0], [81.4, 1552.0], [81.5, 1553.0], [81.6, 1553.0], [81.7, 1555.0], [81.8, 1559.0], [81.9, 1559.0], [82.0, 1567.0], [82.1, 1571.0], [82.2, 1574.0], [82.3, 1574.0], [82.4, 1575.0], [82.5, 1579.0], [82.6, 1581.0], [82.7, 1581.0], [82.8, 1581.0], [82.9, 1582.0], [83.0, 1583.0], [83.1, 1583.0], [83.2, 1588.0], [83.3, 1590.0], [83.4, 1590.0], [83.5, 1595.0], [83.6, 1598.0], [83.7, 1599.0], [83.8, 1599.0], [83.9, 1599.0], [84.0, 1600.0], [84.1, 1603.0], [84.2, 1603.0], [84.3, 1608.0], [84.4, 1608.0], [84.5, 1615.0], [84.6, 1615.0], [84.7, 1622.0], [84.8, 1625.0], [84.9, 1625.0], [85.0, 1625.0], [85.1, 1632.0], [85.2, 1640.0], [85.3, 1640.0], [85.4, 1648.0], [85.5, 1650.0], [85.6, 1650.0], [85.7, 1650.0], [85.8, 1650.0], [85.9, 1654.0], [86.0, 1658.0], [86.1, 1658.0], [86.2, 1660.0], [86.3, 1667.0], [86.4, 1668.0], [86.5, 1668.0], [86.6, 1668.0], [86.7, 1672.0], [86.8, 1672.0], [86.9, 1676.0], [87.0, 1680.0], [87.1, 1682.0], [87.2, 1682.0], [87.3, 1689.0], [87.4, 1690.0], [87.5, 1691.0], [87.6, 1691.0], [87.7, 1696.0], [87.8, 1696.0], [87.9, 1698.0], [88.0, 1698.0], [88.1, 1698.0], [88.2, 1702.0], [88.3, 1709.0], [88.4, 1709.0], [88.5, 1712.0], [88.6, 1718.0], [88.7, 1718.0], [88.8, 1725.0], [88.9, 1727.0], [89.0, 1736.0], [89.1, 1736.0], [89.2, 1737.0], [89.3, 1738.0], [89.4, 1740.0], [89.5, 1740.0], [89.6, 1742.0], [89.7, 1749.0], [89.8, 1751.0], [89.9, 1751.0], [90.0, 1760.0], [90.1, 1761.0], [90.2, 1761.0], [90.3, 1762.0], [90.4, 1763.0], [90.5, 1764.0], [90.6, 1764.0], [90.7, 1773.0], [90.8, 1777.0], [90.9, 1779.0], [91.0, 1779.0], [91.1, 1780.0], [91.2, 1782.0], [91.3, 1783.0], [91.4, 1783.0], [91.5, 1791.0], [91.6, 1797.0], [91.7, 1797.0], [91.8, 1799.0], [91.9, 1803.0], [92.0, 1806.0], [92.1, 1806.0], [92.2, 1806.0], [92.3, 1820.0], [92.4, 1824.0], [92.5, 1824.0], [92.6, 1839.0], [92.7, 1849.0], [92.8, 1855.0], [92.9, 1855.0], [93.0, 1858.0], [93.1, 1863.0], [93.2, 1866.0], [93.3, 1866.0], [93.4, 1872.0], [93.5, 1873.0], [93.6, 1873.0], [93.7, 1875.0], [93.8, 1889.0], [93.9, 1892.0], [94.0, 1892.0], [94.1, 1894.0], [94.2, 1902.0], [94.3, 1914.0], [94.4, 1914.0], [94.5, 1935.0], [94.6, 1936.0], [94.7, 1951.0], [94.8, 1951.0], [94.9, 1964.0], [95.0, 1967.0], [95.1, 1967.0], [95.2, 1999.0], [95.3, 2008.0], [95.4, 2035.0], [95.5, 2035.0], [95.6, 2056.0], [95.7, 2059.0], [95.8, 2063.0], [95.9, 2063.0], [96.0, 2069.0], [96.1, 2080.0], [96.2, 2128.0], [96.3, 2128.0], [96.4, 2150.0], [96.5, 2163.0], [96.6, 2182.0], [96.7, 2182.0], [96.8, 2199.0], [96.9, 2233.0], [97.0, 2233.0], [97.1, 2243.0], [97.2, 2245.0], [97.3, 2245.0], [97.4, 2245.0], [97.5, 2275.0], [97.6, 2275.0], [97.7, 2281.0], [97.8, 2281.0], [97.9, 2299.0], [98.0, 2344.0], [98.1, 2349.0], [98.2, 2349.0], [98.3, 2360.0], [98.4, 2411.0], [98.5, 2411.0], [98.6, 2448.0], [98.7, 2510.0], [98.8, 2541.0], [98.9, 2541.0], [99.0, 2564.0], [99.1, 2587.0], [99.2, 2849.0], [99.3, 2849.0], [99.4, 3035.0], [99.5, 3369.0], [99.6, 3420.0], [99.7, 3420.0], [99.8, 3618.0], [99.9, 3797.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 66.0, "series": [{"data": [[600.0, 66.0], [700.0, 64.0], [800.0, 35.0], [900.0, 40.0], [1000.0, 32.0], [1100.0, 50.0], [1200.0, 44.0], [1300.0, 41.0], [1400.0, 33.0], [1500.0, 39.0], [1600.0, 31.0], [1700.0, 27.0], [1800.0, 17.0], [1900.0, 8.0], [2000.0, 7.0], [2100.0, 5.0], [2300.0, 3.0], [2200.0, 8.0], [2400.0, 2.0], [2500.0, 4.0], [2800.0, 1.0], [3000.0, 1.0], [200.0, 16.0], [3300.0, 1.0], [3400.0, 1.0], [3600.0, 1.0], [3700.0, 1.0], [300.0, 50.0], [400.0, 54.0], [500.0, 53.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 121.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 458.0, "series": [{"data": [[0.0, 121.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 458.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 156.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.847972972972974, "minX": 1.60507482E12, "maxY": 10.0, "series": [{"data": [[1.60507482E12, 10.0], [1.60507488E12, 9.847972972972974]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507488E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 354.0, "minX": 1.0, "maxY": 2510.0, "series": [{"data": [[8.0, 354.0], [4.0, 2510.0], [2.0, 1098.0], [1.0, 2063.0], [9.0, 708.0], [10.0, 1053.3057851239676], [5.0, 704.0], [6.0, 702.0], [3.0, 693.0], [7.0, 678.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1053.3469387755108]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2223.9166666666665, "minX": 1.60507482E12, "maxY": 1164868.1166666667, "series": [{"data": [[1.60507482E12, 1164868.1166666667], [1.60507488E12, 671383.2833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507482E12, 3299.116666666667], [1.60507488E12, 2223.9166666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507488E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1028.6059225512531, "minX": 1.60507482E12, "maxY": 1090.0405405405395, "series": [{"data": [[1.60507482E12, 1028.6059225512531], [1.60507488E12, 1090.0405405405395]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507488E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1027.3416856492033, "minX": 1.60507482E12, "maxY": 1088.9324324324314, "series": [{"data": [[1.60507482E12, 1027.3416856492033], [1.60507488E12, 1088.9324324324314]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507488E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.043918918918918914, "minX": 1.60507482E12, "maxY": 0.19589977220956717, "series": [{"data": [[1.60507482E12, 0.19589977220956717], [1.60507488E12, 0.043918918918918914]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507488E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 201.0, "minX": 1.60507482E12, "maxY": 3797.0, "series": [{"data": [[1.60507482E12, 3797.0], [1.60507488E12, 2587.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507482E12, 221.71999926567076], [1.60507488E12, 327.6729999291897]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507482E12, 223.78000020980835], [1.60507488E12, 327.94030002832415]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507482E12, 222.89999973773956], [1.60507488E12, 327.82149996459486]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507482E12, 201.0], [1.60507488E12, 324.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507482E12, 916.0], [1.60507488E12, 1049.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507488E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 560.0, "minX": 1.0, "maxY": 2063.0, "series": [{"data": [[8.0, 1223.5], [9.0, 1098.0], [10.0, 1164.0], [11.0, 786.5], [3.0, 1051.0], [12.0, 783.0], [13.0, 752.5], [14.0, 752.0], [15.0, 698.0], [1.0, 2063.0], [17.0, 560.0], [6.0, 1253.0], [7.0, 1162.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 560.0, "minX": 1.0, "maxY": 2060.0, "series": [{"data": [[8.0, 1223.0], [9.0, 1098.0], [10.0, 1163.5], [11.0, 786.5], [3.0, 1047.0], [12.0, 782.5], [13.0, 752.5], [14.0, 751.5], [15.0, 698.0], [1.0, 2060.0], [17.0, 560.0], [6.0, 1251.5], [7.0, 1161.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.766666666666667, "minX": 1.60507482E12, "maxY": 7.483333333333333, "series": [{"data": [[1.60507482E12, 7.483333333333333], [1.60507488E12, 4.766666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507488E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.933333333333334, "minX": 1.60507482E12, "maxY": 7.316666666666666, "series": [{"data": [[1.60507482E12, 7.316666666666666], [1.60507488E12, 4.933333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507488E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.933333333333334, "minX": 1.60507482E12, "maxY": 7.316666666666666, "series": [{"data": [[1.60507482E12, 7.316666666666666], [1.60507488E12, 4.933333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507488E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.933333333333334, "minX": 1.60507482E12, "maxY": 7.316666666666666, "series": [{"data": [[1.60507482E12, 7.316666666666666], [1.60507488E12, 4.933333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507488E12, "title": "Total Transactions Per Second"}},
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

