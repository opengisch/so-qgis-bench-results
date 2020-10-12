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
        data: {"result": {"minY": 178.0, "minX": 0.0, "maxY": 3313.0, "series": [{"data": [[0.0, 178.0], [0.1, 178.0], [0.2, 191.0], [0.3, 191.0], [0.4, 191.0], [0.5, 193.0], [0.6, 197.0], [0.7, 197.0], [0.8, 197.0], [0.9, 201.0], [1.0, 204.0], [1.1, 210.0], [1.2, 210.0], [1.3, 210.0], [1.4, 215.0], [1.5, 217.0], [1.6, 217.0], [1.7, 217.0], [1.8, 218.0], [1.9, 218.0], [2.0, 222.0], [2.1, 243.0], [2.2, 251.0], [2.3, 251.0], [2.4, 257.0], [2.5, 258.0], [2.6, 266.0], [2.7, 266.0], [2.8, 269.0], [2.9, 275.0], [3.0, 277.0], [3.1, 277.0], [3.2, 277.0], [3.3, 278.0], [3.4, 278.0], [3.5, 278.0], [3.6, 279.0], [3.7, 280.0], [3.8, 280.0], [3.9, 280.0], [4.0, 283.0], [4.1, 286.0], [4.2, 286.0], [4.3, 287.0], [4.4, 288.0], [4.5, 291.0], [4.6, 291.0], [4.7, 296.0], [4.8, 296.0], [4.9, 298.0], [5.0, 298.0], [5.1, 298.0], [5.2, 298.0], [5.3, 298.0], [5.4, 300.0], [5.5, 301.0], [5.6, 301.0], [5.7, 301.0], [5.8, 303.0], [5.9, 305.0], [6.0, 305.0], [6.1, 305.0], [6.2, 306.0], [6.3, 308.0], [6.4, 310.0], [6.5, 310.0], [6.6, 313.0], [6.7, 316.0], [6.8, 316.0], [6.9, 318.0], [7.0, 318.0], [7.1, 328.0], [7.2, 328.0], [7.3, 331.0], [7.4, 336.0], [7.5, 338.0], [7.6, 338.0], [7.7, 339.0], [7.8, 341.0], [7.9, 343.0], [8.0, 343.0], [8.1, 343.0], [8.2, 349.0], [8.3, 349.0], [8.4, 349.0], [8.5, 350.0], [8.6, 350.0], [8.7, 350.0], [8.8, 352.0], [8.9, 354.0], [9.0, 358.0], [9.1, 358.0], [9.2, 358.0], [9.3, 359.0], [9.4, 360.0], [9.5, 360.0], [9.6, 360.0], [9.7, 364.0], [9.8, 368.0], [9.9, 368.0], [10.0, 369.0], [10.1, 369.0], [10.2, 369.0], [10.3, 370.0], [10.4, 374.0], [10.5, 378.0], [10.6, 378.0], [10.7, 382.0], [10.8, 384.0], [10.9, 387.0], [11.0, 387.0], [11.1, 389.0], [11.2, 391.0], [11.3, 392.0], [11.4, 392.0], [11.5, 394.0], [11.6, 394.0], [11.7, 394.0], [11.8, 396.0], [11.9, 398.0], [12.0, 399.0], [12.1, 399.0], [12.2, 400.0], [12.3, 401.0], [12.4, 403.0], [12.5, 403.0], [12.6, 404.0], [12.7, 404.0], [12.8, 405.0], [12.9, 405.0], [13.0, 406.0], [13.1, 411.0], [13.2, 411.0], [13.3, 411.0], [13.4, 411.0], [13.5, 414.0], [13.6, 414.0], [13.7, 416.0], [13.8, 417.0], [13.9, 419.0], [14.0, 419.0], [14.1, 420.0], [14.2, 420.0], [14.3, 421.0], [14.4, 421.0], [14.5, 433.0], [14.6, 434.0], [14.7, 434.0], [14.8, 434.0], [14.9, 436.0], [15.0, 437.0], [15.1, 437.0], [15.2, 438.0], [15.3, 439.0], [15.4, 440.0], [15.5, 440.0], [15.6, 441.0], [15.7, 444.0], [15.8, 445.0], [15.9, 445.0], [16.0, 445.0], [16.1, 448.0], [16.2, 448.0], [16.3, 448.0], [16.4, 450.0], [16.5, 451.0], [16.6, 457.0], [16.7, 457.0], [16.8, 458.0], [16.9, 459.0], [17.0, 459.0], [17.1, 461.0], [17.2, 461.0], [17.3, 464.0], [17.4, 464.0], [17.5, 464.0], [17.6, 464.0], [17.7, 465.0], [17.8, 465.0], [17.9, 466.0], [18.0, 467.0], [18.1, 467.0], [18.2, 467.0], [18.3, 468.0], [18.4, 468.0], [18.5, 468.0], [18.6, 469.0], [18.7, 471.0], [18.8, 472.0], [18.9, 472.0], [19.0, 472.0], [19.1, 474.0], [19.2, 474.0], [19.3, 474.0], [19.4, 476.0], [19.5, 477.0], [19.6, 478.0], [19.7, 478.0], [19.8, 478.0], [19.9, 479.0], [20.0, 485.0], [20.1, 485.0], [20.2, 486.0], [20.3, 489.0], [20.4, 489.0], [20.5, 494.0], [20.6, 495.0], [20.7, 496.0], [20.8, 496.0], [20.9, 496.0], [21.0, 500.0], [21.1, 500.0], [21.2, 500.0], [21.3, 501.0], [21.4, 504.0], [21.5, 505.0], [21.6, 505.0], [21.7, 505.0], [21.8, 506.0], [21.9, 506.0], [22.0, 507.0], [22.1, 508.0], [22.2, 508.0], [22.3, 508.0], [22.4, 511.0], [22.5, 512.0], [22.6, 516.0], [22.7, 516.0], [22.8, 517.0], [22.9, 517.0], [23.0, 518.0], [23.1, 518.0], [23.2, 520.0], [23.3, 520.0], [23.4, 520.0], [23.5, 520.0], [23.6, 520.0], [23.7, 520.0], [23.8, 520.0], [23.9, 522.0], [24.0, 523.0], [24.1, 523.0], [24.2, 523.0], [24.3, 524.0], [24.4, 524.0], [24.5, 524.0], [24.6, 524.0], [24.7, 525.0], [24.8, 527.0], [24.9, 528.0], [25.0, 528.0], [25.1, 532.0], [25.2, 536.0], [25.3, 536.0], [25.4, 536.0], [25.5, 539.0], [25.6, 540.0], [25.7, 540.0], [25.8, 543.0], [25.9, 543.0], [26.0, 544.0], [26.1, 544.0], [26.2, 546.0], [26.3, 548.0], [26.4, 549.0], [26.5, 549.0], [26.6, 549.0], [26.7, 552.0], [26.8, 552.0], [26.9, 553.0], [27.0, 554.0], [27.1, 555.0], [27.2, 555.0], [27.3, 556.0], [27.4, 557.0], [27.5, 558.0], [27.6, 558.0], [27.7, 560.0], [27.8, 560.0], [27.9, 560.0], [28.0, 560.0], [28.1, 560.0], [28.2, 561.0], [28.3, 561.0], [28.4, 561.0], [28.5, 562.0], [28.6, 562.0], [28.7, 562.0], [28.8, 562.0], [28.9, 563.0], [29.0, 564.0], [29.1, 564.0], [29.2, 564.0], [29.3, 566.0], [29.4, 566.0], [29.5, 566.0], [29.6, 566.0], [29.7, 567.0], [29.8, 570.0], [29.9, 570.0], [30.0, 572.0], [30.1, 572.0], [30.2, 572.0], [30.3, 572.0], [30.4, 573.0], [30.5, 573.0], [30.6, 573.0], [30.7, 580.0], [30.8, 580.0], [30.9, 580.0], [31.0, 580.0], [31.1, 583.0], [31.2, 585.0], [31.3, 585.0], [31.4, 585.0], [31.5, 585.0], [31.6, 586.0], [31.7, 586.0], [31.8, 586.0], [31.9, 587.0], [32.0, 587.0], [32.1, 587.0], [32.2, 587.0], [32.3, 589.0], [32.4, 591.0], [32.5, 591.0], [32.6, 593.0], [32.7, 594.0], [32.8, 594.0], [32.9, 594.0], [33.0, 595.0], [33.1, 595.0], [33.2, 596.0], [33.3, 596.0], [33.4, 596.0], [33.5, 597.0], [33.6, 597.0], [33.7, 599.0], [33.8, 599.0], [33.9, 600.0], [34.0, 600.0], [34.1, 600.0], [34.2, 601.0], [34.3, 602.0], [34.4, 602.0], [34.5, 602.0], [34.6, 602.0], [34.7, 603.0], [34.8, 603.0], [34.9, 604.0], [35.0, 605.0], [35.1, 605.0], [35.2, 605.0], [35.3, 607.0], [35.4, 607.0], [35.5, 607.0], [35.6, 608.0], [35.7, 609.0], [35.8, 609.0], [35.9, 609.0], [36.0, 610.0], [36.1, 612.0], [36.2, 612.0], [36.3, 612.0], [36.4, 615.0], [36.5, 616.0], [36.6, 618.0], [36.7, 618.0], [36.8, 618.0], [36.9, 619.0], [37.0, 619.0], [37.1, 621.0], [37.2, 624.0], [37.3, 627.0], [37.4, 627.0], [37.5, 627.0], [37.6, 628.0], [37.7, 628.0], [37.8, 628.0], [37.9, 629.0], [38.0, 631.0], [38.1, 631.0], [38.2, 631.0], [38.3, 633.0], [38.4, 633.0], [38.5, 633.0], [38.6, 634.0], [38.7, 637.0], [38.8, 638.0], [38.9, 638.0], [39.0, 639.0], [39.1, 641.0], [39.2, 641.0], [39.3, 641.0], [39.4, 641.0], [39.5, 641.0], [39.6, 641.0], [39.7, 641.0], [39.8, 642.0], [39.9, 644.0], [40.0, 646.0], [40.1, 646.0], [40.2, 647.0], [40.3, 647.0], [40.4, 647.0], [40.5, 648.0], [40.6, 650.0], [40.7, 650.0], [40.8, 650.0], [40.9, 652.0], [41.0, 652.0], [41.1, 654.0], [41.2, 654.0], [41.3, 655.0], [41.4, 658.0], [41.5, 658.0], [41.6, 658.0], [41.7, 663.0], [41.8, 671.0], [41.9, 671.0], [42.0, 671.0], [42.1, 672.0], [42.2, 675.0], [42.3, 675.0], [42.4, 676.0], [42.5, 676.0], [42.6, 677.0], [42.7, 677.0], [42.8, 680.0], [42.9, 680.0], [43.0, 682.0], [43.1, 682.0], [43.2, 683.0], [43.3, 686.0], [43.4, 686.0], [43.5, 688.0], [43.6, 688.0], [43.7, 689.0], [43.8, 689.0], [43.9, 692.0], [44.0, 697.0], [44.1, 700.0], [44.2, 700.0], [44.3, 700.0], [44.4, 701.0], [44.5, 703.0], [44.6, 703.0], [44.7, 706.0], [44.8, 707.0], [44.9, 707.0], [45.0, 707.0], [45.1, 708.0], [45.2, 713.0], [45.3, 713.0], [45.4, 714.0], [45.5, 714.0], [45.6, 715.0], [45.7, 715.0], [45.8, 716.0], [45.9, 716.0], [46.0, 717.0], [46.1, 717.0], [46.2, 719.0], [46.3, 719.0], [46.4, 719.0], [46.5, 719.0], [46.6, 720.0], [46.7, 721.0], [46.8, 721.0], [46.9, 721.0], [47.0, 722.0], [47.1, 726.0], [47.2, 726.0], [47.3, 729.0], [47.4, 731.0], [47.5, 732.0], [47.6, 732.0], [47.7, 740.0], [47.8, 741.0], [47.9, 741.0], [48.0, 741.0], [48.1, 741.0], [48.2, 741.0], [48.3, 742.0], [48.4, 742.0], [48.5, 742.0], [48.6, 742.0], [48.7, 742.0], [48.8, 746.0], [48.9, 748.0], [49.0, 749.0], [49.1, 749.0], [49.2, 750.0], [49.3, 753.0], [49.4, 753.0], [49.5, 753.0], [49.6, 753.0], [49.7, 754.0], [49.8, 754.0], [49.9, 754.0], [50.0, 756.0], [50.1, 762.0], [50.2, 762.0], [50.3, 763.0], [50.4, 766.0], [50.5, 768.0], [50.6, 768.0], [50.7, 769.0], [50.8, 770.0], [50.9, 773.0], [51.0, 773.0], [51.1, 774.0], [51.2, 775.0], [51.3, 777.0], [51.4, 777.0], [51.5, 779.0], [51.6, 780.0], [51.7, 780.0], [51.8, 780.0], [51.9, 785.0], [52.0, 786.0], [52.1, 786.0], [52.2, 789.0], [52.3, 792.0], [52.4, 794.0], [52.5, 794.0], [52.6, 797.0], [52.7, 799.0], [52.8, 801.0], [52.9, 801.0], [53.0, 805.0], [53.1, 811.0], [53.2, 815.0], [53.3, 815.0], [53.4, 817.0], [53.5, 817.0], [53.6, 817.0], [53.7, 818.0], [53.8, 818.0], [53.9, 821.0], [54.0, 821.0], [54.1, 822.0], [54.2, 822.0], [54.3, 824.0], [54.4, 824.0], [54.5, 825.0], [54.6, 826.0], [54.7, 832.0], [54.8, 832.0], [54.9, 833.0], [55.0, 834.0], [55.1, 834.0], [55.2, 837.0], [55.3, 837.0], [55.4, 839.0], [55.5, 839.0], [55.6, 844.0], [55.7, 845.0], [55.8, 850.0], [55.9, 850.0], [56.0, 851.0], [56.1, 851.0], [56.2, 859.0], [56.3, 859.0], [56.4, 859.0], [56.5, 860.0], [56.6, 862.0], [56.7, 862.0], [56.8, 865.0], [56.9, 870.0], [57.0, 870.0], [57.1, 871.0], [57.2, 872.0], [57.3, 875.0], [57.4, 875.0], [57.5, 875.0], [57.6, 876.0], [57.7, 886.0], [57.8, 886.0], [57.9, 889.0], [58.0, 891.0], [58.1, 894.0], [58.2, 894.0], [58.3, 895.0], [58.4, 895.0], [58.5, 895.0], [58.6, 897.0], [58.7, 899.0], [58.8, 900.0], [58.9, 900.0], [59.0, 901.0], [59.1, 901.0], [59.2, 902.0], [59.3, 902.0], [59.4, 904.0], [59.5, 908.0], [59.6, 908.0], [59.7, 908.0], [59.8, 911.0], [59.9, 914.0], [60.0, 915.0], [60.1, 915.0], [60.2, 916.0], [60.3, 919.0], [60.4, 919.0], [60.5, 920.0], [60.6, 921.0], [60.7, 922.0], [60.8, 922.0], [60.9, 922.0], [61.0, 923.0], [61.1, 929.0], [61.2, 929.0], [61.3, 931.0], [61.4, 933.0], [61.5, 935.0], [61.6, 935.0], [61.7, 938.0], [61.8, 944.0], [61.9, 944.0], [62.0, 947.0], [62.1, 947.0], [62.2, 948.0], [62.3, 948.0], [62.4, 951.0], [62.5, 951.0], [62.6, 952.0], [62.7, 952.0], [62.8, 953.0], [62.9, 953.0], [63.0, 954.0], [63.1, 954.0], [63.2, 955.0], [63.3, 957.0], [63.4, 957.0], [63.5, 957.0], [63.6, 959.0], [63.7, 962.0], [63.8, 962.0], [63.9, 965.0], [64.0, 966.0], [64.1, 967.0], [64.2, 967.0], [64.3, 968.0], [64.4, 969.0], [64.5, 970.0], [64.6, 970.0], [64.7, 971.0], [64.8, 972.0], [64.9, 972.0], [65.0, 972.0], [65.1, 974.0], [65.2, 974.0], [65.3, 974.0], [65.4, 976.0], [65.5, 976.0], [65.6, 977.0], [65.7, 977.0], [65.8, 977.0], [65.9, 980.0], [66.0, 980.0], [66.1, 980.0], [66.2, 981.0], [66.3, 981.0], [66.4, 981.0], [66.5, 981.0], [66.6, 982.0], [66.7, 983.0], [66.8, 983.0], [66.9, 984.0], [67.0, 984.0], [67.1, 985.0], [67.2, 985.0], [67.3, 988.0], [67.4, 988.0], [67.5, 988.0], [67.6, 988.0], [67.7, 990.0], [67.8, 992.0], [67.9, 992.0], [68.0, 992.0], [68.1, 993.0], [68.2, 994.0], [68.3, 995.0], [68.4, 995.0], [68.5, 997.0], [68.6, 997.0], [68.7, 997.0], [68.8, 997.0], [68.9, 999.0], [69.0, 1000.0], [69.1, 1000.0], [69.2, 1001.0], [69.3, 1006.0], [69.4, 1007.0], [69.5, 1007.0], [69.6, 1007.0], [69.7, 1008.0], [69.8, 1010.0], [69.9, 1010.0], [70.0, 1010.0], [70.1, 1011.0], [70.2, 1011.0], [70.3, 1012.0], [70.4, 1013.0], [70.5, 1014.0], [70.6, 1014.0], [70.7, 1017.0], [70.8, 1018.0], [70.9, 1018.0], [71.0, 1018.0], [71.1, 1019.0], [71.2, 1019.0], [71.3, 1020.0], [71.4, 1020.0], [71.5, 1022.0], [71.6, 1022.0], [71.7, 1022.0], [71.8, 1024.0], [71.9, 1025.0], [72.0, 1026.0], [72.1, 1026.0], [72.2, 1026.0], [72.3, 1027.0], [72.4, 1027.0], [72.5, 1027.0], [72.6, 1030.0], [72.7, 1031.0], [72.8, 1031.0], [72.9, 1031.0], [73.0, 1033.0], [73.1, 1033.0], [73.2, 1033.0], [73.3, 1033.0], [73.4, 1034.0], [73.5, 1035.0], [73.6, 1035.0], [73.7, 1035.0], [73.8, 1047.0], [73.9, 1050.0], [74.0, 1050.0], [74.1, 1051.0], [74.2, 1054.0], [74.3, 1055.0], [74.4, 1055.0], [74.5, 1061.0], [74.6, 1063.0], [74.7, 1064.0], [74.8, 1064.0], [74.9, 1066.0], [75.0, 1072.0], [75.1, 1072.0], [75.2, 1073.0], [75.3, 1074.0], [75.4, 1076.0], [75.5, 1076.0], [75.6, 1078.0], [75.7, 1083.0], [75.8, 1085.0], [75.9, 1085.0], [76.0, 1087.0], [76.1, 1087.0], [76.2, 1088.0], [76.3, 1088.0], [76.4, 1089.0], [76.5, 1090.0], [76.6, 1090.0], [76.7, 1090.0], [76.8, 1091.0], [76.9, 1093.0], [77.0, 1093.0], [77.1, 1095.0], [77.2, 1097.0], [77.3, 1097.0], [77.4, 1097.0], [77.5, 1103.0], [77.6, 1108.0], [77.7, 1111.0], [77.8, 1111.0], [77.9, 1112.0], [78.0, 1113.0], [78.1, 1113.0], [78.2, 1113.0], [78.3, 1114.0], [78.4, 1117.0], [78.5, 1117.0], [78.6, 1120.0], [78.7, 1122.0], [78.8, 1125.0], [78.9, 1125.0], [79.0, 1129.0], [79.1, 1131.0], [79.2, 1135.0], [79.3, 1135.0], [79.4, 1137.0], [79.5, 1140.0], [79.6, 1140.0], [79.7, 1140.0], [79.8, 1141.0], [79.9, 1144.0], [80.0, 1147.0], [80.1, 1147.0], [80.2, 1147.0], [80.3, 1151.0], [80.4, 1151.0], [80.5, 1151.0], [80.6, 1154.0], [80.7, 1159.0], [80.8, 1159.0], [80.9, 1159.0], [81.0, 1161.0], [81.1, 1161.0], [81.2, 1161.0], [81.3, 1161.0], [81.4, 1164.0], [81.5, 1166.0], [81.6, 1166.0], [81.7, 1168.0], [81.8, 1170.0], [81.9, 1170.0], [82.0, 1173.0], [82.1, 1174.0], [82.2, 1175.0], [82.3, 1175.0], [82.4, 1175.0], [82.5, 1177.0], [82.6, 1179.0], [82.7, 1179.0], [82.8, 1184.0], [82.9, 1184.0], [83.0, 1185.0], [83.1, 1185.0], [83.2, 1186.0], [83.3, 1188.0], [83.4, 1188.0], [83.5, 1190.0], [83.6, 1190.0], [83.7, 1190.0], [83.8, 1190.0], [83.9, 1191.0], [84.0, 1191.0], [84.1, 1194.0], [84.2, 1194.0], [84.3, 1200.0], [84.4, 1207.0], [84.5, 1207.0], [84.6, 1207.0], [84.7, 1208.0], [84.8, 1214.0], [84.9, 1220.0], [85.0, 1220.0], [85.1, 1221.0], [85.2, 1221.0], [85.3, 1221.0], [85.4, 1221.0], [85.5, 1232.0], [85.6, 1241.0], [85.7, 1241.0], [85.8, 1242.0], [85.9, 1246.0], [86.0, 1250.0], [86.1, 1250.0], [86.2, 1253.0], [86.3, 1254.0], [86.4, 1255.0], [86.5, 1255.0], [86.6, 1256.0], [86.7, 1257.0], [86.8, 1257.0], [86.9, 1259.0], [87.0, 1259.0], [87.1, 1264.0], [87.2, 1264.0], [87.3, 1265.0], [87.4, 1269.0], [87.5, 1274.0], [87.6, 1274.0], [87.7, 1290.0], [87.8, 1291.0], [87.9, 1293.0], [88.0, 1293.0], [88.1, 1295.0], [88.2, 1295.0], [88.3, 1296.0], [88.4, 1296.0], [88.5, 1298.0], [88.6, 1303.0], [88.7, 1303.0], [88.8, 1306.0], [88.9, 1307.0], [89.0, 1309.0], [89.1, 1309.0], [89.2, 1317.0], [89.3, 1318.0], [89.4, 1329.0], [89.5, 1329.0], [89.6, 1330.0], [89.7, 1332.0], [89.8, 1335.0], [89.9, 1335.0], [90.0, 1336.0], [90.1, 1343.0], [90.2, 1343.0], [90.3, 1344.0], [90.4, 1351.0], [90.5, 1352.0], [90.6, 1352.0], [90.7, 1356.0], [90.8, 1361.0], [90.9, 1362.0], [91.0, 1362.0], [91.1, 1374.0], [91.2, 1378.0], [91.3, 1387.0], [91.4, 1387.0], [91.5, 1389.0], [91.6, 1391.0], [91.7, 1391.0], [91.8, 1396.0], [91.9, 1397.0], [92.0, 1400.0], [92.1, 1400.0], [92.2, 1405.0], [92.3, 1410.0], [92.4, 1416.0], [92.5, 1416.0], [92.6, 1418.0], [92.7, 1431.0], [92.8, 1442.0], [92.9, 1442.0], [93.0, 1446.0], [93.1, 1447.0], [93.2, 1453.0], [93.3, 1453.0], [93.4, 1455.0], [93.5, 1456.0], [93.6, 1456.0], [93.7, 1456.0], [93.8, 1468.0], [93.9, 1484.0], [94.0, 1484.0], [94.1, 1493.0], [94.2, 1494.0], [94.3, 1495.0], [94.4, 1495.0], [94.5, 1503.0], [94.6, 1513.0], [94.7, 1514.0], [94.8, 1514.0], [94.9, 1516.0], [95.0, 1521.0], [95.1, 1521.0], [95.2, 1540.0], [95.3, 1542.0], [95.4, 1546.0], [95.5, 1546.0], [95.6, 1546.0], [95.7, 1572.0], [95.8, 1580.0], [95.9, 1580.0], [96.0, 1583.0], [96.1, 1601.0], [96.2, 1605.0], [96.3, 1605.0], [96.4, 1622.0], [96.5, 1630.0], [96.6, 1635.0], [96.7, 1635.0], [96.8, 1636.0], [96.9, 1637.0], [97.0, 1637.0], [97.1, 1645.0], [97.2, 1671.0], [97.3, 1757.0], [97.4, 1757.0], [97.5, 1768.0], [97.6, 1847.0], [97.7, 1849.0], [97.8, 1849.0], [97.9, 1853.0], [98.0, 1862.0], [98.1, 2212.0], [98.2, 2212.0], [98.3, 2218.0], [98.4, 2361.0], [98.5, 2361.0], [98.6, 2606.0], [98.7, 2698.0], [98.8, 2917.0], [98.9, 2917.0], [99.0, 2937.0], [99.1, 2963.0], [99.2, 3156.0], [99.3, 3156.0], [99.4, 3224.0], [99.5, 3263.0], [99.6, 3284.0], [99.7, 3284.0], [99.8, 3309.0], [99.9, 3313.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 95.0, "series": [{"data": [[600.0, 75.0], [700.0, 64.0], [800.0, 44.0], [900.0, 75.0], [1000.0, 62.0], [1100.0, 50.0], [1200.0, 32.0], [1300.0, 25.0], [1400.0, 18.0], [1500.0, 12.0], [100.0, 6.0], [1600.0, 9.0], [1700.0, 2.0], [1800.0, 4.0], [2300.0, 1.0], [2200.0, 2.0], [2600.0, 2.0], [2900.0, 3.0], [3100.0, 1.0], [200.0, 33.0], [3200.0, 3.0], [3300.0, 2.0], [300.0, 50.0], [400.0, 65.0], [500.0, 95.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 41.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 538.0, "series": [{"data": [[0.0, 156.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 538.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 41.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.23728813559322, "minX": 1.60245882E12, "maxY": 10.0, "series": [{"data": [[1.60245882E12, 10.0], [1.60245888E12, 9.23728813559322]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245888E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 520.0, "minX": 1.0, "maxY": 1768.0, "series": [{"data": [[8.0, 573.0], [4.0, 689.0], [2.0, 603.0], [1.0, 974.0], [9.0, 676.0], [10.0, 844.7975206611559], [5.0, 539.0], [6.0, 822.0], [3.0, 520.0], [7.0, 1768.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 844.1999999999988]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 432.75, "minX": 1.60245882E12, "maxY": 1659176.4, "series": [{"data": [[1.60245882E12, 1659176.4], [1.60245888E12, 176597.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60245882E12, 5090.283333333334], [1.60245888E12, 432.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245888E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 787.3389830508476, "minX": 1.60245882E12, "maxY": 849.1627218934898, "series": [{"data": [[1.60245882E12, 849.1627218934898], [1.60245888E12, 787.3389830508476]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245888E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 785.9830508474573, "minX": 1.60245882E12, "maxY": 847.9556213017753, "series": [{"data": [[1.60245882E12, 847.9556213017753], [1.60245888E12, 785.9830508474573]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245888E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.10169491525423728, "minX": 1.60245882E12, "maxY": 0.11982248520710091, "series": [{"data": [[1.60245882E12, 0.11982248520710091], [1.60245888E12, 0.10169491525423728]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245888E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.60245882E12, "maxY": 3313.0, "series": [{"data": [[1.60245882E12, 3313.0], [1.60245888E12, 1768.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60245882E12, 197.3719993543625], [1.60245888E12, 257.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60245882E12, 199.809200258255], [1.60245888E12, 257.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60245882E12, 198.72599967718125], [1.60245888E12, 257.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60245882E12, 178.0], [1.60245888E12, 257.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60245882E12, 774.0], [1.60245888E12, 631.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245888E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 526.0, "minX": 1.0, "maxY": 2361.0, "series": [{"data": [[8.0, 1015.0], [9.0, 877.5], [10.0, 828.5], [11.0, 981.0], [12.0, 952.0], [13.0, 873.0], [14.0, 668.0], [15.0, 603.5], [1.0, 2361.0], [16.0, 589.5], [17.0, 672.0], [18.0, 526.0], [19.0, 641.0], [5.0, 603.0], [7.0, 953.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 525.0, "minX": 1.0, "maxY": 2358.0, "series": [{"data": [[8.0, 1013.5], [9.0, 877.0], [10.0, 828.5], [11.0, 980.0], [12.0, 950.0], [13.0, 871.5], [14.0, 667.5], [15.0, 603.0], [1.0, 2358.0], [16.0, 589.0], [17.0, 672.0], [18.0, 525.0], [19.0, 640.0], [5.0, 603.0], [7.0, 952.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.60245882E12, "maxY": 11.433333333333334, "series": [{"data": [[1.60245882E12, 11.433333333333334], [1.60245888E12, 0.8166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245888E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.9833333333333333, "minX": 1.60245882E12, "maxY": 11.266666666666667, "series": [{"data": [[1.60245882E12, 11.266666666666667], [1.60245888E12, 0.9833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245888E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.9833333333333333, "minX": 1.60245882E12, "maxY": 11.266666666666667, "series": [{"data": [[1.60245882E12, 11.266666666666667], [1.60245888E12, 0.9833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245888E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.9833333333333333, "minX": 1.60245882E12, "maxY": 11.266666666666667, "series": [{"data": [[1.60245882E12, 11.266666666666667], [1.60245888E12, 0.9833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245888E12, "title": "Total Transactions Per Second"}},
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

