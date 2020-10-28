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
        data: {"result": {"minY": 194.0, "minX": 0.0, "maxY": 293588.0, "series": [{"data": [[0.0, 194.0], [0.1, 194.0], [0.2, 196.0], [0.3, 198.0], [0.4, 198.0], [0.5, 211.0], [0.6, 218.0], [0.7, 227.0], [0.8, 227.0], [0.9, 231.0], [1.0, 234.0], [1.1, 237.0], [1.2, 237.0], [1.3, 239.0], [1.4, 239.0], [1.5, 242.0], [1.6, 242.0], [1.7, 243.0], [1.8, 245.0], [1.9, 245.0], [2.0, 253.0], [2.1, 257.0], [2.2, 263.0], [2.3, 263.0], [2.4, 264.0], [2.5, 264.0], [2.6, 264.0], [2.7, 264.0], [2.8, 265.0], [2.9, 277.0], [3.0, 279.0], [3.1, 279.0], [3.2, 289.0], [3.3, 295.0], [3.4, 295.0], [3.5, 296.0], [3.6, 298.0], [3.7, 300.0], [3.8, 300.0], [3.9, 315.0], [4.0, 317.0], [4.1, 332.0], [4.2, 332.0], [4.3, 335.0], [4.4, 338.0], [4.5, 339.0], [4.6, 339.0], [4.7, 339.0], [4.8, 341.0], [4.9, 342.0], [5.0, 342.0], [5.1, 346.0], [5.2, 348.0], [5.3, 348.0], [5.4, 349.0], [5.5, 349.0], [5.6, 355.0], [5.7, 355.0], [5.8, 357.0], [5.9, 358.0], [6.0, 359.0], [6.1, 359.0], [6.2, 361.0], [6.3, 365.0], [6.4, 366.0], [6.5, 366.0], [6.6, 366.0], [6.7, 367.0], [6.8, 367.0], [6.9, 367.0], [7.0, 367.0], [7.1, 369.0], [7.2, 369.0], [7.3, 369.0], [7.4, 370.0], [7.5, 370.0], [7.6, 370.0], [7.7, 372.0], [7.8, 373.0], [7.9, 374.0], [8.0, 374.0], [8.1, 377.0], [8.2, 379.0], [8.3, 380.0], [8.4, 380.0], [8.5, 380.0], [8.6, 380.0], [8.7, 380.0], [8.8, 381.0], [8.9, 382.0], [9.0, 383.0], [9.1, 383.0], [9.2, 383.0], [9.3, 384.0], [9.4, 385.0], [9.5, 385.0], [9.6, 386.0], [9.7, 387.0], [9.8, 387.0], [9.9, 387.0], [10.0, 388.0], [10.1, 388.0], [10.2, 388.0], [10.3, 389.0], [10.4, 390.0], [10.5, 391.0], [10.6, 391.0], [10.7, 393.0], [10.8, 394.0], [10.9, 399.0], [11.0, 399.0], [11.1, 399.0], [11.2, 400.0], [11.3, 402.0], [11.4, 402.0], [11.5, 404.0], [11.6, 405.0], [11.7, 405.0], [11.8, 406.0], [11.9, 408.0], [12.0, 408.0], [12.1, 408.0], [12.2, 411.0], [12.3, 412.0], [12.4, 413.0], [12.5, 413.0], [12.6, 415.0], [12.7, 417.0], [12.8, 418.0], [12.9, 418.0], [13.0, 418.0], [13.1, 419.0], [13.2, 423.0], [13.3, 423.0], [13.4, 423.0], [13.5, 425.0], [13.6, 425.0], [13.7, 425.0], [13.8, 429.0], [13.9, 429.0], [14.0, 429.0], [14.1, 432.0], [14.2, 435.0], [14.3, 437.0], [14.4, 437.0], [14.5, 437.0], [14.6, 437.0], [14.7, 441.0], [14.8, 441.0], [14.9, 442.0], [15.0, 444.0], [15.1, 444.0], [15.2, 445.0], [15.3, 445.0], [15.4, 445.0], [15.5, 445.0], [15.6, 446.0], [15.7, 448.0], [15.8, 450.0], [15.9, 450.0], [16.0, 450.0], [16.1, 450.0], [16.2, 455.0], [16.3, 455.0], [16.4, 457.0], [16.5, 458.0], [16.6, 458.0], [16.7, 458.0], [16.8, 461.0], [16.9, 463.0], [17.0, 463.0], [17.1, 463.0], [17.2, 464.0], [17.3, 465.0], [17.4, 465.0], [17.5, 465.0], [17.6, 465.0], [17.7, 466.0], [17.8, 466.0], [17.9, 467.0], [18.0, 467.0], [18.1, 467.0], [18.2, 467.0], [18.3, 468.0], [18.4, 469.0], [18.5, 469.0], [18.6, 471.0], [18.7, 474.0], [18.8, 474.0], [18.9, 474.0], [19.0, 475.0], [19.1, 475.0], [19.2, 477.0], [19.3, 477.0], [19.4, 479.0], [19.5, 481.0], [19.6, 482.0], [19.7, 482.0], [19.8, 482.0], [19.9, 482.0], [20.0, 483.0], [20.1, 483.0], [20.2, 484.0], [20.3, 484.0], [20.4, 484.0], [20.5, 487.0], [20.6, 488.0], [20.7, 489.0], [20.8, 489.0], [20.9, 489.0], [21.0, 490.0], [21.1, 491.0], [21.2, 491.0], [21.3, 492.0], [21.4, 494.0], [21.5, 494.0], [21.6, 494.0], [21.7, 495.0], [21.8, 495.0], [21.9, 495.0], [22.0, 495.0], [22.1, 496.0], [22.2, 497.0], [22.3, 497.0], [22.4, 499.0], [22.5, 501.0], [22.6, 502.0], [22.7, 502.0], [22.8, 503.0], [22.9, 503.0], [23.0, 505.0], [23.1, 505.0], [23.2, 509.0], [23.3, 512.0], [23.4, 512.0], [23.5, 512.0], [23.6, 513.0], [23.7, 513.0], [23.8, 513.0], [23.9, 514.0], [24.0, 518.0], [24.1, 519.0], [24.2, 519.0], [24.3, 520.0], [24.4, 520.0], [24.5, 521.0], [24.6, 521.0], [24.7, 522.0], [24.8, 522.0], [24.9, 523.0], [25.0, 523.0], [25.1, 525.0], [25.2, 526.0], [25.3, 526.0], [25.4, 526.0], [25.5, 529.0], [25.6, 531.0], [25.7, 531.0], [25.8, 531.0], [25.9, 532.0], [26.0, 532.0], [26.1, 532.0], [26.2, 536.0], [26.3, 536.0], [26.4, 536.0], [26.5, 536.0], [26.6, 538.0], [26.7, 541.0], [26.8, 541.0], [26.9, 542.0], [27.0, 542.0], [27.1, 542.0], [27.2, 542.0], [27.3, 543.0], [27.4, 546.0], [27.5, 546.0], [27.6, 546.0], [27.7, 547.0], [27.8, 547.0], [27.9, 549.0], [28.0, 549.0], [28.1, 552.0], [28.2, 553.0], [28.3, 553.0], [28.4, 553.0], [28.5, 555.0], [28.6, 557.0], [28.7, 557.0], [28.8, 560.0], [28.9, 561.0], [29.0, 564.0], [29.1, 564.0], [29.2, 565.0], [29.3, 566.0], [29.4, 567.0], [29.5, 567.0], [29.6, 567.0], [29.7, 568.0], [29.8, 568.0], [29.9, 568.0], [30.0, 570.0], [30.1, 573.0], [30.2, 573.0], [30.3, 577.0], [30.4, 577.0], [30.5, 578.0], [30.6, 578.0], [30.7, 579.0], [30.8, 580.0], [30.9, 582.0], [31.0, 582.0], [31.1, 582.0], [31.2, 585.0], [31.3, 586.0], [31.4, 586.0], [31.5, 587.0], [31.6, 587.0], [31.7, 587.0], [31.8, 587.0], [31.9, 588.0], [32.0, 588.0], [32.1, 588.0], [32.2, 588.0], [32.3, 591.0], [32.4, 596.0], [32.5, 596.0], [32.6, 601.0], [32.7, 602.0], [32.8, 602.0], [32.9, 602.0], [33.0, 605.0], [33.1, 609.0], [33.2, 609.0], [33.3, 609.0], [33.4, 612.0], [33.5, 613.0], [33.6, 613.0], [33.7, 622.0], [33.8, 625.0], [33.9, 626.0], [34.0, 626.0], [34.1, 628.0], [34.2, 629.0], [34.3, 629.0], [34.4, 629.0], [34.5, 632.0], [34.6, 634.0], [34.7, 638.0], [34.8, 638.0], [34.9, 638.0], [35.0, 638.0], [35.1, 638.0], [35.2, 638.0], [35.3, 638.0], [35.4, 638.0], [35.5, 638.0], [35.6, 639.0], [35.7, 641.0], [35.8, 641.0], [35.9, 641.0], [36.0, 642.0], [36.1, 645.0], [36.2, 645.0], [36.3, 645.0], [36.4, 650.0], [36.5, 651.0], [36.6, 652.0], [36.7, 652.0], [36.8, 652.0], [36.9, 653.0], [37.0, 653.0], [37.1, 656.0], [37.2, 657.0], [37.3, 657.0], [37.4, 657.0], [37.5, 658.0], [37.6, 659.0], [37.7, 659.0], [37.8, 659.0], [37.9, 660.0], [38.0, 660.0], [38.1, 661.0], [38.2, 661.0], [38.3, 663.0], [38.4, 664.0], [38.5, 664.0], [38.6, 666.0], [38.7, 668.0], [38.8, 669.0], [38.9, 669.0], [39.0, 670.0], [39.1, 670.0], [39.2, 670.0], [39.3, 670.0], [39.4, 671.0], [39.5, 672.0], [39.6, 675.0], [39.7, 675.0], [39.8, 676.0], [39.9, 676.0], [40.0, 677.0], [40.1, 677.0], [40.2, 678.0], [40.3, 678.0], [40.4, 678.0], [40.5, 684.0], [40.6, 686.0], [40.7, 689.0], [40.8, 689.0], [40.9, 690.0], [41.0, 692.0], [41.1, 693.0], [41.2, 693.0], [41.3, 695.0], [41.4, 696.0], [41.5, 698.0], [41.6, 698.0], [41.7, 698.0], [41.8, 706.0], [41.9, 706.0], [42.0, 708.0], [42.1, 708.0], [42.2, 709.0], [42.3, 709.0], [42.4, 710.0], [42.5, 711.0], [42.6, 712.0], [42.7, 712.0], [42.8, 712.0], [42.9, 713.0], [43.0, 715.0], [43.1, 715.0], [43.2, 716.0], [43.3, 716.0], [43.4, 716.0], [43.5, 716.0], [43.6, 717.0], [43.7, 718.0], [43.8, 718.0], [43.9, 718.0], [44.0, 723.0], [44.1, 724.0], [44.2, 724.0], [44.3, 727.0], [44.4, 730.0], [44.5, 730.0], [44.6, 730.0], [44.7, 732.0], [44.8, 732.0], [44.9, 732.0], [45.0, 732.0], [45.1, 733.0], [45.2, 738.0], [45.3, 738.0], [45.4, 740.0], [45.5, 742.0], [45.6, 743.0], [45.7, 743.0], [45.8, 744.0], [45.9, 746.0], [46.0, 747.0], [46.1, 747.0], [46.2, 748.0], [46.3, 750.0], [46.4, 750.0], [46.5, 750.0], [46.6, 752.0], [46.7, 752.0], [46.8, 752.0], [46.9, 752.0], [47.0, 753.0], [47.1, 753.0], [47.2, 753.0], [47.3, 755.0], [47.4, 755.0], [47.5, 755.0], [47.6, 755.0], [47.7, 761.0], [47.8, 771.0], [47.9, 774.0], [48.0, 774.0], [48.1, 775.0], [48.2, 775.0], [48.3, 779.0], [48.4, 779.0], [48.5, 779.0], [48.6, 781.0], [48.7, 781.0], [48.8, 783.0], [48.9, 789.0], [49.0, 789.0], [49.1, 789.0], [49.2, 790.0], [49.3, 796.0], [49.4, 800.0], [49.5, 800.0], [49.6, 806.0], [49.7, 806.0], [49.8, 807.0], [49.9, 807.0], [50.0, 809.0], [50.1, 810.0], [50.2, 810.0], [50.3, 810.0], [50.4, 811.0], [50.5, 811.0], [50.6, 811.0], [50.7, 812.0], [50.8, 814.0], [50.9, 815.0], [51.0, 815.0], [51.1, 819.0], [51.2, 822.0], [51.3, 832.0], [51.4, 832.0], [51.5, 833.0], [51.6, 835.0], [51.7, 835.0], [51.8, 836.0], [51.9, 839.0], [52.0, 839.0], [52.1, 839.0], [52.2, 840.0], [52.3, 842.0], [52.4, 845.0], [52.5, 845.0], [52.6, 846.0], [52.7, 847.0], [52.8, 850.0], [52.9, 850.0], [53.0, 851.0], [53.1, 855.0], [53.2, 859.0], [53.3, 859.0], [53.4, 860.0], [53.5, 862.0], [53.6, 862.0], [53.7, 862.0], [53.8, 862.0], [53.9, 864.0], [54.0, 864.0], [54.1, 874.0], [54.2, 875.0], [54.3, 879.0], [54.4, 879.0], [54.5, 882.0], [54.6, 887.0], [54.7, 890.0], [54.8, 890.0], [54.9, 891.0], [55.0, 897.0], [55.1, 897.0], [55.2, 899.0], [55.3, 904.0], [55.4, 907.0], [55.5, 907.0], [55.6, 910.0], [55.7, 912.0], [55.8, 913.0], [55.9, 913.0], [56.0, 914.0], [56.1, 922.0], [56.2, 923.0], [56.3, 923.0], [56.4, 927.0], [56.5, 931.0], [56.6, 931.0], [56.7, 931.0], [56.8, 933.0], [56.9, 934.0], [57.0, 934.0], [57.1, 936.0], [57.2, 947.0], [57.3, 947.0], [57.4, 947.0], [57.5, 953.0], [57.6, 953.0], [57.7, 954.0], [57.8, 954.0], [57.9, 956.0], [58.0, 961.0], [58.1, 961.0], [58.2, 961.0], [58.3, 964.0], [58.4, 968.0], [58.5, 968.0], [58.6, 968.0], [58.7, 972.0], [58.8, 975.0], [58.9, 975.0], [59.0, 975.0], [59.1, 978.0], [59.2, 988.0], [59.3, 988.0], [59.4, 993.0], [59.5, 999.0], [59.6, 1004.0], [59.7, 1004.0], [59.8, 1009.0], [59.9, 1014.0], [60.0, 1014.0], [60.1, 1014.0], [60.2, 1024.0], [60.3, 1028.0], [60.4, 1028.0], [60.5, 1031.0], [60.6, 1035.0], [60.7, 1036.0], [60.8, 1036.0], [60.9, 1044.0], [61.0, 1053.0], [61.1, 1057.0], [61.2, 1057.0], [61.3, 1058.0], [61.4, 1066.0], [61.5, 1067.0], [61.6, 1067.0], [61.7, 1072.0], [61.8, 1086.0], [61.9, 1086.0], [62.0, 1087.0], [62.1, 1090.0], [62.2, 1092.0], [62.3, 1092.0], [62.4, 1094.0], [62.5, 1108.0], [62.6, 1109.0], [62.7, 1109.0], [62.8, 1110.0], [62.9, 1114.0], [63.0, 1116.0], [63.1, 1116.0], [63.2, 1120.0], [63.3, 1131.0], [63.4, 1131.0], [63.5, 1135.0], [63.6, 1135.0], [63.7, 1137.0], [63.8, 1137.0], [63.9, 1139.0], [64.0, 1147.0], [64.1, 1150.0], [64.2, 1150.0], [64.3, 1151.0], [64.4, 1156.0], [64.5, 1167.0], [64.6, 1167.0], [64.7, 1169.0], [64.8, 1170.0], [64.9, 1173.0], [65.0, 1173.0], [65.1, 1177.0], [65.2, 1177.0], [65.3, 1177.0], [65.4, 1183.0], [65.5, 1188.0], [65.6, 1192.0], [65.7, 1192.0], [65.8, 1210.0], [65.9, 1217.0], [66.0, 1217.0], [66.1, 1217.0], [66.2, 1218.0], [66.3, 1221.0], [66.4, 1222.0], [66.5, 1222.0], [66.6, 1232.0], [66.7, 1246.0], [66.8, 1246.0], [66.9, 1258.0], [67.0, 1262.0], [67.1, 1263.0], [67.2, 1263.0], [67.3, 1266.0], [67.4, 1270.0], [67.5, 1287.0], [67.6, 1287.0], [67.7, 1287.0], [67.8, 1296.0], [67.9, 1297.0], [68.0, 1297.0], [68.1, 1309.0], [68.2, 1319.0], [68.3, 1327.0], [68.4, 1327.0], [68.5, 1335.0], [68.6, 1346.0], [68.7, 1346.0], [68.8, 1350.0], [68.9, 1357.0], [69.0, 1375.0], [69.1, 1375.0], [69.2, 1376.0], [69.3, 1377.0], [69.4, 1379.0], [69.5, 1379.0], [69.6, 1380.0], [69.7, 1384.0], [69.8, 1385.0], [69.9, 1385.0], [70.0, 1390.0], [70.1, 1402.0], [70.2, 1402.0], [70.3, 1413.0], [70.4, 1414.0], [70.5, 1426.0], [70.6, 1426.0], [70.7, 1435.0], [70.8, 1437.0], [70.9, 1441.0], [71.0, 1441.0], [71.1, 1443.0], [71.2, 1458.0], [71.3, 1472.0], [71.4, 1472.0], [71.5, 1484.0], [71.6, 1500.0], [71.7, 1500.0], [71.8, 1503.0], [71.9, 1507.0], [72.0, 1514.0], [72.1, 1514.0], [72.2, 1521.0], [72.3, 1522.0], [72.4, 1531.0], [72.5, 1531.0], [72.6, 1542.0], [72.7, 1546.0], [72.8, 1559.0], [72.9, 1559.0], [73.0, 1563.0], [73.1, 1586.0], [73.2, 1586.0], [73.3, 1586.0], [73.4, 1619.0], [73.5, 1621.0], [73.6, 1621.0], [73.7, 1626.0], [73.8, 1633.0], [73.9, 1647.0], [74.0, 1647.0], [74.1, 1651.0], [74.2, 1657.0], [74.3, 1659.0], [74.4, 1659.0], [74.5, 1672.0], [74.6, 1674.0], [74.7, 1683.0], [74.8, 1683.0], [74.9, 1689.0], [75.0, 1689.0], [75.1, 1689.0], [75.2, 1713.0], [75.3, 1717.0], [75.4, 1745.0], [75.5, 1745.0], [75.6, 1753.0], [75.7, 1754.0], [75.8, 1762.0], [75.9, 1762.0], [76.0, 1769.0], [76.1, 1780.0], [76.2, 1782.0], [76.3, 1782.0], [76.4, 1785.0], [76.5, 1785.0], [76.6, 1793.0], [76.7, 1793.0], [76.8, 1812.0], [76.9, 1833.0], [77.0, 1833.0], [77.1, 1834.0], [77.2, 1837.0], [77.3, 1855.0], [77.4, 1855.0], [77.5, 1863.0], [77.6, 1875.0], [77.7, 1876.0], [77.8, 1876.0], [77.9, 1881.0], [78.0, 1896.0], [78.1, 1914.0], [78.2, 1914.0], [78.3, 1918.0], [78.4, 1927.0], [78.5, 1927.0], [78.6, 1927.0], [78.7, 1940.0], [78.8, 1951.0], [78.9, 1951.0], [79.0, 1954.0], [79.1, 1971.0], [79.2, 2004.0], [79.3, 2004.0], [79.4, 2005.0], [79.5, 2026.0], [79.6, 2027.0], [79.7, 2027.0], [79.8, 2051.0], [79.9, 2061.0], [80.0, 2061.0], [80.1, 2061.0], [80.2, 2073.0], [80.3, 2111.0], [80.4, 2111.0], [80.5, 2124.0], [80.6, 2129.0], [80.7, 2135.0], [80.8, 2135.0], [80.9, 2145.0], [81.0, 2160.0], [81.1, 2162.0], [81.2, 2162.0], [81.3, 2182.0], [81.4, 2184.0], [81.5, 2194.0], [81.6, 2194.0], [81.7, 2204.0], [81.8, 2286.0], [81.9, 2286.0], [82.0, 2295.0], [82.1, 2301.0], [82.2, 2316.0], [82.3, 2316.0], [82.4, 2322.0], [82.5, 2341.0], [82.6, 2359.0], [82.7, 2359.0], [82.8, 2360.0], [82.9, 2388.0], [83.0, 2391.0], [83.1, 2391.0], [83.2, 2419.0], [83.3, 2428.0], [83.4, 2428.0], [83.5, 2429.0], [83.6, 2442.0], [83.7, 2474.0], [83.8, 2474.0], [83.9, 2484.0], [84.0, 2498.0], [84.1, 2546.0], [84.2, 2546.0], [84.3, 2615.0], [84.4, 2631.0], [84.5, 2656.0], [84.6, 2656.0], [84.7, 2675.0], [84.8, 2675.0], [84.9, 2699.0], [85.0, 2699.0], [85.1, 2702.0], [85.2, 2709.0], [85.3, 2709.0], [85.4, 2733.0], [85.5, 2775.0], [85.6, 2812.0], [85.7, 2812.0], [85.8, 2904.0], [85.9, 2938.0], [86.0, 2995.0], [86.1, 2995.0], [86.2, 3014.0], [86.3, 3093.0], [86.4, 3140.0], [86.5, 3140.0], [86.6, 3143.0], [86.7, 3223.0], [86.8, 3223.0], [86.9, 3337.0], [87.0, 3460.0], [87.1, 3512.0], [87.2, 3512.0], [87.3, 3533.0], [87.4, 3543.0], [87.5, 3587.0], [87.6, 3587.0], [87.7, 3725.0], [87.8, 3757.0], [87.9, 3886.0], [88.0, 3886.0], [88.1, 3896.0], [88.2, 4016.0], [88.3, 4117.0], [88.4, 4117.0], [88.5, 4220.0], [88.6, 4324.0], [88.7, 4324.0], [88.8, 4353.0], [88.9, 4826.0], [89.0, 4869.0], [89.1, 4869.0], [89.2, 4954.0], [89.3, 5383.0], [89.4, 12587.0], [89.5, 12587.0], [89.6, 14388.0], [89.7, 16400.0], [89.8, 19219.0], [89.9, 19219.0], [90.0, 21090.0], [90.1, 24809.0], [90.2, 24809.0], [90.3, 27344.0], [90.4, 32591.0], [90.5, 32775.0], [90.6, 32775.0], [90.7, 44253.0], [90.8, 55147.0], [90.9, 67493.0], [91.0, 67493.0], [91.1, 69935.0], [91.2, 70909.0], [91.3, 71225.0], [91.4, 71225.0], [91.5, 71402.0], [91.6, 73108.0], [91.7, 73108.0], [91.8, 73205.0], [91.9, 73390.0], [92.0, 73623.0], [92.1, 73623.0], [92.2, 73806.0], [92.3, 74008.0], [92.4, 74122.0], [92.5, 74122.0], [92.6, 74329.0], [92.7, 74673.0], [92.8, 75294.0], [92.9, 75294.0], [93.0, 75409.0], [93.1, 75429.0], [93.2, 75532.0], [93.3, 75532.0], [93.4, 75576.0], [93.5, 75605.0], [93.6, 75605.0], [93.7, 75737.0], [93.8, 75863.0], [93.9, 75885.0], [94.0, 75885.0], [94.1, 75946.0], [94.2, 75971.0], [94.3, 76087.0], [94.4, 76087.0], [94.5, 76090.0], [94.6, 76185.0], [94.7, 77033.0], [94.8, 77033.0], [94.9, 77976.0], [95.0, 78994.0], [95.1, 78994.0], [95.2, 80795.0], [95.3, 81053.0], [95.4, 84598.0], [95.5, 84598.0], [95.6, 87250.0], [95.7, 87257.0], [95.8, 87402.0], [95.9, 87402.0], [96.0, 87705.0], [96.1, 88205.0], [96.2, 88918.0], [96.3, 88918.0], [96.4, 89997.0], [96.5, 92306.0], [96.6, 92902.0], [96.7, 92902.0], [96.8, 143335.0], [96.9, 144236.0], [97.0, 144236.0], [97.1, 144528.0], [97.2, 145167.0], [97.3, 146049.0], [97.4, 146049.0], [97.5, 146698.0], [97.6, 146810.0], [97.7, 147020.0], [97.8, 147020.0], [97.9, 148050.0], [98.0, 149057.0], [98.1, 149368.0], [98.2, 149368.0], [98.3, 149852.0], [98.4, 150151.0], [98.5, 150151.0], [98.6, 151204.0], [98.7, 159279.0], [98.8, 162971.0], [98.9, 162971.0], [99.0, 163824.0], [99.1, 173646.0], [99.2, 187600.0], [99.3, 187600.0], [99.4, 218061.0], [99.5, 220370.0], [99.6, 247479.0], [99.7, 247479.0], [99.8, 249135.0], [99.9, 293588.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 83.0, "series": [{"data": [[148000.0, 1.0], [151200.0, 1.0], [159200.0, 1.0], [173600.0, 1.0], [143300.0, 1.0], [73100.0, 1.0], [69900.0, 1.0], [75500.0, 2.0], [74300.0, 1.0], [75900.0, 2.0], [77900.0, 1.0], [80700.0, 1.0], [89900.0, 1.0], [92300.0, 1.0], [144200.0, 1.0], [146600.0, 1.0], [149000.0, 1.0], [149800.0, 1.0], [247400.0, 1.0], [100.0, 3.0], [145100.0, 1.0], [200.0, 24.0], [55100.0, 1.0], [220300.0, 1.0], [249100.0, 1.0], [67400.0, 1.0], [71400.0, 1.0], [75400.0, 2.0], [73800.0, 1.0], [74600.0, 1.0], [300.0, 55.0], [77000.0, 1.0], [75800.0, 2.0], [81000.0, 1.0], [87400.0, 1.0], [88200.0, 1.0], [400.0, 83.0], [500.0, 74.0], [146000.0, 1.0], [146800.0, 1.0], [600.0, 68.0], [700.0, 56.0], [187600.0, 1.0], [800.0, 43.0], [218000.0, 1.0], [900.0, 32.0], [1000.0, 21.0], [1100.0, 24.0], [1200.0, 17.0], [1300.0, 15.0], [1400.0, 11.0], [1500.0, 13.0], [1600.0, 13.0], [1700.0, 12.0], [1800.0, 10.0], [1900.0, 8.0], [2000.0, 8.0], [2100.0, 10.0], [2300.0, 8.0], [2200.0, 3.0], [144500.0, 1.0], [2400.0, 7.0], [150100.0, 1.0], [149300.0, 1.0], [162900.0, 1.0], [2500.0, 1.0], [2600.0, 6.0], [2700.0, 4.0], [2800.0, 1.0], [2900.0, 3.0], [3000.0, 2.0], [3100.0, 2.0], [3300.0, 1.0], [3200.0, 1.0], [3400.0, 1.0], [3500.0, 4.0], [3700.0, 2.0], [3800.0, 2.0], [4000.0, 1.0], [4100.0, 1.0], [4300.0, 2.0], [4200.0, 1.0], [73300.0, 1.0], [70900.0, 1.0], [74100.0, 1.0], [4800.0, 2.0], [75700.0, 1.0], [76100.0, 1.0], [4900.0, 1.0], [78900.0, 1.0], [84500.0, 1.0], [5300.0, 1.0], [87700.0, 1.0], [88900.0, 1.0], [92900.0, 1.0], [147000.0, 1.0], [163800.0, 1.0], [12500.0, 1.0], [14300.0, 1.0], [16400.0, 1.0], [19200.0, 1.0], [21000.0, 1.0], [24800.0, 1.0], [27300.0, 1.0], [32500.0, 1.0], [32700.0, 1.0], [293500.0, 1.0], [44200.0, 1.0], [73200.0, 1.0], [73600.0, 1.0], [71200.0, 1.0], [75600.0, 1.0], [76000.0, 2.0], [74000.0, 1.0], [75200.0, 1.0], [87200.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 293500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 165.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 362.0, "series": [{"data": [[0.0, 165.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 362.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 208.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.416666666666667, "minX": 1.603872E12, "maxY": 10.0, "series": [{"data": [[1.60387248E12, 10.0], [1.60387254E12, 10.0], [1.60387218E12, 10.0], [1.60387284E12, 10.0], [1.6038729E12, 6.416666666666667], [1.6038723E12, 10.0], [1.60387224E12, 10.0], [1.6038726E12, 10.0], [1.60387236E12, 10.0], [1.60387266E12, 10.0], [1.603872E12, 10.0], [1.60387212E12, 10.0], [1.60387278E12, 10.0], [1.60387242E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038729E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 393.0, "minX": 1.0, "maxY": 11656.567493112954, "series": [{"data": [[8.0, 1658.0], [4.0, 878.5], [2.0, 755.0], [1.0, 710.0], [9.0, 412.0], [10.0, 11656.567493112954], [5.0, 393.0], [6.0, 2388.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.941496598639453, 11527.073469387764]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22.433333333333334, "minX": 1.603872E12, "maxY": 716764.6833333333, "series": [{"data": [[1.60387248E12, 9799.766666666666], [1.60387254E12, 15231.0], [1.60387218E12, 25052.4], [1.60387284E12, 716764.6833333333], [1.6038729E12, 21279.616666666665], [1.6038723E12, 1172.1166666666666], [1.60387224E12, 586.4166666666666], [1.6038726E12, 1306.35], [1.60387236E12, 707796.9666666667], [1.60387266E12, 996.1], [1.603872E12, 56635.98333333333], [1.60387212E12, 32086.766666666666], [1.60387278E12, 34719.53333333333], [1.60387242E12, 132300.26666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60387248E12, 38.983333333333334], [1.60387254E12, 62.333333333333336], [1.60387218E12, 88.53333333333333], [1.60387284E12, 2419.633333333333], [1.6038729E12, 86.55], [1.6038723E12, 31.466666666666665], [1.60387224E12, 22.433333333333334], [1.6038726E12, 51.7], [1.60387236E12, 2262.65], [1.60387266E12, 57.61666666666667], [1.603872E12, 109.78333333333333], [1.60387212E12, 78.56666666666666], [1.60387278E12, 146.16666666666666], [1.60387242E12, 238.11666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038729E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 975.0, "minX": 1.603872E12, "maxY": 120666.37499999999, "series": [{"data": [[1.60387248E12, 60031.0], [1.60387254E12, 120666.37499999999], [1.60387218E12, 62020.83333333334], [1.60387284E12, 3390.971061093249], [1.6038729E12, 975.0], [1.6038723E12, 37861.0], [1.60387224E12, 97209.0], [1.6038726E12, 58200.28571428572], [1.60387236E12, 5953.171821305834], [1.60387266E12, 71906.74999999999], [1.603872E12, 1978.4285714285713], [1.60387212E12, 71554.1], [1.60387278E12, 77050.42105263157], [1.60387242E12, 1002.3870967741934]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038729E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 955.1290322580647, "minX": 1.603872E12, "maxY": 120665.25000000001, "series": [{"data": [[1.60387248E12, 60029.6], [1.60387254E12, 120665.25000000001], [1.60387218E12, 62019.50000000001], [1.60387284E12, 3368.784565916402], [1.6038729E12, 974.1666666666666], [1.6038723E12, 37861.0], [1.60387224E12, 97209.0], [1.6038726E12, 58200.14285714286], [1.60387236E12, 5930.381443298964], [1.60387266E12, 71906.5], [1.603872E12, 1942.4285714285716], [1.60387212E12, 71552.5], [1.60387278E12, 77049.52631578947], [1.60387242E12, 955.1290322580647]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038729E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.7499999999999999, "minX": 1.603872E12, "maxY": 8.5, "series": [{"data": [[1.60387248E12, 1.0], [1.60387254E12, 2.125], [1.60387218E12, 2.3333333333333335], [1.60387284E12, 0.8488745980707393], [1.6038729E12, 0.7499999999999999], [1.6038723E12, 1.75], [1.60387224E12, 1.3333333333333333], [1.6038726E12, 3.142857142857143], [1.60387236E12, 1.0481099656357387], [1.60387266E12, 3.4999999999999996], [1.603872E12, 8.5], [1.60387212E12, 1.4], [1.60387278E12, 1.5789473684210524], [1.60387242E12, 0.9677419354838711]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038729E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 194.0, "minX": 1.603872E12, "maxY": 293588.0, "series": [{"data": [[1.60387248E12, 76090.0], [1.60387254E12, 150151.0], [1.60387218E12, 163824.0], [1.60387284E12, 81053.0], [1.6038729E12, 2388.0], [1.6038723E12, 76087.0], [1.60387224E12, 147020.0], [1.6038726E12, 146810.0], [1.60387236E12, 249135.0], [1.60387266E12, 218061.0], [1.603872E12, 4117.0], [1.60387212E12, 92902.0], [1.60387278E12, 293588.0], [1.60387242E12, 3886.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60387248E12, 196.0], [1.60387254E12, 296.0], [1.60387218E12, 227.0], [1.60387284E12, 274.50399903297426], [1.6038729E12, 393.0], [1.6038723E12, 234.0], [1.60387224E12, 71402.0], [1.6038726E12, 317.0], [1.60387236E12, 247.79199902534486], [1.60387266E12, 211.0], [1.603872E12, 198.0], [1.60387212E12, 245.0], [1.60387278E12, 239.0], [1.60387242E12, 194.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60387248E12, 196.0], [1.60387254E12, 296.0], [1.60387218E12, 227.0], [1.60387284E12, 279.04240068435666], [1.6038729E12, 393.0], [1.6038723E12, 234.0], [1.60387224E12, 71402.0], [1.6038726E12, 317.0], [1.60387236E12, 251.47120038986208], [1.60387266E12, 211.0], [1.603872E12, 198.0], [1.60387212E12, 245.0], [1.60387278E12, 239.0], [1.60387242E12, 194.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60387248E12, 196.0], [1.60387254E12, 296.0], [1.60387218E12, 227.0], [1.60387284E12, 276.53199951648713], [1.6038729E12, 393.0], [1.6038723E12, 234.0], [1.60387224E12, 71402.0], [1.6038726E12, 317.0], [1.60387236E12, 249.83599951267243], [1.60387266E12, 211.0], [1.603872E12, 198.0], [1.60387212E12, 245.0], [1.60387278E12, 239.0], [1.60387242E12, 194.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60387248E12, 196.0], [1.60387254E12, 296.0], [1.60387218E12, 227.0], [1.60387284E12, 263.0], [1.6038729E12, 393.0], [1.6038723E12, 234.0], [1.60387224E12, 71402.0], [1.6038726E12, 317.0], [1.60387236E12, 237.0], [1.60387266E12, 211.0], [1.603872E12, 198.0], [1.60387212E12, 245.0], [1.60387278E12, 239.0], [1.60387242E12, 194.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60387248E12, 74329.0], [1.60387254E12, 148553.5], [1.60387218E12, 74607.5], [1.60387284E12, 738.0], [1.6038729E12, 753.5], [1.6038723E12, 37561.5], [1.60387224E12, 73205.0], [1.6038726E12, 44253.0], [1.60387236E12, 790.0], [1.60387266E12, 33878.5], [1.603872E12, 2346.0], [1.60387212E12, 87553.5], [1.60387278E12, 75294.0], [1.60387242E12, 752.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038729E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 495.0, "minX": 1.0, "maxY": 89997.0, "series": [{"data": [[8.0, 920.5], [2.0, 1181.5], [9.0, 866.5], [10.0, 1196.5], [11.0, 642.0], [3.0, 1392.0], [12.0, 641.0], [13.0, 755.0], [14.0, 1214.0], [15.0, 495.0], [1.0, 652.5], [4.0, 1501.5], [17.0, 586.0], [18.0, 737.5], [5.0, 89997.0], [6.0, 849.0], [7.0, 739.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 495.0, "minX": 1.0, "maxY": 89990.0, "series": [{"data": [[8.0, 918.0], [2.0, 1174.5], [9.0, 852.5], [10.0, 1195.0], [11.0, 642.0], [3.0, 1295.5], [12.0, 640.0], [13.0, 754.0], [14.0, 1139.5], [15.0, 495.0], [1.0, 651.0], [4.0, 1496.5], [17.0, 586.0], [18.0, 736.5], [5.0, 89990.0], [6.0, 847.5], [7.0, 738.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.603872E12, "maxY": 5.183333333333334, "series": [{"data": [[1.60387248E12, 0.08333333333333333], [1.60387254E12, 0.13333333333333333], [1.60387218E12, 0.2], [1.60387284E12, 5.183333333333334], [1.6038729E12, 0.03333333333333333], [1.6038723E12, 0.06666666666666667], [1.60387224E12, 0.05], [1.6038726E12, 0.11666666666666667], [1.60387236E12, 4.85], [1.60387266E12, 0.13333333333333333], [1.603872E12, 0.4], [1.60387212E12, 0.16666666666666666], [1.60387278E12, 0.31666666666666665], [1.60387242E12, 0.5166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038729E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.603872E12, "maxY": 5.183333333333334, "series": [{"data": [[1.60387248E12, 0.08333333333333333], [1.60387254E12, 0.13333333333333333], [1.60387218E12, 0.2], [1.60387284E12, 5.183333333333334], [1.6038729E12, 0.2], [1.6038723E12, 0.06666666666666667], [1.60387224E12, 0.05], [1.6038726E12, 0.11666666666666667], [1.60387236E12, 4.85], [1.60387266E12, 0.13333333333333333], [1.603872E12, 0.23333333333333334], [1.60387212E12, 0.16666666666666666], [1.60387278E12, 0.31666666666666665], [1.60387242E12, 0.5166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038729E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.603872E12, "maxY": 5.183333333333334, "series": [{"data": [[1.60387248E12, 0.08333333333333333], [1.60387254E12, 0.13333333333333333], [1.60387218E12, 0.2], [1.60387284E12, 5.183333333333334], [1.6038729E12, 0.2], [1.6038723E12, 0.06666666666666667], [1.60387224E12, 0.05], [1.6038726E12, 0.11666666666666667], [1.60387236E12, 4.85], [1.60387266E12, 0.13333333333333333], [1.603872E12, 0.23333333333333334], [1.60387212E12, 0.16666666666666666], [1.60387278E12, 0.31666666666666665], [1.60387242E12, 0.5166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038729E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.603872E12, "maxY": 5.183333333333334, "series": [{"data": [[1.60387248E12, 0.08333333333333333], [1.60387254E12, 0.13333333333333333], [1.60387218E12, 0.2], [1.60387284E12, 5.183333333333334], [1.6038729E12, 0.2], [1.6038723E12, 0.06666666666666667], [1.60387224E12, 0.05], [1.6038726E12, 0.11666666666666667], [1.60387236E12, 4.85], [1.60387266E12, 0.13333333333333333], [1.603872E12, 0.23333333333333334], [1.60387212E12, 0.16666666666666666], [1.60387278E12, 0.31666666666666665], [1.60387242E12, 0.5166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038729E12, "title": "Total Transactions Per Second"}},
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

