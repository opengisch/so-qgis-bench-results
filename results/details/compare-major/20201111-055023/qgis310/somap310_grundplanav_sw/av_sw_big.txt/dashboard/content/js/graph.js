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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 9220.0, "series": [{"data": [[0.0, 182.0], [0.1, 188.0], [0.2, 190.0], [0.3, 191.0], [0.4, 193.0], [0.5, 194.0], [0.6, 196.0], [0.7, 197.0], [0.8, 198.0], [0.9, 199.0], [1.0, 200.0], [1.1, 201.0], [1.2, 202.0], [1.3, 203.0], [1.4, 205.0], [1.5, 205.0], [1.6, 206.0], [1.7, 208.0], [1.8, 209.0], [1.9, 211.0], [2.0, 211.0], [2.1, 213.0], [2.2, 214.0], [2.3, 215.0], [2.4, 216.0], [2.5, 216.0], [2.6, 217.0], [2.7, 217.0], [2.8, 218.0], [2.9, 218.0], [3.0, 219.0], [3.1, 220.0], [3.2, 221.0], [3.3, 221.0], [3.4, 222.0], [3.5, 222.0], [3.6, 223.0], [3.7, 223.0], [3.8, 223.0], [3.9, 224.0], [4.0, 224.0], [4.1, 225.0], [4.2, 225.0], [4.3, 226.0], [4.4, 227.0], [4.5, 228.0], [4.6, 229.0], [4.7, 229.0], [4.8, 230.0], [4.9, 230.0], [5.0, 231.0], [5.1, 231.0], [5.2, 232.0], [5.3, 233.0], [5.4, 233.0], [5.5, 234.0], [5.6, 235.0], [5.7, 236.0], [5.8, 237.0], [5.9, 238.0], [6.0, 239.0], [6.1, 240.0], [6.2, 242.0], [6.3, 242.0], [6.4, 244.0], [6.5, 247.0], [6.6, 248.0], [6.7, 251.0], [6.8, 253.0], [6.9, 257.0], [7.0, 260.0], [7.1, 267.0], [7.2, 271.0], [7.3, 275.0], [7.4, 276.0], [7.5, 278.0], [7.6, 281.0], [7.7, 282.0], [7.8, 284.0], [7.9, 285.0], [8.0, 287.0], [8.1, 288.0], [8.2, 289.0], [8.3, 291.0], [8.4, 292.0], [8.5, 293.0], [8.6, 295.0], [8.7, 295.0], [8.8, 296.0], [8.9, 297.0], [9.0, 299.0], [9.1, 301.0], [9.2, 302.0], [9.3, 303.0], [9.4, 305.0], [9.5, 306.0], [9.6, 307.0], [9.7, 309.0], [9.8, 311.0], [9.9, 311.0], [10.0, 312.0], [10.1, 314.0], [10.2, 314.0], [10.3, 315.0], [10.4, 316.0], [10.5, 317.0], [10.6, 317.0], [10.7, 318.0], [10.8, 318.0], [10.9, 319.0], [11.0, 320.0], [11.1, 320.0], [11.2, 321.0], [11.3, 322.0], [11.4, 323.0], [11.5, 323.0], [11.6, 324.0], [11.7, 325.0], [11.8, 325.0], [11.9, 326.0], [12.0, 327.0], [12.1, 327.0], [12.2, 328.0], [12.3, 329.0], [12.4, 330.0], [12.5, 332.0], [12.6, 332.0], [12.7, 333.0], [12.8, 334.0], [12.9, 336.0], [13.0, 337.0], [13.1, 338.0], [13.2, 339.0], [13.3, 340.0], [13.4, 342.0], [13.5, 342.0], [13.6, 344.0], [13.7, 346.0], [13.8, 347.0], [13.9, 348.0], [14.0, 349.0], [14.1, 349.0], [14.2, 352.0], [14.3, 356.0], [14.4, 357.0], [14.5, 358.0], [14.6, 362.0], [14.7, 363.0], [14.8, 365.0], [14.9, 366.0], [15.0, 369.0], [15.1, 370.0], [15.2, 371.0], [15.3, 372.0], [15.4, 374.0], [15.5, 376.0], [15.6, 377.0], [15.7, 380.0], [15.8, 382.0], [15.9, 382.0], [16.0, 384.0], [16.1, 384.0], [16.2, 386.0], [16.3, 387.0], [16.4, 388.0], [16.5, 389.0], [16.6, 391.0], [16.7, 392.0], [16.8, 393.0], [16.9, 394.0], [17.0, 395.0], [17.1, 396.0], [17.2, 398.0], [17.3, 399.0], [17.4, 402.0], [17.5, 403.0], [17.6, 404.0], [17.7, 404.0], [17.8, 406.0], [17.9, 409.0], [18.0, 410.0], [18.1, 410.0], [18.2, 411.0], [18.3, 411.0], [18.4, 412.0], [18.5, 414.0], [18.6, 415.0], [18.7, 416.0], [18.8, 417.0], [18.9, 418.0], [19.0, 419.0], [19.1, 419.0], [19.2, 421.0], [19.3, 421.0], [19.4, 422.0], [19.5, 423.0], [19.6, 423.0], [19.7, 425.0], [19.8, 426.0], [19.9, 427.0], [20.0, 428.0], [20.1, 429.0], [20.2, 430.0], [20.3, 432.0], [20.4, 432.0], [20.5, 433.0], [20.6, 434.0], [20.7, 435.0], [20.8, 437.0], [20.9, 438.0], [21.0, 439.0], [21.1, 440.0], [21.2, 441.0], [21.3, 441.0], [21.4, 442.0], [21.5, 443.0], [21.6, 444.0], [21.7, 445.0], [21.8, 446.0], [21.9, 447.0], [22.0, 448.0], [22.1, 449.0], [22.2, 450.0], [22.3, 451.0], [22.4, 452.0], [22.5, 453.0], [22.6, 454.0], [22.7, 455.0], [22.8, 456.0], [22.9, 457.0], [23.0, 458.0], [23.1, 459.0], [23.2, 461.0], [23.3, 462.0], [23.4, 462.0], [23.5, 464.0], [23.6, 465.0], [23.7, 466.0], [23.8, 468.0], [23.9, 468.0], [24.0, 469.0], [24.1, 470.0], [24.2, 471.0], [24.3, 473.0], [24.4, 473.0], [24.5, 475.0], [24.6, 475.0], [24.7, 476.0], [24.8, 479.0], [24.9, 480.0], [25.0, 481.0], [25.1, 482.0], [25.2, 482.0], [25.3, 483.0], [25.4, 485.0], [25.5, 486.0], [25.6, 487.0], [25.7, 490.0], [25.8, 491.0], [25.9, 491.0], [26.0, 493.0], [26.1, 494.0], [26.2, 495.0], [26.3, 497.0], [26.4, 499.0], [26.5, 501.0], [26.6, 502.0], [26.7, 504.0], [26.8, 505.0], [26.9, 509.0], [27.0, 510.0], [27.1, 512.0], [27.2, 513.0], [27.3, 516.0], [27.4, 517.0], [27.5, 520.0], [27.6, 521.0], [27.7, 522.0], [27.8, 524.0], [27.9, 525.0], [28.0, 526.0], [28.1, 527.0], [28.2, 527.0], [28.3, 529.0], [28.4, 529.0], [28.5, 531.0], [28.6, 532.0], [28.7, 533.0], [28.8, 534.0], [28.9, 535.0], [29.0, 536.0], [29.1, 537.0], [29.2, 538.0], [29.3, 539.0], [29.4, 539.0], [29.5, 540.0], [29.6, 541.0], [29.7, 543.0], [29.8, 543.0], [29.9, 545.0], [30.0, 546.0], [30.1, 547.0], [30.2, 548.0], [30.3, 549.0], [30.4, 550.0], [30.5, 550.0], [30.6, 552.0], [30.7, 553.0], [30.8, 553.0], [30.9, 554.0], [31.0, 555.0], [31.1, 557.0], [31.2, 557.0], [31.3, 558.0], [31.4, 559.0], [31.5, 561.0], [31.6, 562.0], [31.7, 563.0], [31.8, 564.0], [31.9, 564.0], [32.0, 566.0], [32.1, 567.0], [32.2, 569.0], [32.3, 570.0], [32.4, 571.0], [32.5, 572.0], [32.6, 573.0], [32.7, 574.0], [32.8, 576.0], [32.9, 577.0], [33.0, 578.0], [33.1, 581.0], [33.2, 584.0], [33.3, 586.0], [33.4, 588.0], [33.5, 588.0], [33.6, 590.0], [33.7, 592.0], [33.8, 593.0], [33.9, 594.0], [34.0, 595.0], [34.1, 597.0], [34.2, 599.0], [34.3, 599.0], [34.4, 602.0], [34.5, 603.0], [34.6, 605.0], [34.7, 606.0], [34.8, 607.0], [34.9, 610.0], [35.0, 611.0], [35.1, 612.0], [35.2, 612.0], [35.3, 613.0], [35.4, 615.0], [35.5, 617.0], [35.6, 618.0], [35.7, 620.0], [35.8, 621.0], [35.9, 622.0], [36.0, 623.0], [36.1, 624.0], [36.2, 625.0], [36.3, 627.0], [36.4, 629.0], [36.5, 630.0], [36.6, 631.0], [36.7, 632.0], [36.8, 634.0], [36.9, 637.0], [37.0, 638.0], [37.1, 640.0], [37.2, 641.0], [37.3, 643.0], [37.4, 644.0], [37.5, 645.0], [37.6, 646.0], [37.7, 647.0], [37.8, 649.0], [37.9, 650.0], [38.0, 651.0], [38.1, 652.0], [38.2, 652.0], [38.3, 654.0], [38.4, 655.0], [38.5, 656.0], [38.6, 658.0], [38.7, 659.0], [38.8, 660.0], [38.9, 662.0], [39.0, 664.0], [39.1, 665.0], [39.2, 666.0], [39.3, 668.0], [39.4, 668.0], [39.5, 670.0], [39.6, 670.0], [39.7, 671.0], [39.8, 672.0], [39.9, 673.0], [40.0, 673.0], [40.1, 675.0], [40.2, 677.0], [40.3, 678.0], [40.4, 680.0], [40.5, 680.0], [40.6, 683.0], [40.7, 684.0], [40.8, 684.0], [40.9, 686.0], [41.0, 687.0], [41.1, 688.0], [41.2, 689.0], [41.3, 692.0], [41.4, 694.0], [41.5, 695.0], [41.6, 696.0], [41.7, 697.0], [41.8, 698.0], [41.9, 700.0], [42.0, 701.0], [42.1, 702.0], [42.2, 704.0], [42.3, 706.0], [42.4, 707.0], [42.5, 708.0], [42.6, 710.0], [42.7, 712.0], [42.8, 713.0], [42.9, 714.0], [43.0, 715.0], [43.1, 717.0], [43.2, 719.0], [43.3, 721.0], [43.4, 723.0], [43.5, 723.0], [43.6, 725.0], [43.7, 727.0], [43.8, 728.0], [43.9, 730.0], [44.0, 731.0], [44.1, 732.0], [44.2, 734.0], [44.3, 736.0], [44.4, 737.0], [44.5, 738.0], [44.6, 739.0], [44.7, 742.0], [44.8, 744.0], [44.9, 747.0], [45.0, 749.0], [45.1, 752.0], [45.2, 755.0], [45.3, 756.0], [45.4, 757.0], [45.5, 760.0], [45.6, 762.0], [45.7, 764.0], [45.8, 766.0], [45.9, 767.0], [46.0, 769.0], [46.1, 771.0], [46.2, 773.0], [46.3, 774.0], [46.4, 776.0], [46.5, 779.0], [46.6, 782.0], [46.7, 784.0], [46.8, 785.0], [46.9, 787.0], [47.0, 788.0], [47.1, 790.0], [47.2, 792.0], [47.3, 794.0], [47.4, 795.0], [47.5, 797.0], [47.6, 800.0], [47.7, 802.0], [47.8, 804.0], [47.9, 806.0], [48.0, 808.0], [48.1, 809.0], [48.2, 811.0], [48.3, 813.0], [48.4, 815.0], [48.5, 817.0], [48.6, 820.0], [48.7, 822.0], [48.8, 822.0], [48.9, 823.0], [49.0, 825.0], [49.1, 827.0], [49.2, 828.0], [49.3, 831.0], [49.4, 834.0], [49.5, 835.0], [49.6, 836.0], [49.7, 837.0], [49.8, 839.0], [49.9, 840.0], [50.0, 841.0], [50.1, 846.0], [50.2, 848.0], [50.3, 849.0], [50.4, 851.0], [50.5, 852.0], [50.6, 854.0], [50.7, 855.0], [50.8, 856.0], [50.9, 857.0], [51.0, 858.0], [51.1, 862.0], [51.2, 864.0], [51.3, 865.0], [51.4, 867.0], [51.5, 868.0], [51.6, 869.0], [51.7, 870.0], [51.8, 872.0], [51.9, 872.0], [52.0, 876.0], [52.1, 878.0], [52.2, 880.0], [52.3, 881.0], [52.4, 883.0], [52.5, 885.0], [52.6, 886.0], [52.7, 887.0], [52.8, 891.0], [52.9, 894.0], [53.0, 897.0], [53.1, 899.0], [53.2, 902.0], [53.3, 903.0], [53.4, 905.0], [53.5, 906.0], [53.6, 908.0], [53.7, 911.0], [53.8, 912.0], [53.9, 916.0], [54.0, 918.0], [54.1, 919.0], [54.2, 920.0], [54.3, 923.0], [54.4, 925.0], [54.5, 929.0], [54.6, 933.0], [54.7, 936.0], [54.8, 938.0], [54.9, 941.0], [55.0, 944.0], [55.1, 947.0], [55.2, 950.0], [55.3, 952.0], [55.4, 953.0], [55.5, 955.0], [55.6, 956.0], [55.7, 958.0], [55.8, 962.0], [55.9, 964.0], [56.0, 966.0], [56.1, 969.0], [56.2, 970.0], [56.3, 973.0], [56.4, 975.0], [56.5, 977.0], [56.6, 979.0], [56.7, 982.0], [56.8, 985.0], [56.9, 987.0], [57.0, 993.0], [57.1, 994.0], [57.2, 996.0], [57.3, 996.0], [57.4, 999.0], [57.5, 1003.0], [57.6, 1005.0], [57.7, 1006.0], [57.8, 1008.0], [57.9, 1011.0], [58.0, 1013.0], [58.1, 1014.0], [58.2, 1017.0], [58.3, 1021.0], [58.4, 1025.0], [58.5, 1027.0], [58.6, 1028.0], [58.7, 1030.0], [58.8, 1033.0], [58.9, 1034.0], [59.0, 1036.0], [59.1, 1038.0], [59.2, 1040.0], [59.3, 1041.0], [59.4, 1043.0], [59.5, 1045.0], [59.6, 1047.0], [59.7, 1049.0], [59.8, 1050.0], [59.9, 1052.0], [60.0, 1054.0], [60.1, 1057.0], [60.2, 1058.0], [60.3, 1059.0], [60.4, 1062.0], [60.5, 1063.0], [60.6, 1066.0], [60.7, 1068.0], [60.8, 1069.0], [60.9, 1071.0], [61.0, 1073.0], [61.1, 1074.0], [61.2, 1075.0], [61.3, 1078.0], [61.4, 1079.0], [61.5, 1080.0], [61.6, 1084.0], [61.7, 1086.0], [61.8, 1088.0], [61.9, 1091.0], [62.0, 1094.0], [62.1, 1096.0], [62.2, 1098.0], [62.3, 1100.0], [62.4, 1101.0], [62.5, 1102.0], [62.6, 1103.0], [62.7, 1105.0], [62.8, 1106.0], [62.9, 1109.0], [63.0, 1111.0], [63.1, 1114.0], [63.2, 1116.0], [63.3, 1119.0], [63.4, 1121.0], [63.5, 1122.0], [63.6, 1123.0], [63.7, 1126.0], [63.8, 1128.0], [63.9, 1130.0], [64.0, 1133.0], [64.1, 1136.0], [64.2, 1139.0], [64.3, 1140.0], [64.4, 1142.0], [64.5, 1145.0], [64.6, 1148.0], [64.7, 1150.0], [64.8, 1152.0], [64.9, 1154.0], [65.0, 1157.0], [65.1, 1157.0], [65.2, 1158.0], [65.3, 1162.0], [65.4, 1164.0], [65.5, 1165.0], [65.6, 1166.0], [65.7, 1169.0], [65.8, 1172.0], [65.9, 1174.0], [66.0, 1176.0], [66.1, 1178.0], [66.2, 1180.0], [66.3, 1181.0], [66.4, 1184.0], [66.5, 1186.0], [66.6, 1187.0], [66.7, 1188.0], [66.8, 1189.0], [66.9, 1192.0], [67.0, 1196.0], [67.1, 1198.0], [67.2, 1200.0], [67.3, 1203.0], [67.4, 1205.0], [67.5, 1208.0], [67.6, 1208.0], [67.7, 1210.0], [67.8, 1214.0], [67.9, 1216.0], [68.0, 1220.0], [68.1, 1221.0], [68.2, 1223.0], [68.3, 1225.0], [68.4, 1227.0], [68.5, 1228.0], [68.6, 1230.0], [68.7, 1232.0], [68.8, 1234.0], [68.9, 1235.0], [69.0, 1238.0], [69.1, 1240.0], [69.2, 1243.0], [69.3, 1245.0], [69.4, 1250.0], [69.5, 1254.0], [69.6, 1258.0], [69.7, 1261.0], [69.8, 1263.0], [69.9, 1266.0], [70.0, 1268.0], [70.1, 1269.0], [70.2, 1272.0], [70.3, 1275.0], [70.4, 1277.0], [70.5, 1279.0], [70.6, 1281.0], [70.7, 1283.0], [70.8, 1289.0], [70.9, 1290.0], [71.0, 1291.0], [71.1, 1293.0], [71.2, 1295.0], [71.3, 1297.0], [71.4, 1299.0], [71.5, 1300.0], [71.6, 1303.0], [71.7, 1307.0], [71.8, 1310.0], [71.9, 1311.0], [72.0, 1314.0], [72.1, 1317.0], [72.2, 1319.0], [72.3, 1321.0], [72.4, 1323.0], [72.5, 1324.0], [72.6, 1326.0], [72.7, 1330.0], [72.8, 1332.0], [72.9, 1335.0], [73.0, 1336.0], [73.1, 1340.0], [73.2, 1344.0], [73.3, 1346.0], [73.4, 1347.0], [73.5, 1351.0], [73.6, 1354.0], [73.7, 1359.0], [73.8, 1362.0], [73.9, 1366.0], [74.0, 1368.0], [74.1, 1370.0], [74.2, 1371.0], [74.3, 1374.0], [74.4, 1375.0], [74.5, 1378.0], [74.6, 1381.0], [74.7, 1386.0], [74.8, 1389.0], [74.9, 1391.0], [75.0, 1394.0], [75.1, 1397.0], [75.2, 1398.0], [75.3, 1402.0], [75.4, 1404.0], [75.5, 1407.0], [75.6, 1408.0], [75.7, 1410.0], [75.8, 1414.0], [75.9, 1415.0], [76.0, 1419.0], [76.1, 1419.0], [76.2, 1420.0], [76.3, 1422.0], [76.4, 1424.0], [76.5, 1426.0], [76.6, 1429.0], [76.7, 1431.0], [76.8, 1434.0], [76.9, 1436.0], [77.0, 1438.0], [77.1, 1440.0], [77.2, 1444.0], [77.3, 1446.0], [77.4, 1451.0], [77.5, 1452.0], [77.6, 1455.0], [77.7, 1458.0], [77.8, 1461.0], [77.9, 1464.0], [78.0, 1466.0], [78.1, 1469.0], [78.2, 1470.0], [78.3, 1471.0], [78.4, 1474.0], [78.5, 1476.0], [78.6, 1479.0], [78.7, 1481.0], [78.8, 1484.0], [78.9, 1488.0], [79.0, 1489.0], [79.1, 1492.0], [79.2, 1493.0], [79.3, 1496.0], [79.4, 1497.0], [79.5, 1498.0], [79.6, 1500.0], [79.7, 1504.0], [79.8, 1507.0], [79.9, 1510.0], [80.0, 1512.0], [80.1, 1514.0], [80.2, 1516.0], [80.3, 1518.0], [80.4, 1520.0], [80.5, 1523.0], [80.6, 1526.0], [80.7, 1529.0], [80.8, 1532.0], [80.9, 1534.0], [81.0, 1537.0], [81.1, 1540.0], [81.2, 1542.0], [81.3, 1544.0], [81.4, 1546.0], [81.5, 1551.0], [81.6, 1557.0], [81.7, 1557.0], [81.8, 1559.0], [81.9, 1562.0], [82.0, 1567.0], [82.1, 1570.0], [82.2, 1572.0], [82.3, 1574.0], [82.4, 1579.0], [82.5, 1581.0], [82.6, 1583.0], [82.7, 1590.0], [82.8, 1592.0], [82.9, 1594.0], [83.0, 1595.0], [83.1, 1597.0], [83.2, 1600.0], [83.3, 1601.0], [83.4, 1602.0], [83.5, 1610.0], [83.6, 1612.0], [83.7, 1614.0], [83.8, 1616.0], [83.9, 1619.0], [84.0, 1621.0], [84.1, 1626.0], [84.2, 1631.0], [84.3, 1633.0], [84.4, 1635.0], [84.5, 1637.0], [84.6, 1639.0], [84.7, 1642.0], [84.8, 1645.0], [84.9, 1649.0], [85.0, 1653.0], [85.1, 1657.0], [85.2, 1661.0], [85.3, 1665.0], [85.4, 1667.0], [85.5, 1669.0], [85.6, 1671.0], [85.7, 1676.0], [85.8, 1680.0], [85.9, 1684.0], [86.0, 1687.0], [86.1, 1690.0], [86.2, 1693.0], [86.3, 1699.0], [86.4, 1701.0], [86.5, 1704.0], [86.6, 1707.0], [86.7, 1710.0], [86.8, 1713.0], [86.9, 1718.0], [87.0, 1725.0], [87.1, 1730.0], [87.2, 1733.0], [87.3, 1735.0], [87.4, 1740.0], [87.5, 1743.0], [87.6, 1746.0], [87.7, 1751.0], [87.8, 1755.0], [87.9, 1759.0], [88.0, 1762.0], [88.1, 1767.0], [88.2, 1769.0], [88.3, 1771.0], [88.4, 1778.0], [88.5, 1783.0], [88.6, 1788.0], [88.7, 1790.0], [88.8, 1793.0], [88.9, 1797.0], [89.0, 1801.0], [89.1, 1807.0], [89.2, 1813.0], [89.3, 1816.0], [89.4, 1821.0], [89.5, 1827.0], [89.6, 1832.0], [89.7, 1843.0], [89.8, 1847.0], [89.9, 1851.0], [90.0, 1859.0], [90.1, 1862.0], [90.2, 1874.0], [90.3, 1880.0], [90.4, 1883.0], [90.5, 1890.0], [90.6, 1895.0], [90.7, 1899.0], [90.8, 1906.0], [90.9, 1915.0], [91.0, 1920.0], [91.1, 1927.0], [91.2, 1933.0], [91.3, 1940.0], [91.4, 1948.0], [91.5, 1956.0], [91.6, 1959.0], [91.7, 1965.0], [91.8, 1978.0], [91.9, 1983.0], [92.0, 1993.0], [92.1, 1996.0], [92.2, 2011.0], [92.3, 2022.0], [92.4, 2033.0], [92.5, 2044.0], [92.6, 2048.0], [92.7, 2062.0], [92.8, 2084.0], [92.9, 2093.0], [93.0, 2101.0], [93.1, 2113.0], [93.2, 2119.0], [93.3, 2134.0], [93.4, 2151.0], [93.5, 2173.0], [93.6, 2182.0], [93.7, 2191.0], [93.8, 2207.0], [93.9, 2215.0], [94.0, 2232.0], [94.1, 2245.0], [94.2, 2258.0], [94.3, 2282.0], [94.4, 2303.0], [94.5, 2312.0], [94.6, 2326.0], [94.7, 2337.0], [94.8, 2352.0], [94.9, 2357.0], [95.0, 2368.0], [95.1, 2379.0], [95.2, 2395.0], [95.3, 2406.0], [95.4, 2418.0], [95.5, 2421.0], [95.6, 2430.0], [95.7, 2453.0], [95.8, 2480.0], [95.9, 2491.0], [96.0, 2494.0], [96.1, 2504.0], [96.2, 2520.0], [96.3, 2532.0], [96.4, 2551.0], [96.5, 2562.0], [96.6, 2568.0], [96.7, 2579.0], [96.8, 2593.0], [96.9, 2604.0], [97.0, 2638.0], [97.1, 2666.0], [97.2, 2721.0], [97.3, 2740.0], [97.4, 2756.0], [97.5, 2771.0], [97.6, 2778.0], [97.7, 2818.0], [97.8, 2843.0], [97.9, 2860.0], [98.0, 2881.0], [98.1, 2924.0], [98.2, 2959.0], [98.3, 2994.0], [98.4, 3045.0], [98.5, 3097.0], [98.6, 3141.0], [98.7, 3174.0], [98.8, 3262.0], [98.9, 3303.0], [99.0, 3345.0], [99.1, 3441.0], [99.2, 3583.0], [99.3, 3768.0], [99.4, 3848.0], [99.5, 3944.0], [99.6, 4235.0], [99.7, 4542.0], [99.8, 5290.0], [99.9, 5490.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 474.0, "series": [{"data": [[600.0, 393.0], [700.0, 296.0], [800.0, 289.0], [900.0, 221.0], [1000.0, 253.0], [1100.0, 254.0], [1200.0, 221.0], [1300.0, 196.0], [1400.0, 224.0], [1500.0, 189.0], [1600.0, 162.0], [1700.0, 137.0], [1800.0, 92.0], [1900.0, 73.0], [2000.0, 45.0], [2100.0, 40.0], [2300.0, 43.0], [2200.0, 33.0], [2400.0, 42.0], [2500.0, 42.0], [2600.0, 16.0], [2800.0, 20.0], [2700.0, 26.0], [2900.0, 14.0], [3000.0, 11.0], [3100.0, 12.0], [3300.0, 10.0], [3200.0, 7.0], [3400.0, 2.0], [3500.0, 6.0], [3600.0, 2.0], [3700.0, 3.0], [3800.0, 8.0], [3900.0, 4.0], [4200.0, 4.0], [4100.0, 2.0], [4500.0, 2.0], [5000.0, 2.0], [4900.0, 1.0], [5100.0, 1.0], [5300.0, 1.0], [5200.0, 1.0], [5600.0, 1.0], [5400.0, 4.0], [5900.0, 1.0], [6100.0, 1.0], [6300.0, 1.0], [9200.0, 1.0], [100.0, 48.0], [200.0, 420.0], [300.0, 430.0], [400.0, 474.0], [500.0, 409.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1058.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2758.0, "series": [{"data": [[0.0, 1374.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2758.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1058.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.795454545454545, "minX": 1.60507488E12, "maxY": 10.0, "series": [{"data": [[1.60507512E12, 10.0], [1.6050753E12, 10.0], [1.605075E12, 10.0], [1.60507518E12, 10.0], [1.60507536E12, 10.0], [1.60507488E12, 9.974842767295604], [1.60507506E12, 10.0], [1.60507524E12, 10.0], [1.60507542E12, 9.795454545454545], [1.60507494E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507542E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 526.0, "minX": 1.0, "maxY": 2912.0, "series": [{"data": [[8.0, 526.0], [4.0, 2330.0], [2.0, 2912.0], [1.0, 2860.0], [9.0, 2336.0], [10.0, 1016.0530888030908], [5.0, 1043.0], [6.0, 544.0], [3.0, 996.0], [7.0, 602.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99055876685938, 1016.926396917145]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1176.8166666666666, "minX": 1.60507488E12, "maxY": 3277313.8, "series": [{"data": [[1.60507512E12, 2658659.433333333], [1.6050753E12, 3277313.8], [1.605075E12, 2758067.466666667], [1.60507518E12, 2692901.183333333], [1.60507536E12, 2725086.5], [1.60507488E12, 1167186.8333333333], [1.60507506E12, 3067938.5833333335], [1.60507524E12, 2207142.216666667], [1.60507542E12, 1039740.6666666666], [1.60507494E12, 2388535.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507512E12, 4424.866666666667], [1.6050753E12, 4794.416666666667], [1.605075E12, 4795.916666666667], [1.60507518E12, 3882.85], [1.60507536E12, 4754.65], [1.60507488E12, 1176.8166666666666], [1.60507506E12, 4538.866666666667], [1.60507524E12, 4523.15], [1.60507542E12, 1652.6666666666667], [1.60507494E12, 4033.133333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507542E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 930.4643962848289, "minX": 1.60507488E12, "maxY": 1287.5363636363634, "series": [{"data": [[1.60507512E12, 1021.3833049403746], [1.6050753E12, 951.7626582278468], [1.605075E12, 930.4643962848289], [1.60507518E12, 1117.74582560297], [1.60507536E12, 949.1789137380191], [1.60507488E12, 1262.0691823899376], [1.60507506E12, 996.7073578595317], [1.60507524E12, 959.2363344051446], [1.60507542E12, 1287.5363636363634], [1.60507494E12, 1073.8823529411773]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507542E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 928.3916408668726, "minX": 1.60507488E12, "maxY": 1286.1227272727278, "series": [{"data": [[1.60507512E12, 1019.6967632027249], [1.6050753E12, 949.8955696202536], [1.605075E12, 928.3916408668726], [1.60507518E12, 1115.9146567718003], [1.60507536E12, 947.7843450479236], [1.60507488E12, 1258.8805031446536], [1.60507506E12, 994.3461538461543], [1.60507524E12, 957.929260450161], [1.60507542E12, 1286.1227272727278], [1.60507494E12, 1071.9304812834223]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507542E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60507488E12, "maxY": 0.559748427672956, "series": [{"data": [[1.60507512E12, 0.015332197614991485], [1.6050753E12, 0.018987341772151896], [1.605075E12, 0.04024767801857584], [1.60507518E12, 0.020408163265306097], [1.60507536E12, 0.025559105431309893], [1.60507488E12, 0.559748427672956], [1.60507506E12, 0.020066889632107024], [1.60507524E12, 0.020900321543408363], [1.60507542E12, 0.0], [1.60507494E12, 0.017825311942959002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507542E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.60507488E12, "maxY": 9220.0, "series": [{"data": [[1.60507512E12, 5394.0], [1.6050753E12, 3294.0], [1.605075E12, 5490.0], [1.60507518E12, 6391.0], [1.60507536E12, 4265.0], [1.60507488E12, 3986.0], [1.60507506E12, 3944.0], [1.60507524E12, 3866.0], [1.60507542E12, 4115.0], [1.60507494E12, 9220.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507512E12, 198.0], [1.6050753E12, 190.39399969816208], [1.605075E12, 201.0], [1.60507518E12, 215.5799996137619], [1.60507536E12, 196.64299985051156], [1.60507488E12, 219.31999988555907], [1.60507506E12, 196.0], [1.60507524E12, 197.60699985146522], [1.60507542E12, 244.94499973654746], [1.60507494E12, 221.17399959802628]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507512E12, 198.0], [1.6050753E12, 191.53340012073517], [1.605075E12, 201.81060012340546], [1.60507518E12, 216.3460000514984], [1.60507536E12, 197.62190017938613], [1.60507488E12, 219.75200004577636], [1.60507506E12, 196.0], [1.60507524E12, 198.1677000594139], [1.60507542E12, 251.0128006744385], [1.60507494E12, 222.6914001607895]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507512E12, 198.0], [1.6050753E12, 191.02699984908105], [1.605075E12, 201.29299984574317], [1.60507518E12, 216.12999993562698], [1.60507536E12, 196.95649992525577], [1.60507488E12, 219.55999994277954], [1.60507506E12, 196.0], [1.60507524E12, 197.91849992573262], [1.60507542E12, 248.1839991569519], [1.60507494E12, 222.01699979901315]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507512E12, 188.0], [1.6050753E12, 182.0], [1.605075E12, 192.0], [1.60507518E12, 197.0], [1.60507536E12, 187.0], [1.60507488E12, 218.0], [1.60507506E12, 190.0], [1.60507524E12, 190.0], [1.60507542E12, 240.0], [1.60507494E12, 195.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507512E12, 846.0], [1.6050753E12, 685.5], [1.605075E12, 672.0], [1.60507518E12, 980.0], [1.60507536E12, 757.0], [1.60507488E12, 1235.0], [1.60507506E12, 810.5], [1.60507524E12, 764.5], [1.60507542E12, 1067.0], [1.60507494E12, 920.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507542E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 407.0, "minX": 1.0, "maxY": 2860.0, "series": [{"data": [[2.0, 1259.5], [3.0, 2032.0], [4.0, 1346.5], [5.0, 1266.0], [6.0, 1276.5], [7.0, 1123.0], [8.0, 1172.0], [9.0, 1006.0], [10.0, 977.0], [11.0, 876.0], [12.0, 810.5], [13.0, 710.5], [14.0, 678.0], [15.0, 548.5], [1.0, 2860.0], [16.0, 581.5], [17.0, 442.5], [18.0, 450.5], [19.0, 408.5], [20.0, 438.5], [21.0, 466.0], [22.0, 435.0], [23.0, 433.5], [24.0, 407.0], [25.0, 425.0], [26.0, 452.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 406.0, "minX": 1.0, "maxY": 2860.0, "series": [{"data": [[2.0, 1255.5], [3.0, 2025.0], [4.0, 1345.0], [5.0, 1264.5], [6.0, 1275.0], [7.0, 1118.0], [8.0, 1169.0], [9.0, 1004.0], [10.0, 975.5], [11.0, 874.0], [12.0, 809.0], [13.0, 710.0], [14.0, 677.0], [15.0, 547.5], [1.0, 2860.0], [16.0, 581.0], [17.0, 442.0], [18.0, 450.0], [19.0, 408.0], [20.0, 438.0], [21.0, 466.0], [22.0, 435.0], [23.0, 433.0], [24.0, 406.0], [25.0, 424.5], [26.0, 452.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.816666666666667, "minX": 1.60507488E12, "maxY": 10.766666666666667, "series": [{"data": [[1.60507512E12, 9.783333333333333], [1.6050753E12, 10.533333333333333], [1.605075E12, 10.766666666666667], [1.60507518E12, 8.983333333333333], [1.60507536E12, 10.433333333333334], [1.60507488E12, 2.816666666666667], [1.60507506E12, 9.966666666666667], [1.60507524E12, 10.366666666666667], [1.60507542E12, 3.5], [1.60507494E12, 9.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507542E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.65, "minX": 1.60507488E12, "maxY": 10.766666666666667, "series": [{"data": [[1.60507512E12, 9.783333333333333], [1.6050753E12, 10.533333333333333], [1.605075E12, 10.766666666666667], [1.60507518E12, 8.983333333333333], [1.60507536E12, 10.433333333333334], [1.60507488E12, 2.65], [1.60507506E12, 9.966666666666667], [1.60507524E12, 10.366666666666667], [1.60507542E12, 3.6666666666666665], [1.60507494E12, 9.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507542E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.65, "minX": 1.60507488E12, "maxY": 10.766666666666667, "series": [{"data": [[1.60507512E12, 9.783333333333333], [1.6050753E12, 10.533333333333333], [1.605075E12, 10.766666666666667], [1.60507518E12, 8.983333333333333], [1.60507536E12, 10.433333333333334], [1.60507488E12, 2.65], [1.60507506E12, 9.966666666666667], [1.60507524E12, 10.366666666666667], [1.60507542E12, 3.6666666666666665], [1.60507494E12, 9.35]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507542E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.65, "minX": 1.60507488E12, "maxY": 10.766666666666667, "series": [{"data": [[1.60507512E12, 9.783333333333333], [1.6050753E12, 10.533333333333333], [1.605075E12, 10.766666666666667], [1.60507518E12, 8.983333333333333], [1.60507536E12, 10.433333333333334], [1.60507488E12, 2.65], [1.60507506E12, 9.966666666666667], [1.60507524E12, 10.366666666666667], [1.60507542E12, 3.6666666666666665], [1.60507494E12, 9.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507542E12, "title": "Total Transactions Per Second"}},
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

