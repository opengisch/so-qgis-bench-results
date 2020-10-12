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
        data: {"result": {"minY": 187.0, "minX": 0.0, "maxY": 6957.0, "series": [{"data": [[0.0, 187.0], [0.1, 194.0], [0.2, 196.0], [0.3, 199.0], [0.4, 201.0], [0.5, 202.0], [0.6, 203.0], [0.7, 206.0], [0.8, 207.0], [0.9, 209.0], [1.0, 211.0], [1.1, 214.0], [1.2, 216.0], [1.3, 217.0], [1.4, 218.0], [1.5, 220.0], [1.6, 222.0], [1.7, 223.0], [1.8, 224.0], [1.9, 224.0], [2.0, 225.0], [2.1, 225.0], [2.2, 226.0], [2.3, 227.0], [2.4, 228.0], [2.5, 229.0], [2.6, 229.0], [2.7, 230.0], [2.8, 230.0], [2.9, 230.0], [3.0, 231.0], [3.1, 231.0], [3.2, 232.0], [3.3, 232.0], [3.4, 233.0], [3.5, 233.0], [3.6, 234.0], [3.7, 235.0], [3.8, 236.0], [3.9, 236.0], [4.0, 236.0], [4.1, 237.0], [4.2, 238.0], [4.3, 238.0], [4.4, 239.0], [4.5, 240.0], [4.6, 241.0], [4.7, 242.0], [4.8, 243.0], [4.9, 245.0], [5.0, 246.0], [5.1, 247.0], [5.2, 248.0], [5.3, 250.0], [5.4, 251.0], [5.5, 252.0], [5.6, 253.0], [5.7, 255.0], [5.8, 258.0], [5.9, 258.0], [6.0, 260.0], [6.1, 261.0], [6.2, 262.0], [6.3, 263.0], [6.4, 264.0], [6.5, 269.0], [6.6, 270.0], [6.7, 273.0], [6.8, 275.0], [6.9, 278.0], [7.0, 283.0], [7.1, 285.0], [7.2, 287.0], [7.3, 290.0], [7.4, 292.0], [7.5, 294.0], [7.6, 297.0], [7.7, 299.0], [7.8, 301.0], [7.9, 302.0], [8.0, 305.0], [8.1, 307.0], [8.2, 308.0], [8.3, 310.0], [8.4, 311.0], [8.5, 313.0], [8.6, 314.0], [8.7, 317.0], [8.8, 318.0], [8.9, 319.0], [9.0, 320.0], [9.1, 321.0], [9.2, 322.0], [9.3, 322.0], [9.4, 323.0], [9.5, 323.0], [9.6, 324.0], [9.7, 324.0], [9.8, 325.0], [9.9, 326.0], [10.0, 326.0], [10.1, 327.0], [10.2, 328.0], [10.3, 329.0], [10.4, 330.0], [10.5, 331.0], [10.6, 332.0], [10.7, 333.0], [10.8, 333.0], [10.9, 334.0], [11.0, 335.0], [11.1, 336.0], [11.2, 337.0], [11.3, 338.0], [11.4, 339.0], [11.5, 340.0], [11.6, 341.0], [11.7, 341.0], [11.8, 343.0], [11.9, 347.0], [12.0, 347.0], [12.1, 349.0], [12.2, 351.0], [12.3, 352.0], [12.4, 353.0], [12.5, 354.0], [12.6, 355.0], [12.7, 357.0], [12.8, 358.0], [12.9, 359.0], [13.0, 362.0], [13.1, 363.0], [13.2, 365.0], [13.3, 365.0], [13.4, 365.0], [13.5, 367.0], [13.6, 369.0], [13.7, 371.0], [13.8, 372.0], [13.9, 373.0], [14.0, 375.0], [14.1, 376.0], [14.2, 378.0], [14.3, 382.0], [14.4, 384.0], [14.5, 385.0], [14.6, 387.0], [14.7, 388.0], [14.8, 391.0], [14.9, 392.0], [15.0, 393.0], [15.1, 393.0], [15.2, 394.0], [15.3, 395.0], [15.4, 398.0], [15.5, 399.0], [15.6, 400.0], [15.7, 402.0], [15.8, 403.0], [15.9, 404.0], [16.0, 405.0], [16.1, 406.0], [16.2, 407.0], [16.3, 408.0], [16.4, 409.0], [16.5, 411.0], [16.6, 412.0], [16.7, 414.0], [16.8, 415.0], [16.9, 416.0], [17.0, 418.0], [17.1, 419.0], [17.2, 422.0], [17.3, 423.0], [17.4, 424.0], [17.5, 425.0], [17.6, 426.0], [17.7, 427.0], [17.8, 428.0], [17.9, 430.0], [18.0, 432.0], [18.1, 433.0], [18.2, 434.0], [18.3, 434.0], [18.4, 435.0], [18.5, 436.0], [18.6, 437.0], [18.7, 438.0], [18.8, 438.0], [18.9, 440.0], [19.0, 440.0], [19.1, 441.0], [19.2, 442.0], [19.3, 442.0], [19.4, 444.0], [19.5, 445.0], [19.6, 446.0], [19.7, 446.0], [19.8, 447.0], [19.9, 449.0], [20.0, 450.0], [20.1, 451.0], [20.2, 452.0], [20.3, 452.0], [20.4, 453.0], [20.5, 454.0], [20.6, 455.0], [20.7, 455.0], [20.8, 456.0], [20.9, 457.0], [21.0, 458.0], [21.1, 459.0], [21.2, 460.0], [21.3, 461.0], [21.4, 461.0], [21.5, 462.0], [21.6, 462.0], [21.7, 463.0], [21.8, 464.0], [21.9, 466.0], [22.0, 467.0], [22.1, 468.0], [22.2, 469.0], [22.3, 471.0], [22.4, 471.0], [22.5, 473.0], [22.6, 474.0], [22.7, 475.0], [22.8, 476.0], [22.9, 477.0], [23.0, 478.0], [23.1, 479.0], [23.2, 480.0], [23.3, 481.0], [23.4, 482.0], [23.5, 482.0], [23.6, 483.0], [23.7, 485.0], [23.8, 485.0], [23.9, 487.0], [24.0, 487.0], [24.1, 488.0], [24.2, 489.0], [24.3, 490.0], [24.4, 491.0], [24.5, 492.0], [24.6, 495.0], [24.7, 496.0], [24.8, 497.0], [24.9, 498.0], [25.0, 500.0], [25.1, 501.0], [25.2, 502.0], [25.3, 503.0], [25.4, 504.0], [25.5, 506.0], [25.6, 508.0], [25.7, 509.0], [25.8, 511.0], [25.9, 513.0], [26.0, 514.0], [26.1, 516.0], [26.2, 517.0], [26.3, 518.0], [26.4, 520.0], [26.5, 522.0], [26.6, 523.0], [26.7, 524.0], [26.8, 525.0], [26.9, 527.0], [27.0, 528.0], [27.1, 530.0], [27.2, 532.0], [27.3, 533.0], [27.4, 534.0], [27.5, 535.0], [27.6, 537.0], [27.7, 537.0], [27.8, 539.0], [27.9, 541.0], [28.0, 542.0], [28.1, 543.0], [28.2, 544.0], [28.3, 546.0], [28.4, 546.0], [28.5, 547.0], [28.6, 548.0], [28.7, 549.0], [28.8, 552.0], [28.9, 553.0], [29.0, 554.0], [29.1, 555.0], [29.2, 556.0], [29.3, 558.0], [29.4, 559.0], [29.5, 560.0], [29.6, 561.0], [29.7, 561.0], [29.8, 562.0], [29.9, 564.0], [30.0, 565.0], [30.1, 566.0], [30.2, 569.0], [30.3, 570.0], [30.4, 571.0], [30.5, 572.0], [30.6, 573.0], [30.7, 573.0], [30.8, 574.0], [30.9, 574.0], [31.0, 575.0], [31.1, 576.0], [31.2, 576.0], [31.3, 577.0], [31.4, 577.0], [31.5, 578.0], [31.6, 580.0], [31.7, 582.0], [31.8, 583.0], [31.9, 585.0], [32.0, 587.0], [32.1, 588.0], [32.2, 592.0], [32.3, 594.0], [32.4, 595.0], [32.5, 597.0], [32.6, 597.0], [32.7, 599.0], [32.8, 601.0], [32.9, 603.0], [33.0, 604.0], [33.1, 605.0], [33.2, 607.0], [33.3, 609.0], [33.4, 609.0], [33.5, 610.0], [33.6, 612.0], [33.7, 613.0], [33.8, 614.0], [33.9, 615.0], [34.0, 616.0], [34.1, 617.0], [34.2, 618.0], [34.3, 619.0], [34.4, 620.0], [34.5, 621.0], [34.6, 622.0], [34.7, 622.0], [34.8, 623.0], [34.9, 625.0], [35.0, 626.0], [35.1, 627.0], [35.2, 629.0], [35.3, 631.0], [35.4, 632.0], [35.5, 633.0], [35.6, 634.0], [35.7, 635.0], [35.8, 636.0], [35.9, 637.0], [36.0, 638.0], [36.1, 638.0], [36.2, 640.0], [36.3, 641.0], [36.4, 643.0], [36.5, 644.0], [36.6, 645.0], [36.7, 647.0], [36.8, 647.0], [36.9, 648.0], [37.0, 650.0], [37.1, 651.0], [37.2, 652.0], [37.3, 653.0], [37.4, 655.0], [37.5, 656.0], [37.6, 656.0], [37.7, 657.0], [37.8, 659.0], [37.9, 661.0], [38.0, 662.0], [38.1, 663.0], [38.2, 664.0], [38.3, 665.0], [38.4, 668.0], [38.5, 669.0], [38.6, 670.0], [38.7, 671.0], [38.8, 672.0], [38.9, 672.0], [39.0, 675.0], [39.1, 676.0], [39.2, 680.0], [39.3, 680.0], [39.4, 682.0], [39.5, 684.0], [39.6, 687.0], [39.7, 688.0], [39.8, 689.0], [39.9, 689.0], [40.0, 691.0], [40.1, 692.0], [40.2, 692.0], [40.3, 695.0], [40.4, 697.0], [40.5, 698.0], [40.6, 700.0], [40.7, 700.0], [40.8, 702.0], [40.9, 702.0], [41.0, 704.0], [41.1, 706.0], [41.2, 708.0], [41.3, 709.0], [41.4, 710.0], [41.5, 712.0], [41.6, 712.0], [41.7, 713.0], [41.8, 714.0], [41.9, 715.0], [42.0, 716.0], [42.1, 718.0], [42.2, 720.0], [42.3, 722.0], [42.4, 724.0], [42.5, 725.0], [42.6, 726.0], [42.7, 728.0], [42.8, 732.0], [42.9, 735.0], [43.0, 736.0], [43.1, 738.0], [43.2, 740.0], [43.3, 741.0], [43.4, 745.0], [43.5, 746.0], [43.6, 749.0], [43.7, 751.0], [43.8, 752.0], [43.9, 754.0], [44.0, 755.0], [44.1, 756.0], [44.2, 759.0], [44.3, 761.0], [44.4, 764.0], [44.5, 765.0], [44.6, 766.0], [44.7, 767.0], [44.8, 770.0], [44.9, 773.0], [45.0, 776.0], [45.1, 778.0], [45.2, 779.0], [45.3, 782.0], [45.4, 782.0], [45.5, 786.0], [45.6, 788.0], [45.7, 788.0], [45.8, 789.0], [45.9, 791.0], [46.0, 794.0], [46.1, 794.0], [46.2, 797.0], [46.3, 798.0], [46.4, 801.0], [46.5, 804.0], [46.6, 806.0], [46.7, 807.0], [46.8, 809.0], [46.9, 811.0], [47.0, 812.0], [47.1, 814.0], [47.2, 815.0], [47.3, 817.0], [47.4, 820.0], [47.5, 822.0], [47.6, 823.0], [47.7, 823.0], [47.8, 824.0], [47.9, 826.0], [48.0, 830.0], [48.1, 831.0], [48.2, 832.0], [48.3, 835.0], [48.4, 838.0], [48.5, 840.0], [48.6, 843.0], [48.7, 844.0], [48.8, 846.0], [48.9, 848.0], [49.0, 849.0], [49.1, 850.0], [49.2, 851.0], [49.3, 852.0], [49.4, 854.0], [49.5, 856.0], [49.6, 858.0], [49.7, 859.0], [49.8, 861.0], [49.9, 864.0], [50.0, 866.0], [50.1, 867.0], [50.2, 870.0], [50.3, 871.0], [50.4, 872.0], [50.5, 875.0], [50.6, 877.0], [50.7, 879.0], [50.8, 881.0], [50.9, 886.0], [51.0, 887.0], [51.1, 889.0], [51.2, 892.0], [51.3, 894.0], [51.4, 895.0], [51.5, 897.0], [51.6, 899.0], [51.7, 901.0], [51.8, 903.0], [51.9, 905.0], [52.0, 906.0], [52.1, 909.0], [52.2, 912.0], [52.3, 915.0], [52.4, 917.0], [52.5, 919.0], [52.6, 922.0], [52.7, 924.0], [52.8, 927.0], [52.9, 929.0], [53.0, 931.0], [53.1, 932.0], [53.2, 933.0], [53.3, 935.0], [53.4, 936.0], [53.5, 937.0], [53.6, 940.0], [53.7, 943.0], [53.8, 944.0], [53.9, 949.0], [54.0, 952.0], [54.1, 953.0], [54.2, 954.0], [54.3, 959.0], [54.4, 960.0], [54.5, 963.0], [54.6, 964.0], [54.7, 967.0], [54.8, 969.0], [54.9, 970.0], [55.0, 971.0], [55.1, 973.0], [55.2, 975.0], [55.3, 979.0], [55.4, 982.0], [55.5, 985.0], [55.6, 987.0], [55.7, 991.0], [55.8, 996.0], [55.9, 999.0], [56.0, 1001.0], [56.1, 1003.0], [56.2, 1004.0], [56.3, 1006.0], [56.4, 1009.0], [56.5, 1012.0], [56.6, 1015.0], [56.7, 1018.0], [56.8, 1021.0], [56.9, 1023.0], [57.0, 1025.0], [57.1, 1027.0], [57.2, 1029.0], [57.3, 1032.0], [57.4, 1035.0], [57.5, 1036.0], [57.6, 1037.0], [57.7, 1041.0], [57.8, 1042.0], [57.9, 1045.0], [58.0, 1048.0], [58.1, 1050.0], [58.2, 1052.0], [58.3, 1053.0], [58.4, 1054.0], [58.5, 1056.0], [58.6, 1057.0], [58.7, 1060.0], [58.8, 1062.0], [58.9, 1064.0], [59.0, 1067.0], [59.1, 1070.0], [59.2, 1072.0], [59.3, 1074.0], [59.4, 1079.0], [59.5, 1082.0], [59.6, 1085.0], [59.7, 1087.0], [59.8, 1088.0], [59.9, 1089.0], [60.0, 1090.0], [60.1, 1095.0], [60.2, 1098.0], [60.3, 1099.0], [60.4, 1100.0], [60.5, 1103.0], [60.6, 1105.0], [60.7, 1106.0], [60.8, 1109.0], [60.9, 1111.0], [61.0, 1118.0], [61.1, 1120.0], [61.2, 1122.0], [61.3, 1123.0], [61.4, 1124.0], [61.5, 1126.0], [61.6, 1128.0], [61.7, 1130.0], [61.8, 1132.0], [61.9, 1134.0], [62.0, 1138.0], [62.1, 1138.0], [62.2, 1142.0], [62.3, 1144.0], [62.4, 1146.0], [62.5, 1147.0], [62.6, 1151.0], [62.7, 1155.0], [62.8, 1158.0], [62.9, 1158.0], [63.0, 1162.0], [63.1, 1164.0], [63.2, 1165.0], [63.3, 1168.0], [63.4, 1169.0], [63.5, 1171.0], [63.6, 1174.0], [63.7, 1176.0], [63.8, 1178.0], [63.9, 1182.0], [64.0, 1185.0], [64.1, 1186.0], [64.2, 1188.0], [64.3, 1190.0], [64.4, 1191.0], [64.5, 1192.0], [64.6, 1193.0], [64.7, 1195.0], [64.8, 1196.0], [64.9, 1199.0], [65.0, 1200.0], [65.1, 1202.0], [65.2, 1203.0], [65.3, 1205.0], [65.4, 1207.0], [65.5, 1210.0], [65.6, 1212.0], [65.7, 1216.0], [65.8, 1217.0], [65.9, 1219.0], [66.0, 1221.0], [66.1, 1222.0], [66.2, 1224.0], [66.3, 1229.0], [66.4, 1232.0], [66.5, 1233.0], [66.6, 1234.0], [66.7, 1235.0], [66.8, 1238.0], [66.9, 1240.0], [67.0, 1242.0], [67.1, 1244.0], [67.2, 1247.0], [67.3, 1248.0], [67.4, 1250.0], [67.5, 1252.0], [67.6, 1254.0], [67.7, 1255.0], [67.8, 1256.0], [67.9, 1258.0], [68.0, 1260.0], [68.1, 1261.0], [68.2, 1262.0], [68.3, 1265.0], [68.4, 1266.0], [68.5, 1268.0], [68.6, 1270.0], [68.7, 1271.0], [68.8, 1274.0], [68.9, 1277.0], [69.0, 1279.0], [69.1, 1280.0], [69.2, 1281.0], [69.3, 1283.0], [69.4, 1285.0], [69.5, 1287.0], [69.6, 1288.0], [69.7, 1292.0], [69.8, 1293.0], [69.9, 1295.0], [70.0, 1298.0], [70.1, 1301.0], [70.2, 1303.0], [70.3, 1305.0], [70.4, 1306.0], [70.5, 1309.0], [70.6, 1313.0], [70.7, 1316.0], [70.8, 1319.0], [70.9, 1321.0], [71.0, 1322.0], [71.1, 1326.0], [71.2, 1330.0], [71.3, 1333.0], [71.4, 1334.0], [71.5, 1335.0], [71.6, 1337.0], [71.7, 1339.0], [71.8, 1342.0], [71.9, 1345.0], [72.0, 1351.0], [72.1, 1354.0], [72.2, 1357.0], [72.3, 1361.0], [72.4, 1362.0], [72.5, 1364.0], [72.6, 1368.0], [72.7, 1370.0], [72.8, 1373.0], [72.9, 1376.0], [73.0, 1380.0], [73.1, 1382.0], [73.2, 1384.0], [73.3, 1386.0], [73.4, 1387.0], [73.5, 1388.0], [73.6, 1391.0], [73.7, 1395.0], [73.8, 1396.0], [73.9, 1399.0], [74.0, 1402.0], [74.1, 1406.0], [74.2, 1407.0], [74.3, 1409.0], [74.4, 1411.0], [74.5, 1412.0], [74.6, 1414.0], [74.7, 1420.0], [74.8, 1425.0], [74.9, 1426.0], [75.0, 1428.0], [75.1, 1430.0], [75.2, 1433.0], [75.3, 1439.0], [75.4, 1440.0], [75.5, 1445.0], [75.6, 1448.0], [75.7, 1449.0], [75.8, 1455.0], [75.9, 1457.0], [76.0, 1458.0], [76.1, 1460.0], [76.2, 1462.0], [76.3, 1464.0], [76.4, 1466.0], [76.5, 1466.0], [76.6, 1471.0], [76.7, 1473.0], [76.8, 1475.0], [76.9, 1477.0], [77.0, 1479.0], [77.1, 1482.0], [77.2, 1484.0], [77.3, 1486.0], [77.4, 1488.0], [77.5, 1491.0], [77.6, 1492.0], [77.7, 1494.0], [77.8, 1496.0], [77.9, 1500.0], [78.0, 1504.0], [78.1, 1506.0], [78.2, 1508.0], [78.3, 1511.0], [78.4, 1513.0], [78.5, 1516.0], [78.6, 1520.0], [78.7, 1522.0], [78.8, 1524.0], [78.9, 1525.0], [79.0, 1528.0], [79.1, 1531.0], [79.2, 1533.0], [79.3, 1537.0], [79.4, 1539.0], [79.5, 1541.0], [79.6, 1544.0], [79.7, 1547.0], [79.8, 1549.0], [79.9, 1551.0], [80.0, 1554.0], [80.1, 1556.0], [80.2, 1558.0], [80.3, 1560.0], [80.4, 1562.0], [80.5, 1566.0], [80.6, 1570.0], [80.7, 1573.0], [80.8, 1576.0], [80.9, 1579.0], [81.0, 1581.0], [81.1, 1584.0], [81.2, 1585.0], [81.3, 1588.0], [81.4, 1590.0], [81.5, 1593.0], [81.6, 1594.0], [81.7, 1599.0], [81.8, 1602.0], [81.9, 1603.0], [82.0, 1607.0], [82.1, 1611.0], [82.2, 1613.0], [82.3, 1616.0], [82.4, 1620.0], [82.5, 1624.0], [82.6, 1629.0], [82.7, 1632.0], [82.8, 1634.0], [82.9, 1640.0], [83.0, 1642.0], [83.1, 1644.0], [83.2, 1649.0], [83.3, 1653.0], [83.4, 1656.0], [83.5, 1661.0], [83.6, 1664.0], [83.7, 1670.0], [83.8, 1674.0], [83.9, 1675.0], [84.0, 1676.0], [84.1, 1680.0], [84.2, 1683.0], [84.3, 1687.0], [84.4, 1688.0], [84.5, 1694.0], [84.6, 1697.0], [84.7, 1698.0], [84.8, 1703.0], [84.9, 1708.0], [85.0, 1711.0], [85.1, 1714.0], [85.2, 1715.0], [85.3, 1717.0], [85.4, 1719.0], [85.5, 1721.0], [85.6, 1724.0], [85.7, 1727.0], [85.8, 1731.0], [85.9, 1733.0], [86.0, 1737.0], [86.1, 1742.0], [86.2, 1746.0], [86.3, 1750.0], [86.4, 1757.0], [86.5, 1762.0], [86.6, 1765.0], [86.7, 1768.0], [86.8, 1770.0], [86.9, 1774.0], [87.0, 1777.0], [87.1, 1782.0], [87.2, 1783.0], [87.3, 1786.0], [87.4, 1794.0], [87.5, 1799.0], [87.6, 1806.0], [87.7, 1809.0], [87.8, 1816.0], [87.9, 1819.0], [88.0, 1824.0], [88.1, 1828.0], [88.2, 1833.0], [88.3, 1843.0], [88.4, 1845.0], [88.5, 1853.0], [88.6, 1858.0], [88.7, 1861.0], [88.8, 1869.0], [88.9, 1874.0], [89.0, 1882.0], [89.1, 1893.0], [89.2, 1896.0], [89.3, 1900.0], [89.4, 1907.0], [89.5, 1913.0], [89.6, 1917.0], [89.7, 1923.0], [89.8, 1927.0], [89.9, 1939.0], [90.0, 1942.0], [90.1, 1954.0], [90.2, 1958.0], [90.3, 1966.0], [90.4, 1971.0], [90.5, 1978.0], [90.6, 1985.0], [90.7, 1990.0], [90.8, 2004.0], [90.9, 2010.0], [91.0, 2015.0], [91.1, 2024.0], [91.2, 2026.0], [91.3, 2030.0], [91.4, 2035.0], [91.5, 2042.0], [91.6, 2052.0], [91.7, 2058.0], [91.8, 2061.0], [91.9, 2073.0], [92.0, 2081.0], [92.1, 2089.0], [92.2, 2098.0], [92.3, 2101.0], [92.4, 2111.0], [92.5, 2122.0], [92.6, 2130.0], [92.7, 2138.0], [92.8, 2145.0], [92.9, 2160.0], [93.0, 2171.0], [93.1, 2184.0], [93.2, 2196.0], [93.3, 2210.0], [93.4, 2221.0], [93.5, 2232.0], [93.6, 2243.0], [93.7, 2261.0], [93.8, 2278.0], [93.9, 2282.0], [94.0, 2290.0], [94.1, 2298.0], [94.2, 2319.0], [94.3, 2331.0], [94.4, 2342.0], [94.5, 2354.0], [94.6, 2365.0], [94.7, 2378.0], [94.8, 2392.0], [94.9, 2409.0], [95.0, 2419.0], [95.1, 2437.0], [95.2, 2451.0], [95.3, 2457.0], [95.4, 2471.0], [95.5, 2486.0], [95.6, 2492.0], [95.7, 2509.0], [95.8, 2527.0], [95.9, 2548.0], [96.0, 2559.0], [96.1, 2573.0], [96.2, 2586.0], [96.3, 2604.0], [96.4, 2620.0], [96.5, 2637.0], [96.6, 2661.0], [96.7, 2675.0], [96.8, 2696.0], [96.9, 2725.0], [97.0, 2744.0], [97.1, 2768.0], [97.2, 2788.0], [97.3, 2808.0], [97.4, 2825.0], [97.5, 2840.0], [97.6, 2876.0], [97.7, 2901.0], [97.8, 2919.0], [97.9, 2936.0], [98.0, 2948.0], [98.1, 2977.0], [98.2, 2992.0], [98.3, 3048.0], [98.4, 3108.0], [98.5, 3185.0], [98.6, 3218.0], [98.7, 3221.0], [98.8, 3289.0], [98.9, 3339.0], [99.0, 3398.0], [99.1, 3489.0], [99.2, 3741.0], [99.3, 3876.0], [99.4, 4000.0], [99.5, 4291.0], [99.6, 4516.0], [99.7, 4977.0], [99.8, 5429.0], [99.9, 5858.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 491.0, "series": [{"data": [[600.0, 408.0], [700.0, 299.0], [800.0, 276.0], [900.0, 223.0], [1000.0, 228.0], [1100.0, 240.0], [1200.0, 262.0], [1300.0, 202.0], [1400.0, 205.0], [1500.0, 201.0], [1600.0, 157.0], [1700.0, 143.0], [1800.0, 92.0], [1900.0, 78.0], [2000.0, 75.0], [2100.0, 53.0], [2200.0, 44.0], [2300.0, 38.0], [2400.0, 42.0], [2500.0, 32.0], [2600.0, 29.0], [2800.0, 21.0], [2700.0, 24.0], [2900.0, 27.0], [3000.0, 9.0], [3100.0, 9.0], [3200.0, 14.0], [3300.0, 10.0], [3400.0, 5.0], [3500.0, 1.0], [3700.0, 4.0], [3600.0, 2.0], [3800.0, 5.0], [3900.0, 2.0], [4000.0, 4.0], [4300.0, 3.0], [4200.0, 4.0], [4500.0, 1.0], [4600.0, 1.0], [4700.0, 2.0], [4900.0, 2.0], [5100.0, 1.0], [5200.0, 2.0], [5300.0, 1.0], [5400.0, 1.0], [5500.0, 1.0], [5600.0, 1.0], [5700.0, 1.0], [5800.0, 2.0], [5900.0, 1.0], [6200.0, 1.0], [6500.0, 1.0], [6400.0, 1.0], [6900.0, 1.0], [100.0, 17.0], [200.0, 384.0], [300.0, 404.0], [400.0, 491.0], [500.0, 402.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1145.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2746.0, "series": [{"data": [[0.0, 1299.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2746.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1145.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.916974169741698, "minX": 1.60248684E12, "maxY": 10.0, "series": [{"data": [[1.60248684E12, 10.0], [1.60248732E12, 10.0], [1.60248702E12, 10.0], [1.60248696E12, 10.0], [1.60248714E12, 10.0], [1.60248708E12, 10.0], [1.60248726E12, 10.0], [1.6024872E12, 10.0], [1.60248738E12, 9.916974169741698], [1.6024869E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248738E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 704.0, "minX": 1.0, "maxY": 2792.0, "series": [{"data": [[8.0, 704.0], [4.0, 2032.0], [2.0, 2792.0], [1.0, 2352.0], [9.0, 1924.0], [10.0, 1050.4298397992625], [5.0, 738.0], [6.0, 982.0], [3.0, 1913.0], [7.0, 754.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1051.3425818882426]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 487.3333333333333, "minX": 1.60248684E12, "maxY": 3146931.3833333333, "series": [{"data": [[1.60248684E12, 393949.11666666664], [1.60248732E12, 2713261.45], [1.60248702E12, 3146931.3833333333], [1.60248696E12, 2267458.1666666665], [1.60248714E12, 2580416.5833333335], [1.60248708E12, 2762978.4833333334], [1.60248726E12, 3017633.6333333333], [1.6024872E12, 2130680.783333333], [1.60248738E12, 2263692.933333333], [1.6024869E12, 2695690.066666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60248684E12, 487.3333333333333], [1.60248732E12, 4548.783333333334], [1.60248702E12, 4562.25], [1.60248696E12, 4228.85], [1.60248714E12, 3541.9333333333334], [1.60248708E12, 4614.333333333333], [1.60248726E12, 4568.483333333334], [1.6024872E12, 3985.6666666666665], [1.60248738E12, 4086.5333333333333], [1.6024869E12, 3953.1666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248738E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 970.2003257328986, "minX": 1.60248684E12, "maxY": 1458.046875, "series": [{"data": [[1.60248684E12, 1458.046875], [1.60248732E12, 1004.8344481605361], [1.60248702E12, 988.9800664451824], [1.60248696E12, 1034.447140381283], [1.60248714E12, 1248.2427385892122], [1.60248708E12, 988.3513957307063], [1.60248726E12, 970.2003257328986], [1.6024872E12, 1089.3634719710676], [1.60248738E12, 1046.0055350553503], [1.6024869E12, 1095.4553734061926]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248738E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 968.3273615635187, "minX": 1.60248684E12, "maxY": 1455.15625, "series": [{"data": [[1.60248684E12, 1455.15625], [1.60248732E12, 1003.2207357859534], [1.60248702E12, 986.6245847176081], [1.60248696E12, 1032.5528596187175], [1.60248714E12, 1245.7842323651448], [1.60248708E12, 986.2495894909691], [1.60248726E12, 968.3273615635187], [1.6024872E12, 1088.0198915009055], [1.60248738E12, 1044.5756457564573], [1.6024869E12, 1093.3442622950834]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248738E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00922509225092251, "minX": 1.60248684E12, "maxY": 1.5312500000000007, "series": [{"data": [[1.60248684E12, 1.5312500000000007], [1.60248732E12, 0.015050167224080264], [1.60248702E12, 0.02159468438538206], [1.60248696E12, 0.020797227036395142], [1.60248714E12, 0.022821576763485472], [1.60248708E12, 0.019704433497536946], [1.60248726E12, 0.022801302931596084], [1.6024872E12, 0.01989150090415913], [1.60248738E12, 0.00922509225092251], [1.6024869E12, 0.018214936247723138]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248738E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 187.0, "minX": 1.60248684E12, "maxY": 6957.0, "series": [{"data": [[1.60248684E12, 4314.0], [1.60248732E12, 3283.0], [1.60248702E12, 4754.0], [1.60248696E12, 5228.0], [1.60248714E12, 6561.0], [1.60248708E12, 5979.0], [1.60248726E12, 3295.0], [1.6024872E12, 6957.0], [1.60248738E12, 4681.0], [1.6024869E12, 5843.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60248684E12, 225.0], [1.60248732E12, 207.78199971437454], [1.60248702E12, 204.4269998562336], [1.60248696E12, 223.0], [1.60248714E12, 234.04099965453148], [1.60248708E12, 202.48999985456467], [1.60248726E12, 194.53499985337257], [1.6024872E12, 210.95799960374833], [1.60248738E12, 218.43499935269355], [1.6024869E12, 223.94999986886978]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60248684E12, 225.0], [1.60248732E12, 208.86020011425018], [1.60248702E12, 204.96970005750657], [1.60248696E12, 223.0], [1.60248714E12, 235.3451001381874], [1.60248708E12, 203.0], [1.60248726E12, 195.26550017595292], [1.6024872E12, 211.48460005283357], [1.60248738E12, 219.0], [1.6024869E12, 224.89000010490417]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60248684E12, 225.0], [1.60248732E12, 208.38099985718728], [1.60248702E12, 204.7284999281168], [1.60248696E12, 223.0], [1.60248714E12, 234.76549982726573], [1.60248708E12, 202.79499992728233], [1.60248726E12, 194.8424999266863], [1.6024872E12, 211.26299993395804], [1.60248738E12, 219.0], [1.6024869E12, 224.44999986886978]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60248684E12, 225.0], [1.60248732E12, 198.0], [1.60248702E12, 196.0], [1.60248696E12, 203.0], [1.60248714E12, 228.0], [1.60248708E12, 192.0], [1.60248726E12, 187.0], [1.6024872E12, 194.0], [1.60248738E12, 200.0], [1.6024869E12, 196.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60248684E12, 887.5], [1.60248732E12, 871.0], [1.60248702E12, 725.0], [1.60248696E12, 776.0], [1.60248714E12, 1044.0], [1.60248708E12, 755.0], [1.60248726E12, 719.0], [1.6024872E12, 935.0], [1.60248738E12, 808.5], [1.6024869E12, 951.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248738E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 391.0, "minX": 1.0, "maxY": 2572.0, "series": [{"data": [[2.0, 2572.0], [3.0, 1522.0], [4.0, 1551.0], [5.0, 1152.0], [6.0, 1300.5], [7.0, 1218.0], [8.0, 1096.0], [9.0, 1079.0], [10.0, 931.5], [11.0, 890.0], [12.0, 738.0], [13.0, 605.5], [14.0, 711.5], [15.0, 572.0], [16.0, 528.5], [1.0, 2098.0], [17.0, 478.5], [18.0, 475.5], [19.0, 449.0], [20.0, 454.0], [21.0, 477.5], [22.0, 447.5], [23.0, 391.0], [24.0, 452.5], [25.0, 441.0], [26.0, 429.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 391.0, "minX": 1.0, "maxY": 2566.0, "series": [{"data": [[2.0, 2566.0], [3.0, 1519.0], [4.0, 1543.5], [5.0, 1144.0], [6.0, 1298.0], [7.0, 1215.0], [8.0, 1094.0], [9.0, 1077.0], [10.0, 930.0], [11.0, 890.0], [12.0, 736.5], [13.0, 604.0], [14.0, 711.5], [15.0, 570.0], [16.0, 528.5], [1.0, 2093.0], [17.0, 478.5], [18.0, 475.5], [19.0, 449.0], [20.0, 453.0], [21.0, 477.5], [22.0, 446.5], [23.0, 391.0], [24.0, 452.5], [25.0, 441.0], [26.0, 429.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.60248684E12, "maxY": 10.233333333333333, "series": [{"data": [[1.60248684E12, 1.2333333333333334], [1.60248732E12, 9.966666666666667], [1.60248702E12, 10.033333333333333], [1.60248696E12, 9.616666666666667], [1.60248714E12, 8.033333333333333], [1.60248708E12, 10.15], [1.60248726E12, 10.233333333333333], [1.6024872E12, 9.216666666666667], [1.60248738E12, 8.866666666666667], [1.6024869E12, 9.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248738E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0666666666666667, "minX": 1.60248684E12, "maxY": 10.233333333333333, "series": [{"data": [[1.60248684E12, 1.0666666666666667], [1.60248732E12, 9.966666666666667], [1.60248702E12, 10.033333333333333], [1.60248696E12, 9.616666666666667], [1.60248714E12, 8.033333333333333], [1.60248708E12, 10.15], [1.60248726E12, 10.233333333333333], [1.6024872E12, 9.216666666666667], [1.60248738E12, 9.033333333333333], [1.6024869E12, 9.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248738E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0666666666666667, "minX": 1.60248684E12, "maxY": 10.233333333333333, "series": [{"data": [[1.60248684E12, 1.0666666666666667], [1.60248732E12, 9.966666666666667], [1.60248702E12, 10.033333333333333], [1.60248696E12, 9.616666666666667], [1.60248714E12, 8.033333333333333], [1.60248708E12, 10.15], [1.60248726E12, 10.233333333333333], [1.6024872E12, 9.216666666666667], [1.60248738E12, 9.033333333333333], [1.6024869E12, 9.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248738E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0666666666666667, "minX": 1.60248684E12, "maxY": 10.233333333333333, "series": [{"data": [[1.60248684E12, 1.0666666666666667], [1.60248732E12, 9.966666666666667], [1.60248702E12, 10.033333333333333], [1.60248696E12, 9.616666666666667], [1.60248714E12, 8.033333333333333], [1.60248708E12, 10.15], [1.60248726E12, 10.233333333333333], [1.6024872E12, 9.216666666666667], [1.60248738E12, 9.033333333333333], [1.6024869E12, 9.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248738E12, "title": "Total Transactions Per Second"}},
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

