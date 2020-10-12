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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 296662.0, "series": [{"data": [[0.0, 184.0], [0.1, 184.0], [0.2, 215.0], [0.3, 217.0], [0.4, 217.0], [0.5, 222.0], [0.6, 224.0], [0.7, 225.0], [0.8, 225.0], [0.9, 225.0], [1.0, 228.0], [1.1, 228.0], [1.2, 228.0], [1.3, 231.0], [1.4, 232.0], [1.5, 234.0], [1.6, 234.0], [1.7, 237.0], [1.8, 243.0], [1.9, 243.0], [2.0, 244.0], [2.1, 245.0], [2.2, 247.0], [2.3, 247.0], [2.4, 248.0], [2.5, 249.0], [2.6, 253.0], [2.7, 253.0], [2.8, 260.0], [2.9, 263.0], [3.0, 268.0], [3.1, 268.0], [3.2, 272.0], [3.3, 278.0], [3.4, 278.0], [3.5, 280.0], [3.6, 290.0], [3.7, 291.0], [3.8, 291.0], [3.9, 294.0], [4.0, 294.0], [4.1, 317.0], [4.2, 317.0], [4.3, 328.0], [4.4, 329.0], [4.5, 331.0], [4.6, 331.0], [4.7, 333.0], [4.8, 337.0], [4.9, 337.0], [5.0, 337.0], [5.1, 339.0], [5.2, 340.0], [5.3, 340.0], [5.4, 347.0], [5.5, 348.0], [5.6, 348.0], [5.7, 348.0], [5.8, 349.0], [5.9, 349.0], [6.0, 350.0], [6.1, 350.0], [6.2, 354.0], [6.3, 354.0], [6.4, 356.0], [6.5, 356.0], [6.6, 358.0], [6.7, 359.0], [6.8, 359.0], [6.9, 359.0], [7.0, 359.0], [7.1, 360.0], [7.2, 360.0], [7.3, 360.0], [7.4, 361.0], [7.5, 361.0], [7.6, 361.0], [7.7, 363.0], [7.8, 363.0], [7.9, 363.0], [8.0, 363.0], [8.1, 364.0], [8.2, 365.0], [8.3, 365.0], [8.4, 365.0], [8.5, 365.0], [8.6, 366.0], [8.7, 366.0], [8.8, 368.0], [8.9, 368.0], [9.0, 369.0], [9.1, 369.0], [9.2, 374.0], [9.3, 375.0], [9.4, 375.0], [9.5, 375.0], [9.6, 376.0], [9.7, 376.0], [9.8, 377.0], [9.9, 377.0], [10.0, 378.0], [10.1, 379.0], [10.2, 379.0], [10.3, 379.0], [10.4, 385.0], [10.5, 386.0], [10.6, 386.0], [10.7, 389.0], [10.8, 390.0], [10.9, 390.0], [11.0, 390.0], [11.1, 393.0], [11.2, 394.0], [11.3, 395.0], [11.4, 395.0], [11.5, 397.0], [11.6, 399.0], [11.7, 399.0], [11.8, 399.0], [11.9, 400.0], [12.0, 401.0], [12.1, 401.0], [12.2, 403.0], [12.3, 404.0], [12.4, 404.0], [12.5, 404.0], [12.6, 405.0], [12.7, 407.0], [12.8, 408.0], [12.9, 408.0], [13.0, 408.0], [13.1, 410.0], [13.2, 411.0], [13.3, 411.0], [13.4, 414.0], [13.5, 416.0], [13.6, 416.0], [13.7, 418.0], [13.8, 419.0], [13.9, 420.0], [14.0, 420.0], [14.1, 422.0], [14.2, 423.0], [14.3, 424.0], [14.4, 424.0], [14.5, 425.0], [14.6, 428.0], [14.7, 431.0], [14.8, 431.0], [14.9, 431.0], [15.0, 433.0], [15.1, 433.0], [15.2, 433.0], [15.3, 435.0], [15.4, 436.0], [15.5, 436.0], [15.6, 437.0], [15.7, 441.0], [15.8, 441.0], [15.9, 441.0], [16.0, 441.0], [16.1, 442.0], [16.2, 443.0], [16.3, 443.0], [16.4, 444.0], [16.5, 447.0], [16.6, 448.0], [16.7, 448.0], [16.8, 450.0], [16.9, 451.0], [17.0, 451.0], [17.1, 451.0], [17.2, 452.0], [17.3, 452.0], [17.4, 452.0], [17.5, 453.0], [17.6, 454.0], [17.7, 454.0], [17.8, 454.0], [17.9, 455.0], [18.0, 456.0], [18.1, 456.0], [18.2, 456.0], [18.3, 458.0], [18.4, 459.0], [18.5, 459.0], [18.6, 459.0], [18.7, 460.0], [18.8, 461.0], [18.9, 461.0], [19.0, 462.0], [19.1, 463.0], [19.2, 464.0], [19.3, 464.0], [19.4, 464.0], [19.5, 465.0], [19.6, 466.0], [19.7, 466.0], [19.8, 468.0], [19.9, 469.0], [20.0, 473.0], [20.1, 473.0], [20.2, 474.0], [20.3, 475.0], [20.4, 475.0], [20.5, 476.0], [20.6, 476.0], [20.7, 478.0], [20.8, 478.0], [20.9, 479.0], [21.0, 479.0], [21.1, 479.0], [21.2, 479.0], [21.3, 480.0], [21.4, 483.0], [21.5, 484.0], [21.6, 484.0], [21.7, 485.0], [21.8, 485.0], [21.9, 485.0], [22.0, 486.0], [22.1, 486.0], [22.2, 488.0], [22.3, 488.0], [22.4, 493.0], [22.5, 494.0], [22.6, 494.0], [22.7, 494.0], [22.8, 495.0], [22.9, 497.0], [23.0, 497.0], [23.1, 497.0], [23.2, 499.0], [23.3, 502.0], [23.4, 502.0], [23.5, 504.0], [23.6, 505.0], [23.7, 505.0], [23.8, 505.0], [23.9, 506.0], [24.0, 517.0], [24.1, 517.0], [24.2, 517.0], [24.3, 517.0], [24.4, 524.0], [24.5, 526.0], [24.6, 526.0], [24.7, 527.0], [24.8, 529.0], [24.9, 530.0], [25.0, 530.0], [25.1, 533.0], [25.2, 534.0], [25.3, 534.0], [25.4, 536.0], [25.5, 536.0], [25.6, 536.0], [25.7, 536.0], [25.8, 537.0], [25.9, 537.0], [26.0, 539.0], [26.1, 539.0], [26.2, 541.0], [26.3, 542.0], [26.4, 542.0], [26.5, 542.0], [26.6, 543.0], [26.7, 547.0], [26.8, 547.0], [26.9, 548.0], [27.0, 548.0], [27.1, 550.0], [27.2, 550.0], [27.3, 553.0], [27.4, 554.0], [27.5, 554.0], [27.6, 554.0], [27.7, 555.0], [27.8, 558.0], [27.9, 559.0], [28.0, 559.0], [28.1, 559.0], [28.2, 560.0], [28.3, 564.0], [28.4, 564.0], [28.5, 569.0], [28.6, 570.0], [28.7, 570.0], [28.8, 573.0], [28.9, 574.0], [29.0, 578.0], [29.1, 578.0], [29.2, 579.0], [29.3, 585.0], [29.4, 588.0], [29.5, 588.0], [29.6, 588.0], [29.7, 590.0], [29.8, 591.0], [29.9, 591.0], [30.0, 593.0], [30.1, 593.0], [30.2, 593.0], [30.3, 594.0], [30.4, 595.0], [30.5, 596.0], [30.6, 596.0], [30.7, 599.0], [30.8, 600.0], [30.9, 603.0], [31.0, 603.0], [31.1, 604.0], [31.2, 606.0], [31.3, 606.0], [31.4, 606.0], [31.5, 611.0], [31.6, 611.0], [31.7, 611.0], [31.8, 612.0], [31.9, 617.0], [32.0, 619.0], [32.1, 619.0], [32.2, 620.0], [32.3, 621.0], [32.4, 622.0], [32.5, 622.0], [32.6, 622.0], [32.7, 623.0], [32.8, 624.0], [32.9, 624.0], [33.0, 625.0], [33.1, 625.0], [33.2, 625.0], [33.3, 625.0], [33.4, 626.0], [33.5, 626.0], [33.6, 626.0], [33.7, 626.0], [33.8, 628.0], [33.9, 628.0], [34.0, 628.0], [34.1, 629.0], [34.2, 632.0], [34.3, 632.0], [34.4, 632.0], [34.5, 635.0], [34.6, 636.0], [34.7, 636.0], [34.8, 636.0], [34.9, 636.0], [35.0, 637.0], [35.1, 637.0], [35.2, 637.0], [35.3, 639.0], [35.4, 639.0], [35.5, 639.0], [35.6, 640.0], [35.7, 650.0], [35.8, 653.0], [35.9, 653.0], [36.0, 653.0], [36.1, 656.0], [36.2, 659.0], [36.3, 659.0], [36.4, 659.0], [36.5, 659.0], [36.6, 660.0], [36.7, 660.0], [36.8, 665.0], [36.9, 666.0], [37.0, 666.0], [37.1, 667.0], [37.2, 667.0], [37.3, 668.0], [37.4, 668.0], [37.5, 668.0], [37.6, 670.0], [37.7, 671.0], [37.8, 671.0], [37.9, 672.0], [38.0, 674.0], [38.1, 675.0], [38.2, 675.0], [38.3, 676.0], [38.4, 678.0], [38.5, 678.0], [38.6, 679.0], [38.7, 680.0], [38.8, 681.0], [38.9, 681.0], [39.0, 682.0], [39.1, 683.0], [39.2, 685.0], [39.3, 685.0], [39.4, 685.0], [39.5, 688.0], [39.6, 689.0], [39.7, 689.0], [39.8, 690.0], [39.9, 692.0], [40.0, 693.0], [40.1, 693.0], [40.2, 693.0], [40.3, 693.0], [40.4, 693.0], [40.5, 697.0], [40.6, 697.0], [40.7, 701.0], [40.8, 701.0], [40.9, 701.0], [41.0, 702.0], [41.1, 703.0], [41.2, 703.0], [41.3, 704.0], [41.4, 708.0], [41.5, 709.0], [41.6, 709.0], [41.7, 712.0], [41.8, 714.0], [41.9, 714.0], [42.0, 718.0], [42.1, 718.0], [42.2, 718.0], [42.3, 718.0], [42.4, 719.0], [42.5, 719.0], [42.6, 720.0], [42.7, 720.0], [42.8, 720.0], [42.9, 721.0], [43.0, 721.0], [43.1, 721.0], [43.2, 731.0], [43.3, 732.0], [43.4, 732.0], [43.5, 735.0], [43.6, 736.0], [43.7, 736.0], [43.8, 736.0], [43.9, 738.0], [44.0, 741.0], [44.1, 741.0], [44.2, 741.0], [44.3, 742.0], [44.4, 743.0], [44.5, 743.0], [44.6, 743.0], [44.7, 745.0], [44.8, 746.0], [44.9, 747.0], [45.0, 747.0], [45.1, 747.0], [45.2, 748.0], [45.3, 748.0], [45.4, 748.0], [45.5, 749.0], [45.6, 749.0], [45.7, 749.0], [45.8, 750.0], [45.9, 752.0], [46.0, 752.0], [46.1, 752.0], [46.2, 753.0], [46.3, 754.0], [46.4, 755.0], [46.5, 755.0], [46.6, 759.0], [46.7, 762.0], [46.8, 762.0], [46.9, 764.0], [47.0, 767.0], [47.1, 772.0], [47.2, 772.0], [47.3, 772.0], [47.4, 783.0], [47.5, 784.0], [47.6, 784.0], [47.7, 786.0], [47.8, 786.0], [47.9, 786.0], [48.0, 786.0], [48.1, 788.0], [48.2, 788.0], [48.3, 790.0], [48.4, 790.0], [48.5, 790.0], [48.6, 790.0], [48.7, 790.0], [48.8, 791.0], [48.9, 793.0], [49.0, 796.0], [49.1, 796.0], [49.2, 797.0], [49.3, 798.0], [49.4, 799.0], [49.5, 799.0], [49.6, 803.0], [49.7, 804.0], [49.8, 806.0], [49.9, 806.0], [50.0, 809.0], [50.1, 811.0], [50.2, 811.0], [50.3, 812.0], [50.4, 816.0], [50.5, 818.0], [50.6, 818.0], [50.7, 820.0], [50.8, 820.0], [50.9, 820.0], [51.0, 820.0], [51.1, 823.0], [51.2, 824.0], [51.3, 824.0], [51.4, 824.0], [51.5, 827.0], [51.6, 828.0], [51.7, 828.0], [51.8, 828.0], [51.9, 833.0], [52.0, 835.0], [52.1, 835.0], [52.2, 839.0], [52.3, 841.0], [52.4, 843.0], [52.5, 843.0], [52.6, 844.0], [52.7, 846.0], [52.8, 849.0], [52.9, 849.0], [53.0, 851.0], [53.1, 853.0], [53.2, 853.0], [53.3, 853.0], [53.4, 856.0], [53.5, 857.0], [53.6, 857.0], [53.7, 857.0], [53.8, 864.0], [53.9, 866.0], [54.0, 866.0], [54.1, 869.0], [54.2, 869.0], [54.3, 870.0], [54.4, 870.0], [54.5, 877.0], [54.6, 894.0], [54.7, 895.0], [54.8, 895.0], [54.9, 901.0], [55.0, 907.0], [55.1, 907.0], [55.2, 908.0], [55.3, 909.0], [55.4, 909.0], [55.5, 909.0], [55.6, 911.0], [55.7, 911.0], [55.8, 919.0], [55.9, 919.0], [56.0, 922.0], [56.1, 928.0], [56.2, 929.0], [56.3, 929.0], [56.4, 931.0], [56.5, 934.0], [56.6, 934.0], [56.7, 934.0], [56.8, 938.0], [56.9, 941.0], [57.0, 941.0], [57.1, 941.0], [57.2, 943.0], [57.3, 947.0], [57.4, 947.0], [57.5, 948.0], [57.6, 948.0], [57.7, 949.0], [57.8, 949.0], [57.9, 952.0], [58.0, 955.0], [58.1, 962.0], [58.2, 962.0], [58.3, 969.0], [58.4, 977.0], [58.5, 977.0], [58.6, 989.0], [58.7, 991.0], [58.8, 995.0], [58.9, 995.0], [59.0, 995.0], [59.1, 996.0], [59.2, 1004.0], [59.3, 1004.0], [59.4, 1004.0], [59.5, 1006.0], [59.6, 1007.0], [59.7, 1007.0], [59.8, 1015.0], [59.9, 1015.0], [60.0, 1016.0], [60.1, 1016.0], [60.2, 1019.0], [60.3, 1019.0], [60.4, 1019.0], [60.5, 1021.0], [60.6, 1022.0], [60.7, 1024.0], [60.8, 1024.0], [60.9, 1028.0], [61.0, 1031.0], [61.1, 1031.0], [61.2, 1031.0], [61.3, 1033.0], [61.4, 1035.0], [61.5, 1038.0], [61.6, 1038.0], [61.7, 1044.0], [61.8, 1044.0], [61.9, 1044.0], [62.0, 1047.0], [62.1, 1047.0], [62.2, 1051.0], [62.3, 1051.0], [62.4, 1052.0], [62.5, 1053.0], [62.6, 1056.0], [62.7, 1056.0], [62.8, 1062.0], [62.9, 1065.0], [63.0, 1066.0], [63.1, 1066.0], [63.2, 1067.0], [63.3, 1068.0], [63.4, 1068.0], [63.5, 1069.0], [63.6, 1074.0], [63.7, 1078.0], [63.8, 1078.0], [63.9, 1080.0], [64.0, 1082.0], [64.1, 1084.0], [64.2, 1084.0], [64.3, 1085.0], [64.4, 1091.0], [64.5, 1100.0], [64.6, 1100.0], [64.7, 1104.0], [64.8, 1104.0], [64.9, 1108.0], [65.0, 1108.0], [65.1, 1108.0], [65.2, 1114.0], [65.3, 1114.0], [65.4, 1116.0], [65.5, 1119.0], [65.6, 1120.0], [65.7, 1120.0], [65.8, 1122.0], [65.9, 1133.0], [66.0, 1134.0], [66.1, 1134.0], [66.2, 1135.0], [66.3, 1137.0], [66.4, 1143.0], [66.5, 1143.0], [66.6, 1146.0], [66.7, 1146.0], [66.8, 1146.0], [66.9, 1159.0], [67.0, 1161.0], [67.1, 1171.0], [67.2, 1171.0], [67.3, 1171.0], [67.4, 1175.0], [67.5, 1177.0], [67.6, 1177.0], [67.7, 1179.0], [67.8, 1185.0], [67.9, 1209.0], [68.0, 1209.0], [68.1, 1214.0], [68.2, 1214.0], [68.3, 1217.0], [68.4, 1217.0], [68.5, 1229.0], [68.6, 1241.0], [68.7, 1241.0], [68.8, 1246.0], [68.9, 1249.0], [69.0, 1251.0], [69.1, 1251.0], [69.2, 1256.0], [69.3, 1257.0], [69.4, 1260.0], [69.5, 1260.0], [69.6, 1264.0], [69.7, 1272.0], [69.8, 1273.0], [69.9, 1273.0], [70.0, 1280.0], [70.1, 1288.0], [70.2, 1288.0], [70.3, 1288.0], [70.4, 1297.0], [70.5, 1298.0], [70.6, 1298.0], [70.7, 1298.0], [70.8, 1298.0], [70.9, 1306.0], [71.0, 1306.0], [71.1, 1306.0], [71.2, 1309.0], [71.3, 1312.0], [71.4, 1312.0], [71.5, 1321.0], [71.6, 1323.0], [71.7, 1323.0], [71.8, 1328.0], [71.9, 1332.0], [72.0, 1333.0], [72.1, 1333.0], [72.2, 1335.0], [72.3, 1335.0], [72.4, 1341.0], [72.5, 1341.0], [72.6, 1341.0], [72.7, 1343.0], [72.8, 1359.0], [72.9, 1359.0], [73.0, 1359.0], [73.1, 1376.0], [73.2, 1377.0], [73.3, 1377.0], [73.4, 1384.0], [73.5, 1408.0], [73.6, 1408.0], [73.7, 1409.0], [73.8, 1410.0], [73.9, 1410.0], [74.0, 1410.0], [74.1, 1414.0], [74.2, 1420.0], [74.3, 1424.0], [74.4, 1424.0], [74.5, 1427.0], [74.6, 1427.0], [74.7, 1428.0], [74.8, 1428.0], [74.9, 1429.0], [75.0, 1437.0], [75.1, 1437.0], [75.2, 1451.0], [75.3, 1457.0], [75.4, 1462.0], [75.5, 1462.0], [75.6, 1477.0], [75.7, 1477.0], [75.8, 1494.0], [75.9, 1494.0], [76.0, 1502.0], [76.1, 1523.0], [76.2, 1539.0], [76.3, 1539.0], [76.4, 1547.0], [76.5, 1555.0], [76.6, 1558.0], [76.7, 1558.0], [76.8, 1578.0], [76.9, 1583.0], [77.0, 1583.0], [77.1, 1586.0], [77.2, 1586.0], [77.3, 1591.0], [77.4, 1591.0], [77.5, 1598.0], [77.6, 1601.0], [77.7, 1604.0], [77.8, 1604.0], [77.9, 1615.0], [78.0, 1615.0], [78.1, 1619.0], [78.2, 1619.0], [78.3, 1633.0], [78.4, 1644.0], [78.5, 1644.0], [78.6, 1648.0], [78.7, 1650.0], [78.8, 1659.0], [78.9, 1659.0], [79.0, 1660.0], [79.1, 1685.0], [79.2, 1685.0], [79.3, 1685.0], [79.4, 1686.0], [79.5, 1701.0], [79.6, 1704.0], [79.7, 1704.0], [79.8, 1718.0], [79.9, 1765.0], [80.0, 1782.0], [80.1, 1782.0], [80.2, 1783.0], [80.3, 1804.0], [80.4, 1804.0], [80.5, 1807.0], [80.6, 1825.0], [80.7, 1835.0], [80.8, 1835.0], [80.9, 1862.0], [81.0, 1878.0], [81.1, 1904.0], [81.2, 1904.0], [81.3, 1908.0], [81.4, 1934.0], [81.5, 1943.0], [81.6, 1943.0], [81.7, 1959.0], [81.8, 1962.0], [81.9, 1962.0], [82.0, 1988.0], [82.1, 1998.0], [82.2, 2006.0], [82.3, 2006.0], [82.4, 2019.0], [82.5, 2036.0], [82.6, 2072.0], [82.7, 2072.0], [82.8, 2073.0], [82.9, 2086.0], [83.0, 2150.0], [83.1, 2150.0], [83.2, 2151.0], [83.3, 2160.0], [83.4, 2160.0], [83.5, 2178.0], [83.6, 2210.0], [83.7, 2210.0], [83.8, 2210.0], [83.9, 2222.0], [84.0, 2279.0], [84.1, 2293.0], [84.2, 2293.0], [84.3, 2298.0], [84.4, 2334.0], [84.5, 2367.0], [84.6, 2367.0], [84.7, 2372.0], [84.8, 2402.0], [84.9, 2492.0], [85.0, 2492.0], [85.1, 2536.0], [85.2, 2552.0], [85.3, 2552.0], [85.4, 2576.0], [85.5, 2587.0], [85.6, 2627.0], [85.7, 2627.0], [85.8, 2632.0], [85.9, 2642.0], [86.0, 2655.0], [86.1, 2655.0], [86.2, 2731.0], [86.3, 2733.0], [86.4, 2752.0], [86.5, 2752.0], [86.6, 2760.0], [86.7, 2769.0], [86.8, 2769.0], [86.9, 2821.0], [87.0, 2830.0], [87.1, 2957.0], [87.2, 2957.0], [87.3, 2971.0], [87.4, 3022.0], [87.5, 3109.0], [87.6, 3109.0], [87.7, 3192.0], [87.8, 3220.0], [87.9, 3324.0], [88.0, 3324.0], [88.1, 3378.0], [88.2, 3424.0], [88.3, 3464.0], [88.4, 3464.0], [88.5, 3722.0], [88.6, 3933.0], [88.7, 3933.0], [88.8, 3936.0], [88.9, 4145.0], [89.0, 4336.0], [89.1, 4336.0], [89.2, 4461.0], [89.3, 4584.0], [89.4, 4860.0], [89.5, 4860.0], [89.6, 5877.0], [89.7, 7065.0], [89.8, 7916.0], [89.9, 7916.0], [90.0, 10363.0], [90.1, 11674.0], [90.2, 11674.0], [90.3, 25644.0], [90.4, 33706.0], [90.5, 33767.0], [90.6, 33767.0], [90.7, 39458.0], [90.8, 42790.0], [90.9, 44242.0], [91.0, 44242.0], [91.1, 51352.0], [91.2, 52506.0], [91.3, 53552.0], [91.4, 53552.0], [91.5, 55592.0], [91.6, 56706.0], [91.7, 56706.0], [91.8, 59665.0], [91.9, 63210.0], [92.0, 64140.0], [92.1, 64140.0], [92.2, 67665.0], [92.3, 70237.0], [92.4, 71013.0], [92.5, 71013.0], [92.6, 74083.0], [92.7, 74380.0], [92.8, 75061.0], [92.9, 75061.0], [93.0, 75386.0], [93.1, 75472.0], [93.2, 75475.0], [93.3, 75475.0], [93.4, 75636.0], [93.5, 76246.0], [93.6, 76246.0], [93.7, 76407.0], [93.8, 76410.0], [93.9, 76516.0], [94.0, 76516.0], [94.1, 76638.0], [94.2, 76724.0], [94.3, 76943.0], [94.4, 76943.0], [94.5, 77173.0], [94.6, 78942.0], [94.7, 80059.0], [94.8, 80059.0], [94.9, 85423.0], [95.0, 86875.0], [95.1, 86875.0], [95.2, 88199.0], [95.3, 88369.0], [95.4, 88385.0], [95.5, 88385.0], [95.6, 90527.0], [95.7, 90961.0], [95.8, 93511.0], [95.9, 93511.0], [96.0, 94136.0], [96.1, 103333.0], [96.2, 104334.0], [96.3, 104334.0], [96.4, 104595.0], [96.5, 115683.0], [96.6, 117895.0], [96.7, 117895.0], [96.8, 139821.0], [96.9, 142156.0], [97.0, 142156.0], [97.1, 143675.0], [97.2, 145080.0], [97.3, 145337.0], [97.4, 145337.0], [97.5, 146454.0], [97.6, 148932.0], [97.7, 149182.0], [97.8, 149182.0], [97.9, 149569.0], [98.0, 149617.0], [98.1, 152469.0], [98.2, 152469.0], [98.3, 176786.0], [98.4, 180728.0], [98.5, 180728.0], [98.6, 203127.0], [98.7, 217192.0], [98.8, 219974.0], [98.9, 219974.0], [99.0, 222935.0], [99.1, 225262.0], [99.2, 230132.0], [99.3, 230132.0], [99.4, 230467.0], [99.5, 289401.0], [99.6, 291727.0], [99.7, 291727.0], [99.8, 296594.0], [99.9, 296662.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 84.0, "series": [{"data": [[146400.0, 1.0], [149600.0, 1.0], [230400.0, 1.0], [148900.0, 1.0], [74300.0, 1.0], [77100.0, 1.0], [76700.0, 1.0], [88300.0, 2.0], [93500.0, 1.0], [104300.0, 1.0], [145000.0, 1.0], [100.0, 1.0], [33700.0, 2.0], [149100.0, 1.0], [42700.0, 1.0], [200.0, 29.0], [51300.0, 1.0], [52500.0, 1.0], [53500.0, 1.0], [217100.0, 1.0], [55500.0, 1.0], [56700.0, 1.0], [64100.0, 1.0], [71000.0, 1.0], [70200.0, 1.0], [300.0, 57.0], [75000.0, 1.0], [76600.0, 1.0], [76200.0, 1.0], [75400.0, 2.0], [296600.0, 1.0], [85400.0, 1.0], [400.0, 84.0], [117800.0, 1.0], [500.0, 55.0], [143600.0, 1.0], [600.0, 73.0], [152400.0, 1.0], [700.0, 65.0], [800.0, 39.0], [225200.0, 1.0], [900.0, 32.0], [1000.0, 39.0], [1100.0, 25.0], [1200.0, 22.0], [1300.0, 19.0], [1400.0, 18.0], [1500.0, 12.0], [1600.0, 14.0], [1700.0, 6.0], [1800.0, 6.0], [1900.0, 8.0], [2000.0, 6.0], [2100.0, 4.0], [142100.0, 1.0], [145300.0, 1.0], [2200.0, 6.0], [2300.0, 3.0], [2400.0, 2.0], [2500.0, 4.0], [2600.0, 4.0], [2800.0, 2.0], [2700.0, 5.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 2.0], [3300.0, 2.0], [3200.0, 1.0], [3400.0, 2.0], [222900.0, 1.0], [230100.0, 1.0], [3700.0, 1.0], [3900.0, 2.0], [4100.0, 1.0], [4300.0, 1.0], [4400.0, 1.0], [4500.0, 1.0], [76900.0, 1.0], [75300.0, 1.0], [76500.0, 1.0], [4800.0, 1.0], [78900.0, 1.0], [88100.0, 1.0], [90500.0, 1.0], [94100.0, 1.0], [90900.0, 1.0], [5800.0, 1.0], [103300.0, 1.0], [104500.0, 1.0], [7000.0, 1.0], [7900.0, 1.0], [139800.0, 1.0], [291700.0, 1.0], [296500.0, 1.0], [10300.0, 1.0], [11600.0, 1.0], [25600.0, 1.0], [149500.0, 1.0], [39400.0, 1.0], [176700.0, 1.0], [44200.0, 1.0], [180700.0, 1.0], [203100.0, 1.0], [219900.0, 1.0], [59600.0, 1.0], [63200.0, 1.0], [67600.0, 1.0], [289400.0, 1.0], [75600.0, 1.0], [74000.0, 1.0], [76400.0, 2.0], [80000.0, 1.0], [86800.0, 1.0], [115600.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 296600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 171.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 387.0, "series": [{"data": [[0.0, 171.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 387.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 177.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.83969465648855, "minX": 1.60248852E12, "maxY": 10.0, "series": [{"data": [[1.60248906E12, 10.0], [1.60248936E12, 10.0], [1.60248942E12, 9.83969465648855], [1.60248876E12, 10.0], [1.6024893E12, 10.0], [1.60248864E12, 10.0], [1.6024887E12, 10.0], [1.602489E12, 10.0], [1.60248858E12, 10.0], [1.60248888E12, 10.0], [1.60248894E12, 10.0], [1.60248924E12, 10.0], [1.60248882E12, 10.0], [1.60248912E12, 10.0], [1.60248918E12, 10.0], [1.60248852E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248942E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 340.0, "minX": 1.0, "maxY": 12255.53168044075, "series": [{"data": [[8.0, 340.0], [4.0, 702.0], [2.0, 2298.0], [1.0, 804.0], [9.0, 456.0], [10.0, 12255.53168044075], [3.0, 1015.0], [7.0, 1050.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.942857142857145, 12117.389115646238]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7.783333333333333, "minX": 1.60248852E12, "maxY": 640146.8833333333, "series": [{"data": [[1.60248906E12, 345.48333333333335], [1.60248936E12, 162683.6], [1.60248942E12, 578559.1833333333], [1.60248876E12, 1084.6], [1.6024893E12, 30797.933333333334], [1.60248864E12, 58622.48333333333], [1.6024887E12, 964.0], [1.602489E12, 16520.9], [1.60248858E12, 345.48333333333335], [1.60248888E12, 166234.95], [1.60248894E12, 640146.8833333333], [1.60248924E12, 9880.016666666666], [1.60248882E12, 34032.96666666667], [1.60248912E12, 1052.5], [1.60248918E12, 1201.8], [1.60248852E12, 53282.183333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60248906E12, 7.783333333333333], [1.60248936E12, 525.65], [1.60248942E12, 2026.9833333333333], [1.60248876E12, 43.93333333333333], [1.6024893E12, 70.45], [1.60248864E12, 70.26666666666667], [1.6024887E12, 43.916666666666664], [1.602489E12, 62.65], [1.60248858E12, 7.8], [1.60248888E12, 315.1333333333333], [1.60248894E12, 2129.1666666666665], [1.60248924E12, 73.18333333333334], [1.60248882E12, 103.16666666666667], [1.60248912E12, 30.233333333333334], [1.60248918E12, 58.55], [1.60248852E12, 125.66666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248942E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 954.614503816794, "minX": 1.60248852E12, "maxY": 132727.5, "series": [{"data": [[1.60248906E12, 75472.0], [1.60248936E12, 18278.77611940298], [1.60248942E12, 954.614503816794], [1.60248876E12, 132727.5], [1.6024893E12, 72546.22222222222], [1.60248864E12, 76587.77777777778], [1.6024887E12, 41749.66666666667], [1.602489E12, 57666.50000000001], [1.60248858E12, 33706.0], [1.60248888E12, 35654.27500000002], [1.60248894E12, 981.316363636364], [1.60248924E12, 118659.20000000001], [1.60248882E12, 48031.307692307695], [1.60248912E12, 115257.75], [1.60248918E12, 59561.75], [1.60248852E12, 1709.8750000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248942E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 926.645038167939, "minX": 1.60248852E12, "maxY": 132727.5, "series": [{"data": [[1.60248906E12, 75472.0], [1.60248936E12, 18272.10447761195], [1.60248942E12, 926.645038167939], [1.60248876E12, 132727.5], [1.6024893E12, 72544.44444444444], [1.60248864E12, 76585.33333333333], [1.6024887E12, 41749.33333333333], [1.602489E12, 57643.375], [1.60248858E12, 33706.0], [1.60248888E12, 35636.174999999996], [1.60248894E12, 955.2690909090903], [1.60248924E12, 118658.7], [1.60248882E12, 48030.15384615385], [1.60248912E12, 115257.75], [1.60248918E12, 59561.49999999999], [1.60248852E12, 1672.6250000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248942E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8625954198473283, "minX": 1.60248852E12, "maxY": 6.222222222222222, "series": [{"data": [[1.60248906E12, 1.0], [1.60248936E12, 0.880597014925373], [1.60248942E12, 0.8625954198473283], [1.60248876E12, 1.5], [1.6024893E12, 1.2222222222222223], [1.60248864E12, 6.222222222222222], [1.6024887E12, 1.1666666666666665], [1.602489E12, 1.125], [1.60248858E12, 2.0], [1.60248888E12, 1.1750000000000003], [1.60248894E12, 0.9309090909090909], [1.60248924E12, 1.4], [1.60248882E12, 1.0769230769230769], [1.60248912E12, 1.25], [1.60248918E12, 1.5], [1.60248852E12, 4.6875]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248942E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60248852E12, "maxY": 296662.0, "series": [{"data": [[1.60248906E12, 75472.0], [1.60248936E12, 149182.0], [1.60248942E12, 4860.0], [1.60248876E12, 230467.0], [1.6024893E12, 222935.0], [1.60248864E12, 94136.0], [1.6024887E12, 88369.0], [1.602489E12, 77173.0], [1.60248858E12, 33706.0], [1.60248888E12, 291727.0], [1.60248894E12, 4145.0], [1.60248924E12, 296662.0], [1.60248882E12, 225262.0], [1.60248912E12, 180728.0], [1.60248918E12, 146454.0], [1.60248852E12, 3464.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60248906E12, 75472.0], [1.60248936E12, 244.0], [1.60248942E12, 282.77099918484686], [1.60248876E12, 237.0], [1.6024893E12, 365.0], [1.60248864E12, 1104.0], [1.6024887E12, 215.0], [1.602489E12, 225.0], [1.60248858E12, 33706.0], [1.60248888E12, 350.0], [1.60248894E12, 224.90399960517883], [1.60248924E12, 225.0], [1.60248882E12, 245.0], [1.60248912E12, 184.0], [1.60248918E12, 243.0], [1.60248852E12, 280.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60248906E12, 75472.0], [1.60248936E12, 244.0], [1.60248942E12, 285.8481003260612], [1.60248876E12, 237.0], [1.6024893E12, 365.0], [1.60248864E12, 1104.0], [1.6024887E12, 215.0], [1.602489E12, 225.0], [1.60248858E12, 33706.0], [1.60248888E12, 350.0], [1.60248894E12, 226.39440015792846], [1.60248924E12, 225.0], [1.60248882E12, 245.0], [1.60248912E12, 184.0], [1.60248918E12, 243.0], [1.60248852E12, 280.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60248906E12, 75472.0], [1.60248936E12, 244.0], [1.60248942E12, 284.4804995924234], [1.60248876E12, 237.0], [1.6024893E12, 365.0], [1.60248864E12, 1104.0], [1.6024887E12, 215.0], [1.602489E12, 225.0], [1.60248858E12, 33706.0], [1.60248888E12, 350.0], [1.60248894E12, 225.73199980258943], [1.60248924E12, 225.0], [1.60248882E12, 245.0], [1.60248912E12, 184.0], [1.60248918E12, 243.0], [1.60248852E12, 280.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60248906E12, 75472.0], [1.60248936E12, 244.0], [1.60248942E12, 228.0], [1.60248876E12, 237.0], [1.6024893E12, 365.0], [1.60248864E12, 1104.0], [1.6024887E12, 215.0], [1.602489E12, 225.0], [1.60248858E12, 33706.0], [1.60248888E12, 350.0], [1.60248894E12, 217.0], [1.60248924E12, 225.0], [1.60248882E12, 245.0], [1.60248912E12, 184.0], [1.60248918E12, 243.0], [1.60248852E12, 280.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60248906E12, 75472.0], [1.60248936E12, 791.0], [1.60248942E12, 725.5], [1.60248876E12, 140988.5], [1.6024893E12, 76516.0], [1.60248864E12, 88385.0], [1.6024887E12, 43027.0], [1.602489E12, 76328.0], [1.60248858E12, 33706.0], [1.60248888E12, 1180.0], [1.60248894E12, 772.0], [1.60248924E12, 77570.5], [1.60248882E12, 1377.0], [1.60248912E12, 140059.5], [1.60248918E12, 54576.5], [1.60248852E12, 1533.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248942E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 381.0, "minX": 1.0, "maxY": 48897.0, "series": [{"data": [[2.0, 1910.0], [8.0, 935.5], [9.0, 775.0], [10.0, 826.0], [11.0, 1058.0], [3.0, 1044.0], [12.0, 668.0], [13.0, 863.0], [14.0, 679.0], [15.0, 619.0], [1.0, 1377.0], [4.0, 914.0], [16.0, 381.0], [17.0, 743.0], [18.0, 524.5], [5.0, 947.0], [20.0, 732.5], [6.0, 48897.0], [7.0, 814.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 381.0, "minX": 1.0, "maxY": 48896.5, "series": [{"data": [[2.0, 1905.5], [8.0, 934.0], [9.0, 757.5], [10.0, 825.0], [11.0, 1028.5], [3.0, 1041.0], [12.0, 667.5], [13.0, 863.0], [14.0, 677.5], [15.0, 619.0], [1.0, 1371.0], [4.0, 910.5], [16.0, 381.0], [17.0, 743.0], [18.0, 524.5], [5.0, 946.0], [20.0, 667.5], [6.0, 48896.5], [7.0, 813.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60248852E12, "maxY": 4.583333333333333, "series": [{"data": [[1.60248906E12, 0.016666666666666666], [1.60248936E12, 1.1166666666666667], [1.60248942E12, 4.2], [1.60248876E12, 0.1], [1.6024893E12, 0.15], [1.60248864E12, 0.15], [1.6024887E12, 0.1], [1.602489E12, 0.13333333333333333], [1.60248858E12, 0.016666666666666666], [1.60248888E12, 0.6666666666666666], [1.60248894E12, 4.583333333333333], [1.60248924E12, 0.16666666666666666], [1.60248882E12, 0.21666666666666667], [1.60248912E12, 0.06666666666666667], [1.60248918E12, 0.13333333333333333], [1.60248852E12, 0.43333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248942E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60248852E12, "maxY": 4.583333333333333, "series": [{"data": [[1.60248906E12, 0.016666666666666666], [1.60248936E12, 1.1166666666666667], [1.60248942E12, 4.366666666666666], [1.60248876E12, 0.1], [1.6024893E12, 0.15], [1.60248864E12, 0.15], [1.6024887E12, 0.1], [1.602489E12, 0.13333333333333333], [1.60248858E12, 0.016666666666666666], [1.60248888E12, 0.6666666666666666], [1.60248894E12, 4.583333333333333], [1.60248924E12, 0.16666666666666666], [1.60248882E12, 0.21666666666666667], [1.60248912E12, 0.06666666666666667], [1.60248918E12, 0.13333333333333333], [1.60248852E12, 0.26666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248942E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60248852E12, "maxY": 4.583333333333333, "series": [{"data": [[1.60248906E12, 0.016666666666666666], [1.60248936E12, 1.1166666666666667], [1.60248942E12, 4.366666666666666], [1.60248876E12, 0.1], [1.6024893E12, 0.15], [1.60248864E12, 0.15], [1.6024887E12, 0.1], [1.602489E12, 0.13333333333333333], [1.60248858E12, 0.016666666666666666], [1.60248888E12, 0.6666666666666666], [1.60248894E12, 4.583333333333333], [1.60248924E12, 0.16666666666666666], [1.60248882E12, 0.21666666666666667], [1.60248912E12, 0.06666666666666667], [1.60248918E12, 0.13333333333333333], [1.60248852E12, 0.26666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248942E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60248852E12, "maxY": 4.583333333333333, "series": [{"data": [[1.60248906E12, 0.016666666666666666], [1.60248936E12, 1.1166666666666667], [1.60248942E12, 4.366666666666666], [1.60248876E12, 0.1], [1.6024893E12, 0.15], [1.60248864E12, 0.15], [1.6024887E12, 0.1], [1.602489E12, 0.13333333333333333], [1.60248858E12, 0.016666666666666666], [1.60248888E12, 0.6666666666666666], [1.60248894E12, 4.583333333333333], [1.60248924E12, 0.16666666666666666], [1.60248882E12, 0.21666666666666667], [1.60248912E12, 0.06666666666666667], [1.60248918E12, 0.13333333333333333], [1.60248852E12, 0.26666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248942E12, "title": "Total Transactions Per Second"}},
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

