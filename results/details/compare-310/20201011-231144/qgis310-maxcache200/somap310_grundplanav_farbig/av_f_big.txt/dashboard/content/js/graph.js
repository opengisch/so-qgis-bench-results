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
        data: {"result": {"minY": 181.0, "minX": 0.0, "maxY": 3439.0, "series": [{"data": [[0.0, 181.0], [0.1, 181.0], [0.2, 189.0], [0.3, 193.0], [0.4, 193.0], [0.5, 193.0], [0.6, 198.0], [0.7, 202.0], [0.8, 202.0], [0.9, 209.0], [1.0, 211.0], [1.1, 211.0], [1.2, 211.0], [1.3, 212.0], [1.4, 216.0], [1.5, 217.0], [1.6, 217.0], [1.7, 217.0], [1.8, 218.0], [1.9, 218.0], [2.0, 218.0], [2.1, 221.0], [2.2, 232.0], [2.3, 232.0], [2.4, 232.0], [2.5, 233.0], [2.6, 234.0], [2.7, 234.0], [2.8, 235.0], [2.9, 237.0], [3.0, 238.0], [3.1, 238.0], [3.2, 240.0], [3.3, 245.0], [3.4, 245.0], [3.5, 249.0], [3.6, 255.0], [3.7, 256.0], [3.8, 256.0], [3.9, 258.0], [4.0, 261.0], [4.1, 262.0], [4.2, 262.0], [4.3, 264.0], [4.4, 265.0], [4.5, 265.0], [4.6, 265.0], [4.7, 269.0], [4.8, 272.0], [4.9, 272.0], [5.0, 272.0], [5.1, 278.0], [5.2, 278.0], [5.3, 278.0], [5.4, 278.0], [5.5, 278.0], [5.6, 280.0], [5.7, 280.0], [5.8, 284.0], [5.9, 284.0], [6.0, 285.0], [6.1, 285.0], [6.2, 285.0], [6.3, 286.0], [6.4, 286.0], [6.5, 286.0], [6.6, 286.0], [6.7, 290.0], [6.8, 290.0], [6.9, 296.0], [7.0, 297.0], [7.1, 298.0], [7.2, 298.0], [7.3, 298.0], [7.4, 299.0], [7.5, 299.0], [7.6, 299.0], [7.7, 300.0], [7.8, 300.0], [7.9, 301.0], [8.0, 301.0], [8.1, 302.0], [8.2, 303.0], [8.3, 306.0], [8.4, 306.0], [8.5, 312.0], [8.6, 312.0], [8.7, 312.0], [8.8, 321.0], [8.9, 324.0], [9.0, 324.0], [9.1, 324.0], [9.2, 326.0], [9.3, 331.0], [9.4, 332.0], [9.5, 332.0], [9.6, 332.0], [9.7, 332.0], [9.8, 333.0], [9.9, 333.0], [10.0, 336.0], [10.1, 338.0], [10.2, 338.0], [10.3, 340.0], [10.4, 341.0], [10.5, 344.0], [10.6, 344.0], [10.7, 344.0], [10.8, 345.0], [10.9, 347.0], [11.0, 347.0], [11.1, 347.0], [11.2, 350.0], [11.3, 350.0], [11.4, 350.0], [11.5, 350.0], [11.6, 352.0], [11.7, 352.0], [11.8, 355.0], [11.9, 355.0], [12.0, 355.0], [12.1, 355.0], [12.2, 357.0], [12.3, 357.0], [12.4, 361.0], [12.5, 361.0], [12.6, 362.0], [12.7, 364.0], [12.8, 368.0], [12.9, 368.0], [13.0, 369.0], [13.1, 370.0], [13.2, 374.0], [13.3, 374.0], [13.4, 376.0], [13.5, 378.0], [13.6, 378.0], [13.7, 380.0], [13.8, 382.0], [13.9, 383.0], [14.0, 383.0], [14.1, 385.0], [14.2, 385.0], [14.3, 386.0], [14.4, 386.0], [14.5, 386.0], [14.6, 389.0], [14.7, 390.0], [14.8, 390.0], [14.9, 391.0], [15.0, 391.0], [15.1, 391.0], [15.2, 392.0], [15.3, 392.0], [15.4, 394.0], [15.5, 394.0], [15.6, 397.0], [15.7, 402.0], [15.8, 406.0], [15.9, 406.0], [16.0, 410.0], [16.1, 412.0], [16.2, 412.0], [16.3, 412.0], [16.4, 412.0], [16.5, 413.0], [16.6, 416.0], [16.7, 416.0], [16.8, 416.0], [16.9, 416.0], [17.0, 416.0], [17.1, 418.0], [17.2, 419.0], [17.3, 419.0], [17.4, 419.0], [17.5, 420.0], [17.6, 420.0], [17.7, 421.0], [17.8, 421.0], [17.9, 422.0], [18.0, 423.0], [18.1, 426.0], [18.2, 426.0], [18.3, 426.0], [18.4, 428.0], [18.5, 428.0], [18.6, 431.0], [18.7, 432.0], [18.8, 433.0], [18.9, 433.0], [19.0, 436.0], [19.1, 437.0], [19.2, 438.0], [19.3, 438.0], [19.4, 439.0], [19.5, 446.0], [19.6, 448.0], [19.7, 448.0], [19.8, 463.0], [19.9, 463.0], [20.0, 465.0], [20.1, 465.0], [20.2, 465.0], [20.3, 466.0], [20.4, 466.0], [20.5, 467.0], [20.6, 468.0], [20.7, 469.0], [20.8, 469.0], [20.9, 471.0], [21.0, 471.0], [21.1, 473.0], [21.2, 473.0], [21.3, 475.0], [21.4, 476.0], [21.5, 477.0], [21.6, 477.0], [21.7, 478.0], [21.8, 480.0], [21.9, 480.0], [22.0, 486.0], [22.1, 487.0], [22.2, 491.0], [22.3, 491.0], [22.4, 492.0], [22.5, 494.0], [22.6, 496.0], [22.7, 496.0], [22.8, 497.0], [22.9, 497.0], [23.0, 497.0], [23.1, 497.0], [23.2, 498.0], [23.3, 501.0], [23.4, 501.0], [23.5, 501.0], [23.6, 502.0], [23.7, 502.0], [23.8, 502.0], [23.9, 503.0], [24.0, 503.0], [24.1, 508.0], [24.2, 508.0], [24.3, 510.0], [24.4, 511.0], [24.5, 512.0], [24.6, 512.0], [24.7, 512.0], [24.8, 513.0], [24.9, 514.0], [25.0, 514.0], [25.1, 515.0], [25.2, 515.0], [25.3, 515.0], [25.4, 517.0], [25.5, 521.0], [25.6, 522.0], [25.7, 522.0], [25.8, 523.0], [25.9, 524.0], [26.0, 526.0], [26.1, 526.0], [26.2, 529.0], [26.3, 533.0], [26.4, 533.0], [26.5, 533.0], [26.6, 533.0], [26.7, 538.0], [26.8, 538.0], [26.9, 540.0], [27.0, 540.0], [27.1, 541.0], [27.2, 541.0], [27.3, 542.0], [27.4, 543.0], [27.5, 543.0], [27.6, 543.0], [27.7, 543.0], [27.8, 546.0], [27.9, 548.0], [28.0, 548.0], [28.1, 553.0], [28.2, 554.0], [28.3, 555.0], [28.4, 555.0], [28.5, 558.0], [28.6, 559.0], [28.7, 559.0], [28.8, 560.0], [28.9, 560.0], [29.0, 560.0], [29.1, 560.0], [29.2, 561.0], [29.3, 562.0], [29.4, 563.0], [29.5, 563.0], [29.6, 564.0], [29.7, 565.0], [29.8, 565.0], [29.9, 565.0], [30.0, 566.0], [30.1, 567.0], [30.2, 567.0], [30.3, 568.0], [30.4, 568.0], [30.5, 572.0], [30.6, 572.0], [30.7, 572.0], [30.8, 573.0], [30.9, 574.0], [31.0, 574.0], [31.1, 576.0], [31.2, 576.0], [31.3, 576.0], [31.4, 576.0], [31.5, 578.0], [31.6, 578.0], [31.7, 578.0], [31.8, 580.0], [31.9, 580.0], [32.0, 581.0], [32.1, 581.0], [32.2, 581.0], [32.3, 581.0], [32.4, 581.0], [32.5, 581.0], [32.6, 582.0], [32.7, 583.0], [32.8, 584.0], [32.9, 584.0], [33.0, 585.0], [33.1, 586.0], [33.2, 586.0], [33.3, 586.0], [33.4, 587.0], [33.5, 587.0], [33.6, 587.0], [33.7, 587.0], [33.8, 588.0], [33.9, 589.0], [34.0, 589.0], [34.1, 590.0], [34.2, 590.0], [34.3, 590.0], [34.4, 590.0], [34.5, 590.0], [34.6, 591.0], [34.7, 591.0], [34.8, 591.0], [34.9, 593.0], [35.0, 594.0], [35.1, 594.0], [35.2, 595.0], [35.3, 596.0], [35.4, 597.0], [35.5, 597.0], [35.6, 602.0], [35.7, 603.0], [35.8, 603.0], [35.9, 603.0], [36.0, 604.0], [36.1, 605.0], [36.2, 606.0], [36.3, 606.0], [36.4, 606.0], [36.5, 611.0], [36.6, 612.0], [36.7, 612.0], [36.8, 613.0], [36.9, 614.0], [37.0, 614.0], [37.1, 614.0], [37.2, 614.0], [37.3, 615.0], [37.4, 615.0], [37.5, 615.0], [37.6, 619.0], [37.7, 620.0], [37.8, 620.0], [37.9, 620.0], [38.0, 622.0], [38.1, 622.0], [38.2, 622.0], [38.3, 622.0], [38.4, 622.0], [38.5, 622.0], [38.6, 624.0], [38.7, 624.0], [38.8, 627.0], [38.9, 627.0], [39.0, 631.0], [39.1, 632.0], [39.2, 633.0], [39.3, 633.0], [39.4, 634.0], [39.5, 636.0], [39.6, 638.0], [39.7, 638.0], [39.8, 640.0], [39.9, 642.0], [40.0, 642.0], [40.1, 642.0], [40.2, 642.0], [40.3, 643.0], [40.4, 643.0], [40.5, 645.0], [40.6, 645.0], [40.7, 646.0], [40.8, 646.0], [40.9, 647.0], [41.0, 648.0], [41.1, 650.0], [41.2, 650.0], [41.3, 650.0], [41.4, 650.0], [41.5, 651.0], [41.6, 651.0], [41.7, 653.0], [41.8, 654.0], [41.9, 654.0], [42.0, 657.0], [42.1, 658.0], [42.2, 659.0], [42.3, 659.0], [42.4, 660.0], [42.5, 662.0], [42.6, 663.0], [42.7, 663.0], [42.8, 672.0], [42.9, 676.0], [43.0, 676.0], [43.1, 676.0], [43.2, 678.0], [43.3, 682.0], [43.4, 682.0], [43.5, 685.0], [43.6, 687.0], [43.7, 689.0], [43.8, 689.0], [43.9, 689.0], [44.0, 691.0], [44.1, 698.0], [44.2, 698.0], [44.3, 700.0], [44.4, 700.0], [44.5, 701.0], [44.6, 701.0], [44.7, 702.0], [44.8, 703.0], [44.9, 704.0], [45.0, 704.0], [45.1, 704.0], [45.2, 706.0], [45.3, 706.0], [45.4, 707.0], [45.5, 708.0], [45.6, 708.0], [45.7, 708.0], [45.8, 711.0], [45.9, 711.0], [46.0, 712.0], [46.1, 712.0], [46.2, 714.0], [46.3, 714.0], [46.4, 714.0], [46.5, 714.0], [46.6, 714.0], [46.7, 717.0], [46.8, 717.0], [46.9, 718.0], [47.0, 718.0], [47.1, 719.0], [47.2, 719.0], [47.3, 719.0], [47.4, 719.0], [47.5, 720.0], [47.6, 720.0], [47.7, 725.0], [47.8, 727.0], [47.9, 728.0], [48.0, 728.0], [48.1, 728.0], [48.2, 732.0], [48.3, 734.0], [48.4, 734.0], [48.5, 740.0], [48.6, 745.0], [48.7, 745.0], [48.8, 747.0], [48.9, 748.0], [49.0, 750.0], [49.1, 750.0], [49.2, 751.0], [49.3, 753.0], [49.4, 754.0], [49.5, 754.0], [49.6, 754.0], [49.7, 756.0], [49.8, 756.0], [49.9, 756.0], [50.0, 756.0], [50.1, 758.0], [50.2, 758.0], [50.3, 759.0], [50.4, 759.0], [50.5, 760.0], [50.6, 760.0], [50.7, 764.0], [50.8, 767.0], [50.9, 770.0], [51.0, 770.0], [51.1, 774.0], [51.2, 775.0], [51.3, 776.0], [51.4, 776.0], [51.5, 784.0], [51.6, 784.0], [51.7, 784.0], [51.8, 788.0], [51.9, 794.0], [52.0, 799.0], [52.1, 799.0], [52.2, 799.0], [52.3, 799.0], [52.4, 806.0], [52.5, 806.0], [52.6, 807.0], [52.7, 810.0], [52.8, 812.0], [52.9, 812.0], [53.0, 815.0], [53.1, 816.0], [53.2, 816.0], [53.3, 816.0], [53.4, 816.0], [53.5, 817.0], [53.6, 817.0], [53.7, 820.0], [53.8, 821.0], [53.9, 822.0], [54.0, 822.0], [54.1, 827.0], [54.2, 828.0], [54.3, 829.0], [54.4, 829.0], [54.5, 829.0], [54.6, 830.0], [54.7, 830.0], [54.8, 830.0], [54.9, 831.0], [55.0, 831.0], [55.1, 831.0], [55.2, 831.0], [55.3, 833.0], [55.4, 836.0], [55.5, 836.0], [55.6, 836.0], [55.7, 837.0], [55.8, 839.0], [55.9, 839.0], [56.0, 840.0], [56.1, 845.0], [56.2, 845.0], [56.3, 845.0], [56.4, 849.0], [56.5, 852.0], [56.6, 854.0], [56.7, 854.0], [56.8, 858.0], [56.9, 861.0], [57.0, 861.0], [57.1, 867.0], [57.2, 869.0], [57.3, 870.0], [57.4, 870.0], [57.5, 871.0], [57.6, 872.0], [57.7, 872.0], [57.8, 872.0], [57.9, 872.0], [58.0, 874.0], [58.1, 883.0], [58.2, 883.0], [58.3, 887.0], [58.4, 887.0], [58.5, 887.0], [58.6, 889.0], [58.7, 889.0], [58.8, 892.0], [58.9, 892.0], [59.0, 893.0], [59.1, 894.0], [59.2, 899.0], [59.3, 899.0], [59.4, 900.0], [59.5, 903.0], [59.6, 905.0], [59.7, 905.0], [59.8, 906.0], [59.9, 909.0], [60.0, 910.0], [60.1, 910.0], [60.2, 912.0], [60.3, 912.0], [60.4, 912.0], [60.5, 915.0], [60.6, 915.0], [60.7, 915.0], [60.8, 915.0], [60.9, 921.0], [61.0, 923.0], [61.1, 923.0], [61.2, 923.0], [61.3, 924.0], [61.4, 925.0], [61.5, 926.0], [61.6, 926.0], [61.7, 927.0], [61.8, 929.0], [61.9, 929.0], [62.0, 930.0], [62.1, 933.0], [62.2, 936.0], [62.3, 936.0], [62.4, 939.0], [62.5, 943.0], [62.6, 946.0], [62.7, 946.0], [62.8, 947.0], [62.9, 948.0], [63.0, 948.0], [63.1, 948.0], [63.2, 951.0], [63.3, 951.0], [63.4, 951.0], [63.5, 953.0], [63.6, 955.0], [63.7, 957.0], [63.8, 957.0], [63.9, 957.0], [64.0, 958.0], [64.1, 960.0], [64.2, 960.0], [64.3, 961.0], [64.4, 962.0], [64.5, 962.0], [64.6, 962.0], [64.7, 963.0], [64.8, 965.0], [64.9, 966.0], [65.0, 966.0], [65.1, 967.0], [65.2, 967.0], [65.3, 967.0], [65.4, 968.0], [65.5, 969.0], [65.6, 972.0], [65.7, 972.0], [65.8, 975.0], [65.9, 975.0], [66.0, 976.0], [66.1, 976.0], [66.2, 976.0], [66.3, 978.0], [66.4, 978.0], [66.5, 978.0], [66.6, 979.0], [66.7, 980.0], [66.8, 980.0], [66.9, 980.0], [67.0, 982.0], [67.1, 982.0], [67.2, 982.0], [67.3, 983.0], [67.4, 983.0], [67.5, 986.0], [67.6, 986.0], [67.7, 989.0], [67.8, 989.0], [67.9, 990.0], [68.0, 990.0], [68.1, 990.0], [68.2, 990.0], [68.3, 992.0], [68.4, 992.0], [68.5, 993.0], [68.6, 995.0], [68.7, 995.0], [68.8, 995.0], [68.9, 1003.0], [69.0, 1005.0], [69.1, 1005.0], [69.2, 1006.0], [69.3, 1006.0], [69.4, 1006.0], [69.5, 1006.0], [69.6, 1007.0], [69.7, 1009.0], [69.8, 1014.0], [69.9, 1014.0], [70.0, 1014.0], [70.1, 1015.0], [70.2, 1015.0], [70.3, 1016.0], [70.4, 1016.0], [70.5, 1017.0], [70.6, 1017.0], [70.7, 1019.0], [70.8, 1020.0], [70.9, 1021.0], [71.0, 1021.0], [71.1, 1022.0], [71.2, 1025.0], [71.3, 1026.0], [71.4, 1026.0], [71.5, 1028.0], [71.6, 1030.0], [71.7, 1030.0], [71.8, 1031.0], [71.9, 1031.0], [72.0, 1031.0], [72.1, 1031.0], [72.2, 1032.0], [72.3, 1032.0], [72.4, 1032.0], [72.5, 1032.0], [72.6, 1033.0], [72.7, 1039.0], [72.8, 1040.0], [72.9, 1040.0], [73.0, 1041.0], [73.1, 1042.0], [73.2, 1042.0], [73.3, 1042.0], [73.4, 1045.0], [73.5, 1046.0], [73.6, 1046.0], [73.7, 1046.0], [73.8, 1048.0], [73.9, 1048.0], [74.0, 1048.0], [74.1, 1051.0], [74.2, 1051.0], [74.3, 1052.0], [74.4, 1052.0], [74.5, 1052.0], [74.6, 1053.0], [74.7, 1056.0], [74.8, 1056.0], [74.9, 1057.0], [75.0, 1057.0], [75.1, 1057.0], [75.2, 1066.0], [75.3, 1066.0], [75.4, 1068.0], [75.5, 1068.0], [75.6, 1070.0], [75.7, 1072.0], [75.8, 1074.0], [75.9, 1074.0], [76.0, 1075.0], [76.1, 1077.0], [76.2, 1077.0], [76.3, 1077.0], [76.4, 1078.0], [76.5, 1078.0], [76.6, 1079.0], [76.7, 1079.0], [76.8, 1080.0], [76.9, 1082.0], [77.0, 1082.0], [77.1, 1084.0], [77.2, 1086.0], [77.3, 1086.0], [77.4, 1086.0], [77.5, 1087.0], [77.6, 1088.0], [77.7, 1090.0], [77.8, 1090.0], [77.9, 1091.0], [78.0, 1092.0], [78.1, 1098.0], [78.2, 1098.0], [78.3, 1099.0], [78.4, 1099.0], [78.5, 1099.0], [78.6, 1100.0], [78.7, 1103.0], [78.8, 1103.0], [78.9, 1103.0], [79.0, 1105.0], [79.1, 1107.0], [79.2, 1108.0], [79.3, 1108.0], [79.4, 1109.0], [79.5, 1113.0], [79.6, 1116.0], [79.7, 1116.0], [79.8, 1117.0], [79.9, 1117.0], [80.0, 1119.0], [80.1, 1119.0], [80.2, 1120.0], [80.3, 1130.0], [80.4, 1130.0], [80.5, 1132.0], [80.6, 1134.0], [80.7, 1140.0], [80.8, 1140.0], [80.9, 1140.0], [81.0, 1142.0], [81.1, 1146.0], [81.2, 1146.0], [81.3, 1146.0], [81.4, 1147.0], [81.5, 1149.0], [81.6, 1149.0], [81.7, 1149.0], [81.8, 1151.0], [81.9, 1151.0], [82.0, 1155.0], [82.1, 1160.0], [82.2, 1165.0], [82.3, 1165.0], [82.4, 1166.0], [82.5, 1167.0], [82.6, 1168.0], [82.7, 1168.0], [82.8, 1174.0], [82.9, 1177.0], [83.0, 1178.0], [83.1, 1178.0], [83.2, 1180.0], [83.3, 1180.0], [83.4, 1180.0], [83.5, 1181.0], [83.6, 1183.0], [83.7, 1185.0], [83.8, 1185.0], [83.9, 1185.0], [84.0, 1191.0], [84.1, 1197.0], [84.2, 1197.0], [84.3, 1201.0], [84.4, 1201.0], [84.5, 1202.0], [84.6, 1202.0], [84.7, 1203.0], [84.8, 1205.0], [84.9, 1205.0], [85.0, 1205.0], [85.1, 1205.0], [85.2, 1211.0], [85.3, 1211.0], [85.4, 1214.0], [85.5, 1218.0], [85.6, 1220.0], [85.7, 1220.0], [85.8, 1220.0], [85.9, 1220.0], [86.0, 1224.0], [86.1, 1224.0], [86.2, 1224.0], [86.3, 1224.0], [86.4, 1240.0], [86.5, 1240.0], [86.6, 1246.0], [86.7, 1247.0], [86.8, 1247.0], [86.9, 1248.0], [87.0, 1249.0], [87.1, 1250.0], [87.2, 1250.0], [87.3, 1252.0], [87.4, 1254.0], [87.5, 1255.0], [87.6, 1255.0], [87.7, 1258.0], [87.8, 1259.0], [87.9, 1262.0], [88.0, 1262.0], [88.1, 1264.0], [88.2, 1274.0], [88.3, 1274.0], [88.4, 1274.0], [88.5, 1280.0], [88.6, 1281.0], [88.7, 1281.0], [88.8, 1286.0], [88.9, 1290.0], [89.0, 1291.0], [89.1, 1291.0], [89.2, 1296.0], [89.3, 1298.0], [89.4, 1301.0], [89.5, 1301.0], [89.6, 1301.0], [89.7, 1302.0], [89.8, 1303.0], [89.9, 1303.0], [90.0, 1306.0], [90.1, 1309.0], [90.2, 1309.0], [90.3, 1322.0], [90.4, 1327.0], [90.5, 1330.0], [90.6, 1330.0], [90.7, 1331.0], [90.8, 1335.0], [90.9, 1344.0], [91.0, 1344.0], [91.1, 1350.0], [91.2, 1352.0], [91.3, 1352.0], [91.4, 1352.0], [91.5, 1355.0], [91.6, 1364.0], [91.7, 1364.0], [91.8, 1367.0], [91.9, 1373.0], [92.0, 1377.0], [92.1, 1377.0], [92.2, 1399.0], [92.3, 1407.0], [92.4, 1416.0], [92.5, 1416.0], [92.6, 1428.0], [92.7, 1441.0], [92.8, 1446.0], [92.9, 1446.0], [93.0, 1463.0], [93.1, 1468.0], [93.2, 1475.0], [93.3, 1475.0], [93.4, 1478.0], [93.5, 1483.0], [93.6, 1483.0], [93.7, 1495.0], [93.8, 1510.0], [93.9, 1516.0], [94.0, 1516.0], [94.1, 1516.0], [94.2, 1549.0], [94.3, 1552.0], [94.4, 1552.0], [94.5, 1559.0], [94.6, 1559.0], [94.7, 1563.0], [94.8, 1563.0], [94.9, 1565.0], [95.0, 1571.0], [95.1, 1571.0], [95.2, 1588.0], [95.3, 1591.0], [95.4, 1593.0], [95.5, 1593.0], [95.6, 1594.0], [95.7, 1630.0], [95.8, 1654.0], [95.9, 1654.0], [96.0, 1672.0], [96.1, 1690.0], [96.2, 1705.0], [96.3, 1705.0], [96.4, 1730.0], [96.5, 1739.0], [96.6, 1758.0], [96.7, 1758.0], [96.8, 1771.0], [96.9, 1797.0], [97.0, 1797.0], [97.1, 1832.0], [97.2, 1871.0], [97.3, 1895.0], [97.4, 1895.0], [97.5, 1908.0], [97.6, 1939.0], [97.7, 1967.0], [97.8, 1967.0], [97.9, 2125.0], [98.0, 2188.0], [98.1, 2657.0], [98.2, 2657.0], [98.3, 2732.0], [98.4, 2757.0], [98.5, 2757.0], [98.6, 2883.0], [98.7, 2892.0], [98.8, 2918.0], [98.9, 2918.0], [99.0, 2956.0], [99.1, 2979.0], [99.2, 3058.0], [99.3, 3058.0], [99.4, 3070.0], [99.5, 3113.0], [99.6, 3116.0], [99.7, 3116.0], [99.8, 3216.0], [99.9, 3439.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 90.0, "series": [{"data": [[600.0, 64.0], [700.0, 60.0], [800.0, 51.0], [900.0, 70.0], [1000.0, 71.0], [1100.0, 42.0], [1200.0, 38.0], [1300.0, 21.0], [1400.0, 11.0], [1500.0, 14.0], [100.0, 5.0], [1600.0, 4.0], [1700.0, 6.0], [1800.0, 3.0], [1900.0, 3.0], [2100.0, 2.0], [2600.0, 1.0], [2700.0, 2.0], [2800.0, 2.0], [2900.0, 3.0], [3000.0, 2.0], [3100.0, 2.0], [200.0, 51.0], [3200.0, 1.0], [3400.0, 1.0], [300.0, 59.0], [400.0, 56.0], [500.0, 90.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 46.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 518.0, "series": [{"data": [[0.0, 171.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 518.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 46.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.752747252747252, "minX": 1.60245954E12, "maxY": 10.0, "series": [{"data": [[1.60245954E12, 10.0], [1.6024596E12, 9.752747252747252]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024596E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 286.0, "minX": 1.0, "maxY": 1007.0, "series": [{"data": [[8.0, 286.0], [4.0, 676.0], [2.0, 982.0], [1.0, 980.0], [9.0, 540.0], [10.0, 840.0123966942147], [5.0, 585.0], [6.0, 299.0], [3.0, 1007.0], [7.0, 586.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 837.8095238095236]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1360.7, "minX": 1.60245954E12, "maxY": 1447348.5333333334, "series": [{"data": [[1.60245954E12, 1447348.5333333334], [1.6024596E12, 388390.01666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60245954E12, 4162.333333333333], [1.6024596E12, 1360.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024596E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 763.1483516483518, "minX": 1.60245954E12, "maxY": 862.3815551537066, "series": [{"data": [[1.60245954E12, 862.3815551537066], [1.6024596E12, 763.1483516483518]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024596E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 762.0879120879122, "minX": 1.60245954E12, "maxY": 861.1464737793854, "series": [{"data": [[1.60245954E12, 861.1464737793854], [1.6024596E12, 762.0879120879122]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024596E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.07692307692307691, "minX": 1.60245954E12, "maxY": 0.236889692585895, "series": [{"data": [[1.60245954E12, 0.236889692585895], [1.6024596E12, 0.07692307692307691]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024596E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.60245954E12, "maxY": 3439.0, "series": [{"data": [[1.60245954E12, 3439.0], [1.6024596E12, 2732.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60245954E12, 201.94399947166443], [1.6024596E12, 205.2929991710186]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60245954E12, 205.3922003698349], [1.6024596E12, 208.42230033159257]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60245954E12, 203.84099953770638], [1.6024596E12, 207.0314995855093]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60245954E12, 181.0], [1.6024596E12, 193.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60245954E12, 776.0], [1.6024596E12, 718.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024596E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 571.0, "minX": 1.0, "maxY": 1227.0, "series": [{"data": [[8.0, 721.5], [9.0, 1011.5], [10.0, 898.5], [11.0, 940.5], [12.0, 848.5], [13.0, 870.0], [14.0, 722.5], [15.0, 623.0], [16.0, 571.0], [1.0, 980.0], [17.0, 581.0], [18.0, 600.0], [19.0, 874.0], [6.0, 1227.0], [7.0, 1220.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 571.0, "minX": 1.0, "maxY": 1226.0, "series": [{"data": [[8.0, 719.5], [9.0, 1009.5], [10.0, 895.5], [11.0, 940.0], [12.0, 847.5], [13.0, 866.0], [14.0, 721.5], [15.0, 622.0], [16.0, 571.0], [1.0, 980.0], [17.0, 581.0], [18.0, 599.5], [19.0, 873.0], [6.0, 1226.0], [7.0, 1219.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.8666666666666667, "minX": 1.60245954E12, "maxY": 9.383333333333333, "series": [{"data": [[1.60245954E12, 9.383333333333333], [1.6024596E12, 2.8666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024596E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.033333333333333, "minX": 1.60245954E12, "maxY": 9.216666666666667, "series": [{"data": [[1.60245954E12, 9.216666666666667], [1.6024596E12, 3.033333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024596E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.033333333333333, "minX": 1.60245954E12, "maxY": 9.216666666666667, "series": [{"data": [[1.60245954E12, 9.216666666666667], [1.6024596E12, 3.033333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024596E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.033333333333333, "minX": 1.60245954E12, "maxY": 9.216666666666667, "series": [{"data": [[1.60245954E12, 9.216666666666667], [1.6024596E12, 3.033333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024596E12, "title": "Total Transactions Per Second"}},
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

