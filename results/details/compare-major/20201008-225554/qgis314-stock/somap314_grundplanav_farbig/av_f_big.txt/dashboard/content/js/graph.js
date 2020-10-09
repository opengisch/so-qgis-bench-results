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
        data: {"result": {"minY": 202.0, "minX": 0.0, "maxY": 4619.0, "series": [{"data": [[0.0, 202.0], [0.1, 202.0], [0.2, 205.0], [0.3, 213.0], [0.4, 213.0], [0.5, 215.0], [0.6, 217.0], [0.7, 219.0], [0.8, 219.0], [0.9, 223.0], [1.0, 224.0], [1.1, 225.0], [1.2, 225.0], [1.3, 227.0], [1.4, 228.0], [1.5, 230.0], [1.6, 230.0], [1.7, 231.0], [1.8, 233.0], [1.9, 233.0], [2.0, 236.0], [2.1, 244.0], [2.2, 247.0], [2.3, 247.0], [2.4, 248.0], [2.5, 266.0], [2.6, 302.0], [2.7, 302.0], [2.8, 307.0], [2.9, 310.0], [3.0, 313.0], [3.1, 313.0], [3.2, 314.0], [3.3, 314.0], [3.4, 314.0], [3.5, 318.0], [3.6, 319.0], [3.7, 326.0], [3.8, 326.0], [3.9, 329.0], [4.0, 329.0], [4.1, 330.0], [4.2, 330.0], [4.3, 333.0], [4.4, 335.0], [4.5, 335.0], [4.6, 335.0], [4.7, 337.0], [4.8, 338.0], [4.9, 340.0], [5.0, 340.0], [5.1, 342.0], [5.2, 343.0], [5.3, 343.0], [5.4, 349.0], [5.5, 350.0], [5.6, 352.0], [5.7, 352.0], [5.8, 353.0], [5.9, 353.0], [6.0, 353.0], [6.1, 353.0], [6.2, 354.0], [6.3, 354.0], [6.4, 356.0], [6.5, 356.0], [6.6, 356.0], [6.7, 356.0], [6.8, 356.0], [6.9, 357.0], [7.0, 359.0], [7.1, 360.0], [7.2, 360.0], [7.3, 361.0], [7.4, 363.0], [7.5, 365.0], [7.6, 365.0], [7.7, 368.0], [7.8, 368.0], [7.9, 372.0], [8.0, 372.0], [8.1, 373.0], [8.2, 377.0], [8.3, 382.0], [8.4, 382.0], [8.5, 383.0], [8.6, 387.0], [8.7, 387.0], [8.8, 388.0], [8.9, 391.0], [9.0, 394.0], [9.1, 394.0], [9.2, 394.0], [9.3, 399.0], [9.4, 401.0], [9.5, 401.0], [9.6, 402.0], [9.7, 407.0], [9.8, 409.0], [9.9, 409.0], [10.0, 412.0], [10.1, 418.0], [10.2, 418.0], [10.3, 426.0], [10.4, 434.0], [10.5, 434.0], [10.6, 434.0], [10.7, 437.0], [10.8, 438.0], [10.9, 438.0], [11.0, 438.0], [11.1, 441.0], [11.2, 441.0], [11.3, 447.0], [11.4, 447.0], [11.5, 447.0], [11.6, 448.0], [11.7, 448.0], [11.8, 449.0], [11.9, 453.0], [12.0, 455.0], [12.1, 455.0], [12.2, 457.0], [12.3, 458.0], [12.4, 460.0], [12.5, 460.0], [12.6, 460.0], [12.7, 461.0], [12.8, 461.0], [12.9, 461.0], [13.0, 462.0], [13.1, 466.0], [13.2, 466.0], [13.3, 466.0], [13.4, 468.0], [13.5, 471.0], [13.6, 471.0], [13.7, 471.0], [13.8, 475.0], [13.9, 475.0], [14.0, 475.0], [14.1, 475.0], [14.2, 476.0], [14.3, 477.0], [14.4, 477.0], [14.5, 478.0], [14.6, 479.0], [14.7, 480.0], [14.8, 480.0], [14.9, 480.0], [15.0, 481.0], [15.1, 481.0], [15.2, 484.0], [15.3, 484.0], [15.4, 485.0], [15.5, 485.0], [15.6, 492.0], [15.7, 493.0], [15.8, 497.0], [15.9, 497.0], [16.0, 499.0], [16.1, 502.0], [16.2, 503.0], [16.3, 503.0], [16.4, 503.0], [16.5, 512.0], [16.6, 515.0], [16.7, 515.0], [16.8, 523.0], [16.9, 527.0], [17.0, 527.0], [17.1, 533.0], [17.2, 536.0], [17.3, 537.0], [17.4, 537.0], [17.5, 538.0], [17.6, 538.0], [17.7, 539.0], [17.8, 539.0], [17.9, 539.0], [18.0, 540.0], [18.1, 542.0], [18.2, 542.0], [18.3, 542.0], [18.4, 543.0], [18.5, 543.0], [18.6, 544.0], [18.7, 547.0], [18.8, 549.0], [18.9, 549.0], [19.0, 551.0], [19.1, 551.0], [19.2, 553.0], [19.3, 553.0], [19.4, 553.0], [19.5, 556.0], [19.6, 556.0], [19.7, 556.0], [19.8, 557.0], [19.9, 558.0], [20.0, 559.0], [20.1, 559.0], [20.2, 559.0], [20.3, 559.0], [20.4, 559.0], [20.5, 562.0], [20.6, 563.0], [20.7, 563.0], [20.8, 563.0], [20.9, 564.0], [21.0, 564.0], [21.1, 565.0], [21.2, 565.0], [21.3, 569.0], [21.4, 569.0], [21.5, 570.0], [21.6, 570.0], [21.7, 577.0], [21.8, 578.0], [21.9, 578.0], [22.0, 578.0], [22.1, 579.0], [22.2, 580.0], [22.3, 580.0], [22.4, 580.0], [22.5, 581.0], [22.6, 581.0], [22.7, 581.0], [22.8, 583.0], [22.9, 584.0], [23.0, 587.0], [23.1, 587.0], [23.2, 590.0], [23.3, 592.0], [23.4, 592.0], [23.5, 593.0], [23.6, 596.0], [23.7, 597.0], [23.8, 597.0], [23.9, 597.0], [24.0, 597.0], [24.1, 599.0], [24.2, 599.0], [24.3, 601.0], [24.4, 602.0], [24.5, 602.0], [24.6, 602.0], [24.7, 604.0], [24.8, 610.0], [24.9, 611.0], [25.0, 611.0], [25.1, 615.0], [25.2, 615.0], [25.3, 615.0], [25.4, 618.0], [25.5, 618.0], [25.6, 621.0], [25.7, 621.0], [25.8, 626.0], [25.9, 626.0], [26.0, 627.0], [26.1, 627.0], [26.2, 634.0], [26.3, 636.0], [26.4, 637.0], [26.5, 637.0], [26.6, 639.0], [26.7, 642.0], [26.8, 642.0], [26.9, 643.0], [27.0, 644.0], [27.1, 645.0], [27.2, 645.0], [27.3, 645.0], [27.4, 651.0], [27.5, 652.0], [27.6, 652.0], [27.7, 655.0], [27.8, 658.0], [27.9, 662.0], [28.0, 662.0], [28.1, 665.0], [28.2, 666.0], [28.3, 666.0], [28.4, 666.0], [28.5, 667.0], [28.6, 667.0], [28.7, 667.0], [28.8, 669.0], [28.9, 671.0], [29.0, 673.0], [29.1, 673.0], [29.2, 674.0], [29.3, 674.0], [29.4, 677.0], [29.5, 677.0], [29.6, 677.0], [29.7, 678.0], [29.8, 679.0], [29.9, 679.0], [30.0, 680.0], [30.1, 682.0], [30.2, 682.0], [30.3, 684.0], [30.4, 685.0], [30.5, 686.0], [30.6, 686.0], [30.7, 688.0], [30.8, 688.0], [30.9, 689.0], [31.0, 689.0], [31.1, 691.0], [31.2, 697.0], [31.3, 698.0], [31.4, 698.0], [31.5, 702.0], [31.6, 704.0], [31.7, 704.0], [31.8, 705.0], [31.9, 706.0], [32.0, 707.0], [32.1, 707.0], [32.2, 708.0], [32.3, 708.0], [32.4, 708.0], [32.5, 708.0], [32.6, 709.0], [32.7, 710.0], [32.8, 712.0], [32.9, 712.0], [33.0, 715.0], [33.1, 715.0], [33.2, 717.0], [33.3, 717.0], [33.4, 719.0], [33.5, 721.0], [33.6, 721.0], [33.7, 722.0], [33.8, 723.0], [33.9, 723.0], [34.0, 723.0], [34.1, 724.0], [34.2, 725.0], [34.3, 725.0], [34.4, 725.0], [34.5, 727.0], [34.6, 727.0], [34.7, 727.0], [34.8, 727.0], [34.9, 727.0], [35.0, 727.0], [35.1, 727.0], [35.2, 727.0], [35.3, 731.0], [35.4, 734.0], [35.5, 734.0], [35.6, 734.0], [35.7, 735.0], [35.8, 735.0], [35.9, 735.0], [36.0, 735.0], [36.1, 736.0], [36.2, 739.0], [36.3, 739.0], [36.4, 740.0], [36.5, 743.0], [36.6, 743.0], [36.7, 743.0], [36.8, 744.0], [36.9, 745.0], [37.0, 745.0], [37.1, 745.0], [37.2, 746.0], [37.3, 746.0], [37.4, 746.0], [37.5, 751.0], [37.6, 751.0], [37.7, 754.0], [37.8, 754.0], [37.9, 755.0], [38.0, 755.0], [38.1, 760.0], [38.2, 760.0], [38.3, 760.0], [38.4, 760.0], [38.5, 760.0], [38.6, 761.0], [38.7, 762.0], [38.8, 762.0], [38.9, 762.0], [39.0, 763.0], [39.1, 765.0], [39.2, 766.0], [39.3, 766.0], [39.4, 767.0], [39.5, 767.0], [39.6, 767.0], [39.7, 767.0], [39.8, 768.0], [39.9, 768.0], [40.0, 770.0], [40.1, 770.0], [40.2, 770.0], [40.3, 771.0], [40.4, 771.0], [40.5, 772.0], [40.6, 775.0], [40.7, 778.0], [40.8, 778.0], [40.9, 781.0], [41.0, 784.0], [41.1, 791.0], [41.2, 791.0], [41.3, 792.0], [41.4, 799.0], [41.5, 802.0], [41.6, 802.0], [41.7, 804.0], [41.8, 806.0], [41.9, 806.0], [42.0, 812.0], [42.1, 814.0], [42.2, 816.0], [42.3, 816.0], [42.4, 816.0], [42.5, 816.0], [42.6, 817.0], [42.7, 817.0], [42.8, 823.0], [42.9, 823.0], [43.0, 824.0], [43.1, 824.0], [43.2, 829.0], [43.3, 830.0], [43.4, 830.0], [43.5, 837.0], [43.6, 838.0], [43.7, 840.0], [43.8, 840.0], [43.9, 842.0], [44.0, 844.0], [44.1, 846.0], [44.2, 846.0], [44.3, 849.0], [44.4, 849.0], [44.5, 853.0], [44.6, 853.0], [44.7, 853.0], [44.8, 854.0], [44.9, 859.0], [45.0, 859.0], [45.1, 860.0], [45.2, 860.0], [45.3, 860.0], [45.4, 865.0], [45.5, 872.0], [45.6, 874.0], [45.7, 874.0], [45.8, 878.0], [45.9, 878.0], [46.0, 882.0], [46.1, 882.0], [46.2, 887.0], [46.3, 889.0], [46.4, 893.0], [46.5, 893.0], [46.6, 895.0], [46.7, 896.0], [46.8, 896.0], [46.9, 897.0], [47.0, 898.0], [47.1, 901.0], [47.2, 901.0], [47.3, 902.0], [47.4, 904.0], [47.5, 909.0], [47.6, 909.0], [47.7, 910.0], [47.8, 910.0], [47.9, 913.0], [48.0, 913.0], [48.1, 917.0], [48.2, 917.0], [48.3, 922.0], [48.4, 922.0], [48.5, 924.0], [48.6, 924.0], [48.7, 924.0], [48.8, 926.0], [48.9, 926.0], [49.0, 927.0], [49.1, 927.0], [49.2, 928.0], [49.3, 931.0], [49.4, 931.0], [49.5, 931.0], [49.6, 931.0], [49.7, 932.0], [49.8, 939.0], [49.9, 939.0], [50.0, 940.0], [50.1, 941.0], [50.2, 941.0], [50.3, 945.0], [50.4, 946.0], [50.5, 950.0], [50.6, 950.0], [50.7, 950.0], [50.8, 951.0], [50.9, 955.0], [51.0, 955.0], [51.1, 959.0], [51.2, 962.0], [51.3, 964.0], [51.4, 964.0], [51.5, 965.0], [51.6, 966.0], [51.7, 966.0], [51.8, 969.0], [51.9, 972.0], [52.0, 979.0], [52.1, 979.0], [52.2, 986.0], [52.3, 988.0], [52.4, 991.0], [52.5, 991.0], [52.6, 993.0], [52.7, 1004.0], [52.8, 1004.0], [52.9, 1004.0], [53.0, 1017.0], [53.1, 1017.0], [53.2, 1018.0], [53.3, 1018.0], [53.4, 1022.0], [53.5, 1029.0], [53.6, 1029.0], [53.7, 1030.0], [53.8, 1033.0], [53.9, 1034.0], [54.0, 1034.0], [54.1, 1035.0], [54.2, 1035.0], [54.3, 1038.0], [54.4, 1038.0], [54.5, 1041.0], [54.6, 1043.0], [54.7, 1046.0], [54.8, 1046.0], [54.9, 1052.0], [55.0, 1055.0], [55.1, 1055.0], [55.2, 1055.0], [55.3, 1061.0], [55.4, 1069.0], [55.5, 1069.0], [55.6, 1070.0], [55.7, 1070.0], [55.8, 1071.0], [55.9, 1071.0], [56.0, 1072.0], [56.1, 1075.0], [56.2, 1078.0], [56.3, 1078.0], [56.4, 1079.0], [56.5, 1080.0], [56.6, 1084.0], [56.7, 1084.0], [56.8, 1086.0], [56.9, 1086.0], [57.0, 1086.0], [57.1, 1089.0], [57.2, 1099.0], [57.3, 1103.0], [57.4, 1103.0], [57.5, 1106.0], [57.6, 1109.0], [57.7, 1112.0], [57.8, 1112.0], [57.9, 1117.0], [58.0, 1117.0], [58.1, 1119.0], [58.2, 1119.0], [58.3, 1119.0], [58.4, 1123.0], [58.5, 1123.0], [58.6, 1124.0], [58.7, 1127.0], [58.8, 1130.0], [58.9, 1130.0], [59.0, 1131.0], [59.1, 1131.0], [59.2, 1133.0], [59.3, 1133.0], [59.4, 1134.0], [59.5, 1135.0], [59.6, 1145.0], [59.7, 1145.0], [59.8, 1152.0], [59.9, 1157.0], [60.0, 1157.0], [60.1, 1157.0], [60.2, 1169.0], [60.3, 1171.0], [60.4, 1171.0], [60.5, 1175.0], [60.6, 1189.0], [60.7, 1192.0], [60.8, 1192.0], [60.9, 1196.0], [61.0, 1200.0], [61.1, 1201.0], [61.2, 1201.0], [61.3, 1203.0], [61.4, 1203.0], [61.5, 1207.0], [61.6, 1207.0], [61.7, 1216.0], [61.8, 1216.0], [61.9, 1216.0], [62.0, 1217.0], [62.1, 1218.0], [62.2, 1218.0], [62.3, 1218.0], [62.4, 1221.0], [62.5, 1221.0], [62.6, 1223.0], [62.7, 1223.0], [62.8, 1226.0], [62.9, 1226.0], [63.0, 1227.0], [63.1, 1227.0], [63.2, 1228.0], [63.3, 1228.0], [63.4, 1228.0], [63.5, 1230.0], [63.6, 1233.0], [63.7, 1248.0], [63.8, 1248.0], [63.9, 1250.0], [64.0, 1251.0], [64.1, 1252.0], [64.2, 1252.0], [64.3, 1253.0], [64.4, 1255.0], [64.5, 1255.0], [64.6, 1255.0], [64.7, 1256.0], [64.8, 1257.0], [64.9, 1262.0], [65.0, 1262.0], [65.1, 1262.0], [65.2, 1265.0], [65.3, 1265.0], [65.4, 1267.0], [65.5, 1269.0], [65.6, 1269.0], [65.7, 1269.0], [65.8, 1275.0], [65.9, 1275.0], [66.0, 1280.0], [66.1, 1280.0], [66.2, 1281.0], [66.3, 1282.0], [66.4, 1284.0], [66.5, 1284.0], [66.6, 1285.0], [66.7, 1287.0], [66.8, 1287.0], [66.9, 1288.0], [67.0, 1293.0], [67.1, 1297.0], [67.2, 1297.0], [67.3, 1303.0], [67.4, 1304.0], [67.5, 1305.0], [67.6, 1305.0], [67.7, 1308.0], [67.8, 1312.0], [67.9, 1313.0], [68.0, 1313.0], [68.1, 1313.0], [68.2, 1317.0], [68.3, 1321.0], [68.4, 1321.0], [68.5, 1321.0], [68.6, 1323.0], [68.7, 1323.0], [68.8, 1327.0], [68.9, 1338.0], [69.0, 1345.0], [69.1, 1345.0], [69.2, 1348.0], [69.3, 1353.0], [69.4, 1357.0], [69.5, 1357.0], [69.6, 1361.0], [69.7, 1361.0], [69.8, 1365.0], [69.9, 1365.0], [70.0, 1370.0], [70.1, 1374.0], [70.2, 1374.0], [70.3, 1374.0], [70.4, 1375.0], [70.5, 1376.0], [70.6, 1376.0], [70.7, 1383.0], [70.8, 1384.0], [70.9, 1386.0], [71.0, 1386.0], [71.1, 1394.0], [71.2, 1397.0], [71.3, 1397.0], [71.4, 1397.0], [71.5, 1398.0], [71.6, 1400.0], [71.7, 1400.0], [71.8, 1410.0], [71.9, 1411.0], [72.0, 1411.0], [72.1, 1411.0], [72.2, 1414.0], [72.3, 1420.0], [72.4, 1423.0], [72.5, 1423.0], [72.6, 1426.0], [72.7, 1428.0], [72.8, 1432.0], [72.9, 1432.0], [73.0, 1435.0], [73.1, 1436.0], [73.2, 1437.0], [73.3, 1437.0], [73.4, 1437.0], [73.5, 1438.0], [73.6, 1438.0], [73.7, 1439.0], [73.8, 1439.0], [73.9, 1440.0], [74.0, 1440.0], [74.1, 1440.0], [74.2, 1440.0], [74.3, 1441.0], [74.4, 1441.0], [74.5, 1442.0], [74.6, 1442.0], [74.7, 1444.0], [74.8, 1444.0], [74.9, 1444.0], [75.0, 1446.0], [75.1, 1446.0], [75.2, 1459.0], [75.3, 1460.0], [75.4, 1460.0], [75.5, 1460.0], [75.6, 1461.0], [75.7, 1462.0], [75.8, 1465.0], [75.9, 1465.0], [76.0, 1465.0], [76.1, 1467.0], [76.2, 1472.0], [76.3, 1472.0], [76.4, 1474.0], [76.5, 1475.0], [76.6, 1476.0], [76.7, 1476.0], [76.8, 1486.0], [76.9, 1493.0], [77.0, 1493.0], [77.1, 1493.0], [77.2, 1494.0], [77.3, 1494.0], [77.4, 1494.0], [77.5, 1503.0], [77.6, 1506.0], [77.7, 1507.0], [77.8, 1507.0], [77.9, 1507.0], [78.0, 1510.0], [78.1, 1511.0], [78.2, 1511.0], [78.3, 1512.0], [78.4, 1513.0], [78.5, 1513.0], [78.6, 1513.0], [78.7, 1514.0], [78.8, 1519.0], [78.9, 1519.0], [79.0, 1519.0], [79.1, 1521.0], [79.2, 1522.0], [79.3, 1522.0], [79.4, 1524.0], [79.5, 1524.0], [79.6, 1528.0], [79.7, 1528.0], [79.8, 1529.0], [79.9, 1529.0], [80.0, 1530.0], [80.1, 1530.0], [80.2, 1535.0], [80.3, 1536.0], [80.4, 1536.0], [80.5, 1536.0], [80.6, 1538.0], [80.7, 1541.0], [80.8, 1541.0], [80.9, 1545.0], [81.0, 1546.0], [81.1, 1549.0], [81.2, 1549.0], [81.3, 1551.0], [81.4, 1554.0], [81.5, 1561.0], [81.6, 1561.0], [81.7, 1562.0], [81.8, 1564.0], [81.9, 1564.0], [82.0, 1564.0], [82.1, 1566.0], [82.2, 1566.0], [82.3, 1566.0], [82.4, 1572.0], [82.5, 1573.0], [82.6, 1573.0], [82.7, 1573.0], [82.8, 1577.0], [82.9, 1580.0], [83.0, 1581.0], [83.1, 1581.0], [83.2, 1582.0], [83.3, 1584.0], [83.4, 1584.0], [83.5, 1594.0], [83.6, 1595.0], [83.7, 1600.0], [83.8, 1600.0], [83.9, 1601.0], [84.0, 1601.0], [84.1, 1602.0], [84.2, 1602.0], [84.3, 1602.0], [84.4, 1617.0], [84.5, 1617.0], [84.6, 1617.0], [84.7, 1619.0], [84.8, 1626.0], [84.9, 1630.0], [85.0, 1630.0], [85.1, 1635.0], [85.2, 1635.0], [85.3, 1635.0], [85.4, 1638.0], [85.5, 1643.0], [85.6, 1654.0], [85.7, 1654.0], [85.8, 1661.0], [85.9, 1661.0], [86.0, 1663.0], [86.1, 1663.0], [86.2, 1664.0], [86.3, 1664.0], [86.4, 1666.0], [86.5, 1666.0], [86.6, 1672.0], [86.7, 1687.0], [86.8, 1687.0], [86.9, 1696.0], [87.0, 1699.0], [87.1, 1703.0], [87.2, 1703.0], [87.3, 1704.0], [87.4, 1705.0], [87.5, 1713.0], [87.6, 1713.0], [87.7, 1713.0], [87.8, 1714.0], [87.9, 1721.0], [88.0, 1721.0], [88.1, 1726.0], [88.2, 1731.0], [88.3, 1737.0], [88.4, 1737.0], [88.5, 1737.0], [88.6, 1740.0], [88.7, 1740.0], [88.8, 1740.0], [88.9, 1749.0], [89.0, 1751.0], [89.1, 1751.0], [89.2, 1752.0], [89.3, 1761.0], [89.4, 1763.0], [89.5, 1763.0], [89.6, 1766.0], [89.7, 1767.0], [89.8, 1770.0], [89.9, 1770.0], [90.0, 1770.0], [90.1, 1776.0], [90.2, 1776.0], [90.3, 1778.0], [90.4, 1778.0], [90.5, 1782.0], [90.6, 1782.0], [90.7, 1786.0], [90.8, 1797.0], [90.9, 1797.0], [91.0, 1797.0], [91.1, 1805.0], [91.2, 1811.0], [91.3, 1812.0], [91.4, 1812.0], [91.5, 1812.0], [91.6, 1817.0], [91.7, 1817.0], [91.8, 1818.0], [91.9, 1818.0], [92.0, 1820.0], [92.1, 1820.0], [92.2, 1825.0], [92.3, 1840.0], [92.4, 1844.0], [92.5, 1844.0], [92.6, 1848.0], [92.7, 1861.0], [92.8, 1895.0], [92.9, 1895.0], [93.0, 1909.0], [93.1, 1911.0], [93.2, 1958.0], [93.3, 1958.0], [93.4, 1967.0], [93.5, 1968.0], [93.6, 1968.0], [93.7, 1972.0], [93.8, 1992.0], [93.9, 1993.0], [94.0, 1993.0], [94.1, 2000.0], [94.2, 2005.0], [94.3, 2018.0], [94.4, 2018.0], [94.5, 2024.0], [94.6, 2035.0], [94.7, 2043.0], [94.8, 2043.0], [94.9, 2043.0], [95.0, 2056.0], [95.1, 2056.0], [95.2, 2063.0], [95.3, 2068.0], [95.4, 2102.0], [95.5, 2102.0], [95.6, 2121.0], [95.7, 2123.0], [95.8, 2134.0], [95.9, 2134.0], [96.0, 2152.0], [96.1, 2165.0], [96.2, 2195.0], [96.3, 2195.0], [96.4, 2210.0], [96.5, 2215.0], [96.6, 2230.0], [96.7, 2230.0], [96.8, 2314.0], [96.9, 2316.0], [97.0, 2316.0], [97.1, 2358.0], [97.2, 2368.0], [97.3, 2413.0], [97.4, 2413.0], [97.5, 2425.0], [97.6, 2454.0], [97.7, 2462.0], [97.8, 2462.0], [97.9, 2475.0], [98.0, 2551.0], [98.1, 2551.0], [98.2, 2551.0], [98.3, 2803.0], [98.4, 2822.0], [98.5, 2822.0], [98.6, 2891.0], [98.7, 2921.0], [98.8, 2925.0], [98.9, 2925.0], [99.0, 3000.0], [99.1, 3039.0], [99.2, 3078.0], [99.3, 3078.0], [99.4, 3340.0], [99.5, 3818.0], [99.6, 3971.0], [99.7, 3971.0], [99.8, 4139.0], [99.9, 4619.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 74.0, "series": [{"data": [[600.0, 53.0], [700.0, 74.0], [800.0, 41.0], [900.0, 41.0], [1000.0, 34.0], [1100.0, 27.0], [1200.0, 46.0], [1300.0, 32.0], [1400.0, 43.0], [1500.0, 46.0], [1600.0, 25.0], [1700.0, 29.0], [1800.0, 14.0], [1900.0, 8.0], [2000.0, 10.0], [2100.0, 7.0], [2300.0, 4.0], [2200.0, 3.0], [2400.0, 5.0], [2500.0, 2.0], [2800.0, 3.0], [2900.0, 2.0], [3000.0, 3.0], [200.0, 19.0], [3300.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4100.0, 1.0], [4600.0, 1.0], [300.0, 50.0], [400.0, 49.0], [500.0, 60.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 118.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 451.0, "series": [{"data": [[0.0, 118.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 451.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 166.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.437499999999998, "minX": 1.60219968E12, "maxY": 10.0, "series": [{"data": [[1.6021998E12, 9.437499999999998], [1.60219974E12, 10.0], [1.60219968E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021998E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 689.0, "minX": 1.0, "maxY": 2925.0, "series": [{"data": [[8.0, 746.0], [4.0, 743.0], [2.0, 1561.0], [1.0, 1228.0], [9.0, 734.0], [10.0, 1068.4407713498615], [5.0, 853.0], [6.0, 689.0], [3.0, 2925.0], [7.0, 1070.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1069.7102040816321]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 590.25, "minX": 1.60219968E12, "maxY": 1298885.2, "series": [{"data": [[1.6021998E12, 199914.61666666667], [1.60219974E12, 1298885.2], [1.60219968E12, 336890.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6021998E12, 590.25], [1.60219974E12, 4274.366666666667], [1.60219968E12, 658.4166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021998E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 933.2625, "minX": 1.60219968E12, "maxY": 1227.5632183908046, "series": [{"data": [[1.6021998E12, 933.2625], [1.60219974E12, 1064.7499999999986], [1.60219968E12, 1227.5632183908046]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021998E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 932.175, "minX": 1.60219968E12, "maxY": 1226.0000000000005, "series": [{"data": [[1.6021998E12, 932.175], [1.60219974E12, 1063.8450704225363], [1.60219968E12, 1226.0000000000005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021998E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60219968E12, "maxY": 1.2183908045977012, "series": [{"data": [[1.6021998E12, 0.0], [1.60219974E12, 0.012323943661971832], [1.60219968E12, 1.2183908045977012]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021998E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 202.0, "minX": 1.60219968E12, "maxY": 4619.0, "series": [{"data": [[1.6021998E12, 2925.0], [1.60219974E12, 4619.0], [1.60219968E12, 3971.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6021998E12, 213.0], [1.60219974E12, 227.36299959301948], [1.60219968E12, 205.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6021998E12, 213.0], [1.60219974E12, 228.8993001627922], [1.60219968E12, 205.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6021998E12, 213.0], [1.60219974E12, 228.21649979650974], [1.60219968E12, 205.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6021998E12, 213.0], [1.60219974E12, 202.0], [1.60219968E12, 205.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6021998E12, 793.5], [1.60219974E12, 998.5], [1.60219968E12, 844.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021998E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 570.0, "minX": 2.0, "maxY": 2208.0, "series": [{"data": [[2.0, 2208.0], [8.0, 1216.5], [9.0, 1118.5], [10.0, 915.0], [11.0, 1100.5], [12.0, 750.0], [13.0, 707.0], [14.0, 952.5], [15.0, 666.0], [16.0, 570.0], [5.0, 1228.0], [6.0, 1335.0], [7.0, 1359.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 567.5, "minX": 2.0, "maxY": 2205.5, "series": [{"data": [[2.0, 2205.5], [8.0, 1216.5], [9.0, 1116.0], [10.0, 914.5], [11.0, 1098.0], [12.0, 749.5], [13.0, 707.0], [14.0, 952.5], [15.0, 666.0], [16.0, 567.5], [5.0, 1228.0], [6.0, 1334.0], [7.0, 1357.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1666666666666667, "minX": 1.60219968E12, "maxY": 9.466666666666667, "series": [{"data": [[1.6021998E12, 1.1666666666666667], [1.60219974E12, 9.466666666666667], [1.60219968E12, 1.6166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021998E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.60219968E12, "maxY": 9.466666666666667, "series": [{"data": [[1.6021998E12, 1.3333333333333333], [1.60219974E12, 9.466666666666667], [1.60219968E12, 1.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021998E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.60219968E12, "maxY": 9.466666666666667, "series": [{"data": [[1.6021998E12, 1.3333333333333333], [1.60219974E12, 9.466666666666667], [1.60219968E12, 1.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021998E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.60219968E12, "maxY": 9.466666666666667, "series": [{"data": [[1.6021998E12, 1.3333333333333333], [1.60219974E12, 9.466666666666667], [1.60219968E12, 1.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021998E12, "title": "Total Transactions Per Second"}},
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

