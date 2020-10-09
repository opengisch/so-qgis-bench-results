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
        data: {"result": {"minY": 189.0, "minX": 0.0, "maxY": 9129.0, "series": [{"data": [[0.0, 189.0], [0.1, 194.0], [0.2, 195.0], [0.3, 196.0], [0.4, 197.0], [0.5, 199.0], [0.6, 201.0], [0.7, 202.0], [0.8, 203.0], [0.9, 203.0], [1.0, 204.0], [1.1, 205.0], [1.2, 206.0], [1.3, 207.0], [1.4, 207.0], [1.5, 208.0], [1.6, 209.0], [1.7, 209.0], [1.8, 209.0], [1.9, 210.0], [2.0, 211.0], [2.1, 212.0], [2.2, 213.0], [2.3, 214.0], [2.4, 214.0], [2.5, 215.0], [2.6, 215.0], [2.7, 216.0], [2.8, 218.0], [2.9, 219.0], [3.0, 219.0], [3.1, 221.0], [3.2, 221.0], [3.3, 222.0], [3.4, 223.0], [3.5, 224.0], [3.6, 224.0], [3.7, 225.0], [3.8, 226.0], [3.9, 226.0], [4.0, 227.0], [4.1, 227.0], [4.2, 228.0], [4.3, 229.0], [4.4, 230.0], [4.5, 231.0], [4.6, 231.0], [4.7, 232.0], [4.8, 233.0], [4.9, 233.0], [5.0, 234.0], [5.1, 234.0], [5.2, 235.0], [5.3, 236.0], [5.4, 236.0], [5.5, 237.0], [5.6, 238.0], [5.7, 239.0], [5.8, 239.0], [5.9, 240.0], [6.0, 240.0], [6.1, 242.0], [6.2, 242.0], [6.3, 244.0], [6.4, 245.0], [6.5, 245.0], [6.6, 247.0], [6.7, 247.0], [6.8, 248.0], [6.9, 250.0], [7.0, 251.0], [7.1, 252.0], [7.2, 253.0], [7.3, 254.0], [7.4, 260.0], [7.5, 262.0], [7.6, 265.0], [7.7, 268.0], [7.8, 271.0], [7.9, 273.0], [8.0, 277.0], [8.1, 280.0], [8.2, 282.0], [8.3, 284.0], [8.4, 286.0], [8.5, 287.0], [8.6, 288.0], [8.7, 290.0], [8.8, 292.0], [8.9, 293.0], [9.0, 295.0], [9.1, 298.0], [9.2, 300.0], [9.3, 301.0], [9.4, 303.0], [9.5, 305.0], [9.6, 307.0], [9.7, 308.0], [9.8, 310.0], [9.9, 312.0], [10.0, 313.0], [10.1, 313.0], [10.2, 314.0], [10.3, 317.0], [10.4, 317.0], [10.5, 318.0], [10.6, 319.0], [10.7, 319.0], [10.8, 320.0], [10.9, 321.0], [11.0, 321.0], [11.1, 322.0], [11.2, 323.0], [11.3, 323.0], [11.4, 323.0], [11.5, 324.0], [11.6, 325.0], [11.7, 325.0], [11.8, 326.0], [11.9, 327.0], [12.0, 327.0], [12.1, 328.0], [12.2, 329.0], [12.3, 330.0], [12.4, 330.0], [12.5, 331.0], [12.6, 332.0], [12.7, 333.0], [12.8, 334.0], [12.9, 334.0], [13.0, 335.0], [13.1, 336.0], [13.2, 337.0], [13.3, 337.0], [13.4, 339.0], [13.5, 340.0], [13.6, 340.0], [13.7, 341.0], [13.8, 342.0], [13.9, 342.0], [14.0, 343.0], [14.1, 345.0], [14.2, 346.0], [14.3, 346.0], [14.4, 347.0], [14.5, 349.0], [14.6, 349.0], [14.7, 351.0], [14.8, 352.0], [14.9, 352.0], [15.0, 353.0], [15.1, 355.0], [15.2, 357.0], [15.3, 359.0], [15.4, 359.0], [15.5, 362.0], [15.6, 365.0], [15.7, 366.0], [15.8, 367.0], [15.9, 369.0], [16.0, 370.0], [16.1, 371.0], [16.2, 373.0], [16.3, 377.0], [16.4, 379.0], [16.5, 382.0], [16.6, 384.0], [16.7, 387.0], [16.8, 389.0], [16.9, 391.0], [17.0, 395.0], [17.1, 397.0], [17.2, 398.0], [17.3, 402.0], [17.4, 403.0], [17.5, 405.0], [17.6, 408.0], [17.7, 410.0], [17.8, 412.0], [17.9, 414.0], [18.0, 415.0], [18.1, 416.0], [18.2, 418.0], [18.3, 420.0], [18.4, 422.0], [18.5, 423.0], [18.6, 424.0], [18.7, 425.0], [18.8, 428.0], [18.9, 429.0], [19.0, 430.0], [19.1, 431.0], [19.2, 432.0], [19.3, 434.0], [19.4, 436.0], [19.5, 439.0], [19.6, 440.0], [19.7, 441.0], [19.8, 442.0], [19.9, 443.0], [20.0, 445.0], [20.1, 446.0], [20.2, 447.0], [20.3, 448.0], [20.4, 449.0], [20.5, 450.0], [20.6, 451.0], [20.7, 452.0], [20.8, 454.0], [20.9, 455.0], [21.0, 455.0], [21.1, 456.0], [21.2, 457.0], [21.3, 458.0], [21.4, 459.0], [21.5, 459.0], [21.6, 460.0], [21.7, 462.0], [21.8, 462.0], [21.9, 463.0], [22.0, 463.0], [22.1, 464.0], [22.2, 465.0], [22.3, 466.0], [22.4, 467.0], [22.5, 467.0], [22.6, 468.0], [22.7, 468.0], [22.8, 470.0], [22.9, 470.0], [23.0, 471.0], [23.1, 471.0], [23.2, 472.0], [23.3, 473.0], [23.4, 474.0], [23.5, 475.0], [23.6, 476.0], [23.7, 477.0], [23.8, 478.0], [23.9, 479.0], [24.0, 480.0], [24.1, 480.0], [24.2, 480.0], [24.3, 481.0], [24.4, 482.0], [24.5, 483.0], [24.6, 484.0], [24.7, 484.0], [24.8, 485.0], [24.9, 486.0], [25.0, 487.0], [25.1, 488.0], [25.2, 489.0], [25.3, 489.0], [25.4, 490.0], [25.5, 491.0], [25.6, 492.0], [25.7, 493.0], [25.8, 495.0], [25.9, 496.0], [26.0, 496.0], [26.1, 498.0], [26.2, 498.0], [26.3, 499.0], [26.4, 500.0], [26.5, 501.0], [26.6, 502.0], [26.7, 503.0], [26.8, 505.0], [26.9, 506.0], [27.0, 507.0], [27.1, 508.0], [27.2, 509.0], [27.3, 510.0], [27.4, 512.0], [27.5, 513.0], [27.6, 514.0], [27.7, 514.0], [27.8, 515.0], [27.9, 517.0], [28.0, 518.0], [28.1, 519.0], [28.2, 521.0], [28.3, 523.0], [28.4, 525.0], [28.5, 526.0], [28.6, 529.0], [28.7, 530.0], [28.8, 531.0], [28.9, 533.0], [29.0, 534.0], [29.1, 536.0], [29.2, 539.0], [29.3, 541.0], [29.4, 542.0], [29.5, 545.0], [29.6, 548.0], [29.7, 550.0], [29.8, 553.0], [29.9, 555.0], [30.0, 556.0], [30.1, 556.0], [30.2, 558.0], [30.3, 559.0], [30.4, 560.0], [30.5, 562.0], [30.6, 563.0], [30.7, 565.0], [30.8, 566.0], [30.9, 567.0], [31.0, 568.0], [31.1, 569.0], [31.2, 572.0], [31.3, 573.0], [31.4, 573.0], [31.5, 574.0], [31.6, 575.0], [31.7, 576.0], [31.8, 576.0], [31.9, 579.0], [32.0, 582.0], [32.1, 583.0], [32.2, 584.0], [32.3, 587.0], [32.4, 588.0], [32.5, 591.0], [32.6, 591.0], [32.7, 593.0], [32.8, 594.0], [32.9, 595.0], [33.0, 596.0], [33.1, 596.0], [33.2, 599.0], [33.3, 600.0], [33.4, 600.0], [33.5, 602.0], [33.6, 605.0], [33.7, 607.0], [33.8, 608.0], [33.9, 609.0], [34.0, 609.0], [34.1, 611.0], [34.2, 612.0], [34.3, 613.0], [34.4, 614.0], [34.5, 614.0], [34.6, 615.0], [34.7, 616.0], [34.8, 617.0], [34.9, 618.0], [35.0, 619.0], [35.1, 620.0], [35.2, 622.0], [35.3, 623.0], [35.4, 624.0], [35.5, 626.0], [35.6, 626.0], [35.7, 629.0], [35.8, 630.0], [35.9, 631.0], [36.0, 632.0], [36.1, 633.0], [36.2, 634.0], [36.3, 635.0], [36.4, 637.0], [36.5, 638.0], [36.6, 641.0], [36.7, 642.0], [36.8, 643.0], [36.9, 644.0], [37.0, 645.0], [37.1, 646.0], [37.2, 647.0], [37.3, 648.0], [37.4, 648.0], [37.5, 649.0], [37.6, 651.0], [37.7, 651.0], [37.8, 653.0], [37.9, 654.0], [38.0, 655.0], [38.1, 656.0], [38.2, 658.0], [38.3, 660.0], [38.4, 661.0], [38.5, 661.0], [38.6, 662.0], [38.7, 664.0], [38.8, 664.0], [38.9, 666.0], [39.0, 666.0], [39.1, 667.0], [39.2, 668.0], [39.3, 669.0], [39.4, 670.0], [39.5, 672.0], [39.6, 673.0], [39.7, 673.0], [39.8, 675.0], [39.9, 676.0], [40.0, 678.0], [40.1, 679.0], [40.2, 680.0], [40.3, 681.0], [40.4, 683.0], [40.5, 684.0], [40.6, 685.0], [40.7, 686.0], [40.8, 686.0], [40.9, 687.0], [41.0, 689.0], [41.1, 692.0], [41.2, 693.0], [41.3, 695.0], [41.4, 696.0], [41.5, 697.0], [41.6, 698.0], [41.7, 700.0], [41.8, 700.0], [41.9, 702.0], [42.0, 703.0], [42.1, 704.0], [42.2, 706.0], [42.3, 708.0], [42.4, 709.0], [42.5, 714.0], [42.6, 716.0], [42.7, 716.0], [42.8, 717.0], [42.9, 719.0], [43.0, 721.0], [43.1, 722.0], [43.2, 722.0], [43.3, 723.0], [43.4, 726.0], [43.5, 729.0], [43.6, 730.0], [43.7, 732.0], [43.8, 734.0], [43.9, 735.0], [44.0, 738.0], [44.1, 740.0], [44.2, 741.0], [44.3, 743.0], [44.4, 744.0], [44.5, 744.0], [44.6, 746.0], [44.7, 747.0], [44.8, 750.0], [44.9, 752.0], [45.0, 753.0], [45.1, 756.0], [45.2, 759.0], [45.3, 761.0], [45.4, 762.0], [45.5, 763.0], [45.6, 764.0], [45.7, 766.0], [45.8, 768.0], [45.9, 770.0], [46.0, 772.0], [46.1, 775.0], [46.2, 777.0], [46.3, 779.0], [46.4, 781.0], [46.5, 783.0], [46.6, 785.0], [46.7, 786.0], [46.8, 787.0], [46.9, 789.0], [47.0, 790.0], [47.1, 792.0], [47.2, 794.0], [47.3, 795.0], [47.4, 797.0], [47.5, 799.0], [47.6, 800.0], [47.7, 802.0], [47.8, 803.0], [47.9, 804.0], [48.0, 805.0], [48.1, 806.0], [48.2, 811.0], [48.3, 814.0], [48.4, 817.0], [48.5, 819.0], [48.6, 823.0], [48.7, 824.0], [48.8, 828.0], [48.9, 830.0], [49.0, 832.0], [49.1, 833.0], [49.2, 835.0], [49.3, 837.0], [49.4, 839.0], [49.5, 844.0], [49.6, 846.0], [49.7, 848.0], [49.8, 850.0], [49.9, 851.0], [50.0, 853.0], [50.1, 854.0], [50.2, 856.0], [50.3, 858.0], [50.4, 859.0], [50.5, 863.0], [50.6, 865.0], [50.7, 869.0], [50.8, 872.0], [50.9, 874.0], [51.0, 878.0], [51.1, 879.0], [51.2, 882.0], [51.3, 886.0], [51.4, 889.0], [51.5, 892.0], [51.6, 895.0], [51.7, 897.0], [51.8, 898.0], [51.9, 900.0], [52.0, 902.0], [52.1, 906.0], [52.2, 908.0], [52.3, 911.0], [52.4, 912.0], [52.5, 913.0], [52.6, 917.0], [52.7, 923.0], [52.8, 925.0], [52.9, 929.0], [53.0, 932.0], [53.1, 932.0], [53.2, 935.0], [53.3, 936.0], [53.4, 937.0], [53.5, 939.0], [53.6, 940.0], [53.7, 942.0], [53.8, 945.0], [53.9, 946.0], [54.0, 948.0], [54.1, 952.0], [54.2, 954.0], [54.3, 956.0], [54.4, 958.0], [54.5, 962.0], [54.6, 963.0], [54.7, 965.0], [54.8, 966.0], [54.9, 968.0], [55.0, 970.0], [55.1, 972.0], [55.2, 974.0], [55.3, 976.0], [55.4, 979.0], [55.5, 982.0], [55.6, 984.0], [55.7, 987.0], [55.8, 990.0], [55.9, 993.0], [56.0, 996.0], [56.1, 998.0], [56.2, 999.0], [56.3, 1000.0], [56.4, 1001.0], [56.5, 1004.0], [56.6, 1007.0], [56.7, 1008.0], [56.8, 1009.0], [56.9, 1011.0], [57.0, 1013.0], [57.1, 1016.0], [57.2, 1019.0], [57.3, 1020.0], [57.4, 1024.0], [57.5, 1026.0], [57.6, 1027.0], [57.7, 1030.0], [57.8, 1031.0], [57.9, 1033.0], [58.0, 1035.0], [58.1, 1036.0], [58.2, 1039.0], [58.3, 1040.0], [58.4, 1042.0], [58.5, 1043.0], [58.6, 1045.0], [58.7, 1046.0], [58.8, 1048.0], [58.9, 1050.0], [59.0, 1050.0], [59.1, 1052.0], [59.2, 1054.0], [59.3, 1055.0], [59.4, 1058.0], [59.5, 1059.0], [59.6, 1061.0], [59.7, 1063.0], [59.8, 1064.0], [59.9, 1066.0], [60.0, 1069.0], [60.1, 1070.0], [60.2, 1072.0], [60.3, 1074.0], [60.4, 1075.0], [60.5, 1076.0], [60.6, 1078.0], [60.7, 1081.0], [60.8, 1082.0], [60.9, 1083.0], [61.0, 1085.0], [61.1, 1086.0], [61.2, 1088.0], [61.3, 1092.0], [61.4, 1095.0], [61.5, 1095.0], [61.6, 1097.0], [61.7, 1101.0], [61.8, 1101.0], [61.9, 1104.0], [62.0, 1106.0], [62.1, 1108.0], [62.2, 1109.0], [62.3, 1111.0], [62.4, 1113.0], [62.5, 1115.0], [62.6, 1117.0], [62.7, 1118.0], [62.8, 1121.0], [62.9, 1123.0], [63.0, 1124.0], [63.1, 1126.0], [63.2, 1127.0], [63.3, 1128.0], [63.4, 1130.0], [63.5, 1134.0], [63.6, 1136.0], [63.7, 1139.0], [63.8, 1140.0], [63.9, 1142.0], [64.0, 1143.0], [64.1, 1145.0], [64.2, 1147.0], [64.3, 1149.0], [64.4, 1152.0], [64.5, 1156.0], [64.6, 1160.0], [64.7, 1161.0], [64.8, 1163.0], [64.9, 1167.0], [65.0, 1169.0], [65.1, 1169.0], [65.2, 1171.0], [65.3, 1174.0], [65.4, 1177.0], [65.5, 1179.0], [65.6, 1183.0], [65.7, 1185.0], [65.8, 1187.0], [65.9, 1189.0], [66.0, 1191.0], [66.1, 1193.0], [66.2, 1196.0], [66.3, 1198.0], [66.4, 1199.0], [66.5, 1202.0], [66.6, 1204.0], [66.7, 1205.0], [66.8, 1206.0], [66.9, 1209.0], [67.0, 1212.0], [67.1, 1213.0], [67.2, 1214.0], [67.3, 1217.0], [67.4, 1218.0], [67.5, 1220.0], [67.6, 1223.0], [67.7, 1228.0], [67.8, 1229.0], [67.9, 1231.0], [68.0, 1234.0], [68.1, 1237.0], [68.2, 1238.0], [68.3, 1239.0], [68.4, 1240.0], [68.5, 1242.0], [68.6, 1244.0], [68.7, 1246.0], [68.8, 1248.0], [68.9, 1249.0], [69.0, 1250.0], [69.1, 1252.0], [69.2, 1255.0], [69.3, 1255.0], [69.4, 1257.0], [69.5, 1260.0], [69.6, 1262.0], [69.7, 1264.0], [69.8, 1267.0], [69.9, 1269.0], [70.0, 1272.0], [70.1, 1272.0], [70.2, 1275.0], [70.3, 1277.0], [70.4, 1278.0], [70.5, 1281.0], [70.6, 1284.0], [70.7, 1287.0], [70.8, 1290.0], [70.9, 1292.0], [71.0, 1294.0], [71.1, 1296.0], [71.2, 1300.0], [71.3, 1305.0], [71.4, 1309.0], [71.5, 1312.0], [71.6, 1319.0], [71.7, 1323.0], [71.8, 1330.0], [71.9, 1331.0], [72.0, 1333.0], [72.1, 1335.0], [72.2, 1336.0], [72.3, 1338.0], [72.4, 1338.0], [72.5, 1339.0], [72.6, 1343.0], [72.7, 1347.0], [72.8, 1351.0], [72.9, 1353.0], [73.0, 1355.0], [73.1, 1358.0], [73.2, 1362.0], [73.3, 1366.0], [73.4, 1370.0], [73.5, 1373.0], [73.6, 1377.0], [73.7, 1379.0], [73.8, 1382.0], [73.9, 1385.0], [74.0, 1386.0], [74.1, 1391.0], [74.2, 1393.0], [74.3, 1394.0], [74.4, 1396.0], [74.5, 1398.0], [74.6, 1403.0], [74.7, 1407.0], [74.8, 1409.0], [74.9, 1411.0], [75.0, 1415.0], [75.1, 1418.0], [75.2, 1420.0], [75.3, 1421.0], [75.4, 1424.0], [75.5, 1426.0], [75.6, 1428.0], [75.7, 1430.0], [75.8, 1432.0], [75.9, 1434.0], [76.0, 1436.0], [76.1, 1438.0], [76.2, 1444.0], [76.3, 1445.0], [76.4, 1449.0], [76.5, 1452.0], [76.6, 1453.0], [76.7, 1455.0], [76.8, 1456.0], [76.9, 1459.0], [77.0, 1463.0], [77.1, 1464.0], [77.2, 1468.0], [77.3, 1469.0], [77.4, 1471.0], [77.5, 1475.0], [77.6, 1477.0], [77.7, 1478.0], [77.8, 1481.0], [77.9, 1482.0], [78.0, 1483.0], [78.1, 1485.0], [78.2, 1487.0], [78.3, 1490.0], [78.4, 1495.0], [78.5, 1498.0], [78.6, 1502.0], [78.7, 1503.0], [78.8, 1505.0], [78.9, 1508.0], [79.0, 1510.0], [79.1, 1512.0], [79.2, 1514.0], [79.3, 1515.0], [79.4, 1517.0], [79.5, 1518.0], [79.6, 1519.0], [79.7, 1520.0], [79.8, 1522.0], [79.9, 1524.0], [80.0, 1527.0], [80.1, 1529.0], [80.2, 1530.0], [80.3, 1532.0], [80.4, 1535.0], [80.5, 1537.0], [80.6, 1537.0], [80.7, 1540.0], [80.8, 1542.0], [80.9, 1544.0], [81.0, 1546.0], [81.1, 1553.0], [81.2, 1555.0], [81.3, 1557.0], [81.4, 1557.0], [81.5, 1560.0], [81.6, 1562.0], [81.7, 1565.0], [81.8, 1568.0], [81.9, 1572.0], [82.0, 1575.0], [82.1, 1577.0], [82.2, 1580.0], [82.3, 1582.0], [82.4, 1586.0], [82.5, 1592.0], [82.6, 1594.0], [82.7, 1595.0], [82.8, 1599.0], [82.9, 1603.0], [83.0, 1605.0], [83.1, 1608.0], [83.2, 1612.0], [83.3, 1616.0], [83.4, 1620.0], [83.5, 1622.0], [83.6, 1626.0], [83.7, 1629.0], [83.8, 1634.0], [83.9, 1638.0], [84.0, 1642.0], [84.1, 1643.0], [84.2, 1645.0], [84.3, 1651.0], [84.4, 1656.0], [84.5, 1659.0], [84.6, 1663.0], [84.7, 1667.0], [84.8, 1669.0], [84.9, 1680.0], [85.0, 1682.0], [85.1, 1687.0], [85.2, 1689.0], [85.3, 1693.0], [85.4, 1696.0], [85.5, 1700.0], [85.6, 1707.0], [85.7, 1709.0], [85.8, 1716.0], [85.9, 1724.0], [86.0, 1726.0], [86.1, 1732.0], [86.2, 1735.0], [86.3, 1738.0], [86.4, 1741.0], [86.5, 1743.0], [86.6, 1748.0], [86.7, 1749.0], [86.8, 1752.0], [86.9, 1755.0], [87.0, 1764.0], [87.1, 1767.0], [87.2, 1770.0], [87.3, 1781.0], [87.4, 1783.0], [87.5, 1790.0], [87.6, 1792.0], [87.7, 1802.0], [87.8, 1809.0], [87.9, 1814.0], [88.0, 1822.0], [88.1, 1823.0], [88.2, 1829.0], [88.3, 1832.0], [88.4, 1836.0], [88.5, 1845.0], [88.6, 1851.0], [88.7, 1855.0], [88.8, 1857.0], [88.9, 1862.0], [89.0, 1869.0], [89.1, 1876.0], [89.2, 1880.0], [89.3, 1882.0], [89.4, 1885.0], [89.5, 1889.0], [89.6, 1894.0], [89.7, 1897.0], [89.8, 1902.0], [89.9, 1903.0], [90.0, 1908.0], [90.1, 1912.0], [90.2, 1918.0], [90.3, 1931.0], [90.4, 1938.0], [90.5, 1943.0], [90.6, 1949.0], [90.7, 1954.0], [90.8, 1966.0], [90.9, 1971.0], [91.0, 1979.0], [91.1, 1991.0], [91.2, 1997.0], [91.3, 2007.0], [91.4, 2018.0], [91.5, 2028.0], [91.6, 2033.0], [91.7, 2040.0], [91.8, 2045.0], [91.9, 2054.0], [92.0, 2060.0], [92.1, 2070.0], [92.2, 2078.0], [92.3, 2093.0], [92.4, 2108.0], [92.5, 2117.0], [92.6, 2130.0], [92.7, 2134.0], [92.8, 2141.0], [92.9, 2145.0], [93.0, 2149.0], [93.1, 2167.0], [93.2, 2175.0], [93.3, 2180.0], [93.4, 2188.0], [93.5, 2207.0], [93.6, 2213.0], [93.7, 2224.0], [93.8, 2235.0], [93.9, 2246.0], [94.0, 2250.0], [94.1, 2258.0], [94.2, 2277.0], [94.3, 2289.0], [94.4, 2298.0], [94.5, 2309.0], [94.6, 2322.0], [94.7, 2328.0], [94.8, 2348.0], [94.9, 2360.0], [95.0, 2369.0], [95.1, 2375.0], [95.2, 2380.0], [95.3, 2396.0], [95.4, 2406.0], [95.5, 2418.0], [95.6, 2422.0], [95.7, 2432.0], [95.8, 2446.0], [95.9, 2454.0], [96.0, 2460.0], [96.1, 2465.0], [96.2, 2479.0], [96.3, 2499.0], [96.4, 2509.0], [96.5, 2529.0], [96.6, 2541.0], [96.7, 2554.0], [96.8, 2562.0], [96.9, 2578.0], [97.0, 2594.0], [97.1, 2610.0], [97.2, 2639.0], [97.3, 2666.0], [97.4, 2703.0], [97.5, 2748.0], [97.6, 2765.0], [97.7, 2779.0], [97.8, 2813.0], [97.9, 2835.0], [98.0, 2849.0], [98.1, 2862.0], [98.2, 2888.0], [98.3, 2917.0], [98.4, 2955.0], [98.5, 2996.0], [98.6, 3032.0], [98.7, 3054.0], [98.8, 3109.0], [98.9, 3191.0], [99.0, 3283.0], [99.1, 3317.0], [99.2, 3374.0], [99.3, 3448.0], [99.4, 3478.0], [99.5, 3689.0], [99.6, 3884.0], [99.7, 4352.0], [99.8, 4701.0], [99.9, 5502.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 471.0, "series": [{"data": [[600.0, 435.0], [700.0, 303.0], [800.0, 228.0], [900.0, 228.0], [1000.0, 279.0], [1100.0, 247.0], [1200.0, 247.0], [1300.0, 174.0], [1400.0, 208.0], [1500.0, 222.0], [1600.0, 137.0], [1700.0, 114.0], [1800.0, 107.0], [1900.0, 80.0], [2000.0, 57.0], [2100.0, 56.0], [2300.0, 46.0], [2200.0, 52.0], [2400.0, 51.0], [2500.0, 37.0], [2600.0, 19.0], [2800.0, 25.0], [2700.0, 20.0], [2900.0, 14.0], [3000.0, 12.0], [3100.0, 8.0], [3300.0, 11.0], [3200.0, 7.0], [3400.0, 8.0], [3500.0, 3.0], [3600.0, 4.0], [3700.0, 1.0], [3800.0, 3.0], [3900.0, 1.0], [4300.0, 3.0], [4200.0, 1.0], [4100.0, 1.0], [4500.0, 1.0], [4400.0, 1.0], [4600.0, 1.0], [4800.0, 2.0], [4700.0, 1.0], [4900.0, 1.0], [5100.0, 1.0], [5500.0, 1.0], [6500.0, 1.0], [6600.0, 2.0], [6400.0, 1.0], [9100.0, 1.0], [100.0, 26.0], [200.0, 450.0], [300.0, 419.0], [400.0, 471.0], [500.0, 362.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2706.0, "series": [{"data": [[0.0, 1372.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2706.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1112.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.921602787456449, "minX": 1.60224948E12, "maxY": 10.0, "series": [{"data": [[1.6022499E12, 10.0], [1.60224972E12, 10.0], [1.60224954E12, 10.0], [1.60224984E12, 10.0], [1.60224966E12, 10.0], [1.60224948E12, 10.0], [1.60224996E12, 9.921602787456449], [1.60224978E12, 10.0], [1.6022496E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224996E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 605.0, "minX": 1.0, "maxY": 2594.0, "series": [{"data": [[8.0, 614.0], [4.0, 605.0], [2.0, 1288.0], [1.0, 2594.0], [9.0, 2153.0], [10.0, 1024.9471246622932], [5.0, 1061.0], [6.0, 1418.0], [3.0, 915.0], [7.0, 2050.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 1025.6162589096518]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3253.4333333333334, "minX": 1.60224948E12, "maxY": 3505545.6, "series": [{"data": [[1.6022499E12, 2707413.8333333335], [1.60224972E12, 2760086.9], [1.60224954E12, 2199929.75], [1.60224984E12, 2962752.8333333335], [1.60224966E12, 2771803.2], [1.60224948E12, 2398220.35], [1.60224996E12, 2448866.6166666667], [1.60224978E12, 2217427.8833333333], [1.6022496E12, 3505545.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6022499E12, 4834.8], [1.60224972E12, 3527.266666666667], [1.60224954E12, 4708.916666666667], [1.60224984E12, 4707.8], [1.60224966E12, 4626.75], [1.60224948E12, 3253.4333333333334], [1.60224996E12, 4331.183333333333], [1.60224978E12, 3849.0333333333333], [1.6022496E12, 4744.866666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224996E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 931.9860248447208, "minX": 1.60224948E12, "maxY": 1271.51050420168, "series": [{"data": [[1.6022499E12, 940.7817896389325], [1.60224972E12, 1271.51050420168], [1.60224954E12, 931.9860248447208], [1.60224984E12, 943.8128930817608], [1.60224966E12, 976.8606557377051], [1.60224948E12, 1179.6401766004412], [1.60224996E12, 1031.2055749128917], [1.60224978E12, 1120.1495327102807], [1.6022496E12, 954.5351437699679]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224996E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 930.5403726708078, "minX": 1.60224948E12, "maxY": 1268.9663865546217, "series": [{"data": [[1.6022499E12, 939.2433281004714], [1.60224972E12, 1268.9663865546217], [1.60224954E12, 930.5403726708078], [1.60224984E12, 941.9984276729567], [1.60224966E12, 974.991803278688], [1.60224948E12, 1177.512141280353], [1.60224996E12, 1029.6010452961675], [1.60224978E12, 1118.3757009345798], [1.6022496E12, 952.1022364217257]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224996E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011475409836065582, "minX": 1.60224948E12, "maxY": 0.22295805739514335, "series": [{"data": [[1.6022499E12, 0.02197802197802201], [1.60224972E12, 0.021008403361344536], [1.60224954E12, 0.02173913043478261], [1.60224984E12, 0.01572327044025159], [1.60224966E12, 0.011475409836065582], [1.60224948E12, 0.22295805739514335], [1.60224996E12, 0.020905923344947706], [1.60224978E12, 0.022429906542056097], [1.6022496E12, 0.019169329073482438]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224996E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 189.0, "minX": 1.60224948E12, "maxY": 9129.0, "series": [{"data": [[1.6022499E12, 3927.0], [1.60224972E12, 6631.0], [1.60224954E12, 3883.0], [1.60224984E12, 2897.0], [1.60224966E12, 4369.0], [1.60224948E12, 9129.0], [1.60224996E12, 4168.0], [1.60224978E12, 6674.0], [1.6022496E12, 4701.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6022499E12, 196.74199984788893], [1.60224972E12, 231.29299988627434], [1.60224954E12, 207.0], [1.60224984E12, 204.0], [1.60224966E12, 196.0], [1.60224948E12, 209.08599989175798], [1.60224996E12, 208.17499986290932], [1.60224978E12, 244.1199993610382], [1.6022496E12, 201.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6022499E12, 197.0], [1.60224972E12, 231.72230004549027], [1.60224954E12, 207.77100012302398], [1.60224984E12, 204.30630006074907], [1.60224966E12, 196.0], [1.60224948E12, 209.49460004329683], [1.60224996E12, 208.69250005483627], [1.60224978E12, 245.0], [1.6022496E12, 201.41460011959077]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6022499E12, 197.0], [1.60224972E12, 231.53149994313716], [1.60224954E12, 207.25499984622002], [1.60224984E12, 204.05149992406368], [1.60224966E12, 196.0], [1.60224948E12, 209.31299994587897], [1.60224996E12, 208.46249993145466], [1.60224978E12, 245.0], [1.6022496E12, 201.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6022499E12, 189.0], [1.60224972E12, 222.0], [1.60224954E12, 191.0], [1.60224984E12, 194.0], [1.60224966E12, 193.0], [1.60224948E12, 203.0], [1.60224996E12, 196.0], [1.60224978E12, 221.0], [1.6022496E12, 193.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6022499E12, 761.0], [1.60224972E12, 1108.0], [1.60224954E12, 698.0], [1.60224984E12, 742.5], [1.60224966E12, 835.0], [1.60224948E12, 1041.0], [1.60224996E12, 898.0], [1.60224978E12, 967.0], [1.6022496E12, 671.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224996E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 430.0, "minX": 1.0, "maxY": 2465.0, "series": [{"data": [[2.0, 2076.5], [3.0, 2282.0], [4.0, 1687.5], [5.0, 1269.0], [6.0, 1260.5], [7.0, 1185.0], [8.0, 1095.0], [9.0, 1065.0], [10.0, 933.5], [11.0, 899.0], [12.0, 794.0], [13.0, 731.5], [14.0, 668.5], [15.0, 560.5], [1.0, 2465.0], [16.0, 472.5], [17.0, 557.0], [18.0, 470.5], [19.0, 471.0], [20.0, 476.0], [21.0, 458.0], [22.0, 459.5], [23.0, 487.0], [24.0, 447.0], [25.0, 430.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 953.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 430.0, "minX": 1.0, "maxY": 2456.5, "series": [{"data": [[2.0, 2072.0], [3.0, 2273.0], [4.0, 1686.5], [5.0, 1266.0], [6.0, 1259.0], [7.0, 1175.0], [8.0, 1093.0], [9.0, 1064.0], [10.0, 930.5], [11.0, 897.0], [12.0, 794.0], [13.0, 731.5], [14.0, 667.5], [15.0, 560.5], [1.0, 2456.5], [16.0, 472.5], [17.0, 557.0], [18.0, 470.0], [19.0, 471.0], [20.0, 475.0], [21.0, 458.0], [22.0, 459.5], [23.0, 486.5], [24.0, 447.0], [25.0, 430.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 953.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.716666666666667, "minX": 1.60224948E12, "maxY": 10.733333333333333, "series": [{"data": [[1.6022499E12, 10.616666666666667], [1.60224972E12, 7.933333333333334], [1.60224954E12, 10.733333333333333], [1.60224984E12, 10.6], [1.60224966E12, 10.166666666666666], [1.60224948E12, 7.716666666666667], [1.60224996E12, 9.4], [1.60224978E12, 8.916666666666666], [1.6022496E12, 10.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224996E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60224948E12, "maxY": 10.733333333333333, "series": [{"data": [[1.6022499E12, 10.616666666666667], [1.60224972E12, 7.933333333333334], [1.60224954E12, 10.733333333333333], [1.60224984E12, 10.6], [1.60224966E12, 10.15], [1.60224948E12, 7.55], [1.60224996E12, 9.566666666666666], [1.60224978E12, 8.916666666666666], [1.6022496E12, 10.433333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60224966E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224996E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60224948E12, "maxY": 10.733333333333333, "series": [{"data": [[1.6022499E12, 10.616666666666667], [1.60224972E12, 7.933333333333334], [1.60224954E12, 10.733333333333333], [1.60224984E12, 10.6], [1.60224966E12, 10.15], [1.60224948E12, 7.55], [1.60224996E12, 9.566666666666666], [1.60224978E12, 8.916666666666666], [1.6022496E12, 10.433333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60224966E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224996E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60224948E12, "maxY": 10.733333333333333, "series": [{"data": [[1.6022499E12, 10.616666666666667], [1.60224972E12, 7.933333333333334], [1.60224954E12, 10.733333333333333], [1.60224984E12, 10.6], [1.60224966E12, 10.15], [1.60224948E12, 7.55], [1.60224996E12, 9.566666666666666], [1.60224978E12, 8.916666666666666], [1.6022496E12, 10.433333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60224966E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224996E12, "title": "Total Transactions Per Second"}},
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

