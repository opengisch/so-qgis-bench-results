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
        data: {"result": {"minY": 193.0, "minX": 0.0, "maxY": 3857.0, "series": [{"data": [[0.0, 193.0], [0.1, 193.0], [0.2, 211.0], [0.3, 213.0], [0.4, 213.0], [0.5, 224.0], [0.6, 226.0], [0.7, 230.0], [0.8, 230.0], [0.9, 230.0], [1.0, 232.0], [1.1, 234.0], [1.2, 234.0], [1.3, 239.0], [1.4, 246.0], [1.5, 247.0], [1.6, 247.0], [1.7, 249.0], [1.8, 250.0], [1.9, 250.0], [2.0, 253.0], [2.1, 254.0], [2.2, 256.0], [2.3, 256.0], [2.4, 290.0], [2.5, 304.0], [2.6, 305.0], [2.7, 305.0], [2.8, 305.0], [2.9, 307.0], [3.0, 310.0], [3.1, 310.0], [3.2, 312.0], [3.3, 313.0], [3.4, 313.0], [3.5, 314.0], [3.6, 320.0], [3.7, 323.0], [3.8, 323.0], [3.9, 328.0], [4.0, 331.0], [4.1, 332.0], [4.2, 332.0], [4.3, 333.0], [4.4, 333.0], [4.5, 333.0], [4.6, 333.0], [4.7, 334.0], [4.8, 334.0], [4.9, 334.0], [5.0, 334.0], [5.1, 335.0], [5.2, 338.0], [5.3, 338.0], [5.4, 340.0], [5.5, 341.0], [5.6, 343.0], [5.7, 343.0], [5.8, 344.0], [5.9, 346.0], [6.0, 346.0], [6.1, 346.0], [6.2, 347.0], [6.3, 347.0], [6.4, 350.0], [6.5, 350.0], [6.6, 351.0], [6.7, 352.0], [6.8, 352.0], [6.9, 353.0], [7.0, 354.0], [7.1, 354.0], [7.2, 354.0], [7.3, 362.0], [7.4, 363.0], [7.5, 363.0], [7.6, 363.0], [7.7, 368.0], [7.8, 370.0], [7.9, 370.0], [8.0, 370.0], [8.1, 371.0], [8.2, 372.0], [8.3, 372.0], [8.4, 372.0], [8.5, 374.0], [8.6, 375.0], [8.7, 375.0], [8.8, 378.0], [8.9, 383.0], [9.0, 385.0], [9.1, 385.0], [9.2, 386.0], [9.3, 390.0], [9.4, 392.0], [9.5, 392.0], [9.6, 393.0], [9.7, 396.0], [9.8, 397.0], [9.9, 397.0], [10.0, 399.0], [10.1, 412.0], [10.2, 412.0], [10.3, 421.0], [10.4, 433.0], [10.5, 433.0], [10.6, 433.0], [10.7, 434.0], [10.8, 439.0], [10.9, 439.0], [11.0, 439.0], [11.1, 439.0], [11.2, 440.0], [11.3, 444.0], [11.4, 444.0], [11.5, 446.0], [11.6, 446.0], [11.7, 446.0], [11.8, 447.0], [11.9, 448.0], [12.0, 448.0], [12.1, 448.0], [12.2, 449.0], [12.3, 449.0], [12.4, 449.0], [12.5, 449.0], [12.6, 450.0], [12.7, 450.0], [12.8, 451.0], [12.9, 451.0], [13.0, 452.0], [13.1, 454.0], [13.2, 456.0], [13.3, 456.0], [13.4, 456.0], [13.5, 457.0], [13.6, 457.0], [13.7, 457.0], [13.8, 457.0], [13.9, 459.0], [14.0, 459.0], [14.1, 461.0], [14.2, 462.0], [14.3, 464.0], [14.4, 464.0], [14.5, 464.0], [14.6, 465.0], [14.7, 465.0], [14.8, 465.0], [14.9, 468.0], [15.0, 468.0], [15.1, 468.0], [15.2, 471.0], [15.3, 472.0], [15.4, 472.0], [15.5, 472.0], [15.6, 473.0], [15.7, 473.0], [15.8, 473.0], [15.9, 473.0], [16.0, 475.0], [16.1, 476.0], [16.2, 478.0], [16.3, 478.0], [16.4, 478.0], [16.5, 479.0], [16.6, 479.0], [16.7, 479.0], [16.8, 481.0], [16.9, 482.0], [17.0, 482.0], [17.1, 486.0], [17.2, 487.0], [17.3, 490.0], [17.4, 490.0], [17.5, 492.0], [17.6, 492.0], [17.7, 493.0], [17.8, 493.0], [17.9, 496.0], [18.0, 496.0], [18.1, 497.0], [18.2, 497.0], [18.3, 498.0], [18.4, 499.0], [18.5, 499.0], [18.6, 501.0], [18.7, 508.0], [18.8, 509.0], [18.9, 509.0], [19.0, 511.0], [19.1, 519.0], [19.2, 521.0], [19.3, 521.0], [19.4, 522.0], [19.5, 524.0], [19.6, 525.0], [19.7, 525.0], [19.8, 527.0], [19.9, 528.0], [20.0, 528.0], [20.1, 529.0], [20.2, 532.0], [20.3, 539.0], [20.4, 539.0], [20.5, 539.0], [20.6, 541.0], [20.7, 546.0], [20.8, 546.0], [20.9, 547.0], [21.0, 547.0], [21.1, 549.0], [21.2, 549.0], [21.3, 551.0], [21.4, 553.0], [21.5, 554.0], [21.6, 554.0], [21.7, 556.0], [21.8, 558.0], [21.9, 558.0], [22.0, 558.0], [22.1, 559.0], [22.2, 562.0], [22.3, 562.0], [22.4, 573.0], [22.5, 576.0], [22.6, 576.0], [22.7, 576.0], [22.8, 577.0], [22.9, 579.0], [23.0, 581.0], [23.1, 581.0], [23.2, 583.0], [23.3, 585.0], [23.4, 585.0], [23.5, 587.0], [23.6, 589.0], [23.7, 590.0], [23.8, 590.0], [23.9, 590.0], [24.0, 597.0], [24.1, 598.0], [24.2, 598.0], [24.3, 598.0], [24.4, 599.0], [24.5, 603.0], [24.6, 603.0], [24.7, 603.0], [24.8, 608.0], [24.9, 609.0], [25.0, 609.0], [25.1, 611.0], [25.2, 612.0], [25.3, 612.0], [25.4, 613.0], [25.5, 615.0], [25.6, 617.0], [25.7, 617.0], [25.8, 618.0], [25.9, 619.0], [26.0, 620.0], [26.1, 620.0], [26.2, 621.0], [26.3, 624.0], [26.4, 626.0], [26.5, 626.0], [26.6, 628.0], [26.7, 628.0], [26.8, 628.0], [26.9, 629.0], [27.0, 630.0], [27.1, 630.0], [27.2, 630.0], [27.3, 635.0], [27.4, 635.0], [27.5, 636.0], [27.6, 636.0], [27.7, 637.0], [27.8, 637.0], [27.9, 639.0], [28.0, 639.0], [28.1, 639.0], [28.2, 641.0], [28.3, 642.0], [28.4, 642.0], [28.5, 644.0], [28.6, 646.0], [28.7, 646.0], [28.8, 647.0], [28.9, 647.0], [29.0, 652.0], [29.1, 652.0], [29.2, 655.0], [29.3, 656.0], [29.4, 656.0], [29.5, 656.0], [29.6, 657.0], [29.7, 658.0], [29.8, 658.0], [29.9, 658.0], [30.0, 659.0], [30.1, 659.0], [30.2, 659.0], [30.3, 660.0], [30.4, 664.0], [30.5, 666.0], [30.6, 666.0], [30.7, 667.0], [30.8, 669.0], [30.9, 669.0], [31.0, 669.0], [31.1, 672.0], [31.2, 680.0], [31.3, 681.0], [31.4, 681.0], [31.5, 682.0], [31.6, 682.0], [31.7, 682.0], [31.8, 683.0], [31.9, 684.0], [32.0, 686.0], [32.1, 686.0], [32.2, 687.0], [32.3, 688.0], [32.4, 690.0], [32.5, 690.0], [32.6, 691.0], [32.7, 693.0], [32.8, 695.0], [32.9, 695.0], [33.0, 698.0], [33.1, 698.0], [33.2, 698.0], [33.3, 698.0], [33.4, 701.0], [33.5, 709.0], [33.6, 709.0], [33.7, 715.0], [33.8, 715.0], [33.9, 715.0], [34.0, 715.0], [34.1, 717.0], [34.2, 718.0], [34.3, 721.0], [34.4, 721.0], [34.5, 721.0], [34.6, 721.0], [34.7, 721.0], [34.8, 721.0], [34.9, 722.0], [35.0, 722.0], [35.1, 722.0], [35.2, 724.0], [35.3, 724.0], [35.4, 725.0], [35.5, 725.0], [35.6, 726.0], [35.7, 727.0], [35.8, 729.0], [35.9, 729.0], [36.0, 731.0], [36.1, 731.0], [36.2, 732.0], [36.3, 732.0], [36.4, 733.0], [36.5, 733.0], [36.6, 733.0], [36.7, 733.0], [36.8, 735.0], [36.9, 737.0], [37.0, 737.0], [37.1, 738.0], [37.2, 740.0], [37.3, 741.0], [37.4, 741.0], [37.5, 741.0], [37.6, 741.0], [37.7, 742.0], [37.8, 742.0], [37.9, 745.0], [38.0, 746.0], [38.1, 749.0], [38.2, 749.0], [38.3, 750.0], [38.4, 750.0], [38.5, 750.0], [38.6, 751.0], [38.7, 751.0], [38.8, 752.0], [38.9, 752.0], [39.0, 752.0], [39.1, 752.0], [39.2, 753.0], [39.3, 753.0], [39.4, 754.0], [39.5, 754.0], [39.6, 756.0], [39.7, 756.0], [39.8, 758.0], [39.9, 759.0], [40.0, 760.0], [40.1, 760.0], [40.2, 763.0], [40.3, 764.0], [40.4, 764.0], [40.5, 764.0], [40.6, 766.0], [40.7, 766.0], [40.8, 766.0], [40.9, 771.0], [41.0, 771.0], [41.1, 772.0], [41.2, 772.0], [41.3, 775.0], [41.4, 778.0], [41.5, 780.0], [41.6, 780.0], [41.7, 781.0], [41.8, 782.0], [41.9, 782.0], [42.0, 782.0], [42.1, 783.0], [42.2, 789.0], [42.3, 789.0], [42.4, 790.0], [42.5, 791.0], [42.6, 791.0], [42.7, 791.0], [42.8, 792.0], [42.9, 792.0], [43.0, 792.0], [43.1, 792.0], [43.2, 793.0], [43.3, 795.0], [43.4, 795.0], [43.5, 801.0], [43.6, 801.0], [43.7, 801.0], [43.8, 801.0], [43.9, 802.0], [44.0, 803.0], [44.1, 806.0], [44.2, 806.0], [44.3, 809.0], [44.4, 809.0], [44.5, 810.0], [44.6, 810.0], [44.7, 810.0], [44.8, 812.0], [44.9, 816.0], [45.0, 816.0], [45.1, 817.0], [45.2, 823.0], [45.3, 823.0], [45.4, 825.0], [45.5, 829.0], [45.6, 829.0], [45.7, 829.0], [45.8, 830.0], [45.9, 833.0], [46.0, 841.0], [46.1, 841.0], [46.2, 841.0], [46.3, 842.0], [46.4, 843.0], [46.5, 843.0], [46.6, 843.0], [46.7, 844.0], [46.8, 844.0], [46.9, 847.0], [47.0, 848.0], [47.1, 848.0], [47.2, 848.0], [47.3, 851.0], [47.4, 853.0], [47.5, 853.0], [47.6, 853.0], [47.7, 858.0], [47.8, 861.0], [47.9, 864.0], [48.0, 864.0], [48.1, 866.0], [48.2, 867.0], [48.3, 872.0], [48.4, 872.0], [48.5, 873.0], [48.6, 874.0], [48.7, 874.0], [48.8, 876.0], [48.9, 876.0], [49.0, 878.0], [49.1, 878.0], [49.2, 883.0], [49.3, 884.0], [49.4, 885.0], [49.5, 885.0], [49.6, 888.0], [49.7, 889.0], [49.8, 891.0], [49.9, 891.0], [50.0, 892.0], [50.1, 902.0], [50.2, 902.0], [50.3, 903.0], [50.4, 907.0], [50.5, 912.0], [50.6, 912.0], [50.7, 914.0], [50.8, 915.0], [50.9, 916.0], [51.0, 916.0], [51.1, 916.0], [51.2, 918.0], [51.3, 919.0], [51.4, 919.0], [51.5, 920.0], [51.6, 921.0], [51.7, 921.0], [51.8, 924.0], [51.9, 929.0], [52.0, 930.0], [52.1, 930.0], [52.2, 930.0], [52.3, 933.0], [52.4, 941.0], [52.5, 941.0], [52.6, 941.0], [52.7, 942.0], [52.8, 956.0], [52.9, 956.0], [53.0, 963.0], [53.1, 963.0], [53.2, 968.0], [53.3, 968.0], [53.4, 969.0], [53.5, 972.0], [53.6, 972.0], [53.7, 973.0], [53.8, 974.0], [53.9, 980.0], [54.0, 980.0], [54.1, 984.0], [54.2, 989.0], [54.3, 989.0], [54.4, 989.0], [54.5, 990.0], [54.6, 991.0], [54.7, 995.0], [54.8, 995.0], [54.9, 998.0], [55.0, 1002.0], [55.1, 1002.0], [55.2, 1006.0], [55.3, 1008.0], [55.4, 1016.0], [55.5, 1016.0], [55.6, 1016.0], [55.7, 1021.0], [55.8, 1031.0], [55.9, 1031.0], [56.0, 1031.0], [56.1, 1036.0], [56.2, 1038.0], [56.3, 1038.0], [56.4, 1039.0], [56.5, 1041.0], [56.6, 1044.0], [56.7, 1044.0], [56.8, 1045.0], [56.9, 1046.0], [57.0, 1046.0], [57.1, 1053.0], [57.2, 1056.0], [57.3, 1061.0], [57.4, 1061.0], [57.5, 1062.0], [57.6, 1063.0], [57.7, 1063.0], [57.8, 1063.0], [57.9, 1063.0], [58.0, 1065.0], [58.1, 1067.0], [58.2, 1067.0], [58.3, 1069.0], [58.4, 1072.0], [58.5, 1072.0], [58.6, 1074.0], [58.7, 1075.0], [58.8, 1078.0], [58.9, 1078.0], [59.0, 1079.0], [59.1, 1080.0], [59.2, 1082.0], [59.3, 1082.0], [59.4, 1082.0], [59.5, 1084.0], [59.6, 1088.0], [59.7, 1088.0], [59.8, 1088.0], [59.9, 1099.0], [60.0, 1100.0], [60.1, 1100.0], [60.2, 1100.0], [60.3, 1105.0], [60.4, 1105.0], [60.5, 1108.0], [60.6, 1111.0], [60.7, 1111.0], [60.8, 1111.0], [60.9, 1111.0], [61.0, 1112.0], [61.1, 1118.0], [61.2, 1118.0], [61.3, 1123.0], [61.4, 1126.0], [61.5, 1128.0], [61.6, 1128.0], [61.7, 1128.0], [61.8, 1133.0], [61.9, 1133.0], [62.0, 1134.0], [62.1, 1139.0], [62.2, 1139.0], [62.3, 1139.0], [62.4, 1140.0], [62.5, 1141.0], [62.6, 1141.0], [62.7, 1141.0], [62.8, 1144.0], [62.9, 1145.0], [63.0, 1151.0], [63.1, 1151.0], [63.2, 1151.0], [63.3, 1152.0], [63.4, 1152.0], [63.5, 1155.0], [63.6, 1156.0], [63.7, 1157.0], [63.8, 1157.0], [63.9, 1159.0], [64.0, 1161.0], [64.1, 1163.0], [64.2, 1163.0], [64.3, 1164.0], [64.4, 1168.0], [64.5, 1170.0], [64.6, 1170.0], [64.7, 1173.0], [64.8, 1175.0], [64.9, 1177.0], [65.0, 1177.0], [65.1, 1177.0], [65.2, 1180.0], [65.3, 1180.0], [65.4, 1182.0], [65.5, 1182.0], [65.6, 1186.0], [65.7, 1186.0], [65.8, 1187.0], [65.9, 1193.0], [66.0, 1197.0], [66.1, 1197.0], [66.2, 1198.0], [66.3, 1198.0], [66.4, 1208.0], [66.5, 1208.0], [66.6, 1221.0], [66.7, 1221.0], [66.8, 1221.0], [66.9, 1221.0], [67.0, 1222.0], [67.1, 1228.0], [67.2, 1228.0], [67.3, 1228.0], [67.4, 1230.0], [67.5, 1230.0], [67.6, 1230.0], [67.7, 1235.0], [67.8, 1240.0], [67.9, 1241.0], [68.0, 1241.0], [68.1, 1243.0], [68.2, 1245.0], [68.3, 1245.0], [68.4, 1245.0], [68.5, 1256.0], [68.6, 1259.0], [68.7, 1259.0], [68.8, 1263.0], [68.9, 1264.0], [69.0, 1265.0], [69.1, 1265.0], [69.2, 1267.0], [69.3, 1269.0], [69.4, 1269.0], [69.5, 1269.0], [69.6, 1273.0], [69.7, 1285.0], [69.8, 1286.0], [69.9, 1286.0], [70.0, 1286.0], [70.1, 1287.0], [70.2, 1287.0], [70.3, 1287.0], [70.4, 1295.0], [70.5, 1296.0], [70.6, 1296.0], [70.7, 1316.0], [70.8, 1317.0], [70.9, 1320.0], [71.0, 1320.0], [71.1, 1321.0], [71.2, 1323.0], [71.3, 1324.0], [71.4, 1324.0], [71.5, 1326.0], [71.6, 1328.0], [71.7, 1328.0], [71.8, 1333.0], [71.9, 1333.0], [72.0, 1334.0], [72.1, 1334.0], [72.2, 1339.0], [72.3, 1342.0], [72.4, 1348.0], [72.5, 1348.0], [72.6, 1348.0], [72.7, 1350.0], [72.8, 1352.0], [72.9, 1352.0], [73.0, 1353.0], [73.1, 1356.0], [73.2, 1357.0], [73.3, 1357.0], [73.4, 1360.0], [73.5, 1367.0], [73.6, 1367.0], [73.7, 1367.0], [73.8, 1368.0], [73.9, 1372.0], [74.0, 1372.0], [74.1, 1375.0], [74.2, 1378.0], [74.3, 1386.0], [74.4, 1386.0], [74.5, 1388.0], [74.6, 1391.0], [74.7, 1395.0], [74.8, 1395.0], [74.9, 1396.0], [75.0, 1398.0], [75.1, 1398.0], [75.2, 1399.0], [75.3, 1401.0], [75.4, 1402.0], [75.5, 1402.0], [75.6, 1411.0], [75.7, 1417.0], [75.8, 1420.0], [75.9, 1420.0], [76.0, 1424.0], [76.1, 1424.0], [76.2, 1430.0], [76.3, 1430.0], [76.4, 1437.0], [76.5, 1438.0], [76.6, 1442.0], [76.7, 1442.0], [76.8, 1443.0], [76.9, 1445.0], [77.0, 1445.0], [77.1, 1447.0], [77.2, 1447.0], [77.3, 1449.0], [77.4, 1449.0], [77.5, 1450.0], [77.6, 1451.0], [77.7, 1451.0], [77.8, 1451.0], [77.9, 1452.0], [78.0, 1452.0], [78.1, 1455.0], [78.2, 1455.0], [78.3, 1456.0], [78.4, 1464.0], [78.5, 1464.0], [78.6, 1467.0], [78.7, 1469.0], [78.8, 1476.0], [78.9, 1476.0], [79.0, 1477.0], [79.1, 1479.0], [79.2, 1479.0], [79.3, 1479.0], [79.4, 1483.0], [79.5, 1489.0], [79.6, 1490.0], [79.7, 1490.0], [79.8, 1491.0], [79.9, 1492.0], [80.0, 1495.0], [80.1, 1495.0], [80.2, 1496.0], [80.3, 1501.0], [80.4, 1501.0], [80.5, 1503.0], [80.6, 1504.0], [80.7, 1505.0], [80.8, 1505.0], [80.9, 1507.0], [81.0, 1510.0], [81.1, 1510.0], [81.2, 1510.0], [81.3, 1511.0], [81.4, 1514.0], [81.5, 1519.0], [81.6, 1519.0], [81.7, 1529.0], [81.8, 1531.0], [81.9, 1531.0], [82.0, 1531.0], [82.1, 1532.0], [82.2, 1533.0], [82.3, 1533.0], [82.4, 1534.0], [82.5, 1543.0], [82.6, 1544.0], [82.7, 1544.0], [82.8, 1547.0], [82.9, 1551.0], [83.0, 1552.0], [83.1, 1552.0], [83.2, 1554.0], [83.3, 1554.0], [83.4, 1554.0], [83.5, 1555.0], [83.6, 1560.0], [83.7, 1562.0], [83.8, 1562.0], [83.9, 1562.0], [84.0, 1562.0], [84.1, 1563.0], [84.2, 1563.0], [84.3, 1563.0], [84.4, 1581.0], [84.5, 1583.0], [84.6, 1583.0], [84.7, 1584.0], [84.8, 1588.0], [84.9, 1603.0], [85.0, 1603.0], [85.1, 1604.0], [85.2, 1605.0], [85.3, 1605.0], [85.4, 1609.0], [85.5, 1612.0], [85.6, 1615.0], [85.7, 1615.0], [85.8, 1616.0], [85.9, 1619.0], [86.0, 1620.0], [86.1, 1620.0], [86.2, 1622.0], [86.3, 1630.0], [86.4, 1631.0], [86.5, 1631.0], [86.6, 1634.0], [86.7, 1636.0], [86.8, 1636.0], [86.9, 1643.0], [87.0, 1644.0], [87.1, 1647.0], [87.2, 1647.0], [87.3, 1651.0], [87.4, 1657.0], [87.5, 1659.0], [87.6, 1659.0], [87.7, 1661.0], [87.8, 1662.0], [87.9, 1673.0], [88.0, 1673.0], [88.1, 1681.0], [88.2, 1682.0], [88.3, 1685.0], [88.4, 1685.0], [88.5, 1685.0], [88.6, 1686.0], [88.7, 1686.0], [88.8, 1716.0], [88.9, 1726.0], [89.0, 1729.0], [89.1, 1729.0], [89.2, 1731.0], [89.3, 1738.0], [89.4, 1762.0], [89.5, 1762.0], [89.6, 1765.0], [89.7, 1770.0], [89.8, 1776.0], [89.9, 1776.0], [90.0, 1780.0], [90.1, 1788.0], [90.2, 1788.0], [90.3, 1799.0], [90.4, 1801.0], [90.5, 1803.0], [90.6, 1803.0], [90.7, 1806.0], [90.8, 1806.0], [90.9, 1809.0], [91.0, 1809.0], [91.1, 1810.0], [91.2, 1819.0], [91.3, 1823.0], [91.4, 1823.0], [91.5, 1826.0], [91.6, 1827.0], [91.7, 1827.0], [91.8, 1829.0], [91.9, 1830.0], [92.0, 1830.0], [92.1, 1830.0], [92.2, 1837.0], [92.3, 1841.0], [92.4, 1846.0], [92.5, 1846.0], [92.6, 1849.0], [92.7, 1850.0], [92.8, 1856.0], [92.9, 1856.0], [93.0, 1867.0], [93.1, 1871.0], [93.2, 1876.0], [93.3, 1876.0], [93.4, 1880.0], [93.5, 1891.0], [93.6, 1891.0], [93.7, 1894.0], [93.8, 1905.0], [93.9, 1907.0], [94.0, 1907.0], [94.1, 1910.0], [94.2, 1941.0], [94.3, 1952.0], [94.4, 1952.0], [94.5, 1961.0], [94.6, 1966.0], [94.7, 1971.0], [94.8, 1971.0], [94.9, 1973.0], [95.0, 1985.0], [95.1, 1985.0], [95.2, 1986.0], [95.3, 1989.0], [95.4, 1989.0], [95.5, 1989.0], [95.6, 2012.0], [95.7, 2030.0], [95.8, 2055.0], [95.9, 2055.0], [96.0, 2070.0], [96.1, 2076.0], [96.2, 2100.0], [96.3, 2100.0], [96.4, 2113.0], [96.5, 2116.0], [96.6, 2151.0], [96.7, 2151.0], [96.8, 2152.0], [96.9, 2186.0], [97.0, 2186.0], [97.1, 2191.0], [97.2, 2213.0], [97.3, 2250.0], [97.4, 2250.0], [97.5, 2336.0], [97.6, 2398.0], [97.7, 2403.0], [97.8, 2403.0], [97.9, 2448.0], [98.0, 2549.0], [98.1, 2551.0], [98.2, 2551.0], [98.3, 2568.0], [98.4, 2607.0], [98.5, 2607.0], [98.6, 2688.0], [98.7, 2804.0], [98.8, 2832.0], [98.9, 2832.0], [99.0, 2852.0], [99.1, 2984.0], [99.2, 3031.0], [99.3, 3031.0], [99.4, 3135.0], [99.5, 3157.0], [99.6, 3345.0], [99.7, 3345.0], [99.8, 3383.0], [99.9, 3857.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 74.0, "series": [{"data": [[600.0, 65.0], [700.0, 74.0], [800.0, 49.0], [900.0, 36.0], [1000.0, 37.0], [1100.0, 47.0], [1200.0, 31.0], [1300.0, 34.0], [1400.0, 37.0], [1500.0, 34.0], [100.0, 1.0], [1600.0, 28.0], [1700.0, 12.0], [1800.0, 25.0], [1900.0, 13.0], [2000.0, 5.0], [2100.0, 7.0], [2300.0, 2.0], [2200.0, 2.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 2.0], [2800.0, 3.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 2.0], [200.0, 17.0], [3300.0, 2.0], [3800.0, 1.0], [300.0, 56.0], [400.0, 62.0], [500.0, 44.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 136.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 454.0, "series": [{"data": [[0.0, 136.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 454.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 145.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.210526315789473, "minX": 1.6040283E12, "maxY": 10.0, "series": [{"data": [[1.6040283E12, 10.0], [1.60402842E12, 9.210526315789473], [1.60402836E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402842E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 669.0, "minX": 1.0, "maxY": 2070.0, "series": [{"data": [[8.0, 721.0], [4.0, 686.0], [2.0, 830.0], [1.0, 1647.0], [9.0, 738.0], [10.0, 1029.9462809917354], [5.0, 742.0], [6.0, 690.0], [3.0, 669.0], [7.0, 2070.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1029.2979591836731]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 417.3, "minX": 1.6040283E12, "maxY": 1337666.2166666666, "series": [{"data": [[1.6040283E12, 323034.13333333336], [1.60402842E12, 174976.33333333334], [1.60402836E12, 1337666.2166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6040283E12, 628.2166666666667], [1.60402842E12, 417.3], [1.60402836E12, 4477.516666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402842E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 945.7543859649123, "minX": 1.6040283E12, "maxY": 1239.4457831325306, "series": [{"data": [[1.6040283E12, 1239.4457831325306], [1.60402842E12, 945.7543859649123], [1.60402836E12, 1007.9865546218485]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402842E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 944.3859649122808, "minX": 1.6040283E12, "maxY": 1238.132530120481, "series": [{"data": [[1.6040283E12, 1238.132530120481], [1.60402842E12, 944.3859649122808], [1.60402836E12, 1006.8823529411764]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402842E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6040283E12, "maxY": 1.3012048192771077, "series": [{"data": [[1.6040283E12, 1.3012048192771077], [1.60402842E12, 0.0], [1.60402836E12, 0.03193277310924367]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402842E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 193.0, "minX": 1.6040283E12, "maxY": 3857.0, "series": [{"data": [[1.6040283E12, 3857.0], [1.60402842E12, 2607.0], [1.60402836E12, 3157.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6040283E12, 193.0], [1.60402842E12, 211.0], [1.60402836E12, 241.54799900531768]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6040283E12, 193.0], [1.60402842E12, 211.0], [1.60402836E12, 245.30280039787291]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6040283E12, 193.0], [1.60402842E12, 211.0], [1.60402836E12, 243.63399950265884]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6040283E12, 193.0], [1.60402842E12, 211.0], [1.60402836E12, 224.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6040283E12, 990.0], [1.60402842E12, 727.0], [1.60402836E12, 912.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402842E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 523.5, "minX": 1.0, "maxY": 2336.0, "series": [{"data": [[8.0, 1119.5], [2.0, 1238.5], [9.0, 1111.0], [10.0, 1035.0], [11.0, 753.0], [12.0, 792.0], [13.0, 778.5], [14.0, 723.0], [15.0, 716.0], [1.0, 2336.0], [16.0, 523.5], [6.0, 1360.5], [7.0, 1260.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 523.0, "minX": 1.0, "maxY": 2333.0, "series": [{"data": [[8.0, 1118.5], [2.0, 1237.0], [9.0, 1110.0], [10.0, 1035.0], [11.0, 753.0], [12.0, 791.5], [13.0, 778.0], [14.0, 723.0], [15.0, 716.0], [1.0, 2333.0], [16.0, 523.0], [6.0, 1359.5], [7.0, 1259.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.6040283E12, "maxY": 9.916666666666666, "series": [{"data": [[1.6040283E12, 1.55], [1.60402842E12, 0.7833333333333333], [1.60402836E12, 9.916666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402842E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.6040283E12, "maxY": 9.916666666666666, "series": [{"data": [[1.6040283E12, 1.3833333333333333], [1.60402842E12, 0.95], [1.60402836E12, 9.916666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402842E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.6040283E12, "maxY": 9.916666666666666, "series": [{"data": [[1.6040283E12, 1.3833333333333333], [1.60402842E12, 0.95], [1.60402836E12, 9.916666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402842E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.6040283E12, "maxY": 9.916666666666666, "series": [{"data": [[1.6040283E12, 1.3833333333333333], [1.60402842E12, 0.95], [1.60402836E12, 9.916666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402842E12, "title": "Total Transactions Per Second"}},
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

