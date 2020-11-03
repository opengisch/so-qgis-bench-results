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
        data: {"result": {"minY": 187.0, "minX": 0.0, "maxY": 4652.0, "series": [{"data": [[0.0, 187.0], [0.1, 187.0], [0.2, 206.0], [0.3, 213.0], [0.4, 213.0], [0.5, 215.0], [0.6, 216.0], [0.7, 217.0], [0.8, 217.0], [0.9, 218.0], [1.0, 219.0], [1.1, 221.0], [1.2, 221.0], [1.3, 222.0], [1.4, 223.0], [1.5, 226.0], [1.6, 226.0], [1.7, 228.0], [1.8, 230.0], [1.9, 230.0], [2.0, 235.0], [2.1, 239.0], [2.2, 239.0], [2.3, 239.0], [2.4, 240.0], [2.5, 242.0], [2.6, 244.0], [2.7, 244.0], [2.8, 249.0], [2.9, 255.0], [3.0, 273.0], [3.1, 273.0], [3.2, 310.0], [3.3, 317.0], [3.4, 317.0], [3.5, 319.0], [3.6, 325.0], [3.7, 328.0], [3.8, 328.0], [3.9, 333.0], [4.0, 336.0], [4.1, 340.0], [4.2, 340.0], [4.3, 340.0], [4.4, 344.0], [4.5, 347.0], [4.6, 347.0], [4.7, 349.0], [4.8, 351.0], [4.9, 351.0], [5.0, 351.0], [5.1, 351.0], [5.2, 352.0], [5.3, 352.0], [5.4, 354.0], [5.5, 355.0], [5.6, 356.0], [5.7, 356.0], [5.8, 356.0], [5.9, 357.0], [6.0, 358.0], [6.1, 358.0], [6.2, 358.0], [6.3, 359.0], [6.4, 363.0], [6.5, 363.0], [6.6, 365.0], [6.7, 366.0], [6.8, 366.0], [6.9, 369.0], [7.0, 369.0], [7.1, 370.0], [7.2, 370.0], [7.3, 371.0], [7.4, 371.0], [7.5, 372.0], [7.6, 372.0], [7.7, 372.0], [7.8, 375.0], [7.9, 380.0], [8.0, 380.0], [8.1, 381.0], [8.2, 382.0], [8.3, 383.0], [8.4, 383.0], [8.5, 383.0], [8.6, 386.0], [8.7, 386.0], [8.8, 393.0], [8.9, 395.0], [9.0, 396.0], [9.1, 396.0], [9.2, 404.0], [9.3, 405.0], [9.4, 405.0], [9.5, 405.0], [9.6, 408.0], [9.7, 411.0], [9.8, 411.0], [9.9, 411.0], [10.0, 413.0], [10.1, 420.0], [10.2, 420.0], [10.3, 430.0], [10.4, 437.0], [10.5, 440.0], [10.6, 440.0], [10.7, 440.0], [10.8, 441.0], [10.9, 442.0], [11.0, 442.0], [11.1, 443.0], [11.2, 446.0], [11.3, 447.0], [11.4, 447.0], [11.5, 449.0], [11.6, 449.0], [11.7, 449.0], [11.8, 451.0], [11.9, 452.0], [12.0, 452.0], [12.1, 452.0], [12.2, 455.0], [12.3, 456.0], [12.4, 457.0], [12.5, 457.0], [12.6, 457.0], [12.7, 457.0], [12.8, 458.0], [12.9, 458.0], [13.0, 459.0], [13.1, 462.0], [13.2, 462.0], [13.3, 462.0], [13.4, 462.0], [13.5, 462.0], [13.6, 462.0], [13.7, 462.0], [13.8, 463.0], [13.9, 465.0], [14.0, 465.0], [14.1, 466.0], [14.2, 466.0], [14.3, 467.0], [14.4, 467.0], [14.5, 467.0], [14.6, 469.0], [14.7, 470.0], [14.8, 470.0], [14.9, 474.0], [15.0, 474.0], [15.1, 474.0], [15.2, 475.0], [15.3, 476.0], [15.4, 477.0], [15.5, 477.0], [15.6, 481.0], [15.7, 482.0], [15.8, 482.0], [15.9, 482.0], [16.0, 483.0], [16.1, 484.0], [16.2, 484.0], [16.3, 484.0], [16.4, 486.0], [16.5, 486.0], [16.6, 487.0], [16.7, 487.0], [16.8, 487.0], [16.9, 488.0], [17.0, 488.0], [17.1, 491.0], [17.2, 495.0], [17.3, 496.0], [17.4, 496.0], [17.5, 496.0], [17.6, 496.0], [17.7, 497.0], [17.8, 497.0], [17.9, 498.0], [18.0, 501.0], [18.1, 502.0], [18.2, 502.0], [18.3, 506.0], [18.4, 508.0], [18.5, 508.0], [18.6, 510.0], [18.7, 511.0], [18.8, 517.0], [18.9, 517.0], [19.0, 521.0], [19.1, 522.0], [19.2, 522.0], [19.3, 522.0], [19.4, 522.0], [19.5, 522.0], [19.6, 526.0], [19.7, 526.0], [19.8, 530.0], [19.9, 530.0], [20.0, 532.0], [20.1, 532.0], [20.2, 535.0], [20.3, 537.0], [20.4, 537.0], [20.5, 541.0], [20.6, 542.0], [20.7, 543.0], [20.8, 543.0], [20.9, 548.0], [21.0, 548.0], [21.1, 548.0], [21.2, 548.0], [21.3, 550.0], [21.4, 551.0], [21.5, 553.0], [21.6, 553.0], [21.7, 554.0], [21.8, 556.0], [21.9, 556.0], [22.0, 556.0], [22.1, 558.0], [22.2, 560.0], [22.3, 560.0], [22.4, 560.0], [22.5, 561.0], [22.6, 563.0], [22.7, 563.0], [22.8, 566.0], [22.9, 571.0], [23.0, 573.0], [23.1, 573.0], [23.2, 575.0], [23.3, 576.0], [23.4, 576.0], [23.5, 577.0], [23.6, 579.0], [23.7, 580.0], [23.8, 580.0], [23.9, 584.0], [24.0, 585.0], [24.1, 585.0], [24.2, 585.0], [24.3, 586.0], [24.4, 588.0], [24.5, 594.0], [24.6, 594.0], [24.7, 594.0], [24.8, 605.0], [24.9, 609.0], [25.0, 609.0], [25.1, 615.0], [25.2, 616.0], [25.3, 616.0], [25.4, 618.0], [25.5, 618.0], [25.6, 619.0], [25.7, 619.0], [25.8, 620.0], [25.9, 626.0], [26.0, 628.0], [26.1, 628.0], [26.2, 636.0], [26.3, 636.0], [26.4, 641.0], [26.5, 641.0], [26.6, 643.0], [26.7, 645.0], [26.8, 645.0], [26.9, 647.0], [27.0, 649.0], [27.1, 651.0], [27.2, 651.0], [27.3, 654.0], [27.4, 656.0], [27.5, 658.0], [27.6, 658.0], [27.7, 660.0], [27.8, 663.0], [27.9, 663.0], [28.0, 663.0], [28.1, 665.0], [28.2, 666.0], [28.3, 666.0], [28.4, 666.0], [28.5, 666.0], [28.6, 667.0], [28.7, 667.0], [28.8, 667.0], [28.9, 668.0], [29.0, 668.0], [29.1, 668.0], [29.2, 670.0], [29.3, 673.0], [29.4, 673.0], [29.5, 673.0], [29.6, 673.0], [29.7, 674.0], [29.8, 674.0], [29.9, 674.0], [30.0, 677.0], [30.1, 678.0], [30.2, 678.0], [30.3, 678.0], [30.4, 679.0], [30.5, 680.0], [30.6, 680.0], [30.7, 681.0], [30.8, 681.0], [30.9, 682.0], [31.0, 682.0], [31.1, 683.0], [31.2, 684.0], [31.3, 685.0], [31.4, 685.0], [31.5, 686.0], [31.6, 687.0], [31.7, 687.0], [31.8, 690.0], [31.9, 691.0], [32.0, 692.0], [32.1, 692.0], [32.2, 693.0], [32.3, 693.0], [32.4, 696.0], [32.5, 696.0], [32.6, 697.0], [32.7, 697.0], [32.8, 699.0], [32.9, 699.0], [33.0, 700.0], [33.1, 705.0], [33.2, 708.0], [33.3, 708.0], [33.4, 712.0], [33.5, 712.0], [33.6, 712.0], [33.7, 713.0], [33.8, 713.0], [33.9, 715.0], [34.0, 715.0], [34.1, 721.0], [34.2, 721.0], [34.3, 721.0], [34.4, 721.0], [34.5, 722.0], [34.6, 723.0], [34.7, 723.0], [34.8, 723.0], [34.9, 724.0], [35.0, 725.0], [35.1, 725.0], [35.2, 725.0], [35.3, 725.0], [35.4, 726.0], [35.5, 726.0], [35.6, 727.0], [35.7, 727.0], [35.8, 729.0], [35.9, 729.0], [36.0, 730.0], [36.1, 731.0], [36.2, 731.0], [36.3, 731.0], [36.4, 731.0], [36.5, 732.0], [36.6, 733.0], [36.7, 733.0], [36.8, 735.0], [36.9, 735.0], [37.0, 735.0], [37.1, 735.0], [37.2, 736.0], [37.3, 738.0], [37.4, 738.0], [37.5, 739.0], [37.6, 739.0], [37.7, 741.0], [37.8, 741.0], [37.9, 744.0], [38.0, 746.0], [38.1, 748.0], [38.2, 748.0], [38.3, 749.0], [38.4, 750.0], [38.5, 750.0], [38.6, 753.0], [38.7, 754.0], [38.8, 755.0], [38.9, 755.0], [39.0, 755.0], [39.1, 759.0], [39.2, 759.0], [39.3, 759.0], [39.4, 760.0], [39.5, 762.0], [39.6, 763.0], [39.7, 763.0], [39.8, 763.0], [39.9, 764.0], [40.0, 765.0], [40.1, 765.0], [40.2, 766.0], [40.3, 768.0], [40.4, 768.0], [40.5, 771.0], [40.6, 774.0], [40.7, 775.0], [40.8, 775.0], [40.9, 776.0], [41.0, 780.0], [41.1, 782.0], [41.2, 782.0], [41.3, 782.0], [41.4, 783.0], [41.5, 786.0], [41.6, 786.0], [41.7, 787.0], [41.8, 787.0], [41.9, 787.0], [42.0, 791.0], [42.1, 792.0], [42.2, 792.0], [42.3, 792.0], [42.4, 793.0], [42.5, 795.0], [42.6, 797.0], [42.7, 797.0], [42.8, 802.0], [42.9, 803.0], [43.0, 807.0], [43.1, 807.0], [43.2, 816.0], [43.3, 818.0], [43.4, 818.0], [43.5, 818.0], [43.6, 818.0], [43.7, 819.0], [43.8, 819.0], [43.9, 819.0], [44.0, 820.0], [44.1, 825.0], [44.2, 825.0], [44.3, 826.0], [44.4, 831.0], [44.5, 831.0], [44.6, 831.0], [44.7, 832.0], [44.8, 836.0], [44.9, 839.0], [45.0, 839.0], [45.1, 842.0], [45.2, 847.0], [45.3, 847.0], [45.4, 852.0], [45.5, 854.0], [45.6, 856.0], [45.7, 856.0], [45.8, 858.0], [45.9, 860.0], [46.0, 863.0], [46.1, 863.0], [46.2, 866.0], [46.3, 869.0], [46.4, 873.0], [46.5, 873.0], [46.6, 873.0], [46.7, 874.0], [46.8, 874.0], [46.9, 877.0], [47.0, 879.0], [47.1, 885.0], [47.2, 885.0], [47.3, 886.0], [47.4, 891.0], [47.5, 891.0], [47.6, 891.0], [47.7, 900.0], [47.8, 901.0], [47.9, 906.0], [48.0, 906.0], [48.1, 907.0], [48.2, 918.0], [48.3, 922.0], [48.4, 922.0], [48.5, 926.0], [48.6, 928.0], [48.7, 928.0], [48.8, 929.0], [48.9, 929.0], [49.0, 932.0], [49.1, 932.0], [49.2, 934.0], [49.3, 934.0], [49.4, 937.0], [49.5, 937.0], [49.6, 940.0], [49.7, 942.0], [49.8, 943.0], [49.9, 943.0], [50.0, 944.0], [50.1, 944.0], [50.2, 944.0], [50.3, 946.0], [50.4, 949.0], [50.5, 950.0], [50.6, 950.0], [50.7, 952.0], [50.8, 954.0], [50.9, 955.0], [51.0, 955.0], [51.1, 960.0], [51.2, 965.0], [51.3, 969.0], [51.4, 969.0], [51.5, 974.0], [51.6, 975.0], [51.7, 975.0], [51.8, 976.0], [51.9, 980.0], [52.0, 982.0], [52.1, 982.0], [52.2, 982.0], [52.3, 984.0], [52.4, 985.0], [52.5, 985.0], [52.6, 986.0], [52.7, 987.0], [52.8, 988.0], [52.9, 988.0], [53.0, 989.0], [53.1, 990.0], [53.2, 993.0], [53.3, 993.0], [53.4, 1001.0], [53.5, 1001.0], [53.6, 1001.0], [53.7, 1002.0], [53.8, 1006.0], [53.9, 1010.0], [54.0, 1010.0], [54.1, 1011.0], [54.2, 1013.0], [54.3, 1015.0], [54.4, 1015.0], [54.5, 1016.0], [54.6, 1016.0], [54.7, 1017.0], [54.8, 1017.0], [54.9, 1022.0], [55.0, 1023.0], [55.1, 1023.0], [55.2, 1024.0], [55.3, 1025.0], [55.4, 1029.0], [55.5, 1029.0], [55.6, 1030.0], [55.7, 1040.0], [55.8, 1045.0], [55.9, 1045.0], [56.0, 1046.0], [56.1, 1058.0], [56.2, 1063.0], [56.3, 1063.0], [56.4, 1066.0], [56.5, 1067.0], [56.6, 1072.0], [56.7, 1072.0], [56.8, 1077.0], [56.9, 1081.0], [57.0, 1081.0], [57.1, 1085.0], [57.2, 1097.0], [57.3, 1105.0], [57.4, 1105.0], [57.5, 1107.0], [57.6, 1108.0], [57.7, 1109.0], [57.8, 1109.0], [57.9, 1113.0], [58.0, 1116.0], [58.1, 1118.0], [58.2, 1118.0], [58.3, 1122.0], [58.4, 1123.0], [58.5, 1123.0], [58.6, 1125.0], [58.7, 1125.0], [58.8, 1126.0], [58.9, 1126.0], [59.0, 1126.0], [59.1, 1131.0], [59.2, 1135.0], [59.3, 1135.0], [59.4, 1137.0], [59.5, 1138.0], [59.6, 1141.0], [59.7, 1141.0], [59.8, 1142.0], [59.9, 1149.0], [60.0, 1150.0], [60.1, 1150.0], [60.2, 1154.0], [60.3, 1159.0], [60.4, 1159.0], [60.5, 1161.0], [60.6, 1165.0], [60.7, 1167.0], [60.8, 1167.0], [60.9, 1168.0], [61.0, 1171.0], [61.1, 1174.0], [61.2, 1174.0], [61.3, 1175.0], [61.4, 1180.0], [61.5, 1184.0], [61.6, 1184.0], [61.7, 1186.0], [61.8, 1186.0], [61.9, 1186.0], [62.0, 1195.0], [62.1, 1198.0], [62.2, 1198.0], [62.3, 1198.0], [62.4, 1199.0], [62.5, 1201.0], [62.6, 1204.0], [62.7, 1204.0], [62.8, 1207.0], [62.9, 1209.0], [63.0, 1211.0], [63.1, 1211.0], [63.2, 1211.0], [63.3, 1214.0], [63.4, 1214.0], [63.5, 1217.0], [63.6, 1219.0], [63.7, 1235.0], [63.8, 1235.0], [63.9, 1247.0], [64.0, 1253.0], [64.1, 1257.0], [64.2, 1257.0], [64.3, 1257.0], [64.4, 1258.0], [64.5, 1262.0], [64.6, 1262.0], [64.7, 1265.0], [64.8, 1266.0], [64.9, 1270.0], [65.0, 1270.0], [65.1, 1273.0], [65.2, 1273.0], [65.3, 1273.0], [65.4, 1280.0], [65.5, 1282.0], [65.6, 1288.0], [65.7, 1288.0], [65.8, 1290.0], [65.9, 1296.0], [66.0, 1304.0], [66.1, 1304.0], [66.2, 1307.0], [66.3, 1312.0], [66.4, 1318.0], [66.5, 1318.0], [66.6, 1325.0], [66.7, 1331.0], [66.8, 1331.0], [66.9, 1337.0], [67.0, 1348.0], [67.1, 1349.0], [67.2, 1349.0], [67.3, 1354.0], [67.4, 1354.0], [67.5, 1354.0], [67.6, 1354.0], [67.7, 1360.0], [67.8, 1362.0], [67.9, 1362.0], [68.0, 1362.0], [68.1, 1367.0], [68.2, 1371.0], [68.3, 1372.0], [68.4, 1372.0], [68.5, 1372.0], [68.6, 1373.0], [68.7, 1373.0], [68.8, 1377.0], [68.9, 1377.0], [69.0, 1377.0], [69.1, 1377.0], [69.2, 1381.0], [69.3, 1382.0], [69.4, 1389.0], [69.5, 1389.0], [69.6, 1393.0], [69.7, 1394.0], [69.8, 1396.0], [69.9, 1396.0], [70.0, 1396.0], [70.1, 1397.0], [70.2, 1397.0], [70.3, 1403.0], [70.4, 1403.0], [70.5, 1417.0], [70.6, 1417.0], [70.7, 1421.0], [70.8, 1422.0], [70.9, 1424.0], [71.0, 1424.0], [71.1, 1426.0], [71.2, 1429.0], [71.3, 1431.0], [71.4, 1431.0], [71.5, 1431.0], [71.6, 1436.0], [71.7, 1436.0], [71.8, 1438.0], [71.9, 1439.0], [72.0, 1440.0], [72.1, 1440.0], [72.2, 1445.0], [72.3, 1446.0], [72.4, 1447.0], [72.5, 1447.0], [72.6, 1447.0], [72.7, 1450.0], [72.8, 1451.0], [72.9, 1451.0], [73.0, 1454.0], [73.1, 1455.0], [73.2, 1460.0], [73.3, 1460.0], [73.4, 1462.0], [73.5, 1464.0], [73.6, 1464.0], [73.7, 1465.0], [73.8, 1465.0], [73.9, 1466.0], [74.0, 1466.0], [74.1, 1469.0], [74.2, 1469.0], [74.3, 1471.0], [74.4, 1471.0], [74.5, 1478.0], [74.6, 1479.0], [74.7, 1480.0], [74.8, 1480.0], [74.9, 1481.0], [75.0, 1484.0], [75.1, 1484.0], [75.2, 1486.0], [75.3, 1488.0], [75.4, 1490.0], [75.5, 1490.0], [75.6, 1493.0], [75.7, 1495.0], [75.8, 1495.0], [75.9, 1495.0], [76.0, 1496.0], [76.1, 1498.0], [76.2, 1500.0], [76.3, 1500.0], [76.4, 1500.0], [76.5, 1512.0], [76.6, 1516.0], [76.7, 1516.0], [76.8, 1521.0], [76.9, 1525.0], [77.0, 1525.0], [77.1, 1526.0], [77.2, 1532.0], [77.3, 1533.0], [77.4, 1533.0], [77.5, 1533.0], [77.6, 1533.0], [77.7, 1536.0], [77.8, 1536.0], [77.9, 1536.0], [78.0, 1537.0], [78.1, 1545.0], [78.2, 1545.0], [78.3, 1548.0], [78.4, 1549.0], [78.5, 1549.0], [78.6, 1550.0], [78.7, 1553.0], [78.8, 1555.0], [78.9, 1555.0], [79.0, 1558.0], [79.1, 1559.0], [79.2, 1561.0], [79.3, 1561.0], [79.4, 1561.0], [79.5, 1562.0], [79.6, 1563.0], [79.7, 1563.0], [79.8, 1565.0], [79.9, 1578.0], [80.0, 1579.0], [80.1, 1579.0], [80.2, 1582.0], [80.3, 1595.0], [80.4, 1595.0], [80.5, 1601.0], [80.6, 1607.0], [80.7, 1617.0], [80.8, 1617.0], [80.9, 1624.0], [81.0, 1634.0], [81.1, 1634.0], [81.2, 1634.0], [81.3, 1635.0], [81.4, 1637.0], [81.5, 1641.0], [81.6, 1641.0], [81.7, 1644.0], [81.8, 1645.0], [81.9, 1645.0], [82.0, 1651.0], [82.1, 1658.0], [82.2, 1661.0], [82.3, 1661.0], [82.4, 1662.0], [82.5, 1665.0], [82.6, 1667.0], [82.7, 1667.0], [82.8, 1673.0], [82.9, 1677.0], [83.0, 1689.0], [83.1, 1689.0], [83.2, 1692.0], [83.3, 1694.0], [83.4, 1694.0], [83.5, 1696.0], [83.6, 1698.0], [83.7, 1701.0], [83.8, 1701.0], [83.9, 1704.0], [84.0, 1710.0], [84.1, 1711.0], [84.2, 1711.0], [84.3, 1716.0], [84.4, 1717.0], [84.5, 1718.0], [84.6, 1718.0], [84.7, 1724.0], [84.8, 1725.0], [84.9, 1732.0], [85.0, 1732.0], [85.1, 1738.0], [85.2, 1741.0], [85.3, 1741.0], [85.4, 1746.0], [85.5, 1749.0], [85.6, 1753.0], [85.7, 1753.0], [85.8, 1753.0], [85.9, 1756.0], [86.0, 1758.0], [86.1, 1758.0], [86.2, 1759.0], [86.3, 1761.0], [86.4, 1762.0], [86.5, 1762.0], [86.6, 1764.0], [86.7, 1766.0], [86.8, 1766.0], [86.9, 1770.0], [87.0, 1772.0], [87.1, 1773.0], [87.2, 1773.0], [87.3, 1781.0], [87.4, 1787.0], [87.5, 1804.0], [87.6, 1804.0], [87.7, 1807.0], [87.8, 1811.0], [87.9, 1812.0], [88.0, 1812.0], [88.1, 1817.0], [88.2, 1829.0], [88.3, 1831.0], [88.4, 1831.0], [88.5, 1832.0], [88.6, 1844.0], [88.7, 1844.0], [88.8, 1846.0], [88.9, 1854.0], [89.0, 1854.0], [89.1, 1854.0], [89.2, 1861.0], [89.3, 1866.0], [89.4, 1870.0], [89.5, 1870.0], [89.6, 1876.0], [89.7, 1880.0], [89.8, 1887.0], [89.9, 1887.0], [90.0, 1888.0], [90.1, 1892.0], [90.2, 1892.0], [90.3, 1896.0], [90.4, 1898.0], [90.5, 1900.0], [90.6, 1900.0], [90.7, 1901.0], [90.8, 1904.0], [90.9, 1906.0], [91.0, 1906.0], [91.1, 1907.0], [91.2, 1918.0], [91.3, 1920.0], [91.4, 1920.0], [91.5, 1921.0], [91.6, 1923.0], [91.7, 1923.0], [91.8, 1936.0], [91.9, 1936.0], [92.0, 1938.0], [92.1, 1938.0], [92.2, 1943.0], [92.3, 1943.0], [92.4, 1943.0], [92.5, 1943.0], [92.6, 1947.0], [92.7, 1947.0], [92.8, 1963.0], [92.9, 1963.0], [93.0, 1982.0], [93.1, 1983.0], [93.2, 2005.0], [93.3, 2005.0], [93.4, 2009.0], [93.5, 2024.0], [93.6, 2024.0], [93.7, 2047.0], [93.8, 2058.0], [93.9, 2059.0], [94.0, 2059.0], [94.1, 2062.0], [94.2, 2063.0], [94.3, 2071.0], [94.4, 2071.0], [94.5, 2084.0], [94.6, 2085.0], [94.7, 2094.0], [94.8, 2094.0], [94.9, 2106.0], [95.0, 2108.0], [95.1, 2108.0], [95.2, 2115.0], [95.3, 2129.0], [95.4, 2138.0], [95.5, 2138.0], [95.6, 2138.0], [95.7, 2160.0], [95.8, 2176.0], [95.9, 2176.0], [96.0, 2200.0], [96.1, 2201.0], [96.2, 2210.0], [96.3, 2210.0], [96.4, 2212.0], [96.5, 2237.0], [96.6, 2257.0], [96.7, 2257.0], [96.8, 2273.0], [96.9, 2276.0], [97.0, 2276.0], [97.1, 2315.0], [97.2, 2327.0], [97.3, 2345.0], [97.4, 2345.0], [97.5, 2379.0], [97.6, 2402.0], [97.7, 2416.0], [97.8, 2416.0], [97.9, 2418.0], [98.0, 2425.0], [98.1, 2427.0], [98.2, 2427.0], [98.3, 2443.0], [98.4, 2712.0], [98.5, 2712.0], [98.6, 2789.0], [98.7, 2812.0], [98.8, 3029.0], [98.9, 3029.0], [99.0, 3122.0], [99.1, 3176.0], [99.2, 3248.0], [99.3, 3248.0], [99.4, 3321.0], [99.5, 3367.0], [99.6, 3499.0], [99.7, 3499.0], [99.8, 4408.0], [99.9, 4652.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 72.0, "series": [{"data": [[600.0, 60.0], [700.0, 72.0], [800.0, 36.0], [900.0, 42.0], [1000.0, 29.0], [1100.0, 38.0], [1200.0, 26.0], [1300.0, 31.0], [1400.0, 44.0], [1500.0, 31.0], [1600.0, 24.0], [100.0, 1.0], [1700.0, 28.0], [1800.0, 22.0], [1900.0, 20.0], [2000.0, 12.0], [2100.0, 8.0], [2200.0, 8.0], [2300.0, 4.0], [2400.0, 6.0], [2700.0, 2.0], [2800.0, 1.0], [3000.0, 1.0], [3100.0, 2.0], [200.0, 22.0], [3200.0, 1.0], [3300.0, 2.0], [3400.0, 1.0], [4600.0, 1.0], [4400.0, 1.0], [300.0, 44.0], [400.0, 65.0], [500.0, 50.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 132.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 430.0, "series": [{"data": [[0.0, 132.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 430.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 173.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.892086330935252, "minX": 1.60440696E12, "maxY": 10.0, "series": [{"data": [[1.60440702E12, 9.892086330935252], [1.60440696E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440702E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 336.0, "minX": 1.0, "maxY": 1085.1942148760334, "series": [{"data": [[8.0, 336.0], [4.0, 681.0], [2.0, 721.0], [1.0, 1045.0], [9.0, 731.0], [10.0, 1085.1942148760334], [5.0, 722.0], [6.0, 654.0], [3.0, 763.0], [7.0, 886.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1080.8027210884356]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2399.4, "minX": 1.60440696E12, "maxY": 1032499.55, "series": [{"data": [[1.60440702E12, 1032499.55], [1.60440696E12, 803267.7666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60440702E12, 3123.633333333333], [1.60440696E12, 2399.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440702E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1058.249400479617, "minX": 1.60440696E12, "maxY": 1110.377358490565, "series": [{"data": [[1.60440702E12, 1058.249400479617], [1.60440696E12, 1110.377358490565]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440702E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1056.9904076738608, "minX": 1.60440696E12, "maxY": 1109.0691823899367, "series": [{"data": [[1.60440702E12, 1056.9904076738608], [1.60440696E12, 1109.0691823899367]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440702E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.026378896882494025, "minX": 1.60440696E12, "maxY": 0.28301886792452796, "series": [{"data": [[1.60440702E12, 0.026378896882494025], [1.60440696E12, 0.28301886792452796]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440702E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 187.0, "minX": 1.60440696E12, "maxY": 4652.0, "series": [{"data": [[1.60440702E12, 4652.0], [1.60440696E12, 3499.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60440702E12, 227.52399980068208], [1.60440696E12, 215.87099992394448]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60440702E12, 229.52020043849944], [1.60440696E12, 216.15810003042222]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60440702E12, 227.94199990034105], [1.60440696E12, 216.03049996197223]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60440702E12, 187.0], [1.60440696E12, 213.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60440702E12, 929.0], [1.60440696E12, 957.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440702E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 456.0, "minX": 1.0, "maxY": 3102.5, "series": [{"data": [[2.0, 993.5], [8.0, 1198.5], [9.0, 891.0], [10.0, 873.0], [11.0, 980.0], [12.0, 703.5], [13.0, 758.5], [14.0, 824.5], [15.0, 873.0], [4.0, 3102.5], [16.0, 653.0], [1.0, 1045.0], [17.0, 563.0], [18.0, 456.0], [5.0, 550.0], [6.0, 1382.5], [7.0, 1438.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 455.0, "minX": 1.0, "maxY": 3101.5, "series": [{"data": [[2.0, 983.5], [8.0, 1197.5], [9.0, 890.0], [10.0, 872.5], [11.0, 980.0], [12.0, 702.5], [13.0, 758.0], [14.0, 824.0], [15.0, 873.0], [4.0, 3101.5], [16.0, 652.0], [1.0, 1045.0], [17.0, 563.0], [18.0, 455.0], [5.0, 548.0], [6.0, 1375.5], [7.0, 1437.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.466666666666667, "minX": 1.60440696E12, "maxY": 6.783333333333333, "series": [{"data": [[1.60440702E12, 6.783333333333333], [1.60440696E12, 5.466666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440702E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.3, "minX": 1.60440696E12, "maxY": 6.95, "series": [{"data": [[1.60440702E12, 6.95], [1.60440696E12, 5.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440702E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.3, "minX": 1.60440696E12, "maxY": 6.95, "series": [{"data": [[1.60440702E12, 6.95], [1.60440696E12, 5.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440702E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.3, "minX": 1.60440696E12, "maxY": 6.95, "series": [{"data": [[1.60440702E12, 6.95], [1.60440696E12, 5.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440702E12, "title": "Total Transactions Per Second"}},
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

