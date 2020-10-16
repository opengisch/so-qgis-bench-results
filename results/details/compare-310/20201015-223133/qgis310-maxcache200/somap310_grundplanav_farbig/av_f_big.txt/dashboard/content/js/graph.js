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
        data: {"result": {"minY": 186.0, "minX": 0.0, "maxY": 3741.0, "series": [{"data": [[0.0, 186.0], [0.1, 186.0], [0.2, 192.0], [0.3, 198.0], [0.4, 198.0], [0.5, 204.0], [0.6, 204.0], [0.7, 210.0], [0.8, 210.0], [0.9, 211.0], [1.0, 211.0], [1.1, 215.0], [1.2, 215.0], [1.3, 215.0], [1.4, 215.0], [1.5, 218.0], [1.6, 218.0], [1.7, 219.0], [1.8, 220.0], [1.9, 220.0], [2.0, 229.0], [2.1, 232.0], [2.2, 234.0], [2.3, 234.0], [2.4, 240.0], [2.5, 242.0], [2.6, 245.0], [2.7, 245.0], [2.8, 247.0], [2.9, 247.0], [3.0, 248.0], [3.1, 248.0], [3.2, 249.0], [3.3, 249.0], [3.4, 249.0], [3.5, 249.0], [3.6, 252.0], [3.7, 253.0], [3.8, 253.0], [3.9, 258.0], [4.0, 259.0], [4.1, 260.0], [4.2, 260.0], [4.3, 262.0], [4.4, 263.0], [4.5, 265.0], [4.6, 265.0], [4.7, 265.0], [4.8, 267.0], [4.9, 268.0], [5.0, 268.0], [5.1, 268.0], [5.2, 270.0], [5.3, 270.0], [5.4, 270.0], [5.5, 271.0], [5.6, 271.0], [5.7, 271.0], [5.8, 271.0], [5.9, 274.0], [6.0, 275.0], [6.1, 275.0], [6.2, 276.0], [6.3, 280.0], [6.4, 280.0], [6.5, 280.0], [6.6, 281.0], [6.7, 281.0], [6.8, 281.0], [6.9, 282.0], [7.0, 284.0], [7.1, 284.0], [7.2, 284.0], [7.3, 285.0], [7.4, 285.0], [7.5, 285.0], [7.6, 285.0], [7.7, 285.0], [7.8, 288.0], [7.9, 290.0], [8.0, 290.0], [8.1, 291.0], [8.2, 292.0], [8.3, 292.0], [8.4, 292.0], [8.5, 293.0], [8.6, 294.0], [8.7, 294.0], [8.8, 294.0], [8.9, 295.0], [9.0, 296.0], [9.1, 296.0], [9.2, 297.0], [9.3, 300.0], [9.4, 300.0], [9.5, 300.0], [9.6, 305.0], [9.7, 305.0], [9.8, 305.0], [9.9, 305.0], [10.0, 306.0], [10.1, 307.0], [10.2, 307.0], [10.3, 307.0], [10.4, 308.0], [10.5, 310.0], [10.6, 310.0], [10.7, 311.0], [10.8, 312.0], [10.9, 313.0], [11.0, 313.0], [11.1, 313.0], [11.2, 313.0], [11.3, 314.0], [11.4, 314.0], [11.5, 314.0], [11.6, 315.0], [11.7, 315.0], [11.8, 317.0], [11.9, 320.0], [12.0, 321.0], [12.1, 321.0], [12.2, 323.0], [12.3, 324.0], [12.4, 324.0], [12.5, 324.0], [12.6, 325.0], [12.7, 329.0], [12.8, 331.0], [12.9, 331.0], [13.0, 331.0], [13.1, 333.0], [13.2, 334.0], [13.3, 334.0], [13.4, 334.0], [13.5, 335.0], [13.6, 335.0], [13.7, 335.0], [13.8, 336.0], [13.9, 339.0], [14.0, 339.0], [14.1, 339.0], [14.2, 340.0], [14.3, 341.0], [14.4, 341.0], [14.5, 342.0], [14.6, 342.0], [14.7, 344.0], [14.8, 344.0], [14.9, 345.0], [15.0, 345.0], [15.1, 345.0], [15.2, 345.0], [15.3, 347.0], [15.4, 350.0], [15.5, 350.0], [15.6, 352.0], [15.7, 354.0], [15.8, 354.0], [15.9, 354.0], [16.0, 358.0], [16.1, 360.0], [16.2, 360.0], [16.3, 360.0], [16.4, 360.0], [16.5, 360.0], [16.6, 361.0], [16.7, 361.0], [16.8, 361.0], [16.9, 362.0], [17.0, 362.0], [17.1, 363.0], [17.2, 364.0], [17.3, 369.0], [17.4, 369.0], [17.5, 370.0], [17.6, 372.0], [17.7, 375.0], [17.8, 375.0], [17.9, 375.0], [18.0, 375.0], [18.1, 382.0], [18.2, 382.0], [18.3, 382.0], [18.4, 383.0], [18.5, 383.0], [18.6, 385.0], [18.7, 386.0], [18.8, 387.0], [18.9, 387.0], [19.0, 389.0], [19.1, 390.0], [19.2, 391.0], [19.3, 391.0], [19.4, 392.0], [19.5, 393.0], [19.6, 394.0], [19.7, 394.0], [19.8, 395.0], [19.9, 397.0], [20.0, 397.0], [20.1, 399.0], [20.2, 400.0], [20.3, 400.0], [20.4, 400.0], [20.5, 404.0], [20.6, 411.0], [20.7, 415.0], [20.8, 415.0], [20.9, 415.0], [21.0, 418.0], [21.1, 418.0], [21.2, 418.0], [21.3, 428.0], [21.4, 429.0], [21.5, 434.0], [21.6, 434.0], [21.7, 435.0], [21.8, 437.0], [21.9, 437.0], [22.0, 439.0], [22.1, 441.0], [22.2, 442.0], [22.3, 442.0], [22.4, 443.0], [22.5, 444.0], [22.6, 447.0], [22.7, 447.0], [22.8, 448.0], [22.9, 450.0], [23.0, 452.0], [23.1, 452.0], [23.2, 460.0], [23.3, 466.0], [23.4, 466.0], [23.5, 470.0], [23.6, 471.0], [23.7, 472.0], [23.8, 472.0], [23.9, 473.0], [24.0, 474.0], [24.1, 477.0], [24.2, 477.0], [24.3, 478.0], [24.4, 487.0], [24.5, 489.0], [24.6, 489.0], [24.7, 490.0], [24.8, 491.0], [24.9, 493.0], [25.0, 493.0], [25.1, 494.0], [25.2, 494.0], [25.3, 494.0], [25.4, 495.0], [25.5, 496.0], [25.6, 497.0], [25.7, 497.0], [25.8, 497.0], [25.9, 500.0], [26.0, 502.0], [26.1, 502.0], [26.2, 503.0], [26.3, 504.0], [26.4, 505.0], [26.5, 505.0], [26.6, 505.0], [26.7, 505.0], [26.8, 505.0], [26.9, 505.0], [27.0, 506.0], [27.1, 509.0], [27.2, 509.0], [27.3, 510.0], [27.4, 513.0], [27.5, 514.0], [27.6, 514.0], [27.7, 516.0], [27.8, 517.0], [27.9, 517.0], [28.0, 517.0], [28.1, 519.0], [28.2, 520.0], [28.3, 522.0], [28.4, 522.0], [28.5, 523.0], [28.6, 523.0], [28.7, 523.0], [28.8, 524.0], [28.9, 529.0], [29.0, 531.0], [29.1, 531.0], [29.2, 532.0], [29.3, 532.0], [29.4, 533.0], [29.5, 533.0], [29.6, 536.0], [29.7, 538.0], [29.8, 538.0], [29.9, 538.0], [30.0, 541.0], [30.1, 542.0], [30.2, 542.0], [30.3, 542.0], [30.4, 544.0], [30.5, 544.0], [30.6, 544.0], [30.7, 545.0], [30.8, 545.0], [30.9, 546.0], [31.0, 546.0], [31.1, 548.0], [31.2, 549.0], [31.3, 550.0], [31.4, 550.0], [31.5, 550.0], [31.6, 553.0], [31.7, 553.0], [31.8, 553.0], [31.9, 554.0], [32.0, 556.0], [32.1, 556.0], [32.2, 556.0], [32.3, 556.0], [32.4, 557.0], [32.5, 557.0], [32.6, 557.0], [32.7, 558.0], [32.8, 559.0], [32.9, 559.0], [33.0, 561.0], [33.1, 562.0], [33.2, 562.0], [33.3, 562.0], [33.4, 563.0], [33.5, 564.0], [33.6, 564.0], [33.7, 565.0], [33.8, 565.0], [33.9, 566.0], [34.0, 566.0], [34.1, 566.0], [34.2, 568.0], [34.3, 571.0], [34.4, 571.0], [34.5, 571.0], [34.6, 571.0], [34.7, 572.0], [34.8, 572.0], [34.9, 574.0], [35.0, 576.0], [35.1, 576.0], [35.2, 578.0], [35.3, 581.0], [35.4, 584.0], [35.5, 584.0], [35.6, 587.0], [35.7, 589.0], [35.8, 589.0], [35.9, 589.0], [36.0, 590.0], [36.1, 591.0], [36.2, 593.0], [36.3, 593.0], [36.4, 593.0], [36.5, 594.0], [36.6, 594.0], [36.7, 594.0], [36.8, 596.0], [36.9, 596.0], [37.0, 596.0], [37.1, 597.0], [37.2, 601.0], [37.3, 602.0], [37.4, 602.0], [37.5, 602.0], [37.6, 603.0], [37.7, 604.0], [37.8, 604.0], [37.9, 605.0], [38.0, 606.0], [38.1, 607.0], [38.2, 607.0], [38.3, 607.0], [38.4, 607.0], [38.5, 607.0], [38.6, 610.0], [38.7, 610.0], [38.8, 612.0], [38.9, 612.0], [39.0, 614.0], [39.1, 616.0], [39.2, 619.0], [39.3, 619.0], [39.4, 620.0], [39.5, 621.0], [39.6, 621.0], [39.7, 621.0], [39.8, 622.0], [39.9, 624.0], [40.0, 625.0], [40.1, 625.0], [40.2, 625.0], [40.3, 626.0], [40.4, 626.0], [40.5, 627.0], [40.6, 628.0], [40.7, 630.0], [40.8, 630.0], [40.9, 632.0], [41.0, 632.0], [41.1, 634.0], [41.2, 634.0], [41.3, 635.0], [41.4, 636.0], [41.5, 638.0], [41.6, 638.0], [41.7, 640.0], [41.8, 641.0], [41.9, 641.0], [42.0, 644.0], [42.1, 644.0], [42.2, 645.0], [42.3, 645.0], [42.4, 645.0], [42.5, 649.0], [42.6, 655.0], [42.7, 655.0], [42.8, 656.0], [42.9, 656.0], [43.0, 660.0], [43.1, 660.0], [43.2, 666.0], [43.3, 668.0], [43.4, 668.0], [43.5, 669.0], [43.6, 670.0], [43.7, 670.0], [43.8, 670.0], [43.9, 674.0], [44.0, 674.0], [44.1, 678.0], [44.2, 678.0], [44.3, 678.0], [44.4, 680.0], [44.5, 685.0], [44.6, 685.0], [44.7, 686.0], [44.8, 691.0], [44.9, 691.0], [45.0, 691.0], [45.1, 694.0], [45.2, 694.0], [45.3, 694.0], [45.4, 695.0], [45.5, 698.0], [45.6, 698.0], [45.7, 698.0], [45.8, 699.0], [45.9, 700.0], [46.0, 706.0], [46.1, 706.0], [46.2, 708.0], [46.3, 711.0], [46.4, 716.0], [46.5, 716.0], [46.6, 719.0], [46.7, 722.0], [46.8, 722.0], [46.9, 723.0], [47.0, 723.0], [47.1, 723.0], [47.2, 723.0], [47.3, 729.0], [47.4, 730.0], [47.5, 732.0], [47.6, 732.0], [47.7, 734.0], [47.8, 736.0], [47.9, 736.0], [48.0, 736.0], [48.1, 741.0], [48.2, 747.0], [48.3, 748.0], [48.4, 748.0], [48.5, 748.0], [48.6, 748.0], [48.7, 748.0], [48.8, 749.0], [48.9, 749.0], [49.0, 751.0], [49.1, 751.0], [49.2, 751.0], [49.3, 752.0], [49.4, 755.0], [49.5, 755.0], [49.6, 758.0], [49.7, 759.0], [49.8, 760.0], [49.9, 760.0], [50.0, 762.0], [50.1, 764.0], [50.2, 764.0], [50.3, 768.0], [50.4, 770.0], [50.5, 770.0], [50.6, 770.0], [50.7, 771.0], [50.8, 772.0], [50.9, 777.0], [51.0, 777.0], [51.1, 778.0], [51.2, 779.0], [51.3, 781.0], [51.4, 781.0], [51.5, 782.0], [51.6, 784.0], [51.7, 784.0], [51.8, 790.0], [51.9, 791.0], [52.0, 792.0], [52.1, 792.0], [52.2, 796.0], [52.3, 796.0], [52.4, 797.0], [52.5, 797.0], [52.6, 798.0], [52.7, 798.0], [52.8, 799.0], [52.9, 799.0], [53.0, 801.0], [53.1, 802.0], [53.2, 803.0], [53.3, 803.0], [53.4, 804.0], [53.5, 804.0], [53.6, 804.0], [53.7, 805.0], [53.8, 807.0], [53.9, 810.0], [54.0, 810.0], [54.1, 816.0], [54.2, 818.0], [54.3, 818.0], [54.4, 818.0], [54.5, 822.0], [54.6, 825.0], [54.7, 826.0], [54.8, 826.0], [54.9, 827.0], [55.0, 829.0], [55.1, 829.0], [55.2, 831.0], [55.3, 832.0], [55.4, 839.0], [55.5, 839.0], [55.6, 840.0], [55.7, 840.0], [55.8, 841.0], [55.9, 841.0], [56.0, 845.0], [56.1, 845.0], [56.2, 848.0], [56.3, 848.0], [56.4, 853.0], [56.5, 853.0], [56.6, 855.0], [56.7, 855.0], [56.8, 857.0], [56.9, 858.0], [57.0, 858.0], [57.1, 860.0], [57.2, 861.0], [57.3, 865.0], [57.4, 865.0], [57.5, 867.0], [57.6, 872.0], [57.7, 875.0], [57.8, 875.0], [57.9, 877.0], [58.0, 882.0], [58.1, 882.0], [58.2, 882.0], [58.3, 882.0], [58.4, 883.0], [58.5, 883.0], [58.6, 885.0], [58.7, 887.0], [58.8, 888.0], [58.9, 888.0], [59.0, 888.0], [59.1, 893.0], [59.2, 894.0], [59.3, 894.0], [59.4, 894.0], [59.5, 895.0], [59.6, 896.0], [59.7, 896.0], [59.8, 902.0], [59.9, 905.0], [60.0, 907.0], [60.1, 907.0], [60.2, 908.0], [60.3, 909.0], [60.4, 909.0], [60.5, 910.0], [60.6, 910.0], [60.7, 912.0], [60.8, 912.0], [60.9, 913.0], [61.0, 913.0], [61.1, 914.0], [61.2, 914.0], [61.3, 923.0], [61.4, 925.0], [61.5, 925.0], [61.6, 925.0], [61.7, 928.0], [61.8, 929.0], [61.9, 929.0], [62.0, 931.0], [62.1, 931.0], [62.2, 932.0], [62.3, 932.0], [62.4, 934.0], [62.5, 936.0], [62.6, 937.0], [62.7, 937.0], [62.8, 941.0], [62.9, 941.0], [63.0, 942.0], [63.1, 942.0], [63.2, 949.0], [63.3, 950.0], [63.4, 950.0], [63.5, 956.0], [63.6, 957.0], [63.7, 958.0], [63.8, 958.0], [63.9, 959.0], [64.0, 959.0], [64.1, 960.0], [64.2, 960.0], [64.3, 961.0], [64.4, 961.0], [64.5, 962.0], [64.6, 962.0], [64.7, 964.0], [64.8, 966.0], [64.9, 967.0], [65.0, 967.0], [65.1, 968.0], [65.2, 969.0], [65.3, 969.0], [65.4, 969.0], [65.5, 970.0], [65.6, 972.0], [65.7, 972.0], [65.8, 973.0], [65.9, 975.0], [66.0, 976.0], [66.1, 976.0], [66.2, 976.0], [66.3, 977.0], [66.4, 978.0], [66.5, 978.0], [66.6, 979.0], [66.7, 980.0], [66.8, 980.0], [66.9, 982.0], [67.0, 982.0], [67.1, 987.0], [67.2, 987.0], [67.3, 989.0], [67.4, 991.0], [67.5, 991.0], [67.6, 991.0], [67.7, 993.0], [67.8, 993.0], [67.9, 996.0], [68.0, 996.0], [68.1, 999.0], [68.2, 1004.0], [68.3, 1004.0], [68.4, 1004.0], [68.5, 1004.0], [68.6, 1005.0], [68.7, 1005.0], [68.8, 1006.0], [68.9, 1010.0], [69.0, 1012.0], [69.1, 1012.0], [69.2, 1013.0], [69.3, 1013.0], [69.4, 1013.0], [69.5, 1013.0], [69.6, 1016.0], [69.7, 1019.0], [69.8, 1022.0], [69.9, 1022.0], [70.0, 1023.0], [70.1, 1026.0], [70.2, 1026.0], [70.3, 1030.0], [70.4, 1032.0], [70.5, 1032.0], [70.6, 1032.0], [70.7, 1033.0], [70.8, 1034.0], [70.9, 1036.0], [71.0, 1036.0], [71.1, 1036.0], [71.2, 1041.0], [71.3, 1041.0], [71.4, 1041.0], [71.5, 1042.0], [71.6, 1043.0], [71.7, 1043.0], [71.8, 1043.0], [71.9, 1046.0], [72.0, 1047.0], [72.1, 1047.0], [72.2, 1048.0], [72.3, 1049.0], [72.4, 1049.0], [72.5, 1049.0], [72.6, 1050.0], [72.7, 1053.0], [72.8, 1057.0], [72.9, 1057.0], [73.0, 1059.0], [73.1, 1059.0], [73.2, 1060.0], [73.3, 1060.0], [73.4, 1061.0], [73.5, 1066.0], [73.6, 1066.0], [73.7, 1073.0], [73.8, 1074.0], [73.9, 1074.0], [74.0, 1074.0], [74.1, 1075.0], [74.2, 1077.0], [74.3, 1078.0], [74.4, 1078.0], [74.5, 1080.0], [74.6, 1080.0], [74.7, 1081.0], [74.8, 1081.0], [74.9, 1082.0], [75.0, 1083.0], [75.1, 1083.0], [75.2, 1083.0], [75.3, 1088.0], [75.4, 1089.0], [75.5, 1089.0], [75.6, 1090.0], [75.7, 1090.0], [75.8, 1092.0], [75.9, 1092.0], [76.0, 1093.0], [76.1, 1093.0], [76.2, 1093.0], [76.3, 1093.0], [76.4, 1097.0], [76.5, 1097.0], [76.6, 1098.0], [76.7, 1098.0], [76.8, 1099.0], [76.9, 1102.0], [77.0, 1102.0], [77.1, 1104.0], [77.2, 1105.0], [77.3, 1105.0], [77.4, 1105.0], [77.5, 1108.0], [77.6, 1109.0], [77.7, 1112.0], [77.8, 1112.0], [77.9, 1115.0], [78.0, 1115.0], [78.1, 1116.0], [78.2, 1116.0], [78.3, 1116.0], [78.4, 1118.0], [78.5, 1118.0], [78.6, 1118.0], [78.7, 1119.0], [78.8, 1120.0], [78.9, 1120.0], [79.0, 1121.0], [79.1, 1123.0], [79.2, 1125.0], [79.3, 1125.0], [79.4, 1129.0], [79.5, 1130.0], [79.6, 1131.0], [79.7, 1131.0], [79.8, 1140.0], [79.9, 1142.0], [80.0, 1147.0], [80.1, 1147.0], [80.2, 1147.0], [80.3, 1156.0], [80.4, 1156.0], [80.5, 1159.0], [80.6, 1160.0], [80.7, 1160.0], [80.8, 1160.0], [80.9, 1161.0], [81.0, 1165.0], [81.1, 1166.0], [81.2, 1166.0], [81.3, 1168.0], [81.4, 1170.0], [81.5, 1171.0], [81.6, 1171.0], [81.7, 1172.0], [81.8, 1172.0], [81.9, 1172.0], [82.0, 1173.0], [82.1, 1174.0], [82.2, 1176.0], [82.3, 1176.0], [82.4, 1180.0], [82.5, 1180.0], [82.6, 1181.0], [82.7, 1181.0], [82.8, 1181.0], [82.9, 1183.0], [83.0, 1184.0], [83.1, 1184.0], [83.2, 1186.0], [83.3, 1187.0], [83.4, 1187.0], [83.5, 1188.0], [83.6, 1193.0], [83.7, 1195.0], [83.8, 1195.0], [83.9, 1196.0], [84.0, 1198.0], [84.1, 1199.0], [84.2, 1199.0], [84.3, 1199.0], [84.4, 1200.0], [84.5, 1200.0], [84.6, 1200.0], [84.7, 1201.0], [84.8, 1202.0], [84.9, 1203.0], [85.0, 1203.0], [85.1, 1211.0], [85.2, 1213.0], [85.3, 1213.0], [85.4, 1217.0], [85.5, 1225.0], [85.6, 1227.0], [85.7, 1227.0], [85.8, 1228.0], [85.9, 1228.0], [86.0, 1228.0], [86.1, 1228.0], [86.2, 1230.0], [86.3, 1235.0], [86.4, 1241.0], [86.5, 1241.0], [86.6, 1243.0], [86.7, 1244.0], [86.8, 1244.0], [86.9, 1246.0], [87.0, 1249.0], [87.1, 1249.0], [87.2, 1249.0], [87.3, 1249.0], [87.4, 1250.0], [87.5, 1252.0], [87.6, 1252.0], [87.7, 1253.0], [87.8, 1256.0], [87.9, 1257.0], [88.0, 1257.0], [88.1, 1259.0], [88.2, 1259.0], [88.3, 1260.0], [88.4, 1260.0], [88.5, 1260.0], [88.6, 1269.0], [88.7, 1269.0], [88.8, 1270.0], [88.9, 1272.0], [89.0, 1279.0], [89.1, 1279.0], [89.2, 1291.0], [89.3, 1292.0], [89.4, 1295.0], [89.5, 1295.0], [89.6, 1297.0], [89.7, 1302.0], [89.8, 1303.0], [89.9, 1303.0], [90.0, 1304.0], [90.1, 1318.0], [90.2, 1318.0], [90.3, 1320.0], [90.4, 1324.0], [90.5, 1328.0], [90.6, 1328.0], [90.7, 1339.0], [90.8, 1340.0], [90.9, 1348.0], [91.0, 1348.0], [91.1, 1349.0], [91.2, 1354.0], [91.3, 1362.0], [91.4, 1362.0], [91.5, 1376.0], [91.6, 1382.0], [91.7, 1382.0], [91.8, 1386.0], [91.9, 1386.0], [92.0, 1387.0], [92.1, 1387.0], [92.2, 1390.0], [92.3, 1404.0], [92.4, 1418.0], [92.5, 1418.0], [92.6, 1423.0], [92.7, 1426.0], [92.8, 1426.0], [92.9, 1426.0], [93.0, 1428.0], [93.1, 1431.0], [93.2, 1431.0], [93.3, 1431.0], [93.4, 1431.0], [93.5, 1441.0], [93.6, 1441.0], [93.7, 1442.0], [93.8, 1458.0], [93.9, 1460.0], [94.0, 1460.0], [94.1, 1468.0], [94.2, 1477.0], [94.3, 1496.0], [94.4, 1496.0], [94.5, 1505.0], [94.6, 1512.0], [94.7, 1559.0], [94.8, 1559.0], [94.9, 1560.0], [95.0, 1569.0], [95.1, 1569.0], [95.2, 1575.0], [95.3, 1576.0], [95.4, 1576.0], [95.5, 1576.0], [95.6, 1600.0], [95.7, 1635.0], [95.8, 1676.0], [95.9, 1676.0], [96.0, 1691.0], [96.1, 1704.0], [96.2, 1744.0], [96.3, 1744.0], [96.4, 1755.0], [96.5, 1768.0], [96.6, 1843.0], [96.7, 1843.0], [96.8, 1861.0], [96.9, 1863.0], [97.0, 1863.0], [97.1, 1865.0], [97.2, 1924.0], [97.3, 1954.0], [97.4, 1954.0], [97.5, 1983.0], [97.6, 1998.0], [97.7, 1999.0], [97.8, 1999.0], [97.9, 2003.0], [98.0, 2031.0], [98.1, 2062.0], [98.2, 2062.0], [98.3, 2503.0], [98.4, 2684.0], [98.5, 2684.0], [98.6, 2730.0], [98.7, 2853.0], [98.8, 2855.0], [98.9, 2855.0], [99.0, 2904.0], [99.1, 2971.0], [99.2, 3030.0], [99.3, 3030.0], [99.4, 3079.0], [99.5, 3110.0], [99.6, 3478.0], [99.7, 3478.0], [99.8, 3633.0], [99.9, 3741.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 83.0, "series": [{"data": [[600.0, 64.0], [700.0, 52.0], [800.0, 50.0], [900.0, 62.0], [1000.0, 64.0], [1100.0, 55.0], [1200.0, 39.0], [1300.0, 19.0], [1400.0, 16.0], [1500.0, 8.0], [100.0, 3.0], [1600.0, 4.0], [1700.0, 4.0], [1800.0, 4.0], [1900.0, 5.0], [2000.0, 3.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 2.0], [3000.0, 2.0], [3100.0, 1.0], [200.0, 65.0], [3400.0, 1.0], [3600.0, 1.0], [3700.0, 1.0], [300.0, 80.0], [400.0, 42.0], [500.0, 83.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 41.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 503.0, "series": [{"data": [[0.0, 191.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 503.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 41.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.931962025316455, "minX": 1.60280268E12, "maxY": 10.0, "series": [{"data": [[1.60280274E12, 9.931962025316455], [1.60280268E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280274E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 361.0, "minX": 1.0, "maxY": 1354.0, "series": [{"data": [[8.0, 361.0], [4.0, 907.0], [2.0, 941.0], [1.0, 976.0], [9.0, 1142.0], [10.0, 826.7493112947665], [5.0, 1354.0], [6.0, 448.0], [3.0, 1259.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.941496598639455, 828.2312925170074]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 779.6333333333333, "minX": 1.60280268E12, "maxY": 1442351.45, "series": [{"data": [[1.60280274E12, 1442351.45], [1.60280268E12, 393429.81666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280274E12, 4743.4], [1.60280268E12, 779.6333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280274E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 792.1234177215183, "minX": 1.60280268E12, "maxY": 1049.7864077669901, "series": [{"data": [[1.60280274E12, 792.1234177215183], [1.60280268E12, 1049.7864077669901]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280274E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 790.9984177215189, "minX": 1.60280268E12, "maxY": 1048.3592233009708, "series": [{"data": [[1.60280274E12, 790.9984177215189], [1.60280268E12, 1048.3592233009708]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280274E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007911392405063292, "minX": 1.60280268E12, "maxY": 0.8155339805825247, "series": [{"data": [[1.60280274E12, 0.007911392405063292], [1.60280268E12, 0.8155339805825247]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280274E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 186.0, "minX": 1.60280268E12, "maxY": 3741.0, "series": [{"data": [[1.60280274E12, 3741.0], [1.60280268E12, 3633.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280274E12, 213.78799939632415], [1.60280268E12, 198.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280274E12, 215.0], [1.60280268E12, 198.35520011901855]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280274E12, 215.0], [1.60280268E12, 198.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280274E12, 186.0], [1.60280268E12, 198.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280274E12, 770.0], [1.60280268E12, 719.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280274E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 552.5, "minX": 1.0, "maxY": 1042.0, "series": [{"data": [[9.0, 1042.0], [10.0, 869.5], [11.0, 993.0], [12.0, 952.5], [13.0, 699.0], [14.0, 681.5], [15.0, 591.0], [16.0, 564.0], [1.0, 976.0], [17.0, 556.0], [18.0, 552.5], [19.0, 599.0], [7.0, 955.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 552.5, "minX": 1.0, "maxY": 1036.5, "series": [{"data": [[9.0, 1036.5], [10.0, 868.5], [11.0, 993.0], [12.0, 952.5], [13.0, 698.0], [14.0, 680.5], [15.0, 591.0], [16.0, 562.5], [1.0, 976.0], [17.0, 555.0], [18.0, 552.5], [19.0, 598.5], [7.0, 954.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8833333333333333, "minX": 1.60280268E12, "maxY": 10.366666666666667, "series": [{"data": [[1.60280274E12, 10.366666666666667], [1.60280268E12, 1.8833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280274E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60280268E12, "maxY": 10.533333333333333, "series": [{"data": [[1.60280274E12, 10.533333333333333], [1.60280268E12, 1.7166666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280274E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60280268E12, "maxY": 10.533333333333333, "series": [{"data": [[1.60280274E12, 10.533333333333333], [1.60280268E12, 1.7166666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280274E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60280268E12, "maxY": 10.533333333333333, "series": [{"data": [[1.60280274E12, 10.533333333333333], [1.60280268E12, 1.7166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280274E12, "title": "Total Transactions Per Second"}},
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

