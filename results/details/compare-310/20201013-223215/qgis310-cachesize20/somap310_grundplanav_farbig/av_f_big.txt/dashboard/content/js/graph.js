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
        data: {"result": {"minY": 176.0, "minX": 0.0, "maxY": 3761.0, "series": [{"data": [[0.0, 176.0], [0.1, 176.0], [0.2, 177.0], [0.3, 199.0], [0.4, 199.0], [0.5, 200.0], [0.6, 200.0], [0.7, 201.0], [0.8, 201.0], [0.9, 202.0], [1.0, 204.0], [1.1, 206.0], [1.2, 206.0], [1.3, 206.0], [1.4, 208.0], [1.5, 210.0], [1.6, 210.0], [1.7, 213.0], [1.8, 215.0], [1.9, 215.0], [2.0, 218.0], [2.1, 219.0], [2.2, 221.0], [2.3, 221.0], [2.4, 222.0], [2.5, 228.0], [2.6, 238.0], [2.7, 238.0], [2.8, 244.0], [2.9, 244.0], [3.0, 246.0], [3.1, 246.0], [3.2, 249.0], [3.3, 253.0], [3.4, 253.0], [3.5, 258.0], [3.6, 259.0], [3.7, 260.0], [3.8, 260.0], [3.9, 261.0], [4.0, 262.0], [4.1, 266.0], [4.2, 266.0], [4.3, 268.0], [4.4, 268.0], [4.5, 271.0], [4.6, 271.0], [4.7, 271.0], [4.8, 271.0], [4.9, 275.0], [5.0, 275.0], [5.1, 275.0], [5.2, 279.0], [5.3, 279.0], [5.4, 283.0], [5.5, 283.0], [5.6, 284.0], [5.7, 284.0], [5.8, 285.0], [5.9, 291.0], [6.0, 292.0], [6.1, 292.0], [6.2, 293.0], [6.3, 294.0], [6.4, 294.0], [6.5, 294.0], [6.6, 296.0], [6.7, 298.0], [6.8, 298.0], [6.9, 301.0], [7.0, 304.0], [7.1, 304.0], [7.2, 304.0], [7.3, 305.0], [7.4, 307.0], [7.5, 309.0], [7.6, 309.0], [7.7, 310.0], [7.8, 314.0], [7.9, 322.0], [8.0, 322.0], [8.1, 325.0], [8.2, 326.0], [8.3, 328.0], [8.4, 328.0], [8.5, 331.0], [8.6, 332.0], [8.7, 332.0], [8.8, 333.0], [8.9, 340.0], [9.0, 343.0], [9.1, 343.0], [9.2, 343.0], [9.3, 345.0], [9.4, 352.0], [9.5, 352.0], [9.6, 352.0], [9.7, 354.0], [9.8, 354.0], [9.9, 354.0], [10.0, 354.0], [10.1, 356.0], [10.2, 356.0], [10.3, 362.0], [10.4, 362.0], [10.5, 365.0], [10.6, 365.0], [10.7, 366.0], [10.8, 369.0], [10.9, 369.0], [11.0, 369.0], [11.1, 370.0], [11.2, 371.0], [11.3, 371.0], [11.4, 371.0], [11.5, 374.0], [11.6, 375.0], [11.7, 375.0], [11.8, 376.0], [11.9, 377.0], [12.0, 382.0], [12.1, 382.0], [12.2, 386.0], [12.3, 391.0], [12.4, 393.0], [12.5, 393.0], [12.6, 396.0], [12.7, 398.0], [12.8, 401.0], [12.9, 401.0], [13.0, 404.0], [13.1, 405.0], [13.2, 406.0], [13.3, 406.0], [13.4, 406.0], [13.5, 409.0], [13.6, 409.0], [13.7, 410.0], [13.8, 410.0], [13.9, 410.0], [14.0, 410.0], [14.1, 410.0], [14.2, 411.0], [14.3, 412.0], [14.4, 412.0], [14.5, 418.0], [14.6, 420.0], [14.7, 422.0], [14.8, 422.0], [14.9, 424.0], [15.0, 425.0], [15.1, 425.0], [15.2, 426.0], [15.3, 430.0], [15.4, 437.0], [15.5, 437.0], [15.6, 439.0], [15.7, 440.0], [15.8, 447.0], [15.9, 447.0], [16.0, 448.0], [16.1, 448.0], [16.2, 450.0], [16.3, 450.0], [16.4, 450.0], [16.5, 452.0], [16.6, 453.0], [16.7, 453.0], [16.8, 455.0], [16.9, 458.0], [17.0, 458.0], [17.1, 460.0], [17.2, 463.0], [17.3, 463.0], [17.4, 463.0], [17.5, 464.0], [17.6, 464.0], [17.7, 465.0], [17.8, 465.0], [17.9, 470.0], [18.0, 474.0], [18.1, 479.0], [18.2, 479.0], [18.3, 479.0], [18.4, 480.0], [18.5, 480.0], [18.6, 480.0], [18.7, 486.0], [18.8, 488.0], [18.9, 488.0], [19.0, 489.0], [19.1, 492.0], [19.2, 495.0], [19.3, 495.0], [19.4, 495.0], [19.5, 498.0], [19.6, 501.0], [19.7, 501.0], [19.8, 503.0], [19.9, 505.0], [20.0, 506.0], [20.1, 506.0], [20.2, 508.0], [20.3, 509.0], [20.4, 509.0], [20.5, 513.0], [20.6, 514.0], [20.7, 515.0], [20.8, 515.0], [20.9, 516.0], [21.0, 516.0], [21.1, 518.0], [21.2, 518.0], [21.3, 520.0], [21.4, 521.0], [21.5, 525.0], [21.6, 525.0], [21.7, 526.0], [21.8, 527.0], [21.9, 527.0], [22.0, 532.0], [22.1, 533.0], [22.2, 535.0], [22.3, 535.0], [22.4, 537.0], [22.5, 538.0], [22.6, 539.0], [22.7, 539.0], [22.8, 540.0], [22.9, 543.0], [23.0, 543.0], [23.1, 543.0], [23.2, 543.0], [23.3, 544.0], [23.4, 544.0], [23.5, 544.0], [23.6, 545.0], [23.7, 547.0], [23.8, 547.0], [23.9, 547.0], [24.0, 549.0], [24.1, 551.0], [24.2, 551.0], [24.3, 551.0], [24.4, 552.0], [24.5, 552.0], [24.6, 552.0], [24.7, 554.0], [24.8, 554.0], [24.9, 556.0], [25.0, 556.0], [25.1, 557.0], [25.2, 557.0], [25.3, 557.0], [25.4, 557.0], [25.5, 558.0], [25.6, 559.0], [25.7, 559.0], [25.8, 560.0], [25.9, 561.0], [26.0, 561.0], [26.1, 561.0], [26.2, 561.0], [26.3, 562.0], [26.4, 563.0], [26.5, 563.0], [26.6, 564.0], [26.7, 565.0], [26.8, 565.0], [26.9, 565.0], [27.0, 565.0], [27.1, 565.0], [27.2, 565.0], [27.3, 565.0], [27.4, 566.0], [27.5, 568.0], [27.6, 568.0], [27.7, 569.0], [27.8, 570.0], [27.9, 570.0], [28.0, 570.0], [28.1, 570.0], [28.2, 571.0], [28.3, 575.0], [28.4, 575.0], [28.5, 576.0], [28.6, 577.0], [28.7, 577.0], [28.8, 577.0], [28.9, 579.0], [29.0, 580.0], [29.1, 580.0], [29.2, 580.0], [29.3, 580.0], [29.4, 580.0], [29.5, 580.0], [29.6, 584.0], [29.7, 585.0], [29.8, 588.0], [29.9, 588.0], [30.0, 589.0], [30.1, 590.0], [30.2, 590.0], [30.3, 592.0], [30.4, 592.0], [30.5, 594.0], [30.6, 594.0], [30.7, 594.0], [30.8, 595.0], [30.9, 597.0], [31.0, 597.0], [31.1, 598.0], [31.2, 598.0], [31.3, 599.0], [31.4, 599.0], [31.5, 600.0], [31.6, 601.0], [31.7, 601.0], [31.8, 601.0], [31.9, 605.0], [32.0, 606.0], [32.1, 606.0], [32.2, 607.0], [32.3, 607.0], [32.4, 609.0], [32.5, 609.0], [32.6, 609.0], [32.7, 610.0], [32.8, 611.0], [32.9, 611.0], [33.0, 614.0], [33.1, 614.0], [33.2, 614.0], [33.3, 614.0], [33.4, 614.0], [33.5, 615.0], [33.6, 615.0], [33.7, 615.0], [33.8, 616.0], [33.9, 618.0], [34.0, 618.0], [34.1, 618.0], [34.2, 619.0], [34.3, 619.0], [34.4, 619.0], [34.5, 621.0], [34.6, 623.0], [34.7, 625.0], [34.8, 625.0], [34.9, 626.0], [35.0, 629.0], [35.1, 629.0], [35.2, 629.0], [35.3, 630.0], [35.4, 630.0], [35.5, 630.0], [35.6, 630.0], [35.7, 631.0], [35.8, 632.0], [35.9, 632.0], [36.0, 633.0], [36.1, 635.0], [36.2, 636.0], [36.3, 636.0], [36.4, 640.0], [36.5, 643.0], [36.6, 645.0], [36.7, 645.0], [36.8, 647.0], [36.9, 649.0], [37.0, 649.0], [37.1, 650.0], [37.2, 655.0], [37.3, 656.0], [37.4, 656.0], [37.5, 656.0], [37.6, 657.0], [37.7, 660.0], [37.8, 660.0], [37.9, 660.0], [38.0, 660.0], [38.1, 664.0], [38.2, 664.0], [38.3, 665.0], [38.4, 666.0], [38.5, 666.0], [38.6, 668.0], [38.7, 668.0], [38.8, 669.0], [38.9, 669.0], [39.0, 669.0], [39.1, 671.0], [39.2, 676.0], [39.3, 676.0], [39.4, 678.0], [39.5, 680.0], [39.6, 682.0], [39.7, 682.0], [39.8, 683.0], [39.9, 684.0], [40.0, 685.0], [40.1, 685.0], [40.2, 686.0], [40.3, 688.0], [40.4, 688.0], [40.5, 688.0], [40.6, 690.0], [40.7, 690.0], [40.8, 690.0], [40.9, 691.0], [41.0, 693.0], [41.1, 697.0], [41.2, 697.0], [41.3, 698.0], [41.4, 700.0], [41.5, 704.0], [41.6, 704.0], [41.7, 706.0], [41.8, 706.0], [41.9, 706.0], [42.0, 706.0], [42.1, 707.0], [42.2, 708.0], [42.3, 708.0], [42.4, 708.0], [42.5, 710.0], [42.6, 710.0], [42.7, 710.0], [42.8, 710.0], [42.9, 715.0], [43.0, 716.0], [43.1, 716.0], [43.2, 718.0], [43.3, 721.0], [43.4, 721.0], [43.5, 721.0], [43.6, 721.0], [43.7, 722.0], [43.8, 722.0], [43.9, 723.0], [44.0, 723.0], [44.1, 727.0], [44.2, 727.0], [44.3, 734.0], [44.4, 741.0], [44.5, 745.0], [44.6, 745.0], [44.7, 746.0], [44.8, 749.0], [44.9, 755.0], [45.0, 755.0], [45.1, 761.0], [45.2, 764.0], [45.3, 764.0], [45.4, 765.0], [45.5, 766.0], [45.6, 767.0], [45.7, 767.0], [45.8, 768.0], [45.9, 770.0], [46.0, 770.0], [46.1, 770.0], [46.2, 772.0], [46.3, 774.0], [46.4, 775.0], [46.5, 775.0], [46.6, 775.0], [46.7, 776.0], [46.8, 776.0], [46.9, 778.0], [47.0, 784.0], [47.1, 785.0], [47.2, 785.0], [47.3, 788.0], [47.4, 789.0], [47.5, 794.0], [47.6, 794.0], [47.7, 794.0], [47.8, 795.0], [47.9, 796.0], [48.0, 796.0], [48.1, 799.0], [48.2, 799.0], [48.3, 799.0], [48.4, 799.0], [48.5, 804.0], [48.6, 807.0], [48.7, 807.0], [48.8, 811.0], [48.9, 811.0], [49.0, 812.0], [49.1, 812.0], [49.2, 813.0], [49.3, 814.0], [49.4, 814.0], [49.5, 814.0], [49.6, 817.0], [49.7, 819.0], [49.8, 819.0], [49.9, 819.0], [50.0, 821.0], [50.1, 822.0], [50.2, 822.0], [50.3, 824.0], [50.4, 824.0], [50.5, 826.0], [50.6, 826.0], [50.7, 833.0], [50.8, 834.0], [50.9, 836.0], [51.0, 836.0], [51.1, 837.0], [51.2, 843.0], [51.3, 843.0], [51.4, 843.0], [51.5, 845.0], [51.6, 845.0], [51.7, 845.0], [51.8, 846.0], [51.9, 849.0], [52.0, 852.0], [52.1, 852.0], [52.2, 855.0], [52.3, 856.0], [52.4, 856.0], [52.5, 856.0], [52.6, 856.0], [52.7, 857.0], [52.8, 857.0], [52.9, 857.0], [53.0, 861.0], [53.1, 863.0], [53.2, 864.0], [53.3, 864.0], [53.4, 865.0], [53.5, 865.0], [53.6, 865.0], [53.7, 866.0], [53.8, 866.0], [53.9, 867.0], [54.0, 867.0], [54.1, 872.0], [54.2, 876.0], [54.3, 878.0], [54.4, 878.0], [54.5, 882.0], [54.6, 882.0], [54.7, 884.0], [54.8, 884.0], [54.9, 885.0], [55.0, 886.0], [55.1, 886.0], [55.2, 887.0], [55.3, 889.0], [55.4, 892.0], [55.5, 892.0], [55.6, 892.0], [55.7, 894.0], [55.8, 897.0], [55.9, 897.0], [56.0, 897.0], [56.1, 900.0], [56.2, 901.0], [56.3, 901.0], [56.4, 905.0], [56.5, 908.0], [56.6, 909.0], [56.7, 909.0], [56.8, 912.0], [56.9, 915.0], [57.0, 915.0], [57.1, 917.0], [57.2, 920.0], [57.3, 921.0], [57.4, 921.0], [57.5, 923.0], [57.6, 923.0], [57.7, 924.0], [57.8, 924.0], [57.9, 924.0], [58.0, 926.0], [58.1, 929.0], [58.2, 929.0], [58.3, 930.0], [58.4, 935.0], [58.5, 935.0], [58.6, 936.0], [58.7, 936.0], [58.8, 940.0], [58.9, 940.0], [59.0, 940.0], [59.1, 943.0], [59.2, 944.0], [59.3, 944.0], [59.4, 947.0], [59.5, 948.0], [59.6, 948.0], [59.7, 948.0], [59.8, 950.0], [59.9, 955.0], [60.0, 957.0], [60.1, 957.0], [60.2, 959.0], [60.3, 959.0], [60.4, 959.0], [60.5, 960.0], [60.6, 961.0], [60.7, 963.0], [60.8, 963.0], [60.9, 965.0], [61.0, 969.0], [61.1, 969.0], [61.2, 969.0], [61.3, 970.0], [61.4, 972.0], [61.5, 973.0], [61.6, 973.0], [61.7, 973.0], [61.8, 975.0], [61.9, 975.0], [62.0, 978.0], [62.1, 985.0], [62.2, 986.0], [62.3, 986.0], [62.4, 987.0], [62.5, 987.0], [62.6, 991.0], [62.7, 991.0], [62.8, 996.0], [62.9, 996.0], [63.0, 998.0], [63.1, 998.0], [63.2, 998.0], [63.3, 1002.0], [63.4, 1002.0], [63.5, 1002.0], [63.6, 1005.0], [63.7, 1005.0], [63.8, 1005.0], [63.9, 1006.0], [64.0, 1009.0], [64.1, 1010.0], [64.2, 1010.0], [64.3, 1013.0], [64.4, 1014.0], [64.5, 1015.0], [64.6, 1015.0], [64.7, 1015.0], [64.8, 1015.0], [64.9, 1016.0], [65.0, 1016.0], [65.1, 1016.0], [65.2, 1020.0], [65.3, 1020.0], [65.4, 1021.0], [65.5, 1022.0], [65.6, 1023.0], [65.7, 1023.0], [65.8, 1024.0], [65.9, 1026.0], [66.0, 1027.0], [66.1, 1027.0], [66.2, 1027.0], [66.3, 1028.0], [66.4, 1029.0], [66.5, 1029.0], [66.6, 1030.0], [66.7, 1031.0], [66.8, 1031.0], [66.9, 1031.0], [67.0, 1031.0], [67.1, 1034.0], [67.2, 1034.0], [67.3, 1034.0], [67.4, 1035.0], [67.5, 1039.0], [67.6, 1039.0], [67.7, 1040.0], [67.8, 1044.0], [67.9, 1044.0], [68.0, 1044.0], [68.1, 1049.0], [68.2, 1049.0], [68.3, 1049.0], [68.4, 1049.0], [68.5, 1050.0], [68.6, 1050.0], [68.7, 1050.0], [68.8, 1050.0], [68.9, 1050.0], [69.0, 1052.0], [69.1, 1052.0], [69.2, 1054.0], [69.3, 1054.0], [69.4, 1059.0], [69.5, 1059.0], [69.6, 1060.0], [69.7, 1060.0], [69.8, 1060.0], [69.9, 1060.0], [70.0, 1063.0], [70.1, 1064.0], [70.2, 1064.0], [70.3, 1065.0], [70.4, 1065.0], [70.5, 1066.0], [70.6, 1066.0], [70.7, 1067.0], [70.8, 1067.0], [70.9, 1073.0], [71.0, 1073.0], [71.1, 1073.0], [71.2, 1074.0], [71.3, 1075.0], [71.4, 1075.0], [71.5, 1078.0], [71.6, 1078.0], [71.7, 1078.0], [71.8, 1079.0], [71.9, 1082.0], [72.0, 1082.0], [72.1, 1082.0], [72.2, 1087.0], [72.3, 1088.0], [72.4, 1088.0], [72.5, 1088.0], [72.6, 1090.0], [72.7, 1091.0], [72.8, 1093.0], [72.9, 1093.0], [73.0, 1093.0], [73.1, 1094.0], [73.2, 1095.0], [73.3, 1095.0], [73.4, 1095.0], [73.5, 1097.0], [73.6, 1097.0], [73.7, 1102.0], [73.8, 1102.0], [73.9, 1103.0], [74.0, 1103.0], [74.1, 1103.0], [74.2, 1106.0], [74.3, 1107.0], [74.4, 1107.0], [74.5, 1108.0], [74.6, 1111.0], [74.7, 1112.0], [74.8, 1112.0], [74.9, 1114.0], [75.0, 1115.0], [75.1, 1115.0], [75.2, 1115.0], [75.3, 1116.0], [75.4, 1116.0], [75.5, 1116.0], [75.6, 1117.0], [75.7, 1118.0], [75.8, 1118.0], [75.9, 1118.0], [76.0, 1122.0], [76.1, 1123.0], [76.2, 1124.0], [76.3, 1124.0], [76.4, 1124.0], [76.5, 1125.0], [76.6, 1125.0], [76.7, 1125.0], [76.8, 1126.0], [76.9, 1128.0], [77.0, 1128.0], [77.1, 1131.0], [77.2, 1132.0], [77.3, 1133.0], [77.4, 1133.0], [77.5, 1137.0], [77.6, 1137.0], [77.7, 1137.0], [77.8, 1137.0], [77.9, 1137.0], [78.0, 1137.0], [78.1, 1137.0], [78.2, 1137.0], [78.3, 1141.0], [78.4, 1143.0], [78.5, 1143.0], [78.6, 1144.0], [78.7, 1147.0], [78.8, 1148.0], [78.9, 1148.0], [79.0, 1149.0], [79.1, 1150.0], [79.2, 1152.0], [79.3, 1152.0], [79.4, 1157.0], [79.5, 1159.0], [79.6, 1159.0], [79.7, 1159.0], [79.8, 1159.0], [79.9, 1161.0], [80.0, 1163.0], [80.1, 1163.0], [80.2, 1164.0], [80.3, 1165.0], [80.4, 1165.0], [80.5, 1166.0], [80.6, 1171.0], [80.7, 1173.0], [80.8, 1173.0], [80.9, 1173.0], [81.0, 1175.0], [81.1, 1176.0], [81.2, 1176.0], [81.3, 1177.0], [81.4, 1179.0], [81.5, 1181.0], [81.6, 1181.0], [81.7, 1188.0], [81.8, 1189.0], [81.9, 1189.0], [82.0, 1191.0], [82.1, 1192.0], [82.2, 1197.0], [82.3, 1197.0], [82.4, 1197.0], [82.5, 1197.0], [82.6, 1199.0], [82.7, 1199.0], [82.8, 1199.0], [82.9, 1203.0], [83.0, 1206.0], [83.1, 1206.0], [83.2, 1208.0], [83.3, 1208.0], [83.4, 1208.0], [83.5, 1209.0], [83.6, 1212.0], [83.7, 1215.0], [83.8, 1215.0], [83.9, 1215.0], [84.0, 1220.0], [84.1, 1221.0], [84.2, 1221.0], [84.3, 1223.0], [84.4, 1224.0], [84.5, 1225.0], [84.6, 1225.0], [84.7, 1226.0], [84.8, 1229.0], [84.9, 1229.0], [85.0, 1229.0], [85.1, 1230.0], [85.2, 1234.0], [85.3, 1234.0], [85.4, 1241.0], [85.5, 1241.0], [85.6, 1241.0], [85.7, 1241.0], [85.8, 1242.0], [85.9, 1243.0], [86.0, 1248.0], [86.1, 1248.0], [86.2, 1254.0], [86.3, 1258.0], [86.4, 1258.0], [86.5, 1258.0], [86.6, 1263.0], [86.7, 1263.0], [86.8, 1263.0], [86.9, 1264.0], [87.0, 1264.0], [87.1, 1269.0], [87.2, 1269.0], [87.3, 1270.0], [87.4, 1274.0], [87.5, 1275.0], [87.6, 1275.0], [87.7, 1277.0], [87.8, 1278.0], [87.9, 1278.0], [88.0, 1278.0], [88.1, 1279.0], [88.2, 1280.0], [88.3, 1288.0], [88.4, 1288.0], [88.5, 1291.0], [88.6, 1293.0], [88.7, 1293.0], [88.8, 1295.0], [88.9, 1298.0], [89.0, 1299.0], [89.1, 1299.0], [89.2, 1300.0], [89.3, 1302.0], [89.4, 1307.0], [89.5, 1307.0], [89.6, 1307.0], [89.7, 1308.0], [89.8, 1323.0], [89.9, 1323.0], [90.0, 1323.0], [90.1, 1326.0], [90.2, 1326.0], [90.3, 1330.0], [90.4, 1332.0], [90.5, 1336.0], [90.6, 1336.0], [90.7, 1353.0], [90.8, 1355.0], [90.9, 1355.0], [91.0, 1355.0], [91.1, 1357.0], [91.2, 1357.0], [91.3, 1378.0], [91.4, 1378.0], [91.5, 1382.0], [91.6, 1383.0], [91.7, 1383.0], [91.8, 1384.0], [91.9, 1389.0], [92.0, 1397.0], [92.1, 1397.0], [92.2, 1401.0], [92.3, 1409.0], [92.4, 1411.0], [92.5, 1411.0], [92.6, 1411.0], [92.7, 1416.0], [92.8, 1419.0], [92.9, 1419.0], [93.0, 1423.0], [93.1, 1427.0], [93.2, 1432.0], [93.3, 1432.0], [93.4, 1436.0], [93.5, 1442.0], [93.6, 1442.0], [93.7, 1448.0], [93.8, 1453.0], [93.9, 1456.0], [94.0, 1456.0], [94.1, 1461.0], [94.2, 1474.0], [94.3, 1474.0], [94.4, 1474.0], [94.5, 1487.0], [94.6, 1521.0], [94.7, 1528.0], [94.8, 1528.0], [94.9, 1556.0], [95.0, 1579.0], [95.1, 1579.0], [95.2, 1593.0], [95.3, 1604.0], [95.4, 1620.0], [95.5, 1620.0], [95.6, 1627.0], [95.7, 1642.0], [95.8, 1655.0], [95.9, 1655.0], [96.0, 1663.0], [96.1, 1669.0], [96.2, 1688.0], [96.3, 1688.0], [96.4, 1717.0], [96.5, 1721.0], [96.6, 1744.0], [96.7, 1744.0], [96.8, 1782.0], [96.9, 1834.0], [97.0, 1834.0], [97.1, 1887.0], [97.2, 1898.0], [97.3, 1953.0], [97.4, 1953.0], [97.5, 1980.0], [97.6, 1985.0], [97.7, 2008.0], [97.8, 2008.0], [97.9, 2102.0], [98.0, 2298.0], [98.1, 2590.0], [98.2, 2590.0], [98.3, 2692.0], [98.4, 2693.0], [98.5, 2693.0], [98.6, 2710.0], [98.7, 2831.0], [98.8, 2855.0], [98.9, 2855.0], [99.0, 2982.0], [99.1, 3011.0], [99.2, 3289.0], [99.3, 3289.0], [99.4, 3331.0], [99.5, 3353.0], [99.6, 3473.0], [99.7, 3473.0], [99.8, 3498.0], [99.9, 3761.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 87.0, "series": [{"data": [[600.0, 73.0], [700.0, 52.0], [800.0, 56.0], [900.0, 53.0], [1000.0, 76.0], [1100.0, 68.0], [1200.0, 46.0], [1300.0, 22.0], [1400.0, 18.0], [1500.0, 5.0], [100.0, 3.0], [1600.0, 8.0], [1700.0, 4.0], [1800.0, 3.0], [1900.0, 3.0], [2000.0, 1.0], [2100.0, 1.0], [2200.0, 1.0], [2500.0, 1.0], [2600.0, 2.0], [2700.0, 1.0], [2800.0, 2.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 47.0], [3300.0, 2.0], [3200.0, 1.0], [3400.0, 2.0], [3700.0, 1.0], [300.0, 44.0], [400.0, 50.0], [500.0, 87.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 40.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 551.0, "series": [{"data": [[0.0, 144.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 551.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 40.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.889975550122248, "minX": 1.60263066E12, "maxY": 10.0, "series": [{"data": [[1.60263072E12, 9.889975550122248], [1.60263066E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263072E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 275.0, "minX": 1.0, "maxY": 1953.0, "series": [{"data": [[8.0, 561.0], [4.0, 1593.0], [2.0, 660.0], [1.0, 1044.0], [9.0, 275.0], [10.0, 872.632231404959], [5.0, 601.0], [6.0, 580.0], [3.0, 991.0], [7.0, 1953.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 873.1823129251704]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2458.866666666667, "minX": 1.60263066E12, "maxY": 998991.5, "series": [{"data": [[1.60263072E12, 998991.5], [1.60263066E12, 836764.6833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263072E12, 3064.1666666666665], [1.60263066E12, 2458.866666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263072E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 859.7726161369194, "minX": 1.60263066E12, "maxY": 890.0061349693252, "series": [{"data": [[1.60263072E12, 859.7726161369194], [1.60263066E12, 890.0061349693252]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263072E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 858.5770171149142, "minX": 1.60263066E12, "maxY": 888.757668711656, "series": [{"data": [[1.60263072E12, 858.5770171149142], [1.60263066E12, 888.757668711656]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263072E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.026894865525672367, "minX": 1.60263066E12, "maxY": 0.41411042944785253, "series": [{"data": [[1.60263072E12, 0.026894865525672367], [1.60263066E12, 0.41411042944785253]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263072E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 176.0, "minX": 1.60263066E12, "maxY": 3761.0, "series": [{"data": [[1.60263072E12, 3473.0], [1.60263066E12, 3761.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263072E12, 206.0], [1.60263066E12, 199.94299992203713]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263072E12, 206.1180000782013], [1.60263066E12, 200.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263072E12, 206.0], [1.60263066E12, 200.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263072E12, 176.0], [1.60263066E12, 177.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263072E12, 826.0], [1.60263066E12, 795.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263072E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 419.0, "minX": 1.0, "maxY": 2710.0, "series": [{"data": [[8.0, 873.0], [9.0, 1169.5], [10.0, 1051.0], [11.0, 1009.0], [3.0, 2710.0], [12.0, 858.0], [13.0, 711.5], [14.0, 783.5], [15.0, 612.5], [16.0, 419.0], [1.0, 1044.0], [17.0, 452.0], [18.0, 608.5], [20.0, 564.0], [6.0, 1222.5], [7.0, 1173.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 418.5, "minX": 1.0, "maxY": 2704.0, "series": [{"data": [[8.0, 872.5], [9.0, 1168.0], [10.0, 1050.5], [11.0, 1008.0], [3.0, 2704.0], [12.0, 856.5], [13.0, 710.5], [14.0, 782.5], [15.0, 612.0], [16.0, 418.5], [1.0, 1044.0], [17.0, 451.5], [18.0, 608.5], [20.0, 564.0], [6.0, 1221.5], [7.0, 1173.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.6, "minX": 1.60263066E12, "maxY": 6.65, "series": [{"data": [[1.60263072E12, 6.65], [1.60263066E12, 5.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263072E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.433333333333334, "minX": 1.60263066E12, "maxY": 6.816666666666666, "series": [{"data": [[1.60263072E12, 6.816666666666666], [1.60263066E12, 5.433333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263072E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.433333333333334, "minX": 1.60263066E12, "maxY": 6.816666666666666, "series": [{"data": [[1.60263072E12, 6.816666666666666], [1.60263066E12, 5.433333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263072E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.433333333333334, "minX": 1.60263066E12, "maxY": 6.816666666666666, "series": [{"data": [[1.60263072E12, 6.816666666666666], [1.60263066E12, 5.433333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263072E12, "title": "Total Transactions Per Second"}},
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

