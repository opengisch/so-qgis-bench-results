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
        data: {"result": {"minY": 177.0, "minX": 0.0, "maxY": 6924.0, "series": [{"data": [[0.0, 177.0], [0.1, 183.0], [0.2, 186.0], [0.3, 188.0], [0.4, 189.0], [0.5, 190.0], [0.6, 192.0], [0.7, 193.0], [0.8, 194.0], [0.9, 194.0], [1.0, 195.0], [1.1, 196.0], [1.2, 196.0], [1.3, 197.0], [1.4, 198.0], [1.5, 199.0], [1.6, 200.0], [1.7, 200.0], [1.8, 201.0], [1.9, 202.0], [2.0, 203.0], [2.1, 204.0], [2.2, 205.0], [2.3, 206.0], [2.4, 206.0], [2.5, 207.0], [2.6, 207.0], [2.7, 208.0], [2.8, 209.0], [2.9, 210.0], [3.0, 210.0], [3.1, 211.0], [3.2, 213.0], [3.3, 213.0], [3.4, 214.0], [3.5, 215.0], [3.6, 216.0], [3.7, 218.0], [3.8, 219.0], [3.9, 220.0], [4.0, 221.0], [4.1, 221.0], [4.2, 222.0], [4.3, 223.0], [4.4, 224.0], [4.5, 225.0], [4.6, 226.0], [4.7, 227.0], [4.8, 227.0], [4.9, 228.0], [5.0, 229.0], [5.1, 229.0], [5.2, 230.0], [5.3, 232.0], [5.4, 232.0], [5.5, 234.0], [5.6, 234.0], [5.7, 235.0], [5.8, 235.0], [5.9, 236.0], [6.0, 238.0], [6.1, 238.0], [6.2, 240.0], [6.3, 242.0], [6.4, 243.0], [6.5, 245.0], [6.6, 245.0], [6.7, 247.0], [6.8, 247.0], [6.9, 251.0], [7.0, 253.0], [7.1, 255.0], [7.2, 260.0], [7.3, 265.0], [7.4, 270.0], [7.5, 274.0], [7.6, 277.0], [7.7, 278.0], [7.8, 279.0], [7.9, 282.0], [8.0, 283.0], [8.1, 284.0], [8.2, 286.0], [8.3, 290.0], [8.4, 293.0], [8.5, 295.0], [8.6, 296.0], [8.7, 297.0], [8.8, 298.0], [8.9, 299.0], [9.0, 301.0], [9.1, 303.0], [9.2, 305.0], [9.3, 307.0], [9.4, 307.0], [9.5, 308.0], [9.6, 309.0], [9.7, 310.0], [9.8, 310.0], [9.9, 311.0], [10.0, 312.0], [10.1, 314.0], [10.2, 315.0], [10.3, 316.0], [10.4, 317.0], [10.5, 318.0], [10.6, 319.0], [10.7, 319.0], [10.8, 320.0], [10.9, 321.0], [11.0, 322.0], [11.1, 322.0], [11.2, 323.0], [11.3, 324.0], [11.4, 325.0], [11.5, 326.0], [11.6, 327.0], [11.7, 328.0], [11.8, 328.0], [11.9, 329.0], [12.0, 330.0], [12.1, 331.0], [12.2, 332.0], [12.3, 333.0], [12.4, 334.0], [12.5, 335.0], [12.6, 336.0], [12.7, 337.0], [12.8, 338.0], [12.9, 338.0], [13.0, 339.0], [13.1, 340.0], [13.2, 341.0], [13.3, 342.0], [13.4, 344.0], [13.5, 345.0], [13.6, 346.0], [13.7, 347.0], [13.8, 348.0], [13.9, 349.0], [14.0, 351.0], [14.1, 353.0], [14.2, 356.0], [14.3, 357.0], [14.4, 359.0], [14.5, 360.0], [14.6, 361.0], [14.7, 363.0], [14.8, 364.0], [14.9, 367.0], [15.0, 368.0], [15.1, 369.0], [15.2, 373.0], [15.3, 374.0], [15.4, 376.0], [15.5, 377.0], [15.6, 379.0], [15.7, 381.0], [15.8, 382.0], [15.9, 384.0], [16.0, 385.0], [16.1, 386.0], [16.2, 386.0], [16.3, 388.0], [16.4, 389.0], [16.5, 390.0], [16.6, 393.0], [16.7, 397.0], [16.8, 399.0], [16.9, 401.0], [17.0, 402.0], [17.1, 403.0], [17.2, 404.0], [17.3, 405.0], [17.4, 406.0], [17.5, 407.0], [17.6, 408.0], [17.7, 410.0], [17.8, 411.0], [17.9, 412.0], [18.0, 414.0], [18.1, 414.0], [18.2, 417.0], [18.3, 418.0], [18.4, 421.0], [18.5, 422.0], [18.6, 423.0], [18.7, 425.0], [18.8, 426.0], [18.9, 427.0], [19.0, 427.0], [19.1, 427.0], [19.2, 428.0], [19.3, 429.0], [19.4, 429.0], [19.5, 430.0], [19.6, 431.0], [19.7, 432.0], [19.8, 432.0], [19.9, 433.0], [20.0, 434.0], [20.1, 434.0], [20.2, 435.0], [20.3, 437.0], [20.4, 437.0], [20.5, 438.0], [20.6, 439.0], [20.7, 440.0], [20.8, 441.0], [20.9, 442.0], [21.0, 442.0], [21.1, 443.0], [21.2, 444.0], [21.3, 445.0], [21.4, 446.0], [21.5, 446.0], [21.6, 448.0], [21.7, 449.0], [21.8, 450.0], [21.9, 450.0], [22.0, 451.0], [22.1, 452.0], [22.2, 452.0], [22.3, 452.0], [22.4, 453.0], [22.5, 454.0], [22.6, 456.0], [22.7, 457.0], [22.8, 457.0], [22.9, 458.0], [23.0, 459.0], [23.1, 459.0], [23.2, 460.0], [23.3, 461.0], [23.4, 462.0], [23.5, 463.0], [23.6, 464.0], [23.7, 465.0], [23.8, 466.0], [23.9, 466.0], [24.0, 467.0], [24.1, 468.0], [24.2, 469.0], [24.3, 469.0], [24.4, 470.0], [24.5, 471.0], [24.6, 472.0], [24.7, 474.0], [24.8, 475.0], [24.9, 476.0], [25.0, 477.0], [25.1, 478.0], [25.2, 479.0], [25.3, 480.0], [25.4, 481.0], [25.5, 483.0], [25.6, 485.0], [25.7, 486.0], [25.8, 488.0], [25.9, 490.0], [26.0, 491.0], [26.1, 492.0], [26.2, 492.0], [26.3, 495.0], [26.4, 496.0], [26.5, 498.0], [26.6, 499.0], [26.7, 500.0], [26.8, 501.0], [26.9, 502.0], [27.0, 504.0], [27.1, 506.0], [27.2, 507.0], [27.3, 511.0], [27.4, 512.0], [27.5, 513.0], [27.6, 514.0], [27.7, 516.0], [27.8, 518.0], [27.9, 519.0], [28.0, 521.0], [28.1, 523.0], [28.2, 525.0], [28.3, 527.0], [28.4, 530.0], [28.5, 531.0], [28.6, 532.0], [28.7, 534.0], [28.8, 536.0], [28.9, 537.0], [29.0, 538.0], [29.1, 538.0], [29.2, 540.0], [29.3, 542.0], [29.4, 543.0], [29.5, 544.0], [29.6, 545.0], [29.7, 546.0], [29.8, 547.0], [29.9, 549.0], [30.0, 551.0], [30.1, 552.0], [30.2, 552.0], [30.3, 553.0], [30.4, 554.0], [30.5, 555.0], [30.6, 556.0], [30.7, 557.0], [30.8, 558.0], [30.9, 559.0], [31.0, 561.0], [31.1, 561.0], [31.2, 564.0], [31.3, 564.0], [31.4, 565.0], [31.5, 566.0], [31.6, 568.0], [31.7, 569.0], [31.8, 570.0], [31.9, 572.0], [32.0, 573.0], [32.1, 575.0], [32.2, 576.0], [32.3, 577.0], [32.4, 578.0], [32.5, 580.0], [32.6, 582.0], [32.7, 583.0], [32.8, 586.0], [32.9, 586.0], [33.0, 589.0], [33.1, 590.0], [33.2, 591.0], [33.3, 593.0], [33.4, 595.0], [33.5, 597.0], [33.6, 599.0], [33.7, 599.0], [33.8, 601.0], [33.9, 601.0], [34.0, 603.0], [34.1, 604.0], [34.2, 605.0], [34.3, 606.0], [34.4, 608.0], [34.5, 608.0], [34.6, 610.0], [34.7, 613.0], [34.8, 615.0], [34.9, 615.0], [35.0, 617.0], [35.1, 618.0], [35.2, 620.0], [35.3, 623.0], [35.4, 624.0], [35.5, 626.0], [35.6, 627.0], [35.7, 629.0], [35.8, 630.0], [35.9, 631.0], [36.0, 632.0], [36.1, 633.0], [36.2, 634.0], [36.3, 635.0], [36.4, 635.0], [36.5, 637.0], [36.6, 637.0], [36.7, 638.0], [36.8, 639.0], [36.9, 640.0], [37.0, 641.0], [37.1, 641.0], [37.2, 643.0], [37.3, 643.0], [37.4, 645.0], [37.5, 646.0], [37.6, 647.0], [37.7, 648.0], [37.8, 648.0], [37.9, 649.0], [38.0, 650.0], [38.1, 651.0], [38.2, 653.0], [38.3, 654.0], [38.4, 655.0], [38.5, 656.0], [38.6, 657.0], [38.7, 659.0], [38.8, 660.0], [38.9, 661.0], [39.0, 662.0], [39.1, 663.0], [39.2, 665.0], [39.3, 667.0], [39.4, 669.0], [39.5, 670.0], [39.6, 671.0], [39.7, 672.0], [39.8, 674.0], [39.9, 674.0], [40.0, 676.0], [40.1, 677.0], [40.2, 677.0], [40.3, 678.0], [40.4, 681.0], [40.5, 683.0], [40.6, 684.0], [40.7, 686.0], [40.8, 688.0], [40.9, 689.0], [41.0, 690.0], [41.1, 691.0], [41.2, 694.0], [41.3, 696.0], [41.4, 697.0], [41.5, 699.0], [41.6, 700.0], [41.7, 701.0], [41.8, 703.0], [41.9, 704.0], [42.0, 705.0], [42.1, 707.0], [42.2, 709.0], [42.3, 710.0], [42.4, 711.0], [42.5, 713.0], [42.6, 717.0], [42.7, 720.0], [42.8, 722.0], [42.9, 723.0], [43.0, 724.0], [43.1, 726.0], [43.2, 727.0], [43.3, 729.0], [43.4, 731.0], [43.5, 733.0], [43.6, 735.0], [43.7, 737.0], [43.8, 738.0], [43.9, 740.0], [44.0, 743.0], [44.1, 745.0], [44.2, 747.0], [44.3, 748.0], [44.4, 751.0], [44.5, 752.0], [44.6, 756.0], [44.7, 757.0], [44.8, 761.0], [44.9, 763.0], [45.0, 764.0], [45.1, 767.0], [45.2, 770.0], [45.3, 772.0], [45.4, 773.0], [45.5, 775.0], [45.6, 777.0], [45.7, 778.0], [45.8, 782.0], [45.9, 785.0], [46.0, 787.0], [46.1, 788.0], [46.2, 791.0], [46.3, 793.0], [46.4, 795.0], [46.5, 796.0], [46.6, 797.0], [46.7, 800.0], [46.8, 801.0], [46.9, 804.0], [47.0, 805.0], [47.1, 809.0], [47.2, 811.0], [47.3, 812.0], [47.4, 813.0], [47.5, 816.0], [47.6, 819.0], [47.7, 822.0], [47.8, 825.0], [47.9, 829.0], [48.0, 831.0], [48.1, 832.0], [48.2, 834.0], [48.3, 837.0], [48.4, 839.0], [48.5, 840.0], [48.6, 842.0], [48.7, 848.0], [48.8, 852.0], [48.9, 855.0], [49.0, 857.0], [49.1, 858.0], [49.2, 858.0], [49.3, 861.0], [49.4, 864.0], [49.5, 866.0], [49.6, 869.0], [49.7, 871.0], [49.8, 874.0], [49.9, 875.0], [50.0, 876.0], [50.1, 878.0], [50.2, 880.0], [50.3, 882.0], [50.4, 884.0], [50.5, 886.0], [50.6, 888.0], [50.7, 890.0], [50.8, 892.0], [50.9, 895.0], [51.0, 896.0], [51.1, 897.0], [51.2, 898.0], [51.3, 898.0], [51.4, 904.0], [51.5, 906.0], [51.6, 908.0], [51.7, 910.0], [51.8, 911.0], [51.9, 913.0], [52.0, 915.0], [52.1, 917.0], [52.2, 918.0], [52.3, 920.0], [52.4, 922.0], [52.5, 927.0], [52.6, 931.0], [52.7, 934.0], [52.8, 936.0], [52.9, 938.0], [53.0, 941.0], [53.1, 944.0], [53.2, 947.0], [53.3, 948.0], [53.4, 949.0], [53.5, 951.0], [53.6, 952.0], [53.7, 954.0], [53.8, 956.0], [53.9, 959.0], [54.0, 961.0], [54.1, 962.0], [54.2, 963.0], [54.3, 965.0], [54.4, 967.0], [54.5, 970.0], [54.6, 972.0], [54.7, 974.0], [54.8, 976.0], [54.9, 977.0], [55.0, 980.0], [55.1, 982.0], [55.2, 984.0], [55.3, 987.0], [55.4, 990.0], [55.5, 993.0], [55.6, 994.0], [55.7, 995.0], [55.8, 997.0], [55.9, 1000.0], [56.0, 1004.0], [56.1, 1005.0], [56.2, 1007.0], [56.3, 1008.0], [56.4, 1011.0], [56.5, 1011.0], [56.6, 1013.0], [56.7, 1016.0], [56.8, 1020.0], [56.9, 1023.0], [57.0, 1026.0], [57.1, 1027.0], [57.2, 1030.0], [57.3, 1031.0], [57.4, 1033.0], [57.5, 1037.0], [57.6, 1042.0], [57.7, 1044.0], [57.8, 1045.0], [57.9, 1046.0], [58.0, 1047.0], [58.1, 1051.0], [58.2, 1055.0], [58.3, 1057.0], [58.4, 1059.0], [58.5, 1060.0], [58.6, 1064.0], [58.7, 1066.0], [58.8, 1069.0], [58.9, 1071.0], [59.0, 1071.0], [59.1, 1073.0], [59.2, 1075.0], [59.3, 1077.0], [59.4, 1079.0], [59.5, 1083.0], [59.6, 1086.0], [59.7, 1088.0], [59.8, 1088.0], [59.9, 1092.0], [60.0, 1094.0], [60.1, 1096.0], [60.2, 1098.0], [60.3, 1100.0], [60.4, 1102.0], [60.5, 1104.0], [60.6, 1106.0], [60.7, 1108.0], [60.8, 1112.0], [60.9, 1115.0], [61.0, 1117.0], [61.1, 1119.0], [61.2, 1121.0], [61.3, 1122.0], [61.4, 1124.0], [61.5, 1130.0], [61.6, 1133.0], [61.7, 1137.0], [61.8, 1141.0], [61.9, 1145.0], [62.0, 1146.0], [62.1, 1148.0], [62.2, 1150.0], [62.3, 1156.0], [62.4, 1160.0], [62.5, 1162.0], [62.6, 1165.0], [62.7, 1166.0], [62.8, 1169.0], [62.9, 1170.0], [63.0, 1172.0], [63.1, 1174.0], [63.2, 1176.0], [63.3, 1178.0], [63.4, 1181.0], [63.5, 1183.0], [63.6, 1185.0], [63.7, 1187.0], [63.8, 1189.0], [63.9, 1191.0], [64.0, 1192.0], [64.1, 1194.0], [64.2, 1196.0], [64.3, 1199.0], [64.4, 1200.0], [64.5, 1203.0], [64.6, 1206.0], [64.7, 1208.0], [64.8, 1210.0], [64.9, 1212.0], [65.0, 1213.0], [65.1, 1215.0], [65.2, 1216.0], [65.3, 1218.0], [65.4, 1219.0], [65.5, 1224.0], [65.6, 1226.0], [65.7, 1227.0], [65.8, 1230.0], [65.9, 1234.0], [66.0, 1236.0], [66.1, 1240.0], [66.2, 1241.0], [66.3, 1242.0], [66.4, 1245.0], [66.5, 1246.0], [66.6, 1249.0], [66.7, 1250.0], [66.8, 1251.0], [66.9, 1253.0], [67.0, 1257.0], [67.1, 1260.0], [67.2, 1263.0], [67.3, 1265.0], [67.4, 1267.0], [67.5, 1268.0], [67.6, 1269.0], [67.7, 1271.0], [67.8, 1274.0], [67.9, 1276.0], [68.0, 1279.0], [68.1, 1280.0], [68.2, 1283.0], [68.3, 1285.0], [68.4, 1287.0], [68.5, 1289.0], [68.6, 1294.0], [68.7, 1296.0], [68.8, 1301.0], [68.9, 1301.0], [69.0, 1303.0], [69.1, 1305.0], [69.2, 1307.0], [69.3, 1309.0], [69.4, 1311.0], [69.5, 1312.0], [69.6, 1315.0], [69.7, 1318.0], [69.8, 1321.0], [69.9, 1324.0], [70.0, 1326.0], [70.1, 1328.0], [70.2, 1333.0], [70.3, 1335.0], [70.4, 1337.0], [70.5, 1341.0], [70.6, 1343.0], [70.7, 1349.0], [70.8, 1351.0], [70.9, 1355.0], [71.0, 1356.0], [71.1, 1359.0], [71.2, 1364.0], [71.3, 1365.0], [71.4, 1370.0], [71.5, 1374.0], [71.6, 1376.0], [71.7, 1377.0], [71.8, 1379.0], [71.9, 1381.0], [72.0, 1384.0], [72.1, 1386.0], [72.2, 1387.0], [72.3, 1389.0], [72.4, 1393.0], [72.5, 1394.0], [72.6, 1397.0], [72.7, 1398.0], [72.8, 1401.0], [72.9, 1403.0], [73.0, 1405.0], [73.1, 1407.0], [73.2, 1409.0], [73.3, 1411.0], [73.4, 1413.0], [73.5, 1414.0], [73.6, 1416.0], [73.7, 1419.0], [73.8, 1420.0], [73.9, 1424.0], [74.0, 1426.0], [74.1, 1428.0], [74.2, 1431.0], [74.3, 1435.0], [74.4, 1436.0], [74.5, 1439.0], [74.6, 1444.0], [74.7, 1445.0], [74.8, 1448.0], [74.9, 1451.0], [75.0, 1456.0], [75.1, 1459.0], [75.2, 1461.0], [75.3, 1463.0], [75.4, 1465.0], [75.5, 1468.0], [75.6, 1471.0], [75.7, 1473.0], [75.8, 1475.0], [75.9, 1479.0], [76.0, 1481.0], [76.1, 1482.0], [76.2, 1484.0], [76.3, 1486.0], [76.4, 1488.0], [76.5, 1490.0], [76.6, 1492.0], [76.7, 1496.0], [76.8, 1498.0], [76.9, 1501.0], [77.0, 1503.0], [77.1, 1505.0], [77.2, 1507.0], [77.3, 1509.0], [77.4, 1515.0], [77.5, 1519.0], [77.6, 1520.0], [77.7, 1522.0], [77.8, 1524.0], [77.9, 1527.0], [78.0, 1530.0], [78.1, 1533.0], [78.2, 1535.0], [78.3, 1536.0], [78.4, 1538.0], [78.5, 1540.0], [78.6, 1543.0], [78.7, 1546.0], [78.8, 1548.0], [78.9, 1551.0], [79.0, 1553.0], [79.1, 1557.0], [79.2, 1560.0], [79.3, 1562.0], [79.4, 1564.0], [79.5, 1566.0], [79.6, 1568.0], [79.7, 1569.0], [79.8, 1571.0], [79.9, 1573.0], [80.0, 1574.0], [80.1, 1577.0], [80.2, 1580.0], [80.3, 1580.0], [80.4, 1582.0], [80.5, 1585.0], [80.6, 1586.0], [80.7, 1588.0], [80.8, 1590.0], [80.9, 1591.0], [81.0, 1591.0], [81.1, 1594.0], [81.2, 1596.0], [81.3, 1598.0], [81.4, 1602.0], [81.5, 1604.0], [81.6, 1606.0], [81.7, 1611.0], [81.8, 1612.0], [81.9, 1615.0], [82.0, 1617.0], [82.1, 1619.0], [82.2, 1626.0], [82.3, 1630.0], [82.4, 1631.0], [82.5, 1636.0], [82.6, 1637.0], [82.7, 1641.0], [82.8, 1645.0], [82.9, 1648.0], [83.0, 1650.0], [83.1, 1651.0], [83.2, 1655.0], [83.3, 1658.0], [83.4, 1664.0], [83.5, 1666.0], [83.6, 1670.0], [83.7, 1672.0], [83.8, 1676.0], [83.9, 1678.0], [84.0, 1681.0], [84.1, 1682.0], [84.2, 1685.0], [84.3, 1689.0], [84.4, 1692.0], [84.5, 1700.0], [84.6, 1703.0], [84.7, 1706.0], [84.8, 1710.0], [84.9, 1713.0], [85.0, 1714.0], [85.1, 1716.0], [85.2, 1721.0], [85.3, 1722.0], [85.4, 1726.0], [85.5, 1730.0], [85.6, 1732.0], [85.7, 1737.0], [85.8, 1740.0], [85.9, 1745.0], [86.0, 1749.0], [86.1, 1752.0], [86.2, 1755.0], [86.3, 1761.0], [86.4, 1767.0], [86.5, 1772.0], [86.6, 1776.0], [86.7, 1778.0], [86.8, 1783.0], [86.9, 1788.0], [87.0, 1793.0], [87.1, 1797.0], [87.2, 1799.0], [87.3, 1803.0], [87.4, 1806.0], [87.5, 1809.0], [87.6, 1812.0], [87.7, 1816.0], [87.8, 1821.0], [87.9, 1826.0], [88.0, 1831.0], [88.1, 1837.0], [88.2, 1839.0], [88.3, 1846.0], [88.4, 1850.0], [88.5, 1854.0], [88.6, 1855.0], [88.7, 1859.0], [88.8, 1864.0], [88.9, 1868.0], [89.0, 1873.0], [89.1, 1881.0], [89.2, 1883.0], [89.3, 1890.0], [89.4, 1898.0], [89.5, 1903.0], [89.6, 1907.0], [89.7, 1915.0], [89.8, 1919.0], [89.9, 1928.0], [90.0, 1933.0], [90.1, 1941.0], [90.2, 1944.0], [90.3, 1948.0], [90.4, 1963.0], [90.5, 1970.0], [90.6, 1974.0], [90.7, 1981.0], [90.8, 1986.0], [90.9, 1991.0], [91.0, 1997.0], [91.1, 2001.0], [91.2, 2009.0], [91.3, 2013.0], [91.4, 2023.0], [91.5, 2034.0], [91.6, 2040.0], [91.7, 2047.0], [91.8, 2053.0], [91.9, 2066.0], [92.0, 2072.0], [92.1, 2081.0], [92.2, 2089.0], [92.3, 2098.0], [92.4, 2104.0], [92.5, 2111.0], [92.6, 2132.0], [92.7, 2146.0], [92.8, 2160.0], [92.9, 2168.0], [93.0, 2174.0], [93.1, 2193.0], [93.2, 2197.0], [93.3, 2207.0], [93.4, 2219.0], [93.5, 2248.0], [93.6, 2255.0], [93.7, 2265.0], [93.8, 2270.0], [93.9, 2286.0], [94.0, 2298.0], [94.1, 2302.0], [94.2, 2312.0], [94.3, 2324.0], [94.4, 2331.0], [94.5, 2343.0], [94.6, 2348.0], [94.7, 2366.0], [94.8, 2385.0], [94.9, 2407.0], [95.0, 2417.0], [95.1, 2431.0], [95.2, 2437.0], [95.3, 2451.0], [95.4, 2456.0], [95.5, 2467.0], [95.6, 2475.0], [95.7, 2483.0], [95.8, 2487.0], [95.9, 2507.0], [96.0, 2513.0], [96.1, 2534.0], [96.2, 2549.0], [96.3, 2559.0], [96.4, 2577.0], [96.5, 2593.0], [96.6, 2626.0], [96.7, 2632.0], [96.8, 2641.0], [96.9, 2673.0], [97.0, 2716.0], [97.1, 2725.0], [97.2, 2754.0], [97.3, 2775.0], [97.4, 2801.0], [97.5, 2859.0], [97.6, 2875.0], [97.7, 2896.0], [97.8, 2921.0], [97.9, 2945.0], [98.0, 2964.0], [98.1, 2999.0], [98.2, 3035.0], [98.3, 3058.0], [98.4, 3086.0], [98.5, 3103.0], [98.6, 3145.0], [98.7, 3201.0], [98.8, 3289.0], [98.9, 3401.0], [99.0, 3529.0], [99.1, 3620.0], [99.2, 3704.0], [99.3, 3806.0], [99.4, 3874.0], [99.5, 4150.0], [99.6, 4541.0], [99.7, 4718.0], [99.8, 5053.0], [99.9, 5667.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 509.0, "series": [{"data": [[600.0, 409.0], [700.0, 263.0], [800.0, 243.0], [900.0, 236.0], [1000.0, 227.0], [1100.0, 213.0], [1200.0, 228.0], [1300.0, 206.0], [1400.0, 213.0], [1500.0, 234.0], [1600.0, 164.0], [1700.0, 142.0], [1800.0, 114.0], [1900.0, 85.0], [2000.0, 67.0], [2100.0, 46.0], [2300.0, 44.0], [2200.0, 41.0], [2400.0, 50.0], [2500.0, 35.0], [2600.0, 25.0], [2700.0, 20.0], [2800.0, 19.0], [2900.0, 19.0], [3000.0, 20.0], [3100.0, 10.0], [3300.0, 4.0], [3200.0, 6.0], [3400.0, 3.0], [3500.0, 6.0], [3600.0, 7.0], [3700.0, 5.0], [3800.0, 7.0], [3900.0, 2.0], [4000.0, 2.0], [4200.0, 4.0], [4100.0, 1.0], [4500.0, 4.0], [4700.0, 3.0], [4800.0, 3.0], [5000.0, 1.0], [5200.0, 1.0], [5500.0, 1.0], [5400.0, 2.0], [5600.0, 1.0], [5700.0, 1.0], [5900.0, 1.0], [6400.0, 1.0], [6700.0, 1.0], [6900.0, 1.0], [100.0, 82.0], [200.0, 380.0], [300.0, 411.0], [400.0, 509.0], [500.0, 368.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2603.0, "series": [{"data": [[0.0, 1387.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2603.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1200.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.352941176470588, "minX": 1.60224864E12, "maxY": 10.0, "series": [{"data": [[1.60224864E12, 10.0], [1.60224912E12, 10.0], [1.60224882E12, 10.0], [1.602249E12, 10.0], [1.6022487E12, 10.0], [1.60224918E12, 7.352941176470588], [1.60224888E12, 10.0], [1.60224906E12, 10.0], [1.60224876E12, 10.0], [1.60224894E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224918E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 299.0, "minX": 1.0, "maxY": 3230.0, "series": [{"data": [[8.0, 1286.0], [4.0, 967.0], [2.0, 3230.0], [1.0, 3184.0], [9.0, 619.0], [10.0, 1046.0291393284438], [5.0, 1677.0], [6.0, 947.0], [3.0, 1839.0], [7.0, 299.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 1046.9217877094961]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 132.33333333333334, "minX": 1.60224864E12, "maxY": 3311457.35, "series": [{"data": [[1.60224864E12, 2803501.2333333334], [1.60224912E12, 2391045.2], [1.60224882E12, 2764603.933333333], [1.602249E12, 2860781.966666667], [1.6022487E12, 2298323.8666666667], [1.60224918E12, 107464.68333333333], [1.60224888E12, 2552344.816666667], [1.60224906E12, 2704802.3833333333], [1.60224876E12, 3311457.35], [1.60224894E12, 2177735.566666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224864E12, 3931.3], [1.60224912E12, 4321.983333333334], [1.60224882E12, 4597.716666666666], [1.602249E12, 4446.666666666667], [1.6022487E12, 4541.816666666667], [1.60224918E12, 132.33333333333334], [1.60224888E12, 3487.5], [1.60224906E12, 4765.066666666667], [1.60224876E12, 4616.833333333333], [1.60224894E12, 3742.8333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224918E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 956.3391719745221, "minX": 1.60224864E12, "maxY": 1295.2352941176473, "series": [{"data": [[1.60224864E12, 1126.0165137614688], [1.60224912E12, 1046.6579406631763], [1.60224882E12, 992.7364085667225], [1.602249E12, 1004.3522537562603], [1.6022487E12, 970.5476575121172], [1.60224918E12, 1295.2352941176473], [1.60224888E12, 1263.345991561182], [1.60224906E12, 956.3391719745221], [1.60224876E12, 983.0459770114938], [1.60224894E12, 1146.325]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224918E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 954.8089171974517, "minX": 1.60224864E12, "maxY": 1293.0, "series": [{"data": [[1.60224864E12, 1123.974311926606], [1.60224912E12, 1045.1396160558468], [1.60224882E12, 990.8352553542005], [1.602249E12, 1002.6477462437396], [1.6022487E12, 968.9644588045232], [1.60224918E12, 1293.0], [1.60224888E12, 1261.0780590717309], [1.60224906E12, 954.8089171974517], [1.60224876E12, 980.755336617406], [1.60224894E12, 1144.6692307692324]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224918E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60224864E12, "maxY": 0.1999999999999996, "series": [{"data": [[1.60224864E12, 0.1999999999999996], [1.60224912E12, 0.01570680628272252], [1.60224882E12, 0.014827018121911043], [1.602249E12, 0.020033388981636056], [1.6022487E12, 0.01615508885298869], [1.60224918E12, 0.0], [1.60224888E12, 0.029535864978902943], [1.60224906E12, 0.019108280254777066], [1.60224876E12, 0.014778325123152716], [1.60224894E12, 0.021153846153846145]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224918E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 177.0, "minX": 1.60224864E12, "maxY": 6924.0, "series": [{"data": [[1.60224864E12, 5920.0], [1.60224912E12, 4242.0], [1.60224882E12, 5438.0], [1.602249E12, 3067.0], [1.6022487E12, 4555.0], [1.60224918E12, 3230.0], [1.60224888E12, 6781.0], [1.60224906E12, 3529.0], [1.60224876E12, 3874.0], [1.60224894E12, 6924.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224864E12, 217.48399921894074], [1.60224912E12, 186.33199972629546], [1.60224882E12, 190.92599971055984], [1.602249E12, 201.0], [1.6022487E12, 190.0], [1.60224918E12, 299.0], [1.60224888E12, 218.0999995470047], [1.60224906E12, 195.66099985003473], [1.60224876E12, 189.48999985456467], [1.60224894E12, 226.06699962735175]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224864E12, 218.81080010414124], [1.60224912E12, 187.3652001094818], [1.60224882E12, 192.0], [1.602249E12, 201.0], [1.6022487E12, 190.13800005912782], [1.60224918E12, 299.0], [1.60224888E12, 219.81000018119812], [1.60224906E12, 196.45420011997223], [1.60224876E12, 190.03900005817414], [1.60224894E12, 227.78950024843215]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224864E12, 218.37399986982345], [1.60224912E12, 186.90599986314774], [1.60224882E12, 191.5329998552799], [1.602249E12, 201.0], [1.6022487E12, 190.0], [1.60224918E12, 299.0], [1.60224888E12, 219.04999977350235], [1.60224906E12, 195.97549992501735], [1.60224876E12, 189.79499992728233], [1.60224894E12, 226.8484998136759]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224864E12, 194.0], [1.60224912E12, 179.0], [1.60224882E12, 184.0], [1.602249E12, 195.0], [1.6022487E12, 177.0], [1.60224918E12, 299.0], [1.60224888E12, 199.0], [1.60224906E12, 181.0], [1.60224876E12, 182.0], [1.60224894E12, 209.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224864E12, 966.0], [1.60224912E12, 834.0], [1.60224882E12, 834.0], [1.602249E12, 732.0], [1.6022487E12, 738.0], [1.60224918E12, 990.0], [1.60224888E12, 1129.5], [1.60224906E12, 802.0], [1.60224876E12, 689.0], [1.60224894E12, 961.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224918E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 414.0, "minX": 1.0, "maxY": 2632.5, "series": [{"data": [[2.0, 2632.5], [3.0, 1515.0], [4.0, 1466.0], [5.0, 1398.0], [6.0, 1269.0], [7.0, 1226.0], [8.0, 1077.0], [9.0, 1047.0], [10.0, 977.5], [11.0, 934.0], [12.0, 875.5], [13.0, 737.0], [14.0, 602.5], [15.0, 543.5], [16.0, 535.0], [1.0, 2501.0], [17.0, 448.0], [18.0, 441.5], [19.0, 445.0], [20.0, 443.0], [21.0, 453.0], [22.0, 448.5], [23.0, 481.0], [25.0, 437.0], [26.0, 442.0], [27.0, 414.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1102.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 414.0, "minX": 1.0, "maxY": 2627.5, "series": [{"data": [[2.0, 2627.5], [3.0, 1508.0], [4.0, 1463.5], [5.0, 1395.0], [6.0, 1266.0], [7.0, 1224.5], [8.0, 1076.0], [9.0, 1042.0], [10.0, 976.0], [11.0, 933.0], [12.0, 875.5], [13.0, 735.0], [14.0, 602.5], [15.0, 543.5], [16.0, 535.0], [1.0, 2498.0], [17.0, 448.0], [18.0, 441.5], [19.0, 445.0], [20.0, 443.0], [21.0, 453.0], [22.0, 448.5], [23.0, 481.0], [25.0, 437.0], [26.0, 442.0], [27.0, 414.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1102.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.60224858E12, "maxY": 10.466666666666667, "series": [{"data": [[1.60224864E12, 9.083333333333334], [1.60224912E12, 9.55], [1.60224882E12, 10.116666666666667], [1.602249E12, 9.983333333333333], [1.6022487E12, 10.316666666666666], [1.60224918E12, 0.11666666666666667], [1.60224888E12, 7.9], [1.60224858E12, 0.16666666666666666], [1.60224906E12, 10.466666666666667], [1.60224876E12, 10.15], [1.60224894E12, 8.666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224918E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60224864E12, "maxY": 10.466666666666667, "series": [{"data": [[1.60224864E12, 9.083333333333334], [1.60224912E12, 9.55], [1.60224882E12, 10.1], [1.602249E12, 9.983333333333333], [1.6022487E12, 10.316666666666666], [1.60224918E12, 0.2833333333333333], [1.60224888E12, 7.9], [1.60224906E12, 10.466666666666667], [1.60224876E12, 10.15], [1.60224894E12, 8.666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60224882E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224918E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60224864E12, "maxY": 10.466666666666667, "series": [{"data": [[1.60224864E12, 9.083333333333334], [1.60224912E12, 9.55], [1.60224882E12, 10.1], [1.602249E12, 9.983333333333333], [1.6022487E12, 10.316666666666666], [1.60224918E12, 0.2833333333333333], [1.60224888E12, 7.9], [1.60224906E12, 10.466666666666667], [1.60224876E12, 10.15], [1.60224894E12, 8.666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60224882E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224918E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60224864E12, "maxY": 10.466666666666667, "series": [{"data": [[1.60224864E12, 9.083333333333334], [1.60224912E12, 9.55], [1.60224882E12, 10.1], [1.602249E12, 9.983333333333333], [1.6022487E12, 10.316666666666666], [1.60224918E12, 0.2833333333333333], [1.60224888E12, 7.9], [1.60224906E12, 10.466666666666667], [1.60224876E12, 10.15], [1.60224894E12, 8.666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60224882E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224918E12, "title": "Total Transactions Per Second"}},
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

