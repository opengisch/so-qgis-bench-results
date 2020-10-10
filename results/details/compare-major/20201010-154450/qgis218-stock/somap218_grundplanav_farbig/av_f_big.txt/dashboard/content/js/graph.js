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
        data: {"result": {"minY": 227.0, "minX": 0.0, "maxY": 9230.0, "series": [{"data": [[0.0, 227.0], [0.1, 227.0], [0.2, 227.0], [0.3, 227.0], [0.4, 227.0], [0.5, 229.0], [0.6, 234.0], [0.7, 238.0], [0.8, 238.0], [0.9, 242.0], [1.0, 243.0], [1.1, 243.0], [1.2, 243.0], [1.3, 253.0], [1.4, 255.0], [1.5, 256.0], [1.6, 256.0], [1.7, 262.0], [1.8, 264.0], [1.9, 264.0], [2.0, 267.0], [2.1, 268.0], [2.2, 269.0], [2.3, 269.0], [2.4, 272.0], [2.5, 276.0], [2.6, 276.0], [2.7, 276.0], [2.8, 284.0], [2.9, 285.0], [3.0, 289.0], [3.1, 289.0], [3.2, 294.0], [3.3, 299.0], [3.4, 299.0], [3.5, 304.0], [3.6, 304.0], [3.7, 305.0], [3.8, 305.0], [3.9, 310.0], [4.0, 315.0], [4.1, 315.0], [4.2, 315.0], [4.3, 319.0], [4.4, 321.0], [4.5, 325.0], [4.6, 325.0], [4.7, 326.0], [4.8, 328.0], [4.9, 329.0], [5.0, 329.0], [5.1, 332.0], [5.2, 335.0], [5.3, 335.0], [5.4, 339.0], [5.5, 340.0], [5.6, 342.0], [5.7, 342.0], [5.8, 344.0], [5.9, 348.0], [6.0, 349.0], [6.1, 349.0], [6.2, 352.0], [6.3, 354.0], [6.4, 355.0], [6.5, 355.0], [6.6, 362.0], [6.7, 363.0], [6.8, 363.0], [6.9, 364.0], [7.0, 364.0], [7.1, 367.0], [7.2, 367.0], [7.3, 367.0], [7.4, 368.0], [7.5, 368.0], [7.6, 368.0], [7.7, 373.0], [7.8, 374.0], [7.9, 375.0], [8.0, 375.0], [8.1, 377.0], [8.2, 380.0], [8.3, 381.0], [8.4, 381.0], [8.5, 381.0], [8.6, 382.0], [8.7, 382.0], [8.8, 382.0], [8.9, 383.0], [9.0, 384.0], [9.1, 384.0], [9.2, 385.0], [9.3, 388.0], [9.4, 388.0], [9.5, 388.0], [9.6, 390.0], [9.7, 390.0], [9.8, 392.0], [9.9, 392.0], [10.0, 393.0], [10.1, 394.0], [10.2, 394.0], [10.3, 395.0], [10.4, 397.0], [10.5, 401.0], [10.6, 401.0], [10.7, 401.0], [10.8, 401.0], [10.9, 402.0], [11.0, 402.0], [11.1, 405.0], [11.2, 405.0], [11.3, 407.0], [11.4, 407.0], [11.5, 407.0], [11.6, 408.0], [11.7, 408.0], [11.8, 410.0], [11.9, 411.0], [12.0, 411.0], [12.1, 411.0], [12.2, 411.0], [12.3, 411.0], [12.4, 412.0], [12.5, 412.0], [12.6, 414.0], [12.7, 417.0], [12.8, 418.0], [12.9, 418.0], [13.0, 418.0], [13.1, 419.0], [13.2, 425.0], [13.3, 425.0], [13.4, 426.0], [13.5, 427.0], [13.6, 427.0], [13.7, 427.0], [13.8, 428.0], [13.9, 430.0], [14.0, 430.0], [14.1, 431.0], [14.2, 432.0], [14.3, 434.0], [14.4, 434.0], [14.5, 435.0], [14.6, 435.0], [14.7, 435.0], [14.8, 435.0], [14.9, 438.0], [15.0, 438.0], [15.1, 438.0], [15.2, 440.0], [15.3, 440.0], [15.4, 441.0], [15.5, 441.0], [15.6, 441.0], [15.7, 443.0], [15.8, 444.0], [15.9, 444.0], [16.0, 444.0], [16.1, 445.0], [16.2, 445.0], [16.3, 445.0], [16.4, 445.0], [16.5, 446.0], [16.6, 446.0], [16.7, 446.0], [16.8, 446.0], [16.9, 447.0], [17.0, 447.0], [17.1, 450.0], [17.2, 451.0], [17.3, 452.0], [17.4, 452.0], [17.5, 453.0], [17.6, 453.0], [17.7, 453.0], [17.8, 453.0], [17.9, 454.0], [18.0, 456.0], [18.1, 458.0], [18.2, 458.0], [18.3, 459.0], [18.4, 460.0], [18.5, 460.0], [18.6, 460.0], [18.7, 460.0], [18.8, 460.0], [18.9, 460.0], [19.0, 461.0], [19.1, 461.0], [19.2, 464.0], [19.3, 464.0], [19.4, 465.0], [19.5, 466.0], [19.6, 466.0], [19.7, 466.0], [19.8, 467.0], [19.9, 468.0], [20.0, 468.0], [20.1, 468.0], [20.2, 470.0], [20.3, 471.0], [20.4, 471.0], [20.5, 472.0], [20.6, 473.0], [20.7, 473.0], [20.8, 473.0], [20.9, 473.0], [21.0, 474.0], [21.1, 474.0], [21.2, 474.0], [21.3, 475.0], [21.4, 475.0], [21.5, 475.0], [21.6, 475.0], [21.7, 476.0], [21.8, 476.0], [21.9, 476.0], [22.0, 478.0], [22.1, 478.0], [22.2, 478.0], [22.3, 478.0], [22.4, 479.0], [22.5, 480.0], [22.6, 480.0], [22.7, 480.0], [22.8, 480.0], [22.9, 481.0], [23.0, 481.0], [23.1, 481.0], [23.2, 481.0], [23.3, 481.0], [23.4, 481.0], [23.5, 482.0], [23.6, 482.0], [23.7, 484.0], [23.8, 484.0], [23.9, 485.0], [24.0, 485.0], [24.1, 485.0], [24.2, 485.0], [24.3, 486.0], [24.4, 487.0], [24.5, 489.0], [24.6, 489.0], [24.7, 489.0], [24.8, 490.0], [24.9, 490.0], [25.0, 490.0], [25.1, 490.0], [25.2, 492.0], [25.3, 492.0], [25.4, 492.0], [25.5, 493.0], [25.6, 494.0], [25.7, 494.0], [25.8, 494.0], [25.9, 496.0], [26.0, 498.0], [26.1, 498.0], [26.2, 498.0], [26.3, 499.0], [26.4, 499.0], [26.5, 499.0], [26.6, 500.0], [26.7, 500.0], [26.8, 500.0], [26.9, 502.0], [27.0, 504.0], [27.1, 504.0], [27.2, 504.0], [27.3, 505.0], [27.4, 507.0], [27.5, 508.0], [27.6, 508.0], [27.7, 508.0], [27.8, 508.0], [27.9, 509.0], [28.0, 509.0], [28.1, 510.0], [28.2, 510.0], [28.3, 516.0], [28.4, 516.0], [28.5, 516.0], [28.6, 517.0], [28.7, 517.0], [28.8, 518.0], [28.9, 519.0], [29.0, 519.0], [29.1, 519.0], [29.2, 520.0], [29.3, 521.0], [29.4, 522.0], [29.5, 522.0], [29.6, 522.0], [29.7, 522.0], [29.8, 522.0], [29.9, 522.0], [30.0, 524.0], [30.1, 526.0], [30.2, 526.0], [30.3, 526.0], [30.4, 527.0], [30.5, 527.0], [30.6, 527.0], [30.7, 527.0], [30.8, 530.0], [30.9, 530.0], [31.0, 530.0], [31.1, 531.0], [31.2, 531.0], [31.3, 532.0], [31.4, 532.0], [31.5, 536.0], [31.6, 536.0], [31.7, 536.0], [31.8, 536.0], [31.9, 537.0], [32.0, 537.0], [32.1, 537.0], [32.2, 538.0], [32.3, 538.0], [32.4, 539.0], [32.5, 539.0], [32.6, 540.0], [32.7, 541.0], [32.8, 541.0], [32.9, 541.0], [33.0, 544.0], [33.1, 545.0], [33.2, 546.0], [33.3, 546.0], [33.4, 546.0], [33.5, 548.0], [33.6, 548.0], [33.7, 548.0], [33.8, 548.0], [33.9, 549.0], [34.0, 549.0], [34.1, 549.0], [34.2, 552.0], [34.3, 554.0], [34.4, 554.0], [34.5, 555.0], [34.6, 556.0], [34.7, 558.0], [34.8, 558.0], [34.9, 559.0], [35.0, 560.0], [35.1, 560.0], [35.2, 561.0], [35.3, 561.0], [35.4, 564.0], [35.5, 564.0], [35.6, 564.0], [35.7, 568.0], [35.8, 568.0], [35.9, 568.0], [36.0, 569.0], [36.1, 569.0], [36.2, 569.0], [36.3, 569.0], [36.4, 569.0], [36.5, 570.0], [36.6, 570.0], [36.7, 570.0], [36.8, 570.0], [36.9, 571.0], [37.0, 571.0], [37.1, 573.0], [37.2, 575.0], [37.3, 576.0], [37.4, 576.0], [37.5, 578.0], [37.6, 578.0], [37.7, 579.0], [37.8, 579.0], [37.9, 579.0], [38.0, 580.0], [38.1, 580.0], [38.2, 580.0], [38.3, 580.0], [38.4, 580.0], [38.5, 580.0], [38.6, 581.0], [38.7, 582.0], [38.8, 583.0], [38.9, 583.0], [39.0, 583.0], [39.1, 584.0], [39.2, 585.0], [39.3, 585.0], [39.4, 586.0], [39.5, 586.0], [39.6, 587.0], [39.7, 587.0], [39.8, 587.0], [39.9, 587.0], [40.0, 592.0], [40.1, 592.0], [40.2, 592.0], [40.3, 593.0], [40.4, 593.0], [40.5, 593.0], [40.6, 594.0], [40.7, 595.0], [40.8, 595.0], [40.9, 596.0], [41.0, 596.0], [41.1, 597.0], [41.2, 597.0], [41.3, 599.0], [41.4, 599.0], [41.5, 599.0], [41.6, 599.0], [41.7, 601.0], [41.8, 601.0], [41.9, 601.0], [42.0, 601.0], [42.1, 602.0], [42.2, 602.0], [42.3, 602.0], [42.4, 603.0], [42.5, 604.0], [42.6, 605.0], [42.7, 605.0], [42.8, 607.0], [42.9, 609.0], [43.0, 611.0], [43.1, 611.0], [43.2, 613.0], [43.3, 613.0], [43.4, 613.0], [43.5, 614.0], [43.6, 615.0], [43.7, 616.0], [43.8, 616.0], [43.9, 617.0], [44.0, 618.0], [44.1, 619.0], [44.2, 619.0], [44.3, 620.0], [44.4, 622.0], [44.5, 623.0], [44.6, 623.0], [44.7, 624.0], [44.8, 625.0], [44.9, 627.0], [45.0, 627.0], [45.1, 628.0], [45.2, 632.0], [45.3, 632.0], [45.4, 632.0], [45.5, 632.0], [45.6, 634.0], [45.7, 634.0], [45.8, 635.0], [45.9, 636.0], [46.0, 637.0], [46.1, 637.0], [46.2, 637.0], [46.3, 637.0], [46.4, 638.0], [46.5, 638.0], [46.6, 640.0], [46.7, 640.0], [46.8, 640.0], [46.9, 643.0], [47.0, 644.0], [47.1, 644.0], [47.2, 644.0], [47.3, 644.0], [47.4, 647.0], [47.5, 647.0], [47.6, 647.0], [47.7, 650.0], [47.8, 651.0], [47.9, 651.0], [48.0, 651.0], [48.1, 653.0], [48.2, 653.0], [48.3, 654.0], [48.4, 654.0], [48.5, 654.0], [48.6, 655.0], [48.7, 655.0], [48.8, 655.0], [48.9, 660.0], [49.0, 664.0], [49.1, 664.0], [49.2, 666.0], [49.3, 668.0], [49.4, 668.0], [49.5, 668.0], [49.6, 669.0], [49.7, 669.0], [49.8, 669.0], [49.9, 669.0], [50.0, 670.0], [50.1, 671.0], [50.2, 671.0], [50.3, 674.0], [50.4, 674.0], [50.5, 678.0], [50.6, 678.0], [50.7, 681.0], [50.8, 681.0], [50.9, 684.0], [51.0, 684.0], [51.1, 685.0], [51.2, 685.0], [51.3, 686.0], [51.4, 686.0], [51.5, 687.0], [51.6, 689.0], [51.7, 689.0], [51.8, 689.0], [51.9, 690.0], [52.0, 692.0], [52.1, 692.0], [52.2, 692.0], [52.3, 693.0], [52.4, 696.0], [52.5, 696.0], [52.6, 696.0], [52.7, 696.0], [52.8, 697.0], [52.9, 697.0], [53.0, 697.0], [53.1, 697.0], [53.2, 698.0], [53.3, 698.0], [53.4, 698.0], [53.5, 699.0], [53.6, 699.0], [53.7, 699.0], [53.8, 701.0], [53.9, 702.0], [54.0, 702.0], [54.1, 705.0], [54.2, 707.0], [54.3, 707.0], [54.4, 707.0], [54.5, 707.0], [54.6, 708.0], [54.7, 711.0], [54.8, 711.0], [54.9, 713.0], [55.0, 714.0], [55.1, 714.0], [55.2, 715.0], [55.3, 717.0], [55.4, 717.0], [55.5, 717.0], [55.6, 723.0], [55.7, 727.0], [55.8, 730.0], [55.9, 730.0], [56.0, 730.0], [56.1, 731.0], [56.2, 734.0], [56.3, 734.0], [56.4, 739.0], [56.5, 740.0], [56.6, 741.0], [56.7, 741.0], [56.8, 744.0], [56.9, 746.0], [57.0, 746.0], [57.1, 746.0], [57.2, 748.0], [57.3, 748.0], [57.4, 748.0], [57.5, 752.0], [57.6, 759.0], [57.7, 760.0], [57.8, 760.0], [57.9, 761.0], [58.0, 762.0], [58.1, 762.0], [58.2, 762.0], [58.3, 762.0], [58.4, 763.0], [58.5, 763.0], [58.6, 765.0], [58.7, 766.0], [58.8, 766.0], [58.9, 766.0], [59.0, 775.0], [59.1, 778.0], [59.2, 778.0], [59.3, 778.0], [59.4, 778.0], [59.5, 780.0], [59.6, 783.0], [59.7, 783.0], [59.8, 784.0], [59.9, 785.0], [60.0, 790.0], [60.1, 790.0], [60.2, 790.0], [60.3, 790.0], [60.4, 790.0], [60.5, 791.0], [60.6, 792.0], [60.7, 792.0], [60.8, 792.0], [60.9, 793.0], [61.0, 794.0], [61.1, 796.0], [61.2, 796.0], [61.3, 801.0], [61.4, 805.0], [61.5, 806.0], [61.6, 806.0], [61.7, 813.0], [61.8, 821.0], [61.9, 821.0], [62.0, 823.0], [62.1, 823.0], [62.2, 823.0], [62.3, 823.0], [62.4, 825.0], [62.5, 827.0], [62.6, 829.0], [62.7, 829.0], [62.8, 829.0], [62.9, 831.0], [63.0, 834.0], [63.1, 834.0], [63.2, 834.0], [63.3, 834.0], [63.4, 834.0], [63.5, 839.0], [63.6, 839.0], [63.7, 840.0], [63.8, 840.0], [63.9, 844.0], [64.0, 844.0], [64.1, 844.0], [64.2, 844.0], [64.3, 846.0], [64.4, 851.0], [64.5, 854.0], [64.6, 854.0], [64.7, 862.0], [64.8, 863.0], [64.9, 865.0], [65.0, 865.0], [65.1, 865.0], [65.2, 867.0], [65.3, 867.0], [65.4, 868.0], [65.5, 869.0], [65.6, 875.0], [65.7, 875.0], [65.8, 878.0], [65.9, 879.0], [66.0, 879.0], [66.1, 879.0], [66.2, 886.0], [66.3, 886.0], [66.4, 888.0], [66.5, 888.0], [66.6, 889.0], [66.7, 890.0], [66.8, 890.0], [66.9, 893.0], [67.0, 893.0], [67.1, 894.0], [67.2, 894.0], [67.3, 896.0], [67.4, 896.0], [67.5, 902.0], [67.6, 902.0], [67.7, 907.0], [67.8, 909.0], [67.9, 910.0], [68.0, 910.0], [68.1, 912.0], [68.2, 918.0], [68.3, 922.0], [68.4, 922.0], [68.5, 923.0], [68.6, 923.0], [68.7, 923.0], [68.8, 924.0], [68.9, 925.0], [69.0, 927.0], [69.1, 927.0], [69.2, 930.0], [69.3, 933.0], [69.4, 934.0], [69.5, 934.0], [69.6, 935.0], [69.7, 936.0], [69.8, 937.0], [69.9, 937.0], [70.0, 941.0], [70.1, 943.0], [70.2, 943.0], [70.3, 947.0], [70.4, 950.0], [70.5, 954.0], [70.6, 954.0], [70.7, 956.0], [70.8, 957.0], [70.9, 960.0], [71.0, 960.0], [71.1, 962.0], [71.2, 962.0], [71.3, 966.0], [71.4, 966.0], [71.5, 970.0], [71.6, 974.0], [71.7, 974.0], [71.8, 978.0], [71.9, 985.0], [72.0, 989.0], [72.1, 989.0], [72.2, 992.0], [72.3, 996.0], [72.4, 996.0], [72.5, 996.0], [72.6, 998.0], [72.7, 1001.0], [72.8, 1005.0], [72.9, 1005.0], [73.0, 1006.0], [73.1, 1007.0], [73.2, 1008.0], [73.3, 1008.0], [73.4, 1010.0], [73.5, 1011.0], [73.6, 1011.0], [73.7, 1012.0], [73.8, 1012.0], [73.9, 1018.0], [74.0, 1018.0], [74.1, 1020.0], [74.2, 1020.0], [74.3, 1022.0], [74.4, 1022.0], [74.5, 1025.0], [74.6, 1027.0], [74.7, 1029.0], [74.8, 1029.0], [74.9, 1032.0], [75.0, 1035.0], [75.1, 1035.0], [75.2, 1036.0], [75.3, 1036.0], [75.4, 1039.0], [75.5, 1039.0], [75.6, 1040.0], [75.7, 1052.0], [75.8, 1055.0], [75.9, 1055.0], [76.0, 1057.0], [76.1, 1058.0], [76.2, 1059.0], [76.3, 1059.0], [76.4, 1059.0], [76.5, 1062.0], [76.6, 1065.0], [76.7, 1065.0], [76.8, 1072.0], [76.9, 1078.0], [77.0, 1078.0], [77.1, 1079.0], [77.2, 1080.0], [77.3, 1081.0], [77.4, 1081.0], [77.5, 1084.0], [77.6, 1085.0], [77.7, 1090.0], [77.8, 1090.0], [77.9, 1093.0], [78.0, 1093.0], [78.1, 1094.0], [78.2, 1094.0], [78.3, 1097.0], [78.4, 1099.0], [78.5, 1099.0], [78.6, 1102.0], [78.7, 1111.0], [78.8, 1118.0], [78.9, 1118.0], [79.0, 1126.0], [79.1, 1131.0], [79.2, 1133.0], [79.3, 1133.0], [79.4, 1138.0], [79.5, 1139.0], [79.6, 1139.0], [79.7, 1139.0], [79.8, 1144.0], [79.9, 1146.0], [80.0, 1153.0], [80.1, 1153.0], [80.2, 1156.0], [80.3, 1159.0], [80.4, 1159.0], [80.5, 1166.0], [80.6, 1167.0], [80.7, 1167.0], [80.8, 1167.0], [80.9, 1169.0], [81.0, 1170.0], [81.1, 1170.0], [81.2, 1170.0], [81.3, 1170.0], [81.4, 1175.0], [81.5, 1175.0], [81.6, 1175.0], [81.7, 1175.0], [81.8, 1179.0], [81.9, 1179.0], [82.0, 1179.0], [82.1, 1188.0], [82.2, 1190.0], [82.3, 1190.0], [82.4, 1193.0], [82.5, 1199.0], [82.6, 1202.0], [82.7, 1202.0], [82.8, 1205.0], [82.9, 1206.0], [83.0, 1207.0], [83.1, 1207.0], [83.2, 1211.0], [83.3, 1216.0], [83.4, 1216.0], [83.5, 1244.0], [83.6, 1247.0], [83.7, 1247.0], [83.8, 1247.0], [83.9, 1248.0], [84.0, 1251.0], [84.1, 1252.0], [84.2, 1252.0], [84.3, 1252.0], [84.4, 1252.0], [84.5, 1254.0], [84.6, 1254.0], [84.7, 1255.0], [84.8, 1255.0], [84.9, 1255.0], [85.0, 1255.0], [85.1, 1259.0], [85.2, 1281.0], [85.3, 1281.0], [85.4, 1284.0], [85.5, 1304.0], [85.6, 1319.0], [85.7, 1319.0], [85.8, 1329.0], [85.9, 1333.0], [86.0, 1342.0], [86.1, 1342.0], [86.2, 1347.0], [86.3, 1350.0], [86.4, 1353.0], [86.5, 1353.0], [86.6, 1354.0], [86.7, 1358.0], [86.8, 1358.0], [86.9, 1359.0], [87.0, 1363.0], [87.1, 1373.0], [87.2, 1373.0], [87.3, 1378.0], [87.4, 1379.0], [87.5, 1384.0], [87.6, 1384.0], [87.7, 1392.0], [87.8, 1394.0], [87.9, 1399.0], [88.0, 1399.0], [88.1, 1413.0], [88.2, 1413.0], [88.3, 1414.0], [88.4, 1414.0], [88.5, 1417.0], [88.6, 1422.0], [88.7, 1422.0], [88.8, 1424.0], [88.9, 1441.0], [89.0, 1442.0], [89.1, 1442.0], [89.2, 1449.0], [89.3, 1450.0], [89.4, 1450.0], [89.5, 1450.0], [89.6, 1452.0], [89.7, 1452.0], [89.8, 1452.0], [89.9, 1452.0], [90.0, 1456.0], [90.1, 1460.0], [90.2, 1460.0], [90.3, 1460.0], [90.4, 1468.0], [90.5, 1484.0], [90.6, 1484.0], [90.7, 1492.0], [90.8, 1504.0], [90.9, 1505.0], [91.0, 1505.0], [91.1, 1507.0], [91.2, 1509.0], [91.3, 1509.0], [91.4, 1509.0], [91.5, 1523.0], [91.6, 1529.0], [91.7, 1529.0], [91.8, 1542.0], [91.9, 1547.0], [92.0, 1553.0], [92.1, 1553.0], [92.2, 1555.0], [92.3, 1571.0], [92.4, 1575.0], [92.5, 1575.0], [92.6, 1578.0], [92.7, 1590.0], [92.8, 1599.0], [92.9, 1599.0], [93.0, 1636.0], [93.1, 1641.0], [93.2, 1646.0], [93.3, 1646.0], [93.4, 1652.0], [93.5, 1655.0], [93.6, 1655.0], [93.7, 1684.0], [93.8, 1690.0], [93.9, 1745.0], [94.0, 1745.0], [94.1, 1781.0], [94.2, 1806.0], [94.3, 1809.0], [94.4, 1809.0], [94.5, 1809.0], [94.6, 1840.0], [94.7, 1843.0], [94.8, 1843.0], [94.9, 1880.0], [95.0, 1903.0], [95.1, 1903.0], [95.2, 1905.0], [95.3, 1907.0], [95.4, 1911.0], [95.5, 1911.0], [95.6, 1917.0], [95.7, 1930.0], [95.8, 1955.0], [95.9, 1955.0], [96.0, 1985.0], [96.1, 2015.0], [96.2, 2096.0], [96.3, 2096.0], [96.4, 2098.0], [96.5, 2124.0], [96.6, 2151.0], [96.7, 2151.0], [96.8, 2153.0], [96.9, 2161.0], [97.0, 2161.0], [97.1, 2162.0], [97.2, 2201.0], [97.3, 2208.0], [97.4, 2208.0], [97.5, 2289.0], [97.6, 2336.0], [97.7, 2447.0], [97.8, 2447.0], [97.9, 2453.0], [98.0, 2468.0], [98.1, 2506.0], [98.2, 2506.0], [98.3, 2598.0], [98.4, 2703.0], [98.5, 2703.0], [98.6, 2727.0], [98.7, 2936.0], [98.8, 2985.0], [98.9, 2985.0], [99.0, 3048.0], [99.1, 3302.0], [99.2, 3464.0], [99.3, 3464.0], [99.4, 4812.0], [99.5, 4895.0], [99.6, 5324.0], [99.7, 5324.0], [99.8, 7453.0], [99.9, 9230.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 118.0, "series": [{"data": [[9200.0, 1.0], [600.0, 89.0], [700.0, 55.0], [800.0, 46.0], [900.0, 38.0], [1000.0, 43.0], [1100.0, 30.0], [1200.0, 21.0], [1300.0, 19.0], [1400.0, 20.0], [1500.0, 16.0], [1600.0, 7.0], [1700.0, 2.0], [1800.0, 6.0], [1900.0, 8.0], [2000.0, 3.0], [2100.0, 5.0], [2200.0, 3.0], [2300.0, 1.0], [2400.0, 3.0], [2500.0, 2.0], [2700.0, 2.0], [2900.0, 2.0], [3000.0, 1.0], [200.0, 25.0], [3300.0, 1.0], [3400.0, 1.0], [300.0, 52.0], [4800.0, 2.0], [5300.0, 1.0], [400.0, 118.0], [7400.0, 1.0], [500.0, 111.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 68.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 470.0, "series": [{"data": [[0.0, 197.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 470.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 68.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.840425531914894, "minX": 1.602345E12, "maxY": 10.0, "series": [{"data": [[1.602345E12, 10.0], [1.60234506E12, 9.840425531914894]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234506E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 522.0, "minX": 1.0, "maxY": 4812.0, "series": [{"data": [[8.0, 560.0], [4.0, 1206.0], [2.0, 1350.0], [1.0, 2703.0], [9.0, 4812.0], [10.0, 850.2878787878788], [5.0, 522.0], [6.0, 585.0], [3.0, 3048.0], [7.0, 524.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 860.7061224489794]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2117.55, "minX": 1.602345E12, "maxY": 1451624.35, "series": [{"data": [[1.602345E12, 1451624.35], [1.60234506E12, 744085.8833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.602345E12, 3405.483333333333], [1.60234506E12, 2117.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234506E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 829.1879432624112, "minX": 1.602345E12, "maxY": 880.3267108167768, "series": [{"data": [[1.602345E12, 880.3267108167768], [1.60234506E12, 829.1879432624112]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234506E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 828.102836879432, "minX": 1.602345E12, "maxY": 878.9094922737308, "series": [{"data": [[1.602345E12, 878.9094922737308], [1.60234506E12, 828.102836879432]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234506E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03191489361702128, "minX": 1.602345E12, "maxY": 0.22295805739514335, "series": [{"data": [[1.602345E12, 0.22295805739514335], [1.60234506E12, 0.03191489361702128]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234506E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 227.0, "minX": 1.602345E12, "maxY": 9230.0, "series": [{"data": [[1.602345E12, 9230.0], [1.60234506E12, 4895.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.602345E12, 229.42999945878984], [1.60234506E12, 312.20499898791314]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.602345E12, 231.47300021648408], [1.60234506E12, 316.02550040483476]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.602345E12, 230.5649997293949], [1.60234506E12, 314.32749949395657]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.602345E12, 227.0], [1.60234506E12, 242.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.602345E12, 685.0], [1.60234506E12, 649.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234506E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 385.0, "minX": 1.0, "maxY": 1384.5, "series": [{"data": [[8.0, 777.0], [9.0, 676.0], [10.0, 903.0], [11.0, 787.0], [12.0, 735.5], [13.0, 685.0], [14.0, 513.0], [15.0, 696.0], [1.0, 1350.0], [4.0, 1384.5], [17.0, 385.0], [18.0, 525.5], [19.0, 470.5], [5.0, 1039.5], [20.0, 549.0], [22.0, 502.0], [6.0, 1211.5], [7.0, 1090.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 385.0, "minX": 1.0, "maxY": 1381.0, "series": [{"data": [[8.0, 776.5], [9.0, 675.0], [10.0, 902.0], [11.0, 786.0], [12.0, 735.0], [13.0, 684.0], [14.0, 512.5], [15.0, 695.0], [1.0, 1350.0], [4.0, 1381.0], [17.0, 385.0], [18.0, 525.0], [19.0, 470.5], [5.0, 1038.5], [20.0, 548.5], [22.0, 501.5], [6.0, 1210.0], [7.0, 1089.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.533333333333333, "minX": 1.602345E12, "maxY": 7.716666666666667, "series": [{"data": [[1.602345E12, 7.716666666666667], [1.60234506E12, 4.533333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234506E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.7, "minX": 1.602345E12, "maxY": 7.55, "series": [{"data": [[1.602345E12, 7.55], [1.60234506E12, 4.7]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234506E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.7, "minX": 1.602345E12, "maxY": 7.55, "series": [{"data": [[1.602345E12, 7.55], [1.60234506E12, 4.7]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234506E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.7, "minX": 1.602345E12, "maxY": 7.55, "series": [{"data": [[1.602345E12, 7.55], [1.60234506E12, 4.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234506E12, "title": "Total Transactions Per Second"}},
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

