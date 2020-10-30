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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 9184.0, "series": [{"data": [[0.0, 184.0], [0.1, 187.0], [0.2, 191.0], [0.3, 193.0], [0.4, 195.0], [0.5, 196.0], [0.6, 198.0], [0.7, 199.0], [0.8, 200.0], [0.9, 200.0], [1.0, 202.0], [1.1, 204.0], [1.2, 205.0], [1.3, 206.0], [1.4, 207.0], [1.5, 207.0], [1.6, 209.0], [1.7, 210.0], [1.8, 211.0], [1.9, 212.0], [2.0, 213.0], [2.1, 213.0], [2.2, 214.0], [2.3, 215.0], [2.4, 215.0], [2.5, 215.0], [2.6, 216.0], [2.7, 217.0], [2.8, 217.0], [2.9, 219.0], [3.0, 219.0], [3.1, 219.0], [3.2, 220.0], [3.3, 220.0], [3.4, 220.0], [3.5, 221.0], [3.6, 221.0], [3.7, 222.0], [3.8, 223.0], [3.9, 223.0], [4.0, 223.0], [4.1, 224.0], [4.2, 225.0], [4.3, 225.0], [4.4, 226.0], [4.5, 226.0], [4.6, 226.0], [4.7, 227.0], [4.8, 228.0], [4.9, 229.0], [5.0, 230.0], [5.1, 231.0], [5.2, 232.0], [5.3, 233.0], [5.4, 233.0], [5.5, 234.0], [5.6, 234.0], [5.7, 235.0], [5.8, 235.0], [5.9, 236.0], [6.0, 237.0], [6.1, 237.0], [6.2, 239.0], [6.3, 240.0], [6.4, 242.0], [6.5, 246.0], [6.6, 249.0], [6.7, 250.0], [6.8, 252.0], [6.9, 261.0], [7.0, 264.0], [7.1, 265.0], [7.2, 268.0], [7.3, 270.0], [7.4, 272.0], [7.5, 274.0], [7.6, 276.0], [7.7, 277.0], [7.8, 279.0], [7.9, 281.0], [8.0, 282.0], [8.1, 283.0], [8.2, 284.0], [8.3, 286.0], [8.4, 288.0], [8.5, 289.0], [8.6, 290.0], [8.7, 291.0], [8.8, 292.0], [8.9, 294.0], [9.0, 297.0], [9.1, 299.0], [9.2, 300.0], [9.3, 302.0], [9.4, 302.0], [9.5, 304.0], [9.6, 304.0], [9.7, 305.0], [9.8, 306.0], [9.9, 307.0], [10.0, 308.0], [10.1, 310.0], [10.2, 310.0], [10.3, 311.0], [10.4, 313.0], [10.5, 313.0], [10.6, 314.0], [10.7, 314.0], [10.8, 314.0], [10.9, 315.0], [11.0, 316.0], [11.1, 316.0], [11.2, 318.0], [11.3, 318.0], [11.4, 318.0], [11.5, 319.0], [11.6, 320.0], [11.7, 320.0], [11.8, 321.0], [11.9, 321.0], [12.0, 323.0], [12.1, 324.0], [12.2, 324.0], [12.3, 325.0], [12.4, 326.0], [12.5, 327.0], [12.6, 329.0], [12.7, 329.0], [12.8, 330.0], [12.9, 332.0], [13.0, 333.0], [13.1, 335.0], [13.2, 336.0], [13.3, 337.0], [13.4, 337.0], [13.5, 339.0], [13.6, 341.0], [13.7, 342.0], [13.8, 344.0], [13.9, 345.0], [14.0, 347.0], [14.1, 347.0], [14.2, 350.0], [14.3, 352.0], [14.4, 353.0], [14.5, 356.0], [14.6, 360.0], [14.7, 361.0], [14.8, 363.0], [14.9, 364.0], [15.0, 366.0], [15.1, 367.0], [15.2, 369.0], [15.3, 371.0], [15.4, 372.0], [15.5, 373.0], [15.6, 374.0], [15.7, 375.0], [15.8, 376.0], [15.9, 378.0], [16.0, 379.0], [16.1, 380.0], [16.2, 380.0], [16.3, 382.0], [16.4, 382.0], [16.5, 383.0], [16.6, 384.0], [16.7, 385.0], [16.8, 386.0], [16.9, 387.0], [17.0, 388.0], [17.1, 388.0], [17.2, 389.0], [17.3, 390.0], [17.4, 391.0], [17.5, 392.0], [17.6, 392.0], [17.7, 394.0], [17.8, 395.0], [17.9, 395.0], [18.0, 396.0], [18.1, 397.0], [18.2, 397.0], [18.3, 398.0], [18.4, 398.0], [18.5, 399.0], [18.6, 400.0], [18.7, 401.0], [18.8, 402.0], [18.9, 403.0], [19.0, 405.0], [19.1, 406.0], [19.2, 406.0], [19.3, 408.0], [19.4, 410.0], [19.5, 411.0], [19.6, 412.0], [19.7, 412.0], [19.8, 414.0], [19.9, 415.0], [20.0, 416.0], [20.1, 417.0], [20.2, 418.0], [20.3, 418.0], [20.4, 419.0], [20.5, 420.0], [20.6, 421.0], [20.7, 422.0], [20.8, 423.0], [20.9, 424.0], [21.0, 425.0], [21.1, 427.0], [21.2, 428.0], [21.3, 429.0], [21.4, 431.0], [21.5, 431.0], [21.6, 433.0], [21.7, 433.0], [21.8, 434.0], [21.9, 435.0], [22.0, 435.0], [22.1, 437.0], [22.2, 437.0], [22.3, 439.0], [22.4, 440.0], [22.5, 440.0], [22.6, 441.0], [22.7, 442.0], [22.8, 442.0], [22.9, 443.0], [23.0, 444.0], [23.1, 445.0], [23.2, 446.0], [23.3, 446.0], [23.4, 447.0], [23.5, 449.0], [23.6, 450.0], [23.7, 451.0], [23.8, 451.0], [23.9, 452.0], [24.0, 453.0], [24.1, 453.0], [24.2, 454.0], [24.3, 455.0], [24.4, 457.0], [24.5, 457.0], [24.6, 458.0], [24.7, 459.0], [24.8, 461.0], [24.9, 462.0], [25.0, 464.0], [25.1, 466.0], [25.2, 468.0], [25.3, 469.0], [25.4, 470.0], [25.5, 471.0], [25.6, 471.0], [25.7, 473.0], [25.8, 474.0], [25.9, 475.0], [26.0, 476.0], [26.1, 477.0], [26.2, 477.0], [26.3, 478.0], [26.4, 480.0], [26.5, 481.0], [26.6, 482.0], [26.7, 483.0], [26.8, 484.0], [26.9, 484.0], [27.0, 485.0], [27.1, 487.0], [27.2, 487.0], [27.3, 489.0], [27.4, 490.0], [27.5, 491.0], [27.6, 494.0], [27.7, 495.0], [27.8, 496.0], [27.9, 498.0], [28.0, 500.0], [28.1, 502.0], [28.2, 504.0], [28.3, 504.0], [28.4, 506.0], [28.5, 506.0], [28.6, 507.0], [28.7, 508.0], [28.8, 510.0], [28.9, 512.0], [29.0, 513.0], [29.1, 516.0], [29.2, 516.0], [29.3, 517.0], [29.4, 520.0], [29.5, 522.0], [29.6, 524.0], [29.7, 525.0], [29.8, 527.0], [29.9, 529.0], [30.0, 529.0], [30.1, 531.0], [30.2, 531.0], [30.3, 532.0], [30.4, 533.0], [30.5, 534.0], [30.6, 535.0], [30.7, 536.0], [30.8, 537.0], [30.9, 539.0], [31.0, 540.0], [31.1, 541.0], [31.2, 543.0], [31.3, 543.0], [31.4, 545.0], [31.5, 546.0], [31.6, 548.0], [31.7, 550.0], [31.8, 552.0], [31.9, 553.0], [32.0, 554.0], [32.1, 554.0], [32.2, 555.0], [32.3, 557.0], [32.4, 558.0], [32.5, 558.0], [32.6, 559.0], [32.7, 561.0], [32.8, 562.0], [32.9, 562.0], [33.0, 563.0], [33.1, 564.0], [33.2, 565.0], [33.3, 566.0], [33.4, 567.0], [33.5, 568.0], [33.6, 568.0], [33.7, 570.0], [33.8, 571.0], [33.9, 572.0], [34.0, 574.0], [34.1, 575.0], [34.2, 575.0], [34.3, 576.0], [34.4, 578.0], [34.5, 579.0], [34.6, 580.0], [34.7, 581.0], [34.8, 582.0], [34.9, 583.0], [35.0, 585.0], [35.1, 586.0], [35.2, 587.0], [35.3, 588.0], [35.4, 589.0], [35.5, 591.0], [35.6, 592.0], [35.7, 593.0], [35.8, 594.0], [35.9, 596.0], [36.0, 596.0], [36.1, 599.0], [36.2, 600.0], [36.3, 602.0], [36.4, 605.0], [36.5, 605.0], [36.6, 607.0], [36.7, 609.0], [36.8, 611.0], [36.9, 612.0], [37.0, 613.0], [37.1, 614.0], [37.2, 615.0], [37.3, 616.0], [37.4, 617.0], [37.5, 618.0], [37.6, 618.0], [37.7, 619.0], [37.8, 620.0], [37.9, 621.0], [38.0, 622.0], [38.1, 624.0], [38.2, 625.0], [38.3, 628.0], [38.4, 629.0], [38.5, 631.0], [38.6, 633.0], [38.7, 635.0], [38.8, 636.0], [38.9, 637.0], [39.0, 639.0], [39.1, 640.0], [39.2, 641.0], [39.3, 642.0], [39.4, 643.0], [39.5, 644.0], [39.6, 644.0], [39.7, 645.0], [39.8, 646.0], [39.9, 647.0], [40.0, 648.0], [40.1, 649.0], [40.2, 650.0], [40.3, 651.0], [40.4, 652.0], [40.5, 654.0], [40.6, 656.0], [40.7, 656.0], [40.8, 658.0], [40.9, 658.0], [41.0, 659.0], [41.1, 661.0], [41.2, 663.0], [41.3, 664.0], [41.4, 666.0], [41.5, 667.0], [41.6, 668.0], [41.7, 669.0], [41.8, 671.0], [41.9, 673.0], [42.0, 674.0], [42.1, 675.0], [42.2, 677.0], [42.3, 678.0], [42.4, 679.0], [42.5, 680.0], [42.6, 683.0], [42.7, 684.0], [42.8, 685.0], [42.9, 687.0], [43.0, 688.0], [43.1, 690.0], [43.2, 691.0], [43.3, 693.0], [43.4, 696.0], [43.5, 700.0], [43.6, 701.0], [43.7, 702.0], [43.8, 705.0], [43.9, 707.0], [44.0, 708.0], [44.1, 710.0], [44.2, 711.0], [44.3, 713.0], [44.4, 714.0], [44.5, 715.0], [44.6, 717.0], [44.7, 718.0], [44.8, 720.0], [44.9, 721.0], [45.0, 723.0], [45.1, 724.0], [45.2, 726.0], [45.3, 730.0], [45.4, 731.0], [45.5, 733.0], [45.6, 734.0], [45.7, 735.0], [45.8, 738.0], [45.9, 739.0], [46.0, 740.0], [46.1, 740.0], [46.2, 742.0], [46.3, 743.0], [46.4, 745.0], [46.5, 748.0], [46.6, 750.0], [46.7, 753.0], [46.8, 756.0], [46.9, 758.0], [47.0, 760.0], [47.1, 761.0], [47.2, 763.0], [47.3, 765.0], [47.4, 767.0], [47.5, 770.0], [47.6, 772.0], [47.7, 774.0], [47.8, 776.0], [47.9, 780.0], [48.0, 781.0], [48.1, 782.0], [48.2, 784.0], [48.3, 787.0], [48.4, 791.0], [48.5, 794.0], [48.6, 795.0], [48.7, 797.0], [48.8, 799.0], [48.9, 800.0], [49.0, 802.0], [49.1, 804.0], [49.2, 808.0], [49.3, 809.0], [49.4, 811.0], [49.5, 814.0], [49.6, 816.0], [49.7, 819.0], [49.8, 821.0], [49.9, 823.0], [50.0, 826.0], [50.1, 828.0], [50.2, 831.0], [50.3, 835.0], [50.4, 838.0], [50.5, 841.0], [50.6, 843.0], [50.7, 846.0], [50.8, 852.0], [50.9, 854.0], [51.0, 859.0], [51.1, 862.0], [51.2, 863.0], [51.3, 864.0], [51.4, 867.0], [51.5, 869.0], [51.6, 871.0], [51.7, 873.0], [51.8, 875.0], [51.9, 877.0], [52.0, 878.0], [52.1, 880.0], [52.2, 883.0], [52.3, 884.0], [52.4, 886.0], [52.5, 888.0], [52.6, 890.0], [52.7, 895.0], [52.8, 897.0], [52.9, 900.0], [53.0, 901.0], [53.1, 903.0], [53.2, 907.0], [53.3, 908.0], [53.4, 911.0], [53.5, 913.0], [53.6, 915.0], [53.7, 916.0], [53.8, 919.0], [53.9, 921.0], [54.0, 923.0], [54.1, 927.0], [54.2, 927.0], [54.3, 930.0], [54.4, 931.0], [54.5, 933.0], [54.6, 938.0], [54.7, 942.0], [54.8, 942.0], [54.9, 944.0], [55.0, 946.0], [55.1, 948.0], [55.2, 950.0], [55.3, 950.0], [55.4, 953.0], [55.5, 955.0], [55.6, 956.0], [55.7, 958.0], [55.8, 959.0], [55.9, 961.0], [56.0, 964.0], [56.1, 965.0], [56.2, 967.0], [56.3, 968.0], [56.4, 969.0], [56.5, 971.0], [56.6, 973.0], [56.7, 973.0], [56.8, 975.0], [56.9, 976.0], [57.0, 978.0], [57.1, 982.0], [57.2, 983.0], [57.3, 985.0], [57.4, 987.0], [57.5, 991.0], [57.6, 994.0], [57.7, 997.0], [57.8, 998.0], [57.9, 1001.0], [58.0, 1004.0], [58.1, 1005.0], [58.2, 1007.0], [58.3, 1009.0], [58.4, 1011.0], [58.5, 1013.0], [58.6, 1014.0], [58.7, 1016.0], [58.8, 1018.0], [58.9, 1020.0], [59.0, 1022.0], [59.1, 1026.0], [59.2, 1028.0], [59.3, 1029.0], [59.4, 1030.0], [59.5, 1035.0], [59.6, 1038.0], [59.7, 1040.0], [59.8, 1043.0], [59.9, 1045.0], [60.0, 1046.0], [60.1, 1049.0], [60.2, 1050.0], [60.3, 1055.0], [60.4, 1056.0], [60.5, 1059.0], [60.6, 1060.0], [60.7, 1062.0], [60.8, 1065.0], [60.9, 1066.0], [61.0, 1068.0], [61.1, 1071.0], [61.2, 1072.0], [61.3, 1073.0], [61.4, 1075.0], [61.5, 1077.0], [61.6, 1080.0], [61.7, 1082.0], [61.8, 1085.0], [61.9, 1087.0], [62.0, 1089.0], [62.1, 1090.0], [62.2, 1092.0], [62.3, 1094.0], [62.4, 1096.0], [62.5, 1097.0], [62.6, 1099.0], [62.7, 1102.0], [62.8, 1105.0], [62.9, 1109.0], [63.0, 1111.0], [63.1, 1113.0], [63.2, 1115.0], [63.3, 1118.0], [63.4, 1122.0], [63.5, 1125.0], [63.6, 1126.0], [63.7, 1128.0], [63.8, 1134.0], [63.9, 1136.0], [64.0, 1137.0], [64.1, 1140.0], [64.2, 1145.0], [64.3, 1147.0], [64.4, 1149.0], [64.5, 1151.0], [64.6, 1153.0], [64.7, 1154.0], [64.8, 1157.0], [64.9, 1158.0], [65.0, 1161.0], [65.1, 1164.0], [65.2, 1166.0], [65.3, 1168.0], [65.4, 1171.0], [65.5, 1173.0], [65.6, 1174.0], [65.7, 1176.0], [65.8, 1179.0], [65.9, 1181.0], [66.0, 1182.0], [66.1, 1183.0], [66.2, 1187.0], [66.3, 1189.0], [66.4, 1193.0], [66.5, 1194.0], [66.6, 1197.0], [66.7, 1199.0], [66.8, 1200.0], [66.9, 1204.0], [67.0, 1206.0], [67.1, 1208.0], [67.2, 1211.0], [67.3, 1213.0], [67.4, 1215.0], [67.5, 1217.0], [67.6, 1219.0], [67.7, 1223.0], [67.8, 1224.0], [67.9, 1225.0], [68.0, 1228.0], [68.1, 1230.0], [68.2, 1232.0], [68.3, 1236.0], [68.4, 1238.0], [68.5, 1240.0], [68.6, 1243.0], [68.7, 1247.0], [68.8, 1249.0], [68.9, 1253.0], [69.0, 1255.0], [69.1, 1257.0], [69.2, 1258.0], [69.3, 1261.0], [69.4, 1263.0], [69.5, 1268.0], [69.6, 1270.0], [69.7, 1275.0], [69.8, 1278.0], [69.9, 1280.0], [70.0, 1281.0], [70.1, 1285.0], [70.2, 1287.0], [70.3, 1290.0], [70.4, 1292.0], [70.5, 1295.0], [70.6, 1297.0], [70.7, 1301.0], [70.8, 1302.0], [70.9, 1305.0], [71.0, 1308.0], [71.1, 1312.0], [71.2, 1314.0], [71.3, 1319.0], [71.4, 1322.0], [71.5, 1325.0], [71.6, 1328.0], [71.7, 1332.0], [71.8, 1335.0], [71.9, 1337.0], [72.0, 1339.0], [72.1, 1341.0], [72.2, 1343.0], [72.3, 1345.0], [72.4, 1346.0], [72.5, 1349.0], [72.6, 1350.0], [72.7, 1352.0], [72.8, 1354.0], [72.9, 1355.0], [73.0, 1356.0], [73.1, 1357.0], [73.2, 1360.0], [73.3, 1363.0], [73.4, 1364.0], [73.5, 1366.0], [73.6, 1370.0], [73.7, 1371.0], [73.8, 1376.0], [73.9, 1378.0], [74.0, 1379.0], [74.1, 1380.0], [74.2, 1381.0], [74.3, 1383.0], [74.4, 1384.0], [74.5, 1386.0], [74.6, 1388.0], [74.7, 1390.0], [74.8, 1392.0], [74.9, 1394.0], [75.0, 1395.0], [75.1, 1397.0], [75.2, 1401.0], [75.3, 1406.0], [75.4, 1407.0], [75.5, 1408.0], [75.6, 1409.0], [75.7, 1410.0], [75.8, 1413.0], [75.9, 1414.0], [76.0, 1416.0], [76.1, 1417.0], [76.2, 1420.0], [76.3, 1422.0], [76.4, 1424.0], [76.5, 1425.0], [76.6, 1427.0], [76.7, 1431.0], [76.8, 1432.0], [76.9, 1434.0], [77.0, 1435.0], [77.1, 1437.0], [77.2, 1439.0], [77.3, 1442.0], [77.4, 1444.0], [77.5, 1449.0], [77.6, 1451.0], [77.7, 1455.0], [77.8, 1456.0], [77.9, 1458.0], [78.0, 1460.0], [78.1, 1463.0], [78.2, 1465.0], [78.3, 1466.0], [78.4, 1468.0], [78.5, 1472.0], [78.6, 1475.0], [78.7, 1477.0], [78.8, 1479.0], [78.9, 1480.0], [79.0, 1484.0], [79.1, 1485.0], [79.2, 1486.0], [79.3, 1487.0], [79.4, 1490.0], [79.5, 1493.0], [79.6, 1499.0], [79.7, 1500.0], [79.8, 1503.0], [79.9, 1506.0], [80.0, 1509.0], [80.1, 1511.0], [80.2, 1514.0], [80.3, 1515.0], [80.4, 1519.0], [80.5, 1522.0], [80.6, 1523.0], [80.7, 1526.0], [80.8, 1528.0], [80.9, 1533.0], [81.0, 1535.0], [81.1, 1541.0], [81.2, 1542.0], [81.3, 1544.0], [81.4, 1546.0], [81.5, 1550.0], [81.6, 1555.0], [81.7, 1557.0], [81.8, 1562.0], [81.9, 1564.0], [82.0, 1565.0], [82.1, 1566.0], [82.2, 1571.0], [82.3, 1575.0], [82.4, 1578.0], [82.5, 1582.0], [82.6, 1584.0], [82.7, 1593.0], [82.8, 1597.0], [82.9, 1600.0], [83.0, 1605.0], [83.1, 1609.0], [83.2, 1616.0], [83.3, 1620.0], [83.4, 1621.0], [83.5, 1623.0], [83.6, 1625.0], [83.7, 1627.0], [83.8, 1628.0], [83.9, 1631.0], [84.0, 1635.0], [84.1, 1639.0], [84.2, 1642.0], [84.3, 1645.0], [84.4, 1646.0], [84.5, 1651.0], [84.6, 1654.0], [84.7, 1660.0], [84.8, 1663.0], [84.9, 1666.0], [85.0, 1669.0], [85.1, 1676.0], [85.2, 1679.0], [85.3, 1682.0], [85.4, 1685.0], [85.5, 1689.0], [85.6, 1691.0], [85.7, 1694.0], [85.8, 1702.0], [85.9, 1705.0], [86.0, 1708.0], [86.1, 1711.0], [86.2, 1715.0], [86.3, 1718.0], [86.4, 1720.0], [86.5, 1726.0], [86.6, 1729.0], [86.7, 1730.0], [86.8, 1736.0], [86.9, 1740.0], [87.0, 1744.0], [87.1, 1747.0], [87.2, 1751.0], [87.3, 1754.0], [87.4, 1758.0], [87.5, 1760.0], [87.6, 1768.0], [87.7, 1780.0], [87.8, 1787.0], [87.9, 1801.0], [88.0, 1807.0], [88.1, 1809.0], [88.2, 1810.0], [88.3, 1817.0], [88.4, 1821.0], [88.5, 1823.0], [88.6, 1827.0], [88.7, 1832.0], [88.8, 1838.0], [88.9, 1844.0], [89.0, 1850.0], [89.1, 1857.0], [89.2, 1865.0], [89.3, 1868.0], [89.4, 1876.0], [89.5, 1880.0], [89.6, 1883.0], [89.7, 1891.0], [89.8, 1898.0], [89.9, 1901.0], [90.0, 1905.0], [90.1, 1910.0], [90.2, 1915.0], [90.3, 1919.0], [90.4, 1925.0], [90.5, 1929.0], [90.6, 1938.0], [90.7, 1942.0], [90.8, 1953.0], [90.9, 1962.0], [91.0, 1966.0], [91.1, 1976.0], [91.2, 1985.0], [91.3, 1989.0], [91.4, 1994.0], [91.5, 2002.0], [91.6, 2013.0], [91.7, 2022.0], [91.8, 2027.0], [91.9, 2033.0], [92.0, 2036.0], [92.1, 2047.0], [92.2, 2057.0], [92.3, 2066.0], [92.4, 2072.0], [92.5, 2081.0], [92.6, 2088.0], [92.7, 2094.0], [92.8, 2110.0], [92.9, 2121.0], [93.0, 2134.0], [93.1, 2142.0], [93.2, 2151.0], [93.3, 2155.0], [93.4, 2174.0], [93.5, 2186.0], [93.6, 2201.0], [93.7, 2220.0], [93.8, 2225.0], [93.9, 2231.0], [94.0, 2241.0], [94.1, 2255.0], [94.2, 2257.0], [94.3, 2267.0], [94.4, 2278.0], [94.5, 2288.0], [94.6, 2301.0], [94.7, 2310.0], [94.8, 2325.0], [94.9, 2331.0], [95.0, 2335.0], [95.1, 2345.0], [95.2, 2353.0], [95.3, 2361.0], [95.4, 2369.0], [95.5, 2381.0], [95.6, 2393.0], [95.7, 2397.0], [95.8, 2414.0], [95.9, 2427.0], [96.0, 2459.0], [96.1, 2479.0], [96.2, 2490.0], [96.3, 2494.0], [96.4, 2513.0], [96.5, 2529.0], [96.6, 2551.0], [96.7, 2573.0], [96.8, 2600.0], [96.9, 2624.0], [97.0, 2650.0], [97.1, 2658.0], [97.2, 2668.0], [97.3, 2682.0], [97.4, 2692.0], [97.5, 2708.0], [97.6, 2721.0], [97.7, 2755.0], [97.8, 2779.0], [97.9, 2807.0], [98.0, 2857.0], [98.1, 2869.0], [98.2, 2897.0], [98.3, 2921.0], [98.4, 2961.0], [98.5, 3049.0], [98.6, 3059.0], [98.7, 3087.0], [98.8, 3159.0], [98.9, 3197.0], [99.0, 3370.0], [99.1, 3430.0], [99.2, 3497.0], [99.3, 3569.0], [99.4, 3633.0], [99.5, 3925.0], [99.6, 4099.0], [99.7, 4296.0], [99.8, 4905.0], [99.9, 5267.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 491.0, "series": [{"data": [[600.0, 382.0], [700.0, 276.0], [800.0, 211.0], [900.0, 258.0], [1000.0, 247.0], [1100.0, 217.0], [1200.0, 202.0], [1300.0, 231.0], [1400.0, 236.0], [1500.0, 167.0], [1600.0, 148.0], [1700.0, 110.0], [1800.0, 101.0], [1900.0, 86.0], [2000.0, 66.0], [2100.0, 44.0], [2200.0, 51.0], [2300.0, 59.0], [2400.0, 31.0], [2500.0, 25.0], [2600.0, 36.0], [2700.0, 21.0], [2800.0, 18.0], [2900.0, 11.0], [3000.0, 15.0], [3100.0, 9.0], [3300.0, 5.0], [3200.0, 2.0], [3400.0, 9.0], [3500.0, 9.0], [3600.0, 2.0], [3700.0, 2.0], [3800.0, 2.0], [3900.0, 2.0], [4000.0, 4.0], [4200.0, 4.0], [4100.0, 1.0], [4600.0, 2.0], [4500.0, 1.0], [4700.0, 1.0], [4900.0, 3.0], [5000.0, 1.0], [5100.0, 1.0], [5200.0, 1.0], [5400.0, 2.0], [5600.0, 1.0], [6300.0, 1.0], [9100.0, 1.0], [100.0, 40.0], [200.0, 433.0], [300.0, 488.0], [400.0, 491.0], [500.0, 423.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1053.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2681.0, "series": [{"data": [[0.0, 1456.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2681.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1053.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.1875, "minX": 1.60402758E12, "maxY": 10.0, "series": [{"data": [[1.60402782E12, 10.0], [1.60402812E12, 7.1875], [1.60402794E12, 10.0], [1.60402758E12, 10.0], [1.60402776E12, 10.0], [1.60402806E12, 10.0], [1.60402788E12, 10.0], [1.60402764E12, 10.0], [1.6040277E12, 10.0], [1.604028E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402812E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 320.0, "minX": 1.0, "maxY": 3083.0, "series": [{"data": [[8.0, 321.0], [4.0, 1802.0], [2.0, 2948.0], [1.0, 3083.0], [9.0, 320.0], [10.0, 1009.3410538506095], [5.0, 1100.0], [6.0, 970.0], [3.0, 1388.0], [7.0, 1752.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1010.2273603082865]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 124.65, "minX": 1.60402758E12, "maxY": 3340942.2666666666, "series": [{"data": [[1.60402782E12, 2755234.0166666666], [1.60402812E12, 107307.6], [1.60402794E12, 2851589.55], [1.60402758E12, 1971619.2833333334], [1.60402776E12, 3112588.7333333334], [1.60402806E12, 2540338.0833333335], [1.60402788E12, 2355521.85], [1.60402764E12, 2198804.783333333], [1.6040277E12, 3340942.2666666666], [1.604028E12, 2738873.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60402782E12, 3745.983333333333], [1.60402812E12, 124.65], [1.60402794E12, 4681.566666666667], [1.60402758E12, 2673.733333333333], [1.60402776E12, 4541.533333333334], [1.60402806E12, 4483.883333333333], [1.60402788E12, 3990.2166666666667], [1.60402764E12, 4653.783333333334], [1.6040277E12, 4749.416666666667], [1.604028E12, 4932.566666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402812E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 919.8215384615387, "minX": 1.60402758E12, "maxY": 1340.1875000000002, "series": [{"data": [[1.60402782E12, 1167.9422310756972], [1.60402812E12, 1340.1875000000002], [1.60402794E12, 947.2657232704399], [1.60402758E12, 1154.0349462365582], [1.60402776E12, 1011.8545150501666], [1.60402806E12, 1010.1043771043769], [1.60402788E12, 1089.7111913357403], [1.60402764E12, 939.4131455399059], [1.6040277E12, 948.5023847376783], [1.604028E12, 919.8215384615387]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402812E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 918.326153846154, "minX": 1.60402758E12, "maxY": 1338.1250000000002, "series": [{"data": [[1.60402782E12, 1165.6215139442234], [1.60402812E12, 1338.1250000000002], [1.60402794E12, 945.5943396226419], [1.60402758E12, 1151.6747311827949], [1.60402776E12, 1009.4949832775919], [1.60402806E12, 1008.7138047138047], [1.60402788E12, 1088.296028880867], [1.60402764E12, 937.866979655711], [1.6040277E12, 946.0000000000005], [1.604028E12, 918.326153846154]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402812E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60402758E12, "maxY": 0.25268817204301075, "series": [{"data": [[1.60402782E12, 0.029880478087649414], [1.60402812E12, 0.0], [1.60402794E12, 0.017295597484276715], [1.60402758E12, 0.25268817204301075], [1.60402776E12, 0.018394648829431426], [1.60402806E12, 0.01515151515151515], [1.60402788E12, 0.025270758122743694], [1.60402764E12, 0.01721439749608763], [1.6040277E12, 0.02066772655007947], [1.604028E12, 0.018461538461538463]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402812E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60402758E12, "maxY": 9184.0, "series": [{"data": [[1.60402782E12, 5145.0], [1.60402812E12, 3083.0], [1.60402794E12, 3183.0], [1.60402758E12, 5082.0], [1.60402776E12, 4656.0], [1.60402806E12, 4293.0], [1.60402788E12, 9184.0], [1.60402764E12, 4609.0], [1.6040277E12, 5438.0], [1.604028E12, 2942.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60402782E12, 201.58099964022637], [1.60402812E12, 320.0], [1.60402794E12, 201.0], [1.60402758E12, 195.42799964427948], [1.60402776E12, 197.56399942874907], [1.60402806E12, 190.70999971628189], [1.60402788E12, 213.97999947071077], [1.60402764E12, 198.27999954223634], [1.6040277E12, 199.3399996995926], [1.604028E12, 202.57699953436853]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60402782E12, 202.93910014390946], [1.60402812E12, 320.0], [1.60402794E12, 201.30630006074907], [1.60402758E12, 196.7708001422882], [1.60402776E12, 199.72040022850035], [1.60402806E12, 191.78100011348724], [1.60402788E12, 214.4945000529289], [1.60402764E12, 199.0], [1.6040277E12, 200.71100018024444], [1.604028E12, 204.3347001862526]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60402782E12, 202.33549982011317], [1.60402812E12, 320.0], [1.60402794E12, 201.05149992406368], [1.60402758E12, 196.17399982213973], [1.60402776E12, 198.76199971437455], [1.60402806E12, 191.30499985814095], [1.60402788E12, 214.27249993383884], [1.60402764E12, 199.0], [1.6040277E12, 199.9699998497963], [1.604028E12, 203.55349976718426]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60402782E12, 185.0], [1.60402812E12, 320.0], [1.60402794E12, 197.0], [1.60402758E12, 188.0], [1.60402776E12, 187.0], [1.60402806E12, 184.0], [1.60402788E12, 198.0], [1.60402764E12, 188.0], [1.6040277E12, 193.0], [1.604028E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60402782E12, 1017.0], [1.60402812E12, 1093.5], [1.60402794E12, 718.5], [1.60402758E12, 977.0], [1.60402776E12, 946.0], [1.60402806E12, 826.5], [1.60402788E12, 930.5], [1.60402764E12, 740.0], [1.6040277E12, 667.0], [1.604028E12, 704.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402812E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 387.0, "minX": 1.0, "maxY": 3015.5, "series": [{"data": [[2.0, 1206.0], [3.0, 1924.0], [4.0, 1429.0], [5.0, 1366.0], [6.0, 1364.0], [7.0, 1147.0], [8.0, 1155.5], [9.0, 962.0], [10.0, 942.0], [11.0, 947.0], [12.0, 842.0], [13.0, 710.0], [14.0, 644.0], [15.0, 557.0], [16.0, 452.5], [1.0, 3015.5], [17.0, 464.5], [18.0, 447.5], [19.0, 422.5], [20.0, 442.0], [21.0, 417.0], [22.0, 419.5], [23.0, 421.0], [24.0, 475.5], [25.0, 401.0], [26.0, 411.5], [29.0, 387.0], [30.0, 387.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 386.0, "minX": 1.0, "maxY": 3009.0, "series": [{"data": [[2.0, 1202.5], [3.0, 1919.0], [4.0, 1426.5], [5.0, 1354.0], [6.0, 1358.5], [7.0, 1144.0], [8.0, 1154.0], [9.0, 961.0], [10.0, 941.0], [11.0, 945.0], [12.0, 841.5], [13.0, 709.0], [14.0, 644.0], [15.0, 557.0], [16.0, 452.5], [1.0, 3009.0], [17.0, 464.5], [18.0, 447.5], [19.0, 422.0], [20.0, 442.0], [21.0, 417.0], [22.0, 419.5], [23.0, 420.0], [24.0, 475.5], [25.0, 401.0], [26.0, 411.5], [29.0, 387.0], [30.0, 386.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.60402758E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60402782E12, 8.366666666666667], [1.60402812E12, 0.1], [1.60402794E12, 10.6], [1.60402758E12, 6.366666666666666], [1.60402776E12, 9.966666666666667], [1.60402806E12, 9.9], [1.60402788E12, 9.233333333333333], [1.60402764E12, 10.65], [1.6040277E12, 10.483333333333333], [1.604028E12, 10.833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402812E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60402758E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60402782E12, 8.366666666666667], [1.60402812E12, 0.26666666666666666], [1.60402794E12, 10.6], [1.60402758E12, 6.2], [1.60402776E12, 9.966666666666667], [1.60402806E12, 9.9], [1.60402788E12, 9.233333333333333], [1.60402764E12, 10.65], [1.6040277E12, 10.483333333333333], [1.604028E12, 10.833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402812E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60402758E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60402782E12, 8.366666666666667], [1.60402812E12, 0.26666666666666666], [1.60402794E12, 10.6], [1.60402758E12, 6.2], [1.60402776E12, 9.966666666666667], [1.60402806E12, 9.9], [1.60402788E12, 9.233333333333333], [1.60402764E12, 10.65], [1.6040277E12, 10.483333333333333], [1.604028E12, 10.833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402812E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60402758E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60402782E12, 8.366666666666667], [1.60402812E12, 0.26666666666666666], [1.60402794E12, 10.6], [1.60402758E12, 6.2], [1.60402776E12, 9.966666666666667], [1.60402806E12, 9.9], [1.60402788E12, 9.233333333333333], [1.60402764E12, 10.65], [1.6040277E12, 10.483333333333333], [1.604028E12, 10.833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402812E12, "title": "Total Transactions Per Second"}},
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

