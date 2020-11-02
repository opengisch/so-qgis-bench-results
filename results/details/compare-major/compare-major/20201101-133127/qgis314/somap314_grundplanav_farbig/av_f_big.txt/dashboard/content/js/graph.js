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
        data: {"result": {"minY": 195.0, "minX": 0.0, "maxY": 4162.0, "series": [{"data": [[0.0, 195.0], [0.1, 195.0], [0.2, 198.0], [0.3, 201.0], [0.4, 201.0], [0.5, 213.0], [0.6, 216.0], [0.7, 221.0], [0.8, 221.0], [0.9, 230.0], [1.0, 231.0], [1.1, 233.0], [1.2, 233.0], [1.3, 239.0], [1.4, 242.0], [1.5, 246.0], [1.6, 246.0], [1.7, 247.0], [1.8, 249.0], [1.9, 249.0], [2.0, 254.0], [2.1, 254.0], [2.2, 258.0], [2.3, 258.0], [2.4, 262.0], [2.5, 263.0], [2.6, 294.0], [2.7, 294.0], [2.8, 311.0], [2.9, 315.0], [3.0, 325.0], [3.1, 325.0], [3.2, 327.0], [3.3, 331.0], [3.4, 331.0], [3.5, 331.0], [3.6, 334.0], [3.7, 336.0], [3.8, 336.0], [3.9, 338.0], [4.0, 340.0], [4.1, 340.0], [4.2, 340.0], [4.3, 340.0], [4.4, 342.0], [4.5, 344.0], [4.6, 344.0], [4.7, 348.0], [4.8, 348.0], [4.9, 351.0], [5.0, 351.0], [5.1, 351.0], [5.2, 352.0], [5.3, 352.0], [5.4, 354.0], [5.5, 355.0], [5.6, 355.0], [5.7, 355.0], [5.8, 357.0], [5.9, 359.0], [6.0, 362.0], [6.1, 362.0], [6.2, 365.0], [6.3, 366.0], [6.4, 371.0], [6.5, 371.0], [6.6, 376.0], [6.7, 376.0], [6.8, 376.0], [6.9, 389.0], [7.0, 391.0], [7.1, 391.0], [7.2, 391.0], [7.3, 398.0], [7.4, 398.0], [7.5, 399.0], [7.6, 399.0], [7.7, 400.0], [7.8, 403.0], [7.9, 406.0], [8.0, 406.0], [8.1, 406.0], [8.2, 409.0], [8.3, 411.0], [8.4, 411.0], [8.5, 412.0], [8.6, 414.0], [8.7, 414.0], [8.8, 418.0], [8.9, 426.0], [9.0, 427.0], [9.1, 427.0], [9.2, 429.0], [9.3, 434.0], [9.4, 436.0], [9.5, 436.0], [9.6, 437.0], [9.7, 439.0], [9.8, 444.0], [9.9, 444.0], [10.0, 445.0], [10.1, 446.0], [10.2, 446.0], [10.3, 447.0], [10.4, 449.0], [10.5, 449.0], [10.6, 449.0], [10.7, 452.0], [10.8, 452.0], [10.9, 455.0], [11.0, 455.0], [11.1, 456.0], [11.2, 463.0], [11.3, 465.0], [11.4, 465.0], [11.5, 465.0], [11.6, 467.0], [11.7, 467.0], [11.8, 467.0], [11.9, 470.0], [12.0, 470.0], [12.1, 470.0], [12.2, 472.0], [12.3, 472.0], [12.4, 472.0], [12.5, 472.0], [12.6, 474.0], [12.7, 474.0], [12.8, 476.0], [12.9, 476.0], [13.0, 477.0], [13.1, 478.0], [13.2, 481.0], [13.3, 481.0], [13.4, 481.0], [13.5, 484.0], [13.6, 484.0], [13.7, 485.0], [13.8, 486.0], [13.9, 487.0], [14.0, 487.0], [14.1, 488.0], [14.2, 488.0], [14.3, 490.0], [14.4, 490.0], [14.5, 490.0], [14.6, 492.0], [14.7, 499.0], [14.8, 499.0], [14.9, 500.0], [15.0, 504.0], [15.1, 504.0], [15.2, 504.0], [15.3, 505.0], [15.4, 524.0], [15.5, 524.0], [15.6, 524.0], [15.7, 525.0], [15.8, 528.0], [15.9, 528.0], [16.0, 531.0], [16.1, 532.0], [16.2, 536.0], [16.3, 536.0], [16.4, 538.0], [16.5, 541.0], [16.6, 542.0], [16.7, 542.0], [16.8, 551.0], [16.9, 554.0], [17.0, 554.0], [17.1, 555.0], [17.2, 555.0], [17.3, 555.0], [17.4, 555.0], [17.5, 556.0], [17.6, 560.0], [17.7, 563.0], [17.8, 563.0], [17.9, 569.0], [18.0, 571.0], [18.1, 573.0], [18.2, 573.0], [18.3, 575.0], [18.4, 577.0], [18.5, 577.0], [18.6, 578.0], [18.7, 583.0], [18.8, 584.0], [18.9, 584.0], [19.0, 593.0], [19.1, 594.0], [19.2, 597.0], [19.3, 597.0], [19.4, 601.0], [19.5, 602.0], [19.6, 604.0], [19.7, 604.0], [19.8, 607.0], [19.9, 611.0], [20.0, 611.0], [20.1, 622.0], [20.2, 623.0], [20.3, 627.0], [20.4, 627.0], [20.5, 629.0], [20.6, 637.0], [20.7, 641.0], [20.8, 641.0], [20.9, 646.0], [21.0, 649.0], [21.1, 653.0], [21.2, 653.0], [21.3, 653.0], [21.4, 654.0], [21.5, 655.0], [21.6, 655.0], [21.7, 657.0], [21.8, 657.0], [21.9, 657.0], [22.0, 659.0], [22.1, 659.0], [22.2, 660.0], [22.3, 660.0], [22.4, 661.0], [22.5, 662.0], [22.6, 663.0], [22.7, 663.0], [22.8, 663.0], [22.9, 666.0], [23.0, 670.0], [23.1, 670.0], [23.2, 671.0], [23.3, 672.0], [23.4, 672.0], [23.5, 672.0], [23.6, 672.0], [23.7, 674.0], [23.8, 674.0], [23.9, 683.0], [24.0, 684.0], [24.1, 687.0], [24.2, 687.0], [24.3, 688.0], [24.4, 688.0], [24.5, 689.0], [24.6, 689.0], [24.7, 690.0], [24.8, 690.0], [24.9, 691.0], [25.0, 691.0], [25.1, 696.0], [25.2, 700.0], [25.3, 700.0], [25.4, 703.0], [25.5, 704.0], [25.6, 705.0], [25.7, 705.0], [25.8, 706.0], [25.9, 707.0], [26.0, 707.0], [26.1, 707.0], [26.2, 707.0], [26.3, 707.0], [26.4, 708.0], [26.5, 708.0], [26.6, 709.0], [26.7, 710.0], [26.8, 710.0], [26.9, 710.0], [27.0, 711.0], [27.1, 711.0], [27.2, 711.0], [27.3, 712.0], [27.4, 713.0], [27.5, 713.0], [27.6, 713.0], [27.7, 714.0], [27.8, 716.0], [27.9, 718.0], [28.0, 718.0], [28.1, 719.0], [28.2, 720.0], [28.3, 721.0], [28.4, 721.0], [28.5, 722.0], [28.6, 722.0], [28.7, 722.0], [28.8, 723.0], [28.9, 723.0], [29.0, 723.0], [29.1, 723.0], [29.2, 724.0], [29.3, 724.0], [29.4, 728.0], [29.5, 728.0], [29.6, 729.0], [29.7, 729.0], [29.8, 729.0], [29.9, 729.0], [30.0, 730.0], [30.1, 730.0], [30.2, 730.0], [30.3, 732.0], [30.4, 732.0], [30.5, 733.0], [30.6, 733.0], [30.7, 733.0], [30.8, 734.0], [30.9, 735.0], [31.0, 735.0], [31.1, 735.0], [31.2, 738.0], [31.3, 738.0], [31.4, 738.0], [31.5, 743.0], [31.6, 743.0], [31.7, 743.0], [31.8, 744.0], [31.9, 744.0], [32.0, 745.0], [32.1, 745.0], [32.2, 745.0], [32.3, 745.0], [32.4, 747.0], [32.5, 747.0], [32.6, 750.0], [32.7, 750.0], [32.8, 751.0], [32.9, 751.0], [33.0, 753.0], [33.1, 754.0], [33.2, 755.0], [33.3, 755.0], [33.4, 756.0], [33.5, 757.0], [33.6, 757.0], [33.7, 758.0], [33.8, 758.0], [33.9, 762.0], [34.0, 762.0], [34.1, 763.0], [34.2, 763.0], [34.3, 767.0], [34.4, 767.0], [34.5, 767.0], [34.6, 767.0], [34.7, 770.0], [34.8, 770.0], [34.9, 770.0], [35.0, 771.0], [35.1, 771.0], [35.2, 776.0], [35.3, 778.0], [35.4, 778.0], [35.5, 778.0], [35.6, 783.0], [35.7, 786.0], [35.8, 787.0], [35.9, 787.0], [36.0, 790.0], [36.1, 792.0], [36.2, 794.0], [36.3, 794.0], [36.4, 795.0], [36.5, 797.0], [36.6, 801.0], [36.7, 801.0], [36.8, 803.0], [36.9, 810.0], [37.0, 810.0], [37.1, 813.0], [37.2, 814.0], [37.3, 815.0], [37.4, 815.0], [37.5, 815.0], [37.6, 815.0], [37.7, 815.0], [37.8, 815.0], [37.9, 819.0], [38.0, 822.0], [38.1, 823.0], [38.2, 823.0], [38.3, 826.0], [38.4, 830.0], [38.5, 830.0], [38.6, 830.0], [38.7, 831.0], [38.8, 835.0], [38.9, 835.0], [39.0, 835.0], [39.1, 841.0], [39.2, 843.0], [39.3, 843.0], [39.4, 846.0], [39.5, 847.0], [39.6, 851.0], [39.7, 851.0], [39.8, 853.0], [39.9, 854.0], [40.0, 855.0], [40.1, 855.0], [40.2, 855.0], [40.3, 855.0], [40.4, 855.0], [40.5, 858.0], [40.6, 859.0], [40.7, 860.0], [40.8, 860.0], [40.9, 863.0], [41.0, 864.0], [41.1, 864.0], [41.2, 864.0], [41.3, 867.0], [41.4, 869.0], [41.5, 876.0], [41.6, 876.0], [41.7, 880.0], [41.8, 881.0], [41.9, 881.0], [42.0, 881.0], [42.1, 887.0], [42.2, 887.0], [42.3, 887.0], [42.4, 888.0], [42.5, 888.0], [42.6, 889.0], [42.7, 889.0], [42.8, 899.0], [42.9, 899.0], [43.0, 900.0], [43.1, 900.0], [43.2, 901.0], [43.3, 902.0], [43.4, 902.0], [43.5, 903.0], [43.6, 903.0], [43.7, 905.0], [43.8, 905.0], [43.9, 906.0], [44.0, 906.0], [44.1, 907.0], [44.2, 907.0], [44.3, 908.0], [44.4, 908.0], [44.5, 908.0], [44.6, 908.0], [44.7, 911.0], [44.8, 912.0], [44.9, 912.0], [45.0, 912.0], [45.1, 913.0], [45.2, 914.0], [45.3, 914.0], [45.4, 915.0], [45.5, 922.0], [45.6, 923.0], [45.7, 923.0], [45.8, 926.0], [45.9, 930.0], [46.0, 931.0], [46.1, 931.0], [46.2, 932.0], [46.3, 935.0], [46.4, 935.0], [46.5, 935.0], [46.6, 938.0], [46.7, 939.0], [46.8, 939.0], [46.9, 943.0], [47.0, 944.0], [47.1, 947.0], [47.2, 947.0], [47.3, 947.0], [47.4, 947.0], [47.5, 951.0], [47.6, 951.0], [47.7, 955.0], [47.8, 956.0], [47.9, 957.0], [48.0, 957.0], [48.1, 957.0], [48.2, 958.0], [48.3, 960.0], [48.4, 960.0], [48.5, 961.0], [48.6, 962.0], [48.7, 962.0], [48.8, 962.0], [48.9, 963.0], [49.0, 963.0], [49.1, 963.0], [49.2, 964.0], [49.3, 970.0], [49.4, 976.0], [49.5, 976.0], [49.6, 979.0], [49.7, 980.0], [49.8, 983.0], [49.9, 983.0], [50.0, 983.0], [50.1, 991.0], [50.2, 991.0], [50.3, 1004.0], [50.4, 1005.0], [50.5, 1007.0], [50.6, 1007.0], [50.7, 1009.0], [50.8, 1014.0], [50.9, 1020.0], [51.0, 1020.0], [51.1, 1021.0], [51.2, 1029.0], [51.3, 1029.0], [51.4, 1029.0], [51.5, 1031.0], [51.6, 1035.0], [51.7, 1035.0], [51.8, 1039.0], [51.9, 1041.0], [52.0, 1044.0], [52.1, 1044.0], [52.2, 1045.0], [52.3, 1045.0], [52.4, 1045.0], [52.5, 1045.0], [52.6, 1050.0], [52.7, 1058.0], [52.8, 1060.0], [52.9, 1060.0], [53.0, 1062.0], [53.1, 1066.0], [53.2, 1067.0], [53.3, 1067.0], [53.4, 1068.0], [53.5, 1068.0], [53.6, 1068.0], [53.7, 1069.0], [53.8, 1070.0], [53.9, 1071.0], [54.0, 1071.0], [54.1, 1072.0], [54.2, 1072.0], [54.3, 1076.0], [54.4, 1076.0], [54.5, 1078.0], [54.6, 1082.0], [54.7, 1084.0], [54.8, 1084.0], [54.9, 1084.0], [55.0, 1086.0], [55.1, 1086.0], [55.2, 1087.0], [55.3, 1088.0], [55.4, 1089.0], [55.5, 1089.0], [55.6, 1090.0], [55.7, 1090.0], [55.8, 1093.0], [55.9, 1093.0], [56.0, 1096.0], [56.1, 1098.0], [56.2, 1100.0], [56.3, 1100.0], [56.4, 1105.0], [56.5, 1106.0], [56.6, 1107.0], [56.7, 1107.0], [56.8, 1107.0], [56.9, 1107.0], [57.0, 1107.0], [57.1, 1108.0], [57.2, 1108.0], [57.3, 1110.0], [57.4, 1110.0], [57.5, 1111.0], [57.6, 1112.0], [57.7, 1112.0], [57.8, 1112.0], [57.9, 1113.0], [58.0, 1115.0], [58.1, 1119.0], [58.2, 1119.0], [58.3, 1119.0], [58.4, 1122.0], [58.5, 1122.0], [58.6, 1125.0], [58.7, 1125.0], [58.8, 1125.0], [58.9, 1125.0], [59.0, 1126.0], [59.1, 1128.0], [59.2, 1129.0], [59.3, 1129.0], [59.4, 1130.0], [59.5, 1131.0], [59.6, 1133.0], [59.7, 1133.0], [59.8, 1133.0], [59.9, 1134.0], [60.0, 1134.0], [60.1, 1134.0], [60.2, 1135.0], [60.3, 1137.0], [60.4, 1137.0], [60.5, 1139.0], [60.6, 1143.0], [60.7, 1148.0], [60.8, 1148.0], [60.9, 1149.0], [61.0, 1149.0], [61.1, 1152.0], [61.2, 1152.0], [61.3, 1153.0], [61.4, 1156.0], [61.5, 1157.0], [61.6, 1157.0], [61.7, 1159.0], [61.8, 1161.0], [61.9, 1161.0], [62.0, 1166.0], [62.1, 1168.0], [62.2, 1172.0], [62.3, 1172.0], [62.4, 1173.0], [62.5, 1173.0], [62.6, 1175.0], [62.7, 1175.0], [62.8, 1179.0], [62.9, 1181.0], [63.0, 1182.0], [63.1, 1182.0], [63.2, 1182.0], [63.3, 1182.0], [63.4, 1182.0], [63.5, 1183.0], [63.6, 1186.0], [63.7, 1188.0], [63.8, 1188.0], [63.9, 1193.0], [64.0, 1198.0], [64.1, 1198.0], [64.2, 1198.0], [64.3, 1203.0], [64.4, 1204.0], [64.5, 1206.0], [64.6, 1206.0], [64.7, 1208.0], [64.8, 1211.0], [64.9, 1212.0], [65.0, 1212.0], [65.1, 1216.0], [65.2, 1217.0], [65.3, 1217.0], [65.4, 1221.0], [65.5, 1223.0], [65.6, 1225.0], [65.7, 1225.0], [65.8, 1225.0], [65.9, 1225.0], [66.0, 1226.0], [66.1, 1226.0], [66.2, 1227.0], [66.3, 1227.0], [66.4, 1229.0], [66.5, 1229.0], [66.6, 1230.0], [66.7, 1230.0], [66.8, 1230.0], [66.9, 1233.0], [67.0, 1234.0], [67.1, 1235.0], [67.2, 1235.0], [67.3, 1242.0], [67.4, 1242.0], [67.5, 1242.0], [67.6, 1242.0], [67.7, 1243.0], [67.8, 1245.0], [67.9, 1249.0], [68.0, 1249.0], [68.1, 1251.0], [68.2, 1252.0], [68.3, 1252.0], [68.4, 1252.0], [68.5, 1253.0], [68.6, 1260.0], [68.7, 1260.0], [68.8, 1260.0], [68.9, 1261.0], [69.0, 1262.0], [69.1, 1262.0], [69.2, 1264.0], [69.3, 1265.0], [69.4, 1265.0], [69.5, 1265.0], [69.6, 1266.0], [69.7, 1268.0], [69.8, 1271.0], [69.9, 1271.0], [70.0, 1271.0], [70.1, 1275.0], [70.2, 1275.0], [70.3, 1277.0], [70.4, 1284.0], [70.5, 1284.0], [70.6, 1284.0], [70.7, 1286.0], [70.8, 1287.0], [70.9, 1289.0], [71.0, 1289.0], [71.1, 1290.0], [71.2, 1290.0], [71.3, 1291.0], [71.4, 1291.0], [71.5, 1293.0], [71.6, 1295.0], [71.7, 1295.0], [71.8, 1296.0], [71.9, 1298.0], [72.0, 1299.0], [72.1, 1299.0], [72.2, 1302.0], [72.3, 1304.0], [72.4, 1308.0], [72.5, 1308.0], [72.6, 1308.0], [72.7, 1309.0], [72.8, 1309.0], [72.9, 1309.0], [73.0, 1314.0], [73.1, 1316.0], [73.2, 1316.0], [73.3, 1316.0], [73.4, 1320.0], [73.5, 1321.0], [73.6, 1321.0], [73.7, 1324.0], [73.8, 1326.0], [73.9, 1327.0], [74.0, 1327.0], [74.1, 1329.0], [74.2, 1334.0], [74.3, 1335.0], [74.4, 1335.0], [74.5, 1335.0], [74.6, 1338.0], [74.7, 1343.0], [74.8, 1343.0], [74.9, 1345.0], [75.0, 1345.0], [75.1, 1345.0], [75.2, 1348.0], [75.3, 1350.0], [75.4, 1352.0], [75.5, 1352.0], [75.6, 1354.0], [75.7, 1357.0], [75.8, 1360.0], [75.9, 1360.0], [76.0, 1362.0], [76.1, 1363.0], [76.2, 1364.0], [76.3, 1364.0], [76.4, 1367.0], [76.5, 1373.0], [76.6, 1374.0], [76.7, 1374.0], [76.8, 1380.0], [76.9, 1381.0], [77.0, 1381.0], [77.1, 1381.0], [77.2, 1384.0], [77.3, 1388.0], [77.4, 1388.0], [77.5, 1390.0], [77.6, 1391.0], [77.7, 1423.0], [77.8, 1423.0], [77.9, 1431.0], [78.0, 1433.0], [78.1, 1433.0], [78.2, 1433.0], [78.3, 1439.0], [78.4, 1440.0], [78.5, 1440.0], [78.6, 1449.0], [78.7, 1451.0], [78.8, 1452.0], [78.9, 1452.0], [79.0, 1453.0], [79.1, 1456.0], [79.2, 1462.0], [79.3, 1462.0], [79.4, 1463.0], [79.5, 1464.0], [79.6, 1470.0], [79.7, 1470.0], [79.8, 1476.0], [79.9, 1476.0], [80.0, 1477.0], [80.1, 1477.0], [80.2, 1480.0], [80.3, 1493.0], [80.4, 1493.0], [80.5, 1494.0], [80.6, 1495.0], [80.7, 1495.0], [80.8, 1495.0], [80.9, 1498.0], [81.0, 1501.0], [81.1, 1503.0], [81.2, 1503.0], [81.3, 1504.0], [81.4, 1508.0], [81.5, 1509.0], [81.6, 1509.0], [81.7, 1514.0], [81.8, 1515.0], [81.9, 1515.0], [82.0, 1520.0], [82.1, 1522.0], [82.2, 1522.0], [82.3, 1522.0], [82.4, 1529.0], [82.5, 1537.0], [82.6, 1537.0], [82.7, 1537.0], [82.8, 1538.0], [82.9, 1542.0], [83.0, 1546.0], [83.1, 1546.0], [83.2, 1548.0], [83.3, 1550.0], [83.4, 1550.0], [83.5, 1550.0], [83.6, 1552.0], [83.7, 1552.0], [83.8, 1552.0], [83.9, 1554.0], [84.0, 1562.0], [84.1, 1564.0], [84.2, 1564.0], [84.3, 1571.0], [84.4, 1574.0], [84.5, 1585.0], [84.6, 1585.0], [84.7, 1588.0], [84.8, 1596.0], [84.9, 1600.0], [85.0, 1600.0], [85.1, 1600.0], [85.2, 1604.0], [85.3, 1604.0], [85.4, 1604.0], [85.5, 1613.0], [85.6, 1621.0], [85.7, 1621.0], [85.8, 1629.0], [85.9, 1631.0], [86.0, 1638.0], [86.1, 1638.0], [86.2, 1643.0], [86.3, 1654.0], [86.4, 1655.0], [86.5, 1655.0], [86.6, 1665.0], [86.7, 1671.0], [86.8, 1671.0], [86.9, 1674.0], [87.0, 1682.0], [87.1, 1686.0], [87.2, 1686.0], [87.3, 1689.0], [87.4, 1697.0], [87.5, 1701.0], [87.6, 1701.0], [87.7, 1703.0], [87.8, 1711.0], [87.9, 1725.0], [88.0, 1725.0], [88.1, 1725.0], [88.2, 1726.0], [88.3, 1728.0], [88.4, 1728.0], [88.5, 1731.0], [88.6, 1732.0], [88.7, 1732.0], [88.8, 1734.0], [88.9, 1740.0], [89.0, 1748.0], [89.1, 1748.0], [89.2, 1749.0], [89.3, 1753.0], [89.4, 1757.0], [89.5, 1757.0], [89.6, 1758.0], [89.7, 1763.0], [89.8, 1770.0], [89.9, 1770.0], [90.0, 1775.0], [90.1, 1781.0], [90.2, 1781.0], [90.3, 1786.0], [90.4, 1795.0], [90.5, 1795.0], [90.6, 1795.0], [90.7, 1797.0], [90.8, 1798.0], [90.9, 1802.0], [91.0, 1802.0], [91.1, 1804.0], [91.2, 1810.0], [91.3, 1812.0], [91.4, 1812.0], [91.5, 1812.0], [91.6, 1816.0], [91.7, 1816.0], [91.8, 1816.0], [91.9, 1834.0], [92.0, 1834.0], [92.1, 1834.0], [92.2, 1845.0], [92.3, 1848.0], [92.4, 1848.0], [92.5, 1848.0], [92.6, 1849.0], [92.7, 1867.0], [92.8, 1867.0], [92.9, 1867.0], [93.0, 1891.0], [93.1, 1903.0], [93.2, 1920.0], [93.3, 1920.0], [93.4, 1921.0], [93.5, 1927.0], [93.6, 1927.0], [93.7, 1930.0], [93.8, 1932.0], [93.9, 1940.0], [94.0, 1940.0], [94.1, 1942.0], [94.2, 1948.0], [94.3, 1955.0], [94.4, 1955.0], [94.5, 1959.0], [94.6, 1967.0], [94.7, 1970.0], [94.8, 1970.0], [94.9, 1996.0], [95.0, 2017.0], [95.1, 2017.0], [95.2, 2023.0], [95.3, 2027.0], [95.4, 2056.0], [95.5, 2056.0], [95.6, 2057.0], [95.7, 2075.0], [95.8, 2099.0], [95.9, 2099.0], [96.0, 2122.0], [96.1, 2123.0], [96.2, 2123.0], [96.3, 2123.0], [96.4, 2148.0], [96.5, 2150.0], [96.6, 2173.0], [96.7, 2173.0], [96.8, 2191.0], [96.9, 2226.0], [97.0, 2226.0], [97.1, 2240.0], [97.2, 2295.0], [97.3, 2305.0], [97.4, 2305.0], [97.5, 2334.0], [97.6, 2337.0], [97.7, 2410.0], [97.8, 2410.0], [97.9, 2413.0], [98.0, 2440.0], [98.1, 2582.0], [98.2, 2582.0], [98.3, 2689.0], [98.4, 2907.0], [98.5, 2907.0], [98.6, 2930.0], [98.7, 2989.0], [98.8, 3059.0], [98.9, 3059.0], [99.0, 3237.0], [99.1, 3253.0], [99.2, 3255.0], [99.3, 3255.0], [99.4, 3429.0], [99.5, 3506.0], [99.6, 3559.0], [99.7, 3559.0], [99.8, 3909.0], [99.9, 4162.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 84.0, "series": [{"data": [[600.0, 43.0], [700.0, 84.0], [800.0, 47.0], [900.0, 53.0], [1000.0, 44.0], [1100.0, 59.0], [1200.0, 58.0], [1300.0, 41.0], [1400.0, 24.0], [1500.0, 29.0], [1600.0, 19.0], [100.0, 2.0], [1700.0, 25.0], [1800.0, 16.0], [1900.0, 14.0], [2000.0, 7.0], [2100.0, 7.0], [2200.0, 3.0], [2300.0, 3.0], [2400.0, 3.0], [2500.0, 1.0], [2600.0, 1.0], [2900.0, 3.0], [3000.0, 1.0], [3200.0, 3.0], [200.0, 18.0], [3400.0, 1.0], [3500.0, 2.0], [3900.0, 1.0], [4100.0, 1.0], [300.0, 36.0], [400.0, 53.0], [500.0, 33.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 110.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 485.0, "series": [{"data": [[0.0, 110.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 485.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 140.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.811715481171547, "minX": 1.60423932E12, "maxY": 10.0, "series": [{"data": [[1.60423938E12, 9.811715481171547], [1.60423932E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423938E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 354.0, "minX": 1.0, "maxY": 2017.0, "series": [{"data": [[8.0, 823.0], [4.0, 815.0], [2.0, 1290.0], [1.0, 1613.0], [9.0, 2017.0], [10.0, 1073.9118457300285], [5.0, 822.0], [6.0, 354.0], [3.0, 674.0], [7.0, 688.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1073.137414965987]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1792.1, "minX": 1.60423932E12, "maxY": 1305529.2, "series": [{"data": [[1.60423938E12, 530165.75], [1.60423932E12, 1305529.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423938E12, 1792.1], [1.60423932E12, 3730.9333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423938E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1045.2175732217565, "minX": 1.60423932E12, "maxY": 1086.5907258064528, "series": [{"data": [[1.60423938E12, 1045.2175732217565], [1.60423932E12, 1086.5907258064528]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423938E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1044.0711297071134, "minX": 1.60423932E12, "maxY": 1085.387096774195, "series": [{"data": [[1.60423938E12, 1044.0711297071134], [1.60423932E12, 1085.387096774195]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423938E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.07531380753138078, "minX": 1.60423932E12, "maxY": 0.17943548387096755, "series": [{"data": [[1.60423938E12, 0.07531380753138078], [1.60423932E12, 0.17943548387096755]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423938E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 195.0, "minX": 1.60423932E12, "maxY": 4162.0, "series": [{"data": [[1.60423938E12, 2337.0], [1.60423932E12, 4162.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423938E12, 251.07999925613404], [1.60423932E12, 214.4189996445179]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423938E12, 253.8880002975464], [1.60423932E12, 215.76090014219284]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423938E12, 252.63999962806702], [1.60423932E12, 215.16449982225896]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423938E12, 242.0], [1.60423932E12, 195.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423938E12, 1039.0], [1.60423932E12, 961.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423938E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 697.5, "minX": 1.0, "maxY": 2013.0, "series": [{"data": [[1.0, 2013.0], [8.0, 1106.5], [9.0, 1092.5], [5.0, 1622.0], [10.0, 1014.0], [11.0, 939.0], [6.0, 1059.5], [12.0, 882.5], [13.0, 700.0], [7.0, 1245.5], [14.0, 731.5], [15.0, 697.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 696.5, "minX": 1.0, "maxY": 2011.0, "series": [{"data": [[1.0, 2011.0], [8.0, 1106.5], [9.0, 1092.0], [5.0, 1620.5], [10.0, 1012.0], [11.0, 938.5], [6.0, 1059.5], [12.0, 880.0], [13.0, 699.0], [7.0, 1243.0], [14.0, 731.0], [15.0, 696.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.816666666666667, "minX": 1.60423932E12, "maxY": 8.433333333333334, "series": [{"data": [[1.60423938E12, 3.816666666666667], [1.60423932E12, 8.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423938E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.9833333333333334, "minX": 1.60423932E12, "maxY": 8.266666666666667, "series": [{"data": [[1.60423938E12, 3.9833333333333334], [1.60423932E12, 8.266666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423938E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.9833333333333334, "minX": 1.60423932E12, "maxY": 8.266666666666667, "series": [{"data": [[1.60423938E12, 3.9833333333333334], [1.60423932E12, 8.266666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423938E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.9833333333333334, "minX": 1.60423932E12, "maxY": 8.266666666666667, "series": [{"data": [[1.60423938E12, 3.9833333333333334], [1.60423932E12, 8.266666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423938E12, "title": "Total Transactions Per Second"}},
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

