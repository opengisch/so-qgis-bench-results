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
        data: {"result": {"minY": 173.0, "minX": 0.0, "maxY": 433288.0, "series": [{"data": [[0.0, 173.0], [0.1, 173.0], [0.2, 198.0], [0.3, 211.0], [0.4, 211.0], [0.5, 216.0], [0.6, 217.0], [0.7, 225.0], [0.8, 225.0], [0.9, 232.0], [1.0, 233.0], [1.1, 234.0], [1.2, 234.0], [1.3, 234.0], [1.4, 236.0], [1.5, 242.0], [1.6, 242.0], [1.7, 243.0], [1.8, 243.0], [1.9, 243.0], [2.0, 248.0], [2.1, 250.0], [2.2, 253.0], [2.3, 253.0], [2.4, 253.0], [2.5, 253.0], [2.6, 258.0], [2.7, 258.0], [2.8, 258.0], [2.9, 262.0], [3.0, 268.0], [3.1, 268.0], [3.2, 272.0], [3.3, 277.0], [3.4, 277.0], [3.5, 278.0], [3.6, 281.0], [3.7, 282.0], [3.8, 282.0], [3.9, 293.0], [4.0, 310.0], [4.1, 316.0], [4.2, 316.0], [4.3, 319.0], [4.4, 321.0], [4.5, 323.0], [4.6, 323.0], [4.7, 327.0], [4.8, 334.0], [4.9, 345.0], [5.0, 345.0], [5.1, 346.0], [5.2, 346.0], [5.3, 346.0], [5.4, 357.0], [5.5, 357.0], [5.6, 359.0], [5.7, 359.0], [5.8, 359.0], [5.9, 361.0], [6.0, 362.0], [6.1, 362.0], [6.2, 363.0], [6.3, 364.0], [6.4, 364.0], [6.5, 364.0], [6.6, 365.0], [6.7, 366.0], [6.8, 366.0], [6.9, 368.0], [7.0, 369.0], [7.1, 370.0], [7.2, 370.0], [7.3, 370.0], [7.4, 373.0], [7.5, 374.0], [7.6, 374.0], [7.7, 374.0], [7.8, 374.0], [7.9, 375.0], [8.0, 375.0], [8.1, 379.0], [8.2, 379.0], [8.3, 379.0], [8.4, 379.0], [8.5, 379.0], [8.6, 383.0], [8.7, 383.0], [8.8, 384.0], [8.9, 387.0], [9.0, 387.0], [9.1, 387.0], [9.2, 388.0], [9.3, 391.0], [9.4, 392.0], [9.5, 392.0], [9.6, 392.0], [9.7, 393.0], [9.8, 395.0], [9.9, 395.0], [10.0, 395.0], [10.1, 397.0], [10.2, 397.0], [10.3, 398.0], [10.4, 401.0], [10.5, 401.0], [10.6, 401.0], [10.7, 401.0], [10.8, 401.0], [10.9, 403.0], [11.0, 403.0], [11.1, 405.0], [11.2, 406.0], [11.3, 407.0], [11.4, 407.0], [11.5, 410.0], [11.6, 413.0], [11.7, 413.0], [11.8, 414.0], [11.9, 417.0], [12.0, 419.0], [12.1, 419.0], [12.2, 424.0], [12.3, 426.0], [12.4, 426.0], [12.5, 426.0], [12.6, 428.0], [12.7, 431.0], [12.8, 432.0], [12.9, 432.0], [13.0, 432.0], [13.1, 434.0], [13.2, 434.0], [13.3, 434.0], [13.4, 436.0], [13.5, 436.0], [13.6, 436.0], [13.7, 442.0], [13.8, 443.0], [13.9, 444.0], [14.0, 444.0], [14.1, 444.0], [14.2, 447.0], [14.3, 447.0], [14.4, 447.0], [14.5, 452.0], [14.6, 453.0], [14.7, 454.0], [14.8, 454.0], [14.9, 456.0], [15.0, 457.0], [15.1, 457.0], [15.2, 457.0], [15.3, 458.0], [15.4, 458.0], [15.5, 458.0], [15.6, 459.0], [15.7, 465.0], [15.8, 468.0], [15.9, 468.0], [16.0, 469.0], [16.1, 470.0], [16.2, 471.0], [16.3, 471.0], [16.4, 471.0], [16.5, 471.0], [16.6, 473.0], [16.7, 473.0], [16.8, 474.0], [16.9, 475.0], [17.0, 475.0], [17.1, 476.0], [17.2, 477.0], [17.3, 478.0], [17.4, 478.0], [17.5, 479.0], [17.6, 481.0], [17.7, 482.0], [17.8, 482.0], [17.9, 483.0], [18.0, 483.0], [18.1, 486.0], [18.2, 486.0], [18.3, 489.0], [18.4, 490.0], [18.5, 490.0], [18.6, 491.0], [18.7, 491.0], [18.8, 491.0], [18.9, 491.0], [19.0, 493.0], [19.1, 493.0], [19.2, 494.0], [19.3, 494.0], [19.4, 494.0], [19.5, 495.0], [19.6, 495.0], [19.7, 495.0], [19.8, 495.0], [19.9, 496.0], [20.0, 497.0], [20.1, 497.0], [20.2, 497.0], [20.3, 500.0], [20.4, 500.0], [20.5, 500.0], [20.6, 501.0], [20.7, 502.0], [20.8, 502.0], [20.9, 504.0], [21.0, 505.0], [21.1, 506.0], [21.2, 506.0], [21.3, 506.0], [21.4, 506.0], [21.5, 507.0], [21.6, 507.0], [21.7, 509.0], [21.8, 510.0], [21.9, 510.0], [22.0, 511.0], [22.1, 511.0], [22.2, 512.0], [22.3, 512.0], [22.4, 513.0], [22.5, 513.0], [22.6, 514.0], [22.7, 514.0], [22.8, 515.0], [22.9, 517.0], [23.0, 517.0], [23.1, 517.0], [23.2, 518.0], [23.3, 519.0], [23.4, 519.0], [23.5, 519.0], [23.6, 520.0], [23.7, 520.0], [23.8, 520.0], [23.9, 522.0], [24.0, 524.0], [24.1, 524.0], [24.2, 524.0], [24.3, 527.0], [24.4, 527.0], [24.5, 528.0], [24.6, 528.0], [24.7, 529.0], [24.8, 530.0], [24.9, 530.0], [25.0, 530.0], [25.1, 531.0], [25.2, 532.0], [25.3, 532.0], [25.4, 533.0], [25.5, 533.0], [25.6, 534.0], [25.7, 534.0], [25.8, 534.0], [25.9, 535.0], [26.0, 536.0], [26.1, 536.0], [26.2, 537.0], [26.3, 537.0], [26.4, 537.0], [26.5, 537.0], [26.6, 538.0], [26.7, 538.0], [26.8, 538.0], [26.9, 538.0], [27.0, 538.0], [27.1, 539.0], [27.2, 539.0], [27.3, 544.0], [27.4, 545.0], [27.5, 547.0], [27.6, 547.0], [27.7, 548.0], [27.8, 552.0], [27.9, 552.0], [28.0, 552.0], [28.1, 552.0], [28.2, 554.0], [28.3, 554.0], [28.4, 554.0], [28.5, 556.0], [28.6, 557.0], [28.7, 557.0], [28.8, 558.0], [28.9, 560.0], [29.0, 562.0], [29.1, 562.0], [29.2, 562.0], [29.3, 562.0], [29.4, 563.0], [29.5, 563.0], [29.6, 563.0], [29.7, 564.0], [29.8, 565.0], [29.9, 565.0], [30.0, 566.0], [30.1, 571.0], [30.2, 571.0], [30.3, 572.0], [30.4, 573.0], [30.5, 574.0], [30.6, 574.0], [30.7, 576.0], [30.8, 576.0], [30.9, 577.0], [31.0, 577.0], [31.1, 578.0], [31.2, 578.0], [31.3, 580.0], [31.4, 580.0], [31.5, 581.0], [31.6, 583.0], [31.7, 583.0], [31.8, 586.0], [31.9, 590.0], [32.0, 593.0], [32.1, 593.0], [32.2, 594.0], [32.3, 596.0], [32.4, 599.0], [32.5, 599.0], [32.6, 600.0], [32.7, 602.0], [32.8, 603.0], [32.9, 603.0], [33.0, 607.0], [33.1, 614.0], [33.2, 615.0], [33.3, 615.0], [33.4, 616.0], [33.5, 617.0], [33.6, 617.0], [33.7, 619.0], [33.8, 623.0], [33.9, 628.0], [34.0, 628.0], [34.1, 629.0], [34.2, 635.0], [34.3, 636.0], [34.4, 636.0], [34.5, 636.0], [34.6, 636.0], [34.7, 636.0], [34.8, 636.0], [34.9, 637.0], [35.0, 637.0], [35.1, 637.0], [35.2, 638.0], [35.3, 639.0], [35.4, 640.0], [35.5, 640.0], [35.6, 640.0], [35.7, 641.0], [35.8, 647.0], [35.9, 647.0], [36.0, 647.0], [36.1, 648.0], [36.2, 651.0], [36.3, 651.0], [36.4, 655.0], [36.5, 656.0], [36.6, 660.0], [36.7, 660.0], [36.8, 660.0], [36.9, 662.0], [37.0, 662.0], [37.1, 663.0], [37.2, 664.0], [37.3, 664.0], [37.4, 664.0], [37.5, 668.0], [37.6, 669.0], [37.7, 669.0], [37.8, 669.0], [37.9, 670.0], [38.0, 675.0], [38.1, 676.0], [38.2, 676.0], [38.3, 678.0], [38.4, 682.0], [38.5, 682.0], [38.6, 682.0], [38.7, 683.0], [38.8, 684.0], [38.9, 684.0], [39.0, 684.0], [39.1, 684.0], [39.2, 686.0], [39.3, 686.0], [39.4, 688.0], [39.5, 691.0], [39.6, 692.0], [39.7, 692.0], [39.8, 694.0], [39.9, 696.0], [40.0, 699.0], [40.1, 699.0], [40.2, 700.0], [40.3, 702.0], [40.4, 702.0], [40.5, 702.0], [40.6, 705.0], [40.7, 707.0], [40.8, 707.0], [40.9, 709.0], [41.0, 711.0], [41.1, 712.0], [41.2, 712.0], [41.3, 713.0], [41.4, 714.0], [41.5, 717.0], [41.6, 717.0], [41.7, 721.0], [41.8, 723.0], [41.9, 723.0], [42.0, 724.0], [42.1, 727.0], [42.2, 728.0], [42.3, 728.0], [42.4, 728.0], [42.5, 734.0], [42.6, 736.0], [42.7, 736.0], [42.8, 739.0], [42.9, 740.0], [43.0, 742.0], [43.1, 742.0], [43.2, 742.0], [43.3, 748.0], [43.4, 748.0], [43.5, 749.0], [43.6, 750.0], [43.7, 758.0], [43.8, 758.0], [43.9, 758.0], [44.0, 761.0], [44.1, 762.0], [44.2, 762.0], [44.3, 762.0], [44.4, 766.0], [44.5, 768.0], [44.6, 768.0], [44.7, 773.0], [44.8, 775.0], [44.9, 777.0], [45.0, 777.0], [45.1, 780.0], [45.2, 786.0], [45.3, 786.0], [45.4, 788.0], [45.5, 790.0], [45.6, 791.0], [45.7, 791.0], [45.8, 792.0], [45.9, 793.0], [46.0, 794.0], [46.1, 794.0], [46.2, 794.0], [46.3, 794.0], [46.4, 795.0], [46.5, 795.0], [46.6, 798.0], [46.7, 799.0], [46.8, 799.0], [46.9, 801.0], [47.0, 801.0], [47.1, 802.0], [47.2, 802.0], [47.3, 802.0], [47.4, 803.0], [47.5, 803.0], [47.6, 803.0], [47.7, 809.0], [47.8, 817.0], [47.9, 822.0], [48.0, 822.0], [48.1, 824.0], [48.2, 825.0], [48.3, 827.0], [48.4, 827.0], [48.5, 830.0], [48.6, 838.0], [48.7, 838.0], [48.8, 838.0], [48.9, 840.0], [49.0, 841.0], [49.1, 841.0], [49.2, 844.0], [49.3, 846.0], [49.4, 850.0], [49.5, 850.0], [49.6, 850.0], [49.7, 851.0], [49.8, 851.0], [49.9, 851.0], [50.0, 860.0], [50.1, 860.0], [50.2, 860.0], [50.3, 860.0], [50.4, 863.0], [50.5, 870.0], [50.6, 870.0], [50.7, 874.0], [50.8, 874.0], [50.9, 874.0], [51.0, 874.0], [51.1, 881.0], [51.2, 888.0], [51.3, 890.0], [51.4, 890.0], [51.5, 892.0], [51.6, 893.0], [51.7, 893.0], [51.8, 901.0], [51.9, 902.0], [52.0, 904.0], [52.1, 904.0], [52.2, 909.0], [52.3, 910.0], [52.4, 911.0], [52.5, 911.0], [52.6, 917.0], [52.7, 917.0], [52.8, 918.0], [52.9, 918.0], [53.0, 920.0], [53.1, 921.0], [53.2, 925.0], [53.3, 925.0], [53.4, 926.0], [53.5, 927.0], [53.6, 927.0], [53.7, 930.0], [53.8, 931.0], [53.9, 931.0], [54.0, 931.0], [54.1, 933.0], [54.2, 934.0], [54.3, 937.0], [54.4, 937.0], [54.5, 949.0], [54.6, 952.0], [54.7, 954.0], [54.8, 954.0], [54.9, 959.0], [55.0, 959.0], [55.1, 959.0], [55.2, 960.0], [55.3, 962.0], [55.4, 962.0], [55.5, 962.0], [55.6, 964.0], [55.7, 966.0], [55.8, 966.0], [55.9, 966.0], [56.0, 969.0], [56.1, 970.0], [56.2, 970.0], [56.3, 970.0], [56.4, 971.0], [56.5, 971.0], [56.6, 972.0], [56.7, 972.0], [56.8, 975.0], [56.9, 980.0], [57.0, 980.0], [57.1, 989.0], [57.2, 990.0], [57.3, 996.0], [57.4, 996.0], [57.5, 996.0], [57.6, 1001.0], [57.7, 1002.0], [57.8, 1002.0], [57.9, 1002.0], [58.0, 1004.0], [58.1, 1009.0], [58.2, 1009.0], [58.3, 1011.0], [58.4, 1013.0], [58.5, 1013.0], [58.6, 1018.0], [58.7, 1020.0], [58.8, 1023.0], [58.9, 1023.0], [59.0, 1023.0], [59.1, 1026.0], [59.2, 1027.0], [59.3, 1027.0], [59.4, 1033.0], [59.5, 1035.0], [59.6, 1037.0], [59.7, 1037.0], [59.8, 1037.0], [59.9, 1040.0], [60.0, 1042.0], [60.1, 1042.0], [60.2, 1046.0], [60.3, 1059.0], [60.4, 1059.0], [60.5, 1062.0], [60.6, 1063.0], [60.7, 1069.0], [60.8, 1069.0], [60.9, 1071.0], [61.0, 1071.0], [61.1, 1071.0], [61.2, 1071.0], [61.3, 1083.0], [61.4, 1091.0], [61.5, 1093.0], [61.6, 1093.0], [61.7, 1098.0], [61.8, 1098.0], [61.9, 1098.0], [62.0, 1099.0], [62.1, 1103.0], [62.2, 1104.0], [62.3, 1104.0], [62.4, 1109.0], [62.5, 1116.0], [62.6, 1117.0], [62.7, 1117.0], [62.8, 1118.0], [62.9, 1121.0], [63.0, 1126.0], [63.1, 1126.0], [63.2, 1128.0], [63.3, 1129.0], [63.4, 1129.0], [63.5, 1129.0], [63.6, 1129.0], [63.7, 1130.0], [63.8, 1130.0], [63.9, 1142.0], [64.0, 1151.0], [64.1, 1165.0], [64.2, 1165.0], [64.3, 1167.0], [64.4, 1168.0], [64.5, 1170.0], [64.6, 1170.0], [64.7, 1172.0], [64.8, 1181.0], [64.9, 1183.0], [65.0, 1183.0], [65.1, 1184.0], [65.2, 1186.0], [65.3, 1186.0], [65.4, 1188.0], [65.5, 1189.0], [65.6, 1195.0], [65.7, 1195.0], [65.8, 1195.0], [65.9, 1196.0], [66.0, 1198.0], [66.1, 1198.0], [66.2, 1198.0], [66.3, 1200.0], [66.4, 1200.0], [66.5, 1200.0], [66.6, 1203.0], [66.7, 1204.0], [66.8, 1204.0], [66.9, 1206.0], [67.0, 1211.0], [67.1, 1218.0], [67.2, 1218.0], [67.3, 1219.0], [67.4, 1223.0], [67.5, 1229.0], [67.6, 1229.0], [67.7, 1252.0], [67.8, 1254.0], [67.9, 1255.0], [68.0, 1255.0], [68.1, 1261.0], [68.2, 1263.0], [68.3, 1267.0], [68.4, 1267.0], [68.5, 1268.0], [68.6, 1281.0], [68.7, 1281.0], [68.8, 1288.0], [68.9, 1288.0], [69.0, 1290.0], [69.1, 1290.0], [69.2, 1295.0], [69.3, 1300.0], [69.4, 1305.0], [69.5, 1305.0], [69.6, 1306.0], [69.7, 1308.0], [69.8, 1311.0], [69.9, 1311.0], [70.0, 1315.0], [70.1, 1322.0], [70.2, 1322.0], [70.3, 1323.0], [70.4, 1341.0], [70.5, 1343.0], [70.6, 1343.0], [70.7, 1349.0], [70.8, 1349.0], [70.9, 1352.0], [71.0, 1352.0], [71.1, 1359.0], [71.2, 1359.0], [71.3, 1369.0], [71.4, 1369.0], [71.5, 1371.0], [71.6, 1371.0], [71.7, 1371.0], [71.8, 1372.0], [71.9, 1372.0], [72.0, 1375.0], [72.1, 1375.0], [72.2, 1384.0], [72.3, 1418.0], [72.4, 1420.0], [72.5, 1420.0], [72.6, 1427.0], [72.7, 1427.0], [72.8, 1428.0], [72.9, 1428.0], [73.0, 1440.0], [73.1, 1445.0], [73.2, 1451.0], [73.3, 1451.0], [73.4, 1459.0], [73.5, 1461.0], [73.6, 1461.0], [73.7, 1462.0], [73.8, 1464.0], [73.9, 1468.0], [74.0, 1468.0], [74.1, 1470.0], [74.2, 1471.0], [74.3, 1477.0], [74.4, 1477.0], [74.5, 1477.0], [74.6, 1482.0], [74.7, 1499.0], [74.8, 1499.0], [74.9, 1519.0], [75.0, 1519.0], [75.1, 1519.0], [75.2, 1531.0], [75.3, 1562.0], [75.4, 1569.0], [75.5, 1569.0], [75.6, 1572.0], [75.7, 1574.0], [75.8, 1586.0], [75.9, 1586.0], [76.0, 1601.0], [76.1, 1603.0], [76.2, 1617.0], [76.3, 1617.0], [76.4, 1619.0], [76.5, 1624.0], [76.6, 1635.0], [76.7, 1635.0], [76.8, 1638.0], [76.9, 1638.0], [77.0, 1638.0], [77.1, 1654.0], [77.2, 1657.0], [77.3, 1663.0], [77.4, 1663.0], [77.5, 1676.0], [77.6, 1678.0], [77.7, 1678.0], [77.8, 1678.0], [77.9, 1681.0], [78.0, 1686.0], [78.1, 1696.0], [78.2, 1696.0], [78.3, 1713.0], [78.4, 1719.0], [78.5, 1719.0], [78.6, 1731.0], [78.7, 1739.0], [78.8, 1759.0], [78.9, 1759.0], [79.0, 1767.0], [79.1, 1817.0], [79.2, 1818.0], [79.3, 1818.0], [79.4, 1830.0], [79.5, 1840.0], [79.6, 1842.0], [79.7, 1842.0], [79.8, 1843.0], [79.9, 1847.0], [80.0, 1850.0], [80.1, 1850.0], [80.2, 1855.0], [80.3, 1857.0], [80.4, 1857.0], [80.5, 1859.0], [80.6, 1868.0], [80.7, 1868.0], [80.8, 1868.0], [80.9, 1882.0], [81.0, 1883.0], [81.1, 1887.0], [81.2, 1887.0], [81.3, 1911.0], [81.4, 1917.0], [81.5, 1920.0], [81.6, 1920.0], [81.7, 1922.0], [81.8, 1922.0], [81.9, 1922.0], [82.0, 1977.0], [82.1, 1999.0], [82.2, 2001.0], [82.3, 2001.0], [82.4, 2038.0], [82.5, 2068.0], [82.6, 2070.0], [82.7, 2070.0], [82.8, 2075.0], [82.9, 2102.0], [83.0, 2151.0], [83.1, 2151.0], [83.2, 2162.0], [83.3, 2208.0], [83.4, 2208.0], [83.5, 2224.0], [83.6, 2232.0], [83.7, 2272.0], [83.8, 2272.0], [83.9, 2297.0], [84.0, 2320.0], [84.1, 2322.0], [84.2, 2322.0], [84.3, 2331.0], [84.4, 2333.0], [84.5, 2340.0], [84.6, 2340.0], [84.7, 2361.0], [84.8, 2419.0], [84.9, 2460.0], [85.0, 2460.0], [85.1, 2478.0], [85.2, 2479.0], [85.3, 2479.0], [85.4, 2493.0], [85.5, 2497.0], [85.6, 2517.0], [85.7, 2517.0], [85.8, 2539.0], [85.9, 2546.0], [86.0, 2555.0], [86.1, 2555.0], [86.2, 2589.0], [86.3, 2604.0], [86.4, 2668.0], [86.5, 2668.0], [86.6, 2731.0], [86.7, 2801.0], [86.8, 2801.0], [86.9, 2851.0], [87.0, 2935.0], [87.1, 2939.0], [87.2, 2939.0], [87.3, 2984.0], [87.4, 3002.0], [87.5, 3013.0], [87.6, 3013.0], [87.7, 3015.0], [87.8, 3072.0], [87.9, 3075.0], [88.0, 3075.0], [88.1, 3084.0], [88.2, 3121.0], [88.3, 3153.0], [88.4, 3153.0], [88.5, 3413.0], [88.6, 3527.0], [88.7, 3527.0], [88.8, 3585.0], [88.9, 3665.0], [89.0, 3826.0], [89.1, 3826.0], [89.2, 4099.0], [89.3, 4215.0], [89.4, 4233.0], [89.5, 4233.0], [89.6, 4251.0], [89.7, 4419.0], [89.8, 4574.0], [89.9, 4574.0], [90.0, 4749.0], [90.1, 5225.0], [90.2, 5225.0], [90.3, 6516.0], [90.4, 6905.0], [90.5, 8678.0], [90.6, 8678.0], [90.7, 11397.0], [90.8, 36767.0], [90.9, 41301.0], [91.0, 41301.0], [91.1, 42038.0], [91.2, 42098.0], [91.3, 46167.0], [91.4, 46167.0], [91.5, 47692.0], [91.6, 48954.0], [91.7, 48954.0], [91.8, 67069.0], [91.9, 71766.0], [92.0, 74108.0], [92.1, 74108.0], [92.2, 74613.0], [92.3, 74692.0], [92.4, 75182.0], [92.5, 75182.0], [92.6, 75203.0], [92.7, 75932.0], [92.8, 76043.0], [92.9, 76043.0], [93.0, 76129.0], [93.1, 76207.0], [93.2, 77199.0], [93.3, 77199.0], [93.4, 77306.0], [93.5, 77594.0], [93.6, 77594.0], [93.7, 77685.0], [93.8, 78056.0], [93.9, 78455.0], [94.0, 78455.0], [94.1, 78464.0], [94.2, 78543.0], [94.3, 78550.0], [94.4, 78550.0], [94.5, 79246.0], [94.6, 87287.0], [94.7, 87540.0], [94.8, 87540.0], [94.9, 87677.0], [95.0, 87980.0], [95.1, 87980.0], [95.2, 89002.0], [95.3, 89063.0], [95.4, 89410.0], [95.5, 89410.0], [95.6, 90872.0], [95.7, 98717.0], [95.8, 100921.0], [95.9, 100921.0], [96.0, 103504.0], [96.1, 103826.0], [96.2, 104066.0], [96.3, 104066.0], [96.4, 106391.0], [96.5, 130707.0], [96.6, 142074.0], [96.7, 142074.0], [96.8, 146027.0], [96.9, 146227.0], [97.0, 146227.0], [97.1, 147061.0], [97.2, 149054.0], [97.3, 150503.0], [97.4, 150503.0], [97.5, 158477.0], [97.6, 159938.0], [97.7, 166674.0], [97.8, 166674.0], [97.9, 167131.0], [98.0, 171549.0], [98.1, 179065.0], [98.2, 179065.0], [98.3, 206941.0], [98.4, 211269.0], [98.5, 211269.0], [98.6, 213293.0], [98.7, 220840.0], [98.8, 249158.0], [98.9, 249158.0], [99.0, 250815.0], [99.1, 253119.0], [99.2, 253366.0], [99.3, 253366.0], [99.4, 257144.0], [99.5, 292723.0], [99.6, 351909.0], [99.7, 351909.0], [99.8, 432425.0], [99.9, 433288.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 90.0, "series": [{"data": [[158400.0, 1.0], [211200.0, 1.0], [220800.0, 1.0], [150500.0, 1.0], [77500.0, 1.0], [75900.0, 1.0], [77100.0, 1.0], [75100.0, 1.0], [87900.0, 1.0], [87500.0, 1.0], [98700.0, 1.0], [103500.0, 1.0], [106300.0, 1.0], [130700.0, 1.0], [149000.0, 1.0], [166600.0, 1.0], [100.0, 2.0], [432400.0, 1.0], [292700.0, 1.0], [36700.0, 1.0], [171500.0, 1.0], [41300.0, 1.0], [351900.0, 1.0], [46100.0, 1.0], [48900.0, 1.0], [200.0, 27.0], [249100.0, 1.0], [253100.0, 1.0], [257100.0, 1.0], [67000.0, 1.0], [300.0, 47.0], [74600.0, 2.0], [76200.0, 1.0], [89000.0, 2.0], [89400.0, 1.0], [400.0, 73.0], [103800.0, 1.0], [500.0, 90.0], [142000.0, 1.0], [146000.0, 1.0], [600.0, 56.0], [700.0, 49.0], [800.0, 36.0], [213200.0, 1.0], [900.0, 43.0], [250800.0, 1.0], [1000.0, 33.0], [1100.0, 31.0], [1200.0, 22.0], [1300.0, 22.0], [1400.0, 19.0], [1500.0, 8.0], [1600.0, 17.0], [1700.0, 6.0], [1800.0, 16.0], [1900.0, 7.0], [2000.0, 5.0], [2100.0, 3.0], [2300.0, 6.0], [2200.0, 5.0], [2400.0, 6.0], [2500.0, 5.0], [2600.0, 2.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 3.0], [3000.0, 6.0], [3100.0, 2.0], [206900.0, 1.0], [3400.0, 1.0], [3500.0, 2.0], [3600.0, 1.0], [3800.0, 1.0], [253300.0, 1.0], [4000.0, 1.0], [4200.0, 3.0], [71700.0, 1.0], [4400.0, 1.0], [4500.0, 1.0], [4700.0, 1.0], [77300.0, 1.0], [76100.0, 1.0], [74100.0, 1.0], [78500.0, 2.0], [5200.0, 1.0], [100900.0, 1.0], [6500.0, 1.0], [6900.0, 1.0], [8600.0, 1.0], [146200.0, 1.0], [147000.0, 1.0], [179000.0, 1.0], [11300.0, 1.0], [433200.0, 1.0], [159900.0, 1.0], [167100.0, 1.0], [42000.0, 2.0], [47600.0, 1.0], [76000.0, 1.0], [75200.0, 1.0], [77600.0, 1.0], [79200.0, 1.0], [78000.0, 1.0], [78400.0, 2.0], [87200.0, 1.0], [87600.0, 1.0], [90800.0, 1.0], [104000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 433200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 151.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 399.0, "series": [{"data": [[0.0, 151.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 399.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 185.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.797235023041475, "minX": 1.6028409E12, "maxY": 10.0, "series": [{"data": [[1.60284186E12, 9.797235023041475], [1.6028409E12, 10.0], [1.6028412E12, 10.0], [1.60284126E12, 10.0], [1.60284156E12, 10.0], [1.60284114E12, 10.0], [1.60284144E12, 10.0], [1.6028418E12, 10.0], [1.60284138E12, 10.0], [1.60284168E12, 10.0], [1.60284174E12, 10.0], [1.60284108E12, 10.0], [1.60284162E12, 10.0], [1.60284096E12, 10.0], [1.60284132E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284186E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 361.0, "minX": 1.0, "maxY": 13158.343878954598, "series": [{"data": [[8.0, 724.0], [4.0, 574.0], [2.0, 668.0], [1.0, 786.0], [10.0, 13158.343878954598], [5.0, 361.0], [6.0, 2851.0], [3.0, 1093.0], [7.0, 432.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 13025.31292517006]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15.6, "minX": 1.6028409E12, "maxY": 484872.95, "series": [{"data": [[1.60284186E12, 481449.1], [1.6028409E12, 54794.566666666666], [1.6028412E12, 690.9666666666667], [1.60284126E12, 348524.05], [1.60284156E12, 2016.5], [1.60284114E12, 439.2], [1.60284144E12, 931.9], [1.6028418E12, 219896.76666666666], [1.60284138E12, 31410.183333333334], [1.60284168E12, 17954.35], [1.60284174E12, 47314.11666666667], [1.60284108E12, 25317.833333333332], [1.60284162E12, 6540.466666666666], [1.60284096E12, 33582.7], [1.60284132E12, 484872.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60284186E12, 1676.4833333333333], [1.6028409E12, 109.8], [1.6028412E12, 15.6], [1.60284126E12, 879.1166666666667], [1.60284156E12, 74.16666666666667], [1.60284114E12, 22.4], [1.60284144E12, 30.216666666666665], [1.6028418E12, 757.3333333333334], [1.60284138E12, 70.13333333333334], [1.60284168E12, 24.016666666666666], [1.60284174E12, 143.36666666666667], [1.60284108E12, 88.6], [1.60284162E12, 79.46666666666667], [1.60284096E12, 70.75], [1.60284132E12, 1653.0833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284186E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 959.1028037383179, "minX": 1.6028409E12, "maxY": 108328.0, "series": [{"data": [[1.60284186E12, 990.1889400921656], [1.6028409E12, 2122.5], [1.6028412E12, 75567.5], [1.60284126E12, 18945.999999999993], [1.60284156E12, 108328.0], [1.60284114E12, 72575.0], [1.60284144E12, 75153.75], [1.6028418E12, 25022.46391752576], [1.60284138E12, 61055.0], [1.60284168E12, 25427.666666666664], [1.60284174E12, 19894.16666666667], [1.60284108E12, 68525.25000000001], [1.60284162E12, 35818.09090909091], [1.60284096E12, 69078.88888888889], [1.60284132E12, 959.1028037383179]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284186E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 929.1822429906542, "minX": 1.6028409E12, "maxY": 108327.7, "series": [{"data": [[1.60284186E12, 961.8294930875578], [1.6028409E12, 2094.0714285714284], [1.6028412E12, 75567.0], [1.60284126E12, 18920.95535714285], [1.60284156E12, 108327.7], [1.60284114E12, 72574.66666666667], [1.60284144E12, 75153.75], [1.6028418E12, 24999.896907216505], [1.60284138E12, 60994.333333333336], [1.60284168E12, 25425.333333333336], [1.60284174E12, 19882.444444444445], [1.60284108E12, 68523.91666666667], [1.60284162E12, 35817.81818181818], [1.60284096E12, 69074.44444444445], [1.60284132E12, 929.1822429906542]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284186E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.6028409E12, "maxY": 8.714285714285715, "series": [{"data": [[1.60284186E12, 0.7788018433179724], [1.6028409E12, 8.714285714285715], [1.6028412E12, 1.5], [1.60284126E12, 1.294642857142857], [1.60284156E12, 2.8], [1.60284114E12, 1.3333333333333333], [1.60284144E12, 1.25], [1.6028418E12, 0.9381443298969075], [1.60284138E12, 0.6666666666666666], [1.60284168E12, 1.0], [1.60284174E12, 1.0], [1.60284108E12, 1.0833333333333333], [1.60284162E12, 1.6363636363636362], [1.60284096E12, 2.6666666666666665], [1.60284132E12, 0.9205607476635512]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284186E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 173.0, "minX": 1.6028409E12, "maxY": 433288.0, "series": [{"data": [[1.60284186E12, 4233.0], [1.6028409E12, 3665.0], [1.6028412E12, 75932.0], [1.60284126E12, 292723.0], [1.60284156E12, 257144.0], [1.60284114E12, 76043.0], [1.60284144E12, 149054.0], [1.6028418E12, 433288.0], [1.60284138E12, 78550.0], [1.60284168E12, 74108.0], [1.60284174E12, 146027.0], [1.60284108E12, 167131.0], [1.60284162E12, 150503.0], [1.60284096E12, 90872.0], [1.60284132E12, 4749.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60284186E12, 276.65799953222273], [1.6028409E12, 278.0], [1.6028412E12, 75203.0], [1.60284126E12, 254.07099830269814], [1.60284156E12, 233.0], [1.60284114E12, 67069.0], [1.60284144E12, 250.0], [1.6028418E12, 436.0], [1.60284138E12, 198.0], [1.60284168E12, 537.0], [1.60284174E12, 253.0], [1.60284108E12, 216.0], [1.60284162E12, 173.0], [1.60284096E12, 243.0], [1.60284132E12, 233.86999989748]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60284186E12, 283.96080091476443], [1.6028409E12, 278.0], [1.6028412E12, 75203.0], [1.60284126E12, 260.4781006789207], [1.60284156E12, 233.0], [1.60284114E12, 67069.0], [1.60284144E12, 250.0], [1.6028418E12, 436.0], [1.60284138E12, 198.0], [1.60284168E12, 537.0], [1.60284174E12, 253.0], [1.60284108E12, 216.0], [1.60284162E12, 173.0], [1.60284096E12, 243.0], [1.60284132E12, 235.156500184536]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60284186E12, 280.1239988565445], [1.6028409E12, 278.0], [1.6028412E12, 75203.0], [1.60284126E12, 257.63049915134906], [1.60284156E12, 233.0], [1.60284114E12, 67069.0], [1.60284144E12, 250.0], [1.6028418E12, 436.0], [1.60284138E12, 198.0], [1.60284168E12, 537.0], [1.60284174E12, 253.0], [1.60284108E12, 216.0], [1.60284162E12, 173.0], [1.60284096E12, 243.0], [1.60284132E12, 234.38249976933002]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60284186E12, 268.0], [1.6028409E12, 278.0], [1.6028412E12, 75203.0], [1.60284126E12, 253.0], [1.60284156E12, 233.0], [1.60284114E12, 67069.0], [1.60284144E12, 250.0], [1.6028418E12, 436.0], [1.60284138E12, 198.0], [1.60284168E12, 537.0], [1.60284174E12, 253.0], [1.60284108E12, 216.0], [1.60284162E12, 173.0], [1.60284096E12, 243.0], [1.60284132E12, 232.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60284186E12, 724.0], [1.6028409E12, 2647.0], [1.6028412E12, 75567.5], [1.60284126E12, 988.0], [1.60284156E12, 122950.0], [1.60284114E12, 74613.0], [1.60284144E12, 75655.5], [1.6028418E12, 1040.0], [1.60284138E12, 77685.0], [1.60284168E12, 1638.0], [1.60284174E12, 543.0], [1.60284108E12, 74680.0], [1.60284162E12, 925.0], [1.60284096E12, 87677.0], [1.60284132E12, 754.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284186E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 535.0, "minX": 1.0, "maxY": 46167.0, "series": [{"data": [[2.0, 1101.0], [8.0, 867.0], [9.0, 1098.0], [10.0, 1010.0], [11.0, 927.0], [3.0, 864.5], [12.0, 930.5], [13.0, 664.0], [14.0, 696.5], [15.0, 558.5], [4.0, 2232.0], [1.0, 1586.0], [16.0, 535.0], [5.0, 46167.0], [6.0, 1341.0], [7.0, 831.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 535.0, "minX": 1.0, "maxY": 46167.0, "series": [{"data": [[2.0, 1097.5], [8.0, 830.0], [9.0, 1022.0], [10.0, 994.5], [11.0, 892.0], [3.0, 861.5], [12.0, 913.5], [13.0, 662.0], [14.0, 695.5], [15.0, 558.0], [4.0, 2228.0], [1.0, 1582.0], [16.0, 535.0], [5.0, 46167.0], [6.0, 1203.0], [7.0, 830.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6028409E12, "maxY": 3.566666666666667, "series": [{"data": [[1.60284186E12, 3.45], [1.6028409E12, 0.4], [1.6028412E12, 0.03333333333333333], [1.60284126E12, 1.8666666666666667], [1.60284156E12, 0.16666666666666666], [1.60284114E12, 0.05], [1.60284144E12, 0.06666666666666667], [1.6028418E12, 1.6166666666666667], [1.60284138E12, 0.15], [1.60284168E12, 0.05], [1.60284174E12, 0.3], [1.60284108E12, 0.2], [1.60284162E12, 0.18333333333333332], [1.60284096E12, 0.15], [1.60284132E12, 3.566666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284186E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6028409E12, "maxY": 3.6166666666666667, "series": [{"data": [[1.60284186E12, 3.6166666666666667], [1.6028409E12, 0.23333333333333334], [1.6028412E12, 0.03333333333333333], [1.60284126E12, 1.8666666666666667], [1.60284156E12, 0.16666666666666666], [1.60284114E12, 0.05], [1.60284144E12, 0.06666666666666667], [1.6028418E12, 1.6166666666666667], [1.60284138E12, 0.15], [1.60284168E12, 0.05], [1.60284174E12, 0.3], [1.60284108E12, 0.2], [1.60284162E12, 0.18333333333333332], [1.60284096E12, 0.15], [1.60284132E12, 3.566666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284186E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6028409E12, "maxY": 3.6166666666666667, "series": [{"data": [[1.60284186E12, 3.6166666666666667], [1.6028409E12, 0.23333333333333334], [1.6028412E12, 0.03333333333333333], [1.60284126E12, 1.8666666666666667], [1.60284156E12, 0.16666666666666666], [1.60284114E12, 0.05], [1.60284144E12, 0.06666666666666667], [1.6028418E12, 1.6166666666666667], [1.60284138E12, 0.15], [1.60284168E12, 0.05], [1.60284174E12, 0.3], [1.60284108E12, 0.2], [1.60284162E12, 0.18333333333333332], [1.60284096E12, 0.15], [1.60284132E12, 3.566666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284186E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6028409E12, "maxY": 3.6166666666666667, "series": [{"data": [[1.60284186E12, 3.6166666666666667], [1.6028409E12, 0.23333333333333334], [1.6028412E12, 0.03333333333333333], [1.60284126E12, 1.8666666666666667], [1.60284156E12, 0.16666666666666666], [1.60284114E12, 0.05], [1.60284144E12, 0.06666666666666667], [1.6028418E12, 1.6166666666666667], [1.60284138E12, 0.15], [1.60284168E12, 0.05], [1.60284174E12, 0.3], [1.60284108E12, 0.2], [1.60284162E12, 0.18333333333333332], [1.60284096E12, 0.15], [1.60284132E12, 3.566666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284186E12, "title": "Total Transactions Per Second"}},
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

