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
        data: {"result": {"minY": 190.0, "minX": 0.0, "maxY": 3636.0, "series": [{"data": [[0.0, 190.0], [0.1, 190.0], [0.2, 192.0], [0.3, 203.0], [0.4, 203.0], [0.5, 203.0], [0.6, 204.0], [0.7, 207.0], [0.8, 207.0], [0.9, 208.0], [1.0, 210.0], [1.1, 215.0], [1.2, 215.0], [1.3, 218.0], [1.4, 220.0], [1.5, 221.0], [1.6, 221.0], [1.7, 226.0], [1.8, 228.0], [1.9, 228.0], [2.0, 237.0], [2.1, 241.0], [2.2, 242.0], [2.3, 242.0], [2.4, 243.0], [2.5, 245.0], [2.6, 251.0], [2.7, 251.0], [2.8, 253.0], [2.9, 255.0], [3.0, 262.0], [3.1, 262.0], [3.2, 265.0], [3.3, 267.0], [3.4, 267.0], [3.5, 268.0], [3.6, 272.0], [3.7, 273.0], [3.8, 273.0], [3.9, 274.0], [4.0, 275.0], [4.1, 275.0], [4.2, 275.0], [4.3, 276.0], [4.4, 277.0], [4.5, 278.0], [4.6, 278.0], [4.7, 282.0], [4.8, 286.0], [4.9, 286.0], [5.0, 286.0], [5.1, 288.0], [5.2, 288.0], [5.3, 288.0], [5.4, 290.0], [5.5, 292.0], [5.6, 292.0], [5.7, 292.0], [5.8, 293.0], [5.9, 294.0], [6.0, 295.0], [6.1, 295.0], [6.2, 299.0], [6.3, 302.0], [6.4, 303.0], [6.5, 303.0], [6.6, 307.0], [6.7, 309.0], [6.8, 309.0], [6.9, 314.0], [7.0, 316.0], [7.1, 321.0], [7.2, 321.0], [7.3, 325.0], [7.4, 329.0], [7.5, 330.0], [7.6, 330.0], [7.7, 331.0], [7.8, 331.0], [7.9, 332.0], [8.0, 332.0], [8.1, 333.0], [8.2, 335.0], [8.3, 338.0], [8.4, 338.0], [8.5, 340.0], [8.6, 341.0], [8.7, 341.0], [8.8, 343.0], [8.9, 358.0], [9.0, 359.0], [9.1, 359.0], [9.2, 361.0], [9.3, 366.0], [9.4, 369.0], [9.5, 369.0], [9.6, 372.0], [9.7, 375.0], [9.8, 376.0], [9.9, 376.0], [10.0, 385.0], [10.1, 386.0], [10.2, 386.0], [10.3, 391.0], [10.4, 392.0], [10.5, 392.0], [10.6, 392.0], [10.7, 396.0], [10.8, 399.0], [10.9, 401.0], [11.0, 401.0], [11.1, 406.0], [11.2, 407.0], [11.3, 411.0], [11.4, 411.0], [11.5, 412.0], [11.6, 415.0], [11.7, 415.0], [11.8, 415.0], [11.9, 415.0], [12.0, 417.0], [12.1, 417.0], [12.2, 421.0], [12.3, 422.0], [12.4, 424.0], [12.5, 424.0], [12.6, 424.0], [12.7, 425.0], [12.8, 425.0], [12.9, 425.0], [13.0, 425.0], [13.1, 426.0], [13.2, 428.0], [13.3, 428.0], [13.4, 430.0], [13.5, 431.0], [13.6, 431.0], [13.7, 435.0], [13.8, 437.0], [13.9, 439.0], [14.0, 439.0], [14.1, 440.0], [14.2, 442.0], [14.3, 442.0], [14.4, 442.0], [14.5, 443.0], [14.6, 445.0], [14.7, 448.0], [14.8, 448.0], [14.9, 448.0], [15.0, 448.0], [15.1, 448.0], [15.2, 449.0], [15.3, 450.0], [15.4, 453.0], [15.5, 453.0], [15.6, 456.0], [15.7, 456.0], [15.8, 461.0], [15.9, 461.0], [16.0, 464.0], [16.1, 465.0], [16.2, 470.0], [16.3, 470.0], [16.4, 475.0], [16.5, 478.0], [16.6, 480.0], [16.7, 480.0], [16.8, 488.0], [16.9, 492.0], [17.0, 492.0], [17.1, 493.0], [17.2, 493.0], [17.3, 493.0], [17.4, 493.0], [17.5, 494.0], [17.6, 496.0], [17.7, 498.0], [17.8, 498.0], [17.9, 498.0], [18.0, 500.0], [18.1, 503.0], [18.2, 503.0], [18.3, 503.0], [18.4, 504.0], [18.5, 504.0], [18.6, 505.0], [18.7, 505.0], [18.8, 508.0], [18.9, 508.0], [19.0, 511.0], [19.1, 515.0], [19.2, 515.0], [19.3, 515.0], [19.4, 515.0], [19.5, 516.0], [19.6, 518.0], [19.7, 518.0], [19.8, 520.0], [19.9, 522.0], [20.0, 524.0], [20.1, 524.0], [20.2, 525.0], [20.3, 531.0], [20.4, 531.0], [20.5, 534.0], [20.6, 538.0], [20.7, 540.0], [20.8, 540.0], [20.9, 541.0], [21.0, 541.0], [21.1, 543.0], [21.2, 543.0], [21.3, 544.0], [21.4, 545.0], [21.5, 546.0], [21.6, 546.0], [21.7, 548.0], [21.8, 548.0], [21.9, 548.0], [22.0, 548.0], [22.1, 549.0], [22.2, 549.0], [22.3, 549.0], [22.4, 551.0], [22.5, 555.0], [22.6, 558.0], [22.7, 558.0], [22.8, 561.0], [22.9, 563.0], [23.0, 563.0], [23.1, 563.0], [23.2, 563.0], [23.3, 564.0], [23.4, 564.0], [23.5, 566.0], [23.6, 567.0], [23.7, 567.0], [23.8, 567.0], [23.9, 569.0], [24.0, 570.0], [24.1, 570.0], [24.2, 570.0], [24.3, 571.0], [24.4, 572.0], [24.5, 573.0], [24.6, 573.0], [24.7, 573.0], [24.8, 573.0], [24.9, 574.0], [25.0, 574.0], [25.1, 575.0], [25.2, 576.0], [25.3, 576.0], [25.4, 576.0], [25.5, 578.0], [25.6, 579.0], [25.7, 579.0], [25.8, 580.0], [25.9, 580.0], [26.0, 581.0], [26.1, 581.0], [26.2, 581.0], [26.3, 584.0], [26.4, 584.0], [26.5, 584.0], [26.6, 585.0], [26.7, 585.0], [26.8, 585.0], [26.9, 586.0], [27.0, 586.0], [27.1, 587.0], [27.2, 587.0], [27.3, 589.0], [27.4, 589.0], [27.5, 590.0], [27.6, 590.0], [27.7, 590.0], [27.8, 591.0], [27.9, 592.0], [28.0, 592.0], [28.1, 592.0], [28.2, 594.0], [28.3, 594.0], [28.4, 594.0], [28.5, 594.0], [28.6, 594.0], [28.7, 594.0], [28.8, 596.0], [28.9, 598.0], [29.0, 598.0], [29.1, 598.0], [29.2, 599.0], [29.3, 601.0], [29.4, 602.0], [29.5, 602.0], [29.6, 602.0], [29.7, 602.0], [29.8, 603.0], [29.9, 603.0], [30.0, 604.0], [30.1, 604.0], [30.2, 604.0], [30.3, 607.0], [30.4, 608.0], [30.5, 609.0], [30.6, 609.0], [30.7, 609.0], [30.8, 612.0], [30.9, 613.0], [31.0, 613.0], [31.1, 615.0], [31.2, 615.0], [31.3, 616.0], [31.4, 616.0], [31.5, 617.0], [31.6, 618.0], [31.7, 618.0], [31.8, 621.0], [31.9, 622.0], [32.0, 622.0], [32.1, 622.0], [32.2, 623.0], [32.3, 624.0], [32.4, 626.0], [32.5, 626.0], [32.6, 627.0], [32.7, 630.0], [32.8, 630.0], [32.9, 630.0], [33.0, 631.0], [33.1, 631.0], [33.2, 634.0], [33.3, 634.0], [33.4, 635.0], [33.5, 635.0], [33.6, 635.0], [33.7, 635.0], [33.8, 635.0], [33.9, 636.0], [34.0, 636.0], [34.1, 636.0], [34.2, 637.0], [34.3, 637.0], [34.4, 637.0], [34.5, 637.0], [34.6, 638.0], [34.7, 638.0], [34.8, 638.0], [34.9, 640.0], [35.0, 640.0], [35.1, 640.0], [35.2, 642.0], [35.3, 643.0], [35.4, 643.0], [35.5, 643.0], [35.6, 645.0], [35.7, 650.0], [35.8, 651.0], [35.9, 651.0], [36.0, 652.0], [36.1, 653.0], [36.2, 653.0], [36.3, 653.0], [36.4, 654.0], [36.5, 657.0], [36.6, 658.0], [36.7, 658.0], [36.8, 658.0], [36.9, 659.0], [37.0, 659.0], [37.1, 660.0], [37.2, 662.0], [37.3, 663.0], [37.4, 663.0], [37.5, 663.0], [37.6, 664.0], [37.7, 666.0], [37.8, 666.0], [37.9, 669.0], [38.0, 672.0], [38.1, 674.0], [38.2, 674.0], [38.3, 675.0], [38.4, 678.0], [38.5, 678.0], [38.6, 679.0], [38.7, 679.0], [38.8, 680.0], [38.9, 680.0], [39.0, 680.0], [39.1, 681.0], [39.2, 682.0], [39.3, 682.0], [39.4, 682.0], [39.5, 683.0], [39.6, 685.0], [39.7, 685.0], [39.8, 692.0], [39.9, 693.0], [40.0, 693.0], [40.1, 693.0], [40.2, 695.0], [40.3, 698.0], [40.4, 698.0], [40.5, 699.0], [40.6, 703.0], [40.7, 705.0], [40.8, 705.0], [40.9, 707.0], [41.0, 709.0], [41.1, 710.0], [41.2, 710.0], [41.3, 713.0], [41.4, 713.0], [41.5, 713.0], [41.6, 713.0], [41.7, 719.0], [41.8, 719.0], [41.9, 719.0], [42.0, 720.0], [42.1, 723.0], [42.2, 724.0], [42.3, 724.0], [42.4, 724.0], [42.5, 724.0], [42.6, 726.0], [42.7, 726.0], [42.8, 727.0], [42.9, 728.0], [43.0, 728.0], [43.1, 728.0], [43.2, 730.0], [43.3, 733.0], [43.4, 733.0], [43.5, 734.0], [43.6, 737.0], [43.7, 737.0], [43.8, 737.0], [43.9, 738.0], [44.0, 738.0], [44.1, 738.0], [44.2, 738.0], [44.3, 739.0], [44.4, 740.0], [44.5, 743.0], [44.6, 743.0], [44.7, 744.0], [44.8, 746.0], [44.9, 750.0], [45.0, 750.0], [45.1, 750.0], [45.2, 751.0], [45.3, 751.0], [45.4, 752.0], [45.5, 753.0], [45.6, 755.0], [45.7, 755.0], [45.8, 756.0], [45.9, 756.0], [46.0, 757.0], [46.1, 757.0], [46.2, 759.0], [46.3, 763.0], [46.4, 763.0], [46.5, 763.0], [46.6, 766.0], [46.7, 767.0], [46.8, 767.0], [46.9, 769.0], [47.0, 770.0], [47.1, 773.0], [47.2, 773.0], [47.3, 774.0], [47.4, 775.0], [47.5, 775.0], [47.6, 775.0], [47.7, 776.0], [47.8, 781.0], [47.9, 783.0], [48.0, 783.0], [48.1, 785.0], [48.2, 787.0], [48.3, 791.0], [48.4, 791.0], [48.5, 793.0], [48.6, 793.0], [48.7, 793.0], [48.8, 795.0], [48.9, 795.0], [49.0, 796.0], [49.1, 796.0], [49.2, 799.0], [49.3, 799.0], [49.4, 800.0], [49.5, 800.0], [49.6, 801.0], [49.7, 803.0], [49.8, 803.0], [49.9, 803.0], [50.0, 804.0], [50.1, 805.0], [50.2, 805.0], [50.3, 805.0], [50.4, 809.0], [50.5, 810.0], [50.6, 810.0], [50.7, 810.0], [50.8, 811.0], [50.9, 812.0], [51.0, 812.0], [51.1, 813.0], [51.2, 813.0], [51.3, 814.0], [51.4, 814.0], [51.5, 816.0], [51.6, 817.0], [51.7, 817.0], [51.8, 818.0], [51.9, 822.0], [52.0, 823.0], [52.1, 823.0], [52.2, 827.0], [52.3, 829.0], [52.4, 829.0], [52.5, 829.0], [52.6, 838.0], [52.7, 839.0], [52.8, 839.0], [52.9, 839.0], [53.0, 840.0], [53.1, 841.0], [53.2, 843.0], [53.3, 843.0], [53.4, 847.0], [53.5, 851.0], [53.6, 851.0], [53.7, 851.0], [53.8, 854.0], [53.9, 855.0], [54.0, 855.0], [54.1, 857.0], [54.2, 857.0], [54.3, 857.0], [54.4, 857.0], [54.5, 858.0], [54.6, 858.0], [54.7, 859.0], [54.8, 859.0], [54.9, 860.0], [55.0, 860.0], [55.1, 860.0], [55.2, 862.0], [55.3, 868.0], [55.4, 868.0], [55.5, 868.0], [55.6, 870.0], [55.7, 873.0], [55.8, 874.0], [55.9, 874.0], [56.0, 874.0], [56.1, 879.0], [56.2, 880.0], [56.3, 880.0], [56.4, 881.0], [56.5, 882.0], [56.6, 886.0], [56.7, 886.0], [56.8, 886.0], [56.9, 887.0], [57.0, 887.0], [57.1, 889.0], [57.2, 889.0], [57.3, 890.0], [57.4, 890.0], [57.5, 890.0], [57.6, 893.0], [57.7, 898.0], [57.8, 898.0], [57.9, 899.0], [58.0, 899.0], [58.1, 899.0], [58.2, 899.0], [58.3, 900.0], [58.4, 901.0], [58.5, 901.0], [58.6, 901.0], [58.7, 904.0], [58.8, 908.0], [58.9, 908.0], [59.0, 911.0], [59.1, 912.0], [59.2, 913.0], [59.3, 913.0], [59.4, 916.0], [59.5, 918.0], [59.6, 918.0], [59.7, 918.0], [59.8, 921.0], [59.9, 921.0], [60.0, 927.0], [60.1, 927.0], [60.2, 927.0], [60.3, 929.0], [60.4, 929.0], [60.5, 929.0], [60.6, 932.0], [60.7, 933.0], [60.8, 933.0], [60.9, 934.0], [61.0, 940.0], [61.1, 940.0], [61.2, 940.0], [61.3, 940.0], [61.4, 941.0], [61.5, 944.0], [61.6, 944.0], [61.7, 944.0], [61.8, 948.0], [61.9, 948.0], [62.0, 949.0], [62.1, 950.0], [62.2, 952.0], [62.3, 952.0], [62.4, 952.0], [62.5, 954.0], [62.6, 955.0], [62.7, 955.0], [62.8, 957.0], [62.9, 958.0], [63.0, 958.0], [63.1, 958.0], [63.2, 960.0], [63.3, 961.0], [63.4, 961.0], [63.5, 964.0], [63.6, 966.0], [63.7, 966.0], [63.8, 966.0], [63.9, 967.0], [64.0, 969.0], [64.1, 971.0], [64.2, 971.0], [64.3, 977.0], [64.4, 978.0], [64.5, 979.0], [64.6, 979.0], [64.7, 979.0], [64.8, 982.0], [64.9, 985.0], [65.0, 985.0], [65.1, 988.0], [65.2, 990.0], [65.3, 990.0], [65.4, 991.0], [65.5, 991.0], [65.6, 991.0], [65.7, 991.0], [65.8, 993.0], [65.9, 994.0], [66.0, 997.0], [66.1, 997.0], [66.2, 997.0], [66.3, 998.0], [66.4, 1000.0], [66.5, 1000.0], [66.6, 1004.0], [66.7, 1005.0], [66.8, 1005.0], [66.9, 1013.0], [67.0, 1015.0], [67.1, 1015.0], [67.2, 1015.0], [67.3, 1016.0], [67.4, 1017.0], [67.5, 1018.0], [67.6, 1018.0], [67.7, 1021.0], [67.8, 1022.0], [67.9, 1023.0], [68.0, 1023.0], [68.1, 1023.0], [68.2, 1024.0], [68.3, 1024.0], [68.4, 1024.0], [68.5, 1026.0], [68.6, 1032.0], [68.7, 1032.0], [68.8, 1033.0], [68.9, 1034.0], [69.0, 1035.0], [69.1, 1035.0], [69.2, 1039.0], [69.3, 1040.0], [69.4, 1042.0], [69.5, 1042.0], [69.6, 1043.0], [69.7, 1044.0], [69.8, 1044.0], [69.9, 1044.0], [70.0, 1045.0], [70.1, 1047.0], [70.2, 1047.0], [70.3, 1051.0], [70.4, 1052.0], [70.5, 1052.0], [70.6, 1052.0], [70.7, 1056.0], [70.8, 1057.0], [70.9, 1057.0], [71.0, 1057.0], [71.1, 1058.0], [71.2, 1061.0], [71.3, 1067.0], [71.4, 1067.0], [71.5, 1067.0], [71.6, 1067.0], [71.7, 1067.0], [71.8, 1068.0], [71.9, 1071.0], [72.0, 1072.0], [72.1, 1072.0], [72.2, 1076.0], [72.3, 1078.0], [72.4, 1078.0], [72.5, 1078.0], [72.6, 1079.0], [72.7, 1080.0], [72.8, 1082.0], [72.9, 1082.0], [73.0, 1082.0], [73.1, 1082.0], [73.2, 1082.0], [73.3, 1082.0], [73.4, 1084.0], [73.5, 1085.0], [73.6, 1085.0], [73.7, 1086.0], [73.8, 1087.0], [73.9, 1088.0], [74.0, 1088.0], [74.1, 1090.0], [74.2, 1091.0], [74.3, 1091.0], [74.4, 1091.0], [74.5, 1091.0], [74.6, 1093.0], [74.7, 1094.0], [74.8, 1094.0], [74.9, 1094.0], [75.0, 1096.0], [75.1, 1096.0], [75.2, 1102.0], [75.3, 1102.0], [75.4, 1105.0], [75.5, 1105.0], [75.6, 1106.0], [75.7, 1113.0], [75.8, 1114.0], [75.9, 1114.0], [76.0, 1115.0], [76.1, 1117.0], [76.2, 1118.0], [76.3, 1118.0], [76.4, 1120.0], [76.5, 1125.0], [76.6, 1126.0], [76.7, 1126.0], [76.8, 1128.0], [76.9, 1129.0], [77.0, 1129.0], [77.1, 1129.0], [77.2, 1130.0], [77.3, 1131.0], [77.4, 1131.0], [77.5, 1132.0], [77.6, 1134.0], [77.7, 1138.0], [77.8, 1138.0], [77.9, 1138.0], [78.0, 1139.0], [78.1, 1143.0], [78.2, 1143.0], [78.3, 1143.0], [78.4, 1144.0], [78.5, 1144.0], [78.6, 1145.0], [78.7, 1146.0], [78.8, 1146.0], [78.9, 1146.0], [79.0, 1149.0], [79.1, 1149.0], [79.2, 1150.0], [79.3, 1150.0], [79.4, 1154.0], [79.5, 1158.0], [79.6, 1158.0], [79.7, 1158.0], [79.8, 1159.0], [79.9, 1161.0], [80.0, 1162.0], [80.1, 1162.0], [80.2, 1171.0], [80.3, 1171.0], [80.4, 1171.0], [80.5, 1173.0], [80.6, 1173.0], [80.7, 1174.0], [80.8, 1174.0], [80.9, 1179.0], [81.0, 1181.0], [81.1, 1185.0], [81.2, 1185.0], [81.3, 1186.0], [81.4, 1186.0], [81.5, 1187.0], [81.6, 1187.0], [81.7, 1188.0], [81.8, 1188.0], [81.9, 1188.0], [82.0, 1189.0], [82.1, 1193.0], [82.2, 1196.0], [82.3, 1196.0], [82.4, 1197.0], [82.5, 1200.0], [82.6, 1203.0], [82.7, 1203.0], [82.8, 1203.0], [82.9, 1204.0], [83.0, 1205.0], [83.1, 1205.0], [83.2, 1206.0], [83.3, 1208.0], [83.4, 1208.0], [83.5, 1208.0], [83.6, 1213.0], [83.7, 1214.0], [83.8, 1214.0], [83.9, 1217.0], [84.0, 1217.0], [84.1, 1219.0], [84.2, 1219.0], [84.3, 1223.0], [84.4, 1224.0], [84.5, 1229.0], [84.6, 1229.0], [84.7, 1231.0], [84.8, 1236.0], [84.9, 1239.0], [85.0, 1239.0], [85.1, 1239.0], [85.2, 1240.0], [85.3, 1240.0], [85.4, 1241.0], [85.5, 1241.0], [85.6, 1243.0], [85.7, 1243.0], [85.8, 1246.0], [85.9, 1255.0], [86.0, 1255.0], [86.1, 1255.0], [86.2, 1257.0], [86.3, 1259.0], [86.4, 1263.0], [86.5, 1263.0], [86.6, 1268.0], [86.7, 1270.0], [86.8, 1270.0], [86.9, 1271.0], [87.0, 1272.0], [87.1, 1275.0], [87.2, 1275.0], [87.3, 1277.0], [87.4, 1277.0], [87.5, 1279.0], [87.6, 1279.0], [87.7, 1280.0], [87.8, 1283.0], [87.9, 1284.0], [88.0, 1284.0], [88.1, 1285.0], [88.2, 1286.0], [88.3, 1287.0], [88.4, 1287.0], [88.5, 1289.0], [88.6, 1290.0], [88.7, 1290.0], [88.8, 1292.0], [88.9, 1295.0], [89.0, 1301.0], [89.1, 1301.0], [89.2, 1314.0], [89.3, 1318.0], [89.4, 1340.0], [89.5, 1340.0], [89.6, 1341.0], [89.7, 1343.0], [89.8, 1346.0], [89.9, 1346.0], [90.0, 1349.0], [90.1, 1354.0], [90.2, 1354.0], [90.3, 1356.0], [90.4, 1357.0], [90.5, 1366.0], [90.6, 1366.0], [90.7, 1372.0], [90.8, 1375.0], [90.9, 1377.0], [91.0, 1377.0], [91.1, 1386.0], [91.2, 1386.0], [91.3, 1394.0], [91.4, 1394.0], [91.5, 1394.0], [91.6, 1404.0], [91.7, 1404.0], [91.8, 1405.0], [91.9, 1412.0], [92.0, 1418.0], [92.1, 1418.0], [92.2, 1421.0], [92.3, 1427.0], [92.4, 1427.0], [92.5, 1427.0], [92.6, 1430.0], [92.7, 1440.0], [92.8, 1440.0], [92.9, 1440.0], [93.0, 1441.0], [93.1, 1442.0], [93.2, 1446.0], [93.3, 1446.0], [93.4, 1448.0], [93.5, 1452.0], [93.6, 1452.0], [93.7, 1454.0], [93.8, 1455.0], [93.9, 1466.0], [94.0, 1466.0], [94.1, 1471.0], [94.2, 1486.0], [94.3, 1491.0], [94.4, 1491.0], [94.5, 1495.0], [94.6, 1499.0], [94.7, 1501.0], [94.8, 1501.0], [94.9, 1514.0], [95.0, 1534.0], [95.1, 1534.0], [95.2, 1549.0], [95.3, 1553.0], [95.4, 1619.0], [95.5, 1619.0], [95.6, 1626.0], [95.7, 1655.0], [95.8, 1657.0], [95.9, 1657.0], [96.0, 1662.0], [96.1, 1679.0], [96.2, 1729.0], [96.3, 1729.0], [96.4, 1766.0], [96.5, 1771.0], [96.6, 1783.0], [96.7, 1783.0], [96.8, 1844.0], [96.9, 1855.0], [97.0, 1855.0], [97.1, 1874.0], [97.2, 1920.0], [97.3, 1929.0], [97.4, 1929.0], [97.5, 1929.0], [97.6, 1955.0], [97.7, 1957.0], [97.8, 1957.0], [97.9, 2023.0], [98.0, 2413.0], [98.1, 2451.0], [98.2, 2451.0], [98.3, 2763.0], [98.4, 2802.0], [98.5, 2802.0], [98.6, 2864.0], [98.7, 2887.0], [98.8, 3081.0], [98.9, 3081.0], [99.0, 3172.0], [99.1, 3180.0], [99.2, 3200.0], [99.3, 3200.0], [99.4, 3205.0], [99.5, 3262.0], [99.6, 3339.0], [99.7, 3339.0], [99.8, 3466.0], [99.9, 3636.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 83.0, "series": [{"data": [[600.0, 83.0], [700.0, 65.0], [800.0, 65.0], [900.0, 60.0], [1000.0, 64.0], [1100.0, 54.0], [1200.0, 48.0], [1300.0, 19.0], [1400.0, 23.0], [1500.0, 5.0], [1600.0, 6.0], [100.0, 2.0], [1700.0, 4.0], [1800.0, 3.0], [1900.0, 5.0], [2000.0, 1.0], [2400.0, 2.0], [2800.0, 3.0], [2700.0, 1.0], [3000.0, 1.0], [3100.0, 2.0], [3200.0, 3.0], [3300.0, 1.0], [200.0, 44.0], [3400.0, 1.0], [3600.0, 1.0], [300.0, 34.0], [400.0, 52.0], [500.0, 83.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 39.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 563.0, "series": [{"data": [[0.0, 133.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 563.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 39.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.905063291139241, "minX": 1.60422564E12, "maxY": 10.0, "series": [{"data": [[1.60422564E12, 10.0], [1.6042257E12, 9.905063291139241]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042257E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 292.0, "minX": 1.0, "maxY": 1855.0, "series": [{"data": [[8.0, 615.0], [4.0, 549.0], [2.0, 991.0], [1.0, 979.0], [9.0, 292.0], [10.0, 875.1818181818179], [5.0, 843.0], [6.0, 1855.0], [3.0, 594.0], [7.0, 1657.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 875.8598639455779]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1974.45, "minX": 1.60422564E12, "maxY": 1094967.1666666667, "series": [{"data": [[1.60422564E12, 740849.3166666667], [1.6042257E12, 1094967.1666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422564E12, 1974.45], [1.6042257E12, 3548.5833333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042257E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 815.1940928270044, "minX": 1.60422564E12, "maxY": 986.0344827586208, "series": [{"data": [[1.60422564E12, 986.0344827586208], [1.6042257E12, 815.1940928270044]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042257E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 813.932489451477, "minX": 1.60422564E12, "maxY": 984.5977011494253, "series": [{"data": [[1.60422564E12, 984.5977011494253], [1.6042257E12, 813.932489451477]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042257E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.025316455696202528, "minX": 1.60422564E12, "maxY": 0.3295019157088121, "series": [{"data": [[1.60422564E12, 0.3295019157088121], [1.6042257E12, 0.025316455696202528]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042257E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 190.0, "minX": 1.60422564E12, "maxY": 3636.0, "series": [{"data": [[1.60422564E12, 3636.0], [1.6042257E12, 3172.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422564E12, 232.45599800109864], [1.6042257E12, 204.82499966025352]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422564E12, 240.00160079956055], [1.6042257E12, 206.1075001358986]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422564E12, 236.6479990005493], [1.6042257E12, 205.53749983012676]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422564E12, 203.0], [1.6042257E12, 190.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422564E12, 886.0], [1.6042257E12, 754.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042257E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 465.0, "minX": 3.0, "maxY": 3200.0, "series": [{"data": [[8.0, 1051.0], [9.0, 990.5], [10.0, 949.0], [11.0, 891.0], [3.0, 3200.0], [12.0, 884.5], [13.0, 770.0], [14.0, 650.5], [15.0, 672.0], [16.0, 606.0], [17.0, 678.0], [19.0, 465.0], [6.0, 1439.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 464.0, "minX": 3.0, "maxY": 3196.0, "series": [{"data": [[8.0, 1046.5], [9.0, 989.5], [10.0, 948.0], [11.0, 889.5], [3.0, 3196.0], [12.0, 883.5], [13.0, 767.0], [14.0, 650.0], [15.0, 671.0], [16.0, 605.5], [17.0, 677.0], [19.0, 464.0], [6.0, 1438.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.516666666666667, "minX": 1.60422564E12, "maxY": 7.733333333333333, "series": [{"data": [[1.60422564E12, 4.516666666666667], [1.6042257E12, 7.733333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042257E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.35, "minX": 1.60422564E12, "maxY": 7.9, "series": [{"data": [[1.60422564E12, 4.35], [1.6042257E12, 7.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042257E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.35, "minX": 1.60422564E12, "maxY": 7.9, "series": [{"data": [[1.60422564E12, 4.35], [1.6042257E12, 7.9]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042257E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.35, "minX": 1.60422564E12, "maxY": 7.9, "series": [{"data": [[1.60422564E12, 4.35], [1.6042257E12, 7.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042257E12, "title": "Total Transactions Per Second"}},
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

