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
        data: {"result": {"minY": 205.0, "minX": 0.0, "maxY": 3475.0, "series": [{"data": [[0.0, 205.0], [0.1, 205.0], [0.2, 220.0], [0.3, 227.0], [0.4, 227.0], [0.5, 231.0], [0.6, 238.0], [0.7, 239.0], [0.8, 239.0], [0.9, 241.0], [1.0, 243.0], [1.1, 248.0], [1.2, 248.0], [1.3, 251.0], [1.4, 253.0], [1.5, 258.0], [1.6, 258.0], [1.7, 274.0], [1.8, 279.0], [1.9, 279.0], [2.0, 280.0], [2.1, 291.0], [2.2, 294.0], [2.3, 294.0], [2.4, 313.0], [2.5, 320.0], [2.6, 322.0], [2.7, 322.0], [2.8, 322.0], [2.9, 323.0], [3.0, 325.0], [3.1, 325.0], [3.2, 325.0], [3.3, 326.0], [3.4, 326.0], [3.5, 328.0], [3.6, 333.0], [3.7, 335.0], [3.8, 335.0], [3.9, 339.0], [4.0, 339.0], [4.1, 339.0], [4.2, 339.0], [4.3, 342.0], [4.4, 342.0], [4.5, 344.0], [4.6, 344.0], [4.7, 345.0], [4.8, 345.0], [4.9, 346.0], [5.0, 346.0], [5.1, 346.0], [5.2, 347.0], [5.3, 347.0], [5.4, 347.0], [5.5, 347.0], [5.6, 350.0], [5.7, 350.0], [5.8, 351.0], [5.9, 352.0], [6.0, 353.0], [6.1, 353.0], [6.2, 354.0], [6.3, 354.0], [6.4, 357.0], [6.5, 357.0], [6.6, 359.0], [6.7, 361.0], [6.8, 361.0], [6.9, 362.0], [7.0, 368.0], [7.1, 368.0], [7.2, 368.0], [7.3, 368.0], [7.4, 373.0], [7.5, 376.0], [7.6, 376.0], [7.7, 376.0], [7.8, 377.0], [7.9, 378.0], [8.0, 378.0], [8.1, 379.0], [8.2, 380.0], [8.3, 385.0], [8.4, 385.0], [8.5, 385.0], [8.6, 385.0], [8.7, 385.0], [8.8, 386.0], [8.9, 386.0], [9.0, 386.0], [9.1, 386.0], [9.2, 387.0], [9.3, 388.0], [9.4, 389.0], [9.5, 389.0], [9.6, 389.0], [9.7, 393.0], [9.8, 394.0], [9.9, 394.0], [10.0, 395.0], [10.1, 395.0], [10.2, 395.0], [10.3, 403.0], [10.4, 405.0], [10.5, 406.0], [10.6, 406.0], [10.7, 420.0], [10.8, 423.0], [10.9, 427.0], [11.0, 427.0], [11.1, 436.0], [11.2, 437.0], [11.3, 437.0], [11.4, 437.0], [11.5, 438.0], [11.6, 442.0], [11.7, 442.0], [11.8, 443.0], [11.9, 443.0], [12.0, 443.0], [12.1, 443.0], [12.2, 443.0], [12.3, 443.0], [12.4, 444.0], [12.5, 444.0], [12.6, 445.0], [12.7, 445.0], [12.8, 446.0], [12.9, 446.0], [13.0, 449.0], [13.1, 452.0], [13.2, 452.0], [13.3, 452.0], [13.4, 456.0], [13.5, 457.0], [13.6, 457.0], [13.7, 457.0], [13.8, 458.0], [13.9, 460.0], [14.0, 460.0], [14.1, 460.0], [14.2, 461.0], [14.3, 462.0], [14.4, 462.0], [14.5, 463.0], [14.6, 467.0], [14.7, 467.0], [14.8, 467.0], [14.9, 467.0], [15.0, 470.0], [15.1, 470.0], [15.2, 472.0], [15.3, 473.0], [15.4, 473.0], [15.5, 473.0], [15.6, 474.0], [15.7, 475.0], [15.8, 476.0], [15.9, 476.0], [16.0, 477.0], [16.1, 480.0], [16.2, 484.0], [16.3, 484.0], [16.4, 487.0], [16.5, 492.0], [16.6, 494.0], [16.7, 494.0], [16.8, 494.0], [16.9, 496.0], [17.0, 496.0], [17.1, 497.0], [17.2, 499.0], [17.3, 513.0], [17.4, 513.0], [17.5, 513.0], [17.6, 516.0], [17.7, 522.0], [17.8, 522.0], [17.9, 523.0], [18.0, 523.0], [18.1, 525.0], [18.2, 525.0], [18.3, 526.0], [18.4, 528.0], [18.5, 528.0], [18.6, 531.0], [18.7, 531.0], [18.8, 538.0], [18.9, 538.0], [19.0, 541.0], [19.1, 545.0], [19.2, 545.0], [19.3, 545.0], [19.4, 549.0], [19.5, 552.0], [19.6, 553.0], [19.7, 553.0], [19.8, 555.0], [19.9, 556.0], [20.0, 556.0], [20.1, 556.0], [20.2, 559.0], [20.3, 561.0], [20.4, 561.0], [20.5, 562.0], [20.6, 563.0], [20.7, 563.0], [20.8, 563.0], [20.9, 566.0], [21.0, 567.0], [21.1, 571.0], [21.2, 571.0], [21.3, 574.0], [21.4, 574.0], [21.5, 575.0], [21.6, 575.0], [21.7, 578.0], [21.8, 580.0], [21.9, 580.0], [22.0, 583.0], [22.1, 583.0], [22.2, 584.0], [22.3, 584.0], [22.4, 588.0], [22.5, 588.0], [22.6, 597.0], [22.7, 597.0], [22.8, 598.0], [22.9, 599.0], [23.0, 601.0], [23.1, 601.0], [23.2, 603.0], [23.3, 603.0], [23.4, 603.0], [23.5, 607.0], [23.6, 608.0], [23.7, 608.0], [23.8, 608.0], [23.9, 613.0], [24.0, 614.0], [24.1, 615.0], [24.2, 615.0], [24.3, 616.0], [24.4, 616.0], [24.5, 617.0], [24.6, 617.0], [24.7, 618.0], [24.8, 619.0], [24.9, 623.0], [25.0, 623.0], [25.1, 623.0], [25.2, 624.0], [25.3, 624.0], [25.4, 627.0], [25.5, 629.0], [25.6, 632.0], [25.7, 632.0], [25.8, 633.0], [25.9, 636.0], [26.0, 638.0], [26.1, 638.0], [26.2, 641.0], [26.3, 641.0], [26.4, 643.0], [26.5, 643.0], [26.6, 645.0], [26.7, 646.0], [26.8, 646.0], [26.9, 654.0], [27.0, 654.0], [27.1, 655.0], [27.2, 655.0], [27.3, 655.0], [27.4, 656.0], [27.5, 657.0], [27.6, 657.0], [27.7, 658.0], [27.8, 659.0], [27.9, 659.0], [28.0, 659.0], [28.1, 660.0], [28.2, 661.0], [28.3, 663.0], [28.4, 663.0], [28.5, 663.0], [28.6, 664.0], [28.7, 664.0], [28.8, 666.0], [28.9, 666.0], [29.0, 668.0], [29.1, 668.0], [29.2, 670.0], [29.3, 674.0], [29.4, 675.0], [29.5, 675.0], [29.6, 678.0], [29.7, 678.0], [29.8, 679.0], [29.9, 679.0], [30.0, 683.0], [30.1, 683.0], [30.2, 683.0], [30.3, 684.0], [30.4, 687.0], [30.5, 688.0], [30.6, 688.0], [30.7, 695.0], [30.8, 699.0], [30.9, 699.0], [31.0, 699.0], [31.1, 700.0], [31.2, 701.0], [31.3, 702.0], [31.4, 702.0], [31.5, 702.0], [31.6, 702.0], [31.7, 702.0], [31.8, 703.0], [31.9, 705.0], [32.0, 705.0], [32.1, 705.0], [32.2, 707.0], [32.3, 709.0], [32.4, 714.0], [32.5, 714.0], [32.6, 715.0], [32.7, 715.0], [32.8, 717.0], [32.9, 717.0], [33.0, 717.0], [33.1, 718.0], [33.2, 718.0], [33.3, 718.0], [33.4, 719.0], [33.5, 719.0], [33.6, 719.0], [33.7, 720.0], [33.8, 721.0], [33.9, 722.0], [34.0, 722.0], [34.1, 723.0], [34.2, 726.0], [34.3, 727.0], [34.4, 727.0], [34.5, 730.0], [34.6, 731.0], [34.7, 731.0], [34.8, 731.0], [34.9, 732.0], [35.0, 733.0], [35.1, 733.0], [35.2, 735.0], [35.3, 735.0], [35.4, 736.0], [35.5, 736.0], [35.6, 739.0], [35.7, 740.0], [35.8, 744.0], [35.9, 744.0], [36.0, 757.0], [36.1, 759.0], [36.2, 760.0], [36.3, 760.0], [36.4, 762.0], [36.5, 766.0], [36.6, 766.0], [36.7, 766.0], [36.8, 769.0], [36.9, 769.0], [37.0, 769.0], [37.1, 774.0], [37.2, 774.0], [37.3, 778.0], [37.4, 778.0], [37.5, 779.0], [37.6, 779.0], [37.7, 783.0], [37.8, 783.0], [37.9, 787.0], [38.0, 787.0], [38.1, 787.0], [38.2, 787.0], [38.3, 789.0], [38.4, 791.0], [38.5, 791.0], [38.6, 795.0], [38.7, 797.0], [38.8, 797.0], [38.9, 797.0], [39.0, 798.0], [39.1, 798.0], [39.2, 800.0], [39.3, 800.0], [39.4, 800.0], [39.5, 802.0], [39.6, 804.0], [39.7, 804.0], [39.8, 808.0], [39.9, 809.0], [40.0, 810.0], [40.1, 810.0], [40.2, 811.0], [40.3, 815.0], [40.4, 815.0], [40.5, 817.0], [40.6, 818.0], [40.7, 819.0], [40.8, 819.0], [40.9, 819.0], [41.0, 829.0], [41.1, 829.0], [41.2, 829.0], [41.3, 831.0], [41.4, 831.0], [41.5, 836.0], [41.6, 836.0], [41.7, 838.0], [41.8, 838.0], [41.9, 838.0], [42.0, 842.0], [42.1, 843.0], [42.2, 847.0], [42.3, 847.0], [42.4, 848.0], [42.5, 855.0], [42.6, 858.0], [42.7, 858.0], [42.8, 860.0], [42.9, 863.0], [43.0, 863.0], [43.1, 863.0], [43.2, 865.0], [43.3, 865.0], [43.4, 865.0], [43.5, 866.0], [43.6, 867.0], [43.7, 872.0], [43.8, 872.0], [43.9, 875.0], [44.0, 875.0], [44.1, 876.0], [44.2, 876.0], [44.3, 876.0], [44.4, 877.0], [44.5, 877.0], [44.6, 877.0], [44.7, 880.0], [44.8, 885.0], [44.9, 886.0], [45.0, 886.0], [45.1, 886.0], [45.2, 887.0], [45.3, 887.0], [45.4, 888.0], [45.5, 890.0], [45.6, 890.0], [45.7, 890.0], [45.8, 895.0], [45.9, 899.0], [46.0, 899.0], [46.1, 899.0], [46.2, 903.0], [46.3, 903.0], [46.4, 906.0], [46.5, 906.0], [46.6, 908.0], [46.7, 914.0], [46.8, 914.0], [46.9, 917.0], [47.0, 917.0], [47.1, 918.0], [47.2, 918.0], [47.3, 921.0], [47.4, 921.0], [47.5, 925.0], [47.6, 925.0], [47.7, 929.0], [47.8, 929.0], [47.9, 933.0], [48.0, 933.0], [48.1, 934.0], [48.2, 936.0], [48.3, 937.0], [48.4, 937.0], [48.5, 939.0], [48.6, 942.0], [48.7, 942.0], [48.8, 944.0], [48.9, 945.0], [49.0, 947.0], [49.1, 947.0], [49.2, 949.0], [49.3, 952.0], [49.4, 955.0], [49.5, 955.0], [49.6, 955.0], [49.7, 957.0], [49.8, 960.0], [49.9, 960.0], [50.0, 964.0], [50.1, 964.0], [50.2, 964.0], [50.3, 965.0], [50.4, 970.0], [50.5, 971.0], [50.6, 971.0], [50.7, 974.0], [50.8, 975.0], [50.9, 978.0], [51.0, 978.0], [51.1, 978.0], [51.2, 988.0], [51.3, 988.0], [51.4, 988.0], [51.5, 996.0], [51.6, 1001.0], [51.7, 1001.0], [51.8, 1008.0], [51.9, 1009.0], [52.0, 1021.0], [52.1, 1021.0], [52.2, 1024.0], [52.3, 1025.0], [52.4, 1028.0], [52.5, 1028.0], [52.6, 1038.0], [52.7, 1048.0], [52.8, 1050.0], [52.9, 1050.0], [53.0, 1051.0], [53.1, 1051.0], [53.2, 1055.0], [53.3, 1055.0], [53.4, 1056.0], [53.5, 1059.0], [53.6, 1059.0], [53.7, 1059.0], [53.8, 1065.0], [53.9, 1069.0], [54.0, 1069.0], [54.1, 1070.0], [54.2, 1078.0], [54.3, 1080.0], [54.4, 1080.0], [54.5, 1080.0], [54.6, 1080.0], [54.7, 1084.0], [54.8, 1084.0], [54.9, 1086.0], [55.0, 1087.0], [55.1, 1087.0], [55.2, 1087.0], [55.3, 1090.0], [55.4, 1095.0], [55.5, 1095.0], [55.6, 1097.0], [55.7, 1098.0], [55.8, 1098.0], [55.9, 1098.0], [56.0, 1099.0], [56.1, 1101.0], [56.2, 1103.0], [56.3, 1103.0], [56.4, 1103.0], [56.5, 1103.0], [56.6, 1105.0], [56.7, 1105.0], [56.8, 1105.0], [56.9, 1109.0], [57.0, 1109.0], [57.1, 1111.0], [57.2, 1112.0], [57.3, 1114.0], [57.4, 1114.0], [57.5, 1115.0], [57.6, 1117.0], [57.7, 1123.0], [57.8, 1123.0], [57.9, 1125.0], [58.0, 1126.0], [58.1, 1128.0], [58.2, 1128.0], [58.3, 1129.0], [58.4, 1130.0], [58.5, 1130.0], [58.6, 1132.0], [58.7, 1135.0], [58.8, 1144.0], [58.9, 1144.0], [59.0, 1146.0], [59.1, 1150.0], [59.2, 1151.0], [59.3, 1151.0], [59.4, 1151.0], [59.5, 1156.0], [59.6, 1158.0], [59.7, 1158.0], [59.8, 1162.0], [59.9, 1166.0], [60.0, 1167.0], [60.1, 1167.0], [60.2, 1167.0], [60.3, 1171.0], [60.4, 1171.0], [60.5, 1177.0], [60.6, 1182.0], [60.7, 1185.0], [60.8, 1185.0], [60.9, 1189.0], [61.0, 1190.0], [61.1, 1197.0], [61.2, 1197.0], [61.3, 1207.0], [61.4, 1210.0], [61.5, 1211.0], [61.6, 1211.0], [61.7, 1211.0], [61.8, 1214.0], [61.9, 1214.0], [62.0, 1217.0], [62.1, 1219.0], [62.2, 1219.0], [62.3, 1219.0], [62.4, 1222.0], [62.5, 1223.0], [62.6, 1224.0], [62.7, 1224.0], [62.8, 1225.0], [62.9, 1225.0], [63.0, 1229.0], [63.1, 1229.0], [63.2, 1229.0], [63.3, 1230.0], [63.4, 1230.0], [63.5, 1233.0], [63.6, 1233.0], [63.7, 1234.0], [63.8, 1234.0], [63.9, 1239.0], [64.0, 1245.0], [64.1, 1245.0], [64.2, 1245.0], [64.3, 1248.0], [64.4, 1250.0], [64.5, 1251.0], [64.6, 1251.0], [64.7, 1252.0], [64.8, 1252.0], [64.9, 1253.0], [65.0, 1253.0], [65.1, 1255.0], [65.2, 1258.0], [65.3, 1258.0], [65.4, 1262.0], [65.5, 1262.0], [65.6, 1262.0], [65.7, 1262.0], [65.8, 1264.0], [65.9, 1266.0], [66.0, 1267.0], [66.1, 1267.0], [66.2, 1267.0], [66.3, 1267.0], [66.4, 1270.0], [66.5, 1270.0], [66.6, 1271.0], [66.7, 1272.0], [66.8, 1272.0], [66.9, 1279.0], [67.0, 1280.0], [67.1, 1281.0], [67.2, 1281.0], [67.3, 1284.0], [67.4, 1291.0], [67.5, 1293.0], [67.6, 1293.0], [67.7, 1295.0], [67.8, 1296.0], [67.9, 1298.0], [68.0, 1298.0], [68.1, 1301.0], [68.2, 1305.0], [68.3, 1309.0], [68.4, 1309.0], [68.5, 1312.0], [68.6, 1318.0], [68.7, 1318.0], [68.8, 1319.0], [68.9, 1321.0], [69.0, 1322.0], [69.1, 1322.0], [69.2, 1323.0], [69.3, 1324.0], [69.4, 1324.0], [69.5, 1324.0], [69.6, 1324.0], [69.7, 1325.0], [69.8, 1327.0], [69.9, 1327.0], [70.0, 1334.0], [70.1, 1334.0], [70.2, 1334.0], [70.3, 1338.0], [70.4, 1338.0], [70.5, 1340.0], [70.6, 1340.0], [70.7, 1343.0], [70.8, 1346.0], [70.9, 1349.0], [71.0, 1349.0], [71.1, 1353.0], [71.2, 1359.0], [71.3, 1359.0], [71.4, 1359.0], [71.5, 1368.0], [71.6, 1369.0], [71.7, 1369.0], [71.8, 1369.0], [71.9, 1377.0], [72.0, 1393.0], [72.1, 1393.0], [72.2, 1398.0], [72.3, 1403.0], [72.4, 1406.0], [72.5, 1406.0], [72.6, 1407.0], [72.7, 1414.0], [72.8, 1415.0], [72.9, 1415.0], [73.0, 1416.0], [73.1, 1417.0], [73.2, 1420.0], [73.3, 1420.0], [73.4, 1420.0], [73.5, 1426.0], [73.6, 1426.0], [73.7, 1430.0], [73.8, 1430.0], [73.9, 1436.0], [74.0, 1436.0], [74.1, 1437.0], [74.2, 1439.0], [74.3, 1444.0], [74.4, 1444.0], [74.5, 1450.0], [74.6, 1451.0], [74.7, 1453.0], [74.8, 1453.0], [74.9, 1454.0], [75.0, 1455.0], [75.1, 1455.0], [75.2, 1460.0], [75.3, 1461.0], [75.4, 1466.0], [75.5, 1466.0], [75.6, 1472.0], [75.7, 1476.0], [75.8, 1477.0], [75.9, 1477.0], [76.0, 1479.0], [76.1, 1479.0], [76.2, 1481.0], [76.3, 1481.0], [76.4, 1481.0], [76.5, 1481.0], [76.6, 1488.0], [76.7, 1488.0], [76.8, 1495.0], [76.9, 1500.0], [77.0, 1500.0], [77.1, 1502.0], [77.2, 1504.0], [77.3, 1506.0], [77.4, 1506.0], [77.5, 1508.0], [77.6, 1514.0], [77.7, 1515.0], [77.8, 1515.0], [77.9, 1516.0], [78.0, 1517.0], [78.1, 1525.0], [78.2, 1525.0], [78.3, 1528.0], [78.4, 1530.0], [78.5, 1530.0], [78.6, 1531.0], [78.7, 1531.0], [78.8, 1536.0], [78.9, 1536.0], [79.0, 1539.0], [79.1, 1544.0], [79.2, 1549.0], [79.3, 1549.0], [79.4, 1551.0], [79.5, 1551.0], [79.6, 1560.0], [79.7, 1560.0], [79.8, 1569.0], [79.9, 1571.0], [80.0, 1571.0], [80.1, 1571.0], [80.2, 1580.0], [80.3, 1582.0], [80.4, 1582.0], [80.5, 1582.0], [80.6, 1585.0], [80.7, 1585.0], [80.8, 1585.0], [80.9, 1586.0], [81.0, 1589.0], [81.1, 1590.0], [81.2, 1590.0], [81.3, 1595.0], [81.4, 1595.0], [81.5, 1596.0], [81.6, 1596.0], [81.7, 1605.0], [81.8, 1608.0], [81.9, 1608.0], [82.0, 1623.0], [82.1, 1626.0], [82.2, 1628.0], [82.3, 1628.0], [82.4, 1628.0], [82.5, 1630.0], [82.6, 1636.0], [82.7, 1636.0], [82.8, 1638.0], [82.9, 1641.0], [83.0, 1641.0], [83.1, 1641.0], [83.2, 1643.0], [83.3, 1644.0], [83.4, 1644.0], [83.5, 1646.0], [83.6, 1648.0], [83.7, 1654.0], [83.8, 1654.0], [83.9, 1658.0], [84.0, 1663.0], [84.1, 1664.0], [84.2, 1664.0], [84.3, 1669.0], [84.4, 1671.0], [84.5, 1676.0], [84.6, 1676.0], [84.7, 1687.0], [84.8, 1689.0], [84.9, 1694.0], [85.0, 1694.0], [85.1, 1695.0], [85.2, 1696.0], [85.3, 1696.0], [85.4, 1699.0], [85.5, 1701.0], [85.6, 1711.0], [85.7, 1711.0], [85.8, 1719.0], [85.9, 1721.0], [86.0, 1729.0], [86.1, 1729.0], [86.2, 1731.0], [86.3, 1737.0], [86.4, 1738.0], [86.5, 1738.0], [86.6, 1743.0], [86.7, 1749.0], [86.8, 1749.0], [86.9, 1750.0], [87.0, 1750.0], [87.1, 1750.0], [87.2, 1750.0], [87.3, 1752.0], [87.4, 1753.0], [87.5, 1759.0], [87.6, 1759.0], [87.7, 1763.0], [87.8, 1772.0], [87.9, 1772.0], [88.0, 1772.0], [88.1, 1776.0], [88.2, 1779.0], [88.3, 1780.0], [88.4, 1780.0], [88.5, 1785.0], [88.6, 1787.0], [88.7, 1787.0], [88.8, 1791.0], [88.9, 1791.0], [89.0, 1792.0], [89.1, 1792.0], [89.2, 1798.0], [89.3, 1798.0], [89.4, 1799.0], [89.5, 1799.0], [89.6, 1805.0], [89.7, 1808.0], [89.8, 1813.0], [89.9, 1813.0], [90.0, 1815.0], [90.1, 1816.0], [90.2, 1816.0], [90.3, 1822.0], [90.4, 1825.0], [90.5, 1828.0], [90.6, 1828.0], [90.7, 1830.0], [90.8, 1831.0], [90.9, 1832.0], [91.0, 1832.0], [91.1, 1833.0], [91.2, 1844.0], [91.3, 1844.0], [91.4, 1844.0], [91.5, 1849.0], [91.6, 1850.0], [91.7, 1850.0], [91.8, 1853.0], [91.9, 1854.0], [92.0, 1856.0], [92.1, 1856.0], [92.2, 1865.0], [92.3, 1867.0], [92.4, 1872.0], [92.5, 1872.0], [92.6, 1893.0], [92.7, 1902.0], [92.8, 1910.0], [92.9, 1910.0], [93.0, 1911.0], [93.1, 1917.0], [93.2, 1920.0], [93.3, 1920.0], [93.4, 1922.0], [93.5, 1924.0], [93.6, 1924.0], [93.7, 1926.0], [93.8, 1931.0], [93.9, 1957.0], [94.0, 1957.0], [94.1, 1961.0], [94.2, 1969.0], [94.3, 1985.0], [94.4, 1985.0], [94.5, 2011.0], [94.6, 2016.0], [94.7, 2026.0], [94.8, 2026.0], [94.9, 2027.0], [95.0, 2042.0], [95.1, 2042.0], [95.2, 2058.0], [95.3, 2071.0], [95.4, 2080.0], [95.5, 2080.0], [95.6, 2087.0], [95.7, 2088.0], [95.8, 2098.0], [95.9, 2098.0], [96.0, 2103.0], [96.1, 2130.0], [96.2, 2157.0], [96.3, 2157.0], [96.4, 2174.0], [96.5, 2178.0], [96.6, 2181.0], [96.7, 2181.0], [96.8, 2182.0], [96.9, 2244.0], [97.0, 2244.0], [97.1, 2244.0], [97.2, 2260.0], [97.3, 2266.0], [97.4, 2266.0], [97.5, 2288.0], [97.6, 2361.0], [97.7, 2383.0], [97.8, 2383.0], [97.9, 2391.0], [98.0, 2392.0], [98.1, 2446.0], [98.2, 2446.0], [98.3, 2598.0], [98.4, 2731.0], [98.5, 2731.0], [98.6, 2734.0], [98.7, 2737.0], [98.8, 2781.0], [98.9, 2781.0], [99.0, 2797.0], [99.1, 2799.0], [99.2, 2815.0], [99.3, 2815.0], [99.4, 2817.0], [99.5, 2923.0], [99.6, 3033.0], [99.7, 3033.0], [99.8, 3183.0], [99.9, 3475.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 60.0, "series": [{"data": [[600.0, 59.0], [700.0, 60.0], [800.0, 51.0], [900.0, 40.0], [1000.0, 33.0], [1100.0, 38.0], [1200.0, 50.0], [1300.0, 31.0], [1400.0, 34.0], [1500.0, 35.0], [1600.0, 28.0], [1700.0, 30.0], [1800.0, 23.0], [1900.0, 13.0], [2000.0, 11.0], [2100.0, 7.0], [2300.0, 4.0], [2200.0, 5.0], [2400.0, 1.0], [2500.0, 1.0], [2700.0, 6.0], [2800.0, 2.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 17.0], [3400.0, 1.0], [300.0, 58.0], [400.0, 52.0], [500.0, 42.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 127.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 439.0, "series": [{"data": [[0.0, 127.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 439.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 169.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.081632653061225, "minX": 1.60238736E12, "maxY": 10.0, "series": [{"data": [[1.60238748E12, 9.081632653061225], [1.60238742E12, 10.0], [1.60238736E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238748E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 339.0, "minX": 1.0, "maxY": 1267.0, "series": [{"data": [[8.0, 659.0], [4.0, 679.0], [2.0, 1253.0], [1.0, 1267.0], [9.0, 645.0], [10.0, 1074.3925619834697], [5.0, 715.0], [6.0, 656.0], [3.0, 769.0], [7.0, 339.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1070.7360544217674]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 357.75, "minX": 1.60238736E12, "maxY": 1260910.2833333334, "series": [{"data": [[1.60238748E12, 163515.06666666668], [1.60238742E12, 1260910.2833333334], [1.60238736E12, 411268.76666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60238748E12, 357.75], [1.60238742E12, 4309.15], [1.60238736E12, 856.1333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238748E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 945.8571428571428, "minX": 1.60238736E12, "maxY": 1260.3097345132749, "series": [{"data": [[1.60238748E12, 945.8571428571428], [1.60238742E12, 1044.029668411868], [1.60238736E12, 1260.3097345132749]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238748E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 944.1428571428571, "minX": 1.60238736E12, "maxY": 1258.7876106194683, "series": [{"data": [[1.60238748E12, 944.1428571428571], [1.60238742E12, 1042.9424083769622], [1.60238736E12, 1258.7876106194683]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238748E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60238736E12, "maxY": 0.8761061946902664, "series": [{"data": [[1.60238748E12, 0.0], [1.60238742E12, 0.0174520069808028], [1.60238736E12, 0.8761061946902664]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238748E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 205.0, "minX": 1.60238736E12, "maxY": 3475.0, "series": [{"data": [[1.60238748E12, 2027.0], [1.60238742E12, 3183.0], [1.60238736E12, 3475.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60238748E12, 322.0], [1.60238742E12, 238.16599986314773], [1.60238736E12, 258.57199940204623]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60238748E12, 322.0], [1.60238742E12, 238.6826000547409], [1.60238736E12, 260.82920023918155]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60238748E12, 322.0], [1.60238742E12, 238.45299993157386], [1.60238736E12, 259.8259997010231]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60238748E12, 322.0], [1.60238742E12, 205.0], [1.60238736E12, 258.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60238748E12, 715.0], [1.60238742E12, 970.0], [1.60238736E12, 1024.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238748E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 556.0, "minX": 3.0, "maxY": 1340.5, "series": [{"data": [[8.0, 1246.5], [9.0, 1104.0], [10.0, 1066.5], [11.0, 1025.0], [12.0, 869.0], [3.0, 1260.0], [13.0, 770.0], [14.0, 719.5], [15.0, 556.0], [16.0, 643.0], [17.0, 585.5], [6.0, 1340.5], [7.0, 1267.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 556.0, "minX": 3.0, "maxY": 1338.5, "series": [{"data": [[8.0, 1244.5], [9.0, 1103.0], [10.0, 1064.5], [11.0, 1025.0], [12.0, 868.0], [3.0, 1258.0], [13.0, 768.0], [14.0, 719.5], [15.0, 556.0], [16.0, 643.0], [17.0, 585.5], [6.0, 1338.5], [7.0, 1267.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.65, "minX": 1.60238736E12, "maxY": 9.55, "series": [{"data": [[1.60238748E12, 0.65], [1.60238742E12, 9.55], [1.60238736E12, 2.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238748E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.60238736E12, "maxY": 9.55, "series": [{"data": [[1.60238748E12, 0.8166666666666667], [1.60238742E12, 9.55], [1.60238736E12, 1.8833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238748E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.60238736E12, "maxY": 9.55, "series": [{"data": [[1.60238748E12, 0.8166666666666667], [1.60238742E12, 9.55], [1.60238736E12, 1.8833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238748E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.60238736E12, "maxY": 9.55, "series": [{"data": [[1.60238748E12, 0.8166666666666667], [1.60238742E12, 9.55], [1.60238736E12, 1.8833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238748E12, "title": "Total Transactions Per Second"}},
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
