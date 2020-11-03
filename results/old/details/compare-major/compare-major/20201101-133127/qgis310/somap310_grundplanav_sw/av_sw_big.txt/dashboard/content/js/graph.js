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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 6205.0, "series": [{"data": [[0.0, 184.0], [0.1, 189.0], [0.2, 194.0], [0.3, 196.0], [0.4, 198.0], [0.5, 199.0], [0.6, 202.0], [0.7, 204.0], [0.8, 205.0], [0.9, 206.0], [1.0, 208.0], [1.1, 208.0], [1.2, 210.0], [1.3, 212.0], [1.4, 213.0], [1.5, 215.0], [1.6, 215.0], [1.7, 216.0], [1.8, 216.0], [1.9, 217.0], [2.0, 218.0], [2.1, 219.0], [2.2, 219.0], [2.3, 220.0], [2.4, 220.0], [2.5, 221.0], [2.6, 222.0], [2.7, 222.0], [2.8, 223.0], [2.9, 223.0], [3.0, 224.0], [3.1, 224.0], [3.2, 225.0], [3.3, 226.0], [3.4, 226.0], [3.5, 227.0], [3.6, 228.0], [3.7, 229.0], [3.8, 229.0], [3.9, 230.0], [4.0, 230.0], [4.1, 230.0], [4.2, 231.0], [4.3, 232.0], [4.4, 233.0], [4.5, 234.0], [4.6, 235.0], [4.7, 236.0], [4.8, 237.0], [4.9, 238.0], [5.0, 239.0], [5.1, 239.0], [5.2, 240.0], [5.3, 241.0], [5.4, 242.0], [5.5, 242.0], [5.6, 244.0], [5.7, 244.0], [5.8, 246.0], [5.9, 248.0], [6.0, 250.0], [6.1, 251.0], [6.2, 252.0], [6.3, 254.0], [6.4, 257.0], [6.5, 260.0], [6.6, 263.0], [6.7, 265.0], [6.8, 266.0], [6.9, 269.0], [7.0, 271.0], [7.1, 273.0], [7.2, 275.0], [7.3, 276.0], [7.4, 278.0], [7.5, 281.0], [7.6, 283.0], [7.7, 285.0], [7.8, 288.0], [7.9, 291.0], [8.0, 292.0], [8.1, 295.0], [8.2, 297.0], [8.3, 299.0], [8.4, 301.0], [8.5, 302.0], [8.6, 303.0], [8.7, 305.0], [8.8, 307.0], [8.9, 308.0], [9.0, 309.0], [9.1, 310.0], [9.2, 311.0], [9.3, 312.0], [9.4, 313.0], [9.5, 315.0], [9.6, 315.0], [9.7, 316.0], [9.8, 317.0], [9.9, 318.0], [10.0, 319.0], [10.1, 320.0], [10.2, 320.0], [10.3, 320.0], [10.4, 321.0], [10.5, 322.0], [10.6, 322.0], [10.7, 323.0], [10.8, 324.0], [10.9, 325.0], [11.0, 326.0], [11.1, 327.0], [11.2, 328.0], [11.3, 329.0], [11.4, 330.0], [11.5, 331.0], [11.6, 333.0], [11.7, 333.0], [11.8, 335.0], [11.9, 335.0], [12.0, 338.0], [12.1, 339.0], [12.2, 341.0], [12.3, 341.0], [12.4, 342.0], [12.5, 344.0], [12.6, 345.0], [12.7, 346.0], [12.8, 349.0], [12.9, 349.0], [13.0, 350.0], [13.1, 352.0], [13.2, 352.0], [13.3, 354.0], [13.4, 356.0], [13.5, 358.0], [13.6, 359.0], [13.7, 362.0], [13.8, 365.0], [13.9, 366.0], [14.0, 370.0], [14.1, 372.0], [14.2, 372.0], [14.3, 374.0], [14.4, 375.0], [14.5, 377.0], [14.6, 378.0], [14.7, 379.0], [14.8, 381.0], [14.9, 382.0], [15.0, 383.0], [15.1, 384.0], [15.2, 386.0], [15.3, 388.0], [15.4, 389.0], [15.5, 391.0], [15.6, 391.0], [15.7, 392.0], [15.8, 394.0], [15.9, 395.0], [16.0, 396.0], [16.1, 397.0], [16.2, 398.0], [16.3, 399.0], [16.4, 401.0], [16.5, 402.0], [16.6, 403.0], [16.7, 403.0], [16.8, 404.0], [16.9, 405.0], [17.0, 406.0], [17.1, 407.0], [17.2, 408.0], [17.3, 409.0], [17.4, 410.0], [17.5, 411.0], [17.6, 413.0], [17.7, 414.0], [17.8, 415.0], [17.9, 417.0], [18.0, 418.0], [18.1, 418.0], [18.2, 419.0], [18.3, 420.0], [18.4, 420.0], [18.5, 422.0], [18.6, 422.0], [18.7, 423.0], [18.8, 425.0], [18.9, 426.0], [19.0, 427.0], [19.1, 428.0], [19.2, 429.0], [19.3, 430.0], [19.4, 431.0], [19.5, 432.0], [19.6, 433.0], [19.7, 434.0], [19.8, 434.0], [19.9, 435.0], [20.0, 436.0], [20.1, 437.0], [20.2, 438.0], [20.3, 439.0], [20.4, 440.0], [20.5, 441.0], [20.6, 441.0], [20.7, 442.0], [20.8, 442.0], [20.9, 443.0], [21.0, 444.0], [21.1, 445.0], [21.2, 446.0], [21.3, 447.0], [21.4, 448.0], [21.5, 449.0], [21.6, 450.0], [21.7, 452.0], [21.8, 452.0], [21.9, 453.0], [22.0, 454.0], [22.1, 455.0], [22.2, 456.0], [22.3, 456.0], [22.4, 457.0], [22.5, 458.0], [22.6, 459.0], [22.7, 460.0], [22.8, 461.0], [22.9, 462.0], [23.0, 463.0], [23.1, 463.0], [23.2, 464.0], [23.3, 465.0], [23.4, 467.0], [23.5, 467.0], [23.6, 468.0], [23.7, 469.0], [23.8, 470.0], [23.9, 471.0], [24.0, 472.0], [24.1, 473.0], [24.2, 475.0], [24.3, 478.0], [24.4, 478.0], [24.5, 479.0], [24.6, 480.0], [24.7, 481.0], [24.8, 482.0], [24.9, 483.0], [25.0, 483.0], [25.1, 483.0], [25.2, 484.0], [25.3, 487.0], [25.4, 488.0], [25.5, 490.0], [25.6, 491.0], [25.7, 493.0], [25.8, 494.0], [25.9, 496.0], [26.0, 496.0], [26.1, 499.0], [26.2, 501.0], [26.3, 502.0], [26.4, 504.0], [26.5, 506.0], [26.6, 507.0], [26.7, 509.0], [26.8, 510.0], [26.9, 511.0], [27.0, 512.0], [27.1, 513.0], [27.2, 515.0], [27.3, 515.0], [27.4, 517.0], [27.5, 519.0], [27.6, 523.0], [27.7, 523.0], [27.8, 524.0], [27.9, 525.0], [28.0, 527.0], [28.1, 528.0], [28.2, 529.0], [28.3, 530.0], [28.4, 530.0], [28.5, 532.0], [28.6, 533.0], [28.7, 535.0], [28.8, 536.0], [28.9, 537.0], [29.0, 538.0], [29.1, 539.0], [29.2, 540.0], [29.3, 542.0], [29.4, 542.0], [29.5, 543.0], [29.6, 544.0], [29.7, 546.0], [29.8, 547.0], [29.9, 549.0], [30.0, 549.0], [30.1, 550.0], [30.2, 551.0], [30.3, 552.0], [30.4, 554.0], [30.5, 554.0], [30.6, 556.0], [30.7, 558.0], [30.8, 559.0], [30.9, 560.0], [31.0, 562.0], [31.1, 564.0], [31.2, 564.0], [31.3, 565.0], [31.4, 566.0], [31.5, 567.0], [31.6, 569.0], [31.7, 570.0], [31.8, 571.0], [31.9, 573.0], [32.0, 574.0], [32.1, 575.0], [32.2, 577.0], [32.3, 578.0], [32.4, 579.0], [32.5, 581.0], [32.6, 583.0], [32.7, 584.0], [32.8, 586.0], [32.9, 587.0], [33.0, 588.0], [33.1, 589.0], [33.2, 592.0], [33.3, 592.0], [33.4, 594.0], [33.5, 594.0], [33.6, 595.0], [33.7, 596.0], [33.8, 597.0], [33.9, 598.0], [34.0, 600.0], [34.1, 602.0], [34.2, 603.0], [34.3, 605.0], [34.4, 607.0], [34.5, 608.0], [34.6, 609.0], [34.7, 611.0], [34.8, 612.0], [34.9, 613.0], [35.0, 614.0], [35.1, 615.0], [35.2, 616.0], [35.3, 617.0], [35.4, 619.0], [35.5, 621.0], [35.6, 622.0], [35.7, 623.0], [35.8, 624.0], [35.9, 624.0], [36.0, 626.0], [36.1, 627.0], [36.2, 627.0], [36.3, 628.0], [36.4, 629.0], [36.5, 630.0], [36.6, 631.0], [36.7, 633.0], [36.8, 634.0], [36.9, 637.0], [37.0, 638.0], [37.1, 638.0], [37.2, 640.0], [37.3, 641.0], [37.4, 643.0], [37.5, 644.0], [37.6, 644.0], [37.7, 645.0], [37.8, 646.0], [37.9, 647.0], [38.0, 648.0], [38.1, 649.0], [38.2, 650.0], [38.3, 651.0], [38.4, 652.0], [38.5, 654.0], [38.6, 657.0], [38.7, 659.0], [38.8, 660.0], [38.9, 663.0], [39.0, 664.0], [39.1, 665.0], [39.2, 666.0], [39.3, 668.0], [39.4, 668.0], [39.5, 670.0], [39.6, 672.0], [39.7, 672.0], [39.8, 674.0], [39.9, 677.0], [40.0, 678.0], [40.1, 679.0], [40.2, 680.0], [40.3, 681.0], [40.4, 685.0], [40.5, 685.0], [40.6, 687.0], [40.7, 688.0], [40.8, 690.0], [40.9, 691.0], [41.0, 693.0], [41.1, 694.0], [41.2, 695.0], [41.3, 697.0], [41.4, 698.0], [41.5, 699.0], [41.6, 702.0], [41.7, 702.0], [41.8, 703.0], [41.9, 704.0], [42.0, 706.0], [42.1, 708.0], [42.2, 711.0], [42.3, 712.0], [42.4, 715.0], [42.5, 716.0], [42.6, 717.0], [42.7, 719.0], [42.8, 719.0], [42.9, 721.0], [43.0, 724.0], [43.1, 727.0], [43.2, 728.0], [43.3, 729.0], [43.4, 731.0], [43.5, 733.0], [43.6, 734.0], [43.7, 735.0], [43.8, 736.0], [43.9, 736.0], [44.0, 738.0], [44.1, 739.0], [44.2, 741.0], [44.3, 744.0], [44.4, 745.0], [44.5, 746.0], [44.6, 747.0], [44.7, 750.0], [44.8, 752.0], [44.9, 755.0], [45.0, 758.0], [45.1, 760.0], [45.2, 763.0], [45.3, 767.0], [45.4, 768.0], [45.5, 769.0], [45.6, 772.0], [45.7, 774.0], [45.8, 775.0], [45.9, 778.0], [46.0, 779.0], [46.1, 781.0], [46.2, 783.0], [46.3, 785.0], [46.4, 787.0], [46.5, 791.0], [46.6, 794.0], [46.7, 795.0], [46.8, 797.0], [46.9, 799.0], [47.0, 799.0], [47.1, 803.0], [47.2, 805.0], [47.3, 806.0], [47.4, 808.0], [47.5, 810.0], [47.6, 810.0], [47.7, 813.0], [47.8, 814.0], [47.9, 817.0], [48.0, 819.0], [48.1, 822.0], [48.2, 824.0], [48.3, 825.0], [48.4, 828.0], [48.5, 831.0], [48.6, 831.0], [48.7, 833.0], [48.8, 835.0], [48.9, 837.0], [49.0, 839.0], [49.1, 840.0], [49.2, 843.0], [49.3, 845.0], [49.4, 847.0], [49.5, 852.0], [49.6, 853.0], [49.7, 856.0], [49.8, 857.0], [49.9, 859.0], [50.0, 861.0], [50.1, 863.0], [50.2, 864.0], [50.3, 866.0], [50.4, 869.0], [50.5, 871.0], [50.6, 874.0], [50.7, 877.0], [50.8, 881.0], [50.9, 883.0], [51.0, 884.0], [51.1, 886.0], [51.2, 889.0], [51.3, 891.0], [51.4, 892.0], [51.5, 897.0], [51.6, 899.0], [51.7, 901.0], [51.8, 902.0], [51.9, 904.0], [52.0, 906.0], [52.1, 909.0], [52.2, 914.0], [52.3, 917.0], [52.4, 920.0], [52.5, 923.0], [52.6, 925.0], [52.7, 926.0], [52.8, 929.0], [52.9, 931.0], [53.0, 933.0], [53.1, 934.0], [53.2, 937.0], [53.3, 939.0], [53.4, 944.0], [53.5, 946.0], [53.6, 948.0], [53.7, 953.0], [53.8, 956.0], [53.9, 958.0], [54.0, 960.0], [54.1, 962.0], [54.2, 964.0], [54.3, 967.0], [54.4, 968.0], [54.5, 970.0], [54.6, 971.0], [54.7, 973.0], [54.8, 976.0], [54.9, 978.0], [55.0, 980.0], [55.1, 982.0], [55.2, 984.0], [55.3, 988.0], [55.4, 990.0], [55.5, 992.0], [55.6, 995.0], [55.7, 999.0], [55.8, 1001.0], [55.9, 1004.0], [56.0, 1005.0], [56.1, 1008.0], [56.2, 1010.0], [56.3, 1011.0], [56.4, 1014.0], [56.5, 1015.0], [56.6, 1016.0], [56.7, 1017.0], [56.8, 1019.0], [56.9, 1020.0], [57.0, 1021.0], [57.1, 1023.0], [57.2, 1026.0], [57.3, 1027.0], [57.4, 1028.0], [57.5, 1031.0], [57.6, 1032.0], [57.7, 1033.0], [57.8, 1034.0], [57.9, 1036.0], [58.0, 1037.0], [58.1, 1039.0], [58.2, 1040.0], [58.3, 1042.0], [58.4, 1044.0], [58.5, 1044.0], [58.6, 1047.0], [58.7, 1048.0], [58.8, 1049.0], [58.9, 1051.0], [59.0, 1051.0], [59.1, 1054.0], [59.2, 1057.0], [59.3, 1058.0], [59.4, 1060.0], [59.5, 1063.0], [59.6, 1064.0], [59.7, 1066.0], [59.8, 1068.0], [59.9, 1070.0], [60.0, 1072.0], [60.1, 1079.0], [60.2, 1082.0], [60.3, 1084.0], [60.4, 1086.0], [60.5, 1087.0], [60.6, 1089.0], [60.7, 1092.0], [60.8, 1093.0], [60.9, 1096.0], [61.0, 1099.0], [61.1, 1101.0], [61.2, 1102.0], [61.3, 1105.0], [61.4, 1109.0], [61.5, 1110.0], [61.6, 1113.0], [61.7, 1118.0], [61.8, 1120.0], [61.9, 1121.0], [62.0, 1125.0], [62.1, 1126.0], [62.2, 1129.0], [62.3, 1131.0], [62.4, 1133.0], [62.5, 1135.0], [62.6, 1136.0], [62.7, 1138.0], [62.8, 1141.0], [62.9, 1143.0], [63.0, 1145.0], [63.1, 1148.0], [63.2, 1150.0], [63.3, 1152.0], [63.4, 1154.0], [63.5, 1158.0], [63.6, 1159.0], [63.7, 1161.0], [63.8, 1163.0], [63.9, 1166.0], [64.0, 1168.0], [64.1, 1170.0], [64.2, 1171.0], [64.3, 1173.0], [64.4, 1175.0], [64.5, 1177.0], [64.6, 1178.0], [64.7, 1181.0], [64.8, 1184.0], [64.9, 1187.0], [65.0, 1188.0], [65.1, 1189.0], [65.2, 1191.0], [65.3, 1193.0], [65.4, 1195.0], [65.5, 1197.0], [65.6, 1198.0], [65.7, 1201.0], [65.8, 1203.0], [65.9, 1206.0], [66.0, 1207.0], [66.1, 1209.0], [66.2, 1211.0], [66.3, 1212.0], [66.4, 1213.0], [66.5, 1217.0], [66.6, 1219.0], [66.7, 1221.0], [66.8, 1224.0], [66.9, 1227.0], [67.0, 1230.0], [67.1, 1232.0], [67.2, 1234.0], [67.3, 1237.0], [67.4, 1239.0], [67.5, 1242.0], [67.6, 1243.0], [67.7, 1245.0], [67.8, 1247.0], [67.9, 1248.0], [68.0, 1251.0], [68.1, 1254.0], [68.2, 1256.0], [68.3, 1258.0], [68.4, 1260.0], [68.5, 1262.0], [68.6, 1264.0], [68.7, 1267.0], [68.8, 1268.0], [68.9, 1270.0], [69.0, 1272.0], [69.1, 1275.0], [69.2, 1277.0], [69.3, 1280.0], [69.4, 1283.0], [69.5, 1285.0], [69.6, 1287.0], [69.7, 1289.0], [69.8, 1290.0], [69.9, 1292.0], [70.0, 1295.0], [70.1, 1295.0], [70.2, 1297.0], [70.3, 1299.0], [70.4, 1301.0], [70.5, 1303.0], [70.6, 1306.0], [70.7, 1307.0], [70.8, 1308.0], [70.9, 1309.0], [71.0, 1313.0], [71.1, 1317.0], [71.2, 1319.0], [71.3, 1322.0], [71.4, 1325.0], [71.5, 1328.0], [71.6, 1329.0], [71.7, 1331.0], [71.8, 1334.0], [71.9, 1336.0], [72.0, 1340.0], [72.1, 1343.0], [72.2, 1345.0], [72.3, 1348.0], [72.4, 1348.0], [72.5, 1351.0], [72.6, 1354.0], [72.7, 1357.0], [72.8, 1359.0], [72.9, 1361.0], [73.0, 1363.0], [73.1, 1365.0], [73.2, 1366.0], [73.3, 1367.0], [73.4, 1369.0], [73.5, 1371.0], [73.6, 1373.0], [73.7, 1374.0], [73.8, 1375.0], [73.9, 1378.0], [74.0, 1379.0], [74.1, 1380.0], [74.2, 1383.0], [74.3, 1386.0], [74.4, 1388.0], [74.5, 1393.0], [74.6, 1396.0], [74.7, 1400.0], [74.8, 1402.0], [74.9, 1404.0], [75.0, 1406.0], [75.1, 1408.0], [75.2, 1410.0], [75.3, 1412.0], [75.4, 1412.0], [75.5, 1417.0], [75.6, 1418.0], [75.7, 1420.0], [75.8, 1423.0], [75.9, 1426.0], [76.0, 1427.0], [76.1, 1430.0], [76.2, 1431.0], [76.3, 1433.0], [76.4, 1435.0], [76.5, 1438.0], [76.6, 1440.0], [76.7, 1441.0], [76.8, 1443.0], [76.9, 1447.0], [77.0, 1448.0], [77.1, 1450.0], [77.2, 1452.0], [77.3, 1453.0], [77.4, 1457.0], [77.5, 1458.0], [77.6, 1459.0], [77.7, 1461.0], [77.8, 1463.0], [77.9, 1465.0], [78.0, 1468.0], [78.1, 1470.0], [78.2, 1473.0], [78.3, 1475.0], [78.4, 1477.0], [78.5, 1479.0], [78.6, 1481.0], [78.7, 1484.0], [78.8, 1488.0], [78.9, 1491.0], [79.0, 1493.0], [79.1, 1494.0], [79.2, 1497.0], [79.3, 1498.0], [79.4, 1500.0], [79.5, 1502.0], [79.6, 1505.0], [79.7, 1508.0], [79.8, 1510.0], [79.9, 1511.0], [80.0, 1513.0], [80.1, 1516.0], [80.2, 1518.0], [80.3, 1521.0], [80.4, 1523.0], [80.5, 1525.0], [80.6, 1529.0], [80.7, 1531.0], [80.8, 1534.0], [80.9, 1538.0], [81.0, 1540.0], [81.1, 1543.0], [81.2, 1544.0], [81.3, 1545.0], [81.4, 1547.0], [81.5, 1551.0], [81.6, 1554.0], [81.7, 1557.0], [81.8, 1560.0], [81.9, 1561.0], [82.0, 1566.0], [82.1, 1570.0], [82.2, 1574.0], [82.3, 1576.0], [82.4, 1578.0], [82.5, 1582.0], [82.6, 1583.0], [82.7, 1587.0], [82.8, 1588.0], [82.9, 1590.0], [83.0, 1595.0], [83.1, 1596.0], [83.2, 1599.0], [83.3, 1603.0], [83.4, 1605.0], [83.5, 1607.0], [83.6, 1611.0], [83.7, 1613.0], [83.8, 1616.0], [83.9, 1619.0], [84.0, 1619.0], [84.1, 1622.0], [84.2, 1626.0], [84.3, 1631.0], [84.4, 1637.0], [84.5, 1637.0], [84.6, 1641.0], [84.7, 1644.0], [84.8, 1648.0], [84.9, 1650.0], [85.0, 1652.0], [85.1, 1654.0], [85.2, 1657.0], [85.3, 1660.0], [85.4, 1665.0], [85.5, 1667.0], [85.6, 1669.0], [85.7, 1671.0], [85.8, 1677.0], [85.9, 1679.0], [86.0, 1681.0], [86.1, 1684.0], [86.2, 1687.0], [86.3, 1690.0], [86.4, 1694.0], [86.5, 1697.0], [86.6, 1700.0], [86.7, 1705.0], [86.8, 1708.0], [86.9, 1712.0], [87.0, 1716.0], [87.1, 1719.0], [87.2, 1720.0], [87.3, 1723.0], [87.4, 1726.0], [87.5, 1729.0], [87.6, 1732.0], [87.7, 1735.0], [87.8, 1742.0], [87.9, 1748.0], [88.0, 1750.0], [88.1, 1756.0], [88.2, 1758.0], [88.3, 1764.0], [88.4, 1765.0], [88.5, 1768.0], [88.6, 1773.0], [88.7, 1776.0], [88.8, 1779.0], [88.9, 1783.0], [89.0, 1790.0], [89.1, 1796.0], [89.2, 1800.0], [89.3, 1803.0], [89.4, 1809.0], [89.5, 1820.0], [89.6, 1825.0], [89.7, 1829.0], [89.8, 1834.0], [89.9, 1839.0], [90.0, 1847.0], [90.1, 1853.0], [90.2, 1858.0], [90.3, 1863.0], [90.4, 1867.0], [90.5, 1872.0], [90.6, 1879.0], [90.7, 1884.0], [90.8, 1894.0], [90.9, 1902.0], [91.0, 1915.0], [91.1, 1923.0], [91.2, 1932.0], [91.3, 1941.0], [91.4, 1951.0], [91.5, 1959.0], [91.6, 1969.0], [91.7, 1974.0], [91.8, 1976.0], [91.9, 1981.0], [92.0, 1984.0], [92.1, 2001.0], [92.2, 2007.0], [92.3, 2016.0], [92.4, 2021.0], [92.5, 2028.0], [92.6, 2035.0], [92.7, 2050.0], [92.8, 2063.0], [92.9, 2069.0], [93.0, 2078.0], [93.1, 2087.0], [93.2, 2092.0], [93.3, 2098.0], [93.4, 2107.0], [93.5, 2116.0], [93.6, 2130.0], [93.7, 2149.0], [93.8, 2155.0], [93.9, 2161.0], [94.0, 2165.0], [94.1, 2175.0], [94.2, 2181.0], [94.3, 2190.0], [94.4, 2207.0], [94.5, 2215.0], [94.6, 2230.0], [94.7, 2246.0], [94.8, 2263.0], [94.9, 2272.0], [95.0, 2294.0], [95.1, 2303.0], [95.2, 2315.0], [95.3, 2328.0], [95.4, 2337.0], [95.5, 2343.0], [95.6, 2357.0], [95.7, 2365.0], [95.8, 2381.0], [95.9, 2396.0], [96.0, 2406.0], [96.1, 2416.0], [96.2, 2435.0], [96.3, 2444.0], [96.4, 2457.0], [96.5, 2475.0], [96.6, 2486.0], [96.7, 2499.0], [96.8, 2558.0], [96.9, 2586.0], [97.0, 2602.0], [97.1, 2622.0], [97.2, 2636.0], [97.3, 2679.0], [97.4, 2714.0], [97.5, 2746.0], [97.6, 2777.0], [97.7, 2795.0], [97.8, 2818.0], [97.9, 2839.0], [98.0, 2854.0], [98.1, 2874.0], [98.2, 2892.0], [98.3, 2920.0], [98.4, 2953.0], [98.5, 2997.0], [98.6, 3040.0], [98.7, 3088.0], [98.8, 3156.0], [98.9, 3233.0], [99.0, 3342.0], [99.1, 3387.0], [99.2, 3479.0], [99.3, 3639.0], [99.4, 3753.0], [99.5, 3963.0], [99.6, 4077.0], [99.7, 4703.0], [99.8, 5194.0], [99.9, 5559.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 507.0, "series": [{"data": [[600.0, 391.0], [700.0, 286.0], [800.0, 239.0], [900.0, 214.0], [1000.0, 277.0], [1100.0, 238.0], [1200.0, 241.0], [1300.0, 227.0], [1400.0, 243.0], [1500.0, 201.0], [1600.0, 172.0], [1700.0, 137.0], [1800.0, 86.0], [1900.0, 64.0], [2000.0, 65.0], [2100.0, 53.0], [2200.0, 37.0], [2300.0, 45.0], [2400.0, 40.0], [2500.0, 15.0], [2600.0, 19.0], [2700.0, 19.0], [2800.0, 27.0], [2900.0, 14.0], [3000.0, 11.0], [3100.0, 6.0], [3300.0, 6.0], [3200.0, 8.0], [3400.0, 6.0], [3500.0, 3.0], [3600.0, 2.0], [3700.0, 7.0], [3800.0, 1.0], [3900.0, 4.0], [4000.0, 3.0], [4200.0, 2.0], [4300.0, 2.0], [4700.0, 1.0], [4800.0, 1.0], [5100.0, 2.0], [5000.0, 2.0], [5300.0, 4.0], [5600.0, 2.0], [5500.0, 1.0], [5900.0, 2.0], [6200.0, 1.0], [100.0, 26.0], [200.0, 406.0], [300.0, 416.0], [400.0, 507.0], [500.0, 408.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1068.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2763.0, "series": [{"data": [[0.0, 1359.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2763.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1068.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.536082474226804, "minX": 1.60423854E12, "maxY": 10.0, "series": [{"data": [[1.60423878E12, 10.0], [1.6042386E12, 10.0], [1.60423908E12, 9.536082474226804], [1.6042389E12, 10.0], [1.60423872E12, 10.0], [1.60423854E12, 10.0], [1.60423902E12, 10.0], [1.60423884E12, 10.0], [1.60423866E12, 10.0], [1.60423896E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423908E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 276.0, "minX": 1.0, "maxY": 3257.0, "series": [{"data": [[8.0, 536.0], [4.0, 1404.0], [2.0, 3257.0], [1.0, 3055.0], [9.0, 276.0], [10.0, 1021.1026828797528], [5.0, 1701.0], [6.0, 1414.0], [3.0, 1139.0], [7.0, 967.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1021.9811175337185]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 736.2833333333333, "minX": 1.60423854E12, "maxY": 3200722.85, "series": [{"data": [[1.60423878E12, 2721770.8333333335], [1.6042386E12, 2137415.466666667], [1.60423908E12, 428996.7833333333], [1.6042389E12, 2425129.8333333335], [1.60423872E12, 2939593.3], [1.60423854E12, 1802963.5833333333], [1.60423902E12, 2645024.1333333333], [1.60423884E12, 2623941.7], [1.60423866E12, 3200722.85], [1.60423896E12, 3046865.3666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423878E12, 4117.333333333333], [1.6042386E12, 4521.016666666666], [1.60423908E12, 736.2833333333333], [1.6042389E12, 4470.3], [1.60423872E12, 4487.183333333333], [1.60423854E12, 2380.0333333333333], [1.60423902E12, 4575.85], [1.60423884E12, 3941.2166666666667], [1.60423866E12, 4497.533333333334], [1.60423896E12, 4850.583333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423908E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 941.9156249999997, "minX": 1.60423854E12, "maxY": 1327.2886597938145, "series": [{"data": [[1.60423878E12, 1096.4095063985376], [1.6042386E12, 962.6009693053323], [1.60423908E12, 1327.2886597938145], [1.6042389E12, 983.0589198036002], [1.60423872E12, 1011.8781725888326], [1.60423854E12, 1176.7902735562313], [1.60423902E12, 983.2330578512401], [1.60423884E12, 1087.1712204007285], [1.60423866E12, 995.6428571428563], [1.60423896E12, 941.9156249999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423908E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 940.0781250000001, "minX": 1.60423854E12, "maxY": 1325.7628865979384, "series": [{"data": [[1.60423878E12, 1094.3711151736748], [1.6042386E12, 961.0306946688205], [1.60423908E12, 1325.7628865979384], [1.6042389E12, 981.5482815057278], [1.60423872E12, 1009.5583756345166], [1.60423854E12, 1174.4012158054702], [1.60423902E12, 981.5404958677685], [1.60423884E12, 1085.3588342440796], [1.60423866E12, 993.0863787375405], [1.60423896E12, 940.0781250000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423908E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60423854E12, "maxY": 0.2674772036474167, "series": [{"data": [[1.60423878E12, 0.021937842778793404], [1.6042386E12, 0.019386106623586412], [1.60423908E12, 0.0], [1.6042389E12, 0.02782324058919805], [1.60423872E12, 0.020304568527918763], [1.60423854E12, 0.2674772036474167], [1.60423902E12, 0.019834710743801665], [1.60423884E12, 0.023679417122040056], [1.60423866E12, 0.018272425249169427], [1.60423896E12, 0.018749999999999985]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423908E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60423854E12, "maxY": 6205.0, "series": [{"data": [[1.60423878E12, 4261.0], [1.6042386E12, 5947.0], [1.60423908E12, 4004.0], [1.6042389E12, 4811.0], [1.60423872E12, 3526.0], [1.60423854E12, 5671.0], [1.60423902E12, 4074.0], [1.60423884E12, 6205.0], [1.60423866E12, 5660.0], [1.60423896E12, 3892.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423878E12, 214.9799980401993], [1.6042386E12, 205.5799998521805], [1.60423908E12, 227.0], [1.6042389E12, 203.50799985408784], [1.60423872E12, 211.0], [1.60423854E12, 199.8799996852875], [1.60423902E12, 204.9079997110367], [1.60423884E12, 219.94999986886978], [1.60423866E12, 206.2809995687008], [1.60423896E12, 198.07599938869475]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423878E12, 216.42520005226135], [1.6042386E12, 206.2760001182556], [1.60423908E12, 227.0], [1.6042389E12, 204.0], [1.60423872E12, 211.0], [1.60423854E12, 200.0], [1.60423902E12, 205.99880011558534], [1.60423884E12, 220.4450000524521], [1.60423866E12, 207.9091001725197], [1.60423896E12, 201.42130042791368]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423878E12, 216.20599993467332], [1.6042386E12, 205.88999992609024], [1.60423908E12, 227.0], [1.6042389E12, 203.8139999270439], [1.60423872E12, 211.0], [1.60423854E12, 200.0], [1.60423902E12, 205.51399985551834], [1.60423884E12, 220.2249999344349], [1.60423866E12, 207.18549978435038], [1.60423896E12, 199.6264994651079]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423878E12, 196.0], [1.6042386E12, 194.0], [1.60423908E12, 227.0], [1.6042389E12, 195.0], [1.60423872E12, 188.0], [1.60423854E12, 187.0], [1.60423902E12, 189.0], [1.60423884E12, 197.0], [1.60423866E12, 187.0], [1.60423896E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423878E12, 968.0], [1.6042386E12, 795.0], [1.60423908E12, 1254.0], [1.6042389E12, 734.0], [1.60423872E12, 962.0], [1.60423854E12, 1019.0], [1.60423902E12, 808.0], [1.60423884E12, 980.0], [1.60423866E12, 780.0], [1.60423896E12, 748.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423908E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 407.0, "minX": 1.0, "maxY": 2607.0, "series": [{"data": [[2.0, 2051.0], [3.0, 1842.0], [4.0, 1426.5], [5.0, 1293.0], [6.0, 1240.5], [7.0, 1221.5], [8.0, 1096.5], [9.0, 1059.5], [10.0, 1015.5], [11.0, 878.0], [12.0, 736.5], [13.0, 672.5], [14.0, 495.5], [15.0, 552.5], [1.0, 2607.0], [16.0, 519.0], [17.0, 505.5], [18.0, 433.0], [19.0, 447.0], [20.0, 483.0], [21.0, 440.5], [22.0, 473.0], [23.0, 435.5], [24.0, 422.0], [25.0, 410.0], [27.0, 407.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 406.0, "minX": 1.0, "maxY": 2603.0, "series": [{"data": [[2.0, 2049.0], [3.0, 1834.5], [4.0, 1418.5], [5.0, 1290.0], [6.0, 1240.0], [7.0, 1220.0], [8.0, 1096.0], [9.0, 1058.0], [10.0, 1015.5], [11.0, 877.0], [12.0, 736.0], [13.0, 671.0], [14.0, 495.0], [15.0, 551.5], [1.0, 2603.0], [16.0, 519.0], [17.0, 505.5], [18.0, 433.0], [19.0, 447.0], [20.0, 483.0], [21.0, 440.5], [22.0, 473.0], [23.0, 435.5], [24.0, 421.5], [25.0, 409.0], [27.0, 406.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.60423854E12, "maxY": 10.666666666666666, "series": [{"data": [[1.60423878E12, 9.116666666666667], [1.6042386E12, 10.316666666666666], [1.60423908E12, 1.45], [1.6042389E12, 10.183333333333334], [1.60423872E12, 9.85], [1.60423854E12, 5.65], [1.60423902E12, 10.083333333333334], [1.60423884E12, 9.15], [1.60423866E12, 10.033333333333333], [1.60423896E12, 10.666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423908E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6166666666666667, "minX": 1.60423854E12, "maxY": 10.666666666666666, "series": [{"data": [[1.60423878E12, 9.116666666666667], [1.6042386E12, 10.316666666666666], [1.60423908E12, 1.6166666666666667], [1.6042389E12, 10.183333333333334], [1.60423872E12, 9.85], [1.60423854E12, 5.483333333333333], [1.60423902E12, 10.083333333333334], [1.60423884E12, 9.15], [1.60423866E12, 10.033333333333333], [1.60423896E12, 10.666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423908E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6166666666666667, "minX": 1.60423854E12, "maxY": 10.666666666666666, "series": [{"data": [[1.60423878E12, 9.116666666666667], [1.6042386E12, 10.316666666666666], [1.60423908E12, 1.6166666666666667], [1.6042389E12, 10.183333333333334], [1.60423872E12, 9.85], [1.60423854E12, 5.483333333333333], [1.60423902E12, 10.083333333333334], [1.60423884E12, 9.15], [1.60423866E12, 10.033333333333333], [1.60423896E12, 10.666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423908E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6166666666666667, "minX": 1.60423854E12, "maxY": 10.666666666666666, "series": [{"data": [[1.60423878E12, 9.116666666666667], [1.6042386E12, 10.316666666666666], [1.60423908E12, 1.6166666666666667], [1.6042389E12, 10.183333333333334], [1.60423872E12, 9.85], [1.60423854E12, 5.483333333333333], [1.60423902E12, 10.083333333333334], [1.60423884E12, 9.15], [1.60423866E12, 10.033333333333333], [1.60423896E12, 10.666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423908E12, "title": "Total Transactions Per Second"}},
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

