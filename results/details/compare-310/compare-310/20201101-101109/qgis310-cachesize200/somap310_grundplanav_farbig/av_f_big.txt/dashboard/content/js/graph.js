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
        data: {"result": {"minY": 200.0, "minX": 0.0, "maxY": 3627.0, "series": [{"data": [[0.0, 200.0], [0.1, 200.0], [0.2, 202.0], [0.3, 204.0], [0.4, 204.0], [0.5, 205.0], [0.6, 209.0], [0.7, 210.0], [0.8, 210.0], [0.9, 213.0], [1.0, 215.0], [1.1, 216.0], [1.2, 216.0], [1.3, 219.0], [1.4, 227.0], [1.5, 230.0], [1.6, 230.0], [1.7, 233.0], [1.8, 233.0], [1.9, 233.0], [2.0, 243.0], [2.1, 243.0], [2.2, 244.0], [2.3, 244.0], [2.4, 244.0], [2.5, 247.0], [2.6, 248.0], [2.7, 248.0], [2.8, 248.0], [2.9, 248.0], [3.0, 249.0], [3.1, 249.0], [3.2, 249.0], [3.3, 251.0], [3.4, 251.0], [3.5, 251.0], [3.6, 251.0], [3.7, 255.0], [3.8, 255.0], [3.9, 259.0], [4.0, 260.0], [4.1, 260.0], [4.2, 260.0], [4.3, 261.0], [4.4, 274.0], [4.5, 275.0], [4.6, 275.0], [4.7, 276.0], [4.8, 280.0], [4.9, 281.0], [5.0, 281.0], [5.1, 283.0], [5.2, 286.0], [5.3, 286.0], [5.4, 293.0], [5.5, 293.0], [5.6, 293.0], [5.7, 293.0], [5.8, 294.0], [5.9, 301.0], [6.0, 302.0], [6.1, 302.0], [6.2, 306.0], [6.3, 307.0], [6.4, 308.0], [6.5, 308.0], [6.6, 310.0], [6.7, 314.0], [6.8, 314.0], [6.9, 314.0], [7.0, 318.0], [7.1, 320.0], [7.2, 320.0], [7.3, 324.0], [7.4, 327.0], [7.5, 331.0], [7.6, 331.0], [7.7, 333.0], [7.8, 338.0], [7.9, 339.0], [8.0, 339.0], [8.1, 341.0], [8.2, 342.0], [8.3, 345.0], [8.4, 345.0], [8.5, 345.0], [8.6, 345.0], [8.7, 345.0], [8.8, 346.0], [8.9, 351.0], [9.0, 357.0], [9.1, 357.0], [9.2, 358.0], [9.3, 362.0], [9.4, 364.0], [9.5, 364.0], [9.6, 366.0], [9.7, 368.0], [9.8, 368.0], [9.9, 368.0], [10.0, 370.0], [10.1, 373.0], [10.2, 373.0], [10.3, 387.0], [10.4, 387.0], [10.5, 389.0], [10.6, 389.0], [10.7, 390.0], [10.8, 391.0], [10.9, 392.0], [11.0, 392.0], [11.1, 394.0], [11.2, 395.0], [11.3, 396.0], [11.4, 396.0], [11.5, 396.0], [11.6, 398.0], [11.7, 398.0], [11.8, 398.0], [11.9, 401.0], [12.0, 403.0], [12.1, 403.0], [12.2, 404.0], [12.3, 404.0], [12.4, 409.0], [12.5, 409.0], [12.6, 412.0], [12.7, 412.0], [12.8, 414.0], [12.9, 414.0], [13.0, 415.0], [13.1, 416.0], [13.2, 416.0], [13.3, 416.0], [13.4, 417.0], [13.5, 418.0], [13.6, 418.0], [13.7, 418.0], [13.8, 419.0], [13.9, 419.0], [14.0, 419.0], [14.1, 419.0], [14.2, 422.0], [14.3, 422.0], [14.4, 422.0], [14.5, 426.0], [14.6, 427.0], [14.7, 433.0], [14.8, 433.0], [14.9, 438.0], [15.0, 439.0], [15.1, 439.0], [15.2, 441.0], [15.3, 443.0], [15.4, 444.0], [15.5, 444.0], [15.6, 447.0], [15.7, 449.0], [15.8, 450.0], [15.9, 450.0], [16.0, 452.0], [16.1, 454.0], [16.2, 455.0], [16.3, 455.0], [16.4, 458.0], [16.5, 461.0], [16.6, 462.0], [16.7, 462.0], [16.8, 464.0], [16.9, 465.0], [17.0, 465.0], [17.1, 465.0], [17.2, 469.0], [17.3, 469.0], [17.4, 469.0], [17.5, 476.0], [17.6, 480.0], [17.7, 483.0], [17.8, 483.0], [17.9, 484.0], [18.0, 485.0], [18.1, 487.0], [18.2, 487.0], [18.3, 491.0], [18.4, 492.0], [18.5, 492.0], [18.6, 494.0], [18.7, 498.0], [18.8, 499.0], [18.9, 499.0], [19.0, 500.0], [19.1, 501.0], [19.2, 504.0], [19.3, 504.0], [19.4, 506.0], [19.5, 506.0], [19.6, 506.0], [19.7, 506.0], [19.8, 507.0], [19.9, 508.0], [20.0, 509.0], [20.1, 509.0], [20.2, 509.0], [20.3, 510.0], [20.4, 510.0], [20.5, 511.0], [20.6, 511.0], [20.7, 512.0], [20.8, 512.0], [20.9, 512.0], [21.0, 514.0], [21.1, 517.0], [21.2, 517.0], [21.3, 518.0], [21.4, 518.0], [21.5, 519.0], [21.6, 519.0], [21.7, 520.0], [21.8, 520.0], [21.9, 520.0], [22.0, 521.0], [22.1, 528.0], [22.2, 529.0], [22.3, 529.0], [22.4, 532.0], [22.5, 532.0], [22.6, 534.0], [22.7, 534.0], [22.8, 534.0], [22.9, 534.0], [23.0, 538.0], [23.1, 538.0], [23.2, 538.0], [23.3, 539.0], [23.4, 539.0], [23.5, 540.0], [23.6, 541.0], [23.7, 541.0], [23.8, 541.0], [23.9, 541.0], [24.0, 542.0], [24.1, 542.0], [24.2, 542.0], [24.3, 544.0], [24.4, 547.0], [24.5, 547.0], [24.6, 547.0], [24.7, 549.0], [24.8, 550.0], [24.9, 552.0], [25.0, 552.0], [25.1, 553.0], [25.2, 553.0], [25.3, 553.0], [25.4, 554.0], [25.5, 554.0], [25.6, 554.0], [25.7, 554.0], [25.8, 557.0], [25.9, 557.0], [26.0, 560.0], [26.1, 560.0], [26.2, 560.0], [26.3, 560.0], [26.4, 561.0], [26.5, 561.0], [26.6, 561.0], [26.7, 562.0], [26.8, 562.0], [26.9, 563.0], [27.0, 563.0], [27.1, 564.0], [27.2, 564.0], [27.3, 564.0], [27.4, 564.0], [27.5, 566.0], [27.6, 566.0], [27.7, 566.0], [27.8, 568.0], [27.9, 568.0], [28.0, 568.0], [28.1, 568.0], [28.2, 569.0], [28.3, 569.0], [28.4, 569.0], [28.5, 569.0], [28.6, 571.0], [28.7, 571.0], [28.8, 572.0], [28.9, 574.0], [29.0, 577.0], [29.1, 577.0], [29.2, 579.0], [29.3, 579.0], [29.4, 581.0], [29.5, 581.0], [29.6, 585.0], [29.7, 585.0], [29.8, 588.0], [29.9, 588.0], [30.0, 589.0], [30.1, 591.0], [30.2, 591.0], [30.3, 591.0], [30.4, 592.0], [30.5, 593.0], [30.6, 593.0], [30.7, 596.0], [30.8, 597.0], [30.9, 597.0], [31.0, 597.0], [31.1, 599.0], [31.2, 600.0], [31.3, 601.0], [31.4, 601.0], [31.5, 605.0], [31.6, 607.0], [31.7, 607.0], [31.8, 607.0], [31.9, 608.0], [32.0, 609.0], [32.1, 609.0], [32.2, 610.0], [32.3, 611.0], [32.4, 612.0], [32.5, 612.0], [32.6, 612.0], [32.7, 613.0], [32.8, 613.0], [32.9, 613.0], [33.0, 615.0], [33.1, 618.0], [33.2, 619.0], [33.3, 619.0], [33.4, 620.0], [33.5, 620.0], [33.6, 620.0], [33.7, 620.0], [33.8, 623.0], [33.9, 624.0], [34.0, 624.0], [34.1, 625.0], [34.2, 626.0], [34.3, 627.0], [34.4, 627.0], [34.5, 627.0], [34.6, 627.0], [34.7, 631.0], [34.8, 631.0], [34.9, 631.0], [35.0, 633.0], [35.1, 633.0], [35.2, 635.0], [35.3, 638.0], [35.4, 638.0], [35.5, 638.0], [35.6, 639.0], [35.7, 642.0], [35.8, 643.0], [35.9, 643.0], [36.0, 645.0], [36.1, 649.0], [36.2, 649.0], [36.3, 649.0], [36.4, 650.0], [36.5, 654.0], [36.6, 654.0], [36.7, 654.0], [36.8, 654.0], [36.9, 654.0], [37.0, 654.0], [37.1, 656.0], [37.2, 658.0], [37.3, 658.0], [37.4, 658.0], [37.5, 659.0], [37.6, 659.0], [37.7, 660.0], [37.8, 660.0], [37.9, 660.0], [38.0, 661.0], [38.1, 664.0], [38.2, 664.0], [38.3, 664.0], [38.4, 665.0], [38.5, 665.0], [38.6, 669.0], [38.7, 669.0], [38.8, 669.0], [38.9, 669.0], [39.0, 670.0], [39.1, 670.0], [39.2, 673.0], [39.3, 673.0], [39.4, 675.0], [39.5, 675.0], [39.6, 676.0], [39.7, 676.0], [39.8, 681.0], [39.9, 683.0], [40.0, 686.0], [40.1, 686.0], [40.2, 688.0], [40.3, 689.0], [40.4, 689.0], [40.5, 697.0], [40.6, 697.0], [40.7, 701.0], [40.8, 701.0], [40.9, 702.0], [41.0, 703.0], [41.1, 705.0], [41.2, 705.0], [41.3, 706.0], [41.4, 706.0], [41.5, 712.0], [41.6, 712.0], [41.7, 715.0], [41.8, 716.0], [41.9, 716.0], [42.0, 718.0], [42.1, 719.0], [42.2, 723.0], [42.3, 723.0], [42.4, 725.0], [42.5, 725.0], [42.6, 726.0], [42.7, 726.0], [42.8, 727.0], [42.9, 729.0], [43.0, 733.0], [43.1, 733.0], [43.2, 734.0], [43.3, 735.0], [43.4, 735.0], [43.5, 737.0], [43.6, 738.0], [43.7, 740.0], [43.8, 740.0], [43.9, 744.0], [44.0, 747.0], [44.1, 750.0], [44.2, 750.0], [44.3, 750.0], [44.4, 751.0], [44.5, 752.0], [44.6, 752.0], [44.7, 752.0], [44.8, 752.0], [44.9, 752.0], [45.0, 752.0], [45.1, 753.0], [45.2, 753.0], [45.3, 753.0], [45.4, 754.0], [45.5, 755.0], [45.6, 758.0], [45.7, 758.0], [45.8, 759.0], [45.9, 759.0], [46.0, 761.0], [46.1, 761.0], [46.2, 761.0], [46.3, 762.0], [46.4, 762.0], [46.5, 762.0], [46.6, 762.0], [46.7, 764.0], [46.8, 764.0], [46.9, 764.0], [47.0, 766.0], [47.1, 766.0], [47.2, 766.0], [47.3, 767.0], [47.4, 767.0], [47.5, 771.0], [47.6, 771.0], [47.7, 774.0], [47.8, 774.0], [47.9, 774.0], [48.0, 774.0], [48.1, 776.0], [48.2, 777.0], [48.3, 780.0], [48.4, 780.0], [48.5, 780.0], [48.6, 782.0], [48.7, 782.0], [48.8, 783.0], [48.9, 784.0], [49.0, 785.0], [49.1, 785.0], [49.2, 785.0], [49.3, 787.0], [49.4, 789.0], [49.5, 789.0], [49.6, 791.0], [49.7, 791.0], [49.8, 794.0], [49.9, 794.0], [50.0, 795.0], [50.1, 795.0], [50.2, 795.0], [50.3, 796.0], [50.4, 797.0], [50.5, 798.0], [50.6, 798.0], [50.7, 799.0], [50.8, 801.0], [50.9, 802.0], [51.0, 802.0], [51.1, 804.0], [51.2, 805.0], [51.3, 806.0], [51.4, 806.0], [51.5, 809.0], [51.6, 816.0], [51.7, 816.0], [51.8, 819.0], [51.9, 824.0], [52.0, 828.0], [52.1, 828.0], [52.2, 829.0], [52.3, 832.0], [52.4, 834.0], [52.5, 834.0], [52.6, 835.0], [52.7, 836.0], [52.8, 837.0], [52.9, 837.0], [53.0, 837.0], [53.1, 838.0], [53.2, 840.0], [53.3, 840.0], [53.4, 840.0], [53.5, 841.0], [53.6, 841.0], [53.7, 842.0], [53.8, 853.0], [53.9, 856.0], [54.0, 856.0], [54.1, 858.0], [54.2, 858.0], [54.3, 863.0], [54.4, 863.0], [54.5, 867.0], [54.6, 869.0], [54.7, 871.0], [54.8, 871.0], [54.9, 873.0], [55.0, 874.0], [55.1, 874.0], [55.2, 875.0], [55.3, 878.0], [55.4, 878.0], [55.5, 878.0], [55.6, 878.0], [55.7, 884.0], [55.8, 884.0], [55.9, 884.0], [56.0, 886.0], [56.1, 892.0], [56.2, 893.0], [56.3, 893.0], [56.4, 893.0], [56.5, 893.0], [56.6, 896.0], [56.7, 896.0], [56.8, 897.0], [56.9, 901.0], [57.0, 901.0], [57.1, 902.0], [57.2, 903.0], [57.3, 906.0], [57.4, 906.0], [57.5, 907.0], [57.6, 907.0], [57.7, 908.0], [57.8, 908.0], [57.9, 909.0], [58.0, 910.0], [58.1, 912.0], [58.2, 912.0], [58.3, 916.0], [58.4, 917.0], [58.5, 917.0], [58.6, 918.0], [58.7, 922.0], [58.8, 924.0], [58.9, 924.0], [59.0, 929.0], [59.1, 930.0], [59.2, 932.0], [59.3, 932.0], [59.4, 933.0], [59.5, 933.0], [59.6, 933.0], [59.7, 933.0], [59.8, 943.0], [59.9, 943.0], [60.0, 943.0], [60.1, 943.0], [60.2, 947.0], [60.3, 950.0], [60.4, 950.0], [60.5, 952.0], [60.6, 952.0], [60.7, 953.0], [60.8, 953.0], [60.9, 954.0], [61.0, 954.0], [61.1, 955.0], [61.2, 955.0], [61.3, 956.0], [61.4, 956.0], [61.5, 958.0], [61.6, 958.0], [61.7, 959.0], [61.8, 959.0], [61.9, 959.0], [62.0, 960.0], [62.1, 961.0], [62.2, 963.0], [62.3, 963.0], [62.4, 963.0], [62.5, 965.0], [62.6, 966.0], [62.7, 966.0], [62.8, 968.0], [62.9, 970.0], [63.0, 971.0], [63.1, 971.0], [63.2, 972.0], [63.3, 973.0], [63.4, 973.0], [63.5, 974.0], [63.6, 974.0], [63.7, 975.0], [63.8, 975.0], [63.9, 978.0], [64.0, 986.0], [64.1, 987.0], [64.2, 987.0], [64.3, 987.0], [64.4, 992.0], [64.5, 994.0], [64.6, 994.0], [64.7, 995.0], [64.8, 997.0], [64.9, 997.0], [65.0, 997.0], [65.1, 1002.0], [65.2, 1003.0], [65.3, 1003.0], [65.4, 1007.0], [65.5, 1007.0], [65.6, 1007.0], [65.7, 1007.0], [65.8, 1008.0], [65.9, 1015.0], [66.0, 1016.0], [66.1, 1016.0], [66.2, 1016.0], [66.3, 1016.0], [66.4, 1017.0], [66.5, 1017.0], [66.6, 1017.0], [66.7, 1018.0], [66.8, 1018.0], [66.9, 1020.0], [67.0, 1022.0], [67.1, 1026.0], [67.2, 1026.0], [67.3, 1028.0], [67.4, 1029.0], [67.5, 1031.0], [67.6, 1031.0], [67.7, 1032.0], [67.8, 1032.0], [67.9, 1038.0], [68.0, 1038.0], [68.1, 1039.0], [68.2, 1039.0], [68.3, 1039.0], [68.4, 1039.0], [68.5, 1042.0], [68.6, 1043.0], [68.7, 1043.0], [68.8, 1044.0], [68.9, 1044.0], [69.0, 1049.0], [69.1, 1049.0], [69.2, 1051.0], [69.3, 1054.0], [69.4, 1055.0], [69.5, 1055.0], [69.6, 1055.0], [69.7, 1056.0], [69.8, 1057.0], [69.9, 1057.0], [70.0, 1057.0], [70.1, 1058.0], [70.2, 1058.0], [70.3, 1062.0], [70.4, 1062.0], [70.5, 1062.0], [70.6, 1062.0], [70.7, 1063.0], [70.8, 1067.0], [70.9, 1069.0], [71.0, 1069.0], [71.1, 1069.0], [71.2, 1069.0], [71.3, 1073.0], [71.4, 1073.0], [71.5, 1073.0], [71.6, 1074.0], [71.7, 1074.0], [71.8, 1081.0], [71.9, 1082.0], [72.0, 1089.0], [72.1, 1089.0], [72.2, 1090.0], [72.3, 1091.0], [72.4, 1092.0], [72.5, 1092.0], [72.6, 1096.0], [72.7, 1098.0], [72.8, 1100.0], [72.9, 1100.0], [73.0, 1102.0], [73.1, 1103.0], [73.2, 1104.0], [73.3, 1104.0], [73.4, 1105.0], [73.5, 1105.0], [73.6, 1105.0], [73.7, 1109.0], [73.8, 1109.0], [73.9, 1111.0], [74.0, 1111.0], [74.1, 1113.0], [74.2, 1114.0], [74.3, 1114.0], [74.4, 1114.0], [74.5, 1116.0], [74.6, 1119.0], [74.7, 1121.0], [74.8, 1121.0], [74.9, 1123.0], [75.0, 1124.0], [75.1, 1124.0], [75.2, 1127.0], [75.3, 1129.0], [75.4, 1130.0], [75.5, 1130.0], [75.6, 1132.0], [75.7, 1134.0], [75.8, 1134.0], [75.9, 1134.0], [76.0, 1134.0], [76.1, 1136.0], [76.2, 1137.0], [76.3, 1137.0], [76.4, 1139.0], [76.5, 1140.0], [76.6, 1143.0], [76.7, 1143.0], [76.8, 1144.0], [76.9, 1145.0], [77.0, 1145.0], [77.1, 1146.0], [77.2, 1148.0], [77.3, 1151.0], [77.4, 1151.0], [77.5, 1154.0], [77.6, 1156.0], [77.7, 1156.0], [77.8, 1156.0], [77.9, 1156.0], [78.0, 1158.0], [78.1, 1160.0], [78.2, 1160.0], [78.3, 1160.0], [78.4, 1162.0], [78.5, 1162.0], [78.6, 1162.0], [78.7, 1162.0], [78.8, 1163.0], [78.9, 1163.0], [79.0, 1166.0], [79.1, 1166.0], [79.2, 1168.0], [79.3, 1168.0], [79.4, 1169.0], [79.5, 1170.0], [79.6, 1174.0], [79.7, 1174.0], [79.8, 1174.0], [79.9, 1176.0], [80.0, 1179.0], [80.1, 1179.0], [80.2, 1182.0], [80.3, 1185.0], [80.4, 1185.0], [80.5, 1186.0], [80.6, 1187.0], [80.7, 1190.0], [80.8, 1190.0], [80.9, 1191.0], [81.0, 1191.0], [81.1, 1192.0], [81.2, 1192.0], [81.3, 1195.0], [81.4, 1196.0], [81.5, 1197.0], [81.6, 1197.0], [81.7, 1199.0], [81.8, 1200.0], [81.9, 1200.0], [82.0, 1205.0], [82.1, 1205.0], [82.2, 1209.0], [82.3, 1209.0], [82.4, 1210.0], [82.5, 1218.0], [82.6, 1223.0], [82.7, 1223.0], [82.8, 1223.0], [82.9, 1225.0], [83.0, 1225.0], [83.1, 1225.0], [83.2, 1226.0], [83.3, 1229.0], [83.4, 1229.0], [83.5, 1229.0], [83.6, 1233.0], [83.7, 1235.0], [83.8, 1235.0], [83.9, 1236.0], [84.0, 1236.0], [84.1, 1237.0], [84.2, 1237.0], [84.3, 1238.0], [84.4, 1238.0], [84.5, 1242.0], [84.6, 1242.0], [84.7, 1242.0], [84.8, 1247.0], [84.9, 1248.0], [85.0, 1248.0], [85.1, 1250.0], [85.2, 1256.0], [85.3, 1256.0], [85.4, 1258.0], [85.5, 1259.0], [85.6, 1260.0], [85.7, 1260.0], [85.8, 1261.0], [85.9, 1262.0], [86.0, 1268.0], [86.1, 1268.0], [86.2, 1268.0], [86.3, 1270.0], [86.4, 1274.0], [86.5, 1274.0], [86.6, 1280.0], [86.7, 1280.0], [86.8, 1280.0], [86.9, 1281.0], [87.0, 1285.0], [87.1, 1286.0], [87.2, 1286.0], [87.3, 1286.0], [87.4, 1287.0], [87.5, 1287.0], [87.6, 1287.0], [87.7, 1288.0], [87.8, 1289.0], [87.9, 1301.0], [88.0, 1301.0], [88.1, 1304.0], [88.2, 1304.0], [88.3, 1306.0], [88.4, 1306.0], [88.5, 1313.0], [88.6, 1314.0], [88.7, 1314.0], [88.8, 1317.0], [88.9, 1322.0], [89.0, 1326.0], [89.1, 1326.0], [89.2, 1337.0], [89.3, 1342.0], [89.4, 1347.0], [89.5, 1347.0], [89.6, 1348.0], [89.7, 1352.0], [89.8, 1353.0], [89.9, 1353.0], [90.0, 1354.0], [90.1, 1355.0], [90.2, 1355.0], [90.3, 1362.0], [90.4, 1362.0], [90.5, 1365.0], [90.6, 1365.0], [90.7, 1367.0], [90.8, 1370.0], [90.9, 1373.0], [91.0, 1373.0], [91.1, 1380.0], [91.2, 1382.0], [91.3, 1384.0], [91.4, 1384.0], [91.5, 1395.0], [91.6, 1402.0], [91.7, 1402.0], [91.8, 1410.0], [91.9, 1410.0], [92.0, 1425.0], [92.1, 1425.0], [92.2, 1426.0], [92.3, 1430.0], [92.4, 1440.0], [92.5, 1440.0], [92.6, 1441.0], [92.7, 1449.0], [92.8, 1486.0], [92.9, 1486.0], [93.0, 1492.0], [93.1, 1517.0], [93.2, 1523.0], [93.3, 1523.0], [93.4, 1528.0], [93.5, 1530.0], [93.6, 1530.0], [93.7, 1534.0], [93.8, 1543.0], [93.9, 1550.0], [94.0, 1550.0], [94.1, 1551.0], [94.2, 1568.0], [94.3, 1570.0], [94.4, 1570.0], [94.5, 1604.0], [94.6, 1627.0], [94.7, 1635.0], [94.8, 1635.0], [94.9, 1650.0], [95.0, 1653.0], [95.1, 1653.0], [95.2, 1659.0], [95.3, 1673.0], [95.4, 1675.0], [95.5, 1675.0], [95.6, 1681.0], [95.7, 1687.0], [95.8, 1705.0], [95.9, 1705.0], [96.0, 1707.0], [96.1, 1727.0], [96.2, 1729.0], [96.3, 1729.0], [96.4, 1749.0], [96.5, 1779.0], [96.6, 1793.0], [96.7, 1793.0], [96.8, 1822.0], [96.9, 1856.0], [97.0, 1856.0], [97.1, 1857.0], [97.2, 1864.0], [97.3, 1878.0], [97.4, 1878.0], [97.5, 1878.0], [97.6, 2017.0], [97.7, 2076.0], [97.8, 2076.0], [97.9, 2129.0], [98.0, 2193.0], [98.1, 2420.0], [98.2, 2420.0], [98.3, 2698.0], [98.4, 2907.0], [98.5, 2907.0], [98.6, 2921.0], [98.7, 2945.0], [98.8, 3032.0], [98.9, 3032.0], [99.0, 3055.0], [99.1, 3062.0], [99.2, 3080.0], [99.3, 3080.0], [99.4, 3130.0], [99.5, 3209.0], [99.6, 3283.0], [99.7, 3283.0], [99.8, 3441.0], [99.9, 3627.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 90.0, "series": [{"data": [[600.0, 70.0], [700.0, 74.0], [800.0, 45.0], [900.0, 60.0], [1000.0, 57.0], [1100.0, 66.0], [1200.0, 45.0], [1300.0, 27.0], [1400.0, 11.0], [1500.0, 10.0], [1600.0, 10.0], [1700.0, 7.0], [1800.0, 6.0], [2000.0, 2.0], [2100.0, 2.0], [2400.0, 1.0], [2600.0, 1.0], [2900.0, 3.0], [3000.0, 4.0], [3100.0, 1.0], [3200.0, 2.0], [200.0, 43.0], [3400.0, 1.0], [3600.0, 1.0], [300.0, 44.0], [400.0, 52.0], [500.0, 90.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 51.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 544.0, "series": [{"data": [[0.0, 140.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 544.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 51.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.823045267489713, "minX": 1.60422864E12, "maxY": 10.0, "series": [{"data": [[1.60422864E12, 10.0], [1.6042287E12, 9.823045267489713]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042287E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 489.0, "minX": 1.0, "maxY": 952.0, "series": [{"data": [[4.0, 789.0], [2.0, 719.0], [1.0, 952.0], [9.0, 489.0], [10.0, 880.327823691461], [5.0, 585.0], [6.0, 645.0], [7.0, 665.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.941496598639453, 877.877551020409]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1822.3166666666666, "minX": 1.60422864E12, "maxY": 1295622.45, "series": [{"data": [[1.60422864E12, 1295622.45], [1.6042287E12, 540159.2166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422864E12, 3700.7166666666667], [1.6042287E12, 1822.3166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042287E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 846.905349794239, "minX": 1.60422864E12, "maxY": 893.1747967479679, "series": [{"data": [[1.60422864E12, 893.1747967479679], [1.6042287E12, 846.905349794239]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042287E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 845.7942386831278, "minX": 1.60422864E12, "maxY": 891.8963414634147, "series": [{"data": [[1.60422864E12, 891.8963414634147], [1.6042287E12, 845.7942386831278]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042287E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0411522633744856, "minX": 1.60422864E12, "maxY": 0.16666666666666655, "series": [{"data": [[1.60422864E12, 0.16666666666666655], [1.6042287E12, 0.0411522633744856]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042287E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 200.0, "minX": 1.60422864E12, "maxY": 3627.0, "series": [{"data": [[1.60422864E12, 3627.0], [1.6042287E12, 2129.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422864E12, 209.43699988245965], [1.6042287E12, 243.78399976730347]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422864E12, 209.88070004701615], [1.6042287E12, 244.66240009307862]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422864E12, 209.68349994122983], [1.6042287E12, 244.27199988365174]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422864E12, 200.0], [1.6042287E12, 204.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422864E12, 796.5], [1.6042287E12, 794.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042287E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 485.0, "minX": 6.0, "maxY": 1030.5, "series": [{"data": [[8.0, 1030.5], [16.0, 599.0], [17.0, 588.0], [9.0, 883.0], [19.0, 485.0], [10.0, 980.5], [11.0, 959.0], [12.0, 1022.0], [6.0, 682.0], [13.0, 753.0], [14.0, 716.5], [15.0, 615.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 484.0, "minX": 6.0, "maxY": 1029.5, "series": [{"data": [[8.0, 1029.5], [16.0, 598.5], [17.0, 588.0], [9.0, 882.0], [19.0, 484.0], [10.0, 980.0], [11.0, 958.0], [12.0, 1019.0], [6.0, 681.5], [13.0, 752.5], [14.0, 715.5], [15.0, 614.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.8833333333333333, "minX": 1.60422864E12, "maxY": 8.366666666666667, "series": [{"data": [[1.60422864E12, 8.366666666666667], [1.6042287E12, 3.8833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042287E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.05, "minX": 1.60422864E12, "maxY": 8.2, "series": [{"data": [[1.60422864E12, 8.2], [1.6042287E12, 4.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042287E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.05, "minX": 1.60422864E12, "maxY": 8.2, "series": [{"data": [[1.60422864E12, 8.2], [1.6042287E12, 4.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042287E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.05, "minX": 1.60422864E12, "maxY": 8.2, "series": [{"data": [[1.60422864E12, 8.2], [1.6042287E12, 4.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042287E12, "title": "Total Transactions Per Second"}},
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

