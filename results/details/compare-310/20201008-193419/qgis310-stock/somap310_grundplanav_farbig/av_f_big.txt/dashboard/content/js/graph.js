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
        data: {"result": {"minY": 172.0, "minX": 0.0, "maxY": 4927.0, "series": [{"data": [[0.0, 172.0], [0.1, 172.0], [0.2, 175.0], [0.3, 185.0], [0.4, 185.0], [0.5, 197.0], [0.6, 200.0], [0.7, 213.0], [0.8, 213.0], [0.9, 213.0], [1.0, 216.0], [1.1, 216.0], [1.2, 216.0], [1.3, 223.0], [1.4, 225.0], [1.5, 225.0], [1.6, 225.0], [1.7, 230.0], [1.8, 238.0], [1.9, 238.0], [2.0, 242.0], [2.1, 244.0], [2.2, 244.0], [2.3, 244.0], [2.4, 246.0], [2.5, 248.0], [2.6, 248.0], [2.7, 248.0], [2.8, 255.0], [2.9, 256.0], [3.0, 262.0], [3.1, 262.0], [3.2, 264.0], [3.3, 265.0], [3.4, 265.0], [3.5, 267.0], [3.6, 272.0], [3.7, 273.0], [3.8, 273.0], [3.9, 279.0], [4.0, 280.0], [4.1, 283.0], [4.2, 283.0], [4.3, 283.0], [4.4, 284.0], [4.5, 285.0], [4.6, 285.0], [4.7, 286.0], [4.8, 289.0], [4.9, 290.0], [5.0, 290.0], [5.1, 291.0], [5.2, 292.0], [5.3, 292.0], [5.4, 293.0], [5.5, 294.0], [5.6, 295.0], [5.7, 295.0], [5.8, 302.0], [5.9, 303.0], [6.0, 306.0], [6.1, 306.0], [6.2, 310.0], [6.3, 317.0], [6.4, 320.0], [6.5, 320.0], [6.6, 321.0], [6.7, 321.0], [6.8, 321.0], [6.9, 325.0], [7.0, 325.0], [7.1, 326.0], [7.2, 326.0], [7.3, 326.0], [7.4, 330.0], [7.5, 331.0], [7.6, 331.0], [7.7, 332.0], [7.8, 332.0], [7.9, 333.0], [8.0, 333.0], [8.1, 336.0], [8.2, 336.0], [8.3, 338.0], [8.4, 338.0], [8.5, 339.0], [8.6, 341.0], [8.7, 341.0], [8.8, 342.0], [8.9, 345.0], [9.0, 347.0], [9.1, 347.0], [9.2, 350.0], [9.3, 351.0], [9.4, 352.0], [9.5, 352.0], [9.6, 352.0], [9.7, 353.0], [9.8, 353.0], [9.9, 353.0], [10.0, 353.0], [10.1, 354.0], [10.2, 354.0], [10.3, 355.0], [10.4, 360.0], [10.5, 360.0], [10.6, 360.0], [10.7, 361.0], [10.8, 361.0], [10.9, 361.0], [11.0, 361.0], [11.1, 366.0], [11.2, 367.0], [11.3, 368.0], [11.4, 368.0], [11.5, 369.0], [11.6, 369.0], [11.7, 369.0], [11.8, 371.0], [11.9, 372.0], [12.0, 373.0], [12.1, 373.0], [12.2, 373.0], [12.3, 375.0], [12.4, 375.0], [12.5, 375.0], [12.6, 377.0], [12.7, 377.0], [12.8, 378.0], [12.9, 378.0], [13.0, 381.0], [13.1, 382.0], [13.2, 383.0], [13.3, 383.0], [13.4, 384.0], [13.5, 385.0], [13.6, 385.0], [13.7, 385.0], [13.8, 386.0], [13.9, 387.0], [14.0, 387.0], [14.1, 389.0], [14.2, 397.0], [14.3, 398.0], [14.4, 398.0], [14.5, 402.0], [14.6, 402.0], [14.7, 402.0], [14.8, 402.0], [14.9, 403.0], [15.0, 406.0], [15.1, 406.0], [15.2, 406.0], [15.3, 409.0], [15.4, 410.0], [15.5, 410.0], [15.6, 410.0], [15.7, 416.0], [15.8, 418.0], [15.9, 418.0], [16.0, 419.0], [16.1, 421.0], [16.2, 423.0], [16.3, 423.0], [16.4, 423.0], [16.5, 425.0], [16.6, 426.0], [16.7, 426.0], [16.8, 429.0], [16.9, 432.0], [17.0, 432.0], [17.1, 432.0], [17.2, 432.0], [17.3, 432.0], [17.4, 432.0], [17.5, 433.0], [17.6, 434.0], [17.7, 437.0], [17.8, 437.0], [17.9, 441.0], [18.0, 442.0], [18.1, 442.0], [18.2, 442.0], [18.3, 445.0], [18.4, 446.0], [18.5, 446.0], [18.6, 456.0], [18.7, 458.0], [18.8, 460.0], [18.9, 460.0], [19.0, 463.0], [19.1, 464.0], [19.2, 464.0], [19.3, 464.0], [19.4, 467.0], [19.5, 471.0], [19.6, 472.0], [19.7, 472.0], [19.8, 472.0], [19.9, 474.0], [20.0, 474.0], [20.1, 474.0], [20.2, 474.0], [20.3, 475.0], [20.4, 475.0], [20.5, 475.0], [20.6, 479.0], [20.7, 480.0], [20.8, 480.0], [20.9, 483.0], [21.0, 483.0], [21.1, 486.0], [21.2, 486.0], [21.3, 488.0], [21.4, 489.0], [21.5, 492.0], [21.6, 492.0], [21.7, 499.0], [21.8, 499.0], [21.9, 499.0], [22.0, 500.0], [22.1, 503.0], [22.2, 503.0], [22.3, 503.0], [22.4, 507.0], [22.5, 510.0], [22.6, 511.0], [22.7, 511.0], [22.8, 512.0], [22.9, 513.0], [23.0, 513.0], [23.1, 513.0], [23.2, 514.0], [23.3, 514.0], [23.4, 514.0], [23.5, 514.0], [23.6, 515.0], [23.7, 516.0], [23.8, 516.0], [23.9, 517.0], [24.0, 518.0], [24.1, 519.0], [24.2, 519.0], [24.3, 522.0], [24.4, 523.0], [24.5, 524.0], [24.6, 524.0], [24.7, 526.0], [24.8, 526.0], [24.9, 527.0], [25.0, 527.0], [25.1, 529.0], [25.2, 533.0], [25.3, 533.0], [25.4, 533.0], [25.5, 535.0], [25.6, 535.0], [25.7, 535.0], [25.8, 536.0], [25.9, 537.0], [26.0, 538.0], [26.1, 538.0], [26.2, 539.0], [26.3, 543.0], [26.4, 544.0], [26.5, 544.0], [26.6, 547.0], [26.7, 547.0], [26.8, 547.0], [26.9, 550.0], [27.0, 553.0], [27.1, 553.0], [27.2, 553.0], [27.3, 554.0], [27.4, 554.0], [27.5, 554.0], [27.6, 554.0], [27.7, 556.0], [27.8, 557.0], [27.9, 557.0], [28.0, 557.0], [28.1, 558.0], [28.2, 560.0], [28.3, 561.0], [28.4, 561.0], [28.5, 561.0], [28.6, 562.0], [28.7, 562.0], [28.8, 562.0], [28.9, 563.0], [29.0, 564.0], [29.1, 564.0], [29.2, 566.0], [29.3, 567.0], [29.4, 568.0], [29.5, 568.0], [29.6, 569.0], [29.7, 576.0], [29.8, 580.0], [29.9, 580.0], [30.0, 581.0], [30.1, 582.0], [30.2, 582.0], [30.3, 584.0], [30.4, 585.0], [30.5, 589.0], [30.6, 589.0], [30.7, 589.0], [30.8, 589.0], [30.9, 590.0], [31.0, 590.0], [31.1, 592.0], [31.2, 593.0], [31.3, 593.0], [31.4, 593.0], [31.5, 595.0], [31.6, 595.0], [31.7, 595.0], [31.8, 595.0], [31.9, 596.0], [32.0, 596.0], [32.1, 596.0], [32.2, 599.0], [32.3, 600.0], [32.4, 600.0], [32.5, 600.0], [32.6, 603.0], [32.7, 605.0], [32.8, 606.0], [32.9, 606.0], [33.0, 607.0], [33.1, 611.0], [33.2, 611.0], [33.3, 611.0], [33.4, 612.0], [33.5, 613.0], [33.6, 613.0], [33.7, 614.0], [33.8, 614.0], [33.9, 616.0], [34.0, 616.0], [34.1, 617.0], [34.2, 617.0], [34.3, 619.0], [34.4, 619.0], [34.5, 619.0], [34.6, 619.0], [34.7, 619.0], [34.8, 619.0], [34.9, 620.0], [35.0, 621.0], [35.1, 621.0], [35.2, 621.0], [35.3, 623.0], [35.4, 625.0], [35.5, 625.0], [35.6, 626.0], [35.7, 631.0], [35.8, 632.0], [35.9, 632.0], [36.0, 633.0], [36.1, 634.0], [36.2, 637.0], [36.3, 637.0], [36.4, 639.0], [36.5, 640.0], [36.6, 640.0], [36.7, 640.0], [36.8, 642.0], [36.9, 645.0], [37.0, 645.0], [37.1, 646.0], [37.2, 647.0], [37.3, 649.0], [37.4, 649.0], [37.5, 649.0], [37.6, 649.0], [37.7, 650.0], [37.8, 650.0], [37.9, 651.0], [38.0, 657.0], [38.1, 658.0], [38.2, 658.0], [38.3, 659.0], [38.4, 665.0], [38.5, 665.0], [38.6, 666.0], [38.7, 666.0], [38.8, 667.0], [38.9, 667.0], [39.0, 671.0], [39.1, 671.0], [39.2, 672.0], [39.3, 672.0], [39.4, 673.0], [39.5, 673.0], [39.6, 674.0], [39.7, 674.0], [39.8, 675.0], [39.9, 675.0], [40.0, 676.0], [40.1, 676.0], [40.2, 676.0], [40.3, 678.0], [40.4, 678.0], [40.5, 682.0], [40.6, 685.0], [40.7, 686.0], [40.8, 686.0], [40.9, 691.0], [41.0, 691.0], [41.1, 693.0], [41.2, 693.0], [41.3, 694.0], [41.4, 697.0], [41.5, 698.0], [41.6, 698.0], [41.7, 700.0], [41.8, 701.0], [41.9, 701.0], [42.0, 705.0], [42.1, 706.0], [42.2, 708.0], [42.3, 708.0], [42.4, 709.0], [42.5, 710.0], [42.6, 710.0], [42.7, 710.0], [42.8, 712.0], [42.9, 713.0], [43.0, 720.0], [43.1, 720.0], [43.2, 720.0], [43.3, 721.0], [43.4, 721.0], [43.5, 726.0], [43.6, 727.0], [43.7, 727.0], [43.8, 727.0], [43.9, 730.0], [44.0, 730.0], [44.1, 730.0], [44.2, 730.0], [44.3, 736.0], [44.4, 738.0], [44.5, 742.0], [44.6, 742.0], [44.7, 743.0], [44.8, 743.0], [44.9, 746.0], [45.0, 746.0], [45.1, 748.0], [45.2, 753.0], [45.3, 753.0], [45.4, 757.0], [45.5, 757.0], [45.6, 758.0], [45.7, 758.0], [45.8, 758.0], [45.9, 758.0], [46.0, 758.0], [46.1, 758.0], [46.2, 760.0], [46.3, 760.0], [46.4, 763.0], [46.5, 763.0], [46.6, 766.0], [46.7, 768.0], [46.8, 768.0], [46.9, 773.0], [47.0, 775.0], [47.1, 787.0], [47.2, 787.0], [47.3, 788.0], [47.4, 788.0], [47.5, 789.0], [47.6, 789.0], [47.7, 790.0], [47.8, 793.0], [47.9, 793.0], [48.0, 793.0], [48.1, 795.0], [48.2, 796.0], [48.3, 796.0], [48.4, 796.0], [48.5, 798.0], [48.6, 799.0], [48.7, 799.0], [48.8, 801.0], [48.9, 803.0], [49.0, 805.0], [49.1, 805.0], [49.2, 805.0], [49.3, 808.0], [49.4, 809.0], [49.5, 809.0], [49.6, 810.0], [49.7, 811.0], [49.8, 812.0], [49.9, 812.0], [50.0, 812.0], [50.1, 812.0], [50.2, 812.0], [50.3, 816.0], [50.4, 818.0], [50.5, 820.0], [50.6, 820.0], [50.7, 820.0], [50.8, 822.0], [50.9, 824.0], [51.0, 824.0], [51.1, 828.0], [51.2, 829.0], [51.3, 832.0], [51.4, 832.0], [51.5, 833.0], [51.6, 834.0], [51.7, 834.0], [51.8, 836.0], [51.9, 836.0], [52.0, 836.0], [52.1, 836.0], [52.2, 836.0], [52.3, 838.0], [52.4, 839.0], [52.5, 839.0], [52.6, 841.0], [52.7, 843.0], [52.8, 851.0], [52.9, 851.0], [53.0, 852.0], [53.1, 852.0], [53.2, 855.0], [53.3, 855.0], [53.4, 859.0], [53.5, 860.0], [53.6, 860.0], [53.7, 861.0], [53.8, 863.0], [53.9, 865.0], [54.0, 865.0], [54.1, 865.0], [54.2, 868.0], [54.3, 868.0], [54.4, 868.0], [54.5, 868.0], [54.6, 869.0], [54.7, 869.0], [54.8, 869.0], [54.9, 870.0], [55.0, 876.0], [55.1, 876.0], [55.2, 879.0], [55.3, 882.0], [55.4, 883.0], [55.5, 883.0], [55.6, 885.0], [55.7, 886.0], [55.8, 889.0], [55.9, 889.0], [56.0, 896.0], [56.1, 897.0], [56.2, 898.0], [56.3, 898.0], [56.4, 900.0], [56.5, 901.0], [56.6, 902.0], [56.7, 902.0], [56.8, 904.0], [56.9, 904.0], [57.0, 904.0], [57.1, 904.0], [57.2, 905.0], [57.3, 906.0], [57.4, 906.0], [57.5, 908.0], [57.6, 909.0], [57.7, 909.0], [57.8, 909.0], [57.9, 910.0], [58.0, 910.0], [58.1, 911.0], [58.2, 911.0], [58.3, 912.0], [58.4, 915.0], [58.5, 915.0], [58.6, 918.0], [58.7, 919.0], [58.8, 919.0], [58.9, 919.0], [59.0, 924.0], [59.1, 924.0], [59.2, 931.0], [59.3, 931.0], [59.4, 932.0], [59.5, 933.0], [59.6, 935.0], [59.7, 935.0], [59.8, 939.0], [59.9, 939.0], [60.0, 944.0], [60.1, 944.0], [60.2, 948.0], [60.3, 949.0], [60.4, 949.0], [60.5, 951.0], [60.6, 951.0], [60.7, 951.0], [60.8, 951.0], [60.9, 951.0], [61.0, 952.0], [61.1, 955.0], [61.2, 955.0], [61.3, 955.0], [61.4, 957.0], [61.5, 961.0], [61.6, 961.0], [61.7, 962.0], [61.8, 963.0], [61.9, 963.0], [62.0, 963.0], [62.1, 964.0], [62.2, 965.0], [62.3, 965.0], [62.4, 966.0], [62.5, 967.0], [62.6, 968.0], [62.7, 968.0], [62.8, 973.0], [62.9, 974.0], [63.0, 976.0], [63.1, 976.0], [63.2, 979.0], [63.3, 982.0], [63.4, 982.0], [63.5, 982.0], [63.6, 983.0], [63.7, 985.0], [63.8, 985.0], [63.9, 992.0], [64.0, 993.0], [64.1, 993.0], [64.2, 993.0], [64.3, 994.0], [64.4, 996.0], [64.5, 997.0], [64.6, 997.0], [64.7, 998.0], [64.8, 999.0], [64.9, 1000.0], [65.0, 1000.0], [65.1, 1000.0], [65.2, 1002.0], [65.3, 1002.0], [65.4, 1003.0], [65.5, 1007.0], [65.6, 1007.0], [65.7, 1007.0], [65.8, 1009.0], [65.9, 1014.0], [66.0, 1015.0], [66.1, 1015.0], [66.2, 1015.0], [66.3, 1020.0], [66.4, 1021.0], [66.5, 1021.0], [66.6, 1022.0], [66.7, 1023.0], [66.8, 1023.0], [66.9, 1023.0], [67.0, 1026.0], [67.1, 1026.0], [67.2, 1026.0], [67.3, 1030.0], [67.4, 1031.0], [67.5, 1034.0], [67.6, 1034.0], [67.7, 1042.0], [67.8, 1044.0], [67.9, 1045.0], [68.0, 1045.0], [68.1, 1046.0], [68.2, 1046.0], [68.3, 1047.0], [68.4, 1047.0], [68.5, 1048.0], [68.6, 1050.0], [68.7, 1050.0], [68.8, 1051.0], [68.9, 1053.0], [69.0, 1055.0], [69.1, 1055.0], [69.2, 1055.0], [69.3, 1055.0], [69.4, 1057.0], [69.5, 1057.0], [69.6, 1068.0], [69.7, 1071.0], [69.8, 1072.0], [69.9, 1072.0], [70.0, 1073.0], [70.1, 1095.0], [70.2, 1095.0], [70.3, 1096.0], [70.4, 1096.0], [70.5, 1103.0], [70.6, 1103.0], [70.7, 1108.0], [70.8, 1109.0], [70.9, 1121.0], [71.0, 1121.0], [71.1, 1122.0], [71.2, 1123.0], [71.3, 1128.0], [71.4, 1128.0], [71.5, 1131.0], [71.6, 1135.0], [71.7, 1135.0], [71.8, 1136.0], [71.9, 1137.0], [72.0, 1139.0], [72.1, 1139.0], [72.2, 1140.0], [72.3, 1141.0], [72.4, 1141.0], [72.5, 1141.0], [72.6, 1141.0], [72.7, 1144.0], [72.8, 1144.0], [72.9, 1144.0], [73.0, 1144.0], [73.1, 1145.0], [73.2, 1146.0], [73.3, 1146.0], [73.4, 1146.0], [73.5, 1146.0], [73.6, 1146.0], [73.7, 1153.0], [73.8, 1155.0], [73.9, 1155.0], [74.0, 1155.0], [74.1, 1156.0], [74.2, 1160.0], [74.3, 1163.0], [74.4, 1163.0], [74.5, 1165.0], [74.6, 1170.0], [74.7, 1172.0], [74.8, 1172.0], [74.9, 1178.0], [75.0, 1180.0], [75.1, 1180.0], [75.2, 1182.0], [75.3, 1183.0], [75.4, 1186.0], [75.5, 1186.0], [75.6, 1192.0], [75.7, 1195.0], [75.8, 1196.0], [75.9, 1196.0], [76.0, 1198.0], [76.1, 1198.0], [76.2, 1200.0], [76.3, 1200.0], [76.4, 1203.0], [76.5, 1207.0], [76.6, 1207.0], [76.7, 1207.0], [76.8, 1210.0], [76.9, 1213.0], [77.0, 1213.0], [77.1, 1213.0], [77.2, 1219.0], [77.3, 1228.0], [77.4, 1228.0], [77.5, 1232.0], [77.6, 1232.0], [77.7, 1232.0], [77.8, 1232.0], [77.9, 1233.0], [78.0, 1233.0], [78.1, 1234.0], [78.2, 1234.0], [78.3, 1235.0], [78.4, 1238.0], [78.5, 1238.0], [78.6, 1239.0], [78.7, 1241.0], [78.8, 1243.0], [78.9, 1243.0], [79.0, 1246.0], [79.1, 1247.0], [79.2, 1251.0], [79.3, 1251.0], [79.4, 1252.0], [79.5, 1253.0], [79.6, 1254.0], [79.7, 1254.0], [79.8, 1255.0], [79.9, 1258.0], [80.0, 1260.0], [80.1, 1260.0], [80.2, 1261.0], [80.3, 1263.0], [80.4, 1263.0], [80.5, 1264.0], [80.6, 1271.0], [80.7, 1272.0], [80.8, 1272.0], [80.9, 1272.0], [81.0, 1276.0], [81.1, 1276.0], [81.2, 1276.0], [81.3, 1278.0], [81.4, 1281.0], [81.5, 1284.0], [81.6, 1284.0], [81.7, 1284.0], [81.8, 1284.0], [81.9, 1284.0], [82.0, 1286.0], [82.1, 1287.0], [82.2, 1289.0], [82.3, 1289.0], [82.4, 1291.0], [82.5, 1293.0], [82.6, 1295.0], [82.7, 1295.0], [82.8, 1307.0], [82.9, 1308.0], [83.0, 1308.0], [83.1, 1308.0], [83.2, 1308.0], [83.3, 1310.0], [83.4, 1310.0], [83.5, 1327.0], [83.6, 1328.0], [83.7, 1334.0], [83.8, 1334.0], [83.9, 1335.0], [84.0, 1335.0], [84.1, 1336.0], [84.2, 1336.0], [84.3, 1345.0], [84.4, 1349.0], [84.5, 1350.0], [84.6, 1350.0], [84.7, 1352.0], [84.8, 1353.0], [84.9, 1355.0], [85.0, 1355.0], [85.1, 1363.0], [85.2, 1365.0], [85.3, 1365.0], [85.4, 1367.0], [85.5, 1371.0], [85.6, 1371.0], [85.7, 1371.0], [85.8, 1375.0], [85.9, 1377.0], [86.0, 1382.0], [86.1, 1382.0], [86.2, 1383.0], [86.3, 1391.0], [86.4, 1391.0], [86.5, 1391.0], [86.6, 1401.0], [86.7, 1401.0], [86.8, 1401.0], [86.9, 1401.0], [87.0, 1402.0], [87.1, 1407.0], [87.2, 1407.0], [87.3, 1407.0], [87.4, 1410.0], [87.5, 1411.0], [87.6, 1411.0], [87.7, 1413.0], [87.8, 1418.0], [87.9, 1441.0], [88.0, 1441.0], [88.1, 1441.0], [88.2, 1446.0], [88.3, 1447.0], [88.4, 1447.0], [88.5, 1449.0], [88.6, 1450.0], [88.7, 1450.0], [88.8, 1459.0], [88.9, 1461.0], [89.0, 1463.0], [89.1, 1463.0], [89.2, 1467.0], [89.3, 1473.0], [89.4, 1478.0], [89.5, 1478.0], [89.6, 1482.0], [89.7, 1483.0], [89.8, 1492.0], [89.9, 1492.0], [90.0, 1503.0], [90.1, 1504.0], [90.2, 1504.0], [90.3, 1506.0], [90.4, 1511.0], [90.5, 1517.0], [90.6, 1517.0], [90.7, 1518.0], [90.8, 1518.0], [90.9, 1522.0], [91.0, 1522.0], [91.1, 1526.0], [91.2, 1527.0], [91.3, 1528.0], [91.4, 1528.0], [91.5, 1530.0], [91.6, 1536.0], [91.7, 1536.0], [91.8, 1540.0], [91.9, 1552.0], [92.0, 1561.0], [92.1, 1561.0], [92.2, 1572.0], [92.3, 1580.0], [92.4, 1587.0], [92.5, 1587.0], [92.6, 1588.0], [92.7, 1596.0], [92.8, 1611.0], [92.9, 1611.0], [93.0, 1618.0], [93.1, 1620.0], [93.2, 1633.0], [93.3, 1633.0], [93.4, 1639.0], [93.5, 1653.0], [93.6, 1653.0], [93.7, 1667.0], [93.8, 1688.0], [93.9, 1689.0], [94.0, 1689.0], [94.1, 1691.0], [94.2, 1692.0], [94.3, 1700.0], [94.4, 1700.0], [94.5, 1707.0], [94.6, 1714.0], [94.7, 1722.0], [94.8, 1722.0], [94.9, 1740.0], [95.0, 1742.0], [95.1, 1742.0], [95.2, 1757.0], [95.3, 1761.0], [95.4, 1763.0], [95.5, 1763.0], [95.6, 1772.0], [95.7, 1772.0], [95.8, 1794.0], [95.9, 1794.0], [96.0, 1807.0], [96.1, 1912.0], [96.2, 1963.0], [96.3, 1963.0], [96.4, 1975.0], [96.5, 1975.0], [96.6, 1986.0], [96.7, 1986.0], [96.8, 1997.0], [96.9, 2009.0], [97.0, 2009.0], [97.1, 2028.0], [97.2, 2052.0], [97.3, 2108.0], [97.4, 2108.0], [97.5, 2200.0], [97.6, 2247.0], [97.7, 2438.0], [97.8, 2438.0], [97.9, 2715.0], [98.0, 3059.0], [98.1, 3180.0], [98.2, 3180.0], [98.3, 3439.0], [98.4, 3870.0], [98.5, 3870.0], [98.6, 3899.0], [98.7, 3984.0], [98.8, 4125.0], [98.9, 4125.0], [99.0, 4150.0], [99.1, 4198.0], [99.2, 4285.0], [99.3, 4285.0], [99.4, 4414.0], [99.5, 4567.0], [99.6, 4599.0], [99.7, 4599.0], [99.8, 4873.0], [99.9, 4927.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 76.0, "series": [{"data": [[600.0, 69.0], [700.0, 52.0], [800.0, 56.0], [900.0, 63.0], [1000.0, 41.0], [1100.0, 42.0], [1200.0, 48.0], [1300.0, 28.0], [1400.0, 25.0], [1500.0, 21.0], [1600.0, 11.0], [100.0, 4.0], [1700.0, 12.0], [1800.0, 1.0], [1900.0, 6.0], [2000.0, 3.0], [2100.0, 1.0], [2200.0, 2.0], [2400.0, 1.0], [2700.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 38.0], [3400.0, 1.0], [3800.0, 2.0], [3900.0, 1.0], [4100.0, 3.0], [4200.0, 1.0], [4400.0, 1.0], [4500.0, 2.0], [4800.0, 1.0], [300.0, 64.0], [4900.0, 1.0], [400.0, 55.0], [500.0, 76.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 74.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 499.0, "series": [{"data": [[0.0, 162.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 499.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 74.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.842293906810037, "minX": 1.60218588E12, "maxY": 10.0, "series": [{"data": [[1.60218588E12, 10.0], [1.60218594E12, 9.842293906810037]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218594E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 547.0, "minX": 1.0, "maxY": 926.9669876203577, "series": [{"data": [[8.0, 593.0], [4.0, 547.0], [2.0, 647.0], [1.0, 911.0], [10.0, 926.9669876203577], [5.0, 637.0], [6.0, 620.0], [3.0, 924.0], [7.0, 584.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 924.3102040816327]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2094.5833333333335, "minX": 1.60218588E12, "maxY": 1222793.2333333334, "series": [{"data": [[1.60218588E12, 1222793.2333333334], [1.60218594E12, 612972.7333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218588E12, 3428.45], [1.60218594E12, 2094.5833333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218594E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 778.8530465949826, "minX": 1.60218588E12, "maxY": 1013.3070175438596, "series": [{"data": [[1.60218588E12, 1013.3070175438596], [1.60218594E12, 778.8530465949826]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218594E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 777.9820788530471, "minX": 1.60218588E12, "maxY": 1012.1184210526321, "series": [{"data": [[1.60218588E12, 1012.1184210526321], [1.60218594E12, 777.9820788530471]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218594E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03584229390681005, "minX": 1.60218588E12, "maxY": 0.4276315789473684, "series": [{"data": [[1.60218588E12, 0.4276315789473684], [1.60218594E12, 0.03584229390681005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218594E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 172.0, "minX": 1.60218588E12, "maxY": 4927.0, "series": [{"data": [[1.60218588E12, 4927.0], [1.60218594E12, 1912.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218588E12, 197.33899967312811], [1.60218594E12, 243.0399998664856]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218588E12, 198.57290013074874], [1.60218594E12, 243.54400005340577]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218588E12, 198.02449983656408], [1.60218594E12, 243.3199999332428]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218588E12, 172.0], [1.60218594E12, 238.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218588E12, 851.5], [1.60218594E12, 746.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218594E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 406.0, "minX": 6.0, "maxY": 1534.0, "series": [{"data": [[8.0, 1150.5], [9.0, 1021.0], [10.0, 935.0], [11.0, 912.0], [12.0, 810.5], [13.0, 817.0], [14.0, 723.5], [15.0, 619.0], [16.0, 796.0], [18.0, 584.5], [19.0, 594.0], [20.0, 406.0], [6.0, 1534.0], [7.0, 917.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 406.0, "minX": 6.0, "maxY": 1533.5, "series": [{"data": [[8.0, 1149.0], [9.0, 1021.0], [10.0, 934.0], [11.0, 909.0], [12.0, 809.0], [13.0, 817.0], [14.0, 723.0], [15.0, 619.0], [16.0, 795.0], [18.0, 584.0], [19.0, 594.0], [20.0, 406.0], [6.0, 1533.5], [7.0, 915.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.483333333333333, "minX": 1.60218588E12, "maxY": 7.766666666666667, "series": [{"data": [[1.60218588E12, 7.766666666666667], [1.60218594E12, 4.483333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218594E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.65, "minX": 1.60218588E12, "maxY": 7.6, "series": [{"data": [[1.60218588E12, 7.6], [1.60218594E12, 4.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218594E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.65, "minX": 1.60218588E12, "maxY": 7.6, "series": [{"data": [[1.60218588E12, 7.6], [1.60218594E12, 4.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218594E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.65, "minX": 1.60218588E12, "maxY": 7.6, "series": [{"data": [[1.60218588E12, 7.6], [1.60218594E12, 4.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218594E12, "title": "Total Transactions Per Second"}},
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

