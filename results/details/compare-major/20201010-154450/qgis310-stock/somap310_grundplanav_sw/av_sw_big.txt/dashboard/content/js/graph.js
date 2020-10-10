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
        data: {"result": {"minY": 178.0, "minX": 0.0, "maxY": 8909.0, "series": [{"data": [[0.0, 178.0], [0.1, 188.0], [0.2, 190.0], [0.3, 191.0], [0.4, 192.0], [0.5, 194.0], [0.6, 195.0], [0.7, 196.0], [0.8, 197.0], [0.9, 198.0], [1.0, 198.0], [1.1, 199.0], [1.2, 200.0], [1.3, 201.0], [1.4, 201.0], [1.5, 202.0], [1.6, 204.0], [1.7, 204.0], [1.8, 205.0], [1.9, 206.0], [2.0, 208.0], [2.1, 209.0], [2.2, 211.0], [2.3, 212.0], [2.4, 213.0], [2.5, 214.0], [2.6, 214.0], [2.7, 216.0], [2.8, 216.0], [2.9, 217.0], [3.0, 217.0], [3.1, 218.0], [3.2, 219.0], [3.3, 220.0], [3.4, 220.0], [3.5, 221.0], [3.6, 222.0], [3.7, 223.0], [3.8, 223.0], [3.9, 223.0], [4.0, 224.0], [4.1, 224.0], [4.2, 225.0], [4.3, 225.0], [4.4, 225.0], [4.5, 226.0], [4.6, 227.0], [4.7, 227.0], [4.8, 228.0], [4.9, 229.0], [5.0, 229.0], [5.1, 230.0], [5.2, 231.0], [5.3, 231.0], [5.4, 232.0], [5.5, 233.0], [5.6, 234.0], [5.7, 234.0], [5.8, 235.0], [5.9, 236.0], [6.0, 237.0], [6.1, 238.0], [6.2, 239.0], [6.3, 241.0], [6.4, 243.0], [6.5, 244.0], [6.6, 248.0], [6.7, 250.0], [6.8, 252.0], [6.9, 254.0], [7.0, 261.0], [7.1, 265.0], [7.2, 268.0], [7.3, 272.0], [7.4, 276.0], [7.5, 278.0], [7.6, 278.0], [7.7, 281.0], [7.8, 284.0], [7.9, 286.0], [8.0, 287.0], [8.1, 288.0], [8.2, 289.0], [8.3, 291.0], [8.4, 292.0], [8.5, 294.0], [8.6, 296.0], [8.7, 296.0], [8.8, 298.0], [8.9, 299.0], [9.0, 301.0], [9.1, 301.0], [9.2, 302.0], [9.3, 304.0], [9.4, 305.0], [9.5, 306.0], [9.6, 306.0], [9.7, 307.0], [9.8, 308.0], [9.9, 309.0], [10.0, 312.0], [10.1, 314.0], [10.2, 314.0], [10.3, 315.0], [10.4, 315.0], [10.5, 316.0], [10.6, 317.0], [10.7, 318.0], [10.8, 318.0], [10.9, 319.0], [11.0, 319.0], [11.1, 321.0], [11.2, 321.0], [11.3, 322.0], [11.4, 323.0], [11.5, 324.0], [11.6, 324.0], [11.7, 325.0], [11.8, 326.0], [11.9, 326.0], [12.0, 328.0], [12.1, 328.0], [12.2, 329.0], [12.3, 330.0], [12.4, 331.0], [12.5, 332.0], [12.6, 334.0], [12.7, 335.0], [12.8, 336.0], [12.9, 337.0], [13.0, 339.0], [13.1, 339.0], [13.2, 341.0], [13.3, 343.0], [13.4, 344.0], [13.5, 345.0], [13.6, 347.0], [13.7, 348.0], [13.8, 349.0], [13.9, 351.0], [14.0, 352.0], [14.1, 353.0], [14.2, 355.0], [14.3, 357.0], [14.4, 358.0], [14.5, 361.0], [14.6, 362.0], [14.7, 363.0], [14.8, 366.0], [14.9, 368.0], [15.0, 369.0], [15.1, 370.0], [15.2, 370.0], [15.3, 372.0], [15.4, 373.0], [15.5, 374.0], [15.6, 375.0], [15.7, 376.0], [15.8, 378.0], [15.9, 379.0], [16.0, 382.0], [16.1, 383.0], [16.2, 384.0], [16.3, 386.0], [16.4, 388.0], [16.5, 390.0], [16.6, 392.0], [16.7, 393.0], [16.8, 395.0], [16.9, 396.0], [17.0, 397.0], [17.1, 398.0], [17.2, 399.0], [17.3, 401.0], [17.4, 404.0], [17.5, 405.0], [17.6, 406.0], [17.7, 407.0], [17.8, 407.0], [17.9, 408.0], [18.0, 409.0], [18.1, 410.0], [18.2, 411.0], [18.3, 413.0], [18.4, 414.0], [18.5, 416.0], [18.6, 418.0], [18.7, 419.0], [18.8, 420.0], [18.9, 422.0], [19.0, 423.0], [19.1, 423.0], [19.2, 424.0], [19.3, 425.0], [19.4, 426.0], [19.5, 426.0], [19.6, 427.0], [19.7, 428.0], [19.8, 429.0], [19.9, 431.0], [20.0, 431.0], [20.1, 432.0], [20.2, 433.0], [20.3, 434.0], [20.4, 434.0], [20.5, 436.0], [20.6, 437.0], [20.7, 439.0], [20.8, 440.0], [20.9, 440.0], [21.0, 441.0], [21.1, 442.0], [21.2, 442.0], [21.3, 443.0], [21.4, 444.0], [21.5, 445.0], [21.6, 446.0], [21.7, 447.0], [21.8, 448.0], [21.9, 449.0], [22.0, 449.0], [22.1, 450.0], [22.2, 451.0], [22.3, 451.0], [22.4, 452.0], [22.5, 453.0], [22.6, 454.0], [22.7, 455.0], [22.8, 456.0], [22.9, 457.0], [23.0, 457.0], [23.1, 458.0], [23.2, 459.0], [23.3, 460.0], [23.4, 460.0], [23.5, 461.0], [23.6, 462.0], [23.7, 463.0], [23.8, 464.0], [23.9, 465.0], [24.0, 466.0], [24.1, 466.0], [24.2, 467.0], [24.3, 469.0], [24.4, 470.0], [24.5, 471.0], [24.6, 472.0], [24.7, 473.0], [24.8, 475.0], [24.9, 475.0], [25.0, 477.0], [25.1, 478.0], [25.2, 479.0], [25.3, 480.0], [25.4, 481.0], [25.5, 482.0], [25.6, 483.0], [25.7, 484.0], [25.8, 486.0], [25.9, 487.0], [26.0, 488.0], [26.1, 490.0], [26.2, 492.0], [26.3, 493.0], [26.4, 494.0], [26.5, 495.0], [26.6, 496.0], [26.7, 497.0], [26.8, 499.0], [26.9, 500.0], [27.0, 501.0], [27.1, 502.0], [27.2, 503.0], [27.3, 505.0], [27.4, 509.0], [27.5, 510.0], [27.6, 511.0], [27.7, 514.0], [27.8, 515.0], [27.9, 516.0], [28.0, 518.0], [28.1, 519.0], [28.2, 521.0], [28.3, 522.0], [28.4, 523.0], [28.5, 524.0], [28.6, 526.0], [28.7, 527.0], [28.8, 529.0], [28.9, 530.0], [29.0, 532.0], [29.1, 534.0], [29.2, 536.0], [29.3, 537.0], [29.4, 538.0], [29.5, 539.0], [29.6, 541.0], [29.7, 542.0], [29.8, 543.0], [29.9, 544.0], [30.0, 546.0], [30.1, 547.0], [30.2, 548.0], [30.3, 549.0], [30.4, 552.0], [30.5, 553.0], [30.6, 553.0], [30.7, 555.0], [30.8, 556.0], [30.9, 557.0], [31.0, 559.0], [31.1, 560.0], [31.2, 562.0], [31.3, 563.0], [31.4, 564.0], [31.5, 565.0], [31.6, 566.0], [31.7, 567.0], [31.8, 568.0], [31.9, 570.0], [32.0, 571.0], [32.1, 571.0], [32.2, 573.0], [32.3, 575.0], [32.4, 575.0], [32.5, 576.0], [32.6, 578.0], [32.7, 579.0], [32.8, 581.0], [32.9, 582.0], [33.0, 584.0], [33.1, 584.0], [33.2, 585.0], [33.3, 586.0], [33.4, 587.0], [33.5, 588.0], [33.6, 589.0], [33.7, 590.0], [33.8, 591.0], [33.9, 592.0], [34.0, 593.0], [34.1, 595.0], [34.2, 596.0], [34.3, 596.0], [34.4, 598.0], [34.5, 599.0], [34.6, 600.0], [34.7, 601.0], [34.8, 602.0], [34.9, 603.0], [35.0, 604.0], [35.1, 605.0], [35.2, 606.0], [35.3, 608.0], [35.4, 609.0], [35.5, 610.0], [35.6, 611.0], [35.7, 612.0], [35.8, 613.0], [35.9, 614.0], [36.0, 615.0], [36.1, 616.0], [36.2, 617.0], [36.3, 617.0], [36.4, 619.0], [36.5, 619.0], [36.6, 620.0], [36.7, 621.0], [36.8, 622.0], [36.9, 624.0], [37.0, 624.0], [37.1, 625.0], [37.2, 626.0], [37.3, 628.0], [37.4, 629.0], [37.5, 629.0], [37.6, 631.0], [37.7, 632.0], [37.8, 634.0], [37.9, 636.0], [38.0, 637.0], [38.1, 638.0], [38.2, 639.0], [38.3, 641.0], [38.4, 641.0], [38.5, 643.0], [38.6, 644.0], [38.7, 645.0], [38.8, 646.0], [38.9, 646.0], [39.0, 648.0], [39.1, 650.0], [39.2, 652.0], [39.3, 653.0], [39.4, 654.0], [39.5, 655.0], [39.6, 657.0], [39.7, 658.0], [39.8, 660.0], [39.9, 662.0], [40.0, 664.0], [40.1, 665.0], [40.2, 667.0], [40.3, 667.0], [40.4, 668.0], [40.5, 669.0], [40.6, 670.0], [40.7, 672.0], [40.8, 674.0], [40.9, 675.0], [41.0, 676.0], [41.1, 677.0], [41.2, 678.0], [41.3, 679.0], [41.4, 679.0], [41.5, 681.0], [41.6, 683.0], [41.7, 685.0], [41.8, 687.0], [41.9, 689.0], [42.0, 690.0], [42.1, 691.0], [42.2, 693.0], [42.3, 695.0], [42.4, 696.0], [42.5, 699.0], [42.6, 700.0], [42.7, 701.0], [42.8, 702.0], [42.9, 703.0], [43.0, 705.0], [43.1, 706.0], [43.2, 708.0], [43.3, 710.0], [43.4, 712.0], [43.5, 713.0], [43.6, 715.0], [43.7, 717.0], [43.8, 717.0], [43.9, 719.0], [44.0, 721.0], [44.1, 721.0], [44.2, 723.0], [44.3, 724.0], [44.4, 725.0], [44.5, 727.0], [44.6, 728.0], [44.7, 730.0], [44.8, 733.0], [44.9, 734.0], [45.0, 735.0], [45.1, 737.0], [45.2, 737.0], [45.3, 742.0], [45.4, 745.0], [45.5, 747.0], [45.6, 749.0], [45.7, 750.0], [45.8, 752.0], [45.9, 755.0], [46.0, 758.0], [46.1, 759.0], [46.2, 759.0], [46.3, 761.0], [46.4, 764.0], [46.5, 767.0], [46.6, 769.0], [46.7, 770.0], [46.8, 771.0], [46.9, 772.0], [47.0, 775.0], [47.1, 775.0], [47.2, 777.0], [47.3, 778.0], [47.4, 780.0], [47.5, 782.0], [47.6, 784.0], [47.7, 786.0], [47.8, 787.0], [47.9, 789.0], [48.0, 792.0], [48.1, 794.0], [48.2, 796.0], [48.3, 798.0], [48.4, 799.0], [48.5, 801.0], [48.6, 805.0], [48.7, 806.0], [48.8, 809.0], [48.9, 810.0], [49.0, 811.0], [49.1, 814.0], [49.2, 815.0], [49.3, 817.0], [49.4, 820.0], [49.5, 824.0], [49.6, 827.0], [49.7, 830.0], [49.8, 832.0], [49.9, 835.0], [50.0, 837.0], [50.1, 839.0], [50.2, 840.0], [50.3, 844.0], [50.4, 845.0], [50.5, 848.0], [50.6, 849.0], [50.7, 853.0], [50.8, 855.0], [50.9, 857.0], [51.0, 862.0], [51.1, 865.0], [51.2, 868.0], [51.3, 870.0], [51.4, 873.0], [51.5, 875.0], [51.6, 878.0], [51.7, 883.0], [51.8, 886.0], [51.9, 889.0], [52.0, 891.0], [52.1, 895.0], [52.2, 897.0], [52.3, 901.0], [52.4, 903.0], [52.5, 907.0], [52.6, 910.0], [52.7, 914.0], [52.8, 917.0], [52.9, 918.0], [53.0, 922.0], [53.1, 923.0], [53.2, 924.0], [53.3, 926.0], [53.4, 929.0], [53.5, 932.0], [53.6, 934.0], [53.7, 937.0], [53.8, 939.0], [53.9, 942.0], [54.0, 944.0], [54.1, 946.0], [54.2, 949.0], [54.3, 951.0], [54.4, 953.0], [54.5, 956.0], [54.6, 958.0], [54.7, 961.0], [54.8, 962.0], [54.9, 963.0], [55.0, 964.0], [55.1, 968.0], [55.2, 970.0], [55.3, 971.0], [55.4, 972.0], [55.5, 975.0], [55.6, 977.0], [55.7, 978.0], [55.8, 980.0], [55.9, 981.0], [56.0, 984.0], [56.1, 986.0], [56.2, 987.0], [56.3, 989.0], [56.4, 990.0], [56.5, 992.0], [56.6, 994.0], [56.7, 999.0], [56.8, 1002.0], [56.9, 1003.0], [57.0, 1005.0], [57.1, 1007.0], [57.2, 1008.0], [57.3, 1011.0], [57.4, 1013.0], [57.5, 1014.0], [57.6, 1017.0], [57.7, 1019.0], [57.8, 1019.0], [57.9, 1022.0], [58.0, 1024.0], [58.1, 1025.0], [58.2, 1027.0], [58.3, 1028.0], [58.4, 1029.0], [58.5, 1031.0], [58.6, 1034.0], [58.7, 1036.0], [58.8, 1038.0], [58.9, 1040.0], [59.0, 1044.0], [59.1, 1046.0], [59.2, 1048.0], [59.3, 1049.0], [59.4, 1051.0], [59.5, 1055.0], [59.6, 1058.0], [59.7, 1059.0], [59.8, 1061.0], [59.9, 1063.0], [60.0, 1065.0], [60.1, 1069.0], [60.2, 1072.0], [60.3, 1075.0], [60.4, 1076.0], [60.5, 1078.0], [60.6, 1082.0], [60.7, 1084.0], [60.8, 1087.0], [60.9, 1090.0], [61.0, 1091.0], [61.1, 1093.0], [61.2, 1095.0], [61.3, 1098.0], [61.4, 1099.0], [61.5, 1102.0], [61.6, 1105.0], [61.7, 1107.0], [61.8, 1108.0], [61.9, 1109.0], [62.0, 1111.0], [62.1, 1114.0], [62.2, 1116.0], [62.3, 1116.0], [62.4, 1118.0], [62.5, 1120.0], [62.6, 1123.0], [62.7, 1126.0], [62.8, 1128.0], [62.9, 1132.0], [63.0, 1135.0], [63.1, 1137.0], [63.2, 1138.0], [63.3, 1140.0], [63.4, 1142.0], [63.5, 1144.0], [63.6, 1146.0], [63.7, 1148.0], [63.8, 1149.0], [63.9, 1151.0], [64.0, 1152.0], [64.1, 1153.0], [64.2, 1154.0], [64.3, 1155.0], [64.4, 1158.0], [64.5, 1160.0], [64.6, 1161.0], [64.7, 1164.0], [64.8, 1166.0], [64.9, 1167.0], [65.0, 1168.0], [65.1, 1170.0], [65.2, 1171.0], [65.3, 1174.0], [65.4, 1176.0], [65.5, 1179.0], [65.6, 1179.0], [65.7, 1181.0], [65.8, 1183.0], [65.9, 1186.0], [66.0, 1187.0], [66.1, 1188.0], [66.2, 1189.0], [66.3, 1192.0], [66.4, 1194.0], [66.5, 1195.0], [66.6, 1198.0], [66.7, 1200.0], [66.8, 1202.0], [66.9, 1206.0], [67.0, 1208.0], [67.1, 1209.0], [67.2, 1211.0], [67.3, 1213.0], [67.4, 1215.0], [67.5, 1217.0], [67.6, 1218.0], [67.7, 1219.0], [67.8, 1221.0], [67.9, 1224.0], [68.0, 1227.0], [68.1, 1229.0], [68.2, 1231.0], [68.3, 1232.0], [68.4, 1234.0], [68.5, 1237.0], [68.6, 1241.0], [68.7, 1242.0], [68.8, 1244.0], [68.9, 1246.0], [69.0, 1250.0], [69.1, 1251.0], [69.2, 1254.0], [69.3, 1255.0], [69.4, 1258.0], [69.5, 1260.0], [69.6, 1261.0], [69.7, 1262.0], [69.8, 1263.0], [69.9, 1264.0], [70.0, 1267.0], [70.1, 1270.0], [70.2, 1270.0], [70.3, 1275.0], [70.4, 1279.0], [70.5, 1282.0], [70.6, 1284.0], [70.7, 1287.0], [70.8, 1290.0], [70.9, 1291.0], [71.0, 1293.0], [71.1, 1296.0], [71.2, 1297.0], [71.3, 1299.0], [71.4, 1303.0], [71.5, 1305.0], [71.6, 1312.0], [71.7, 1316.0], [71.8, 1317.0], [71.9, 1320.0], [72.0, 1323.0], [72.1, 1325.0], [72.2, 1329.0], [72.3, 1331.0], [72.4, 1333.0], [72.5, 1338.0], [72.6, 1340.0], [72.7, 1342.0], [72.8, 1345.0], [72.9, 1348.0], [73.0, 1350.0], [73.1, 1354.0], [73.2, 1358.0], [73.3, 1362.0], [73.4, 1364.0], [73.5, 1367.0], [73.6, 1369.0], [73.7, 1371.0], [73.8, 1374.0], [73.9, 1375.0], [74.0, 1379.0], [74.1, 1381.0], [74.2, 1384.0], [74.3, 1386.0], [74.4, 1389.0], [74.5, 1392.0], [74.6, 1394.0], [74.7, 1397.0], [74.8, 1399.0], [74.9, 1402.0], [75.0, 1403.0], [75.1, 1405.0], [75.2, 1406.0], [75.3, 1410.0], [75.4, 1412.0], [75.5, 1414.0], [75.6, 1418.0], [75.7, 1420.0], [75.8, 1422.0], [75.9, 1424.0], [76.0, 1426.0], [76.1, 1428.0], [76.2, 1430.0], [76.3, 1431.0], [76.4, 1433.0], [76.5, 1435.0], [76.6, 1439.0], [76.7, 1441.0], [76.8, 1444.0], [76.9, 1447.0], [77.0, 1448.0], [77.1, 1449.0], [77.2, 1452.0], [77.3, 1455.0], [77.4, 1461.0], [77.5, 1463.0], [77.6, 1465.0], [77.7, 1469.0], [77.8, 1470.0], [77.9, 1473.0], [78.0, 1473.0], [78.1, 1476.0], [78.2, 1478.0], [78.3, 1479.0], [78.4, 1481.0], [78.5, 1484.0], [78.6, 1486.0], [78.7, 1488.0], [78.8, 1491.0], [78.9, 1494.0], [79.0, 1497.0], [79.1, 1499.0], [79.2, 1501.0], [79.3, 1503.0], [79.4, 1505.0], [79.5, 1506.0], [79.6, 1507.0], [79.7, 1509.0], [79.8, 1510.0], [79.9, 1511.0], [80.0, 1513.0], [80.1, 1515.0], [80.2, 1518.0], [80.3, 1523.0], [80.4, 1525.0], [80.5, 1527.0], [80.6, 1530.0], [80.7, 1532.0], [80.8, 1533.0], [80.9, 1535.0], [81.0, 1540.0], [81.1, 1542.0], [81.2, 1545.0], [81.3, 1548.0], [81.4, 1551.0], [81.5, 1553.0], [81.6, 1557.0], [81.7, 1560.0], [81.8, 1563.0], [81.9, 1566.0], [82.0, 1568.0], [82.1, 1572.0], [82.2, 1574.0], [82.3, 1576.0], [82.4, 1579.0], [82.5, 1582.0], [82.6, 1587.0], [82.7, 1593.0], [82.8, 1595.0], [82.9, 1597.0], [83.0, 1599.0], [83.1, 1602.0], [83.2, 1606.0], [83.3, 1607.0], [83.4, 1611.0], [83.5, 1618.0], [83.6, 1619.0], [83.7, 1621.0], [83.8, 1623.0], [83.9, 1627.0], [84.0, 1630.0], [84.1, 1633.0], [84.2, 1636.0], [84.3, 1642.0], [84.4, 1644.0], [84.5, 1648.0], [84.6, 1650.0], [84.7, 1652.0], [84.8, 1656.0], [84.9, 1657.0], [85.0, 1660.0], [85.1, 1661.0], [85.2, 1663.0], [85.3, 1670.0], [85.4, 1673.0], [85.5, 1676.0], [85.6, 1678.0], [85.7, 1681.0], [85.8, 1686.0], [85.9, 1690.0], [86.0, 1692.0], [86.1, 1694.0], [86.2, 1697.0], [86.3, 1702.0], [86.4, 1704.0], [86.5, 1706.0], [86.6, 1711.0], [86.7, 1715.0], [86.8, 1719.0], [86.9, 1723.0], [87.0, 1728.0], [87.1, 1733.0], [87.2, 1738.0], [87.3, 1740.0], [87.4, 1746.0], [87.5, 1749.0], [87.6, 1753.0], [87.7, 1758.0], [87.8, 1762.0], [87.9, 1766.0], [88.0, 1770.0], [88.1, 1777.0], [88.2, 1784.0], [88.3, 1786.0], [88.4, 1794.0], [88.5, 1804.0], [88.6, 1807.0], [88.7, 1810.0], [88.8, 1816.0], [88.9, 1829.0], [89.0, 1833.0], [89.1, 1836.0], [89.2, 1840.0], [89.3, 1848.0], [89.4, 1854.0], [89.5, 1858.0], [89.6, 1862.0], [89.7, 1870.0], [89.8, 1877.0], [89.9, 1883.0], [90.0, 1888.0], [90.1, 1894.0], [90.2, 1898.0], [90.3, 1903.0], [90.4, 1910.0], [90.5, 1914.0], [90.6, 1920.0], [90.7, 1926.0], [90.8, 1931.0], [90.9, 1937.0], [91.0, 1941.0], [91.1, 1952.0], [91.2, 1959.0], [91.3, 1962.0], [91.4, 1967.0], [91.5, 1978.0], [91.6, 1987.0], [91.7, 2003.0], [91.8, 2011.0], [91.9, 2020.0], [92.0, 2033.0], [92.1, 2041.0], [92.2, 2050.0], [92.3, 2056.0], [92.4, 2067.0], [92.5, 2073.0], [92.6, 2080.0], [92.7, 2089.0], [92.8, 2098.0], [92.9, 2107.0], [93.0, 2113.0], [93.1, 2123.0], [93.2, 2134.0], [93.3, 2137.0], [93.4, 2146.0], [93.5, 2153.0], [93.6, 2158.0], [93.7, 2168.0], [93.8, 2180.0], [93.9, 2188.0], [94.0, 2197.0], [94.1, 2208.0], [94.2, 2220.0], [94.3, 2235.0], [94.4, 2251.0], [94.5, 2260.0], [94.6, 2274.0], [94.7, 2282.0], [94.8, 2300.0], [94.9, 2307.0], [95.0, 2317.0], [95.1, 2325.0], [95.2, 2339.0], [95.3, 2347.0], [95.4, 2359.0], [95.5, 2365.0], [95.6, 2378.0], [95.7, 2388.0], [95.8, 2397.0], [95.9, 2408.0], [96.0, 2427.0], [96.1, 2435.0], [96.2, 2444.0], [96.3, 2450.0], [96.4, 2477.0], [96.5, 2497.0], [96.6, 2513.0], [96.7, 2526.0], [96.8, 2547.0], [96.9, 2553.0], [97.0, 2559.0], [97.1, 2580.0], [97.2, 2610.0], [97.3, 2654.0], [97.4, 2671.0], [97.5, 2681.0], [97.6, 2695.0], [97.7, 2712.0], [97.8, 2739.0], [97.9, 2784.0], [98.0, 2803.0], [98.1, 2830.0], [98.2, 2888.0], [98.3, 2906.0], [98.4, 2922.0], [98.5, 2971.0], [98.6, 3007.0], [98.7, 3043.0], [98.8, 3105.0], [98.9, 3156.0], [99.0, 3246.0], [99.1, 3302.0], [99.2, 3361.0], [99.3, 3571.0], [99.4, 3657.0], [99.5, 3780.0], [99.6, 4379.0], [99.7, 4685.0], [99.8, 5408.0], [99.9, 5746.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 501.0, "series": [{"data": [[600.0, 416.0], [700.0, 302.0], [800.0, 200.0], [900.0, 231.0], [1000.0, 245.0], [1100.0, 272.0], [1200.0, 242.0], [1300.0, 182.0], [1400.0, 223.0], [1500.0, 202.0], [1600.0, 167.0], [1700.0, 114.0], [1800.0, 95.0], [1900.0, 74.0], [2000.0, 59.0], [2100.0, 62.0], [2200.0, 40.0], [2300.0, 53.0], [2400.0, 38.0], [2500.0, 31.0], [2600.0, 25.0], [2800.0, 14.0], [2700.0, 18.0], [2900.0, 17.0], [3000.0, 11.0], [3100.0, 7.0], [3300.0, 7.0], [3200.0, 9.0], [3400.0, 2.0], [3500.0, 4.0], [3700.0, 4.0], [3600.0, 6.0], [3800.0, 2.0], [4000.0, 1.0], [4300.0, 2.0], [4400.0, 2.0], [4600.0, 1.0], [4500.0, 1.0], [4800.0, 1.0], [4700.0, 2.0], [5100.0, 1.0], [5600.0, 2.0], [5400.0, 1.0], [5500.0, 1.0], [5700.0, 2.0], [5900.0, 2.0], [6000.0, 1.0], [6500.0, 1.0], [8900.0, 1.0], [100.0, 62.0], [200.0, 400.0], [300.0, 431.0], [400.0, 501.0], [500.0, 400.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1081.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2712.0, "series": [{"data": [[0.0, 1397.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2712.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1081.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.91862567811935, "minX": 1.6023459E12, "maxY": 10.0, "series": [{"data": [[1.60234626E12, 10.0], [1.60234608E12, 10.0], [1.60234614E12, 10.0], [1.60234596E12, 10.0], [1.60234602E12, 10.0], [1.60234632E12, 10.0], [1.6023459E12, 10.0], [1.60234638E12, 9.91862567811935], [1.6023462E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234638E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 570.0, "minX": 1.0, "maxY": 2837.0, "series": [{"data": [[8.0, 610.0], [4.0, 2137.0], [2.0, 1016.0], [1.0, 2837.0], [9.0, 699.0], [10.0, 1015.0370584829192], [5.0, 1750.0], [6.0, 570.0], [3.0, 1302.0], [7.0, 690.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1015.5140655105982]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3163.8333333333335, "minX": 1.6023459E12, "maxY": 3470019.783333333, "series": [{"data": [[1.60234626E12, 2971740.0166666666], [1.60234608E12, 2859281.65], [1.60234614E12, 2777819.816666667], [1.60234596E12, 2257802.316666667], [1.60234602E12, 3470019.783333333], [1.60234632E12, 2812749.716666667], [1.6023459E12, 2327301.1666666665], [1.60234638E12, 2322738.816666667], [1.6023462E12, 2173312.033333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60234626E12, 4824.85], [1.60234608E12, 4681.7], [1.60234614E12, 3612.133333333333], [1.60234596E12, 4790.8], [1.60234602E12, 4706.683333333333], [1.60234632E12, 4832.583333333333], [1.6023459E12, 3163.8333333333335], [1.60234638E12, 4169.366666666667], [1.6023462E12, 3795.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234638E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 914.2442748091606, "minX": 1.6023459E12, "maxY": 1236.5316973415129, "series": [{"data": [[1.60234626E12, 917.1321044546853], [1.60234608E12, 966.056726094002], [1.60234614E12, 1236.5316973415129], [1.60234596E12, 914.2442748091606], [1.60234602E12, 959.9049919484696], [1.60234632E12, 946.9198113207542], [1.6023459E12, 1182.3650793650795], [1.60234638E12, 1004.4430379746843], [1.6023462E12, 1136.037950664136]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234638E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 912.8351145038175, "minX": 1.6023459E12, "maxY": 1234.3333333333323, "series": [{"data": [[1.60234626E12, 915.768049155146], [1.60234608E12, 964.2512155591572], [1.60234614E12, 1234.3333333333323], [1.60234596E12, 912.8351145038175], [1.60234602E12, 957.6731078904995], [1.60234632E12, 945.6430817610067], [1.6023459E12, 1180.4149659863947], [1.60234638E12, 1003.2151898734187], [1.6023462E12, 1134.6110056925982]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234638E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010849909584086792, "minX": 1.6023459E12, "maxY": 0.22675736961451215, "series": [{"data": [[1.60234626E12, 0.01228878648233487], [1.60234608E12, 0.01620745542949758], [1.60234614E12, 0.016359918200408993], [1.60234596E12, 0.016793893129771004], [1.60234602E12, 0.01449275362318841], [1.60234632E12, 0.012578616352201259], [1.6023459E12, 0.22675736961451215], [1.60234638E12, 0.010849909584086792], [1.6023462E12, 0.01707779886148008]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234638E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.6023459E12, "maxY": 8909.0, "series": [{"data": [[1.60234626E12, 2917.0], [1.60234608E12, 5688.0], [1.60234614E12, 6542.0], [1.60234596E12, 3889.0], [1.60234602E12, 4009.0], [1.60234632E12, 3475.0], [1.6023459E12, 8909.0], [1.60234638E12, 3657.0], [1.6023462E12, 5729.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60234626E12, 191.8679998445511], [1.60234608E12, 196.12399970531465], [1.60234614E12, 233.4099998831749], [1.60234596E12, 198.61599937438965], [1.60234602E12, 200.59799985170363], [1.60234632E12, 198.0], [1.6023459E12, 197.0], [1.60234638E12, 192.9719997358322], [1.6023462E12, 222.2719986152649]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60234626E12, 192.90960012435914], [1.60234608E12, 197.0], [1.60234614E12, 233.85100004673004], [1.60234596E12, 199.0], [1.60234602E12, 201.3156001186371], [1.60234632E12, 198.0], [1.6023459E12, 199.63060029506684], [1.60234638E12, 193.48460005283357], [1.6023462E12, 225.227200050354]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60234626E12, 192.38799984455108], [1.60234608E12, 196.74199985265733], [1.60234614E12, 233.65499994158745], [1.60234596E12, 199.0], [1.60234602E12, 200.90899992585182], [1.60234632E12, 198.0], [1.6023459E12, 198.39299963116645], [1.60234638E12, 193.26299993395804], [1.6023462E12, 225.0159999370575]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60234626E12, 188.0], [1.60234608E12, 188.0], [1.60234614E12, 220.0], [1.60234596E12, 187.0], [1.60234602E12, 183.0], [1.60234632E12, 185.0], [1.6023459E12, 188.0], [1.60234638E12, 178.0], [1.6023462E12, 192.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60234626E12, 691.0], [1.60234608E12, 810.0], [1.60234614E12, 1075.0], [1.60234596E12, 717.0], [1.60234602E12, 669.0], [1.60234632E12, 762.5], [1.6023459E12, 1027.0], [1.60234638E12, 812.0], [1.6023462E12, 1005.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234638E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 414.5, "minX": 1.0, "maxY": 3614.0, "series": [{"data": [[2.0, 2122.5], [3.0, 1412.5], [4.0, 1417.0], [5.0, 1365.0], [6.0, 1377.0], [7.0, 1177.5], [8.0, 1104.0], [9.0, 1032.5], [10.0, 988.5], [11.0, 848.0], [12.0, 832.0], [13.0, 718.5], [14.0, 658.5], [15.0, 593.0], [16.0, 476.0], [1.0, 3614.0], [17.0, 474.0], [18.0, 455.0], [19.0, 416.0], [20.0, 444.5], [21.0, 442.0], [22.0, 414.5], [23.0, 432.5], [24.0, 429.0], [25.0, 425.5], [26.0, 428.5], [28.0, 416.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 414.5, "minX": 1.0, "maxY": 3602.0, "series": [{"data": [[2.0, 2120.5], [3.0, 1410.5], [4.0, 1415.5], [5.0, 1365.0], [6.0, 1372.5], [7.0, 1171.0], [8.0, 1102.0], [9.0, 1031.0], [10.0, 986.5], [11.0, 847.5], [12.0, 831.0], [13.0, 716.5], [14.0, 658.5], [15.0, 593.0], [16.0, 476.0], [1.0, 3602.0], [17.0, 474.0], [18.0, 455.0], [19.0, 416.0], [20.0, 444.5], [21.0, 442.0], [22.0, 414.5], [23.0, 432.0], [24.0, 429.0], [25.0, 425.0], [26.0, 428.0], [28.0, 415.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.516666666666667, "minX": 1.6023459E12, "maxY": 10.916666666666666, "series": [{"data": [[1.60234626E12, 10.85], [1.60234608E12, 10.283333333333333], [1.60234614E12, 8.15], [1.60234596E12, 10.916666666666666], [1.60234602E12, 10.35], [1.60234632E12, 10.6], [1.6023459E12, 7.516666666666667], [1.60234638E12, 9.05], [1.6023462E12, 8.783333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234638E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.35, "minX": 1.6023459E12, "maxY": 10.916666666666666, "series": [{"data": [[1.60234626E12, 10.85], [1.60234608E12, 10.283333333333333], [1.60234614E12, 8.15], [1.60234596E12, 10.916666666666666], [1.60234602E12, 10.35], [1.60234632E12, 10.6], [1.6023459E12, 7.35], [1.60234638E12, 9.216666666666667], [1.6023462E12, 8.783333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234638E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.35, "minX": 1.6023459E12, "maxY": 10.916666666666666, "series": [{"data": [[1.60234626E12, 10.85], [1.60234608E12, 10.283333333333333], [1.60234614E12, 8.15], [1.60234596E12, 10.916666666666666], [1.60234602E12, 10.35], [1.60234632E12, 10.6], [1.6023459E12, 7.35], [1.60234638E12, 9.216666666666667], [1.6023462E12, 8.783333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234638E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.35, "minX": 1.6023459E12, "maxY": 10.916666666666666, "series": [{"data": [[1.60234626E12, 10.85], [1.60234608E12, 10.283333333333333], [1.60234614E12, 8.15], [1.60234596E12, 10.916666666666666], [1.60234602E12, 10.35], [1.60234632E12, 10.6], [1.6023459E12, 7.35], [1.60234638E12, 9.216666666666667], [1.6023462E12, 8.783333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234638E12, "title": "Total Transactions Per Second"}},
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

