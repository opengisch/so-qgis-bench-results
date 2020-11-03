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
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 4793.0, "series": [{"data": [[0.0, 8.0], [0.1, 8.0], [0.2, 9.0], [0.3, 9.0], [0.4, 9.0], [0.5, 10.0], [0.6, 11.0], [0.7, 13.0], [0.8, 13.0], [0.9, 14.0], [1.0, 16.0], [1.1, 18.0], [1.2, 18.0], [1.3, 20.0], [1.4, 21.0], [1.5, 23.0], [1.6, 23.0], [1.7, 24.0], [1.8, 25.0], [1.9, 25.0], [2.0, 25.0], [2.1, 25.0], [2.2, 26.0], [2.3, 26.0], [2.4, 34.0], [2.5, 35.0], [2.6, 36.0], [2.7, 36.0], [2.8, 40.0], [2.9, 41.0], [3.0, 42.0], [3.1, 42.0], [3.2, 48.0], [3.3, 49.0], [3.4, 49.0], [3.5, 50.0], [3.6, 53.0], [3.7, 56.0], [3.8, 56.0], [3.9, 71.0], [4.0, 102.0], [4.1, 120.0], [4.2, 120.0], [4.3, 128.0], [4.4, 131.0], [4.5, 131.0], [4.6, 131.0], [4.7, 134.0], [4.8, 135.0], [4.9, 137.0], [5.0, 137.0], [5.1, 139.0], [5.2, 140.0], [5.3, 140.0], [5.4, 140.0], [5.5, 142.0], [5.6, 143.0], [5.7, 143.0], [5.8, 145.0], [5.9, 146.0], [6.0, 146.0], [6.1, 146.0], [6.2, 148.0], [6.3, 148.0], [6.4, 148.0], [6.5, 148.0], [6.6, 150.0], [6.7, 151.0], [6.8, 151.0], [6.9, 152.0], [7.0, 152.0], [7.1, 152.0], [7.2, 152.0], [7.3, 153.0], [7.4, 153.0], [7.5, 153.0], [7.6, 153.0], [7.7, 154.0], [7.8, 154.0], [7.9, 155.0], [8.0, 155.0], [8.1, 158.0], [8.2, 160.0], [8.3, 160.0], [8.4, 160.0], [8.5, 161.0], [8.6, 162.0], [8.7, 162.0], [8.8, 163.0], [8.9, 163.0], [9.0, 164.0], [9.1, 164.0], [9.2, 164.0], [9.3, 166.0], [9.4, 166.0], [9.5, 166.0], [9.6, 169.0], [9.7, 172.0], [9.8, 173.0], [9.9, 173.0], [10.0, 177.0], [10.1, 177.0], [10.2, 177.0], [10.3, 180.0], [10.4, 180.0], [10.5, 180.0], [10.6, 180.0], [10.7, 181.0], [10.8, 182.0], [10.9, 183.0], [11.0, 183.0], [11.1, 184.0], [11.2, 188.0], [11.3, 188.0], [11.4, 188.0], [11.5, 189.0], [11.6, 191.0], [11.7, 191.0], [11.8, 193.0], [11.9, 197.0], [12.0, 199.0], [12.1, 199.0], [12.2, 200.0], [12.3, 209.0], [12.4, 220.0], [12.5, 220.0], [12.6, 229.0], [12.7, 237.0], [12.8, 239.0], [12.9, 239.0], [13.0, 248.0], [13.1, 250.0], [13.2, 254.0], [13.3, 254.0], [13.4, 255.0], [13.5, 255.0], [13.6, 255.0], [13.7, 257.0], [13.8, 257.0], [13.9, 258.0], [14.0, 258.0], [14.1, 258.0], [14.2, 258.0], [14.3, 258.0], [14.4, 258.0], [14.5, 261.0], [14.6, 262.0], [14.7, 263.0], [14.8, 263.0], [14.9, 263.0], [15.0, 264.0], [15.1, 264.0], [15.2, 264.0], [15.3, 265.0], [15.4, 265.0], [15.5, 265.0], [15.6, 266.0], [15.7, 266.0], [15.8, 266.0], [15.9, 266.0], [16.0, 267.0], [16.1, 268.0], [16.2, 269.0], [16.3, 269.0], [16.4, 269.0], [16.5, 270.0], [16.6, 272.0], [16.7, 272.0], [16.8, 273.0], [16.9, 273.0], [17.0, 273.0], [17.1, 276.0], [17.2, 276.0], [17.3, 276.0], [17.4, 276.0], [17.5, 276.0], [17.6, 276.0], [17.7, 277.0], [17.8, 277.0], [17.9, 277.0], [18.0, 278.0], [18.1, 278.0], [18.2, 278.0], [18.3, 278.0], [18.4, 279.0], [18.5, 279.0], [18.6, 280.0], [18.7, 280.0], [18.8, 281.0], [18.9, 281.0], [19.0, 281.0], [19.1, 281.0], [19.2, 282.0], [19.3, 282.0], [19.4, 282.0], [19.5, 283.0], [19.6, 283.0], [19.7, 283.0], [19.8, 284.0], [19.9, 285.0], [20.0, 287.0], [20.1, 287.0], [20.2, 287.0], [20.3, 290.0], [20.4, 290.0], [20.5, 291.0], [20.6, 292.0], [20.7, 292.0], [20.8, 292.0], [20.9, 294.0], [21.0, 295.0], [21.1, 296.0], [21.2, 296.0], [21.3, 296.0], [21.4, 300.0], [21.5, 300.0], [21.6, 300.0], [21.7, 301.0], [21.8, 302.0], [21.9, 302.0], [22.0, 303.0], [22.1, 308.0], [22.2, 311.0], [22.3, 311.0], [22.4, 312.0], [22.5, 312.0], [22.6, 312.0], [22.7, 312.0], [22.8, 312.0], [22.9, 313.0], [23.0, 315.0], [23.1, 315.0], [23.2, 318.0], [23.3, 319.0], [23.4, 319.0], [23.5, 320.0], [23.6, 320.0], [23.7, 321.0], [23.8, 321.0], [23.9, 321.0], [24.0, 322.0], [24.1, 323.0], [24.2, 323.0], [24.3, 323.0], [24.4, 325.0], [24.5, 325.0], [24.6, 325.0], [24.7, 327.0], [24.8, 328.0], [24.9, 329.0], [25.0, 329.0], [25.1, 330.0], [25.2, 331.0], [25.3, 331.0], [25.4, 332.0], [25.5, 334.0], [25.6, 334.0], [25.7, 334.0], [25.8, 336.0], [25.9, 336.0], [26.0, 337.0], [26.1, 337.0], [26.2, 337.0], [26.3, 340.0], [26.4, 340.0], [26.5, 340.0], [26.6, 343.0], [26.7, 344.0], [26.8, 344.0], [26.9, 344.0], [27.0, 345.0], [27.1, 348.0], [27.2, 348.0], [27.3, 350.0], [27.4, 350.0], [27.5, 351.0], [27.6, 351.0], [27.7, 353.0], [27.8, 353.0], [27.9, 353.0], [28.0, 353.0], [28.1, 357.0], [28.2, 360.0], [28.3, 363.0], [28.4, 363.0], [28.5, 364.0], [28.6, 367.0], [28.7, 367.0], [28.8, 368.0], [28.9, 369.0], [29.0, 370.0], [29.1, 370.0], [29.2, 371.0], [29.3, 373.0], [29.4, 376.0], [29.5, 376.0], [29.6, 376.0], [29.7, 382.0], [29.8, 383.0], [29.9, 383.0], [30.0, 385.0], [30.1, 386.0], [30.2, 386.0], [30.3, 391.0], [30.4, 392.0], [30.5, 392.0], [30.6, 392.0], [30.7, 394.0], [30.8, 395.0], [30.9, 397.0], [31.0, 397.0], [31.1, 400.0], [31.2, 405.0], [31.3, 407.0], [31.4, 407.0], [31.5, 407.0], [31.6, 408.0], [31.7, 408.0], [31.8, 410.0], [31.9, 413.0], [32.0, 413.0], [32.1, 413.0], [32.2, 414.0], [32.3, 416.0], [32.4, 425.0], [32.5, 425.0], [32.6, 426.0], [32.7, 426.0], [32.8, 437.0], [32.9, 437.0], [33.0, 438.0], [33.1, 438.0], [33.2, 449.0], [33.3, 449.0], [33.4, 449.0], [33.5, 452.0], [33.6, 452.0], [33.7, 454.0], [33.8, 456.0], [33.9, 463.0], [34.0, 463.0], [34.1, 463.0], [34.2, 465.0], [34.3, 466.0], [34.4, 466.0], [34.5, 469.0], [34.6, 471.0], [34.7, 474.0], [34.8, 474.0], [34.9, 484.0], [35.0, 486.0], [35.1, 486.0], [35.2, 487.0], [35.3, 490.0], [35.4, 490.0], [35.5, 490.0], [35.6, 494.0], [35.7, 495.0], [35.8, 497.0], [35.9, 497.0], [36.0, 502.0], [36.1, 504.0], [36.2, 506.0], [36.3, 506.0], [36.4, 508.0], [36.5, 509.0], [36.6, 513.0], [36.7, 513.0], [36.8, 517.0], [36.9, 526.0], [37.0, 526.0], [37.1, 526.0], [37.2, 528.0], [37.3, 529.0], [37.4, 529.0], [37.5, 531.0], [37.6, 531.0], [37.7, 533.0], [37.8, 533.0], [37.9, 534.0], [38.0, 535.0], [38.1, 537.0], [38.2, 537.0], [38.3, 537.0], [38.4, 539.0], [38.5, 539.0], [38.6, 540.0], [38.7, 541.0], [38.8, 542.0], [38.9, 542.0], [39.0, 543.0], [39.1, 543.0], [39.2, 543.0], [39.3, 543.0], [39.4, 545.0], [39.5, 545.0], [39.6, 547.0], [39.7, 547.0], [39.8, 547.0], [39.9, 548.0], [40.0, 548.0], [40.1, 548.0], [40.2, 549.0], [40.3, 551.0], [40.4, 551.0], [40.5, 554.0], [40.6, 557.0], [40.7, 558.0], [40.8, 558.0], [40.9, 559.0], [41.0, 560.0], [41.1, 560.0], [41.2, 560.0], [41.3, 562.0], [41.4, 563.0], [41.5, 565.0], [41.6, 565.0], [41.7, 565.0], [41.8, 566.0], [41.9, 566.0], [42.0, 567.0], [42.1, 567.0], [42.2, 569.0], [42.3, 569.0], [42.4, 570.0], [42.5, 570.0], [42.6, 570.0], [42.7, 570.0], [42.8, 571.0], [42.9, 571.0], [43.0, 573.0], [43.1, 573.0], [43.2, 575.0], [43.3, 577.0], [43.4, 577.0], [43.5, 579.0], [43.6, 580.0], [43.7, 584.0], [43.8, 584.0], [43.9, 585.0], [44.0, 587.0], [44.1, 587.0], [44.2, 587.0], [44.3, 590.0], [44.4, 590.0], [44.5, 590.0], [44.6, 590.0], [44.7, 607.0], [44.8, 613.0], [44.9, 613.0], [45.0, 613.0], [45.1, 616.0], [45.2, 616.0], [45.3, 616.0], [45.4, 619.0], [45.5, 624.0], [45.6, 630.0], [45.7, 630.0], [45.8, 633.0], [45.9, 634.0], [46.0, 636.0], [46.1, 636.0], [46.2, 636.0], [46.3, 639.0], [46.4, 645.0], [46.5, 645.0], [46.6, 646.0], [46.7, 649.0], [46.8, 649.0], [46.9, 653.0], [47.0, 655.0], [47.1, 657.0], [47.2, 657.0], [47.3, 657.0], [47.4, 666.0], [47.5, 666.0], [47.6, 666.0], [47.7, 675.0], [47.8, 687.0], [47.9, 693.0], [48.0, 693.0], [48.1, 696.0], [48.2, 706.0], [48.3, 706.0], [48.4, 706.0], [48.5, 708.0], [48.6, 713.0], [48.7, 713.0], [48.8, 714.0], [48.9, 714.0], [49.0, 717.0], [49.1, 717.0], [49.2, 718.0], [49.3, 721.0], [49.4, 721.0], [49.5, 721.0], [49.6, 721.0], [49.7, 724.0], [49.8, 724.0], [49.9, 724.0], [50.0, 731.0], [50.1, 732.0], [50.2, 732.0], [50.3, 732.0], [50.4, 732.0], [50.5, 734.0], [50.6, 734.0], [50.7, 737.0], [50.8, 737.0], [50.9, 739.0], [51.0, 739.0], [51.1, 740.0], [51.2, 743.0], [51.3, 743.0], [51.4, 743.0], [51.5, 747.0], [51.6, 748.0], [51.7, 748.0], [51.8, 748.0], [51.9, 748.0], [52.0, 748.0], [52.1, 748.0], [52.2, 750.0], [52.3, 750.0], [52.4, 754.0], [52.5, 754.0], [52.6, 754.0], [52.7, 757.0], [52.8, 760.0], [52.9, 760.0], [53.0, 760.0], [53.1, 760.0], [53.2, 770.0], [53.3, 770.0], [53.4, 771.0], [53.5, 771.0], [53.6, 771.0], [53.7, 773.0], [53.8, 774.0], [53.9, 776.0], [54.0, 776.0], [54.1, 776.0], [54.2, 777.0], [54.3, 778.0], [54.4, 778.0], [54.5, 779.0], [54.6, 781.0], [54.7, 785.0], [54.8, 785.0], [54.9, 788.0], [55.0, 788.0], [55.1, 788.0], [55.2, 794.0], [55.3, 795.0], [55.4, 795.0], [55.5, 795.0], [55.6, 796.0], [55.7, 804.0], [55.8, 805.0], [55.9, 805.0], [56.0, 808.0], [56.1, 809.0], [56.2, 812.0], [56.3, 812.0], [56.4, 816.0], [56.5, 818.0], [56.6, 819.0], [56.7, 819.0], [56.8, 820.0], [56.9, 821.0], [57.0, 821.0], [57.1, 822.0], [57.2, 822.0], [57.3, 822.0], [57.4, 822.0], [57.5, 823.0], [57.6, 826.0], [57.7, 829.0], [57.8, 829.0], [57.9, 831.0], [58.0, 836.0], [58.1, 836.0], [58.2, 836.0], [58.3, 839.0], [58.4, 841.0], [58.5, 841.0], [58.6, 843.0], [58.7, 843.0], [58.8, 845.0], [58.9, 845.0], [59.0, 846.0], [59.1, 848.0], [59.2, 850.0], [59.3, 850.0], [59.4, 852.0], [59.5, 854.0], [59.6, 854.0], [59.7, 854.0], [59.8, 857.0], [59.9, 863.0], [60.0, 869.0], [60.1, 869.0], [60.2, 872.0], [60.3, 872.0], [60.4, 872.0], [60.5, 875.0], [60.6, 879.0], [60.7, 880.0], [60.8, 880.0], [60.9, 888.0], [61.0, 892.0], [61.1, 892.0], [61.2, 892.0], [61.3, 897.0], [61.4, 898.0], [61.5, 901.0], [61.6, 901.0], [61.7, 905.0], [61.8, 906.0], [61.9, 906.0], [62.0, 906.0], [62.1, 907.0], [62.2, 907.0], [62.3, 907.0], [62.4, 908.0], [62.5, 909.0], [62.6, 912.0], [62.7, 912.0], [62.8, 914.0], [62.9, 917.0], [63.0, 920.0], [63.1, 920.0], [63.2, 921.0], [63.3, 922.0], [63.4, 922.0], [63.5, 922.0], [63.6, 927.0], [63.7, 928.0], [63.8, 928.0], [63.9, 929.0], [64.0, 929.0], [64.1, 929.0], [64.2, 929.0], [64.3, 931.0], [64.4, 931.0], [64.5, 932.0], [64.6, 932.0], [64.7, 935.0], [64.8, 935.0], [64.9, 935.0], [65.0, 935.0], [65.1, 936.0], [65.2, 939.0], [65.3, 939.0], [65.4, 944.0], [65.5, 944.0], [65.6, 946.0], [65.7, 946.0], [65.8, 948.0], [65.9, 956.0], [66.0, 959.0], [66.1, 959.0], [66.2, 962.0], [66.3, 963.0], [66.4, 964.0], [66.5, 964.0], [66.6, 964.0], [66.7, 967.0], [66.8, 967.0], [66.9, 968.0], [67.0, 974.0], [67.1, 975.0], [67.2, 975.0], [67.3, 976.0], [67.4, 977.0], [67.5, 982.0], [67.6, 982.0], [67.7, 984.0], [67.8, 987.0], [67.9, 988.0], [68.0, 988.0], [68.1, 994.0], [68.2, 995.0], [68.3, 999.0], [68.4, 999.0], [68.5, 1007.0], [68.6, 1008.0], [68.7, 1008.0], [68.8, 1014.0], [68.9, 1031.0], [69.0, 1037.0], [69.1, 1037.0], [69.2, 1041.0], [69.3, 1043.0], [69.4, 1051.0], [69.5, 1051.0], [69.6, 1051.0], [69.7, 1054.0], [69.8, 1056.0], [69.9, 1056.0], [70.0, 1060.0], [70.1, 1062.0], [70.2, 1062.0], [70.3, 1063.0], [70.4, 1069.0], [70.5, 1071.0], [70.6, 1071.0], [70.7, 1072.0], [70.8, 1073.0], [70.9, 1076.0], [71.0, 1076.0], [71.1, 1081.0], [71.2, 1081.0], [71.3, 1082.0], [71.4, 1082.0], [71.5, 1082.0], [71.6, 1083.0], [71.7, 1083.0], [71.8, 1086.0], [71.9, 1087.0], [72.0, 1088.0], [72.1, 1088.0], [72.2, 1095.0], [72.3, 1097.0], [72.4, 1097.0], [72.5, 1097.0], [72.6, 1098.0], [72.7, 1101.0], [72.8, 1102.0], [72.9, 1102.0], [73.0, 1104.0], [73.1, 1106.0], [73.2, 1115.0], [73.3, 1115.0], [73.4, 1117.0], [73.5, 1117.0], [73.6, 1117.0], [73.7, 1119.0], [73.8, 1123.0], [73.9, 1125.0], [74.0, 1125.0], [74.1, 1125.0], [74.2, 1127.0], [74.3, 1132.0], [74.4, 1132.0], [74.5, 1134.0], [74.6, 1135.0], [74.7, 1138.0], [74.8, 1138.0], [74.9, 1139.0], [75.0, 1140.0], [75.1, 1140.0], [75.2, 1143.0], [75.3, 1147.0], [75.4, 1149.0], [75.5, 1149.0], [75.6, 1156.0], [75.7, 1156.0], [75.8, 1157.0], [75.9, 1157.0], [76.0, 1159.0], [76.1, 1164.0], [76.2, 1169.0], [76.3, 1169.0], [76.4, 1169.0], [76.5, 1176.0], [76.6, 1180.0], [76.7, 1180.0], [76.8, 1182.0], [76.9, 1195.0], [77.0, 1195.0], [77.1, 1196.0], [77.2, 1196.0], [77.3, 1198.0], [77.4, 1198.0], [77.5, 1200.0], [77.6, 1203.0], [77.7, 1218.0], [77.8, 1218.0], [77.9, 1219.0], [78.0, 1219.0], [78.1, 1225.0], [78.2, 1225.0], [78.3, 1226.0], [78.4, 1227.0], [78.5, 1227.0], [78.6, 1231.0], [78.7, 1238.0], [78.8, 1240.0], [78.9, 1240.0], [79.0, 1241.0], [79.1, 1242.0], [79.2, 1243.0], [79.3, 1243.0], [79.4, 1243.0], [79.5, 1244.0], [79.6, 1245.0], [79.7, 1245.0], [79.8, 1246.0], [79.9, 1246.0], [80.0, 1249.0], [80.1, 1249.0], [80.2, 1252.0], [80.3, 1252.0], [80.4, 1252.0], [80.5, 1252.0], [80.6, 1255.0], [80.7, 1262.0], [80.8, 1262.0], [80.9, 1262.0], [81.0, 1264.0], [81.1, 1269.0], [81.2, 1269.0], [81.3, 1270.0], [81.4, 1271.0], [81.5, 1277.0], [81.6, 1277.0], [81.7, 1277.0], [81.8, 1281.0], [81.9, 1281.0], [82.0, 1282.0], [82.1, 1285.0], [82.2, 1288.0], [82.3, 1288.0], [82.4, 1289.0], [82.5, 1301.0], [82.6, 1305.0], [82.7, 1305.0], [82.8, 1306.0], [82.9, 1310.0], [83.0, 1311.0], [83.1, 1311.0], [83.2, 1312.0], [83.3, 1314.0], [83.4, 1314.0], [83.5, 1318.0], [83.6, 1319.0], [83.7, 1320.0], [83.8, 1320.0], [83.9, 1323.0], [84.0, 1325.0], [84.1, 1330.0], [84.2, 1330.0], [84.3, 1331.0], [84.4, 1349.0], [84.5, 1354.0], [84.6, 1354.0], [84.7, 1358.0], [84.8, 1358.0], [84.9, 1364.0], [85.0, 1364.0], [85.1, 1366.0], [85.2, 1367.0], [85.3, 1367.0], [85.4, 1375.0], [85.5, 1376.0], [85.6, 1377.0], [85.7, 1377.0], [85.8, 1380.0], [85.9, 1382.0], [86.0, 1388.0], [86.1, 1388.0], [86.2, 1391.0], [86.3, 1392.0], [86.4, 1394.0], [86.5, 1394.0], [86.6, 1394.0], [86.7, 1396.0], [86.8, 1396.0], [86.9, 1398.0], [87.0, 1402.0], [87.1, 1402.0], [87.2, 1402.0], [87.3, 1404.0], [87.4, 1406.0], [87.5, 1407.0], [87.6, 1407.0], [87.7, 1408.0], [87.8, 1408.0], [87.9, 1410.0], [88.0, 1410.0], [88.1, 1423.0], [88.2, 1423.0], [88.3, 1434.0], [88.4, 1434.0], [88.5, 1443.0], [88.6, 1444.0], [88.7, 1444.0], [88.8, 1446.0], [88.9, 1449.0], [89.0, 1452.0], [89.1, 1452.0], [89.2, 1455.0], [89.3, 1455.0], [89.4, 1457.0], [89.5, 1457.0], [89.6, 1461.0], [89.7, 1462.0], [89.8, 1462.0], [89.9, 1462.0], [90.0, 1474.0], [90.1, 1475.0], [90.2, 1475.0], [90.3, 1478.0], [90.4, 1480.0], [90.5, 1484.0], [90.6, 1484.0], [90.7, 1486.0], [90.8, 1489.0], [90.9, 1489.0], [91.0, 1489.0], [91.1, 1492.0], [91.2, 1494.0], [91.3, 1498.0], [91.4, 1498.0], [91.5, 1500.0], [91.6, 1503.0], [91.7, 1503.0], [91.8, 1504.0], [91.9, 1517.0], [92.0, 1528.0], [92.1, 1528.0], [92.2, 1536.0], [92.3, 1537.0], [92.4, 1553.0], [92.5, 1553.0], [92.6, 1556.0], [92.7, 1556.0], [92.8, 1558.0], [92.9, 1558.0], [93.0, 1565.0], [93.1, 1570.0], [93.2, 1577.0], [93.3, 1577.0], [93.4, 1577.0], [93.5, 1583.0], [93.6, 1583.0], [93.7, 1604.0], [93.8, 1648.0], [93.9, 1658.0], [94.0, 1658.0], [94.1, 1664.0], [94.2, 1669.0], [94.3, 1683.0], [94.4, 1683.0], [94.5, 1685.0], [94.6, 1694.0], [94.7, 1704.0], [94.8, 1704.0], [94.9, 1706.0], [95.0, 1728.0], [95.1, 1728.0], [95.2, 1736.0], [95.3, 1743.0], [95.4, 1748.0], [95.5, 1748.0], [95.6, 1756.0], [95.7, 1770.0], [95.8, 1790.0], [95.9, 1790.0], [96.0, 1795.0], [96.1, 1800.0], [96.2, 1802.0], [96.3, 1802.0], [96.4, 1805.0], [96.5, 1807.0], [96.6, 1818.0], [96.7, 1818.0], [96.8, 1824.0], [96.9, 1841.0], [97.0, 1841.0], [97.1, 1886.0], [97.2, 1911.0], [97.3, 1913.0], [97.4, 1913.0], [97.5, 1931.0], [97.6, 1938.0], [97.7, 2035.0], [97.8, 2035.0], [97.9, 2076.0], [98.0, 2327.0], [98.1, 2351.0], [98.2, 2351.0], [98.3, 2510.0], [98.4, 2568.0], [98.5, 2568.0], [98.6, 2571.0], [98.7, 2662.0], [98.8, 2663.0], [98.9, 2663.0], [99.0, 2933.0], [99.1, 3019.0], [99.2, 3142.0], [99.3, 3142.0], [99.4, 3174.0], [99.5, 3251.0], [99.6, 3386.0], [99.7, 3386.0], [99.8, 3596.0], [99.9, 4793.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 71.0, "series": [{"data": [[0.0, 29.0], [600.0, 26.0], [700.0, 55.0], [800.0, 43.0], [900.0, 51.0], [1000.0, 31.0], [1100.0, 35.0], [1200.0, 37.0], [1300.0, 33.0], [1400.0, 33.0], [1500.0, 16.0], [100.0, 60.0], [1600.0, 8.0], [1700.0, 10.0], [1800.0, 8.0], [1900.0, 4.0], [2000.0, 2.0], [2300.0, 2.0], [2500.0, 3.0], [2600.0, 2.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 2.0], [200.0, 68.0], [3200.0, 1.0], [3300.0, 1.0], [3500.0, 1.0], [300.0, 71.0], [4700.0, 1.0], [400.0, 36.0], [500.0, 64.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 62.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 409.0, "series": [{"data": [[0.0, 264.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 409.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 62.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.886178861788618, "minX": 1.6044087E12, "maxY": 9.967213114754097, "series": [{"data": [[1.6044087E12, 9.967213114754097], [1.60440876E12, 9.886178861788618]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440876E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 353.0, "minX": 1.0, "maxY": 1604.0, "series": [{"data": [[4.0, 353.0], [2.0, 566.0], [1.0, 845.0], [9.0, 1025.75], [10.0, 795.1452282157682], [5.0, 1604.0], [3.0, 862.5], [6.0, 715.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.9265306122449, 796.6204081632653]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2753.5666666666666, "minX": 1.6044087E12, "maxY": 968715.9666666667, "series": [{"data": [[1.6044087E12, 968715.9666666667], [1.60440876E12, 866824.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6044087E12, 2753.5666666666666], [1.60440876E12, 2769.4666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440876E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 784.8075880758803, "minX": 1.6044087E12, "maxY": 808.5300546448092, "series": [{"data": [[1.6044087E12, 808.5300546448092], [1.60440876E12, 784.8075880758803]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440876E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 783.6991869918699, "minX": 1.6044087E12, "maxY": 807.2595628415303, "series": [{"data": [[1.6044087E12, 807.2595628415303], [1.60440876E12, 783.6991869918699]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440876E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008130081300813007, "minX": 1.6044087E12, "maxY": 0.25409836065573765, "series": [{"data": [[1.6044087E12, 0.25409836065573765], [1.60440876E12, 0.008130081300813007]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440876E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.6044087E12, "maxY": 4793.0, "series": [{"data": [[1.6044087E12, 4793.0], [1.60440876E12, 3596.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6044087E12, 20.302999912500383], [1.60440876E12, 10.329999911785126]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6044087E12, 20.63330003499985], [1.60440876E12, 10.66300003528595]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6044087E12, 20.486499956250192], [1.60440876E12, 10.514999955892563]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6044087E12, 9.0], [1.60440876E12, 8.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6044087E12, 727.5], [1.60440876E12, 732.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440876E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 38.0, "minX": 1.0, "maxY": 1115.0, "series": [{"data": [[2.0, 38.0], [8.0, 939.0], [9.0, 977.0], [10.0, 1000.5], [11.0, 782.5], [12.0, 963.0], [13.0, 845.0], [14.0, 636.0], [15.0, 496.0], [1.0, 294.0], [16.0, 486.0], [17.0, 740.0], [18.0, 342.0], [5.0, 350.0], [20.0, 560.0], [23.0, 405.0], [6.0, 1103.0], [25.0, 274.5], [7.0, 1115.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 36.0, "minX": 1.0, "maxY": 1114.0, "series": [{"data": [[2.0, 36.0], [8.0, 938.0], [9.0, 976.0], [10.0, 999.0], [11.0, 782.0], [12.0, 961.5], [13.0, 844.0], [14.0, 635.5], [15.0, 494.5], [1.0, 294.0], [16.0, 485.0], [17.0, 740.0], [18.0, 341.5], [5.0, 347.0], [20.0, 559.0], [23.0, 405.0], [6.0, 1102.0], [25.0, 274.0], [7.0, 1114.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.983333333333333, "minX": 1.6044087E12, "maxY": 6.266666666666667, "series": [{"data": [[1.6044087E12, 6.266666666666667], [1.60440876E12, 5.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440876E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.1, "minX": 1.6044087E12, "maxY": 6.15, "series": [{"data": [[1.6044087E12, 6.1], [1.60440876E12, 6.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440876E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.1, "minX": 1.6044087E12, "maxY": 6.15, "series": [{"data": [[1.6044087E12, 6.1], [1.60440876E12, 6.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440876E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.1, "minX": 1.6044087E12, "maxY": 6.15, "series": [{"data": [[1.6044087E12, 6.1], [1.60440876E12, 6.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440876E12, "title": "Total Transactions Per Second"}},
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

