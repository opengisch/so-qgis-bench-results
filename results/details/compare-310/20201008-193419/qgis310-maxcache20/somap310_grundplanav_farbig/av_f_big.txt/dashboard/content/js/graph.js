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
        data: {"result": {"minY": 171.0, "minX": 0.0, "maxY": 3283.0, "series": [{"data": [[0.0, 171.0], [0.1, 171.0], [0.2, 172.0], [0.3, 173.0], [0.4, 173.0], [0.5, 176.0], [0.6, 178.0], [0.7, 179.0], [0.8, 179.0], [0.9, 184.0], [1.0, 185.0], [1.1, 187.0], [1.2, 187.0], [1.3, 189.0], [1.4, 192.0], [1.5, 194.0], [1.6, 194.0], [1.7, 199.0], [1.8, 210.0], [1.9, 210.0], [2.0, 212.0], [2.1, 216.0], [2.2, 216.0], [2.3, 216.0], [2.4, 218.0], [2.5, 223.0], [2.6, 227.0], [2.7, 227.0], [2.8, 228.0], [2.9, 230.0], [3.0, 232.0], [3.1, 232.0], [3.2, 233.0], [3.3, 233.0], [3.4, 233.0], [3.5, 237.0], [3.6, 239.0], [3.7, 239.0], [3.8, 239.0], [3.9, 239.0], [4.0, 241.0], [4.1, 243.0], [4.2, 243.0], [4.3, 243.0], [4.4, 245.0], [4.5, 251.0], [4.6, 251.0], [4.7, 252.0], [4.8, 254.0], [4.9, 257.0], [5.0, 257.0], [5.1, 260.0], [5.2, 263.0], [5.3, 263.0], [5.4, 265.0], [5.5, 267.0], [5.6, 270.0], [5.7, 270.0], [5.8, 270.0], [5.9, 271.0], [6.0, 273.0], [6.1, 273.0], [6.2, 273.0], [6.3, 275.0], [6.4, 275.0], [6.5, 275.0], [6.6, 276.0], [6.7, 277.0], [6.8, 277.0], [6.9, 282.0], [7.0, 282.0], [7.1, 283.0], [7.2, 283.0], [7.3, 284.0], [7.4, 285.0], [7.5, 285.0], [7.6, 285.0], [7.7, 285.0], [7.8, 287.0], [7.9, 290.0], [8.0, 290.0], [8.1, 291.0], [8.2, 291.0], [8.3, 292.0], [8.4, 292.0], [8.5, 294.0], [8.6, 295.0], [8.7, 295.0], [8.8, 295.0], [8.9, 297.0], [9.0, 297.0], [9.1, 297.0], [9.2, 299.0], [9.3, 300.0], [9.4, 301.0], [9.5, 301.0], [9.6, 302.0], [9.7, 303.0], [9.8, 305.0], [9.9, 305.0], [10.0, 305.0], [10.1, 311.0], [10.2, 311.0], [10.3, 311.0], [10.4, 312.0], [10.5, 312.0], [10.6, 312.0], [10.7, 313.0], [10.8, 314.0], [10.9, 315.0], [11.0, 315.0], [11.1, 317.0], [11.2, 318.0], [11.3, 320.0], [11.4, 320.0], [11.5, 320.0], [11.6, 320.0], [11.7, 320.0], [11.8, 324.0], [11.9, 326.0], [12.0, 326.0], [12.1, 326.0], [12.2, 327.0], [12.3, 327.0], [12.4, 327.0], [12.5, 327.0], [12.6, 327.0], [12.7, 327.0], [12.8, 331.0], [12.9, 331.0], [13.0, 332.0], [13.1, 334.0], [13.2, 335.0], [13.3, 335.0], [13.4, 337.0], [13.5, 338.0], [13.6, 338.0], [13.7, 342.0], [13.8, 342.0], [13.9, 342.0], [14.0, 342.0], [14.1, 343.0], [14.2, 344.0], [14.3, 344.0], [14.4, 344.0], [14.5, 344.0], [14.6, 345.0], [14.7, 346.0], [14.8, 346.0], [14.9, 347.0], [15.0, 353.0], [15.1, 353.0], [15.2, 353.0], [15.3, 353.0], [15.4, 354.0], [15.5, 354.0], [15.6, 354.0], [15.7, 357.0], [15.8, 360.0], [15.9, 360.0], [16.0, 361.0], [16.1, 362.0], [16.2, 362.0], [16.3, 362.0], [16.4, 363.0], [16.5, 364.0], [16.6, 366.0], [16.7, 366.0], [16.8, 366.0], [16.9, 366.0], [17.0, 366.0], [17.1, 369.0], [17.2, 371.0], [17.3, 372.0], [17.4, 372.0], [17.5, 373.0], [17.6, 376.0], [17.7, 376.0], [17.8, 376.0], [17.9, 378.0], [18.0, 378.0], [18.1, 381.0], [18.2, 381.0], [18.3, 382.0], [18.4, 382.0], [18.5, 382.0], [18.6, 383.0], [18.7, 383.0], [18.8, 383.0], [18.9, 383.0], [19.0, 386.0], [19.1, 386.0], [19.2, 389.0], [19.3, 389.0], [19.4, 393.0], [19.5, 393.0], [19.6, 393.0], [19.7, 393.0], [19.8, 394.0], [19.9, 397.0], [20.0, 403.0], [20.1, 403.0], [20.2, 404.0], [20.3, 405.0], [20.4, 405.0], [20.5, 411.0], [20.6, 413.0], [20.7, 414.0], [20.8, 414.0], [20.9, 415.0], [21.0, 419.0], [21.1, 422.0], [21.2, 422.0], [21.3, 423.0], [21.4, 429.0], [21.5, 435.0], [21.6, 435.0], [21.7, 436.0], [21.8, 437.0], [21.9, 437.0], [22.0, 437.0], [22.1, 442.0], [22.2, 442.0], [22.3, 442.0], [22.4, 444.0], [22.5, 444.0], [22.6, 444.0], [22.7, 444.0], [22.8, 444.0], [22.9, 445.0], [23.0, 448.0], [23.1, 448.0], [23.2, 449.0], [23.3, 449.0], [23.4, 449.0], [23.5, 450.0], [23.6, 453.0], [23.7, 454.0], [23.8, 454.0], [23.9, 454.0], [24.0, 461.0], [24.1, 462.0], [24.2, 462.0], [24.3, 463.0], [24.4, 467.0], [24.5, 468.0], [24.6, 468.0], [24.7, 470.0], [24.8, 473.0], [24.9, 475.0], [25.0, 475.0], [25.1, 478.0], [25.2, 480.0], [25.3, 480.0], [25.4, 480.0], [25.5, 485.0], [25.6, 486.0], [25.7, 486.0], [25.8, 486.0], [25.9, 486.0], [26.0, 489.0], [26.1, 489.0], [26.2, 491.0], [26.3, 492.0], [26.4, 493.0], [26.5, 493.0], [26.6, 493.0], [26.7, 496.0], [26.8, 496.0], [26.9, 497.0], [27.0, 502.0], [27.1, 502.0], [27.2, 502.0], [27.3, 503.0], [27.4, 506.0], [27.5, 508.0], [27.6, 508.0], [27.7, 508.0], [27.8, 511.0], [27.9, 512.0], [28.0, 512.0], [28.1, 513.0], [28.2, 515.0], [28.3, 515.0], [28.4, 515.0], [28.5, 515.0], [28.6, 522.0], [28.7, 522.0], [28.8, 523.0], [28.9, 525.0], [29.0, 526.0], [29.1, 526.0], [29.2, 528.0], [29.3, 529.0], [29.4, 529.0], [29.5, 529.0], [29.6, 529.0], [29.7, 529.0], [29.8, 530.0], [29.9, 530.0], [30.0, 531.0], [30.1, 533.0], [30.2, 533.0], [30.3, 534.0], [30.4, 537.0], [30.5, 537.0], [30.6, 537.0], [30.7, 538.0], [30.8, 538.0], [30.9, 540.0], [31.0, 540.0], [31.1, 541.0], [31.2, 542.0], [31.3, 542.0], [31.4, 542.0], [31.5, 543.0], [31.6, 545.0], [31.7, 545.0], [31.8, 548.0], [31.9, 548.0], [32.0, 548.0], [32.1, 548.0], [32.2, 550.0], [32.3, 550.0], [32.4, 553.0], [32.5, 553.0], [32.6, 557.0], [32.7, 559.0], [32.8, 559.0], [32.9, 559.0], [33.0, 561.0], [33.1, 562.0], [33.2, 564.0], [33.3, 564.0], [33.4, 565.0], [33.5, 568.0], [33.6, 568.0], [33.7, 571.0], [33.8, 571.0], [33.9, 572.0], [34.0, 572.0], [34.1, 574.0], [34.2, 574.0], [34.3, 574.0], [34.4, 574.0], [34.5, 575.0], [34.6, 576.0], [34.7, 577.0], [34.8, 577.0], [34.9, 577.0], [35.0, 577.0], [35.1, 577.0], [35.2, 581.0], [35.3, 582.0], [35.4, 582.0], [35.5, 582.0], [35.6, 584.0], [35.7, 584.0], [35.8, 585.0], [35.9, 585.0], [36.0, 586.0], [36.1, 588.0], [36.2, 588.0], [36.3, 588.0], [36.4, 588.0], [36.5, 591.0], [36.6, 591.0], [36.7, 591.0], [36.8, 591.0], [36.9, 592.0], [37.0, 592.0], [37.1, 595.0], [37.2, 597.0], [37.3, 599.0], [37.4, 599.0], [37.5, 600.0], [37.6, 601.0], [37.7, 603.0], [37.8, 603.0], [37.9, 603.0], [38.0, 603.0], [38.1, 606.0], [38.2, 606.0], [38.3, 606.0], [38.4, 609.0], [38.5, 609.0], [38.6, 609.0], [38.7, 609.0], [38.8, 610.0], [38.9, 610.0], [39.0, 611.0], [39.1, 619.0], [39.2, 620.0], [39.3, 620.0], [39.4, 623.0], [39.5, 628.0], [39.6, 629.0], [39.7, 629.0], [39.8, 629.0], [39.9, 630.0], [40.0, 631.0], [40.1, 631.0], [40.2, 631.0], [40.3, 633.0], [40.4, 633.0], [40.5, 633.0], [40.6, 635.0], [40.7, 639.0], [40.8, 639.0], [40.9, 641.0], [41.0, 642.0], [41.1, 642.0], [41.2, 642.0], [41.3, 643.0], [41.4, 644.0], [41.5, 646.0], [41.6, 646.0], [41.7, 647.0], [41.8, 647.0], [41.9, 647.0], [42.0, 649.0], [42.1, 650.0], [42.2, 651.0], [42.3, 651.0], [42.4, 653.0], [42.5, 654.0], [42.6, 655.0], [42.7, 655.0], [42.8, 658.0], [42.9, 661.0], [43.0, 661.0], [43.1, 661.0], [43.2, 663.0], [43.3, 663.0], [43.4, 663.0], [43.5, 664.0], [43.6, 665.0], [43.7, 669.0], [43.8, 669.0], [43.9, 672.0], [44.0, 673.0], [44.1, 675.0], [44.2, 675.0], [44.3, 676.0], [44.4, 679.0], [44.5, 681.0], [44.6, 681.0], [44.7, 681.0], [44.8, 682.0], [44.9, 683.0], [45.0, 683.0], [45.1, 683.0], [45.2, 693.0], [45.3, 693.0], [45.4, 694.0], [45.5, 696.0], [45.6, 697.0], [45.7, 697.0], [45.8, 701.0], [45.9, 702.0], [46.0, 707.0], [46.1, 707.0], [46.2, 708.0], [46.3, 709.0], [46.4, 709.0], [46.5, 709.0], [46.6, 710.0], [46.7, 715.0], [46.8, 715.0], [46.9, 716.0], [47.0, 720.0], [47.1, 721.0], [47.2, 721.0], [47.3, 723.0], [47.4, 725.0], [47.5, 726.0], [47.6, 726.0], [47.7, 727.0], [47.8, 731.0], [47.9, 734.0], [48.0, 734.0], [48.1, 735.0], [48.2, 737.0], [48.3, 738.0], [48.4, 738.0], [48.5, 741.0], [48.6, 743.0], [48.7, 743.0], [48.8, 744.0], [48.9, 747.0], [49.0, 749.0], [49.1, 749.0], [49.2, 750.0], [49.3, 753.0], [49.4, 757.0], [49.5, 757.0], [49.6, 766.0], [49.7, 767.0], [49.8, 772.0], [49.9, 772.0], [50.0, 774.0], [50.1, 774.0], [50.2, 774.0], [50.3, 774.0], [50.4, 776.0], [50.5, 776.0], [50.6, 776.0], [50.7, 776.0], [50.8, 778.0], [50.9, 779.0], [51.0, 779.0], [51.1, 782.0], [51.2, 786.0], [51.3, 788.0], [51.4, 788.0], [51.5, 788.0], [51.6, 789.0], [51.7, 789.0], [51.8, 790.0], [51.9, 791.0], [52.0, 792.0], [52.1, 792.0], [52.2, 793.0], [52.3, 793.0], [52.4, 793.0], [52.5, 793.0], [52.6, 794.0], [52.7, 796.0], [52.8, 802.0], [52.9, 802.0], [53.0, 805.0], [53.1, 805.0], [53.2, 805.0], [53.3, 805.0], [53.4, 807.0], [53.5, 808.0], [53.6, 808.0], [53.7, 809.0], [53.8, 811.0], [53.9, 814.0], [54.0, 814.0], [54.1, 814.0], [54.2, 817.0], [54.3, 817.0], [54.4, 817.0], [54.5, 819.0], [54.6, 820.0], [54.7, 821.0], [54.8, 821.0], [54.9, 826.0], [55.0, 826.0], [55.1, 826.0], [55.2, 829.0], [55.3, 829.0], [55.4, 831.0], [55.5, 831.0], [55.6, 834.0], [55.7, 840.0], [55.8, 840.0], [55.9, 840.0], [56.0, 840.0], [56.1, 842.0], [56.2, 844.0], [56.3, 844.0], [56.4, 848.0], [56.5, 848.0], [56.6, 854.0], [56.7, 854.0], [56.8, 857.0], [56.9, 858.0], [57.0, 858.0], [57.1, 861.0], [57.2, 861.0], [57.3, 865.0], [57.4, 865.0], [57.5, 868.0], [57.6, 869.0], [57.7, 869.0], [57.8, 869.0], [57.9, 870.0], [58.0, 871.0], [58.1, 872.0], [58.2, 872.0], [58.3, 877.0], [58.4, 877.0], [58.5, 877.0], [58.6, 879.0], [58.7, 886.0], [58.8, 886.0], [58.9, 886.0], [59.0, 888.0], [59.1, 888.0], [59.2, 889.0], [59.3, 889.0], [59.4, 890.0], [59.5, 895.0], [59.6, 895.0], [59.7, 895.0], [59.8, 896.0], [59.9, 896.0], [60.0, 900.0], [60.1, 900.0], [60.2, 905.0], [60.3, 906.0], [60.4, 906.0], [60.5, 906.0], [60.6, 908.0], [60.7, 918.0], [60.8, 918.0], [60.9, 922.0], [61.0, 924.0], [61.1, 924.0], [61.2, 924.0], [61.3, 925.0], [61.4, 926.0], [61.5, 932.0], [61.6, 932.0], [61.7, 936.0], [61.8, 937.0], [61.9, 937.0], [62.0, 938.0], [62.1, 939.0], [62.2, 941.0], [62.3, 941.0], [62.4, 945.0], [62.5, 946.0], [62.6, 948.0], [62.7, 948.0], [62.8, 949.0], [62.9, 949.0], [63.0, 951.0], [63.1, 951.0], [63.2, 954.0], [63.3, 955.0], [63.4, 955.0], [63.5, 958.0], [63.6, 962.0], [63.7, 962.0], [63.8, 962.0], [63.9, 963.0], [64.0, 963.0], [64.1, 963.0], [64.2, 963.0], [64.3, 968.0], [64.4, 968.0], [64.5, 972.0], [64.6, 972.0], [64.7, 974.0], [64.8, 975.0], [64.9, 978.0], [65.0, 978.0], [65.1, 978.0], [65.2, 979.0], [65.3, 979.0], [65.4, 982.0], [65.5, 982.0], [65.6, 983.0], [65.7, 983.0], [65.8, 985.0], [65.9, 987.0], [66.0, 989.0], [66.1, 989.0], [66.2, 990.0], [66.3, 992.0], [66.4, 995.0], [66.5, 995.0], [66.6, 1000.0], [66.7, 1001.0], [66.8, 1001.0], [66.9, 1001.0], [67.0, 1003.0], [67.1, 1006.0], [67.2, 1006.0], [67.3, 1007.0], [67.4, 1010.0], [67.5, 1012.0], [67.6, 1012.0], [67.7, 1018.0], [67.8, 1018.0], [67.9, 1019.0], [68.0, 1019.0], [68.1, 1026.0], [68.2, 1027.0], [68.3, 1029.0], [68.4, 1029.0], [68.5, 1031.0], [68.6, 1035.0], [68.7, 1035.0], [68.8, 1036.0], [68.9, 1039.0], [69.0, 1039.0], [69.1, 1039.0], [69.2, 1040.0], [69.3, 1041.0], [69.4, 1044.0], [69.5, 1044.0], [69.6, 1046.0], [69.7, 1047.0], [69.8, 1048.0], [69.9, 1048.0], [70.0, 1049.0], [70.1, 1049.0], [70.2, 1049.0], [70.3, 1051.0], [70.4, 1053.0], [70.5, 1053.0], [70.6, 1053.0], [70.7, 1060.0], [70.8, 1060.0], [70.9, 1061.0], [71.0, 1061.0], [71.1, 1061.0], [71.2, 1064.0], [71.3, 1065.0], [71.4, 1065.0], [71.5, 1066.0], [71.6, 1066.0], [71.7, 1066.0], [71.8, 1066.0], [71.9, 1070.0], [72.0, 1072.0], [72.1, 1072.0], [72.2, 1074.0], [72.3, 1076.0], [72.4, 1079.0], [72.5, 1079.0], [72.6, 1082.0], [72.7, 1083.0], [72.8, 1086.0], [72.9, 1086.0], [73.0, 1089.0], [73.1, 1089.0], [73.2, 1090.0], [73.3, 1090.0], [73.4, 1090.0], [73.5, 1090.0], [73.6, 1090.0], [73.7, 1090.0], [73.8, 1092.0], [73.9, 1092.0], [74.0, 1092.0], [74.1, 1093.0], [74.2, 1096.0], [74.3, 1097.0], [74.4, 1097.0], [74.5, 1097.0], [74.6, 1100.0], [74.7, 1101.0], [74.8, 1101.0], [74.9, 1101.0], [75.0, 1103.0], [75.1, 1103.0], [75.2, 1103.0], [75.3, 1103.0], [75.4, 1103.0], [75.5, 1103.0], [75.6, 1104.0], [75.7, 1106.0], [75.8, 1107.0], [75.9, 1107.0], [76.0, 1112.0], [76.1, 1112.0], [76.2, 1114.0], [76.3, 1114.0], [76.4, 1118.0], [76.5, 1120.0], [76.6, 1120.0], [76.7, 1120.0], [76.8, 1120.0], [76.9, 1121.0], [77.0, 1121.0], [77.1, 1123.0], [77.2, 1124.0], [77.3, 1125.0], [77.4, 1125.0], [77.5, 1127.0], [77.6, 1129.0], [77.7, 1129.0], [77.8, 1129.0], [77.9, 1129.0], [78.0, 1130.0], [78.1, 1130.0], [78.2, 1130.0], [78.3, 1130.0], [78.4, 1132.0], [78.5, 1132.0], [78.6, 1132.0], [78.7, 1133.0], [78.8, 1133.0], [78.9, 1133.0], [79.0, 1133.0], [79.1, 1135.0], [79.2, 1135.0], [79.3, 1135.0], [79.4, 1144.0], [79.5, 1146.0], [79.6, 1148.0], [79.7, 1148.0], [79.8, 1149.0], [79.9, 1153.0], [80.0, 1154.0], [80.1, 1154.0], [80.2, 1154.0], [80.3, 1155.0], [80.4, 1155.0], [80.5, 1155.0], [80.6, 1156.0], [80.7, 1157.0], [80.8, 1157.0], [80.9, 1158.0], [81.0, 1168.0], [81.1, 1173.0], [81.2, 1173.0], [81.3, 1175.0], [81.4, 1177.0], [81.5, 1178.0], [81.6, 1178.0], [81.7, 1181.0], [81.8, 1182.0], [81.9, 1182.0], [82.0, 1182.0], [82.1, 1182.0], [82.2, 1182.0], [82.3, 1182.0], [82.4, 1186.0], [82.5, 1188.0], [82.6, 1190.0], [82.7, 1190.0], [82.8, 1192.0], [82.9, 1199.0], [83.0, 1200.0], [83.1, 1200.0], [83.2, 1204.0], [83.3, 1205.0], [83.4, 1205.0], [83.5, 1206.0], [83.6, 1208.0], [83.7, 1210.0], [83.8, 1210.0], [83.9, 1214.0], [84.0, 1214.0], [84.1, 1216.0], [84.2, 1216.0], [84.3, 1223.0], [84.4, 1228.0], [84.5, 1230.0], [84.6, 1230.0], [84.7, 1236.0], [84.8, 1236.0], [84.9, 1241.0], [85.0, 1241.0], [85.1, 1241.0], [85.2, 1242.0], [85.3, 1242.0], [85.4, 1245.0], [85.5, 1249.0], [85.6, 1250.0], [85.7, 1250.0], [85.8, 1251.0], [85.9, 1256.0], [86.0, 1257.0], [86.1, 1257.0], [86.2, 1259.0], [86.3, 1259.0], [86.4, 1260.0], [86.5, 1260.0], [86.6, 1261.0], [86.7, 1263.0], [86.8, 1263.0], [86.9, 1266.0], [87.0, 1266.0], [87.1, 1269.0], [87.2, 1269.0], [87.3, 1270.0], [87.4, 1271.0], [87.5, 1273.0], [87.6, 1273.0], [87.7, 1277.0], [87.8, 1281.0], [87.9, 1284.0], [88.0, 1284.0], [88.1, 1284.0], [88.2, 1288.0], [88.3, 1288.0], [88.4, 1288.0], [88.5, 1289.0], [88.6, 1299.0], [88.7, 1299.0], [88.8, 1300.0], [88.9, 1300.0], [89.0, 1300.0], [89.1, 1300.0], [89.2, 1304.0], [89.3, 1304.0], [89.4, 1304.0], [89.5, 1304.0], [89.6, 1304.0], [89.7, 1306.0], [89.8, 1310.0], [89.9, 1310.0], [90.0, 1311.0], [90.1, 1312.0], [90.2, 1312.0], [90.3, 1312.0], [90.4, 1321.0], [90.5, 1322.0], [90.6, 1322.0], [90.7, 1322.0], [90.8, 1337.0], [90.9, 1340.0], [91.0, 1340.0], [91.1, 1354.0], [91.2, 1357.0], [91.3, 1358.0], [91.4, 1358.0], [91.5, 1364.0], [91.6, 1372.0], [91.7, 1372.0], [91.8, 1373.0], [91.9, 1376.0], [92.0, 1378.0], [92.1, 1378.0], [92.2, 1382.0], [92.3, 1383.0], [92.4, 1385.0], [92.5, 1385.0], [92.6, 1386.0], [92.7, 1386.0], [92.8, 1417.0], [92.9, 1417.0], [93.0, 1433.0], [93.1, 1437.0], [93.2, 1444.0], [93.3, 1444.0], [93.4, 1450.0], [93.5, 1451.0], [93.6, 1451.0], [93.7, 1460.0], [93.8, 1466.0], [93.9, 1474.0], [94.0, 1474.0], [94.1, 1486.0], [94.2, 1509.0], [94.3, 1514.0], [94.4, 1514.0], [94.5, 1515.0], [94.6, 1523.0], [94.7, 1533.0], [94.8, 1533.0], [94.9, 1535.0], [95.0, 1540.0], [95.1, 1540.0], [95.2, 1549.0], [95.3, 1560.0], [95.4, 1562.0], [95.5, 1562.0], [95.6, 1568.0], [95.7, 1586.0], [95.8, 1588.0], [95.9, 1588.0], [96.0, 1591.0], [96.1, 1607.0], [96.2, 1634.0], [96.3, 1634.0], [96.4, 1684.0], [96.5, 1686.0], [96.6, 1710.0], [96.7, 1710.0], [96.8, 1714.0], [96.9, 1722.0], [97.0, 1722.0], [97.1, 1730.0], [97.2, 1756.0], [97.3, 1795.0], [97.4, 1795.0], [97.5, 1819.0], [97.6, 1938.0], [97.7, 1992.0], [97.8, 1992.0], [97.9, 2024.0], [98.0, 2160.0], [98.1, 2430.0], [98.2, 2430.0], [98.3, 2672.0], [98.4, 2777.0], [98.5, 2777.0], [98.6, 2868.0], [98.7, 2972.0], [98.8, 2985.0], [98.9, 2985.0], [99.0, 3078.0], [99.1, 3096.0], [99.2, 3114.0], [99.3, 3114.0], [99.4, 3141.0], [99.5, 3174.0], [99.6, 3226.0], [99.7, 3226.0], [99.8, 3260.0], [99.9, 3283.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 79.0, "series": [{"data": [[600.0, 61.0], [700.0, 52.0], [800.0, 53.0], [900.0, 48.0], [1000.0, 59.0], [1100.0, 62.0], [1200.0, 42.0], [1300.0, 30.0], [1400.0, 10.0], [1500.0, 14.0], [100.0, 13.0], [1600.0, 4.0], [1700.0, 6.0], [1800.0, 1.0], [1900.0, 2.0], [2000.0, 1.0], [2100.0, 1.0], [2400.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [2700.0, 1.0], [2900.0, 2.0], [3000.0, 2.0], [3100.0, 3.0], [3200.0, 3.0], [200.0, 55.0], [300.0, 79.0], [400.0, 51.0], [500.0, 77.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 43.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 494.0, "series": [{"data": [[0.0, 198.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 494.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 43.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.415584415584417, "minX": 1.6021866E12, "maxY": 10.0, "series": [{"data": [[1.60218666E12, 9.415584415584417], [1.6021866E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218666E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 436.0, "minX": 1.0, "maxY": 896.0, "series": [{"data": [[8.0, 776.0], [4.0, 805.0], [2.0, 582.0], [1.0, 896.0], [9.0, 450.0], [10.0, 832.2837465564733], [5.0, 683.0], [6.0, 436.0], [3.0, 550.0], [7.0, 442.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 829.7387755102035]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 567.5666666666667, "minX": 1.6021866E12, "maxY": 1639438.25, "series": [{"data": [[1.60218666E12, 196317.45], [1.6021866E12, 1639438.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218666E12, 567.5666666666667], [1.6021866E12, 4955.466666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218666E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 738.9090909090909, "minX": 1.6021866E12, "maxY": 840.3677811550148, "series": [{"data": [[1.60218666E12, 738.9090909090909], [1.6021866E12, 840.3677811550148]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218666E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 737.8181818181818, "minX": 1.6021866E12, "maxY": 839.2781155015198, "series": [{"data": [[1.60218666E12, 737.8181818181818], [1.6021866E12, 839.2781155015198]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218666E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0779220779220779, "minX": 1.6021866E12, "maxY": 0.19452887537993932, "series": [{"data": [[1.60218666E12, 0.0779220779220779], [1.6021866E12, 0.19452887537993932]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218666E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 171.0, "minX": 1.6021866E12, "maxY": 3283.0, "series": [{"data": [[1.60218666E12, 2024.0], [1.6021866E12, 3283.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218666E12, 189.0], [1.6021866E12, 178.93099984288216]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218666E12, 189.0], [1.6021866E12, 181.6205003142357]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218666E12, 189.0], [1.6021866E12, 180.3024996072054]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218666E12, 189.0], [1.6021866E12, 171.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218666E12, 611.0], [1.6021866E12, 787.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218666E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 499.5, "minX": 2.0, "maxY": 2822.5, "series": [{"data": [[2.0, 2822.5], [8.0, 971.0], [9.0, 1006.5], [10.0, 948.0], [11.0, 947.5], [12.0, 1037.5], [13.0, 683.0], [14.0, 718.0], [15.0, 573.5], [16.0, 591.0], [17.0, 630.5], [18.0, 499.5], [7.0, 1113.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 499.5, "minX": 2.0, "maxY": 2819.0, "series": [{"data": [[2.0, 2819.0], [8.0, 970.5], [9.0, 1006.5], [10.0, 947.0], [11.0, 947.0], [12.0, 1036.0], [13.0, 682.0], [14.0, 717.5], [15.0, 573.5], [16.0, 590.5], [17.0, 629.5], [18.0, 499.5], [7.0, 1112.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1166666666666667, "minX": 1.6021866E12, "maxY": 11.133333333333333, "series": [{"data": [[1.60218666E12, 1.1166666666666667], [1.6021866E12, 11.133333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218666E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.6021866E12, "maxY": 10.966666666666667, "series": [{"data": [[1.60218666E12, 1.2833333333333334], [1.6021866E12, 10.966666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218666E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.6021866E12, "maxY": 10.966666666666667, "series": [{"data": [[1.60218666E12, 1.2833333333333334], [1.6021866E12, 10.966666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218666E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.6021866E12, "maxY": 10.966666666666667, "series": [{"data": [[1.60218666E12, 1.2833333333333334], [1.6021866E12, 10.966666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218666E12, "title": "Total Transactions Per Second"}},
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

