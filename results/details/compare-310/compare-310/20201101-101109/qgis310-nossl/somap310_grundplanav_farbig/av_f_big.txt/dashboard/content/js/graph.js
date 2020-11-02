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
        data: {"result": {"minY": 178.0, "minX": 0.0, "maxY": 3625.0, "series": [{"data": [[0.0, 178.0], [0.1, 178.0], [0.2, 190.0], [0.3, 193.0], [0.4, 193.0], [0.5, 195.0], [0.6, 206.0], [0.7, 206.0], [0.8, 206.0], [0.9, 210.0], [1.0, 216.0], [1.1, 218.0], [1.2, 218.0], [1.3, 218.0], [1.4, 219.0], [1.5, 220.0], [1.6, 220.0], [1.7, 224.0], [1.8, 224.0], [1.9, 224.0], [2.0, 225.0], [2.1, 230.0], [2.2, 230.0], [2.3, 230.0], [2.4, 232.0], [2.5, 238.0], [2.6, 243.0], [2.7, 243.0], [2.8, 244.0], [2.9, 246.0], [3.0, 246.0], [3.1, 246.0], [3.2, 248.0], [3.3, 262.0], [3.4, 262.0], [3.5, 264.0], [3.6, 266.0], [3.7, 267.0], [3.8, 267.0], [3.9, 271.0], [4.0, 273.0], [4.1, 274.0], [4.2, 274.0], [4.3, 276.0], [4.4, 277.0], [4.5, 277.0], [4.6, 277.0], [4.7, 279.0], [4.8, 280.0], [4.9, 284.0], [5.0, 284.0], [5.1, 286.0], [5.2, 287.0], [5.3, 287.0], [5.4, 289.0], [5.5, 291.0], [5.6, 292.0], [5.7, 292.0], [5.8, 295.0], [5.9, 295.0], [6.0, 296.0], [6.1, 296.0], [6.2, 300.0], [6.3, 300.0], [6.4, 302.0], [6.5, 302.0], [6.6, 302.0], [6.7, 305.0], [6.8, 305.0], [6.9, 311.0], [7.0, 312.0], [7.1, 313.0], [7.2, 313.0], [7.3, 317.0], [7.4, 317.0], [7.5, 318.0], [7.6, 318.0], [7.7, 322.0], [7.8, 322.0], [7.9, 323.0], [8.0, 323.0], [8.1, 325.0], [8.2, 329.0], [8.3, 330.0], [8.4, 330.0], [8.5, 330.0], [8.6, 333.0], [8.7, 333.0], [8.8, 341.0], [8.9, 345.0], [9.0, 349.0], [9.1, 349.0], [9.2, 370.0], [9.3, 372.0], [9.4, 374.0], [9.5, 374.0], [9.6, 380.0], [9.7, 380.0], [9.8, 382.0], [9.9, 382.0], [10.0, 382.0], [10.1, 386.0], [10.2, 386.0], [10.3, 387.0], [10.4, 388.0], [10.5, 389.0], [10.6, 389.0], [10.7, 392.0], [10.8, 394.0], [10.9, 398.0], [11.0, 398.0], [11.1, 399.0], [11.2, 400.0], [11.3, 401.0], [11.4, 401.0], [11.5, 407.0], [11.6, 411.0], [11.7, 411.0], [11.8, 412.0], [11.9, 413.0], [12.0, 413.0], [12.1, 413.0], [12.2, 417.0], [12.3, 417.0], [12.4, 419.0], [12.5, 419.0], [12.6, 420.0], [12.7, 420.0], [12.8, 420.0], [12.9, 420.0], [13.0, 423.0], [13.1, 423.0], [13.2, 431.0], [13.3, 431.0], [13.4, 434.0], [13.5, 435.0], [13.6, 435.0], [13.7, 436.0], [13.8, 438.0], [13.9, 438.0], [14.0, 438.0], [14.1, 438.0], [14.2, 441.0], [14.3, 444.0], [14.4, 444.0], [14.5, 444.0], [14.6, 444.0], [14.7, 447.0], [14.8, 447.0], [14.9, 448.0], [15.0, 448.0], [15.1, 448.0], [15.2, 449.0], [15.3, 450.0], [15.4, 453.0], [15.5, 453.0], [15.6, 456.0], [15.7, 456.0], [15.8, 457.0], [15.9, 457.0], [16.0, 460.0], [16.1, 462.0], [16.2, 463.0], [16.3, 463.0], [16.4, 463.0], [16.5, 464.0], [16.6, 466.0], [16.7, 466.0], [16.8, 468.0], [16.9, 469.0], [17.0, 469.0], [17.1, 469.0], [17.2, 470.0], [17.3, 471.0], [17.4, 471.0], [17.5, 475.0], [17.6, 475.0], [17.7, 480.0], [17.8, 480.0], [17.9, 480.0], [18.0, 482.0], [18.1, 484.0], [18.2, 484.0], [18.3, 485.0], [18.4, 492.0], [18.5, 492.0], [18.6, 495.0], [18.7, 498.0], [18.8, 500.0], [18.9, 500.0], [19.0, 504.0], [19.1, 506.0], [19.2, 508.0], [19.3, 508.0], [19.4, 510.0], [19.5, 510.0], [19.6, 511.0], [19.7, 511.0], [19.8, 511.0], [19.9, 513.0], [20.0, 514.0], [20.1, 514.0], [20.2, 516.0], [20.3, 518.0], [20.4, 518.0], [20.5, 518.0], [20.6, 518.0], [20.7, 520.0], [20.8, 520.0], [20.9, 522.0], [21.0, 523.0], [21.1, 524.0], [21.2, 524.0], [21.3, 525.0], [21.4, 527.0], [21.5, 528.0], [21.6, 528.0], [21.7, 528.0], [21.8, 530.0], [21.9, 530.0], [22.0, 531.0], [22.1, 532.0], [22.2, 536.0], [22.3, 536.0], [22.4, 538.0], [22.5, 539.0], [22.6, 540.0], [22.7, 540.0], [22.8, 541.0], [22.9, 541.0], [23.0, 542.0], [23.1, 542.0], [23.2, 542.0], [23.3, 543.0], [23.4, 543.0], [23.5, 545.0], [23.6, 546.0], [23.7, 546.0], [23.8, 546.0], [23.9, 547.0], [24.0, 548.0], [24.1, 549.0], [24.2, 549.0], [24.3, 551.0], [24.4, 552.0], [24.5, 552.0], [24.6, 552.0], [24.7, 553.0], [24.8, 555.0], [24.9, 558.0], [25.0, 558.0], [25.1, 561.0], [25.2, 562.0], [25.3, 562.0], [25.4, 563.0], [25.5, 565.0], [25.6, 566.0], [25.7, 566.0], [25.8, 567.0], [25.9, 568.0], [26.0, 569.0], [26.1, 569.0], [26.2, 572.0], [26.3, 573.0], [26.4, 573.0], [26.5, 573.0], [26.6, 574.0], [26.7, 574.0], [26.8, 574.0], [26.9, 576.0], [27.0, 576.0], [27.1, 579.0], [27.2, 579.0], [27.3, 579.0], [27.4, 582.0], [27.5, 584.0], [27.6, 584.0], [27.7, 584.0], [27.8, 584.0], [27.9, 584.0], [28.0, 584.0], [28.1, 588.0], [28.2, 588.0], [28.3, 590.0], [28.4, 590.0], [28.5, 590.0], [28.6, 591.0], [28.7, 591.0], [28.8, 593.0], [28.9, 594.0], [29.0, 596.0], [29.1, 596.0], [29.2, 601.0], [29.3, 602.0], [29.4, 603.0], [29.5, 603.0], [29.6, 603.0], [29.7, 603.0], [29.8, 603.0], [29.9, 603.0], [30.0, 603.0], [30.1, 603.0], [30.2, 603.0], [30.3, 604.0], [30.4, 605.0], [30.5, 606.0], [30.6, 606.0], [30.7, 606.0], [30.8, 607.0], [30.9, 609.0], [31.0, 609.0], [31.1, 611.0], [31.2, 612.0], [31.3, 613.0], [31.4, 613.0], [31.5, 615.0], [31.6, 615.0], [31.7, 615.0], [31.8, 620.0], [31.9, 621.0], [32.0, 622.0], [32.1, 622.0], [32.2, 622.0], [32.3, 625.0], [32.4, 625.0], [32.5, 625.0], [32.6, 626.0], [32.7, 627.0], [32.8, 628.0], [32.9, 628.0], [33.0, 628.0], [33.1, 629.0], [33.2, 629.0], [33.3, 629.0], [33.4, 630.0], [33.5, 634.0], [33.6, 634.0], [33.7, 634.0], [33.8, 634.0], [33.9, 637.0], [34.0, 637.0], [34.1, 638.0], [34.2, 639.0], [34.3, 642.0], [34.4, 642.0], [34.5, 643.0], [34.6, 644.0], [34.7, 644.0], [34.8, 644.0], [34.9, 646.0], [35.0, 646.0], [35.1, 646.0], [35.2, 647.0], [35.3, 648.0], [35.4, 651.0], [35.5, 651.0], [35.6, 652.0], [35.7, 653.0], [35.8, 653.0], [35.9, 653.0], [36.0, 655.0], [36.1, 655.0], [36.2, 657.0], [36.3, 657.0], [36.4, 657.0], [36.5, 662.0], [36.6, 663.0], [36.7, 663.0], [36.8, 665.0], [36.9, 668.0], [37.0, 668.0], [37.1, 668.0], [37.2, 669.0], [37.3, 669.0], [37.4, 669.0], [37.5, 669.0], [37.6, 670.0], [37.7, 671.0], [37.8, 671.0], [37.9, 672.0], [38.0, 672.0], [38.1, 675.0], [38.2, 675.0], [38.3, 675.0], [38.4, 675.0], [38.5, 675.0], [38.6, 676.0], [38.7, 677.0], [38.8, 679.0], [38.9, 679.0], [39.0, 679.0], [39.1, 681.0], [39.2, 681.0], [39.3, 681.0], [39.4, 684.0], [39.5, 684.0], [39.6, 686.0], [39.7, 686.0], [39.8, 691.0], [39.9, 691.0], [40.0, 692.0], [40.1, 692.0], [40.2, 693.0], [40.3, 695.0], [40.4, 695.0], [40.5, 696.0], [40.6, 697.0], [40.7, 700.0], [40.8, 700.0], [40.9, 700.0], [41.0, 705.0], [41.1, 705.0], [41.2, 705.0], [41.3, 706.0], [41.4, 708.0], [41.5, 709.0], [41.6, 709.0], [41.7, 710.0], [41.8, 710.0], [41.9, 710.0], [42.0, 711.0], [42.1, 714.0], [42.2, 715.0], [42.3, 715.0], [42.4, 717.0], [42.5, 718.0], [42.6, 719.0], [42.7, 719.0], [42.8, 721.0], [42.9, 721.0], [43.0, 726.0], [43.1, 726.0], [43.2, 726.0], [43.3, 732.0], [43.4, 732.0], [43.5, 733.0], [43.6, 733.0], [43.7, 736.0], [43.8, 736.0], [43.9, 736.0], [44.0, 740.0], [44.1, 741.0], [44.2, 741.0], [44.3, 742.0], [44.4, 742.0], [44.5, 743.0], [44.6, 743.0], [44.7, 744.0], [44.8, 745.0], [44.9, 746.0], [45.0, 746.0], [45.1, 747.0], [45.2, 749.0], [45.3, 749.0], [45.4, 749.0], [45.5, 749.0], [45.6, 749.0], [45.7, 749.0], [45.8, 750.0], [45.9, 750.0], [46.0, 751.0], [46.1, 751.0], [46.2, 755.0], [46.3, 756.0], [46.4, 763.0], [46.5, 763.0], [46.6, 763.0], [46.7, 763.0], [46.8, 763.0], [46.9, 766.0], [47.0, 767.0], [47.1, 772.0], [47.2, 772.0], [47.3, 772.0], [47.4, 773.0], [47.5, 773.0], [47.6, 773.0], [47.7, 773.0], [47.8, 774.0], [47.9, 776.0], [48.0, 776.0], [48.1, 779.0], [48.2, 779.0], [48.3, 780.0], [48.4, 780.0], [48.5, 782.0], [48.6, 784.0], [48.7, 784.0], [48.8, 785.0], [48.9, 785.0], [49.0, 786.0], [49.1, 786.0], [49.2, 787.0], [49.3, 789.0], [49.4, 792.0], [49.5, 792.0], [49.6, 792.0], [49.7, 798.0], [49.8, 799.0], [49.9, 799.0], [50.0, 799.0], [50.1, 799.0], [50.2, 799.0], [50.3, 801.0], [50.4, 802.0], [50.5, 810.0], [50.6, 810.0], [50.7, 812.0], [50.8, 813.0], [50.9, 818.0], [51.0, 818.0], [51.1, 818.0], [51.2, 820.0], [51.3, 823.0], [51.4, 823.0], [51.5, 825.0], [51.6, 829.0], [51.7, 829.0], [51.8, 830.0], [51.9, 830.0], [52.0, 832.0], [52.1, 832.0], [52.2, 833.0], [52.3, 833.0], [52.4, 834.0], [52.5, 834.0], [52.6, 834.0], [52.7, 836.0], [52.8, 837.0], [52.9, 837.0], [53.0, 838.0], [53.1, 840.0], [53.2, 841.0], [53.3, 841.0], [53.4, 841.0], [53.5, 845.0], [53.6, 845.0], [53.7, 847.0], [53.8, 851.0], [53.9, 853.0], [54.0, 853.0], [54.1, 856.0], [54.2, 858.0], [54.3, 863.0], [54.4, 863.0], [54.5, 867.0], [54.6, 867.0], [54.7, 868.0], [54.8, 868.0], [54.9, 869.0], [55.0, 873.0], [55.1, 873.0], [55.2, 874.0], [55.3, 875.0], [55.4, 876.0], [55.5, 876.0], [55.6, 876.0], [55.7, 876.0], [55.8, 876.0], [55.9, 876.0], [56.0, 878.0], [56.1, 878.0], [56.2, 884.0], [56.3, 884.0], [56.4, 885.0], [56.5, 885.0], [56.6, 886.0], [56.7, 886.0], [56.8, 887.0], [56.9, 890.0], [57.0, 890.0], [57.1, 891.0], [57.2, 891.0], [57.3, 891.0], [57.4, 891.0], [57.5, 892.0], [57.6, 892.0], [57.7, 893.0], [57.8, 893.0], [57.9, 897.0], [58.0, 898.0], [58.1, 900.0], [58.2, 900.0], [58.3, 900.0], [58.4, 900.0], [58.5, 900.0], [58.6, 901.0], [58.7, 907.0], [58.8, 908.0], [58.9, 908.0], [59.0, 908.0], [59.1, 909.0], [59.2, 911.0], [59.3, 911.0], [59.4, 912.0], [59.5, 913.0], [59.6, 915.0], [59.7, 915.0], [59.8, 921.0], [59.9, 922.0], [60.0, 924.0], [60.1, 924.0], [60.2, 924.0], [60.3, 925.0], [60.4, 925.0], [60.5, 925.0], [60.6, 927.0], [60.7, 928.0], [60.8, 928.0], [60.9, 929.0], [61.0, 930.0], [61.1, 932.0], [61.2, 932.0], [61.3, 933.0], [61.4, 933.0], [61.5, 935.0], [61.6, 935.0], [61.7, 936.0], [61.8, 938.0], [61.9, 938.0], [62.0, 938.0], [62.1, 941.0], [62.2, 941.0], [62.3, 941.0], [62.4, 943.0], [62.5, 944.0], [62.6, 947.0], [62.7, 947.0], [62.8, 948.0], [62.9, 948.0], [63.0, 949.0], [63.1, 949.0], [63.2, 949.0], [63.3, 950.0], [63.4, 950.0], [63.5, 964.0], [63.6, 964.0], [63.7, 967.0], [63.8, 967.0], [63.9, 969.0], [64.0, 971.0], [64.1, 972.0], [64.2, 972.0], [64.3, 976.0], [64.4, 980.0], [64.5, 980.0], [64.6, 980.0], [64.7, 980.0], [64.8, 982.0], [64.9, 983.0], [65.0, 983.0], [65.1, 983.0], [65.2, 983.0], [65.3, 983.0], [65.4, 984.0], [65.5, 985.0], [65.6, 987.0], [65.7, 987.0], [65.8, 988.0], [65.9, 990.0], [66.0, 990.0], [66.1, 990.0], [66.2, 995.0], [66.3, 996.0], [66.4, 999.0], [66.5, 999.0], [66.6, 1002.0], [66.7, 1004.0], [66.8, 1004.0], [66.9, 1005.0], [67.0, 1008.0], [67.1, 1010.0], [67.2, 1010.0], [67.3, 1011.0], [67.4, 1012.0], [67.5, 1012.0], [67.6, 1012.0], [67.7, 1015.0], [67.8, 1016.0], [67.9, 1016.0], [68.0, 1016.0], [68.1, 1017.0], [68.2, 1020.0], [68.3, 1022.0], [68.4, 1022.0], [68.5, 1024.0], [68.6, 1026.0], [68.7, 1026.0], [68.8, 1026.0], [68.9, 1028.0], [69.0, 1029.0], [69.1, 1029.0], [69.2, 1030.0], [69.3, 1031.0], [69.4, 1033.0], [69.5, 1033.0], [69.6, 1034.0], [69.7, 1034.0], [69.8, 1034.0], [69.9, 1034.0], [70.0, 1035.0], [70.1, 1035.0], [70.2, 1035.0], [70.3, 1037.0], [70.4, 1037.0], [70.5, 1039.0], [70.6, 1039.0], [70.7, 1043.0], [70.8, 1045.0], [70.9, 1045.0], [71.0, 1045.0], [71.1, 1047.0], [71.2, 1048.0], [71.3, 1051.0], [71.4, 1051.0], [71.5, 1052.0], [71.6, 1053.0], [71.7, 1053.0], [71.8, 1054.0], [71.9, 1058.0], [72.0, 1058.0], [72.1, 1058.0], [72.2, 1058.0], [72.3, 1058.0], [72.4, 1058.0], [72.5, 1058.0], [72.6, 1059.0], [72.7, 1066.0], [72.8, 1073.0], [72.9, 1073.0], [73.0, 1075.0], [73.1, 1077.0], [73.2, 1078.0], [73.3, 1078.0], [73.4, 1079.0], [73.5, 1079.0], [73.6, 1079.0], [73.7, 1080.0], [73.8, 1083.0], [73.9, 1086.0], [74.0, 1086.0], [74.1, 1087.0], [74.2, 1089.0], [74.3, 1089.0], [74.4, 1089.0], [74.5, 1092.0], [74.6, 1092.0], [74.7, 1098.0], [74.8, 1098.0], [74.9, 1099.0], [75.0, 1105.0], [75.1, 1105.0], [75.2, 1105.0], [75.3, 1106.0], [75.4, 1107.0], [75.5, 1107.0], [75.6, 1108.0], [75.7, 1109.0], [75.8, 1112.0], [75.9, 1112.0], [76.0, 1113.0], [76.1, 1116.0], [76.2, 1117.0], [76.3, 1117.0], [76.4, 1119.0], [76.5, 1119.0], [76.6, 1119.0], [76.7, 1119.0], [76.8, 1121.0], [76.9, 1126.0], [77.0, 1126.0], [77.1, 1127.0], [77.2, 1127.0], [77.3, 1129.0], [77.4, 1129.0], [77.5, 1130.0], [77.6, 1131.0], [77.7, 1133.0], [77.8, 1133.0], [77.9, 1133.0], [78.0, 1137.0], [78.1, 1137.0], [78.2, 1137.0], [78.3, 1138.0], [78.4, 1140.0], [78.5, 1140.0], [78.6, 1140.0], [78.7, 1144.0], [78.8, 1145.0], [78.9, 1145.0], [79.0, 1146.0], [79.1, 1147.0], [79.2, 1154.0], [79.3, 1154.0], [79.4, 1156.0], [79.5, 1156.0], [79.6, 1158.0], [79.7, 1158.0], [79.8, 1159.0], [79.9, 1160.0], [80.0, 1162.0], [80.1, 1162.0], [80.2, 1164.0], [80.3, 1171.0], [80.4, 1171.0], [80.5, 1172.0], [80.6, 1174.0], [80.7, 1175.0], [80.8, 1175.0], [80.9, 1177.0], [81.0, 1178.0], [81.1, 1178.0], [81.2, 1178.0], [81.3, 1179.0], [81.4, 1179.0], [81.5, 1180.0], [81.6, 1180.0], [81.7, 1181.0], [81.8, 1181.0], [81.9, 1181.0], [82.0, 1181.0], [82.1, 1181.0], [82.2, 1181.0], [82.3, 1181.0], [82.4, 1185.0], [82.5, 1186.0], [82.6, 1189.0], [82.7, 1189.0], [82.8, 1190.0], [82.9, 1195.0], [83.0, 1199.0], [83.1, 1199.0], [83.2, 1208.0], [83.3, 1208.0], [83.4, 1208.0], [83.5, 1208.0], [83.6, 1211.0], [83.7, 1212.0], [83.8, 1212.0], [83.9, 1218.0], [84.0, 1220.0], [84.1, 1222.0], [84.2, 1222.0], [84.3, 1224.0], [84.4, 1224.0], [84.5, 1225.0], [84.6, 1225.0], [84.7, 1225.0], [84.8, 1225.0], [84.9, 1227.0], [85.0, 1227.0], [85.1, 1233.0], [85.2, 1237.0], [85.3, 1237.0], [85.4, 1242.0], [85.5, 1246.0], [85.6, 1251.0], [85.7, 1251.0], [85.8, 1255.0], [85.9, 1260.0], [86.0, 1261.0], [86.1, 1261.0], [86.2, 1262.0], [86.3, 1262.0], [86.4, 1265.0], [86.5, 1265.0], [86.6, 1271.0], [86.7, 1278.0], [86.8, 1278.0], [86.9, 1283.0], [87.0, 1285.0], [87.1, 1285.0], [87.2, 1285.0], [87.3, 1290.0], [87.4, 1298.0], [87.5, 1301.0], [87.6, 1301.0], [87.7, 1302.0], [87.8, 1303.0], [87.9, 1307.0], [88.0, 1307.0], [88.1, 1308.0], [88.2, 1308.0], [88.3, 1309.0], [88.4, 1309.0], [88.5, 1315.0], [88.6, 1317.0], [88.7, 1317.0], [88.8, 1325.0], [88.9, 1326.0], [89.0, 1333.0], [89.1, 1333.0], [89.2, 1333.0], [89.3, 1333.0], [89.4, 1343.0], [89.5, 1343.0], [89.6, 1344.0], [89.7, 1346.0], [89.8, 1348.0], [89.9, 1348.0], [90.0, 1356.0], [90.1, 1357.0], [90.2, 1357.0], [90.3, 1357.0], [90.4, 1366.0], [90.5, 1368.0], [90.6, 1368.0], [90.7, 1373.0], [90.8, 1384.0], [90.9, 1389.0], [91.0, 1389.0], [91.1, 1393.0], [91.2, 1410.0], [91.3, 1415.0], [91.4, 1415.0], [91.5, 1421.0], [91.6, 1422.0], [91.7, 1422.0], [91.8, 1428.0], [91.9, 1432.0], [92.0, 1440.0], [92.1, 1440.0], [92.2, 1443.0], [92.3, 1448.0], [92.4, 1461.0], [92.5, 1461.0], [92.6, 1463.0], [92.7, 1467.0], [92.8, 1485.0], [92.9, 1485.0], [93.0, 1488.0], [93.1, 1490.0], [93.2, 1490.0], [93.3, 1490.0], [93.4, 1496.0], [93.5, 1507.0], [93.6, 1507.0], [93.7, 1527.0], [93.8, 1550.0], [93.9, 1559.0], [94.0, 1559.0], [94.1, 1559.0], [94.2, 1561.0], [94.3, 1566.0], [94.4, 1566.0], [94.5, 1571.0], [94.6, 1591.0], [94.7, 1628.0], [94.8, 1628.0], [94.9, 1630.0], [95.0, 1638.0], [95.1, 1638.0], [95.2, 1640.0], [95.3, 1653.0], [95.4, 1672.0], [95.5, 1672.0], [95.6, 1696.0], [95.7, 1696.0], [95.8, 1701.0], [95.9, 1701.0], [96.0, 1709.0], [96.1, 1717.0], [96.2, 1722.0], [96.3, 1722.0], [96.4, 1729.0], [96.5, 1730.0], [96.6, 1744.0], [96.7, 1744.0], [96.8, 1804.0], [96.9, 1807.0], [97.0, 1807.0], [97.1, 1865.0], [97.2, 1894.0], [97.3, 1918.0], [97.4, 1918.0], [97.5, 1973.0], [97.6, 1984.0], [97.7, 2232.0], [97.8, 2232.0], [97.9, 2254.0], [98.0, 2391.0], [98.1, 2535.0], [98.2, 2535.0], [98.3, 2645.0], [98.4, 2668.0], [98.5, 2668.0], [98.6, 2769.0], [98.7, 2778.0], [98.8, 2960.0], [98.9, 2960.0], [99.0, 2994.0], [99.1, 3003.0], [99.2, 3005.0], [99.3, 3005.0], [99.4, 3050.0], [99.5, 3217.0], [99.6, 3281.0], [99.7, 3281.0], [99.8, 3464.0], [99.9, 3625.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 85.0, "series": [{"data": [[600.0, 85.0], [700.0, 70.0], [800.0, 58.0], [900.0, 62.0], [1000.0, 62.0], [1100.0, 60.0], [1200.0, 32.0], [1300.0, 27.0], [1400.0, 17.0], [1500.0, 9.0], [100.0, 4.0], [1600.0, 8.0], [1700.0, 7.0], [1800.0, 4.0], [1900.0, 3.0], [2200.0, 2.0], [2300.0, 1.0], [2500.0, 1.0], [2600.0, 2.0], [2700.0, 2.0], [2900.0, 2.0], [3000.0, 3.0], [200.0, 41.0], [3200.0, 2.0], [3400.0, 1.0], [3600.0, 1.0], [300.0, 37.0], [400.0, 56.0], [500.0, 76.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 48.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 548.0, "series": [{"data": [[0.0, 139.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 548.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 48.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.932126696832583, "minX": 1.60422936E12, "maxY": 10.0, "series": [{"data": [[1.60422942E12, 9.932126696832583], [1.60422936E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422942E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 541.0, "minX": 1.0, "maxY": 877.3044077134988, "series": [{"data": [[8.0, 655.0], [4.0, 541.0], [2.0, 607.0], [1.0, 655.0], [9.0, 572.0], [10.0, 877.3044077134988], [5.0, 611.0], [6.0, 705.0], [3.0, 622.0], [7.0, 601.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 874.1387755102043]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 544.75, "minX": 1.60422936E12, "maxY": 1551779.0166666666, "series": [{"data": [[1.60422942E12, 1551779.0166666666], [1.60422936E12, 284034.9666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422942E12, 4978.283333333334], [1.60422936E12, 544.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422942E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 849.7330316742081, "minX": 1.60422936E12, "maxY": 1098.8749999999998, "series": [{"data": [[1.60422942E12, 849.7330316742081], [1.60422936E12, 1098.8749999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422942E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 848.5429864253392, "minX": 1.60422936E12, "maxY": 1097.2638888888885, "series": [{"data": [[1.60422942E12, 848.5429864253392], [1.60422936E12, 1097.2638888888885]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422942E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01960784313725489, "minX": 1.60422936E12, "maxY": 1.3194444444444444, "series": [{"data": [[1.60422942E12, 0.01960784313725489], [1.60422936E12, 1.3194444444444444]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422942E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.60422936E12, "maxY": 3625.0, "series": [{"data": [[1.60422942E12, 3464.0], [1.60422936E12, 3625.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422942E12, 218.9279995250702], [1.60422936E12, 178.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422942E12, 219.57360006332397], [1.60422936E12, 178.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422942E12, 219.30799992084502], [1.60422936E12, 178.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422942E12, 190.0], [1.60422936E12, 178.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422942E12, 799.0], [1.60422936E12, 800.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422942E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 534.0, "minX": 1.0, "maxY": 2535.0, "series": [{"data": [[8.0, 1083.0], [9.0, 1026.0], [10.0, 1032.0], [11.0, 891.0], [12.0, 854.5], [13.0, 743.5], [14.0, 758.0], [15.0, 646.0], [1.0, 2535.0], [16.0, 682.5], [4.0, 614.5], [17.0, 534.0], [18.0, 580.0], [7.0, 1190.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 534.0, "minX": 1.0, "maxY": 2529.0, "series": [{"data": [[8.0, 1081.5], [9.0, 1025.0], [10.0, 1031.0], [11.0, 887.5], [12.0, 854.0], [13.0, 743.0], [14.0, 758.0], [15.0, 645.0], [1.0, 2529.0], [16.0, 682.0], [4.0, 614.0], [17.0, 534.0], [18.0, 579.0], [7.0, 1189.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.3666666666666667, "minX": 1.60422936E12, "maxY": 10.883333333333333, "series": [{"data": [[1.60422942E12, 10.883333333333333], [1.60422936E12, 1.3666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422942E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.60422936E12, "maxY": 11.05, "series": [{"data": [[1.60422942E12, 11.05], [1.60422936E12, 1.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422942E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.60422936E12, "maxY": 11.05, "series": [{"data": [[1.60422942E12, 11.05], [1.60422936E12, 1.2]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422942E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.60422936E12, "maxY": 11.05, "series": [{"data": [[1.60422942E12, 11.05], [1.60422936E12, 1.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422942E12, "title": "Total Transactions Per Second"}},
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

