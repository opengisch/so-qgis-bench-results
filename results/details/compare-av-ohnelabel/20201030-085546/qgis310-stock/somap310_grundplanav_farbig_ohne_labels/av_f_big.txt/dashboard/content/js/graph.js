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
        data: {"result": {"minY": 139.0, "minX": 0.0, "maxY": 2964.0, "series": [{"data": [[0.0, 139.0], [0.1, 139.0], [0.2, 139.0], [0.3, 148.0], [0.4, 148.0], [0.5, 153.0], [0.6, 154.0], [0.7, 157.0], [0.8, 157.0], [0.9, 158.0], [1.0, 159.0], [1.1, 160.0], [1.2, 160.0], [1.3, 160.0], [1.4, 168.0], [1.5, 172.0], [1.6, 172.0], [1.7, 175.0], [1.8, 179.0], [1.9, 179.0], [2.0, 183.0], [2.1, 185.0], [2.2, 193.0], [2.3, 193.0], [2.4, 194.0], [2.5, 221.0], [2.6, 224.0], [2.7, 224.0], [2.8, 225.0], [2.9, 228.0], [3.0, 229.0], [3.1, 229.0], [3.2, 234.0], [3.3, 235.0], [3.4, 235.0], [3.5, 236.0], [3.6, 236.0], [3.7, 239.0], [3.8, 239.0], [3.9, 240.0], [4.0, 242.0], [4.1, 244.0], [4.2, 244.0], [4.3, 247.0], [4.4, 248.0], [4.5, 248.0], [4.6, 248.0], [4.7, 248.0], [4.8, 250.0], [4.9, 251.0], [5.0, 251.0], [5.1, 253.0], [5.2, 254.0], [5.3, 254.0], [5.4, 255.0], [5.5, 257.0], [5.6, 258.0], [5.7, 258.0], [5.8, 259.0], [5.9, 259.0], [6.0, 261.0], [6.1, 261.0], [6.2, 264.0], [6.3, 264.0], [6.4, 268.0], [6.5, 268.0], [6.6, 273.0], [6.7, 276.0], [6.8, 276.0], [6.9, 277.0], [7.0, 285.0], [7.1, 288.0], [7.2, 288.0], [7.3, 292.0], [7.4, 294.0], [7.5, 295.0], [7.6, 295.0], [7.7, 295.0], [7.8, 299.0], [7.9, 300.0], [8.0, 300.0], [8.1, 300.0], [8.2, 304.0], [8.3, 312.0], [8.4, 312.0], [8.5, 319.0], [8.6, 319.0], [8.7, 319.0], [8.8, 324.0], [8.9, 325.0], [9.0, 326.0], [9.1, 326.0], [9.2, 327.0], [9.3, 329.0], [9.4, 331.0], [9.5, 331.0], [9.6, 333.0], [9.7, 334.0], [9.8, 336.0], [9.9, 336.0], [10.0, 336.0], [10.1, 337.0], [10.2, 337.0], [10.3, 338.0], [10.4, 338.0], [10.5, 339.0], [10.6, 339.0], [10.7, 342.0], [10.8, 345.0], [10.9, 345.0], [11.0, 345.0], [11.1, 346.0], [11.2, 348.0], [11.3, 348.0], [11.4, 348.0], [11.5, 349.0], [11.6, 351.0], [11.7, 351.0], [11.8, 358.0], [11.9, 370.0], [12.0, 372.0], [12.1, 372.0], [12.2, 377.0], [12.3, 378.0], [12.4, 382.0], [12.5, 382.0], [12.6, 388.0], [12.7, 390.0], [12.8, 392.0], [12.9, 392.0], [13.0, 401.0], [13.1, 402.0], [13.2, 402.0], [13.3, 402.0], [13.4, 408.0], [13.5, 413.0], [13.6, 413.0], [13.7, 415.0], [13.8, 418.0], [13.9, 422.0], [14.0, 422.0], [14.1, 426.0], [14.2, 426.0], [14.3, 430.0], [14.4, 430.0], [14.5, 433.0], [14.6, 437.0], [14.7, 438.0], [14.8, 438.0], [14.9, 443.0], [15.0, 444.0], [15.1, 444.0], [15.2, 449.0], [15.3, 449.0], [15.4, 456.0], [15.5, 456.0], [15.6, 462.0], [15.7, 463.0], [15.8, 467.0], [15.9, 467.0], [16.0, 468.0], [16.1, 473.0], [16.2, 473.0], [16.3, 473.0], [16.4, 475.0], [16.5, 479.0], [16.6, 479.0], [16.7, 479.0], [16.8, 480.0], [16.9, 480.0], [17.0, 480.0], [17.1, 481.0], [17.2, 485.0], [17.3, 487.0], [17.4, 487.0], [17.5, 488.0], [17.6, 492.0], [17.7, 495.0], [17.8, 495.0], [17.9, 497.0], [18.0, 498.0], [18.1, 498.0], [18.2, 498.0], [18.3, 499.0], [18.4, 500.0], [18.5, 500.0], [18.6, 503.0], [18.7, 503.0], [18.8, 504.0], [18.9, 504.0], [19.0, 506.0], [19.1, 507.0], [19.2, 508.0], [19.3, 508.0], [19.4, 509.0], [19.5, 510.0], [19.6, 510.0], [19.7, 510.0], [19.8, 511.0], [19.9, 513.0], [20.0, 514.0], [20.1, 514.0], [20.2, 514.0], [20.3, 515.0], [20.4, 515.0], [20.5, 516.0], [20.6, 517.0], [20.7, 518.0], [20.8, 518.0], [20.9, 518.0], [21.0, 518.0], [21.1, 519.0], [21.2, 519.0], [21.3, 519.0], [21.4, 520.0], [21.5, 521.0], [21.6, 521.0], [21.7, 522.0], [21.8, 522.0], [21.9, 522.0], [22.0, 524.0], [22.1, 524.0], [22.2, 525.0], [22.3, 525.0], [22.4, 525.0], [22.5, 528.0], [22.6, 530.0], [22.7, 530.0], [22.8, 530.0], [22.9, 530.0], [23.0, 531.0], [23.1, 531.0], [23.2, 531.0], [23.3, 532.0], [23.4, 532.0], [23.5, 533.0], [23.6, 533.0], [23.7, 534.0], [23.8, 534.0], [23.9, 536.0], [24.0, 536.0], [24.1, 537.0], [24.2, 537.0], [24.3, 538.0], [24.4, 538.0], [24.5, 539.0], [24.6, 539.0], [24.7, 539.0], [24.8, 540.0], [24.9, 541.0], [25.0, 541.0], [25.1, 542.0], [25.2, 543.0], [25.3, 543.0], [25.4, 543.0], [25.5, 543.0], [25.6, 544.0], [25.7, 544.0], [25.8, 544.0], [25.9, 545.0], [26.0, 545.0], [26.1, 545.0], [26.2, 545.0], [26.3, 545.0], [26.4, 546.0], [26.5, 546.0], [26.6, 546.0], [26.7, 547.0], [26.8, 547.0], [26.9, 547.0], [27.0, 547.0], [27.1, 548.0], [27.2, 548.0], [27.3, 548.0], [27.4, 549.0], [27.5, 550.0], [27.6, 550.0], [27.7, 550.0], [27.8, 553.0], [27.9, 553.0], [28.0, 553.0], [28.1, 554.0], [28.2, 554.0], [28.3, 555.0], [28.4, 555.0], [28.5, 556.0], [28.6, 557.0], [28.7, 557.0], [28.8, 557.0], [28.9, 559.0], [29.0, 560.0], [29.1, 560.0], [29.2, 562.0], [29.3, 563.0], [29.4, 563.0], [29.5, 563.0], [29.6, 563.0], [29.7, 565.0], [29.8, 567.0], [29.9, 567.0], [30.0, 567.0], [30.1, 568.0], [30.2, 568.0], [30.3, 568.0], [30.4, 570.0], [30.5, 570.0], [30.6, 570.0], [30.7, 570.0], [30.8, 571.0], [30.9, 571.0], [31.0, 571.0], [31.1, 571.0], [31.2, 572.0], [31.3, 572.0], [31.4, 572.0], [31.5, 575.0], [31.6, 576.0], [31.7, 576.0], [31.8, 576.0], [31.9, 576.0], [32.0, 578.0], [32.1, 578.0], [32.2, 579.0], [32.3, 579.0], [32.4, 580.0], [32.5, 580.0], [32.6, 580.0], [32.7, 580.0], [32.8, 582.0], [32.9, 582.0], [33.0, 583.0], [33.1, 586.0], [33.2, 586.0], [33.3, 586.0], [33.4, 587.0], [33.5, 587.0], [33.6, 587.0], [33.7, 588.0], [33.8, 588.0], [33.9, 589.0], [34.0, 589.0], [34.1, 591.0], [34.2, 592.0], [34.3, 593.0], [34.4, 593.0], [34.5, 594.0], [34.6, 595.0], [34.7, 597.0], [34.8, 597.0], [34.9, 599.0], [35.0, 601.0], [35.1, 601.0], [35.2, 601.0], [35.3, 603.0], [35.4, 603.0], [35.5, 603.0], [35.6, 605.0], [35.7, 606.0], [35.8, 606.0], [35.9, 606.0], [36.0, 607.0], [36.1, 609.0], [36.2, 609.0], [36.3, 609.0], [36.4, 612.0], [36.5, 612.0], [36.6, 613.0], [36.7, 613.0], [36.8, 614.0], [36.9, 615.0], [37.0, 615.0], [37.1, 615.0], [37.2, 615.0], [37.3, 616.0], [37.4, 616.0], [37.5, 617.0], [37.6, 617.0], [37.7, 619.0], [37.8, 619.0], [37.9, 621.0], [38.0, 623.0], [38.1, 626.0], [38.2, 626.0], [38.3, 631.0], [38.4, 631.0], [38.5, 631.0], [38.6, 632.0], [38.7, 632.0], [38.8, 637.0], [38.9, 637.0], [39.0, 641.0], [39.1, 647.0], [39.2, 647.0], [39.3, 647.0], [39.4, 648.0], [39.5, 649.0], [39.6, 650.0], [39.7, 650.0], [39.8, 650.0], [39.9, 651.0], [40.0, 652.0], [40.1, 652.0], [40.2, 653.0], [40.3, 656.0], [40.4, 656.0], [40.5, 658.0], [40.6, 672.0], [40.7, 674.0], [40.8, 674.0], [40.9, 675.0], [41.0, 678.0], [41.1, 678.0], [41.2, 678.0], [41.3, 680.0], [41.4, 680.0], [41.5, 681.0], [41.6, 681.0], [41.7, 685.0], [41.8, 687.0], [41.9, 687.0], [42.0, 691.0], [42.1, 691.0], [42.2, 692.0], [42.3, 692.0], [42.4, 695.0], [42.5, 699.0], [42.6, 699.0], [42.7, 699.0], [42.8, 704.0], [42.9, 709.0], [43.0, 710.0], [43.1, 710.0], [43.2, 713.0], [43.3, 714.0], [43.4, 714.0], [43.5, 719.0], [43.6, 722.0], [43.7, 722.0], [43.8, 722.0], [43.9, 725.0], [44.0, 727.0], [44.1, 729.0], [44.2, 729.0], [44.3, 731.0], [44.4, 737.0], [44.5, 739.0], [44.6, 739.0], [44.7, 739.0], [44.8, 745.0], [44.9, 746.0], [45.0, 746.0], [45.1, 746.0], [45.2, 747.0], [45.3, 747.0], [45.4, 749.0], [45.5, 754.0], [45.6, 757.0], [45.7, 757.0], [45.8, 759.0], [45.9, 761.0], [46.0, 761.0], [46.1, 761.0], [46.2, 763.0], [46.3, 767.0], [46.4, 770.0], [46.5, 770.0], [46.6, 771.0], [46.7, 772.0], [46.8, 772.0], [46.9, 772.0], [47.0, 776.0], [47.1, 779.0], [47.2, 779.0], [47.3, 783.0], [47.4, 790.0], [47.5, 792.0], [47.6, 792.0], [47.7, 793.0], [47.8, 796.0], [47.9, 799.0], [48.0, 799.0], [48.1, 799.0], [48.2, 802.0], [48.3, 813.0], [48.4, 813.0], [48.5, 816.0], [48.6, 819.0], [48.7, 819.0], [48.8, 825.0], [48.9, 826.0], [49.0, 828.0], [49.1, 828.0], [49.2, 833.0], [49.3, 834.0], [49.4, 835.0], [49.5, 835.0], [49.6, 835.0], [49.7, 839.0], [49.8, 839.0], [49.9, 839.0], [50.0, 844.0], [50.1, 845.0], [50.2, 845.0], [50.3, 845.0], [50.4, 848.0], [50.5, 852.0], [50.6, 852.0], [50.7, 853.0], [50.8, 858.0], [50.9, 859.0], [51.0, 859.0], [51.1, 859.0], [51.2, 860.0], [51.3, 860.0], [51.4, 860.0], [51.5, 861.0], [51.6, 861.0], [51.7, 861.0], [51.8, 862.0], [51.9, 867.0], [52.0, 870.0], [52.1, 870.0], [52.2, 871.0], [52.3, 874.0], [52.4, 876.0], [52.5, 876.0], [52.6, 876.0], [52.7, 880.0], [52.8, 887.0], [52.9, 887.0], [53.0, 889.0], [53.1, 891.0], [53.2, 897.0], [53.3, 897.0], [53.4, 898.0], [53.5, 898.0], [53.6, 898.0], [53.7, 902.0], [53.8, 911.0], [53.9, 914.0], [54.0, 914.0], [54.1, 917.0], [54.2, 918.0], [54.3, 918.0], [54.4, 918.0], [54.5, 919.0], [54.6, 931.0], [54.7, 934.0], [54.8, 934.0], [54.9, 938.0], [55.0, 942.0], [55.1, 942.0], [55.2, 943.0], [55.3, 948.0], [55.4, 954.0], [55.5, 954.0], [55.6, 958.0], [55.7, 958.0], [55.8, 958.0], [55.9, 958.0], [56.0, 959.0], [56.1, 960.0], [56.2, 965.0], [56.3, 965.0], [56.4, 965.0], [56.5, 968.0], [56.6, 969.0], [56.7, 969.0], [56.8, 977.0], [56.9, 981.0], [57.0, 981.0], [57.1, 983.0], [57.2, 989.0], [57.3, 990.0], [57.4, 990.0], [57.5, 991.0], [57.6, 991.0], [57.7, 994.0], [57.8, 994.0], [57.9, 998.0], [58.0, 999.0], [58.1, 1000.0], [58.2, 1000.0], [58.3, 1001.0], [58.4, 1001.0], [58.5, 1001.0], [58.6, 1002.0], [58.7, 1002.0], [58.8, 1002.0], [58.9, 1002.0], [59.0, 1002.0], [59.1, 1003.0], [59.2, 1016.0], [59.3, 1016.0], [59.4, 1016.0], [59.5, 1017.0], [59.6, 1019.0], [59.7, 1019.0], [59.8, 1019.0], [59.9, 1020.0], [60.0, 1022.0], [60.1, 1022.0], [60.2, 1023.0], [60.3, 1027.0], [60.4, 1027.0], [60.5, 1028.0], [60.6, 1028.0], [60.7, 1034.0], [60.8, 1034.0], [60.9, 1034.0], [61.0, 1034.0], [61.1, 1035.0], [61.2, 1035.0], [61.3, 1035.0], [61.4, 1038.0], [61.5, 1038.0], [61.6, 1038.0], [61.7, 1039.0], [61.8, 1039.0], [61.9, 1039.0], [62.0, 1039.0], [62.1, 1040.0], [62.2, 1040.0], [62.3, 1040.0], [62.4, 1044.0], [62.5, 1047.0], [62.6, 1047.0], [62.7, 1047.0], [62.8, 1047.0], [62.9, 1048.0], [63.0, 1050.0], [63.1, 1050.0], [63.2, 1051.0], [63.3, 1051.0], [63.4, 1051.0], [63.5, 1053.0], [63.6, 1055.0], [63.7, 1055.0], [63.8, 1055.0], [63.9, 1057.0], [64.0, 1058.0], [64.1, 1059.0], [64.2, 1059.0], [64.3, 1060.0], [64.4, 1060.0], [64.5, 1060.0], [64.6, 1060.0], [64.7, 1062.0], [64.8, 1063.0], [64.9, 1063.0], [65.0, 1063.0], [65.1, 1064.0], [65.2, 1064.0], [65.3, 1064.0], [65.4, 1064.0], [65.5, 1065.0], [65.6, 1065.0], [65.7, 1065.0], [65.8, 1065.0], [65.9, 1068.0], [66.0, 1068.0], [66.1, 1068.0], [66.2, 1070.0], [66.3, 1072.0], [66.4, 1073.0], [66.5, 1073.0], [66.6, 1075.0], [66.7, 1075.0], [66.8, 1075.0], [66.9, 1075.0], [67.0, 1080.0], [67.1, 1082.0], [67.2, 1082.0], [67.3, 1082.0], [67.4, 1083.0], [67.5, 1083.0], [67.6, 1083.0], [67.7, 1084.0], [67.8, 1084.0], [67.9, 1085.0], [68.0, 1085.0], [68.1, 1085.0], [68.2, 1085.0], [68.3, 1086.0], [68.4, 1086.0], [68.5, 1086.0], [68.6, 1086.0], [68.7, 1086.0], [68.8, 1088.0], [68.9, 1089.0], [69.0, 1092.0], [69.1, 1092.0], [69.2, 1092.0], [69.3, 1093.0], [69.4, 1093.0], [69.5, 1093.0], [69.6, 1094.0], [69.7, 1094.0], [69.8, 1096.0], [69.9, 1096.0], [70.0, 1098.0], [70.1, 1099.0], [70.2, 1099.0], [70.3, 1099.0], [70.4, 1102.0], [70.5, 1103.0], [70.6, 1103.0], [70.7, 1105.0], [70.8, 1105.0], [70.9, 1106.0], [71.0, 1106.0], [71.1, 1106.0], [71.2, 1107.0], [71.3, 1107.0], [71.4, 1107.0], [71.5, 1111.0], [71.6, 1111.0], [71.7, 1111.0], [71.8, 1112.0], [71.9, 1112.0], [72.0, 1112.0], [72.1, 1112.0], [72.2, 1112.0], [72.3, 1113.0], [72.4, 1113.0], [72.5, 1113.0], [72.6, 1113.0], [72.7, 1114.0], [72.8, 1115.0], [72.9, 1115.0], [73.0, 1115.0], [73.1, 1116.0], [73.2, 1117.0], [73.3, 1117.0], [73.4, 1118.0], [73.5, 1118.0], [73.6, 1118.0], [73.7, 1123.0], [73.8, 1124.0], [73.9, 1124.0], [74.0, 1124.0], [74.1, 1124.0], [74.2, 1124.0], [74.3, 1125.0], [74.4, 1125.0], [74.5, 1125.0], [74.6, 1126.0], [74.7, 1126.0], [74.8, 1126.0], [74.9, 1126.0], [75.0, 1129.0], [75.1, 1129.0], [75.2, 1130.0], [75.3, 1131.0], [75.4, 1131.0], [75.5, 1131.0], [75.6, 1133.0], [75.7, 1134.0], [75.8, 1135.0], [75.9, 1135.0], [76.0, 1135.0], [76.1, 1135.0], [76.2, 1136.0], [76.3, 1136.0], [76.4, 1137.0], [76.5, 1137.0], [76.6, 1137.0], [76.7, 1137.0], [76.8, 1140.0], [76.9, 1140.0], [77.0, 1140.0], [77.1, 1140.0], [77.2, 1144.0], [77.3, 1145.0], [77.4, 1145.0], [77.5, 1146.0], [77.6, 1147.0], [77.7, 1147.0], [77.8, 1147.0], [77.9, 1147.0], [78.0, 1148.0], [78.1, 1148.0], [78.2, 1148.0], [78.3, 1149.0], [78.4, 1153.0], [78.5, 1153.0], [78.6, 1153.0], [78.7, 1153.0], [78.8, 1154.0], [78.9, 1154.0], [79.0, 1155.0], [79.1, 1155.0], [79.2, 1156.0], [79.3, 1156.0], [79.4, 1156.0], [79.5, 1159.0], [79.6, 1161.0], [79.7, 1161.0], [79.8, 1161.0], [79.9, 1161.0], [80.0, 1162.0], [80.1, 1162.0], [80.2, 1163.0], [80.3, 1163.0], [80.4, 1163.0], [80.5, 1165.0], [80.6, 1166.0], [80.7, 1167.0], [80.8, 1167.0], [80.9, 1167.0], [81.0, 1168.0], [81.1, 1169.0], [81.2, 1169.0], [81.3, 1171.0], [81.4, 1172.0], [81.5, 1173.0], [81.6, 1173.0], [81.7, 1175.0], [81.8, 1175.0], [81.9, 1175.0], [82.0, 1176.0], [82.1, 1177.0], [82.2, 1177.0], [82.3, 1177.0], [82.4, 1177.0], [82.5, 1178.0], [82.6, 1178.0], [82.7, 1178.0], [82.8, 1182.0], [82.9, 1183.0], [83.0, 1186.0], [83.1, 1186.0], [83.2, 1187.0], [83.3, 1189.0], [83.4, 1189.0], [83.5, 1189.0], [83.6, 1194.0], [83.7, 1197.0], [83.8, 1197.0], [83.9, 1197.0], [84.0, 1197.0], [84.1, 1198.0], [84.2, 1198.0], [84.3, 1198.0], [84.4, 1203.0], [84.5, 1204.0], [84.6, 1204.0], [84.7, 1205.0], [84.8, 1206.0], [84.9, 1207.0], [85.0, 1207.0], [85.1, 1208.0], [85.2, 1208.0], [85.3, 1208.0], [85.4, 1208.0], [85.5, 1208.0], [85.6, 1210.0], [85.7, 1210.0], [85.8, 1211.0], [85.9, 1214.0], [86.0, 1215.0], [86.1, 1215.0], [86.2, 1217.0], [86.3, 1218.0], [86.4, 1219.0], [86.5, 1219.0], [86.6, 1221.0], [86.7, 1223.0], [86.8, 1223.0], [86.9, 1224.0], [87.0, 1224.0], [87.1, 1225.0], [87.2, 1225.0], [87.3, 1226.0], [87.4, 1226.0], [87.5, 1235.0], [87.6, 1235.0], [87.7, 1238.0], [87.8, 1238.0], [87.9, 1239.0], [88.0, 1239.0], [88.1, 1240.0], [88.2, 1242.0], [88.3, 1244.0], [88.4, 1244.0], [88.5, 1245.0], [88.6, 1249.0], [88.7, 1249.0], [88.8, 1249.0], [88.9, 1253.0], [89.0, 1257.0], [89.1, 1257.0], [89.2, 1261.0], [89.3, 1264.0], [89.4, 1264.0], [89.5, 1264.0], [89.6, 1266.0], [89.7, 1268.0], [89.8, 1273.0], [89.9, 1273.0], [90.0, 1278.0], [90.1, 1281.0], [90.2, 1281.0], [90.3, 1282.0], [90.4, 1286.0], [90.5, 1287.0], [90.6, 1287.0], [90.7, 1288.0], [90.8, 1290.0], [90.9, 1290.0], [91.0, 1290.0], [91.1, 1291.0], [91.2, 1293.0], [91.3, 1298.0], [91.4, 1298.0], [91.5, 1299.0], [91.6, 1306.0], [91.7, 1306.0], [91.8, 1306.0], [91.9, 1310.0], [92.0, 1318.0], [92.1, 1318.0], [92.2, 1320.0], [92.3, 1321.0], [92.4, 1321.0], [92.5, 1321.0], [92.6, 1326.0], [92.7, 1330.0], [92.8, 1333.0], [92.9, 1333.0], [93.0, 1337.0], [93.1, 1338.0], [93.2, 1345.0], [93.3, 1345.0], [93.4, 1348.0], [93.5, 1353.0], [93.6, 1353.0], [93.7, 1353.0], [93.8, 1356.0], [93.9, 1356.0], [94.0, 1356.0], [94.1, 1357.0], [94.2, 1376.0], [94.3, 1377.0], [94.4, 1377.0], [94.5, 1381.0], [94.6, 1382.0], [94.7, 1392.0], [94.8, 1392.0], [94.9, 1392.0], [95.0, 1393.0], [95.1, 1393.0], [95.2, 1400.0], [95.3, 1412.0], [95.4, 1415.0], [95.5, 1415.0], [95.6, 1428.0], [95.7, 1434.0], [95.8, 1437.0], [95.9, 1437.0], [96.0, 1438.0], [96.1, 1471.0], [96.2, 1476.0], [96.3, 1476.0], [96.4, 1476.0], [96.5, 1480.0], [96.6, 1483.0], [96.7, 1483.0], [96.8, 1483.0], [96.9, 1495.0], [97.0, 1495.0], [97.1, 1521.0], [97.2, 1524.0], [97.3, 1536.0], [97.4, 1536.0], [97.5, 1544.0], [97.6, 1567.0], [97.7, 1591.0], [97.8, 1591.0], [97.9, 1628.0], [98.0, 1679.0], [98.1, 1779.0], [98.2, 1779.0], [98.3, 1839.0], [98.4, 1864.0], [98.5, 1864.0], [98.6, 1912.0], [98.7, 1929.0], [98.8, 2030.0], [98.9, 2030.0], [99.0, 2251.0], [99.1, 2529.0], [99.2, 2581.0], [99.3, 2581.0], [99.4, 2618.0], [99.5, 2815.0], [99.6, 2913.0], [99.7, 2913.0], [99.8, 2951.0], [99.9, 2964.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 122.0, "series": [{"data": [[600.0, 57.0], [700.0, 40.0], [800.0, 40.0], [900.0, 33.0], [1000.0, 90.0], [1100.0, 103.0], [1200.0, 53.0], [1300.0, 26.0], [1400.0, 14.0], [1500.0, 6.0], [100.0, 18.0], [1600.0, 2.0], [1700.0, 1.0], [1800.0, 2.0], [1900.0, 2.0], [2000.0, 1.0], [2200.0, 1.0], [2500.0, 2.0], [2600.0, 1.0], [2800.0, 1.0], [2900.0, 3.0], [200.0, 40.0], [300.0, 37.0], [400.0, 40.0], [500.0, 122.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 22.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 577.0, "series": [{"data": [[0.0, 136.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 577.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 22.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.835205992509362, "minX": 1.60404822E12, "maxY": 10.0, "series": [{"data": [[1.60404828E12, 9.835205992509362], [1.60404822E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404828E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 288.0, "minX": 1.0, "maxY": 1353.0, "series": [{"data": [[8.0, 603.0], [2.0, 475.0], [1.0, 563.0], [9.0, 288.0], [10.0, 849.8347107438017], [5.0, 681.5], [6.0, 1353.0], [3.0, 556.0], [7.0, 1107.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 848.0108843537415]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2057.0, "minX": 1.60404822E12, "maxY": 1177981.9333333333, "series": [{"data": [[1.60404828E12, 558949.1833333333], [1.60404822E12, 1177981.9333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60404828E12, 2057.0], [1.60404822E12, 3613.0333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404828E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 842.3857677902624, "minX": 1.60404822E12, "maxY": 851.2200854700853, "series": [{"data": [[1.60404828E12, 842.3857677902624], [1.60404822E12, 851.2200854700853]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404828E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 841.4007490636703, "minX": 1.60404822E12, "maxY": 849.9551282051285, "series": [{"data": [[1.60404828E12, 841.4007490636703], [1.60404822E12, 849.9551282051285]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404828E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03370786516853933, "minX": 1.60404822E12, "maxY": 0.33760683760683763, "series": [{"data": [[1.60404828E12, 0.03370786516853933], [1.60404822E12, 0.33760683760683763]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404828E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 139.0, "minX": 1.60404822E12, "maxY": 2964.0, "series": [{"data": [[1.60404828E12, 1483.0], [1.60404822E12, 2964.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60404828E12, 208.00799782752992], [1.60404822E12, 153.2209998881817]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60404828E12, 216.20880086898805], [1.60404822E12, 153.64310004472733]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60404828E12, 212.56399891376495], [1.60404822E12, 153.45549994409083]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60404828E12, 185.0], [1.60404822E12, 139.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60404828E12, 876.0], [1.60404822E12, 807.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404828E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 506.5, "minX": 3.0, "maxY": 1120.5, "series": [{"data": [[8.0, 1113.0], [9.0, 1120.5], [10.0, 1061.0], [11.0, 1046.0], [3.0, 691.0], [12.0, 1062.0], [13.0, 678.0], [15.0, 795.0], [4.0, 529.0], [16.0, 726.0], [17.0, 511.0], [19.0, 506.5], [5.0, 556.0], [21.0, 544.0], [6.0, 922.5], [7.0, 1080.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 506.0, "minX": 3.0, "maxY": 1118.5, "series": [{"data": [[8.0, 1112.5], [9.0, 1118.5], [10.0, 1059.5], [11.0, 1045.0], [3.0, 690.0], [12.0, 1061.5], [13.0, 677.0], [15.0, 794.0], [4.0, 529.0], [16.0, 723.5], [17.0, 510.0], [19.0, 506.0], [5.0, 556.0], [21.0, 544.0], [6.0, 921.0], [7.0, 1079.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.283333333333333, "minX": 1.60404822E12, "maxY": 7.966666666666667, "series": [{"data": [[1.60404828E12, 4.283333333333333], [1.60404822E12, 7.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404828E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.45, "minX": 1.60404822E12, "maxY": 7.8, "series": [{"data": [[1.60404828E12, 4.45], [1.60404822E12, 7.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404828E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.45, "minX": 1.60404822E12, "maxY": 7.8, "series": [{"data": [[1.60404828E12, 4.45], [1.60404822E12, 7.8]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404828E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.45, "minX": 1.60404822E12, "maxY": 7.8, "series": [{"data": [[1.60404828E12, 4.45], [1.60404822E12, 7.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404828E12, "title": "Total Transactions Per Second"}},
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

