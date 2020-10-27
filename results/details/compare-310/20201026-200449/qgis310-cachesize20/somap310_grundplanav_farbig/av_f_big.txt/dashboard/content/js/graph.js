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
        data: {"result": {"minY": 196.0, "minX": 0.0, "maxY": 3872.0, "series": [{"data": [[0.0, 196.0], [0.1, 196.0], [0.2, 199.0], [0.3, 202.0], [0.4, 202.0], [0.5, 206.0], [0.6, 208.0], [0.7, 211.0], [0.8, 211.0], [0.9, 211.0], [1.0, 212.0], [1.1, 215.0], [1.2, 215.0], [1.3, 220.0], [1.4, 225.0], [1.5, 230.0], [1.6, 230.0], [1.7, 231.0], [1.8, 233.0], [1.9, 233.0], [2.0, 234.0], [2.1, 240.0], [2.2, 243.0], [2.3, 243.0], [2.4, 245.0], [2.5, 245.0], [2.6, 252.0], [2.7, 252.0], [2.8, 259.0], [2.9, 260.0], [3.0, 262.0], [3.1, 262.0], [3.2, 264.0], [3.3, 264.0], [3.4, 264.0], [3.5, 265.0], [3.6, 268.0], [3.7, 269.0], [3.8, 269.0], [3.9, 270.0], [4.0, 273.0], [4.1, 279.0], [4.2, 279.0], [4.3, 280.0], [4.4, 281.0], [4.5, 285.0], [4.6, 285.0], [4.7, 285.0], [4.8, 286.0], [4.9, 287.0], [5.0, 287.0], [5.1, 287.0], [5.2, 288.0], [5.3, 288.0], [5.4, 290.0], [5.5, 291.0], [5.6, 293.0], [5.7, 293.0], [5.8, 293.0], [5.9, 294.0], [6.0, 295.0], [6.1, 295.0], [6.2, 295.0], [6.3, 295.0], [6.4, 298.0], [6.5, 298.0], [6.6, 301.0], [6.7, 302.0], [6.8, 302.0], [6.9, 303.0], [7.0, 303.0], [7.1, 303.0], [7.2, 303.0], [7.3, 304.0], [7.4, 304.0], [7.5, 306.0], [7.6, 306.0], [7.7, 308.0], [7.8, 309.0], [7.9, 309.0], [8.0, 309.0], [8.1, 312.0], [8.2, 314.0], [8.3, 314.0], [8.4, 314.0], [8.5, 314.0], [8.6, 315.0], [8.7, 315.0], [8.8, 315.0], [8.9, 321.0], [9.0, 321.0], [9.1, 321.0], [9.2, 323.0], [9.3, 324.0], [9.4, 324.0], [9.5, 324.0], [9.6, 324.0], [9.7, 325.0], [9.8, 325.0], [9.9, 325.0], [10.0, 326.0], [10.1, 326.0], [10.2, 326.0], [10.3, 327.0], [10.4, 327.0], [10.5, 328.0], [10.6, 328.0], [10.7, 328.0], [10.8, 333.0], [10.9, 336.0], [11.0, 336.0], [11.1, 337.0], [11.2, 341.0], [11.3, 341.0], [11.4, 341.0], [11.5, 347.0], [11.6, 348.0], [11.7, 348.0], [11.8, 348.0], [11.9, 350.0], [12.0, 350.0], [12.1, 350.0], [12.2, 351.0], [12.3, 354.0], [12.4, 354.0], [12.5, 354.0], [12.6, 360.0], [12.7, 362.0], [12.8, 362.0], [12.9, 362.0], [13.0, 363.0], [13.1, 369.0], [13.2, 370.0], [13.3, 370.0], [13.4, 370.0], [13.5, 373.0], [13.6, 373.0], [13.7, 373.0], [13.8, 374.0], [13.9, 374.0], [14.0, 374.0], [14.1, 375.0], [14.2, 377.0], [14.3, 380.0], [14.4, 380.0], [14.5, 384.0], [14.6, 384.0], [14.7, 388.0], [14.8, 388.0], [14.9, 391.0], [15.0, 393.0], [15.1, 393.0], [15.2, 395.0], [15.3, 398.0], [15.4, 399.0], [15.5, 399.0], [15.6, 400.0], [15.7, 402.0], [15.8, 406.0], [15.9, 406.0], [16.0, 410.0], [16.1, 412.0], [16.2, 416.0], [16.3, 416.0], [16.4, 417.0], [16.5, 418.0], [16.6, 418.0], [16.7, 418.0], [16.8, 422.0], [16.9, 423.0], [17.0, 423.0], [17.1, 423.0], [17.2, 424.0], [17.3, 424.0], [17.4, 424.0], [17.5, 429.0], [17.6, 432.0], [17.7, 433.0], [17.8, 433.0], [17.9, 433.0], [18.0, 434.0], [18.1, 434.0], [18.2, 434.0], [18.3, 435.0], [18.4, 437.0], [18.5, 437.0], [18.6, 439.0], [18.7, 443.0], [18.8, 443.0], [18.9, 443.0], [19.0, 447.0], [19.1, 447.0], [19.2, 449.0], [19.3, 449.0], [19.4, 451.0], [19.5, 453.0], [19.6, 453.0], [19.7, 453.0], [19.8, 456.0], [19.9, 456.0], [20.0, 457.0], [20.1, 457.0], [20.2, 462.0], [20.3, 466.0], [20.4, 466.0], [20.5, 467.0], [20.6, 474.0], [20.7, 474.0], [20.8, 474.0], [20.9, 478.0], [21.0, 479.0], [21.1, 483.0], [21.2, 483.0], [21.3, 489.0], [21.4, 489.0], [21.5, 491.0], [21.6, 491.0], [21.7, 494.0], [21.8, 494.0], [21.9, 494.0], [22.0, 496.0], [22.1, 498.0], [22.2, 505.0], [22.3, 505.0], [22.4, 509.0], [22.5, 509.0], [22.6, 509.0], [22.7, 509.0], [22.8, 512.0], [22.9, 513.0], [23.0, 514.0], [23.1, 514.0], [23.2, 515.0], [23.3, 517.0], [23.4, 517.0], [23.5, 517.0], [23.6, 523.0], [23.7, 524.0], [23.8, 524.0], [23.9, 524.0], [24.0, 526.0], [24.1, 527.0], [24.2, 527.0], [24.3, 527.0], [24.4, 534.0], [24.5, 536.0], [24.6, 536.0], [24.7, 538.0], [24.8, 538.0], [24.9, 540.0], [25.0, 540.0], [25.1, 540.0], [25.2, 543.0], [25.3, 543.0], [25.4, 544.0], [25.5, 544.0], [25.6, 545.0], [25.7, 545.0], [25.8, 546.0], [25.9, 548.0], [26.0, 551.0], [26.1, 551.0], [26.2, 551.0], [26.3, 551.0], [26.4, 552.0], [26.5, 552.0], [26.6, 554.0], [26.7, 558.0], [26.8, 558.0], [26.9, 560.0], [27.0, 560.0], [27.1, 563.0], [27.2, 563.0], [27.3, 565.0], [27.4, 568.0], [27.5, 573.0], [27.6, 573.0], [27.7, 573.0], [27.8, 574.0], [27.9, 574.0], [28.0, 574.0], [28.1, 575.0], [28.2, 577.0], [28.3, 578.0], [28.4, 578.0], [28.5, 579.0], [28.6, 579.0], [28.7, 579.0], [28.8, 579.0], [28.9, 579.0], [29.0, 582.0], [29.1, 582.0], [29.2, 582.0], [29.3, 583.0], [29.4, 584.0], [29.5, 584.0], [29.6, 584.0], [29.7, 584.0], [29.8, 585.0], [29.9, 585.0], [30.0, 588.0], [30.1, 588.0], [30.2, 588.0], [30.3, 590.0], [30.4, 591.0], [30.5, 593.0], [30.6, 593.0], [30.7, 597.0], [30.8, 601.0], [30.9, 602.0], [31.0, 602.0], [31.1, 603.0], [31.2, 603.0], [31.3, 603.0], [31.4, 603.0], [31.5, 606.0], [31.6, 607.0], [31.7, 607.0], [31.8, 608.0], [31.9, 609.0], [32.0, 610.0], [32.1, 610.0], [32.2, 611.0], [32.3, 613.0], [32.4, 613.0], [32.5, 613.0], [32.6, 616.0], [32.7, 617.0], [32.8, 617.0], [32.9, 617.0], [33.0, 619.0], [33.1, 622.0], [33.2, 623.0], [33.3, 623.0], [33.4, 623.0], [33.5, 624.0], [33.6, 624.0], [33.7, 625.0], [33.8, 625.0], [33.9, 626.0], [34.0, 626.0], [34.1, 626.0], [34.2, 627.0], [34.3, 627.0], [34.4, 627.0], [34.5, 629.0], [34.6, 630.0], [34.7, 631.0], [34.8, 631.0], [34.9, 632.0], [35.0, 636.0], [35.1, 636.0], [35.2, 638.0], [35.3, 639.0], [35.4, 639.0], [35.5, 639.0], [35.6, 639.0], [35.7, 639.0], [35.8, 643.0], [35.9, 643.0], [36.0, 645.0], [36.1, 646.0], [36.2, 647.0], [36.3, 647.0], [36.4, 647.0], [36.5, 649.0], [36.6, 655.0], [36.7, 655.0], [36.8, 656.0], [36.9, 657.0], [37.0, 657.0], [37.1, 658.0], [37.2, 659.0], [37.3, 662.0], [37.4, 662.0], [37.5, 663.0], [37.6, 664.0], [37.7, 665.0], [37.8, 665.0], [37.9, 665.0], [38.0, 667.0], [38.1, 667.0], [38.2, 667.0], [38.3, 668.0], [38.4, 669.0], [38.5, 669.0], [38.6, 670.0], [38.7, 670.0], [38.8, 671.0], [38.9, 671.0], [39.0, 673.0], [39.1, 674.0], [39.2, 674.0], [39.3, 674.0], [39.4, 674.0], [39.5, 675.0], [39.6, 675.0], [39.7, 675.0], [39.8, 678.0], [39.9, 678.0], [40.0, 679.0], [40.1, 679.0], [40.2, 679.0], [40.3, 683.0], [40.4, 683.0], [40.5, 686.0], [40.6, 689.0], [40.7, 693.0], [40.8, 693.0], [40.9, 698.0], [41.0, 702.0], [41.1, 702.0], [41.2, 702.0], [41.3, 703.0], [41.4, 704.0], [41.5, 705.0], [41.6, 705.0], [41.7, 707.0], [41.8, 708.0], [41.9, 708.0], [42.0, 713.0], [42.1, 714.0], [42.2, 716.0], [42.3, 716.0], [42.4, 725.0], [42.5, 729.0], [42.6, 731.0], [42.7, 731.0], [42.8, 731.0], [42.9, 737.0], [43.0, 737.0], [43.1, 737.0], [43.2, 738.0], [43.3, 740.0], [43.4, 740.0], [43.5, 741.0], [43.6, 745.0], [43.7, 745.0], [43.8, 745.0], [43.9, 747.0], [44.0, 748.0], [44.1, 749.0], [44.2, 749.0], [44.3, 749.0], [44.4, 750.0], [44.5, 751.0], [44.6, 751.0], [44.7, 758.0], [44.8, 759.0], [44.9, 761.0], [45.0, 761.0], [45.1, 762.0], [45.2, 763.0], [45.3, 763.0], [45.4, 763.0], [45.5, 765.0], [45.6, 770.0], [45.7, 770.0], [45.8, 776.0], [45.9, 779.0], [46.0, 780.0], [46.1, 780.0], [46.2, 780.0], [46.3, 782.0], [46.4, 783.0], [46.5, 783.0], [46.6, 785.0], [46.7, 786.0], [46.8, 786.0], [46.9, 786.0], [47.0, 787.0], [47.1, 789.0], [47.2, 789.0], [47.3, 795.0], [47.4, 796.0], [47.5, 798.0], [47.6, 798.0], [47.7, 798.0], [47.8, 799.0], [47.9, 804.0], [48.0, 804.0], [48.1, 805.0], [48.2, 807.0], [48.3, 810.0], [48.4, 810.0], [48.5, 812.0], [48.6, 815.0], [48.7, 815.0], [48.8, 817.0], [48.9, 818.0], [49.0, 819.0], [49.1, 819.0], [49.2, 822.0], [49.3, 822.0], [49.4, 824.0], [49.5, 824.0], [49.6, 826.0], [49.7, 827.0], [49.8, 827.0], [49.9, 827.0], [50.0, 827.0], [50.1, 829.0], [50.2, 829.0], [50.3, 830.0], [50.4, 837.0], [50.5, 841.0], [50.6, 841.0], [50.7, 841.0], [50.8, 846.0], [50.9, 846.0], [51.0, 846.0], [51.1, 852.0], [51.2, 852.0], [51.3, 854.0], [51.4, 854.0], [51.5, 854.0], [51.6, 857.0], [51.7, 857.0], [51.8, 858.0], [51.9, 859.0], [52.0, 859.0], [52.1, 859.0], [52.2, 860.0], [52.3, 862.0], [52.4, 863.0], [52.5, 863.0], [52.6, 865.0], [52.7, 869.0], [52.8, 870.0], [52.9, 870.0], [53.0, 875.0], [53.1, 875.0], [53.2, 876.0], [53.3, 876.0], [53.4, 878.0], [53.5, 878.0], [53.6, 878.0], [53.7, 881.0], [53.8, 881.0], [53.9, 882.0], [54.0, 882.0], [54.1, 884.0], [54.2, 885.0], [54.3, 886.0], [54.4, 886.0], [54.5, 889.0], [54.6, 892.0], [54.7, 893.0], [54.8, 893.0], [54.9, 894.0], [55.0, 895.0], [55.1, 895.0], [55.2, 895.0], [55.3, 897.0], [55.4, 901.0], [55.5, 901.0], [55.6, 902.0], [55.7, 903.0], [55.8, 911.0], [55.9, 911.0], [56.0, 914.0], [56.1, 915.0], [56.2, 917.0], [56.3, 917.0], [56.4, 919.0], [56.5, 922.0], [56.6, 924.0], [56.7, 924.0], [56.8, 924.0], [56.9, 924.0], [57.0, 924.0], [57.1, 924.0], [57.2, 925.0], [57.3, 926.0], [57.4, 926.0], [57.5, 926.0], [57.6, 927.0], [57.7, 930.0], [57.8, 930.0], [57.9, 930.0], [58.0, 930.0], [58.1, 931.0], [58.2, 931.0], [58.3, 931.0], [58.4, 931.0], [58.5, 931.0], [58.6, 937.0], [58.7, 941.0], [58.8, 944.0], [58.9, 944.0], [59.0, 951.0], [59.1, 953.0], [59.2, 960.0], [59.3, 960.0], [59.4, 962.0], [59.5, 963.0], [59.6, 963.0], [59.7, 963.0], [59.8, 966.0], [59.9, 967.0], [60.0, 968.0], [60.1, 968.0], [60.2, 970.0], [60.3, 970.0], [60.4, 970.0], [60.5, 970.0], [60.6, 975.0], [60.7, 977.0], [60.8, 977.0], [60.9, 977.0], [61.0, 979.0], [61.1, 979.0], [61.2, 979.0], [61.3, 982.0], [61.4, 987.0], [61.5, 987.0], [61.6, 987.0], [61.7, 991.0], [61.8, 991.0], [61.9, 991.0], [62.0, 991.0], [62.1, 993.0], [62.2, 994.0], [62.3, 994.0], [62.4, 995.0], [62.5, 997.0], [62.6, 997.0], [62.7, 997.0], [62.8, 999.0], [62.9, 1000.0], [63.0, 1005.0], [63.1, 1005.0], [63.2, 1005.0], [63.3, 1006.0], [63.4, 1006.0], [63.5, 1007.0], [63.6, 1008.0], [63.7, 1010.0], [63.8, 1010.0], [63.9, 1013.0], [64.0, 1018.0], [64.1, 1018.0], [64.2, 1018.0], [64.3, 1021.0], [64.4, 1023.0], [64.5, 1023.0], [64.6, 1023.0], [64.7, 1028.0], [64.8, 1029.0], [64.9, 1031.0], [65.0, 1031.0], [65.1, 1031.0], [65.2, 1033.0], [65.3, 1033.0], [65.4, 1036.0], [65.5, 1036.0], [65.6, 1038.0], [65.7, 1038.0], [65.8, 1045.0], [65.9, 1047.0], [66.0, 1051.0], [66.1, 1051.0], [66.2, 1052.0], [66.3, 1053.0], [66.4, 1053.0], [66.5, 1053.0], [66.6, 1056.0], [66.7, 1059.0], [66.8, 1059.0], [66.9, 1060.0], [67.0, 1060.0], [67.1, 1062.0], [67.2, 1062.0], [67.3, 1064.0], [67.4, 1066.0], [67.5, 1068.0], [67.6, 1068.0], [67.7, 1070.0], [67.8, 1070.0], [67.9, 1071.0], [68.0, 1071.0], [68.1, 1071.0], [68.2, 1072.0], [68.3, 1072.0], [68.4, 1072.0], [68.5, 1077.0], [68.6, 1077.0], [68.7, 1077.0], [68.8, 1079.0], [68.9, 1079.0], [69.0, 1079.0], [69.1, 1079.0], [69.2, 1082.0], [69.3, 1084.0], [69.4, 1085.0], [69.5, 1085.0], [69.6, 1086.0], [69.7, 1089.0], [69.8, 1091.0], [69.9, 1091.0], [70.0, 1092.0], [70.1, 1092.0], [70.2, 1092.0], [70.3, 1094.0], [70.4, 1095.0], [70.5, 1096.0], [70.6, 1096.0], [70.7, 1101.0], [70.8, 1101.0], [70.9, 1102.0], [71.0, 1102.0], [71.1, 1103.0], [71.2, 1105.0], [71.3, 1108.0], [71.4, 1108.0], [71.5, 1110.0], [71.6, 1111.0], [71.7, 1111.0], [71.8, 1112.0], [71.9, 1113.0], [72.0, 1116.0], [72.1, 1116.0], [72.2, 1117.0], [72.3, 1118.0], [72.4, 1118.0], [72.5, 1118.0], [72.6, 1119.0], [72.7, 1119.0], [72.8, 1124.0], [72.9, 1124.0], [73.0, 1126.0], [73.1, 1126.0], [73.2, 1127.0], [73.3, 1127.0], [73.4, 1130.0], [73.5, 1130.0], [73.6, 1130.0], [73.7, 1132.0], [73.8, 1134.0], [73.9, 1134.0], [74.0, 1134.0], [74.1, 1139.0], [74.2, 1142.0], [74.3, 1144.0], [74.4, 1144.0], [74.5, 1149.0], [74.6, 1152.0], [74.7, 1152.0], [74.8, 1152.0], [74.9, 1154.0], [75.0, 1155.0], [75.1, 1155.0], [75.2, 1157.0], [75.3, 1157.0], [75.4, 1159.0], [75.5, 1159.0], [75.6, 1159.0], [75.7, 1160.0], [75.8, 1161.0], [75.9, 1161.0], [76.0, 1161.0], [76.1, 1164.0], [76.2, 1166.0], [76.3, 1166.0], [76.4, 1168.0], [76.5, 1169.0], [76.6, 1169.0], [76.7, 1169.0], [76.8, 1169.0], [76.9, 1170.0], [77.0, 1170.0], [77.1, 1170.0], [77.2, 1170.0], [77.3, 1170.0], [77.4, 1170.0], [77.5, 1171.0], [77.6, 1175.0], [77.7, 1175.0], [77.8, 1175.0], [77.9, 1176.0], [78.0, 1176.0], [78.1, 1178.0], [78.2, 1178.0], [78.3, 1180.0], [78.4, 1181.0], [78.5, 1181.0], [78.6, 1184.0], [78.7, 1188.0], [78.8, 1188.0], [78.9, 1188.0], [79.0, 1190.0], [79.1, 1192.0], [79.2, 1193.0], [79.3, 1193.0], [79.4, 1195.0], [79.5, 1198.0], [79.6, 1199.0], [79.7, 1199.0], [79.8, 1200.0], [79.9, 1201.0], [80.0, 1201.0], [80.1, 1201.0], [80.2, 1209.0], [80.3, 1212.0], [80.4, 1212.0], [80.5, 1212.0], [80.6, 1213.0], [80.7, 1215.0], [80.8, 1215.0], [80.9, 1220.0], [81.0, 1221.0], [81.1, 1223.0], [81.2, 1223.0], [81.3, 1223.0], [81.4, 1224.0], [81.5, 1229.0], [81.6, 1229.0], [81.7, 1230.0], [81.8, 1232.0], [81.9, 1232.0], [82.0, 1233.0], [82.1, 1237.0], [82.2, 1238.0], [82.3, 1238.0], [82.4, 1241.0], [82.5, 1246.0], [82.6, 1250.0], [82.7, 1250.0], [82.8, 1251.0], [82.9, 1252.0], [83.0, 1254.0], [83.1, 1254.0], [83.2, 1255.0], [83.3, 1258.0], [83.4, 1258.0], [83.5, 1262.0], [83.6, 1263.0], [83.7, 1263.0], [83.8, 1263.0], [83.9, 1264.0], [84.0, 1265.0], [84.1, 1269.0], [84.2, 1269.0], [84.3, 1269.0], [84.4, 1270.0], [84.5, 1276.0], [84.6, 1276.0], [84.7, 1278.0], [84.8, 1280.0], [84.9, 1281.0], [85.0, 1281.0], [85.1, 1282.0], [85.2, 1286.0], [85.3, 1286.0], [85.4, 1287.0], [85.5, 1293.0], [85.6, 1294.0], [85.7, 1294.0], [85.8, 1305.0], [85.9, 1306.0], [86.0, 1308.0], [86.1, 1308.0], [86.2, 1311.0], [86.3, 1312.0], [86.4, 1313.0], [86.5, 1313.0], [86.6, 1317.0], [86.7, 1321.0], [86.8, 1321.0], [86.9, 1322.0], [87.0, 1327.0], [87.1, 1331.0], [87.2, 1331.0], [87.3, 1335.0], [87.4, 1336.0], [87.5, 1341.0], [87.6, 1341.0], [87.7, 1341.0], [87.8, 1343.0], [87.9, 1345.0], [88.0, 1345.0], [88.1, 1346.0], [88.2, 1348.0], [88.3, 1350.0], [88.4, 1350.0], [88.5, 1358.0], [88.6, 1358.0], [88.7, 1358.0], [88.8, 1364.0], [88.9, 1364.0], [89.0, 1370.0], [89.1, 1370.0], [89.2, 1370.0], [89.3, 1371.0], [89.4, 1371.0], [89.5, 1371.0], [89.6, 1387.0], [89.7, 1391.0], [89.8, 1404.0], [89.9, 1404.0], [90.0, 1408.0], [90.1, 1410.0], [90.2, 1410.0], [90.3, 1418.0], [90.4, 1419.0], [90.5, 1420.0], [90.6, 1420.0], [90.7, 1423.0], [90.8, 1423.0], [90.9, 1424.0], [91.0, 1424.0], [91.1, 1437.0], [91.2, 1439.0], [91.3, 1448.0], [91.4, 1448.0], [91.5, 1463.0], [91.6, 1463.0], [91.7, 1463.0], [91.8, 1470.0], [91.9, 1470.0], [92.0, 1482.0], [92.1, 1482.0], [92.2, 1482.0], [92.3, 1484.0], [92.4, 1498.0], [92.5, 1498.0], [92.6, 1503.0], [92.7, 1506.0], [92.8, 1510.0], [92.9, 1510.0], [93.0, 1515.0], [93.1, 1519.0], [93.2, 1522.0], [93.3, 1522.0], [93.4, 1526.0], [93.5, 1535.0], [93.6, 1535.0], [93.7, 1535.0], [93.8, 1537.0], [93.9, 1549.0], [94.0, 1549.0], [94.1, 1554.0], [94.2, 1560.0], [94.3, 1569.0], [94.4, 1569.0], [94.5, 1577.0], [94.6, 1578.0], [94.7, 1593.0], [94.8, 1593.0], [94.9, 1598.0], [95.0, 1611.0], [95.1, 1611.0], [95.2, 1617.0], [95.3, 1626.0], [95.4, 1633.0], [95.5, 1633.0], [95.6, 1671.0], [95.7, 1693.0], [95.8, 1696.0], [95.9, 1696.0], [96.0, 1708.0], [96.1, 1709.0], [96.2, 1717.0], [96.3, 1717.0], [96.4, 1741.0], [96.5, 1785.0], [96.6, 1844.0], [96.7, 1844.0], [96.8, 1857.0], [96.9, 1864.0], [97.0, 1864.0], [97.1, 1879.0], [97.2, 1922.0], [97.3, 1933.0], [97.4, 1933.0], [97.5, 2058.0], [97.6, 2128.0], [97.7, 2282.0], [97.8, 2282.0], [97.9, 2333.0], [98.0, 2374.0], [98.1, 2400.0], [98.2, 2400.0], [98.3, 2685.0], [98.4, 2687.0], [98.5, 2687.0], [98.6, 2880.0], [98.7, 2919.0], [98.8, 3044.0], [98.9, 3044.0], [99.0, 3112.0], [99.1, 3141.0], [99.2, 3422.0], [99.3, 3422.0], [99.4, 3494.0], [99.5, 3624.0], [99.6, 3630.0], [99.7, 3630.0], [99.8, 3785.0], [99.9, 3872.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 75.0, "series": [{"data": [[600.0, 75.0], [700.0, 51.0], [800.0, 55.0], [900.0, 55.0], [1000.0, 57.0], [1100.0, 67.0], [1200.0, 44.0], [1300.0, 30.0], [1400.0, 20.0], [1500.0, 18.0], [1600.0, 7.0], [100.0, 2.0], [1700.0, 5.0], [1800.0, 4.0], [1900.0, 2.0], [2000.0, 1.0], [2100.0, 1.0], [2300.0, 2.0], [2200.0, 1.0], [2400.0, 1.0], [2600.0, 2.0], [2800.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 2.0], [200.0, 46.0], [3400.0, 2.0], [3600.0, 2.0], [3700.0, 1.0], [3800.0, 1.0], [300.0, 66.0], [400.0, 49.0], [500.0, 63.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 55.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 517.0, "series": [{"data": [[0.0, 163.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 517.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 55.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.852941176470589, "minX": 1.6037451E12, "maxY": 10.0, "series": [{"data": [[1.6037451E12, 10.0], [1.60374516E12, 9.852941176470589]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374516E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 560.0, "minX": 1.0, "maxY": 2282.0, "series": [{"data": [[8.0, 741.0], [4.0, 560.0], [2.0, 1437.0], [1.0, 668.0], [9.0, 584.0], [10.0, 889.6267217630859], [5.0, 568.0], [6.0, 2282.0], [3.0, 624.0], [7.0, 582.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 889.6802721088441]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2299.8333333333335, "minX": 1.6037451E12, "maxY": 1132588.65, "series": [{"data": [[1.6037451E12, 1132588.65], [1.60374516E12, 703222.9166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6037451E12, 3223.2], [1.60374516E12, 2299.8333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374516E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 875.6895424836604, "minX": 1.6037451E12, "maxY": 899.6596736596737, "series": [{"data": [[1.6037451E12, 899.6596736596737], [1.60374516E12, 875.6895424836604]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374516E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 874.5228758169935, "minX": 1.6037451E12, "maxY": 898.3916083916096, "series": [{"data": [[1.6037451E12, 898.3916083916096], [1.60374516E12, 874.5228758169935]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374516E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03594771241830066, "minX": 1.6037451E12, "maxY": 0.20979020979020951, "series": [{"data": [[1.6037451E12, 0.20979020979020951], [1.60374516E12, 0.03594771241830066]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374516E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 196.0, "minX": 1.6037451E12, "maxY": 3872.0, "series": [{"data": [[1.6037451E12, 3872.0], [1.60374516E12, 2687.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6037451E12, 207.73999979496003], [1.60374516E12, 259.629999268055]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6037451E12, 208.77100012302398], [1.60374516E12, 262.0786000585556]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6037451E12, 208.25499984622002], [1.60374516E12, 261.1649996340275]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6037451E12, 196.0], [1.60374516E12, 199.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6037451E12, 763.0], [1.60374516E12, 894.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374516E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 538.0, "minX": 1.0, "maxY": 2374.0, "series": [{"data": [[8.0, 1104.0], [9.0, 763.0], [10.0, 900.0], [11.0, 1071.5], [12.0, 909.0], [13.0, 738.0], [14.0, 615.0], [15.0, 629.0], [1.0, 2374.0], [16.0, 621.0], [17.0, 538.0], [18.0, 636.0], [7.0, 1005.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 538.0, "minX": 1.0, "maxY": 2370.0, "series": [{"data": [[8.0, 1103.0], [9.0, 763.0], [10.0, 899.5], [11.0, 1070.5], [12.0, 908.5], [13.0, 738.0], [14.0, 614.5], [15.0, 628.0], [1.0, 2370.0], [16.0, 619.5], [17.0, 538.0], [18.0, 636.0], [7.0, 1005.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.933333333333334, "minX": 1.6037451E12, "maxY": 7.316666666666666, "series": [{"data": [[1.6037451E12, 7.316666666666666], [1.60374516E12, 4.933333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374516E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.1, "minX": 1.6037451E12, "maxY": 7.15, "series": [{"data": [[1.6037451E12, 7.15], [1.60374516E12, 5.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374516E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.1, "minX": 1.6037451E12, "maxY": 7.15, "series": [{"data": [[1.6037451E12, 7.15], [1.60374516E12, 5.1]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374516E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.1, "minX": 1.6037451E12, "maxY": 7.15, "series": [{"data": [[1.6037451E12, 7.15], [1.60374516E12, 5.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374516E12, "title": "Total Transactions Per Second"}},
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

