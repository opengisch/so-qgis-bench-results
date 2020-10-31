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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 3785.0, "series": [{"data": [[0.0, 184.0], [0.1, 184.0], [0.2, 193.0], [0.3, 195.0], [0.4, 195.0], [0.5, 199.0], [0.6, 200.0], [0.7, 205.0], [0.8, 205.0], [0.9, 205.0], [1.0, 206.0], [1.1, 207.0], [1.2, 207.0], [1.3, 207.0], [1.4, 212.0], [1.5, 215.0], [1.6, 215.0], [1.7, 221.0], [1.8, 222.0], [1.9, 222.0], [2.0, 228.0], [2.1, 231.0], [2.2, 238.0], [2.3, 238.0], [2.4, 247.0], [2.5, 259.0], [2.6, 272.0], [2.7, 272.0], [2.8, 303.0], [2.9, 309.0], [3.0, 311.0], [3.1, 311.0], [3.2, 313.0], [3.3, 315.0], [3.4, 315.0], [3.5, 319.0], [3.6, 319.0], [3.7, 321.0], [3.8, 321.0], [3.9, 322.0], [4.0, 327.0], [4.1, 328.0], [4.2, 328.0], [4.3, 329.0], [4.4, 330.0], [4.5, 330.0], [4.6, 330.0], [4.7, 333.0], [4.8, 334.0], [4.9, 334.0], [5.0, 334.0], [5.1, 334.0], [5.2, 334.0], [5.3, 334.0], [5.4, 335.0], [5.5, 338.0], [5.6, 341.0], [5.7, 341.0], [5.8, 341.0], [5.9, 344.0], [6.0, 345.0], [6.1, 345.0], [6.2, 345.0], [6.3, 347.0], [6.4, 348.0], [6.5, 348.0], [6.6, 348.0], [6.7, 348.0], [6.8, 348.0], [6.9, 349.0], [7.0, 350.0], [7.1, 352.0], [7.2, 352.0], [7.3, 354.0], [7.4, 357.0], [7.5, 361.0], [7.6, 361.0], [7.7, 363.0], [7.8, 363.0], [7.9, 366.0], [8.0, 366.0], [8.1, 367.0], [8.2, 371.0], [8.3, 378.0], [8.4, 378.0], [8.5, 381.0], [8.6, 382.0], [8.7, 382.0], [8.8, 384.0], [8.9, 388.0], [9.0, 389.0], [9.1, 389.0], [9.2, 389.0], [9.3, 393.0], [9.4, 398.0], [9.5, 398.0], [9.6, 401.0], [9.7, 403.0], [9.8, 403.0], [9.9, 403.0], [10.0, 406.0], [10.1, 407.0], [10.2, 407.0], [10.3, 408.0], [10.4, 408.0], [10.5, 411.0], [10.6, 411.0], [10.7, 416.0], [10.8, 421.0], [10.9, 421.0], [11.0, 421.0], [11.1, 421.0], [11.2, 421.0], [11.3, 421.0], [11.4, 421.0], [11.5, 422.0], [11.6, 424.0], [11.7, 424.0], [11.8, 425.0], [11.9, 426.0], [12.0, 427.0], [12.1, 427.0], [12.2, 430.0], [12.3, 430.0], [12.4, 430.0], [12.5, 430.0], [12.6, 434.0], [12.7, 436.0], [12.8, 437.0], [12.9, 437.0], [13.0, 437.0], [13.1, 438.0], [13.2, 439.0], [13.3, 439.0], [13.4, 440.0], [13.5, 440.0], [13.6, 440.0], [13.7, 443.0], [13.8, 444.0], [13.9, 444.0], [14.0, 444.0], [14.1, 444.0], [14.2, 445.0], [14.3, 445.0], [14.4, 445.0], [14.5, 445.0], [14.6, 446.0], [14.7, 447.0], [14.8, 447.0], [14.9, 448.0], [15.0, 450.0], [15.1, 450.0], [15.2, 450.0], [15.3, 451.0], [15.4, 451.0], [15.5, 451.0], [15.6, 452.0], [15.7, 453.0], [15.8, 453.0], [15.9, 453.0], [16.0, 453.0], [16.1, 454.0], [16.2, 456.0], [16.3, 456.0], [16.4, 456.0], [16.5, 459.0], [16.6, 460.0], [16.7, 460.0], [16.8, 460.0], [16.9, 461.0], [17.0, 461.0], [17.1, 467.0], [17.2, 468.0], [17.3, 468.0], [17.4, 468.0], [17.5, 471.0], [17.6, 473.0], [17.7, 475.0], [17.8, 475.0], [17.9, 476.0], [18.0, 477.0], [18.1, 480.0], [18.2, 480.0], [18.3, 480.0], [18.4, 482.0], [18.5, 482.0], [18.6, 483.0], [18.7, 488.0], [18.8, 488.0], [18.9, 488.0], [19.0, 500.0], [19.1, 500.0], [19.2, 503.0], [19.3, 503.0], [19.4, 506.0], [19.5, 508.0], [19.6, 509.0], [19.7, 509.0], [19.8, 510.0], [19.9, 511.0], [20.0, 512.0], [20.1, 512.0], [20.2, 513.0], [20.3, 517.0], [20.4, 517.0], [20.5, 518.0], [20.6, 519.0], [20.7, 519.0], [20.8, 519.0], [20.9, 527.0], [21.0, 528.0], [21.1, 531.0], [21.2, 531.0], [21.3, 532.0], [21.4, 533.0], [21.5, 537.0], [21.6, 537.0], [21.7, 541.0], [21.8, 548.0], [21.9, 548.0], [22.0, 551.0], [22.1, 552.0], [22.2, 553.0], [22.3, 553.0], [22.4, 553.0], [22.5, 554.0], [22.6, 556.0], [22.7, 556.0], [22.8, 560.0], [22.9, 561.0], [23.0, 562.0], [23.1, 562.0], [23.2, 564.0], [23.3, 566.0], [23.4, 566.0], [23.5, 567.0], [23.6, 569.0], [23.7, 572.0], [23.8, 572.0], [23.9, 578.0], [24.0, 579.0], [24.1, 580.0], [24.2, 580.0], [24.3, 581.0], [24.4, 593.0], [24.5, 594.0], [24.6, 594.0], [24.7, 595.0], [24.8, 595.0], [24.9, 595.0], [25.0, 595.0], [25.1, 596.0], [25.2, 597.0], [25.3, 597.0], [25.4, 597.0], [25.5, 598.0], [25.6, 598.0], [25.7, 598.0], [25.8, 599.0], [25.9, 600.0], [26.0, 601.0], [26.1, 601.0], [26.2, 604.0], [26.3, 604.0], [26.4, 610.0], [26.5, 610.0], [26.6, 611.0], [26.7, 612.0], [26.8, 612.0], [26.9, 615.0], [27.0, 616.0], [27.1, 617.0], [27.2, 617.0], [27.3, 617.0], [27.4, 622.0], [27.5, 622.0], [27.6, 622.0], [27.7, 624.0], [27.8, 624.0], [27.9, 625.0], [28.0, 625.0], [28.1, 630.0], [28.2, 630.0], [28.3, 633.0], [28.4, 633.0], [28.5, 634.0], [28.6, 635.0], [28.7, 635.0], [28.8, 636.0], [28.9, 637.0], [29.0, 637.0], [29.1, 637.0], [29.2, 641.0], [29.3, 641.0], [29.4, 642.0], [29.5, 642.0], [29.6, 644.0], [29.7, 647.0], [29.8, 648.0], [29.9, 648.0], [30.0, 649.0], [30.1, 649.0], [30.2, 649.0], [30.3, 650.0], [30.4, 651.0], [30.5, 651.0], [30.6, 651.0], [30.7, 653.0], [30.8, 654.0], [30.9, 654.0], [31.0, 654.0], [31.1, 654.0], [31.2, 655.0], [31.3, 656.0], [31.4, 656.0], [31.5, 656.0], [31.6, 656.0], [31.7, 656.0], [31.8, 659.0], [31.9, 660.0], [32.0, 661.0], [32.1, 661.0], [32.2, 663.0], [32.3, 667.0], [32.4, 669.0], [32.5, 669.0], [32.6, 669.0], [32.7, 670.0], [32.8, 670.0], [32.9, 670.0], [33.0, 671.0], [33.1, 672.0], [33.2, 674.0], [33.3, 674.0], [33.4, 675.0], [33.5, 675.0], [33.6, 675.0], [33.7, 678.0], [33.8, 678.0], [33.9, 679.0], [34.0, 679.0], [34.1, 679.0], [34.2, 679.0], [34.3, 680.0], [34.4, 680.0], [34.5, 680.0], [34.6, 681.0], [34.7, 682.0], [34.8, 682.0], [34.9, 688.0], [35.0, 688.0], [35.1, 688.0], [35.2, 689.0], [35.3, 689.0], [35.4, 691.0], [35.5, 691.0], [35.6, 691.0], [35.7, 696.0], [35.8, 700.0], [35.9, 700.0], [36.0, 702.0], [36.1, 703.0], [36.2, 705.0], [36.3, 705.0], [36.4, 707.0], [36.5, 707.0], [36.6, 709.0], [36.7, 709.0], [36.8, 710.0], [36.9, 711.0], [37.0, 711.0], [37.1, 713.0], [37.2, 716.0], [37.3, 716.0], [37.4, 716.0], [37.5, 718.0], [37.6, 718.0], [37.7, 719.0], [37.8, 719.0], [37.9, 719.0], [38.0, 719.0], [38.1, 721.0], [38.2, 721.0], [38.3, 721.0], [38.4, 724.0], [38.5, 724.0], [38.6, 727.0], [38.7, 728.0], [38.8, 728.0], [38.9, 728.0], [39.0, 730.0], [39.1, 730.0], [39.2, 730.0], [39.3, 730.0], [39.4, 730.0], [39.5, 731.0], [39.6, 731.0], [39.7, 731.0], [39.8, 733.0], [39.9, 734.0], [40.0, 735.0], [40.1, 735.0], [40.2, 735.0], [40.3, 736.0], [40.4, 736.0], [40.5, 736.0], [40.6, 737.0], [40.7, 738.0], [40.8, 738.0], [40.9, 738.0], [41.0, 740.0], [41.1, 743.0], [41.2, 743.0], [41.3, 744.0], [41.4, 747.0], [41.5, 749.0], [41.6, 749.0], [41.7, 750.0], [41.8, 753.0], [41.9, 753.0], [42.0, 755.0], [42.1, 755.0], [42.2, 757.0], [42.3, 757.0], [42.4, 761.0], [42.5, 768.0], [42.6, 772.0], [42.7, 772.0], [42.8, 772.0], [42.9, 772.0], [43.0, 773.0], [43.1, 773.0], [43.2, 773.0], [43.3, 774.0], [43.4, 774.0], [43.5, 777.0], [43.6, 777.0], [43.7, 777.0], [43.8, 777.0], [43.9, 780.0], [44.0, 780.0], [44.1, 782.0], [44.2, 782.0], [44.3, 789.0], [44.4, 791.0], [44.5, 792.0], [44.6, 792.0], [44.7, 795.0], [44.8, 798.0], [44.9, 800.0], [45.0, 800.0], [45.1, 802.0], [45.2, 803.0], [45.3, 803.0], [45.4, 806.0], [45.5, 806.0], [45.6, 810.0], [45.7, 810.0], [45.8, 811.0], [45.9, 813.0], [46.0, 814.0], [46.1, 814.0], [46.2, 818.0], [46.3, 822.0], [46.4, 825.0], [46.5, 825.0], [46.6, 828.0], [46.7, 831.0], [46.8, 831.0], [46.9, 831.0], [47.0, 833.0], [47.1, 833.0], [47.2, 833.0], [47.3, 836.0], [47.4, 837.0], [47.5, 837.0], [47.6, 837.0], [47.7, 839.0], [47.8, 841.0], [47.9, 843.0], [48.0, 843.0], [48.1, 845.0], [48.2, 847.0], [48.3, 847.0], [48.4, 847.0], [48.5, 850.0], [48.6, 858.0], [48.7, 858.0], [48.8, 858.0], [48.9, 863.0], [49.0, 866.0], [49.1, 866.0], [49.2, 867.0], [49.3, 868.0], [49.4, 868.0], [49.5, 868.0], [49.6, 873.0], [49.7, 873.0], [49.8, 873.0], [49.9, 873.0], [50.0, 875.0], [50.1, 878.0], [50.2, 878.0], [50.3, 878.0], [50.4, 879.0], [50.5, 879.0], [50.6, 879.0], [50.7, 880.0], [50.8, 891.0], [50.9, 894.0], [51.0, 894.0], [51.1, 894.0], [51.2, 895.0], [51.3, 905.0], [51.4, 905.0], [51.5, 906.0], [51.6, 912.0], [51.7, 912.0], [51.8, 912.0], [51.9, 914.0], [52.0, 914.0], [52.1, 914.0], [52.2, 918.0], [52.3, 919.0], [52.4, 920.0], [52.5, 920.0], [52.6, 920.0], [52.7, 921.0], [52.8, 923.0], [52.9, 923.0], [53.0, 925.0], [53.1, 927.0], [53.2, 928.0], [53.3, 928.0], [53.4, 931.0], [53.5, 933.0], [53.6, 933.0], [53.7, 937.0], [53.8, 937.0], [53.9, 942.0], [54.0, 942.0], [54.1, 950.0], [54.2, 955.0], [54.3, 955.0], [54.4, 955.0], [54.5, 959.0], [54.6, 964.0], [54.7, 976.0], [54.8, 976.0], [54.9, 978.0], [55.0, 981.0], [55.1, 981.0], [55.2, 987.0], [55.3, 992.0], [55.4, 993.0], [55.5, 993.0], [55.6, 994.0], [55.7, 996.0], [55.8, 996.0], [55.9, 996.0], [56.0, 1006.0], [56.1, 1007.0], [56.2, 1012.0], [56.3, 1012.0], [56.4, 1012.0], [56.5, 1014.0], [56.6, 1014.0], [56.7, 1014.0], [56.8, 1014.0], [56.9, 1015.0], [57.0, 1015.0], [57.1, 1016.0], [57.2, 1016.0], [57.3, 1021.0], [57.4, 1021.0], [57.5, 1023.0], [57.6, 1024.0], [57.7, 1029.0], [57.8, 1029.0], [57.9, 1033.0], [58.0, 1035.0], [58.1, 1036.0], [58.2, 1036.0], [58.3, 1037.0], [58.4, 1037.0], [58.5, 1037.0], [58.6, 1039.0], [58.7, 1040.0], [58.8, 1041.0], [58.9, 1041.0], [59.0, 1043.0], [59.1, 1044.0], [59.2, 1051.0], [59.3, 1051.0], [59.4, 1052.0], [59.5, 1056.0], [59.6, 1057.0], [59.7, 1057.0], [59.8, 1057.0], [59.9, 1058.0], [60.0, 1058.0], [60.1, 1058.0], [60.2, 1060.0], [60.3, 1061.0], [60.4, 1061.0], [60.5, 1065.0], [60.6, 1069.0], [60.7, 1071.0], [60.8, 1071.0], [60.9, 1071.0], [61.0, 1074.0], [61.1, 1074.0], [61.2, 1074.0], [61.3, 1076.0], [61.4, 1077.0], [61.5, 1079.0], [61.6, 1079.0], [61.7, 1079.0], [61.8, 1080.0], [61.9, 1080.0], [62.0, 1085.0], [62.1, 1085.0], [62.2, 1090.0], [62.3, 1090.0], [62.4, 1091.0], [62.5, 1092.0], [62.6, 1096.0], [62.7, 1096.0], [62.8, 1097.0], [62.9, 1099.0], [63.0, 1101.0], [63.1, 1101.0], [63.2, 1108.0], [63.3, 1109.0], [63.4, 1109.0], [63.5, 1114.0], [63.6, 1116.0], [63.7, 1116.0], [63.8, 1116.0], [63.9, 1121.0], [64.0, 1123.0], [64.1, 1124.0], [64.2, 1124.0], [64.3, 1127.0], [64.4, 1127.0], [64.5, 1133.0], [64.6, 1133.0], [64.7, 1134.0], [64.8, 1134.0], [64.9, 1136.0], [65.0, 1136.0], [65.1, 1137.0], [65.2, 1138.0], [65.3, 1138.0], [65.4, 1142.0], [65.5, 1143.0], [65.6, 1143.0], [65.7, 1143.0], [65.8, 1146.0], [65.9, 1153.0], [66.0, 1155.0], [66.1, 1155.0], [66.2, 1158.0], [66.3, 1163.0], [66.4, 1168.0], [66.5, 1168.0], [66.6, 1169.0], [66.7, 1171.0], [66.8, 1171.0], [66.9, 1177.0], [67.0, 1179.0], [67.1, 1180.0], [67.2, 1180.0], [67.3, 1180.0], [67.4, 1181.0], [67.5, 1186.0], [67.6, 1186.0], [67.7, 1190.0], [67.8, 1190.0], [67.9, 1193.0], [68.0, 1193.0], [68.1, 1197.0], [68.2, 1204.0], [68.3, 1206.0], [68.4, 1206.0], [68.5, 1209.0], [68.6, 1212.0], [68.7, 1212.0], [68.8, 1212.0], [68.9, 1213.0], [69.0, 1214.0], [69.1, 1214.0], [69.2, 1216.0], [69.3, 1217.0], [69.4, 1220.0], [69.5, 1220.0], [69.6, 1220.0], [69.7, 1223.0], [69.8, 1224.0], [69.9, 1224.0], [70.0, 1225.0], [70.1, 1225.0], [70.2, 1225.0], [70.3, 1225.0], [70.4, 1229.0], [70.5, 1232.0], [70.6, 1232.0], [70.7, 1232.0], [70.8, 1234.0], [70.9, 1242.0], [71.0, 1242.0], [71.1, 1245.0], [71.2, 1245.0], [71.3, 1248.0], [71.4, 1248.0], [71.5, 1252.0], [71.6, 1256.0], [71.7, 1256.0], [71.8, 1257.0], [71.9, 1257.0], [72.0, 1258.0], [72.1, 1258.0], [72.2, 1260.0], [72.3, 1267.0], [72.4, 1268.0], [72.5, 1268.0], [72.6, 1273.0], [72.7, 1275.0], [72.8, 1278.0], [72.9, 1278.0], [73.0, 1278.0], [73.1, 1279.0], [73.2, 1293.0], [73.3, 1293.0], [73.4, 1302.0], [73.5, 1303.0], [73.6, 1303.0], [73.7, 1307.0], [73.8, 1314.0], [73.9, 1314.0], [74.0, 1314.0], [74.1, 1316.0], [74.2, 1320.0], [74.3, 1320.0], [74.4, 1320.0], [74.5, 1321.0], [74.6, 1329.0], [74.7, 1331.0], [74.8, 1331.0], [74.9, 1335.0], [75.0, 1335.0], [75.1, 1335.0], [75.2, 1340.0], [75.3, 1342.0], [75.4, 1343.0], [75.5, 1343.0], [75.6, 1345.0], [75.7, 1351.0], [75.8, 1356.0], [75.9, 1356.0], [76.0, 1356.0], [76.1, 1357.0], [76.2, 1359.0], [76.3, 1359.0], [76.4, 1361.0], [76.5, 1363.0], [76.6, 1366.0], [76.7, 1366.0], [76.8, 1369.0], [76.9, 1371.0], [77.0, 1371.0], [77.1, 1372.0], [77.2, 1375.0], [77.3, 1379.0], [77.4, 1379.0], [77.5, 1385.0], [77.6, 1388.0], [77.7, 1392.0], [77.8, 1392.0], [77.9, 1396.0], [78.0, 1397.0], [78.1, 1401.0], [78.2, 1401.0], [78.3, 1403.0], [78.4, 1404.0], [78.5, 1404.0], [78.6, 1404.0], [78.7, 1406.0], [78.8, 1407.0], [78.9, 1407.0], [79.0, 1410.0], [79.1, 1412.0], [79.2, 1414.0], [79.3, 1414.0], [79.4, 1415.0], [79.5, 1416.0], [79.6, 1421.0], [79.7, 1421.0], [79.8, 1422.0], [79.9, 1428.0], [80.0, 1428.0], [80.1, 1428.0], [80.2, 1429.0], [80.3, 1432.0], [80.4, 1432.0], [80.5, 1434.0], [80.6, 1434.0], [80.7, 1435.0], [80.8, 1435.0], [80.9, 1437.0], [81.0, 1438.0], [81.1, 1451.0], [81.2, 1451.0], [81.3, 1451.0], [81.4, 1453.0], [81.5, 1458.0], [81.6, 1458.0], [81.7, 1462.0], [81.8, 1465.0], [81.9, 1465.0], [82.0, 1466.0], [82.1, 1479.0], [82.2, 1480.0], [82.3, 1480.0], [82.4, 1484.0], [82.5, 1485.0], [82.6, 1485.0], [82.7, 1485.0], [82.8, 1491.0], [82.9, 1492.0], [83.0, 1494.0], [83.1, 1494.0], [83.2, 1501.0], [83.3, 1513.0], [83.4, 1513.0], [83.5, 1517.0], [83.6, 1517.0], [83.7, 1526.0], [83.8, 1526.0], [83.9, 1529.0], [84.0, 1536.0], [84.1, 1545.0], [84.2, 1545.0], [84.3, 1551.0], [84.4, 1553.0], [84.5, 1556.0], [84.6, 1556.0], [84.7, 1558.0], [84.8, 1559.0], [84.9, 1566.0], [85.0, 1566.0], [85.1, 1575.0], [85.2, 1576.0], [85.3, 1576.0], [85.4, 1579.0], [85.5, 1580.0], [85.6, 1581.0], [85.7, 1581.0], [85.8, 1584.0], [85.9, 1585.0], [86.0, 1587.0], [86.1, 1587.0], [86.2, 1590.0], [86.3, 1590.0], [86.4, 1594.0], [86.5, 1594.0], [86.6, 1594.0], [86.7, 1607.0], [86.8, 1607.0], [86.9, 1611.0], [87.0, 1612.0], [87.1, 1626.0], [87.2, 1626.0], [87.3, 1627.0], [87.4, 1631.0], [87.5, 1639.0], [87.6, 1639.0], [87.7, 1646.0], [87.8, 1647.0], [87.9, 1648.0], [88.0, 1648.0], [88.1, 1657.0], [88.2, 1659.0], [88.3, 1659.0], [88.4, 1659.0], [88.5, 1660.0], [88.6, 1662.0], [88.7, 1662.0], [88.8, 1671.0], [88.9, 1681.0], [89.0, 1684.0], [89.1, 1684.0], [89.2, 1685.0], [89.3, 1688.0], [89.4, 1690.0], [89.5, 1690.0], [89.6, 1691.0], [89.7, 1691.0], [89.8, 1696.0], [89.9, 1696.0], [90.0, 1697.0], [90.1, 1702.0], [90.2, 1702.0], [90.3, 1714.0], [90.4, 1715.0], [90.5, 1718.0], [90.6, 1718.0], [90.7, 1718.0], [90.8, 1727.0], [90.9, 1729.0], [91.0, 1729.0], [91.1, 1736.0], [91.2, 1737.0], [91.3, 1744.0], [91.4, 1744.0], [91.5, 1751.0], [91.6, 1754.0], [91.7, 1754.0], [91.8, 1758.0], [91.9, 1764.0], [92.0, 1764.0], [92.1, 1764.0], [92.2, 1792.0], [92.3, 1807.0], [92.4, 1810.0], [92.5, 1810.0], [92.6, 1813.0], [92.7, 1815.0], [92.8, 1821.0], [92.9, 1821.0], [93.0, 1824.0], [93.1, 1833.0], [93.2, 1833.0], [93.3, 1833.0], [93.4, 1836.0], [93.5, 1849.0], [93.6, 1849.0], [93.7, 1863.0], [93.8, 1885.0], [93.9, 1899.0], [94.0, 1899.0], [94.1, 1915.0], [94.2, 1932.0], [94.3, 1949.0], [94.4, 1949.0], [94.5, 1953.0], [94.6, 1954.0], [94.7, 1979.0], [94.8, 1979.0], [94.9, 1983.0], [95.0, 1989.0], [95.1, 1989.0], [95.2, 2011.0], [95.3, 2019.0], [95.4, 2030.0], [95.5, 2030.0], [95.6, 2036.0], [95.7, 2056.0], [95.8, 2061.0], [95.9, 2061.0], [96.0, 2067.0], [96.1, 2086.0], [96.2, 2091.0], [96.3, 2091.0], [96.4, 2128.0], [96.5, 2136.0], [96.6, 2153.0], [96.7, 2153.0], [96.8, 2159.0], [96.9, 2169.0], [97.0, 2169.0], [97.1, 2254.0], [97.2, 2256.0], [97.3, 2265.0], [97.4, 2265.0], [97.5, 2276.0], [97.6, 2298.0], [97.7, 2319.0], [97.8, 2319.0], [97.9, 2380.0], [98.0, 2584.0], [98.1, 2629.0], [98.2, 2629.0], [98.3, 2714.0], [98.4, 2721.0], [98.5, 2721.0], [98.6, 2744.0], [98.7, 2978.0], [98.8, 3000.0], [98.9, 3000.0], [99.0, 3014.0], [99.1, 3040.0], [99.2, 3044.0], [99.3, 3044.0], [99.4, 3059.0], [99.5, 3486.0], [99.6, 3536.0], [99.7, 3536.0], [99.8, 3641.0], [99.9, 3785.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 73.0, "series": [{"data": [[600.0, 73.0], [700.0, 67.0], [800.0, 47.0], [900.0, 34.0], [1000.0, 52.0], [1100.0, 38.0], [1200.0, 38.0], [1300.0, 35.0], [1400.0, 37.0], [1500.0, 26.0], [1600.0, 25.0], [100.0, 4.0], [1700.0, 16.0], [1800.0, 13.0], [1900.0, 8.0], [2000.0, 9.0], [2100.0, 5.0], [2200.0, 5.0], [2300.0, 2.0], [2500.0, 1.0], [2600.0, 1.0], [2700.0, 3.0], [2900.0, 1.0], [3000.0, 5.0], [200.0, 16.0], [3400.0, 1.0], [3500.0, 1.0], [3700.0, 1.0], [3600.0, 1.0], [300.0, 50.0], [400.0, 69.0], [500.0, 51.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 124.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 470.0, "series": [{"data": [[0.0, 141.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 470.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 124.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.852459016393441, "minX": 1.60410018E12, "maxY": 10.0, "series": [{"data": [[1.60410024E12, 9.852459016393441], [1.60410018E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410024E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 382.0, "minX": 1.0, "maxY": 2256.0, "series": [{"data": [[8.0, 382.0], [4.0, 2256.0], [2.0, 1252.0], [1.0, 1466.0], [9.0, 718.0], [10.0, 1001.0537190082658], [5.0, 798.0], [6.0, 689.0], [3.0, 1273.0], [7.0, 688.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1001.7510204081645]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2291.95, "minX": 1.60410018E12, "maxY": 1142060.7833333334, "series": [{"data": [[1.60410024E12, 693711.4], [1.60410018E12, 1142060.7833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60410024E12, 2291.95], [1.60410018E12, 3231.0833333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410024E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 997.2046511627914, "minX": 1.60410018E12, "maxY": 1008.1606557377052, "series": [{"data": [[1.60410024E12, 1008.1606557377052], [1.60410018E12, 997.2046511627914]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410024E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 996.0186046511627, "minX": 1.60410018E12, "maxY": 1007.0491803278683, "series": [{"data": [[1.60410024E12, 1007.0491803278683], [1.60410018E12, 996.0186046511627]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410024E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.026229508196721294, "minX": 1.60410018E12, "maxY": 0.1953488372093027, "series": [{"data": [[1.60410024E12, 0.026229508196721294], [1.60410018E12, 0.1953488372093027]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410024E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60410018E12, "maxY": 3785.0, "series": [{"data": [[1.60410024E12, 3059.0], [1.60410018E12, 3785.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60410024E12, 228.78599934339525], [1.60410018E12, 198.51599958896637]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60410024E12, 231.47040046691893], [1.60410018E12, 199.26690004110336]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60410024E12, 230.1629996716976], [1.60410018E12, 199.0944999486208]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60410024E12, 207.0], [1.60410018E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60410024E12, 921.0], [1.60410018E12, 844.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410024E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 580.5, "minX": 1.0, "maxY": 2584.0, "series": [{"data": [[1.0, 2584.0], [16.0, 580.5], [8.0, 1146.5], [9.0, 1040.0], [10.0, 1015.0], [11.0, 996.0], [12.0, 734.0], [6.0, 1372.5], [13.0, 774.0], [7.0, 1129.5], [14.0, 684.5], [15.0, 713.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 580.5, "minX": 1.0, "maxY": 2581.0, "series": [{"data": [[1.0, 2581.0], [16.0, 580.5], [8.0, 1145.0], [9.0, 1039.0], [10.0, 1010.0], [11.0, 996.0], [12.0, 733.5], [6.0, 1371.5], [13.0, 773.0], [7.0, 1128.5], [14.0, 684.5], [15.0, 713.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.916666666666667, "minX": 1.60410018E12, "maxY": 7.333333333333333, "series": [{"data": [[1.60410024E12, 4.916666666666667], [1.60410018E12, 7.333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410024E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.083333333333333, "minX": 1.60410018E12, "maxY": 7.166666666666667, "series": [{"data": [[1.60410024E12, 5.083333333333333], [1.60410018E12, 7.166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410024E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.083333333333333, "minX": 1.60410018E12, "maxY": 7.166666666666667, "series": [{"data": [[1.60410024E12, 5.083333333333333], [1.60410018E12, 7.166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410024E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.083333333333333, "minX": 1.60410018E12, "maxY": 7.166666666666667, "series": [{"data": [[1.60410024E12, 5.083333333333333], [1.60410018E12, 7.166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410024E12, "title": "Total Transactions Per Second"}},
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

