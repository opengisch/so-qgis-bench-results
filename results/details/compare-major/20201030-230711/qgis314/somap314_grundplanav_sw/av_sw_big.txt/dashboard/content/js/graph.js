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
        data: {"result": {"minY": 192.0, "minX": 0.0, "maxY": 6776.0, "series": [{"data": [[0.0, 192.0], [0.1, 194.0], [0.2, 198.0], [0.3, 199.0], [0.4, 200.0], [0.5, 201.0], [0.6, 202.0], [0.7, 203.0], [0.8, 204.0], [0.9, 204.0], [1.0, 206.0], [1.1, 207.0], [1.2, 207.0], [1.3, 209.0], [1.4, 210.0], [1.5, 212.0], [1.6, 213.0], [1.7, 213.0], [1.8, 214.0], [1.9, 215.0], [2.0, 216.0], [2.1, 217.0], [2.2, 218.0], [2.3, 219.0], [2.4, 219.0], [2.5, 220.0], [2.6, 221.0], [2.7, 222.0], [2.8, 223.0], [2.9, 223.0], [3.0, 224.0], [3.1, 224.0], [3.2, 225.0], [3.3, 226.0], [3.4, 227.0], [3.5, 228.0], [3.6, 229.0], [3.7, 231.0], [3.8, 232.0], [3.9, 232.0], [4.0, 233.0], [4.1, 233.0], [4.2, 234.0], [4.3, 235.0], [4.4, 236.0], [4.5, 237.0], [4.6, 237.0], [4.7, 238.0], [4.8, 239.0], [4.9, 241.0], [5.0, 241.0], [5.1, 242.0], [5.2, 243.0], [5.3, 244.0], [5.4, 245.0], [5.5, 245.0], [5.6, 247.0], [5.7, 248.0], [5.8, 249.0], [5.9, 250.0], [6.0, 251.0], [6.1, 251.0], [6.2, 253.0], [6.3, 253.0], [6.4, 255.0], [6.5, 256.0], [6.6, 257.0], [6.7, 258.0], [6.8, 260.0], [6.9, 262.0], [7.0, 263.0], [7.1, 265.0], [7.2, 268.0], [7.3, 269.0], [7.4, 272.0], [7.5, 277.0], [7.6, 282.0], [7.7, 283.0], [7.8, 284.0], [7.9, 285.0], [8.0, 286.0], [8.1, 287.0], [8.2, 290.0], [8.3, 292.0], [8.4, 294.0], [8.5, 295.0], [8.6, 296.0], [8.7, 300.0], [8.8, 301.0], [8.9, 303.0], [9.0, 304.0], [9.1, 305.0], [9.2, 307.0], [9.3, 308.0], [9.4, 310.0], [9.5, 310.0], [9.6, 311.0], [9.7, 312.0], [9.8, 313.0], [9.9, 313.0], [10.0, 314.0], [10.1, 315.0], [10.2, 316.0], [10.3, 317.0], [10.4, 319.0], [10.5, 320.0], [10.6, 321.0], [10.7, 321.0], [10.8, 322.0], [10.9, 323.0], [11.0, 324.0], [11.1, 325.0], [11.2, 326.0], [11.3, 327.0], [11.4, 328.0], [11.5, 328.0], [11.6, 329.0], [11.7, 330.0], [11.8, 331.0], [11.9, 331.0], [12.0, 332.0], [12.1, 332.0], [12.2, 334.0], [12.3, 335.0], [12.4, 336.0], [12.5, 338.0], [12.6, 338.0], [12.7, 339.0], [12.8, 340.0], [12.9, 341.0], [13.0, 342.0], [13.1, 343.0], [13.2, 345.0], [13.3, 345.0], [13.4, 347.0], [13.5, 348.0], [13.6, 349.0], [13.7, 351.0], [13.8, 352.0], [13.9, 352.0], [14.0, 354.0], [14.1, 355.0], [14.2, 357.0], [14.3, 360.0], [14.4, 361.0], [14.5, 362.0], [14.6, 363.0], [14.7, 365.0], [14.8, 367.0], [14.9, 372.0], [15.0, 375.0], [15.1, 378.0], [15.2, 383.0], [15.3, 385.0], [15.4, 387.0], [15.5, 388.0], [15.6, 388.0], [15.7, 390.0], [15.8, 392.0], [15.9, 394.0], [16.0, 395.0], [16.1, 396.0], [16.2, 398.0], [16.3, 399.0], [16.4, 400.0], [16.5, 401.0], [16.6, 401.0], [16.7, 402.0], [16.8, 404.0], [16.9, 405.0], [17.0, 406.0], [17.1, 407.0], [17.2, 407.0], [17.3, 409.0], [17.4, 410.0], [17.5, 411.0], [17.6, 412.0], [17.7, 413.0], [17.8, 413.0], [17.9, 414.0], [18.0, 415.0], [18.1, 416.0], [18.2, 417.0], [18.3, 418.0], [18.4, 419.0], [18.5, 421.0], [18.6, 423.0], [18.7, 425.0], [18.8, 427.0], [18.9, 428.0], [19.0, 429.0], [19.1, 430.0], [19.2, 432.0], [19.3, 432.0], [19.4, 434.0], [19.5, 435.0], [19.6, 436.0], [19.7, 437.0], [19.8, 438.0], [19.9, 439.0], [20.0, 440.0], [20.1, 441.0], [20.2, 442.0], [20.3, 443.0], [20.4, 444.0], [20.5, 445.0], [20.6, 446.0], [20.7, 446.0], [20.8, 447.0], [20.9, 448.0], [21.0, 449.0], [21.1, 450.0], [21.2, 451.0], [21.3, 451.0], [21.4, 452.0], [21.5, 453.0], [21.6, 454.0], [21.7, 456.0], [21.8, 456.0], [21.9, 457.0], [22.0, 457.0], [22.1, 458.0], [22.2, 459.0], [22.3, 459.0], [22.4, 460.0], [22.5, 461.0], [22.6, 462.0], [22.7, 463.0], [22.8, 464.0], [22.9, 466.0], [23.0, 466.0], [23.1, 467.0], [23.2, 468.0], [23.3, 470.0], [23.4, 470.0], [23.5, 471.0], [23.6, 472.0], [23.7, 472.0], [23.8, 473.0], [23.9, 475.0], [24.0, 476.0], [24.1, 477.0], [24.2, 478.0], [24.3, 479.0], [24.4, 480.0], [24.5, 480.0], [24.6, 481.0], [24.7, 482.0], [24.8, 484.0], [24.9, 484.0], [25.0, 486.0], [25.1, 486.0], [25.2, 488.0], [25.3, 489.0], [25.4, 491.0], [25.5, 491.0], [25.6, 492.0], [25.7, 493.0], [25.8, 494.0], [25.9, 495.0], [26.0, 496.0], [26.1, 497.0], [26.2, 499.0], [26.3, 499.0], [26.4, 501.0], [26.5, 501.0], [26.6, 503.0], [26.7, 504.0], [26.8, 505.0], [26.9, 507.0], [27.0, 509.0], [27.1, 510.0], [27.2, 511.0], [27.3, 512.0], [27.4, 514.0], [27.5, 516.0], [27.6, 517.0], [27.7, 518.0], [27.8, 521.0], [27.9, 523.0], [28.0, 524.0], [28.1, 525.0], [28.2, 526.0], [28.3, 527.0], [28.4, 528.0], [28.5, 530.0], [28.6, 531.0], [28.7, 534.0], [28.8, 535.0], [28.9, 536.0], [29.0, 537.0], [29.1, 538.0], [29.2, 541.0], [29.3, 542.0], [29.4, 543.0], [29.5, 545.0], [29.6, 547.0], [29.7, 548.0], [29.8, 549.0], [29.9, 550.0], [30.0, 550.0], [30.1, 552.0], [30.2, 553.0], [30.3, 554.0], [30.4, 555.0], [30.5, 556.0], [30.6, 557.0], [30.7, 558.0], [30.8, 559.0], [30.9, 560.0], [31.0, 560.0], [31.1, 561.0], [31.2, 562.0], [31.3, 563.0], [31.4, 564.0], [31.5, 565.0], [31.6, 567.0], [31.7, 568.0], [31.8, 568.0], [31.9, 570.0], [32.0, 570.0], [32.1, 571.0], [32.2, 572.0], [32.3, 574.0], [32.4, 575.0], [32.5, 577.0], [32.6, 577.0], [32.7, 579.0], [32.8, 580.0], [32.9, 581.0], [33.0, 583.0], [33.1, 584.0], [33.2, 585.0], [33.3, 586.0], [33.4, 587.0], [33.5, 589.0], [33.6, 590.0], [33.7, 592.0], [33.8, 594.0], [33.9, 595.0], [34.0, 596.0], [34.1, 597.0], [34.2, 599.0], [34.3, 599.0], [34.4, 600.0], [34.5, 601.0], [34.6, 604.0], [34.7, 606.0], [34.8, 606.0], [34.9, 608.0], [35.0, 609.0], [35.1, 610.0], [35.2, 612.0], [35.3, 613.0], [35.4, 615.0], [35.5, 616.0], [35.6, 617.0], [35.7, 618.0], [35.8, 619.0], [35.9, 621.0], [36.0, 623.0], [36.1, 624.0], [36.2, 625.0], [36.3, 627.0], [36.4, 628.0], [36.5, 629.0], [36.6, 630.0], [36.7, 631.0], [36.8, 632.0], [36.9, 633.0], [37.0, 635.0], [37.1, 635.0], [37.2, 637.0], [37.3, 638.0], [37.4, 639.0], [37.5, 641.0], [37.6, 642.0], [37.7, 643.0], [37.8, 644.0], [37.9, 645.0], [38.0, 645.0], [38.1, 647.0], [38.2, 648.0], [38.3, 649.0], [38.4, 651.0], [38.5, 652.0], [38.6, 654.0], [38.7, 656.0], [38.8, 657.0], [38.9, 658.0], [39.0, 661.0], [39.1, 662.0], [39.2, 663.0], [39.3, 664.0], [39.4, 665.0], [39.5, 666.0], [39.6, 667.0], [39.7, 668.0], [39.8, 668.0], [39.9, 669.0], [40.0, 671.0], [40.1, 672.0], [40.2, 673.0], [40.3, 675.0], [40.4, 676.0], [40.5, 678.0], [40.6, 679.0], [40.7, 680.0], [40.8, 681.0], [40.9, 683.0], [41.0, 685.0], [41.1, 687.0], [41.2, 688.0], [41.3, 689.0], [41.4, 690.0], [41.5, 691.0], [41.6, 693.0], [41.7, 693.0], [41.8, 694.0], [41.9, 695.0], [42.0, 696.0], [42.1, 697.0], [42.2, 699.0], [42.3, 701.0], [42.4, 704.0], [42.5, 707.0], [42.6, 708.0], [42.7, 709.0], [42.8, 711.0], [42.9, 712.0], [43.0, 714.0], [43.1, 715.0], [43.2, 716.0], [43.3, 718.0], [43.4, 719.0], [43.5, 721.0], [43.6, 722.0], [43.7, 725.0], [43.8, 728.0], [43.9, 731.0], [44.0, 733.0], [44.1, 735.0], [44.2, 736.0], [44.3, 736.0], [44.4, 740.0], [44.5, 742.0], [44.6, 745.0], [44.7, 748.0], [44.8, 749.0], [44.9, 750.0], [45.0, 752.0], [45.1, 755.0], [45.2, 756.0], [45.3, 758.0], [45.4, 762.0], [45.5, 764.0], [45.6, 766.0], [45.7, 767.0], [45.8, 772.0], [45.9, 773.0], [46.0, 774.0], [46.1, 774.0], [46.2, 778.0], [46.3, 779.0], [46.4, 781.0], [46.5, 783.0], [46.6, 784.0], [46.7, 786.0], [46.8, 788.0], [46.9, 792.0], [47.0, 794.0], [47.1, 795.0], [47.2, 797.0], [47.3, 798.0], [47.4, 800.0], [47.5, 801.0], [47.6, 803.0], [47.7, 805.0], [47.8, 806.0], [47.9, 808.0], [48.0, 812.0], [48.1, 813.0], [48.2, 815.0], [48.3, 819.0], [48.4, 821.0], [48.5, 824.0], [48.6, 826.0], [48.7, 827.0], [48.8, 828.0], [48.9, 830.0], [49.0, 831.0], [49.1, 833.0], [49.2, 834.0], [49.3, 836.0], [49.4, 838.0], [49.5, 842.0], [49.6, 843.0], [49.7, 846.0], [49.8, 847.0], [49.9, 849.0], [50.0, 851.0], [50.1, 852.0], [50.2, 855.0], [50.3, 858.0], [50.4, 861.0], [50.5, 864.0], [50.6, 867.0], [50.7, 869.0], [50.8, 872.0], [50.9, 873.0], [51.0, 874.0], [51.1, 876.0], [51.2, 878.0], [51.3, 880.0], [51.4, 881.0], [51.5, 883.0], [51.6, 885.0], [51.7, 887.0], [51.8, 890.0], [51.9, 894.0], [52.0, 896.0], [52.1, 898.0], [52.2, 900.0], [52.3, 903.0], [52.4, 906.0], [52.5, 910.0], [52.6, 911.0], [52.7, 913.0], [52.8, 916.0], [52.9, 918.0], [53.0, 919.0], [53.1, 921.0], [53.2, 924.0], [53.3, 926.0], [53.4, 929.0], [53.5, 930.0], [53.6, 934.0], [53.7, 938.0], [53.8, 941.0], [53.9, 943.0], [54.0, 944.0], [54.1, 945.0], [54.2, 946.0], [54.3, 950.0], [54.4, 952.0], [54.5, 953.0], [54.6, 957.0], [54.7, 958.0], [54.8, 960.0], [54.9, 964.0], [55.0, 965.0], [55.1, 967.0], [55.2, 970.0], [55.3, 974.0], [55.4, 975.0], [55.5, 976.0], [55.6, 978.0], [55.7, 981.0], [55.8, 984.0], [55.9, 988.0], [56.0, 990.0], [56.1, 992.0], [56.2, 995.0], [56.3, 996.0], [56.4, 998.0], [56.5, 1000.0], [56.6, 1002.0], [56.7, 1006.0], [56.8, 1007.0], [56.9, 1011.0], [57.0, 1011.0], [57.1, 1013.0], [57.2, 1016.0], [57.3, 1019.0], [57.4, 1021.0], [57.5, 1023.0], [57.6, 1024.0], [57.7, 1026.0], [57.8, 1029.0], [57.9, 1032.0], [58.0, 1033.0], [58.1, 1034.0], [58.2, 1035.0], [58.3, 1037.0], [58.4, 1041.0], [58.5, 1042.0], [58.6, 1044.0], [58.7, 1047.0], [58.8, 1048.0], [58.9, 1049.0], [59.0, 1052.0], [59.1, 1055.0], [59.2, 1057.0], [59.3, 1058.0], [59.4, 1060.0], [59.5, 1062.0], [59.6, 1063.0], [59.7, 1064.0], [59.8, 1066.0], [59.9, 1067.0], [60.0, 1070.0], [60.1, 1071.0], [60.2, 1073.0], [60.3, 1076.0], [60.4, 1077.0], [60.5, 1081.0], [60.6, 1083.0], [60.7, 1085.0], [60.8, 1086.0], [60.9, 1087.0], [61.0, 1088.0], [61.1, 1090.0], [61.2, 1091.0], [61.3, 1093.0], [61.4, 1095.0], [61.5, 1096.0], [61.6, 1097.0], [61.7, 1099.0], [61.8, 1102.0], [61.9, 1105.0], [62.0, 1107.0], [62.1, 1107.0], [62.2, 1109.0], [62.3, 1112.0], [62.4, 1114.0], [62.5, 1115.0], [62.6, 1118.0], [62.7, 1120.0], [62.8, 1122.0], [62.9, 1123.0], [63.0, 1125.0], [63.1, 1128.0], [63.2, 1129.0], [63.3, 1132.0], [63.4, 1134.0], [63.5, 1134.0], [63.6, 1136.0], [63.7, 1139.0], [63.8, 1140.0], [63.9, 1142.0], [64.0, 1144.0], [64.1, 1145.0], [64.2, 1149.0], [64.3, 1151.0], [64.4, 1153.0], [64.5, 1155.0], [64.6, 1158.0], [64.7, 1159.0], [64.8, 1162.0], [64.9, 1166.0], [65.0, 1169.0], [65.1, 1170.0], [65.2, 1173.0], [65.3, 1176.0], [65.4, 1178.0], [65.5, 1180.0], [65.6, 1182.0], [65.7, 1183.0], [65.8, 1185.0], [65.9, 1187.0], [66.0, 1189.0], [66.1, 1190.0], [66.2, 1193.0], [66.3, 1195.0], [66.4, 1197.0], [66.5, 1200.0], [66.6, 1204.0], [66.7, 1205.0], [66.8, 1207.0], [66.9, 1208.0], [67.0, 1210.0], [67.1, 1211.0], [67.2, 1214.0], [67.3, 1216.0], [67.4, 1218.0], [67.5, 1220.0], [67.6, 1220.0], [67.7, 1223.0], [67.8, 1225.0], [67.9, 1228.0], [68.0, 1229.0], [68.1, 1230.0], [68.2, 1231.0], [68.3, 1232.0], [68.4, 1234.0], [68.5, 1236.0], [68.6, 1238.0], [68.7, 1240.0], [68.8, 1243.0], [68.9, 1245.0], [69.0, 1247.0], [69.1, 1249.0], [69.2, 1252.0], [69.3, 1254.0], [69.4, 1255.0], [69.5, 1258.0], [69.6, 1260.0], [69.7, 1263.0], [69.8, 1264.0], [69.9, 1268.0], [70.0, 1269.0], [70.1, 1271.0], [70.2, 1272.0], [70.3, 1277.0], [70.4, 1278.0], [70.5, 1279.0], [70.6, 1283.0], [70.7, 1284.0], [70.8, 1289.0], [70.9, 1290.0], [71.0, 1292.0], [71.1, 1296.0], [71.2, 1298.0], [71.3, 1301.0], [71.4, 1304.0], [71.5, 1305.0], [71.6, 1308.0], [71.7, 1312.0], [71.8, 1315.0], [71.9, 1318.0], [72.0, 1320.0], [72.1, 1325.0], [72.2, 1327.0], [72.3, 1329.0], [72.4, 1333.0], [72.5, 1335.0], [72.6, 1337.0], [72.7, 1340.0], [72.8, 1341.0], [72.9, 1344.0], [73.0, 1347.0], [73.1, 1352.0], [73.2, 1353.0], [73.3, 1354.0], [73.4, 1357.0], [73.5, 1361.0], [73.6, 1363.0], [73.7, 1367.0], [73.8, 1371.0], [73.9, 1372.0], [74.0, 1375.0], [74.1, 1376.0], [74.2, 1380.0], [74.3, 1383.0], [74.4, 1384.0], [74.5, 1385.0], [74.6, 1387.0], [74.7, 1392.0], [74.8, 1394.0], [74.9, 1396.0], [75.0, 1399.0], [75.1, 1402.0], [75.2, 1404.0], [75.3, 1406.0], [75.4, 1410.0], [75.5, 1411.0], [75.6, 1412.0], [75.7, 1415.0], [75.8, 1418.0], [75.9, 1420.0], [76.0, 1423.0], [76.1, 1425.0], [76.2, 1426.0], [76.3, 1428.0], [76.4, 1431.0], [76.5, 1434.0], [76.6, 1436.0], [76.7, 1437.0], [76.8, 1438.0], [76.9, 1442.0], [77.0, 1444.0], [77.1, 1445.0], [77.2, 1447.0], [77.3, 1449.0], [77.4, 1453.0], [77.5, 1456.0], [77.6, 1457.0], [77.7, 1459.0], [77.8, 1462.0], [77.9, 1466.0], [78.0, 1469.0], [78.1, 1471.0], [78.2, 1473.0], [78.3, 1476.0], [78.4, 1478.0], [78.5, 1483.0], [78.6, 1485.0], [78.7, 1486.0], [78.8, 1488.0], [78.9, 1490.0], [79.0, 1494.0], [79.1, 1498.0], [79.2, 1499.0], [79.3, 1500.0], [79.4, 1501.0], [79.5, 1504.0], [79.6, 1506.0], [79.7, 1509.0], [79.8, 1511.0], [79.9, 1514.0], [80.0, 1516.0], [80.1, 1518.0], [80.2, 1523.0], [80.3, 1526.0], [80.4, 1529.0], [80.5, 1530.0], [80.6, 1534.0], [80.7, 1536.0], [80.8, 1538.0], [80.9, 1539.0], [81.0, 1542.0], [81.1, 1543.0], [81.2, 1546.0], [81.3, 1547.0], [81.4, 1551.0], [81.5, 1552.0], [81.6, 1556.0], [81.7, 1557.0], [81.8, 1560.0], [81.9, 1563.0], [82.0, 1567.0], [82.1, 1571.0], [82.2, 1572.0], [82.3, 1575.0], [82.4, 1578.0], [82.5, 1581.0], [82.6, 1583.0], [82.7, 1586.0], [82.8, 1589.0], [82.9, 1592.0], [83.0, 1594.0], [83.1, 1602.0], [83.2, 1606.0], [83.3, 1608.0], [83.4, 1611.0], [83.5, 1613.0], [83.6, 1615.0], [83.7, 1618.0], [83.8, 1623.0], [83.9, 1625.0], [84.0, 1629.0], [84.1, 1631.0], [84.2, 1634.0], [84.3, 1639.0], [84.4, 1642.0], [84.5, 1648.0], [84.6, 1653.0], [84.7, 1656.0], [84.8, 1659.0], [84.9, 1666.0], [85.0, 1668.0], [85.1, 1670.0], [85.2, 1674.0], [85.3, 1678.0], [85.4, 1681.0], [85.5, 1686.0], [85.6, 1690.0], [85.7, 1694.0], [85.8, 1699.0], [85.9, 1703.0], [86.0, 1706.0], [86.1, 1708.0], [86.2, 1712.0], [86.3, 1715.0], [86.4, 1716.0], [86.5, 1719.0], [86.6, 1724.0], [86.7, 1726.0], [86.8, 1728.0], [86.9, 1733.0], [87.0, 1738.0], [87.1, 1739.0], [87.2, 1748.0], [87.3, 1752.0], [87.4, 1755.0], [87.5, 1758.0], [87.6, 1760.0], [87.7, 1764.0], [87.8, 1768.0], [87.9, 1774.0], [88.0, 1775.0], [88.1, 1779.0], [88.2, 1784.0], [88.3, 1789.0], [88.4, 1795.0], [88.5, 1798.0], [88.6, 1802.0], [88.7, 1807.0], [88.8, 1811.0], [88.9, 1823.0], [89.0, 1827.0], [89.1, 1830.0], [89.2, 1835.0], [89.3, 1841.0], [89.4, 1852.0], [89.5, 1865.0], [89.6, 1875.0], [89.7, 1889.0], [89.8, 1899.0], [89.9, 1904.0], [90.0, 1907.0], [90.1, 1910.0], [90.2, 1914.0], [90.3, 1928.0], [90.4, 1933.0], [90.5, 1939.0], [90.6, 1951.0], [90.7, 1957.0], [90.8, 1961.0], [90.9, 1971.0], [91.0, 1977.0], [91.1, 1983.0], [91.2, 1988.0], [91.3, 2004.0], [91.4, 2014.0], [91.5, 2021.0], [91.6, 2026.0], [91.7, 2033.0], [91.8, 2037.0], [91.9, 2050.0], [92.0, 2062.0], [92.1, 2067.0], [92.2, 2077.0], [92.3, 2093.0], [92.4, 2101.0], [92.5, 2113.0], [92.6, 2117.0], [92.7, 2127.0], [92.8, 2140.0], [92.9, 2150.0], [93.0, 2155.0], [93.1, 2171.0], [93.2, 2179.0], [93.3, 2195.0], [93.4, 2200.0], [93.5, 2208.0], [93.6, 2225.0], [93.7, 2239.0], [93.8, 2245.0], [93.9, 2253.0], [94.0, 2265.0], [94.1, 2277.0], [94.2, 2282.0], [94.3, 2294.0], [94.4, 2298.0], [94.5, 2301.0], [94.6, 2309.0], [94.7, 2324.0], [94.8, 2339.0], [94.9, 2348.0], [95.0, 2363.0], [95.1, 2380.0], [95.2, 2391.0], [95.3, 2395.0], [95.4, 2403.0], [95.5, 2417.0], [95.6, 2428.0], [95.7, 2442.0], [95.8, 2450.0], [95.9, 2462.0], [96.0, 2476.0], [96.1, 2482.0], [96.2, 2493.0], [96.3, 2512.0], [96.4, 2526.0], [96.5, 2540.0], [96.6, 2553.0], [96.7, 2569.0], [96.8, 2580.0], [96.9, 2597.0], [97.0, 2619.0], [97.1, 2633.0], [97.2, 2657.0], [97.3, 2675.0], [97.4, 2714.0], [97.5, 2744.0], [97.6, 2758.0], [97.7, 2783.0], [97.8, 2806.0], [97.9, 2836.0], [98.0, 2855.0], [98.1, 2885.0], [98.2, 2906.0], [98.3, 2916.0], [98.4, 2983.0], [98.5, 3036.0], [98.6, 3068.0], [98.7, 3079.0], [98.8, 3158.0], [98.9, 3216.0], [99.0, 3282.0], [99.1, 3336.0], [99.2, 3423.0], [99.3, 3465.0], [99.4, 3553.0], [99.5, 3698.0], [99.6, 4074.0], [99.7, 4732.0], [99.8, 5177.0], [99.9, 6025.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 514.0, "series": [{"data": [[600.0, 411.0], [700.0, 267.0], [800.0, 248.0], [900.0, 225.0], [1000.0, 271.0], [1100.0, 247.0], [1200.0, 248.0], [1300.0, 195.0], [1400.0, 220.0], [1500.0, 198.0], [1600.0, 143.0], [1700.0, 143.0], [1800.0, 64.0], [1900.0, 75.0], [2000.0, 57.0], [2100.0, 54.0], [2200.0, 54.0], [2300.0, 50.0], [2400.0, 44.0], [2500.0, 35.0], [2600.0, 24.0], [2700.0, 20.0], [2800.0, 22.0], [2900.0, 12.0], [3000.0, 16.0], [3100.0, 7.0], [3200.0, 9.0], [3300.0, 6.0], [3400.0, 11.0], [3500.0, 3.0], [3700.0, 2.0], [3600.0, 5.0], [3800.0, 2.0], [4000.0, 1.0], [4100.0, 3.0], [4600.0, 1.0], [4700.0, 1.0], [4900.0, 2.0], [5100.0, 1.0], [5000.0, 2.0], [5200.0, 1.0], [5600.0, 2.0], [5400.0, 1.0], [6000.0, 1.0], [6300.0, 2.0], [6200.0, 1.0], [6500.0, 1.0], [6700.0, 1.0], [100.0, 17.0], [200.0, 434.0], [300.0, 400.0], [400.0, 514.0], [500.0, 416.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1071.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2750.0, "series": [{"data": [[0.0, 1369.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2750.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1071.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.598214285714285, "minX": 1.60410108E12, "maxY": 10.0, "series": [{"data": [[1.6041012E12, 10.0], [1.60410138E12, 10.0], [1.60410108E12, 10.0], [1.60410156E12, 10.0], [1.60410126E12, 10.0], [1.60410144E12, 10.0], [1.60410114E12, 10.0], [1.60410162E12, 9.598214285714285], [1.60410132E12, 10.0], [1.6041015E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410162E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 528.0, "minX": 1.0, "maxY": 3462.0, "series": [{"data": [[8.0, 2080.0], [4.0, 667.0], [2.0, 3462.0], [1.0, 3130.0], [9.0, 528.0], [10.0, 1022.3248407643324], [5.0, 646.0], [6.0, 678.0], [3.0, 2460.0], [7.0, 858.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1023.3475915221593]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 847.6833333333333, "minX": 1.60410108E12, "maxY": 3130127.6166666667, "series": [{"data": [[1.6041012E12, 3130127.6166666667], [1.60410138E12, 2638400.933333333], [1.60410108E12, 1742647.5333333334], [1.60410156E12, 2656576.7666666666], [1.60410126E12, 2998265.6], [1.60410144E12, 2391511.35], [1.60410114E12, 2144753.683333333], [1.60410162E12, 507866.76666666666], [1.60410132E12, 2740905.1], [1.6041015E12, 3020899.933333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6041012E12, 4405.65], [1.60410138E12, 3959.2833333333333], [1.60410108E12, 2245.8166666666666], [1.60410156E12, 4641.1], [1.60410126E12, 4601.666666666667], [1.60410144E12, 4460.65], [1.60410114E12, 4594.183333333333], [1.60410162E12, 847.6833333333333], [1.60410132E12, 4086.65], [1.6041015E12, 4734.65]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410162E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 946.5317460317468, "minX": 1.60410108E12, "maxY": 1333.4553571428567, "series": [{"data": [[1.6041012E12, 1009.5745762711874], [1.60410138E12, 1078.0307971014497], [1.60410108E12, 1204.6903225806457], [1.60410156E12, 974.6541598694954], [1.60410126E12, 995.8531353135302], [1.60410144E12, 984.8327868852458], [1.60410114E12, 946.5317460317468], [1.60410162E12, 1333.4553571428567], [1.60410132E12, 1105.5129151291524], [1.6041015E12, 960.7199999999996]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410162E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 944.9888888888895, "minX": 1.60410108E12, "maxY": 1331.732142857143, "series": [{"data": [[1.6041012E12, 1007.0677966101698], [1.60410138E12, 1076.188405797101], [1.60410108E12, 1201.9806451612908], [1.60410156E12, 972.7911908646005], [1.60410126E12, 993.6501650165019], [1.60410144E12, 983.1819672131148], [1.60410114E12, 944.9888888888895], [1.60410162E12, 1331.732142857143], [1.60410132E12, 1103.1771217712185], [1.6041015E12, 958.768000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410162E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60410108E12, "maxY": 0.25806451612903236, "series": [{"data": [[1.6041012E12, 0.023728813559322062], [1.60410138E12, 0.019927536231884046], [1.60410108E12, 0.25806451612903236], [1.60410156E12, 0.013050570962479616], [1.60410126E12, 0.02145214521452142], [1.60410144E12, 0.02295081967213118], [1.60410114E12, 0.020634920634920614], [1.60410162E12, 0.0], [1.60410132E12, 0.016605166051660507], [1.6041015E12, 0.015999999999999983]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410162E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 192.0, "minX": 1.60410108E12, "maxY": 6776.0, "series": [{"data": [[1.6041012E12, 5032.0], [1.60410138E12, 6776.0], [1.60410108E12, 6315.0], [1.60410156E12, 4074.0], [1.60410126E12, 3881.0], [1.60410144E12, 3813.0], [1.60410114E12, 6251.0], [1.60410162E12, 4159.0], [1.60410132E12, 4611.0], [1.6041015E12, 3336.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6041012E12, 208.63799971818923], [1.60410138E12, 219.95399973630904], [1.60410108E12, 207.39699977755546], [1.60410156E12, 203.15599912166596], [1.60410126E12, 209.38899956583975], [1.60410144E12, 205.49899985432626], [1.60410114E12, 205.35799969911577], [1.60410162E12, 259.98599843740465], [1.60410132E12, 200.88699987053872], [1.6041015E12, 200.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6041012E12, 209.7018001127243], [1.60410138E12, 221.42410015821457], [1.60410108E12, 209.02570038557053], [1.60410156E12, 206.0786000585556], [1.60410126E12, 211.00930005788803], [1.60410144E12, 206.0], [1.60410114E12, 206.0], [1.60410162E12, 265.88460062503816], [1.60410132E12, 201.37570005178452], [1.6041015E12, 200.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6041012E12, 209.2289998590946], [1.60410138E12, 220.76049980223178], [1.60410108E12, 207.86349988877774], [1.60410156E12, 204.99799956083297], [1.60410126E12, 210.2994997829199], [1.60410144E12, 205.80449992716314], [1.60410114E12, 205.98899984955787], [1.60410162E12, 263.2629992187023], [1.60410132E12, 201.15849993526936], [1.6041015E12, 200.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6041012E12, 194.0], [1.60410138E12, 198.0], [1.60410108E12, 204.0], [1.60410156E12, 193.0], [1.60410126E12, 196.0], [1.60410144E12, 196.0], [1.60410114E12, 201.0], [1.60410162E12, 259.0], [1.60410132E12, 192.0], [1.6041015E12, 193.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6041012E12, 757.0], [1.60410138E12, 957.5], [1.60410108E12, 1032.5], [1.60410156E12, 825.0], [1.60410126E12, 799.0], [1.60410144E12, 753.5], [1.60410114E12, 796.5], [1.60410162E12, 1213.0], [1.60410132E12, 949.5], [1.6041015E12, 748.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410162E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 426.5, "minX": 1.0, "maxY": 2795.0, "series": [{"data": [[2.0, 1979.0], [3.0, 1803.0], [4.0, 1666.0], [5.0, 1361.5], [6.0, 1211.0], [7.0, 1203.0], [8.0, 1095.0], [9.0, 1034.0], [10.0, 952.0], [11.0, 861.0], [12.0, 779.5], [13.0, 728.0], [14.0, 646.0], [15.0, 562.0], [16.0, 567.5], [1.0, 2795.0], [17.0, 472.0], [18.0, 457.0], [19.0, 524.5], [20.0, 458.0], [21.0, 461.0], [22.0, 432.5], [23.0, 448.0], [24.0, 426.5], [25.0, 432.0], [26.0, 427.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 426.0, "minX": 1.0, "maxY": 2794.0, "series": [{"data": [[2.0, 1973.5], [3.0, 1798.0], [4.0, 1660.5], [5.0, 1356.5], [6.0, 1208.0], [7.0, 1202.0], [8.0, 1092.0], [9.0, 1032.5], [10.0, 950.0], [11.0, 861.0], [12.0, 778.5], [13.0, 728.0], [14.0, 645.0], [15.0, 562.0], [16.0, 567.5], [1.0, 2794.0], [17.0, 472.0], [18.0, 457.0], [19.0, 523.5], [20.0, 458.0], [21.0, 461.0], [22.0, 432.5], [23.0, 447.5], [24.0, 426.0], [25.0, 432.0], [26.0, 427.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.7, "minX": 1.60410108E12, "maxY": 10.5, "series": [{"data": [[1.6041012E12, 9.833333333333334], [1.60410138E12, 9.216666666666667], [1.60410108E12, 5.333333333333333], [1.60410156E12, 10.216666666666667], [1.60410126E12, 10.1], [1.60410144E12, 10.166666666666666], [1.60410114E12, 10.5], [1.60410162E12, 1.7], [1.60410132E12, 9.016666666666667], [1.6041015E12, 10.416666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410162E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.60410108E12, "maxY": 10.5, "series": [{"data": [[1.6041012E12, 9.833333333333334], [1.60410138E12, 9.2], [1.60410108E12, 5.166666666666667], [1.60410156E12, 10.216666666666667], [1.60410126E12, 10.1], [1.60410144E12, 10.166666666666666], [1.60410114E12, 10.5], [1.60410162E12, 1.8666666666666667], [1.60410132E12, 9.033333333333333], [1.6041015E12, 10.416666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60410162E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.60410108E12, "maxY": 10.5, "series": [{"data": [[1.6041012E12, 9.833333333333334], [1.60410138E12, 9.2], [1.60410108E12, 5.166666666666667], [1.60410156E12, 10.216666666666667], [1.60410126E12, 10.1], [1.60410144E12, 10.166666666666666], [1.60410114E12, 10.5], [1.60410162E12, 1.8666666666666667], [1.60410132E12, 9.033333333333333], [1.6041015E12, 10.416666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410162E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.60410108E12, "maxY": 10.5, "series": [{"data": [[1.6041012E12, 9.833333333333334], [1.60410138E12, 9.2], [1.60410108E12, 5.166666666666667], [1.60410156E12, 10.216666666666667], [1.60410126E12, 10.1], [1.60410144E12, 10.166666666666666], [1.60410114E12, 10.5], [1.60410162E12, 1.8666666666666667], [1.60410132E12, 9.033333333333333], [1.6041015E12, 10.416666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60410162E12, "title": "Total Transactions Per Second"}},
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

