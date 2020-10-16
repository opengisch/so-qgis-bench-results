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
        data: {"result": {"minY": 191.0, "minX": 0.0, "maxY": 3531.0, "series": [{"data": [[0.0, 191.0], [0.1, 191.0], [0.2, 200.0], [0.3, 204.0], [0.4, 204.0], [0.5, 205.0], [0.6, 212.0], [0.7, 215.0], [0.8, 215.0], [0.9, 217.0], [1.0, 219.0], [1.1, 223.0], [1.2, 223.0], [1.3, 225.0], [1.4, 225.0], [1.5, 227.0], [1.6, 227.0], [1.7, 230.0], [1.8, 231.0], [1.9, 231.0], [2.0, 231.0], [2.1, 234.0], [2.2, 243.0], [2.3, 243.0], [2.4, 243.0], [2.5, 245.0], [2.6, 249.0], [2.7, 249.0], [2.8, 250.0], [2.9, 251.0], [3.0, 252.0], [3.1, 252.0], [3.2, 254.0], [3.3, 255.0], [3.4, 255.0], [3.5, 256.0], [3.6, 257.0], [3.7, 259.0], [3.8, 259.0], [3.9, 262.0], [4.0, 262.0], [4.1, 265.0], [4.2, 265.0], [4.3, 267.0], [4.4, 278.0], [4.5, 278.0], [4.6, 278.0], [4.7, 278.0], [4.8, 278.0], [4.9, 279.0], [5.0, 279.0], [5.1, 280.0], [5.2, 281.0], [5.3, 281.0], [5.4, 284.0], [5.5, 285.0], [5.6, 286.0], [5.7, 286.0], [5.8, 286.0], [5.9, 287.0], [6.0, 291.0], [6.1, 291.0], [6.2, 294.0], [6.3, 295.0], [6.4, 295.0], [6.5, 295.0], [6.6, 298.0], [6.7, 300.0], [6.8, 300.0], [6.9, 303.0], [7.0, 304.0], [7.1, 309.0], [7.2, 309.0], [7.3, 314.0], [7.4, 315.0], [7.5, 320.0], [7.6, 320.0], [7.7, 320.0], [7.8, 334.0], [7.9, 338.0], [8.0, 338.0], [8.1, 347.0], [8.2, 348.0], [8.3, 349.0], [8.4, 349.0], [8.5, 349.0], [8.6, 353.0], [8.7, 353.0], [8.8, 355.0], [8.9, 355.0], [9.0, 357.0], [9.1, 357.0], [9.2, 357.0], [9.3, 359.0], [9.4, 362.0], [9.5, 362.0], [9.6, 362.0], [9.7, 362.0], [9.8, 363.0], [9.9, 363.0], [10.0, 364.0], [10.1, 365.0], [10.2, 365.0], [10.3, 367.0], [10.4, 369.0], [10.5, 369.0], [10.6, 369.0], [10.7, 370.0], [10.8, 370.0], [10.9, 372.0], [11.0, 372.0], [11.1, 379.0], [11.2, 380.0], [11.3, 382.0], [11.4, 382.0], [11.5, 382.0], [11.6, 383.0], [11.7, 383.0], [11.8, 383.0], [11.9, 384.0], [12.0, 389.0], [12.1, 389.0], [12.2, 393.0], [12.3, 395.0], [12.4, 399.0], [12.5, 399.0], [12.6, 400.0], [12.7, 402.0], [12.8, 404.0], [12.9, 404.0], [13.0, 406.0], [13.1, 407.0], [13.2, 407.0], [13.3, 407.0], [13.4, 409.0], [13.5, 411.0], [13.6, 411.0], [13.7, 413.0], [13.8, 417.0], [13.9, 420.0], [14.0, 420.0], [14.1, 422.0], [14.2, 430.0], [14.3, 432.0], [14.4, 432.0], [14.5, 432.0], [14.6, 432.0], [14.7, 432.0], [14.8, 432.0], [14.9, 433.0], [15.0, 433.0], [15.1, 433.0], [15.2, 434.0], [15.3, 435.0], [15.4, 435.0], [15.5, 435.0], [15.6, 436.0], [15.7, 437.0], [15.8, 439.0], [15.9, 439.0], [16.0, 440.0], [16.1, 440.0], [16.2, 442.0], [16.3, 442.0], [16.4, 444.0], [16.5, 445.0], [16.6, 449.0], [16.7, 449.0], [16.8, 449.0], [16.9, 449.0], [17.0, 449.0], [17.1, 456.0], [17.2, 456.0], [17.3, 462.0], [17.4, 462.0], [17.5, 462.0], [17.6, 467.0], [17.7, 468.0], [17.8, 468.0], [17.9, 469.0], [18.0, 469.0], [18.1, 472.0], [18.2, 472.0], [18.3, 474.0], [18.4, 475.0], [18.5, 475.0], [18.6, 476.0], [18.7, 477.0], [18.8, 478.0], [18.9, 478.0], [19.0, 479.0], [19.1, 485.0], [19.2, 487.0], [19.3, 487.0], [19.4, 491.0], [19.5, 491.0], [19.6, 491.0], [19.7, 491.0], [19.8, 494.0], [19.9, 495.0], [20.0, 496.0], [20.1, 496.0], [20.2, 496.0], [20.3, 496.0], [20.4, 496.0], [20.5, 498.0], [20.6, 499.0], [20.7, 500.0], [20.8, 500.0], [20.9, 501.0], [21.0, 501.0], [21.1, 502.0], [21.2, 502.0], [21.3, 504.0], [21.4, 505.0], [21.5, 505.0], [21.6, 505.0], [21.7, 506.0], [21.8, 507.0], [21.9, 507.0], [22.0, 507.0], [22.1, 507.0], [22.2, 507.0], [22.3, 507.0], [22.4, 507.0], [22.5, 507.0], [22.6, 508.0], [22.7, 508.0], [22.8, 512.0], [22.9, 512.0], [23.0, 514.0], [23.1, 514.0], [23.2, 514.0], [23.3, 515.0], [23.4, 515.0], [23.5, 517.0], [23.6, 518.0], [23.7, 518.0], [23.8, 518.0], [23.9, 519.0], [24.0, 519.0], [24.1, 519.0], [24.2, 519.0], [24.3, 519.0], [24.4, 520.0], [24.5, 520.0], [24.6, 520.0], [24.7, 522.0], [24.8, 522.0], [24.9, 522.0], [25.0, 522.0], [25.1, 523.0], [25.2, 524.0], [25.3, 524.0], [25.4, 524.0], [25.5, 524.0], [25.6, 527.0], [25.7, 527.0], [25.8, 530.0], [25.9, 535.0], [26.0, 535.0], [26.1, 535.0], [26.2, 536.0], [26.3, 536.0], [26.4, 538.0], [26.5, 538.0], [26.6, 539.0], [26.7, 539.0], [26.8, 539.0], [26.9, 539.0], [27.0, 541.0], [27.1, 542.0], [27.2, 542.0], [27.3, 543.0], [27.4, 543.0], [27.5, 545.0], [27.6, 545.0], [27.7, 546.0], [27.8, 547.0], [27.9, 547.0], [28.0, 547.0], [28.1, 547.0], [28.2, 547.0], [28.3, 550.0], [28.4, 550.0], [28.5, 552.0], [28.6, 552.0], [28.7, 552.0], [28.8, 553.0], [28.9, 553.0], [29.0, 554.0], [29.1, 554.0], [29.2, 556.0], [29.3, 557.0], [29.4, 558.0], [29.5, 558.0], [29.6, 559.0], [29.7, 560.0], [29.8, 560.0], [29.9, 560.0], [30.0, 561.0], [30.1, 561.0], [30.2, 561.0], [30.3, 561.0], [30.4, 562.0], [30.5, 566.0], [30.6, 566.0], [30.7, 567.0], [30.8, 568.0], [30.9, 574.0], [31.0, 574.0], [31.1, 576.0], [31.2, 578.0], [31.3, 579.0], [31.4, 579.0], [31.5, 580.0], [31.6, 580.0], [31.7, 580.0], [31.8, 581.0], [31.9, 583.0], [32.0, 584.0], [32.1, 584.0], [32.2, 584.0], [32.3, 585.0], [32.4, 585.0], [32.5, 585.0], [32.6, 585.0], [32.7, 587.0], [32.8, 587.0], [32.9, 587.0], [33.0, 591.0], [33.1, 591.0], [33.2, 591.0], [33.3, 591.0], [33.4, 592.0], [33.5, 593.0], [33.6, 593.0], [33.7, 594.0], [33.8, 594.0], [33.9, 594.0], [34.0, 594.0], [34.1, 595.0], [34.2, 595.0], [34.3, 596.0], [34.4, 596.0], [34.5, 597.0], [34.6, 598.0], [34.7, 598.0], [34.8, 598.0], [34.9, 599.0], [35.0, 601.0], [35.1, 601.0], [35.2, 602.0], [35.3, 604.0], [35.4, 605.0], [35.5, 605.0], [35.6, 605.0], [35.7, 606.0], [35.8, 607.0], [35.9, 607.0], [36.0, 608.0], [36.1, 609.0], [36.2, 610.0], [36.3, 610.0], [36.4, 610.0], [36.5, 611.0], [36.6, 612.0], [36.7, 612.0], [36.8, 612.0], [36.9, 614.0], [37.0, 614.0], [37.1, 617.0], [37.2, 619.0], [37.3, 619.0], [37.4, 619.0], [37.5, 620.0], [37.6, 621.0], [37.7, 622.0], [37.8, 622.0], [37.9, 622.0], [38.0, 622.0], [38.1, 623.0], [38.2, 623.0], [38.3, 624.0], [38.4, 624.0], [38.5, 624.0], [38.6, 625.0], [38.7, 628.0], [38.8, 631.0], [38.9, 631.0], [39.0, 632.0], [39.1, 632.0], [39.2, 638.0], [39.3, 638.0], [39.4, 639.0], [39.5, 639.0], [39.6, 641.0], [39.7, 641.0], [39.8, 641.0], [39.9, 642.0], [40.0, 643.0], [40.1, 643.0], [40.2, 645.0], [40.3, 647.0], [40.4, 647.0], [40.5, 649.0], [40.6, 650.0], [40.7, 654.0], [40.8, 654.0], [40.9, 656.0], [41.0, 661.0], [41.1, 662.0], [41.2, 662.0], [41.3, 662.0], [41.4, 665.0], [41.5, 665.0], [41.6, 665.0], [41.7, 667.0], [41.8, 667.0], [41.9, 667.0], [42.0, 668.0], [42.1, 669.0], [42.2, 669.0], [42.3, 669.0], [42.4, 670.0], [42.5, 672.0], [42.6, 676.0], [42.7, 676.0], [42.8, 680.0], [42.9, 680.0], [43.0, 681.0], [43.1, 681.0], [43.2, 683.0], [43.3, 684.0], [43.4, 684.0], [43.5, 684.0], [43.6, 687.0], [43.7, 687.0], [43.8, 687.0], [43.9, 687.0], [44.0, 687.0], [44.1, 687.0], [44.2, 687.0], [44.3, 687.0], [44.4, 690.0], [44.5, 690.0], [44.6, 690.0], [44.7, 693.0], [44.8, 695.0], [44.9, 697.0], [45.0, 697.0], [45.1, 697.0], [45.2, 698.0], [45.3, 698.0], [45.4, 698.0], [45.5, 698.0], [45.6, 700.0], [45.7, 700.0], [45.8, 700.0], [45.9, 707.0], [46.0, 712.0], [46.1, 712.0], [46.2, 716.0], [46.3, 720.0], [46.4, 721.0], [46.5, 721.0], [46.6, 721.0], [46.7, 725.0], [46.8, 725.0], [46.9, 729.0], [47.0, 737.0], [47.1, 739.0], [47.2, 739.0], [47.3, 740.0], [47.4, 742.0], [47.5, 742.0], [47.6, 742.0], [47.7, 743.0], [47.8, 743.0], [47.9, 747.0], [48.0, 747.0], [48.1, 749.0], [48.2, 749.0], [48.3, 752.0], [48.4, 752.0], [48.5, 752.0], [48.6, 756.0], [48.7, 756.0], [48.8, 756.0], [48.9, 757.0], [49.0, 758.0], [49.1, 758.0], [49.2, 763.0], [49.3, 763.0], [49.4, 764.0], [49.5, 764.0], [49.6, 764.0], [49.7, 765.0], [49.8, 766.0], [49.9, 766.0], [50.0, 768.0], [50.1, 769.0], [50.2, 769.0], [50.3, 769.0], [50.4, 770.0], [50.5, 772.0], [50.6, 772.0], [50.7, 772.0], [50.8, 773.0], [50.9, 774.0], [51.0, 774.0], [51.1, 775.0], [51.2, 777.0], [51.3, 777.0], [51.4, 777.0], [51.5, 781.0], [51.6, 782.0], [51.7, 782.0], [51.8, 782.0], [51.9, 785.0], [52.0, 785.0], [52.1, 785.0], [52.2, 787.0], [52.3, 788.0], [52.4, 790.0], [52.5, 790.0], [52.6, 795.0], [52.7, 795.0], [52.8, 797.0], [52.9, 797.0], [53.0, 800.0], [53.1, 805.0], [53.2, 805.0], [53.3, 805.0], [53.4, 812.0], [53.5, 815.0], [53.6, 815.0], [53.7, 816.0], [53.8, 816.0], [53.9, 816.0], [54.0, 816.0], [54.1, 822.0], [54.2, 824.0], [54.3, 824.0], [54.4, 824.0], [54.5, 826.0], [54.6, 827.0], [54.7, 830.0], [54.8, 830.0], [54.9, 831.0], [55.0, 831.0], [55.1, 831.0], [55.2, 832.0], [55.3, 835.0], [55.4, 836.0], [55.5, 836.0], [55.6, 844.0], [55.7, 844.0], [55.8, 846.0], [55.9, 846.0], [56.0, 851.0], [56.1, 852.0], [56.2, 854.0], [56.3, 854.0], [56.4, 855.0], [56.5, 859.0], [56.6, 860.0], [56.7, 860.0], [56.8, 862.0], [56.9, 862.0], [57.0, 862.0], [57.1, 866.0], [57.2, 868.0], [57.3, 868.0], [57.4, 868.0], [57.5, 869.0], [57.6, 869.0], [57.7, 871.0], [57.8, 871.0], [57.9, 871.0], [58.0, 871.0], [58.1, 874.0], [58.2, 874.0], [58.3, 878.0], [58.4, 879.0], [58.5, 879.0], [58.6, 880.0], [58.7, 883.0], [58.8, 883.0], [58.9, 883.0], [59.0, 884.0], [59.1, 886.0], [59.2, 889.0], [59.3, 889.0], [59.4, 890.0], [59.5, 893.0], [59.6, 893.0], [59.7, 893.0], [59.8, 894.0], [59.9, 895.0], [60.0, 898.0], [60.1, 898.0], [60.2, 900.0], [60.3, 900.0], [60.4, 900.0], [60.5, 903.0], [60.6, 905.0], [60.7, 910.0], [60.8, 910.0], [60.9, 911.0], [61.0, 914.0], [61.1, 914.0], [61.2, 914.0], [61.3, 916.0], [61.4, 916.0], [61.5, 916.0], [61.6, 916.0], [61.7, 917.0], [61.8, 919.0], [61.9, 919.0], [62.0, 924.0], [62.1, 926.0], [62.2, 929.0], [62.3, 929.0], [62.4, 929.0], [62.5, 931.0], [62.6, 931.0], [62.7, 931.0], [62.8, 932.0], [62.9, 932.0], [63.0, 934.0], [63.1, 934.0], [63.2, 934.0], [63.3, 934.0], [63.4, 934.0], [63.5, 934.0], [63.6, 936.0], [63.7, 939.0], [63.8, 939.0], [63.9, 939.0], [64.0, 942.0], [64.1, 943.0], [64.2, 943.0], [64.3, 944.0], [64.4, 944.0], [64.5, 945.0], [64.6, 945.0], [64.7, 948.0], [64.8, 948.0], [64.9, 959.0], [65.0, 959.0], [65.1, 960.0], [65.2, 960.0], [65.3, 960.0], [65.4, 960.0], [65.5, 963.0], [65.6, 966.0], [65.7, 966.0], [65.8, 966.0], [65.9, 966.0], [66.0, 967.0], [66.1, 967.0], [66.2, 968.0], [66.3, 971.0], [66.4, 972.0], [66.5, 972.0], [66.6, 972.0], [66.7, 973.0], [66.8, 973.0], [66.9, 974.0], [67.0, 975.0], [67.1, 978.0], [67.2, 978.0], [67.3, 978.0], [67.4, 978.0], [67.5, 980.0], [67.6, 980.0], [67.7, 981.0], [67.8, 985.0], [67.9, 985.0], [68.0, 985.0], [68.1, 986.0], [68.2, 987.0], [68.3, 987.0], [68.4, 987.0], [68.5, 988.0], [68.6, 988.0], [68.7, 988.0], [68.8, 990.0], [68.9, 991.0], [69.0, 991.0], [69.1, 991.0], [69.2, 992.0], [69.3, 994.0], [69.4, 998.0], [69.5, 998.0], [69.6, 1001.0], [69.7, 1004.0], [69.8, 1005.0], [69.9, 1005.0], [70.0, 1006.0], [70.1, 1009.0], [70.2, 1009.0], [70.3, 1010.0], [70.4, 1012.0], [70.5, 1013.0], [70.6, 1013.0], [70.7, 1018.0], [70.8, 1019.0], [70.9, 1020.0], [71.0, 1020.0], [71.1, 1020.0], [71.2, 1024.0], [71.3, 1024.0], [71.4, 1024.0], [71.5, 1025.0], [71.6, 1027.0], [71.7, 1027.0], [71.8, 1030.0], [71.9, 1031.0], [72.0, 1038.0], [72.1, 1038.0], [72.2, 1041.0], [72.3, 1045.0], [72.4, 1046.0], [72.5, 1046.0], [72.6, 1047.0], [72.7, 1051.0], [72.8, 1054.0], [72.9, 1054.0], [73.0, 1054.0], [73.1, 1056.0], [73.2, 1058.0], [73.3, 1058.0], [73.4, 1060.0], [73.5, 1061.0], [73.6, 1061.0], [73.7, 1061.0], [73.8, 1061.0], [73.9, 1062.0], [74.0, 1062.0], [74.1, 1062.0], [74.2, 1067.0], [74.3, 1070.0], [74.4, 1070.0], [74.5, 1071.0], [74.6, 1071.0], [74.7, 1071.0], [74.8, 1071.0], [74.9, 1073.0], [75.0, 1079.0], [75.1, 1079.0], [75.2, 1079.0], [75.3, 1081.0], [75.4, 1088.0], [75.5, 1088.0], [75.6, 1088.0], [75.7, 1089.0], [75.8, 1089.0], [75.9, 1089.0], [76.0, 1096.0], [76.1, 1098.0], [76.2, 1098.0], [76.3, 1098.0], [76.4, 1100.0], [76.5, 1104.0], [76.6, 1106.0], [76.7, 1106.0], [76.8, 1106.0], [76.9, 1108.0], [77.0, 1108.0], [77.1, 1108.0], [77.2, 1109.0], [77.3, 1110.0], [77.4, 1110.0], [77.5, 1111.0], [77.6, 1112.0], [77.7, 1115.0], [77.8, 1115.0], [77.9, 1117.0], [78.0, 1118.0], [78.1, 1118.0], [78.2, 1118.0], [78.3, 1118.0], [78.4, 1122.0], [78.5, 1122.0], [78.6, 1123.0], [78.7, 1123.0], [78.8, 1125.0], [78.9, 1125.0], [79.0, 1125.0], [79.1, 1126.0], [79.2, 1127.0], [79.3, 1127.0], [79.4, 1131.0], [79.5, 1132.0], [79.6, 1132.0], [79.7, 1132.0], [79.8, 1135.0], [79.9, 1135.0], [80.0, 1136.0], [80.1, 1136.0], [80.2, 1136.0], [80.3, 1137.0], [80.4, 1137.0], [80.5, 1137.0], [80.6, 1138.0], [80.7, 1142.0], [80.8, 1142.0], [80.9, 1149.0], [81.0, 1153.0], [81.1, 1154.0], [81.2, 1154.0], [81.3, 1155.0], [81.4, 1158.0], [81.5, 1158.0], [81.6, 1158.0], [81.7, 1160.0], [81.8, 1161.0], [81.9, 1161.0], [82.0, 1162.0], [82.1, 1164.0], [82.2, 1165.0], [82.3, 1165.0], [82.4, 1169.0], [82.5, 1172.0], [82.6, 1177.0], [82.7, 1177.0], [82.8, 1181.0], [82.9, 1182.0], [83.0, 1184.0], [83.1, 1184.0], [83.2, 1185.0], [83.3, 1187.0], [83.4, 1187.0], [83.5, 1188.0], [83.6, 1190.0], [83.7, 1193.0], [83.8, 1193.0], [83.9, 1194.0], [84.0, 1195.0], [84.1, 1195.0], [84.2, 1195.0], [84.3, 1197.0], [84.4, 1198.0], [84.5, 1198.0], [84.6, 1198.0], [84.7, 1199.0], [84.8, 1199.0], [84.9, 1207.0], [85.0, 1207.0], [85.1, 1207.0], [85.2, 1210.0], [85.3, 1210.0], [85.4, 1211.0], [85.5, 1211.0], [85.6, 1215.0], [85.7, 1215.0], [85.8, 1215.0], [85.9, 1216.0], [86.0, 1218.0], [86.1, 1218.0], [86.2, 1219.0], [86.3, 1229.0], [86.4, 1231.0], [86.5, 1231.0], [86.6, 1232.0], [86.7, 1233.0], [86.8, 1233.0], [86.9, 1235.0], [87.0, 1241.0], [87.1, 1245.0], [87.2, 1245.0], [87.3, 1246.0], [87.4, 1248.0], [87.5, 1249.0], [87.6, 1249.0], [87.7, 1250.0], [87.8, 1252.0], [87.9, 1252.0], [88.0, 1252.0], [88.1, 1255.0], [88.2, 1261.0], [88.3, 1262.0], [88.4, 1262.0], [88.5, 1263.0], [88.6, 1265.0], [88.7, 1265.0], [88.8, 1265.0], [88.9, 1265.0], [89.0, 1270.0], [89.1, 1270.0], [89.2, 1273.0], [89.3, 1275.0], [89.4, 1275.0], [89.5, 1275.0], [89.6, 1275.0], [89.7, 1277.0], [89.8, 1278.0], [89.9, 1278.0], [90.0, 1286.0], [90.1, 1291.0], [90.2, 1291.0], [90.3, 1292.0], [90.4, 1295.0], [90.5, 1295.0], [90.6, 1295.0], [90.7, 1297.0], [90.8, 1300.0], [90.9, 1300.0], [91.0, 1300.0], [91.1, 1311.0], [91.2, 1313.0], [91.3, 1315.0], [91.4, 1315.0], [91.5, 1315.0], [91.6, 1316.0], [91.7, 1316.0], [91.8, 1317.0], [91.9, 1317.0], [92.0, 1328.0], [92.1, 1328.0], [92.2, 1331.0], [92.3, 1331.0], [92.4, 1338.0], [92.5, 1338.0], [92.6, 1351.0], [92.7, 1352.0], [92.8, 1356.0], [92.9, 1356.0], [93.0, 1360.0], [93.1, 1362.0], [93.2, 1370.0], [93.3, 1370.0], [93.4, 1379.0], [93.5, 1384.0], [93.6, 1384.0], [93.7, 1391.0], [93.8, 1401.0], [93.9, 1403.0], [94.0, 1403.0], [94.1, 1405.0], [94.2, 1406.0], [94.3, 1407.0], [94.4, 1407.0], [94.5, 1420.0], [94.6, 1422.0], [94.7, 1424.0], [94.8, 1424.0], [94.9, 1427.0], [95.0, 1429.0], [95.1, 1429.0], [95.2, 1453.0], [95.3, 1455.0], [95.4, 1456.0], [95.5, 1456.0], [95.6, 1482.0], [95.7, 1485.0], [95.8, 1486.0], [95.9, 1486.0], [96.0, 1488.0], [96.1, 1503.0], [96.2, 1535.0], [96.3, 1535.0], [96.4, 1547.0], [96.5, 1569.0], [96.6, 1581.0], [96.7, 1581.0], [96.8, 1603.0], [96.9, 1612.0], [97.0, 1612.0], [97.1, 1621.0], [97.2, 1627.0], [97.3, 1680.0], [97.4, 1680.0], [97.5, 1741.0], [97.6, 1750.0], [97.7, 1774.0], [97.8, 1774.0], [97.9, 1862.0], [98.0, 1883.0], [98.1, 2453.0], [98.2, 2453.0], [98.3, 2527.0], [98.4, 2588.0], [98.5, 2588.0], [98.6, 2607.0], [98.7, 2642.0], [98.8, 2728.0], [98.9, 2728.0], [99.0, 2831.0], [99.1, 2856.0], [99.2, 2916.0], [99.3, 2916.0], [99.4, 3018.0], [99.5, 3310.0], [99.6, 3406.0], [99.7, 3406.0], [99.8, 3476.0], [99.9, 3531.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 105.0, "series": [{"data": [[600.0, 78.0], [700.0, 54.0], [800.0, 53.0], [900.0, 69.0], [1000.0, 50.0], [1100.0, 63.0], [1200.0, 43.0], [1300.0, 22.0], [1400.0, 17.0], [1500.0, 5.0], [1600.0, 5.0], [100.0, 1.0], [1700.0, 3.0], [1800.0, 2.0], [2400.0, 1.0], [2500.0, 2.0], [2600.0, 2.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 48.0], [3300.0, 1.0], [3400.0, 2.0], [3500.0, 1.0], [300.0, 43.0], [400.0, 60.0], [500.0, 105.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 29.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 553.0, "series": [{"data": [[0.0, 153.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 553.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 29.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.930340557275542, "minX": 1.60280124E12, "maxY": 10.0, "series": [{"data": [[1.6028013E12, 9.930340557275542], [1.60280124E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028013E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 262.0, "minX": 1.0, "maxY": 978.0, "series": [{"data": [[8.0, 262.0], [4.0, 547.0], [2.0, 968.0], [1.0, 934.0], [9.0, 411.0], [10.0, 836.5950413223142], [5.0, 620.0], [6.0, 543.0], [3.0, 978.0], [7.0, 369.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 834.0136054421771]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 673.5333333333333, "minX": 1.60280124E12, "maxY": 1488609.4833333334, "series": [{"data": [[1.6028013E12, 1488609.4833333334], [1.60280124E12, 347146.43333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6028013E12, 4849.5], [1.60280124E12, 673.5333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028013E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 802.9164086687302, "minX": 1.60280124E12, "maxY": 1059.730337078652, "series": [{"data": [[1.6028013E12, 802.9164086687302], [1.60280124E12, 1059.730337078652]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028013E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 801.7321981424147, "minX": 1.60280124E12, "maxY": 1058.2696629213483, "series": [{"data": [[1.6028013E12, 801.7321981424147], [1.60280124E12, 1058.2696629213483]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028013E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.015479876160990714, "minX": 1.60280124E12, "maxY": 0.9887640449438206, "series": [{"data": [[1.6028013E12, 0.015479876160990714], [1.60280124E12, 0.9887640449438206]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028013E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 191.0, "minX": 1.60280124E12, "maxY": 3531.0, "series": [{"data": [[1.6028013E12, 2916.0], [1.60280124E12, 3531.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6028013E12, 222.29199938297273], [1.60280124E12, 200.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6028013E12, 223.81060012340546], [1.60280124E12, 200.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6028013E12, 223.29299984574317], [1.60280124E12, 200.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6028013E12, 191.0], [1.60280124E12, 200.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6028013E12, 764.5], [1.60280124E12, 782.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028013E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 542.0, "minX": 7.0, "maxY": 986.0, "series": [{"data": [[8.0, 986.0], [9.0, 743.0], [10.0, 986.0], [11.0, 911.0], [12.0, 924.0], [13.0, 869.0], [14.0, 652.0], [15.0, 654.0], [16.0, 589.0], [17.0, 602.0], [18.0, 542.0], [19.0, 581.0], [7.0, 980.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 540.5, "minX": 7.0, "maxY": 985.0, "series": [{"data": [[8.0, 984.0], [9.0, 743.0], [10.0, 985.0], [11.0, 910.0], [12.0, 924.0], [13.0, 869.0], [14.0, 652.0], [15.0, 653.0], [16.0, 588.0], [17.0, 595.0], [18.0, 540.5], [19.0, 580.0], [7.0, 979.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.65, "minX": 1.60280124E12, "maxY": 10.6, "series": [{"data": [[1.6028013E12, 10.6], [1.60280124E12, 1.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028013E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.4833333333333334, "minX": 1.60280124E12, "maxY": 10.766666666666667, "series": [{"data": [[1.6028013E12, 10.766666666666667], [1.60280124E12, 1.4833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028013E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.4833333333333334, "minX": 1.60280124E12, "maxY": 10.766666666666667, "series": [{"data": [[1.6028013E12, 10.766666666666667], [1.60280124E12, 1.4833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028013E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.4833333333333334, "minX": 1.60280124E12, "maxY": 10.766666666666667, "series": [{"data": [[1.6028013E12, 10.766666666666667], [1.60280124E12, 1.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028013E12, "title": "Total Transactions Per Second"}},
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

