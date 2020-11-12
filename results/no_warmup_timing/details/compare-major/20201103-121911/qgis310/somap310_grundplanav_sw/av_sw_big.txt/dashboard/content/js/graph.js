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
        data: {"result": {"minY": 191.0, "minX": 0.0, "maxY": 7093.0, "series": [{"data": [[0.0, 191.0], [0.1, 196.0], [0.2, 199.0], [0.3, 201.0], [0.4, 203.0], [0.5, 205.0], [0.6, 206.0], [0.7, 207.0], [0.8, 209.0], [0.9, 210.0], [1.0, 211.0], [1.1, 212.0], [1.2, 214.0], [1.3, 216.0], [1.4, 217.0], [1.5, 219.0], [1.6, 221.0], [1.7, 222.0], [1.8, 222.0], [1.9, 223.0], [2.0, 224.0], [2.1, 224.0], [2.2, 226.0], [2.3, 227.0], [2.4, 228.0], [2.5, 229.0], [2.6, 229.0], [2.7, 230.0], [2.8, 230.0], [2.9, 231.0], [3.0, 232.0], [3.1, 232.0], [3.2, 233.0], [3.3, 234.0], [3.4, 234.0], [3.5, 235.0], [3.6, 236.0], [3.7, 236.0], [3.8, 236.0], [3.9, 237.0], [4.0, 237.0], [4.1, 238.0], [4.2, 238.0], [4.3, 239.0], [4.4, 239.0], [4.5, 240.0], [4.6, 240.0], [4.7, 241.0], [4.8, 242.0], [4.9, 242.0], [5.0, 243.0], [5.1, 244.0], [5.2, 244.0], [5.3, 245.0], [5.4, 246.0], [5.5, 247.0], [5.6, 247.0], [5.7, 248.0], [5.8, 250.0], [5.9, 250.0], [6.0, 251.0], [6.1, 252.0], [6.2, 254.0], [6.3, 255.0], [6.4, 257.0], [6.5, 258.0], [6.6, 259.0], [6.7, 260.0], [6.8, 261.0], [6.9, 265.0], [7.0, 267.0], [7.1, 271.0], [7.2, 276.0], [7.3, 281.0], [7.4, 284.0], [7.5, 287.0], [7.6, 290.0], [7.7, 294.0], [7.8, 296.0], [7.9, 300.0], [8.0, 303.0], [8.1, 305.0], [8.2, 306.0], [8.3, 307.0], [8.4, 311.0], [8.5, 313.0], [8.6, 314.0], [8.7, 316.0], [8.8, 316.0], [8.9, 317.0], [9.0, 318.0], [9.1, 319.0], [9.2, 320.0], [9.3, 321.0], [9.4, 322.0], [9.5, 324.0], [9.6, 325.0], [9.7, 325.0], [9.8, 326.0], [9.9, 327.0], [10.0, 327.0], [10.1, 328.0], [10.2, 329.0], [10.3, 330.0], [10.4, 331.0], [10.5, 332.0], [10.6, 333.0], [10.7, 334.0], [10.8, 334.0], [10.9, 336.0], [11.0, 337.0], [11.1, 338.0], [11.2, 339.0], [11.3, 339.0], [11.4, 341.0], [11.5, 343.0], [11.6, 345.0], [11.7, 345.0], [11.8, 346.0], [11.9, 347.0], [12.0, 348.0], [12.1, 350.0], [12.2, 350.0], [12.3, 351.0], [12.4, 352.0], [12.5, 352.0], [12.6, 355.0], [12.7, 357.0], [12.8, 357.0], [12.9, 358.0], [13.0, 359.0], [13.1, 361.0], [13.2, 362.0], [13.3, 363.0], [13.4, 365.0], [13.5, 367.0], [13.6, 369.0], [13.7, 371.0], [13.8, 372.0], [13.9, 375.0], [14.0, 376.0], [14.1, 378.0], [14.2, 379.0], [14.3, 380.0], [14.4, 381.0], [14.5, 383.0], [14.6, 384.0], [14.7, 386.0], [14.8, 387.0], [14.9, 388.0], [15.0, 390.0], [15.1, 392.0], [15.2, 394.0], [15.3, 396.0], [15.4, 397.0], [15.5, 398.0], [15.6, 400.0], [15.7, 401.0], [15.8, 402.0], [15.9, 403.0], [16.0, 404.0], [16.1, 406.0], [16.2, 407.0], [16.3, 408.0], [16.4, 410.0], [16.5, 412.0], [16.6, 413.0], [16.7, 414.0], [16.8, 415.0], [16.9, 416.0], [17.0, 418.0], [17.1, 419.0], [17.2, 421.0], [17.3, 423.0], [17.4, 425.0], [17.5, 426.0], [17.6, 427.0], [17.7, 428.0], [17.8, 430.0], [17.9, 431.0], [18.0, 433.0], [18.1, 434.0], [18.2, 436.0], [18.3, 437.0], [18.4, 438.0], [18.5, 439.0], [18.6, 439.0], [18.7, 440.0], [18.8, 441.0], [18.9, 443.0], [19.0, 444.0], [19.1, 445.0], [19.2, 447.0], [19.3, 448.0], [19.4, 449.0], [19.5, 451.0], [19.6, 451.0], [19.7, 452.0], [19.8, 453.0], [19.9, 453.0], [20.0, 455.0], [20.1, 456.0], [20.2, 457.0], [20.3, 458.0], [20.4, 459.0], [20.5, 461.0], [20.6, 461.0], [20.7, 462.0], [20.8, 463.0], [20.9, 464.0], [21.0, 464.0], [21.1, 465.0], [21.2, 466.0], [21.3, 467.0], [21.4, 467.0], [21.5, 468.0], [21.6, 469.0], [21.7, 470.0], [21.8, 471.0], [21.9, 471.0], [22.0, 473.0], [22.1, 474.0], [22.2, 475.0], [22.3, 477.0], [22.4, 477.0], [22.5, 479.0], [22.6, 479.0], [22.7, 480.0], [22.8, 481.0], [22.9, 481.0], [23.0, 482.0], [23.1, 482.0], [23.2, 484.0], [23.3, 485.0], [23.4, 486.0], [23.5, 487.0], [23.6, 488.0], [23.7, 490.0], [23.8, 492.0], [23.9, 493.0], [24.0, 493.0], [24.1, 494.0], [24.2, 495.0], [24.3, 496.0], [24.4, 498.0], [24.5, 499.0], [24.6, 499.0], [24.7, 500.0], [24.8, 501.0], [24.9, 503.0], [25.0, 504.0], [25.1, 506.0], [25.2, 508.0], [25.3, 508.0], [25.4, 510.0], [25.5, 511.0], [25.6, 513.0], [25.7, 515.0], [25.8, 517.0], [25.9, 518.0], [26.0, 520.0], [26.1, 522.0], [26.2, 522.0], [26.3, 524.0], [26.4, 525.0], [26.5, 526.0], [26.6, 528.0], [26.7, 530.0], [26.8, 531.0], [26.9, 532.0], [27.0, 534.0], [27.1, 535.0], [27.2, 536.0], [27.3, 537.0], [27.4, 539.0], [27.5, 540.0], [27.6, 541.0], [27.7, 542.0], [27.8, 543.0], [27.9, 544.0], [28.0, 546.0], [28.1, 547.0], [28.2, 549.0], [28.3, 550.0], [28.4, 551.0], [28.5, 553.0], [28.6, 554.0], [28.7, 555.0], [28.8, 556.0], [28.9, 558.0], [29.0, 559.0], [29.1, 560.0], [29.2, 562.0], [29.3, 562.0], [29.4, 563.0], [29.5, 566.0], [29.6, 567.0], [29.7, 568.0], [29.8, 569.0], [29.9, 570.0], [30.0, 571.0], [30.1, 573.0], [30.2, 573.0], [30.3, 574.0], [30.4, 574.0], [30.5, 576.0], [30.6, 577.0], [30.7, 578.0], [30.8, 578.0], [30.9, 579.0], [31.0, 579.0], [31.1, 582.0], [31.2, 583.0], [31.3, 585.0], [31.4, 585.0], [31.5, 587.0], [31.6, 588.0], [31.7, 589.0], [31.8, 591.0], [31.9, 592.0], [32.0, 595.0], [32.1, 596.0], [32.2, 597.0], [32.3, 599.0], [32.4, 600.0], [32.5, 602.0], [32.6, 604.0], [32.7, 605.0], [32.8, 606.0], [32.9, 606.0], [33.0, 607.0], [33.1, 608.0], [33.2, 610.0], [33.3, 611.0], [33.4, 613.0], [33.5, 614.0], [33.6, 615.0], [33.7, 617.0], [33.8, 619.0], [33.9, 620.0], [34.0, 621.0], [34.1, 622.0], [34.2, 625.0], [34.3, 627.0], [34.4, 628.0], [34.5, 629.0], [34.6, 629.0], [34.7, 630.0], [34.8, 632.0], [34.9, 633.0], [35.0, 633.0], [35.1, 634.0], [35.2, 635.0], [35.3, 637.0], [35.4, 638.0], [35.5, 640.0], [35.6, 641.0], [35.7, 643.0], [35.8, 644.0], [35.9, 645.0], [36.0, 646.0], [36.1, 647.0], [36.2, 647.0], [36.3, 649.0], [36.4, 651.0], [36.5, 652.0], [36.6, 654.0], [36.7, 654.0], [36.8, 655.0], [36.9, 657.0], [37.0, 659.0], [37.1, 660.0], [37.2, 661.0], [37.3, 662.0], [37.4, 663.0], [37.5, 665.0], [37.6, 666.0], [37.7, 667.0], [37.8, 667.0], [37.9, 669.0], [38.0, 669.0], [38.1, 670.0], [38.2, 671.0], [38.3, 672.0], [38.4, 673.0], [38.5, 675.0], [38.6, 677.0], [38.7, 679.0], [38.8, 679.0], [38.9, 680.0], [39.0, 681.0], [39.1, 682.0], [39.2, 684.0], [39.3, 685.0], [39.4, 687.0], [39.5, 687.0], [39.6, 688.0], [39.7, 688.0], [39.8, 692.0], [39.9, 693.0], [40.0, 694.0], [40.1, 696.0], [40.2, 697.0], [40.3, 698.0], [40.4, 699.0], [40.5, 701.0], [40.6, 703.0], [40.7, 704.0], [40.8, 705.0], [40.9, 706.0], [41.0, 708.0], [41.1, 709.0], [41.2, 710.0], [41.3, 711.0], [41.4, 712.0], [41.5, 714.0], [41.6, 715.0], [41.7, 716.0], [41.8, 717.0], [41.9, 718.0], [42.0, 720.0], [42.1, 720.0], [42.2, 723.0], [42.3, 724.0], [42.4, 726.0], [42.5, 727.0], [42.6, 728.0], [42.7, 730.0], [42.8, 732.0], [42.9, 734.0], [43.0, 735.0], [43.1, 736.0], [43.2, 738.0], [43.3, 739.0], [43.4, 740.0], [43.5, 742.0], [43.6, 743.0], [43.7, 746.0], [43.8, 749.0], [43.9, 751.0], [44.0, 752.0], [44.1, 754.0], [44.2, 755.0], [44.3, 757.0], [44.4, 758.0], [44.5, 760.0], [44.6, 762.0], [44.7, 763.0], [44.8, 765.0], [44.9, 767.0], [45.0, 769.0], [45.1, 771.0], [45.2, 773.0], [45.3, 775.0], [45.4, 777.0], [45.5, 779.0], [45.6, 780.0], [45.7, 782.0], [45.8, 783.0], [45.9, 785.0], [46.0, 786.0], [46.1, 787.0], [46.2, 789.0], [46.3, 791.0], [46.4, 792.0], [46.5, 793.0], [46.6, 794.0], [46.7, 798.0], [46.8, 799.0], [46.9, 801.0], [47.0, 805.0], [47.1, 807.0], [47.2, 809.0], [47.3, 810.0], [47.4, 812.0], [47.5, 814.0], [47.6, 816.0], [47.7, 818.0], [47.8, 820.0], [47.9, 822.0], [48.0, 825.0], [48.1, 827.0], [48.2, 830.0], [48.3, 831.0], [48.4, 833.0], [48.5, 836.0], [48.6, 839.0], [48.7, 841.0], [48.8, 843.0], [48.9, 844.0], [49.0, 846.0], [49.1, 847.0], [49.2, 849.0], [49.3, 850.0], [49.4, 851.0], [49.5, 857.0], [49.6, 860.0], [49.7, 862.0], [49.8, 864.0], [49.9, 865.0], [50.0, 868.0], [50.1, 870.0], [50.2, 874.0], [50.3, 876.0], [50.4, 879.0], [50.5, 880.0], [50.6, 882.0], [50.7, 886.0], [50.8, 888.0], [50.9, 889.0], [51.0, 890.0], [51.1, 892.0], [51.2, 893.0], [51.3, 896.0], [51.4, 896.0], [51.5, 898.0], [51.6, 901.0], [51.7, 904.0], [51.8, 907.0], [51.9, 909.0], [52.0, 912.0], [52.1, 913.0], [52.2, 916.0], [52.3, 918.0], [52.4, 920.0], [52.5, 921.0], [52.6, 922.0], [52.7, 925.0], [52.8, 926.0], [52.9, 928.0], [53.0, 929.0], [53.1, 932.0], [53.2, 936.0], [53.3, 938.0], [53.4, 939.0], [53.5, 941.0], [53.6, 943.0], [53.7, 945.0], [53.8, 949.0], [53.9, 951.0], [54.0, 953.0], [54.1, 960.0], [54.2, 962.0], [54.3, 965.0], [54.4, 967.0], [54.5, 969.0], [54.6, 971.0], [54.7, 972.0], [54.8, 976.0], [54.9, 979.0], [55.0, 981.0], [55.1, 983.0], [55.2, 984.0], [55.3, 986.0], [55.4, 987.0], [55.5, 988.0], [55.6, 991.0], [55.7, 993.0], [55.8, 995.0], [55.9, 997.0], [56.0, 999.0], [56.1, 1003.0], [56.2, 1004.0], [56.3, 1005.0], [56.4, 1009.0], [56.5, 1011.0], [56.6, 1014.0], [56.7, 1018.0], [56.8, 1019.0], [56.9, 1022.0], [57.0, 1023.0], [57.1, 1025.0], [57.2, 1027.0], [57.3, 1030.0], [57.4, 1031.0], [57.5, 1034.0], [57.6, 1035.0], [57.7, 1038.0], [57.8, 1040.0], [57.9, 1042.0], [58.0, 1047.0], [58.1, 1049.0], [58.2, 1050.0], [58.3, 1055.0], [58.4, 1056.0], [58.5, 1062.0], [58.6, 1066.0], [58.7, 1068.0], [58.8, 1070.0], [58.9, 1074.0], [59.0, 1075.0], [59.1, 1076.0], [59.2, 1081.0], [59.3, 1082.0], [59.4, 1083.0], [59.5, 1085.0], [59.6, 1087.0], [59.7, 1091.0], [59.8, 1092.0], [59.9, 1096.0], [60.0, 1098.0], [60.1, 1100.0], [60.2, 1101.0], [60.3, 1105.0], [60.4, 1107.0], [60.5, 1111.0], [60.6, 1113.0], [60.7, 1116.0], [60.8, 1118.0], [60.9, 1120.0], [61.0, 1122.0], [61.1, 1124.0], [61.2, 1125.0], [61.3, 1128.0], [61.4, 1130.0], [61.5, 1133.0], [61.6, 1135.0], [61.7, 1137.0], [61.8, 1138.0], [61.9, 1140.0], [62.0, 1143.0], [62.1, 1146.0], [62.2, 1148.0], [62.3, 1149.0], [62.4, 1150.0], [62.5, 1152.0], [62.6, 1157.0], [62.7, 1159.0], [62.8, 1159.0], [62.9, 1162.0], [63.0, 1163.0], [63.1, 1165.0], [63.2, 1171.0], [63.3, 1173.0], [63.4, 1175.0], [63.5, 1178.0], [63.6, 1181.0], [63.7, 1184.0], [63.8, 1185.0], [63.9, 1187.0], [64.0, 1190.0], [64.1, 1192.0], [64.2, 1195.0], [64.3, 1197.0], [64.4, 1198.0], [64.5, 1200.0], [64.6, 1201.0], [64.7, 1203.0], [64.8, 1207.0], [64.9, 1210.0], [65.0, 1211.0], [65.1, 1212.0], [65.2, 1216.0], [65.3, 1217.0], [65.4, 1220.0], [65.5, 1222.0], [65.6, 1223.0], [65.7, 1226.0], [65.8, 1230.0], [65.9, 1231.0], [66.0, 1232.0], [66.1, 1233.0], [66.2, 1235.0], [66.3, 1238.0], [66.4, 1239.0], [66.5, 1242.0], [66.6, 1243.0], [66.7, 1247.0], [66.8, 1248.0], [66.9, 1253.0], [67.0, 1254.0], [67.1, 1257.0], [67.2, 1259.0], [67.3, 1260.0], [67.4, 1262.0], [67.5, 1264.0], [67.6, 1265.0], [67.7, 1267.0], [67.8, 1268.0], [67.9, 1271.0], [68.0, 1272.0], [68.1, 1277.0], [68.2, 1277.0], [68.3, 1279.0], [68.4, 1280.0], [68.5, 1283.0], [68.6, 1287.0], [68.7, 1293.0], [68.8, 1297.0], [68.9, 1300.0], [69.0, 1304.0], [69.1, 1307.0], [69.2, 1311.0], [69.3, 1314.0], [69.4, 1316.0], [69.5, 1318.0], [69.6, 1319.0], [69.7, 1321.0], [69.8, 1323.0], [69.9, 1326.0], [70.0, 1330.0], [70.1, 1333.0], [70.2, 1334.0], [70.3, 1335.0], [70.4, 1338.0], [70.5, 1339.0], [70.6, 1341.0], [70.7, 1342.0], [70.8, 1345.0], [70.9, 1346.0], [71.0, 1349.0], [71.1, 1353.0], [71.2, 1355.0], [71.3, 1361.0], [71.4, 1364.0], [71.5, 1367.0], [71.6, 1371.0], [71.7, 1374.0], [71.8, 1379.0], [71.9, 1381.0], [72.0, 1384.0], [72.1, 1387.0], [72.2, 1389.0], [72.3, 1392.0], [72.4, 1394.0], [72.5, 1396.0], [72.6, 1399.0], [72.7, 1402.0], [72.8, 1406.0], [72.9, 1407.0], [73.0, 1410.0], [73.1, 1412.0], [73.2, 1414.0], [73.3, 1417.0], [73.4, 1419.0], [73.5, 1422.0], [73.6, 1425.0], [73.7, 1429.0], [73.8, 1431.0], [73.9, 1434.0], [74.0, 1436.0], [74.1, 1439.0], [74.2, 1441.0], [74.3, 1444.0], [74.4, 1445.0], [74.5, 1448.0], [74.6, 1452.0], [74.7, 1455.0], [74.8, 1458.0], [74.9, 1460.0], [75.0, 1463.0], [75.1, 1465.0], [75.2, 1467.0], [75.3, 1471.0], [75.4, 1475.0], [75.5, 1475.0], [75.6, 1478.0], [75.7, 1483.0], [75.8, 1485.0], [75.9, 1486.0], [76.0, 1489.0], [76.1, 1492.0], [76.2, 1493.0], [76.3, 1495.0], [76.4, 1498.0], [76.5, 1500.0], [76.6, 1502.0], [76.7, 1505.0], [76.8, 1507.0], [76.9, 1510.0], [77.0, 1512.0], [77.1, 1515.0], [77.2, 1517.0], [77.3, 1519.0], [77.4, 1520.0], [77.5, 1521.0], [77.6, 1523.0], [77.7, 1525.0], [77.8, 1528.0], [77.9, 1529.0], [78.0, 1533.0], [78.1, 1535.0], [78.2, 1538.0], [78.3, 1542.0], [78.4, 1545.0], [78.5, 1548.0], [78.6, 1551.0], [78.7, 1553.0], [78.8, 1555.0], [78.9, 1558.0], [79.0, 1560.0], [79.1, 1562.0], [79.2, 1567.0], [79.3, 1570.0], [79.4, 1572.0], [79.5, 1574.0], [79.6, 1576.0], [79.7, 1578.0], [79.8, 1580.0], [79.9, 1582.0], [80.0, 1585.0], [80.1, 1589.0], [80.2, 1593.0], [80.3, 1594.0], [80.4, 1598.0], [80.5, 1601.0], [80.6, 1605.0], [80.7, 1608.0], [80.8, 1612.0], [80.9, 1614.0], [81.0, 1617.0], [81.1, 1620.0], [81.2, 1623.0], [81.3, 1625.0], [81.4, 1627.0], [81.5, 1630.0], [81.6, 1633.0], [81.7, 1635.0], [81.8, 1638.0], [81.9, 1644.0], [82.0, 1647.0], [82.1, 1649.0], [82.2, 1651.0], [82.3, 1658.0], [82.4, 1660.0], [82.5, 1663.0], [82.6, 1666.0], [82.7, 1671.0], [82.8, 1674.0], [82.9, 1677.0], [83.0, 1680.0], [83.1, 1682.0], [83.2, 1687.0], [83.3, 1690.0], [83.4, 1694.0], [83.5, 1697.0], [83.6, 1699.0], [83.7, 1707.0], [83.8, 1709.0], [83.9, 1712.0], [84.0, 1716.0], [84.1, 1718.0], [84.2, 1720.0], [84.3, 1723.0], [84.4, 1727.0], [84.5, 1729.0], [84.6, 1732.0], [84.7, 1734.0], [84.8, 1739.0], [84.9, 1743.0], [85.0, 1745.0], [85.1, 1750.0], [85.2, 1752.0], [85.3, 1756.0], [85.4, 1758.0], [85.5, 1763.0], [85.6, 1769.0], [85.7, 1773.0], [85.8, 1774.0], [85.9, 1778.0], [86.0, 1780.0], [86.1, 1782.0], [86.2, 1788.0], [86.3, 1791.0], [86.4, 1794.0], [86.5, 1798.0], [86.6, 1800.0], [86.7, 1803.0], [86.8, 1805.0], [86.9, 1811.0], [87.0, 1814.0], [87.1, 1816.0], [87.2, 1820.0], [87.3, 1822.0], [87.4, 1828.0], [87.5, 1833.0], [87.6, 1839.0], [87.7, 1845.0], [87.8, 1855.0], [87.9, 1859.0], [88.0, 1863.0], [88.1, 1869.0], [88.2, 1874.0], [88.3, 1876.0], [88.4, 1879.0], [88.5, 1887.0], [88.6, 1889.0], [88.7, 1891.0], [88.8, 1894.0], [88.9, 1903.0], [89.0, 1909.0], [89.1, 1915.0], [89.2, 1918.0], [89.3, 1924.0], [89.4, 1930.0], [89.5, 1940.0], [89.6, 1953.0], [89.7, 1955.0], [89.8, 1959.0], [89.9, 1971.0], [90.0, 1975.0], [90.1, 1978.0], [90.2, 1981.0], [90.3, 1986.0], [90.4, 1990.0], [90.5, 1996.0], [90.6, 2004.0], [90.7, 2010.0], [90.8, 2013.0], [90.9, 2020.0], [91.0, 2023.0], [91.1, 2031.0], [91.2, 2040.0], [91.3, 2044.0], [91.4, 2052.0], [91.5, 2055.0], [91.6, 2059.0], [91.7, 2068.0], [91.8, 2074.0], [91.9, 2087.0], [92.0, 2094.0], [92.1, 2102.0], [92.2, 2120.0], [92.3, 2126.0], [92.4, 2129.0], [92.5, 2135.0], [92.6, 2141.0], [92.7, 2152.0], [92.8, 2163.0], [92.9, 2173.0], [93.0, 2185.0], [93.1, 2191.0], [93.2, 2207.0], [93.3, 2216.0], [93.4, 2227.0], [93.5, 2234.0], [93.6, 2239.0], [93.7, 2256.0], [93.8, 2271.0], [93.9, 2286.0], [94.0, 2300.0], [94.1, 2308.0], [94.2, 2326.0], [94.3, 2338.0], [94.4, 2352.0], [94.5, 2368.0], [94.6, 2378.0], [94.7, 2385.0], [94.8, 2409.0], [94.9, 2417.0], [95.0, 2430.0], [95.1, 2435.0], [95.2, 2451.0], [95.3, 2459.0], [95.4, 2464.0], [95.5, 2480.0], [95.6, 2503.0], [95.7, 2515.0], [95.8, 2537.0], [95.9, 2548.0], [96.0, 2564.0], [96.1, 2571.0], [96.2, 2589.0], [96.3, 2599.0], [96.4, 2623.0], [96.5, 2633.0], [96.6, 2639.0], [96.7, 2649.0], [96.8, 2667.0], [96.9, 2681.0], [97.0, 2704.0], [97.1, 2736.0], [97.2, 2766.0], [97.3, 2797.0], [97.4, 2821.0], [97.5, 2836.0], [97.6, 2845.0], [97.7, 2879.0], [97.8, 2915.0], [97.9, 2939.0], [98.0, 2979.0], [98.1, 3028.0], [98.2, 3049.0], [98.3, 3075.0], [98.4, 3098.0], [98.5, 3122.0], [98.6, 3170.0], [98.7, 3212.0], [98.8, 3260.0], [98.9, 3312.0], [99.0, 3385.0], [99.1, 3485.0], [99.2, 3577.0], [99.3, 3795.0], [99.4, 3922.0], [99.5, 4195.0], [99.6, 4470.0], [99.7, 4608.0], [99.8, 4999.0], [99.9, 5724.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 470.0, "series": [{"data": [[600.0, 418.0], [700.0, 331.0], [800.0, 247.0], [900.0, 231.0], [1000.0, 210.0], [1100.0, 228.0], [1200.0, 230.0], [1300.0, 195.0], [1400.0, 199.0], [1500.0, 207.0], [1600.0, 165.0], [1700.0, 152.0], [1800.0, 117.0], [1900.0, 91.0], [2000.0, 77.0], [2100.0, 56.0], [2300.0, 40.0], [2200.0, 44.0], [2400.0, 43.0], [2500.0, 38.0], [2600.0, 34.0], [2700.0, 17.0], [2800.0, 23.0], [2900.0, 15.0], [3000.0, 19.0], [3100.0, 13.0], [3300.0, 10.0], [3200.0, 10.0], [3400.0, 4.0], [3500.0, 5.0], [3600.0, 4.0], [3700.0, 2.0], [3800.0, 3.0], [3900.0, 2.0], [4000.0, 3.0], [4200.0, 2.0], [4100.0, 2.0], [4300.0, 1.0], [4400.0, 3.0], [4500.0, 3.0], [4600.0, 2.0], [4700.0, 2.0], [4900.0, 2.0], [5200.0, 1.0], [5400.0, 1.0], [5500.0, 1.0], [5700.0, 2.0], [5800.0, 1.0], [6000.0, 1.0], [5900.0, 1.0], [6700.0, 1.0], [7000.0, 1.0], [100.0, 11.0], [200.0, 399.0], [300.0, 398.0], [400.0, 470.0], [500.0, 402.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1217.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2690.0, "series": [{"data": [[0.0, 1283.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2690.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1217.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.5, "minX": 1.60440702E12, "maxY": 10.0, "series": [{"data": [[1.60440726E12, 10.0], [1.60440756E12, 10.0], [1.60440708E12, 10.0], [1.6044072E12, 10.0], [1.60440738E12, 10.0], [1.60440702E12, 9.909090909090907], [1.60440732E12, 10.0], [1.6044075E12, 10.0], [1.60440714E12, 10.0], [1.60440744E12, 10.0], [1.60440762E12, 5.5]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440762E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 524.5, "minX": 1.0, "maxY": 2952.0, "series": [{"data": [[8.0, 524.5], [4.0, 1031.0], [2.0, 1781.0], [1.0, 2952.0], [9.0, 1319.0], [10.0, 1059.1002123962073], [5.0, 655.0], [6.0, 747.0], [3.0, 703.0], [7.0, 925.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990173410404598, 1059.1500963391134]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 77.78333333333333, "minX": 1.60440702E12, "maxY": 3185159.433333333, "series": [{"data": [[1.60440726E12, 2774796.2666666666], [1.60440756E12, 2407434.6666666665], [1.60440708E12, 2653802.0166666666], [1.6044072E12, 3185159.433333333], [1.60440738E12, 2141531.3833333333], [1.60440702E12, 407312.05], [1.60440732E12, 2557679.6], [1.6044075E12, 2646759.7666666666], [1.60440714E12, 2231034.35], [1.60440744E12, 2908467.0], [1.60440762E12, 58362.066666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60440726E12, 4627.833333333333], [1.60440756E12, 4322.716666666666], [1.60440708E12, 3831.8166666666666], [1.6044072E12, 4571.75], [1.60440738E12, 3832.2], [1.60440702E12, 501.78333333333336], [1.60440732E12, 3490.4], [1.6044075E12, 4564.366666666667], [1.60440714E12, 4275.033333333334], [1.60440744E12, 4481.65], [1.60440762E12, 77.78333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440762E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 985.4729950900165, "minX": 1.60440702E12, "maxY": 1366.5909090909092, "series": [{"data": [[1.60440726E12, 985.4729950900165], [1.60440756E12, 1046.4869109947647], [1.60440708E12, 1131.2232645403358], [1.6044072E12, 986.4162520729676], [1.60440738E12, 1127.5263157894728], [1.60440702E12, 1366.5909090909092], [1.60440732E12, 1266.4442105263167], [1.6044075E12, 997.9883527454243], [1.60440714E12, 1023.1852487135502], [1.60440744E12, 991.4693200663343], [1.60440762E12, 1171.3]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440762E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 983.3256955810155, "minX": 1.60440702E12, "maxY": 1363.89393939394, "series": [{"data": [[1.60440726E12, 983.3256955810155], [1.60440756E12, 1044.6422338568939], [1.60440708E12, 1128.9005628517837], [1.6044072E12, 983.9999999999999], [1.60440738E12, 1125.9229323308266], [1.60440702E12, 1363.89393939394], [1.60440732E12, 1264.0042105263153], [1.6044075E12, 996.1514143094846], [1.60440714E12, 1021.2744425385936], [1.60440744E12, 989.4759535655062], [1.60440762E12, 1169.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440762E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60440702E12, "maxY": 1.2878787878787874, "series": [{"data": [[1.60440726E12, 0.018003273322422252], [1.60440756E12, 0.015706806282722516], [1.60440708E12, 0.024390243902439022], [1.6044072E12, 0.013266998341625211], [1.60440738E12, 0.026315789473684213], [1.60440702E12, 1.2878787878787874], [1.60440732E12, 0.02736842105263157], [1.6044075E12, 0.018302828618968387], [1.60440714E12, 0.022298456260720412], [1.60440744E12, 0.02155887230514097], [1.60440762E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440762E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 191.0, "minX": 1.60440702E12, "maxY": 7093.0, "series": [{"data": [[1.60440726E12, 4999.0], [1.60440756E12, 4524.0], [1.60440708E12, 5703.0], [1.6044072E12, 4470.0], [1.60440738E12, 5941.0], [1.60440702E12, 4489.0], [1.60440732E12, 7093.0], [1.6044075E12, 3795.0], [1.60440714E12, 4995.0], [1.60440744E12, 3169.0], [1.60440762E12, 2952.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60440726E12, 209.50799985408784], [1.60440756E12, 201.16599986314773], [1.60440708E12, 231.0], [1.6044072E12, 206.48799884796142], [1.60440738E12, 214.3909996187687], [1.60440702E12, 211.0], [1.60440732E12, 237.28399988651276], [1.6044075E12, 203.0], [1.60440714E12, 213.5119997215271], [1.60440744E12, 206.0], [1.60440762E12, 537.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60440726E12, 210.05880005836488], [1.60440756E12, 201.6826000547409], [1.60440708E12, 231.85980015277863], [1.6044072E12, 210.83680046081543], [1.60440738E12, 216.10680020332336], [1.60440702E12, 211.0], [1.60440732E12, 237.7124000453949], [1.6044075E12, 203.0], [1.60440714E12, 214.56320011138916], [1.60440744E12, 206.0], [1.60440762E12, 537.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60440726E12, 209.8139999270439], [1.60440756E12, 201.45299993157386], [1.60440708E12, 231.2189998090267], [1.6044072E12, 208.9039994239807], [1.60440738E12, 215.2539997458458], [1.60440702E12, 211.0], [1.60440732E12, 237.5219999432564], [1.6044075E12, 203.0], [1.60440714E12, 214.09599986076356], [1.60440744E12, 206.0], [1.60440762E12, 537.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60440726E12, 199.0], [1.60440756E12, 191.0], [1.60440708E12, 207.0], [1.6044072E12, 195.0], [1.60440738E12, 201.0], [1.60440702E12, 211.0], [1.60440732E12, 229.0], [1.6044075E12, 192.0], [1.60440714E12, 201.0], [1.60440744E12, 198.0], [1.60440762E12, 537.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60440726E12, 794.0], [1.60440756E12, 880.0], [1.60440708E12, 1021.0], [1.6044072E12, 715.0], [1.60440738E12, 982.0], [1.60440702E12, 1071.0], [1.60440732E12, 1060.0], [1.6044075E12, 763.0], [1.60440714E12, 720.0], [1.60440744E12, 739.0], [1.60440762E12, 978.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440762E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 410.0, "minX": 1.0, "maxY": 2967.0, "series": [{"data": [[2.0, 1233.5], [3.0, 1400.0], [4.0, 1526.0], [5.0, 1363.0], [6.0, 1271.5], [7.0, 1241.0], [8.0, 1083.5], [9.0, 1052.0], [10.0, 1028.0], [11.0, 879.5], [12.0, 745.5], [13.0, 726.0], [14.0, 685.0], [15.0, 504.0], [16.0, 505.0], [1.0, 2967.0], [17.0, 572.0], [18.0, 466.0], [19.0, 460.5], [20.0, 465.0], [21.0, 467.0], [22.0, 480.5], [23.0, 454.0], [24.0, 437.0], [25.0, 410.0], [26.0, 459.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 409.0, "minX": 1.0, "maxY": 2959.0, "series": [{"data": [[2.0, 1223.0], [3.0, 1395.0], [4.0, 1518.0], [5.0, 1359.5], [6.0, 1267.0], [7.0, 1240.0], [8.0, 1082.5], [9.0, 1050.0], [10.0, 1027.0], [11.0, 877.5], [12.0, 745.5], [13.0, 726.0], [14.0, 684.5], [15.0, 504.0], [16.0, 504.5], [1.0, 2959.0], [17.0, 572.0], [18.0, 466.0], [19.0, 459.5], [20.0, 464.5], [21.0, 467.0], [22.0, 480.5], [23.0, 454.0], [24.0, 437.0], [25.0, 409.0], [26.0, 458.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60440702E12, "maxY": 10.183333333333334, "series": [{"data": [[1.60440726E12, 10.183333333333334], [1.60440756E12, 9.533333333333333], [1.60440708E12, 8.883333333333333], [1.6044072E12, 10.05], [1.60440738E12, 8.866666666666667], [1.60440702E12, 1.2666666666666666], [1.60440732E12, 7.916666666666667], [1.6044075E12, 10.016666666666667], [1.60440714E12, 9.716666666666667], [1.60440744E12, 10.05], [1.60440762E12, 0.016666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440762E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60440702E12, "maxY": 10.183333333333334, "series": [{"data": [[1.60440726E12, 10.183333333333334], [1.60440756E12, 9.55], [1.60440708E12, 8.883333333333333], [1.6044072E12, 10.05], [1.60440738E12, 8.866666666666667], [1.60440702E12, 1.1], [1.60440732E12, 7.916666666666667], [1.6044075E12, 10.016666666666667], [1.60440714E12, 9.716666666666667], [1.60440744E12, 10.05], [1.60440762E12, 0.16666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440762E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60440702E12, "maxY": 10.183333333333334, "series": [{"data": [[1.60440726E12, 10.183333333333334], [1.60440756E12, 9.55], [1.60440708E12, 8.883333333333333], [1.6044072E12, 10.05], [1.60440738E12, 8.866666666666667], [1.60440702E12, 1.1], [1.60440732E12, 7.916666666666667], [1.6044075E12, 10.016666666666667], [1.60440714E12, 9.716666666666667], [1.60440744E12, 10.05], [1.60440762E12, 0.16666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440762E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60440702E12, "maxY": 10.183333333333334, "series": [{"data": [[1.60440726E12, 10.183333333333334], [1.60440756E12, 9.55], [1.60440708E12, 8.883333333333333], [1.6044072E12, 10.05], [1.60440738E12, 8.866666666666667], [1.60440702E12, 1.1], [1.60440732E12, 7.916666666666667], [1.6044075E12, 10.016666666666667], [1.60440714E12, 9.716666666666667], [1.60440744E12, 10.05], [1.60440762E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440762E12, "title": "Total Transactions Per Second"}},
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

