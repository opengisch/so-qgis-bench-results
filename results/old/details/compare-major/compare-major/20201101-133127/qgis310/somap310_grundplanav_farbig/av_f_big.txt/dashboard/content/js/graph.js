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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 3848.0, "series": [{"data": [[0.0, 175.0], [0.1, 175.0], [0.2, 189.0], [0.3, 193.0], [0.4, 193.0], [0.5, 205.0], [0.6, 209.0], [0.7, 212.0], [0.8, 212.0], [0.9, 212.0], [1.0, 214.0], [1.1, 217.0], [1.2, 217.0], [1.3, 220.0], [1.4, 220.0], [1.5, 221.0], [1.6, 221.0], [1.7, 222.0], [1.8, 223.0], [1.9, 223.0], [2.0, 225.0], [2.1, 227.0], [2.2, 235.0], [2.3, 235.0], [2.4, 246.0], [2.5, 247.0], [2.6, 255.0], [2.7, 255.0], [2.8, 257.0], [2.9, 281.0], [3.0, 305.0], [3.1, 305.0], [3.2, 311.0], [3.3, 311.0], [3.4, 311.0], [3.5, 313.0], [3.6, 317.0], [3.7, 323.0], [3.8, 323.0], [3.9, 326.0], [4.0, 328.0], [4.1, 332.0], [4.2, 332.0], [4.3, 334.0], [4.4, 336.0], [4.5, 343.0], [4.6, 343.0], [4.7, 344.0], [4.8, 347.0], [4.9, 350.0], [5.0, 350.0], [5.1, 350.0], [5.2, 350.0], [5.3, 350.0], [5.4, 354.0], [5.5, 354.0], [5.6, 356.0], [5.7, 356.0], [5.8, 357.0], [5.9, 357.0], [6.0, 358.0], [6.1, 358.0], [6.2, 359.0], [6.3, 361.0], [6.4, 361.0], [6.5, 361.0], [6.6, 361.0], [6.7, 371.0], [6.8, 371.0], [6.9, 375.0], [7.0, 375.0], [7.1, 377.0], [7.2, 377.0], [7.3, 378.0], [7.4, 378.0], [7.5, 384.0], [7.6, 384.0], [7.7, 385.0], [7.8, 388.0], [7.9, 388.0], [8.0, 388.0], [8.1, 389.0], [8.2, 389.0], [8.3, 395.0], [8.4, 395.0], [8.5, 399.0], [8.6, 400.0], [8.7, 400.0], [8.8, 400.0], [8.9, 408.0], [9.0, 415.0], [9.1, 415.0], [9.2, 416.0], [9.3, 417.0], [9.4, 425.0], [9.5, 425.0], [9.6, 426.0], [9.7, 428.0], [9.8, 430.0], [9.9, 430.0], [10.0, 434.0], [10.1, 434.0], [10.2, 434.0], [10.3, 436.0], [10.4, 437.0], [10.5, 440.0], [10.6, 440.0], [10.7, 442.0], [10.8, 443.0], [10.9, 443.0], [11.0, 443.0], [11.1, 446.0], [11.2, 446.0], [11.3, 448.0], [11.4, 448.0], [11.5, 449.0], [11.6, 450.0], [11.7, 450.0], [11.8, 451.0], [11.9, 452.0], [12.0, 454.0], [12.1, 454.0], [12.2, 457.0], [12.3, 459.0], [12.4, 461.0], [12.5, 461.0], [12.6, 462.0], [12.7, 463.0], [12.8, 464.0], [12.9, 464.0], [13.0, 466.0], [13.1, 468.0], [13.2, 469.0], [13.3, 469.0], [13.4, 469.0], [13.5, 473.0], [13.6, 473.0], [13.7, 473.0], [13.8, 473.0], [13.9, 475.0], [14.0, 475.0], [14.1, 476.0], [14.2, 476.0], [14.3, 476.0], [14.4, 476.0], [14.5, 478.0], [14.6, 479.0], [14.7, 480.0], [14.8, 480.0], [14.9, 480.0], [15.0, 481.0], [15.1, 481.0], [15.2, 481.0], [15.3, 484.0], [15.4, 493.0], [15.5, 493.0], [15.6, 495.0], [15.7, 496.0], [15.8, 517.0], [15.9, 517.0], [16.0, 523.0], [16.1, 524.0], [16.2, 527.0], [16.3, 527.0], [16.4, 532.0], [16.5, 539.0], [16.6, 541.0], [16.7, 541.0], [16.8, 541.0], [16.9, 542.0], [17.0, 542.0], [17.1, 543.0], [17.2, 545.0], [17.3, 545.0], [17.4, 545.0], [17.5, 545.0], [17.6, 546.0], [17.7, 547.0], [17.8, 547.0], [17.9, 547.0], [18.0, 549.0], [18.1, 552.0], [18.2, 552.0], [18.3, 552.0], [18.4, 552.0], [18.5, 552.0], [18.6, 553.0], [18.7, 557.0], [18.8, 559.0], [18.9, 559.0], [19.0, 560.0], [19.1, 562.0], [19.2, 563.0], [19.3, 563.0], [19.4, 565.0], [19.5, 568.0], [19.6, 569.0], [19.7, 569.0], [19.8, 572.0], [19.9, 578.0], [20.0, 579.0], [20.1, 579.0], [20.2, 585.0], [20.3, 588.0], [20.4, 588.0], [20.5, 595.0], [20.6, 597.0], [20.7, 597.0], [20.8, 597.0], [20.9, 599.0], [21.0, 599.0], [21.1, 608.0], [21.2, 608.0], [21.3, 610.0], [21.4, 610.0], [21.5, 610.0], [21.6, 610.0], [21.7, 611.0], [21.8, 613.0], [21.9, 613.0], [22.0, 614.0], [22.1, 615.0], [22.2, 615.0], [22.3, 615.0], [22.4, 616.0], [22.5, 616.0], [22.6, 622.0], [22.7, 622.0], [22.8, 626.0], [22.9, 626.0], [23.0, 627.0], [23.1, 627.0], [23.2, 630.0], [23.3, 631.0], [23.4, 631.0], [23.5, 634.0], [23.6, 635.0], [23.7, 635.0], [23.8, 635.0], [23.9, 636.0], [24.0, 637.0], [24.1, 638.0], [24.2, 638.0], [24.3, 642.0], [24.4, 643.0], [24.5, 644.0], [24.6, 644.0], [24.7, 648.0], [24.8, 649.0], [24.9, 651.0], [25.0, 651.0], [25.1, 652.0], [25.2, 653.0], [25.3, 653.0], [25.4, 654.0], [25.5, 654.0], [25.6, 658.0], [25.7, 658.0], [25.8, 658.0], [25.9, 659.0], [26.0, 659.0], [26.1, 659.0], [26.2, 660.0], [26.3, 660.0], [26.4, 660.0], [26.5, 660.0], [26.6, 662.0], [26.7, 667.0], [26.8, 667.0], [26.9, 668.0], [27.0, 669.0], [27.1, 671.0], [27.2, 671.0], [27.3, 673.0], [27.4, 674.0], [27.5, 675.0], [27.6, 675.0], [27.7, 677.0], [27.8, 678.0], [27.9, 678.0], [28.0, 678.0], [28.1, 679.0], [28.2, 679.0], [28.3, 680.0], [28.4, 680.0], [28.5, 683.0], [28.6, 687.0], [28.7, 687.0], [28.8, 687.0], [28.9, 689.0], [29.0, 691.0], [29.1, 691.0], [29.2, 693.0], [29.3, 693.0], [29.4, 694.0], [29.5, 694.0], [29.6, 695.0], [29.7, 695.0], [29.8, 698.0], [29.9, 698.0], [30.0, 698.0], [30.1, 700.0], [30.2, 700.0], [30.3, 701.0], [30.4, 704.0], [30.5, 705.0], [30.6, 705.0], [30.7, 706.0], [30.8, 707.0], [30.9, 711.0], [31.0, 711.0], [31.1, 712.0], [31.2, 712.0], [31.3, 714.0], [31.4, 714.0], [31.5, 716.0], [31.6, 716.0], [31.7, 716.0], [31.8, 719.0], [31.9, 719.0], [32.0, 720.0], [32.1, 720.0], [32.2, 723.0], [32.3, 726.0], [32.4, 728.0], [32.5, 728.0], [32.6, 729.0], [32.7, 730.0], [32.8, 732.0], [32.9, 732.0], [33.0, 732.0], [33.1, 733.0], [33.2, 736.0], [33.3, 736.0], [33.4, 737.0], [33.5, 738.0], [33.6, 738.0], [33.7, 740.0], [33.8, 741.0], [33.9, 741.0], [34.0, 741.0], [34.1, 743.0], [34.2, 744.0], [34.3, 744.0], [34.4, 744.0], [34.5, 748.0], [34.6, 752.0], [34.7, 752.0], [34.8, 752.0], [34.9, 753.0], [35.0, 761.0], [35.1, 761.0], [35.2, 763.0], [35.3, 767.0], [35.4, 768.0], [35.5, 768.0], [35.6, 769.0], [35.7, 770.0], [35.8, 771.0], [35.9, 771.0], [36.0, 775.0], [36.1, 776.0], [36.2, 778.0], [36.3, 778.0], [36.4, 778.0], [36.5, 780.0], [36.6, 782.0], [36.7, 782.0], [36.8, 783.0], [36.9, 787.0], [37.0, 787.0], [37.1, 794.0], [37.2, 795.0], [37.3, 800.0], [37.4, 800.0], [37.5, 801.0], [37.6, 801.0], [37.7, 802.0], [37.8, 802.0], [37.9, 802.0], [38.0, 803.0], [38.1, 803.0], [38.2, 803.0], [38.3, 807.0], [38.4, 807.0], [38.5, 807.0], [38.6, 814.0], [38.7, 815.0], [38.8, 815.0], [38.9, 815.0], [39.0, 816.0], [39.1, 817.0], [39.2, 823.0], [39.3, 823.0], [39.4, 824.0], [39.5, 826.0], [39.6, 826.0], [39.7, 826.0], [39.8, 826.0], [39.9, 829.0], [40.0, 830.0], [40.1, 830.0], [40.2, 832.0], [40.3, 833.0], [40.4, 833.0], [40.5, 834.0], [40.6, 836.0], [40.7, 837.0], [40.8, 837.0], [40.9, 839.0], [41.0, 841.0], [41.1, 844.0], [41.2, 844.0], [41.3, 849.0], [41.4, 850.0], [41.5, 853.0], [41.6, 853.0], [41.7, 854.0], [41.8, 854.0], [41.9, 854.0], [42.0, 854.0], [42.1, 854.0], [42.2, 855.0], [42.3, 855.0], [42.4, 860.0], [42.5, 860.0], [42.6, 860.0], [42.7, 860.0], [42.8, 863.0], [42.9, 864.0], [43.0, 865.0], [43.1, 865.0], [43.2, 875.0], [43.3, 876.0], [43.4, 876.0], [43.5, 877.0], [43.6, 878.0], [43.7, 880.0], [43.8, 880.0], [43.9, 884.0], [44.0, 884.0], [44.1, 887.0], [44.2, 887.0], [44.3, 889.0], [44.4, 892.0], [44.5, 893.0], [44.6, 893.0], [44.7, 895.0], [44.8, 895.0], [44.9, 897.0], [45.0, 897.0], [45.1, 902.0], [45.2, 903.0], [45.3, 903.0], [45.4, 903.0], [45.5, 910.0], [45.6, 911.0], [45.7, 911.0], [45.8, 911.0], [45.9, 911.0], [46.0, 917.0], [46.1, 917.0], [46.2, 917.0], [46.3, 917.0], [46.4, 919.0], [46.5, 919.0], [46.6, 922.0], [46.7, 924.0], [46.8, 924.0], [46.9, 924.0], [47.0, 928.0], [47.1, 928.0], [47.2, 928.0], [47.3, 932.0], [47.4, 934.0], [47.5, 934.0], [47.6, 934.0], [47.7, 938.0], [47.8, 941.0], [47.9, 941.0], [48.0, 941.0], [48.1, 941.0], [48.2, 942.0], [48.3, 944.0], [48.4, 944.0], [48.5, 948.0], [48.6, 950.0], [48.7, 950.0], [48.8, 953.0], [48.9, 955.0], [49.0, 956.0], [49.1, 956.0], [49.2, 957.0], [49.3, 964.0], [49.4, 965.0], [49.5, 965.0], [49.6, 968.0], [49.7, 973.0], [49.8, 974.0], [49.9, 974.0], [50.0, 974.0], [50.1, 974.0], [50.2, 974.0], [50.3, 979.0], [50.4, 981.0], [50.5, 982.0], [50.6, 982.0], [50.7, 982.0], [50.8, 983.0], [50.9, 983.0], [51.0, 983.0], [51.1, 986.0], [51.2, 992.0], [51.3, 995.0], [51.4, 995.0], [51.5, 995.0], [51.6, 996.0], [51.7, 996.0], [51.8, 997.0], [51.9, 998.0], [52.0, 1004.0], [52.1, 1004.0], [52.2, 1004.0], [52.3, 1005.0], [52.4, 1008.0], [52.5, 1008.0], [52.6, 1009.0], [52.7, 1010.0], [52.8, 1011.0], [52.9, 1011.0], [53.0, 1012.0], [53.1, 1013.0], [53.2, 1014.0], [53.3, 1014.0], [53.4, 1017.0], [53.5, 1020.0], [53.6, 1020.0], [53.7, 1021.0], [53.8, 1032.0], [53.9, 1037.0], [54.0, 1037.0], [54.1, 1038.0], [54.2, 1040.0], [54.3, 1043.0], [54.4, 1043.0], [54.5, 1044.0], [54.6, 1059.0], [54.7, 1061.0], [54.8, 1061.0], [54.9, 1061.0], [55.0, 1061.0], [55.1, 1061.0], [55.2, 1064.0], [55.3, 1068.0], [55.4, 1069.0], [55.5, 1069.0], [55.6, 1071.0], [55.7, 1076.0], [55.8, 1081.0], [55.9, 1081.0], [56.0, 1081.0], [56.1, 1082.0], [56.2, 1084.0], [56.3, 1084.0], [56.4, 1085.0], [56.5, 1086.0], [56.6, 1090.0], [56.7, 1090.0], [56.8, 1095.0], [56.9, 1097.0], [57.0, 1097.0], [57.1, 1098.0], [57.2, 1099.0], [57.3, 1102.0], [57.4, 1102.0], [57.5, 1103.0], [57.6, 1106.0], [57.7, 1107.0], [57.8, 1107.0], [57.9, 1107.0], [58.0, 1108.0], [58.1, 1108.0], [58.2, 1108.0], [58.3, 1112.0], [58.4, 1117.0], [58.5, 1117.0], [58.6, 1118.0], [58.7, 1119.0], [58.8, 1123.0], [58.9, 1123.0], [59.0, 1124.0], [59.1, 1124.0], [59.2, 1125.0], [59.3, 1125.0], [59.4, 1125.0], [59.5, 1126.0], [59.6, 1130.0], [59.7, 1130.0], [59.8, 1131.0], [59.9, 1134.0], [60.0, 1135.0], [60.1, 1135.0], [60.2, 1135.0], [60.3, 1137.0], [60.4, 1137.0], [60.5, 1143.0], [60.6, 1143.0], [60.7, 1144.0], [60.8, 1144.0], [60.9, 1152.0], [61.0, 1155.0], [61.1, 1158.0], [61.2, 1158.0], [61.3, 1159.0], [61.4, 1159.0], [61.5, 1160.0], [61.6, 1160.0], [61.7, 1161.0], [61.8, 1163.0], [61.9, 1163.0], [62.0, 1163.0], [62.1, 1167.0], [62.2, 1167.0], [62.3, 1167.0], [62.4, 1171.0], [62.5, 1173.0], [62.6, 1173.0], [62.7, 1173.0], [62.8, 1174.0], [62.9, 1174.0], [63.0, 1177.0], [63.1, 1177.0], [63.2, 1179.0], [63.3, 1183.0], [63.4, 1183.0], [63.5, 1185.0], [63.6, 1185.0], [63.7, 1188.0], [63.8, 1188.0], [63.9, 1194.0], [64.0, 1196.0], [64.1, 1200.0], [64.2, 1200.0], [64.3, 1203.0], [64.4, 1205.0], [64.5, 1210.0], [64.6, 1210.0], [64.7, 1210.0], [64.8, 1213.0], [64.9, 1213.0], [65.0, 1213.0], [65.1, 1223.0], [65.2, 1224.0], [65.3, 1224.0], [65.4, 1228.0], [65.5, 1236.0], [65.6, 1238.0], [65.7, 1238.0], [65.8, 1242.0], [65.9, 1245.0], [66.0, 1247.0], [66.1, 1247.0], [66.2, 1247.0], [66.3, 1247.0], [66.4, 1256.0], [66.5, 1256.0], [66.6, 1260.0], [66.7, 1260.0], [66.8, 1260.0], [66.9, 1262.0], [67.0, 1262.0], [67.1, 1266.0], [67.2, 1266.0], [67.3, 1267.0], [67.4, 1271.0], [67.5, 1275.0], [67.6, 1275.0], [67.7, 1276.0], [67.8, 1283.0], [67.9, 1284.0], [68.0, 1284.0], [68.1, 1284.0], [68.2, 1288.0], [68.3, 1291.0], [68.4, 1291.0], [68.5, 1292.0], [68.6, 1297.0], [68.7, 1297.0], [68.8, 1302.0], [68.9, 1305.0], [69.0, 1305.0], [69.1, 1305.0], [69.2, 1306.0], [69.3, 1310.0], [69.4, 1318.0], [69.5, 1318.0], [69.6, 1325.0], [69.7, 1326.0], [69.8, 1328.0], [69.9, 1328.0], [70.0, 1331.0], [70.1, 1331.0], [70.2, 1331.0], [70.3, 1335.0], [70.4, 1342.0], [70.5, 1343.0], [70.6, 1343.0], [70.7, 1344.0], [70.8, 1347.0], [70.9, 1349.0], [71.0, 1349.0], [71.1, 1350.0], [71.2, 1353.0], [71.3, 1354.0], [71.4, 1354.0], [71.5, 1354.0], [71.6, 1354.0], [71.7, 1354.0], [71.8, 1355.0], [71.9, 1356.0], [72.0, 1361.0], [72.1, 1361.0], [72.2, 1361.0], [72.3, 1362.0], [72.4, 1366.0], [72.5, 1366.0], [72.6, 1367.0], [72.7, 1368.0], [72.8, 1371.0], [72.9, 1371.0], [73.0, 1375.0], [73.1, 1379.0], [73.2, 1381.0], [73.3, 1381.0], [73.4, 1383.0], [73.5, 1383.0], [73.6, 1383.0], [73.7, 1383.0], [73.8, 1386.0], [73.9, 1391.0], [74.0, 1391.0], [74.1, 1401.0], [74.2, 1402.0], [74.3, 1403.0], [74.4, 1403.0], [74.5, 1403.0], [74.6, 1405.0], [74.7, 1407.0], [74.8, 1407.0], [74.9, 1412.0], [75.0, 1415.0], [75.1, 1415.0], [75.2, 1418.0], [75.3, 1419.0], [75.4, 1420.0], [75.5, 1420.0], [75.6, 1421.0], [75.7, 1424.0], [75.8, 1429.0], [75.9, 1429.0], [76.0, 1430.0], [76.1, 1431.0], [76.2, 1431.0], [76.3, 1431.0], [76.4, 1432.0], [76.5, 1433.0], [76.6, 1434.0], [76.7, 1434.0], [76.8, 1434.0], [76.9, 1435.0], [77.0, 1435.0], [77.1, 1435.0], [77.2, 1438.0], [77.3, 1440.0], [77.4, 1440.0], [77.5, 1440.0], [77.6, 1441.0], [77.7, 1444.0], [77.8, 1444.0], [77.9, 1444.0], [78.0, 1446.0], [78.1, 1448.0], [78.2, 1448.0], [78.3, 1451.0], [78.4, 1451.0], [78.5, 1451.0], [78.6, 1453.0], [78.7, 1453.0], [78.8, 1454.0], [78.9, 1454.0], [79.0, 1455.0], [79.1, 1457.0], [79.2, 1458.0], [79.3, 1458.0], [79.4, 1459.0], [79.5, 1461.0], [79.6, 1463.0], [79.7, 1463.0], [79.8, 1463.0], [79.9, 1464.0], [80.0, 1464.0], [80.1, 1464.0], [80.2, 1466.0], [80.3, 1467.0], [80.4, 1467.0], [80.5, 1468.0], [80.6, 1469.0], [80.7, 1474.0], [80.8, 1474.0], [80.9, 1479.0], [81.0, 1485.0], [81.1, 1489.0], [81.2, 1489.0], [81.3, 1490.0], [81.4, 1491.0], [81.5, 1493.0], [81.6, 1493.0], [81.7, 1495.0], [81.8, 1495.0], [81.9, 1495.0], [82.0, 1500.0], [82.1, 1501.0], [82.2, 1502.0], [82.3, 1502.0], [82.4, 1503.0], [82.5, 1504.0], [82.6, 1505.0], [82.7, 1505.0], [82.8, 1509.0], [82.9, 1511.0], [83.0, 1515.0], [83.1, 1515.0], [83.2, 1515.0], [83.3, 1530.0], [83.4, 1530.0], [83.5, 1531.0], [83.6, 1535.0], [83.7, 1538.0], [83.8, 1538.0], [83.9, 1538.0], [84.0, 1549.0], [84.1, 1557.0], [84.2, 1557.0], [84.3, 1558.0], [84.4, 1570.0], [84.5, 1571.0], [84.6, 1571.0], [84.7, 1572.0], [84.8, 1572.0], [84.9, 1575.0], [85.0, 1575.0], [85.1, 1580.0], [85.2, 1594.0], [85.3, 1594.0], [85.4, 1602.0], [85.5, 1608.0], [85.6, 1608.0], [85.7, 1608.0], [85.8, 1612.0], [85.9, 1617.0], [86.0, 1618.0], [86.1, 1618.0], [86.2, 1619.0], [86.3, 1623.0], [86.4, 1623.0], [86.5, 1623.0], [86.6, 1626.0], [86.7, 1657.0], [86.8, 1657.0], [86.9, 1660.0], [87.0, 1664.0], [87.1, 1666.0], [87.2, 1666.0], [87.3, 1670.0], [87.4, 1670.0], [87.5, 1676.0], [87.6, 1676.0], [87.7, 1678.0], [87.8, 1679.0], [87.9, 1690.0], [88.0, 1690.0], [88.1, 1692.0], [88.2, 1695.0], [88.3, 1703.0], [88.4, 1703.0], [88.5, 1705.0], [88.6, 1723.0], [88.7, 1723.0], [88.8, 1724.0], [88.9, 1725.0], [89.0, 1728.0], [89.1, 1728.0], [89.2, 1733.0], [89.3, 1736.0], [89.4, 1739.0], [89.5, 1739.0], [89.6, 1741.0], [89.7, 1744.0], [89.8, 1744.0], [89.9, 1744.0], [90.0, 1753.0], [90.1, 1757.0], [90.2, 1757.0], [90.3, 1763.0], [90.4, 1770.0], [90.5, 1772.0], [90.6, 1772.0], [90.7, 1786.0], [90.8, 1801.0], [90.9, 1802.0], [91.0, 1802.0], [91.1, 1804.0], [91.2, 1805.0], [91.3, 1809.0], [91.4, 1809.0], [91.5, 1818.0], [91.6, 1820.0], [91.7, 1820.0], [91.8, 1828.0], [91.9, 1829.0], [92.0, 1835.0], [92.1, 1835.0], [92.2, 1852.0], [92.3, 1854.0], [92.4, 1867.0], [92.5, 1867.0], [92.6, 1870.0], [92.7, 1875.0], [92.8, 1885.0], [92.9, 1885.0], [93.0, 1893.0], [93.1, 1911.0], [93.2, 1916.0], [93.3, 1916.0], [93.4, 1922.0], [93.5, 1922.0], [93.6, 1922.0], [93.7, 1939.0], [93.8, 1939.0], [93.9, 1948.0], [94.0, 1948.0], [94.1, 1951.0], [94.2, 1969.0], [94.3, 1972.0], [94.4, 1972.0], [94.5, 1974.0], [94.6, 1990.0], [94.7, 1996.0], [94.8, 1996.0], [94.9, 2001.0], [95.0, 2005.0], [95.1, 2005.0], [95.2, 2006.0], [95.3, 2007.0], [95.4, 2019.0], [95.5, 2019.0], [95.6, 2032.0], [95.7, 2032.0], [95.8, 2040.0], [95.9, 2040.0], [96.0, 2069.0], [96.1, 2122.0], [96.2, 2135.0], [96.3, 2135.0], [96.4, 2137.0], [96.5, 2188.0], [96.6, 2208.0], [96.7, 2208.0], [96.8, 2239.0], [96.9, 2246.0], [97.0, 2246.0], [97.1, 2319.0], [97.2, 2327.0], [97.3, 2328.0], [97.4, 2328.0], [97.5, 2361.0], [97.6, 2396.0], [97.7, 2398.0], [97.8, 2398.0], [97.9, 2482.0], [98.0, 2566.0], [98.1, 2903.0], [98.2, 2903.0], [98.3, 3025.0], [98.4, 3047.0], [98.5, 3047.0], [98.6, 3138.0], [98.7, 3216.0], [98.8, 3289.0], [98.9, 3289.0], [99.0, 3339.0], [99.1, 3374.0], [99.2, 3425.0], [99.3, 3425.0], [99.4, 3491.0], [99.5, 3500.0], [99.6, 3637.0], [99.7, 3637.0], [99.8, 3807.0], [99.9, 3848.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 66.0, "series": [{"data": [[600.0, 66.0], [700.0, 53.0], [800.0, 57.0], [900.0, 51.0], [1000.0, 39.0], [1100.0, 50.0], [1200.0, 34.0], [1300.0, 39.0], [1400.0, 58.0], [1500.0, 25.0], [100.0, 3.0], [1600.0, 22.0], [1700.0, 18.0], [1800.0, 17.0], [1900.0, 13.0], [2000.0, 9.0], [2100.0, 4.0], [2200.0, 3.0], [2300.0, 6.0], [2400.0, 1.0], [2500.0, 1.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [3200.0, 2.0], [3300.0, 2.0], [200.0, 19.0], [3400.0, 2.0], [3500.0, 1.0], [3600.0, 1.0], [3800.0, 2.0], [300.0, 41.0], [400.0, 53.0], [500.0, 39.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 116.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 487.0, "series": [{"data": [[0.0, 116.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 487.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 132.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.70967741935484, "minX": 1.60423842E12, "maxY": 10.0, "series": [{"data": [[1.60423842E12, 10.0], [1.60423854E12, 9.70967741935484], [1.60423848E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423854E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 599.0, "minX": 1.0, "maxY": 1354.0, "series": [{"data": [[8.0, 651.0], [4.0, 644.0], [2.0, 1354.0], [1.0, 1342.0], [9.0, 599.0], [10.0, 1069.9118457300274], [5.0, 700.0], [6.0, 642.0], [3.0, 740.0], [7.0, 635.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1066.7523809523807]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 144.33333333333334, "minX": 1.60423842E12, "maxY": 1434632.9166666667, "series": [{"data": [[1.60423842E12, 71963.03333333334], [1.60423854E12, 329193.9666666667], [1.60423848E12, 1434632.9166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423842E12, 144.33333333333334], [1.60423854E12, 1156.3833333333334], [1.60423848E12, 4222.316666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423854E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 947.7419354838709, "minX": 1.60423842E12, "maxY": 2007.052631578948, "series": [{"data": [[1.60423842E12, 2007.052631578948], [1.60423854E12, 947.7419354838709], [1.60423848E12, 1067.7878787878792]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423854E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 946.6709677419354, "minX": 1.60423842E12, "maxY": 2005.1052631578948, "series": [{"data": [[1.60423842E12, 2005.1052631578948], [1.60423854E12, 946.6709677419354], [1.60423848E12, 1066.5008912655974]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423854E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60423842E12, "maxY": 4.684210526315788, "series": [{"data": [[1.60423842E12, 4.684210526315788], [1.60423854E12, 0.0], [1.60423848E12, 0.03208556149732619]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423854E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.60423842E12, "maxY": 3848.0, "series": [{"data": [[1.60423842E12, 3807.0], [1.60423854E12, 2482.0], [1.60423848E12, 3848.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423842E12, 189.0], [1.60423854E12, 232.29199914455415], [1.60423848E12, 212.1159997320175]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423842E12, 189.0], [1.60423854E12, 235.52120034217836], [1.60423848E12, 213.127600107193]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423842E12, 189.0], [1.60423854E12, 234.08599957227707], [1.60423848E12, 212.67799986600875]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423842E12, 189.0], [1.60423854E12, 223.0], [1.60423848E12, 175.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423842E12, 2903.0], [1.60423854E12, 803.0], [1.60423848E12, 1004.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423854E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 545.0, "minX": 1.0, "maxY": 2903.0, "series": [{"data": [[8.0, 1151.0], [9.0, 1078.5], [10.0, 1163.0], [11.0, 913.0], [12.0, 744.5], [3.0, 1342.0], [13.0, 673.0], [14.0, 689.0], [15.0, 707.0], [1.0, 2903.0], [4.0, 1847.0], [16.0, 545.0], [5.0, 1210.0], [6.0, 1381.5], [7.0, 1294.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 544.5, "minX": 1.0, "maxY": 2898.0, "series": [{"data": [[8.0, 1149.5], [9.0, 1077.5], [10.0, 1162.5], [11.0, 913.0], [12.0, 742.5], [3.0, 1342.0], [13.0, 673.0], [14.0, 688.0], [15.0, 706.0], [1.0, 2898.0], [4.0, 1845.5], [16.0, 544.5], [5.0, 1209.0], [6.0, 1379.0], [7.0, 1294.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.60423842E12, "maxY": 9.35, "series": [{"data": [[1.60423842E12, 0.48333333333333334], [1.60423854E12, 2.4166666666666665], [1.60423848E12, 9.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423854E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.60423842E12, "maxY": 9.35, "series": [{"data": [[1.60423842E12, 0.31666666666666665], [1.60423854E12, 2.5833333333333335], [1.60423848E12, 9.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423854E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.60423842E12, "maxY": 9.35, "series": [{"data": [[1.60423842E12, 0.31666666666666665], [1.60423854E12, 2.5833333333333335], [1.60423848E12, 9.35]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423854E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.60423842E12, "maxY": 9.35, "series": [{"data": [[1.60423842E12, 0.31666666666666665], [1.60423854E12, 2.5833333333333335], [1.60423848E12, 9.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423854E12, "title": "Total Transactions Per Second"}},
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

