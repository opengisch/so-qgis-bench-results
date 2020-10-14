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
        data: {"result": {"minY": 128.0, "minX": 0.0, "maxY": 2802.0, "series": [{"data": [[0.0, 128.0], [0.1, 128.0], [0.2, 134.0], [0.3, 138.0], [0.4, 138.0], [0.5, 140.0], [0.6, 142.0], [0.7, 144.0], [0.8, 144.0], [0.9, 147.0], [1.0, 150.0], [1.1, 150.0], [1.2, 150.0], [1.3, 151.0], [1.4, 154.0], [1.5, 155.0], [1.6, 155.0], [1.7, 162.0], [1.8, 165.0], [1.9, 165.0], [2.0, 170.0], [2.1, 173.0], [2.2, 174.0], [2.3, 174.0], [2.4, 188.0], [2.5, 190.0], [2.6, 192.0], [2.7, 192.0], [2.8, 212.0], [2.9, 212.0], [3.0, 215.0], [3.1, 215.0], [3.2, 215.0], [3.3, 218.0], [3.4, 218.0], [3.5, 221.0], [3.6, 221.0], [3.7, 228.0], [3.8, 228.0], [3.9, 228.0], [4.0, 229.0], [4.1, 231.0], [4.2, 231.0], [4.3, 232.0], [4.4, 233.0], [4.5, 237.0], [4.6, 237.0], [4.7, 237.0], [4.8, 240.0], [4.9, 240.0], [5.0, 240.0], [5.1, 242.0], [5.2, 244.0], [5.3, 244.0], [5.4, 247.0], [5.5, 248.0], [5.6, 250.0], [5.7, 250.0], [5.8, 250.0], [5.9, 250.0], [6.0, 252.0], [6.1, 252.0], [6.2, 253.0], [6.3, 256.0], [6.4, 260.0], [6.5, 260.0], [6.6, 261.0], [6.7, 261.0], [6.8, 261.0], [6.9, 261.0], [7.0, 262.0], [7.1, 275.0], [7.2, 275.0], [7.3, 276.0], [7.4, 276.0], [7.5, 279.0], [7.6, 279.0], [7.7, 291.0], [7.8, 309.0], [7.9, 315.0], [8.0, 315.0], [8.1, 317.0], [8.2, 317.0], [8.3, 317.0], [8.4, 317.0], [8.5, 320.0], [8.6, 320.0], [8.7, 320.0], [8.8, 322.0], [8.9, 327.0], [9.0, 329.0], [9.1, 329.0], [9.2, 329.0], [9.3, 333.0], [9.4, 335.0], [9.5, 335.0], [9.6, 337.0], [9.7, 343.0], [9.8, 347.0], [9.9, 347.0], [10.0, 349.0], [10.1, 355.0], [10.2, 355.0], [10.3, 356.0], [10.4, 356.0], [10.5, 358.0], [10.6, 358.0], [10.7, 365.0], [10.8, 367.0], [10.9, 371.0], [11.0, 371.0], [11.1, 374.0], [11.2, 374.0], [11.3, 375.0], [11.4, 375.0], [11.5, 376.0], [11.6, 376.0], [11.7, 376.0], [11.8, 377.0], [11.9, 380.0], [12.0, 384.0], [12.1, 384.0], [12.2, 385.0], [12.3, 385.0], [12.4, 386.0], [12.5, 386.0], [12.6, 387.0], [12.7, 387.0], [12.8, 405.0], [12.9, 405.0], [13.0, 407.0], [13.1, 414.0], [13.2, 417.0], [13.3, 417.0], [13.4, 420.0], [13.5, 422.0], [13.6, 422.0], [13.7, 429.0], [13.8, 436.0], [13.9, 436.0], [14.0, 436.0], [14.1, 438.0], [14.2, 439.0], [14.3, 445.0], [14.4, 445.0], [14.5, 448.0], [14.6, 449.0], [14.7, 449.0], [14.8, 449.0], [14.9, 454.0], [15.0, 457.0], [15.1, 457.0], [15.2, 460.0], [15.3, 461.0], [15.4, 469.0], [15.5, 469.0], [15.6, 471.0], [15.7, 471.0], [15.8, 476.0], [15.9, 476.0], [16.0, 476.0], [16.1, 477.0], [16.2, 477.0], [16.3, 477.0], [16.4, 477.0], [16.5, 477.0], [16.6, 478.0], [16.7, 478.0], [16.8, 478.0], [16.9, 479.0], [17.0, 479.0], [17.1, 481.0], [17.2, 483.0], [17.3, 485.0], [17.4, 485.0], [17.5, 487.0], [17.6, 487.0], [17.7, 489.0], [17.8, 489.0], [17.9, 491.0], [18.0, 495.0], [18.1, 498.0], [18.2, 498.0], [18.3, 499.0], [18.4, 500.0], [18.5, 500.0], [18.6, 500.0], [18.7, 501.0], [18.8, 501.0], [18.9, 501.0], [19.0, 504.0], [19.1, 505.0], [19.2, 507.0], [19.3, 507.0], [19.4, 509.0], [19.5, 511.0], [19.6, 511.0], [19.7, 511.0], [19.8, 512.0], [19.9, 512.0], [20.0, 514.0], [20.1, 514.0], [20.2, 514.0], [20.3, 516.0], [20.4, 516.0], [20.5, 519.0], [20.6, 519.0], [20.7, 519.0], [20.8, 519.0], [20.9, 520.0], [21.0, 521.0], [21.1, 522.0], [21.2, 522.0], [21.3, 524.0], [21.4, 524.0], [21.5, 524.0], [21.6, 524.0], [21.7, 525.0], [21.8, 526.0], [21.9, 526.0], [22.0, 527.0], [22.1, 527.0], [22.2, 527.0], [22.3, 527.0], [22.4, 528.0], [22.5, 529.0], [22.6, 529.0], [22.7, 529.0], [22.8, 530.0], [22.9, 530.0], [23.0, 531.0], [23.1, 531.0], [23.2, 531.0], [23.3, 531.0], [23.4, 531.0], [23.5, 532.0], [23.6, 533.0], [23.7, 533.0], [23.8, 533.0], [23.9, 534.0], [24.0, 535.0], [24.1, 535.0], [24.2, 535.0], [24.3, 536.0], [24.4, 536.0], [24.5, 537.0], [24.6, 537.0], [24.7, 537.0], [24.8, 537.0], [24.9, 538.0], [25.0, 538.0], [25.1, 538.0], [25.2, 538.0], [25.3, 538.0], [25.4, 539.0], [25.5, 540.0], [25.6, 541.0], [25.7, 541.0], [25.8, 542.0], [25.9, 543.0], [26.0, 543.0], [26.1, 543.0], [26.2, 543.0], [26.3, 544.0], [26.4, 545.0], [26.5, 545.0], [26.6, 546.0], [26.7, 546.0], [26.8, 546.0], [26.9, 547.0], [27.0, 548.0], [27.1, 550.0], [27.2, 550.0], [27.3, 552.0], [27.4, 553.0], [27.5, 555.0], [27.6, 555.0], [27.7, 555.0], [27.8, 556.0], [27.9, 559.0], [28.0, 559.0], [28.1, 559.0], [28.2, 559.0], [28.3, 559.0], [28.4, 559.0], [28.5, 559.0], [28.6, 560.0], [28.7, 560.0], [28.8, 560.0], [28.9, 562.0], [29.0, 563.0], [29.1, 563.0], [29.2, 567.0], [29.3, 567.0], [29.4, 568.0], [29.5, 568.0], [29.6, 568.0], [29.7, 569.0], [29.8, 572.0], [29.9, 572.0], [30.0, 572.0], [30.1, 573.0], [30.2, 573.0], [30.3, 574.0], [30.4, 574.0], [30.5, 575.0], [30.6, 575.0], [30.7, 575.0], [30.8, 575.0], [30.9, 578.0], [31.0, 578.0], [31.1, 579.0], [31.2, 579.0], [31.3, 579.0], [31.4, 579.0], [31.5, 579.0], [31.6, 580.0], [31.7, 580.0], [31.8, 586.0], [31.9, 588.0], [32.0, 588.0], [32.1, 588.0], [32.2, 590.0], [32.3, 590.0], [32.4, 592.0], [32.5, 592.0], [32.6, 594.0], [32.7, 595.0], [32.8, 595.0], [32.9, 595.0], [33.0, 596.0], [33.1, 596.0], [33.2, 597.0], [33.3, 597.0], [33.4, 598.0], [33.5, 598.0], [33.6, 598.0], [33.7, 601.0], [33.8, 603.0], [33.9, 605.0], [34.0, 605.0], [34.1, 607.0], [34.2, 607.0], [34.3, 610.0], [34.4, 610.0], [34.5, 611.0], [34.6, 615.0], [34.7, 615.0], [34.8, 615.0], [34.9, 616.0], [35.0, 616.0], [35.1, 616.0], [35.2, 617.0], [35.3, 617.0], [35.4, 618.0], [35.5, 618.0], [35.6, 619.0], [35.7, 619.0], [35.8, 620.0], [35.9, 620.0], [36.0, 620.0], [36.1, 620.0], [36.2, 621.0], [36.3, 621.0], [36.4, 621.0], [36.5, 621.0], [36.6, 625.0], [36.7, 625.0], [36.8, 627.0], [36.9, 630.0], [37.0, 630.0], [37.1, 632.0], [37.2, 633.0], [37.3, 637.0], [37.4, 637.0], [37.5, 639.0], [37.6, 640.0], [37.7, 641.0], [37.8, 641.0], [37.9, 641.0], [38.0, 642.0], [38.1, 650.0], [38.2, 650.0], [38.3, 655.0], [38.4, 656.0], [38.5, 656.0], [38.6, 657.0], [38.7, 660.0], [38.8, 660.0], [38.9, 660.0], [39.0, 661.0], [39.1, 666.0], [39.2, 667.0], [39.3, 667.0], [39.4, 673.0], [39.5, 676.0], [39.6, 680.0], [39.7, 680.0], [39.8, 680.0], [39.9, 681.0], [40.0, 682.0], [40.1, 682.0], [40.2, 683.0], [40.3, 685.0], [40.4, 685.0], [40.5, 687.0], [40.6, 694.0], [40.7, 697.0], [40.8, 697.0], [40.9, 697.0], [41.0, 700.0], [41.1, 703.0], [41.2, 703.0], [41.3, 703.0], [41.4, 705.0], [41.5, 705.0], [41.6, 705.0], [41.7, 707.0], [41.8, 709.0], [41.9, 709.0], [42.0, 717.0], [42.1, 717.0], [42.2, 720.0], [42.3, 720.0], [42.4, 725.0], [42.5, 726.0], [42.6, 727.0], [42.7, 727.0], [42.8, 727.0], [42.9, 730.0], [43.0, 737.0], [43.1, 737.0], [43.2, 737.0], [43.3, 738.0], [43.4, 738.0], [43.5, 745.0], [43.6, 746.0], [43.7, 749.0], [43.8, 749.0], [43.9, 754.0], [44.0, 756.0], [44.1, 759.0], [44.2, 759.0], [44.3, 766.0], [44.4, 768.0], [44.5, 770.0], [44.6, 770.0], [44.7, 776.0], [44.8, 780.0], [44.9, 780.0], [45.0, 780.0], [45.1, 781.0], [45.2, 787.0], [45.3, 787.0], [45.4, 797.0], [45.5, 806.0], [45.6, 807.0], [45.7, 807.0], [45.8, 807.0], [45.9, 814.0], [46.0, 818.0], [46.1, 818.0], [46.2, 823.0], [46.3, 825.0], [46.4, 826.0], [46.5, 826.0], [46.6, 826.0], [46.7, 827.0], [46.8, 827.0], [46.9, 828.0], [47.0, 831.0], [47.1, 832.0], [47.2, 832.0], [47.3, 832.0], [47.4, 838.0], [47.5, 839.0], [47.6, 839.0], [47.7, 840.0], [47.8, 842.0], [47.9, 842.0], [48.0, 842.0], [48.1, 849.0], [48.2, 861.0], [48.3, 871.0], [48.4, 871.0], [48.5, 875.0], [48.6, 879.0], [48.7, 879.0], [48.8, 880.0], [48.9, 882.0], [49.0, 885.0], [49.1, 885.0], [49.2, 891.0], [49.3, 897.0], [49.4, 897.0], [49.5, 897.0], [49.6, 903.0], [49.7, 904.0], [49.8, 907.0], [49.9, 907.0], [50.0, 907.0], [50.1, 910.0], [50.2, 910.0], [50.3, 912.0], [50.4, 913.0], [50.5, 914.0], [50.6, 914.0], [50.7, 917.0], [50.8, 917.0], [50.9, 917.0], [51.0, 917.0], [51.1, 919.0], [51.2, 926.0], [51.3, 926.0], [51.4, 926.0], [51.5, 926.0], [51.6, 927.0], [51.7, 927.0], [51.8, 932.0], [51.9, 935.0], [52.0, 937.0], [52.1, 937.0], [52.2, 938.0], [52.3, 941.0], [52.4, 944.0], [52.5, 944.0], [52.6, 948.0], [52.7, 956.0], [52.8, 958.0], [52.9, 958.0], [53.0, 962.0], [53.1, 964.0], [53.2, 965.0], [53.3, 965.0], [53.4, 966.0], [53.5, 968.0], [53.6, 968.0], [53.7, 969.0], [53.8, 970.0], [53.9, 973.0], [54.0, 973.0], [54.1, 973.0], [54.2, 979.0], [54.3, 980.0], [54.4, 980.0], [54.5, 983.0], [54.6, 989.0], [54.7, 996.0], [54.8, 996.0], [54.9, 999.0], [55.0, 1004.0], [55.1, 1004.0], [55.2, 1011.0], [55.3, 1013.0], [55.4, 1016.0], [55.5, 1016.0], [55.6, 1019.0], [55.7, 1024.0], [55.8, 1024.0], [55.9, 1024.0], [56.0, 1031.0], [56.1, 1033.0], [56.2, 1035.0], [56.3, 1035.0], [56.4, 1037.0], [56.5, 1040.0], [56.6, 1041.0], [56.7, 1041.0], [56.8, 1042.0], [56.9, 1042.0], [57.0, 1042.0], [57.1, 1042.0], [57.2, 1043.0], [57.3, 1043.0], [57.4, 1043.0], [57.5, 1047.0], [57.6, 1049.0], [57.7, 1051.0], [57.8, 1051.0], [57.9, 1053.0], [58.0, 1053.0], [58.1, 1056.0], [58.2, 1056.0], [58.3, 1057.0], [58.4, 1058.0], [58.5, 1058.0], [58.6, 1059.0], [58.7, 1062.0], [58.8, 1062.0], [58.9, 1062.0], [59.0, 1062.0], [59.1, 1063.0], [59.2, 1063.0], [59.3, 1063.0], [59.4, 1064.0], [59.5, 1064.0], [59.6, 1064.0], [59.7, 1064.0], [59.8, 1065.0], [59.9, 1065.0], [60.0, 1067.0], [60.1, 1067.0], [60.2, 1069.0], [60.3, 1070.0], [60.4, 1070.0], [60.5, 1071.0], [60.6, 1072.0], [60.7, 1073.0], [60.8, 1073.0], [60.9, 1073.0], [61.0, 1074.0], [61.1, 1076.0], [61.2, 1076.0], [61.3, 1076.0], [61.4, 1076.0], [61.5, 1078.0], [61.6, 1078.0], [61.7, 1081.0], [61.8, 1082.0], [61.9, 1082.0], [62.0, 1083.0], [62.1, 1083.0], [62.2, 1083.0], [62.3, 1083.0], [62.4, 1085.0], [62.5, 1086.0], [62.6, 1087.0], [62.7, 1087.0], [62.8, 1087.0], [62.9, 1089.0], [63.0, 1089.0], [63.1, 1089.0], [63.2, 1089.0], [63.3, 1090.0], [63.4, 1090.0], [63.5, 1091.0], [63.6, 1092.0], [63.7, 1094.0], [63.8, 1094.0], [63.9, 1096.0], [64.0, 1096.0], [64.1, 1098.0], [64.2, 1098.0], [64.3, 1098.0], [64.4, 1099.0], [64.5, 1099.0], [64.6, 1099.0], [64.7, 1100.0], [64.8, 1100.0], [64.9, 1100.0], [65.0, 1100.0], [65.1, 1103.0], [65.2, 1104.0], [65.3, 1104.0], [65.4, 1106.0], [65.5, 1106.0], [65.6, 1106.0], [65.7, 1106.0], [65.8, 1106.0], [65.9, 1107.0], [66.0, 1107.0], [66.1, 1107.0], [66.2, 1108.0], [66.3, 1109.0], [66.4, 1112.0], [66.5, 1112.0], [66.6, 1112.0], [66.7, 1114.0], [66.8, 1114.0], [66.9, 1114.0], [67.0, 1116.0], [67.1, 1116.0], [67.2, 1116.0], [67.3, 1116.0], [67.4, 1116.0], [67.5, 1116.0], [67.6, 1116.0], [67.7, 1117.0], [67.8, 1118.0], [67.9, 1120.0], [68.0, 1120.0], [68.1, 1120.0], [68.2, 1122.0], [68.3, 1122.0], [68.4, 1122.0], [68.5, 1122.0], [68.6, 1124.0], [68.7, 1124.0], [68.8, 1125.0], [68.9, 1126.0], [69.0, 1126.0], [69.1, 1126.0], [69.2, 1126.0], [69.3, 1127.0], [69.4, 1128.0], [69.5, 1128.0], [69.6, 1128.0], [69.7, 1129.0], [69.8, 1129.0], [69.9, 1129.0], [70.0, 1129.0], [70.1, 1132.0], [70.2, 1132.0], [70.3, 1132.0], [70.4, 1133.0], [70.5, 1133.0], [70.6, 1133.0], [70.7, 1133.0], [70.8, 1134.0], [70.9, 1134.0], [71.0, 1134.0], [71.1, 1134.0], [71.2, 1135.0], [71.3, 1135.0], [71.4, 1135.0], [71.5, 1136.0], [71.6, 1136.0], [71.7, 1136.0], [71.8, 1136.0], [71.9, 1136.0], [72.0, 1137.0], [72.1, 1137.0], [72.2, 1137.0], [72.3, 1138.0], [72.4, 1139.0], [72.5, 1139.0], [72.6, 1140.0], [72.7, 1140.0], [72.8, 1141.0], [72.9, 1141.0], [73.0, 1141.0], [73.1, 1141.0], [73.2, 1141.0], [73.3, 1141.0], [73.4, 1142.0], [73.5, 1142.0], [73.6, 1142.0], [73.7, 1143.0], [73.8, 1144.0], [73.9, 1145.0], [74.0, 1145.0], [74.1, 1145.0], [74.2, 1146.0], [74.3, 1147.0], [74.4, 1147.0], [74.5, 1149.0], [74.6, 1151.0], [74.7, 1151.0], [74.8, 1151.0], [74.9, 1152.0], [75.0, 1152.0], [75.1, 1152.0], [75.2, 1152.0], [75.3, 1154.0], [75.4, 1154.0], [75.5, 1154.0], [75.6, 1154.0], [75.7, 1156.0], [75.8, 1156.0], [75.9, 1156.0], [76.0, 1157.0], [76.1, 1158.0], [76.2, 1158.0], [76.3, 1158.0], [76.4, 1159.0], [76.5, 1159.0], [76.6, 1159.0], [76.7, 1159.0], [76.8, 1160.0], [76.9, 1160.0], [77.0, 1160.0], [77.1, 1162.0], [77.2, 1164.0], [77.3, 1164.0], [77.4, 1164.0], [77.5, 1164.0], [77.6, 1165.0], [77.7, 1165.0], [77.8, 1165.0], [77.9, 1167.0], [78.0, 1167.0], [78.1, 1169.0], [78.2, 1169.0], [78.3, 1169.0], [78.4, 1170.0], [78.5, 1170.0], [78.6, 1170.0], [78.7, 1172.0], [78.8, 1173.0], [78.9, 1173.0], [79.0, 1175.0], [79.1, 1175.0], [79.2, 1175.0], [79.3, 1175.0], [79.4, 1177.0], [79.5, 1177.0], [79.6, 1177.0], [79.7, 1177.0], [79.8, 1178.0], [79.9, 1178.0], [80.0, 1178.0], [80.1, 1178.0], [80.2, 1178.0], [80.3, 1180.0], [80.4, 1180.0], [80.5, 1183.0], [80.6, 1183.0], [80.7, 1183.0], [80.8, 1183.0], [80.9, 1183.0], [81.0, 1184.0], [81.1, 1184.0], [81.2, 1184.0], [81.3, 1184.0], [81.4, 1185.0], [81.5, 1187.0], [81.6, 1187.0], [81.7, 1187.0], [81.8, 1192.0], [81.9, 1192.0], [82.0, 1192.0], [82.1, 1194.0], [82.2, 1195.0], [82.3, 1195.0], [82.4, 1196.0], [82.5, 1196.0], [82.6, 1199.0], [82.7, 1199.0], [82.8, 1203.0], [82.9, 1206.0], [83.0, 1206.0], [83.1, 1206.0], [83.2, 1207.0], [83.3, 1208.0], [83.4, 1208.0], [83.5, 1208.0], [83.6, 1208.0], [83.7, 1209.0], [83.8, 1209.0], [83.9, 1209.0], [84.0, 1210.0], [84.1, 1212.0], [84.2, 1212.0], [84.3, 1213.0], [84.4, 1213.0], [84.5, 1215.0], [84.6, 1215.0], [84.7, 1215.0], [84.8, 1217.0], [84.9, 1218.0], [85.0, 1218.0], [85.1, 1218.0], [85.2, 1219.0], [85.3, 1219.0], [85.4, 1219.0], [85.5, 1219.0], [85.6, 1220.0], [85.7, 1220.0], [85.8, 1225.0], [85.9, 1226.0], [86.0, 1229.0], [86.1, 1229.0], [86.2, 1231.0], [86.3, 1232.0], [86.4, 1232.0], [86.5, 1232.0], [86.6, 1234.0], [86.7, 1238.0], [86.8, 1238.0], [86.9, 1238.0], [87.0, 1243.0], [87.1, 1244.0], [87.2, 1244.0], [87.3, 1246.0], [87.4, 1253.0], [87.5, 1255.0], [87.6, 1255.0], [87.7, 1259.0], [87.8, 1260.0], [87.9, 1265.0], [88.0, 1265.0], [88.1, 1265.0], [88.2, 1267.0], [88.3, 1267.0], [88.4, 1267.0], [88.5, 1267.0], [88.6, 1268.0], [88.7, 1268.0], [88.8, 1273.0], [88.9, 1274.0], [89.0, 1275.0], [89.1, 1275.0], [89.2, 1275.0], [89.3, 1275.0], [89.4, 1276.0], [89.5, 1276.0], [89.6, 1278.0], [89.7, 1279.0], [89.8, 1280.0], [89.9, 1280.0], [90.0, 1284.0], [90.1, 1285.0], [90.2, 1285.0], [90.3, 1285.0], [90.4, 1286.0], [90.5, 1297.0], [90.6, 1297.0], [90.7, 1298.0], [90.8, 1299.0], [90.9, 1301.0], [91.0, 1301.0], [91.1, 1304.0], [91.2, 1310.0], [91.3, 1310.0], [91.4, 1310.0], [91.5, 1311.0], [91.6, 1313.0], [91.7, 1313.0], [91.8, 1313.0], [91.9, 1316.0], [92.0, 1317.0], [92.1, 1317.0], [92.2, 1328.0], [92.3, 1329.0], [92.4, 1331.0], [92.5, 1331.0], [92.6, 1331.0], [92.7, 1333.0], [92.8, 1333.0], [92.9, 1333.0], [93.0, 1333.0], [93.1, 1340.0], [93.2, 1354.0], [93.3, 1354.0], [93.4, 1364.0], [93.5, 1366.0], [93.6, 1366.0], [93.7, 1369.0], [93.8, 1371.0], [93.9, 1371.0], [94.0, 1371.0], [94.1, 1373.0], [94.2, 1376.0], [94.3, 1379.0], [94.4, 1379.0], [94.5, 1388.0], [94.6, 1395.0], [94.7, 1405.0], [94.8, 1405.0], [94.9, 1405.0], [95.0, 1412.0], [95.1, 1412.0], [95.2, 1413.0], [95.3, 1413.0], [95.4, 1420.0], [95.5, 1420.0], [95.6, 1423.0], [95.7, 1431.0], [95.8, 1432.0], [95.9, 1432.0], [96.0, 1438.0], [96.1, 1465.0], [96.2, 1492.0], [96.3, 1492.0], [96.4, 1501.0], [96.5, 1505.0], [96.6, 1510.0], [96.7, 1510.0], [96.8, 1513.0], [96.9, 1520.0], [97.0, 1520.0], [97.1, 1524.0], [97.2, 1532.0], [97.3, 1598.0], [97.4, 1598.0], [97.5, 1630.0], [97.6, 1663.0], [97.7, 1667.0], [97.8, 1667.0], [97.9, 1726.0], [98.0, 1781.0], [98.1, 1841.0], [98.2, 1841.0], [98.3, 1863.0], [98.4, 1960.0], [98.5, 1960.0], [98.6, 1961.0], [98.7, 2018.0], [98.8, 2044.0], [98.9, 2044.0], [99.0, 2046.0], [99.1, 2078.0], [99.2, 2203.0], [99.3, 2203.0], [99.4, 2314.0], [99.5, 2418.0], [99.6, 2579.0], [99.7, 2579.0], [99.8, 2589.0], [99.9, 2802.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 133.0, "series": [{"data": [[600.0, 54.0], [700.0, 33.0], [800.0, 30.0], [900.0, 40.0], [1000.0, 71.0], [1100.0, 133.0], [1200.0, 60.0], [1300.0, 28.0], [1400.0, 12.0], [1500.0, 8.0], [100.0, 20.0], [1600.0, 3.0], [1700.0, 2.0], [1800.0, 2.0], [1900.0, 2.0], [2000.0, 4.0], [2300.0, 1.0], [2200.0, 1.0], [2400.0, 1.0], [2500.0, 2.0], [2800.0, 1.0], [200.0, 37.0], [300.0, 37.0], [400.0, 41.0], [500.0, 112.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 27.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 571.0, "series": [{"data": [[0.0, 137.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 571.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 27.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.601769911504423, "minX": 1.60263282E12, "maxY": 10.0, "series": [{"data": [[1.60263282E12, 10.0], [1.60263288E12, 9.601769911504423]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263288E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 256.0, "minX": 1.0, "maxY": 1412.0, "series": [{"data": [[8.0, 477.0], [4.0, 460.0], [2.0, 1065.0], [1.0, 1051.0], [9.0, 262.0], [10.0, 868.3939393939398], [5.0, 1412.0], [6.0, 256.0], [3.0, 477.0], [7.0, 501.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 865.8707482993202]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 861.8333333333334, "minX": 1.60263282E12, "maxY": 1518424.4166666667, "series": [{"data": [[1.60263282E12, 1518424.4166666667], [1.60263288E12, 218420.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263282E12, 4808.2], [1.60263288E12, 861.8333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263288E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 727.8938053097344, "minX": 1.60263282E12, "maxY": 890.9372990353696, "series": [{"data": [[1.60263282E12, 890.9372990353696], [1.60263288E12, 727.8938053097344]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263288E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 726.8672566371682, "minX": 1.60263282E12, "maxY": 889.7443729903534, "series": [{"data": [[1.60263282E12, 889.7443729903534], [1.60263288E12, 726.8672566371682]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263288E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.07964601769911503, "minX": 1.60263282E12, "maxY": 0.15273311897106112, "series": [{"data": [[1.60263282E12, 0.15273311897106112], [1.60263288E12, 0.07964601769911503]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263288E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 128.0, "minX": 1.60263282E12, "maxY": 2802.0, "series": [{"data": [[1.60263282E12, 2802.0], [1.60263288E12, 2203.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263282E12, 143.21399970293044], [1.60263288E12, 150.3119996738434]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263282E12, 144.50310017824174], [1.60263288E12, 151.54320013046265]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263282E12, 143.83699985146524], [1.60263288E12, 150.9959998369217]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263282E12, 128.0], [1.60263288E12, 150.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263282E12, 997.5], [1.60263288E12, 687.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263288E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 436.0, "minX": 2.0, "maxY": 1144.0, "series": [{"data": [[2.0, 1033.5], [8.0, 1132.5], [9.0, 1144.0], [10.0, 1126.0], [11.0, 1093.5], [12.0, 767.0], [13.0, 749.5], [14.0, 695.5], [15.0, 697.0], [17.0, 577.5], [18.0, 454.5], [19.0, 559.0], [5.0, 640.0], [21.0, 436.0], [22.0, 525.0], [7.0, 1126.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 435.0, "minX": 2.0, "maxY": 1142.0, "series": [{"data": [[2.0, 1030.5], [8.0, 1131.5], [9.0, 1142.0], [10.0, 1125.0], [11.0, 1091.5], [12.0, 766.5], [13.0, 748.5], [14.0, 695.5], [15.0, 696.0], [17.0, 577.0], [18.0, 454.5], [19.0, 559.0], [5.0, 639.0], [21.0, 435.0], [22.0, 525.0], [7.0, 1125.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60263282E12, "maxY": 10.533333333333333, "series": [{"data": [[1.60263282E12, 10.533333333333333], [1.60263288E12, 1.7166666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263288E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.8833333333333333, "minX": 1.60263282E12, "maxY": 10.366666666666667, "series": [{"data": [[1.60263282E12, 10.366666666666667], [1.60263288E12, 1.8833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263288E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.8833333333333333, "minX": 1.60263282E12, "maxY": 10.366666666666667, "series": [{"data": [[1.60263282E12, 10.366666666666667], [1.60263288E12, 1.8833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263288E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.8833333333333333, "minX": 1.60263282E12, "maxY": 10.366666666666667, "series": [{"data": [[1.60263282E12, 10.366666666666667], [1.60263288E12, 1.8833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263288E12, "title": "Total Transactions Per Second"}},
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

