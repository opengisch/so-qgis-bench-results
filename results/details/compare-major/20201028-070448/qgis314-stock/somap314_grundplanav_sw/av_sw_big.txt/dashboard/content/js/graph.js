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
        data: {"result": {"minY": 195.0, "minX": 0.0, "maxY": 6635.0, "series": [{"data": [[0.0, 195.0], [0.1, 202.0], [0.2, 208.0], [0.3, 211.0], [0.4, 212.0], [0.5, 213.0], [0.6, 214.0], [0.7, 215.0], [0.8, 217.0], [0.9, 220.0], [1.0, 221.0], [1.1, 222.0], [1.2, 224.0], [1.3, 225.0], [1.4, 226.0], [1.5, 227.0], [1.6, 229.0], [1.7, 230.0], [1.8, 230.0], [1.9, 232.0], [2.0, 232.0], [2.1, 234.0], [2.2, 234.0], [2.3, 234.0], [2.4, 235.0], [2.5, 236.0], [2.6, 236.0], [2.7, 237.0], [2.8, 238.0], [2.9, 238.0], [3.0, 239.0], [3.1, 240.0], [3.2, 241.0], [3.3, 241.0], [3.4, 242.0], [3.5, 242.0], [3.6, 242.0], [3.7, 243.0], [3.8, 243.0], [3.9, 244.0], [4.0, 244.0], [4.1, 245.0], [4.2, 245.0], [4.3, 246.0], [4.4, 247.0], [4.5, 248.0], [4.6, 249.0], [4.7, 249.0], [4.8, 250.0], [4.9, 251.0], [5.0, 251.0], [5.1, 251.0], [5.2, 252.0], [5.3, 253.0], [5.4, 254.0], [5.5, 254.0], [5.6, 255.0], [5.7, 256.0], [5.8, 257.0], [5.9, 258.0], [6.0, 260.0], [6.1, 262.0], [6.2, 264.0], [6.3, 266.0], [6.4, 268.0], [6.5, 271.0], [6.6, 271.0], [6.7, 273.0], [6.8, 276.0], [6.9, 280.0], [7.0, 282.0], [7.1, 284.0], [7.2, 286.0], [7.3, 289.0], [7.4, 290.0], [7.5, 291.0], [7.6, 291.0], [7.7, 292.0], [7.8, 295.0], [7.9, 297.0], [8.0, 299.0], [8.1, 302.0], [8.2, 304.0], [8.3, 308.0], [8.4, 310.0], [8.5, 313.0], [8.6, 316.0], [8.7, 317.0], [8.8, 318.0], [8.9, 320.0], [9.0, 321.0], [9.1, 323.0], [9.2, 324.0], [9.3, 325.0], [9.4, 325.0], [9.5, 327.0], [9.6, 328.0], [9.7, 329.0], [9.8, 329.0], [9.9, 330.0], [10.0, 331.0], [10.1, 332.0], [10.2, 332.0], [10.3, 333.0], [10.4, 334.0], [10.5, 335.0], [10.6, 337.0], [10.7, 337.0], [10.8, 339.0], [10.9, 339.0], [11.0, 340.0], [11.1, 341.0], [11.2, 342.0], [11.3, 343.0], [11.4, 344.0], [11.5, 345.0], [11.6, 347.0], [11.7, 347.0], [11.8, 349.0], [11.9, 350.0], [12.0, 351.0], [12.1, 352.0], [12.2, 353.0], [12.3, 354.0], [12.4, 355.0], [12.5, 356.0], [12.6, 356.0], [12.7, 357.0], [12.8, 359.0], [12.9, 360.0], [13.0, 361.0], [13.1, 362.0], [13.2, 364.0], [13.3, 365.0], [13.4, 367.0], [13.5, 368.0], [13.6, 370.0], [13.7, 372.0], [13.8, 374.0], [13.9, 376.0], [14.0, 378.0], [14.1, 379.0], [14.2, 380.0], [14.3, 382.0], [14.4, 383.0], [14.5, 384.0], [14.6, 386.0], [14.7, 388.0], [14.8, 392.0], [14.9, 394.0], [15.0, 395.0], [15.1, 396.0], [15.2, 397.0], [15.3, 399.0], [15.4, 401.0], [15.5, 403.0], [15.6, 408.0], [15.7, 411.0], [15.8, 413.0], [15.9, 415.0], [16.0, 417.0], [16.1, 419.0], [16.2, 420.0], [16.3, 422.0], [16.4, 424.0], [16.5, 425.0], [16.6, 425.0], [16.7, 427.0], [16.8, 427.0], [16.9, 428.0], [17.0, 429.0], [17.1, 430.0], [17.2, 431.0], [17.3, 432.0], [17.4, 434.0], [17.5, 436.0], [17.6, 437.0], [17.7, 438.0], [17.8, 439.0], [17.9, 440.0], [18.0, 441.0], [18.1, 443.0], [18.2, 444.0], [18.3, 446.0], [18.4, 447.0], [18.5, 448.0], [18.6, 449.0], [18.7, 450.0], [18.8, 452.0], [18.9, 453.0], [19.0, 454.0], [19.1, 455.0], [19.2, 457.0], [19.3, 458.0], [19.4, 460.0], [19.5, 460.0], [19.6, 461.0], [19.7, 462.0], [19.8, 463.0], [19.9, 463.0], [20.0, 464.0], [20.1, 465.0], [20.2, 467.0], [20.3, 467.0], [20.4, 469.0], [20.5, 470.0], [20.6, 470.0], [20.7, 471.0], [20.8, 473.0], [20.9, 473.0], [21.0, 474.0], [21.1, 475.0], [21.2, 476.0], [21.3, 477.0], [21.4, 478.0], [21.5, 479.0], [21.6, 481.0], [21.7, 481.0], [21.8, 483.0], [21.9, 483.0], [22.0, 484.0], [22.1, 485.0], [22.2, 486.0], [22.3, 486.0], [22.4, 487.0], [22.5, 488.0], [22.6, 488.0], [22.7, 489.0], [22.8, 490.0], [22.9, 492.0], [23.0, 492.0], [23.1, 493.0], [23.2, 494.0], [23.3, 495.0], [23.4, 497.0], [23.5, 498.0], [23.6, 499.0], [23.7, 500.0], [23.8, 501.0], [23.9, 503.0], [24.0, 504.0], [24.1, 506.0], [24.2, 507.0], [24.3, 508.0], [24.4, 508.0], [24.5, 510.0], [24.6, 511.0], [24.7, 512.0], [24.8, 514.0], [24.9, 514.0], [25.0, 515.0], [25.1, 516.0], [25.2, 517.0], [25.3, 518.0], [25.4, 520.0], [25.5, 521.0], [25.6, 522.0], [25.7, 523.0], [25.8, 524.0], [25.9, 526.0], [26.0, 528.0], [26.1, 529.0], [26.2, 530.0], [26.3, 530.0], [26.4, 534.0], [26.5, 536.0], [26.6, 537.0], [26.7, 538.0], [26.8, 540.0], [26.9, 541.0], [27.0, 543.0], [27.1, 544.0], [27.2, 545.0], [27.3, 547.0], [27.4, 551.0], [27.5, 552.0], [27.6, 553.0], [27.7, 555.0], [27.8, 555.0], [27.9, 556.0], [28.0, 558.0], [28.1, 558.0], [28.2, 561.0], [28.3, 562.0], [28.4, 562.0], [28.5, 563.0], [28.6, 564.0], [28.7, 565.0], [28.8, 567.0], [28.9, 568.0], [29.0, 569.0], [29.1, 570.0], [29.2, 571.0], [29.3, 572.0], [29.4, 573.0], [29.5, 574.0], [29.6, 575.0], [29.7, 578.0], [29.8, 579.0], [29.9, 580.0], [30.0, 581.0], [30.1, 582.0], [30.2, 584.0], [30.3, 585.0], [30.4, 585.0], [30.5, 586.0], [30.6, 587.0], [30.7, 588.0], [30.8, 591.0], [30.9, 592.0], [31.0, 592.0], [31.1, 594.0], [31.2, 595.0], [31.3, 596.0], [31.4, 597.0], [31.5, 600.0], [31.6, 600.0], [31.7, 601.0], [31.8, 603.0], [31.9, 604.0], [32.0, 604.0], [32.1, 605.0], [32.2, 606.0], [32.3, 607.0], [32.4, 610.0], [32.5, 611.0], [32.6, 612.0], [32.7, 613.0], [32.8, 615.0], [32.9, 617.0], [33.0, 618.0], [33.1, 619.0], [33.2, 621.0], [33.3, 623.0], [33.4, 625.0], [33.5, 626.0], [33.6, 627.0], [33.7, 629.0], [33.8, 630.0], [33.9, 631.0], [34.0, 633.0], [34.1, 635.0], [34.2, 636.0], [34.3, 637.0], [34.4, 638.0], [34.5, 639.0], [34.6, 641.0], [34.7, 642.0], [34.8, 643.0], [34.9, 644.0], [35.0, 646.0], [35.1, 648.0], [35.2, 649.0], [35.3, 651.0], [35.4, 653.0], [35.5, 655.0], [35.6, 656.0], [35.7, 657.0], [35.8, 658.0], [35.9, 660.0], [36.0, 661.0], [36.1, 662.0], [36.2, 663.0], [36.3, 666.0], [36.4, 668.0], [36.5, 669.0], [36.6, 669.0], [36.7, 671.0], [36.8, 672.0], [36.9, 673.0], [37.0, 674.0], [37.1, 676.0], [37.2, 677.0], [37.3, 677.0], [37.4, 678.0], [37.5, 678.0], [37.6, 679.0], [37.7, 680.0], [37.8, 682.0], [37.9, 683.0], [38.0, 684.0], [38.1, 686.0], [38.2, 687.0], [38.3, 689.0], [38.4, 690.0], [38.5, 691.0], [38.6, 692.0], [38.7, 693.0], [38.8, 695.0], [38.9, 695.0], [39.0, 696.0], [39.1, 697.0], [39.2, 698.0], [39.3, 699.0], [39.4, 701.0], [39.5, 702.0], [39.6, 703.0], [39.7, 706.0], [39.8, 706.0], [39.9, 706.0], [40.0, 707.0], [40.1, 708.0], [40.2, 709.0], [40.3, 710.0], [40.4, 712.0], [40.5, 713.0], [40.6, 714.0], [40.7, 715.0], [40.8, 716.0], [40.9, 718.0], [41.0, 720.0], [41.1, 721.0], [41.2, 723.0], [41.3, 723.0], [41.4, 725.0], [41.5, 727.0], [41.6, 728.0], [41.7, 730.0], [41.8, 730.0], [41.9, 732.0], [42.0, 733.0], [42.1, 735.0], [42.2, 737.0], [42.3, 740.0], [42.4, 742.0], [42.5, 745.0], [42.6, 748.0], [42.7, 751.0], [42.8, 754.0], [42.9, 757.0], [43.0, 759.0], [43.1, 759.0], [43.2, 760.0], [43.3, 762.0], [43.4, 763.0], [43.5, 765.0], [43.6, 769.0], [43.7, 771.0], [43.8, 772.0], [43.9, 775.0], [44.0, 776.0], [44.1, 777.0], [44.2, 779.0], [44.3, 782.0], [44.4, 783.0], [44.5, 786.0], [44.6, 788.0], [44.7, 790.0], [44.8, 793.0], [44.9, 794.0], [45.0, 796.0], [45.1, 797.0], [45.2, 799.0], [45.3, 801.0], [45.4, 802.0], [45.5, 803.0], [45.6, 805.0], [45.7, 806.0], [45.8, 808.0], [45.9, 809.0], [46.0, 811.0], [46.1, 812.0], [46.2, 815.0], [46.3, 815.0], [46.4, 818.0], [46.5, 820.0], [46.6, 823.0], [46.7, 825.0], [46.8, 825.0], [46.9, 828.0], [47.0, 832.0], [47.1, 833.0], [47.2, 836.0], [47.3, 839.0], [47.4, 841.0], [47.5, 842.0], [47.6, 844.0], [47.7, 845.0], [47.8, 846.0], [47.9, 848.0], [48.0, 850.0], [48.1, 852.0], [48.2, 855.0], [48.3, 855.0], [48.4, 858.0], [48.5, 860.0], [48.6, 861.0], [48.7, 862.0], [48.8, 865.0], [48.9, 867.0], [49.0, 869.0], [49.1, 871.0], [49.2, 874.0], [49.3, 875.0], [49.4, 877.0], [49.5, 881.0], [49.6, 882.0], [49.7, 885.0], [49.8, 887.0], [49.9, 891.0], [50.0, 893.0], [50.1, 895.0], [50.2, 896.0], [50.3, 898.0], [50.4, 900.0], [50.5, 901.0], [50.6, 902.0], [50.7, 905.0], [50.8, 906.0], [50.9, 907.0], [51.0, 910.0], [51.1, 911.0], [51.2, 914.0], [51.3, 916.0], [51.4, 920.0], [51.5, 923.0], [51.6, 925.0], [51.7, 928.0], [51.8, 931.0], [51.9, 931.0], [52.0, 933.0], [52.1, 936.0], [52.2, 939.0], [52.3, 943.0], [52.4, 945.0], [52.5, 947.0], [52.6, 949.0], [52.7, 952.0], [52.8, 955.0], [52.9, 959.0], [53.0, 960.0], [53.1, 963.0], [53.2, 966.0], [53.3, 967.0], [53.4, 969.0], [53.5, 972.0], [53.6, 973.0], [53.7, 975.0], [53.8, 977.0], [53.9, 981.0], [54.0, 984.0], [54.1, 987.0], [54.2, 988.0], [54.3, 991.0], [54.4, 992.0], [54.5, 995.0], [54.6, 999.0], [54.7, 1003.0], [54.8, 1005.0], [54.9, 1007.0], [55.0, 1008.0], [55.1, 1011.0], [55.2, 1016.0], [55.3, 1019.0], [55.4, 1020.0], [55.5, 1022.0], [55.6, 1023.0], [55.7, 1026.0], [55.8, 1028.0], [55.9, 1029.0], [56.0, 1033.0], [56.1, 1034.0], [56.2, 1036.0], [56.3, 1038.0], [56.4, 1039.0], [56.5, 1041.0], [56.6, 1043.0], [56.7, 1044.0], [56.8, 1045.0], [56.9, 1048.0], [57.0, 1049.0], [57.1, 1051.0], [57.2, 1053.0], [57.3, 1054.0], [57.4, 1055.0], [57.5, 1057.0], [57.6, 1059.0], [57.7, 1062.0], [57.8, 1064.0], [57.9, 1066.0], [58.0, 1067.0], [58.1, 1068.0], [58.2, 1070.0], [58.3, 1072.0], [58.4, 1074.0], [58.5, 1076.0], [58.6, 1078.0], [58.7, 1079.0], [58.8, 1081.0], [58.9, 1083.0], [59.0, 1084.0], [59.1, 1085.0], [59.2, 1086.0], [59.3, 1087.0], [59.4, 1090.0], [59.5, 1092.0], [59.6, 1093.0], [59.7, 1096.0], [59.8, 1099.0], [59.9, 1099.0], [60.0, 1102.0], [60.1, 1105.0], [60.2, 1107.0], [60.3, 1108.0], [60.4, 1111.0], [60.5, 1113.0], [60.6, 1115.0], [60.7, 1117.0], [60.8, 1119.0], [60.9, 1121.0], [61.0, 1122.0], [61.1, 1126.0], [61.2, 1129.0], [61.3, 1133.0], [61.4, 1135.0], [61.5, 1136.0], [61.6, 1138.0], [61.7, 1139.0], [61.8, 1143.0], [61.9, 1147.0], [62.0, 1148.0], [62.1, 1150.0], [62.2, 1151.0], [62.3, 1152.0], [62.4, 1155.0], [62.5, 1157.0], [62.6, 1158.0], [62.7, 1160.0], [62.8, 1162.0], [62.9, 1164.0], [63.0, 1169.0], [63.1, 1171.0], [63.2, 1174.0], [63.3, 1178.0], [63.4, 1180.0], [63.5, 1182.0], [63.6, 1186.0], [63.7, 1189.0], [63.8, 1192.0], [63.9, 1193.0], [64.0, 1194.0], [64.1, 1196.0], [64.2, 1198.0], [64.3, 1201.0], [64.4, 1203.0], [64.5, 1204.0], [64.6, 1205.0], [64.7, 1208.0], [64.8, 1210.0], [64.9, 1211.0], [65.0, 1212.0], [65.1, 1214.0], [65.2, 1214.0], [65.3, 1216.0], [65.4, 1219.0], [65.5, 1221.0], [65.6, 1224.0], [65.7, 1226.0], [65.8, 1230.0], [65.9, 1232.0], [66.0, 1235.0], [66.1, 1239.0], [66.2, 1243.0], [66.3, 1245.0], [66.4, 1248.0], [66.5, 1250.0], [66.6, 1252.0], [66.7, 1254.0], [66.8, 1255.0], [66.9, 1260.0], [67.0, 1262.0], [67.1, 1263.0], [67.2, 1265.0], [67.3, 1266.0], [67.4, 1267.0], [67.5, 1270.0], [67.6, 1273.0], [67.7, 1276.0], [67.8, 1278.0], [67.9, 1281.0], [68.0, 1283.0], [68.1, 1285.0], [68.2, 1288.0], [68.3, 1291.0], [68.4, 1292.0], [68.5, 1298.0], [68.6, 1300.0], [68.7, 1303.0], [68.8, 1305.0], [68.9, 1308.0], [69.0, 1312.0], [69.1, 1313.0], [69.2, 1316.0], [69.3, 1316.0], [69.4, 1319.0], [69.5, 1321.0], [69.6, 1324.0], [69.7, 1325.0], [69.8, 1330.0], [69.9, 1332.0], [70.0, 1335.0], [70.1, 1337.0], [70.2, 1339.0], [70.3, 1344.0], [70.4, 1347.0], [70.5, 1350.0], [70.6, 1351.0], [70.7, 1354.0], [70.8, 1355.0], [70.9, 1360.0], [71.0, 1362.0], [71.1, 1365.0], [71.2, 1366.0], [71.3, 1368.0], [71.4, 1371.0], [71.5, 1375.0], [71.6, 1378.0], [71.7, 1380.0], [71.8, 1381.0], [71.9, 1382.0], [72.0, 1384.0], [72.1, 1386.0], [72.2, 1388.0], [72.3, 1390.0], [72.4, 1392.0], [72.5, 1393.0], [72.6, 1396.0], [72.7, 1400.0], [72.8, 1402.0], [72.9, 1405.0], [73.0, 1407.0], [73.1, 1410.0], [73.2, 1416.0], [73.3, 1418.0], [73.4, 1421.0], [73.5, 1424.0], [73.6, 1427.0], [73.7, 1431.0], [73.8, 1434.0], [73.9, 1438.0], [74.0, 1442.0], [74.1, 1443.0], [74.2, 1445.0], [74.3, 1447.0], [74.4, 1449.0], [74.5, 1450.0], [74.6, 1452.0], [74.7, 1454.0], [74.8, 1458.0], [74.9, 1462.0], [75.0, 1464.0], [75.1, 1467.0], [75.2, 1470.0], [75.3, 1472.0], [75.4, 1475.0], [75.5, 1478.0], [75.6, 1479.0], [75.7, 1481.0], [75.8, 1485.0], [75.9, 1487.0], [76.0, 1490.0], [76.1, 1491.0], [76.2, 1494.0], [76.3, 1495.0], [76.4, 1497.0], [76.5, 1499.0], [76.6, 1500.0], [76.7, 1502.0], [76.8, 1505.0], [76.9, 1509.0], [77.0, 1510.0], [77.1, 1512.0], [77.2, 1515.0], [77.3, 1520.0], [77.4, 1523.0], [77.5, 1524.0], [77.6, 1525.0], [77.7, 1527.0], [77.8, 1530.0], [77.9, 1533.0], [78.0, 1535.0], [78.1, 1538.0], [78.2, 1540.0], [78.3, 1542.0], [78.4, 1545.0], [78.5, 1548.0], [78.6, 1550.0], [78.7, 1553.0], [78.8, 1554.0], [78.9, 1558.0], [79.0, 1561.0], [79.1, 1565.0], [79.2, 1567.0], [79.3, 1570.0], [79.4, 1572.0], [79.5, 1576.0], [79.6, 1577.0], [79.7, 1579.0], [79.8, 1581.0], [79.9, 1585.0], [80.0, 1588.0], [80.1, 1591.0], [80.2, 1593.0], [80.3, 1597.0], [80.4, 1601.0], [80.5, 1604.0], [80.6, 1609.0], [80.7, 1612.0], [80.8, 1614.0], [80.9, 1617.0], [81.0, 1618.0], [81.1, 1621.0], [81.2, 1624.0], [81.3, 1625.0], [81.4, 1630.0], [81.5, 1633.0], [81.6, 1636.0], [81.7, 1637.0], [81.8, 1639.0], [81.9, 1643.0], [82.0, 1647.0], [82.1, 1648.0], [82.2, 1650.0], [82.3, 1652.0], [82.4, 1657.0], [82.5, 1662.0], [82.6, 1665.0], [82.7, 1672.0], [82.8, 1673.0], [82.9, 1674.0], [83.0, 1677.0], [83.1, 1680.0], [83.2, 1684.0], [83.3, 1686.0], [83.4, 1689.0], [83.5, 1690.0], [83.6, 1694.0], [83.7, 1699.0], [83.8, 1702.0], [83.9, 1706.0], [84.0, 1712.0], [84.1, 1716.0], [84.2, 1721.0], [84.3, 1723.0], [84.4, 1725.0], [84.5, 1728.0], [84.6, 1731.0], [84.7, 1733.0], [84.8, 1736.0], [84.9, 1740.0], [85.0, 1746.0], [85.1, 1750.0], [85.2, 1754.0], [85.3, 1759.0], [85.4, 1761.0], [85.5, 1763.0], [85.6, 1766.0], [85.7, 1769.0], [85.8, 1774.0], [85.9, 1780.0], [86.0, 1781.0], [86.1, 1784.0], [86.2, 1785.0], [86.3, 1789.0], [86.4, 1795.0], [86.5, 1798.0], [86.6, 1800.0], [86.7, 1802.0], [86.8, 1808.0], [86.9, 1812.0], [87.0, 1816.0], [87.1, 1824.0], [87.2, 1826.0], [87.3, 1834.0], [87.4, 1839.0], [87.5, 1841.0], [87.6, 1847.0], [87.7, 1848.0], [87.8, 1853.0], [87.9, 1858.0], [88.0, 1862.0], [88.1, 1867.0], [88.2, 1873.0], [88.3, 1878.0], [88.4, 1881.0], [88.5, 1885.0], [88.6, 1891.0], [88.7, 1894.0], [88.8, 1900.0], [88.9, 1908.0], [89.0, 1915.0], [89.1, 1920.0], [89.2, 1925.0], [89.3, 1933.0], [89.4, 1942.0], [89.5, 1950.0], [89.6, 1962.0], [89.7, 1967.0], [89.8, 1971.0], [89.9, 1977.0], [90.0, 1982.0], [90.1, 1988.0], [90.2, 1996.0], [90.3, 1999.0], [90.4, 2010.0], [90.5, 2015.0], [90.6, 2034.0], [90.7, 2036.0], [90.8, 2045.0], [90.9, 2055.0], [91.0, 2061.0], [91.1, 2068.0], [91.2, 2074.0], [91.3, 2078.0], [91.4, 2089.0], [91.5, 2092.0], [91.6, 2099.0], [91.7, 2104.0], [91.8, 2115.0], [91.9, 2126.0], [92.0, 2131.0], [92.1, 2137.0], [92.2, 2147.0], [92.3, 2166.0], [92.4, 2168.0], [92.5, 2179.0], [92.6, 2187.0], [92.7, 2192.0], [92.8, 2204.0], [92.9, 2213.0], [93.0, 2218.0], [93.1, 2227.0], [93.2, 2241.0], [93.3, 2249.0], [93.4, 2261.0], [93.5, 2279.0], [93.6, 2290.0], [93.7, 2306.0], [93.8, 2320.0], [93.9, 2337.0], [94.0, 2343.0], [94.1, 2355.0], [94.2, 2361.0], [94.3, 2368.0], [94.4, 2378.0], [94.5, 2388.0], [94.6, 2400.0], [94.7, 2407.0], [94.8, 2416.0], [94.9, 2433.0], [95.0, 2446.0], [95.1, 2458.0], [95.2, 2474.0], [95.3, 2491.0], [95.4, 2518.0], [95.5, 2531.0], [95.6, 2546.0], [95.7, 2557.0], [95.8, 2567.0], [95.9, 2573.0], [96.0, 2581.0], [96.1, 2593.0], [96.2, 2613.0], [96.3, 2629.0], [96.4, 2641.0], [96.5, 2659.0], [96.6, 2680.0], [96.7, 2688.0], [96.8, 2713.0], [96.9, 2740.0], [97.0, 2755.0], [97.1, 2762.0], [97.2, 2789.0], [97.3, 2825.0], [97.4, 2860.0], [97.5, 2883.0], [97.6, 2903.0], [97.7, 2916.0], [97.8, 2924.0], [97.9, 2949.0], [98.0, 2961.0], [98.1, 2999.0], [98.2, 3013.0], [98.3, 3053.0], [98.4, 3088.0], [98.5, 3119.0], [98.6, 3160.0], [98.7, 3214.0], [98.8, 3268.0], [98.9, 3301.0], [99.0, 3416.0], [99.1, 3461.0], [99.2, 3553.0], [99.3, 3601.0], [99.4, 3750.0], [99.5, 4017.0], [99.6, 4277.0], [99.7, 4586.0], [99.8, 5170.0], [99.9, 6044.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 432.0, "series": [{"data": [[600.0, 408.0], [700.0, 305.0], [800.0, 269.0], [900.0, 219.0], [1000.0, 275.0], [1100.0, 225.0], [1200.0, 226.0], [1300.0, 212.0], [1400.0, 203.0], [1500.0, 195.0], [1600.0, 176.0], [1700.0, 148.0], [1800.0, 114.0], [1900.0, 79.0], [2000.0, 69.0], [2100.0, 60.0], [2300.0, 48.0], [2200.0, 45.0], [2400.0, 39.0], [2500.0, 42.0], [2600.0, 31.0], [2700.0, 27.0], [2800.0, 16.0], [2900.0, 28.0], [3000.0, 16.0], [3100.0, 14.0], [3200.0, 10.0], [3300.0, 5.0], [3400.0, 9.0], [3500.0, 7.0], [3700.0, 5.0], [3600.0, 4.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 4.0], [4200.0, 3.0], [4300.0, 1.0], [4500.0, 3.0], [4600.0, 1.0], [4800.0, 1.0], [4700.0, 1.0], [5100.0, 3.0], [5200.0, 1.0], [5600.0, 1.0], [5700.0, 1.0], [6000.0, 1.0], [6300.0, 3.0], [6500.0, 1.0], [6600.0, 1.0], [100.0, 3.0], [200.0, 414.0], [300.0, 380.0], [400.0, 432.0], [500.0, 404.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1213.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2744.0, "series": [{"data": [[0.0, 1233.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2744.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1213.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.767195767195766, "minX": 1.60387062E12, "maxY": 10.0, "series": [{"data": [[1.60387092E12, 10.0], [1.60387062E12, 10.0], [1.6038711E12, 10.0], [1.60387104E12, 10.0], [1.60387074E12, 10.0], [1.60387068E12, 10.0], [1.60387116E12, 9.767195767195766], [1.60387086E12, 10.0], [1.6038708E12, 10.0], [1.60387098E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387116E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 370.0, "minX": 1.0, "maxY": 3754.0, "series": [{"data": [[4.0, 952.0], [2.0, 1554.0], [1.0, 3754.0], [9.0, 885.5], [10.0, 1069.5603165412103], [5.0, 370.0], [6.0, 1510.0], [3.0, 771.0], [7.0, 1268.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996148, 1070.0080924855513]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1418.8, "minX": 1.60387062E12, "maxY": 3136185.65, "series": [{"data": [[1.60387092E12, 2472396.1333333333], [1.60387062E12, 2206763.1666666665], [1.6038711E12, 2508152.0166666666], [1.60387104E12, 3008371.9166666665], [1.60387074E12, 3136185.65], [1.60387068E12, 2058537.1333333333], [1.60387116E12, 884037.2166666667], [1.60387086E12, 2552651.15], [1.6038708E12, 2969022.1], [1.60387098E12, 2176450.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60387092E12, 3821.95], [1.60387062E12, 2965.5833333333335], [1.6038711E12, 4482.183333333333], [1.60387104E12, 4619.983333333334], [1.60387074E12, 4325.633333333333], [1.60387068E12, 4544.816666666667], [1.60387116E12, 1418.8], [1.60387086E12, 4008.5833333333335], [1.6038708E12, 4234.383333333333], [1.60387098E12, 4155.416666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387116E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 953.7820512820512, "minX": 1.60387062E12, "maxY": 1355.6984126984132, "series": [{"data": [[1.60387092E12, 1132.005639097744], [1.60387062E12, 1224.850241545894], [1.6038711E12, 1011.786802030457], [1.60387104E12, 985.4729064039409], [1.60387074E12, 1052.3526315789493], [1.60387068E12, 953.7820512820512], [1.60387116E12, 1355.6984126984132], [1.60387086E12, 1123.0543071161048], [1.6038708E12, 1071.538599640935], [1.60387098E12, 1049.3368421052644]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387116E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 952.2435897435892, "minX": 1.60387062E12, "maxY": 1354.079365079365, "series": [{"data": [[1.60387092E12, 1130.2988721804504], [1.60387062E12, 1222.4130434782621], [1.6038711E12, 1010.4314720812183], [1.60387104E12, 983.8472906403937], [1.60387074E12, 1050.2052631578938], [1.60387068E12, 952.2435897435892], [1.60387116E12, 1354.079365079365], [1.60387086E12, 1121.2977528089893], [1.6038708E12, 1069.4524236983839], [1.60387098E12, 1047.9649122807018]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387116E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01929824561403508, "minX": 1.60387062E12, "maxY": 0.20048309178743967, "series": [{"data": [[1.60387092E12, 0.026315789473684254], [1.60387062E12, 0.20048309178743967], [1.6038711E12, 0.02876480541455164], [1.60387104E12, 0.02134646962233167], [1.60387074E12, 0.022807017543859616], [1.60387068E12, 0.020833333333333322], [1.60387116E12, 0.0793650793650794], [1.60387086E12, 0.0299625468164794], [1.6038708E12, 0.025134649910233436], [1.60387098E12, 0.01929824561403508]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387116E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 195.0, "minX": 1.60387062E12, "maxY": 6635.0, "series": [{"data": [[1.60387092E12, 6635.0], [1.60387062E12, 6363.0], [1.6038711E12, 3494.0], [1.60387104E12, 3652.0], [1.60387074E12, 5191.0], [1.60387068E12, 4095.0], [1.60387116E12, 4390.0], [1.60387086E12, 5219.0], [1.6038708E12, 3559.0], [1.60387098E12, 4733.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60387092E12, 231.7969998729229], [1.60387062E12, 219.20499970316888], [1.6038711E12, 225.6559997177124], [1.60387104E12, 208.48999985456467], [1.60387074E12, 223.13899986386298], [1.60387068E12, 216.6249998509884], [1.60387116E12, 325.4899991393089], [1.60387086E12, 226.81499987244607], [1.6038708E12, 225.02199986696243], [1.60387098E12, 210.13899986386298]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60387092E12, 232.83010015249252], [1.60387062E12, 220.0], [1.6038711E12, 226.72160011291504], [1.60387104E12, 209.07800011634828], [1.60387074E12, 223.6529000544548], [1.60387068E12, 217.56250017881393], [1.60387116E12, 328.7390003442764], [1.60387086E12, 227.0], [1.6038708E12, 225.52420005321503], [1.60387098E12, 210.6529000544548]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60387092E12, 232.19049980938433], [1.60387062E12, 219.82749985158443], [1.6038711E12, 226.2479998588562], [1.60387104E12, 208.79499992728233], [1.60387074E12, 223.4244999319315], [1.60387068E12, 216.9374999254942], [1.60387116E12, 327.29499956965446], [1.60387086E12, 227.0], [1.6038708E12, 225.30099993348122], [1.60387098E12, 210.4244999319315]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60387092E12, 213.0], [1.60387062E12, 207.0], [1.6038711E12, 199.0], [1.60387104E12, 201.0], [1.60387074E12, 211.0], [1.60387068E12, 210.0], [1.60387116E12, 312.0], [1.60387086E12, 199.0], [1.6038708E12, 212.0], [1.60387098E12, 195.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60387092E12, 1005.5], [1.60387062E12, 1066.0], [1.6038711E12, 820.0], [1.60387104E12, 752.0], [1.60387074E12, 729.0], [1.60387068E12, 794.0], [1.60387116E12, 1188.0], [1.60387086E12, 971.5], [1.6038708E12, 992.0], [1.60387098E12, 800.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387116E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 441.5, "minX": 1.0, "maxY": 1650.0, "series": [{"data": [[2.0, 1517.5], [3.0, 1453.0], [4.0, 1650.0], [5.0, 1281.0], [6.0, 1279.5], [7.0, 1163.0], [8.0, 1165.5], [9.0, 1057.0], [10.0, 888.0], [11.0, 840.0], [12.0, 921.0], [13.0, 744.0], [14.0, 646.0], [15.0, 508.0], [16.0, 503.0], [1.0, 1554.0], [17.0, 492.0], [18.0, 485.0], [19.0, 472.0], [20.0, 496.5], [21.0, 460.0], [23.0, 459.5], [24.0, 441.5], [25.0, 447.0], [26.0, 449.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 441.5, "minX": 1.0, "maxY": 1642.0, "series": [{"data": [[2.0, 1517.0], [3.0, 1442.0], [4.0, 1642.0], [5.0, 1280.0], [6.0, 1274.0], [7.0, 1161.5], [8.0, 1163.0], [9.0, 1056.0], [10.0, 886.5], [11.0, 837.0], [12.0, 919.5], [13.0, 740.0], [14.0, 646.0], [15.0, 508.0], [16.0, 503.0], [1.0, 1553.0], [17.0, 491.5], [18.0, 485.0], [19.0, 472.0], [20.0, 496.5], [21.0, 459.0], [23.0, 459.5], [24.0, 441.5], [25.0, 447.0], [26.0, 449.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.9833333333333334, "minX": 1.60387062E12, "maxY": 10.4, "series": [{"data": [[1.60387092E12, 8.866666666666667], [1.60387062E12, 7.066666666666666], [1.6038711E12, 9.85], [1.60387104E12, 10.15], [1.60387074E12, 9.5], [1.60387068E12, 10.4], [1.60387116E12, 2.9833333333333334], [1.60387086E12, 8.9], [1.6038708E12, 9.283333333333333], [1.60387098E12, 9.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387116E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.15, "minX": 1.60387062E12, "maxY": 10.4, "series": [{"data": [[1.60387092E12, 8.866666666666667], [1.60387062E12, 6.9], [1.6038711E12, 9.85], [1.60387104E12, 10.15], [1.60387074E12, 9.5], [1.60387068E12, 10.4], [1.60387116E12, 3.15], [1.60387086E12, 8.9], [1.6038708E12, 9.283333333333333], [1.60387098E12, 9.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387116E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.15, "minX": 1.60387062E12, "maxY": 10.4, "series": [{"data": [[1.60387092E12, 8.866666666666667], [1.60387062E12, 6.9], [1.6038711E12, 9.85], [1.60387104E12, 10.15], [1.60387074E12, 9.5], [1.60387068E12, 10.4], [1.60387116E12, 3.15], [1.60387086E12, 8.9], [1.6038708E12, 9.283333333333333], [1.60387098E12, 9.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387116E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.15, "minX": 1.60387062E12, "maxY": 10.4, "series": [{"data": [[1.60387092E12, 8.866666666666667], [1.60387062E12, 6.9], [1.6038711E12, 9.85], [1.60387104E12, 10.15], [1.60387074E12, 9.5], [1.60387068E12, 10.4], [1.60387116E12, 3.15], [1.60387086E12, 8.9], [1.6038708E12, 9.283333333333333], [1.60387098E12, 9.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387116E12, "title": "Total Transactions Per Second"}},
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

