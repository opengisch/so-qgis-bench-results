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
        data: {"result": {"minY": 174.0, "minX": 0.0, "maxY": 3815.0, "series": [{"data": [[0.0, 174.0], [0.1, 174.0], [0.2, 178.0], [0.3, 182.0], [0.4, 182.0], [0.5, 193.0], [0.6, 193.0], [0.7, 199.0], [0.8, 199.0], [0.9, 202.0], [1.0, 207.0], [1.1, 208.0], [1.2, 208.0], [1.3, 212.0], [1.4, 213.0], [1.5, 217.0], [1.6, 217.0], [1.7, 217.0], [1.8, 217.0], [1.9, 217.0], [2.0, 222.0], [2.1, 223.0], [2.2, 224.0], [2.3, 224.0], [2.4, 240.0], [2.5, 240.0], [2.6, 242.0], [2.7, 242.0], [2.8, 244.0], [2.9, 247.0], [3.0, 251.0], [3.1, 251.0], [3.2, 255.0], [3.3, 259.0], [3.4, 259.0], [3.5, 260.0], [3.6, 262.0], [3.7, 262.0], [3.8, 262.0], [3.9, 262.0], [4.0, 263.0], [4.1, 269.0], [4.2, 269.0], [4.3, 270.0], [4.4, 272.0], [4.5, 273.0], [4.6, 273.0], [4.7, 275.0], [4.8, 276.0], [4.9, 277.0], [5.0, 277.0], [5.1, 277.0], [5.2, 277.0], [5.3, 277.0], [5.4, 279.0], [5.5, 283.0], [5.6, 285.0], [5.7, 285.0], [5.8, 286.0], [5.9, 287.0], [6.0, 288.0], [6.1, 288.0], [6.2, 290.0], [6.3, 294.0], [6.4, 295.0], [6.5, 295.0], [6.6, 299.0], [6.7, 301.0], [6.8, 301.0], [6.9, 302.0], [7.0, 302.0], [7.1, 307.0], [7.2, 307.0], [7.3, 311.0], [7.4, 312.0], [7.5, 313.0], [7.6, 313.0], [7.7, 313.0], [7.8, 314.0], [7.9, 314.0], [8.0, 314.0], [8.1, 317.0], [8.2, 318.0], [8.3, 319.0], [8.4, 319.0], [8.5, 321.0], [8.6, 322.0], [8.7, 322.0], [8.8, 325.0], [8.9, 326.0], [9.0, 327.0], [9.1, 327.0], [9.2, 328.0], [9.3, 328.0], [9.4, 328.0], [9.5, 328.0], [9.6, 329.0], [9.7, 331.0], [9.8, 338.0], [9.9, 338.0], [10.0, 340.0], [10.1, 345.0], [10.2, 345.0], [10.3, 345.0], [10.4, 346.0], [10.5, 347.0], [10.6, 347.0], [10.7, 347.0], [10.8, 350.0], [10.9, 351.0], [11.0, 351.0], [11.1, 352.0], [11.2, 354.0], [11.3, 358.0], [11.4, 358.0], [11.5, 359.0], [11.6, 360.0], [11.7, 360.0], [11.8, 360.0], [11.9, 361.0], [12.0, 364.0], [12.1, 364.0], [12.2, 365.0], [12.3, 365.0], [12.4, 366.0], [12.5, 366.0], [12.6, 367.0], [12.7, 369.0], [12.8, 370.0], [12.9, 370.0], [13.0, 371.0], [13.1, 377.0], [13.2, 377.0], [13.3, 377.0], [13.4, 379.0], [13.5, 382.0], [13.6, 382.0], [13.7, 383.0], [13.8, 390.0], [13.9, 396.0], [14.0, 396.0], [14.1, 397.0], [14.2, 397.0], [14.3, 399.0], [14.4, 399.0], [14.5, 399.0], [14.6, 400.0], [14.7, 400.0], [14.8, 400.0], [14.9, 408.0], [15.0, 409.0], [15.1, 409.0], [15.2, 411.0], [15.3, 412.0], [15.4, 412.0], [15.5, 412.0], [15.6, 415.0], [15.7, 415.0], [15.8, 415.0], [15.9, 415.0], [16.0, 416.0], [16.1, 418.0], [16.2, 418.0], [16.3, 418.0], [16.4, 420.0], [16.5, 421.0], [16.6, 422.0], [16.7, 422.0], [16.8, 425.0], [16.9, 431.0], [17.0, 431.0], [17.1, 431.0], [17.2, 434.0], [17.3, 434.0], [17.4, 434.0], [17.5, 436.0], [17.6, 446.0], [17.7, 447.0], [17.8, 447.0], [17.9, 449.0], [18.0, 451.0], [18.1, 452.0], [18.2, 452.0], [18.3, 454.0], [18.4, 455.0], [18.5, 455.0], [18.6, 457.0], [18.7, 457.0], [18.8, 461.0], [18.9, 461.0], [19.0, 462.0], [19.1, 464.0], [19.2, 464.0], [19.3, 464.0], [19.4, 465.0], [19.5, 466.0], [19.6, 467.0], [19.7, 467.0], [19.8, 469.0], [19.9, 470.0], [20.0, 471.0], [20.1, 471.0], [20.2, 477.0], [20.3, 478.0], [20.4, 478.0], [20.5, 481.0], [20.6, 481.0], [20.7, 485.0], [20.8, 485.0], [20.9, 492.0], [21.0, 495.0], [21.1, 496.0], [21.2, 496.0], [21.3, 496.0], [21.4, 496.0], [21.5, 497.0], [21.6, 497.0], [21.7, 497.0], [21.8, 497.0], [21.9, 497.0], [22.0, 497.0], [22.1, 501.0], [22.2, 506.0], [22.3, 506.0], [22.4, 507.0], [22.5, 508.0], [22.6, 509.0], [22.7, 509.0], [22.8, 511.0], [22.9, 512.0], [23.0, 516.0], [23.1, 516.0], [23.2, 516.0], [23.3, 517.0], [23.4, 517.0], [23.5, 522.0], [23.6, 525.0], [23.7, 525.0], [23.8, 525.0], [23.9, 528.0], [24.0, 528.0], [24.1, 530.0], [24.2, 530.0], [24.3, 532.0], [24.4, 534.0], [24.5, 535.0], [24.6, 535.0], [24.7, 537.0], [24.8, 539.0], [24.9, 540.0], [25.0, 540.0], [25.1, 541.0], [25.2, 544.0], [25.3, 544.0], [25.4, 544.0], [25.5, 546.0], [25.6, 546.0], [25.7, 546.0], [25.8, 546.0], [25.9, 549.0], [26.0, 551.0], [26.1, 551.0], [26.2, 552.0], [26.3, 553.0], [26.4, 553.0], [26.5, 553.0], [26.6, 555.0], [26.7, 555.0], [26.8, 555.0], [26.9, 555.0], [27.0, 558.0], [27.1, 559.0], [27.2, 559.0], [27.3, 559.0], [27.4, 560.0], [27.5, 560.0], [27.6, 560.0], [27.7, 562.0], [27.8, 562.0], [27.9, 563.0], [28.0, 563.0], [28.1, 563.0], [28.2, 565.0], [28.3, 567.0], [28.4, 567.0], [28.5, 568.0], [28.6, 569.0], [28.7, 569.0], [28.8, 569.0], [28.9, 570.0], [29.0, 572.0], [29.1, 572.0], [29.2, 572.0], [29.3, 572.0], [29.4, 573.0], [29.5, 573.0], [29.6, 573.0], [29.7, 575.0], [29.8, 576.0], [29.9, 576.0], [30.0, 577.0], [30.1, 578.0], [30.2, 578.0], [30.3, 578.0], [30.4, 580.0], [30.5, 584.0], [30.6, 584.0], [30.7, 586.0], [30.8, 586.0], [30.9, 588.0], [31.0, 588.0], [31.1, 589.0], [31.2, 590.0], [31.3, 592.0], [31.4, 592.0], [31.5, 592.0], [31.6, 593.0], [31.7, 593.0], [31.8, 594.0], [31.9, 594.0], [32.0, 595.0], [32.1, 595.0], [32.2, 596.0], [32.3, 596.0], [32.4, 596.0], [32.5, 596.0], [32.6, 598.0], [32.7, 598.0], [32.8, 601.0], [32.9, 601.0], [33.0, 602.0], [33.1, 603.0], [33.2, 604.0], [33.3, 604.0], [33.4, 604.0], [33.5, 608.0], [33.6, 608.0], [33.7, 609.0], [33.8, 609.0], [33.9, 609.0], [34.0, 609.0], [34.1, 615.0], [34.2, 615.0], [34.3, 616.0], [34.4, 616.0], [34.5, 617.0], [34.6, 618.0], [34.7, 621.0], [34.8, 621.0], [34.9, 626.0], [35.0, 628.0], [35.1, 628.0], [35.2, 628.0], [35.3, 628.0], [35.4, 631.0], [35.5, 631.0], [35.6, 637.0], [35.7, 637.0], [35.8, 637.0], [35.9, 637.0], [36.0, 640.0], [36.1, 640.0], [36.2, 641.0], [36.3, 641.0], [36.4, 641.0], [36.5, 642.0], [36.6, 643.0], [36.7, 643.0], [36.8, 644.0], [36.9, 645.0], [37.0, 645.0], [37.1, 648.0], [37.2, 649.0], [37.3, 649.0], [37.4, 649.0], [37.5, 650.0], [37.6, 652.0], [37.7, 655.0], [37.8, 655.0], [37.9, 659.0], [38.0, 659.0], [38.1, 664.0], [38.2, 664.0], [38.3, 668.0], [38.4, 670.0], [38.5, 670.0], [38.6, 671.0], [38.7, 673.0], [38.8, 675.0], [38.9, 675.0], [39.0, 675.0], [39.1, 679.0], [39.2, 680.0], [39.3, 680.0], [39.4, 680.0], [39.5, 681.0], [39.6, 682.0], [39.7, 682.0], [39.8, 684.0], [39.9, 686.0], [40.0, 689.0], [40.1, 689.0], [40.2, 695.0], [40.3, 695.0], [40.4, 695.0], [40.5, 695.0], [40.6, 697.0], [40.7, 697.0], [40.8, 697.0], [40.9, 702.0], [41.0, 703.0], [41.1, 705.0], [41.2, 705.0], [41.3, 708.0], [41.4, 709.0], [41.5, 710.0], [41.6, 710.0], [41.7, 711.0], [41.8, 714.0], [41.9, 714.0], [42.0, 715.0], [42.1, 716.0], [42.2, 718.0], [42.3, 718.0], [42.4, 719.0], [42.5, 719.0], [42.6, 720.0], [42.7, 720.0], [42.8, 720.0], [42.9, 720.0], [43.0, 722.0], [43.1, 722.0], [43.2, 724.0], [43.3, 727.0], [43.4, 727.0], [43.5, 727.0], [43.6, 729.0], [43.7, 730.0], [43.8, 730.0], [43.9, 731.0], [44.0, 732.0], [44.1, 733.0], [44.2, 733.0], [44.3, 736.0], [44.4, 736.0], [44.5, 737.0], [44.6, 737.0], [44.7, 737.0], [44.8, 738.0], [44.9, 740.0], [45.0, 740.0], [45.1, 740.0], [45.2, 743.0], [45.3, 743.0], [45.4, 744.0], [45.5, 745.0], [45.6, 747.0], [45.7, 747.0], [45.8, 747.0], [45.9, 749.0], [46.0, 749.0], [46.1, 749.0], [46.2, 749.0], [46.3, 752.0], [46.4, 753.0], [46.5, 753.0], [46.6, 753.0], [46.7, 757.0], [46.8, 757.0], [46.9, 764.0], [47.0, 765.0], [47.1, 767.0], [47.2, 767.0], [47.3, 768.0], [47.4, 771.0], [47.5, 773.0], [47.6, 773.0], [47.7, 774.0], [47.8, 777.0], [47.9, 778.0], [48.0, 778.0], [48.1, 778.0], [48.2, 782.0], [48.3, 787.0], [48.4, 787.0], [48.5, 787.0], [48.6, 788.0], [48.7, 788.0], [48.8, 790.0], [48.9, 794.0], [49.0, 794.0], [49.1, 794.0], [49.2, 798.0], [49.3, 799.0], [49.4, 800.0], [49.5, 800.0], [49.6, 800.0], [49.7, 802.0], [49.8, 802.0], [49.9, 802.0], [50.0, 805.0], [50.1, 806.0], [50.2, 806.0], [50.3, 807.0], [50.4, 807.0], [50.5, 809.0], [50.6, 809.0], [50.7, 814.0], [50.8, 814.0], [50.9, 817.0], [51.0, 817.0], [51.1, 817.0], [51.2, 820.0], [51.3, 825.0], [51.4, 825.0], [51.5, 833.0], [51.6, 834.0], [51.7, 834.0], [51.8, 839.0], [51.9, 840.0], [52.0, 841.0], [52.1, 841.0], [52.2, 842.0], [52.3, 843.0], [52.4, 846.0], [52.5, 846.0], [52.6, 847.0], [52.7, 848.0], [52.8, 849.0], [52.9, 849.0], [53.0, 850.0], [53.1, 851.0], [53.2, 851.0], [53.3, 851.0], [53.4, 852.0], [53.5, 852.0], [53.6, 852.0], [53.7, 855.0], [53.8, 858.0], [53.9, 858.0], [54.0, 858.0], [54.1, 860.0], [54.2, 863.0], [54.3, 864.0], [54.4, 864.0], [54.5, 865.0], [54.6, 866.0], [54.7, 867.0], [54.8, 867.0], [54.9, 870.0], [55.0, 871.0], [55.1, 871.0], [55.2, 872.0], [55.3, 873.0], [55.4, 874.0], [55.5, 874.0], [55.6, 882.0], [55.7, 883.0], [55.8, 886.0], [55.9, 886.0], [56.0, 886.0], [56.1, 888.0], [56.2, 889.0], [56.3, 889.0], [56.4, 891.0], [56.5, 893.0], [56.6, 894.0], [56.7, 894.0], [56.8, 894.0], [56.9, 894.0], [57.0, 894.0], [57.1, 895.0], [57.2, 895.0], [57.3, 898.0], [57.4, 898.0], [57.5, 899.0], [57.6, 900.0], [57.7, 902.0], [57.8, 902.0], [57.9, 904.0], [58.0, 906.0], [58.1, 906.0], [58.2, 906.0], [58.3, 907.0], [58.4, 907.0], [58.5, 907.0], [58.6, 908.0], [58.7, 912.0], [58.8, 914.0], [58.9, 914.0], [59.0, 915.0], [59.1, 917.0], [59.2, 919.0], [59.3, 919.0], [59.4, 921.0], [59.5, 921.0], [59.6, 922.0], [59.7, 922.0], [59.8, 923.0], [59.9, 926.0], [60.0, 926.0], [60.1, 926.0], [60.2, 926.0], [60.3, 927.0], [60.4, 927.0], [60.5, 928.0], [60.6, 930.0], [60.7, 931.0], [60.8, 931.0], [60.9, 934.0], [61.0, 935.0], [61.1, 935.0], [61.2, 935.0], [61.3, 938.0], [61.4, 939.0], [61.5, 942.0], [61.6, 942.0], [61.7, 942.0], [61.8, 942.0], [61.9, 942.0], [62.0, 943.0], [62.1, 943.0], [62.2, 945.0], [62.3, 945.0], [62.4, 947.0], [62.5, 948.0], [62.6, 948.0], [62.7, 948.0], [62.8, 949.0], [62.9, 949.0], [63.0, 950.0], [63.1, 950.0], [63.2, 951.0], [63.3, 954.0], [63.4, 954.0], [63.5, 956.0], [63.6, 960.0], [63.7, 963.0], [63.8, 963.0], [63.9, 965.0], [64.0, 968.0], [64.1, 971.0], [64.2, 971.0], [64.3, 973.0], [64.4, 973.0], [64.5, 974.0], [64.6, 974.0], [64.7, 975.0], [64.8, 976.0], [64.9, 976.0], [65.0, 976.0], [65.1, 976.0], [65.2, 978.0], [65.3, 978.0], [65.4, 979.0], [65.5, 980.0], [65.6, 983.0], [65.7, 983.0], [65.8, 984.0], [65.9, 985.0], [66.0, 985.0], [66.1, 985.0], [66.2, 986.0], [66.3, 987.0], [66.4, 988.0], [66.5, 988.0], [66.6, 990.0], [66.7, 990.0], [66.8, 990.0], [66.9, 992.0], [67.0, 992.0], [67.1, 993.0], [67.2, 993.0], [67.3, 994.0], [67.4, 997.0], [67.5, 1002.0], [67.6, 1002.0], [67.7, 1002.0], [67.8, 1003.0], [67.9, 1003.0], [68.0, 1003.0], [68.1, 1004.0], [68.2, 1004.0], [68.3, 1006.0], [68.4, 1006.0], [68.5, 1008.0], [68.6, 1009.0], [68.7, 1009.0], [68.8, 1012.0], [68.9, 1016.0], [69.0, 1017.0], [69.1, 1017.0], [69.2, 1017.0], [69.3, 1017.0], [69.4, 1023.0], [69.5, 1023.0], [69.6, 1023.0], [69.7, 1025.0], [69.8, 1025.0], [69.9, 1025.0], [70.0, 1027.0], [70.1, 1027.0], [70.2, 1027.0], [70.3, 1029.0], [70.4, 1029.0], [70.5, 1029.0], [70.6, 1029.0], [70.7, 1029.0], [70.8, 1031.0], [70.9, 1032.0], [71.0, 1032.0], [71.1, 1032.0], [71.2, 1034.0], [71.3, 1039.0], [71.4, 1039.0], [71.5, 1040.0], [71.6, 1040.0], [71.7, 1040.0], [71.8, 1041.0], [71.9, 1042.0], [72.0, 1044.0], [72.1, 1044.0], [72.2, 1045.0], [72.3, 1050.0], [72.4, 1052.0], [72.5, 1052.0], [72.6, 1052.0], [72.7, 1053.0], [72.8, 1053.0], [72.9, 1053.0], [73.0, 1055.0], [73.1, 1056.0], [73.2, 1057.0], [73.3, 1057.0], [73.4, 1059.0], [73.5, 1060.0], [73.6, 1060.0], [73.7, 1061.0], [73.8, 1061.0], [73.9, 1062.0], [74.0, 1062.0], [74.1, 1064.0], [74.2, 1065.0], [74.3, 1067.0], [74.4, 1067.0], [74.5, 1069.0], [74.6, 1071.0], [74.7, 1072.0], [74.8, 1072.0], [74.9, 1076.0], [75.0, 1076.0], [75.1, 1076.0], [75.2, 1077.0], [75.3, 1080.0], [75.4, 1080.0], [75.5, 1080.0], [75.6, 1081.0], [75.7, 1081.0], [75.8, 1082.0], [75.9, 1082.0], [76.0, 1083.0], [76.1, 1085.0], [76.2, 1087.0], [76.3, 1087.0], [76.4, 1088.0], [76.5, 1090.0], [76.6, 1092.0], [76.7, 1092.0], [76.8, 1096.0], [76.9, 1100.0], [77.0, 1100.0], [77.1, 1103.0], [77.2, 1104.0], [77.3, 1105.0], [77.4, 1105.0], [77.5, 1106.0], [77.6, 1111.0], [77.7, 1114.0], [77.8, 1114.0], [77.9, 1115.0], [78.0, 1116.0], [78.1, 1117.0], [78.2, 1117.0], [78.3, 1122.0], [78.4, 1122.0], [78.5, 1122.0], [78.6, 1123.0], [78.7, 1135.0], [78.8, 1136.0], [78.9, 1136.0], [79.0, 1139.0], [79.1, 1139.0], [79.2, 1140.0], [79.3, 1140.0], [79.4, 1140.0], [79.5, 1141.0], [79.6, 1142.0], [79.7, 1142.0], [79.8, 1147.0], [79.9, 1149.0], [80.0, 1150.0], [80.1, 1150.0], [80.2, 1154.0], [80.3, 1156.0], [80.4, 1156.0], [80.5, 1160.0], [80.6, 1160.0], [80.7, 1160.0], [80.8, 1160.0], [80.9, 1162.0], [81.0, 1173.0], [81.1, 1175.0], [81.2, 1175.0], [81.3, 1176.0], [81.4, 1176.0], [81.5, 1177.0], [81.6, 1177.0], [81.7, 1178.0], [81.8, 1179.0], [81.9, 1179.0], [82.0, 1183.0], [82.1, 1184.0], [82.2, 1184.0], [82.3, 1184.0], [82.4, 1184.0], [82.5, 1184.0], [82.6, 1186.0], [82.7, 1186.0], [82.8, 1186.0], [82.9, 1188.0], [83.0, 1188.0], [83.1, 1188.0], [83.2, 1190.0], [83.3, 1192.0], [83.4, 1192.0], [83.5, 1194.0], [83.6, 1195.0], [83.7, 1196.0], [83.8, 1196.0], [83.9, 1197.0], [84.0, 1199.0], [84.1, 1201.0], [84.2, 1201.0], [84.3, 1203.0], [84.4, 1203.0], [84.5, 1206.0], [84.6, 1206.0], [84.7, 1214.0], [84.8, 1214.0], [84.9, 1215.0], [85.0, 1215.0], [85.1, 1215.0], [85.2, 1215.0], [85.3, 1215.0], [85.4, 1216.0], [85.5, 1216.0], [85.6, 1218.0], [85.7, 1218.0], [85.8, 1229.0], [85.9, 1232.0], [86.0, 1238.0], [86.1, 1238.0], [86.2, 1241.0], [86.3, 1243.0], [86.4, 1243.0], [86.5, 1243.0], [86.6, 1249.0], [86.7, 1251.0], [86.8, 1251.0], [86.9, 1255.0], [87.0, 1267.0], [87.1, 1268.0], [87.2, 1268.0], [87.3, 1268.0], [87.4, 1272.0], [87.5, 1277.0], [87.6, 1277.0], [87.7, 1288.0], [87.8, 1288.0], [87.9, 1292.0], [88.0, 1292.0], [88.1, 1297.0], [88.2, 1299.0], [88.3, 1301.0], [88.4, 1301.0], [88.5, 1310.0], [88.6, 1322.0], [88.7, 1322.0], [88.8, 1323.0], [88.9, 1324.0], [89.0, 1325.0], [89.1, 1325.0], [89.2, 1332.0], [89.3, 1333.0], [89.4, 1340.0], [89.5, 1340.0], [89.6, 1342.0], [89.7, 1344.0], [89.8, 1351.0], [89.9, 1351.0], [90.0, 1356.0], [90.1, 1363.0], [90.2, 1363.0], [90.3, 1365.0], [90.4, 1365.0], [90.5, 1374.0], [90.6, 1374.0], [90.7, 1375.0], [90.8, 1377.0], [90.9, 1379.0], [91.0, 1379.0], [91.1, 1390.0], [91.2, 1392.0], [91.3, 1393.0], [91.4, 1393.0], [91.5, 1394.0], [91.6, 1396.0], [91.7, 1396.0], [91.8, 1397.0], [91.9, 1398.0], [92.0, 1406.0], [92.1, 1406.0], [92.2, 1407.0], [92.3, 1426.0], [92.4, 1430.0], [92.5, 1430.0], [92.6, 1432.0], [92.7, 1433.0], [92.8, 1445.0], [92.9, 1445.0], [93.0, 1448.0], [93.1, 1451.0], [93.2, 1451.0], [93.3, 1451.0], [93.4, 1453.0], [93.5, 1467.0], [93.6, 1467.0], [93.7, 1467.0], [93.8, 1470.0], [93.9, 1481.0], [94.0, 1481.0], [94.1, 1483.0], [94.2, 1488.0], [94.3, 1489.0], [94.4, 1489.0], [94.5, 1505.0], [94.6, 1507.0], [94.7, 1517.0], [94.8, 1517.0], [94.9, 1519.0], [95.0, 1529.0], [95.1, 1529.0], [95.2, 1538.0], [95.3, 1543.0], [95.4, 1548.0], [95.5, 1548.0], [95.6, 1556.0], [95.7, 1576.0], [95.8, 1625.0], [95.9, 1625.0], [96.0, 1625.0], [96.1, 1626.0], [96.2, 1633.0], [96.3, 1633.0], [96.4, 1637.0], [96.5, 1643.0], [96.6, 1648.0], [96.7, 1648.0], [96.8, 1662.0], [96.9, 1694.0], [97.0, 1694.0], [97.1, 1705.0], [97.2, 1736.0], [97.3, 1749.0], [97.4, 1749.0], [97.5, 1824.0], [97.6, 1829.0], [97.7, 1849.0], [97.8, 1849.0], [97.9, 1906.0], [98.0, 2027.0], [98.1, 2186.0], [98.2, 2186.0], [98.3, 2493.0], [98.4, 2507.0], [98.5, 2507.0], [98.6, 2738.0], [98.7, 2773.0], [98.8, 2797.0], [98.9, 2797.0], [99.0, 2858.0], [99.1, 3033.0], [99.2, 3058.0], [99.3, 3058.0], [99.4, 3077.0], [99.5, 3140.0], [99.6, 3178.0], [99.7, 3178.0], [99.8, 3444.0], [99.9, 3815.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 79.0, "series": [{"data": [[600.0, 59.0], [700.0, 63.0], [800.0, 60.0], [900.0, 73.0], [1000.0, 69.0], [1100.0, 53.0], [1200.0, 31.0], [1300.0, 27.0], [1400.0, 18.0], [1500.0, 10.0], [100.0, 6.0], [1600.0, 9.0], [1700.0, 3.0], [1800.0, 3.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2700.0, 3.0], [2800.0, 1.0], [3000.0, 3.0], [3100.0, 2.0], [200.0, 43.0], [3400.0, 1.0], [3800.0, 1.0], [300.0, 58.0], [400.0, 55.0], [500.0, 79.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 41.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 532.0, "series": [{"data": [[0.0, 162.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 532.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 41.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.845890410958903, "minX": 1.60262994E12, "maxY": 10.0, "series": [{"data": [[1.60262994E12, 10.0], [1.60263E12, 9.845890410958903]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 307.0, "minX": 1.0, "maxY": 1433.0, "series": [{"data": [[8.0, 541.0], [4.0, 787.0], [2.0, 546.0], [1.0, 820.0], [9.0, 1433.0], [10.0, 855.5261707988988], [5.0, 565.0], [6.0, 307.0], [3.0, 664.0], [7.0, 507.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 853.4448979591842]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2193.7166666666667, "minX": 1.60262994E12, "maxY": 1180747.9666666666, "series": [{"data": [[1.60262994E12, 1180747.9666666666], [1.60263E12, 655008.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60262994E12, 3329.3166666666666], [1.60263E12, 2193.7166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 851.1198630136985, "minX": 1.60262994E12, "maxY": 854.9774266365683, "series": [{"data": [[1.60262994E12, 854.9774266365683], [1.60263E12, 851.1198630136985]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 849.9520547945206, "minX": 1.60262994E12, "maxY": 853.6523702031608, "series": [{"data": [[1.60262994E12, 853.6523702031608], [1.60263E12, 849.9520547945206]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.027397260273972594, "minX": 1.60262994E12, "maxY": 0.2347629796839728, "series": [{"data": [[1.60262994E12, 0.2347629796839728], [1.60263E12, 0.027397260273972594]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 174.0, "minX": 1.60262994E12, "maxY": 3815.0, "series": [{"data": [[1.60262994E12, 3815.0], [1.60263E12, 1906.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60262994E12, 192.95599883556366], [1.60263E12, 271.9109997904301]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60262994E12, 193.0], [1.60263E12, 272.702100083828]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60262994E12, 193.0], [1.60263E12, 272.350499895215]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60262994E12, 174.0], [1.60263E12, 240.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60262994E12, 747.0], [1.60263E12, 865.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 418.0, "minX": 1.0, "maxY": 2507.0, "series": [{"data": [[8.0, 1054.0], [9.0, 1017.0], [10.0, 940.0], [11.0, 950.0], [12.0, 772.5], [13.0, 891.0], [14.0, 827.0], [15.0, 686.0], [1.0, 2507.0], [16.0, 581.5], [17.0, 648.0], [18.0, 532.0], [19.0, 418.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 418.0, "minX": 1.0, "maxY": 2503.0, "series": [{"data": [[8.0, 1053.5], [9.0, 1016.0], [10.0, 939.0], [11.0, 949.0], [12.0, 772.5], [13.0, 890.0], [14.0, 826.0], [15.0, 686.0], [1.0, 2503.0], [16.0, 580.5], [17.0, 648.0], [18.0, 532.0], [19.0, 418.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.7, "minX": 1.60262994E12, "maxY": 7.55, "series": [{"data": [[1.60262994E12, 7.55], [1.60263E12, 4.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.866666666666666, "minX": 1.60262994E12, "maxY": 7.383333333333334, "series": [{"data": [[1.60262994E12, 7.383333333333334], [1.60263E12, 4.866666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.866666666666666, "minX": 1.60262994E12, "maxY": 7.383333333333334, "series": [{"data": [[1.60262994E12, 7.383333333333334], [1.60263E12, 4.866666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.866666666666666, "minX": 1.60262994E12, "maxY": 7.383333333333334, "series": [{"data": [[1.60262994E12, 7.383333333333334], [1.60263E12, 4.866666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263E12, "title": "Total Transactions Per Second"}},
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

