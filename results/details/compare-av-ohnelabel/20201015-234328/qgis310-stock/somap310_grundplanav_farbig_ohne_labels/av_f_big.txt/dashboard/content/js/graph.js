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
        data: {"result": {"minY": 131.0, "minX": 0.0, "maxY": 2735.0, "series": [{"data": [[0.0, 131.0], [0.1, 131.0], [0.2, 132.0], [0.3, 141.0], [0.4, 141.0], [0.5, 142.0], [0.6, 142.0], [0.7, 145.0], [0.8, 145.0], [0.9, 145.0], [1.0, 146.0], [1.1, 149.0], [1.2, 149.0], [1.3, 153.0], [1.4, 153.0], [1.5, 155.0], [1.6, 155.0], [1.7, 157.0], [1.8, 157.0], [1.9, 157.0], [2.0, 159.0], [2.1, 164.0], [2.2, 164.0], [2.3, 164.0], [2.4, 177.0], [2.5, 182.0], [2.6, 183.0], [2.7, 183.0], [2.8, 191.0], [2.9, 199.0], [3.0, 206.0], [3.1, 206.0], [3.2, 207.0], [3.3, 209.0], [3.4, 209.0], [3.5, 211.0], [3.6, 211.0], [3.7, 213.0], [3.8, 213.0], [3.9, 219.0], [4.0, 221.0], [4.1, 223.0], [4.2, 223.0], [4.3, 226.0], [4.4, 227.0], [4.5, 227.0], [4.6, 227.0], [4.7, 228.0], [4.8, 229.0], [4.9, 229.0], [5.0, 229.0], [5.1, 231.0], [5.2, 231.0], [5.3, 231.0], [5.4, 233.0], [5.5, 234.0], [5.6, 234.0], [5.7, 234.0], [5.8, 235.0], [5.9, 236.0], [6.0, 237.0], [6.1, 237.0], [6.2, 237.0], [6.3, 238.0], [6.4, 239.0], [6.5, 239.0], [6.6, 241.0], [6.7, 242.0], [6.8, 242.0], [6.9, 242.0], [7.0, 244.0], [7.1, 245.0], [7.2, 245.0], [7.3, 245.0], [7.4, 246.0], [7.5, 249.0], [7.6, 249.0], [7.7, 251.0], [7.8, 254.0], [7.9, 256.0], [8.0, 256.0], [8.1, 257.0], [8.2, 257.0], [8.3, 257.0], [8.4, 257.0], [8.5, 265.0], [8.6, 266.0], [8.7, 266.0], [8.8, 266.0], [8.9, 267.0], [9.0, 283.0], [9.1, 283.0], [9.2, 283.0], [9.3, 287.0], [9.4, 288.0], [9.5, 288.0], [9.6, 295.0], [9.7, 296.0], [9.8, 296.0], [9.9, 296.0], [10.0, 300.0], [10.1, 307.0], [10.2, 307.0], [10.3, 307.0], [10.4, 309.0], [10.5, 310.0], [10.6, 310.0], [10.7, 310.0], [10.8, 312.0], [10.9, 315.0], [11.0, 315.0], [11.1, 320.0], [11.2, 326.0], [11.3, 328.0], [11.4, 328.0], [11.5, 329.0], [11.6, 329.0], [11.7, 329.0], [11.8, 329.0], [11.9, 329.0], [12.0, 330.0], [12.1, 330.0], [12.2, 336.0], [12.3, 345.0], [12.4, 346.0], [12.5, 346.0], [12.6, 353.0], [12.7, 355.0], [12.8, 363.0], [12.9, 363.0], [13.0, 370.0], [13.1, 374.0], [13.2, 375.0], [13.3, 375.0], [13.4, 377.0], [13.5, 378.0], [13.6, 378.0], [13.7, 378.0], [13.8, 381.0], [13.9, 383.0], [14.0, 383.0], [14.1, 388.0], [14.2, 390.0], [14.3, 390.0], [14.4, 390.0], [14.5, 391.0], [14.6, 396.0], [14.7, 397.0], [14.8, 397.0], [14.9, 404.0], [15.0, 407.0], [15.1, 407.0], [15.2, 409.0], [15.3, 411.0], [15.4, 411.0], [15.5, 411.0], [15.6, 413.0], [15.7, 414.0], [15.8, 415.0], [15.9, 415.0], [16.0, 415.0], [16.1, 422.0], [16.2, 424.0], [16.3, 424.0], [16.4, 426.0], [16.5, 427.0], [16.6, 430.0], [16.7, 430.0], [16.8, 432.0], [16.9, 434.0], [17.0, 434.0], [17.1, 435.0], [17.2, 443.0], [17.3, 444.0], [17.4, 444.0], [17.5, 447.0], [17.6, 447.0], [17.7, 448.0], [17.8, 448.0], [17.9, 453.0], [18.0, 454.0], [18.1, 455.0], [18.2, 455.0], [18.3, 457.0], [18.4, 457.0], [18.5, 457.0], [18.6, 460.0], [18.7, 460.0], [18.8, 463.0], [18.9, 463.0], [19.0, 464.0], [19.1, 466.0], [19.2, 467.0], [19.3, 467.0], [19.4, 469.0], [19.5, 470.0], [19.6, 473.0], [19.7, 473.0], [19.8, 476.0], [19.9, 481.0], [20.0, 481.0], [20.1, 481.0], [20.2, 481.0], [20.3, 482.0], [20.4, 482.0], [20.5, 484.0], [20.6, 487.0], [20.7, 489.0], [20.8, 489.0], [20.9, 490.0], [21.0, 490.0], [21.1, 491.0], [21.2, 491.0], [21.3, 491.0], [21.4, 492.0], [21.5, 492.0], [21.6, 492.0], [21.7, 492.0], [21.8, 493.0], [21.9, 493.0], [22.0, 494.0], [22.1, 495.0], [22.2, 495.0], [22.3, 495.0], [22.4, 495.0], [22.5, 496.0], [22.6, 496.0], [22.7, 496.0], [22.8, 499.0], [22.9, 501.0], [23.0, 501.0], [23.1, 501.0], [23.2, 502.0], [23.3, 503.0], [23.4, 503.0], [23.5, 503.0], [23.6, 506.0], [23.7, 506.0], [23.8, 506.0], [23.9, 506.0], [24.0, 507.0], [24.1, 507.0], [24.2, 507.0], [24.3, 509.0], [24.4, 510.0], [24.5, 510.0], [24.6, 510.0], [24.7, 511.0], [24.8, 511.0], [24.9, 511.0], [25.0, 511.0], [25.1, 513.0], [25.2, 513.0], [25.3, 513.0], [25.4, 514.0], [25.5, 514.0], [25.6, 515.0], [25.7, 515.0], [25.8, 515.0], [25.9, 515.0], [26.0, 517.0], [26.1, 517.0], [26.2, 517.0], [26.3, 517.0], [26.4, 518.0], [26.5, 518.0], [26.6, 518.0], [26.7, 519.0], [26.8, 519.0], [26.9, 520.0], [27.0, 520.0], [27.1, 520.0], [27.2, 520.0], [27.3, 521.0], [27.4, 522.0], [27.5, 523.0], [27.6, 523.0], [27.7, 524.0], [27.8, 524.0], [27.9, 525.0], [28.0, 525.0], [28.1, 526.0], [28.2, 526.0], [28.3, 526.0], [28.4, 526.0], [28.5, 527.0], [28.6, 528.0], [28.7, 528.0], [28.8, 530.0], [28.9, 530.0], [29.0, 531.0], [29.1, 531.0], [29.2, 531.0], [29.3, 532.0], [29.4, 533.0], [29.5, 533.0], [29.6, 534.0], [29.7, 534.0], [29.8, 534.0], [29.9, 534.0], [30.0, 535.0], [30.1, 537.0], [30.2, 537.0], [30.3, 537.0], [30.4, 539.0], [30.5, 540.0], [30.6, 540.0], [30.7, 540.0], [30.8, 540.0], [30.9, 542.0], [31.0, 542.0], [31.1, 542.0], [31.2, 543.0], [31.3, 543.0], [31.4, 543.0], [31.5, 543.0], [31.6, 544.0], [31.7, 544.0], [31.8, 545.0], [31.9, 548.0], [32.0, 549.0], [32.1, 549.0], [32.2, 549.0], [32.3, 550.0], [32.4, 550.0], [32.5, 550.0], [32.6, 551.0], [32.7, 551.0], [32.8, 551.0], [32.9, 551.0], [33.0, 552.0], [33.1, 552.0], [33.2, 553.0], [33.3, 553.0], [33.4, 553.0], [33.5, 553.0], [33.6, 553.0], [33.7, 555.0], [33.8, 557.0], [33.9, 558.0], [34.0, 558.0], [34.1, 560.0], [34.2, 562.0], [34.3, 562.0], [34.4, 562.0], [34.5, 567.0], [34.6, 567.0], [34.7, 569.0], [34.8, 569.0], [34.9, 569.0], [35.0, 570.0], [35.1, 570.0], [35.2, 574.0], [35.3, 575.0], [35.4, 575.0], [35.5, 575.0], [35.6, 577.0], [35.7, 580.0], [35.8, 581.0], [35.9, 581.0], [36.0, 583.0], [36.1, 584.0], [36.2, 586.0], [36.3, 586.0], [36.4, 586.0], [36.5, 588.0], [36.6, 589.0], [36.7, 589.0], [36.8, 589.0], [36.9, 590.0], [37.0, 590.0], [37.1, 591.0], [37.2, 592.0], [37.3, 594.0], [37.4, 594.0], [37.5, 595.0], [37.6, 595.0], [37.7, 600.0], [37.8, 600.0], [37.9, 602.0], [38.0, 602.0], [38.1, 603.0], [38.2, 603.0], [38.3, 604.0], [38.4, 606.0], [38.5, 606.0], [38.6, 607.0], [38.7, 608.0], [38.8, 612.0], [38.9, 612.0], [39.0, 618.0], [39.1, 618.0], [39.2, 620.0], [39.3, 620.0], [39.4, 621.0], [39.5, 624.0], [39.6, 624.0], [39.7, 624.0], [39.8, 625.0], [39.9, 625.0], [40.0, 626.0], [40.1, 626.0], [40.2, 629.0], [40.3, 632.0], [40.4, 632.0], [40.5, 634.0], [40.6, 635.0], [40.7, 640.0], [40.8, 640.0], [40.9, 642.0], [41.0, 642.0], [41.1, 646.0], [41.2, 646.0], [41.3, 649.0], [41.4, 650.0], [41.5, 651.0], [41.6, 651.0], [41.7, 659.0], [41.8, 659.0], [41.9, 659.0], [42.0, 659.0], [42.1, 662.0], [42.2, 663.0], [42.3, 663.0], [42.4, 666.0], [42.5, 668.0], [42.6, 669.0], [42.7, 669.0], [42.8, 671.0], [42.9, 671.0], [43.0, 674.0], [43.1, 674.0], [43.2, 675.0], [43.3, 682.0], [43.4, 682.0], [43.5, 684.0], [43.6, 685.0], [43.7, 688.0], [43.8, 688.0], [43.9, 693.0], [44.0, 696.0], [44.1, 697.0], [44.2, 697.0], [44.3, 698.0], [44.4, 701.0], [44.5, 703.0], [44.6, 703.0], [44.7, 703.0], [44.8, 705.0], [44.9, 706.0], [45.0, 706.0], [45.1, 712.0], [45.2, 716.0], [45.3, 716.0], [45.4, 719.0], [45.5, 720.0], [45.6, 720.0], [45.7, 720.0], [45.8, 730.0], [45.9, 742.0], [46.0, 747.0], [46.1, 747.0], [46.2, 748.0], [46.3, 751.0], [46.4, 752.0], [46.5, 752.0], [46.6, 754.0], [46.7, 755.0], [46.8, 755.0], [46.9, 755.0], [47.0, 766.0], [47.1, 771.0], [47.2, 771.0], [47.3, 773.0], [47.4, 774.0], [47.5, 778.0], [47.6, 778.0], [47.7, 785.0], [47.8, 786.0], [47.9, 787.0], [48.0, 787.0], [48.1, 788.0], [48.2, 789.0], [48.3, 791.0], [48.4, 791.0], [48.5, 794.0], [48.6, 804.0], [48.7, 804.0], [48.8, 805.0], [48.9, 809.0], [49.0, 809.0], [49.1, 809.0], [49.2, 810.0], [49.3, 812.0], [49.4, 813.0], [49.5, 813.0], [49.6, 813.0], [49.7, 818.0], [49.8, 821.0], [49.9, 821.0], [50.0, 822.0], [50.1, 827.0], [50.2, 827.0], [50.3, 828.0], [50.4, 830.0], [50.5, 831.0], [50.6, 831.0], [50.7, 838.0], [50.8, 840.0], [50.9, 840.0], [51.0, 840.0], [51.1, 842.0], [51.2, 844.0], [51.3, 845.0], [51.4, 845.0], [51.5, 850.0], [51.6, 851.0], [51.7, 851.0], [51.8, 852.0], [51.9, 856.0], [52.0, 858.0], [52.1, 858.0], [52.2, 869.0], [52.3, 871.0], [52.4, 872.0], [52.5, 872.0], [52.6, 874.0], [52.7, 877.0], [52.8, 885.0], [52.9, 885.0], [53.0, 887.0], [53.1, 907.0], [53.2, 907.0], [53.3, 907.0], [53.4, 908.0], [53.5, 915.0], [53.6, 915.0], [53.7, 917.0], [53.8, 920.0], [53.9, 927.0], [54.0, 927.0], [54.1, 928.0], [54.2, 930.0], [54.3, 933.0], [54.4, 933.0], [54.5, 935.0], [54.6, 938.0], [54.7, 939.0], [54.8, 939.0], [54.9, 940.0], [55.0, 940.0], [55.1, 940.0], [55.2, 941.0], [55.3, 947.0], [55.4, 948.0], [55.5, 948.0], [55.6, 951.0], [55.7, 951.0], [55.8, 951.0], [55.9, 951.0], [56.0, 957.0], [56.1, 959.0], [56.2, 960.0], [56.3, 960.0], [56.4, 960.0], [56.5, 965.0], [56.6, 966.0], [56.7, 966.0], [56.8, 972.0], [56.9, 973.0], [57.0, 973.0], [57.1, 978.0], [57.2, 979.0], [57.3, 979.0], [57.4, 979.0], [57.5, 982.0], [57.6, 982.0], [57.7, 983.0], [57.8, 983.0], [57.9, 984.0], [58.0, 986.0], [58.1, 988.0], [58.2, 988.0], [58.3, 989.0], [58.4, 991.0], [58.5, 991.0], [58.6, 993.0], [58.7, 994.0], [58.8, 994.0], [58.9, 994.0], [59.0, 994.0], [59.1, 995.0], [59.2, 996.0], [59.3, 996.0], [59.4, 998.0], [59.5, 1002.0], [59.6, 1002.0], [59.7, 1002.0], [59.8, 1005.0], [59.9, 1006.0], [60.0, 1007.0], [60.1, 1007.0], [60.2, 1008.0], [60.3, 1011.0], [60.4, 1011.0], [60.5, 1011.0], [60.6, 1012.0], [60.7, 1012.0], [60.8, 1012.0], [60.9, 1013.0], [61.0, 1014.0], [61.1, 1016.0], [61.2, 1016.0], [61.3, 1017.0], [61.4, 1017.0], [61.5, 1017.0], [61.6, 1017.0], [61.7, 1018.0], [61.8, 1019.0], [61.9, 1019.0], [62.0, 1021.0], [62.1, 1022.0], [62.2, 1023.0], [62.3, 1023.0], [62.4, 1023.0], [62.5, 1024.0], [62.6, 1024.0], [62.7, 1024.0], [62.8, 1025.0], [62.9, 1026.0], [63.0, 1027.0], [63.1, 1027.0], [63.2, 1029.0], [63.3, 1029.0], [63.4, 1029.0], [63.5, 1029.0], [63.6, 1030.0], [63.7, 1031.0], [63.8, 1031.0], [63.9, 1032.0], [64.0, 1032.0], [64.1, 1033.0], [64.2, 1033.0], [64.3, 1034.0], [64.4, 1035.0], [64.5, 1035.0], [64.6, 1035.0], [64.7, 1038.0], [64.8, 1038.0], [64.9, 1038.0], [65.0, 1038.0], [65.1, 1039.0], [65.2, 1039.0], [65.3, 1039.0], [65.4, 1039.0], [65.5, 1040.0], [65.6, 1040.0], [65.7, 1040.0], [65.8, 1040.0], [65.9, 1041.0], [66.0, 1041.0], [66.1, 1041.0], [66.2, 1042.0], [66.3, 1042.0], [66.4, 1042.0], [66.5, 1042.0], [66.6, 1043.0], [66.7, 1044.0], [66.8, 1044.0], [66.9, 1044.0], [67.0, 1045.0], [67.1, 1045.0], [67.2, 1045.0], [67.3, 1045.0], [67.4, 1045.0], [67.5, 1047.0], [67.6, 1047.0], [67.7, 1047.0], [67.8, 1047.0], [67.9, 1048.0], [68.0, 1048.0], [68.1, 1048.0], [68.2, 1049.0], [68.3, 1049.0], [68.4, 1049.0], [68.5, 1049.0], [68.6, 1050.0], [68.7, 1050.0], [68.8, 1050.0], [68.9, 1050.0], [69.0, 1052.0], [69.1, 1052.0], [69.2, 1052.0], [69.3, 1053.0], [69.4, 1053.0], [69.5, 1053.0], [69.6, 1054.0], [69.7, 1055.0], [69.8, 1055.0], [69.9, 1055.0], [70.0, 1056.0], [70.1, 1057.0], [70.2, 1057.0], [70.3, 1057.0], [70.4, 1057.0], [70.5, 1058.0], [70.6, 1058.0], [70.7, 1060.0], [70.8, 1060.0], [70.9, 1060.0], [71.0, 1060.0], [71.1, 1060.0], [71.2, 1061.0], [71.3, 1061.0], [71.4, 1061.0], [71.5, 1062.0], [71.6, 1062.0], [71.7, 1062.0], [71.8, 1062.0], [71.9, 1064.0], [72.0, 1064.0], [72.1, 1064.0], [72.2, 1064.0], [72.3, 1065.0], [72.4, 1065.0], [72.5, 1065.0], [72.6, 1065.0], [72.7, 1065.0], [72.8, 1065.0], [72.9, 1065.0], [73.0, 1066.0], [73.1, 1067.0], [73.2, 1067.0], [73.3, 1067.0], [73.4, 1067.0], [73.5, 1067.0], [73.6, 1067.0], [73.7, 1068.0], [73.8, 1069.0], [73.9, 1069.0], [74.0, 1069.0], [74.1, 1069.0], [74.2, 1070.0], [74.3, 1071.0], [74.4, 1071.0], [74.5, 1072.0], [74.6, 1072.0], [74.7, 1074.0], [74.8, 1074.0], [74.9, 1074.0], [75.0, 1075.0], [75.1, 1075.0], [75.2, 1075.0], [75.3, 1076.0], [75.4, 1078.0], [75.5, 1078.0], [75.6, 1078.0], [75.7, 1078.0], [75.8, 1081.0], [75.9, 1081.0], [76.0, 1082.0], [76.1, 1083.0], [76.2, 1084.0], [76.3, 1084.0], [76.4, 1084.0], [76.5, 1086.0], [76.6, 1087.0], [76.7, 1087.0], [76.8, 1087.0], [76.9, 1088.0], [77.0, 1088.0], [77.1, 1088.0], [77.2, 1089.0], [77.3, 1089.0], [77.4, 1089.0], [77.5, 1092.0], [77.6, 1096.0], [77.7, 1096.0], [77.8, 1096.0], [77.9, 1098.0], [78.0, 1098.0], [78.1, 1099.0], [78.2, 1099.0], [78.3, 1099.0], [78.4, 1099.0], [78.5, 1099.0], [78.6, 1099.0], [78.7, 1100.0], [78.8, 1101.0], [78.9, 1101.0], [79.0, 1102.0], [79.1, 1104.0], [79.2, 1105.0], [79.3, 1105.0], [79.4, 1106.0], [79.5, 1106.0], [79.6, 1106.0], [79.7, 1106.0], [79.8, 1107.0], [79.9, 1107.0], [80.0, 1107.0], [80.1, 1107.0], [80.2, 1110.0], [80.3, 1112.0], [80.4, 1112.0], [80.5, 1113.0], [80.6, 1113.0], [80.7, 1115.0], [80.8, 1115.0], [80.9, 1116.0], [81.0, 1119.0], [81.1, 1120.0], [81.2, 1120.0], [81.3, 1121.0], [81.4, 1123.0], [81.5, 1123.0], [81.6, 1123.0], [81.7, 1124.0], [81.8, 1125.0], [81.9, 1125.0], [82.0, 1126.0], [82.1, 1127.0], [82.2, 1128.0], [82.3, 1128.0], [82.4, 1131.0], [82.5, 1132.0], [82.6, 1132.0], [82.7, 1132.0], [82.8, 1132.0], [82.9, 1133.0], [83.0, 1134.0], [83.1, 1134.0], [83.2, 1135.0], [83.3, 1136.0], [83.4, 1136.0], [83.5, 1136.0], [83.6, 1138.0], [83.7, 1138.0], [83.8, 1138.0], [83.9, 1139.0], [84.0, 1143.0], [84.1, 1143.0], [84.2, 1143.0], [84.3, 1144.0], [84.4, 1144.0], [84.5, 1144.0], [84.6, 1144.0], [84.7, 1146.0], [84.8, 1147.0], [84.9, 1148.0], [85.0, 1148.0], [85.1, 1148.0], [85.2, 1149.0], [85.3, 1149.0], [85.4, 1150.0], [85.5, 1155.0], [85.6, 1155.0], [85.7, 1155.0], [85.8, 1156.0], [85.9, 1156.0], [86.0, 1158.0], [86.1, 1158.0], [86.2, 1159.0], [86.3, 1160.0], [86.4, 1161.0], [86.5, 1161.0], [86.6, 1164.0], [86.7, 1166.0], [86.8, 1166.0], [86.9, 1166.0], [87.0, 1168.0], [87.1, 1170.0], [87.2, 1170.0], [87.3, 1172.0], [87.4, 1176.0], [87.5, 1176.0], [87.6, 1176.0], [87.7, 1179.0], [87.8, 1179.0], [87.9, 1180.0], [88.0, 1180.0], [88.1, 1181.0], [88.2, 1182.0], [88.3, 1185.0], [88.4, 1185.0], [88.5, 1185.0], [88.6, 1185.0], [88.7, 1185.0], [88.8, 1188.0], [88.9, 1189.0], [89.0, 1193.0], [89.1, 1193.0], [89.2, 1195.0], [89.3, 1196.0], [89.4, 1197.0], [89.5, 1197.0], [89.6, 1198.0], [89.7, 1198.0], [89.8, 1200.0], [89.9, 1200.0], [90.0, 1201.0], [90.1, 1201.0], [90.2, 1201.0], [90.3, 1202.0], [90.4, 1202.0], [90.5, 1202.0], [90.6, 1202.0], [90.7, 1204.0], [90.8, 1206.0], [90.9, 1208.0], [91.0, 1208.0], [91.1, 1212.0], [91.2, 1216.0], [91.3, 1221.0], [91.4, 1221.0], [91.5, 1222.0], [91.6, 1222.0], [91.7, 1222.0], [91.8, 1223.0], [91.9, 1224.0], [92.0, 1229.0], [92.1, 1229.0], [92.2, 1235.0], [92.3, 1236.0], [92.4, 1241.0], [92.5, 1241.0], [92.6, 1243.0], [92.7, 1250.0], [92.8, 1254.0], [92.9, 1254.0], [93.0, 1259.0], [93.1, 1260.0], [93.2, 1264.0], [93.3, 1264.0], [93.4, 1268.0], [93.5, 1283.0], [93.6, 1283.0], [93.7, 1283.0], [93.8, 1290.0], [93.9, 1304.0], [94.0, 1304.0], [94.1, 1329.0], [94.2, 1334.0], [94.3, 1345.0], [94.4, 1345.0], [94.5, 1350.0], [94.6, 1363.0], [94.7, 1376.0], [94.8, 1376.0], [94.9, 1378.0], [95.0, 1383.0], [95.1, 1383.0], [95.2, 1386.0], [95.3, 1400.0], [95.4, 1415.0], [95.5, 1415.0], [95.6, 1420.0], [95.7, 1427.0], [95.8, 1434.0], [95.9, 1434.0], [96.0, 1448.0], [96.1, 1466.0], [96.2, 1477.0], [96.3, 1477.0], [96.4, 1481.0], [96.5, 1494.0], [96.6, 1498.0], [96.7, 1498.0], [96.8, 1498.0], [96.9, 1509.0], [97.0, 1509.0], [97.1, 1510.0], [97.2, 1513.0], [97.3, 1534.0], [97.4, 1534.0], [97.5, 1568.0], [97.6, 1610.0], [97.7, 1634.0], [97.8, 1634.0], [97.9, 1635.0], [98.0, 1637.0], [98.1, 1664.0], [98.2, 1664.0], [98.3, 1754.0], [98.4, 1820.0], [98.5, 1820.0], [98.6, 2046.0], [98.7, 2106.0], [98.8, 2108.0], [98.9, 2108.0], [99.0, 2144.0], [99.1, 2172.0], [99.2, 2221.0], [99.3, 2221.0], [99.4, 2497.0], [99.5, 2504.0], [99.6, 2547.0], [99.7, 2547.0], [99.8, 2584.0], [99.9, 2735.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 141.0, "series": [{"data": [[2100.0, 4.0], [2200.0, 1.0], [600.0, 49.0], [2400.0, 1.0], [2500.0, 3.0], [700.0, 31.0], [2700.0, 1.0], [200.0, 51.0], [800.0, 33.0], [900.0, 47.0], [1000.0, 141.0], [1100.0, 82.0], [300.0, 36.0], [1200.0, 30.0], [1300.0, 10.0], [1400.0, 12.0], [1500.0, 5.0], [400.0, 59.0], [100.0, 22.0], [1600.0, 5.0], [1700.0, 1.0], [1800.0, 1.0], [2000.0, 1.0], [500.0, 109.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 23.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 544.0, "series": [{"data": [[0.0, 168.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 544.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 23.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.938608458390176, "minX": 1.60280544E12, "maxY": 10.0, "series": [{"data": [[1.6028055E12, 9.938608458390176], [1.60280544E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028055E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 236.0, "minX": 1.0, "maxY": 1045.0, "series": [{"data": [[8.0, 1045.0], [4.0, 464.0], [2.0, 1035.0], [1.0, 1008.0], [9.0, 1029.0], [10.0, 814.6570247933874], [5.0, 447.0], [6.0, 236.0], [3.0, 443.0], [7.0, 242.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 812.7755102040808]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15.533333333333333, "minX": 1.60280544E12, "maxY": 1727024.2166666666, "series": [{"data": [[1.6028055E12, 1727024.2166666666], [1.60280544E12, 9894.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6028055E12, 5654.5], [1.60280544E12, 15.533333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028055E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 808.5, "minX": 1.60280544E12, "maxY": 812.7871759890854, "series": [{"data": [[1.6028055E12, 812.7871759890854], [1.60280544E12, 808.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028055E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 804.5, "minX": 1.60280544E12, "maxY": 811.6439290586624, "series": [{"data": [[1.6028055E12, 811.6439290586624], [1.60280544E12, 804.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028055E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0641200545702591, "minX": 1.60280544E12, "maxY": 18.0, "series": [{"data": [[1.6028055E12, 0.0641200545702591], [1.60280544E12, 18.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028055E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 131.0, "minX": 1.60280544E12, "maxY": 2735.0, "series": [{"data": [[1.6028055E12, 2735.0], [1.60280544E12, 951.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6028055E12, 145.0], [1.60280544E12, 666.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6028055E12, 145.2666000699997], [1.60280544E12, 666.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6028055E12, 145.0], [1.60280544E12, 666.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6028055E12, 131.0], [1.60280544E12, 666.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6028055E12, 822.0], [1.60280544E12, 808.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028055E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 435.0, "minX": 2.0, "maxY": 1056.5, "series": [{"data": [[2.0, 979.5], [9.0, 1056.5], [10.0, 1042.0], [11.0, 1042.0], [12.0, 983.0], [13.0, 754.0], [14.0, 680.5], [15.0, 595.0], [16.0, 621.0], [17.0, 613.0], [19.0, 435.0], [22.0, 472.0], [6.0, 701.5], [7.0, 1035.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 434.0, "minX": 2.0, "maxY": 1055.5, "series": [{"data": [[2.0, 975.5], [9.0, 1055.5], [10.0, 1041.0], [11.0, 1041.0], [12.0, 981.0], [13.0, 748.0], [14.0, 680.0], [15.0, 595.0], [16.0, 621.0], [17.0, 613.0], [19.0, 434.0], [22.0, 472.0], [6.0, 700.0], [7.0, 1031.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.60280544E12, "maxY": 12.05, "series": [{"data": [[1.6028055E12, 12.05], [1.60280544E12, 0.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028055E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60280544E12, "maxY": 12.216666666666667, "series": [{"data": [[1.6028055E12, 12.216666666666667], [1.60280544E12, 0.03333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028055E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60280544E12, "maxY": 12.216666666666667, "series": [{"data": [[1.6028055E12, 12.216666666666667], [1.60280544E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028055E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60280544E12, "maxY": 12.216666666666667, "series": [{"data": [[1.6028055E12, 12.216666666666667], [1.60280544E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028055E12, "title": "Total Transactions Per Second"}},
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

