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
        data: {"result": {"minY": 202.0, "minX": 0.0, "maxY": 295553.0, "series": [{"data": [[0.0, 202.0], [0.1, 202.0], [0.2, 202.0], [0.3, 203.0], [0.4, 203.0], [0.5, 213.0], [0.6, 213.0], [0.7, 215.0], [0.8, 215.0], [0.9, 221.0], [1.0, 222.0], [1.1, 223.0], [1.2, 223.0], [1.3, 225.0], [1.4, 226.0], [1.5, 229.0], [1.6, 229.0], [1.7, 231.0], [1.8, 237.0], [1.9, 237.0], [2.0, 240.0], [2.1, 241.0], [2.2, 242.0], [2.3, 242.0], [2.4, 246.0], [2.5, 246.0], [2.6, 249.0], [2.7, 249.0], [2.8, 251.0], [2.9, 252.0], [3.0, 262.0], [3.1, 262.0], [3.2, 262.0], [3.3, 265.0], [3.4, 265.0], [3.5, 271.0], [3.6, 283.0], [3.7, 295.0], [3.8, 295.0], [3.9, 297.0], [4.0, 303.0], [4.1, 310.0], [4.2, 310.0], [4.3, 322.0], [4.4, 322.0], [4.5, 322.0], [4.6, 322.0], [4.7, 323.0], [4.8, 326.0], [4.9, 326.0], [5.0, 326.0], [5.1, 328.0], [5.2, 334.0], [5.3, 334.0], [5.4, 335.0], [5.5, 336.0], [5.6, 336.0], [5.7, 336.0], [5.8, 337.0], [5.9, 337.0], [6.0, 340.0], [6.1, 340.0], [6.2, 343.0], [6.3, 344.0], [6.4, 348.0], [6.5, 348.0], [6.6, 348.0], [6.7, 349.0], [6.8, 349.0], [6.9, 349.0], [7.0, 353.0], [7.1, 356.0], [7.2, 356.0], [7.3, 357.0], [7.4, 357.0], [7.5, 358.0], [7.6, 358.0], [7.7, 359.0], [7.8, 359.0], [7.9, 359.0], [8.0, 359.0], [8.1, 360.0], [8.2, 361.0], [8.3, 361.0], [8.4, 361.0], [8.5, 361.0], [8.6, 362.0], [8.7, 362.0], [8.8, 362.0], [8.9, 362.0], [9.0, 365.0], [9.1, 365.0], [9.2, 366.0], [9.3, 366.0], [9.4, 367.0], [9.5, 367.0], [9.6, 367.0], [9.7, 368.0], [9.8, 368.0], [9.9, 368.0], [10.0, 368.0], [10.1, 368.0], [10.2, 368.0], [10.3, 371.0], [10.4, 374.0], [10.5, 374.0], [10.6, 374.0], [10.7, 375.0], [10.8, 375.0], [10.9, 378.0], [11.0, 378.0], [11.1, 379.0], [11.2, 379.0], [11.3, 381.0], [11.4, 381.0], [11.5, 383.0], [11.6, 383.0], [11.7, 383.0], [11.8, 384.0], [11.9, 387.0], [12.0, 392.0], [12.1, 392.0], [12.2, 395.0], [12.3, 396.0], [12.4, 398.0], [12.5, 398.0], [12.6, 401.0], [12.7, 401.0], [12.8, 403.0], [12.9, 403.0], [13.0, 404.0], [13.1, 406.0], [13.2, 411.0], [13.3, 411.0], [13.4, 413.0], [13.5, 415.0], [13.6, 415.0], [13.7, 415.0], [13.8, 417.0], [13.9, 419.0], [14.0, 419.0], [14.1, 421.0], [14.2, 424.0], [14.3, 424.0], [14.4, 424.0], [14.5, 424.0], [14.6, 425.0], [14.7, 425.0], [14.8, 425.0], [14.9, 426.0], [15.0, 426.0], [15.1, 426.0], [15.2, 428.0], [15.3, 431.0], [15.4, 431.0], [15.5, 431.0], [15.6, 432.0], [15.7, 433.0], [15.8, 435.0], [15.9, 435.0], [16.0, 435.0], [16.1, 438.0], [16.2, 441.0], [16.3, 441.0], [16.4, 441.0], [16.5, 442.0], [16.6, 442.0], [16.7, 442.0], [16.8, 442.0], [16.9, 443.0], [17.0, 443.0], [17.1, 444.0], [17.2, 445.0], [17.3, 445.0], [17.4, 445.0], [17.5, 446.0], [17.6, 446.0], [17.7, 446.0], [17.8, 446.0], [17.9, 447.0], [18.0, 448.0], [18.1, 448.0], [18.2, 448.0], [18.3, 448.0], [18.4, 449.0], [18.5, 449.0], [18.6, 449.0], [18.7, 450.0], [18.8, 452.0], [18.9, 452.0], [19.0, 452.0], [19.1, 453.0], [19.2, 455.0], [19.3, 455.0], [19.4, 455.0], [19.5, 458.0], [19.6, 458.0], [19.7, 458.0], [19.8, 459.0], [19.9, 459.0], [20.0, 462.0], [20.1, 462.0], [20.2, 463.0], [20.3, 464.0], [20.4, 464.0], [20.5, 465.0], [20.6, 468.0], [20.7, 468.0], [20.8, 468.0], [20.9, 468.0], [21.0, 468.0], [21.1, 469.0], [21.2, 469.0], [21.3, 469.0], [21.4, 471.0], [21.5, 472.0], [21.6, 472.0], [21.7, 472.0], [21.8, 472.0], [21.9, 472.0], [22.0, 473.0], [22.1, 473.0], [22.2, 474.0], [22.3, 474.0], [22.4, 475.0], [22.5, 475.0], [22.6, 476.0], [22.7, 476.0], [22.8, 477.0], [22.9, 479.0], [23.0, 479.0], [23.1, 479.0], [23.2, 479.0], [23.3, 479.0], [23.4, 479.0], [23.5, 480.0], [23.6, 481.0], [23.7, 482.0], [23.8, 482.0], [23.9, 483.0], [24.0, 486.0], [24.1, 487.0], [24.2, 487.0], [24.3, 488.0], [24.4, 490.0], [24.5, 491.0], [24.6, 491.0], [24.7, 492.0], [24.8, 493.0], [24.9, 494.0], [25.0, 494.0], [25.1, 497.0], [25.2, 499.0], [25.3, 499.0], [25.4, 499.0], [25.5, 500.0], [25.6, 501.0], [25.7, 501.0], [25.8, 501.0], [25.9, 501.0], [26.0, 503.0], [26.1, 503.0], [26.2, 506.0], [26.3, 506.0], [26.4, 507.0], [26.5, 507.0], [26.6, 508.0], [26.7, 509.0], [26.8, 509.0], [26.9, 512.0], [27.0, 513.0], [27.1, 514.0], [27.2, 514.0], [27.3, 515.0], [27.4, 515.0], [27.5, 516.0], [27.6, 516.0], [27.7, 518.0], [27.8, 520.0], [27.9, 528.0], [28.0, 528.0], [28.1, 529.0], [28.2, 530.0], [28.3, 530.0], [28.4, 530.0], [28.5, 531.0], [28.6, 531.0], [28.7, 531.0], [28.8, 531.0], [28.9, 534.0], [29.0, 536.0], [29.1, 536.0], [29.2, 539.0], [29.3, 541.0], [29.4, 544.0], [29.5, 544.0], [29.6, 544.0], [29.7, 545.0], [29.8, 549.0], [29.9, 549.0], [30.0, 550.0], [30.1, 550.0], [30.2, 550.0], [30.3, 555.0], [30.4, 555.0], [30.5, 557.0], [30.6, 557.0], [30.7, 561.0], [30.8, 562.0], [30.9, 563.0], [31.0, 563.0], [31.1, 563.0], [31.2, 563.0], [31.3, 565.0], [31.4, 565.0], [31.5, 566.0], [31.6, 568.0], [31.7, 568.0], [31.8, 568.0], [31.9, 577.0], [32.0, 577.0], [32.1, 577.0], [32.2, 578.0], [32.3, 579.0], [32.4, 580.0], [32.5, 580.0], [32.6, 581.0], [32.7, 584.0], [32.8, 586.0], [32.9, 586.0], [33.0, 589.0], [33.1, 589.0], [33.2, 591.0], [33.3, 591.0], [33.4, 591.0], [33.5, 592.0], [33.6, 592.0], [33.7, 594.0], [33.8, 594.0], [33.9, 597.0], [34.0, 597.0], [34.1, 597.0], [34.2, 601.0], [34.3, 602.0], [34.4, 602.0], [34.5, 602.0], [34.6, 603.0], [34.7, 605.0], [34.8, 605.0], [34.9, 607.0], [35.0, 613.0], [35.1, 613.0], [35.2, 620.0], [35.3, 620.0], [35.4, 621.0], [35.5, 621.0], [35.6, 621.0], [35.7, 628.0], [35.8, 632.0], [35.9, 632.0], [36.0, 633.0], [36.1, 633.0], [36.2, 635.0], [36.3, 635.0], [36.4, 635.0], [36.5, 637.0], [36.6, 637.0], [36.7, 637.0], [36.8, 639.0], [36.9, 645.0], [37.0, 645.0], [37.1, 647.0], [37.2, 648.0], [37.3, 653.0], [37.4, 653.0], [37.5, 654.0], [37.6, 656.0], [37.7, 657.0], [37.8, 657.0], [37.9, 659.0], [38.0, 661.0], [38.1, 661.0], [38.2, 661.0], [38.3, 662.0], [38.4, 662.0], [38.5, 662.0], [38.6, 663.0], [38.7, 663.0], [38.8, 671.0], [38.9, 671.0], [39.0, 673.0], [39.1, 673.0], [39.2, 674.0], [39.3, 674.0], [39.4, 674.0], [39.5, 675.0], [39.6, 678.0], [39.7, 678.0], [39.8, 679.0], [39.9, 680.0], [40.0, 680.0], [40.1, 680.0], [40.2, 680.0], [40.3, 680.0], [40.4, 680.0], [40.5, 681.0], [40.6, 685.0], [40.7, 688.0], [40.8, 688.0], [40.9, 690.0], [41.0, 690.0], [41.1, 691.0], [41.2, 691.0], [41.3, 692.0], [41.4, 697.0], [41.5, 699.0], [41.6, 699.0], [41.7, 701.0], [41.8, 703.0], [41.9, 703.0], [42.0, 704.0], [42.1, 709.0], [42.2, 711.0], [42.3, 711.0], [42.4, 713.0], [42.5, 714.0], [42.6, 717.0], [42.7, 717.0], [42.8, 718.0], [42.9, 718.0], [43.0, 719.0], [43.1, 719.0], [43.2, 722.0], [43.3, 724.0], [43.4, 724.0], [43.5, 731.0], [43.6, 733.0], [43.7, 734.0], [43.8, 734.0], [43.9, 737.0], [44.0, 739.0], [44.1, 740.0], [44.2, 740.0], [44.3, 740.0], [44.4, 740.0], [44.5, 740.0], [44.6, 740.0], [44.7, 742.0], [44.8, 743.0], [44.9, 743.0], [45.0, 743.0], [45.1, 746.0], [45.2, 748.0], [45.3, 748.0], [45.4, 748.0], [45.5, 750.0], [45.6, 750.0], [45.7, 750.0], [45.8, 750.0], [45.9, 752.0], [46.0, 757.0], [46.1, 757.0], [46.2, 758.0], [46.3, 758.0], [46.4, 759.0], [46.5, 759.0], [46.6, 761.0], [46.7, 762.0], [46.8, 762.0], [46.9, 763.0], [47.0, 764.0], [47.1, 765.0], [47.2, 765.0], [47.3, 766.0], [47.4, 766.0], [47.5, 771.0], [47.6, 771.0], [47.7, 773.0], [47.8, 776.0], [47.9, 781.0], [48.0, 781.0], [48.1, 783.0], [48.2, 789.0], [48.3, 792.0], [48.4, 792.0], [48.5, 797.0], [48.6, 798.0], [48.7, 798.0], [48.8, 801.0], [48.9, 802.0], [49.0, 805.0], [49.1, 805.0], [49.2, 805.0], [49.3, 806.0], [49.4, 810.0], [49.5, 810.0], [49.6, 811.0], [49.7, 816.0], [49.8, 818.0], [49.9, 818.0], [50.0, 821.0], [50.1, 822.0], [50.2, 822.0], [50.3, 823.0], [50.4, 823.0], [50.5, 826.0], [50.6, 826.0], [50.7, 828.0], [50.8, 828.0], [50.9, 835.0], [51.0, 835.0], [51.1, 842.0], [51.2, 844.0], [51.3, 845.0], [51.4, 845.0], [51.5, 846.0], [51.6, 848.0], [51.7, 848.0], [51.8, 851.0], [51.9, 853.0], [52.0, 858.0], [52.1, 858.0], [52.2, 861.0], [52.3, 863.0], [52.4, 867.0], [52.5, 867.0], [52.6, 872.0], [52.7, 880.0], [52.8, 881.0], [52.9, 881.0], [53.0, 883.0], [53.1, 884.0], [53.2, 885.0], [53.3, 885.0], [53.4, 888.0], [53.5, 888.0], [53.6, 888.0], [53.7, 897.0], [53.8, 898.0], [53.9, 900.0], [54.0, 900.0], [54.1, 903.0], [54.2, 908.0], [54.3, 911.0], [54.4, 911.0], [54.5, 911.0], [54.6, 914.0], [54.7, 916.0], [54.8, 916.0], [54.9, 918.0], [55.0, 919.0], [55.1, 919.0], [55.2, 919.0], [55.3, 920.0], [55.4, 923.0], [55.5, 923.0], [55.6, 925.0], [55.7, 925.0], [55.8, 925.0], [55.9, 925.0], [56.0, 929.0], [56.1, 930.0], [56.2, 930.0], [56.3, 930.0], [56.4, 932.0], [56.5, 941.0], [56.6, 943.0], [56.7, 943.0], [56.8, 952.0], [56.9, 963.0], [57.0, 963.0], [57.1, 966.0], [57.2, 969.0], [57.3, 970.0], [57.4, 970.0], [57.5, 972.0], [57.6, 973.0], [57.7, 975.0], [57.8, 975.0], [57.9, 983.0], [58.0, 990.0], [58.1, 999.0], [58.2, 999.0], [58.3, 1001.0], [58.4, 1005.0], [58.5, 1005.0], [58.6, 1006.0], [58.7, 1015.0], [58.8, 1020.0], [58.9, 1020.0], [59.0, 1026.0], [59.1, 1027.0], [59.2, 1031.0], [59.3, 1031.0], [59.4, 1033.0], [59.5, 1035.0], [59.6, 1038.0], [59.7, 1038.0], [59.8, 1044.0], [59.9, 1044.0], [60.0, 1048.0], [60.1, 1048.0], [60.2, 1060.0], [60.3, 1060.0], [60.4, 1060.0], [60.5, 1063.0], [60.6, 1065.0], [60.7, 1066.0], [60.8, 1066.0], [60.9, 1077.0], [61.0, 1090.0], [61.1, 1093.0], [61.2, 1093.0], [61.3, 1098.0], [61.4, 1110.0], [61.5, 1112.0], [61.6, 1112.0], [61.7, 1113.0], [61.8, 1115.0], [61.9, 1115.0], [62.0, 1119.0], [62.1, 1132.0], [62.2, 1134.0], [62.3, 1134.0], [62.4, 1136.0], [62.5, 1138.0], [62.6, 1139.0], [62.7, 1139.0], [62.8, 1149.0], [62.9, 1150.0], [63.0, 1151.0], [63.1, 1151.0], [63.2, 1153.0], [63.3, 1155.0], [63.4, 1155.0], [63.5, 1158.0], [63.6, 1161.0], [63.7, 1164.0], [63.8, 1164.0], [63.9, 1168.0], [64.0, 1174.0], [64.1, 1175.0], [64.2, 1175.0], [64.3, 1181.0], [64.4, 1182.0], [64.5, 1184.0], [64.6, 1184.0], [64.7, 1190.0], [64.8, 1198.0], [64.9, 1201.0], [65.0, 1201.0], [65.1, 1204.0], [65.2, 1208.0], [65.3, 1208.0], [65.4, 1211.0], [65.5, 1212.0], [65.6, 1216.0], [65.7, 1216.0], [65.8, 1223.0], [65.9, 1229.0], [66.0, 1230.0], [66.1, 1230.0], [66.2, 1231.0], [66.3, 1231.0], [66.4, 1237.0], [66.5, 1237.0], [66.6, 1239.0], [66.7, 1240.0], [66.8, 1240.0], [66.9, 1241.0], [67.0, 1243.0], [67.1, 1246.0], [67.2, 1246.0], [67.3, 1248.0], [67.4, 1251.0], [67.5, 1257.0], [67.6, 1257.0], [67.7, 1264.0], [67.8, 1265.0], [67.9, 1267.0], [68.0, 1267.0], [68.1, 1268.0], [68.2, 1273.0], [68.3, 1275.0], [68.4, 1275.0], [68.5, 1310.0], [68.6, 1314.0], [68.7, 1314.0], [68.8, 1320.0], [68.9, 1333.0], [69.0, 1341.0], [69.1, 1341.0], [69.2, 1348.0], [69.3, 1349.0], [69.4, 1354.0], [69.5, 1354.0], [69.6, 1364.0], [69.7, 1366.0], [69.8, 1373.0], [69.9, 1373.0], [70.0, 1374.0], [70.1, 1384.0], [70.2, 1384.0], [70.3, 1398.0], [70.4, 1410.0], [70.5, 1412.0], [70.6, 1412.0], [70.7, 1413.0], [70.8, 1416.0], [70.9, 1422.0], [71.0, 1422.0], [71.1, 1430.0], [71.2, 1431.0], [71.3, 1433.0], [71.4, 1433.0], [71.5, 1443.0], [71.6, 1443.0], [71.7, 1443.0], [71.8, 1448.0], [71.9, 1452.0], [72.0, 1455.0], [72.1, 1455.0], [72.2, 1465.0], [72.3, 1467.0], [72.4, 1483.0], [72.5, 1483.0], [72.6, 1501.0], [72.7, 1503.0], [72.8, 1503.0], [72.9, 1503.0], [73.0, 1514.0], [73.1, 1531.0], [73.2, 1553.0], [73.3, 1553.0], [73.4, 1555.0], [73.5, 1557.0], [73.6, 1557.0], [73.7, 1569.0], [73.8, 1572.0], [73.9, 1573.0], [74.0, 1573.0], [74.1, 1576.0], [74.2, 1587.0], [74.3, 1593.0], [74.4, 1593.0], [74.5, 1625.0], [74.6, 1641.0], [74.7, 1646.0], [74.8, 1646.0], [74.9, 1656.0], [75.0, 1658.0], [75.1, 1658.0], [75.2, 1666.0], [75.3, 1684.0], [75.4, 1684.0], [75.5, 1684.0], [75.6, 1695.0], [75.7, 1718.0], [75.8, 1736.0], [75.9, 1736.0], [76.0, 1741.0], [76.1, 1744.0], [76.2, 1754.0], [76.3, 1754.0], [76.4, 1769.0], [76.5, 1785.0], [76.6, 1787.0], [76.7, 1787.0], [76.8, 1798.0], [76.9, 1798.0], [77.0, 1798.0], [77.1, 1818.0], [77.2, 1826.0], [77.3, 1829.0], [77.4, 1829.0], [77.5, 1838.0], [77.6, 1845.0], [77.7, 1854.0], [77.8, 1854.0], [77.9, 1854.0], [78.0, 1859.0], [78.1, 1863.0], [78.2, 1863.0], [78.3, 1891.0], [78.4, 1899.0], [78.5, 1899.0], [78.6, 1901.0], [78.7, 1906.0], [78.8, 1915.0], [78.9, 1915.0], [79.0, 1920.0], [79.1, 1923.0], [79.2, 1928.0], [79.3, 1928.0], [79.4, 1932.0], [79.5, 1942.0], [79.6, 1952.0], [79.7, 1952.0], [79.8, 1981.0], [79.9, 1986.0], [80.0, 1989.0], [80.1, 1989.0], [80.2, 1998.0], [80.3, 2005.0], [80.4, 2005.0], [80.5, 2028.0], [80.6, 2034.0], [80.7, 2037.0], [80.8, 2037.0], [80.9, 2049.0], [81.0, 2056.0], [81.1, 2060.0], [81.2, 2060.0], [81.3, 2081.0], [81.4, 2100.0], [81.5, 2105.0], [81.6, 2105.0], [81.7, 2126.0], [81.8, 2135.0], [81.9, 2135.0], [82.0, 2140.0], [82.1, 2145.0], [82.2, 2164.0], [82.3, 2164.0], [82.4, 2169.0], [82.5, 2176.0], [82.6, 2180.0], [82.7, 2180.0], [82.8, 2181.0], [82.9, 2182.0], [83.0, 2186.0], [83.1, 2186.0], [83.2, 2188.0], [83.3, 2191.0], [83.4, 2191.0], [83.5, 2193.0], [83.6, 2195.0], [83.7, 2204.0], [83.8, 2204.0], [83.9, 2212.0], [84.0, 2224.0], [84.1, 2265.0], [84.2, 2265.0], [84.3, 2294.0], [84.4, 2294.0], [84.5, 2306.0], [84.6, 2306.0], [84.7, 2325.0], [84.8, 2336.0], [84.9, 2352.0], [85.0, 2352.0], [85.1, 2406.0], [85.2, 2423.0], [85.3, 2423.0], [85.4, 2433.0], [85.5, 2441.0], [85.6, 2456.0], [85.7, 2456.0], [85.8, 2535.0], [85.9, 2571.0], [86.0, 2687.0], [86.1, 2687.0], [86.2, 2706.0], [86.3, 2706.0], [86.4, 2725.0], [86.5, 2725.0], [86.6, 2731.0], [86.7, 2736.0], [86.8, 2736.0], [86.9, 2770.0], [87.0, 2783.0], [87.1, 2817.0], [87.2, 2817.0], [87.3, 2927.0], [87.4, 2953.0], [87.5, 3076.0], [87.6, 3076.0], [87.7, 3163.0], [87.8, 3180.0], [87.9, 3218.0], [88.0, 3218.0], [88.1, 3303.0], [88.2, 3358.0], [88.3, 3406.0], [88.4, 3406.0], [88.5, 3495.0], [88.6, 3564.0], [88.7, 3564.0], [88.8, 3617.0], [88.9, 3726.0], [89.0, 3897.0], [89.1, 3897.0], [89.2, 4012.0], [89.3, 4184.0], [89.4, 4302.0], [89.5, 4302.0], [89.6, 4449.0], [89.7, 4900.0], [89.8, 7446.0], [89.9, 7446.0], [90.0, 8646.0], [90.1, 9288.0], [90.2, 9288.0], [90.3, 30538.0], [90.4, 40225.0], [90.5, 43681.0], [90.6, 43681.0], [90.7, 44860.0], [90.8, 45140.0], [90.9, 46420.0], [91.0, 46420.0], [91.1, 48031.0], [91.2, 55626.0], [91.3, 66130.0], [91.4, 66130.0], [91.5, 66898.0], [91.6, 68293.0], [91.7, 68293.0], [91.8, 69118.0], [91.9, 71695.0], [92.0, 71972.0], [92.1, 71972.0], [92.2, 72110.0], [92.3, 72172.0], [92.4, 72232.0], [92.5, 72232.0], [92.6, 72335.0], [92.7, 72364.0], [92.8, 72458.0], [92.9, 72458.0], [93.0, 72591.0], [93.1, 72754.0], [93.2, 72833.0], [93.3, 72833.0], [93.4, 72978.0], [93.5, 73091.0], [93.6, 73091.0], [93.7, 73199.0], [93.8, 73273.0], [93.9, 73341.0], [94.0, 73341.0], [94.1, 73594.0], [94.2, 74099.0], [94.3, 74850.0], [94.4, 74850.0], [94.5, 74908.0], [94.6, 75661.0], [94.7, 79199.0], [94.8, 79199.0], [94.9, 81831.0], [95.0, 83353.0], [95.1, 83353.0], [95.2, 84618.0], [95.3, 84874.0], [95.4, 84886.0], [95.5, 84886.0], [95.6, 85421.0], [95.7, 85458.0], [95.8, 85968.0], [95.9, 85968.0], [96.0, 89065.0], [96.1, 89938.0], [96.2, 91975.0], [96.3, 91975.0], [96.4, 92608.0], [96.5, 103616.0], [96.6, 103637.0], [96.7, 103637.0], [96.8, 116550.0], [96.9, 141964.0], [97.0, 141964.0], [97.1, 142566.0], [97.2, 143728.0], [97.3, 143935.0], [97.4, 143935.0], [97.5, 144283.0], [97.6, 144871.0], [97.7, 144910.0], [97.8, 144910.0], [97.9, 145284.0], [98.0, 145593.0], [98.1, 145696.0], [98.2, 145696.0], [98.3, 163651.0], [98.4, 168315.0], [98.5, 168315.0], [98.6, 191669.0], [98.7, 202844.0], [98.8, 212695.0], [98.9, 212695.0], [99.0, 215397.0], [99.1, 222340.0], [99.2, 240539.0], [99.3, 240539.0], [99.4, 242374.0], [99.5, 284888.0], [99.6, 288839.0], [99.7, 288839.0], [99.8, 295337.0], [99.9, 295553.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 95.0, "series": [{"data": [[145600.0, 1.0], [144800.0, 1.0], [295300.0, 1.0], [284800.0, 1.0], [144900.0, 1.0], [142500.0, 1.0], [295500.0, 1.0], [215300.0, 1.0], [69100.0, 1.0], [71900.0, 1.0], [72700.0, 1.0], [73500.0, 1.0], [72300.0, 2.0], [73100.0, 1.0], [79100.0, 1.0], [85900.0, 1.0], [89900.0, 1.0], [91900.0, 1.0], [144200.0, 1.0], [141900.0, 1.0], [168300.0, 1.0], [45100.0, 1.0], [200.0, 29.0], [68200.0, 1.0], [72200.0, 1.0], [73000.0, 1.0], [300.0, 63.0], [81800.0, 1.0], [84600.0, 1.0], [85400.0, 2.0], [89000.0, 1.0], [92600.0, 1.0], [400.0, 95.0], [500.0, 64.0], [145200.0, 1.0], [600.0, 55.0], [163600.0, 1.0], [700.0, 52.0], [191600.0, 1.0], [202800.0, 1.0], [800.0, 38.0], [900.0, 32.0], [1000.0, 23.0], [1100.0, 26.0], [288800.0, 1.0], [1200.0, 26.0], [1300.0, 14.0], [1400.0, 16.0], [1500.0, 14.0], [1600.0, 9.0], [1700.0, 10.0], [1800.0, 11.0], [1900.0, 13.0], [2000.0, 8.0], [2100.0, 17.0], [2300.0, 4.0], [2200.0, 6.0], [143700.0, 1.0], [2400.0, 5.0], [2500.0, 2.0], [2600.0, 1.0], [2700.0, 7.0], [2800.0, 1.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 2.0], [3300.0, 2.0], [3200.0, 1.0], [3400.0, 2.0], [3500.0, 1.0], [3600.0, 1.0], [3700.0, 1.0], [240500.0, 1.0], [3800.0, 1.0], [4000.0, 1.0], [4100.0, 1.0], [4300.0, 1.0], [66100.0, 1.0], [4400.0, 1.0], [73300.0, 1.0], [72500.0, 1.0], [72900.0, 1.0], [72100.0, 2.0], [74900.0, 1.0], [4900.0, 1.0], [83300.0, 1.0], [7400.0, 1.0], [116500.0, 1.0], [8600.0, 1.0], [9200.0, 1.0], [212600.0, 1.0], [30500.0, 1.0], [145500.0, 1.0], [143900.0, 1.0], [40200.0, 1.0], [43600.0, 1.0], [44800.0, 1.0], [46400.0, 1.0], [48000.0, 1.0], [55600.0, 1.0], [222300.0, 1.0], [242300.0, 1.0], [66800.0, 1.0], [71600.0, 1.0], [72400.0, 1.0], [72800.0, 1.0], [73200.0, 1.0], [75600.0, 1.0], [74000.0, 1.0], [74800.0, 1.0], [84800.0, 2.0], [103600.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 295500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 188.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 345.0, "series": [{"data": [[0.0, 188.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 345.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 202.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.865814696485625, "minX": 1.6023882E12, "maxY": 10.0, "series": [{"data": [[1.60238826E12, 10.0], [1.60238856E12, 10.0], [1.60238862E12, 10.0], [1.60238892E12, 10.0], [1.6023885E12, 10.0], [1.6023888E12, 10.0], [1.60238886E12, 10.0], [1.6023882E12, 10.0], [1.60238904E12, 10.0], [1.6023891E12, 9.865814696485625], [1.60238898E12, 10.0], [1.60238832E12, 10.0], [1.60238838E12, 10.0], [1.60238868E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023891E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 348.0, "minX": 1.0, "maxY": 12016.291208791197, "series": [{"data": [[4.0, 1031.0], [2.0, 605.0], [1.0, 757.0], [10.0, 12016.291208791197], [5.0, 2535.0], [6.0, 348.0], [3.0, 674.0], [7.0, 444.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.942857142857143, 11910.549659863933]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15.6, "minX": 1.6023882E12, "maxY": 701851.2666666667, "series": [{"data": [[1.60238826E12, 26308.95], [1.60238856E12, 139657.01666666666], [1.60238862E12, 701851.2666666667], [1.60238892E12, 377.5833333333333], [1.6023885E12, 690.9666666666667], [1.6023888E12, 23300.2], [1.60238886E12, 1908.8166666666666], [1.6023882E12, 20789.7], [1.60238904E12, 34308.05], [1.6023891E12, 700671.8666666667], [1.60238898E12, 37439.816666666666], [1.60238832E12, 65498.166666666664], [1.60238838E12, 1210.4166666666667], [1.60238868E12, 1727.4166666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60238826E12, 55.18333333333333], [1.60238856E12, 269.6666666666667], [1.60238862E12, 2270.3333333333335], [1.60238892E12, 21.5], [1.6023885E12, 15.6], [1.6023888E12, 69.13333333333334], [1.60238886E12, 81.01666666666667], [1.6023882E12, 54.6], [1.60238904E12, 95.36666666666666], [1.6023891E12, 2425.116666666667], [1.60238898E12, 124.06666666666666], [1.60238832E12, 101.73333333333333], [1.60238838E12, 72.23333333333333], [1.60238868E12, 38.983333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023891E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1699.5714285714287, "minX": 1.6023882E12, "maxY": 112344.11111111111, "series": [{"data": [[1.60238826E12, 1699.5714285714287], [1.60238856E12, 29058.588235294115], [1.60238862E12, 5290.576791808871], [1.60238892E12, 40255.66666666667], [1.6023885E12, 73342.5], [1.6023888E12, 112344.11111111111], [1.60238886E12, 67748.72727272726], [1.6023882E12, 1841.0], [1.60238904E12, 18241.666666666668], [1.6023891E12, 5066.271565495198], [1.60238898E12, 45532.0], [1.60238832E12, 67451.99999999999], [1.60238838E12, 46721.49999999999], [1.60238868E12, 58061.6]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023891E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1698.142857142857, "minX": 1.6023882E12, "maxY": 112304.55555555556, "series": [{"data": [[1.60238826E12, 1698.142857142857], [1.60238856E12, 29056.882352941167], [1.60238862E12, 5265.163822525606], [1.60238892E12, 40255.33333333333], [1.6023885E12, 73341.5], [1.6023888E12, 112304.55555555556], [1.60238886E12, 67748.36363636363], [1.6023882E12, 1839.857142857143], [1.60238904E12, 18240.333333333336], [1.6023891E12, 5043.9552715654945], [1.60238898E12, 45530.68750000001], [1.60238832E12, 67434.0], [1.60238838E12, 46721.2], [1.60238868E12, 58061.4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023891E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.7777777777777778, "minX": 1.6023882E12, "maxY": 6.428571428571428, "series": [{"data": [[1.60238826E12, 1.2857142857142856], [1.60238856E12, 1.0882352941176472], [1.60238862E12, 0.9419795221843003], [1.60238892E12, 1.6666666666666667], [1.6023885E12, 1.5], [1.6023888E12, 0.7777777777777778], [1.60238886E12, 0.9999999999999999], [1.6023882E12, 6.428571428571428], [1.60238904E12, 1.0833333333333337], [1.6023891E12, 0.8977635782747608], [1.60238898E12, 0.9375], [1.60238832E12, 4.076923076923077], [1.60238838E12, 1.2000000000000002], [1.60238868E12, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023891E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 202.0, "minX": 1.6023882E12, "maxY": 295553.0, "series": [{"data": [[1.60238826E12, 3564.0], [1.60238856E12, 242374.0], [1.60238862E12, 288839.0], [1.60238892E12, 75661.0], [1.6023885E12, 73594.0], [1.6023888E12, 145696.0], [1.60238886E12, 144283.0], [1.6023882E12, 2783.0], [1.60238904E12, 74850.0], [1.6023891E12, 295553.0], [1.60238898E12, 215397.0], [1.60238832E12, 92608.0], [1.60238838E12, 85968.0], [1.60238868E12, 72978.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60238826E12, 323.0], [1.60238856E12, 241.0], [1.60238862E12, 222.64599992990495], [1.60238892E12, 246.0], [1.6023885E12, 73091.0], [1.6023888E12, 202.0], [1.60238886E12, 226.0], [1.6023882E12, 213.0], [1.60238904E12, 337.0], [1.6023891E12, 292.9119991016388], [1.60238898E12, 202.0], [1.60238832E12, 225.0], [1.60238838E12, 213.0], [1.60238868E12, 203.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60238826E12, 323.0], [1.60238856E12, 241.0], [1.60238862E12, 222.91060002803803], [1.60238892E12, 246.0], [1.6023885E12, 73091.0], [1.6023888E12, 202.0], [1.60238886E12, 226.0], [1.6023882E12, 213.0], [1.60238904E12, 337.0], [1.6023891E12, 296.6290004491806], [1.60238898E12, 202.0], [1.60238832E12, 225.0], [1.60238838E12, 213.0], [1.60238868E12, 203.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60238826E12, 323.0], [1.60238856E12, 241.0], [1.60238862E12, 222.79299996495246], [1.60238892E12, 246.0], [1.6023885E12, 73091.0], [1.6023888E12, 202.0], [1.60238886E12, 226.0], [1.6023882E12, 213.0], [1.60238904E12, 337.0], [1.6023891E12, 294.7959995508194], [1.60238898E12, 202.0], [1.60238832E12, 225.0], [1.60238838E12, 213.0], [1.60238868E12, 203.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60238826E12, 323.0], [1.60238856E12, 241.0], [1.60238862E12, 221.0], [1.60238892E12, 246.0], [1.6023885E12, 73091.0], [1.6023888E12, 202.0], [1.60238886E12, 226.0], [1.6023882E12, 213.0], [1.60238904E12, 337.0], [1.6023891E12, 262.0], [1.60238898E12, 202.0], [1.60238832E12, 225.0], [1.60238838E12, 213.0], [1.60238868E12, 203.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60238826E12, 1033.0], [1.60238856E12, 682.5], [1.60238862E12, 798.0], [1.60238892E12, 44860.0], [1.6023885E12, 73342.5], [1.6023888E12, 144871.0], [1.60238886E12, 72833.0], [1.6023882E12, 2352.0], [1.60238904E12, 521.5], [1.6023891E12, 752.0], [1.60238898E12, 1248.0], [1.60238832E12, 84886.0], [1.60238838E12, 70132.5], [1.60238868E12, 72364.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023891E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 343.0, "minX": 1.0, "maxY": 15838.5, "series": [{"data": [[2.0, 550.5], [8.0, 1015.5], [9.0, 895.5], [10.0, 937.5], [11.0, 792.0], [3.0, 1437.0], [12.0, 1099.5], [13.0, 717.0], [14.0, 736.0], [15.0, 591.0], [1.0, 914.0], [4.0, 15838.5], [16.0, 557.5], [17.0, 562.0], [19.0, 343.0], [5.0, 1443.0], [6.0, 1270.5], [7.0, 918.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 343.0, "minX": 1.0, "maxY": 15833.0, "series": [{"data": [[2.0, 550.0], [8.0, 1014.0], [9.0, 870.5], [10.0, 936.5], [11.0, 791.0], [3.0, 1435.5], [12.0, 1099.0], [13.0, 715.0], [14.0, 736.0], [15.0, 591.0], [1.0, 913.0], [4.0, 15833.0], [16.0, 556.5], [17.0, 562.0], [19.0, 343.0], [5.0, 1275.0], [6.0, 1267.0], [7.0, 915.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6023882E12, "maxY": 5.05, "series": [{"data": [[1.60238826E12, 0.11666666666666667], [1.60238856E12, 0.5666666666666667], [1.60238862E12, 4.883333333333334], [1.60238892E12, 0.05], [1.6023885E12, 0.03333333333333333], [1.6023888E12, 0.15], [1.60238886E12, 0.18333333333333332], [1.6023882E12, 0.2833333333333333], [1.60238904E12, 0.2], [1.6023891E12, 5.05], [1.60238898E12, 0.26666666666666666], [1.60238832E12, 0.21666666666666667], [1.60238838E12, 0.16666666666666666], [1.60238868E12, 0.08333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023891E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6023882E12, "maxY": 5.216666666666667, "series": [{"data": [[1.60238826E12, 0.11666666666666667], [1.60238856E12, 0.5666666666666667], [1.60238862E12, 4.883333333333334], [1.60238892E12, 0.05], [1.6023885E12, 0.03333333333333333], [1.6023888E12, 0.15], [1.60238886E12, 0.18333333333333332], [1.6023882E12, 0.11666666666666667], [1.60238904E12, 0.2], [1.6023891E12, 5.216666666666667], [1.60238898E12, 0.26666666666666666], [1.60238832E12, 0.21666666666666667], [1.60238838E12, 0.16666666666666666], [1.60238868E12, 0.08333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023891E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6023882E12, "maxY": 5.216666666666667, "series": [{"data": [[1.60238826E12, 0.11666666666666667], [1.60238856E12, 0.5666666666666667], [1.60238862E12, 4.883333333333334], [1.60238892E12, 0.05], [1.6023885E12, 0.03333333333333333], [1.6023888E12, 0.15], [1.60238886E12, 0.18333333333333332], [1.6023882E12, 0.11666666666666667], [1.60238904E12, 0.2], [1.6023891E12, 5.216666666666667], [1.60238898E12, 0.26666666666666666], [1.60238832E12, 0.21666666666666667], [1.60238838E12, 0.16666666666666666], [1.60238868E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023891E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6023882E12, "maxY": 5.216666666666667, "series": [{"data": [[1.60238826E12, 0.11666666666666667], [1.60238856E12, 0.5666666666666667], [1.60238862E12, 4.883333333333334], [1.60238892E12, 0.05], [1.6023885E12, 0.03333333333333333], [1.6023888E12, 0.15], [1.60238886E12, 0.18333333333333332], [1.6023882E12, 0.11666666666666667], [1.60238904E12, 0.2], [1.6023891E12, 5.216666666666667], [1.60238898E12, 0.26666666666666666], [1.60238832E12, 0.21666666666666667], [1.60238838E12, 0.16666666666666666], [1.60238868E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023891E12, "title": "Total Transactions Per Second"}},
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

