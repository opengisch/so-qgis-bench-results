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
        data: {"result": {"minY": 185.0, "minX": 0.0, "maxY": 3516.0, "series": [{"data": [[0.0, 185.0], [0.1, 185.0], [0.2, 192.0], [0.3, 206.0], [0.4, 206.0], [0.5, 208.0], [0.6, 214.0], [0.7, 216.0], [0.8, 216.0], [0.9, 217.0], [1.0, 222.0], [1.1, 223.0], [1.2, 223.0], [1.3, 223.0], [1.4, 224.0], [1.5, 227.0], [1.6, 227.0], [1.7, 231.0], [1.8, 232.0], [1.9, 232.0], [2.0, 240.0], [2.1, 241.0], [2.2, 242.0], [2.3, 242.0], [2.4, 244.0], [2.5, 249.0], [2.6, 253.0], [2.7, 253.0], [2.8, 254.0], [2.9, 255.0], [3.0, 263.0], [3.1, 263.0], [3.2, 267.0], [3.3, 268.0], [3.4, 268.0], [3.5, 269.0], [3.6, 274.0], [3.7, 276.0], [3.8, 276.0], [3.9, 277.0], [4.0, 278.0], [4.1, 282.0], [4.2, 282.0], [4.3, 284.0], [4.4, 284.0], [4.5, 292.0], [4.6, 292.0], [4.7, 296.0], [4.8, 298.0], [4.9, 298.0], [5.0, 298.0], [5.1, 298.0], [5.2, 298.0], [5.3, 298.0], [5.4, 300.0], [5.5, 301.0], [5.6, 304.0], [5.7, 304.0], [5.8, 305.0], [5.9, 306.0], [6.0, 308.0], [6.1, 308.0], [6.2, 310.0], [6.3, 311.0], [6.4, 314.0], [6.5, 314.0], [6.6, 314.0], [6.7, 314.0], [6.8, 314.0], [6.9, 314.0], [7.0, 316.0], [7.1, 319.0], [7.2, 319.0], [7.3, 327.0], [7.4, 327.0], [7.5, 328.0], [7.6, 328.0], [7.7, 329.0], [7.8, 331.0], [7.9, 331.0], [8.0, 331.0], [8.1, 336.0], [8.2, 336.0], [8.3, 336.0], [8.4, 336.0], [8.5, 337.0], [8.6, 338.0], [8.7, 338.0], [8.8, 339.0], [8.9, 339.0], [9.0, 340.0], [9.1, 340.0], [9.2, 341.0], [9.3, 342.0], [9.4, 346.0], [9.5, 346.0], [9.6, 350.0], [9.7, 353.0], [9.8, 355.0], [9.9, 355.0], [10.0, 355.0], [10.1, 359.0], [10.2, 359.0], [10.3, 361.0], [10.4, 367.0], [10.5, 375.0], [10.6, 375.0], [10.7, 378.0], [10.8, 379.0], [10.9, 384.0], [11.0, 384.0], [11.1, 385.0], [11.2, 388.0], [11.3, 388.0], [11.4, 388.0], [11.5, 388.0], [11.6, 390.0], [11.7, 390.0], [11.8, 392.0], [11.9, 393.0], [12.0, 394.0], [12.1, 394.0], [12.2, 397.0], [12.3, 398.0], [12.4, 398.0], [12.5, 398.0], [12.6, 400.0], [12.7, 401.0], [12.8, 403.0], [12.9, 403.0], [13.0, 404.0], [13.1, 410.0], [13.2, 413.0], [13.3, 413.0], [13.4, 418.0], [13.5, 419.0], [13.6, 419.0], [13.7, 422.0], [13.8, 427.0], [13.9, 427.0], [14.0, 427.0], [14.1, 429.0], [14.2, 435.0], [14.3, 435.0], [14.4, 435.0], [14.5, 436.0], [14.6, 437.0], [14.7, 437.0], [14.8, 437.0], [14.9, 438.0], [15.0, 438.0], [15.1, 438.0], [15.2, 440.0], [15.3, 440.0], [15.4, 440.0], [15.5, 440.0], [15.6, 441.0], [15.7, 442.0], [15.8, 443.0], [15.9, 443.0], [16.0, 444.0], [16.1, 444.0], [16.2, 445.0], [16.3, 445.0], [16.4, 445.0], [16.5, 447.0], [16.6, 450.0], [16.7, 450.0], [16.8, 455.0], [16.9, 456.0], [17.0, 456.0], [17.1, 457.0], [17.2, 459.0], [17.3, 459.0], [17.4, 459.0], [17.5, 463.0], [17.6, 464.0], [17.7, 466.0], [17.8, 466.0], [17.9, 470.0], [18.0, 470.0], [18.1, 471.0], [18.2, 471.0], [18.3, 476.0], [18.4, 477.0], [18.5, 477.0], [18.6, 479.0], [18.7, 482.0], [18.8, 485.0], [18.9, 485.0], [19.0, 487.0], [19.1, 492.0], [19.2, 492.0], [19.3, 492.0], [19.4, 493.0], [19.5, 494.0], [19.6, 495.0], [19.7, 495.0], [19.8, 496.0], [19.9, 498.0], [20.0, 498.0], [20.1, 498.0], [20.2, 501.0], [20.3, 502.0], [20.4, 502.0], [20.5, 502.0], [20.6, 502.0], [20.7, 502.0], [20.8, 502.0], [20.9, 503.0], [21.0, 504.0], [21.1, 505.0], [21.2, 505.0], [21.3, 506.0], [21.4, 507.0], [21.5, 507.0], [21.6, 507.0], [21.7, 508.0], [21.8, 510.0], [21.9, 510.0], [22.0, 511.0], [22.1, 512.0], [22.2, 514.0], [22.3, 514.0], [22.4, 517.0], [22.5, 520.0], [22.6, 522.0], [22.7, 522.0], [22.8, 522.0], [22.9, 523.0], [23.0, 526.0], [23.1, 526.0], [23.2, 526.0], [23.3, 528.0], [23.4, 528.0], [23.5, 528.0], [23.6, 528.0], [23.7, 530.0], [23.8, 530.0], [23.9, 532.0], [24.0, 533.0], [24.1, 537.0], [24.2, 537.0], [24.3, 538.0], [24.4, 538.0], [24.5, 540.0], [24.6, 540.0], [24.7, 541.0], [24.8, 541.0], [24.9, 541.0], [25.0, 541.0], [25.1, 543.0], [25.2, 544.0], [25.3, 544.0], [25.4, 546.0], [25.5, 546.0], [25.6, 548.0], [25.7, 548.0], [25.8, 548.0], [25.9, 551.0], [26.0, 553.0], [26.1, 553.0], [26.2, 554.0], [26.3, 555.0], [26.4, 555.0], [26.5, 555.0], [26.6, 556.0], [26.7, 557.0], [26.8, 557.0], [26.9, 560.0], [27.0, 561.0], [27.1, 563.0], [27.2, 563.0], [27.3, 564.0], [27.4, 564.0], [27.5, 565.0], [27.6, 565.0], [27.7, 566.0], [27.8, 567.0], [27.9, 569.0], [28.0, 569.0], [28.1, 570.0], [28.2, 570.0], [28.3, 571.0], [28.4, 571.0], [28.5, 575.0], [28.6, 576.0], [28.7, 576.0], [28.8, 576.0], [28.9, 576.0], [29.0, 577.0], [29.1, 577.0], [29.2, 578.0], [29.3, 579.0], [29.4, 580.0], [29.5, 580.0], [29.6, 582.0], [29.7, 582.0], [29.8, 583.0], [29.9, 583.0], [30.0, 584.0], [30.1, 585.0], [30.2, 585.0], [30.3, 588.0], [30.4, 588.0], [30.5, 591.0], [30.6, 591.0], [30.7, 592.0], [30.8, 593.0], [30.9, 594.0], [31.0, 594.0], [31.1, 595.0], [31.2, 595.0], [31.3, 598.0], [31.4, 598.0], [31.5, 598.0], [31.6, 600.0], [31.7, 600.0], [31.8, 600.0], [31.9, 600.0], [32.0, 601.0], [32.1, 601.0], [32.2, 602.0], [32.3, 603.0], [32.4, 604.0], [32.5, 604.0], [32.6, 604.0], [32.7, 604.0], [32.8, 604.0], [32.9, 604.0], [33.0, 604.0], [33.1, 605.0], [33.2, 609.0], [33.3, 609.0], [33.4, 610.0], [33.5, 611.0], [33.6, 611.0], [33.7, 612.0], [33.8, 612.0], [33.9, 612.0], [34.0, 612.0], [34.1, 612.0], [34.2, 612.0], [34.3, 614.0], [34.4, 614.0], [34.5, 616.0], [34.6, 616.0], [34.7, 619.0], [34.8, 619.0], [34.9, 619.0], [35.0, 619.0], [35.1, 619.0], [35.2, 620.0], [35.3, 620.0], [35.4, 623.0], [35.5, 623.0], [35.6, 626.0], [35.7, 628.0], [35.8, 628.0], [35.9, 628.0], [36.0, 630.0], [36.1, 631.0], [36.2, 632.0], [36.3, 632.0], [36.4, 632.0], [36.5, 635.0], [36.6, 637.0], [36.7, 637.0], [36.8, 638.0], [36.9, 639.0], [37.0, 639.0], [37.1, 643.0], [37.2, 644.0], [37.3, 646.0], [37.4, 646.0], [37.5, 647.0], [37.6, 648.0], [37.7, 649.0], [37.8, 649.0], [37.9, 650.0], [38.0, 651.0], [38.1, 654.0], [38.2, 654.0], [38.3, 655.0], [38.4, 658.0], [38.5, 658.0], [38.6, 659.0], [38.7, 662.0], [38.8, 663.0], [38.9, 663.0], [39.0, 666.0], [39.1, 667.0], [39.2, 669.0], [39.3, 669.0], [39.4, 669.0], [39.5, 669.0], [39.6, 669.0], [39.7, 669.0], [39.8, 672.0], [39.9, 675.0], [40.0, 680.0], [40.1, 680.0], [40.2, 682.0], [40.3, 682.0], [40.4, 682.0], [40.5, 683.0], [40.6, 684.0], [40.7, 684.0], [40.8, 684.0], [40.9, 684.0], [41.0, 687.0], [41.1, 688.0], [41.2, 688.0], [41.3, 690.0], [41.4, 690.0], [41.5, 690.0], [41.6, 690.0], [41.7, 691.0], [41.8, 693.0], [41.9, 693.0], [42.0, 694.0], [42.1, 694.0], [42.2, 695.0], [42.3, 695.0], [42.4, 696.0], [42.5, 700.0], [42.6, 702.0], [42.7, 702.0], [42.8, 703.0], [42.9, 705.0], [43.0, 714.0], [43.1, 714.0], [43.2, 716.0], [43.3, 717.0], [43.4, 717.0], [43.5, 717.0], [43.6, 719.0], [43.7, 721.0], [43.8, 721.0], [43.9, 723.0], [44.0, 724.0], [44.1, 726.0], [44.2, 726.0], [44.3, 730.0], [44.4, 732.0], [44.5, 734.0], [44.6, 734.0], [44.7, 736.0], [44.8, 737.0], [44.9, 738.0], [45.0, 738.0], [45.1, 741.0], [45.2, 742.0], [45.3, 742.0], [45.4, 744.0], [45.5, 744.0], [45.6, 748.0], [45.7, 748.0], [45.8, 751.0], [45.9, 751.0], [46.0, 754.0], [46.1, 754.0], [46.2, 755.0], [46.3, 756.0], [46.4, 759.0], [46.5, 759.0], [46.6, 761.0], [46.7, 763.0], [46.8, 763.0], [46.9, 765.0], [47.0, 766.0], [47.1, 767.0], [47.2, 767.0], [47.3, 769.0], [47.4, 769.0], [47.5, 770.0], [47.6, 770.0], [47.7, 770.0], [47.8, 772.0], [47.9, 777.0], [48.0, 777.0], [48.1, 778.0], [48.2, 779.0], [48.3, 781.0], [48.4, 781.0], [48.5, 785.0], [48.6, 788.0], [48.7, 788.0], [48.8, 788.0], [48.9, 788.0], [49.0, 789.0], [49.1, 789.0], [49.2, 789.0], [49.3, 792.0], [49.4, 793.0], [49.5, 793.0], [49.6, 795.0], [49.7, 798.0], [49.8, 799.0], [49.9, 799.0], [50.0, 804.0], [50.1, 805.0], [50.2, 805.0], [50.3, 809.0], [50.4, 813.0], [50.5, 814.0], [50.6, 814.0], [50.7, 815.0], [50.8, 827.0], [50.9, 829.0], [51.0, 829.0], [51.1, 831.0], [51.2, 833.0], [51.3, 836.0], [51.4, 836.0], [51.5, 837.0], [51.6, 837.0], [51.7, 837.0], [51.8, 839.0], [51.9, 847.0], [52.0, 850.0], [52.1, 850.0], [52.2, 856.0], [52.3, 856.0], [52.4, 858.0], [52.5, 858.0], [52.6, 869.0], [52.7, 870.0], [52.8, 870.0], [52.9, 870.0], [53.0, 876.0], [53.1, 877.0], [53.2, 879.0], [53.3, 879.0], [53.4, 881.0], [53.5, 883.0], [53.6, 883.0], [53.7, 883.0], [53.8, 884.0], [53.9, 884.0], [54.0, 884.0], [54.1, 885.0], [54.2, 886.0], [54.3, 886.0], [54.4, 886.0], [54.5, 888.0], [54.6, 888.0], [54.7, 891.0], [54.8, 891.0], [54.9, 893.0], [55.0, 895.0], [55.1, 895.0], [55.2, 899.0], [55.3, 900.0], [55.4, 902.0], [55.5, 902.0], [55.6, 903.0], [55.7, 908.0], [55.8, 910.0], [55.9, 910.0], [56.0, 910.0], [56.1, 913.0], [56.2, 915.0], [56.3, 915.0], [56.4, 916.0], [56.5, 917.0], [56.6, 917.0], [56.7, 917.0], [56.8, 918.0], [56.9, 918.0], [57.0, 918.0], [57.1, 926.0], [57.2, 926.0], [57.3, 932.0], [57.4, 932.0], [57.5, 934.0], [57.6, 936.0], [57.7, 941.0], [57.8, 941.0], [57.9, 944.0], [58.0, 945.0], [58.1, 946.0], [58.2, 946.0], [58.3, 954.0], [58.4, 954.0], [58.5, 954.0], [58.6, 955.0], [58.7, 956.0], [58.8, 964.0], [58.9, 964.0], [59.0, 965.0], [59.1, 965.0], [59.2, 966.0], [59.3, 966.0], [59.4, 966.0], [59.5, 968.0], [59.6, 968.0], [59.7, 968.0], [59.8, 968.0], [59.9, 970.0], [60.0, 973.0], [60.1, 973.0], [60.2, 976.0], [60.3, 978.0], [60.4, 978.0], [60.5, 979.0], [60.6, 980.0], [60.7, 981.0], [60.8, 981.0], [60.9, 984.0], [61.0, 989.0], [61.1, 992.0], [61.2, 992.0], [61.3, 993.0], [61.4, 996.0], [61.5, 1001.0], [61.6, 1001.0], [61.7, 1002.0], [61.8, 1004.0], [61.9, 1004.0], [62.0, 1005.0], [62.1, 1007.0], [62.2, 1011.0], [62.3, 1011.0], [62.4, 1014.0], [62.5, 1018.0], [62.6, 1018.0], [62.7, 1018.0], [62.8, 1020.0], [62.9, 1020.0], [63.0, 1026.0], [63.1, 1026.0], [63.2, 1026.0], [63.3, 1032.0], [63.4, 1032.0], [63.5, 1033.0], [63.6, 1034.0], [63.7, 1034.0], [63.8, 1034.0], [63.9, 1036.0], [64.0, 1038.0], [64.1, 1039.0], [64.2, 1039.0], [64.3, 1040.0], [64.4, 1045.0], [64.5, 1046.0], [64.6, 1046.0], [64.7, 1046.0], [64.8, 1049.0], [64.9, 1049.0], [65.0, 1049.0], [65.1, 1050.0], [65.2, 1055.0], [65.3, 1055.0], [65.4, 1055.0], [65.5, 1057.0], [65.6, 1064.0], [65.7, 1064.0], [65.8, 1065.0], [65.9, 1065.0], [66.0, 1067.0], [66.1, 1067.0], [66.2, 1068.0], [66.3, 1070.0], [66.4, 1072.0], [66.5, 1072.0], [66.6, 1074.0], [66.7, 1075.0], [66.8, 1075.0], [66.9, 1075.0], [67.0, 1076.0], [67.1, 1078.0], [67.2, 1078.0], [67.3, 1078.0], [67.4, 1082.0], [67.5, 1084.0], [67.6, 1084.0], [67.7, 1086.0], [67.8, 1087.0], [67.9, 1088.0], [68.0, 1088.0], [68.1, 1089.0], [68.2, 1090.0], [68.3, 1091.0], [68.4, 1091.0], [68.5, 1094.0], [68.6, 1094.0], [68.7, 1094.0], [68.8, 1096.0], [68.9, 1096.0], [69.0, 1097.0], [69.1, 1097.0], [69.2, 1097.0], [69.3, 1097.0], [69.4, 1098.0], [69.5, 1098.0], [69.6, 1100.0], [69.7, 1101.0], [69.8, 1102.0], [69.9, 1102.0], [70.0, 1105.0], [70.1, 1106.0], [70.2, 1106.0], [70.3, 1107.0], [70.4, 1107.0], [70.5, 1109.0], [70.6, 1109.0], [70.7, 1111.0], [70.8, 1111.0], [70.9, 1113.0], [71.0, 1113.0], [71.1, 1114.0], [71.2, 1114.0], [71.3, 1115.0], [71.4, 1115.0], [71.5, 1115.0], [71.6, 1115.0], [71.7, 1115.0], [71.8, 1120.0], [71.9, 1120.0], [72.0, 1123.0], [72.1, 1123.0], [72.2, 1126.0], [72.3, 1127.0], [72.4, 1127.0], [72.5, 1127.0], [72.6, 1127.0], [72.7, 1131.0], [72.8, 1132.0], [72.9, 1132.0], [73.0, 1132.0], [73.1, 1134.0], [73.2, 1134.0], [73.3, 1134.0], [73.4, 1135.0], [73.5, 1136.0], [73.6, 1136.0], [73.7, 1136.0], [73.8, 1137.0], [73.9, 1144.0], [74.0, 1144.0], [74.1, 1145.0], [74.2, 1145.0], [74.3, 1151.0], [74.4, 1151.0], [74.5, 1152.0], [74.6, 1154.0], [74.7, 1156.0], [74.8, 1156.0], [74.9, 1160.0], [75.0, 1163.0], [75.1, 1163.0], [75.2, 1165.0], [75.3, 1171.0], [75.4, 1174.0], [75.5, 1174.0], [75.6, 1176.0], [75.7, 1176.0], [75.8, 1177.0], [75.9, 1177.0], [76.0, 1178.0], [76.1, 1181.0], [76.2, 1187.0], [76.3, 1187.0], [76.4, 1188.0], [76.5, 1193.0], [76.6, 1194.0], [76.7, 1194.0], [76.8, 1194.0], [76.9, 1194.0], [77.0, 1194.0], [77.1, 1195.0], [77.2, 1197.0], [77.3, 1199.0], [77.4, 1199.0], [77.5, 1204.0], [77.6, 1204.0], [77.7, 1209.0], [77.8, 1209.0], [77.9, 1217.0], [78.0, 1220.0], [78.1, 1220.0], [78.2, 1220.0], [78.3, 1223.0], [78.4, 1227.0], [78.5, 1227.0], [78.6, 1228.0], [78.7, 1233.0], [78.8, 1234.0], [78.9, 1234.0], [79.0, 1235.0], [79.1, 1235.0], [79.2, 1236.0], [79.3, 1236.0], [79.4, 1238.0], [79.5, 1241.0], [79.6, 1241.0], [79.7, 1241.0], [79.8, 1243.0], [79.9, 1244.0], [80.0, 1247.0], [80.1, 1247.0], [80.2, 1248.0], [80.3, 1249.0], [80.4, 1249.0], [80.5, 1252.0], [80.6, 1255.0], [80.7, 1259.0], [80.8, 1259.0], [80.9, 1261.0], [81.0, 1265.0], [81.1, 1267.0], [81.2, 1267.0], [81.3, 1268.0], [81.4, 1276.0], [81.5, 1278.0], [81.6, 1278.0], [81.7, 1281.0], [81.8, 1282.0], [81.9, 1282.0], [82.0, 1286.0], [82.1, 1289.0], [82.2, 1291.0], [82.3, 1291.0], [82.4, 1297.0], [82.5, 1297.0], [82.6, 1298.0], [82.7, 1298.0], [82.8, 1302.0], [82.9, 1303.0], [83.0, 1305.0], [83.1, 1305.0], [83.2, 1308.0], [83.3, 1313.0], [83.4, 1313.0], [83.5, 1315.0], [83.6, 1316.0], [83.7, 1319.0], [83.8, 1319.0], [83.9, 1320.0], [84.0, 1321.0], [84.1, 1322.0], [84.2, 1322.0], [84.3, 1323.0], [84.4, 1329.0], [84.5, 1337.0], [84.6, 1337.0], [84.7, 1337.0], [84.8, 1343.0], [84.9, 1362.0], [85.0, 1362.0], [85.1, 1364.0], [85.2, 1369.0], [85.3, 1369.0], [85.4, 1382.0], [85.5, 1384.0], [85.6, 1385.0], [85.7, 1385.0], [85.8, 1385.0], [85.9, 1385.0], [86.0, 1386.0], [86.1, 1386.0], [86.2, 1395.0], [86.3, 1396.0], [86.4, 1409.0], [86.5, 1409.0], [86.6, 1410.0], [86.7, 1418.0], [86.8, 1418.0], [86.9, 1431.0], [87.0, 1431.0], [87.1, 1434.0], [87.2, 1434.0], [87.3, 1435.0], [87.4, 1435.0], [87.5, 1436.0], [87.6, 1436.0], [87.7, 1437.0], [87.8, 1438.0], [87.9, 1440.0], [88.0, 1440.0], [88.1, 1441.0], [88.2, 1443.0], [88.3, 1451.0], [88.4, 1451.0], [88.5, 1453.0], [88.6, 1454.0], [88.7, 1454.0], [88.8, 1456.0], [88.9, 1457.0], [89.0, 1458.0], [89.1, 1458.0], [89.2, 1465.0], [89.3, 1465.0], [89.4, 1466.0], [89.5, 1466.0], [89.6, 1468.0], [89.7, 1468.0], [89.8, 1469.0], [89.9, 1469.0], [90.0, 1470.0], [90.1, 1471.0], [90.2, 1471.0], [90.3, 1478.0], [90.4, 1479.0], [90.5, 1481.0], [90.6, 1481.0], [90.7, 1485.0], [90.8, 1488.0], [90.9, 1489.0], [91.0, 1489.0], [91.1, 1497.0], [91.2, 1497.0], [91.3, 1498.0], [91.4, 1498.0], [91.5, 1504.0], [91.6, 1520.0], [91.7, 1520.0], [91.8, 1530.0], [91.9, 1536.0], [92.0, 1536.0], [92.1, 1536.0], [92.2, 1541.0], [92.3, 1543.0], [92.4, 1549.0], [92.5, 1549.0], [92.6, 1559.0], [92.7, 1563.0], [92.8, 1565.0], [92.9, 1565.0], [93.0, 1570.0], [93.1, 1575.0], [93.2, 1576.0], [93.3, 1576.0], [93.4, 1576.0], [93.5, 1584.0], [93.6, 1584.0], [93.7, 1588.0], [93.8, 1590.0], [93.9, 1597.0], [94.0, 1597.0], [94.1, 1599.0], [94.2, 1601.0], [94.3, 1626.0], [94.4, 1626.0], [94.5, 1629.0], [94.6, 1643.0], [94.7, 1650.0], [94.8, 1650.0], [94.9, 1661.0], [95.0, 1666.0], [95.1, 1666.0], [95.2, 1668.0], [95.3, 1677.0], [95.4, 1709.0], [95.5, 1709.0], [95.6, 1712.0], [95.7, 1726.0], [95.8, 1733.0], [95.9, 1733.0], [96.0, 1752.0], [96.1, 1774.0], [96.2, 1775.0], [96.3, 1775.0], [96.4, 1783.0], [96.5, 1804.0], [96.6, 1815.0], [96.7, 1815.0], [96.8, 1909.0], [96.9, 1919.0], [97.0, 1919.0], [97.1, 1960.0], [97.2, 1991.0], [97.3, 2003.0], [97.4, 2003.0], [97.5, 2098.0], [97.6, 2133.0], [97.7, 2167.0], [97.8, 2167.0], [97.9, 2331.0], [98.0, 2337.0], [98.1, 2418.0], [98.2, 2418.0], [98.3, 2726.0], [98.4, 2748.0], [98.5, 2748.0], [98.6, 2818.0], [98.7, 2970.0], [98.8, 2997.0], [98.9, 2997.0], [99.0, 3116.0], [99.1, 3134.0], [99.2, 3146.0], [99.3, 3146.0], [99.4, 3151.0], [99.5, 3290.0], [99.6, 3297.0], [99.7, 3297.0], [99.8, 3392.0], [99.9, 3516.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 84.0, "series": [{"data": [[600.0, 80.0], [700.0, 55.0], [800.0, 39.0], [900.0, 46.0], [1000.0, 59.0], [1100.0, 58.0], [1200.0, 39.0], [1300.0, 27.0], [1400.0, 37.0], [1500.0, 20.0], [100.0, 2.0], [1600.0, 9.0], [1700.0, 8.0], [1800.0, 2.0], [1900.0, 4.0], [2000.0, 2.0], [2100.0, 2.0], [2300.0, 2.0], [2400.0, 1.0], [2800.0, 1.0], [2700.0, 2.0], [2900.0, 2.0], [3100.0, 4.0], [3200.0, 2.0], [3300.0, 1.0], [200.0, 37.0], [3500.0, 1.0], [300.0, 53.0], [400.0, 56.0], [500.0, 84.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 63.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 524.0, "series": [{"data": [[0.0, 148.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 524.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 63.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.852941176470589, "minX": 1.6037466E12, "maxY": 10.0, "series": [{"data": [[1.60374666E12, 9.852941176470589], [1.6037466E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374666E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 282.0, "minX": 1.0, "maxY": 915.0, "series": [{"data": [[8.0, 560.0], [4.0, 611.0], [2.0, 579.0], [1.0, 915.0], [9.0, 523.0], [10.0, 907.8732782369148], [5.0, 696.0], [6.0, 576.0], [3.0, 526.0], [7.0, 282.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 903.9238095238097]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2299.5, "minX": 1.6037466E12, "maxY": 1142124.4, "series": [{"data": [[1.60374666E12, 693636.7666666667], [1.6037466E12, 1142124.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60374666E12, 2299.5], [1.6037466E12, 3223.5333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374666E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 867.6143790849676, "minX": 1.6037466E12, "maxY": 929.8228438228433, "series": [{"data": [[1.60374666E12, 867.6143790849676], [1.6037466E12, 929.8228438228433]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374666E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 866.4379084967325, "minX": 1.6037466E12, "maxY": 928.4848484848478, "series": [{"data": [[1.60374666E12, 866.4379084967325], [1.6037466E12, 928.4848484848478]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374666E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.055555555555555594, "minX": 1.6037466E12, "maxY": 0.2144522144522146, "series": [{"data": [[1.60374666E12, 0.055555555555555594], [1.6037466E12, 0.2144522144522146]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374666E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 185.0, "minX": 1.6037466E12, "maxY": 3516.0, "series": [{"data": [[1.60374666E12, 2003.0], [1.6037466E12, 3516.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60374666E12, 237.25999853610992], [1.6037466E12, 207.73999979496003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60374666E12, 242.2751002049446], [1.6037466E12, 209.54200024604796]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60374666E12, 240.32999926805496], [1.6037466E12, 208.50999969244003]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60374666E12, 216.0], [1.6037466E12, 185.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60374666E12, 876.5], [1.6037466E12, 785.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374666E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 560.0, "minX": 5.0, "maxY": 1091.5, "series": [{"data": [[8.0, 1091.5], [9.0, 981.0], [10.0, 981.5], [11.0, 1022.0], [12.0, 865.0], [13.0, 682.0], [14.0, 869.5], [15.0, 600.0], [16.0, 686.0], [17.0, 714.0], [18.0, 615.5], [19.0, 560.0], [5.0, 611.0], [7.0, 1014.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 560.0, "minX": 5.0, "maxY": 1091.0, "series": [{"data": [[8.0, 1091.0], [9.0, 980.0], [10.0, 980.5], [11.0, 1021.0], [12.0, 864.0], [13.0, 681.0], [14.0, 867.5], [15.0, 600.0], [16.0, 684.5], [17.0, 714.0], [18.0, 614.5], [19.0, 560.0], [5.0, 610.0], [7.0, 1013.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.933333333333334, "minX": 1.6037466E12, "maxY": 7.316666666666666, "series": [{"data": [[1.60374666E12, 4.933333333333334], [1.6037466E12, 7.316666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374666E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.1, "minX": 1.6037466E12, "maxY": 7.15, "series": [{"data": [[1.60374666E12, 5.1], [1.6037466E12, 7.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374666E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.1, "minX": 1.6037466E12, "maxY": 7.15, "series": [{"data": [[1.60374666E12, 5.1], [1.6037466E12, 7.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374666E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.1, "minX": 1.6037466E12, "maxY": 7.15, "series": [{"data": [[1.60374666E12, 5.1], [1.6037466E12, 7.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374666E12, "title": "Total Transactions Per Second"}},
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

