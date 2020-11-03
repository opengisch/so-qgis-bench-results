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
        data: {"result": {"minY": 194.0, "minX": 0.0, "maxY": 7262.0, "series": [{"data": [[0.0, 194.0], [0.1, 201.0], [0.2, 204.0], [0.3, 207.0], [0.4, 208.0], [0.5, 209.0], [0.6, 211.0], [0.7, 212.0], [0.8, 213.0], [0.9, 214.0], [1.0, 215.0], [1.1, 217.0], [1.2, 219.0], [1.3, 219.0], [1.4, 221.0], [1.5, 222.0], [1.6, 222.0], [1.7, 225.0], [1.8, 225.0], [1.9, 227.0], [2.0, 228.0], [2.1, 228.0], [2.2, 229.0], [2.3, 230.0], [2.4, 231.0], [2.5, 232.0], [2.6, 233.0], [2.7, 233.0], [2.8, 234.0], [2.9, 235.0], [3.0, 235.0], [3.1, 236.0], [3.2, 237.0], [3.3, 237.0], [3.4, 238.0], [3.5, 239.0], [3.6, 240.0], [3.7, 240.0], [3.8, 240.0], [3.9, 241.0], [4.0, 242.0], [4.1, 242.0], [4.2, 243.0], [4.3, 244.0], [4.4, 244.0], [4.5, 245.0], [4.6, 245.0], [4.7, 245.0], [4.8, 246.0], [4.9, 246.0], [5.0, 247.0], [5.1, 247.0], [5.2, 248.0], [5.3, 249.0], [5.4, 249.0], [5.5, 250.0], [5.6, 250.0], [5.7, 251.0], [5.8, 252.0], [5.9, 253.0], [6.0, 255.0], [6.1, 255.0], [6.2, 256.0], [6.3, 258.0], [6.4, 259.0], [6.5, 260.0], [6.6, 262.0], [6.7, 263.0], [6.8, 266.0], [6.9, 270.0], [7.0, 272.0], [7.1, 274.0], [7.2, 277.0], [7.3, 280.0], [7.4, 282.0], [7.5, 284.0], [7.6, 285.0], [7.7, 287.0], [7.8, 288.0], [7.9, 290.0], [8.0, 291.0], [8.1, 295.0], [8.2, 296.0], [8.3, 298.0], [8.4, 300.0], [8.5, 301.0], [8.6, 305.0], [8.7, 306.0], [8.8, 307.0], [8.9, 309.0], [9.0, 311.0], [9.1, 313.0], [9.2, 314.0], [9.3, 316.0], [9.4, 317.0], [9.5, 319.0], [9.6, 320.0], [9.7, 321.0], [9.8, 321.0], [9.9, 323.0], [10.0, 324.0], [10.1, 325.0], [10.2, 326.0], [10.3, 327.0], [10.4, 328.0], [10.5, 328.0], [10.6, 329.0], [10.7, 330.0], [10.8, 331.0], [10.9, 331.0], [11.0, 332.0], [11.1, 333.0], [11.2, 334.0], [11.3, 335.0], [11.4, 335.0], [11.5, 336.0], [11.6, 337.0], [11.7, 338.0], [11.8, 340.0], [11.9, 342.0], [12.0, 343.0], [12.1, 343.0], [12.2, 344.0], [12.3, 344.0], [12.4, 345.0], [12.5, 346.0], [12.6, 347.0], [12.7, 349.0], [12.8, 351.0], [12.9, 352.0], [13.0, 353.0], [13.1, 354.0], [13.2, 355.0], [13.3, 356.0], [13.4, 357.0], [13.5, 359.0], [13.6, 360.0], [13.7, 361.0], [13.8, 362.0], [13.9, 364.0], [14.0, 366.0], [14.1, 368.0], [14.2, 369.0], [14.3, 371.0], [14.4, 372.0], [14.5, 374.0], [14.6, 375.0], [14.7, 380.0], [14.8, 382.0], [14.9, 384.0], [15.0, 388.0], [15.1, 391.0], [15.2, 393.0], [15.3, 394.0], [15.4, 396.0], [15.5, 398.0], [15.6, 399.0], [15.7, 400.0], [15.8, 403.0], [15.9, 405.0], [16.0, 407.0], [16.1, 408.0], [16.2, 409.0], [16.3, 413.0], [16.4, 414.0], [16.5, 416.0], [16.6, 419.0], [16.7, 421.0], [16.8, 422.0], [16.9, 423.0], [17.0, 424.0], [17.1, 426.0], [17.2, 427.0], [17.3, 428.0], [17.4, 428.0], [17.5, 430.0], [17.6, 430.0], [17.7, 432.0], [17.8, 434.0], [17.9, 435.0], [18.0, 437.0], [18.1, 438.0], [18.2, 440.0], [18.3, 441.0], [18.4, 442.0], [18.5, 443.0], [18.6, 444.0], [18.7, 445.0], [18.8, 445.0], [18.9, 446.0], [19.0, 447.0], [19.1, 448.0], [19.2, 449.0], [19.3, 450.0], [19.4, 451.0], [19.5, 452.0], [19.6, 453.0], [19.7, 454.0], [19.8, 455.0], [19.9, 455.0], [20.0, 456.0], [20.1, 457.0], [20.2, 458.0], [20.3, 459.0], [20.4, 459.0], [20.5, 460.0], [20.6, 460.0], [20.7, 461.0], [20.8, 462.0], [20.9, 464.0], [21.0, 465.0], [21.1, 466.0], [21.2, 468.0], [21.3, 470.0], [21.4, 471.0], [21.5, 472.0], [21.6, 473.0], [21.7, 473.0], [21.8, 474.0], [21.9, 474.0], [22.0, 476.0], [22.1, 476.0], [22.2, 477.0], [22.3, 478.0], [22.4, 479.0], [22.5, 481.0], [22.6, 482.0], [22.7, 483.0], [22.8, 484.0], [22.9, 485.0], [23.0, 486.0], [23.1, 486.0], [23.2, 487.0], [23.3, 488.0], [23.4, 488.0], [23.5, 489.0], [23.6, 491.0], [23.7, 491.0], [23.8, 491.0], [23.9, 493.0], [24.0, 494.0], [24.1, 495.0], [24.2, 495.0], [24.3, 497.0], [24.4, 498.0], [24.5, 499.0], [24.6, 500.0], [24.7, 501.0], [24.8, 502.0], [24.9, 502.0], [25.0, 503.0], [25.1, 504.0], [25.2, 505.0], [25.3, 506.0], [25.4, 506.0], [25.5, 507.0], [25.6, 508.0], [25.7, 510.0], [25.8, 512.0], [25.9, 513.0], [26.0, 514.0], [26.1, 516.0], [26.2, 518.0], [26.3, 519.0], [26.4, 520.0], [26.5, 522.0], [26.6, 523.0], [26.7, 525.0], [26.8, 526.0], [26.9, 528.0], [27.0, 529.0], [27.1, 530.0], [27.2, 531.0], [27.3, 532.0], [27.4, 533.0], [27.5, 536.0], [27.6, 538.0], [27.7, 540.0], [27.8, 541.0], [27.9, 542.0], [28.0, 543.0], [28.1, 545.0], [28.2, 545.0], [28.3, 546.0], [28.4, 547.0], [28.5, 549.0], [28.6, 550.0], [28.7, 551.0], [28.8, 554.0], [28.9, 555.0], [29.0, 556.0], [29.1, 558.0], [29.2, 559.0], [29.3, 560.0], [29.4, 560.0], [29.5, 562.0], [29.6, 563.0], [29.7, 564.0], [29.8, 565.0], [29.9, 565.0], [30.0, 566.0], [30.1, 567.0], [30.2, 568.0], [30.3, 568.0], [30.4, 569.0], [30.5, 571.0], [30.6, 573.0], [30.7, 574.0], [30.8, 576.0], [30.9, 576.0], [31.0, 578.0], [31.1, 579.0], [31.2, 580.0], [31.3, 580.0], [31.4, 582.0], [31.5, 583.0], [31.6, 584.0], [31.7, 585.0], [31.8, 586.0], [31.9, 586.0], [32.0, 587.0], [32.1, 588.0], [32.2, 590.0], [32.3, 591.0], [32.4, 592.0], [32.5, 593.0], [32.6, 595.0], [32.7, 597.0], [32.8, 598.0], [32.9, 600.0], [33.0, 601.0], [33.1, 603.0], [33.2, 605.0], [33.3, 607.0], [33.4, 609.0], [33.5, 610.0], [33.6, 611.0], [33.7, 613.0], [33.8, 614.0], [33.9, 619.0], [34.0, 619.0], [34.1, 620.0], [34.2, 621.0], [34.3, 622.0], [34.4, 623.0], [34.5, 625.0], [34.6, 626.0], [34.7, 628.0], [34.8, 629.0], [34.9, 630.0], [35.0, 631.0], [35.1, 632.0], [35.2, 634.0], [35.3, 637.0], [35.4, 640.0], [35.5, 641.0], [35.6, 641.0], [35.7, 642.0], [35.8, 645.0], [35.9, 647.0], [36.0, 649.0], [36.1, 649.0], [36.2, 651.0], [36.3, 652.0], [36.4, 654.0], [36.5, 655.0], [36.6, 657.0], [36.7, 658.0], [36.8, 660.0], [36.9, 662.0], [37.0, 663.0], [37.1, 664.0], [37.2, 667.0], [37.3, 667.0], [37.4, 669.0], [37.5, 670.0], [37.6, 670.0], [37.7, 671.0], [37.8, 672.0], [37.9, 674.0], [38.0, 674.0], [38.1, 677.0], [38.2, 680.0], [38.3, 680.0], [38.4, 681.0], [38.5, 683.0], [38.6, 684.0], [38.7, 685.0], [38.8, 686.0], [38.9, 687.0], [39.0, 688.0], [39.1, 692.0], [39.2, 693.0], [39.3, 696.0], [39.4, 698.0], [39.5, 701.0], [39.6, 703.0], [39.7, 704.0], [39.8, 704.0], [39.9, 705.0], [40.0, 706.0], [40.1, 707.0], [40.2, 708.0], [40.3, 712.0], [40.4, 712.0], [40.5, 715.0], [40.6, 715.0], [40.7, 717.0], [40.8, 718.0], [40.9, 721.0], [41.0, 723.0], [41.1, 724.0], [41.2, 725.0], [41.3, 726.0], [41.4, 727.0], [41.5, 728.0], [41.6, 730.0], [41.7, 732.0], [41.8, 733.0], [41.9, 733.0], [42.0, 735.0], [42.1, 736.0], [42.2, 737.0], [42.3, 738.0], [42.4, 740.0], [42.5, 741.0], [42.6, 743.0], [42.7, 746.0], [42.8, 747.0], [42.9, 748.0], [43.0, 750.0], [43.1, 752.0], [43.2, 755.0], [43.3, 757.0], [43.4, 760.0], [43.5, 761.0], [43.6, 763.0], [43.7, 764.0], [43.8, 765.0], [43.9, 766.0], [44.0, 768.0], [44.1, 771.0], [44.2, 773.0], [44.3, 775.0], [44.4, 776.0], [44.5, 778.0], [44.6, 779.0], [44.7, 780.0], [44.8, 783.0], [44.9, 785.0], [45.0, 787.0], [45.1, 788.0], [45.2, 790.0], [45.3, 794.0], [45.4, 795.0], [45.5, 796.0], [45.6, 798.0], [45.7, 799.0], [45.8, 801.0], [45.9, 802.0], [46.0, 804.0], [46.1, 806.0], [46.2, 808.0], [46.3, 809.0], [46.4, 810.0], [46.5, 812.0], [46.6, 813.0], [46.7, 814.0], [46.8, 816.0], [46.9, 819.0], [47.0, 822.0], [47.1, 824.0], [47.2, 826.0], [47.3, 827.0], [47.4, 829.0], [47.5, 831.0], [47.6, 833.0], [47.7, 834.0], [47.8, 835.0], [47.9, 836.0], [48.0, 838.0], [48.1, 842.0], [48.2, 843.0], [48.3, 844.0], [48.4, 847.0], [48.5, 848.0], [48.6, 849.0], [48.7, 850.0], [48.8, 851.0], [48.9, 856.0], [49.0, 859.0], [49.1, 860.0], [49.2, 861.0], [49.3, 864.0], [49.4, 866.0], [49.5, 870.0], [49.6, 871.0], [49.7, 873.0], [49.8, 874.0], [49.9, 876.0], [50.0, 879.0], [50.1, 881.0], [50.2, 883.0], [50.3, 885.0], [50.4, 886.0], [50.5, 887.0], [50.6, 888.0], [50.7, 891.0], [50.8, 893.0], [50.9, 896.0], [51.0, 897.0], [51.1, 898.0], [51.2, 900.0], [51.3, 903.0], [51.4, 903.0], [51.5, 905.0], [51.6, 908.0], [51.7, 912.0], [51.8, 913.0], [51.9, 914.0], [52.0, 915.0], [52.1, 918.0], [52.2, 921.0], [52.3, 922.0], [52.4, 923.0], [52.5, 926.0], [52.6, 928.0], [52.7, 930.0], [52.8, 932.0], [52.9, 934.0], [53.0, 937.0], [53.1, 938.0], [53.2, 940.0], [53.3, 942.0], [53.4, 945.0], [53.5, 947.0], [53.6, 948.0], [53.7, 950.0], [53.8, 952.0], [53.9, 955.0], [54.0, 957.0], [54.1, 960.0], [54.2, 963.0], [54.3, 966.0], [54.4, 968.0], [54.5, 969.0], [54.6, 972.0], [54.7, 975.0], [54.8, 977.0], [54.9, 979.0], [55.0, 980.0], [55.1, 982.0], [55.2, 983.0], [55.3, 987.0], [55.4, 989.0], [55.5, 991.0], [55.6, 992.0], [55.7, 995.0], [55.8, 997.0], [55.9, 999.0], [56.0, 1001.0], [56.1, 1004.0], [56.2, 1009.0], [56.3, 1011.0], [56.4, 1013.0], [56.5, 1016.0], [56.6, 1018.0], [56.7, 1020.0], [56.8, 1022.0], [56.9, 1024.0], [57.0, 1027.0], [57.1, 1029.0], [57.2, 1030.0], [57.3, 1032.0], [57.4, 1035.0], [57.5, 1037.0], [57.6, 1039.0], [57.7, 1041.0], [57.8, 1042.0], [57.9, 1044.0], [58.0, 1046.0], [58.1, 1048.0], [58.2, 1052.0], [58.3, 1054.0], [58.4, 1057.0], [58.5, 1060.0], [58.6, 1061.0], [58.7, 1064.0], [58.8, 1066.0], [58.9, 1068.0], [59.0, 1069.0], [59.1, 1071.0], [59.2, 1074.0], [59.3, 1077.0], [59.4, 1079.0], [59.5, 1083.0], [59.6, 1084.0], [59.7, 1086.0], [59.8, 1087.0], [59.9, 1088.0], [60.0, 1092.0], [60.1, 1093.0], [60.2, 1096.0], [60.3, 1097.0], [60.4, 1100.0], [60.5, 1103.0], [60.6, 1104.0], [60.7, 1106.0], [60.8, 1108.0], [60.9, 1111.0], [61.0, 1114.0], [61.1, 1116.0], [61.2, 1117.0], [61.3, 1122.0], [61.4, 1127.0], [61.5, 1129.0], [61.6, 1133.0], [61.7, 1134.0], [61.8, 1135.0], [61.9, 1137.0], [62.0, 1138.0], [62.1, 1139.0], [62.2, 1141.0], [62.3, 1143.0], [62.4, 1146.0], [62.5, 1149.0], [62.6, 1150.0], [62.7, 1153.0], [62.8, 1154.0], [62.9, 1157.0], [63.0, 1158.0], [63.1, 1159.0], [63.2, 1162.0], [63.3, 1166.0], [63.4, 1168.0], [63.5, 1172.0], [63.6, 1174.0], [63.7, 1178.0], [63.8, 1180.0], [63.9, 1181.0], [64.0, 1182.0], [64.1, 1185.0], [64.2, 1188.0], [64.3, 1192.0], [64.4, 1193.0], [64.5, 1195.0], [64.6, 1197.0], [64.7, 1198.0], [64.8, 1201.0], [64.9, 1204.0], [65.0, 1206.0], [65.1, 1208.0], [65.2, 1211.0], [65.3, 1212.0], [65.4, 1215.0], [65.5, 1217.0], [65.6, 1218.0], [65.7, 1222.0], [65.8, 1225.0], [65.9, 1228.0], [66.0, 1230.0], [66.1, 1233.0], [66.2, 1235.0], [66.3, 1237.0], [66.4, 1240.0], [66.5, 1243.0], [66.6, 1246.0], [66.7, 1249.0], [66.8, 1252.0], [66.9, 1253.0], [67.0, 1254.0], [67.1, 1256.0], [67.2, 1259.0], [67.3, 1260.0], [67.4, 1263.0], [67.5, 1264.0], [67.6, 1267.0], [67.7, 1269.0], [67.8, 1272.0], [67.9, 1275.0], [68.0, 1276.0], [68.1, 1278.0], [68.2, 1280.0], [68.3, 1282.0], [68.4, 1283.0], [68.5, 1286.0], [68.6, 1287.0], [68.7, 1290.0], [68.8, 1293.0], [68.9, 1295.0], [69.0, 1297.0], [69.1, 1301.0], [69.2, 1302.0], [69.3, 1306.0], [69.4, 1306.0], [69.5, 1308.0], [69.6, 1310.0], [69.7, 1312.0], [69.8, 1313.0], [69.9, 1314.0], [70.0, 1316.0], [70.1, 1319.0], [70.2, 1321.0], [70.3, 1324.0], [70.4, 1327.0], [70.5, 1329.0], [70.6, 1332.0], [70.7, 1336.0], [70.8, 1337.0], [70.9, 1341.0], [71.0, 1344.0], [71.1, 1346.0], [71.2, 1348.0], [71.3, 1348.0], [71.4, 1350.0], [71.5, 1354.0], [71.6, 1357.0], [71.7, 1362.0], [71.8, 1367.0], [71.9, 1368.0], [72.0, 1370.0], [72.1, 1374.0], [72.2, 1376.0], [72.3, 1379.0], [72.4, 1381.0], [72.5, 1384.0], [72.6, 1385.0], [72.7, 1387.0], [72.8, 1389.0], [72.9, 1391.0], [73.0, 1394.0], [73.1, 1396.0], [73.2, 1399.0], [73.3, 1400.0], [73.4, 1401.0], [73.5, 1406.0], [73.6, 1409.0], [73.7, 1412.0], [73.8, 1414.0], [73.9, 1416.0], [74.0, 1417.0], [74.1, 1420.0], [74.2, 1424.0], [74.3, 1428.0], [74.4, 1429.0], [74.5, 1431.0], [74.6, 1432.0], [74.7, 1434.0], [74.8, 1437.0], [74.9, 1440.0], [75.0, 1443.0], [75.1, 1445.0], [75.2, 1448.0], [75.3, 1452.0], [75.4, 1456.0], [75.5, 1457.0], [75.6, 1458.0], [75.7, 1459.0], [75.8, 1463.0], [75.9, 1465.0], [76.0, 1466.0], [76.1, 1467.0], [76.2, 1470.0], [76.3, 1473.0], [76.4, 1476.0], [76.5, 1478.0], [76.6, 1479.0], [76.7, 1482.0], [76.8, 1483.0], [76.9, 1485.0], [77.0, 1487.0], [77.1, 1491.0], [77.2, 1493.0], [77.3, 1494.0], [77.4, 1500.0], [77.5, 1502.0], [77.6, 1503.0], [77.7, 1506.0], [77.8, 1508.0], [77.9, 1510.0], [78.0, 1511.0], [78.1, 1513.0], [78.2, 1517.0], [78.3, 1519.0], [78.4, 1521.0], [78.5, 1523.0], [78.6, 1525.0], [78.7, 1527.0], [78.8, 1530.0], [78.9, 1531.0], [79.0, 1535.0], [79.1, 1536.0], [79.2, 1540.0], [79.3, 1541.0], [79.4, 1543.0], [79.5, 1544.0], [79.6, 1546.0], [79.7, 1547.0], [79.8, 1552.0], [79.9, 1553.0], [80.0, 1556.0], [80.1, 1557.0], [80.2, 1559.0], [80.3, 1562.0], [80.4, 1565.0], [80.5, 1568.0], [80.6, 1571.0], [80.7, 1573.0], [80.8, 1577.0], [80.9, 1580.0], [81.0, 1581.0], [81.1, 1586.0], [81.2, 1590.0], [81.3, 1591.0], [81.4, 1593.0], [81.5, 1595.0], [81.6, 1597.0], [81.7, 1601.0], [81.8, 1604.0], [81.9, 1607.0], [82.0, 1610.0], [82.1, 1614.0], [82.2, 1618.0], [82.3, 1619.0], [82.4, 1623.0], [82.5, 1625.0], [82.6, 1627.0], [82.7, 1633.0], [82.8, 1638.0], [82.9, 1640.0], [83.0, 1641.0], [83.1, 1645.0], [83.2, 1649.0], [83.3, 1652.0], [83.4, 1657.0], [83.5, 1662.0], [83.6, 1666.0], [83.7, 1669.0], [83.8, 1675.0], [83.9, 1678.0], [84.0, 1680.0], [84.1, 1684.0], [84.2, 1685.0], [84.3, 1693.0], [84.4, 1695.0], [84.5, 1699.0], [84.6, 1703.0], [84.7, 1704.0], [84.8, 1712.0], [84.9, 1714.0], [85.0, 1717.0], [85.1, 1719.0], [85.2, 1721.0], [85.3, 1725.0], [85.4, 1729.0], [85.5, 1732.0], [85.6, 1736.0], [85.7, 1740.0], [85.8, 1745.0], [85.9, 1748.0], [86.0, 1751.0], [86.1, 1756.0], [86.2, 1760.0], [86.3, 1765.0], [86.4, 1769.0], [86.5, 1772.0], [86.6, 1776.0], [86.7, 1782.0], [86.8, 1787.0], [86.9, 1792.0], [87.0, 1795.0], [87.1, 1797.0], [87.2, 1801.0], [87.3, 1803.0], [87.4, 1808.0], [87.5, 1811.0], [87.6, 1814.0], [87.7, 1819.0], [87.8, 1821.0], [87.9, 1826.0], [88.0, 1831.0], [88.1, 1833.0], [88.2, 1838.0], [88.3, 1841.0], [88.4, 1845.0], [88.5, 1853.0], [88.6, 1857.0], [88.7, 1862.0], [88.8, 1865.0], [88.9, 1871.0], [89.0, 1875.0], [89.1, 1881.0], [89.2, 1890.0], [89.3, 1895.0], [89.4, 1900.0], [89.5, 1910.0], [89.6, 1911.0], [89.7, 1915.0], [89.8, 1917.0], [89.9, 1922.0], [90.0, 1929.0], [90.1, 1934.0], [90.2, 1940.0], [90.3, 1942.0], [90.4, 1953.0], [90.5, 1957.0], [90.6, 1960.0], [90.7, 1967.0], [90.8, 1976.0], [90.9, 1979.0], [91.0, 1984.0], [91.1, 1993.0], [91.2, 2002.0], [91.3, 2005.0], [91.4, 2016.0], [91.5, 2026.0], [91.6, 2038.0], [91.7, 2049.0], [91.8, 2057.0], [91.9, 2063.0], [92.0, 2069.0], [92.1, 2077.0], [92.2, 2093.0], [92.3, 2102.0], [92.4, 2112.0], [92.5, 2117.0], [92.6, 2130.0], [92.7, 2134.0], [92.8, 2145.0], [92.9, 2150.0], [93.0, 2165.0], [93.1, 2174.0], [93.2, 2185.0], [93.3, 2196.0], [93.4, 2204.0], [93.5, 2211.0], [93.6, 2221.0], [93.7, 2239.0], [93.8, 2247.0], [93.9, 2263.0], [94.0, 2271.0], [94.1, 2282.0], [94.2, 2294.0], [94.3, 2298.0], [94.4, 2310.0], [94.5, 2340.0], [94.6, 2354.0], [94.7, 2368.0], [94.8, 2390.0], [94.9, 2399.0], [95.0, 2407.0], [95.1, 2421.0], [95.2, 2437.0], [95.3, 2446.0], [95.4, 2453.0], [95.5, 2463.0], [95.6, 2473.0], [95.7, 2483.0], [95.8, 2500.0], [95.9, 2511.0], [96.0, 2525.0], [96.1, 2536.0], [96.2, 2554.0], [96.3, 2574.0], [96.4, 2588.0], [96.5, 2598.0], [96.6, 2634.0], [96.7, 2649.0], [96.8, 2656.0], [96.9, 2671.0], [97.0, 2716.0], [97.1, 2733.0], [97.2, 2742.0], [97.3, 2771.0], [97.4, 2798.0], [97.5, 2809.0], [97.6, 2822.0], [97.7, 2848.0], [97.8, 2895.0], [97.9, 2910.0], [98.0, 2929.0], [98.1, 2955.0], [98.2, 3006.0], [98.3, 3025.0], [98.4, 3070.0], [98.5, 3143.0], [98.6, 3184.0], [98.7, 3218.0], [98.8, 3265.0], [98.9, 3325.0], [99.0, 3436.0], [99.1, 3495.0], [99.2, 3595.0], [99.3, 3716.0], [99.4, 3776.0], [99.5, 3980.0], [99.6, 4269.0], [99.7, 4576.0], [99.8, 4930.0], [99.9, 5535.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 462.0, "series": [{"data": [[600.0, 338.0], [700.0, 328.0], [800.0, 282.0], [900.0, 248.0], [1000.0, 231.0], [1100.0, 225.0], [1200.0, 224.0], [1300.0, 220.0], [1400.0, 212.0], [1500.0, 225.0], [1600.0, 148.0], [1700.0, 137.0], [1800.0, 114.0], [1900.0, 94.0], [2000.0, 57.0], [2100.0, 56.0], [2300.0, 32.0], [2200.0, 49.0], [2400.0, 45.0], [2500.0, 37.0], [2600.0, 23.0], [2700.0, 24.0], [2800.0, 23.0], [2900.0, 17.0], [3000.0, 14.0], [3100.0, 9.0], [3200.0, 10.0], [3300.0, 8.0], [3400.0, 8.0], [3500.0, 4.0], [3600.0, 4.0], [3700.0, 7.0], [3800.0, 2.0], [3900.0, 3.0], [4000.0, 2.0], [4200.0, 1.0], [4100.0, 2.0], [4300.0, 1.0], [4500.0, 3.0], [4400.0, 1.0], [4800.0, 1.0], [4700.0, 2.0], [5000.0, 1.0], [4900.0, 2.0], [5200.0, 2.0], [5300.0, 1.0], [5500.0, 1.0], [5600.0, 1.0], [5900.0, 2.0], [6400.0, 1.0], [7200.0, 1.0], [100.0, 5.0], [200.0, 429.0], [300.0, 378.0], [400.0, 462.0], [500.0, 433.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1171.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2738.0, "series": [{"data": [[0.0, 1281.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2738.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1171.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.8494983277592, "minX": 1.60423938E12, "maxY": 10.0, "series": [{"data": [[1.60423956E12, 10.0], [1.60423974E12, 10.0], [1.60423938E12, 10.0], [1.60423968E12, 10.0], [1.60423986E12, 10.0], [1.6042398E12, 10.0], [1.6042395E12, 10.0], [1.60423992E12, 9.8494983277592], [1.60423944E12, 10.0], [1.60423962E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423992E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 333.0, "minX": 1.0, "maxY": 3213.0, "series": [{"data": [[8.0, 2525.0], [4.0, 1012.0], [2.0, 3213.0], [1.0, 2993.0], [9.0, 333.0], [10.0, 1050.698706813357], [5.0, 2182.0], [6.0, 2265.0], [3.0, 1573.0], [7.0, 1116.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1052.1930635838155]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1525.7, "minX": 1.60423938E12, "maxY": 3217201.4166666665, "series": [{"data": [[1.60423956E12, 2915267.283333333], [1.60423974E12, 2058549.8166666667], [1.60423938E12, 1376841.2333333334], [1.60423968E12, 2610668.95], [1.60423986E12, 2511392.3], [1.6042398E12, 3217201.4166666665], [1.6042395E12, 2899124.55], [1.60423992E12, 1544540.1833333333], [1.60423944E12, 2239115.2333333334], [1.60423962E12, 2598994.0166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423956E12, 4279.616666666667], [1.60423974E12, 4493.133333333333], [1.60423938E12, 1525.7], [1.60423968E12, 3715.233333333333], [1.60423986E12, 4842.566666666667], [1.6042398E12, 4304.8], [1.6042395E12, 4957.983333333334], [1.60423992E12, 2252.3166666666666], [1.60423944E12, 3865.95], [1.60423962E12, 4340.033333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423992E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 904.627627627628, "minX": 1.60423938E12, "maxY": 1349.6153846153836, "series": [{"data": [[1.60423956E12, 1063.7726465364112], [1.60423974E12, 967.290791599354], [1.60423938E12, 1349.6153846153836], [1.60423968E12, 1158.1569767441856], [1.60423986E12, 937.4545454545456], [1.6042398E12, 1064.3121693121693], [1.6042395E12, 904.627627627628], [1.60423992E12, 1295.401337792642], [1.60423944E12, 1104.8550185873605], [1.60423962E12, 1040.1319444444443]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423992E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 902.5480480480479, "minX": 1.60423938E12, "maxY": 1346.7211538461531, "series": [{"data": [[1.60423956E12, 1061.3925399644759], [1.60423974E12, 966.0823909531503], [1.60423938E12, 1346.7211538461531], [1.60423968E12, 1156.4883720930234], [1.60423986E12, 936.0438871473353], [1.6042398E12, 1062.3227513227514], [1.6042395E12, 902.5480480480479], [1.60423992E12, 1293.3712374581935], [1.60423944E12, 1102.9163568773226], [1.60423962E12, 1037.932291666667]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423992E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.017241379310344803, "minX": 1.60423938E12, "maxY": 0.5528846153846159, "series": [{"data": [[1.60423956E12, 0.02309058614564829], [1.60423974E12, 0.021001615508885265], [1.60423938E12, 0.5528846153846159], [1.60423968E12, 0.025193798449612385], [1.60423986E12, 0.017241379310344803], [1.6042398E12, 0.04056437389770723], [1.6042395E12, 0.018018018018018014], [1.60423992E12, 0.020066889632107024], [1.60423944E12, 0.02044609665427508], [1.60423962E12, 0.019097222222222196]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423992E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 194.0, "minX": 1.60423938E12, "maxY": 7262.0, "series": [{"data": [[1.60423956E12, 4269.0], [1.60423974E12, 4926.0], [1.60423938E12, 5923.0], [1.60423968E12, 7262.0], [1.60423986E12, 4726.0], [1.6042398E12, 4409.0], [1.6042395E12, 5286.0], [1.60423992E12, 4553.0], [1.60423944E12, 4859.0], [1.60423962E12, 5306.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423956E12, 207.0759998655319], [1.60423974E12, 210.3199994087219], [1.60423938E12, 211.52399980068208], [1.60423968E12, 231.26499938368798], [1.60423986E12, 211.75499923825265], [1.6042398E12, 211.11199986457825], [1.6042395E12, 216.01199936389924], [1.60423992E12, 228.19999957084656], [1.60423944E12, 224.85099987149238], [1.60423962E12, 208.38599972486497]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423956E12, 207.58360005378722], [1.60423974E12, 212.0], [1.60423938E12, 212.0691000199318], [1.60423968E12, 233.23660009860993], [1.60423986E12, 214.63050030469896], [1.6042398E12, 211.6232000541687], [1.6042395E12, 218.4132002544403], [1.60423992E12, 229.82000017166138], [1.60423944E12, 226.34440020561217], [1.60423962E12, 209.42460011005403]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423956E12, 207.35799993276595], [1.60423974E12, 211.55999970436096], [1.60423938E12, 211.94199990034105], [1.60423968E12, 232.557499691844], [1.60423986E12, 213.35249961912632], [1.6042398E12, 211.39599993228913], [1.6042395E12, 217.34599968194962], [1.60423992E12, 229.09999978542328], [1.60423944E12, 225.48199974298478], [1.60423962E12, 208.96299986243247]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423956E12, 195.0], [1.60423974E12, 201.0], [1.60423938E12, 208.0], [1.60423968E12, 211.0], [1.60423986E12, 194.0], [1.6042398E12, 197.0], [1.6042395E12, 204.0], [1.60423992E12, 211.0], [1.60423944E12, 213.0], [1.60423962E12, 199.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423956E12, 867.0], [1.60423974E12, 830.0], [1.60423938E12, 1130.0], [1.60423968E12, 1020.0], [1.60423986E12, 746.0], [1.6042398E12, 854.0], [1.6042395E12, 678.5], [1.60423992E12, 1179.0], [1.60423944E12, 989.0], [1.60423962E12, 860.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423992E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 441.0, "minX": 1.0, "maxY": 3103.0, "series": [{"data": [[8.0, 1178.5], [2.0, 2070.5], [9.0, 998.0], [10.0, 947.5], [11.0, 912.0], [3.0, 1993.0], [12.0, 789.5], [13.0, 677.0], [14.0, 663.5], [15.0, 519.0], [4.0, 1667.0], [16.0, 502.5], [1.0, 3103.0], [17.0, 473.0], [18.0, 526.0], [19.0, 473.0], [5.0, 1295.0], [20.0, 441.0], [22.0, 471.5], [23.0, 442.5], [6.0, 1301.0], [24.0, 453.0], [26.0, 458.5], [7.0, 1208.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 441.0, "minX": 1.0, "maxY": 3097.0, "series": [{"data": [[8.0, 1176.0], [2.0, 2066.5], [9.0, 998.0], [10.0, 947.5], [11.0, 912.0], [3.0, 1991.0], [12.0, 789.0], [13.0, 677.0], [14.0, 663.0], [15.0, 518.5], [4.0, 1666.5], [16.0, 502.5], [1.0, 3097.0], [17.0, 473.0], [18.0, 526.0], [19.0, 473.0], [5.0, 1289.0], [20.0, 441.0], [22.0, 471.5], [23.0, 442.5], [6.0, 1298.5], [24.0, 453.0], [26.0, 458.5], [7.0, 1207.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.6333333333333333, "minX": 1.60423938E12, "maxY": 11.1, "series": [{"data": [[1.60423956E12, 9.383333333333333], [1.60423974E12, 10.333333333333334], [1.60423938E12, 3.6333333333333333], [1.60423968E12, 8.583333333333334], [1.60423986E12, 10.633333333333333], [1.6042398E12, 9.45], [1.6042395E12, 11.1], [1.60423992E12, 4.816666666666666], [1.60423944E12, 8.966666666666667], [1.60423962E12, 9.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423992E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.466666666666667, "minX": 1.60423938E12, "maxY": 11.1, "series": [{"data": [[1.60423956E12, 9.383333333333333], [1.60423974E12, 10.316666666666666], [1.60423938E12, 3.466666666666667], [1.60423968E12, 8.6], [1.60423986E12, 10.633333333333333], [1.6042398E12, 9.45], [1.6042395E12, 11.1], [1.60423992E12, 4.983333333333333], [1.60423944E12, 8.966666666666667], [1.60423962E12, 9.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423992E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.466666666666667, "minX": 1.60423938E12, "maxY": 11.1, "series": [{"data": [[1.60423956E12, 9.383333333333333], [1.60423974E12, 10.316666666666666], [1.60423938E12, 3.466666666666667], [1.60423968E12, 8.6], [1.60423986E12, 10.633333333333333], [1.6042398E12, 9.45], [1.6042395E12, 11.1], [1.60423992E12, 4.983333333333333], [1.60423944E12, 8.966666666666667], [1.60423962E12, 9.6]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423992E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.466666666666667, "minX": 1.60423938E12, "maxY": 11.1, "series": [{"data": [[1.60423956E12, 9.383333333333333], [1.60423974E12, 10.316666666666666], [1.60423938E12, 3.466666666666667], [1.60423968E12, 8.6], [1.60423986E12, 10.633333333333333], [1.6042398E12, 9.45], [1.6042395E12, 11.1], [1.60423992E12, 4.983333333333333], [1.60423944E12, 8.966666666666667], [1.60423962E12, 9.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423992E12, "title": "Total Transactions Per Second"}},
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

