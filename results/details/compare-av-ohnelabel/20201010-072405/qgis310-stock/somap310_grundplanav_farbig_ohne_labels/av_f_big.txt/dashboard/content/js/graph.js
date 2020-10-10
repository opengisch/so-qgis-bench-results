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
        data: {"result": {"minY": 133.0, "minX": 0.0, "maxY": 3236.0, "series": [{"data": [[0.0, 133.0], [0.1, 133.0], [0.2, 135.0], [0.3, 140.0], [0.4, 140.0], [0.5, 141.0], [0.6, 142.0], [0.7, 143.0], [0.8, 143.0], [0.9, 144.0], [1.0, 149.0], [1.1, 151.0], [1.2, 151.0], [1.3, 151.0], [1.4, 160.0], [1.5, 161.0], [1.6, 161.0], [1.7, 166.0], [1.8, 168.0], [1.9, 168.0], [2.0, 172.0], [2.1, 174.0], [2.2, 174.0], [2.3, 174.0], [2.4, 182.0], [2.5, 184.0], [2.6, 203.0], [2.7, 203.0], [2.8, 212.0], [2.9, 213.0], [3.0, 219.0], [3.1, 219.0], [3.2, 224.0], [3.3, 226.0], [3.4, 226.0], [3.5, 227.0], [3.6, 228.0], [3.7, 231.0], [3.8, 231.0], [3.9, 232.0], [4.0, 233.0], [4.1, 234.0], [4.2, 234.0], [4.3, 235.0], [4.4, 236.0], [4.5, 241.0], [4.6, 241.0], [4.7, 244.0], [4.8, 245.0], [4.9, 245.0], [5.0, 245.0], [5.1, 246.0], [5.2, 247.0], [5.3, 247.0], [5.4, 252.0], [5.5, 256.0], [5.6, 258.0], [5.7, 258.0], [5.8, 259.0], [5.9, 260.0], [6.0, 260.0], [6.1, 260.0], [6.2, 262.0], [6.3, 264.0], [6.4, 267.0], [6.5, 267.0], [6.6, 268.0], [6.7, 271.0], [6.8, 271.0], [6.9, 272.0], [7.0, 273.0], [7.1, 274.0], [7.2, 274.0], [7.3, 276.0], [7.4, 278.0], [7.5, 279.0], [7.6, 279.0], [7.7, 282.0], [7.8, 287.0], [7.9, 287.0], [8.0, 287.0], [8.1, 287.0], [8.2, 289.0], [8.3, 298.0], [8.4, 298.0], [8.5, 302.0], [8.6, 306.0], [8.7, 306.0], [8.8, 309.0], [8.9, 310.0], [9.0, 310.0], [9.1, 310.0], [9.2, 312.0], [9.3, 312.0], [9.4, 317.0], [9.5, 317.0], [9.6, 319.0], [9.7, 320.0], [9.8, 329.0], [9.9, 329.0], [10.0, 330.0], [10.1, 331.0], [10.2, 331.0], [10.3, 335.0], [10.4, 335.0], [10.5, 335.0], [10.6, 335.0], [10.7, 338.0], [10.8, 341.0], [10.9, 342.0], [11.0, 342.0], [11.1, 344.0], [11.2, 344.0], [11.3, 346.0], [11.4, 346.0], [11.5, 352.0], [11.6, 352.0], [11.7, 352.0], [11.8, 354.0], [11.9, 354.0], [12.0, 361.0], [12.1, 361.0], [12.2, 369.0], [12.3, 370.0], [12.4, 372.0], [12.5, 372.0], [12.6, 373.0], [12.7, 381.0], [12.8, 382.0], [12.9, 382.0], [13.0, 384.0], [13.1, 385.0], [13.2, 387.0], [13.3, 387.0], [13.4, 387.0], [13.5, 389.0], [13.6, 389.0], [13.7, 390.0], [13.8, 393.0], [13.9, 394.0], [14.0, 394.0], [14.1, 395.0], [14.2, 399.0], [14.3, 399.0], [14.4, 399.0], [14.5, 401.0], [14.6, 403.0], [14.7, 405.0], [14.8, 405.0], [14.9, 405.0], [15.0, 405.0], [15.1, 405.0], [15.2, 406.0], [15.3, 416.0], [15.4, 418.0], [15.5, 418.0], [15.6, 423.0], [15.7, 441.0], [15.8, 444.0], [15.9, 444.0], [16.0, 447.0], [16.1, 454.0], [16.2, 455.0], [16.3, 455.0], [16.4, 455.0], [16.5, 455.0], [16.6, 457.0], [16.7, 457.0], [16.8, 460.0], [16.9, 465.0], [17.0, 465.0], [17.1, 467.0], [17.2, 470.0], [17.3, 473.0], [17.4, 473.0], [17.5, 474.0], [17.6, 475.0], [17.7, 475.0], [17.8, 475.0], [17.9, 477.0], [18.0, 478.0], [18.1, 478.0], [18.2, 478.0], [18.3, 480.0], [18.4, 480.0], [18.5, 480.0], [18.6, 480.0], [18.7, 482.0], [18.8, 484.0], [18.9, 484.0], [19.0, 484.0], [19.1, 485.0], [19.2, 486.0], [19.3, 486.0], [19.4, 489.0], [19.5, 490.0], [19.6, 492.0], [19.7, 492.0], [19.8, 492.0], [19.9, 494.0], [20.0, 495.0], [20.1, 495.0], [20.2, 497.0], [20.3, 497.0], [20.4, 497.0], [20.5, 498.0], [20.6, 499.0], [20.7, 500.0], [20.8, 500.0], [20.9, 500.0], [21.0, 500.0], [21.1, 502.0], [21.2, 502.0], [21.3, 502.0], [21.4, 503.0], [21.5, 503.0], [21.6, 503.0], [21.7, 503.0], [21.8, 503.0], [21.9, 503.0], [22.0, 504.0], [22.1, 507.0], [22.2, 507.0], [22.3, 507.0], [22.4, 507.0], [22.5, 507.0], [22.6, 508.0], [22.7, 508.0], [22.8, 508.0], [22.9, 509.0], [23.0, 510.0], [23.1, 510.0], [23.2, 510.0], [23.3, 513.0], [23.4, 513.0], [23.5, 513.0], [23.6, 515.0], [23.7, 516.0], [23.8, 516.0], [23.9, 516.0], [24.0, 516.0], [24.1, 517.0], [24.2, 517.0], [24.3, 517.0], [24.4, 518.0], [24.5, 518.0], [24.6, 518.0], [24.7, 520.0], [24.8, 520.0], [24.9, 520.0], [25.0, 520.0], [25.1, 520.0], [25.2, 524.0], [25.3, 524.0], [25.4, 524.0], [25.5, 524.0], [25.6, 524.0], [25.7, 524.0], [25.8, 524.0], [25.9, 525.0], [26.0, 526.0], [26.1, 526.0], [26.2, 526.0], [26.3, 527.0], [26.4, 527.0], [26.5, 527.0], [26.6, 528.0], [26.7, 528.0], [26.8, 528.0], [26.9, 529.0], [27.0, 529.0], [27.1, 530.0], [27.2, 530.0], [27.3, 531.0], [27.4, 531.0], [27.5, 531.0], [27.6, 531.0], [27.7, 532.0], [27.8, 534.0], [27.9, 535.0], [28.0, 535.0], [28.1, 536.0], [28.2, 536.0], [28.3, 537.0], [28.4, 537.0], [28.5, 537.0], [28.6, 537.0], [28.7, 537.0], [28.8, 538.0], [28.9, 538.0], [29.0, 538.0], [29.1, 538.0], [29.2, 539.0], [29.3, 540.0], [29.4, 541.0], [29.5, 541.0], [29.6, 541.0], [29.7, 541.0], [29.8, 541.0], [29.9, 541.0], [30.0, 542.0], [30.1, 542.0], [30.2, 542.0], [30.3, 544.0], [30.4, 544.0], [30.5, 544.0], [30.6, 544.0], [30.7, 545.0], [30.8, 548.0], [30.9, 549.0], [31.0, 549.0], [31.1, 550.0], [31.2, 553.0], [31.3, 553.0], [31.4, 553.0], [31.5, 558.0], [31.6, 558.0], [31.7, 558.0], [31.8, 559.0], [31.9, 560.0], [32.0, 561.0], [32.1, 561.0], [32.2, 562.0], [32.3, 563.0], [32.4, 563.0], [32.5, 563.0], [32.6, 563.0], [32.7, 564.0], [32.8, 564.0], [32.9, 564.0], [33.0, 566.0], [33.1, 571.0], [33.2, 573.0], [33.3, 573.0], [33.4, 577.0], [33.5, 578.0], [33.6, 578.0], [33.7, 579.0], [33.8, 579.0], [33.9, 580.0], [34.0, 580.0], [34.1, 580.0], [34.2, 580.0], [34.3, 580.0], [34.4, 580.0], [34.5, 584.0], [34.6, 584.0], [34.7, 586.0], [34.8, 586.0], [34.9, 586.0], [35.0, 587.0], [35.1, 587.0], [35.2, 590.0], [35.3, 590.0], [35.4, 590.0], [35.5, 590.0], [35.6, 591.0], [35.7, 593.0], [35.8, 596.0], [35.9, 596.0], [36.0, 598.0], [36.1, 599.0], [36.2, 599.0], [36.3, 599.0], [36.4, 606.0], [36.5, 607.0], [36.6, 607.0], [36.7, 607.0], [36.8, 613.0], [36.9, 621.0], [37.0, 621.0], [37.1, 624.0], [37.2, 625.0], [37.3, 628.0], [37.4, 628.0], [37.5, 628.0], [37.6, 629.0], [37.7, 633.0], [37.8, 633.0], [37.9, 633.0], [38.0, 634.0], [38.1, 634.0], [38.2, 634.0], [38.3, 639.0], [38.4, 640.0], [38.5, 640.0], [38.6, 640.0], [38.7, 641.0], [38.8, 644.0], [38.9, 644.0], [39.0, 651.0], [39.1, 654.0], [39.2, 656.0], [39.3, 656.0], [39.4, 656.0], [39.5, 657.0], [39.6, 664.0], [39.7, 664.0], [39.8, 665.0], [39.9, 665.0], [40.0, 667.0], [40.1, 667.0], [40.2, 667.0], [40.3, 668.0], [40.4, 668.0], [40.5, 669.0], [40.6, 671.0], [40.7, 673.0], [40.8, 673.0], [40.9, 679.0], [41.0, 679.0], [41.1, 680.0], [41.2, 680.0], [41.3, 683.0], [41.4, 684.0], [41.5, 686.0], [41.6, 686.0], [41.7, 687.0], [41.8, 688.0], [41.9, 688.0], [42.0, 689.0], [42.1, 690.0], [42.2, 690.0], [42.3, 690.0], [42.4, 693.0], [42.5, 697.0], [42.6, 698.0], [42.7, 698.0], [42.8, 705.0], [42.9, 707.0], [43.0, 708.0], [43.1, 708.0], [43.2, 715.0], [43.3, 716.0], [43.4, 716.0], [43.5, 716.0], [43.6, 716.0], [43.7, 722.0], [43.8, 722.0], [43.9, 723.0], [44.0, 725.0], [44.1, 727.0], [44.2, 727.0], [44.3, 732.0], [44.4, 734.0], [44.5, 735.0], [44.6, 735.0], [44.7, 738.0], [44.8, 742.0], [44.9, 743.0], [45.0, 743.0], [45.1, 750.0], [45.2, 761.0], [45.3, 761.0], [45.4, 767.0], [45.5, 771.0], [45.6, 776.0], [45.7, 776.0], [45.8, 777.0], [45.9, 777.0], [46.0, 779.0], [46.1, 779.0], [46.2, 785.0], [46.3, 786.0], [46.4, 790.0], [46.5, 790.0], [46.6, 792.0], [46.7, 804.0], [46.8, 804.0], [46.9, 807.0], [47.0, 809.0], [47.1, 810.0], [47.2, 810.0], [47.3, 813.0], [47.4, 820.0], [47.5, 823.0], [47.6, 823.0], [47.7, 826.0], [47.8, 827.0], [47.9, 829.0], [48.0, 829.0], [48.1, 829.0], [48.2, 830.0], [48.3, 833.0], [48.4, 833.0], [48.5, 840.0], [48.6, 841.0], [48.7, 841.0], [48.8, 845.0], [48.9, 855.0], [49.0, 856.0], [49.1, 856.0], [49.2, 861.0], [49.3, 862.0], [49.4, 863.0], [49.5, 863.0], [49.6, 872.0], [49.7, 874.0], [49.8, 875.0], [49.9, 875.0], [50.0, 876.0], [50.1, 876.0], [50.2, 876.0], [50.3, 876.0], [50.4, 878.0], [50.5, 881.0], [50.6, 881.0], [50.7, 881.0], [50.8, 882.0], [50.9, 882.0], [51.0, 882.0], [51.1, 884.0], [51.2, 885.0], [51.3, 888.0], [51.4, 888.0], [51.5, 890.0], [51.6, 890.0], [51.7, 890.0], [51.8, 892.0], [51.9, 893.0], [52.0, 894.0], [52.1, 894.0], [52.2, 894.0], [52.3, 894.0], [52.4, 896.0], [52.5, 896.0], [52.6, 897.0], [52.7, 898.0], [52.8, 900.0], [52.9, 900.0], [53.0, 900.0], [53.1, 901.0], [53.2, 907.0], [53.3, 907.0], [53.4, 909.0], [53.5, 911.0], [53.6, 911.0], [53.7, 912.0], [53.8, 913.0], [53.9, 919.0], [54.0, 919.0], [54.1, 923.0], [54.2, 938.0], [54.3, 938.0], [54.4, 938.0], [54.5, 946.0], [54.6, 947.0], [54.7, 948.0], [54.8, 948.0], [54.9, 949.0], [55.0, 955.0], [55.1, 955.0], [55.2, 960.0], [55.3, 962.0], [55.4, 972.0], [55.5, 972.0], [55.6, 975.0], [55.7, 976.0], [55.8, 977.0], [55.9, 977.0], [56.0, 977.0], [56.1, 977.0], [56.2, 979.0], [56.3, 979.0], [56.4, 980.0], [56.5, 981.0], [56.6, 988.0], [56.7, 988.0], [56.8, 989.0], [56.9, 989.0], [57.0, 989.0], [57.1, 989.0], [57.2, 990.0], [57.3, 991.0], [57.4, 991.0], [57.5, 996.0], [57.6, 996.0], [57.7, 997.0], [57.8, 997.0], [57.9, 1000.0], [58.0, 1002.0], [58.1, 1004.0], [58.2, 1004.0], [58.3, 1006.0], [58.4, 1007.0], [58.5, 1007.0], [58.6, 1009.0], [58.7, 1010.0], [58.8, 1012.0], [58.9, 1012.0], [59.0, 1012.0], [59.1, 1014.0], [59.2, 1015.0], [59.3, 1015.0], [59.4, 1015.0], [59.5, 1016.0], [59.6, 1019.0], [59.7, 1019.0], [59.8, 1022.0], [59.9, 1023.0], [60.0, 1024.0], [60.1, 1024.0], [60.2, 1025.0], [60.3, 1025.0], [60.4, 1025.0], [60.5, 1027.0], [60.6, 1027.0], [60.7, 1027.0], [60.8, 1027.0], [60.9, 1028.0], [61.0, 1028.0], [61.1, 1029.0], [61.2, 1029.0], [61.3, 1030.0], [61.4, 1031.0], [61.5, 1032.0], [61.6, 1032.0], [61.7, 1032.0], [61.8, 1032.0], [61.9, 1032.0], [62.0, 1032.0], [62.1, 1033.0], [62.2, 1033.0], [62.3, 1033.0], [62.4, 1033.0], [62.5, 1034.0], [62.6, 1036.0], [62.7, 1036.0], [62.8, 1036.0], [62.9, 1037.0], [63.0, 1038.0], [63.1, 1038.0], [63.2, 1038.0], [63.3, 1044.0], [63.4, 1044.0], [63.5, 1044.0], [63.6, 1045.0], [63.7, 1046.0], [63.8, 1046.0], [63.9, 1047.0], [64.0, 1049.0], [64.1, 1049.0], [64.2, 1049.0], [64.3, 1049.0], [64.4, 1049.0], [64.5, 1050.0], [64.6, 1050.0], [64.7, 1050.0], [64.8, 1053.0], [64.9, 1053.0], [65.0, 1053.0], [65.1, 1053.0], [65.2, 1053.0], [65.3, 1053.0], [65.4, 1055.0], [65.5, 1055.0], [65.6, 1055.0], [65.7, 1055.0], [65.8, 1056.0], [65.9, 1056.0], [66.0, 1057.0], [66.1, 1057.0], [66.2, 1058.0], [66.3, 1059.0], [66.4, 1060.0], [66.5, 1060.0], [66.6, 1061.0], [66.7, 1061.0], [66.8, 1061.0], [66.9, 1062.0], [67.0, 1063.0], [67.1, 1063.0], [67.2, 1063.0], [67.3, 1063.0], [67.4, 1063.0], [67.5, 1064.0], [67.6, 1064.0], [67.7, 1065.0], [67.8, 1069.0], [67.9, 1069.0], [68.0, 1069.0], [68.1, 1069.0], [68.2, 1070.0], [68.3, 1070.0], [68.4, 1070.0], [68.5, 1072.0], [68.6, 1072.0], [68.7, 1072.0], [68.8, 1073.0], [68.9, 1074.0], [69.0, 1075.0], [69.1, 1075.0], [69.2, 1075.0], [69.3, 1077.0], [69.4, 1078.0], [69.5, 1078.0], [69.6, 1079.0], [69.7, 1079.0], [69.8, 1079.0], [69.9, 1079.0], [70.0, 1079.0], [70.1, 1080.0], [70.2, 1080.0], [70.3, 1080.0], [70.4, 1081.0], [70.5, 1081.0], [70.6, 1081.0], [70.7, 1081.0], [70.8, 1082.0], [70.9, 1082.0], [71.0, 1082.0], [71.1, 1084.0], [71.2, 1085.0], [71.3, 1086.0], [71.4, 1086.0], [71.5, 1087.0], [71.6, 1089.0], [71.7, 1089.0], [71.8, 1089.0], [71.9, 1091.0], [72.0, 1092.0], [72.1, 1092.0], [72.2, 1092.0], [72.3, 1092.0], [72.4, 1092.0], [72.5, 1092.0], [72.6, 1093.0], [72.7, 1093.0], [72.8, 1094.0], [72.9, 1094.0], [73.0, 1094.0], [73.1, 1095.0], [73.2, 1095.0], [73.3, 1095.0], [73.4, 1096.0], [73.5, 1096.0], [73.6, 1096.0], [73.7, 1096.0], [73.8, 1098.0], [73.9, 1098.0], [74.0, 1098.0], [74.1, 1098.0], [74.2, 1099.0], [74.3, 1100.0], [74.4, 1100.0], [74.5, 1100.0], [74.6, 1100.0], [74.7, 1101.0], [74.8, 1101.0], [74.9, 1101.0], [75.0, 1103.0], [75.1, 1103.0], [75.2, 1107.0], [75.3, 1108.0], [75.4, 1110.0], [75.5, 1110.0], [75.6, 1110.0], [75.7, 1110.0], [75.8, 1112.0], [75.9, 1112.0], [76.0, 1114.0], [76.1, 1114.0], [76.2, 1115.0], [76.3, 1115.0], [76.4, 1115.0], [76.5, 1116.0], [76.6, 1116.0], [76.7, 1116.0], [76.8, 1119.0], [76.9, 1119.0], [77.0, 1119.0], [77.1, 1120.0], [77.2, 1120.0], [77.3, 1122.0], [77.4, 1122.0], [77.5, 1123.0], [77.6, 1124.0], [77.7, 1124.0], [77.8, 1124.0], [77.9, 1125.0], [78.0, 1126.0], [78.1, 1127.0], [78.2, 1127.0], [78.3, 1128.0], [78.4, 1129.0], [78.5, 1129.0], [78.6, 1131.0], [78.7, 1131.0], [78.8, 1133.0], [78.9, 1133.0], [79.0, 1134.0], [79.1, 1134.0], [79.2, 1135.0], [79.3, 1135.0], [79.4, 1135.0], [79.5, 1136.0], [79.6, 1137.0], [79.7, 1137.0], [79.8, 1138.0], [79.9, 1140.0], [80.0, 1140.0], [80.1, 1140.0], [80.2, 1141.0], [80.3, 1141.0], [80.4, 1141.0], [80.5, 1141.0], [80.6, 1141.0], [80.7, 1144.0], [80.8, 1144.0], [80.9, 1144.0], [81.0, 1144.0], [81.1, 1147.0], [81.2, 1147.0], [81.3, 1147.0], [81.4, 1148.0], [81.5, 1151.0], [81.6, 1151.0], [81.7, 1151.0], [81.8, 1151.0], [81.9, 1151.0], [82.0, 1151.0], [82.1, 1152.0], [82.2, 1153.0], [82.3, 1153.0], [82.4, 1154.0], [82.5, 1154.0], [82.6, 1154.0], [82.7, 1154.0], [82.8, 1154.0], [82.9, 1155.0], [83.0, 1156.0], [83.1, 1156.0], [83.2, 1156.0], [83.3, 1158.0], [83.4, 1158.0], [83.5, 1160.0], [83.6, 1160.0], [83.7, 1161.0], [83.8, 1161.0], [83.9, 1162.0], [84.0, 1164.0], [84.1, 1164.0], [84.2, 1164.0], [84.3, 1164.0], [84.4, 1168.0], [84.5, 1172.0], [84.6, 1172.0], [84.7, 1173.0], [84.8, 1175.0], [84.9, 1176.0], [85.0, 1176.0], [85.1, 1177.0], [85.2, 1178.0], [85.3, 1178.0], [85.4, 1180.0], [85.5, 1182.0], [85.6, 1183.0], [85.7, 1183.0], [85.8, 1183.0], [85.9, 1185.0], [86.0, 1186.0], [86.1, 1186.0], [86.2, 1188.0], [86.3, 1189.0], [86.4, 1190.0], [86.5, 1190.0], [86.6, 1190.0], [86.7, 1190.0], [86.8, 1190.0], [86.9, 1192.0], [87.0, 1192.0], [87.1, 1193.0], [87.2, 1193.0], [87.3, 1196.0], [87.4, 1197.0], [87.5, 1200.0], [87.6, 1200.0], [87.7, 1200.0], [87.8, 1203.0], [87.9, 1204.0], [88.0, 1204.0], [88.1, 1204.0], [88.2, 1205.0], [88.3, 1206.0], [88.4, 1206.0], [88.5, 1206.0], [88.6, 1210.0], [88.7, 1210.0], [88.8, 1213.0], [88.9, 1213.0], [89.0, 1214.0], [89.1, 1214.0], [89.2, 1216.0], [89.3, 1219.0], [89.4, 1219.0], [89.5, 1219.0], [89.6, 1222.0], [89.7, 1230.0], [89.8, 1231.0], [89.9, 1231.0], [90.0, 1231.0], [90.1, 1232.0], [90.2, 1232.0], [90.3, 1232.0], [90.4, 1239.0], [90.5, 1242.0], [90.6, 1242.0], [90.7, 1242.0], [90.8, 1244.0], [90.9, 1248.0], [91.0, 1248.0], [91.1, 1250.0], [91.2, 1256.0], [91.3, 1257.0], [91.4, 1257.0], [91.5, 1260.0], [91.6, 1263.0], [91.7, 1263.0], [91.8, 1275.0], [91.9, 1278.0], [92.0, 1281.0], [92.1, 1281.0], [92.2, 1285.0], [92.3, 1285.0], [92.4, 1285.0], [92.5, 1285.0], [92.6, 1287.0], [92.7, 1311.0], [92.8, 1312.0], [92.9, 1312.0], [93.0, 1319.0], [93.1, 1320.0], [93.2, 1331.0], [93.3, 1331.0], [93.4, 1332.0], [93.5, 1337.0], [93.6, 1337.0], [93.7, 1344.0], [93.8, 1355.0], [93.9, 1356.0], [94.0, 1356.0], [94.1, 1364.0], [94.2, 1365.0], [94.3, 1367.0], [94.4, 1367.0], [94.5, 1388.0], [94.6, 1401.0], [94.7, 1406.0], [94.8, 1406.0], [94.9, 1409.0], [95.0, 1426.0], [95.1, 1426.0], [95.2, 1430.0], [95.3, 1431.0], [95.4, 1431.0], [95.5, 1431.0], [95.6, 1442.0], [95.7, 1450.0], [95.8, 1459.0], [95.9, 1459.0], [96.0, 1482.0], [96.1, 1502.0], [96.2, 1507.0], [96.3, 1507.0], [96.4, 1510.0], [96.5, 1514.0], [96.6, 1516.0], [96.7, 1516.0], [96.8, 1518.0], [96.9, 1525.0], [97.0, 1525.0], [97.1, 1535.0], [97.2, 1558.0], [97.3, 1574.0], [97.4, 1574.0], [97.5, 1576.0], [97.6, 1585.0], [97.7, 1588.0], [97.8, 1588.0], [97.9, 1631.0], [98.0, 1822.0], [98.1, 1862.0], [98.2, 1862.0], [98.3, 1906.0], [98.4, 2033.0], [98.5, 2033.0], [98.6, 2047.0], [98.7, 2117.0], [98.8, 2148.0], [98.9, 2148.0], [99.0, 2212.0], [99.1, 2381.0], [99.2, 2395.0], [99.3, 2395.0], [99.4, 2568.0], [99.5, 2732.0], [99.6, 2837.0], [99.7, 2837.0], [99.8, 3182.0], [99.9, 3236.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 121.0, "series": [{"data": [[600.0, 47.0], [700.0, 29.0], [800.0, 45.0], [900.0, 37.0], [1000.0, 121.0], [1100.0, 97.0], [1200.0, 38.0], [1300.0, 14.0], [1400.0, 11.0], [1500.0, 13.0], [100.0, 19.0], [1600.0, 1.0], [1800.0, 2.0], [1900.0, 1.0], [2000.0, 2.0], [2100.0, 2.0], [2200.0, 1.0], [2300.0, 2.0], [2500.0, 1.0], [2800.0, 1.0], [2700.0, 1.0], [3100.0, 1.0], [3200.0, 1.0], [200.0, 43.0], [300.0, 44.0], [400.0, 46.0], [500.0, 115.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 29.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 551.0, "series": [{"data": [[0.0, 155.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 551.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 29.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.91, "minX": 1.6023147E12, "maxY": 10.0, "series": [{"data": [[1.60231476E12, 9.91], [1.6023147E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231476E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 228.0, "minX": 1.0, "maxY": 2047.0, "series": [{"data": [[8.0, 492.0], [4.0, 1450.0], [2.0, 977.0], [1.0, 2047.0], [9.0, 276.0], [10.0, 838.5289256198347], [5.0, 486.0], [6.0, 1862.0], [3.0, 441.0], [7.0, 228.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 839.4979591836736]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1825.1, "minX": 1.6023147E12, "maxY": 1076396.85, "series": [{"data": [[1.60231476E12, 1076396.85], [1.6023147E12, 660522.0166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231476E12, 3844.9333333333334], [1.6023147E12, 1825.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231476E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 790.3460000000003, "minX": 1.6023147E12, "maxY": 944.076595744681, "series": [{"data": [[1.60231476E12, 790.3460000000003], [1.6023147E12, 944.076595744681]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231476E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 789.4700000000004, "minX": 1.6023147E12, "maxY": 942.842553191489, "series": [{"data": [[1.60231476E12, 789.4700000000004], [1.6023147E12, 942.842553191489]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231476E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.022000000000000002, "minX": 1.6023147E12, "maxY": 0.723404255319149, "series": [{"data": [[1.60231476E12, 0.022000000000000002], [1.6023147E12, 0.723404255319149]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231476E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 133.0, "minX": 1.6023147E12, "maxY": 3236.0, "series": [{"data": [[1.60231476E12, 2148.0], [1.6023147E12, 3236.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231476E12, 143.5089998805523], [1.6023147E12, 141.36399938106538]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231476E12, 143.9599000477791], [1.6023147E12, 143.70040024757387]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231476E12, 143.75949994027616], [1.6023147E12, 142.6619996905327]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231476E12, 133.0], [1.6023147E12, 135.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231476E12, 816.5], [1.6023147E12, 1012.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231476E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 362.5, "minX": 1.0, "maxY": 1110.0, "series": [{"data": [[8.0, 734.5], [9.0, 1053.0], [10.0, 1059.5], [11.0, 1048.5], [12.0, 1045.0], [13.0, 689.0], [14.0, 800.0], [15.0, 553.0], [1.0, 807.0], [4.0, 702.0], [16.0, 362.5], [17.0, 656.0], [18.0, 435.5], [19.0, 545.0], [20.0, 459.5], [21.0, 405.0], [7.0, 1110.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 361.5, "minX": 1.0, "maxY": 1109.0, "series": [{"data": [[8.0, 733.0], [9.0, 1052.0], [10.0, 1059.0], [11.0, 1047.5], [12.0, 1045.0], [13.0, 689.0], [14.0, 798.5], [15.0, 552.0], [1.0, 802.0], [4.0, 700.5], [16.0, 361.5], [17.0, 655.0], [18.0, 435.0], [19.0, 544.5], [20.0, 459.0], [21.0, 405.0], [7.0, 1109.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.083333333333333, "minX": 1.6023147E12, "maxY": 8.166666666666666, "series": [{"data": [[1.60231476E12, 8.166666666666666], [1.6023147E12, 4.083333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231476E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.9166666666666665, "minX": 1.6023147E12, "maxY": 8.333333333333334, "series": [{"data": [[1.60231476E12, 8.333333333333334], [1.6023147E12, 3.9166666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231476E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.9166666666666665, "minX": 1.6023147E12, "maxY": 8.333333333333334, "series": [{"data": [[1.60231476E12, 8.333333333333334], [1.6023147E12, 3.9166666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231476E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.9166666666666665, "minX": 1.6023147E12, "maxY": 8.333333333333334, "series": [{"data": [[1.60231476E12, 8.333333333333334], [1.6023147E12, 3.9166666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231476E12, "title": "Total Transactions Per Second"}},
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

