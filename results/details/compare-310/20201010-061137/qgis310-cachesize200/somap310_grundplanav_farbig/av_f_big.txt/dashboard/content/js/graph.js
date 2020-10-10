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
        data: {"result": {"minY": 178.0, "minX": 0.0, "maxY": 3648.0, "series": [{"data": [[0.0, 178.0], [0.1, 178.0], [0.2, 185.0], [0.3, 186.0], [0.4, 186.0], [0.5, 191.0], [0.6, 193.0], [0.7, 194.0], [0.8, 194.0], [0.9, 198.0], [1.0, 208.0], [1.1, 208.0], [1.2, 208.0], [1.3, 212.0], [1.4, 222.0], [1.5, 222.0], [1.6, 222.0], [1.7, 223.0], [1.8, 230.0], [1.9, 230.0], [2.0, 232.0], [2.1, 236.0], [2.2, 239.0], [2.3, 239.0], [2.4, 241.0], [2.5, 242.0], [2.6, 246.0], [2.7, 246.0], [2.8, 247.0], [2.9, 255.0], [3.0, 267.0], [3.1, 267.0], [3.2, 268.0], [3.3, 271.0], [3.4, 271.0], [3.5, 273.0], [3.6, 273.0], [3.7, 274.0], [3.8, 274.0], [3.9, 274.0], [4.0, 276.0], [4.1, 276.0], [4.2, 276.0], [4.3, 277.0], [4.4, 278.0], [4.5, 281.0], [4.6, 281.0], [4.7, 281.0], [4.8, 282.0], [4.9, 284.0], [5.0, 284.0], [5.1, 286.0], [5.2, 289.0], [5.3, 289.0], [5.4, 290.0], [5.5, 290.0], [5.6, 294.0], [5.7, 294.0], [5.8, 296.0], [5.9, 296.0], [6.0, 297.0], [6.1, 297.0], [6.2, 298.0], [6.3, 298.0], [6.4, 300.0], [6.5, 300.0], [6.6, 301.0], [6.7, 302.0], [6.8, 302.0], [6.9, 303.0], [7.0, 306.0], [7.1, 306.0], [7.2, 306.0], [7.3, 309.0], [7.4, 310.0], [7.5, 311.0], [7.6, 311.0], [7.7, 312.0], [7.8, 312.0], [7.9, 314.0], [8.0, 314.0], [8.1, 315.0], [8.2, 316.0], [8.3, 318.0], [8.4, 318.0], [8.5, 318.0], [8.6, 320.0], [8.7, 320.0], [8.8, 321.0], [8.9, 322.0], [9.0, 323.0], [9.1, 323.0], [9.2, 329.0], [9.3, 330.0], [9.4, 334.0], [9.5, 334.0], [9.6, 334.0], [9.7, 336.0], [9.8, 336.0], [9.9, 336.0], [10.0, 337.0], [10.1, 337.0], [10.2, 337.0], [10.3, 339.0], [10.4, 340.0], [10.5, 342.0], [10.6, 342.0], [10.7, 343.0], [10.8, 346.0], [10.9, 348.0], [11.0, 348.0], [11.1, 349.0], [11.2, 351.0], [11.3, 351.0], [11.4, 351.0], [11.5, 354.0], [11.6, 356.0], [11.7, 356.0], [11.8, 356.0], [11.9, 357.0], [12.0, 358.0], [12.1, 358.0], [12.2, 360.0], [12.3, 363.0], [12.4, 364.0], [12.5, 364.0], [12.6, 364.0], [12.7, 364.0], [12.8, 364.0], [12.9, 364.0], [13.0, 365.0], [13.1, 366.0], [13.2, 366.0], [13.3, 366.0], [13.4, 366.0], [13.5, 367.0], [13.6, 367.0], [13.7, 370.0], [13.8, 371.0], [13.9, 372.0], [14.0, 372.0], [14.1, 373.0], [14.2, 373.0], [14.3, 373.0], [14.4, 373.0], [14.5, 375.0], [14.6, 376.0], [14.7, 377.0], [14.8, 377.0], [14.9, 379.0], [15.0, 381.0], [15.1, 381.0], [15.2, 381.0], [15.3, 385.0], [15.4, 385.0], [15.5, 385.0], [15.6, 385.0], [15.7, 387.0], [15.8, 389.0], [15.9, 389.0], [16.0, 390.0], [16.1, 390.0], [16.2, 390.0], [16.3, 390.0], [16.4, 391.0], [16.5, 392.0], [16.6, 394.0], [16.7, 394.0], [16.8, 397.0], [16.9, 404.0], [17.0, 404.0], [17.1, 407.0], [17.2, 411.0], [17.3, 411.0], [17.4, 411.0], [17.5, 412.0], [17.6, 412.0], [17.7, 413.0], [17.8, 413.0], [17.9, 413.0], [18.0, 414.0], [18.1, 414.0], [18.2, 414.0], [18.3, 417.0], [18.4, 417.0], [18.5, 417.0], [18.6, 417.0], [18.7, 419.0], [18.8, 423.0], [18.9, 423.0], [19.0, 424.0], [19.1, 427.0], [19.2, 429.0], [19.3, 429.0], [19.4, 434.0], [19.5, 434.0], [19.6, 435.0], [19.7, 435.0], [19.8, 436.0], [19.9, 436.0], [20.0, 443.0], [20.1, 443.0], [20.2, 443.0], [20.3, 447.0], [20.4, 447.0], [20.5, 449.0], [20.6, 449.0], [20.7, 449.0], [20.8, 449.0], [20.9, 450.0], [21.0, 450.0], [21.1, 452.0], [21.2, 452.0], [21.3, 453.0], [21.4, 454.0], [21.5, 455.0], [21.6, 455.0], [21.7, 459.0], [21.8, 459.0], [21.9, 459.0], [22.0, 460.0], [22.1, 464.0], [22.2, 464.0], [22.3, 464.0], [22.4, 464.0], [22.5, 471.0], [22.6, 480.0], [22.7, 480.0], [22.8, 481.0], [22.9, 488.0], [23.0, 489.0], [23.1, 489.0], [23.2, 492.0], [23.3, 494.0], [23.4, 494.0], [23.5, 496.0], [23.6, 497.0], [23.7, 497.0], [23.8, 497.0], [23.9, 498.0], [24.0, 498.0], [24.1, 503.0], [24.2, 503.0], [24.3, 504.0], [24.4, 504.0], [24.5, 505.0], [24.6, 505.0], [24.7, 506.0], [24.8, 508.0], [24.9, 509.0], [25.0, 509.0], [25.1, 510.0], [25.2, 510.0], [25.3, 510.0], [25.4, 511.0], [25.5, 511.0], [25.6, 515.0], [25.7, 515.0], [25.8, 517.0], [25.9, 517.0], [26.0, 519.0], [26.1, 519.0], [26.2, 520.0], [26.3, 522.0], [26.4, 522.0], [26.5, 522.0], [26.6, 522.0], [26.7, 526.0], [26.8, 526.0], [26.9, 526.0], [27.0, 527.0], [27.1, 529.0], [27.2, 529.0], [27.3, 530.0], [27.4, 530.0], [27.5, 532.0], [27.6, 532.0], [27.7, 533.0], [27.8, 534.0], [27.9, 536.0], [28.0, 536.0], [28.1, 539.0], [28.2, 541.0], [28.3, 542.0], [28.4, 542.0], [28.5, 544.0], [28.6, 544.0], [28.7, 544.0], [28.8, 550.0], [28.9, 551.0], [29.0, 552.0], [29.1, 552.0], [29.2, 553.0], [29.3, 553.0], [29.4, 554.0], [29.5, 554.0], [29.6, 556.0], [29.7, 557.0], [29.8, 557.0], [29.9, 557.0], [30.0, 559.0], [30.1, 560.0], [30.2, 560.0], [30.3, 560.0], [30.4, 562.0], [30.5, 565.0], [30.6, 565.0], [30.7, 566.0], [30.8, 566.0], [30.9, 566.0], [31.0, 566.0], [31.1, 567.0], [31.2, 567.0], [31.3, 571.0], [31.4, 571.0], [31.5, 572.0], [31.6, 573.0], [31.7, 573.0], [31.8, 573.0], [31.9, 576.0], [32.0, 577.0], [32.1, 577.0], [32.2, 579.0], [32.3, 580.0], [32.4, 582.0], [32.5, 582.0], [32.6, 583.0], [32.7, 583.0], [32.8, 584.0], [32.9, 584.0], [33.0, 585.0], [33.1, 590.0], [33.2, 590.0], [33.3, 590.0], [33.4, 591.0], [33.5, 591.0], [33.6, 591.0], [33.7, 592.0], [33.8, 593.0], [33.9, 595.0], [34.0, 595.0], [34.1, 595.0], [34.2, 596.0], [34.3, 597.0], [34.4, 597.0], [34.5, 598.0], [34.6, 601.0], [34.7, 603.0], [34.8, 603.0], [34.9, 603.0], [35.0, 605.0], [35.1, 605.0], [35.2, 605.0], [35.3, 612.0], [35.4, 614.0], [35.5, 614.0], [35.6, 616.0], [35.7, 617.0], [35.8, 618.0], [35.9, 618.0], [36.0, 618.0], [36.1, 619.0], [36.2, 619.0], [36.3, 619.0], [36.4, 620.0], [36.5, 622.0], [36.6, 624.0], [36.7, 624.0], [36.8, 624.0], [36.9, 624.0], [37.0, 624.0], [37.1, 625.0], [37.2, 626.0], [37.3, 627.0], [37.4, 627.0], [37.5, 628.0], [37.6, 628.0], [37.7, 628.0], [37.8, 628.0], [37.9, 629.0], [38.0, 629.0], [38.1, 629.0], [38.2, 629.0], [38.3, 629.0], [38.4, 633.0], [38.5, 633.0], [38.6, 635.0], [38.7, 636.0], [38.8, 637.0], [38.9, 637.0], [39.0, 637.0], [39.1, 638.0], [39.2, 639.0], [39.3, 639.0], [39.4, 639.0], [39.5, 642.0], [39.6, 644.0], [39.7, 644.0], [39.8, 644.0], [39.9, 644.0], [40.0, 648.0], [40.1, 648.0], [40.2, 653.0], [40.3, 657.0], [40.4, 657.0], [40.5, 659.0], [40.6, 662.0], [40.7, 668.0], [40.8, 668.0], [40.9, 668.0], [41.0, 669.0], [41.1, 670.0], [41.2, 670.0], [41.3, 670.0], [41.4, 671.0], [41.5, 673.0], [41.6, 673.0], [41.7, 674.0], [41.8, 676.0], [41.9, 676.0], [42.0, 676.0], [42.1, 676.0], [42.2, 676.0], [42.3, 676.0], [42.4, 677.0], [42.5, 680.0], [42.6, 682.0], [42.7, 682.0], [42.8, 687.0], [42.9, 687.0], [43.0, 689.0], [43.1, 689.0], [43.2, 690.0], [43.3, 691.0], [43.4, 691.0], [43.5, 691.0], [43.6, 691.0], [43.7, 693.0], [43.8, 693.0], [43.9, 694.0], [44.0, 699.0], [44.1, 701.0], [44.2, 701.0], [44.3, 701.0], [44.4, 702.0], [44.5, 704.0], [44.6, 704.0], [44.7, 705.0], [44.8, 709.0], [44.9, 710.0], [45.0, 710.0], [45.1, 711.0], [45.2, 714.0], [45.3, 714.0], [45.4, 714.0], [45.5, 715.0], [45.6, 715.0], [45.7, 715.0], [45.8, 720.0], [45.9, 726.0], [46.0, 727.0], [46.1, 727.0], [46.2, 728.0], [46.3, 728.0], [46.4, 730.0], [46.5, 730.0], [46.6, 732.0], [46.7, 733.0], [46.8, 733.0], [46.9, 733.0], [47.0, 734.0], [47.1, 739.0], [47.2, 739.0], [47.3, 741.0], [47.4, 748.0], [47.5, 748.0], [47.6, 748.0], [47.7, 751.0], [47.8, 754.0], [47.9, 762.0], [48.0, 762.0], [48.1, 766.0], [48.2, 766.0], [48.3, 767.0], [48.4, 767.0], [48.5, 770.0], [48.6, 773.0], [48.7, 773.0], [48.8, 776.0], [48.9, 783.0], [49.0, 784.0], [49.1, 784.0], [49.2, 785.0], [49.3, 786.0], [49.4, 787.0], [49.5, 787.0], [49.6, 793.0], [49.7, 800.0], [49.8, 801.0], [49.9, 801.0], [50.0, 803.0], [50.1, 807.0], [50.2, 807.0], [50.3, 809.0], [50.4, 809.0], [50.5, 810.0], [50.6, 810.0], [50.7, 812.0], [50.8, 818.0], [50.9, 822.0], [51.0, 822.0], [51.1, 824.0], [51.2, 827.0], [51.3, 828.0], [51.4, 828.0], [51.5, 828.0], [51.6, 829.0], [51.7, 829.0], [51.8, 831.0], [51.9, 831.0], [52.0, 834.0], [52.1, 834.0], [52.2, 834.0], [52.3, 834.0], [52.4, 837.0], [52.5, 837.0], [52.6, 837.0], [52.7, 839.0], [52.8, 840.0], [52.9, 840.0], [53.0, 842.0], [53.1, 846.0], [53.2, 847.0], [53.3, 847.0], [53.4, 847.0], [53.5, 848.0], [53.6, 848.0], [53.7, 849.0], [53.8, 850.0], [53.9, 851.0], [54.0, 851.0], [54.1, 858.0], [54.2, 859.0], [54.3, 859.0], [54.4, 859.0], [54.5, 862.0], [54.6, 862.0], [54.7, 863.0], [54.8, 863.0], [54.9, 864.0], [55.0, 864.0], [55.1, 864.0], [55.2, 866.0], [55.3, 869.0], [55.4, 870.0], [55.5, 870.0], [55.6, 870.0], [55.7, 873.0], [55.8, 874.0], [55.9, 874.0], [56.0, 874.0], [56.1, 875.0], [56.2, 876.0], [56.3, 876.0], [56.4, 880.0], [56.5, 887.0], [56.6, 888.0], [56.7, 888.0], [56.8, 890.0], [56.9, 890.0], [57.0, 890.0], [57.1, 892.0], [57.2, 893.0], [57.3, 894.0], [57.4, 894.0], [57.5, 896.0], [57.6, 897.0], [57.7, 898.0], [57.8, 898.0], [57.9, 900.0], [58.0, 902.0], [58.1, 903.0], [58.2, 903.0], [58.3, 909.0], [58.4, 912.0], [58.5, 912.0], [58.6, 918.0], [58.7, 918.0], [58.8, 919.0], [58.9, 919.0], [59.0, 922.0], [59.1, 923.0], [59.2, 925.0], [59.3, 925.0], [59.4, 927.0], [59.5, 929.0], [59.6, 929.0], [59.7, 929.0], [59.8, 934.0], [59.9, 935.0], [60.0, 937.0], [60.1, 937.0], [60.2, 937.0], [60.3, 937.0], [60.4, 937.0], [60.5, 938.0], [60.6, 944.0], [60.7, 944.0], [60.8, 944.0], [60.9, 951.0], [61.0, 952.0], [61.1, 954.0], [61.2, 954.0], [61.3, 955.0], [61.4, 956.0], [61.5, 957.0], [61.6, 957.0], [61.7, 957.0], [61.8, 961.0], [61.9, 961.0], [62.0, 963.0], [62.1, 964.0], [62.2, 965.0], [62.3, 965.0], [62.4, 969.0], [62.5, 972.0], [62.6, 973.0], [62.7, 973.0], [62.8, 978.0], [62.9, 984.0], [63.0, 985.0], [63.1, 985.0], [63.2, 987.0], [63.3, 987.0], [63.4, 987.0], [63.5, 988.0], [63.6, 992.0], [63.7, 992.0], [63.8, 992.0], [63.9, 994.0], [64.0, 995.0], [64.1, 996.0], [64.2, 996.0], [64.3, 998.0], [64.4, 998.0], [64.5, 998.0], [64.6, 998.0], [64.7, 999.0], [64.8, 1001.0], [64.9, 1002.0], [65.0, 1002.0], [65.1, 1002.0], [65.2, 1005.0], [65.3, 1005.0], [65.4, 1005.0], [65.5, 1006.0], [65.6, 1007.0], [65.7, 1007.0], [65.8, 1008.0], [65.9, 1013.0], [66.0, 1013.0], [66.1, 1013.0], [66.2, 1018.0], [66.3, 1018.0], [66.4, 1019.0], [66.5, 1019.0], [66.6, 1020.0], [66.7, 1021.0], [66.8, 1021.0], [66.9, 1022.0], [67.0, 1023.0], [67.1, 1023.0], [67.2, 1023.0], [67.3, 1025.0], [67.4, 1025.0], [67.5, 1027.0], [67.6, 1027.0], [67.7, 1030.0], [67.8, 1032.0], [67.9, 1032.0], [68.0, 1032.0], [68.1, 1038.0], [68.2, 1038.0], [68.3, 1039.0], [68.4, 1039.0], [68.5, 1039.0], [68.6, 1046.0], [68.7, 1046.0], [68.8, 1046.0], [68.9, 1047.0], [69.0, 1048.0], [69.1, 1048.0], [69.2, 1051.0], [69.3, 1051.0], [69.4, 1054.0], [69.5, 1054.0], [69.6, 1054.0], [69.7, 1055.0], [69.8, 1056.0], [69.9, 1056.0], [70.0, 1057.0], [70.1, 1058.0], [70.2, 1058.0], [70.3, 1058.0], [70.4, 1058.0], [70.5, 1059.0], [70.6, 1059.0], [70.7, 1059.0], [70.8, 1063.0], [70.9, 1063.0], [71.0, 1063.0], [71.1, 1064.0], [71.2, 1069.0], [71.3, 1069.0], [71.4, 1069.0], [71.5, 1069.0], [71.6, 1070.0], [71.7, 1070.0], [71.8, 1071.0], [71.9, 1072.0], [72.0, 1073.0], [72.1, 1073.0], [72.2, 1076.0], [72.3, 1077.0], [72.4, 1078.0], [72.5, 1078.0], [72.6, 1078.0], [72.7, 1078.0], [72.8, 1086.0], [72.9, 1086.0], [73.0, 1087.0], [73.1, 1087.0], [73.2, 1088.0], [73.3, 1088.0], [73.4, 1090.0], [73.5, 1091.0], [73.6, 1091.0], [73.7, 1091.0], [73.8, 1093.0], [73.9, 1093.0], [74.0, 1093.0], [74.1, 1094.0], [74.2, 1096.0], [74.3, 1097.0], [74.4, 1097.0], [74.5, 1098.0], [74.6, 1100.0], [74.7, 1102.0], [74.8, 1102.0], [74.9, 1103.0], [75.0, 1103.0], [75.1, 1103.0], [75.2, 1106.0], [75.3, 1107.0], [75.4, 1109.0], [75.5, 1109.0], [75.6, 1110.0], [75.7, 1112.0], [75.8, 1114.0], [75.9, 1114.0], [76.0, 1114.0], [76.1, 1114.0], [76.2, 1117.0], [76.3, 1117.0], [76.4, 1122.0], [76.5, 1124.0], [76.6, 1125.0], [76.7, 1125.0], [76.8, 1127.0], [76.9, 1127.0], [77.0, 1127.0], [77.1, 1129.0], [77.2, 1132.0], [77.3, 1134.0], [77.4, 1134.0], [77.5, 1134.0], [77.6, 1136.0], [77.7, 1137.0], [77.8, 1137.0], [77.9, 1138.0], [78.0, 1145.0], [78.1, 1148.0], [78.2, 1148.0], [78.3, 1151.0], [78.4, 1154.0], [78.5, 1154.0], [78.6, 1155.0], [78.7, 1158.0], [78.8, 1159.0], [78.9, 1159.0], [79.0, 1160.0], [79.1, 1162.0], [79.2, 1162.0], [79.3, 1162.0], [79.4, 1162.0], [79.5, 1162.0], [79.6, 1163.0], [79.7, 1163.0], [79.8, 1164.0], [79.9, 1167.0], [80.0, 1169.0], [80.1, 1169.0], [80.2, 1169.0], [80.3, 1170.0], [80.4, 1170.0], [80.5, 1171.0], [80.6, 1172.0], [80.7, 1173.0], [80.8, 1173.0], [80.9, 1174.0], [81.0, 1176.0], [81.1, 1177.0], [81.2, 1177.0], [81.3, 1178.0], [81.4, 1178.0], [81.5, 1178.0], [81.6, 1178.0], [81.7, 1180.0], [81.8, 1181.0], [81.9, 1181.0], [82.0, 1182.0], [82.1, 1184.0], [82.2, 1184.0], [82.3, 1184.0], [82.4, 1186.0], [82.5, 1190.0], [82.6, 1192.0], [82.7, 1192.0], [82.8, 1192.0], [82.9, 1197.0], [83.0, 1199.0], [83.1, 1199.0], [83.2, 1207.0], [83.3, 1208.0], [83.4, 1208.0], [83.5, 1209.0], [83.6, 1215.0], [83.7, 1216.0], [83.8, 1216.0], [83.9, 1217.0], [84.0, 1218.0], [84.1, 1219.0], [84.2, 1219.0], [84.3, 1223.0], [84.4, 1224.0], [84.5, 1225.0], [84.6, 1225.0], [84.7, 1226.0], [84.8, 1226.0], [84.9, 1226.0], [85.0, 1226.0], [85.1, 1228.0], [85.2, 1228.0], [85.3, 1228.0], [85.4, 1229.0], [85.5, 1233.0], [85.6, 1234.0], [85.7, 1234.0], [85.8, 1236.0], [85.9, 1238.0], [86.0, 1240.0], [86.1, 1240.0], [86.2, 1243.0], [86.3, 1247.0], [86.4, 1247.0], [86.5, 1247.0], [86.6, 1250.0], [86.7, 1252.0], [86.8, 1252.0], [86.9, 1252.0], [87.0, 1255.0], [87.1, 1258.0], [87.2, 1258.0], [87.3, 1270.0], [87.4, 1271.0], [87.5, 1271.0], [87.6, 1271.0], [87.7, 1275.0], [87.8, 1275.0], [87.9, 1278.0], [88.0, 1278.0], [88.1, 1279.0], [88.2, 1280.0], [88.3, 1283.0], [88.4, 1283.0], [88.5, 1291.0], [88.6, 1291.0], [88.7, 1291.0], [88.8, 1294.0], [88.9, 1300.0], [89.0, 1301.0], [89.1, 1301.0], [89.2, 1302.0], [89.3, 1307.0], [89.4, 1314.0], [89.5, 1314.0], [89.6, 1314.0], [89.7, 1315.0], [89.8, 1332.0], [89.9, 1332.0], [90.0, 1345.0], [90.1, 1350.0], [90.2, 1350.0], [90.3, 1350.0], [90.4, 1351.0], [90.5, 1352.0], [90.6, 1352.0], [90.7, 1361.0], [90.8, 1367.0], [90.9, 1380.0], [91.0, 1380.0], [91.1, 1382.0], [91.2, 1384.0], [91.3, 1384.0], [91.4, 1384.0], [91.5, 1384.0], [91.6, 1390.0], [91.7, 1390.0], [91.8, 1394.0], [91.9, 1395.0], [92.0, 1398.0], [92.1, 1398.0], [92.2, 1399.0], [92.3, 1400.0], [92.4, 1408.0], [92.5, 1408.0], [92.6, 1425.0], [92.7, 1431.0], [92.8, 1454.0], [92.9, 1454.0], [93.0, 1473.0], [93.1, 1483.0], [93.2, 1509.0], [93.3, 1509.0], [93.4, 1515.0], [93.5, 1523.0], [93.6, 1523.0], [93.7, 1525.0], [93.8, 1529.0], [93.9, 1532.0], [94.0, 1532.0], [94.1, 1534.0], [94.2, 1536.0], [94.3, 1542.0], [94.4, 1542.0], [94.5, 1543.0], [94.6, 1550.0], [94.7, 1561.0], [94.8, 1561.0], [94.9, 1580.0], [95.0, 1589.0], [95.1, 1589.0], [95.2, 1658.0], [95.3, 1696.0], [95.4, 1711.0], [95.5, 1711.0], [95.6, 1712.0], [95.7, 1714.0], [95.8, 1731.0], [95.9, 1731.0], [96.0, 1758.0], [96.1, 1778.0], [96.2, 1813.0], [96.3, 1813.0], [96.4, 1832.0], [96.5, 1842.0], [96.6, 1856.0], [96.7, 1856.0], [96.8, 1899.0], [96.9, 1903.0], [97.0, 1903.0], [97.1, 1924.0], [97.2, 2013.0], [97.3, 2027.0], [97.4, 2027.0], [97.5, 2052.0], [97.6, 2156.0], [97.7, 2261.0], [97.8, 2261.0], [97.9, 2272.0], [98.0, 2507.0], [98.1, 2531.0], [98.2, 2531.0], [98.3, 2673.0], [98.4, 2727.0], [98.5, 2727.0], [98.6, 2869.0], [98.7, 2875.0], [98.8, 2963.0], [98.9, 2963.0], [99.0, 3023.0], [99.1, 3050.0], [99.2, 3106.0], [99.3, 3106.0], [99.4, 3130.0], [99.5, 3304.0], [99.6, 3352.0], [99.7, 3352.0], [99.8, 3530.0], [99.9, 3648.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 77.0, "series": [{"data": [[600.0, 70.0], [700.0, 41.0], [800.0, 60.0], [900.0, 51.0], [1000.0, 72.0], [1100.0, 63.0], [1200.0, 42.0], [1300.0, 25.0], [1400.0, 7.0], [1500.0, 14.0], [100.0, 7.0], [1600.0, 2.0], [1700.0, 6.0], [1800.0, 5.0], [1900.0, 2.0], [2000.0, 3.0], [2100.0, 1.0], [2200.0, 2.0], [2500.0, 2.0], [2600.0, 1.0], [2700.0, 1.0], [2800.0, 2.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 2.0], [200.0, 40.0], [3300.0, 2.0], [3500.0, 1.0], [3600.0, 1.0], [300.0, 77.0], [400.0, 53.0], [500.0, 77.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 508.0, "series": [{"data": [[0.0, 177.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 508.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 50.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.933734939759034, "minX": 1.60231332E12, "maxY": 10.0, "series": [{"data": [[1.60231332E12, 10.0], [1.60231338E12, 9.933734939759034]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231338E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 268.0, "minX": 1.0, "maxY": 1270.5, "series": [{"data": [[8.0, 268.0], [2.0, 585.0], [1.0, 1021.0], [9.0, 584.0], [10.0, 860.0647382920106], [5.0, 1270.5], [6.0, 562.0], [3.0, 571.0], [7.0, 676.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 858.7959183673465]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 536.55, "minX": 1.60231332E12, "maxY": 1571795.0166666666, "series": [{"data": [[1.60231332E12, 263975.9], [1.60231338E12, 1571795.0166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231332E12, 536.55], [1.60231338E12, 4986.483333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231338E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 836.5692771084338, "minX": 1.60231332E12, "maxY": 1066.661971830986, "series": [{"data": [[1.60231332E12, 1066.661971830986], [1.60231338E12, 836.5692771084338]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231338E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 835.5316265060239, "minX": 1.60231332E12, "maxY": 1065.0985915492959, "series": [{"data": [[1.60231332E12, 1065.0985915492959], [1.60231338E12, 835.5316265060239]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231338E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.016566265060240972, "minX": 1.60231332E12, "maxY": 1.4647887323943662, "series": [{"data": [[1.60231332E12, 1.4647887323943662], [1.60231338E12, 0.016566265060240972]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231338E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.60231332E12, "maxY": 3648.0, "series": [{"data": [[1.60231332E12, 3530.0], [1.60231338E12, 3648.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231332E12, 186.0], [1.60231338E12, 197.93999936580659]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231332E12, 186.0], [1.60231338E12, 203.83500063419342]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231332E12, 186.0], [1.60231338E12, 201.17499920725822]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231332E12, 186.0], [1.60231338E12, 178.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231332E12, 633.0], [1.60231338E12, 820.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231338E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 470.0, "minX": 2.0, "maxY": 1174.0, "series": [{"data": [[8.0, 1022.5], [2.0, 803.0], [9.0, 824.0], [10.0, 1055.5], [11.0, 937.0], [12.0, 881.0], [13.0, 766.0], [14.0, 470.0], [15.0, 644.0], [16.0, 581.5], [17.0, 616.0], [18.0, 704.0], [6.0, 1174.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 469.5, "minX": 2.0, "maxY": 1173.0, "series": [{"data": [[8.0, 1022.0], [2.0, 803.0], [9.0, 822.0], [10.0, 1051.0], [11.0, 936.0], [12.0, 879.5], [13.0, 766.0], [14.0, 469.5], [15.0, 644.0], [16.0, 581.0], [17.0, 616.0], [18.0, 703.0], [6.0, 1173.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.60231332E12, "maxY": 10.9, "series": [{"data": [[1.60231332E12, 1.35], [1.60231338E12, 10.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231338E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.60231332E12, "maxY": 11.066666666666666, "series": [{"data": [[1.60231332E12, 1.1833333333333333], [1.60231338E12, 11.066666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231338E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.60231332E12, "maxY": 11.066666666666666, "series": [{"data": [[1.60231332E12, 1.1833333333333333], [1.60231338E12, 11.066666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231338E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.60231332E12, "maxY": 11.066666666666666, "series": [{"data": [[1.60231332E12, 1.1833333333333333], [1.60231338E12, 11.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231338E12, "title": "Total Transactions Per Second"}},
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

