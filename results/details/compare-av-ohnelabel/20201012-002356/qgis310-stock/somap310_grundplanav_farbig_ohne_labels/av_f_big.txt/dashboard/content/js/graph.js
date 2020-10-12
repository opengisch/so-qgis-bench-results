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
        data: {"result": {"minY": 133.0, "minX": 0.0, "maxY": 2788.0, "series": [{"data": [[0.0, 133.0], [0.1, 133.0], [0.2, 138.0], [0.3, 138.0], [0.4, 138.0], [0.5, 138.0], [0.6, 138.0], [0.7, 143.0], [0.8, 143.0], [0.9, 143.0], [1.0, 146.0], [1.1, 147.0], [1.2, 147.0], [1.3, 149.0], [1.4, 158.0], [1.5, 171.0], [1.6, 171.0], [1.7, 179.0], [1.8, 182.0], [1.9, 182.0], [2.0, 190.0], [2.1, 194.0], [2.2, 205.0], [2.3, 205.0], [2.4, 213.0], [2.5, 216.0], [2.6, 217.0], [2.7, 217.0], [2.8, 219.0], [2.9, 220.0], [3.0, 220.0], [3.1, 220.0], [3.2, 222.0], [3.3, 222.0], [3.4, 222.0], [3.5, 223.0], [3.6, 224.0], [3.7, 224.0], [3.8, 224.0], [3.9, 224.0], [4.0, 225.0], [4.1, 225.0], [4.2, 225.0], [4.3, 226.0], [4.4, 227.0], [4.5, 228.0], [4.6, 228.0], [4.7, 229.0], [4.8, 230.0], [4.9, 231.0], [5.0, 231.0], [5.1, 233.0], [5.2, 235.0], [5.3, 235.0], [5.4, 236.0], [5.5, 240.0], [5.6, 243.0], [5.7, 243.0], [5.8, 244.0], [5.9, 246.0], [6.0, 250.0], [6.1, 250.0], [6.2, 251.0], [6.3, 252.0], [6.4, 252.0], [6.5, 252.0], [6.6, 256.0], [6.7, 263.0], [6.8, 263.0], [6.9, 266.0], [7.0, 271.0], [7.1, 275.0], [7.2, 275.0], [7.3, 281.0], [7.4, 282.0], [7.5, 284.0], [7.6, 284.0], [7.7, 288.0], [7.8, 293.0], [7.9, 293.0], [8.0, 293.0], [8.1, 298.0], [8.2, 301.0], [8.3, 304.0], [8.4, 304.0], [8.5, 307.0], [8.6, 307.0], [8.7, 307.0], [8.8, 307.0], [8.9, 307.0], [9.0, 308.0], [9.1, 308.0], [9.2, 310.0], [9.3, 311.0], [9.4, 313.0], [9.5, 313.0], [9.6, 314.0], [9.7, 315.0], [9.8, 321.0], [9.9, 321.0], [10.0, 321.0], [10.1, 321.0], [10.2, 321.0], [10.3, 321.0], [10.4, 322.0], [10.5, 323.0], [10.6, 323.0], [10.7, 324.0], [10.8, 328.0], [10.9, 331.0], [11.0, 331.0], [11.1, 332.0], [11.2, 332.0], [11.3, 334.0], [11.4, 334.0], [11.5, 334.0], [11.6, 341.0], [11.7, 341.0], [11.8, 342.0], [11.9, 344.0], [12.0, 347.0], [12.1, 347.0], [12.2, 347.0], [12.3, 352.0], [12.4, 355.0], [12.5, 355.0], [12.6, 356.0], [12.7, 359.0], [12.8, 361.0], [12.9, 361.0], [13.0, 362.0], [13.1, 367.0], [13.2, 371.0], [13.3, 371.0], [13.4, 374.0], [13.5, 375.0], [13.6, 375.0], [13.7, 380.0], [13.8, 381.0], [13.9, 382.0], [14.0, 382.0], [14.1, 383.0], [14.2, 385.0], [14.3, 385.0], [14.4, 385.0], [14.5, 386.0], [14.6, 397.0], [14.7, 399.0], [14.8, 399.0], [14.9, 400.0], [15.0, 403.0], [15.1, 403.0], [15.2, 413.0], [15.3, 413.0], [15.4, 429.0], [15.5, 429.0], [15.6, 433.0], [15.7, 433.0], [15.8, 433.0], [15.9, 433.0], [16.0, 434.0], [16.1, 435.0], [16.2, 435.0], [16.3, 435.0], [16.4, 436.0], [16.5, 437.0], [16.6, 439.0], [16.7, 439.0], [16.8, 439.0], [16.9, 440.0], [17.0, 440.0], [17.1, 440.0], [17.2, 449.0], [17.3, 450.0], [17.4, 450.0], [17.5, 451.0], [17.6, 453.0], [17.7, 454.0], [17.8, 454.0], [17.9, 454.0], [18.0, 454.0], [18.1, 454.0], [18.2, 454.0], [18.3, 457.0], [18.4, 458.0], [18.5, 458.0], [18.6, 462.0], [18.7, 466.0], [18.8, 467.0], [18.9, 467.0], [19.0, 467.0], [19.1, 469.0], [19.2, 469.0], [19.3, 469.0], [19.4, 470.0], [19.5, 470.0], [19.6, 473.0], [19.7, 473.0], [19.8, 474.0], [19.9, 475.0], [20.0, 476.0], [20.1, 476.0], [20.2, 476.0], [20.3, 479.0], [20.4, 479.0], [20.5, 480.0], [20.6, 480.0], [20.7, 483.0], [20.8, 483.0], [20.9, 483.0], [21.0, 483.0], [21.1, 484.0], [21.2, 484.0], [21.3, 484.0], [21.4, 485.0], [21.5, 485.0], [21.6, 485.0], [21.7, 485.0], [21.8, 487.0], [21.9, 487.0], [22.0, 488.0], [22.1, 489.0], [22.2, 490.0], [22.3, 490.0], [22.4, 490.0], [22.5, 491.0], [22.6, 491.0], [22.7, 491.0], [22.8, 492.0], [22.9, 492.0], [23.0, 492.0], [23.1, 492.0], [23.2, 492.0], [23.3, 493.0], [23.4, 493.0], [23.5, 493.0], [23.6, 493.0], [23.7, 496.0], [23.8, 496.0], [23.9, 497.0], [24.0, 497.0], [24.1, 499.0], [24.2, 499.0], [24.3, 500.0], [24.4, 503.0], [24.5, 504.0], [24.6, 504.0], [24.7, 504.0], [24.8, 504.0], [24.9, 505.0], [25.0, 505.0], [25.1, 505.0], [25.2, 505.0], [25.3, 505.0], [25.4, 506.0], [25.5, 506.0], [25.6, 508.0], [25.7, 508.0], [25.8, 508.0], [25.9, 509.0], [26.0, 509.0], [26.1, 509.0], [26.2, 509.0], [26.3, 509.0], [26.4, 509.0], [26.5, 509.0], [26.6, 510.0], [26.7, 510.0], [26.8, 510.0], [26.9, 511.0], [27.0, 511.0], [27.1, 511.0], [27.2, 511.0], [27.3, 511.0], [27.4, 512.0], [27.5, 512.0], [27.6, 512.0], [27.7, 513.0], [27.8, 514.0], [27.9, 514.0], [28.0, 514.0], [28.1, 514.0], [28.2, 515.0], [28.3, 516.0], [28.4, 516.0], [28.5, 516.0], [28.6, 517.0], [28.7, 517.0], [28.8, 517.0], [28.9, 517.0], [29.0, 517.0], [29.1, 517.0], [29.2, 517.0], [29.3, 518.0], [29.4, 520.0], [29.5, 520.0], [29.6, 521.0], [29.7, 521.0], [29.8, 522.0], [29.9, 522.0], [30.0, 523.0], [30.1, 523.0], [30.2, 523.0], [30.3, 523.0], [30.4, 524.0], [30.5, 524.0], [30.6, 524.0], [30.7, 525.0], [30.8, 525.0], [30.9, 525.0], [31.0, 525.0], [31.1, 527.0], [31.2, 529.0], [31.3, 529.0], [31.4, 529.0], [31.5, 529.0], [31.6, 530.0], [31.7, 530.0], [31.8, 530.0], [31.9, 532.0], [32.0, 533.0], [32.1, 533.0], [32.2, 533.0], [32.3, 533.0], [32.4, 534.0], [32.5, 534.0], [32.6, 535.0], [32.7, 535.0], [32.8, 535.0], [32.9, 535.0], [33.0, 537.0], [33.1, 537.0], [33.2, 539.0], [33.3, 539.0], [33.4, 539.0], [33.5, 543.0], [33.6, 543.0], [33.7, 544.0], [33.8, 544.0], [33.9, 544.0], [34.0, 544.0], [34.1, 545.0], [34.2, 546.0], [34.3, 547.0], [34.4, 547.0], [34.5, 547.0], [34.6, 547.0], [34.7, 549.0], [34.8, 549.0], [34.9, 549.0], [35.0, 550.0], [35.1, 550.0], [35.2, 550.0], [35.3, 550.0], [35.4, 551.0], [35.5, 551.0], [35.6, 552.0], [35.7, 552.0], [35.8, 553.0], [35.9, 553.0], [36.0, 554.0], [36.1, 555.0], [36.2, 555.0], [36.3, 555.0], [36.4, 555.0], [36.5, 555.0], [36.6, 558.0], [36.7, 558.0], [36.8, 559.0], [36.9, 560.0], [37.0, 560.0], [37.1, 561.0], [37.2, 561.0], [37.3, 562.0], [37.4, 562.0], [37.5, 564.0], [37.6, 564.0], [37.7, 564.0], [37.8, 564.0], [37.9, 568.0], [38.0, 572.0], [38.1, 572.0], [38.2, 572.0], [38.3, 573.0], [38.4, 579.0], [38.5, 579.0], [38.6, 583.0], [38.7, 584.0], [38.8, 584.0], [38.9, 584.0], [39.0, 592.0], [39.1, 597.0], [39.2, 597.0], [39.3, 597.0], [39.4, 606.0], [39.5, 607.0], [39.6, 609.0], [39.7, 609.0], [39.8, 609.0], [39.9, 610.0], [40.0, 614.0], [40.1, 614.0], [40.2, 617.0], [40.3, 617.0], [40.4, 617.0], [40.5, 618.0], [40.6, 618.0], [40.7, 625.0], [40.8, 625.0], [40.9, 627.0], [41.0, 629.0], [41.1, 630.0], [41.2, 630.0], [41.3, 631.0], [41.4, 632.0], [41.5, 637.0], [41.6, 637.0], [41.7, 638.0], [41.8, 639.0], [41.9, 639.0], [42.0, 641.0], [42.1, 643.0], [42.2, 644.0], [42.3, 644.0], [42.4, 645.0], [42.5, 647.0], [42.6, 647.0], [42.7, 647.0], [42.8, 648.0], [42.9, 650.0], [43.0, 653.0], [43.1, 653.0], [43.2, 654.0], [43.3, 654.0], [43.4, 654.0], [43.5, 657.0], [43.6, 658.0], [43.7, 659.0], [43.8, 659.0], [43.9, 660.0], [44.0, 660.0], [44.1, 660.0], [44.2, 660.0], [44.3, 661.0], [44.4, 662.0], [44.5, 663.0], [44.6, 663.0], [44.7, 667.0], [44.8, 671.0], [44.9, 676.0], [45.0, 676.0], [45.1, 679.0], [45.2, 680.0], [45.3, 680.0], [45.4, 683.0], [45.5, 683.0], [45.6, 686.0], [45.7, 686.0], [45.8, 689.0], [45.9, 694.0], [46.0, 694.0], [46.1, 694.0], [46.2, 698.0], [46.3, 699.0], [46.4, 699.0], [46.5, 699.0], [46.6, 703.0], [46.7, 703.0], [46.8, 703.0], [46.9, 705.0], [47.0, 705.0], [47.1, 715.0], [47.2, 715.0], [47.3, 719.0], [47.4, 722.0], [47.5, 729.0], [47.6, 729.0], [47.7, 746.0], [47.8, 747.0], [47.9, 747.0], [48.0, 747.0], [48.1, 749.0], [48.2, 750.0], [48.3, 753.0], [48.4, 753.0], [48.5, 757.0], [48.6, 761.0], [48.7, 761.0], [48.8, 762.0], [48.9, 764.0], [49.0, 767.0], [49.1, 767.0], [49.2, 773.0], [49.3, 779.0], [49.4, 793.0], [49.5, 793.0], [49.6, 793.0], [49.7, 798.0], [49.8, 815.0], [49.9, 815.0], [50.0, 817.0], [50.1, 824.0], [50.2, 824.0], [50.3, 824.0], [50.4, 828.0], [50.5, 828.0], [50.6, 828.0], [50.7, 829.0], [50.8, 831.0], [50.9, 831.0], [51.0, 831.0], [51.1, 832.0], [51.2, 833.0], [51.3, 835.0], [51.4, 835.0], [51.5, 836.0], [51.6, 842.0], [51.7, 842.0], [51.8, 844.0], [51.9, 848.0], [52.0, 851.0], [52.1, 851.0], [52.2, 853.0], [52.3, 858.0], [52.4, 858.0], [52.5, 858.0], [52.6, 859.0], [52.7, 861.0], [52.8, 863.0], [52.9, 863.0], [53.0, 865.0], [53.1, 865.0], [53.2, 867.0], [53.3, 867.0], [53.4, 869.0], [53.5, 871.0], [53.6, 871.0], [53.7, 871.0], [53.8, 876.0], [53.9, 879.0], [54.0, 879.0], [54.1, 880.0], [54.2, 882.0], [54.3, 883.0], [54.4, 883.0], [54.5, 885.0], [54.6, 887.0], [54.7, 888.0], [54.8, 888.0], [54.9, 888.0], [55.0, 891.0], [55.1, 891.0], [55.2, 892.0], [55.3, 895.0], [55.4, 898.0], [55.5, 898.0], [55.6, 901.0], [55.7, 902.0], [55.8, 902.0], [55.9, 902.0], [56.0, 906.0], [56.1, 910.0], [56.2, 911.0], [56.3, 911.0], [56.4, 916.0], [56.5, 917.0], [56.6, 918.0], [56.7, 918.0], [56.8, 920.0], [56.9, 924.0], [57.0, 924.0], [57.1, 931.0], [57.2, 932.0], [57.3, 932.0], [57.4, 932.0], [57.5, 937.0], [57.6, 940.0], [57.7, 940.0], [57.8, 940.0], [57.9, 943.0], [58.0, 956.0], [58.1, 960.0], [58.2, 960.0], [58.3, 960.0], [58.4, 961.0], [58.5, 961.0], [58.6, 962.0], [58.7, 965.0], [58.8, 966.0], [58.9, 966.0], [59.0, 966.0], [59.1, 966.0], [59.2, 967.0], [59.3, 967.0], [59.4, 967.0], [59.5, 969.0], [59.6, 969.0], [59.7, 969.0], [59.8, 970.0], [59.9, 970.0], [60.0, 970.0], [60.1, 970.0], [60.2, 972.0], [60.3, 978.0], [60.4, 978.0], [60.5, 980.0], [60.6, 980.0], [60.7, 980.0], [60.8, 980.0], [60.9, 982.0], [61.0, 983.0], [61.1, 986.0], [61.2, 986.0], [61.3, 990.0], [61.4, 992.0], [61.5, 994.0], [61.6, 994.0], [61.7, 994.0], [61.8, 995.0], [61.9, 995.0], [62.0, 995.0], [62.1, 995.0], [62.2, 996.0], [62.3, 996.0], [62.4, 997.0], [62.5, 997.0], [62.6, 998.0], [62.7, 998.0], [62.8, 998.0], [62.9, 999.0], [63.0, 1001.0], [63.1, 1001.0], [63.2, 1003.0], [63.3, 1003.0], [63.4, 1003.0], [63.5, 1004.0], [63.6, 1004.0], [63.7, 1004.0], [63.8, 1004.0], [63.9, 1004.0], [64.0, 1005.0], [64.1, 1005.0], [64.2, 1005.0], [64.3, 1006.0], [64.4, 1006.0], [64.5, 1006.0], [64.6, 1006.0], [64.7, 1008.0], [64.8, 1009.0], [64.9, 1009.0], [65.0, 1009.0], [65.1, 1010.0], [65.2, 1010.0], [65.3, 1010.0], [65.4, 1011.0], [65.5, 1012.0], [65.6, 1013.0], [65.7, 1013.0], [65.8, 1014.0], [65.9, 1015.0], [66.0, 1016.0], [66.1, 1016.0], [66.2, 1016.0], [66.3, 1017.0], [66.4, 1017.0], [66.5, 1017.0], [66.6, 1018.0], [66.7, 1019.0], [66.8, 1019.0], [66.9, 1019.0], [67.0, 1021.0], [67.1, 1021.0], [67.2, 1021.0], [67.3, 1022.0], [67.4, 1022.0], [67.5, 1022.0], [67.6, 1022.0], [67.7, 1023.0], [67.8, 1023.0], [67.9, 1023.0], [68.0, 1023.0], [68.1, 1024.0], [68.2, 1024.0], [68.3, 1024.0], [68.4, 1024.0], [68.5, 1024.0], [68.6, 1025.0], [68.7, 1025.0], [68.8, 1025.0], [68.9, 1026.0], [69.0, 1026.0], [69.1, 1026.0], [69.2, 1026.0], [69.3, 1026.0], [69.4, 1026.0], [69.5, 1026.0], [69.6, 1027.0], [69.7, 1028.0], [69.8, 1029.0], [69.9, 1029.0], [70.0, 1030.0], [70.1, 1030.0], [70.2, 1030.0], [70.3, 1031.0], [70.4, 1031.0], [70.5, 1032.0], [70.6, 1032.0], [70.7, 1032.0], [70.8, 1034.0], [70.9, 1034.0], [71.0, 1034.0], [71.1, 1034.0], [71.2, 1035.0], [71.3, 1036.0], [71.4, 1036.0], [71.5, 1036.0], [71.6, 1036.0], [71.7, 1036.0], [71.8, 1037.0], [71.9, 1039.0], [72.0, 1039.0], [72.1, 1039.0], [72.2, 1039.0], [72.3, 1041.0], [72.4, 1041.0], [72.5, 1041.0], [72.6, 1042.0], [72.7, 1042.0], [72.8, 1043.0], [72.9, 1043.0], [73.0, 1044.0], [73.1, 1044.0], [73.2, 1045.0], [73.3, 1045.0], [73.4, 1045.0], [73.5, 1046.0], [73.6, 1046.0], [73.7, 1046.0], [73.8, 1047.0], [73.9, 1048.0], [74.0, 1048.0], [74.1, 1048.0], [74.2, 1048.0], [74.3, 1049.0], [74.4, 1049.0], [74.5, 1049.0], [74.6, 1051.0], [74.7, 1052.0], [74.8, 1052.0], [74.9, 1052.0], [75.0, 1053.0], [75.1, 1053.0], [75.2, 1054.0], [75.3, 1055.0], [75.4, 1056.0], [75.5, 1056.0], [75.6, 1057.0], [75.7, 1057.0], [75.8, 1058.0], [75.9, 1058.0], [76.0, 1058.0], [76.1, 1059.0], [76.2, 1059.0], [76.3, 1059.0], [76.4, 1061.0], [76.5, 1062.0], [76.6, 1063.0], [76.7, 1063.0], [76.8, 1065.0], [76.9, 1065.0], [77.0, 1065.0], [77.1, 1066.0], [77.2, 1067.0], [77.3, 1069.0], [77.4, 1069.0], [77.5, 1071.0], [77.6, 1073.0], [77.7, 1074.0], [77.8, 1074.0], [77.9, 1074.0], [78.0, 1075.0], [78.1, 1075.0], [78.2, 1075.0], [78.3, 1075.0], [78.4, 1077.0], [78.5, 1077.0], [78.6, 1077.0], [78.7, 1077.0], [78.8, 1078.0], [78.9, 1078.0], [79.0, 1078.0], [79.1, 1081.0], [79.2, 1081.0], [79.3, 1081.0], [79.4, 1081.0], [79.5, 1082.0], [79.6, 1083.0], [79.7, 1083.0], [79.8, 1083.0], [79.9, 1083.0], [80.0, 1086.0], [80.1, 1086.0], [80.2, 1086.0], [80.3, 1091.0], [80.4, 1091.0], [80.5, 1092.0], [80.6, 1093.0], [80.7, 1095.0], [80.8, 1095.0], [80.9, 1096.0], [81.0, 1096.0], [81.1, 1096.0], [81.2, 1096.0], [81.3, 1097.0], [81.4, 1097.0], [81.5, 1098.0], [81.6, 1098.0], [81.7, 1099.0], [81.8, 1100.0], [81.9, 1100.0], [82.0, 1102.0], [82.1, 1102.0], [82.2, 1102.0], [82.3, 1102.0], [82.4, 1103.0], [82.5, 1103.0], [82.6, 1107.0], [82.7, 1107.0], [82.8, 1108.0], [82.9, 1109.0], [83.0, 1113.0], [83.1, 1113.0], [83.2, 1116.0], [83.3, 1118.0], [83.4, 1118.0], [83.5, 1119.0], [83.6, 1120.0], [83.7, 1121.0], [83.8, 1121.0], [83.9, 1121.0], [84.0, 1121.0], [84.1, 1123.0], [84.2, 1123.0], [84.3, 1124.0], [84.4, 1128.0], [84.5, 1128.0], [84.6, 1128.0], [84.7, 1131.0], [84.8, 1133.0], [84.9, 1134.0], [85.0, 1134.0], [85.1, 1137.0], [85.2, 1140.0], [85.3, 1140.0], [85.4, 1140.0], [85.5, 1140.0], [85.6, 1146.0], [85.7, 1146.0], [85.8, 1148.0], [85.9, 1148.0], [86.0, 1150.0], [86.1, 1150.0], [86.2, 1151.0], [86.3, 1153.0], [86.4, 1153.0], [86.5, 1153.0], [86.6, 1154.0], [86.7, 1155.0], [86.8, 1155.0], [86.9, 1157.0], [87.0, 1159.0], [87.1, 1164.0], [87.2, 1164.0], [87.3, 1164.0], [87.4, 1165.0], [87.5, 1167.0], [87.6, 1167.0], [87.7, 1168.0], [87.8, 1170.0], [87.9, 1173.0], [88.0, 1173.0], [88.1, 1179.0], [88.2, 1179.0], [88.3, 1183.0], [88.4, 1183.0], [88.5, 1185.0], [88.6, 1186.0], [88.7, 1186.0], [88.8, 1187.0], [88.9, 1188.0], [89.0, 1189.0], [89.1, 1189.0], [89.2, 1192.0], [89.3, 1194.0], [89.4, 1194.0], [89.5, 1194.0], [89.6, 1195.0], [89.7, 1195.0], [89.8, 1196.0], [89.9, 1196.0], [90.0, 1202.0], [90.1, 1203.0], [90.2, 1203.0], [90.3, 1203.0], [90.4, 1203.0], [90.5, 1204.0], [90.6, 1204.0], [90.7, 1208.0], [90.8, 1209.0], [90.9, 1209.0], [91.0, 1209.0], [91.1, 1214.0], [91.2, 1216.0], [91.3, 1219.0], [91.4, 1219.0], [91.5, 1221.0], [91.6, 1222.0], [91.7, 1222.0], [91.8, 1222.0], [91.9, 1222.0], [92.0, 1222.0], [92.1, 1222.0], [92.2, 1223.0], [92.3, 1225.0], [92.4, 1228.0], [92.5, 1228.0], [92.6, 1241.0], [92.7, 1241.0], [92.8, 1247.0], [92.9, 1247.0], [93.0, 1249.0], [93.1, 1249.0], [93.2, 1251.0], [93.3, 1251.0], [93.4, 1251.0], [93.5, 1253.0], [93.6, 1253.0], [93.7, 1253.0], [93.8, 1257.0], [93.9, 1260.0], [94.0, 1260.0], [94.1, 1271.0], [94.2, 1284.0], [94.3, 1284.0], [94.4, 1284.0], [94.5, 1285.0], [94.6, 1286.0], [94.7, 1291.0], [94.8, 1291.0], [94.9, 1293.0], [95.0, 1295.0], [95.1, 1295.0], [95.2, 1305.0], [95.3, 1309.0], [95.4, 1311.0], [95.5, 1311.0], [95.6, 1316.0], [95.7, 1332.0], [95.8, 1336.0], [95.9, 1336.0], [96.0, 1345.0], [96.1, 1349.0], [96.2, 1362.0], [96.3, 1362.0], [96.4, 1367.0], [96.5, 1374.0], [96.6, 1390.0], [96.7, 1390.0], [96.8, 1451.0], [96.9, 1454.0], [97.0, 1454.0], [97.1, 1467.0], [97.2, 1539.0], [97.3, 1545.0], [97.4, 1545.0], [97.5, 1671.0], [97.6, 1675.0], [97.7, 1699.0], [97.8, 1699.0], [97.9, 1846.0], [98.0, 1880.0], [98.1, 1900.0], [98.2, 1900.0], [98.3, 1919.0], [98.4, 1923.0], [98.5, 1923.0], [98.6, 1996.0], [98.7, 2041.0], [98.8, 2049.0], [98.9, 2049.0], [99.0, 2104.0], [99.1, 2244.0], [99.2, 2433.0], [99.3, 2433.0], [99.4, 2511.0], [99.5, 2654.0], [99.6, 2658.0], [99.7, 2658.0], [99.8, 2703.0], [99.9, 2788.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 138.0, "series": [{"data": [[600.0, 53.0], [700.0, 24.0], [800.0, 42.0], [900.0, 55.0], [1000.0, 138.0], [1100.0, 60.0], [1200.0, 38.0], [1300.0, 12.0], [1400.0, 3.0], [1500.0, 2.0], [100.0, 16.0], [1600.0, 3.0], [1800.0, 2.0], [1900.0, 4.0], [2000.0, 2.0], [2100.0, 1.0], [2200.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 2.0], [2700.0, 2.0], [200.0, 44.0], [300.0, 49.0], [400.0, 69.0], [500.0, 111.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 21.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 535.0, "series": [{"data": [[0.0, 179.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 535.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 21.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.86994219653179, "minX": 1.6024623E12, "maxY": 9.997429305912606, "series": [{"data": [[1.6024623E12, 9.997429305912606], [1.60246236E12, 9.86994219653179]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246236E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 225.0, "minX": 1.0, "maxY": 1284.0, "series": [{"data": [[8.0, 225.0], [4.0, 413.0], [2.0, 1026.0], [1.0, 1004.0], [9.0, 941.5], [10.0, 799.6482758620691], [5.0, 440.0], [6.0, 505.0], [3.0, 476.0], [7.0, 1284.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.937414965986395, 798.6408163265304]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2667.3166666666666, "minX": 1.6024623E12, "maxY": 985161.9, "series": [{"data": [[1.6024623E12, 985161.9], [1.60246236E12, 751756.9666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6024623E12, 3002.7166666666667], [1.60246236E12, 2667.3166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246236E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 794.7687861271677, "minX": 1.6024623E12, "maxY": 802.084832904884, "series": [{"data": [[1.6024623E12, 802.084832904884], [1.60246236E12, 794.7687861271677]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246236E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 793.6907514450868, "minX": 1.6024623E12, "maxY": 800.8303341902314, "series": [{"data": [[1.6024623E12, 800.8303341902314], [1.60246236E12, 793.6907514450868]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246236E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008670520231213869, "minX": 1.6024623E12, "maxY": 0.20308483290488447, "series": [{"data": [[1.6024623E12, 0.20308483290488447], [1.60246236E12, 0.008670520231213869]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246236E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 133.0, "minX": 1.6024623E12, "maxY": 2788.0, "series": [{"data": [[1.6024623E12, 2788.0], [1.60246236E12, 2104.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6024623E12, 143.0], [1.60246236E12, 138.98399933815003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6024623E12, 143.0], [1.60246236E12, 141.48240026474]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6024623E12, 143.0], [1.60246236E12, 140.37199966907502]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6024623E12, 138.0], [1.60246236E12, 133.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6024623E12, 749.0], [1.60246236E12, 831.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246236E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 297.0, "minX": 2.0, "maxY": 2433.0, "series": [{"data": [[2.0, 533.0], [8.0, 817.5], [9.0, 1051.5], [10.0, 950.0], [11.0, 1012.0], [12.0, 997.0], [13.0, 762.5], [14.0, 703.0], [15.0, 480.0], [4.0, 297.0], [16.0, 538.0], [17.0, 514.0], [18.0, 508.0], [19.0, 462.0], [26.0, 442.0], [7.0, 2433.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 297.0, "minX": 2.0, "maxY": 2431.0, "series": [{"data": [[2.0, 530.5], [8.0, 816.5], [9.0, 1050.0], [10.0, 948.5], [11.0, 1011.0], [12.0, 996.0], [13.0, 762.0], [14.0, 702.0], [15.0, 480.0], [4.0, 297.0], [16.0, 538.0], [17.0, 514.0], [18.0, 507.5], [19.0, 462.0], [26.0, 441.0], [7.0, 2431.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.6, "minX": 1.6024623E12, "maxY": 6.65, "series": [{"data": [[1.6024623E12, 6.65], [1.60246236E12, 5.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246236E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.766666666666667, "minX": 1.6024623E12, "maxY": 6.483333333333333, "series": [{"data": [[1.6024623E12, 6.483333333333333], [1.60246236E12, 5.766666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246236E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.766666666666667, "minX": 1.6024623E12, "maxY": 6.483333333333333, "series": [{"data": [[1.6024623E12, 6.483333333333333], [1.60246236E12, 5.766666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246236E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.766666666666667, "minX": 1.6024623E12, "maxY": 6.483333333333333, "series": [{"data": [[1.6024623E12, 6.483333333333333], [1.60246236E12, 5.766666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246236E12, "title": "Total Transactions Per Second"}},
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

