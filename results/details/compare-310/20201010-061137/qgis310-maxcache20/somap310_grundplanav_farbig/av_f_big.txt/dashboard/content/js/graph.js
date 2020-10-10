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
        data: {"result": {"minY": 174.0, "minX": 0.0, "maxY": 3510.0, "series": [{"data": [[0.0, 174.0], [0.1, 174.0], [0.2, 179.0], [0.3, 186.0], [0.4, 186.0], [0.5, 192.0], [0.6, 192.0], [0.7, 192.0], [0.8, 192.0], [0.9, 195.0], [1.0, 204.0], [1.1, 209.0], [1.2, 209.0], [1.3, 211.0], [1.4, 213.0], [1.5, 217.0], [1.6, 217.0], [1.7, 218.0], [1.8, 223.0], [1.9, 223.0], [2.0, 227.0], [2.1, 228.0], [2.2, 230.0], [2.3, 230.0], [2.4, 230.0], [2.5, 238.0], [2.6, 242.0], [2.7, 242.0], [2.8, 245.0], [2.9, 247.0], [3.0, 253.0], [3.1, 253.0], [3.2, 253.0], [3.3, 260.0], [3.4, 260.0], [3.5, 262.0], [3.6, 264.0], [3.7, 264.0], [3.8, 264.0], [3.9, 265.0], [4.0, 265.0], [4.1, 268.0], [4.2, 268.0], [4.3, 270.0], [4.4, 270.0], [4.5, 272.0], [4.6, 272.0], [4.7, 273.0], [4.8, 274.0], [4.9, 276.0], [5.0, 276.0], [5.1, 282.0], [5.2, 285.0], [5.3, 285.0], [5.4, 289.0], [5.5, 291.0], [5.6, 293.0], [5.7, 293.0], [5.8, 295.0], [5.9, 295.0], [6.0, 296.0], [6.1, 296.0], [6.2, 299.0], [6.3, 301.0], [6.4, 302.0], [6.5, 302.0], [6.6, 304.0], [6.7, 305.0], [6.8, 305.0], [6.9, 320.0], [7.0, 327.0], [7.1, 327.0], [7.2, 327.0], [7.3, 329.0], [7.4, 330.0], [7.5, 330.0], [7.6, 330.0], [7.7, 330.0], [7.8, 333.0], [7.9, 336.0], [8.0, 336.0], [8.1, 340.0], [8.2, 345.0], [8.3, 351.0], [8.4, 351.0], [8.5, 360.0], [8.6, 361.0], [8.7, 361.0], [8.8, 363.0], [8.9, 364.0], [9.0, 367.0], [9.1, 367.0], [9.2, 367.0], [9.3, 367.0], [9.4, 368.0], [9.5, 368.0], [9.6, 371.0], [9.7, 371.0], [9.8, 371.0], [9.9, 371.0], [10.0, 374.0], [10.1, 376.0], [10.2, 376.0], [10.3, 377.0], [10.4, 378.0], [10.5, 380.0], [10.6, 380.0], [10.7, 383.0], [10.8, 385.0], [10.9, 386.0], [11.0, 386.0], [11.1, 388.0], [11.2, 388.0], [11.3, 396.0], [11.4, 396.0], [11.5, 398.0], [11.6, 398.0], [11.7, 398.0], [11.8, 399.0], [11.9, 401.0], [12.0, 402.0], [12.1, 402.0], [12.2, 404.0], [12.3, 404.0], [12.4, 405.0], [12.5, 405.0], [12.6, 407.0], [12.7, 407.0], [12.8, 413.0], [12.9, 413.0], [13.0, 413.0], [13.1, 415.0], [13.2, 417.0], [13.3, 417.0], [13.4, 420.0], [13.5, 425.0], [13.6, 425.0], [13.7, 428.0], [13.8, 429.0], [13.9, 429.0], [14.0, 429.0], [14.1, 431.0], [14.2, 433.0], [14.3, 433.0], [14.4, 433.0], [14.5, 437.0], [14.6, 440.0], [14.7, 441.0], [14.8, 441.0], [14.9, 444.0], [15.0, 445.0], [15.1, 445.0], [15.2, 449.0], [15.3, 449.0], [15.4, 450.0], [15.5, 450.0], [15.6, 453.0], [15.7, 455.0], [15.8, 458.0], [15.9, 458.0], [16.0, 467.0], [16.1, 470.0], [16.2, 471.0], [16.3, 471.0], [16.4, 471.0], [16.5, 472.0], [16.6, 475.0], [16.7, 475.0], [16.8, 475.0], [16.9, 478.0], [17.0, 478.0], [17.1, 481.0], [17.2, 481.0], [17.3, 481.0], [17.4, 481.0], [17.5, 482.0], [17.6, 485.0], [17.7, 490.0], [17.8, 490.0], [17.9, 490.0], [18.0, 493.0], [18.1, 495.0], [18.2, 495.0], [18.3, 495.0], [18.4, 496.0], [18.5, 496.0], [18.6, 498.0], [18.7, 498.0], [18.8, 500.0], [18.9, 500.0], [19.0, 500.0], [19.1, 500.0], [19.2, 500.0], [19.3, 500.0], [19.4, 501.0], [19.5, 508.0], [19.6, 508.0], [19.7, 508.0], [19.8, 508.0], [19.9, 509.0], [20.0, 511.0], [20.1, 511.0], [20.2, 514.0], [20.3, 514.0], [20.4, 514.0], [20.5, 515.0], [20.6, 517.0], [20.7, 517.0], [20.8, 517.0], [20.9, 518.0], [21.0, 518.0], [21.1, 520.0], [21.2, 520.0], [21.3, 521.0], [21.4, 522.0], [21.5, 523.0], [21.6, 523.0], [21.7, 523.0], [21.8, 524.0], [21.9, 524.0], [22.0, 527.0], [22.1, 527.0], [22.2, 531.0], [22.3, 531.0], [22.4, 531.0], [22.5, 532.0], [22.6, 533.0], [22.7, 533.0], [22.8, 535.0], [22.9, 536.0], [23.0, 536.0], [23.1, 536.0], [23.2, 536.0], [23.3, 536.0], [23.4, 536.0], [23.5, 536.0], [23.6, 539.0], [23.7, 540.0], [23.8, 540.0], [23.9, 541.0], [24.0, 541.0], [24.1, 542.0], [24.2, 542.0], [24.3, 543.0], [24.4, 544.0], [24.5, 545.0], [24.6, 545.0], [24.7, 547.0], [24.8, 547.0], [24.9, 551.0], [25.0, 551.0], [25.1, 551.0], [25.2, 553.0], [25.3, 553.0], [25.4, 553.0], [25.5, 554.0], [25.6, 554.0], [25.7, 554.0], [25.8, 554.0], [25.9, 554.0], [26.0, 555.0], [26.1, 555.0], [26.2, 556.0], [26.3, 556.0], [26.4, 556.0], [26.5, 556.0], [26.6, 558.0], [26.7, 559.0], [26.8, 559.0], [26.9, 559.0], [27.0, 559.0], [27.1, 560.0], [27.2, 560.0], [27.3, 561.0], [27.4, 562.0], [27.5, 562.0], [27.6, 562.0], [27.7, 562.0], [27.8, 563.0], [27.9, 565.0], [28.0, 565.0], [28.1, 566.0], [28.2, 568.0], [28.3, 569.0], [28.4, 569.0], [28.5, 570.0], [28.6, 571.0], [28.7, 571.0], [28.8, 571.0], [28.9, 572.0], [29.0, 572.0], [29.1, 572.0], [29.2, 573.0], [29.3, 575.0], [29.4, 577.0], [29.5, 577.0], [29.6, 577.0], [29.7, 577.0], [29.8, 577.0], [29.9, 577.0], [30.0, 581.0], [30.1, 582.0], [30.2, 582.0], [30.3, 584.0], [30.4, 585.0], [30.5, 586.0], [30.6, 586.0], [30.7, 586.0], [30.8, 587.0], [30.9, 588.0], [31.0, 588.0], [31.1, 589.0], [31.2, 592.0], [31.3, 592.0], [31.4, 592.0], [31.5, 592.0], [31.6, 593.0], [31.7, 593.0], [31.8, 594.0], [31.9, 594.0], [32.0, 597.0], [32.1, 597.0], [32.2, 599.0], [32.3, 599.0], [32.4, 600.0], [32.5, 600.0], [32.6, 601.0], [32.7, 601.0], [32.8, 602.0], [32.9, 602.0], [33.0, 603.0], [33.1, 604.0], [33.2, 604.0], [33.3, 604.0], [33.4, 606.0], [33.5, 610.0], [33.6, 610.0], [33.7, 611.0], [33.8, 612.0], [33.9, 612.0], [34.0, 612.0], [34.1, 612.0], [34.2, 613.0], [34.3, 614.0], [34.4, 614.0], [34.5, 615.0], [34.6, 617.0], [34.7, 617.0], [34.8, 617.0], [34.9, 618.0], [35.0, 619.0], [35.1, 619.0], [35.2, 620.0], [35.3, 620.0], [35.4, 625.0], [35.5, 625.0], [35.6, 625.0], [35.7, 630.0], [35.8, 630.0], [35.9, 630.0], [36.0, 631.0], [36.1, 632.0], [36.2, 633.0], [36.3, 633.0], [36.4, 634.0], [36.5, 638.0], [36.6, 638.0], [36.7, 638.0], [36.8, 639.0], [36.9, 641.0], [37.0, 641.0], [37.1, 642.0], [37.2, 645.0], [37.3, 646.0], [37.4, 646.0], [37.5, 646.0], [37.6, 651.0], [37.7, 657.0], [37.8, 657.0], [37.9, 658.0], [38.0, 661.0], [38.1, 662.0], [38.2, 662.0], [38.3, 665.0], [38.4, 666.0], [38.5, 666.0], [38.6, 666.0], [38.7, 669.0], [38.8, 670.0], [38.9, 670.0], [39.0, 672.0], [39.1, 673.0], [39.2, 673.0], [39.3, 673.0], [39.4, 674.0], [39.5, 678.0], [39.6, 680.0], [39.7, 680.0], [39.8, 682.0], [39.9, 683.0], [40.0, 684.0], [40.1, 684.0], [40.2, 687.0], [40.3, 687.0], [40.4, 687.0], [40.5, 689.0], [40.6, 690.0], [40.7, 691.0], [40.8, 691.0], [40.9, 693.0], [41.0, 694.0], [41.1, 695.0], [41.2, 695.0], [41.3, 695.0], [41.4, 695.0], [41.5, 697.0], [41.6, 697.0], [41.7, 698.0], [41.8, 699.0], [41.9, 699.0], [42.0, 699.0], [42.1, 701.0], [42.2, 705.0], [42.3, 705.0], [42.4, 706.0], [42.5, 709.0], [42.6, 713.0], [42.7, 713.0], [42.8, 714.0], [42.9, 716.0], [43.0, 720.0], [43.1, 720.0], [43.2, 721.0], [43.3, 721.0], [43.4, 721.0], [43.5, 721.0], [43.6, 722.0], [43.7, 725.0], [43.8, 725.0], [43.9, 727.0], [44.0, 728.0], [44.1, 729.0], [44.2, 729.0], [44.3, 731.0], [44.4, 734.0], [44.5, 734.0], [44.6, 734.0], [44.7, 735.0], [44.8, 740.0], [44.9, 740.0], [45.0, 740.0], [45.1, 740.0], [45.2, 742.0], [45.3, 742.0], [45.4, 743.0], [45.5, 745.0], [45.6, 745.0], [45.7, 745.0], [45.8, 745.0], [45.9, 745.0], [46.0, 746.0], [46.1, 746.0], [46.2, 749.0], [46.3, 751.0], [46.4, 754.0], [46.5, 754.0], [46.6, 755.0], [46.7, 756.0], [46.8, 756.0], [46.9, 759.0], [47.0, 765.0], [47.1, 767.0], [47.2, 767.0], [47.3, 769.0], [47.4, 769.0], [47.5, 771.0], [47.6, 771.0], [47.7, 772.0], [47.8, 773.0], [47.9, 776.0], [48.0, 776.0], [48.1, 777.0], [48.2, 777.0], [48.3, 777.0], [48.4, 777.0], [48.5, 780.0], [48.6, 780.0], [48.7, 780.0], [48.8, 783.0], [48.9, 783.0], [49.0, 784.0], [49.1, 784.0], [49.2, 784.0], [49.3, 785.0], [49.4, 785.0], [49.5, 785.0], [49.6, 789.0], [49.7, 790.0], [49.8, 792.0], [49.9, 792.0], [50.0, 797.0], [50.1, 799.0], [50.2, 799.0], [50.3, 802.0], [50.4, 803.0], [50.5, 803.0], [50.6, 803.0], [50.7, 803.0], [50.8, 804.0], [50.9, 804.0], [51.0, 804.0], [51.1, 809.0], [51.2, 810.0], [51.3, 813.0], [51.4, 813.0], [51.5, 815.0], [51.6, 815.0], [51.7, 815.0], [51.8, 820.0], [51.9, 820.0], [52.0, 820.0], [52.1, 820.0], [52.2, 822.0], [52.3, 825.0], [52.4, 827.0], [52.5, 827.0], [52.6, 828.0], [52.7, 830.0], [52.8, 834.0], [52.9, 834.0], [53.0, 835.0], [53.1, 836.0], [53.2, 838.0], [53.3, 838.0], [53.4, 839.0], [53.5, 841.0], [53.6, 841.0], [53.7, 844.0], [53.8, 844.0], [53.9, 847.0], [54.0, 847.0], [54.1, 847.0], [54.2, 848.0], [54.3, 849.0], [54.4, 849.0], [54.5, 861.0], [54.6, 861.0], [54.7, 864.0], [54.8, 864.0], [54.9, 866.0], [55.0, 869.0], [55.1, 869.0], [55.2, 871.0], [55.3, 875.0], [55.4, 876.0], [55.5, 876.0], [55.6, 876.0], [55.7, 877.0], [55.8, 880.0], [55.9, 880.0], [56.0, 883.0], [56.1, 886.0], [56.2, 886.0], [56.3, 886.0], [56.4, 891.0], [56.5, 891.0], [56.6, 891.0], [56.7, 891.0], [56.8, 893.0], [56.9, 893.0], [57.0, 893.0], [57.1, 895.0], [57.2, 895.0], [57.3, 895.0], [57.4, 895.0], [57.5, 898.0], [57.6, 900.0], [57.7, 900.0], [57.8, 900.0], [57.9, 902.0], [58.0, 904.0], [58.1, 904.0], [58.2, 904.0], [58.3, 904.0], [58.4, 905.0], [58.5, 905.0], [58.6, 906.0], [58.7, 906.0], [58.8, 906.0], [58.9, 906.0], [59.0, 908.0], [59.1, 909.0], [59.2, 911.0], [59.3, 911.0], [59.4, 915.0], [59.5, 915.0], [59.6, 915.0], [59.7, 915.0], [59.8, 915.0], [59.9, 917.0], [60.0, 918.0], [60.1, 918.0], [60.2, 919.0], [60.3, 920.0], [60.4, 920.0], [60.5, 921.0], [60.6, 923.0], [60.7, 923.0], [60.8, 923.0], [60.9, 926.0], [61.0, 928.0], [61.1, 928.0], [61.2, 928.0], [61.3, 930.0], [61.4, 933.0], [61.5, 934.0], [61.6, 934.0], [61.7, 935.0], [61.8, 938.0], [61.9, 938.0], [62.0, 940.0], [62.1, 942.0], [62.2, 943.0], [62.3, 943.0], [62.4, 945.0], [62.5, 950.0], [62.6, 953.0], [62.7, 953.0], [62.8, 956.0], [62.9, 956.0], [63.0, 958.0], [63.1, 958.0], [63.2, 959.0], [63.3, 961.0], [63.4, 961.0], [63.5, 962.0], [63.6, 962.0], [63.7, 966.0], [63.8, 966.0], [63.9, 969.0], [64.0, 969.0], [64.1, 969.0], [64.2, 969.0], [64.3, 971.0], [64.4, 972.0], [64.5, 973.0], [64.6, 973.0], [64.7, 977.0], [64.8, 980.0], [64.9, 981.0], [65.0, 981.0], [65.1, 983.0], [65.2, 985.0], [65.3, 985.0], [65.4, 985.0], [65.5, 986.0], [65.6, 987.0], [65.7, 987.0], [65.8, 988.0], [65.9, 989.0], [66.0, 991.0], [66.1, 991.0], [66.2, 991.0], [66.3, 992.0], [66.4, 994.0], [66.5, 994.0], [66.6, 997.0], [66.7, 1003.0], [66.8, 1003.0], [66.9, 1003.0], [67.0, 1003.0], [67.1, 1005.0], [67.2, 1005.0], [67.3, 1008.0], [67.4, 1008.0], [67.5, 1009.0], [67.6, 1009.0], [67.7, 1009.0], [67.8, 1009.0], [67.9, 1010.0], [68.0, 1010.0], [68.1, 1011.0], [68.2, 1012.0], [68.3, 1014.0], [68.4, 1014.0], [68.5, 1018.0], [68.6, 1019.0], [68.7, 1019.0], [68.8, 1020.0], [68.9, 1021.0], [69.0, 1023.0], [69.1, 1023.0], [69.2, 1024.0], [69.3, 1024.0], [69.4, 1029.0], [69.5, 1029.0], [69.6, 1030.0], [69.7, 1030.0], [69.8, 1032.0], [69.9, 1032.0], [70.0, 1036.0], [70.1, 1036.0], [70.2, 1036.0], [70.3, 1037.0], [70.4, 1039.0], [70.5, 1041.0], [70.6, 1041.0], [70.7, 1041.0], [70.8, 1041.0], [70.9, 1043.0], [71.0, 1043.0], [71.1, 1044.0], [71.2, 1045.0], [71.3, 1046.0], [71.4, 1046.0], [71.5, 1046.0], [71.6, 1049.0], [71.7, 1049.0], [71.8, 1049.0], [71.9, 1050.0], [72.0, 1052.0], [72.1, 1052.0], [72.2, 1053.0], [72.3, 1054.0], [72.4, 1059.0], [72.5, 1059.0], [72.6, 1059.0], [72.7, 1060.0], [72.8, 1062.0], [72.9, 1062.0], [73.0, 1063.0], [73.1, 1064.0], [73.2, 1065.0], [73.3, 1065.0], [73.4, 1065.0], [73.5, 1066.0], [73.6, 1066.0], [73.7, 1071.0], [73.8, 1077.0], [73.9, 1079.0], [74.0, 1079.0], [74.1, 1079.0], [74.2, 1081.0], [74.3, 1083.0], [74.4, 1083.0], [74.5, 1083.0], [74.6, 1085.0], [74.7, 1087.0], [74.8, 1087.0], [74.9, 1087.0], [75.0, 1087.0], [75.1, 1087.0], [75.2, 1089.0], [75.3, 1093.0], [75.4, 1095.0], [75.5, 1095.0], [75.6, 1098.0], [75.7, 1102.0], [75.8, 1103.0], [75.9, 1103.0], [76.0, 1104.0], [76.1, 1104.0], [76.2, 1104.0], [76.3, 1104.0], [76.4, 1104.0], [76.5, 1105.0], [76.6, 1106.0], [76.7, 1106.0], [76.8, 1106.0], [76.9, 1107.0], [77.0, 1107.0], [77.1, 1108.0], [77.2, 1109.0], [77.3, 1111.0], [77.4, 1111.0], [77.5, 1111.0], [77.6, 1112.0], [77.7, 1112.0], [77.8, 1112.0], [77.9, 1113.0], [78.0, 1113.0], [78.1, 1115.0], [78.2, 1115.0], [78.3, 1116.0], [78.4, 1117.0], [78.5, 1117.0], [78.6, 1119.0], [78.7, 1120.0], [78.8, 1122.0], [78.9, 1122.0], [79.0, 1125.0], [79.1, 1126.0], [79.2, 1130.0], [79.3, 1130.0], [79.4, 1131.0], [79.5, 1134.0], [79.6, 1135.0], [79.7, 1135.0], [79.8, 1136.0], [79.9, 1138.0], [80.0, 1139.0], [80.1, 1139.0], [80.2, 1140.0], [80.3, 1141.0], [80.4, 1141.0], [80.5, 1142.0], [80.6, 1142.0], [80.7, 1145.0], [80.8, 1145.0], [80.9, 1145.0], [81.0, 1146.0], [81.1, 1146.0], [81.2, 1146.0], [81.3, 1147.0], [81.4, 1152.0], [81.5, 1155.0], [81.6, 1155.0], [81.7, 1155.0], [81.8, 1156.0], [81.9, 1156.0], [82.0, 1156.0], [82.1, 1158.0], [82.2, 1160.0], [82.3, 1160.0], [82.4, 1162.0], [82.5, 1163.0], [82.6, 1164.0], [82.7, 1164.0], [82.8, 1165.0], [82.9, 1167.0], [83.0, 1167.0], [83.1, 1167.0], [83.2, 1170.0], [83.3, 1172.0], [83.4, 1172.0], [83.5, 1174.0], [83.6, 1175.0], [83.7, 1176.0], [83.8, 1176.0], [83.9, 1178.0], [84.0, 1178.0], [84.1, 1178.0], [84.2, 1178.0], [84.3, 1179.0], [84.4, 1180.0], [84.5, 1185.0], [84.6, 1185.0], [84.7, 1186.0], [84.8, 1187.0], [84.9, 1193.0], [85.0, 1193.0], [85.1, 1195.0], [85.2, 1199.0], [85.3, 1199.0], [85.4, 1200.0], [85.5, 1205.0], [85.6, 1207.0], [85.7, 1207.0], [85.8, 1215.0], [85.9, 1219.0], [86.0, 1222.0], [86.1, 1222.0], [86.2, 1222.0], [86.3, 1235.0], [86.4, 1239.0], [86.5, 1239.0], [86.6, 1243.0], [86.7, 1245.0], [86.8, 1245.0], [86.9, 1249.0], [87.0, 1250.0], [87.1, 1252.0], [87.2, 1252.0], [87.3, 1254.0], [87.4, 1255.0], [87.5, 1258.0], [87.6, 1258.0], [87.7, 1261.0], [87.8, 1261.0], [87.9, 1263.0], [88.0, 1263.0], [88.1, 1267.0], [88.2, 1268.0], [88.3, 1275.0], [88.4, 1275.0], [88.5, 1275.0], [88.6, 1276.0], [88.7, 1276.0], [88.8, 1278.0], [88.9, 1291.0], [89.0, 1292.0], [89.1, 1292.0], [89.2, 1292.0], [89.3, 1295.0], [89.4, 1295.0], [89.5, 1295.0], [89.6, 1296.0], [89.7, 1299.0], [89.8, 1306.0], [89.9, 1306.0], [90.0, 1311.0], [90.1, 1311.0], [90.2, 1311.0], [90.3, 1314.0], [90.4, 1319.0], [90.5, 1320.0], [90.6, 1320.0], [90.7, 1330.0], [90.8, 1331.0], [90.9, 1334.0], [91.0, 1334.0], [91.1, 1337.0], [91.2, 1342.0], [91.3, 1342.0], [91.4, 1342.0], [91.5, 1347.0], [91.6, 1350.0], [91.7, 1350.0], [91.8, 1351.0], [91.9, 1357.0], [92.0, 1357.0], [92.1, 1357.0], [92.2, 1360.0], [92.3, 1367.0], [92.4, 1371.0], [92.5, 1371.0], [92.6, 1374.0], [92.7, 1375.0], [92.8, 1377.0], [92.9, 1377.0], [93.0, 1378.0], [93.1, 1390.0], [93.2, 1406.0], [93.3, 1406.0], [93.4, 1413.0], [93.5, 1444.0], [93.6, 1444.0], [93.7, 1452.0], [93.8, 1461.0], [93.9, 1474.0], [94.0, 1474.0], [94.1, 1478.0], [94.2, 1482.0], [94.3, 1484.0], [94.4, 1484.0], [94.5, 1491.0], [94.6, 1502.0], [94.7, 1529.0], [94.8, 1529.0], [94.9, 1530.0], [95.0, 1555.0], [95.1, 1555.0], [95.2, 1557.0], [95.3, 1578.0], [95.4, 1587.0], [95.5, 1587.0], [95.6, 1597.0], [95.7, 1608.0], [95.8, 1623.0], [95.9, 1623.0], [96.0, 1633.0], [96.1, 1655.0], [96.2, 1736.0], [96.3, 1736.0], [96.4, 1754.0], [96.5, 1784.0], [96.6, 1784.0], [96.7, 1784.0], [96.8, 1792.0], [96.9, 1792.0], [97.0, 1792.0], [97.1, 1803.0], [97.2, 1819.0], [97.3, 1898.0], [97.4, 1898.0], [97.5, 1925.0], [97.6, 1985.0], [97.7, 2013.0], [97.8, 2013.0], [97.9, 2149.0], [98.0, 2367.0], [98.1, 2587.0], [98.2, 2587.0], [98.3, 2588.0], [98.4, 2795.0], [98.5, 2795.0], [98.6, 2805.0], [98.7, 2846.0], [98.8, 2864.0], [98.9, 2864.0], [99.0, 2870.0], [99.1, 3047.0], [99.2, 3087.0], [99.3, 3087.0], [99.4, 3091.0], [99.5, 3171.0], [99.6, 3187.0], [99.7, 3187.0], [99.8, 3228.0], [99.9, 3510.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 100.0, "series": [{"data": [[600.0, 71.0], [700.0, 60.0], [800.0, 54.0], [900.0, 67.0], [1000.0, 66.0], [1100.0, 71.0], [1200.0, 33.0], [1300.0, 25.0], [1400.0, 10.0], [1500.0, 8.0], [100.0, 7.0], [1600.0, 4.0], [1700.0, 6.0], [1800.0, 3.0], [1900.0, 2.0], [2000.0, 1.0], [2100.0, 1.0], [2300.0, 1.0], [2500.0, 2.0], [2800.0, 4.0], [2700.0, 1.0], [3000.0, 3.0], [3100.0, 2.0], [200.0, 39.0], [3200.0, 1.0], [3500.0, 1.0], [300.0, 41.0], [400.0, 51.0], [500.0, 100.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 40.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 553.0, "series": [{"data": [[0.0, 142.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 553.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 40.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.928684627575278, "minX": 1.60231116E12, "maxY": 10.0, "series": [{"data": [[1.60231122E12, 9.928684627575278], [1.60231116E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231122E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 276.0, "minX": 1.0, "maxY": 2149.0, "series": [{"data": [[8.0, 276.0], [4.0, 536.0], [2.0, 545.0], [1.0, 917.0], [9.0, 2149.0], [10.0, 859.6528925619842], [5.0, 1021.0], [6.0, 571.0], [3.0, 602.0], [7.0, 604.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 858.951020408164]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 787.1833333333333, "minX": 1.60231116E12, "maxY": 1439737.2666666666, "series": [{"data": [[1.60231122E12, 1439737.2666666666], [1.60231116E12, 396040.48333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231122E12, 4735.85], [1.60231116E12, 787.1833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231122E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 826.5213946117271, "minX": 1.60231116E12, "maxY": 1055.7115384615388, "series": [{"data": [[1.60231122E12, 826.5213946117271], [1.60231116E12, 1055.7115384615388]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231122E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 825.5784469096668, "minX": 1.60231116E12, "maxY": 1054.086538461538, "series": [{"data": [[1.60231122E12, 825.5784469096668], [1.60231116E12, 1054.086538461538]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231122E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01584786053882726, "minX": 1.60231116E12, "maxY": 0.980769230769231, "series": [{"data": [[1.60231122E12, 0.01584786053882726], [1.60231116E12, 0.980769230769231]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231122E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 174.0, "minX": 1.60231116E12, "maxY": 3510.0, "series": [{"data": [[1.60231122E12, 3171.0], [1.60231116E12, 3510.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231122E12, 212.3759996986389], [1.60231116E12, 179.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231122E12, 214.02720024108888], [1.60231116E12, 179.27650007009507]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231122E12, 213.01599969863892], [1.60231116E12, 179.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231122E12, 174.0], [1.60231116E12, 179.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231122E12, 804.0], [1.60231116E12, 691.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231122E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 483.0, "minX": 1.0, "maxY": 2587.5, "series": [{"data": [[2.0, 2587.5], [8.0, 1025.0], [9.0, 1083.0], [10.0, 931.0], [11.0, 935.0], [12.0, 898.5], [13.0, 743.5], [14.0, 677.0], [15.0, 642.0], [16.0, 598.0], [1.0, 917.0], [17.0, 594.0], [18.0, 483.0], [7.0, 977.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 482.0, "minX": 1.0, "maxY": 2585.5, "series": [{"data": [[2.0, 2585.5], [8.0, 1023.0], [9.0, 1082.0], [10.0, 931.0], [11.0, 934.0], [12.0, 898.0], [13.0, 742.5], [14.0, 676.0], [15.0, 642.0], [16.0, 598.0], [1.0, 917.0], [17.0, 593.0], [18.0, 482.0], [7.0, 977.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.9, "minX": 1.60231116E12, "maxY": 10.35, "series": [{"data": [[1.60231122E12, 10.35], [1.60231116E12, 1.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231122E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7333333333333334, "minX": 1.60231116E12, "maxY": 10.516666666666667, "series": [{"data": [[1.60231122E12, 10.516666666666667], [1.60231116E12, 1.7333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231122E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7333333333333334, "minX": 1.60231116E12, "maxY": 10.516666666666667, "series": [{"data": [[1.60231122E12, 10.516666666666667], [1.60231116E12, 1.7333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231122E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7333333333333334, "minX": 1.60231116E12, "maxY": 10.516666666666667, "series": [{"data": [[1.60231122E12, 10.516666666666667], [1.60231116E12, 1.7333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231122E12, "title": "Total Transactions Per Second"}},
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

