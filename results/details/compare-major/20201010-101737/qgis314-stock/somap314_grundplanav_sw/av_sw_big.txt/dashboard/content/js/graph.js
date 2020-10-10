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
        data: {"result": {"minY": 187.0, "minX": 0.0, "maxY": 6705.0, "series": [{"data": [[0.0, 187.0], [0.1, 189.0], [0.2, 193.0], [0.3, 195.0], [0.4, 198.0], [0.5, 198.0], [0.6, 200.0], [0.7, 201.0], [0.8, 202.0], [0.9, 203.0], [1.0, 204.0], [1.1, 205.0], [1.2, 206.0], [1.3, 207.0], [1.4, 208.0], [1.5, 209.0], [1.6, 210.0], [1.7, 211.0], [1.8, 212.0], [1.9, 213.0], [2.0, 213.0], [2.1, 214.0], [2.2, 215.0], [2.3, 216.0], [2.4, 217.0], [2.5, 217.0], [2.6, 218.0], [2.7, 219.0], [2.8, 220.0], [2.9, 221.0], [3.0, 223.0], [3.1, 224.0], [3.2, 226.0], [3.3, 226.0], [3.4, 227.0], [3.5, 228.0], [3.6, 228.0], [3.7, 229.0], [3.8, 230.0], [3.9, 231.0], [4.0, 232.0], [4.1, 233.0], [4.2, 234.0], [4.3, 234.0], [4.4, 235.0], [4.5, 236.0], [4.6, 238.0], [4.7, 240.0], [4.8, 241.0], [4.9, 243.0], [5.0, 244.0], [5.1, 244.0], [5.2, 245.0], [5.3, 246.0], [5.4, 247.0], [5.5, 248.0], [5.6, 249.0], [5.7, 250.0], [5.8, 251.0], [5.9, 252.0], [6.0, 253.0], [6.1, 256.0], [6.2, 257.0], [6.3, 259.0], [6.4, 261.0], [6.5, 263.0], [6.6, 266.0], [6.7, 268.0], [6.8, 272.0], [6.9, 275.0], [7.0, 277.0], [7.1, 278.0], [7.2, 279.0], [7.3, 281.0], [7.4, 282.0], [7.5, 283.0], [7.6, 284.0], [7.7, 285.0], [7.8, 287.0], [7.9, 289.0], [8.0, 289.0], [8.1, 290.0], [8.2, 290.0], [8.3, 294.0], [8.4, 296.0], [8.5, 296.0], [8.6, 299.0], [8.7, 300.0], [8.8, 301.0], [8.9, 302.0], [9.0, 305.0], [9.1, 306.0], [9.2, 308.0], [9.3, 309.0], [9.4, 311.0], [9.5, 314.0], [9.6, 315.0], [9.7, 316.0], [9.8, 317.0], [9.9, 318.0], [10.0, 319.0], [10.1, 320.0], [10.2, 321.0], [10.3, 321.0], [10.4, 322.0], [10.5, 322.0], [10.6, 323.0], [10.7, 324.0], [10.8, 325.0], [10.9, 326.0], [11.0, 327.0], [11.1, 328.0], [11.2, 328.0], [11.3, 330.0], [11.4, 331.0], [11.5, 331.0], [11.6, 332.0], [11.7, 332.0], [11.8, 333.0], [11.9, 334.0], [12.0, 335.0], [12.1, 336.0], [12.2, 336.0], [12.3, 336.0], [12.4, 337.0], [12.5, 337.0], [12.6, 338.0], [12.7, 339.0], [12.8, 340.0], [12.9, 340.0], [13.0, 341.0], [13.1, 342.0], [13.2, 343.0], [13.3, 344.0], [13.4, 346.0], [13.5, 348.0], [13.6, 349.0], [13.7, 349.0], [13.8, 350.0], [13.9, 351.0], [14.0, 352.0], [14.1, 352.0], [14.2, 353.0], [14.3, 355.0], [14.4, 357.0], [14.5, 359.0], [14.6, 361.0], [14.7, 363.0], [14.8, 365.0], [14.9, 366.0], [15.0, 368.0], [15.1, 371.0], [15.2, 373.0], [15.3, 374.0], [15.4, 375.0], [15.5, 378.0], [15.6, 380.0], [15.7, 382.0], [15.8, 387.0], [15.9, 389.0], [16.0, 392.0], [16.1, 396.0], [16.2, 398.0], [16.3, 401.0], [16.4, 403.0], [16.5, 405.0], [16.6, 406.0], [16.7, 407.0], [16.8, 408.0], [16.9, 409.0], [17.0, 411.0], [17.1, 413.0], [17.2, 415.0], [17.3, 416.0], [17.4, 416.0], [17.5, 417.0], [17.6, 419.0], [17.7, 421.0], [17.8, 423.0], [17.9, 425.0], [18.0, 426.0], [18.1, 428.0], [18.2, 429.0], [18.3, 432.0], [18.4, 432.0], [18.5, 433.0], [18.6, 435.0], [18.7, 436.0], [18.8, 437.0], [18.9, 439.0], [19.0, 439.0], [19.1, 440.0], [19.2, 441.0], [19.3, 442.0], [19.4, 443.0], [19.5, 444.0], [19.6, 445.0], [19.7, 446.0], [19.8, 447.0], [19.9, 448.0], [20.0, 449.0], [20.1, 451.0], [20.2, 453.0], [20.3, 454.0], [20.4, 455.0], [20.5, 455.0], [20.6, 456.0], [20.7, 456.0], [20.8, 457.0], [20.9, 457.0], [21.0, 458.0], [21.1, 459.0], [21.2, 459.0], [21.3, 460.0], [21.4, 461.0], [21.5, 462.0], [21.6, 462.0], [21.7, 463.0], [21.8, 464.0], [21.9, 465.0], [22.0, 465.0], [22.1, 466.0], [22.2, 467.0], [22.3, 468.0], [22.4, 469.0], [22.5, 469.0], [22.6, 470.0], [22.7, 471.0], [22.8, 472.0], [22.9, 472.0], [23.0, 473.0], [23.1, 474.0], [23.2, 475.0], [23.3, 476.0], [23.4, 476.0], [23.5, 477.0], [23.6, 478.0], [23.7, 479.0], [23.8, 479.0], [23.9, 481.0], [24.0, 482.0], [24.1, 483.0], [24.2, 483.0], [24.3, 484.0], [24.4, 485.0], [24.5, 486.0], [24.6, 487.0], [24.7, 487.0], [24.8, 488.0], [24.9, 489.0], [25.0, 490.0], [25.1, 491.0], [25.2, 492.0], [25.3, 493.0], [25.4, 494.0], [25.5, 495.0], [25.6, 496.0], [25.7, 497.0], [25.8, 498.0], [25.9, 499.0], [26.0, 500.0], [26.1, 502.0], [26.2, 502.0], [26.3, 504.0], [26.4, 505.0], [26.5, 506.0], [26.6, 506.0], [26.7, 507.0], [26.8, 509.0], [26.9, 511.0], [27.0, 513.0], [27.1, 514.0], [27.2, 516.0], [27.3, 517.0], [27.4, 518.0], [27.5, 520.0], [27.6, 521.0], [27.7, 524.0], [27.8, 525.0], [27.9, 527.0], [28.0, 529.0], [28.1, 530.0], [28.2, 532.0], [28.3, 533.0], [28.4, 535.0], [28.5, 536.0], [28.6, 537.0], [28.7, 538.0], [28.8, 539.0], [28.9, 541.0], [29.0, 542.0], [29.1, 543.0], [29.2, 544.0], [29.3, 545.0], [29.4, 547.0], [29.5, 549.0], [29.6, 550.0], [29.7, 551.0], [29.8, 552.0], [29.9, 554.0], [30.0, 555.0], [30.1, 556.0], [30.2, 556.0], [30.3, 557.0], [30.4, 559.0], [30.5, 560.0], [30.6, 562.0], [30.7, 563.0], [30.8, 564.0], [30.9, 566.0], [31.0, 567.0], [31.1, 568.0], [31.2, 570.0], [31.3, 571.0], [31.4, 572.0], [31.5, 573.0], [31.6, 574.0], [31.7, 575.0], [31.8, 576.0], [31.9, 576.0], [32.0, 578.0], [32.1, 579.0], [32.2, 581.0], [32.3, 583.0], [32.4, 584.0], [32.5, 585.0], [32.6, 586.0], [32.7, 588.0], [32.8, 589.0], [32.9, 591.0], [33.0, 593.0], [33.1, 594.0], [33.2, 596.0], [33.3, 596.0], [33.4, 598.0], [33.5, 599.0], [33.6, 600.0], [33.7, 601.0], [33.8, 602.0], [33.9, 603.0], [34.0, 603.0], [34.1, 605.0], [34.2, 607.0], [34.3, 608.0], [34.4, 609.0], [34.5, 610.0], [34.6, 611.0], [34.7, 612.0], [34.8, 614.0], [34.9, 615.0], [35.0, 617.0], [35.1, 617.0], [35.2, 619.0], [35.3, 620.0], [35.4, 621.0], [35.5, 622.0], [35.6, 624.0], [35.7, 625.0], [35.8, 626.0], [35.9, 627.0], [36.0, 628.0], [36.1, 629.0], [36.2, 630.0], [36.3, 632.0], [36.4, 633.0], [36.5, 635.0], [36.6, 635.0], [36.7, 636.0], [36.8, 636.0], [36.9, 637.0], [37.0, 638.0], [37.1, 639.0], [37.2, 641.0], [37.3, 642.0], [37.4, 644.0], [37.5, 645.0], [37.6, 647.0], [37.7, 649.0], [37.8, 650.0], [37.9, 650.0], [38.0, 652.0], [38.1, 652.0], [38.2, 654.0], [38.3, 655.0], [38.4, 656.0], [38.5, 657.0], [38.6, 658.0], [38.7, 659.0], [38.8, 661.0], [38.9, 661.0], [39.0, 663.0], [39.1, 665.0], [39.2, 666.0], [39.3, 668.0], [39.4, 669.0], [39.5, 670.0], [39.6, 671.0], [39.7, 671.0], [39.8, 672.0], [39.9, 674.0], [40.0, 674.0], [40.1, 675.0], [40.2, 676.0], [40.3, 678.0], [40.4, 679.0], [40.5, 680.0], [40.6, 681.0], [40.7, 683.0], [40.8, 683.0], [40.9, 686.0], [41.0, 688.0], [41.1, 689.0], [41.2, 691.0], [41.3, 692.0], [41.4, 693.0], [41.5, 695.0], [41.6, 696.0], [41.7, 697.0], [41.8, 699.0], [41.9, 701.0], [42.0, 702.0], [42.1, 703.0], [42.2, 704.0], [42.3, 705.0], [42.4, 706.0], [42.5, 708.0], [42.6, 709.0], [42.7, 712.0], [42.8, 713.0], [42.9, 714.0], [43.0, 716.0], [43.1, 718.0], [43.2, 720.0], [43.3, 722.0], [43.4, 723.0], [43.5, 724.0], [43.6, 726.0], [43.7, 727.0], [43.8, 730.0], [43.9, 731.0], [44.0, 734.0], [44.1, 736.0], [44.2, 737.0], [44.3, 739.0], [44.4, 740.0], [44.5, 742.0], [44.6, 745.0], [44.7, 746.0], [44.8, 748.0], [44.9, 752.0], [45.0, 755.0], [45.1, 757.0], [45.2, 758.0], [45.3, 760.0], [45.4, 761.0], [45.5, 762.0], [45.6, 763.0], [45.7, 766.0], [45.8, 768.0], [45.9, 769.0], [46.0, 772.0], [46.1, 774.0], [46.2, 775.0], [46.3, 777.0], [46.4, 779.0], [46.5, 781.0], [46.6, 782.0], [46.7, 784.0], [46.8, 787.0], [46.9, 788.0], [47.0, 789.0], [47.1, 792.0], [47.2, 793.0], [47.3, 795.0], [47.4, 796.0], [47.5, 798.0], [47.6, 800.0], [47.7, 803.0], [47.8, 805.0], [47.9, 806.0], [48.0, 809.0], [48.1, 811.0], [48.2, 812.0], [48.3, 813.0], [48.4, 815.0], [48.5, 818.0], [48.6, 818.0], [48.7, 819.0], [48.8, 820.0], [48.9, 823.0], [49.0, 825.0], [49.1, 828.0], [49.2, 830.0], [49.3, 833.0], [49.4, 835.0], [49.5, 836.0], [49.6, 838.0], [49.7, 840.0], [49.8, 844.0], [49.9, 845.0], [50.0, 849.0], [50.1, 851.0], [50.2, 854.0], [50.3, 857.0], [50.4, 860.0], [50.5, 861.0], [50.6, 861.0], [50.7, 864.0], [50.8, 866.0], [50.9, 868.0], [51.0, 871.0], [51.1, 872.0], [51.2, 874.0], [51.3, 876.0], [51.4, 878.0], [51.5, 879.0], [51.6, 881.0], [51.7, 883.0], [51.8, 884.0], [51.9, 887.0], [52.0, 890.0], [52.1, 892.0], [52.2, 893.0], [52.3, 898.0], [52.4, 901.0], [52.5, 903.0], [52.6, 905.0], [52.7, 907.0], [52.8, 908.0], [52.9, 912.0], [53.0, 913.0], [53.1, 917.0], [53.2, 920.0], [53.3, 921.0], [53.4, 923.0], [53.5, 927.0], [53.6, 930.0], [53.7, 934.0], [53.8, 936.0], [53.9, 938.0], [54.0, 940.0], [54.1, 942.0], [54.2, 944.0], [54.3, 947.0], [54.4, 949.0], [54.5, 952.0], [54.6, 954.0], [54.7, 956.0], [54.8, 959.0], [54.9, 961.0], [55.0, 965.0], [55.1, 967.0], [55.2, 970.0], [55.3, 971.0], [55.4, 973.0], [55.5, 974.0], [55.6, 977.0], [55.7, 979.0], [55.8, 982.0], [55.9, 984.0], [56.0, 986.0], [56.1, 989.0], [56.2, 990.0], [56.3, 993.0], [56.4, 995.0], [56.5, 998.0], [56.6, 1000.0], [56.7, 1004.0], [56.8, 1006.0], [56.9, 1009.0], [57.0, 1010.0], [57.1, 1013.0], [57.2, 1015.0], [57.3, 1018.0], [57.4, 1022.0], [57.5, 1024.0], [57.6, 1026.0], [57.7, 1030.0], [57.8, 1033.0], [57.9, 1035.0], [58.0, 1035.0], [58.1, 1040.0], [58.2, 1041.0], [58.3, 1043.0], [58.4, 1045.0], [58.5, 1048.0], [58.6, 1049.0], [58.7, 1051.0], [58.8, 1054.0], [58.9, 1056.0], [59.0, 1058.0], [59.1, 1059.0], [59.2, 1060.0], [59.3, 1062.0], [59.4, 1063.0], [59.5, 1067.0], [59.6, 1068.0], [59.7, 1071.0], [59.8, 1072.0], [59.9, 1074.0], [60.0, 1075.0], [60.1, 1077.0], [60.2, 1080.0], [60.3, 1082.0], [60.4, 1084.0], [60.5, 1087.0], [60.6, 1088.0], [60.7, 1090.0], [60.8, 1095.0], [60.9, 1098.0], [61.0, 1102.0], [61.1, 1104.0], [61.2, 1108.0], [61.3, 1110.0], [61.4, 1112.0], [61.5, 1115.0], [61.6, 1116.0], [61.7, 1117.0], [61.8, 1120.0], [61.9, 1121.0], [62.0, 1123.0], [62.1, 1127.0], [62.2, 1129.0], [62.3, 1130.0], [62.4, 1132.0], [62.5, 1133.0], [62.6, 1134.0], [62.7, 1136.0], [62.8, 1137.0], [62.9, 1139.0], [63.0, 1141.0], [63.1, 1145.0], [63.2, 1147.0], [63.3, 1149.0], [63.4, 1150.0], [63.5, 1152.0], [63.6, 1154.0], [63.7, 1156.0], [63.8, 1157.0], [63.9, 1161.0], [64.0, 1164.0], [64.1, 1167.0], [64.2, 1169.0], [64.3, 1171.0], [64.4, 1175.0], [64.5, 1176.0], [64.6, 1177.0], [64.7, 1179.0], [64.8, 1181.0], [64.9, 1183.0], [65.0, 1184.0], [65.1, 1188.0], [65.2, 1189.0], [65.3, 1191.0], [65.4, 1194.0], [65.5, 1198.0], [65.6, 1201.0], [65.7, 1203.0], [65.8, 1205.0], [65.9, 1208.0], [66.0, 1211.0], [66.1, 1212.0], [66.2, 1213.0], [66.3, 1216.0], [66.4, 1219.0], [66.5, 1222.0], [66.6, 1224.0], [66.7, 1226.0], [66.8, 1228.0], [66.9, 1229.0], [67.0, 1230.0], [67.1, 1234.0], [67.2, 1236.0], [67.3, 1237.0], [67.4, 1238.0], [67.5, 1240.0], [67.6, 1241.0], [67.7, 1244.0], [67.8, 1245.0], [67.9, 1247.0], [68.0, 1249.0], [68.1, 1251.0], [68.2, 1253.0], [68.3, 1254.0], [68.4, 1258.0], [68.5, 1259.0], [68.6, 1262.0], [68.7, 1265.0], [68.8, 1267.0], [68.9, 1269.0], [69.0, 1270.0], [69.1, 1272.0], [69.2, 1273.0], [69.3, 1275.0], [69.4, 1276.0], [69.5, 1279.0], [69.6, 1281.0], [69.7, 1287.0], [69.8, 1288.0], [69.9, 1292.0], [70.0, 1293.0], [70.1, 1296.0], [70.2, 1298.0], [70.3, 1301.0], [70.4, 1303.0], [70.5, 1305.0], [70.6, 1307.0], [70.7, 1309.0], [70.8, 1310.0], [70.9, 1312.0], [71.0, 1313.0], [71.1, 1315.0], [71.2, 1316.0], [71.3, 1320.0], [71.4, 1322.0], [71.5, 1324.0], [71.6, 1327.0], [71.7, 1330.0], [71.8, 1332.0], [71.9, 1336.0], [72.0, 1337.0], [72.1, 1339.0], [72.2, 1342.0], [72.3, 1345.0], [72.4, 1349.0], [72.5, 1352.0], [72.6, 1354.0], [72.7, 1358.0], [72.8, 1361.0], [72.9, 1362.0], [73.0, 1363.0], [73.1, 1365.0], [73.2, 1367.0], [73.3, 1372.0], [73.4, 1374.0], [73.5, 1377.0], [73.6, 1380.0], [73.7, 1382.0], [73.8, 1383.0], [73.9, 1386.0], [74.0, 1388.0], [74.1, 1389.0], [74.2, 1391.0], [74.3, 1392.0], [74.4, 1395.0], [74.5, 1399.0], [74.6, 1402.0], [74.7, 1405.0], [74.8, 1407.0], [74.9, 1410.0], [75.0, 1413.0], [75.1, 1415.0], [75.2, 1418.0], [75.3, 1420.0], [75.4, 1423.0], [75.5, 1426.0], [75.6, 1428.0], [75.7, 1431.0], [75.8, 1435.0], [75.9, 1436.0], [76.0, 1438.0], [76.1, 1441.0], [76.2, 1442.0], [76.3, 1445.0], [76.4, 1448.0], [76.5, 1450.0], [76.6, 1451.0], [76.7, 1455.0], [76.8, 1458.0], [76.9, 1459.0], [77.0, 1462.0], [77.1, 1464.0], [77.2, 1465.0], [77.3, 1466.0], [77.4, 1469.0], [77.5, 1472.0], [77.6, 1473.0], [77.7, 1475.0], [77.8, 1478.0], [77.9, 1480.0], [78.0, 1482.0], [78.1, 1484.0], [78.2, 1488.0], [78.3, 1490.0], [78.4, 1492.0], [78.5, 1493.0], [78.6, 1496.0], [78.7, 1498.0], [78.8, 1499.0], [78.9, 1500.0], [79.0, 1505.0], [79.1, 1510.0], [79.2, 1511.0], [79.3, 1514.0], [79.4, 1515.0], [79.5, 1517.0], [79.6, 1521.0], [79.7, 1524.0], [79.8, 1527.0], [79.9, 1532.0], [80.0, 1534.0], [80.1, 1537.0], [80.2, 1539.0], [80.3, 1541.0], [80.4, 1542.0], [80.5, 1545.0], [80.6, 1551.0], [80.7, 1554.0], [80.8, 1555.0], [80.9, 1556.0], [81.0, 1559.0], [81.1, 1562.0], [81.2, 1565.0], [81.3, 1568.0], [81.4, 1570.0], [81.5, 1573.0], [81.6, 1576.0], [81.7, 1579.0], [81.8, 1581.0], [81.9, 1585.0], [82.0, 1589.0], [82.1, 1590.0], [82.2, 1594.0], [82.3, 1599.0], [82.4, 1602.0], [82.5, 1604.0], [82.6, 1609.0], [82.7, 1609.0], [82.8, 1616.0], [82.9, 1620.0], [83.0, 1623.0], [83.1, 1625.0], [83.2, 1627.0], [83.3, 1630.0], [83.4, 1631.0], [83.5, 1636.0], [83.6, 1638.0], [83.7, 1642.0], [83.8, 1648.0], [83.9, 1649.0], [84.0, 1653.0], [84.1, 1659.0], [84.2, 1664.0], [84.3, 1666.0], [84.4, 1672.0], [84.5, 1674.0], [84.6, 1676.0], [84.7, 1679.0], [84.8, 1684.0], [84.9, 1688.0], [85.0, 1691.0], [85.1, 1694.0], [85.2, 1698.0], [85.3, 1700.0], [85.4, 1702.0], [85.5, 1707.0], [85.6, 1712.0], [85.7, 1715.0], [85.8, 1719.0], [85.9, 1723.0], [86.0, 1727.0], [86.1, 1729.0], [86.2, 1733.0], [86.3, 1736.0], [86.4, 1739.0], [86.5, 1744.0], [86.6, 1749.0], [86.7, 1750.0], [86.8, 1754.0], [86.9, 1757.0], [87.0, 1763.0], [87.1, 1773.0], [87.2, 1775.0], [87.3, 1780.0], [87.4, 1785.0], [87.5, 1791.0], [87.6, 1793.0], [87.7, 1797.0], [87.8, 1801.0], [87.9, 1808.0], [88.0, 1811.0], [88.1, 1816.0], [88.2, 1820.0], [88.3, 1826.0], [88.4, 1828.0], [88.5, 1834.0], [88.6, 1836.0], [88.7, 1841.0], [88.8, 1846.0], [88.9, 1850.0], [89.0, 1857.0], [89.1, 1866.0], [89.2, 1868.0], [89.3, 1872.0], [89.4, 1877.0], [89.5, 1890.0], [89.6, 1897.0], [89.7, 1904.0], [89.8, 1909.0], [89.9, 1916.0], [90.0, 1919.0], [90.1, 1927.0], [90.2, 1931.0], [90.3, 1939.0], [90.4, 1945.0], [90.5, 1957.0], [90.6, 1968.0], [90.7, 1970.0], [90.8, 1977.0], [90.9, 1985.0], [91.0, 1992.0], [91.1, 1997.0], [91.2, 2002.0], [91.3, 2011.0], [91.4, 2017.0], [91.5, 2027.0], [91.6, 2038.0], [91.7, 2050.0], [91.8, 2053.0], [91.9, 2056.0], [92.0, 2060.0], [92.1, 2065.0], [92.2, 2084.0], [92.3, 2090.0], [92.4, 2106.0], [92.5, 2115.0], [92.6, 2120.0], [92.7, 2134.0], [92.8, 2138.0], [92.9, 2147.0], [93.0, 2158.0], [93.1, 2164.0], [93.2, 2171.0], [93.3, 2177.0], [93.4, 2185.0], [93.5, 2190.0], [93.6, 2197.0], [93.7, 2213.0], [93.8, 2231.0], [93.9, 2242.0], [94.0, 2254.0], [94.1, 2263.0], [94.2, 2271.0], [94.3, 2290.0], [94.4, 2304.0], [94.5, 2313.0], [94.6, 2323.0], [94.7, 2328.0], [94.8, 2343.0], [94.9, 2358.0], [95.0, 2364.0], [95.1, 2381.0], [95.2, 2397.0], [95.3, 2413.0], [95.4, 2418.0], [95.5, 2436.0], [95.6, 2452.0], [95.7, 2457.0], [95.8, 2466.0], [95.9, 2485.0], [96.0, 2497.0], [96.1, 2507.0], [96.2, 2520.0], [96.3, 2542.0], [96.4, 2565.0], [96.5, 2573.0], [96.6, 2595.0], [96.7, 2618.0], [96.8, 2651.0], [96.9, 2675.0], [97.0, 2701.0], [97.1, 2718.0], [97.2, 2762.0], [97.3, 2773.0], [97.4, 2788.0], [97.5, 2810.0], [97.6, 2822.0], [97.7, 2839.0], [97.8, 2860.0], [97.9, 2892.0], [98.0, 2927.0], [98.1, 2937.0], [98.2, 2954.0], [98.3, 2987.0], [98.4, 3033.0], [98.5, 3076.0], [98.6, 3095.0], [98.7, 3137.0], [98.8, 3257.0], [98.9, 3329.0], [99.0, 3396.0], [99.1, 3463.0], [99.2, 3553.0], [99.3, 3750.0], [99.4, 3880.0], [99.5, 4170.0], [99.6, 4717.0], [99.7, 5058.0], [99.8, 5609.0], [99.9, 5832.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 501.0, "series": [{"data": [[600.0, 427.0], [700.0, 300.0], [800.0, 246.0], [900.0, 221.0], [1000.0, 226.0], [1100.0, 241.0], [1200.0, 243.0], [1300.0, 221.0], [1400.0, 225.0], [1500.0, 180.0], [1600.0, 153.0], [1700.0, 128.0], [1800.0, 98.0], [1900.0, 80.0], [2000.0, 62.0], [2100.0, 65.0], [2300.0, 42.0], [2200.0, 41.0], [2400.0, 42.0], [2500.0, 32.0], [2600.0, 19.0], [2800.0, 23.0], [2700.0, 25.0], [2900.0, 21.0], [3000.0, 15.0], [3100.0, 8.0], [3200.0, 3.0], [3300.0, 11.0], [3400.0, 5.0], [3500.0, 5.0], [3700.0, 3.0], [3600.0, 2.0], [3800.0, 5.0], [3900.0, 1.0], [4000.0, 3.0], [4100.0, 2.0], [4600.0, 3.0], [4700.0, 2.0], [4900.0, 3.0], [5000.0, 1.0], [5300.0, 1.0], [5400.0, 2.0], [5600.0, 4.0], [5500.0, 1.0], [5800.0, 2.0], [5900.0, 1.0], [6000.0, 1.0], [6200.0, 1.0], [6400.0, 1.0], [6700.0, 1.0], [100.0, 31.0], [200.0, 417.0], [300.0, 396.0], [400.0, 501.0], [500.0, 398.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2746.0, "series": [{"data": [[0.0, 1349.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2746.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1095.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.853896103896101, "minX": 1.60232706E12, "maxY": 10.0, "series": [{"data": [[1.60232724E12, 10.0], [1.60232742E12, 10.0], [1.60232736E12, 10.0], [1.60232706E12, 10.0], [1.60232754E12, 10.0], [1.60232748E12, 10.0], [1.60232718E12, 10.0], [1.60232712E12, 10.0], [1.6023276E12, 9.853896103896101], [1.6023273E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023276E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 346.0, "minX": 1.0, "maxY": 3747.0, "series": [{"data": [[8.0, 1270.0], [4.0, 1450.0], [2.0, 1418.0], [1.0, 3747.0], [9.0, 781.0], [10.0, 1035.1584330374378], [5.0, 681.0], [6.0, 346.0], [3.0, 949.0], [7.0, 1438.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 1035.6908110190718]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1046.4, "minX": 1.60232706E12, "maxY": 3256553.5166666666, "series": [{"data": [[1.60232724E12, 2980392.9833333334], [1.60232742E12, 2144985.533333333], [1.60232736E12, 2604968.5], [1.60232706E12, 1039751.45], [1.60232754E12, 2576440.5833333335], [1.60232748E12, 3256553.5166666666], [1.60232718E12, 2673938.783333333], [1.60232712E12, 2356668.3333333335], [1.6023276E12, 1567985.9166666667], [1.6023273E12, 2770922.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232724E12, 4551.166666666667], [1.60232742E12, 4514.166666666667], [1.60232736E12, 3642.016666666667], [1.60232706E12, 1046.4], [1.60232754E12, 5007.35], [1.60232748E12, 4451.366666666667], [1.60232718E12, 4543.55], [1.60232712E12, 3995.0333333333333], [1.6023276E12, 2319.95], [1.6023273E12, 4513.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023276E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 905.6757575757572, "minX": 1.60232706E12, "maxY": 1348.0425531914893, "series": [{"data": [[1.60232724E12, 992.708818635606], [1.60232742E12, 977.4749596122786], [1.60232736E12, 1186.0318091451295], [1.60232706E12, 1348.0425531914893], [1.60232754E12, 905.6757575757572], [1.60232748E12, 1013.2837837837839], [1.60232718E12, 977.2866449511397], [1.60232712E12, 1100.5207207207213], [1.6023276E12, 1234.993506493506], [1.6023273E12, 1001.8678929765887]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023276E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 904.428787878787, "minX": 1.60232706E12, "maxY": 1345.2340425531913, "series": [{"data": [[1.60232724E12, 990.7404326123134], [1.60232742E12, 976.3925686591285], [1.60232736E12, 1184.212723658052], [1.60232706E12, 1345.2340425531913], [1.60232754E12, 904.428787878787], [1.60232748E12, 1011.5152027027021], [1.60232718E12, 975.4902280130295], [1.60232712E12, 1098.8774774774786], [1.6023276E12, 1233.3896103896107], [1.6023273E12, 1000.1070234113713]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023276E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006493506493506492, "minX": 1.60232706E12, "maxY": 0.6028368794326237, "series": [{"data": [[1.60232724E12, 0.014975041597337774], [1.60232742E12, 0.019386106623586422], [1.60232736E12, 0.015904572564612352], [1.60232706E12, 0.6028368794326237], [1.60232754E12, 0.015151515151515143], [1.60232748E12, 0.016891891891891886], [1.60232718E12, 0.021172638436482073], [1.60232712E12, 0.01981981981981979], [1.6023276E12, 0.006493506493506492], [1.6023273E12, 0.013377926421404675]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023276E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 187.0, "minX": 1.60232706E12, "maxY": 6705.0, "series": [{"data": [[1.60232724E12, 4790.0], [1.60232742E12, 6705.0], [1.60232736E12, 6289.0], [1.60232706E12, 3521.0], [1.60232754E12, 3398.0], [1.60232748E12, 4023.0], [1.60232718E12, 5957.0], [1.60232712E12, 5832.0], [1.6023276E12, 4170.0], [1.6023273E12, 5493.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232724E12, 202.40899985671044], [1.60232742E12, 207.0], [1.60232736E12, 207.75199915885926], [1.60232706E12, 228.8379992890358], [1.60232754E12, 191.94899984240533], [1.60232748E12, 205.3369998586178], [1.60232718E12, 205.06999970674514], [1.60232712E12, 208.0279990720749], [1.6023276E12, 201.93399896860123], [1.6023273E12, 203.39099985718727]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232724E12, 202.94990005731583], [1.60232742E12, 207.13800005912782], [1.60232736E12, 210.9272003364563], [1.60232706E12, 231.52180028438568], [1.60232754E12, 192.54390006303788], [1.60232748E12, 205.8707000565529], [1.60232718E12, 206.08850005865096], [1.60232712E12, 211.53080037117005], [1.6023276E12, 206.00470050096513], [1.6023273E12, 203.9301000571251]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232724E12, 202.70949992835523], [1.60232742E12, 207.0], [1.60232736E12, 209.51599957942963], [1.60232706E12, 230.3289996445179], [1.60232754E12, 192.27949992120267], [1.60232748E12, 205.6334999293089], [1.60232718E12, 205.68499985337257], [1.60232712E12, 209.97399953603744], [1.6023276E12, 204.09699948430062], [1.6023273E12, 203.69049992859362]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232724E12, 197.0], [1.60232742E12, 200.0], [1.60232736E12, 195.0], [1.60232706E12, 223.0], [1.60232754E12, 187.0], [1.60232748E12, 198.0], [1.60232718E12, 198.0], [1.60232712E12, 195.0], [1.6023276E12, 189.0], [1.6023273E12, 191.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232724E12, 783.5], [1.60232742E12, 818.0], [1.60232736E12, 1051.0], [1.60232706E12, 1292.0], [1.60232754E12, 705.5], [1.60232748E12, 775.5], [1.60232718E12, 689.5], [1.60232712E12, 938.0], [1.6023276E12, 1098.0], [1.6023273E12, 855.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023276E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 189.0, "minX": 1.0, "maxY": 3747.0, "series": [{"data": [[8.0, 1080.5], [9.0, 1083.0], [10.0, 1042.5], [11.0, 902.0], [12.0, 772.5], [3.0, 1227.0], [13.0, 723.0], [14.0, 638.5], [15.0, 546.0], [4.0, 1482.0], [16.0, 530.5], [1.0, 3747.0], [17.0, 548.0], [18.0, 470.5], [19.0, 469.0], [5.0, 1310.0], [20.0, 455.5], [21.0, 444.0], [22.0, 446.5], [23.0, 447.0], [6.0, 1196.5], [24.0, 479.5], [25.0, 437.0], [7.0, 1263.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 189.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 189.0, "minX": 1.0, "maxY": 3734.0, "series": [{"data": [[8.0, 1080.0], [9.0, 1081.0], [10.0, 1039.5], [11.0, 902.0], [12.0, 772.0], [3.0, 1221.0], [13.0, 722.0], [14.0, 638.0], [15.0, 546.0], [4.0, 1480.5], [16.0, 530.5], [1.0, 3734.0], [17.0, 548.0], [18.0, 470.5], [19.0, 469.0], [5.0, 1307.5], [20.0, 455.5], [21.0, 443.0], [22.0, 446.5], [23.0, 447.0], [6.0, 1191.5], [24.0, 479.5], [25.0, 437.0], [7.0, 1260.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 189.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.5166666666666666, "minX": 1.60232706E12, "maxY": 11.0, "series": [{"data": [[1.60232724E12, 10.016666666666667], [1.60232742E12, 10.316666666666666], [1.60232736E12, 8.383333333333333], [1.60232706E12, 2.5166666666666666], [1.60232754E12, 11.0], [1.60232748E12, 9.866666666666667], [1.60232718E12, 10.233333333333333], [1.60232712E12, 9.25], [1.6023276E12, 4.966666666666667], [1.6023273E12, 9.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023276E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232706E12, "maxY": 11.0, "series": [{"data": [[1.60232724E12, 10.0], [1.60232742E12, 10.316666666666666], [1.60232736E12, 8.383333333333333], [1.60232706E12, 2.35], [1.60232754E12, 11.0], [1.60232748E12, 9.866666666666667], [1.60232718E12, 10.233333333333333], [1.60232712E12, 9.25], [1.6023276E12, 5.133333333333334], [1.6023273E12, 9.966666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60232724E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023276E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232706E12, "maxY": 11.0, "series": [{"data": [[1.60232724E12, 10.0], [1.60232742E12, 10.316666666666666], [1.60232736E12, 8.383333333333333], [1.60232706E12, 2.35], [1.60232754E12, 11.0], [1.60232748E12, 9.866666666666667], [1.60232718E12, 10.233333333333333], [1.60232712E12, 9.25], [1.6023276E12, 5.133333333333334], [1.6023273E12, 9.966666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60232724E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023276E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232706E12, "maxY": 11.0, "series": [{"data": [[1.60232724E12, 10.0], [1.60232742E12, 10.316666666666666], [1.60232736E12, 8.383333333333333], [1.60232706E12, 2.35], [1.60232754E12, 11.0], [1.60232748E12, 9.866666666666667], [1.60232718E12, 10.233333333333333], [1.60232712E12, 9.25], [1.6023276E12, 5.133333333333334], [1.6023273E12, 9.966666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60232724E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023276E12, "title": "Total Transactions Per Second"}},
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

