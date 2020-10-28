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
        data: {"result": {"minY": 186.0, "minX": 0.0, "maxY": 3961.0, "series": [{"data": [[0.0, 186.0], [0.1, 186.0], [0.2, 189.0], [0.3, 191.0], [0.4, 191.0], [0.5, 194.0], [0.6, 195.0], [0.7, 199.0], [0.8, 199.0], [0.9, 203.0], [1.0, 213.0], [1.1, 223.0], [1.2, 223.0], [1.3, 228.0], [1.4, 232.0], [1.5, 233.0], [1.6, 233.0], [1.7, 238.0], [1.8, 239.0], [1.9, 239.0], [2.0, 241.0], [2.1, 241.0], [2.2, 241.0], [2.3, 241.0], [2.4, 244.0], [2.5, 246.0], [2.6, 247.0], [2.7, 247.0], [2.8, 248.0], [2.9, 249.0], [3.0, 253.0], [3.1, 253.0], [3.2, 255.0], [3.3, 256.0], [3.4, 256.0], [3.5, 258.0], [3.6, 261.0], [3.7, 261.0], [3.8, 261.0], [3.9, 263.0], [4.0, 264.0], [4.1, 266.0], [4.2, 266.0], [4.3, 267.0], [4.4, 269.0], [4.5, 270.0], [4.6, 270.0], [4.7, 270.0], [4.8, 271.0], [4.9, 271.0], [5.0, 271.0], [5.1, 271.0], [5.2, 272.0], [5.3, 272.0], [5.4, 272.0], [5.5, 272.0], [5.6, 275.0], [5.7, 275.0], [5.8, 276.0], [5.9, 285.0], [6.0, 286.0], [6.1, 286.0], [6.2, 286.0], [6.3, 287.0], [6.4, 288.0], [6.5, 288.0], [6.6, 291.0], [6.7, 298.0], [6.8, 298.0], [6.9, 301.0], [7.0, 305.0], [7.1, 305.0], [7.2, 305.0], [7.3, 305.0], [7.4, 309.0], [7.5, 309.0], [7.6, 309.0], [7.7, 311.0], [7.8, 312.0], [7.9, 313.0], [8.0, 313.0], [8.1, 313.0], [8.2, 315.0], [8.3, 317.0], [8.4, 317.0], [8.5, 321.0], [8.6, 321.0], [8.7, 321.0], [8.8, 322.0], [8.9, 327.0], [9.0, 328.0], [9.1, 328.0], [9.2, 328.0], [9.3, 331.0], [9.4, 331.0], [9.5, 331.0], [9.6, 333.0], [9.7, 333.0], [9.8, 334.0], [9.9, 334.0], [10.0, 335.0], [10.1, 337.0], [10.2, 337.0], [10.3, 337.0], [10.4, 341.0], [10.5, 344.0], [10.6, 344.0], [10.7, 344.0], [10.8, 345.0], [10.9, 347.0], [11.0, 347.0], [11.1, 348.0], [11.2, 349.0], [11.3, 351.0], [11.4, 351.0], [11.5, 351.0], [11.6, 352.0], [11.7, 352.0], [11.8, 355.0], [11.9, 358.0], [12.0, 359.0], [12.1, 359.0], [12.2, 365.0], [12.3, 365.0], [12.4, 366.0], [12.5, 366.0], [12.6, 366.0], [12.7, 366.0], [12.8, 367.0], [12.9, 367.0], [13.0, 368.0], [13.1, 368.0], [13.2, 368.0], [13.3, 368.0], [13.4, 368.0], [13.5, 369.0], [13.6, 369.0], [13.7, 370.0], [13.8, 370.0], [13.9, 372.0], [14.0, 372.0], [14.1, 373.0], [14.2, 374.0], [14.3, 375.0], [14.4, 375.0], [14.5, 375.0], [14.6, 376.0], [14.7, 376.0], [14.8, 376.0], [14.9, 377.0], [15.0, 377.0], [15.1, 377.0], [15.2, 380.0], [15.3, 382.0], [15.4, 387.0], [15.5, 387.0], [15.6, 388.0], [15.7, 390.0], [15.8, 390.0], [15.9, 390.0], [16.0, 391.0], [16.1, 395.0], [16.2, 399.0], [16.3, 399.0], [16.4, 401.0], [16.5, 402.0], [16.6, 403.0], [16.7, 403.0], [16.8, 403.0], [16.9, 404.0], [17.0, 404.0], [17.1, 406.0], [17.2, 407.0], [17.3, 407.0], [17.4, 407.0], [17.5, 408.0], [17.6, 409.0], [17.7, 410.0], [17.8, 410.0], [17.9, 414.0], [18.0, 414.0], [18.1, 416.0], [18.2, 416.0], [18.3, 416.0], [18.4, 416.0], [18.5, 416.0], [18.6, 418.0], [18.7, 418.0], [18.8, 418.0], [18.9, 418.0], [19.0, 419.0], [19.1, 423.0], [19.2, 424.0], [19.3, 424.0], [19.4, 430.0], [19.5, 433.0], [19.6, 435.0], [19.7, 435.0], [19.8, 435.0], [19.9, 438.0], [20.0, 439.0], [20.1, 439.0], [20.2, 442.0], [20.3, 444.0], [20.4, 444.0], [20.5, 444.0], [20.6, 446.0], [20.7, 448.0], [20.8, 448.0], [20.9, 449.0], [21.0, 451.0], [21.1, 452.0], [21.2, 452.0], [21.3, 453.0], [21.4, 455.0], [21.5, 457.0], [21.6, 457.0], [21.7, 460.0], [21.8, 460.0], [21.9, 460.0], [22.0, 460.0], [22.1, 463.0], [22.2, 463.0], [22.3, 463.0], [22.4, 468.0], [22.5, 468.0], [22.6, 468.0], [22.7, 468.0], [22.8, 469.0], [22.9, 471.0], [23.0, 473.0], [23.1, 473.0], [23.2, 476.0], [23.3, 478.0], [23.4, 478.0], [23.5, 478.0], [23.6, 479.0], [23.7, 480.0], [23.8, 480.0], [23.9, 482.0], [24.0, 483.0], [24.1, 485.0], [24.2, 485.0], [24.3, 486.0], [24.4, 486.0], [24.5, 489.0], [24.6, 489.0], [24.7, 491.0], [24.8, 495.0], [24.9, 497.0], [25.0, 497.0], [25.1, 501.0], [25.2, 503.0], [25.3, 503.0], [25.4, 505.0], [25.5, 508.0], [25.6, 513.0], [25.7, 513.0], [25.8, 514.0], [25.9, 514.0], [26.0, 515.0], [26.1, 515.0], [26.2, 517.0], [26.3, 517.0], [26.4, 519.0], [26.5, 519.0], [26.6, 520.0], [26.7, 523.0], [26.8, 523.0], [26.9, 523.0], [27.0, 523.0], [27.1, 524.0], [27.2, 524.0], [27.3, 526.0], [27.4, 529.0], [27.5, 531.0], [27.6, 531.0], [27.7, 532.0], [27.8, 532.0], [27.9, 534.0], [28.0, 534.0], [28.1, 535.0], [28.2, 536.0], [28.3, 536.0], [28.4, 536.0], [28.5, 537.0], [28.6, 537.0], [28.7, 537.0], [28.8, 537.0], [28.9, 538.0], [29.0, 540.0], [29.1, 540.0], [29.2, 540.0], [29.3, 542.0], [29.4, 544.0], [29.5, 544.0], [29.6, 544.0], [29.7, 545.0], [29.8, 545.0], [29.9, 545.0], [30.0, 545.0], [30.1, 547.0], [30.2, 547.0], [30.3, 547.0], [30.4, 547.0], [30.5, 548.0], [30.6, 548.0], [30.7, 549.0], [30.8, 550.0], [30.9, 553.0], [31.0, 553.0], [31.1, 555.0], [31.2, 557.0], [31.3, 558.0], [31.4, 558.0], [31.5, 558.0], [31.6, 560.0], [31.7, 560.0], [31.8, 562.0], [31.9, 563.0], [32.0, 564.0], [32.1, 564.0], [32.2, 564.0], [32.3, 565.0], [32.4, 566.0], [32.5, 566.0], [32.6, 567.0], [32.7, 567.0], [32.8, 568.0], [32.9, 568.0], [33.0, 568.0], [33.1, 571.0], [33.2, 572.0], [33.3, 572.0], [33.4, 574.0], [33.5, 574.0], [33.6, 574.0], [33.7, 575.0], [33.8, 577.0], [33.9, 577.0], [34.0, 577.0], [34.1, 579.0], [34.2, 582.0], [34.3, 585.0], [34.4, 585.0], [34.5, 585.0], [34.6, 588.0], [34.7, 590.0], [34.8, 590.0], [34.9, 591.0], [35.0, 595.0], [35.1, 595.0], [35.2, 598.0], [35.3, 600.0], [35.4, 600.0], [35.5, 600.0], [35.6, 602.0], [35.7, 602.0], [35.8, 603.0], [35.9, 603.0], [36.0, 606.0], [36.1, 606.0], [36.2, 607.0], [36.3, 607.0], [36.4, 609.0], [36.5, 610.0], [36.6, 612.0], [36.7, 612.0], [36.8, 613.0], [36.9, 616.0], [37.0, 616.0], [37.1, 617.0], [37.2, 618.0], [37.3, 621.0], [37.4, 621.0], [37.5, 623.0], [37.6, 623.0], [37.7, 625.0], [37.8, 625.0], [37.9, 632.0], [38.0, 636.0], [38.1, 641.0], [38.2, 641.0], [38.3, 643.0], [38.4, 644.0], [38.5, 644.0], [38.6, 646.0], [38.7, 647.0], [38.8, 647.0], [38.9, 647.0], [39.0, 647.0], [39.1, 648.0], [39.2, 649.0], [39.3, 649.0], [39.4, 653.0], [39.5, 657.0], [39.6, 657.0], [39.7, 657.0], [39.8, 657.0], [39.9, 659.0], [40.0, 661.0], [40.1, 661.0], [40.2, 662.0], [40.3, 663.0], [40.4, 663.0], [40.5, 664.0], [40.6, 665.0], [40.7, 666.0], [40.8, 666.0], [40.9, 671.0], [41.0, 672.0], [41.1, 676.0], [41.2, 676.0], [41.3, 679.0], [41.4, 680.0], [41.5, 681.0], [41.6, 681.0], [41.7, 681.0], [41.8, 683.0], [41.9, 683.0], [42.0, 686.0], [42.1, 686.0], [42.2, 687.0], [42.3, 687.0], [42.4, 688.0], [42.5, 689.0], [42.6, 689.0], [42.7, 689.0], [42.8, 690.0], [42.9, 691.0], [43.0, 691.0], [43.1, 691.0], [43.2, 691.0], [43.3, 694.0], [43.4, 694.0], [43.5, 695.0], [43.6, 695.0], [43.7, 696.0], [43.8, 696.0], [43.9, 697.0], [44.0, 697.0], [44.1, 697.0], [44.2, 697.0], [44.3, 699.0], [44.4, 702.0], [44.5, 705.0], [44.6, 705.0], [44.7, 705.0], [44.8, 707.0], [44.9, 709.0], [45.0, 709.0], [45.1, 714.0], [45.2, 718.0], [45.3, 718.0], [45.4, 720.0], [45.5, 721.0], [45.6, 723.0], [45.7, 723.0], [45.8, 727.0], [45.9, 730.0], [46.0, 733.0], [46.1, 733.0], [46.2, 734.0], [46.3, 737.0], [46.4, 737.0], [46.5, 737.0], [46.6, 741.0], [46.7, 754.0], [46.8, 754.0], [46.9, 755.0], [47.0, 756.0], [47.1, 756.0], [47.2, 756.0], [47.3, 757.0], [47.4, 757.0], [47.5, 757.0], [47.6, 757.0], [47.7, 763.0], [47.8, 764.0], [47.9, 764.0], [48.0, 764.0], [48.1, 770.0], [48.2, 775.0], [48.3, 775.0], [48.4, 775.0], [48.5, 775.0], [48.6, 779.0], [48.7, 779.0], [48.8, 780.0], [48.9, 780.0], [49.0, 781.0], [49.1, 781.0], [49.2, 783.0], [49.3, 783.0], [49.4, 787.0], [49.5, 787.0], [49.6, 792.0], [49.7, 793.0], [49.8, 798.0], [49.9, 798.0], [50.0, 799.0], [50.1, 799.0], [50.2, 799.0], [50.3, 801.0], [50.4, 804.0], [50.5, 805.0], [50.6, 805.0], [50.7, 812.0], [50.8, 812.0], [50.9, 814.0], [51.0, 814.0], [51.1, 814.0], [51.2, 821.0], [51.3, 822.0], [51.4, 822.0], [51.5, 823.0], [51.6, 825.0], [51.7, 825.0], [51.8, 828.0], [51.9, 828.0], [52.0, 828.0], [52.1, 828.0], [52.2, 828.0], [52.3, 830.0], [52.4, 831.0], [52.5, 831.0], [52.6, 837.0], [52.7, 837.0], [52.8, 842.0], [52.9, 842.0], [53.0, 843.0], [53.1, 847.0], [53.2, 848.0], [53.3, 848.0], [53.4, 849.0], [53.5, 849.0], [53.6, 849.0], [53.7, 849.0], [53.8, 851.0], [53.9, 851.0], [54.0, 851.0], [54.1, 852.0], [54.2, 856.0], [54.3, 857.0], [54.4, 857.0], [54.5, 858.0], [54.6, 867.0], [54.7, 871.0], [54.8, 871.0], [54.9, 871.0], [55.0, 874.0], [55.1, 874.0], [55.2, 876.0], [55.3, 876.0], [55.4, 878.0], [55.5, 878.0], [55.6, 880.0], [55.7, 887.0], [55.8, 891.0], [55.9, 891.0], [56.0, 892.0], [56.1, 894.0], [56.2, 894.0], [56.3, 894.0], [56.4, 902.0], [56.5, 908.0], [56.6, 913.0], [56.7, 913.0], [56.8, 914.0], [56.9, 915.0], [57.0, 915.0], [57.1, 916.0], [57.2, 917.0], [57.3, 918.0], [57.4, 918.0], [57.5, 921.0], [57.6, 926.0], [57.7, 929.0], [57.8, 929.0], [57.9, 931.0], [58.0, 931.0], [58.1, 933.0], [58.2, 933.0], [58.3, 936.0], [58.4, 936.0], [58.5, 936.0], [58.6, 938.0], [58.7, 939.0], [58.8, 940.0], [58.9, 940.0], [59.0, 941.0], [59.1, 941.0], [59.2, 944.0], [59.3, 944.0], [59.4, 945.0], [59.5, 947.0], [59.6, 948.0], [59.7, 948.0], [59.8, 948.0], [59.9, 949.0], [60.0, 949.0], [60.1, 949.0], [60.2, 950.0], [60.3, 952.0], [60.4, 952.0], [60.5, 952.0], [60.6, 952.0], [60.7, 954.0], [60.8, 954.0], [60.9, 956.0], [61.0, 956.0], [61.1, 958.0], [61.2, 958.0], [61.3, 959.0], [61.4, 960.0], [61.5, 961.0], [61.6, 961.0], [61.7, 967.0], [61.8, 969.0], [61.9, 969.0], [62.0, 970.0], [62.1, 970.0], [62.2, 971.0], [62.3, 971.0], [62.4, 972.0], [62.5, 973.0], [62.6, 975.0], [62.7, 975.0], [62.8, 977.0], [62.9, 978.0], [63.0, 978.0], [63.1, 978.0], [63.2, 979.0], [63.3, 979.0], [63.4, 979.0], [63.5, 981.0], [63.6, 983.0], [63.7, 984.0], [63.8, 984.0], [63.9, 986.0], [64.0, 989.0], [64.1, 989.0], [64.2, 989.0], [64.3, 992.0], [64.4, 993.0], [64.5, 993.0], [64.6, 993.0], [64.7, 994.0], [64.8, 995.0], [64.9, 996.0], [65.0, 996.0], [65.1, 1001.0], [65.2, 1004.0], [65.3, 1004.0], [65.4, 1008.0], [65.5, 1009.0], [65.6, 1009.0], [65.7, 1009.0], [65.8, 1011.0], [65.9, 1012.0], [66.0, 1013.0], [66.1, 1013.0], [66.2, 1019.0], [66.3, 1019.0], [66.4, 1020.0], [66.5, 1020.0], [66.6, 1021.0], [66.7, 1021.0], [66.8, 1021.0], [66.9, 1022.0], [67.0, 1026.0], [67.1, 1026.0], [67.2, 1026.0], [67.3, 1027.0], [67.4, 1027.0], [67.5, 1031.0], [67.6, 1031.0], [67.7, 1033.0], [67.8, 1036.0], [67.9, 1037.0], [68.0, 1037.0], [68.1, 1039.0], [68.2, 1039.0], [68.3, 1040.0], [68.4, 1040.0], [68.5, 1040.0], [68.6, 1041.0], [68.7, 1041.0], [68.8, 1041.0], [68.9, 1044.0], [69.0, 1044.0], [69.1, 1044.0], [69.2, 1047.0], [69.3, 1049.0], [69.4, 1051.0], [69.5, 1051.0], [69.6, 1053.0], [69.7, 1053.0], [69.8, 1054.0], [69.9, 1054.0], [70.0, 1058.0], [70.1, 1060.0], [70.2, 1060.0], [70.3, 1061.0], [70.4, 1062.0], [70.5, 1063.0], [70.6, 1063.0], [70.7, 1064.0], [70.8, 1073.0], [70.9, 1076.0], [71.0, 1076.0], [71.1, 1077.0], [71.2, 1077.0], [71.3, 1079.0], [71.4, 1079.0], [71.5, 1080.0], [71.6, 1082.0], [71.7, 1082.0], [71.8, 1085.0], [71.9, 1088.0], [72.0, 1090.0], [72.1, 1090.0], [72.2, 1094.0], [72.3, 1094.0], [72.4, 1094.0], [72.5, 1094.0], [72.6, 1095.0], [72.7, 1096.0], [72.8, 1098.0], [72.9, 1098.0], [73.0, 1098.0], [73.1, 1098.0], [73.2, 1099.0], [73.3, 1099.0], [73.4, 1100.0], [73.5, 1102.0], [73.6, 1102.0], [73.7, 1105.0], [73.8, 1106.0], [73.9, 1110.0], [74.0, 1110.0], [74.1, 1110.0], [74.2, 1118.0], [74.3, 1121.0], [74.4, 1121.0], [74.5, 1122.0], [74.6, 1122.0], [74.7, 1124.0], [74.8, 1124.0], [74.9, 1124.0], [75.0, 1125.0], [75.1, 1125.0], [75.2, 1127.0], [75.3, 1127.0], [75.4, 1130.0], [75.5, 1130.0], [75.6, 1131.0], [75.7, 1134.0], [75.8, 1137.0], [75.9, 1137.0], [76.0, 1137.0], [76.1, 1139.0], [76.2, 1140.0], [76.3, 1140.0], [76.4, 1142.0], [76.5, 1142.0], [76.6, 1142.0], [76.7, 1142.0], [76.8, 1143.0], [76.9, 1148.0], [77.0, 1148.0], [77.1, 1149.0], [77.2, 1152.0], [77.3, 1152.0], [77.4, 1152.0], [77.5, 1152.0], [77.6, 1153.0], [77.7, 1153.0], [77.8, 1153.0], [77.9, 1157.0], [78.0, 1161.0], [78.1, 1162.0], [78.2, 1162.0], [78.3, 1163.0], [78.4, 1163.0], [78.5, 1163.0], [78.6, 1164.0], [78.7, 1166.0], [78.8, 1168.0], [78.9, 1168.0], [79.0, 1172.0], [79.1, 1173.0], [79.2, 1173.0], [79.3, 1173.0], [79.4, 1176.0], [79.5, 1176.0], [79.6, 1179.0], [79.7, 1179.0], [79.8, 1180.0], [79.9, 1180.0], [80.0, 1181.0], [80.1, 1181.0], [80.2, 1182.0], [80.3, 1185.0], [80.4, 1185.0], [80.5, 1188.0], [80.6, 1188.0], [80.7, 1189.0], [80.8, 1189.0], [80.9, 1191.0], [81.0, 1192.0], [81.1, 1195.0], [81.2, 1195.0], [81.3, 1199.0], [81.4, 1200.0], [81.5, 1201.0], [81.6, 1201.0], [81.7, 1203.0], [81.8, 1206.0], [81.9, 1206.0], [82.0, 1209.0], [82.1, 1211.0], [82.2, 1214.0], [82.3, 1214.0], [82.4, 1215.0], [82.5, 1217.0], [82.6, 1219.0], [82.7, 1219.0], [82.8, 1221.0], [82.9, 1225.0], [83.0, 1227.0], [83.1, 1227.0], [83.2, 1229.0], [83.3, 1230.0], [83.4, 1230.0], [83.5, 1232.0], [83.6, 1232.0], [83.7, 1234.0], [83.8, 1234.0], [83.9, 1239.0], [84.0, 1240.0], [84.1, 1244.0], [84.2, 1244.0], [84.3, 1247.0], [84.4, 1247.0], [84.5, 1249.0], [84.6, 1249.0], [84.7, 1251.0], [84.8, 1252.0], [84.9, 1252.0], [85.0, 1252.0], [85.1, 1254.0], [85.2, 1258.0], [85.3, 1258.0], [85.4, 1258.0], [85.5, 1262.0], [85.6, 1262.0], [85.7, 1262.0], [85.8, 1266.0], [85.9, 1268.0], [86.0, 1274.0], [86.1, 1274.0], [86.2, 1274.0], [86.3, 1274.0], [86.4, 1276.0], [86.5, 1276.0], [86.6, 1283.0], [86.7, 1284.0], [86.8, 1284.0], [86.9, 1284.0], [87.0, 1286.0], [87.1, 1287.0], [87.2, 1287.0], [87.3, 1288.0], [87.4, 1293.0], [87.5, 1296.0], [87.6, 1296.0], [87.7, 1297.0], [87.8, 1299.0], [87.9, 1301.0], [88.0, 1301.0], [88.1, 1303.0], [88.2, 1303.0], [88.3, 1308.0], [88.4, 1308.0], [88.5, 1313.0], [88.6, 1315.0], [88.7, 1315.0], [88.8, 1317.0], [88.9, 1318.0], [89.0, 1321.0], [89.1, 1321.0], [89.2, 1321.0], [89.3, 1330.0], [89.4, 1339.0], [89.5, 1339.0], [89.6, 1340.0], [89.7, 1344.0], [89.8, 1352.0], [89.9, 1352.0], [90.0, 1354.0], [90.1, 1355.0], [90.2, 1355.0], [90.3, 1362.0], [90.4, 1362.0], [90.5, 1363.0], [90.6, 1363.0], [90.7, 1364.0], [90.8, 1368.0], [90.9, 1369.0], [91.0, 1369.0], [91.1, 1375.0], [91.2, 1375.0], [91.3, 1376.0], [91.4, 1376.0], [91.5, 1380.0], [91.6, 1386.0], [91.7, 1386.0], [91.8, 1388.0], [91.9, 1396.0], [92.0, 1398.0], [92.1, 1398.0], [92.2, 1404.0], [92.3, 1410.0], [92.4, 1415.0], [92.5, 1415.0], [92.6, 1420.0], [92.7, 1422.0], [92.8, 1423.0], [92.9, 1423.0], [93.0, 1433.0], [93.1, 1436.0], [93.2, 1442.0], [93.3, 1442.0], [93.4, 1445.0], [93.5, 1449.0], [93.6, 1449.0], [93.7, 1473.0], [93.8, 1484.0], [93.9, 1484.0], [94.0, 1484.0], [94.1, 1486.0], [94.2, 1489.0], [94.3, 1491.0], [94.4, 1491.0], [94.5, 1492.0], [94.6, 1502.0], [94.7, 1513.0], [94.8, 1513.0], [94.9, 1532.0], [95.0, 1540.0], [95.1, 1540.0], [95.2, 1565.0], [95.3, 1571.0], [95.4, 1579.0], [95.5, 1579.0], [95.6, 1586.0], [95.7, 1602.0], [95.8, 1672.0], [95.9, 1672.0], [96.0, 1688.0], [96.1, 1698.0], [96.2, 1707.0], [96.3, 1707.0], [96.4, 1803.0], [96.5, 1814.0], [96.6, 1816.0], [96.7, 1816.0], [96.8, 1818.0], [96.9, 1826.0], [97.0, 1826.0], [97.1, 1830.0], [97.2, 1856.0], [97.3, 1859.0], [97.4, 1859.0], [97.5, 1896.0], [97.6, 1929.0], [97.7, 1996.0], [97.8, 1996.0], [97.9, 2051.0], [98.0, 2372.0], [98.1, 2666.0], [98.2, 2666.0], [98.3, 2712.0], [98.4, 2920.0], [98.5, 2920.0], [98.6, 2982.0], [98.7, 3048.0], [98.8, 3049.0], [98.9, 3049.0], [99.0, 3080.0], [99.1, 3098.0], [99.2, 3193.0], [99.3, 3193.0], [99.4, 3198.0], [99.5, 3260.0], [99.6, 3362.0], [99.7, 3362.0], [99.8, 3408.0], [99.9, 3961.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 75.0, "series": [{"data": [[600.0, 67.0], [700.0, 43.0], [800.0, 45.0], [900.0, 64.0], [1000.0, 61.0], [1100.0, 59.0], [1200.0, 48.0], [1300.0, 31.0], [1400.0, 18.0], [1500.0, 8.0], [100.0, 6.0], [1600.0, 4.0], [1700.0, 1.0], [1800.0, 9.0], [1900.0, 2.0], [2000.0, 1.0], [2300.0, 1.0], [2600.0, 1.0], [2700.0, 1.0], [2900.0, 2.0], [3000.0, 4.0], [3100.0, 2.0], [3300.0, 1.0], [200.0, 44.0], [3200.0, 1.0], [3400.0, 1.0], [3900.0, 1.0], [300.0, 70.0], [400.0, 64.0], [500.0, 75.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 40.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 511.0, "series": [{"data": [[0.0, 184.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 511.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 40.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.784688995215312, "minX": 1.60383792E12, "maxY": 10.0, "series": [{"data": [[1.60383798E12, 9.784688995215312], [1.60383792E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383798E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 367.0, "minX": 1.0, "maxY": 956.0, "series": [{"data": [[8.0, 367.0], [4.0, 607.0], [2.0, 683.0], [1.0, 956.0], [9.0, 523.0], [10.0, 862.0743801652891], [5.0, 579.0], [6.0, 479.0], [3.0, 931.0], [7.0, 613.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 859.325170068027]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1565.3833333333334, "minX": 1.60383792E12, "maxY": 1377591.3833333333, "series": [{"data": [[1.60383798E12, 458197.13333333336], [1.60383792E12, 1377591.3833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60383798E12, 1565.3833333333334], [1.60383792E12, 3957.65]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383798E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 812.5071770334923, "minX": 1.60383792E12, "maxY": 877.9277566539923, "series": [{"data": [[1.60383798E12, 812.5071770334923], [1.60383792E12, 877.9277566539923]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383798E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 811.3827751196169, "minX": 1.60383792E12, "maxY": 876.5836501901138, "series": [{"data": [[1.60383798E12, 811.3827751196169], [1.60383792E12, 876.5836501901138]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383798E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.07177033492822965, "minX": 1.60383792E12, "maxY": 0.155893536121673, "series": [{"data": [[1.60383798E12, 0.07177033492822965], [1.60383792E12, 0.155893536121673]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383798E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 186.0, "minX": 1.60383792E12, "maxY": 3961.0, "series": [{"data": [[1.60383798E12, 1856.0], [1.60383792E12, 3961.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60383798E12, 240.00999954938888], [1.60383792E12, 194.74299987435342]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60383798E12, 242.34300034046174], [1.60383792E12, 195.86920020103454]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60383798E12, 240.95499977469444], [1.60383792E12, 195.02599974870682]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60383798E12, 232.0], [1.60383792E12, 186.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60383798E12, 780.0], [1.60383792E12, 802.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383798E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 452.0, "minX": 1.0, "maxY": 2982.0, "series": [{"data": [[9.0, 968.5], [10.0, 1004.0], [11.0, 978.0], [12.0, 851.5], [13.0, 799.5], [14.0, 712.5], [15.0, 609.0], [1.0, 2982.0], [16.0, 765.0], [17.0, 656.0], [19.0, 513.0], [20.0, 452.0], [6.0, 1254.5], [7.0, 1088.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 451.5, "minX": 1.0, "maxY": 2968.0, "series": [{"data": [[9.0, 967.0], [10.0, 1003.0], [11.0, 978.0], [12.0, 849.5], [13.0, 797.5], [14.0, 712.5], [15.0, 609.0], [1.0, 2968.0], [16.0, 762.5], [17.0, 655.5], [19.0, 513.0], [20.0, 451.5], [6.0, 1253.5], [7.0, 1085.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.316666666666667, "minX": 1.60383792E12, "maxY": 8.933333333333334, "series": [{"data": [[1.60383798E12, 3.316666666666667], [1.60383792E12, 8.933333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383798E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.60383792E12, "maxY": 8.766666666666667, "series": [{"data": [[1.60383798E12, 3.4833333333333334], [1.60383792E12, 8.766666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383798E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.60383792E12, "maxY": 8.766666666666667, "series": [{"data": [[1.60383798E12, 3.4833333333333334], [1.60383792E12, 8.766666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383798E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.60383792E12, "maxY": 8.766666666666667, "series": [{"data": [[1.60383798E12, 3.4833333333333334], [1.60383792E12, 8.766666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383798E12, "title": "Total Transactions Per Second"}},
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

