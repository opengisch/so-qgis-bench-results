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
        data: {"result": {"minY": 173.0, "minX": 0.0, "maxY": 3852.0, "series": [{"data": [[0.0, 173.0], [0.1, 173.0], [0.2, 176.0], [0.3, 178.0], [0.4, 178.0], [0.5, 182.0], [0.6, 187.0], [0.7, 187.0], [0.8, 187.0], [0.9, 189.0], [1.0, 189.0], [1.1, 190.0], [1.2, 190.0], [1.3, 195.0], [1.4, 199.0], [1.5, 200.0], [1.6, 200.0], [1.7, 208.0], [1.8, 209.0], [1.9, 209.0], [2.0, 220.0], [2.1, 222.0], [2.2, 227.0], [2.3, 227.0], [2.4, 234.0], [2.5, 234.0], [2.6, 237.0], [2.7, 237.0], [2.8, 238.0], [2.9, 241.0], [3.0, 248.0], [3.1, 248.0], [3.2, 251.0], [3.3, 254.0], [3.4, 254.0], [3.5, 254.0], [3.6, 255.0], [3.7, 256.0], [3.8, 256.0], [3.9, 258.0], [4.0, 260.0], [4.1, 263.0], [4.2, 263.0], [4.3, 264.0], [4.4, 264.0], [4.5, 266.0], [4.6, 266.0], [4.7, 268.0], [4.8, 277.0], [4.9, 282.0], [5.0, 282.0], [5.1, 282.0], [5.2, 283.0], [5.3, 283.0], [5.4, 284.0], [5.5, 287.0], [5.6, 288.0], [5.7, 288.0], [5.8, 288.0], [5.9, 290.0], [6.0, 294.0], [6.1, 294.0], [6.2, 295.0], [6.3, 296.0], [6.4, 297.0], [6.5, 297.0], [6.6, 300.0], [6.7, 301.0], [6.8, 301.0], [6.9, 303.0], [7.0, 305.0], [7.1, 310.0], [7.2, 310.0], [7.3, 319.0], [7.4, 319.0], [7.5, 320.0], [7.6, 320.0], [7.7, 324.0], [7.8, 325.0], [7.9, 326.0], [8.0, 326.0], [8.1, 327.0], [8.2, 329.0], [8.3, 329.0], [8.4, 329.0], [8.5, 331.0], [8.6, 334.0], [8.7, 334.0], [8.8, 335.0], [8.9, 343.0], [9.0, 343.0], [9.1, 343.0], [9.2, 345.0], [9.3, 353.0], [9.4, 353.0], [9.5, 353.0], [9.6, 354.0], [9.7, 354.0], [9.8, 355.0], [9.9, 355.0], [10.0, 355.0], [10.1, 355.0], [10.2, 355.0], [10.3, 363.0], [10.4, 366.0], [10.5, 368.0], [10.6, 368.0], [10.7, 372.0], [10.8, 373.0], [10.9, 374.0], [11.0, 374.0], [11.1, 375.0], [11.2, 378.0], [11.3, 379.0], [11.4, 379.0], [11.5, 379.0], [11.6, 379.0], [11.7, 379.0], [11.8, 381.0], [11.9, 384.0], [12.0, 385.0], [12.1, 385.0], [12.2, 388.0], [12.3, 389.0], [12.4, 390.0], [12.5, 390.0], [12.6, 390.0], [12.7, 390.0], [12.8, 391.0], [12.9, 391.0], [13.0, 394.0], [13.1, 397.0], [13.2, 397.0], [13.3, 397.0], [13.4, 399.0], [13.5, 400.0], [13.6, 400.0], [13.7, 401.0], [13.8, 402.0], [13.9, 406.0], [14.0, 406.0], [14.1, 406.0], [14.2, 407.0], [14.3, 408.0], [14.4, 408.0], [14.5, 409.0], [14.6, 413.0], [14.7, 415.0], [14.8, 415.0], [14.9, 415.0], [15.0, 415.0], [15.1, 415.0], [15.2, 418.0], [15.3, 419.0], [15.4, 420.0], [15.5, 420.0], [15.6, 420.0], [15.7, 421.0], [15.8, 422.0], [15.9, 422.0], [16.0, 422.0], [16.1, 423.0], [16.2, 424.0], [16.3, 424.0], [16.4, 428.0], [16.5, 430.0], [16.6, 431.0], [16.7, 431.0], [16.8, 431.0], [16.9, 433.0], [17.0, 433.0], [17.1, 439.0], [17.2, 442.0], [17.3, 443.0], [17.4, 443.0], [17.5, 445.0], [17.6, 458.0], [17.7, 460.0], [17.8, 460.0], [17.9, 461.0], [18.0, 463.0], [18.1, 466.0], [18.2, 466.0], [18.3, 469.0], [18.4, 469.0], [18.5, 469.0], [18.6, 470.0], [18.7, 471.0], [18.8, 472.0], [18.9, 472.0], [19.0, 473.0], [19.1, 474.0], [19.2, 474.0], [19.3, 474.0], [19.4, 477.0], [19.5, 478.0], [19.6, 478.0], [19.7, 478.0], [19.8, 481.0], [19.9, 486.0], [20.0, 486.0], [20.1, 486.0], [20.2, 487.0], [20.3, 489.0], [20.4, 489.0], [20.5, 493.0], [20.6, 493.0], [20.7, 495.0], [20.8, 495.0], [20.9, 496.0], [21.0, 496.0], [21.1, 497.0], [21.2, 497.0], [21.3, 497.0], [21.4, 498.0], [21.5, 500.0], [21.6, 500.0], [21.7, 501.0], [21.8, 502.0], [21.9, 502.0], [22.0, 502.0], [22.1, 503.0], [22.2, 504.0], [22.3, 504.0], [22.4, 506.0], [22.5, 512.0], [22.6, 514.0], [22.7, 514.0], [22.8, 516.0], [22.9, 516.0], [23.0, 517.0], [23.1, 517.0], [23.2, 520.0], [23.3, 520.0], [23.4, 520.0], [23.5, 521.0], [23.6, 522.0], [23.7, 522.0], [23.8, 522.0], [23.9, 524.0], [24.0, 527.0], [24.1, 527.0], [24.2, 527.0], [24.3, 528.0], [24.4, 535.0], [24.5, 535.0], [24.6, 535.0], [24.7, 535.0], [24.8, 537.0], [24.9, 541.0], [25.0, 541.0], [25.1, 543.0], [25.2, 544.0], [25.3, 544.0], [25.4, 544.0], [25.5, 547.0], [25.6, 547.0], [25.7, 547.0], [25.8, 547.0], [25.9, 548.0], [26.0, 553.0], [26.1, 553.0], [26.2, 553.0], [26.3, 555.0], [26.4, 556.0], [26.5, 556.0], [26.6, 556.0], [26.7, 556.0], [26.8, 556.0], [26.9, 558.0], [27.0, 560.0], [27.1, 561.0], [27.2, 561.0], [27.3, 562.0], [27.4, 562.0], [27.5, 563.0], [27.6, 563.0], [27.7, 564.0], [27.8, 564.0], [27.9, 565.0], [28.0, 565.0], [28.1, 567.0], [28.2, 568.0], [28.3, 570.0], [28.4, 570.0], [28.5, 573.0], [28.6, 574.0], [28.7, 574.0], [28.8, 575.0], [28.9, 577.0], [29.0, 578.0], [29.1, 578.0], [29.2, 579.0], [29.3, 580.0], [29.4, 581.0], [29.5, 581.0], [29.6, 582.0], [29.7, 585.0], [29.8, 585.0], [29.9, 585.0], [30.0, 585.0], [30.1, 588.0], [30.2, 588.0], [30.3, 588.0], [30.4, 588.0], [30.5, 588.0], [30.6, 588.0], [30.7, 591.0], [30.8, 592.0], [30.9, 593.0], [31.0, 593.0], [31.1, 595.0], [31.2, 597.0], [31.3, 597.0], [31.4, 597.0], [31.5, 598.0], [31.6, 598.0], [31.7, 598.0], [31.8, 599.0], [31.9, 599.0], [32.0, 600.0], [32.1, 600.0], [32.2, 601.0], [32.3, 602.0], [32.4, 603.0], [32.5, 603.0], [32.6, 603.0], [32.7, 604.0], [32.8, 605.0], [32.9, 605.0], [33.0, 605.0], [33.1, 605.0], [33.2, 606.0], [33.3, 606.0], [33.4, 608.0], [33.5, 615.0], [33.6, 615.0], [33.7, 615.0], [33.8, 618.0], [33.9, 618.0], [34.0, 618.0], [34.1, 619.0], [34.2, 623.0], [34.3, 623.0], [34.4, 623.0], [34.5, 628.0], [34.6, 629.0], [34.7, 629.0], [34.8, 629.0], [34.9, 629.0], [35.0, 630.0], [35.1, 630.0], [35.2, 630.0], [35.3, 632.0], [35.4, 632.0], [35.5, 632.0], [35.6, 632.0], [35.7, 634.0], [35.8, 635.0], [35.9, 635.0], [36.0, 636.0], [36.1, 636.0], [36.2, 639.0], [36.3, 639.0], [36.4, 640.0], [36.5, 642.0], [36.6, 643.0], [36.7, 643.0], [36.8, 647.0], [36.9, 649.0], [37.0, 649.0], [37.1, 651.0], [37.2, 651.0], [37.3, 653.0], [37.4, 653.0], [37.5, 655.0], [37.6, 658.0], [37.7, 658.0], [37.8, 658.0], [37.9, 662.0], [38.0, 662.0], [38.1, 663.0], [38.2, 663.0], [38.3, 665.0], [38.4, 667.0], [38.5, 667.0], [38.6, 669.0], [38.7, 669.0], [38.8, 669.0], [38.9, 669.0], [39.0, 670.0], [39.1, 671.0], [39.2, 672.0], [39.3, 672.0], [39.4, 672.0], [39.5, 673.0], [39.6, 674.0], [39.7, 674.0], [39.8, 674.0], [39.9, 675.0], [40.0, 679.0], [40.1, 679.0], [40.2, 679.0], [40.3, 679.0], [40.4, 679.0], [40.5, 679.0], [40.6, 681.0], [40.7, 683.0], [40.8, 683.0], [40.9, 684.0], [41.0, 686.0], [41.1, 686.0], [41.2, 686.0], [41.3, 686.0], [41.4, 687.0], [41.5, 687.0], [41.6, 687.0], [41.7, 690.0], [41.8, 690.0], [41.9, 690.0], [42.0, 694.0], [42.1, 695.0], [42.2, 696.0], [42.3, 696.0], [42.4, 696.0], [42.5, 701.0], [42.6, 702.0], [42.7, 702.0], [42.8, 703.0], [42.9, 703.0], [43.0, 705.0], [43.1, 705.0], [43.2, 705.0], [43.3, 706.0], [43.4, 706.0], [43.5, 707.0], [43.6, 707.0], [43.7, 708.0], [43.8, 708.0], [43.9, 709.0], [44.0, 711.0], [44.1, 714.0], [44.2, 714.0], [44.3, 714.0], [44.4, 714.0], [44.5, 715.0], [44.6, 715.0], [44.7, 716.0], [44.8, 717.0], [44.9, 720.0], [45.0, 720.0], [45.1, 721.0], [45.2, 721.0], [45.3, 721.0], [45.4, 723.0], [45.5, 723.0], [45.6, 732.0], [45.7, 732.0], [45.8, 733.0], [45.9, 736.0], [46.0, 737.0], [46.1, 737.0], [46.2, 738.0], [46.3, 740.0], [46.4, 741.0], [46.5, 741.0], [46.6, 743.0], [46.7, 744.0], [46.8, 744.0], [46.9, 745.0], [47.0, 746.0], [47.1, 749.0], [47.2, 749.0], [47.3, 749.0], [47.4, 749.0], [47.5, 750.0], [47.6, 750.0], [47.7, 751.0], [47.8, 753.0], [47.9, 753.0], [48.0, 753.0], [48.1, 756.0], [48.2, 757.0], [48.3, 759.0], [48.4, 759.0], [48.5, 763.0], [48.6, 764.0], [48.7, 764.0], [48.8, 767.0], [48.9, 768.0], [49.0, 770.0], [49.1, 770.0], [49.2, 771.0], [49.3, 773.0], [49.4, 773.0], [49.5, 773.0], [49.6, 774.0], [49.7, 780.0], [49.8, 781.0], [49.9, 781.0], [50.0, 783.0], [50.1, 787.0], [50.2, 787.0], [50.3, 787.0], [50.4, 788.0], [50.5, 790.0], [50.6, 790.0], [50.7, 792.0], [50.8, 792.0], [50.9, 794.0], [51.0, 794.0], [51.1, 795.0], [51.2, 798.0], [51.3, 800.0], [51.4, 800.0], [51.5, 801.0], [51.6, 803.0], [51.7, 803.0], [51.8, 804.0], [51.9, 807.0], [52.0, 810.0], [52.1, 810.0], [52.2, 813.0], [52.3, 814.0], [52.4, 818.0], [52.5, 818.0], [52.6, 818.0], [52.7, 819.0], [52.8, 819.0], [52.9, 819.0], [53.0, 823.0], [53.1, 823.0], [53.2, 826.0], [53.3, 826.0], [53.4, 826.0], [53.5, 827.0], [53.6, 827.0], [53.7, 828.0], [53.8, 828.0], [53.9, 829.0], [54.0, 829.0], [54.1, 829.0], [54.2, 831.0], [54.3, 836.0], [54.4, 836.0], [54.5, 838.0], [54.6, 839.0], [54.7, 839.0], [54.8, 839.0], [54.9, 840.0], [55.0, 841.0], [55.1, 841.0], [55.2, 842.0], [55.3, 842.0], [55.4, 843.0], [55.5, 843.0], [55.6, 844.0], [55.7, 845.0], [55.8, 848.0], [55.9, 848.0], [56.0, 849.0], [56.1, 849.0], [56.2, 850.0], [56.3, 850.0], [56.4, 855.0], [56.5, 858.0], [56.6, 858.0], [56.7, 858.0], [56.8, 860.0], [56.9, 861.0], [57.0, 861.0], [57.1, 864.0], [57.2, 866.0], [57.3, 869.0], [57.4, 869.0], [57.5, 870.0], [57.6, 870.0], [57.7, 871.0], [57.8, 871.0], [57.9, 873.0], [58.0, 875.0], [58.1, 875.0], [58.2, 875.0], [58.3, 875.0], [58.4, 876.0], [58.5, 876.0], [58.6, 885.0], [58.7, 889.0], [58.8, 890.0], [58.9, 890.0], [59.0, 891.0], [59.1, 891.0], [59.2, 892.0], [59.3, 892.0], [59.4, 894.0], [59.5, 895.0], [59.6, 897.0], [59.7, 897.0], [59.8, 898.0], [59.9, 900.0], [60.0, 901.0], [60.1, 901.0], [60.2, 902.0], [60.3, 904.0], [60.4, 904.0], [60.5, 906.0], [60.6, 906.0], [60.7, 907.0], [60.8, 907.0], [60.9, 907.0], [61.0, 909.0], [61.1, 910.0], [61.2, 910.0], [61.3, 910.0], [61.4, 911.0], [61.5, 912.0], [61.6, 912.0], [61.7, 913.0], [61.8, 913.0], [61.9, 913.0], [62.0, 915.0], [62.1, 916.0], [62.2, 917.0], [62.3, 917.0], [62.4, 919.0], [62.5, 921.0], [62.6, 921.0], [62.7, 921.0], [62.8, 923.0], [62.9, 928.0], [63.0, 929.0], [63.1, 929.0], [63.2, 931.0], [63.3, 932.0], [63.4, 932.0], [63.5, 933.0], [63.6, 935.0], [63.7, 938.0], [63.8, 938.0], [63.9, 939.0], [64.0, 945.0], [64.1, 946.0], [64.2, 946.0], [64.3, 949.0], [64.4, 951.0], [64.5, 951.0], [64.6, 951.0], [64.7, 953.0], [64.8, 954.0], [64.9, 956.0], [65.0, 956.0], [65.1, 956.0], [65.2, 958.0], [65.3, 958.0], [65.4, 958.0], [65.5, 958.0], [65.6, 960.0], [65.7, 960.0], [65.8, 960.0], [65.9, 963.0], [66.0, 966.0], [66.1, 966.0], [66.2, 967.0], [66.3, 968.0], [66.4, 968.0], [66.5, 968.0], [66.6, 968.0], [66.7, 969.0], [66.8, 969.0], [66.9, 971.0], [67.0, 973.0], [67.1, 975.0], [67.2, 975.0], [67.3, 977.0], [67.4, 977.0], [67.5, 978.0], [67.6, 978.0], [67.7, 982.0], [67.8, 986.0], [67.9, 987.0], [68.0, 987.0], [68.1, 989.0], [68.2, 990.0], [68.3, 990.0], [68.4, 990.0], [68.5, 990.0], [68.6, 991.0], [68.7, 991.0], [68.8, 992.0], [68.9, 993.0], [69.0, 1000.0], [69.1, 1000.0], [69.2, 1001.0], [69.3, 1003.0], [69.4, 1003.0], [69.5, 1003.0], [69.6, 1004.0], [69.7, 1007.0], [69.8, 1008.0], [69.9, 1008.0], [70.0, 1009.0], [70.1, 1009.0], [70.2, 1009.0], [70.3, 1009.0], [70.4, 1013.0], [70.5, 1016.0], [70.6, 1016.0], [70.7, 1026.0], [70.8, 1028.0], [70.9, 1035.0], [71.0, 1035.0], [71.1, 1036.0], [71.2, 1036.0], [71.3, 1036.0], [71.4, 1036.0], [71.5, 1036.0], [71.6, 1036.0], [71.7, 1036.0], [71.8, 1040.0], [71.9, 1042.0], [72.0, 1045.0], [72.1, 1045.0], [72.2, 1047.0], [72.3, 1047.0], [72.4, 1048.0], [72.5, 1048.0], [72.6, 1052.0], [72.7, 1054.0], [72.8, 1055.0], [72.9, 1055.0], [73.0, 1055.0], [73.1, 1058.0], [73.2, 1059.0], [73.3, 1059.0], [73.4, 1059.0], [73.5, 1061.0], [73.6, 1061.0], [73.7, 1062.0], [73.8, 1063.0], [73.9, 1063.0], [74.0, 1063.0], [74.1, 1064.0], [74.2, 1066.0], [74.3, 1067.0], [74.4, 1067.0], [74.5, 1069.0], [74.6, 1070.0], [74.7, 1074.0], [74.8, 1074.0], [74.9, 1082.0], [75.0, 1083.0], [75.1, 1083.0], [75.2, 1083.0], [75.3, 1086.0], [75.4, 1088.0], [75.5, 1088.0], [75.6, 1090.0], [75.7, 1091.0], [75.8, 1091.0], [75.9, 1091.0], [76.0, 1094.0], [76.1, 1097.0], [76.2, 1098.0], [76.3, 1098.0], [76.4, 1100.0], [76.5, 1103.0], [76.6, 1104.0], [76.7, 1104.0], [76.8, 1105.0], [76.9, 1105.0], [77.0, 1105.0], [77.1, 1107.0], [77.2, 1108.0], [77.3, 1108.0], [77.4, 1108.0], [77.5, 1109.0], [77.6, 1109.0], [77.7, 1109.0], [77.8, 1109.0], [77.9, 1109.0], [78.0, 1111.0], [78.1, 1111.0], [78.2, 1111.0], [78.3, 1111.0], [78.4, 1114.0], [78.5, 1114.0], [78.6, 1115.0], [78.7, 1117.0], [78.8, 1117.0], [78.9, 1117.0], [79.0, 1118.0], [79.1, 1121.0], [79.2, 1127.0], [79.3, 1127.0], [79.4, 1127.0], [79.5, 1127.0], [79.6, 1129.0], [79.7, 1129.0], [79.8, 1136.0], [79.9, 1136.0], [80.0, 1136.0], [80.1, 1136.0], [80.2, 1137.0], [80.3, 1137.0], [80.4, 1137.0], [80.5, 1139.0], [80.6, 1140.0], [80.7, 1141.0], [80.8, 1141.0], [80.9, 1142.0], [81.0, 1146.0], [81.1, 1147.0], [81.2, 1147.0], [81.3, 1147.0], [81.4, 1151.0], [81.5, 1152.0], [81.6, 1152.0], [81.7, 1155.0], [81.8, 1155.0], [81.9, 1155.0], [82.0, 1157.0], [82.1, 1157.0], [82.2, 1160.0], [82.3, 1160.0], [82.4, 1161.0], [82.5, 1162.0], [82.6, 1163.0], [82.7, 1163.0], [82.8, 1166.0], [82.9, 1166.0], [83.0, 1167.0], [83.1, 1167.0], [83.2, 1167.0], [83.3, 1169.0], [83.4, 1169.0], [83.5, 1170.0], [83.6, 1174.0], [83.7, 1176.0], [83.8, 1176.0], [83.9, 1178.0], [84.0, 1184.0], [84.1, 1185.0], [84.2, 1185.0], [84.3, 1190.0], [84.4, 1191.0], [84.5, 1192.0], [84.6, 1192.0], [84.7, 1195.0], [84.8, 1196.0], [84.9, 1198.0], [85.0, 1198.0], [85.1, 1199.0], [85.2, 1200.0], [85.3, 1200.0], [85.4, 1208.0], [85.5, 1212.0], [85.6, 1213.0], [85.7, 1213.0], [85.8, 1219.0], [85.9, 1219.0], [86.0, 1223.0], [86.1, 1223.0], [86.2, 1226.0], [86.3, 1228.0], [86.4, 1232.0], [86.5, 1232.0], [86.6, 1240.0], [86.7, 1241.0], [86.8, 1241.0], [86.9, 1243.0], [87.0, 1243.0], [87.1, 1243.0], [87.2, 1243.0], [87.3, 1244.0], [87.4, 1246.0], [87.5, 1248.0], [87.6, 1248.0], [87.7, 1249.0], [87.8, 1249.0], [87.9, 1252.0], [88.0, 1252.0], [88.1, 1252.0], [88.2, 1253.0], [88.3, 1255.0], [88.4, 1255.0], [88.5, 1259.0], [88.6, 1259.0], [88.7, 1259.0], [88.8, 1261.0], [88.9, 1266.0], [89.0, 1273.0], [89.1, 1273.0], [89.2, 1276.0], [89.3, 1279.0], [89.4, 1283.0], [89.5, 1283.0], [89.6, 1284.0], [89.7, 1286.0], [89.8, 1292.0], [89.9, 1292.0], [90.0, 1293.0], [90.1, 1307.0], [90.2, 1307.0], [90.3, 1313.0], [90.4, 1317.0], [90.5, 1317.0], [90.6, 1317.0], [90.7, 1320.0], [90.8, 1320.0], [90.9, 1323.0], [91.0, 1323.0], [91.1, 1328.0], [91.2, 1330.0], [91.3, 1341.0], [91.4, 1341.0], [91.5, 1344.0], [91.6, 1345.0], [91.7, 1345.0], [91.8, 1350.0], [91.9, 1353.0], [92.0, 1383.0], [92.1, 1383.0], [92.2, 1388.0], [92.3, 1390.0], [92.4, 1394.0], [92.5, 1394.0], [92.6, 1404.0], [92.7, 1406.0], [92.8, 1416.0], [92.9, 1416.0], [93.0, 1427.0], [93.1, 1430.0], [93.2, 1430.0], [93.3, 1430.0], [93.4, 1434.0], [93.5, 1441.0], [93.6, 1441.0], [93.7, 1445.0], [93.8, 1451.0], [93.9, 1459.0], [94.0, 1459.0], [94.1, 1461.0], [94.2, 1463.0], [94.3, 1467.0], [94.4, 1467.0], [94.5, 1499.0], [94.6, 1518.0], [94.7, 1525.0], [94.8, 1525.0], [94.9, 1527.0], [95.0, 1529.0], [95.1, 1529.0], [95.2, 1531.0], [95.3, 1536.0], [95.4, 1537.0], [95.5, 1537.0], [95.6, 1540.0], [95.7, 1542.0], [95.8, 1552.0], [95.9, 1552.0], [96.0, 1561.0], [96.1, 1576.0], [96.2, 1582.0], [96.3, 1582.0], [96.4, 1600.0], [96.5, 1607.0], [96.6, 1613.0], [96.7, 1613.0], [96.8, 1621.0], [96.9, 1623.0], [97.0, 1623.0], [97.1, 1651.0], [97.2, 1684.0], [97.3, 1690.0], [97.4, 1690.0], [97.5, 1764.0], [97.6, 1893.0], [97.7, 2009.0], [97.8, 2009.0], [97.9, 2051.0], [98.0, 2099.0], [98.1, 2467.0], [98.2, 2467.0], [98.3, 2520.0], [98.4, 2653.0], [98.5, 2653.0], [98.6, 2711.0], [98.7, 2931.0], [98.8, 2956.0], [98.9, 2956.0], [99.0, 3018.0], [99.1, 3024.0], [99.2, 3250.0], [99.3, 3250.0], [99.4, 3287.0], [99.5, 3455.0], [99.6, 3481.0], [99.7, 3481.0], [99.8, 3491.0], [99.9, 3852.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 77.0, "series": [{"data": [[600.0, 77.0], [700.0, 65.0], [800.0, 63.0], [900.0, 67.0], [1000.0, 54.0], [1100.0, 65.0], [1200.0, 36.0], [1300.0, 18.0], [1400.0, 15.0], [1500.0, 13.0], [100.0, 11.0], [1600.0, 8.0], [1700.0, 1.0], [1800.0, 1.0], [2000.0, 3.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2700.0, 1.0], [2900.0, 2.0], [3000.0, 2.0], [3200.0, 2.0], [200.0, 37.0], [3400.0, 3.0], [3800.0, 1.0], [300.0, 51.0], [400.0, 59.0], [500.0, 77.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 40.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 536.0, "series": [{"data": [[0.0, 159.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 536.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 40.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.888888888888888, "minX": 1.60263138E12, "maxY": 10.0, "series": [{"data": [[1.60263138E12, 10.0], [1.60263144E12, 9.888888888888888]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263144E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 254.0, "minX": 1.0, "maxY": 991.0, "series": [{"data": [[8.0, 254.0], [4.0, 968.0], [2.0, 991.0], [1.0, 875.0], [9.0, 288.0], [10.0, 848.2933884297531], [5.0, 599.0], [6.0, 975.0], [3.0, 588.0], [7.0, 588.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 846.2408163265317]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2488.266666666667, "minX": 1.60263138E12, "maxY": 957515.7333333333, "series": [{"data": [[1.60263138E12, 878237.2666666667], [1.60263144E12, 957515.7333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263138E12, 2488.266666666667], [1.60263144E12, 3034.766666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263144E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 818.8419753086421, "minX": 1.60263138E12, "maxY": 879.866666666667, "series": [{"data": [[1.60263138E12, 879.866666666667], [1.60263144E12, 818.8419753086421]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263144E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 817.6395061728385, "minX": 1.60263138E12, "maxY": 878.7333333333338, "series": [{"data": [[1.60263138E12, 878.7333333333338], [1.60263144E12, 817.6395061728385]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263144E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.029629629629629617, "minX": 1.60263138E12, "maxY": 0.2454545454545456, "series": [{"data": [[1.60263138E12, 0.2454545454545456], [1.60263144E12, 0.029629629629629617]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263144E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 173.0, "minX": 1.60263138E12, "maxY": 3852.0, "series": [{"data": [[1.60263138E12, 3491.0], [1.60263144E12, 3852.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263138E12, 198.7479990530014], [1.60263144E12, 183.88599912881853]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263138E12, 208.6915011048317], [1.60263144E12, 187.03880007743837]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263138E12, 204.05749861896038], [1.60263144E12, 185.71299956440924]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263138E12, 182.0], [1.60263144E12, 173.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263138E12, 787.5], [1.60263144E12, 780.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263144E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 563.5, "minX": 1.0, "maxY": 2520.0, "series": [{"data": [[8.0, 954.5], [9.0, 912.5], [10.0, 1006.0], [11.0, 932.0], [12.0, 840.5], [3.0, 875.0], [13.0, 831.5], [14.0, 713.5], [15.0, 618.0], [1.0, 2520.0], [16.0, 563.5], [18.0, 600.5], [7.0, 1146.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 563.5, "minX": 1.0, "maxY": 2517.0, "series": [{"data": [[8.0, 953.5], [9.0, 911.5], [10.0, 1004.0], [11.0, 931.0], [12.0, 840.0], [3.0, 875.0], [13.0, 828.0], [14.0, 713.0], [15.0, 617.0], [1.0, 2517.0], [16.0, 563.5], [18.0, 600.0], [7.0, 1138.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.666666666666667, "minX": 1.60263138E12, "maxY": 6.583333333333333, "series": [{"data": [[1.60263138E12, 5.666666666666667], [1.60263144E12, 6.583333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263144E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.5, "minX": 1.60263138E12, "maxY": 6.75, "series": [{"data": [[1.60263138E12, 5.5], [1.60263144E12, 6.75]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263144E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.5, "minX": 1.60263138E12, "maxY": 6.75, "series": [{"data": [[1.60263138E12, 5.5], [1.60263144E12, 6.75]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263144E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.5, "minX": 1.60263138E12, "maxY": 6.75, "series": [{"data": [[1.60263138E12, 5.5], [1.60263144E12, 6.75]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263144E12, "title": "Total Transactions Per Second"}},
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

