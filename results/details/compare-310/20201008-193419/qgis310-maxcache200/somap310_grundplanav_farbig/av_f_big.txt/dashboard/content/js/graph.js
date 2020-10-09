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
        data: {"result": {"minY": 170.0, "minX": 0.0, "maxY": 3747.0, "series": [{"data": [[0.0, 170.0], [0.1, 170.0], [0.2, 175.0], [0.3, 175.0], [0.4, 175.0], [0.5, 181.0], [0.6, 181.0], [0.7, 182.0], [0.8, 182.0], [0.9, 184.0], [1.0, 185.0], [1.1, 186.0], [1.2, 186.0], [1.3, 191.0], [1.4, 193.0], [1.5, 193.0], [1.6, 193.0], [1.7, 194.0], [1.8, 195.0], [1.9, 195.0], [2.0, 197.0], [2.1, 201.0], [2.2, 203.0], [2.3, 203.0], [2.4, 204.0], [2.5, 207.0], [2.6, 209.0], [2.7, 209.0], [2.8, 214.0], [2.9, 222.0], [3.0, 225.0], [3.1, 225.0], [3.2, 227.0], [3.3, 231.0], [3.4, 231.0], [3.5, 239.0], [3.6, 243.0], [3.7, 243.0], [3.8, 243.0], [3.9, 247.0], [4.0, 247.0], [4.1, 247.0], [4.2, 247.0], [4.3, 248.0], [4.4, 251.0], [4.5, 251.0], [4.6, 251.0], [4.7, 252.0], [4.8, 253.0], [4.9, 255.0], [5.0, 255.0], [5.1, 258.0], [5.2, 263.0], [5.3, 263.0], [5.4, 263.0], [5.5, 265.0], [5.6, 267.0], [5.7, 267.0], [5.8, 269.0], [5.9, 269.0], [6.0, 270.0], [6.1, 270.0], [6.2, 271.0], [6.3, 273.0], [6.4, 273.0], [6.5, 273.0], [6.6, 277.0], [6.7, 277.0], [6.8, 277.0], [6.9, 280.0], [7.0, 283.0], [7.1, 283.0], [7.2, 283.0], [7.3, 284.0], [7.4, 285.0], [7.5, 285.0], [7.6, 285.0], [7.7, 286.0], [7.8, 292.0], [7.9, 293.0], [8.0, 293.0], [8.1, 293.0], [8.2, 295.0], [8.3, 296.0], [8.4, 296.0], [8.5, 298.0], [8.6, 299.0], [8.7, 299.0], [8.8, 299.0], [8.9, 304.0], [9.0, 308.0], [9.1, 308.0], [9.2, 309.0], [9.3, 309.0], [9.4, 309.0], [9.5, 309.0], [9.6, 321.0], [9.7, 328.0], [9.8, 333.0], [9.9, 333.0], [10.0, 338.0], [10.1, 347.0], [10.2, 347.0], [10.3, 348.0], [10.4, 349.0], [10.5, 349.0], [10.6, 349.0], [10.7, 349.0], [10.8, 351.0], [10.9, 352.0], [11.0, 352.0], [11.1, 353.0], [11.2, 354.0], [11.3, 361.0], [11.4, 361.0], [11.5, 366.0], [11.6, 366.0], [11.7, 366.0], [11.8, 369.0], [11.9, 370.0], [12.0, 373.0], [12.1, 373.0], [12.2, 375.0], [12.3, 379.0], [12.4, 380.0], [12.5, 380.0], [12.6, 381.0], [12.7, 385.0], [12.8, 385.0], [12.9, 385.0], [13.0, 392.0], [13.1, 393.0], [13.2, 400.0], [13.3, 400.0], [13.4, 400.0], [13.5, 401.0], [13.6, 401.0], [13.7, 401.0], [13.8, 402.0], [13.9, 408.0], [14.0, 408.0], [14.1, 417.0], [14.2, 418.0], [14.3, 418.0], [14.4, 418.0], [14.5, 419.0], [14.6, 420.0], [14.7, 422.0], [14.8, 422.0], [14.9, 425.0], [15.0, 426.0], [15.1, 426.0], [15.2, 428.0], [15.3, 429.0], [15.4, 430.0], [15.5, 430.0], [15.6, 432.0], [15.7, 433.0], [15.8, 435.0], [15.9, 435.0], [16.0, 435.0], [16.1, 439.0], [16.2, 441.0], [16.3, 441.0], [16.4, 441.0], [16.5, 442.0], [16.6, 443.0], [16.7, 443.0], [16.8, 445.0], [16.9, 451.0], [17.0, 451.0], [17.1, 452.0], [17.2, 454.0], [17.3, 456.0], [17.4, 456.0], [17.5, 457.0], [17.6, 460.0], [17.7, 465.0], [17.8, 465.0], [17.9, 467.0], [18.0, 468.0], [18.1, 470.0], [18.2, 470.0], [18.3, 470.0], [18.4, 471.0], [18.5, 471.0], [18.6, 472.0], [18.7, 472.0], [18.8, 474.0], [18.9, 474.0], [19.0, 474.0], [19.1, 475.0], [19.2, 477.0], [19.3, 477.0], [19.4, 479.0], [19.5, 480.0], [19.6, 481.0], [19.7, 481.0], [19.8, 481.0], [19.9, 482.0], [20.0, 482.0], [20.1, 482.0], [20.2, 483.0], [20.3, 494.0], [20.4, 494.0], [20.5, 494.0], [20.6, 496.0], [20.7, 496.0], [20.8, 496.0], [20.9, 498.0], [21.0, 499.0], [21.1, 501.0], [21.2, 501.0], [21.3, 501.0], [21.4, 501.0], [21.5, 505.0], [21.6, 505.0], [21.7, 507.0], [21.8, 507.0], [21.9, 507.0], [22.0, 507.0], [22.1, 508.0], [22.2, 508.0], [22.3, 508.0], [22.4, 513.0], [22.5, 514.0], [22.6, 515.0], [22.7, 515.0], [22.8, 518.0], [22.9, 518.0], [23.0, 518.0], [23.1, 518.0], [23.2, 519.0], [23.3, 520.0], [23.4, 520.0], [23.5, 521.0], [23.6, 521.0], [23.7, 522.0], [23.8, 522.0], [23.9, 524.0], [24.0, 526.0], [24.1, 527.0], [24.2, 527.0], [24.3, 527.0], [24.4, 528.0], [24.5, 531.0], [24.6, 531.0], [24.7, 533.0], [24.8, 534.0], [24.9, 535.0], [25.0, 535.0], [25.1, 536.0], [25.2, 537.0], [25.3, 537.0], [25.4, 539.0], [25.5, 539.0], [25.6, 541.0], [25.7, 541.0], [25.8, 543.0], [25.9, 544.0], [26.0, 544.0], [26.1, 544.0], [26.2, 545.0], [26.3, 546.0], [26.4, 547.0], [26.5, 547.0], [26.6, 547.0], [26.7, 548.0], [26.8, 548.0], [26.9, 549.0], [27.0, 550.0], [27.1, 551.0], [27.2, 551.0], [27.3, 553.0], [27.4, 553.0], [27.5, 555.0], [27.6, 555.0], [27.7, 558.0], [27.8, 559.0], [27.9, 559.0], [28.0, 559.0], [28.1, 559.0], [28.2, 560.0], [28.3, 560.0], [28.4, 560.0], [28.5, 563.0], [28.6, 563.0], [28.7, 563.0], [28.8, 564.0], [28.9, 564.0], [29.0, 565.0], [29.1, 565.0], [29.2, 565.0], [29.3, 565.0], [29.4, 566.0], [29.5, 566.0], [29.6, 566.0], [29.7, 568.0], [29.8, 568.0], [29.9, 568.0], [30.0, 570.0], [30.1, 571.0], [30.2, 571.0], [30.3, 574.0], [30.4, 575.0], [30.5, 576.0], [30.6, 576.0], [30.7, 576.0], [30.8, 577.0], [30.9, 578.0], [31.0, 578.0], [31.1, 579.0], [31.2, 580.0], [31.3, 580.0], [31.4, 580.0], [31.5, 581.0], [31.6, 582.0], [31.7, 582.0], [31.8, 582.0], [31.9, 582.0], [32.0, 584.0], [32.1, 584.0], [32.2, 584.0], [32.3, 587.0], [32.4, 589.0], [32.5, 589.0], [32.6, 590.0], [32.7, 591.0], [32.8, 594.0], [32.9, 594.0], [33.0, 596.0], [33.1, 596.0], [33.2, 597.0], [33.3, 597.0], [33.4, 597.0], [33.5, 598.0], [33.6, 598.0], [33.7, 599.0], [33.8, 600.0], [33.9, 601.0], [34.0, 601.0], [34.1, 603.0], [34.2, 603.0], [34.3, 604.0], [34.4, 604.0], [34.5, 606.0], [34.6, 606.0], [34.7, 607.0], [34.8, 607.0], [34.9, 608.0], [35.0, 611.0], [35.1, 611.0], [35.2, 612.0], [35.3, 612.0], [35.4, 612.0], [35.5, 612.0], [35.6, 613.0], [35.7, 614.0], [35.8, 616.0], [35.9, 616.0], [36.0, 620.0], [36.1, 620.0], [36.2, 622.0], [36.3, 622.0], [36.4, 626.0], [36.5, 627.0], [36.6, 627.0], [36.7, 627.0], [36.8, 629.0], [36.9, 631.0], [37.0, 631.0], [37.1, 631.0], [37.2, 635.0], [37.3, 635.0], [37.4, 635.0], [37.5, 637.0], [37.6, 637.0], [37.7, 639.0], [37.8, 639.0], [37.9, 640.0], [38.0, 643.0], [38.1, 643.0], [38.2, 643.0], [38.3, 645.0], [38.4, 645.0], [38.5, 645.0], [38.6, 647.0], [38.7, 647.0], [38.8, 648.0], [38.9, 648.0], [39.0, 651.0], [39.1, 651.0], [39.2, 652.0], [39.3, 652.0], [39.4, 652.0], [39.5, 655.0], [39.6, 658.0], [39.7, 658.0], [39.8, 658.0], [39.9, 658.0], [40.0, 660.0], [40.1, 660.0], [40.2, 664.0], [40.3, 667.0], [40.4, 667.0], [40.5, 668.0], [40.6, 670.0], [40.7, 671.0], [40.8, 671.0], [40.9, 672.0], [41.0, 677.0], [41.1, 680.0], [41.2, 680.0], [41.3, 681.0], [41.4, 685.0], [41.5, 687.0], [41.6, 687.0], [41.7, 687.0], [41.8, 687.0], [41.9, 687.0], [42.0, 689.0], [42.1, 689.0], [42.2, 689.0], [42.3, 689.0], [42.4, 691.0], [42.5, 694.0], [42.6, 695.0], [42.7, 695.0], [42.8, 698.0], [42.9, 701.0], [43.0, 701.0], [43.1, 701.0], [43.2, 704.0], [43.3, 706.0], [43.4, 706.0], [43.5, 708.0], [43.6, 712.0], [43.7, 713.0], [43.8, 713.0], [43.9, 714.0], [44.0, 714.0], [44.1, 714.0], [44.2, 714.0], [44.3, 715.0], [44.4, 719.0], [44.5, 720.0], [44.6, 720.0], [44.7, 727.0], [44.8, 727.0], [44.9, 728.0], [45.0, 728.0], [45.1, 728.0], [45.2, 730.0], [45.3, 730.0], [45.4, 733.0], [45.5, 733.0], [45.6, 737.0], [45.7, 737.0], [45.8, 737.0], [45.9, 739.0], [46.0, 741.0], [46.1, 741.0], [46.2, 742.0], [46.3, 745.0], [46.4, 748.0], [46.5, 748.0], [46.6, 754.0], [46.7, 754.0], [46.8, 754.0], [46.9, 755.0], [47.0, 756.0], [47.1, 757.0], [47.2, 757.0], [47.3, 760.0], [47.4, 762.0], [47.5, 763.0], [47.6, 763.0], [47.7, 766.0], [47.8, 769.0], [47.9, 771.0], [48.0, 771.0], [48.1, 771.0], [48.2, 774.0], [48.3, 779.0], [48.4, 779.0], [48.5, 781.0], [48.6, 782.0], [48.7, 782.0], [48.8, 782.0], [48.9, 783.0], [49.0, 784.0], [49.1, 784.0], [49.2, 786.0], [49.3, 787.0], [49.4, 789.0], [49.5, 789.0], [49.6, 791.0], [49.7, 793.0], [49.8, 793.0], [49.9, 793.0], [50.0, 794.0], [50.1, 796.0], [50.2, 796.0], [50.3, 796.0], [50.4, 796.0], [50.5, 798.0], [50.6, 798.0], [50.7, 800.0], [50.8, 801.0], [50.9, 804.0], [51.0, 804.0], [51.1, 806.0], [51.2, 810.0], [51.3, 810.0], [51.4, 810.0], [51.5, 811.0], [51.6, 812.0], [51.7, 812.0], [51.8, 815.0], [51.9, 815.0], [52.0, 817.0], [52.1, 817.0], [52.2, 817.0], [52.3, 818.0], [52.4, 823.0], [52.5, 823.0], [52.6, 828.0], [52.7, 829.0], [52.8, 829.0], [52.9, 829.0], [53.0, 830.0], [53.1, 831.0], [53.2, 833.0], [53.3, 833.0], [53.4, 833.0], [53.5, 834.0], [53.6, 834.0], [53.7, 835.0], [53.8, 837.0], [53.9, 838.0], [54.0, 838.0], [54.1, 840.0], [54.2, 841.0], [54.3, 842.0], [54.4, 842.0], [54.5, 844.0], [54.6, 845.0], [54.7, 845.0], [54.8, 845.0], [54.9, 850.0], [55.0, 851.0], [55.1, 851.0], [55.2, 852.0], [55.3, 853.0], [55.4, 854.0], [55.5, 854.0], [55.6, 857.0], [55.7, 857.0], [55.8, 865.0], [55.9, 865.0], [56.0, 866.0], [56.1, 868.0], [56.2, 871.0], [56.3, 871.0], [56.4, 872.0], [56.5, 873.0], [56.6, 874.0], [56.7, 874.0], [56.8, 875.0], [56.9, 876.0], [57.0, 876.0], [57.1, 885.0], [57.2, 890.0], [57.3, 892.0], [57.4, 892.0], [57.5, 893.0], [57.6, 895.0], [57.7, 898.0], [57.8, 898.0], [57.9, 900.0], [58.0, 900.0], [58.1, 901.0], [58.2, 901.0], [58.3, 901.0], [58.4, 904.0], [58.5, 904.0], [58.6, 906.0], [58.7, 906.0], [58.8, 907.0], [58.9, 907.0], [59.0, 907.0], [59.1, 907.0], [59.2, 910.0], [59.3, 910.0], [59.4, 910.0], [59.5, 910.0], [59.6, 913.0], [59.7, 913.0], [59.8, 913.0], [59.9, 914.0], [60.0, 914.0], [60.1, 914.0], [60.2, 916.0], [60.3, 917.0], [60.4, 917.0], [60.5, 917.0], [60.6, 918.0], [60.7, 919.0], [60.8, 919.0], [60.9, 920.0], [61.0, 921.0], [61.1, 921.0], [61.2, 921.0], [61.3, 924.0], [61.4, 925.0], [61.5, 927.0], [61.6, 927.0], [61.7, 928.0], [61.8, 928.0], [61.9, 928.0], [62.0, 934.0], [62.1, 935.0], [62.2, 936.0], [62.3, 936.0], [62.4, 938.0], [62.5, 940.0], [62.6, 942.0], [62.7, 942.0], [62.8, 944.0], [62.9, 944.0], [63.0, 944.0], [63.1, 944.0], [63.2, 945.0], [63.3, 946.0], [63.4, 946.0], [63.5, 947.0], [63.6, 948.0], [63.7, 953.0], [63.8, 953.0], [63.9, 953.0], [64.0, 954.0], [64.1, 957.0], [64.2, 957.0], [64.3, 958.0], [64.4, 959.0], [64.5, 961.0], [64.6, 961.0], [64.7, 962.0], [64.8, 964.0], [64.9, 967.0], [65.0, 967.0], [65.1, 968.0], [65.2, 968.0], [65.3, 968.0], [65.4, 969.0], [65.5, 970.0], [65.6, 971.0], [65.7, 971.0], [65.8, 973.0], [65.9, 977.0], [66.0, 982.0], [66.1, 982.0], [66.2, 985.0], [66.3, 987.0], [66.4, 989.0], [66.5, 989.0], [66.6, 989.0], [66.7, 989.0], [66.8, 989.0], [66.9, 990.0], [67.0, 990.0], [67.1, 990.0], [67.2, 990.0], [67.3, 992.0], [67.4, 994.0], [67.5, 995.0], [67.6, 995.0], [67.7, 996.0], [67.8, 1000.0], [67.9, 1001.0], [68.0, 1001.0], [68.1, 1003.0], [68.2, 1003.0], [68.3, 1003.0], [68.4, 1003.0], [68.5, 1005.0], [68.6, 1008.0], [68.7, 1008.0], [68.8, 1009.0], [68.9, 1011.0], [69.0, 1011.0], [69.1, 1011.0], [69.2, 1014.0], [69.3, 1014.0], [69.4, 1014.0], [69.5, 1014.0], [69.6, 1014.0], [69.7, 1016.0], [69.8, 1017.0], [69.9, 1017.0], [70.0, 1019.0], [70.1, 1020.0], [70.2, 1020.0], [70.3, 1020.0], [70.4, 1021.0], [70.5, 1021.0], [70.6, 1021.0], [70.7, 1022.0], [70.8, 1025.0], [70.9, 1025.0], [71.0, 1025.0], [71.1, 1026.0], [71.2, 1027.0], [71.3, 1027.0], [71.4, 1027.0], [71.5, 1029.0], [71.6, 1031.0], [71.7, 1031.0], [71.8, 1033.0], [71.9, 1037.0], [72.0, 1041.0], [72.1, 1041.0], [72.2, 1043.0], [72.3, 1043.0], [72.4, 1046.0], [72.5, 1046.0], [72.6, 1049.0], [72.7, 1052.0], [72.8, 1053.0], [72.9, 1053.0], [73.0, 1053.0], [73.1, 1054.0], [73.2, 1055.0], [73.3, 1055.0], [73.4, 1057.0], [73.5, 1058.0], [73.6, 1058.0], [73.7, 1059.0], [73.8, 1059.0], [73.9, 1060.0], [74.0, 1060.0], [74.1, 1062.0], [74.2, 1066.0], [74.3, 1067.0], [74.4, 1067.0], [74.5, 1069.0], [74.6, 1069.0], [74.7, 1069.0], [74.8, 1069.0], [74.9, 1070.0], [75.0, 1072.0], [75.1, 1072.0], [75.2, 1073.0], [75.3, 1074.0], [75.4, 1076.0], [75.5, 1076.0], [75.6, 1077.0], [75.7, 1077.0], [75.8, 1078.0], [75.9, 1078.0], [76.0, 1081.0], [76.1, 1085.0], [76.2, 1085.0], [76.3, 1085.0], [76.4, 1085.0], [76.5, 1088.0], [76.6, 1092.0], [76.7, 1092.0], [76.8, 1093.0], [76.9, 1097.0], [77.0, 1097.0], [77.1, 1097.0], [77.2, 1099.0], [77.3, 1100.0], [77.4, 1100.0], [77.5, 1103.0], [77.6, 1103.0], [77.7, 1105.0], [77.8, 1105.0], [77.9, 1106.0], [78.0, 1106.0], [78.1, 1107.0], [78.2, 1107.0], [78.3, 1107.0], [78.4, 1108.0], [78.5, 1108.0], [78.6, 1109.0], [78.7, 1110.0], [78.8, 1115.0], [78.9, 1115.0], [79.0, 1117.0], [79.1, 1123.0], [79.2, 1128.0], [79.3, 1128.0], [79.4, 1128.0], [79.5, 1131.0], [79.6, 1132.0], [79.7, 1132.0], [79.8, 1133.0], [79.9, 1136.0], [80.0, 1137.0], [80.1, 1137.0], [80.2, 1139.0], [80.3, 1140.0], [80.4, 1140.0], [80.5, 1141.0], [80.6, 1141.0], [80.7, 1144.0], [80.8, 1144.0], [80.9, 1144.0], [81.0, 1146.0], [81.1, 1146.0], [81.2, 1146.0], [81.3, 1151.0], [81.4, 1152.0], [81.5, 1152.0], [81.6, 1152.0], [81.7, 1152.0], [81.8, 1153.0], [81.9, 1153.0], [82.0, 1159.0], [82.1, 1160.0], [82.2, 1162.0], [82.3, 1162.0], [82.4, 1164.0], [82.5, 1168.0], [82.6, 1171.0], [82.7, 1171.0], [82.8, 1178.0], [82.9, 1180.0], [83.0, 1183.0], [83.1, 1183.0], [83.2, 1183.0], [83.3, 1185.0], [83.4, 1185.0], [83.5, 1186.0], [83.6, 1190.0], [83.7, 1190.0], [83.8, 1190.0], [83.9, 1192.0], [84.0, 1194.0], [84.1, 1200.0], [84.2, 1200.0], [84.3, 1202.0], [84.4, 1205.0], [84.5, 1212.0], [84.6, 1212.0], [84.7, 1212.0], [84.8, 1212.0], [84.9, 1214.0], [85.0, 1214.0], [85.1, 1214.0], [85.2, 1215.0], [85.3, 1215.0], [85.4, 1217.0], [85.5, 1221.0], [85.6, 1223.0], [85.7, 1223.0], [85.8, 1223.0], [85.9, 1225.0], [86.0, 1225.0], [86.1, 1225.0], [86.2, 1228.0], [86.3, 1233.0], [86.4, 1233.0], [86.5, 1233.0], [86.6, 1235.0], [86.7, 1239.0], [86.8, 1239.0], [86.9, 1241.0], [87.0, 1243.0], [87.1, 1245.0], [87.2, 1245.0], [87.3, 1248.0], [87.4, 1255.0], [87.5, 1255.0], [87.6, 1255.0], [87.7, 1263.0], [87.8, 1264.0], [87.9, 1269.0], [88.0, 1269.0], [88.1, 1270.0], [88.2, 1270.0], [88.3, 1270.0], [88.4, 1270.0], [88.5, 1271.0], [88.6, 1274.0], [88.7, 1274.0], [88.8, 1285.0], [88.9, 1286.0], [89.0, 1286.0], [89.1, 1286.0], [89.2, 1286.0], [89.3, 1291.0], [89.4, 1295.0], [89.5, 1295.0], [89.6, 1295.0], [89.7, 1296.0], [89.8, 1303.0], [89.9, 1303.0], [90.0, 1304.0], [90.1, 1315.0], [90.2, 1315.0], [90.3, 1315.0], [90.4, 1316.0], [90.5, 1327.0], [90.6, 1327.0], [90.7, 1331.0], [90.8, 1343.0], [90.9, 1344.0], [91.0, 1344.0], [91.1, 1348.0], [91.2, 1358.0], [91.3, 1369.0], [91.4, 1369.0], [91.5, 1370.0], [91.6, 1373.0], [91.7, 1373.0], [91.8, 1375.0], [91.9, 1382.0], [92.0, 1386.0], [92.1, 1386.0], [92.2, 1391.0], [92.3, 1401.0], [92.4, 1407.0], [92.5, 1407.0], [92.6, 1408.0], [92.7, 1416.0], [92.8, 1416.0], [92.9, 1416.0], [93.0, 1426.0], [93.1, 1431.0], [93.2, 1457.0], [93.3, 1457.0], [93.4, 1476.0], [93.5, 1476.0], [93.6, 1476.0], [93.7, 1485.0], [93.8, 1502.0], [93.9, 1507.0], [94.0, 1507.0], [94.1, 1529.0], [94.2, 1573.0], [94.3, 1587.0], [94.4, 1587.0], [94.5, 1590.0], [94.6, 1606.0], [94.7, 1609.0], [94.8, 1609.0], [94.9, 1671.0], [95.0, 1674.0], [95.1, 1674.0], [95.2, 1682.0], [95.3, 1692.0], [95.4, 1692.0], [95.5, 1692.0], [95.6, 1694.0], [95.7, 1699.0], [95.8, 1728.0], [95.9, 1728.0], [96.0, 1739.0], [96.1, 1800.0], [96.2, 1802.0], [96.3, 1802.0], [96.4, 1805.0], [96.5, 1841.0], [96.6, 1872.0], [96.7, 1872.0], [96.8, 1877.0], [96.9, 1907.0], [97.0, 1907.0], [97.1, 1914.0], [97.2, 1916.0], [97.3, 1946.0], [97.4, 1946.0], [97.5, 1965.0], [97.6, 1975.0], [97.7, 2016.0], [97.8, 2016.0], [97.9, 2138.0], [98.0, 2334.0], [98.1, 2617.0], [98.2, 2617.0], [98.3, 2797.0], [98.4, 2904.0], [98.5, 2904.0], [98.6, 2913.0], [98.7, 2939.0], [98.8, 2950.0], [98.9, 2950.0], [99.0, 3006.0], [99.1, 3025.0], [99.2, 3035.0], [99.3, 3035.0], [99.4, 3100.0], [99.5, 3117.0], [99.6, 3144.0], [99.7, 3144.0], [99.8, 3153.0], [99.9, 3747.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 93.0, "series": [{"data": [[600.0, 67.0], [700.0, 57.0], [800.0, 53.0], [900.0, 73.0], [1000.0, 70.0], [1100.0, 50.0], [1200.0, 42.0], [1300.0, 18.0], [1400.0, 11.0], [1500.0, 6.0], [100.0, 15.0], [1600.0, 9.0], [1700.0, 2.0], [1800.0, 6.0], [1900.0, 6.0], [2000.0, 1.0], [2100.0, 1.0], [2300.0, 1.0], [2600.0, 1.0], [2700.0, 1.0], [2900.0, 4.0], [3000.0, 3.0], [3100.0, 4.0], [200.0, 50.0], [3700.0, 1.0], [300.0, 32.0], [400.0, 58.0], [500.0, 93.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 46.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 534.0, "series": [{"data": [[0.0, 155.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 534.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 46.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.933333333333332, "minX": 1.60218726E12, "maxY": 10.0, "series": [{"data": [[1.60218732E12, 9.933333333333332], [1.60218726E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218732E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 285.0, "minX": 1.0, "maxY": 1003.0, "series": [{"data": [[8.0, 285.0], [4.0, 539.0], [2.0, 635.0], [1.0, 987.0], [10.0, 853.9546079779925], [5.0, 596.0], [6.0, 925.0], [3.0, 1003.0], [7.0, 589.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 852.2231292517014]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 567.75, "minX": 1.60218726E12, "maxY": 1530272.7833333334, "series": [{"data": [[1.60218732E12, 1530272.7833333334], [1.60218726E12, 305476.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218732E12, 4955.283333333334], [1.60218726E12, 567.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218732E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 825.5575757575756, "minX": 1.60218726E12, "maxY": 1086.8799999999997, "series": [{"data": [[1.60218732E12, 825.5575757575756], [1.60218726E12, 1086.8799999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218732E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 824.5515151515159, "minX": 1.60218726E12, "maxY": 1085.2666666666667, "series": [{"data": [[1.60218732E12, 824.5515151515159], [1.60218726E12, 1085.2666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218732E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.02272727272727273, "minX": 1.60218726E12, "maxY": 1.6, "series": [{"data": [[1.60218732E12, 0.02272727272727273], [1.60218726E12, 1.6]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218732E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 170.0, "minX": 1.60218726E12, "maxY": 3747.0, "series": [{"data": [[1.60218732E12, 3144.0], [1.60218726E12, 3747.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218732E12, 184.94899984240533], [1.60218726E12, 170.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218732E12, 185.54390006303788], [1.60218726E12, 170.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218732E12, 185.27949992120267], [1.60218726E12, 170.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218732E12, 175.0], [1.60218726E12, 170.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218732E12, 795.0], [1.60218726E12, 783.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218732E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 480.0, "minX": 6.0, "maxY": 2913.0, "series": [{"data": [[8.0, 1042.5], [9.0, 1058.5], [10.0, 938.0], [11.0, 935.0], [12.0, 798.5], [13.0, 645.0], [14.0, 737.0], [15.0, 2913.0], [16.0, 611.5], [17.0, 568.0], [18.0, 561.5], [19.0, 507.0], [20.0, 480.0], [6.0, 780.0], [7.0, 1144.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 479.5, "minX": 6.0, "maxY": 2912.0, "series": [{"data": [[8.0, 1042.5], [9.0, 1058.0], [10.0, 938.0], [11.0, 934.0], [12.0, 797.5], [13.0, 644.0], [14.0, 737.0], [15.0, 2912.0], [16.0, 611.0], [17.0, 567.5], [18.0, 561.5], [19.0, 507.0], [20.0, 479.5], [6.0, 780.0], [7.0, 1143.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4166666666666667, "minX": 1.60218726E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60218732E12, 10.833333333333334], [1.60218726E12, 1.4166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218732E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.60218726E12, "maxY": 11.0, "series": [{"data": [[1.60218732E12, 11.0], [1.60218726E12, 1.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218732E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.60218726E12, "maxY": 11.0, "series": [{"data": [[1.60218732E12, 11.0], [1.60218726E12, 1.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218732E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.60218726E12, "maxY": 11.0, "series": [{"data": [[1.60218732E12, 11.0], [1.60218726E12, 1.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218732E12, "title": "Total Transactions Per Second"}},
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

