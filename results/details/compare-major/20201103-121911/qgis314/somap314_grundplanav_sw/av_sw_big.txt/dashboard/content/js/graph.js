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
        data: {"result": {"minY": 205.0, "minX": 0.0, "maxY": 6783.0, "series": [{"data": [[0.0, 205.0], [0.1, 208.0], [0.2, 210.0], [0.3, 213.0], [0.4, 214.0], [0.5, 217.0], [0.6, 220.0], [0.7, 222.0], [0.8, 224.0], [0.9, 226.0], [1.0, 227.0], [1.1, 229.0], [1.2, 230.0], [1.3, 232.0], [1.4, 232.0], [1.5, 233.0], [1.6, 235.0], [1.7, 236.0], [1.8, 238.0], [1.9, 239.0], [2.0, 240.0], [2.1, 241.0], [2.2, 242.0], [2.3, 243.0], [2.4, 244.0], [2.5, 244.0], [2.6, 245.0], [2.7, 246.0], [2.8, 246.0], [2.9, 246.0], [3.0, 247.0], [3.1, 248.0], [3.2, 249.0], [3.3, 249.0], [3.4, 250.0], [3.5, 251.0], [3.6, 251.0], [3.7, 252.0], [3.8, 253.0], [3.9, 254.0], [4.0, 255.0], [4.1, 255.0], [4.2, 255.0], [4.3, 256.0], [4.4, 257.0], [4.5, 258.0], [4.6, 258.0], [4.7, 259.0], [4.8, 260.0], [4.9, 261.0], [5.0, 261.0], [5.1, 262.0], [5.2, 264.0], [5.3, 266.0], [5.4, 267.0], [5.5, 270.0], [5.6, 272.0], [5.7, 273.0], [5.8, 274.0], [5.9, 276.0], [6.0, 280.0], [6.1, 283.0], [6.2, 285.0], [6.3, 287.0], [6.4, 288.0], [6.5, 289.0], [6.6, 291.0], [6.7, 297.0], [6.8, 300.0], [6.9, 304.0], [7.0, 306.0], [7.1, 309.0], [7.2, 312.0], [7.3, 315.0], [7.4, 321.0], [7.5, 323.0], [7.6, 324.0], [7.7, 325.0], [7.8, 326.0], [7.9, 327.0], [8.0, 331.0], [8.1, 332.0], [8.2, 332.0], [8.3, 333.0], [8.4, 333.0], [8.5, 335.0], [8.6, 336.0], [8.7, 337.0], [8.8, 338.0], [8.9, 339.0], [9.0, 339.0], [9.1, 341.0], [9.2, 342.0], [9.3, 342.0], [9.4, 342.0], [9.5, 343.0], [9.6, 344.0], [9.7, 344.0], [9.8, 345.0], [9.9, 347.0], [10.0, 347.0], [10.1, 348.0], [10.2, 349.0], [10.3, 349.0], [10.4, 350.0], [10.5, 352.0], [10.6, 354.0], [10.7, 355.0], [10.8, 356.0], [10.9, 357.0], [11.0, 358.0], [11.1, 360.0], [11.2, 361.0], [11.3, 362.0], [11.4, 365.0], [11.5, 366.0], [11.6, 368.0], [11.7, 369.0], [11.8, 370.0], [11.9, 371.0], [12.0, 373.0], [12.1, 375.0], [12.2, 377.0], [12.3, 378.0], [12.4, 380.0], [12.5, 381.0], [12.6, 384.0], [12.7, 385.0], [12.8, 387.0], [12.9, 388.0], [13.0, 390.0], [13.1, 391.0], [13.2, 394.0], [13.3, 396.0], [13.4, 397.0], [13.5, 399.0], [13.6, 401.0], [13.7, 404.0], [13.8, 406.0], [13.9, 409.0], [14.0, 411.0], [14.1, 412.0], [14.2, 414.0], [14.3, 417.0], [14.4, 418.0], [14.5, 419.0], [14.6, 421.0], [14.7, 422.0], [14.8, 425.0], [14.9, 427.0], [15.0, 429.0], [15.1, 430.0], [15.2, 432.0], [15.3, 433.0], [15.4, 434.0], [15.5, 435.0], [15.6, 436.0], [15.7, 437.0], [15.8, 439.0], [15.9, 440.0], [16.0, 442.0], [16.1, 443.0], [16.2, 444.0], [16.3, 446.0], [16.4, 447.0], [16.5, 448.0], [16.6, 449.0], [16.7, 450.0], [16.8, 451.0], [16.9, 452.0], [17.0, 454.0], [17.1, 456.0], [17.2, 457.0], [17.3, 458.0], [17.4, 460.0], [17.5, 461.0], [17.6, 462.0], [17.7, 463.0], [17.8, 464.0], [17.9, 465.0], [18.0, 466.0], [18.1, 468.0], [18.2, 468.0], [18.3, 470.0], [18.4, 470.0], [18.5, 471.0], [18.6, 472.0], [18.7, 473.0], [18.8, 474.0], [18.9, 475.0], [19.0, 476.0], [19.1, 477.0], [19.2, 478.0], [19.3, 479.0], [19.4, 480.0], [19.5, 481.0], [19.6, 482.0], [19.7, 482.0], [19.8, 483.0], [19.9, 484.0], [20.0, 485.0], [20.1, 485.0], [20.2, 487.0], [20.3, 487.0], [20.4, 488.0], [20.5, 489.0], [20.6, 490.0], [20.7, 491.0], [20.8, 491.0], [20.9, 493.0], [21.0, 494.0], [21.1, 495.0], [21.2, 496.0], [21.3, 497.0], [21.4, 497.0], [21.5, 498.0], [21.6, 498.0], [21.7, 499.0], [21.8, 499.0], [21.9, 500.0], [22.0, 502.0], [22.1, 503.0], [22.2, 504.0], [22.3, 505.0], [22.4, 506.0], [22.5, 506.0], [22.6, 507.0], [22.7, 508.0], [22.8, 509.0], [22.9, 509.0], [23.0, 510.0], [23.1, 510.0], [23.2, 511.0], [23.3, 511.0], [23.4, 512.0], [23.5, 513.0], [23.6, 513.0], [23.7, 515.0], [23.8, 516.0], [23.9, 517.0], [24.0, 517.0], [24.1, 519.0], [24.2, 521.0], [24.3, 521.0], [24.4, 522.0], [24.5, 524.0], [24.6, 525.0], [24.7, 526.0], [24.8, 527.0], [24.9, 529.0], [25.0, 531.0], [25.1, 533.0], [25.2, 534.0], [25.3, 535.0], [25.4, 536.0], [25.5, 537.0], [25.6, 539.0], [25.7, 540.0], [25.8, 542.0], [25.9, 544.0], [26.0, 546.0], [26.1, 547.0], [26.2, 548.0], [26.3, 550.0], [26.4, 553.0], [26.5, 554.0], [26.6, 556.0], [26.7, 556.0], [26.8, 558.0], [26.9, 559.0], [27.0, 560.0], [27.1, 561.0], [27.2, 562.0], [27.3, 563.0], [27.4, 564.0], [27.5, 565.0], [27.6, 567.0], [27.7, 568.0], [27.8, 569.0], [27.9, 570.0], [28.0, 570.0], [28.1, 572.0], [28.2, 574.0], [28.3, 575.0], [28.4, 577.0], [28.5, 577.0], [28.6, 578.0], [28.7, 578.0], [28.8, 579.0], [28.9, 579.0], [29.0, 580.0], [29.1, 581.0], [29.2, 583.0], [29.3, 584.0], [29.4, 586.0], [29.5, 587.0], [29.6, 589.0], [29.7, 590.0], [29.8, 591.0], [29.9, 592.0], [30.0, 592.0], [30.1, 594.0], [30.2, 595.0], [30.3, 596.0], [30.4, 598.0], [30.5, 598.0], [30.6, 599.0], [30.7, 600.0], [30.8, 601.0], [30.9, 603.0], [31.0, 603.0], [31.1, 605.0], [31.2, 607.0], [31.3, 608.0], [31.4, 610.0], [31.5, 610.0], [31.6, 612.0], [31.7, 614.0], [31.8, 614.0], [31.9, 615.0], [32.0, 617.0], [32.1, 618.0], [32.2, 622.0], [32.3, 623.0], [32.4, 624.0], [32.5, 625.0], [32.6, 625.0], [32.7, 627.0], [32.8, 629.0], [32.9, 632.0], [33.0, 634.0], [33.1, 636.0], [33.2, 637.0], [33.3, 638.0], [33.4, 639.0], [33.5, 640.0], [33.6, 640.0], [33.7, 642.0], [33.8, 643.0], [33.9, 644.0], [34.0, 645.0], [34.1, 646.0], [34.2, 647.0], [34.3, 649.0], [34.4, 650.0], [34.5, 653.0], [34.6, 653.0], [34.7, 655.0], [34.8, 656.0], [34.9, 657.0], [35.0, 658.0], [35.1, 660.0], [35.2, 661.0], [35.3, 663.0], [35.4, 664.0], [35.5, 665.0], [35.6, 667.0], [35.7, 669.0], [35.8, 670.0], [35.9, 673.0], [36.0, 675.0], [36.1, 676.0], [36.2, 677.0], [36.3, 678.0], [36.4, 680.0], [36.5, 681.0], [36.6, 683.0], [36.7, 684.0], [36.8, 686.0], [36.9, 687.0], [37.0, 688.0], [37.1, 690.0], [37.2, 691.0], [37.3, 693.0], [37.4, 694.0], [37.5, 695.0], [37.6, 697.0], [37.7, 697.0], [37.8, 699.0], [37.9, 700.0], [38.0, 701.0], [38.1, 703.0], [38.2, 705.0], [38.3, 705.0], [38.4, 707.0], [38.5, 708.0], [38.6, 710.0], [38.7, 711.0], [38.8, 713.0], [38.9, 713.0], [39.0, 715.0], [39.1, 716.0], [39.2, 717.0], [39.3, 718.0], [39.4, 719.0], [39.5, 720.0], [39.6, 722.0], [39.7, 723.0], [39.8, 724.0], [39.9, 725.0], [40.0, 726.0], [40.1, 727.0], [40.2, 728.0], [40.3, 730.0], [40.4, 731.0], [40.5, 732.0], [40.6, 733.0], [40.7, 734.0], [40.8, 736.0], [40.9, 737.0], [41.0, 739.0], [41.1, 741.0], [41.2, 742.0], [41.3, 743.0], [41.4, 744.0], [41.5, 745.0], [41.6, 746.0], [41.7, 747.0], [41.8, 749.0], [41.9, 751.0], [42.0, 754.0], [42.1, 755.0], [42.2, 758.0], [42.3, 760.0], [42.4, 762.0], [42.5, 763.0], [42.6, 764.0], [42.7, 766.0], [42.8, 768.0], [42.9, 769.0], [43.0, 771.0], [43.1, 772.0], [43.2, 775.0], [43.3, 777.0], [43.4, 779.0], [43.5, 780.0], [43.6, 783.0], [43.7, 783.0], [43.8, 787.0], [43.9, 788.0], [44.0, 789.0], [44.1, 792.0], [44.2, 795.0], [44.3, 797.0], [44.4, 799.0], [44.5, 801.0], [44.6, 803.0], [44.7, 803.0], [44.8, 806.0], [44.9, 810.0], [45.0, 811.0], [45.1, 812.0], [45.2, 813.0], [45.3, 816.0], [45.4, 818.0], [45.5, 819.0], [45.6, 821.0], [45.7, 824.0], [45.8, 826.0], [45.9, 828.0], [46.0, 830.0], [46.1, 831.0], [46.2, 832.0], [46.3, 834.0], [46.4, 835.0], [46.5, 837.0], [46.6, 839.0], [46.7, 842.0], [46.8, 843.0], [46.9, 845.0], [47.0, 847.0], [47.1, 849.0], [47.2, 851.0], [47.3, 854.0], [47.4, 856.0], [47.5, 857.0], [47.6, 858.0], [47.7, 860.0], [47.8, 861.0], [47.9, 865.0], [48.0, 866.0], [48.1, 866.0], [48.2, 868.0], [48.3, 869.0], [48.4, 871.0], [48.5, 873.0], [48.6, 874.0], [48.7, 875.0], [48.8, 879.0], [48.9, 881.0], [49.0, 882.0], [49.1, 884.0], [49.2, 886.0], [49.3, 888.0], [49.4, 890.0], [49.5, 893.0], [49.6, 894.0], [49.7, 895.0], [49.8, 898.0], [49.9, 899.0], [50.0, 901.0], [50.1, 906.0], [50.2, 909.0], [50.3, 911.0], [50.4, 915.0], [50.5, 916.0], [50.6, 921.0], [50.7, 922.0], [50.8, 925.0], [50.9, 927.0], [51.0, 929.0], [51.1, 933.0], [51.2, 937.0], [51.3, 939.0], [51.4, 942.0], [51.5, 944.0], [51.6, 948.0], [51.7, 949.0], [51.8, 952.0], [51.9, 955.0], [52.0, 959.0], [52.1, 963.0], [52.2, 965.0], [52.3, 966.0], [52.4, 967.0], [52.5, 970.0], [52.6, 973.0], [52.7, 976.0], [52.8, 979.0], [52.9, 981.0], [53.0, 982.0], [53.1, 984.0], [53.2, 985.0], [53.3, 986.0], [53.4, 987.0], [53.5, 989.0], [53.6, 991.0], [53.7, 993.0], [53.8, 995.0], [53.9, 996.0], [54.0, 997.0], [54.1, 1001.0], [54.2, 1005.0], [54.3, 1009.0], [54.4, 1011.0], [54.5, 1013.0], [54.6, 1016.0], [54.7, 1018.0], [54.8, 1023.0], [54.9, 1027.0], [55.0, 1029.0], [55.1, 1030.0], [55.2, 1031.0], [55.3, 1035.0], [55.4, 1036.0], [55.5, 1036.0], [55.6, 1038.0], [55.7, 1039.0], [55.8, 1040.0], [55.9, 1042.0], [56.0, 1044.0], [56.1, 1045.0], [56.2, 1047.0], [56.3, 1049.0], [56.4, 1052.0], [56.5, 1056.0], [56.6, 1058.0], [56.7, 1059.0], [56.8, 1062.0], [56.9, 1063.0], [57.0, 1066.0], [57.1, 1068.0], [57.2, 1069.0], [57.3, 1072.0], [57.4, 1074.0], [57.5, 1077.0], [57.6, 1078.0], [57.7, 1081.0], [57.8, 1082.0], [57.9, 1085.0], [58.0, 1087.0], [58.1, 1089.0], [58.2, 1091.0], [58.3, 1093.0], [58.4, 1096.0], [58.5, 1100.0], [58.6, 1102.0], [58.7, 1104.0], [58.8, 1106.0], [58.9, 1107.0], [59.0, 1109.0], [59.1, 1111.0], [59.2, 1113.0], [59.3, 1114.0], [59.4, 1116.0], [59.5, 1118.0], [59.6, 1120.0], [59.7, 1122.0], [59.8, 1124.0], [59.9, 1126.0], [60.0, 1127.0], [60.1, 1131.0], [60.2, 1132.0], [60.3, 1134.0], [60.4, 1136.0], [60.5, 1137.0], [60.6, 1140.0], [60.7, 1141.0], [60.8, 1143.0], [60.9, 1144.0], [61.0, 1146.0], [61.1, 1149.0], [61.2, 1151.0], [61.3, 1152.0], [61.4, 1153.0], [61.5, 1156.0], [61.6, 1160.0], [61.7, 1162.0], [61.8, 1165.0], [61.9, 1166.0], [62.0, 1167.0], [62.1, 1170.0], [62.2, 1172.0], [62.3, 1175.0], [62.4, 1176.0], [62.5, 1179.0], [62.6, 1181.0], [62.7, 1183.0], [62.8, 1186.0], [62.9, 1187.0], [63.0, 1190.0], [63.1, 1192.0], [63.2, 1195.0], [63.3, 1195.0], [63.4, 1198.0], [63.5, 1199.0], [63.6, 1200.0], [63.7, 1202.0], [63.8, 1205.0], [63.9, 1208.0], [64.0, 1210.0], [64.1, 1213.0], [64.2, 1214.0], [64.3, 1216.0], [64.4, 1218.0], [64.5, 1220.0], [64.6, 1221.0], [64.7, 1222.0], [64.8, 1224.0], [64.9, 1227.0], [65.0, 1229.0], [65.1, 1231.0], [65.2, 1233.0], [65.3, 1236.0], [65.4, 1237.0], [65.5, 1240.0], [65.6, 1241.0], [65.7, 1244.0], [65.8, 1247.0], [65.9, 1249.0], [66.0, 1253.0], [66.1, 1255.0], [66.2, 1256.0], [66.3, 1258.0], [66.4, 1260.0], [66.5, 1261.0], [66.6, 1262.0], [66.7, 1265.0], [66.8, 1266.0], [66.9, 1267.0], [67.0, 1269.0], [67.1, 1270.0], [67.2, 1273.0], [67.3, 1274.0], [67.4, 1275.0], [67.5, 1278.0], [67.6, 1280.0], [67.7, 1281.0], [67.8, 1282.0], [67.9, 1286.0], [68.0, 1288.0], [68.1, 1290.0], [68.2, 1290.0], [68.3, 1292.0], [68.4, 1294.0], [68.5, 1297.0], [68.6, 1301.0], [68.7, 1302.0], [68.8, 1303.0], [68.9, 1304.0], [69.0, 1307.0], [69.1, 1308.0], [69.2, 1309.0], [69.3, 1311.0], [69.4, 1313.0], [69.5, 1315.0], [69.6, 1317.0], [69.7, 1319.0], [69.8, 1321.0], [69.9, 1322.0], [70.0, 1324.0], [70.1, 1327.0], [70.2, 1330.0], [70.3, 1333.0], [70.4, 1337.0], [70.5, 1343.0], [70.6, 1347.0], [70.7, 1350.0], [70.8, 1352.0], [70.9, 1354.0], [71.0, 1355.0], [71.1, 1357.0], [71.2, 1361.0], [71.3, 1364.0], [71.4, 1366.0], [71.5, 1367.0], [71.6, 1369.0], [71.7, 1371.0], [71.8, 1374.0], [71.9, 1377.0], [72.0, 1380.0], [72.1, 1386.0], [72.2, 1388.0], [72.3, 1390.0], [72.4, 1392.0], [72.5, 1393.0], [72.6, 1397.0], [72.7, 1405.0], [72.8, 1407.0], [72.9, 1411.0], [73.0, 1415.0], [73.1, 1416.0], [73.2, 1420.0], [73.3, 1423.0], [73.4, 1424.0], [73.5, 1428.0], [73.6, 1430.0], [73.7, 1430.0], [73.8, 1432.0], [73.9, 1433.0], [74.0, 1434.0], [74.1, 1436.0], [74.2, 1438.0], [74.3, 1442.0], [74.4, 1444.0], [74.5, 1447.0], [74.6, 1450.0], [74.7, 1451.0], [74.8, 1454.0], [74.9, 1457.0], [75.0, 1459.0], [75.1, 1460.0], [75.2, 1462.0], [75.3, 1464.0], [75.4, 1466.0], [75.5, 1469.0], [75.6, 1471.0], [75.7, 1473.0], [75.8, 1475.0], [75.9, 1476.0], [76.0, 1479.0], [76.1, 1482.0], [76.2, 1484.0], [76.3, 1486.0], [76.4, 1489.0], [76.5, 1491.0], [76.6, 1493.0], [76.7, 1495.0], [76.8, 1499.0], [76.9, 1501.0], [77.0, 1503.0], [77.1, 1505.0], [77.2, 1506.0], [77.3, 1507.0], [77.4, 1510.0], [77.5, 1512.0], [77.6, 1513.0], [77.7, 1516.0], [77.8, 1518.0], [77.9, 1520.0], [78.0, 1523.0], [78.1, 1525.0], [78.2, 1527.0], [78.3, 1528.0], [78.4, 1531.0], [78.5, 1534.0], [78.6, 1536.0], [78.7, 1538.0], [78.8, 1538.0], [78.9, 1540.0], [79.0, 1544.0], [79.1, 1545.0], [79.2, 1548.0], [79.3, 1551.0], [79.4, 1553.0], [79.5, 1554.0], [79.6, 1558.0], [79.7, 1560.0], [79.8, 1562.0], [79.9, 1563.0], [80.0, 1566.0], [80.1, 1569.0], [80.2, 1572.0], [80.3, 1573.0], [80.4, 1577.0], [80.5, 1580.0], [80.6, 1582.0], [80.7, 1584.0], [80.8, 1586.0], [80.9, 1589.0], [81.0, 1593.0], [81.1, 1596.0], [81.2, 1597.0], [81.3, 1599.0], [81.4, 1601.0], [81.5, 1604.0], [81.6, 1606.0], [81.7, 1607.0], [81.8, 1610.0], [81.9, 1614.0], [82.0, 1618.0], [82.1, 1619.0], [82.2, 1622.0], [82.3, 1625.0], [82.4, 1628.0], [82.5, 1629.0], [82.6, 1632.0], [82.7, 1634.0], [82.8, 1637.0], [82.9, 1642.0], [83.0, 1642.0], [83.1, 1646.0], [83.2, 1650.0], [83.3, 1651.0], [83.4, 1654.0], [83.5, 1658.0], [83.6, 1663.0], [83.7, 1666.0], [83.8, 1668.0], [83.9, 1674.0], [84.0, 1675.0], [84.1, 1683.0], [84.2, 1687.0], [84.3, 1692.0], [84.4, 1693.0], [84.5, 1697.0], [84.6, 1700.0], [84.7, 1707.0], [84.8, 1712.0], [84.9, 1715.0], [85.0, 1717.0], [85.1, 1720.0], [85.2, 1724.0], [85.3, 1727.0], [85.4, 1729.0], [85.5, 1733.0], [85.6, 1737.0], [85.7, 1741.0], [85.8, 1743.0], [85.9, 1746.0], [86.0, 1748.0], [86.1, 1750.0], [86.2, 1753.0], [86.3, 1757.0], [86.4, 1759.0], [86.5, 1762.0], [86.6, 1766.0], [86.7, 1768.0], [86.8, 1770.0], [86.9, 1773.0], [87.0, 1778.0], [87.1, 1781.0], [87.2, 1785.0], [87.3, 1789.0], [87.4, 1794.0], [87.5, 1799.0], [87.6, 1805.0], [87.7, 1811.0], [87.8, 1817.0], [87.9, 1824.0], [88.0, 1829.0], [88.1, 1835.0], [88.2, 1842.0], [88.3, 1850.0], [88.4, 1854.0], [88.5, 1856.0], [88.6, 1859.0], [88.7, 1865.0], [88.8, 1870.0], [88.9, 1875.0], [89.0, 1884.0], [89.1, 1890.0], [89.2, 1893.0], [89.3, 1898.0], [89.4, 1900.0], [89.5, 1905.0], [89.6, 1914.0], [89.7, 1921.0], [89.8, 1926.0], [89.9, 1931.0], [90.0, 1940.0], [90.1, 1944.0], [90.2, 1948.0], [90.3, 1952.0], [90.4, 1960.0], [90.5, 1967.0], [90.6, 1972.0], [90.7, 1976.0], [90.8, 1979.0], [90.9, 1982.0], [91.0, 1990.0], [91.1, 1993.0], [91.2, 1999.0], [91.3, 2006.0], [91.4, 2017.0], [91.5, 2024.0], [91.6, 2031.0], [91.7, 2040.0], [91.8, 2047.0], [91.9, 2058.0], [92.0, 2062.0], [92.1, 2067.0], [92.2, 2077.0], [92.3, 2081.0], [92.4, 2088.0], [92.5, 2095.0], [92.6, 2109.0], [92.7, 2116.0], [92.8, 2128.0], [92.9, 2137.0], [93.0, 2150.0], [93.1, 2165.0], [93.2, 2174.0], [93.3, 2186.0], [93.4, 2195.0], [93.5, 2204.0], [93.6, 2221.0], [93.7, 2237.0], [93.8, 2246.0], [93.9, 2261.0], [94.0, 2272.0], [94.1, 2282.0], [94.2, 2292.0], [94.3, 2296.0], [94.4, 2303.0], [94.5, 2319.0], [94.6, 2327.0], [94.7, 2346.0], [94.8, 2357.0], [94.9, 2367.0], [95.0, 2374.0], [95.1, 2384.0], [95.2, 2394.0], [95.3, 2410.0], [95.4, 2418.0], [95.5, 2424.0], [95.6, 2432.0], [95.7, 2435.0], [95.8, 2450.0], [95.9, 2476.0], [96.0, 2491.0], [96.1, 2506.0], [96.2, 2516.0], [96.3, 2548.0], [96.4, 2562.0], [96.5, 2582.0], [96.6, 2626.0], [96.7, 2636.0], [96.8, 2675.0], [96.9, 2716.0], [97.0, 2744.0], [97.1, 2759.0], [97.2, 2796.0], [97.3, 2830.0], [97.4, 2864.0], [97.5, 2891.0], [97.6, 2921.0], [97.7, 2956.0], [97.8, 2967.0], [97.9, 3001.0], [98.0, 3031.0], [98.1, 3062.0], [98.2, 3100.0], [98.3, 3134.0], [98.4, 3146.0], [98.5, 3182.0], [98.6, 3224.0], [98.7, 3288.0], [98.8, 3378.0], [98.9, 3402.0], [99.0, 3504.0], [99.1, 3545.0], [99.2, 3625.0], [99.3, 3813.0], [99.4, 3967.0], [99.5, 4102.0], [99.6, 4310.0], [99.7, 4695.0], [99.8, 5345.0], [99.9, 6214.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 461.0, "series": [{"data": [[600.0, 373.0], [700.0, 339.0], [800.0, 285.0], [900.0, 215.0], [1000.0, 231.0], [1100.0, 263.0], [1200.0, 260.0], [1300.0, 211.0], [1400.0, 217.0], [1500.0, 233.0], [1600.0, 169.0], [1700.0, 153.0], [1800.0, 96.0], [1900.0, 96.0], [2000.0, 69.0], [2100.0, 47.0], [2200.0, 46.0], [2300.0, 48.0], [2400.0, 42.0], [2500.0, 24.0], [2600.0, 16.0], [2800.0, 17.0], [2700.0, 19.0], [2900.0, 19.0], [3000.0, 15.0], [3100.0, 18.0], [3300.0, 8.0], [3200.0, 10.0], [3400.0, 6.0], [3500.0, 10.0], [3600.0, 2.0], [3700.0, 3.0], [3800.0, 3.0], [3900.0, 3.0], [4000.0, 5.0], [4300.0, 3.0], [4100.0, 4.0], [4200.0, 1.0], [4500.0, 2.0], [4600.0, 1.0], [4700.0, 1.0], [4800.0, 2.0], [5300.0, 2.0], [5800.0, 1.0], [6100.0, 1.0], [6000.0, 2.0], [6200.0, 1.0], [6300.0, 2.0], [6600.0, 1.0], [6700.0, 2.0], [200.0, 352.0], [300.0, 351.0], [400.0, 429.0], [500.0, 461.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1138.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2853.0, "series": [{"data": [[0.0, 1138.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2853.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1199.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60440792E12, "maxY": 10.0, "series": [{"data": [[1.60440852E12, 1.0], [1.60440804E12, 10.0], [1.60440822E12, 10.0], [1.60440816E12, 10.0], [1.60440834E12, 10.0], [1.60440828E12, 10.0], [1.60440846E12, 9.934782608695652], [1.60440798E12, 10.0], [1.6044084E12, 10.0], [1.60440792E12, 9.9618320610687], [1.6044081E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440852E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 698.5, "minX": 1.0, "maxY": 2744.0, "series": [{"data": [[8.0, 874.0], [4.0, 981.0], [2.0, 1929.0], [1.0, 2744.0], [9.0, 1390.0], [10.0, 1075.110446032051], [5.0, 1113.0], [6.0, 892.0], [3.0, 890.0], [7.0, 698.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990366088632026, 1075.352793834299]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7.75, "minX": 1.60440792E12, "maxY": 2995693.783333333, "series": [{"data": [[1.60440852E12, 36332.816666666666], [1.60440804E12, 2568631.5], [1.60440822E12, 2601105.75], [1.60440816E12, 2609769.3833333333], [1.60440834E12, 2995693.783333333], [1.60440828E12, 2001871.5], [1.60440846E12, 2278776.283333333], [1.60440798E12, 2313766.783333333], [1.6044084E12, 2661351.0166666666], [1.60440792E12, 970951.5], [1.6044081E12, 2933895.566666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60440852E12, 7.75], [1.60440804E12, 4431.166666666667], [1.60440822E12, 3580.4333333333334], [1.60440816E12, 4430.9], [1.60440834E12, 4336.816666666667], [1.60440828E12, 3934.1], [1.60440846E12, 4161.616666666667], [1.60440798E12, 3824.633333333333], [1.6044084E12, 4458.266666666666], [1.60440792E12, 976.35], [1.6044081E12, 4435.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440852E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1006.6472545757067, "minX": 1.60440792E12, "maxY": 2744.0, "series": [{"data": [[1.60440852E12, 2744.0], [1.60440804E12, 1006.6472545757067], [1.60440822E12, 1229.7546012269938], [1.60440816E12, 1019.9692307692316], [1.60440834E12, 1021.6998284734138], [1.60440828E12, 1106.2757352941182], [1.60440846E12, 1080.324275362318], [1.60440798E12, 1123.6823308270662], [1.6044084E12, 1026.3583617747445], [1.60440792E12, 1411.0687022900763], [1.6044081E12, 1019.4726962457343]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440852E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1004.5474209650591, "minX": 1.60440792E12, "maxY": 2729.0, "series": [{"data": [[1.60440852E12, 2729.0], [1.60440804E12, 1004.5474209650591], [1.60440822E12, 1227.2638036809815], [1.60440816E12, 1018.027350427351], [1.60440834E12, 1019.5128644939956], [1.60440828E12, 1104.8731617647056], [1.60440846E12, 1078.5452898550723], [1.60440798E12, 1121.7857142857133], [1.6044084E12, 1024.5904436860064], [1.60440792E12, 1407.7022900763352], [1.6044081E12, 1017.2098976109213]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440852E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60440792E12, "maxY": 0.8320610687022902, "series": [{"data": [[1.60440852E12, 0.0], [1.60440804E12, 0.01996672212978369], [1.60440822E12, 0.024539877300613487], [1.60440816E12, 0.013675213675213673], [1.60440834E12, 0.02401372212692968], [1.60440828E12, 0.01838235294117648], [1.60440846E12, 0.019927536231884056], [1.60440798E12, 0.031954887218045125], [1.6044084E12, 0.01706484641638225], [1.60440792E12, 0.8320610687022902], [1.6044081E12, 0.02389078498293516]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440852E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 205.0, "minX": 1.60440792E12, "maxY": 6783.0, "series": [{"data": [[1.60440852E12, 2744.0], [1.60440804E12, 4540.0], [1.60440822E12, 6783.0], [1.60440816E12, 4753.0], [1.60440834E12, 3182.0], [1.60440828E12, 6025.0], [1.60440846E12, 4011.0], [1.60440798E12, 6659.0], [1.6044084E12, 3418.0], [1.60440792E12, 4007.0], [1.6044081E12, 4189.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60440852E12, 2744.0], [1.60440804E12, 232.01599827766418], [1.60440822E12, 235.4099998831749], [1.60440816E12, 210.27399986028672], [1.60440834E12, 246.0], [1.60440828E12, 226.71499961018563], [1.60440846E12, 219.8389990770817], [1.60440798E12, 232.96999872922896], [1.6044084E12, 232.0], [1.60440792E12, 278.6999992132187], [1.6044081E12, 221.2829998600483]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60440852E12, 2744.0], [1.60440804E12, 238.51760068893432], [1.60440822E12, 235.85100004673004], [1.60440816E12, 210.80140005588532], [1.60440834E12, 246.0], [1.60440828E12, 227.0], [1.60440846E12, 221.42410015821457], [1.60440798E12, 235.0], [1.6044084E12, 232.0], [1.60440792E12, 281.6700003147125], [1.6044081E12, 221.8113000559807]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60440852E12, 2744.0], [1.60440804E12, 235.62799913883208], [1.60440822E12, 235.65499994158745], [1.60440816E12, 210.56699993014337], [1.60440834E12, 246.0], [1.60440828E12, 227.0], [1.60440846E12, 220.76049980223178], [1.60440798E12, 235.0], [1.6044084E12, 232.0], [1.60440792E12, 280.34999960660934], [1.6044081E12, 221.57649993002414]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60440852E12, 2744.0], [1.60440804E12, 208.0], [1.60440822E12, 209.0], [1.60440816E12, 205.0], [1.60440834E12, 217.0], [1.60440828E12, 214.0], [1.60440846E12, 211.0], [1.60440798E12, 207.0], [1.6044084E12, 208.0], [1.60440792E12, 274.0], [1.6044081E12, 210.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60440852E12, 2744.0], [1.60440804E12, 746.0], [1.60440822E12, 1005.0], [1.60440816E12, 824.0], [1.60440834E12, 832.0], [1.60440828E12, 953.0], [1.60440846E12, 911.0], [1.60440798E12, 1021.5], [1.6044084E12, 882.5], [1.60440792E12, 1269.0], [1.6044081E12, 828.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440852E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 441.5, "minX": 1.0, "maxY": 2555.5, "series": [{"data": [[2.0, 836.0], [8.0, 1189.0], [9.0, 997.0], [10.0, 1017.5], [11.0, 927.0], [3.0, 1447.5], [12.0, 792.5], [13.0, 776.0], [14.0, 679.0], [15.0, 508.0], [4.0, 1400.5], [16.0, 543.0], [1.0, 2555.5], [17.0, 471.0], [18.0, 494.5], [19.0, 487.0], [5.0, 1457.5], [20.0, 486.0], [21.0, 498.0], [22.0, 491.0], [23.0, 441.5], [6.0, 1265.0], [25.0, 478.0], [7.0, 1191.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 441.5, "minX": 1.0, "maxY": 2546.0, "series": [{"data": [[2.0, 833.5], [8.0, 1183.0], [9.0, 995.0], [10.0, 1017.0], [11.0, 925.0], [3.0, 1439.5], [12.0, 791.5], [13.0, 774.5], [14.0, 679.0], [15.0, 508.0], [4.0, 1399.0], [16.0, 543.0], [1.0, 2546.0], [17.0, 470.0], [18.0, 494.5], [19.0, 487.0], [5.0, 1454.5], [20.0, 486.0], [21.0, 498.0], [22.0, 491.0], [23.0, 441.5], [6.0, 1263.0], [25.0, 478.0], [7.0, 1188.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.35, "minX": 1.60440792E12, "maxY": 10.016666666666667, "series": [{"data": [[1.60440804E12, 10.016666666666667], [1.60440822E12, 8.15], [1.60440816E12, 9.75], [1.60440834E12, 9.716666666666667], [1.60440828E12, 9.066666666666666], [1.60440846E12, 9.05], [1.60440798E12, 8.866666666666667], [1.6044084E12, 9.766666666666667], [1.60440792E12, 2.35], [1.6044081E12, 9.766666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440846E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60440792E12, "maxY": 10.016666666666667, "series": [{"data": [[1.60440852E12, 0.016666666666666666], [1.60440804E12, 10.016666666666667], [1.60440822E12, 8.15], [1.60440816E12, 9.75], [1.60440834E12, 9.716666666666667], [1.60440828E12, 9.066666666666666], [1.60440846E12, 9.2], [1.60440798E12, 8.866666666666667], [1.6044084E12, 9.766666666666667], [1.60440792E12, 2.183333333333333], [1.6044081E12, 9.766666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440852E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60440792E12, "maxY": 10.016666666666667, "series": [{"data": [[1.60440852E12, 0.016666666666666666], [1.60440804E12, 10.016666666666667], [1.60440822E12, 8.15], [1.60440816E12, 9.75], [1.60440834E12, 9.716666666666667], [1.60440828E12, 9.066666666666666], [1.60440846E12, 9.2], [1.60440798E12, 8.866666666666667], [1.6044084E12, 9.766666666666667], [1.60440792E12, 2.183333333333333], [1.6044081E12, 9.766666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440852E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60440792E12, "maxY": 10.016666666666667, "series": [{"data": [[1.60440852E12, 0.016666666666666666], [1.60440804E12, 10.016666666666667], [1.60440822E12, 8.15], [1.60440816E12, 9.75], [1.60440834E12, 9.716666666666667], [1.60440828E12, 9.066666666666666], [1.60440846E12, 9.2], [1.60440798E12, 8.866666666666667], [1.6044084E12, 9.766666666666667], [1.60440792E12, 2.183333333333333], [1.6044081E12, 9.766666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440852E12, "title": "Total Transactions Per Second"}},
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

