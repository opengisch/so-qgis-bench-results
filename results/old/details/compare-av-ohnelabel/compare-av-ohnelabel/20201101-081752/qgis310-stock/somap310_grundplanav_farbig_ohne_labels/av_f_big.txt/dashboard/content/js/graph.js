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
        data: {"result": {"minY": 138.0, "minX": 0.0, "maxY": 3211.0, "series": [{"data": [[0.0, 138.0], [0.1, 138.0], [0.2, 141.0], [0.3, 148.0], [0.4, 148.0], [0.5, 149.0], [0.6, 152.0], [0.7, 153.0], [0.8, 153.0], [0.9, 155.0], [1.0, 158.0], [1.1, 164.0], [1.2, 164.0], [1.3, 167.0], [1.4, 172.0], [1.5, 172.0], [1.6, 172.0], [1.7, 173.0], [1.8, 176.0], [1.9, 176.0], [2.0, 203.0], [2.1, 207.0], [2.2, 210.0], [2.3, 210.0], [2.4, 214.0], [2.5, 219.0], [2.6, 220.0], [2.7, 220.0], [2.8, 225.0], [2.9, 225.0], [3.0, 227.0], [3.1, 227.0], [3.2, 233.0], [3.3, 235.0], [3.4, 235.0], [3.5, 239.0], [3.6, 239.0], [3.7, 240.0], [3.8, 240.0], [3.9, 240.0], [4.0, 243.0], [4.1, 244.0], [4.2, 244.0], [4.3, 244.0], [4.4, 245.0], [4.5, 245.0], [4.6, 245.0], [4.7, 245.0], [4.8, 246.0], [4.9, 247.0], [5.0, 247.0], [5.1, 248.0], [5.2, 249.0], [5.3, 249.0], [5.4, 253.0], [5.5, 253.0], [5.6, 259.0], [5.7, 259.0], [5.8, 264.0], [5.9, 268.0], [6.0, 268.0], [6.1, 268.0], [6.2, 272.0], [6.3, 273.0], [6.4, 275.0], [6.5, 275.0], [6.6, 277.0], [6.7, 278.0], [6.8, 278.0], [6.9, 278.0], [7.0, 278.0], [7.1, 279.0], [7.2, 279.0], [7.3, 286.0], [7.4, 288.0], [7.5, 289.0], [7.6, 289.0], [7.7, 289.0], [7.8, 299.0], [7.9, 304.0], [8.0, 304.0], [8.1, 313.0], [8.2, 314.0], [8.3, 323.0], [8.4, 323.0], [8.5, 325.0], [8.6, 325.0], [8.7, 325.0], [8.8, 328.0], [8.9, 333.0], [9.0, 333.0], [9.1, 333.0], [9.2, 335.0], [9.3, 336.0], [9.4, 337.0], [9.5, 337.0], [9.6, 337.0], [9.7, 339.0], [9.8, 341.0], [9.9, 341.0], [10.0, 342.0], [10.1, 343.0], [10.2, 343.0], [10.3, 346.0], [10.4, 348.0], [10.5, 352.0], [10.6, 352.0], [10.7, 354.0], [10.8, 357.0], [10.9, 361.0], [11.0, 361.0], [11.1, 364.0], [11.2, 372.0], [11.3, 372.0], [11.4, 372.0], [11.5, 378.0], [11.6, 378.0], [11.7, 378.0], [11.8, 379.0], [11.9, 385.0], [12.0, 387.0], [12.1, 387.0], [12.2, 389.0], [12.3, 390.0], [12.4, 392.0], [12.5, 392.0], [12.6, 395.0], [12.7, 400.0], [12.8, 401.0], [12.9, 401.0], [13.0, 405.0], [13.1, 408.0], [13.2, 414.0], [13.3, 414.0], [13.4, 415.0], [13.5, 421.0], [13.6, 421.0], [13.7, 422.0], [13.8, 426.0], [13.9, 428.0], [14.0, 428.0], [14.1, 429.0], [14.2, 434.0], [14.3, 435.0], [14.4, 435.0], [14.5, 445.0], [14.6, 445.0], [14.7, 448.0], [14.8, 448.0], [14.9, 450.0], [15.0, 450.0], [15.1, 450.0], [15.2, 454.0], [15.3, 455.0], [15.4, 457.0], [15.5, 457.0], [15.6, 461.0], [15.7, 462.0], [15.8, 463.0], [15.9, 463.0], [16.0, 464.0], [16.1, 470.0], [16.2, 471.0], [16.3, 471.0], [16.4, 472.0], [16.5, 474.0], [16.6, 475.0], [16.7, 475.0], [16.8, 477.0], [16.9, 479.0], [17.0, 479.0], [17.1, 479.0], [17.2, 479.0], [17.3, 480.0], [17.4, 480.0], [17.5, 480.0], [17.6, 483.0], [17.7, 484.0], [17.8, 484.0], [17.9, 484.0], [18.0, 487.0], [18.1, 489.0], [18.2, 489.0], [18.3, 489.0], [18.4, 490.0], [18.5, 490.0], [18.6, 490.0], [18.7, 491.0], [18.8, 491.0], [18.9, 491.0], [19.0, 494.0], [19.1, 495.0], [19.2, 495.0], [19.3, 495.0], [19.4, 495.0], [19.5, 496.0], [19.6, 498.0], [19.7, 498.0], [19.8, 498.0], [19.9, 499.0], [20.0, 505.0], [20.1, 505.0], [20.2, 505.0], [20.3, 506.0], [20.4, 506.0], [20.5, 506.0], [20.6, 507.0], [20.7, 508.0], [20.8, 508.0], [20.9, 508.0], [21.0, 509.0], [21.1, 510.0], [21.2, 510.0], [21.3, 510.0], [21.4, 511.0], [21.5, 512.0], [21.6, 512.0], [21.7, 513.0], [21.8, 513.0], [21.9, 513.0], [22.0, 514.0], [22.1, 515.0], [22.2, 516.0], [22.3, 516.0], [22.4, 516.0], [22.5, 517.0], [22.6, 517.0], [22.7, 517.0], [22.8, 519.0], [22.9, 519.0], [23.0, 519.0], [23.1, 519.0], [23.2, 519.0], [23.3, 520.0], [23.4, 520.0], [23.5, 520.0], [23.6, 520.0], [23.7, 521.0], [23.8, 521.0], [23.9, 522.0], [24.0, 523.0], [24.1, 524.0], [24.2, 524.0], [24.3, 524.0], [24.4, 525.0], [24.5, 527.0], [24.6, 527.0], [24.7, 527.0], [24.8, 527.0], [24.9, 528.0], [25.0, 528.0], [25.1, 528.0], [25.2, 529.0], [25.3, 529.0], [25.4, 529.0], [25.5, 530.0], [25.6, 530.0], [25.7, 530.0], [25.8, 530.0], [25.9, 530.0], [26.0, 531.0], [26.1, 531.0], [26.2, 532.0], [26.3, 532.0], [26.4, 533.0], [26.5, 533.0], [26.6, 533.0], [26.7, 533.0], [26.8, 533.0], [26.9, 533.0], [27.0, 534.0], [27.1, 536.0], [27.2, 536.0], [27.3, 536.0], [27.4, 537.0], [27.5, 537.0], [27.6, 537.0], [27.7, 538.0], [27.8, 541.0], [27.9, 541.0], [28.0, 541.0], [28.1, 541.0], [28.2, 542.0], [28.3, 542.0], [28.4, 542.0], [28.5, 542.0], [28.6, 544.0], [28.7, 544.0], [28.8, 545.0], [28.9, 545.0], [29.0, 545.0], [29.1, 545.0], [29.2, 547.0], [29.3, 547.0], [29.4, 548.0], [29.5, 548.0], [29.6, 549.0], [29.7, 550.0], [29.8, 550.0], [29.9, 550.0], [30.0, 550.0], [30.1, 550.0], [30.2, 550.0], [30.3, 551.0], [30.4, 552.0], [30.5, 552.0], [30.6, 552.0], [30.7, 553.0], [30.8, 554.0], [30.9, 554.0], [31.0, 554.0], [31.1, 555.0], [31.2, 555.0], [31.3, 555.0], [31.4, 555.0], [31.5, 556.0], [31.6, 556.0], [31.7, 556.0], [31.8, 557.0], [31.9, 560.0], [32.0, 563.0], [32.1, 563.0], [32.2, 563.0], [32.3, 563.0], [32.4, 563.0], [32.5, 563.0], [32.6, 564.0], [32.7, 564.0], [32.8, 565.0], [32.9, 565.0], [33.0, 565.0], [33.1, 565.0], [33.2, 566.0], [33.3, 566.0], [33.4, 568.0], [33.5, 570.0], [33.6, 570.0], [33.7, 572.0], [33.8, 573.0], [33.9, 576.0], [34.0, 576.0], [34.1, 576.0], [34.2, 579.0], [34.3, 579.0], [34.4, 579.0], [34.5, 579.0], [34.6, 581.0], [34.7, 583.0], [34.8, 583.0], [34.9, 583.0], [35.0, 584.0], [35.1, 584.0], [35.2, 585.0], [35.3, 585.0], [35.4, 586.0], [35.5, 586.0], [35.6, 590.0], [35.7, 592.0], [35.8, 592.0], [35.9, 592.0], [36.0, 593.0], [36.1, 594.0], [36.2, 594.0], [36.3, 594.0], [36.4, 594.0], [36.5, 595.0], [36.6, 595.0], [36.7, 595.0], [36.8, 596.0], [36.9, 596.0], [37.0, 596.0], [37.1, 596.0], [37.2, 600.0], [37.3, 601.0], [37.4, 601.0], [37.5, 602.0], [37.6, 603.0], [37.7, 604.0], [37.8, 604.0], [37.9, 604.0], [38.0, 604.0], [38.1, 606.0], [38.2, 606.0], [38.3, 610.0], [38.4, 611.0], [38.5, 611.0], [38.6, 617.0], [38.7, 617.0], [38.8, 622.0], [38.9, 622.0], [39.0, 629.0], [39.1, 631.0], [39.2, 632.0], [39.3, 632.0], [39.4, 633.0], [39.5, 634.0], [39.6, 635.0], [39.7, 635.0], [39.8, 635.0], [39.9, 637.0], [40.0, 638.0], [40.1, 638.0], [40.2, 639.0], [40.3, 642.0], [40.4, 642.0], [40.5, 643.0], [40.6, 645.0], [40.7, 647.0], [40.8, 647.0], [40.9, 648.0], [41.0, 649.0], [41.1, 650.0], [41.2, 650.0], [41.3, 653.0], [41.4, 654.0], [41.5, 657.0], [41.6, 657.0], [41.7, 658.0], [41.8, 659.0], [41.9, 659.0], [42.0, 662.0], [42.1, 663.0], [42.2, 666.0], [42.3, 666.0], [42.4, 670.0], [42.5, 673.0], [42.6, 674.0], [42.7, 674.0], [42.8, 674.0], [42.9, 675.0], [43.0, 678.0], [43.1, 678.0], [43.2, 679.0], [43.3, 679.0], [43.4, 679.0], [43.5, 683.0], [43.6, 686.0], [43.7, 686.0], [43.8, 686.0], [43.9, 688.0], [44.0, 690.0], [44.1, 690.0], [44.2, 690.0], [44.3, 691.0], [44.4, 693.0], [44.5, 696.0], [44.6, 696.0], [44.7, 700.0], [44.8, 700.0], [44.9, 704.0], [45.0, 704.0], [45.1, 714.0], [45.2, 716.0], [45.3, 716.0], [45.4, 718.0], [45.5, 723.0], [45.6, 725.0], [45.7, 725.0], [45.8, 727.0], [45.9, 731.0], [46.0, 734.0], [46.1, 734.0], [46.2, 738.0], [46.3, 741.0], [46.4, 746.0], [46.5, 746.0], [46.6, 757.0], [46.7, 760.0], [46.8, 760.0], [46.9, 760.0], [47.0, 761.0], [47.1, 762.0], [47.2, 762.0], [47.3, 764.0], [47.4, 766.0], [47.5, 766.0], [47.6, 766.0], [47.7, 769.0], [47.8, 777.0], [47.9, 777.0], [48.0, 777.0], [48.1, 780.0], [48.2, 781.0], [48.3, 785.0], [48.4, 785.0], [48.5, 794.0], [48.6, 796.0], [48.7, 796.0], [48.8, 797.0], [48.9, 801.0], [49.0, 810.0], [49.1, 810.0], [49.2, 810.0], [49.3, 810.0], [49.4, 815.0], [49.5, 815.0], [49.6, 815.0], [49.7, 816.0], [49.8, 822.0], [49.9, 822.0], [50.0, 823.0], [50.1, 823.0], [50.2, 823.0], [50.3, 823.0], [50.4, 828.0], [50.5, 828.0], [50.6, 828.0], [50.7, 828.0], [50.8, 829.0], [50.9, 832.0], [51.0, 832.0], [51.1, 835.0], [51.2, 839.0], [51.3, 842.0], [51.4, 842.0], [51.5, 842.0], [51.6, 842.0], [51.7, 842.0], [51.8, 847.0], [51.9, 847.0], [52.0, 848.0], [52.1, 848.0], [52.2, 848.0], [52.3, 849.0], [52.4, 860.0], [52.5, 860.0], [52.6, 874.0], [52.7, 878.0], [52.8, 880.0], [52.9, 880.0], [53.0, 880.0], [53.1, 881.0], [53.2, 883.0], [53.3, 883.0], [53.4, 886.0], [53.5, 888.0], [53.6, 888.0], [53.7, 889.0], [53.8, 889.0], [53.9, 893.0], [54.0, 893.0], [54.1, 904.0], [54.2, 905.0], [54.3, 912.0], [54.4, 912.0], [54.5, 917.0], [54.6, 917.0], [54.7, 924.0], [54.8, 924.0], [54.9, 929.0], [55.0, 935.0], [55.1, 935.0], [55.2, 937.0], [55.3, 937.0], [55.4, 941.0], [55.5, 941.0], [55.6, 942.0], [55.7, 943.0], [55.8, 948.0], [55.9, 948.0], [56.0, 950.0], [56.1, 953.0], [56.2, 955.0], [56.3, 955.0], [56.4, 958.0], [56.5, 961.0], [56.6, 970.0], [56.7, 970.0], [56.8, 979.0], [56.9, 981.0], [57.0, 981.0], [57.1, 983.0], [57.2, 983.0], [57.3, 987.0], [57.4, 987.0], [57.5, 988.0], [57.6, 989.0], [57.7, 990.0], [57.8, 990.0], [57.9, 993.0], [58.0, 998.0], [58.1, 998.0], [58.2, 998.0], [58.3, 1001.0], [58.4, 1004.0], [58.5, 1004.0], [58.6, 1004.0], [58.7, 1005.0], [58.8, 1006.0], [58.9, 1006.0], [59.0, 1007.0], [59.1, 1009.0], [59.2, 1010.0], [59.3, 1010.0], [59.4, 1011.0], [59.5, 1011.0], [59.6, 1012.0], [59.7, 1012.0], [59.8, 1012.0], [59.9, 1013.0], [60.0, 1013.0], [60.1, 1013.0], [60.2, 1014.0], [60.3, 1015.0], [60.4, 1015.0], [60.5, 1016.0], [60.6, 1017.0], [60.7, 1020.0], [60.8, 1020.0], [60.9, 1022.0], [61.0, 1022.0], [61.1, 1023.0], [61.2, 1023.0], [61.3, 1023.0], [61.4, 1025.0], [61.5, 1025.0], [61.6, 1025.0], [61.7, 1025.0], [61.8, 1026.0], [61.9, 1026.0], [62.0, 1026.0], [62.1, 1026.0], [62.2, 1027.0], [62.3, 1027.0], [62.4, 1027.0], [62.5, 1028.0], [62.6, 1028.0], [62.7, 1028.0], [62.8, 1029.0], [62.9, 1029.0], [63.0, 1029.0], [63.1, 1029.0], [63.2, 1030.0], [63.3, 1031.0], [63.4, 1031.0], [63.5, 1031.0], [63.6, 1032.0], [63.7, 1033.0], [63.8, 1033.0], [63.9, 1033.0], [64.0, 1033.0], [64.1, 1034.0], [64.2, 1034.0], [64.3, 1034.0], [64.4, 1036.0], [64.5, 1036.0], [64.6, 1036.0], [64.7, 1036.0], [64.8, 1037.0], [64.9, 1038.0], [65.0, 1038.0], [65.1, 1039.0], [65.2, 1040.0], [65.3, 1040.0], [65.4, 1040.0], [65.5, 1040.0], [65.6, 1041.0], [65.7, 1041.0], [65.8, 1043.0], [65.9, 1043.0], [66.0, 1043.0], [66.1, 1043.0], [66.2, 1044.0], [66.3, 1046.0], [66.4, 1047.0], [66.5, 1047.0], [66.6, 1049.0], [66.7, 1049.0], [66.8, 1049.0], [66.9, 1050.0], [67.0, 1050.0], [67.1, 1050.0], [67.2, 1050.0], [67.3, 1052.0], [67.4, 1053.0], [67.5, 1054.0], [67.6, 1054.0], [67.7, 1055.0], [67.8, 1055.0], [67.9, 1056.0], [68.0, 1056.0], [68.1, 1056.0], [68.2, 1058.0], [68.3, 1059.0], [68.4, 1059.0], [68.5, 1060.0], [68.6, 1060.0], [68.7, 1060.0], [68.8, 1061.0], [68.9, 1061.0], [69.0, 1061.0], [69.1, 1061.0], [69.2, 1065.0], [69.3, 1066.0], [69.4, 1066.0], [69.5, 1066.0], [69.6, 1067.0], [69.7, 1068.0], [69.8, 1068.0], [69.9, 1068.0], [70.0, 1068.0], [70.1, 1070.0], [70.2, 1070.0], [70.3, 1071.0], [70.4, 1073.0], [70.5, 1074.0], [70.6, 1074.0], [70.7, 1076.0], [70.8, 1077.0], [70.9, 1077.0], [71.0, 1077.0], [71.1, 1077.0], [71.2, 1078.0], [71.3, 1079.0], [71.4, 1079.0], [71.5, 1079.0], [71.6, 1080.0], [71.7, 1080.0], [71.8, 1081.0], [71.9, 1081.0], [72.0, 1081.0], [72.1, 1081.0], [72.2, 1081.0], [72.3, 1082.0], [72.4, 1082.0], [72.5, 1082.0], [72.6, 1083.0], [72.7, 1088.0], [72.8, 1089.0], [72.9, 1089.0], [73.0, 1090.0], [73.1, 1090.0], [73.2, 1091.0], [73.3, 1091.0], [73.4, 1091.0], [73.5, 1095.0], [73.6, 1095.0], [73.7, 1095.0], [73.8, 1096.0], [73.9, 1096.0], [74.0, 1096.0], [74.1, 1097.0], [74.2, 1097.0], [74.3, 1098.0], [74.4, 1098.0], [74.5, 1099.0], [74.6, 1099.0], [74.7, 1099.0], [74.8, 1099.0], [74.9, 1099.0], [75.0, 1099.0], [75.1, 1099.0], [75.2, 1099.0], [75.3, 1100.0], [75.4, 1101.0], [75.5, 1101.0], [75.6, 1101.0], [75.7, 1102.0], [75.8, 1102.0], [75.9, 1102.0], [76.0, 1103.0], [76.1, 1103.0], [76.2, 1103.0], [76.3, 1103.0], [76.4, 1104.0], [76.5, 1104.0], [76.6, 1104.0], [76.7, 1104.0], [76.8, 1104.0], [76.9, 1107.0], [77.0, 1107.0], [77.1, 1107.0], [77.2, 1108.0], [77.3, 1111.0], [77.4, 1111.0], [77.5, 1113.0], [77.6, 1113.0], [77.7, 1113.0], [77.8, 1113.0], [77.9, 1114.0], [78.0, 1116.0], [78.1, 1118.0], [78.2, 1118.0], [78.3, 1118.0], [78.4, 1120.0], [78.5, 1120.0], [78.6, 1120.0], [78.7, 1122.0], [78.8, 1124.0], [78.9, 1124.0], [79.0, 1125.0], [79.1, 1125.0], [79.2, 1129.0], [79.3, 1129.0], [79.4, 1131.0], [79.5, 1131.0], [79.6, 1131.0], [79.7, 1131.0], [79.8, 1133.0], [79.9, 1133.0], [80.0, 1135.0], [80.1, 1135.0], [80.2, 1135.0], [80.3, 1136.0], [80.4, 1136.0], [80.5, 1138.0], [80.6, 1139.0], [80.7, 1140.0], [80.8, 1140.0], [80.9, 1140.0], [81.0, 1140.0], [81.1, 1141.0], [81.2, 1141.0], [81.3, 1142.0], [81.4, 1142.0], [81.5, 1143.0], [81.6, 1143.0], [81.7, 1143.0], [81.8, 1147.0], [81.9, 1147.0], [82.0, 1147.0], [82.1, 1150.0], [82.2, 1150.0], [82.3, 1150.0], [82.4, 1151.0], [82.5, 1152.0], [82.6, 1153.0], [82.7, 1153.0], [82.8, 1155.0], [82.9, 1155.0], [83.0, 1155.0], [83.1, 1155.0], [83.2, 1156.0], [83.3, 1160.0], [83.4, 1160.0], [83.5, 1160.0], [83.6, 1161.0], [83.7, 1164.0], [83.8, 1164.0], [83.9, 1164.0], [84.0, 1164.0], [84.1, 1164.0], [84.2, 1164.0], [84.3, 1165.0], [84.4, 1168.0], [84.5, 1169.0], [84.6, 1169.0], [84.7, 1169.0], [84.8, 1170.0], [84.9, 1174.0], [85.0, 1174.0], [85.1, 1175.0], [85.2, 1176.0], [85.3, 1176.0], [85.4, 1176.0], [85.5, 1177.0], [85.6, 1179.0], [85.7, 1179.0], [85.8, 1181.0], [85.9, 1183.0], [86.0, 1184.0], [86.1, 1184.0], [86.2, 1184.0], [86.3, 1186.0], [86.4, 1187.0], [86.5, 1187.0], [86.6, 1188.0], [86.7, 1192.0], [86.8, 1192.0], [86.9, 1193.0], [87.0, 1193.0], [87.1, 1194.0], [87.2, 1194.0], [87.3, 1196.0], [87.4, 1197.0], [87.5, 1199.0], [87.6, 1199.0], [87.7, 1199.0], [87.8, 1203.0], [87.9, 1206.0], [88.0, 1206.0], [88.1, 1206.0], [88.2, 1206.0], [88.3, 1212.0], [88.4, 1212.0], [88.5, 1212.0], [88.6, 1225.0], [88.7, 1225.0], [88.8, 1226.0], [88.9, 1229.0], [89.0, 1233.0], [89.1, 1233.0], [89.2, 1233.0], [89.3, 1235.0], [89.4, 1239.0], [89.5, 1239.0], [89.6, 1241.0], [89.7, 1244.0], [89.8, 1248.0], [89.9, 1248.0], [90.0, 1250.0], [90.1, 1253.0], [90.2, 1253.0], [90.3, 1254.0], [90.4, 1257.0], [90.5, 1258.0], [90.6, 1258.0], [90.7, 1262.0], [90.8, 1262.0], [90.9, 1266.0], [91.0, 1266.0], [91.1, 1269.0], [91.2, 1269.0], [91.3, 1270.0], [91.4, 1270.0], [91.5, 1271.0], [91.6, 1272.0], [91.7, 1272.0], [91.8, 1279.0], [91.9, 1282.0], [92.0, 1282.0], [92.1, 1282.0], [92.2, 1286.0], [92.3, 1289.0], [92.4, 1289.0], [92.5, 1289.0], [92.6, 1291.0], [92.7, 1293.0], [92.8, 1299.0], [92.9, 1299.0], [93.0, 1303.0], [93.1, 1308.0], [93.2, 1309.0], [93.3, 1309.0], [93.4, 1324.0], [93.5, 1324.0], [93.6, 1324.0], [93.7, 1329.0], [93.8, 1329.0], [93.9, 1336.0], [94.0, 1336.0], [94.1, 1341.0], [94.2, 1342.0], [94.3, 1343.0], [94.4, 1343.0], [94.5, 1348.0], [94.6, 1355.0], [94.7, 1356.0], [94.8, 1356.0], [94.9, 1363.0], [95.0, 1364.0], [95.1, 1364.0], [95.2, 1385.0], [95.3, 1385.0], [95.4, 1391.0], [95.5, 1391.0], [95.6, 1407.0], [95.7, 1413.0], [95.8, 1427.0], [95.9, 1427.0], [96.0, 1442.0], [96.1, 1443.0], [96.2, 1447.0], [96.3, 1447.0], [96.4, 1450.0], [96.5, 1454.0], [96.6, 1471.0], [96.7, 1471.0], [96.8, 1471.0], [96.9, 1480.0], [97.0, 1480.0], [97.1, 1483.0], [97.2, 1496.0], [97.3, 1540.0], [97.4, 1540.0], [97.5, 1545.0], [97.6, 1580.0], [97.7, 1591.0], [97.8, 1591.0], [97.9, 1747.0], [98.0, 1754.0], [98.1, 1838.0], [98.2, 1838.0], [98.3, 1848.0], [98.4, 1848.0], [98.5, 1848.0], [98.6, 1939.0], [98.7, 2044.0], [98.8, 2121.0], [98.9, 2121.0], [99.0, 2232.0], [99.1, 2302.0], [99.2, 2381.0], [99.3, 2381.0], [99.4, 2552.0], [99.5, 2713.0], [99.6, 2944.0], [99.7, 2944.0], [99.8, 2969.0], [99.9, 3211.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 126.0, "series": [{"data": [[600.0, 55.0], [700.0, 31.0], [800.0, 38.0], [900.0, 31.0], [1000.0, 125.0], [1100.0, 92.0], [1200.0, 38.0], [1300.0, 19.0], [1400.0, 13.0], [1500.0, 4.0], [100.0, 14.0], [1700.0, 2.0], [1800.0, 3.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2200.0, 1.0], [2300.0, 2.0], [2500.0, 1.0], [2700.0, 1.0], [2900.0, 2.0], [3200.0, 1.0], [200.0, 44.0], [300.0, 35.0], [400.0, 54.0], [500.0, 126.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 568.0, "series": [{"data": [[0.0, 147.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 568.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 20.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.861635220125786, "minX": 1.60421874E12, "maxY": 10.0, "series": [{"data": [[1.6042188E12, 9.861635220125786], [1.60421874E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042188E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 227.0, "minX": 1.0, "maxY": 1048.0, "series": [{"data": [[4.0, 521.0], [2.0, 1013.0], [1.0, 981.0], [9.0, 1048.0], [10.0, 832.994490358128], [5.0, 1012.0], [6.0, 227.0], [3.0, 457.0], [7.0, 435.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 831.9673469387769]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2455.983333333333, "minX": 1.60421874E12, "maxY": 1027346.3333333334, "series": [{"data": [[1.6042188E12, 709584.7833333333], [1.60421874E12, 1027346.3333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6042188E12, 2455.983333333333], [1.60421874E12, 3214.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042188E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 817.8441247002403, "minX": 1.60421874E12, "maxY": 850.4874213836479, "series": [{"data": [[1.6042188E12, 850.4874213836479], [1.60421874E12, 817.8441247002403]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042188E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 816.6378896882487, "minX": 1.60421874E12, "maxY": 849.4402515723266, "series": [{"data": [[1.6042188E12, 849.4402515723266], [1.60421874E12, 816.6378896882487]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042188E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03144654088050315, "minX": 1.60421874E12, "maxY": 0.38369304556354894, "series": [{"data": [[1.6042188E12, 0.03144654088050315], [1.60421874E12, 0.38369304556354894]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042188E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 138.0, "minX": 1.60421874E12, "maxY": 3211.0, "series": [{"data": [[1.6042188E12, 2381.0], [1.60421874E12, 3211.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6042188E12, 213.0969994676113], [1.60421874E12, 148.76199990034104]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6042188E12, 216.05530039548873], [1.60421874E12, 149.41460011959077]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6042188E12, 214.39649950563907], [1.60421874E12, 148.97099995017052]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6042188E12, 203.0], [1.60421874E12, 138.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6042188E12, 917.0], [1.60421874E12, 766.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042188E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 450.0, "minX": 2.0, "maxY": 1287.5, "series": [{"data": [[2.0, 687.0], [8.0, 1069.0], [9.0, 1101.0], [10.0, 1041.5], [11.0, 1030.0], [12.0, 989.5], [13.0, 678.0], [14.0, 626.0], [15.0, 678.0], [4.0, 491.0], [16.0, 637.0], [17.0, 584.5], [18.0, 492.5], [19.0, 513.0], [21.0, 484.0], [25.0, 450.0], [7.0, 1287.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 450.0, "minX": 2.0, "maxY": 1286.5, "series": [{"data": [[2.0, 684.0], [8.0, 1066.5], [9.0, 1099.0], [10.0, 1040.5], [11.0, 1029.5], [12.0, 987.5], [13.0, 677.5], [14.0, 625.0], [15.0, 677.0], [4.0, 490.0], [16.0, 636.5], [17.0, 584.5], [18.0, 492.5], [19.0, 512.0], [21.0, 483.0], [25.0, 450.0], [7.0, 1286.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.133333333333334, "minX": 1.60421874E12, "maxY": 7.116666666666666, "series": [{"data": [[1.6042188E12, 5.133333333333334], [1.60421874E12, 7.116666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042188E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.3, "minX": 1.60421874E12, "maxY": 6.95, "series": [{"data": [[1.6042188E12, 5.3], [1.60421874E12, 6.95]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042188E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.3, "minX": 1.60421874E12, "maxY": 6.95, "series": [{"data": [[1.6042188E12, 5.3], [1.60421874E12, 6.95]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042188E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.3, "minX": 1.60421874E12, "maxY": 6.95, "series": [{"data": [[1.6042188E12, 5.3], [1.60421874E12, 6.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042188E12, "title": "Total Transactions Per Second"}},
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

