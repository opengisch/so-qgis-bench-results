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
        data: {"result": {"minY": 191.0, "minX": 0.0, "maxY": 3987.0, "series": [{"data": [[0.0, 191.0], [0.1, 191.0], [0.2, 193.0], [0.3, 196.0], [0.4, 196.0], [0.5, 205.0], [0.6, 205.0], [0.7, 207.0], [0.8, 207.0], [0.9, 208.0], [1.0, 210.0], [1.1, 211.0], [1.2, 211.0], [1.3, 212.0], [1.4, 212.0], [1.5, 214.0], [1.6, 214.0], [1.7, 214.0], [1.8, 215.0], [1.9, 215.0], [2.0, 215.0], [2.1, 217.0], [2.2, 217.0], [2.3, 217.0], [2.4, 218.0], [2.5, 219.0], [2.6, 220.0], [2.7, 220.0], [2.8, 225.0], [2.9, 232.0], [3.0, 235.0], [3.1, 235.0], [3.2, 235.0], [3.3, 242.0], [3.4, 242.0], [3.5, 246.0], [3.6, 249.0], [3.7, 254.0], [3.8, 254.0], [3.9, 258.0], [4.0, 284.0], [4.1, 287.0], [4.2, 287.0], [4.3, 289.0], [4.4, 297.0], [4.5, 299.0], [4.6, 299.0], [4.7, 305.0], [4.8, 307.0], [4.9, 312.0], [5.0, 312.0], [5.1, 313.0], [5.2, 317.0], [5.3, 317.0], [5.4, 320.0], [5.5, 326.0], [5.6, 327.0], [5.7, 327.0], [5.8, 332.0], [5.9, 332.0], [6.0, 334.0], [6.1, 334.0], [6.2, 338.0], [6.3, 340.0], [6.4, 341.0], [6.5, 341.0], [6.6, 342.0], [6.7, 344.0], [6.8, 344.0], [6.9, 345.0], [7.0, 345.0], [7.1, 345.0], [7.2, 345.0], [7.3, 346.0], [7.4, 349.0], [7.5, 350.0], [7.6, 350.0], [7.7, 351.0], [7.8, 351.0], [7.9, 354.0], [8.0, 354.0], [8.1, 359.0], [8.2, 360.0], [8.3, 361.0], [8.4, 361.0], [8.5, 363.0], [8.6, 367.0], [8.7, 367.0], [8.8, 367.0], [8.9, 368.0], [9.0, 369.0], [9.1, 369.0], [9.2, 369.0], [9.3, 372.0], [9.4, 376.0], [9.5, 376.0], [9.6, 378.0], [9.7, 379.0], [9.8, 379.0], [9.9, 379.0], [10.0, 380.0], [10.1, 385.0], [10.2, 385.0], [10.3, 396.0], [10.4, 397.0], [10.5, 406.0], [10.6, 406.0], [10.7, 408.0], [10.8, 415.0], [10.9, 416.0], [11.0, 416.0], [11.1, 417.0], [11.2, 421.0], [11.3, 421.0], [11.4, 421.0], [11.5, 421.0], [11.6, 422.0], [11.7, 422.0], [11.8, 423.0], [11.9, 425.0], [12.0, 426.0], [12.1, 426.0], [12.2, 426.0], [12.3, 429.0], [12.4, 430.0], [12.5, 430.0], [12.6, 430.0], [12.7, 431.0], [12.8, 432.0], [12.9, 432.0], [13.0, 432.0], [13.1, 432.0], [13.2, 433.0], [13.3, 433.0], [13.4, 433.0], [13.5, 433.0], [13.6, 433.0], [13.7, 434.0], [13.8, 434.0], [13.9, 435.0], [14.0, 435.0], [14.1, 436.0], [14.2, 437.0], [14.3, 437.0], [14.4, 437.0], [14.5, 437.0], [14.6, 438.0], [14.7, 439.0], [14.8, 439.0], [14.9, 440.0], [15.0, 445.0], [15.1, 445.0], [15.2, 445.0], [15.3, 445.0], [15.4, 445.0], [15.5, 445.0], [15.6, 445.0], [15.7, 446.0], [15.8, 446.0], [15.9, 446.0], [16.0, 447.0], [16.1, 447.0], [16.2, 448.0], [16.3, 448.0], [16.4, 449.0], [16.5, 451.0], [16.6, 451.0], [16.7, 451.0], [16.8, 452.0], [16.9, 453.0], [17.0, 453.0], [17.1, 453.0], [17.2, 455.0], [17.3, 455.0], [17.4, 455.0], [17.5, 456.0], [17.6, 456.0], [17.7, 459.0], [17.8, 459.0], [17.9, 461.0], [18.0, 461.0], [18.1, 461.0], [18.2, 461.0], [18.3, 461.0], [18.4, 464.0], [18.5, 464.0], [18.6, 466.0], [18.7, 466.0], [18.8, 467.0], [18.9, 467.0], [19.0, 469.0], [19.1, 471.0], [19.2, 472.0], [19.3, 472.0], [19.4, 475.0], [19.5, 475.0], [19.6, 476.0], [19.7, 476.0], [19.8, 478.0], [19.9, 478.0], [20.0, 478.0], [20.1, 478.0], [20.2, 483.0], [20.3, 485.0], [20.4, 485.0], [20.5, 489.0], [20.6, 491.0], [20.7, 492.0], [20.8, 492.0], [20.9, 496.0], [21.0, 496.0], [21.1, 497.0], [21.2, 497.0], [21.3, 507.0], [21.4, 507.0], [21.5, 508.0], [21.6, 508.0], [21.7, 513.0], [21.8, 513.0], [21.9, 513.0], [22.0, 514.0], [22.1, 514.0], [22.2, 518.0], [22.3, 518.0], [22.4, 520.0], [22.5, 521.0], [22.6, 521.0], [22.7, 521.0], [22.8, 522.0], [22.9, 525.0], [23.0, 527.0], [23.1, 527.0], [23.2, 531.0], [23.3, 532.0], [23.4, 532.0], [23.5, 536.0], [23.6, 538.0], [23.7, 538.0], [23.8, 538.0], [23.9, 544.0], [24.0, 546.0], [24.1, 546.0], [24.2, 546.0], [24.3, 547.0], [24.4, 551.0], [24.5, 553.0], [24.6, 553.0], [24.7, 557.0], [24.8, 564.0], [24.9, 567.0], [25.0, 567.0], [25.1, 569.0], [25.2, 569.0], [25.3, 569.0], [25.4, 570.0], [25.5, 574.0], [25.6, 574.0], [25.7, 574.0], [25.8, 575.0], [25.9, 576.0], [26.0, 577.0], [26.1, 577.0], [26.2, 582.0], [26.3, 583.0], [26.4, 583.0], [26.5, 583.0], [26.6, 585.0], [26.7, 592.0], [26.8, 592.0], [26.9, 597.0], [27.0, 599.0], [27.1, 601.0], [27.2, 601.0], [27.3, 603.0], [27.4, 605.0], [27.5, 608.0], [27.6, 608.0], [27.7, 609.0], [27.8, 610.0], [27.9, 613.0], [28.0, 613.0], [28.1, 616.0], [28.2, 617.0], [28.3, 619.0], [28.4, 619.0], [28.5, 621.0], [28.6, 622.0], [28.7, 622.0], [28.8, 624.0], [28.9, 624.0], [29.0, 626.0], [29.1, 626.0], [29.2, 631.0], [29.3, 631.0], [29.4, 634.0], [29.5, 634.0], [29.6, 635.0], [29.7, 637.0], [29.8, 637.0], [29.9, 637.0], [30.0, 638.0], [30.1, 638.0], [30.2, 638.0], [30.3, 642.0], [30.4, 644.0], [30.5, 645.0], [30.6, 645.0], [30.7, 653.0], [30.8, 655.0], [30.9, 655.0], [31.0, 655.0], [31.1, 656.0], [31.2, 656.0], [31.3, 656.0], [31.4, 656.0], [31.5, 657.0], [31.6, 659.0], [31.7, 659.0], [31.8, 660.0], [31.9, 662.0], [32.0, 663.0], [32.1, 663.0], [32.2, 663.0], [32.3, 664.0], [32.4, 665.0], [32.5, 665.0], [32.6, 666.0], [32.7, 669.0], [32.8, 669.0], [32.9, 669.0], [33.0, 669.0], [33.1, 669.0], [33.2, 673.0], [33.3, 673.0], [33.4, 673.0], [33.5, 674.0], [33.6, 674.0], [33.7, 674.0], [33.8, 676.0], [33.9, 678.0], [34.0, 678.0], [34.1, 678.0], [34.2, 680.0], [34.3, 680.0], [34.4, 680.0], [34.5, 680.0], [34.6, 680.0], [34.7, 680.0], [34.8, 680.0], [34.9, 681.0], [35.0, 681.0], [35.1, 681.0], [35.2, 684.0], [35.3, 685.0], [35.4, 686.0], [35.5, 686.0], [35.6, 688.0], [35.7, 690.0], [35.8, 691.0], [35.9, 691.0], [36.0, 694.0], [36.1, 695.0], [36.2, 695.0], [36.3, 695.0], [36.4, 696.0], [36.5, 696.0], [36.6, 700.0], [36.7, 700.0], [36.8, 700.0], [36.9, 703.0], [37.0, 703.0], [37.1, 703.0], [37.2, 704.0], [37.3, 705.0], [37.4, 705.0], [37.5, 706.0], [37.6, 711.0], [37.7, 712.0], [37.8, 712.0], [37.9, 716.0], [38.0, 717.0], [38.1, 717.0], [38.2, 717.0], [38.3, 717.0], [38.4, 719.0], [38.5, 719.0], [38.6, 721.0], [38.7, 722.0], [38.8, 722.0], [38.9, 722.0], [39.0, 723.0], [39.1, 723.0], [39.2, 724.0], [39.3, 724.0], [39.4, 726.0], [39.5, 727.0], [39.6, 729.0], [39.7, 729.0], [39.8, 729.0], [39.9, 731.0], [40.0, 731.0], [40.1, 731.0], [40.2, 732.0], [40.3, 732.0], [40.4, 732.0], [40.5, 734.0], [40.6, 734.0], [40.7, 736.0], [40.8, 736.0], [40.9, 739.0], [41.0, 740.0], [41.1, 747.0], [41.2, 747.0], [41.3, 751.0], [41.4, 752.0], [41.5, 752.0], [41.6, 752.0], [41.7, 753.0], [41.8, 760.0], [41.9, 760.0], [42.0, 761.0], [42.1, 761.0], [42.2, 764.0], [42.3, 764.0], [42.4, 765.0], [42.5, 765.0], [42.6, 769.0], [42.7, 769.0], [42.8, 769.0], [42.9, 770.0], [43.0, 771.0], [43.1, 771.0], [43.2, 771.0], [43.3, 773.0], [43.4, 773.0], [43.5, 774.0], [43.6, 776.0], [43.7, 781.0], [43.8, 781.0], [43.9, 789.0], [44.0, 789.0], [44.1, 789.0], [44.2, 789.0], [44.3, 792.0], [44.4, 792.0], [44.5, 794.0], [44.6, 794.0], [44.7, 807.0], [44.8, 810.0], [44.9, 811.0], [45.0, 811.0], [45.1, 812.0], [45.2, 813.0], [45.3, 813.0], [45.4, 817.0], [45.5, 824.0], [45.6, 825.0], [45.7, 825.0], [45.8, 833.0], [45.9, 842.0], [46.0, 843.0], [46.1, 843.0], [46.2, 845.0], [46.3, 845.0], [46.4, 849.0], [46.5, 849.0], [46.6, 850.0], [46.7, 850.0], [46.8, 850.0], [46.9, 853.0], [47.0, 853.0], [47.1, 854.0], [47.2, 854.0], [47.3, 854.0], [47.4, 855.0], [47.5, 855.0], [47.6, 855.0], [47.7, 856.0], [47.8, 862.0], [47.9, 867.0], [48.0, 867.0], [48.1, 868.0], [48.2, 869.0], [48.3, 871.0], [48.4, 871.0], [48.5, 873.0], [48.6, 874.0], [48.7, 874.0], [48.8, 874.0], [48.9, 877.0], [49.0, 878.0], [49.1, 878.0], [49.2, 883.0], [49.3, 885.0], [49.4, 886.0], [49.5, 886.0], [49.6, 889.0], [49.7, 893.0], [49.8, 895.0], [49.9, 895.0], [50.0, 896.0], [50.1, 898.0], [50.2, 898.0], [50.3, 898.0], [50.4, 900.0], [50.5, 902.0], [50.6, 902.0], [50.7, 907.0], [50.8, 912.0], [50.9, 913.0], [51.0, 913.0], [51.1, 915.0], [51.2, 917.0], [51.3, 918.0], [51.4, 918.0], [51.5, 920.0], [51.6, 922.0], [51.7, 922.0], [51.8, 924.0], [51.9, 932.0], [52.0, 934.0], [52.1, 934.0], [52.2, 937.0], [52.3, 943.0], [52.4, 943.0], [52.5, 943.0], [52.6, 956.0], [52.7, 957.0], [52.8, 958.0], [52.9, 958.0], [53.0, 958.0], [53.1, 968.0], [53.2, 974.0], [53.3, 974.0], [53.4, 982.0], [53.5, 984.0], [53.6, 984.0], [53.7, 989.0], [53.8, 991.0], [53.9, 996.0], [54.0, 996.0], [54.1, 997.0], [54.2, 998.0], [54.3, 1003.0], [54.4, 1003.0], [54.5, 1004.0], [54.6, 1011.0], [54.7, 1012.0], [54.8, 1012.0], [54.9, 1013.0], [55.0, 1013.0], [55.1, 1013.0], [55.2, 1015.0], [55.3, 1019.0], [55.4, 1022.0], [55.5, 1022.0], [55.6, 1024.0], [55.7, 1025.0], [55.8, 1033.0], [55.9, 1033.0], [56.0, 1040.0], [56.1, 1041.0], [56.2, 1043.0], [56.3, 1043.0], [56.4, 1043.0], [56.5, 1044.0], [56.6, 1047.0], [56.7, 1047.0], [56.8, 1047.0], [56.9, 1050.0], [57.0, 1050.0], [57.1, 1051.0], [57.2, 1052.0], [57.3, 1053.0], [57.4, 1053.0], [57.5, 1053.0], [57.6, 1055.0], [57.7, 1059.0], [57.8, 1059.0], [57.9, 1060.0], [58.0, 1060.0], [58.1, 1069.0], [58.2, 1069.0], [58.3, 1069.0], [58.4, 1071.0], [58.5, 1071.0], [58.6, 1074.0], [58.7, 1075.0], [58.8, 1079.0], [58.9, 1079.0], [59.0, 1080.0], [59.1, 1083.0], [59.2, 1083.0], [59.3, 1083.0], [59.4, 1085.0], [59.5, 1087.0], [59.6, 1089.0], [59.7, 1089.0], [59.8, 1091.0], [59.9, 1091.0], [60.0, 1096.0], [60.1, 1096.0], [60.2, 1101.0], [60.3, 1104.0], [60.4, 1104.0], [60.5, 1110.0], [60.6, 1110.0], [60.7, 1112.0], [60.8, 1112.0], [60.9, 1113.0], [61.0, 1118.0], [61.1, 1123.0], [61.2, 1123.0], [61.3, 1125.0], [61.4, 1125.0], [61.5, 1140.0], [61.6, 1140.0], [61.7, 1140.0], [61.8, 1145.0], [61.9, 1145.0], [62.0, 1146.0], [62.1, 1147.0], [62.2, 1152.0], [62.3, 1152.0], [62.4, 1155.0], [62.5, 1163.0], [62.6, 1163.0], [62.7, 1163.0], [62.8, 1166.0], [62.9, 1172.0], [63.0, 1173.0], [63.1, 1173.0], [63.2, 1173.0], [63.3, 1175.0], [63.4, 1175.0], [63.5, 1183.0], [63.6, 1191.0], [63.7, 1193.0], [63.8, 1193.0], [63.9, 1193.0], [64.0, 1194.0], [64.1, 1199.0], [64.2, 1199.0], [64.3, 1203.0], [64.4, 1203.0], [64.5, 1205.0], [64.6, 1205.0], [64.7, 1205.0], [64.8, 1219.0], [64.9, 1220.0], [65.0, 1220.0], [65.1, 1224.0], [65.2, 1226.0], [65.3, 1226.0], [65.4, 1226.0], [65.5, 1231.0], [65.6, 1232.0], [65.7, 1232.0], [65.8, 1236.0], [65.9, 1242.0], [66.0, 1246.0], [66.1, 1246.0], [66.2, 1250.0], [66.3, 1251.0], [66.4, 1256.0], [66.5, 1256.0], [66.6, 1261.0], [66.7, 1262.0], [66.8, 1262.0], [66.9, 1265.0], [67.0, 1266.0], [67.1, 1267.0], [67.2, 1267.0], [67.3, 1275.0], [67.4, 1281.0], [67.5, 1288.0], [67.6, 1288.0], [67.7, 1289.0], [67.8, 1294.0], [67.9, 1295.0], [68.0, 1295.0], [68.1, 1296.0], [68.2, 1300.0], [68.3, 1304.0], [68.4, 1304.0], [68.5, 1305.0], [68.6, 1306.0], [68.7, 1306.0], [68.8, 1306.0], [68.9, 1307.0], [69.0, 1311.0], [69.1, 1311.0], [69.2, 1319.0], [69.3, 1321.0], [69.4, 1324.0], [69.5, 1324.0], [69.6, 1342.0], [69.7, 1347.0], [69.8, 1354.0], [69.9, 1354.0], [70.0, 1361.0], [70.1, 1367.0], [70.2, 1367.0], [70.3, 1375.0], [70.4, 1382.0], [70.5, 1382.0], [70.6, 1382.0], [70.7, 1382.0], [70.8, 1385.0], [70.9, 1386.0], [71.0, 1386.0], [71.1, 1388.0], [71.2, 1395.0], [71.3, 1404.0], [71.4, 1404.0], [71.5, 1404.0], [71.6, 1405.0], [71.7, 1405.0], [71.8, 1405.0], [71.9, 1411.0], [72.0, 1414.0], [72.1, 1414.0], [72.2, 1415.0], [72.3, 1416.0], [72.4, 1418.0], [72.5, 1418.0], [72.6, 1428.0], [72.7, 1429.0], [72.8, 1429.0], [72.9, 1429.0], [73.0, 1433.0], [73.1, 1447.0], [73.2, 1447.0], [73.3, 1447.0], [73.4, 1449.0], [73.5, 1453.0], [73.6, 1453.0], [73.7, 1455.0], [73.8, 1457.0], [73.9, 1458.0], [74.0, 1458.0], [74.1, 1460.0], [74.2, 1460.0], [74.3, 1466.0], [74.4, 1466.0], [74.5, 1471.0], [74.6, 1472.0], [74.7, 1473.0], [74.8, 1473.0], [74.9, 1474.0], [75.0, 1476.0], [75.1, 1476.0], [75.2, 1483.0], [75.3, 1488.0], [75.4, 1489.0], [75.5, 1489.0], [75.6, 1493.0], [75.7, 1495.0], [75.8, 1504.0], [75.9, 1504.0], [76.0, 1504.0], [76.1, 1505.0], [76.2, 1506.0], [76.3, 1506.0], [76.4, 1509.0], [76.5, 1510.0], [76.6, 1510.0], [76.7, 1510.0], [76.8, 1515.0], [76.9, 1516.0], [77.0, 1516.0], [77.1, 1519.0], [77.2, 1520.0], [77.3, 1531.0], [77.4, 1531.0], [77.5, 1533.0], [77.6, 1534.0], [77.7, 1536.0], [77.8, 1536.0], [77.9, 1538.0], [78.0, 1542.0], [78.1, 1546.0], [78.2, 1546.0], [78.3, 1547.0], [78.4, 1547.0], [78.5, 1547.0], [78.6, 1547.0], [78.7, 1549.0], [78.8, 1551.0], [78.9, 1551.0], [79.0, 1552.0], [79.1, 1552.0], [79.2, 1557.0], [79.3, 1557.0], [79.4, 1557.0], [79.5, 1559.0], [79.6, 1568.0], [79.7, 1568.0], [79.8, 1572.0], [79.9, 1572.0], [80.0, 1576.0], [80.1, 1576.0], [80.2, 1577.0], [80.3, 1579.0], [80.4, 1579.0], [80.5, 1582.0], [80.6, 1584.0], [80.7, 1586.0], [80.8, 1586.0], [80.9, 1589.0], [81.0, 1592.0], [81.1, 1593.0], [81.2, 1593.0], [81.3, 1593.0], [81.4, 1594.0], [81.5, 1595.0], [81.6, 1595.0], [81.7, 1596.0], [81.8, 1602.0], [81.9, 1602.0], [82.0, 1616.0], [82.1, 1618.0], [82.2, 1632.0], [82.3, 1632.0], [82.4, 1632.0], [82.5, 1634.0], [82.6, 1635.0], [82.7, 1635.0], [82.8, 1636.0], [82.9, 1638.0], [83.0, 1639.0], [83.1, 1639.0], [83.2, 1650.0], [83.3, 1660.0], [83.4, 1660.0], [83.5, 1673.0], [83.6, 1678.0], [83.7, 1679.0], [83.8, 1679.0], [83.9, 1681.0], [84.0, 1683.0], [84.1, 1686.0], [84.2, 1686.0], [84.3, 1689.0], [84.4, 1692.0], [84.5, 1695.0], [84.6, 1695.0], [84.7, 1698.0], [84.8, 1701.0], [84.9, 1706.0], [85.0, 1706.0], [85.1, 1708.0], [85.2, 1708.0], [85.3, 1708.0], [85.4, 1709.0], [85.5, 1714.0], [85.6, 1717.0], [85.7, 1717.0], [85.8, 1723.0], [85.9, 1724.0], [86.0, 1729.0], [86.1, 1729.0], [86.2, 1734.0], [86.3, 1737.0], [86.4, 1737.0], [86.5, 1737.0], [86.6, 1737.0], [86.7, 1739.0], [86.8, 1739.0], [86.9, 1741.0], [87.0, 1743.0], [87.1, 1743.0], [87.2, 1743.0], [87.3, 1745.0], [87.4, 1746.0], [87.5, 1756.0], [87.6, 1756.0], [87.7, 1757.0], [87.8, 1759.0], [87.9, 1761.0], [88.0, 1761.0], [88.1, 1762.0], [88.2, 1762.0], [88.3, 1768.0], [88.4, 1768.0], [88.5, 1769.0], [88.6, 1774.0], [88.7, 1774.0], [88.8, 1776.0], [88.9, 1778.0], [89.0, 1778.0], [89.1, 1778.0], [89.2, 1781.0], [89.3, 1783.0], [89.4, 1784.0], [89.5, 1784.0], [89.6, 1786.0], [89.7, 1787.0], [89.8, 1795.0], [89.9, 1795.0], [90.0, 1797.0], [90.1, 1804.0], [90.2, 1804.0], [90.3, 1807.0], [90.4, 1816.0], [90.5, 1817.0], [90.6, 1817.0], [90.7, 1818.0], [90.8, 1832.0], [90.9, 1834.0], [91.0, 1834.0], [91.1, 1840.0], [91.2, 1845.0], [91.3, 1852.0], [91.4, 1852.0], [91.5, 1857.0], [91.6, 1862.0], [91.7, 1862.0], [91.8, 1862.0], [91.9, 1863.0], [92.0, 1867.0], [92.1, 1867.0], [92.2, 1870.0], [92.3, 1875.0], [92.4, 1889.0], [92.5, 1889.0], [92.6, 1894.0], [92.7, 1902.0], [92.8, 1906.0], [92.9, 1906.0], [93.0, 1908.0], [93.1, 1915.0], [93.2, 1916.0], [93.3, 1916.0], [93.4, 1926.0], [93.5, 1926.0], [93.6, 1926.0], [93.7, 1928.0], [93.8, 1931.0], [93.9, 1936.0], [94.0, 1936.0], [94.1, 1939.0], [94.2, 1972.0], [94.3, 1972.0], [94.4, 1972.0], [94.5, 1981.0], [94.6, 1984.0], [94.7, 1984.0], [94.8, 1984.0], [94.9, 1986.0], [95.0, 1992.0], [95.1, 1992.0], [95.2, 2006.0], [95.3, 2010.0], [95.4, 2022.0], [95.5, 2022.0], [95.6, 2023.0], [95.7, 2029.0], [95.8, 2054.0], [95.9, 2054.0], [96.0, 2081.0], [96.1, 2083.0], [96.2, 2098.0], [96.3, 2098.0], [96.4, 2162.0], [96.5, 2164.0], [96.6, 2181.0], [96.7, 2181.0], [96.8, 2194.0], [96.9, 2233.0], [97.0, 2233.0], [97.1, 2261.0], [97.2, 2265.0], [97.3, 2355.0], [97.4, 2355.0], [97.5, 2356.0], [97.6, 2386.0], [97.7, 2432.0], [97.8, 2432.0], [97.9, 2535.0], [98.0, 2627.0], [98.1, 2793.0], [98.2, 2793.0], [98.3, 2835.0], [98.4, 2876.0], [98.5, 2876.0], [98.6, 2896.0], [98.7, 2976.0], [98.8, 3077.0], [98.9, 3077.0], [99.0, 3137.0], [99.1, 3147.0], [99.2, 3294.0], [99.3, 3294.0], [99.4, 3573.0], [99.5, 3597.0], [99.6, 3615.0], [99.7, 3615.0], [99.8, 3622.0], [99.9, 3987.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 79.0, "series": [{"data": [[600.0, 70.0], [700.0, 59.0], [800.0, 42.0], [900.0, 29.0], [1000.0, 43.0], [1100.0, 30.0], [1200.0, 29.0], [1300.0, 23.0], [1400.0, 33.0], [1500.0, 44.0], [100.0, 3.0], [1600.0, 22.0], [1700.0, 39.0], [1800.0, 19.0], [1900.0, 18.0], [2000.0, 9.0], [2100.0, 4.0], [2200.0, 3.0], [2300.0, 3.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 3.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 2.0], [200.0, 31.0], [3200.0, 1.0], [3500.0, 2.0], [3600.0, 2.0], [3900.0, 1.0], [300.0, 43.0], [400.0, 79.0], [500.0, 43.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 156.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 401.0, "series": [{"data": [[0.0, 156.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 401.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 178.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.625, "minX": 1.60402746E12, "maxY": 10.0, "series": [{"data": [[1.60402752E12, 10.0], [1.60402758E12, 9.625], [1.60402746E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402758E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 369.0, "minX": 1.0, "maxY": 1091.0, "series": [{"data": [[8.0, 369.0], [4.0, 765.0], [2.0, 1091.0], [1.0, 1047.0], [9.0, 681.0], [10.0, 1046.9504132231411], [5.0, 690.0], [6.0, 723.0], [3.0, 666.0], [7.0, 705.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1043.2965986394568]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 366.1333333333333, "minX": 1.60402746E12, "maxY": 1438099.5833333333, "series": [{"data": [[1.60402752E12, 1438099.5833333333], [1.60402758E12, 249501.31666666668], [1.60402746E12, 148212.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60402752E12, 4264.816666666667], [1.60402758E12, 892.0833333333334], [1.60402746E12, 366.1333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402758E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 886.9083333333333, "minX": 1.60402746E12, "maxY": 1239.0816326530612, "series": [{"data": [[1.60402752E12, 1059.5035335689058], [1.60402758E12, 886.9083333333333], [1.60402746E12, 1239.0816326530612]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402758E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 885.8416666666667, "minX": 1.60402746E12, "maxY": 1237.6530612244899, "series": [{"data": [[1.60402752E12, 1058.2862190812716], [1.60402758E12, 885.8416666666667], [1.60402746E12, 1237.6530612244899]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402758E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60402746E12, "maxY": 1.9591836734693882, "series": [{"data": [[1.60402752E12, 0.021201413427561832], [1.60402758E12, 0.0], [1.60402746E12, 1.9591836734693882]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402758E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 191.0, "minX": 1.60402746E12, "maxY": 3987.0, "series": [{"data": [[1.60402752E12, 3987.0], [1.60402758E12, 2976.0], [1.60402746E12, 3615.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60402752E12, 212.20599972963333], [1.60402758E12, 225.69599815368653], [1.60402746E12, 191.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60402752E12, 213.22660010814667], [1.60402758E12, 232.6656007385254], [1.60402746E12, 191.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60402752E12, 212.77299986481665], [1.60402758E12, 229.56799907684325], [1.60402746E12, 191.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60402752E12, 205.0], [1.60402758E12, 220.0], [1.60402746E12, 191.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60402752E12, 979.0], [1.60402758E12, 735.0], [1.60402746E12, 769.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402758E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 546.0, "minX": 3.0, "maxY": 2835.0, "series": [{"data": [[8.0, 1099.5], [9.0, 896.0], [10.0, 1007.5], [11.0, 814.5], [3.0, 2835.0], [12.0, 770.0], [13.0, 706.0], [14.0, 688.0], [15.0, 794.0], [4.0, 906.0], [19.0, 546.0], [6.0, 1398.0], [7.0, 1050.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 545.0, "minX": 3.0, "maxY": 2834.0, "series": [{"data": [[8.0, 1096.5], [9.0, 895.0], [10.0, 1006.5], [11.0, 814.0], [3.0, 2834.0], [12.0, 767.0], [13.0, 706.0], [14.0, 687.0], [15.0, 794.0], [4.0, 906.0], [19.0, 545.0], [6.0, 1397.0], [7.0, 1049.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.9833333333333333, "minX": 1.60402746E12, "maxY": 9.433333333333334, "series": [{"data": [[1.60402752E12, 9.433333333333334], [1.60402758E12, 1.8333333333333333], [1.60402746E12, 0.9833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402758E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.60402746E12, "maxY": 9.433333333333334, "series": [{"data": [[1.60402752E12, 9.433333333333334], [1.60402758E12, 2.0], [1.60402746E12, 0.8166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402758E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.60402746E12, "maxY": 9.433333333333334, "series": [{"data": [[1.60402752E12, 9.433333333333334], [1.60402758E12, 2.0], [1.60402746E12, 0.8166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402758E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.60402746E12, "maxY": 9.433333333333334, "series": [{"data": [[1.60402752E12, 9.433333333333334], [1.60402758E12, 2.0], [1.60402746E12, 0.8166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402758E12, "title": "Total Transactions Per Second"}},
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

