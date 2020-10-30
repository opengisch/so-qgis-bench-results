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
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 247000.0, "series": [{"data": [[0.0, 9.0], [0.1, 9.0], [0.2, 12.0], [0.3, 12.0], [0.4, 12.0], [0.5, 12.0], [0.6, 14.0], [0.7, 15.0], [0.8, 15.0], [0.9, 20.0], [1.0, 23.0], [1.1, 23.0], [1.2, 23.0], [1.3, 25.0], [1.4, 25.0], [1.5, 25.0], [1.6, 25.0], [1.7, 25.0], [1.8, 28.0], [1.9, 28.0], [2.0, 41.0], [2.1, 44.0], [2.2, 50.0], [2.3, 50.0], [2.4, 113.0], [2.5, 117.0], [2.6, 128.0], [2.7, 128.0], [2.8, 130.0], [2.9, 130.0], [3.0, 133.0], [3.1, 133.0], [3.2, 135.0], [3.3, 141.0], [3.4, 141.0], [3.5, 147.0], [3.6, 147.0], [3.7, 155.0], [3.8, 155.0], [3.9, 156.0], [4.0, 157.0], [4.1, 157.0], [4.2, 157.0], [4.3, 157.0], [4.4, 159.0], [4.5, 160.0], [4.6, 160.0], [4.7, 160.0], [4.8, 162.0], [4.9, 163.0], [5.0, 163.0], [5.1, 164.0], [5.2, 165.0], [5.3, 165.0], [5.4, 165.0], [5.5, 165.0], [5.6, 165.0], [5.7, 165.0], [5.8, 165.0], [5.9, 168.0], [6.0, 171.0], [6.1, 171.0], [6.2, 172.0], [6.3, 173.0], [6.4, 174.0], [6.5, 174.0], [6.6, 178.0], [6.7, 182.0], [6.8, 182.0], [6.9, 183.0], [7.0, 191.0], [7.1, 193.0], [7.2, 193.0], [7.3, 196.0], [7.4, 197.0], [7.5, 201.0], [7.6, 201.0], [7.7, 203.0], [7.8, 205.0], [7.9, 206.0], [8.0, 206.0], [8.1, 207.0], [8.2, 208.0], [8.3, 215.0], [8.4, 215.0], [8.5, 219.0], [8.6, 220.0], [8.7, 220.0], [8.8, 223.0], [8.9, 226.0], [9.0, 231.0], [9.1, 231.0], [9.2, 234.0], [9.3, 237.0], [9.4, 239.0], [9.5, 239.0], [9.6, 242.0], [9.7, 247.0], [9.8, 250.0], [9.9, 250.0], [10.0, 253.0], [10.1, 255.0], [10.2, 255.0], [10.3, 259.0], [10.4, 261.0], [10.5, 264.0], [10.6, 264.0], [10.7, 264.0], [10.8, 264.0], [10.9, 265.0], [11.0, 265.0], [11.1, 266.0], [11.2, 272.0], [11.3, 276.0], [11.4, 276.0], [11.5, 276.0], [11.6, 280.0], [11.7, 280.0], [11.8, 283.0], [11.9, 285.0], [12.0, 286.0], [12.1, 286.0], [12.2, 292.0], [12.3, 295.0], [12.4, 296.0], [12.5, 296.0], [12.6, 298.0], [12.7, 298.0], [12.8, 303.0], [12.9, 303.0], [13.0, 303.0], [13.1, 305.0], [13.2, 318.0], [13.3, 318.0], [13.4, 322.0], [13.5, 330.0], [13.6, 330.0], [13.7, 337.0], [13.8, 343.0], [13.9, 350.0], [14.0, 350.0], [14.1, 352.0], [14.2, 354.0], [14.3, 354.0], [14.4, 354.0], [14.5, 354.0], [14.6, 357.0], [14.7, 357.0], [14.8, 357.0], [14.9, 357.0], [15.0, 360.0], [15.1, 360.0], [15.2, 364.0], [15.3, 369.0], [15.4, 375.0], [15.5, 375.0], [15.6, 376.0], [15.7, 383.0], [15.8, 384.0], [15.9, 384.0], [16.0, 385.0], [16.1, 386.0], [16.2, 386.0], [16.3, 386.0], [16.4, 387.0], [16.5, 388.0], [16.6, 389.0], [16.7, 389.0], [16.8, 390.0], [16.9, 391.0], [17.0, 391.0], [17.1, 392.0], [17.2, 393.0], [17.3, 397.0], [17.4, 397.0], [17.5, 397.0], [17.6, 402.0], [17.7, 404.0], [17.8, 404.0], [17.9, 409.0], [18.0, 419.0], [18.1, 419.0], [18.2, 419.0], [18.3, 431.0], [18.4, 433.0], [18.5, 433.0], [18.6, 439.0], [18.7, 441.0], [18.8, 445.0], [18.9, 445.0], [19.0, 448.0], [19.1, 451.0], [19.2, 455.0], [19.3, 455.0], [19.4, 472.0], [19.5, 478.0], [19.6, 479.0], [19.7, 479.0], [19.8, 479.0], [19.9, 480.0], [20.0, 482.0], [20.1, 482.0], [20.2, 486.0], [20.3, 490.0], [20.4, 490.0], [20.5, 490.0], [20.6, 494.0], [20.7, 495.0], [20.8, 495.0], [20.9, 496.0], [21.0, 496.0], [21.1, 496.0], [21.2, 496.0], [21.3, 499.0], [21.4, 499.0], [21.5, 500.0], [21.6, 500.0], [21.7, 502.0], [21.8, 502.0], [21.9, 502.0], [22.0, 505.0], [22.1, 505.0], [22.2, 505.0], [22.3, 505.0], [22.4, 506.0], [22.5, 510.0], [22.6, 511.0], [22.7, 511.0], [22.8, 512.0], [22.9, 512.0], [23.0, 513.0], [23.1, 513.0], [23.2, 513.0], [23.3, 514.0], [23.4, 514.0], [23.5, 514.0], [23.6, 515.0], [23.7, 516.0], [23.8, 516.0], [23.9, 517.0], [24.0, 517.0], [24.1, 518.0], [24.2, 518.0], [24.3, 518.0], [24.4, 521.0], [24.5, 521.0], [24.6, 521.0], [24.7, 525.0], [24.8, 526.0], [24.9, 526.0], [25.0, 526.0], [25.1, 527.0], [25.2, 528.0], [25.3, 528.0], [25.4, 528.0], [25.5, 528.0], [25.6, 529.0], [25.7, 529.0], [25.8, 531.0], [25.9, 532.0], [26.0, 532.0], [26.1, 532.0], [26.2, 536.0], [26.3, 537.0], [26.4, 537.0], [26.5, 537.0], [26.6, 537.0], [26.7, 538.0], [26.8, 538.0], [26.9, 539.0], [27.0, 539.0], [27.1, 541.0], [27.2, 541.0], [27.3, 544.0], [27.4, 545.0], [27.5, 546.0], [27.6, 546.0], [27.7, 549.0], [27.8, 550.0], [27.9, 551.0], [28.0, 551.0], [28.1, 553.0], [28.2, 553.0], [28.3, 554.0], [28.4, 554.0], [28.5, 555.0], [28.6, 556.0], [28.7, 556.0], [28.8, 556.0], [28.9, 556.0], [29.0, 557.0], [29.1, 557.0], [29.2, 557.0], [29.3, 558.0], [29.4, 561.0], [29.5, 561.0], [29.6, 562.0], [29.7, 564.0], [29.8, 564.0], [29.9, 564.0], [30.0, 564.0], [30.1, 567.0], [30.2, 567.0], [30.3, 569.0], [30.4, 569.0], [30.5, 572.0], [30.6, 572.0], [30.7, 576.0], [30.8, 576.0], [30.9, 577.0], [31.0, 577.0], [31.1, 578.0], [31.2, 579.0], [31.3, 580.0], [31.4, 580.0], [31.5, 583.0], [31.6, 583.0], [31.7, 583.0], [31.8, 587.0], [31.9, 588.0], [32.0, 590.0], [32.1, 590.0], [32.2, 596.0], [32.3, 598.0], [32.4, 598.0], [32.5, 598.0], [32.6, 600.0], [32.7, 601.0], [32.8, 601.0], [32.9, 601.0], [33.0, 601.0], [33.1, 602.0], [33.2, 603.0], [33.3, 603.0], [33.4, 607.0], [33.5, 607.0], [33.6, 607.0], [33.7, 608.0], [33.8, 610.0], [33.9, 613.0], [34.0, 613.0], [34.1, 614.0], [34.2, 614.0], [34.3, 616.0], [34.4, 616.0], [34.5, 617.0], [34.6, 618.0], [34.7, 619.0], [34.8, 619.0], [34.9, 619.0], [35.0, 620.0], [35.1, 620.0], [35.2, 623.0], [35.3, 624.0], [35.4, 625.0], [35.5, 625.0], [35.6, 626.0], [35.7, 626.0], [35.8, 627.0], [35.9, 627.0], [36.0, 628.0], [36.1, 628.0], [36.2, 628.0], [36.3, 628.0], [36.4, 628.0], [36.5, 628.0], [36.6, 629.0], [36.7, 629.0], [36.8, 630.0], [36.9, 634.0], [37.0, 634.0], [37.1, 634.0], [37.2, 635.0], [37.3, 637.0], [37.4, 637.0], [37.5, 637.0], [37.6, 638.0], [37.7, 639.0], [37.8, 639.0], [37.9, 640.0], [38.0, 641.0], [38.1, 646.0], [38.2, 646.0], [38.3, 652.0], [38.4, 656.0], [38.5, 656.0], [38.6, 658.0], [38.7, 658.0], [38.8, 661.0], [38.9, 661.0], [39.0, 670.0], [39.1, 670.0], [39.2, 672.0], [39.3, 672.0], [39.4, 672.0], [39.5, 673.0], [39.6, 674.0], [39.7, 674.0], [39.8, 676.0], [39.9, 678.0], [40.0, 679.0], [40.1, 679.0], [40.2, 680.0], [40.3, 685.0], [40.4, 685.0], [40.5, 685.0], [40.6, 686.0], [40.7, 687.0], [40.8, 687.0], [40.9, 687.0], [41.0, 687.0], [41.1, 689.0], [41.2, 689.0], [41.3, 694.0], [41.4, 694.0], [41.5, 695.0], [41.6, 695.0], [41.7, 695.0], [41.8, 695.0], [41.9, 695.0], [42.0, 695.0], [42.1, 696.0], [42.2, 699.0], [42.3, 699.0], [42.4, 700.0], [42.5, 702.0], [42.6, 703.0], [42.7, 703.0], [42.8, 706.0], [42.9, 706.0], [43.0, 709.0], [43.1, 709.0], [43.2, 709.0], [43.3, 710.0], [43.4, 710.0], [43.5, 711.0], [43.6, 711.0], [43.7, 712.0], [43.8, 712.0], [43.9, 712.0], [44.0, 712.0], [44.1, 712.0], [44.2, 712.0], [44.3, 713.0], [44.4, 714.0], [44.5, 716.0], [44.6, 716.0], [44.7, 717.0], [44.8, 718.0], [44.9, 720.0], [45.0, 720.0], [45.1, 721.0], [45.2, 721.0], [45.3, 721.0], [45.4, 722.0], [45.5, 723.0], [45.6, 724.0], [45.7, 724.0], [45.8, 724.0], [45.9, 725.0], [46.0, 725.0], [46.1, 725.0], [46.2, 726.0], [46.3, 727.0], [46.4, 728.0], [46.5, 728.0], [46.6, 730.0], [46.7, 730.0], [46.8, 730.0], [46.9, 732.0], [47.0, 735.0], [47.1, 736.0], [47.2, 736.0], [47.3, 738.0], [47.4, 738.0], [47.5, 739.0], [47.6, 739.0], [47.7, 740.0], [47.8, 741.0], [47.9, 741.0], [48.0, 741.0], [48.1, 744.0], [48.2, 745.0], [48.3, 745.0], [48.4, 745.0], [48.5, 746.0], [48.6, 746.0], [48.7, 746.0], [48.8, 747.0], [48.9, 751.0], [49.0, 751.0], [49.1, 751.0], [49.2, 751.0], [49.3, 752.0], [49.4, 753.0], [49.5, 753.0], [49.6, 756.0], [49.7, 760.0], [49.8, 764.0], [49.9, 764.0], [50.0, 765.0], [50.1, 766.0], [50.2, 766.0], [50.3, 767.0], [50.4, 772.0], [50.5, 773.0], [50.6, 773.0], [50.7, 774.0], [50.8, 774.0], [50.9, 776.0], [51.0, 776.0], [51.1, 777.0], [51.2, 785.0], [51.3, 786.0], [51.4, 786.0], [51.5, 787.0], [51.6, 792.0], [51.7, 792.0], [51.8, 792.0], [51.9, 797.0], [52.0, 799.0], [52.1, 799.0], [52.2, 800.0], [52.3, 800.0], [52.4, 802.0], [52.5, 802.0], [52.6, 803.0], [52.7, 803.0], [52.8, 804.0], [52.9, 804.0], [53.0, 808.0], [53.1, 810.0], [53.2, 810.0], [53.3, 810.0], [53.4, 811.0], [53.5, 811.0], [53.6, 811.0], [53.7, 812.0], [53.8, 812.0], [53.9, 814.0], [54.0, 814.0], [54.1, 815.0], [54.2, 817.0], [54.3, 817.0], [54.4, 817.0], [54.5, 818.0], [54.6, 820.0], [54.7, 820.0], [54.8, 820.0], [54.9, 821.0], [55.0, 824.0], [55.1, 824.0], [55.2, 825.0], [55.3, 828.0], [55.4, 830.0], [55.5, 830.0], [55.6, 832.0], [55.7, 832.0], [55.8, 833.0], [55.9, 833.0], [56.0, 834.0], [56.1, 837.0], [56.2, 837.0], [56.3, 837.0], [56.4, 837.0], [56.5, 838.0], [56.6, 840.0], [56.7, 840.0], [56.8, 840.0], [56.9, 840.0], [57.0, 840.0], [57.1, 841.0], [57.2, 843.0], [57.3, 844.0], [57.4, 844.0], [57.5, 846.0], [57.6, 853.0], [57.7, 853.0], [57.8, 853.0], [57.9, 855.0], [58.0, 855.0], [58.1, 857.0], [58.2, 857.0], [58.3, 860.0], [58.4, 862.0], [58.5, 862.0], [58.6, 864.0], [58.7, 864.0], [58.8, 865.0], [58.9, 865.0], [59.0, 868.0], [59.1, 868.0], [59.2, 869.0], [59.3, 869.0], [59.4, 871.0], [59.5, 873.0], [59.6, 873.0], [59.7, 873.0], [59.8, 874.0], [59.9, 874.0], [60.0, 876.0], [60.1, 876.0], [60.2, 877.0], [60.3, 877.0], [60.4, 877.0], [60.5, 880.0], [60.6, 881.0], [60.7, 882.0], [60.8, 882.0], [60.9, 883.0], [61.0, 892.0], [61.1, 895.0], [61.2, 895.0], [61.3, 902.0], [61.4, 902.0], [61.5, 904.0], [61.6, 904.0], [61.7, 907.0], [61.8, 909.0], [61.9, 909.0], [62.0, 914.0], [62.1, 916.0], [62.2, 917.0], [62.3, 917.0], [62.4, 918.0], [62.5, 920.0], [62.6, 921.0], [62.7, 921.0], [62.8, 921.0], [62.9, 924.0], [63.0, 930.0], [63.1, 930.0], [63.2, 935.0], [63.3, 939.0], [63.4, 939.0], [63.5, 941.0], [63.6, 946.0], [63.7, 954.0], [63.8, 954.0], [63.9, 957.0], [64.0, 959.0], [64.1, 975.0], [64.2, 975.0], [64.3, 978.0], [64.4, 988.0], [64.5, 1001.0], [64.6, 1001.0], [64.7, 1008.0], [64.8, 1010.0], [64.9, 1012.0], [65.0, 1012.0], [65.1, 1021.0], [65.2, 1026.0], [65.3, 1026.0], [65.4, 1028.0], [65.5, 1034.0], [65.6, 1041.0], [65.7, 1041.0], [65.8, 1041.0], [65.9, 1048.0], [66.0, 1048.0], [66.1, 1048.0], [66.2, 1050.0], [66.3, 1064.0], [66.4, 1065.0], [66.5, 1065.0], [66.6, 1070.0], [66.7, 1073.0], [66.8, 1073.0], [66.9, 1082.0], [67.0, 1090.0], [67.1, 1092.0], [67.2, 1092.0], [67.3, 1092.0], [67.4, 1100.0], [67.5, 1107.0], [67.6, 1107.0], [67.7, 1111.0], [67.8, 1112.0], [67.9, 1114.0], [68.0, 1114.0], [68.1, 1114.0], [68.2, 1115.0], [68.3, 1127.0], [68.4, 1127.0], [68.5, 1142.0], [68.6, 1144.0], [68.7, 1144.0], [68.8, 1145.0], [68.9, 1147.0], [69.0, 1147.0], [69.1, 1147.0], [69.2, 1151.0], [69.3, 1154.0], [69.4, 1155.0], [69.5, 1155.0], [69.6, 1158.0], [69.7, 1158.0], [69.8, 1172.0], [69.9, 1172.0], [70.0, 1172.0], [70.1, 1173.0], [70.2, 1173.0], [70.3, 1189.0], [70.4, 1190.0], [70.5, 1204.0], [70.6, 1204.0], [70.7, 1209.0], [70.8, 1220.0], [70.9, 1221.0], [71.0, 1221.0], [71.1, 1222.0], [71.2, 1234.0], [71.3, 1235.0], [71.4, 1235.0], [71.5, 1246.0], [71.6, 1255.0], [71.7, 1255.0], [71.8, 1263.0], [71.9, 1266.0], [72.0, 1268.0], [72.1, 1268.0], [72.2, 1282.0], [72.3, 1284.0], [72.4, 1296.0], [72.5, 1296.0], [72.6, 1302.0], [72.7, 1329.0], [72.8, 1330.0], [72.9, 1330.0], [73.0, 1334.0], [73.1, 1365.0], [73.2, 1383.0], [73.3, 1383.0], [73.4, 1392.0], [73.5, 1401.0], [73.6, 1401.0], [73.7, 1408.0], [73.8, 1414.0], [73.9, 1425.0], [74.0, 1425.0], [74.1, 1464.0], [74.2, 1474.0], [74.3, 1477.0], [74.4, 1477.0], [74.5, 1490.0], [74.6, 1492.0], [74.7, 1498.0], [74.8, 1498.0], [74.9, 1500.0], [75.0, 1536.0], [75.1, 1536.0], [75.2, 1540.0], [75.3, 1598.0], [75.4, 1606.0], [75.5, 1606.0], [75.6, 1609.0], [75.7, 1613.0], [75.8, 1658.0], [75.9, 1658.0], [76.0, 1667.0], [76.1, 1667.0], [76.2, 1671.0], [76.3, 1671.0], [76.4, 1682.0], [76.5, 1689.0], [76.6, 1693.0], [76.7, 1693.0], [76.8, 1694.0], [76.9, 1697.0], [77.0, 1697.0], [77.1, 1774.0], [77.2, 1793.0], [77.3, 1806.0], [77.4, 1806.0], [77.5, 1825.0], [77.6, 1832.0], [77.7, 1834.0], [77.8, 1834.0], [77.9, 1859.0], [78.0, 1860.0], [78.1, 1930.0], [78.2, 1930.0], [78.3, 2031.0], [78.4, 2032.0], [78.5, 2032.0], [78.6, 2036.0], [78.7, 2058.0], [78.8, 2059.0], [78.9, 2059.0], [79.0, 2060.0], [79.1, 2072.0], [79.2, 2109.0], [79.3, 2109.0], [79.4, 2151.0], [79.5, 2192.0], [79.6, 2198.0], [79.7, 2198.0], [79.8, 2215.0], [79.9, 2217.0], [80.0, 2273.0], [80.1, 2273.0], [80.2, 2281.0], [80.3, 2283.0], [80.4, 2283.0], [80.5, 2295.0], [80.6, 2388.0], [80.7, 2423.0], [80.8, 2423.0], [80.9, 2453.0], [81.0, 2464.0], [81.1, 2475.0], [81.2, 2475.0], [81.3, 2481.0], [81.4, 2576.0], [81.5, 2583.0], [81.6, 2583.0], [81.7, 2585.0], [81.8, 2644.0], [81.9, 2644.0], [82.0, 2688.0], [82.1, 2731.0], [82.2, 2749.0], [82.3, 2749.0], [82.4, 2783.0], [82.5, 2892.0], [82.6, 2948.0], [82.7, 2948.0], [82.8, 2951.0], [82.9, 2991.0], [83.0, 3048.0], [83.1, 3048.0], [83.2, 3058.0], [83.3, 3087.0], [83.4, 3087.0], [83.5, 3091.0], [83.6, 3137.0], [83.7, 3165.0], [83.8, 3165.0], [83.9, 3190.0], [84.0, 3196.0], [84.1, 3229.0], [84.2, 3229.0], [84.3, 3269.0], [84.4, 3286.0], [84.5, 3286.0], [84.6, 3286.0], [84.7, 3295.0], [84.8, 3306.0], [84.9, 3343.0], [85.0, 3343.0], [85.1, 3398.0], [85.2, 3428.0], [85.3, 3428.0], [85.4, 3484.0], [85.5, 3605.0], [85.6, 3642.0], [85.7, 3642.0], [85.8, 3649.0], [85.9, 3650.0], [86.0, 3730.0], [86.1, 3730.0], [86.2, 3755.0], [86.3, 4031.0], [86.4, 4098.0], [86.5, 4098.0], [86.6, 4184.0], [86.7, 4361.0], [86.8, 4361.0], [86.9, 4563.0], [87.0, 4611.0], [87.1, 4638.0], [87.2, 4638.0], [87.3, 4646.0], [87.4, 4822.0], [87.5, 4856.0], [87.6, 4856.0], [87.7, 5223.0], [87.8, 5271.0], [87.9, 5723.0], [88.0, 5723.0], [88.1, 6220.0], [88.2, 7075.0], [88.3, 9046.0], [88.4, 9046.0], [88.5, 10397.0], [88.6, 10783.0], [88.7, 10783.0], [88.8, 36575.0], [88.9, 39503.0], [89.0, 40110.0], [89.1, 40110.0], [89.2, 40446.0], [89.3, 41225.0], [89.4, 41599.0], [89.5, 41599.0], [89.6, 47523.0], [89.7, 48585.0], [89.8, 48712.0], [89.9, 48712.0], [90.0, 49047.0], [90.1, 83441.0], [90.2, 83441.0], [90.3, 84945.0], [90.4, 85818.0], [90.5, 85955.0], [90.6, 85955.0], [90.7, 86320.0], [90.8, 86408.0], [90.9, 87122.0], [91.0, 87122.0], [91.1, 87252.0], [91.2, 87405.0], [91.3, 87481.0], [91.4, 87481.0], [91.5, 87564.0], [91.6, 87591.0], [91.7, 87591.0], [91.8, 87632.0], [91.9, 87673.0], [92.0, 87762.0], [92.1, 87762.0], [92.2, 87972.0], [92.3, 88032.0], [92.4, 88153.0], [92.5, 88153.0], [92.6, 88176.0], [92.7, 88248.0], [92.8, 88267.0], [92.9, 88267.0], [93.0, 88269.0], [93.1, 88498.0], [93.2, 88597.0], [93.3, 88597.0], [93.4, 88791.0], [93.5, 89167.0], [93.6, 89167.0], [93.7, 89667.0], [93.8, 89903.0], [93.9, 91542.0], [94.0, 91542.0], [94.1, 91682.0], [94.2, 96720.0], [94.3, 99016.0], [94.4, 99016.0], [94.5, 99320.0], [94.6, 99624.0], [94.7, 99784.0], [94.8, 99784.0], [94.9, 100411.0], [95.0, 101077.0], [95.1, 101077.0], [95.2, 101149.0], [95.3, 101868.0], [95.4, 117114.0], [95.5, 117114.0], [95.6, 120374.0], [95.7, 120911.0], [95.8, 121625.0], [95.9, 121625.0], [96.0, 122041.0], [96.1, 122705.0], [96.2, 132256.0], [96.3, 132256.0], [96.4, 137886.0], [96.5, 144596.0], [96.6, 158649.0], [96.7, 158649.0], [96.8, 160619.0], [96.9, 167985.0], [97.0, 167985.0], [97.1, 169462.0], [97.2, 169512.0], [97.3, 169526.0], [97.4, 169526.0], [97.5, 169801.0], [97.6, 170891.0], [97.7, 171230.0], [97.8, 171230.0], [97.9, 171274.0], [98.0, 171716.0], [98.1, 173887.0], [98.2, 173887.0], [98.3, 174539.0], [98.4, 174717.0], [98.5, 174717.0], [98.6, 175335.0], [98.7, 175398.0], [98.8, 177106.0], [98.9, 177106.0], [99.0, 177572.0], [99.1, 178949.0], [99.2, 183877.0], [99.3, 183877.0], [99.4, 184926.0], [99.5, 209685.0], [99.6, 218284.0], [99.7, 218284.0], [99.8, 222049.0], [99.9, 247000.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 81.0, "series": [{"data": [[0.0, 17.0], [171200.0, 2.0], [209600.0, 1.0], [174500.0, 1.0], [175300.0, 2.0], [184900.0, 1.0], [85900.0, 1.0], [86300.0, 1.0], [87500.0, 2.0], [87900.0, 1.0], [88700.0, 1.0], [89900.0, 1.0], [87100.0, 1.0], [89100.0, 1.0], [91500.0, 1.0], [96700.0, 1.0], [101100.0, 1.0], [117100.0, 1.0], [122700.0, 1.0], [120300.0, 1.0], [132200.0, 1.0], [137800.0, 1.0], [158600.0, 1.0], [169800.0, 1.0], [173800.0, 1.0], [100.0, 38.0], [36500.0, 1.0], [39500.0, 1.0], [40100.0, 1.0], [41500.0, 1.0], [174700.0, 1.0], [177100.0, 1.0], [47500.0, 1.0], [48500.0, 1.0], [48700.0, 1.0], [200.0, 39.0], [300.0, 35.0], [83400.0, 1.0], [85800.0, 1.0], [87400.0, 2.0], [88200.0, 3.0], [101000.0, 1.0], [101800.0, 1.0], [99000.0, 1.0], [400.0, 29.0], [500.0, 81.0], [600.0, 72.0], [170800.0, 1.0], [700.0, 72.0], [800.0, 67.0], [222000.0, 1.0], [900.0, 24.0], [1000.0, 21.0], [1100.0, 23.0], [1200.0, 15.0], [1300.0, 7.0], [1400.0, 10.0], [1500.0, 4.0], [1600.0, 12.0], [1700.0, 2.0], [1800.0, 6.0], [1900.0, 1.0], [2000.0, 7.0], [2100.0, 4.0], [144500.0, 1.0], [2200.0, 6.0], [2300.0, 1.0], [2400.0, 5.0], [2500.0, 3.0], [2600.0, 2.0], [171700.0, 1.0], [2700.0, 3.0], [178900.0, 1.0], [2800.0, 1.0], [2900.0, 3.0], [3000.0, 4.0], [3100.0, 4.0], [3200.0, 5.0], [3300.0, 3.0], [3400.0, 2.0], [3700.0, 2.0], [3600.0, 4.0], [4000.0, 2.0], [4300.0, 1.0], [4100.0, 1.0], [4600.0, 3.0], [4500.0, 1.0], [4800.0, 2.0], [5200.0, 2.0], [84900.0, 1.0], [88100.0, 2.0], [88500.0, 1.0], [87700.0, 1.0], [5700.0, 1.0], [99300.0, 1.0], [99700.0, 1.0], [6200.0, 1.0], [7000.0, 1.0], [120900.0, 1.0], [9000.0, 1.0], [160600.0, 1.0], [10700.0, 1.0], [10300.0, 1.0], [169400.0, 1.0], [183800.0, 1.0], [218200.0, 1.0], [247000.0, 1.0], [40400.0, 1.0], [41200.0, 1.0], [169500.0, 2.0], [167900.0, 1.0], [177500.0, 1.0], [49000.0, 1.0], [86400.0, 1.0], [87600.0, 2.0], [87200.0, 1.0], [89600.0, 1.0], [88400.0, 1.0], [88000.0, 1.0], [91600.0, 1.0], [99600.0, 1.0], [100400.0, 1.0], [121600.0, 1.0], [122000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 247000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 159.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 392.0, "series": [{"data": [[0.0, 159.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 392.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 184.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.841549295774646, "minX": 1.6040298E12, "maxY": 10.0, "series": [{"data": [[1.60403052E12, 10.0], [1.60403022E12, 10.0], [1.60403016E12, 10.0], [1.60403082E12, 9.841549295774646], [1.6040298E12, 10.0], [1.60403046E12, 10.0], [1.6040301E12, 10.0], [1.60403004E12, 10.0], [1.6040307E12, 10.0], [1.60403064E12, 10.0], [1.60403034E12, 10.0], [1.60403028E12, 10.0], [1.60402998E12, 10.0], [1.60402992E12, 10.0], [1.60403058E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60403082E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 283.0, "minX": 1.0, "maxY": 14166.92011019286, "series": [{"data": [[8.0, 954.0], [4.0, 2423.0], [2.0, 1859.0], [1.0, 1774.0], [9.0, 283.0], [10.0, 14166.92011019286], [5.0, 3087.0], [6.0, 833.0], [3.0, 1930.0], [7.0, 603.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 14012.149659863966]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15.583333333333334, "minX": 1.6040298E12, "maxY": 624603.1, "series": [{"data": [[1.60403052E12, 1908.8166666666666], [1.60403022E12, 217587.78333333333], [1.60403016E12, 19435.65], [1.60403082E12, 624603.1], [1.6040298E12, 110167.56666666667], [1.60403046E12, 1606.8166666666666], [1.6040301E12, 69210.71666666666], [1.60403004E12, 570.3666666666667], [1.6040307E12, 97492.98333333334], [1.60403064E12, 49147.933333333334], [1.60403034E12, 2779.9166666666665], [1.60403028E12, 556329.4166666666], [1.60402998E12, 1555.9], [1.60402992E12, 2763.866666666667], [1.60403058E12, 393.6333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60403052E12, 81.01666666666667], [1.60403022E12, 556.2833333333333], [1.60403016E12, 23.716666666666665], [1.60403082E12, 2198.9333333333334], [1.6040298E12, 156.96666666666667], [1.60403046E12, 38.88333333333333], [1.6040301E12, 135.61666666666667], [1.60403004E12, 15.583333333333334], [1.6040307E12, 235.58333333333334], [1.60403064E12, 179.83333333333334], [1.60403034E12, 69.18333333333334], [1.60403028E12, 1832.2166666666667], [1.60402998E12, 80.01666666666667], [1.60402992E12, 62.35], [1.60403058E12, 28.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60403082E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1003.645569620254, "minX": 1.6040298E12, "maxY": 151765.0, "series": [{"data": [[1.60403052E12, 92805.45454545454], [1.60403022E12, 25123.46478873239], [1.60403016E12, 57753.33333333333], [1.60403082E12, 6074.978873239434], [1.6040298E12, 1710.6499999999999], [1.60403046E12, 141251.8], [1.6040301E12, 32430.941176470587], [1.60403004E12, 151765.0], [1.6040307E12, 14164.766666666668], [1.60403064E12, 29194.173913043476], [1.60403034E12, 69062.88888888889], [1.60403028E12, 1003.645569620254], [1.60402998E12, 76265.63636363637], [1.60402992E12, 105978.625], [1.60403058E12, 89458.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60403082E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1002.0675105485229, "minX": 1.6040298E12, "maxY": 151764.0, "series": [{"data": [[1.60403052E12, 92805.18181818182], [1.60403022E12, 25121.5633802817], [1.60403016E12, 57747.0], [1.60403082E12, 6073.345070422532], [1.6040298E12, 1703.35], [1.60403046E12, 141251.6], [1.6040301E12, 32428.294117647067], [1.60403004E12, 151764.0], [1.6040307E12, 14162.4], [1.60403064E12, 29190.86956521738], [1.60403034E12, 69062.77777777778], [1.60403028E12, 1002.0675105485229], [1.60402998E12, 76265.36363636363], [1.60402992E12, 105978.25], [1.60403058E12, 89457.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60403082E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.6040298E12, "maxY": 4.199999999999999, "series": [{"data": [[1.60403052E12, 0.8181818181818181], [1.60403022E12, 1.0985915492957745], [1.60403016E12, 1.3333333333333333], [1.60403082E12, 0.8345070422535209], [1.6040298E12, 4.199999999999999], [1.60403046E12, 1.4], [1.6040301E12, 1.1764705882352944], [1.60403004E12, 0.5], [1.6040307E12, 1.0], [1.60403064E12, 1.0000000000000002], [1.60403034E12, 0.6666666666666666], [1.60403028E12, 0.9324894514767934], [1.60402998E12, 1.8181818181818181], [1.60402992E12, 1.0], [1.60403058E12, 1.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60403082E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.6040298E12, "maxY": 247000.0, "series": [{"data": [[1.60403052E12, 178949.0], [1.60403022E12, 247000.0], [1.60403016E12, 171716.0], [1.60403082E12, 209685.0], [1.6040298E12, 3229.0], [1.60403046E12, 177572.0], [1.6040301E12, 173887.0], [1.60403004E12, 171274.0], [1.6040307E12, 169801.0], [1.60403064E12, 175335.0], [1.60403034E12, 91542.0], [1.60403028E12, 7075.0], [1.60402998E12, 184926.0], [1.60402992E12, 144596.0], [1.60403058E12, 222049.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60403052E12, 12.0], [1.60403022E12, 207.0], [1.60403016E12, 276.0], [1.60403082E12, 156.5649999320507], [1.6040298E12, 25.0], [1.60403046E12, 88267.0], [1.6040301E12, 41.0], [1.60403004E12, 132256.0], [1.6040307E12, 357.0], [1.60403064E12, 117.0], [1.60403034E12, 9.0], [1.60403028E12, 23.0], [1.60402998E12, 12.0], [1.60402992E12, 99320.0], [1.60403058E12, 12.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60403052E12, 12.0], [1.60403022E12, 207.0], [1.60403016E12, 276.0], [1.60403082E12, 156.82150002717972], [1.6040298E12, 25.0], [1.60403046E12, 88267.0], [1.6040301E12, 41.0], [1.60403004E12, 132256.0], [1.6040307E12, 357.0], [1.60403064E12, 117.0], [1.60403034E12, 9.0], [1.60403028E12, 23.0], [1.60402998E12, 12.0], [1.60402992E12, 99320.0], [1.60403058E12, 12.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60403052E12, 12.0], [1.60403022E12, 207.0], [1.60403016E12, 276.0], [1.60403082E12, 156.70749996602535], [1.6040298E12, 25.0], [1.60403046E12, 88267.0], [1.6040301E12, 41.0], [1.60403004E12, 132256.0], [1.6040307E12, 357.0], [1.60403064E12, 117.0], [1.60403034E12, 9.0], [1.60403028E12, 23.0], [1.60402998E12, 12.0], [1.60402992E12, 99320.0], [1.60403058E12, 12.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60403052E12, 12.0], [1.60403022E12, 207.0], [1.60403016E12, 276.0], [1.60403082E12, 25.0], [1.6040298E12, 25.0], [1.60403046E12, 88267.0], [1.6040301E12, 41.0], [1.60403004E12, 132256.0], [1.6040307E12, 357.0], [1.60403064E12, 117.0], [1.60403034E12, 9.0], [1.60403028E12, 20.0], [1.60402998E12, 12.0], [1.60402992E12, 99320.0], [1.60403058E12, 12.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60403052E12, 88498.0], [1.60403022E12, 746.0], [1.60403016E12, 1268.0], [1.60403082E12, 744.5], [1.6040298E12, 2045.5], [1.60403046E12, 174717.0], [1.6040301E12, 1613.0], [1.60403004E12, 151765.0], [1.6040307E12, 821.5], [1.60403064E12, 1234.0], [1.60403034E12, 87972.0], [1.60403028E12, 695.0], [1.60402998E12, 86408.0], [1.60402992E12, 100744.0], [1.60403058E12, 67885.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60403082E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 328.5, "minX": 1.0, "maxY": 86320.0, "series": [{"data": [[8.0, 728.5], [2.0, 900.0], [9.0, 868.0], [10.0, 863.0], [11.0, 747.0], [3.0, 1173.0], [12.0, 661.5], [13.0, 659.5], [14.0, 328.5], [15.0, 419.0], [1.0, 86320.0], [4.0, 26172.5], [16.0, 713.0], [17.0, 803.0], [5.0, 699.0], [22.0, 536.5], [6.0, 562.5], [7.0, 751.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 327.5, "minX": 1.0, "maxY": 86319.0, "series": [{"data": [[8.0, 721.5], [2.0, 894.0], [9.0, 857.0], [10.0, 861.5], [11.0, 746.0], [3.0, 1169.0], [12.0, 660.5], [13.0, 658.5], [14.0, 327.5], [15.0, 419.0], [1.0, 86319.0], [4.0, 26172.5], [16.0, 713.0], [17.0, 803.0], [5.0, 697.5], [22.0, 533.0], [6.0, 561.0], [7.0, 749.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6040298E12, "maxY": 4.566666666666666, "series": [{"data": [[1.60403052E12, 0.18333333333333332], [1.60403022E12, 1.1833333333333333], [1.60403016E12, 0.05], [1.60403082E12, 4.566666666666666], [1.6040298E12, 0.5], [1.60403046E12, 0.08333333333333333], [1.6040301E12, 0.2833333333333333], [1.60403004E12, 0.03333333333333333], [1.6040307E12, 0.5], [1.60403064E12, 0.38333333333333336], [1.60403034E12, 0.15], [1.60403028E12, 3.95], [1.60402998E12, 0.18333333333333332], [1.60402992E12, 0.13333333333333333], [1.60403058E12, 0.06666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60403082E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6040298E12, "maxY": 4.733333333333333, "series": [{"data": [[1.60403052E12, 0.18333333333333332], [1.60403022E12, 1.1833333333333333], [1.60403016E12, 0.05], [1.60403082E12, 4.733333333333333], [1.6040298E12, 0.3333333333333333], [1.60403046E12, 0.08333333333333333], [1.6040301E12, 0.2833333333333333], [1.60403004E12, 0.03333333333333333], [1.6040307E12, 0.5], [1.60403064E12, 0.38333333333333336], [1.60403034E12, 0.15], [1.60403028E12, 3.95], [1.60402998E12, 0.18333333333333332], [1.60402992E12, 0.13333333333333333], [1.60403058E12, 0.06666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60403082E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6040298E12, "maxY": 4.733333333333333, "series": [{"data": [[1.60403052E12, 0.18333333333333332], [1.60403022E12, 1.1833333333333333], [1.60403016E12, 0.05], [1.60403082E12, 4.733333333333333], [1.6040298E12, 0.3333333333333333], [1.60403046E12, 0.08333333333333333], [1.6040301E12, 0.2833333333333333], [1.60403004E12, 0.03333333333333333], [1.6040307E12, 0.5], [1.60403064E12, 0.38333333333333336], [1.60403034E12, 0.15], [1.60403028E12, 3.95], [1.60402998E12, 0.18333333333333332], [1.60402992E12, 0.13333333333333333], [1.60403058E12, 0.06666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60403082E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6040298E12, "maxY": 4.733333333333333, "series": [{"data": [[1.60403052E12, 0.18333333333333332], [1.60403022E12, 1.1833333333333333], [1.60403016E12, 0.05], [1.60403082E12, 4.733333333333333], [1.6040298E12, 0.3333333333333333], [1.60403046E12, 0.08333333333333333], [1.6040301E12, 0.2833333333333333], [1.60403004E12, 0.03333333333333333], [1.6040307E12, 0.5], [1.60403064E12, 0.38333333333333336], [1.60403034E12, 0.15], [1.60403028E12, 3.95], [1.60402998E12, 0.18333333333333332], [1.60402992E12, 0.13333333333333333], [1.60403058E12, 0.06666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60403082E12, "title": "Total Transactions Per Second"}},
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

