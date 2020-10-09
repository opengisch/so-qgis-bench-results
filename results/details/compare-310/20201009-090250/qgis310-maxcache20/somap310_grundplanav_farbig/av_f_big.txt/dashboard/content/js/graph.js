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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 3685.0, "series": [{"data": [[0.0, 184.0], [0.1, 184.0], [0.2, 185.0], [0.3, 189.0], [0.4, 189.0], [0.5, 191.0], [0.6, 195.0], [0.7, 195.0], [0.8, 195.0], [0.9, 195.0], [1.0, 197.0], [1.1, 197.0], [1.2, 197.0], [1.3, 202.0], [1.4, 205.0], [1.5, 207.0], [1.6, 207.0], [1.7, 213.0], [1.8, 214.0], [1.9, 214.0], [2.0, 227.0], [2.1, 228.0], [2.2, 235.0], [2.3, 235.0], [2.4, 237.0], [2.5, 244.0], [2.6, 244.0], [2.7, 244.0], [2.8, 247.0], [2.9, 248.0], [3.0, 249.0], [3.1, 249.0], [3.2, 249.0], [3.3, 251.0], [3.4, 251.0], [3.5, 254.0], [3.6, 262.0], [3.7, 266.0], [3.8, 266.0], [3.9, 267.0], [4.0, 269.0], [4.1, 271.0], [4.2, 271.0], [4.3, 272.0], [4.4, 274.0], [4.5, 277.0], [4.6, 277.0], [4.7, 279.0], [4.8, 279.0], [4.9, 283.0], [5.0, 283.0], [5.1, 283.0], [5.2, 285.0], [5.3, 285.0], [5.4, 288.0], [5.5, 291.0], [5.6, 291.0], [5.7, 291.0], [5.8, 292.0], [5.9, 292.0], [6.0, 296.0], [6.1, 296.0], [6.2, 296.0], [6.3, 299.0], [6.4, 301.0], [6.5, 301.0], [6.6, 304.0], [6.7, 306.0], [6.8, 306.0], [6.9, 315.0], [7.0, 318.0], [7.1, 320.0], [7.2, 320.0], [7.3, 322.0], [7.4, 325.0], [7.5, 327.0], [7.6, 327.0], [7.7, 331.0], [7.8, 334.0], [7.9, 334.0], [8.0, 334.0], [8.1, 342.0], [8.2, 342.0], [8.3, 345.0], [8.4, 345.0], [8.5, 346.0], [8.6, 349.0], [8.7, 349.0], [8.8, 353.0], [8.9, 356.0], [9.0, 361.0], [9.1, 361.0], [9.2, 362.0], [9.3, 362.0], [9.4, 363.0], [9.5, 363.0], [9.6, 364.0], [9.7, 364.0], [9.8, 366.0], [9.9, 366.0], [10.0, 369.0], [10.1, 371.0], [10.2, 371.0], [10.3, 371.0], [10.4, 371.0], [10.5, 376.0], [10.6, 376.0], [10.7, 377.0], [10.8, 378.0], [10.9, 379.0], [11.0, 379.0], [11.1, 382.0], [11.2, 384.0], [11.3, 384.0], [11.4, 384.0], [11.5, 385.0], [11.6, 386.0], [11.7, 386.0], [11.8, 386.0], [11.9, 386.0], [12.0, 387.0], [12.1, 387.0], [12.2, 388.0], [12.3, 389.0], [12.4, 390.0], [12.5, 390.0], [12.6, 392.0], [12.7, 393.0], [12.8, 393.0], [12.9, 393.0], [13.0, 394.0], [13.1, 397.0], [13.2, 397.0], [13.3, 397.0], [13.4, 400.0], [13.5, 401.0], [13.6, 401.0], [13.7, 404.0], [13.8, 405.0], [13.9, 411.0], [14.0, 411.0], [14.1, 414.0], [14.2, 417.0], [14.3, 423.0], [14.4, 423.0], [14.5, 424.0], [14.6, 424.0], [14.7, 426.0], [14.8, 426.0], [14.9, 427.0], [15.0, 427.0], [15.1, 427.0], [15.2, 428.0], [15.3, 431.0], [15.4, 432.0], [15.5, 432.0], [15.6, 438.0], [15.7, 439.0], [15.8, 439.0], [15.9, 439.0], [16.0, 441.0], [16.1, 441.0], [16.2, 442.0], [16.3, 442.0], [16.4, 442.0], [16.5, 445.0], [16.6, 445.0], [16.7, 445.0], [16.8, 446.0], [16.9, 448.0], [17.0, 448.0], [17.1, 450.0], [17.2, 451.0], [17.3, 451.0], [17.4, 451.0], [17.5, 452.0], [17.6, 453.0], [17.7, 454.0], [17.8, 454.0], [17.9, 454.0], [18.0, 454.0], [18.1, 455.0], [18.2, 455.0], [18.3, 458.0], [18.4, 459.0], [18.5, 459.0], [18.6, 460.0], [18.7, 462.0], [18.8, 467.0], [18.9, 467.0], [19.0, 469.0], [19.1, 472.0], [19.2, 476.0], [19.3, 476.0], [19.4, 476.0], [19.5, 477.0], [19.6, 477.0], [19.7, 477.0], [19.8, 478.0], [19.9, 479.0], [20.0, 481.0], [20.1, 481.0], [20.2, 483.0], [20.3, 485.0], [20.4, 485.0], [20.5, 485.0], [20.6, 487.0], [20.7, 490.0], [20.8, 490.0], [20.9, 490.0], [21.0, 492.0], [21.1, 493.0], [21.2, 493.0], [21.3, 494.0], [21.4, 495.0], [21.5, 495.0], [21.6, 495.0], [21.7, 498.0], [21.8, 499.0], [21.9, 499.0], [22.0, 500.0], [22.1, 500.0], [22.2, 501.0], [22.3, 501.0], [22.4, 503.0], [22.5, 503.0], [22.6, 506.0], [22.7, 506.0], [22.8, 507.0], [22.9, 508.0], [23.0, 508.0], [23.1, 508.0], [23.2, 509.0], [23.3, 510.0], [23.4, 510.0], [23.5, 511.0], [23.6, 511.0], [23.7, 512.0], [23.8, 512.0], [23.9, 514.0], [24.0, 515.0], [24.1, 516.0], [24.2, 516.0], [24.3, 516.0], [24.4, 517.0], [24.5, 517.0], [24.6, 517.0], [24.7, 517.0], [24.8, 517.0], [24.9, 519.0], [25.0, 519.0], [25.1, 520.0], [25.2, 522.0], [25.3, 522.0], [25.4, 522.0], [25.5, 522.0], [25.6, 523.0], [25.7, 523.0], [25.8, 524.0], [25.9, 525.0], [26.0, 525.0], [26.1, 525.0], [26.2, 525.0], [26.3, 526.0], [26.4, 526.0], [26.5, 526.0], [26.6, 527.0], [26.7, 527.0], [26.8, 527.0], [26.9, 528.0], [27.0, 530.0], [27.1, 532.0], [27.2, 532.0], [27.3, 533.0], [27.4, 535.0], [27.5, 536.0], [27.6, 536.0], [27.7, 538.0], [27.8, 538.0], [27.9, 540.0], [28.0, 540.0], [28.1, 541.0], [28.2, 542.0], [28.3, 542.0], [28.4, 542.0], [28.5, 542.0], [28.6, 543.0], [28.7, 543.0], [28.8, 545.0], [28.9, 547.0], [29.0, 551.0], [29.1, 551.0], [29.2, 552.0], [29.3, 552.0], [29.4, 553.0], [29.5, 553.0], [29.6, 564.0], [29.7, 566.0], [29.8, 567.0], [29.9, 567.0], [30.0, 567.0], [30.1, 567.0], [30.2, 567.0], [30.3, 569.0], [30.4, 570.0], [30.5, 571.0], [30.6, 571.0], [30.7, 571.0], [30.8, 571.0], [30.9, 572.0], [31.0, 572.0], [31.1, 576.0], [31.2, 577.0], [31.3, 579.0], [31.4, 579.0], [31.5, 579.0], [31.6, 580.0], [31.7, 580.0], [31.8, 582.0], [31.9, 584.0], [32.0, 584.0], [32.1, 584.0], [32.2, 585.0], [32.3, 585.0], [32.4, 586.0], [32.5, 586.0], [32.6, 589.0], [32.7, 589.0], [32.8, 590.0], [32.9, 590.0], [33.0, 591.0], [33.1, 592.0], [33.2, 593.0], [33.3, 593.0], [33.4, 594.0], [33.5, 594.0], [33.6, 594.0], [33.7, 594.0], [33.8, 595.0], [33.9, 595.0], [34.0, 595.0], [34.1, 596.0], [34.2, 596.0], [34.3, 597.0], [34.4, 597.0], [34.5, 598.0], [34.6, 598.0], [34.7, 599.0], [34.8, 599.0], [34.9, 599.0], [35.0, 600.0], [35.1, 600.0], [35.2, 601.0], [35.3, 604.0], [35.4, 606.0], [35.5, 606.0], [35.6, 608.0], [35.7, 609.0], [35.8, 609.0], [35.9, 609.0], [36.0, 609.0], [36.1, 611.0], [36.2, 611.0], [36.3, 611.0], [36.4, 613.0], [36.5, 614.0], [36.6, 621.0], [36.7, 621.0], [36.8, 622.0], [36.9, 622.0], [37.0, 622.0], [37.1, 623.0], [37.2, 623.0], [37.3, 625.0], [37.4, 625.0], [37.5, 628.0], [37.6, 629.0], [37.7, 630.0], [37.8, 630.0], [37.9, 631.0], [38.0, 633.0], [38.1, 634.0], [38.2, 634.0], [38.3, 634.0], [38.4, 634.0], [38.5, 634.0], [38.6, 636.0], [38.7, 637.0], [38.8, 638.0], [38.9, 638.0], [39.0, 641.0], [39.1, 645.0], [39.2, 647.0], [39.3, 647.0], [39.4, 650.0], [39.5, 650.0], [39.6, 651.0], [39.7, 651.0], [39.8, 653.0], [39.9, 654.0], [40.0, 655.0], [40.1, 655.0], [40.2, 660.0], [40.3, 661.0], [40.4, 661.0], [40.5, 661.0], [40.6, 662.0], [40.7, 666.0], [40.8, 666.0], [40.9, 667.0], [41.0, 668.0], [41.1, 669.0], [41.2, 669.0], [41.3, 671.0], [41.4, 672.0], [41.5, 672.0], [41.6, 672.0], [41.7, 673.0], [41.8, 674.0], [41.9, 674.0], [42.0, 677.0], [42.1, 679.0], [42.2, 681.0], [42.3, 681.0], [42.4, 682.0], [42.5, 683.0], [42.6, 684.0], [42.7, 684.0], [42.8, 687.0], [42.9, 688.0], [43.0, 691.0], [43.1, 691.0], [43.2, 691.0], [43.3, 694.0], [43.4, 694.0], [43.5, 695.0], [43.6, 696.0], [43.7, 698.0], [43.8, 698.0], [43.9, 698.0], [44.0, 703.0], [44.1, 703.0], [44.2, 703.0], [44.3, 705.0], [44.4, 706.0], [44.5, 706.0], [44.6, 706.0], [44.7, 706.0], [44.8, 707.0], [44.9, 708.0], [45.0, 708.0], [45.1, 708.0], [45.2, 709.0], [45.3, 709.0], [45.4, 710.0], [45.5, 710.0], [45.6, 713.0], [45.7, 713.0], [45.8, 714.0], [45.9, 719.0], [46.0, 721.0], [46.1, 721.0], [46.2, 722.0], [46.3, 722.0], [46.4, 722.0], [46.5, 722.0], [46.6, 723.0], [46.7, 724.0], [46.8, 724.0], [46.9, 727.0], [47.0, 728.0], [47.1, 730.0], [47.2, 730.0], [47.3, 730.0], [47.4, 732.0], [47.5, 733.0], [47.6, 733.0], [47.7, 738.0], [47.8, 739.0], [47.9, 739.0], [48.0, 739.0], [48.1, 740.0], [48.2, 744.0], [48.3, 744.0], [48.4, 744.0], [48.5, 748.0], [48.6, 748.0], [48.7, 748.0], [48.8, 750.0], [48.9, 752.0], [49.0, 755.0], [49.1, 755.0], [49.2, 756.0], [49.3, 756.0], [49.4, 756.0], [49.5, 756.0], [49.6, 756.0], [49.7, 757.0], [49.8, 757.0], [49.9, 757.0], [50.0, 758.0], [50.1, 762.0], [50.2, 762.0], [50.3, 762.0], [50.4, 763.0], [50.5, 766.0], [50.6, 766.0], [50.7, 768.0], [50.8, 769.0], [50.9, 770.0], [51.0, 770.0], [51.1, 770.0], [51.2, 770.0], [51.3, 773.0], [51.4, 773.0], [51.5, 773.0], [51.6, 774.0], [51.7, 774.0], [51.8, 774.0], [51.9, 775.0], [52.0, 776.0], [52.1, 776.0], [52.2, 779.0], [52.3, 782.0], [52.4, 783.0], [52.5, 783.0], [52.6, 783.0], [52.7, 784.0], [52.8, 785.0], [52.9, 785.0], [53.0, 786.0], [53.1, 788.0], [53.2, 788.0], [53.3, 788.0], [53.4, 789.0], [53.5, 791.0], [53.6, 791.0], [53.7, 792.0], [53.8, 793.0], [53.9, 797.0], [54.0, 797.0], [54.1, 797.0], [54.2, 798.0], [54.3, 798.0], [54.4, 798.0], [54.5, 802.0], [54.6, 803.0], [54.7, 804.0], [54.8, 804.0], [54.9, 805.0], [55.0, 807.0], [55.1, 807.0], [55.2, 807.0], [55.3, 808.0], [55.4, 808.0], [55.5, 808.0], [55.6, 809.0], [55.7, 809.0], [55.8, 809.0], [55.9, 809.0], [56.0, 810.0], [56.1, 811.0], [56.2, 813.0], [56.3, 813.0], [56.4, 815.0], [56.5, 815.0], [56.6, 816.0], [56.7, 816.0], [56.8, 817.0], [56.9, 818.0], [57.0, 818.0], [57.1, 819.0], [57.2, 820.0], [57.3, 821.0], [57.4, 821.0], [57.5, 821.0], [57.6, 822.0], [57.7, 823.0], [57.8, 823.0], [57.9, 826.0], [58.0, 827.0], [58.1, 828.0], [58.2, 828.0], [58.3, 830.0], [58.4, 831.0], [58.5, 831.0], [58.6, 832.0], [58.7, 833.0], [58.8, 834.0], [58.9, 834.0], [59.0, 835.0], [59.1, 835.0], [59.2, 838.0], [59.3, 838.0], [59.4, 838.0], [59.5, 841.0], [59.6, 841.0], [59.7, 841.0], [59.8, 842.0], [59.9, 842.0], [60.0, 844.0], [60.1, 844.0], [60.2, 846.0], [60.3, 846.0], [60.4, 846.0], [60.5, 847.0], [60.6, 847.0], [60.7, 848.0], [60.8, 848.0], [60.9, 848.0], [61.0, 849.0], [61.1, 849.0], [61.2, 849.0], [61.3, 850.0], [61.4, 853.0], [61.5, 855.0], [61.6, 855.0], [61.7, 855.0], [61.8, 856.0], [61.9, 856.0], [62.0, 857.0], [62.1, 863.0], [62.2, 864.0], [62.3, 864.0], [62.4, 867.0], [62.5, 868.0], [62.6, 872.0], [62.7, 872.0], [62.8, 872.0], [62.9, 872.0], [63.0, 877.0], [63.1, 877.0], [63.2, 878.0], [63.3, 878.0], [63.4, 878.0], [63.5, 879.0], [63.6, 885.0], [63.7, 885.0], [63.8, 885.0], [63.9, 886.0], [64.0, 891.0], [64.1, 892.0], [64.2, 892.0], [64.3, 896.0], [64.4, 898.0], [64.5, 900.0], [64.6, 900.0], [64.7, 901.0], [64.8, 902.0], [64.9, 903.0], [65.0, 903.0], [65.1, 905.0], [65.2, 906.0], [65.3, 906.0], [65.4, 914.0], [65.5, 914.0], [65.6, 914.0], [65.7, 914.0], [65.8, 915.0], [65.9, 917.0], [66.0, 919.0], [66.1, 919.0], [66.2, 923.0], [66.3, 924.0], [66.4, 925.0], [66.5, 925.0], [66.6, 927.0], [66.7, 927.0], [66.8, 927.0], [66.9, 928.0], [67.0, 930.0], [67.1, 932.0], [67.2, 932.0], [67.3, 938.0], [67.4, 938.0], [67.5, 938.0], [67.6, 938.0], [67.7, 939.0], [67.8, 943.0], [67.9, 944.0], [68.0, 944.0], [68.1, 949.0], [68.2, 950.0], [68.3, 951.0], [68.4, 951.0], [68.5, 951.0], [68.6, 952.0], [68.7, 952.0], [68.8, 954.0], [68.9, 959.0], [69.0, 959.0], [69.1, 959.0], [69.2, 961.0], [69.3, 973.0], [69.4, 973.0], [69.5, 973.0], [69.6, 977.0], [69.7, 979.0], [69.8, 979.0], [69.9, 979.0], [70.0, 980.0], [70.1, 981.0], [70.2, 981.0], [70.3, 981.0], [70.4, 983.0], [70.5, 986.0], [70.6, 986.0], [70.7, 988.0], [70.8, 988.0], [70.9, 988.0], [71.0, 988.0], [71.1, 989.0], [71.2, 989.0], [71.3, 989.0], [71.4, 989.0], [71.5, 990.0], [71.6, 991.0], [71.7, 991.0], [71.8, 995.0], [71.9, 997.0], [72.0, 998.0], [72.1, 998.0], [72.2, 999.0], [72.3, 999.0], [72.4, 1000.0], [72.5, 1000.0], [72.6, 1001.0], [72.7, 1001.0], [72.8, 1006.0], [72.9, 1006.0], [73.0, 1006.0], [73.1, 1008.0], [73.2, 1011.0], [73.3, 1011.0], [73.4, 1017.0], [73.5, 1020.0], [73.6, 1020.0], [73.7, 1024.0], [73.8, 1026.0], [73.9, 1028.0], [74.0, 1028.0], [74.1, 1029.0], [74.2, 1031.0], [74.3, 1033.0], [74.4, 1033.0], [74.5, 1033.0], [74.6, 1033.0], [74.7, 1036.0], [74.8, 1036.0], [74.9, 1036.0], [75.0, 1037.0], [75.1, 1037.0], [75.2, 1038.0], [75.3, 1040.0], [75.4, 1050.0], [75.5, 1050.0], [75.6, 1054.0], [75.7, 1055.0], [75.8, 1059.0], [75.9, 1059.0], [76.0, 1062.0], [76.1, 1063.0], [76.2, 1066.0], [76.3, 1066.0], [76.4, 1068.0], [76.5, 1072.0], [76.6, 1075.0], [76.7, 1075.0], [76.8, 1078.0], [76.9, 1078.0], [77.0, 1078.0], [77.1, 1081.0], [77.2, 1081.0], [77.3, 1082.0], [77.4, 1082.0], [77.5, 1083.0], [77.6, 1083.0], [77.7, 1084.0], [77.8, 1084.0], [77.9, 1086.0], [78.0, 1086.0], [78.1, 1087.0], [78.2, 1087.0], [78.3, 1088.0], [78.4, 1091.0], [78.5, 1091.0], [78.6, 1095.0], [78.7, 1095.0], [78.8, 1096.0], [78.9, 1096.0], [79.0, 1100.0], [79.1, 1100.0], [79.2, 1103.0], [79.3, 1103.0], [79.4, 1105.0], [79.5, 1105.0], [79.6, 1107.0], [79.7, 1107.0], [79.8, 1108.0], [79.9, 1110.0], [80.0, 1111.0], [80.1, 1111.0], [80.2, 1113.0], [80.3, 1114.0], [80.4, 1114.0], [80.5, 1114.0], [80.6, 1117.0], [80.7, 1120.0], [80.8, 1120.0], [80.9, 1129.0], [81.0, 1131.0], [81.1, 1133.0], [81.2, 1133.0], [81.3, 1135.0], [81.4, 1136.0], [81.5, 1138.0], [81.6, 1138.0], [81.7, 1141.0], [81.8, 1141.0], [81.9, 1141.0], [82.0, 1142.0], [82.1, 1143.0], [82.2, 1145.0], [82.3, 1145.0], [82.4, 1145.0], [82.5, 1146.0], [82.6, 1148.0], [82.7, 1148.0], [82.8, 1148.0], [82.9, 1149.0], [83.0, 1151.0], [83.1, 1151.0], [83.2, 1154.0], [83.3, 1159.0], [83.4, 1159.0], [83.5, 1162.0], [83.6, 1164.0], [83.7, 1169.0], [83.8, 1169.0], [83.9, 1170.0], [84.0, 1171.0], [84.1, 1172.0], [84.2, 1172.0], [84.3, 1173.0], [84.4, 1174.0], [84.5, 1175.0], [84.6, 1175.0], [84.7, 1179.0], [84.8, 1183.0], [84.9, 1183.0], [85.0, 1183.0], [85.1, 1184.0], [85.2, 1186.0], [85.3, 1186.0], [85.4, 1187.0], [85.5, 1190.0], [85.6, 1192.0], [85.7, 1192.0], [85.8, 1199.0], [85.9, 1200.0], [86.0, 1200.0], [86.1, 1200.0], [86.2, 1203.0], [86.3, 1205.0], [86.4, 1205.0], [86.5, 1205.0], [86.6, 1205.0], [86.7, 1205.0], [86.8, 1205.0], [86.9, 1206.0], [87.0, 1211.0], [87.1, 1211.0], [87.2, 1211.0], [87.3, 1213.0], [87.4, 1214.0], [87.5, 1217.0], [87.6, 1217.0], [87.7, 1218.0], [87.8, 1219.0], [87.9, 1221.0], [88.0, 1221.0], [88.1, 1222.0], [88.2, 1222.0], [88.3, 1229.0], [88.4, 1229.0], [88.5, 1237.0], [88.6, 1237.0], [88.7, 1237.0], [88.8, 1238.0], [88.9, 1239.0], [89.0, 1240.0], [89.1, 1240.0], [89.2, 1244.0], [89.3, 1249.0], [89.4, 1250.0], [89.5, 1250.0], [89.6, 1261.0], [89.7, 1261.0], [89.8, 1261.0], [89.9, 1261.0], [90.0, 1262.0], [90.1, 1263.0], [90.2, 1263.0], [90.3, 1264.0], [90.4, 1278.0], [90.5, 1283.0], [90.6, 1283.0], [90.7, 1284.0], [90.8, 1285.0], [90.9, 1289.0], [91.0, 1289.0], [91.1, 1289.0], [91.2, 1291.0], [91.3, 1291.0], [91.4, 1291.0], [91.5, 1293.0], [91.6, 1295.0], [91.7, 1295.0], [91.8, 1301.0], [91.9, 1304.0], [92.0, 1314.0], [92.1, 1314.0], [92.2, 1317.0], [92.3, 1317.0], [92.4, 1319.0], [92.5, 1319.0], [92.6, 1324.0], [92.7, 1328.0], [92.8, 1331.0], [92.9, 1331.0], [93.0, 1333.0], [93.1, 1339.0], [93.2, 1343.0], [93.3, 1343.0], [93.4, 1356.0], [93.5, 1356.0], [93.6, 1356.0], [93.7, 1357.0], [93.8, 1364.0], [93.9, 1365.0], [94.0, 1365.0], [94.1, 1369.0], [94.2, 1374.0], [94.3, 1399.0], [94.4, 1399.0], [94.5, 1409.0], [94.6, 1427.0], [94.7, 1434.0], [94.8, 1434.0], [94.9, 1435.0], [95.0, 1472.0], [95.1, 1472.0], [95.2, 1478.0], [95.3, 1488.0], [95.4, 1489.0], [95.5, 1489.0], [95.6, 1500.0], [95.7, 1501.0], [95.8, 1513.0], [95.9, 1513.0], [96.0, 1527.0], [96.1, 1536.0], [96.2, 1553.0], [96.3, 1553.0], [96.4, 1554.0], [96.5, 1579.0], [96.6, 1618.0], [96.7, 1618.0], [96.8, 1621.0], [96.9, 1631.0], [97.0, 1631.0], [97.1, 1660.0], [97.2, 1689.0], [97.3, 1723.0], [97.4, 1723.0], [97.5, 1765.0], [97.6, 1770.0], [97.7, 1818.0], [97.8, 1818.0], [97.9, 1845.0], [98.0, 1965.0], [98.1, 2028.0], [98.2, 2028.0], [98.3, 2147.0], [98.4, 2279.0], [98.5, 2279.0], [98.6, 2470.0], [98.7, 2471.0], [98.8, 2785.0], [98.9, 2785.0], [99.0, 2798.0], [99.1, 2804.0], [99.2, 2848.0], [99.3, 2848.0], [99.4, 2875.0], [99.5, 2986.0], [99.6, 3163.0], [99.7, 3163.0], [99.8, 3515.0], [99.9, 3685.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 96.0, "series": [{"data": [[600.0, 66.0], [700.0, 77.0], [800.0, 74.0], [900.0, 58.0], [1000.0, 48.0], [1100.0, 51.0], [1200.0, 43.0], [1300.0, 20.0], [1400.0, 8.0], [1500.0, 8.0], [100.0, 9.0], [1600.0, 5.0], [1700.0, 3.0], [1800.0, 2.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2200.0, 1.0], [2400.0, 2.0], [2800.0, 3.0], [2700.0, 2.0], [2900.0, 1.0], [3100.0, 1.0], [200.0, 38.0], [3500.0, 1.0], [3600.0, 1.0], [300.0, 51.0], [400.0, 63.0], [500.0, 96.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 32.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 540.0, "series": [{"data": [[0.0, 163.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 540.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 32.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.938608458390176, "minX": 1.60223502E12, "maxY": 10.0, "series": [{"data": [[1.60223502E12, 10.0], [1.60223508E12, 9.938608458390176]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223508E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 382.0, "minX": 1.0, "maxY": 1036.0, "series": [{"data": [[8.0, 382.0], [4.0, 579.0], [2.0, 932.0], [1.0, 1036.0], [9.0, 553.0], [10.0, 818.5123966942152], [5.0, 543.0], [6.0, 598.0], [3.0, 1017.0], [7.0, 599.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 816.9782312925174]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15.133333333333333, "minX": 1.60223502E12, "maxY": 1835072.85, "series": [{"data": [[1.60223502E12, 732.8666666666667], [1.60223508E12, 1835072.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223502E12, 15.133333333333333], [1.60223508E12, 5507.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223508E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 812.7271487039561, "minX": 1.60223502E12, "maxY": 2375.0, "series": [{"data": [[1.60223502E12, 2375.0], [1.60223508E12, 812.7271487039561]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223508E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 811.720327421556, "minX": 1.60223502E12, "maxY": 2373.5, "series": [{"data": [[1.60223502E12, 2373.5], [1.60223508E12, 811.720327421556]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223508E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.15006821282401095, "minX": 1.60223502E12, "maxY": 11.0, "series": [{"data": [[1.60223502E12, 11.0], [1.60223508E12, 0.15006821282401095]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223508E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60223502E12, "maxY": 3685.0, "series": [{"data": [[1.60223502E12, 2471.0], [1.60223508E12, 3685.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223502E12, 2279.0], [1.60223508E12, 195.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223502E12, 2279.0], [1.60223508E12, 195.5332001399994]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223502E12, 2279.0], [1.60223508E12, 195.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223502E12, 2279.0], [1.60223508E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223502E12, 2375.0], [1.60223508E12, 757.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223508E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 493.0, "minX": 2.0, "maxY": 1657.5, "series": [{"data": [[2.0, 1657.5], [8.0, 1015.0], [9.0, 1079.0], [10.0, 862.0], [11.0, 859.0], [12.0, 820.0], [13.0, 776.0], [14.0, 802.5], [15.0, 638.0], [16.0, 632.5], [17.0, 622.0], [18.0, 528.5], [5.0, 841.0], [21.0, 493.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 493.0, "minX": 2.0, "maxY": 1657.5, "series": [{"data": [[2.0, 1657.5], [8.0, 1013.0], [9.0, 1078.0], [10.0, 860.5], [11.0, 858.5], [12.0, 819.0], [13.0, 774.0], [14.0, 801.5], [15.0, 635.0], [16.0, 632.0], [17.0, 621.0], [18.0, 528.0], [5.0, 841.0], [21.0, 493.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.60223502E12, "maxY": 12.05, "series": [{"data": [[1.60223502E12, 0.2], [1.60223508E12, 12.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223508E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60223502E12, "maxY": 12.216666666666667, "series": [{"data": [[1.60223502E12, 0.03333333333333333], [1.60223508E12, 12.216666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223508E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60223502E12, "maxY": 12.216666666666667, "series": [{"data": [[1.60223502E12, 0.03333333333333333], [1.60223508E12, 12.216666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223508E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60223502E12, "maxY": 12.216666666666667, "series": [{"data": [[1.60223502E12, 0.03333333333333333], [1.60223508E12, 12.216666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223508E12, "title": "Total Transactions Per Second"}},
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

