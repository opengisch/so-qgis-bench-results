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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 3660.0, "series": [{"data": [[0.0, 182.0], [0.1, 182.0], [0.2, 192.0], [0.3, 193.0], [0.4, 193.0], [0.5, 197.0], [0.6, 198.0], [0.7, 198.0], [0.8, 198.0], [0.9, 198.0], [1.0, 198.0], [1.1, 207.0], [1.2, 207.0], [1.3, 210.0], [1.4, 212.0], [1.5, 214.0], [1.6, 214.0], [1.7, 219.0], [1.8, 219.0], [1.9, 219.0], [2.0, 222.0], [2.1, 223.0], [2.2, 223.0], [2.3, 223.0], [2.4, 224.0], [2.5, 226.0], [2.6, 229.0], [2.7, 229.0], [2.8, 231.0], [2.9, 252.0], [3.0, 253.0], [3.1, 253.0], [3.2, 256.0], [3.3, 256.0], [3.4, 256.0], [3.5, 262.0], [3.6, 263.0], [3.7, 264.0], [3.8, 264.0], [3.9, 265.0], [4.0, 266.0], [4.1, 266.0], [4.2, 266.0], [4.3, 272.0], [4.4, 275.0], [4.5, 276.0], [4.6, 276.0], [4.7, 280.0], [4.8, 281.0], [4.9, 283.0], [5.0, 283.0], [5.1, 283.0], [5.2, 284.0], [5.3, 284.0], [5.4, 284.0], [5.5, 285.0], [5.6, 289.0], [5.7, 289.0], [5.8, 292.0], [5.9, 292.0], [6.0, 293.0], [6.1, 293.0], [6.2, 294.0], [6.3, 295.0], [6.4, 295.0], [6.5, 295.0], [6.6, 297.0], [6.7, 298.0], [6.8, 298.0], [6.9, 298.0], [7.0, 298.0], [7.1, 299.0], [7.2, 299.0], [7.3, 300.0], [7.4, 300.0], [7.5, 301.0], [7.6, 301.0], [7.7, 302.0], [7.8, 302.0], [7.9, 306.0], [8.0, 306.0], [8.1, 312.0], [8.2, 314.0], [8.3, 316.0], [8.4, 316.0], [8.5, 318.0], [8.6, 318.0], [8.7, 318.0], [8.8, 319.0], [8.9, 321.0], [9.0, 321.0], [9.1, 321.0], [9.2, 326.0], [9.3, 327.0], [9.4, 329.0], [9.5, 329.0], [9.6, 329.0], [9.7, 331.0], [9.8, 335.0], [9.9, 335.0], [10.0, 336.0], [10.1, 336.0], [10.2, 336.0], [10.3, 340.0], [10.4, 346.0], [10.5, 347.0], [10.6, 347.0], [10.7, 348.0], [10.8, 348.0], [10.9, 349.0], [11.0, 349.0], [11.1, 350.0], [11.2, 352.0], [11.3, 355.0], [11.4, 355.0], [11.5, 356.0], [11.6, 357.0], [11.7, 357.0], [11.8, 358.0], [11.9, 361.0], [12.0, 363.0], [12.1, 363.0], [12.2, 367.0], [12.3, 369.0], [12.4, 371.0], [12.5, 371.0], [12.6, 372.0], [12.7, 374.0], [12.8, 375.0], [12.9, 375.0], [13.0, 379.0], [13.1, 380.0], [13.2, 380.0], [13.3, 380.0], [13.4, 382.0], [13.5, 383.0], [13.6, 383.0], [13.7, 384.0], [13.8, 384.0], [13.9, 387.0], [14.0, 387.0], [14.1, 390.0], [14.2, 391.0], [14.3, 394.0], [14.4, 394.0], [14.5, 394.0], [14.6, 395.0], [14.7, 396.0], [14.8, 396.0], [14.9, 398.0], [15.0, 398.0], [15.1, 398.0], [15.2, 406.0], [15.3, 407.0], [15.4, 409.0], [15.5, 409.0], [15.6, 410.0], [15.7, 412.0], [15.8, 412.0], [15.9, 412.0], [16.0, 413.0], [16.1, 415.0], [16.2, 417.0], [16.3, 417.0], [16.4, 422.0], [16.5, 423.0], [16.6, 423.0], [16.7, 423.0], [16.8, 423.0], [16.9, 423.0], [17.0, 423.0], [17.1, 424.0], [17.2, 429.0], [17.3, 430.0], [17.4, 430.0], [17.5, 433.0], [17.6, 434.0], [17.7, 434.0], [17.8, 434.0], [17.9, 435.0], [18.0, 441.0], [18.1, 442.0], [18.2, 442.0], [18.3, 442.0], [18.4, 443.0], [18.5, 443.0], [18.6, 444.0], [18.7, 446.0], [18.8, 447.0], [18.9, 447.0], [19.0, 449.0], [19.1, 450.0], [19.2, 451.0], [19.3, 451.0], [19.4, 454.0], [19.5, 455.0], [19.6, 459.0], [19.7, 459.0], [19.8, 461.0], [19.9, 461.0], [20.0, 462.0], [20.1, 462.0], [20.2, 462.0], [20.3, 464.0], [20.4, 464.0], [20.5, 464.0], [20.6, 465.0], [20.7, 465.0], [20.8, 465.0], [20.9, 468.0], [21.0, 474.0], [21.1, 476.0], [21.2, 476.0], [21.3, 488.0], [21.4, 489.0], [21.5, 490.0], [21.6, 490.0], [21.7, 491.0], [21.8, 491.0], [21.9, 491.0], [22.0, 496.0], [22.1, 497.0], [22.2, 503.0], [22.3, 503.0], [22.4, 504.0], [22.5, 505.0], [22.6, 509.0], [22.7, 509.0], [22.8, 511.0], [22.9, 511.0], [23.0, 512.0], [23.1, 512.0], [23.2, 512.0], [23.3, 513.0], [23.4, 513.0], [23.5, 514.0], [23.6, 514.0], [23.7, 515.0], [23.8, 515.0], [23.9, 517.0], [24.0, 518.0], [24.1, 520.0], [24.2, 520.0], [24.3, 522.0], [24.4, 522.0], [24.5, 524.0], [24.6, 524.0], [24.7, 526.0], [24.8, 526.0], [24.9, 528.0], [25.0, 528.0], [25.1, 528.0], [25.2, 530.0], [25.3, 530.0], [25.4, 533.0], [25.5, 533.0], [25.6, 534.0], [25.7, 534.0], [25.8, 537.0], [25.9, 537.0], [26.0, 537.0], [26.1, 537.0], [26.2, 538.0], [26.3, 538.0], [26.4, 539.0], [26.5, 539.0], [26.6, 539.0], [26.7, 540.0], [26.8, 540.0], [26.9, 541.0], [27.0, 542.0], [27.1, 544.0], [27.2, 544.0], [27.3, 544.0], [27.4, 544.0], [27.5, 545.0], [27.6, 545.0], [27.7, 547.0], [27.8, 548.0], [27.9, 549.0], [28.0, 549.0], [28.1, 549.0], [28.2, 550.0], [28.3, 550.0], [28.4, 550.0], [28.5, 552.0], [28.6, 554.0], [28.7, 554.0], [28.8, 555.0], [28.9, 556.0], [29.0, 559.0], [29.1, 559.0], [29.2, 560.0], [29.3, 562.0], [29.4, 564.0], [29.5, 564.0], [29.6, 566.0], [29.7, 567.0], [29.8, 571.0], [29.9, 571.0], [30.0, 572.0], [30.1, 572.0], [30.2, 572.0], [30.3, 573.0], [30.4, 575.0], [30.5, 577.0], [30.6, 577.0], [30.7, 578.0], [30.8, 581.0], [30.9, 585.0], [31.0, 585.0], [31.1, 587.0], [31.2, 588.0], [31.3, 589.0], [31.4, 589.0], [31.5, 591.0], [31.6, 594.0], [31.7, 594.0], [31.8, 595.0], [31.9, 596.0], [32.0, 597.0], [32.1, 597.0], [32.2, 597.0], [32.3, 599.0], [32.4, 600.0], [32.5, 600.0], [32.6, 601.0], [32.7, 602.0], [32.8, 603.0], [32.9, 603.0], [33.0, 603.0], [33.1, 606.0], [33.2, 607.0], [33.3, 607.0], [33.4, 607.0], [33.5, 607.0], [33.6, 607.0], [33.7, 608.0], [33.8, 609.0], [33.9, 609.0], [34.0, 609.0], [34.1, 610.0], [34.2, 612.0], [34.3, 612.0], [34.4, 612.0], [34.5, 613.0], [34.6, 616.0], [34.7, 617.0], [34.8, 617.0], [34.9, 618.0], [35.0, 622.0], [35.1, 622.0], [35.2, 624.0], [35.3, 625.0], [35.4, 625.0], [35.5, 625.0], [35.6, 626.0], [35.7, 628.0], [35.8, 629.0], [35.9, 629.0], [36.0, 632.0], [36.1, 632.0], [36.2, 633.0], [36.3, 633.0], [36.4, 634.0], [36.5, 634.0], [36.6, 635.0], [36.7, 635.0], [36.8, 636.0], [36.9, 637.0], [37.0, 637.0], [37.1, 637.0], [37.2, 639.0], [37.3, 639.0], [37.4, 639.0], [37.5, 640.0], [37.6, 641.0], [37.7, 642.0], [37.8, 642.0], [37.9, 642.0], [38.0, 643.0], [38.1, 645.0], [38.2, 645.0], [38.3, 648.0], [38.4, 651.0], [38.5, 651.0], [38.6, 652.0], [38.7, 653.0], [38.8, 654.0], [38.9, 654.0], [39.0, 656.0], [39.1, 656.0], [39.2, 659.0], [39.3, 659.0], [39.4, 662.0], [39.5, 663.0], [39.6, 663.0], [39.7, 663.0], [39.8, 666.0], [39.9, 666.0], [40.0, 668.0], [40.1, 668.0], [40.2, 673.0], [40.3, 674.0], [40.4, 674.0], [40.5, 675.0], [40.6, 677.0], [40.7, 680.0], [40.8, 680.0], [40.9, 681.0], [41.0, 683.0], [41.1, 687.0], [41.2, 687.0], [41.3, 688.0], [41.4, 689.0], [41.5, 689.0], [41.6, 689.0], [41.7, 690.0], [41.8, 692.0], [41.9, 692.0], [42.0, 693.0], [42.1, 694.0], [42.2, 695.0], [42.3, 695.0], [42.4, 695.0], [42.5, 696.0], [42.6, 699.0], [42.7, 699.0], [42.8, 700.0], [42.9, 703.0], [43.0, 705.0], [43.1, 705.0], [43.2, 710.0], [43.3, 712.0], [43.4, 712.0], [43.5, 713.0], [43.6, 717.0], [43.7, 717.0], [43.8, 717.0], [43.9, 719.0], [44.0, 720.0], [44.1, 720.0], [44.2, 720.0], [44.3, 724.0], [44.4, 725.0], [44.5, 726.0], [44.6, 726.0], [44.7, 726.0], [44.8, 729.0], [44.9, 733.0], [45.0, 733.0], [45.1, 734.0], [45.2, 734.0], [45.3, 734.0], [45.4, 735.0], [45.5, 735.0], [45.6, 738.0], [45.7, 738.0], [45.8, 739.0], [45.9, 741.0], [46.0, 742.0], [46.1, 742.0], [46.2, 753.0], [46.3, 754.0], [46.4, 754.0], [46.5, 754.0], [46.6, 755.0], [46.7, 758.0], [46.8, 758.0], [46.9, 760.0], [47.0, 761.0], [47.1, 766.0], [47.2, 766.0], [47.3, 766.0], [47.4, 767.0], [47.5, 769.0], [47.6, 769.0], [47.7, 775.0], [47.8, 776.0], [47.9, 778.0], [48.0, 778.0], [48.1, 779.0], [48.2, 781.0], [48.3, 782.0], [48.4, 782.0], [48.5, 786.0], [48.6, 788.0], [48.7, 788.0], [48.8, 793.0], [48.9, 794.0], [49.0, 797.0], [49.1, 797.0], [49.2, 799.0], [49.3, 802.0], [49.4, 802.0], [49.5, 802.0], [49.6, 804.0], [49.7, 804.0], [49.8, 806.0], [49.9, 806.0], [50.0, 808.0], [50.1, 808.0], [50.2, 808.0], [50.3, 809.0], [50.4, 809.0], [50.5, 810.0], [50.6, 810.0], [50.7, 810.0], [50.8, 811.0], [50.9, 811.0], [51.0, 811.0], [51.1, 812.0], [51.2, 817.0], [51.3, 817.0], [51.4, 817.0], [51.5, 819.0], [51.6, 822.0], [51.7, 822.0], [51.8, 826.0], [51.9, 827.0], [52.0, 829.0], [52.1, 829.0], [52.2, 831.0], [52.3, 832.0], [52.4, 832.0], [52.5, 832.0], [52.6, 833.0], [52.7, 833.0], [52.8, 834.0], [52.9, 834.0], [53.0, 835.0], [53.1, 835.0], [53.2, 836.0], [53.3, 836.0], [53.4, 836.0], [53.5, 836.0], [53.6, 836.0], [53.7, 843.0], [53.8, 847.0], [53.9, 849.0], [54.0, 849.0], [54.1, 850.0], [54.2, 854.0], [54.3, 854.0], [54.4, 854.0], [54.5, 854.0], [54.6, 855.0], [54.7, 855.0], [54.8, 855.0], [54.9, 855.0], [55.0, 857.0], [55.1, 857.0], [55.2, 860.0], [55.3, 860.0], [55.4, 861.0], [55.5, 861.0], [55.6, 862.0], [55.7, 864.0], [55.8, 865.0], [55.9, 865.0], [56.0, 866.0], [56.1, 866.0], [56.2, 868.0], [56.3, 868.0], [56.4, 869.0], [56.5, 869.0], [56.6, 873.0], [56.7, 873.0], [56.8, 879.0], [56.9, 879.0], [57.0, 879.0], [57.1, 882.0], [57.2, 882.0], [57.3, 884.0], [57.4, 884.0], [57.5, 884.0], [57.6, 885.0], [57.7, 885.0], [57.8, 885.0], [57.9, 887.0], [58.0, 887.0], [58.1, 888.0], [58.2, 888.0], [58.3, 889.0], [58.4, 889.0], [58.5, 889.0], [58.6, 889.0], [58.7, 890.0], [58.8, 891.0], [58.9, 891.0], [59.0, 891.0], [59.1, 892.0], [59.2, 892.0], [59.3, 892.0], [59.4, 894.0], [59.5, 899.0], [59.6, 900.0], [59.7, 900.0], [59.8, 901.0], [59.9, 902.0], [60.0, 902.0], [60.1, 902.0], [60.2, 907.0], [60.3, 907.0], [60.4, 907.0], [60.5, 908.0], [60.6, 909.0], [60.7, 911.0], [60.8, 911.0], [60.9, 912.0], [61.0, 919.0], [61.1, 919.0], [61.2, 919.0], [61.3, 921.0], [61.4, 922.0], [61.5, 922.0], [61.6, 922.0], [61.7, 928.0], [61.8, 929.0], [61.9, 929.0], [62.0, 929.0], [62.1, 932.0], [62.2, 932.0], [62.3, 932.0], [62.4, 936.0], [62.5, 938.0], [62.6, 941.0], [62.7, 941.0], [62.8, 944.0], [62.9, 946.0], [63.0, 946.0], [63.1, 946.0], [63.2, 947.0], [63.3, 949.0], [63.4, 949.0], [63.5, 950.0], [63.6, 953.0], [63.7, 956.0], [63.8, 956.0], [63.9, 956.0], [64.0, 956.0], [64.1, 956.0], [64.2, 956.0], [64.3, 961.0], [64.4, 961.0], [64.5, 962.0], [64.6, 962.0], [64.7, 962.0], [64.8, 965.0], [64.9, 966.0], [65.0, 966.0], [65.1, 972.0], [65.2, 972.0], [65.3, 972.0], [65.4, 972.0], [65.5, 977.0], [65.6, 977.0], [65.7, 977.0], [65.8, 980.0], [65.9, 981.0], [66.0, 982.0], [66.1, 982.0], [66.2, 986.0], [66.3, 986.0], [66.4, 986.0], [66.5, 986.0], [66.6, 986.0], [66.7, 987.0], [66.8, 987.0], [66.9, 991.0], [67.0, 991.0], [67.1, 994.0], [67.2, 994.0], [67.3, 996.0], [67.4, 997.0], [67.5, 998.0], [67.6, 998.0], [67.7, 999.0], [67.8, 1001.0], [67.9, 1002.0], [68.0, 1002.0], [68.1, 1002.0], [68.2, 1003.0], [68.3, 1003.0], [68.4, 1003.0], [68.5, 1005.0], [68.6, 1005.0], [68.7, 1005.0], [68.8, 1005.0], [68.9, 1008.0], [69.0, 1008.0], [69.1, 1008.0], [69.2, 1010.0], [69.3, 1012.0], [69.4, 1012.0], [69.5, 1012.0], [69.6, 1014.0], [69.7, 1016.0], [69.8, 1017.0], [69.9, 1017.0], [70.0, 1017.0], [70.1, 1025.0], [70.2, 1025.0], [70.3, 1026.0], [70.4, 1027.0], [70.5, 1031.0], [70.6, 1031.0], [70.7, 1034.0], [70.8, 1038.0], [70.9, 1043.0], [71.0, 1043.0], [71.1, 1046.0], [71.2, 1047.0], [71.3, 1049.0], [71.4, 1049.0], [71.5, 1054.0], [71.6, 1055.0], [71.7, 1055.0], [71.8, 1057.0], [71.9, 1058.0], [72.0, 1058.0], [72.1, 1058.0], [72.2, 1059.0], [72.3, 1060.0], [72.4, 1060.0], [72.5, 1060.0], [72.6, 1061.0], [72.7, 1062.0], [72.8, 1063.0], [72.9, 1063.0], [73.0, 1063.0], [73.1, 1067.0], [73.2, 1068.0], [73.3, 1068.0], [73.4, 1069.0], [73.5, 1070.0], [73.6, 1070.0], [73.7, 1070.0], [73.8, 1070.0], [73.9, 1071.0], [74.0, 1071.0], [74.1, 1074.0], [74.2, 1075.0], [74.3, 1076.0], [74.4, 1076.0], [74.5, 1085.0], [74.6, 1086.0], [74.7, 1086.0], [74.8, 1086.0], [74.9, 1087.0], [75.0, 1088.0], [75.1, 1088.0], [75.2, 1088.0], [75.3, 1090.0], [75.4, 1091.0], [75.5, 1091.0], [75.6, 1091.0], [75.7, 1095.0], [75.8, 1095.0], [75.9, 1095.0], [76.0, 1096.0], [76.1, 1096.0], [76.2, 1097.0], [76.3, 1097.0], [76.4, 1100.0], [76.5, 1101.0], [76.6, 1102.0], [76.7, 1102.0], [76.8, 1109.0], [76.9, 1109.0], [77.0, 1109.0], [77.1, 1110.0], [77.2, 1112.0], [77.3, 1114.0], [77.4, 1114.0], [77.5, 1115.0], [77.6, 1115.0], [77.7, 1118.0], [77.8, 1118.0], [77.9, 1118.0], [78.0, 1119.0], [78.1, 1120.0], [78.2, 1120.0], [78.3, 1126.0], [78.4, 1126.0], [78.5, 1126.0], [78.6, 1131.0], [78.7, 1131.0], [78.8, 1131.0], [78.9, 1131.0], [79.0, 1132.0], [79.1, 1132.0], [79.2, 1132.0], [79.3, 1132.0], [79.4, 1133.0], [79.5, 1133.0], [79.6, 1133.0], [79.7, 1133.0], [79.8, 1135.0], [79.9, 1138.0], [80.0, 1140.0], [80.1, 1140.0], [80.2, 1141.0], [80.3, 1145.0], [80.4, 1145.0], [80.5, 1146.0], [80.6, 1148.0], [80.7, 1150.0], [80.8, 1150.0], [80.9, 1152.0], [81.0, 1154.0], [81.1, 1158.0], [81.2, 1158.0], [81.3, 1165.0], [81.4, 1165.0], [81.5, 1168.0], [81.6, 1168.0], [81.7, 1168.0], [81.8, 1169.0], [81.9, 1169.0], [82.0, 1169.0], [82.1, 1172.0], [82.2, 1173.0], [82.3, 1173.0], [82.4, 1174.0], [82.5, 1174.0], [82.6, 1178.0], [82.7, 1178.0], [82.8, 1180.0], [82.9, 1181.0], [83.0, 1181.0], [83.1, 1181.0], [83.2, 1183.0], [83.3, 1183.0], [83.4, 1183.0], [83.5, 1187.0], [83.6, 1188.0], [83.7, 1190.0], [83.8, 1190.0], [83.9, 1193.0], [84.0, 1196.0], [84.1, 1198.0], [84.2, 1198.0], [84.3, 1198.0], [84.4, 1200.0], [84.5, 1202.0], [84.6, 1202.0], [84.7, 1209.0], [84.8, 1209.0], [84.9, 1210.0], [85.0, 1210.0], [85.1, 1211.0], [85.2, 1214.0], [85.3, 1214.0], [85.4, 1216.0], [85.5, 1216.0], [85.6, 1216.0], [85.7, 1216.0], [85.8, 1222.0], [85.9, 1229.0], [86.0, 1230.0], [86.1, 1230.0], [86.2, 1230.0], [86.3, 1231.0], [86.4, 1240.0], [86.5, 1240.0], [86.6, 1243.0], [86.7, 1245.0], [86.8, 1245.0], [86.9, 1251.0], [87.0, 1254.0], [87.1, 1256.0], [87.2, 1256.0], [87.3, 1258.0], [87.4, 1263.0], [87.5, 1267.0], [87.6, 1267.0], [87.7, 1268.0], [87.8, 1274.0], [87.9, 1275.0], [88.0, 1275.0], [88.1, 1275.0], [88.2, 1283.0], [88.3, 1287.0], [88.4, 1287.0], [88.5, 1288.0], [88.6, 1289.0], [88.7, 1289.0], [88.8, 1295.0], [88.9, 1297.0], [89.0, 1300.0], [89.1, 1300.0], [89.2, 1301.0], [89.3, 1303.0], [89.4, 1304.0], [89.5, 1304.0], [89.6, 1317.0], [89.7, 1319.0], [89.8, 1321.0], [89.9, 1321.0], [90.0, 1322.0], [90.1, 1323.0], [90.2, 1323.0], [90.3, 1327.0], [90.4, 1338.0], [90.5, 1340.0], [90.6, 1340.0], [90.7, 1340.0], [90.8, 1341.0], [90.9, 1344.0], [91.0, 1344.0], [91.1, 1344.0], [91.2, 1368.0], [91.3, 1382.0], [91.4, 1382.0], [91.5, 1382.0], [91.6, 1385.0], [91.7, 1385.0], [91.8, 1388.0], [91.9, 1397.0], [92.0, 1397.0], [92.1, 1397.0], [92.2, 1407.0], [92.3, 1410.0], [92.4, 1411.0], [92.5, 1411.0], [92.6, 1416.0], [92.7, 1422.0], [92.8, 1428.0], [92.9, 1428.0], [93.0, 1429.0], [93.1, 1439.0], [93.2, 1441.0], [93.3, 1441.0], [93.4, 1447.0], [93.5, 1449.0], [93.6, 1449.0], [93.7, 1454.0], [93.8, 1454.0], [93.9, 1457.0], [94.0, 1457.0], [94.1, 1458.0], [94.2, 1465.0], [94.3, 1486.0], [94.4, 1486.0], [94.5, 1498.0], [94.6, 1505.0], [94.7, 1506.0], [94.8, 1506.0], [94.9, 1517.0], [95.0, 1517.0], [95.1, 1517.0], [95.2, 1542.0], [95.3, 1569.0], [95.4, 1580.0], [95.5, 1580.0], [95.6, 1588.0], [95.7, 1590.0], [95.8, 1590.0], [95.9, 1590.0], [96.0, 1599.0], [96.1, 1614.0], [96.2, 1657.0], [96.3, 1657.0], [96.4, 1657.0], [96.5, 1674.0], [96.6, 1675.0], [96.7, 1675.0], [96.8, 1744.0], [96.9, 1763.0], [97.0, 1763.0], [97.1, 1794.0], [97.2, 1813.0], [97.3, 1816.0], [97.4, 1816.0], [97.5, 1844.0], [97.6, 1929.0], [97.7, 2063.0], [97.8, 2063.0], [97.9, 2170.0], [98.0, 2183.0], [98.1, 2235.0], [98.2, 2235.0], [98.3, 2411.0], [98.4, 2466.0], [98.5, 2466.0], [98.6, 2535.0], [98.7, 2586.0], [98.8, 2782.0], [98.9, 2782.0], [99.0, 2794.0], [99.1, 2810.0], [99.2, 2814.0], [99.3, 2814.0], [99.4, 2985.0], [99.5, 3159.0], [99.6, 3272.0], [99.7, 3272.0], [99.8, 3520.0], [99.9, 3660.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 76.0, "series": [{"data": [[600.0, 76.0], [700.0, 48.0], [800.0, 76.0], [900.0, 60.0], [1000.0, 63.0], [1100.0, 59.0], [1200.0, 34.0], [1300.0, 23.0], [1400.0, 18.0], [1500.0, 11.0], [1600.0, 5.0], [100.0, 8.0], [1700.0, 3.0], [1800.0, 3.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 2.0], [2200.0, 1.0], [2400.0, 2.0], [2500.0, 2.0], [2700.0, 2.0], [2800.0, 2.0], [2900.0, 1.0], [3100.0, 1.0], [200.0, 45.0], [3200.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [300.0, 58.0], [400.0, 52.0], [500.0, 75.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 40.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 532.0, "series": [{"data": [[0.0, 163.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 532.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 40.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.924874791318864, "minX": 1.60237374E12, "maxY": 10.0, "series": [{"data": [[1.60237374E12, 10.0], [1.6023738E12, 9.924874791318864]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023738E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 301.0, "minX": 1.0, "maxY": 1008.0, "series": [{"data": [[8.0, 301.0], [4.0, 602.0], [2.0, 578.0], [1.0, 956.0], [9.0, 524.0], [10.0, 849.230027548209], [5.0, 1008.0], [6.0, 712.0], [3.0, 491.0], [7.0, 607.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 846.6938775510201]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1029.8666666666666, "minX": 1.60237374E12, "maxY": 1372564.2833333334, "series": [{"data": [[1.60237374E12, 463213.48333333334], [1.6023738E12, 1372564.2833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237374E12, 1029.8666666666666], [1.6023738E12, 4493.166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023738E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 808.7145242070119, "minX": 1.60237374E12, "maxY": 1013.9705882352941, "series": [{"data": [[1.60237374E12, 1013.9705882352941], [1.6023738E12, 808.7145242070119]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023738E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 807.5492487479133, "minX": 1.60237374E12, "maxY": 1012.5514705882355, "series": [{"data": [[1.60237374E12, 1012.5514705882355], [1.6023738E12, 807.5492487479133]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023738E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.018363939899833058, "minX": 1.60237374E12, "maxY": 0.6911764705882348, "series": [{"data": [[1.60237374E12, 0.6911764705882348], [1.6023738E12, 0.018363939899833058]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023738E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.60237374E12, "maxY": 3660.0, "series": [{"data": [[1.60237374E12, 3660.0], [1.6023738E12, 3272.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237374E12, 193.39799980401992], [1.6023738E12, 198.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237374E12, 194.13780007839202], [1.6023738E12, 198.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237374E12, 193.80899990200996], [1.6023738E12, 198.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237374E12, 192.0], [1.6023738E12, 182.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237374E12, 810.0], [1.6023738E12, 806.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023738E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 493.0, "minX": 5.0, "maxY": 1441.0, "series": [{"data": [[8.0, 755.5], [9.0, 991.0], [10.0, 925.5], [11.0, 1012.0], [12.0, 863.0], [13.0, 900.0], [14.0, 686.0], [15.0, 635.0], [16.0, 645.0], [17.0, 540.0], [19.0, 493.0], [20.0, 540.5], [5.0, 602.0], [7.0, 1441.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 492.5, "minX": 5.0, "maxY": 1437.0, "series": [{"data": [[8.0, 754.0], [9.0, 991.0], [10.0, 924.0], [11.0, 1011.0], [12.0, 862.5], [13.0, 900.0], [14.0, 685.0], [15.0, 633.0], [16.0, 644.5], [17.0, 539.0], [19.0, 492.5], [20.0, 540.5], [5.0, 601.0], [7.0, 1437.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.433333333333333, "minX": 1.60237374E12, "maxY": 9.816666666666666, "series": [{"data": [[1.60237374E12, 2.433333333333333], [1.6023738E12, 9.816666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023738E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.2666666666666666, "minX": 1.60237374E12, "maxY": 9.983333333333333, "series": [{"data": [[1.60237374E12, 2.2666666666666666], [1.6023738E12, 9.983333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023738E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.2666666666666666, "minX": 1.60237374E12, "maxY": 9.983333333333333, "series": [{"data": [[1.60237374E12, 2.2666666666666666], [1.6023738E12, 9.983333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023738E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.2666666666666666, "minX": 1.60237374E12, "maxY": 9.983333333333333, "series": [{"data": [[1.60237374E12, 2.2666666666666666], [1.6023738E12, 9.983333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023738E12, "title": "Total Transactions Per Second"}},
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

