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
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 4097.0, "series": [{"data": [[0.0, 183.0], [0.1, 183.0], [0.2, 192.0], [0.3, 194.0], [0.4, 194.0], [0.5, 202.0], [0.6, 203.0], [0.7, 203.0], [0.8, 203.0], [0.9, 208.0], [1.0, 209.0], [1.1, 211.0], [1.2, 211.0], [1.3, 212.0], [1.4, 213.0], [1.5, 214.0], [1.6, 214.0], [1.7, 226.0], [1.8, 229.0], [1.9, 229.0], [2.0, 229.0], [2.1, 235.0], [2.2, 239.0], [2.3, 239.0], [2.4, 239.0], [2.5, 241.0], [2.6, 242.0], [2.7, 242.0], [2.8, 244.0], [2.9, 246.0], [3.0, 248.0], [3.1, 248.0], [3.2, 248.0], [3.3, 249.0], [3.4, 249.0], [3.5, 250.0], [3.6, 251.0], [3.7, 253.0], [3.8, 253.0], [3.9, 254.0], [4.0, 254.0], [4.1, 255.0], [4.2, 255.0], [4.3, 259.0], [4.4, 268.0], [4.5, 269.0], [4.6, 269.0], [4.7, 272.0], [4.8, 275.0], [4.9, 277.0], [5.0, 277.0], [5.1, 278.0], [5.2, 278.0], [5.3, 278.0], [5.4, 279.0], [5.5, 281.0], [5.6, 282.0], [5.7, 282.0], [5.8, 282.0], [5.9, 282.0], [6.0, 283.0], [6.1, 283.0], [6.2, 284.0], [6.3, 286.0], [6.4, 290.0], [6.5, 290.0], [6.6, 290.0], [6.7, 290.0], [6.8, 290.0], [6.9, 291.0], [7.0, 292.0], [7.1, 294.0], [7.2, 294.0], [7.3, 298.0], [7.4, 300.0], [7.5, 302.0], [7.6, 302.0], [7.7, 303.0], [7.8, 304.0], [7.9, 306.0], [8.0, 306.0], [8.1, 308.0], [8.2, 312.0], [8.3, 312.0], [8.4, 312.0], [8.5, 313.0], [8.6, 313.0], [8.7, 313.0], [8.8, 317.0], [8.9, 318.0], [9.0, 322.0], [9.1, 322.0], [9.2, 330.0], [9.3, 331.0], [9.4, 333.0], [9.5, 333.0], [9.6, 334.0], [9.7, 335.0], [9.8, 336.0], [9.9, 336.0], [10.0, 337.0], [10.1, 338.0], [10.2, 338.0], [10.3, 340.0], [10.4, 343.0], [10.5, 346.0], [10.6, 346.0], [10.7, 348.0], [10.8, 353.0], [10.9, 354.0], [11.0, 354.0], [11.1, 356.0], [11.2, 358.0], [11.3, 358.0], [11.4, 358.0], [11.5, 359.0], [11.6, 360.0], [11.7, 360.0], [11.8, 361.0], [11.9, 363.0], [12.0, 365.0], [12.1, 365.0], [12.2, 367.0], [12.3, 369.0], [12.4, 375.0], [12.5, 375.0], [12.6, 375.0], [12.7, 377.0], [12.8, 385.0], [12.9, 385.0], [13.0, 385.0], [13.1, 388.0], [13.2, 389.0], [13.3, 389.0], [13.4, 390.0], [13.5, 391.0], [13.6, 391.0], [13.7, 393.0], [13.8, 394.0], [13.9, 397.0], [14.0, 397.0], [14.1, 401.0], [14.2, 403.0], [14.3, 404.0], [14.4, 404.0], [14.5, 404.0], [14.6, 405.0], [14.7, 405.0], [14.8, 405.0], [14.9, 405.0], [15.0, 405.0], [15.1, 405.0], [15.2, 407.0], [15.3, 408.0], [15.4, 409.0], [15.5, 409.0], [15.6, 410.0], [15.7, 411.0], [15.8, 411.0], [15.9, 411.0], [16.0, 414.0], [16.1, 416.0], [16.2, 419.0], [16.3, 419.0], [16.4, 419.0], [16.5, 420.0], [16.6, 424.0], [16.7, 424.0], [16.8, 425.0], [16.9, 425.0], [17.0, 425.0], [17.1, 427.0], [17.2, 428.0], [17.3, 428.0], [17.4, 428.0], [17.5, 428.0], [17.6, 432.0], [17.7, 432.0], [17.8, 432.0], [17.9, 433.0], [18.0, 435.0], [18.1, 435.0], [18.2, 435.0], [18.3, 436.0], [18.4, 439.0], [18.5, 439.0], [18.6, 440.0], [18.7, 440.0], [18.8, 441.0], [18.9, 441.0], [19.0, 443.0], [19.1, 443.0], [19.2, 444.0], [19.3, 444.0], [19.4, 445.0], [19.5, 446.0], [19.6, 447.0], [19.7, 447.0], [19.8, 448.0], [19.9, 450.0], [20.0, 450.0], [20.1, 450.0], [20.2, 451.0], [20.3, 451.0], [20.4, 451.0], [20.5, 454.0], [20.6, 456.0], [20.7, 458.0], [20.8, 458.0], [20.9, 459.0], [21.0, 461.0], [21.1, 461.0], [21.2, 461.0], [21.3, 464.0], [21.4, 464.0], [21.5, 469.0], [21.6, 469.0], [21.7, 469.0], [21.8, 475.0], [21.9, 475.0], [22.0, 477.0], [22.1, 477.0], [22.2, 477.0], [22.3, 477.0], [22.4, 478.0], [22.5, 479.0], [22.6, 480.0], [22.7, 480.0], [22.8, 482.0], [22.9, 483.0], [23.0, 487.0], [23.1, 487.0], [23.2, 488.0], [23.3, 491.0], [23.4, 491.0], [23.5, 492.0], [23.6, 493.0], [23.7, 503.0], [23.8, 503.0], [23.9, 505.0], [24.0, 507.0], [24.1, 508.0], [24.2, 508.0], [24.3, 509.0], [24.4, 510.0], [24.5, 512.0], [24.6, 512.0], [24.7, 512.0], [24.8, 514.0], [24.9, 515.0], [25.0, 515.0], [25.1, 515.0], [25.2, 516.0], [25.3, 516.0], [25.4, 522.0], [25.5, 522.0], [25.6, 524.0], [25.7, 524.0], [25.8, 524.0], [25.9, 526.0], [26.0, 528.0], [26.1, 528.0], [26.2, 528.0], [26.3, 529.0], [26.4, 530.0], [26.5, 530.0], [26.6, 532.0], [26.7, 534.0], [26.8, 534.0], [26.9, 535.0], [27.0, 536.0], [27.1, 537.0], [27.2, 537.0], [27.3, 538.0], [27.4, 539.0], [27.5, 540.0], [27.6, 540.0], [27.7, 540.0], [27.8, 540.0], [27.9, 540.0], [28.0, 540.0], [28.1, 541.0], [28.2, 542.0], [28.3, 542.0], [28.4, 542.0], [28.5, 544.0], [28.6, 544.0], [28.7, 544.0], [28.8, 545.0], [28.9, 545.0], [29.0, 545.0], [29.1, 545.0], [29.2, 548.0], [29.3, 550.0], [29.4, 550.0], [29.5, 550.0], [29.6, 550.0], [29.7, 552.0], [29.8, 553.0], [29.9, 553.0], [30.0, 554.0], [30.1, 556.0], [30.2, 556.0], [30.3, 557.0], [30.4, 558.0], [30.5, 560.0], [30.6, 560.0], [30.7, 560.0], [30.8, 561.0], [30.9, 561.0], [31.0, 561.0], [31.1, 563.0], [31.2, 563.0], [31.3, 564.0], [31.4, 564.0], [31.5, 564.0], [31.6, 565.0], [31.7, 565.0], [31.8, 566.0], [31.9, 568.0], [32.0, 575.0], [32.1, 575.0], [32.2, 576.0], [32.3, 578.0], [32.4, 583.0], [32.5, 583.0], [32.6, 585.0], [32.7, 585.0], [32.8, 586.0], [32.9, 586.0], [33.0, 586.0], [33.1, 587.0], [33.2, 587.0], [33.3, 587.0], [33.4, 587.0], [33.5, 589.0], [33.6, 589.0], [33.7, 589.0], [33.8, 590.0], [33.9, 591.0], [34.0, 591.0], [34.1, 592.0], [34.2, 596.0], [34.3, 597.0], [34.4, 597.0], [34.5, 597.0], [34.6, 597.0], [34.7, 598.0], [34.8, 598.0], [34.9, 599.0], [35.0, 599.0], [35.1, 599.0], [35.2, 600.0], [35.3, 600.0], [35.4, 601.0], [35.5, 601.0], [35.6, 603.0], [35.7, 605.0], [35.8, 605.0], [35.9, 605.0], [36.0, 606.0], [36.1, 607.0], [36.2, 607.0], [36.3, 607.0], [36.4, 608.0], [36.5, 610.0], [36.6, 611.0], [36.7, 611.0], [36.8, 612.0], [36.9, 615.0], [37.0, 615.0], [37.1, 615.0], [37.2, 615.0], [37.3, 616.0], [37.4, 616.0], [37.5, 616.0], [37.6, 618.0], [37.7, 619.0], [37.8, 619.0], [37.9, 619.0], [38.0, 620.0], [38.1, 621.0], [38.2, 621.0], [38.3, 623.0], [38.4, 627.0], [38.5, 627.0], [38.6, 629.0], [38.7, 630.0], [38.8, 633.0], [38.9, 633.0], [39.0, 634.0], [39.1, 635.0], [39.2, 636.0], [39.3, 636.0], [39.4, 637.0], [39.5, 639.0], [39.6, 640.0], [39.7, 640.0], [39.8, 640.0], [39.9, 641.0], [40.0, 642.0], [40.1, 642.0], [40.2, 642.0], [40.3, 647.0], [40.4, 647.0], [40.5, 647.0], [40.6, 647.0], [40.7, 649.0], [40.8, 649.0], [40.9, 651.0], [41.0, 654.0], [41.1, 654.0], [41.2, 654.0], [41.3, 655.0], [41.4, 655.0], [41.5, 659.0], [41.6, 659.0], [41.7, 661.0], [41.8, 663.0], [41.9, 663.0], [42.0, 663.0], [42.1, 664.0], [42.2, 676.0], [42.3, 676.0], [42.4, 676.0], [42.5, 677.0], [42.6, 677.0], [42.7, 677.0], [42.8, 680.0], [42.9, 682.0], [43.0, 683.0], [43.1, 683.0], [43.2, 684.0], [43.3, 684.0], [43.4, 684.0], [43.5, 684.0], [43.6, 684.0], [43.7, 685.0], [43.8, 685.0], [43.9, 685.0], [44.0, 689.0], [44.1, 690.0], [44.2, 690.0], [44.3, 693.0], [44.4, 695.0], [44.5, 705.0], [44.6, 705.0], [44.7, 708.0], [44.8, 709.0], [44.9, 715.0], [45.0, 715.0], [45.1, 716.0], [45.2, 717.0], [45.3, 717.0], [45.4, 719.0], [45.5, 723.0], [45.6, 724.0], [45.7, 724.0], [45.8, 727.0], [45.9, 727.0], [46.0, 733.0], [46.1, 733.0], [46.2, 733.0], [46.3, 735.0], [46.4, 736.0], [46.5, 736.0], [46.6, 738.0], [46.7, 740.0], [46.8, 740.0], [46.9, 741.0], [47.0, 743.0], [47.1, 744.0], [47.2, 744.0], [47.3, 745.0], [47.4, 749.0], [47.5, 752.0], [47.6, 752.0], [47.7, 757.0], [47.8, 766.0], [47.9, 768.0], [48.0, 768.0], [48.1, 769.0], [48.2, 771.0], [48.3, 773.0], [48.4, 773.0], [48.5, 778.0], [48.6, 780.0], [48.7, 780.0], [48.8, 781.0], [48.9, 783.0], [49.0, 783.0], [49.1, 783.0], [49.2, 784.0], [49.3, 784.0], [49.4, 787.0], [49.5, 787.0], [49.6, 787.0], [49.7, 788.0], [49.8, 788.0], [49.9, 788.0], [50.0, 794.0], [50.1, 794.0], [50.2, 794.0], [50.3, 798.0], [50.4, 798.0], [50.5, 799.0], [50.6, 799.0], [50.7, 800.0], [50.8, 805.0], [50.9, 809.0], [51.0, 809.0], [51.1, 810.0], [51.2, 811.0], [51.3, 813.0], [51.4, 813.0], [51.5, 814.0], [51.6, 815.0], [51.7, 815.0], [51.8, 816.0], [51.9, 819.0], [52.0, 825.0], [52.1, 825.0], [52.2, 825.0], [52.3, 827.0], [52.4, 829.0], [52.5, 829.0], [52.6, 833.0], [52.7, 838.0], [52.8, 844.0], [52.9, 844.0], [53.0, 845.0], [53.1, 846.0], [53.2, 846.0], [53.3, 846.0], [53.4, 852.0], [53.5, 852.0], [53.6, 852.0], [53.7, 852.0], [53.8, 854.0], [53.9, 855.0], [54.0, 855.0], [54.1, 856.0], [54.2, 858.0], [54.3, 858.0], [54.4, 858.0], [54.5, 861.0], [54.6, 864.0], [54.7, 864.0], [54.8, 864.0], [54.9, 869.0], [55.0, 870.0], [55.1, 870.0], [55.2, 871.0], [55.3, 871.0], [55.4, 873.0], [55.5, 873.0], [55.6, 875.0], [55.7, 876.0], [55.8, 879.0], [55.9, 879.0], [56.0, 880.0], [56.1, 880.0], [56.2, 882.0], [56.3, 882.0], [56.4, 883.0], [56.5, 884.0], [56.6, 886.0], [56.7, 886.0], [56.8, 889.0], [56.9, 890.0], [57.0, 890.0], [57.1, 890.0], [57.2, 891.0], [57.3, 894.0], [57.4, 894.0], [57.5, 895.0], [57.6, 895.0], [57.7, 897.0], [57.8, 897.0], [57.9, 897.0], [58.0, 899.0], [58.1, 900.0], [58.2, 900.0], [58.3, 902.0], [58.4, 902.0], [58.5, 902.0], [58.6, 912.0], [58.7, 915.0], [58.8, 919.0], [58.9, 919.0], [59.0, 921.0], [59.1, 922.0], [59.2, 924.0], [59.3, 924.0], [59.4, 924.0], [59.5, 927.0], [59.6, 927.0], [59.7, 927.0], [59.8, 928.0], [59.9, 929.0], [60.0, 930.0], [60.1, 930.0], [60.2, 935.0], [60.3, 935.0], [60.4, 935.0], [60.5, 937.0], [60.6, 941.0], [60.7, 941.0], [60.8, 941.0], [60.9, 945.0], [61.0, 946.0], [61.1, 947.0], [61.2, 947.0], [61.3, 948.0], [61.4, 951.0], [61.5, 953.0], [61.6, 953.0], [61.7, 954.0], [61.8, 955.0], [61.9, 955.0], [62.0, 956.0], [62.1, 958.0], [62.2, 959.0], [62.3, 959.0], [62.4, 962.0], [62.5, 964.0], [62.6, 964.0], [62.7, 964.0], [62.8, 964.0], [62.9, 970.0], [63.0, 971.0], [63.1, 971.0], [63.2, 973.0], [63.3, 976.0], [63.4, 976.0], [63.5, 976.0], [63.6, 978.0], [63.7, 982.0], [63.8, 982.0], [63.9, 984.0], [64.0, 984.0], [64.1, 988.0], [64.2, 988.0], [64.3, 989.0], [64.4, 990.0], [64.5, 991.0], [64.6, 991.0], [64.7, 991.0], [64.8, 997.0], [64.9, 998.0], [65.0, 998.0], [65.1, 998.0], [65.2, 998.0], [65.3, 998.0], [65.4, 999.0], [65.5, 999.0], [65.6, 999.0], [65.7, 999.0], [65.8, 1003.0], [65.9, 1004.0], [66.0, 1005.0], [66.1, 1005.0], [66.2, 1005.0], [66.3, 1007.0], [66.4, 1008.0], [66.5, 1008.0], [66.6, 1008.0], [66.7, 1009.0], [66.8, 1009.0], [66.9, 1010.0], [67.0, 1010.0], [67.1, 1013.0], [67.2, 1013.0], [67.3, 1014.0], [67.4, 1016.0], [67.5, 1017.0], [67.6, 1017.0], [67.7, 1017.0], [67.8, 1017.0], [67.9, 1020.0], [68.0, 1020.0], [68.1, 1023.0], [68.2, 1026.0], [68.3, 1028.0], [68.4, 1028.0], [68.5, 1030.0], [68.6, 1031.0], [68.7, 1031.0], [68.8, 1032.0], [68.9, 1033.0], [69.0, 1039.0], [69.1, 1039.0], [69.2, 1040.0], [69.3, 1041.0], [69.4, 1046.0], [69.5, 1046.0], [69.6, 1047.0], [69.7, 1048.0], [69.8, 1048.0], [69.9, 1048.0], [70.0, 1049.0], [70.1, 1052.0], [70.2, 1052.0], [70.3, 1054.0], [70.4, 1057.0], [70.5, 1059.0], [70.6, 1059.0], [70.7, 1060.0], [70.8, 1062.0], [70.9, 1063.0], [71.0, 1063.0], [71.1, 1063.0], [71.2, 1066.0], [71.3, 1069.0], [71.4, 1069.0], [71.5, 1072.0], [71.6, 1074.0], [71.7, 1074.0], [71.8, 1075.0], [71.9, 1078.0], [72.0, 1082.0], [72.1, 1082.0], [72.2, 1086.0], [72.3, 1087.0], [72.4, 1096.0], [72.5, 1096.0], [72.6, 1097.0], [72.7, 1098.0], [72.8, 1099.0], [72.9, 1099.0], [73.0, 1100.0], [73.1, 1101.0], [73.2, 1108.0], [73.3, 1108.0], [73.4, 1110.0], [73.5, 1113.0], [73.6, 1113.0], [73.7, 1113.0], [73.8, 1114.0], [73.9, 1115.0], [74.0, 1115.0], [74.1, 1116.0], [74.2, 1117.0], [74.3, 1118.0], [74.4, 1118.0], [74.5, 1119.0], [74.6, 1120.0], [74.7, 1122.0], [74.8, 1122.0], [74.9, 1124.0], [75.0, 1125.0], [75.1, 1125.0], [75.2, 1129.0], [75.3, 1130.0], [75.4, 1131.0], [75.5, 1131.0], [75.6, 1132.0], [75.7, 1133.0], [75.8, 1135.0], [75.9, 1135.0], [76.0, 1136.0], [76.1, 1141.0], [76.2, 1143.0], [76.3, 1143.0], [76.4, 1145.0], [76.5, 1149.0], [76.6, 1152.0], [76.7, 1152.0], [76.8, 1152.0], [76.9, 1156.0], [77.0, 1156.0], [77.1, 1160.0], [77.2, 1160.0], [77.3, 1162.0], [77.4, 1162.0], [77.5, 1163.0], [77.6, 1163.0], [77.7, 1165.0], [77.8, 1165.0], [77.9, 1168.0], [78.0, 1168.0], [78.1, 1170.0], [78.2, 1170.0], [78.3, 1171.0], [78.4, 1174.0], [78.5, 1174.0], [78.6, 1174.0], [78.7, 1175.0], [78.8, 1177.0], [78.9, 1177.0], [79.0, 1179.0], [79.1, 1179.0], [79.2, 1183.0], [79.3, 1183.0], [79.4, 1187.0], [79.5, 1187.0], [79.6, 1192.0], [79.7, 1192.0], [79.8, 1195.0], [79.9, 1197.0], [80.0, 1200.0], [80.1, 1200.0], [80.2, 1203.0], [80.3, 1206.0], [80.4, 1206.0], [80.5, 1209.0], [80.6, 1213.0], [80.7, 1214.0], [80.8, 1214.0], [80.9, 1215.0], [81.0, 1216.0], [81.1, 1216.0], [81.2, 1216.0], [81.3, 1220.0], [81.4, 1223.0], [81.5, 1224.0], [81.6, 1224.0], [81.7, 1226.0], [81.8, 1230.0], [81.9, 1230.0], [82.0, 1235.0], [82.1, 1238.0], [82.2, 1238.0], [82.3, 1238.0], [82.4, 1241.0], [82.5, 1242.0], [82.6, 1245.0], [82.7, 1245.0], [82.8, 1251.0], [82.9, 1253.0], [83.0, 1253.0], [83.1, 1253.0], [83.2, 1253.0], [83.3, 1254.0], [83.4, 1254.0], [83.5, 1255.0], [83.6, 1259.0], [83.7, 1260.0], [83.8, 1260.0], [83.9, 1260.0], [84.0, 1262.0], [84.1, 1264.0], [84.2, 1264.0], [84.3, 1264.0], [84.4, 1267.0], [84.5, 1269.0], [84.6, 1269.0], [84.7, 1271.0], [84.8, 1273.0], [84.9, 1278.0], [85.0, 1278.0], [85.1, 1281.0], [85.2, 1282.0], [85.3, 1282.0], [85.4, 1283.0], [85.5, 1286.0], [85.6, 1288.0], [85.7, 1288.0], [85.8, 1290.0], [85.9, 1290.0], [86.0, 1292.0], [86.1, 1292.0], [86.2, 1293.0], [86.3, 1293.0], [86.4, 1297.0], [86.5, 1297.0], [86.6, 1298.0], [86.7, 1298.0], [86.8, 1298.0], [86.9, 1302.0], [87.0, 1309.0], [87.1, 1309.0], [87.2, 1309.0], [87.3, 1311.0], [87.4, 1312.0], [87.5, 1313.0], [87.6, 1313.0], [87.7, 1314.0], [87.8, 1315.0], [87.9, 1317.0], [88.0, 1317.0], [88.1, 1318.0], [88.2, 1321.0], [88.3, 1327.0], [88.4, 1327.0], [88.5, 1327.0], [88.6, 1338.0], [88.7, 1338.0], [88.8, 1343.0], [88.9, 1345.0], [89.0, 1347.0], [89.1, 1347.0], [89.2, 1353.0], [89.3, 1355.0], [89.4, 1356.0], [89.5, 1356.0], [89.6, 1357.0], [89.7, 1362.0], [89.8, 1366.0], [89.9, 1366.0], [90.0, 1367.0], [90.1, 1371.0], [90.2, 1371.0], [90.3, 1381.0], [90.4, 1392.0], [90.5, 1394.0], [90.6, 1394.0], [90.7, 1403.0], [90.8, 1408.0], [90.9, 1410.0], [91.0, 1410.0], [91.1, 1422.0], [91.2, 1422.0], [91.3, 1427.0], [91.4, 1427.0], [91.5, 1429.0], [91.6, 1435.0], [91.7, 1435.0], [91.8, 1446.0], [91.9, 1447.0], [92.0, 1453.0], [92.1, 1453.0], [92.2, 1455.0], [92.3, 1465.0], [92.4, 1470.0], [92.5, 1470.0], [92.6, 1478.0], [92.7, 1485.0], [92.8, 1487.0], [92.9, 1487.0], [93.0, 1487.0], [93.1, 1491.0], [93.2, 1495.0], [93.3, 1495.0], [93.4, 1498.0], [93.5, 1504.0], [93.6, 1504.0], [93.7, 1507.0], [93.8, 1510.0], [93.9, 1518.0], [94.0, 1518.0], [94.1, 1521.0], [94.2, 1540.0], [94.3, 1550.0], [94.4, 1550.0], [94.5, 1561.0], [94.6, 1567.0], [94.7, 1577.0], [94.8, 1577.0], [94.9, 1587.0], [95.0, 1589.0], [95.1, 1589.0], [95.2, 1603.0], [95.3, 1608.0], [95.4, 1623.0], [95.5, 1623.0], [95.6, 1641.0], [95.7, 1676.0], [95.8, 1713.0], [95.9, 1713.0], [96.0, 1738.0], [96.1, 1763.0], [96.2, 1827.0], [96.3, 1827.0], [96.4, 1829.0], [96.5, 1856.0], [96.6, 1859.0], [96.7, 1859.0], [96.8, 1864.0], [96.9, 1880.0], [97.0, 1880.0], [97.1, 1885.0], [97.2, 1894.0], [97.3, 1900.0], [97.4, 1900.0], [97.5, 1936.0], [97.6, 1944.0], [97.7, 2012.0], [97.8, 2012.0], [97.9, 2044.0], [98.0, 2510.0], [98.1, 2531.0], [98.2, 2531.0], [98.3, 2556.0], [98.4, 2587.0], [98.5, 2587.0], [98.6, 2666.0], [98.7, 2778.0], [98.8, 2843.0], [98.9, 2843.0], [99.0, 2848.0], [99.1, 3003.0], [99.2, 3220.0], [99.3, 3220.0], [99.4, 3307.0], [99.5, 3357.0], [99.6, 3472.0], [99.7, 3472.0], [99.8, 3710.0], [99.9, 4097.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 84.0, "series": [{"data": [[600.0, 69.0], [700.0, 45.0], [800.0, 55.0], [900.0, 56.0], [1000.0, 53.0], [1100.0, 52.0], [1200.0, 50.0], [1300.0, 28.0], [1400.0, 21.0], [1500.0, 12.0], [100.0, 3.0], [1600.0, 5.0], [1700.0, 3.0], [1800.0, 8.0], [1900.0, 3.0], [2000.0, 2.0], [2500.0, 4.0], [2600.0, 1.0], [2700.0, 1.0], [2800.0, 2.0], [3000.0, 1.0], [3200.0, 1.0], [3300.0, 2.0], [200.0, 51.0], [3400.0, 1.0], [3700.0, 1.0], [4000.0, 1.0], [300.0, 49.0], [400.0, 71.0], [500.0, 84.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 48.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 513.0, "series": [{"data": [[0.0, 174.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 513.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 48.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.927066450567262, "minX": 1.60223646E12, "maxY": 10.0, "series": [{"data": [[1.60223646E12, 10.0], [1.60223652E12, 9.927066450567262]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223652E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 286.0, "minX": 1.0, "maxY": 1030.0, "series": [{"data": [[8.0, 781.0], [4.0, 537.0], [2.0, 1030.0], [1.0, 941.0], [9.0, 286.0], [10.0, 866.6129476584016], [5.0, 608.0], [6.0, 619.0], [3.0, 654.0], [7.0, 545.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 864.1659863945572]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 893.9, "minX": 1.60223646E12, "maxY": 1415754.1, "series": [{"data": [[1.60223646E12, 420000.4], [1.60223652E12, 1415754.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223646E12, 893.9], [1.60223652E12, 4629.133333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223652E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 818.7115072933545, "minX": 1.60223646E12, "maxY": 1101.8389830508474, "series": [{"data": [[1.60223646E12, 1101.8389830508474], [1.60223652E12, 818.7115072933545]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223652E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 817.6839546191235, "minX": 1.60223646E12, "maxY": 1100.3305084745778, "series": [{"data": [[1.60223646E12, 1100.3305084745778], [1.60223652E12, 817.6839546191235]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223652E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.014586709886547816, "minX": 1.60223646E12, "maxY": 1.2118644067796605, "series": [{"data": [[1.60223646E12, 1.2118644067796605], [1.60223652E12, 0.014586709886547816]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223652E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 183.0, "minX": 1.60223646E12, "maxY": 4097.0, "series": [{"data": [[1.60223646E12, 4097.0], [1.60223652E12, 2843.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223646E12, 194.41399903535842], [1.60223652E12, 205.80999926328658]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223646E12, 198.05540038585661], [1.60223652E12, 208.11820005893708]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223646E12, 196.43699951767923], [1.60223652E12, 207.3549996316433]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223646E12, 192.0], [1.60223652E12, 183.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223646E12, 848.0], [1.60223652E12, 787.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223652E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 542.0, "minX": 1.0, "maxY": 2666.0, "series": [{"data": [[8.0, 980.5], [9.0, 1007.0], [10.0, 989.5], [11.0, 1005.0], [12.0, 794.0], [13.0, 930.5], [14.0, 672.0], [15.0, 600.0], [1.0, 2666.0], [16.0, 609.0], [17.0, 556.0], [18.0, 628.5], [19.0, 542.0], [6.0, 636.5], [7.0, 1125.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 541.0, "minX": 1.0, "maxY": 2662.0, "series": [{"data": [[8.0, 979.5], [9.0, 1006.0], [10.0, 989.0], [11.0, 1004.0], [12.0, 793.5], [13.0, 930.5], [14.0, 672.0], [15.0, 600.0], [1.0, 2662.0], [16.0, 608.0], [17.0, 555.0], [18.0, 627.5], [19.0, 541.0], [6.0, 636.5], [7.0, 1122.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.1333333333333333, "minX": 1.60223646E12, "maxY": 10.116666666666667, "series": [{"data": [[1.60223646E12, 2.1333333333333333], [1.60223652E12, 10.116666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223652E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.60223646E12, "maxY": 10.283333333333333, "series": [{"data": [[1.60223646E12, 1.9666666666666666], [1.60223652E12, 10.283333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223652E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.60223646E12, "maxY": 10.283333333333333, "series": [{"data": [[1.60223646E12, 1.9666666666666666], [1.60223652E12, 10.283333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223652E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.60223646E12, "maxY": 10.283333333333333, "series": [{"data": [[1.60223646E12, 1.9666666666666666], [1.60223652E12, 10.283333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223652E12, "title": "Total Transactions Per Second"}},
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

