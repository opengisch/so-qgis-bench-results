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
        data: {"result": {"minY": 142.0, "minX": 0.0, "maxY": 2037.0, "series": [{"data": [[0.0, 142.0], [0.1, 142.0], [0.2, 142.0], [0.3, 143.0], [0.4, 143.0], [0.5, 144.0], [0.6, 145.0], [0.7, 147.0], [0.8, 147.0], [0.9, 151.0], [1.0, 155.0], [1.1, 159.0], [1.2, 159.0], [1.3, 165.0], [1.4, 165.0], [1.5, 167.0], [1.6, 167.0], [1.7, 168.0], [1.8, 168.0], [1.9, 168.0], [2.0, 168.0], [2.1, 169.0], [2.2, 171.0], [2.3, 171.0], [2.4, 179.0], [2.5, 181.0], [2.6, 182.0], [2.7, 182.0], [2.8, 215.0], [2.9, 218.0], [3.0, 218.0], [3.1, 218.0], [3.2, 224.0], [3.3, 230.0], [3.4, 230.0], [3.5, 231.0], [3.6, 232.0], [3.7, 233.0], [3.8, 233.0], [3.9, 234.0], [4.0, 237.0], [4.1, 237.0], [4.2, 237.0], [4.3, 238.0], [4.4, 240.0], [4.5, 242.0], [4.6, 242.0], [4.7, 242.0], [4.8, 243.0], [4.9, 244.0], [5.0, 244.0], [5.1, 246.0], [5.2, 246.0], [5.3, 246.0], [5.4, 249.0], [5.5, 250.0], [5.6, 250.0], [5.7, 250.0], [5.8, 254.0], [5.9, 254.0], [6.0, 259.0], [6.1, 259.0], [6.2, 263.0], [6.3, 270.0], [6.4, 273.0], [6.5, 273.0], [6.6, 275.0], [6.7, 278.0], [6.8, 278.0], [6.9, 286.0], [7.0, 287.0], [7.1, 289.0], [7.2, 289.0], [7.3, 290.0], [7.4, 296.0], [7.5, 297.0], [7.6, 297.0], [7.7, 301.0], [7.8, 302.0], [7.9, 304.0], [8.0, 304.0], [8.1, 305.0], [8.2, 311.0], [8.3, 311.0], [8.4, 311.0], [8.5, 312.0], [8.6, 314.0], [8.7, 314.0], [8.8, 316.0], [8.9, 319.0], [9.0, 325.0], [9.1, 325.0], [9.2, 328.0], [9.3, 331.0], [9.4, 332.0], [9.5, 332.0], [9.6, 334.0], [9.7, 336.0], [9.8, 339.0], [9.9, 339.0], [10.0, 341.0], [10.1, 341.0], [10.2, 341.0], [10.3, 345.0], [10.4, 346.0], [10.5, 349.0], [10.6, 349.0], [10.7, 351.0], [10.8, 354.0], [10.9, 358.0], [11.0, 358.0], [11.1, 366.0], [11.2, 369.0], [11.3, 372.0], [11.4, 372.0], [11.5, 375.0], [11.6, 376.0], [11.7, 376.0], [11.8, 378.0], [11.9, 390.0], [12.0, 394.0], [12.1, 394.0], [12.2, 396.0], [12.3, 397.0], [12.4, 397.0], [12.5, 397.0], [12.6, 399.0], [12.7, 410.0], [12.8, 416.0], [12.9, 416.0], [13.0, 417.0], [13.1, 421.0], [13.2, 422.0], [13.3, 422.0], [13.4, 423.0], [13.5, 424.0], [13.6, 424.0], [13.7, 430.0], [13.8, 435.0], [13.9, 435.0], [14.0, 435.0], [14.1, 436.0], [14.2, 436.0], [14.3, 438.0], [14.4, 438.0], [14.5, 439.0], [14.6, 440.0], [14.7, 442.0], [14.8, 442.0], [14.9, 444.0], [15.0, 444.0], [15.1, 444.0], [15.2, 445.0], [15.3, 446.0], [15.4, 456.0], [15.5, 456.0], [15.6, 456.0], [15.7, 463.0], [15.8, 463.0], [15.9, 463.0], [16.0, 465.0], [16.1, 465.0], [16.2, 468.0], [16.3, 468.0], [16.4, 470.0], [16.5, 471.0], [16.6, 474.0], [16.7, 474.0], [16.8, 476.0], [16.9, 476.0], [17.0, 476.0], [17.1, 481.0], [17.2, 482.0], [17.3, 486.0], [17.4, 486.0], [17.5, 488.0], [17.6, 489.0], [17.7, 490.0], [17.8, 490.0], [17.9, 491.0], [18.0, 493.0], [18.1, 495.0], [18.2, 495.0], [18.3, 495.0], [18.4, 499.0], [18.5, 499.0], [18.6, 499.0], [18.7, 503.0], [18.8, 504.0], [18.9, 504.0], [19.0, 505.0], [19.1, 506.0], [19.2, 506.0], [19.3, 506.0], [19.4, 507.0], [19.5, 507.0], [19.6, 508.0], [19.7, 508.0], [19.8, 509.0], [19.9, 510.0], [20.0, 510.0], [20.1, 510.0], [20.2, 510.0], [20.3, 510.0], [20.4, 510.0], [20.5, 511.0], [20.6, 511.0], [20.7, 512.0], [20.8, 512.0], [20.9, 512.0], [21.0, 512.0], [21.1, 513.0], [21.2, 513.0], [21.3, 513.0], [21.4, 514.0], [21.5, 515.0], [21.6, 515.0], [21.7, 516.0], [21.8, 517.0], [21.9, 517.0], [22.0, 518.0], [22.1, 519.0], [22.2, 521.0], [22.3, 521.0], [22.4, 521.0], [22.5, 522.0], [22.6, 524.0], [22.7, 524.0], [22.8, 524.0], [22.9, 524.0], [23.0, 525.0], [23.1, 525.0], [23.2, 526.0], [23.3, 527.0], [23.4, 527.0], [23.5, 528.0], [23.6, 528.0], [23.7, 528.0], [23.8, 528.0], [23.9, 529.0], [24.0, 529.0], [24.1, 529.0], [24.2, 529.0], [24.3, 531.0], [24.4, 532.0], [24.5, 532.0], [24.6, 532.0], [24.7, 532.0], [24.8, 532.0], [24.9, 532.0], [25.0, 532.0], [25.1, 533.0], [25.2, 533.0], [25.3, 533.0], [25.4, 533.0], [25.5, 534.0], [25.6, 536.0], [25.7, 536.0], [25.8, 536.0], [25.9, 536.0], [26.0, 536.0], [26.1, 536.0], [26.2, 537.0], [26.3, 537.0], [26.4, 538.0], [26.5, 538.0], [26.6, 539.0], [26.7, 539.0], [26.8, 539.0], [26.9, 540.0], [27.0, 540.0], [27.1, 540.0], [27.2, 540.0], [27.3, 541.0], [27.4, 541.0], [27.5, 542.0], [27.6, 542.0], [27.7, 543.0], [27.8, 543.0], [27.9, 544.0], [28.0, 544.0], [28.1, 545.0], [28.2, 545.0], [28.3, 546.0], [28.4, 546.0], [28.5, 546.0], [28.6, 546.0], [28.7, 546.0], [28.8, 547.0], [28.9, 548.0], [29.0, 549.0], [29.1, 549.0], [29.2, 549.0], [29.3, 549.0], [29.4, 549.0], [29.5, 549.0], [29.6, 549.0], [29.7, 551.0], [29.8, 551.0], [29.9, 551.0], [30.0, 552.0], [30.1, 552.0], [30.2, 552.0], [30.3, 552.0], [30.4, 553.0], [30.5, 553.0], [30.6, 553.0], [30.7, 553.0], [30.8, 554.0], [30.9, 554.0], [31.0, 554.0], [31.1, 554.0], [31.2, 554.0], [31.3, 557.0], [31.4, 557.0], [31.5, 558.0], [31.6, 559.0], [31.7, 559.0], [31.8, 559.0], [31.9, 562.0], [32.0, 562.0], [32.1, 562.0], [32.2, 562.0], [32.3, 563.0], [32.4, 564.0], [32.5, 564.0], [32.6, 565.0], [32.7, 565.0], [32.8, 567.0], [32.9, 567.0], [33.0, 567.0], [33.1, 569.0], [33.2, 569.0], [33.3, 569.0], [33.4, 571.0], [33.5, 572.0], [33.6, 572.0], [33.7, 574.0], [33.8, 574.0], [33.9, 574.0], [34.0, 574.0], [34.1, 577.0], [34.2, 578.0], [34.3, 580.0], [34.4, 580.0], [34.5, 581.0], [34.6, 581.0], [34.7, 582.0], [34.8, 582.0], [34.9, 582.0], [35.0, 583.0], [35.1, 583.0], [35.2, 583.0], [35.3, 583.0], [35.4, 584.0], [35.5, 584.0], [35.6, 584.0], [35.7, 584.0], [35.8, 589.0], [35.9, 589.0], [36.0, 589.0], [36.1, 592.0], [36.2, 593.0], [36.3, 593.0], [36.4, 594.0], [36.5, 595.0], [36.6, 595.0], [36.7, 595.0], [36.8, 596.0], [36.9, 599.0], [37.0, 599.0], [37.1, 599.0], [37.2, 601.0], [37.3, 602.0], [37.4, 602.0], [37.5, 602.0], [37.6, 609.0], [37.7, 611.0], [37.8, 611.0], [37.9, 611.0], [38.0, 613.0], [38.1, 614.0], [38.2, 614.0], [38.3, 615.0], [38.4, 615.0], [38.5, 615.0], [38.6, 616.0], [38.7, 617.0], [38.8, 624.0], [38.9, 624.0], [39.0, 625.0], [39.1, 629.0], [39.2, 631.0], [39.3, 631.0], [39.4, 633.0], [39.5, 633.0], [39.6, 634.0], [39.7, 634.0], [39.8, 636.0], [39.9, 637.0], [40.0, 640.0], [40.1, 640.0], [40.2, 640.0], [40.3, 642.0], [40.4, 642.0], [40.5, 644.0], [40.6, 646.0], [40.7, 648.0], [40.8, 648.0], [40.9, 649.0], [41.0, 651.0], [41.1, 655.0], [41.2, 655.0], [41.3, 656.0], [41.4, 656.0], [41.5, 659.0], [41.6, 659.0], [41.7, 661.0], [41.8, 661.0], [41.9, 661.0], [42.0, 666.0], [42.1, 667.0], [42.2, 668.0], [42.3, 668.0], [42.4, 670.0], [42.5, 671.0], [42.6, 672.0], [42.7, 672.0], [42.8, 673.0], [42.9, 674.0], [43.0, 676.0], [43.1, 676.0], [43.2, 677.0], [43.3, 678.0], [43.4, 678.0], [43.5, 679.0], [43.6, 680.0], [43.7, 684.0], [43.8, 684.0], [43.9, 684.0], [44.0, 687.0], [44.1, 687.0], [44.2, 687.0], [44.3, 688.0], [44.4, 689.0], [44.5, 690.0], [44.6, 690.0], [44.7, 690.0], [44.8, 692.0], [44.9, 692.0], [45.0, 692.0], [45.1, 694.0], [45.2, 698.0], [45.3, 698.0], [45.4, 700.0], [45.5, 700.0], [45.6, 701.0], [45.7, 701.0], [45.8, 707.0], [45.9, 708.0], [46.0, 711.0], [46.1, 711.0], [46.2, 713.0], [46.3, 713.0], [46.4, 715.0], [46.5, 715.0], [46.6, 720.0], [46.7, 720.0], [46.8, 720.0], [46.9, 727.0], [47.0, 732.0], [47.1, 739.0], [47.2, 739.0], [47.3, 752.0], [47.4, 759.0], [47.5, 764.0], [47.6, 764.0], [47.7, 765.0], [47.8, 771.0], [47.9, 773.0], [48.0, 773.0], [48.1, 777.0], [48.2, 779.0], [48.3, 786.0], [48.4, 786.0], [48.5, 786.0], [48.6, 788.0], [48.7, 788.0], [48.8, 795.0], [48.9, 796.0], [49.0, 798.0], [49.1, 798.0], [49.2, 798.0], [49.3, 802.0], [49.4, 802.0], [49.5, 802.0], [49.6, 803.0], [49.7, 810.0], [49.8, 812.0], [49.9, 812.0], [50.0, 812.0], [50.1, 814.0], [50.2, 814.0], [50.3, 815.0], [50.4, 816.0], [50.5, 818.0], [50.6, 818.0], [50.7, 820.0], [50.8, 823.0], [50.9, 831.0], [51.0, 831.0], [51.1, 831.0], [51.2, 835.0], [51.3, 837.0], [51.4, 837.0], [51.5, 838.0], [51.6, 840.0], [51.7, 840.0], [51.8, 840.0], [51.9, 843.0], [52.0, 844.0], [52.1, 844.0], [52.2, 845.0], [52.3, 849.0], [52.4, 850.0], [52.5, 850.0], [52.6, 850.0], [52.7, 852.0], [52.8, 852.0], [52.9, 852.0], [53.0, 857.0], [53.1, 858.0], [53.2, 859.0], [53.3, 859.0], [53.4, 861.0], [53.5, 862.0], [53.6, 862.0], [53.7, 863.0], [53.8, 864.0], [53.9, 866.0], [54.0, 866.0], [54.1, 869.0], [54.2, 873.0], [54.3, 877.0], [54.4, 877.0], [54.5, 879.0], [54.6, 882.0], [54.7, 884.0], [54.8, 884.0], [54.9, 885.0], [55.0, 885.0], [55.1, 885.0], [55.2, 886.0], [55.3, 889.0], [55.4, 891.0], [55.5, 891.0], [55.6, 893.0], [55.7, 903.0], [55.8, 908.0], [55.9, 908.0], [56.0, 908.0], [56.1, 910.0], [56.2, 911.0], [56.3, 911.0], [56.4, 914.0], [56.5, 932.0], [56.6, 942.0], [56.7, 942.0], [56.8, 943.0], [56.9, 944.0], [57.0, 944.0], [57.1, 952.0], [57.2, 957.0], [57.3, 963.0], [57.4, 963.0], [57.5, 965.0], [57.6, 966.0], [57.7, 967.0], [57.8, 967.0], [57.9, 967.0], [58.0, 970.0], [58.1, 973.0], [58.2, 973.0], [58.3, 973.0], [58.4, 975.0], [58.5, 975.0], [58.6, 975.0], [58.7, 983.0], [58.8, 989.0], [58.9, 989.0], [59.0, 990.0], [59.1, 993.0], [59.2, 999.0], [59.3, 999.0], [59.4, 1000.0], [59.5, 1003.0], [59.6, 1006.0], [59.7, 1006.0], [59.8, 1010.0], [59.9, 1013.0], [60.0, 1016.0], [60.1, 1016.0], [60.2, 1018.0], [60.3, 1021.0], [60.4, 1021.0], [60.5, 1022.0], [60.6, 1022.0], [60.7, 1024.0], [60.8, 1024.0], [60.9, 1024.0], [61.0, 1026.0], [61.1, 1029.0], [61.2, 1029.0], [61.3, 1029.0], [61.4, 1030.0], [61.5, 1030.0], [61.6, 1030.0], [61.7, 1033.0], [61.8, 1033.0], [61.9, 1033.0], [62.0, 1035.0], [62.1, 1036.0], [62.2, 1037.0], [62.3, 1037.0], [62.4, 1038.0], [62.5, 1038.0], [62.6, 1039.0], [62.7, 1039.0], [62.8, 1042.0], [62.9, 1042.0], [63.0, 1042.0], [63.1, 1042.0], [63.2, 1045.0], [63.3, 1046.0], [63.4, 1046.0], [63.5, 1046.0], [63.6, 1050.0], [63.7, 1052.0], [63.8, 1052.0], [63.9, 1052.0], [64.0, 1054.0], [64.1, 1054.0], [64.2, 1054.0], [64.3, 1054.0], [64.4, 1058.0], [64.5, 1058.0], [64.6, 1058.0], [64.7, 1059.0], [64.8, 1060.0], [64.9, 1060.0], [65.0, 1060.0], [65.1, 1061.0], [65.2, 1065.0], [65.3, 1065.0], [65.4, 1065.0], [65.5, 1065.0], [65.6, 1066.0], [65.7, 1066.0], [65.8, 1067.0], [65.9, 1067.0], [66.0, 1067.0], [66.1, 1067.0], [66.2, 1068.0], [66.3, 1068.0], [66.4, 1068.0], [66.5, 1068.0], [66.6, 1069.0], [66.7, 1069.0], [66.8, 1069.0], [66.9, 1069.0], [67.0, 1071.0], [67.1, 1074.0], [67.2, 1074.0], [67.3, 1074.0], [67.4, 1075.0], [67.5, 1078.0], [67.6, 1078.0], [67.7, 1078.0], [67.8, 1079.0], [67.9, 1079.0], [68.0, 1079.0], [68.1, 1080.0], [68.2, 1081.0], [68.3, 1082.0], [68.4, 1082.0], [68.5, 1082.0], [68.6, 1084.0], [68.7, 1084.0], [68.8, 1084.0], [68.9, 1085.0], [69.0, 1087.0], [69.1, 1087.0], [69.2, 1088.0], [69.3, 1089.0], [69.4, 1091.0], [69.5, 1091.0], [69.6, 1091.0], [69.7, 1091.0], [69.8, 1092.0], [69.9, 1092.0], [70.0, 1092.0], [70.1, 1093.0], [70.2, 1093.0], [70.3, 1093.0], [70.4, 1093.0], [70.5, 1093.0], [70.6, 1093.0], [70.7, 1094.0], [70.8, 1094.0], [70.9, 1094.0], [71.0, 1094.0], [71.1, 1095.0], [71.2, 1095.0], [71.3, 1096.0], [71.4, 1096.0], [71.5, 1096.0], [71.6, 1097.0], [71.7, 1097.0], [71.8, 1098.0], [71.9, 1100.0], [72.0, 1100.0], [72.1, 1100.0], [72.2, 1101.0], [72.3, 1101.0], [72.4, 1102.0], [72.5, 1102.0], [72.6, 1102.0], [72.7, 1105.0], [72.8, 1105.0], [72.9, 1105.0], [73.0, 1106.0], [73.1, 1106.0], [73.2, 1107.0], [73.3, 1107.0], [73.4, 1108.0], [73.5, 1109.0], [73.6, 1109.0], [73.7, 1109.0], [73.8, 1110.0], [73.9, 1111.0], [74.0, 1111.0], [74.1, 1112.0], [74.2, 1112.0], [74.3, 1112.0], [74.4, 1112.0], [74.5, 1114.0], [74.6, 1114.0], [74.7, 1116.0], [74.8, 1116.0], [74.9, 1116.0], [75.0, 1116.0], [75.1, 1116.0], [75.2, 1122.0], [75.3, 1122.0], [75.4, 1123.0], [75.5, 1123.0], [75.6, 1123.0], [75.7, 1123.0], [75.8, 1124.0], [75.9, 1124.0], [76.0, 1125.0], [76.1, 1126.0], [76.2, 1127.0], [76.3, 1127.0], [76.4, 1128.0], [76.5, 1128.0], [76.6, 1128.0], [76.7, 1128.0], [76.8, 1129.0], [76.9, 1129.0], [77.0, 1129.0], [77.1, 1132.0], [77.2, 1133.0], [77.3, 1133.0], [77.4, 1133.0], [77.5, 1133.0], [77.6, 1133.0], [77.7, 1133.0], [77.8, 1133.0], [77.9, 1135.0], [78.0, 1135.0], [78.1, 1137.0], [78.2, 1137.0], [78.3, 1141.0], [78.4, 1141.0], [78.5, 1141.0], [78.6, 1142.0], [78.7, 1142.0], [78.8, 1142.0], [78.9, 1142.0], [79.0, 1143.0], [79.1, 1143.0], [79.2, 1144.0], [79.3, 1144.0], [79.4, 1144.0], [79.5, 1144.0], [79.6, 1145.0], [79.7, 1145.0], [79.8, 1145.0], [79.9, 1145.0], [80.0, 1146.0], [80.1, 1146.0], [80.2, 1147.0], [80.3, 1147.0], [80.4, 1147.0], [80.5, 1147.0], [80.6, 1148.0], [80.7, 1149.0], [80.8, 1149.0], [80.9, 1149.0], [81.0, 1150.0], [81.1, 1152.0], [81.2, 1152.0], [81.3, 1152.0], [81.4, 1155.0], [81.5, 1155.0], [81.6, 1155.0], [81.7, 1155.0], [81.8, 1157.0], [81.9, 1157.0], [82.0, 1159.0], [82.1, 1162.0], [82.2, 1162.0], [82.3, 1162.0], [82.4, 1162.0], [82.5, 1163.0], [82.6, 1166.0], [82.7, 1166.0], [82.8, 1168.0], [82.9, 1171.0], [83.0, 1172.0], [83.1, 1172.0], [83.2, 1173.0], [83.3, 1173.0], [83.4, 1173.0], [83.5, 1174.0], [83.6, 1175.0], [83.7, 1176.0], [83.8, 1176.0], [83.9, 1176.0], [84.0, 1177.0], [84.1, 1177.0], [84.2, 1177.0], [84.3, 1178.0], [84.4, 1181.0], [84.5, 1185.0], [84.6, 1185.0], [84.7, 1186.0], [84.8, 1188.0], [84.9, 1189.0], [85.0, 1189.0], [85.1, 1190.0], [85.2, 1192.0], [85.3, 1192.0], [85.4, 1193.0], [85.5, 1193.0], [85.6, 1193.0], [85.7, 1193.0], [85.8, 1194.0], [85.9, 1199.0], [86.0, 1199.0], [86.1, 1199.0], [86.2, 1200.0], [86.3, 1200.0], [86.4, 1206.0], [86.5, 1206.0], [86.6, 1209.0], [86.7, 1210.0], [86.8, 1210.0], [86.9, 1211.0], [87.0, 1212.0], [87.1, 1213.0], [87.2, 1213.0], [87.3, 1213.0], [87.4, 1214.0], [87.5, 1215.0], [87.6, 1215.0], [87.7, 1215.0], [87.8, 1216.0], [87.9, 1219.0], [88.0, 1219.0], [88.1, 1223.0], [88.2, 1225.0], [88.3, 1225.0], [88.4, 1225.0], [88.5, 1227.0], [88.6, 1230.0], [88.7, 1230.0], [88.8, 1231.0], [88.9, 1231.0], [89.0, 1232.0], [89.1, 1232.0], [89.2, 1232.0], [89.3, 1234.0], [89.4, 1241.0], [89.5, 1241.0], [89.6, 1242.0], [89.7, 1242.0], [89.8, 1248.0], [89.9, 1248.0], [90.0, 1248.0], [90.1, 1248.0], [90.2, 1248.0], [90.3, 1251.0], [90.4, 1251.0], [90.5, 1254.0], [90.6, 1254.0], [90.7, 1254.0], [90.8, 1255.0], [90.9, 1256.0], [91.0, 1256.0], [91.1, 1257.0], [91.2, 1259.0], [91.3, 1261.0], [91.4, 1261.0], [91.5, 1262.0], [91.6, 1262.0], [91.7, 1262.0], [91.8, 1262.0], [91.9, 1263.0], [92.0, 1263.0], [92.1, 1263.0], [92.2, 1264.0], [92.3, 1265.0], [92.4, 1274.0], [92.5, 1274.0], [92.6, 1276.0], [92.7, 1280.0], [92.8, 1281.0], [92.9, 1281.0], [93.0, 1285.0], [93.1, 1285.0], [93.2, 1286.0], [93.3, 1286.0], [93.4, 1289.0], [93.5, 1289.0], [93.6, 1289.0], [93.7, 1290.0], [93.8, 1290.0], [93.9, 1295.0], [94.0, 1295.0], [94.1, 1295.0], [94.2, 1297.0], [94.3, 1298.0], [94.4, 1298.0], [94.5, 1299.0], [94.6, 1304.0], [94.7, 1310.0], [94.8, 1310.0], [94.9, 1310.0], [95.0, 1310.0], [95.1, 1310.0], [95.2, 1312.0], [95.3, 1318.0], [95.4, 1321.0], [95.5, 1321.0], [95.6, 1327.0], [95.7, 1333.0], [95.8, 1335.0], [95.9, 1335.0], [96.0, 1336.0], [96.1, 1351.0], [96.2, 1369.0], [96.3, 1369.0], [96.4, 1379.0], [96.5, 1390.0], [96.6, 1404.0], [96.7, 1404.0], [96.8, 1411.0], [96.9, 1413.0], [97.0, 1413.0], [97.1, 1414.0], [97.2, 1419.0], [97.3, 1432.0], [97.4, 1432.0], [97.5, 1454.0], [97.6, 1455.0], [97.7, 1464.0], [97.8, 1464.0], [97.9, 1473.0], [98.0, 1473.0], [98.1, 1480.0], [98.2, 1480.0], [98.3, 1484.0], [98.4, 1493.0], [98.5, 1493.0], [98.6, 1578.0], [98.7, 1581.0], [98.8, 1589.0], [98.9, 1589.0], [99.0, 1602.0], [99.1, 1605.0], [99.2, 1638.0], [99.3, 1638.0], [99.4, 1646.0], [99.5, 1672.0], [99.6, 1769.0], [99.7, 1769.0], [99.8, 2010.0], [99.9, 2037.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 136.0, "series": [{"data": [[600.0, 60.0], [700.0, 29.0], [200.0, 36.0], [800.0, 47.0], [900.0, 27.0], [1000.0, 92.0], [1100.0, 105.0], [1200.0, 62.0], [300.0, 37.0], [1300.0, 15.0], [1400.0, 14.0], [1500.0, 3.0], [100.0, 20.0], [400.0, 44.0], [1600.0, 5.0], [1700.0, 1.0], [500.0, 136.0], [2000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 587.0, "series": [{"data": [[0.0, 137.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 587.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.749999999999998, "minX": 1.60438878E12, "maxY": 9.989985693848347, "series": [{"data": [[1.60438884E12, 8.749999999999998], [1.60438878E12, 9.989985693848347]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438884E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 233.5, "minX": 1.0, "maxY": 1232.0, "series": [{"data": [[8.0, 233.5], [4.0, 495.0], [2.0, 1054.0], [1.0, 1054.0], [9.0, 549.0], [5.0, 429.5], [10.0, 819.7099447513807], [6.0, 1232.0], [3.0, 562.0], [7.0, 263.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.929251700680263, 816.3333333333335]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 269.0, "minX": 1.60438878E12, "maxY": 1644253.0333333334, "series": [{"data": [[1.60438884E12, 92678.08333333333], [1.60438878E12, 1644253.0333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438884E12, 269.0], [1.60438878E12, 5401.033333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438884E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 711.6944444444446, "minX": 1.60438878E12, "maxY": 821.722460658083, "series": [{"data": [[1.60438884E12, 711.6944444444446], [1.60438878E12, 821.722460658083]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438884E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 710.2777777777779, "minX": 1.60438878E12, "maxY": 820.5979971387696, "series": [{"data": [[1.60438884E12, 710.2777777777779], [1.60438878E12, 820.5979971387696]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438884E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60438878E12, "maxY": 0.13304721030042896, "series": [{"data": [[1.60438884E12, 0.0], [1.60438878E12, 0.13304721030042896]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438884E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 142.0, "minX": 1.60438878E12, "maxY": 2037.0, "series": [{"data": [[1.60438884E12, 1769.0], [1.60438878E12, 2037.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438884E12, 234.0], [1.60438878E12, 148.19999933242798]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438884E12, 234.0], [1.60438878E12, 150.7200002670288]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438884E12, 234.0], [1.60438878E12, 149.599999666214]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438884E12, 234.0], [1.60438878E12, 142.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438884E12, 541.0], [1.60438878E12, 816.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438884E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 390.0, "minX": 2.0, "maxY": 1080.5, "series": [{"data": [[2.0, 664.5], [8.0, 1080.5], [9.0, 1068.5], [10.0, 1063.5], [11.0, 1040.5], [12.0, 1063.0], [13.0, 642.0], [14.0, 582.0], [15.0, 671.0], [16.0, 609.0], [17.0, 744.0], [18.0, 889.0], [19.0, 538.0], [21.0, 574.0], [23.0, 390.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 389.0, "minX": 2.0, "maxY": 1080.0, "series": [{"data": [[2.0, 660.0], [8.0, 1080.0], [9.0, 1068.0], [10.0, 1063.5], [11.0, 1039.5], [12.0, 1063.0], [13.0, 640.0], [14.0, 581.0], [15.0, 671.0], [16.0, 608.5], [17.0, 743.0], [18.0, 887.5], [19.0, 538.0], [21.0, 574.0], [23.0, 389.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.60438878E12, "maxY": 11.816666666666666, "series": [{"data": [[1.60438884E12, 0.43333333333333335], [1.60438878E12, 11.816666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438884E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.60438878E12, "maxY": 11.65, "series": [{"data": [[1.60438884E12, 0.6], [1.60438878E12, 11.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438884E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.60438878E12, "maxY": 11.65, "series": [{"data": [[1.60438884E12, 0.6], [1.60438878E12, 11.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438884E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.60438878E12, "maxY": 11.65, "series": [{"data": [[1.60438884E12, 0.6], [1.60438878E12, 11.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438884E12, "title": "Total Transactions Per Second"}},
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

