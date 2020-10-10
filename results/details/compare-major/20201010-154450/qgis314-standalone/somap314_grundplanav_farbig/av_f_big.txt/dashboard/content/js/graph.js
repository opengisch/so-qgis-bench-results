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
        data: {"result": {"minY": 193.0, "minX": 0.0, "maxY": 324520.0, "series": [{"data": [[0.0, 193.0], [0.1, 193.0], [0.2, 199.0], [0.3, 201.0], [0.4, 201.0], [0.5, 211.0], [0.6, 213.0], [0.7, 215.0], [0.8, 215.0], [0.9, 216.0], [1.0, 217.0], [1.1, 219.0], [1.2, 219.0], [1.3, 222.0], [1.4, 223.0], [1.5, 225.0], [1.6, 225.0], [1.7, 232.0], [1.8, 234.0], [1.9, 234.0], [2.0, 235.0], [2.1, 244.0], [2.2, 244.0], [2.3, 244.0], [2.4, 246.0], [2.5, 248.0], [2.6, 250.0], [2.7, 250.0], [2.8, 255.0], [2.9, 259.0], [3.0, 260.0], [3.1, 260.0], [3.2, 272.0], [3.3, 287.0], [3.4, 287.0], [3.5, 290.0], [3.6, 303.0], [3.7, 303.0], [3.8, 303.0], [3.9, 305.0], [4.0, 305.0], [4.1, 309.0], [4.2, 309.0], [4.3, 309.0], [4.4, 310.0], [4.5, 312.0], [4.6, 312.0], [4.7, 316.0], [4.8, 321.0], [4.9, 323.0], [5.0, 323.0], [5.1, 329.0], [5.2, 333.0], [5.3, 333.0], [5.4, 334.0], [5.5, 334.0], [5.6, 335.0], [5.7, 335.0], [5.8, 336.0], [5.9, 338.0], [6.0, 339.0], [6.1, 339.0], [6.2, 342.0], [6.3, 342.0], [6.4, 342.0], [6.5, 342.0], [6.6, 344.0], [6.7, 345.0], [6.8, 345.0], [6.9, 348.0], [7.0, 349.0], [7.1, 349.0], [7.2, 349.0], [7.3, 351.0], [7.4, 352.0], [7.5, 353.0], [7.6, 353.0], [7.7, 354.0], [7.8, 355.0], [7.9, 357.0], [8.0, 357.0], [8.1, 359.0], [8.2, 359.0], [8.3, 361.0], [8.4, 361.0], [8.5, 361.0], [8.6, 361.0], [8.7, 361.0], [8.8, 362.0], [8.9, 363.0], [9.0, 364.0], [9.1, 364.0], [9.2, 364.0], [9.3, 365.0], [9.4, 365.0], [9.5, 365.0], [9.6, 365.0], [9.7, 365.0], [9.8, 366.0], [9.9, 366.0], [10.0, 373.0], [10.1, 373.0], [10.2, 373.0], [10.3, 374.0], [10.4, 375.0], [10.5, 375.0], [10.6, 375.0], [10.7, 375.0], [10.8, 381.0], [10.9, 382.0], [11.0, 382.0], [11.1, 382.0], [11.2, 384.0], [11.3, 386.0], [11.4, 386.0], [11.5, 386.0], [11.6, 387.0], [11.7, 387.0], [11.8, 388.0], [11.9, 388.0], [12.0, 389.0], [12.1, 389.0], [12.2, 391.0], [12.3, 393.0], [12.4, 396.0], [12.5, 396.0], [12.6, 396.0], [12.7, 397.0], [12.8, 399.0], [12.9, 399.0], [13.0, 401.0], [13.1, 401.0], [13.2, 402.0], [13.3, 402.0], [13.4, 402.0], [13.5, 404.0], [13.6, 404.0], [13.7, 404.0], [13.8, 407.0], [13.9, 413.0], [14.0, 413.0], [14.1, 413.0], [14.2, 413.0], [14.3, 417.0], [14.4, 417.0], [14.5, 417.0], [14.6, 417.0], [14.7, 418.0], [14.8, 418.0], [14.9, 422.0], [15.0, 426.0], [15.1, 426.0], [15.2, 428.0], [15.3, 433.0], [15.4, 433.0], [15.5, 433.0], [15.6, 433.0], [15.7, 433.0], [15.8, 435.0], [15.9, 435.0], [16.0, 436.0], [16.1, 436.0], [16.2, 437.0], [16.3, 437.0], [16.4, 437.0], [16.5, 440.0], [16.6, 441.0], [16.7, 441.0], [16.8, 442.0], [16.9, 443.0], [17.0, 443.0], [17.1, 445.0], [17.2, 447.0], [17.3, 448.0], [17.4, 448.0], [17.5, 448.0], [17.6, 450.0], [17.7, 452.0], [17.8, 452.0], [17.9, 452.0], [18.0, 454.0], [18.1, 454.0], [18.2, 454.0], [18.3, 454.0], [18.4, 454.0], [18.5, 454.0], [18.6, 454.0], [18.7, 456.0], [18.8, 456.0], [18.9, 456.0], [19.0, 456.0], [19.1, 456.0], [19.2, 456.0], [19.3, 456.0], [19.4, 457.0], [19.5, 458.0], [19.6, 460.0], [19.7, 460.0], [19.8, 460.0], [19.9, 462.0], [20.0, 462.0], [20.1, 462.0], [20.2, 463.0], [20.3, 463.0], [20.4, 463.0], [20.5, 465.0], [20.6, 466.0], [20.7, 468.0], [20.8, 468.0], [20.9, 469.0], [21.0, 472.0], [21.1, 473.0], [21.2, 473.0], [21.3, 473.0], [21.4, 474.0], [21.5, 475.0], [21.6, 475.0], [21.7, 476.0], [21.8, 477.0], [21.9, 477.0], [22.0, 477.0], [22.1, 477.0], [22.2, 478.0], [22.3, 478.0], [22.4, 478.0], [22.5, 478.0], [22.6, 479.0], [22.7, 479.0], [22.8, 479.0], [22.9, 482.0], [23.0, 483.0], [23.1, 483.0], [23.2, 483.0], [23.3, 484.0], [23.4, 484.0], [23.5, 485.0], [23.6, 485.0], [23.7, 485.0], [23.8, 485.0], [23.9, 487.0], [24.0, 489.0], [24.1, 490.0], [24.2, 490.0], [24.3, 491.0], [24.4, 492.0], [24.5, 492.0], [24.6, 492.0], [24.7, 494.0], [24.8, 499.0], [24.9, 500.0], [25.0, 500.0], [25.1, 501.0], [25.2, 502.0], [25.3, 502.0], [25.4, 502.0], [25.5, 503.0], [25.6, 504.0], [25.7, 504.0], [25.8, 506.0], [25.9, 507.0], [26.0, 508.0], [26.1, 508.0], [26.2, 508.0], [26.3, 509.0], [26.4, 509.0], [26.5, 509.0], [26.6, 509.0], [26.7, 509.0], [26.8, 509.0], [26.9, 511.0], [27.0, 512.0], [27.1, 514.0], [27.2, 514.0], [27.3, 514.0], [27.4, 516.0], [27.5, 517.0], [27.6, 517.0], [27.7, 520.0], [27.8, 521.0], [27.9, 524.0], [28.0, 524.0], [28.1, 525.0], [28.2, 526.0], [28.3, 529.0], [28.4, 529.0], [28.5, 532.0], [28.6, 532.0], [28.7, 532.0], [28.8, 534.0], [28.9, 537.0], [29.0, 537.0], [29.1, 537.0], [29.2, 537.0], [29.3, 538.0], [29.4, 539.0], [29.5, 539.0], [29.6, 540.0], [29.7, 540.0], [29.8, 540.0], [29.9, 540.0], [30.0, 540.0], [30.1, 542.0], [30.2, 542.0], [30.3, 543.0], [30.4, 543.0], [30.5, 544.0], [30.6, 544.0], [30.7, 544.0], [30.8, 546.0], [30.9, 547.0], [31.0, 547.0], [31.1, 548.0], [31.2, 549.0], [31.3, 556.0], [31.4, 556.0], [31.5, 556.0], [31.6, 557.0], [31.7, 557.0], [31.8, 559.0], [31.9, 563.0], [32.0, 569.0], [32.1, 569.0], [32.2, 570.0], [32.3, 571.0], [32.4, 579.0], [32.5, 579.0], [32.6, 582.0], [32.7, 583.0], [32.8, 583.0], [32.9, 583.0], [33.0, 584.0], [33.1, 585.0], [33.2, 589.0], [33.3, 589.0], [33.4, 590.0], [33.5, 590.0], [33.6, 590.0], [33.7, 592.0], [33.8, 593.0], [33.9, 596.0], [34.0, 596.0], [34.1, 597.0], [34.2, 598.0], [34.3, 599.0], [34.4, 599.0], [34.5, 599.0], [34.6, 600.0], [34.7, 602.0], [34.8, 602.0], [34.9, 603.0], [35.0, 604.0], [35.1, 604.0], [35.2, 605.0], [35.3, 607.0], [35.4, 608.0], [35.5, 608.0], [35.6, 610.0], [35.7, 612.0], [35.8, 620.0], [35.9, 620.0], [36.0, 620.0], [36.1, 621.0], [36.2, 621.0], [36.3, 621.0], [36.4, 623.0], [36.5, 627.0], [36.6, 633.0], [36.7, 633.0], [36.8, 634.0], [36.9, 635.0], [37.0, 635.0], [37.1, 635.0], [37.2, 636.0], [37.3, 638.0], [37.4, 638.0], [37.5, 639.0], [37.6, 639.0], [37.7, 640.0], [37.8, 640.0], [37.9, 641.0], [38.0, 641.0], [38.1, 643.0], [38.2, 643.0], [38.3, 645.0], [38.4, 649.0], [38.5, 649.0], [38.6, 649.0], [38.7, 650.0], [38.8, 651.0], [38.9, 651.0], [39.0, 652.0], [39.1, 657.0], [39.2, 658.0], [39.3, 658.0], [39.4, 659.0], [39.5, 660.0], [39.6, 663.0], [39.7, 663.0], [39.8, 664.0], [39.9, 669.0], [40.0, 669.0], [40.1, 669.0], [40.2, 671.0], [40.3, 671.0], [40.4, 671.0], [40.5, 674.0], [40.6, 674.0], [40.7, 674.0], [40.8, 674.0], [40.9, 674.0], [41.0, 675.0], [41.1, 679.0], [41.2, 679.0], [41.3, 680.0], [41.4, 680.0], [41.5, 683.0], [41.6, 683.0], [41.7, 684.0], [41.8, 684.0], [41.9, 684.0], [42.0, 687.0], [42.1, 687.0], [42.2, 693.0], [42.3, 693.0], [42.4, 693.0], [42.5, 697.0], [42.6, 697.0], [42.7, 697.0], [42.8, 699.0], [42.9, 699.0], [43.0, 700.0], [43.1, 700.0], [43.2, 700.0], [43.3, 701.0], [43.4, 701.0], [43.5, 702.0], [43.6, 703.0], [43.7, 706.0], [43.8, 706.0], [43.9, 708.0], [44.0, 710.0], [44.1, 711.0], [44.2, 711.0], [44.3, 714.0], [44.4, 715.0], [44.5, 716.0], [44.6, 716.0], [44.7, 719.0], [44.8, 719.0], [44.9, 719.0], [45.0, 719.0], [45.1, 720.0], [45.2, 721.0], [45.3, 721.0], [45.4, 723.0], [45.5, 723.0], [45.6, 725.0], [45.7, 725.0], [45.8, 727.0], [45.9, 733.0], [46.0, 733.0], [46.1, 733.0], [46.2, 734.0], [46.3, 734.0], [46.4, 734.0], [46.5, 734.0], [46.6, 734.0], [46.7, 735.0], [46.8, 735.0], [46.9, 736.0], [47.0, 738.0], [47.1, 742.0], [47.2, 742.0], [47.3, 742.0], [47.4, 743.0], [47.5, 744.0], [47.6, 744.0], [47.7, 746.0], [47.8, 749.0], [47.9, 750.0], [48.0, 750.0], [48.1, 752.0], [48.2, 754.0], [48.3, 755.0], [48.4, 755.0], [48.5, 757.0], [48.6, 760.0], [48.7, 760.0], [48.8, 761.0], [48.9, 762.0], [49.0, 763.0], [49.1, 763.0], [49.2, 764.0], [49.3, 764.0], [49.4, 765.0], [49.5, 765.0], [49.6, 765.0], [49.7, 766.0], [49.8, 770.0], [49.9, 770.0], [50.0, 777.0], [50.1, 777.0], [50.2, 777.0], [50.3, 779.0], [50.4, 781.0], [50.5, 781.0], [50.6, 781.0], [50.7, 781.0], [50.8, 783.0], [50.9, 783.0], [51.0, 783.0], [51.1, 785.0], [51.2, 786.0], [51.3, 787.0], [51.4, 787.0], [51.5, 789.0], [51.6, 792.0], [51.7, 792.0], [51.8, 792.0], [51.9, 798.0], [52.0, 798.0], [52.1, 798.0], [52.2, 806.0], [52.3, 809.0], [52.4, 813.0], [52.5, 813.0], [52.6, 814.0], [52.7, 821.0], [52.8, 822.0], [52.9, 822.0], [53.0, 825.0], [53.1, 831.0], [53.2, 831.0], [53.3, 831.0], [53.4, 834.0], [53.5, 838.0], [53.6, 838.0], [53.7, 840.0], [53.8, 843.0], [53.9, 844.0], [54.0, 844.0], [54.1, 846.0], [54.2, 850.0], [54.3, 850.0], [54.4, 850.0], [54.5, 851.0], [54.6, 851.0], [54.7, 856.0], [54.8, 856.0], [54.9, 860.0], [55.0, 860.0], [55.1, 860.0], [55.2, 861.0], [55.3, 863.0], [55.4, 870.0], [55.5, 870.0], [55.6, 872.0], [55.7, 883.0], [55.8, 886.0], [55.9, 886.0], [56.0, 886.0], [56.1, 893.0], [56.2, 899.0], [56.3, 899.0], [56.4, 911.0], [56.5, 912.0], [56.6, 913.0], [56.7, 913.0], [56.8, 914.0], [56.9, 924.0], [57.0, 924.0], [57.1, 927.0], [57.2, 931.0], [57.3, 934.0], [57.4, 934.0], [57.5, 944.0], [57.6, 945.0], [57.7, 946.0], [57.8, 946.0], [57.9, 946.0], [58.0, 948.0], [58.1, 951.0], [58.2, 951.0], [58.3, 956.0], [58.4, 959.0], [58.5, 959.0], [58.6, 960.0], [58.7, 962.0], [58.8, 965.0], [58.9, 965.0], [59.0, 968.0], [59.1, 974.0], [59.2, 975.0], [59.3, 975.0], [59.4, 983.0], [59.5, 989.0], [59.6, 994.0], [59.7, 994.0], [59.8, 997.0], [59.9, 999.0], [60.0, 1000.0], [60.1, 1000.0], [60.2, 1001.0], [60.3, 1003.0], [60.4, 1003.0], [60.5, 1005.0], [60.6, 1007.0], [60.7, 1009.0], [60.8, 1009.0], [60.9, 1010.0], [61.0, 1017.0], [61.1, 1017.0], [61.2, 1017.0], [61.3, 1017.0], [61.4, 1018.0], [61.5, 1020.0], [61.6, 1020.0], [61.7, 1022.0], [61.8, 1027.0], [61.9, 1027.0], [62.0, 1028.0], [62.1, 1033.0], [62.2, 1035.0], [62.3, 1035.0], [62.4, 1039.0], [62.5, 1042.0], [62.6, 1044.0], [62.7, 1044.0], [62.8, 1046.0], [62.9, 1051.0], [63.0, 1057.0], [63.1, 1057.0], [63.2, 1060.0], [63.3, 1060.0], [63.4, 1060.0], [63.5, 1061.0], [63.6, 1065.0], [63.7, 1066.0], [63.8, 1066.0], [63.9, 1066.0], [64.0, 1068.0], [64.1, 1068.0], [64.2, 1068.0], [64.3, 1071.0], [64.4, 1072.0], [64.5, 1075.0], [64.6, 1075.0], [64.7, 1076.0], [64.8, 1078.0], [64.9, 1089.0], [65.0, 1089.0], [65.1, 1092.0], [65.2, 1093.0], [65.3, 1093.0], [65.4, 1094.0], [65.5, 1100.0], [65.6, 1102.0], [65.7, 1102.0], [65.8, 1102.0], [65.9, 1116.0], [66.0, 1117.0], [66.1, 1117.0], [66.2, 1120.0], [66.3, 1121.0], [66.4, 1126.0], [66.5, 1126.0], [66.6, 1129.0], [66.7, 1129.0], [66.8, 1129.0], [66.9, 1134.0], [67.0, 1138.0], [67.1, 1139.0], [67.2, 1139.0], [67.3, 1146.0], [67.4, 1152.0], [67.5, 1155.0], [67.6, 1155.0], [67.7, 1158.0], [67.8, 1165.0], [67.9, 1166.0], [68.0, 1166.0], [68.1, 1169.0], [68.2, 1171.0], [68.3, 1174.0], [68.4, 1174.0], [68.5, 1179.0], [68.6, 1179.0], [68.7, 1179.0], [68.8, 1183.0], [68.9, 1185.0], [69.0, 1188.0], [69.1, 1188.0], [69.2, 1195.0], [69.3, 1197.0], [69.4, 1198.0], [69.5, 1198.0], [69.6, 1199.0], [69.7, 1206.0], [69.8, 1211.0], [69.9, 1211.0], [70.0, 1216.0], [70.1, 1219.0], [70.2, 1219.0], [70.3, 1223.0], [70.4, 1229.0], [70.5, 1238.0], [70.6, 1238.0], [70.7, 1245.0], [70.8, 1245.0], [70.9, 1246.0], [71.0, 1246.0], [71.1, 1247.0], [71.2, 1255.0], [71.3, 1259.0], [71.4, 1259.0], [71.5, 1262.0], [71.6, 1266.0], [71.7, 1266.0], [71.8, 1268.0], [71.9, 1277.0], [72.0, 1278.0], [72.1, 1278.0], [72.2, 1290.0], [72.3, 1291.0], [72.4, 1296.0], [72.5, 1296.0], [72.6, 1303.0], [72.7, 1311.0], [72.8, 1313.0], [72.9, 1313.0], [73.0, 1317.0], [73.1, 1324.0], [73.2, 1324.0], [73.3, 1324.0], [73.4, 1331.0], [73.5, 1332.0], [73.6, 1332.0], [73.7, 1337.0], [73.8, 1340.0], [73.9, 1342.0], [74.0, 1342.0], [74.1, 1343.0], [74.2, 1356.0], [74.3, 1356.0], [74.4, 1356.0], [74.5, 1373.0], [74.6, 1376.0], [74.7, 1398.0], [74.8, 1398.0], [74.9, 1421.0], [75.0, 1425.0], [75.1, 1425.0], [75.2, 1426.0], [75.3, 1437.0], [75.4, 1445.0], [75.5, 1445.0], [75.6, 1452.0], [75.7, 1456.0], [75.8, 1456.0], [75.9, 1456.0], [76.0, 1470.0], [76.1, 1472.0], [76.2, 1489.0], [76.3, 1489.0], [76.4, 1491.0], [76.5, 1494.0], [76.6, 1502.0], [76.7, 1502.0], [76.8, 1506.0], [76.9, 1518.0], [77.0, 1518.0], [77.1, 1524.0], [77.2, 1531.0], [77.3, 1534.0], [77.4, 1534.0], [77.5, 1535.0], [77.6, 1540.0], [77.7, 1564.0], [77.8, 1564.0], [77.9, 1569.0], [78.0, 1580.0], [78.1, 1582.0], [78.2, 1582.0], [78.3, 1588.0], [78.4, 1599.0], [78.5, 1599.0], [78.6, 1613.0], [78.7, 1624.0], [78.8, 1625.0], [78.9, 1625.0], [79.0, 1633.0], [79.1, 1636.0], [79.2, 1638.0], [79.3, 1638.0], [79.4, 1640.0], [79.5, 1655.0], [79.6, 1663.0], [79.7, 1663.0], [79.8, 1674.0], [79.9, 1676.0], [80.0, 1683.0], [80.1, 1683.0], [80.2, 1695.0], [80.3, 1700.0], [80.4, 1700.0], [80.5, 1710.0], [80.6, 1737.0], [80.7, 1758.0], [80.8, 1758.0], [80.9, 1762.0], [81.0, 1795.0], [81.1, 1797.0], [81.2, 1797.0], [81.3, 1836.0], [81.4, 1856.0], [81.5, 1876.0], [81.6, 1876.0], [81.7, 1885.0], [81.8, 1894.0], [81.9, 1894.0], [82.0, 1897.0], [82.1, 1903.0], [82.2, 1918.0], [82.3, 1918.0], [82.4, 1921.0], [82.5, 1934.0], [82.6, 1979.0], [82.7, 1979.0], [82.8, 1982.0], [82.9, 1997.0], [83.0, 2086.0], [83.1, 2086.0], [83.2, 2114.0], [83.3, 2115.0], [83.4, 2115.0], [83.5, 2161.0], [83.6, 2183.0], [83.7, 2192.0], [83.8, 2192.0], [83.9, 2216.0], [84.0, 2230.0], [84.1, 2249.0], [84.2, 2249.0], [84.3, 2292.0], [84.4, 2324.0], [84.5, 2356.0], [84.6, 2356.0], [84.7, 2369.0], [84.8, 2406.0], [84.9, 2410.0], [85.0, 2410.0], [85.1, 2497.0], [85.2, 2511.0], [85.3, 2511.0], [85.4, 2573.0], [85.5, 2635.0], [85.6, 2686.0], [85.7, 2686.0], [85.8, 2743.0], [85.9, 2772.0], [86.0, 2806.0], [86.1, 2806.0], [86.2, 2955.0], [86.3, 3039.0], [86.4, 3042.0], [86.5, 3042.0], [86.6, 3102.0], [86.7, 3147.0], [86.8, 3147.0], [86.9, 3156.0], [87.0, 3219.0], [87.1, 3299.0], [87.2, 3299.0], [87.3, 3412.0], [87.4, 3566.0], [87.5, 3629.0], [87.6, 3629.0], [87.7, 3682.0], [87.8, 3730.0], [87.9, 3949.0], [88.0, 3949.0], [88.1, 4107.0], [88.2, 4314.0], [88.3, 10187.0], [88.4, 10187.0], [88.5, 12080.0], [88.6, 13495.0], [88.7, 13495.0], [88.8, 13718.0], [88.9, 15961.0], [89.0, 17732.0], [89.1, 17732.0], [89.2, 18803.0], [89.3, 19961.0], [89.4, 20305.0], [89.5, 20305.0], [89.6, 24962.0], [89.7, 26728.0], [89.8, 26994.0], [89.9, 26994.0], [90.0, 28060.0], [90.1, 28884.0], [90.2, 28884.0], [90.3, 30522.0], [90.4, 36556.0], [90.5, 40074.0], [90.6, 40074.0], [90.7, 42098.0], [90.8, 42544.0], [90.9, 43538.0], [91.0, 43538.0], [91.1, 45318.0], [91.2, 46974.0], [91.3, 48968.0], [91.4, 48968.0], [91.5, 50039.0], [91.6, 51076.0], [91.7, 51076.0], [91.8, 69480.0], [91.9, 69904.0], [92.0, 70717.0], [92.1, 70717.0], [92.2, 70863.0], [92.3, 71138.0], [92.4, 71957.0], [92.5, 71957.0], [92.6, 72094.0], [92.7, 72223.0], [92.8, 72366.0], [92.9, 72366.0], [93.0, 72457.0], [93.1, 72461.0], [93.2, 72817.0], [93.3, 72817.0], [93.4, 72826.0], [93.5, 72923.0], [93.6, 72923.0], [93.7, 72998.0], [93.8, 73159.0], [93.9, 73433.0], [94.0, 73433.0], [94.1, 73968.0], [94.2, 74224.0], [94.3, 74269.0], [94.4, 74269.0], [94.5, 74976.0], [94.6, 75050.0], [94.7, 75516.0], [94.8, 75516.0], [94.9, 75746.0], [95.0, 76004.0], [95.1, 76004.0], [95.2, 76253.0], [95.3, 77892.0], [95.4, 85615.0], [95.5, 85615.0], [95.6, 86017.0], [95.7, 86535.0], [95.8, 86690.0], [95.9, 86690.0], [96.0, 87700.0], [96.1, 88705.0], [96.2, 89655.0], [96.3, 89655.0], [96.4, 92155.0], [96.5, 92782.0], [96.6, 94052.0], [96.7, 94052.0], [96.8, 95506.0], [96.9, 115059.0], [97.0, 115059.0], [97.1, 117390.0], [97.2, 121971.0], [97.3, 129329.0], [97.4, 129329.0], [97.5, 142253.0], [97.6, 142815.0], [97.7, 142869.0], [97.8, 142869.0], [97.9, 145154.0], [98.0, 148965.0], [98.1, 150712.0], [98.2, 150712.0], [98.3, 164429.0], [98.4, 168917.0], [98.5, 168917.0], [98.6, 172478.0], [98.7, 210766.0], [98.8, 214295.0], [98.9, 214295.0], [99.0, 214762.0], [99.1, 235474.0], [99.2, 286391.0], [99.3, 286391.0], [99.4, 287741.0], [99.5, 288060.0], [99.6, 288524.0], [99.7, 288524.0], [99.8, 323012.0], [99.9, 324520.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 88.0, "series": [{"data": [[288000.0, 1.0], [148900.0, 1.0], [168900.0, 1.0], [71900.0, 1.0], [71100.0, 1.0], [70700.0, 1.0], [72300.0, 1.0], [73100.0, 1.0], [69900.0, 1.0], [75500.0, 1.0], [73900.0, 1.0], [88700.0, 1.0], [92700.0, 1.0], [95500.0, 1.0], [121900.0, 1.0], [287700.0, 1.0], [324500.0, 1.0], [235400.0, 1.0], [100.0, 2.0], [286300.0, 1.0], [145100.0, 1.0], [36500.0, 1.0], [150700.0, 1.0], [42500.0, 1.0], [43500.0, 1.0], [45300.0, 1.0], [46900.0, 1.0], [48900.0, 1.0], [200.0, 24.0], [210700.0, 1.0], [214700.0, 1.0], [69400.0, 1.0], [72200.0, 1.0], [73400.0, 1.0], [300.0, 69.0], [74200.0, 2.0], [75000.0, 1.0], [76200.0, 1.0], [77800.0, 1.0], [86600.0, 1.0], [400.0, 88.0], [115000.0, 1.0], [500.0, 71.0], [142800.0, 2.0], [600.0, 62.0], [164400.0, 1.0], [700.0, 67.0], [172400.0, 1.0], [800.0, 31.0], [900.0, 27.0], [1000.0, 40.0], [1100.0, 31.0], [1200.0, 21.0], [1300.0, 17.0], [1400.0, 13.0], [1500.0, 14.0], [1600.0, 13.0], [1700.0, 7.0], [1800.0, 6.0], [1900.0, 7.0], [2000.0, 1.0], [2100.0, 5.0], [2300.0, 3.0], [2200.0, 4.0], [2400.0, 3.0], [2500.0, 2.0], [2600.0, 2.0], [2800.0, 1.0], [2700.0, 2.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 3.0], [3200.0, 2.0], [3400.0, 1.0], [3500.0, 1.0], [3700.0, 1.0], [3600.0, 2.0], [3900.0, 1.0], [4100.0, 1.0], [4300.0, 1.0], [72900.0, 2.0], [75700.0, 1.0], [74900.0, 1.0], [87700.0, 1.0], [86500.0, 1.0], [92100.0, 1.0], [117300.0, 1.0], [129300.0, 1.0], [288500.0, 1.0], [142200.0, 1.0], [10100.0, 1.0], [12000.0, 1.0], [13700.0, 1.0], [214200.0, 1.0], [13400.0, 1.0], [15900.0, 1.0], [17700.0, 1.0], [18800.0, 1.0], [20300.0, 1.0], [19900.0, 1.0], [24900.0, 1.0], [26700.0, 1.0], [26900.0, 1.0], [28000.0, 1.0], [28800.0, 1.0], [30500.0, 1.0], [40000.0, 1.0], [42000.0, 1.0], [51000.0, 1.0], [50000.0, 1.0], [70800.0, 1.0], [72800.0, 2.0], [72000.0, 1.0], [72400.0, 2.0], [76000.0, 1.0], [323000.0, 1.0], [85600.0, 1.0], [86000.0, 1.0], [89600.0, 1.0], [94000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 324500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 172.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 379.0, "series": [{"data": [[0.0, 184.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 379.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 172.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.848275862068967, "minX": 1.60234746E12, "maxY": 10.0, "series": [{"data": [[1.60234818E12, 10.0], [1.60234758E12, 10.0], [1.60234788E12, 10.0], [1.60234824E12, 10.0], [1.60234764E12, 10.0], [1.6023483E12, 10.0], [1.602348E12, 10.0], [1.60234836E12, 9.848275862068967], [1.60234806E12, 10.0], [1.60234746E12, 10.0], [1.60234776E12, 10.0], [1.60234782E12, 10.0], [1.60234812E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234836E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 359.0, "minX": 1.0, "maxY": 12166.286501377406, "series": [{"data": [[8.0, 396.0], [4.0, 669.0], [1.0, 3147.0], [9.0, 359.0], [10.0, 12166.286501377406], [5.0, 1068.0], [6.0, 735.0], [3.0, 1394.0], [7.0, 361.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421766, 12030.268027210881]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15.6, "minX": 1.60234746E12, "maxY": 754915.2333333333, "series": [{"data": [[1.60234818E12, 9847.916666666666], [1.60234758E12, 58946.63333333333], [1.60234788E12, 754915.2333333333], [1.60234824E12, 46872.96666666667], [1.60234764E12, 1210.4166666666667], [1.6023483E12, 85877.15], [1.602348E12, 22646.866666666665], [1.60234836E12, 639443.1666666666], [1.60234806E12, 1743.4666666666667], [1.60234746E12, 53282.183333333334], [1.60234776E12, 690.9666666666667], [1.60234782E12, 79156.7], [1.60234812E12, 1081.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60234818E12, 59.45], [1.60234758E12, 78.06666666666666], [1.60234788E12, 2412.5], [1.60234824E12, 194.5], [1.60234764E12, 72.23333333333333], [1.6023483E12, 195.7], [1.602348E12, 54.55], [1.60234836E12, 2246.6], [1.60234806E12, 45.81666666666667], [1.60234746E12, 125.66666666666667], [1.60234776E12, 15.6], [1.60234782E12, 135.28333333333333], [1.60234812E12, 58.56666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234836E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1768.0625, "minX": 1.60234746E12, "maxY": 144870.0, "series": [{"data": [[1.60234818E12, 144870.0], [1.60234758E12, 71320.90000000001], [1.60234788E12, 5345.533762057878], [1.60234824E12, 35060.399999999994], [1.60234764E12, 40079.4], [1.6023483E12, 7185.880000000001], [1.602348E12, 53553.42857142857], [1.60234836E12, 3372.158620689656], [1.60234806E12, 108447.66666666666], [1.60234746E12, 1768.0625], [1.60234776E12, 72639.0], [1.60234782E12, 75373.11764705878], [1.60234812E12, 49033.75]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234836E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1765.5000000000002, "minX": 1.60234746E12, "maxY": 144868.87499999997, "series": [{"data": [[1.60234818E12, 144868.87499999997], [1.60234758E12, 71251.70000000001], [1.60234788E12, 5321.450160771706], [1.60234824E12, 35051.31999999999], [1.60234764E12, 40079.1], [1.6023483E12, 7183.960000000002], [1.602348E12, 53529.28571428572], [1.60234836E12, 3347.458620689657], [1.60234806E12, 108446.66666666666], [1.60234746E12, 1765.5000000000002], [1.60234776E12, 72639.0], [1.60234782E12, 75371.11764705883], [1.60234812E12, 49033.625]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234836E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.7142857142857143, "minX": 1.60234746E12, "maxY": 4.6, "series": [{"data": [[1.60234818E12, 1.25], [1.60234758E12, 4.6], [1.60234788E12, 0.9163987138263668], [1.60234824E12, 0.92], [1.60234764E12, 1.2], [1.6023483E12, 0.84], [1.602348E12, 0.7142857142857143], [1.60234836E12, 0.8482758620689657], [1.60234806E12, 1.0], [1.60234746E12, 3.75], [1.60234776E12, 1.0], [1.60234782E12, 1.3529411764705885], [1.60234812E12, 1.25]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234836E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 193.0, "minX": 1.60234746E12, "maxY": 324520.0, "series": [{"data": [[1.60234818E12, 288060.0], [1.60234758E12, 92782.0], [1.60234788E12, 288524.0], [1.60234824E12, 142815.0], [1.60234764E12, 86535.0], [1.6023483E12, 77892.0], [1.602348E12, 76253.0], [1.60234836E12, 148965.0], [1.60234806E12, 172478.0], [1.60234746E12, 3730.0], [1.60234776E12, 72817.0], [1.60234782E12, 324520.0], [1.60234812E12, 145154.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60234818E12, 215.0], [1.60234758E12, 851.0], [1.60234788E12, 215.42399977684022], [1.60234824E12, 255.0], [1.60234764E12, 201.0], [1.6023483E12, 433.0], [1.602348E12, 260.0], [1.60234836E12, 254.0929967391491], [1.60234806E12, 199.0], [1.60234746E12, 232.0], [1.60234776E12, 72461.0], [1.60234782E12, 223.0], [1.60234812E12, 219.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60234818E12, 215.0], [1.60234758E12, 851.0], [1.60234788E12, 216.53280017852782], [1.60234824E12, 255.0], [1.60234764E12, 201.0], [1.6023483E12, 433.0], [1.602348E12, 260.0], [1.60234836E12, 266.40230130434037], [1.60234806E12, 199.0], [1.60234746E12, 232.0], [1.60234776E12, 72461.0], [1.60234782E12, 223.0], [1.60234812E12, 219.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60234818E12, 215.0], [1.60234758E12, 851.0], [1.60234788E12, 215.89199988842012], [1.60234824E12, 255.0], [1.60234764E12, 201.0], [1.6023483E12, 433.0], [1.602348E12, 260.0], [1.60234836E12, 260.93149836957457], [1.60234806E12, 199.0], [1.60234746E12, 232.0], [1.60234776E12, 72461.0], [1.60234782E12, 223.0], [1.60234812E12, 219.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60234818E12, 215.0], [1.60234758E12, 851.0], [1.60234788E12, 193.0], [1.60234824E12, 255.0], [1.60234764E12, 201.0], [1.6023483E12, 433.0], [1.602348E12, 260.0], [1.60234836E12, 211.0], [1.60234806E12, 199.0], [1.60234746E12, 232.0], [1.60234776E12, 72461.0], [1.60234782E12, 223.0], [1.60234812E12, 219.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60234818E12, 162912.5], [1.60234758E12, 87195.0], [1.60234788E12, 760.0], [1.60234824E12, 856.0], [1.60234764E12, 42290.5], [1.6023483E12, 721.0], [1.602348E12, 73433.0], [1.60234836E12, 721.5], [1.60234806E12, 119187.5], [1.60234746E12, 1768.0], [1.60234776E12, 72639.0], [1.60234782E12, 1060.0], [1.60234812E12, 48664.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234836E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 473.0, "minX": 1.0, "maxY": 3894.5, "series": [{"data": [[2.0, 1015.5], [8.0, 739.0], [9.0, 752.0], [10.0, 1116.0], [11.0, 786.5], [3.0, 3894.5], [12.0, 786.5], [13.0, 783.0], [14.0, 540.0], [15.0, 694.0], [4.0, 3438.5], [1.0, 1145.0], [16.0, 671.0], [17.0, 473.0], [5.0, 477.0], [20.0, 524.5], [6.0, 713.5], [7.0, 994.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 473.0, "minX": 1.0, "maxY": 3887.0, "series": [{"data": [[2.0, 1012.5], [8.0, 738.5], [9.0, 749.0], [10.0, 1059.5], [11.0, 785.5], [3.0, 3887.0], [12.0, 782.5], [13.0, 781.0], [14.0, 540.0], [15.0, 693.0], [4.0, 3434.5], [1.0, 1136.0], [16.0, 669.0], [17.0, 473.0], [5.0, 476.0], [20.0, 524.5], [6.0, 711.5], [7.0, 993.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60234746E12, "maxY": 5.183333333333334, "series": [{"data": [[1.60234818E12, 0.13333333333333333], [1.60234758E12, 0.16666666666666666], [1.60234788E12, 5.183333333333334], [1.60234824E12, 0.4166666666666667], [1.60234764E12, 0.16666666666666666], [1.6023483E12, 0.4166666666666667], [1.602348E12, 0.11666666666666667], [1.60234836E12, 4.666666666666667], [1.60234806E12, 0.1], [1.60234746E12, 0.43333333333333335], [1.60234776E12, 0.03333333333333333], [1.60234782E12, 0.2833333333333333], [1.60234812E12, 0.13333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234836E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60234746E12, "maxY": 5.183333333333334, "series": [{"data": [[1.60234818E12, 0.13333333333333333], [1.60234758E12, 0.16666666666666666], [1.60234788E12, 5.183333333333334], [1.60234824E12, 0.4166666666666667], [1.60234764E12, 0.16666666666666666], [1.6023483E12, 0.4166666666666667], [1.602348E12, 0.11666666666666667], [1.60234836E12, 4.833333333333333], [1.60234806E12, 0.1], [1.60234746E12, 0.26666666666666666], [1.60234776E12, 0.03333333333333333], [1.60234782E12, 0.2833333333333333], [1.60234812E12, 0.13333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234836E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60234746E12, "maxY": 5.183333333333334, "series": [{"data": [[1.60234818E12, 0.13333333333333333], [1.60234758E12, 0.16666666666666666], [1.60234788E12, 5.183333333333334], [1.60234824E12, 0.4166666666666667], [1.60234764E12, 0.16666666666666666], [1.6023483E12, 0.4166666666666667], [1.602348E12, 0.11666666666666667], [1.60234836E12, 4.833333333333333], [1.60234806E12, 0.1], [1.60234746E12, 0.26666666666666666], [1.60234776E12, 0.03333333333333333], [1.60234782E12, 0.2833333333333333], [1.60234812E12, 0.13333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234836E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60234746E12, "maxY": 5.183333333333334, "series": [{"data": [[1.60234818E12, 0.13333333333333333], [1.60234758E12, 0.16666666666666666], [1.60234788E12, 5.183333333333334], [1.60234824E12, 0.4166666666666667], [1.60234764E12, 0.16666666666666666], [1.6023483E12, 0.4166666666666667], [1.602348E12, 0.11666666666666667], [1.60234836E12, 4.833333333333333], [1.60234806E12, 0.1], [1.60234746E12, 0.26666666666666666], [1.60234776E12, 0.03333333333333333], [1.60234782E12, 0.2833333333333333], [1.60234812E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234836E12, "title": "Total Transactions Per Second"}},
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

