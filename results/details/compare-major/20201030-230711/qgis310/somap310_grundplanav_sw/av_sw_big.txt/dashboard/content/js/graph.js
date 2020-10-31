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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 7119.0, "series": [{"data": [[0.0, 182.0], [0.1, 185.0], [0.2, 189.0], [0.3, 191.0], [0.4, 191.0], [0.5, 192.0], [0.6, 193.0], [0.7, 195.0], [0.8, 196.0], [0.9, 197.0], [1.0, 198.0], [1.1, 199.0], [1.2, 199.0], [1.3, 202.0], [1.4, 202.0], [1.5, 203.0], [1.6, 205.0], [1.7, 206.0], [1.8, 207.0], [1.9, 208.0], [2.0, 209.0], [2.1, 211.0], [2.2, 212.0], [2.3, 213.0], [2.4, 214.0], [2.5, 215.0], [2.6, 215.0], [2.7, 216.0], [2.8, 218.0], [2.9, 218.0], [3.0, 219.0], [3.1, 220.0], [3.2, 220.0], [3.3, 221.0], [3.4, 221.0], [3.5, 222.0], [3.6, 222.0], [3.7, 223.0], [3.8, 223.0], [3.9, 224.0], [4.0, 224.0], [4.1, 225.0], [4.2, 226.0], [4.3, 226.0], [4.4, 227.0], [4.5, 227.0], [4.6, 228.0], [4.7, 229.0], [4.8, 230.0], [4.9, 230.0], [5.0, 231.0], [5.1, 232.0], [5.2, 232.0], [5.3, 233.0], [5.4, 233.0], [5.5, 234.0], [5.6, 235.0], [5.7, 236.0], [5.8, 237.0], [5.9, 238.0], [6.0, 239.0], [6.1, 241.0], [6.2, 243.0], [6.3, 244.0], [6.4, 247.0], [6.5, 249.0], [6.6, 251.0], [6.7, 252.0], [6.8, 255.0], [6.9, 257.0], [7.0, 259.0], [7.1, 262.0], [7.2, 264.0], [7.3, 266.0], [7.4, 268.0], [7.5, 269.0], [7.6, 273.0], [7.7, 276.0], [7.8, 278.0], [7.9, 279.0], [8.0, 280.0], [8.1, 282.0], [8.2, 284.0], [8.3, 285.0], [8.4, 289.0], [8.5, 291.0], [8.6, 295.0], [8.7, 296.0], [8.8, 297.0], [8.9, 299.0], [9.0, 301.0], [9.1, 302.0], [9.2, 304.0], [9.3, 305.0], [9.4, 305.0], [9.5, 306.0], [9.6, 308.0], [9.7, 308.0], [9.8, 309.0], [9.9, 309.0], [10.0, 310.0], [10.1, 311.0], [10.2, 312.0], [10.3, 312.0], [10.4, 313.0], [10.5, 313.0], [10.6, 314.0], [10.7, 315.0], [10.8, 316.0], [10.9, 317.0], [11.0, 318.0], [11.1, 319.0], [11.2, 320.0], [11.3, 321.0], [11.4, 321.0], [11.5, 322.0], [11.6, 322.0], [11.7, 323.0], [11.8, 325.0], [11.9, 326.0], [12.0, 326.0], [12.1, 327.0], [12.2, 328.0], [12.3, 329.0], [12.4, 331.0], [12.5, 332.0], [12.6, 333.0], [12.7, 334.0], [12.8, 335.0], [12.9, 336.0], [13.0, 338.0], [13.1, 340.0], [13.2, 342.0], [13.3, 344.0], [13.4, 346.0], [13.5, 347.0], [13.6, 347.0], [13.7, 349.0], [13.8, 350.0], [13.9, 352.0], [14.0, 354.0], [14.1, 355.0], [14.2, 358.0], [14.3, 360.0], [14.4, 363.0], [14.5, 364.0], [14.6, 367.0], [14.7, 369.0], [14.8, 371.0], [14.9, 374.0], [15.0, 376.0], [15.1, 377.0], [15.2, 378.0], [15.3, 379.0], [15.4, 380.0], [15.5, 382.0], [15.6, 383.0], [15.7, 384.0], [15.8, 386.0], [15.9, 387.0], [16.0, 389.0], [16.1, 389.0], [16.2, 390.0], [16.3, 390.0], [16.4, 393.0], [16.5, 393.0], [16.6, 394.0], [16.7, 395.0], [16.8, 396.0], [16.9, 397.0], [17.0, 398.0], [17.1, 399.0], [17.2, 400.0], [17.3, 402.0], [17.4, 402.0], [17.5, 403.0], [17.6, 404.0], [17.7, 405.0], [17.8, 405.0], [17.9, 407.0], [18.0, 408.0], [18.1, 409.0], [18.2, 410.0], [18.3, 411.0], [18.4, 412.0], [18.5, 413.0], [18.6, 415.0], [18.7, 416.0], [18.8, 417.0], [18.9, 418.0], [19.0, 419.0], [19.1, 420.0], [19.2, 420.0], [19.3, 422.0], [19.4, 423.0], [19.5, 424.0], [19.6, 425.0], [19.7, 426.0], [19.8, 427.0], [19.9, 428.0], [20.0, 428.0], [20.1, 429.0], [20.2, 430.0], [20.3, 431.0], [20.4, 432.0], [20.5, 433.0], [20.6, 434.0], [20.7, 435.0], [20.8, 436.0], [20.9, 437.0], [21.0, 438.0], [21.1, 438.0], [21.2, 439.0], [21.3, 440.0], [21.4, 440.0], [21.5, 441.0], [21.6, 441.0], [21.7, 442.0], [21.8, 442.0], [21.9, 443.0], [22.0, 443.0], [22.1, 445.0], [22.2, 448.0], [22.3, 449.0], [22.4, 450.0], [22.5, 451.0], [22.6, 451.0], [22.7, 452.0], [22.8, 453.0], [22.9, 454.0], [23.0, 454.0], [23.1, 455.0], [23.2, 456.0], [23.3, 457.0], [23.4, 458.0], [23.5, 459.0], [23.6, 459.0], [23.7, 460.0], [23.8, 461.0], [23.9, 462.0], [24.0, 462.0], [24.1, 464.0], [24.2, 466.0], [24.3, 466.0], [24.4, 467.0], [24.5, 468.0], [24.6, 470.0], [24.7, 470.0], [24.8, 471.0], [24.9, 474.0], [25.0, 474.0], [25.1, 475.0], [25.2, 476.0], [25.3, 477.0], [25.4, 477.0], [25.5, 479.0], [25.6, 480.0], [25.7, 481.0], [25.8, 483.0], [25.9, 484.0], [26.0, 484.0], [26.1, 486.0], [26.2, 487.0], [26.3, 488.0], [26.4, 489.0], [26.5, 490.0], [26.6, 491.0], [26.7, 492.0], [26.8, 493.0], [26.9, 495.0], [27.0, 498.0], [27.1, 499.0], [27.2, 500.0], [27.3, 502.0], [27.4, 503.0], [27.5, 505.0], [27.6, 507.0], [27.7, 507.0], [27.8, 509.0], [27.9, 510.0], [28.0, 511.0], [28.1, 513.0], [28.2, 514.0], [28.3, 515.0], [28.4, 516.0], [28.5, 519.0], [28.6, 520.0], [28.7, 521.0], [28.8, 522.0], [28.9, 524.0], [29.0, 526.0], [29.1, 528.0], [29.2, 529.0], [29.3, 530.0], [29.4, 532.0], [29.5, 533.0], [29.6, 534.0], [29.7, 536.0], [29.8, 537.0], [29.9, 539.0], [30.0, 540.0], [30.1, 543.0], [30.2, 543.0], [30.3, 544.0], [30.4, 545.0], [30.5, 546.0], [30.6, 548.0], [30.7, 549.0], [30.8, 550.0], [30.9, 551.0], [31.0, 552.0], [31.1, 553.0], [31.2, 554.0], [31.3, 555.0], [31.4, 555.0], [31.5, 557.0], [31.6, 557.0], [31.7, 559.0], [31.8, 560.0], [31.9, 561.0], [32.0, 561.0], [32.1, 562.0], [32.2, 563.0], [32.3, 564.0], [32.4, 566.0], [32.5, 567.0], [32.6, 568.0], [32.7, 569.0], [32.8, 571.0], [32.9, 572.0], [33.0, 573.0], [33.1, 574.0], [33.2, 575.0], [33.3, 576.0], [33.4, 577.0], [33.5, 578.0], [33.6, 579.0], [33.7, 581.0], [33.8, 582.0], [33.9, 584.0], [34.0, 585.0], [34.1, 586.0], [34.2, 587.0], [34.3, 588.0], [34.4, 589.0], [34.5, 590.0], [34.6, 592.0], [34.7, 593.0], [34.8, 594.0], [34.9, 596.0], [35.0, 597.0], [35.1, 598.0], [35.2, 599.0], [35.3, 600.0], [35.4, 601.0], [35.5, 602.0], [35.6, 603.0], [35.7, 604.0], [35.8, 605.0], [35.9, 606.0], [36.0, 607.0], [36.1, 607.0], [36.2, 609.0], [36.3, 610.0], [36.4, 611.0], [36.5, 613.0], [36.6, 614.0], [36.7, 615.0], [36.8, 616.0], [36.9, 618.0], [37.0, 618.0], [37.1, 620.0], [37.2, 621.0], [37.3, 622.0], [37.4, 623.0], [37.5, 624.0], [37.6, 625.0], [37.7, 626.0], [37.8, 628.0], [37.9, 629.0], [38.0, 629.0], [38.1, 630.0], [38.2, 631.0], [38.3, 632.0], [38.4, 633.0], [38.5, 636.0], [38.6, 639.0], [38.7, 640.0], [38.8, 642.0], [38.9, 643.0], [39.0, 644.0], [39.1, 644.0], [39.2, 645.0], [39.3, 647.0], [39.4, 648.0], [39.5, 649.0], [39.6, 650.0], [39.7, 651.0], [39.8, 652.0], [39.9, 655.0], [40.0, 655.0], [40.1, 658.0], [40.2, 660.0], [40.3, 661.0], [40.4, 662.0], [40.5, 663.0], [40.6, 666.0], [40.7, 667.0], [40.8, 668.0], [40.9, 669.0], [41.0, 671.0], [41.1, 671.0], [41.2, 672.0], [41.3, 674.0], [41.4, 675.0], [41.5, 677.0], [41.6, 679.0], [41.7, 681.0], [41.8, 682.0], [41.9, 682.0], [42.0, 683.0], [42.1, 684.0], [42.2, 686.0], [42.3, 687.0], [42.4, 689.0], [42.5, 690.0], [42.6, 691.0], [42.7, 692.0], [42.8, 694.0], [42.9, 694.0], [43.0, 695.0], [43.1, 696.0], [43.2, 698.0], [43.3, 699.0], [43.4, 701.0], [43.5, 703.0], [43.6, 705.0], [43.7, 707.0], [43.8, 708.0], [43.9, 710.0], [44.0, 712.0], [44.1, 713.0], [44.2, 715.0], [44.3, 717.0], [44.4, 717.0], [44.5, 720.0], [44.6, 721.0], [44.7, 723.0], [44.8, 724.0], [44.9, 725.0], [45.0, 727.0], [45.1, 729.0], [45.2, 731.0], [45.3, 734.0], [45.4, 735.0], [45.5, 738.0], [45.6, 742.0], [45.7, 742.0], [45.8, 744.0], [45.9, 747.0], [46.0, 749.0], [46.1, 751.0], [46.2, 753.0], [46.3, 755.0], [46.4, 758.0], [46.5, 760.0], [46.6, 764.0], [46.7, 767.0], [46.8, 768.0], [46.9, 771.0], [47.0, 774.0], [47.1, 776.0], [47.2, 777.0], [47.3, 779.0], [47.4, 781.0], [47.5, 782.0], [47.6, 786.0], [47.7, 788.0], [47.8, 791.0], [47.9, 792.0], [48.0, 795.0], [48.1, 796.0], [48.2, 800.0], [48.3, 801.0], [48.4, 804.0], [48.5, 807.0], [48.6, 810.0], [48.7, 811.0], [48.8, 813.0], [48.9, 815.0], [49.0, 817.0], [49.1, 818.0], [49.2, 820.0], [49.3, 821.0], [49.4, 823.0], [49.5, 825.0], [49.6, 827.0], [49.7, 829.0], [49.8, 833.0], [49.9, 837.0], [50.0, 838.0], [50.1, 840.0], [50.2, 843.0], [50.3, 845.0], [50.4, 847.0], [50.5, 849.0], [50.6, 851.0], [50.7, 852.0], [50.8, 854.0], [50.9, 856.0], [51.0, 858.0], [51.1, 860.0], [51.2, 862.0], [51.3, 869.0], [51.4, 872.0], [51.5, 873.0], [51.6, 877.0], [51.7, 878.0], [51.8, 879.0], [51.9, 881.0], [52.0, 883.0], [52.1, 885.0], [52.2, 889.0], [52.3, 891.0], [52.4, 893.0], [52.5, 895.0], [52.6, 897.0], [52.7, 898.0], [52.8, 901.0], [52.9, 904.0], [53.0, 907.0], [53.1, 909.0], [53.2, 911.0], [53.3, 913.0], [53.4, 915.0], [53.5, 916.0], [53.6, 918.0], [53.7, 921.0], [53.8, 925.0], [53.9, 927.0], [54.0, 929.0], [54.1, 930.0], [54.2, 933.0], [54.3, 935.0], [54.4, 936.0], [54.5, 939.0], [54.6, 940.0], [54.7, 943.0], [54.8, 946.0], [54.9, 948.0], [55.0, 951.0], [55.1, 953.0], [55.2, 956.0], [55.3, 957.0], [55.4, 958.0], [55.5, 959.0], [55.6, 960.0], [55.7, 962.0], [55.8, 963.0], [55.9, 966.0], [56.0, 969.0], [56.1, 971.0], [56.2, 973.0], [56.3, 975.0], [56.4, 978.0], [56.5, 981.0], [56.6, 983.0], [56.7, 986.0], [56.8, 987.0], [56.9, 988.0], [57.0, 991.0], [57.1, 993.0], [57.2, 994.0], [57.3, 995.0], [57.4, 997.0], [57.5, 999.0], [57.6, 999.0], [57.7, 1000.0], [57.8, 1002.0], [57.9, 1005.0], [58.0, 1008.0], [58.1, 1010.0], [58.2, 1013.0], [58.3, 1015.0], [58.4, 1017.0], [58.5, 1018.0], [58.6, 1020.0], [58.7, 1021.0], [58.8, 1023.0], [58.9, 1025.0], [59.0, 1026.0], [59.1, 1027.0], [59.2, 1029.0], [59.3, 1031.0], [59.4, 1033.0], [59.5, 1035.0], [59.6, 1036.0], [59.7, 1039.0], [59.8, 1041.0], [59.9, 1042.0], [60.0, 1043.0], [60.1, 1045.0], [60.2, 1047.0], [60.3, 1048.0], [60.4, 1049.0], [60.5, 1051.0], [60.6, 1054.0], [60.7, 1056.0], [60.8, 1058.0], [60.9, 1060.0], [61.0, 1062.0], [61.1, 1064.0], [61.2, 1066.0], [61.3, 1067.0], [61.4, 1068.0], [61.5, 1070.0], [61.6, 1073.0], [61.7, 1075.0], [61.8, 1077.0], [61.9, 1077.0], [62.0, 1082.0], [62.1, 1083.0], [62.2, 1084.0], [62.3, 1087.0], [62.4, 1090.0], [62.5, 1093.0], [62.6, 1095.0], [62.7, 1097.0], [62.8, 1098.0], [62.9, 1101.0], [63.0, 1106.0], [63.1, 1108.0], [63.2, 1111.0], [63.3, 1112.0], [63.4, 1114.0], [63.5, 1117.0], [63.6, 1121.0], [63.7, 1123.0], [63.8, 1125.0], [63.9, 1126.0], [64.0, 1128.0], [64.1, 1131.0], [64.2, 1133.0], [64.3, 1136.0], [64.4, 1138.0], [64.5, 1144.0], [64.6, 1147.0], [64.7, 1148.0], [64.8, 1151.0], [64.9, 1152.0], [65.0, 1152.0], [65.1, 1154.0], [65.2, 1156.0], [65.3, 1158.0], [65.4, 1160.0], [65.5, 1163.0], [65.6, 1166.0], [65.7, 1168.0], [65.8, 1170.0], [65.9, 1171.0], [66.0, 1173.0], [66.1, 1175.0], [66.2, 1177.0], [66.3, 1178.0], [66.4, 1181.0], [66.5, 1182.0], [66.6, 1184.0], [66.7, 1187.0], [66.8, 1189.0], [66.9, 1192.0], [67.0, 1193.0], [67.1, 1195.0], [67.2, 1196.0], [67.3, 1198.0], [67.4, 1199.0], [67.5, 1201.0], [67.6, 1203.0], [67.7, 1204.0], [67.8, 1206.0], [67.9, 1209.0], [68.0, 1210.0], [68.1, 1212.0], [68.2, 1214.0], [68.3, 1217.0], [68.4, 1220.0], [68.5, 1222.0], [68.6, 1223.0], [68.7, 1224.0], [68.8, 1225.0], [68.9, 1228.0], [69.0, 1231.0], [69.1, 1232.0], [69.2, 1233.0], [69.3, 1235.0], [69.4, 1237.0], [69.5, 1239.0], [69.6, 1241.0], [69.7, 1243.0], [69.8, 1245.0], [69.9, 1247.0], [70.0, 1249.0], [70.1, 1252.0], [70.2, 1256.0], [70.3, 1258.0], [70.4, 1263.0], [70.5, 1264.0], [70.6, 1267.0], [70.7, 1270.0], [70.8, 1275.0], [70.9, 1276.0], [71.0, 1279.0], [71.1, 1282.0], [71.2, 1283.0], [71.3, 1284.0], [71.4, 1286.0], [71.5, 1291.0], [71.6, 1295.0], [71.7, 1297.0], [71.8, 1298.0], [71.9, 1300.0], [72.0, 1302.0], [72.1, 1304.0], [72.2, 1307.0], [72.3, 1307.0], [72.4, 1310.0], [72.5, 1313.0], [72.6, 1315.0], [72.7, 1318.0], [72.8, 1319.0], [72.9, 1321.0], [73.0, 1322.0], [73.1, 1325.0], [73.2, 1326.0], [73.3, 1329.0], [73.4, 1330.0], [73.5, 1331.0], [73.6, 1333.0], [73.7, 1334.0], [73.8, 1336.0], [73.9, 1337.0], [74.0, 1338.0], [74.1, 1343.0], [74.2, 1345.0], [74.3, 1347.0], [74.4, 1348.0], [74.5, 1351.0], [74.6, 1354.0], [74.7, 1355.0], [74.8, 1356.0], [74.9, 1358.0], [75.0, 1361.0], [75.1, 1362.0], [75.2, 1366.0], [75.3, 1368.0], [75.4, 1369.0], [75.5, 1373.0], [75.6, 1375.0], [75.7, 1376.0], [75.8, 1378.0], [75.9, 1381.0], [76.0, 1382.0], [76.1, 1384.0], [76.2, 1386.0], [76.3, 1388.0], [76.4, 1390.0], [76.5, 1393.0], [76.6, 1396.0], [76.7, 1399.0], [76.8, 1403.0], [76.9, 1404.0], [77.0, 1406.0], [77.1, 1409.0], [77.2, 1409.0], [77.3, 1412.0], [77.4, 1415.0], [77.5, 1417.0], [77.6, 1417.0], [77.7, 1419.0], [77.8, 1420.0], [77.9, 1422.0], [78.0, 1423.0], [78.1, 1424.0], [78.2, 1426.0], [78.3, 1426.0], [78.4, 1428.0], [78.5, 1431.0], [78.6, 1433.0], [78.7, 1435.0], [78.8, 1437.0], [78.9, 1440.0], [79.0, 1441.0], [79.1, 1444.0], [79.2, 1446.0], [79.3, 1448.0], [79.4, 1449.0], [79.5, 1452.0], [79.6, 1453.0], [79.7, 1455.0], [79.8, 1457.0], [79.9, 1459.0], [80.0, 1461.0], [80.1, 1464.0], [80.2, 1465.0], [80.3, 1467.0], [80.4, 1471.0], [80.5, 1473.0], [80.6, 1478.0], [80.7, 1481.0], [80.8, 1484.0], [80.9, 1484.0], [81.0, 1487.0], [81.1, 1490.0], [81.2, 1492.0], [81.3, 1493.0], [81.4, 1499.0], [81.5, 1500.0], [81.6, 1503.0], [81.7, 1507.0], [81.8, 1508.0], [81.9, 1512.0], [82.0, 1514.0], [82.1, 1518.0], [82.2, 1524.0], [82.3, 1527.0], [82.4, 1529.0], [82.5, 1530.0], [82.6, 1533.0], [82.7, 1536.0], [82.8, 1539.0], [82.9, 1541.0], [83.0, 1543.0], [83.1, 1546.0], [83.2, 1550.0], [83.3, 1551.0], [83.4, 1556.0], [83.5, 1557.0], [83.6, 1561.0], [83.7, 1564.0], [83.8, 1567.0], [83.9, 1571.0], [84.0, 1577.0], [84.1, 1580.0], [84.2, 1582.0], [84.3, 1588.0], [84.4, 1596.0], [84.5, 1599.0], [84.6, 1603.0], [84.7, 1606.0], [84.8, 1609.0], [84.9, 1613.0], [85.0, 1616.0], [85.1, 1621.0], [85.2, 1624.0], [85.3, 1630.0], [85.4, 1633.0], [85.5, 1637.0], [85.6, 1642.0], [85.7, 1646.0], [85.8, 1650.0], [85.9, 1655.0], [86.0, 1656.0], [86.1, 1658.0], [86.2, 1661.0], [86.3, 1662.0], [86.4, 1666.0], [86.5, 1674.0], [86.6, 1681.0], [86.7, 1687.0], [86.8, 1690.0], [86.9, 1696.0], [87.0, 1698.0], [87.1, 1700.0], [87.2, 1706.0], [87.3, 1709.0], [87.4, 1714.0], [87.5, 1716.0], [87.6, 1719.0], [87.7, 1722.0], [87.8, 1724.0], [87.9, 1729.0], [88.0, 1733.0], [88.1, 1736.0], [88.2, 1742.0], [88.3, 1745.0], [88.4, 1753.0], [88.5, 1757.0], [88.6, 1761.0], [88.7, 1764.0], [88.8, 1767.0], [88.9, 1773.0], [89.0, 1780.0], [89.1, 1788.0], [89.2, 1793.0], [89.3, 1796.0], [89.4, 1804.0], [89.5, 1807.0], [89.6, 1813.0], [89.7, 1816.0], [89.8, 1823.0], [89.9, 1829.0], [90.0, 1834.0], [90.1, 1844.0], [90.2, 1855.0], [90.3, 1859.0], [90.4, 1872.0], [90.5, 1875.0], [90.6, 1880.0], [90.7, 1883.0], [90.8, 1888.0], [90.9, 1893.0], [91.0, 1899.0], [91.1, 1914.0], [91.2, 1919.0], [91.3, 1921.0], [91.4, 1928.0], [91.5, 1935.0], [91.6, 1945.0], [91.7, 1948.0], [91.8, 1956.0], [91.9, 1967.0], [92.0, 1978.0], [92.1, 1982.0], [92.2, 1989.0], [92.3, 1998.0], [92.4, 2004.0], [92.5, 2009.0], [92.6, 2019.0], [92.7, 2025.0], [92.8, 2043.0], [92.9, 2055.0], [93.0, 2062.0], [93.1, 2075.0], [93.2, 2079.0], [93.3, 2083.0], [93.4, 2087.0], [93.5, 2095.0], [93.6, 2105.0], [93.7, 2117.0], [93.8, 2123.0], [93.9, 2134.0], [94.0, 2144.0], [94.1, 2152.0], [94.2, 2162.0], [94.3, 2180.0], [94.4, 2189.0], [94.5, 2203.0], [94.6, 2206.0], [94.7, 2227.0], [94.8, 2242.0], [94.9, 2254.0], [95.0, 2264.0], [95.1, 2282.0], [95.2, 2292.0], [95.3, 2311.0], [95.4, 2316.0], [95.5, 2324.0], [95.6, 2335.0], [95.7, 2354.0], [95.8, 2377.0], [95.9, 2390.0], [96.0, 2399.0], [96.1, 2409.0], [96.2, 2427.0], [96.3, 2434.0], [96.4, 2447.0], [96.5, 2487.0], [96.6, 2498.0], [96.7, 2520.0], [96.8, 2547.0], [96.9, 2586.0], [97.0, 2600.0], [97.1, 2613.0], [97.2, 2629.0], [97.3, 2648.0], [97.4, 2670.0], [97.5, 2686.0], [97.6, 2711.0], [97.7, 2724.0], [97.8, 2771.0], [97.9, 2797.0], [98.0, 2810.0], [98.1, 2830.0], [98.2, 2864.0], [98.3, 2899.0], [98.4, 2935.0], [98.5, 3020.0], [98.6, 3065.0], [98.7, 3089.0], [98.8, 3134.0], [98.9, 3164.0], [99.0, 3244.0], [99.1, 3283.0], [99.2, 3372.0], [99.3, 3439.0], [99.4, 3503.0], [99.5, 3702.0], [99.6, 3843.0], [99.7, 4243.0], [99.8, 4571.0], [99.9, 4960.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 518.0, "series": [{"data": [[600.0, 417.0], [700.0, 252.0], [800.0, 236.0], [900.0, 254.0], [1000.0, 270.0], [1100.0, 238.0], [1200.0, 232.0], [1300.0, 251.0], [1400.0, 246.0], [1500.0, 158.0], [1600.0, 134.0], [1700.0, 115.0], [1800.0, 88.0], [1900.0, 69.0], [2000.0, 64.0], [2100.0, 47.0], [2200.0, 40.0], [2300.0, 40.0], [2400.0, 31.0], [2500.0, 20.0], [2600.0, 30.0], [2700.0, 18.0], [2800.0, 20.0], [2900.0, 9.0], [3000.0, 12.0], [3100.0, 11.0], [3300.0, 7.0], [3200.0, 10.0], [3400.0, 7.0], [3500.0, 4.0], [3700.0, 5.0], [3600.0, 2.0], [3800.0, 1.0], [3900.0, 1.0], [4100.0, 3.0], [4300.0, 3.0], [4200.0, 1.0], [4500.0, 2.0], [4600.0, 2.0], [4800.0, 1.0], [4700.0, 1.0], [4900.0, 1.0], [5300.0, 1.0], [5500.0, 1.0], [5700.0, 2.0], [7100.0, 1.0], [100.0, 63.0], [200.0, 401.0], [300.0, 426.0], [400.0, 518.0], [500.0, 424.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 959.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2819.0, "series": [{"data": [[0.0, 1412.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2819.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 959.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.621848739495796, "minX": 1.60410024E12, "maxY": 10.0, "series": [{"data": [[1.60410042E12, 10.0], [1.60410024E12, 10.0], [1.60410072E12, 10.0], [1.6041003E12, 10.0], [1.60410078E12, 9.621848739495796], [1.6041006E12, 10.0], [1.60410066E12, 10.0], [1.60410048E12, 10.0], [1.60410054E12, 10.0], [1.60410036E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410078E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 598.0, "minX": 1.0, "maxY": 2561.0, "series": [{"data": [[8.0, 1263.0], [4.0, 598.0], [2.0, 978.0], [1.0, 2561.0], [9.0, 2388.0], [10.0, 995.6794055201703], [5.0, 2107.0], [6.0, 811.0], [3.0, 837.0], [7.0, 1252.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 996.4181117533724]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 898.8, "minX": 1.60410024E12, "maxY": 3197844.7666666666, "series": [{"data": [[1.60410042E12, 3072166.6], [1.60410024E12, 1186450.5166666666], [1.60410072E12, 2715698.6], [1.6041003E12, 2400948.2333333334], [1.60410078E12, 552155.6], [1.6041006E12, 2355855.35], [1.60410066E12, 3197844.7666666666], [1.60410048E12, 2828813.816666667], [1.60410054E12, 2736657.05], [1.60410036E12, 2925976.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60410042E12, 4584.033333333334], [1.60410024E12, 1168.0666666666666], [1.60410072E12, 4740.683333333333], [1.6041003E12, 4150.983333333334], [1.60410078E12, 898.8], [1.6041006E12, 4543.116666666667], [1.60410066E12, 4957.566666666667], [1.60410048E12, 4520.816666666667], [1.60410054E12, 3974.95], [1.60410036E12, 5038.316666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410078E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 882.342688330871, "minX": 1.60410024E12, "maxY": 1397.5632911392408, "series": [{"data": [[1.60410042E12, 994.0298507462682], [1.60410024E12, 1397.5632911392408], [1.60410072E12, 956.7683706070283], [1.6041003E12, 1048.8944636678195], [1.60410078E12, 1255.5378151260504], [1.6041006E12, 962.905144694534], [1.60410066E12, 918.4113149847092], [1.60410048E12, 1002.5642737896499], [1.60410054E12, 1081.4765342960295], [1.60410036E12, 882.342688330871]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410078E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 880.1757754800587, "minX": 1.60410024E12, "maxY": 1394.2405063291128, "series": [{"data": [[1.60410042E12, 991.7230514096193], [1.60410024E12, 1394.2405063291128], [1.60410072E12, 954.9408945686905], [1.6041003E12, 1047.1435986159174], [1.60410078E12, 1253.6890756302519], [1.6041006E12, 961.3810289389074], [1.60410066E12, 916.5366972477057], [1.60410048E12, 1000.5258764607681], [1.60410054E12, 1079.8682310469328], [1.60410036E12, 880.1757754800587]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410078E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60410024E12, "maxY": 0.5443037974683543, "series": [{"data": [[1.60410042E12, 0.019900497512437807], [1.60410024E12, 0.5443037974683543], [1.60410072E12, 0.012779552715654953], [1.6041003E12, 0.025951557093425587], [1.60410078E12, 0.0], [1.6041006E12, 0.027331189710610913], [1.60410066E12, 0.02140672782874616], [1.60410048E12, 0.020033388981636067], [1.60410054E12, 0.018050541516245473], [1.60410036E12, 0.011816838995568684]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410078E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.60410024E12, "maxY": 7119.0, "series": [{"data": [[1.60410042E12, 3360.0], [1.60410024E12, 4534.0], [1.60410072E12, 4143.0], [1.6041003E12, 5778.0], [1.60410078E12, 3378.0], [1.6041006E12, 3735.0], [1.60410066E12, 3248.0], [1.60410048E12, 4571.0], [1.60410054E12, 7119.0], [1.60410036E12, 4645.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60410042E12, 196.0], [1.60410024E12, 305.6199992418289], [1.60410072E12, 205.1439988040924], [1.6041003E12, 218.42199972391128], [1.60410078E12, 221.8799996852875], [1.6041006E12, 197.60699985146522], [1.60410066E12, 186.78999968767167], [1.60410048E12, 193.7999997138977], [1.60410054E12, 219.98499960303306], [1.60410036E12, 199.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60410042E12, 196.0], [1.60410024E12, 308.4820003032684], [1.60410072E12, 209.45110041856765], [1.6041003E12, 219.46420011043548], [1.60410078E12, 223.06800012588502], [1.6041006E12, 198.1677000594139], [1.60410066E12, 187.0], [1.60410048E12, 194.88000011444092], [1.60410054E12, 220.0], [1.60410036E12, 199.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60410042E12, 196.0], [1.60410024E12, 307.20999962091446], [1.60410072E12, 207.65199940204621], [1.6041003E12, 219.00099986195565], [1.60410078E12, 222.53999984264374], [1.6041006E12, 197.91849992573262], [1.60410066E12, 187.0], [1.60410048E12, 194.39999985694885], [1.60410054E12, 220.0], [1.60410036E12, 199.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60410042E12, 191.0], [1.60410024E12, 297.0], [1.60410072E12, 183.0], [1.6041003E12, 199.0], [1.60410078E12, 221.0], [1.6041006E12, 191.0], [1.60410066E12, 182.0], [1.60410048E12, 187.0], [1.60410054E12, 199.0], [1.60410036E12, 193.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60410042E12, 907.0], [1.60410024E12, 1273.0], [1.60410072E12, 756.5], [1.6041003E12, 930.0], [1.60410078E12, 1164.0], [1.6041006E12, 807.0], [1.60410066E12, 692.0], [1.60410048E12, 852.0], [1.60410054E12, 935.0], [1.60410036E12, 645.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410078E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 414.5, "minX": 1.0, "maxY": 2642.5, "series": [{"data": [[2.0, 2069.5], [3.0, 1449.0], [4.0, 1778.5], [5.0, 1364.5], [6.0, 1172.5], [7.0, 1161.0], [8.0, 1099.5], [9.0, 1047.5], [10.0, 987.5], [11.0, 886.0], [12.0, 769.5], [13.0, 731.0], [14.0, 616.0], [15.0, 570.0], [1.0, 2642.5], [16.0, 596.5], [17.0, 457.0], [18.0, 467.5], [19.0, 453.5], [20.0, 435.0], [21.0, 430.0], [22.0, 433.0], [23.0, 422.0], [24.0, 444.0], [26.0, 419.5], [27.0, 414.5], [28.0, 416.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 414.5, "minX": 1.0, "maxY": 2633.5, "series": [{"data": [[2.0, 2062.5], [3.0, 1447.0], [4.0, 1776.0], [5.0, 1358.5], [6.0, 1171.5], [7.0, 1158.5], [8.0, 1097.0], [9.0, 1044.5], [10.0, 986.5], [11.0, 884.0], [12.0, 768.5], [13.0, 731.0], [14.0, 616.0], [15.0, 569.0], [1.0, 2633.5], [16.0, 595.5], [17.0, 457.0], [18.0, 467.5], [19.0, 453.0], [20.0, 435.0], [21.0, 430.0], [22.0, 432.5], [23.0, 422.0], [24.0, 444.0], [26.0, 419.0], [27.0, 414.5], [28.0, 416.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8166666666666667, "minX": 1.60410024E12, "maxY": 11.283333333333333, "series": [{"data": [[1.60410042E12, 10.05], [1.60410024E12, 2.8], [1.60410072E12, 10.433333333333334], [1.6041003E12, 9.633333333333333], [1.60410078E12, 1.8166666666666667], [1.6041006E12, 10.366666666666667], [1.60410066E12, 10.9], [1.60410048E12, 9.983333333333333], [1.60410054E12, 9.233333333333333], [1.60410036E12, 11.283333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410078E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.60410024E12, "maxY": 11.283333333333333, "series": [{"data": [[1.60410042E12, 10.05], [1.60410024E12, 2.6333333333333333], [1.60410072E12, 10.433333333333334], [1.6041003E12, 9.633333333333333], [1.60410078E12, 1.9833333333333334], [1.6041006E12, 10.366666666666667], [1.60410066E12, 10.9], [1.60410048E12, 9.983333333333333], [1.60410054E12, 9.233333333333333], [1.60410036E12, 11.283333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410078E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.60410024E12, "maxY": 11.283333333333333, "series": [{"data": [[1.60410042E12, 10.05], [1.60410024E12, 2.6333333333333333], [1.60410072E12, 10.433333333333334], [1.6041003E12, 9.633333333333333], [1.60410078E12, 1.9833333333333334], [1.6041006E12, 10.366666666666667], [1.60410066E12, 10.9], [1.60410048E12, 9.983333333333333], [1.60410054E12, 9.233333333333333], [1.60410036E12, 11.283333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410078E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.60410024E12, "maxY": 11.283333333333333, "series": [{"data": [[1.60410042E12, 10.05], [1.60410024E12, 2.6333333333333333], [1.60410072E12, 10.433333333333334], [1.6041003E12, 9.633333333333333], [1.60410078E12, 1.9833333333333334], [1.6041006E12, 10.366666666666667], [1.60410066E12, 10.9], [1.60410048E12, 9.983333333333333], [1.60410054E12, 9.233333333333333], [1.60410036E12, 11.283333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410078E12, "title": "Total Transactions Per Second"}},
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

