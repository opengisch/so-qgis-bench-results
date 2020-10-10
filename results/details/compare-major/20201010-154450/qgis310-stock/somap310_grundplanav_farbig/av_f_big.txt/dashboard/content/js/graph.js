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
        data: {"result": {"minY": 190.0, "minX": 0.0, "maxY": 4464.0, "series": [{"data": [[0.0, 190.0], [0.1, 190.0], [0.2, 200.0], [0.3, 203.0], [0.4, 203.0], [0.5, 206.0], [0.6, 209.0], [0.7, 209.0], [0.8, 209.0], [0.9, 209.0], [1.0, 210.0], [1.1, 211.0], [1.2, 211.0], [1.3, 212.0], [1.4, 212.0], [1.5, 216.0], [1.6, 216.0], [1.7, 217.0], [1.8, 224.0], [1.9, 224.0], [2.0, 238.0], [2.1, 242.0], [2.2, 244.0], [2.3, 244.0], [2.4, 246.0], [2.5, 287.0], [2.6, 294.0], [2.7, 294.0], [2.8, 297.0], [2.9, 300.0], [3.0, 300.0], [3.1, 300.0], [3.2, 308.0], [3.3, 309.0], [3.4, 309.0], [3.5, 312.0], [3.6, 313.0], [3.7, 318.0], [3.8, 318.0], [3.9, 319.0], [4.0, 327.0], [4.1, 327.0], [4.2, 327.0], [4.3, 329.0], [4.4, 331.0], [4.5, 333.0], [4.6, 333.0], [4.7, 334.0], [4.8, 336.0], [4.9, 336.0], [5.0, 336.0], [5.1, 336.0], [5.2, 342.0], [5.3, 342.0], [5.4, 343.0], [5.5, 345.0], [5.6, 345.0], [5.7, 345.0], [5.8, 346.0], [5.9, 346.0], [6.0, 348.0], [6.1, 348.0], [6.2, 348.0], [6.3, 349.0], [6.4, 349.0], [6.5, 349.0], [6.6, 350.0], [6.7, 350.0], [6.8, 350.0], [6.9, 354.0], [7.0, 356.0], [7.1, 356.0], [7.2, 356.0], [7.3, 357.0], [7.4, 358.0], [7.5, 360.0], [7.6, 360.0], [7.7, 362.0], [7.8, 362.0], [7.9, 363.0], [8.0, 363.0], [8.1, 364.0], [8.2, 365.0], [8.3, 369.0], [8.4, 369.0], [8.5, 372.0], [8.6, 374.0], [8.7, 374.0], [8.8, 377.0], [8.9, 380.0], [9.0, 382.0], [9.1, 382.0], [9.2, 386.0], [9.3, 392.0], [9.4, 395.0], [9.5, 395.0], [9.6, 397.0], [9.7, 398.0], [9.8, 399.0], [9.9, 399.0], [10.0, 401.0], [10.1, 406.0], [10.2, 406.0], [10.3, 406.0], [10.4, 406.0], [10.5, 412.0], [10.6, 412.0], [10.7, 413.0], [10.8, 417.0], [10.9, 418.0], [11.0, 418.0], [11.1, 422.0], [11.2, 422.0], [11.3, 425.0], [11.4, 425.0], [11.5, 425.0], [11.6, 425.0], [11.7, 425.0], [11.8, 426.0], [11.9, 427.0], [12.0, 427.0], [12.1, 427.0], [12.2, 427.0], [12.3, 427.0], [12.4, 429.0], [12.5, 429.0], [12.6, 429.0], [12.7, 429.0], [12.8, 430.0], [12.9, 430.0], [13.0, 430.0], [13.1, 432.0], [13.2, 433.0], [13.3, 433.0], [13.4, 435.0], [13.5, 436.0], [13.6, 436.0], [13.7, 437.0], [13.8, 437.0], [13.9, 440.0], [14.0, 440.0], [14.1, 441.0], [14.2, 441.0], [14.3, 443.0], [14.4, 443.0], [14.5, 444.0], [14.6, 446.0], [14.7, 446.0], [14.8, 446.0], [14.9, 448.0], [15.0, 448.0], [15.1, 448.0], [15.2, 449.0], [15.3, 449.0], [15.4, 449.0], [15.5, 449.0], [15.6, 449.0], [15.7, 450.0], [15.8, 452.0], [15.9, 452.0], [16.0, 455.0], [16.1, 456.0], [16.2, 457.0], [16.3, 457.0], [16.4, 457.0], [16.5, 459.0], [16.6, 460.0], [16.7, 460.0], [16.8, 461.0], [16.9, 462.0], [17.0, 462.0], [17.1, 462.0], [17.2, 462.0], [17.3, 464.0], [17.4, 464.0], [17.5, 465.0], [17.6, 467.0], [17.7, 475.0], [17.8, 475.0], [17.9, 475.0], [18.0, 476.0], [18.1, 476.0], [18.2, 476.0], [18.3, 479.0], [18.4, 483.0], [18.5, 483.0], [18.6, 485.0], [18.7, 492.0], [18.8, 492.0], [18.9, 492.0], [19.0, 493.0], [19.1, 494.0], [19.2, 497.0], [19.3, 497.0], [19.4, 501.0], [19.5, 501.0], [19.6, 508.0], [19.7, 508.0], [19.8, 509.0], [19.9, 516.0], [20.0, 517.0], [20.1, 517.0], [20.2, 522.0], [20.3, 522.0], [20.4, 522.0], [20.5, 523.0], [20.6, 524.0], [20.7, 526.0], [20.8, 526.0], [20.9, 526.0], [21.0, 528.0], [21.1, 534.0], [21.2, 534.0], [21.3, 540.0], [21.4, 541.0], [21.5, 541.0], [21.6, 541.0], [21.7, 542.0], [21.8, 546.0], [21.9, 546.0], [22.0, 549.0], [22.1, 554.0], [22.2, 556.0], [22.3, 556.0], [22.4, 557.0], [22.5, 559.0], [22.6, 559.0], [22.7, 559.0], [22.8, 560.0], [22.9, 562.0], [23.0, 564.0], [23.1, 564.0], [23.2, 565.0], [23.3, 568.0], [23.4, 568.0], [23.5, 569.0], [23.6, 572.0], [23.7, 576.0], [23.8, 576.0], [23.9, 581.0], [24.0, 581.0], [24.1, 583.0], [24.2, 583.0], [24.3, 585.0], [24.4, 586.0], [24.5, 587.0], [24.6, 587.0], [24.7, 588.0], [24.8, 591.0], [24.9, 593.0], [25.0, 593.0], [25.1, 604.0], [25.2, 606.0], [25.3, 606.0], [25.4, 606.0], [25.5, 608.0], [25.6, 611.0], [25.7, 611.0], [25.8, 614.0], [25.9, 614.0], [26.0, 617.0], [26.1, 617.0], [26.2, 619.0], [26.3, 619.0], [26.4, 619.0], [26.5, 619.0], [26.6, 622.0], [26.7, 622.0], [26.8, 622.0], [26.9, 622.0], [27.0, 623.0], [27.1, 623.0], [27.2, 623.0], [27.3, 625.0], [27.4, 626.0], [27.5, 627.0], [27.6, 627.0], [27.7, 630.0], [27.8, 631.0], [27.9, 633.0], [28.0, 633.0], [28.1, 633.0], [28.2, 634.0], [28.3, 634.0], [28.4, 634.0], [28.5, 634.0], [28.6, 637.0], [28.7, 637.0], [28.8, 638.0], [28.9, 640.0], [29.0, 642.0], [29.1, 642.0], [29.2, 643.0], [29.3, 644.0], [29.4, 644.0], [29.5, 644.0], [29.6, 645.0], [29.7, 646.0], [29.8, 646.0], [29.9, 646.0], [30.0, 647.0], [30.1, 647.0], [30.2, 647.0], [30.3, 647.0], [30.4, 648.0], [30.5, 649.0], [30.6, 649.0], [30.7, 650.0], [30.8, 650.0], [30.9, 653.0], [31.0, 653.0], [31.1, 653.0], [31.2, 653.0], [31.3, 655.0], [31.4, 655.0], [31.5, 656.0], [31.6, 658.0], [31.7, 658.0], [31.8, 660.0], [31.9, 660.0], [32.0, 664.0], [32.1, 664.0], [32.2, 664.0], [32.3, 664.0], [32.4, 668.0], [32.5, 668.0], [32.6, 669.0], [32.7, 670.0], [32.8, 672.0], [32.9, 672.0], [33.0, 673.0], [33.1, 673.0], [33.2, 674.0], [33.3, 674.0], [33.4, 674.0], [33.5, 674.0], [33.6, 674.0], [33.7, 675.0], [33.8, 675.0], [33.9, 678.0], [34.0, 678.0], [34.1, 678.0], [34.2, 680.0], [34.3, 680.0], [34.4, 680.0], [34.5, 683.0], [34.6, 684.0], [34.7, 685.0], [34.8, 685.0], [34.9, 686.0], [35.0, 687.0], [35.1, 687.0], [35.2, 687.0], [35.3, 688.0], [35.4, 688.0], [35.5, 688.0], [35.6, 689.0], [35.7, 690.0], [35.8, 691.0], [35.9, 691.0], [36.0, 692.0], [36.1, 694.0], [36.2, 694.0], [36.3, 694.0], [36.4, 696.0], [36.5, 698.0], [36.6, 701.0], [36.7, 701.0], [36.8, 705.0], [36.9, 705.0], [37.0, 705.0], [37.1, 708.0], [37.2, 708.0], [37.3, 709.0], [37.4, 709.0], [37.5, 710.0], [37.6, 712.0], [37.7, 712.0], [37.8, 712.0], [37.9, 713.0], [38.0, 716.0], [38.1, 718.0], [38.2, 718.0], [38.3, 720.0], [38.4, 721.0], [38.5, 721.0], [38.6, 722.0], [38.7, 723.0], [38.8, 728.0], [38.9, 728.0], [39.0, 728.0], [39.1, 729.0], [39.2, 729.0], [39.3, 729.0], [39.4, 729.0], [39.5, 731.0], [39.6, 732.0], [39.7, 732.0], [39.8, 732.0], [39.9, 732.0], [40.0, 733.0], [40.1, 733.0], [40.2, 735.0], [40.3, 736.0], [40.4, 736.0], [40.5, 736.0], [40.6, 737.0], [40.7, 738.0], [40.8, 738.0], [40.9, 740.0], [41.0, 741.0], [41.1, 742.0], [41.2, 742.0], [41.3, 743.0], [41.4, 743.0], [41.5, 745.0], [41.6, 745.0], [41.7, 750.0], [41.8, 751.0], [41.9, 751.0], [42.0, 752.0], [42.1, 752.0], [42.2, 754.0], [42.3, 754.0], [42.4, 756.0], [42.5, 757.0], [42.6, 759.0], [42.7, 759.0], [42.8, 759.0], [42.9, 760.0], [43.0, 761.0], [43.1, 761.0], [43.2, 763.0], [43.3, 764.0], [43.4, 764.0], [43.5, 765.0], [43.6, 766.0], [43.7, 767.0], [43.8, 767.0], [43.9, 767.0], [44.0, 769.0], [44.1, 771.0], [44.2, 771.0], [44.3, 774.0], [44.4, 779.0], [44.5, 781.0], [44.6, 781.0], [44.7, 785.0], [44.8, 788.0], [44.9, 788.0], [45.0, 788.0], [45.1, 790.0], [45.2, 794.0], [45.3, 794.0], [45.4, 796.0], [45.5, 797.0], [45.6, 800.0], [45.7, 800.0], [45.8, 800.0], [45.9, 806.0], [46.0, 808.0], [46.1, 808.0], [46.2, 808.0], [46.3, 811.0], [46.4, 812.0], [46.5, 812.0], [46.6, 814.0], [46.7, 817.0], [46.8, 817.0], [46.9, 818.0], [47.0, 818.0], [47.1, 821.0], [47.2, 821.0], [47.3, 822.0], [47.4, 829.0], [47.5, 832.0], [47.6, 832.0], [47.7, 833.0], [47.8, 837.0], [47.9, 837.0], [48.0, 837.0], [48.1, 839.0], [48.2, 842.0], [48.3, 846.0], [48.4, 846.0], [48.5, 846.0], [48.6, 848.0], [48.7, 848.0], [48.8, 848.0], [48.9, 851.0], [49.0, 851.0], [49.1, 851.0], [49.2, 853.0], [49.3, 853.0], [49.4, 855.0], [49.5, 855.0], [49.6, 858.0], [49.7, 858.0], [49.8, 859.0], [49.9, 859.0], [50.0, 865.0], [50.1, 865.0], [50.2, 865.0], [50.3, 867.0], [50.4, 868.0], [50.5, 872.0], [50.6, 872.0], [50.7, 876.0], [50.8, 876.0], [50.9, 878.0], [51.0, 878.0], [51.1, 878.0], [51.2, 879.0], [51.3, 880.0], [51.4, 880.0], [51.5, 880.0], [51.6, 881.0], [51.7, 881.0], [51.8, 883.0], [51.9, 885.0], [52.0, 886.0], [52.1, 886.0], [52.2, 887.0], [52.3, 889.0], [52.4, 890.0], [52.5, 890.0], [52.6, 892.0], [52.7, 898.0], [52.8, 899.0], [52.9, 899.0], [53.0, 904.0], [53.1, 909.0], [53.2, 909.0], [53.3, 909.0], [53.4, 909.0], [53.5, 912.0], [53.6, 912.0], [53.7, 914.0], [53.8, 914.0], [53.9, 920.0], [54.0, 920.0], [54.1, 920.0], [54.2, 926.0], [54.3, 929.0], [54.4, 929.0], [54.5, 930.0], [54.6, 931.0], [54.7, 931.0], [54.8, 931.0], [54.9, 932.0], [55.0, 934.0], [55.1, 934.0], [55.2, 936.0], [55.3, 937.0], [55.4, 939.0], [55.5, 939.0], [55.6, 943.0], [55.7, 943.0], [55.8, 952.0], [55.9, 952.0], [56.0, 960.0], [56.1, 970.0], [56.2, 971.0], [56.3, 971.0], [56.4, 971.0], [56.5, 973.0], [56.6, 973.0], [56.7, 973.0], [56.8, 976.0], [56.9, 991.0], [57.0, 991.0], [57.1, 993.0], [57.2, 996.0], [57.3, 998.0], [57.4, 998.0], [57.5, 1000.0], [57.6, 1002.0], [57.7, 1004.0], [57.8, 1004.0], [57.9, 1010.0], [58.0, 1011.0], [58.1, 1011.0], [58.2, 1011.0], [58.3, 1015.0], [58.4, 1023.0], [58.5, 1023.0], [58.6, 1024.0], [58.7, 1029.0], [58.8, 1031.0], [58.9, 1031.0], [59.0, 1036.0], [59.1, 1037.0], [59.2, 1037.0], [59.3, 1037.0], [59.4, 1038.0], [59.5, 1040.0], [59.6, 1041.0], [59.7, 1041.0], [59.8, 1042.0], [59.9, 1046.0], [60.0, 1049.0], [60.1, 1049.0], [60.2, 1050.0], [60.3, 1051.0], [60.4, 1051.0], [60.5, 1056.0], [60.6, 1057.0], [60.7, 1070.0], [60.8, 1070.0], [60.9, 1071.0], [61.0, 1072.0], [61.1, 1073.0], [61.2, 1073.0], [61.3, 1074.0], [61.4, 1077.0], [61.5, 1078.0], [61.6, 1078.0], [61.7, 1081.0], [61.8, 1083.0], [61.9, 1083.0], [62.0, 1088.0], [62.1, 1089.0], [62.2, 1091.0], [62.3, 1091.0], [62.4, 1097.0], [62.5, 1101.0], [62.6, 1105.0], [62.7, 1105.0], [62.8, 1107.0], [62.9, 1108.0], [63.0, 1114.0], [63.1, 1114.0], [63.2, 1121.0], [63.3, 1129.0], [63.4, 1129.0], [63.5, 1135.0], [63.6, 1136.0], [63.7, 1136.0], [63.8, 1136.0], [63.9, 1141.0], [64.0, 1143.0], [64.1, 1143.0], [64.2, 1143.0], [64.3, 1148.0], [64.4, 1148.0], [64.5, 1152.0], [64.6, 1152.0], [64.7, 1158.0], [64.8, 1159.0], [64.9, 1160.0], [65.0, 1160.0], [65.1, 1163.0], [65.2, 1169.0], [65.3, 1169.0], [65.4, 1173.0], [65.5, 1176.0], [65.6, 1178.0], [65.7, 1178.0], [65.8, 1179.0], [65.9, 1184.0], [66.0, 1185.0], [66.1, 1185.0], [66.2, 1190.0], [66.3, 1191.0], [66.4, 1194.0], [66.5, 1194.0], [66.6, 1194.0], [66.7, 1194.0], [66.8, 1194.0], [66.9, 1195.0], [67.0, 1196.0], [67.1, 1199.0], [67.2, 1199.0], [67.3, 1204.0], [67.4, 1209.0], [67.5, 1212.0], [67.6, 1212.0], [67.7, 1214.0], [67.8, 1217.0], [67.9, 1222.0], [68.0, 1222.0], [68.1, 1225.0], [68.2, 1229.0], [68.3, 1234.0], [68.4, 1234.0], [68.5, 1235.0], [68.6, 1237.0], [68.7, 1237.0], [68.8, 1239.0], [68.9, 1246.0], [69.0, 1246.0], [69.1, 1246.0], [69.2, 1250.0], [69.3, 1252.0], [69.4, 1255.0], [69.5, 1255.0], [69.6, 1259.0], [69.7, 1262.0], [69.8, 1266.0], [69.9, 1266.0], [70.0, 1271.0], [70.1, 1274.0], [70.2, 1274.0], [70.3, 1274.0], [70.4, 1277.0], [70.5, 1280.0], [70.6, 1280.0], [70.7, 1285.0], [70.8, 1287.0], [70.9, 1293.0], [71.0, 1293.0], [71.1, 1295.0], [71.2, 1295.0], [71.3, 1296.0], [71.4, 1296.0], [71.5, 1299.0], [71.6, 1300.0], [71.7, 1300.0], [71.8, 1315.0], [71.9, 1332.0], [72.0, 1335.0], [72.1, 1335.0], [72.2, 1339.0], [72.3, 1341.0], [72.4, 1342.0], [72.5, 1342.0], [72.6, 1355.0], [72.7, 1363.0], [72.8, 1371.0], [72.9, 1371.0], [73.0, 1373.0], [73.1, 1376.0], [73.2, 1376.0], [73.3, 1376.0], [73.4, 1378.0], [73.5, 1381.0], [73.6, 1381.0], [73.7, 1386.0], [73.8, 1394.0], [73.9, 1400.0], [74.0, 1400.0], [74.1, 1402.0], [74.2, 1403.0], [74.3, 1409.0], [74.4, 1409.0], [74.5, 1413.0], [74.6, 1426.0], [74.7, 1426.0], [74.8, 1426.0], [74.9, 1428.0], [75.0, 1429.0], [75.1, 1429.0], [75.2, 1433.0], [75.3, 1436.0], [75.4, 1439.0], [75.5, 1439.0], [75.6, 1440.0], [75.7, 1440.0], [75.8, 1441.0], [75.9, 1441.0], [76.0, 1445.0], [76.1, 1445.0], [76.2, 1448.0], [76.3, 1448.0], [76.4, 1449.0], [76.5, 1450.0], [76.6, 1457.0], [76.7, 1457.0], [76.8, 1463.0], [76.9, 1465.0], [77.0, 1465.0], [77.1, 1466.0], [77.2, 1470.0], [77.3, 1473.0], [77.4, 1473.0], [77.5, 1476.0], [77.6, 1477.0], [77.7, 1495.0], [77.8, 1495.0], [77.9, 1498.0], [78.0, 1499.0], [78.1, 1503.0], [78.2, 1503.0], [78.3, 1504.0], [78.4, 1516.0], [78.5, 1516.0], [78.6, 1519.0], [78.7, 1524.0], [78.8, 1525.0], [78.9, 1525.0], [79.0, 1529.0], [79.1, 1530.0], [79.2, 1530.0], [79.3, 1530.0], [79.4, 1534.0], [79.5, 1539.0], [79.6, 1546.0], [79.7, 1546.0], [79.8, 1547.0], [79.9, 1552.0], [80.0, 1560.0], [80.1, 1560.0], [80.2, 1560.0], [80.3, 1561.0], [80.4, 1561.0], [80.5, 1561.0], [80.6, 1561.0], [80.7, 1565.0], [80.8, 1565.0], [80.9, 1570.0], [81.0, 1571.0], [81.1, 1571.0], [81.2, 1571.0], [81.3, 1575.0], [81.4, 1579.0], [81.5, 1580.0], [81.6, 1580.0], [81.7, 1581.0], [81.8, 1590.0], [81.9, 1590.0], [82.0, 1593.0], [82.1, 1595.0], [82.2, 1597.0], [82.3, 1597.0], [82.4, 1600.0], [82.5, 1600.0], [82.6, 1616.0], [82.7, 1616.0], [82.8, 1618.0], [82.9, 1618.0], [83.0, 1618.0], [83.1, 1618.0], [83.2, 1620.0], [83.3, 1627.0], [83.4, 1627.0], [83.5, 1627.0], [83.6, 1629.0], [83.7, 1634.0], [83.8, 1634.0], [83.9, 1639.0], [84.0, 1640.0], [84.1, 1640.0], [84.2, 1640.0], [84.3, 1641.0], [84.4, 1643.0], [84.5, 1648.0], [84.6, 1648.0], [84.7, 1650.0], [84.8, 1658.0], [84.9, 1659.0], [85.0, 1659.0], [85.1, 1660.0], [85.2, 1661.0], [85.3, 1661.0], [85.4, 1665.0], [85.5, 1666.0], [85.6, 1672.0], [85.7, 1672.0], [85.8, 1674.0], [85.9, 1674.0], [86.0, 1675.0], [86.1, 1675.0], [86.2, 1676.0], [86.3, 1682.0], [86.4, 1691.0], [86.5, 1691.0], [86.6, 1691.0], [86.7, 1693.0], [86.8, 1693.0], [86.9, 1694.0], [87.0, 1710.0], [87.1, 1712.0], [87.2, 1712.0], [87.3, 1717.0], [87.4, 1725.0], [87.5, 1727.0], [87.6, 1727.0], [87.7, 1737.0], [87.8, 1738.0], [87.9, 1755.0], [88.0, 1755.0], [88.1, 1757.0], [88.2, 1759.0], [88.3, 1760.0], [88.4, 1760.0], [88.5, 1760.0], [88.6, 1761.0], [88.7, 1761.0], [88.8, 1768.0], [88.9, 1771.0], [89.0, 1782.0], [89.1, 1782.0], [89.2, 1784.0], [89.3, 1786.0], [89.4, 1788.0], [89.5, 1788.0], [89.6, 1789.0], [89.7, 1795.0], [89.8, 1797.0], [89.9, 1797.0], [90.0, 1806.0], [90.1, 1806.0], [90.2, 1806.0], [90.3, 1807.0], [90.4, 1808.0], [90.5, 1813.0], [90.6, 1813.0], [90.7, 1816.0], [90.8, 1829.0], [90.9, 1832.0], [91.0, 1832.0], [91.1, 1832.0], [91.2, 1833.0], [91.3, 1834.0], [91.4, 1834.0], [91.5, 1838.0], [91.6, 1849.0], [91.7, 1849.0], [91.8, 1863.0], [91.9, 1874.0], [92.0, 1881.0], [92.1, 1881.0], [92.2, 1889.0], [92.3, 1894.0], [92.4, 1898.0], [92.5, 1898.0], [92.6, 1901.0], [92.7, 1903.0], [92.8, 1914.0], [92.9, 1914.0], [93.0, 1917.0], [93.1, 1920.0], [93.2, 1932.0], [93.3, 1932.0], [93.4, 1946.0], [93.5, 1952.0], [93.6, 1952.0], [93.7, 1958.0], [93.8, 1961.0], [93.9, 1972.0], [94.0, 1972.0], [94.1, 1973.0], [94.2, 1975.0], [94.3, 1986.0], [94.4, 1986.0], [94.5, 1990.0], [94.6, 1997.0], [94.7, 1997.0], [94.8, 1997.0], [94.9, 1999.0], [95.0, 2018.0], [95.1, 2018.0], [95.2, 2018.0], [95.3, 2027.0], [95.4, 2043.0], [95.5, 2043.0], [95.6, 2054.0], [95.7, 2099.0], [95.8, 2102.0], [95.9, 2102.0], [96.0, 2111.0], [96.1, 2187.0], [96.2, 2193.0], [96.3, 2193.0], [96.4, 2193.0], [96.5, 2205.0], [96.6, 2205.0], [96.7, 2205.0], [96.8, 2218.0], [96.9, 2230.0], [97.0, 2230.0], [97.1, 2249.0], [97.2, 2348.0], [97.3, 2375.0], [97.4, 2375.0], [97.5, 2544.0], [97.6, 2579.0], [97.7, 2596.0], [97.8, 2596.0], [97.9, 2726.0], [98.0, 2748.0], [98.1, 2787.0], [98.2, 2787.0], [98.3, 2985.0], [98.4, 3223.0], [98.5, 3223.0], [98.6, 3275.0], [98.7, 3384.0], [98.8, 3518.0], [98.9, 3518.0], [99.0, 3604.0], [99.1, 3622.0], [99.2, 3640.0], [99.3, 3640.0], [99.4, 3728.0], [99.5, 3748.0], [99.6, 3927.0], [99.7, 3927.0], [99.8, 4051.0], [99.9, 4464.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 85.0, "series": [{"data": [[600.0, 85.0], [700.0, 66.0], [800.0, 54.0], [900.0, 33.0], [1000.0, 37.0], [1100.0, 35.0], [1200.0, 32.0], [1300.0, 17.0], [1400.0, 31.0], [1500.0, 31.0], [1600.0, 34.0], [100.0, 1.0], [1700.0, 22.0], [1800.0, 19.0], [1900.0, 18.0], [2000.0, 6.0], [2100.0, 5.0], [2200.0, 5.0], [2300.0, 2.0], [2500.0, 3.0], [2700.0, 3.0], [2900.0, 1.0], [3200.0, 2.0], [3300.0, 1.0], [200.0, 20.0], [3500.0, 1.0], [3600.0, 3.0], [3700.0, 2.0], [3900.0, 1.0], [4000.0, 1.0], [4400.0, 1.0], [300.0, 52.0], [400.0, 69.0], [500.0, 42.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 142.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 432.0, "series": [{"data": [[0.0, 142.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 432.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 161.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.538461538461538, "minX": 1.60234578E12, "maxY": 10.0, "series": [{"data": [[1.60234578E12, 10.0], [1.60234584E12, 10.0], [1.6023459E12, 6.538461538461538]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023459E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 313.0, "minX": 1.0, "maxY": 2985.0, "series": [{"data": [[8.0, 313.0], [4.0, 705.0], [2.0, 1952.0], [1.0, 1049.0], [9.0, 722.0], [10.0, 1034.7506887052327], [5.0, 633.0], [6.0, 686.0], [3.0, 2985.0], [7.0, 909.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1035.6231292516995]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 91.56666666666666, "minX": 1.60234578E12, "maxY": 1395648.8333333333, "series": [{"data": [[1.60234578E12, 417947.2], [1.60234584E12, 1395648.8333333333], [1.6023459E12, 22157.133333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60234578E12, 886.3166666666667], [1.60234584E12, 4545.15], [1.6023459E12, 91.56666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023459E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 972.3076923076923, "minX": 1.60234578E12, "maxY": 1276.7435897435894, "series": [{"data": [[1.60234578E12, 1276.7435897435894], [1.60234584E12, 990.3537190082644], [1.6023459E12, 972.3076923076923]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023459E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 971.5384615384617, "minX": 1.60234578E12, "maxY": 1275.4188034188023, "series": [{"data": [[1.60234578E12, 1275.4188034188023], [1.60234584E12, 989.3471074380167], [1.6023459E12, 971.5384615384617]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023459E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60234578E12, "maxY": 0.8119658119658122, "series": [{"data": [[1.60234578E12, 0.8119658119658122], [1.60234584E12, 0.018181818181818177], [1.6023459E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023459E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 190.0, "minX": 1.60234578E12, "maxY": 4464.0, "series": [{"data": [[1.60234578E12, 4464.0], [1.60234584E12, 3927.0], [1.6023459E12, 2985.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60234578E12, 203.55799974679948], [1.60234584E12, 209.0], [1.6023459E12, 300.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60234578E12, 204.51380010128022], [1.60234584E12, 209.0], [1.6023459E12, 300.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60234578E12, 204.08899987339973], [1.60234584E12, 209.0], [1.6023459E12, 300.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60234578E12, 203.0], [1.60234584E12, 190.0], [1.6023459E12, 300.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60234578E12, 892.0], [1.60234584E12, 853.0], [1.6023459E12, 705.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023459E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 551.5, "minX": 1.0, "maxY": 2748.0, "series": [{"data": [[8.0, 1087.0], [2.0, 1500.5], [9.0, 1057.0], [10.0, 909.0], [11.0, 892.0], [12.0, 766.5], [13.0, 683.5], [14.0, 685.5], [1.0, 2748.0], [18.0, 551.5], [5.0, 1470.0], [6.0, 1069.5], [7.0, 1194.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 551.0, "minX": 1.0, "maxY": 2745.0, "series": [{"data": [[8.0, 1086.5], [2.0, 1500.0], [9.0, 1056.0], [10.0, 908.0], [11.0, 891.0], [12.0, 766.0], [13.0, 681.0], [14.0, 685.0], [1.0, 2745.0], [18.0, 551.0], [5.0, 1468.0], [6.0, 1066.5], [7.0, 1193.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.60234578E12, "maxY": 10.083333333333334, "series": [{"data": [[1.60234578E12, 2.1166666666666667], [1.60234584E12, 10.083333333333334], [1.6023459E12, 0.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023459E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.60234578E12, "maxY": 10.083333333333334, "series": [{"data": [[1.60234578E12, 1.95], [1.60234584E12, 10.083333333333334], [1.6023459E12, 0.21666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023459E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.60234578E12, "maxY": 10.083333333333334, "series": [{"data": [[1.60234578E12, 1.95], [1.60234584E12, 10.083333333333334], [1.6023459E12, 0.21666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023459E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.60234578E12, "maxY": 10.083333333333334, "series": [{"data": [[1.60234578E12, 1.95], [1.60234584E12, 10.083333333333334], [1.6023459E12, 0.21666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023459E12, "title": "Total Transactions Per Second"}},
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

