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
        data: {"result": {"minY": 181.0, "minX": 0.0, "maxY": 3677.0, "series": [{"data": [[0.0, 181.0], [0.1, 181.0], [0.2, 182.0], [0.3, 184.0], [0.4, 184.0], [0.5, 197.0], [0.6, 200.0], [0.7, 202.0], [0.8, 202.0], [0.9, 205.0], [1.0, 209.0], [1.1, 209.0], [1.2, 209.0], [1.3, 212.0], [1.4, 215.0], [1.5, 219.0], [1.6, 219.0], [1.7, 222.0], [1.8, 229.0], [1.9, 229.0], [2.0, 231.0], [2.1, 238.0], [2.2, 244.0], [2.3, 244.0], [2.4, 266.0], [2.5, 266.0], [2.6, 274.0], [2.7, 274.0], [2.8, 277.0], [2.9, 283.0], [3.0, 283.0], [3.1, 283.0], [3.2, 285.0], [3.3, 294.0], [3.4, 294.0], [3.5, 295.0], [3.6, 298.0], [3.7, 299.0], [3.8, 299.0], [3.9, 301.0], [4.0, 301.0], [4.1, 304.0], [4.2, 304.0], [4.3, 305.0], [4.4, 312.0], [4.5, 317.0], [4.6, 317.0], [4.7, 319.0], [4.8, 321.0], [4.9, 323.0], [5.0, 323.0], [5.1, 335.0], [5.2, 341.0], [5.3, 341.0], [5.4, 342.0], [5.5, 348.0], [5.6, 348.0], [5.7, 348.0], [5.8, 353.0], [5.9, 359.0], [6.0, 361.0], [6.1, 361.0], [6.2, 365.0], [6.3, 365.0], [6.4, 366.0], [6.5, 366.0], [6.6, 367.0], [6.7, 367.0], [6.8, 367.0], [6.9, 371.0], [7.0, 379.0], [7.1, 382.0], [7.2, 382.0], [7.3, 386.0], [7.4, 387.0], [7.5, 392.0], [7.6, 392.0], [7.7, 392.0], [7.8, 394.0], [7.9, 396.0], [8.0, 396.0], [8.1, 400.0], [8.2, 400.0], [8.3, 407.0], [8.4, 407.0], [8.5, 409.0], [8.6, 410.0], [8.7, 410.0], [8.8, 412.0], [8.9, 413.0], [9.0, 414.0], [9.1, 414.0], [9.2, 417.0], [9.3, 418.0], [9.4, 424.0], [9.5, 424.0], [9.6, 426.0], [9.7, 427.0], [9.8, 429.0], [9.9, 429.0], [10.0, 432.0], [10.1, 434.0], [10.2, 434.0], [10.3, 435.0], [10.4, 435.0], [10.5, 436.0], [10.6, 436.0], [10.7, 441.0], [10.8, 443.0], [10.9, 444.0], [11.0, 444.0], [11.1, 444.0], [11.2, 446.0], [11.3, 446.0], [11.4, 446.0], [11.5, 448.0], [11.6, 451.0], [11.7, 451.0], [11.8, 451.0], [11.9, 453.0], [12.0, 457.0], [12.1, 457.0], [12.2, 460.0], [12.3, 463.0], [12.4, 463.0], [12.5, 463.0], [12.6, 464.0], [12.7, 464.0], [12.8, 464.0], [12.9, 464.0], [13.0, 470.0], [13.1, 473.0], [13.2, 474.0], [13.3, 474.0], [13.4, 479.0], [13.5, 480.0], [13.6, 480.0], [13.7, 481.0], [13.8, 482.0], [13.9, 483.0], [14.0, 483.0], [14.1, 484.0], [14.2, 484.0], [14.3, 490.0], [14.4, 490.0], [14.5, 492.0], [14.6, 493.0], [14.7, 495.0], [14.8, 495.0], [14.9, 497.0], [15.0, 497.0], [15.1, 497.0], [15.2, 500.0], [15.3, 500.0], [15.4, 500.0], [15.5, 500.0], [15.6, 501.0], [15.7, 501.0], [15.8, 501.0], [15.9, 501.0], [16.0, 501.0], [16.1, 501.0], [16.2, 502.0], [16.3, 502.0], [16.4, 504.0], [16.5, 509.0], [16.6, 509.0], [16.7, 509.0], [16.8, 511.0], [16.9, 512.0], [17.0, 512.0], [17.1, 514.0], [17.2, 514.0], [17.3, 515.0], [17.4, 515.0], [17.5, 516.0], [17.6, 517.0], [17.7, 517.0], [17.8, 517.0], [17.9, 519.0], [18.0, 520.0], [18.1, 520.0], [18.2, 520.0], [18.3, 520.0], [18.4, 522.0], [18.5, 522.0], [18.6, 523.0], [18.7, 525.0], [18.8, 525.0], [18.9, 525.0], [19.0, 526.0], [19.1, 528.0], [19.2, 530.0], [19.3, 530.0], [19.4, 530.0], [19.5, 531.0], [19.6, 532.0], [19.7, 532.0], [19.8, 532.0], [19.9, 533.0], [20.0, 534.0], [20.1, 534.0], [20.2, 535.0], [20.3, 535.0], [20.4, 535.0], [20.5, 536.0], [20.6, 536.0], [20.7, 536.0], [20.8, 536.0], [20.9, 537.0], [21.0, 539.0], [21.1, 539.0], [21.2, 539.0], [21.3, 540.0], [21.4, 540.0], [21.5, 543.0], [21.6, 543.0], [21.7, 547.0], [21.8, 549.0], [21.9, 549.0], [22.0, 549.0], [22.1, 550.0], [22.2, 553.0], [22.3, 553.0], [22.4, 555.0], [22.5, 556.0], [22.6, 556.0], [22.7, 556.0], [22.8, 557.0], [22.9, 558.0], [23.0, 558.0], [23.1, 558.0], [23.2, 559.0], [23.3, 559.0], [23.4, 559.0], [23.5, 560.0], [23.6, 562.0], [23.7, 563.0], [23.8, 563.0], [23.9, 563.0], [24.0, 564.0], [24.1, 564.0], [24.2, 564.0], [24.3, 565.0], [24.4, 565.0], [24.5, 566.0], [24.6, 566.0], [24.7, 568.0], [24.8, 570.0], [24.9, 570.0], [25.0, 570.0], [25.1, 571.0], [25.2, 572.0], [25.3, 572.0], [25.4, 573.0], [25.5, 575.0], [25.6, 576.0], [25.7, 576.0], [25.8, 576.0], [25.9, 577.0], [26.0, 577.0], [26.1, 577.0], [26.2, 578.0], [26.3, 579.0], [26.4, 580.0], [26.5, 580.0], [26.6, 582.0], [26.7, 582.0], [26.8, 582.0], [26.9, 583.0], [27.0, 583.0], [27.1, 586.0], [27.2, 586.0], [27.3, 587.0], [27.4, 587.0], [27.5, 590.0], [27.6, 590.0], [27.7, 591.0], [27.8, 591.0], [27.9, 591.0], [28.0, 591.0], [28.1, 591.0], [28.2, 592.0], [28.3, 592.0], [28.4, 592.0], [28.5, 592.0], [28.6, 592.0], [28.7, 592.0], [28.8, 593.0], [28.9, 593.0], [29.0, 594.0], [29.1, 594.0], [29.2, 596.0], [29.3, 603.0], [29.4, 605.0], [29.5, 605.0], [29.6, 605.0], [29.7, 606.0], [29.8, 608.0], [29.9, 608.0], [30.0, 608.0], [30.1, 609.0], [30.2, 609.0], [30.3, 612.0], [30.4, 612.0], [30.5, 612.0], [30.6, 612.0], [30.7, 613.0], [30.8, 613.0], [30.9, 614.0], [31.0, 614.0], [31.1, 615.0], [31.2, 617.0], [31.3, 619.0], [31.4, 619.0], [31.5, 619.0], [31.6, 622.0], [31.7, 622.0], [31.8, 630.0], [31.9, 632.0], [32.0, 632.0], [32.1, 632.0], [32.2, 632.0], [32.3, 632.0], [32.4, 633.0], [32.5, 633.0], [32.6, 634.0], [32.7, 637.0], [32.8, 639.0], [32.9, 639.0], [33.0, 640.0], [33.1, 641.0], [33.2, 642.0], [33.3, 642.0], [33.4, 646.0], [33.5, 647.0], [33.6, 647.0], [33.7, 648.0], [33.8, 650.0], [33.9, 653.0], [34.0, 653.0], [34.1, 655.0], [34.2, 655.0], [34.3, 655.0], [34.4, 655.0], [34.5, 655.0], [34.6, 658.0], [34.7, 662.0], [34.8, 662.0], [34.9, 664.0], [35.0, 665.0], [35.1, 665.0], [35.2, 665.0], [35.3, 666.0], [35.4, 667.0], [35.5, 667.0], [35.6, 668.0], [35.7, 668.0], [35.8, 670.0], [35.9, 670.0], [36.0, 672.0], [36.1, 672.0], [36.2, 672.0], [36.3, 672.0], [36.4, 672.0], [36.5, 674.0], [36.6, 676.0], [36.7, 676.0], [36.8, 683.0], [36.9, 685.0], [37.0, 685.0], [37.1, 687.0], [37.2, 688.0], [37.3, 689.0], [37.4, 689.0], [37.5, 692.0], [37.6, 694.0], [37.7, 695.0], [37.8, 695.0], [37.9, 700.0], [38.0, 703.0], [38.1, 703.0], [38.2, 703.0], [38.3, 704.0], [38.4, 706.0], [38.5, 706.0], [38.6, 707.0], [38.7, 707.0], [38.8, 711.0], [38.9, 711.0], [39.0, 716.0], [39.1, 716.0], [39.2, 717.0], [39.3, 717.0], [39.4, 717.0], [39.5, 720.0], [39.6, 721.0], [39.7, 721.0], [39.8, 722.0], [39.9, 723.0], [40.0, 729.0], [40.1, 729.0], [40.2, 730.0], [40.3, 734.0], [40.4, 734.0], [40.5, 735.0], [40.6, 736.0], [40.7, 736.0], [40.8, 736.0], [40.9, 737.0], [41.0, 738.0], [41.1, 740.0], [41.2, 740.0], [41.3, 742.0], [41.4, 743.0], [41.5, 744.0], [41.6, 744.0], [41.7, 745.0], [41.8, 745.0], [41.9, 745.0], [42.0, 745.0], [42.1, 747.0], [42.2, 747.0], [42.3, 747.0], [42.4, 747.0], [42.5, 749.0], [42.6, 750.0], [42.7, 750.0], [42.8, 753.0], [42.9, 754.0], [43.0, 754.0], [43.1, 754.0], [43.2, 760.0], [43.3, 760.0], [43.4, 760.0], [43.5, 761.0], [43.6, 761.0], [43.7, 770.0], [43.8, 770.0], [43.9, 770.0], [44.0, 771.0], [44.1, 771.0], [44.2, 771.0], [44.3, 773.0], [44.4, 773.0], [44.5, 776.0], [44.6, 776.0], [44.7, 778.0], [44.8, 781.0], [44.9, 781.0], [45.0, 781.0], [45.1, 783.0], [45.2, 784.0], [45.3, 784.0], [45.4, 785.0], [45.5, 786.0], [45.6, 788.0], [45.7, 788.0], [45.8, 789.0], [45.9, 792.0], [46.0, 795.0], [46.1, 795.0], [46.2, 796.0], [46.3, 797.0], [46.4, 798.0], [46.5, 798.0], [46.6, 801.0], [46.7, 802.0], [46.8, 802.0], [46.9, 809.0], [47.0, 811.0], [47.1, 811.0], [47.2, 811.0], [47.3, 812.0], [47.4, 817.0], [47.5, 820.0], [47.6, 820.0], [47.7, 820.0], [47.8, 822.0], [47.9, 824.0], [48.0, 824.0], [48.1, 829.0], [48.2, 830.0], [48.3, 831.0], [48.4, 831.0], [48.5, 834.0], [48.6, 834.0], [48.7, 834.0], [48.8, 836.0], [48.9, 836.0], [49.0, 837.0], [49.1, 837.0], [49.2, 838.0], [49.3, 838.0], [49.4, 839.0], [49.5, 839.0], [49.6, 841.0], [49.7, 842.0], [49.8, 843.0], [49.9, 843.0], [50.0, 844.0], [50.1, 847.0], [50.2, 847.0], [50.3, 854.0], [50.4, 855.0], [50.5, 855.0], [50.6, 855.0], [50.7, 861.0], [50.8, 863.0], [50.9, 863.0], [51.0, 863.0], [51.1, 865.0], [51.2, 865.0], [51.3, 866.0], [51.4, 866.0], [51.5, 867.0], [51.6, 869.0], [51.7, 869.0], [51.8, 873.0], [51.9, 876.0], [52.0, 877.0], [52.1, 877.0], [52.2, 878.0], [52.3, 884.0], [52.4, 884.0], [52.5, 884.0], [52.6, 885.0], [52.7, 885.0], [52.8, 887.0], [52.9, 887.0], [53.0, 887.0], [53.1, 889.0], [53.2, 892.0], [53.3, 892.0], [53.4, 892.0], [53.5, 895.0], [53.6, 895.0], [53.7, 898.0], [53.8, 898.0], [53.9, 901.0], [54.0, 901.0], [54.1, 902.0], [54.2, 902.0], [54.3, 903.0], [54.4, 903.0], [54.5, 904.0], [54.6, 904.0], [54.7, 906.0], [54.8, 906.0], [54.9, 907.0], [55.0, 908.0], [55.1, 908.0], [55.2, 911.0], [55.3, 911.0], [55.4, 912.0], [55.5, 912.0], [55.6, 913.0], [55.7, 913.0], [55.8, 913.0], [55.9, 913.0], [56.0, 915.0], [56.1, 916.0], [56.2, 921.0], [56.3, 921.0], [56.4, 921.0], [56.5, 921.0], [56.6, 922.0], [56.7, 922.0], [56.8, 923.0], [56.9, 925.0], [57.0, 925.0], [57.1, 930.0], [57.2, 930.0], [57.3, 930.0], [57.4, 930.0], [57.5, 936.0], [57.6, 936.0], [57.7, 937.0], [57.8, 937.0], [57.9, 940.0], [58.0, 940.0], [58.1, 941.0], [58.2, 941.0], [58.3, 942.0], [58.4, 944.0], [58.5, 944.0], [58.6, 945.0], [58.7, 945.0], [58.8, 945.0], [58.9, 945.0], [59.0, 947.0], [59.1, 947.0], [59.2, 950.0], [59.3, 950.0], [59.4, 953.0], [59.5, 953.0], [59.6, 953.0], [59.7, 953.0], [59.8, 957.0], [59.9, 958.0], [60.0, 959.0], [60.1, 959.0], [60.2, 959.0], [60.3, 959.0], [60.4, 959.0], [60.5, 962.0], [60.6, 966.0], [60.7, 967.0], [60.8, 967.0], [60.9, 968.0], [61.0, 969.0], [61.1, 969.0], [61.2, 969.0], [61.3, 969.0], [61.4, 970.0], [61.5, 971.0], [61.6, 971.0], [61.7, 972.0], [61.8, 974.0], [61.9, 974.0], [62.0, 974.0], [62.1, 975.0], [62.2, 976.0], [62.3, 976.0], [62.4, 978.0], [62.5, 978.0], [62.6, 981.0], [62.7, 981.0], [62.8, 982.0], [62.9, 983.0], [63.0, 983.0], [63.1, 983.0], [63.2, 983.0], [63.3, 986.0], [63.4, 986.0], [63.5, 991.0], [63.6, 992.0], [63.7, 994.0], [63.8, 994.0], [63.9, 994.0], [64.0, 995.0], [64.1, 997.0], [64.2, 997.0], [64.3, 998.0], [64.4, 1000.0], [64.5, 1002.0], [64.6, 1002.0], [64.7, 1007.0], [64.8, 1010.0], [64.9, 1012.0], [65.0, 1012.0], [65.1, 1012.0], [65.2, 1014.0], [65.3, 1014.0], [65.4, 1015.0], [65.5, 1018.0], [65.6, 1018.0], [65.7, 1018.0], [65.8, 1018.0], [65.9, 1019.0], [66.0, 1022.0], [66.1, 1022.0], [66.2, 1023.0], [66.3, 1023.0], [66.4, 1025.0], [66.5, 1025.0], [66.6, 1027.0], [66.7, 1028.0], [66.8, 1028.0], [66.9, 1028.0], [67.0, 1030.0], [67.1, 1032.0], [67.2, 1032.0], [67.3, 1032.0], [67.4, 1035.0], [67.5, 1036.0], [67.6, 1036.0], [67.7, 1037.0], [67.8, 1038.0], [67.9, 1038.0], [68.0, 1038.0], [68.1, 1038.0], [68.2, 1041.0], [68.3, 1041.0], [68.4, 1041.0], [68.5, 1044.0], [68.6, 1046.0], [68.7, 1046.0], [68.8, 1046.0], [68.9, 1046.0], [69.0, 1047.0], [69.1, 1047.0], [69.2, 1047.0], [69.3, 1048.0], [69.4, 1049.0], [69.5, 1049.0], [69.6, 1049.0], [69.7, 1051.0], [69.8, 1055.0], [69.9, 1055.0], [70.0, 1057.0], [70.1, 1057.0], [70.2, 1057.0], [70.3, 1058.0], [70.4, 1071.0], [70.5, 1072.0], [70.6, 1072.0], [70.7, 1077.0], [70.8, 1078.0], [70.9, 1080.0], [71.0, 1080.0], [71.1, 1083.0], [71.2, 1087.0], [71.3, 1088.0], [71.4, 1088.0], [71.5, 1089.0], [71.6, 1089.0], [71.7, 1089.0], [71.8, 1089.0], [71.9, 1091.0], [72.0, 1091.0], [72.1, 1091.0], [72.2, 1091.0], [72.3, 1092.0], [72.4, 1092.0], [72.5, 1092.0], [72.6, 1092.0], [72.7, 1094.0], [72.8, 1094.0], [72.9, 1094.0], [73.0, 1098.0], [73.1, 1098.0], [73.2, 1100.0], [73.3, 1100.0], [73.4, 1100.0], [73.5, 1102.0], [73.6, 1102.0], [73.7, 1105.0], [73.8, 1106.0], [73.9, 1107.0], [74.0, 1107.0], [74.1, 1108.0], [74.2, 1113.0], [74.3, 1114.0], [74.4, 1114.0], [74.5, 1116.0], [74.6, 1118.0], [74.7, 1119.0], [74.8, 1119.0], [74.9, 1119.0], [75.0, 1120.0], [75.1, 1120.0], [75.2, 1120.0], [75.3, 1120.0], [75.4, 1124.0], [75.5, 1124.0], [75.6, 1129.0], [75.7, 1131.0], [75.8, 1131.0], [75.9, 1131.0], [76.0, 1134.0], [76.1, 1135.0], [76.2, 1137.0], [76.3, 1137.0], [76.4, 1137.0], [76.5, 1138.0], [76.6, 1143.0], [76.7, 1143.0], [76.8, 1145.0], [76.9, 1148.0], [77.0, 1148.0], [77.1, 1149.0], [77.2, 1149.0], [77.3, 1151.0], [77.4, 1151.0], [77.5, 1152.0], [77.6, 1152.0], [77.7, 1154.0], [77.8, 1154.0], [77.9, 1154.0], [78.0, 1155.0], [78.1, 1155.0], [78.2, 1155.0], [78.3, 1157.0], [78.4, 1158.0], [78.5, 1158.0], [78.6, 1159.0], [78.7, 1163.0], [78.8, 1169.0], [78.9, 1169.0], [79.0, 1172.0], [79.1, 1178.0], [79.2, 1180.0], [79.3, 1180.0], [79.4, 1180.0], [79.5, 1181.0], [79.6, 1185.0], [79.7, 1185.0], [79.8, 1189.0], [79.9, 1192.0], [80.0, 1193.0], [80.1, 1193.0], [80.2, 1200.0], [80.3, 1200.0], [80.4, 1200.0], [80.5, 1200.0], [80.6, 1201.0], [80.7, 1203.0], [80.8, 1203.0], [80.9, 1205.0], [81.0, 1207.0], [81.1, 1207.0], [81.2, 1207.0], [81.3, 1210.0], [81.4, 1210.0], [81.5, 1211.0], [81.6, 1211.0], [81.7, 1212.0], [81.8, 1216.0], [81.9, 1216.0], [82.0, 1217.0], [82.1, 1221.0], [82.2, 1222.0], [82.3, 1222.0], [82.4, 1222.0], [82.5, 1227.0], [82.6, 1232.0], [82.7, 1232.0], [82.8, 1232.0], [82.9, 1232.0], [83.0, 1233.0], [83.1, 1233.0], [83.2, 1233.0], [83.3, 1234.0], [83.4, 1234.0], [83.5, 1235.0], [83.6, 1238.0], [83.7, 1243.0], [83.8, 1243.0], [83.9, 1244.0], [84.0, 1244.0], [84.1, 1246.0], [84.2, 1246.0], [84.3, 1248.0], [84.4, 1248.0], [84.5, 1249.0], [84.6, 1249.0], [84.7, 1250.0], [84.8, 1250.0], [84.9, 1260.0], [85.0, 1260.0], [85.1, 1266.0], [85.2, 1270.0], [85.3, 1270.0], [85.4, 1277.0], [85.5, 1283.0], [85.6, 1283.0], [85.7, 1283.0], [85.8, 1283.0], [85.9, 1285.0], [86.0, 1285.0], [86.1, 1285.0], [86.2, 1286.0], [86.3, 1291.0], [86.4, 1291.0], [86.5, 1291.0], [86.6, 1292.0], [86.7, 1296.0], [86.8, 1296.0], [86.9, 1298.0], [87.0, 1299.0], [87.1, 1299.0], [87.2, 1299.0], [87.3, 1300.0], [87.4, 1301.0], [87.5, 1303.0], [87.6, 1303.0], [87.7, 1306.0], [87.8, 1308.0], [87.9, 1308.0], [88.0, 1308.0], [88.1, 1312.0], [88.2, 1313.0], [88.3, 1316.0], [88.4, 1316.0], [88.5, 1317.0], [88.6, 1320.0], [88.7, 1320.0], [88.8, 1325.0], [88.9, 1328.0], [89.0, 1330.0], [89.1, 1330.0], [89.2, 1340.0], [89.3, 1341.0], [89.4, 1345.0], [89.5, 1345.0], [89.6, 1345.0], [89.7, 1346.0], [89.8, 1350.0], [89.9, 1350.0], [90.0, 1353.0], [90.1, 1358.0], [90.2, 1358.0], [90.3, 1359.0], [90.4, 1360.0], [90.5, 1360.0], [90.6, 1360.0], [90.7, 1366.0], [90.8, 1368.0], [90.9, 1369.0], [91.0, 1369.0], [91.1, 1374.0], [91.2, 1384.0], [91.3, 1385.0], [91.4, 1385.0], [91.5, 1386.0], [91.6, 1387.0], [91.7, 1387.0], [91.8, 1393.0], [91.9, 1394.0], [92.0, 1394.0], [92.1, 1394.0], [92.2, 1395.0], [92.3, 1409.0], [92.4, 1419.0], [92.5, 1419.0], [92.6, 1424.0], [92.7, 1428.0], [92.8, 1429.0], [92.9, 1429.0], [93.0, 1435.0], [93.1, 1439.0], [93.2, 1454.0], [93.3, 1454.0], [93.4, 1457.0], [93.5, 1458.0], [93.6, 1458.0], [93.7, 1459.0], [93.8, 1465.0], [93.9, 1479.0], [94.0, 1479.0], [94.1, 1484.0], [94.2, 1491.0], [94.3, 1491.0], [94.4, 1491.0], [94.5, 1501.0], [94.6, 1504.0], [94.7, 1505.0], [94.8, 1505.0], [94.9, 1511.0], [95.0, 1546.0], [95.1, 1546.0], [95.2, 1556.0], [95.3, 1569.0], [95.4, 1574.0], [95.5, 1574.0], [95.6, 1576.0], [95.7, 1587.0], [95.8, 1600.0], [95.9, 1600.0], [96.0, 1634.0], [96.1, 1666.0], [96.2, 1686.0], [96.3, 1686.0], [96.4, 1704.0], [96.5, 1732.0], [96.6, 1760.0], [96.7, 1760.0], [96.8, 1760.0], [96.9, 1806.0], [97.0, 1806.0], [97.1, 1826.0], [97.2, 1907.0], [97.3, 1985.0], [97.4, 1985.0], [97.5, 2001.0], [97.6, 2011.0], [97.7, 2077.0], [97.8, 2077.0], [97.9, 2106.0], [98.0, 2145.0], [98.1, 2169.0], [98.2, 2169.0], [98.3, 2366.0], [98.4, 2545.0], [98.5, 2545.0], [98.6, 2666.0], [98.7, 2850.0], [98.8, 2974.0], [98.9, 2974.0], [99.0, 3015.0], [99.1, 3064.0], [99.2, 3096.0], [99.3, 3096.0], [99.4, 3226.0], [99.5, 3342.0], [99.6, 3344.0], [99.7, 3344.0], [99.8, 3472.0], [99.9, 3677.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 104.0, "series": [{"data": [[600.0, 63.0], [700.0, 64.0], [800.0, 54.0], [900.0, 77.0], [1000.0, 65.0], [1100.0, 51.0], [1200.0, 52.0], [1300.0, 37.0], [1400.0, 16.0], [1500.0, 10.0], [100.0, 4.0], [1600.0, 4.0], [1700.0, 4.0], [1800.0, 2.0], [1900.0, 2.0], [2000.0, 3.0], [2100.0, 3.0], [2300.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [2900.0, 1.0], [3000.0, 3.0], [3300.0, 2.0], [3200.0, 1.0], [200.0, 24.0], [3400.0, 1.0], [3600.0, 1.0], [300.0, 31.0], [400.0, 52.0], [500.0, 104.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 41.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 580.0, "series": [{"data": [[0.0, 114.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 580.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 41.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.930015552099531, "minX": 1.60374582E12, "maxY": 10.0, "series": [{"data": [[1.60374588E12, 9.930015552099531], [1.60374582E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374588E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 509.0, "minX": 1.0, "maxY": 957.0, "series": [{"data": [[8.0, 563.0], [4.0, 830.0], [2.0, 509.0], [1.0, 957.0], [9.0, 593.0], [10.0, 899.4986225895312], [5.0, 536.0], [6.0, 612.0], [3.0, 592.0], [7.0, 525.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 896.2625850340131]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 696.1833333333333, "minX": 1.60374582E12, "maxY": 1477028.65, "series": [{"data": [[1.60374588E12, 1477028.65], [1.60374582E12, 358738.6666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60374588E12, 4826.85], [1.60374582E12, 696.1833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374588E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 866.5054432348364, "minX": 1.60374582E12, "maxY": 1104.239130434782, "series": [{"data": [[1.60374588E12, 866.5054432348364], [1.60374582E12, 1104.239130434782]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374588E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 865.3110419906692, "minX": 1.60374582E12, "maxY": 1102.6739130434783, "series": [{"data": [[1.60374588E12, 865.3110419906692], [1.60374582E12, 1102.6739130434783]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374588E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.012441679626749613, "minX": 1.60374582E12, "maxY": 1.1847826086956528, "series": [{"data": [[1.60374588E12, 0.012441679626749613], [1.60374582E12, 1.1847826086956528]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374588E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.60374582E12, "maxY": 3677.0, "series": [{"data": [[1.60374588E12, 3096.0], [1.60374582E12, 3677.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60374588E12, 204.3879995393753], [1.60374582E12, 197.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60374588E12, 206.5024002456665], [1.60374582E12, 197.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60374588E12, 205.47199969291688], [1.60374582E12, 197.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60374588E12, 181.0], [1.60374582E12, 197.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60374588E12, 863.0], [1.60374582E12, 758.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374588E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 573.0, "minX": 4.0, "maxY": 2697.5, "series": [{"data": [[4.0, 2697.5], [8.0, 974.5], [16.0, 608.5], [17.0, 622.0], [9.0, 966.0], [10.0, 1069.0], [5.0, 592.0], [11.0, 972.0], [12.0, 907.5], [13.0, 781.0], [14.0, 638.0], [15.0, 573.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 573.0, "minX": 4.0, "maxY": 2694.5, "series": [{"data": [[4.0, 2694.5], [8.0, 974.0], [16.0, 608.0], [17.0, 619.5], [9.0, 963.0], [10.0, 1067.0], [5.0, 591.0], [11.0, 971.0], [12.0, 906.5], [13.0, 781.0], [14.0, 637.0], [15.0, 573.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.7, "minX": 1.60374582E12, "maxY": 10.55, "series": [{"data": [[1.60374588E12, 10.55], [1.60374582E12, 1.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374588E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.5333333333333334, "minX": 1.60374582E12, "maxY": 10.716666666666667, "series": [{"data": [[1.60374588E12, 10.716666666666667], [1.60374582E12, 1.5333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374588E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.5333333333333334, "minX": 1.60374582E12, "maxY": 10.716666666666667, "series": [{"data": [[1.60374588E12, 10.716666666666667], [1.60374582E12, 1.5333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374588E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.5333333333333334, "minX": 1.60374582E12, "maxY": 10.716666666666667, "series": [{"data": [[1.60374588E12, 10.716666666666667], [1.60374582E12, 1.5333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374588E12, "title": "Total Transactions Per Second"}},
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

