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
        data: {"result": {"minY": 176.0, "minX": 0.0, "maxY": 4146.0, "series": [{"data": [[0.0, 176.0], [0.1, 176.0], [0.2, 185.0], [0.3, 197.0], [0.4, 197.0], [0.5, 198.0], [0.6, 200.0], [0.7, 201.0], [0.8, 201.0], [0.9, 205.0], [1.0, 205.0], [1.1, 206.0], [1.2, 206.0], [1.3, 210.0], [1.4, 211.0], [1.5, 212.0], [1.6, 212.0], [1.7, 213.0], [1.8, 215.0], [1.9, 215.0], [2.0, 221.0], [2.1, 222.0], [2.2, 222.0], [2.3, 222.0], [2.4, 231.0], [2.5, 236.0], [2.6, 263.0], [2.7, 263.0], [2.8, 313.0], [2.9, 315.0], [3.0, 320.0], [3.1, 320.0], [3.2, 323.0], [3.3, 323.0], [3.4, 323.0], [3.5, 324.0], [3.6, 325.0], [3.7, 327.0], [3.8, 327.0], [3.9, 328.0], [4.0, 330.0], [4.1, 330.0], [4.2, 330.0], [4.3, 335.0], [4.4, 338.0], [4.5, 339.0], [4.6, 339.0], [4.7, 344.0], [4.8, 348.0], [4.9, 349.0], [5.0, 349.0], [5.1, 350.0], [5.2, 350.0], [5.3, 350.0], [5.4, 350.0], [5.5, 351.0], [5.6, 352.0], [5.7, 352.0], [5.8, 353.0], [5.9, 355.0], [6.0, 357.0], [6.1, 357.0], [6.2, 358.0], [6.3, 364.0], [6.4, 365.0], [6.5, 365.0], [6.6, 366.0], [6.7, 369.0], [6.8, 369.0], [6.9, 374.0], [7.0, 376.0], [7.1, 377.0], [7.2, 377.0], [7.3, 390.0], [7.4, 391.0], [7.5, 392.0], [7.6, 392.0], [7.7, 394.0], [7.8, 399.0], [7.9, 403.0], [8.0, 403.0], [8.1, 415.0], [8.2, 416.0], [8.3, 416.0], [8.4, 416.0], [8.5, 419.0], [8.6, 420.0], [8.7, 420.0], [8.8, 426.0], [8.9, 426.0], [9.0, 427.0], [9.1, 427.0], [9.2, 427.0], [9.3, 427.0], [9.4, 429.0], [9.5, 429.0], [9.6, 434.0], [9.7, 435.0], [9.8, 439.0], [9.9, 439.0], [10.0, 439.0], [10.1, 440.0], [10.2, 440.0], [10.3, 441.0], [10.4, 441.0], [10.5, 444.0], [10.6, 444.0], [10.7, 444.0], [10.8, 444.0], [10.9, 446.0], [11.0, 446.0], [11.1, 451.0], [11.2, 451.0], [11.3, 452.0], [11.4, 452.0], [11.5, 452.0], [11.6, 452.0], [11.7, 452.0], [11.8, 454.0], [11.9, 456.0], [12.0, 458.0], [12.1, 458.0], [12.2, 460.0], [12.3, 461.0], [12.4, 462.0], [12.5, 462.0], [12.6, 464.0], [12.7, 466.0], [12.8, 471.0], [12.9, 471.0], [13.0, 471.0], [13.1, 473.0], [13.2, 474.0], [13.3, 474.0], [13.4, 474.0], [13.5, 475.0], [13.6, 475.0], [13.7, 479.0], [13.8, 480.0], [13.9, 484.0], [14.0, 484.0], [14.1, 486.0], [14.2, 487.0], [14.3, 488.0], [14.4, 488.0], [14.5, 489.0], [14.6, 491.0], [14.7, 491.0], [14.8, 491.0], [14.9, 494.0], [15.0, 495.0], [15.1, 495.0], [15.2, 496.0], [15.3, 502.0], [15.4, 502.0], [15.5, 502.0], [15.6, 506.0], [15.7, 506.0], [15.8, 508.0], [15.9, 508.0], [16.0, 513.0], [16.1, 514.0], [16.2, 519.0], [16.3, 519.0], [16.4, 528.0], [16.5, 530.0], [16.6, 531.0], [16.7, 531.0], [16.8, 542.0], [16.9, 548.0], [17.0, 548.0], [17.1, 549.0], [17.2, 550.0], [17.3, 553.0], [17.4, 553.0], [17.5, 554.0], [17.6, 554.0], [17.7, 557.0], [17.8, 557.0], [17.9, 559.0], [18.0, 561.0], [18.1, 564.0], [18.2, 564.0], [18.3, 565.0], [18.4, 567.0], [18.5, 567.0], [18.6, 571.0], [18.7, 572.0], [18.8, 575.0], [18.9, 575.0], [19.0, 578.0], [19.1, 588.0], [19.2, 589.0], [19.3, 589.0], [19.4, 590.0], [19.5, 594.0], [19.6, 599.0], [19.7, 599.0], [19.8, 600.0], [19.9, 602.0], [20.0, 602.0], [20.1, 604.0], [20.2, 610.0], [20.3, 612.0], [20.4, 612.0], [20.5, 617.0], [20.6, 618.0], [20.7, 619.0], [20.8, 619.0], [20.9, 620.0], [21.0, 621.0], [21.1, 622.0], [21.2, 622.0], [21.3, 622.0], [21.4, 626.0], [21.5, 627.0], [21.6, 627.0], [21.7, 631.0], [21.8, 634.0], [21.9, 634.0], [22.0, 635.0], [22.1, 636.0], [22.2, 638.0], [22.3, 638.0], [22.4, 638.0], [22.5, 639.0], [22.6, 639.0], [22.7, 639.0], [22.8, 641.0], [22.9, 642.0], [23.0, 643.0], [23.1, 643.0], [23.2, 649.0], [23.3, 649.0], [23.4, 649.0], [23.5, 651.0], [23.6, 653.0], [23.7, 653.0], [23.8, 653.0], [23.9, 659.0], [24.0, 662.0], [24.1, 663.0], [24.2, 663.0], [24.3, 664.0], [24.4, 665.0], [24.5, 665.0], [24.6, 665.0], [24.7, 666.0], [24.8, 669.0], [24.9, 669.0], [25.0, 669.0], [25.1, 676.0], [25.2, 679.0], [25.3, 679.0], [25.4, 682.0], [25.5, 683.0], [25.6, 683.0], [25.7, 683.0], [25.8, 684.0], [25.9, 686.0], [26.0, 687.0], [26.1, 687.0], [26.2, 690.0], [26.3, 692.0], [26.4, 692.0], [26.5, 692.0], [26.6, 693.0], [26.7, 694.0], [26.8, 694.0], [26.9, 696.0], [27.0, 696.0], [27.1, 697.0], [27.2, 697.0], [27.3, 701.0], [27.4, 701.0], [27.5, 704.0], [27.6, 704.0], [27.7, 705.0], [27.8, 705.0], [27.9, 705.0], [28.0, 705.0], [28.1, 706.0], [28.2, 706.0], [28.3, 707.0], [28.4, 707.0], [28.5, 708.0], [28.6, 708.0], [28.7, 708.0], [28.8, 709.0], [28.9, 709.0], [29.0, 711.0], [29.1, 711.0], [29.2, 713.0], [29.3, 715.0], [29.4, 716.0], [29.5, 716.0], [29.6, 716.0], [29.7, 716.0], [29.8, 717.0], [29.9, 717.0], [30.0, 718.0], [30.1, 719.0], [30.2, 719.0], [30.3, 720.0], [30.4, 721.0], [30.5, 722.0], [30.6, 722.0], [30.7, 723.0], [30.8, 724.0], [30.9, 724.0], [31.0, 724.0], [31.1, 724.0], [31.2, 725.0], [31.3, 725.0], [31.4, 725.0], [31.5, 726.0], [31.6, 729.0], [31.7, 729.0], [31.8, 729.0], [31.9, 731.0], [32.0, 734.0], [32.1, 734.0], [32.2, 736.0], [32.3, 736.0], [32.4, 736.0], [32.5, 736.0], [32.6, 737.0], [32.7, 738.0], [32.8, 740.0], [32.9, 740.0], [33.0, 740.0], [33.1, 741.0], [33.2, 743.0], [33.3, 743.0], [33.4, 747.0], [33.5, 747.0], [33.6, 747.0], [33.7, 747.0], [33.8, 749.0], [33.9, 754.0], [34.0, 754.0], [34.1, 755.0], [34.2, 756.0], [34.3, 757.0], [34.4, 757.0], [34.5, 759.0], [34.6, 760.0], [34.7, 762.0], [34.8, 762.0], [34.9, 763.0], [35.0, 764.0], [35.1, 764.0], [35.2, 767.0], [35.3, 767.0], [35.4, 768.0], [35.5, 768.0], [35.6, 769.0], [35.7, 770.0], [35.8, 770.0], [35.9, 770.0], [36.0, 774.0], [36.1, 781.0], [36.2, 782.0], [36.3, 782.0], [36.4, 782.0], [36.5, 782.0], [36.6, 786.0], [36.7, 786.0], [36.8, 789.0], [36.9, 790.0], [37.0, 790.0], [37.1, 792.0], [37.2, 796.0], [37.3, 797.0], [37.4, 797.0], [37.5, 801.0], [37.6, 801.0], [37.7, 812.0], [37.8, 812.0], [37.9, 812.0], [38.0, 816.0], [38.1, 816.0], [38.2, 816.0], [38.3, 819.0], [38.4, 826.0], [38.5, 826.0], [38.6, 827.0], [38.7, 829.0], [38.8, 831.0], [38.9, 831.0], [39.0, 832.0], [39.1, 836.0], [39.2, 838.0], [39.3, 838.0], [39.4, 842.0], [39.5, 844.0], [39.6, 845.0], [39.7, 845.0], [39.8, 849.0], [39.9, 851.0], [40.0, 853.0], [40.1, 853.0], [40.2, 854.0], [40.3, 859.0], [40.4, 859.0], [40.5, 859.0], [40.6, 861.0], [40.7, 861.0], [40.8, 861.0], [40.9, 863.0], [41.0, 868.0], [41.1, 870.0], [41.2, 870.0], [41.3, 871.0], [41.4, 873.0], [41.5, 874.0], [41.6, 874.0], [41.7, 875.0], [41.8, 876.0], [41.9, 876.0], [42.0, 877.0], [42.1, 881.0], [42.2, 881.0], [42.3, 881.0], [42.4, 883.0], [42.5, 883.0], [42.6, 884.0], [42.7, 884.0], [42.8, 885.0], [42.9, 886.0], [43.0, 887.0], [43.1, 887.0], [43.2, 887.0], [43.3, 890.0], [43.4, 890.0], [43.5, 893.0], [43.6, 893.0], [43.7, 894.0], [43.8, 894.0], [43.9, 895.0], [44.0, 895.0], [44.1, 895.0], [44.2, 895.0], [44.3, 898.0], [44.4, 899.0], [44.5, 901.0], [44.6, 901.0], [44.7, 903.0], [44.8, 904.0], [44.9, 904.0], [45.0, 904.0], [45.1, 906.0], [45.2, 907.0], [45.3, 907.0], [45.4, 909.0], [45.5, 910.0], [45.6, 911.0], [45.7, 911.0], [45.8, 913.0], [45.9, 918.0], [46.0, 919.0], [46.1, 919.0], [46.2, 921.0], [46.3, 921.0], [46.4, 923.0], [46.5, 923.0], [46.6, 927.0], [46.7, 928.0], [46.8, 928.0], [46.9, 928.0], [47.0, 929.0], [47.1, 930.0], [47.2, 930.0], [47.3, 932.0], [47.4, 934.0], [47.5, 936.0], [47.6, 936.0], [47.7, 942.0], [47.8, 943.0], [47.9, 949.0], [48.0, 949.0], [48.1, 950.0], [48.2, 951.0], [48.3, 954.0], [48.4, 954.0], [48.5, 955.0], [48.6, 956.0], [48.7, 956.0], [48.8, 957.0], [48.9, 959.0], [49.0, 959.0], [49.1, 959.0], [49.2, 960.0], [49.3, 962.0], [49.4, 963.0], [49.5, 963.0], [49.6, 964.0], [49.7, 965.0], [49.8, 966.0], [49.9, 966.0], [50.0, 966.0], [50.1, 967.0], [50.2, 967.0], [50.3, 969.0], [50.4, 971.0], [50.5, 971.0], [50.6, 971.0], [50.7, 973.0], [50.8, 975.0], [50.9, 979.0], [51.0, 979.0], [51.1, 981.0], [51.2, 982.0], [51.3, 983.0], [51.4, 983.0], [51.5, 984.0], [51.6, 985.0], [51.7, 985.0], [51.8, 985.0], [51.9, 986.0], [52.0, 989.0], [52.1, 989.0], [52.2, 991.0], [52.3, 992.0], [52.4, 994.0], [52.5, 994.0], [52.6, 995.0], [52.7, 995.0], [52.8, 995.0], [52.9, 995.0], [53.0, 996.0], [53.1, 999.0], [53.2, 1000.0], [53.3, 1000.0], [53.4, 1004.0], [53.5, 1005.0], [53.6, 1005.0], [53.7, 1005.0], [53.8, 1005.0], [53.9, 1006.0], [54.0, 1006.0], [54.1, 1006.0], [54.2, 1006.0], [54.3, 1006.0], [54.4, 1006.0], [54.5, 1007.0], [54.6, 1010.0], [54.7, 1012.0], [54.8, 1012.0], [54.9, 1012.0], [55.0, 1014.0], [55.1, 1014.0], [55.2, 1016.0], [55.3, 1016.0], [55.4, 1019.0], [55.5, 1019.0], [55.6, 1021.0], [55.7, 1027.0], [55.8, 1027.0], [55.9, 1027.0], [56.0, 1027.0], [56.1, 1030.0], [56.2, 1030.0], [56.3, 1030.0], [56.4, 1030.0], [56.5, 1031.0], [56.6, 1032.0], [56.7, 1032.0], [56.8, 1032.0], [56.9, 1033.0], [57.0, 1033.0], [57.1, 1035.0], [57.2, 1037.0], [57.3, 1040.0], [57.4, 1040.0], [57.5, 1042.0], [57.6, 1042.0], [57.7, 1043.0], [57.8, 1043.0], [57.9, 1046.0], [58.0, 1050.0], [58.1, 1050.0], [58.2, 1050.0], [58.3, 1055.0], [58.4, 1057.0], [58.5, 1057.0], [58.6, 1058.0], [58.7, 1061.0], [58.8, 1062.0], [58.9, 1062.0], [59.0, 1065.0], [59.1, 1065.0], [59.2, 1066.0], [59.3, 1066.0], [59.4, 1067.0], [59.5, 1072.0], [59.6, 1077.0], [59.7, 1077.0], [59.8, 1084.0], [59.9, 1087.0], [60.0, 1090.0], [60.1, 1090.0], [60.2, 1091.0], [60.3, 1095.0], [60.4, 1095.0], [60.5, 1096.0], [60.6, 1097.0], [60.7, 1098.0], [60.8, 1098.0], [60.9, 1099.0], [61.0, 1100.0], [61.1, 1101.0], [61.2, 1101.0], [61.3, 1104.0], [61.4, 1104.0], [61.5, 1104.0], [61.6, 1104.0], [61.7, 1105.0], [61.8, 1108.0], [61.9, 1108.0], [62.0, 1112.0], [62.1, 1113.0], [62.2, 1115.0], [62.3, 1115.0], [62.4, 1116.0], [62.5, 1117.0], [62.6, 1121.0], [62.7, 1121.0], [62.8, 1127.0], [62.9, 1138.0], [63.0, 1139.0], [63.1, 1139.0], [63.2, 1140.0], [63.3, 1145.0], [63.4, 1145.0], [63.5, 1145.0], [63.6, 1149.0], [63.7, 1151.0], [63.8, 1151.0], [63.9, 1154.0], [64.0, 1154.0], [64.1, 1154.0], [64.2, 1154.0], [64.3, 1161.0], [64.4, 1161.0], [64.5, 1162.0], [64.6, 1162.0], [64.7, 1163.0], [64.8, 1169.0], [64.9, 1169.0], [65.0, 1169.0], [65.1, 1169.0], [65.2, 1173.0], [65.3, 1173.0], [65.4, 1176.0], [65.5, 1177.0], [65.6, 1177.0], [65.7, 1177.0], [65.8, 1181.0], [65.9, 1183.0], [66.0, 1183.0], [66.1, 1183.0], [66.2, 1185.0], [66.3, 1186.0], [66.4, 1193.0], [66.5, 1193.0], [66.6, 1201.0], [66.7, 1201.0], [66.8, 1201.0], [66.9, 1213.0], [67.0, 1219.0], [67.1, 1220.0], [67.2, 1220.0], [67.3, 1222.0], [67.4, 1223.0], [67.5, 1225.0], [67.6, 1225.0], [67.7, 1231.0], [67.8, 1231.0], [67.9, 1235.0], [68.0, 1235.0], [68.1, 1235.0], [68.2, 1238.0], [68.3, 1242.0], [68.4, 1242.0], [68.5, 1245.0], [68.6, 1246.0], [68.7, 1246.0], [68.8, 1247.0], [68.9, 1248.0], [69.0, 1251.0], [69.1, 1251.0], [69.2, 1251.0], [69.3, 1252.0], [69.4, 1255.0], [69.5, 1255.0], [69.6, 1260.0], [69.7, 1261.0], [69.8, 1263.0], [69.9, 1263.0], [70.0, 1263.0], [70.1, 1264.0], [70.2, 1264.0], [70.3, 1265.0], [70.4, 1267.0], [70.5, 1268.0], [70.6, 1268.0], [70.7, 1272.0], [70.8, 1272.0], [70.9, 1273.0], [71.0, 1273.0], [71.1, 1274.0], [71.2, 1277.0], [71.3, 1278.0], [71.4, 1278.0], [71.5, 1279.0], [71.6, 1281.0], [71.7, 1281.0], [71.8, 1281.0], [71.9, 1281.0], [72.0, 1281.0], [72.1, 1281.0], [72.2, 1282.0], [72.3, 1285.0], [72.4, 1286.0], [72.5, 1286.0], [72.6, 1290.0], [72.7, 1291.0], [72.8, 1291.0], [72.9, 1291.0], [73.0, 1295.0], [73.1, 1302.0], [73.2, 1305.0], [73.3, 1305.0], [73.4, 1309.0], [73.5, 1310.0], [73.6, 1310.0], [73.7, 1312.0], [73.8, 1313.0], [73.9, 1318.0], [74.0, 1318.0], [74.1, 1320.0], [74.2, 1328.0], [74.3, 1329.0], [74.4, 1329.0], [74.5, 1338.0], [74.6, 1344.0], [74.7, 1349.0], [74.8, 1349.0], [74.9, 1350.0], [75.0, 1350.0], [75.1, 1350.0], [75.2, 1350.0], [75.3, 1351.0], [75.4, 1353.0], [75.5, 1353.0], [75.6, 1355.0], [75.7, 1356.0], [75.8, 1364.0], [75.9, 1364.0], [76.0, 1372.0], [76.1, 1372.0], [76.2, 1376.0], [76.3, 1376.0], [76.4, 1378.0], [76.5, 1378.0], [76.6, 1379.0], [76.7, 1379.0], [76.8, 1379.0], [76.9, 1380.0], [77.0, 1380.0], [77.1, 1386.0], [77.2, 1389.0], [77.3, 1389.0], [77.4, 1389.0], [77.5, 1392.0], [77.6, 1393.0], [77.7, 1394.0], [77.8, 1394.0], [77.9, 1397.0], [78.0, 1399.0], [78.1, 1399.0], [78.2, 1399.0], [78.3, 1404.0], [78.4, 1405.0], [78.5, 1405.0], [78.6, 1410.0], [78.7, 1412.0], [78.8, 1416.0], [78.9, 1416.0], [79.0, 1419.0], [79.1, 1421.0], [79.2, 1422.0], [79.3, 1422.0], [79.4, 1422.0], [79.5, 1428.0], [79.6, 1431.0], [79.7, 1431.0], [79.8, 1436.0], [79.9, 1437.0], [80.0, 1438.0], [80.1, 1438.0], [80.2, 1441.0], [80.3, 1441.0], [80.4, 1441.0], [80.5, 1442.0], [80.6, 1443.0], [80.7, 1451.0], [80.8, 1451.0], [80.9, 1451.0], [81.0, 1452.0], [81.1, 1452.0], [81.2, 1452.0], [81.3, 1454.0], [81.4, 1461.0], [81.5, 1467.0], [81.6, 1467.0], [81.7, 1472.0], [81.8, 1473.0], [81.9, 1473.0], [82.0, 1476.0], [82.1, 1476.0], [82.2, 1476.0], [82.3, 1476.0], [82.4, 1477.0], [82.5, 1479.0], [82.6, 1480.0], [82.7, 1480.0], [82.8, 1482.0], [82.9, 1488.0], [83.0, 1490.0], [83.1, 1490.0], [83.2, 1491.0], [83.3, 1492.0], [83.4, 1492.0], [83.5, 1492.0], [83.6, 1500.0], [83.7, 1506.0], [83.8, 1506.0], [83.9, 1509.0], [84.0, 1527.0], [84.1, 1530.0], [84.2, 1530.0], [84.3, 1531.0], [84.4, 1531.0], [84.5, 1532.0], [84.6, 1532.0], [84.7, 1548.0], [84.8, 1548.0], [84.9, 1552.0], [85.0, 1552.0], [85.1, 1556.0], [85.2, 1566.0], [85.3, 1566.0], [85.4, 1576.0], [85.5, 1581.0], [85.6, 1587.0], [85.7, 1587.0], [85.8, 1594.0], [85.9, 1600.0], [86.0, 1604.0], [86.1, 1604.0], [86.2, 1610.0], [86.3, 1617.0], [86.4, 1620.0], [86.5, 1620.0], [86.6, 1624.0], [86.7, 1625.0], [86.8, 1625.0], [86.9, 1627.0], [87.0, 1630.0], [87.1, 1631.0], [87.2, 1631.0], [87.3, 1635.0], [87.4, 1637.0], [87.5, 1643.0], [87.6, 1643.0], [87.7, 1653.0], [87.8, 1655.0], [87.9, 1659.0], [88.0, 1659.0], [88.1, 1672.0], [88.2, 1674.0], [88.3, 1678.0], [88.4, 1678.0], [88.5, 1680.0], [88.6, 1681.0], [88.7, 1681.0], [88.8, 1684.0], [88.9, 1685.0], [89.0, 1689.0], [89.1, 1689.0], [89.2, 1695.0], [89.3, 1695.0], [89.4, 1731.0], [89.5, 1731.0], [89.6, 1732.0], [89.7, 1734.0], [89.8, 1735.0], [89.9, 1735.0], [90.0, 1736.0], [90.1, 1744.0], [90.2, 1744.0], [90.3, 1746.0], [90.4, 1746.0], [90.5, 1749.0], [90.6, 1749.0], [90.7, 1749.0], [90.8, 1753.0], [90.9, 1755.0], [91.0, 1755.0], [91.1, 1770.0], [91.2, 1777.0], [91.3, 1781.0], [91.4, 1781.0], [91.5, 1785.0], [91.6, 1801.0], [91.7, 1801.0], [91.8, 1801.0], [91.9, 1804.0], [92.0, 1805.0], [92.1, 1805.0], [92.2, 1811.0], [92.3, 1822.0], [92.4, 1824.0], [92.5, 1824.0], [92.6, 1824.0], [92.7, 1841.0], [92.8, 1848.0], [92.9, 1848.0], [93.0, 1860.0], [93.1, 1863.0], [93.2, 1863.0], [93.3, 1863.0], [93.4, 1866.0], [93.5, 1868.0], [93.6, 1868.0], [93.7, 1869.0], [93.8, 1875.0], [93.9, 1884.0], [94.0, 1884.0], [94.1, 1885.0], [94.2, 1890.0], [94.3, 1899.0], [94.4, 1899.0], [94.5, 1903.0], [94.6, 1915.0], [94.7, 1918.0], [94.8, 1918.0], [94.9, 1922.0], [95.0, 1929.0], [95.1, 1929.0], [95.2, 1946.0], [95.3, 1949.0], [95.4, 1961.0], [95.5, 1961.0], [95.6, 2014.0], [95.7, 2022.0], [95.8, 2042.0], [95.9, 2042.0], [96.0, 2043.0], [96.1, 2098.0], [96.2, 2129.0], [96.3, 2129.0], [96.4, 2143.0], [96.5, 2150.0], [96.6, 2176.0], [96.7, 2176.0], [96.8, 2208.0], [96.9, 2284.0], [97.0, 2284.0], [97.1, 2304.0], [97.2, 2323.0], [97.3, 2414.0], [97.4, 2414.0], [97.5, 2463.0], [97.6, 2551.0], [97.7, 2571.0], [97.8, 2571.0], [97.9, 2825.0], [98.0, 2874.0], [98.1, 2905.0], [98.2, 2905.0], [98.3, 2959.0], [98.4, 3004.0], [98.5, 3004.0], [98.6, 3030.0], [98.7, 3150.0], [98.8, 3211.0], [98.9, 3211.0], [99.0, 3240.0], [99.1, 3267.0], [99.2, 3306.0], [99.3, 3306.0], [99.4, 3328.0], [99.5, 3330.0], [99.6, 3516.0], [99.7, 3516.0], [99.8, 3768.0], [99.9, 4146.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 75.0, "series": [{"data": [[600.0, 55.0], [700.0, 75.0], [800.0, 52.0], [900.0, 64.0], [1000.0, 57.0], [1100.0, 41.0], [1200.0, 48.0], [1300.0, 38.0], [1400.0, 39.0], [1500.0, 17.0], [100.0, 4.0], [1600.0, 26.0], [1700.0, 16.0], [1800.0, 21.0], [1900.0, 8.0], [2000.0, 5.0], [2100.0, 4.0], [2300.0, 2.0], [2200.0, 2.0], [2400.0, 2.0], [2500.0, 2.0], [2800.0, 2.0], [2900.0, 2.0], [3000.0, 2.0], [3100.0, 1.0], [3200.0, 3.0], [200.0, 16.0], [3300.0, 3.0], [3500.0, 1.0], [3700.0, 1.0], [4100.0, 1.0], [300.0, 38.0], [400.0, 54.0], [500.0, 33.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 112.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 503.0, "series": [{"data": [[0.0, 112.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 503.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 120.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.618644067796609, "minX": 1.60219884E12, "maxY": 10.0, "series": [{"data": [[1.6021989E12, 10.0], [1.60219896E12, 9.618644067796609], [1.60219884E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219896E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 313.0, "minX": 1.0, "maxY": 1441.0, "series": [{"data": [[8.0, 313.0], [4.0, 669.0], [2.0, 1027.0], [1.0, 1441.0], [9.0, 697.0], [10.0, 1055.0826446280973], [5.0, 639.0], [6.0, 612.0], [3.0, 1350.0], [7.0, 683.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1052.2734693877537]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 412.45, "minX": 1.60219884E12, "maxY": 1426553.5166666666, "series": [{"data": [[1.6021989E12, 1426553.5166666666], [1.60219896E12, 245987.96666666667], [1.60219884E12, 163238.23333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6021989E12, 4233.65], [1.60219896E12, 876.9333333333333], [1.60219884E12, 412.45]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219896E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 890.9067796610173, "minX": 1.60219884E12, "maxY": 1262.5818181818177, "series": [{"data": [[1.6021989E12, 1065.572953736656], [1.60219896E12, 890.9067796610173], [1.60219884E12, 1262.5818181818177]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219896E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 889.8898305084742, "minX": 1.60219884E12, "maxY": 1261.2363636363636, "series": [{"data": [[1.6021989E12, 1064.5249110320287], [1.60219896E12, 889.8898305084742], [1.60219884E12, 1261.2363636363636]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219896E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60219884E12, "maxY": 2.0727272727272728, "series": [{"data": [[1.6021989E12, 0.01957295373665479], [1.60219896E12, 0.0], [1.60219884E12, 2.0727272727272728]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219896E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 176.0, "minX": 1.60219884E12, "maxY": 4146.0, "series": [{"data": [[1.6021989E12, 3768.0], [1.60219896E12, 3211.0], [1.60219884E12, 4146.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6021989E12, 205.06699986577033], [1.60219896E12, 223.98199880838393], [1.60219884E12, 197.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6021989E12, 205.57370005369185], [1.60219896E12, 228.48020047664642], [1.60219884E12, 197.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6021989E12, 205.34849993288518], [1.60219896E12, 226.48099940419198], [1.60219884E12, 197.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6021989E12, 176.0], [1.60219896E12, 221.0], [1.60219884E12, 197.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6021989E12, 1006.0], [1.60219896E12, 738.5], [1.60219884E12, 782.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219896E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 531.0, "minX": 1.0, "maxY": 2571.0, "series": [{"data": [[8.0, 1111.5], [9.0, 1000.5], [10.0, 1008.0], [11.0, 904.0], [12.0, 757.0], [13.0, 695.5], [14.0, 728.5], [15.0, 674.0], [1.0, 2571.0], [4.0, 1188.5], [17.0, 531.0], [18.0, 645.5], [5.0, 1482.0], [6.0, 1201.5], [7.0, 1101.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 531.0, "minX": 1.0, "maxY": 2567.0, "series": [{"data": [[8.0, 1110.0], [9.0, 999.0], [10.0, 1007.5], [11.0, 903.0], [12.0, 756.0], [13.0, 695.5], [14.0, 728.5], [15.0, 673.5], [1.0, 2567.0], [4.0, 1186.5], [17.0, 531.0], [18.0, 645.5], [5.0, 1481.0], [6.0, 1200.5], [7.0, 1100.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60219884E12, "maxY": 9.366666666666667, "series": [{"data": [[1.6021989E12, 9.366666666666667], [1.60219896E12, 1.8], [1.60219884E12, 1.0833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219896E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.9166666666666666, "minX": 1.60219884E12, "maxY": 9.366666666666667, "series": [{"data": [[1.6021989E12, 9.366666666666667], [1.60219896E12, 1.9666666666666666], [1.60219884E12, 0.9166666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219896E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.9166666666666666, "minX": 1.60219884E12, "maxY": 9.366666666666667, "series": [{"data": [[1.6021989E12, 9.366666666666667], [1.60219896E12, 1.9666666666666666], [1.60219884E12, 0.9166666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219896E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.9166666666666666, "minX": 1.60219884E12, "maxY": 9.366666666666667, "series": [{"data": [[1.6021989E12, 9.366666666666667], [1.60219896E12, 1.9666666666666666], [1.60219884E12, 0.9166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219896E12, "title": "Total Transactions Per Second"}},
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

