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
        data: {"result": {"minY": 178.0, "minX": 0.0, "maxY": 3243.0, "series": [{"data": [[0.0, 178.0], [0.1, 178.0], [0.2, 184.0], [0.3, 192.0], [0.4, 192.0], [0.5, 193.0], [0.6, 193.0], [0.7, 199.0], [0.8, 199.0], [0.9, 202.0], [1.0, 204.0], [1.1, 206.0], [1.2, 206.0], [1.3, 208.0], [1.4, 209.0], [1.5, 214.0], [1.6, 214.0], [1.7, 214.0], [1.8, 219.0], [1.9, 219.0], [2.0, 221.0], [2.1, 224.0], [2.2, 230.0], [2.3, 230.0], [2.4, 244.0], [2.5, 244.0], [2.6, 247.0], [2.7, 247.0], [2.8, 248.0], [2.9, 248.0], [3.0, 258.0], [3.1, 258.0], [3.2, 266.0], [3.3, 266.0], [3.4, 266.0], [3.5, 266.0], [3.6, 268.0], [3.7, 269.0], [3.8, 269.0], [3.9, 269.0], [4.0, 270.0], [4.1, 275.0], [4.2, 275.0], [4.3, 279.0], [4.4, 279.0], [4.5, 280.0], [4.6, 280.0], [4.7, 283.0], [4.8, 285.0], [4.9, 286.0], [5.0, 286.0], [5.1, 287.0], [5.2, 288.0], [5.3, 288.0], [5.4, 293.0], [5.5, 300.0], [5.6, 300.0], [5.7, 300.0], [5.8, 302.0], [5.9, 303.0], [6.0, 310.0], [6.1, 310.0], [6.2, 311.0], [6.3, 312.0], [6.4, 314.0], [6.5, 314.0], [6.6, 314.0], [6.7, 316.0], [6.8, 316.0], [6.9, 317.0], [7.0, 321.0], [7.1, 322.0], [7.2, 322.0], [7.3, 326.0], [7.4, 331.0], [7.5, 336.0], [7.6, 336.0], [7.7, 337.0], [7.8, 341.0], [7.9, 344.0], [8.0, 344.0], [8.1, 344.0], [8.2, 346.0], [8.3, 351.0], [8.4, 351.0], [8.5, 354.0], [8.6, 354.0], [8.7, 354.0], [8.8, 355.0], [8.9, 356.0], [9.0, 357.0], [9.1, 357.0], [9.2, 360.0], [9.3, 360.0], [9.4, 361.0], [9.5, 361.0], [9.6, 363.0], [9.7, 366.0], [9.8, 367.0], [9.9, 367.0], [10.0, 372.0], [10.1, 373.0], [10.2, 373.0], [10.3, 376.0], [10.4, 378.0], [10.5, 381.0], [10.6, 381.0], [10.7, 382.0], [10.8, 387.0], [10.9, 388.0], [11.0, 388.0], [11.1, 388.0], [11.2, 389.0], [11.3, 389.0], [11.4, 389.0], [11.5, 389.0], [11.6, 390.0], [11.7, 390.0], [11.8, 391.0], [11.9, 391.0], [12.0, 395.0], [12.1, 395.0], [12.2, 397.0], [12.3, 398.0], [12.4, 402.0], [12.5, 402.0], [12.6, 403.0], [12.7, 404.0], [12.8, 408.0], [12.9, 408.0], [13.0, 409.0], [13.1, 410.0], [13.2, 412.0], [13.3, 412.0], [13.4, 413.0], [13.5, 413.0], [13.6, 413.0], [13.7, 413.0], [13.8, 417.0], [13.9, 418.0], [14.0, 418.0], [14.1, 420.0], [14.2, 421.0], [14.3, 423.0], [14.4, 423.0], [14.5, 425.0], [14.6, 425.0], [14.7, 427.0], [14.8, 427.0], [14.9, 430.0], [15.0, 431.0], [15.1, 431.0], [15.2, 432.0], [15.3, 433.0], [15.4, 434.0], [15.5, 434.0], [15.6, 436.0], [15.7, 436.0], [15.8, 438.0], [15.9, 438.0], [16.0, 438.0], [16.1, 444.0], [16.2, 445.0], [16.3, 445.0], [16.4, 445.0], [16.5, 446.0], [16.6, 448.0], [16.7, 448.0], [16.8, 449.0], [16.9, 452.0], [17.0, 452.0], [17.1, 452.0], [17.2, 455.0], [17.3, 467.0], [17.4, 467.0], [17.5, 469.0], [17.6, 473.0], [17.7, 476.0], [17.8, 476.0], [17.9, 476.0], [18.0, 482.0], [18.1, 483.0], [18.2, 483.0], [18.3, 493.0], [18.4, 499.0], [18.5, 499.0], [18.6, 503.0], [18.7, 508.0], [18.8, 509.0], [18.9, 509.0], [19.0, 511.0], [19.1, 513.0], [19.2, 516.0], [19.3, 516.0], [19.4, 517.0], [19.5, 517.0], [19.6, 519.0], [19.7, 519.0], [19.8, 521.0], [19.9, 523.0], [20.0, 523.0], [20.1, 523.0], [20.2, 523.0], [20.3, 524.0], [20.4, 524.0], [20.5, 524.0], [20.6, 529.0], [20.7, 533.0], [20.8, 533.0], [20.9, 538.0], [21.0, 540.0], [21.1, 541.0], [21.2, 541.0], [21.3, 543.0], [21.4, 545.0], [21.5, 545.0], [21.6, 545.0], [21.7, 545.0], [21.8, 548.0], [21.9, 548.0], [22.0, 551.0], [22.1, 551.0], [22.2, 552.0], [22.3, 552.0], [22.4, 552.0], [22.5, 554.0], [22.6, 556.0], [22.7, 556.0], [22.8, 556.0], [22.9, 557.0], [23.0, 557.0], [23.1, 557.0], [23.2, 558.0], [23.3, 560.0], [23.4, 560.0], [23.5, 560.0], [23.6, 560.0], [23.7, 561.0], [23.8, 561.0], [23.9, 561.0], [24.0, 563.0], [24.1, 564.0], [24.2, 564.0], [24.3, 564.0], [24.4, 564.0], [24.5, 565.0], [24.6, 565.0], [24.7, 565.0], [24.8, 566.0], [24.9, 567.0], [25.0, 567.0], [25.1, 569.0], [25.2, 571.0], [25.3, 571.0], [25.4, 571.0], [25.5, 574.0], [25.6, 576.0], [25.7, 576.0], [25.8, 578.0], [25.9, 579.0], [26.0, 580.0], [26.1, 580.0], [26.2, 581.0], [26.3, 582.0], [26.4, 583.0], [26.5, 583.0], [26.6, 583.0], [26.7, 584.0], [26.8, 584.0], [26.9, 586.0], [27.0, 586.0], [27.1, 586.0], [27.2, 586.0], [27.3, 588.0], [27.4, 589.0], [27.5, 590.0], [27.6, 590.0], [27.7, 592.0], [27.8, 595.0], [27.9, 596.0], [28.0, 596.0], [28.1, 598.0], [28.2, 599.0], [28.3, 600.0], [28.4, 600.0], [28.5, 603.0], [28.6, 603.0], [28.7, 603.0], [28.8, 608.0], [28.9, 610.0], [29.0, 610.0], [29.1, 610.0], [29.2, 611.0], [29.3, 613.0], [29.4, 614.0], [29.5, 614.0], [29.6, 615.0], [29.7, 615.0], [29.8, 620.0], [29.9, 620.0], [30.0, 621.0], [30.1, 622.0], [30.2, 622.0], [30.3, 623.0], [30.4, 623.0], [30.5, 625.0], [30.6, 625.0], [30.7, 626.0], [30.8, 626.0], [30.9, 627.0], [31.0, 627.0], [31.1, 629.0], [31.2, 631.0], [31.3, 631.0], [31.4, 631.0], [31.5, 631.0], [31.6, 631.0], [31.7, 631.0], [31.8, 632.0], [31.9, 633.0], [32.0, 633.0], [32.1, 633.0], [32.2, 635.0], [32.3, 637.0], [32.4, 637.0], [32.5, 637.0], [32.6, 640.0], [32.7, 640.0], [32.8, 642.0], [32.9, 642.0], [33.0, 642.0], [33.1, 644.0], [33.2, 647.0], [33.3, 647.0], [33.4, 647.0], [33.5, 649.0], [33.6, 649.0], [33.7, 650.0], [33.8, 651.0], [33.9, 652.0], [34.0, 652.0], [34.1, 653.0], [34.2, 654.0], [34.3, 654.0], [34.4, 654.0], [34.5, 654.0], [34.6, 658.0], [34.7, 659.0], [34.8, 659.0], [34.9, 659.0], [35.0, 659.0], [35.1, 659.0], [35.2, 660.0], [35.3, 663.0], [35.4, 664.0], [35.5, 664.0], [35.6, 665.0], [35.7, 665.0], [35.8, 666.0], [35.9, 666.0], [36.0, 671.0], [36.1, 675.0], [36.2, 678.0], [36.3, 678.0], [36.4, 680.0], [36.5, 683.0], [36.6, 685.0], [36.7, 685.0], [36.8, 686.0], [36.9, 686.0], [37.0, 686.0], [37.1, 691.0], [37.2, 692.0], [37.3, 693.0], [37.4, 693.0], [37.5, 695.0], [37.6, 695.0], [37.7, 696.0], [37.8, 696.0], [37.9, 697.0], [38.0, 700.0], [38.1, 701.0], [38.2, 701.0], [38.3, 701.0], [38.4, 702.0], [38.5, 702.0], [38.6, 703.0], [38.7, 704.0], [38.8, 705.0], [38.9, 705.0], [39.0, 705.0], [39.1, 710.0], [39.2, 712.0], [39.3, 712.0], [39.4, 714.0], [39.5, 715.0], [39.6, 716.0], [39.7, 716.0], [39.8, 721.0], [39.9, 721.0], [40.0, 723.0], [40.1, 723.0], [40.2, 725.0], [40.3, 726.0], [40.4, 726.0], [40.5, 726.0], [40.6, 729.0], [40.7, 729.0], [40.8, 729.0], [40.9, 730.0], [41.0, 730.0], [41.1, 731.0], [41.2, 731.0], [41.3, 731.0], [41.4, 734.0], [41.5, 740.0], [41.6, 740.0], [41.7, 741.0], [41.8, 743.0], [41.9, 743.0], [42.0, 744.0], [42.1, 744.0], [42.2, 745.0], [42.3, 745.0], [42.4, 747.0], [42.5, 747.0], [42.6, 750.0], [42.7, 750.0], [42.8, 753.0], [42.9, 754.0], [43.0, 755.0], [43.1, 755.0], [43.2, 757.0], [43.3, 761.0], [43.4, 761.0], [43.5, 763.0], [43.6, 763.0], [43.7, 765.0], [43.8, 765.0], [43.9, 769.0], [44.0, 771.0], [44.1, 772.0], [44.2, 772.0], [44.3, 775.0], [44.4, 777.0], [44.5, 778.0], [44.6, 778.0], [44.7, 778.0], [44.8, 779.0], [44.9, 780.0], [45.0, 780.0], [45.1, 780.0], [45.2, 782.0], [45.3, 782.0], [45.4, 784.0], [45.5, 785.0], [45.6, 786.0], [45.7, 786.0], [45.8, 787.0], [45.9, 788.0], [46.0, 789.0], [46.1, 789.0], [46.2, 790.0], [46.3, 791.0], [46.4, 791.0], [46.5, 791.0], [46.6, 794.0], [46.7, 795.0], [46.8, 795.0], [46.9, 795.0], [47.0, 803.0], [47.1, 807.0], [47.2, 807.0], [47.3, 807.0], [47.4, 811.0], [47.5, 815.0], [47.6, 815.0], [47.7, 815.0], [47.8, 817.0], [47.9, 818.0], [48.0, 818.0], [48.1, 819.0], [48.2, 819.0], [48.3, 820.0], [48.4, 820.0], [48.5, 821.0], [48.6, 822.0], [48.7, 822.0], [48.8, 822.0], [48.9, 824.0], [49.0, 825.0], [49.1, 825.0], [49.2, 827.0], [49.3, 832.0], [49.4, 832.0], [49.5, 832.0], [49.6, 837.0], [49.7, 837.0], [49.8, 840.0], [49.9, 840.0], [50.0, 840.0], [50.1, 840.0], [50.2, 840.0], [50.3, 840.0], [50.4, 844.0], [50.5, 852.0], [50.6, 852.0], [50.7, 857.0], [50.8, 858.0], [50.9, 860.0], [51.0, 860.0], [51.1, 861.0], [51.2, 863.0], [51.3, 864.0], [51.4, 864.0], [51.5, 864.0], [51.6, 865.0], [51.7, 865.0], [51.8, 867.0], [51.9, 869.0], [52.0, 869.0], [52.1, 869.0], [52.2, 872.0], [52.3, 878.0], [52.4, 880.0], [52.5, 880.0], [52.6, 881.0], [52.7, 884.0], [52.8, 884.0], [52.9, 884.0], [53.0, 885.0], [53.1, 886.0], [53.2, 887.0], [53.3, 887.0], [53.4, 888.0], [53.5, 888.0], [53.6, 888.0], [53.7, 891.0], [53.8, 901.0], [53.9, 903.0], [54.0, 903.0], [54.1, 903.0], [54.2, 904.0], [54.3, 905.0], [54.4, 905.0], [54.5, 908.0], [54.6, 909.0], [54.7, 910.0], [54.8, 910.0], [54.9, 911.0], [55.0, 915.0], [55.1, 915.0], [55.2, 916.0], [55.3, 917.0], [55.4, 918.0], [55.5, 918.0], [55.6, 919.0], [55.7, 920.0], [55.8, 923.0], [55.9, 923.0], [56.0, 925.0], [56.1, 927.0], [56.2, 938.0], [56.3, 938.0], [56.4, 940.0], [56.5, 943.0], [56.6, 946.0], [56.7, 946.0], [56.8, 946.0], [56.9, 946.0], [57.0, 946.0], [57.1, 951.0], [57.2, 951.0], [57.3, 956.0], [57.4, 956.0], [57.5, 958.0], [57.6, 958.0], [57.7, 960.0], [57.8, 960.0], [57.9, 960.0], [58.0, 961.0], [58.1, 961.0], [58.2, 961.0], [58.3, 963.0], [58.4, 964.0], [58.5, 964.0], [58.6, 966.0], [58.7, 968.0], [58.8, 970.0], [58.9, 970.0], [59.0, 971.0], [59.1, 972.0], [59.2, 973.0], [59.3, 973.0], [59.4, 974.0], [59.5, 974.0], [59.6, 974.0], [59.7, 974.0], [59.8, 977.0], [59.9, 978.0], [60.0, 978.0], [60.1, 978.0], [60.2, 981.0], [60.3, 982.0], [60.4, 982.0], [60.5, 985.0], [60.6, 988.0], [60.7, 989.0], [60.8, 989.0], [60.9, 993.0], [61.0, 994.0], [61.1, 1000.0], [61.2, 1000.0], [61.3, 1000.0], [61.4, 1001.0], [61.5, 1005.0], [61.6, 1005.0], [61.7, 1007.0], [61.8, 1008.0], [61.9, 1008.0], [62.0, 1009.0], [62.1, 1010.0], [62.2, 1010.0], [62.3, 1010.0], [62.4, 1010.0], [62.5, 1012.0], [62.6, 1012.0], [62.7, 1012.0], [62.8, 1012.0], [62.9, 1014.0], [63.0, 1017.0], [63.1, 1017.0], [63.2, 1018.0], [63.3, 1021.0], [63.4, 1021.0], [63.5, 1022.0], [63.6, 1023.0], [63.7, 1024.0], [63.8, 1024.0], [63.9, 1030.0], [64.0, 1031.0], [64.1, 1031.0], [64.2, 1031.0], [64.3, 1034.0], [64.4, 1034.0], [64.5, 1035.0], [64.6, 1035.0], [64.7, 1035.0], [64.8, 1035.0], [64.9, 1036.0], [65.0, 1036.0], [65.1, 1036.0], [65.2, 1037.0], [65.3, 1037.0], [65.4, 1040.0], [65.5, 1040.0], [65.6, 1041.0], [65.7, 1041.0], [65.8, 1041.0], [65.9, 1043.0], [66.0, 1048.0], [66.1, 1048.0], [66.2, 1048.0], [66.3, 1049.0], [66.4, 1049.0], [66.5, 1049.0], [66.6, 1051.0], [66.7, 1055.0], [66.8, 1055.0], [66.9, 1060.0], [67.0, 1061.0], [67.1, 1062.0], [67.2, 1062.0], [67.3, 1063.0], [67.4, 1066.0], [67.5, 1068.0], [67.6, 1068.0], [67.7, 1071.0], [67.8, 1071.0], [67.9, 1072.0], [68.0, 1072.0], [68.1, 1072.0], [68.2, 1072.0], [68.3, 1075.0], [68.4, 1075.0], [68.5, 1078.0], [68.6, 1081.0], [68.7, 1081.0], [68.8, 1082.0], [68.9, 1084.0], [69.0, 1085.0], [69.1, 1085.0], [69.2, 1085.0], [69.3, 1085.0], [69.4, 1087.0], [69.5, 1087.0], [69.6, 1087.0], [69.7, 1087.0], [69.8, 1088.0], [69.9, 1088.0], [70.0, 1088.0], [70.1, 1089.0], [70.2, 1089.0], [70.3, 1091.0], [70.4, 1091.0], [70.5, 1092.0], [70.6, 1092.0], [70.7, 1093.0], [70.8, 1094.0], [70.9, 1096.0], [71.0, 1096.0], [71.1, 1099.0], [71.2, 1102.0], [71.3, 1103.0], [71.4, 1103.0], [71.5, 1103.0], [71.6, 1104.0], [71.7, 1104.0], [71.8, 1105.0], [71.9, 1105.0], [72.0, 1107.0], [72.1, 1107.0], [72.2, 1107.0], [72.3, 1110.0], [72.4, 1110.0], [72.5, 1110.0], [72.6, 1112.0], [72.7, 1112.0], [72.8, 1112.0], [72.9, 1112.0], [73.0, 1113.0], [73.1, 1115.0], [73.2, 1115.0], [73.3, 1115.0], [73.4, 1116.0], [73.5, 1117.0], [73.6, 1117.0], [73.7, 1117.0], [73.8, 1117.0], [73.9, 1118.0], [74.0, 1118.0], [74.1, 1122.0], [74.2, 1123.0], [74.3, 1129.0], [74.4, 1129.0], [74.5, 1129.0], [74.6, 1129.0], [74.7, 1131.0], [74.8, 1131.0], [74.9, 1132.0], [75.0, 1133.0], [75.1, 1133.0], [75.2, 1139.0], [75.3, 1141.0], [75.4, 1143.0], [75.5, 1143.0], [75.6, 1148.0], [75.7, 1157.0], [75.8, 1160.0], [75.9, 1160.0], [76.0, 1161.0], [76.1, 1163.0], [76.2, 1164.0], [76.3, 1164.0], [76.4, 1166.0], [76.5, 1167.0], [76.6, 1169.0], [76.7, 1169.0], [76.8, 1170.0], [76.9, 1173.0], [77.0, 1173.0], [77.1, 1177.0], [77.2, 1179.0], [77.3, 1179.0], [77.4, 1179.0], [77.5, 1180.0], [77.6, 1183.0], [77.7, 1189.0], [77.8, 1189.0], [77.9, 1190.0], [78.0, 1190.0], [78.1, 1190.0], [78.2, 1190.0], [78.3, 1190.0], [78.4, 1192.0], [78.5, 1192.0], [78.6, 1195.0], [78.7, 1198.0], [78.8, 1198.0], [78.9, 1198.0], [79.0, 1199.0], [79.1, 1200.0], [79.2, 1207.0], [79.3, 1207.0], [79.4, 1208.0], [79.5, 1209.0], [79.6, 1209.0], [79.7, 1209.0], [79.8, 1209.0], [79.9, 1210.0], [80.0, 1210.0], [80.1, 1210.0], [80.2, 1211.0], [80.3, 1212.0], [80.4, 1212.0], [80.5, 1212.0], [80.6, 1218.0], [80.7, 1219.0], [80.8, 1219.0], [80.9, 1220.0], [81.0, 1221.0], [81.1, 1224.0], [81.2, 1224.0], [81.3, 1224.0], [81.4, 1225.0], [81.5, 1226.0], [81.6, 1226.0], [81.7, 1230.0], [81.8, 1232.0], [81.9, 1232.0], [82.0, 1234.0], [82.1, 1236.0], [82.2, 1237.0], [82.3, 1237.0], [82.4, 1237.0], [82.5, 1238.0], [82.6, 1242.0], [82.7, 1242.0], [82.8, 1242.0], [82.9, 1243.0], [83.0, 1249.0], [83.1, 1249.0], [83.2, 1250.0], [83.3, 1252.0], [83.4, 1252.0], [83.5, 1257.0], [83.6, 1260.0], [83.7, 1263.0], [83.8, 1263.0], [83.9, 1263.0], [84.0, 1263.0], [84.1, 1265.0], [84.2, 1265.0], [84.3, 1265.0], [84.4, 1268.0], [84.5, 1271.0], [84.6, 1271.0], [84.7, 1272.0], [84.8, 1273.0], [84.9, 1275.0], [85.0, 1275.0], [85.1, 1277.0], [85.2, 1277.0], [85.3, 1277.0], [85.4, 1278.0], [85.5, 1279.0], [85.6, 1283.0], [85.7, 1283.0], [85.8, 1283.0], [85.9, 1289.0], [86.0, 1291.0], [86.1, 1291.0], [86.2, 1293.0], [86.3, 1294.0], [86.4, 1298.0], [86.5, 1298.0], [86.6, 1300.0], [86.7, 1301.0], [86.8, 1301.0], [86.9, 1302.0], [87.0, 1308.0], [87.1, 1308.0], [87.2, 1308.0], [87.3, 1310.0], [87.4, 1311.0], [87.5, 1312.0], [87.6, 1312.0], [87.7, 1312.0], [87.8, 1313.0], [87.9, 1313.0], [88.0, 1313.0], [88.1, 1320.0], [88.2, 1327.0], [88.3, 1329.0], [88.4, 1329.0], [88.5, 1329.0], [88.6, 1332.0], [88.7, 1332.0], [88.8, 1332.0], [88.9, 1337.0], [89.0, 1337.0], [89.1, 1337.0], [89.2, 1354.0], [89.3, 1354.0], [89.4, 1354.0], [89.5, 1354.0], [89.6, 1356.0], [89.7, 1359.0], [89.8, 1370.0], [89.9, 1370.0], [90.0, 1381.0], [90.1, 1387.0], [90.2, 1387.0], [90.3, 1388.0], [90.4, 1395.0], [90.5, 1398.0], [90.6, 1398.0], [90.7, 1406.0], [90.8, 1407.0], [90.9, 1409.0], [91.0, 1409.0], [91.1, 1416.0], [91.2, 1419.0], [91.3, 1425.0], [91.4, 1425.0], [91.5, 1427.0], [91.6, 1430.0], [91.7, 1430.0], [91.8, 1437.0], [91.9, 1441.0], [92.0, 1443.0], [92.1, 1443.0], [92.2, 1446.0], [92.3, 1453.0], [92.4, 1464.0], [92.5, 1464.0], [92.6, 1470.0], [92.7, 1471.0], [92.8, 1482.0], [92.9, 1482.0], [93.0, 1484.0], [93.1, 1487.0], [93.2, 1491.0], [93.3, 1491.0], [93.4, 1504.0], [93.5, 1516.0], [93.6, 1516.0], [93.7, 1523.0], [93.8, 1529.0], [93.9, 1530.0], [94.0, 1530.0], [94.1, 1532.0], [94.2, 1534.0], [94.3, 1547.0], [94.4, 1547.0], [94.5, 1549.0], [94.6, 1551.0], [94.7, 1560.0], [94.8, 1560.0], [94.9, 1578.0], [95.0, 1601.0], [95.1, 1601.0], [95.2, 1640.0], [95.3, 1652.0], [95.4, 1657.0], [95.5, 1657.0], [95.6, 1658.0], [95.7, 1673.0], [95.8, 1673.0], [95.9, 1673.0], [96.0, 1685.0], [96.1, 1747.0], [96.2, 1777.0], [96.3, 1777.0], [96.4, 1791.0], [96.5, 1854.0], [96.6, 1857.0], [96.7, 1857.0], [96.8, 1879.0], [96.9, 1882.0], [97.0, 1882.0], [97.1, 1920.0], [97.2, 1951.0], [97.3, 2009.0], [97.4, 2009.0], [97.5, 2010.0], [97.6, 2059.0], [97.7, 2095.0], [97.8, 2095.0], [97.9, 2213.0], [98.0, 2365.0], [98.1, 2411.0], [98.2, 2411.0], [98.3, 2453.0], [98.4, 2494.0], [98.5, 2494.0], [98.6, 2565.0], [98.7, 2618.0], [98.8, 2748.0], [98.9, 2748.0], [99.0, 2943.0], [99.1, 3032.0], [99.2, 3045.0], [99.3, 3045.0], [99.4, 3072.0], [99.5, 3186.0], [99.6, 3198.0], [99.7, 3198.0], [99.8, 3216.0], [99.9, 3243.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 74.0, "series": [{"data": [[600.0, 71.0], [700.0, 66.0], [800.0, 50.0], [900.0, 54.0], [1000.0, 74.0], [1100.0, 58.0], [1200.0, 55.0], [1300.0, 30.0], [1400.0, 20.0], [1500.0, 12.0], [1600.0, 8.0], [100.0, 6.0], [1700.0, 3.0], [1800.0, 4.0], [1900.0, 2.0], [2000.0, 4.0], [2200.0, 1.0], [2300.0, 1.0], [2400.0, 3.0], [2500.0, 1.0], [2600.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 3.0], [3100.0, 2.0], [3200.0, 2.0], [200.0, 34.0], [300.0, 51.0], [400.0, 45.0], [500.0, 72.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 49.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 550.0, "series": [{"data": [[0.0, 136.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 550.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 49.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.680851063829785, "minX": 1.6024617E12, "maxY": 10.0, "series": [{"data": [[1.60246176E12, 9.680851063829785], [1.6024617E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246176E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 388.0, "minX": 1.0, "maxY": 2411.0, "series": [{"data": [[8.0, 599.0], [4.0, 1224.0], [2.0, 917.0], [1.0, 1071.0], [9.0, 388.0], [10.0, 895.8732782369141], [5.0, 2411.0], [6.0, 529.0], [3.0, 1300.0], [7.0, 552.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 897.1360544217683]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1050.5833333333333, "minX": 1.6024617E12, "maxY": 1541213.9833333334, "series": [{"data": [[1.60246176E12, 294542.4666666667], [1.6024617E12, 1541213.9833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246176E12, 1050.5833333333333], [1.6024617E12, 4472.45]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246176E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 833.5177304964543, "minX": 1.6024617E12, "maxY": 912.2373737373732, "series": [{"data": [[1.60246176E12, 833.5177304964543], [1.6024617E12, 912.2373737373732]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246176E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 832.4609929078017, "minX": 1.6024617E12, "maxY": 910.9915824915827, "series": [{"data": [[1.60246176E12, 832.4609929078017], [1.6024617E12, 910.9915824915827]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246176E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.06382978723404253, "minX": 1.6024617E12, "maxY": 0.2289562289562293, "series": [{"data": [[1.60246176E12, 0.06382978723404253], [1.6024617E12, 0.2289562289562293]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246176E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.6024617E12, "maxY": 3243.0, "series": [{"data": [[1.60246176E12, 3198.0], [1.6024617E12, 3243.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246176E12, 206.55599993228913], [1.6024617E12, 195.12999914884568]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246176E12, 206.81160002708435], [1.6024617E12, 198.34300034046174]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246176E12, 206.69799996614455], [1.6024617E12, 196.91499957442284]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246176E12, 206.0], [1.6024617E12, 178.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246176E12, 771.0], [1.6024617E12, 866.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246176E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 476.0, "minX": 6.0, "maxY": 1305.0, "series": [{"data": [[8.0, 1070.0], [9.0, 1027.0], [10.0, 973.5], [11.0, 878.0], [12.0, 968.0], [13.0, 766.0], [14.0, 698.0], [15.0, 540.5], [16.0, 683.0], [19.0, 476.0], [21.0, 543.0], [6.0, 1262.0], [7.0, 1305.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 476.0, "minX": 6.0, "maxY": 1304.0, "series": [{"data": [[8.0, 1069.0], [9.0, 1025.5], [10.0, 972.5], [11.0, 877.0], [12.0, 967.5], [13.0, 764.0], [14.0, 697.0], [15.0, 540.5], [16.0, 682.5], [19.0, 476.0], [21.0, 542.0], [6.0, 1260.0], [7.0, 1304.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.183333333333333, "minX": 1.6024617E12, "maxY": 10.066666666666666, "series": [{"data": [[1.60246176E12, 2.183333333333333], [1.6024617E12, 10.066666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246176E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.35, "minX": 1.6024617E12, "maxY": 9.9, "series": [{"data": [[1.60246176E12, 2.35], [1.6024617E12, 9.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246176E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.35, "minX": 1.6024617E12, "maxY": 9.9, "series": [{"data": [[1.60246176E12, 2.35], [1.6024617E12, 9.9]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246176E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.35, "minX": 1.6024617E12, "maxY": 9.9, "series": [{"data": [[1.60246176E12, 2.35], [1.6024617E12, 9.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246176E12, "title": "Total Transactions Per Second"}},
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

