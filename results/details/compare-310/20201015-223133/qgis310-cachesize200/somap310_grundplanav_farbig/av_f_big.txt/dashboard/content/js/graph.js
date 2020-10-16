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
        data: {"result": {"minY": 188.0, "minX": 0.0, "maxY": 3742.0, "series": [{"data": [[0.0, 188.0], [0.1, 188.0], [0.2, 188.0], [0.3, 198.0], [0.4, 198.0], [0.5, 199.0], [0.6, 200.0], [0.7, 204.0], [0.8, 204.0], [0.9, 209.0], [1.0, 210.0], [1.1, 211.0], [1.2, 211.0], [1.3, 218.0], [1.4, 221.0], [1.5, 224.0], [1.6, 224.0], [1.7, 232.0], [1.8, 232.0], [1.9, 232.0], [2.0, 233.0], [2.1, 239.0], [2.2, 241.0], [2.3, 241.0], [2.4, 246.0], [2.5, 249.0], [2.6, 254.0], [2.7, 254.0], [2.8, 257.0], [2.9, 259.0], [3.0, 261.0], [3.1, 261.0], [3.2, 262.0], [3.3, 262.0], [3.4, 262.0], [3.5, 263.0], [3.6, 263.0], [3.7, 265.0], [3.8, 265.0], [3.9, 265.0], [4.0, 272.0], [4.1, 280.0], [4.2, 280.0], [4.3, 282.0], [4.4, 283.0], [4.5, 284.0], [4.6, 284.0], [4.7, 285.0], [4.8, 285.0], [4.9, 288.0], [5.0, 288.0], [5.1, 288.0], [5.2, 291.0], [5.3, 291.0], [5.4, 292.0], [5.5, 293.0], [5.6, 295.0], [5.7, 295.0], [5.8, 298.0], [5.9, 300.0], [6.0, 305.0], [6.1, 305.0], [6.2, 305.0], [6.3, 307.0], [6.4, 311.0], [6.5, 311.0], [6.6, 311.0], [6.7, 312.0], [6.8, 312.0], [6.9, 312.0], [7.0, 321.0], [7.1, 322.0], [7.2, 322.0], [7.3, 325.0], [7.4, 326.0], [7.5, 330.0], [7.6, 330.0], [7.7, 332.0], [7.8, 337.0], [7.9, 338.0], [8.0, 338.0], [8.1, 341.0], [8.2, 343.0], [8.3, 348.0], [8.4, 348.0], [8.5, 349.0], [8.6, 351.0], [8.7, 351.0], [8.8, 354.0], [8.9, 362.0], [9.0, 363.0], [9.1, 363.0], [9.2, 367.0], [9.3, 370.0], [9.4, 371.0], [9.5, 371.0], [9.6, 372.0], [9.7, 372.0], [9.8, 375.0], [9.9, 375.0], [10.0, 375.0], [10.1, 377.0], [10.2, 377.0], [10.3, 378.0], [10.4, 378.0], [10.5, 379.0], [10.6, 379.0], [10.7, 384.0], [10.8, 385.0], [10.9, 385.0], [11.0, 385.0], [11.1, 387.0], [11.2, 387.0], [11.3, 388.0], [11.4, 388.0], [11.5, 389.0], [11.6, 393.0], [11.7, 393.0], [11.8, 394.0], [11.9, 395.0], [12.0, 395.0], [12.1, 395.0], [12.2, 395.0], [12.3, 398.0], [12.4, 399.0], [12.5, 399.0], [12.6, 400.0], [12.7, 401.0], [12.8, 407.0], [12.9, 407.0], [13.0, 408.0], [13.1, 411.0], [13.2, 413.0], [13.3, 413.0], [13.4, 413.0], [13.5, 415.0], [13.6, 415.0], [13.7, 415.0], [13.8, 416.0], [13.9, 417.0], [14.0, 417.0], [14.1, 417.0], [14.2, 421.0], [14.3, 426.0], [14.4, 426.0], [14.5, 428.0], [14.6, 431.0], [14.7, 432.0], [14.8, 432.0], [14.9, 432.0], [15.0, 436.0], [15.1, 436.0], [15.2, 438.0], [15.3, 439.0], [15.4, 439.0], [15.5, 439.0], [15.6, 439.0], [15.7, 441.0], [15.8, 442.0], [15.9, 442.0], [16.0, 442.0], [16.1, 443.0], [16.2, 444.0], [16.3, 444.0], [16.4, 444.0], [16.5, 444.0], [16.6, 446.0], [16.7, 446.0], [16.8, 447.0], [16.9, 448.0], [17.0, 448.0], [17.1, 452.0], [17.2, 452.0], [17.3, 453.0], [17.4, 453.0], [17.5, 454.0], [17.6, 455.0], [17.7, 457.0], [17.8, 457.0], [17.9, 462.0], [18.0, 465.0], [18.1, 466.0], [18.2, 466.0], [18.3, 466.0], [18.4, 468.0], [18.5, 468.0], [18.6, 472.0], [18.7, 473.0], [18.8, 473.0], [18.9, 473.0], [19.0, 475.0], [19.1, 479.0], [19.2, 480.0], [19.3, 480.0], [19.4, 481.0], [19.5, 485.0], [19.6, 488.0], [19.7, 488.0], [19.8, 489.0], [19.9, 492.0], [20.0, 492.0], [20.1, 492.0], [20.2, 493.0], [20.3, 494.0], [20.4, 494.0], [20.5, 496.0], [20.6, 497.0], [20.7, 499.0], [20.8, 499.0], [20.9, 499.0], [21.0, 499.0], [21.1, 499.0], [21.2, 499.0], [21.3, 500.0], [21.4, 502.0], [21.5, 503.0], [21.6, 503.0], [21.7, 503.0], [21.8, 505.0], [21.9, 505.0], [22.0, 506.0], [22.1, 507.0], [22.2, 511.0], [22.3, 511.0], [22.4, 513.0], [22.5, 513.0], [22.6, 514.0], [22.7, 514.0], [22.8, 515.0], [22.9, 515.0], [23.0, 516.0], [23.1, 516.0], [23.2, 517.0], [23.3, 518.0], [23.4, 518.0], [23.5, 522.0], [23.6, 524.0], [23.7, 525.0], [23.8, 525.0], [23.9, 529.0], [24.0, 529.0], [24.1, 530.0], [24.2, 530.0], [24.3, 530.0], [24.4, 531.0], [24.5, 533.0], [24.6, 533.0], [24.7, 536.0], [24.8, 538.0], [24.9, 538.0], [25.0, 538.0], [25.1, 539.0], [25.2, 539.0], [25.3, 539.0], [25.4, 540.0], [25.5, 540.0], [25.6, 541.0], [25.7, 541.0], [25.8, 541.0], [25.9, 542.0], [26.0, 543.0], [26.1, 543.0], [26.2, 544.0], [26.3, 547.0], [26.4, 548.0], [26.5, 548.0], [26.6, 548.0], [26.7, 549.0], [26.8, 549.0], [26.9, 549.0], [27.0, 550.0], [27.1, 551.0], [27.2, 551.0], [27.3, 552.0], [27.4, 553.0], [27.5, 555.0], [27.6, 555.0], [27.7, 556.0], [27.8, 558.0], [27.9, 559.0], [28.0, 559.0], [28.1, 561.0], [28.2, 562.0], [28.3, 563.0], [28.4, 563.0], [28.5, 563.0], [28.6, 564.0], [28.7, 564.0], [28.8, 565.0], [28.9, 565.0], [29.0, 568.0], [29.1, 568.0], [29.2, 569.0], [29.3, 569.0], [29.4, 569.0], [29.5, 569.0], [29.6, 573.0], [29.7, 576.0], [29.8, 578.0], [29.9, 578.0], [30.0, 588.0], [30.1, 588.0], [30.2, 588.0], [30.3, 589.0], [30.4, 590.0], [30.5, 591.0], [30.6, 591.0], [30.7, 592.0], [30.8, 593.0], [30.9, 593.0], [31.0, 593.0], [31.1, 593.0], [31.2, 593.0], [31.3, 593.0], [31.4, 593.0], [31.5, 595.0], [31.6, 598.0], [31.7, 598.0], [31.8, 599.0], [31.9, 600.0], [32.0, 600.0], [32.1, 600.0], [32.2, 603.0], [32.3, 603.0], [32.4, 603.0], [32.5, 603.0], [32.6, 604.0], [32.7, 607.0], [32.8, 608.0], [32.9, 608.0], [33.0, 609.0], [33.1, 611.0], [33.2, 611.0], [33.3, 611.0], [33.4, 614.0], [33.5, 615.0], [33.6, 615.0], [33.7, 615.0], [33.8, 615.0], [33.9, 616.0], [34.0, 616.0], [34.1, 618.0], [34.2, 621.0], [34.3, 623.0], [34.4, 623.0], [34.5, 624.0], [34.6, 626.0], [34.7, 627.0], [34.8, 627.0], [34.9, 628.0], [35.0, 631.0], [35.1, 631.0], [35.2, 631.0], [35.3, 632.0], [35.4, 633.0], [35.5, 633.0], [35.6, 634.0], [35.7, 636.0], [35.8, 636.0], [35.9, 636.0], [36.0, 637.0], [36.1, 637.0], [36.2, 638.0], [36.3, 638.0], [36.4, 639.0], [36.5, 640.0], [36.6, 640.0], [36.7, 640.0], [36.8, 641.0], [36.9, 644.0], [37.0, 644.0], [37.1, 644.0], [37.2, 644.0], [37.3, 645.0], [37.4, 645.0], [37.5, 645.0], [37.6, 646.0], [37.7, 646.0], [37.8, 646.0], [37.9, 646.0], [38.0, 647.0], [38.1, 647.0], [38.2, 647.0], [38.3, 647.0], [38.4, 649.0], [38.5, 649.0], [38.6, 649.0], [38.7, 650.0], [38.8, 651.0], [38.9, 651.0], [39.0, 652.0], [39.1, 656.0], [39.2, 656.0], [39.3, 656.0], [39.4, 658.0], [39.5, 659.0], [39.6, 660.0], [39.7, 660.0], [39.8, 661.0], [39.9, 663.0], [40.0, 663.0], [40.1, 663.0], [40.2, 664.0], [40.3, 665.0], [40.4, 665.0], [40.5, 666.0], [40.6, 666.0], [40.7, 669.0], [40.8, 669.0], [40.9, 671.0], [41.0, 674.0], [41.1, 678.0], [41.2, 678.0], [41.3, 679.0], [41.4, 680.0], [41.5, 681.0], [41.6, 681.0], [41.7, 682.0], [41.8, 682.0], [41.9, 682.0], [42.0, 683.0], [42.1, 683.0], [42.2, 688.0], [42.3, 688.0], [42.4, 693.0], [42.5, 693.0], [42.6, 699.0], [42.7, 699.0], [42.8, 704.0], [42.9, 705.0], [43.0, 705.0], [43.1, 705.0], [43.2, 709.0], [43.3, 711.0], [43.4, 711.0], [43.5, 711.0], [43.6, 711.0], [43.7, 712.0], [43.8, 712.0], [43.9, 717.0], [44.0, 717.0], [44.1, 717.0], [44.2, 717.0], [44.3, 718.0], [44.4, 718.0], [44.5, 720.0], [44.6, 720.0], [44.7, 721.0], [44.8, 721.0], [44.9, 723.0], [45.0, 723.0], [45.1, 723.0], [45.2, 724.0], [45.3, 724.0], [45.4, 725.0], [45.5, 725.0], [45.6, 726.0], [45.7, 726.0], [45.8, 726.0], [45.9, 727.0], [46.0, 735.0], [46.1, 735.0], [46.2, 738.0], [46.3, 738.0], [46.4, 739.0], [46.5, 739.0], [46.6, 740.0], [46.7, 742.0], [46.8, 742.0], [46.9, 744.0], [47.0, 746.0], [47.1, 750.0], [47.2, 750.0], [47.3, 751.0], [47.4, 753.0], [47.5, 753.0], [47.6, 753.0], [47.7, 754.0], [47.8, 757.0], [47.9, 759.0], [48.0, 759.0], [48.1, 760.0], [48.2, 761.0], [48.3, 762.0], [48.4, 762.0], [48.5, 762.0], [48.6, 765.0], [48.7, 765.0], [48.8, 766.0], [48.9, 767.0], [49.0, 767.0], [49.1, 767.0], [49.2, 774.0], [49.3, 774.0], [49.4, 774.0], [49.5, 774.0], [49.6, 774.0], [49.7, 774.0], [49.8, 777.0], [49.9, 777.0], [50.0, 778.0], [50.1, 779.0], [50.2, 779.0], [50.3, 780.0], [50.4, 783.0], [50.5, 783.0], [50.6, 783.0], [50.7, 787.0], [50.8, 787.0], [50.9, 788.0], [51.0, 788.0], [51.1, 789.0], [51.2, 790.0], [51.3, 792.0], [51.4, 792.0], [51.5, 793.0], [51.6, 794.0], [51.7, 794.0], [51.8, 794.0], [51.9, 795.0], [52.0, 797.0], [52.1, 797.0], [52.2, 799.0], [52.3, 801.0], [52.4, 804.0], [52.5, 804.0], [52.6, 805.0], [52.7, 805.0], [52.8, 805.0], [52.9, 805.0], [53.0, 806.0], [53.1, 807.0], [53.2, 807.0], [53.3, 807.0], [53.4, 808.0], [53.5, 809.0], [53.6, 809.0], [53.7, 810.0], [53.8, 813.0], [53.9, 813.0], [54.0, 813.0], [54.1, 813.0], [54.2, 813.0], [54.3, 813.0], [54.4, 813.0], [54.5, 814.0], [54.6, 816.0], [54.7, 816.0], [54.8, 816.0], [54.9, 818.0], [55.0, 820.0], [55.1, 820.0], [55.2, 822.0], [55.3, 823.0], [55.4, 826.0], [55.5, 826.0], [55.6, 827.0], [55.7, 829.0], [55.8, 832.0], [55.9, 832.0], [56.0, 835.0], [56.1, 836.0], [56.2, 839.0], [56.3, 839.0], [56.4, 843.0], [56.5, 844.0], [56.6, 847.0], [56.7, 847.0], [56.8, 849.0], [56.9, 852.0], [57.0, 852.0], [57.1, 854.0], [57.2, 854.0], [57.3, 854.0], [57.4, 854.0], [57.5, 856.0], [57.6, 859.0], [57.7, 860.0], [57.8, 860.0], [57.9, 860.0], [58.0, 862.0], [58.1, 867.0], [58.2, 867.0], [58.3, 872.0], [58.4, 873.0], [58.5, 873.0], [58.6, 875.0], [58.7, 877.0], [58.8, 878.0], [58.9, 878.0], [59.0, 880.0], [59.1, 881.0], [59.2, 883.0], [59.3, 883.0], [59.4, 884.0], [59.5, 884.0], [59.6, 887.0], [59.7, 887.0], [59.8, 890.0], [59.9, 891.0], [60.0, 891.0], [60.1, 891.0], [60.2, 892.0], [60.3, 893.0], [60.4, 893.0], [60.5, 899.0], [60.6, 902.0], [60.7, 906.0], [60.8, 906.0], [60.9, 908.0], [61.0, 909.0], [61.1, 909.0], [61.2, 909.0], [61.3, 914.0], [61.4, 916.0], [61.5, 916.0], [61.6, 916.0], [61.7, 918.0], [61.8, 918.0], [61.9, 918.0], [62.0, 918.0], [62.1, 922.0], [62.2, 924.0], [62.3, 924.0], [62.4, 924.0], [62.5, 929.0], [62.6, 934.0], [62.7, 934.0], [62.8, 935.0], [62.9, 937.0], [63.0, 937.0], [63.1, 937.0], [63.2, 937.0], [63.3, 938.0], [63.4, 938.0], [63.5, 939.0], [63.6, 940.0], [63.7, 941.0], [63.8, 941.0], [63.9, 946.0], [64.0, 947.0], [64.1, 947.0], [64.2, 947.0], [64.3, 950.0], [64.4, 950.0], [64.5, 951.0], [64.6, 951.0], [64.7, 953.0], [64.8, 960.0], [64.9, 960.0], [65.0, 960.0], [65.1, 962.0], [65.2, 963.0], [65.3, 963.0], [65.4, 964.0], [65.5, 965.0], [65.6, 967.0], [65.7, 967.0], [65.8, 971.0], [65.9, 973.0], [66.0, 974.0], [66.1, 974.0], [66.2, 977.0], [66.3, 979.0], [66.4, 982.0], [66.5, 982.0], [66.6, 982.0], [66.7, 986.0], [66.8, 986.0], [66.9, 986.0], [67.0, 988.0], [67.1, 989.0], [67.2, 989.0], [67.3, 991.0], [67.4, 995.0], [67.5, 995.0], [67.6, 995.0], [67.7, 996.0], [67.8, 996.0], [67.9, 996.0], [68.0, 996.0], [68.1, 1001.0], [68.2, 1002.0], [68.3, 1002.0], [68.4, 1002.0], [68.5, 1004.0], [68.6, 1008.0], [68.7, 1008.0], [68.8, 1008.0], [68.9, 1009.0], [69.0, 1009.0], [69.1, 1009.0], [69.2, 1011.0], [69.3, 1011.0], [69.4, 1012.0], [69.5, 1012.0], [69.6, 1013.0], [69.7, 1018.0], [69.8, 1020.0], [69.9, 1020.0], [70.0, 1021.0], [70.1, 1025.0], [70.2, 1025.0], [70.3, 1025.0], [70.4, 1027.0], [70.5, 1032.0], [70.6, 1032.0], [70.7, 1036.0], [70.8, 1037.0], [70.9, 1039.0], [71.0, 1039.0], [71.1, 1039.0], [71.2, 1040.0], [71.3, 1041.0], [71.4, 1041.0], [71.5, 1041.0], [71.6, 1042.0], [71.7, 1042.0], [71.8, 1047.0], [71.9, 1049.0], [72.0, 1049.0], [72.1, 1049.0], [72.2, 1051.0], [72.3, 1052.0], [72.4, 1054.0], [72.5, 1054.0], [72.6, 1058.0], [72.7, 1059.0], [72.8, 1064.0], [72.9, 1064.0], [73.0, 1065.0], [73.1, 1066.0], [73.2, 1066.0], [73.3, 1066.0], [73.4, 1071.0], [73.5, 1071.0], [73.6, 1071.0], [73.7, 1073.0], [73.8, 1075.0], [73.9, 1078.0], [74.0, 1078.0], [74.1, 1079.0], [74.2, 1079.0], [74.3, 1080.0], [74.4, 1080.0], [74.5, 1082.0], [74.6, 1083.0], [74.7, 1083.0], [74.8, 1083.0], [74.9, 1084.0], [75.0, 1084.0], [75.1, 1084.0], [75.2, 1088.0], [75.3, 1089.0], [75.4, 1089.0], [75.5, 1089.0], [75.6, 1091.0], [75.7, 1091.0], [75.8, 1094.0], [75.9, 1094.0], [76.0, 1098.0], [76.1, 1100.0], [76.2, 1102.0], [76.3, 1102.0], [76.4, 1104.0], [76.5, 1106.0], [76.6, 1108.0], [76.7, 1108.0], [76.8, 1109.0], [76.9, 1111.0], [77.0, 1111.0], [77.1, 1112.0], [77.2, 1113.0], [77.3, 1114.0], [77.4, 1114.0], [77.5, 1114.0], [77.6, 1115.0], [77.7, 1116.0], [77.8, 1116.0], [77.9, 1118.0], [78.0, 1119.0], [78.1, 1126.0], [78.2, 1126.0], [78.3, 1128.0], [78.4, 1132.0], [78.5, 1132.0], [78.6, 1132.0], [78.7, 1133.0], [78.8, 1135.0], [78.9, 1135.0], [79.0, 1136.0], [79.1, 1142.0], [79.2, 1144.0], [79.3, 1144.0], [79.4, 1146.0], [79.5, 1147.0], [79.6, 1148.0], [79.7, 1148.0], [79.8, 1151.0], [79.9, 1154.0], [80.0, 1157.0], [80.1, 1157.0], [80.2, 1160.0], [80.3, 1165.0], [80.4, 1165.0], [80.5, 1168.0], [80.6, 1172.0], [80.7, 1180.0], [80.8, 1180.0], [80.9, 1181.0], [81.0, 1186.0], [81.1, 1189.0], [81.2, 1189.0], [81.3, 1189.0], [81.4, 1190.0], [81.5, 1191.0], [81.6, 1191.0], [81.7, 1191.0], [81.8, 1192.0], [81.9, 1192.0], [82.0, 1193.0], [82.1, 1197.0], [82.2, 1199.0], [82.3, 1199.0], [82.4, 1202.0], [82.5, 1204.0], [82.6, 1205.0], [82.7, 1205.0], [82.8, 1207.0], [82.9, 1207.0], [83.0, 1208.0], [83.1, 1208.0], [83.2, 1209.0], [83.3, 1210.0], [83.4, 1210.0], [83.5, 1212.0], [83.6, 1212.0], [83.7, 1214.0], [83.8, 1214.0], [83.9, 1216.0], [84.0, 1216.0], [84.1, 1218.0], [84.2, 1218.0], [84.3, 1224.0], [84.4, 1225.0], [84.5, 1227.0], [84.6, 1227.0], [84.7, 1227.0], [84.8, 1227.0], [84.9, 1227.0], [85.0, 1227.0], [85.1, 1230.0], [85.2, 1230.0], [85.3, 1230.0], [85.4, 1233.0], [85.5, 1235.0], [85.6, 1247.0], [85.7, 1247.0], [85.8, 1248.0], [85.9, 1249.0], [86.0, 1255.0], [86.1, 1255.0], [86.2, 1257.0], [86.3, 1261.0], [86.4, 1264.0], [86.5, 1264.0], [86.6, 1265.0], [86.7, 1265.0], [86.8, 1265.0], [86.9, 1266.0], [87.0, 1274.0], [87.1, 1274.0], [87.2, 1274.0], [87.3, 1275.0], [87.4, 1278.0], [87.5, 1280.0], [87.6, 1280.0], [87.7, 1281.0], [87.8, 1281.0], [87.9, 1284.0], [88.0, 1284.0], [88.1, 1288.0], [88.2, 1291.0], [88.3, 1294.0], [88.4, 1294.0], [88.5, 1296.0], [88.6, 1297.0], [88.7, 1297.0], [88.8, 1297.0], [88.9, 1298.0], [89.0, 1302.0], [89.1, 1302.0], [89.2, 1310.0], [89.3, 1315.0], [89.4, 1316.0], [89.5, 1316.0], [89.6, 1317.0], [89.7, 1321.0], [89.8, 1322.0], [89.9, 1322.0], [90.0, 1322.0], [90.1, 1322.0], [90.2, 1322.0], [90.3, 1323.0], [90.4, 1326.0], [90.5, 1329.0], [90.6, 1329.0], [90.7, 1330.0], [90.8, 1340.0], [90.9, 1345.0], [91.0, 1345.0], [91.1, 1345.0], [91.2, 1348.0], [91.3, 1350.0], [91.4, 1350.0], [91.5, 1353.0], [91.6, 1353.0], [91.7, 1353.0], [91.8, 1361.0], [91.9, 1366.0], [92.0, 1378.0], [92.1, 1378.0], [92.2, 1384.0], [92.3, 1386.0], [92.4, 1401.0], [92.5, 1401.0], [92.6, 1415.0], [92.7, 1421.0], [92.8, 1424.0], [92.9, 1424.0], [93.0, 1429.0], [93.1, 1441.0], [93.2, 1443.0], [93.3, 1443.0], [93.4, 1446.0], [93.5, 1446.0], [93.6, 1446.0], [93.7, 1451.0], [93.8, 1452.0], [93.9, 1467.0], [94.0, 1467.0], [94.1, 1492.0], [94.2, 1499.0], [94.3, 1503.0], [94.4, 1503.0], [94.5, 1503.0], [94.6, 1507.0], [94.7, 1509.0], [94.8, 1509.0], [94.9, 1513.0], [95.0, 1514.0], [95.1, 1514.0], [95.2, 1515.0], [95.3, 1517.0], [95.4, 1520.0], [95.5, 1520.0], [95.6, 1537.0], [95.7, 1559.0], [95.8, 1573.0], [95.9, 1573.0], [96.0, 1601.0], [96.1, 1603.0], [96.2, 1612.0], [96.3, 1612.0], [96.4, 1634.0], [96.5, 1661.0], [96.6, 1661.0], [96.7, 1661.0], [96.8, 1684.0], [96.9, 1689.0], [97.0, 1689.0], [97.1, 1723.0], [97.2, 1898.0], [97.3, 1911.0], [97.4, 1911.0], [97.5, 1920.0], [97.6, 1930.0], [97.7, 1971.0], [97.8, 1971.0], [97.9, 2073.0], [98.0, 2314.0], [98.1, 2315.0], [98.2, 2315.0], [98.3, 2596.0], [98.4, 2683.0], [98.5, 2683.0], [98.6, 2686.0], [98.7, 2702.0], [98.8, 2756.0], [98.9, 2756.0], [99.0, 2871.0], [99.1, 3014.0], [99.2, 3108.0], [99.3, 3108.0], [99.4, 3183.0], [99.5, 3217.0], [99.6, 3263.0], [99.7, 3263.0], [99.8, 3471.0], [99.9, 3742.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 80.0, "series": [{"data": [[600.0, 80.0], [700.0, 70.0], [800.0, 61.0], [900.0, 55.0], [1000.0, 59.0], [1100.0, 46.0], [1200.0, 49.0], [1300.0, 25.0], [1400.0, 14.0], [1500.0, 12.0], [1600.0, 8.0], [100.0, 4.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 4.0], [2000.0, 1.0], [2300.0, 2.0], [2500.0, 1.0], [2600.0, 2.0], [2700.0, 2.0], [2800.0, 1.0], [3000.0, 1.0], [3100.0, 2.0], [200.0, 39.0], [3200.0, 2.0], [3400.0, 1.0], [3700.0, 1.0], [300.0, 49.0], [400.0, 64.0], [500.0, 78.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 42.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 536.0, "series": [{"data": [[0.0, 157.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 536.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 42.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.9234693877551, "minX": 1.60280412E12, "maxY": 10.0, "series": [{"data": [[1.60280412E12, 10.0], [1.60280418E12, 9.9234693877551]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280418E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 388.0, "minX": 1.0, "maxY": 1084.0, "series": [{"data": [[8.0, 540.0], [4.0, 518.0], [2.0, 843.0], [1.0, 1082.0], [9.0, 388.0], [10.0, 853.9104683195593], [5.0, 563.0], [6.0, 590.0], [3.0, 1084.0], [7.0, 533.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 851.8095238095239]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1113.0166666666667, "minX": 1.60280412E12, "maxY": 1345447.7166666666, "series": [{"data": [[1.60280412E12, 490328.23333333334], [1.60280418E12, 1345447.7166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280412E12, 1113.0166666666667], [1.60280418E12, 4410.016666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280418E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 811.4965986394564, "minX": 1.60280412E12, "maxY": 1013.0612244897966, "series": [{"data": [[1.60280412E12, 1013.0612244897966], [1.60280418E12, 811.4965986394564]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280418E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 810.2755102040815, "minX": 1.60280412E12, "maxY": 1011.5714285714279, "series": [{"data": [[1.60280412E12, 1011.5714285714279], [1.60280418E12, 810.2755102040815]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280418E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.018707482993197265, "minX": 1.60280412E12, "maxY": 0.5510204081632653, "series": [{"data": [[1.60280412E12, 0.5510204081632653], [1.60280418E12, 0.018707482993197265]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280418E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 188.0, "minX": 1.60280412E12, "maxY": 3742.0, "series": [{"data": [[1.60280412E12, 3742.0], [1.60280418E12, 3263.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280412E12, 221.99599989414216], [1.60280418E12, 201.20399943828582]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280412E12, 222.39560004234315], [1.60280418E12, 203.32440022468566]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280412E12, 222.21799994707106], [1.60280418E12, 202.38199971914293]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280412E12, 221.0], [1.60280418E12, 188.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280412E12, 807.0], [1.60280418E12, 770.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280418E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 466.0, "minX": 7.0, "maxY": 1092.0, "series": [{"data": [[8.0, 952.5], [9.0, 1004.5], [10.0, 993.5], [11.0, 855.0], [12.0, 824.5], [13.0, 638.0], [14.0, 964.5], [15.0, 652.0], [16.0, 539.5], [17.0, 588.0], [18.0, 604.0], [19.0, 466.0], [7.0, 1092.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 465.0, "minX": 7.0, "maxY": 1091.0, "series": [{"data": [[8.0, 952.0], [9.0, 1003.5], [10.0, 983.5], [11.0, 853.5], [12.0, 823.5], [13.0, 637.5], [14.0, 964.0], [15.0, 652.0], [16.0, 539.0], [17.0, 588.0], [18.0, 603.5], [19.0, 465.0], [7.0, 1091.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.6166666666666667, "minX": 1.60280412E12, "maxY": 9.633333333333333, "series": [{"data": [[1.60280412E12, 2.6166666666666667], [1.60280418E12, 9.633333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280418E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.45, "minX": 1.60280412E12, "maxY": 9.8, "series": [{"data": [[1.60280412E12, 2.45], [1.60280418E12, 9.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280418E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.45, "minX": 1.60280412E12, "maxY": 9.8, "series": [{"data": [[1.60280412E12, 2.45], [1.60280418E12, 9.8]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280418E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.45, "minX": 1.60280412E12, "maxY": 9.8, "series": [{"data": [[1.60280412E12, 2.45], [1.60280418E12, 9.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280418E12, "title": "Total Transactions Per Second"}},
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

