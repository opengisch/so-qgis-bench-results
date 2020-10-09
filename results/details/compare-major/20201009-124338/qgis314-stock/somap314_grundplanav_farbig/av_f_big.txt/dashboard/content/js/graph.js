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
        data: {"result": {"minY": 200.0, "minX": 0.0, "maxY": 4523.0, "series": [{"data": [[0.0, 200.0], [0.1, 200.0], [0.2, 200.0], [0.3, 206.0], [0.4, 206.0], [0.5, 206.0], [0.6, 209.0], [0.7, 210.0], [0.8, 210.0], [0.9, 210.0], [1.0, 213.0], [1.1, 219.0], [1.2, 219.0], [1.3, 221.0], [1.4, 225.0], [1.5, 226.0], [1.6, 226.0], [1.7, 227.0], [1.8, 232.0], [1.9, 232.0], [2.0, 238.0], [2.1, 240.0], [2.2, 242.0], [2.3, 242.0], [2.4, 243.0], [2.5, 246.0], [2.6, 250.0], [2.7, 250.0], [2.8, 251.0], [2.9, 257.0], [3.0, 265.0], [3.1, 265.0], [3.2, 299.0], [3.3, 300.0], [3.4, 300.0], [3.5, 306.0], [3.6, 310.0], [3.7, 313.0], [3.8, 313.0], [3.9, 317.0], [4.0, 319.0], [4.1, 322.0], [4.2, 322.0], [4.3, 323.0], [4.4, 323.0], [4.5, 324.0], [4.6, 324.0], [4.7, 327.0], [4.8, 328.0], [4.9, 329.0], [5.0, 329.0], [5.1, 330.0], [5.2, 332.0], [5.3, 332.0], [5.4, 333.0], [5.5, 335.0], [5.6, 335.0], [5.7, 335.0], [5.8, 336.0], [5.9, 337.0], [6.0, 337.0], [6.1, 337.0], [6.2, 342.0], [6.3, 345.0], [6.4, 345.0], [6.5, 345.0], [6.6, 345.0], [6.7, 346.0], [6.8, 346.0], [6.9, 347.0], [7.0, 348.0], [7.1, 349.0], [7.2, 349.0], [7.3, 349.0], [7.4, 350.0], [7.5, 351.0], [7.6, 351.0], [7.7, 352.0], [7.8, 353.0], [7.9, 354.0], [8.0, 354.0], [8.1, 356.0], [8.2, 357.0], [8.3, 358.0], [8.4, 358.0], [8.5, 358.0], [8.6, 358.0], [8.7, 358.0], [8.8, 359.0], [8.9, 360.0], [9.0, 360.0], [9.1, 360.0], [9.2, 364.0], [9.3, 374.0], [9.4, 377.0], [9.5, 377.0], [9.6, 380.0], [9.7, 393.0], [9.8, 400.0], [9.9, 400.0], [10.0, 403.0], [10.1, 407.0], [10.2, 407.0], [10.3, 411.0], [10.4, 415.0], [10.5, 415.0], [10.6, 415.0], [10.7, 416.0], [10.8, 419.0], [10.9, 423.0], [11.0, 423.0], [11.1, 423.0], [11.2, 425.0], [11.3, 427.0], [11.4, 427.0], [11.5, 429.0], [11.6, 430.0], [11.7, 430.0], [11.8, 430.0], [11.9, 431.0], [12.0, 431.0], [12.1, 431.0], [12.2, 432.0], [12.3, 434.0], [12.4, 434.0], [12.5, 434.0], [12.6, 435.0], [12.7, 436.0], [12.8, 436.0], [12.9, 436.0], [13.0, 437.0], [13.1, 438.0], [13.2, 438.0], [13.3, 438.0], [13.4, 438.0], [13.5, 439.0], [13.6, 439.0], [13.7, 439.0], [13.8, 441.0], [13.9, 444.0], [14.0, 444.0], [14.1, 446.0], [14.2, 446.0], [14.3, 447.0], [14.4, 447.0], [14.5, 448.0], [14.6, 449.0], [14.7, 450.0], [14.8, 450.0], [14.9, 450.0], [15.0, 452.0], [15.1, 452.0], [15.2, 452.0], [15.3, 452.0], [15.4, 453.0], [15.5, 453.0], [15.6, 453.0], [15.7, 455.0], [15.8, 455.0], [15.9, 455.0], [16.0, 457.0], [16.1, 458.0], [16.2, 460.0], [16.3, 460.0], [16.4, 461.0], [16.5, 462.0], [16.6, 463.0], [16.7, 463.0], [16.8, 464.0], [16.9, 464.0], [17.0, 464.0], [17.1, 465.0], [17.2, 466.0], [17.3, 466.0], [17.4, 466.0], [17.5, 467.0], [17.6, 468.0], [17.7, 468.0], [17.8, 468.0], [17.9, 472.0], [18.0, 472.0], [18.1, 476.0], [18.2, 476.0], [18.3, 477.0], [18.4, 478.0], [18.5, 478.0], [18.6, 478.0], [18.7, 479.0], [18.8, 482.0], [18.9, 482.0], [19.0, 484.0], [19.1, 484.0], [19.2, 485.0], [19.3, 485.0], [19.4, 488.0], [19.5, 489.0], [19.6, 489.0], [19.7, 489.0], [19.8, 490.0], [19.9, 490.0], [20.0, 492.0], [20.1, 492.0], [20.2, 494.0], [20.3, 495.0], [20.4, 495.0], [20.5, 496.0], [20.6, 500.0], [20.7, 502.0], [20.8, 502.0], [20.9, 504.0], [21.0, 510.0], [21.1, 513.0], [21.2, 513.0], [21.3, 514.0], [21.4, 514.0], [21.5, 514.0], [21.6, 514.0], [21.7, 514.0], [21.8, 516.0], [21.9, 516.0], [22.0, 517.0], [22.1, 518.0], [22.2, 518.0], [22.3, 518.0], [22.4, 524.0], [22.5, 526.0], [22.6, 527.0], [22.7, 527.0], [22.8, 527.0], [22.9, 531.0], [23.0, 535.0], [23.1, 535.0], [23.2, 540.0], [23.3, 541.0], [23.4, 541.0], [23.5, 541.0], [23.6, 543.0], [23.7, 545.0], [23.8, 545.0], [23.9, 546.0], [24.0, 547.0], [24.1, 548.0], [24.2, 548.0], [24.3, 551.0], [24.4, 553.0], [24.5, 553.0], [24.6, 553.0], [24.7, 555.0], [24.8, 558.0], [24.9, 558.0], [25.0, 558.0], [25.1, 560.0], [25.2, 563.0], [25.3, 563.0], [25.4, 565.0], [25.5, 566.0], [25.6, 569.0], [25.7, 569.0], [25.8, 569.0], [25.9, 574.0], [26.0, 576.0], [26.1, 576.0], [26.2, 577.0], [26.3, 577.0], [26.4, 578.0], [26.5, 578.0], [26.6, 583.0], [26.7, 583.0], [26.8, 583.0], [26.9, 585.0], [27.0, 585.0], [27.1, 586.0], [27.2, 586.0], [27.3, 587.0], [27.4, 588.0], [27.5, 589.0], [27.6, 589.0], [27.7, 592.0], [27.8, 595.0], [27.9, 596.0], [28.0, 596.0], [28.1, 600.0], [28.2, 600.0], [28.3, 601.0], [28.4, 601.0], [28.5, 603.0], [28.6, 605.0], [28.7, 605.0], [28.8, 606.0], [28.9, 606.0], [29.0, 609.0], [29.1, 609.0], [29.2, 610.0], [29.3, 610.0], [29.4, 610.0], [29.5, 610.0], [29.6, 611.0], [29.7, 612.0], [29.8, 612.0], [29.9, 612.0], [30.0, 613.0], [30.1, 615.0], [30.2, 615.0], [30.3, 615.0], [30.4, 617.0], [30.5, 625.0], [30.6, 625.0], [30.7, 626.0], [30.8, 627.0], [30.9, 628.0], [31.0, 628.0], [31.1, 630.0], [31.2, 631.0], [31.3, 631.0], [31.4, 631.0], [31.5, 636.0], [31.6, 638.0], [31.7, 638.0], [31.8, 639.0], [31.9, 640.0], [32.0, 640.0], [32.1, 640.0], [32.2, 642.0], [32.3, 646.0], [32.4, 647.0], [32.5, 647.0], [32.6, 647.0], [32.7, 649.0], [32.8, 649.0], [32.9, 649.0], [33.0, 651.0], [33.1, 652.0], [33.2, 653.0], [33.3, 653.0], [33.4, 656.0], [33.5, 656.0], [33.6, 656.0], [33.7, 657.0], [33.8, 657.0], [33.9, 660.0], [34.0, 660.0], [34.1, 661.0], [34.2, 661.0], [34.3, 663.0], [34.4, 663.0], [34.5, 665.0], [34.6, 665.0], [34.7, 665.0], [34.8, 665.0], [34.9, 670.0], [35.0, 672.0], [35.1, 672.0], [35.2, 673.0], [35.3, 673.0], [35.4, 676.0], [35.5, 676.0], [35.6, 677.0], [35.7, 681.0], [35.8, 686.0], [35.9, 686.0], [36.0, 688.0], [36.1, 690.0], [36.2, 692.0], [36.3, 692.0], [36.4, 692.0], [36.5, 692.0], [36.6, 694.0], [36.7, 694.0], [36.8, 695.0], [36.9, 696.0], [37.0, 696.0], [37.1, 696.0], [37.2, 704.0], [37.3, 705.0], [37.4, 705.0], [37.5, 705.0], [37.6, 705.0], [37.7, 706.0], [37.8, 706.0], [37.9, 708.0], [38.0, 708.0], [38.1, 711.0], [38.2, 711.0], [38.3, 713.0], [38.4, 715.0], [38.5, 715.0], [38.6, 716.0], [38.7, 717.0], [38.8, 719.0], [38.9, 719.0], [39.0, 720.0], [39.1, 722.0], [39.2, 722.0], [39.3, 722.0], [39.4, 723.0], [39.5, 724.0], [39.6, 727.0], [39.7, 727.0], [39.8, 730.0], [39.9, 730.0], [40.0, 731.0], [40.1, 731.0], [40.2, 732.0], [40.3, 734.0], [40.4, 734.0], [40.5, 737.0], [40.6, 737.0], [40.7, 738.0], [40.8, 738.0], [40.9, 747.0], [41.0, 748.0], [41.1, 752.0], [41.2, 752.0], [41.3, 755.0], [41.4, 756.0], [41.5, 760.0], [41.6, 760.0], [41.7, 760.0], [41.8, 760.0], [41.9, 760.0], [42.0, 761.0], [42.1, 763.0], [42.2, 765.0], [42.3, 765.0], [42.4, 765.0], [42.5, 768.0], [42.6, 768.0], [42.7, 768.0], [42.8, 769.0], [42.9, 770.0], [43.0, 771.0], [43.1, 771.0], [43.2, 774.0], [43.3, 778.0], [43.4, 778.0], [43.5, 784.0], [43.6, 786.0], [43.7, 789.0], [43.8, 789.0], [43.9, 791.0], [44.0, 794.0], [44.1, 798.0], [44.2, 798.0], [44.3, 802.0], [44.4, 806.0], [44.5, 808.0], [44.6, 808.0], [44.7, 810.0], [44.8, 811.0], [44.9, 815.0], [45.0, 815.0], [45.1, 815.0], [45.2, 817.0], [45.3, 817.0], [45.4, 818.0], [45.5, 822.0], [45.6, 824.0], [45.7, 824.0], [45.8, 824.0], [45.9, 824.0], [46.0, 826.0], [46.1, 826.0], [46.2, 828.0], [46.3, 828.0], [46.4, 831.0], [46.5, 831.0], [46.6, 834.0], [46.7, 837.0], [46.8, 837.0], [46.9, 837.0], [47.0, 838.0], [47.1, 843.0], [47.2, 843.0], [47.3, 844.0], [47.4, 845.0], [47.5, 847.0], [47.6, 847.0], [47.7, 847.0], [47.8, 848.0], [47.9, 852.0], [48.0, 852.0], [48.1, 853.0], [48.2, 856.0], [48.3, 864.0], [48.4, 864.0], [48.5, 869.0], [48.6, 869.0], [48.7, 869.0], [48.8, 873.0], [48.9, 882.0], [49.0, 889.0], [49.1, 889.0], [49.2, 892.0], [49.3, 892.0], [49.4, 892.0], [49.5, 892.0], [49.6, 894.0], [49.7, 896.0], [49.8, 896.0], [49.9, 896.0], [50.0, 898.0], [50.1, 905.0], [50.2, 905.0], [50.3, 907.0], [50.4, 909.0], [50.5, 909.0], [50.6, 909.0], [50.7, 910.0], [50.8, 911.0], [50.9, 912.0], [51.0, 912.0], [51.1, 913.0], [51.2, 918.0], [51.3, 923.0], [51.4, 923.0], [51.5, 930.0], [51.6, 931.0], [51.7, 931.0], [51.8, 931.0], [51.9, 931.0], [52.0, 932.0], [52.1, 932.0], [52.2, 933.0], [52.3, 936.0], [52.4, 946.0], [52.5, 946.0], [52.6, 947.0], [52.7, 949.0], [52.8, 950.0], [52.9, 950.0], [53.0, 953.0], [53.1, 956.0], [53.2, 956.0], [53.3, 956.0], [53.4, 961.0], [53.5, 963.0], [53.6, 963.0], [53.7, 964.0], [53.8, 966.0], [53.9, 968.0], [54.0, 968.0], [54.1, 970.0], [54.2, 971.0], [54.3, 975.0], [54.4, 975.0], [54.5, 978.0], [54.6, 978.0], [54.7, 979.0], [54.8, 979.0], [54.9, 980.0], [55.0, 981.0], [55.1, 981.0], [55.2, 985.0], [55.3, 985.0], [55.4, 987.0], [55.5, 987.0], [55.6, 988.0], [55.7, 995.0], [55.8, 995.0], [55.9, 995.0], [56.0, 1002.0], [56.1, 1002.0], [56.2, 1009.0], [56.3, 1009.0], [56.4, 1009.0], [56.5, 1013.0], [56.6, 1017.0], [56.7, 1017.0], [56.8, 1019.0], [56.9, 1020.0], [57.0, 1020.0], [57.1, 1024.0], [57.2, 1028.0], [57.3, 1030.0], [57.4, 1030.0], [57.5, 1031.0], [57.6, 1032.0], [57.7, 1035.0], [57.8, 1035.0], [57.9, 1042.0], [58.0, 1042.0], [58.1, 1044.0], [58.2, 1044.0], [58.3, 1046.0], [58.4, 1048.0], [58.5, 1048.0], [58.6, 1057.0], [58.7, 1057.0], [58.8, 1058.0], [58.9, 1058.0], [59.0, 1063.0], [59.1, 1067.0], [59.2, 1068.0], [59.3, 1068.0], [59.4, 1070.0], [59.5, 1070.0], [59.6, 1071.0], [59.7, 1071.0], [59.8, 1071.0], [59.9, 1072.0], [60.0, 1073.0], [60.1, 1073.0], [60.2, 1074.0], [60.3, 1082.0], [60.4, 1082.0], [60.5, 1085.0], [60.6, 1090.0], [60.7, 1091.0], [60.8, 1091.0], [60.9, 1091.0], [61.0, 1093.0], [61.1, 1094.0], [61.2, 1094.0], [61.3, 1105.0], [61.4, 1115.0], [61.5, 1115.0], [61.6, 1115.0], [61.7, 1118.0], [61.8, 1119.0], [61.9, 1119.0], [62.0, 1123.0], [62.1, 1126.0], [62.2, 1134.0], [62.3, 1134.0], [62.4, 1135.0], [62.5, 1135.0], [62.6, 1136.0], [62.7, 1136.0], [62.8, 1137.0], [62.9, 1139.0], [63.0, 1140.0], [63.1, 1140.0], [63.2, 1141.0], [63.3, 1145.0], [63.4, 1145.0], [63.5, 1154.0], [63.6, 1156.0], [63.7, 1156.0], [63.8, 1156.0], [63.9, 1157.0], [64.0, 1162.0], [64.1, 1164.0], [64.2, 1164.0], [64.3, 1164.0], [64.4, 1165.0], [64.5, 1166.0], [64.6, 1166.0], [64.7, 1170.0], [64.8, 1171.0], [64.9, 1173.0], [65.0, 1173.0], [65.1, 1174.0], [65.2, 1174.0], [65.3, 1174.0], [65.4, 1176.0], [65.5, 1176.0], [65.6, 1180.0], [65.7, 1180.0], [65.8, 1181.0], [65.9, 1185.0], [66.0, 1185.0], [66.1, 1185.0], [66.2, 1186.0], [66.3, 1187.0], [66.4, 1189.0], [66.5, 1189.0], [66.6, 1190.0], [66.7, 1194.0], [66.8, 1194.0], [66.9, 1194.0], [67.0, 1196.0], [67.1, 1197.0], [67.2, 1197.0], [67.3, 1203.0], [67.4, 1204.0], [67.5, 1207.0], [67.6, 1207.0], [67.7, 1210.0], [67.8, 1212.0], [67.9, 1215.0], [68.0, 1215.0], [68.1, 1215.0], [68.2, 1218.0], [68.3, 1220.0], [68.4, 1220.0], [68.5, 1220.0], [68.6, 1223.0], [68.7, 1223.0], [68.8, 1227.0], [68.9, 1228.0], [69.0, 1229.0], [69.1, 1229.0], [69.2, 1233.0], [69.3, 1243.0], [69.4, 1243.0], [69.5, 1243.0], [69.6, 1250.0], [69.7, 1255.0], [69.8, 1256.0], [69.9, 1256.0], [70.0, 1259.0], [70.1, 1265.0], [70.2, 1265.0], [70.3, 1270.0], [70.4, 1273.0], [70.5, 1277.0], [70.6, 1277.0], [70.7, 1287.0], [70.8, 1296.0], [70.9, 1297.0], [71.0, 1297.0], [71.1, 1300.0], [71.2, 1301.0], [71.3, 1303.0], [71.4, 1303.0], [71.5, 1311.0], [71.6, 1313.0], [71.7, 1313.0], [71.8, 1316.0], [71.9, 1320.0], [72.0, 1324.0], [72.1, 1324.0], [72.2, 1326.0], [72.3, 1336.0], [72.4, 1337.0], [72.5, 1337.0], [72.6, 1337.0], [72.7, 1339.0], [72.8, 1341.0], [72.9, 1341.0], [73.0, 1342.0], [73.1, 1344.0], [73.2, 1345.0], [73.3, 1345.0], [73.4, 1347.0], [73.5, 1354.0], [73.6, 1354.0], [73.7, 1354.0], [73.8, 1357.0], [73.9, 1372.0], [74.0, 1372.0], [74.1, 1372.0], [74.2, 1374.0], [74.3, 1386.0], [74.4, 1386.0], [74.5, 1391.0], [74.6, 1393.0], [74.7, 1395.0], [74.8, 1395.0], [74.9, 1398.0], [75.0, 1399.0], [75.1, 1399.0], [75.2, 1404.0], [75.3, 1406.0], [75.4, 1407.0], [75.5, 1407.0], [75.6, 1412.0], [75.7, 1413.0], [75.8, 1414.0], [75.9, 1414.0], [76.0, 1420.0], [76.1, 1420.0], [76.2, 1422.0], [76.3, 1422.0], [76.4, 1425.0], [76.5, 1425.0], [76.6, 1427.0], [76.7, 1427.0], [76.8, 1428.0], [76.9, 1429.0], [77.0, 1429.0], [77.1, 1429.0], [77.2, 1430.0], [77.3, 1430.0], [77.4, 1430.0], [77.5, 1434.0], [77.6, 1452.0], [77.7, 1454.0], [77.8, 1454.0], [77.9, 1457.0], [78.0, 1460.0], [78.1, 1461.0], [78.2, 1461.0], [78.3, 1465.0], [78.4, 1466.0], [78.5, 1466.0], [78.6, 1467.0], [78.7, 1470.0], [78.8, 1471.0], [78.9, 1471.0], [79.0, 1471.0], [79.1, 1471.0], [79.2, 1471.0], [79.3, 1471.0], [79.4, 1472.0], [79.5, 1473.0], [79.6, 1478.0], [79.7, 1478.0], [79.8, 1483.0], [79.9, 1485.0], [80.0, 1486.0], [80.1, 1486.0], [80.2, 1490.0], [80.3, 1490.0], [80.4, 1490.0], [80.5, 1495.0], [80.6, 1503.0], [80.7, 1506.0], [80.8, 1506.0], [80.9, 1512.0], [81.0, 1513.0], [81.1, 1518.0], [81.2, 1518.0], [81.3, 1518.0], [81.4, 1521.0], [81.5, 1521.0], [81.6, 1521.0], [81.7, 1531.0], [81.8, 1541.0], [81.9, 1541.0], [82.0, 1543.0], [82.1, 1546.0], [82.2, 1546.0], [82.3, 1546.0], [82.4, 1554.0], [82.5, 1556.0], [82.6, 1557.0], [82.7, 1557.0], [82.8, 1565.0], [82.9, 1567.0], [83.0, 1569.0], [83.1, 1569.0], [83.2, 1574.0], [83.3, 1575.0], [83.4, 1575.0], [83.5, 1578.0], [83.6, 1587.0], [83.7, 1588.0], [83.8, 1588.0], [83.9, 1589.0], [84.0, 1593.0], [84.1, 1617.0], [84.2, 1617.0], [84.3, 1618.0], [84.4, 1621.0], [84.5, 1624.0], [84.6, 1624.0], [84.7, 1631.0], [84.8, 1631.0], [84.9, 1646.0], [85.0, 1646.0], [85.1, 1653.0], [85.2, 1653.0], [85.3, 1653.0], [85.4, 1654.0], [85.5, 1657.0], [85.6, 1662.0], [85.7, 1662.0], [85.8, 1665.0], [85.9, 1665.0], [86.0, 1672.0], [86.1, 1672.0], [86.2, 1674.0], [86.3, 1678.0], [86.4, 1683.0], [86.5, 1683.0], [86.6, 1684.0], [86.7, 1686.0], [86.8, 1686.0], [86.9, 1697.0], [87.0, 1697.0], [87.1, 1705.0], [87.2, 1705.0], [87.3, 1706.0], [87.4, 1707.0], [87.5, 1712.0], [87.6, 1712.0], [87.7, 1717.0], [87.8, 1719.0], [87.9, 1722.0], [88.0, 1722.0], [88.1, 1724.0], [88.2, 1735.0], [88.3, 1737.0], [88.4, 1737.0], [88.5, 1740.0], [88.6, 1744.0], [88.7, 1744.0], [88.8, 1752.0], [88.9, 1761.0], [89.0, 1762.0], [89.1, 1762.0], [89.2, 1763.0], [89.3, 1768.0], [89.4, 1769.0], [89.5, 1769.0], [89.6, 1775.0], [89.7, 1778.0], [89.8, 1783.0], [89.9, 1783.0], [90.0, 1783.0], [90.1, 1791.0], [90.2, 1791.0], [90.3, 1791.0], [90.4, 1794.0], [90.5, 1795.0], [90.6, 1795.0], [90.7, 1797.0], [90.8, 1800.0], [90.9, 1806.0], [91.0, 1806.0], [91.1, 1807.0], [91.2, 1811.0], [91.3, 1820.0], [91.4, 1820.0], [91.5, 1821.0], [91.6, 1831.0], [91.7, 1831.0], [91.8, 1836.0], [91.9, 1851.0], [92.0, 1859.0], [92.1, 1859.0], [92.2, 1876.0], [92.3, 1877.0], [92.4, 1880.0], [92.5, 1880.0], [92.6, 1900.0], [92.7, 1921.0], [92.8, 1935.0], [92.9, 1935.0], [93.0, 1953.0], [93.1, 1956.0], [93.2, 1986.0], [93.3, 1986.0], [93.4, 1989.0], [93.5, 1990.0], [93.6, 1990.0], [93.7, 1993.0], [93.8, 2001.0], [93.9, 2014.0], [94.0, 2014.0], [94.1, 2016.0], [94.2, 2028.0], [94.3, 2035.0], [94.4, 2035.0], [94.5, 2041.0], [94.6, 2045.0], [94.7, 2048.0], [94.8, 2048.0], [94.9, 2054.0], [95.0, 2080.0], [95.1, 2080.0], [95.2, 2081.0], [95.3, 2082.0], [95.4, 2092.0], [95.5, 2092.0], [95.6, 2092.0], [95.7, 2101.0], [95.8, 2106.0], [95.9, 2106.0], [96.0, 2121.0], [96.1, 2143.0], [96.2, 2144.0], [96.3, 2144.0], [96.4, 2146.0], [96.5, 2171.0], [96.6, 2190.0], [96.7, 2190.0], [96.8, 2220.0], [96.9, 2226.0], [97.0, 2226.0], [97.1, 2257.0], [97.2, 2295.0], [97.3, 2336.0], [97.4, 2336.0], [97.5, 2434.0], [97.6, 2453.0], [97.7, 2453.0], [97.8, 2453.0], [97.9, 2551.0], [98.0, 2554.0], [98.1, 2562.0], [98.2, 2562.0], [98.3, 2713.0], [98.4, 2737.0], [98.5, 2737.0], [98.6, 2745.0], [98.7, 2749.0], [98.8, 2835.0], [98.9, 2835.0], [99.0, 2900.0], [99.1, 2981.0], [99.2, 3089.0], [99.3, 3089.0], [99.4, 3406.0], [99.5, 3771.0], [99.6, 3891.0], [99.7, 3891.0], [99.8, 4224.0], [99.9, 4523.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 79.0, "series": [{"data": [[600.0, 67.0], [700.0, 52.0], [800.0, 43.0], [900.0, 43.0], [1000.0, 39.0], [1100.0, 44.0], [1200.0, 28.0], [1300.0, 30.0], [1400.0, 40.0], [1500.0, 26.0], [1600.0, 22.0], [1700.0, 27.0], [1800.0, 13.0], [1900.0, 9.0], [2000.0, 14.0], [2100.0, 8.0], [2200.0, 4.0], [2300.0, 1.0], [2400.0, 3.0], [2500.0, 3.0], [2700.0, 4.0], [2800.0, 1.0], [2900.0, 2.0], [3000.0, 1.0], [200.0, 24.0], [3400.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [4200.0, 1.0], [4500.0, 1.0], [300.0, 48.0], [400.0, 79.0], [500.0, 55.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 143.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 440.0, "series": [{"data": [[0.0, 152.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 440.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 143.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.60224936E12, "maxY": 10.0, "series": [{"data": [[1.60224942E12, 9.954248366013072], [1.60224936E12, 10.0], [1.60224948E12, 1.5]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224948E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 335.0, "minX": 1.0, "maxY": 1165.0, "series": [{"data": [[8.0, 335.0], [4.0, 657.0], [2.0, 1017.0], [1.0, 1135.0], [9.0, 640.0], [10.0, 1027.1060606060598], [5.0, 692.0], [6.0, 665.0], [3.0, 1165.0], [7.0, 613.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1023.9428571428567]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 13.566666666666666, "minX": 1.60224936E12, "maxY": 1407564.8333333333, "series": [{"data": [[1.60224942E12, 1407564.8333333333], [1.60224936E12, 427293.13333333336], [1.60224948E12, 827.1666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224942E12, 4592.916666666667], [1.60224936E12, 916.55], [1.60224948E12, 13.566666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224948E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 982.4885620915037, "minX": 1.60224936E12, "maxY": 1232.7520661157025, "series": [{"data": [[1.60224942E12, 982.4885620915037], [1.60224936E12, 1232.7520661157025], [1.60224948E12, 1076.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224948E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 981.5441176470587, "minX": 1.60224936E12, "maxY": 1231.512396694215, "series": [{"data": [[1.60224942E12, 981.5441176470587], [1.60224936E12, 1231.512396694215], [1.60224948E12, 1076.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224948E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60224936E12, "maxY": 0.9834710743801656, "series": [{"data": [[1.60224942E12, 0.022875816993464054], [1.60224936E12, 0.9834710743801656], [1.60224948E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224948E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 200.0, "minX": 1.60224936E12, "maxY": 4523.0, "series": [{"data": [[1.60224942E12, 3891.0], [1.60224936E12, 4523.0], [1.60224948E12, 1135.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224942E12, 225.5169998538494], [1.60224936E12, 206.2939999127388], [1.60224948E12, 1017.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224942E12, 226.06870005846022], [1.60224936E12, 206.62340003490448], [1.60224948E12, 1017.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224942E12, 225.8234999269247], [1.60224936E12, 206.4769999563694], [1.60224948E12, 1017.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224942E12, 200.0], [1.60224936E12, 206.0], [1.60224948E12, 1017.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224942E12, 869.0], [1.60224936E12, 953.0], [1.60224948E12, 1076.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224948E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 558.5, "minX": 2.0, "maxY": 2749.0, "series": [{"data": [[8.0, 1056.5], [2.0, 1076.0], [9.0, 1091.0], [10.0, 1142.5], [11.0, 824.0], [12.0, 716.0], [13.0, 691.5], [14.0, 558.5], [15.0, 786.0], [4.0, 777.0], [18.0, 683.5], [5.0, 2749.0], [6.0, 1250.5], [7.0, 1067.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 558.5, "minX": 2.0, "maxY": 2747.0, "series": [{"data": [[8.0, 1055.5], [2.0, 1076.0], [9.0, 1090.0], [10.0, 1142.5], [11.0, 823.5], [12.0, 716.0], [13.0, 690.5], [14.0, 558.5], [15.0, 786.0], [4.0, 776.0], [18.0, 683.5], [5.0, 2747.0], [6.0, 1248.5], [7.0, 1066.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.183333333333333, "minX": 1.60224936E12, "maxY": 10.066666666666666, "series": [{"data": [[1.60224942E12, 10.066666666666666], [1.60224936E12, 2.183333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224942E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60224936E12, "maxY": 10.2, "series": [{"data": [[1.60224942E12, 10.2], [1.60224936E12, 2.0166666666666666], [1.60224948E12, 0.03333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224948E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60224936E12, "maxY": 10.2, "series": [{"data": [[1.60224942E12, 10.2], [1.60224936E12, 2.0166666666666666], [1.60224948E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224948E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60224936E12, "maxY": 10.2, "series": [{"data": [[1.60224942E12, 10.2], [1.60224936E12, 2.0166666666666666], [1.60224948E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224948E12, "title": "Total Transactions Per Second"}},
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

