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
        data: {"result": {"minY": 141.0, "minX": 0.0, "maxY": 2922.0, "series": [{"data": [[0.0, 141.0], [0.1, 141.0], [0.2, 149.0], [0.3, 151.0], [0.4, 151.0], [0.5, 152.0], [0.6, 155.0], [0.7, 158.0], [0.8, 158.0], [0.9, 162.0], [1.0, 163.0], [1.1, 164.0], [1.2, 164.0], [1.3, 165.0], [1.4, 168.0], [1.5, 168.0], [1.6, 168.0], [1.7, 170.0], [1.8, 176.0], [1.9, 176.0], [2.0, 176.0], [2.1, 179.0], [2.2, 192.0], [2.3, 192.0], [2.4, 199.0], [2.5, 217.0], [2.6, 225.0], [2.7, 225.0], [2.8, 231.0], [2.9, 231.0], [3.0, 231.0], [3.1, 231.0], [3.2, 233.0], [3.3, 235.0], [3.4, 235.0], [3.5, 240.0], [3.6, 242.0], [3.7, 242.0], [3.8, 242.0], [3.9, 242.0], [4.0, 245.0], [4.1, 249.0], [4.2, 249.0], [4.3, 252.0], [4.4, 252.0], [4.5, 252.0], [4.6, 252.0], [4.7, 254.0], [4.8, 255.0], [4.9, 255.0], [5.0, 255.0], [5.1, 256.0], [5.2, 259.0], [5.3, 259.0], [5.4, 260.0], [5.5, 262.0], [5.6, 264.0], [5.7, 264.0], [5.8, 265.0], [5.9, 265.0], [6.0, 265.0], [6.1, 265.0], [6.2, 267.0], [6.3, 267.0], [6.4, 268.0], [6.5, 268.0], [6.6, 268.0], [6.7, 271.0], [6.8, 271.0], [6.9, 272.0], [7.0, 274.0], [7.1, 276.0], [7.2, 276.0], [7.3, 281.0], [7.4, 290.0], [7.5, 292.0], [7.6, 292.0], [7.7, 293.0], [7.8, 294.0], [7.9, 295.0], [8.0, 295.0], [8.1, 298.0], [8.2, 300.0], [8.3, 309.0], [8.4, 309.0], [8.5, 309.0], [8.6, 310.0], [8.7, 310.0], [8.8, 315.0], [8.9, 316.0], [9.0, 317.0], [9.1, 317.0], [9.2, 324.0], [9.3, 329.0], [9.4, 334.0], [9.5, 334.0], [9.6, 336.0], [9.7, 339.0], [9.8, 339.0], [9.9, 339.0], [10.0, 340.0], [10.1, 341.0], [10.2, 341.0], [10.3, 343.0], [10.4, 343.0], [10.5, 344.0], [10.6, 344.0], [10.7, 353.0], [10.8, 354.0], [10.9, 355.0], [11.0, 355.0], [11.1, 356.0], [11.2, 358.0], [11.3, 362.0], [11.4, 362.0], [11.5, 362.0], [11.6, 363.0], [11.7, 363.0], [11.8, 370.0], [11.9, 370.0], [12.0, 374.0], [12.1, 374.0], [12.2, 380.0], [12.3, 383.0], [12.4, 383.0], [12.5, 383.0], [12.6, 387.0], [12.7, 391.0], [12.8, 392.0], [12.9, 392.0], [13.0, 393.0], [13.1, 395.0], [13.2, 395.0], [13.3, 395.0], [13.4, 399.0], [13.5, 401.0], [13.6, 401.0], [13.7, 405.0], [13.8, 407.0], [13.9, 413.0], [14.0, 413.0], [14.1, 413.0], [14.2, 417.0], [14.3, 417.0], [14.4, 417.0], [14.5, 418.0], [14.6, 422.0], [14.7, 426.0], [14.8, 426.0], [14.9, 427.0], [15.0, 428.0], [15.1, 428.0], [15.2, 430.0], [15.3, 432.0], [15.4, 436.0], [15.5, 436.0], [15.6, 439.0], [15.7, 440.0], [15.8, 458.0], [15.9, 458.0], [16.0, 462.0], [16.1, 471.0], [16.2, 471.0], [16.3, 471.0], [16.4, 472.0], [16.5, 472.0], [16.6, 477.0], [16.7, 477.0], [16.8, 478.0], [16.9, 482.0], [17.0, 482.0], [17.1, 483.0], [17.2, 484.0], [17.3, 485.0], [17.4, 485.0], [17.5, 485.0], [17.6, 489.0], [17.7, 490.0], [17.8, 490.0], [17.9, 493.0], [18.0, 496.0], [18.1, 497.0], [18.2, 497.0], [18.3, 498.0], [18.4, 501.0], [18.5, 501.0], [18.6, 502.0], [18.7, 502.0], [18.8, 503.0], [18.9, 503.0], [19.0, 504.0], [19.1, 504.0], [19.2, 508.0], [19.3, 508.0], [19.4, 514.0], [19.5, 519.0], [19.6, 521.0], [19.7, 521.0], [19.8, 521.0], [19.9, 524.0], [20.0, 524.0], [20.1, 524.0], [20.2, 525.0], [20.3, 528.0], [20.4, 528.0], [20.5, 528.0], [20.6, 529.0], [20.7, 530.0], [20.8, 530.0], [20.9, 531.0], [21.0, 532.0], [21.1, 532.0], [21.2, 532.0], [21.3, 533.0], [21.4, 533.0], [21.5, 534.0], [21.6, 534.0], [21.7, 535.0], [21.8, 535.0], [21.9, 535.0], [22.0, 537.0], [22.1, 538.0], [22.2, 538.0], [22.3, 538.0], [22.4, 539.0], [22.5, 540.0], [22.6, 541.0], [22.7, 541.0], [22.8, 541.0], [22.9, 541.0], [23.0, 541.0], [23.1, 541.0], [23.2, 541.0], [23.3, 542.0], [23.4, 542.0], [23.5, 543.0], [23.6, 543.0], [23.7, 544.0], [23.8, 544.0], [23.9, 544.0], [24.0, 545.0], [24.1, 546.0], [24.2, 546.0], [24.3, 547.0], [24.4, 548.0], [24.5, 548.0], [24.6, 548.0], [24.7, 548.0], [24.8, 548.0], [24.9, 549.0], [25.0, 549.0], [25.1, 549.0], [25.2, 550.0], [25.3, 550.0], [25.4, 550.0], [25.5, 550.0], [25.6, 551.0], [25.7, 551.0], [25.8, 552.0], [25.9, 552.0], [26.0, 553.0], [26.1, 553.0], [26.2, 553.0], [26.3, 553.0], [26.4, 553.0], [26.5, 553.0], [26.6, 555.0], [26.7, 556.0], [26.8, 556.0], [26.9, 557.0], [27.0, 557.0], [27.1, 558.0], [27.2, 558.0], [27.3, 558.0], [27.4, 558.0], [27.5, 559.0], [27.6, 559.0], [27.7, 559.0], [27.8, 559.0], [27.9, 560.0], [28.0, 560.0], [28.1, 561.0], [28.2, 561.0], [28.3, 562.0], [28.4, 562.0], [28.5, 562.0], [28.6, 562.0], [28.7, 562.0], [28.8, 570.0], [28.9, 570.0], [29.0, 571.0], [29.1, 571.0], [29.2, 572.0], [29.3, 573.0], [29.4, 574.0], [29.5, 574.0], [29.6, 575.0], [29.7, 576.0], [29.8, 576.0], [29.9, 576.0], [30.0, 578.0], [30.1, 578.0], [30.2, 578.0], [30.3, 578.0], [30.4, 580.0], [30.5, 580.0], [30.6, 580.0], [30.7, 580.0], [30.8, 581.0], [30.9, 582.0], [31.0, 582.0], [31.1, 582.0], [31.2, 583.0], [31.3, 583.0], [31.4, 583.0], [31.5, 583.0], [31.6, 583.0], [31.7, 583.0], [31.8, 583.0], [31.9, 584.0], [32.0, 585.0], [32.1, 585.0], [32.2, 585.0], [32.3, 586.0], [32.4, 588.0], [32.5, 588.0], [32.6, 588.0], [32.7, 589.0], [32.8, 589.0], [32.9, 589.0], [33.0, 590.0], [33.1, 590.0], [33.2, 590.0], [33.3, 590.0], [33.4, 591.0], [33.5, 592.0], [33.6, 592.0], [33.7, 592.0], [33.8, 593.0], [33.9, 593.0], [34.0, 593.0], [34.1, 595.0], [34.2, 596.0], [34.3, 596.0], [34.4, 596.0], [34.5, 597.0], [34.6, 600.0], [34.7, 601.0], [34.8, 601.0], [34.9, 603.0], [35.0, 604.0], [35.1, 604.0], [35.2, 605.0], [35.3, 607.0], [35.4, 607.0], [35.5, 607.0], [35.6, 607.0], [35.7, 608.0], [35.8, 608.0], [35.9, 608.0], [36.0, 608.0], [36.1, 609.0], [36.2, 609.0], [36.3, 609.0], [36.4, 610.0], [36.5, 612.0], [36.6, 614.0], [36.7, 614.0], [36.8, 614.0], [36.9, 615.0], [37.0, 615.0], [37.1, 616.0], [37.2, 620.0], [37.3, 622.0], [37.4, 622.0], [37.5, 622.0], [37.6, 623.0], [37.7, 623.0], [37.8, 623.0], [37.9, 627.0], [38.0, 629.0], [38.1, 631.0], [38.2, 631.0], [38.3, 632.0], [38.4, 633.0], [38.5, 633.0], [38.6, 637.0], [38.7, 641.0], [38.8, 643.0], [38.9, 643.0], [39.0, 646.0], [39.1, 648.0], [39.2, 648.0], [39.3, 648.0], [39.4, 648.0], [39.5, 656.0], [39.6, 656.0], [39.7, 656.0], [39.8, 657.0], [39.9, 657.0], [40.0, 657.0], [40.1, 657.0], [40.2, 659.0], [40.3, 660.0], [40.4, 660.0], [40.5, 662.0], [40.6, 662.0], [40.7, 663.0], [40.8, 663.0], [40.9, 663.0], [41.0, 665.0], [41.1, 665.0], [41.2, 665.0], [41.3, 666.0], [41.4, 668.0], [41.5, 668.0], [41.6, 668.0], [41.7, 669.0], [41.8, 669.0], [41.9, 669.0], [42.0, 674.0], [42.1, 674.0], [42.2, 675.0], [42.3, 675.0], [42.4, 676.0], [42.5, 676.0], [42.6, 680.0], [42.7, 680.0], [42.8, 681.0], [42.9, 682.0], [43.0, 688.0], [43.1, 688.0], [43.2, 688.0], [43.3, 689.0], [43.4, 689.0], [43.5, 690.0], [43.6, 691.0], [43.7, 692.0], [43.8, 692.0], [43.9, 697.0], [44.0, 700.0], [44.1, 700.0], [44.2, 700.0], [44.3, 706.0], [44.4, 709.0], [44.5, 710.0], [44.6, 710.0], [44.7, 713.0], [44.8, 716.0], [44.9, 720.0], [45.0, 720.0], [45.1, 720.0], [45.2, 722.0], [45.3, 722.0], [45.4, 724.0], [45.5, 727.0], [45.6, 728.0], [45.7, 728.0], [45.8, 731.0], [45.9, 731.0], [46.0, 732.0], [46.1, 732.0], [46.2, 743.0], [46.3, 743.0], [46.4, 750.0], [46.5, 750.0], [46.6, 750.0], [46.7, 752.0], [46.8, 752.0], [46.9, 752.0], [47.0, 757.0], [47.1, 759.0], [47.2, 759.0], [47.3, 761.0], [47.4, 770.0], [47.5, 781.0], [47.6, 781.0], [47.7, 786.0], [47.8, 788.0], [47.9, 792.0], [48.0, 792.0], [48.1, 794.0], [48.2, 794.0], [48.3, 794.0], [48.4, 794.0], [48.5, 799.0], [48.6, 804.0], [48.7, 804.0], [48.8, 804.0], [48.9, 807.0], [49.0, 815.0], [49.1, 815.0], [49.2, 818.0], [49.3, 825.0], [49.4, 832.0], [49.5, 832.0], [49.6, 834.0], [49.7, 836.0], [49.8, 840.0], [49.9, 840.0], [50.0, 842.0], [50.1, 851.0], [50.2, 851.0], [50.3, 852.0], [50.4, 854.0], [50.5, 857.0], [50.6, 857.0], [50.7, 858.0], [50.8, 858.0], [50.9, 859.0], [51.0, 859.0], [51.1, 860.0], [51.2, 866.0], [51.3, 866.0], [51.4, 866.0], [51.5, 870.0], [51.6, 878.0], [51.7, 878.0], [51.8, 880.0], [51.9, 883.0], [52.0, 886.0], [52.1, 886.0], [52.2, 887.0], [52.3, 892.0], [52.4, 894.0], [52.5, 894.0], [52.6, 899.0], [52.7, 913.0], [52.8, 917.0], [52.9, 917.0], [53.0, 917.0], [53.1, 923.0], [53.2, 925.0], [53.3, 925.0], [53.4, 929.0], [53.5, 930.0], [53.6, 930.0], [53.7, 933.0], [53.8, 941.0], [53.9, 944.0], [54.0, 944.0], [54.1, 948.0], [54.2, 957.0], [54.3, 958.0], [54.4, 958.0], [54.5, 959.0], [54.6, 963.0], [54.7, 963.0], [54.8, 963.0], [54.9, 964.0], [55.0, 965.0], [55.1, 965.0], [55.2, 967.0], [55.3, 974.0], [55.4, 976.0], [55.5, 976.0], [55.6, 980.0], [55.7, 981.0], [55.8, 982.0], [55.9, 982.0], [56.0, 987.0], [56.1, 988.0], [56.2, 994.0], [56.3, 994.0], [56.4, 995.0], [56.5, 998.0], [56.6, 1003.0], [56.7, 1003.0], [56.8, 1004.0], [56.9, 1006.0], [57.0, 1006.0], [57.1, 1011.0], [57.2, 1011.0], [57.3, 1012.0], [57.4, 1012.0], [57.5, 1013.0], [57.6, 1017.0], [57.7, 1023.0], [57.8, 1023.0], [57.9, 1024.0], [58.0, 1026.0], [58.1, 1038.0], [58.2, 1038.0], [58.3, 1038.0], [58.4, 1038.0], [58.5, 1038.0], [58.6, 1040.0], [58.7, 1041.0], [58.8, 1043.0], [58.9, 1043.0], [59.0, 1052.0], [59.1, 1052.0], [59.2, 1052.0], [59.3, 1052.0], [59.4, 1052.0], [59.5, 1055.0], [59.6, 1055.0], [59.7, 1055.0], [59.8, 1057.0], [59.9, 1061.0], [60.0, 1061.0], [60.1, 1061.0], [60.2, 1063.0], [60.3, 1066.0], [60.4, 1066.0], [60.5, 1066.0], [60.6, 1068.0], [60.7, 1069.0], [60.8, 1069.0], [60.9, 1070.0], [61.0, 1073.0], [61.1, 1076.0], [61.2, 1076.0], [61.3, 1076.0], [61.4, 1076.0], [61.5, 1076.0], [61.6, 1076.0], [61.7, 1077.0], [61.8, 1077.0], [61.9, 1077.0], [62.0, 1079.0], [62.1, 1082.0], [62.2, 1083.0], [62.3, 1083.0], [62.4, 1085.0], [62.5, 1086.0], [62.6, 1087.0], [62.7, 1087.0], [62.8, 1088.0], [62.9, 1089.0], [63.0, 1091.0], [63.1, 1091.0], [63.2, 1091.0], [63.3, 1092.0], [63.4, 1092.0], [63.5, 1094.0], [63.6, 1095.0], [63.7, 1097.0], [63.8, 1097.0], [63.9, 1099.0], [64.0, 1100.0], [64.1, 1101.0], [64.2, 1101.0], [64.3, 1102.0], [64.4, 1102.0], [64.5, 1103.0], [64.6, 1103.0], [64.7, 1103.0], [64.8, 1105.0], [64.9, 1105.0], [65.0, 1105.0], [65.1, 1106.0], [65.2, 1106.0], [65.3, 1106.0], [65.4, 1106.0], [65.5, 1106.0], [65.6, 1108.0], [65.7, 1108.0], [65.8, 1109.0], [65.9, 1110.0], [66.0, 1110.0], [66.1, 1110.0], [66.2, 1110.0], [66.3, 1112.0], [66.4, 1112.0], [66.5, 1112.0], [66.6, 1112.0], [66.7, 1113.0], [66.8, 1113.0], [66.9, 1114.0], [67.0, 1114.0], [67.1, 1114.0], [67.2, 1114.0], [67.3, 1115.0], [67.4, 1115.0], [67.5, 1116.0], [67.6, 1116.0], [67.7, 1116.0], [67.8, 1116.0], [67.9, 1117.0], [68.0, 1117.0], [68.1, 1118.0], [68.2, 1120.0], [68.3, 1120.0], [68.4, 1120.0], [68.5, 1120.0], [68.6, 1121.0], [68.7, 1121.0], [68.8, 1122.0], [68.9, 1124.0], [69.0, 1125.0], [69.1, 1125.0], [69.2, 1125.0], [69.3, 1126.0], [69.4, 1126.0], [69.5, 1126.0], [69.6, 1126.0], [69.7, 1127.0], [69.8, 1128.0], [69.9, 1128.0], [70.0, 1129.0], [70.1, 1129.0], [70.2, 1129.0], [70.3, 1131.0], [70.4, 1131.0], [70.5, 1132.0], [70.6, 1132.0], [70.7, 1134.0], [70.8, 1135.0], [70.9, 1135.0], [71.0, 1135.0], [71.1, 1135.0], [71.2, 1136.0], [71.3, 1136.0], [71.4, 1136.0], [71.5, 1136.0], [71.6, 1137.0], [71.7, 1137.0], [71.8, 1137.0], [71.9, 1137.0], [72.0, 1138.0], [72.1, 1138.0], [72.2, 1139.0], [72.3, 1142.0], [72.4, 1142.0], [72.5, 1142.0], [72.6, 1143.0], [72.7, 1144.0], [72.8, 1145.0], [72.9, 1145.0], [73.0, 1145.0], [73.1, 1145.0], [73.2, 1146.0], [73.3, 1146.0], [73.4, 1147.0], [73.5, 1147.0], [73.6, 1147.0], [73.7, 1147.0], [73.8, 1148.0], [73.9, 1148.0], [74.0, 1148.0], [74.1, 1148.0], [74.2, 1149.0], [74.3, 1150.0], [74.4, 1150.0], [74.5, 1150.0], [74.6, 1151.0], [74.7, 1151.0], [74.8, 1151.0], [74.9, 1154.0], [75.0, 1154.0], [75.1, 1154.0], [75.2, 1155.0], [75.3, 1155.0], [75.4, 1156.0], [75.5, 1156.0], [75.6, 1158.0], [75.7, 1158.0], [75.8, 1159.0], [75.9, 1159.0], [76.0, 1159.0], [76.1, 1160.0], [76.2, 1160.0], [76.3, 1160.0], [76.4, 1161.0], [76.5, 1162.0], [76.6, 1162.0], [76.7, 1162.0], [76.8, 1163.0], [76.9, 1164.0], [77.0, 1164.0], [77.1, 1164.0], [77.2, 1166.0], [77.3, 1167.0], [77.4, 1167.0], [77.5, 1171.0], [77.6, 1171.0], [77.7, 1171.0], [77.8, 1171.0], [77.9, 1172.0], [78.0, 1174.0], [78.1, 1175.0], [78.2, 1175.0], [78.3, 1177.0], [78.4, 1178.0], [78.5, 1178.0], [78.6, 1178.0], [78.7, 1179.0], [78.8, 1180.0], [78.9, 1180.0], [79.0, 1180.0], [79.1, 1181.0], [79.2, 1181.0], [79.3, 1181.0], [79.4, 1182.0], [79.5, 1182.0], [79.6, 1182.0], [79.7, 1182.0], [79.8, 1183.0], [79.9, 1185.0], [80.0, 1186.0], [80.1, 1186.0], [80.2, 1188.0], [80.3, 1188.0], [80.4, 1188.0], [80.5, 1188.0], [80.6, 1189.0], [80.7, 1190.0], [80.8, 1190.0], [80.9, 1190.0], [81.0, 1191.0], [81.1, 1191.0], [81.2, 1191.0], [81.3, 1193.0], [81.4, 1195.0], [81.5, 1196.0], [81.6, 1196.0], [81.7, 1196.0], [81.8, 1197.0], [81.9, 1197.0], [82.0, 1198.0], [82.1, 1199.0], [82.2, 1202.0], [82.3, 1202.0], [82.4, 1202.0], [82.5, 1203.0], [82.6, 1204.0], [82.7, 1204.0], [82.8, 1205.0], [82.9, 1205.0], [83.0, 1206.0], [83.1, 1206.0], [83.2, 1206.0], [83.3, 1206.0], [83.4, 1206.0], [83.5, 1207.0], [83.6, 1209.0], [83.7, 1210.0], [83.8, 1210.0], [83.9, 1211.0], [84.0, 1214.0], [84.1, 1214.0], [84.2, 1214.0], [84.3, 1215.0], [84.4, 1220.0], [84.5, 1222.0], [84.6, 1222.0], [84.7, 1222.0], [84.8, 1223.0], [84.9, 1225.0], [85.0, 1225.0], [85.1, 1226.0], [85.2, 1227.0], [85.3, 1227.0], [85.4, 1233.0], [85.5, 1233.0], [85.6, 1235.0], [85.7, 1235.0], [85.8, 1235.0], [85.9, 1238.0], [86.0, 1238.0], [86.1, 1238.0], [86.2, 1239.0], [86.3, 1241.0], [86.4, 1244.0], [86.5, 1244.0], [86.6, 1246.0], [86.7, 1246.0], [86.8, 1246.0], [86.9, 1251.0], [87.0, 1251.0], [87.1, 1254.0], [87.2, 1254.0], [87.3, 1254.0], [87.4, 1255.0], [87.5, 1256.0], [87.6, 1256.0], [87.7, 1256.0], [87.8, 1257.0], [87.9, 1257.0], [88.0, 1257.0], [88.1, 1259.0], [88.2, 1259.0], [88.3, 1260.0], [88.4, 1260.0], [88.5, 1262.0], [88.6, 1265.0], [88.7, 1265.0], [88.8, 1266.0], [88.9, 1267.0], [89.0, 1268.0], [89.1, 1268.0], [89.2, 1269.0], [89.3, 1272.0], [89.4, 1272.0], [89.5, 1272.0], [89.6, 1276.0], [89.7, 1277.0], [89.8, 1278.0], [89.9, 1278.0], [90.0, 1285.0], [90.1, 1286.0], [90.2, 1286.0], [90.3, 1288.0], [90.4, 1290.0], [90.5, 1299.0], [90.6, 1299.0], [90.7, 1303.0], [90.8, 1304.0], [90.9, 1305.0], [91.0, 1305.0], [91.1, 1309.0], [91.2, 1311.0], [91.3, 1312.0], [91.4, 1312.0], [91.5, 1313.0], [91.6, 1314.0], [91.7, 1314.0], [91.8, 1321.0], [91.9, 1321.0], [92.0, 1322.0], [92.1, 1322.0], [92.2, 1330.0], [92.3, 1332.0], [92.4, 1337.0], [92.5, 1337.0], [92.6, 1338.0], [92.7, 1339.0], [92.8, 1340.0], [92.9, 1340.0], [93.0, 1347.0], [93.1, 1348.0], [93.2, 1351.0], [93.3, 1351.0], [93.4, 1352.0], [93.5, 1357.0], [93.6, 1357.0], [93.7, 1365.0], [93.8, 1370.0], [93.9, 1381.0], [94.0, 1381.0], [94.1, 1394.0], [94.2, 1398.0], [94.3, 1408.0], [94.4, 1408.0], [94.5, 1411.0], [94.6, 1433.0], [94.7, 1434.0], [94.8, 1434.0], [94.9, 1437.0], [95.0, 1454.0], [95.1, 1454.0], [95.2, 1460.0], [95.3, 1460.0], [95.4, 1462.0], [95.5, 1462.0], [95.6, 1463.0], [95.7, 1484.0], [95.8, 1486.0], [95.9, 1486.0], [96.0, 1503.0], [96.1, 1503.0], [96.2, 1507.0], [96.3, 1507.0], [96.4, 1511.0], [96.5, 1533.0], [96.6, 1537.0], [96.7, 1537.0], [96.8, 1559.0], [96.9, 1566.0], [97.0, 1566.0], [97.1, 1569.0], [97.2, 1572.0], [97.3, 1600.0], [97.4, 1600.0], [97.5, 1608.0], [97.6, 1640.0], [97.7, 1671.0], [97.8, 1671.0], [97.9, 1689.0], [98.0, 1774.0], [98.1, 1843.0], [98.2, 1843.0], [98.3, 1845.0], [98.4, 1848.0], [98.5, 1848.0], [98.6, 1872.0], [98.7, 1893.0], [98.8, 1940.0], [98.9, 1940.0], [99.0, 2127.0], [99.1, 2144.0], [99.2, 2307.0], [99.3, 2307.0], [99.4, 2321.0], [99.5, 2443.0], [99.6, 2526.0], [99.7, 2526.0], [99.8, 2617.0], [99.9, 2922.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 134.0, "series": [{"data": [[600.0, 69.0], [700.0, 34.0], [800.0, 30.0], [900.0, 29.0], [1000.0, 54.0], [1100.0, 134.0], [1200.0, 62.0], [1300.0, 27.0], [1400.0, 12.0], [1500.0, 10.0], [100.0, 18.0], [1600.0, 5.0], [1700.0, 1.0], [1800.0, 5.0], [1900.0, 1.0], [2100.0, 2.0], [2300.0, 2.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2900.0, 1.0], [200.0, 42.0], [300.0, 39.0], [400.0, 36.0], [500.0, 119.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 30.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 570.0, "series": [{"data": [[0.0, 135.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 570.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 30.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.904862579281186, "minX": 1.60237518E12, "maxY": 10.0, "series": [{"data": [[1.60237524E12, 9.904862579281186], [1.60237518E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237524E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 242.0, "minX": 1.0, "maxY": 1190.0, "series": [{"data": [[8.0, 1190.0], [4.0, 550.0], [2.0, 1066.0], [1.0, 1038.0], [9.0, 252.0], [10.0, 860.6170798898077], [5.0, 439.0], [6.0, 482.0], [3.0, 502.0], [7.0, 242.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 857.9170068027214]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2034.4, "minX": 1.60237518E12, "maxY": 1032537.2833333333, "series": [{"data": [[1.60237524E12, 1032537.2833333333], [1.60237518E12, 704308.0833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237524E12, 3635.633333333333], [1.60237518E12, 2034.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237524E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 801.3742071881609, "minX": 1.60237518E12, "maxY": 959.9961832061066, "series": [{"data": [[1.60237524E12, 801.3742071881609], [1.60237518E12, 959.9961832061066]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237524E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 800.3720930232554, "minX": 1.60237518E12, "maxY": 958.7251908396947, "series": [{"data": [[1.60237524E12, 800.3720930232554], [1.60237518E12, 958.7251908396947]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237524E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.029598308668076095, "minX": 1.60237518E12, "maxY": 0.4236641221374042, "series": [{"data": [[1.60237524E12, 0.029598308668076095], [1.60237518E12, 0.4236641221374042]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237524E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 141.0, "minX": 1.60237518E12, "maxY": 2922.0, "series": [{"data": [[1.60237524E12, 1893.0], [1.60237518E12, 2922.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237524E12, 163.2659998869896], [1.60237518E12, 149.73399987459183]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237524E12, 163.69260004520416], [1.60237518E12, 150.20740005016327]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237524E12, 163.50299994349479], [1.60237518E12, 149.99699993729593]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237524E12, 152.0], [1.60237518E12, 141.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237524E12, 743.0], [1.60237518E12, 1063.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237524E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 424.0, "minX": 1.0, "maxY": 1145.0, "series": [{"data": [[8.0, 1145.0], [2.0, 1052.0], [9.0, 1094.5], [10.0, 1093.5], [11.0, 1110.5], [12.0, 846.5], [13.0, 624.5], [14.0, 661.0], [15.0, 703.0], [1.0, 852.0], [16.0, 480.5], [17.0, 480.5], [19.0, 424.0], [5.0, 659.0], [22.0, 558.5], [7.0, 980.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 423.5, "minX": 1.0, "maxY": 1144.0, "series": [{"data": [[8.0, 1144.0], [2.0, 1050.5], [9.0, 1093.5], [10.0, 1092.5], [11.0, 1109.0], [12.0, 846.5], [13.0, 623.5], [14.0, 660.0], [15.0, 702.5], [1.0, 843.0], [16.0, 480.5], [17.0, 480.5], [19.0, 423.5], [5.0, 656.0], [22.0, 557.5], [7.0, 978.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.533333333333333, "minX": 1.60237518E12, "maxY": 7.716666666666667, "series": [{"data": [[1.60237524E12, 7.716666666666667], [1.60237518E12, 4.533333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237524E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.366666666666666, "minX": 1.60237518E12, "maxY": 7.883333333333334, "series": [{"data": [[1.60237524E12, 7.883333333333334], [1.60237518E12, 4.366666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237524E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.366666666666666, "minX": 1.60237518E12, "maxY": 7.883333333333334, "series": [{"data": [[1.60237524E12, 7.883333333333334], [1.60237518E12, 4.366666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237524E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.366666666666666, "minX": 1.60237518E12, "maxY": 7.883333333333334, "series": [{"data": [[1.60237524E12, 7.883333333333334], [1.60237518E12, 4.366666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237524E12, "title": "Total Transactions Per Second"}},
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

