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
        data: {"result": {"minY": 194.0, "minX": 0.0, "maxY": 6883.0, "series": [{"data": [[0.0, 194.0], [0.1, 197.0], [0.2, 200.0], [0.3, 202.0], [0.4, 204.0], [0.5, 205.0], [0.6, 206.0], [0.7, 208.0], [0.8, 209.0], [0.9, 212.0], [1.0, 213.0], [1.1, 214.0], [1.2, 214.0], [1.3, 216.0], [1.4, 217.0], [1.5, 218.0], [1.6, 219.0], [1.7, 220.0], [1.8, 220.0], [1.9, 222.0], [2.0, 222.0], [2.1, 223.0], [2.2, 225.0], [2.3, 226.0], [2.4, 226.0], [2.5, 227.0], [2.6, 229.0], [2.7, 229.0], [2.8, 229.0], [2.9, 230.0], [3.0, 230.0], [3.1, 231.0], [3.2, 231.0], [3.3, 232.0], [3.4, 233.0], [3.5, 234.0], [3.6, 235.0], [3.7, 235.0], [3.8, 236.0], [3.9, 237.0], [4.0, 238.0], [4.1, 238.0], [4.2, 239.0], [4.3, 240.0], [4.4, 241.0], [4.5, 241.0], [4.6, 242.0], [4.7, 242.0], [4.8, 244.0], [4.9, 244.0], [5.0, 244.0], [5.1, 245.0], [5.2, 246.0], [5.3, 246.0], [5.4, 247.0], [5.5, 248.0], [5.6, 248.0], [5.7, 249.0], [5.8, 250.0], [5.9, 251.0], [6.0, 252.0], [6.1, 253.0], [6.2, 254.0], [6.3, 255.0], [6.4, 257.0], [6.5, 260.0], [6.6, 261.0], [6.7, 263.0], [6.8, 266.0], [6.9, 269.0], [7.0, 272.0], [7.1, 277.0], [7.2, 279.0], [7.3, 284.0], [7.4, 286.0], [7.5, 287.0], [7.6, 287.0], [7.7, 289.0], [7.8, 291.0], [7.9, 294.0], [8.0, 296.0], [8.1, 298.0], [8.2, 299.0], [8.3, 300.0], [8.4, 303.0], [8.5, 305.0], [8.6, 307.0], [8.7, 308.0], [8.8, 311.0], [8.9, 312.0], [9.0, 313.0], [9.1, 314.0], [9.2, 316.0], [9.3, 317.0], [9.4, 317.0], [9.5, 319.0], [9.6, 320.0], [9.7, 322.0], [9.8, 323.0], [9.9, 324.0], [10.0, 325.0], [10.1, 326.0], [10.2, 326.0], [10.3, 327.0], [10.4, 327.0], [10.5, 329.0], [10.6, 330.0], [10.7, 330.0], [10.8, 331.0], [10.9, 332.0], [11.0, 333.0], [11.1, 333.0], [11.2, 334.0], [11.3, 335.0], [11.4, 335.0], [11.5, 336.0], [11.6, 337.0], [11.7, 338.0], [11.8, 339.0], [11.9, 340.0], [12.0, 341.0], [12.1, 342.0], [12.2, 342.0], [12.3, 343.0], [12.4, 344.0], [12.5, 344.0], [12.6, 345.0], [12.7, 346.0], [12.8, 348.0], [12.9, 349.0], [13.0, 350.0], [13.1, 352.0], [13.2, 354.0], [13.3, 355.0], [13.4, 358.0], [13.5, 360.0], [13.6, 361.0], [13.7, 364.0], [13.8, 365.0], [13.9, 367.0], [14.0, 370.0], [14.1, 372.0], [14.2, 374.0], [14.3, 376.0], [14.4, 377.0], [14.5, 380.0], [14.6, 383.0], [14.7, 386.0], [14.8, 388.0], [14.9, 391.0], [15.0, 393.0], [15.1, 396.0], [15.2, 397.0], [15.3, 398.0], [15.4, 399.0], [15.5, 401.0], [15.6, 402.0], [15.7, 402.0], [15.8, 405.0], [15.9, 406.0], [16.0, 409.0], [16.1, 411.0], [16.2, 413.0], [16.3, 417.0], [16.4, 418.0], [16.5, 420.0], [16.6, 422.0], [16.7, 423.0], [16.8, 424.0], [16.9, 425.0], [17.0, 427.0], [17.1, 429.0], [17.2, 430.0], [17.3, 432.0], [17.4, 434.0], [17.5, 435.0], [17.6, 436.0], [17.7, 438.0], [17.8, 439.0], [17.9, 440.0], [18.0, 441.0], [18.1, 442.0], [18.2, 444.0], [18.3, 445.0], [18.4, 445.0], [18.5, 447.0], [18.6, 448.0], [18.7, 449.0], [18.8, 449.0], [18.9, 450.0], [19.0, 451.0], [19.1, 452.0], [19.2, 452.0], [19.3, 453.0], [19.4, 454.0], [19.5, 455.0], [19.6, 456.0], [19.7, 457.0], [19.8, 457.0], [19.9, 458.0], [20.0, 459.0], [20.1, 460.0], [20.2, 460.0], [20.3, 461.0], [20.4, 462.0], [20.5, 464.0], [20.6, 464.0], [20.7, 465.0], [20.8, 466.0], [20.9, 467.0], [21.0, 469.0], [21.1, 470.0], [21.2, 471.0], [21.3, 472.0], [21.4, 473.0], [21.5, 474.0], [21.6, 475.0], [21.7, 475.0], [21.8, 477.0], [21.9, 478.0], [22.0, 478.0], [22.1, 479.0], [22.2, 480.0], [22.3, 481.0], [22.4, 482.0], [22.5, 483.0], [22.6, 484.0], [22.7, 485.0], [22.8, 485.0], [22.9, 486.0], [23.0, 487.0], [23.1, 488.0], [23.2, 488.0], [23.3, 489.0], [23.4, 490.0], [23.5, 490.0], [23.6, 491.0], [23.7, 492.0], [23.8, 493.0], [23.9, 494.0], [24.0, 496.0], [24.1, 497.0], [24.2, 498.0], [24.3, 500.0], [24.4, 500.0], [24.5, 501.0], [24.6, 502.0], [24.7, 503.0], [24.8, 503.0], [24.9, 505.0], [25.0, 506.0], [25.1, 507.0], [25.2, 508.0], [25.3, 510.0], [25.4, 510.0], [25.5, 511.0], [25.6, 512.0], [25.7, 513.0], [25.8, 514.0], [25.9, 515.0], [26.0, 517.0], [26.1, 519.0], [26.2, 521.0], [26.3, 522.0], [26.4, 523.0], [26.5, 524.0], [26.6, 526.0], [26.7, 528.0], [26.8, 529.0], [26.9, 530.0], [27.0, 533.0], [27.1, 535.0], [27.2, 536.0], [27.3, 538.0], [27.4, 540.0], [27.5, 541.0], [27.6, 542.0], [27.7, 543.0], [27.8, 544.0], [27.9, 545.0], [28.0, 546.0], [28.1, 548.0], [28.2, 548.0], [28.3, 549.0], [28.4, 551.0], [28.5, 551.0], [28.6, 553.0], [28.7, 555.0], [28.8, 556.0], [28.9, 557.0], [29.0, 558.0], [29.1, 559.0], [29.2, 560.0], [29.3, 562.0], [29.4, 562.0], [29.5, 563.0], [29.6, 563.0], [29.7, 565.0], [29.8, 566.0], [29.9, 567.0], [30.0, 568.0], [30.1, 570.0], [30.2, 571.0], [30.3, 572.0], [30.4, 575.0], [30.5, 576.0], [30.6, 578.0], [30.7, 579.0], [30.8, 579.0], [30.9, 581.0], [31.0, 582.0], [31.1, 583.0], [31.2, 584.0], [31.3, 584.0], [31.4, 585.0], [31.5, 587.0], [31.6, 588.0], [31.7, 589.0], [31.8, 590.0], [31.9, 592.0], [32.0, 593.0], [32.1, 594.0], [32.2, 595.0], [32.3, 596.0], [32.4, 597.0], [32.5, 598.0], [32.6, 599.0], [32.7, 600.0], [32.8, 600.0], [32.9, 602.0], [33.0, 603.0], [33.1, 605.0], [33.2, 606.0], [33.3, 608.0], [33.4, 608.0], [33.5, 609.0], [33.6, 610.0], [33.7, 611.0], [33.8, 612.0], [33.9, 612.0], [34.0, 613.0], [34.1, 614.0], [34.2, 616.0], [34.3, 617.0], [34.4, 620.0], [34.5, 620.0], [34.6, 621.0], [34.7, 622.0], [34.8, 623.0], [34.9, 624.0], [35.0, 625.0], [35.1, 626.0], [35.2, 626.0], [35.3, 627.0], [35.4, 629.0], [35.5, 630.0], [35.6, 631.0], [35.7, 632.0], [35.8, 633.0], [35.9, 634.0], [36.0, 635.0], [36.1, 636.0], [36.2, 637.0], [36.3, 637.0], [36.4, 639.0], [36.5, 640.0], [36.6, 641.0], [36.7, 643.0], [36.8, 644.0], [36.9, 644.0], [37.0, 646.0], [37.1, 647.0], [37.2, 648.0], [37.3, 650.0], [37.4, 651.0], [37.5, 652.0], [37.6, 654.0], [37.7, 654.0], [37.8, 655.0], [37.9, 657.0], [38.0, 657.0], [38.1, 658.0], [38.2, 659.0], [38.3, 660.0], [38.4, 660.0], [38.5, 661.0], [38.6, 662.0], [38.7, 663.0], [38.8, 664.0], [38.9, 664.0], [39.0, 665.0], [39.1, 667.0], [39.2, 668.0], [39.3, 669.0], [39.4, 670.0], [39.5, 672.0], [39.6, 674.0], [39.7, 674.0], [39.8, 675.0], [39.9, 676.0], [40.0, 676.0], [40.1, 677.0], [40.2, 679.0], [40.3, 680.0], [40.4, 681.0], [40.5, 683.0], [40.6, 684.0], [40.7, 685.0], [40.8, 687.0], [40.9, 689.0], [41.0, 690.0], [41.1, 693.0], [41.2, 694.0], [41.3, 695.0], [41.4, 696.0], [41.5, 697.0], [41.6, 699.0], [41.7, 700.0], [41.8, 701.0], [41.9, 703.0], [42.0, 704.0], [42.1, 706.0], [42.2, 708.0], [42.3, 710.0], [42.4, 712.0], [42.5, 715.0], [42.6, 716.0], [42.7, 716.0], [42.8, 717.0], [42.9, 719.0], [43.0, 721.0], [43.1, 723.0], [43.2, 726.0], [43.3, 727.0], [43.4, 728.0], [43.5, 730.0], [43.6, 732.0], [43.7, 735.0], [43.8, 736.0], [43.9, 737.0], [44.0, 739.0], [44.1, 742.0], [44.2, 745.0], [44.3, 747.0], [44.4, 749.0], [44.5, 751.0], [44.6, 753.0], [44.7, 755.0], [44.8, 758.0], [44.9, 760.0], [45.0, 762.0], [45.1, 763.0], [45.2, 765.0], [45.3, 767.0], [45.4, 768.0], [45.5, 771.0], [45.6, 774.0], [45.7, 776.0], [45.8, 776.0], [45.9, 778.0], [46.0, 780.0], [46.1, 781.0], [46.2, 783.0], [46.3, 784.0], [46.4, 786.0], [46.5, 789.0], [46.6, 792.0], [46.7, 795.0], [46.8, 797.0], [46.9, 798.0], [47.0, 802.0], [47.1, 804.0], [47.2, 806.0], [47.3, 808.0], [47.4, 811.0], [47.5, 813.0], [47.6, 814.0], [47.7, 816.0], [47.8, 817.0], [47.9, 819.0], [48.0, 821.0], [48.1, 823.0], [48.2, 825.0], [48.3, 825.0], [48.4, 828.0], [48.5, 830.0], [48.6, 832.0], [48.7, 834.0], [48.8, 836.0], [48.9, 838.0], [49.0, 840.0], [49.1, 841.0], [49.2, 844.0], [49.3, 846.0], [49.4, 849.0], [49.5, 850.0], [49.6, 852.0], [49.7, 854.0], [49.8, 856.0], [49.9, 859.0], [50.0, 861.0], [50.1, 864.0], [50.2, 864.0], [50.3, 866.0], [50.4, 869.0], [50.5, 871.0], [50.6, 875.0], [50.7, 877.0], [50.8, 878.0], [50.9, 879.0], [51.0, 884.0], [51.1, 885.0], [51.2, 887.0], [51.3, 889.0], [51.4, 891.0], [51.5, 894.0], [51.6, 895.0], [51.7, 898.0], [51.8, 901.0], [51.9, 904.0], [52.0, 907.0], [52.1, 909.0], [52.2, 912.0], [52.3, 915.0], [52.4, 916.0], [52.5, 919.0], [52.6, 921.0], [52.7, 923.0], [52.8, 926.0], [52.9, 928.0], [53.0, 931.0], [53.1, 932.0], [53.2, 934.0], [53.3, 937.0], [53.4, 940.0], [53.5, 943.0], [53.6, 945.0], [53.7, 947.0], [53.8, 949.0], [53.9, 951.0], [54.0, 954.0], [54.1, 957.0], [54.2, 961.0], [54.3, 964.0], [54.4, 966.0], [54.5, 967.0], [54.6, 970.0], [54.7, 972.0], [54.8, 974.0], [54.9, 975.0], [55.0, 977.0], [55.1, 978.0], [55.2, 980.0], [55.3, 981.0], [55.4, 984.0], [55.5, 986.0], [55.6, 987.0], [55.7, 989.0], [55.8, 991.0], [55.9, 993.0], [56.0, 1000.0], [56.1, 1000.0], [56.2, 1002.0], [56.3, 1003.0], [56.4, 1007.0], [56.5, 1010.0], [56.6, 1011.0], [56.7, 1013.0], [56.8, 1016.0], [56.9, 1019.0], [57.0, 1021.0], [57.1, 1022.0], [57.2, 1023.0], [57.3, 1024.0], [57.4, 1027.0], [57.5, 1030.0], [57.6, 1032.0], [57.7, 1034.0], [57.8, 1036.0], [57.9, 1036.0], [58.0, 1038.0], [58.1, 1040.0], [58.2, 1042.0], [58.3, 1044.0], [58.4, 1046.0], [58.5, 1048.0], [58.6, 1050.0], [58.7, 1052.0], [58.8, 1054.0], [58.9, 1055.0], [59.0, 1058.0], [59.1, 1059.0], [59.2, 1061.0], [59.3, 1062.0], [59.4, 1064.0], [59.5, 1066.0], [59.6, 1069.0], [59.7, 1070.0], [59.8, 1073.0], [59.9, 1077.0], [60.0, 1079.0], [60.1, 1080.0], [60.2, 1081.0], [60.3, 1083.0], [60.4, 1085.0], [60.5, 1088.0], [60.6, 1090.0], [60.7, 1092.0], [60.8, 1095.0], [60.9, 1097.0], [61.0, 1098.0], [61.1, 1099.0], [61.2, 1101.0], [61.3, 1104.0], [61.4, 1106.0], [61.5, 1108.0], [61.6, 1110.0], [61.7, 1112.0], [61.8, 1115.0], [61.9, 1118.0], [62.0, 1119.0], [62.1, 1121.0], [62.2, 1126.0], [62.3, 1131.0], [62.4, 1132.0], [62.5, 1134.0], [62.6, 1137.0], [62.7, 1141.0], [62.8, 1142.0], [62.9, 1145.0], [63.0, 1148.0], [63.1, 1150.0], [63.2, 1153.0], [63.3, 1156.0], [63.4, 1159.0], [63.5, 1161.0], [63.6, 1162.0], [63.7, 1166.0], [63.8, 1167.0], [63.9, 1168.0], [64.0, 1170.0], [64.1, 1173.0], [64.2, 1175.0], [64.3, 1177.0], [64.4, 1179.0], [64.5, 1180.0], [64.6, 1181.0], [64.7, 1183.0], [64.8, 1185.0], [64.9, 1187.0], [65.0, 1188.0], [65.1, 1189.0], [65.2, 1191.0], [65.3, 1193.0], [65.4, 1194.0], [65.5, 1197.0], [65.6, 1199.0], [65.7, 1202.0], [65.8, 1204.0], [65.9, 1206.0], [66.0, 1208.0], [66.1, 1210.0], [66.2, 1211.0], [66.3, 1214.0], [66.4, 1216.0], [66.5, 1217.0], [66.6, 1218.0], [66.7, 1219.0], [66.8, 1222.0], [66.9, 1225.0], [67.0, 1226.0], [67.1, 1227.0], [67.2, 1230.0], [67.3, 1234.0], [67.4, 1236.0], [67.5, 1237.0], [67.6, 1238.0], [67.7, 1240.0], [67.8, 1243.0], [67.9, 1245.0], [68.0, 1246.0], [68.1, 1247.0], [68.2, 1251.0], [68.3, 1252.0], [68.4, 1254.0], [68.5, 1257.0], [68.6, 1260.0], [68.7, 1264.0], [68.8, 1266.0], [68.9, 1267.0], [69.0, 1269.0], [69.1, 1272.0], [69.2, 1273.0], [69.3, 1275.0], [69.4, 1278.0], [69.5, 1281.0], [69.6, 1283.0], [69.7, 1285.0], [69.8, 1286.0], [69.9, 1288.0], [70.0, 1289.0], [70.1, 1293.0], [70.2, 1295.0], [70.3, 1297.0], [70.4, 1299.0], [70.5, 1302.0], [70.6, 1304.0], [70.7, 1307.0], [70.8, 1309.0], [70.9, 1310.0], [71.0, 1312.0], [71.1, 1314.0], [71.2, 1317.0], [71.3, 1319.0], [71.4, 1320.0], [71.5, 1323.0], [71.6, 1326.0], [71.7, 1327.0], [71.8, 1328.0], [71.9, 1330.0], [72.0, 1331.0], [72.1, 1333.0], [72.2, 1334.0], [72.3, 1337.0], [72.4, 1340.0], [72.5, 1343.0], [72.6, 1346.0], [72.7, 1347.0], [72.8, 1350.0], [72.9, 1354.0], [73.0, 1355.0], [73.1, 1358.0], [73.2, 1360.0], [73.3, 1363.0], [73.4, 1368.0], [73.5, 1370.0], [73.6, 1372.0], [73.7, 1373.0], [73.8, 1376.0], [73.9, 1376.0], [74.0, 1378.0], [74.1, 1378.0], [74.2, 1380.0], [74.3, 1383.0], [74.4, 1386.0], [74.5, 1388.0], [74.6, 1391.0], [74.7, 1394.0], [74.8, 1395.0], [74.9, 1398.0], [75.0, 1400.0], [75.1, 1405.0], [75.2, 1407.0], [75.3, 1411.0], [75.4, 1416.0], [75.5, 1417.0], [75.6, 1419.0], [75.7, 1421.0], [75.8, 1422.0], [75.9, 1425.0], [76.0, 1428.0], [76.1, 1430.0], [76.2, 1433.0], [76.3, 1434.0], [76.4, 1435.0], [76.5, 1437.0], [76.6, 1439.0], [76.7, 1440.0], [76.8, 1443.0], [76.9, 1446.0], [77.0, 1450.0], [77.1, 1452.0], [77.2, 1454.0], [77.3, 1455.0], [77.4, 1456.0], [77.5, 1458.0], [77.6, 1460.0], [77.7, 1462.0], [77.8, 1464.0], [77.9, 1468.0], [78.0, 1470.0], [78.1, 1472.0], [78.2, 1475.0], [78.3, 1477.0], [78.4, 1478.0], [78.5, 1481.0], [78.6, 1484.0], [78.7, 1486.0], [78.8, 1489.0], [78.9, 1490.0], [79.0, 1493.0], [79.1, 1494.0], [79.2, 1496.0], [79.3, 1497.0], [79.4, 1499.0], [79.5, 1503.0], [79.6, 1505.0], [79.7, 1508.0], [79.8, 1511.0], [79.9, 1512.0], [80.0, 1514.0], [80.1, 1519.0], [80.2, 1521.0], [80.3, 1524.0], [80.4, 1527.0], [80.5, 1529.0], [80.6, 1531.0], [80.7, 1532.0], [80.8, 1533.0], [80.9, 1534.0], [81.0, 1537.0], [81.1, 1540.0], [81.2, 1542.0], [81.3, 1544.0], [81.4, 1545.0], [81.5, 1547.0], [81.6, 1551.0], [81.7, 1552.0], [81.8, 1553.0], [81.9, 1558.0], [82.0, 1560.0], [82.1, 1563.0], [82.2, 1564.0], [82.3, 1570.0], [82.4, 1572.0], [82.5, 1575.0], [82.6, 1576.0], [82.7, 1581.0], [82.8, 1584.0], [82.9, 1585.0], [83.0, 1588.0], [83.1, 1592.0], [83.2, 1596.0], [83.3, 1597.0], [83.4, 1601.0], [83.5, 1607.0], [83.6, 1611.0], [83.7, 1617.0], [83.8, 1622.0], [83.9, 1629.0], [84.0, 1632.0], [84.1, 1636.0], [84.2, 1639.0], [84.3, 1641.0], [84.4, 1643.0], [84.5, 1647.0], [84.6, 1652.0], [84.7, 1655.0], [84.8, 1657.0], [84.9, 1663.0], [85.0, 1665.0], [85.1, 1673.0], [85.2, 1679.0], [85.3, 1682.0], [85.4, 1686.0], [85.5, 1690.0], [85.6, 1693.0], [85.7, 1698.0], [85.8, 1703.0], [85.9, 1708.0], [86.0, 1712.0], [86.1, 1714.0], [86.2, 1718.0], [86.3, 1722.0], [86.4, 1729.0], [86.5, 1736.0], [86.6, 1738.0], [86.7, 1741.0], [86.8, 1745.0], [86.9, 1751.0], [87.0, 1754.0], [87.1, 1757.0], [87.2, 1761.0], [87.3, 1767.0], [87.4, 1769.0], [87.5, 1774.0], [87.6, 1780.0], [87.7, 1785.0], [87.8, 1787.0], [87.9, 1789.0], [88.0, 1797.0], [88.1, 1803.0], [88.2, 1805.0], [88.3, 1814.0], [88.4, 1819.0], [88.5, 1825.0], [88.6, 1829.0], [88.7, 1834.0], [88.8, 1836.0], [88.9, 1842.0], [89.0, 1847.0], [89.1, 1855.0], [89.2, 1861.0], [89.3, 1865.0], [89.4, 1871.0], [89.5, 1877.0], [89.6, 1881.0], [89.7, 1885.0], [89.8, 1891.0], [89.9, 1894.0], [90.0, 1897.0], [90.1, 1902.0], [90.2, 1908.0], [90.3, 1919.0], [90.4, 1923.0], [90.5, 1925.0], [90.6, 1932.0], [90.7, 1939.0], [90.8, 1946.0], [90.9, 1950.0], [91.0, 1959.0], [91.1, 1970.0], [91.2, 1973.0], [91.3, 1976.0], [91.4, 1983.0], [91.5, 1992.0], [91.6, 2001.0], [91.7, 2011.0], [91.8, 2015.0], [91.9, 2022.0], [92.0, 2037.0], [92.1, 2049.0], [92.2, 2064.0], [92.3, 2070.0], [92.4, 2074.0], [92.5, 2088.0], [92.6, 2093.0], [92.7, 2098.0], [92.8, 2116.0], [92.9, 2126.0], [93.0, 2142.0], [93.1, 2153.0], [93.2, 2159.0], [93.3, 2169.0], [93.4, 2181.0], [93.5, 2189.0], [93.6, 2192.0], [93.7, 2207.0], [93.8, 2218.0], [93.9, 2223.0], [94.0, 2233.0], [94.1, 2242.0], [94.2, 2247.0], [94.3, 2258.0], [94.4, 2272.0], [94.5, 2280.0], [94.6, 2289.0], [94.7, 2293.0], [94.8, 2318.0], [94.9, 2326.0], [95.0, 2330.0], [95.1, 2349.0], [95.2, 2358.0], [95.3, 2362.0], [95.4, 2368.0], [95.5, 2383.0], [95.6, 2396.0], [95.7, 2406.0], [95.8, 2412.0], [95.9, 2423.0], [96.0, 2430.0], [96.1, 2458.0], [96.2, 2481.0], [96.3, 2498.0], [96.4, 2514.0], [96.5, 2534.0], [96.6, 2555.0], [96.7, 2563.0], [96.8, 2582.0], [96.9, 2608.0], [97.0, 2638.0], [97.1, 2642.0], [97.2, 2681.0], [97.3, 2712.0], [97.4, 2741.0], [97.5, 2773.0], [97.6, 2794.0], [97.7, 2812.0], [97.8, 2853.0], [97.9, 2868.0], [98.0, 2889.0], [98.1, 2922.0], [98.2, 2964.0], [98.3, 3023.0], [98.4, 3045.0], [98.5, 3127.0], [98.6, 3153.0], [98.7, 3209.0], [98.8, 3271.0], [98.9, 3308.0], [99.0, 3366.0], [99.1, 3458.0], [99.2, 3518.0], [99.3, 3638.0], [99.4, 3691.0], [99.5, 3879.0], [99.6, 4382.0], [99.7, 4716.0], [99.8, 5489.0], [99.9, 5707.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 468.0, "series": [{"data": [[600.0, 468.0], [700.0, 275.0], [800.0, 251.0], [900.0, 219.0], [1000.0, 266.0], [1100.0, 233.0], [1200.0, 249.0], [1300.0, 237.0], [1400.0, 230.0], [1500.0, 206.0], [1600.0, 122.0], [1700.0, 120.0], [1800.0, 105.0], [1900.0, 78.0], [2000.0, 60.0], [2100.0, 50.0], [2200.0, 55.0], [2300.0, 46.0], [2400.0, 35.0], [2500.0, 30.0], [2600.0, 21.0], [2800.0, 20.0], [2700.0, 20.0], [2900.0, 11.0], [3000.0, 12.0], [3100.0, 10.0], [3200.0, 8.0], [3300.0, 10.0], [3400.0, 7.0], [3500.0, 4.0], [3600.0, 8.0], [3700.0, 1.0], [3800.0, 5.0], [3900.0, 1.0], [4000.0, 3.0], [4300.0, 1.0], [4400.0, 3.0], [4500.0, 1.0], [4700.0, 1.0], [4800.0, 1.0], [5100.0, 1.0], [5000.0, 1.0], [5200.0, 1.0], [5600.0, 4.0], [5400.0, 1.0], [5700.0, 3.0], [6400.0, 1.0], [6500.0, 1.0], [6800.0, 1.0], [100.0, 10.0], [200.0, 418.0], [300.0, 373.0], [400.0, 458.0], [500.0, 434.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1068.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2855.0, "series": [{"data": [[0.0, 1267.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2855.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1068.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.580645161290324, "minX": 1.60234674E12, "maxY": 10.0, "series": [{"data": [[1.60234722E12, 10.0], [1.60234674E12, 10.0], [1.60234704E12, 10.0], [1.6023471E12, 10.0], [1.60234692E12, 10.0], [1.60234698E12, 10.0], [1.60234728E12, 8.580645161290324], [1.6023468E12, 10.0], [1.60234686E12, 10.0], [1.60234716E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234728E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 614.0, "minX": 1.0, "maxY": 3209.0, "series": [{"data": [[8.0, 1422.5], [4.0, 2059.0], [2.0, 3160.0], [1.0, 3209.0], [9.0, 651.0], [10.0, 1033.38177957923], [5.0, 1481.0], [6.0, 614.0], [3.0, 1170.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996146, 1034.5163776493239]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 241.53333333333333, "minX": 1.60234674E12, "maxY": 3409752.783333333, "series": [{"data": [[1.60234722E12, 2486947.9], [1.60234674E12, 2405137.683333333], [1.60234704E12, 2239590.183333333], [1.6023471E12, 2885078.2333333334], [1.60234692E12, 2794317.0166666666], [1.60234698E12, 2822842.7666666666], [1.60234728E12, 158394.18333333332], [1.6023468E12, 2097464.716666667], [1.60234686E12, 3409752.783333333], [1.60234716E12, 2672125.0833333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60234722E12, 4351.25], [1.60234674E12, 3281.266666666667], [1.60234704E12, 3943.4166666666665], [1.6023471E12, 4660.416666666667], [1.60234692E12, 4613.45], [1.60234698E12, 3426.05], [1.60234728E12, 241.53333333333333], [1.6023468E12, 4558.1], [1.60234686E12, 4637.45], [1.60234716E12, 4864.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234728E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 927.6084243369733, "minX": 1.60234674E12, "maxY": 1397.6774193548388, "series": [{"data": [[1.60234722E12, 1036.0675909878692], [1.60234674E12, 1173.7286652078767], [1.60234704E12, 1093.959854014598], [1.6023471E12, 951.357594936709], [1.60234692E12, 983.1924342105264], [1.60234698E12, 1298.2891304347827], [1.60234728E12, 1397.6774193548388], [1.6023468E12, 951.2772435897443], [1.60234686E12, 992.9264705882349], [1.60234716E12, 927.6084243369733]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234728E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 926.3775351014036, "minX": 1.60234674E12, "maxY": 1396.0967741935485, "series": [{"data": [[1.60234722E12, 1034.8648180242628], [1.60234674E12, 1171.652078774617], [1.60234704E12, 1092.5930656934306], [1.6023471E12, 949.9715189873416], [1.60234692E12, 981.3947368421052], [1.60234698E12, 1295.8695652173922], [1.60234728E12, 1396.0967741935485], [1.6023468E12, 949.8862179487177], [1.60234686E12, 990.5669934640514], [1.60234716E12, 926.3775351014036]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234728E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0140405616224649, "minX": 1.60234674E12, "maxY": 0.17724288840262584, "series": [{"data": [[1.60234722E12, 0.017331022530329292], [1.60234674E12, 0.17724288840262584], [1.60234704E12, 0.02372262773722627], [1.6023471E12, 0.017405063291139253], [1.60234692E12, 0.01644736842105262], [1.60234698E12, 0.019565217391304342], [1.60234728E12, 0.06451612903225809], [1.6023468E12, 0.020833333333333336], [1.60234686E12, 0.02124183006535947], [1.60234716E12, 0.0140405616224649]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234728E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 194.0, "minX": 1.60234674E12, "maxY": 6883.0, "series": [{"data": [[1.60234722E12, 4058.0], [1.60234674E12, 5698.0], [1.60234704E12, 5689.0], [1.6023471E12, 3723.0], [1.60234692E12, 5671.0], [1.60234698E12, 6883.0], [1.60234728E12, 3209.0], [1.6023468E12, 3999.0], [1.60234686E12, 5489.0], [1.60234716E12, 2962.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60234722E12, 213.20199986219407], [1.60234674E12, 222.48799956321716], [1.60234704E12, 222.9409998691082], [1.6023471E12, 208.69699984908104], [1.60234692E12, 198.4809998548031], [1.60234698E12, 280.7879986810684], [1.60234728E12, 462.0], [1.6023468E12, 212.6249998509884], [1.60234686E12, 206.55099956154822], [1.60234716E12, 204.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60234722E12, 213.72220005512239], [1.60234674E12, 224.13680017471313], [1.60234704E12, 223.43510005235672], [1.6023471E12, 209.80010018110275], [1.60234692E12, 199.02910005807877], [1.60234698E12, 285.7668005275726], [1.60234728E12, 462.0], [1.6023468E12, 213.0], [1.60234686E12, 208.41220035076142], [1.60234716E12, 204.71160012245178]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60234722E12, 213.49099993109704], [1.60234674E12, 223.40399978160858], [1.60234704E12, 223.2154999345541], [1.6023471E12, 209.04049977362155], [1.60234692E12, 198.78549992740153], [1.60234698E12, 283.55399934053423], [1.60234728E12, 462.0], [1.6023468E12, 212.9374999254942], [1.60234686E12, 207.4704997807741], [1.60234716E12, 204.19799984693526]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60234722E12, 195.0], [1.60234674E12, 205.0], [1.60234704E12, 204.0], [1.6023471E12, 206.0], [1.60234692E12, 194.0], [1.60234698E12, 213.0], [1.60234728E12, 462.0], [1.6023468E12, 209.0], [1.60234686E12, 198.0], [1.60234716E12, 195.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60234722E12, 854.0], [1.60234674E12, 1062.0], [1.60234704E12, 952.5], [1.6023471E12, 753.0], [1.60234692E12, 857.5], [1.60234698E12, 1159.5], [1.60234728E12, 1170.0], [1.6023468E12, 766.0], [1.60234686E12, 687.5], [1.60234716E12, 698.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234728E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 449.0, "minX": 1.0, "maxY": 2165.0, "series": [{"data": [[3.0, 1498.0], [4.0, 1399.0], [5.0, 1372.5], [6.0, 1176.0], [7.0, 1196.0], [8.0, 1162.0], [9.0, 1100.0], [10.0, 915.5], [11.0, 847.0], [12.0, 677.0], [13.0, 721.0], [14.0, 636.5], [15.0, 650.0], [16.0, 495.5], [1.0, 2165.0], [17.0, 543.5], [18.0, 467.5], [19.0, 449.0], [20.0, 454.5], [21.0, 458.5], [22.0, 491.5], [23.0, 460.0], [24.0, 463.0], [25.0, 457.0], [26.0, 452.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 449.0, "minX": 1.0, "maxY": 2158.0, "series": [{"data": [[3.0, 1496.0], [4.0, 1398.5], [5.0, 1368.5], [6.0, 1173.0], [7.0, 1196.0], [8.0, 1160.0], [9.0, 1100.0], [10.0, 914.0], [11.0, 847.0], [12.0, 677.0], [13.0, 720.0], [14.0, 636.0], [15.0, 647.0], [16.0, 495.5], [1.0, 2158.0], [17.0, 543.0], [18.0, 467.5], [19.0, 449.0], [20.0, 454.0], [21.0, 458.5], [22.0, 491.5], [23.0, 460.0], [24.0, 463.0], [25.0, 457.0], [26.0, 452.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.60234674E12, "maxY": 10.683333333333334, "series": [{"data": [[1.60234722E12, 9.616666666666667], [1.60234674E12, 7.783333333333333], [1.60234704E12, 9.133333333333333], [1.6023471E12, 10.533333333333333], [1.60234692E12, 10.133333333333333], [1.60234698E12, 7.666666666666667], [1.60234728E12, 0.35], [1.6023468E12, 10.4], [1.60234686E12, 10.2], [1.60234716E12, 10.683333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234728E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60234674E12, "maxY": 10.683333333333334, "series": [{"data": [[1.60234722E12, 9.616666666666667], [1.60234674E12, 7.616666666666666], [1.60234704E12, 9.133333333333333], [1.6023471E12, 10.533333333333333], [1.60234692E12, 10.133333333333333], [1.60234698E12, 7.666666666666667], [1.60234728E12, 0.5166666666666667], [1.6023468E12, 10.4], [1.60234686E12, 10.2], [1.60234716E12, 10.683333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234728E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60234674E12, "maxY": 10.683333333333334, "series": [{"data": [[1.60234722E12, 9.616666666666667], [1.60234674E12, 7.616666666666666], [1.60234704E12, 9.133333333333333], [1.6023471E12, 10.533333333333333], [1.60234692E12, 10.133333333333333], [1.60234698E12, 7.666666666666667], [1.60234728E12, 0.5166666666666667], [1.6023468E12, 10.4], [1.60234686E12, 10.2], [1.60234716E12, 10.683333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234728E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60234674E12, "maxY": 10.683333333333334, "series": [{"data": [[1.60234722E12, 9.616666666666667], [1.60234674E12, 7.616666666666666], [1.60234704E12, 9.133333333333333], [1.6023471E12, 10.533333333333333], [1.60234692E12, 10.133333333333333], [1.60234698E12, 7.666666666666667], [1.60234728E12, 0.5166666666666667], [1.6023468E12, 10.4], [1.60234686E12, 10.2], [1.60234716E12, 10.683333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234728E12, "title": "Total Transactions Per Second"}},
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

