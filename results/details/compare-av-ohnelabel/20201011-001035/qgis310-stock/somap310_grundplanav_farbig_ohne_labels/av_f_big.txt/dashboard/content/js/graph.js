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
        data: {"result": {"minY": 146.0, "minX": 0.0, "maxY": 3241.0, "series": [{"data": [[0.0, 146.0], [0.1, 146.0], [0.2, 149.0], [0.3, 149.0], [0.4, 149.0], [0.5, 151.0], [0.6, 152.0], [0.7, 155.0], [0.8, 155.0], [0.9, 155.0], [1.0, 160.0], [1.1, 161.0], [1.2, 161.0], [1.3, 161.0], [1.4, 165.0], [1.5, 169.0], [1.6, 169.0], [1.7, 177.0], [1.8, 178.0], [1.9, 178.0], [2.0, 180.0], [2.1, 181.0], [2.2, 183.0], [2.3, 183.0], [2.4, 191.0], [2.5, 196.0], [2.6, 197.0], [2.7, 197.0], [2.8, 210.0], [2.9, 212.0], [3.0, 217.0], [3.1, 217.0], [3.2, 220.0], [3.3, 221.0], [3.4, 221.0], [3.5, 223.0], [3.6, 224.0], [3.7, 225.0], [3.8, 225.0], [3.9, 227.0], [4.0, 227.0], [4.1, 228.0], [4.2, 228.0], [4.3, 229.0], [4.4, 234.0], [4.5, 236.0], [4.6, 236.0], [4.7, 236.0], [4.8, 237.0], [4.9, 237.0], [5.0, 237.0], [5.1, 239.0], [5.2, 240.0], [5.3, 240.0], [5.4, 240.0], [5.5, 241.0], [5.6, 241.0], [5.7, 241.0], [5.8, 243.0], [5.9, 249.0], [6.0, 250.0], [6.1, 250.0], [6.2, 253.0], [6.3, 254.0], [6.4, 257.0], [6.5, 257.0], [6.6, 258.0], [6.7, 259.0], [6.8, 259.0], [6.9, 260.0], [7.0, 261.0], [7.1, 262.0], [7.2, 262.0], [7.3, 264.0], [7.4, 264.0], [7.5, 266.0], [7.6, 266.0], [7.7, 277.0], [7.8, 279.0], [7.9, 282.0], [8.0, 282.0], [8.1, 283.0], [8.2, 284.0], [8.3, 290.0], [8.4, 290.0], [8.5, 295.0], [8.6, 299.0], [8.7, 299.0], [8.8, 300.0], [8.9, 305.0], [9.0, 306.0], [9.1, 306.0], [9.2, 314.0], [9.3, 317.0], [9.4, 320.0], [9.5, 320.0], [9.6, 321.0], [9.7, 322.0], [9.8, 323.0], [9.9, 323.0], [10.0, 324.0], [10.1, 324.0], [10.2, 324.0], [10.3, 327.0], [10.4, 330.0], [10.5, 331.0], [10.6, 331.0], [10.7, 331.0], [10.8, 332.0], [10.9, 333.0], [11.0, 333.0], [11.1, 334.0], [11.2, 334.0], [11.3, 338.0], [11.4, 338.0], [11.5, 338.0], [11.6, 339.0], [11.7, 339.0], [11.8, 341.0], [11.9, 342.0], [12.0, 344.0], [12.1, 344.0], [12.2, 346.0], [12.3, 353.0], [12.4, 354.0], [12.5, 354.0], [12.6, 355.0], [12.7, 357.0], [12.8, 358.0], [12.9, 358.0], [13.0, 359.0], [13.1, 359.0], [13.2, 363.0], [13.3, 363.0], [13.4, 370.0], [13.5, 374.0], [13.6, 374.0], [13.7, 381.0], [13.8, 385.0], [13.9, 385.0], [14.0, 385.0], [14.1, 388.0], [14.2, 391.0], [14.3, 396.0], [14.4, 396.0], [14.5, 396.0], [14.6, 396.0], [14.7, 404.0], [14.8, 404.0], [14.9, 405.0], [15.0, 406.0], [15.1, 406.0], [15.2, 407.0], [15.3, 408.0], [15.4, 415.0], [15.5, 415.0], [15.6, 422.0], [15.7, 427.0], [15.8, 430.0], [15.9, 430.0], [16.0, 430.0], [16.1, 434.0], [16.2, 435.0], [16.3, 435.0], [16.4, 436.0], [16.5, 437.0], [16.6, 441.0], [16.7, 441.0], [16.8, 446.0], [16.9, 449.0], [17.0, 449.0], [17.1, 449.0], [17.2, 453.0], [17.3, 453.0], [17.4, 453.0], [17.5, 456.0], [17.6, 457.0], [17.7, 460.0], [17.8, 460.0], [17.9, 460.0], [18.0, 465.0], [18.1, 472.0], [18.2, 472.0], [18.3, 472.0], [18.4, 473.0], [18.5, 473.0], [18.6, 476.0], [18.7, 477.0], [18.8, 482.0], [18.9, 482.0], [19.0, 483.0], [19.1, 483.0], [19.2, 483.0], [19.3, 483.0], [19.4, 484.0], [19.5, 484.0], [19.6, 485.0], [19.7, 485.0], [19.8, 489.0], [19.9, 490.0], [20.0, 490.0], [20.1, 490.0], [20.2, 491.0], [20.3, 492.0], [20.4, 492.0], [20.5, 492.0], [20.6, 493.0], [20.7, 494.0], [20.8, 494.0], [20.9, 494.0], [21.0, 495.0], [21.1, 496.0], [21.2, 496.0], [21.3, 496.0], [21.4, 500.0], [21.5, 500.0], [21.6, 500.0], [21.7, 500.0], [21.8, 500.0], [21.9, 500.0], [22.0, 500.0], [22.1, 501.0], [22.2, 502.0], [22.3, 502.0], [22.4, 502.0], [22.5, 503.0], [22.6, 505.0], [22.7, 505.0], [22.8, 506.0], [22.9, 508.0], [23.0, 509.0], [23.1, 509.0], [23.2, 510.0], [23.3, 511.0], [23.4, 511.0], [23.5, 512.0], [23.6, 512.0], [23.7, 513.0], [23.8, 513.0], [23.9, 514.0], [24.0, 514.0], [24.1, 514.0], [24.2, 514.0], [24.3, 515.0], [24.4, 517.0], [24.5, 517.0], [24.6, 517.0], [24.7, 517.0], [24.8, 517.0], [24.9, 517.0], [25.0, 517.0], [25.1, 520.0], [25.2, 520.0], [25.3, 520.0], [25.4, 520.0], [25.5, 521.0], [25.6, 521.0], [25.7, 521.0], [25.8, 522.0], [25.9, 524.0], [26.0, 525.0], [26.1, 525.0], [26.2, 526.0], [26.3, 526.0], [26.4, 526.0], [26.5, 526.0], [26.6, 527.0], [26.7, 529.0], [26.8, 529.0], [26.9, 529.0], [27.0, 530.0], [27.1, 530.0], [27.2, 530.0], [27.3, 530.0], [27.4, 531.0], [27.5, 531.0], [27.6, 531.0], [27.7, 531.0], [27.8, 532.0], [27.9, 534.0], [28.0, 534.0], [28.1, 535.0], [28.2, 535.0], [28.3, 536.0], [28.4, 536.0], [28.5, 536.0], [28.6, 536.0], [28.7, 536.0], [28.8, 537.0], [28.9, 538.0], [29.0, 538.0], [29.1, 538.0], [29.2, 541.0], [29.3, 541.0], [29.4, 545.0], [29.5, 545.0], [29.6, 545.0], [29.7, 545.0], [29.8, 545.0], [29.9, 545.0], [30.0, 545.0], [30.1, 546.0], [30.2, 546.0], [30.3, 547.0], [30.4, 547.0], [30.5, 547.0], [30.6, 547.0], [30.7, 547.0], [30.8, 548.0], [30.9, 549.0], [31.0, 549.0], [31.1, 549.0], [31.2, 549.0], [31.3, 550.0], [31.4, 550.0], [31.5, 551.0], [31.6, 551.0], [31.7, 551.0], [31.8, 552.0], [31.9, 557.0], [32.0, 558.0], [32.1, 558.0], [32.2, 558.0], [32.3, 558.0], [32.4, 558.0], [32.5, 558.0], [32.6, 559.0], [32.7, 559.0], [32.8, 561.0], [32.9, 561.0], [33.0, 562.0], [33.1, 564.0], [33.2, 564.0], [33.3, 564.0], [33.4, 564.0], [33.5, 564.0], [33.6, 564.0], [33.7, 566.0], [33.8, 566.0], [33.9, 567.0], [34.0, 567.0], [34.1, 567.0], [34.2, 567.0], [34.3, 568.0], [34.4, 568.0], [34.5, 569.0], [34.6, 570.0], [34.7, 570.0], [34.8, 570.0], [34.9, 571.0], [35.0, 572.0], [35.1, 572.0], [35.2, 573.0], [35.3, 574.0], [35.4, 580.0], [35.5, 580.0], [35.6, 582.0], [35.7, 582.0], [35.8, 584.0], [35.9, 584.0], [36.0, 584.0], [36.1, 586.0], [36.2, 586.0], [36.3, 586.0], [36.4, 587.0], [36.5, 588.0], [36.6, 588.0], [36.7, 588.0], [36.8, 590.0], [36.9, 593.0], [37.0, 593.0], [37.1, 593.0], [37.2, 594.0], [37.3, 595.0], [37.4, 595.0], [37.5, 595.0], [37.6, 597.0], [37.7, 599.0], [37.8, 599.0], [37.9, 601.0], [38.0, 604.0], [38.1, 608.0], [38.2, 608.0], [38.3, 608.0], [38.4, 608.0], [38.5, 608.0], [38.6, 611.0], [38.7, 611.0], [38.8, 614.0], [38.9, 614.0], [39.0, 615.0], [39.1, 615.0], [39.2, 617.0], [39.3, 617.0], [39.4, 618.0], [39.5, 619.0], [39.6, 620.0], [39.7, 620.0], [39.8, 620.0], [39.9, 621.0], [40.0, 621.0], [40.1, 621.0], [40.2, 623.0], [40.3, 623.0], [40.4, 623.0], [40.5, 632.0], [40.6, 633.0], [40.7, 634.0], [40.8, 634.0], [40.9, 637.0], [41.0, 641.0], [41.1, 641.0], [41.2, 641.0], [41.3, 645.0], [41.4, 646.0], [41.5, 649.0], [41.6, 649.0], [41.7, 653.0], [41.8, 654.0], [41.9, 654.0], [42.0, 655.0], [42.1, 662.0], [42.2, 674.0], [42.3, 674.0], [42.4, 675.0], [42.5, 679.0], [42.6, 681.0], [42.7, 681.0], [42.8, 687.0], [42.9, 693.0], [43.0, 693.0], [43.1, 693.0], [43.2, 694.0], [43.3, 695.0], [43.4, 695.0], [43.5, 696.0], [43.6, 700.0], [43.7, 700.0], [43.8, 700.0], [43.9, 703.0], [44.0, 705.0], [44.1, 706.0], [44.2, 706.0], [44.3, 709.0], [44.4, 710.0], [44.5, 714.0], [44.6, 714.0], [44.7, 718.0], [44.8, 722.0], [44.9, 722.0], [45.0, 722.0], [45.1, 723.0], [45.2, 725.0], [45.3, 725.0], [45.4, 731.0], [45.5, 732.0], [45.6, 732.0], [45.7, 732.0], [45.8, 733.0], [45.9, 740.0], [46.0, 744.0], [46.1, 744.0], [46.2, 748.0], [46.3, 755.0], [46.4, 755.0], [46.5, 755.0], [46.6, 757.0], [46.7, 758.0], [46.8, 758.0], [46.9, 765.0], [47.0, 769.0], [47.1, 770.0], [47.2, 770.0], [47.3, 770.0], [47.4, 773.0], [47.5, 774.0], [47.6, 774.0], [47.7, 778.0], [47.8, 781.0], [47.9, 792.0], [48.0, 792.0], [48.1, 793.0], [48.2, 799.0], [48.3, 803.0], [48.4, 803.0], [48.5, 803.0], [48.6, 805.0], [48.7, 805.0], [48.8, 810.0], [48.9, 813.0], [49.0, 814.0], [49.1, 814.0], [49.2, 817.0], [49.3, 821.0], [49.4, 822.0], [49.5, 822.0], [49.6, 822.0], [49.7, 822.0], [49.8, 826.0], [49.9, 826.0], [50.0, 829.0], [50.1, 832.0], [50.2, 832.0], [50.3, 833.0], [50.4, 833.0], [50.5, 834.0], [50.6, 834.0], [50.7, 840.0], [50.8, 840.0], [50.9, 841.0], [51.0, 841.0], [51.1, 842.0], [51.2, 843.0], [51.3, 844.0], [51.4, 844.0], [51.5, 844.0], [51.6, 847.0], [51.7, 847.0], [51.8, 847.0], [51.9, 848.0], [52.0, 850.0], [52.1, 850.0], [52.2, 852.0], [52.3, 859.0], [52.4, 859.0], [52.5, 859.0], [52.6, 860.0], [52.7, 861.0], [52.8, 861.0], [52.9, 861.0], [53.0, 862.0], [53.1, 864.0], [53.2, 868.0], [53.3, 868.0], [53.4, 872.0], [53.5, 874.0], [53.6, 874.0], [53.7, 875.0], [53.8, 886.0], [53.9, 894.0], [54.0, 894.0], [54.1, 896.0], [54.2, 904.0], [54.3, 904.0], [54.4, 904.0], [54.5, 905.0], [54.6, 919.0], [54.7, 932.0], [54.8, 932.0], [54.9, 939.0], [55.0, 939.0], [55.1, 939.0], [55.2, 943.0], [55.3, 945.0], [55.4, 946.0], [55.5, 946.0], [55.6, 951.0], [55.7, 951.0], [55.8, 951.0], [55.9, 951.0], [56.0, 952.0], [56.1, 956.0], [56.2, 956.0], [56.3, 956.0], [56.4, 959.0], [56.5, 959.0], [56.6, 970.0], [56.7, 970.0], [56.8, 972.0], [56.9, 972.0], [57.0, 972.0], [57.1, 974.0], [57.2, 975.0], [57.3, 976.0], [57.4, 976.0], [57.5, 979.0], [57.6, 980.0], [57.7, 982.0], [57.8, 982.0], [57.9, 983.0], [58.0, 987.0], [58.1, 987.0], [58.2, 987.0], [58.3, 990.0], [58.4, 992.0], [58.5, 992.0], [58.6, 997.0], [58.7, 1000.0], [58.8, 1002.0], [58.9, 1002.0], [59.0, 1002.0], [59.1, 1002.0], [59.2, 1003.0], [59.3, 1003.0], [59.4, 1003.0], [59.5, 1003.0], [59.6, 1004.0], [59.7, 1004.0], [59.8, 1004.0], [59.9, 1005.0], [60.0, 1006.0], [60.1, 1006.0], [60.2, 1007.0], [60.3, 1008.0], [60.4, 1008.0], [60.5, 1008.0], [60.6, 1009.0], [60.7, 1009.0], [60.8, 1009.0], [60.9, 1009.0], [61.0, 1012.0], [61.1, 1013.0], [61.2, 1013.0], [61.3, 1014.0], [61.4, 1015.0], [61.5, 1015.0], [61.6, 1015.0], [61.7, 1017.0], [61.8, 1017.0], [61.9, 1017.0], [62.0, 1017.0], [62.1, 1018.0], [62.2, 1018.0], [62.3, 1018.0], [62.4, 1019.0], [62.5, 1019.0], [62.6, 1019.0], [62.7, 1019.0], [62.8, 1020.0], [62.9, 1021.0], [63.0, 1021.0], [63.1, 1021.0], [63.2, 1022.0], [63.3, 1022.0], [63.4, 1022.0], [63.5, 1022.0], [63.6, 1022.0], [63.7, 1023.0], [63.8, 1023.0], [63.9, 1023.0], [64.0, 1023.0], [64.1, 1024.0], [64.2, 1024.0], [64.3, 1024.0], [64.4, 1024.0], [64.5, 1025.0], [64.6, 1025.0], [64.7, 1025.0], [64.8, 1026.0], [64.9, 1027.0], [65.0, 1027.0], [65.1, 1028.0], [65.2, 1031.0], [65.3, 1031.0], [65.4, 1033.0], [65.5, 1033.0], [65.6, 1033.0], [65.7, 1033.0], [65.8, 1038.0], [65.9, 1038.0], [66.0, 1039.0], [66.1, 1039.0], [66.2, 1039.0], [66.3, 1039.0], [66.4, 1040.0], [66.5, 1040.0], [66.6, 1040.0], [66.7, 1041.0], [66.8, 1041.0], [66.9, 1041.0], [67.0, 1045.0], [67.1, 1046.0], [67.2, 1046.0], [67.3, 1046.0], [67.4, 1047.0], [67.5, 1047.0], [67.6, 1047.0], [67.7, 1048.0], [67.8, 1050.0], [67.9, 1051.0], [68.0, 1051.0], [68.1, 1052.0], [68.2, 1053.0], [68.3, 1054.0], [68.4, 1054.0], [68.5, 1054.0], [68.6, 1055.0], [68.7, 1055.0], [68.8, 1055.0], [68.9, 1055.0], [69.0, 1055.0], [69.1, 1055.0], [69.2, 1055.0], [69.3, 1056.0], [69.4, 1057.0], [69.5, 1057.0], [69.6, 1057.0], [69.7, 1058.0], [69.8, 1058.0], [69.9, 1058.0], [70.0, 1059.0], [70.1, 1060.0], [70.2, 1060.0], [70.3, 1060.0], [70.4, 1062.0], [70.5, 1062.0], [70.6, 1062.0], [70.7, 1063.0], [70.8, 1066.0], [70.9, 1067.0], [71.0, 1067.0], [71.1, 1071.0], [71.2, 1071.0], [71.3, 1072.0], [71.4, 1072.0], [71.5, 1072.0], [71.6, 1073.0], [71.7, 1073.0], [71.8, 1074.0], [71.9, 1074.0], [72.0, 1075.0], [72.1, 1075.0], [72.2, 1075.0], [72.3, 1075.0], [72.4, 1076.0], [72.5, 1076.0], [72.6, 1077.0], [72.7, 1077.0], [72.8, 1078.0], [72.9, 1078.0], [73.0, 1079.0], [73.1, 1079.0], [73.2, 1080.0], [73.3, 1080.0], [73.4, 1080.0], [73.5, 1081.0], [73.6, 1081.0], [73.7, 1081.0], [73.8, 1081.0], [73.9, 1082.0], [74.0, 1082.0], [74.1, 1082.0], [74.2, 1082.0], [74.3, 1083.0], [74.4, 1083.0], [74.5, 1083.0], [74.6, 1084.0], [74.7, 1084.0], [74.8, 1084.0], [74.9, 1084.0], [75.0, 1084.0], [75.1, 1084.0], [75.2, 1084.0], [75.3, 1084.0], [75.4, 1085.0], [75.5, 1085.0], [75.6, 1085.0], [75.7, 1086.0], [75.8, 1088.0], [75.9, 1088.0], [76.0, 1089.0], [76.1, 1089.0], [76.2, 1090.0], [76.3, 1090.0], [76.4, 1091.0], [76.5, 1091.0], [76.6, 1092.0], [76.7, 1092.0], [76.8, 1093.0], [76.9, 1094.0], [77.0, 1094.0], [77.1, 1095.0], [77.2, 1095.0], [77.3, 1096.0], [77.4, 1096.0], [77.5, 1096.0], [77.6, 1096.0], [77.7, 1097.0], [77.8, 1097.0], [77.9, 1097.0], [78.0, 1098.0], [78.1, 1098.0], [78.2, 1098.0], [78.3, 1099.0], [78.4, 1101.0], [78.5, 1101.0], [78.6, 1101.0], [78.7, 1101.0], [78.8, 1102.0], [78.9, 1102.0], [79.0, 1102.0], [79.1, 1102.0], [79.2, 1105.0], [79.3, 1105.0], [79.4, 1105.0], [79.5, 1106.0], [79.6, 1107.0], [79.7, 1107.0], [79.8, 1109.0], [79.9, 1110.0], [80.0, 1110.0], [80.1, 1110.0], [80.2, 1111.0], [80.3, 1111.0], [80.4, 1111.0], [80.5, 1112.0], [80.6, 1112.0], [80.7, 1112.0], [80.8, 1112.0], [80.9, 1112.0], [81.0, 1114.0], [81.1, 1114.0], [81.2, 1114.0], [81.3, 1115.0], [81.4, 1115.0], [81.5, 1117.0], [81.6, 1117.0], [81.7, 1120.0], [81.8, 1120.0], [81.9, 1120.0], [82.0, 1123.0], [82.1, 1124.0], [82.2, 1126.0], [82.3, 1126.0], [82.4, 1126.0], [82.5, 1126.0], [82.6, 1127.0], [82.7, 1127.0], [82.8, 1127.0], [82.9, 1129.0], [83.0, 1131.0], [83.1, 1131.0], [83.2, 1132.0], [83.3, 1133.0], [83.4, 1133.0], [83.5, 1135.0], [83.6, 1136.0], [83.7, 1138.0], [83.8, 1138.0], [83.9, 1138.0], [84.0, 1140.0], [84.1, 1141.0], [84.2, 1141.0], [84.3, 1141.0], [84.4, 1141.0], [84.5, 1145.0], [84.6, 1145.0], [84.7, 1150.0], [84.8, 1153.0], [84.9, 1153.0], [85.0, 1153.0], [85.1, 1156.0], [85.2, 1156.0], [85.3, 1156.0], [85.4, 1157.0], [85.5, 1162.0], [85.6, 1162.0], [85.7, 1162.0], [85.8, 1164.0], [85.9, 1166.0], [86.0, 1167.0], [86.1, 1167.0], [86.2, 1168.0], [86.3, 1171.0], [86.4, 1175.0], [86.5, 1175.0], [86.6, 1175.0], [86.7, 1177.0], [86.8, 1177.0], [86.9, 1177.0], [87.0, 1178.0], [87.1, 1181.0], [87.2, 1181.0], [87.3, 1182.0], [87.4, 1186.0], [87.5, 1186.0], [87.6, 1186.0], [87.7, 1186.0], [87.8, 1188.0], [87.9, 1189.0], [88.0, 1189.0], [88.1, 1190.0], [88.2, 1190.0], [88.3, 1190.0], [88.4, 1190.0], [88.5, 1191.0], [88.6, 1193.0], [88.7, 1193.0], [88.8, 1196.0], [88.9, 1198.0], [89.0, 1200.0], [89.1, 1200.0], [89.2, 1204.0], [89.3, 1205.0], [89.4, 1213.0], [89.5, 1213.0], [89.6, 1214.0], [89.7, 1216.0], [89.8, 1220.0], [89.9, 1220.0], [90.0, 1224.0], [90.1, 1227.0], [90.2, 1227.0], [90.3, 1227.0], [90.4, 1230.0], [90.5, 1230.0], [90.6, 1230.0], [90.7, 1231.0], [90.8, 1234.0], [90.9, 1238.0], [91.0, 1238.0], [91.1, 1239.0], [91.2, 1239.0], [91.3, 1241.0], [91.4, 1241.0], [91.5, 1246.0], [91.6, 1250.0], [91.7, 1250.0], [91.8, 1252.0], [91.9, 1254.0], [92.0, 1256.0], [92.1, 1256.0], [92.2, 1257.0], [92.3, 1261.0], [92.4, 1263.0], [92.5, 1263.0], [92.6, 1264.0], [92.7, 1266.0], [92.8, 1268.0], [92.9, 1268.0], [93.0, 1268.0], [93.1, 1289.0], [93.2, 1293.0], [93.3, 1293.0], [93.4, 1304.0], [93.5, 1305.0], [93.6, 1305.0], [93.7, 1308.0], [93.8, 1310.0], [93.9, 1311.0], [94.0, 1311.0], [94.1, 1317.0], [94.2, 1318.0], [94.3, 1318.0], [94.4, 1318.0], [94.5, 1319.0], [94.6, 1322.0], [94.7, 1324.0], [94.8, 1324.0], [94.9, 1325.0], [95.0, 1325.0], [95.1, 1325.0], [95.2, 1330.0], [95.3, 1337.0], [95.4, 1346.0], [95.5, 1346.0], [95.6, 1358.0], [95.7, 1370.0], [95.8, 1382.0], [95.9, 1382.0], [96.0, 1404.0], [96.1, 1417.0], [96.2, 1427.0], [96.3, 1427.0], [96.4, 1447.0], [96.5, 1452.0], [96.6, 1456.0], [96.7, 1456.0], [96.8, 1458.0], [96.9, 1464.0], [97.0, 1464.0], [97.1, 1466.0], [97.2, 1487.0], [97.3, 1509.0], [97.4, 1509.0], [97.5, 1520.0], [97.6, 1551.0], [97.7, 1559.0], [97.8, 1559.0], [97.9, 1654.0], [98.0, 1661.0], [98.1, 1852.0], [98.2, 1852.0], [98.3, 1928.0], [98.4, 1969.0], [98.5, 1969.0], [98.6, 1978.0], [98.7, 2041.0], [98.8, 2074.0], [98.9, 2074.0], [99.0, 2154.0], [99.1, 2200.0], [99.2, 2410.0], [99.3, 2410.0], [99.4, 2453.0], [99.5, 2502.0], [99.6, 2580.0], [99.7, 2580.0], [99.8, 3079.0], [99.9, 3241.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 145.0, "series": [{"data": [[600.0, 42.0], [700.0, 35.0], [800.0, 43.0], [900.0, 33.0], [1000.0, 145.0], [1100.0, 78.0], [1200.0, 32.0], [1300.0, 19.0], [1400.0, 10.0], [1500.0, 4.0], [100.0, 20.0], [1600.0, 2.0], [1800.0, 1.0], [1900.0, 3.0], [2000.0, 2.0], [2100.0, 1.0], [2200.0, 1.0], [2400.0, 2.0], [2500.0, 2.0], [3000.0, 1.0], [200.0, 44.0], [3200.0, 1.0], [300.0, 44.0], [400.0, 49.0], [500.0, 121.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 553.0, "series": [{"data": [[0.0, 162.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 553.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 20.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.51086956521739, "minX": 1.60237512E12, "maxY": 9.998444790046657, "series": [{"data": [[1.60237512E12, 9.998444790046657], [1.60237518E12, 9.51086956521739]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237518E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 241.0, "minX": 1.0, "maxY": 1305.0, "series": [{"data": [[8.0, 437.0], [4.0, 388.0], [2.0, 1024.0], [1.0, 1013.0], [9.0, 472.5], [10.0, 821.0551724137929], [5.0, 1305.0], [6.0, 441.0], [3.0, 558.0], [7.0, 241.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.937414965986395, 818.5265306122449]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 699.2166666666667, "minX": 1.60237512E12, "maxY": 1541797.6666666667, "series": [{"data": [[1.60237512E12, 1541797.6666666667], [1.60237518E12, 195121.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237512E12, 4970.816666666667], [1.60237518E12, 699.2166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237518E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 675.3369565217388, "minX": 1.60237512E12, "maxY": 839.0139968895799, "series": [{"data": [[1.60237512E12, 839.0139968895799], [1.60237518E12, 675.3369565217388]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237518E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 674.163043478261, "minX": 1.60237512E12, "maxY": 837.8024883359245, "series": [{"data": [[1.60237512E12, 837.8024883359245], [1.60237518E12, 674.163043478261]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237518E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.021739130434782608, "minX": 1.60237512E12, "maxY": 0.13841368584758926, "series": [{"data": [[1.60237512E12, 0.13841368584758926], [1.60237518E12, 0.021739130434782608]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237518E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 146.0, "minX": 1.60237512E12, "maxY": 3241.0, "series": [{"data": [[1.60237512E12, 3241.0], [1.60237518E12, 2074.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237512E12, 155.0], [1.60237518E12, 152.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237512E12, 156.87800030708314], [1.60237518E12, 152.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237512E12, 155.5899996161461], [1.60237518E12, 152.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237512E12, 146.0], [1.60237518E12, 152.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237512E12, 859.0], [1.60237518E12, 639.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237518E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 312.5, "minX": 2.0, "maxY": 2200.0, "series": [{"data": [[2.0, 861.0], [9.0, 1056.0], [10.0, 1071.0], [11.0, 1010.5], [12.0, 1033.0], [13.0, 732.0], [14.0, 637.0], [15.0, 449.0], [4.0, 312.5], [16.0, 565.0], [18.0, 527.5], [19.0, 599.0], [5.0, 2200.0], [20.0, 492.5], [22.0, 422.5], [7.0, 952.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 312.0, "minX": 2.0, "maxY": 2198.0, "series": [{"data": [[2.0, 855.0], [9.0, 1056.0], [10.0, 1070.0], [11.0, 1009.5], [12.0, 1032.5], [13.0, 732.0], [14.0, 635.5], [15.0, 449.0], [4.0, 312.0], [16.0, 564.0], [18.0, 525.5], [19.0, 598.0], [5.0, 2198.0], [20.0, 492.0], [22.0, 422.0], [7.0, 949.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.3666666666666667, "minX": 1.60237512E12, "maxY": 10.883333333333333, "series": [{"data": [[1.60237512E12, 10.883333333333333], [1.60237518E12, 1.3666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237518E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.5333333333333334, "minX": 1.60237512E12, "maxY": 10.716666666666667, "series": [{"data": [[1.60237512E12, 10.716666666666667], [1.60237518E12, 1.5333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237518E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.5333333333333334, "minX": 1.60237512E12, "maxY": 10.716666666666667, "series": [{"data": [[1.60237512E12, 10.716666666666667], [1.60237518E12, 1.5333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237518E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.5333333333333334, "minX": 1.60237512E12, "maxY": 10.716666666666667, "series": [{"data": [[1.60237512E12, 10.716666666666667], [1.60237518E12, 1.5333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237518E12, "title": "Total Transactions Per Second"}},
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

