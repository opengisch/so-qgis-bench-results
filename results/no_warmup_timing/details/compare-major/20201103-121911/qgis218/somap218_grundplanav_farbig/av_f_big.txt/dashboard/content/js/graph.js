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
        data: {"result": {"minY": 232.0, "minX": 0.0, "maxY": 10059.0, "series": [{"data": [[0.0, 232.0], [0.1, 232.0], [0.2, 237.0], [0.3, 238.0], [0.4, 238.0], [0.5, 239.0], [0.6, 246.0], [0.7, 249.0], [0.8, 249.0], [0.9, 252.0], [1.0, 260.0], [1.1, 260.0], [1.2, 260.0], [1.3, 262.0], [1.4, 263.0], [1.5, 263.0], [1.6, 263.0], [1.7, 263.0], [1.8, 264.0], [1.9, 264.0], [2.0, 267.0], [2.1, 269.0], [2.2, 270.0], [2.3, 270.0], [2.4, 272.0], [2.5, 273.0], [2.6, 276.0], [2.7, 276.0], [2.8, 278.0], [2.9, 289.0], [3.0, 293.0], [3.1, 293.0], [3.2, 295.0], [3.3, 302.0], [3.4, 302.0], [3.5, 302.0], [3.6, 304.0], [3.7, 315.0], [3.8, 315.0], [3.9, 317.0], [4.0, 325.0], [4.1, 328.0], [4.2, 328.0], [4.3, 329.0], [4.4, 332.0], [4.5, 337.0], [4.6, 337.0], [4.7, 337.0], [4.8, 337.0], [4.9, 339.0], [5.0, 339.0], [5.1, 340.0], [5.2, 351.0], [5.3, 351.0], [5.4, 352.0], [5.5, 352.0], [5.6, 353.0], [5.7, 353.0], [5.8, 359.0], [5.9, 361.0], [6.0, 363.0], [6.1, 363.0], [6.2, 363.0], [6.3, 364.0], [6.4, 365.0], [6.5, 365.0], [6.6, 366.0], [6.7, 371.0], [6.8, 371.0], [6.9, 374.0], [7.0, 377.0], [7.1, 384.0], [7.2, 384.0], [7.3, 386.0], [7.4, 387.0], [7.5, 387.0], [7.6, 387.0], [7.7, 387.0], [7.8, 388.0], [7.9, 393.0], [8.0, 393.0], [8.1, 394.0], [8.2, 394.0], [8.3, 394.0], [8.4, 394.0], [8.5, 395.0], [8.6, 395.0], [8.7, 395.0], [8.8, 396.0], [8.9, 396.0], [9.0, 396.0], [9.1, 396.0], [9.2, 397.0], [9.3, 398.0], [9.4, 399.0], [9.5, 399.0], [9.6, 400.0], [9.7, 400.0], [9.8, 400.0], [9.9, 400.0], [10.0, 401.0], [10.1, 403.0], [10.2, 403.0], [10.3, 404.0], [10.4, 405.0], [10.5, 407.0], [10.6, 407.0], [10.7, 409.0], [10.8, 412.0], [10.9, 412.0], [11.0, 412.0], [11.1, 413.0], [11.2, 414.0], [11.3, 414.0], [11.4, 414.0], [11.5, 417.0], [11.6, 417.0], [11.7, 417.0], [11.8, 418.0], [11.9, 423.0], [12.0, 423.0], [12.1, 423.0], [12.2, 424.0], [12.3, 425.0], [12.4, 425.0], [12.5, 425.0], [12.6, 426.0], [12.7, 429.0], [12.8, 432.0], [12.9, 432.0], [13.0, 432.0], [13.1, 434.0], [13.2, 435.0], [13.3, 435.0], [13.4, 435.0], [13.5, 435.0], [13.6, 435.0], [13.7, 435.0], [13.8, 437.0], [13.9, 438.0], [14.0, 438.0], [14.1, 438.0], [14.2, 440.0], [14.3, 442.0], [14.4, 442.0], [14.5, 442.0], [14.6, 442.0], [14.7, 443.0], [14.8, 443.0], [14.9, 445.0], [15.0, 447.0], [15.1, 447.0], [15.2, 449.0], [15.3, 449.0], [15.4, 450.0], [15.5, 450.0], [15.6, 451.0], [15.7, 451.0], [15.8, 458.0], [15.9, 458.0], [16.0, 459.0], [16.1, 460.0], [16.2, 460.0], [16.3, 460.0], [16.4, 461.0], [16.5, 461.0], [16.6, 461.0], [16.7, 461.0], [16.8, 462.0], [16.9, 463.0], [17.0, 463.0], [17.1, 463.0], [17.2, 465.0], [17.3, 466.0], [17.4, 466.0], [17.5, 467.0], [17.6, 467.0], [17.7, 469.0], [17.8, 469.0], [17.9, 470.0], [18.0, 471.0], [18.1, 473.0], [18.2, 473.0], [18.3, 474.0], [18.4, 476.0], [18.5, 476.0], [18.6, 477.0], [18.7, 477.0], [18.8, 478.0], [18.9, 478.0], [19.0, 478.0], [19.1, 479.0], [19.2, 479.0], [19.3, 479.0], [19.4, 480.0], [19.5, 482.0], [19.6, 483.0], [19.7, 483.0], [19.8, 483.0], [19.9, 483.0], [20.0, 483.0], [20.1, 483.0], [20.2, 483.0], [20.3, 486.0], [20.4, 486.0], [20.5, 486.0], [20.6, 486.0], [20.7, 487.0], [20.8, 487.0], [20.9, 487.0], [21.0, 490.0], [21.1, 490.0], [21.2, 490.0], [21.3, 490.0], [21.4, 491.0], [21.5, 492.0], [21.6, 492.0], [21.7, 492.0], [21.8, 495.0], [21.9, 495.0], [22.0, 496.0], [22.1, 496.0], [22.2, 497.0], [22.3, 497.0], [22.4, 498.0], [22.5, 499.0], [22.6, 499.0], [22.7, 499.0], [22.8, 499.0], [22.9, 500.0], [23.0, 501.0], [23.1, 501.0], [23.2, 502.0], [23.3, 502.0], [23.4, 502.0], [23.5, 505.0], [23.6, 506.0], [23.7, 507.0], [23.8, 507.0], [23.9, 507.0], [24.0, 509.0], [24.1, 509.0], [24.2, 509.0], [24.3, 511.0], [24.4, 512.0], [24.5, 514.0], [24.6, 514.0], [24.7, 515.0], [24.8, 515.0], [24.9, 517.0], [25.0, 517.0], [25.1, 521.0], [25.2, 521.0], [25.3, 521.0], [25.4, 524.0], [25.5, 525.0], [25.6, 525.0], [25.7, 525.0], [25.8, 526.0], [25.9, 527.0], [26.0, 527.0], [26.1, 527.0], [26.2, 527.0], [26.3, 528.0], [26.4, 529.0], [26.5, 529.0], [26.6, 529.0], [26.7, 530.0], [26.8, 530.0], [26.9, 531.0], [27.0, 533.0], [27.1, 533.0], [27.2, 533.0], [27.3, 533.0], [27.4, 534.0], [27.5, 535.0], [27.6, 535.0], [27.7, 536.0], [27.8, 538.0], [27.9, 539.0], [28.0, 539.0], [28.1, 541.0], [28.2, 541.0], [28.3, 543.0], [28.4, 543.0], [28.5, 546.0], [28.6, 547.0], [28.7, 547.0], [28.8, 547.0], [28.9, 548.0], [29.0, 548.0], [29.1, 548.0], [29.2, 549.0], [29.3, 550.0], [29.4, 550.0], [29.5, 550.0], [29.6, 551.0], [29.7, 552.0], [29.8, 552.0], [29.9, 552.0], [30.0, 552.0], [30.1, 553.0], [30.2, 553.0], [30.3, 553.0], [30.4, 554.0], [30.5, 555.0], [30.6, 555.0], [30.7, 556.0], [30.8, 556.0], [30.9, 556.0], [31.0, 556.0], [31.1, 557.0], [31.2, 558.0], [31.3, 560.0], [31.4, 560.0], [31.5, 560.0], [31.6, 560.0], [31.7, 560.0], [31.8, 560.0], [31.9, 561.0], [32.0, 561.0], [32.1, 561.0], [32.2, 561.0], [32.3, 561.0], [32.4, 562.0], [32.5, 562.0], [32.6, 562.0], [32.7, 564.0], [32.8, 565.0], [32.9, 565.0], [33.0, 569.0], [33.1, 569.0], [33.2, 572.0], [33.3, 572.0], [33.4, 572.0], [33.5, 572.0], [33.6, 572.0], [33.7, 573.0], [33.8, 574.0], [33.9, 575.0], [34.0, 575.0], [34.1, 576.0], [34.2, 577.0], [34.3, 577.0], [34.4, 577.0], [34.5, 578.0], [34.6, 578.0], [34.7, 578.0], [34.8, 578.0], [34.9, 579.0], [35.0, 580.0], [35.1, 580.0], [35.2, 580.0], [35.3, 582.0], [35.4, 582.0], [35.5, 582.0], [35.6, 584.0], [35.7, 584.0], [35.8, 584.0], [35.9, 584.0], [36.0, 584.0], [36.1, 585.0], [36.2, 585.0], [36.3, 585.0], [36.4, 585.0], [36.5, 585.0], [36.6, 586.0], [36.7, 586.0], [36.8, 587.0], [36.9, 587.0], [37.0, 587.0], [37.1, 587.0], [37.2, 588.0], [37.3, 588.0], [37.4, 588.0], [37.5, 589.0], [37.6, 591.0], [37.7, 592.0], [37.8, 592.0], [37.9, 595.0], [38.0, 595.0], [38.1, 597.0], [38.2, 597.0], [38.3, 597.0], [38.4, 599.0], [38.5, 599.0], [38.6, 600.0], [38.7, 601.0], [38.8, 602.0], [38.9, 602.0], [39.0, 603.0], [39.1, 603.0], [39.2, 603.0], [39.3, 603.0], [39.4, 603.0], [39.5, 605.0], [39.6, 606.0], [39.7, 606.0], [39.8, 608.0], [39.9, 609.0], [40.0, 609.0], [40.1, 609.0], [40.2, 611.0], [40.3, 612.0], [40.4, 612.0], [40.5, 615.0], [40.6, 617.0], [40.7, 617.0], [40.8, 617.0], [40.9, 618.0], [41.0, 618.0], [41.1, 618.0], [41.2, 618.0], [41.3, 622.0], [41.4, 622.0], [41.5, 623.0], [41.6, 623.0], [41.7, 624.0], [41.8, 626.0], [41.9, 626.0], [42.0, 627.0], [42.1, 627.0], [42.2, 627.0], [42.3, 627.0], [42.4, 628.0], [42.5, 629.0], [42.6, 631.0], [42.7, 631.0], [42.8, 633.0], [42.9, 634.0], [43.0, 634.0], [43.1, 634.0], [43.2, 635.0], [43.3, 636.0], [43.4, 636.0], [43.5, 637.0], [43.6, 639.0], [43.7, 644.0], [43.8, 644.0], [43.9, 644.0], [44.0, 644.0], [44.1, 645.0], [44.2, 645.0], [44.3, 645.0], [44.4, 647.0], [44.5, 647.0], [44.6, 647.0], [44.7, 647.0], [44.8, 647.0], [44.9, 649.0], [45.0, 649.0], [45.1, 650.0], [45.2, 653.0], [45.3, 653.0], [45.4, 653.0], [45.5, 656.0], [45.6, 657.0], [45.7, 657.0], [45.8, 661.0], [45.9, 661.0], [46.0, 661.0], [46.1, 661.0], [46.2, 663.0], [46.3, 665.0], [46.4, 666.0], [46.5, 666.0], [46.6, 668.0], [46.7, 675.0], [46.8, 675.0], [46.9, 675.0], [47.0, 676.0], [47.1, 677.0], [47.2, 677.0], [47.3, 678.0], [47.4, 681.0], [47.5, 683.0], [47.6, 683.0], [47.7, 685.0], [47.8, 685.0], [47.9, 686.0], [48.0, 686.0], [48.1, 687.0], [48.2, 687.0], [48.3, 688.0], [48.4, 688.0], [48.5, 688.0], [48.6, 689.0], [48.7, 689.0], [48.8, 692.0], [48.9, 697.0], [49.0, 702.0], [49.1, 702.0], [49.2, 703.0], [49.3, 703.0], [49.4, 705.0], [49.5, 705.0], [49.6, 706.0], [49.7, 707.0], [49.8, 707.0], [49.9, 707.0], [50.0, 715.0], [50.1, 716.0], [50.2, 716.0], [50.3, 717.0], [50.4, 718.0], [50.5, 719.0], [50.6, 719.0], [50.7, 720.0], [50.8, 720.0], [50.9, 722.0], [51.0, 722.0], [51.1, 723.0], [51.2, 724.0], [51.3, 726.0], [51.4, 726.0], [51.5, 727.0], [51.6, 728.0], [51.7, 728.0], [51.8, 730.0], [51.9, 732.0], [52.0, 733.0], [52.1, 733.0], [52.2, 736.0], [52.3, 737.0], [52.4, 738.0], [52.5, 738.0], [52.6, 740.0], [52.7, 741.0], [52.8, 743.0], [52.9, 743.0], [53.0, 743.0], [53.1, 745.0], [53.2, 745.0], [53.3, 745.0], [53.4, 746.0], [53.5, 746.0], [53.6, 746.0], [53.7, 746.0], [53.8, 748.0], [53.9, 750.0], [54.0, 750.0], [54.1, 750.0], [54.2, 752.0], [54.3, 753.0], [54.4, 753.0], [54.5, 756.0], [54.6, 756.0], [54.7, 756.0], [54.8, 756.0], [54.9, 757.0], [55.0, 764.0], [55.1, 764.0], [55.2, 766.0], [55.3, 766.0], [55.4, 769.0], [55.5, 769.0], [55.6, 772.0], [55.7, 773.0], [55.8, 776.0], [55.9, 776.0], [56.0, 777.0], [56.1, 778.0], [56.2, 780.0], [56.3, 780.0], [56.4, 780.0], [56.5, 785.0], [56.6, 787.0], [56.7, 787.0], [56.8, 790.0], [56.9, 792.0], [57.0, 792.0], [57.1, 794.0], [57.2, 795.0], [57.3, 796.0], [57.4, 796.0], [57.5, 797.0], [57.6, 798.0], [57.7, 799.0], [57.8, 799.0], [57.9, 800.0], [58.0, 801.0], [58.1, 802.0], [58.2, 802.0], [58.3, 802.0], [58.4, 813.0], [58.5, 813.0], [58.6, 819.0], [58.7, 822.0], [58.8, 823.0], [58.9, 823.0], [59.0, 824.0], [59.1, 825.0], [59.2, 826.0], [59.3, 826.0], [59.4, 827.0], [59.5, 829.0], [59.6, 831.0], [59.7, 831.0], [59.8, 832.0], [59.9, 833.0], [60.0, 836.0], [60.1, 836.0], [60.2, 837.0], [60.3, 837.0], [60.4, 837.0], [60.5, 839.0], [60.6, 839.0], [60.7, 840.0], [60.8, 840.0], [60.9, 843.0], [61.0, 846.0], [61.1, 847.0], [61.2, 847.0], [61.3, 849.0], [61.4, 850.0], [61.5, 850.0], [61.6, 850.0], [61.7, 854.0], [61.8, 854.0], [61.9, 854.0], [62.0, 855.0], [62.1, 855.0], [62.2, 856.0], [62.3, 856.0], [62.4, 859.0], [62.5, 861.0], [62.6, 862.0], [62.7, 862.0], [62.8, 863.0], [62.9, 863.0], [63.0, 866.0], [63.1, 866.0], [63.2, 867.0], [63.3, 871.0], [63.4, 871.0], [63.5, 872.0], [63.6, 873.0], [63.7, 875.0], [63.8, 875.0], [63.9, 879.0], [64.0, 880.0], [64.1, 880.0], [64.2, 880.0], [64.3, 882.0], [64.4, 883.0], [64.5, 885.0], [64.6, 885.0], [64.7, 895.0], [64.8, 896.0], [64.9, 899.0], [65.0, 899.0], [65.1, 899.0], [65.2, 900.0], [65.3, 900.0], [65.4, 904.0], [65.5, 905.0], [65.6, 906.0], [65.7, 906.0], [65.8, 909.0], [65.9, 912.0], [66.0, 913.0], [66.1, 913.0], [66.2, 914.0], [66.3, 914.0], [66.4, 917.0], [66.5, 917.0], [66.6, 922.0], [66.7, 922.0], [66.8, 922.0], [66.9, 923.0], [67.0, 929.0], [67.1, 936.0], [67.2, 936.0], [67.3, 938.0], [67.4, 938.0], [67.5, 940.0], [67.6, 940.0], [67.7, 945.0], [67.8, 946.0], [67.9, 949.0], [68.0, 949.0], [68.1, 950.0], [68.2, 954.0], [68.3, 959.0], [68.4, 959.0], [68.5, 962.0], [68.6, 962.0], [68.7, 962.0], [68.8, 963.0], [68.9, 963.0], [69.0, 965.0], [69.1, 965.0], [69.2, 967.0], [69.3, 968.0], [69.4, 970.0], [69.5, 970.0], [69.6, 971.0], [69.7, 973.0], [69.8, 981.0], [69.9, 981.0], [70.0, 981.0], [70.1, 982.0], [70.2, 982.0], [70.3, 984.0], [70.4, 985.0], [70.5, 985.0], [70.6, 985.0], [70.7, 1000.0], [70.8, 1009.0], [70.9, 1011.0], [71.0, 1011.0], [71.1, 1012.0], [71.2, 1016.0], [71.3, 1017.0], [71.4, 1017.0], [71.5, 1017.0], [71.6, 1021.0], [71.7, 1021.0], [71.8, 1026.0], [71.9, 1029.0], [72.0, 1031.0], [72.1, 1031.0], [72.2, 1032.0], [72.3, 1037.0], [72.4, 1039.0], [72.5, 1039.0], [72.6, 1044.0], [72.7, 1054.0], [72.8, 1060.0], [72.9, 1060.0], [73.0, 1062.0], [73.1, 1065.0], [73.2, 1067.0], [73.3, 1067.0], [73.4, 1067.0], [73.5, 1075.0], [73.6, 1075.0], [73.7, 1077.0], [73.8, 1079.0], [73.9, 1081.0], [74.0, 1081.0], [74.1, 1089.0], [74.2, 1092.0], [74.3, 1098.0], [74.4, 1098.0], [74.5, 1098.0], [74.6, 1098.0], [74.7, 1098.0], [74.8, 1098.0], [74.9, 1102.0], [75.0, 1102.0], [75.1, 1102.0], [75.2, 1106.0], [75.3, 1108.0], [75.4, 1111.0], [75.5, 1111.0], [75.6, 1113.0], [75.7, 1115.0], [75.8, 1119.0], [75.9, 1119.0], [76.0, 1120.0], [76.1, 1121.0], [76.2, 1125.0], [76.3, 1125.0], [76.4, 1129.0], [76.5, 1131.0], [76.6, 1138.0], [76.7, 1138.0], [76.8, 1140.0], [76.9, 1140.0], [77.0, 1140.0], [77.1, 1142.0], [77.2, 1142.0], [77.3, 1145.0], [77.4, 1145.0], [77.5, 1148.0], [77.6, 1148.0], [77.7, 1149.0], [77.8, 1149.0], [77.9, 1153.0], [78.0, 1157.0], [78.1, 1160.0], [78.2, 1160.0], [78.3, 1161.0], [78.4, 1161.0], [78.5, 1161.0], [78.6, 1164.0], [78.7, 1166.0], [78.8, 1168.0], [78.9, 1168.0], [79.0, 1169.0], [79.1, 1179.0], [79.2, 1180.0], [79.3, 1180.0], [79.4, 1183.0], [79.5, 1184.0], [79.6, 1185.0], [79.7, 1185.0], [79.8, 1186.0], [79.9, 1194.0], [80.0, 1196.0], [80.1, 1196.0], [80.2, 1199.0], [80.3, 1206.0], [80.4, 1206.0], [80.5, 1207.0], [80.6, 1207.0], [80.7, 1208.0], [80.8, 1208.0], [80.9, 1212.0], [81.0, 1212.0], [81.1, 1215.0], [81.2, 1215.0], [81.3, 1215.0], [81.4, 1217.0], [81.5, 1219.0], [81.6, 1219.0], [81.7, 1223.0], [81.8, 1237.0], [81.9, 1237.0], [82.0, 1241.0], [82.1, 1241.0], [82.2, 1242.0], [82.3, 1242.0], [82.4, 1243.0], [82.5, 1245.0], [82.6, 1246.0], [82.7, 1246.0], [82.8, 1269.0], [82.9, 1270.0], [83.0, 1271.0], [83.1, 1271.0], [83.2, 1274.0], [83.3, 1278.0], [83.4, 1278.0], [83.5, 1280.0], [83.6, 1281.0], [83.7, 1281.0], [83.8, 1281.0], [83.9, 1282.0], [84.0, 1289.0], [84.1, 1290.0], [84.2, 1290.0], [84.3, 1291.0], [84.4, 1292.0], [84.5, 1296.0], [84.6, 1296.0], [84.7, 1297.0], [84.8, 1303.0], [84.9, 1303.0], [85.0, 1303.0], [85.1, 1304.0], [85.2, 1305.0], [85.3, 1305.0], [85.4, 1308.0], [85.5, 1310.0], [85.6, 1314.0], [85.7, 1314.0], [85.8, 1319.0], [85.9, 1343.0], [86.0, 1343.0], [86.1, 1343.0], [86.2, 1347.0], [86.3, 1350.0], [86.4, 1358.0], [86.5, 1358.0], [86.6, 1360.0], [86.7, 1365.0], [86.8, 1365.0], [86.9, 1377.0], [87.0, 1385.0], [87.1, 1385.0], [87.2, 1385.0], [87.3, 1386.0], [87.4, 1392.0], [87.5, 1394.0], [87.6, 1394.0], [87.7, 1394.0], [87.8, 1400.0], [87.9, 1402.0], [88.0, 1402.0], [88.1, 1404.0], [88.2, 1408.0], [88.3, 1409.0], [88.4, 1409.0], [88.5, 1415.0], [88.6, 1420.0], [88.7, 1420.0], [88.8, 1420.0], [88.9, 1421.0], [89.0, 1422.0], [89.1, 1422.0], [89.2, 1424.0], [89.3, 1427.0], [89.4, 1430.0], [89.5, 1430.0], [89.6, 1433.0], [89.7, 1434.0], [89.8, 1445.0], [89.9, 1445.0], [90.0, 1447.0], [90.1, 1456.0], [90.2, 1456.0], [90.3, 1472.0], [90.4, 1475.0], [90.5, 1478.0], [90.6, 1478.0], [90.7, 1482.0], [90.8, 1493.0], [90.9, 1497.0], [91.0, 1497.0], [91.1, 1500.0], [91.2, 1516.0], [91.3, 1519.0], [91.4, 1519.0], [91.5, 1538.0], [91.6, 1539.0], [91.7, 1539.0], [91.8, 1558.0], [91.9, 1567.0], [92.0, 1586.0], [92.1, 1586.0], [92.2, 1593.0], [92.3, 1593.0], [92.4, 1607.0], [92.5, 1607.0], [92.6, 1614.0], [92.7, 1627.0], [92.8, 1636.0], [92.9, 1636.0], [93.0, 1643.0], [93.1, 1645.0], [93.2, 1649.0], [93.3, 1649.0], [93.4, 1650.0], [93.5, 1681.0], [93.6, 1681.0], [93.7, 1688.0], [93.8, 1693.0], [93.9, 1724.0], [94.0, 1724.0], [94.1, 1729.0], [94.2, 1743.0], [94.3, 1756.0], [94.4, 1756.0], [94.5, 1769.0], [94.6, 1774.0], [94.7, 1777.0], [94.8, 1777.0], [94.9, 1786.0], [95.0, 1793.0], [95.1, 1793.0], [95.2, 1794.0], [95.3, 1803.0], [95.4, 1857.0], [95.5, 1857.0], [95.6, 1900.0], [95.7, 1922.0], [95.8, 1994.0], [95.9, 1994.0], [96.0, 2015.0], [96.1, 2025.0], [96.2, 2071.0], [96.3, 2071.0], [96.4, 2092.0], [96.5, 2114.0], [96.6, 2147.0], [96.7, 2147.0], [96.8, 2149.0], [96.9, 2186.0], [97.0, 2186.0], [97.1, 2235.0], [97.2, 2252.0], [97.3, 2284.0], [97.4, 2284.0], [97.5, 2306.0], [97.6, 2540.0], [97.7, 2659.0], [97.8, 2659.0], [97.9, 2660.0], [98.0, 2705.0], [98.1, 2815.0], [98.2, 2815.0], [98.3, 2815.0], [98.4, 2837.0], [98.5, 2837.0], [98.6, 2844.0], [98.7, 2928.0], [98.8, 3083.0], [98.9, 3083.0], [99.0, 3084.0], [99.1, 3109.0], [99.2, 3460.0], [99.3, 3460.0], [99.4, 4810.0], [99.5, 5484.0], [99.6, 5941.0], [99.7, 5941.0], [99.8, 9363.0], [99.9, 10059.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 115.0, "series": [{"data": [[600.0, 77.0], [9300.0, 1.0], [10000.0, 1.0], [700.0, 65.0], [800.0, 54.0], [900.0, 40.0], [1000.0, 31.0], [1100.0, 40.0], [1200.0, 33.0], [1300.0, 22.0], [1400.0, 24.0], [1500.0, 10.0], [1600.0, 11.0], [1700.0, 10.0], [1800.0, 2.0], [1900.0, 3.0], [2000.0, 4.0], [2100.0, 4.0], [2300.0, 1.0], [2200.0, 3.0], [2500.0, 1.0], [2600.0, 2.0], [2800.0, 4.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [200.0, 24.0], [3400.0, 1.0], [300.0, 46.0], [4800.0, 1.0], [5400.0, 1.0], [5900.0, 1.0], [400.0, 98.0], [500.0, 115.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 65.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 501.0, "series": [{"data": [[0.0, 169.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 501.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 65.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.849650349650352, "minX": 1.60440612E12, "maxY": 10.0, "series": [{"data": [[1.60440612E12, 10.0], [1.60440618E12, 9.849650349650352]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440618E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 476.0, "minX": 1.0, "maxY": 5941.0, "series": [{"data": [[8.0, 483.0], [4.0, 1140.0], [2.0, 5941.0], [1.0, 1415.0], [10.0, 884.7001375515815], [6.0, 476.0], [3.0, 3109.0], [7.0, 595.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.941496598639453, 893.6217687074827]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2147.883333333333, "minX": 1.60440612E12, "maxY": 1414595.5333333334, "series": [{"data": [[1.60440612E12, 1414595.5333333334], [1.60440618E12, 781063.5166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60440612E12, 3375.15], [1.60440618E12, 2147.883333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440618E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 888.3881118881113, "minX": 1.60440612E12, "maxY": 896.9554565701561, "series": [{"data": [[1.60440612E12, 896.9554565701561], [1.60440618E12, 888.3881118881113]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440618E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 887.0874125874124, "minX": 1.60440612E12, "maxY": 895.2739420935415, "series": [{"data": [[1.60440612E12, 895.2739420935415], [1.60440618E12, 887.0874125874124]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440618E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03846153846153845, "minX": 1.60440612E12, "maxY": 0.19153674832962134, "series": [{"data": [[1.60440612E12, 0.19153674832962134], [1.60440618E12, 0.03846153846153845]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440618E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 232.0, "minX": 1.60440612E12, "maxY": 10059.0, "series": [{"data": [[1.60440612E12, 10059.0], [1.60440618E12, 9363.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60440612E12, 239.4999989271164], [1.60440618E12, 261.7489997947216]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60440612E12, 243.55000042915344], [1.60440618E12, 262.52390008211137]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60440612E12, 241.7499994635582], [1.60440618E12, 262.1794998973608]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60440612E12, 232.0], [1.60440618E12, 246.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60440612E12, 728.0], [1.60440618E12, 676.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440618E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 478.0, "minX": 1.0, "maxY": 3109.0, "series": [{"data": [[8.0, 742.0], [9.0, 753.0], [10.0, 956.0], [11.0, 798.5], [12.0, 725.0], [3.0, 3109.0], [13.0, 604.0], [14.0, 717.0], [15.0, 565.0], [1.0, 792.0], [4.0, 1199.5], [16.0, 600.5], [18.0, 546.0], [19.0, 587.5], [5.0, 1404.0], [20.0, 478.0], [6.0, 1023.0], [7.0, 889.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 478.0, "minX": 1.0, "maxY": 3103.0, "series": [{"data": [[8.0, 741.5], [9.0, 752.0], [10.0, 955.0], [11.0, 798.0], [12.0, 724.0], [3.0, 3103.0], [13.0, 603.5], [14.0, 716.5], [15.0, 562.0], [1.0, 788.0], [4.0, 1198.0], [16.0, 599.5], [18.0, 546.0], [19.0, 587.0], [5.0, 1404.0], [20.0, 478.0], [6.0, 1022.5], [7.0, 888.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.6, "minX": 1.60440612E12, "maxY": 7.65, "series": [{"data": [[1.60440612E12, 7.65], [1.60440618E12, 4.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440618E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.766666666666667, "minX": 1.60440612E12, "maxY": 7.483333333333333, "series": [{"data": [[1.60440612E12, 7.483333333333333], [1.60440618E12, 4.766666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440618E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.766666666666667, "minX": 1.60440612E12, "maxY": 7.483333333333333, "series": [{"data": [[1.60440612E12, 7.483333333333333], [1.60440618E12, 4.766666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440618E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.766666666666667, "minX": 1.60440612E12, "maxY": 7.483333333333333, "series": [{"data": [[1.60440612E12, 7.483333333333333], [1.60440618E12, 4.766666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440618E12, "title": "Total Transactions Per Second"}},
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

