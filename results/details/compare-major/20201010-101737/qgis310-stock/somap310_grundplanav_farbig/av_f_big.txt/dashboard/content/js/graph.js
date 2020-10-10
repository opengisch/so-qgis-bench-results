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
        data: {"result": {"minY": 188.0, "minX": 0.0, "maxY": 4429.0, "series": [{"data": [[0.0, 188.0], [0.1, 188.0], [0.2, 192.0], [0.3, 196.0], [0.4, 196.0], [0.5, 199.0], [0.6, 201.0], [0.7, 204.0], [0.8, 204.0], [0.9, 205.0], [1.0, 214.0], [1.1, 216.0], [1.2, 216.0], [1.3, 216.0], [1.4, 216.0], [1.5, 217.0], [1.6, 217.0], [1.7, 225.0], [1.8, 226.0], [1.9, 226.0], [2.0, 228.0], [2.1, 228.0], [2.2, 228.0], [2.3, 228.0], [2.4, 230.0], [2.5, 234.0], [2.6, 242.0], [2.7, 242.0], [2.8, 250.0], [2.9, 273.0], [3.0, 274.0], [3.1, 274.0], [3.2, 287.0], [3.3, 289.0], [3.4, 289.0], [3.5, 293.0], [3.6, 293.0], [3.7, 296.0], [3.8, 296.0], [3.9, 304.0], [4.0, 306.0], [4.1, 308.0], [4.2, 308.0], [4.3, 308.0], [4.4, 310.0], [4.5, 312.0], [4.6, 312.0], [4.7, 316.0], [4.8, 321.0], [4.9, 322.0], [5.0, 322.0], [5.1, 327.0], [5.2, 329.0], [5.3, 329.0], [5.4, 329.0], [5.5, 330.0], [5.6, 331.0], [5.7, 331.0], [5.8, 332.0], [5.9, 335.0], [6.0, 337.0], [6.1, 337.0], [6.2, 338.0], [6.3, 338.0], [6.4, 338.0], [6.5, 338.0], [6.6, 338.0], [6.7, 338.0], [6.8, 338.0], [6.9, 340.0], [7.0, 342.0], [7.1, 342.0], [7.2, 342.0], [7.3, 342.0], [7.4, 343.0], [7.5, 343.0], [7.6, 343.0], [7.7, 349.0], [7.8, 350.0], [7.9, 350.0], [8.0, 350.0], [8.1, 353.0], [8.2, 354.0], [8.3, 356.0], [8.4, 356.0], [8.5, 357.0], [8.6, 361.0], [8.7, 361.0], [8.8, 361.0], [8.9, 361.0], [9.0, 367.0], [9.1, 367.0], [9.2, 367.0], [9.3, 367.0], [9.4, 368.0], [9.5, 368.0], [9.6, 370.0], [9.7, 373.0], [9.8, 375.0], [9.9, 375.0], [10.0, 378.0], [10.1, 379.0], [10.2, 379.0], [10.3, 380.0], [10.4, 388.0], [10.5, 393.0], [10.6, 393.0], [10.7, 395.0], [10.8, 401.0], [10.9, 402.0], [11.0, 402.0], [11.1, 402.0], [11.2, 403.0], [11.3, 404.0], [11.4, 404.0], [11.5, 407.0], [11.6, 409.0], [11.7, 409.0], [11.8, 410.0], [11.9, 417.0], [12.0, 417.0], [12.1, 417.0], [12.2, 417.0], [12.3, 418.0], [12.4, 418.0], [12.5, 418.0], [12.6, 419.0], [12.7, 421.0], [12.8, 421.0], [12.9, 421.0], [13.0, 424.0], [13.1, 425.0], [13.2, 427.0], [13.3, 427.0], [13.4, 428.0], [13.5, 428.0], [13.6, 428.0], [13.7, 428.0], [13.8, 430.0], [13.9, 431.0], [14.0, 431.0], [14.1, 432.0], [14.2, 433.0], [14.3, 434.0], [14.4, 434.0], [14.5, 435.0], [14.6, 436.0], [14.7, 437.0], [14.8, 437.0], [14.9, 437.0], [15.0, 438.0], [15.1, 438.0], [15.2, 438.0], [15.3, 439.0], [15.4, 439.0], [15.5, 439.0], [15.6, 440.0], [15.7, 441.0], [15.8, 444.0], [15.9, 444.0], [16.0, 455.0], [16.1, 456.0], [16.2, 460.0], [16.3, 460.0], [16.4, 462.0], [16.5, 462.0], [16.6, 465.0], [16.7, 465.0], [16.8, 474.0], [16.9, 476.0], [17.0, 476.0], [17.1, 477.0], [17.2, 479.0], [17.3, 480.0], [17.4, 480.0], [17.5, 481.0], [17.6, 484.0], [17.7, 492.0], [17.8, 492.0], [17.9, 497.0], [18.0, 501.0], [18.1, 501.0], [18.2, 501.0], [18.3, 511.0], [18.4, 517.0], [18.5, 517.0], [18.6, 520.0], [18.7, 523.0], [18.8, 524.0], [18.9, 524.0], [19.0, 525.0], [19.1, 527.0], [19.2, 531.0], [19.3, 531.0], [19.4, 533.0], [19.5, 534.0], [19.6, 537.0], [19.7, 537.0], [19.8, 537.0], [19.9, 539.0], [20.0, 539.0], [20.1, 539.0], [20.2, 542.0], [20.3, 547.0], [20.4, 547.0], [20.5, 547.0], [20.6, 549.0], [20.7, 552.0], [20.8, 552.0], [20.9, 555.0], [21.0, 557.0], [21.1, 563.0], [21.2, 563.0], [21.3, 566.0], [21.4, 566.0], [21.5, 567.0], [21.6, 567.0], [21.7, 573.0], [21.8, 573.0], [21.9, 573.0], [22.0, 576.0], [22.1, 579.0], [22.2, 580.0], [22.3, 580.0], [22.4, 584.0], [22.5, 586.0], [22.6, 586.0], [22.7, 586.0], [22.8, 593.0], [22.9, 593.0], [23.0, 599.0], [23.1, 599.0], [23.2, 604.0], [23.3, 606.0], [23.4, 606.0], [23.5, 608.0], [23.6, 610.0], [23.7, 611.0], [23.8, 611.0], [23.9, 614.0], [24.0, 615.0], [24.1, 618.0], [24.2, 618.0], [24.3, 620.0], [24.4, 621.0], [24.5, 621.0], [24.6, 621.0], [24.7, 622.0], [24.8, 622.0], [24.9, 628.0], [25.0, 628.0], [25.1, 629.0], [25.2, 631.0], [25.3, 631.0], [25.4, 632.0], [25.5, 633.0], [25.6, 634.0], [25.7, 634.0], [25.8, 636.0], [25.9, 637.0], [26.0, 638.0], [26.1, 638.0], [26.2, 640.0], [26.3, 640.0], [26.4, 640.0], [26.5, 640.0], [26.6, 641.0], [26.7, 642.0], [26.8, 642.0], [26.9, 642.0], [27.0, 642.0], [27.1, 644.0], [27.2, 644.0], [27.3, 645.0], [27.4, 648.0], [27.5, 648.0], [27.6, 648.0], [27.7, 649.0], [27.8, 650.0], [27.9, 652.0], [28.0, 652.0], [28.1, 653.0], [28.2, 656.0], [28.3, 657.0], [28.4, 657.0], [28.5, 657.0], [28.6, 658.0], [28.7, 658.0], [28.8, 658.0], [28.9, 659.0], [29.0, 667.0], [29.1, 667.0], [29.2, 668.0], [29.3, 669.0], [29.4, 674.0], [29.5, 674.0], [29.6, 676.0], [29.7, 679.0], [29.8, 679.0], [29.9, 679.0], [30.0, 679.0], [30.1, 679.0], [30.2, 679.0], [30.3, 681.0], [30.4, 682.0], [30.5, 682.0], [30.6, 682.0], [30.7, 682.0], [30.8, 682.0], [30.9, 682.0], [31.0, 682.0], [31.1, 682.0], [31.2, 683.0], [31.3, 687.0], [31.4, 687.0], [31.5, 688.0], [31.6, 696.0], [31.7, 696.0], [31.8, 696.0], [31.9, 697.0], [32.0, 698.0], [32.1, 698.0], [32.2, 699.0], [32.3, 700.0], [32.4, 700.0], [32.5, 700.0], [32.6, 702.0], [32.7, 703.0], [32.8, 703.0], [32.9, 703.0], [33.0, 705.0], [33.1, 705.0], [33.2, 708.0], [33.3, 708.0], [33.4, 709.0], [33.5, 710.0], [33.6, 710.0], [33.7, 711.0], [33.8, 712.0], [33.9, 715.0], [34.0, 715.0], [34.1, 717.0], [34.2, 718.0], [34.3, 718.0], [34.4, 718.0], [34.5, 718.0], [34.6, 718.0], [34.7, 719.0], [34.8, 719.0], [34.9, 721.0], [35.0, 721.0], [35.1, 721.0], [35.2, 722.0], [35.3, 725.0], [35.4, 726.0], [35.5, 726.0], [35.6, 729.0], [35.7, 732.0], [35.8, 733.0], [35.9, 733.0], [36.0, 739.0], [36.1, 741.0], [36.2, 741.0], [36.3, 741.0], [36.4, 744.0], [36.5, 747.0], [36.6, 752.0], [36.7, 752.0], [36.8, 757.0], [36.9, 761.0], [37.0, 761.0], [37.1, 763.0], [37.2, 764.0], [37.3, 768.0], [37.4, 768.0], [37.5, 768.0], [37.6, 768.0], [37.7, 769.0], [37.8, 769.0], [37.9, 772.0], [38.0, 773.0], [38.1, 774.0], [38.2, 774.0], [38.3, 774.0], [38.4, 774.0], [38.5, 774.0], [38.6, 785.0], [38.7, 788.0], [38.8, 789.0], [38.9, 789.0], [39.0, 792.0], [39.1, 794.0], [39.2, 795.0], [39.3, 795.0], [39.4, 797.0], [39.5, 797.0], [39.6, 797.0], [39.7, 797.0], [39.8, 801.0], [39.9, 803.0], [40.0, 803.0], [40.1, 803.0], [40.2, 805.0], [40.3, 808.0], [40.4, 808.0], [40.5, 809.0], [40.6, 813.0], [40.7, 816.0], [40.8, 816.0], [40.9, 816.0], [41.0, 817.0], [41.1, 818.0], [41.2, 818.0], [41.3, 818.0], [41.4, 819.0], [41.5, 827.0], [41.6, 827.0], [41.7, 828.0], [41.8, 828.0], [41.9, 828.0], [42.0, 831.0], [42.1, 833.0], [42.2, 834.0], [42.3, 834.0], [42.4, 840.0], [42.5, 842.0], [42.6, 842.0], [42.7, 842.0], [42.8, 847.0], [42.9, 853.0], [43.0, 859.0], [43.1, 859.0], [43.2, 862.0], [43.3, 864.0], [43.4, 864.0], [43.5, 865.0], [43.6, 865.0], [43.7, 866.0], [43.8, 866.0], [43.9, 866.0], [44.0, 867.0], [44.1, 869.0], [44.2, 869.0], [44.3, 873.0], [44.4, 874.0], [44.5, 875.0], [44.6, 875.0], [44.7, 877.0], [44.8, 881.0], [44.9, 884.0], [45.0, 884.0], [45.1, 884.0], [45.2, 886.0], [45.3, 886.0], [45.4, 887.0], [45.5, 888.0], [45.6, 888.0], [45.7, 888.0], [45.8, 888.0], [45.9, 892.0], [46.0, 892.0], [46.1, 892.0], [46.2, 893.0], [46.3, 895.0], [46.4, 895.0], [46.5, 895.0], [46.6, 896.0], [46.7, 896.0], [46.8, 896.0], [46.9, 901.0], [47.0, 903.0], [47.1, 903.0], [47.2, 903.0], [47.3, 904.0], [47.4, 906.0], [47.5, 906.0], [47.6, 906.0], [47.7, 910.0], [47.8, 911.0], [47.9, 912.0], [48.0, 912.0], [48.1, 913.0], [48.2, 914.0], [48.3, 915.0], [48.4, 915.0], [48.5, 916.0], [48.6, 916.0], [48.7, 916.0], [48.8, 916.0], [48.9, 917.0], [49.0, 917.0], [49.1, 917.0], [49.2, 919.0], [49.3, 919.0], [49.4, 920.0], [49.5, 920.0], [49.6, 920.0], [49.7, 921.0], [49.8, 922.0], [49.9, 922.0], [50.0, 924.0], [50.1, 925.0], [50.2, 925.0], [50.3, 925.0], [50.4, 926.0], [50.5, 931.0], [50.6, 931.0], [50.7, 933.0], [50.8, 936.0], [50.9, 939.0], [51.0, 939.0], [51.1, 942.0], [51.2, 943.0], [51.3, 946.0], [51.4, 946.0], [51.5, 946.0], [51.6, 949.0], [51.7, 949.0], [51.8, 949.0], [51.9, 950.0], [52.0, 955.0], [52.1, 955.0], [52.2, 957.0], [52.3, 960.0], [52.4, 961.0], [52.5, 961.0], [52.6, 961.0], [52.7, 963.0], [52.8, 963.0], [52.9, 963.0], [53.0, 967.0], [53.1, 969.0], [53.2, 973.0], [53.3, 973.0], [53.4, 974.0], [53.5, 975.0], [53.6, 975.0], [53.7, 976.0], [53.8, 976.0], [53.9, 977.0], [54.0, 977.0], [54.1, 978.0], [54.2, 980.0], [54.3, 985.0], [54.4, 985.0], [54.5, 986.0], [54.6, 989.0], [54.7, 990.0], [54.8, 990.0], [54.9, 991.0], [55.0, 994.0], [55.1, 994.0], [55.2, 995.0], [55.3, 995.0], [55.4, 996.0], [55.5, 996.0], [55.6, 997.0], [55.7, 998.0], [55.8, 999.0], [55.9, 999.0], [56.0, 999.0], [56.1, 1000.0], [56.2, 1001.0], [56.3, 1001.0], [56.4, 1001.0], [56.5, 1004.0], [56.6, 1005.0], [56.7, 1005.0], [56.8, 1009.0], [56.9, 1011.0], [57.0, 1011.0], [57.1, 1012.0], [57.2, 1015.0], [57.3, 1020.0], [57.4, 1020.0], [57.5, 1022.0], [57.6, 1023.0], [57.7, 1024.0], [57.8, 1024.0], [57.9, 1027.0], [58.0, 1028.0], [58.1, 1028.0], [58.2, 1028.0], [58.3, 1029.0], [58.4, 1029.0], [58.5, 1029.0], [58.6, 1030.0], [58.7, 1033.0], [58.8, 1033.0], [58.9, 1033.0], [59.0, 1036.0], [59.1, 1037.0], [59.2, 1038.0], [59.3, 1038.0], [59.4, 1039.0], [59.5, 1043.0], [59.6, 1045.0], [59.7, 1045.0], [59.8, 1046.0], [59.9, 1046.0], [60.0, 1048.0], [60.1, 1048.0], [60.2, 1048.0], [60.3, 1048.0], [60.4, 1048.0], [60.5, 1055.0], [60.6, 1058.0], [60.7, 1062.0], [60.8, 1062.0], [60.9, 1065.0], [61.0, 1065.0], [61.1, 1065.0], [61.2, 1065.0], [61.3, 1066.0], [61.4, 1069.0], [61.5, 1069.0], [61.6, 1069.0], [61.7, 1069.0], [61.8, 1071.0], [61.9, 1071.0], [62.0, 1076.0], [62.1, 1077.0], [62.2, 1078.0], [62.3, 1078.0], [62.4, 1078.0], [62.5, 1081.0], [62.6, 1081.0], [62.7, 1081.0], [62.8, 1082.0], [62.9, 1085.0], [63.0, 1085.0], [63.1, 1085.0], [63.2, 1085.0], [63.3, 1085.0], [63.4, 1085.0], [63.5, 1087.0], [63.6, 1092.0], [63.7, 1097.0], [63.8, 1097.0], [63.9, 1098.0], [64.0, 1102.0], [64.1, 1104.0], [64.2, 1104.0], [64.3, 1108.0], [64.4, 1112.0], [64.5, 1113.0], [64.6, 1113.0], [64.7, 1114.0], [64.8, 1120.0], [64.9, 1120.0], [65.0, 1120.0], [65.1, 1120.0], [65.2, 1126.0], [65.3, 1126.0], [65.4, 1126.0], [65.5, 1130.0], [65.6, 1136.0], [65.7, 1136.0], [65.8, 1136.0], [65.9, 1136.0], [66.0, 1137.0], [66.1, 1137.0], [66.2, 1137.0], [66.3, 1138.0], [66.4, 1142.0], [66.5, 1142.0], [66.6, 1144.0], [66.7, 1152.0], [66.8, 1152.0], [66.9, 1153.0], [67.0, 1160.0], [67.1, 1161.0], [67.2, 1161.0], [67.3, 1163.0], [67.4, 1165.0], [67.5, 1167.0], [67.6, 1167.0], [67.7, 1174.0], [67.8, 1174.0], [67.9, 1176.0], [68.0, 1176.0], [68.1, 1176.0], [68.2, 1177.0], [68.3, 1179.0], [68.4, 1179.0], [68.5, 1181.0], [68.6, 1182.0], [68.7, 1182.0], [68.8, 1184.0], [68.9, 1186.0], [69.0, 1189.0], [69.1, 1189.0], [69.2, 1189.0], [69.3, 1189.0], [69.4, 1193.0], [69.5, 1193.0], [69.6, 1194.0], [69.7, 1195.0], [69.8, 1208.0], [69.9, 1208.0], [70.0, 1210.0], [70.1, 1210.0], [70.2, 1210.0], [70.3, 1214.0], [70.4, 1216.0], [70.5, 1218.0], [70.6, 1218.0], [70.7, 1219.0], [70.8, 1220.0], [70.9, 1220.0], [71.0, 1220.0], [71.1, 1223.0], [71.2, 1224.0], [71.3, 1224.0], [71.4, 1224.0], [71.5, 1231.0], [71.6, 1231.0], [71.7, 1231.0], [71.8, 1235.0], [71.9, 1236.0], [72.0, 1236.0], [72.1, 1236.0], [72.2, 1238.0], [72.3, 1239.0], [72.4, 1242.0], [72.5, 1242.0], [72.6, 1242.0], [72.7, 1243.0], [72.8, 1245.0], [72.9, 1245.0], [73.0, 1255.0], [73.1, 1255.0], [73.2, 1258.0], [73.3, 1258.0], [73.4, 1260.0], [73.5, 1265.0], [73.6, 1265.0], [73.7, 1269.0], [73.8, 1269.0], [73.9, 1270.0], [74.0, 1270.0], [74.1, 1270.0], [74.2, 1273.0], [74.3, 1276.0], [74.4, 1276.0], [74.5, 1278.0], [74.6, 1278.0], [74.7, 1279.0], [74.8, 1279.0], [74.9, 1280.0], [75.0, 1288.0], [75.1, 1288.0], [75.2, 1288.0], [75.3, 1288.0], [75.4, 1289.0], [75.5, 1289.0], [75.6, 1292.0], [75.7, 1293.0], [75.8, 1293.0], [75.9, 1293.0], [76.0, 1299.0], [76.1, 1301.0], [76.2, 1304.0], [76.3, 1304.0], [76.4, 1305.0], [76.5, 1305.0], [76.6, 1308.0], [76.7, 1308.0], [76.8, 1311.0], [76.9, 1311.0], [77.0, 1311.0], [77.1, 1313.0], [77.2, 1317.0], [77.3, 1319.0], [77.4, 1319.0], [77.5, 1320.0], [77.6, 1321.0], [77.7, 1324.0], [77.8, 1324.0], [77.9, 1327.0], [78.0, 1328.0], [78.1, 1329.0], [78.2, 1329.0], [78.3, 1329.0], [78.4, 1330.0], [78.5, 1330.0], [78.6, 1330.0], [78.7, 1334.0], [78.8, 1336.0], [78.9, 1336.0], [79.0, 1338.0], [79.1, 1342.0], [79.2, 1349.0], [79.3, 1349.0], [79.4, 1355.0], [79.5, 1360.0], [79.6, 1368.0], [79.7, 1368.0], [79.8, 1368.0], [79.9, 1376.0], [80.0, 1376.0], [80.1, 1376.0], [80.2, 1387.0], [80.3, 1391.0], [80.4, 1391.0], [80.5, 1393.0], [80.6, 1394.0], [80.7, 1394.0], [80.8, 1394.0], [80.9, 1400.0], [81.0, 1401.0], [81.1, 1408.0], [81.2, 1408.0], [81.3, 1417.0], [81.4, 1419.0], [81.5, 1421.0], [81.6, 1421.0], [81.7, 1423.0], [81.8, 1428.0], [81.9, 1428.0], [82.0, 1438.0], [82.1, 1451.0], [82.2, 1451.0], [82.3, 1451.0], [82.4, 1453.0], [82.5, 1453.0], [82.6, 1460.0], [82.7, 1460.0], [82.8, 1462.0], [82.9, 1462.0], [83.0, 1464.0], [83.1, 1464.0], [83.2, 1465.0], [83.3, 1465.0], [83.4, 1465.0], [83.5, 1470.0], [83.6, 1475.0], [83.7, 1476.0], [83.8, 1476.0], [83.9, 1480.0], [84.0, 1482.0], [84.1, 1488.0], [84.2, 1488.0], [84.3, 1492.0], [84.4, 1500.0], [84.5, 1502.0], [84.6, 1502.0], [84.7, 1506.0], [84.8, 1514.0], [84.9, 1523.0], [85.0, 1523.0], [85.1, 1526.0], [85.2, 1528.0], [85.3, 1528.0], [85.4, 1538.0], [85.5, 1539.0], [85.6, 1542.0], [85.7, 1542.0], [85.8, 1543.0], [85.9, 1546.0], [86.0, 1552.0], [86.1, 1552.0], [86.2, 1552.0], [86.3, 1556.0], [86.4, 1556.0], [86.5, 1556.0], [86.6, 1557.0], [86.7, 1557.0], [86.8, 1557.0], [86.9, 1559.0], [87.0, 1573.0], [87.1, 1579.0], [87.2, 1579.0], [87.3, 1582.0], [87.4, 1583.0], [87.5, 1595.0], [87.6, 1595.0], [87.7, 1603.0], [87.8, 1607.0], [87.9, 1609.0], [88.0, 1609.0], [88.1, 1620.0], [88.2, 1622.0], [88.3, 1624.0], [88.4, 1624.0], [88.5, 1624.0], [88.6, 1626.0], [88.7, 1626.0], [88.8, 1628.0], [88.9, 1630.0], [89.0, 1632.0], [89.1, 1632.0], [89.2, 1641.0], [89.3, 1651.0], [89.4, 1661.0], [89.5, 1661.0], [89.6, 1666.0], [89.7, 1669.0], [89.8, 1672.0], [89.9, 1672.0], [90.0, 1672.0], [90.1, 1681.0], [90.2, 1681.0], [90.3, 1682.0], [90.4, 1684.0], [90.5, 1697.0], [90.6, 1697.0], [90.7, 1703.0], [90.8, 1706.0], [90.9, 1710.0], [91.0, 1710.0], [91.1, 1731.0], [91.2, 1762.0], [91.3, 1765.0], [91.4, 1765.0], [91.5, 1768.0], [91.6, 1775.0], [91.7, 1775.0], [91.8, 1777.0], [91.9, 1784.0], [92.0, 1794.0], [92.1, 1794.0], [92.2, 1796.0], [92.3, 1799.0], [92.4, 1811.0], [92.5, 1811.0], [92.6, 1828.0], [92.7, 1830.0], [92.8, 1843.0], [92.9, 1843.0], [93.0, 1847.0], [93.1, 1867.0], [93.2, 1882.0], [93.3, 1882.0], [93.4, 1886.0], [93.5, 1897.0], [93.6, 1897.0], [93.7, 1899.0], [93.8, 1903.0], [93.9, 1911.0], [94.0, 1911.0], [94.1, 1920.0], [94.2, 1921.0], [94.3, 1936.0], [94.4, 1936.0], [94.5, 1949.0], [94.6, 1949.0], [94.7, 1952.0], [94.8, 1952.0], [94.9, 1958.0], [95.0, 1960.0], [95.1, 1960.0], [95.2, 1967.0], [95.3, 2014.0], [95.4, 2042.0], [95.5, 2042.0], [95.6, 2110.0], [95.7, 2131.0], [95.8, 2136.0], [95.9, 2136.0], [96.0, 2138.0], [96.1, 2140.0], [96.2, 2147.0], [96.3, 2147.0], [96.4, 2154.0], [96.5, 2191.0], [96.6, 2203.0], [96.7, 2203.0], [96.8, 2247.0], [96.9, 2266.0], [97.0, 2266.0], [97.1, 2280.0], [97.2, 2341.0], [97.3, 2432.0], [97.4, 2432.0], [97.5, 2433.0], [97.6, 2574.0], [97.7, 2585.0], [97.8, 2585.0], [97.9, 2606.0], [98.0, 2684.0], [98.1, 2822.0], [98.2, 2822.0], [98.3, 2836.0], [98.4, 2974.0], [98.5, 2974.0], [98.6, 2995.0], [98.7, 3025.0], [98.8, 3033.0], [98.9, 3033.0], [99.0, 3156.0], [99.1, 3241.0], [99.2, 3485.0], [99.3, 3485.0], [99.4, 3552.0], [99.5, 3574.0], [99.6, 4028.0], [99.7, 4028.0], [99.8, 4297.0], [99.9, 4429.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 68.0, "series": [{"data": [[600.0, 67.0], [700.0, 55.0], [800.0, 52.0], [900.0, 68.0], [1000.0, 58.0], [1100.0, 43.0], [1200.0, 46.0], [1300.0, 35.0], [1400.0, 26.0], [1500.0, 24.0], [100.0, 4.0], [1600.0, 22.0], [1700.0, 13.0], [1800.0, 10.0], [1900.0, 11.0], [2000.0, 2.0], [2100.0, 8.0], [2200.0, 4.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 2.0], [2600.0, 2.0], [2800.0, 2.0], [2900.0, 2.0], [3000.0, 2.0], [3100.0, 1.0], [200.0, 24.0], [3200.0, 1.0], [3400.0, 1.0], [3500.0, 2.0], [4000.0, 1.0], [4200.0, 1.0], [4400.0, 1.0], [300.0, 51.0], [400.0, 53.0], [500.0, 38.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 114.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 489.0, "series": [{"data": [[0.0, 132.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 489.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 114.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.904255319148936, "minX": 1.60232616E12, "maxY": 10.0, "series": [{"data": [[1.60232622E12, 9.904255319148936], [1.60232616E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232622E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 338.0, "minX": 1.0, "maxY": 1559.0, "series": [{"data": [[8.0, 650.0], [4.0, 649.0], [2.0, 1153.0], [1.0, 1027.0], [9.0, 338.0], [10.0, 1016.9614325068862], [5.0, 653.0], [6.0, 1559.0], [3.0, 1076.0], [7.0, 338.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1014.635374149659]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2004.6666666666667, "minX": 1.60232616E12, "maxY": 1087944.6666666667, "series": [{"data": [[1.60232622E12, 1087944.6666666667], [1.60232616E12, 747832.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232622E12, 3518.366666666667], [1.60232616E12, 2004.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232622E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 953.2787234042553, "minX": 1.60232616E12, "maxY": 1123.4566037735851, "series": [{"data": [[1.60232622E12, 953.2787234042553], [1.60232616E12, 1123.4566037735851]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232622E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 952.3361702127663, "minX": 1.60232616E12, "maxY": 1122.3018867924534, "series": [{"data": [[1.60232622E12, 952.3361702127663], [1.60232616E12, 1122.3018867924534]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232622E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.02765957446808508, "minX": 1.60232616E12, "maxY": 0.3018867924528298, "series": [{"data": [[1.60232622E12, 0.02765957446808508], [1.60232616E12, 0.3018867924528298]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232622E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 188.0, "minX": 1.60232616E12, "maxY": 4429.0, "series": [{"data": [[1.60232622E12, 4429.0], [1.60232616E12, 4297.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232622E12, 204.23899988770484], [1.60232616E12, 205.69799892187118]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232622E12, 204.66290004491805], [1.60232616E12, 209.76780043125152]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232622E12, 204.47449994385244], [1.60232616E12, 207.9589994609356]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232622E12, 188.0], [1.60232616E12, 192.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232622E12, 887.5], [1.60232616E12, 995.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232622E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 531.5, "minX": 6.0, "maxY": 1199.5, "series": [{"data": [[8.0, 1131.5], [17.0, 642.0], [9.0, 996.0], [10.0, 976.0], [20.0, 531.5], [11.0, 933.0], [12.0, 892.0], [6.0, 1085.0], [13.0, 703.0], [7.0, 1199.5], [14.0, 713.0], [15.0, 699.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 531.0, "minX": 6.0, "maxY": 1198.5, "series": [{"data": [[8.0, 1130.5], [17.0, 642.0], [9.0, 996.0], [10.0, 975.0], [20.0, 531.0], [11.0, 932.0], [12.0, 891.5], [6.0, 1085.0], [13.0, 702.0], [7.0, 1198.5], [14.0, 713.0], [15.0, 699.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.583333333333333, "minX": 1.60232616E12, "maxY": 7.666666666666667, "series": [{"data": [[1.60232622E12, 7.666666666666667], [1.60232616E12, 4.583333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232622E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.416666666666667, "minX": 1.60232616E12, "maxY": 7.833333333333333, "series": [{"data": [[1.60232622E12, 7.833333333333333], [1.60232616E12, 4.416666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232622E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.416666666666667, "minX": 1.60232616E12, "maxY": 7.833333333333333, "series": [{"data": [[1.60232622E12, 7.833333333333333], [1.60232616E12, 4.416666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232622E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.416666666666667, "minX": 1.60232616E12, "maxY": 7.833333333333333, "series": [{"data": [[1.60232622E12, 7.833333333333333], [1.60232616E12, 4.416666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232622E12, "title": "Total Transactions Per Second"}},
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

