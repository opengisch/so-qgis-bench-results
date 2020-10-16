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
        data: {"result": {"minY": 211.0, "minX": 0.0, "maxY": 295379.0, "series": [{"data": [[0.0, 211.0], [0.1, 211.0], [0.2, 221.0], [0.3, 223.0], [0.4, 223.0], [0.5, 227.0], [0.6, 234.0], [0.7, 237.0], [0.8, 237.0], [0.9, 238.0], [1.0, 240.0], [1.1, 254.0], [1.2, 254.0], [1.3, 255.0], [1.4, 258.0], [1.5, 263.0], [1.6, 263.0], [1.7, 266.0], [1.8, 266.0], [1.9, 266.0], [2.0, 279.0], [2.1, 280.0], [2.2, 284.0], [2.3, 284.0], [2.4, 285.0], [2.5, 286.0], [2.6, 287.0], [2.7, 287.0], [2.8, 291.0], [2.9, 303.0], [3.0, 308.0], [3.1, 308.0], [3.2, 311.0], [3.3, 323.0], [3.4, 323.0], [3.5, 326.0], [3.6, 332.0], [3.7, 341.0], [3.8, 341.0], [3.9, 344.0], [4.0, 346.0], [4.1, 351.0], [4.2, 351.0], [4.3, 353.0], [4.4, 355.0], [4.5, 355.0], [4.6, 355.0], [4.7, 355.0], [4.8, 355.0], [4.9, 356.0], [5.0, 356.0], [5.1, 357.0], [5.2, 357.0], [5.3, 357.0], [5.4, 358.0], [5.5, 359.0], [5.6, 363.0], [5.7, 363.0], [5.8, 364.0], [5.9, 367.0], [6.0, 368.0], [6.1, 368.0], [6.2, 369.0], [6.3, 369.0], [6.4, 370.0], [6.5, 370.0], [6.6, 370.0], [6.7, 370.0], [6.8, 370.0], [6.9, 370.0], [7.0, 371.0], [7.1, 372.0], [7.2, 372.0], [7.3, 374.0], [7.4, 378.0], [7.5, 378.0], [7.6, 378.0], [7.7, 378.0], [7.8, 380.0], [7.9, 380.0], [8.0, 380.0], [8.1, 381.0], [8.2, 381.0], [8.3, 384.0], [8.4, 384.0], [8.5, 386.0], [8.6, 386.0], [8.7, 386.0], [8.8, 386.0], [8.9, 388.0], [9.0, 389.0], [9.1, 389.0], [9.2, 389.0], [9.3, 390.0], [9.4, 390.0], [9.5, 390.0], [9.6, 390.0], [9.7, 392.0], [9.8, 398.0], [9.9, 398.0], [10.0, 398.0], [10.1, 399.0], [10.2, 399.0], [10.3, 399.0], [10.4, 403.0], [10.5, 404.0], [10.6, 404.0], [10.7, 405.0], [10.8, 410.0], [10.9, 412.0], [11.0, 412.0], [11.1, 413.0], [11.2, 416.0], [11.3, 419.0], [11.4, 419.0], [11.5, 421.0], [11.6, 421.0], [11.7, 421.0], [11.8, 422.0], [11.9, 424.0], [12.0, 425.0], [12.1, 425.0], [12.2, 427.0], [12.3, 427.0], [12.4, 428.0], [12.5, 428.0], [12.6, 430.0], [12.7, 431.0], [12.8, 431.0], [12.9, 431.0], [13.0, 432.0], [13.1, 435.0], [13.2, 435.0], [13.3, 435.0], [13.4, 437.0], [13.5, 438.0], [13.6, 438.0], [13.7, 442.0], [13.8, 445.0], [13.9, 446.0], [14.0, 446.0], [14.1, 448.0], [14.2, 452.0], [14.3, 453.0], [14.4, 453.0], [14.5, 455.0], [14.6, 456.0], [14.7, 457.0], [14.8, 457.0], [14.9, 457.0], [15.0, 457.0], [15.1, 457.0], [15.2, 458.0], [15.3, 459.0], [15.4, 460.0], [15.5, 460.0], [15.6, 460.0], [15.7, 462.0], [15.8, 464.0], [15.9, 464.0], [16.0, 464.0], [16.1, 464.0], [16.2, 464.0], [16.3, 464.0], [16.4, 465.0], [16.5, 466.0], [16.6, 468.0], [16.7, 468.0], [16.8, 469.0], [16.9, 471.0], [17.0, 471.0], [17.1, 471.0], [17.2, 473.0], [17.3, 473.0], [17.4, 473.0], [17.5, 473.0], [17.6, 474.0], [17.7, 477.0], [17.8, 477.0], [17.9, 479.0], [18.0, 480.0], [18.1, 481.0], [18.2, 481.0], [18.3, 482.0], [18.4, 483.0], [18.5, 483.0], [18.6, 483.0], [18.7, 483.0], [18.8, 483.0], [18.9, 483.0], [19.0, 484.0], [19.1, 486.0], [19.2, 486.0], [19.3, 486.0], [19.4, 486.0], [19.5, 489.0], [19.6, 490.0], [19.7, 490.0], [19.8, 491.0], [19.9, 492.0], [20.0, 493.0], [20.1, 493.0], [20.2, 493.0], [20.3, 494.0], [20.4, 494.0], [20.5, 495.0], [20.6, 498.0], [20.7, 498.0], [20.8, 498.0], [20.9, 498.0], [21.0, 499.0], [21.1, 500.0], [21.2, 500.0], [21.3, 502.0], [21.4, 504.0], [21.5, 506.0], [21.6, 506.0], [21.7, 511.0], [21.8, 512.0], [21.9, 512.0], [22.0, 513.0], [22.1, 513.0], [22.2, 513.0], [22.3, 513.0], [22.4, 516.0], [22.5, 518.0], [22.6, 519.0], [22.7, 519.0], [22.8, 521.0], [22.9, 521.0], [23.0, 522.0], [23.1, 522.0], [23.2, 524.0], [23.3, 525.0], [23.4, 525.0], [23.5, 525.0], [23.6, 529.0], [23.7, 529.0], [23.8, 529.0], [23.9, 537.0], [24.0, 540.0], [24.1, 542.0], [24.2, 542.0], [24.3, 542.0], [24.4, 543.0], [24.5, 546.0], [24.6, 546.0], [24.7, 552.0], [24.8, 552.0], [24.9, 552.0], [25.0, 552.0], [25.1, 553.0], [25.2, 558.0], [25.3, 558.0], [25.4, 558.0], [25.5, 561.0], [25.6, 561.0], [25.7, 561.0], [25.8, 563.0], [25.9, 569.0], [26.0, 572.0], [26.1, 572.0], [26.2, 572.0], [26.3, 573.0], [26.4, 574.0], [26.5, 574.0], [26.6, 575.0], [26.7, 578.0], [26.8, 578.0], [26.9, 578.0], [27.0, 582.0], [27.1, 583.0], [27.2, 583.0], [27.3, 584.0], [27.4, 584.0], [27.5, 584.0], [27.6, 584.0], [27.7, 584.0], [27.8, 587.0], [27.9, 588.0], [28.0, 588.0], [28.1, 588.0], [28.2, 589.0], [28.3, 590.0], [28.4, 590.0], [28.5, 592.0], [28.6, 593.0], [28.7, 593.0], [28.8, 593.0], [28.9, 599.0], [29.0, 603.0], [29.1, 603.0], [29.2, 603.0], [29.3, 608.0], [29.4, 608.0], [29.5, 608.0], [29.6, 609.0], [29.7, 611.0], [29.8, 614.0], [29.9, 614.0], [30.0, 614.0], [30.1, 615.0], [30.2, 615.0], [30.3, 624.0], [30.4, 624.0], [30.5, 626.0], [30.6, 626.0], [30.7, 626.0], [30.8, 627.0], [30.9, 627.0], [31.0, 627.0], [31.1, 629.0], [31.2, 632.0], [31.3, 632.0], [31.4, 632.0], [31.5, 633.0], [31.6, 636.0], [31.7, 636.0], [31.8, 637.0], [31.9, 638.0], [32.0, 639.0], [32.1, 639.0], [32.2, 641.0], [32.3, 642.0], [32.4, 644.0], [32.5, 644.0], [32.6, 645.0], [32.7, 646.0], [32.8, 646.0], [32.9, 646.0], [33.0, 647.0], [33.1, 647.0], [33.2, 648.0], [33.3, 648.0], [33.4, 649.0], [33.5, 654.0], [33.6, 654.0], [33.7, 655.0], [33.8, 657.0], [33.9, 658.0], [34.0, 658.0], [34.1, 661.0], [34.2, 661.0], [34.3, 662.0], [34.4, 662.0], [34.5, 662.0], [34.6, 664.0], [34.7, 666.0], [34.8, 666.0], [34.9, 667.0], [35.0, 670.0], [35.1, 670.0], [35.2, 672.0], [35.3, 674.0], [35.4, 676.0], [35.5, 676.0], [35.6, 677.0], [35.7, 678.0], [35.8, 682.0], [35.9, 682.0], [36.0, 687.0], [36.1, 688.0], [36.2, 689.0], [36.3, 689.0], [36.4, 691.0], [36.5, 691.0], [36.6, 691.0], [36.7, 691.0], [36.8, 692.0], [36.9, 693.0], [37.0, 693.0], [37.1, 693.0], [37.2, 693.0], [37.3, 694.0], [37.4, 694.0], [37.5, 696.0], [37.6, 697.0], [37.7, 697.0], [37.8, 697.0], [37.9, 697.0], [38.0, 698.0], [38.1, 701.0], [38.2, 701.0], [38.3, 702.0], [38.4, 704.0], [38.5, 704.0], [38.6, 706.0], [38.7, 707.0], [38.8, 711.0], [38.9, 711.0], [39.0, 712.0], [39.1, 713.0], [39.2, 716.0], [39.3, 716.0], [39.4, 716.0], [39.5, 718.0], [39.6, 720.0], [39.7, 720.0], [39.8, 726.0], [39.9, 726.0], [40.0, 727.0], [40.1, 727.0], [40.2, 729.0], [40.3, 730.0], [40.4, 730.0], [40.5, 731.0], [40.6, 733.0], [40.7, 734.0], [40.8, 734.0], [40.9, 736.0], [41.0, 736.0], [41.1, 736.0], [41.2, 736.0], [41.3, 737.0], [41.4, 738.0], [41.5, 744.0], [41.6, 744.0], [41.7, 745.0], [41.8, 746.0], [41.9, 746.0], [42.0, 748.0], [42.1, 749.0], [42.2, 749.0], [42.3, 749.0], [42.4, 750.0], [42.5, 751.0], [42.6, 753.0], [42.7, 753.0], [42.8, 759.0], [42.9, 760.0], [43.0, 761.0], [43.1, 761.0], [43.2, 763.0], [43.3, 767.0], [43.4, 767.0], [43.5, 767.0], [43.6, 772.0], [43.7, 772.0], [43.8, 772.0], [43.9, 774.0], [44.0, 775.0], [44.1, 781.0], [44.2, 781.0], [44.3, 783.0], [44.4, 786.0], [44.5, 788.0], [44.6, 788.0], [44.7, 788.0], [44.8, 789.0], [44.9, 791.0], [45.0, 791.0], [45.1, 792.0], [45.2, 792.0], [45.3, 792.0], [45.4, 796.0], [45.5, 797.0], [45.6, 801.0], [45.7, 801.0], [45.8, 807.0], [45.9, 808.0], [46.0, 809.0], [46.1, 809.0], [46.2, 810.0], [46.3, 811.0], [46.4, 812.0], [46.5, 812.0], [46.6, 813.0], [46.7, 814.0], [46.8, 814.0], [46.9, 815.0], [47.0, 819.0], [47.1, 823.0], [47.2, 823.0], [47.3, 824.0], [47.4, 827.0], [47.5, 828.0], [47.6, 828.0], [47.7, 830.0], [47.8, 830.0], [47.9, 832.0], [48.0, 832.0], [48.1, 837.0], [48.2, 839.0], [48.3, 841.0], [48.4, 841.0], [48.5, 842.0], [48.6, 847.0], [48.7, 847.0], [48.8, 848.0], [48.9, 851.0], [49.0, 852.0], [49.1, 852.0], [49.2, 853.0], [49.3, 870.0], [49.4, 870.0], [49.5, 870.0], [49.6, 873.0], [49.7, 875.0], [49.8, 875.0], [49.9, 875.0], [50.0, 877.0], [50.1, 881.0], [50.2, 881.0], [50.3, 883.0], [50.4, 884.0], [50.5, 894.0], [50.6, 894.0], [50.7, 894.0], [50.8, 896.0], [50.9, 900.0], [51.0, 900.0], [51.1, 901.0], [51.2, 903.0], [51.3, 906.0], [51.4, 906.0], [51.5, 907.0], [51.6, 909.0], [51.7, 909.0], [51.8, 910.0], [51.9, 911.0], [52.0, 911.0], [52.1, 911.0], [52.2, 912.0], [52.3, 913.0], [52.4, 915.0], [52.5, 915.0], [52.6, 926.0], [52.7, 927.0], [52.8, 927.0], [52.9, 927.0], [53.0, 927.0], [53.1, 928.0], [53.2, 930.0], [53.3, 930.0], [53.4, 933.0], [53.5, 935.0], [53.6, 935.0], [53.7, 946.0], [53.8, 948.0], [53.9, 948.0], [54.0, 948.0], [54.1, 949.0], [54.2, 952.0], [54.3, 952.0], [54.4, 952.0], [54.5, 959.0], [54.6, 961.0], [54.7, 965.0], [54.8, 965.0], [54.9, 968.0], [55.0, 969.0], [55.1, 969.0], [55.2, 969.0], [55.3, 969.0], [55.4, 973.0], [55.5, 973.0], [55.6, 974.0], [55.7, 976.0], [55.8, 984.0], [55.9, 984.0], [56.0, 990.0], [56.1, 995.0], [56.2, 1003.0], [56.3, 1003.0], [56.4, 1006.0], [56.5, 1007.0], [56.6, 1010.0], [56.7, 1010.0], [56.8, 1025.0], [56.9, 1025.0], [57.0, 1025.0], [57.1, 1025.0], [57.2, 1026.0], [57.3, 1028.0], [57.4, 1028.0], [57.5, 1029.0], [57.6, 1030.0], [57.7, 1033.0], [57.8, 1033.0], [57.9, 1035.0], [58.0, 1036.0], [58.1, 1036.0], [58.2, 1036.0], [58.3, 1039.0], [58.4, 1047.0], [58.5, 1047.0], [58.6, 1047.0], [58.7, 1048.0], [58.8, 1048.0], [58.9, 1048.0], [59.0, 1049.0], [59.1, 1056.0], [59.2, 1057.0], [59.3, 1057.0], [59.4, 1058.0], [59.5, 1061.0], [59.6, 1066.0], [59.7, 1066.0], [59.8, 1074.0], [59.9, 1075.0], [60.0, 1087.0], [60.1, 1087.0], [60.2, 1095.0], [60.3, 1102.0], [60.4, 1102.0], [60.5, 1104.0], [60.6, 1104.0], [60.7, 1104.0], [60.8, 1104.0], [60.9, 1104.0], [61.0, 1107.0], [61.1, 1111.0], [61.2, 1111.0], [61.3, 1115.0], [61.4, 1117.0], [61.5, 1131.0], [61.6, 1131.0], [61.7, 1135.0], [61.8, 1136.0], [61.9, 1136.0], [62.0, 1141.0], [62.1, 1147.0], [62.2, 1150.0], [62.3, 1150.0], [62.4, 1151.0], [62.5, 1153.0], [62.6, 1165.0], [62.7, 1165.0], [62.8, 1167.0], [62.9, 1168.0], [63.0, 1172.0], [63.1, 1172.0], [63.2, 1175.0], [63.3, 1179.0], [63.4, 1179.0], [63.5, 1182.0], [63.6, 1187.0], [63.7, 1196.0], [63.8, 1196.0], [63.9, 1209.0], [64.0, 1213.0], [64.1, 1215.0], [64.2, 1215.0], [64.3, 1216.0], [64.4, 1217.0], [64.5, 1217.0], [64.6, 1217.0], [64.7, 1219.0], [64.8, 1221.0], [64.9, 1227.0], [65.0, 1227.0], [65.1, 1235.0], [65.2, 1240.0], [65.3, 1240.0], [65.4, 1256.0], [65.5, 1259.0], [65.6, 1263.0], [65.7, 1263.0], [65.8, 1268.0], [65.9, 1271.0], [66.0, 1275.0], [66.1, 1275.0], [66.2, 1276.0], [66.3, 1280.0], [66.4, 1284.0], [66.5, 1284.0], [66.6, 1286.0], [66.7, 1286.0], [66.8, 1286.0], [66.9, 1290.0], [67.0, 1299.0], [67.1, 1303.0], [67.2, 1303.0], [67.3, 1309.0], [67.4, 1309.0], [67.5, 1319.0], [67.6, 1319.0], [67.7, 1320.0], [67.8, 1324.0], [67.9, 1335.0], [68.0, 1335.0], [68.1, 1337.0], [68.2, 1337.0], [68.3, 1339.0], [68.4, 1339.0], [68.5, 1339.0], [68.6, 1343.0], [68.7, 1343.0], [68.8, 1352.0], [68.9, 1355.0], [69.0, 1364.0], [69.1, 1364.0], [69.2, 1368.0], [69.3, 1372.0], [69.4, 1378.0], [69.5, 1378.0], [69.6, 1385.0], [69.7, 1400.0], [69.8, 1409.0], [69.9, 1409.0], [70.0, 1420.0], [70.1, 1426.0], [70.2, 1426.0], [70.3, 1426.0], [70.4, 1436.0], [70.5, 1438.0], [70.6, 1438.0], [70.7, 1442.0], [70.8, 1458.0], [70.9, 1464.0], [71.0, 1464.0], [71.1, 1469.0], [71.2, 1470.0], [71.3, 1470.0], [71.4, 1470.0], [71.5, 1472.0], [71.6, 1478.0], [71.7, 1478.0], [71.8, 1496.0], [71.9, 1498.0], [72.0, 1499.0], [72.1, 1499.0], [72.2, 1506.0], [72.3, 1517.0], [72.4, 1524.0], [72.5, 1524.0], [72.6, 1524.0], [72.7, 1530.0], [72.8, 1535.0], [72.9, 1535.0], [73.0, 1537.0], [73.1, 1538.0], [73.2, 1544.0], [73.3, 1544.0], [73.4, 1555.0], [73.5, 1559.0], [73.6, 1559.0], [73.7, 1561.0], [73.8, 1562.0], [73.9, 1564.0], [74.0, 1564.0], [74.1, 1597.0], [74.2, 1608.0], [74.3, 1613.0], [74.4, 1613.0], [74.5, 1614.0], [74.6, 1629.0], [74.7, 1639.0], [74.8, 1639.0], [74.9, 1639.0], [75.0, 1645.0], [75.1, 1645.0], [75.2, 1650.0], [75.3, 1669.0], [75.4, 1673.0], [75.5, 1673.0], [75.6, 1683.0], [75.7, 1713.0], [75.8, 1728.0], [75.9, 1728.0], [76.0, 1731.0], [76.1, 1743.0], [76.2, 1744.0], [76.3, 1744.0], [76.4, 1755.0], [76.5, 1761.0], [76.6, 1765.0], [76.7, 1765.0], [76.8, 1766.0], [76.9, 1774.0], [77.0, 1774.0], [77.1, 1785.0], [77.2, 1789.0], [77.3, 1791.0], [77.4, 1791.0], [77.5, 1793.0], [77.6, 1794.0], [77.7, 1806.0], [77.8, 1806.0], [77.9, 1807.0], [78.0, 1821.0], [78.1, 1825.0], [78.2, 1825.0], [78.3, 1829.0], [78.4, 1835.0], [78.5, 1835.0], [78.6, 1891.0], [78.7, 1899.0], [78.8, 1908.0], [78.9, 1908.0], [79.0, 1923.0], [79.1, 1923.0], [79.2, 1935.0], [79.3, 1935.0], [79.4, 1958.0], [79.5, 1960.0], [79.6, 1970.0], [79.7, 1970.0], [79.8, 1972.0], [79.9, 1976.0], [80.0, 1989.0], [80.1, 1989.0], [80.2, 2006.0], [80.3, 2013.0], [80.4, 2013.0], [80.5, 2018.0], [80.6, 2030.0], [80.7, 2039.0], [80.8, 2039.0], [80.9, 2070.0], [81.0, 2072.0], [81.1, 2084.0], [81.2, 2084.0], [81.3, 2084.0], [81.4, 2107.0], [81.5, 2130.0], [81.6, 2130.0], [81.7, 2148.0], [81.8, 2181.0], [81.9, 2181.0], [82.0, 2199.0], [82.1, 2222.0], [82.2, 2231.0], [82.3, 2231.0], [82.4, 2232.0], [82.5, 2252.0], [82.6, 2261.0], [82.7, 2261.0], [82.8, 2267.0], [82.9, 2274.0], [83.0, 2275.0], [83.1, 2275.0], [83.2, 2299.0], [83.3, 2324.0], [83.4, 2324.0], [83.5, 2357.0], [83.6, 2360.0], [83.7, 2361.0], [83.8, 2361.0], [83.9, 2387.0], [84.0, 2400.0], [84.1, 2415.0], [84.2, 2415.0], [84.3, 2526.0], [84.4, 2541.0], [84.5, 2561.0], [84.6, 2561.0], [84.7, 2568.0], [84.8, 2580.0], [84.9, 2587.0], [85.0, 2587.0], [85.1, 2596.0], [85.2, 2617.0], [85.3, 2617.0], [85.4, 2659.0], [85.5, 2728.0], [85.6, 2738.0], [85.7, 2738.0], [85.8, 2865.0], [85.9, 2911.0], [86.0, 2948.0], [86.1, 2948.0], [86.2, 3127.0], [86.3, 3268.0], [86.4, 3388.0], [86.5, 3388.0], [86.6, 3510.0], [86.7, 3565.0], [86.8, 3565.0], [86.9, 3640.0], [87.0, 3659.0], [87.1, 3702.0], [87.2, 3702.0], [87.3, 3762.0], [87.4, 3903.0], [87.5, 3946.0], [87.6, 3946.0], [87.7, 4024.0], [87.8, 4144.0], [87.9, 4661.0], [88.0, 4661.0], [88.1, 5012.0], [88.2, 13002.0], [88.3, 17948.0], [88.4, 17948.0], [88.5, 19182.0], [88.6, 20799.0], [88.7, 20799.0], [88.8, 22320.0], [88.9, 25654.0], [89.0, 28983.0], [89.1, 28983.0], [89.2, 32657.0], [89.3, 33189.0], [89.4, 33311.0], [89.5, 33311.0], [89.6, 37005.0], [89.7, 38573.0], [89.8, 39798.0], [89.9, 39798.0], [90.0, 39966.0], [90.1, 42769.0], [90.2, 42769.0], [90.3, 46937.0], [90.4, 47104.0], [90.5, 49002.0], [90.6, 49002.0], [90.7, 50265.0], [90.8, 51110.0], [90.9, 52549.0], [91.0, 52549.0], [91.1, 53586.0], [91.2, 60586.0], [91.3, 70131.0], [91.4, 70131.0], [91.5, 71083.0], [91.6, 71333.0], [91.7, 71333.0], [91.8, 72207.0], [91.9, 72208.0], [92.0, 72697.0], [92.1, 72697.0], [92.2, 72872.0], [92.3, 72998.0], [92.4, 73355.0], [92.5, 73355.0], [92.6, 73940.0], [92.7, 74039.0], [92.8, 74844.0], [92.9, 74844.0], [93.0, 74911.0], [93.1, 74915.0], [93.2, 75608.0], [93.3, 75608.0], [93.4, 75620.0], [93.5, 75786.0], [93.6, 75786.0], [93.7, 75876.0], [93.8, 76109.0], [93.9, 76171.0], [94.0, 76171.0], [94.1, 76423.0], [94.2, 76472.0], [94.3, 76884.0], [94.4, 76884.0], [94.5, 77118.0], [94.6, 77319.0], [94.7, 78497.0], [94.8, 78497.0], [94.9, 86247.0], [95.0, 87097.0], [95.1, 87097.0], [95.2, 87803.0], [95.3, 88009.0], [95.4, 88816.0], [95.5, 88816.0], [95.6, 89198.0], [95.7, 91219.0], [95.8, 91761.0], [95.9, 91761.0], [96.0, 96507.0], [96.1, 98161.0], [96.2, 102354.0], [96.3, 102354.0], [96.4, 104920.0], [96.5, 105610.0], [96.6, 113636.0], [96.7, 113636.0], [96.8, 125505.0], [96.9, 145269.0], [97.0, 145269.0], [97.1, 147296.0], [97.2, 148300.0], [97.3, 149450.0], [97.4, 149450.0], [97.5, 149464.0], [97.6, 149496.0], [97.7, 150096.0], [97.8, 150096.0], [97.9, 150511.0], [98.0, 151459.0], [98.1, 153668.0], [98.2, 153668.0], [98.3, 155189.0], [98.4, 158061.0], [98.5, 158061.0], [98.6, 158685.0], [98.7, 160450.0], [98.8, 161544.0], [98.9, 161544.0], [99.0, 175272.0], [99.1, 179035.0], [99.2, 222426.0], [99.3, 222426.0], [99.4, 224296.0], [99.5, 225989.0], [99.6, 226548.0], [99.7, 226548.0], [99.8, 227067.0], [99.9, 295379.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 79.0, "series": [{"data": [[147200.0, 1.0], [295300.0, 1.0], [153600.0, 1.0], [175200.0, 1.0], [222400.0, 1.0], [150500.0, 1.0], [226500.0, 1.0], [77100.0, 1.0], [73900.0, 1.0], [89100.0, 1.0], [102300.0, 1.0], [125500.0, 1.0], [151400.0, 1.0], [158600.0, 1.0], [224200.0, 1.0], [33300.0, 1.0], [33100.0, 1.0], [38500.0, 1.0], [148300.0, 1.0], [39700.0, 1.0], [39900.0, 1.0], [42700.0, 1.0], [47100.0, 1.0], [46900.0, 1.0], [51100.0, 1.0], [200.0, 21.0], [52500.0, 1.0], [53500.0, 1.0], [225900.0, 1.0], [60500.0, 1.0], [71000.0, 1.0], [72200.0, 2.0], [72600.0, 1.0], [300.0, 55.0], [75800.0, 1.0], [87000.0, 1.0], [87800.0, 1.0], [86200.0, 1.0], [400.0, 79.0], [500.0, 58.0], [145200.0, 1.0], [600.0, 67.0], [150000.0, 1.0], [158000.0, 1.0], [160400.0, 1.0], [700.0, 55.0], [800.0, 39.0], [900.0, 39.0], [1000.0, 30.0], [1100.0, 26.0], [1200.0, 24.0], [1300.0, 19.0], [1400.0, 18.0], [1500.0, 15.0], [1600.0, 11.0], [1700.0, 15.0], [1800.0, 8.0], [1900.0, 10.0], [2000.0, 9.0], [2100.0, 5.0], [2200.0, 9.0], [2300.0, 5.0], [2400.0, 2.0], [2500.0, 7.0], [2600.0, 2.0], [2700.0, 2.0], [2800.0, 1.0], [2900.0, 2.0], [3100.0, 1.0], [3300.0, 1.0], [3200.0, 1.0], [3500.0, 2.0], [3600.0, 2.0], [3700.0, 2.0], [3900.0, 2.0], [4000.0, 1.0], [4100.0, 1.0], [72900.0, 1.0], [4600.0, 1.0], [73300.0, 1.0], [71300.0, 1.0], [70100.0, 1.0], [76100.0, 2.0], [75700.0, 1.0], [77300.0, 1.0], [74900.0, 2.0], [5000.0, 1.0], [91700.0, 1.0], [96500.0, 1.0], [98100.0, 1.0], [104900.0, 1.0], [149400.0, 3.0], [179000.0, 1.0], [13000.0, 1.0], [227000.0, 1.0], [17900.0, 1.0], [19100.0, 1.0], [20700.0, 1.0], [22300.0, 1.0], [25600.0, 1.0], [28900.0, 1.0], [32600.0, 1.0], [37000.0, 1.0], [155100.0, 1.0], [161500.0, 1.0], [49000.0, 1.0], [50200.0, 1.0], [72800.0, 1.0], [74800.0, 1.0], [75600.0, 2.0], [76800.0, 1.0], [76400.0, 2.0], [74000.0, 1.0], [78400.0, 1.0], [88800.0, 1.0], [88000.0, 1.0], [91200.0, 1.0], [105600.0, 1.0], [113600.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 295300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 156.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 374.0, "series": [{"data": [[0.0, 156.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 374.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 205.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.851211072664363, "minX": 1.60284534E12, "maxY": 10.0, "series": [{"data": [[1.60284582E12, 10.0], [1.60284612E12, 10.0], [1.60284546E12, 10.0], [1.60284576E12, 10.0], [1.60284558E12, 10.0], [1.60284588E12, 10.0], [1.60284618E12, 9.851211072664363], [1.60284552E12, 10.0], [1.60284534E12, 10.0], [1.60284564E12, 10.0], [1.60284594E12, 10.0], [1.60284606E12, 10.0], [1.6028454E12, 10.0], [1.6028457E12, 10.0], [1.602846E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284618E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 502.0, "minX": 1.0, "maxY": 12344.833333333325, "series": [{"data": [[2.0, 1048.0], [1.0, 896.0], [9.0, 700.5], [10.0, 12344.833333333325], [5.0, 841.0], [6.0, 502.0], [3.0, 674.0], [7.0, 2580.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.941496598639453, 12205.621768707473]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 30.983333333333334, "minX": 1.60284534E12, "maxY": 657097.1, "series": [{"data": [[1.60284582E12, 22646.866666666665], [1.60284612E12, 100017.15], [1.60284546E12, 24924.75], [1.60284576E12, 36971.416666666664], [1.60284558E12, 1493.4166666666667], [1.60284588E12, 2072.9], [1.60284618E12, 648558.45], [1.60284552E12, 816.7833333333333], [1.60284534E12, 49471.9], [1.60284564E12, 138525.13333333333], [1.60284594E12, 9743.366666666667], [1.60284606E12, 23493.7], [1.6028454E12, 38905.36666666667], [1.6028457E12, 657097.1], [1.602846E12, 980.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60284582E12, 54.55], [1.60284612E12, 345.55], [1.60284546E12, 60.266666666666666], [1.60284576E12, 30.983333333333334], [1.60284558E12, 46.416666666666664], [1.60284588E12, 46.75], [1.60284618E12, 2238.866666666667], [1.60284552E12, 43.9], [1.60284534E12, 110.1], [1.60284564E12, 237.88333333333333], [1.60284594E12, 66.3], [1.60284606E12, 52.38333333333333], [1.6028454E12, 70.45], [1.6028457E12, 2239.35], [1.602846E12, 50.78333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284618E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1900.7857142857144, "minX": 1.60284534E12, "maxY": 125322.16666666666, "series": [{"data": [[1.60284582E12, 55398.71428571428], [1.60284612E12, 23240.931818181823], [1.60284546E12, 87091.125], [1.60284576E12, 4394.75], [1.60284558E12, 66251.16666666666], [1.60284588E12, 125322.16666666666], [1.60284618E12, 3501.2214532872003], [1.60284552E12, 65211.0], [1.60284534E12, 1900.7857142857144], [1.60284564E12, 17223.4], [1.60284594E12, 96890.55555555556], [1.60284606E12, 50528.142857142855], [1.6028454E12, 69422.66666666666], [1.6028457E12, 5172.221453287194], [1.602846E12, 57895.99999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284618E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1860.9285714285716, "minX": 1.60284534E12, "maxY": 125322.0, "series": [{"data": [[1.60284582E12, 55396.71428571428], [1.60284612E12, 23239.863636363636], [1.60284546E12, 87089.375], [1.60284576E12, 4390.5], [1.60284558E12, 66250.83333333333], [1.60284588E12, 125322.0], [1.60284618E12, 3477.830449826992], [1.60284552E12, 65210.83333333333], [1.60284534E12, 1860.9285714285716], [1.60284564E12, 17221.500000000004], [1.60284594E12, 96889.00000000001], [1.60284606E12, 50527.142857142855], [1.6028454E12, 69357.99999999999], [1.6028457E12, 5146.498269896198], [1.602846E12, 57895.571428571435]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284618E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60284534E12, "maxY": 5.777777777777778, "series": [{"data": [[1.60284582E12, 1.0], [1.60284612E12, 0.9318181818181818], [1.60284546E12, 0.9999999999999999], [1.60284576E12, 0.5], [1.60284558E12, 1.0], [1.60284588E12, 1.0], [1.60284618E12, 0.8477508650519033], [1.60284552E12, 1.3333333333333333], [1.60284534E12, 5.0], [1.60284564E12, 1.3999999999999997], [1.60284594E12, 1.3333333333333333], [1.60284606E12, 0.5714285714285714], [1.6028454E12, 5.777777777777778], [1.6028457E12, 1.0968858131487873], [1.602846E12, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284618E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 211.0, "minX": 1.60284534E12, "maxY": 295379.0, "series": [{"data": [[1.60284582E12, 77319.0], [1.60284612E12, 227067.0], [1.60284546E12, 161544.0], [1.60284576E12, 5012.0], [1.60284558E12, 158685.0], [1.60284588E12, 179035.0], [1.60284618E12, 151459.0], [1.60284552E12, 105610.0], [1.60284534E12, 3640.0], [1.60284564E12, 150096.0], [1.60284594E12, 226548.0], [1.60284606E12, 149464.0], [1.6028454E12, 91761.0], [1.6028457E12, 295379.0], [1.602846E12, 148300.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60284582E12, 647.0], [1.60284612E12, 308.0], [1.60284546E12, 254.0], [1.60284576E12, 3762.0], [1.60284558E12, 498.0], [1.60284588E12, 74039.0], [1.60284618E12, 283.8799994468689], [1.60284552E12, 237.0], [1.60284534E12, 234.0], [1.60284564E12, 255.0], [1.60284594E12, 211.0], [1.60284606E12, 284.0], [1.6028454E12, 240.0], [1.6028457E12, 233.70999923944473], [1.602846E12, 266.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60284582E12, 647.0], [1.60284612E12, 308.0], [1.60284546E12, 254.0], [1.60284576E12, 3762.0], [1.60284558E12, 498.0], [1.60284588E12, 74039.0], [1.60284618E12, 285.96800022125245], [1.60284552E12, 237.0], [1.60284534E12, 234.0], [1.60284564E12, 255.0], [1.60284594E12, 211.0], [1.60284606E12, 284.0], [1.6028454E12, 240.0], [1.6028457E12, 236.5810003042221], [1.602846E12, 266.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60284582E12, 647.0], [1.60284612E12, 308.0], [1.60284546E12, 254.0], [1.60284576E12, 3762.0], [1.60284558E12, 498.0], [1.60284588E12, 74039.0], [1.60284618E12, 285.03999972343445], [1.60284552E12, 237.0], [1.60284534E12, 234.0], [1.60284564E12, 255.0], [1.60284594E12, 211.0], [1.60284606E12, 284.0], [1.6028454E12, 240.0], [1.6028457E12, 235.30499961972237], [1.602846E12, 266.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60284582E12, 647.0], [1.60284612E12, 308.0], [1.60284546E12, 254.0], [1.60284576E12, 3762.0], [1.60284558E12, 498.0], [1.60284588E12, 74039.0], [1.60284618E12, 263.0], [1.60284552E12, 237.0], [1.60284534E12, 234.0], [1.60284564E12, 255.0], [1.60284594E12, 211.0], [1.60284606E12, 284.0], [1.6028454E12, 240.0], [1.6028457E12, 221.0], [1.602846E12, 266.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60284582E12, 76472.0], [1.60284612E12, 743.0], [1.60284546E12, 72539.5], [1.60284576E12, 4402.5], [1.60284558E12, 64878.5], [1.60284588E12, 124336.0], [1.60284618E12, 824.0], [1.60284552E12, 73921.0], [1.60284534E12, 2137.5], [1.60284564E12, 792.5], [1.60284594E12, 75876.0], [1.60284606E12, 25654.0], [1.6028454E12, 88009.0], [1.6028457E12, 819.0], [1.602846E12, 74911.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284618E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 429.0, "minX": 1.0, "maxY": 1535.0, "series": [{"data": [[8.0, 950.0], [2.0, 1313.0], [9.0, 1119.5], [10.0, 823.5], [11.0, 929.5], [3.0, 735.5], [12.0, 885.0], [13.0, 716.0], [14.0, 647.0], [15.0, 729.0], [1.0, 903.0], [4.0, 1123.5], [16.0, 429.0], [5.0, 1535.0], [6.0, 784.0], [7.0, 1068.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 429.0, "minX": 1.0, "maxY": 1378.0, "series": [{"data": [[8.0, 948.5], [2.0, 1310.0], [9.0, 1088.0], [10.0, 822.5], [11.0, 927.5], [3.0, 733.5], [12.0, 880.0], [13.0, 716.0], [14.0, 646.5], [15.0, 729.0], [1.0, 902.0], [4.0, 1117.5], [16.0, 429.0], [5.0, 1378.0], [6.0, 782.5], [7.0, 1067.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60284534E12, "maxY": 4.816666666666666, "series": [{"data": [[1.60284582E12, 0.11666666666666667], [1.60284612E12, 0.7333333333333333], [1.60284546E12, 0.13333333333333333], [1.60284576E12, 0.06666666666666667], [1.60284558E12, 0.1], [1.60284588E12, 0.1], [1.60284618E12, 4.65], [1.60284552E12, 0.1], [1.60284534E12, 0.4], [1.60284564E12, 0.5], [1.60284594E12, 0.15], [1.60284606E12, 0.11666666666666667], [1.6028454E12, 0.15], [1.6028457E12, 4.816666666666666], [1.602846E12, 0.11666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284618E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60284534E12, "maxY": 4.816666666666666, "series": [{"data": [[1.60284582E12, 0.11666666666666667], [1.60284612E12, 0.7333333333333333], [1.60284546E12, 0.13333333333333333], [1.60284576E12, 0.06666666666666667], [1.60284558E12, 0.1], [1.60284588E12, 0.1], [1.60284618E12, 4.816666666666666], [1.60284552E12, 0.1], [1.60284534E12, 0.23333333333333334], [1.60284564E12, 0.5], [1.60284594E12, 0.15], [1.60284606E12, 0.11666666666666667], [1.6028454E12, 0.15], [1.6028457E12, 4.816666666666666], [1.602846E12, 0.11666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284618E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60284534E12, "maxY": 4.816666666666666, "series": [{"data": [[1.60284582E12, 0.11666666666666667], [1.60284612E12, 0.7333333333333333], [1.60284546E12, 0.13333333333333333], [1.60284576E12, 0.06666666666666667], [1.60284558E12, 0.1], [1.60284588E12, 0.1], [1.60284618E12, 4.816666666666666], [1.60284552E12, 0.1], [1.60284534E12, 0.23333333333333334], [1.60284564E12, 0.5], [1.60284594E12, 0.15], [1.60284606E12, 0.11666666666666667], [1.6028454E12, 0.15], [1.6028457E12, 4.816666666666666], [1.602846E12, 0.11666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284618E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60284534E12, "maxY": 4.816666666666666, "series": [{"data": [[1.60284582E12, 0.11666666666666667], [1.60284612E12, 0.7333333333333333], [1.60284546E12, 0.13333333333333333], [1.60284576E12, 0.06666666666666667], [1.60284558E12, 0.1], [1.60284588E12, 0.1], [1.60284618E12, 4.816666666666666], [1.60284552E12, 0.1], [1.60284534E12, 0.23333333333333334], [1.60284564E12, 0.5], [1.60284594E12, 0.15], [1.60284606E12, 0.11666666666666667], [1.6028454E12, 0.15], [1.6028457E12, 4.816666666666666], [1.602846E12, 0.11666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284618E12, "title": "Total Transactions Per Second"}},
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

