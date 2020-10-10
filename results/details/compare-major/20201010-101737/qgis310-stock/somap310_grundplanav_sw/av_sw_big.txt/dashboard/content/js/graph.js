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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 6224.0, "series": [{"data": [[0.0, 179.0], [0.1, 182.0], [0.2, 184.0], [0.3, 185.0], [0.4, 186.0], [0.5, 187.0], [0.6, 188.0], [0.7, 189.0], [0.8, 190.0], [0.9, 191.0], [1.0, 192.0], [1.1, 193.0], [1.2, 193.0], [1.3, 194.0], [1.4, 195.0], [1.5, 195.0], [1.6, 196.0], [1.7, 197.0], [1.8, 198.0], [1.9, 199.0], [2.0, 201.0], [2.1, 202.0], [2.2, 203.0], [2.3, 203.0], [2.4, 204.0], [2.5, 205.0], [2.6, 206.0], [2.7, 207.0], [2.8, 209.0], [2.9, 209.0], [3.0, 210.0], [3.1, 211.0], [3.2, 212.0], [3.3, 213.0], [3.4, 213.0], [3.5, 214.0], [3.6, 214.0], [3.7, 215.0], [3.8, 216.0], [3.9, 216.0], [4.0, 217.0], [4.1, 217.0], [4.2, 218.0], [4.3, 219.0], [4.4, 219.0], [4.5, 219.0], [4.6, 221.0], [4.7, 221.0], [4.8, 222.0], [4.9, 223.0], [5.0, 224.0], [5.1, 224.0], [5.2, 225.0], [5.3, 225.0], [5.4, 226.0], [5.5, 226.0], [5.6, 228.0], [5.7, 228.0], [5.8, 229.0], [5.9, 231.0], [6.0, 231.0], [6.1, 232.0], [6.2, 233.0], [6.3, 234.0], [6.4, 235.0], [6.5, 235.0], [6.6, 237.0], [6.7, 238.0], [6.8, 239.0], [6.9, 240.0], [7.0, 241.0], [7.1, 243.0], [7.2, 245.0], [7.3, 248.0], [7.4, 252.0], [7.5, 255.0], [7.6, 260.0], [7.7, 264.0], [7.8, 265.0], [7.9, 267.0], [8.0, 269.0], [8.1, 270.0], [8.2, 274.0], [8.3, 276.0], [8.4, 278.0], [8.5, 279.0], [8.6, 280.0], [8.7, 281.0], [8.8, 283.0], [8.9, 285.0], [9.0, 287.0], [9.1, 288.0], [9.2, 290.0], [9.3, 292.0], [9.4, 294.0], [9.5, 295.0], [9.6, 297.0], [9.7, 299.0], [9.8, 301.0], [9.9, 301.0], [10.0, 303.0], [10.1, 304.0], [10.2, 306.0], [10.3, 307.0], [10.4, 307.0], [10.5, 308.0], [10.6, 309.0], [10.7, 309.0], [10.8, 310.0], [10.9, 311.0], [11.0, 311.0], [11.1, 312.0], [11.2, 312.0], [11.3, 313.0], [11.4, 314.0], [11.5, 315.0], [11.6, 315.0], [11.7, 315.0], [11.8, 317.0], [11.9, 318.0], [12.0, 319.0], [12.1, 319.0], [12.2, 320.0], [12.3, 320.0], [12.4, 321.0], [12.5, 321.0], [12.6, 322.0], [12.7, 323.0], [12.8, 324.0], [12.9, 326.0], [13.0, 326.0], [13.1, 327.0], [13.2, 329.0], [13.3, 330.0], [13.4, 331.0], [13.5, 332.0], [13.6, 333.0], [13.7, 335.0], [13.8, 336.0], [13.9, 337.0], [14.0, 338.0], [14.1, 339.0], [14.2, 341.0], [14.3, 343.0], [14.4, 344.0], [14.5, 345.0], [14.6, 347.0], [14.7, 350.0], [14.8, 352.0], [14.9, 353.0], [15.0, 355.0], [15.1, 358.0], [15.2, 359.0], [15.3, 361.0], [15.4, 362.0], [15.5, 363.0], [15.6, 365.0], [15.7, 366.0], [15.8, 367.0], [15.9, 369.0], [16.0, 371.0], [16.1, 372.0], [16.2, 374.0], [16.3, 375.0], [16.4, 377.0], [16.5, 378.0], [16.6, 379.0], [16.7, 379.0], [16.8, 381.0], [16.9, 382.0], [17.0, 384.0], [17.1, 386.0], [17.2, 387.0], [17.3, 387.0], [17.4, 389.0], [17.5, 391.0], [17.6, 393.0], [17.7, 394.0], [17.8, 395.0], [17.9, 397.0], [18.0, 398.0], [18.1, 399.0], [18.2, 399.0], [18.3, 402.0], [18.4, 404.0], [18.5, 406.0], [18.6, 406.0], [18.7, 408.0], [18.8, 409.0], [18.9, 411.0], [19.0, 412.0], [19.1, 413.0], [19.2, 414.0], [19.3, 414.0], [19.4, 416.0], [19.5, 417.0], [19.6, 418.0], [19.7, 419.0], [19.8, 420.0], [19.9, 420.0], [20.0, 421.0], [20.1, 422.0], [20.2, 422.0], [20.3, 423.0], [20.4, 424.0], [20.5, 426.0], [20.6, 427.0], [20.7, 428.0], [20.8, 428.0], [20.9, 429.0], [21.0, 430.0], [21.1, 431.0], [21.2, 432.0], [21.3, 432.0], [21.4, 433.0], [21.5, 434.0], [21.6, 435.0], [21.7, 435.0], [21.8, 436.0], [21.9, 436.0], [22.0, 437.0], [22.1, 438.0], [22.2, 438.0], [22.3, 439.0], [22.4, 440.0], [22.5, 441.0], [22.6, 443.0], [22.7, 443.0], [22.8, 444.0], [22.9, 444.0], [23.0, 445.0], [23.1, 446.0], [23.2, 447.0], [23.3, 447.0], [23.4, 448.0], [23.5, 449.0], [23.6, 451.0], [23.7, 451.0], [23.8, 452.0], [23.9, 453.0], [24.0, 453.0], [24.1, 454.0], [24.2, 455.0], [24.3, 456.0], [24.4, 457.0], [24.5, 457.0], [24.6, 459.0], [24.7, 459.0], [24.8, 460.0], [24.9, 461.0], [25.0, 463.0], [25.1, 463.0], [25.2, 464.0], [25.3, 466.0], [25.4, 467.0], [25.5, 467.0], [25.6, 468.0], [25.7, 469.0], [25.8, 470.0], [25.9, 471.0], [26.0, 472.0], [26.1, 473.0], [26.2, 474.0], [26.3, 475.0], [26.4, 475.0], [26.5, 477.0], [26.6, 479.0], [26.7, 480.0], [26.8, 482.0], [26.9, 484.0], [27.0, 486.0], [27.1, 487.0], [27.2, 488.0], [27.3, 489.0], [27.4, 490.0], [27.5, 491.0], [27.6, 492.0], [27.7, 493.0], [27.8, 496.0], [27.9, 498.0], [28.0, 500.0], [28.1, 502.0], [28.2, 503.0], [28.3, 504.0], [28.4, 504.0], [28.5, 508.0], [28.6, 511.0], [28.7, 514.0], [28.8, 515.0], [28.9, 516.0], [29.0, 520.0], [29.1, 521.0], [29.2, 522.0], [29.3, 524.0], [29.4, 525.0], [29.5, 528.0], [29.6, 529.0], [29.7, 531.0], [29.8, 531.0], [29.9, 533.0], [30.0, 535.0], [30.1, 537.0], [30.2, 538.0], [30.3, 539.0], [30.4, 540.0], [30.5, 541.0], [30.6, 542.0], [30.7, 543.0], [30.8, 544.0], [30.9, 546.0], [31.0, 548.0], [31.1, 550.0], [31.2, 551.0], [31.3, 552.0], [31.4, 554.0], [31.5, 555.0], [31.6, 557.0], [31.7, 558.0], [31.8, 559.0], [31.9, 560.0], [32.0, 562.0], [32.1, 563.0], [32.2, 564.0], [32.3, 565.0], [32.4, 566.0], [32.5, 568.0], [32.6, 569.0], [32.7, 570.0], [32.8, 571.0], [32.9, 573.0], [33.0, 574.0], [33.1, 575.0], [33.2, 577.0], [33.3, 578.0], [33.4, 578.0], [33.5, 580.0], [33.6, 581.0], [33.7, 582.0], [33.8, 584.0], [33.9, 585.0], [34.0, 586.0], [34.1, 588.0], [34.2, 588.0], [34.3, 590.0], [34.4, 591.0], [34.5, 591.0], [34.6, 596.0], [34.7, 597.0], [34.8, 600.0], [34.9, 600.0], [35.0, 601.0], [35.1, 603.0], [35.2, 604.0], [35.3, 605.0], [35.4, 606.0], [35.5, 607.0], [35.6, 611.0], [35.7, 612.0], [35.8, 613.0], [35.9, 614.0], [36.0, 615.0], [36.1, 616.0], [36.2, 616.0], [36.3, 617.0], [36.4, 619.0], [36.5, 620.0], [36.6, 622.0], [36.7, 623.0], [36.8, 624.0], [36.9, 625.0], [37.0, 626.0], [37.1, 627.0], [37.2, 628.0], [37.3, 629.0], [37.4, 631.0], [37.5, 632.0], [37.6, 633.0], [37.7, 634.0], [37.8, 635.0], [37.9, 636.0], [38.0, 637.0], [38.1, 638.0], [38.2, 639.0], [38.3, 641.0], [38.4, 641.0], [38.5, 642.0], [38.6, 643.0], [38.7, 645.0], [38.8, 646.0], [38.9, 648.0], [39.0, 649.0], [39.1, 650.0], [39.2, 650.0], [39.3, 651.0], [39.4, 652.0], [39.5, 653.0], [39.6, 656.0], [39.7, 657.0], [39.8, 659.0], [39.9, 659.0], [40.0, 660.0], [40.1, 660.0], [40.2, 661.0], [40.3, 662.0], [40.4, 663.0], [40.5, 666.0], [40.6, 667.0], [40.7, 669.0], [40.8, 671.0], [40.9, 672.0], [41.0, 674.0], [41.1, 675.0], [41.2, 676.0], [41.3, 678.0], [41.4, 679.0], [41.5, 680.0], [41.6, 682.0], [41.7, 682.0], [41.8, 684.0], [41.9, 685.0], [42.0, 686.0], [42.1, 687.0], [42.2, 689.0], [42.3, 690.0], [42.4, 691.0], [42.5, 692.0], [42.6, 693.0], [42.7, 694.0], [42.8, 696.0], [42.9, 697.0], [43.0, 700.0], [43.1, 701.0], [43.2, 702.0], [43.3, 704.0], [43.4, 706.0], [43.5, 710.0], [43.6, 712.0], [43.7, 713.0], [43.8, 716.0], [43.9, 717.0], [44.0, 720.0], [44.1, 723.0], [44.2, 726.0], [44.3, 727.0], [44.4, 732.0], [44.5, 735.0], [44.6, 736.0], [44.7, 738.0], [44.8, 740.0], [44.9, 741.0], [45.0, 744.0], [45.1, 746.0], [45.2, 747.0], [45.3, 749.0], [45.4, 750.0], [45.5, 752.0], [45.6, 754.0], [45.7, 756.0], [45.8, 758.0], [45.9, 759.0], [46.0, 761.0], [46.1, 763.0], [46.2, 765.0], [46.3, 766.0], [46.4, 768.0], [46.5, 770.0], [46.6, 772.0], [46.7, 773.0], [46.8, 774.0], [46.9, 776.0], [47.0, 777.0], [47.1, 777.0], [47.2, 779.0], [47.3, 780.0], [47.4, 782.0], [47.5, 784.0], [47.6, 785.0], [47.7, 786.0], [47.8, 789.0], [47.9, 792.0], [48.0, 794.0], [48.1, 796.0], [48.2, 797.0], [48.3, 798.0], [48.4, 802.0], [48.5, 804.0], [48.6, 806.0], [48.7, 807.0], [48.8, 809.0], [48.9, 811.0], [49.0, 814.0], [49.1, 817.0], [49.2, 819.0], [49.3, 821.0], [49.4, 821.0], [49.5, 823.0], [49.6, 824.0], [49.7, 826.0], [49.8, 829.0], [49.9, 833.0], [50.0, 834.0], [50.1, 836.0], [50.2, 838.0], [50.3, 840.0], [50.4, 843.0], [50.5, 845.0], [50.6, 848.0], [50.7, 848.0], [50.8, 850.0], [50.9, 852.0], [51.0, 853.0], [51.1, 856.0], [51.2, 858.0], [51.3, 860.0], [51.4, 862.0], [51.5, 865.0], [51.6, 867.0], [51.7, 868.0], [51.8, 871.0], [51.9, 872.0], [52.0, 874.0], [52.1, 876.0], [52.2, 878.0], [52.3, 879.0], [52.4, 882.0], [52.5, 883.0], [52.6, 885.0], [52.7, 887.0], [52.8, 889.0], [52.9, 890.0], [53.0, 893.0], [53.1, 895.0], [53.2, 896.0], [53.3, 898.0], [53.4, 901.0], [53.5, 904.0], [53.6, 908.0], [53.7, 910.0], [53.8, 911.0], [53.9, 913.0], [54.0, 914.0], [54.1, 916.0], [54.2, 918.0], [54.3, 920.0], [54.4, 923.0], [54.5, 925.0], [54.6, 928.0], [54.7, 930.0], [54.8, 933.0], [54.9, 936.0], [55.0, 936.0], [55.1, 938.0], [55.2, 940.0], [55.3, 942.0], [55.4, 944.0], [55.5, 948.0], [55.6, 950.0], [55.7, 953.0], [55.8, 954.0], [55.9, 956.0], [56.0, 958.0], [56.1, 961.0], [56.2, 962.0], [56.3, 965.0], [56.4, 966.0], [56.5, 968.0], [56.6, 970.0], [56.7, 972.0], [56.8, 976.0], [56.9, 978.0], [57.0, 980.0], [57.1, 983.0], [57.2, 984.0], [57.3, 989.0], [57.4, 991.0], [57.5, 993.0], [57.6, 996.0], [57.7, 997.0], [57.8, 1000.0], [57.9, 1002.0], [58.0, 1004.0], [58.1, 1005.0], [58.2, 1007.0], [58.3, 1013.0], [58.4, 1014.0], [58.5, 1016.0], [58.6, 1019.0], [58.7, 1020.0], [58.8, 1021.0], [58.9, 1023.0], [59.0, 1025.0], [59.1, 1025.0], [59.2, 1028.0], [59.3, 1029.0], [59.4, 1031.0], [59.5, 1033.0], [59.6, 1035.0], [59.7, 1039.0], [59.8, 1043.0], [59.9, 1045.0], [60.0, 1046.0], [60.1, 1047.0], [60.2, 1050.0], [60.3, 1051.0], [60.4, 1051.0], [60.5, 1055.0], [60.6, 1057.0], [60.7, 1059.0], [60.8, 1060.0], [60.9, 1063.0], [61.0, 1064.0], [61.1, 1066.0], [61.2, 1067.0], [61.3, 1070.0], [61.4, 1072.0], [61.5, 1074.0], [61.6, 1076.0], [61.7, 1078.0], [61.8, 1081.0], [61.9, 1082.0], [62.0, 1085.0], [62.1, 1087.0], [62.2, 1090.0], [62.3, 1093.0], [62.4, 1095.0], [62.5, 1097.0], [62.6, 1098.0], [62.7, 1100.0], [62.8, 1101.0], [62.9, 1103.0], [63.0, 1105.0], [63.1, 1107.0], [63.2, 1108.0], [63.3, 1110.0], [63.4, 1113.0], [63.5, 1113.0], [63.6, 1115.0], [63.7, 1119.0], [63.8, 1121.0], [63.9, 1123.0], [64.0, 1126.0], [64.1, 1130.0], [64.2, 1132.0], [64.3, 1133.0], [64.4, 1135.0], [64.5, 1136.0], [64.6, 1137.0], [64.7, 1139.0], [64.8, 1140.0], [64.9, 1142.0], [65.0, 1144.0], [65.1, 1146.0], [65.2, 1147.0], [65.3, 1150.0], [65.4, 1151.0], [65.5, 1155.0], [65.6, 1157.0], [65.7, 1159.0], [65.8, 1161.0], [65.9, 1163.0], [66.0, 1166.0], [66.1, 1170.0], [66.2, 1173.0], [66.3, 1176.0], [66.4, 1177.0], [66.5, 1178.0], [66.6, 1179.0], [66.7, 1180.0], [66.8, 1182.0], [66.9, 1183.0], [67.0, 1186.0], [67.1, 1188.0], [67.2, 1190.0], [67.3, 1192.0], [67.4, 1194.0], [67.5, 1197.0], [67.6, 1198.0], [67.7, 1200.0], [67.8, 1204.0], [67.9, 1207.0], [68.0, 1208.0], [68.1, 1211.0], [68.2, 1213.0], [68.3, 1214.0], [68.4, 1218.0], [68.5, 1219.0], [68.6, 1220.0], [68.7, 1223.0], [68.8, 1224.0], [68.9, 1226.0], [69.0, 1228.0], [69.1, 1229.0], [69.2, 1234.0], [69.3, 1235.0], [69.4, 1238.0], [69.5, 1239.0], [69.6, 1242.0], [69.7, 1247.0], [69.8, 1249.0], [69.9, 1251.0], [70.0, 1253.0], [70.1, 1256.0], [70.2, 1259.0], [70.3, 1262.0], [70.4, 1265.0], [70.5, 1268.0], [70.6, 1272.0], [70.7, 1274.0], [70.8, 1276.0], [70.9, 1278.0], [71.0, 1280.0], [71.1, 1282.0], [71.2, 1284.0], [71.3, 1287.0], [71.4, 1289.0], [71.5, 1292.0], [71.6, 1295.0], [71.7, 1297.0], [71.8, 1299.0], [71.9, 1302.0], [72.0, 1305.0], [72.1, 1308.0], [72.2, 1310.0], [72.3, 1313.0], [72.4, 1317.0], [72.5, 1319.0], [72.6, 1320.0], [72.7, 1321.0], [72.8, 1325.0], [72.9, 1326.0], [73.0, 1329.0], [73.1, 1330.0], [73.2, 1333.0], [73.3, 1336.0], [73.4, 1338.0], [73.5, 1341.0], [73.6, 1345.0], [73.7, 1347.0], [73.8, 1351.0], [73.9, 1355.0], [74.0, 1357.0], [74.1, 1362.0], [74.2, 1365.0], [74.3, 1369.0], [74.4, 1372.0], [74.5, 1376.0], [74.6, 1378.0], [74.7, 1382.0], [74.8, 1383.0], [74.9, 1387.0], [75.0, 1389.0], [75.1, 1391.0], [75.2, 1393.0], [75.3, 1396.0], [75.4, 1398.0], [75.5, 1401.0], [75.6, 1402.0], [75.7, 1404.0], [75.8, 1405.0], [75.9, 1407.0], [76.0, 1410.0], [76.1, 1412.0], [76.2, 1416.0], [76.3, 1417.0], [76.4, 1419.0], [76.5, 1422.0], [76.6, 1424.0], [76.7, 1426.0], [76.8, 1428.0], [76.9, 1431.0], [77.0, 1433.0], [77.1, 1435.0], [77.2, 1437.0], [77.3, 1439.0], [77.4, 1441.0], [77.5, 1443.0], [77.6, 1445.0], [77.7, 1446.0], [77.8, 1448.0], [77.9, 1449.0], [78.0, 1451.0], [78.1, 1454.0], [78.2, 1455.0], [78.3, 1457.0], [78.4, 1459.0], [78.5, 1461.0], [78.6, 1463.0], [78.7, 1465.0], [78.8, 1468.0], [78.9, 1471.0], [79.0, 1473.0], [79.1, 1477.0], [79.2, 1478.0], [79.3, 1482.0], [79.4, 1484.0], [79.5, 1485.0], [79.6, 1488.0], [79.7, 1490.0], [79.8, 1493.0], [79.9, 1494.0], [80.0, 1496.0], [80.1, 1497.0], [80.2, 1499.0], [80.3, 1500.0], [80.4, 1501.0], [80.5, 1505.0], [80.6, 1507.0], [80.7, 1510.0], [80.8, 1512.0], [80.9, 1513.0], [81.0, 1517.0], [81.1, 1518.0], [81.2, 1522.0], [81.3, 1524.0], [81.4, 1527.0], [81.5, 1529.0], [81.6, 1532.0], [81.7, 1533.0], [81.8, 1537.0], [81.9, 1539.0], [82.0, 1541.0], [82.1, 1542.0], [82.2, 1545.0], [82.3, 1550.0], [82.4, 1553.0], [82.5, 1554.0], [82.6, 1558.0], [82.7, 1562.0], [82.8, 1565.0], [82.9, 1569.0], [83.0, 1570.0], [83.1, 1572.0], [83.2, 1575.0], [83.3, 1579.0], [83.4, 1581.0], [83.5, 1586.0], [83.6, 1589.0], [83.7, 1591.0], [83.8, 1595.0], [83.9, 1596.0], [84.0, 1598.0], [84.1, 1603.0], [84.2, 1605.0], [84.3, 1611.0], [84.4, 1613.0], [84.5, 1615.0], [84.6, 1618.0], [84.7, 1619.0], [84.8, 1621.0], [84.9, 1625.0], [85.0, 1631.0], [85.1, 1633.0], [85.2, 1635.0], [85.3, 1638.0], [85.4, 1643.0], [85.5, 1645.0], [85.6, 1648.0], [85.7, 1649.0], [85.8, 1652.0], [85.9, 1655.0], [86.0, 1656.0], [86.1, 1662.0], [86.2, 1665.0], [86.3, 1670.0], [86.4, 1673.0], [86.5, 1675.0], [86.6, 1679.0], [86.7, 1682.0], [86.8, 1683.0], [86.9, 1690.0], [87.0, 1698.0], [87.1, 1703.0], [87.2, 1705.0], [87.3, 1708.0], [87.4, 1712.0], [87.5, 1716.0], [87.6, 1719.0], [87.7, 1723.0], [87.8, 1730.0], [87.9, 1732.0], [88.0, 1735.0], [88.1, 1737.0], [88.2, 1742.0], [88.3, 1746.0], [88.4, 1752.0], [88.5, 1760.0], [88.6, 1762.0], [88.7, 1765.0], [88.8, 1770.0], [88.9, 1774.0], [89.0, 1776.0], [89.1, 1782.0], [89.2, 1784.0], [89.3, 1787.0], [89.4, 1789.0], [89.5, 1794.0], [89.6, 1800.0], [89.7, 1802.0], [89.8, 1810.0], [89.9, 1814.0], [90.0, 1822.0], [90.1, 1832.0], [90.2, 1839.0], [90.3, 1842.0], [90.4, 1849.0], [90.5, 1856.0], [90.6, 1865.0], [90.7, 1871.0], [90.8, 1877.0], [90.9, 1886.0], [91.0, 1892.0], [91.1, 1900.0], [91.2, 1907.0], [91.3, 1916.0], [91.4, 1925.0], [91.5, 1932.0], [91.6, 1934.0], [91.7, 1941.0], [91.8, 1954.0], [91.9, 1961.0], [92.0, 1967.0], [92.1, 1973.0], [92.2, 1981.0], [92.3, 1992.0], [92.4, 1998.0], [92.5, 2006.0], [92.6, 2014.0], [92.7, 2028.0], [92.8, 2032.0], [92.9, 2037.0], [93.0, 2048.0], [93.1, 2055.0], [93.2, 2065.0], [93.3, 2072.0], [93.4, 2078.0], [93.5, 2086.0], [93.6, 2095.0], [93.7, 2103.0], [93.8, 2125.0], [93.9, 2140.0], [94.0, 2154.0], [94.1, 2163.0], [94.2, 2181.0], [94.3, 2186.0], [94.4, 2195.0], [94.5, 2205.0], [94.6, 2222.0], [94.7, 2243.0], [94.8, 2263.0], [94.9, 2269.0], [95.0, 2280.0], [95.1, 2289.0], [95.2, 2294.0], [95.3, 2304.0], [95.4, 2311.0], [95.5, 2318.0], [95.6, 2335.0], [95.7, 2342.0], [95.8, 2347.0], [95.9, 2355.0], [96.0, 2363.0], [96.1, 2373.0], [96.2, 2389.0], [96.3, 2398.0], [96.4, 2416.0], [96.5, 2444.0], [96.6, 2456.0], [96.7, 2461.0], [96.8, 2487.0], [96.9, 2517.0], [97.0, 2539.0], [97.1, 2555.0], [97.2, 2580.0], [97.3, 2612.0], [97.4, 2637.0], [97.5, 2670.0], [97.6, 2685.0], [97.7, 2703.0], [97.8, 2737.0], [97.9, 2762.0], [98.0, 2780.0], [98.1, 2809.0], [98.2, 2844.0], [98.3, 2903.0], [98.4, 2957.0], [98.5, 3020.0], [98.6, 3052.0], [98.7, 3097.0], [98.8, 3178.0], [98.9, 3195.0], [99.0, 3252.0], [99.1, 3380.0], [99.2, 3432.0], [99.3, 3567.0], [99.4, 3696.0], [99.5, 3776.0], [99.6, 4397.0], [99.7, 4841.0], [99.8, 5060.0], [99.9, 5414.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 508.0, "series": [{"data": [[600.0, 425.0], [700.0, 278.0], [800.0, 260.0], [900.0, 231.0], [1000.0, 255.0], [1100.0, 259.0], [1200.0, 216.0], [1300.0, 189.0], [1400.0, 250.0], [1500.0, 194.0], [1600.0, 156.0], [1700.0, 133.0], [1800.0, 78.0], [1900.0, 68.0], [2000.0, 64.0], [2100.0, 41.0], [2200.0, 42.0], [2300.0, 56.0], [2400.0, 27.0], [2500.0, 20.0], [2600.0, 23.0], [2800.0, 11.0], [2700.0, 21.0], [2900.0, 10.0], [3000.0, 12.0], [3100.0, 10.0], [3300.0, 6.0], [3200.0, 6.0], [3400.0, 7.0], [3500.0, 2.0], [3600.0, 6.0], [3700.0, 5.0], [3800.0, 1.0], [3900.0, 1.0], [4300.0, 2.0], [4100.0, 1.0], [4500.0, 2.0], [4800.0, 2.0], [4700.0, 2.0], [5000.0, 4.0], [5100.0, 1.0], [5200.0, 3.0], [5500.0, 1.0], [5400.0, 2.0], [5700.0, 1.0], [6100.0, 1.0], [6200.0, 1.0], [100.0, 102.0], [200.0, 404.0], [300.0, 439.0], [400.0, 508.0], [500.0, 352.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2717.0, "series": [{"data": [[0.0, 1453.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2717.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1020.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.816326530612246, "minX": 1.60232622E12, "maxY": 10.0, "series": [{"data": [[1.60232646E12, 10.0], [1.60232628E12, 10.0], [1.60232676E12, 9.816326530612246], [1.60232658E12, 10.0], [1.6023264E12, 10.0], [1.60232622E12, 10.0], [1.6023267E12, 10.0], [1.60232652E12, 10.0], [1.60232634E12, 10.0], [1.60232664E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232676E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 290.0, "minX": 1.0, "maxY": 3372.0, "series": [{"data": [[8.0, 290.0], [4.0, 1807.0], [2.0, 3114.0], [1.0, 3372.0], [9.0, 1198.0], [10.0, 996.5148591277501], [5.0, 1190.0], [6.0, 315.0], [3.0, 1436.0], [7.0, 1831.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 997.5906376420733]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 473.9166666666667, "minX": 1.60232622E12, "maxY": 3404575.5166666666, "series": [{"data": [[1.60232646E12, 2867147.1166666667], [1.60232628E12, 2769510.05], [1.60232676E12, 1258311.5833333333], [1.60232658E12, 2198902.183333333], [1.6023264E12, 3208384.8], [1.60232622E12, 387609.7166666667], [1.6023267E12, 2677872.25], [1.60232652E12, 2677645.216666667], [1.60232634E12, 2522091.6], [1.60232664E12, 3404575.5166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232646E12, 4692.366666666667], [1.60232628E12, 4088.366666666667], [1.60232676E12, 1841.7333333333333], [1.60232658E12, 4726.183333333333], [1.6023264E12, 4862.933333333333], [1.60232622E12, 473.9166666666667], [1.6023267E12, 4929.133333333333], [1.60232652E12, 3753.383333333333], [1.60232634E12, 4433.683333333333], [1.60232664E12, 4782.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232676E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 918.0878274268099, "minX": 1.60232622E12, "maxY": 1350.5806451612902, "series": [{"data": [[1.60232646E12, 959.278582930756], [1.60232628E12, 1059.5211267605623], [1.60232676E12, 1239.375510204082], [1.60232658E12, 929.2756508422675], [1.6023264E12, 935.8956386292836], [1.60232622E12, 1350.5806451612902], [1.6023267E12, 918.0878274268099], [1.60232652E12, 1148.490347490347], [1.60232634E12, 993.8358208955229], [1.60232664E12, 945.8539682539684]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232676E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 916.8921417565483, "minX": 1.60232622E12, "maxY": 1348.1290322580649, "series": [{"data": [[1.60232646E12, 957.497584541063], [1.60232628E12, 1057.5369718309846], [1.60232676E12, 1237.7551020408168], [1.60232658E12, 928.1516079632468], [1.6023264E12, 934.0186915887856], [1.60232622E12, 1348.1290322580649], [1.6023267E12, 916.8921417565483], [1.60232652E12, 1146.7162162162167], [1.60232634E12, 992.2504145936988], [1.60232664E12, 944.1412698412695]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232676E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60232622E12, "maxY": 1.4516129032258063, "series": [{"data": [[1.60232646E12, 0.016103059581320453], [1.60232628E12, 0.019366197183098583], [1.60232676E12, 0.0], [1.60232658E12, 0.013782542113323127], [1.6023264E12, 0.017133956386292844], [1.60232622E12, 1.4516129032258063], [1.6023267E12, 0.013867488443759625], [1.60232652E12, 0.02123552123552123], [1.60232634E12, 0.014925373134328363], [1.60232664E12, 0.011111111111111115]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232676E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.60232622E12, "maxY": 6224.0, "series": [{"data": [[1.60232646E12, 5158.0], [1.60232628E12, 5553.0], [1.60232676E12, 4177.0], [1.60232658E12, 5444.0], [1.6023264E12, 3749.0], [1.60232622E12, 3776.0], [1.6023267E12, 4716.0], [1.60232652E12, 6224.0], [1.60232634E12, 5414.0], [1.60232664E12, 3052.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232646E12, 188.79399955511093], [1.60232628E12, 205.48399945735932], [1.60232676E12, 235.28399964809418], [1.60232658E12, 191.7719996881485], [1.6023264E12, 187.77799984693527], [1.60232622E12, 215.0], [1.6023267E12, 184.0], [1.60232652E12, 202.02599925756454], [1.60232634E12, 204.4359998559952], [1.60232664E12, 189.67899984955787]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232646E12, 190.15780005931853], [1.60232628E12, 207.53240021705628], [1.60232676E12, 236.61240014076233], [1.60232658E12, 192.4746000623703], [1.6023264E12, 188.0], [1.60232622E12, 215.0], [1.6023267E12, 184.43500006198883], [1.60232652E12, 204.6905002474785], [1.60232634E12, 204.97960005760194], [1.60232664E12, 190.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232646E12, 189.72699977755548], [1.60232628E12, 206.62199972867967], [1.60232676E12, 236.0219998240471], [1.60232658E12, 192.2129999220371], [1.6023264E12, 188.0], [1.60232622E12, 215.0], [1.6023267E12, 184.17499992251396], [1.60232652E12, 203.58299962878226], [1.60232634E12, 204.73799992799758], [1.60232664E12, 189.99449992477895]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232646E12, 180.0], [1.60232628E12, 191.0], [1.60232676E12, 225.0], [1.60232658E12, 186.0], [1.6023264E12, 180.0], [1.60232622E12, 215.0], [1.6023267E12, 179.0], [1.60232652E12, 187.0], [1.60232634E12, 184.0], [1.60232664E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232646E12, 804.0], [1.60232628E12, 943.5], [1.60232676E12, 1116.0], [1.60232658E12, 778.0], [1.6023264E12, 697.0], [1.60232622E12, 943.5], [1.6023267E12, 711.0], [1.60232652E12, 1029.5], [1.60232634E12, 775.0], [1.60232664E12, 722.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232676E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 183.0, "minX": 1.0, "maxY": 3243.0, "series": [{"data": [[2.0, 1551.0], [3.0, 1362.0], [4.0, 1479.5], [5.0, 1296.0], [6.0, 1156.5], [7.0, 1197.5], [8.0, 1133.5], [9.0, 1107.0], [10.0, 950.0], [11.0, 888.0], [12.0, 782.5], [13.0, 713.0], [14.0, 658.5], [15.0, 556.0], [16.0, 517.5], [1.0, 3243.0], [17.0, 564.0], [18.0, 432.5], [19.0, 426.0], [20.0, 412.0], [21.0, 399.0], [22.0, 451.5], [23.0, 418.5], [24.0, 429.5], [25.0, 435.0], [26.0, 406.0], [27.0, 414.5], [28.0, 456.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 183.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 183.0, "minX": 1.0, "maxY": 3237.5, "series": [{"data": [[2.0, 1549.0], [3.0, 1356.5], [4.0, 1476.5], [5.0, 1292.0], [6.0, 1155.5], [7.0, 1192.0], [8.0, 1130.0], [9.0, 1105.0], [10.0, 949.5], [11.0, 886.5], [12.0, 782.0], [13.0, 712.0], [14.0, 657.5], [15.0, 556.0], [16.0, 517.0], [1.0, 3237.5], [17.0, 563.0], [18.0, 432.5], [19.0, 426.0], [20.0, 412.0], [21.0, 399.0], [22.0, 451.5], [23.0, 418.0], [24.0, 429.5], [25.0, 435.0], [26.0, 406.0], [27.0, 414.5], [28.0, 456.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 183.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.60232622E12, "maxY": 10.883333333333333, "series": [{"data": [[1.60232646E12, 10.35], [1.60232628E12, 9.466666666666667], [1.60232676E12, 3.9166666666666665], [1.60232658E12, 10.883333333333333], [1.6023264E12, 10.7], [1.60232622E12, 1.2], [1.6023267E12, 10.816666666666666], [1.60232652E12, 8.633333333333333], [1.60232634E12, 10.05], [1.60232664E12, 10.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232676E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232622E12, "maxY": 10.883333333333333, "series": [{"data": [[1.60232646E12, 10.35], [1.60232628E12, 9.466666666666667], [1.60232676E12, 4.083333333333333], [1.60232658E12, 10.883333333333333], [1.6023264E12, 10.683333333333334], [1.60232622E12, 1.0333333333333334], [1.6023267E12, 10.816666666666666], [1.60232652E12, 8.633333333333333], [1.60232634E12, 10.05], [1.60232664E12, 10.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6023264E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232676E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232622E12, "maxY": 10.883333333333333, "series": [{"data": [[1.60232646E12, 10.35], [1.60232628E12, 9.466666666666667], [1.60232676E12, 4.083333333333333], [1.60232658E12, 10.883333333333333], [1.6023264E12, 10.683333333333334], [1.60232622E12, 1.0333333333333334], [1.6023267E12, 10.816666666666666], [1.60232652E12, 8.633333333333333], [1.60232634E12, 10.05], [1.60232664E12, 10.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6023264E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232676E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232622E12, "maxY": 10.883333333333333, "series": [{"data": [[1.60232646E12, 10.35], [1.60232628E12, 9.466666666666667], [1.60232676E12, 4.083333333333333], [1.60232658E12, 10.883333333333333], [1.6023264E12, 10.683333333333334], [1.60232622E12, 1.0333333333333334], [1.6023267E12, 10.816666666666666], [1.60232652E12, 8.633333333333333], [1.60232634E12, 10.05], [1.60232664E12, 10.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6023264E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232676E12, "title": "Total Transactions Per Second"}},
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

