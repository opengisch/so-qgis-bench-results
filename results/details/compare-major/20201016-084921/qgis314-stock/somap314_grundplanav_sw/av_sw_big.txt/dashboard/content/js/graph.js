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
        data: {"result": {"minY": 199.0, "minX": 0.0, "maxY": 6976.0, "series": [{"data": [[0.0, 199.0], [0.1, 204.0], [0.2, 207.0], [0.3, 212.0], [0.4, 214.0], [0.5, 215.0], [0.6, 217.0], [0.7, 219.0], [0.8, 220.0], [0.9, 222.0], [1.0, 224.0], [1.1, 225.0], [1.2, 226.0], [1.3, 227.0], [1.4, 228.0], [1.5, 228.0], [1.6, 230.0], [1.7, 232.0], [1.8, 232.0], [1.9, 233.0], [2.0, 233.0], [2.1, 234.0], [2.2, 235.0], [2.3, 236.0], [2.4, 236.0], [2.5, 237.0], [2.6, 239.0], [2.7, 239.0], [2.8, 240.0], [2.9, 241.0], [3.0, 241.0], [3.1, 242.0], [3.2, 243.0], [3.3, 243.0], [3.4, 244.0], [3.5, 245.0], [3.6, 246.0], [3.7, 247.0], [3.8, 247.0], [3.9, 248.0], [4.0, 249.0], [4.1, 250.0], [4.2, 250.0], [4.3, 251.0], [4.4, 252.0], [4.5, 253.0], [4.6, 254.0], [4.7, 255.0], [4.8, 256.0], [4.9, 257.0], [5.0, 259.0], [5.1, 261.0], [5.2, 261.0], [5.3, 264.0], [5.4, 265.0], [5.5, 266.0], [5.6, 268.0], [5.7, 270.0], [5.8, 271.0], [5.9, 276.0], [6.0, 278.0], [6.1, 280.0], [6.2, 281.0], [6.3, 283.0], [6.4, 285.0], [6.5, 288.0], [6.6, 290.0], [6.7, 291.0], [6.8, 294.0], [6.9, 295.0], [7.0, 297.0], [7.1, 298.0], [7.2, 301.0], [7.3, 302.0], [7.4, 305.0], [7.5, 307.0], [7.6, 309.0], [7.7, 310.0], [7.8, 311.0], [7.9, 313.0], [8.0, 314.0], [8.1, 315.0], [8.2, 317.0], [8.3, 319.0], [8.4, 319.0], [8.5, 320.0], [8.6, 321.0], [8.7, 322.0], [8.8, 323.0], [8.9, 324.0], [9.0, 325.0], [9.1, 327.0], [9.2, 328.0], [9.3, 328.0], [9.4, 330.0], [9.5, 330.0], [9.6, 331.0], [9.7, 332.0], [9.8, 333.0], [9.9, 333.0], [10.0, 335.0], [10.1, 336.0], [10.2, 337.0], [10.3, 338.0], [10.4, 339.0], [10.5, 339.0], [10.6, 340.0], [10.7, 341.0], [10.8, 341.0], [10.9, 342.0], [11.0, 343.0], [11.1, 343.0], [11.2, 344.0], [11.3, 346.0], [11.4, 346.0], [11.5, 347.0], [11.6, 348.0], [11.7, 349.0], [11.8, 350.0], [11.9, 351.0], [12.0, 352.0], [12.1, 354.0], [12.2, 354.0], [12.3, 356.0], [12.4, 357.0], [12.5, 358.0], [12.6, 359.0], [12.7, 361.0], [12.8, 362.0], [12.9, 364.0], [13.0, 364.0], [13.1, 366.0], [13.2, 367.0], [13.3, 368.0], [13.4, 369.0], [13.5, 370.0], [13.6, 371.0], [13.7, 373.0], [13.8, 374.0], [13.9, 375.0], [14.0, 376.0], [14.1, 377.0], [14.2, 378.0], [14.3, 380.0], [14.4, 381.0], [14.5, 385.0], [14.6, 387.0], [14.7, 391.0], [14.8, 391.0], [14.9, 392.0], [15.0, 394.0], [15.1, 396.0], [15.2, 398.0], [15.3, 398.0], [15.4, 400.0], [15.5, 401.0], [15.6, 402.0], [15.7, 403.0], [15.8, 406.0], [15.9, 408.0], [16.0, 412.0], [16.1, 413.0], [16.2, 414.0], [16.3, 416.0], [16.4, 419.0], [16.5, 420.0], [16.6, 422.0], [16.7, 423.0], [16.8, 425.0], [16.9, 427.0], [17.0, 428.0], [17.1, 430.0], [17.2, 431.0], [17.3, 432.0], [17.4, 434.0], [17.5, 436.0], [17.6, 437.0], [17.7, 438.0], [17.8, 440.0], [17.9, 441.0], [18.0, 443.0], [18.1, 444.0], [18.2, 445.0], [18.3, 447.0], [18.4, 448.0], [18.5, 449.0], [18.6, 450.0], [18.7, 450.0], [18.8, 451.0], [18.9, 453.0], [19.0, 454.0], [19.1, 455.0], [19.2, 456.0], [19.3, 458.0], [19.4, 459.0], [19.5, 460.0], [19.6, 461.0], [19.7, 462.0], [19.8, 463.0], [19.9, 464.0], [20.0, 465.0], [20.1, 466.0], [20.2, 467.0], [20.3, 468.0], [20.4, 468.0], [20.5, 470.0], [20.6, 470.0], [20.7, 471.0], [20.8, 472.0], [20.9, 472.0], [21.0, 473.0], [21.1, 474.0], [21.2, 475.0], [21.3, 476.0], [21.4, 477.0], [21.5, 478.0], [21.6, 478.0], [21.7, 479.0], [21.8, 480.0], [21.9, 481.0], [22.0, 482.0], [22.1, 483.0], [22.2, 484.0], [22.3, 485.0], [22.4, 486.0], [22.5, 487.0], [22.6, 487.0], [22.7, 488.0], [22.8, 489.0], [22.9, 490.0], [23.0, 492.0], [23.1, 494.0], [23.2, 496.0], [23.3, 496.0], [23.4, 496.0], [23.5, 498.0], [23.6, 498.0], [23.7, 500.0], [23.8, 501.0], [23.9, 501.0], [24.0, 503.0], [24.1, 504.0], [24.2, 505.0], [24.3, 507.0], [24.4, 508.0], [24.5, 509.0], [24.6, 510.0], [24.7, 511.0], [24.8, 512.0], [24.9, 513.0], [25.0, 515.0], [25.1, 516.0], [25.2, 518.0], [25.3, 519.0], [25.4, 521.0], [25.5, 522.0], [25.6, 522.0], [25.7, 523.0], [25.8, 524.0], [25.9, 525.0], [26.0, 526.0], [26.1, 527.0], [26.2, 528.0], [26.3, 529.0], [26.4, 530.0], [26.5, 531.0], [26.6, 531.0], [26.7, 534.0], [26.8, 535.0], [26.9, 538.0], [27.0, 540.0], [27.1, 541.0], [27.2, 542.0], [27.3, 543.0], [27.4, 545.0], [27.5, 546.0], [27.6, 547.0], [27.7, 548.0], [27.8, 548.0], [27.9, 551.0], [28.0, 552.0], [28.1, 554.0], [28.2, 554.0], [28.3, 556.0], [28.4, 556.0], [28.5, 557.0], [28.6, 558.0], [28.7, 559.0], [28.8, 560.0], [28.9, 562.0], [29.0, 563.0], [29.1, 563.0], [29.2, 564.0], [29.3, 566.0], [29.4, 567.0], [29.5, 568.0], [29.6, 570.0], [29.7, 571.0], [29.8, 572.0], [29.9, 573.0], [30.0, 574.0], [30.1, 575.0], [30.2, 576.0], [30.3, 577.0], [30.4, 579.0], [30.5, 580.0], [30.6, 581.0], [30.7, 582.0], [30.8, 584.0], [30.9, 585.0], [31.0, 587.0], [31.1, 589.0], [31.2, 590.0], [31.3, 591.0], [31.4, 594.0], [31.5, 594.0], [31.6, 596.0], [31.7, 598.0], [31.8, 598.0], [31.9, 600.0], [32.0, 600.0], [32.1, 602.0], [32.2, 604.0], [32.3, 604.0], [32.4, 605.0], [32.5, 607.0], [32.6, 608.0], [32.7, 609.0], [32.8, 612.0], [32.9, 613.0], [33.0, 614.0], [33.1, 615.0], [33.2, 615.0], [33.3, 616.0], [33.4, 617.0], [33.5, 618.0], [33.6, 620.0], [33.7, 622.0], [33.8, 623.0], [33.9, 625.0], [34.0, 626.0], [34.1, 627.0], [34.2, 630.0], [34.3, 633.0], [34.4, 634.0], [34.5, 635.0], [34.6, 636.0], [34.7, 639.0], [34.8, 640.0], [34.9, 640.0], [35.0, 641.0], [35.1, 642.0], [35.2, 643.0], [35.3, 644.0], [35.4, 645.0], [35.5, 646.0], [35.6, 648.0], [35.7, 649.0], [35.8, 650.0], [35.9, 650.0], [36.0, 651.0], [36.1, 652.0], [36.2, 654.0], [36.3, 655.0], [36.4, 656.0], [36.5, 657.0], [36.6, 658.0], [36.7, 659.0], [36.8, 660.0], [36.9, 661.0], [37.0, 662.0], [37.1, 663.0], [37.2, 664.0], [37.3, 664.0], [37.4, 665.0], [37.5, 666.0], [37.6, 668.0], [37.7, 669.0], [37.8, 670.0], [37.9, 671.0], [38.0, 672.0], [38.1, 673.0], [38.2, 674.0], [38.3, 676.0], [38.4, 678.0], [38.5, 679.0], [38.6, 680.0], [38.7, 681.0], [38.8, 683.0], [38.9, 684.0], [39.0, 685.0], [39.1, 687.0], [39.2, 688.0], [39.3, 689.0], [39.4, 691.0], [39.5, 692.0], [39.6, 695.0], [39.7, 697.0], [39.8, 698.0], [39.9, 701.0], [40.0, 703.0], [40.1, 705.0], [40.2, 706.0], [40.3, 707.0], [40.4, 707.0], [40.5, 709.0], [40.6, 710.0], [40.7, 711.0], [40.8, 712.0], [40.9, 715.0], [41.0, 717.0], [41.1, 719.0], [41.2, 720.0], [41.3, 721.0], [41.4, 722.0], [41.5, 724.0], [41.6, 726.0], [41.7, 727.0], [41.8, 728.0], [41.9, 729.0], [42.0, 731.0], [42.1, 733.0], [42.2, 735.0], [42.3, 737.0], [42.4, 739.0], [42.5, 740.0], [42.6, 741.0], [42.7, 744.0], [42.8, 746.0], [42.9, 748.0], [43.0, 751.0], [43.1, 752.0], [43.2, 754.0], [43.3, 755.0], [43.4, 755.0], [43.5, 757.0], [43.6, 759.0], [43.7, 761.0], [43.8, 763.0], [43.9, 764.0], [44.0, 766.0], [44.1, 767.0], [44.2, 768.0], [44.3, 770.0], [44.4, 772.0], [44.5, 775.0], [44.6, 777.0], [44.7, 780.0], [44.8, 782.0], [44.9, 784.0], [45.0, 786.0], [45.1, 790.0], [45.2, 792.0], [45.3, 796.0], [45.4, 798.0], [45.5, 798.0], [45.6, 804.0], [45.7, 806.0], [45.8, 808.0], [45.9, 810.0], [46.0, 811.0], [46.1, 814.0], [46.2, 816.0], [46.3, 817.0], [46.4, 819.0], [46.5, 821.0], [46.6, 822.0], [46.7, 826.0], [46.8, 827.0], [46.9, 828.0], [47.0, 829.0], [47.1, 832.0], [47.2, 833.0], [47.3, 837.0], [47.4, 838.0], [47.5, 840.0], [47.6, 841.0], [47.7, 843.0], [47.8, 844.0], [47.9, 846.0], [48.0, 848.0], [48.1, 852.0], [48.2, 853.0], [48.3, 855.0], [48.4, 857.0], [48.5, 859.0], [48.6, 861.0], [48.7, 864.0], [48.8, 867.0], [48.9, 870.0], [49.0, 874.0], [49.1, 875.0], [49.2, 877.0], [49.3, 881.0], [49.4, 883.0], [49.5, 885.0], [49.6, 887.0], [49.7, 888.0], [49.8, 890.0], [49.9, 891.0], [50.0, 892.0], [50.1, 895.0], [50.2, 900.0], [50.3, 902.0], [50.4, 905.0], [50.5, 906.0], [50.6, 909.0], [50.7, 911.0], [50.8, 914.0], [50.9, 916.0], [51.0, 919.0], [51.1, 921.0], [51.2, 923.0], [51.3, 924.0], [51.4, 926.0], [51.5, 928.0], [51.6, 929.0], [51.7, 932.0], [51.8, 935.0], [51.9, 937.0], [52.0, 939.0], [52.1, 940.0], [52.2, 942.0], [52.3, 946.0], [52.4, 948.0], [52.5, 951.0], [52.6, 952.0], [52.7, 954.0], [52.8, 957.0], [52.9, 957.0], [53.0, 960.0], [53.1, 961.0], [53.2, 965.0], [53.3, 969.0], [53.4, 972.0], [53.5, 973.0], [53.6, 975.0], [53.7, 978.0], [53.8, 982.0], [53.9, 984.0], [54.0, 986.0], [54.1, 988.0], [54.2, 990.0], [54.3, 993.0], [54.4, 994.0], [54.5, 997.0], [54.6, 1000.0], [54.7, 1001.0], [54.8, 1004.0], [54.9, 1007.0], [55.0, 1008.0], [55.1, 1012.0], [55.2, 1015.0], [55.3, 1018.0], [55.4, 1020.0], [55.5, 1022.0], [55.6, 1023.0], [55.7, 1024.0], [55.8, 1028.0], [55.9, 1030.0], [56.0, 1032.0], [56.1, 1035.0], [56.2, 1035.0], [56.3, 1038.0], [56.4, 1040.0], [56.5, 1042.0], [56.6, 1044.0], [56.7, 1046.0], [56.8, 1049.0], [56.9, 1050.0], [57.0, 1051.0], [57.1, 1054.0], [57.2, 1058.0], [57.3, 1060.0], [57.4, 1062.0], [57.5, 1064.0], [57.6, 1066.0], [57.7, 1067.0], [57.8, 1069.0], [57.9, 1071.0], [58.0, 1073.0], [58.1, 1075.0], [58.2, 1076.0], [58.3, 1077.0], [58.4, 1080.0], [58.5, 1082.0], [58.6, 1084.0], [58.7, 1086.0], [58.8, 1088.0], [58.9, 1090.0], [59.0, 1094.0], [59.1, 1095.0], [59.2, 1096.0], [59.3, 1099.0], [59.4, 1101.0], [59.5, 1103.0], [59.6, 1105.0], [59.7, 1107.0], [59.8, 1109.0], [59.9, 1112.0], [60.0, 1114.0], [60.1, 1115.0], [60.2, 1116.0], [60.3, 1119.0], [60.4, 1121.0], [60.5, 1123.0], [60.6, 1125.0], [60.7, 1127.0], [60.8, 1129.0], [60.9, 1131.0], [61.0, 1133.0], [61.1, 1135.0], [61.2, 1137.0], [61.3, 1139.0], [61.4, 1142.0], [61.5, 1145.0], [61.6, 1147.0], [61.7, 1149.0], [61.8, 1151.0], [61.9, 1155.0], [62.0, 1159.0], [62.1, 1162.0], [62.2, 1162.0], [62.3, 1165.0], [62.4, 1167.0], [62.5, 1169.0], [62.6, 1171.0], [62.7, 1172.0], [62.8, 1173.0], [62.9, 1177.0], [63.0, 1179.0], [63.1, 1182.0], [63.2, 1185.0], [63.3, 1188.0], [63.4, 1189.0], [63.5, 1190.0], [63.6, 1192.0], [63.7, 1194.0], [63.8, 1199.0], [63.9, 1202.0], [64.0, 1204.0], [64.1, 1205.0], [64.2, 1206.0], [64.3, 1207.0], [64.4, 1209.0], [64.5, 1211.0], [64.6, 1214.0], [64.7, 1218.0], [64.8, 1222.0], [64.9, 1226.0], [65.0, 1228.0], [65.1, 1230.0], [65.2, 1232.0], [65.3, 1233.0], [65.4, 1235.0], [65.5, 1237.0], [65.6, 1238.0], [65.7, 1240.0], [65.8, 1244.0], [65.9, 1249.0], [66.0, 1251.0], [66.1, 1254.0], [66.2, 1256.0], [66.3, 1259.0], [66.4, 1260.0], [66.5, 1264.0], [66.6, 1265.0], [66.7, 1268.0], [66.8, 1270.0], [66.9, 1277.0], [67.0, 1280.0], [67.1, 1282.0], [67.2, 1283.0], [67.3, 1285.0], [67.4, 1288.0], [67.5, 1290.0], [67.6, 1293.0], [67.7, 1295.0], [67.8, 1297.0], [67.9, 1298.0], [68.0, 1302.0], [68.1, 1304.0], [68.2, 1306.0], [68.3, 1308.0], [68.4, 1310.0], [68.5, 1313.0], [68.6, 1314.0], [68.7, 1316.0], [68.8, 1317.0], [68.9, 1319.0], [69.0, 1321.0], [69.1, 1323.0], [69.2, 1324.0], [69.3, 1324.0], [69.4, 1326.0], [69.5, 1327.0], [69.6, 1328.0], [69.7, 1330.0], [69.8, 1335.0], [69.9, 1339.0], [70.0, 1340.0], [70.1, 1342.0], [70.2, 1343.0], [70.3, 1346.0], [70.4, 1349.0], [70.5, 1352.0], [70.6, 1357.0], [70.7, 1360.0], [70.8, 1363.0], [70.9, 1366.0], [71.0, 1371.0], [71.1, 1377.0], [71.2, 1378.0], [71.3, 1379.0], [71.4, 1381.0], [71.5, 1386.0], [71.6, 1389.0], [71.7, 1392.0], [71.8, 1394.0], [71.9, 1400.0], [72.0, 1404.0], [72.1, 1406.0], [72.2, 1408.0], [72.3, 1415.0], [72.4, 1417.0], [72.5, 1418.0], [72.6, 1422.0], [72.7, 1427.0], [72.8, 1431.0], [72.9, 1434.0], [73.0, 1436.0], [73.1, 1438.0], [73.2, 1442.0], [73.3, 1445.0], [73.4, 1446.0], [73.5, 1448.0], [73.6, 1450.0], [73.7, 1455.0], [73.8, 1458.0], [73.9, 1460.0], [74.0, 1461.0], [74.1, 1462.0], [74.2, 1464.0], [74.3, 1466.0], [74.4, 1469.0], [74.5, 1474.0], [74.6, 1478.0], [74.7, 1481.0], [74.8, 1484.0], [74.9, 1485.0], [75.0, 1486.0], [75.1, 1487.0], [75.2, 1488.0], [75.3, 1489.0], [75.4, 1490.0], [75.5, 1490.0], [75.6, 1492.0], [75.7, 1494.0], [75.8, 1495.0], [75.9, 1497.0], [76.0, 1499.0], [76.1, 1500.0], [76.2, 1503.0], [76.3, 1506.0], [76.4, 1510.0], [76.5, 1513.0], [76.6, 1515.0], [76.7, 1516.0], [76.8, 1518.0], [76.9, 1523.0], [77.0, 1523.0], [77.1, 1526.0], [77.2, 1532.0], [77.3, 1535.0], [77.4, 1538.0], [77.5, 1541.0], [77.6, 1544.0], [77.7, 1546.0], [77.8, 1547.0], [77.9, 1552.0], [78.0, 1555.0], [78.1, 1557.0], [78.2, 1561.0], [78.3, 1563.0], [78.4, 1568.0], [78.5, 1570.0], [78.6, 1572.0], [78.7, 1574.0], [78.8, 1577.0], [78.9, 1579.0], [79.0, 1580.0], [79.1, 1583.0], [79.2, 1585.0], [79.3, 1587.0], [79.4, 1590.0], [79.5, 1593.0], [79.6, 1595.0], [79.7, 1597.0], [79.8, 1600.0], [79.9, 1602.0], [80.0, 1606.0], [80.1, 1611.0], [80.2, 1612.0], [80.3, 1614.0], [80.4, 1618.0], [80.5, 1620.0], [80.6, 1625.0], [80.7, 1628.0], [80.8, 1631.0], [80.9, 1632.0], [81.0, 1634.0], [81.1, 1637.0], [81.2, 1641.0], [81.3, 1642.0], [81.4, 1646.0], [81.5, 1650.0], [81.6, 1654.0], [81.7, 1655.0], [81.8, 1659.0], [81.9, 1661.0], [82.0, 1665.0], [82.1, 1667.0], [82.2, 1669.0], [82.3, 1672.0], [82.4, 1677.0], [82.5, 1679.0], [82.6, 1682.0], [82.7, 1685.0], [82.8, 1688.0], [82.9, 1690.0], [83.0, 1694.0], [83.1, 1697.0], [83.2, 1704.0], [83.3, 1706.0], [83.4, 1711.0], [83.5, 1714.0], [83.6, 1717.0], [83.7, 1719.0], [83.8, 1722.0], [83.9, 1724.0], [84.0, 1727.0], [84.1, 1731.0], [84.2, 1733.0], [84.3, 1737.0], [84.4, 1738.0], [84.5, 1743.0], [84.6, 1744.0], [84.7, 1747.0], [84.8, 1750.0], [84.9, 1758.0], [85.0, 1760.0], [85.1, 1764.0], [85.2, 1768.0], [85.3, 1771.0], [85.4, 1775.0], [85.5, 1779.0], [85.6, 1781.0], [85.7, 1787.0], [85.8, 1790.0], [85.9, 1792.0], [86.0, 1795.0], [86.1, 1799.0], [86.2, 1800.0], [86.3, 1806.0], [86.4, 1813.0], [86.5, 1817.0], [86.6, 1821.0], [86.7, 1826.0], [86.8, 1830.0], [86.9, 1832.0], [87.0, 1835.0], [87.1, 1841.0], [87.2, 1847.0], [87.3, 1854.0], [87.4, 1861.0], [87.5, 1863.0], [87.6, 1868.0], [87.7, 1872.0], [87.8, 1876.0], [87.9, 1878.0], [88.0, 1882.0], [88.1, 1886.0], [88.2, 1892.0], [88.3, 1898.0], [88.4, 1900.0], [88.5, 1903.0], [88.6, 1906.0], [88.7, 1911.0], [88.8, 1913.0], [88.9, 1917.0], [89.0, 1926.0], [89.1, 1933.0], [89.2, 1936.0], [89.3, 1944.0], [89.4, 1948.0], [89.5, 1952.0], [89.6, 1957.0], [89.7, 1963.0], [89.8, 1968.0], [89.9, 1971.0], [90.0, 1979.0], [90.1, 1986.0], [90.2, 1991.0], [90.3, 1996.0], [90.4, 2002.0], [90.5, 2009.0], [90.6, 2021.0], [90.7, 2024.0], [90.8, 2032.0], [90.9, 2036.0], [91.0, 2046.0], [91.1, 2052.0], [91.2, 2062.0], [91.3, 2070.0], [91.4, 2082.0], [91.5, 2088.0], [91.6, 2096.0], [91.7, 2103.0], [91.8, 2109.0], [91.9, 2120.0], [92.0, 2128.0], [92.1, 2133.0], [92.2, 2142.0], [92.3, 2145.0], [92.4, 2156.0], [92.5, 2161.0], [92.6, 2180.0], [92.7, 2187.0], [92.8, 2195.0], [92.9, 2208.0], [93.0, 2219.0], [93.1, 2243.0], [93.2, 2257.0], [93.3, 2270.0], [93.4, 2277.0], [93.5, 2288.0], [93.6, 2306.0], [93.7, 2321.0], [93.8, 2326.0], [93.9, 2331.0], [94.0, 2337.0], [94.1, 2346.0], [94.2, 2353.0], [94.3, 2363.0], [94.4, 2369.0], [94.5, 2393.0], [94.6, 2401.0], [94.7, 2410.0], [94.8, 2421.0], [94.9, 2428.0], [95.0, 2448.0], [95.1, 2459.0], [95.2, 2476.0], [95.3, 2487.0], [95.4, 2491.0], [95.5, 2506.0], [95.6, 2521.0], [95.7, 2544.0], [95.8, 2550.0], [95.9, 2562.0], [96.0, 2579.0], [96.1, 2597.0], [96.2, 2610.0], [96.3, 2635.0], [96.4, 2644.0], [96.5, 2655.0], [96.6, 2665.0], [96.7, 2677.0], [96.8, 2698.0], [96.9, 2715.0], [97.0, 2733.0], [97.1, 2754.0], [97.2, 2766.0], [97.3, 2781.0], [97.4, 2813.0], [97.5, 2839.0], [97.6, 2847.0], [97.7, 2865.0], [97.8, 2881.0], [97.9, 2922.0], [98.0, 2944.0], [98.1, 2979.0], [98.2, 3085.0], [98.3, 3115.0], [98.4, 3151.0], [98.5, 3191.0], [98.6, 3271.0], [98.7, 3308.0], [98.8, 3365.0], [98.9, 3398.0], [99.0, 3505.0], [99.1, 3586.0], [99.2, 3655.0], [99.3, 3871.0], [99.4, 4006.0], [99.5, 4123.0], [99.6, 4273.0], [99.7, 4703.0], [99.8, 5060.0], [99.9, 5803.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 430.0, "series": [{"data": [[600.0, 413.0], [700.0, 295.0], [800.0, 243.0], [900.0, 226.0], [1000.0, 249.0], [1100.0, 233.0], [1200.0, 213.0], [1300.0, 205.0], [1400.0, 217.0], [1500.0, 193.0], [1600.0, 174.0], [1700.0, 154.0], [1800.0, 117.0], [1900.0, 102.0], [2000.0, 69.0], [2100.0, 61.0], [2300.0, 50.0], [2200.0, 39.0], [2400.0, 46.0], [2500.0, 37.0], [2600.0, 35.0], [2800.0, 25.0], [2700.0, 28.0], [2900.0, 14.0], [3000.0, 8.0], [3100.0, 13.0], [3200.0, 7.0], [3300.0, 13.0], [3400.0, 5.0], [3500.0, 6.0], [3600.0, 5.0], [3700.0, 4.0], [3800.0, 1.0], [3900.0, 4.0], [4000.0, 4.0], [4100.0, 5.0], [4300.0, 2.0], [4200.0, 3.0], [4500.0, 1.0], [4400.0, 1.0], [4700.0, 1.0], [4900.0, 3.0], [5000.0, 2.0], [5100.0, 1.0], [5200.0, 1.0], [5500.0, 1.0], [5400.0, 1.0], [5800.0, 1.0], [6000.0, 1.0], [6300.0, 1.0], [6700.0, 1.0], [6900.0, 2.0], [100.0, 1.0], [200.0, 370.0], [300.0, 428.0], [400.0, 430.0], [500.0, 425.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1235.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2717.0, "series": [{"data": [[0.0, 1235.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2717.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1238.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.796380090497737, "minX": 1.60284012E12, "maxY": 10.0, "series": [{"data": [[1.60284012E12, 10.0], [1.6028406E12, 10.0], [1.6028403E12, 10.0], [1.60284024E12, 10.0], [1.60284042E12, 10.0], [1.60284036E12, 10.0], [1.60284054E12, 10.0], [1.60284048E12, 10.0], [1.60284018E12, 10.0], [1.60284066E12, 9.796380090497737]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284066E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 341.0, "minX": 1.0, "maxY": 3437.0, "series": [{"data": [[8.0, 341.0], [4.0, 2494.0], [2.0, 3437.0], [1.0, 3097.0], [9.0, 2211.0], [10.0, 1073.855626326966], [5.0, 915.0], [6.0, 2421.0], [3.0, 2343.0], [7.0, 886.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1075.4895953757248]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1659.7166666666667, "minX": 1.60284012E12, "maxY": 3140392.5833333335, "series": [{"data": [[1.60284012E12, 2106065.4166666665], [1.6028406E12, 2569945.05], [1.6028403E12, 2867315.2666666666], [1.60284024E12, 3140392.5833333335], [1.60284042E12, 2545110.7333333334], [1.60284036E12, 2550978.0], [1.60284054E12, 3061047.25], [1.60284048E12, 2044934.2333333334], [1.60284018E12, 2051684.4166666667], [1.60284066E12, 1034487.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60284012E12, 2803.25], [1.6028406E12, 4509.15], [1.6028403E12, 4313.15], [1.60284024E12, 4314.283333333334], [1.60284042E12, 3719.1666666666665], [1.60284036E12, 3979.75], [1.60284054E12, 4627.0], [1.60284048E12, 4158.3], [1.60284018E12, 4493.566666666667], [1.60284066E12, 1659.7166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284066E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 983.3376623376624, "minX": 1.60284012E12, "maxY": 1325.610859728507, "series": [{"data": [[1.60284012E12, 1259.2333333333345], [1.6028406E12, 1007.1296296296287], [1.6028403E12, 1062.5158450704232], [1.60284024E12, 1032.9562937062933], [1.60284042E12, 1153.759615384615], [1.60284036E12, 1142.2518939393947], [1.60284054E12, 993.6836065573767], [1.60284048E12, 1033.604203152364], [1.60284018E12, 983.3376623376624], [1.60284066E12, 1325.610859728507]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284066E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 981.7987012987015, "minX": 1.60284012E12, "maxY": 1324.0180995475118, "series": [{"data": [[1.60284012E12, 1256.9179487179492], [1.6028406E12, 1005.457912457911], [1.6028403E12, 1060.295774647887], [1.60284024E12, 1030.5069930069935], [1.60284042E12, 1152.1750000000002], [1.60284036E12, 1140.270833333333], [1.60284054E12, 991.9377049180339], [1.60284048E12, 1032.3502626970228], [1.60284018E12, 981.7987012987015], [1.60284066E12, 1324.0180995475118]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284066E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.014754098360655742, "minX": 1.60284012E12, "maxY": 0.22051282051282048, "series": [{"data": [[1.60284012E12, 0.22051282051282048], [1.6028406E12, 0.0185185185185185], [1.6028403E12, 0.0158450704225352], [1.60284024E12, 0.02972027972027974], [1.60284042E12, 0.021153846153846155], [1.60284036E12, 0.02651515151515156], [1.60284054E12, 0.014754098360655742], [1.60284048E12, 0.01751313485113837], [1.60284018E12, 0.02922077922077922], [1.60284066E12, 0.054298642533936646]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284066E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 199.0, "minX": 1.60284012E12, "maxY": 6976.0, "series": [{"data": [[1.60284012E12, 5539.0], [1.6028406E12, 4075.0], [1.6028403E12, 3794.0], [1.60284024E12, 5803.0], [1.60284042E12, 6976.0], [1.60284036E12, 5241.0], [1.60284054E12, 3796.0], [1.60284048E12, 4244.0], [1.60284018E12, 5060.0], [1.60284066E12, 4485.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60284012E12, 233.7089989745617], [1.6028406E12, 216.35499985814096], [1.6028403E12, 225.36299959301948], [1.60284024E12, 226.78499931693077], [1.60284042E12, 238.37799975156784], [1.60284036E12, 212.0], [1.60284054E12, 219.9939991259575], [1.60284048E12, 208.44399959087372], [1.60284018E12, 220.55299985289574], [1.60284066E12, 234.99599989414216]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60284012E12, 237.57990041017533], [1.6028406E12, 216.89050005674363], [1.6028403E12, 226.8993001627922], [1.60284024E12, 229.3635002732277], [1.60284042E12, 239.0], [1.60284036E12, 212.47420010089874], [1.60284054E12, 223.097800116539], [1.60284048E12, 209.9884001636505], [1.60284018E12, 221.1083000588417], [1.60284066E12, 247.06580129146576]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60284012E12, 235.85949948728086], [1.6028406E12, 216.65249992907047], [1.6028403E12, 226.21649979650974], [1.60284024E12, 228.21749965846539], [1.60284042E12, 238.89899987578391], [1.60284036E12, 212.05099987387658], [1.60284054E12, 221.82699956297876], [1.60284048E12, 209.30199979543687], [1.60284018E12, 220.86149992644786], [1.60284066E12, 241.64899838566777]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60284012E12, 214.0], [1.6028406E12, 201.0], [1.6028403E12, 210.0], [1.60284024E12, 214.0], [1.60284042E12, 217.0], [1.60284036E12, 201.0], [1.60284054E12, 214.0], [1.60284048E12, 205.0], [1.60284018E12, 199.0], [1.60284066E12, 233.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60284012E12, 1098.0], [1.6028406E12, 774.0], [1.6028403E12, 982.5], [1.60284024E12, 744.5], [1.60284042E12, 957.0], [1.60284036E12, 964.0], [1.60284054E12, 688.5], [1.60284048E12, 837.0], [1.60284018E12, 842.0], [1.60284066E12, 1207.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284066E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 442.0, "minX": 1.0, "maxY": 2660.0, "series": [{"data": [[8.0, 1139.5], [2.0, 2660.0], [9.0, 1045.0], [10.0, 990.5], [11.0, 854.5], [3.0, 1354.0], [12.0, 742.5], [13.0, 728.0], [14.0, 547.0], [15.0, 614.0], [1.0, 2414.0], [4.0, 1303.0], [16.0, 527.0], [17.0, 514.0], [18.0, 497.0], [19.0, 487.5], [5.0, 1477.0], [20.0, 485.0], [22.0, 471.5], [23.0, 442.0], [6.0, 1293.5], [24.0, 462.5], [27.0, 444.0], [7.0, 1225.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 442.0, "minX": 1.0, "maxY": 2653.0, "series": [{"data": [[8.0, 1136.0], [2.0, 2653.0], [9.0, 1043.5], [10.0, 990.0], [11.0, 852.0], [3.0, 1351.0], [12.0, 741.5], [13.0, 727.0], [14.0, 546.5], [15.0, 613.0], [1.0, 2409.0], [4.0, 1296.5], [16.0, 527.0], [17.0, 513.5], [18.0, 496.5], [19.0, 487.5], [5.0, 1473.0], [20.0, 484.5], [22.0, 471.0], [23.0, 442.0], [6.0, 1290.0], [24.0, 462.0], [27.0, 444.0], [7.0, 1217.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.5166666666666666, "minX": 1.60284012E12, "maxY": 10.266666666666667, "series": [{"data": [[1.60284012E12, 6.666666666666667], [1.6028406E12, 9.9], [1.6028403E12, 9.466666666666667], [1.60284024E12, 9.533333333333333], [1.60284042E12, 8.666666666666666], [1.60284036E12, 8.8], [1.60284054E12, 10.166666666666666], [1.60284048E12, 9.516666666666667], [1.60284018E12, 10.266666666666667], [1.60284066E12, 3.5166666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284066E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.683333333333333, "minX": 1.60284012E12, "maxY": 10.266666666666667, "series": [{"data": [[1.60284012E12, 6.5], [1.6028406E12, 9.9], [1.6028403E12, 9.466666666666667], [1.60284024E12, 9.533333333333333], [1.60284042E12, 8.666666666666666], [1.60284036E12, 8.8], [1.60284054E12, 10.166666666666666], [1.60284048E12, 9.516666666666667], [1.60284018E12, 10.266666666666667], [1.60284066E12, 3.683333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284066E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.683333333333333, "minX": 1.60284012E12, "maxY": 10.266666666666667, "series": [{"data": [[1.60284012E12, 6.5], [1.6028406E12, 9.9], [1.6028403E12, 9.466666666666667], [1.60284024E12, 9.533333333333333], [1.60284042E12, 8.666666666666666], [1.60284036E12, 8.8], [1.60284054E12, 10.166666666666666], [1.60284048E12, 9.516666666666667], [1.60284018E12, 10.266666666666667], [1.60284066E12, 3.683333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284066E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.683333333333333, "minX": 1.60284012E12, "maxY": 10.266666666666667, "series": [{"data": [[1.60284012E12, 6.5], [1.6028406E12, 9.9], [1.6028403E12, 9.466666666666667], [1.60284024E12, 9.533333333333333], [1.60284042E12, 8.666666666666666], [1.60284036E12, 8.8], [1.60284054E12, 10.166666666666666], [1.60284048E12, 9.516666666666667], [1.60284018E12, 10.266666666666667], [1.60284066E12, 3.683333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284066E12, "title": "Total Transactions Per Second"}},
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

