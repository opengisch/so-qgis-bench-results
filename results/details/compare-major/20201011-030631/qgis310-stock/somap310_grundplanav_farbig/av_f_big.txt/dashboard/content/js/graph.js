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
        data: {"result": {"minY": 172.0, "minX": 0.0, "maxY": 3892.0, "series": [{"data": [[0.0, 172.0], [0.1, 172.0], [0.2, 188.0], [0.3, 198.0], [0.4, 198.0], [0.5, 199.0], [0.6, 200.0], [0.7, 203.0], [0.8, 203.0], [0.9, 204.0], [1.0, 204.0], [1.1, 205.0], [1.2, 205.0], [1.3, 208.0], [1.4, 210.0], [1.5, 211.0], [1.6, 211.0], [1.7, 211.0], [1.8, 211.0], [1.9, 211.0], [2.0, 211.0], [2.1, 212.0], [2.2, 212.0], [2.3, 212.0], [2.4, 223.0], [2.5, 223.0], [2.6, 225.0], [2.7, 225.0], [2.8, 227.0], [2.9, 228.0], [3.0, 229.0], [3.1, 229.0], [3.2, 231.0], [3.3, 240.0], [3.4, 240.0], [3.5, 296.0], [3.6, 307.0], [3.7, 308.0], [3.8, 308.0], [3.9, 321.0], [4.0, 321.0], [4.1, 322.0], [4.2, 322.0], [4.3, 323.0], [4.4, 323.0], [4.5, 326.0], [4.6, 326.0], [4.7, 327.0], [4.8, 328.0], [4.9, 329.0], [5.0, 329.0], [5.1, 329.0], [5.2, 332.0], [5.3, 332.0], [5.4, 332.0], [5.5, 333.0], [5.6, 334.0], [5.7, 334.0], [5.8, 336.0], [5.9, 338.0], [6.0, 338.0], [6.1, 338.0], [6.2, 339.0], [6.3, 340.0], [6.4, 341.0], [6.5, 341.0], [6.6, 342.0], [6.7, 342.0], [6.8, 342.0], [6.9, 343.0], [7.0, 343.0], [7.1, 346.0], [7.2, 346.0], [7.3, 352.0], [7.4, 352.0], [7.5, 352.0], [7.6, 352.0], [7.7, 353.0], [7.8, 356.0], [7.9, 356.0], [8.0, 356.0], [8.1, 357.0], [8.2, 357.0], [8.3, 360.0], [8.4, 360.0], [8.5, 360.0], [8.6, 362.0], [8.7, 362.0], [8.8, 364.0], [8.9, 365.0], [9.0, 369.0], [9.1, 369.0], [9.2, 375.0], [9.3, 376.0], [9.4, 385.0], [9.5, 385.0], [9.6, 387.0], [9.7, 390.0], [9.8, 392.0], [9.9, 392.0], [10.0, 397.0], [10.1, 406.0], [10.2, 406.0], [10.3, 406.0], [10.4, 407.0], [10.5, 409.0], [10.6, 409.0], [10.7, 411.0], [10.8, 415.0], [10.9, 416.0], [11.0, 416.0], [11.1, 417.0], [11.2, 419.0], [11.3, 420.0], [11.4, 420.0], [11.5, 421.0], [11.6, 425.0], [11.7, 425.0], [11.8, 425.0], [11.9, 428.0], [12.0, 429.0], [12.1, 429.0], [12.2, 429.0], [12.3, 433.0], [12.4, 433.0], [12.5, 433.0], [12.6, 433.0], [12.7, 435.0], [12.8, 435.0], [12.9, 435.0], [13.0, 436.0], [13.1, 437.0], [13.2, 437.0], [13.3, 437.0], [13.4, 438.0], [13.5, 439.0], [13.6, 439.0], [13.7, 440.0], [13.8, 441.0], [13.9, 442.0], [14.0, 442.0], [14.1, 443.0], [14.2, 444.0], [14.3, 444.0], [14.4, 444.0], [14.5, 446.0], [14.6, 447.0], [14.7, 448.0], [14.8, 448.0], [14.9, 448.0], [15.0, 448.0], [15.1, 448.0], [15.2, 449.0], [15.3, 449.0], [15.4, 449.0], [15.5, 449.0], [15.6, 450.0], [15.7, 450.0], [15.8, 451.0], [15.9, 451.0], [16.0, 451.0], [16.1, 451.0], [16.2, 452.0], [16.3, 452.0], [16.4, 452.0], [16.5, 454.0], [16.6, 454.0], [16.7, 454.0], [16.8, 459.0], [16.9, 461.0], [17.0, 461.0], [17.1, 462.0], [17.2, 463.0], [17.3, 468.0], [17.4, 468.0], [17.5, 469.0], [17.6, 471.0], [17.7, 471.0], [17.8, 471.0], [17.9, 471.0], [18.0, 472.0], [18.1, 472.0], [18.2, 472.0], [18.3, 474.0], [18.4, 474.0], [18.5, 474.0], [18.6, 476.0], [18.7, 478.0], [18.8, 479.0], [18.9, 479.0], [19.0, 482.0], [19.1, 490.0], [19.2, 491.0], [19.3, 491.0], [19.4, 494.0], [19.5, 496.0], [19.6, 498.0], [19.7, 498.0], [19.8, 501.0], [19.9, 502.0], [20.0, 505.0], [20.1, 505.0], [20.2, 506.0], [20.3, 508.0], [20.4, 508.0], [20.5, 511.0], [20.6, 514.0], [20.7, 517.0], [20.8, 517.0], [20.9, 524.0], [21.0, 532.0], [21.1, 534.0], [21.2, 534.0], [21.3, 536.0], [21.4, 537.0], [21.5, 537.0], [21.6, 537.0], [21.7, 538.0], [21.8, 538.0], [21.9, 538.0], [22.0, 540.0], [22.1, 540.0], [22.2, 546.0], [22.3, 546.0], [22.4, 548.0], [22.5, 553.0], [22.6, 554.0], [22.7, 554.0], [22.8, 554.0], [22.9, 555.0], [23.0, 564.0], [23.1, 564.0], [23.2, 568.0], [23.3, 569.0], [23.4, 569.0], [23.5, 570.0], [23.6, 575.0], [23.7, 580.0], [23.8, 580.0], [23.9, 581.0], [24.0, 583.0], [24.1, 586.0], [24.2, 586.0], [24.3, 586.0], [24.4, 588.0], [24.5, 588.0], [24.6, 588.0], [24.7, 588.0], [24.8, 591.0], [24.9, 592.0], [25.0, 592.0], [25.1, 593.0], [25.2, 595.0], [25.3, 595.0], [25.4, 596.0], [25.5, 596.0], [25.6, 599.0], [25.7, 599.0], [25.8, 603.0], [25.9, 603.0], [26.0, 605.0], [26.1, 605.0], [26.2, 605.0], [26.3, 605.0], [26.4, 607.0], [26.5, 607.0], [26.6, 608.0], [26.7, 608.0], [26.8, 608.0], [26.9, 611.0], [27.0, 614.0], [27.1, 615.0], [27.2, 615.0], [27.3, 615.0], [27.4, 615.0], [27.5, 616.0], [27.6, 616.0], [27.7, 619.0], [27.8, 621.0], [27.9, 622.0], [28.0, 622.0], [28.1, 628.0], [28.2, 630.0], [28.3, 631.0], [28.4, 631.0], [28.5, 631.0], [28.6, 633.0], [28.7, 633.0], [28.8, 633.0], [28.9, 635.0], [29.0, 636.0], [29.1, 636.0], [29.2, 637.0], [29.3, 639.0], [29.4, 641.0], [29.5, 641.0], [29.6, 643.0], [29.7, 644.0], [29.8, 645.0], [29.9, 645.0], [30.0, 645.0], [30.1, 645.0], [30.2, 645.0], [30.3, 646.0], [30.4, 649.0], [30.5, 652.0], [30.6, 652.0], [30.7, 653.0], [30.8, 654.0], [30.9, 655.0], [31.0, 655.0], [31.1, 655.0], [31.2, 656.0], [31.3, 658.0], [31.4, 658.0], [31.5, 660.0], [31.6, 660.0], [31.7, 660.0], [31.8, 660.0], [31.9, 660.0], [32.0, 662.0], [32.1, 662.0], [32.2, 665.0], [32.3, 670.0], [32.4, 674.0], [32.5, 674.0], [32.6, 677.0], [32.7, 678.0], [32.8, 678.0], [32.9, 678.0], [33.0, 679.0], [33.1, 680.0], [33.2, 680.0], [33.3, 680.0], [33.4, 681.0], [33.5, 681.0], [33.6, 681.0], [33.7, 683.0], [33.8, 684.0], [33.9, 686.0], [34.0, 686.0], [34.1, 686.0], [34.2, 688.0], [34.3, 692.0], [34.4, 692.0], [34.5, 694.0], [34.6, 694.0], [34.7, 699.0], [34.8, 699.0], [34.9, 703.0], [35.0, 706.0], [35.1, 706.0], [35.2, 707.0], [35.3, 708.0], [35.4, 710.0], [35.5, 710.0], [35.6, 713.0], [35.7, 713.0], [35.8, 714.0], [35.9, 714.0], [36.0, 715.0], [36.1, 715.0], [36.2, 716.0], [36.3, 716.0], [36.4, 719.0], [36.5, 719.0], [36.6, 721.0], [36.7, 721.0], [36.8, 722.0], [36.9, 722.0], [37.0, 722.0], [37.1, 723.0], [37.2, 725.0], [37.3, 725.0], [37.4, 725.0], [37.5, 728.0], [37.6, 729.0], [37.7, 729.0], [37.8, 729.0], [37.9, 730.0], [38.0, 730.0], [38.1, 733.0], [38.2, 733.0], [38.3, 733.0], [38.4, 742.0], [38.5, 742.0], [38.6, 743.0], [38.7, 746.0], [38.8, 747.0], [38.9, 747.0], [39.0, 750.0], [39.1, 750.0], [39.2, 752.0], [39.3, 752.0], [39.4, 752.0], [39.5, 753.0], [39.6, 755.0], [39.7, 755.0], [39.8, 755.0], [39.9, 758.0], [40.0, 759.0], [40.1, 759.0], [40.2, 762.0], [40.3, 763.0], [40.4, 763.0], [40.5, 763.0], [40.6, 765.0], [40.7, 765.0], [40.8, 765.0], [40.9, 766.0], [41.0, 766.0], [41.1, 767.0], [41.2, 767.0], [41.3, 768.0], [41.4, 768.0], [41.5, 769.0], [41.6, 769.0], [41.7, 774.0], [41.8, 777.0], [41.9, 777.0], [42.0, 779.0], [42.1, 780.0], [42.2, 781.0], [42.3, 781.0], [42.4, 782.0], [42.5, 782.0], [42.6, 783.0], [42.7, 783.0], [42.8, 785.0], [42.9, 794.0], [43.0, 796.0], [43.1, 796.0], [43.2, 801.0], [43.3, 802.0], [43.4, 802.0], [43.5, 807.0], [43.6, 808.0], [43.7, 808.0], [43.8, 808.0], [43.9, 808.0], [44.0, 809.0], [44.1, 810.0], [44.2, 810.0], [44.3, 811.0], [44.4, 812.0], [44.5, 812.0], [44.6, 812.0], [44.7, 813.0], [44.8, 816.0], [44.9, 818.0], [45.0, 818.0], [45.1, 821.0], [45.2, 826.0], [45.3, 826.0], [45.4, 827.0], [45.5, 830.0], [45.6, 830.0], [45.7, 830.0], [45.8, 836.0], [45.9, 836.0], [46.0, 838.0], [46.1, 838.0], [46.2, 840.0], [46.3, 843.0], [46.4, 843.0], [46.5, 843.0], [46.6, 843.0], [46.7, 844.0], [46.8, 844.0], [46.9, 844.0], [47.0, 845.0], [47.1, 846.0], [47.2, 846.0], [47.3, 850.0], [47.4, 851.0], [47.5, 851.0], [47.6, 851.0], [47.7, 852.0], [47.8, 855.0], [47.9, 855.0], [48.0, 855.0], [48.1, 858.0], [48.2, 859.0], [48.3, 860.0], [48.4, 860.0], [48.5, 861.0], [48.6, 864.0], [48.7, 864.0], [48.8, 864.0], [48.9, 867.0], [49.0, 871.0], [49.1, 871.0], [49.2, 874.0], [49.3, 876.0], [49.4, 877.0], [49.5, 877.0], [49.6, 879.0], [49.7, 882.0], [49.8, 882.0], [49.9, 882.0], [50.0, 883.0], [50.1, 885.0], [50.2, 885.0], [50.3, 886.0], [50.4, 886.0], [50.5, 889.0], [50.6, 889.0], [50.7, 889.0], [50.8, 891.0], [50.9, 892.0], [51.0, 892.0], [51.1, 893.0], [51.2, 893.0], [51.3, 894.0], [51.4, 894.0], [51.5, 894.0], [51.6, 900.0], [51.7, 900.0], [51.8, 900.0], [51.9, 901.0], [52.0, 901.0], [52.1, 901.0], [52.2, 902.0], [52.3, 906.0], [52.4, 906.0], [52.5, 906.0], [52.6, 909.0], [52.7, 912.0], [52.8, 920.0], [52.9, 920.0], [53.0, 924.0], [53.1, 926.0], [53.2, 929.0], [53.3, 929.0], [53.4, 934.0], [53.5, 934.0], [53.6, 934.0], [53.7, 935.0], [53.8, 937.0], [53.9, 937.0], [54.0, 937.0], [54.1, 939.0], [54.2, 939.0], [54.3, 940.0], [54.4, 940.0], [54.5, 940.0], [54.6, 941.0], [54.7, 942.0], [54.8, 942.0], [54.9, 942.0], [55.0, 946.0], [55.1, 946.0], [55.2, 948.0], [55.3, 951.0], [55.4, 951.0], [55.5, 951.0], [55.6, 959.0], [55.7, 960.0], [55.8, 961.0], [55.9, 961.0], [56.0, 964.0], [56.1, 964.0], [56.2, 965.0], [56.3, 965.0], [56.4, 966.0], [56.5, 967.0], [56.6, 974.0], [56.7, 974.0], [56.8, 974.0], [56.9, 976.0], [57.0, 976.0], [57.1, 984.0], [57.2, 985.0], [57.3, 986.0], [57.4, 986.0], [57.5, 987.0], [57.6, 989.0], [57.7, 990.0], [57.8, 990.0], [57.9, 991.0], [58.0, 997.0], [58.1, 999.0], [58.2, 999.0], [58.3, 999.0], [58.4, 1000.0], [58.5, 1000.0], [58.6, 1000.0], [58.7, 1004.0], [58.8, 1008.0], [58.9, 1008.0], [59.0, 1014.0], [59.1, 1014.0], [59.2, 1019.0], [59.3, 1019.0], [59.4, 1021.0], [59.5, 1024.0], [59.6, 1029.0], [59.7, 1029.0], [59.8, 1029.0], [59.9, 1032.0], [60.0, 1033.0], [60.1, 1033.0], [60.2, 1037.0], [60.3, 1047.0], [60.4, 1047.0], [60.5, 1052.0], [60.6, 1054.0], [60.7, 1055.0], [60.8, 1055.0], [60.9, 1055.0], [61.0, 1060.0], [61.1, 1066.0], [61.2, 1066.0], [61.3, 1069.0], [61.4, 1071.0], [61.5, 1073.0], [61.6, 1073.0], [61.7, 1075.0], [61.8, 1076.0], [61.9, 1076.0], [62.0, 1081.0], [62.1, 1081.0], [62.2, 1083.0], [62.3, 1083.0], [62.4, 1091.0], [62.5, 1092.0], [62.6, 1092.0], [62.7, 1092.0], [62.8, 1096.0], [62.9, 1099.0], [63.0, 1099.0], [63.1, 1099.0], [63.2, 1099.0], [63.3, 1100.0], [63.4, 1100.0], [63.5, 1106.0], [63.6, 1107.0], [63.7, 1120.0], [63.8, 1120.0], [63.9, 1122.0], [64.0, 1123.0], [64.1, 1124.0], [64.2, 1124.0], [64.3, 1127.0], [64.4, 1131.0], [64.5, 1138.0], [64.6, 1138.0], [64.7, 1143.0], [64.8, 1143.0], [64.9, 1144.0], [65.0, 1144.0], [65.1, 1149.0], [65.2, 1152.0], [65.3, 1152.0], [65.4, 1152.0], [65.5, 1157.0], [65.6, 1158.0], [65.7, 1158.0], [65.8, 1161.0], [65.9, 1162.0], [66.0, 1162.0], [66.1, 1162.0], [66.2, 1163.0], [66.3, 1163.0], [66.4, 1164.0], [66.5, 1164.0], [66.6, 1165.0], [66.7, 1170.0], [66.8, 1170.0], [66.9, 1171.0], [67.0, 1176.0], [67.1, 1179.0], [67.2, 1179.0], [67.3, 1179.0], [67.4, 1181.0], [67.5, 1185.0], [67.6, 1185.0], [67.7, 1186.0], [67.8, 1186.0], [67.9, 1195.0], [68.0, 1195.0], [68.1, 1196.0], [68.2, 1197.0], [68.3, 1198.0], [68.4, 1198.0], [68.5, 1208.0], [68.6, 1210.0], [68.7, 1210.0], [68.8, 1212.0], [68.9, 1215.0], [69.0, 1215.0], [69.1, 1215.0], [69.2, 1217.0], [69.3, 1217.0], [69.4, 1220.0], [69.5, 1220.0], [69.6, 1221.0], [69.7, 1223.0], [69.8, 1224.0], [69.9, 1224.0], [70.0, 1224.0], [70.1, 1225.0], [70.2, 1225.0], [70.3, 1225.0], [70.4, 1226.0], [70.5, 1234.0], [70.6, 1234.0], [70.7, 1235.0], [70.8, 1236.0], [70.9, 1237.0], [71.0, 1237.0], [71.1, 1237.0], [71.2, 1237.0], [71.3, 1242.0], [71.4, 1242.0], [71.5, 1243.0], [71.6, 1243.0], [71.7, 1243.0], [71.8, 1245.0], [71.9, 1248.0], [72.0, 1249.0], [72.1, 1249.0], [72.2, 1253.0], [72.3, 1256.0], [72.4, 1258.0], [72.5, 1258.0], [72.6, 1259.0], [72.7, 1263.0], [72.8, 1267.0], [72.9, 1267.0], [73.0, 1275.0], [73.1, 1277.0], [73.2, 1278.0], [73.3, 1278.0], [73.4, 1282.0], [73.5, 1283.0], [73.6, 1283.0], [73.7, 1284.0], [73.8, 1288.0], [73.9, 1291.0], [74.0, 1291.0], [74.1, 1301.0], [74.2, 1308.0], [74.3, 1309.0], [74.4, 1309.0], [74.5, 1313.0], [74.6, 1316.0], [74.7, 1317.0], [74.8, 1317.0], [74.9, 1322.0], [75.0, 1326.0], [75.1, 1326.0], [75.2, 1327.0], [75.3, 1332.0], [75.4, 1335.0], [75.5, 1335.0], [75.6, 1346.0], [75.7, 1350.0], [75.8, 1351.0], [75.9, 1351.0], [76.0, 1352.0], [76.1, 1359.0], [76.2, 1360.0], [76.3, 1360.0], [76.4, 1360.0], [76.5, 1367.0], [76.6, 1374.0], [76.7, 1374.0], [76.8, 1376.0], [76.9, 1381.0], [77.0, 1381.0], [77.1, 1386.0], [77.2, 1404.0], [77.3, 1405.0], [77.4, 1405.0], [77.5, 1407.0], [77.6, 1407.0], [77.7, 1409.0], [77.8, 1409.0], [77.9, 1413.0], [78.0, 1417.0], [78.1, 1421.0], [78.2, 1421.0], [78.3, 1423.0], [78.4, 1423.0], [78.5, 1423.0], [78.6, 1424.0], [78.7, 1431.0], [78.8, 1432.0], [78.9, 1432.0], [79.0, 1441.0], [79.1, 1442.0], [79.2, 1445.0], [79.3, 1445.0], [79.4, 1447.0], [79.5, 1453.0], [79.6, 1457.0], [79.7, 1457.0], [79.8, 1460.0], [79.9, 1462.0], [80.0, 1464.0], [80.1, 1464.0], [80.2, 1467.0], [80.3, 1476.0], [80.4, 1476.0], [80.5, 1477.0], [80.6, 1488.0], [80.7, 1491.0], [80.8, 1491.0], [80.9, 1494.0], [81.0, 1495.0], [81.1, 1495.0], [81.2, 1495.0], [81.3, 1495.0], [81.4, 1498.0], [81.5, 1504.0], [81.6, 1504.0], [81.7, 1509.0], [81.8, 1511.0], [81.9, 1511.0], [82.0, 1517.0], [82.1, 1520.0], [82.2, 1525.0], [82.3, 1525.0], [82.4, 1530.0], [82.5, 1538.0], [82.6, 1546.0], [82.7, 1546.0], [82.8, 1551.0], [82.9, 1553.0], [83.0, 1554.0], [83.1, 1554.0], [83.2, 1558.0], [83.3, 1561.0], [83.4, 1561.0], [83.5, 1575.0], [83.6, 1586.0], [83.7, 1590.0], [83.8, 1590.0], [83.9, 1592.0], [84.0, 1594.0], [84.1, 1594.0], [84.2, 1594.0], [84.3, 1594.0], [84.4, 1594.0], [84.5, 1595.0], [84.6, 1595.0], [84.7, 1595.0], [84.8, 1598.0], [84.9, 1600.0], [85.0, 1600.0], [85.1, 1601.0], [85.2, 1606.0], [85.3, 1606.0], [85.4, 1615.0], [85.5, 1615.0], [85.6, 1626.0], [85.7, 1626.0], [85.8, 1626.0], [85.9, 1630.0], [86.0, 1639.0], [86.1, 1639.0], [86.2, 1640.0], [86.3, 1641.0], [86.4, 1644.0], [86.5, 1644.0], [86.6, 1645.0], [86.7, 1648.0], [86.8, 1648.0], [86.9, 1648.0], [87.0, 1648.0], [87.1, 1652.0], [87.2, 1652.0], [87.3, 1653.0], [87.4, 1654.0], [87.5, 1656.0], [87.6, 1656.0], [87.7, 1657.0], [87.8, 1659.0], [87.9, 1662.0], [88.0, 1662.0], [88.1, 1663.0], [88.2, 1664.0], [88.3, 1666.0], [88.4, 1666.0], [88.5, 1673.0], [88.6, 1673.0], [88.7, 1673.0], [88.8, 1679.0], [88.9, 1685.0], [89.0, 1694.0], [89.1, 1694.0], [89.2, 1700.0], [89.3, 1701.0], [89.4, 1702.0], [89.5, 1702.0], [89.6, 1705.0], [89.7, 1706.0], [89.8, 1709.0], [89.9, 1709.0], [90.0, 1711.0], [90.1, 1720.0], [90.2, 1720.0], [90.3, 1722.0], [90.4, 1722.0], [90.5, 1726.0], [90.6, 1726.0], [90.7, 1731.0], [90.8, 1733.0], [90.9, 1737.0], [91.0, 1737.0], [91.1, 1737.0], [91.2, 1746.0], [91.3, 1747.0], [91.4, 1747.0], [91.5, 1747.0], [91.6, 1751.0], [91.7, 1751.0], [91.8, 1755.0], [91.9, 1765.0], [92.0, 1773.0], [92.1, 1773.0], [92.2, 1774.0], [92.3, 1781.0], [92.4, 1791.0], [92.5, 1791.0], [92.6, 1794.0], [92.7, 1794.0], [92.8, 1822.0], [92.9, 1822.0], [93.0, 1824.0], [93.1, 1828.0], [93.2, 1833.0], [93.3, 1833.0], [93.4, 1850.0], [93.5, 1863.0], [93.6, 1863.0], [93.7, 1870.0], [93.8, 1871.0], [93.9, 1878.0], [94.0, 1878.0], [94.1, 1881.0], [94.2, 1889.0], [94.3, 1897.0], [94.4, 1897.0], [94.5, 1909.0], [94.6, 1914.0], [94.7, 1937.0], [94.8, 1937.0], [94.9, 1957.0], [95.0, 2017.0], [95.1, 2017.0], [95.2, 2018.0], [95.3, 2027.0], [95.4, 2029.0], [95.5, 2029.0], [95.6, 2039.0], [95.7, 2048.0], [95.8, 2075.0], [95.9, 2075.0], [96.0, 2084.0], [96.1, 2086.0], [96.2, 2090.0], [96.3, 2090.0], [96.4, 2142.0], [96.5, 2160.0], [96.6, 2177.0], [96.7, 2177.0], [96.8, 2220.0], [96.9, 2253.0], [97.0, 2253.0], [97.1, 2280.0], [97.2, 2394.0], [97.3, 2464.0], [97.4, 2464.0], [97.5, 2478.0], [97.6, 2526.0], [97.7, 2634.0], [97.8, 2634.0], [97.9, 2721.0], [98.0, 2742.0], [98.1, 2757.0], [98.2, 2757.0], [98.3, 2757.0], [98.4, 2822.0], [98.5, 2822.0], [98.6, 2840.0], [98.7, 2898.0], [98.8, 2955.0], [98.9, 2955.0], [99.0, 2997.0], [99.1, 3075.0], [99.2, 3183.0], [99.3, 3183.0], [99.4, 3193.0], [99.5, 3316.0], [99.6, 3737.0], [99.7, 3737.0], [99.8, 3842.0], [99.9, 3892.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 71.0, "series": [{"data": [[600.0, 67.0], [700.0, 61.0], [800.0, 62.0], [900.0, 50.0], [1000.0, 36.0], [1100.0, 38.0], [1200.0, 41.0], [1300.0, 23.0], [1400.0, 32.0], [1500.0, 25.0], [100.0, 4.0], [1600.0, 31.0], [1700.0, 27.0], [1800.0, 12.0], [1900.0, 4.0], [2000.0, 10.0], [2100.0, 3.0], [2300.0, 1.0], [2200.0, 3.0], [2400.0, 2.0], [2500.0, 1.0], [2600.0, 1.0], [2700.0, 4.0], [2800.0, 3.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 2.0], [3300.0, 1.0], [200.0, 22.0], [3700.0, 1.0], [3800.0, 2.0], [300.0, 48.0], [400.0, 71.0], [500.0, 44.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 136.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 454.0, "series": [{"data": [[0.0, 145.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 454.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 136.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.49438202247191, "minX": 1.60238652E12, "maxY": 10.0, "series": [{"data": [[1.60238652E12, 10.0], [1.60238664E12, 9.49438202247191], [1.60238658E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238664E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 343.0, "minX": 1.0, "maxY": 1733.0, "series": [{"data": [[8.0, 713.0], [4.0, 1138.0], [2.0, 1208.0], [1.0, 1071.0], [9.0, 357.0], [10.0, 1009.1625344352613], [5.0, 1733.0], [6.0, 678.0], [3.0, 715.0], [7.0, 343.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1007.6299319727887]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 358.9, "minX": 1.60238652E12, "maxY": 1478833.4666666666, "series": [{"data": [[1.60238652E12, 148116.55], [1.60238664E12, 208827.6], [1.60238658E12, 1478833.4666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60238652E12, 358.9], [1.60238664E12, 658.15], [1.60238658E12, 4505.983333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238664E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 883.4269662921349, "minX": 1.60238652E12, "maxY": 1297.3333333333333, "series": [{"data": [[1.60238652E12, 1297.3333333333333], [1.60238664E12, 883.4269662921349], [1.60238658E12, 1002.8612040133771]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238664E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 882.2921348314605, "minX": 1.60238652E12, "maxY": 1295.8333333333333, "series": [{"data": [[1.60238652E12, 1295.8333333333333], [1.60238664E12, 882.2921348314605], [1.60238658E12, 1001.6170568561871]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238664E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60238652E12, "maxY": 1.7083333333333337, "series": [{"data": [[1.60238652E12, 1.7083333333333337], [1.60238664E12, 0.0], [1.60238658E12, 0.01839464882943144]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238664E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 172.0, "minX": 1.60238652E12, "maxY": 3892.0, "series": [{"data": [[1.60238652E12, 3737.0], [1.60238664E12, 2742.0], [1.60238658E12, 3892.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60238652E12, 198.0], [1.60238664E12, 205.0], [1.60238658E12, 205.56399942874907]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60238652E12, 198.0], [1.60238664E12, 205.0], [1.60238658E12, 207.72040022850035]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60238652E12, 198.0], [1.60238664E12, 205.0], [1.60238658E12, 206.76199971437455]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60238652E12, 198.0], [1.60238664E12, 205.0], [1.60238658E12, 172.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60238652E12, 827.5], [1.60238664E12, 758.0], [1.60238658E12, 893.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238664E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 554.0, "minX": 1.0, "maxY": 2859.0, "series": [{"data": [[2.0, 2859.0], [8.0, 1053.0], [9.0, 1014.0], [10.0, 992.5], [11.0, 901.5], [12.0, 747.5], [13.0, 807.5], [14.0, 755.5], [15.0, 683.0], [16.0, 734.0], [1.0, 1071.0], [17.0, 554.0], [5.0, 1520.0], [6.0, 1034.0], [7.0, 1108.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 554.0, "minX": 1.0, "maxY": 2855.0, "series": [{"data": [[2.0, 2855.0], [8.0, 1052.0], [9.0, 1014.0], [10.0, 990.0], [11.0, 901.0], [12.0, 745.5], [13.0, 806.0], [14.0, 755.0], [15.0, 683.0], [16.0, 733.5], [1.0, 1071.0], [17.0, 554.0], [5.0, 1519.0], [6.0, 1033.5], [7.0, 1105.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.9666666666666667, "minX": 1.60238652E12, "maxY": 9.966666666666667, "series": [{"data": [[1.60238652E12, 0.9666666666666667], [1.60238664E12, 1.3166666666666667], [1.60238658E12, 9.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238664E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8, "minX": 1.60238652E12, "maxY": 9.966666666666667, "series": [{"data": [[1.60238652E12, 0.8], [1.60238664E12, 1.4833333333333334], [1.60238658E12, 9.966666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238664E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8, "minX": 1.60238652E12, "maxY": 9.966666666666667, "series": [{"data": [[1.60238652E12, 0.8], [1.60238664E12, 1.4833333333333334], [1.60238658E12, 9.966666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238664E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8, "minX": 1.60238652E12, "maxY": 9.966666666666667, "series": [{"data": [[1.60238652E12, 0.8], [1.60238664E12, 1.4833333333333334], [1.60238658E12, 9.966666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238664E12, "title": "Total Transactions Per Second"}},
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

