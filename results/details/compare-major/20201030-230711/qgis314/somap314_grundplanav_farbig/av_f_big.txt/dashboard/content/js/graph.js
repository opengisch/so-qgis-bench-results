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
        data: {"result": {"minY": 206.0, "minX": 0.0, "maxY": 4133.0, "series": [{"data": [[0.0, 206.0], [0.1, 206.0], [0.2, 208.0], [0.3, 215.0], [0.4, 215.0], [0.5, 216.0], [0.6, 217.0], [0.7, 223.0], [0.8, 223.0], [0.9, 224.0], [1.0, 226.0], [1.1, 232.0], [1.2, 232.0], [1.3, 243.0], [1.4, 245.0], [1.5, 246.0], [1.6, 246.0], [1.7, 255.0], [1.8, 272.0], [1.9, 272.0], [2.0, 279.0], [2.1, 283.0], [2.2, 315.0], [2.3, 315.0], [2.4, 318.0], [2.5, 322.0], [2.6, 323.0], [2.7, 323.0], [2.8, 324.0], [2.9, 325.0], [3.0, 326.0], [3.1, 326.0], [3.2, 328.0], [3.3, 329.0], [3.4, 329.0], [3.5, 333.0], [3.6, 337.0], [3.7, 338.0], [3.8, 338.0], [3.9, 346.0], [4.0, 349.0], [4.1, 351.0], [4.2, 351.0], [4.3, 353.0], [4.4, 357.0], [4.5, 358.0], [4.6, 358.0], [4.7, 360.0], [4.8, 360.0], [4.9, 360.0], [5.0, 360.0], [5.1, 360.0], [5.2, 366.0], [5.3, 366.0], [5.4, 367.0], [5.5, 369.0], [5.6, 370.0], [5.7, 370.0], [5.8, 370.0], [5.9, 371.0], [6.0, 374.0], [6.1, 374.0], [6.2, 374.0], [6.3, 378.0], [6.4, 381.0], [6.5, 381.0], [6.6, 383.0], [6.7, 390.0], [6.8, 390.0], [6.9, 391.0], [7.0, 401.0], [7.1, 404.0], [7.2, 404.0], [7.3, 404.0], [7.4, 407.0], [7.5, 412.0], [7.6, 412.0], [7.7, 416.0], [7.8, 416.0], [7.9, 416.0], [8.0, 416.0], [8.1, 419.0], [8.2, 422.0], [8.3, 423.0], [8.4, 423.0], [8.5, 427.0], [8.6, 427.0], [8.7, 427.0], [8.8, 429.0], [8.9, 437.0], [9.0, 437.0], [9.1, 437.0], [9.2, 441.0], [9.3, 441.0], [9.4, 442.0], [9.5, 442.0], [9.6, 443.0], [9.7, 444.0], [9.8, 446.0], [9.9, 446.0], [10.0, 447.0], [10.1, 449.0], [10.2, 449.0], [10.3, 451.0], [10.4, 452.0], [10.5, 454.0], [10.6, 454.0], [10.7, 456.0], [10.8, 461.0], [10.9, 463.0], [11.0, 463.0], [11.1, 465.0], [11.2, 466.0], [11.3, 467.0], [11.4, 467.0], [11.5, 467.0], [11.6, 467.0], [11.7, 467.0], [11.8, 467.0], [11.9, 469.0], [12.0, 471.0], [12.1, 471.0], [12.2, 478.0], [12.3, 479.0], [12.4, 480.0], [12.5, 480.0], [12.6, 482.0], [12.7, 483.0], [12.8, 487.0], [12.9, 487.0], [13.0, 487.0], [13.1, 489.0], [13.2, 489.0], [13.3, 489.0], [13.4, 492.0], [13.5, 492.0], [13.6, 492.0], [13.7, 493.0], [13.8, 494.0], [13.9, 494.0], [14.0, 494.0], [14.1, 501.0], [14.2, 512.0], [14.3, 515.0], [14.4, 515.0], [14.5, 515.0], [14.6, 516.0], [14.7, 516.0], [14.8, 516.0], [14.9, 518.0], [15.0, 523.0], [15.1, 523.0], [15.2, 524.0], [15.3, 530.0], [15.4, 537.0], [15.5, 537.0], [15.6, 538.0], [15.7, 539.0], [15.8, 539.0], [15.9, 539.0], [16.0, 544.0], [16.1, 550.0], [16.2, 551.0], [16.3, 551.0], [16.4, 553.0], [16.5, 559.0], [16.6, 559.0], [16.7, 559.0], [16.8, 562.0], [16.9, 565.0], [17.0, 565.0], [17.1, 568.0], [17.2, 570.0], [17.3, 577.0], [17.4, 577.0], [17.5, 578.0], [17.6, 582.0], [17.7, 582.0], [17.8, 582.0], [17.9, 588.0], [18.0, 592.0], [18.1, 595.0], [18.2, 595.0], [18.3, 596.0], [18.4, 597.0], [18.5, 597.0], [18.6, 600.0], [18.7, 601.0], [18.8, 604.0], [18.9, 604.0], [19.0, 606.0], [19.1, 607.0], [19.2, 611.0], [19.3, 611.0], [19.4, 615.0], [19.5, 615.0], [19.6, 618.0], [19.7, 618.0], [19.8, 618.0], [19.9, 620.0], [20.0, 622.0], [20.1, 622.0], [20.2, 623.0], [20.3, 623.0], [20.4, 623.0], [20.5, 627.0], [20.6, 630.0], [20.7, 631.0], [20.8, 631.0], [20.9, 633.0], [21.0, 634.0], [21.1, 637.0], [21.2, 637.0], [21.3, 639.0], [21.4, 641.0], [21.5, 642.0], [21.6, 642.0], [21.7, 642.0], [21.8, 645.0], [21.9, 645.0], [22.0, 649.0], [22.1, 649.0], [22.2, 649.0], [22.3, 649.0], [22.4, 650.0], [22.5, 650.0], [22.6, 653.0], [22.7, 653.0], [22.8, 654.0], [22.9, 654.0], [23.0, 654.0], [23.1, 654.0], [23.2, 655.0], [23.3, 656.0], [23.4, 656.0], [23.5, 659.0], [23.6, 662.0], [23.7, 663.0], [23.8, 663.0], [23.9, 664.0], [24.0, 664.0], [24.1, 667.0], [24.2, 667.0], [24.3, 667.0], [24.4, 667.0], [24.5, 667.0], [24.6, 667.0], [24.7, 670.0], [24.8, 671.0], [24.9, 675.0], [25.0, 675.0], [25.1, 676.0], [25.2, 676.0], [25.3, 676.0], [25.4, 676.0], [25.5, 679.0], [25.6, 681.0], [25.7, 681.0], [25.8, 684.0], [25.9, 686.0], [26.0, 687.0], [26.1, 687.0], [26.2, 688.0], [26.3, 688.0], [26.4, 690.0], [26.5, 690.0], [26.6, 692.0], [26.7, 692.0], [26.8, 692.0], [26.9, 694.0], [27.0, 696.0], [27.1, 697.0], [27.2, 697.0], [27.3, 700.0], [27.4, 704.0], [27.5, 705.0], [27.6, 705.0], [27.7, 705.0], [27.8, 708.0], [27.9, 712.0], [28.0, 712.0], [28.1, 713.0], [28.2, 715.0], [28.3, 715.0], [28.4, 715.0], [28.5, 717.0], [28.6, 718.0], [28.7, 718.0], [28.8, 719.0], [28.9, 719.0], [29.0, 720.0], [29.1, 720.0], [29.2, 721.0], [29.3, 723.0], [29.4, 726.0], [29.5, 726.0], [29.6, 726.0], [29.7, 727.0], [29.8, 728.0], [29.9, 728.0], [30.0, 729.0], [30.1, 731.0], [30.2, 731.0], [30.3, 732.0], [30.4, 732.0], [30.5, 734.0], [30.6, 734.0], [30.7, 735.0], [30.8, 736.0], [30.9, 737.0], [31.0, 737.0], [31.1, 738.0], [31.2, 739.0], [31.3, 739.0], [31.4, 739.0], [31.5, 739.0], [31.6, 739.0], [31.7, 739.0], [31.8, 741.0], [31.9, 743.0], [32.0, 743.0], [32.1, 743.0], [32.2, 744.0], [32.3, 747.0], [32.4, 749.0], [32.5, 749.0], [32.6, 751.0], [32.7, 754.0], [32.8, 757.0], [32.9, 757.0], [33.0, 757.0], [33.1, 758.0], [33.2, 758.0], [33.3, 758.0], [33.4, 760.0], [33.5, 768.0], [33.6, 768.0], [33.7, 770.0], [33.8, 770.0], [33.9, 774.0], [34.0, 774.0], [34.1, 775.0], [34.2, 780.0], [34.3, 780.0], [34.4, 780.0], [34.5, 780.0], [34.6, 784.0], [34.7, 784.0], [34.8, 784.0], [34.9, 784.0], [35.0, 785.0], [35.1, 785.0], [35.2, 785.0], [35.3, 790.0], [35.4, 791.0], [35.5, 791.0], [35.6, 793.0], [35.7, 796.0], [35.8, 808.0], [35.9, 808.0], [36.0, 811.0], [36.1, 815.0], [36.2, 818.0], [36.3, 818.0], [36.4, 818.0], [36.5, 823.0], [36.6, 824.0], [36.7, 824.0], [36.8, 824.0], [36.9, 825.0], [37.0, 825.0], [37.1, 826.0], [37.2, 826.0], [37.3, 826.0], [37.4, 826.0], [37.5, 827.0], [37.6, 834.0], [37.7, 834.0], [37.8, 834.0], [37.9, 834.0], [38.0, 835.0], [38.1, 837.0], [38.2, 837.0], [38.3, 838.0], [38.4, 839.0], [38.5, 839.0], [38.6, 841.0], [38.7, 842.0], [38.8, 844.0], [38.9, 844.0], [39.0, 845.0], [39.1, 849.0], [39.2, 849.0], [39.3, 849.0], [39.4, 852.0], [39.5, 854.0], [39.6, 855.0], [39.7, 855.0], [39.8, 860.0], [39.9, 861.0], [40.0, 863.0], [40.1, 863.0], [40.2, 865.0], [40.3, 865.0], [40.4, 865.0], [40.5, 867.0], [40.6, 869.0], [40.7, 870.0], [40.8, 870.0], [40.9, 873.0], [41.0, 874.0], [41.1, 875.0], [41.2, 875.0], [41.3, 875.0], [41.4, 876.0], [41.5, 878.0], [41.6, 878.0], [41.7, 878.0], [41.8, 880.0], [41.9, 880.0], [42.0, 882.0], [42.1, 885.0], [42.2, 886.0], [42.3, 886.0], [42.4, 886.0], [42.5, 886.0], [42.6, 888.0], [42.7, 888.0], [42.8, 890.0], [42.9, 891.0], [43.0, 894.0], [43.1, 894.0], [43.2, 894.0], [43.3, 895.0], [43.4, 895.0], [43.5, 897.0], [43.6, 898.0], [43.7, 900.0], [43.8, 900.0], [43.9, 901.0], [44.0, 904.0], [44.1, 904.0], [44.2, 904.0], [44.3, 906.0], [44.4, 909.0], [44.5, 909.0], [44.6, 909.0], [44.7, 911.0], [44.8, 911.0], [44.9, 912.0], [45.0, 912.0], [45.1, 912.0], [45.2, 915.0], [45.3, 915.0], [45.4, 917.0], [45.5, 920.0], [45.6, 921.0], [45.7, 921.0], [45.8, 922.0], [45.9, 924.0], [46.0, 925.0], [46.1, 925.0], [46.2, 925.0], [46.3, 925.0], [46.4, 926.0], [46.5, 926.0], [46.6, 929.0], [46.7, 932.0], [46.8, 932.0], [46.9, 933.0], [47.0, 934.0], [47.1, 935.0], [47.2, 935.0], [47.3, 937.0], [47.4, 943.0], [47.5, 944.0], [47.6, 944.0], [47.7, 946.0], [47.8, 947.0], [47.9, 948.0], [48.0, 948.0], [48.1, 949.0], [48.2, 950.0], [48.3, 950.0], [48.4, 950.0], [48.5, 955.0], [48.6, 955.0], [48.7, 955.0], [48.8, 956.0], [48.9, 958.0], [49.0, 960.0], [49.1, 960.0], [49.2, 963.0], [49.3, 964.0], [49.4, 965.0], [49.5, 965.0], [49.6, 967.0], [49.7, 968.0], [49.8, 971.0], [49.9, 971.0], [50.0, 973.0], [50.1, 973.0], [50.2, 973.0], [50.3, 974.0], [50.4, 977.0], [50.5, 979.0], [50.6, 979.0], [50.7, 983.0], [50.8, 985.0], [50.9, 987.0], [51.0, 987.0], [51.1, 989.0], [51.2, 992.0], [51.3, 995.0], [51.4, 995.0], [51.5, 997.0], [51.6, 1004.0], [51.7, 1004.0], [51.8, 1007.0], [51.9, 1008.0], [52.0, 1014.0], [52.1, 1014.0], [52.2, 1014.0], [52.3, 1016.0], [52.4, 1017.0], [52.5, 1017.0], [52.6, 1021.0], [52.7, 1021.0], [52.8, 1022.0], [52.9, 1022.0], [53.0, 1022.0], [53.1, 1027.0], [53.2, 1031.0], [53.3, 1031.0], [53.4, 1036.0], [53.5, 1037.0], [53.6, 1037.0], [53.7, 1038.0], [53.8, 1039.0], [53.9, 1039.0], [54.0, 1039.0], [54.1, 1041.0], [54.2, 1041.0], [54.3, 1042.0], [54.4, 1042.0], [54.5, 1043.0], [54.6, 1045.0], [54.7, 1046.0], [54.8, 1046.0], [54.9, 1046.0], [55.0, 1047.0], [55.1, 1047.0], [55.2, 1052.0], [55.3, 1053.0], [55.4, 1054.0], [55.5, 1054.0], [55.6, 1057.0], [55.7, 1059.0], [55.8, 1061.0], [55.9, 1061.0], [56.0, 1063.0], [56.1, 1064.0], [56.2, 1065.0], [56.3, 1065.0], [56.4, 1069.0], [56.5, 1073.0], [56.6, 1073.0], [56.7, 1073.0], [56.8, 1074.0], [56.9, 1076.0], [57.0, 1076.0], [57.1, 1077.0], [57.2, 1079.0], [57.3, 1083.0], [57.4, 1083.0], [57.5, 1094.0], [57.6, 1096.0], [57.7, 1097.0], [57.8, 1097.0], [57.9, 1098.0], [58.0, 1099.0], [58.1, 1103.0], [58.2, 1103.0], [58.3, 1105.0], [58.4, 1107.0], [58.5, 1107.0], [58.6, 1107.0], [58.7, 1107.0], [58.8, 1108.0], [58.9, 1108.0], [59.0, 1109.0], [59.1, 1110.0], [59.2, 1111.0], [59.3, 1111.0], [59.4, 1113.0], [59.5, 1115.0], [59.6, 1116.0], [59.7, 1116.0], [59.8, 1117.0], [59.9, 1120.0], [60.0, 1120.0], [60.1, 1120.0], [60.2, 1122.0], [60.3, 1126.0], [60.4, 1126.0], [60.5, 1129.0], [60.6, 1130.0], [60.7, 1134.0], [60.8, 1134.0], [60.9, 1134.0], [61.0, 1135.0], [61.1, 1137.0], [61.2, 1137.0], [61.3, 1137.0], [61.4, 1138.0], [61.5, 1138.0], [61.6, 1138.0], [61.7, 1140.0], [61.8, 1140.0], [61.9, 1140.0], [62.0, 1145.0], [62.1, 1146.0], [62.2, 1146.0], [62.3, 1146.0], [62.4, 1147.0], [62.5, 1148.0], [62.6, 1150.0], [62.7, 1150.0], [62.8, 1151.0], [62.9, 1152.0], [63.0, 1159.0], [63.1, 1159.0], [63.2, 1159.0], [63.3, 1160.0], [63.4, 1160.0], [63.5, 1163.0], [63.6, 1164.0], [63.7, 1166.0], [63.8, 1166.0], [63.9, 1166.0], [64.0, 1168.0], [64.1, 1168.0], [64.2, 1168.0], [64.3, 1172.0], [64.4, 1178.0], [64.5, 1178.0], [64.6, 1178.0], [64.7, 1182.0], [64.8, 1188.0], [64.9, 1190.0], [65.0, 1190.0], [65.1, 1190.0], [65.2, 1192.0], [65.3, 1192.0], [65.4, 1193.0], [65.5, 1193.0], [65.6, 1197.0], [65.7, 1197.0], [65.8, 1197.0], [65.9, 1201.0], [66.0, 1202.0], [66.1, 1202.0], [66.2, 1205.0], [66.3, 1208.0], [66.4, 1210.0], [66.5, 1210.0], [66.6, 1212.0], [66.7, 1213.0], [66.8, 1213.0], [66.9, 1214.0], [67.0, 1215.0], [67.1, 1216.0], [67.2, 1216.0], [67.3, 1220.0], [67.4, 1221.0], [67.5, 1223.0], [67.6, 1223.0], [67.7, 1225.0], [67.8, 1225.0], [67.9, 1229.0], [68.0, 1229.0], [68.1, 1231.0], [68.2, 1231.0], [68.3, 1233.0], [68.4, 1233.0], [68.5, 1234.0], [68.6, 1238.0], [68.7, 1238.0], [68.8, 1240.0], [68.9, 1241.0], [69.0, 1241.0], [69.1, 1241.0], [69.2, 1242.0], [69.3, 1243.0], [69.4, 1243.0], [69.5, 1243.0], [69.6, 1246.0], [69.7, 1247.0], [69.8, 1248.0], [69.9, 1248.0], [70.0, 1249.0], [70.1, 1251.0], [70.2, 1251.0], [70.3, 1252.0], [70.4, 1253.0], [70.5, 1254.0], [70.6, 1254.0], [70.7, 1259.0], [70.8, 1261.0], [70.9, 1261.0], [71.0, 1261.0], [71.1, 1261.0], [71.2, 1270.0], [71.3, 1270.0], [71.4, 1270.0], [71.5, 1273.0], [71.6, 1274.0], [71.7, 1274.0], [71.8, 1274.0], [71.9, 1275.0], [72.0, 1277.0], [72.1, 1277.0], [72.2, 1279.0], [72.3, 1281.0], [72.4, 1282.0], [72.5, 1282.0], [72.6, 1282.0], [72.7, 1284.0], [72.8, 1284.0], [72.9, 1284.0], [73.0, 1284.0], [73.1, 1285.0], [73.2, 1285.0], [73.3, 1285.0], [73.4, 1286.0], [73.5, 1287.0], [73.6, 1287.0], [73.7, 1288.0], [73.8, 1289.0], [73.9, 1290.0], [74.0, 1290.0], [74.1, 1293.0], [74.2, 1297.0], [74.3, 1298.0], [74.4, 1298.0], [74.5, 1300.0], [74.6, 1301.0], [74.7, 1302.0], [74.8, 1302.0], [74.9, 1310.0], [75.0, 1315.0], [75.1, 1315.0], [75.2, 1316.0], [75.3, 1316.0], [75.4, 1320.0], [75.5, 1320.0], [75.6, 1324.0], [75.7, 1326.0], [75.8, 1328.0], [75.9, 1328.0], [76.0, 1334.0], [76.1, 1335.0], [76.2, 1336.0], [76.3, 1336.0], [76.4, 1337.0], [76.5, 1344.0], [76.6, 1348.0], [76.7, 1348.0], [76.8, 1350.0], [76.9, 1354.0], [77.0, 1354.0], [77.1, 1365.0], [77.2, 1366.0], [77.3, 1374.0], [77.4, 1374.0], [77.5, 1374.0], [77.6, 1378.0], [77.7, 1380.0], [77.8, 1380.0], [77.9, 1382.0], [78.0, 1382.0], [78.1, 1383.0], [78.2, 1383.0], [78.3, 1392.0], [78.4, 1401.0], [78.5, 1401.0], [78.6, 1405.0], [78.7, 1409.0], [78.8, 1414.0], [78.9, 1414.0], [79.0, 1416.0], [79.1, 1417.0], [79.2, 1417.0], [79.3, 1417.0], [79.4, 1422.0], [79.5, 1427.0], [79.6, 1429.0], [79.7, 1429.0], [79.8, 1432.0], [79.9, 1435.0], [80.0, 1440.0], [80.1, 1440.0], [80.2, 1442.0], [80.3, 1442.0], [80.4, 1442.0], [80.5, 1443.0], [80.6, 1443.0], [80.7, 1445.0], [80.8, 1445.0], [80.9, 1446.0], [81.0, 1451.0], [81.1, 1456.0], [81.2, 1456.0], [81.3, 1460.0], [81.4, 1461.0], [81.5, 1461.0], [81.6, 1461.0], [81.7, 1462.0], [81.8, 1463.0], [81.9, 1463.0], [82.0, 1464.0], [82.1, 1468.0], [82.2, 1469.0], [82.3, 1469.0], [82.4, 1471.0], [82.5, 1472.0], [82.6, 1472.0], [82.7, 1472.0], [82.8, 1474.0], [82.9, 1480.0], [83.0, 1486.0], [83.1, 1486.0], [83.2, 1487.0], [83.3, 1487.0], [83.4, 1487.0], [83.5, 1489.0], [83.6, 1496.0], [83.7, 1498.0], [83.8, 1498.0], [83.9, 1499.0], [84.0, 1502.0], [84.1, 1502.0], [84.2, 1502.0], [84.3, 1504.0], [84.4, 1504.0], [84.5, 1505.0], [84.6, 1505.0], [84.7, 1505.0], [84.8, 1509.0], [84.9, 1510.0], [85.0, 1510.0], [85.1, 1519.0], [85.2, 1523.0], [85.3, 1523.0], [85.4, 1524.0], [85.5, 1526.0], [85.6, 1528.0], [85.7, 1528.0], [85.8, 1534.0], [85.9, 1538.0], [86.0, 1542.0], [86.1, 1542.0], [86.2, 1547.0], [86.3, 1552.0], [86.4, 1557.0], [86.5, 1557.0], [86.6, 1562.0], [86.7, 1566.0], [86.8, 1566.0], [86.9, 1568.0], [87.0, 1571.0], [87.1, 1576.0], [87.2, 1576.0], [87.3, 1576.0], [87.4, 1582.0], [87.5, 1588.0], [87.6, 1588.0], [87.7, 1589.0], [87.8, 1591.0], [87.9, 1595.0], [88.0, 1595.0], [88.1, 1596.0], [88.2, 1603.0], [88.3, 1604.0], [88.4, 1604.0], [88.5, 1605.0], [88.6, 1607.0], [88.7, 1607.0], [88.8, 1614.0], [88.9, 1621.0], [89.0, 1627.0], [89.1, 1627.0], [89.2, 1631.0], [89.3, 1632.0], [89.4, 1649.0], [89.5, 1649.0], [89.6, 1650.0], [89.7, 1652.0], [89.8, 1653.0], [89.9, 1653.0], [90.0, 1657.0], [90.1, 1676.0], [90.2, 1676.0], [90.3, 1679.0], [90.4, 1684.0], [90.5, 1685.0], [90.6, 1685.0], [90.7, 1687.0], [90.8, 1688.0], [90.9, 1690.0], [91.0, 1690.0], [91.1, 1691.0], [91.2, 1693.0], [91.3, 1700.0], [91.4, 1700.0], [91.5, 1702.0], [91.6, 1720.0], [91.7, 1720.0], [91.8, 1737.0], [91.9, 1744.0], [92.0, 1746.0], [92.1, 1746.0], [92.2, 1761.0], [92.3, 1782.0], [92.4, 1789.0], [92.5, 1789.0], [92.6, 1800.0], [92.7, 1800.0], [92.8, 1801.0], [92.9, 1801.0], [93.0, 1803.0], [93.1, 1803.0], [93.2, 1806.0], [93.3, 1806.0], [93.4, 1814.0], [93.5, 1816.0], [93.6, 1816.0], [93.7, 1829.0], [93.8, 1831.0], [93.9, 1832.0], [94.0, 1832.0], [94.1, 1850.0], [94.2, 1861.0], [94.3, 1865.0], [94.4, 1865.0], [94.5, 1866.0], [94.6, 1868.0], [94.7, 1872.0], [94.8, 1872.0], [94.9, 1876.0], [95.0, 1895.0], [95.1, 1895.0], [95.2, 1909.0], [95.3, 1928.0], [95.4, 1938.0], [95.5, 1938.0], [95.6, 1977.0], [95.7, 1987.0], [95.8, 1994.0], [95.9, 1994.0], [96.0, 2023.0], [96.1, 2025.0], [96.2, 2050.0], [96.3, 2050.0], [96.4, 2056.0], [96.5, 2088.0], [96.6, 2116.0], [96.7, 2116.0], [96.8, 2126.0], [96.9, 2144.0], [97.0, 2144.0], [97.1, 2146.0], [97.2, 2169.0], [97.3, 2190.0], [97.4, 2190.0], [97.5, 2308.0], [97.6, 2390.0], [97.7, 2443.0], [97.8, 2443.0], [97.9, 2445.0], [98.0, 2522.0], [98.1, 2547.0], [98.2, 2547.0], [98.3, 2577.0], [98.4, 2635.0], [98.5, 2635.0], [98.6, 2698.0], [98.7, 2740.0], [98.8, 2799.0], [98.9, 2799.0], [99.0, 2857.0], [99.1, 2879.0], [99.2, 2976.0], [99.3, 2976.0], [99.4, 3278.0], [99.5, 3743.0], [99.6, 3838.0], [99.7, 3838.0], [99.8, 4056.0], [99.9, 4133.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 64.0, "series": [{"data": [[600.0, 64.0], [700.0, 63.0], [800.0, 58.0], [900.0, 58.0], [1000.0, 48.0], [1100.0, 57.0], [1200.0, 63.0], [1300.0, 29.0], [1400.0, 41.0], [1500.0, 31.0], [1600.0, 23.0], [1700.0, 9.0], [1800.0, 19.0], [1900.0, 6.0], [2000.0, 5.0], [2100.0, 6.0], [2300.0, 2.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 2.0], [2800.0, 2.0], [2700.0, 2.0], [2900.0, 1.0], [200.0, 16.0], [3200.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [4000.0, 1.0], [4100.0, 1.0], [300.0, 35.0], [400.0, 52.0], [500.0, 33.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 103.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 514.0, "series": [{"data": [[0.0, 103.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 514.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 118.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.735294117647056, "minX": 1.60410102E12, "maxY": 10.0, "series": [{"data": [[1.60410108E12, 9.735294117647056], [1.60410102E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410108E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 333.0, "minX": 1.0, "maxY": 1138.0, "series": [{"data": [[8.0, 333.0], [4.0, 688.0], [2.0, 1041.0], [1.0, 1134.0], [9.0, 390.0], [10.0, 1052.9931129476583], [5.0, 708.0], [6.0, 656.0], [3.0, 1138.0], [7.0, 676.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1049.3020408163266]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1269.6833333333334, "minX": 1.60410102E12, "maxY": 1475556.4666666666, "series": [{"data": [[1.60410108E12, 360132.31666666665], [1.60410102E12, 1475556.4666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60410108E12, 1269.6833333333334], [1.60410102E12, 4253.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410108E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 960.1764705882352, "minX": 1.60410102E12, "maxY": 1076.1185840707965, "series": [{"data": [[1.60410108E12, 960.1764705882352], [1.60410102E12, 1076.1185840707965]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410108E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 959.2, "minX": 1.60410102E12, "maxY": 1074.9168141592927, "series": [{"data": [[1.60410108E12, 959.2], [1.60410102E12, 1074.9168141592927]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410108E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.029411764705882328, "minX": 1.60410102E12, "maxY": 0.2106194690265483, "series": [{"data": [[1.60410108E12, 0.029411764705882328], [1.60410102E12, 0.2106194690265483]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410108E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 206.0, "minX": 1.60410102E12, "maxY": 4133.0, "series": [{"data": [[1.60410108E12, 2547.0], [1.60410102E12, 4133.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60410108E12, 267.93599902153017], [1.60410102E12, 217.56399919033052]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60410108E12, 271.62960039138795], [1.60410102E12, 220.6204003238678]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60410108E12, 269.98799951076506], [1.60410102E12, 219.26199959516526]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60410108E12, 255.0], [1.60410102E12, 206.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60410108E12, 884.0], [1.60410102E12, 1022.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410108E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 576.0, "minX": 1.0, "maxY": 2308.0, "series": [{"data": [[8.0, 1125.0], [9.0, 1103.0], [10.0, 1052.5], [11.0, 898.5], [12.0, 938.5], [3.0, 1134.0], [13.0, 770.0], [14.0, 669.0], [15.0, 726.0], [1.0, 2308.0], [4.0, 1607.0], [16.0, 576.0], [6.0, 1413.0], [7.0, 1261.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 575.0, "minX": 1.0, "maxY": 2304.0, "series": [{"data": [[8.0, 1124.0], [9.0, 1101.0], [10.0, 1052.0], [11.0, 898.0], [12.0, 938.0], [3.0, 1133.0], [13.0, 769.5], [14.0, 668.5], [15.0, 726.0], [1.0, 2304.0], [4.0, 1601.0], [16.0, 575.0], [6.0, 1412.5], [7.0, 1256.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60410096E12, "maxY": 9.416666666666666, "series": [{"data": [[1.60410108E12, 2.6666666666666665], [1.60410096E12, 0.16666666666666666], [1.60410102E12, 9.416666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410108E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.8333333333333335, "minX": 1.60410102E12, "maxY": 9.416666666666666, "series": [{"data": [[1.60410108E12, 2.8333333333333335], [1.60410102E12, 9.416666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410108E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.8333333333333335, "minX": 1.60410102E12, "maxY": 9.416666666666666, "series": [{"data": [[1.60410108E12, 2.8333333333333335], [1.60410102E12, 9.416666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410108E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.8333333333333335, "minX": 1.60410102E12, "maxY": 9.416666666666666, "series": [{"data": [[1.60410108E12, 2.8333333333333335], [1.60410102E12, 9.416666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410108E12, "title": "Total Transactions Per Second"}},
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

