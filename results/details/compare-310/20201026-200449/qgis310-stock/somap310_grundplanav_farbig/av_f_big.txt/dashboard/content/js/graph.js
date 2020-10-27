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
        data: {"result": {"minY": 205.0, "minX": 0.0, "maxY": 3484.0, "series": [{"data": [[0.0, 205.0], [0.1, 205.0], [0.2, 215.0], [0.3, 216.0], [0.4, 216.0], [0.5, 216.0], [0.6, 216.0], [0.7, 219.0], [0.8, 219.0], [0.9, 220.0], [1.0, 224.0], [1.1, 227.0], [1.2, 227.0], [1.3, 228.0], [1.4, 231.0], [1.5, 233.0], [1.6, 233.0], [1.7, 233.0], [1.8, 234.0], [1.9, 234.0], [2.0, 236.0], [2.1, 241.0], [2.2, 251.0], [2.3, 251.0], [2.4, 256.0], [2.5, 257.0], [2.6, 260.0], [2.7, 260.0], [2.8, 260.0], [2.9, 261.0], [3.0, 263.0], [3.1, 263.0], [3.2, 265.0], [3.3, 268.0], [3.4, 268.0], [3.5, 270.0], [3.6, 274.0], [3.7, 277.0], [3.8, 277.0], [3.9, 280.0], [4.0, 281.0], [4.1, 282.0], [4.2, 282.0], [4.3, 284.0], [4.4, 286.0], [4.5, 290.0], [4.6, 290.0], [4.7, 291.0], [4.8, 293.0], [4.9, 296.0], [5.0, 296.0], [5.1, 296.0], [5.2, 297.0], [5.3, 297.0], [5.4, 302.0], [5.5, 302.0], [5.6, 304.0], [5.7, 304.0], [5.8, 305.0], [5.9, 306.0], [6.0, 309.0], [6.1, 309.0], [6.2, 310.0], [6.3, 311.0], [6.4, 314.0], [6.5, 314.0], [6.6, 317.0], [6.7, 318.0], [6.8, 318.0], [6.9, 319.0], [7.0, 321.0], [7.1, 322.0], [7.2, 322.0], [7.3, 323.0], [7.4, 324.0], [7.5, 324.0], [7.6, 324.0], [7.7, 326.0], [7.8, 326.0], [7.9, 326.0], [8.0, 326.0], [8.1, 330.0], [8.2, 332.0], [8.3, 335.0], [8.4, 335.0], [8.5, 336.0], [8.6, 339.0], [8.7, 339.0], [8.8, 344.0], [8.9, 346.0], [9.0, 346.0], [9.1, 346.0], [9.2, 348.0], [9.3, 353.0], [9.4, 357.0], [9.5, 357.0], [9.6, 359.0], [9.7, 363.0], [9.8, 372.0], [9.9, 372.0], [10.0, 374.0], [10.1, 375.0], [10.2, 375.0], [10.3, 376.0], [10.4, 376.0], [10.5, 380.0], [10.6, 380.0], [10.7, 381.0], [10.8, 381.0], [10.9, 381.0], [11.0, 381.0], [11.1, 383.0], [11.2, 383.0], [11.3, 384.0], [11.4, 384.0], [11.5, 385.0], [11.6, 385.0], [11.7, 385.0], [11.8, 386.0], [11.9, 386.0], [12.0, 388.0], [12.1, 388.0], [12.2, 389.0], [12.3, 392.0], [12.4, 393.0], [12.5, 393.0], [12.6, 394.0], [12.7, 396.0], [12.8, 397.0], [12.9, 397.0], [13.0, 398.0], [13.1, 400.0], [13.2, 400.0], [13.3, 400.0], [13.4, 400.0], [13.5, 401.0], [13.6, 401.0], [13.7, 402.0], [13.8, 406.0], [13.9, 410.0], [14.0, 410.0], [14.1, 411.0], [14.2, 411.0], [14.3, 414.0], [14.4, 414.0], [14.5, 417.0], [14.6, 418.0], [14.7, 418.0], [14.8, 418.0], [14.9, 418.0], [15.0, 421.0], [15.1, 421.0], [15.2, 421.0], [15.3, 423.0], [15.4, 423.0], [15.5, 423.0], [15.6, 424.0], [15.7, 425.0], [15.8, 428.0], [15.9, 428.0], [16.0, 428.0], [16.1, 432.0], [16.2, 434.0], [16.3, 434.0], [16.4, 435.0], [16.5, 436.0], [16.6, 437.0], [16.7, 437.0], [16.8, 437.0], [16.9, 438.0], [17.0, 438.0], [17.1, 440.0], [17.2, 441.0], [17.3, 441.0], [17.4, 441.0], [17.5, 442.0], [17.6, 444.0], [17.7, 445.0], [17.8, 445.0], [17.9, 448.0], [18.0, 448.0], [18.1, 455.0], [18.2, 455.0], [18.3, 456.0], [18.4, 460.0], [18.5, 460.0], [18.6, 462.0], [18.7, 462.0], [18.8, 462.0], [18.9, 462.0], [19.0, 463.0], [19.1, 464.0], [19.2, 465.0], [19.3, 465.0], [19.4, 471.0], [19.5, 471.0], [19.6, 474.0], [19.7, 474.0], [19.8, 475.0], [19.9, 475.0], [20.0, 477.0], [20.1, 477.0], [20.2, 477.0], [20.3, 478.0], [20.4, 478.0], [20.5, 480.0], [20.6, 484.0], [20.7, 484.0], [20.8, 484.0], [20.9, 489.0], [21.0, 489.0], [21.1, 490.0], [21.2, 490.0], [21.3, 491.0], [21.4, 492.0], [21.5, 492.0], [21.6, 492.0], [21.7, 494.0], [21.8, 494.0], [21.9, 494.0], [22.0, 495.0], [22.1, 495.0], [22.2, 497.0], [22.3, 497.0], [22.4, 498.0], [22.5, 500.0], [22.6, 506.0], [22.7, 506.0], [22.8, 507.0], [22.9, 508.0], [23.0, 509.0], [23.1, 509.0], [23.2, 510.0], [23.3, 510.0], [23.4, 510.0], [23.5, 511.0], [23.6, 511.0], [23.7, 513.0], [23.8, 513.0], [23.9, 513.0], [24.0, 514.0], [24.1, 517.0], [24.2, 517.0], [24.3, 518.0], [24.4, 518.0], [24.5, 520.0], [24.6, 520.0], [24.7, 522.0], [24.8, 522.0], [24.9, 525.0], [25.0, 525.0], [25.1, 526.0], [25.2, 526.0], [25.3, 526.0], [25.4, 530.0], [25.5, 530.0], [25.6, 533.0], [25.7, 533.0], [25.8, 533.0], [25.9, 533.0], [26.0, 535.0], [26.1, 535.0], [26.2, 535.0], [26.3, 536.0], [26.4, 538.0], [26.5, 538.0], [26.6, 540.0], [26.7, 541.0], [26.8, 541.0], [26.9, 546.0], [27.0, 547.0], [27.1, 548.0], [27.2, 548.0], [27.3, 548.0], [27.4, 548.0], [27.5, 549.0], [27.6, 549.0], [27.7, 552.0], [27.8, 554.0], [27.9, 554.0], [28.0, 554.0], [28.1, 559.0], [28.2, 559.0], [28.3, 561.0], [28.4, 561.0], [28.5, 563.0], [28.6, 564.0], [28.7, 564.0], [28.8, 564.0], [28.9, 566.0], [29.0, 566.0], [29.1, 566.0], [29.2, 567.0], [29.3, 567.0], [29.4, 568.0], [29.5, 568.0], [29.6, 573.0], [29.7, 573.0], [29.8, 576.0], [29.9, 576.0], [30.0, 577.0], [30.1, 577.0], [30.2, 577.0], [30.3, 577.0], [30.4, 581.0], [30.5, 582.0], [30.6, 582.0], [30.7, 582.0], [30.8, 582.0], [30.9, 583.0], [31.0, 583.0], [31.1, 583.0], [31.2, 584.0], [31.3, 587.0], [31.4, 587.0], [31.5, 587.0], [31.6, 588.0], [31.7, 588.0], [31.8, 588.0], [31.9, 589.0], [32.0, 592.0], [32.1, 592.0], [32.2, 592.0], [32.3, 593.0], [32.4, 593.0], [32.5, 593.0], [32.6, 594.0], [32.7, 595.0], [32.8, 598.0], [32.9, 598.0], [33.0, 598.0], [33.1, 598.0], [33.2, 598.0], [33.3, 598.0], [33.4, 598.0], [33.5, 599.0], [33.6, 599.0], [33.7, 599.0], [33.8, 601.0], [33.9, 603.0], [34.0, 603.0], [34.1, 605.0], [34.2, 608.0], [34.3, 613.0], [34.4, 613.0], [34.5, 615.0], [34.6, 617.0], [34.7, 618.0], [34.8, 618.0], [34.9, 619.0], [35.0, 619.0], [35.1, 619.0], [35.2, 620.0], [35.3, 623.0], [35.4, 623.0], [35.5, 623.0], [35.6, 624.0], [35.7, 624.0], [35.8, 625.0], [35.9, 625.0], [36.0, 625.0], [36.1, 626.0], [36.2, 628.0], [36.3, 628.0], [36.4, 629.0], [36.5, 631.0], [36.6, 632.0], [36.7, 632.0], [36.8, 635.0], [36.9, 635.0], [37.0, 635.0], [37.1, 636.0], [37.2, 639.0], [37.3, 639.0], [37.4, 639.0], [37.5, 640.0], [37.6, 642.0], [37.7, 643.0], [37.8, 643.0], [37.9, 644.0], [38.0, 645.0], [38.1, 645.0], [38.2, 645.0], [38.3, 646.0], [38.4, 646.0], [38.5, 646.0], [38.6, 647.0], [38.7, 648.0], [38.8, 650.0], [38.9, 650.0], [39.0, 650.0], [39.1, 651.0], [39.2, 655.0], [39.3, 655.0], [39.4, 656.0], [39.5, 657.0], [39.6, 658.0], [39.7, 658.0], [39.8, 658.0], [39.9, 663.0], [40.0, 664.0], [40.1, 664.0], [40.2, 665.0], [40.3, 674.0], [40.4, 674.0], [40.5, 675.0], [40.6, 677.0], [40.7, 680.0], [40.8, 680.0], [40.9, 682.0], [41.0, 684.0], [41.1, 684.0], [41.2, 684.0], [41.3, 687.0], [41.4, 688.0], [41.5, 689.0], [41.6, 689.0], [41.7, 689.0], [41.8, 691.0], [41.9, 691.0], [42.0, 695.0], [42.1, 696.0], [42.2, 696.0], [42.3, 696.0], [42.4, 697.0], [42.5, 698.0], [42.6, 702.0], [42.7, 702.0], [42.8, 704.0], [42.9, 704.0], [43.0, 706.0], [43.1, 706.0], [43.2, 708.0], [43.3, 708.0], [43.4, 708.0], [43.5, 709.0], [43.6, 709.0], [43.7, 710.0], [43.8, 710.0], [43.9, 712.0], [44.0, 712.0], [44.1, 714.0], [44.2, 714.0], [44.3, 716.0], [44.4, 717.0], [44.5, 717.0], [44.6, 717.0], [44.7, 718.0], [44.8, 719.0], [44.9, 719.0], [45.0, 719.0], [45.1, 719.0], [45.2, 719.0], [45.3, 719.0], [45.4, 721.0], [45.5, 725.0], [45.6, 725.0], [45.7, 725.0], [45.8, 726.0], [45.9, 726.0], [46.0, 728.0], [46.1, 728.0], [46.2, 729.0], [46.3, 730.0], [46.4, 731.0], [46.5, 731.0], [46.6, 731.0], [46.7, 731.0], [46.8, 731.0], [46.9, 735.0], [47.0, 740.0], [47.1, 743.0], [47.2, 743.0], [47.3, 744.0], [47.4, 745.0], [47.5, 746.0], [47.6, 746.0], [47.7, 749.0], [47.8, 750.0], [47.9, 750.0], [48.0, 750.0], [48.1, 751.0], [48.2, 755.0], [48.3, 757.0], [48.4, 757.0], [48.5, 759.0], [48.6, 760.0], [48.7, 760.0], [48.8, 762.0], [48.9, 763.0], [49.0, 770.0], [49.1, 770.0], [49.2, 772.0], [49.3, 774.0], [49.4, 778.0], [49.5, 778.0], [49.6, 782.0], [49.7, 788.0], [49.8, 789.0], [49.9, 789.0], [50.0, 792.0], [50.1, 794.0], [50.2, 794.0], [50.3, 796.0], [50.4, 796.0], [50.5, 798.0], [50.6, 798.0], [50.7, 799.0], [50.8, 803.0], [50.9, 807.0], [51.0, 807.0], [51.1, 807.0], [51.2, 807.0], [51.3, 807.0], [51.4, 807.0], [51.5, 808.0], [51.6, 810.0], [51.7, 810.0], [51.8, 812.0], [51.9, 818.0], [52.0, 825.0], [52.1, 825.0], [52.2, 826.0], [52.3, 831.0], [52.4, 833.0], [52.5, 833.0], [52.6, 834.0], [52.7, 838.0], [52.8, 838.0], [52.9, 838.0], [53.0, 840.0], [53.1, 840.0], [53.2, 841.0], [53.3, 841.0], [53.4, 844.0], [53.5, 847.0], [53.6, 847.0], [53.7, 848.0], [53.8, 850.0], [53.9, 851.0], [54.0, 851.0], [54.1, 851.0], [54.2, 854.0], [54.3, 854.0], [54.4, 854.0], [54.5, 854.0], [54.6, 859.0], [54.7, 863.0], [54.8, 863.0], [54.9, 863.0], [55.0, 865.0], [55.1, 865.0], [55.2, 865.0], [55.3, 868.0], [55.4, 869.0], [55.5, 869.0], [55.6, 874.0], [55.7, 874.0], [55.8, 875.0], [55.9, 875.0], [56.0, 877.0], [56.1, 878.0], [56.2, 879.0], [56.3, 879.0], [56.4, 880.0], [56.5, 881.0], [56.6, 881.0], [56.7, 881.0], [56.8, 884.0], [56.9, 884.0], [57.0, 884.0], [57.1, 886.0], [57.2, 886.0], [57.3, 886.0], [57.4, 886.0], [57.5, 887.0], [57.6, 888.0], [57.7, 891.0], [57.8, 891.0], [57.9, 892.0], [58.0, 893.0], [58.1, 896.0], [58.2, 896.0], [58.3, 897.0], [58.4, 898.0], [58.5, 898.0], [58.6, 900.0], [58.7, 902.0], [58.8, 904.0], [58.9, 904.0], [59.0, 904.0], [59.1, 905.0], [59.2, 905.0], [59.3, 905.0], [59.4, 905.0], [59.5, 908.0], [59.6, 910.0], [59.7, 910.0], [59.8, 910.0], [59.9, 910.0], [60.0, 911.0], [60.1, 911.0], [60.2, 911.0], [60.3, 912.0], [60.4, 912.0], [60.5, 916.0], [60.6, 917.0], [60.7, 918.0], [60.8, 918.0], [60.9, 919.0], [61.0, 922.0], [61.1, 922.0], [61.2, 922.0], [61.3, 924.0], [61.4, 926.0], [61.5, 927.0], [61.6, 927.0], [61.7, 930.0], [61.8, 931.0], [61.9, 931.0], [62.0, 935.0], [62.1, 935.0], [62.2, 937.0], [62.3, 937.0], [62.4, 938.0], [62.5, 942.0], [62.6, 943.0], [62.7, 943.0], [62.8, 944.0], [62.9, 947.0], [63.0, 948.0], [63.1, 948.0], [63.2, 948.0], [63.3, 948.0], [63.4, 948.0], [63.5, 949.0], [63.6, 949.0], [63.7, 955.0], [63.8, 955.0], [63.9, 957.0], [64.0, 961.0], [64.1, 961.0], [64.2, 961.0], [64.3, 961.0], [64.4, 961.0], [64.5, 961.0], [64.6, 961.0], [64.7, 962.0], [64.8, 965.0], [64.9, 966.0], [65.0, 966.0], [65.1, 966.0], [65.2, 968.0], [65.3, 968.0], [65.4, 969.0], [65.5, 972.0], [65.6, 974.0], [65.7, 974.0], [65.8, 975.0], [65.9, 975.0], [66.0, 976.0], [66.1, 976.0], [66.2, 981.0], [66.3, 984.0], [66.4, 985.0], [66.5, 985.0], [66.6, 986.0], [66.7, 986.0], [66.8, 986.0], [66.9, 988.0], [67.0, 989.0], [67.1, 990.0], [67.2, 990.0], [67.3, 993.0], [67.4, 996.0], [67.5, 996.0], [67.6, 996.0], [67.7, 996.0], [67.8, 996.0], [67.9, 997.0], [68.0, 997.0], [68.1, 999.0], [68.2, 999.0], [68.3, 1002.0], [68.4, 1002.0], [68.5, 1006.0], [68.6, 1010.0], [68.7, 1010.0], [68.8, 1012.0], [68.9, 1013.0], [69.0, 1013.0], [69.1, 1013.0], [69.2, 1015.0], [69.3, 1015.0], [69.4, 1015.0], [69.5, 1015.0], [69.6, 1016.0], [69.7, 1019.0], [69.8, 1022.0], [69.9, 1022.0], [70.0, 1023.0], [70.1, 1023.0], [70.2, 1023.0], [70.3, 1026.0], [70.4, 1030.0], [70.5, 1031.0], [70.6, 1031.0], [70.7, 1033.0], [70.8, 1033.0], [70.9, 1035.0], [71.0, 1035.0], [71.1, 1035.0], [71.2, 1036.0], [71.3, 1036.0], [71.4, 1036.0], [71.5, 1039.0], [71.6, 1041.0], [71.7, 1041.0], [71.8, 1047.0], [71.9, 1047.0], [72.0, 1048.0], [72.1, 1048.0], [72.2, 1048.0], [72.3, 1056.0], [72.4, 1057.0], [72.5, 1057.0], [72.6, 1061.0], [72.7, 1062.0], [72.8, 1062.0], [72.9, 1062.0], [73.0, 1063.0], [73.1, 1077.0], [73.2, 1080.0], [73.3, 1080.0], [73.4, 1083.0], [73.5, 1084.0], [73.6, 1084.0], [73.7, 1086.0], [73.8, 1086.0], [73.9, 1088.0], [74.0, 1088.0], [74.1, 1088.0], [74.2, 1092.0], [74.3, 1093.0], [74.4, 1093.0], [74.5, 1093.0], [74.6, 1095.0], [74.7, 1096.0], [74.8, 1096.0], [74.9, 1096.0], [75.0, 1097.0], [75.1, 1097.0], [75.2, 1099.0], [75.3, 1106.0], [75.4, 1106.0], [75.5, 1106.0], [75.6, 1108.0], [75.7, 1109.0], [75.8, 1111.0], [75.9, 1111.0], [76.0, 1116.0], [76.1, 1117.0], [76.2, 1121.0], [76.3, 1121.0], [76.4, 1122.0], [76.5, 1124.0], [76.6, 1124.0], [76.7, 1124.0], [76.8, 1125.0], [76.9, 1125.0], [77.0, 1125.0], [77.1, 1126.0], [77.2, 1130.0], [77.3, 1130.0], [77.4, 1130.0], [77.5, 1131.0], [77.6, 1138.0], [77.7, 1138.0], [77.8, 1138.0], [77.9, 1140.0], [78.0, 1143.0], [78.1, 1143.0], [78.2, 1143.0], [78.3, 1145.0], [78.4, 1149.0], [78.5, 1149.0], [78.6, 1153.0], [78.7, 1154.0], [78.8, 1154.0], [78.9, 1154.0], [79.0, 1156.0], [79.1, 1160.0], [79.2, 1160.0], [79.3, 1160.0], [79.4, 1161.0], [79.5, 1161.0], [79.6, 1162.0], [79.7, 1162.0], [79.8, 1167.0], [79.9, 1177.0], [80.0, 1177.0], [80.1, 1177.0], [80.2, 1178.0], [80.3, 1178.0], [80.4, 1178.0], [80.5, 1181.0], [80.6, 1182.0], [80.7, 1185.0], [80.8, 1185.0], [80.9, 1187.0], [81.0, 1188.0], [81.1, 1188.0], [81.2, 1188.0], [81.3, 1191.0], [81.4, 1196.0], [81.5, 1199.0], [81.6, 1199.0], [81.7, 1199.0], [81.8, 1200.0], [81.9, 1200.0], [82.0, 1205.0], [82.1, 1206.0], [82.2, 1206.0], [82.3, 1206.0], [82.4, 1208.0], [82.5, 1215.0], [82.6, 1220.0], [82.7, 1220.0], [82.8, 1221.0], [82.9, 1222.0], [83.0, 1222.0], [83.1, 1222.0], [83.2, 1224.0], [83.3, 1224.0], [83.4, 1224.0], [83.5, 1225.0], [83.6, 1233.0], [83.7, 1234.0], [83.8, 1234.0], [83.9, 1239.0], [84.0, 1242.0], [84.1, 1246.0], [84.2, 1246.0], [84.3, 1247.0], [84.4, 1250.0], [84.5, 1252.0], [84.6, 1252.0], [84.7, 1253.0], [84.8, 1261.0], [84.9, 1262.0], [85.0, 1262.0], [85.1, 1271.0], [85.2, 1275.0], [85.3, 1275.0], [85.4, 1277.0], [85.5, 1282.0], [85.6, 1284.0], [85.7, 1284.0], [85.8, 1288.0], [85.9, 1288.0], [86.0, 1293.0], [86.1, 1293.0], [86.2, 1293.0], [86.3, 1293.0], [86.4, 1294.0], [86.5, 1294.0], [86.6, 1295.0], [86.7, 1298.0], [86.8, 1298.0], [86.9, 1300.0], [87.0, 1300.0], [87.1, 1300.0], [87.2, 1300.0], [87.3, 1301.0], [87.4, 1301.0], [87.5, 1304.0], [87.6, 1304.0], [87.7, 1304.0], [87.8, 1305.0], [87.9, 1306.0], [88.0, 1306.0], [88.1, 1308.0], [88.2, 1311.0], [88.3, 1315.0], [88.4, 1315.0], [88.5, 1317.0], [88.6, 1320.0], [88.7, 1320.0], [88.8, 1321.0], [88.9, 1325.0], [89.0, 1327.0], [89.1, 1327.0], [89.2, 1327.0], [89.3, 1327.0], [89.4, 1335.0], [89.5, 1335.0], [89.6, 1336.0], [89.7, 1346.0], [89.8, 1348.0], [89.9, 1348.0], [90.0, 1349.0], [90.1, 1351.0], [90.2, 1351.0], [90.3, 1354.0], [90.4, 1355.0], [90.5, 1359.0], [90.6, 1359.0], [90.7, 1360.0], [90.8, 1372.0], [90.9, 1377.0], [91.0, 1377.0], [91.1, 1378.0], [91.2, 1383.0], [91.3, 1384.0], [91.4, 1384.0], [91.5, 1384.0], [91.6, 1388.0], [91.7, 1388.0], [91.8, 1389.0], [91.9, 1392.0], [92.0, 1407.0], [92.1, 1407.0], [92.2, 1407.0], [92.3, 1411.0], [92.4, 1416.0], [92.5, 1416.0], [92.6, 1420.0], [92.7, 1430.0], [92.8, 1446.0], [92.9, 1446.0], [93.0, 1476.0], [93.1, 1482.0], [93.2, 1483.0], [93.3, 1483.0], [93.4, 1491.0], [93.5, 1500.0], [93.6, 1500.0], [93.7, 1507.0], [93.8, 1508.0], [93.9, 1530.0], [94.0, 1530.0], [94.1, 1532.0], [94.2, 1536.0], [94.3, 1552.0], [94.4, 1552.0], [94.5, 1573.0], [94.6, 1580.0], [94.7, 1583.0], [94.8, 1583.0], [94.9, 1605.0], [95.0, 1621.0], [95.1, 1621.0], [95.2, 1628.0], [95.3, 1652.0], [95.4, 1656.0], [95.5, 1656.0], [95.6, 1665.0], [95.7, 1690.0], [95.8, 1705.0], [95.9, 1705.0], [96.0, 1706.0], [96.1, 1710.0], [96.2, 1718.0], [96.3, 1718.0], [96.4, 1749.0], [96.5, 1754.0], [96.6, 1788.0], [96.7, 1788.0], [96.8, 1816.0], [96.9, 1833.0], [97.0, 1833.0], [97.1, 1834.0], [97.2, 1888.0], [97.3, 1912.0], [97.4, 1912.0], [97.5, 1928.0], [97.6, 2016.0], [97.7, 2117.0], [97.8, 2117.0], [97.9, 2236.0], [98.0, 2271.0], [98.1, 2282.0], [98.2, 2282.0], [98.3, 2318.0], [98.4, 2460.0], [98.5, 2460.0], [98.6, 2514.0], [98.7, 2658.0], [98.8, 2809.0], [98.9, 2809.0], [99.0, 2836.0], [99.1, 2870.0], [99.2, 2916.0], [99.3, 2916.0], [99.4, 2994.0], [99.5, 3092.0], [99.6, 3231.0], [99.7, 3231.0], [99.8, 3301.0], [99.9, 3484.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 83.0, "series": [{"data": [[600.0, 65.0], [700.0, 60.0], [800.0, 57.0], [900.0, 72.0], [1000.0, 51.0], [1100.0, 48.0], [1200.0, 37.0], [1300.0, 38.0], [1400.0, 11.0], [1500.0, 10.0], [1600.0, 7.0], [1700.0, 7.0], [1800.0, 4.0], [1900.0, 2.0], [2000.0, 1.0], [2100.0, 1.0], [2300.0, 1.0], [2200.0, 3.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 3.0], [2900.0, 2.0], [3000.0, 1.0], [3300.0, 1.0], [3200.0, 1.0], [200.0, 39.0], [3400.0, 1.0], [300.0, 57.0], [400.0, 69.0], [500.0, 83.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 47.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 522.0, "series": [{"data": [[0.0, 166.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 522.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 47.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.755434782608694, "minX": 1.60374288E12, "maxY": 10.0, "series": [{"data": [[1.60374294E12, 9.755434782608694], [1.60374288E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374294E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 257.0, "minX": 1.0, "maxY": 975.0, "series": [{"data": [[8.0, 548.0], [4.0, 651.0], [2.0, 648.0], [1.0, 965.0], [9.0, 530.0], [10.0, 861.6515151515155], [5.0, 566.0], [6.0, 577.0], [3.0, 975.0], [7.0, 257.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 858.8789115646263]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1375.4833333333333, "minX": 1.60374288E12, "maxY": 1442157.7333333334, "series": [{"data": [[1.60374294E12, 393630.2166666667], [1.60374288E12, 1442157.7333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60374294E12, 1375.4833333333333], [1.60374288E12, 4147.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374294E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 787.3695652173911, "minX": 1.60374288E12, "maxY": 882.758620689655, "series": [{"data": [[1.60374294E12, 787.3695652173911], [1.60374288E12, 882.758620689655]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374294E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 786.3315217391305, "minX": 1.60374288E12, "maxY": 881.5045372050812, "series": [{"data": [[1.60374294E12, 786.3315217391305], [1.60374288E12, 881.5045372050812]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374294E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.06521739130434784, "minX": 1.60374288E12, "maxY": 0.15245009074410193, "series": [{"data": [[1.60374294E12, 0.06521739130434784], [1.60374288E12, 0.15245009074410193]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374294E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 205.0, "minX": 1.60374288E12, "maxY": 3484.0, "series": [{"data": [[1.60374294E12, 2282.0], [1.60374288E12, 3484.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60374294E12, 231.97999947071077], [1.60374288E12, 216.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60374294E12, 233.9780002117157], [1.60374288E12, 217.39440015792846]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60374294E12, 233.08999973535538], [1.60374288E12, 216.73199980258943]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60374294E12, 224.0], [1.60374288E12, 205.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60374294E12, 717.5], [1.60374288E12, 810.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374294E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 476.0, "minX": 1.0, "maxY": 2460.0, "series": [{"data": [[8.0, 871.5], [9.0, 887.0], [10.0, 897.5], [11.0, 1006.0], [12.0, 900.0], [13.0, 671.0], [14.0, 677.0], [15.0, 585.0], [1.0, 2460.0], [16.0, 636.5], [17.0, 603.0], [19.0, 665.0], [20.0, 476.0], [5.0, 651.0], [7.0, 1047.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 475.5, "minX": 1.0, "maxY": 2457.0, "series": [{"data": [[8.0, 871.0], [9.0, 886.0], [10.0, 896.5], [11.0, 1006.0], [12.0, 896.5], [13.0, 670.5], [14.0, 673.5], [15.0, 584.5], [1.0, 2457.0], [16.0, 636.5], [17.0, 603.0], [19.0, 664.0], [20.0, 475.5], [5.0, 651.0], [7.0, 1045.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.9, "minX": 1.60374288E12, "maxY": 9.35, "series": [{"data": [[1.60374294E12, 2.9], [1.60374288E12, 9.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374294E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.066666666666667, "minX": 1.60374288E12, "maxY": 9.183333333333334, "series": [{"data": [[1.60374294E12, 3.066666666666667], [1.60374288E12, 9.183333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374294E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.066666666666667, "minX": 1.60374288E12, "maxY": 9.183333333333334, "series": [{"data": [[1.60374294E12, 3.066666666666667], [1.60374288E12, 9.183333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374294E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.066666666666667, "minX": 1.60374288E12, "maxY": 9.183333333333334, "series": [{"data": [[1.60374294E12, 3.066666666666667], [1.60374288E12, 9.183333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374294E12, "title": "Total Transactions Per Second"}},
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

