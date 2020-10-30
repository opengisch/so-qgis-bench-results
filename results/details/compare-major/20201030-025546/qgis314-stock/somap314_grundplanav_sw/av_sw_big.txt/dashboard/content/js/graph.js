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
        data: {"result": {"minY": 193.0, "minX": 0.0, "maxY": 6467.0, "series": [{"data": [[0.0, 193.0], [0.1, 197.0], [0.2, 198.0], [0.3, 200.0], [0.4, 201.0], [0.5, 203.0], [0.6, 204.0], [0.7, 206.0], [0.8, 207.0], [0.9, 209.0], [1.0, 210.0], [1.1, 213.0], [1.2, 213.0], [1.3, 214.0], [1.4, 216.0], [1.5, 217.0], [1.6, 218.0], [1.7, 219.0], [1.8, 221.0], [1.9, 222.0], [2.0, 223.0], [2.1, 223.0], [2.2, 224.0], [2.3, 225.0], [2.4, 226.0], [2.5, 227.0], [2.6, 227.0], [2.7, 228.0], [2.8, 229.0], [2.9, 230.0], [3.0, 230.0], [3.1, 231.0], [3.2, 231.0], [3.3, 232.0], [3.4, 232.0], [3.5, 233.0], [3.6, 233.0], [3.7, 234.0], [3.8, 234.0], [3.9, 235.0], [4.0, 235.0], [4.1, 236.0], [4.2, 237.0], [4.3, 238.0], [4.4, 238.0], [4.5, 239.0], [4.6, 240.0], [4.7, 240.0], [4.8, 241.0], [4.9, 242.0], [5.0, 243.0], [5.1, 243.0], [5.2, 244.0], [5.3, 245.0], [5.4, 246.0], [5.5, 246.0], [5.6, 247.0], [5.7, 248.0], [5.8, 249.0], [5.9, 250.0], [6.0, 251.0], [6.1, 251.0], [6.2, 251.0], [6.3, 252.0], [6.4, 254.0], [6.5, 255.0], [6.6, 256.0], [6.7, 258.0], [6.8, 263.0], [6.9, 265.0], [7.0, 267.0], [7.1, 269.0], [7.2, 271.0], [7.3, 274.0], [7.4, 277.0], [7.5, 279.0], [7.6, 281.0], [7.7, 283.0], [7.8, 283.0], [7.9, 286.0], [8.0, 288.0], [8.1, 289.0], [8.2, 291.0], [8.3, 294.0], [8.4, 296.0], [8.5, 298.0], [8.6, 302.0], [8.7, 303.0], [8.8, 305.0], [8.9, 307.0], [9.0, 308.0], [9.1, 309.0], [9.2, 311.0], [9.3, 313.0], [9.4, 315.0], [9.5, 315.0], [9.6, 318.0], [9.7, 319.0], [9.8, 319.0], [9.9, 321.0], [10.0, 321.0], [10.1, 322.0], [10.2, 323.0], [10.3, 324.0], [10.4, 325.0], [10.5, 326.0], [10.6, 327.0], [10.7, 328.0], [10.8, 329.0], [10.9, 330.0], [11.0, 330.0], [11.1, 331.0], [11.2, 332.0], [11.3, 334.0], [11.4, 334.0], [11.5, 335.0], [11.6, 336.0], [11.7, 337.0], [11.8, 337.0], [11.9, 338.0], [12.0, 339.0], [12.1, 340.0], [12.2, 340.0], [12.3, 341.0], [12.4, 341.0], [12.5, 342.0], [12.6, 343.0], [12.7, 345.0], [12.8, 345.0], [12.9, 347.0], [13.0, 348.0], [13.1, 349.0], [13.2, 351.0], [13.3, 352.0], [13.4, 353.0], [13.5, 356.0], [13.6, 359.0], [13.7, 361.0], [13.8, 363.0], [13.9, 365.0], [14.0, 366.0], [14.1, 367.0], [14.2, 369.0], [14.3, 371.0], [14.4, 374.0], [14.5, 375.0], [14.6, 377.0], [14.7, 379.0], [14.8, 381.0], [14.9, 383.0], [15.0, 386.0], [15.1, 388.0], [15.2, 391.0], [15.3, 394.0], [15.4, 395.0], [15.5, 397.0], [15.6, 399.0], [15.7, 401.0], [15.8, 402.0], [15.9, 404.0], [16.0, 404.0], [16.1, 407.0], [16.2, 409.0], [16.3, 411.0], [16.4, 412.0], [16.5, 414.0], [16.6, 415.0], [16.7, 415.0], [16.8, 415.0], [16.9, 416.0], [17.0, 417.0], [17.1, 419.0], [17.2, 420.0], [17.3, 423.0], [17.4, 424.0], [17.5, 425.0], [17.6, 428.0], [17.7, 428.0], [17.8, 429.0], [17.9, 430.0], [18.0, 432.0], [18.1, 433.0], [18.2, 434.0], [18.3, 435.0], [18.4, 437.0], [18.5, 438.0], [18.6, 439.0], [18.7, 441.0], [18.8, 443.0], [18.9, 444.0], [19.0, 446.0], [19.1, 446.0], [19.2, 447.0], [19.3, 449.0], [19.4, 449.0], [19.5, 450.0], [19.6, 451.0], [19.7, 451.0], [19.8, 452.0], [19.9, 453.0], [20.0, 454.0], [20.1, 454.0], [20.2, 455.0], [20.3, 455.0], [20.4, 456.0], [20.5, 457.0], [20.6, 458.0], [20.7, 459.0], [20.8, 461.0], [20.9, 462.0], [21.0, 463.0], [21.1, 464.0], [21.2, 466.0], [21.3, 467.0], [21.4, 468.0], [21.5, 469.0], [21.6, 470.0], [21.7, 471.0], [21.8, 472.0], [21.9, 473.0], [22.0, 474.0], [22.1, 475.0], [22.2, 476.0], [22.3, 477.0], [22.4, 477.0], [22.5, 478.0], [22.6, 478.0], [22.7, 480.0], [22.8, 481.0], [22.9, 481.0], [23.0, 482.0], [23.1, 483.0], [23.2, 484.0], [23.3, 485.0], [23.4, 485.0], [23.5, 486.0], [23.6, 487.0], [23.7, 488.0], [23.8, 489.0], [23.9, 490.0], [24.0, 490.0], [24.1, 491.0], [24.2, 493.0], [24.3, 494.0], [24.4, 496.0], [24.5, 496.0], [24.6, 498.0], [24.7, 498.0], [24.8, 499.0], [24.9, 501.0], [25.0, 502.0], [25.1, 504.0], [25.2, 506.0], [25.3, 507.0], [25.4, 508.0], [25.5, 510.0], [25.6, 511.0], [25.7, 513.0], [25.8, 514.0], [25.9, 515.0], [26.0, 515.0], [26.1, 516.0], [26.2, 517.0], [26.3, 518.0], [26.4, 519.0], [26.5, 520.0], [26.6, 521.0], [26.7, 522.0], [26.8, 522.0], [26.9, 524.0], [27.0, 525.0], [27.1, 527.0], [27.2, 528.0], [27.3, 530.0], [27.4, 532.0], [27.5, 534.0], [27.6, 535.0], [27.7, 536.0], [27.8, 537.0], [27.9, 539.0], [28.0, 540.0], [28.1, 541.0], [28.2, 542.0], [28.3, 543.0], [28.4, 544.0], [28.5, 546.0], [28.6, 548.0], [28.7, 549.0], [28.8, 550.0], [28.9, 552.0], [29.0, 553.0], [29.1, 555.0], [29.2, 556.0], [29.3, 558.0], [29.4, 559.0], [29.5, 560.0], [29.6, 561.0], [29.7, 561.0], [29.8, 562.0], [29.9, 563.0], [30.0, 563.0], [30.1, 565.0], [30.2, 566.0], [30.3, 567.0], [30.4, 567.0], [30.5, 569.0], [30.6, 570.0], [30.7, 571.0], [30.8, 572.0], [30.9, 573.0], [31.0, 575.0], [31.1, 577.0], [31.2, 578.0], [31.3, 579.0], [31.4, 580.0], [31.5, 581.0], [31.6, 582.0], [31.7, 583.0], [31.8, 584.0], [31.9, 585.0], [32.0, 587.0], [32.1, 588.0], [32.2, 589.0], [32.3, 591.0], [32.4, 592.0], [32.5, 593.0], [32.6, 593.0], [32.7, 594.0], [32.8, 594.0], [32.9, 595.0], [33.0, 597.0], [33.1, 598.0], [33.2, 599.0], [33.3, 600.0], [33.4, 601.0], [33.5, 603.0], [33.6, 604.0], [33.7, 606.0], [33.8, 607.0], [33.9, 608.0], [34.0, 609.0], [34.1, 610.0], [34.2, 611.0], [34.3, 612.0], [34.4, 613.0], [34.5, 614.0], [34.6, 615.0], [34.7, 615.0], [34.8, 618.0], [34.9, 618.0], [35.0, 620.0], [35.1, 621.0], [35.2, 622.0], [35.3, 624.0], [35.4, 626.0], [35.5, 627.0], [35.6, 628.0], [35.7, 629.0], [35.8, 630.0], [35.9, 631.0], [36.0, 632.0], [36.1, 633.0], [36.2, 635.0], [36.3, 635.0], [36.4, 637.0], [36.5, 637.0], [36.6, 638.0], [36.7, 639.0], [36.8, 640.0], [36.9, 642.0], [37.0, 643.0], [37.1, 644.0], [37.2, 645.0], [37.3, 646.0], [37.4, 647.0], [37.5, 648.0], [37.6, 649.0], [37.7, 651.0], [37.8, 652.0], [37.9, 653.0], [38.0, 654.0], [38.1, 655.0], [38.2, 655.0], [38.3, 657.0], [38.4, 658.0], [38.5, 658.0], [38.6, 659.0], [38.7, 662.0], [38.8, 662.0], [38.9, 663.0], [39.0, 664.0], [39.1, 665.0], [39.2, 666.0], [39.3, 666.0], [39.4, 667.0], [39.5, 668.0], [39.6, 669.0], [39.7, 672.0], [39.8, 673.0], [39.9, 674.0], [40.0, 675.0], [40.1, 677.0], [40.2, 678.0], [40.3, 678.0], [40.4, 680.0], [40.5, 681.0], [40.6, 682.0], [40.7, 683.0], [40.8, 684.0], [40.9, 686.0], [41.0, 687.0], [41.1, 688.0], [41.2, 689.0], [41.3, 691.0], [41.4, 692.0], [41.5, 693.0], [41.6, 696.0], [41.7, 697.0], [41.8, 698.0], [41.9, 700.0], [42.0, 701.0], [42.1, 702.0], [42.2, 704.0], [42.3, 705.0], [42.4, 706.0], [42.5, 707.0], [42.6, 708.0], [42.7, 711.0], [42.8, 711.0], [42.9, 713.0], [43.0, 714.0], [43.1, 715.0], [43.2, 717.0], [43.3, 719.0], [43.4, 720.0], [43.5, 722.0], [43.6, 723.0], [43.7, 725.0], [43.8, 726.0], [43.9, 728.0], [44.0, 728.0], [44.1, 731.0], [44.2, 732.0], [44.3, 734.0], [44.4, 735.0], [44.5, 737.0], [44.6, 738.0], [44.7, 740.0], [44.8, 744.0], [44.9, 745.0], [45.0, 746.0], [45.1, 747.0], [45.2, 750.0], [45.3, 754.0], [45.4, 756.0], [45.5, 758.0], [45.6, 761.0], [45.7, 762.0], [45.8, 766.0], [45.9, 769.0], [46.0, 771.0], [46.1, 772.0], [46.2, 775.0], [46.3, 779.0], [46.4, 782.0], [46.5, 783.0], [46.6, 786.0], [46.7, 788.0], [46.8, 790.0], [46.9, 792.0], [47.0, 793.0], [47.1, 794.0], [47.2, 796.0], [47.3, 799.0], [47.4, 802.0], [47.5, 803.0], [47.6, 806.0], [47.7, 807.0], [47.8, 810.0], [47.9, 812.0], [48.0, 814.0], [48.1, 816.0], [48.2, 822.0], [48.3, 823.0], [48.4, 825.0], [48.5, 827.0], [48.6, 828.0], [48.7, 829.0], [48.8, 831.0], [48.9, 832.0], [49.0, 834.0], [49.1, 836.0], [49.2, 838.0], [49.3, 838.0], [49.4, 844.0], [49.5, 846.0], [49.6, 849.0], [49.7, 850.0], [49.8, 852.0], [49.9, 856.0], [50.0, 860.0], [50.1, 861.0], [50.2, 865.0], [50.3, 867.0], [50.4, 869.0], [50.5, 873.0], [50.6, 874.0], [50.7, 875.0], [50.8, 880.0], [50.9, 882.0], [51.0, 883.0], [51.1, 886.0], [51.2, 889.0], [51.3, 893.0], [51.4, 896.0], [51.5, 897.0], [51.6, 899.0], [51.7, 901.0], [51.8, 902.0], [51.9, 905.0], [52.0, 908.0], [52.1, 911.0], [52.2, 912.0], [52.3, 917.0], [52.4, 919.0], [52.5, 921.0], [52.6, 925.0], [52.7, 926.0], [52.8, 928.0], [52.9, 929.0], [53.0, 931.0], [53.1, 932.0], [53.2, 935.0], [53.3, 937.0], [53.4, 939.0], [53.5, 940.0], [53.6, 943.0], [53.7, 945.0], [53.8, 947.0], [53.9, 950.0], [54.0, 953.0], [54.1, 954.0], [54.2, 957.0], [54.3, 960.0], [54.4, 962.0], [54.5, 965.0], [54.6, 967.0], [54.7, 969.0], [54.8, 973.0], [54.9, 976.0], [55.0, 980.0], [55.1, 984.0], [55.2, 988.0], [55.3, 989.0], [55.4, 992.0], [55.5, 993.0], [55.6, 995.0], [55.7, 998.0], [55.8, 1000.0], [55.9, 1001.0], [56.0, 1003.0], [56.1, 1005.0], [56.2, 1007.0], [56.3, 1009.0], [56.4, 1011.0], [56.5, 1012.0], [56.6, 1015.0], [56.7, 1016.0], [56.8, 1018.0], [56.9, 1020.0], [57.0, 1021.0], [57.1, 1024.0], [57.2, 1026.0], [57.3, 1029.0], [57.4, 1033.0], [57.5, 1035.0], [57.6, 1036.0], [57.7, 1037.0], [57.8, 1039.0], [57.9, 1041.0], [58.0, 1042.0], [58.1, 1044.0], [58.2, 1046.0], [58.3, 1048.0], [58.4, 1050.0], [58.5, 1053.0], [58.6, 1055.0], [58.7, 1056.0], [58.8, 1057.0], [58.9, 1060.0], [59.0, 1061.0], [59.1, 1063.0], [59.2, 1064.0], [59.3, 1065.0], [59.4, 1067.0], [59.5, 1069.0], [59.6, 1071.0], [59.7, 1073.0], [59.8, 1075.0], [59.9, 1077.0], [60.0, 1079.0], [60.1, 1084.0], [60.2, 1086.0], [60.3, 1088.0], [60.4, 1092.0], [60.5, 1093.0], [60.6, 1097.0], [60.7, 1100.0], [60.8, 1103.0], [60.9, 1104.0], [61.0, 1107.0], [61.1, 1108.0], [61.2, 1109.0], [61.3, 1111.0], [61.4, 1112.0], [61.5, 1114.0], [61.6, 1116.0], [61.7, 1118.0], [61.8, 1121.0], [61.9, 1122.0], [62.0, 1126.0], [62.1, 1128.0], [62.2, 1130.0], [62.3, 1132.0], [62.4, 1133.0], [62.5, 1134.0], [62.6, 1136.0], [62.7, 1138.0], [62.8, 1139.0], [62.9, 1141.0], [63.0, 1143.0], [63.1, 1145.0], [63.2, 1147.0], [63.3, 1148.0], [63.4, 1149.0], [63.5, 1151.0], [63.6, 1152.0], [63.7, 1154.0], [63.8, 1156.0], [63.9, 1158.0], [64.0, 1160.0], [64.1, 1161.0], [64.2, 1163.0], [64.3, 1166.0], [64.4, 1167.0], [64.5, 1169.0], [64.6, 1171.0], [64.7, 1174.0], [64.8, 1176.0], [64.9, 1178.0], [65.0, 1179.0], [65.1, 1180.0], [65.2, 1181.0], [65.3, 1184.0], [65.4, 1187.0], [65.5, 1189.0], [65.6, 1191.0], [65.7, 1192.0], [65.8, 1193.0], [65.9, 1195.0], [66.0, 1196.0], [66.1, 1197.0], [66.2, 1198.0], [66.3, 1199.0], [66.4, 1201.0], [66.5, 1202.0], [66.6, 1203.0], [66.7, 1205.0], [66.8, 1206.0], [66.9, 1209.0], [67.0, 1210.0], [67.1, 1212.0], [67.2, 1214.0], [67.3, 1217.0], [67.4, 1218.0], [67.5, 1221.0], [67.6, 1224.0], [67.7, 1225.0], [67.8, 1228.0], [67.9, 1231.0], [68.0, 1233.0], [68.1, 1235.0], [68.2, 1237.0], [68.3, 1238.0], [68.4, 1240.0], [68.5, 1243.0], [68.6, 1246.0], [68.7, 1247.0], [68.8, 1249.0], [68.9, 1251.0], [69.0, 1253.0], [69.1, 1255.0], [69.2, 1256.0], [69.3, 1258.0], [69.4, 1261.0], [69.5, 1265.0], [69.6, 1268.0], [69.7, 1269.0], [69.8, 1275.0], [69.9, 1276.0], [70.0, 1277.0], [70.1, 1279.0], [70.2, 1281.0], [70.3, 1283.0], [70.4, 1284.0], [70.5, 1288.0], [70.6, 1291.0], [70.7, 1295.0], [70.8, 1297.0], [70.9, 1302.0], [71.0, 1304.0], [71.1, 1307.0], [71.2, 1308.0], [71.3, 1309.0], [71.4, 1310.0], [71.5, 1313.0], [71.6, 1316.0], [71.7, 1318.0], [71.8, 1320.0], [71.9, 1323.0], [72.0, 1327.0], [72.1, 1329.0], [72.2, 1332.0], [72.3, 1334.0], [72.4, 1336.0], [72.5, 1338.0], [72.6, 1343.0], [72.7, 1346.0], [72.8, 1349.0], [72.9, 1351.0], [73.0, 1355.0], [73.1, 1359.0], [73.2, 1361.0], [73.3, 1363.0], [73.4, 1365.0], [73.5, 1368.0], [73.6, 1369.0], [73.7, 1373.0], [73.8, 1375.0], [73.9, 1377.0], [74.0, 1379.0], [74.1, 1381.0], [74.2, 1385.0], [74.3, 1387.0], [74.4, 1389.0], [74.5, 1391.0], [74.6, 1393.0], [74.7, 1395.0], [74.8, 1396.0], [74.9, 1398.0], [75.0, 1401.0], [75.1, 1403.0], [75.2, 1406.0], [75.3, 1408.0], [75.4, 1411.0], [75.5, 1414.0], [75.6, 1417.0], [75.7, 1419.0], [75.8, 1421.0], [75.9, 1424.0], [76.0, 1425.0], [76.1, 1426.0], [76.2, 1427.0], [76.3, 1430.0], [76.4, 1433.0], [76.5, 1435.0], [76.6, 1437.0], [76.7, 1441.0], [76.8, 1444.0], [76.9, 1447.0], [77.0, 1449.0], [77.1, 1451.0], [77.2, 1454.0], [77.3, 1456.0], [77.4, 1458.0], [77.5, 1458.0], [77.6, 1460.0], [77.7, 1462.0], [77.8, 1466.0], [77.9, 1471.0], [78.0, 1473.0], [78.1, 1477.0], [78.2, 1479.0], [78.3, 1481.0], [78.4, 1482.0], [78.5, 1486.0], [78.6, 1488.0], [78.7, 1490.0], [78.8, 1493.0], [78.9, 1494.0], [79.0, 1497.0], [79.1, 1499.0], [79.2, 1504.0], [79.3, 1505.0], [79.4, 1508.0], [79.5, 1512.0], [79.6, 1514.0], [79.7, 1516.0], [79.8, 1519.0], [79.9, 1521.0], [80.0, 1524.0], [80.1, 1525.0], [80.2, 1527.0], [80.3, 1531.0], [80.4, 1534.0], [80.5, 1537.0], [80.6, 1539.0], [80.7, 1540.0], [80.8, 1541.0], [80.9, 1543.0], [81.0, 1545.0], [81.1, 1548.0], [81.2, 1551.0], [81.3, 1552.0], [81.4, 1554.0], [81.5, 1556.0], [81.6, 1558.0], [81.7, 1560.0], [81.8, 1563.0], [81.9, 1566.0], [82.0, 1568.0], [82.1, 1569.0], [82.2, 1571.0], [82.3, 1574.0], [82.4, 1575.0], [82.5, 1578.0], [82.6, 1580.0], [82.7, 1581.0], [82.8, 1584.0], [82.9, 1585.0], [83.0, 1587.0], [83.1, 1592.0], [83.2, 1599.0], [83.3, 1602.0], [83.4, 1605.0], [83.5, 1608.0], [83.6, 1611.0], [83.7, 1615.0], [83.8, 1617.0], [83.9, 1620.0], [84.0, 1623.0], [84.1, 1627.0], [84.2, 1631.0], [84.3, 1636.0], [84.4, 1638.0], [84.5, 1642.0], [84.6, 1643.0], [84.7, 1646.0], [84.8, 1648.0], [84.9, 1651.0], [85.0, 1655.0], [85.1, 1661.0], [85.2, 1662.0], [85.3, 1663.0], [85.4, 1668.0], [85.5, 1672.0], [85.6, 1676.0], [85.7, 1677.0], [85.8, 1680.0], [85.9, 1683.0], [86.0, 1686.0], [86.1, 1691.0], [86.2, 1695.0], [86.3, 1699.0], [86.4, 1703.0], [86.5, 1705.0], [86.6, 1708.0], [86.7, 1709.0], [86.8, 1711.0], [86.9, 1713.0], [87.0, 1717.0], [87.1, 1718.0], [87.2, 1723.0], [87.3, 1727.0], [87.4, 1733.0], [87.5, 1737.0], [87.6, 1743.0], [87.7, 1747.0], [87.8, 1755.0], [87.9, 1760.0], [88.0, 1767.0], [88.1, 1771.0], [88.2, 1777.0], [88.3, 1782.0], [88.4, 1788.0], [88.5, 1792.0], [88.6, 1798.0], [88.7, 1801.0], [88.8, 1806.0], [88.9, 1811.0], [89.0, 1819.0], [89.1, 1822.0], [89.2, 1826.0], [89.3, 1830.0], [89.4, 1835.0], [89.5, 1848.0], [89.6, 1851.0], [89.7, 1856.0], [89.8, 1858.0], [89.9, 1860.0], [90.0, 1868.0], [90.1, 1872.0], [90.2, 1876.0], [90.3, 1881.0], [90.4, 1885.0], [90.5, 1891.0], [90.6, 1896.0], [90.7, 1903.0], [90.8, 1911.0], [90.9, 1916.0], [91.0, 1918.0], [91.1, 1922.0], [91.2, 1926.0], [91.3, 1936.0], [91.4, 1944.0], [91.5, 1952.0], [91.6, 1963.0], [91.7, 1968.0], [91.8, 1981.0], [91.9, 1992.0], [92.0, 2000.0], [92.1, 2007.0], [92.2, 2019.0], [92.3, 2027.0], [92.4, 2032.0], [92.5, 2040.0], [92.6, 2044.0], [92.7, 2049.0], [92.8, 2058.0], [92.9, 2074.0], [93.0, 2080.0], [93.1, 2090.0], [93.2, 2106.0], [93.3, 2117.0], [93.4, 2126.0], [93.5, 2135.0], [93.6, 2150.0], [93.7, 2161.0], [93.8, 2168.0], [93.9, 2174.0], [94.0, 2182.0], [94.1, 2196.0], [94.2, 2207.0], [94.3, 2214.0], [94.4, 2231.0], [94.5, 2240.0], [94.6, 2250.0], [94.7, 2260.0], [94.8, 2275.0], [94.9, 2296.0], [95.0, 2300.0], [95.1, 2314.0], [95.2, 2322.0], [95.3, 2336.0], [95.4, 2344.0], [95.5, 2350.0], [95.6, 2360.0], [95.7, 2373.0], [95.8, 2381.0], [95.9, 2388.0], [96.0, 2402.0], [96.1, 2414.0], [96.2, 2420.0], [96.3, 2433.0], [96.4, 2447.0], [96.5, 2452.0], [96.6, 2464.0], [96.7, 2489.0], [96.8, 2493.0], [96.9, 2520.0], [97.0, 2544.0], [97.1, 2563.0], [97.2, 2580.0], [97.3, 2620.0], [97.4, 2639.0], [97.5, 2686.0], [97.6, 2707.0], [97.7, 2728.0], [97.8, 2753.0], [97.9, 2788.0], [98.0, 2795.0], [98.1, 2829.0], [98.2, 2875.0], [98.3, 2942.0], [98.4, 2950.0], [98.5, 2998.0], [98.6, 3037.0], [98.7, 3098.0], [98.8, 3109.0], [98.9, 3140.0], [99.0, 3204.0], [99.1, 3237.0], [99.2, 3301.0], [99.3, 3479.0], [99.4, 3602.0], [99.5, 3813.0], [99.6, 4164.0], [99.7, 4572.0], [99.8, 5073.0], [99.9, 5789.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 478.0, "series": [{"data": [[600.0, 446.0], [700.0, 286.0], [800.0, 222.0], [900.0, 215.0], [1000.0, 255.0], [1100.0, 293.0], [1200.0, 235.0], [1300.0, 213.0], [1400.0, 217.0], [1500.0, 212.0], [1600.0, 161.0], [1700.0, 121.0], [1800.0, 104.0], [1900.0, 69.0], [2000.0, 60.0], [2100.0, 51.0], [2300.0, 52.0], [2200.0, 43.0], [2400.0, 48.0], [2500.0, 19.0], [2600.0, 14.0], [2800.0, 12.0], [2700.0, 26.0], [2900.0, 14.0], [3000.0, 11.0], [3100.0, 13.0], [3300.0, 5.0], [3200.0, 11.0], [3400.0, 3.0], [3500.0, 2.0], [3600.0, 3.0], [3700.0, 3.0], [3800.0, 2.0], [3900.0, 2.0], [4000.0, 1.0], [4300.0, 1.0], [4100.0, 1.0], [4500.0, 1.0], [4400.0, 3.0], [4600.0, 1.0], [4700.0, 1.0], [4800.0, 1.0], [4900.0, 1.0], [5000.0, 1.0], [5200.0, 1.0], [5400.0, 1.0], [5500.0, 1.0], [5700.0, 4.0], [5800.0, 1.0], [6000.0, 1.0], [6400.0, 1.0], [100.0, 13.0], [200.0, 430.0], [300.0, 367.0], [400.0, 478.0], [500.0, 437.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1083.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2816.0, "series": [{"data": [[0.0, 1291.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2816.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1083.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.59375, "minX": 1.60402842E12, "maxY": 10.0, "series": [{"data": [[1.60402878E12, 10.0], [1.6040286E12, 10.0], [1.6040289E12, 10.0], [1.60402842E12, 10.0], [1.60402872E12, 10.0], [1.60402854E12, 10.0], [1.60402884E12, 10.0], [1.60402866E12, 10.0], [1.60402896E12, 8.59375], [1.60402848E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402896E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 375.0, "minX": 1.0, "maxY": 3302.0, "series": [{"data": [[8.0, 375.0], [4.0, 1228.0], [2.0, 3302.0], [1.0, 3209.0], [9.0, 2039.0], [10.0, 1021.9608183748343], [5.0, 672.0], [6.0, 1916.0], [3.0, 1174.0], [7.0, 1268.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1023.1140655106004]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 250.16666666666666, "minX": 1.60402842E12, "maxY": 3378855.6333333333, "series": [{"data": [[1.60402878E12, 2811566.3833333333], [1.6040286E12, 2968528.5833333335], [1.6040289E12, 2519613.35], [1.60402842E12, 2135829.9166666665], [1.60402872E12, 2378190.4166666665], [1.60402854E12, 3378855.6333333333], [1.60402884E12, 2775595.3], [1.60402866E12, 2705135.183333333], [1.60402896E12, 156418.75], [1.60402848E12, 2142574.3333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60402878E12, 4679.033333333334], [1.6040286E12, 4538.7], [1.6040289E12, 4396.716666666666], [1.60402842E12, 2876.9333333333334], [1.60402872E12, 3980.9], [1.60402854E12, 4597.45], [1.60402884E12, 4947.333333333333], [1.60402866E12, 3638.2166666666667], [1.60402896E12, 250.16666666666666], [1.60402848E12, 4671.883333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402896E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 922.219325153374, "minX": 1.60402842E12, "maxY": 1274.7187499999998, "series": [{"data": [[1.60402878E12, 945.0283018867927], [1.6040286E12, 1009.2909698996657], [1.6040289E12, 1019.4957118353342], [1.60402842E12, 1182.5386533665826], [1.60402872E12, 1107.672694394214], [1.60402854E12, 988.1221122112215], [1.60402884E12, 922.219325153374], [1.60402866E12, 1191.0287474332645], [1.60402896E12, 1274.7187499999998], [1.60402848E12, 939.7975077881614]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402896E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 920.6886503067481, "minX": 1.60402842E12, "maxY": 1273.125, "series": [{"data": [[1.60402878E12, 943.3349056603774], [1.6040286E12, 1007.0418060200676], [1.6040289E12, 1017.955403087479], [1.60402842E12, 1180.1945137157115], [1.60402872E12, 1106.1844484629291], [1.60402854E12, 985.5181518151811], [1.60402884E12, 920.6886503067481], [1.60402866E12, 1188.595482546202], [1.60402896E12, 1273.125], [1.60402848E12, 938.3006230529589]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402896E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60402842E12, "maxY": 0.20947630922693303, "series": [{"data": [[1.60402878E12, 0.020440251572327026], [1.6040286E12, 0.020066889632107014], [1.6040289E12, 0.015437392795883364], [1.60402842E12, 0.20947630922693303], [1.60402872E12, 0.023508137432188027], [1.60402854E12, 0.0297029702970297], [1.60402884E12, 0.019938650306748455], [1.60402866E12, 0.026694045174537977], [1.60402896E12, 0.0], [1.60402848E12, 0.028037383177570104]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402896E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 193.0, "minX": 1.60402842E12, "maxY": 6467.0, "series": [{"data": [[1.60402878E12, 3602.0], [1.6040286E12, 4408.0], [1.6040289E12, 4667.0], [1.60402842E12, 5765.0], [1.60402872E12, 6467.0], [1.60402854E12, 5789.0], [1.60402884E12, 3108.0], [1.60402866E12, 5789.0], [1.60402896E12, 3302.0], [1.60402848E12, 5789.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60402878E12, 208.1989995443821], [1.6040286E12, 203.0], [1.6040289E12, 213.76799958229066], [1.60402842E12, 208.0], [1.60402872E12, 222.8179982829094], [1.60402854E12, 208.38899956583975], [1.60402884E12, 204.75399968862533], [1.60402866E12, 202.78399976730347], [1.60402896E12, 325.0], [1.60402848E12, 208.78699984669686]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60402878E12, 209.30630006074907], [1.6040286E12, 203.0], [1.6040289E12, 215.34480016708375], [1.60402842E12, 208.0], [1.60402872E12, 223.9692001056671], [1.60402854E12, 210.01860011577605], [1.60402884E12, 205.92940012454986], [1.60402866E12, 203.66240009307862], [1.60402896E12, 325.0], [1.60402848E12, 210.46280024528502]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60402878E12, 209.05149992406368], [1.6040286E12, 203.0], [1.6040289E12, 214.64399979114532], [1.60402842E12, 208.0], [1.60402872E12, 223.5259998679161], [1.60402854E12, 209.2994997829199], [1.60402884E12, 205.40699984431268], [1.60402866E12, 203.27199988365174], [1.60402896E12, 325.0], [1.60402848E12, 209.4339996933937]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60402878E12, 196.0], [1.6040286E12, 193.0], [1.6040289E12, 198.0], [1.60402842E12, 200.0], [1.60402872E12, 200.0], [1.60402854E12, 198.0], [1.60402884E12, 193.0], [1.60402866E12, 199.0], [1.60402896E12, 325.0], [1.60402848E12, 194.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60402878E12, 743.0], [1.6040286E12, 883.5], [1.6040289E12, 832.0], [1.60402842E12, 1060.0], [1.60402872E12, 972.0], [1.60402854E12, 684.0], [1.60402884E12, 710.5], [1.60402866E12, 1075.0], [1.60402896E12, 1126.0], [1.60402848E12, 736.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402896E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 418.0, "minX": 1.0, "maxY": 3255.5, "series": [{"data": [[2.0, 1615.5], [3.0, 2128.0], [4.0, 1569.0], [5.0, 1326.0], [6.0, 1222.5], [7.0, 1190.0], [8.0, 1193.5], [9.0, 1062.0], [10.0, 1045.0], [11.0, 832.5], [12.0, 751.0], [13.0, 663.0], [14.0, 648.0], [15.0, 614.0], [16.0, 548.0], [1.0, 3255.5], [17.0, 468.0], [18.0, 486.0], [19.0, 463.0], [20.0, 471.0], [21.0, 429.0], [22.0, 454.0], [23.0, 450.0], [24.0, 467.0], [25.0, 418.0], [26.0, 438.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 418.0, "minX": 1.0, "maxY": 3249.5, "series": [{"data": [[2.0, 1606.5], [3.0, 2122.5], [4.0, 1563.5], [5.0, 1321.5], [6.0, 1220.5], [7.0, 1183.0], [8.0, 1187.0], [9.0, 1060.0], [10.0, 1044.0], [11.0, 831.5], [12.0, 750.0], [13.0, 663.0], [14.0, 646.5], [15.0, 613.5], [16.0, 548.0], [1.0, 3249.5], [17.0, 467.5], [18.0, 485.5], [19.0, 463.0], [20.0, 470.5], [21.0, 428.0], [22.0, 454.0], [23.0, 450.0], [24.0, 467.0], [25.0, 418.0], [26.0, 438.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.60402842E12, "maxY": 10.866666666666667, "series": [{"data": [[1.60402878E12, 10.6], [1.6040286E12, 9.966666666666667], [1.6040289E12, 9.716666666666667], [1.60402842E12, 6.85], [1.60402872E12, 9.216666666666667], [1.60402854E12, 10.1], [1.60402884E12, 10.866666666666667], [1.60402866E12, 8.116666666666667], [1.60402896E12, 0.36666666666666664], [1.60402848E12, 10.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402896E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.60402842E12, "maxY": 10.866666666666667, "series": [{"data": [[1.60402878E12, 10.6], [1.6040286E12, 9.966666666666667], [1.6040289E12, 9.716666666666667], [1.60402842E12, 6.683333333333334], [1.60402872E12, 9.216666666666667], [1.60402854E12, 10.1], [1.60402884E12, 10.866666666666667], [1.60402866E12, 8.116666666666667], [1.60402896E12, 0.5333333333333333], [1.60402848E12, 10.7]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402896E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.60402842E12, "maxY": 10.866666666666667, "series": [{"data": [[1.60402878E12, 10.6], [1.6040286E12, 9.966666666666667], [1.6040289E12, 9.716666666666667], [1.60402842E12, 6.683333333333334], [1.60402872E12, 9.216666666666667], [1.60402854E12, 10.1], [1.60402884E12, 10.866666666666667], [1.60402866E12, 8.116666666666667], [1.60402896E12, 0.5333333333333333], [1.60402848E12, 10.7]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402896E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.60402842E12, "maxY": 10.866666666666667, "series": [{"data": [[1.60402878E12, 10.6], [1.6040286E12, 9.966666666666667], [1.6040289E12, 9.716666666666667], [1.60402842E12, 6.683333333333334], [1.60402872E12, 9.216666666666667], [1.60402854E12, 10.1], [1.60402884E12, 10.866666666666667], [1.60402866E12, 8.116666666666667], [1.60402896E12, 0.5333333333333333], [1.60402848E12, 10.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402896E12, "title": "Total Transactions Per Second"}},
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

