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
        data: {"result": {"minY": 127.0, "minX": 0.0, "maxY": 2866.0, "series": [{"data": [[0.0, 127.0], [0.1, 127.0], [0.2, 134.0], [0.3, 137.0], [0.4, 137.0], [0.5, 138.0], [0.6, 140.0], [0.7, 144.0], [0.8, 144.0], [0.9, 149.0], [1.0, 149.0], [1.1, 150.0], [1.2, 150.0], [1.3, 150.0], [1.4, 152.0], [1.5, 153.0], [1.6, 153.0], [1.7, 155.0], [1.8, 156.0], [1.9, 156.0], [2.0, 159.0], [2.1, 163.0], [2.2, 172.0], [2.3, 172.0], [2.4, 178.0], [2.5, 190.0], [2.6, 205.0], [2.7, 205.0], [2.8, 207.0], [2.9, 213.0], [3.0, 216.0], [3.1, 216.0], [3.2, 218.0], [3.3, 218.0], [3.4, 218.0], [3.5, 225.0], [3.6, 225.0], [3.7, 228.0], [3.8, 228.0], [3.9, 229.0], [4.0, 232.0], [4.1, 232.0], [4.2, 232.0], [4.3, 232.0], [4.4, 234.0], [4.5, 235.0], [4.6, 235.0], [4.7, 235.0], [4.8, 237.0], [4.9, 239.0], [5.0, 239.0], [5.1, 239.0], [5.2, 239.0], [5.3, 239.0], [5.4, 239.0], [5.5, 240.0], [5.6, 240.0], [5.7, 240.0], [5.8, 242.0], [5.9, 243.0], [6.0, 244.0], [6.1, 244.0], [6.2, 245.0], [6.3, 247.0], [6.4, 251.0], [6.5, 251.0], [6.6, 257.0], [6.7, 259.0], [6.8, 259.0], [6.9, 262.0], [7.0, 264.0], [7.1, 264.0], [7.2, 264.0], [7.3, 264.0], [7.4, 266.0], [7.5, 268.0], [7.6, 268.0], [7.7, 276.0], [7.8, 279.0], [7.9, 288.0], [8.0, 288.0], [8.1, 291.0], [8.2, 293.0], [8.3, 299.0], [8.4, 299.0], [8.5, 302.0], [8.6, 308.0], [8.7, 308.0], [8.8, 311.0], [8.9, 314.0], [9.0, 318.0], [9.1, 318.0], [9.2, 329.0], [9.3, 329.0], [9.4, 330.0], [9.5, 330.0], [9.6, 334.0], [9.7, 335.0], [9.8, 336.0], [9.9, 336.0], [10.0, 337.0], [10.1, 341.0], [10.2, 341.0], [10.3, 343.0], [10.4, 344.0], [10.5, 345.0], [10.6, 345.0], [10.7, 348.0], [10.8, 349.0], [10.9, 352.0], [11.0, 352.0], [11.1, 352.0], [11.2, 357.0], [11.3, 361.0], [11.4, 361.0], [11.5, 362.0], [11.6, 365.0], [11.7, 365.0], [11.8, 367.0], [11.9, 371.0], [12.0, 376.0], [12.1, 376.0], [12.2, 378.0], [12.3, 380.0], [12.4, 380.0], [12.5, 380.0], [12.6, 382.0], [12.7, 385.0], [12.8, 387.0], [12.9, 387.0], [13.0, 388.0], [13.1, 389.0], [13.2, 393.0], [13.3, 393.0], [13.4, 394.0], [13.5, 396.0], [13.6, 396.0], [13.7, 405.0], [13.8, 405.0], [13.9, 405.0], [14.0, 405.0], [14.1, 406.0], [14.2, 410.0], [14.3, 412.0], [14.4, 412.0], [14.5, 417.0], [14.6, 420.0], [14.7, 420.0], [14.8, 420.0], [14.9, 424.0], [15.0, 426.0], [15.1, 426.0], [15.2, 432.0], [15.3, 432.0], [15.4, 439.0], [15.5, 439.0], [15.6, 439.0], [15.7, 445.0], [15.8, 446.0], [15.9, 446.0], [16.0, 447.0], [16.1, 453.0], [16.2, 456.0], [16.3, 456.0], [16.4, 462.0], [16.5, 464.0], [16.6, 467.0], [16.7, 467.0], [16.8, 468.0], [16.9, 469.0], [17.0, 469.0], [17.1, 471.0], [17.2, 472.0], [17.3, 475.0], [17.4, 475.0], [17.5, 476.0], [17.6, 478.0], [17.7, 478.0], [17.8, 478.0], [17.9, 478.0], [18.0, 480.0], [18.1, 481.0], [18.2, 481.0], [18.3, 483.0], [18.4, 484.0], [18.5, 484.0], [18.6, 489.0], [18.7, 490.0], [18.8, 490.0], [18.9, 490.0], [19.0, 492.0], [19.1, 496.0], [19.2, 498.0], [19.3, 498.0], [19.4, 498.0], [19.5, 498.0], [19.6, 499.0], [19.7, 499.0], [19.8, 501.0], [19.9, 505.0], [20.0, 506.0], [20.1, 506.0], [20.2, 506.0], [20.3, 507.0], [20.4, 507.0], [20.5, 507.0], [20.6, 515.0], [20.7, 515.0], [20.8, 515.0], [20.9, 517.0], [21.0, 519.0], [21.1, 519.0], [21.2, 519.0], [21.3, 519.0], [21.4, 520.0], [21.5, 521.0], [21.6, 521.0], [21.7, 521.0], [21.8, 522.0], [21.9, 522.0], [22.0, 522.0], [22.1, 524.0], [22.2, 524.0], [22.3, 524.0], [22.4, 525.0], [22.5, 526.0], [22.6, 530.0], [22.7, 530.0], [22.8, 531.0], [22.9, 533.0], [23.0, 534.0], [23.1, 534.0], [23.2, 535.0], [23.3, 535.0], [23.4, 535.0], [23.5, 535.0], [23.6, 536.0], [23.7, 536.0], [23.8, 536.0], [23.9, 538.0], [24.0, 538.0], [24.1, 539.0], [24.2, 539.0], [24.3, 539.0], [24.4, 540.0], [24.5, 541.0], [24.6, 541.0], [24.7, 542.0], [24.8, 542.0], [24.9, 542.0], [25.0, 542.0], [25.1, 543.0], [25.2, 544.0], [25.3, 544.0], [25.4, 546.0], [25.5, 547.0], [25.6, 547.0], [25.7, 547.0], [25.8, 547.0], [25.9, 548.0], [26.0, 548.0], [26.1, 548.0], [26.2, 548.0], [26.3, 549.0], [26.4, 549.0], [26.5, 549.0], [26.6, 549.0], [26.7, 550.0], [26.8, 550.0], [26.9, 551.0], [27.0, 551.0], [27.1, 552.0], [27.2, 552.0], [27.3, 552.0], [27.4, 554.0], [27.5, 554.0], [27.6, 554.0], [27.7, 555.0], [27.8, 556.0], [27.9, 556.0], [28.0, 556.0], [28.1, 557.0], [28.2, 557.0], [28.3, 557.0], [28.4, 557.0], [28.5, 558.0], [28.6, 559.0], [28.7, 559.0], [28.8, 559.0], [28.9, 560.0], [29.0, 560.0], [29.1, 560.0], [29.2, 561.0], [29.3, 561.0], [29.4, 564.0], [29.5, 564.0], [29.6, 565.0], [29.7, 566.0], [29.8, 568.0], [29.9, 568.0], [30.0, 569.0], [30.1, 570.0], [30.2, 570.0], [30.3, 570.0], [30.4, 571.0], [30.5, 572.0], [30.6, 572.0], [30.7, 573.0], [30.8, 574.0], [30.9, 574.0], [31.0, 574.0], [31.1, 575.0], [31.2, 576.0], [31.3, 577.0], [31.4, 577.0], [31.5, 577.0], [31.6, 577.0], [31.7, 577.0], [31.8, 577.0], [31.9, 579.0], [32.0, 579.0], [32.1, 579.0], [32.2, 582.0], [32.3, 582.0], [32.4, 582.0], [32.5, 582.0], [32.6, 583.0], [32.7, 583.0], [32.8, 584.0], [32.9, 584.0], [33.0, 585.0], [33.1, 586.0], [33.2, 587.0], [33.3, 587.0], [33.4, 588.0], [33.5, 589.0], [33.6, 589.0], [33.7, 590.0], [33.8, 591.0], [33.9, 591.0], [34.0, 591.0], [34.1, 594.0], [34.2, 594.0], [34.3, 594.0], [34.4, 594.0], [34.5, 596.0], [34.6, 598.0], [34.7, 599.0], [34.8, 599.0], [34.9, 599.0], [35.0, 601.0], [35.1, 601.0], [35.2, 603.0], [35.3, 603.0], [35.4, 605.0], [35.5, 605.0], [35.6, 607.0], [35.7, 608.0], [35.8, 610.0], [35.9, 610.0], [36.0, 611.0], [36.1, 616.0], [36.2, 618.0], [36.3, 618.0], [36.4, 619.0], [36.5, 621.0], [36.6, 625.0], [36.7, 625.0], [36.8, 628.0], [36.9, 634.0], [37.0, 634.0], [37.1, 637.0], [37.2, 645.0], [37.3, 646.0], [37.4, 646.0], [37.5, 647.0], [37.6, 649.0], [37.7, 649.0], [37.8, 649.0], [37.9, 651.0], [38.0, 656.0], [38.1, 659.0], [38.2, 659.0], [38.3, 659.0], [38.4, 660.0], [38.5, 660.0], [38.6, 662.0], [38.7, 664.0], [38.8, 664.0], [38.9, 664.0], [39.0, 667.0], [39.1, 669.0], [39.2, 677.0], [39.3, 677.0], [39.4, 678.0], [39.5, 678.0], [39.6, 679.0], [39.7, 679.0], [39.8, 679.0], [39.9, 682.0], [40.0, 685.0], [40.1, 685.0], [40.2, 686.0], [40.3, 687.0], [40.4, 687.0], [40.5, 688.0], [40.6, 689.0], [40.7, 690.0], [40.8, 690.0], [40.9, 691.0], [41.0, 697.0], [41.1, 699.0], [41.2, 699.0], [41.3, 702.0], [41.4, 703.0], [41.5, 704.0], [41.6, 704.0], [41.7, 709.0], [41.8, 713.0], [41.9, 713.0], [42.0, 715.0], [42.1, 715.0], [42.2, 716.0], [42.3, 716.0], [42.4, 716.0], [42.5, 719.0], [42.6, 719.0], [42.7, 719.0], [42.8, 720.0], [42.9, 727.0], [43.0, 727.0], [43.1, 727.0], [43.2, 730.0], [43.3, 737.0], [43.4, 737.0], [43.5, 737.0], [43.6, 738.0], [43.7, 740.0], [43.8, 740.0], [43.9, 740.0], [44.0, 742.0], [44.1, 743.0], [44.2, 743.0], [44.3, 746.0], [44.4, 750.0], [44.5, 755.0], [44.6, 755.0], [44.7, 756.0], [44.8, 770.0], [44.9, 776.0], [45.0, 776.0], [45.1, 776.0], [45.2, 777.0], [45.3, 777.0], [45.4, 781.0], [45.5, 784.0], [45.6, 785.0], [45.7, 785.0], [45.8, 788.0], [45.9, 794.0], [46.0, 799.0], [46.1, 799.0], [46.2, 809.0], [46.3, 809.0], [46.4, 819.0], [46.5, 819.0], [46.6, 821.0], [46.7, 822.0], [46.8, 822.0], [46.9, 823.0], [47.0, 823.0], [47.1, 830.0], [47.2, 830.0], [47.3, 834.0], [47.4, 838.0], [47.5, 838.0], [47.6, 838.0], [47.7, 849.0], [47.8, 849.0], [47.9, 852.0], [48.0, 852.0], [48.1, 855.0], [48.2, 855.0], [48.3, 856.0], [48.4, 856.0], [48.5, 862.0], [48.6, 868.0], [48.7, 868.0], [48.8, 874.0], [48.9, 875.0], [49.0, 880.0], [49.1, 880.0], [49.2, 891.0], [49.3, 892.0], [49.4, 895.0], [49.5, 895.0], [49.6, 899.0], [49.7, 900.0], [49.8, 900.0], [49.9, 900.0], [50.0, 903.0], [50.1, 906.0], [50.2, 906.0], [50.3, 908.0], [50.4, 909.0], [50.5, 912.0], [50.6, 912.0], [50.7, 913.0], [50.8, 915.0], [50.9, 917.0], [51.0, 917.0], [51.1, 918.0], [51.2, 919.0], [51.3, 922.0], [51.4, 922.0], [51.5, 925.0], [51.6, 928.0], [51.7, 928.0], [51.8, 930.0], [51.9, 931.0], [52.0, 942.0], [52.1, 942.0], [52.2, 951.0], [52.3, 951.0], [52.4, 957.0], [52.5, 957.0], [52.6, 961.0], [52.7, 962.0], [52.8, 962.0], [52.9, 962.0], [53.0, 962.0], [53.1, 964.0], [53.2, 966.0], [53.3, 966.0], [53.4, 970.0], [53.5, 971.0], [53.6, 971.0], [53.7, 971.0], [53.8, 971.0], [53.9, 980.0], [54.0, 980.0], [54.1, 981.0], [54.2, 982.0], [54.3, 982.0], [54.4, 982.0], [54.5, 982.0], [54.6, 988.0], [54.7, 990.0], [54.8, 990.0], [54.9, 994.0], [55.0, 999.0], [55.1, 999.0], [55.2, 1004.0], [55.3, 1009.0], [55.4, 1011.0], [55.5, 1011.0], [55.6, 1016.0], [55.7, 1020.0], [55.8, 1022.0], [55.9, 1022.0], [56.0, 1026.0], [56.1, 1028.0], [56.2, 1038.0], [56.3, 1038.0], [56.4, 1038.0], [56.5, 1039.0], [56.6, 1042.0], [56.7, 1042.0], [56.8, 1045.0], [56.9, 1048.0], [57.0, 1048.0], [57.1, 1050.0], [57.2, 1054.0], [57.3, 1055.0], [57.4, 1055.0], [57.5, 1058.0], [57.6, 1061.0], [57.7, 1061.0], [57.8, 1061.0], [57.9, 1062.0], [58.0, 1062.0], [58.1, 1065.0], [58.2, 1065.0], [58.3, 1069.0], [58.4, 1069.0], [58.5, 1069.0], [58.6, 1070.0], [58.7, 1070.0], [58.8, 1072.0], [58.9, 1072.0], [59.0, 1075.0], [59.1, 1078.0], [59.2, 1080.0], [59.3, 1080.0], [59.4, 1081.0], [59.5, 1084.0], [59.6, 1084.0], [59.7, 1084.0], [59.8, 1085.0], [59.9, 1085.0], [60.0, 1085.0], [60.1, 1085.0], [60.2, 1085.0], [60.3, 1086.0], [60.4, 1086.0], [60.5, 1086.0], [60.6, 1087.0], [60.7, 1088.0], [60.8, 1088.0], [60.9, 1088.0], [61.0, 1089.0], [61.1, 1091.0], [61.2, 1091.0], [61.3, 1091.0], [61.4, 1094.0], [61.5, 1096.0], [61.6, 1096.0], [61.7, 1099.0], [61.8, 1099.0], [61.9, 1099.0], [62.0, 1102.0], [62.1, 1104.0], [62.2, 1104.0], [62.3, 1104.0], [62.4, 1106.0], [62.5, 1108.0], [62.6, 1108.0], [62.7, 1108.0], [62.8, 1108.0], [62.9, 1109.0], [63.0, 1110.0], [63.1, 1110.0], [63.2, 1110.0], [63.3, 1111.0], [63.4, 1111.0], [63.5, 1114.0], [63.6, 1114.0], [63.7, 1114.0], [63.8, 1114.0], [63.9, 1114.0], [64.0, 1115.0], [64.1, 1115.0], [64.2, 1115.0], [64.3, 1116.0], [64.4, 1116.0], [64.5, 1116.0], [64.6, 1116.0], [64.7, 1117.0], [64.8, 1117.0], [64.9, 1118.0], [65.0, 1118.0], [65.1, 1119.0], [65.2, 1120.0], [65.3, 1120.0], [65.4, 1120.0], [65.5, 1120.0], [65.6, 1121.0], [65.7, 1121.0], [65.8, 1122.0], [65.9, 1123.0], [66.0, 1123.0], [66.1, 1123.0], [66.2, 1123.0], [66.3, 1125.0], [66.4, 1126.0], [66.5, 1126.0], [66.6, 1126.0], [66.7, 1128.0], [66.8, 1128.0], [66.9, 1129.0], [67.0, 1129.0], [67.1, 1131.0], [67.2, 1131.0], [67.3, 1132.0], [67.4, 1132.0], [67.5, 1133.0], [67.6, 1133.0], [67.7, 1133.0], [67.8, 1133.0], [67.9, 1134.0], [68.0, 1134.0], [68.1, 1134.0], [68.2, 1134.0], [68.3, 1134.0], [68.4, 1134.0], [68.5, 1135.0], [68.6, 1135.0], [68.7, 1135.0], [68.8, 1135.0], [68.9, 1135.0], [69.0, 1136.0], [69.1, 1136.0], [69.2, 1137.0], [69.3, 1138.0], [69.4, 1140.0], [69.5, 1140.0], [69.6, 1140.0], [69.7, 1140.0], [69.8, 1141.0], [69.9, 1141.0], [70.0, 1143.0], [70.1, 1144.0], [70.2, 1144.0], [70.3, 1144.0], [70.4, 1145.0], [70.5, 1145.0], [70.6, 1145.0], [70.7, 1145.0], [70.8, 1146.0], [70.9, 1146.0], [71.0, 1146.0], [71.1, 1147.0], [71.2, 1147.0], [71.3, 1147.0], [71.4, 1147.0], [71.5, 1148.0], [71.6, 1148.0], [71.7, 1148.0], [71.8, 1148.0], [71.9, 1148.0], [72.0, 1148.0], [72.1, 1148.0], [72.2, 1149.0], [72.3, 1150.0], [72.4, 1150.0], [72.5, 1150.0], [72.6, 1151.0], [72.7, 1151.0], [72.8, 1152.0], [72.9, 1152.0], [73.0, 1153.0], [73.1, 1155.0], [73.2, 1155.0], [73.3, 1155.0], [73.4, 1157.0], [73.5, 1157.0], [73.6, 1157.0], [73.7, 1157.0], [73.8, 1158.0], [73.9, 1160.0], [74.0, 1160.0], [74.1, 1161.0], [74.2, 1161.0], [74.3, 1162.0], [74.4, 1162.0], [74.5, 1163.0], [74.6, 1164.0], [74.7, 1165.0], [74.8, 1165.0], [74.9, 1166.0], [75.0, 1166.0], [75.1, 1166.0], [75.2, 1167.0], [75.3, 1168.0], [75.4, 1169.0], [75.5, 1169.0], [75.6, 1169.0], [75.7, 1170.0], [75.8, 1171.0], [75.9, 1171.0], [76.0, 1171.0], [76.1, 1174.0], [76.2, 1175.0], [76.3, 1175.0], [76.4, 1176.0], [76.5, 1176.0], [76.6, 1178.0], [76.7, 1178.0], [76.8, 1179.0], [76.9, 1179.0], [77.0, 1179.0], [77.1, 1180.0], [77.2, 1180.0], [77.3, 1181.0], [77.4, 1181.0], [77.5, 1181.0], [77.6, 1182.0], [77.7, 1183.0], [77.8, 1183.0], [77.9, 1184.0], [78.0, 1184.0], [78.1, 1185.0], [78.2, 1185.0], [78.3, 1186.0], [78.4, 1187.0], [78.5, 1187.0], [78.6, 1188.0], [78.7, 1189.0], [78.8, 1190.0], [78.9, 1190.0], [79.0, 1191.0], [79.1, 1192.0], [79.2, 1195.0], [79.3, 1195.0], [79.4, 1195.0], [79.5, 1198.0], [79.6, 1199.0], [79.7, 1199.0], [79.8, 1200.0], [79.9, 1200.0], [80.0, 1200.0], [80.1, 1200.0], [80.2, 1202.0], [80.3, 1202.0], [80.4, 1202.0], [80.5, 1204.0], [80.6, 1204.0], [80.7, 1206.0], [80.8, 1206.0], [80.9, 1207.0], [81.0, 1207.0], [81.1, 1210.0], [81.2, 1210.0], [81.3, 1210.0], [81.4, 1210.0], [81.5, 1211.0], [81.6, 1211.0], [81.7, 1211.0], [81.8, 1213.0], [81.9, 1213.0], [82.0, 1215.0], [82.1, 1215.0], [82.2, 1215.0], [82.3, 1215.0], [82.4, 1215.0], [82.5, 1218.0], [82.6, 1219.0], [82.7, 1219.0], [82.8, 1222.0], [82.9, 1222.0], [83.0, 1222.0], [83.1, 1222.0], [83.2, 1222.0], [83.3, 1225.0], [83.4, 1225.0], [83.5, 1232.0], [83.6, 1232.0], [83.7, 1235.0], [83.8, 1235.0], [83.9, 1235.0], [84.0, 1236.0], [84.1, 1236.0], [84.2, 1236.0], [84.3, 1236.0], [84.4, 1238.0], [84.5, 1241.0], [84.6, 1241.0], [84.7, 1241.0], [84.8, 1243.0], [84.9, 1244.0], [85.0, 1244.0], [85.1, 1244.0], [85.2, 1245.0], [85.3, 1245.0], [85.4, 1245.0], [85.5, 1247.0], [85.6, 1250.0], [85.7, 1250.0], [85.8, 1251.0], [85.9, 1253.0], [86.0, 1254.0], [86.1, 1254.0], [86.2, 1255.0], [86.3, 1258.0], [86.4, 1260.0], [86.5, 1260.0], [86.6, 1261.0], [86.7, 1262.0], [86.8, 1262.0], [86.9, 1263.0], [87.0, 1264.0], [87.1, 1264.0], [87.2, 1264.0], [87.3, 1266.0], [87.4, 1268.0], [87.5, 1268.0], [87.6, 1268.0], [87.7, 1268.0], [87.8, 1273.0], [87.9, 1274.0], [88.0, 1274.0], [88.1, 1275.0], [88.2, 1276.0], [88.3, 1276.0], [88.4, 1276.0], [88.5, 1276.0], [88.6, 1277.0], [88.7, 1277.0], [88.8, 1278.0], [88.9, 1278.0], [89.0, 1278.0], [89.1, 1278.0], [89.2, 1282.0], [89.3, 1283.0], [89.4, 1284.0], [89.5, 1284.0], [89.6, 1285.0], [89.7, 1288.0], [89.8, 1290.0], [89.9, 1290.0], [90.0, 1291.0], [90.1, 1294.0], [90.2, 1294.0], [90.3, 1299.0], [90.4, 1300.0], [90.5, 1302.0], [90.6, 1302.0], [90.7, 1303.0], [90.8, 1309.0], [90.9, 1310.0], [91.0, 1310.0], [91.1, 1310.0], [91.2, 1312.0], [91.3, 1315.0], [91.4, 1315.0], [91.5, 1315.0], [91.6, 1316.0], [91.7, 1316.0], [91.8, 1317.0], [91.9, 1320.0], [92.0, 1320.0], [92.1, 1320.0], [92.2, 1321.0], [92.3, 1326.0], [92.4, 1334.0], [92.5, 1334.0], [92.6, 1335.0], [92.7, 1336.0], [92.8, 1337.0], [92.9, 1337.0], [93.0, 1338.0], [93.1, 1348.0], [93.2, 1349.0], [93.3, 1349.0], [93.4, 1360.0], [93.5, 1362.0], [93.6, 1362.0], [93.7, 1365.0], [93.8, 1370.0], [93.9, 1372.0], [94.0, 1372.0], [94.1, 1373.0], [94.2, 1382.0], [94.3, 1398.0], [94.4, 1398.0], [94.5, 1400.0], [94.6, 1411.0], [94.7, 1414.0], [94.8, 1414.0], [94.9, 1418.0], [95.0, 1434.0], [95.1, 1434.0], [95.2, 1437.0], [95.3, 1450.0], [95.4, 1455.0], [95.5, 1455.0], [95.6, 1466.0], [95.7, 1473.0], [95.8, 1482.0], [95.9, 1482.0], [96.0, 1512.0], [96.1, 1514.0], [96.2, 1517.0], [96.3, 1517.0], [96.4, 1518.0], [96.5, 1519.0], [96.6, 1527.0], [96.7, 1527.0], [96.8, 1528.0], [96.9, 1553.0], [97.0, 1553.0], [97.1, 1554.0], [97.2, 1555.0], [97.3, 1569.0], [97.4, 1569.0], [97.5, 1583.0], [97.6, 1629.0], [97.7, 1704.0], [97.8, 1704.0], [97.9, 1715.0], [98.0, 1815.0], [98.1, 1823.0], [98.2, 1823.0], [98.3, 1854.0], [98.4, 1857.0], [98.5, 1857.0], [98.6, 1966.0], [98.7, 1991.0], [98.8, 2036.0], [98.9, 2036.0], [99.0, 2074.0], [99.1, 2168.0], [99.2, 2257.0], [99.3, 2257.0], [99.4, 2392.0], [99.5, 2601.0], [99.6, 2668.0], [99.7, 2668.0], [99.8, 2684.0], [99.9, 2866.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 131.0, "series": [{"data": [[600.0, 46.0], [700.0, 36.0], [800.0, 26.0], [900.0, 40.0], [1000.0, 50.0], [1100.0, 131.0], [1200.0, 78.0], [1300.0, 30.0], [1400.0, 11.0], [1500.0, 12.0], [100.0, 19.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 4.0], [1900.0, 2.0], [2000.0, 2.0], [2100.0, 1.0], [2300.0, 1.0], [2200.0, 1.0], [2600.0, 3.0], [2800.0, 1.0], [200.0, 43.0], [300.0, 38.0], [400.0, 45.0], [500.0, 112.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 30.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 560.0, "series": [{"data": [[0.0, 145.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 560.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 30.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.893364928909953, "minX": 1.60223862E12, "maxY": 10.0, "series": [{"data": [[1.60223868E12, 9.893364928909953], [1.60223862E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223868E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 288.0, "minX": 1.0, "maxY": 1815.0, "series": [{"data": [[8.0, 288.0], [4.0, 1200.0], [2.0, 506.0], [1.0, 1022.0], [9.0, 1815.0], [10.0, 871.0413223140497], [5.0, 542.0], [6.0, 472.0], [3.0, 483.0], [7.0, 475.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 869.6312925170071]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2425.5, "minX": 1.60223862E12, "maxY": 969081.6166666667, "series": [{"data": [[1.60223868E12, 969081.6166666667], [1.60223862E12, 767763.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223868E12, 3244.5333333333333], [1.60223862E12, 2425.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223868E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 846.9454976303318, "minX": 1.60223862E12, "maxY": 900.2172523961664, "series": [{"data": [[1.60223868E12, 846.9454976303318], [1.60223862E12, 900.2172523961664]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223868E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 845.990521327014, "minX": 1.60223862E12, "maxY": 899.2268370607029, "series": [{"data": [[1.60223868E12, 845.990521327014], [1.60223862E12, 899.2268370607029]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223868E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.02606635071090047, "minX": 1.60223862E12, "maxY": 0.30351437699680517, "series": [{"data": [[1.60223868E12, 0.02606635071090047], [1.60223862E12, 0.30351437699680517]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223868E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 127.0, "minX": 1.60223862E12, "maxY": 2866.0, "series": [{"data": [[1.60223868E12, 2036.0], [1.60223862E12, 2866.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223868E12, 139.61399979829787], [1.60223862E12, 152.82599992513656]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223868E12, 140.7508001613617], [1.60223862E12, 153.65160017967224]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223868E12, 140.07399979829788], [1.60223862E12, 152.98299996256827]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223868E12, 134.0], [1.60223862E12, 127.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223868E12, 904.0], [1.60223862E12, 903.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223868E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 451.0, "minX": 1.0, "maxY": 2067.0, "series": [{"data": [[8.0, 1142.5], [9.0, 1140.0], [10.0, 1115.0], [11.0, 1119.0], [3.0, 709.0], [12.0, 836.0], [13.0, 511.5], [14.0, 700.5], [15.0, 686.0], [1.0, 799.0], [16.0, 548.5], [18.0, 504.0], [19.0, 547.0], [20.0, 451.0], [5.0, 1070.0], [6.0, 2067.0], [7.0, 1165.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 450.0, "minX": 1.0, "maxY": 2067.0, "series": [{"data": [[8.0, 1141.5], [9.0, 1140.0], [10.0, 1114.5], [11.0, 1118.0], [3.0, 706.0], [12.0, 835.0], [13.0, 511.5], [14.0, 700.0], [15.0, 685.0], [1.0, 794.0], [16.0, 547.5], [18.0, 502.5], [19.0, 547.0], [20.0, 450.0], [5.0, 1067.0], [6.0, 2067.0], [7.0, 1164.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.383333333333334, "minX": 1.60223862E12, "maxY": 6.866666666666666, "series": [{"data": [[1.60223868E12, 6.866666666666666], [1.60223862E12, 5.383333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223868E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.216666666666667, "minX": 1.60223862E12, "maxY": 7.033333333333333, "series": [{"data": [[1.60223868E12, 7.033333333333333], [1.60223862E12, 5.216666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223868E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.216666666666667, "minX": 1.60223862E12, "maxY": 7.033333333333333, "series": [{"data": [[1.60223868E12, 7.033333333333333], [1.60223862E12, 5.216666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223868E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.216666666666667, "minX": 1.60223862E12, "maxY": 7.033333333333333, "series": [{"data": [[1.60223868E12, 7.033333333333333], [1.60223862E12, 5.216666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223868E12, "title": "Total Transactions Per Second"}},
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

