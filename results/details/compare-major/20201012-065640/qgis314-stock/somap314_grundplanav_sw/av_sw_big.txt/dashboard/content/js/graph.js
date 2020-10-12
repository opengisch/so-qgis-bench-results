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
        data: {"result": {"minY": 199.0, "minX": 0.0, "maxY": 9532.0, "series": [{"data": [[0.0, 199.0], [0.1, 204.0], [0.2, 208.0], [0.3, 210.0], [0.4, 211.0], [0.5, 212.0], [0.6, 214.0], [0.7, 216.0], [0.8, 217.0], [0.9, 217.0], [1.0, 219.0], [1.1, 221.0], [1.2, 223.0], [1.3, 225.0], [1.4, 226.0], [1.5, 227.0], [1.6, 229.0], [1.7, 230.0], [1.8, 231.0], [1.9, 231.0], [2.0, 232.0], [2.1, 232.0], [2.2, 233.0], [2.3, 234.0], [2.4, 234.0], [2.5, 235.0], [2.6, 236.0], [2.7, 236.0], [2.8, 236.0], [2.9, 237.0], [3.0, 237.0], [3.1, 238.0], [3.2, 239.0], [3.3, 240.0], [3.4, 240.0], [3.5, 241.0], [3.6, 242.0], [3.7, 242.0], [3.8, 243.0], [3.9, 243.0], [4.0, 244.0], [4.1, 244.0], [4.2, 245.0], [4.3, 246.0], [4.4, 246.0], [4.5, 247.0], [4.6, 247.0], [4.7, 248.0], [4.8, 249.0], [4.9, 250.0], [5.0, 251.0], [5.1, 252.0], [5.2, 254.0], [5.3, 255.0], [5.4, 256.0], [5.5, 257.0], [5.6, 260.0], [5.7, 262.0], [5.8, 263.0], [5.9, 264.0], [6.0, 264.0], [6.1, 265.0], [6.2, 267.0], [6.3, 269.0], [6.4, 272.0], [6.5, 273.0], [6.6, 277.0], [6.7, 279.0], [6.8, 281.0], [6.9, 283.0], [7.0, 286.0], [7.1, 290.0], [7.2, 291.0], [7.3, 293.0], [7.4, 295.0], [7.5, 297.0], [7.6, 299.0], [7.7, 302.0], [7.8, 304.0], [7.9, 307.0], [8.0, 308.0], [8.1, 310.0], [8.2, 312.0], [8.3, 314.0], [8.4, 315.0], [8.5, 318.0], [8.6, 319.0], [8.7, 320.0], [8.8, 322.0], [8.9, 322.0], [9.0, 324.0], [9.1, 326.0], [9.2, 327.0], [9.3, 328.0], [9.4, 329.0], [9.5, 329.0], [9.6, 330.0], [9.7, 331.0], [9.8, 331.0], [9.9, 332.0], [10.0, 334.0], [10.1, 334.0], [10.2, 335.0], [10.3, 335.0], [10.4, 336.0], [10.5, 337.0], [10.6, 338.0], [10.7, 338.0], [10.8, 339.0], [10.9, 340.0], [11.0, 341.0], [11.1, 343.0], [11.2, 343.0], [11.3, 344.0], [11.4, 345.0], [11.5, 346.0], [11.6, 347.0], [11.7, 348.0], [11.8, 349.0], [11.9, 349.0], [12.0, 350.0], [12.1, 351.0], [12.2, 352.0], [12.3, 354.0], [12.4, 354.0], [12.5, 355.0], [12.6, 357.0], [12.7, 358.0], [12.8, 359.0], [12.9, 360.0], [13.0, 361.0], [13.1, 363.0], [13.2, 365.0], [13.3, 366.0], [13.4, 367.0], [13.5, 368.0], [13.6, 369.0], [13.7, 370.0], [13.8, 373.0], [13.9, 374.0], [14.0, 376.0], [14.1, 378.0], [14.2, 380.0], [14.3, 383.0], [14.4, 385.0], [14.5, 387.0], [14.6, 389.0], [14.7, 391.0], [14.8, 391.0], [14.9, 393.0], [15.0, 394.0], [15.1, 397.0], [15.2, 399.0], [15.3, 402.0], [15.4, 404.0], [15.5, 406.0], [15.6, 407.0], [15.7, 409.0], [15.8, 411.0], [15.9, 412.0], [16.0, 413.0], [16.1, 414.0], [16.2, 415.0], [16.3, 416.0], [16.4, 417.0], [16.5, 420.0], [16.6, 422.0], [16.7, 424.0], [16.8, 425.0], [16.9, 426.0], [17.0, 428.0], [17.1, 429.0], [17.2, 430.0], [17.3, 431.0], [17.4, 433.0], [17.5, 434.0], [17.6, 435.0], [17.7, 437.0], [17.8, 439.0], [17.9, 441.0], [18.0, 443.0], [18.1, 445.0], [18.2, 447.0], [18.3, 448.0], [18.4, 450.0], [18.5, 452.0], [18.6, 453.0], [18.7, 454.0], [18.8, 455.0], [18.9, 456.0], [19.0, 457.0], [19.1, 458.0], [19.2, 459.0], [19.3, 460.0], [19.4, 460.0], [19.5, 461.0], [19.6, 462.0], [19.7, 463.0], [19.8, 465.0], [19.9, 465.0], [20.0, 466.0], [20.1, 467.0], [20.2, 467.0], [20.3, 468.0], [20.4, 469.0], [20.5, 470.0], [20.6, 471.0], [20.7, 471.0], [20.8, 472.0], [20.9, 473.0], [21.0, 475.0], [21.1, 476.0], [21.2, 477.0], [21.3, 478.0], [21.4, 479.0], [21.5, 480.0], [21.6, 481.0], [21.7, 482.0], [21.8, 483.0], [21.9, 483.0], [22.0, 484.0], [22.1, 485.0], [22.2, 487.0], [22.3, 487.0], [22.4, 489.0], [22.5, 489.0], [22.6, 490.0], [22.7, 491.0], [22.8, 491.0], [22.9, 492.0], [23.0, 493.0], [23.1, 493.0], [23.2, 494.0], [23.3, 496.0], [23.4, 496.0], [23.5, 497.0], [23.6, 498.0], [23.7, 499.0], [23.8, 500.0], [23.9, 501.0], [24.0, 501.0], [24.1, 503.0], [24.2, 503.0], [24.3, 504.0], [24.4, 505.0], [24.5, 506.0], [24.6, 507.0], [24.7, 508.0], [24.8, 509.0], [24.9, 510.0], [25.0, 512.0], [25.1, 512.0], [25.2, 514.0], [25.3, 515.0], [25.4, 517.0], [25.5, 519.0], [25.6, 520.0], [25.7, 522.0], [25.8, 522.0], [25.9, 523.0], [26.0, 524.0], [26.1, 525.0], [26.2, 527.0], [26.3, 527.0], [26.4, 528.0], [26.5, 529.0], [26.6, 531.0], [26.7, 531.0], [26.8, 533.0], [26.9, 534.0], [27.0, 537.0], [27.1, 538.0], [27.2, 540.0], [27.3, 542.0], [27.4, 543.0], [27.5, 545.0], [27.6, 546.0], [27.7, 547.0], [27.8, 550.0], [27.9, 551.0], [28.0, 552.0], [28.1, 553.0], [28.2, 554.0], [28.3, 555.0], [28.4, 557.0], [28.5, 559.0], [28.6, 561.0], [28.7, 562.0], [28.8, 564.0], [28.9, 564.0], [29.0, 565.0], [29.1, 566.0], [29.2, 567.0], [29.3, 568.0], [29.4, 569.0], [29.5, 570.0], [29.6, 571.0], [29.7, 572.0], [29.8, 573.0], [29.9, 574.0], [30.0, 575.0], [30.1, 577.0], [30.2, 577.0], [30.3, 578.0], [30.4, 579.0], [30.5, 580.0], [30.6, 580.0], [30.7, 581.0], [30.8, 582.0], [30.9, 583.0], [31.0, 585.0], [31.1, 587.0], [31.2, 588.0], [31.3, 589.0], [31.4, 590.0], [31.5, 591.0], [31.6, 592.0], [31.7, 593.0], [31.8, 594.0], [31.9, 595.0], [32.0, 596.0], [32.1, 598.0], [32.2, 601.0], [32.3, 602.0], [32.4, 602.0], [32.5, 604.0], [32.6, 605.0], [32.7, 607.0], [32.8, 608.0], [32.9, 610.0], [33.0, 612.0], [33.1, 615.0], [33.2, 616.0], [33.3, 618.0], [33.4, 620.0], [33.5, 621.0], [33.6, 622.0], [33.7, 624.0], [33.8, 625.0], [33.9, 626.0], [34.0, 628.0], [34.1, 629.0], [34.2, 630.0], [34.3, 632.0], [34.4, 633.0], [34.5, 635.0], [34.6, 638.0], [34.7, 639.0], [34.8, 640.0], [34.9, 642.0], [35.0, 644.0], [35.1, 645.0], [35.2, 645.0], [35.3, 647.0], [35.4, 647.0], [35.5, 648.0], [35.6, 648.0], [35.7, 650.0], [35.8, 651.0], [35.9, 652.0], [36.0, 654.0], [36.1, 655.0], [36.2, 656.0], [36.3, 658.0], [36.4, 660.0], [36.5, 661.0], [36.6, 662.0], [36.7, 664.0], [36.8, 666.0], [36.9, 667.0], [37.0, 668.0], [37.1, 669.0], [37.2, 671.0], [37.3, 672.0], [37.4, 672.0], [37.5, 674.0], [37.6, 675.0], [37.7, 676.0], [37.8, 677.0], [37.9, 678.0], [38.0, 680.0], [38.1, 682.0], [38.2, 684.0], [38.3, 684.0], [38.4, 686.0], [38.5, 687.0], [38.6, 688.0], [38.7, 689.0], [38.8, 690.0], [38.9, 690.0], [39.0, 693.0], [39.1, 694.0], [39.2, 695.0], [39.3, 697.0], [39.4, 698.0], [39.5, 700.0], [39.6, 701.0], [39.7, 703.0], [39.8, 704.0], [39.9, 705.0], [40.0, 707.0], [40.1, 709.0], [40.2, 710.0], [40.3, 711.0], [40.4, 713.0], [40.5, 716.0], [40.6, 717.0], [40.7, 718.0], [40.8, 720.0], [40.9, 721.0], [41.0, 723.0], [41.1, 725.0], [41.2, 726.0], [41.3, 728.0], [41.4, 730.0], [41.5, 732.0], [41.6, 734.0], [41.7, 735.0], [41.8, 737.0], [41.9, 739.0], [42.0, 741.0], [42.1, 742.0], [42.2, 744.0], [42.3, 746.0], [42.4, 747.0], [42.5, 749.0], [42.6, 751.0], [42.7, 753.0], [42.8, 754.0], [42.9, 756.0], [43.0, 758.0], [43.1, 760.0], [43.2, 762.0], [43.3, 763.0], [43.4, 764.0], [43.5, 765.0], [43.6, 767.0], [43.7, 769.0], [43.8, 770.0], [43.9, 772.0], [44.0, 773.0], [44.1, 775.0], [44.2, 777.0], [44.3, 779.0], [44.4, 779.0], [44.5, 780.0], [44.6, 783.0], [44.7, 788.0], [44.8, 792.0], [44.9, 794.0], [45.0, 796.0], [45.1, 798.0], [45.2, 801.0], [45.3, 803.0], [45.4, 807.0], [45.5, 808.0], [45.6, 810.0], [45.7, 813.0], [45.8, 816.0], [45.9, 818.0], [46.0, 821.0], [46.1, 823.0], [46.2, 824.0], [46.3, 827.0], [46.4, 829.0], [46.5, 830.0], [46.6, 833.0], [46.7, 834.0], [46.8, 837.0], [46.9, 839.0], [47.0, 841.0], [47.1, 842.0], [47.2, 843.0], [47.3, 846.0], [47.4, 848.0], [47.5, 849.0], [47.6, 851.0], [47.7, 852.0], [47.8, 855.0], [47.9, 858.0], [48.0, 860.0], [48.1, 861.0], [48.2, 862.0], [48.3, 864.0], [48.4, 865.0], [48.5, 866.0], [48.6, 869.0], [48.7, 872.0], [48.8, 875.0], [48.9, 877.0], [49.0, 882.0], [49.1, 882.0], [49.2, 884.0], [49.3, 886.0], [49.4, 889.0], [49.5, 892.0], [49.6, 893.0], [49.7, 895.0], [49.8, 897.0], [49.9, 900.0], [50.0, 901.0], [50.1, 905.0], [50.2, 908.0], [50.3, 910.0], [50.4, 911.0], [50.5, 914.0], [50.6, 915.0], [50.7, 917.0], [50.8, 918.0], [50.9, 919.0], [51.0, 921.0], [51.1, 923.0], [51.2, 925.0], [51.3, 927.0], [51.4, 928.0], [51.5, 931.0], [51.6, 933.0], [51.7, 937.0], [51.8, 939.0], [51.9, 942.0], [52.0, 944.0], [52.1, 946.0], [52.2, 949.0], [52.3, 954.0], [52.4, 956.0], [52.5, 957.0], [52.6, 959.0], [52.7, 962.0], [52.8, 965.0], [52.9, 967.0], [53.0, 969.0], [53.1, 970.0], [53.2, 974.0], [53.3, 975.0], [53.4, 977.0], [53.5, 978.0], [53.6, 983.0], [53.7, 985.0], [53.8, 986.0], [53.9, 988.0], [54.0, 990.0], [54.1, 994.0], [54.2, 996.0], [54.3, 997.0], [54.4, 1000.0], [54.5, 1005.0], [54.6, 1006.0], [54.7, 1008.0], [54.8, 1012.0], [54.9, 1017.0], [55.0, 1019.0], [55.1, 1021.0], [55.2, 1023.0], [55.3, 1024.0], [55.4, 1026.0], [55.5, 1028.0], [55.6, 1029.0], [55.7, 1032.0], [55.8, 1033.0], [55.9, 1035.0], [56.0, 1038.0], [56.1, 1039.0], [56.2, 1043.0], [56.3, 1045.0], [56.4, 1046.0], [56.5, 1048.0], [56.6, 1049.0], [56.7, 1051.0], [56.8, 1052.0], [56.9, 1056.0], [57.0, 1058.0], [57.1, 1061.0], [57.2, 1064.0], [57.3, 1065.0], [57.4, 1067.0], [57.5, 1070.0], [57.6, 1072.0], [57.7, 1073.0], [57.8, 1075.0], [57.9, 1079.0], [58.0, 1082.0], [58.1, 1083.0], [58.2, 1084.0], [58.3, 1085.0], [58.4, 1087.0], [58.5, 1090.0], [58.6, 1092.0], [58.7, 1094.0], [58.8, 1095.0], [58.9, 1098.0], [59.0, 1100.0], [59.1, 1103.0], [59.2, 1104.0], [59.3, 1108.0], [59.4, 1109.0], [59.5, 1111.0], [59.6, 1114.0], [59.7, 1116.0], [59.8, 1118.0], [59.9, 1120.0], [60.0, 1124.0], [60.1, 1126.0], [60.2, 1127.0], [60.3, 1128.0], [60.4, 1130.0], [60.5, 1134.0], [60.6, 1134.0], [60.7, 1137.0], [60.8, 1140.0], [60.9, 1141.0], [61.0, 1143.0], [61.1, 1145.0], [61.2, 1146.0], [61.3, 1148.0], [61.4, 1149.0], [61.5, 1151.0], [61.6, 1152.0], [61.7, 1155.0], [61.8, 1157.0], [61.9, 1158.0], [62.0, 1160.0], [62.1, 1161.0], [62.2, 1164.0], [62.3, 1168.0], [62.4, 1169.0], [62.5, 1173.0], [62.6, 1175.0], [62.7, 1176.0], [62.8, 1179.0], [62.9, 1180.0], [63.0, 1181.0], [63.1, 1184.0], [63.2, 1187.0], [63.3, 1190.0], [63.4, 1193.0], [63.5, 1195.0], [63.6, 1199.0], [63.7, 1201.0], [63.8, 1203.0], [63.9, 1205.0], [64.0, 1207.0], [64.1, 1209.0], [64.2, 1211.0], [64.3, 1213.0], [64.4, 1214.0], [64.5, 1216.0], [64.6, 1217.0], [64.7, 1221.0], [64.8, 1224.0], [64.9, 1227.0], [65.0, 1230.0], [65.1, 1231.0], [65.2, 1232.0], [65.3, 1234.0], [65.4, 1235.0], [65.5, 1237.0], [65.6, 1238.0], [65.7, 1239.0], [65.8, 1244.0], [65.9, 1244.0], [66.0, 1246.0], [66.1, 1247.0], [66.2, 1248.0], [66.3, 1249.0], [66.4, 1254.0], [66.5, 1256.0], [66.6, 1258.0], [66.7, 1262.0], [66.8, 1265.0], [66.9, 1267.0], [67.0, 1269.0], [67.1, 1273.0], [67.2, 1275.0], [67.3, 1277.0], [67.4, 1279.0], [67.5, 1283.0], [67.6, 1285.0], [67.7, 1286.0], [67.8, 1290.0], [67.9, 1295.0], [68.0, 1299.0], [68.1, 1300.0], [68.2, 1303.0], [68.3, 1307.0], [68.4, 1309.0], [68.5, 1310.0], [68.6, 1314.0], [68.7, 1316.0], [68.8, 1321.0], [68.9, 1324.0], [69.0, 1329.0], [69.1, 1332.0], [69.2, 1334.0], [69.3, 1337.0], [69.4, 1338.0], [69.5, 1340.0], [69.6, 1344.0], [69.7, 1345.0], [69.8, 1347.0], [69.9, 1351.0], [70.0, 1354.0], [70.1, 1358.0], [70.2, 1359.0], [70.3, 1363.0], [70.4, 1366.0], [70.5, 1366.0], [70.6, 1369.0], [70.7, 1370.0], [70.8, 1373.0], [70.9, 1376.0], [71.0, 1377.0], [71.1, 1381.0], [71.2, 1384.0], [71.3, 1385.0], [71.4, 1388.0], [71.5, 1389.0], [71.6, 1393.0], [71.7, 1395.0], [71.8, 1399.0], [71.9, 1400.0], [72.0, 1402.0], [72.1, 1403.0], [72.2, 1407.0], [72.3, 1409.0], [72.4, 1411.0], [72.5, 1415.0], [72.6, 1416.0], [72.7, 1417.0], [72.8, 1420.0], [72.9, 1422.0], [73.0, 1425.0], [73.1, 1426.0], [73.2, 1430.0], [73.3, 1432.0], [73.4, 1435.0], [73.5, 1438.0], [73.6, 1439.0], [73.7, 1443.0], [73.8, 1447.0], [73.9, 1449.0], [74.0, 1449.0], [74.1, 1454.0], [74.2, 1456.0], [74.3, 1456.0], [74.4, 1458.0], [74.5, 1460.0], [74.6, 1462.0], [74.7, 1464.0], [74.8, 1466.0], [74.9, 1467.0], [75.0, 1469.0], [75.1, 1475.0], [75.2, 1476.0], [75.3, 1479.0], [75.4, 1482.0], [75.5, 1486.0], [75.6, 1488.0], [75.7, 1494.0], [75.8, 1497.0], [75.9, 1499.0], [76.0, 1501.0], [76.1, 1504.0], [76.2, 1508.0], [76.3, 1512.0], [76.4, 1515.0], [76.5, 1518.0], [76.6, 1519.0], [76.7, 1521.0], [76.8, 1525.0], [76.9, 1527.0], [77.0, 1530.0], [77.1, 1531.0], [77.2, 1534.0], [77.3, 1536.0], [77.4, 1540.0], [77.5, 1542.0], [77.6, 1546.0], [77.7, 1548.0], [77.8, 1551.0], [77.9, 1552.0], [78.0, 1554.0], [78.1, 1556.0], [78.2, 1559.0], [78.3, 1561.0], [78.4, 1562.0], [78.5, 1564.0], [78.6, 1565.0], [78.7, 1567.0], [78.8, 1569.0], [78.9, 1571.0], [79.0, 1572.0], [79.1, 1577.0], [79.2, 1581.0], [79.3, 1586.0], [79.4, 1587.0], [79.5, 1593.0], [79.6, 1595.0], [79.7, 1597.0], [79.8, 1600.0], [79.9, 1602.0], [80.0, 1603.0], [80.1, 1604.0], [80.2, 1608.0], [80.3, 1610.0], [80.4, 1614.0], [80.5, 1617.0], [80.6, 1619.0], [80.7, 1621.0], [80.8, 1622.0], [80.9, 1624.0], [81.0, 1627.0], [81.1, 1629.0], [81.2, 1632.0], [81.3, 1633.0], [81.4, 1635.0], [81.5, 1636.0], [81.6, 1638.0], [81.7, 1639.0], [81.8, 1641.0], [81.9, 1643.0], [82.0, 1646.0], [82.1, 1647.0], [82.2, 1651.0], [82.3, 1658.0], [82.4, 1661.0], [82.5, 1663.0], [82.6, 1668.0], [82.7, 1670.0], [82.8, 1672.0], [82.9, 1676.0], [83.0, 1678.0], [83.1, 1684.0], [83.2, 1686.0], [83.3, 1689.0], [83.4, 1691.0], [83.5, 1694.0], [83.6, 1698.0], [83.7, 1701.0], [83.8, 1706.0], [83.9, 1707.0], [84.0, 1708.0], [84.1, 1710.0], [84.2, 1713.0], [84.3, 1715.0], [84.4, 1717.0], [84.5, 1721.0], [84.6, 1726.0], [84.7, 1730.0], [84.8, 1732.0], [84.9, 1735.0], [85.0, 1739.0], [85.1, 1742.0], [85.2, 1743.0], [85.3, 1746.0], [85.4, 1749.0], [85.5, 1758.0], [85.6, 1761.0], [85.7, 1764.0], [85.8, 1768.0], [85.9, 1771.0], [86.0, 1774.0], [86.1, 1778.0], [86.2, 1781.0], [86.3, 1787.0], [86.4, 1791.0], [86.5, 1793.0], [86.6, 1797.0], [86.7, 1801.0], [86.8, 1805.0], [86.9, 1808.0], [87.0, 1812.0], [87.1, 1818.0], [87.2, 1821.0], [87.3, 1826.0], [87.4, 1833.0], [87.5, 1836.0], [87.6, 1841.0], [87.7, 1850.0], [87.8, 1852.0], [87.9, 1861.0], [88.0, 1865.0], [88.1, 1871.0], [88.2, 1880.0], [88.3, 1882.0], [88.4, 1888.0], [88.5, 1895.0], [88.6, 1897.0], [88.7, 1900.0], [88.8, 1905.0], [88.9, 1915.0], [89.0, 1917.0], [89.1, 1923.0], [89.2, 1925.0], [89.3, 1931.0], [89.4, 1936.0], [89.5, 1939.0], [89.6, 1945.0], [89.7, 1950.0], [89.8, 1959.0], [89.9, 1967.0], [90.0, 1972.0], [90.1, 1979.0], [90.2, 1982.0], [90.3, 1986.0], [90.4, 1991.0], [90.5, 2000.0], [90.6, 2014.0], [90.7, 2021.0], [90.8, 2032.0], [90.9, 2043.0], [91.0, 2055.0], [91.1, 2063.0], [91.2, 2075.0], [91.3, 2081.0], [91.4, 2086.0], [91.5, 2089.0], [91.6, 2097.0], [91.7, 2106.0], [91.8, 2114.0], [91.9, 2123.0], [92.0, 2132.0], [92.1, 2145.0], [92.2, 2154.0], [92.3, 2161.0], [92.4, 2170.0], [92.5, 2181.0], [92.6, 2190.0], [92.7, 2205.0], [92.8, 2215.0], [92.9, 2219.0], [93.0, 2235.0], [93.1, 2241.0], [93.2, 2255.0], [93.3, 2261.0], [93.4, 2268.0], [93.5, 2283.0], [93.6, 2299.0], [93.7, 2325.0], [93.8, 2331.0], [93.9, 2340.0], [94.0, 2358.0], [94.1, 2365.0], [94.2, 2383.0], [94.3, 2400.0], [94.4, 2409.0], [94.5, 2421.0], [94.6, 2432.0], [94.7, 2447.0], [94.8, 2453.0], [94.9, 2462.0], [95.0, 2469.0], [95.1, 2476.0], [95.2, 2488.0], [95.3, 2498.0], [95.4, 2508.0], [95.5, 2512.0], [95.6, 2530.0], [95.7, 2543.0], [95.8, 2552.0], [95.9, 2564.0], [96.0, 2582.0], [96.1, 2588.0], [96.2, 2604.0], [96.3, 2621.0], [96.4, 2657.0], [96.5, 2672.0], [96.6, 2698.0], [96.7, 2710.0], [96.8, 2754.0], [96.9, 2770.0], [97.0, 2790.0], [97.1, 2812.0], [97.2, 2835.0], [97.3, 2849.0], [97.4, 2873.0], [97.5, 2892.0], [97.6, 2916.0], [97.7, 2952.0], [97.8, 2970.0], [97.9, 2982.0], [98.0, 3000.0], [98.1, 3015.0], [98.2, 3035.0], [98.3, 3081.0], [98.4, 3117.0], [98.5, 3167.0], [98.6, 3202.0], [98.7, 3238.0], [98.8, 3322.0], [98.9, 3355.0], [99.0, 3461.0], [99.1, 3570.0], [99.2, 3626.0], [99.3, 3683.0], [99.4, 3752.0], [99.5, 4164.0], [99.6, 4496.0], [99.7, 4893.0], [99.8, 5350.0], [99.9, 6016.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 442.0, "series": [{"data": [[600.0, 378.0], [700.0, 297.0], [800.0, 246.0], [900.0, 232.0], [1000.0, 238.0], [1100.0, 245.0], [1200.0, 229.0], [1300.0, 194.0], [1400.0, 215.0], [1500.0, 199.0], [1600.0, 201.0], [1700.0, 155.0], [1800.0, 104.0], [1900.0, 95.0], [2000.0, 61.0], [2100.0, 52.0], [2300.0, 36.0], [2200.0, 49.0], [2400.0, 53.0], [2500.0, 45.0], [2600.0, 22.0], [2700.0, 25.0], [2800.0, 23.0], [2900.0, 24.0], [3000.0, 20.0], [3100.0, 11.0], [3200.0, 9.0], [3300.0, 11.0], [3400.0, 3.0], [3500.0, 7.0], [3600.0, 9.0], [3700.0, 4.0], [3800.0, 1.0], [3900.0, 2.0], [4100.0, 2.0], [4200.0, 2.0], [4500.0, 2.0], [4400.0, 3.0], [4800.0, 3.0], [5100.0, 2.0], [5000.0, 1.0], [5300.0, 3.0], [5800.0, 1.0], [5900.0, 2.0], [6000.0, 1.0], [6500.0, 1.0], [6600.0, 1.0], [6800.0, 1.0], [7200.0, 1.0], [9500.0, 1.0], [100.0, 1.0], [200.0, 395.0], [300.0, 393.0], [400.0, 442.0], [500.0, 437.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1239.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2703.0, "series": [{"data": [[0.0, 1239.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2703.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1248.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.86153846153846, "minX": 1.60248774E12, "maxY": 10.0, "series": [{"data": [[1.6024878E12, 10.0], [1.60248828E12, 9.86153846153846], [1.60248798E12, 10.0], [1.60248792E12, 10.0], [1.6024881E12, 10.0], [1.60248804E12, 10.0], [1.60248774E12, 10.0], [1.60248822E12, 10.0], [1.60248816E12, 10.0], [1.60248786E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248828E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 607.0, "minX": 1.0, "maxY": 3683.0, "series": [{"data": [[8.0, 615.0], [4.0, 630.0], [2.0, 1738.0], [1.0, 3683.0], [9.0, 607.0], [10.0, 1076.734800231614], [5.0, 1819.0], [6.0, 1983.0], [3.0, 664.0], [7.0, 1137.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1077.3485549132931]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2223.5666666666666, "minX": 1.60248774E12, "maxY": 3221952.3333333335, "series": [{"data": [[1.6024878E12, 2050554.0833333333], [1.60248828E12, 1617170.85], [1.60248798E12, 2571726.1], [1.60248792E12, 2806347.55], [1.6024881E12, 1991274.1166666667], [1.60248804E12, 2511113.1166666667], [1.60248774E12, 1741742.25], [1.60248822E12, 2436710.85], [1.60248816E12, 3221952.3333333335], [1.60248786E12, 3023906.7666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6024878E12, 4320.983333333334], [1.60248828E12, 2447.8], [1.60248798E12, 4050.75], [1.60248792E12, 4401.0], [1.6024881E12, 4368.433333333333], [1.60248804E12, 3638.4333333333334], [1.60248774E12, 2223.5666666666666], [1.60248822E12, 4586.95], [1.60248816E12, 4372.666666666667], [1.60248786E12, 4166.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248828E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 986.2209302325576, "minX": 1.60248774E12, "maxY": 1272.9576547231266, "series": [{"data": [[1.6024878E12, 1009.0740740740744], [1.60248828E12, 1256.1415384615389], [1.60248798E12, 1102.7858472998143], [1.60248792E12, 1044.3689655172386], [1.6024881E12, 986.2209302325576], [1.60248804E12, 1189.7830374753455], [1.60248774E12, 1272.9576547231266], [1.60248822E12, 991.6357615894029], [1.60248816E12, 1051.0243055555545], [1.60248786E12, 1064.179211469533]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248828E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 984.9551495016607, "minX": 1.60248774E12, "maxY": 1270.5244299674275, "series": [{"data": [[1.6024878E12, 1007.5454545454561], [1.60248828E12, 1254.1846153846159], [1.60248798E12, 1100.6014897579146], [1.60248792E12, 1042.0689655172414], [1.6024881E12, 984.9551495016607], [1.60248804E12, 1187.964497041421], [1.60248774E12, 1270.5244299674275], [1.60248822E12, 990.1274834437079], [1.60248816E12, 1048.8715277777796], [1.60248786E12, 1061.66129032258]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248828E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.015779092702169643, "minX": 1.60248774E12, "maxY": 0.28664495114006533, "series": [{"data": [[1.6024878E12, 0.026936026936026942], [1.60248828E12, 0.02461538461538459], [1.60248798E12, 0.02234636871508379], [1.60248792E12, 0.020689655172413775], [1.6024881E12, 0.021594684385382028], [1.60248804E12, 0.015779092702169643], [1.60248774E12, 0.28664495114006533], [1.60248822E12, 0.01821192052980131], [1.60248816E12, 0.02430555555555558], [1.60248786E12, 0.023297491039426497]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248828E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 199.0, "minX": 1.60248774E12, "maxY": 9532.0, "series": [{"data": [[1.6024878E12, 5838.0], [1.60248828E12, 4482.0], [1.60248798E12, 5971.0], [1.60248792E12, 4496.0], [1.6024881E12, 3687.0], [1.60248804E12, 7262.0], [1.60248774E12, 9532.0], [1.60248822E12, 3355.0], [1.60248816E12, 3480.0], [1.60248786E12, 5188.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6024878E12, 220.1949987232685], [1.60248828E12, 229.93399992227555], [1.60248798E12, 209.5259996151924], [1.60248792E12, 214.0], [1.6024881E12, 213.85399971246719], [1.60248804E12, 236.0], [1.60248774E12, 233.54399985313415], [1.60248822E12, 218.2249992787838], [1.60248816E12, 209.0], [1.60248786E12, 219.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6024878E12, 225.01450051069259], [1.60248828E12, 231.1370001554489], [1.60248798E12, 210.97860015392303], [1.60248792E12, 214.0], [1.6024881E12, 214.93940011501311], [1.60248804E12, 236.0584000968933], [1.60248774E12, 234.04920002937317], [1.60248822E12, 220.94750028848648], [1.60248816E12, 209.0], [1.60248786E12, 219.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6024878E12, 222.87249936163425], [1.60248828E12, 230.48499980568886], [1.60248798E12, 210.3329998075962], [1.60248792E12, 214.0], [1.6024881E12, 214.4569998562336], [1.60248804E12, 236.0], [1.60248774E12, 233.8519999265671], [1.60248822E12, 219.7374996393919], [1.60248816E12, 209.0], [1.60248786E12, 219.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6024878E12, 208.0], [1.60248828E12, 225.0], [1.60248798E12, 199.0], [1.60248792E12, 201.0], [1.6024881E12, 210.0], [1.60248804E12, 234.0], [1.60248774E12, 231.0], [1.60248822E12, 205.0], [1.60248816E12, 201.0], [1.60248786E12, 210.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6024878E12, 886.5], [1.60248828E12, 1135.0], [1.60248798E12, 869.0], [1.60248792E12, 896.5], [1.6024881E12, 835.5], [1.60248804E12, 1010.0], [1.60248774E12, 1066.0], [1.60248822E12, 769.0], [1.60248816E12, 786.5], [1.60248786E12, 818.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248828E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 454.0, "minX": 1.0, "maxY": 2215.0, "series": [{"data": [[2.0, 2043.5], [3.0, 1670.0], [4.0, 1485.5], [5.0, 1444.0], [6.0, 1248.0], [7.0, 1195.0], [8.0, 1149.5], [9.0, 1124.5], [10.0, 919.0], [11.0, 829.0], [12.0, 777.0], [13.0, 758.5], [14.0, 681.5], [15.0, 553.0], [16.0, 521.5], [1.0, 2215.0], [17.0, 502.0], [18.0, 502.5], [19.0, 481.0], [20.0, 465.0], [21.0, 468.0], [22.0, 454.0], [23.0, 462.0], [24.0, 470.5], [25.0, 479.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 453.5, "minX": 1.0, "maxY": 2209.0, "series": [{"data": [[2.0, 2040.0], [3.0, 1669.0], [4.0, 1481.5], [5.0, 1442.0], [6.0, 1243.0], [7.0, 1193.0], [8.0, 1145.5], [9.0, 1124.0], [10.0, 919.0], [11.0, 827.0], [12.0, 776.5], [13.0, 758.0], [14.0, 680.0], [15.0, 553.0], [16.0, 521.5], [1.0, 2209.0], [17.0, 501.0], [18.0, 502.5], [19.0, 480.0], [20.0, 465.0], [21.0, 468.0], [22.0, 453.5], [23.0, 461.5], [24.0, 470.5], [25.0, 479.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.25, "minX": 1.60248774E12, "maxY": 10.066666666666666, "series": [{"data": [[1.6024878E12, 9.9], [1.60248828E12, 5.25], [1.60248798E12, 8.95], [1.60248792E12, 9.666666666666666], [1.6024881E12, 10.033333333333333], [1.60248804E12, 8.45], [1.60248774E12, 5.283333333333333], [1.60248822E12, 10.066666666666666], [1.60248816E12, 9.6], [1.60248786E12, 9.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248828E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.116666666666666, "minX": 1.60248774E12, "maxY": 10.066666666666666, "series": [{"data": [[1.6024878E12, 9.9], [1.60248828E12, 5.416666666666667], [1.60248798E12, 8.95], [1.60248792E12, 9.666666666666666], [1.6024881E12, 10.033333333333333], [1.60248804E12, 8.45], [1.60248774E12, 5.116666666666666], [1.60248822E12, 10.066666666666666], [1.60248816E12, 9.6], [1.60248786E12, 9.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248828E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.116666666666666, "minX": 1.60248774E12, "maxY": 10.066666666666666, "series": [{"data": [[1.6024878E12, 9.9], [1.60248828E12, 5.416666666666667], [1.60248798E12, 8.95], [1.60248792E12, 9.666666666666666], [1.6024881E12, 10.033333333333333], [1.60248804E12, 8.45], [1.60248774E12, 5.116666666666666], [1.60248822E12, 10.066666666666666], [1.60248816E12, 9.6], [1.60248786E12, 9.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248828E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.116666666666666, "minX": 1.60248774E12, "maxY": 10.066666666666666, "series": [{"data": [[1.6024878E12, 9.9], [1.60248828E12, 5.416666666666667], [1.60248798E12, 8.95], [1.60248792E12, 9.666666666666666], [1.6024881E12, 10.033333333333333], [1.60248804E12, 8.45], [1.60248774E12, 5.116666666666666], [1.60248822E12, 10.066666666666666], [1.60248816E12, 9.6], [1.60248786E12, 9.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248828E12, "title": "Total Transactions Per Second"}},
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

