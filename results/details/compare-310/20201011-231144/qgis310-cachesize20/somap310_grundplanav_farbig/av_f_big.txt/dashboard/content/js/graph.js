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
        data: {"result": {"minY": 180.0, "minX": 0.0, "maxY": 3630.0, "series": [{"data": [[0.0, 180.0], [0.1, 180.0], [0.2, 180.0], [0.3, 187.0], [0.4, 187.0], [0.5, 188.0], [0.6, 188.0], [0.7, 192.0], [0.8, 192.0], [0.9, 193.0], [1.0, 202.0], [1.1, 203.0], [1.2, 203.0], [1.3, 204.0], [1.4, 208.0], [1.5, 213.0], [1.6, 213.0], [1.7, 214.0], [1.8, 216.0], [1.9, 216.0], [2.0, 223.0], [2.1, 230.0], [2.2, 230.0], [2.3, 230.0], [2.4, 233.0], [2.5, 235.0], [2.6, 236.0], [2.7, 236.0], [2.8, 236.0], [2.9, 240.0], [3.0, 246.0], [3.1, 246.0], [3.2, 247.0], [3.3, 248.0], [3.4, 248.0], [3.5, 250.0], [3.6, 251.0], [3.7, 253.0], [3.8, 253.0], [3.9, 253.0], [4.0, 258.0], [4.1, 259.0], [4.2, 259.0], [4.3, 259.0], [4.4, 261.0], [4.5, 266.0], [4.6, 266.0], [4.7, 267.0], [4.8, 272.0], [4.9, 273.0], [5.0, 273.0], [5.1, 275.0], [5.2, 275.0], [5.3, 275.0], [5.4, 277.0], [5.5, 278.0], [5.6, 278.0], [5.7, 278.0], [5.8, 281.0], [5.9, 284.0], [6.0, 285.0], [6.1, 285.0], [6.2, 287.0], [6.3, 289.0], [6.4, 291.0], [6.5, 291.0], [6.6, 291.0], [6.7, 291.0], [6.8, 291.0], [6.9, 291.0], [7.0, 293.0], [7.1, 295.0], [7.2, 295.0], [7.3, 297.0], [7.4, 299.0], [7.5, 301.0], [7.6, 301.0], [7.7, 301.0], [7.8, 309.0], [7.9, 309.0], [8.0, 309.0], [8.1, 309.0], [8.2, 311.0], [8.3, 317.0], [8.4, 317.0], [8.5, 318.0], [8.6, 319.0], [8.7, 319.0], [8.8, 320.0], [8.9, 321.0], [9.0, 324.0], [9.1, 324.0], [9.2, 324.0], [9.3, 325.0], [9.4, 326.0], [9.5, 326.0], [9.6, 329.0], [9.7, 331.0], [9.8, 335.0], [9.9, 335.0], [10.0, 337.0], [10.1, 341.0], [10.2, 341.0], [10.3, 341.0], [10.4, 344.0], [10.5, 344.0], [10.6, 344.0], [10.7, 344.0], [10.8, 345.0], [10.9, 346.0], [11.0, 346.0], [11.1, 348.0], [11.2, 348.0], [11.3, 349.0], [11.4, 349.0], [11.5, 353.0], [11.6, 354.0], [11.7, 354.0], [11.8, 354.0], [11.9, 354.0], [12.0, 356.0], [12.1, 356.0], [12.2, 362.0], [12.3, 362.0], [12.4, 366.0], [12.5, 366.0], [12.6, 366.0], [12.7, 369.0], [12.8, 373.0], [12.9, 373.0], [13.0, 375.0], [13.1, 378.0], [13.2, 379.0], [13.3, 379.0], [13.4, 382.0], [13.5, 384.0], [13.6, 384.0], [13.7, 387.0], [13.8, 388.0], [13.9, 389.0], [14.0, 389.0], [14.1, 389.0], [14.2, 393.0], [14.3, 396.0], [14.4, 396.0], [14.5, 400.0], [14.6, 400.0], [14.7, 402.0], [14.8, 402.0], [14.9, 409.0], [15.0, 411.0], [15.1, 411.0], [15.2, 412.0], [15.3, 413.0], [15.4, 415.0], [15.5, 415.0], [15.6, 416.0], [15.7, 421.0], [15.8, 421.0], [15.9, 421.0], [16.0, 422.0], [16.1, 423.0], [16.2, 424.0], [16.3, 424.0], [16.4, 428.0], [16.5, 430.0], [16.6, 432.0], [16.7, 432.0], [16.8, 439.0], [16.9, 441.0], [17.0, 441.0], [17.1, 444.0], [17.2, 447.0], [17.3, 449.0], [17.4, 449.0], [17.5, 452.0], [17.6, 454.0], [17.7, 461.0], [17.8, 461.0], [17.9, 464.0], [18.0, 467.0], [18.1, 469.0], [18.2, 469.0], [18.3, 476.0], [18.4, 477.0], [18.5, 477.0], [18.6, 478.0], [18.7, 485.0], [18.8, 487.0], [18.9, 487.0], [19.0, 489.0], [19.1, 490.0], [19.2, 490.0], [19.3, 490.0], [19.4, 491.0], [19.5, 492.0], [19.6, 493.0], [19.7, 493.0], [19.8, 493.0], [19.9, 497.0], [20.0, 497.0], [20.1, 499.0], [20.2, 503.0], [20.3, 503.0], [20.4, 503.0], [20.5, 503.0], [20.6, 508.0], [20.7, 508.0], [20.8, 508.0], [20.9, 509.0], [21.0, 509.0], [21.1, 511.0], [21.2, 511.0], [21.3, 511.0], [21.4, 513.0], [21.5, 513.0], [21.6, 513.0], [21.7, 513.0], [21.8, 515.0], [21.9, 515.0], [22.0, 516.0], [22.1, 518.0], [22.2, 518.0], [22.3, 518.0], [22.4, 519.0], [22.5, 520.0], [22.6, 522.0], [22.7, 522.0], [22.8, 524.0], [22.9, 526.0], [23.0, 529.0], [23.1, 529.0], [23.2, 530.0], [23.3, 530.0], [23.4, 530.0], [23.5, 530.0], [23.6, 532.0], [23.7, 532.0], [23.8, 532.0], [23.9, 533.0], [24.0, 533.0], [24.1, 534.0], [24.2, 534.0], [24.3, 534.0], [24.4, 535.0], [24.5, 536.0], [24.6, 536.0], [24.7, 537.0], [24.8, 539.0], [24.9, 542.0], [25.0, 542.0], [25.1, 544.0], [25.2, 544.0], [25.3, 544.0], [25.4, 544.0], [25.5, 545.0], [25.6, 546.0], [25.7, 546.0], [25.8, 546.0], [25.9, 547.0], [26.0, 548.0], [26.1, 548.0], [26.2, 548.0], [26.3, 548.0], [26.4, 549.0], [26.5, 549.0], [26.6, 551.0], [26.7, 551.0], [26.8, 551.0], [26.9, 552.0], [27.0, 554.0], [27.1, 556.0], [27.2, 556.0], [27.3, 558.0], [27.4, 560.0], [27.5, 562.0], [27.6, 562.0], [27.7, 569.0], [27.8, 576.0], [27.9, 576.0], [28.0, 576.0], [28.1, 576.0], [28.2, 577.0], [28.3, 578.0], [28.4, 578.0], [28.5, 580.0], [28.6, 581.0], [28.7, 581.0], [28.8, 581.0], [28.9, 582.0], [29.0, 584.0], [29.1, 584.0], [29.2, 584.0], [29.3, 585.0], [29.4, 587.0], [29.5, 587.0], [29.6, 589.0], [29.7, 590.0], [29.8, 590.0], [29.9, 590.0], [30.0, 591.0], [30.1, 592.0], [30.2, 592.0], [30.3, 592.0], [30.4, 592.0], [30.5, 593.0], [30.6, 593.0], [30.7, 595.0], [30.8, 597.0], [30.9, 598.0], [31.0, 598.0], [31.1, 598.0], [31.2, 599.0], [31.3, 601.0], [31.4, 601.0], [31.5, 602.0], [31.6, 602.0], [31.7, 602.0], [31.8, 602.0], [31.9, 603.0], [32.0, 604.0], [32.1, 604.0], [32.2, 605.0], [32.3, 605.0], [32.4, 606.0], [32.5, 606.0], [32.6, 606.0], [32.7, 609.0], [32.8, 611.0], [32.9, 611.0], [33.0, 613.0], [33.1, 614.0], [33.2, 616.0], [33.3, 616.0], [33.4, 617.0], [33.5, 617.0], [33.6, 617.0], [33.7, 618.0], [33.8, 619.0], [33.9, 619.0], [34.0, 619.0], [34.1, 619.0], [34.2, 620.0], [34.3, 621.0], [34.4, 621.0], [34.5, 623.0], [34.6, 624.0], [34.7, 626.0], [34.8, 626.0], [34.9, 628.0], [35.0, 629.0], [35.1, 629.0], [35.2, 631.0], [35.3, 631.0], [35.4, 635.0], [35.5, 635.0], [35.6, 636.0], [35.7, 637.0], [35.8, 640.0], [35.9, 640.0], [36.0, 640.0], [36.1, 640.0], [36.2, 641.0], [36.3, 641.0], [36.4, 641.0], [36.5, 642.0], [36.6, 644.0], [36.7, 644.0], [36.8, 644.0], [36.9, 644.0], [37.0, 644.0], [37.1, 647.0], [37.2, 647.0], [37.3, 648.0], [37.4, 648.0], [37.5, 648.0], [37.6, 649.0], [37.7, 649.0], [37.8, 649.0], [37.9, 650.0], [38.0, 650.0], [38.1, 650.0], [38.2, 650.0], [38.3, 653.0], [38.4, 657.0], [38.5, 657.0], [38.6, 657.0], [38.7, 658.0], [38.8, 658.0], [38.9, 658.0], [39.0, 659.0], [39.1, 659.0], [39.2, 661.0], [39.3, 661.0], [39.4, 664.0], [39.5, 667.0], [39.6, 667.0], [39.7, 667.0], [39.8, 668.0], [39.9, 668.0], [40.0, 670.0], [40.1, 670.0], [40.2, 673.0], [40.3, 675.0], [40.4, 675.0], [40.5, 675.0], [40.6, 676.0], [40.7, 676.0], [40.8, 676.0], [40.9, 677.0], [41.0, 678.0], [41.1, 678.0], [41.2, 678.0], [41.3, 684.0], [41.4, 686.0], [41.5, 688.0], [41.6, 688.0], [41.7, 688.0], [41.8, 689.0], [41.9, 689.0], [42.0, 690.0], [42.1, 690.0], [42.2, 692.0], [42.3, 692.0], [42.4, 695.0], [42.5, 698.0], [42.6, 699.0], [42.7, 699.0], [42.8, 700.0], [42.9, 700.0], [43.0, 701.0], [43.1, 701.0], [43.2, 705.0], [43.3, 706.0], [43.4, 706.0], [43.5, 708.0], [43.6, 709.0], [43.7, 709.0], [43.8, 709.0], [43.9, 711.0], [44.0, 711.0], [44.1, 713.0], [44.2, 713.0], [44.3, 713.0], [44.4, 717.0], [44.5, 718.0], [44.6, 718.0], [44.7, 720.0], [44.8, 721.0], [44.9, 721.0], [45.0, 721.0], [45.1, 722.0], [45.2, 723.0], [45.3, 723.0], [45.4, 725.0], [45.5, 729.0], [45.6, 734.0], [45.7, 734.0], [45.8, 736.0], [45.9, 738.0], [46.0, 738.0], [46.1, 738.0], [46.2, 740.0], [46.3, 741.0], [46.4, 745.0], [46.5, 745.0], [46.6, 747.0], [46.7, 748.0], [46.8, 748.0], [46.9, 750.0], [47.0, 752.0], [47.1, 756.0], [47.2, 756.0], [47.3, 758.0], [47.4, 759.0], [47.5, 759.0], [47.6, 759.0], [47.7, 760.0], [47.8, 760.0], [47.9, 761.0], [48.0, 761.0], [48.1, 762.0], [48.2, 765.0], [48.3, 766.0], [48.4, 766.0], [48.5, 771.0], [48.6, 779.0], [48.7, 779.0], [48.8, 780.0], [48.9, 781.0], [49.0, 784.0], [49.1, 784.0], [49.2, 784.0], [49.3, 784.0], [49.4, 788.0], [49.5, 788.0], [49.6, 791.0], [49.7, 791.0], [49.8, 792.0], [49.9, 792.0], [50.0, 792.0], [50.1, 792.0], [50.2, 792.0], [50.3, 795.0], [50.4, 796.0], [50.5, 796.0], [50.6, 796.0], [50.7, 804.0], [50.8, 809.0], [50.9, 809.0], [51.0, 809.0], [51.1, 810.0], [51.2, 813.0], [51.3, 816.0], [51.4, 816.0], [51.5, 817.0], [51.6, 818.0], [51.7, 818.0], [51.8, 822.0], [51.9, 823.0], [52.0, 825.0], [52.1, 825.0], [52.2, 825.0], [52.3, 826.0], [52.4, 826.0], [52.5, 826.0], [52.6, 829.0], [52.7, 830.0], [52.8, 832.0], [52.9, 832.0], [53.0, 838.0], [53.1, 839.0], [53.2, 841.0], [53.3, 841.0], [53.4, 842.0], [53.5, 842.0], [53.6, 842.0], [53.7, 842.0], [53.8, 845.0], [53.9, 846.0], [54.0, 846.0], [54.1, 848.0], [54.2, 849.0], [54.3, 850.0], [54.4, 850.0], [54.5, 851.0], [54.6, 851.0], [54.7, 851.0], [54.8, 851.0], [54.9, 857.0], [55.0, 861.0], [55.1, 861.0], [55.2, 862.0], [55.3, 862.0], [55.4, 863.0], [55.5, 863.0], [55.6, 863.0], [55.7, 865.0], [55.8, 869.0], [55.9, 869.0], [56.0, 869.0], [56.1, 870.0], [56.2, 871.0], [56.3, 871.0], [56.4, 874.0], [56.5, 880.0], [56.6, 881.0], [56.7, 881.0], [56.8, 882.0], [56.9, 883.0], [57.0, 883.0], [57.1, 883.0], [57.2, 884.0], [57.3, 885.0], [57.4, 885.0], [57.5, 886.0], [57.6, 887.0], [57.7, 887.0], [57.8, 887.0], [57.9, 888.0], [58.0, 890.0], [58.1, 891.0], [58.2, 891.0], [58.3, 892.0], [58.4, 896.0], [58.5, 896.0], [58.6, 900.0], [58.7, 900.0], [58.8, 904.0], [58.9, 904.0], [59.0, 905.0], [59.1, 906.0], [59.2, 906.0], [59.3, 906.0], [59.4, 906.0], [59.5, 908.0], [59.6, 909.0], [59.7, 909.0], [59.8, 910.0], [59.9, 910.0], [60.0, 911.0], [60.1, 911.0], [60.2, 911.0], [60.3, 912.0], [60.4, 912.0], [60.5, 913.0], [60.6, 914.0], [60.7, 914.0], [60.8, 914.0], [60.9, 919.0], [61.0, 920.0], [61.1, 920.0], [61.2, 920.0], [61.3, 923.0], [61.4, 927.0], [61.5, 927.0], [61.6, 927.0], [61.7, 928.0], [61.8, 929.0], [61.9, 929.0], [62.0, 929.0], [62.1, 930.0], [62.2, 930.0], [62.3, 930.0], [62.4, 932.0], [62.5, 935.0], [62.6, 935.0], [62.7, 935.0], [62.8, 938.0], [62.9, 938.0], [63.0, 942.0], [63.1, 942.0], [63.2, 942.0], [63.3, 946.0], [63.4, 946.0], [63.5, 946.0], [63.6, 949.0], [63.7, 952.0], [63.8, 952.0], [63.9, 952.0], [64.0, 953.0], [64.1, 954.0], [64.2, 954.0], [64.3, 957.0], [64.4, 957.0], [64.5, 958.0], [64.6, 958.0], [64.7, 959.0], [64.8, 960.0], [64.9, 960.0], [65.0, 960.0], [65.1, 961.0], [65.2, 961.0], [65.3, 961.0], [65.4, 962.0], [65.5, 962.0], [65.6, 965.0], [65.7, 965.0], [65.8, 969.0], [65.9, 970.0], [66.0, 973.0], [66.1, 973.0], [66.2, 973.0], [66.3, 973.0], [66.4, 975.0], [66.5, 975.0], [66.6, 976.0], [66.7, 979.0], [66.8, 979.0], [66.9, 980.0], [67.0, 981.0], [67.1, 981.0], [67.2, 981.0], [67.3, 982.0], [67.4, 982.0], [67.5, 983.0], [67.6, 983.0], [67.7, 983.0], [67.8, 984.0], [67.9, 986.0], [68.0, 986.0], [68.1, 986.0], [68.2, 987.0], [68.3, 987.0], [68.4, 987.0], [68.5, 988.0], [68.6, 990.0], [68.7, 990.0], [68.8, 990.0], [68.9, 991.0], [69.0, 993.0], [69.1, 993.0], [69.2, 994.0], [69.3, 994.0], [69.4, 995.0], [69.5, 995.0], [69.6, 998.0], [69.7, 1001.0], [69.8, 1002.0], [69.9, 1002.0], [70.0, 1004.0], [70.1, 1005.0], [70.2, 1005.0], [70.3, 1005.0], [70.4, 1005.0], [70.5, 1009.0], [70.6, 1009.0], [70.7, 1009.0], [70.8, 1011.0], [70.9, 1011.0], [71.0, 1011.0], [71.1, 1011.0], [71.2, 1013.0], [71.3, 1013.0], [71.4, 1013.0], [71.5, 1013.0], [71.6, 1015.0], [71.7, 1015.0], [71.8, 1016.0], [71.9, 1019.0], [72.0, 1020.0], [72.1, 1020.0], [72.2, 1020.0], [72.3, 1020.0], [72.4, 1020.0], [72.5, 1020.0], [72.6, 1021.0], [72.7, 1021.0], [72.8, 1022.0], [72.9, 1022.0], [73.0, 1023.0], [73.1, 1024.0], [73.2, 1026.0], [73.3, 1026.0], [73.4, 1027.0], [73.5, 1027.0], [73.6, 1027.0], [73.7, 1029.0], [73.8, 1030.0], [73.9, 1032.0], [74.0, 1032.0], [74.1, 1032.0], [74.2, 1032.0], [74.3, 1033.0], [74.4, 1033.0], [74.5, 1033.0], [74.6, 1035.0], [74.7, 1037.0], [74.8, 1037.0], [74.9, 1037.0], [75.0, 1038.0], [75.1, 1038.0], [75.2, 1039.0], [75.3, 1040.0], [75.4, 1042.0], [75.5, 1042.0], [75.6, 1043.0], [75.7, 1044.0], [75.8, 1048.0], [75.9, 1048.0], [76.0, 1049.0], [76.1, 1050.0], [76.2, 1052.0], [76.3, 1052.0], [76.4, 1053.0], [76.5, 1054.0], [76.6, 1058.0], [76.7, 1058.0], [76.8, 1059.0], [76.9, 1060.0], [77.0, 1060.0], [77.1, 1060.0], [77.2, 1062.0], [77.3, 1063.0], [77.4, 1063.0], [77.5, 1064.0], [77.6, 1065.0], [77.7, 1068.0], [77.8, 1068.0], [77.9, 1068.0], [78.0, 1068.0], [78.1, 1068.0], [78.2, 1068.0], [78.3, 1071.0], [78.4, 1073.0], [78.5, 1073.0], [78.6, 1073.0], [78.7, 1076.0], [78.8, 1077.0], [78.9, 1077.0], [79.0, 1079.0], [79.1, 1087.0], [79.2, 1087.0], [79.3, 1087.0], [79.4, 1088.0], [79.5, 1091.0], [79.6, 1096.0], [79.7, 1096.0], [79.8, 1097.0], [79.9, 1097.0], [80.0, 1097.0], [80.1, 1097.0], [80.2, 1099.0], [80.3, 1102.0], [80.4, 1102.0], [80.5, 1105.0], [80.6, 1107.0], [80.7, 1107.0], [80.8, 1107.0], [80.9, 1108.0], [81.0, 1109.0], [81.1, 1109.0], [81.2, 1109.0], [81.3, 1111.0], [81.4, 1112.0], [81.5, 1112.0], [81.6, 1112.0], [81.7, 1112.0], [81.8, 1113.0], [81.9, 1113.0], [82.0, 1113.0], [82.1, 1117.0], [82.2, 1119.0], [82.3, 1119.0], [82.4, 1119.0], [82.5, 1121.0], [82.6, 1121.0], [82.7, 1121.0], [82.8, 1121.0], [82.9, 1123.0], [83.0, 1124.0], [83.1, 1124.0], [83.2, 1125.0], [83.3, 1129.0], [83.4, 1129.0], [83.5, 1133.0], [83.6, 1136.0], [83.7, 1137.0], [83.8, 1137.0], [83.9, 1138.0], [84.0, 1138.0], [84.1, 1144.0], [84.2, 1144.0], [84.3, 1146.0], [84.4, 1148.0], [84.5, 1151.0], [84.6, 1151.0], [84.7, 1155.0], [84.8, 1156.0], [84.9, 1156.0], [85.0, 1156.0], [85.1, 1157.0], [85.2, 1159.0], [85.3, 1159.0], [85.4, 1160.0], [85.5, 1161.0], [85.6, 1162.0], [85.7, 1162.0], [85.8, 1166.0], [85.9, 1167.0], [86.0, 1168.0], [86.1, 1168.0], [86.2, 1169.0], [86.3, 1174.0], [86.4, 1178.0], [86.5, 1178.0], [86.6, 1180.0], [86.7, 1181.0], [86.8, 1181.0], [86.9, 1188.0], [87.0, 1190.0], [87.1, 1192.0], [87.2, 1192.0], [87.3, 1194.0], [87.4, 1195.0], [87.5, 1198.0], [87.6, 1198.0], [87.7, 1200.0], [87.8, 1201.0], [87.9, 1211.0], [88.0, 1211.0], [88.1, 1213.0], [88.2, 1213.0], [88.3, 1214.0], [88.4, 1214.0], [88.5, 1218.0], [88.6, 1223.0], [88.7, 1223.0], [88.8, 1228.0], [88.9, 1229.0], [89.0, 1229.0], [89.1, 1229.0], [89.2, 1233.0], [89.3, 1234.0], [89.4, 1235.0], [89.5, 1235.0], [89.6, 1235.0], [89.7, 1238.0], [89.8, 1238.0], [89.9, 1238.0], [90.0, 1244.0], [90.1, 1245.0], [90.2, 1245.0], [90.3, 1247.0], [90.4, 1250.0], [90.5, 1251.0], [90.6, 1251.0], [90.7, 1258.0], [90.8, 1265.0], [90.9, 1272.0], [91.0, 1272.0], [91.1, 1296.0], [91.2, 1297.0], [91.3, 1299.0], [91.4, 1299.0], [91.5, 1303.0], [91.6, 1308.0], [91.7, 1308.0], [91.8, 1311.0], [91.9, 1316.0], [92.0, 1317.0], [92.1, 1317.0], [92.2, 1321.0], [92.3, 1325.0], [92.4, 1343.0], [92.5, 1343.0], [92.6, 1346.0], [92.7, 1353.0], [92.8, 1355.0], [92.9, 1355.0], [93.0, 1360.0], [93.1, 1375.0], [93.2, 1386.0], [93.3, 1386.0], [93.4, 1419.0], [93.5, 1429.0], [93.6, 1429.0], [93.7, 1431.0], [93.8, 1434.0], [93.9, 1448.0], [94.0, 1448.0], [94.1, 1451.0], [94.2, 1466.0], [94.3, 1479.0], [94.4, 1479.0], [94.5, 1483.0], [94.6, 1487.0], [94.7, 1488.0], [94.8, 1488.0], [94.9, 1491.0], [95.0, 1500.0], [95.1, 1500.0], [95.2, 1504.0], [95.3, 1506.0], [95.4, 1531.0], [95.5, 1531.0], [95.6, 1535.0], [95.7, 1543.0], [95.8, 1552.0], [95.9, 1552.0], [96.0, 1567.0], [96.1, 1569.0], [96.2, 1575.0], [96.3, 1575.0], [96.4, 1600.0], [96.5, 1645.0], [96.6, 1669.0], [96.7, 1669.0], [96.8, 1688.0], [96.9, 1699.0], [97.0, 1699.0], [97.1, 1747.0], [97.2, 1772.0], [97.3, 1791.0], [97.4, 1791.0], [97.5, 1821.0], [97.6, 1843.0], [97.7, 1897.0], [97.8, 1897.0], [97.9, 1909.0], [98.0, 1983.0], [98.1, 2040.0], [98.2, 2040.0], [98.3, 2272.0], [98.4, 2276.0], [98.5, 2276.0], [98.6, 2601.0], [98.7, 2658.0], [98.8, 2843.0], [98.9, 2843.0], [99.0, 2912.0], [99.1, 2917.0], [99.2, 2951.0], [99.3, 2951.0], [99.4, 2977.0], [99.5, 3032.0], [99.6, 3124.0], [99.7, 3124.0], [99.8, 3268.0], [99.9, 3630.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 84.0, "series": [{"data": [[600.0, 84.0], [700.0, 58.0], [800.0, 58.0], [900.0, 82.0], [1000.0, 78.0], [1100.0, 54.0], [1200.0, 28.0], [1300.0, 14.0], [1400.0, 12.0], [1500.0, 10.0], [100.0, 7.0], [1600.0, 5.0], [1700.0, 3.0], [1800.0, 3.0], [1900.0, 2.0], [2000.0, 1.0], [2200.0, 2.0], [2600.0, 2.0], [2800.0, 1.0], [2900.0, 4.0], [3000.0, 1.0], [3100.0, 1.0], [3200.0, 1.0], [200.0, 48.0], [3600.0, 1.0], [300.0, 51.0], [400.0, 42.0], [500.0, 82.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 36.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 551.0, "series": [{"data": [[0.0, 148.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 551.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 36.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.53125, "minX": 1.60246026E12, "maxY": 10.0, "series": [{"data": [[1.60246032E12, 9.53125], [1.60246026E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246032E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 309.0, "minX": 1.0, "maxY": 1909.0, "series": [{"data": [[8.0, 309.0], [4.0, 698.0], [2.0, 960.0], [1.0, 1015.0], [9.0, 592.0], [10.0, 831.775482093663], [5.0, 1909.0], [6.0, 613.0], [3.0, 1688.0], [7.0, 628.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 833.0353741496589]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 711.0166666666667, "minX": 1.60246026E12, "maxY": 1620009.8166666667, "series": [{"data": [[1.60246032E12, 215770.98333333334], [1.60246026E12, 1620009.8166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246032E12, 711.0166666666667], [1.60246026E12, 4812.016666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246032E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 748.3124999999999, "minX": 1.60246026E12, "maxY": 845.7636932707348, "series": [{"data": [[1.60246032E12, 748.3124999999999], [1.60246026E12, 845.7636932707348]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246032E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 747.2083333333335, "minX": 1.60246026E12, "maxY": 844.561815336464, "series": [{"data": [[1.60246032E12, 747.2083333333335], [1.60246026E12, 844.561815336464]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246032E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.062499999999999986, "minX": 1.60246026E12, "maxY": 0.19248826291079824, "series": [{"data": [[1.60246032E12, 0.062499999999999986], [1.60246026E12, 0.19248826291079824]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246032E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 180.0, "minX": 1.60246026E12, "maxY": 3630.0, "series": [{"data": [[1.60246032E12, 2040.0], [1.60246026E12, 3630.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246032E12, 236.0], [1.60246026E12, 191.03999938964844]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246032E12, 236.0], [1.60246026E12, 192.33600006103515]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246032E12, 236.0], [1.60246026E12, 192.07999992370605]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246032E12, 236.0], [1.60246026E12, 180.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246032E12, 668.5], [1.60246026E12, 822.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246032E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 533.0, "minX": 3.0, "maxY": 1251.0, "series": [{"data": [[8.0, 849.5], [9.0, 993.0], [10.0, 942.0], [11.0, 889.0], [12.0, 848.5], [3.0, 1015.0], [13.0, 874.5], [14.0, 786.0], [15.0, 653.0], [16.0, 591.0], [17.0, 635.5], [19.0, 533.0], [7.0, 1251.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 529.5, "minX": 3.0, "maxY": 1251.0, "series": [{"data": [[8.0, 849.0], [9.0, 992.5], [10.0, 942.0], [11.0, 887.5], [12.0, 847.0], [3.0, 1015.0], [13.0, 870.0], [14.0, 785.0], [15.0, 653.0], [16.0, 589.0], [17.0, 634.5], [19.0, 529.5], [7.0, 1251.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4333333333333333, "minX": 1.60246026E12, "maxY": 10.816666666666666, "series": [{"data": [[1.60246032E12, 1.4333333333333333], [1.60246026E12, 10.816666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246032E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6, "minX": 1.60246026E12, "maxY": 10.65, "series": [{"data": [[1.60246032E12, 1.6], [1.60246026E12, 10.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246032E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6, "minX": 1.60246026E12, "maxY": 10.65, "series": [{"data": [[1.60246032E12, 1.6], [1.60246026E12, 10.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246032E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6, "minX": 1.60246026E12, "maxY": 10.65, "series": [{"data": [[1.60246032E12, 1.6], [1.60246026E12, 10.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246032E12, "title": "Total Transactions Per Second"}},
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

