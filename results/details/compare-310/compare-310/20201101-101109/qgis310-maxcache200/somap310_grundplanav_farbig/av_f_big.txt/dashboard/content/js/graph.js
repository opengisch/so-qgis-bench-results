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
        data: {"result": {"minY": 189.0, "minX": 0.0, "maxY": 3443.0, "series": [{"data": [[0.0, 189.0], [0.1, 189.0], [0.2, 190.0], [0.3, 200.0], [0.4, 200.0], [0.5, 203.0], [0.6, 205.0], [0.7, 206.0], [0.8, 206.0], [0.9, 209.0], [1.0, 211.0], [1.1, 218.0], [1.2, 218.0], [1.3, 221.0], [1.4, 222.0], [1.5, 222.0], [1.6, 222.0], [1.7, 225.0], [1.8, 228.0], [1.9, 228.0], [2.0, 230.0], [2.1, 231.0], [2.2, 236.0], [2.3, 236.0], [2.4, 236.0], [2.5, 237.0], [2.6, 237.0], [2.7, 237.0], [2.8, 243.0], [2.9, 246.0], [3.0, 247.0], [3.1, 247.0], [3.2, 250.0], [3.3, 253.0], [3.4, 253.0], [3.5, 257.0], [3.6, 263.0], [3.7, 265.0], [3.8, 265.0], [3.9, 267.0], [4.0, 268.0], [4.1, 268.0], [4.2, 268.0], [4.3, 269.0], [4.4, 272.0], [4.5, 272.0], [4.6, 272.0], [4.7, 277.0], [4.8, 277.0], [4.9, 277.0], [5.0, 277.0], [5.1, 278.0], [5.2, 286.0], [5.3, 286.0], [5.4, 289.0], [5.5, 289.0], [5.6, 289.0], [5.7, 289.0], [5.8, 293.0], [5.9, 294.0], [6.0, 296.0], [6.1, 296.0], [6.2, 297.0], [6.3, 298.0], [6.4, 300.0], [6.5, 300.0], [6.6, 303.0], [6.7, 309.0], [6.8, 309.0], [6.9, 312.0], [7.0, 313.0], [7.1, 313.0], [7.2, 313.0], [7.3, 314.0], [7.4, 315.0], [7.5, 318.0], [7.6, 318.0], [7.7, 323.0], [7.8, 326.0], [7.9, 328.0], [8.0, 328.0], [8.1, 328.0], [8.2, 330.0], [8.3, 331.0], [8.4, 331.0], [8.5, 332.0], [8.6, 339.0], [8.7, 339.0], [8.8, 339.0], [8.9, 343.0], [9.0, 343.0], [9.1, 343.0], [9.2, 347.0], [9.3, 348.0], [9.4, 354.0], [9.5, 354.0], [9.6, 358.0], [9.7, 359.0], [9.8, 360.0], [9.9, 360.0], [10.0, 362.0], [10.1, 370.0], [10.2, 370.0], [10.3, 370.0], [10.4, 371.0], [10.5, 372.0], [10.6, 372.0], [10.7, 372.0], [10.8, 374.0], [10.9, 376.0], [11.0, 376.0], [11.1, 376.0], [11.2, 381.0], [11.3, 383.0], [11.4, 383.0], [11.5, 384.0], [11.6, 385.0], [11.7, 385.0], [11.8, 391.0], [11.9, 393.0], [12.0, 395.0], [12.1, 395.0], [12.2, 395.0], [12.3, 399.0], [12.4, 400.0], [12.5, 400.0], [12.6, 407.0], [12.7, 407.0], [12.8, 408.0], [12.9, 408.0], [13.0, 408.0], [13.1, 410.0], [13.2, 413.0], [13.3, 413.0], [13.4, 415.0], [13.5, 419.0], [13.6, 419.0], [13.7, 420.0], [13.8, 428.0], [13.9, 428.0], [14.0, 428.0], [14.1, 429.0], [14.2, 436.0], [14.3, 438.0], [14.4, 438.0], [14.5, 438.0], [14.6, 445.0], [14.7, 445.0], [14.8, 445.0], [14.9, 446.0], [15.0, 452.0], [15.1, 452.0], [15.2, 455.0], [15.3, 456.0], [15.4, 456.0], [15.5, 456.0], [15.6, 460.0], [15.7, 462.0], [15.8, 463.0], [15.9, 463.0], [16.0, 470.0], [16.1, 470.0], [16.2, 475.0], [16.3, 475.0], [16.4, 478.0], [16.5, 482.0], [16.6, 483.0], [16.7, 483.0], [16.8, 484.0], [16.9, 485.0], [17.0, 485.0], [17.1, 485.0], [17.2, 487.0], [17.3, 487.0], [17.4, 487.0], [17.5, 488.0], [17.6, 492.0], [17.7, 495.0], [17.8, 495.0], [17.9, 496.0], [18.0, 502.0], [18.1, 503.0], [18.2, 503.0], [18.3, 504.0], [18.4, 505.0], [18.5, 505.0], [18.6, 505.0], [18.7, 508.0], [18.8, 513.0], [18.9, 513.0], [19.0, 513.0], [19.1, 515.0], [19.2, 520.0], [19.3, 520.0], [19.4, 521.0], [19.5, 522.0], [19.6, 523.0], [19.7, 523.0], [19.8, 524.0], [19.9, 524.0], [20.0, 526.0], [20.1, 526.0], [20.2, 527.0], [20.3, 530.0], [20.4, 530.0], [20.5, 531.0], [20.6, 535.0], [20.7, 537.0], [20.8, 537.0], [20.9, 541.0], [21.0, 544.0], [21.1, 546.0], [21.2, 546.0], [21.3, 546.0], [21.4, 546.0], [21.5, 548.0], [21.6, 548.0], [21.7, 549.0], [21.8, 549.0], [21.9, 549.0], [22.0, 552.0], [22.1, 554.0], [22.2, 554.0], [22.3, 554.0], [22.4, 554.0], [22.5, 554.0], [22.6, 555.0], [22.7, 555.0], [22.8, 555.0], [22.9, 555.0], [23.0, 555.0], [23.1, 555.0], [23.2, 556.0], [23.3, 557.0], [23.4, 557.0], [23.5, 558.0], [23.6, 559.0], [23.7, 561.0], [23.8, 561.0], [23.9, 561.0], [24.0, 562.0], [24.1, 562.0], [24.2, 562.0], [24.3, 563.0], [24.4, 564.0], [24.5, 564.0], [24.6, 564.0], [24.7, 564.0], [24.8, 565.0], [24.9, 566.0], [25.0, 566.0], [25.1, 567.0], [25.2, 568.0], [25.3, 568.0], [25.4, 568.0], [25.5, 571.0], [25.6, 571.0], [25.7, 571.0], [25.8, 571.0], [25.9, 572.0], [26.0, 572.0], [26.1, 572.0], [26.2, 573.0], [26.3, 574.0], [26.4, 575.0], [26.5, 575.0], [26.6, 575.0], [26.7, 576.0], [26.8, 576.0], [26.9, 577.0], [27.0, 579.0], [27.1, 580.0], [27.2, 580.0], [27.3, 582.0], [27.4, 583.0], [27.5, 583.0], [27.6, 583.0], [27.7, 586.0], [27.8, 587.0], [27.9, 588.0], [28.0, 588.0], [28.1, 590.0], [28.2, 590.0], [28.3, 591.0], [28.4, 591.0], [28.5, 591.0], [28.6, 591.0], [28.7, 591.0], [28.8, 593.0], [28.9, 594.0], [29.0, 595.0], [29.1, 595.0], [29.2, 597.0], [29.3, 598.0], [29.4, 598.0], [29.5, 598.0], [29.6, 598.0], [29.7, 599.0], [29.8, 600.0], [29.9, 600.0], [30.0, 600.0], [30.1, 602.0], [30.2, 602.0], [30.3, 603.0], [30.4, 604.0], [30.5, 604.0], [30.6, 604.0], [30.7, 604.0], [30.8, 606.0], [30.9, 608.0], [31.0, 608.0], [31.1, 608.0], [31.2, 608.0], [31.3, 608.0], [31.4, 608.0], [31.5, 610.0], [31.6, 612.0], [31.7, 612.0], [31.8, 615.0], [31.9, 615.0], [32.0, 620.0], [32.1, 620.0], [32.2, 623.0], [32.3, 624.0], [32.4, 624.0], [32.5, 624.0], [32.6, 625.0], [32.7, 626.0], [32.8, 631.0], [32.9, 631.0], [33.0, 632.0], [33.1, 633.0], [33.2, 636.0], [33.3, 636.0], [33.4, 637.0], [33.5, 637.0], [33.6, 637.0], [33.7, 639.0], [33.8, 640.0], [33.9, 640.0], [34.0, 640.0], [34.1, 642.0], [34.2, 644.0], [34.3, 645.0], [34.4, 645.0], [34.5, 646.0], [34.6, 646.0], [34.7, 649.0], [34.8, 649.0], [34.9, 650.0], [35.0, 653.0], [35.1, 653.0], [35.2, 657.0], [35.3, 657.0], [35.4, 657.0], [35.5, 657.0], [35.6, 657.0], [35.7, 660.0], [35.8, 660.0], [35.9, 660.0], [36.0, 661.0], [36.1, 662.0], [36.2, 663.0], [36.3, 663.0], [36.4, 665.0], [36.5, 666.0], [36.6, 667.0], [36.7, 667.0], [36.8, 668.0], [36.9, 671.0], [37.0, 671.0], [37.1, 672.0], [37.2, 673.0], [37.3, 675.0], [37.4, 675.0], [37.5, 676.0], [37.6, 677.0], [37.7, 678.0], [37.8, 678.0], [37.9, 678.0], [38.0, 679.0], [38.1, 679.0], [38.2, 679.0], [38.3, 681.0], [38.4, 681.0], [38.5, 681.0], [38.6, 681.0], [38.7, 683.0], [38.8, 684.0], [38.9, 684.0], [39.0, 684.0], [39.1, 686.0], [39.2, 689.0], [39.3, 689.0], [39.4, 691.0], [39.5, 693.0], [39.6, 696.0], [39.7, 696.0], [39.8, 697.0], [39.9, 700.0], [40.0, 700.0], [40.1, 700.0], [40.2, 704.0], [40.3, 708.0], [40.4, 708.0], [40.5, 709.0], [40.6, 709.0], [40.7, 713.0], [40.8, 713.0], [40.9, 713.0], [41.0, 722.0], [41.1, 722.0], [41.2, 722.0], [41.3, 722.0], [41.4, 726.0], [41.5, 730.0], [41.6, 730.0], [41.7, 731.0], [41.8, 734.0], [41.9, 734.0], [42.0, 736.0], [42.1, 738.0], [42.2, 739.0], [42.3, 739.0], [42.4, 740.0], [42.5, 745.0], [42.6, 746.0], [42.7, 746.0], [42.8, 747.0], [42.9, 747.0], [43.0, 749.0], [43.1, 749.0], [43.2, 752.0], [43.3, 754.0], [43.4, 754.0], [43.5, 754.0], [43.6, 755.0], [43.7, 758.0], [43.8, 758.0], [43.9, 760.0], [44.0, 760.0], [44.1, 761.0], [44.2, 761.0], [44.3, 763.0], [44.4, 763.0], [44.5, 769.0], [44.6, 769.0], [44.7, 774.0], [44.8, 774.0], [44.9, 775.0], [45.0, 775.0], [45.1, 776.0], [45.2, 778.0], [45.3, 778.0], [45.4, 779.0], [45.5, 780.0], [45.6, 780.0], [45.7, 780.0], [45.8, 782.0], [45.9, 783.0], [46.0, 784.0], [46.1, 784.0], [46.2, 786.0], [46.3, 789.0], [46.4, 791.0], [46.5, 791.0], [46.6, 791.0], [46.7, 792.0], [46.8, 792.0], [46.9, 795.0], [47.0, 797.0], [47.1, 800.0], [47.2, 800.0], [47.3, 809.0], [47.4, 812.0], [47.5, 815.0], [47.6, 815.0], [47.7, 816.0], [47.8, 820.0], [47.9, 825.0], [48.0, 825.0], [48.1, 825.0], [48.2, 829.0], [48.3, 830.0], [48.4, 830.0], [48.5, 835.0], [48.6, 840.0], [48.7, 840.0], [48.8, 840.0], [48.9, 844.0], [49.0, 845.0], [49.1, 845.0], [49.2, 846.0], [49.3, 847.0], [49.4, 849.0], [49.5, 849.0], [49.6, 851.0], [49.7, 852.0], [49.8, 855.0], [49.9, 855.0], [50.0, 855.0], [50.1, 856.0], [50.2, 856.0], [50.3, 857.0], [50.4, 859.0], [50.5, 861.0], [50.6, 861.0], [50.7, 862.0], [50.8, 864.0], [50.9, 869.0], [51.0, 869.0], [51.1, 869.0], [51.2, 870.0], [51.3, 870.0], [51.4, 870.0], [51.5, 873.0], [51.6, 876.0], [51.7, 876.0], [51.8, 877.0], [51.9, 881.0], [52.0, 882.0], [52.1, 882.0], [52.2, 882.0], [52.3, 883.0], [52.4, 885.0], [52.5, 885.0], [52.6, 886.0], [52.7, 887.0], [52.8, 890.0], [52.9, 890.0], [53.0, 892.0], [53.1, 894.0], [53.2, 895.0], [53.3, 895.0], [53.4, 895.0], [53.5, 895.0], [53.6, 895.0], [53.7, 897.0], [53.8, 904.0], [53.9, 909.0], [54.0, 909.0], [54.1, 909.0], [54.2, 912.0], [54.3, 912.0], [54.4, 912.0], [54.5, 913.0], [54.6, 915.0], [54.7, 917.0], [54.8, 917.0], [54.9, 917.0], [55.0, 918.0], [55.1, 918.0], [55.2, 919.0], [55.3, 924.0], [55.4, 924.0], [55.5, 924.0], [55.6, 924.0], [55.7, 927.0], [55.8, 927.0], [55.9, 927.0], [56.0, 930.0], [56.1, 933.0], [56.2, 933.0], [56.3, 933.0], [56.4, 934.0], [56.5, 939.0], [56.6, 941.0], [56.7, 941.0], [56.8, 941.0], [56.9, 942.0], [57.0, 942.0], [57.1, 942.0], [57.2, 944.0], [57.3, 946.0], [57.4, 946.0], [57.5, 946.0], [57.6, 946.0], [57.7, 948.0], [57.8, 948.0], [57.9, 948.0], [58.0, 951.0], [58.1, 952.0], [58.2, 952.0], [58.3, 953.0], [58.4, 956.0], [58.5, 956.0], [58.6, 956.0], [58.7, 958.0], [58.8, 958.0], [58.9, 958.0], [59.0, 959.0], [59.1, 960.0], [59.2, 960.0], [59.3, 960.0], [59.4, 962.0], [59.5, 963.0], [59.6, 963.0], [59.7, 963.0], [59.8, 964.0], [59.9, 964.0], [60.0, 964.0], [60.1, 964.0], [60.2, 965.0], [60.3, 966.0], [60.4, 966.0], [60.5, 968.0], [60.6, 973.0], [60.7, 978.0], [60.8, 978.0], [60.9, 980.0], [61.0, 981.0], [61.1, 985.0], [61.2, 985.0], [61.3, 986.0], [61.4, 987.0], [61.5, 987.0], [61.6, 987.0], [61.7, 988.0], [61.8, 991.0], [61.9, 991.0], [62.0, 994.0], [62.1, 994.0], [62.2, 995.0], [62.3, 995.0], [62.4, 995.0], [62.5, 995.0], [62.6, 996.0], [62.7, 996.0], [62.8, 996.0], [62.9, 997.0], [63.0, 998.0], [63.1, 998.0], [63.2, 998.0], [63.3, 998.0], [63.4, 998.0], [63.5, 1006.0], [63.6, 1009.0], [63.7, 1009.0], [63.8, 1009.0], [63.9, 1014.0], [64.0, 1015.0], [64.1, 1016.0], [64.2, 1016.0], [64.3, 1017.0], [64.4, 1018.0], [64.5, 1020.0], [64.6, 1020.0], [64.7, 1021.0], [64.8, 1021.0], [64.9, 1022.0], [65.0, 1022.0], [65.1, 1022.0], [65.2, 1024.0], [65.3, 1024.0], [65.4, 1026.0], [65.5, 1031.0], [65.6, 1032.0], [65.7, 1032.0], [65.8, 1034.0], [65.9, 1036.0], [66.0, 1036.0], [66.1, 1036.0], [66.2, 1036.0], [66.3, 1040.0], [66.4, 1041.0], [66.5, 1041.0], [66.6, 1042.0], [66.7, 1047.0], [66.8, 1047.0], [66.9, 1047.0], [67.0, 1052.0], [67.1, 1054.0], [67.2, 1054.0], [67.3, 1055.0], [67.4, 1058.0], [67.5, 1060.0], [67.6, 1060.0], [67.7, 1060.0], [67.8, 1060.0], [67.9, 1061.0], [68.0, 1061.0], [68.1, 1063.0], [68.2, 1064.0], [68.3, 1064.0], [68.4, 1064.0], [68.5, 1065.0], [68.6, 1065.0], [68.7, 1065.0], [68.8, 1066.0], [68.9, 1067.0], [69.0, 1075.0], [69.1, 1075.0], [69.2, 1077.0], [69.3, 1078.0], [69.4, 1079.0], [69.5, 1079.0], [69.6, 1081.0], [69.7, 1082.0], [69.8, 1082.0], [69.9, 1082.0], [70.0, 1082.0], [70.1, 1083.0], [70.2, 1083.0], [70.3, 1084.0], [70.4, 1089.0], [70.5, 1091.0], [70.6, 1091.0], [70.7, 1095.0], [70.8, 1096.0], [70.9, 1097.0], [71.0, 1097.0], [71.1, 1099.0], [71.2, 1099.0], [71.3, 1103.0], [71.4, 1103.0], [71.5, 1104.0], [71.6, 1104.0], [71.7, 1104.0], [71.8, 1109.0], [71.9, 1113.0], [72.0, 1113.0], [72.1, 1113.0], [72.2, 1115.0], [72.3, 1116.0], [72.4, 1117.0], [72.5, 1117.0], [72.6, 1118.0], [72.7, 1118.0], [72.8, 1118.0], [72.9, 1118.0], [73.0, 1118.0], [73.1, 1121.0], [73.2, 1121.0], [73.3, 1121.0], [73.4, 1122.0], [73.5, 1122.0], [73.6, 1122.0], [73.7, 1129.0], [73.8, 1130.0], [73.9, 1132.0], [74.0, 1132.0], [74.1, 1132.0], [74.2, 1132.0], [74.3, 1133.0], [74.4, 1133.0], [74.5, 1134.0], [74.6, 1134.0], [74.7, 1135.0], [74.8, 1135.0], [74.9, 1136.0], [75.0, 1138.0], [75.1, 1138.0], [75.2, 1141.0], [75.3, 1142.0], [75.4, 1142.0], [75.5, 1142.0], [75.6, 1142.0], [75.7, 1143.0], [75.8, 1144.0], [75.9, 1144.0], [76.0, 1144.0], [76.1, 1146.0], [76.2, 1147.0], [76.3, 1147.0], [76.4, 1150.0], [76.5, 1152.0], [76.6, 1153.0], [76.7, 1153.0], [76.8, 1153.0], [76.9, 1154.0], [77.0, 1154.0], [77.1, 1155.0], [77.2, 1155.0], [77.3, 1157.0], [77.4, 1157.0], [77.5, 1158.0], [77.6, 1158.0], [77.7, 1159.0], [77.8, 1159.0], [77.9, 1160.0], [78.0, 1160.0], [78.1, 1161.0], [78.2, 1161.0], [78.3, 1162.0], [78.4, 1164.0], [78.5, 1164.0], [78.6, 1164.0], [78.7, 1167.0], [78.8, 1168.0], [78.9, 1168.0], [79.0, 1168.0], [79.1, 1169.0], [79.2, 1170.0], [79.3, 1170.0], [79.4, 1172.0], [79.5, 1178.0], [79.6, 1183.0], [79.7, 1183.0], [79.8, 1189.0], [79.9, 1190.0], [80.0, 1192.0], [80.1, 1192.0], [80.2, 1196.0], [80.3, 1197.0], [80.4, 1197.0], [80.5, 1198.0], [80.6, 1201.0], [80.7, 1203.0], [80.8, 1203.0], [80.9, 1204.0], [81.0, 1205.0], [81.1, 1205.0], [81.2, 1205.0], [81.3, 1211.0], [81.4, 1215.0], [81.5, 1216.0], [81.6, 1216.0], [81.7, 1217.0], [81.8, 1218.0], [81.9, 1218.0], [82.0, 1218.0], [82.1, 1220.0], [82.2, 1221.0], [82.3, 1221.0], [82.4, 1225.0], [82.5, 1226.0], [82.6, 1226.0], [82.7, 1226.0], [82.8, 1229.0], [82.9, 1233.0], [83.0, 1233.0], [83.1, 1233.0], [83.2, 1236.0], [83.3, 1236.0], [83.4, 1236.0], [83.5, 1237.0], [83.6, 1238.0], [83.7, 1238.0], [83.8, 1238.0], [83.9, 1239.0], [84.0, 1243.0], [84.1, 1243.0], [84.2, 1243.0], [84.3, 1245.0], [84.4, 1251.0], [84.5, 1254.0], [84.6, 1254.0], [84.7, 1258.0], [84.8, 1259.0], [84.9, 1262.0], [85.0, 1262.0], [85.1, 1262.0], [85.2, 1264.0], [85.3, 1264.0], [85.4, 1268.0], [85.5, 1268.0], [85.6, 1268.0], [85.7, 1268.0], [85.8, 1269.0], [85.9, 1272.0], [86.0, 1273.0], [86.1, 1273.0], [86.2, 1281.0], [86.3, 1287.0], [86.4, 1289.0], [86.5, 1289.0], [86.6, 1290.0], [86.7, 1291.0], [86.8, 1291.0], [86.9, 1296.0], [87.0, 1304.0], [87.1, 1306.0], [87.2, 1306.0], [87.3, 1311.0], [87.4, 1316.0], [87.5, 1319.0], [87.6, 1319.0], [87.7, 1323.0], [87.8, 1327.0], [87.9, 1330.0], [88.0, 1330.0], [88.1, 1341.0], [88.2, 1341.0], [88.3, 1352.0], [88.4, 1352.0], [88.5, 1352.0], [88.6, 1358.0], [88.7, 1358.0], [88.8, 1359.0], [88.9, 1360.0], [89.0, 1363.0], [89.1, 1363.0], [89.2, 1364.0], [89.3, 1372.0], [89.4, 1373.0], [89.5, 1373.0], [89.6, 1377.0], [89.7, 1378.0], [89.8, 1383.0], [89.9, 1383.0], [90.0, 1387.0], [90.1, 1388.0], [90.2, 1388.0], [90.3, 1393.0], [90.4, 1396.0], [90.5, 1397.0], [90.6, 1397.0], [90.7, 1402.0], [90.8, 1407.0], [90.9, 1410.0], [91.0, 1410.0], [91.1, 1417.0], [91.2, 1431.0], [91.3, 1433.0], [91.4, 1433.0], [91.5, 1441.0], [91.6, 1453.0], [91.7, 1453.0], [91.8, 1461.0], [91.9, 1483.0], [92.0, 1485.0], [92.1, 1485.0], [92.2, 1485.0], [92.3, 1488.0], [92.4, 1489.0], [92.5, 1489.0], [92.6, 1510.0], [92.7, 1521.0], [92.8, 1528.0], [92.9, 1528.0], [93.0, 1531.0], [93.1, 1540.0], [93.2, 1552.0], [93.3, 1552.0], [93.4, 1570.0], [93.5, 1571.0], [93.6, 1571.0], [93.7, 1575.0], [93.8, 1588.0], [93.9, 1589.0], [94.0, 1589.0], [94.1, 1593.0], [94.2, 1595.0], [94.3, 1601.0], [94.4, 1601.0], [94.5, 1608.0], [94.6, 1619.0], [94.7, 1620.0], [94.8, 1620.0], [94.9, 1627.0], [95.0, 1655.0], [95.1, 1655.0], [95.2, 1680.0], [95.3, 1681.0], [95.4, 1703.0], [95.5, 1703.0], [95.6, 1706.0], [95.7, 1708.0], [95.8, 1729.0], [95.9, 1729.0], [96.0, 1735.0], [96.1, 1740.0], [96.2, 1743.0], [96.3, 1743.0], [96.4, 1762.0], [96.5, 1796.0], [96.6, 1825.0], [96.7, 1825.0], [96.8, 1833.0], [96.9, 1851.0], [97.0, 1851.0], [97.1, 1879.0], [97.2, 1892.0], [97.3, 1938.0], [97.4, 1938.0], [97.5, 1972.0], [97.6, 2024.0], [97.7, 2074.0], [97.8, 2074.0], [97.9, 2098.0], [98.0, 2107.0], [98.1, 2711.0], [98.2, 2711.0], [98.3, 2794.0], [98.4, 2824.0], [98.5, 2824.0], [98.6, 2979.0], [98.7, 3164.0], [98.8, 3195.0], [98.9, 3195.0], [99.0, 3197.0], [99.1, 3227.0], [99.2, 3236.0], [99.3, 3236.0], [99.4, 3284.0], [99.5, 3352.0], [99.6, 3372.0], [99.7, 3372.0], [99.8, 3391.0], [99.9, 3443.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 87.0, "series": [{"data": [[600.0, 74.0], [700.0, 53.0], [800.0, 49.0], [900.0, 71.0], [1000.0, 58.0], [1100.0, 68.0], [1200.0, 47.0], [1300.0, 27.0], [1400.0, 14.0], [1500.0, 13.0], [1600.0, 8.0], [100.0, 2.0], [1700.0, 9.0], [1800.0, 5.0], [1900.0, 2.0], [2000.0, 3.0], [2100.0, 1.0], [2700.0, 2.0], [2800.0, 1.0], [2900.0, 1.0], [3100.0, 3.0], [3200.0, 3.0], [200.0, 45.0], [3300.0, 3.0], [3400.0, 1.0], [300.0, 44.0], [400.0, 41.0], [500.0, 87.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 55.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 548.0, "series": [{"data": [[0.0, 132.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 548.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 55.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.855305466237944, "minX": 1.60422714E12, "maxY": 10.0, "series": [{"data": [[1.6042272E12, 9.855305466237944], [1.60422714E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042272E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 554.0, "minX": 1.0, "maxY": 1972.0, "series": [{"data": [[8.0, 760.0], [4.0, 1972.0], [2.0, 657.0], [1.0, 1021.0], [9.0, 665.0], [10.0, 899.9999999999993], [5.0, 624.0], [6.0, 561.0], [3.0, 554.0], [7.0, 591.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 899.0544217687068]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2337.95, "minX": 1.60422714E12, "maxY": 1115521.9833333334, "series": [{"data": [[1.6042272E12, 720260.0833333334], [1.60422714E12, 1115521.9833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6042272E12, 2337.95], [1.60422714E12, 3185.0833333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042272E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 891.3372641509434, "minX": 1.60422714E12, "maxY": 909.5755627009643, "series": [{"data": [[1.6042272E12, 909.5755627009643], [1.60422714E12, 891.3372641509434]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042272E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 890.0872641509434, "minX": 1.60422714E12, "maxY": 908.4823151125406, "series": [{"data": [[1.6042272E12, 908.4823151125406], [1.60422714E12, 890.0872641509434]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042272E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03858520900321541, "minX": 1.60422714E12, "maxY": 0.19811320754717032, "series": [{"data": [[1.6042272E12, 0.03858520900321541], [1.60422714E12, 0.19811320754717032]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042272E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 189.0, "minX": 1.60422714E12, "maxY": 3443.0, "series": [{"data": [[1.6042272E12, 2098.0], [1.60422714E12, 3443.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6042272E12, 234.74399680137634], [1.60422714E12, 205.8249998986721]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6042272E12, 243.26640008926393], [1.60422714E12, 206.62250012159348]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6042272E12, 241.45199840068815], [1.60422714E12, 206.11249984800816]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6042272E12, 190.0], [1.60422714E12, 189.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6042272E12, 919.0], [1.60422714E12, 793.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042272E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 436.0, "minX": 2.0, "maxY": 1153.0, "series": [{"data": [[8.0, 979.5], [2.0, 839.0], [9.0, 1082.0], [10.0, 960.0], [11.0, 946.0], [12.0, 957.5], [13.0, 789.0], [14.0, 655.5], [15.0, 624.0], [16.0, 436.0], [17.0, 672.0], [18.0, 455.5], [7.0, 1153.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 433.0, "minX": 2.0, "maxY": 1152.0, "series": [{"data": [[8.0, 978.5], [2.0, 838.5], [9.0, 1081.0], [10.0, 959.0], [11.0, 946.0], [12.0, 956.0], [13.0, 784.5], [14.0, 655.5], [15.0, 619.0], [16.0, 433.0], [17.0, 672.0], [18.0, 455.5], [7.0, 1152.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.016666666666667, "minX": 1.60422714E12, "maxY": 7.233333333333333, "series": [{"data": [[1.6042272E12, 5.016666666666667], [1.60422714E12, 7.233333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042272E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.183333333333334, "minX": 1.60422714E12, "maxY": 7.066666666666666, "series": [{"data": [[1.6042272E12, 5.183333333333334], [1.60422714E12, 7.066666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042272E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.183333333333334, "minX": 1.60422714E12, "maxY": 7.066666666666666, "series": [{"data": [[1.6042272E12, 5.183333333333334], [1.60422714E12, 7.066666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042272E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.183333333333334, "minX": 1.60422714E12, "maxY": 7.066666666666666, "series": [{"data": [[1.6042272E12, 5.183333333333334], [1.60422714E12, 7.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042272E12, "title": "Total Transactions Per Second"}},
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

