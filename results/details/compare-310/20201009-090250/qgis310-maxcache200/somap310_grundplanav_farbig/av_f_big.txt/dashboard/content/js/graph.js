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
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 3404.0, "series": [{"data": [[0.0, 183.0], [0.1, 183.0], [0.2, 189.0], [0.3, 192.0], [0.4, 192.0], [0.5, 195.0], [0.6, 197.0], [0.7, 203.0], [0.8, 203.0], [0.9, 208.0], [1.0, 208.0], [1.1, 209.0], [1.2, 209.0], [1.3, 211.0], [1.4, 212.0], [1.5, 212.0], [1.6, 212.0], [1.7, 212.0], [1.8, 214.0], [1.9, 214.0], [2.0, 220.0], [2.1, 222.0], [2.2, 226.0], [2.3, 226.0], [2.4, 229.0], [2.5, 233.0], [2.6, 235.0], [2.7, 235.0], [2.8, 236.0], [2.9, 239.0], [3.0, 239.0], [3.1, 239.0], [3.2, 240.0], [3.3, 241.0], [3.4, 241.0], [3.5, 242.0], [3.6, 247.0], [3.7, 250.0], [3.8, 250.0], [3.9, 251.0], [4.0, 253.0], [4.1, 254.0], [4.2, 254.0], [4.3, 254.0], [4.4, 254.0], [4.5, 254.0], [4.6, 254.0], [4.7, 255.0], [4.8, 259.0], [4.9, 259.0], [5.0, 259.0], [5.1, 260.0], [5.2, 261.0], [5.3, 261.0], [5.4, 264.0], [5.5, 265.0], [5.6, 266.0], [5.7, 266.0], [5.8, 267.0], [5.9, 273.0], [6.0, 274.0], [6.1, 274.0], [6.2, 274.0], [6.3, 275.0], [6.4, 278.0], [6.5, 278.0], [6.6, 281.0], [6.7, 281.0], [6.8, 281.0], [6.9, 281.0], [7.0, 285.0], [7.1, 288.0], [7.2, 288.0], [7.3, 291.0], [7.4, 292.0], [7.5, 294.0], [7.6, 294.0], [7.7, 301.0], [7.8, 303.0], [7.9, 304.0], [8.0, 304.0], [8.1, 308.0], [8.2, 310.0], [8.3, 315.0], [8.4, 315.0], [8.5, 318.0], [8.6, 326.0], [8.7, 326.0], [8.8, 327.0], [8.9, 331.0], [9.0, 338.0], [9.1, 338.0], [9.2, 338.0], [9.3, 340.0], [9.4, 341.0], [9.5, 341.0], [9.6, 341.0], [9.7, 349.0], [9.8, 350.0], [9.9, 350.0], [10.0, 354.0], [10.1, 355.0], [10.2, 355.0], [10.3, 356.0], [10.4, 358.0], [10.5, 359.0], [10.6, 359.0], [10.7, 359.0], [10.8, 359.0], [10.9, 361.0], [11.0, 361.0], [11.1, 361.0], [11.2, 367.0], [11.3, 369.0], [11.4, 369.0], [11.5, 375.0], [11.6, 375.0], [11.7, 375.0], [11.8, 377.0], [11.9, 377.0], [12.0, 377.0], [12.1, 377.0], [12.2, 378.0], [12.3, 381.0], [12.4, 383.0], [12.5, 383.0], [12.6, 386.0], [12.7, 387.0], [12.8, 388.0], [12.9, 388.0], [13.0, 388.0], [13.1, 390.0], [13.2, 391.0], [13.3, 391.0], [13.4, 394.0], [13.5, 394.0], [13.6, 394.0], [13.7, 396.0], [13.8, 397.0], [13.9, 398.0], [14.0, 398.0], [14.1, 400.0], [14.2, 402.0], [14.3, 403.0], [14.4, 403.0], [14.5, 405.0], [14.6, 405.0], [14.7, 406.0], [14.8, 406.0], [14.9, 408.0], [15.0, 409.0], [15.1, 409.0], [15.2, 414.0], [15.3, 414.0], [15.4, 416.0], [15.5, 416.0], [15.6, 418.0], [15.7, 418.0], [15.8, 422.0], [15.9, 422.0], [16.0, 426.0], [16.1, 426.0], [16.2, 427.0], [16.3, 427.0], [16.4, 428.0], [16.5, 435.0], [16.6, 436.0], [16.7, 436.0], [16.8, 439.0], [16.9, 439.0], [17.0, 439.0], [17.1, 440.0], [17.2, 442.0], [17.3, 442.0], [17.4, 442.0], [17.5, 446.0], [17.6, 448.0], [17.7, 449.0], [17.8, 449.0], [17.9, 453.0], [18.0, 453.0], [18.1, 454.0], [18.2, 454.0], [18.3, 456.0], [18.4, 456.0], [18.5, 456.0], [18.6, 457.0], [18.7, 457.0], [18.8, 459.0], [18.9, 459.0], [19.0, 462.0], [19.1, 463.0], [19.2, 476.0], [19.3, 476.0], [19.4, 477.0], [19.5, 478.0], [19.6, 481.0], [19.7, 481.0], [19.8, 485.0], [19.9, 485.0], [20.0, 485.0], [20.1, 485.0], [20.2, 488.0], [20.3, 488.0], [20.4, 488.0], [20.5, 489.0], [20.6, 491.0], [20.7, 492.0], [20.8, 492.0], [20.9, 493.0], [21.0, 493.0], [21.1, 496.0], [21.2, 496.0], [21.3, 497.0], [21.4, 503.0], [21.5, 503.0], [21.6, 503.0], [21.7, 507.0], [21.8, 507.0], [21.9, 507.0], [22.0, 509.0], [22.1, 509.0], [22.2, 510.0], [22.3, 510.0], [22.4, 517.0], [22.5, 518.0], [22.6, 518.0], [22.7, 518.0], [22.8, 518.0], [22.9, 519.0], [23.0, 522.0], [23.1, 522.0], [23.2, 522.0], [23.3, 524.0], [23.4, 524.0], [23.5, 524.0], [23.6, 527.0], [23.7, 528.0], [23.8, 528.0], [23.9, 528.0], [24.0, 528.0], [24.1, 532.0], [24.2, 532.0], [24.3, 533.0], [24.4, 534.0], [24.5, 534.0], [24.6, 534.0], [24.7, 538.0], [24.8, 538.0], [24.9, 540.0], [25.0, 540.0], [25.1, 541.0], [25.2, 542.0], [25.3, 542.0], [25.4, 542.0], [25.5, 543.0], [25.6, 543.0], [25.7, 543.0], [25.8, 544.0], [25.9, 546.0], [26.0, 547.0], [26.1, 547.0], [26.2, 548.0], [26.3, 548.0], [26.4, 552.0], [26.5, 552.0], [26.6, 553.0], [26.7, 555.0], [26.8, 555.0], [26.9, 555.0], [27.0, 559.0], [27.1, 559.0], [27.2, 559.0], [27.3, 561.0], [27.4, 561.0], [27.5, 562.0], [27.6, 562.0], [27.7, 562.0], [27.8, 563.0], [27.9, 563.0], [28.0, 563.0], [28.1, 564.0], [28.2, 566.0], [28.3, 566.0], [28.4, 566.0], [28.5, 567.0], [28.6, 569.0], [28.7, 569.0], [28.8, 569.0], [28.9, 569.0], [29.0, 571.0], [29.1, 571.0], [29.2, 573.0], [29.3, 573.0], [29.4, 574.0], [29.5, 574.0], [29.6, 574.0], [29.7, 576.0], [29.8, 576.0], [29.9, 576.0], [30.0, 577.0], [30.1, 577.0], [30.2, 577.0], [30.3, 577.0], [30.4, 577.0], [30.5, 578.0], [30.6, 578.0], [30.7, 579.0], [30.8, 579.0], [30.9, 580.0], [31.0, 580.0], [31.1, 580.0], [31.2, 581.0], [31.3, 581.0], [31.4, 581.0], [31.5, 581.0], [31.6, 582.0], [31.7, 582.0], [31.8, 582.0], [31.9, 582.0], [32.0, 583.0], [32.1, 583.0], [32.2, 583.0], [32.3, 584.0], [32.4, 585.0], [32.5, 585.0], [32.6, 585.0], [32.7, 587.0], [32.8, 588.0], [32.9, 588.0], [33.0, 588.0], [33.1, 588.0], [33.2, 591.0], [33.3, 591.0], [33.4, 591.0], [33.5, 592.0], [33.6, 592.0], [33.7, 593.0], [33.8, 596.0], [33.9, 596.0], [34.0, 596.0], [34.1, 598.0], [34.2, 598.0], [34.3, 599.0], [34.4, 599.0], [34.5, 600.0], [34.6, 600.0], [34.7, 604.0], [34.8, 604.0], [34.9, 605.0], [35.0, 606.0], [35.1, 606.0], [35.2, 606.0], [35.3, 607.0], [35.4, 608.0], [35.5, 608.0], [35.6, 608.0], [35.7, 609.0], [35.8, 610.0], [35.9, 610.0], [36.0, 612.0], [36.1, 613.0], [36.2, 613.0], [36.3, 613.0], [36.4, 615.0], [36.5, 617.0], [36.6, 617.0], [36.7, 617.0], [36.8, 619.0], [36.9, 620.0], [37.0, 620.0], [37.1, 622.0], [37.2, 623.0], [37.3, 624.0], [37.4, 624.0], [37.5, 626.0], [37.6, 629.0], [37.7, 630.0], [37.8, 630.0], [37.9, 633.0], [38.0, 634.0], [38.1, 636.0], [38.2, 636.0], [38.3, 640.0], [38.4, 640.0], [38.5, 640.0], [38.6, 642.0], [38.7, 643.0], [38.8, 646.0], [38.9, 646.0], [39.0, 646.0], [39.1, 648.0], [39.2, 648.0], [39.3, 648.0], [39.4, 651.0], [39.5, 653.0], [39.6, 654.0], [39.7, 654.0], [39.8, 654.0], [39.9, 657.0], [40.0, 657.0], [40.1, 657.0], [40.2, 658.0], [40.3, 659.0], [40.4, 659.0], [40.5, 660.0], [40.6, 661.0], [40.7, 662.0], [40.8, 662.0], [40.9, 662.0], [41.0, 663.0], [41.1, 666.0], [41.2, 666.0], [41.3, 667.0], [41.4, 667.0], [41.5, 667.0], [41.6, 667.0], [41.7, 669.0], [41.8, 670.0], [41.9, 670.0], [42.0, 671.0], [42.1, 673.0], [42.2, 673.0], [42.3, 673.0], [42.4, 675.0], [42.5, 676.0], [42.6, 681.0], [42.7, 681.0], [42.8, 683.0], [42.9, 684.0], [43.0, 685.0], [43.1, 685.0], [43.2, 686.0], [43.3, 688.0], [43.4, 688.0], [43.5, 689.0], [43.6, 690.0], [43.7, 690.0], [43.8, 690.0], [43.9, 693.0], [44.0, 693.0], [44.1, 694.0], [44.2, 694.0], [44.3, 700.0], [44.4, 702.0], [44.5, 703.0], [44.6, 703.0], [44.7, 707.0], [44.8, 708.0], [44.9, 710.0], [45.0, 710.0], [45.1, 711.0], [45.2, 711.0], [45.3, 711.0], [45.4, 711.0], [45.5, 712.0], [45.6, 714.0], [45.7, 714.0], [45.8, 714.0], [45.9, 715.0], [46.0, 715.0], [46.1, 715.0], [46.2, 716.0], [46.3, 717.0], [46.4, 718.0], [46.5, 718.0], [46.6, 718.0], [46.7, 719.0], [46.8, 719.0], [46.9, 719.0], [47.0, 722.0], [47.1, 726.0], [47.2, 726.0], [47.3, 726.0], [47.4, 726.0], [47.5, 728.0], [47.6, 728.0], [47.7, 730.0], [47.8, 733.0], [47.9, 734.0], [48.0, 734.0], [48.1, 734.0], [48.2, 734.0], [48.3, 735.0], [48.4, 735.0], [48.5, 737.0], [48.6, 738.0], [48.7, 738.0], [48.8, 741.0], [48.9, 741.0], [49.0, 743.0], [49.1, 743.0], [49.2, 745.0], [49.3, 747.0], [49.4, 749.0], [49.5, 749.0], [49.6, 750.0], [49.7, 751.0], [49.8, 761.0], [49.9, 761.0], [50.0, 764.0], [50.1, 765.0], [50.2, 765.0], [50.3, 768.0], [50.4, 769.0], [50.5, 772.0], [50.6, 772.0], [50.7, 776.0], [50.8, 776.0], [50.9, 779.0], [51.0, 779.0], [51.1, 783.0], [51.2, 784.0], [51.3, 787.0], [51.4, 787.0], [51.5, 788.0], [51.6, 789.0], [51.7, 789.0], [51.8, 789.0], [51.9, 790.0], [52.0, 797.0], [52.1, 797.0], [52.2, 797.0], [52.3, 798.0], [52.4, 802.0], [52.5, 802.0], [52.6, 803.0], [52.7, 805.0], [52.8, 805.0], [52.9, 805.0], [53.0, 807.0], [53.1, 808.0], [53.2, 808.0], [53.3, 808.0], [53.4, 811.0], [53.5, 813.0], [53.6, 813.0], [53.7, 816.0], [53.8, 816.0], [53.9, 818.0], [54.0, 818.0], [54.1, 819.0], [54.2, 819.0], [54.3, 821.0], [54.4, 821.0], [54.5, 821.0], [54.6, 822.0], [54.7, 823.0], [54.8, 823.0], [54.9, 824.0], [55.0, 825.0], [55.1, 825.0], [55.2, 829.0], [55.3, 830.0], [55.4, 831.0], [55.5, 831.0], [55.6, 831.0], [55.7, 836.0], [55.8, 839.0], [55.9, 839.0], [56.0, 839.0], [56.1, 841.0], [56.2, 842.0], [56.3, 842.0], [56.4, 845.0], [56.5, 846.0], [56.6, 846.0], [56.7, 846.0], [56.8, 851.0], [56.9, 857.0], [57.0, 857.0], [57.1, 858.0], [57.2, 859.0], [57.3, 860.0], [57.4, 860.0], [57.5, 862.0], [57.6, 862.0], [57.7, 864.0], [57.8, 864.0], [57.9, 865.0], [58.0, 865.0], [58.1, 867.0], [58.2, 867.0], [58.3, 868.0], [58.4, 870.0], [58.5, 870.0], [58.6, 870.0], [58.7, 870.0], [58.8, 873.0], [58.9, 873.0], [59.0, 874.0], [59.1, 877.0], [59.2, 877.0], [59.3, 877.0], [59.4, 878.0], [59.5, 880.0], [59.6, 880.0], [59.7, 880.0], [59.8, 881.0], [59.9, 881.0], [60.0, 883.0], [60.1, 883.0], [60.2, 884.0], [60.3, 884.0], [60.4, 884.0], [60.5, 884.0], [60.6, 889.0], [60.7, 894.0], [60.8, 894.0], [60.9, 895.0], [61.0, 896.0], [61.1, 902.0], [61.2, 902.0], [61.3, 903.0], [61.4, 903.0], [61.5, 903.0], [61.6, 903.0], [61.7, 909.0], [61.8, 911.0], [61.9, 911.0], [62.0, 912.0], [62.1, 913.0], [62.2, 913.0], [62.3, 913.0], [62.4, 913.0], [62.5, 913.0], [62.6, 914.0], [62.7, 914.0], [62.8, 914.0], [62.9, 916.0], [63.0, 919.0], [63.1, 919.0], [63.2, 920.0], [63.3, 921.0], [63.4, 921.0], [63.5, 922.0], [63.6, 923.0], [63.7, 924.0], [63.8, 924.0], [63.9, 924.0], [64.0, 926.0], [64.1, 929.0], [64.2, 929.0], [64.3, 929.0], [64.4, 932.0], [64.5, 933.0], [64.6, 933.0], [64.7, 934.0], [64.8, 935.0], [64.9, 938.0], [65.0, 938.0], [65.1, 940.0], [65.2, 940.0], [65.3, 940.0], [65.4, 945.0], [65.5, 945.0], [65.6, 947.0], [65.7, 947.0], [65.8, 947.0], [65.9, 949.0], [66.0, 950.0], [66.1, 950.0], [66.2, 958.0], [66.3, 961.0], [66.4, 961.0], [66.5, 961.0], [66.6, 963.0], [66.7, 963.0], [66.8, 963.0], [66.9, 964.0], [67.0, 964.0], [67.1, 966.0], [67.2, 966.0], [67.3, 969.0], [67.4, 970.0], [67.5, 970.0], [67.6, 970.0], [67.7, 972.0], [67.8, 974.0], [67.9, 976.0], [68.0, 976.0], [68.1, 977.0], [68.2, 979.0], [68.3, 981.0], [68.4, 981.0], [68.5, 982.0], [68.6, 983.0], [68.7, 983.0], [68.8, 985.0], [68.9, 985.0], [69.0, 990.0], [69.1, 990.0], [69.2, 991.0], [69.3, 997.0], [69.4, 1001.0], [69.5, 1001.0], [69.6, 1001.0], [69.7, 1003.0], [69.8, 1008.0], [69.9, 1008.0], [70.0, 1010.0], [70.1, 1017.0], [70.2, 1017.0], [70.3, 1019.0], [70.4, 1020.0], [70.5, 1020.0], [70.6, 1020.0], [70.7, 1021.0], [70.8, 1021.0], [70.9, 1022.0], [71.0, 1022.0], [71.1, 1023.0], [71.2, 1024.0], [71.3, 1025.0], [71.4, 1025.0], [71.5, 1025.0], [71.6, 1025.0], [71.7, 1025.0], [71.8, 1028.0], [71.9, 1029.0], [72.0, 1031.0], [72.1, 1031.0], [72.2, 1034.0], [72.3, 1036.0], [72.4, 1037.0], [72.5, 1037.0], [72.6, 1037.0], [72.7, 1039.0], [72.8, 1039.0], [72.9, 1039.0], [73.0, 1039.0], [73.1, 1045.0], [73.2, 1048.0], [73.3, 1048.0], [73.4, 1049.0], [73.5, 1052.0], [73.6, 1052.0], [73.7, 1052.0], [73.8, 1056.0], [73.9, 1057.0], [74.0, 1057.0], [74.1, 1057.0], [74.2, 1058.0], [74.3, 1058.0], [74.4, 1058.0], [74.5, 1058.0], [74.6, 1061.0], [74.7, 1064.0], [74.8, 1064.0], [74.9, 1064.0], [75.0, 1065.0], [75.1, 1065.0], [75.2, 1068.0], [75.3, 1069.0], [75.4, 1071.0], [75.5, 1071.0], [75.6, 1071.0], [75.7, 1072.0], [75.8, 1073.0], [75.9, 1073.0], [76.0, 1076.0], [76.1, 1076.0], [76.2, 1077.0], [76.3, 1077.0], [76.4, 1079.0], [76.5, 1081.0], [76.6, 1084.0], [76.7, 1084.0], [76.8, 1088.0], [76.9, 1089.0], [77.0, 1089.0], [77.1, 1089.0], [77.2, 1089.0], [77.3, 1090.0], [77.4, 1090.0], [77.5, 1092.0], [77.6, 1093.0], [77.7, 1094.0], [77.8, 1094.0], [77.9, 1096.0], [78.0, 1096.0], [78.1, 1102.0], [78.2, 1102.0], [78.3, 1102.0], [78.4, 1106.0], [78.5, 1106.0], [78.6, 1106.0], [78.7, 1107.0], [78.8, 1109.0], [78.9, 1109.0], [79.0, 1112.0], [79.1, 1114.0], [79.2, 1117.0], [79.3, 1117.0], [79.4, 1122.0], [79.5, 1122.0], [79.6, 1123.0], [79.7, 1123.0], [79.8, 1126.0], [79.9, 1128.0], [80.0, 1129.0], [80.1, 1129.0], [80.2, 1129.0], [80.3, 1132.0], [80.4, 1132.0], [80.5, 1135.0], [80.6, 1137.0], [80.7, 1138.0], [80.8, 1138.0], [80.9, 1140.0], [81.0, 1145.0], [81.1, 1148.0], [81.2, 1148.0], [81.3, 1150.0], [81.4, 1151.0], [81.5, 1152.0], [81.6, 1152.0], [81.7, 1160.0], [81.8, 1161.0], [81.9, 1161.0], [82.0, 1161.0], [82.1, 1162.0], [82.2, 1162.0], [82.3, 1162.0], [82.4, 1164.0], [82.5, 1167.0], [82.6, 1167.0], [82.7, 1167.0], [82.8, 1168.0], [82.9, 1169.0], [83.0, 1171.0], [83.1, 1171.0], [83.2, 1174.0], [83.3, 1175.0], [83.4, 1175.0], [83.5, 1179.0], [83.6, 1184.0], [83.7, 1184.0], [83.8, 1184.0], [83.9, 1185.0], [84.0, 1192.0], [84.1, 1194.0], [84.2, 1194.0], [84.3, 1197.0], [84.4, 1207.0], [84.5, 1215.0], [84.6, 1215.0], [84.7, 1215.0], [84.8, 1221.0], [84.9, 1222.0], [85.0, 1222.0], [85.1, 1223.0], [85.2, 1225.0], [85.3, 1225.0], [85.4, 1227.0], [85.5, 1228.0], [85.6, 1228.0], [85.7, 1228.0], [85.8, 1230.0], [85.9, 1233.0], [86.0, 1234.0], [86.1, 1234.0], [86.2, 1238.0], [86.3, 1241.0], [86.4, 1242.0], [86.5, 1242.0], [86.6, 1245.0], [86.7, 1253.0], [86.8, 1253.0], [86.9, 1253.0], [87.0, 1259.0], [87.1, 1262.0], [87.2, 1262.0], [87.3, 1263.0], [87.4, 1267.0], [87.5, 1267.0], [87.6, 1267.0], [87.7, 1269.0], [87.8, 1271.0], [87.9, 1271.0], [88.0, 1271.0], [88.1, 1272.0], [88.2, 1277.0], [88.3, 1278.0], [88.4, 1278.0], [88.5, 1281.0], [88.6, 1282.0], [88.7, 1282.0], [88.8, 1285.0], [88.9, 1286.0], [89.0, 1291.0], [89.1, 1291.0], [89.2, 1294.0], [89.3, 1296.0], [89.4, 1297.0], [89.5, 1297.0], [89.6, 1302.0], [89.7, 1304.0], [89.8, 1307.0], [89.9, 1307.0], [90.0, 1309.0], [90.1, 1315.0], [90.2, 1315.0], [90.3, 1316.0], [90.4, 1321.0], [90.5, 1328.0], [90.6, 1328.0], [90.7, 1332.0], [90.8, 1332.0], [90.9, 1338.0], [91.0, 1338.0], [91.1, 1345.0], [91.2, 1346.0], [91.3, 1346.0], [91.4, 1346.0], [91.5, 1356.0], [91.6, 1359.0], [91.7, 1359.0], [91.8, 1363.0], [91.9, 1364.0], [92.0, 1365.0], [92.1, 1365.0], [92.2, 1374.0], [92.3, 1376.0], [92.4, 1378.0], [92.5, 1378.0], [92.6, 1384.0], [92.7, 1391.0], [92.8, 1395.0], [92.9, 1395.0], [93.0, 1408.0], [93.1, 1408.0], [93.2, 1411.0], [93.3, 1411.0], [93.4, 1417.0], [93.5, 1418.0], [93.6, 1418.0], [93.7, 1421.0], [93.8, 1421.0], [93.9, 1436.0], [94.0, 1436.0], [94.1, 1441.0], [94.2, 1463.0], [94.3, 1479.0], [94.4, 1479.0], [94.5, 1488.0], [94.6, 1493.0], [94.7, 1501.0], [94.8, 1501.0], [94.9, 1513.0], [95.0, 1520.0], [95.1, 1520.0], [95.2, 1537.0], [95.3, 1538.0], [95.4, 1539.0], [95.5, 1539.0], [95.6, 1541.0], [95.7, 1552.0], [95.8, 1559.0], [95.9, 1559.0], [96.0, 1567.0], [96.1, 1574.0], [96.2, 1594.0], [96.3, 1594.0], [96.4, 1598.0], [96.5, 1602.0], [96.6, 1634.0], [96.7, 1634.0], [96.8, 1651.0], [96.9, 1707.0], [97.0, 1707.0], [97.1, 1724.0], [97.2, 1735.0], [97.3, 1829.0], [97.4, 1829.0], [97.5, 1857.0], [97.6, 1888.0], [97.7, 1923.0], [97.8, 1923.0], [97.9, 1939.0], [98.0, 1972.0], [98.1, 2203.0], [98.2, 2203.0], [98.3, 2656.0], [98.4, 2689.0], [98.5, 2689.0], [98.6, 2720.0], [98.7, 2784.0], [98.8, 2849.0], [98.9, 2849.0], [99.0, 2895.0], [99.1, 2898.0], [99.2, 2953.0], [99.3, 2953.0], [99.4, 3054.0], [99.5, 3099.0], [99.6, 3258.0], [99.7, 3258.0], [99.8, 3346.0], [99.9, 3404.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 96.0, "series": [{"data": [[600.0, 72.0], [700.0, 60.0], [800.0, 64.0], [900.0, 61.0], [1000.0, 64.0], [1100.0, 46.0], [1200.0, 38.0], [1300.0, 25.0], [1400.0, 13.0], [1500.0, 13.0], [100.0, 5.0], [1600.0, 3.0], [1700.0, 3.0], [1800.0, 3.0], [1900.0, 3.0], [2200.0, 1.0], [2600.0, 2.0], [2700.0, 2.0], [2800.0, 3.0], [2900.0, 1.0], [3000.0, 2.0], [3200.0, 1.0], [200.0, 51.0], [3300.0, 1.0], [3400.0, 1.0], [300.0, 47.0], [400.0, 54.0], [500.0, 96.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 39.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 539.0, "series": [{"data": [[0.0, 157.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 539.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 39.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.93140243902439, "minX": 1.60223574E12, "maxY": 10.0, "series": [{"data": [[1.6022358E12, 9.93140243902439], [1.60223574E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022358E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 518.0, "minX": 1.0, "maxY": 1346.0, "series": [{"data": [[8.0, 617.0], [4.0, 544.0], [2.0, 576.0], [1.0, 600.0], [9.0, 681.0], [10.0, 836.814049586777], [5.0, 772.0], [6.0, 518.0], [3.0, 569.0], [7.0, 1346.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 835.0340136054422]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 597.6833333333333, "minX": 1.60223574E12, "maxY": 1538649.85, "series": [{"data": [[1.6022358E12, 1538649.85], [1.60223574E12, 297109.88333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6022358E12, 4925.35], [1.60223574E12, 597.6833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022358E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 811.6524390243908, "minX": 1.60223574E12, "maxY": 1029.1898734177219, "series": [{"data": [[1.6022358E12, 811.6524390243908], [1.60223574E12, 1029.1898734177219]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022358E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 810.7210365853657, "minX": 1.60223574E12, "maxY": 1027.6582278481012, "series": [{"data": [[1.6022358E12, 810.7210365853657], [1.60223574E12, 1027.6582278481012]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022358E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.013719512195121948, "minX": 1.60223574E12, "maxY": 1.1645569620253173, "series": [{"data": [[1.6022358E12, 0.013719512195121948], [1.60223574E12, 1.1645569620253173]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022358E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 183.0, "minX": 1.60223574E12, "maxY": 3404.0, "series": [{"data": [[1.6022358E12, 3404.0], [1.60223574E12, 3258.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6022358E12, 207.56499921679497], [1.60223574E12, 192.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6022358E12, 208.5043000626564], [1.60223574E12, 192.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6022358E12, 208.2414999216795], [1.60223574E12, 192.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6022358E12, 183.0], [1.60223574E12, 192.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6022358E12, 766.5], [1.60223574E12, 719.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022358E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 553.5, "minX": 5.0, "maxY": 2895.0, "series": [{"data": [[8.0, 932.0], [9.0, 1025.0], [10.0, 889.5], [11.0, 882.0], [12.0, 817.5], [13.0, 808.0], [14.0, 705.0], [15.0, 661.0], [16.0, 553.5], [17.0, 623.5], [18.0, 566.0], [19.0, 630.0], [5.0, 2895.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 553.0, "minX": 5.0, "maxY": 2892.0, "series": [{"data": [[8.0, 931.5], [9.0, 1024.0], [10.0, 889.5], [11.0, 881.5], [12.0, 817.5], [13.0, 806.0], [14.0, 705.0], [15.0, 659.0], [16.0, 553.0], [17.0, 623.0], [18.0, 565.5], [19.0, 629.0], [5.0, 2892.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4833333333333334, "minX": 1.60223574E12, "maxY": 10.766666666666667, "series": [{"data": [[1.6022358E12, 10.766666666666667], [1.60223574E12, 1.4833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022358E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.3166666666666667, "minX": 1.60223574E12, "maxY": 10.933333333333334, "series": [{"data": [[1.6022358E12, 10.933333333333334], [1.60223574E12, 1.3166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022358E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.3166666666666667, "minX": 1.60223574E12, "maxY": 10.933333333333334, "series": [{"data": [[1.6022358E12, 10.933333333333334], [1.60223574E12, 1.3166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022358E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.3166666666666667, "minX": 1.60223574E12, "maxY": 10.933333333333334, "series": [{"data": [[1.6022358E12, 10.933333333333334], [1.60223574E12, 1.3166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022358E12, "title": "Total Transactions Per Second"}},
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

