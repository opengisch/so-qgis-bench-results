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
        data: {"result": {"minY": 178.0, "minX": 0.0, "maxY": 4863.0, "series": [{"data": [[0.0, 178.0], [0.1, 178.0], [0.2, 179.0], [0.3, 191.0], [0.4, 191.0], [0.5, 193.0], [0.6, 200.0], [0.7, 203.0], [0.8, 203.0], [0.9, 205.0], [1.0, 208.0], [1.1, 209.0], [1.2, 209.0], [1.3, 213.0], [1.4, 219.0], [1.5, 222.0], [1.6, 222.0], [1.7, 225.0], [1.8, 228.0], [1.9, 228.0], [2.0, 229.0], [2.1, 230.0], [2.2, 234.0], [2.3, 234.0], [2.4, 237.0], [2.5, 238.0], [2.6, 242.0], [2.7, 242.0], [2.8, 246.0], [2.9, 249.0], [3.0, 251.0], [3.1, 251.0], [3.2, 251.0], [3.3, 252.0], [3.4, 252.0], [3.5, 255.0], [3.6, 255.0], [3.7, 256.0], [3.8, 256.0], [3.9, 257.0], [4.0, 259.0], [4.1, 259.0], [4.2, 259.0], [4.3, 260.0], [4.4, 262.0], [4.5, 263.0], [4.6, 263.0], [4.7, 264.0], [4.8, 268.0], [4.9, 268.0], [5.0, 268.0], [5.1, 269.0], [5.2, 271.0], [5.3, 271.0], [5.4, 274.0], [5.5, 274.0], [5.6, 276.0], [5.7, 276.0], [5.8, 280.0], [5.9, 280.0], [6.0, 280.0], [6.1, 280.0], [6.2, 282.0], [6.3, 282.0], [6.4, 289.0], [6.5, 289.0], [6.6, 289.0], [6.7, 290.0], [6.8, 290.0], [6.9, 290.0], [7.0, 291.0], [7.1, 292.0], [7.2, 292.0], [7.3, 292.0], [7.4, 295.0], [7.5, 295.0], [7.6, 295.0], [7.7, 296.0], [7.8, 297.0], [7.9, 298.0], [8.0, 298.0], [8.1, 300.0], [8.2, 302.0], [8.3, 304.0], [8.4, 304.0], [8.5, 305.0], [8.6, 306.0], [8.7, 306.0], [8.8, 306.0], [8.9, 309.0], [9.0, 312.0], [9.1, 312.0], [9.2, 321.0], [9.3, 327.0], [9.4, 333.0], [9.5, 333.0], [9.6, 334.0], [9.7, 336.0], [9.8, 336.0], [9.9, 336.0], [10.0, 338.0], [10.1, 340.0], [10.2, 340.0], [10.3, 340.0], [10.4, 341.0], [10.5, 345.0], [10.6, 345.0], [10.7, 348.0], [10.8, 351.0], [10.9, 351.0], [11.0, 351.0], [11.1, 352.0], [11.2, 357.0], [11.3, 359.0], [11.4, 359.0], [11.5, 361.0], [11.6, 361.0], [11.7, 361.0], [11.8, 361.0], [11.9, 362.0], [12.0, 363.0], [12.1, 363.0], [12.2, 364.0], [12.3, 364.0], [12.4, 365.0], [12.5, 365.0], [12.6, 365.0], [12.7, 366.0], [12.8, 370.0], [12.9, 370.0], [13.0, 372.0], [13.1, 374.0], [13.2, 374.0], [13.3, 374.0], [13.4, 375.0], [13.5, 377.0], [13.6, 377.0], [13.7, 378.0], [13.8, 378.0], [13.9, 379.0], [14.0, 379.0], [14.1, 385.0], [14.2, 386.0], [14.3, 387.0], [14.4, 387.0], [14.5, 389.0], [14.6, 389.0], [14.7, 390.0], [14.8, 390.0], [14.9, 390.0], [15.0, 390.0], [15.1, 390.0], [15.2, 391.0], [15.3, 393.0], [15.4, 396.0], [15.5, 396.0], [15.6, 396.0], [15.7, 398.0], [15.8, 399.0], [15.9, 399.0], [16.0, 399.0], [16.1, 402.0], [16.2, 407.0], [16.3, 407.0], [16.4, 407.0], [16.5, 407.0], [16.6, 410.0], [16.7, 410.0], [16.8, 412.0], [16.9, 414.0], [17.0, 414.0], [17.1, 414.0], [17.2, 414.0], [17.3, 416.0], [17.4, 416.0], [17.5, 417.0], [17.6, 418.0], [17.7, 418.0], [17.8, 418.0], [17.9, 419.0], [18.0, 419.0], [18.1, 421.0], [18.2, 421.0], [18.3, 422.0], [18.4, 424.0], [18.5, 424.0], [18.6, 425.0], [18.7, 425.0], [18.8, 425.0], [18.9, 425.0], [19.0, 429.0], [19.1, 429.0], [19.2, 433.0], [19.3, 433.0], [19.4, 434.0], [19.5, 437.0], [19.6, 439.0], [19.7, 439.0], [19.8, 440.0], [19.9, 442.0], [20.0, 444.0], [20.1, 444.0], [20.2, 444.0], [20.3, 444.0], [20.4, 444.0], [20.5, 447.0], [20.6, 449.0], [20.7, 451.0], [20.8, 451.0], [20.9, 452.0], [21.0, 455.0], [21.1, 457.0], [21.2, 457.0], [21.3, 459.0], [21.4, 461.0], [21.5, 466.0], [21.6, 466.0], [21.7, 466.0], [21.8, 468.0], [21.9, 468.0], [22.0, 471.0], [22.1, 472.0], [22.2, 472.0], [22.3, 472.0], [22.4, 475.0], [22.5, 476.0], [22.6, 477.0], [22.7, 477.0], [22.8, 477.0], [22.9, 480.0], [23.0, 480.0], [23.1, 480.0], [23.2, 482.0], [23.3, 482.0], [23.4, 482.0], [23.5, 485.0], [23.6, 485.0], [23.7, 486.0], [23.8, 486.0], [23.9, 487.0], [24.0, 488.0], [24.1, 492.0], [24.2, 492.0], [24.3, 493.0], [24.4, 493.0], [24.5, 493.0], [24.6, 493.0], [24.7, 494.0], [24.8, 494.0], [24.9, 496.0], [25.0, 496.0], [25.1, 496.0], [25.2, 496.0], [25.3, 496.0], [25.4, 500.0], [25.5, 500.0], [25.6, 501.0], [25.7, 501.0], [25.8, 501.0], [25.9, 502.0], [26.0, 502.0], [26.1, 502.0], [26.2, 505.0], [26.3, 506.0], [26.4, 510.0], [26.5, 510.0], [26.6, 510.0], [26.7, 514.0], [26.8, 514.0], [26.9, 514.0], [27.0, 515.0], [27.1, 516.0], [27.2, 516.0], [27.3, 517.0], [27.4, 517.0], [27.5, 520.0], [27.6, 520.0], [27.7, 525.0], [27.8, 526.0], [27.9, 529.0], [28.0, 529.0], [28.1, 530.0], [28.2, 532.0], [28.3, 533.0], [28.4, 533.0], [28.5, 534.0], [28.6, 536.0], [28.7, 536.0], [28.8, 536.0], [28.9, 540.0], [29.0, 545.0], [29.1, 545.0], [29.2, 546.0], [29.3, 546.0], [29.4, 546.0], [29.5, 546.0], [29.6, 547.0], [29.7, 548.0], [29.8, 549.0], [29.9, 549.0], [30.0, 550.0], [30.1, 551.0], [30.2, 551.0], [30.3, 551.0], [30.4, 552.0], [30.5, 553.0], [30.6, 553.0], [30.7, 555.0], [30.8, 555.0], [30.9, 555.0], [31.0, 555.0], [31.1, 557.0], [31.2, 558.0], [31.3, 562.0], [31.4, 562.0], [31.5, 562.0], [31.6, 562.0], [31.7, 562.0], [31.8, 564.0], [31.9, 565.0], [32.0, 567.0], [32.1, 567.0], [32.2, 567.0], [32.3, 567.0], [32.4, 567.0], [32.5, 567.0], [32.6, 568.0], [32.7, 569.0], [32.8, 569.0], [32.9, 569.0], [33.0, 570.0], [33.1, 571.0], [33.2, 571.0], [33.3, 571.0], [33.4, 572.0], [33.5, 573.0], [33.6, 573.0], [33.7, 573.0], [33.8, 573.0], [33.9, 573.0], [34.0, 573.0], [34.1, 574.0], [34.2, 574.0], [34.3, 578.0], [34.4, 578.0], [34.5, 578.0], [34.6, 579.0], [34.7, 579.0], [34.8, 579.0], [34.9, 580.0], [35.0, 580.0], [35.1, 580.0], [35.2, 580.0], [35.3, 581.0], [35.4, 582.0], [35.5, 582.0], [35.6, 584.0], [35.7, 584.0], [35.8, 587.0], [35.9, 587.0], [36.0, 588.0], [36.1, 589.0], [36.2, 589.0], [36.3, 589.0], [36.4, 590.0], [36.5, 591.0], [36.6, 592.0], [36.7, 592.0], [36.8, 593.0], [36.9, 596.0], [37.0, 596.0], [37.1, 597.0], [37.2, 597.0], [37.3, 600.0], [37.4, 600.0], [37.5, 601.0], [37.6, 601.0], [37.7, 601.0], [37.8, 601.0], [37.9, 602.0], [38.0, 607.0], [38.1, 607.0], [38.2, 607.0], [38.3, 608.0], [38.4, 608.0], [38.5, 608.0], [38.6, 610.0], [38.7, 610.0], [38.8, 611.0], [38.9, 611.0], [39.0, 611.0], [39.1, 612.0], [39.2, 612.0], [39.3, 612.0], [39.4, 613.0], [39.5, 614.0], [39.6, 615.0], [39.7, 615.0], [39.8, 616.0], [39.9, 619.0], [40.0, 620.0], [40.1, 620.0], [40.2, 621.0], [40.3, 623.0], [40.4, 623.0], [40.5, 623.0], [40.6, 625.0], [40.7, 626.0], [40.8, 626.0], [40.9, 626.0], [41.0, 626.0], [41.1, 627.0], [41.2, 627.0], [41.3, 629.0], [41.4, 629.0], [41.5, 632.0], [41.6, 632.0], [41.7, 633.0], [41.8, 634.0], [41.9, 634.0], [42.0, 635.0], [42.1, 638.0], [42.2, 639.0], [42.3, 639.0], [42.4, 643.0], [42.5, 643.0], [42.6, 644.0], [42.7, 644.0], [42.8, 646.0], [42.9, 648.0], [43.0, 648.0], [43.1, 648.0], [43.2, 648.0], [43.3, 648.0], [43.4, 648.0], [43.5, 649.0], [43.6, 655.0], [43.7, 656.0], [43.8, 656.0], [43.9, 657.0], [44.0, 658.0], [44.1, 660.0], [44.2, 660.0], [44.3, 661.0], [44.4, 662.0], [44.5, 662.0], [44.6, 662.0], [44.7, 663.0], [44.8, 663.0], [44.9, 663.0], [45.0, 663.0], [45.1, 664.0], [45.2, 665.0], [45.3, 665.0], [45.4, 666.0], [45.5, 667.0], [45.6, 668.0], [45.7, 668.0], [45.8, 669.0], [45.9, 670.0], [46.0, 671.0], [46.1, 671.0], [46.2, 671.0], [46.3, 672.0], [46.4, 674.0], [46.5, 674.0], [46.6, 674.0], [46.7, 674.0], [46.8, 674.0], [46.9, 675.0], [47.0, 677.0], [47.1, 678.0], [47.2, 678.0], [47.3, 679.0], [47.4, 687.0], [47.5, 693.0], [47.6, 693.0], [47.7, 694.0], [47.8, 694.0], [47.9, 695.0], [48.0, 695.0], [48.1, 696.0], [48.2, 697.0], [48.3, 699.0], [48.4, 699.0], [48.5, 701.0], [48.6, 704.0], [48.7, 704.0], [48.8, 705.0], [48.9, 706.0], [49.0, 707.0], [49.1, 707.0], [49.2, 708.0], [49.3, 708.0], [49.4, 709.0], [49.5, 709.0], [49.6, 712.0], [49.7, 714.0], [49.8, 717.0], [49.9, 717.0], [50.0, 721.0], [50.1, 721.0], [50.2, 721.0], [50.3, 722.0], [50.4, 723.0], [50.5, 727.0], [50.6, 727.0], [50.7, 729.0], [50.8, 731.0], [50.9, 732.0], [51.0, 732.0], [51.1, 735.0], [51.2, 736.0], [51.3, 737.0], [51.4, 737.0], [51.5, 739.0], [51.6, 741.0], [51.7, 741.0], [51.8, 748.0], [51.9, 750.0], [52.0, 753.0], [52.1, 753.0], [52.2, 753.0], [52.3, 754.0], [52.4, 762.0], [52.5, 762.0], [52.6, 762.0], [52.7, 762.0], [52.8, 764.0], [52.9, 764.0], [53.0, 765.0], [53.1, 768.0], [53.2, 769.0], [53.3, 769.0], [53.4, 770.0], [53.5, 771.0], [53.6, 771.0], [53.7, 771.0], [53.8, 775.0], [53.9, 776.0], [54.0, 776.0], [54.1, 777.0], [54.2, 779.0], [54.3, 781.0], [54.4, 781.0], [54.5, 782.0], [54.6, 783.0], [54.7, 783.0], [54.8, 783.0], [54.9, 785.0], [55.0, 787.0], [55.1, 787.0], [55.2, 789.0], [55.3, 792.0], [55.4, 793.0], [55.5, 793.0], [55.6, 793.0], [55.7, 794.0], [55.8, 794.0], [55.9, 794.0], [56.0, 794.0], [56.1, 796.0], [56.2, 799.0], [56.3, 799.0], [56.4, 799.0], [56.5, 801.0], [56.6, 801.0], [56.7, 801.0], [56.8, 802.0], [56.9, 803.0], [57.0, 803.0], [57.1, 804.0], [57.2, 806.0], [57.3, 806.0], [57.4, 806.0], [57.5, 807.0], [57.6, 807.0], [57.7, 810.0], [57.8, 810.0], [57.9, 813.0], [58.0, 813.0], [58.1, 817.0], [58.2, 817.0], [58.3, 819.0], [58.4, 819.0], [58.5, 819.0], [58.6, 821.0], [58.7, 821.0], [58.8, 827.0], [58.9, 827.0], [59.0, 828.0], [59.1, 830.0], [59.2, 833.0], [59.3, 833.0], [59.4, 834.0], [59.5, 835.0], [59.6, 836.0], [59.7, 836.0], [59.8, 838.0], [59.9, 841.0], [60.0, 843.0], [60.1, 843.0], [60.2, 844.0], [60.3, 844.0], [60.4, 844.0], [60.5, 846.0], [60.6, 846.0], [60.7, 847.0], [60.8, 847.0], [60.9, 848.0], [61.0, 849.0], [61.1, 853.0], [61.2, 853.0], [61.3, 858.0], [61.4, 858.0], [61.5, 859.0], [61.6, 859.0], [61.7, 862.0], [61.8, 863.0], [61.9, 863.0], [62.0, 864.0], [62.1, 865.0], [62.2, 867.0], [62.3, 867.0], [62.4, 870.0], [62.5, 872.0], [62.6, 872.0], [62.7, 872.0], [62.8, 878.0], [62.9, 882.0], [63.0, 884.0], [63.1, 884.0], [63.2, 889.0], [63.3, 890.0], [63.4, 890.0], [63.5, 891.0], [63.6, 891.0], [63.7, 891.0], [63.8, 891.0], [63.9, 892.0], [64.0, 894.0], [64.1, 901.0], [64.2, 901.0], [64.3, 901.0], [64.4, 903.0], [64.5, 904.0], [64.6, 904.0], [64.7, 905.0], [64.8, 913.0], [64.9, 914.0], [65.0, 914.0], [65.1, 922.0], [65.2, 925.0], [65.3, 925.0], [65.4, 927.0], [65.5, 937.0], [65.6, 941.0], [65.7, 941.0], [65.8, 941.0], [65.9, 942.0], [66.0, 948.0], [66.1, 948.0], [66.2, 949.0], [66.3, 951.0], [66.4, 952.0], [66.5, 952.0], [66.6, 955.0], [66.7, 958.0], [66.8, 958.0], [66.9, 959.0], [67.0, 959.0], [67.1, 960.0], [67.2, 960.0], [67.3, 963.0], [67.4, 964.0], [67.5, 965.0], [67.6, 965.0], [67.7, 965.0], [67.8, 965.0], [67.9, 965.0], [68.0, 965.0], [68.1, 965.0], [68.2, 967.0], [68.3, 971.0], [68.4, 971.0], [68.5, 971.0], [68.6, 972.0], [68.7, 972.0], [68.8, 975.0], [68.9, 979.0], [69.0, 979.0], [69.1, 979.0], [69.2, 983.0], [69.3, 985.0], [69.4, 988.0], [69.5, 988.0], [69.6, 992.0], [69.7, 994.0], [69.8, 996.0], [69.9, 996.0], [70.0, 999.0], [70.1, 1000.0], [70.2, 1000.0], [70.3, 1000.0], [70.4, 1001.0], [70.5, 1003.0], [70.6, 1003.0], [70.7, 1004.0], [70.8, 1004.0], [70.9, 1005.0], [71.0, 1005.0], [71.1, 1011.0], [71.2, 1012.0], [71.3, 1013.0], [71.4, 1013.0], [71.5, 1018.0], [71.6, 1025.0], [71.7, 1025.0], [71.8, 1025.0], [71.9, 1027.0], [72.0, 1027.0], [72.1, 1027.0], [72.2, 1028.0], [72.3, 1028.0], [72.4, 1030.0], [72.5, 1030.0], [72.6, 1030.0], [72.7, 1033.0], [72.8, 1033.0], [72.9, 1033.0], [73.0, 1033.0], [73.1, 1034.0], [73.2, 1039.0], [73.3, 1039.0], [73.4, 1039.0], [73.5, 1040.0], [73.6, 1040.0], [73.7, 1040.0], [73.8, 1041.0], [73.9, 1043.0], [74.0, 1043.0], [74.1, 1046.0], [74.2, 1046.0], [74.3, 1047.0], [74.4, 1047.0], [74.5, 1048.0], [74.6, 1049.0], [74.7, 1051.0], [74.8, 1051.0], [74.9, 1055.0], [75.0, 1059.0], [75.1, 1059.0], [75.2, 1060.0], [75.3, 1062.0], [75.4, 1064.0], [75.5, 1064.0], [75.6, 1064.0], [75.7, 1067.0], [75.8, 1068.0], [75.9, 1068.0], [76.0, 1070.0], [76.1, 1073.0], [76.2, 1073.0], [76.3, 1073.0], [76.4, 1075.0], [76.5, 1075.0], [76.6, 1078.0], [76.7, 1078.0], [76.8, 1078.0], [76.9, 1084.0], [77.0, 1084.0], [77.1, 1086.0], [77.2, 1086.0], [77.3, 1088.0], [77.4, 1088.0], [77.5, 1091.0], [77.6, 1097.0], [77.7, 1097.0], [77.8, 1097.0], [77.9, 1099.0], [78.0, 1105.0], [78.1, 1107.0], [78.2, 1107.0], [78.3, 1107.0], [78.4, 1116.0], [78.5, 1116.0], [78.6, 1117.0], [78.7, 1117.0], [78.8, 1119.0], [78.9, 1119.0], [79.0, 1119.0], [79.1, 1120.0], [79.2, 1123.0], [79.3, 1123.0], [79.4, 1123.0], [79.5, 1124.0], [79.6, 1124.0], [79.7, 1124.0], [79.8, 1124.0], [79.9, 1125.0], [80.0, 1132.0], [80.1, 1132.0], [80.2, 1136.0], [80.3, 1137.0], [80.4, 1137.0], [80.5, 1137.0], [80.6, 1140.0], [80.7, 1140.0], [80.8, 1140.0], [80.9, 1142.0], [81.0, 1146.0], [81.1, 1149.0], [81.2, 1149.0], [81.3, 1150.0], [81.4, 1157.0], [81.5, 1159.0], [81.6, 1159.0], [81.7, 1160.0], [81.8, 1161.0], [81.9, 1161.0], [82.0, 1163.0], [82.1, 1170.0], [82.2, 1172.0], [82.3, 1172.0], [82.4, 1174.0], [82.5, 1181.0], [82.6, 1182.0], [82.7, 1182.0], [82.8, 1186.0], [82.9, 1188.0], [83.0, 1189.0], [83.1, 1189.0], [83.2, 1190.0], [83.3, 1191.0], [83.4, 1191.0], [83.5, 1195.0], [83.6, 1196.0], [83.7, 1200.0], [83.8, 1200.0], [83.9, 1202.0], [84.0, 1202.0], [84.1, 1203.0], [84.2, 1203.0], [84.3, 1203.0], [84.4, 1206.0], [84.5, 1212.0], [84.6, 1212.0], [84.7, 1214.0], [84.8, 1218.0], [84.9, 1218.0], [85.0, 1218.0], [85.1, 1220.0], [85.2, 1221.0], [85.3, 1221.0], [85.4, 1222.0], [85.5, 1225.0], [85.6, 1226.0], [85.7, 1226.0], [85.8, 1228.0], [85.9, 1229.0], [86.0, 1232.0], [86.1, 1232.0], [86.2, 1233.0], [86.3, 1234.0], [86.4, 1238.0], [86.5, 1238.0], [86.6, 1239.0], [86.7, 1239.0], [86.8, 1239.0], [86.9, 1243.0], [87.0, 1245.0], [87.1, 1245.0], [87.2, 1245.0], [87.3, 1247.0], [87.4, 1249.0], [87.5, 1250.0], [87.6, 1250.0], [87.7, 1260.0], [87.8, 1261.0], [87.9, 1262.0], [88.0, 1262.0], [88.1, 1262.0], [88.2, 1266.0], [88.3, 1270.0], [88.4, 1270.0], [88.5, 1276.0], [88.6, 1277.0], [88.7, 1277.0], [88.8, 1277.0], [88.9, 1281.0], [89.0, 1283.0], [89.1, 1283.0], [89.2, 1285.0], [89.3, 1296.0], [89.4, 1296.0], [89.5, 1296.0], [89.6, 1299.0], [89.7, 1304.0], [89.8, 1306.0], [89.9, 1306.0], [90.0, 1307.0], [90.1, 1310.0], [90.2, 1310.0], [90.3, 1318.0], [90.4, 1319.0], [90.5, 1321.0], [90.6, 1321.0], [90.7, 1329.0], [90.8, 1333.0], [90.9, 1343.0], [91.0, 1343.0], [91.1, 1343.0], [91.2, 1347.0], [91.3, 1347.0], [91.4, 1347.0], [91.5, 1348.0], [91.6, 1350.0], [91.7, 1350.0], [91.8, 1360.0], [91.9, 1365.0], [92.0, 1369.0], [92.1, 1369.0], [92.2, 1388.0], [92.3, 1391.0], [92.4, 1392.0], [92.5, 1392.0], [92.6, 1407.0], [92.7, 1417.0], [92.8, 1423.0], [92.9, 1423.0], [93.0, 1423.0], [93.1, 1450.0], [93.2, 1458.0], [93.3, 1458.0], [93.4, 1469.0], [93.5, 1479.0], [93.6, 1479.0], [93.7, 1500.0], [93.8, 1507.0], [93.9, 1534.0], [94.0, 1534.0], [94.1, 1539.0], [94.2, 1544.0], [94.3, 1563.0], [94.4, 1563.0], [94.5, 1571.0], [94.6, 1578.0], [94.7, 1588.0], [94.8, 1588.0], [94.9, 1595.0], [95.0, 1607.0], [95.1, 1607.0], [95.2, 1607.0], [95.3, 1609.0], [95.4, 1632.0], [95.5, 1632.0], [95.6, 1639.0], [95.7, 1646.0], [95.8, 1647.0], [95.9, 1647.0], [96.0, 1673.0], [96.1, 1685.0], [96.2, 1704.0], [96.3, 1704.0], [96.4, 1706.0], [96.5, 1708.0], [96.6, 1712.0], [96.7, 1712.0], [96.8, 1716.0], [96.9, 1724.0], [97.0, 1724.0], [97.1, 1728.0], [97.2, 1734.0], [97.3, 1788.0], [97.4, 1788.0], [97.5, 1797.0], [97.6, 1826.0], [97.7, 1875.0], [97.8, 1875.0], [97.9, 1999.0], [98.0, 2259.0], [98.1, 3044.0], [98.2, 3044.0], [98.3, 3169.0], [98.4, 3267.0], [98.5, 3267.0], [98.6, 3610.0], [98.7, 3977.0], [98.8, 3978.0], [98.9, 3978.0], [99.0, 4104.0], [99.1, 4186.0], [99.2, 4237.0], [99.3, 4237.0], [99.4, 4310.0], [99.5, 4355.0], [99.6, 4530.0], [99.7, 4530.0], [99.8, 4706.0], [99.9, 4863.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 88.0, "series": [{"data": [[600.0, 82.0], [700.0, 59.0], [800.0, 56.0], [900.0, 44.0], [1000.0, 58.0], [1100.0, 42.0], [1200.0, 44.0], [1300.0, 21.0], [1400.0, 8.0], [1500.0, 10.0], [100.0, 4.0], [1600.0, 9.0], [1700.0, 10.0], [1800.0, 2.0], [1900.0, 1.0], [2200.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 55.0], [3200.0, 1.0], [3600.0, 1.0], [3900.0, 2.0], [4100.0, 2.0], [4200.0, 1.0], [4300.0, 2.0], [4500.0, 1.0], [4700.0, 1.0], [300.0, 59.0], [4800.0, 1.0], [400.0, 68.0], [500.0, 88.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 46.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 501.0, "series": [{"data": [[0.0, 188.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 501.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 46.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.933234421364984, "minX": 1.60231044E12, "maxY": 10.0, "series": [{"data": [[1.60231044E12, 10.0], [1.6023105E12, 9.933234421364984]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023105E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 312.0, "minX": 1.0, "maxY": 971.0, "series": [{"data": [[8.0, 562.0], [4.0, 562.0], [2.0, 593.0], [1.0, 925.0], [9.0, 312.0], [10.0, 842.3484848484842], [5.0, 762.0], [6.0, 580.0], [3.0, 517.0], [7.0, 971.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 839.9034013605435]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 459.3333333333333, "minX": 1.60231044E12, "maxY": 1640664.1, "series": [{"data": [[1.60231044E12, 195108.3], [1.6023105E12, 1640664.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231044E12, 459.3333333333333], [1.6023105E12, 5063.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023105E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 797.157270029674, "minX": 1.60231044E12, "maxY": 1312.2131147540981, "series": [{"data": [[1.60231044E12, 1312.2131147540981], [1.6023105E12, 797.157270029674]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023105E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 796.2062314540058, "minX": 1.60231044E12, "maxY": 1310.393442622951, "series": [{"data": [[1.60231044E12, 1310.393442622951], [1.6023105E12, 796.2062314540058]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023105E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.013353115727002965, "minX": 1.60231044E12, "maxY": 1.3278688524590168, "series": [{"data": [[1.60231044E12, 1.3278688524590168], [1.6023105E12, 0.013353115727002965]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023105E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.60231044E12, "maxY": 4863.0, "series": [{"data": [[1.60231044E12, 4863.0], [1.6023105E12, 3267.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231044E12, 179.0], [1.6023105E12, 225.22499951720238]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231044E12, 179.0], [1.6023105E12, 227.04750019311905]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231044E12, 179.0], [1.6023105E12, 226.2374997586012]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231044E12, 179.0], [1.6023105E12, 178.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231044E12, 601.0], [1.6023105E12, 728.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023105E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 484.0, "minX": 8.0, "maxY": 1092.5, "series": [{"data": [[8.0, 1092.5], [16.0, 613.5], [17.0, 552.0], [18.0, 484.0], [9.0, 772.5], [10.0, 989.0], [21.0, 614.0], [11.0, 892.0], [12.0, 811.5], [13.0, 813.0], [14.0, 804.0], [15.0, 607.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 483.5, "minX": 8.0, "maxY": 1087.0, "series": [{"data": [[8.0, 1087.0], [16.0, 613.5], [17.0, 552.0], [18.0, 483.5], [9.0, 771.0], [10.0, 988.0], [21.0, 613.0], [11.0, 892.0], [12.0, 811.0], [13.0, 812.0], [14.0, 804.0], [15.0, 606.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.60231044E12, "maxY": 11.066666666666666, "series": [{"data": [[1.60231044E12, 1.1833333333333333], [1.6023105E12, 11.066666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023105E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0166666666666666, "minX": 1.60231044E12, "maxY": 11.233333333333333, "series": [{"data": [[1.60231044E12, 1.0166666666666666], [1.6023105E12, 11.233333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023105E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0166666666666666, "minX": 1.60231044E12, "maxY": 11.233333333333333, "series": [{"data": [[1.60231044E12, 1.0166666666666666], [1.6023105E12, 11.233333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023105E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0166666666666666, "minX": 1.60231044E12, "maxY": 11.233333333333333, "series": [{"data": [[1.60231044E12, 1.0166666666666666], [1.6023105E12, 11.233333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023105E12, "title": "Total Transactions Per Second"}},
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

