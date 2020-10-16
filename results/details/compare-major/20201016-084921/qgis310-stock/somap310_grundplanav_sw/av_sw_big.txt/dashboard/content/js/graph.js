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
        data: {"result": {"minY": 181.0, "minX": 0.0, "maxY": 6909.0, "series": [{"data": [[0.0, 181.0], [0.1, 193.0], [0.2, 197.0], [0.3, 199.0], [0.4, 201.0], [0.5, 202.0], [0.6, 207.0], [0.7, 208.0], [0.8, 210.0], [0.9, 212.0], [1.0, 213.0], [1.1, 214.0], [1.2, 215.0], [1.3, 216.0], [1.4, 217.0], [1.5, 218.0], [1.6, 219.0], [1.7, 220.0], [1.8, 220.0], [1.9, 221.0], [2.0, 222.0], [2.1, 223.0], [2.2, 224.0], [2.3, 224.0], [2.4, 225.0], [2.5, 225.0], [2.6, 226.0], [2.7, 227.0], [2.8, 227.0], [2.9, 228.0], [3.0, 229.0], [3.1, 229.0], [3.2, 230.0], [3.3, 230.0], [3.4, 231.0], [3.5, 231.0], [3.6, 231.0], [3.7, 232.0], [3.8, 233.0], [3.9, 234.0], [4.0, 235.0], [4.1, 235.0], [4.2, 235.0], [4.3, 236.0], [4.4, 237.0], [4.5, 237.0], [4.6, 238.0], [4.7, 238.0], [4.8, 240.0], [4.9, 240.0], [5.0, 241.0], [5.1, 242.0], [5.2, 242.0], [5.3, 244.0], [5.4, 244.0], [5.5, 245.0], [5.6, 246.0], [5.7, 248.0], [5.8, 249.0], [5.9, 250.0], [6.0, 251.0], [6.1, 253.0], [6.2, 254.0], [6.3, 255.0], [6.4, 261.0], [6.5, 261.0], [6.6, 262.0], [6.7, 264.0], [6.8, 268.0], [6.9, 272.0], [7.0, 275.0], [7.1, 276.0], [7.2, 277.0], [7.3, 281.0], [7.4, 282.0], [7.5, 285.0], [7.6, 289.0], [7.7, 290.0], [7.8, 293.0], [7.9, 295.0], [8.0, 297.0], [8.1, 299.0], [8.2, 300.0], [8.3, 302.0], [8.4, 304.0], [8.5, 306.0], [8.6, 306.0], [8.7, 308.0], [8.8, 308.0], [8.9, 311.0], [9.0, 312.0], [9.1, 313.0], [9.2, 313.0], [9.3, 313.0], [9.4, 314.0], [9.5, 315.0], [9.6, 316.0], [9.7, 317.0], [9.8, 318.0], [9.9, 318.0], [10.0, 319.0], [10.1, 320.0], [10.2, 321.0], [10.3, 321.0], [10.4, 322.0], [10.5, 322.0], [10.6, 323.0], [10.7, 324.0], [10.8, 324.0], [10.9, 325.0], [11.0, 325.0], [11.1, 326.0], [11.2, 326.0], [11.3, 328.0], [11.4, 329.0], [11.5, 330.0], [11.6, 331.0], [11.7, 332.0], [11.8, 333.0], [11.9, 334.0], [12.0, 335.0], [12.1, 336.0], [12.2, 337.0], [12.3, 339.0], [12.4, 341.0], [12.5, 342.0], [12.6, 345.0], [12.7, 347.0], [12.8, 348.0], [12.9, 349.0], [13.0, 350.0], [13.1, 351.0], [13.2, 354.0], [13.3, 355.0], [13.4, 357.0], [13.5, 358.0], [13.6, 359.0], [13.7, 360.0], [13.8, 361.0], [13.9, 363.0], [14.0, 366.0], [14.1, 367.0], [14.2, 368.0], [14.3, 370.0], [14.4, 370.0], [14.5, 372.0], [14.6, 374.0], [14.7, 376.0], [14.8, 377.0], [14.9, 380.0], [15.0, 382.0], [15.1, 383.0], [15.2, 385.0], [15.3, 386.0], [15.4, 387.0], [15.5, 388.0], [15.6, 390.0], [15.7, 391.0], [15.8, 392.0], [15.9, 393.0], [16.0, 394.0], [16.1, 395.0], [16.2, 395.0], [16.3, 396.0], [16.4, 398.0], [16.5, 399.0], [16.6, 401.0], [16.7, 402.0], [16.8, 403.0], [16.9, 404.0], [17.0, 405.0], [17.1, 406.0], [17.2, 408.0], [17.3, 410.0], [17.4, 411.0], [17.5, 413.0], [17.6, 414.0], [17.7, 415.0], [17.8, 416.0], [17.9, 417.0], [18.0, 418.0], [18.1, 420.0], [18.2, 421.0], [18.3, 422.0], [18.4, 423.0], [18.5, 423.0], [18.6, 425.0], [18.7, 425.0], [18.8, 427.0], [18.9, 427.0], [19.0, 428.0], [19.1, 429.0], [19.2, 430.0], [19.3, 430.0], [19.4, 431.0], [19.5, 432.0], [19.6, 433.0], [19.7, 433.0], [19.8, 434.0], [19.9, 435.0], [20.0, 437.0], [20.1, 438.0], [20.2, 439.0], [20.3, 440.0], [20.4, 441.0], [20.5, 443.0], [20.6, 444.0], [20.7, 445.0], [20.8, 446.0], [20.9, 446.0], [21.0, 447.0], [21.1, 448.0], [21.2, 450.0], [21.3, 450.0], [21.4, 451.0], [21.5, 452.0], [21.6, 453.0], [21.7, 454.0], [21.8, 455.0], [21.9, 456.0], [22.0, 456.0], [22.1, 457.0], [22.2, 458.0], [22.3, 459.0], [22.4, 460.0], [22.5, 461.0], [22.6, 461.0], [22.7, 462.0], [22.8, 464.0], [22.9, 464.0], [23.0, 466.0], [23.1, 467.0], [23.2, 468.0], [23.3, 469.0], [23.4, 469.0], [23.5, 470.0], [23.6, 471.0], [23.7, 472.0], [23.8, 473.0], [23.9, 474.0], [24.0, 474.0], [24.1, 476.0], [24.2, 477.0], [24.3, 479.0], [24.4, 480.0], [24.5, 481.0], [24.6, 482.0], [24.7, 482.0], [24.8, 484.0], [24.9, 484.0], [25.0, 485.0], [25.1, 486.0], [25.2, 487.0], [25.3, 488.0], [25.4, 488.0], [25.5, 489.0], [25.6, 490.0], [25.7, 493.0], [25.8, 493.0], [25.9, 494.0], [26.0, 496.0], [26.1, 497.0], [26.2, 498.0], [26.3, 499.0], [26.4, 501.0], [26.5, 502.0], [26.6, 503.0], [26.7, 505.0], [26.8, 505.0], [26.9, 506.0], [27.0, 508.0], [27.1, 511.0], [27.2, 513.0], [27.3, 514.0], [27.4, 515.0], [27.5, 517.0], [27.6, 518.0], [27.7, 520.0], [27.8, 521.0], [27.9, 523.0], [28.0, 524.0], [28.1, 524.0], [28.2, 526.0], [28.3, 527.0], [28.4, 528.0], [28.5, 529.0], [28.6, 530.0], [28.7, 532.0], [28.8, 533.0], [28.9, 535.0], [29.0, 537.0], [29.1, 539.0], [29.2, 540.0], [29.3, 541.0], [29.4, 542.0], [29.5, 543.0], [29.6, 545.0], [29.7, 546.0], [29.8, 547.0], [29.9, 548.0], [30.0, 550.0], [30.1, 551.0], [30.2, 552.0], [30.3, 553.0], [30.4, 554.0], [30.5, 555.0], [30.6, 556.0], [30.7, 559.0], [30.8, 560.0], [30.9, 561.0], [31.0, 561.0], [31.1, 562.0], [31.2, 562.0], [31.3, 563.0], [31.4, 564.0], [31.5, 567.0], [31.6, 568.0], [31.7, 569.0], [31.8, 571.0], [31.9, 571.0], [32.0, 572.0], [32.1, 573.0], [32.2, 575.0], [32.3, 577.0], [32.4, 578.0], [32.5, 581.0], [32.6, 581.0], [32.7, 583.0], [32.8, 586.0], [32.9, 587.0], [33.0, 588.0], [33.1, 589.0], [33.2, 592.0], [33.3, 594.0], [33.4, 595.0], [33.5, 596.0], [33.6, 597.0], [33.7, 598.0], [33.8, 600.0], [33.9, 602.0], [34.0, 604.0], [34.1, 605.0], [34.2, 607.0], [34.3, 610.0], [34.4, 610.0], [34.5, 611.0], [34.6, 612.0], [34.7, 613.0], [34.8, 615.0], [34.9, 616.0], [35.0, 619.0], [35.1, 619.0], [35.2, 619.0], [35.3, 622.0], [35.4, 623.0], [35.5, 624.0], [35.6, 625.0], [35.7, 626.0], [35.8, 627.0], [35.9, 628.0], [36.0, 629.0], [36.1, 631.0], [36.2, 632.0], [36.3, 634.0], [36.4, 635.0], [36.5, 636.0], [36.6, 638.0], [36.7, 640.0], [36.8, 641.0], [36.9, 642.0], [37.0, 643.0], [37.1, 644.0], [37.2, 646.0], [37.3, 646.0], [37.4, 648.0], [37.5, 649.0], [37.6, 651.0], [37.7, 651.0], [37.8, 652.0], [37.9, 653.0], [38.0, 655.0], [38.1, 657.0], [38.2, 659.0], [38.3, 660.0], [38.4, 660.0], [38.5, 664.0], [38.6, 664.0], [38.7, 665.0], [38.8, 667.0], [38.9, 670.0], [39.0, 671.0], [39.1, 672.0], [39.2, 674.0], [39.3, 675.0], [39.4, 676.0], [39.5, 678.0], [39.6, 678.0], [39.7, 681.0], [39.8, 682.0], [39.9, 683.0], [40.0, 684.0], [40.1, 685.0], [40.2, 685.0], [40.3, 686.0], [40.4, 687.0], [40.5, 688.0], [40.6, 689.0], [40.7, 690.0], [40.8, 691.0], [40.9, 692.0], [41.0, 694.0], [41.1, 696.0], [41.2, 697.0], [41.3, 698.0], [41.4, 699.0], [41.5, 701.0], [41.6, 704.0], [41.7, 705.0], [41.8, 706.0], [41.9, 707.0], [42.0, 709.0], [42.1, 709.0], [42.2, 710.0], [42.3, 713.0], [42.4, 714.0], [42.5, 715.0], [42.6, 718.0], [42.7, 720.0], [42.8, 722.0], [42.9, 723.0], [43.0, 726.0], [43.1, 728.0], [43.2, 729.0], [43.3, 730.0], [43.4, 732.0], [43.5, 734.0], [43.6, 736.0], [43.7, 739.0], [43.8, 740.0], [43.9, 743.0], [44.0, 744.0], [44.1, 747.0], [44.2, 749.0], [44.3, 751.0], [44.4, 752.0], [44.5, 754.0], [44.6, 755.0], [44.7, 756.0], [44.8, 757.0], [44.9, 759.0], [45.0, 760.0], [45.1, 762.0], [45.2, 763.0], [45.3, 765.0], [45.4, 768.0], [45.5, 769.0], [45.6, 770.0], [45.7, 772.0], [45.8, 775.0], [45.9, 776.0], [46.0, 779.0], [46.1, 781.0], [46.2, 783.0], [46.3, 786.0], [46.4, 790.0], [46.5, 793.0], [46.6, 795.0], [46.7, 797.0], [46.8, 799.0], [46.9, 801.0], [47.0, 803.0], [47.1, 807.0], [47.2, 809.0], [47.3, 811.0], [47.4, 813.0], [47.5, 816.0], [47.6, 817.0], [47.7, 821.0], [47.8, 824.0], [47.9, 827.0], [48.0, 829.0], [48.1, 832.0], [48.2, 834.0], [48.3, 837.0], [48.4, 841.0], [48.5, 843.0], [48.6, 844.0], [48.7, 848.0], [48.8, 850.0], [48.9, 850.0], [49.0, 852.0], [49.1, 856.0], [49.2, 858.0], [49.3, 859.0], [49.4, 862.0], [49.5, 864.0], [49.6, 867.0], [49.7, 870.0], [49.8, 873.0], [49.9, 876.0], [50.0, 878.0], [50.1, 880.0], [50.2, 883.0], [50.3, 885.0], [50.4, 886.0], [50.5, 888.0], [50.6, 891.0], [50.7, 893.0], [50.8, 896.0], [50.9, 898.0], [51.0, 899.0], [51.1, 903.0], [51.2, 906.0], [51.3, 907.0], [51.4, 909.0], [51.5, 912.0], [51.6, 914.0], [51.7, 917.0], [51.8, 918.0], [51.9, 922.0], [52.0, 925.0], [52.1, 927.0], [52.2, 929.0], [52.3, 931.0], [52.4, 932.0], [52.5, 934.0], [52.6, 936.0], [52.7, 939.0], [52.8, 940.0], [52.9, 943.0], [53.0, 946.0], [53.1, 948.0], [53.2, 949.0], [53.3, 952.0], [53.4, 954.0], [53.5, 957.0], [53.6, 958.0], [53.7, 961.0], [53.8, 965.0], [53.9, 967.0], [54.0, 968.0], [54.1, 969.0], [54.2, 971.0], [54.3, 972.0], [54.4, 973.0], [54.5, 979.0], [54.6, 981.0], [54.7, 984.0], [54.8, 987.0], [54.9, 988.0], [55.0, 990.0], [55.1, 992.0], [55.2, 995.0], [55.3, 997.0], [55.4, 998.0], [55.5, 1000.0], [55.6, 1005.0], [55.7, 1007.0], [55.8, 1012.0], [55.9, 1014.0], [56.0, 1018.0], [56.1, 1019.0], [56.2, 1020.0], [56.3, 1023.0], [56.4, 1024.0], [56.5, 1026.0], [56.6, 1027.0], [56.7, 1029.0], [56.8, 1030.0], [56.9, 1032.0], [57.0, 1034.0], [57.1, 1035.0], [57.2, 1039.0], [57.3, 1040.0], [57.4, 1042.0], [57.5, 1044.0], [57.6, 1045.0], [57.7, 1047.0], [57.8, 1049.0], [57.9, 1053.0], [58.0, 1055.0], [58.1, 1056.0], [58.2, 1058.0], [58.3, 1061.0], [58.4, 1063.0], [58.5, 1065.0], [58.6, 1068.0], [58.7, 1070.0], [58.8, 1073.0], [58.9, 1075.0], [59.0, 1077.0], [59.1, 1079.0], [59.2, 1080.0], [59.3, 1083.0], [59.4, 1085.0], [59.5, 1087.0], [59.6, 1088.0], [59.7, 1091.0], [59.8, 1094.0], [59.9, 1095.0], [60.0, 1096.0], [60.1, 1099.0], [60.2, 1101.0], [60.3, 1102.0], [60.4, 1103.0], [60.5, 1104.0], [60.6, 1106.0], [60.7, 1107.0], [60.8, 1108.0], [60.9, 1110.0], [61.0, 1114.0], [61.1, 1116.0], [61.2, 1119.0], [61.3, 1122.0], [61.4, 1123.0], [61.5, 1125.0], [61.6, 1129.0], [61.7, 1130.0], [61.8, 1132.0], [61.9, 1133.0], [62.0, 1136.0], [62.1, 1139.0], [62.2, 1141.0], [62.3, 1143.0], [62.4, 1145.0], [62.5, 1146.0], [62.6, 1147.0], [62.7, 1150.0], [62.8, 1151.0], [62.9, 1153.0], [63.0, 1154.0], [63.1, 1157.0], [63.2, 1158.0], [63.3, 1159.0], [63.4, 1164.0], [63.5, 1165.0], [63.6, 1168.0], [63.7, 1170.0], [63.8, 1171.0], [63.9, 1173.0], [64.0, 1178.0], [64.1, 1181.0], [64.2, 1183.0], [64.3, 1185.0], [64.4, 1188.0], [64.5, 1190.0], [64.6, 1192.0], [64.7, 1193.0], [64.8, 1200.0], [64.9, 1203.0], [65.0, 1204.0], [65.1, 1207.0], [65.2, 1209.0], [65.3, 1211.0], [65.4, 1214.0], [65.5, 1217.0], [65.6, 1220.0], [65.7, 1221.0], [65.8, 1223.0], [65.9, 1226.0], [66.0, 1228.0], [66.1, 1229.0], [66.2, 1233.0], [66.3, 1234.0], [66.4, 1237.0], [66.5, 1239.0], [66.6, 1241.0], [66.7, 1245.0], [66.8, 1247.0], [66.9, 1249.0], [67.0, 1251.0], [67.1, 1253.0], [67.2, 1257.0], [67.3, 1260.0], [67.4, 1263.0], [67.5, 1265.0], [67.6, 1269.0], [67.7, 1271.0], [67.8, 1272.0], [67.9, 1274.0], [68.0, 1276.0], [68.1, 1279.0], [68.2, 1281.0], [68.3, 1284.0], [68.4, 1285.0], [68.5, 1286.0], [68.6, 1291.0], [68.7, 1293.0], [68.8, 1296.0], [68.9, 1298.0], [69.0, 1300.0], [69.1, 1301.0], [69.2, 1302.0], [69.3, 1305.0], [69.4, 1307.0], [69.5, 1309.0], [69.6, 1312.0], [69.7, 1315.0], [69.8, 1317.0], [69.9, 1323.0], [70.0, 1328.0], [70.1, 1330.0], [70.2, 1332.0], [70.3, 1338.0], [70.4, 1340.0], [70.5, 1344.0], [70.6, 1346.0], [70.7, 1349.0], [70.8, 1352.0], [70.9, 1354.0], [71.0, 1356.0], [71.1, 1358.0], [71.2, 1362.0], [71.3, 1363.0], [71.4, 1364.0], [71.5, 1366.0], [71.6, 1369.0], [71.7, 1371.0], [71.8, 1374.0], [71.9, 1376.0], [72.0, 1378.0], [72.1, 1381.0], [72.2, 1384.0], [72.3, 1388.0], [72.4, 1389.0], [72.5, 1392.0], [72.6, 1393.0], [72.7, 1396.0], [72.8, 1398.0], [72.9, 1400.0], [73.0, 1404.0], [73.1, 1406.0], [73.2, 1409.0], [73.3, 1410.0], [73.4, 1411.0], [73.5, 1414.0], [73.6, 1416.0], [73.7, 1417.0], [73.8, 1418.0], [73.9, 1422.0], [74.0, 1423.0], [74.1, 1426.0], [74.2, 1427.0], [74.3, 1430.0], [74.4, 1433.0], [74.5, 1435.0], [74.6, 1437.0], [74.7, 1439.0], [74.8, 1441.0], [74.9, 1444.0], [75.0, 1447.0], [75.1, 1451.0], [75.2, 1454.0], [75.3, 1456.0], [75.4, 1459.0], [75.5, 1460.0], [75.6, 1464.0], [75.7, 1465.0], [75.8, 1468.0], [75.9, 1471.0], [76.0, 1474.0], [76.1, 1476.0], [76.2, 1480.0], [76.3, 1482.0], [76.4, 1485.0], [76.5, 1486.0], [76.6, 1489.0], [76.7, 1491.0], [76.8, 1493.0], [76.9, 1496.0], [77.0, 1497.0], [77.1, 1501.0], [77.2, 1504.0], [77.3, 1507.0], [77.4, 1512.0], [77.5, 1513.0], [77.6, 1515.0], [77.7, 1517.0], [77.8, 1523.0], [77.9, 1524.0], [78.0, 1526.0], [78.1, 1529.0], [78.2, 1530.0], [78.3, 1532.0], [78.4, 1538.0], [78.5, 1541.0], [78.6, 1545.0], [78.7, 1547.0], [78.8, 1551.0], [78.9, 1552.0], [79.0, 1555.0], [79.1, 1557.0], [79.2, 1559.0], [79.3, 1563.0], [79.4, 1565.0], [79.5, 1567.0], [79.6, 1570.0], [79.7, 1572.0], [79.8, 1574.0], [79.9, 1576.0], [80.0, 1578.0], [80.1, 1579.0], [80.2, 1580.0], [80.3, 1582.0], [80.4, 1584.0], [80.5, 1587.0], [80.6, 1589.0], [80.7, 1592.0], [80.8, 1599.0], [80.9, 1601.0], [81.0, 1605.0], [81.1, 1609.0], [81.2, 1612.0], [81.3, 1616.0], [81.4, 1619.0], [81.5, 1622.0], [81.6, 1626.0], [81.7, 1629.0], [81.8, 1633.0], [81.9, 1637.0], [82.0, 1639.0], [82.1, 1640.0], [82.2, 1643.0], [82.3, 1646.0], [82.4, 1649.0], [82.5, 1650.0], [82.6, 1652.0], [82.7, 1657.0], [82.8, 1660.0], [82.9, 1664.0], [83.0, 1667.0], [83.1, 1668.0], [83.2, 1672.0], [83.3, 1675.0], [83.4, 1679.0], [83.5, 1683.0], [83.6, 1685.0], [83.7, 1688.0], [83.8, 1692.0], [83.9, 1693.0], [84.0, 1696.0], [84.1, 1698.0], [84.2, 1701.0], [84.3, 1704.0], [84.4, 1706.0], [84.5, 1709.0], [84.6, 1712.0], [84.7, 1716.0], [84.8, 1718.0], [84.9, 1721.0], [85.0, 1724.0], [85.1, 1726.0], [85.2, 1728.0], [85.3, 1731.0], [85.4, 1735.0], [85.5, 1740.0], [85.6, 1745.0], [85.7, 1750.0], [85.8, 1754.0], [85.9, 1758.0], [86.0, 1761.0], [86.1, 1768.0], [86.2, 1770.0], [86.3, 1772.0], [86.4, 1777.0], [86.5, 1779.0], [86.6, 1781.0], [86.7, 1785.0], [86.8, 1789.0], [86.9, 1792.0], [87.0, 1800.0], [87.1, 1802.0], [87.2, 1803.0], [87.3, 1806.0], [87.4, 1809.0], [87.5, 1811.0], [87.6, 1813.0], [87.7, 1816.0], [87.8, 1818.0], [87.9, 1820.0], [88.0, 1825.0], [88.1, 1828.0], [88.2, 1836.0], [88.3, 1839.0], [88.4, 1843.0], [88.5, 1845.0], [88.6, 1848.0], [88.7, 1850.0], [88.8, 1856.0], [88.9, 1862.0], [89.0, 1871.0], [89.1, 1874.0], [89.2, 1878.0], [89.3, 1883.0], [89.4, 1891.0], [89.5, 1896.0], [89.6, 1900.0], [89.7, 1905.0], [89.8, 1913.0], [89.9, 1919.0], [90.0, 1926.0], [90.1, 1928.0], [90.2, 1932.0], [90.3, 1941.0], [90.4, 1948.0], [90.5, 1950.0], [90.6, 1957.0], [90.7, 1963.0], [90.8, 1971.0], [90.9, 1975.0], [91.0, 1984.0], [91.1, 1993.0], [91.2, 2008.0], [91.3, 2015.0], [91.4, 2021.0], [91.5, 2032.0], [91.6, 2044.0], [91.7, 2059.0], [91.8, 2065.0], [91.9, 2069.0], [92.0, 2075.0], [92.1, 2081.0], [92.2, 2084.0], [92.3, 2092.0], [92.4, 2101.0], [92.5, 2109.0], [92.6, 2121.0], [92.7, 2128.0], [92.8, 2137.0], [92.9, 2156.0], [93.0, 2166.0], [93.1, 2168.0], [93.2, 2185.0], [93.3, 2195.0], [93.4, 2209.0], [93.5, 2215.0], [93.6, 2226.0], [93.7, 2239.0], [93.8, 2252.0], [93.9, 2268.0], [94.0, 2286.0], [94.1, 2303.0], [94.2, 2318.0], [94.3, 2343.0], [94.4, 2350.0], [94.5, 2366.0], [94.6, 2383.0], [94.7, 2390.0], [94.8, 2400.0], [94.9, 2413.0], [95.0, 2430.0], [95.1, 2437.0], [95.2, 2447.0], [95.3, 2455.0], [95.4, 2468.0], [95.5, 2478.0], [95.6, 2498.0], [95.7, 2506.0], [95.8, 2516.0], [95.9, 2538.0], [96.0, 2551.0], [96.1, 2565.0], [96.2, 2580.0], [96.3, 2589.0], [96.4, 2610.0], [96.5, 2623.0], [96.6, 2634.0], [96.7, 2649.0], [96.8, 2657.0], [96.9, 2696.0], [97.0, 2728.0], [97.1, 2741.0], [97.2, 2752.0], [97.3, 2769.0], [97.4, 2796.0], [97.5, 2805.0], [97.6, 2825.0], [97.7, 2843.0], [97.8, 2857.0], [97.9, 2870.0], [98.0, 2918.0], [98.1, 2932.0], [98.2, 2952.0], [98.3, 3018.0], [98.4, 3072.0], [98.5, 3103.0], [98.6, 3146.0], [98.7, 3175.0], [98.8, 3223.0], [98.9, 3319.0], [99.0, 3405.0], [99.1, 3447.0], [99.2, 3546.0], [99.3, 3698.0], [99.4, 3850.0], [99.5, 4068.0], [99.6, 4233.0], [99.7, 4586.0], [99.8, 5275.0], [99.9, 5966.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 508.0, "series": [{"data": [[600.0, 398.0], [700.0, 281.0], [800.0, 217.0], [900.0, 231.0], [1000.0, 241.0], [1100.0, 243.0], [1200.0, 216.0], [1300.0, 203.0], [1400.0, 218.0], [1500.0, 196.0], [1600.0, 171.0], [1700.0, 148.0], [1800.0, 135.0], [1900.0, 79.0], [2000.0, 64.0], [2100.0, 51.0], [2300.0, 36.0], [2200.0, 39.0], [2400.0, 44.0], [2500.0, 38.0], [2600.0, 30.0], [2700.0, 27.0], [2800.0, 28.0], [2900.0, 15.0], [3000.0, 10.0], [3100.0, 14.0], [3200.0, 6.0], [3300.0, 6.0], [3400.0, 8.0], [3500.0, 6.0], [3600.0, 3.0], [3700.0, 4.0], [3800.0, 1.0], [3900.0, 5.0], [4000.0, 3.0], [4200.0, 3.0], [4300.0, 1.0], [4500.0, 5.0], [4800.0, 1.0], [4900.0, 1.0], [5200.0, 3.0], [5300.0, 1.0], [5400.0, 2.0], [6100.0, 2.0], [5900.0, 1.0], [6000.0, 1.0], [6500.0, 1.0], [6900.0, 1.0], [100.0, 16.0], [200.0, 408.0], [300.0, 434.0], [400.0, 508.0], [500.0, 386.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1189.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2632.0, "series": [{"data": [[0.0, 1369.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2632.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1189.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.895833333333332, "minX": 1.60283922E12, "maxY": 10.0, "series": [{"data": [[1.60283964E12, 10.0], [1.60283934E12, 10.0], [1.60283976E12, 9.895833333333332], [1.60283928E12, 10.0], [1.60283946E12, 10.0], [1.6028394E12, 10.0], [1.60283958E12, 10.0], [1.60283952E12, 10.0], [1.6028397E12, 10.0], [1.60283922E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283976E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 322.0, "minX": 1.0, "maxY": 2747.0, "series": [{"data": [[8.0, 1217.0], [4.0, 937.0], [2.0, 1007.0], [1.0, 2747.0], [9.0, 1164.0], [10.0, 1048.6433121019081], [5.0, 717.0], [6.0, 938.0], [3.0, 1399.0], [7.0, 322.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1048.837957610787]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 826.0833333333334, "minX": 1.60283922E12, "maxY": 3135005.9833333334, "series": [{"data": [[1.60283964E12, 3135005.9833333334], [1.60283934E12, 2606497.5166666666], [1.60283976E12, 2055691.95], [1.60283928E12, 2526953.316666667], [1.60283946E12, 2677214.7333333334], [1.6028394E12, 2874156.0833333335], [1.60283958E12, 2127181.6666666665], [1.60283952E12, 2644903.55], [1.6028397E12, 2582429.15], [1.60283922E12, 743061.0833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60283964E12, 4395.216666666666], [1.60283934E12, 4514.25], [1.60283976E12, 3259.883333333333], [1.60283928E12, 3937.7166666666667], [1.60283946E12, 4522.55], [1.6028394E12, 4312.6], [1.60283958E12, 4192.783333333334], [1.60283952E12, 3686.35], [1.6028397E12, 4929.9], [1.60283922E12, 826.0833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283976E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 924.4123076923076, "minX": 1.60283922E12, "maxY": 1384.8454545454554, "series": [{"data": [[1.60283964E12, 1007.5288135593223], [1.60283934E12, 983.4019607843137], [1.60283976E12, 1145.2592592592587], [1.60283928E12, 1095.9397810218973], [1.60283946E12, 1001.150753768844], [1.6028394E12, 1054.442105263159], [1.60283958E12, 1039.682291666666], [1.60283952E12, 1190.2594059405951], [1.6028397E12, 924.4123076923076], [1.60283922E12, 1384.8454545454554]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283976E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 923.144615384615, "minX": 1.60283922E12, "maxY": 1381.9454545454553, "series": [{"data": [[1.60283964E12, 1005.6220338983056], [1.60283934E12, 981.374183006536], [1.60283976E12, 1143.6550925925928], [1.60283928E12, 1093.9671532846717], [1.60283946E12, 999.1842546063654], [1.6028394E12, 1052.173684210526], [1.60283958E12, 1038.4357638888898], [1.60283952E12, 1188.4871287128715], [1.6028397E12, 923.144615384615], [1.60283922E12, 1381.9454545454553]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283976E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.016923076923076926, "minX": 1.60283922E12, "maxY": 0.7545454545454545, "series": [{"data": [[1.60283964E12, 0.022033898305084735], [1.60283934E12, 0.026143790849673193], [1.60283976E12, 0.060185185185185175], [1.60283928E12, 0.027372262773722598], [1.60283946E12, 0.023450586264656632], [1.6028394E12, 0.01929824561403507], [1.60283958E12, 0.019097222222222203], [1.60283952E12, 0.02376237623762377], [1.6028397E12, 0.016923076923076926], [1.60283922E12, 0.7545454545454545]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283976E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.60283922E12, "maxY": 6909.0, "series": [{"data": [[1.60283964E12, 3076.0], [1.60283934E12, 4575.0], [1.60283976E12, 4586.0], [1.60283928E12, 5449.0], [1.60283946E12, 6165.0], [1.6028394E12, 3447.0], [1.60283958E12, 6506.0], [1.60283952E12, 6909.0], [1.6028397E12, 3756.0], [1.60283922E12, 4068.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60283964E12, 222.27599943637847], [1.60283934E12, 207.5169998538494], [1.60283976E12, 212.3519983482361], [1.60283928E12, 228.7639994764328], [1.60283946E12, 205.52799942970276], [1.6028394E12, 207.13899986386298], [1.60283958E12, 202.0], [1.60283952E12, 217.1079997587204], [1.6028397E12, 198.0], [1.60283922E12, 249.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60283964E12, 224.4036002254486], [1.60283934E12, 208.2061001753807], [1.60283976E12, 214.5734000825882], [1.60283928E12, 229.0], [1.60283946E12, 207.6808002281189], [1.6028394E12, 207.6529000544548], [1.60283958E12, 202.0], [1.60283952E12, 218.01880009651185], [1.6028397E12, 198.4449000620842], [1.60283922E12, 249.0989000105858]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60283964E12, 223.45799971818923], [1.60283934E12, 207.8234999269247], [1.60283976E12, 214.22699989676477], [1.60283928E12, 229.0], [1.60283946E12, 206.72399971485137], [1.6028394E12, 207.4244999319315], [1.60283958E12, 202.0], [1.60283952E12, 217.6139998793602], [1.6028397E12, 198.18449992239476], [1.60283922E12, 249.05449998676778]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60283964E12, 200.0], [1.60283934E12, 200.0], [1.60283976E12, 193.0], [1.60283928E12, 217.0], [1.60283946E12, 192.0], [1.6028394E12, 196.0], [1.60283958E12, 197.0], [1.60283952E12, 201.0], [1.6028397E12, 181.0], [1.60283922E12, 249.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60283964E12, 755.0], [1.60283934E12, 706.0], [1.60283976E12, 1036.5], [1.60283928E12, 972.5], [1.60283946E12, 707.0], [1.6028394E12, 810.5], [1.60283958E12, 909.0], [1.60283952E12, 1049.0], [1.6028397E12, 708.5], [1.60283922E12, 1088.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283976E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 396.0, "minX": 1.0, "maxY": 2551.0, "series": [{"data": [[2.0, 852.0], [3.0, 1613.0], [4.0, 1598.0], [5.0, 1408.5], [6.0, 1360.5], [7.0, 1205.5], [8.0, 1078.5], [9.0, 1053.5], [10.0, 978.5], [11.0, 913.0], [12.0, 781.5], [13.0, 688.0], [14.0, 667.5], [15.0, 550.0], [1.0, 2551.0], [16.0, 551.5], [17.0, 457.5], [18.0, 435.5], [19.0, 464.5], [20.0, 457.5], [21.0, 466.0], [22.0, 468.0], [23.0, 455.0], [24.0, 430.0], [25.0, 396.0], [26.0, 440.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 395.5, "minX": 1.0, "maxY": 2548.0, "series": [{"data": [[2.0, 851.5], [3.0, 1609.5], [4.0, 1596.0], [5.0, 1406.0], [6.0, 1357.0], [7.0, 1203.5], [8.0, 1076.0], [9.0, 1051.0], [10.0, 978.5], [11.0, 912.0], [12.0, 780.5], [13.0, 686.5], [14.0, 666.5], [15.0, 550.0], [1.0, 2548.0], [16.0, 551.5], [17.0, 457.0], [18.0, 435.5], [19.0, 464.0], [20.0, 457.0], [21.0, 466.0], [22.0, 468.0], [23.0, 455.0], [24.0, 429.5], [25.0, 395.5], [26.0, 440.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.60283922E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60283964E12, 9.833333333333334], [1.60283934E12, 10.2], [1.60283976E12, 7.033333333333333], [1.60283928E12, 9.133333333333333], [1.60283946E12, 9.95], [1.6028394E12, 9.5], [1.60283958E12, 9.6], [1.60283952E12, 8.416666666666666], [1.6028397E12, 10.833333333333334], [1.60283922E12, 2.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283976E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.8333333333333333, "minX": 1.60283922E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60283964E12, 9.833333333333334], [1.60283934E12, 10.2], [1.60283976E12, 7.2], [1.60283928E12, 9.133333333333333], [1.60283946E12, 9.95], [1.6028394E12, 9.5], [1.60283958E12, 9.6], [1.60283952E12, 8.416666666666666], [1.6028397E12, 10.833333333333334], [1.60283922E12, 1.8333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283976E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.8333333333333333, "minX": 1.60283922E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60283964E12, 9.833333333333334], [1.60283934E12, 10.2], [1.60283976E12, 7.2], [1.60283928E12, 9.133333333333333], [1.60283946E12, 9.95], [1.6028394E12, 9.5], [1.60283958E12, 9.6], [1.60283952E12, 8.416666666666666], [1.6028397E12, 10.833333333333334], [1.60283922E12, 1.8333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283976E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.8333333333333333, "minX": 1.60283922E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60283964E12, 9.833333333333334], [1.60283934E12, 10.2], [1.60283976E12, 7.2], [1.60283928E12, 9.133333333333333], [1.60283946E12, 9.95], [1.6028394E12, 9.5], [1.60283958E12, 9.6], [1.60283952E12, 8.416666666666666], [1.6028397E12, 10.833333333333334], [1.60283922E12, 1.8333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283976E12, "title": "Total Transactions Per Second"}},
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

