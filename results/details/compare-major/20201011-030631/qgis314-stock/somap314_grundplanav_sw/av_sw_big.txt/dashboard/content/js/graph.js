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
        data: {"result": {"minY": 194.0, "minX": 0.0, "maxY": 9622.0, "series": [{"data": [[0.0, 194.0], [0.1, 200.0], [0.2, 202.0], [0.3, 204.0], [0.4, 205.0], [0.5, 206.0], [0.6, 208.0], [0.7, 209.0], [0.8, 211.0], [0.9, 212.0], [1.0, 213.0], [1.1, 215.0], [1.2, 216.0], [1.3, 217.0], [1.4, 219.0], [1.5, 221.0], [1.6, 222.0], [1.7, 222.0], [1.8, 224.0], [1.9, 225.0], [2.0, 226.0], [2.1, 227.0], [2.2, 228.0], [2.3, 229.0], [2.4, 230.0], [2.5, 231.0], [2.6, 231.0], [2.7, 232.0], [2.8, 233.0], [2.9, 233.0], [3.0, 234.0], [3.1, 235.0], [3.2, 236.0], [3.3, 237.0], [3.4, 237.0], [3.5, 238.0], [3.6, 238.0], [3.7, 239.0], [3.8, 240.0], [3.9, 241.0], [4.0, 242.0], [4.1, 243.0], [4.2, 244.0], [4.3, 244.0], [4.4, 245.0], [4.5, 245.0], [4.6, 246.0], [4.7, 246.0], [4.8, 247.0], [4.9, 248.0], [5.0, 248.0], [5.1, 249.0], [5.2, 250.0], [5.3, 252.0], [5.4, 252.0], [5.5, 253.0], [5.6, 254.0], [5.7, 255.0], [5.8, 256.0], [5.9, 257.0], [6.0, 259.0], [6.1, 261.0], [6.2, 263.0], [6.3, 265.0], [6.4, 266.0], [6.5, 268.0], [6.6, 269.0], [6.7, 271.0], [6.8, 274.0], [6.9, 277.0], [7.0, 279.0], [7.1, 281.0], [7.2, 283.0], [7.3, 285.0], [7.4, 289.0], [7.5, 290.0], [7.6, 291.0], [7.7, 294.0], [7.8, 296.0], [7.9, 298.0], [8.0, 299.0], [8.1, 301.0], [8.2, 302.0], [8.3, 304.0], [8.4, 306.0], [8.5, 308.0], [8.6, 309.0], [8.7, 311.0], [8.8, 313.0], [8.9, 313.0], [9.0, 315.0], [9.1, 316.0], [9.2, 318.0], [9.3, 319.0], [9.4, 320.0], [9.5, 321.0], [9.6, 323.0], [9.7, 324.0], [9.8, 324.0], [9.9, 325.0], [10.0, 326.0], [10.1, 327.0], [10.2, 328.0], [10.3, 329.0], [10.4, 330.0], [10.5, 330.0], [10.6, 331.0], [10.7, 331.0], [10.8, 332.0], [10.9, 333.0], [11.0, 334.0], [11.1, 335.0], [11.2, 335.0], [11.3, 336.0], [11.4, 337.0], [11.5, 338.0], [11.6, 339.0], [11.7, 340.0], [11.8, 341.0], [11.9, 342.0], [12.0, 343.0], [12.1, 344.0], [12.2, 345.0], [12.3, 348.0], [12.4, 348.0], [12.5, 349.0], [12.6, 350.0], [12.7, 352.0], [12.8, 353.0], [12.9, 354.0], [13.0, 356.0], [13.1, 357.0], [13.2, 358.0], [13.3, 360.0], [13.4, 362.0], [13.5, 364.0], [13.6, 365.0], [13.7, 367.0], [13.8, 370.0], [13.9, 371.0], [14.0, 375.0], [14.1, 375.0], [14.2, 377.0], [14.3, 379.0], [14.4, 381.0], [14.5, 385.0], [14.6, 387.0], [14.7, 389.0], [14.8, 390.0], [14.9, 392.0], [15.0, 395.0], [15.1, 396.0], [15.2, 397.0], [15.3, 401.0], [15.4, 401.0], [15.5, 403.0], [15.6, 405.0], [15.7, 406.0], [15.8, 408.0], [15.9, 410.0], [16.0, 411.0], [16.1, 412.0], [16.2, 413.0], [16.3, 413.0], [16.4, 416.0], [16.5, 418.0], [16.6, 419.0], [16.7, 419.0], [16.8, 421.0], [16.9, 423.0], [17.0, 424.0], [17.1, 426.0], [17.2, 427.0], [17.3, 428.0], [17.4, 429.0], [17.5, 430.0], [17.6, 431.0], [17.7, 433.0], [17.8, 433.0], [17.9, 434.0], [18.0, 435.0], [18.1, 436.0], [18.2, 438.0], [18.3, 439.0], [18.4, 440.0], [18.5, 441.0], [18.6, 442.0], [18.7, 444.0], [18.8, 445.0], [18.9, 446.0], [19.0, 447.0], [19.1, 448.0], [19.2, 449.0], [19.3, 451.0], [19.4, 452.0], [19.5, 452.0], [19.6, 453.0], [19.7, 454.0], [19.8, 455.0], [19.9, 456.0], [20.0, 457.0], [20.1, 458.0], [20.2, 460.0], [20.3, 461.0], [20.4, 462.0], [20.5, 463.0], [20.6, 464.0], [20.7, 465.0], [20.8, 466.0], [20.9, 466.0], [21.0, 467.0], [21.1, 468.0], [21.2, 468.0], [21.3, 469.0], [21.4, 469.0], [21.5, 470.0], [21.6, 471.0], [21.7, 472.0], [21.8, 473.0], [21.9, 474.0], [22.0, 474.0], [22.1, 474.0], [22.2, 475.0], [22.3, 476.0], [22.4, 477.0], [22.5, 478.0], [22.6, 479.0], [22.7, 479.0], [22.8, 481.0], [22.9, 481.0], [23.0, 482.0], [23.1, 483.0], [23.2, 483.0], [23.3, 484.0], [23.4, 485.0], [23.5, 486.0], [23.6, 488.0], [23.7, 489.0], [23.8, 490.0], [23.9, 491.0], [24.0, 492.0], [24.1, 493.0], [24.2, 493.0], [24.3, 494.0], [24.4, 496.0], [24.5, 497.0], [24.6, 498.0], [24.7, 500.0], [24.8, 501.0], [24.9, 502.0], [25.0, 502.0], [25.1, 504.0], [25.2, 505.0], [25.3, 506.0], [25.4, 507.0], [25.5, 509.0], [25.6, 509.0], [25.7, 511.0], [25.8, 512.0], [25.9, 513.0], [26.0, 515.0], [26.1, 518.0], [26.2, 519.0], [26.3, 520.0], [26.4, 523.0], [26.5, 525.0], [26.6, 526.0], [26.7, 527.0], [26.8, 529.0], [26.9, 531.0], [27.0, 533.0], [27.1, 535.0], [27.2, 536.0], [27.3, 537.0], [27.4, 539.0], [27.5, 540.0], [27.6, 542.0], [27.7, 543.0], [27.8, 544.0], [27.9, 545.0], [28.0, 546.0], [28.1, 548.0], [28.2, 549.0], [28.3, 551.0], [28.4, 554.0], [28.5, 556.0], [28.6, 558.0], [28.7, 558.0], [28.8, 559.0], [28.9, 560.0], [29.0, 561.0], [29.1, 562.0], [29.2, 563.0], [29.3, 564.0], [29.4, 565.0], [29.5, 565.0], [29.6, 566.0], [29.7, 568.0], [29.8, 569.0], [29.9, 569.0], [30.0, 569.0], [30.1, 570.0], [30.2, 572.0], [30.3, 573.0], [30.4, 573.0], [30.5, 574.0], [30.6, 576.0], [30.7, 577.0], [30.8, 579.0], [30.9, 580.0], [31.0, 582.0], [31.1, 583.0], [31.2, 584.0], [31.3, 585.0], [31.4, 586.0], [31.5, 589.0], [31.6, 590.0], [31.7, 592.0], [31.8, 593.0], [31.9, 594.0], [32.0, 595.0], [32.1, 597.0], [32.2, 598.0], [32.3, 599.0], [32.4, 600.0], [32.5, 602.0], [32.6, 602.0], [32.7, 603.0], [32.8, 604.0], [32.9, 606.0], [33.0, 607.0], [33.1, 608.0], [33.2, 610.0], [33.3, 611.0], [33.4, 613.0], [33.5, 615.0], [33.6, 615.0], [33.7, 616.0], [33.8, 617.0], [33.9, 618.0], [34.0, 619.0], [34.1, 621.0], [34.2, 622.0], [34.3, 623.0], [34.4, 624.0], [34.5, 625.0], [34.6, 626.0], [34.7, 627.0], [34.8, 628.0], [34.9, 630.0], [35.0, 632.0], [35.1, 633.0], [35.2, 634.0], [35.3, 635.0], [35.4, 635.0], [35.5, 636.0], [35.6, 636.0], [35.7, 638.0], [35.8, 639.0], [35.9, 640.0], [36.0, 642.0], [36.1, 642.0], [36.2, 643.0], [36.3, 644.0], [36.4, 646.0], [36.5, 647.0], [36.6, 648.0], [36.7, 649.0], [36.8, 651.0], [36.9, 652.0], [37.0, 653.0], [37.1, 654.0], [37.2, 656.0], [37.3, 657.0], [37.4, 658.0], [37.5, 659.0], [37.6, 660.0], [37.7, 660.0], [37.8, 661.0], [37.9, 664.0], [38.0, 666.0], [38.1, 667.0], [38.2, 669.0], [38.3, 670.0], [38.4, 672.0], [38.5, 672.0], [38.6, 674.0], [38.7, 675.0], [38.8, 676.0], [38.9, 678.0], [39.0, 679.0], [39.1, 680.0], [39.2, 681.0], [39.3, 682.0], [39.4, 683.0], [39.5, 684.0], [39.6, 685.0], [39.7, 687.0], [39.8, 688.0], [39.9, 688.0], [40.0, 690.0], [40.1, 692.0], [40.2, 693.0], [40.3, 694.0], [40.4, 694.0], [40.5, 695.0], [40.6, 696.0], [40.7, 698.0], [40.8, 698.0], [40.9, 700.0], [41.0, 701.0], [41.1, 703.0], [41.2, 704.0], [41.3, 706.0], [41.4, 707.0], [41.5, 709.0], [41.6, 710.0], [41.7, 712.0], [41.8, 713.0], [41.9, 715.0], [42.0, 716.0], [42.1, 717.0], [42.2, 718.0], [42.3, 720.0], [42.4, 722.0], [42.5, 723.0], [42.6, 724.0], [42.7, 725.0], [42.8, 727.0], [42.9, 729.0], [43.0, 731.0], [43.1, 732.0], [43.2, 735.0], [43.3, 736.0], [43.4, 738.0], [43.5, 739.0], [43.6, 741.0], [43.7, 742.0], [43.8, 745.0], [43.9, 747.0], [44.0, 749.0], [44.1, 750.0], [44.2, 752.0], [44.3, 754.0], [44.4, 755.0], [44.5, 756.0], [44.6, 758.0], [44.7, 759.0], [44.8, 762.0], [44.9, 765.0], [45.0, 767.0], [45.1, 768.0], [45.2, 769.0], [45.3, 770.0], [45.4, 771.0], [45.5, 772.0], [45.6, 776.0], [45.7, 777.0], [45.8, 779.0], [45.9, 780.0], [46.0, 782.0], [46.1, 784.0], [46.2, 786.0], [46.3, 788.0], [46.4, 791.0], [46.5, 793.0], [46.6, 795.0], [46.7, 797.0], [46.8, 800.0], [46.9, 802.0], [47.0, 805.0], [47.1, 808.0], [47.2, 809.0], [47.3, 812.0], [47.4, 813.0], [47.5, 816.0], [47.6, 817.0], [47.7, 819.0], [47.8, 823.0], [47.9, 824.0], [48.0, 826.0], [48.1, 827.0], [48.2, 828.0], [48.3, 830.0], [48.4, 833.0], [48.5, 834.0], [48.6, 835.0], [48.7, 836.0], [48.8, 839.0], [48.9, 841.0], [49.0, 845.0], [49.1, 850.0], [49.2, 850.0], [49.3, 853.0], [49.4, 855.0], [49.5, 857.0], [49.6, 858.0], [49.7, 863.0], [49.8, 864.0], [49.9, 866.0], [50.0, 868.0], [50.1, 870.0], [50.2, 872.0], [50.3, 874.0], [50.4, 878.0], [50.5, 879.0], [50.6, 881.0], [50.7, 882.0], [50.8, 884.0], [50.9, 886.0], [51.0, 889.0], [51.1, 891.0], [51.2, 892.0], [51.3, 895.0], [51.4, 897.0], [51.5, 898.0], [51.6, 899.0], [51.7, 900.0], [51.8, 902.0], [51.9, 903.0], [52.0, 905.0], [52.1, 907.0], [52.2, 910.0], [52.3, 912.0], [52.4, 914.0], [52.5, 916.0], [52.6, 917.0], [52.7, 919.0], [52.8, 921.0], [52.9, 922.0], [53.0, 926.0], [53.1, 929.0], [53.2, 932.0], [53.3, 934.0], [53.4, 937.0], [53.5, 937.0], [53.6, 939.0], [53.7, 942.0], [53.8, 943.0], [53.9, 944.0], [54.0, 947.0], [54.1, 950.0], [54.2, 953.0], [54.3, 955.0], [54.4, 958.0], [54.5, 961.0], [54.6, 962.0], [54.7, 964.0], [54.8, 966.0], [54.9, 968.0], [55.0, 970.0], [55.1, 971.0], [55.2, 973.0], [55.3, 977.0], [55.4, 979.0], [55.5, 981.0], [55.6, 982.0], [55.7, 987.0], [55.8, 988.0], [55.9, 989.0], [56.0, 991.0], [56.1, 993.0], [56.2, 994.0], [56.3, 995.0], [56.4, 998.0], [56.5, 999.0], [56.6, 1001.0], [56.7, 1003.0], [56.8, 1004.0], [56.9, 1008.0], [57.0, 1011.0], [57.1, 1014.0], [57.2, 1015.0], [57.3, 1018.0], [57.4, 1021.0], [57.5, 1022.0], [57.6, 1024.0], [57.7, 1027.0], [57.8, 1029.0], [57.9, 1030.0], [58.0, 1034.0], [58.1, 1036.0], [58.2, 1038.0], [58.3, 1041.0], [58.4, 1042.0], [58.5, 1044.0], [58.6, 1046.0], [58.7, 1048.0], [58.8, 1050.0], [58.9, 1052.0], [59.0, 1054.0], [59.1, 1056.0], [59.2, 1057.0], [59.3, 1061.0], [59.4, 1063.0], [59.5, 1066.0], [59.6, 1068.0], [59.7, 1069.0], [59.8, 1072.0], [59.9, 1076.0], [60.0, 1078.0], [60.1, 1082.0], [60.2, 1084.0], [60.3, 1086.0], [60.4, 1090.0], [60.5, 1091.0], [60.6, 1094.0], [60.7, 1095.0], [60.8, 1097.0], [60.9, 1100.0], [61.0, 1101.0], [61.1, 1105.0], [61.2, 1106.0], [61.3, 1112.0], [61.4, 1113.0], [61.5, 1114.0], [61.6, 1115.0], [61.7, 1118.0], [61.8, 1120.0], [61.9, 1122.0], [62.0, 1125.0], [62.1, 1130.0], [62.2, 1132.0], [62.3, 1134.0], [62.4, 1136.0], [62.5, 1137.0], [62.6, 1139.0], [62.7, 1141.0], [62.8, 1143.0], [62.9, 1145.0], [63.0, 1149.0], [63.1, 1152.0], [63.2, 1154.0], [63.3, 1158.0], [63.4, 1160.0], [63.5, 1161.0], [63.6, 1163.0], [63.7, 1164.0], [63.8, 1166.0], [63.9, 1167.0], [64.0, 1171.0], [64.1, 1173.0], [64.2, 1176.0], [64.3, 1177.0], [64.4, 1178.0], [64.5, 1180.0], [64.6, 1183.0], [64.7, 1185.0], [64.8, 1187.0], [64.9, 1189.0], [65.0, 1192.0], [65.1, 1194.0], [65.2, 1196.0], [65.3, 1200.0], [65.4, 1203.0], [65.5, 1204.0], [65.6, 1205.0], [65.7, 1208.0], [65.8, 1211.0], [65.9, 1214.0], [66.0, 1215.0], [66.1, 1216.0], [66.2, 1218.0], [66.3, 1220.0], [66.4, 1222.0], [66.5, 1224.0], [66.6, 1226.0], [66.7, 1230.0], [66.8, 1232.0], [66.9, 1234.0], [67.0, 1235.0], [67.1, 1237.0], [67.2, 1239.0], [67.3, 1240.0], [67.4, 1242.0], [67.5, 1245.0], [67.6, 1251.0], [67.7, 1253.0], [67.8, 1254.0], [67.9, 1256.0], [68.0, 1259.0], [68.1, 1261.0], [68.2, 1263.0], [68.3, 1264.0], [68.4, 1267.0], [68.5, 1270.0], [68.6, 1274.0], [68.7, 1275.0], [68.8, 1277.0], [68.9, 1279.0], [69.0, 1280.0], [69.1, 1282.0], [69.2, 1283.0], [69.3, 1286.0], [69.4, 1288.0], [69.5, 1289.0], [69.6, 1292.0], [69.7, 1294.0], [69.8, 1295.0], [69.9, 1296.0], [70.0, 1300.0], [70.1, 1302.0], [70.2, 1303.0], [70.3, 1305.0], [70.4, 1309.0], [70.5, 1311.0], [70.6, 1313.0], [70.7, 1314.0], [70.8, 1316.0], [70.9, 1318.0], [71.0, 1322.0], [71.1, 1324.0], [71.2, 1329.0], [71.3, 1330.0], [71.4, 1332.0], [71.5, 1334.0], [71.6, 1338.0], [71.7, 1340.0], [71.8, 1343.0], [71.9, 1344.0], [72.0, 1346.0], [72.1, 1347.0], [72.2, 1352.0], [72.3, 1352.0], [72.4, 1354.0], [72.5, 1355.0], [72.6, 1359.0], [72.7, 1364.0], [72.8, 1366.0], [72.9, 1367.0], [73.0, 1371.0], [73.1, 1372.0], [73.2, 1374.0], [73.3, 1375.0], [73.4, 1378.0], [73.5, 1381.0], [73.6, 1383.0], [73.7, 1386.0], [73.8, 1387.0], [73.9, 1389.0], [74.0, 1391.0], [74.1, 1393.0], [74.2, 1396.0], [74.3, 1399.0], [74.4, 1401.0], [74.5, 1403.0], [74.6, 1406.0], [74.7, 1409.0], [74.8, 1412.0], [74.9, 1413.0], [75.0, 1416.0], [75.1, 1419.0], [75.2, 1422.0], [75.3, 1427.0], [75.4, 1431.0], [75.5, 1433.0], [75.6, 1435.0], [75.7, 1437.0], [75.8, 1439.0], [75.9, 1441.0], [76.0, 1443.0], [76.1, 1446.0], [76.2, 1448.0], [76.3, 1451.0], [76.4, 1453.0], [76.5, 1455.0], [76.6, 1457.0], [76.7, 1459.0], [76.8, 1460.0], [76.9, 1463.0], [77.0, 1465.0], [77.1, 1467.0], [77.2, 1469.0], [77.3, 1471.0], [77.4, 1474.0], [77.5, 1478.0], [77.6, 1480.0], [77.7, 1483.0], [77.8, 1485.0], [77.9, 1487.0], [78.0, 1489.0], [78.1, 1491.0], [78.2, 1495.0], [78.3, 1498.0], [78.4, 1499.0], [78.5, 1501.0], [78.6, 1505.0], [78.7, 1508.0], [78.8, 1510.0], [78.9, 1511.0], [79.0, 1514.0], [79.1, 1517.0], [79.2, 1519.0], [79.3, 1522.0], [79.4, 1526.0], [79.5, 1527.0], [79.6, 1529.0], [79.7, 1533.0], [79.8, 1538.0], [79.9, 1541.0], [80.0, 1545.0], [80.1, 1548.0], [80.2, 1549.0], [80.3, 1551.0], [80.4, 1553.0], [80.5, 1555.0], [80.6, 1557.0], [80.7, 1560.0], [80.8, 1562.0], [80.9, 1565.0], [81.0, 1566.0], [81.1, 1567.0], [81.2, 1570.0], [81.3, 1573.0], [81.4, 1576.0], [81.5, 1578.0], [81.6, 1579.0], [81.7, 1581.0], [81.8, 1584.0], [81.9, 1587.0], [82.0, 1589.0], [82.1, 1590.0], [82.2, 1593.0], [82.3, 1600.0], [82.4, 1602.0], [82.5, 1603.0], [82.6, 1607.0], [82.7, 1610.0], [82.8, 1613.0], [82.9, 1616.0], [83.0, 1617.0], [83.1, 1619.0], [83.2, 1623.0], [83.3, 1625.0], [83.4, 1627.0], [83.5, 1631.0], [83.6, 1637.0], [83.7, 1640.0], [83.8, 1643.0], [83.9, 1645.0], [84.0, 1647.0], [84.1, 1653.0], [84.2, 1656.0], [84.3, 1660.0], [84.4, 1661.0], [84.5, 1665.0], [84.6, 1666.0], [84.7, 1668.0], [84.8, 1670.0], [84.9, 1674.0], [85.0, 1677.0], [85.1, 1679.0], [85.2, 1681.0], [85.3, 1685.0], [85.4, 1688.0], [85.5, 1691.0], [85.6, 1693.0], [85.7, 1699.0], [85.8, 1705.0], [85.9, 1708.0], [86.0, 1711.0], [86.1, 1713.0], [86.2, 1715.0], [86.3, 1719.0], [86.4, 1723.0], [86.5, 1724.0], [86.6, 1726.0], [86.7, 1730.0], [86.8, 1733.0], [86.9, 1738.0], [87.0, 1743.0], [87.1, 1746.0], [87.2, 1752.0], [87.3, 1756.0], [87.4, 1759.0], [87.5, 1762.0], [87.6, 1765.0], [87.7, 1771.0], [87.8, 1777.0], [87.9, 1782.0], [88.0, 1789.0], [88.1, 1791.0], [88.2, 1796.0], [88.3, 1798.0], [88.4, 1805.0], [88.5, 1808.0], [88.6, 1815.0], [88.7, 1816.0], [88.8, 1823.0], [88.9, 1829.0], [89.0, 1836.0], [89.1, 1841.0], [89.2, 1846.0], [89.3, 1852.0], [89.4, 1861.0], [89.5, 1866.0], [89.6, 1874.0], [89.7, 1880.0], [89.8, 1886.0], [89.9, 1892.0], [90.0, 1897.0], [90.1, 1900.0], [90.2, 1910.0], [90.3, 1918.0], [90.4, 1923.0], [90.5, 1928.0], [90.6, 1939.0], [90.7, 1946.0], [90.8, 1950.0], [90.9, 1954.0], [91.0, 1966.0], [91.1, 1974.0], [91.2, 1978.0], [91.3, 1982.0], [91.4, 1994.0], [91.5, 2001.0], [91.6, 2009.0], [91.7, 2012.0], [91.8, 2018.0], [91.9, 2024.0], [92.0, 2027.0], [92.1, 2035.0], [92.2, 2040.0], [92.3, 2052.0], [92.4, 2059.0], [92.5, 2070.0], [92.6, 2076.0], [92.7, 2095.0], [92.8, 2100.0], [92.9, 2114.0], [93.0, 2122.0], [93.1, 2131.0], [93.2, 2136.0], [93.3, 2148.0], [93.4, 2156.0], [93.5, 2163.0], [93.6, 2169.0], [93.7, 2193.0], [93.8, 2201.0], [93.9, 2215.0], [94.0, 2230.0], [94.1, 2242.0], [94.2, 2249.0], [94.3, 2262.0], [94.4, 2283.0], [94.5, 2296.0], [94.6, 2301.0], [94.7, 2312.0], [94.8, 2325.0], [94.9, 2330.0], [95.0, 2346.0], [95.1, 2355.0], [95.2, 2378.0], [95.3, 2391.0], [95.4, 2408.0], [95.5, 2417.0], [95.6, 2421.0], [95.7, 2437.0], [95.8, 2455.0], [95.9, 2462.0], [96.0, 2483.0], [96.1, 2492.0], [96.2, 2503.0], [96.3, 2533.0], [96.4, 2543.0], [96.5, 2555.0], [96.6, 2577.0], [96.7, 2600.0], [96.8, 2620.0], [96.9, 2637.0], [97.0, 2661.0], [97.1, 2681.0], [97.2, 2694.0], [97.3, 2732.0], [97.4, 2749.0], [97.5, 2770.0], [97.6, 2791.0], [97.7, 2807.0], [97.8, 2825.0], [97.9, 2846.0], [98.0, 2866.0], [98.1, 2909.0], [98.2, 2938.0], [98.3, 2976.0], [98.4, 3025.0], [98.5, 3092.0], [98.6, 3116.0], [98.7, 3148.0], [98.8, 3214.0], [98.9, 3276.0], [99.0, 3339.0], [99.1, 3389.0], [99.2, 3442.0], [99.3, 3522.0], [99.4, 3700.0], [99.5, 3926.0], [99.6, 4364.0], [99.7, 4552.0], [99.8, 4977.0], [99.9, 5467.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 489.0, "series": [{"data": [[600.0, 442.0], [700.0, 306.0], [800.0, 253.0], [900.0, 254.0], [1000.0, 226.0], [1100.0, 229.0], [1200.0, 243.0], [1300.0, 225.0], [1400.0, 213.0], [1500.0, 201.0], [1600.0, 177.0], [1700.0, 137.0], [1800.0, 90.0], [1900.0, 73.0], [2000.0, 67.0], [2100.0, 52.0], [2200.0, 41.0], [2300.0, 43.0], [2400.0, 40.0], [2500.0, 27.0], [2600.0, 27.0], [2700.0, 22.0], [2800.0, 22.0], [2900.0, 14.0], [3000.0, 10.0], [3100.0, 14.0], [3300.0, 11.0], [3200.0, 8.0], [3400.0, 6.0], [3500.0, 5.0], [3700.0, 5.0], [3600.0, 1.0], [3800.0, 1.0], [3900.0, 2.0], [4000.0, 3.0], [4300.0, 1.0], [4400.0, 3.0], [4600.0, 1.0], [4500.0, 2.0], [4800.0, 1.0], [4700.0, 1.0], [4900.0, 2.0], [5100.0, 1.0], [5300.0, 2.0], [5200.0, 1.0], [5600.0, 1.0], [5500.0, 1.0], [5400.0, 1.0], [6300.0, 1.0], [6200.0, 1.0], [9600.0, 1.0], [100.0, 4.0], [200.0, 412.0], [300.0, 376.0], [400.0, 489.0], [500.0, 398.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1116.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2787.0, "series": [{"data": [[0.0, 1287.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2787.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1116.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.464285714285715, "minX": 1.60238748E12, "maxY": 10.0, "series": [{"data": [[1.60238748E12, 10.0], [1.60238778E12, 10.0], [1.60238766E12, 10.0], [1.6023876E12, 10.0], [1.60238796E12, 10.0], [1.60238802E12, 9.464285714285715], [1.60238784E12, 10.0], [1.6023879E12, 10.0], [1.60238754E12, 10.0], [1.60238772E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238802E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 350.0, "minX": 1.0, "maxY": 2805.0, "series": [{"data": [[8.0, 690.0], [4.0, 633.0], [2.0, 1019.0], [1.0, 2805.0], [9.0, 1659.0], [10.0, 1037.9756803705884], [5.0, 1403.0], [6.0, 1066.0], [3.0, 1018.0], [7.0, 350.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1038.2263969171522]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 638.7166666666667, "minX": 1.60238748E12, "maxY": 3383172.2333333334, "series": [{"data": [[1.60238748E12, 2142368.3666666667], [1.60238778E12, 2373220.433333333], [1.60238766E12, 2969080.6], [1.6023876E12, 3383172.2333333334], [1.60238796E12, 2568734.0], [1.60238802E12, 365117.0333333333], [1.60238784E12, 2612555.7666666666], [1.6023879E12, 2754806.5], [1.60238754E12, 2130896.6166666667], [1.60238772E12, 2672162.433333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60238748E12, 2883.65], [1.60238778E12, 3921.866666666667], [1.60238766E12, 4531.316666666667], [1.6023876E12, 4605.133333333333], [1.60238796E12, 4434.766666666666], [1.60238802E12, 638.7166666666667], [1.60238784E12, 4569.833333333333], [1.6023879E12, 4702.383333333333], [1.60238754E12, 4657.483333333334], [1.60238772E12, 3632.1833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238802E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 942.0499999999994, "minX": 1.60238748E12, "maxY": 1341.9523809523816, "series": [{"data": [[1.60238748E12, 1196.7462686567158], [1.60238778E12, 1109.099082568807], [1.60238766E12, 1013.254606365159], [1.6023876E12, 989.2289950576622], [1.60238796E12, 1013.2623509369677], [1.60238802E12, 1341.9523809523816], [1.60238784E12, 972.7572347266885], [1.6023879E12, 966.6580645161285], [1.60238754E12, 942.0499999999994], [1.60238772E12, 1198.8991769547308]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238802E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 940.503125, "minX": 1.60238748E12, "maxY": 1340.488095238095, "series": [{"data": [[1.60238748E12, 1194.4253731343276], [1.60238778E12, 1107.2550458715596], [1.60238766E12, 1011.0469011725287], [1.6023876E12, 986.5370675453041], [1.60238796E12, 1011.7137989778529], [1.60238802E12, 1340.488095238095], [1.60238784E12, 971.1993569131836], [1.6023879E12, 965.06935483871], [1.60238754E12, 940.503125], [1.60238772E12, 1196.4362139917712]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238802E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.019769357495881375, "minX": 1.60238748E12, "maxY": 0.2661691542288557, "series": [{"data": [[1.60238748E12, 0.2661691542288557], [1.60238778E12, 0.020183486238532097], [1.60238766E12, 0.020100502512562807], [1.6023876E12, 0.019769357495881375], [1.60238796E12, 0.025553662691652483], [1.60238802E12, 0.03571428571428571], [1.60238784E12, 0.024115755627009666], [1.6023879E12, 0.02258064516129036], [1.60238754E12, 0.020312499999999973], [1.60238772E12, 0.02057613168724282]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238802E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 194.0, "minX": 1.60238748E12, "maxY": 9622.0, "series": [{"data": [[1.60238748E12, 6336.0], [1.60238778E12, 9622.0], [1.60238766E12, 5310.0], [1.6023876E12, 4750.0], [1.60238796E12, 4453.0], [1.60238802E12, 4001.0], [1.60238784E12, 3931.0], [1.6023879E12, 3586.0], [1.60238754E12, 5699.0], [1.60238772E12, 4673.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60238748E12, 233.62699990391732], [1.60238778E12, 233.65599947929383], [1.60238766E12, 208.38199985742568], [1.6023876E12, 206.4159995651245], [1.60238796E12, 204.45999929904937], [1.60238802E12, 256.0], [1.60238784E12, 211.60699985146522], [1.6023879E12, 207.35599940776825], [1.60238754E12, 216.07599938869475], [1.60238772E12, 223.38299988389016]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60238748E12, 233.98970003843309], [1.60238778E12, 234.81080010414124], [1.60238766E12, 208.92020005702972], [1.6023876E12, 208.0576001739502], [1.60238796E12, 207.10600028038024], [1.60238802E12, 256.0], [1.60238784E12, 212.3354001188278], [1.6023879E12, 209.14790005922316], [1.60238754E12, 217.0], [1.60238772E12, 223.82130004644395]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60238748E12, 233.82849995195866], [1.60238778E12, 234.37399986982345], [1.60238766E12, 208.68099992871285], [1.6023876E12, 207.32799978256224], [1.60238796E12, 205.9299996495247], [1.60238802E12, 256.0], [1.60238784E12, 211.91849992573262], [1.6023879E12, 208.5979997038841], [1.60238754E12, 217.0], [1.60238772E12, 223.62649994194507]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60238748E12, 219.0], [1.60238778E12, 200.0], [1.60238766E12, 203.0], [1.6023876E12, 196.0], [1.60238796E12, 198.0], [1.60238802E12, 256.0], [1.60238784E12, 196.0], [1.6023879E12, 202.0], [1.60238754E12, 194.0], [1.60238772E12, 204.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60238748E12, 1036.5], [1.60238778E12, 937.0], [1.60238766E12, 854.0], [1.6023876E12, 726.0], [1.60238796E12, 823.0], [1.60238802E12, 1075.0], [1.60238784E12, 745.0], [1.6023879E12, 789.0], [1.60238754E12, 751.5], [1.60238772E12, 1095.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238802E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 429.0, "minX": 1.0, "maxY": 2545.0, "series": [{"data": [[3.0, 1807.0], [4.0, 1255.5], [5.0, 1386.0], [6.0, 1349.0], [7.0, 1189.5], [8.0, 1100.0], [9.0, 1049.5], [10.0, 998.0], [11.0, 811.0], [12.0, 816.0], [13.0, 723.0], [14.0, 652.0], [15.0, 577.5], [16.0, 575.0], [1.0, 2545.0], [17.0, 476.0], [18.0, 468.5], [19.0, 476.5], [20.0, 469.5], [21.0, 474.0], [22.0, 475.0], [23.0, 435.5], [24.0, 445.0], [25.0, 429.0], [26.0, 456.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 429.0, "minX": 1.0, "maxY": 2532.5, "series": [{"data": [[3.0, 1805.0], [4.0, 1253.5], [5.0, 1382.5], [6.0, 1347.5], [7.0, 1188.0], [8.0, 1098.0], [9.0, 1049.0], [10.0, 997.0], [11.0, 809.5], [12.0, 815.5], [13.0, 723.0], [14.0, 652.0], [15.0, 577.5], [16.0, 574.0], [1.0, 2532.5], [17.0, 476.0], [18.0, 468.5], [19.0, 476.0], [20.0, 469.5], [21.0, 474.0], [22.0, 475.0], [23.0, 435.5], [24.0, 444.5], [25.0, 429.0], [26.0, 456.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.60238748E12, "maxY": 10.666666666666666, "series": [{"data": [[1.60238748E12, 6.866666666666666], [1.60238778E12, 9.083333333333334], [1.60238766E12, 9.95], [1.6023876E12, 10.116666666666667], [1.60238796E12, 9.783333333333333], [1.60238802E12, 1.2333333333333334], [1.60238784E12, 10.366666666666667], [1.6023879E12, 10.333333333333334], [1.60238754E12, 10.666666666666666], [1.60238772E12, 8.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238802E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.4, "minX": 1.60238748E12, "maxY": 10.666666666666666, "series": [{"data": [[1.60238748E12, 6.7], [1.60238778E12, 9.083333333333334], [1.60238766E12, 9.95], [1.6023876E12, 10.116666666666667], [1.60238796E12, 9.783333333333333], [1.60238802E12, 1.4], [1.60238784E12, 10.366666666666667], [1.6023879E12, 10.333333333333334], [1.60238754E12, 10.666666666666666], [1.60238772E12, 8.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238802E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.4, "minX": 1.60238748E12, "maxY": 10.666666666666666, "series": [{"data": [[1.60238748E12, 6.7], [1.60238778E12, 9.083333333333334], [1.60238766E12, 9.95], [1.6023876E12, 10.116666666666667], [1.60238796E12, 9.783333333333333], [1.60238802E12, 1.4], [1.60238784E12, 10.366666666666667], [1.6023879E12, 10.333333333333334], [1.60238754E12, 10.666666666666666], [1.60238772E12, 8.1]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238802E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.4, "minX": 1.60238748E12, "maxY": 10.666666666666666, "series": [{"data": [[1.60238748E12, 6.7], [1.60238778E12, 9.083333333333334], [1.60238766E12, 9.95], [1.6023876E12, 10.116666666666667], [1.60238796E12, 9.783333333333333], [1.60238802E12, 1.4], [1.60238784E12, 10.366666666666667], [1.6023879E12, 10.333333333333334], [1.60238754E12, 10.666666666666666], [1.60238772E12, 8.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238802E12, "title": "Total Transactions Per Second"}},
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

