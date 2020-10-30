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
        data: {"result": {"minY": 140.0, "minX": 0.0, "maxY": 2655.0, "series": [{"data": [[0.0, 140.0], [0.1, 140.0], [0.2, 143.0], [0.3, 144.0], [0.4, 144.0], [0.5, 150.0], [0.6, 150.0], [0.7, 152.0], [0.8, 152.0], [0.9, 155.0], [1.0, 160.0], [1.1, 184.0], [1.2, 184.0], [1.3, 192.0], [1.4, 198.0], [1.5, 213.0], [1.6, 213.0], [1.7, 216.0], [1.8, 216.0], [1.9, 216.0], [2.0, 220.0], [2.1, 222.0], [2.2, 222.0], [2.3, 222.0], [2.4, 222.0], [2.5, 227.0], [2.6, 227.0], [2.7, 227.0], [2.8, 231.0], [2.9, 234.0], [3.0, 241.0], [3.1, 241.0], [3.2, 242.0], [3.3, 244.0], [3.4, 244.0], [3.5, 244.0], [3.6, 245.0], [3.7, 246.0], [3.8, 246.0], [3.9, 247.0], [4.0, 247.0], [4.1, 250.0], [4.2, 250.0], [4.3, 251.0], [4.4, 252.0], [4.5, 252.0], [4.6, 252.0], [4.7, 254.0], [4.8, 255.0], [4.9, 256.0], [5.0, 256.0], [5.1, 260.0], [5.2, 262.0], [5.3, 262.0], [5.4, 265.0], [5.5, 268.0], [5.6, 268.0], [5.7, 268.0], [5.8, 269.0], [5.9, 270.0], [6.0, 271.0], [6.1, 271.0], [6.2, 272.0], [6.3, 272.0], [6.4, 274.0], [6.5, 274.0], [6.6, 276.0], [6.7, 279.0], [6.8, 279.0], [6.9, 283.0], [7.0, 283.0], [7.1, 286.0], [7.2, 286.0], [7.3, 290.0], [7.4, 295.0], [7.5, 312.0], [7.6, 312.0], [7.7, 312.0], [7.8, 318.0], [7.9, 319.0], [8.0, 319.0], [8.1, 329.0], [8.2, 330.0], [8.3, 332.0], [8.4, 332.0], [8.5, 336.0], [8.6, 336.0], [8.7, 336.0], [8.8, 336.0], [8.9, 338.0], [9.0, 340.0], [9.1, 340.0], [9.2, 343.0], [9.3, 355.0], [9.4, 357.0], [9.5, 357.0], [9.6, 361.0], [9.7, 361.0], [9.8, 364.0], [9.9, 364.0], [10.0, 372.0], [10.1, 375.0], [10.2, 375.0], [10.3, 375.0], [10.4, 382.0], [10.5, 386.0], [10.6, 386.0], [10.7, 388.0], [10.8, 389.0], [10.9, 397.0], [11.0, 397.0], [11.1, 399.0], [11.2, 401.0], [11.3, 401.0], [11.4, 401.0], [11.5, 407.0], [11.6, 407.0], [11.7, 407.0], [11.8, 408.0], [11.9, 410.0], [12.0, 411.0], [12.1, 411.0], [12.2, 412.0], [12.3, 412.0], [12.4, 415.0], [12.5, 415.0], [12.6, 420.0], [12.7, 426.0], [12.8, 428.0], [12.9, 428.0], [13.0, 433.0], [13.1, 434.0], [13.2, 439.0], [13.3, 439.0], [13.4, 440.0], [13.5, 440.0], [13.6, 440.0], [13.7, 441.0], [13.8, 445.0], [13.9, 446.0], [14.0, 446.0], [14.1, 454.0], [14.2, 454.0], [14.3, 456.0], [14.4, 456.0], [14.5, 457.0], [14.6, 458.0], [14.7, 459.0], [14.8, 459.0], [14.9, 461.0], [15.0, 463.0], [15.1, 463.0], [15.2, 463.0], [15.3, 464.0], [15.4, 464.0], [15.5, 464.0], [15.6, 465.0], [15.7, 465.0], [15.8, 469.0], [15.9, 469.0], [16.0, 470.0], [16.1, 473.0], [16.2, 474.0], [16.3, 474.0], [16.4, 474.0], [16.5, 476.0], [16.6, 478.0], [16.7, 478.0], [16.8, 478.0], [16.9, 482.0], [17.0, 482.0], [17.1, 482.0], [17.2, 484.0], [17.3, 484.0], [17.4, 484.0], [17.5, 486.0], [17.6, 486.0], [17.7, 486.0], [17.8, 486.0], [17.9, 488.0], [18.0, 488.0], [18.1, 490.0], [18.2, 490.0], [18.3, 490.0], [18.4, 490.0], [18.5, 490.0], [18.6, 491.0], [18.7, 491.0], [18.8, 493.0], [18.9, 493.0], [19.0, 493.0], [19.1, 493.0], [19.2, 494.0], [19.3, 494.0], [19.4, 494.0], [19.5, 494.0], [19.6, 495.0], [19.7, 495.0], [19.8, 496.0], [19.9, 496.0], [20.0, 496.0], [20.1, 496.0], [20.2, 497.0], [20.3, 497.0], [20.4, 497.0], [20.5, 498.0], [20.6, 500.0], [20.7, 501.0], [20.8, 501.0], [20.9, 501.0], [21.0, 501.0], [21.1, 502.0], [21.2, 502.0], [21.3, 502.0], [21.4, 503.0], [21.5, 504.0], [21.6, 504.0], [21.7, 505.0], [21.8, 506.0], [21.9, 506.0], [22.0, 506.0], [22.1, 507.0], [22.2, 507.0], [22.3, 507.0], [22.4, 509.0], [22.5, 509.0], [22.6, 510.0], [22.7, 510.0], [22.8, 511.0], [22.9, 512.0], [23.0, 512.0], [23.1, 512.0], [23.2, 515.0], [23.3, 516.0], [23.4, 516.0], [23.5, 517.0], [23.6, 517.0], [23.7, 519.0], [23.8, 519.0], [23.9, 523.0], [24.0, 524.0], [24.1, 525.0], [24.2, 525.0], [24.3, 526.0], [24.4, 526.0], [24.5, 528.0], [24.6, 528.0], [24.7, 530.0], [24.8, 531.0], [24.9, 531.0], [25.0, 531.0], [25.1, 532.0], [25.2, 532.0], [25.3, 532.0], [25.4, 532.0], [25.5, 533.0], [25.6, 534.0], [25.7, 534.0], [25.8, 534.0], [25.9, 536.0], [26.0, 537.0], [26.1, 537.0], [26.2, 537.0], [26.3, 538.0], [26.4, 538.0], [26.5, 538.0], [26.6, 539.0], [26.7, 539.0], [26.8, 539.0], [26.9, 539.0], [27.0, 540.0], [27.1, 540.0], [27.2, 540.0], [27.3, 542.0], [27.4, 543.0], [27.5, 543.0], [27.6, 543.0], [27.7, 543.0], [27.8, 544.0], [27.9, 545.0], [28.0, 545.0], [28.1, 545.0], [28.2, 546.0], [28.3, 546.0], [28.4, 546.0], [28.5, 547.0], [28.6, 547.0], [28.7, 547.0], [28.8, 548.0], [28.9, 548.0], [29.0, 548.0], [29.1, 548.0], [29.2, 549.0], [29.3, 551.0], [29.4, 551.0], [29.5, 551.0], [29.6, 552.0], [29.7, 554.0], [29.8, 554.0], [29.9, 554.0], [30.0, 555.0], [30.1, 555.0], [30.2, 555.0], [30.3, 555.0], [30.4, 556.0], [30.5, 556.0], [30.6, 556.0], [30.7, 557.0], [30.8, 557.0], [30.9, 558.0], [31.0, 558.0], [31.1, 558.0], [31.2, 559.0], [31.3, 560.0], [31.4, 560.0], [31.5, 561.0], [31.6, 565.0], [31.7, 565.0], [31.8, 565.0], [31.9, 565.0], [32.0, 566.0], [32.1, 566.0], [32.2, 566.0], [32.3, 567.0], [32.4, 567.0], [32.5, 567.0], [32.6, 570.0], [32.7, 570.0], [32.8, 570.0], [32.9, 570.0], [33.0, 571.0], [33.1, 572.0], [33.2, 573.0], [33.3, 573.0], [33.4, 574.0], [33.5, 580.0], [33.6, 580.0], [33.7, 580.0], [33.8, 581.0], [33.9, 582.0], [34.0, 582.0], [34.1, 590.0], [34.2, 590.0], [34.3, 591.0], [34.4, 591.0], [34.5, 592.0], [34.6, 593.0], [34.7, 596.0], [34.8, 596.0], [34.9, 597.0], [35.0, 599.0], [35.1, 599.0], [35.2, 600.0], [35.3, 601.0], [35.4, 601.0], [35.5, 601.0], [35.6, 601.0], [35.7, 603.0], [35.8, 603.0], [35.9, 603.0], [36.0, 605.0], [36.1, 606.0], [36.2, 606.0], [36.3, 606.0], [36.4, 613.0], [36.5, 615.0], [36.6, 615.0], [36.7, 615.0], [36.8, 621.0], [36.9, 624.0], [37.0, 624.0], [37.1, 624.0], [37.2, 625.0], [37.3, 625.0], [37.4, 625.0], [37.5, 628.0], [37.6, 628.0], [37.7, 632.0], [37.8, 632.0], [37.9, 635.0], [38.0, 636.0], [38.1, 639.0], [38.2, 639.0], [38.3, 639.0], [38.4, 640.0], [38.5, 640.0], [38.6, 641.0], [38.7, 641.0], [38.8, 641.0], [38.9, 641.0], [39.0, 643.0], [39.1, 643.0], [39.2, 644.0], [39.3, 644.0], [39.4, 646.0], [39.5, 647.0], [39.6, 649.0], [39.7, 649.0], [39.8, 650.0], [39.9, 652.0], [40.0, 652.0], [40.1, 652.0], [40.2, 653.0], [40.3, 654.0], [40.4, 654.0], [40.5, 655.0], [40.6, 659.0], [40.7, 660.0], [40.8, 660.0], [40.9, 662.0], [41.0, 663.0], [41.1, 669.0], [41.2, 669.0], [41.3, 671.0], [41.4, 674.0], [41.5, 675.0], [41.6, 675.0], [41.7, 682.0], [41.8, 684.0], [41.9, 684.0], [42.0, 684.0], [42.1, 685.0], [42.2, 685.0], [42.3, 685.0], [42.4, 686.0], [42.5, 688.0], [42.6, 691.0], [42.7, 691.0], [42.8, 695.0], [42.9, 696.0], [43.0, 696.0], [43.1, 696.0], [43.2, 700.0], [43.3, 710.0], [43.4, 710.0], [43.5, 712.0], [43.6, 724.0], [43.7, 726.0], [43.8, 726.0], [43.9, 729.0], [44.0, 729.0], [44.1, 730.0], [44.2, 730.0], [44.3, 733.0], [44.4, 734.0], [44.5, 739.0], [44.6, 739.0], [44.7, 739.0], [44.8, 741.0], [44.9, 742.0], [45.0, 742.0], [45.1, 745.0], [45.2, 752.0], [45.3, 752.0], [45.4, 759.0], [45.5, 765.0], [45.6, 765.0], [45.7, 765.0], [45.8, 769.0], [45.9, 770.0], [46.0, 775.0], [46.1, 775.0], [46.2, 779.0], [46.3, 781.0], [46.4, 785.0], [46.5, 785.0], [46.6, 787.0], [46.7, 788.0], [46.8, 788.0], [46.9, 796.0], [47.0, 796.0], [47.1, 802.0], [47.2, 802.0], [47.3, 804.0], [47.4, 805.0], [47.5, 810.0], [47.6, 810.0], [47.7, 816.0], [47.8, 823.0], [47.9, 823.0], [48.0, 823.0], [48.1, 826.0], [48.2, 826.0], [48.3, 830.0], [48.4, 830.0], [48.5, 831.0], [48.6, 845.0], [48.7, 845.0], [48.8, 847.0], [48.9, 849.0], [49.0, 850.0], [49.1, 850.0], [49.2, 850.0], [49.3, 851.0], [49.4, 852.0], [49.5, 852.0], [49.6, 852.0], [49.7, 853.0], [49.8, 855.0], [49.9, 855.0], [50.0, 857.0], [50.1, 859.0], [50.2, 859.0], [50.3, 860.0], [50.4, 861.0], [50.5, 872.0], [50.6, 872.0], [50.7, 875.0], [50.8, 877.0], [50.9, 877.0], [51.0, 877.0], [51.1, 878.0], [51.2, 878.0], [51.3, 878.0], [51.4, 878.0], [51.5, 879.0], [51.6, 880.0], [51.7, 880.0], [51.8, 881.0], [51.9, 881.0], [52.0, 881.0], [52.1, 881.0], [52.2, 882.0], [52.3, 882.0], [52.4, 883.0], [52.5, 883.0], [52.6, 884.0], [52.7, 892.0], [52.8, 895.0], [52.9, 895.0], [53.0, 902.0], [53.1, 905.0], [53.2, 908.0], [53.3, 908.0], [53.4, 912.0], [53.5, 913.0], [53.6, 913.0], [53.7, 919.0], [53.8, 927.0], [53.9, 930.0], [54.0, 930.0], [54.1, 932.0], [54.2, 932.0], [54.3, 934.0], [54.4, 934.0], [54.5, 940.0], [54.6, 941.0], [54.7, 942.0], [54.8, 942.0], [54.9, 948.0], [55.0, 951.0], [55.1, 951.0], [55.2, 952.0], [55.3, 953.0], [55.4, 954.0], [55.5, 954.0], [55.6, 961.0], [55.7, 964.0], [55.8, 965.0], [55.9, 965.0], [56.0, 967.0], [56.1, 970.0], [56.2, 974.0], [56.3, 974.0], [56.4, 975.0], [56.5, 977.0], [56.6, 980.0], [56.7, 980.0], [56.8, 981.0], [56.9, 983.0], [57.0, 983.0], [57.1, 985.0], [57.2, 987.0], [57.3, 988.0], [57.4, 988.0], [57.5, 993.0], [57.6, 993.0], [57.7, 995.0], [57.8, 995.0], [57.9, 997.0], [58.0, 998.0], [58.1, 999.0], [58.2, 999.0], [58.3, 1000.0], [58.4, 1000.0], [58.5, 1000.0], [58.6, 1001.0], [58.7, 1001.0], [58.8, 1002.0], [58.9, 1002.0], [59.0, 1003.0], [59.1, 1005.0], [59.2, 1007.0], [59.3, 1007.0], [59.4, 1007.0], [59.5, 1008.0], [59.6, 1009.0], [59.7, 1009.0], [59.8, 1014.0], [59.9, 1014.0], [60.0, 1015.0], [60.1, 1015.0], [60.2, 1016.0], [60.3, 1016.0], [60.4, 1016.0], [60.5, 1017.0], [60.6, 1017.0], [60.7, 1018.0], [60.8, 1018.0], [60.9, 1018.0], [61.0, 1020.0], [61.1, 1020.0], [61.2, 1020.0], [61.3, 1024.0], [61.4, 1025.0], [61.5, 1026.0], [61.6, 1026.0], [61.7, 1026.0], [61.8, 1027.0], [61.9, 1027.0], [62.0, 1027.0], [62.1, 1027.0], [62.2, 1027.0], [62.3, 1027.0], [62.4, 1028.0], [62.5, 1029.0], [62.6, 1029.0], [62.7, 1029.0], [62.8, 1030.0], [62.9, 1032.0], [63.0, 1032.0], [63.1, 1032.0], [63.2, 1034.0], [63.3, 1034.0], [63.4, 1034.0], [63.5, 1035.0], [63.6, 1036.0], [63.7, 1036.0], [63.8, 1036.0], [63.9, 1037.0], [64.0, 1040.0], [64.1, 1040.0], [64.2, 1040.0], [64.3, 1040.0], [64.4, 1040.0], [64.5, 1040.0], [64.6, 1040.0], [64.7, 1041.0], [64.8, 1041.0], [64.9, 1042.0], [65.0, 1042.0], [65.1, 1042.0], [65.2, 1042.0], [65.3, 1042.0], [65.4, 1044.0], [65.5, 1046.0], [65.6, 1047.0], [65.7, 1047.0], [65.8, 1047.0], [65.9, 1048.0], [66.0, 1049.0], [66.1, 1049.0], [66.2, 1049.0], [66.3, 1049.0], [66.4, 1049.0], [66.5, 1049.0], [66.6, 1050.0], [66.7, 1051.0], [66.8, 1051.0], [66.9, 1051.0], [67.0, 1051.0], [67.1, 1052.0], [67.2, 1052.0], [67.3, 1053.0], [67.4, 1054.0], [67.5, 1054.0], [67.6, 1054.0], [67.7, 1054.0], [67.8, 1055.0], [67.9, 1056.0], [68.0, 1056.0], [68.1, 1056.0], [68.2, 1056.0], [68.3, 1056.0], [68.4, 1056.0], [68.5, 1057.0], [68.6, 1058.0], [68.7, 1058.0], [68.8, 1059.0], [68.9, 1059.0], [69.0, 1060.0], [69.1, 1060.0], [69.2, 1060.0], [69.3, 1061.0], [69.4, 1062.0], [69.5, 1062.0], [69.6, 1063.0], [69.7, 1064.0], [69.8, 1066.0], [69.9, 1066.0], [70.0, 1066.0], [70.1, 1069.0], [70.2, 1069.0], [70.3, 1069.0], [70.4, 1070.0], [70.5, 1072.0], [70.6, 1072.0], [70.7, 1072.0], [70.8, 1072.0], [70.9, 1074.0], [71.0, 1074.0], [71.1, 1075.0], [71.2, 1075.0], [71.3, 1076.0], [71.4, 1076.0], [71.5, 1076.0], [71.6, 1077.0], [71.7, 1077.0], [71.8, 1077.0], [71.9, 1078.0], [72.0, 1079.0], [72.1, 1079.0], [72.2, 1080.0], [72.3, 1082.0], [72.4, 1083.0], [72.5, 1083.0], [72.6, 1083.0], [72.7, 1084.0], [72.8, 1085.0], [72.9, 1085.0], [73.0, 1086.0], [73.1, 1086.0], [73.2, 1086.0], [73.3, 1086.0], [73.4, 1087.0], [73.5, 1088.0], [73.6, 1088.0], [73.7, 1088.0], [73.8, 1088.0], [73.9, 1091.0], [74.0, 1091.0], [74.1, 1091.0], [74.2, 1092.0], [74.3, 1092.0], [74.4, 1092.0], [74.5, 1094.0], [74.6, 1096.0], [74.7, 1096.0], [74.8, 1096.0], [74.9, 1098.0], [75.0, 1099.0], [75.1, 1099.0], [75.2, 1101.0], [75.3, 1102.0], [75.4, 1105.0], [75.5, 1105.0], [75.6, 1105.0], [75.7, 1105.0], [75.8, 1106.0], [75.9, 1106.0], [76.0, 1106.0], [76.1, 1107.0], [76.2, 1108.0], [76.3, 1108.0], [76.4, 1108.0], [76.5, 1110.0], [76.6, 1110.0], [76.7, 1110.0], [76.8, 1111.0], [76.9, 1111.0], [77.0, 1111.0], [77.1, 1111.0], [77.2, 1111.0], [77.3, 1111.0], [77.4, 1111.0], [77.5, 1113.0], [77.6, 1114.0], [77.7, 1114.0], [77.8, 1114.0], [77.9, 1115.0], [78.0, 1116.0], [78.1, 1116.0], [78.2, 1116.0], [78.3, 1116.0], [78.4, 1117.0], [78.5, 1117.0], [78.6, 1117.0], [78.7, 1118.0], [78.8, 1118.0], [78.9, 1118.0], [79.0, 1119.0], [79.1, 1119.0], [79.2, 1120.0], [79.3, 1120.0], [79.4, 1120.0], [79.5, 1121.0], [79.6, 1122.0], [79.7, 1122.0], [79.8, 1123.0], [79.9, 1126.0], [80.0, 1126.0], [80.1, 1126.0], [80.2, 1131.0], [80.3, 1132.0], [80.4, 1132.0], [80.5, 1132.0], [80.6, 1133.0], [80.7, 1134.0], [80.8, 1134.0], [80.9, 1134.0], [81.0, 1135.0], [81.1, 1138.0], [81.2, 1138.0], [81.3, 1140.0], [81.4, 1142.0], [81.5, 1143.0], [81.6, 1143.0], [81.7, 1146.0], [81.8, 1148.0], [81.9, 1148.0], [82.0, 1148.0], [82.1, 1149.0], [82.2, 1150.0], [82.3, 1150.0], [82.4, 1151.0], [82.5, 1152.0], [82.6, 1153.0], [82.7, 1153.0], [82.8, 1154.0], [82.9, 1157.0], [83.0, 1157.0], [83.1, 1157.0], [83.2, 1157.0], [83.3, 1158.0], [83.4, 1158.0], [83.5, 1159.0], [83.6, 1159.0], [83.7, 1159.0], [83.8, 1159.0], [83.9, 1162.0], [84.0, 1168.0], [84.1, 1169.0], [84.2, 1169.0], [84.3, 1171.0], [84.4, 1174.0], [84.5, 1175.0], [84.6, 1175.0], [84.7, 1179.0], [84.8, 1179.0], [84.9, 1180.0], [85.0, 1180.0], [85.1, 1180.0], [85.2, 1183.0], [85.3, 1183.0], [85.4, 1183.0], [85.5, 1183.0], [85.6, 1185.0], [85.7, 1185.0], [85.8, 1188.0], [85.9, 1188.0], [86.0, 1188.0], [86.1, 1188.0], [86.2, 1191.0], [86.3, 1192.0], [86.4, 1195.0], [86.5, 1195.0], [86.6, 1196.0], [86.7, 1197.0], [86.8, 1197.0], [86.9, 1199.0], [87.0, 1200.0], [87.1, 1203.0], [87.2, 1203.0], [87.3, 1204.0], [87.4, 1208.0], [87.5, 1210.0], [87.6, 1210.0], [87.7, 1212.0], [87.8, 1215.0], [87.9, 1216.0], [88.0, 1216.0], [88.1, 1217.0], [88.2, 1218.0], [88.3, 1218.0], [88.4, 1218.0], [88.5, 1219.0], [88.6, 1221.0], [88.7, 1221.0], [88.8, 1222.0], [88.9, 1224.0], [89.0, 1226.0], [89.1, 1226.0], [89.2, 1226.0], [89.3, 1228.0], [89.4, 1232.0], [89.5, 1232.0], [89.6, 1233.0], [89.7, 1235.0], [89.8, 1238.0], [89.9, 1238.0], [90.0, 1238.0], [90.1, 1239.0], [90.2, 1239.0], [90.3, 1246.0], [90.4, 1248.0], [90.5, 1257.0], [90.6, 1257.0], [90.7, 1261.0], [90.8, 1263.0], [90.9, 1263.0], [91.0, 1263.0], [91.1, 1265.0], [91.2, 1266.0], [91.3, 1268.0], [91.4, 1268.0], [91.5, 1273.0], [91.6, 1280.0], [91.7, 1280.0], [91.8, 1280.0], [91.9, 1281.0], [92.0, 1283.0], [92.1, 1283.0], [92.2, 1283.0], [92.3, 1284.0], [92.4, 1287.0], [92.5, 1287.0], [92.6, 1291.0], [92.7, 1296.0], [92.8, 1296.0], [92.9, 1296.0], [93.0, 1299.0], [93.1, 1313.0], [93.2, 1315.0], [93.3, 1315.0], [93.4, 1318.0], [93.5, 1331.0], [93.6, 1331.0], [93.7, 1334.0], [93.8, 1337.0], [93.9, 1340.0], [94.0, 1340.0], [94.1, 1341.0], [94.2, 1349.0], [94.3, 1350.0], [94.4, 1350.0], [94.5, 1356.0], [94.6, 1364.0], [94.7, 1366.0], [94.8, 1366.0], [94.9, 1381.0], [95.0, 1381.0], [95.1, 1381.0], [95.2, 1388.0], [95.3, 1389.0], [95.4, 1397.0], [95.5, 1397.0], [95.6, 1403.0], [95.7, 1406.0], [95.8, 1413.0], [95.9, 1413.0], [96.0, 1426.0], [96.1, 1435.0], [96.2, 1446.0], [96.3, 1446.0], [96.4, 1450.0], [96.5, 1456.0], [96.6, 1473.0], [96.7, 1473.0], [96.8, 1482.0], [96.9, 1485.0], [97.0, 1485.0], [97.1, 1535.0], [97.2, 1539.0], [97.3, 1557.0], [97.4, 1557.0], [97.5, 1559.0], [97.6, 1565.0], [97.7, 1567.0], [97.8, 1567.0], [97.9, 1579.0], [98.0, 1683.0], [98.1, 1719.0], [98.2, 1719.0], [98.3, 1848.0], [98.4, 1883.0], [98.5, 1883.0], [98.6, 1886.0], [98.7, 1993.0], [98.8, 2020.0], [98.9, 2020.0], [99.0, 2211.0], [99.1, 2383.0], [99.2, 2445.0], [99.3, 2445.0], [99.4, 2467.0], [99.5, 2536.0], [99.6, 2603.0], [99.7, 2603.0], [99.8, 2652.0], [99.9, 2655.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 124.0, "series": [{"data": [[600.0, 59.0], [700.0, 29.0], [800.0, 43.0], [900.0, 39.0], [1000.0, 124.0], [1100.0, 87.0], [1200.0, 45.0], [1300.0, 18.0], [1400.0, 11.0], [1500.0, 7.0], [100.0, 11.0], [1600.0, 1.0], [1700.0, 1.0], [1800.0, 3.0], [1900.0, 1.0], [2000.0, 1.0], [2300.0, 1.0], [2200.0, 1.0], [2400.0, 2.0], [2500.0, 1.0], [2600.0, 3.0], [200.0, 44.0], [300.0, 27.0], [400.0, 69.0], [500.0, 107.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 22.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 561.0, "series": [{"data": [[0.0, 152.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 561.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 22.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.923728813559322, "minX": 1.60384218E12, "maxY": 10.0, "series": [{"data": [[1.60384224E12, 9.923728813559322], [1.60384218E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384224E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 222.0, "minX": 1.0, "maxY": 1406.0, "series": [{"data": [[8.0, 440.0], [4.0, 433.0], [2.0, 1111.0], [1.0, 1088.0], [9.0, 252.0], [10.0, 840.5123966942145], [5.0, 1406.0], [6.0, 222.0], [3.0, 547.0], [7.0, 555.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 838.4571428571425]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1126.8833333333334, "minX": 1.60384218E12, "maxY": 1283081.1833333333, "series": [{"data": [[1.60384224E12, 1283081.1833333333], [1.60384218E12, 453849.93333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384224E12, 4543.15], [1.60384218E12, 1126.8833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384224E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 815.8949152542372, "minX": 1.60384218E12, "maxY": 930.2620689655172, "series": [{"data": [[1.60384224E12, 815.8949152542372], [1.60384218E12, 930.2620689655172]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384224E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 814.8220338983051, "minX": 1.60384218E12, "maxY": 928.7517241379306, "series": [{"data": [[1.60384224E12, 814.8220338983051], [1.60384218E12, 928.7517241379306]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384224E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.013559322033898306, "minX": 1.60384218E12, "maxY": 0.682758620689656, "series": [{"data": [[1.60384224E12, 0.013559322033898306], [1.60384218E12, 0.682758620689656]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384224E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 140.0, "minX": 1.60384218E12, "maxY": 2655.0, "series": [{"data": [[1.60384224E12, 2211.0], [1.60384218E12, 2655.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384224E12, 156.5949992954731], [1.60384218E12, 150.62799993038178]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384224E12, 159.25450028181075], [1.60384218E12, 150.8908000278473]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384224E12, 158.07249964773655], [1.60384218E12, 150.77399996519088]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384224E12, 140.0], [1.60384218E12, 150.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384224E12, 854.0], [1.60384218E12, 940.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384224E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 449.0, "minX": 2.0, "maxY": 1057.5, "series": [{"data": [[2.0, 1026.5], [9.0, 1051.0], [10.0, 1052.0], [11.0, 1040.0], [12.0, 863.5], [13.0, 726.0], [14.0, 660.5], [15.0, 628.0], [4.0, 532.5], [16.0, 541.5], [17.0, 497.0], [19.0, 486.0], [20.0, 449.0], [21.0, 463.0], [7.0, 1057.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 448.5, "minX": 2.0, "maxY": 1056.5, "series": [{"data": [[2.0, 1016.5], [9.0, 1051.0], [10.0, 1051.5], [11.0, 1040.0], [12.0, 862.5], [13.0, 725.0], [14.0, 658.5], [15.0, 628.0], [4.0, 529.5], [16.0, 541.5], [17.0, 497.0], [19.0, 486.0], [20.0, 448.5], [21.0, 463.0], [7.0, 1056.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.5833333333333335, "minX": 1.60384218E12, "maxY": 9.666666666666666, "series": [{"data": [[1.60384224E12, 9.666666666666666], [1.60384218E12, 2.5833333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384224E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.4166666666666665, "minX": 1.60384218E12, "maxY": 9.833333333333334, "series": [{"data": [[1.60384224E12, 9.833333333333334], [1.60384218E12, 2.4166666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384224E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.4166666666666665, "minX": 1.60384218E12, "maxY": 9.833333333333334, "series": [{"data": [[1.60384224E12, 9.833333333333334], [1.60384218E12, 2.4166666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384224E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.4166666666666665, "minX": 1.60384218E12, "maxY": 9.833333333333334, "series": [{"data": [[1.60384224E12, 9.833333333333334], [1.60384218E12, 2.4166666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384224E12, "title": "Total Transactions Per Second"}},
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

