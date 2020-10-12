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
        data: {"result": {"minY": 138.0, "minX": 0.0, "maxY": 3238.0, "series": [{"data": [[0.0, 138.0], [0.1, 138.0], [0.2, 139.0], [0.3, 141.0], [0.4, 141.0], [0.5, 147.0], [0.6, 151.0], [0.7, 154.0], [0.8, 154.0], [0.9, 156.0], [1.0, 156.0], [1.1, 161.0], [1.2, 161.0], [1.3, 163.0], [1.4, 164.0], [1.5, 165.0], [1.6, 165.0], [1.7, 165.0], [1.8, 167.0], [1.9, 167.0], [2.0, 168.0], [2.1, 169.0], [2.2, 192.0], [2.3, 192.0], [2.4, 193.0], [2.5, 195.0], [2.6, 197.0], [2.7, 197.0], [2.8, 213.0], [2.9, 215.0], [3.0, 219.0], [3.1, 219.0], [3.2, 222.0], [3.3, 223.0], [3.4, 223.0], [3.5, 226.0], [3.6, 228.0], [3.7, 229.0], [3.8, 229.0], [3.9, 231.0], [4.0, 231.0], [4.1, 232.0], [4.2, 232.0], [4.3, 233.0], [4.4, 235.0], [4.5, 239.0], [4.6, 239.0], [4.7, 240.0], [4.8, 240.0], [4.9, 241.0], [5.0, 241.0], [5.1, 241.0], [5.2, 243.0], [5.3, 243.0], [5.4, 245.0], [5.5, 245.0], [5.6, 248.0], [5.7, 248.0], [5.8, 250.0], [5.9, 250.0], [6.0, 253.0], [6.1, 253.0], [6.2, 254.0], [6.3, 262.0], [6.4, 263.0], [6.5, 263.0], [6.6, 264.0], [6.7, 271.0], [6.8, 271.0], [6.9, 273.0], [7.0, 273.0], [7.1, 276.0], [7.2, 276.0], [7.3, 280.0], [7.4, 282.0], [7.5, 283.0], [7.6, 283.0], [7.7, 285.0], [7.8, 299.0], [7.9, 303.0], [8.0, 303.0], [8.1, 305.0], [8.2, 305.0], [8.3, 309.0], [8.4, 309.0], [8.5, 312.0], [8.6, 318.0], [8.7, 318.0], [8.8, 320.0], [8.9, 326.0], [9.0, 332.0], [9.1, 332.0], [9.2, 333.0], [9.3, 337.0], [9.4, 345.0], [9.5, 345.0], [9.6, 347.0], [9.7, 348.0], [9.8, 351.0], [9.9, 351.0], [10.0, 352.0], [10.1, 352.0], [10.2, 352.0], [10.3, 352.0], [10.4, 353.0], [10.5, 354.0], [10.6, 354.0], [10.7, 355.0], [10.8, 356.0], [10.9, 360.0], [11.0, 360.0], [11.1, 360.0], [11.2, 368.0], [11.3, 374.0], [11.4, 374.0], [11.5, 376.0], [11.6, 379.0], [11.7, 379.0], [11.8, 382.0], [11.9, 382.0], [12.0, 383.0], [12.1, 383.0], [12.2, 385.0], [12.3, 385.0], [12.4, 390.0], [12.5, 390.0], [12.6, 393.0], [12.7, 397.0], [12.8, 398.0], [12.9, 398.0], [13.0, 398.0], [13.1, 404.0], [13.2, 404.0], [13.3, 404.0], [13.4, 408.0], [13.5, 409.0], [13.6, 409.0], [13.7, 409.0], [13.8, 410.0], [13.9, 411.0], [14.0, 411.0], [14.1, 412.0], [14.2, 413.0], [14.3, 417.0], [14.4, 417.0], [14.5, 418.0], [14.6, 418.0], [14.7, 426.0], [14.8, 426.0], [14.9, 427.0], [15.0, 428.0], [15.1, 428.0], [15.2, 430.0], [15.3, 431.0], [15.4, 438.0], [15.5, 438.0], [15.6, 442.0], [15.7, 442.0], [15.8, 443.0], [15.9, 443.0], [16.0, 444.0], [16.1, 445.0], [16.2, 445.0], [16.3, 445.0], [16.4, 449.0], [16.5, 450.0], [16.6, 452.0], [16.7, 452.0], [16.8, 454.0], [16.9, 456.0], [17.0, 456.0], [17.1, 459.0], [17.2, 462.0], [17.3, 467.0], [17.4, 467.0], [17.5, 470.0], [17.6, 470.0], [17.7, 472.0], [17.8, 472.0], [17.9, 474.0], [18.0, 476.0], [18.1, 479.0], [18.2, 479.0], [18.3, 479.0], [18.4, 479.0], [18.5, 479.0], [18.6, 480.0], [18.7, 480.0], [18.8, 484.0], [18.9, 484.0], [19.0, 487.0], [19.1, 493.0], [19.2, 498.0], [19.3, 498.0], [19.4, 500.0], [19.5, 501.0], [19.6, 504.0], [19.7, 504.0], [19.8, 508.0], [19.9, 510.0], [20.0, 512.0], [20.1, 512.0], [20.2, 518.0], [20.3, 518.0], [20.4, 518.0], [20.5, 519.0], [20.6, 519.0], [20.7, 521.0], [20.8, 521.0], [20.9, 523.0], [21.0, 523.0], [21.1, 524.0], [21.2, 524.0], [21.3, 526.0], [21.4, 533.0], [21.5, 535.0], [21.6, 535.0], [21.7, 535.0], [21.8, 536.0], [21.9, 536.0], [22.0, 536.0], [22.1, 536.0], [22.2, 539.0], [22.3, 539.0], [22.4, 542.0], [22.5, 542.0], [22.6, 542.0], [22.7, 542.0], [22.8, 545.0], [22.9, 545.0], [23.0, 545.0], [23.1, 545.0], [23.2, 546.0], [23.3, 547.0], [23.4, 547.0], [23.5, 548.0], [23.6, 548.0], [23.7, 548.0], [23.8, 548.0], [23.9, 550.0], [24.0, 551.0], [24.1, 552.0], [24.2, 552.0], [24.3, 552.0], [24.4, 552.0], [24.5, 552.0], [24.6, 552.0], [24.7, 553.0], [24.8, 553.0], [24.9, 553.0], [25.0, 553.0], [25.1, 553.0], [25.2, 554.0], [25.3, 554.0], [25.4, 554.0], [25.5, 555.0], [25.6, 555.0], [25.7, 555.0], [25.8, 556.0], [25.9, 557.0], [26.0, 557.0], [26.1, 557.0], [26.2, 557.0], [26.3, 558.0], [26.4, 558.0], [26.5, 558.0], [26.6, 559.0], [26.7, 559.0], [26.8, 559.0], [26.9, 559.0], [27.0, 561.0], [27.1, 561.0], [27.2, 561.0], [27.3, 561.0], [27.4, 563.0], [27.5, 564.0], [27.6, 564.0], [27.7, 565.0], [27.8, 565.0], [27.9, 565.0], [28.0, 565.0], [28.1, 565.0], [28.2, 566.0], [28.3, 567.0], [28.4, 567.0], [28.5, 567.0], [28.6, 569.0], [28.7, 569.0], [28.8, 569.0], [28.9, 570.0], [29.0, 570.0], [29.1, 570.0], [29.2, 573.0], [29.3, 573.0], [29.4, 575.0], [29.5, 575.0], [29.6, 577.0], [29.7, 577.0], [29.8, 579.0], [29.9, 579.0], [30.0, 581.0], [30.1, 581.0], [30.2, 581.0], [30.3, 584.0], [30.4, 586.0], [30.5, 587.0], [30.6, 587.0], [30.7, 588.0], [30.8, 588.0], [30.9, 588.0], [31.0, 588.0], [31.1, 589.0], [31.2, 590.0], [31.3, 591.0], [31.4, 591.0], [31.5, 591.0], [31.6, 592.0], [31.7, 592.0], [31.8, 593.0], [31.9, 594.0], [32.0, 595.0], [32.1, 595.0], [32.2, 595.0], [32.3, 597.0], [32.4, 598.0], [32.5, 598.0], [32.6, 599.0], [32.7, 599.0], [32.8, 600.0], [32.9, 600.0], [33.0, 600.0], [33.1, 601.0], [33.2, 602.0], [33.3, 602.0], [33.4, 602.0], [33.5, 604.0], [33.6, 604.0], [33.7, 605.0], [33.8, 606.0], [33.9, 609.0], [34.0, 609.0], [34.1, 610.0], [34.2, 611.0], [34.3, 612.0], [34.4, 612.0], [34.5, 613.0], [34.6, 615.0], [34.7, 615.0], [34.8, 615.0], [34.9, 617.0], [35.0, 622.0], [35.1, 622.0], [35.2, 622.0], [35.3, 624.0], [35.4, 624.0], [35.5, 624.0], [35.6, 626.0], [35.7, 634.0], [35.8, 636.0], [35.9, 636.0], [36.0, 639.0], [36.1, 641.0], [36.2, 642.0], [36.3, 642.0], [36.4, 646.0], [36.5, 646.0], [36.6, 646.0], [36.7, 646.0], [36.8, 647.0], [36.9, 647.0], [37.0, 647.0], [37.1, 653.0], [37.2, 654.0], [37.3, 656.0], [37.4, 656.0], [37.5, 657.0], [37.6, 660.0], [37.7, 661.0], [37.8, 661.0], [37.9, 662.0], [38.0, 666.0], [38.1, 666.0], [38.2, 666.0], [38.3, 667.0], [38.4, 669.0], [38.5, 669.0], [38.6, 669.0], [38.7, 669.0], [38.8, 676.0], [38.9, 676.0], [39.0, 677.0], [39.1, 679.0], [39.2, 684.0], [39.3, 684.0], [39.4, 685.0], [39.5, 686.0], [39.6, 687.0], [39.7, 687.0], [39.8, 690.0], [39.9, 697.0], [40.0, 702.0], [40.1, 702.0], [40.2, 705.0], [40.3, 705.0], [40.4, 705.0], [40.5, 705.0], [40.6, 709.0], [40.7, 709.0], [40.8, 709.0], [40.9, 709.0], [41.0, 711.0], [41.1, 712.0], [41.2, 712.0], [41.3, 714.0], [41.4, 714.0], [41.5, 715.0], [41.6, 715.0], [41.7, 717.0], [41.8, 718.0], [41.9, 718.0], [42.0, 718.0], [42.1, 719.0], [42.2, 722.0], [42.3, 722.0], [42.4, 723.0], [42.5, 726.0], [42.6, 729.0], [42.7, 729.0], [42.8, 731.0], [42.9, 732.0], [43.0, 734.0], [43.1, 734.0], [43.2, 734.0], [43.3, 736.0], [43.4, 736.0], [43.5, 747.0], [43.6, 750.0], [43.7, 752.0], [43.8, 752.0], [43.9, 758.0], [44.0, 767.0], [44.1, 769.0], [44.2, 769.0], [44.3, 771.0], [44.4, 774.0], [44.5, 775.0], [44.6, 775.0], [44.7, 779.0], [44.8, 780.0], [44.9, 781.0], [45.0, 781.0], [45.1, 786.0], [45.2, 788.0], [45.3, 788.0], [45.4, 790.0], [45.5, 802.0], [45.6, 803.0], [45.7, 803.0], [45.8, 804.0], [45.9, 813.0], [46.0, 815.0], [46.1, 815.0], [46.2, 816.0], [46.3, 823.0], [46.4, 826.0], [46.5, 826.0], [46.6, 828.0], [46.7, 828.0], [46.8, 828.0], [46.9, 830.0], [47.0, 835.0], [47.1, 838.0], [47.2, 838.0], [47.3, 840.0], [47.4, 844.0], [47.5, 845.0], [47.6, 845.0], [47.7, 847.0], [47.8, 851.0], [47.9, 860.0], [48.0, 860.0], [48.1, 862.0], [48.2, 867.0], [48.3, 869.0], [48.4, 869.0], [48.5, 869.0], [48.6, 871.0], [48.7, 871.0], [48.8, 873.0], [48.9, 889.0], [49.0, 890.0], [49.1, 890.0], [49.2, 890.0], [49.3, 892.0], [49.4, 893.0], [49.5, 893.0], [49.6, 895.0], [49.7, 898.0], [49.8, 898.0], [49.9, 898.0], [50.0, 898.0], [50.1, 899.0], [50.2, 899.0], [50.3, 904.0], [50.4, 908.0], [50.5, 909.0], [50.6, 909.0], [50.7, 909.0], [50.8, 911.0], [50.9, 919.0], [51.0, 919.0], [51.1, 921.0], [51.2, 925.0], [51.3, 929.0], [51.4, 929.0], [51.5, 931.0], [51.6, 931.0], [51.7, 931.0], [51.8, 931.0], [51.9, 931.0], [52.0, 932.0], [52.1, 932.0], [52.2, 934.0], [52.3, 936.0], [52.4, 937.0], [52.5, 937.0], [52.6, 946.0], [52.7, 947.0], [52.8, 947.0], [52.9, 947.0], [53.0, 947.0], [53.1, 951.0], [53.2, 952.0], [53.3, 952.0], [53.4, 955.0], [53.5, 960.0], [53.6, 960.0], [53.7, 960.0], [53.8, 964.0], [53.9, 965.0], [54.0, 965.0], [54.1, 965.0], [54.2, 968.0], [54.3, 970.0], [54.4, 970.0], [54.5, 978.0], [54.6, 983.0], [54.7, 984.0], [54.8, 984.0], [54.9, 985.0], [55.0, 986.0], [55.1, 986.0], [55.2, 986.0], [55.3, 988.0], [55.4, 993.0], [55.5, 993.0], [55.6, 994.0], [55.7, 996.0], [55.8, 1012.0], [55.9, 1012.0], [56.0, 1014.0], [56.1, 1018.0], [56.2, 1021.0], [56.3, 1021.0], [56.4, 1021.0], [56.5, 1029.0], [56.6, 1038.0], [56.7, 1038.0], [56.8, 1042.0], [56.9, 1047.0], [57.0, 1047.0], [57.1, 1052.0], [57.2, 1053.0], [57.3, 1056.0], [57.4, 1056.0], [57.5, 1060.0], [57.6, 1062.0], [57.7, 1065.0], [57.8, 1065.0], [57.9, 1072.0], [58.0, 1072.0], [58.1, 1073.0], [58.2, 1073.0], [58.3, 1074.0], [58.4, 1075.0], [58.5, 1075.0], [58.6, 1075.0], [58.7, 1077.0], [58.8, 1078.0], [58.9, 1078.0], [59.0, 1078.0], [59.1, 1079.0], [59.2, 1079.0], [59.3, 1079.0], [59.4, 1081.0], [59.5, 1081.0], [59.6, 1081.0], [59.7, 1081.0], [59.8, 1082.0], [59.9, 1085.0], [60.0, 1086.0], [60.1, 1086.0], [60.2, 1088.0], [60.3, 1089.0], [60.4, 1089.0], [60.5, 1089.0], [60.6, 1090.0], [60.7, 1090.0], [60.8, 1090.0], [60.9, 1091.0], [61.0, 1091.0], [61.1, 1091.0], [61.2, 1091.0], [61.3, 1092.0], [61.4, 1093.0], [61.5, 1094.0], [61.6, 1094.0], [61.7, 1095.0], [61.8, 1096.0], [61.9, 1096.0], [62.0, 1096.0], [62.1, 1097.0], [62.2, 1098.0], [62.3, 1098.0], [62.4, 1102.0], [62.5, 1102.0], [62.6, 1103.0], [62.7, 1103.0], [62.8, 1103.0], [62.9, 1103.0], [63.0, 1105.0], [63.1, 1105.0], [63.2, 1106.0], [63.3, 1106.0], [63.4, 1106.0], [63.5, 1107.0], [63.6, 1107.0], [63.7, 1108.0], [63.8, 1108.0], [63.9, 1111.0], [64.0, 1111.0], [64.1, 1111.0], [64.2, 1111.0], [64.3, 1112.0], [64.4, 1113.0], [64.5, 1113.0], [64.6, 1113.0], [64.7, 1115.0], [64.8, 1115.0], [64.9, 1116.0], [65.0, 1116.0], [65.1, 1116.0], [65.2, 1118.0], [65.3, 1118.0], [65.4, 1118.0], [65.5, 1119.0], [65.6, 1121.0], [65.7, 1121.0], [65.8, 1121.0], [65.9, 1122.0], [66.0, 1123.0], [66.1, 1123.0], [66.2, 1124.0], [66.3, 1130.0], [66.4, 1132.0], [66.5, 1132.0], [66.6, 1133.0], [66.7, 1134.0], [66.8, 1134.0], [66.9, 1134.0], [67.0, 1135.0], [67.1, 1135.0], [67.2, 1135.0], [67.3, 1135.0], [67.4, 1135.0], [67.5, 1137.0], [67.6, 1137.0], [67.7, 1137.0], [67.8, 1137.0], [67.9, 1139.0], [68.0, 1139.0], [68.1, 1139.0], [68.2, 1140.0], [68.3, 1140.0], [68.4, 1140.0], [68.5, 1140.0], [68.6, 1140.0], [68.7, 1140.0], [68.8, 1141.0], [68.9, 1141.0], [69.0, 1146.0], [69.1, 1146.0], [69.2, 1148.0], [69.3, 1149.0], [69.4, 1151.0], [69.5, 1151.0], [69.6, 1152.0], [69.7, 1152.0], [69.8, 1154.0], [69.9, 1154.0], [70.0, 1154.0], [70.1, 1154.0], [70.2, 1154.0], [70.3, 1156.0], [70.4, 1156.0], [70.5, 1157.0], [70.6, 1157.0], [70.7, 1158.0], [70.8, 1158.0], [70.9, 1158.0], [71.0, 1158.0], [71.1, 1159.0], [71.2, 1160.0], [71.3, 1160.0], [71.4, 1160.0], [71.5, 1160.0], [71.6, 1161.0], [71.7, 1161.0], [71.8, 1162.0], [71.9, 1162.0], [72.0, 1163.0], [72.1, 1163.0], [72.2, 1164.0], [72.3, 1164.0], [72.4, 1165.0], [72.5, 1165.0], [72.6, 1165.0], [72.7, 1166.0], [72.8, 1167.0], [72.9, 1167.0], [73.0, 1168.0], [73.1, 1169.0], [73.2, 1169.0], [73.3, 1169.0], [73.4, 1173.0], [73.5, 1173.0], [73.6, 1173.0], [73.7, 1173.0], [73.8, 1174.0], [73.9, 1174.0], [74.0, 1174.0], [74.1, 1175.0], [74.2, 1175.0], [74.3, 1177.0], [74.4, 1177.0], [74.5, 1177.0], [74.6, 1178.0], [74.7, 1178.0], [74.8, 1178.0], [74.9, 1180.0], [75.0, 1180.0], [75.1, 1180.0], [75.2, 1181.0], [75.3, 1181.0], [75.4, 1183.0], [75.5, 1183.0], [75.6, 1183.0], [75.7, 1183.0], [75.8, 1184.0], [75.9, 1184.0], [76.0, 1184.0], [76.1, 1186.0], [76.2, 1186.0], [76.3, 1186.0], [76.4, 1186.0], [76.5, 1186.0], [76.6, 1187.0], [76.7, 1187.0], [76.8, 1189.0], [76.9, 1190.0], [77.0, 1190.0], [77.1, 1191.0], [77.2, 1191.0], [77.3, 1192.0], [77.4, 1192.0], [77.5, 1192.0], [77.6, 1192.0], [77.7, 1192.0], [77.8, 1192.0], [77.9, 1193.0], [78.0, 1193.0], [78.1, 1194.0], [78.2, 1194.0], [78.3, 1197.0], [78.4, 1198.0], [78.5, 1198.0], [78.6, 1198.0], [78.7, 1199.0], [78.8, 1199.0], [78.9, 1199.0], [79.0, 1200.0], [79.1, 1200.0], [79.2, 1201.0], [79.3, 1201.0], [79.4, 1202.0], [79.5, 1202.0], [79.6, 1202.0], [79.7, 1202.0], [79.8, 1202.0], [79.9, 1204.0], [80.0, 1204.0], [80.1, 1204.0], [80.2, 1208.0], [80.3, 1209.0], [80.4, 1209.0], [80.5, 1211.0], [80.6, 1212.0], [80.7, 1213.0], [80.8, 1213.0], [80.9, 1213.0], [81.0, 1214.0], [81.1, 1214.0], [81.2, 1214.0], [81.3, 1215.0], [81.4, 1217.0], [81.5, 1218.0], [81.6, 1218.0], [81.7, 1218.0], [81.8, 1218.0], [81.9, 1218.0], [82.0, 1218.0], [82.1, 1220.0], [82.2, 1223.0], [82.3, 1223.0], [82.4, 1223.0], [82.5, 1224.0], [82.6, 1226.0], [82.7, 1226.0], [82.8, 1226.0], [82.9, 1227.0], [83.0, 1230.0], [83.1, 1230.0], [83.2, 1230.0], [83.3, 1230.0], [83.4, 1230.0], [83.5, 1232.0], [83.6, 1232.0], [83.7, 1234.0], [83.8, 1234.0], [83.9, 1234.0], [84.0, 1235.0], [84.1, 1237.0], [84.2, 1237.0], [84.3, 1237.0], [84.4, 1238.0], [84.5, 1240.0], [84.6, 1240.0], [84.7, 1240.0], [84.8, 1240.0], [84.9, 1246.0], [85.0, 1246.0], [85.1, 1247.0], [85.2, 1248.0], [85.3, 1248.0], [85.4, 1251.0], [85.5, 1254.0], [85.6, 1256.0], [85.7, 1256.0], [85.8, 1257.0], [85.9, 1258.0], [86.0, 1259.0], [86.1, 1259.0], [86.2, 1260.0], [86.3, 1262.0], [86.4, 1262.0], [86.5, 1262.0], [86.6, 1262.0], [86.7, 1262.0], [86.8, 1262.0], [86.9, 1262.0], [87.0, 1264.0], [87.1, 1265.0], [87.2, 1265.0], [87.3, 1266.0], [87.4, 1267.0], [87.5, 1269.0], [87.6, 1269.0], [87.7, 1274.0], [87.8, 1274.0], [87.9, 1274.0], [88.0, 1274.0], [88.1, 1276.0], [88.2, 1277.0], [88.3, 1278.0], [88.4, 1278.0], [88.5, 1278.0], [88.6, 1283.0], [88.7, 1283.0], [88.8, 1285.0], [88.9, 1288.0], [89.0, 1288.0], [89.1, 1288.0], [89.2, 1289.0], [89.3, 1290.0], [89.4, 1292.0], [89.5, 1292.0], [89.6, 1293.0], [89.7, 1294.0], [89.8, 1295.0], [89.9, 1295.0], [90.0, 1301.0], [90.1, 1302.0], [90.2, 1302.0], [90.3, 1304.0], [90.4, 1305.0], [90.5, 1305.0], [90.6, 1305.0], [90.7, 1306.0], [90.8, 1307.0], [90.9, 1307.0], [91.0, 1307.0], [91.1, 1310.0], [91.2, 1312.0], [91.3, 1313.0], [91.4, 1313.0], [91.5, 1314.0], [91.6, 1315.0], [91.7, 1315.0], [91.8, 1318.0], [91.9, 1318.0], [92.0, 1319.0], [92.1, 1319.0], [92.2, 1327.0], [92.3, 1332.0], [92.4, 1333.0], [92.5, 1333.0], [92.6, 1333.0], [92.7, 1336.0], [92.8, 1338.0], [92.9, 1338.0], [93.0, 1340.0], [93.1, 1347.0], [93.2, 1347.0], [93.3, 1347.0], [93.4, 1349.0], [93.5, 1351.0], [93.6, 1351.0], [93.7, 1356.0], [93.8, 1359.0], [93.9, 1360.0], [94.0, 1360.0], [94.1, 1364.0], [94.2, 1366.0], [94.3, 1369.0], [94.4, 1369.0], [94.5, 1392.0], [94.6, 1397.0], [94.7, 1400.0], [94.8, 1400.0], [94.9, 1410.0], [95.0, 1418.0], [95.1, 1418.0], [95.2, 1428.0], [95.3, 1442.0], [95.4, 1454.0], [95.5, 1454.0], [95.6, 1460.0], [95.7, 1462.0], [95.8, 1486.0], [95.9, 1486.0], [96.0, 1505.0], [96.1, 1517.0], [96.2, 1522.0], [96.3, 1522.0], [96.4, 1523.0], [96.5, 1533.0], [96.6, 1549.0], [96.7, 1549.0], [96.8, 1590.0], [96.9, 1594.0], [97.0, 1594.0], [97.1, 1656.0], [97.2, 1663.0], [97.3, 1722.0], [97.4, 1722.0], [97.5, 1776.0], [97.6, 1792.0], [97.7, 1813.0], [97.8, 1813.0], [97.9, 1819.0], [98.0, 1908.0], [98.1, 2015.0], [98.2, 2015.0], [98.3, 2026.0], [98.4, 2106.0], [98.5, 2106.0], [98.6, 2129.0], [98.7, 2165.0], [98.8, 2167.0], [98.9, 2167.0], [99.0, 2244.0], [99.1, 2278.0], [99.2, 2331.0], [99.3, 2331.0], [99.4, 2517.0], [99.5, 2573.0], [99.6, 2834.0], [99.7, 2834.0], [99.8, 3063.0], [99.9, 3238.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 122.0, "series": [{"data": [[600.0, 53.0], [700.0, 40.0], [800.0, 35.0], [900.0, 41.0], [1000.0, 48.0], [1100.0, 122.0], [1200.0, 81.0], [1300.0, 35.0], [1400.0, 9.0], [1500.0, 8.0], [100.0, 20.0], [1600.0, 2.0], [1700.0, 3.0], [1800.0, 2.0], [1900.0, 1.0], [2000.0, 2.0], [2100.0, 4.0], [2200.0, 2.0], [2300.0, 1.0], [2500.0, 2.0], [2800.0, 1.0], [3000.0, 1.0], [200.0, 38.0], [3200.0, 1.0], [300.0, 38.0], [400.0, 46.0], [500.0, 99.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 30.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 562.0, "series": [{"data": [[0.0, 143.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 562.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 30.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.708609271523178, "minX": 1.60249662E12, "maxY": 10.0, "series": [{"data": [[1.60249668E12, 9.708609271523178], [1.60249662E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249668E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 423.0, "minX": 1.0, "maxY": 1274.0, "series": [{"data": [[4.0, 524.0], [2.0, 521.0], [1.0, 519.0], [9.0, 423.0], [10.0, 883.1556473829205], [5.0, 542.0], [6.0, 1274.0], [3.0, 889.0], [7.0, 536.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 880.0299319727893]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1156.35, "minX": 1.60249662E12, "maxY": 1438521.0833333333, "series": [{"data": [[1.60249668E12, 298324.2833333333], [1.60249662E12, 1438521.0833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60249668E12, 1156.35], [1.60249662E12, 4513.683333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249668E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 840.7615894039734, "minX": 1.60249662E12, "maxY": 890.1832191780823, "series": [{"data": [[1.60249668E12, 840.7615894039734], [1.60249662E12, 890.1832191780823]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249668E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 839.6953642384105, "minX": 1.60249662E12, "maxY": 889.018835616438, "series": [{"data": [[1.60249668E12, 839.6953642384105], [1.60249662E12, 889.018835616438]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249668E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.08609271523178808, "minX": 1.60249662E12, "maxY": 0.15924657534246586, "series": [{"data": [[1.60249668E12, 0.08609271523178808], [1.60249662E12, 0.15924657534246586]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249668E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 138.0, "minX": 1.60249662E12, "maxY": 3238.0, "series": [{"data": [[1.60249668E12, 2834.0], [1.60249662E12, 3238.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60249668E12, 145.7839995288849], [1.60249662E12, 156.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60249668E12, 147.56240018844605], [1.60249662E12, 156.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60249668E12, 146.77199976444246], [1.60249662E12, 156.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60249668E12, 141.0], [1.60249662E12, 138.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60249668E12, 873.0], [1.60249662E12, 916.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249668E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 449.0, "minX": 1.0, "maxY": 1155.0, "series": [{"data": [[8.0, 1155.0], [9.0, 1141.0], [10.0, 1143.0], [11.0, 1105.5], [3.0, 714.0], [12.0, 845.5], [13.0, 731.0], [14.0, 729.0], [15.0, 931.0], [1.0, 803.0], [16.0, 483.5], [17.0, 552.5], [19.0, 449.0], [20.0, 529.0], [21.0, 476.0], [6.0, 988.0], [7.0, 1101.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 449.0, "minX": 1.0, "maxY": 1153.5, "series": [{"data": [[8.0, 1153.5], [9.0, 1140.0], [10.0, 1141.5], [11.0, 1104.5], [3.0, 714.0], [12.0, 843.5], [13.0, 727.0], [14.0, 728.0], [15.0, 931.0], [1.0, 797.0], [16.0, 483.5], [17.0, 552.0], [19.0, 449.0], [20.0, 528.5], [21.0, 475.0], [6.0, 985.0], [7.0, 1100.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.35, "minX": 1.60249662E12, "maxY": 9.9, "series": [{"data": [[1.60249668E12, 2.35], [1.60249662E12, 9.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249668E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.5166666666666666, "minX": 1.60249662E12, "maxY": 9.733333333333333, "series": [{"data": [[1.60249668E12, 2.5166666666666666], [1.60249662E12, 9.733333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249668E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.5166666666666666, "minX": 1.60249662E12, "maxY": 9.733333333333333, "series": [{"data": [[1.60249668E12, 2.5166666666666666], [1.60249662E12, 9.733333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249668E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.5166666666666666, "minX": 1.60249662E12, "maxY": 9.733333333333333, "series": [{"data": [[1.60249668E12, 2.5166666666666666], [1.60249662E12, 9.733333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249668E12, "title": "Total Transactions Per Second"}},
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

