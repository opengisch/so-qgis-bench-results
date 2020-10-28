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
        data: {"result": {"minY": 146.0, "minX": 0.0, "maxY": 2967.0, "series": [{"data": [[0.0, 146.0], [0.1, 146.0], [0.2, 147.0], [0.3, 156.0], [0.4, 156.0], [0.5, 157.0], [0.6, 162.0], [0.7, 164.0], [0.8, 164.0], [0.9, 165.0], [1.0, 165.0], [1.1, 167.0], [1.2, 167.0], [1.3, 168.0], [1.4, 169.0], [1.5, 173.0], [1.6, 173.0], [1.7, 174.0], [1.8, 175.0], [1.9, 175.0], [2.0, 190.0], [2.1, 194.0], [2.2, 194.0], [2.3, 194.0], [2.4, 203.0], [2.5, 214.0], [2.6, 222.0], [2.7, 222.0], [2.8, 232.0], [2.9, 233.0], [3.0, 234.0], [3.1, 234.0], [3.2, 236.0], [3.3, 237.0], [3.4, 237.0], [3.5, 238.0], [3.6, 239.0], [3.7, 247.0], [3.8, 247.0], [3.9, 249.0], [4.0, 250.0], [4.1, 250.0], [4.2, 250.0], [4.3, 251.0], [4.4, 251.0], [4.5, 252.0], [4.6, 252.0], [4.7, 257.0], [4.8, 259.0], [4.9, 259.0], [5.0, 259.0], [5.1, 259.0], [5.2, 269.0], [5.3, 269.0], [5.4, 280.0], [5.5, 285.0], [5.6, 286.0], [5.7, 286.0], [5.8, 286.0], [5.9, 287.0], [6.0, 291.0], [6.1, 291.0], [6.2, 292.0], [6.3, 292.0], [6.4, 295.0], [6.5, 295.0], [6.6, 297.0], [6.7, 298.0], [6.8, 298.0], [6.9, 299.0], [7.0, 300.0], [7.1, 300.0], [7.2, 300.0], [7.3, 300.0], [7.4, 303.0], [7.5, 303.0], [7.6, 303.0], [7.7, 306.0], [7.8, 315.0], [7.9, 315.0], [8.0, 315.0], [8.1, 318.0], [8.2, 322.0], [8.3, 323.0], [8.4, 323.0], [8.5, 327.0], [8.6, 329.0], [8.7, 329.0], [8.8, 331.0], [8.9, 334.0], [9.0, 334.0], [9.1, 334.0], [9.2, 339.0], [9.3, 340.0], [9.4, 342.0], [9.5, 342.0], [9.6, 344.0], [9.7, 344.0], [9.8, 346.0], [9.9, 346.0], [10.0, 357.0], [10.1, 367.0], [10.2, 367.0], [10.3, 368.0], [10.4, 368.0], [10.5, 369.0], [10.6, 369.0], [10.7, 376.0], [10.8, 378.0], [10.9, 384.0], [11.0, 384.0], [11.1, 388.0], [11.2, 390.0], [11.3, 391.0], [11.4, 391.0], [11.5, 393.0], [11.6, 393.0], [11.7, 393.0], [11.8, 394.0], [11.9, 397.0], [12.0, 397.0], [12.1, 397.0], [12.2, 401.0], [12.3, 401.0], [12.4, 402.0], [12.5, 402.0], [12.6, 402.0], [12.7, 404.0], [12.8, 407.0], [12.9, 407.0], [13.0, 413.0], [13.1, 414.0], [13.2, 415.0], [13.3, 415.0], [13.4, 415.0], [13.5, 418.0], [13.6, 418.0], [13.7, 421.0], [13.8, 427.0], [13.9, 428.0], [14.0, 428.0], [14.1, 428.0], [14.2, 434.0], [14.3, 439.0], [14.4, 439.0], [14.5, 441.0], [14.6, 441.0], [14.7, 443.0], [14.8, 443.0], [14.9, 448.0], [15.0, 449.0], [15.1, 449.0], [15.2, 452.0], [15.3, 456.0], [15.4, 457.0], [15.5, 457.0], [15.6, 457.0], [15.7, 463.0], [15.8, 463.0], [15.9, 463.0], [16.0, 463.0], [16.1, 466.0], [16.2, 466.0], [16.3, 466.0], [16.4, 467.0], [16.5, 468.0], [16.6, 469.0], [16.7, 469.0], [16.8, 469.0], [16.9, 473.0], [17.0, 473.0], [17.1, 474.0], [17.2, 474.0], [17.3, 474.0], [17.4, 474.0], [17.5, 476.0], [17.6, 476.0], [17.7, 482.0], [17.8, 482.0], [17.9, 483.0], [18.0, 483.0], [18.1, 483.0], [18.2, 483.0], [18.3, 484.0], [18.4, 484.0], [18.5, 484.0], [18.6, 487.0], [18.7, 488.0], [18.8, 489.0], [18.9, 489.0], [19.0, 497.0], [19.1, 498.0], [19.2, 502.0], [19.3, 502.0], [19.4, 507.0], [19.5, 508.0], [19.6, 512.0], [19.7, 512.0], [19.8, 514.0], [19.9, 517.0], [20.0, 523.0], [20.1, 523.0], [20.2, 525.0], [20.3, 526.0], [20.4, 526.0], [20.5, 526.0], [20.6, 528.0], [20.7, 528.0], [20.8, 528.0], [20.9, 529.0], [21.0, 529.0], [21.1, 531.0], [21.2, 531.0], [21.3, 532.0], [21.4, 532.0], [21.5, 533.0], [21.6, 533.0], [21.7, 533.0], [21.8, 536.0], [21.9, 536.0], [22.0, 536.0], [22.1, 536.0], [22.2, 537.0], [22.3, 537.0], [22.4, 537.0], [22.5, 537.0], [22.6, 541.0], [22.7, 541.0], [22.8, 542.0], [22.9, 542.0], [23.0, 543.0], [23.1, 543.0], [23.2, 544.0], [23.3, 547.0], [23.4, 547.0], [23.5, 548.0], [23.6, 551.0], [23.7, 554.0], [23.8, 554.0], [23.9, 554.0], [24.0, 555.0], [24.1, 557.0], [24.2, 557.0], [24.3, 558.0], [24.4, 559.0], [24.5, 559.0], [24.6, 559.0], [24.7, 559.0], [24.8, 561.0], [24.9, 561.0], [25.0, 561.0], [25.1, 561.0], [25.2, 561.0], [25.3, 561.0], [25.4, 562.0], [25.5, 562.0], [25.6, 562.0], [25.7, 562.0], [25.8, 564.0], [25.9, 564.0], [26.0, 565.0], [26.1, 565.0], [26.2, 566.0], [26.3, 566.0], [26.4, 568.0], [26.5, 568.0], [26.6, 568.0], [26.7, 569.0], [26.8, 569.0], [26.9, 571.0], [27.0, 571.0], [27.1, 572.0], [27.2, 572.0], [27.3, 573.0], [27.4, 574.0], [27.5, 575.0], [27.6, 575.0], [27.7, 576.0], [27.8, 577.0], [27.9, 577.0], [28.0, 577.0], [28.1, 578.0], [28.2, 578.0], [28.3, 578.0], [28.4, 578.0], [28.5, 578.0], [28.6, 578.0], [28.7, 578.0], [28.8, 579.0], [28.9, 579.0], [29.0, 580.0], [29.1, 580.0], [29.2, 580.0], [29.3, 582.0], [29.4, 582.0], [29.5, 582.0], [29.6, 582.0], [29.7, 584.0], [29.8, 584.0], [29.9, 584.0], [30.0, 586.0], [30.1, 586.0], [30.2, 586.0], [30.3, 587.0], [30.4, 589.0], [30.5, 589.0], [30.6, 589.0], [30.7, 593.0], [30.8, 593.0], [30.9, 594.0], [31.0, 594.0], [31.1, 594.0], [31.2, 596.0], [31.3, 597.0], [31.4, 597.0], [31.5, 597.0], [31.6, 599.0], [31.7, 599.0], [31.8, 599.0], [31.9, 599.0], [32.0, 599.0], [32.1, 599.0], [32.2, 599.0], [32.3, 599.0], [32.4, 600.0], [32.5, 600.0], [32.6, 601.0], [32.7, 601.0], [32.8, 603.0], [32.9, 603.0], [33.0, 604.0], [33.1, 607.0], [33.2, 607.0], [33.3, 607.0], [33.4, 609.0], [33.5, 609.0], [33.6, 609.0], [33.7, 610.0], [33.8, 610.0], [33.9, 612.0], [34.0, 612.0], [34.1, 612.0], [34.2, 614.0], [34.3, 614.0], [34.4, 614.0], [34.5, 615.0], [34.6, 616.0], [34.7, 616.0], [34.8, 616.0], [34.9, 619.0], [35.0, 621.0], [35.1, 621.0], [35.2, 623.0], [35.3, 624.0], [35.4, 624.0], [35.5, 624.0], [35.6, 625.0], [35.7, 629.0], [35.8, 630.0], [35.9, 630.0], [36.0, 631.0], [36.1, 632.0], [36.2, 632.0], [36.3, 632.0], [36.4, 635.0], [36.5, 635.0], [36.6, 636.0], [36.7, 636.0], [36.8, 642.0], [36.9, 643.0], [37.0, 643.0], [37.1, 643.0], [37.2, 645.0], [37.3, 645.0], [37.4, 645.0], [37.5, 646.0], [37.6, 648.0], [37.7, 649.0], [37.8, 649.0], [37.9, 649.0], [38.0, 654.0], [38.1, 656.0], [38.2, 656.0], [38.3, 657.0], [38.4, 659.0], [38.5, 659.0], [38.6, 659.0], [38.7, 660.0], [38.8, 661.0], [38.9, 661.0], [39.0, 664.0], [39.1, 664.0], [39.2, 667.0], [39.3, 667.0], [39.4, 668.0], [39.5, 671.0], [39.6, 675.0], [39.7, 675.0], [39.8, 676.0], [39.9, 677.0], [40.0, 678.0], [40.1, 678.0], [40.2, 679.0], [40.3, 681.0], [40.4, 681.0], [40.5, 682.0], [40.6, 683.0], [40.7, 685.0], [40.8, 685.0], [40.9, 686.0], [41.0, 688.0], [41.1, 694.0], [41.2, 694.0], [41.3, 699.0], [41.4, 701.0], [41.5, 703.0], [41.6, 703.0], [41.7, 707.0], [41.8, 707.0], [41.9, 707.0], [42.0, 709.0], [42.1, 711.0], [42.2, 711.0], [42.3, 711.0], [42.4, 715.0], [42.5, 717.0], [42.6, 721.0], [42.7, 721.0], [42.8, 725.0], [42.9, 737.0], [43.0, 739.0], [43.1, 739.0], [43.2, 744.0], [43.3, 746.0], [43.4, 746.0], [43.5, 748.0], [43.6, 749.0], [43.7, 754.0], [43.8, 754.0], [43.9, 756.0], [44.0, 759.0], [44.1, 761.0], [44.2, 761.0], [44.3, 763.0], [44.4, 763.0], [44.5, 767.0], [44.6, 767.0], [44.7, 775.0], [44.8, 775.0], [44.9, 775.0], [45.0, 775.0], [45.1, 781.0], [45.2, 782.0], [45.3, 782.0], [45.4, 784.0], [45.5, 785.0], [45.6, 788.0], [45.7, 788.0], [45.8, 790.0], [45.9, 792.0], [46.0, 796.0], [46.1, 796.0], [46.2, 797.0], [46.3, 801.0], [46.4, 801.0], [46.5, 801.0], [46.6, 805.0], [46.7, 808.0], [46.8, 808.0], [46.9, 813.0], [47.0, 819.0], [47.1, 822.0], [47.2, 822.0], [47.3, 825.0], [47.4, 828.0], [47.5, 830.0], [47.6, 830.0], [47.7, 838.0], [47.8, 838.0], [47.9, 839.0], [48.0, 839.0], [48.1, 858.0], [48.2, 861.0], [48.3, 862.0], [48.4, 862.0], [48.5, 862.0], [48.6, 865.0], [48.7, 865.0], [48.8, 865.0], [48.9, 867.0], [49.0, 869.0], [49.1, 869.0], [49.2, 870.0], [49.3, 872.0], [49.4, 876.0], [49.5, 876.0], [49.6, 876.0], [49.7, 878.0], [49.8, 879.0], [49.9, 879.0], [50.0, 882.0], [50.1, 884.0], [50.2, 884.0], [50.3, 886.0], [50.4, 892.0], [50.5, 893.0], [50.6, 893.0], [50.7, 895.0], [50.8, 900.0], [50.9, 901.0], [51.0, 901.0], [51.1, 903.0], [51.2, 905.0], [51.3, 906.0], [51.4, 906.0], [51.5, 907.0], [51.6, 908.0], [51.7, 908.0], [51.8, 909.0], [51.9, 912.0], [52.0, 913.0], [52.1, 913.0], [52.2, 913.0], [52.3, 915.0], [52.4, 919.0], [52.5, 919.0], [52.6, 919.0], [52.7, 923.0], [52.8, 930.0], [52.9, 930.0], [53.0, 932.0], [53.1, 932.0], [53.2, 933.0], [53.3, 933.0], [53.4, 934.0], [53.5, 935.0], [53.6, 935.0], [53.7, 935.0], [53.8, 944.0], [53.9, 947.0], [54.0, 947.0], [54.1, 947.0], [54.2, 948.0], [54.3, 951.0], [54.4, 951.0], [54.5, 954.0], [54.6, 955.0], [54.7, 957.0], [54.8, 957.0], [54.9, 961.0], [55.0, 965.0], [55.1, 965.0], [55.2, 967.0], [55.3, 969.0], [55.4, 972.0], [55.5, 972.0], [55.6, 977.0], [55.7, 983.0], [55.8, 987.0], [55.9, 987.0], [56.0, 998.0], [56.1, 1000.0], [56.2, 1007.0], [56.3, 1007.0], [56.4, 1010.0], [56.5, 1017.0], [56.6, 1018.0], [56.7, 1018.0], [56.8, 1019.0], [56.9, 1020.0], [57.0, 1020.0], [57.1, 1022.0], [57.2, 1022.0], [57.3, 1025.0], [57.4, 1025.0], [57.5, 1025.0], [57.6, 1025.0], [57.7, 1030.0], [57.8, 1030.0], [57.9, 1030.0], [58.0, 1033.0], [58.1, 1034.0], [58.2, 1034.0], [58.3, 1039.0], [58.4, 1049.0], [58.5, 1049.0], [58.6, 1051.0], [58.7, 1058.0], [58.8, 1058.0], [58.9, 1058.0], [59.0, 1059.0], [59.1, 1061.0], [59.2, 1063.0], [59.3, 1063.0], [59.4, 1064.0], [59.5, 1064.0], [59.6, 1064.0], [59.7, 1064.0], [59.8, 1065.0], [59.9, 1067.0], [60.0, 1067.0], [60.1, 1067.0], [60.2, 1069.0], [60.3, 1076.0], [60.4, 1076.0], [60.5, 1079.0], [60.6, 1080.0], [60.7, 1082.0], [60.8, 1082.0], [60.9, 1082.0], [61.0, 1082.0], [61.1, 1083.0], [61.2, 1083.0], [61.3, 1084.0], [61.4, 1084.0], [61.5, 1084.0], [61.6, 1084.0], [61.7, 1085.0], [61.8, 1085.0], [61.9, 1085.0], [62.0, 1086.0], [62.1, 1086.0], [62.2, 1087.0], [62.3, 1087.0], [62.4, 1088.0], [62.5, 1091.0], [62.6, 1091.0], [62.7, 1091.0], [62.8, 1093.0], [62.9, 1094.0], [63.0, 1095.0], [63.1, 1095.0], [63.2, 1096.0], [63.3, 1096.0], [63.4, 1096.0], [63.5, 1098.0], [63.6, 1101.0], [63.7, 1101.0], [63.8, 1101.0], [63.9, 1102.0], [64.0, 1103.0], [64.1, 1104.0], [64.2, 1104.0], [64.3, 1107.0], [64.4, 1108.0], [64.5, 1110.0], [64.6, 1110.0], [64.7, 1111.0], [64.8, 1111.0], [64.9, 1111.0], [65.0, 1111.0], [65.1, 1112.0], [65.2, 1112.0], [65.3, 1112.0], [65.4, 1113.0], [65.5, 1114.0], [65.6, 1114.0], [65.7, 1114.0], [65.8, 1115.0], [65.9, 1115.0], [66.0, 1116.0], [66.1, 1116.0], [66.2, 1117.0], [66.3, 1117.0], [66.4, 1118.0], [66.5, 1118.0], [66.6, 1120.0], [66.7, 1120.0], [66.8, 1120.0], [66.9, 1120.0], [67.0, 1121.0], [67.1, 1122.0], [67.2, 1122.0], [67.3, 1123.0], [67.4, 1123.0], [67.5, 1124.0], [67.6, 1124.0], [67.7, 1124.0], [67.8, 1124.0], [67.9, 1125.0], [68.0, 1125.0], [68.1, 1126.0], [68.2, 1127.0], [68.3, 1127.0], [68.4, 1127.0], [68.5, 1127.0], [68.6, 1128.0], [68.7, 1128.0], [68.8, 1129.0], [68.9, 1132.0], [69.0, 1133.0], [69.1, 1133.0], [69.2, 1133.0], [69.3, 1133.0], [69.4, 1134.0], [69.5, 1134.0], [69.6, 1136.0], [69.7, 1136.0], [69.8, 1137.0], [69.9, 1137.0], [70.0, 1137.0], [70.1, 1137.0], [70.2, 1137.0], [70.3, 1138.0], [70.4, 1138.0], [70.5, 1138.0], [70.6, 1138.0], [70.7, 1138.0], [70.8, 1139.0], [70.9, 1141.0], [71.0, 1141.0], [71.1, 1141.0], [71.2, 1141.0], [71.3, 1143.0], [71.4, 1143.0], [71.5, 1144.0], [71.6, 1144.0], [71.7, 1144.0], [71.8, 1145.0], [71.9, 1145.0], [72.0, 1145.0], [72.1, 1145.0], [72.2, 1147.0], [72.3, 1147.0], [72.4, 1149.0], [72.5, 1149.0], [72.6, 1149.0], [72.7, 1149.0], [72.8, 1149.0], [72.9, 1149.0], [73.0, 1149.0], [73.1, 1151.0], [73.2, 1151.0], [73.3, 1151.0], [73.4, 1151.0], [73.5, 1151.0], [73.6, 1151.0], [73.7, 1151.0], [73.8, 1151.0], [73.9, 1152.0], [74.0, 1152.0], [74.1, 1152.0], [74.2, 1152.0], [74.3, 1153.0], [74.4, 1153.0], [74.5, 1153.0], [74.6, 1155.0], [74.7, 1156.0], [74.8, 1156.0], [74.9, 1157.0], [75.0, 1157.0], [75.1, 1157.0], [75.2, 1158.0], [75.3, 1158.0], [75.4, 1160.0], [75.5, 1160.0], [75.6, 1162.0], [75.7, 1162.0], [75.8, 1162.0], [75.9, 1162.0], [76.0, 1163.0], [76.1, 1164.0], [76.2, 1165.0], [76.3, 1165.0], [76.4, 1165.0], [76.5, 1166.0], [76.6, 1166.0], [76.7, 1166.0], [76.8, 1167.0], [76.9, 1167.0], [77.0, 1167.0], [77.1, 1168.0], [77.2, 1169.0], [77.3, 1170.0], [77.4, 1170.0], [77.5, 1171.0], [77.6, 1171.0], [77.7, 1173.0], [77.8, 1173.0], [77.9, 1174.0], [78.0, 1174.0], [78.1, 1177.0], [78.2, 1177.0], [78.3, 1177.0], [78.4, 1178.0], [78.5, 1178.0], [78.6, 1178.0], [78.7, 1179.0], [78.8, 1179.0], [78.9, 1179.0], [79.0, 1179.0], [79.1, 1181.0], [79.2, 1182.0], [79.3, 1182.0], [79.4, 1183.0], [79.5, 1183.0], [79.6, 1185.0], [79.7, 1185.0], [79.8, 1185.0], [79.9, 1185.0], [80.0, 1186.0], [80.1, 1186.0], [80.2, 1188.0], [80.3, 1189.0], [80.4, 1189.0], [80.5, 1190.0], [80.6, 1191.0], [80.7, 1192.0], [80.8, 1192.0], [80.9, 1192.0], [81.0, 1193.0], [81.1, 1195.0], [81.2, 1195.0], [81.3, 1198.0], [81.4, 1198.0], [81.5, 1199.0], [81.6, 1199.0], [81.7, 1201.0], [81.8, 1204.0], [81.9, 1204.0], [82.0, 1205.0], [82.1, 1208.0], [82.2, 1209.0], [82.3, 1209.0], [82.4, 1209.0], [82.5, 1209.0], [82.6, 1210.0], [82.7, 1210.0], [82.8, 1211.0], [82.9, 1213.0], [83.0, 1213.0], [83.1, 1213.0], [83.2, 1215.0], [83.3, 1218.0], [83.4, 1218.0], [83.5, 1220.0], [83.6, 1220.0], [83.7, 1221.0], [83.8, 1221.0], [83.9, 1223.0], [84.0, 1223.0], [84.1, 1225.0], [84.2, 1225.0], [84.3, 1227.0], [84.4, 1229.0], [84.5, 1238.0], [84.6, 1238.0], [84.7, 1239.0], [84.8, 1239.0], [84.9, 1240.0], [85.0, 1240.0], [85.1, 1241.0], [85.2, 1244.0], [85.3, 1244.0], [85.4, 1249.0], [85.5, 1250.0], [85.6, 1251.0], [85.7, 1251.0], [85.8, 1252.0], [85.9, 1253.0], [86.0, 1254.0], [86.1, 1254.0], [86.2, 1256.0], [86.3, 1256.0], [86.4, 1257.0], [86.5, 1257.0], [86.6, 1257.0], [86.7, 1259.0], [86.8, 1259.0], [86.9, 1260.0], [87.0, 1265.0], [87.1, 1266.0], [87.2, 1266.0], [87.3, 1268.0], [87.4, 1268.0], [87.5, 1269.0], [87.6, 1269.0], [87.7, 1270.0], [87.8, 1270.0], [87.9, 1271.0], [88.0, 1271.0], [88.1, 1273.0], [88.2, 1276.0], [88.3, 1276.0], [88.4, 1276.0], [88.5, 1278.0], [88.6, 1278.0], [88.7, 1278.0], [88.8, 1279.0], [88.9, 1280.0], [89.0, 1283.0], [89.1, 1283.0], [89.2, 1283.0], [89.3, 1286.0], [89.4, 1291.0], [89.5, 1291.0], [89.6, 1292.0], [89.7, 1293.0], [89.8, 1293.0], [89.9, 1293.0], [90.0, 1293.0], [90.1, 1299.0], [90.2, 1299.0], [90.3, 1301.0], [90.4, 1304.0], [90.5, 1305.0], [90.6, 1305.0], [90.7, 1309.0], [90.8, 1312.0], [90.9, 1320.0], [91.0, 1320.0], [91.1, 1324.0], [91.2, 1329.0], [91.3, 1330.0], [91.4, 1330.0], [91.5, 1330.0], [91.6, 1330.0], [91.7, 1330.0], [91.8, 1334.0], [91.9, 1338.0], [92.0, 1341.0], [92.1, 1341.0], [92.2, 1345.0], [92.3, 1346.0], [92.4, 1348.0], [92.5, 1348.0], [92.6, 1349.0], [92.7, 1350.0], [92.8, 1351.0], [92.9, 1351.0], [93.0, 1353.0], [93.1, 1355.0], [93.2, 1361.0], [93.3, 1361.0], [93.4, 1361.0], [93.5, 1370.0], [93.6, 1370.0], [93.7, 1370.0], [93.8, 1373.0], [93.9, 1379.0], [94.0, 1379.0], [94.1, 1380.0], [94.2, 1380.0], [94.3, 1384.0], [94.4, 1384.0], [94.5, 1389.0], [94.6, 1398.0], [94.7, 1399.0], [94.8, 1399.0], [94.9, 1401.0], [95.0, 1404.0], [95.1, 1404.0], [95.2, 1414.0], [95.3, 1417.0], [95.4, 1419.0], [95.5, 1419.0], [95.6, 1424.0], [95.7, 1438.0], [95.8, 1443.0], [95.9, 1443.0], [96.0, 1446.0], [96.1, 1462.0], [96.2, 1479.0], [96.3, 1479.0], [96.4, 1506.0], [96.5, 1507.0], [96.6, 1532.0], [96.7, 1532.0], [96.8, 1540.0], [96.9, 1551.0], [97.0, 1551.0], [97.1, 1642.0], [97.2, 1647.0], [97.3, 1670.0], [97.4, 1670.0], [97.5, 1700.0], [97.6, 1744.0], [97.7, 1759.0], [97.8, 1759.0], [97.9, 1823.0], [98.0, 1866.0], [98.1, 1949.0], [98.2, 1949.0], [98.3, 1954.0], [98.4, 1969.0], [98.5, 1969.0], [98.6, 2002.0], [98.7, 2062.0], [98.8, 2063.0], [98.9, 2063.0], [99.0, 2158.0], [99.1, 2257.0], [99.2, 2296.0], [99.3, 2296.0], [99.4, 2359.0], [99.5, 2513.0], [99.6, 2685.0], [99.7, 2685.0], [99.8, 2927.0], [99.9, 2967.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 133.0, "series": [{"data": [[600.0, 66.0], [700.0, 36.0], [800.0, 33.0], [900.0, 39.0], [1000.0, 55.0], [1100.0, 133.0], [1200.0, 63.0], [1300.0, 34.0], [1400.0, 11.0], [1500.0, 5.0], [100.0, 17.0], [1600.0, 3.0], [1700.0, 3.0], [1800.0, 2.0], [1900.0, 3.0], [2000.0, 3.0], [2100.0, 1.0], [2200.0, 2.0], [2300.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2900.0, 2.0], [200.0, 34.0], [300.0, 38.0], [400.0, 52.0], [500.0, 97.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 27.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 567.0, "series": [{"data": [[0.0, 141.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 567.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 27.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.80263157894737, "minX": 1.6038423E12, "maxY": 10.0, "series": [{"data": [[1.6038423E12, 10.0], [1.60384236E12, 9.80263157894737]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384236E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 257.0, "minX": 1.0, "maxY": 1223.0, "series": [{"data": [[8.0, 257.0], [4.0, 862.0], [2.0, 443.0], [1.0, 474.0], [9.0, 1223.0], [10.0, 876.1845730027553], [5.0, 457.0], [6.0, 532.0], [3.0, 483.0], [7.0, 1120.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 873.4163265306127]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1754.5166666666667, "minX": 1.6038423E12, "maxY": 1260262.1333333333, "series": [{"data": [[1.6038423E12, 1260262.1333333333], [1.60384236E12, 476583.23333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6038423E12, 3915.516666666667], [1.60384236E12, 1754.5166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384236E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 868.7238658777122, "minX": 1.6038423E12, "maxY": 883.8508771929829, "series": [{"data": [[1.6038423E12, 868.7238658777122], [1.60384236E12, 883.8508771929829]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384236E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 867.5147928994082, "minX": 1.6038423E12, "maxY": 882.7850877192988, "series": [{"data": [[1.6038423E12, 867.5147928994082], [1.60384236E12, 882.7850877192988]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384236E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.06140350877192987, "minX": 1.6038423E12, "maxY": 0.20315581854043407, "series": [{"data": [[1.6038423E12, 0.20315581854043407], [1.60384236E12, 0.06140350877192987]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384236E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 146.0, "minX": 1.6038423E12, "maxY": 2967.0, "series": [{"data": [[1.6038423E12, 2967.0], [1.60384236E12, 1969.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6038423E12, 163.71599963665008], [1.60384236E12, 165.82999836206434]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6038423E12, 165.0], [1.60384236E12, 172.01300065517427]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6038423E12, 164.47799981832503], [1.60384236E12, 169.26499918103218]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6038423E12, 146.0], [1.60384236E12, 157.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6038423E12, 838.0], [1.60384236E12, 917.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384236E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 463.0, "minX": 1.0, "maxY": 2327.5, "series": [{"data": [[8.0, 1142.5], [9.0, 1112.0], [10.0, 1123.5], [11.0, 1110.0], [12.0, 1101.0], [13.0, 711.0], [14.0, 588.0], [15.0, 788.0], [1.0, 781.0], [18.0, 478.0], [19.0, 468.0], [5.0, 498.0], [20.0, 472.0], [22.0, 463.0], [6.0, 2327.5], [7.0, 1221.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 462.5, "minX": 1.0, "maxY": 2323.0, "series": [{"data": [[8.0, 1139.5], [9.0, 1111.0], [10.0, 1123.5], [11.0, 1109.0], [12.0, 1100.0], [13.0, 710.0], [14.0, 588.0], [15.0, 786.0], [1.0, 760.0], [18.0, 478.0], [19.0, 468.0], [5.0, 498.0], [20.0, 471.5], [22.0, 462.5], [6.0, 2323.0], [7.0, 1219.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.6333333333333333, "minX": 1.6038423E12, "maxY": 8.616666666666667, "series": [{"data": [[1.6038423E12, 8.616666666666667], [1.60384236E12, 3.6333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384236E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.8, "minX": 1.6038423E12, "maxY": 8.45, "series": [{"data": [[1.6038423E12, 8.45], [1.60384236E12, 3.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384236E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.8, "minX": 1.6038423E12, "maxY": 8.45, "series": [{"data": [[1.6038423E12, 8.45], [1.60384236E12, 3.8]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384236E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.8, "minX": 1.6038423E12, "maxY": 8.45, "series": [{"data": [[1.6038423E12, 8.45], [1.60384236E12, 3.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384236E12, "title": "Total Transactions Per Second"}},
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

