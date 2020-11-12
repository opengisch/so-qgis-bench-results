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
        data: {"result": {"minY": 192.0, "minX": 0.0, "maxY": 6660.0, "series": [{"data": [[0.0, 192.0], [0.1, 195.0], [0.2, 197.0], [0.3, 199.0], [0.4, 201.0], [0.5, 204.0], [0.6, 206.0], [0.7, 207.0], [0.8, 209.0], [0.9, 210.0], [1.0, 211.0], [1.1, 213.0], [1.2, 214.0], [1.3, 215.0], [1.4, 216.0], [1.5, 217.0], [1.6, 219.0], [1.7, 221.0], [1.8, 222.0], [1.9, 224.0], [2.0, 224.0], [2.1, 225.0], [2.2, 225.0], [2.3, 226.0], [2.4, 227.0], [2.5, 227.0], [2.6, 228.0], [2.7, 228.0], [2.8, 229.0], [2.9, 229.0], [3.0, 230.0], [3.1, 230.0], [3.2, 231.0], [3.3, 233.0], [3.4, 233.0], [3.5, 234.0], [3.6, 234.0], [3.7, 235.0], [3.8, 236.0], [3.9, 237.0], [4.0, 237.0], [4.1, 238.0], [4.2, 238.0], [4.3, 239.0], [4.4, 240.0], [4.5, 241.0], [4.6, 242.0], [4.7, 242.0], [4.8, 243.0], [4.9, 243.0], [5.0, 244.0], [5.1, 245.0], [5.2, 245.0], [5.3, 246.0], [5.4, 247.0], [5.5, 247.0], [5.6, 248.0], [5.7, 249.0], [5.8, 250.0], [5.9, 251.0], [6.0, 253.0], [6.1, 254.0], [6.2, 255.0], [6.3, 256.0], [6.4, 258.0], [6.5, 258.0], [6.6, 260.0], [6.7, 261.0], [6.8, 263.0], [6.9, 264.0], [7.0, 266.0], [7.1, 269.0], [7.2, 271.0], [7.3, 275.0], [7.4, 278.0], [7.5, 280.0], [7.6, 281.0], [7.7, 282.0], [7.8, 284.0], [7.9, 286.0], [8.0, 286.0], [8.1, 288.0], [8.2, 290.0], [8.3, 291.0], [8.4, 293.0], [8.5, 294.0], [8.6, 296.0], [8.7, 297.0], [8.8, 299.0], [8.9, 301.0], [9.0, 303.0], [9.1, 304.0], [9.2, 305.0], [9.3, 307.0], [9.4, 308.0], [9.5, 309.0], [9.6, 310.0], [9.7, 313.0], [9.8, 314.0], [9.9, 316.0], [10.0, 318.0], [10.1, 318.0], [10.2, 319.0], [10.3, 320.0], [10.4, 321.0], [10.5, 322.0], [10.6, 322.0], [10.7, 323.0], [10.8, 324.0], [10.9, 325.0], [11.0, 326.0], [11.1, 326.0], [11.2, 327.0], [11.3, 329.0], [11.4, 329.0], [11.5, 330.0], [11.6, 330.0], [11.7, 332.0], [11.8, 333.0], [11.9, 334.0], [12.0, 335.0], [12.1, 335.0], [12.2, 336.0], [12.3, 337.0], [12.4, 338.0], [12.5, 339.0], [12.6, 339.0], [12.7, 340.0], [12.8, 341.0], [12.9, 342.0], [13.0, 342.0], [13.1, 343.0], [13.2, 344.0], [13.3, 345.0], [13.4, 347.0], [13.5, 348.0], [13.6, 352.0], [13.7, 353.0], [13.8, 355.0], [13.9, 356.0], [14.0, 357.0], [14.1, 358.0], [14.2, 359.0], [14.3, 361.0], [14.4, 362.0], [14.5, 364.0], [14.6, 365.0], [14.7, 368.0], [14.8, 371.0], [14.9, 372.0], [15.0, 373.0], [15.1, 374.0], [15.2, 375.0], [15.3, 377.0], [15.4, 378.0], [15.5, 379.0], [15.6, 379.0], [15.7, 381.0], [15.8, 384.0], [15.9, 387.0], [16.0, 389.0], [16.1, 391.0], [16.2, 392.0], [16.3, 393.0], [16.4, 395.0], [16.5, 396.0], [16.6, 397.0], [16.7, 398.0], [16.8, 399.0], [16.9, 400.0], [17.0, 401.0], [17.1, 402.0], [17.2, 404.0], [17.3, 405.0], [17.4, 407.0], [17.5, 409.0], [17.6, 410.0], [17.7, 411.0], [17.8, 412.0], [17.9, 414.0], [18.0, 415.0], [18.1, 417.0], [18.2, 418.0], [18.3, 419.0], [18.4, 420.0], [18.5, 420.0], [18.6, 421.0], [18.7, 422.0], [18.8, 423.0], [18.9, 425.0], [19.0, 425.0], [19.1, 427.0], [19.2, 428.0], [19.3, 429.0], [19.4, 429.0], [19.5, 431.0], [19.6, 432.0], [19.7, 433.0], [19.8, 433.0], [19.9, 435.0], [20.0, 436.0], [20.1, 437.0], [20.2, 437.0], [20.3, 438.0], [20.4, 439.0], [20.5, 441.0], [20.6, 442.0], [20.7, 444.0], [20.8, 446.0], [20.9, 447.0], [21.0, 448.0], [21.1, 449.0], [21.2, 450.0], [21.3, 451.0], [21.4, 452.0], [21.5, 453.0], [21.6, 454.0], [21.7, 454.0], [21.8, 455.0], [21.9, 456.0], [22.0, 457.0], [22.1, 459.0], [22.2, 460.0], [22.3, 461.0], [22.4, 462.0], [22.5, 463.0], [22.6, 464.0], [22.7, 465.0], [22.8, 466.0], [22.9, 466.0], [23.0, 467.0], [23.1, 467.0], [23.2, 469.0], [23.3, 470.0], [23.4, 471.0], [23.5, 471.0], [23.6, 473.0], [23.7, 475.0], [23.8, 476.0], [23.9, 476.0], [24.0, 477.0], [24.1, 478.0], [24.2, 479.0], [24.3, 480.0], [24.4, 481.0], [24.5, 482.0], [24.6, 483.0], [24.7, 484.0], [24.8, 484.0], [24.9, 485.0], [25.0, 487.0], [25.1, 488.0], [25.2, 488.0], [25.3, 489.0], [25.4, 490.0], [25.5, 490.0], [25.6, 491.0], [25.7, 491.0], [25.8, 492.0], [25.9, 493.0], [26.0, 494.0], [26.1, 496.0], [26.2, 497.0], [26.3, 499.0], [26.4, 502.0], [26.5, 503.0], [26.6, 505.0], [26.7, 505.0], [26.8, 506.0], [26.9, 507.0], [27.0, 508.0], [27.1, 510.0], [27.2, 511.0], [27.3, 513.0], [27.4, 515.0], [27.5, 516.0], [27.6, 516.0], [27.7, 518.0], [27.8, 518.0], [27.9, 520.0], [28.0, 522.0], [28.1, 524.0], [28.2, 525.0], [28.3, 527.0], [28.4, 532.0], [28.5, 533.0], [28.6, 535.0], [28.7, 536.0], [28.8, 536.0], [28.9, 537.0], [29.0, 539.0], [29.1, 540.0], [29.2, 543.0], [29.3, 544.0], [29.4, 545.0], [29.5, 548.0], [29.6, 549.0], [29.7, 551.0], [29.8, 552.0], [29.9, 554.0], [30.0, 556.0], [30.1, 559.0], [30.2, 560.0], [30.3, 561.0], [30.4, 563.0], [30.5, 565.0], [30.6, 566.0], [30.7, 568.0], [30.8, 569.0], [30.9, 570.0], [31.0, 571.0], [31.1, 573.0], [31.2, 573.0], [31.3, 574.0], [31.4, 575.0], [31.5, 576.0], [31.6, 577.0], [31.7, 579.0], [31.8, 580.0], [31.9, 582.0], [32.0, 583.0], [32.1, 585.0], [32.2, 586.0], [32.3, 587.0], [32.4, 588.0], [32.5, 591.0], [32.6, 592.0], [32.7, 593.0], [32.8, 594.0], [32.9, 596.0], [33.0, 596.0], [33.1, 599.0], [33.2, 600.0], [33.3, 601.0], [33.4, 602.0], [33.5, 603.0], [33.6, 603.0], [33.7, 605.0], [33.8, 606.0], [33.9, 608.0], [34.0, 609.0], [34.1, 610.0], [34.2, 611.0], [34.3, 613.0], [34.4, 614.0], [34.5, 616.0], [34.6, 617.0], [34.7, 618.0], [34.8, 620.0], [34.9, 621.0], [35.0, 622.0], [35.1, 624.0], [35.2, 626.0], [35.3, 628.0], [35.4, 630.0], [35.5, 630.0], [35.6, 631.0], [35.7, 633.0], [35.8, 635.0], [35.9, 637.0], [36.0, 638.0], [36.1, 639.0], [36.2, 640.0], [36.3, 642.0], [36.4, 645.0], [36.5, 646.0], [36.6, 647.0], [36.7, 648.0], [36.8, 650.0], [36.9, 651.0], [37.0, 653.0], [37.1, 654.0], [37.2, 655.0], [37.3, 656.0], [37.4, 658.0], [37.5, 660.0], [37.6, 661.0], [37.7, 663.0], [37.8, 664.0], [37.9, 665.0], [38.0, 666.0], [38.1, 667.0], [38.2, 668.0], [38.3, 669.0], [38.4, 670.0], [38.5, 671.0], [38.6, 672.0], [38.7, 672.0], [38.8, 673.0], [38.9, 675.0], [39.0, 677.0], [39.1, 680.0], [39.2, 681.0], [39.3, 683.0], [39.4, 684.0], [39.5, 686.0], [39.6, 688.0], [39.7, 689.0], [39.8, 691.0], [39.9, 692.0], [40.0, 693.0], [40.1, 694.0], [40.2, 696.0], [40.3, 697.0], [40.4, 698.0], [40.5, 700.0], [40.6, 703.0], [40.7, 704.0], [40.8, 706.0], [40.9, 708.0], [41.0, 710.0], [41.1, 710.0], [41.2, 712.0], [41.3, 714.0], [41.4, 715.0], [41.5, 716.0], [41.6, 717.0], [41.7, 717.0], [41.8, 720.0], [41.9, 722.0], [42.0, 723.0], [42.1, 725.0], [42.2, 727.0], [42.3, 728.0], [42.4, 730.0], [42.5, 732.0], [42.6, 733.0], [42.7, 735.0], [42.8, 738.0], [42.9, 739.0], [43.0, 741.0], [43.1, 742.0], [43.2, 743.0], [43.3, 744.0], [43.4, 746.0], [43.5, 746.0], [43.6, 748.0], [43.7, 750.0], [43.8, 751.0], [43.9, 753.0], [44.0, 754.0], [44.1, 757.0], [44.2, 759.0], [44.3, 761.0], [44.4, 763.0], [44.5, 765.0], [44.6, 767.0], [44.7, 769.0], [44.8, 771.0], [44.9, 772.0], [45.0, 775.0], [45.1, 777.0], [45.2, 780.0], [45.3, 782.0], [45.4, 785.0], [45.5, 787.0], [45.6, 790.0], [45.7, 793.0], [45.8, 795.0], [45.9, 798.0], [46.0, 800.0], [46.1, 802.0], [46.2, 804.0], [46.3, 806.0], [46.4, 808.0], [46.5, 810.0], [46.6, 811.0], [46.7, 812.0], [46.8, 814.0], [46.9, 817.0], [47.0, 820.0], [47.1, 822.0], [47.2, 823.0], [47.3, 825.0], [47.4, 826.0], [47.5, 828.0], [47.6, 830.0], [47.7, 831.0], [47.8, 832.0], [47.9, 834.0], [48.0, 835.0], [48.1, 838.0], [48.2, 841.0], [48.3, 841.0], [48.4, 844.0], [48.5, 847.0], [48.6, 849.0], [48.7, 851.0], [48.8, 852.0], [48.9, 856.0], [49.0, 858.0], [49.1, 861.0], [49.2, 862.0], [49.3, 864.0], [49.4, 866.0], [49.5, 869.0], [49.6, 871.0], [49.7, 874.0], [49.8, 875.0], [49.9, 878.0], [50.0, 881.0], [50.1, 883.0], [50.2, 887.0], [50.3, 888.0], [50.4, 893.0], [50.5, 895.0], [50.6, 897.0], [50.7, 899.0], [50.8, 900.0], [50.9, 902.0], [51.0, 905.0], [51.1, 908.0], [51.2, 910.0], [51.3, 912.0], [51.4, 915.0], [51.5, 918.0], [51.6, 922.0], [51.7, 926.0], [51.8, 928.0], [51.9, 930.0], [52.0, 933.0], [52.1, 937.0], [52.2, 939.0], [52.3, 940.0], [52.4, 941.0], [52.5, 942.0], [52.6, 946.0], [52.7, 946.0], [52.8, 947.0], [52.9, 950.0], [53.0, 951.0], [53.1, 953.0], [53.2, 957.0], [53.3, 958.0], [53.4, 961.0], [53.5, 963.0], [53.6, 965.0], [53.7, 967.0], [53.8, 969.0], [53.9, 970.0], [54.0, 971.0], [54.1, 973.0], [54.2, 975.0], [54.3, 977.0], [54.4, 980.0], [54.5, 982.0], [54.6, 983.0], [54.7, 985.0], [54.8, 989.0], [54.9, 989.0], [55.0, 992.0], [55.1, 994.0], [55.2, 995.0], [55.3, 997.0], [55.4, 1002.0], [55.5, 1005.0], [55.6, 1006.0], [55.7, 1009.0], [55.8, 1011.0], [55.9, 1011.0], [56.0, 1013.0], [56.1, 1014.0], [56.2, 1018.0], [56.3, 1020.0], [56.4, 1023.0], [56.5, 1027.0], [56.6, 1030.0], [56.7, 1032.0], [56.8, 1033.0], [56.9, 1035.0], [57.0, 1036.0], [57.1, 1037.0], [57.2, 1037.0], [57.3, 1039.0], [57.4, 1043.0], [57.5, 1045.0], [57.6, 1047.0], [57.7, 1049.0], [57.8, 1052.0], [57.9, 1053.0], [58.0, 1055.0], [58.1, 1057.0], [58.2, 1058.0], [58.3, 1060.0], [58.4, 1064.0], [58.5, 1067.0], [58.6, 1068.0], [58.7, 1071.0], [58.8, 1072.0], [58.9, 1074.0], [59.0, 1076.0], [59.1, 1078.0], [59.2, 1079.0], [59.3, 1080.0], [59.4, 1084.0], [59.5, 1087.0], [59.6, 1088.0], [59.7, 1092.0], [59.8, 1094.0], [59.9, 1097.0], [60.0, 1099.0], [60.1, 1103.0], [60.2, 1105.0], [60.3, 1107.0], [60.4, 1108.0], [60.5, 1110.0], [60.6, 1113.0], [60.7, 1117.0], [60.8, 1118.0], [60.9, 1120.0], [61.0, 1122.0], [61.1, 1126.0], [61.2, 1129.0], [61.3, 1132.0], [61.4, 1134.0], [61.5, 1138.0], [61.6, 1140.0], [61.7, 1141.0], [61.8, 1144.0], [61.9, 1145.0], [62.0, 1148.0], [62.1, 1150.0], [62.2, 1152.0], [62.3, 1154.0], [62.4, 1157.0], [62.5, 1160.0], [62.6, 1162.0], [62.7, 1166.0], [62.8, 1168.0], [62.9, 1171.0], [63.0, 1174.0], [63.1, 1176.0], [63.2, 1179.0], [63.3, 1180.0], [63.4, 1182.0], [63.5, 1184.0], [63.6, 1189.0], [63.7, 1190.0], [63.8, 1192.0], [63.9, 1194.0], [64.0, 1196.0], [64.1, 1198.0], [64.2, 1199.0], [64.3, 1201.0], [64.4, 1204.0], [64.5, 1205.0], [64.6, 1206.0], [64.7, 1209.0], [64.8, 1210.0], [64.9, 1212.0], [65.0, 1214.0], [65.1, 1216.0], [65.2, 1218.0], [65.3, 1219.0], [65.4, 1222.0], [65.5, 1224.0], [65.6, 1225.0], [65.7, 1227.0], [65.8, 1231.0], [65.9, 1232.0], [66.0, 1233.0], [66.1, 1235.0], [66.2, 1237.0], [66.3, 1240.0], [66.4, 1242.0], [66.5, 1243.0], [66.6, 1246.0], [66.7, 1248.0], [66.8, 1250.0], [66.9, 1253.0], [67.0, 1254.0], [67.1, 1254.0], [67.2, 1257.0], [67.3, 1260.0], [67.4, 1264.0], [67.5, 1266.0], [67.6, 1269.0], [67.7, 1271.0], [67.8, 1273.0], [67.9, 1276.0], [68.0, 1277.0], [68.1, 1280.0], [68.2, 1282.0], [68.3, 1285.0], [68.4, 1287.0], [68.5, 1289.0], [68.6, 1293.0], [68.7, 1294.0], [68.8, 1296.0], [68.9, 1299.0], [69.0, 1303.0], [69.1, 1305.0], [69.2, 1307.0], [69.3, 1309.0], [69.4, 1310.0], [69.5, 1314.0], [69.6, 1318.0], [69.7, 1320.0], [69.8, 1321.0], [69.9, 1323.0], [70.0, 1324.0], [70.1, 1326.0], [70.2, 1328.0], [70.3, 1329.0], [70.4, 1330.0], [70.5, 1333.0], [70.6, 1335.0], [70.7, 1339.0], [70.8, 1340.0], [70.9, 1343.0], [71.0, 1345.0], [71.1, 1347.0], [71.2, 1349.0], [71.3, 1352.0], [71.4, 1356.0], [71.5, 1357.0], [71.6, 1360.0], [71.7, 1362.0], [71.8, 1364.0], [71.9, 1365.0], [72.0, 1366.0], [72.1, 1368.0], [72.2, 1371.0], [72.3, 1373.0], [72.4, 1374.0], [72.5, 1377.0], [72.6, 1378.0], [72.7, 1381.0], [72.8, 1385.0], [72.9, 1386.0], [73.0, 1389.0], [73.1, 1390.0], [73.2, 1392.0], [73.3, 1394.0], [73.4, 1397.0], [73.5, 1399.0], [73.6, 1401.0], [73.7, 1403.0], [73.8, 1405.0], [73.9, 1408.0], [74.0, 1410.0], [74.1, 1412.0], [74.2, 1415.0], [74.3, 1416.0], [74.4, 1417.0], [74.5, 1419.0], [74.6, 1421.0], [74.7, 1422.0], [74.8, 1424.0], [74.9, 1427.0], [75.0, 1428.0], [75.1, 1429.0], [75.2, 1432.0], [75.3, 1435.0], [75.4, 1437.0], [75.5, 1439.0], [75.6, 1443.0], [75.7, 1447.0], [75.8, 1447.0], [75.9, 1449.0], [76.0, 1451.0], [76.1, 1452.0], [76.2, 1454.0], [76.3, 1456.0], [76.4, 1459.0], [76.5, 1464.0], [76.6, 1466.0], [76.7, 1468.0], [76.8, 1471.0], [76.9, 1474.0], [77.0, 1477.0], [77.1, 1479.0], [77.2, 1482.0], [77.3, 1485.0], [77.4, 1490.0], [77.5, 1492.0], [77.6, 1493.0], [77.7, 1495.0], [77.8, 1497.0], [77.9, 1500.0], [78.0, 1502.0], [78.1, 1504.0], [78.2, 1507.0], [78.3, 1510.0], [78.4, 1511.0], [78.5, 1517.0], [78.6, 1519.0], [78.7, 1520.0], [78.8, 1522.0], [78.9, 1525.0], [79.0, 1527.0], [79.1, 1530.0], [79.2, 1532.0], [79.3, 1536.0], [79.4, 1540.0], [79.5, 1542.0], [79.6, 1545.0], [79.7, 1548.0], [79.8, 1551.0], [79.9, 1552.0], [80.0, 1555.0], [80.1, 1557.0], [80.2, 1559.0], [80.3, 1561.0], [80.4, 1562.0], [80.5, 1564.0], [80.6, 1566.0], [80.7, 1567.0], [80.8, 1569.0], [80.9, 1570.0], [81.0, 1575.0], [81.1, 1578.0], [81.2, 1580.0], [81.3, 1582.0], [81.4, 1584.0], [81.5, 1587.0], [81.6, 1591.0], [81.7, 1594.0], [81.8, 1597.0], [81.9, 1599.0], [82.0, 1601.0], [82.1, 1604.0], [82.2, 1606.0], [82.3, 1610.0], [82.4, 1613.0], [82.5, 1616.0], [82.6, 1618.0], [82.7, 1619.0], [82.8, 1620.0], [82.9, 1624.0], [83.0, 1629.0], [83.1, 1632.0], [83.2, 1635.0], [83.3, 1638.0], [83.4, 1641.0], [83.5, 1642.0], [83.6, 1644.0], [83.7, 1648.0], [83.8, 1650.0], [83.9, 1653.0], [84.0, 1657.0], [84.1, 1659.0], [84.2, 1661.0], [84.3, 1665.0], [84.4, 1668.0], [84.5, 1673.0], [84.6, 1674.0], [84.7, 1677.0], [84.8, 1681.0], [84.9, 1683.0], [85.0, 1684.0], [85.1, 1686.0], [85.2, 1689.0], [85.3, 1691.0], [85.4, 1693.0], [85.5, 1697.0], [85.6, 1701.0], [85.7, 1702.0], [85.8, 1706.0], [85.9, 1708.0], [86.0, 1712.0], [86.1, 1717.0], [86.2, 1721.0], [86.3, 1723.0], [86.4, 1728.0], [86.5, 1731.0], [86.6, 1733.0], [86.7, 1735.0], [86.8, 1738.0], [86.9, 1742.0], [87.0, 1745.0], [87.1, 1747.0], [87.2, 1750.0], [87.3, 1753.0], [87.4, 1759.0], [87.5, 1762.0], [87.6, 1765.0], [87.7, 1771.0], [87.8, 1776.0], [87.9, 1785.0], [88.0, 1789.0], [88.1, 1794.0], [88.2, 1802.0], [88.3, 1805.0], [88.4, 1812.0], [88.5, 1815.0], [88.6, 1817.0], [88.7, 1824.0], [88.8, 1827.0], [88.9, 1832.0], [89.0, 1839.0], [89.1, 1849.0], [89.2, 1851.0], [89.3, 1862.0], [89.4, 1870.0], [89.5, 1872.0], [89.6, 1879.0], [89.7, 1882.0], [89.8, 1889.0], [89.9, 1895.0], [90.0, 1905.0], [90.1, 1911.0], [90.2, 1917.0], [90.3, 1920.0], [90.4, 1925.0], [90.5, 1941.0], [90.6, 1954.0], [90.7, 1960.0], [90.8, 1965.0], [90.9, 1974.0], [91.0, 1983.0], [91.1, 1995.0], [91.2, 1998.0], [91.3, 2015.0], [91.4, 2028.0], [91.5, 2032.0], [91.6, 2039.0], [91.7, 2051.0], [91.8, 2055.0], [91.9, 2061.0], [92.0, 2065.0], [92.1, 2072.0], [92.2, 2081.0], [92.3, 2084.0], [92.4, 2093.0], [92.5, 2099.0], [92.6, 2102.0], [92.7, 2109.0], [92.8, 2120.0], [92.9, 2127.0], [93.0, 2132.0], [93.1, 2140.0], [93.2, 2150.0], [93.3, 2154.0], [93.4, 2164.0], [93.5, 2178.0], [93.6, 2194.0], [93.7, 2214.0], [93.8, 2220.0], [93.9, 2227.0], [94.0, 2237.0], [94.1, 2251.0], [94.2, 2262.0], [94.3, 2280.0], [94.4, 2296.0], [94.5, 2306.0], [94.6, 2319.0], [94.7, 2339.0], [94.8, 2349.0], [94.9, 2368.0], [95.0, 2377.0], [95.1, 2388.0], [95.2, 2392.0], [95.3, 2399.0], [95.4, 2407.0], [95.5, 2424.0], [95.6, 2432.0], [95.7, 2438.0], [95.8, 2450.0], [95.9, 2458.0], [96.0, 2470.0], [96.1, 2488.0], [96.2, 2500.0], [96.3, 2508.0], [96.4, 2531.0], [96.5, 2541.0], [96.6, 2551.0], [96.7, 2578.0], [96.8, 2599.0], [96.9, 2606.0], [97.0, 2608.0], [97.1, 2630.0], [97.2, 2658.0], [97.3, 2669.0], [97.4, 2707.0], [97.5, 2729.0], [97.6, 2743.0], [97.7, 2758.0], [97.8, 2774.0], [97.9, 2821.0], [98.0, 2859.0], [98.1, 2871.0], [98.2, 2898.0], [98.3, 2940.0], [98.4, 2993.0], [98.5, 3035.0], [98.6, 3088.0], [98.7, 3114.0], [98.8, 3167.0], [98.9, 3194.0], [99.0, 3222.0], [99.1, 3262.0], [99.2, 3333.0], [99.3, 3415.0], [99.4, 3574.0], [99.5, 3811.0], [99.6, 4043.0], [99.7, 4656.0], [99.8, 5108.0], [99.9, 5664.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 493.0, "series": [{"data": [[600.0, 380.0], [700.0, 285.0], [800.0, 249.0], [900.0, 238.0], [1000.0, 242.0], [1100.0, 219.0], [1200.0, 245.0], [1300.0, 238.0], [1400.0, 227.0], [1500.0, 210.0], [1600.0, 188.0], [1700.0, 136.0], [1800.0, 90.0], [1900.0, 69.0], [2000.0, 65.0], [2100.0, 57.0], [2300.0, 45.0], [2200.0, 44.0], [2400.0, 45.0], [2500.0, 33.0], [2600.0, 29.0], [2700.0, 23.0], [2800.0, 21.0], [2900.0, 9.0], [3000.0, 12.0], [3100.0, 16.0], [3300.0, 7.0], [3200.0, 11.0], [3400.0, 4.0], [3500.0, 2.0], [3600.0, 3.0], [3700.0, 2.0], [3800.0, 3.0], [3900.0, 1.0], [4000.0, 2.0], [4200.0, 1.0], [4600.0, 2.0], [4400.0, 1.0], [4500.0, 1.0], [4800.0, 1.0], [4700.0, 1.0], [5100.0, 1.0], [4900.0, 2.0], [5200.0, 2.0], [5600.0, 2.0], [5500.0, 2.0], [5800.0, 1.0], [5700.0, 1.0], [5900.0, 1.0], [6600.0, 1.0], [100.0, 18.0], [200.0, 441.0], [300.0, 413.0], [400.0, 493.0], [500.0, 355.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1144.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2680.0, "series": [{"data": [[0.0, 1366.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2680.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1144.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.166666666666668, "minX": 1.60507578E12, "maxY": 10.0, "series": [{"data": [[1.60507608E12, 10.0], [1.60507578E12, 9.9940828402367], [1.60507596E12, 10.0], [1.60507614E12, 10.0], [1.60507632E12, 8.166666666666668], [1.60507584E12, 10.0], [1.60507602E12, 10.0], [1.6050762E12, 10.0], [1.60507626E12, 10.0], [1.6050759E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507632E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 323.0, "minX": 1.0, "maxY": 2743.0, "series": [{"data": [[8.0, 323.0], [4.0, 2298.0], [2.0, 1432.0], [1.0, 2743.0], [9.0, 2072.0], [10.0, 1039.09498069498], [6.0, 1311.0], [3.0, 1426.0], [7.0, 709.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331411, 1039.854720616577]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 187.0, "minX": 1.60507578E12, "maxY": 3349977.7333333334, "series": [{"data": [[1.60507608E12, 2231741.216666667], [1.60507578E12, 2593896.933333333], [1.60507596E12, 2792223.0], [1.60507614E12, 2848429.5], [1.60507632E12, 137310.71666666667], [1.60507584E12, 2105496.7666666666], [1.60507602E12, 2761877.25], [1.6050762E12, 2704062.283333333], [1.60507626E12, 2456710.283333333], [1.6050759E12, 3349977.7333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507608E12, 3878.7833333333333], [1.60507578E12, 3649.15], [1.60507596E12, 4597.1], [1.60507614E12, 4613.733333333334], [1.60507632E12, 187.0], [1.60507584E12, 4435.283333333334], [1.60507602E12, 3492.5666666666666], [1.6050762E12, 4764.066666666667], [1.60507626E12, 4382.833333333333], [1.6050759E12, 4576.816666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507632E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 949.6511999999997, "minX": 1.60507578E12, "maxY": 1279.791666666667, "series": [{"data": [[1.60507608E12, 1110.7309833024112], [1.60507578E12, 1133.3333333333323], [1.60507596E12, 992.1798679867995], [1.60507614E12, 949.6511999999997], [1.60507632E12, 1279.791666666667], [1.60507584E12, 980.9966996699678], [1.60507602E12, 1276.2723404255325], [1.6050762E12, 954.5573248407647], [1.60507626E12, 1039.5903614457836], [1.6050759E12, 993.8046357615899]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507632E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 947.8688000000004, "minX": 1.60507578E12, "maxY": 1277.5416666666665, "series": [{"data": [[1.60507608E12, 1109.2912801484224], [1.60507578E12, 1131.1439842209084], [1.60507596E12, 990.1666666666671], [1.60507614E12, 947.8688000000004], [1.60507632E12, 1277.5416666666665], [1.60507584E12, 979.3102310231031], [1.60507602E12, 1274.110638297873], [1.6050762E12, 953.054140127389], [1.60507626E12, 1038.017211703958], [1.6050759E12, 991.1738410596028]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507632E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.014331210191082798, "minX": 1.60507578E12, "maxY": 0.18343195266272194, "series": [{"data": [[1.60507608E12, 0.020408163265306107], [1.60507578E12, 0.18343195266272194], [1.60507596E12, 0.023102310231023094], [1.60507614E12, 0.031999999999999994], [1.60507632E12, 0.125], [1.60507584E12, 0.021452145214521448], [1.60507602E12, 0.025531914893617], [1.6050762E12, 0.014331210191082798], [1.60507626E12, 0.015490533562822721], [1.6050759E12, 0.02317880794701985]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507632E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 192.0, "minX": 1.60507578E12, "maxY": 6660.0, "series": [{"data": [[1.60507608E12, 5664.0], [1.60507578E12, 6660.0], [1.60507596E12, 5844.0], [1.60507614E12, 3333.0], [1.60507632E12, 2940.0], [1.60507584E12, 3574.0], [1.60507602E12, 5997.0], [1.6050762E12, 3168.0], [1.60507626E12, 3855.0], [1.6050759E12, 5686.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507608E12, 234.0], [1.60507578E12, 208.14399975776672], [1.60507596E12, 196.46299985527992], [1.60507614E12, 208.90199955224992], [1.60507632E12, 323.0], [1.60507584E12, 215.0], [1.60507602E12, 231.19499943852423], [1.6050762E12, 208.66099985003473], [1.60507626E12, 210.0], [1.6050759E12, 201.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507608E12, 234.69200010299681], [1.60507578E12, 209.11680019378662], [1.60507596E12, 197.01860011577605], [1.60507614E12, 211.18440035820007], [1.60507632E12, 323.0], [1.60507584E12, 215.03720023155213], [1.60507602E12, 233.3145002245903], [1.6050762E12, 209.0], [1.60507626E12, 210.0], [1.6050759E12, 201.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507608E12, 234.25999987125397], [1.60507578E12, 208.65199987888337], [1.60507596E12, 196.76649992763996], [1.60507614E12, 209.84099977612496], [1.60507632E12, 323.0], [1.60507584E12, 215.0], [1.60507602E12, 232.37249971926212], [1.6050762E12, 208.97549992501735], [1.60507626E12, 210.0], [1.6050759E12, 201.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507608E12, 225.0], [1.60507578E12, 197.0], [1.60507596E12, 194.0], [1.60507614E12, 192.0], [1.60507632E12, 323.0], [1.60507584E12, 195.0], [1.60507602E12, 215.0], [1.6050762E12, 198.0], [1.60507626E12, 197.0], [1.6050759E12, 195.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507608E12, 984.0], [1.60507578E12, 1003.0], [1.60507596E12, 813.5], [1.60507614E12, 727.0], [1.60507632E12, 1065.5], [1.60507584E12, 757.5], [1.60507602E12, 1157.5], [1.6050762E12, 741.0], [1.60507626E12, 877.0], [1.6050759E12, 727.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507632E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 398.5, "minX": 1.0, "maxY": 2342.0, "series": [{"data": [[2.0, 1739.0], [3.0, 1806.0], [4.0, 1321.5], [5.0, 1260.5], [6.0, 1387.5], [7.0, 1241.5], [8.0, 1115.5], [9.0, 1014.5], [10.0, 1034.0], [11.0, 912.0], [12.0, 768.5], [13.0, 631.5], [14.0, 676.0], [15.0, 531.0], [16.0, 466.5], [1.0, 2342.0], [17.0, 505.0], [18.0, 466.0], [19.0, 450.0], [20.0, 474.5], [21.0, 452.0], [22.0, 464.0], [23.0, 421.0], [24.0, 423.0], [25.0, 433.0], [26.0, 398.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 398.5, "minX": 1.0, "maxY": 2334.5, "series": [{"data": [[2.0, 1736.0], [3.0, 1805.0], [4.0, 1320.0], [5.0, 1259.0], [6.0, 1386.0], [7.0, 1237.0], [8.0, 1112.5], [9.0, 1013.5], [10.0, 1033.5], [11.0, 912.0], [12.0, 767.5], [13.0, 630.5], [14.0, 675.0], [15.0, 530.0], [16.0, 466.5], [1.0, 2334.5], [17.0, 505.0], [18.0, 466.0], [19.0, 449.5], [20.0, 474.5], [21.0, 452.0], [22.0, 464.0], [23.0, 420.5], [24.0, 423.0], [25.0, 433.0], [26.0, 398.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60507578E12, "maxY": 10.466666666666667, "series": [{"data": [[1.60507608E12, 8.983333333333333], [1.60507578E12, 8.616666666666667], [1.60507596E12, 10.1], [1.60507614E12, 10.416666666666666], [1.60507632E12, 0.23333333333333334], [1.60507584E12, 10.1], [1.60507602E12, 7.833333333333333], [1.6050762E12, 10.466666666666667], [1.60507626E12, 9.683333333333334], [1.6050759E12, 10.066666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507632E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.60507578E12, "maxY": 10.466666666666667, "series": [{"data": [[1.60507608E12, 8.983333333333333], [1.60507578E12, 8.45], [1.60507596E12, 10.1], [1.60507614E12, 10.416666666666666], [1.60507632E12, 0.4], [1.60507584E12, 10.1], [1.60507602E12, 7.833333333333333], [1.6050762E12, 10.466666666666667], [1.60507626E12, 9.683333333333334], [1.6050759E12, 10.066666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507632E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.60507578E12, "maxY": 10.466666666666667, "series": [{"data": [[1.60507608E12, 8.983333333333333], [1.60507578E12, 8.45], [1.60507596E12, 10.1], [1.60507614E12, 10.416666666666666], [1.60507632E12, 0.4], [1.60507584E12, 10.1], [1.60507602E12, 7.833333333333333], [1.6050762E12, 10.466666666666667], [1.60507626E12, 9.683333333333334], [1.6050759E12, 10.066666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507632E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.60507578E12, "maxY": 10.466666666666667, "series": [{"data": [[1.60507608E12, 8.983333333333333], [1.60507578E12, 8.45], [1.60507596E12, 10.1], [1.60507614E12, 10.416666666666666], [1.60507632E12, 0.4], [1.60507584E12, 10.1], [1.60507602E12, 7.833333333333333], [1.6050762E12, 10.466666666666667], [1.60507626E12, 9.683333333333334], [1.6050759E12, 10.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507632E12, "title": "Total Transactions Per Second"}},
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

