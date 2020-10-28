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
        data: {"result": {"minY": 185.0, "minX": 0.0, "maxY": 6230.0, "series": [{"data": [[0.0, 185.0], [0.1, 190.0], [0.2, 192.0], [0.3, 194.0], [0.4, 195.0], [0.5, 198.0], [0.6, 199.0], [0.7, 201.0], [0.8, 203.0], [0.9, 205.0], [1.0, 206.0], [1.1, 207.0], [1.2, 208.0], [1.3, 209.0], [1.4, 211.0], [1.5, 212.0], [1.6, 213.0], [1.7, 214.0], [1.8, 214.0], [1.9, 216.0], [2.0, 217.0], [2.1, 218.0], [2.2, 219.0], [2.3, 220.0], [2.4, 221.0], [2.5, 222.0], [2.6, 223.0], [2.7, 224.0], [2.8, 224.0], [2.9, 225.0], [3.0, 225.0], [3.1, 226.0], [3.2, 227.0], [3.3, 227.0], [3.4, 228.0], [3.5, 228.0], [3.6, 229.0], [3.7, 230.0], [3.8, 230.0], [3.9, 231.0], [4.0, 231.0], [4.1, 232.0], [4.2, 233.0], [4.3, 233.0], [4.4, 234.0], [4.5, 234.0], [4.6, 235.0], [4.7, 236.0], [4.8, 237.0], [4.9, 238.0], [5.0, 238.0], [5.1, 239.0], [5.2, 239.0], [5.3, 241.0], [5.4, 242.0], [5.5, 243.0], [5.6, 244.0], [5.7, 245.0], [5.8, 246.0], [5.9, 247.0], [6.0, 248.0], [6.1, 250.0], [6.2, 251.0], [6.3, 253.0], [6.4, 255.0], [6.5, 257.0], [6.6, 261.0], [6.7, 263.0], [6.8, 267.0], [6.9, 269.0], [7.0, 271.0], [7.1, 272.0], [7.2, 275.0], [7.3, 277.0], [7.4, 280.0], [7.5, 283.0], [7.6, 286.0], [7.7, 288.0], [7.8, 295.0], [7.9, 301.0], [8.0, 302.0], [8.1, 304.0], [8.2, 305.0], [8.3, 307.0], [8.4, 308.0], [8.5, 309.0], [8.6, 311.0], [8.7, 312.0], [8.8, 313.0], [8.9, 314.0], [9.0, 315.0], [9.1, 316.0], [9.2, 317.0], [9.3, 318.0], [9.4, 319.0], [9.5, 320.0], [9.6, 321.0], [9.7, 322.0], [9.8, 322.0], [9.9, 324.0], [10.0, 324.0], [10.1, 325.0], [10.2, 327.0], [10.3, 327.0], [10.4, 328.0], [10.5, 328.0], [10.6, 329.0], [10.7, 330.0], [10.8, 330.0], [10.9, 331.0], [11.0, 332.0], [11.1, 333.0], [11.2, 333.0], [11.3, 334.0], [11.4, 336.0], [11.5, 337.0], [11.6, 338.0], [11.7, 340.0], [11.8, 340.0], [11.9, 341.0], [12.0, 343.0], [12.1, 344.0], [12.2, 345.0], [12.3, 346.0], [12.4, 348.0], [12.5, 349.0], [12.6, 350.0], [12.7, 351.0], [12.8, 353.0], [12.9, 353.0], [13.0, 356.0], [13.1, 357.0], [13.2, 359.0], [13.3, 360.0], [13.4, 361.0], [13.5, 363.0], [13.6, 365.0], [13.7, 368.0], [13.8, 371.0], [13.9, 372.0], [14.0, 373.0], [14.1, 375.0], [14.2, 376.0], [14.3, 379.0], [14.4, 380.0], [14.5, 381.0], [14.6, 383.0], [14.7, 385.0], [14.8, 387.0], [14.9, 389.0], [15.0, 390.0], [15.1, 390.0], [15.2, 391.0], [15.3, 393.0], [15.4, 396.0], [15.5, 397.0], [15.6, 397.0], [15.7, 399.0], [15.8, 400.0], [15.9, 401.0], [16.0, 403.0], [16.1, 404.0], [16.2, 406.0], [16.3, 408.0], [16.4, 409.0], [16.5, 411.0], [16.6, 412.0], [16.7, 415.0], [16.8, 416.0], [16.9, 417.0], [17.0, 418.0], [17.1, 420.0], [17.2, 421.0], [17.3, 421.0], [17.4, 423.0], [17.5, 424.0], [17.6, 424.0], [17.7, 426.0], [17.8, 427.0], [17.9, 428.0], [18.0, 428.0], [18.1, 430.0], [18.2, 431.0], [18.3, 432.0], [18.4, 433.0], [18.5, 434.0], [18.6, 435.0], [18.7, 435.0], [18.8, 436.0], [18.9, 438.0], [19.0, 439.0], [19.1, 440.0], [19.2, 441.0], [19.3, 441.0], [19.4, 442.0], [19.5, 442.0], [19.6, 443.0], [19.7, 444.0], [19.8, 445.0], [19.9, 446.0], [20.0, 446.0], [20.1, 447.0], [20.2, 448.0], [20.3, 448.0], [20.4, 449.0], [20.5, 451.0], [20.6, 451.0], [20.7, 451.0], [20.8, 452.0], [20.9, 454.0], [21.0, 454.0], [21.1, 454.0], [21.2, 455.0], [21.3, 456.0], [21.4, 457.0], [21.5, 457.0], [21.6, 458.0], [21.7, 460.0], [21.8, 461.0], [21.9, 461.0], [22.0, 461.0], [22.1, 462.0], [22.2, 463.0], [22.3, 464.0], [22.4, 465.0], [22.5, 466.0], [22.6, 467.0], [22.7, 468.0], [22.8, 469.0], [22.9, 470.0], [23.0, 471.0], [23.1, 472.0], [23.2, 473.0], [23.3, 473.0], [23.4, 474.0], [23.5, 475.0], [23.6, 477.0], [23.7, 478.0], [23.8, 479.0], [23.9, 480.0], [24.0, 481.0], [24.1, 482.0], [24.2, 484.0], [24.3, 485.0], [24.4, 486.0], [24.5, 487.0], [24.6, 488.0], [24.7, 489.0], [24.8, 489.0], [24.9, 490.0], [25.0, 492.0], [25.1, 492.0], [25.2, 493.0], [25.3, 494.0], [25.4, 495.0], [25.5, 496.0], [25.6, 497.0], [25.7, 499.0], [25.8, 500.0], [25.9, 502.0], [26.0, 504.0], [26.1, 504.0], [26.2, 505.0], [26.3, 508.0], [26.4, 510.0], [26.5, 510.0], [26.6, 512.0], [26.7, 513.0], [26.8, 514.0], [26.9, 517.0], [27.0, 518.0], [27.1, 519.0], [27.2, 520.0], [27.3, 523.0], [27.4, 525.0], [27.5, 526.0], [27.6, 526.0], [27.7, 528.0], [27.8, 530.0], [27.9, 531.0], [28.0, 532.0], [28.1, 533.0], [28.2, 534.0], [28.3, 535.0], [28.4, 535.0], [28.5, 538.0], [28.6, 539.0], [28.7, 540.0], [28.8, 541.0], [28.9, 542.0], [29.0, 543.0], [29.1, 544.0], [29.2, 545.0], [29.3, 546.0], [29.4, 547.0], [29.5, 548.0], [29.6, 549.0], [29.7, 551.0], [29.8, 553.0], [29.9, 555.0], [30.0, 556.0], [30.1, 557.0], [30.2, 558.0], [30.3, 559.0], [30.4, 560.0], [30.5, 562.0], [30.6, 564.0], [30.7, 566.0], [30.8, 567.0], [30.9, 567.0], [31.0, 569.0], [31.1, 571.0], [31.2, 573.0], [31.3, 574.0], [31.4, 576.0], [31.5, 577.0], [31.6, 578.0], [31.7, 580.0], [31.8, 580.0], [31.9, 581.0], [32.0, 583.0], [32.1, 584.0], [32.2, 585.0], [32.3, 586.0], [32.4, 588.0], [32.5, 589.0], [32.6, 590.0], [32.7, 591.0], [32.8, 593.0], [32.9, 594.0], [33.0, 594.0], [33.1, 596.0], [33.2, 598.0], [33.3, 598.0], [33.4, 599.0], [33.5, 601.0], [33.6, 603.0], [33.7, 606.0], [33.8, 607.0], [33.9, 609.0], [34.0, 610.0], [34.1, 611.0], [34.2, 612.0], [34.3, 614.0], [34.4, 615.0], [34.5, 616.0], [34.6, 617.0], [34.7, 618.0], [34.8, 619.0], [34.9, 620.0], [35.0, 621.0], [35.1, 622.0], [35.2, 625.0], [35.3, 626.0], [35.4, 627.0], [35.5, 627.0], [35.6, 628.0], [35.7, 629.0], [35.8, 631.0], [35.9, 631.0], [36.0, 632.0], [36.1, 633.0], [36.2, 634.0], [36.3, 634.0], [36.4, 636.0], [36.5, 637.0], [36.6, 638.0], [36.7, 639.0], [36.8, 640.0], [36.9, 642.0], [37.0, 643.0], [37.1, 644.0], [37.2, 645.0], [37.3, 647.0], [37.4, 648.0], [37.5, 648.0], [37.6, 650.0], [37.7, 651.0], [37.8, 653.0], [37.9, 654.0], [38.0, 655.0], [38.1, 656.0], [38.2, 657.0], [38.3, 658.0], [38.4, 661.0], [38.5, 662.0], [38.6, 664.0], [38.7, 664.0], [38.8, 665.0], [38.9, 668.0], [39.0, 671.0], [39.1, 672.0], [39.2, 675.0], [39.3, 676.0], [39.4, 677.0], [39.5, 678.0], [39.6, 679.0], [39.7, 681.0], [39.8, 682.0], [39.9, 683.0], [40.0, 685.0], [40.1, 686.0], [40.2, 687.0], [40.3, 689.0], [40.4, 690.0], [40.5, 692.0], [40.6, 692.0], [40.7, 693.0], [40.8, 695.0], [40.9, 697.0], [41.0, 697.0], [41.1, 700.0], [41.2, 701.0], [41.3, 703.0], [41.4, 705.0], [41.5, 706.0], [41.6, 707.0], [41.7, 708.0], [41.8, 709.0], [41.9, 710.0], [42.0, 712.0], [42.1, 713.0], [42.2, 715.0], [42.3, 717.0], [42.4, 718.0], [42.5, 718.0], [42.6, 720.0], [42.7, 721.0], [42.8, 723.0], [42.9, 725.0], [43.0, 725.0], [43.1, 727.0], [43.2, 729.0], [43.3, 731.0], [43.4, 732.0], [43.5, 732.0], [43.6, 732.0], [43.7, 733.0], [43.8, 734.0], [43.9, 737.0], [44.0, 737.0], [44.1, 740.0], [44.2, 741.0], [44.3, 742.0], [44.4, 744.0], [44.5, 746.0], [44.6, 748.0], [44.7, 750.0], [44.8, 752.0], [44.9, 753.0], [45.0, 755.0], [45.1, 757.0], [45.2, 759.0], [45.3, 761.0], [45.4, 761.0], [45.5, 762.0], [45.6, 763.0], [45.7, 765.0], [45.8, 768.0], [45.9, 770.0], [46.0, 772.0], [46.1, 773.0], [46.2, 775.0], [46.3, 776.0], [46.4, 778.0], [46.5, 779.0], [46.6, 781.0], [46.7, 783.0], [46.8, 785.0], [46.9, 787.0], [47.0, 790.0], [47.1, 792.0], [47.2, 796.0], [47.3, 796.0], [47.4, 798.0], [47.5, 800.0], [47.6, 802.0], [47.7, 805.0], [47.8, 806.0], [47.9, 810.0], [48.0, 812.0], [48.1, 815.0], [48.2, 817.0], [48.3, 820.0], [48.4, 821.0], [48.5, 824.0], [48.6, 826.0], [48.7, 828.0], [48.8, 830.0], [48.9, 831.0], [49.0, 834.0], [49.1, 835.0], [49.2, 837.0], [49.3, 838.0], [49.4, 840.0], [49.5, 842.0], [49.6, 844.0], [49.7, 845.0], [49.8, 848.0], [49.9, 850.0], [50.0, 854.0], [50.1, 856.0], [50.2, 858.0], [50.3, 859.0], [50.4, 862.0], [50.5, 865.0], [50.6, 868.0], [50.7, 869.0], [50.8, 872.0], [50.9, 873.0], [51.0, 876.0], [51.1, 878.0], [51.2, 879.0], [51.3, 880.0], [51.4, 882.0], [51.5, 884.0], [51.6, 887.0], [51.7, 890.0], [51.8, 892.0], [51.9, 893.0], [52.0, 895.0], [52.1, 900.0], [52.2, 903.0], [52.3, 904.0], [52.4, 906.0], [52.5, 910.0], [52.6, 913.0], [52.7, 915.0], [52.8, 916.0], [52.9, 918.0], [53.0, 920.0], [53.1, 922.0], [53.2, 928.0], [53.3, 929.0], [53.4, 933.0], [53.5, 934.0], [53.6, 936.0], [53.7, 939.0], [53.8, 941.0], [53.9, 943.0], [54.0, 947.0], [54.1, 949.0], [54.2, 952.0], [54.3, 955.0], [54.4, 960.0], [54.5, 962.0], [54.6, 963.0], [54.7, 965.0], [54.8, 966.0], [54.9, 968.0], [55.0, 969.0], [55.1, 972.0], [55.2, 975.0], [55.3, 977.0], [55.4, 979.0], [55.5, 982.0], [55.6, 986.0], [55.7, 988.0], [55.8, 989.0], [55.9, 990.0], [56.0, 992.0], [56.1, 995.0], [56.2, 996.0], [56.3, 999.0], [56.4, 1001.0], [56.5, 1003.0], [56.6, 1005.0], [56.7, 1007.0], [56.8, 1011.0], [56.9, 1013.0], [57.0, 1015.0], [57.1, 1016.0], [57.2, 1017.0], [57.3, 1020.0], [57.4, 1022.0], [57.5, 1025.0], [57.6, 1027.0], [57.7, 1028.0], [57.8, 1031.0], [57.9, 1032.0], [58.0, 1033.0], [58.1, 1035.0], [58.2, 1037.0], [58.3, 1039.0], [58.4, 1041.0], [58.5, 1043.0], [58.6, 1044.0], [58.7, 1045.0], [58.8, 1048.0], [58.9, 1052.0], [59.0, 1054.0], [59.1, 1058.0], [59.2, 1062.0], [59.3, 1063.0], [59.4, 1065.0], [59.5, 1067.0], [59.6, 1070.0], [59.7, 1074.0], [59.8, 1076.0], [59.9, 1077.0], [60.0, 1078.0], [60.1, 1081.0], [60.2, 1083.0], [60.3, 1086.0], [60.4, 1088.0], [60.5, 1089.0], [60.6, 1091.0], [60.7, 1094.0], [60.8, 1097.0], [60.9, 1098.0], [61.0, 1099.0], [61.1, 1100.0], [61.2, 1101.0], [61.3, 1102.0], [61.4, 1104.0], [61.5, 1106.0], [61.6, 1108.0], [61.7, 1109.0], [61.8, 1112.0], [61.9, 1113.0], [62.0, 1114.0], [62.1, 1115.0], [62.2, 1118.0], [62.3, 1122.0], [62.4, 1122.0], [62.5, 1126.0], [62.6, 1127.0], [62.7, 1130.0], [62.8, 1132.0], [62.9, 1134.0], [63.0, 1136.0], [63.1, 1139.0], [63.2, 1140.0], [63.3, 1142.0], [63.4, 1143.0], [63.5, 1144.0], [63.6, 1145.0], [63.7, 1149.0], [63.8, 1151.0], [63.9, 1154.0], [64.0, 1155.0], [64.1, 1156.0], [64.2, 1159.0], [64.3, 1161.0], [64.4, 1163.0], [64.5, 1165.0], [64.6, 1167.0], [64.7, 1171.0], [64.8, 1174.0], [64.9, 1176.0], [65.0, 1178.0], [65.1, 1181.0], [65.2, 1183.0], [65.3, 1187.0], [65.4, 1188.0], [65.5, 1190.0], [65.6, 1193.0], [65.7, 1194.0], [65.8, 1197.0], [65.9, 1199.0], [66.0, 1201.0], [66.1, 1203.0], [66.2, 1206.0], [66.3, 1210.0], [66.4, 1213.0], [66.5, 1215.0], [66.6, 1217.0], [66.7, 1219.0], [66.8, 1220.0], [66.9, 1223.0], [67.0, 1225.0], [67.1, 1227.0], [67.2, 1228.0], [67.3, 1229.0], [67.4, 1230.0], [67.5, 1231.0], [67.6, 1232.0], [67.7, 1234.0], [67.8, 1236.0], [67.9, 1238.0], [68.0, 1241.0], [68.1, 1243.0], [68.2, 1245.0], [68.3, 1247.0], [68.4, 1252.0], [68.5, 1254.0], [68.6, 1256.0], [68.7, 1258.0], [68.8, 1261.0], [68.9, 1265.0], [69.0, 1268.0], [69.1, 1269.0], [69.2, 1271.0], [69.3, 1273.0], [69.4, 1275.0], [69.5, 1278.0], [69.6, 1280.0], [69.7, 1281.0], [69.8, 1282.0], [69.9, 1288.0], [70.0, 1291.0], [70.1, 1296.0], [70.2, 1298.0], [70.3, 1300.0], [70.4, 1302.0], [70.5, 1304.0], [70.6, 1305.0], [70.7, 1306.0], [70.8, 1308.0], [70.9, 1310.0], [71.0, 1312.0], [71.1, 1315.0], [71.2, 1317.0], [71.3, 1320.0], [71.4, 1323.0], [71.5, 1325.0], [71.6, 1326.0], [71.7, 1329.0], [71.8, 1332.0], [71.9, 1336.0], [72.0, 1339.0], [72.1, 1341.0], [72.2, 1346.0], [72.3, 1347.0], [72.4, 1350.0], [72.5, 1353.0], [72.6, 1355.0], [72.7, 1360.0], [72.8, 1363.0], [72.9, 1364.0], [73.0, 1368.0], [73.1, 1370.0], [73.2, 1373.0], [73.3, 1375.0], [73.4, 1377.0], [73.5, 1380.0], [73.6, 1382.0], [73.7, 1383.0], [73.8, 1387.0], [73.9, 1388.0], [74.0, 1390.0], [74.1, 1393.0], [74.2, 1395.0], [74.3, 1397.0], [74.4, 1399.0], [74.5, 1400.0], [74.6, 1403.0], [74.7, 1405.0], [74.8, 1407.0], [74.9, 1410.0], [75.0, 1414.0], [75.1, 1415.0], [75.2, 1417.0], [75.3, 1421.0], [75.4, 1423.0], [75.5, 1425.0], [75.6, 1428.0], [75.7, 1429.0], [75.8, 1431.0], [75.9, 1436.0], [76.0, 1438.0], [76.1, 1442.0], [76.2, 1444.0], [76.3, 1448.0], [76.4, 1451.0], [76.5, 1453.0], [76.6, 1455.0], [76.7, 1458.0], [76.8, 1464.0], [76.9, 1467.0], [77.0, 1470.0], [77.1, 1471.0], [77.2, 1474.0], [77.3, 1475.0], [77.4, 1478.0], [77.5, 1480.0], [77.6, 1481.0], [77.7, 1486.0], [77.8, 1487.0], [77.9, 1492.0], [78.0, 1494.0], [78.1, 1496.0], [78.2, 1498.0], [78.3, 1500.0], [78.4, 1503.0], [78.5, 1507.0], [78.6, 1509.0], [78.7, 1511.0], [78.8, 1514.0], [78.9, 1516.0], [79.0, 1520.0], [79.1, 1522.0], [79.2, 1525.0], [79.3, 1529.0], [79.4, 1532.0], [79.5, 1533.0], [79.6, 1537.0], [79.7, 1538.0], [79.8, 1541.0], [79.9, 1543.0], [80.0, 1545.0], [80.1, 1547.0], [80.2, 1550.0], [80.3, 1553.0], [80.4, 1554.0], [80.5, 1556.0], [80.6, 1560.0], [80.7, 1563.0], [80.8, 1565.0], [80.9, 1573.0], [81.0, 1576.0], [81.1, 1578.0], [81.2, 1583.0], [81.3, 1585.0], [81.4, 1587.0], [81.5, 1590.0], [81.6, 1591.0], [81.7, 1595.0], [81.8, 1597.0], [81.9, 1602.0], [82.0, 1603.0], [82.1, 1606.0], [82.2, 1609.0], [82.3, 1614.0], [82.4, 1615.0], [82.5, 1619.0], [82.6, 1621.0], [82.7, 1625.0], [82.8, 1631.0], [82.9, 1632.0], [83.0, 1634.0], [83.1, 1637.0], [83.2, 1642.0], [83.3, 1645.0], [83.4, 1652.0], [83.5, 1655.0], [83.6, 1659.0], [83.7, 1662.0], [83.8, 1665.0], [83.9, 1670.0], [84.0, 1674.0], [84.1, 1675.0], [84.2, 1677.0], [84.3, 1679.0], [84.4, 1684.0], [84.5, 1687.0], [84.6, 1690.0], [84.7, 1696.0], [84.8, 1697.0], [84.9, 1699.0], [85.0, 1702.0], [85.1, 1707.0], [85.2, 1712.0], [85.3, 1717.0], [85.4, 1718.0], [85.5, 1721.0], [85.6, 1723.0], [85.7, 1726.0], [85.8, 1731.0], [85.9, 1732.0], [86.0, 1735.0], [86.1, 1739.0], [86.2, 1740.0], [86.3, 1745.0], [86.4, 1750.0], [86.5, 1751.0], [86.6, 1755.0], [86.7, 1759.0], [86.8, 1762.0], [86.9, 1766.0], [87.0, 1769.0], [87.1, 1773.0], [87.2, 1778.0], [87.3, 1780.0], [87.4, 1786.0], [87.5, 1788.0], [87.6, 1793.0], [87.7, 1800.0], [87.8, 1801.0], [87.9, 1810.0], [88.0, 1815.0], [88.1, 1819.0], [88.2, 1822.0], [88.3, 1823.0], [88.4, 1829.0], [88.5, 1837.0], [88.6, 1849.0], [88.7, 1854.0], [88.8, 1866.0], [88.9, 1872.0], [89.0, 1876.0], [89.1, 1881.0], [89.2, 1884.0], [89.3, 1891.0], [89.4, 1893.0], [89.5, 1901.0], [89.6, 1906.0], [89.7, 1912.0], [89.8, 1920.0], [89.9, 1927.0], [90.0, 1933.0], [90.1, 1936.0], [90.2, 1941.0], [90.3, 1946.0], [90.4, 1948.0], [90.5, 1957.0], [90.6, 1966.0], [90.7, 1970.0], [90.8, 1977.0], [90.9, 1984.0], [91.0, 1987.0], [91.1, 1991.0], [91.2, 1998.0], [91.3, 2006.0], [91.4, 2011.0], [91.5, 2016.0], [91.6, 2022.0], [91.7, 2029.0], [91.8, 2037.0], [91.9, 2040.0], [92.0, 2048.0], [92.1, 2053.0], [92.2, 2067.0], [92.3, 2082.0], [92.4, 2090.0], [92.5, 2096.0], [92.6, 2101.0], [92.7, 2111.0], [92.8, 2117.0], [92.9, 2127.0], [93.0, 2133.0], [93.1, 2146.0], [93.2, 2162.0], [93.3, 2166.0], [93.4, 2169.0], [93.5, 2185.0], [93.6, 2193.0], [93.7, 2203.0], [93.8, 2214.0], [93.9, 2226.0], [94.0, 2241.0], [94.1, 2253.0], [94.2, 2265.0], [94.3, 2274.0], [94.4, 2288.0], [94.5, 2305.0], [94.6, 2318.0], [94.7, 2324.0], [94.8, 2350.0], [94.9, 2358.0], [95.0, 2369.0], [95.1, 2380.0], [95.2, 2400.0], [95.3, 2424.0], [95.4, 2440.0], [95.5, 2448.0], [95.6, 2458.0], [95.7, 2468.0], [95.8, 2485.0], [95.9, 2494.0], [96.0, 2507.0], [96.1, 2515.0], [96.2, 2521.0], [96.3, 2548.0], [96.4, 2563.0], [96.5, 2572.0], [96.6, 2588.0], [96.7, 2602.0], [96.8, 2621.0], [96.9, 2634.0], [97.0, 2645.0], [97.1, 2663.0], [97.2, 2695.0], [97.3, 2708.0], [97.4, 2732.0], [97.5, 2745.0], [97.6, 2751.0], [97.7, 2780.0], [97.8, 2793.0], [97.9, 2825.0], [98.0, 2847.0], [98.1, 2872.0], [98.2, 2928.0], [98.3, 2957.0], [98.4, 3002.0], [98.5, 3044.0], [98.6, 3100.0], [98.7, 3165.0], [98.8, 3190.0], [98.9, 3278.0], [99.0, 3391.0], [99.1, 3441.0], [99.2, 3527.0], [99.3, 3691.0], [99.4, 3773.0], [99.5, 3886.0], [99.6, 3996.0], [99.7, 4316.0], [99.8, 5045.0], [99.9, 5452.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 522.0, "series": [{"data": [[600.0, 396.0], [700.0, 333.0], [800.0, 239.0], [900.0, 221.0], [1000.0, 247.0], [1100.0, 251.0], [1200.0, 226.0], [1300.0, 218.0], [1400.0, 195.0], [1500.0, 187.0], [1600.0, 161.0], [1700.0, 142.0], [1800.0, 94.0], [1900.0, 90.0], [2000.0, 68.0], [2100.0, 57.0], [2300.0, 35.0], [2200.0, 44.0], [2400.0, 41.0], [2500.0, 38.0], [2600.0, 30.0], [2800.0, 18.0], [2700.0, 29.0], [2900.0, 11.0], [3000.0, 11.0], [3100.0, 12.0], [3300.0, 7.0], [3200.0, 4.0], [3400.0, 6.0], [3500.0, 6.0], [3700.0, 5.0], [3600.0, 3.0], [3800.0, 5.0], [3900.0, 5.0], [4000.0, 2.0], [4100.0, 2.0], [4300.0, 1.0], [4600.0, 1.0], [4700.0, 2.0], [4800.0, 1.0], [5100.0, 1.0], [5000.0, 1.0], [5200.0, 1.0], [5400.0, 3.0], [5500.0, 1.0], [5600.0, 2.0], [5900.0, 1.0], [6200.0, 1.0], [100.0, 32.0], [200.0, 378.0], [300.0, 406.0], [400.0, 522.0], [500.0, 397.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1124.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2726.0, "series": [{"data": [[0.0, 1340.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2726.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1124.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.897025171624712, "minX": 1.60386972E12, "maxY": 10.0, "series": [{"data": [[1.60387014E12, 10.0], [1.60386996E12, 10.0], [1.60386978E12, 10.0], [1.60387026E12, 9.897025171624712], [1.60387008E12, 10.0], [1.6038699E12, 10.0], [1.60386972E12, 10.0], [1.6038702E12, 10.0], [1.60387002E12, 10.0], [1.60386984E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387026E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 475.0, "minX": 1.0, "maxY": 3694.0, "series": [{"data": [[8.0, 1266.0], [4.0, 916.0], [2.0, 3694.0], [1.0, 3433.0], [9.0, 1866.0], [10.0, 1033.5524030110046], [5.0, 1001.0], [6.0, 475.0], [3.0, 945.0], [7.0, 987.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1034.5699421965348]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 413.73333333333335, "minX": 1.60386972E12, "maxY": 3180464.9833333334, "series": [{"data": [[1.60387014E12, 3152575.35], [1.60386996E12, 2734314.716666667], [1.60386978E12, 2756362.5], [1.60387026E12, 2098401.566666667], [1.60387008E12, 2086830.8333333333], [1.6038699E12, 3180464.9833333334], [1.60386972E12, 332599.6666666667], [1.6038702E12, 2595016.5], [1.60387002E12, 2680299.216666667], [1.60386984E12, 2354923.7333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60387014E12, 4386.633333333333], [1.60386996E12, 4614.866666666667], [1.60386978E12, 4019.0333333333333], [1.60387026E12, 3298.4333333333334], [1.60387008E12, 4177.75], [1.6038699E12, 4625.8], [1.60386972E12, 413.73333333333335], [1.6038702E12, 4975.316666666667], [1.60387002E12, 3722.616666666667], [1.60386984E12, 4343.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387026E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 910.3765243902443, "minX": 1.60386972E12, "maxY": 1467.4444444444448, "series": [{"data": [[1.60387014E12, 1018.1120543293716], [1.60386996E12, 974.4220032840724], [1.60386978E12, 1072.2078853046596], [1.60387026E12, 1146.8421052631577], [1.60387008E12, 1039.281739130436], [1.6038699E12, 979.3567921440261], [1.60386972E12, 1467.4444444444448], [1.6038702E12, 910.3765243902443], [1.60387002E12, 1187.571709233792], [1.60386984E12, 1013.4594594594595]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387026E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 908.9237804878053, "minX": 1.60386972E12, "maxY": 1464.2592592592594, "series": [{"data": [[1.60387014E12, 1016.006791171477], [1.60386996E12, 972.4121510673225], [1.60386978E12, 1069.978494623655], [1.60387026E12, 1144.9725400457678], [1.60387008E12, 1037.7913043478275], [1.6038699E12, 977.2209492635028], [1.60386972E12, 1464.2592592592594], [1.6038702E12, 908.9237804878053], [1.60387002E12, 1185.2907662082507], [1.60386984E12, 1011.3766891891885]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387026E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01144164759725401, "minX": 1.60386972E12, "maxY": 1.6296296296296287, "series": [{"data": [[1.60387014E12, 0.018675721561969432], [1.60386996E12, 0.019704433497536953], [1.60386978E12, 0.021505376344086023], [1.60387026E12, 0.01144164759725401], [1.60387008E12, 0.026086956521739136], [1.6038699E12, 0.018003273322422263], [1.60386972E12, 1.6296296296296287], [1.6038702E12, 0.01676829268292682], [1.60387002E12, 0.023575638506876235], [1.60386984E12, 0.048986486486486486]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387026E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 185.0, "minX": 1.60386972E12, "maxY": 6230.0, "series": [{"data": [[1.60387014E12, 3034.0], [1.60386996E12, 5045.0], [1.60386978E12, 5418.0], [1.60387026E12, 4316.0], [1.60387008E12, 5661.0], [1.6038699E12, 3599.0], [1.60386972E12, 4019.0], [1.6038702E12, 3190.0], [1.60387002E12, 6230.0], [1.60386984E12, 5452.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60387014E12, 215.5499992966652], [1.60386996E12, 192.97999970912934], [1.60386978E12, 203.46499800086022], [1.60387026E12, 198.76799958229066], [1.60387008E12, 198.0], [1.6038699E12, 202.04799912452697], [1.60386972E12, 203.0], [1.6038702E12, 201.0], [1.60387002E12, 223.58999987840653], [1.60386984E12, 206.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60387014E12, 218.20500028133392], [1.60386996E12, 194.03900005817414], [1.60386978E12, 211.01150079965592], [1.60387026E12, 199.67240008354187], [1.60387008E12, 198.0], [1.6038699E12, 205.0], [1.60386972E12, 203.0], [1.6038702E12, 202.5129001879692], [1.60387002E12, 224.0490000486374], [1.60386984E12, 206.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60387014E12, 217.0249996483326], [1.60386996E12, 193.58999985456467], [1.60386978E12, 207.6574990004301], [1.60387026E12, 199.32199989557267], [1.60387008E12, 198.0], [1.6038699E12, 203.88399956226348], [1.60386972E12, 203.0], [1.6038702E12, 201.7244997650385], [1.60387002E12, 223.84499993920326], [1.60386984E12, 206.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60387014E12, 200.0], [1.60386996E12, 185.0], [1.60386978E12, 190.0], [1.60387026E12, 194.0], [1.60387008E12, 188.0], [1.6038699E12, 192.0], [1.60386972E12, 203.0], [1.6038702E12, 192.0], [1.60387002E12, 212.0], [1.60386984E12, 192.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60387014E12, 806.0], [1.60386996E12, 725.0], [1.60386978E12, 961.0], [1.60387026E12, 1003.0], [1.60387008E12, 918.0], [1.6038699E12, 712.0], [1.60386972E12, 999.0], [1.6038702E12, 723.0], [1.60387002E12, 1054.0], [1.60386984E12, 761.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387026E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 428.0, "minX": 2.0, "maxY": 2324.5, "series": [{"data": [[2.0, 2324.5], [3.0, 1594.0], [4.0, 1491.0], [5.0, 1392.0], [6.0, 1303.0], [7.0, 1208.0], [8.0, 1102.5], [9.0, 1040.0], [10.0, 913.0], [11.0, 903.0], [12.0, 821.0], [13.0, 634.0], [14.0, 759.0], [15.0, 570.5], [16.0, 479.5], [17.0, 515.5], [18.0, 442.0], [19.0, 471.0], [20.0, 431.5], [21.0, 455.0], [22.0, 469.5], [23.0, 442.0], [24.0, 453.0], [25.0, 474.0], [26.0, 441.5], [27.0, 428.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 427.0, "minX": 2.0, "maxY": 2319.5, "series": [{"data": [[2.0, 2319.5], [3.0, 1591.0], [4.0, 1488.0], [5.0, 1388.5], [6.0, 1301.5], [7.0, 1203.0], [8.0, 1100.0], [9.0, 1038.5], [10.0, 910.5], [11.0, 902.0], [12.0, 820.0], [13.0, 631.0], [14.0, 759.0], [15.0, 570.5], [16.0, 479.5], [17.0, 515.5], [18.0, 442.0], [19.0, 470.0], [20.0, 431.5], [21.0, 455.0], [22.0, 469.0], [23.0, 441.0], [24.0, 453.0], [25.0, 474.0], [26.0, 441.0], [27.0, 427.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0666666666666667, "minX": 1.60386972E12, "maxY": 10.933333333333334, "series": [{"data": [[1.60387014E12, 9.816666666666666], [1.60386996E12, 10.15], [1.60386978E12, 9.3], [1.60387026E12, 7.116666666666666], [1.60387008E12, 9.583333333333334], [1.6038699E12, 10.183333333333334], [1.60386972E12, 1.0666666666666667], [1.6038702E12, 10.933333333333334], [1.60387002E12, 8.483333333333333], [1.60386984E12, 9.866666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387026E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.9, "minX": 1.60386972E12, "maxY": 10.933333333333334, "series": [{"data": [[1.60387014E12, 9.816666666666666], [1.60386996E12, 10.15], [1.60386978E12, 9.3], [1.60387026E12, 7.283333333333333], [1.60387008E12, 9.583333333333334], [1.6038699E12, 10.183333333333334], [1.60386972E12, 0.9], [1.6038702E12, 10.933333333333334], [1.60387002E12, 8.483333333333333], [1.60386984E12, 9.866666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387026E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.9, "minX": 1.60386972E12, "maxY": 10.933333333333334, "series": [{"data": [[1.60387014E12, 9.816666666666666], [1.60386996E12, 10.15], [1.60386978E12, 9.3], [1.60387026E12, 7.283333333333333], [1.60387008E12, 9.583333333333334], [1.6038699E12, 10.183333333333334], [1.60386972E12, 0.9], [1.6038702E12, 10.933333333333334], [1.60387002E12, 8.483333333333333], [1.60386984E12, 9.866666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387026E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.9, "minX": 1.60386972E12, "maxY": 10.933333333333334, "series": [{"data": [[1.60387014E12, 9.816666666666666], [1.60386996E12, 10.15], [1.60386978E12, 9.3], [1.60387026E12, 7.283333333333333], [1.60387008E12, 9.583333333333334], [1.6038699E12, 10.183333333333334], [1.60386972E12, 0.9], [1.6038702E12, 10.933333333333334], [1.60387002E12, 8.483333333333333], [1.60386984E12, 9.866666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387026E12, "title": "Total Transactions Per Second"}},
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

