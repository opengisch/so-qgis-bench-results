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
        data: {"result": {"minY": 192.0, "minX": 0.0, "maxY": 6922.0, "series": [{"data": [[0.0, 192.0], [0.1, 193.0], [0.2, 197.0], [0.3, 198.0], [0.4, 199.0], [0.5, 200.0], [0.6, 201.0], [0.7, 202.0], [0.8, 202.0], [0.9, 203.0], [1.0, 205.0], [1.1, 205.0], [1.2, 206.0], [1.3, 207.0], [1.4, 208.0], [1.5, 209.0], [1.6, 209.0], [1.7, 210.0], [1.8, 210.0], [1.9, 211.0], [2.0, 213.0], [2.1, 214.0], [2.2, 215.0], [2.3, 216.0], [2.4, 217.0], [2.5, 218.0], [2.6, 218.0], [2.7, 220.0], [2.8, 222.0], [2.9, 222.0], [3.0, 223.0], [3.1, 224.0], [3.2, 225.0], [3.3, 227.0], [3.4, 228.0], [3.5, 228.0], [3.6, 229.0], [3.7, 230.0], [3.8, 231.0], [3.9, 231.0], [4.0, 232.0], [4.1, 232.0], [4.2, 233.0], [4.3, 234.0], [4.4, 234.0], [4.5, 235.0], [4.6, 235.0], [4.7, 236.0], [4.8, 236.0], [4.9, 237.0], [5.0, 237.0], [5.1, 238.0], [5.2, 239.0], [5.3, 239.0], [5.4, 240.0], [5.5, 241.0], [5.6, 242.0], [5.7, 242.0], [5.8, 244.0], [5.9, 244.0], [6.0, 246.0], [6.1, 248.0], [6.2, 249.0], [6.3, 250.0], [6.4, 251.0], [6.5, 252.0], [6.6, 253.0], [6.7, 254.0], [6.8, 255.0], [6.9, 258.0], [7.0, 260.0], [7.1, 264.0], [7.2, 266.0], [7.3, 270.0], [7.4, 273.0], [7.5, 274.0], [7.6, 276.0], [7.7, 277.0], [7.8, 279.0], [7.9, 281.0], [8.0, 282.0], [8.1, 283.0], [8.2, 285.0], [8.3, 287.0], [8.4, 290.0], [8.5, 291.0], [8.6, 293.0], [8.7, 294.0], [8.8, 296.0], [8.9, 297.0], [9.0, 299.0], [9.1, 299.0], [9.2, 302.0], [9.3, 303.0], [9.4, 305.0], [9.5, 306.0], [9.6, 308.0], [9.7, 309.0], [9.8, 311.0], [9.9, 312.0], [10.0, 313.0], [10.1, 315.0], [10.2, 316.0], [10.3, 316.0], [10.4, 318.0], [10.5, 318.0], [10.6, 319.0], [10.7, 319.0], [10.8, 320.0], [10.9, 321.0], [11.0, 322.0], [11.1, 323.0], [11.2, 323.0], [11.3, 324.0], [11.4, 325.0], [11.5, 325.0], [11.6, 326.0], [11.7, 327.0], [11.8, 328.0], [11.9, 329.0], [12.0, 330.0], [12.1, 331.0], [12.2, 332.0], [12.3, 332.0], [12.4, 333.0], [12.5, 334.0], [12.6, 336.0], [12.7, 337.0], [12.8, 338.0], [12.9, 339.0], [13.0, 340.0], [13.1, 342.0], [13.2, 342.0], [13.3, 343.0], [13.4, 344.0], [13.5, 346.0], [13.6, 349.0], [13.7, 350.0], [13.8, 351.0], [13.9, 353.0], [14.0, 354.0], [14.1, 357.0], [14.2, 358.0], [14.3, 361.0], [14.4, 363.0], [14.5, 364.0], [14.6, 366.0], [14.7, 368.0], [14.8, 369.0], [14.9, 371.0], [15.0, 374.0], [15.1, 376.0], [15.2, 377.0], [15.3, 379.0], [15.4, 380.0], [15.5, 382.0], [15.6, 383.0], [15.7, 386.0], [15.8, 388.0], [15.9, 390.0], [16.0, 393.0], [16.1, 396.0], [16.2, 399.0], [16.3, 400.0], [16.4, 402.0], [16.5, 403.0], [16.6, 403.0], [16.7, 404.0], [16.8, 405.0], [16.9, 406.0], [17.0, 409.0], [17.1, 409.0], [17.2, 410.0], [17.3, 412.0], [17.4, 415.0], [17.5, 418.0], [17.6, 420.0], [17.7, 422.0], [17.8, 425.0], [17.9, 427.0], [18.0, 428.0], [18.1, 428.0], [18.2, 429.0], [18.3, 431.0], [18.4, 432.0], [18.5, 433.0], [18.6, 436.0], [18.7, 437.0], [18.8, 438.0], [18.9, 440.0], [19.0, 442.0], [19.1, 443.0], [19.2, 445.0], [19.3, 446.0], [19.4, 448.0], [19.5, 449.0], [19.6, 450.0], [19.7, 451.0], [19.8, 453.0], [19.9, 453.0], [20.0, 454.0], [20.1, 455.0], [20.2, 456.0], [20.3, 457.0], [20.4, 458.0], [20.5, 458.0], [20.6, 459.0], [20.7, 460.0], [20.8, 461.0], [20.9, 461.0], [21.0, 462.0], [21.1, 462.0], [21.2, 463.0], [21.3, 464.0], [21.4, 464.0], [21.5, 466.0], [21.6, 466.0], [21.7, 467.0], [21.8, 468.0], [21.9, 470.0], [22.0, 470.0], [22.1, 470.0], [22.2, 471.0], [22.3, 472.0], [22.4, 473.0], [22.5, 473.0], [22.6, 475.0], [22.7, 475.0], [22.8, 476.0], [22.9, 476.0], [23.0, 477.0], [23.1, 478.0], [23.2, 479.0], [23.3, 480.0], [23.4, 480.0], [23.5, 481.0], [23.6, 482.0], [23.7, 482.0], [23.8, 483.0], [23.9, 484.0], [24.0, 485.0], [24.1, 485.0], [24.2, 486.0], [24.3, 487.0], [24.4, 487.0], [24.5, 488.0], [24.6, 489.0], [24.7, 490.0], [24.8, 491.0], [24.9, 492.0], [25.0, 493.0], [25.1, 495.0], [25.2, 496.0], [25.3, 498.0], [25.4, 499.0], [25.5, 500.0], [25.6, 500.0], [25.7, 501.0], [25.8, 502.0], [25.9, 504.0], [26.0, 504.0], [26.1, 506.0], [26.2, 507.0], [26.3, 509.0], [26.4, 510.0], [26.5, 511.0], [26.6, 513.0], [26.7, 515.0], [26.8, 516.0], [26.9, 517.0], [27.0, 519.0], [27.1, 520.0], [27.2, 521.0], [27.3, 523.0], [27.4, 525.0], [27.5, 527.0], [27.6, 528.0], [27.7, 530.0], [27.8, 532.0], [27.9, 534.0], [28.0, 537.0], [28.1, 538.0], [28.2, 539.0], [28.3, 540.0], [28.4, 541.0], [28.5, 541.0], [28.6, 542.0], [28.7, 544.0], [28.8, 545.0], [28.9, 546.0], [29.0, 547.0], [29.1, 548.0], [29.2, 549.0], [29.3, 551.0], [29.4, 551.0], [29.5, 553.0], [29.6, 553.0], [29.7, 554.0], [29.8, 555.0], [29.9, 555.0], [30.0, 556.0], [30.1, 558.0], [30.2, 559.0], [30.3, 560.0], [30.4, 561.0], [30.5, 564.0], [30.6, 565.0], [30.7, 566.0], [30.8, 567.0], [30.9, 568.0], [31.0, 569.0], [31.1, 570.0], [31.2, 571.0], [31.3, 572.0], [31.4, 573.0], [31.5, 574.0], [31.6, 576.0], [31.7, 576.0], [31.8, 577.0], [31.9, 578.0], [32.0, 580.0], [32.1, 580.0], [32.2, 582.0], [32.3, 584.0], [32.4, 586.0], [32.5, 587.0], [32.6, 589.0], [32.7, 590.0], [32.8, 591.0], [32.9, 592.0], [33.0, 594.0], [33.1, 595.0], [33.2, 596.0], [33.3, 597.0], [33.4, 598.0], [33.5, 599.0], [33.6, 600.0], [33.7, 602.0], [33.8, 604.0], [33.9, 605.0], [34.0, 606.0], [34.1, 608.0], [34.2, 608.0], [34.3, 610.0], [34.4, 611.0], [34.5, 612.0], [34.6, 614.0], [34.7, 615.0], [34.8, 616.0], [34.9, 617.0], [35.0, 618.0], [35.1, 619.0], [35.2, 619.0], [35.3, 621.0], [35.4, 622.0], [35.5, 623.0], [35.6, 624.0], [35.7, 626.0], [35.8, 627.0], [35.9, 629.0], [36.0, 630.0], [36.1, 630.0], [36.2, 631.0], [36.3, 632.0], [36.4, 633.0], [36.5, 634.0], [36.6, 635.0], [36.7, 638.0], [36.8, 640.0], [36.9, 642.0], [37.0, 643.0], [37.1, 644.0], [37.2, 645.0], [37.3, 646.0], [37.4, 647.0], [37.5, 648.0], [37.6, 650.0], [37.7, 650.0], [37.8, 651.0], [37.9, 653.0], [38.0, 655.0], [38.1, 656.0], [38.2, 657.0], [38.3, 658.0], [38.4, 659.0], [38.5, 661.0], [38.6, 661.0], [38.7, 662.0], [38.8, 664.0], [38.9, 665.0], [39.0, 666.0], [39.1, 667.0], [39.2, 668.0], [39.3, 669.0], [39.4, 671.0], [39.5, 672.0], [39.6, 673.0], [39.7, 673.0], [39.8, 674.0], [39.9, 675.0], [40.0, 677.0], [40.1, 677.0], [40.2, 679.0], [40.3, 680.0], [40.4, 683.0], [40.5, 684.0], [40.6, 684.0], [40.7, 685.0], [40.8, 686.0], [40.9, 687.0], [41.0, 689.0], [41.1, 690.0], [41.2, 690.0], [41.3, 691.0], [41.4, 693.0], [41.5, 696.0], [41.6, 697.0], [41.7, 698.0], [41.8, 699.0], [41.9, 700.0], [42.0, 701.0], [42.1, 702.0], [42.2, 704.0], [42.3, 705.0], [42.4, 708.0], [42.5, 709.0], [42.6, 712.0], [42.7, 715.0], [42.8, 716.0], [42.9, 717.0], [43.0, 718.0], [43.1, 719.0], [43.2, 720.0], [43.3, 723.0], [43.4, 724.0], [43.5, 729.0], [43.6, 732.0], [43.7, 734.0], [43.8, 735.0], [43.9, 737.0], [44.0, 739.0], [44.1, 740.0], [44.2, 742.0], [44.3, 745.0], [44.4, 746.0], [44.5, 748.0], [44.6, 751.0], [44.7, 752.0], [44.8, 752.0], [44.9, 755.0], [45.0, 759.0], [45.1, 762.0], [45.2, 764.0], [45.3, 767.0], [45.4, 767.0], [45.5, 769.0], [45.6, 771.0], [45.7, 773.0], [45.8, 775.0], [45.9, 776.0], [46.0, 777.0], [46.1, 779.0], [46.2, 781.0], [46.3, 784.0], [46.4, 785.0], [46.5, 788.0], [46.6, 789.0], [46.7, 790.0], [46.8, 793.0], [46.9, 795.0], [47.0, 797.0], [47.1, 800.0], [47.2, 802.0], [47.3, 804.0], [47.4, 806.0], [47.5, 807.0], [47.6, 810.0], [47.7, 811.0], [47.8, 814.0], [47.9, 816.0], [48.0, 818.0], [48.1, 820.0], [48.2, 822.0], [48.3, 822.0], [48.4, 825.0], [48.5, 827.0], [48.6, 831.0], [48.7, 831.0], [48.8, 833.0], [48.9, 834.0], [49.0, 836.0], [49.1, 838.0], [49.2, 840.0], [49.3, 844.0], [49.4, 845.0], [49.5, 850.0], [49.6, 852.0], [49.7, 853.0], [49.8, 855.0], [49.9, 858.0], [50.0, 860.0], [50.1, 863.0], [50.2, 864.0], [50.3, 868.0], [50.4, 870.0], [50.5, 873.0], [50.6, 874.0], [50.7, 875.0], [50.8, 879.0], [50.9, 880.0], [51.0, 883.0], [51.1, 885.0], [51.2, 888.0], [51.3, 891.0], [51.4, 895.0], [51.5, 896.0], [51.6, 898.0], [51.7, 900.0], [51.8, 903.0], [51.9, 903.0], [52.0, 904.0], [52.1, 909.0], [52.2, 911.0], [52.3, 912.0], [52.4, 914.0], [52.5, 916.0], [52.6, 918.0], [52.7, 919.0], [52.8, 920.0], [52.9, 923.0], [53.0, 926.0], [53.1, 928.0], [53.2, 933.0], [53.3, 934.0], [53.4, 936.0], [53.5, 938.0], [53.6, 941.0], [53.7, 943.0], [53.8, 945.0], [53.9, 946.0], [54.0, 951.0], [54.1, 952.0], [54.2, 952.0], [54.3, 955.0], [54.4, 957.0], [54.5, 960.0], [54.6, 963.0], [54.7, 965.0], [54.8, 968.0], [54.9, 970.0], [55.0, 972.0], [55.1, 976.0], [55.2, 979.0], [55.3, 982.0], [55.4, 983.0], [55.5, 985.0], [55.6, 988.0], [55.7, 991.0], [55.8, 993.0], [55.9, 995.0], [56.0, 1000.0], [56.1, 1002.0], [56.2, 1004.0], [56.3, 1006.0], [56.4, 1008.0], [56.5, 1011.0], [56.6, 1013.0], [56.7, 1014.0], [56.8, 1015.0], [56.9, 1017.0], [57.0, 1019.0], [57.1, 1022.0], [57.2, 1023.0], [57.3, 1023.0], [57.4, 1025.0], [57.5, 1026.0], [57.6, 1028.0], [57.7, 1030.0], [57.8, 1032.0], [57.9, 1035.0], [58.0, 1037.0], [58.1, 1040.0], [58.2, 1044.0], [58.3, 1046.0], [58.4, 1050.0], [58.5, 1052.0], [58.6, 1055.0], [58.7, 1057.0], [58.8, 1058.0], [58.9, 1059.0], [59.0, 1063.0], [59.1, 1065.0], [59.2, 1068.0], [59.3, 1070.0], [59.4, 1072.0], [59.5, 1074.0], [59.6, 1077.0], [59.7, 1082.0], [59.8, 1086.0], [59.9, 1087.0], [60.0, 1088.0], [60.1, 1090.0], [60.2, 1091.0], [60.3, 1093.0], [60.4, 1096.0], [60.5, 1098.0], [60.6, 1100.0], [60.7, 1102.0], [60.8, 1104.0], [60.9, 1105.0], [61.0, 1107.0], [61.1, 1108.0], [61.2, 1111.0], [61.3, 1114.0], [61.4, 1116.0], [61.5, 1118.0], [61.6, 1120.0], [61.7, 1121.0], [61.8, 1124.0], [61.9, 1127.0], [62.0, 1128.0], [62.1, 1132.0], [62.2, 1134.0], [62.3, 1138.0], [62.4, 1142.0], [62.5, 1146.0], [62.6, 1147.0], [62.7, 1148.0], [62.8, 1149.0], [62.9, 1151.0], [63.0, 1153.0], [63.1, 1155.0], [63.2, 1158.0], [63.3, 1159.0], [63.4, 1161.0], [63.5, 1163.0], [63.6, 1164.0], [63.7, 1167.0], [63.8, 1169.0], [63.9, 1171.0], [64.0, 1173.0], [64.1, 1175.0], [64.2, 1179.0], [64.3, 1181.0], [64.4, 1182.0], [64.5, 1183.0], [64.6, 1185.0], [64.7, 1186.0], [64.8, 1187.0], [64.9, 1190.0], [65.0, 1192.0], [65.1, 1195.0], [65.2, 1198.0], [65.3, 1202.0], [65.4, 1205.0], [65.5, 1208.0], [65.6, 1210.0], [65.7, 1212.0], [65.8, 1213.0], [65.9, 1214.0], [66.0, 1216.0], [66.1, 1218.0], [66.2, 1222.0], [66.3, 1226.0], [66.4, 1230.0], [66.5, 1232.0], [66.6, 1233.0], [66.7, 1235.0], [66.8, 1238.0], [66.9, 1239.0], [67.0, 1243.0], [67.1, 1245.0], [67.2, 1246.0], [67.3, 1247.0], [67.4, 1250.0], [67.5, 1254.0], [67.6, 1256.0], [67.7, 1257.0], [67.8, 1260.0], [67.9, 1262.0], [68.0, 1264.0], [68.1, 1266.0], [68.2, 1267.0], [68.3, 1269.0], [68.4, 1270.0], [68.5, 1273.0], [68.6, 1274.0], [68.7, 1277.0], [68.8, 1278.0], [68.9, 1280.0], [69.0, 1283.0], [69.1, 1284.0], [69.2, 1289.0], [69.3, 1291.0], [69.4, 1293.0], [69.5, 1295.0], [69.6, 1297.0], [69.7, 1299.0], [69.8, 1300.0], [69.9, 1302.0], [70.0, 1304.0], [70.1, 1307.0], [70.2, 1312.0], [70.3, 1314.0], [70.4, 1317.0], [70.5, 1320.0], [70.6, 1324.0], [70.7, 1325.0], [70.8, 1328.0], [70.9, 1330.0], [71.0, 1332.0], [71.1, 1337.0], [71.2, 1341.0], [71.3, 1345.0], [71.4, 1347.0], [71.5, 1349.0], [71.6, 1351.0], [71.7, 1353.0], [71.8, 1354.0], [71.9, 1356.0], [72.0, 1358.0], [72.1, 1361.0], [72.2, 1363.0], [72.3, 1365.0], [72.4, 1367.0], [72.5, 1368.0], [72.6, 1370.0], [72.7, 1373.0], [72.8, 1377.0], [72.9, 1380.0], [73.0, 1383.0], [73.1, 1387.0], [73.2, 1390.0], [73.3, 1393.0], [73.4, 1395.0], [73.5, 1397.0], [73.6, 1400.0], [73.7, 1400.0], [73.8, 1404.0], [73.9, 1408.0], [74.0, 1410.0], [74.1, 1412.0], [74.2, 1414.0], [74.3, 1420.0], [74.4, 1423.0], [74.5, 1427.0], [74.6, 1429.0], [74.7, 1432.0], [74.8, 1434.0], [74.9, 1437.0], [75.0, 1439.0], [75.1, 1440.0], [75.2, 1443.0], [75.3, 1445.0], [75.4, 1448.0], [75.5, 1451.0], [75.6, 1453.0], [75.7, 1455.0], [75.8, 1456.0], [75.9, 1458.0], [76.0, 1461.0], [76.1, 1463.0], [76.2, 1464.0], [76.3, 1466.0], [76.4, 1468.0], [76.5, 1469.0], [76.6, 1472.0], [76.7, 1473.0], [76.8, 1475.0], [76.9, 1477.0], [77.0, 1479.0], [77.1, 1482.0], [77.2, 1483.0], [77.3, 1487.0], [77.4, 1489.0], [77.5, 1492.0], [77.6, 1494.0], [77.7, 1496.0], [77.8, 1497.0], [77.9, 1500.0], [78.0, 1502.0], [78.1, 1505.0], [78.2, 1507.0], [78.3, 1510.0], [78.4, 1512.0], [78.5, 1515.0], [78.6, 1516.0], [78.7, 1519.0], [78.8, 1521.0], [78.9, 1524.0], [79.0, 1526.0], [79.1, 1529.0], [79.2, 1532.0], [79.3, 1534.0], [79.4, 1537.0], [79.5, 1539.0], [79.6, 1541.0], [79.7, 1543.0], [79.8, 1545.0], [79.9, 1547.0], [80.0, 1549.0], [80.1, 1552.0], [80.2, 1553.0], [80.3, 1557.0], [80.4, 1558.0], [80.5, 1561.0], [80.6, 1563.0], [80.7, 1566.0], [80.8, 1568.0], [80.9, 1571.0], [81.0, 1575.0], [81.1, 1578.0], [81.2, 1580.0], [81.3, 1581.0], [81.4, 1583.0], [81.5, 1586.0], [81.6, 1592.0], [81.7, 1593.0], [81.8, 1597.0], [81.9, 1601.0], [82.0, 1603.0], [82.1, 1606.0], [82.2, 1609.0], [82.3, 1613.0], [82.4, 1615.0], [82.5, 1618.0], [82.6, 1620.0], [82.7, 1622.0], [82.8, 1624.0], [82.9, 1627.0], [83.0, 1632.0], [83.1, 1634.0], [83.2, 1637.0], [83.3, 1640.0], [83.4, 1643.0], [83.5, 1647.0], [83.6, 1649.0], [83.7, 1652.0], [83.8, 1657.0], [83.9, 1659.0], [84.0, 1663.0], [84.1, 1665.0], [84.2, 1667.0], [84.3, 1669.0], [84.4, 1671.0], [84.5, 1674.0], [84.6, 1678.0], [84.7, 1682.0], [84.8, 1688.0], [84.9, 1692.0], [85.0, 1694.0], [85.1, 1695.0], [85.2, 1700.0], [85.3, 1704.0], [85.4, 1706.0], [85.5, 1709.0], [85.6, 1714.0], [85.7, 1715.0], [85.8, 1719.0], [85.9, 1723.0], [86.0, 1726.0], [86.1, 1730.0], [86.2, 1732.0], [86.3, 1736.0], [86.4, 1742.0], [86.5, 1743.0], [86.6, 1745.0], [86.7, 1747.0], [86.8, 1750.0], [86.9, 1754.0], [87.0, 1760.0], [87.1, 1762.0], [87.2, 1767.0], [87.3, 1770.0], [87.4, 1774.0], [87.5, 1779.0], [87.6, 1788.0], [87.7, 1793.0], [87.8, 1796.0], [87.9, 1798.0], [88.0, 1805.0], [88.1, 1814.0], [88.2, 1821.0], [88.3, 1827.0], [88.4, 1831.0], [88.5, 1838.0], [88.6, 1841.0], [88.7, 1848.0], [88.8, 1851.0], [88.9, 1856.0], [89.0, 1861.0], [89.1, 1869.0], [89.2, 1873.0], [89.3, 1877.0], [89.4, 1883.0], [89.5, 1900.0], [89.6, 1911.0], [89.7, 1921.0], [89.8, 1923.0], [89.9, 1928.0], [90.0, 1932.0], [90.1, 1941.0], [90.2, 1945.0], [90.3, 1955.0], [90.4, 1964.0], [90.5, 1970.0], [90.6, 1980.0], [90.7, 1987.0], [90.8, 1994.0], [90.9, 1997.0], [91.0, 2003.0], [91.1, 2008.0], [91.2, 2015.0], [91.3, 2027.0], [91.4, 2032.0], [91.5, 2037.0], [91.6, 2056.0], [91.7, 2067.0], [91.8, 2078.0], [91.9, 2082.0], [92.0, 2096.0], [92.1, 2104.0], [92.2, 2111.0], [92.3, 2121.0], [92.4, 2129.0], [92.5, 2135.0], [92.6, 2145.0], [92.7, 2147.0], [92.8, 2154.0], [92.9, 2163.0], [93.0, 2170.0], [93.1, 2175.0], [93.2, 2195.0], [93.3, 2212.0], [93.4, 2219.0], [93.5, 2224.0], [93.6, 2234.0], [93.7, 2263.0], [93.8, 2282.0], [93.9, 2294.0], [94.0, 2303.0], [94.1, 2314.0], [94.2, 2319.0], [94.3, 2325.0], [94.4, 2329.0], [94.5, 2342.0], [94.6, 2355.0], [94.7, 2365.0], [94.8, 2373.0], [94.9, 2397.0], [95.0, 2403.0], [95.1, 2417.0], [95.2, 2425.0], [95.3, 2434.0], [95.4, 2448.0], [95.5, 2479.0], [95.6, 2486.0], [95.7, 2495.0], [95.8, 2516.0], [95.9, 2534.0], [96.0, 2537.0], [96.1, 2545.0], [96.2, 2559.0], [96.3, 2563.0], [96.4, 2583.0], [96.5, 2591.0], [96.6, 2602.0], [96.7, 2609.0], [96.8, 2619.0], [96.9, 2638.0], [97.0, 2665.0], [97.1, 2682.0], [97.2, 2711.0], [97.3, 2733.0], [97.4, 2754.0], [97.5, 2770.0], [97.6, 2782.0], [97.7, 2806.0], [97.8, 2828.0], [97.9, 2837.0], [98.0, 2851.0], [98.1, 2901.0], [98.2, 2938.0], [98.3, 2959.0], [98.4, 2966.0], [98.5, 3026.0], [98.6, 3048.0], [98.7, 3108.0], [98.8, 3161.0], [98.9, 3201.0], [99.0, 3339.0], [99.1, 3411.0], [99.2, 3563.0], [99.3, 3655.0], [99.4, 3750.0], [99.5, 3890.0], [99.6, 4309.0], [99.7, 4713.0], [99.8, 5503.0], [99.9, 6138.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 480.0, "series": [{"data": [[600.0, 431.0], [700.0, 270.0], [800.0, 238.0], [900.0, 224.0], [1000.0, 238.0], [1100.0, 243.0], [1200.0, 234.0], [1300.0, 199.0], [1400.0, 223.0], [1500.0, 208.0], [1600.0, 171.0], [1700.0, 143.0], [1800.0, 80.0], [1900.0, 75.0], [2000.0, 57.0], [2100.0, 62.0], [2300.0, 49.0], [2200.0, 39.0], [2400.0, 41.0], [2500.0, 46.0], [2600.0, 30.0], [2800.0, 21.0], [2700.0, 27.0], [2900.0, 19.0], [3000.0, 11.0], [3100.0, 11.0], [3300.0, 6.0], [3200.0, 4.0], [3400.0, 5.0], [3500.0, 3.0], [3600.0, 7.0], [3700.0, 2.0], [3800.0, 6.0], [3900.0, 2.0], [4000.0, 1.0], [4200.0, 1.0], [4300.0, 1.0], [4600.0, 3.0], [4500.0, 1.0], [4700.0, 3.0], [5000.0, 1.0], [5200.0, 1.0], [5500.0, 2.0], [6100.0, 2.0], [6000.0, 3.0], [6200.0, 1.0], [6600.0, 1.0], [6400.0, 1.0], [6900.0, 1.0], [100.0, 23.0], [200.0, 450.0], [300.0, 369.0], [400.0, 480.0], [500.0, 421.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2718.0, "series": [{"data": [[0.0, 1329.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2718.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1143.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.590909090909088, "minX": 1.6021998E12, "maxY": 10.0, "series": [{"data": [[1.60219998E12, 10.0], [1.60220028E12, 10.0], [1.6021998E12, 10.0], [1.6022001E12, 10.0], [1.60219992E12, 10.0], [1.60220022E12, 10.0], [1.60220004E12, 10.0], [1.60220034E12, 9.590909090909088], [1.60219986E12, 10.0], [1.60220016E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60220034E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 326.0, "minX": 1.0, "maxY": 3644.0, "series": [{"data": [[8.0, 1274.0], [4.0, 1193.0], [2.0, 3644.0], [1.0, 3035.0], [9.0, 1096.0], [10.0, 1039.475106136624], [5.0, 667.0], [6.0, 2445.0], [3.0, 2159.0], [7.0, 326.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 1040.7241379310315]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 832.85, "minX": 1.6021998E12, "maxY": 3226670.2333333334, "series": [{"data": [[1.60219998E12, 2982939.4166666665], [1.60220028E12, 2586298.8], [1.6021998E12, 2029267.6], [1.6022001E12, 2457089.95], [1.60219992E12, 3226670.2333333334], [1.60220022E12, 2931619.8666666667], [1.60220004E12, 2680472.9833333334], [1.60220034E12, 495293.48333333334], [1.60219986E12, 2130578.2333333334], [1.60220016E12, 2452188.4833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60219998E12, 4339.216666666666], [1.60220028E12, 4502.466666666666], [1.6021998E12, 2740.75], [1.6022001E12, 3871.5], [1.60219992E12, 4408.733333333334], [1.60220022E12, 4759.5], [1.60220004E12, 4102.266666666666], [1.60220034E12, 832.85], [1.60219986E12, 4596.083333333333], [1.60220016E12, 4430.683333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60220034E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 957.6401273885356, "minX": 1.6021998E12, "maxY": 1332.7454545454548, "series": [{"data": [[1.60219998E12, 1039.577933450087], [1.60220028E12, 1007.3865546218493], [1.6021998E12, 1185.349081364829], [1.6022001E12, 1105.1335807050086], [1.60219992E12, 1028.5162950257309], [1.60220022E12, 957.6401273885356], [1.60220004E12, 1104.8866544789764], [1.60220034E12, 1332.7454545454548], [1.60219986E12, 958.5332278480996], [1.60220016E12, 998.8909090909088]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60220034E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 956.0700636942673, "minX": 1.6021998E12, "maxY": 1331.1909090909091, "series": [{"data": [[1.60219998E12, 1037.490367775831], [1.60220028E12, 1005.7243697478988], [1.6021998E12, 1183.1679790026244], [1.6022001E12, 1103.7736549165122], [1.60219992E12, 1026.1234991423662], [1.60220022E12, 956.0700636942673], [1.60220004E12, 1102.945155393053], [1.60220034E12, 1331.1909090909091], [1.60219986E12, 957.1249999999998], [1.60220016E12, 997.4958677685956]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60220034E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.014331210191082815, "minX": 1.6021998E12, "maxY": 0.31496062992126017, "series": [{"data": [[1.60219998E12, 0.015761821366024515], [1.60220028E12, 0.01512605042016807], [1.6021998E12, 0.31496062992126017], [1.6022001E12, 0.01855287569573287], [1.60219992E12, 0.01715265866209264], [1.60220022E12, 0.014331210191082815], [1.60220004E12, 0.021937842778793404], [1.60220034E12, 0.027272727272727282], [1.60219986E12, 0.017405063291139233], [1.60220016E12, 0.023140495867768635]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60220034E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 192.0, "minX": 1.6021998E12, "maxY": 6922.0, "series": [{"data": [[1.60219998E12, 3890.0], [1.60220028E12, 4538.0], [1.6021998E12, 6230.0], [1.6022001E12, 6922.0], [1.60219992E12, 6005.0], [1.60220022E12, 3159.0], [1.60220004E12, 4731.0], [1.60220034E12, 3644.0], [1.60219986E12, 6140.0], [1.60220016E12, 3874.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60219998E12, 203.13899986386298], [1.60220028E12, 203.72799971580505], [1.6021998E12, 212.75199963569642], [1.6022001E12, 226.5799996137619], [1.60219992E12, 202.0], [1.60220022E12, 197.0], [1.60220004E12, 201.9319998693466], [1.60220034E12, 288.0], [1.60219986E12, 202.0], [1.60220016E12, 208.45399985551833]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60219998E12, 203.6529000544548], [1.60220028E12, 204.80080011367798], [1.6021998E12, 214.12720014572145], [1.6022001E12, 228.03800015449525], [1.60219992E12, 202.0], [1.60220022E12, 197.22710005998613], [1.60220004E12, 202.0], [1.60220034E12, 291.65930039167404], [1.60219986E12, 202.53340012073517], [1.60220016E12, 208.99940005779266]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60219998E12, 203.4244999319315], [1.60220028E12, 204.32399985790252], [1.6021998E12, 213.5159998178482], [1.6022001E12, 227.38999980688095], [1.60219992E12, 202.0], [1.60220022E12, 197.0], [1.60220004E12, 202.0], [1.60220034E12, 290.0164995104074], [1.60219986E12, 202.02699984908105], [1.60220016E12, 208.75699992775918]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60219998E12, 192.0], [1.60220028E12, 197.0], [1.6021998E12, 205.0], [1.6022001E12, 199.0], [1.60219992E12, 192.0], [1.60220022E12, 193.0], [1.60220004E12, 193.0], [1.60220034E12, 288.0], [1.60219986E12, 196.0], [1.60220016E12, 193.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60219998E12, 956.5], [1.60220028E12, 831.0], [1.6021998E12, 1022.0], [1.6022001E12, 938.0], [1.60219992E12, 746.0], [1.60220022E12, 709.5], [1.60220004E12, 930.0], [1.60220034E12, 1201.5], [1.60219986E12, 755.5], [1.60220016E12, 807.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60220034E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 241.0, "minX": 1.0, "maxY": 3035.0, "series": [{"data": [[2.0, 2597.0], [3.0, 1941.0], [4.0, 1645.5], [5.0, 1422.5], [6.0, 1267.5], [7.0, 1209.0], [8.0, 1136.0], [9.0, 1031.0], [10.0, 896.0], [11.0, 933.0], [12.0, 854.5], [13.0, 734.0], [14.0, 631.5], [15.0, 528.0], [1.0, 3035.0], [16.0, 484.5], [17.0, 485.0], [18.0, 460.5], [19.0, 472.5], [20.0, 468.0], [21.0, 482.5], [22.0, 468.5], [23.0, 473.5], [24.0, 447.0], [25.0, 439.0], [27.0, 432.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 241.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 241.0, "minX": 1.0, "maxY": 3035.0, "series": [{"data": [[2.0, 2590.0], [3.0, 1938.5], [4.0, 1644.0], [5.0, 1420.5], [6.0, 1262.0], [7.0, 1207.0], [8.0, 1134.5], [9.0, 1031.0], [10.0, 895.0], [11.0, 933.0], [12.0, 854.5], [13.0, 733.0], [14.0, 631.5], [15.0, 528.0], [1.0, 3035.0], [16.0, 484.5], [17.0, 485.0], [18.0, 460.5], [19.0, 472.5], [20.0, 468.0], [21.0, 482.5], [22.0, 468.5], [23.0, 473.5], [24.0, 447.0], [25.0, 439.0], [27.0, 432.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 241.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.6021998E12, "maxY": 10.533333333333333, "series": [{"data": [[1.60219998E12, 9.516666666666667], [1.60220028E12, 9.916666666666666], [1.6021998E12, 6.516666666666667], [1.6022001E12, 8.983333333333333], [1.60219992E12, 9.716666666666667], [1.60220022E12, 10.466666666666667], [1.60220004E12, 9.116666666666667], [1.60220034E12, 1.6666666666666667], [1.60219986E12, 10.533333333333333], [1.60220016E12, 10.083333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60220034E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6021998E12, "maxY": 10.533333333333333, "series": [{"data": [[1.60219998E12, 9.5], [1.60220028E12, 9.916666666666666], [1.6021998E12, 6.35], [1.6022001E12, 8.983333333333333], [1.60219992E12, 9.716666666666667], [1.60220022E12, 10.466666666666667], [1.60220004E12, 9.116666666666667], [1.60220034E12, 1.8333333333333333], [1.60219986E12, 10.533333333333333], [1.60220016E12, 10.083333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60219998E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60220034E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6021998E12, "maxY": 10.533333333333333, "series": [{"data": [[1.60219998E12, 9.5], [1.60220028E12, 9.916666666666666], [1.6021998E12, 6.35], [1.6022001E12, 8.983333333333333], [1.60219992E12, 9.716666666666667], [1.60220022E12, 10.466666666666667], [1.60220004E12, 9.116666666666667], [1.60220034E12, 1.8333333333333333], [1.60219986E12, 10.533333333333333], [1.60220016E12, 10.083333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60219998E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60220034E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6021998E12, "maxY": 10.533333333333333, "series": [{"data": [[1.60219998E12, 9.5], [1.60220028E12, 9.916666666666666], [1.6021998E12, 6.35], [1.6022001E12, 8.983333333333333], [1.60219992E12, 9.716666666666667], [1.60220022E12, 10.466666666666667], [1.60220004E12, 9.116666666666667], [1.60220034E12, 1.8333333333333333], [1.60219986E12, 10.533333333333333], [1.60220016E12, 10.083333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60219998E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60220034E12, "title": "Total Transactions Per Second"}},
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

