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
        data: {"result": {"minY": 171.0, "minX": 0.0, "maxY": 4061.0, "series": [{"data": [[0.0, 171.0], [0.1, 171.0], [0.2, 175.0], [0.3, 193.0], [0.4, 193.0], [0.5, 193.0], [0.6, 195.0], [0.7, 196.0], [0.8, 196.0], [0.9, 206.0], [1.0, 210.0], [1.1, 215.0], [1.2, 215.0], [1.3, 220.0], [1.4, 226.0], [1.5, 227.0], [1.6, 227.0], [1.7, 231.0], [1.8, 242.0], [1.9, 242.0], [2.0, 243.0], [2.1, 249.0], [2.2, 251.0], [2.3, 251.0], [2.4, 254.0], [2.5, 255.0], [2.6, 258.0], [2.7, 258.0], [2.8, 261.0], [2.9, 263.0], [3.0, 268.0], [3.1, 268.0], [3.2, 268.0], [3.3, 269.0], [3.4, 269.0], [3.5, 270.0], [3.6, 271.0], [3.7, 272.0], [3.8, 272.0], [3.9, 274.0], [4.0, 274.0], [4.1, 276.0], [4.2, 276.0], [4.3, 283.0], [4.4, 286.0], [4.5, 286.0], [4.6, 286.0], [4.7, 289.0], [4.8, 289.0], [4.9, 291.0], [5.0, 291.0], [5.1, 293.0], [5.2, 294.0], [5.3, 294.0], [5.4, 294.0], [5.5, 296.0], [5.6, 297.0], [5.7, 297.0], [5.8, 301.0], [5.9, 301.0], [6.0, 302.0], [6.1, 302.0], [6.2, 303.0], [6.3, 305.0], [6.4, 305.0], [6.5, 305.0], [6.6, 306.0], [6.7, 307.0], [6.8, 307.0], [6.9, 307.0], [7.0, 307.0], [7.1, 308.0], [7.2, 308.0], [7.3, 309.0], [7.4, 310.0], [7.5, 310.0], [7.6, 310.0], [7.7, 310.0], [7.8, 313.0], [7.9, 316.0], [8.0, 316.0], [8.1, 316.0], [8.2, 317.0], [8.3, 318.0], [8.4, 318.0], [8.5, 319.0], [8.6, 324.0], [8.7, 324.0], [8.8, 327.0], [8.9, 328.0], [9.0, 328.0], [9.1, 328.0], [9.2, 329.0], [9.3, 330.0], [9.4, 331.0], [9.5, 331.0], [9.6, 332.0], [9.7, 334.0], [9.8, 336.0], [9.9, 336.0], [10.0, 336.0], [10.1, 338.0], [10.2, 338.0], [10.3, 341.0], [10.4, 347.0], [10.5, 347.0], [10.6, 347.0], [10.7, 350.0], [10.8, 359.0], [10.9, 362.0], [11.0, 362.0], [11.1, 362.0], [11.2, 364.0], [11.3, 370.0], [11.4, 370.0], [11.5, 371.0], [11.6, 373.0], [11.7, 373.0], [11.8, 373.0], [11.9, 374.0], [12.0, 374.0], [12.1, 374.0], [12.2, 375.0], [12.3, 375.0], [12.4, 378.0], [12.5, 378.0], [12.6, 378.0], [12.7, 380.0], [12.8, 382.0], [12.9, 382.0], [13.0, 384.0], [13.1, 387.0], [13.2, 389.0], [13.3, 389.0], [13.4, 389.0], [13.5, 391.0], [13.6, 391.0], [13.7, 394.0], [13.8, 395.0], [13.9, 395.0], [14.0, 395.0], [14.1, 396.0], [14.2, 397.0], [14.3, 397.0], [14.4, 397.0], [14.5, 398.0], [14.6, 399.0], [14.7, 403.0], [14.8, 403.0], [14.9, 406.0], [15.0, 407.0], [15.1, 407.0], [15.2, 408.0], [15.3, 410.0], [15.4, 411.0], [15.5, 411.0], [15.6, 411.0], [15.7, 413.0], [15.8, 413.0], [15.9, 413.0], [16.0, 413.0], [16.1, 414.0], [16.2, 416.0], [16.3, 416.0], [16.4, 416.0], [16.5, 418.0], [16.6, 418.0], [16.7, 418.0], [16.8, 419.0], [16.9, 420.0], [17.0, 420.0], [17.1, 421.0], [17.2, 423.0], [17.3, 424.0], [17.4, 424.0], [17.5, 425.0], [17.6, 427.0], [17.7, 427.0], [17.8, 427.0], [17.9, 430.0], [18.0, 430.0], [18.1, 431.0], [18.2, 431.0], [18.3, 437.0], [18.4, 438.0], [18.5, 438.0], [18.6, 439.0], [18.7, 441.0], [18.8, 442.0], [18.9, 442.0], [19.0, 444.0], [19.1, 446.0], [19.2, 449.0], [19.3, 449.0], [19.4, 449.0], [19.5, 449.0], [19.6, 450.0], [19.7, 450.0], [19.8, 450.0], [19.9, 451.0], [20.0, 452.0], [20.1, 452.0], [20.2, 456.0], [20.3, 458.0], [20.4, 458.0], [20.5, 460.0], [20.6, 461.0], [20.7, 463.0], [20.8, 463.0], [20.9, 464.0], [21.0, 465.0], [21.1, 465.0], [21.2, 465.0], [21.3, 466.0], [21.4, 466.0], [21.5, 469.0], [21.6, 469.0], [21.7, 470.0], [21.8, 470.0], [21.9, 470.0], [22.0, 474.0], [22.1, 478.0], [22.2, 479.0], [22.3, 479.0], [22.4, 482.0], [22.5, 485.0], [22.6, 489.0], [22.7, 489.0], [22.8, 490.0], [22.9, 490.0], [23.0, 491.0], [23.1, 491.0], [23.2, 492.0], [23.3, 493.0], [23.4, 493.0], [23.5, 494.0], [23.6, 496.0], [23.7, 501.0], [23.8, 501.0], [23.9, 501.0], [24.0, 503.0], [24.1, 503.0], [24.2, 503.0], [24.3, 504.0], [24.4, 505.0], [24.5, 510.0], [24.6, 510.0], [24.7, 512.0], [24.8, 512.0], [24.9, 513.0], [25.0, 513.0], [25.1, 513.0], [25.2, 516.0], [25.3, 516.0], [25.4, 518.0], [25.5, 518.0], [25.6, 518.0], [25.7, 518.0], [25.8, 523.0], [25.9, 523.0], [26.0, 532.0], [26.1, 532.0], [26.2, 534.0], [26.3, 535.0], [26.4, 535.0], [26.5, 535.0], [26.6, 536.0], [26.7, 538.0], [26.8, 538.0], [26.9, 540.0], [27.0, 542.0], [27.1, 546.0], [27.2, 546.0], [27.3, 548.0], [27.4, 548.0], [27.5, 548.0], [27.6, 548.0], [27.7, 551.0], [27.8, 553.0], [27.9, 553.0], [28.0, 553.0], [28.1, 553.0], [28.2, 553.0], [28.3, 554.0], [28.4, 554.0], [28.5, 557.0], [28.6, 558.0], [28.7, 558.0], [28.8, 560.0], [28.9, 560.0], [29.0, 561.0], [29.1, 561.0], [29.2, 562.0], [29.3, 564.0], [29.4, 566.0], [29.5, 566.0], [29.6, 566.0], [29.7, 567.0], [29.8, 567.0], [29.9, 567.0], [30.0, 568.0], [30.1, 569.0], [30.2, 569.0], [30.3, 569.0], [30.4, 572.0], [30.5, 573.0], [30.6, 573.0], [30.7, 573.0], [30.8, 575.0], [30.9, 576.0], [31.0, 576.0], [31.1, 578.0], [31.2, 580.0], [31.3, 581.0], [31.4, 581.0], [31.5, 582.0], [31.6, 583.0], [31.7, 583.0], [31.8, 584.0], [31.9, 584.0], [32.0, 584.0], [32.1, 584.0], [32.2, 585.0], [32.3, 586.0], [32.4, 586.0], [32.5, 586.0], [32.6, 586.0], [32.7, 587.0], [32.8, 588.0], [32.9, 588.0], [33.0, 588.0], [33.1, 589.0], [33.2, 590.0], [33.3, 590.0], [33.4, 592.0], [33.5, 594.0], [33.6, 594.0], [33.7, 595.0], [33.8, 595.0], [33.9, 597.0], [34.0, 597.0], [34.1, 597.0], [34.2, 597.0], [34.3, 598.0], [34.4, 598.0], [34.5, 598.0], [34.6, 598.0], [34.7, 599.0], [34.8, 599.0], [34.9, 600.0], [35.0, 601.0], [35.1, 601.0], [35.2, 605.0], [35.3, 608.0], [35.4, 613.0], [35.5, 613.0], [35.6, 617.0], [35.7, 618.0], [35.8, 620.0], [35.9, 620.0], [36.0, 621.0], [36.1, 622.0], [36.2, 623.0], [36.3, 623.0], [36.4, 623.0], [36.5, 624.0], [36.6, 627.0], [36.7, 627.0], [36.8, 628.0], [36.9, 631.0], [37.0, 631.0], [37.1, 632.0], [37.2, 633.0], [37.3, 633.0], [37.4, 633.0], [37.5, 635.0], [37.6, 635.0], [37.7, 635.0], [37.8, 635.0], [37.9, 636.0], [38.0, 637.0], [38.1, 638.0], [38.2, 638.0], [38.3, 639.0], [38.4, 640.0], [38.5, 640.0], [38.6, 641.0], [38.7, 642.0], [38.8, 642.0], [38.9, 642.0], [39.0, 643.0], [39.1, 650.0], [39.2, 651.0], [39.3, 651.0], [39.4, 651.0], [39.5, 651.0], [39.6, 652.0], [39.7, 652.0], [39.8, 653.0], [39.9, 654.0], [40.0, 654.0], [40.1, 654.0], [40.2, 657.0], [40.3, 657.0], [40.4, 657.0], [40.5, 658.0], [40.6, 659.0], [40.7, 659.0], [40.8, 659.0], [40.9, 660.0], [41.0, 660.0], [41.1, 660.0], [41.2, 660.0], [41.3, 661.0], [41.4, 661.0], [41.5, 663.0], [41.6, 663.0], [41.7, 665.0], [41.8, 666.0], [41.9, 666.0], [42.0, 669.0], [42.1, 670.0], [42.2, 671.0], [42.3, 671.0], [42.4, 672.0], [42.5, 674.0], [42.6, 675.0], [42.7, 675.0], [42.8, 675.0], [42.9, 676.0], [43.0, 676.0], [43.1, 676.0], [43.2, 677.0], [43.3, 680.0], [43.4, 680.0], [43.5, 680.0], [43.6, 680.0], [43.7, 682.0], [43.8, 682.0], [43.9, 682.0], [44.0, 682.0], [44.1, 684.0], [44.2, 684.0], [44.3, 685.0], [44.4, 685.0], [44.5, 687.0], [44.6, 687.0], [44.7, 687.0], [44.8, 691.0], [44.9, 691.0], [45.0, 691.0], [45.1, 693.0], [45.2, 693.0], [45.3, 693.0], [45.4, 694.0], [45.5, 699.0], [45.6, 700.0], [45.7, 700.0], [45.8, 704.0], [45.9, 709.0], [46.0, 709.0], [46.1, 709.0], [46.2, 712.0], [46.3, 714.0], [46.4, 717.0], [46.5, 717.0], [46.6, 720.0], [46.7, 724.0], [46.8, 724.0], [46.9, 724.0], [47.0, 727.0], [47.1, 728.0], [47.2, 728.0], [47.3, 728.0], [47.4, 732.0], [47.5, 733.0], [47.6, 733.0], [47.7, 737.0], [47.8, 738.0], [47.9, 739.0], [48.0, 739.0], [48.1, 745.0], [48.2, 757.0], [48.3, 758.0], [48.4, 758.0], [48.5, 758.0], [48.6, 759.0], [48.7, 759.0], [48.8, 761.0], [48.9, 766.0], [49.0, 766.0], [49.1, 766.0], [49.2, 766.0], [49.3, 768.0], [49.4, 770.0], [49.5, 770.0], [49.6, 771.0], [49.7, 775.0], [49.8, 776.0], [49.9, 776.0], [50.0, 777.0], [50.1, 785.0], [50.2, 785.0], [50.3, 786.0], [50.4, 786.0], [50.5, 787.0], [50.6, 787.0], [50.7, 787.0], [50.8, 787.0], [50.9, 790.0], [51.0, 790.0], [51.1, 791.0], [51.2, 791.0], [51.3, 793.0], [51.4, 793.0], [51.5, 796.0], [51.6, 796.0], [51.7, 796.0], [51.8, 796.0], [51.9, 797.0], [52.0, 799.0], [52.1, 799.0], [52.2, 799.0], [52.3, 800.0], [52.4, 802.0], [52.5, 802.0], [52.6, 802.0], [52.7, 805.0], [52.8, 808.0], [52.9, 808.0], [53.0, 809.0], [53.1, 810.0], [53.2, 812.0], [53.3, 812.0], [53.4, 812.0], [53.5, 813.0], [53.6, 813.0], [53.7, 813.0], [53.8, 814.0], [53.9, 815.0], [54.0, 815.0], [54.1, 815.0], [54.2, 816.0], [54.3, 818.0], [54.4, 818.0], [54.5, 819.0], [54.6, 822.0], [54.7, 823.0], [54.8, 823.0], [54.9, 824.0], [55.0, 825.0], [55.1, 825.0], [55.2, 832.0], [55.3, 832.0], [55.4, 835.0], [55.5, 835.0], [55.6, 836.0], [55.7, 837.0], [55.8, 838.0], [55.9, 838.0], [56.0, 839.0], [56.1, 839.0], [56.2, 839.0], [56.3, 839.0], [56.4, 842.0], [56.5, 843.0], [56.6, 843.0], [56.7, 843.0], [56.8, 846.0], [56.9, 847.0], [57.0, 847.0], [57.1, 848.0], [57.2, 851.0], [57.3, 851.0], [57.4, 851.0], [57.5, 853.0], [57.6, 858.0], [57.7, 860.0], [57.8, 860.0], [57.9, 869.0], [58.0, 873.0], [58.1, 876.0], [58.2, 876.0], [58.3, 877.0], [58.4, 882.0], [58.5, 882.0], [58.6, 884.0], [58.7, 893.0], [58.8, 895.0], [58.9, 895.0], [59.0, 895.0], [59.1, 899.0], [59.2, 900.0], [59.3, 900.0], [59.4, 900.0], [59.5, 901.0], [59.6, 904.0], [59.7, 904.0], [59.8, 904.0], [59.9, 907.0], [60.0, 908.0], [60.1, 908.0], [60.2, 919.0], [60.3, 921.0], [60.4, 921.0], [60.5, 921.0], [60.6, 921.0], [60.7, 925.0], [60.8, 925.0], [60.9, 925.0], [61.0, 926.0], [61.1, 926.0], [61.2, 926.0], [61.3, 930.0], [61.4, 933.0], [61.5, 933.0], [61.6, 933.0], [61.7, 937.0], [61.8, 940.0], [61.9, 940.0], [62.0, 941.0], [62.1, 941.0], [62.2, 944.0], [62.3, 944.0], [62.4, 944.0], [62.5, 945.0], [62.6, 946.0], [62.7, 946.0], [62.8, 947.0], [62.9, 949.0], [63.0, 951.0], [63.1, 951.0], [63.2, 951.0], [63.3, 954.0], [63.4, 954.0], [63.5, 954.0], [63.6, 957.0], [63.7, 959.0], [63.8, 959.0], [63.9, 961.0], [64.0, 964.0], [64.1, 965.0], [64.2, 965.0], [64.3, 966.0], [64.4, 966.0], [64.5, 970.0], [64.6, 970.0], [64.7, 973.0], [64.8, 973.0], [64.9, 975.0], [65.0, 975.0], [65.1, 976.0], [65.2, 977.0], [65.3, 977.0], [65.4, 980.0], [65.5, 980.0], [65.6, 981.0], [65.7, 981.0], [65.8, 981.0], [65.9, 981.0], [66.0, 985.0], [66.1, 985.0], [66.2, 987.0], [66.3, 987.0], [66.4, 989.0], [66.5, 989.0], [66.6, 991.0], [66.7, 991.0], [66.8, 991.0], [66.9, 993.0], [67.0, 994.0], [67.1, 996.0], [67.2, 996.0], [67.3, 997.0], [67.4, 997.0], [67.5, 998.0], [67.6, 998.0], [67.7, 1000.0], [67.8, 1001.0], [67.9, 1003.0], [68.0, 1003.0], [68.1, 1003.0], [68.2, 1003.0], [68.3, 1003.0], [68.4, 1003.0], [68.5, 1003.0], [68.6, 1006.0], [68.7, 1006.0], [68.8, 1007.0], [68.9, 1008.0], [69.0, 1008.0], [69.1, 1008.0], [69.2, 1010.0], [69.3, 1013.0], [69.4, 1013.0], [69.5, 1013.0], [69.6, 1014.0], [69.7, 1017.0], [69.8, 1019.0], [69.9, 1019.0], [70.0, 1019.0], [70.1, 1021.0], [70.2, 1021.0], [70.3, 1024.0], [70.4, 1024.0], [70.5, 1024.0], [70.6, 1024.0], [70.7, 1027.0], [70.8, 1031.0], [70.9, 1032.0], [71.0, 1032.0], [71.1, 1033.0], [71.2, 1035.0], [71.3, 1035.0], [71.4, 1035.0], [71.5, 1037.0], [71.6, 1039.0], [71.7, 1039.0], [71.8, 1041.0], [71.9, 1042.0], [72.0, 1043.0], [72.1, 1043.0], [72.2, 1043.0], [72.3, 1044.0], [72.4, 1046.0], [72.5, 1046.0], [72.6, 1047.0], [72.7, 1047.0], [72.8, 1049.0], [72.9, 1049.0], [73.0, 1050.0], [73.1, 1054.0], [73.2, 1057.0], [73.3, 1057.0], [73.4, 1057.0], [73.5, 1058.0], [73.6, 1058.0], [73.7, 1058.0], [73.8, 1060.0], [73.9, 1062.0], [74.0, 1062.0], [74.1, 1062.0], [74.2, 1062.0], [74.3, 1066.0], [74.4, 1066.0], [74.5, 1066.0], [74.6, 1069.0], [74.7, 1070.0], [74.8, 1070.0], [74.9, 1072.0], [75.0, 1073.0], [75.1, 1073.0], [75.2, 1074.0], [75.3, 1076.0], [75.4, 1077.0], [75.5, 1077.0], [75.6, 1079.0], [75.7, 1081.0], [75.8, 1083.0], [75.9, 1083.0], [76.0, 1085.0], [76.1, 1086.0], [76.2, 1087.0], [76.3, 1087.0], [76.4, 1089.0], [76.5, 1090.0], [76.6, 1091.0], [76.7, 1091.0], [76.8, 1093.0], [76.9, 1094.0], [77.0, 1094.0], [77.1, 1100.0], [77.2, 1104.0], [77.3, 1105.0], [77.4, 1105.0], [77.5, 1110.0], [77.6, 1110.0], [77.7, 1111.0], [77.8, 1111.0], [77.9, 1112.0], [78.0, 1116.0], [78.1, 1117.0], [78.2, 1117.0], [78.3, 1121.0], [78.4, 1122.0], [78.5, 1122.0], [78.6, 1123.0], [78.7, 1125.0], [78.8, 1126.0], [78.9, 1126.0], [79.0, 1127.0], [79.1, 1127.0], [79.2, 1128.0], [79.3, 1128.0], [79.4, 1129.0], [79.5, 1130.0], [79.6, 1133.0], [79.7, 1133.0], [79.8, 1133.0], [79.9, 1137.0], [80.0, 1140.0], [80.1, 1140.0], [80.2, 1141.0], [80.3, 1145.0], [80.4, 1145.0], [80.5, 1145.0], [80.6, 1146.0], [80.7, 1146.0], [80.8, 1146.0], [80.9, 1149.0], [81.0, 1150.0], [81.1, 1150.0], [81.2, 1150.0], [81.3, 1158.0], [81.4, 1158.0], [81.5, 1164.0], [81.6, 1164.0], [81.7, 1167.0], [81.8, 1168.0], [81.9, 1168.0], [82.0, 1169.0], [82.1, 1170.0], [82.2, 1172.0], [82.3, 1172.0], [82.4, 1173.0], [82.5, 1174.0], [82.6, 1175.0], [82.7, 1175.0], [82.8, 1177.0], [82.9, 1180.0], [83.0, 1184.0], [83.1, 1184.0], [83.2, 1185.0], [83.3, 1186.0], [83.4, 1186.0], [83.5, 1186.0], [83.6, 1196.0], [83.7, 1197.0], [83.8, 1197.0], [83.9, 1199.0], [84.0, 1200.0], [84.1, 1209.0], [84.2, 1209.0], [84.3, 1210.0], [84.4, 1212.0], [84.5, 1216.0], [84.6, 1216.0], [84.7, 1217.0], [84.8, 1217.0], [84.9, 1220.0], [85.0, 1220.0], [85.1, 1221.0], [85.2, 1221.0], [85.3, 1221.0], [85.4, 1223.0], [85.5, 1225.0], [85.6, 1229.0], [85.7, 1229.0], [85.8, 1230.0], [85.9, 1231.0], [86.0, 1234.0], [86.1, 1234.0], [86.2, 1235.0], [86.3, 1235.0], [86.4, 1237.0], [86.5, 1237.0], [86.6, 1245.0], [86.7, 1248.0], [86.8, 1248.0], [86.9, 1252.0], [87.0, 1260.0], [87.1, 1268.0], [87.2, 1268.0], [87.3, 1268.0], [87.4, 1271.0], [87.5, 1272.0], [87.6, 1272.0], [87.7, 1280.0], [87.8, 1282.0], [87.9, 1283.0], [88.0, 1283.0], [88.1, 1284.0], [88.2, 1285.0], [88.3, 1289.0], [88.4, 1289.0], [88.5, 1294.0], [88.6, 1294.0], [88.7, 1294.0], [88.8, 1296.0], [88.9, 1298.0], [89.0, 1301.0], [89.1, 1301.0], [89.2, 1311.0], [89.3, 1311.0], [89.4, 1311.0], [89.5, 1311.0], [89.6, 1312.0], [89.7, 1318.0], [89.8, 1321.0], [89.9, 1321.0], [90.0, 1331.0], [90.1, 1336.0], [90.2, 1336.0], [90.3, 1338.0], [90.4, 1338.0], [90.5, 1340.0], [90.6, 1340.0], [90.7, 1358.0], [90.8, 1370.0], [90.9, 1371.0], [91.0, 1371.0], [91.1, 1378.0], [91.2, 1386.0], [91.3, 1388.0], [91.4, 1388.0], [91.5, 1388.0], [91.6, 1391.0], [91.7, 1391.0], [91.8, 1396.0], [91.9, 1396.0], [92.0, 1402.0], [92.1, 1402.0], [92.2, 1412.0], [92.3, 1414.0], [92.4, 1437.0], [92.5, 1437.0], [92.6, 1440.0], [92.7, 1440.0], [92.8, 1448.0], [92.9, 1448.0], [93.0, 1450.0], [93.1, 1461.0], [93.2, 1467.0], [93.3, 1467.0], [93.4, 1483.0], [93.5, 1499.0], [93.6, 1499.0], [93.7, 1499.0], [93.8, 1505.0], [93.9, 1506.0], [94.0, 1506.0], [94.1, 1519.0], [94.2, 1521.0], [94.3, 1522.0], [94.4, 1522.0], [94.5, 1525.0], [94.6, 1529.0], [94.7, 1532.0], [94.8, 1532.0], [94.9, 1532.0], [95.0, 1537.0], [95.1, 1537.0], [95.2, 1568.0], [95.3, 1570.0], [95.4, 1595.0], [95.5, 1595.0], [95.6, 1600.0], [95.7, 1623.0], [95.8, 1625.0], [95.9, 1625.0], [96.0, 1631.0], [96.1, 1646.0], [96.2, 1661.0], [96.3, 1661.0], [96.4, 1699.0], [96.5, 1738.0], [96.6, 1746.0], [96.7, 1746.0], [96.8, 1750.0], [96.9, 1766.0], [97.0, 1766.0], [97.1, 1771.0], [97.2, 1784.0], [97.3, 1790.0], [97.4, 1790.0], [97.5, 1801.0], [97.6, 1801.0], [97.7, 1841.0], [97.8, 1841.0], [97.9, 1886.0], [98.0, 2203.0], [98.1, 2497.0], [98.2, 2497.0], [98.3, 2540.0], [98.4, 2593.0], [98.5, 2593.0], [98.6, 2901.0], [98.7, 2969.0], [98.8, 3075.0], [98.9, 3075.0], [99.0, 3079.0], [99.1, 3116.0], [99.2, 3289.0], [99.3, 3289.0], [99.4, 3303.0], [99.5, 3318.0], [99.6, 3406.0], [99.7, 3406.0], [99.8, 3494.0], [99.9, 4061.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 82.0, "series": [{"data": [[600.0, 79.0], [700.0, 49.0], [800.0, 51.0], [900.0, 62.0], [1000.0, 69.0], [1100.0, 51.0], [1200.0, 37.0], [1300.0, 22.0], [1400.0, 13.0], [1500.0, 13.0], [100.0, 6.0], [1600.0, 7.0], [1700.0, 7.0], [1800.0, 4.0], [2200.0, 1.0], [2400.0, 1.0], [2500.0, 2.0], [2900.0, 2.0], [3000.0, 2.0], [3100.0, 1.0], [3300.0, 2.0], [200.0, 36.0], [3200.0, 1.0], [3400.0, 2.0], [4000.0, 1.0], [300.0, 66.0], [400.0, 66.0], [500.0, 82.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 46.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 515.0, "series": [{"data": [[0.0, 174.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 515.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 46.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.713375796178346, "minX": 1.60384086E12, "maxY": 10.0, "series": [{"data": [[1.60384086E12, 10.0], [1.60384092E12, 9.713375796178346]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384092E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 463.0, "minX": 1.0, "maxY": 1077.0, "series": [{"data": [[8.0, 680.0], [4.0, 1024.0], [2.0, 560.0], [1.0, 1077.0], [9.0, 650.0], [10.0, 847.5289256198346], [5.0, 675.0], [6.0, 676.0], [3.0, 588.0], [7.0, 463.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 845.8489795918366]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1171.4833333333333, "minX": 1.60384086E12, "maxY": 1503458.25, "series": [{"data": [[1.60384086E12, 1503458.25], [1.60384092E12, 332309.4666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384086E12, 4351.55], [1.60384092E12, 1171.4833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384092E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 759.1783439490448, "minX": 1.60384086E12, "maxY": 869.391003460207, "series": [{"data": [[1.60384086E12, 869.391003460207], [1.60384092E12, 759.1783439490448]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384092E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 758.0191082802548, "minX": 1.60384086E12, "maxY": 868.0553633217995, "series": [{"data": [[1.60384086E12, 868.0553633217995], [1.60384092E12, 758.0191082802548]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384092E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.05095541401273883, "minX": 1.60384086E12, "maxY": 0.21107266435986155, "series": [{"data": [[1.60384086E12, 0.21107266435986155], [1.60384092E12, 0.05095541401273883]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384092E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 171.0, "minX": 1.60384086E12, "maxY": 4061.0, "series": [{"data": [[1.60384086E12, 4061.0], [1.60384092E12, 1766.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384086E12, 195.21099986195566], [1.60384092E12, 235.6419995856285]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384086E12, 195.73210005521776], [1.60384092E12, 237.20620016574858]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384086E12, 195.5004999309778], [1.60384092E12, 236.51099979281426]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384086E12, 171.0], [1.60384092E12, 231.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384086E12, 801.0], [1.60384092E12, 682.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384092E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 583.5, "minX": 2.0, "maxY": 2747.0, "series": [{"data": [[2.0, 2747.0], [8.0, 998.5], [9.0, 996.5], [10.0, 952.5], [11.0, 877.0], [12.0, 799.5], [13.0, 728.0], [14.0, 656.0], [15.0, 766.0], [16.0, 640.0], [17.0, 645.5], [18.0, 620.0], [20.0, 583.5], [6.0, 1509.0], [7.0, 1062.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 583.5, "minX": 2.0, "maxY": 2744.5, "series": [{"data": [[2.0, 2744.5], [8.0, 998.0], [9.0, 995.0], [10.0, 951.0], [11.0, 877.0], [12.0, 797.5], [13.0, 726.0], [14.0, 653.0], [15.0, 765.0], [16.0, 639.0], [17.0, 645.5], [18.0, 619.5], [20.0, 583.5], [6.0, 1499.5], [7.0, 1062.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.45, "minX": 1.60384086E12, "maxY": 9.8, "series": [{"data": [[1.60384086E12, 9.8], [1.60384092E12, 2.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384092E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.6166666666666667, "minX": 1.60384086E12, "maxY": 9.633333333333333, "series": [{"data": [[1.60384086E12, 9.633333333333333], [1.60384092E12, 2.6166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384092E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.6166666666666667, "minX": 1.60384086E12, "maxY": 9.633333333333333, "series": [{"data": [[1.60384086E12, 9.633333333333333], [1.60384092E12, 2.6166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384092E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.6166666666666667, "minX": 1.60384086E12, "maxY": 9.633333333333333, "series": [{"data": [[1.60384086E12, 9.633333333333333], [1.60384092E12, 2.6166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384092E12, "title": "Total Transactions Per Second"}},
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

