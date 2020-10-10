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
        data: {"result": {"minY": 147.0, "minX": 0.0, "maxY": 2891.0, "series": [{"data": [[0.0, 147.0], [0.1, 147.0], [0.2, 150.0], [0.3, 150.0], [0.4, 150.0], [0.5, 150.0], [0.6, 151.0], [0.7, 154.0], [0.8, 154.0], [0.9, 155.0], [1.0, 156.0], [1.1, 159.0], [1.2, 159.0], [1.3, 162.0], [1.4, 163.0], [1.5, 163.0], [1.6, 163.0], [1.7, 163.0], [1.8, 169.0], [1.9, 169.0], [2.0, 170.0], [2.1, 173.0], [2.2, 182.0], [2.3, 182.0], [2.4, 183.0], [2.5, 186.0], [2.6, 189.0], [2.7, 189.0], [2.8, 221.0], [2.9, 223.0], [3.0, 228.0], [3.1, 228.0], [3.2, 236.0], [3.3, 236.0], [3.4, 236.0], [3.5, 237.0], [3.6, 237.0], [3.7, 240.0], [3.8, 240.0], [3.9, 246.0], [4.0, 250.0], [4.1, 251.0], [4.2, 251.0], [4.3, 254.0], [4.4, 254.0], [4.5, 256.0], [4.6, 256.0], [4.7, 256.0], [4.8, 257.0], [4.9, 260.0], [5.0, 260.0], [5.1, 263.0], [5.2, 269.0], [5.3, 269.0], [5.4, 271.0], [5.5, 272.0], [5.6, 277.0], [5.7, 277.0], [5.8, 277.0], [5.9, 285.0], [6.0, 286.0], [6.1, 286.0], [6.2, 286.0], [6.3, 287.0], [6.4, 296.0], [6.5, 296.0], [6.6, 300.0], [6.7, 301.0], [6.8, 301.0], [6.9, 302.0], [7.0, 307.0], [7.1, 307.0], [7.2, 307.0], [7.3, 310.0], [7.4, 310.0], [7.5, 315.0], [7.6, 315.0], [7.7, 317.0], [7.8, 320.0], [7.9, 322.0], [8.0, 322.0], [8.1, 327.0], [8.2, 327.0], [8.3, 329.0], [8.4, 329.0], [8.5, 332.0], [8.6, 333.0], [8.7, 333.0], [8.8, 335.0], [8.9, 337.0], [9.0, 338.0], [9.1, 338.0], [9.2, 343.0], [9.3, 343.0], [9.4, 345.0], [9.5, 345.0], [9.6, 346.0], [9.7, 347.0], [9.8, 348.0], [9.9, 348.0], [10.0, 352.0], [10.1, 354.0], [10.2, 354.0], [10.3, 356.0], [10.4, 357.0], [10.5, 359.0], [10.6, 359.0], [10.7, 359.0], [10.8, 362.0], [10.9, 364.0], [11.0, 364.0], [11.1, 365.0], [11.2, 365.0], [11.3, 372.0], [11.4, 372.0], [11.5, 377.0], [11.6, 377.0], [11.7, 377.0], [11.8, 380.0], [11.9, 380.0], [12.0, 382.0], [12.1, 382.0], [12.2, 386.0], [12.3, 388.0], [12.4, 388.0], [12.5, 388.0], [12.6, 390.0], [12.7, 393.0], [12.8, 394.0], [12.9, 394.0], [13.0, 394.0], [13.1, 401.0], [13.2, 403.0], [13.3, 403.0], [13.4, 407.0], [13.5, 408.0], [13.6, 408.0], [13.7, 411.0], [13.8, 412.0], [13.9, 415.0], [14.0, 415.0], [14.1, 424.0], [14.2, 427.0], [14.3, 435.0], [14.4, 435.0], [14.5, 443.0], [14.6, 443.0], [14.7, 447.0], [14.8, 447.0], [14.9, 452.0], [15.0, 454.0], [15.1, 454.0], [15.2, 458.0], [15.3, 462.0], [15.4, 464.0], [15.5, 464.0], [15.6, 465.0], [15.7, 467.0], [15.8, 469.0], [15.9, 469.0], [16.0, 472.0], [16.1, 472.0], [16.2, 473.0], [16.3, 473.0], [16.4, 474.0], [16.5, 474.0], [16.6, 474.0], [16.7, 474.0], [16.8, 475.0], [16.9, 476.0], [17.0, 476.0], [17.1, 477.0], [17.2, 479.0], [17.3, 479.0], [17.4, 479.0], [17.5, 479.0], [17.6, 481.0], [17.7, 481.0], [17.8, 481.0], [17.9, 482.0], [18.0, 485.0], [18.1, 486.0], [18.2, 486.0], [18.3, 488.0], [18.4, 495.0], [18.5, 495.0], [18.6, 496.0], [18.7, 497.0], [18.8, 499.0], [18.9, 499.0], [19.0, 501.0], [19.1, 503.0], [19.2, 503.0], [19.3, 503.0], [19.4, 504.0], [19.5, 505.0], [19.6, 505.0], [19.7, 505.0], [19.8, 505.0], [19.9, 509.0], [20.0, 511.0], [20.1, 511.0], [20.2, 511.0], [20.3, 512.0], [20.4, 512.0], [20.5, 513.0], [20.6, 514.0], [20.7, 515.0], [20.8, 515.0], [20.9, 515.0], [21.0, 515.0], [21.1, 516.0], [21.2, 516.0], [21.3, 517.0], [21.4, 517.0], [21.5, 517.0], [21.6, 517.0], [21.7, 517.0], [21.8, 518.0], [21.9, 518.0], [22.0, 519.0], [22.1, 521.0], [22.2, 522.0], [22.3, 522.0], [22.4, 522.0], [22.5, 523.0], [22.6, 524.0], [22.7, 524.0], [22.8, 525.0], [22.9, 526.0], [23.0, 530.0], [23.1, 530.0], [23.2, 530.0], [23.3, 531.0], [23.4, 531.0], [23.5, 533.0], [23.6, 533.0], [23.7, 533.0], [23.8, 533.0], [23.9, 533.0], [24.0, 535.0], [24.1, 535.0], [24.2, 535.0], [24.3, 536.0], [24.4, 536.0], [24.5, 536.0], [24.6, 536.0], [24.7, 536.0], [24.8, 537.0], [24.9, 537.0], [25.0, 537.0], [25.1, 538.0], [25.2, 538.0], [25.3, 538.0], [25.4, 539.0], [25.5, 540.0], [25.6, 540.0], [25.7, 540.0], [25.8, 540.0], [25.9, 541.0], [26.0, 543.0], [26.1, 543.0], [26.2, 543.0], [26.3, 543.0], [26.4, 543.0], [26.5, 543.0], [26.6, 544.0], [26.7, 544.0], [26.8, 544.0], [26.9, 545.0], [27.0, 547.0], [27.1, 547.0], [27.2, 547.0], [27.3, 550.0], [27.4, 550.0], [27.5, 550.0], [27.6, 550.0], [27.7, 550.0], [27.8, 551.0], [27.9, 552.0], [28.0, 552.0], [28.1, 553.0], [28.2, 553.0], [28.3, 554.0], [28.4, 554.0], [28.5, 555.0], [28.6, 555.0], [28.7, 555.0], [28.8, 556.0], [28.9, 558.0], [29.0, 559.0], [29.1, 559.0], [29.2, 559.0], [29.3, 560.0], [29.4, 562.0], [29.5, 562.0], [29.6, 562.0], [29.7, 562.0], [29.8, 563.0], [29.9, 563.0], [30.0, 563.0], [30.1, 564.0], [30.2, 564.0], [30.3, 565.0], [30.4, 565.0], [30.5, 567.0], [30.6, 567.0], [30.7, 568.0], [30.8, 568.0], [30.9, 569.0], [31.0, 569.0], [31.1, 569.0], [31.2, 569.0], [31.3, 569.0], [31.4, 569.0], [31.5, 571.0], [31.6, 571.0], [31.7, 571.0], [31.8, 575.0], [31.9, 576.0], [32.0, 576.0], [32.1, 576.0], [32.2, 576.0], [32.3, 577.0], [32.4, 578.0], [32.5, 578.0], [32.6, 578.0], [32.7, 578.0], [32.8, 579.0], [32.9, 579.0], [33.0, 579.0], [33.1, 580.0], [33.2, 580.0], [33.3, 580.0], [33.4, 581.0], [33.5, 582.0], [33.6, 582.0], [33.7, 582.0], [33.8, 583.0], [33.9, 583.0], [34.0, 583.0], [34.1, 584.0], [34.2, 585.0], [34.3, 589.0], [34.4, 589.0], [34.5, 589.0], [34.6, 590.0], [34.7, 590.0], [34.8, 590.0], [34.9, 590.0], [35.0, 590.0], [35.1, 590.0], [35.2, 591.0], [35.3, 592.0], [35.4, 594.0], [35.5, 594.0], [35.6, 595.0], [35.7, 595.0], [35.8, 597.0], [35.9, 597.0], [36.0, 597.0], [36.1, 599.0], [36.2, 599.0], [36.3, 599.0], [36.4, 600.0], [36.5, 603.0], [36.6, 605.0], [36.7, 605.0], [36.8, 606.0], [36.9, 606.0], [37.0, 606.0], [37.1, 608.0], [37.2, 608.0], [37.3, 610.0], [37.4, 610.0], [37.5, 610.0], [37.6, 611.0], [37.7, 612.0], [37.8, 612.0], [37.9, 614.0], [38.0, 615.0], [38.1, 616.0], [38.2, 616.0], [38.3, 618.0], [38.4, 619.0], [38.5, 619.0], [38.6, 621.0], [38.7, 623.0], [38.8, 624.0], [38.9, 624.0], [39.0, 627.0], [39.1, 628.0], [39.2, 629.0], [39.3, 629.0], [39.4, 630.0], [39.5, 633.0], [39.6, 634.0], [39.7, 634.0], [39.8, 636.0], [39.9, 637.0], [40.0, 638.0], [40.1, 638.0], [40.2, 641.0], [40.3, 641.0], [40.4, 641.0], [40.5, 643.0], [40.6, 643.0], [40.7, 648.0], [40.8, 648.0], [40.9, 652.0], [41.0, 652.0], [41.1, 653.0], [41.2, 653.0], [41.3, 658.0], [41.4, 659.0], [41.5, 662.0], [41.6, 662.0], [41.7, 664.0], [41.8, 664.0], [41.9, 664.0], [42.0, 665.0], [42.1, 667.0], [42.2, 667.0], [42.3, 667.0], [42.4, 667.0], [42.5, 669.0], [42.6, 673.0], [42.7, 673.0], [42.8, 673.0], [42.9, 674.0], [43.0, 674.0], [43.1, 674.0], [43.2, 679.0], [43.3, 680.0], [43.4, 680.0], [43.5, 682.0], [43.6, 683.0], [43.7, 683.0], [43.8, 683.0], [43.9, 685.0], [44.0, 687.0], [44.1, 690.0], [44.2, 690.0], [44.3, 696.0], [44.4, 699.0], [44.5, 701.0], [44.6, 701.0], [44.7, 701.0], [44.8, 704.0], [44.9, 704.0], [45.0, 704.0], [45.1, 708.0], [45.2, 710.0], [45.3, 710.0], [45.4, 721.0], [45.5, 723.0], [45.6, 725.0], [45.7, 725.0], [45.8, 732.0], [45.9, 735.0], [46.0, 748.0], [46.1, 748.0], [46.2, 748.0], [46.3, 749.0], [46.4, 750.0], [46.5, 750.0], [46.6, 751.0], [46.7, 755.0], [46.8, 755.0], [46.9, 756.0], [47.0, 756.0], [47.1, 759.0], [47.2, 759.0], [47.3, 760.0], [47.4, 764.0], [47.5, 772.0], [47.6, 772.0], [47.7, 773.0], [47.8, 774.0], [47.9, 778.0], [48.0, 778.0], [48.1, 780.0], [48.2, 790.0], [48.3, 791.0], [48.4, 791.0], [48.5, 792.0], [48.6, 800.0], [48.7, 800.0], [48.8, 803.0], [48.9, 814.0], [49.0, 819.0], [49.1, 819.0], [49.2, 820.0], [49.3, 826.0], [49.4, 829.0], [49.5, 829.0], [49.6, 829.0], [49.7, 830.0], [49.8, 832.0], [49.9, 832.0], [50.0, 835.0], [50.1, 835.0], [50.2, 835.0], [50.3, 837.0], [50.4, 853.0], [50.5, 855.0], [50.6, 855.0], [50.7, 858.0], [50.8, 859.0], [50.9, 859.0], [51.0, 859.0], [51.1, 860.0], [51.2, 862.0], [51.3, 865.0], [51.4, 865.0], [51.5, 866.0], [51.6, 870.0], [51.7, 870.0], [51.8, 876.0], [51.9, 879.0], [52.0, 880.0], [52.1, 880.0], [52.2, 881.0], [52.3, 882.0], [52.4, 883.0], [52.5, 883.0], [52.6, 885.0], [52.7, 885.0], [52.8, 887.0], [52.9, 887.0], [53.0, 891.0], [53.1, 892.0], [53.2, 894.0], [53.3, 894.0], [53.4, 895.0], [53.5, 902.0], [53.6, 902.0], [53.7, 908.0], [53.8, 908.0], [53.9, 909.0], [54.0, 909.0], [54.1, 913.0], [54.2, 914.0], [54.3, 922.0], [54.4, 922.0], [54.5, 923.0], [54.6, 925.0], [54.7, 926.0], [54.8, 926.0], [54.9, 926.0], [55.0, 926.0], [55.1, 926.0], [55.2, 936.0], [55.3, 937.0], [55.4, 940.0], [55.5, 940.0], [55.6, 941.0], [55.7, 948.0], [55.8, 950.0], [55.9, 950.0], [56.0, 951.0], [56.1, 970.0], [56.2, 970.0], [56.3, 970.0], [56.4, 971.0], [56.5, 976.0], [56.6, 977.0], [56.7, 977.0], [56.8, 980.0], [56.9, 982.0], [57.0, 982.0], [57.1, 987.0], [57.2, 987.0], [57.3, 989.0], [57.4, 989.0], [57.5, 993.0], [57.6, 993.0], [57.7, 995.0], [57.8, 995.0], [57.9, 1003.0], [58.0, 1005.0], [58.1, 1008.0], [58.2, 1008.0], [58.3, 1014.0], [58.4, 1015.0], [58.5, 1015.0], [58.6, 1018.0], [58.7, 1025.0], [58.8, 1026.0], [58.9, 1026.0], [59.0, 1030.0], [59.1, 1032.0], [59.2, 1041.0], [59.3, 1041.0], [59.4, 1052.0], [59.5, 1058.0], [59.6, 1063.0], [59.7, 1063.0], [59.8, 1065.0], [59.9, 1065.0], [60.0, 1068.0], [60.1, 1068.0], [60.2, 1068.0], [60.3, 1069.0], [60.4, 1069.0], [60.5, 1071.0], [60.6, 1072.0], [60.7, 1075.0], [60.8, 1075.0], [60.9, 1075.0], [61.0, 1076.0], [61.1, 1078.0], [61.2, 1078.0], [61.3, 1079.0], [61.4, 1080.0], [61.5, 1081.0], [61.6, 1081.0], [61.7, 1082.0], [61.8, 1083.0], [61.9, 1083.0], [62.0, 1085.0], [62.1, 1086.0], [62.2, 1086.0], [62.3, 1086.0], [62.4, 1087.0], [62.5, 1088.0], [62.6, 1089.0], [62.7, 1089.0], [62.8, 1091.0], [62.9, 1091.0], [63.0, 1093.0], [63.1, 1093.0], [63.2, 1095.0], [63.3, 1096.0], [63.4, 1096.0], [63.5, 1097.0], [63.6, 1099.0], [63.7, 1099.0], [63.8, 1099.0], [63.9, 1100.0], [64.0, 1100.0], [64.1, 1100.0], [64.2, 1100.0], [64.3, 1100.0], [64.4, 1101.0], [64.5, 1101.0], [64.6, 1101.0], [64.7, 1102.0], [64.8, 1104.0], [64.9, 1106.0], [65.0, 1106.0], [65.1, 1108.0], [65.2, 1108.0], [65.3, 1108.0], [65.4, 1108.0], [65.5, 1108.0], [65.6, 1109.0], [65.7, 1109.0], [65.8, 1110.0], [65.9, 1111.0], [66.0, 1111.0], [66.1, 1111.0], [66.2, 1112.0], [66.3, 1112.0], [66.4, 1112.0], [66.5, 1112.0], [66.6, 1113.0], [66.7, 1115.0], [66.8, 1115.0], [66.9, 1115.0], [67.0, 1115.0], [67.1, 1116.0], [67.2, 1116.0], [67.3, 1116.0], [67.4, 1117.0], [67.5, 1118.0], [67.6, 1118.0], [67.7, 1118.0], [67.8, 1118.0], [67.9, 1119.0], [68.0, 1119.0], [68.1, 1119.0], [68.2, 1119.0], [68.3, 1120.0], [68.4, 1120.0], [68.5, 1122.0], [68.6, 1123.0], [68.7, 1123.0], [68.8, 1124.0], [68.9, 1125.0], [69.0, 1127.0], [69.1, 1127.0], [69.2, 1127.0], [69.3, 1128.0], [69.4, 1128.0], [69.5, 1128.0], [69.6, 1128.0], [69.7, 1130.0], [69.8, 1131.0], [69.9, 1131.0], [70.0, 1132.0], [70.1, 1133.0], [70.2, 1133.0], [70.3, 1133.0], [70.4, 1133.0], [70.5, 1134.0], [70.6, 1134.0], [70.7, 1134.0], [70.8, 1136.0], [70.9, 1136.0], [71.0, 1136.0], [71.1, 1137.0], [71.2, 1137.0], [71.3, 1137.0], [71.4, 1137.0], [71.5, 1137.0], [71.6, 1138.0], [71.7, 1138.0], [71.8, 1138.0], [71.9, 1138.0], [72.0, 1140.0], [72.1, 1140.0], [72.2, 1141.0], [72.3, 1142.0], [72.4, 1144.0], [72.5, 1144.0], [72.6, 1147.0], [72.7, 1147.0], [72.8, 1149.0], [72.9, 1149.0], [73.0, 1150.0], [73.1, 1150.0], [73.2, 1151.0], [73.3, 1151.0], [73.4, 1152.0], [73.5, 1154.0], [73.6, 1154.0], [73.7, 1154.0], [73.8, 1155.0], [73.9, 1155.0], [74.0, 1155.0], [74.1, 1156.0], [74.2, 1157.0], [74.3, 1158.0], [74.4, 1158.0], [74.5, 1160.0], [74.6, 1160.0], [74.7, 1160.0], [74.8, 1160.0], [74.9, 1161.0], [75.0, 1161.0], [75.1, 1161.0], [75.2, 1162.0], [75.3, 1166.0], [75.4, 1166.0], [75.5, 1166.0], [75.6, 1167.0], [75.7, 1169.0], [75.8, 1171.0], [75.9, 1171.0], [76.0, 1171.0], [76.1, 1172.0], [76.2, 1173.0], [76.3, 1173.0], [76.4, 1173.0], [76.5, 1174.0], [76.6, 1175.0], [76.7, 1175.0], [76.8, 1177.0], [76.9, 1177.0], [77.0, 1177.0], [77.1, 1178.0], [77.2, 1178.0], [77.3, 1181.0], [77.4, 1181.0], [77.5, 1181.0], [77.6, 1183.0], [77.7, 1185.0], [77.8, 1185.0], [77.9, 1187.0], [78.0, 1188.0], [78.1, 1188.0], [78.2, 1188.0], [78.3, 1189.0], [78.4, 1189.0], [78.5, 1189.0], [78.6, 1190.0], [78.7, 1192.0], [78.8, 1192.0], [78.9, 1192.0], [79.0, 1192.0], [79.1, 1193.0], [79.2, 1193.0], [79.3, 1193.0], [79.4, 1194.0], [79.5, 1196.0], [79.6, 1198.0], [79.7, 1198.0], [79.8, 1198.0], [79.9, 1198.0], [80.0, 1199.0], [80.1, 1199.0], [80.2, 1201.0], [80.3, 1202.0], [80.4, 1202.0], [80.5, 1203.0], [80.6, 1203.0], [80.7, 1203.0], [80.8, 1203.0], [80.9, 1207.0], [81.0, 1207.0], [81.1, 1210.0], [81.2, 1210.0], [81.3, 1214.0], [81.4, 1214.0], [81.5, 1214.0], [81.6, 1214.0], [81.7, 1215.0], [81.8, 1217.0], [81.9, 1217.0], [82.0, 1218.0], [82.1, 1219.0], [82.2, 1222.0], [82.3, 1222.0], [82.4, 1226.0], [82.5, 1226.0], [82.6, 1226.0], [82.7, 1226.0], [82.8, 1228.0], [82.9, 1231.0], [83.0, 1231.0], [83.1, 1231.0], [83.2, 1235.0], [83.3, 1239.0], [83.4, 1239.0], [83.5, 1241.0], [83.6, 1244.0], [83.7, 1246.0], [83.8, 1246.0], [83.9, 1246.0], [84.0, 1248.0], [84.1, 1249.0], [84.2, 1249.0], [84.3, 1249.0], [84.4, 1250.0], [84.5, 1251.0], [84.6, 1251.0], [84.7, 1252.0], [84.8, 1253.0], [84.9, 1254.0], [85.0, 1254.0], [85.1, 1255.0], [85.2, 1255.0], [85.3, 1255.0], [85.4, 1256.0], [85.5, 1257.0], [85.6, 1258.0], [85.7, 1258.0], [85.8, 1260.0], [85.9, 1260.0], [86.0, 1261.0], [86.1, 1261.0], [86.2, 1264.0], [86.3, 1267.0], [86.4, 1269.0], [86.5, 1269.0], [86.6, 1271.0], [86.7, 1271.0], [86.8, 1271.0], [86.9, 1272.0], [87.0, 1273.0], [87.1, 1274.0], [87.2, 1274.0], [87.3, 1274.0], [87.4, 1274.0], [87.5, 1275.0], [87.6, 1275.0], [87.7, 1276.0], [87.8, 1277.0], [87.9, 1278.0], [88.0, 1278.0], [88.1, 1279.0], [88.2, 1280.0], [88.3, 1281.0], [88.4, 1281.0], [88.5, 1282.0], [88.6, 1284.0], [88.7, 1284.0], [88.8, 1286.0], [88.9, 1287.0], [89.0, 1291.0], [89.1, 1291.0], [89.2, 1292.0], [89.3, 1293.0], [89.4, 1299.0], [89.5, 1299.0], [89.6, 1301.0], [89.7, 1301.0], [89.8, 1302.0], [89.9, 1302.0], [90.0, 1303.0], [90.1, 1305.0], [90.2, 1305.0], [90.3, 1306.0], [90.4, 1306.0], [90.5, 1308.0], [90.6, 1308.0], [90.7, 1311.0], [90.8, 1312.0], [90.9, 1313.0], [91.0, 1313.0], [91.1, 1314.0], [91.2, 1314.0], [91.3, 1319.0], [91.4, 1319.0], [91.5, 1320.0], [91.6, 1324.0], [91.7, 1324.0], [91.8, 1327.0], [91.9, 1329.0], [92.0, 1332.0], [92.1, 1332.0], [92.2, 1336.0], [92.3, 1337.0], [92.4, 1341.0], [92.5, 1341.0], [92.6, 1346.0], [92.7, 1348.0], [92.8, 1349.0], [92.9, 1349.0], [93.0, 1353.0], [93.1, 1361.0], [93.2, 1362.0], [93.3, 1362.0], [93.4, 1363.0], [93.5, 1364.0], [93.6, 1364.0], [93.7, 1367.0], [93.8, 1373.0], [93.9, 1374.0], [94.0, 1374.0], [94.1, 1384.0], [94.2, 1389.0], [94.3, 1393.0], [94.4, 1393.0], [94.5, 1396.0], [94.6, 1400.0], [94.7, 1407.0], [94.8, 1407.0], [94.9, 1409.0], [95.0, 1430.0], [95.1, 1430.0], [95.2, 1444.0], [95.3, 1451.0], [95.4, 1462.0], [95.5, 1462.0], [95.6, 1480.0], [95.7, 1484.0], [95.8, 1509.0], [95.9, 1509.0], [96.0, 1510.0], [96.1, 1518.0], [96.2, 1550.0], [96.3, 1550.0], [96.4, 1578.0], [96.5, 1596.0], [96.6, 1597.0], [96.7, 1597.0], [96.8, 1598.0], [96.9, 1605.0], [97.0, 1605.0], [97.1, 1673.0], [97.2, 1687.0], [97.3, 1771.0], [97.4, 1771.0], [97.5, 1805.0], [97.6, 1813.0], [97.7, 1814.0], [97.8, 1814.0], [97.9, 1822.0], [98.0, 1825.0], [98.1, 1831.0], [98.2, 1831.0], [98.3, 1836.0], [98.4, 1862.0], [98.5, 1862.0], [98.6, 1902.0], [98.7, 2014.0], [98.8, 2108.0], [98.9, 2108.0], [99.0, 2124.0], [99.1, 2135.0], [99.2, 2243.0], [99.3, 2243.0], [99.4, 2387.0], [99.5, 2444.0], [99.6, 2511.0], [99.7, 2511.0], [99.8, 2710.0], [99.9, 2891.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 128.0, "series": [{"data": [[600.0, 60.0], [700.0, 30.0], [800.0, 36.0], [900.0, 32.0], [1000.0, 44.0], [1100.0, 120.0], [1200.0, 69.0], [1300.0, 37.0], [1400.0, 9.0], [1500.0, 8.0], [100.0, 20.0], [1600.0, 3.0], [1700.0, 1.0], [1800.0, 8.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 3.0], [2200.0, 1.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2700.0, 1.0], [2800.0, 1.0], [200.0, 28.0], [300.0, 48.0], [400.0, 43.0], [500.0, 128.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 31.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 565.0, "series": [{"data": [[0.0, 139.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 565.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 31.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.671532846715328, "minX": 1.60231482E12, "maxY": 10.0, "series": [{"data": [[1.60231488E12, 9.671532846715328], [1.60231482E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231488E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 246.0, "minX": 1.0, "maxY": 864.4435261708, "series": [{"data": [[8.0, 246.0], [4.0, 452.0], [2.0, 853.0], [1.0, 488.0], [9.0, 477.0], [10.0, 864.4435261708], [5.0, 467.0], [6.0, 486.0], [3.0, 481.0], [7.0, 512.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 859.9292517006814]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1047.7666666666667, "minX": 1.60231482E12, "maxY": 1472668.4833333334, "series": [{"data": [[1.60231488E12, 264176.88333333336], [1.60231482E12, 1472668.4833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231488E12, 1047.7666666666667], [1.60231482E12, 4622.266666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231488E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 737.7883211678833, "minX": 1.60231482E12, "maxY": 887.9113712374591, "series": [{"data": [[1.60231488E12, 737.7883211678833], [1.60231482E12, 887.9113712374591]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231488E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 737.0510948905112, "minX": 1.60231482E12, "maxY": 886.918060200668, "series": [{"data": [[1.60231488E12, 737.0510948905112], [1.60231482E12, 886.918060200668]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231488E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.06569343065693432, "minX": 1.60231482E12, "maxY": 0.17725752508361173, "series": [{"data": [[1.60231488E12, 0.06569343065693432], [1.60231482E12, 0.17725752508361173]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231488E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 147.0, "minX": 1.60231482E12, "maxY": 2891.0, "series": [{"data": [[1.60231488E12, 2511.0], [1.60231482E12, 2891.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231488E12, 160.7759990787506], [1.60231482E12, 152.56399942874907]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231488E12, 164.25360036849975], [1.60231482E12, 154.72040022850035]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231488E12, 162.7079995393753], [1.60231482E12, 153.76199971437455]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231488E12, 154.0], [1.60231482E12, 147.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231488E12, 652.0], [1.60231482E12, 908.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231488E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 394.0, "minX": 2.0, "maxY": 1326.5, "series": [{"data": [[2.0, 653.5], [8.0, 1148.0], [9.0, 1118.0], [10.0, 1109.5], [11.0, 1115.0], [12.0, 935.0], [13.0, 615.5], [14.0, 670.5], [15.0, 685.5], [16.0, 480.0], [17.0, 641.0], [18.0, 507.0], [5.0, 623.0], [21.0, 394.0], [22.0, 526.0], [7.0, 1326.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 394.0, "minX": 2.0, "maxY": 1323.0, "series": [{"data": [[2.0, 651.0], [8.0, 1147.0], [9.0, 1118.0], [10.0, 1108.0], [11.0, 1114.0], [12.0, 933.5], [13.0, 613.5], [14.0, 670.5], [15.0, 685.0], [16.0, 479.5], [17.0, 640.0], [18.0, 506.5], [5.0, 622.0], [21.0, 394.0], [22.0, 525.5], [7.0, 1323.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.1166666666666667, "minX": 1.60231482E12, "maxY": 10.133333333333333, "series": [{"data": [[1.60231488E12, 2.1166666666666667], [1.60231482E12, 10.133333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231488E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.283333333333333, "minX": 1.60231482E12, "maxY": 9.966666666666667, "series": [{"data": [[1.60231488E12, 2.283333333333333], [1.60231482E12, 9.966666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231488E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.283333333333333, "minX": 1.60231482E12, "maxY": 9.966666666666667, "series": [{"data": [[1.60231488E12, 2.283333333333333], [1.60231482E12, 9.966666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231488E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.283333333333333, "minX": 1.60231482E12, "maxY": 9.966666666666667, "series": [{"data": [[1.60231488E12, 2.283333333333333], [1.60231482E12, 9.966666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231488E12, "title": "Total Transactions Per Second"}},
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

