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
        data: {"result": {"minY": 261.0, "minX": 0.0, "maxY": 64070.0, "series": [{"data": [[0.0, 261.0], [0.1, 268.0], [0.2, 272.0], [0.3, 277.0], [0.4, 284.0], [0.5, 313.0], [0.6, 320.0], [0.7, 325.0], [0.8, 328.0], [0.9, 332.0], [1.0, 335.0], [1.1, 338.0], [1.2, 340.0], [1.3, 341.0], [1.4, 342.0], [1.5, 343.0], [1.6, 344.0], [1.7, 346.0], [1.8, 347.0], [1.9, 347.0], [2.0, 348.0], [2.1, 349.0], [2.2, 351.0], [2.3, 352.0], [2.4, 353.0], [2.5, 354.0], [2.6, 355.0], [2.7, 356.0], [2.8, 356.0], [2.9, 357.0], [3.0, 358.0], [3.1, 359.0], [3.2, 359.0], [3.3, 359.0], [3.4, 360.0], [3.5, 360.0], [3.6, 361.0], [3.7, 362.0], [3.8, 362.0], [3.9, 363.0], [4.0, 363.0], [4.1, 364.0], [4.2, 364.0], [4.3, 365.0], [4.4, 366.0], [4.5, 367.0], [4.6, 368.0], [4.7, 368.0], [4.8, 369.0], [4.9, 369.0], [5.0, 370.0], [5.1, 371.0], [5.2, 371.0], [5.3, 372.0], [5.4, 373.0], [5.5, 374.0], [5.6, 375.0], [5.7, 375.0], [5.8, 375.0], [5.9, 376.0], [6.0, 377.0], [6.1, 377.0], [6.2, 378.0], [6.3, 378.0], [6.4, 379.0], [6.5, 380.0], [6.6, 380.0], [6.7, 381.0], [6.8, 381.0], [6.9, 382.0], [7.0, 383.0], [7.1, 384.0], [7.2, 384.0], [7.3, 384.0], [7.4, 385.0], [7.5, 386.0], [7.6, 387.0], [7.7, 388.0], [7.8, 389.0], [7.9, 390.0], [8.0, 391.0], [8.1, 391.0], [8.2, 392.0], [8.3, 393.0], [8.4, 393.0], [8.5, 394.0], [8.6, 395.0], [8.7, 396.0], [8.8, 396.0], [8.9, 397.0], [9.0, 398.0], [9.1, 399.0], [9.2, 400.0], [9.3, 401.0], [9.4, 401.0], [9.5, 402.0], [9.6, 403.0], [9.7, 405.0], [9.8, 405.0], [9.9, 406.0], [10.0, 407.0], [10.1, 408.0], [10.2, 409.0], [10.3, 409.0], [10.4, 410.0], [10.5, 411.0], [10.6, 411.0], [10.7, 412.0], [10.8, 412.0], [10.9, 413.0], [11.0, 414.0], [11.1, 415.0], [11.2, 416.0], [11.3, 417.0], [11.4, 417.0], [11.5, 419.0], [11.6, 419.0], [11.7, 420.0], [11.8, 420.0], [11.9, 421.0], [12.0, 422.0], [12.1, 422.0], [12.2, 423.0], [12.3, 424.0], [12.4, 424.0], [12.5, 424.0], [12.6, 426.0], [12.7, 427.0], [12.8, 427.0], [12.9, 428.0], [13.0, 429.0], [13.1, 429.0], [13.2, 430.0], [13.3, 430.0], [13.4, 431.0], [13.5, 432.0], [13.6, 433.0], [13.7, 434.0], [13.8, 435.0], [13.9, 436.0], [14.0, 436.0], [14.1, 437.0], [14.2, 438.0], [14.3, 439.0], [14.4, 440.0], [14.5, 440.0], [14.6, 441.0], [14.7, 441.0], [14.8, 442.0], [14.9, 442.0], [15.0, 442.0], [15.1, 443.0], [15.2, 443.0], [15.3, 444.0], [15.4, 444.0], [15.5, 445.0], [15.6, 445.0], [15.7, 446.0], [15.8, 447.0], [15.9, 448.0], [16.0, 448.0], [16.1, 449.0], [16.2, 450.0], [16.3, 451.0], [16.4, 451.0], [16.5, 452.0], [16.6, 452.0], [16.7, 453.0], [16.8, 454.0], [16.9, 455.0], [17.0, 455.0], [17.1, 456.0], [17.2, 456.0], [17.3, 457.0], [17.4, 458.0], [17.5, 458.0], [17.6, 460.0], [17.7, 460.0], [17.8, 460.0], [17.9, 461.0], [18.0, 462.0], [18.1, 463.0], [18.2, 464.0], [18.3, 464.0], [18.4, 465.0], [18.5, 465.0], [18.6, 467.0], [18.7, 467.0], [18.8, 468.0], [18.9, 469.0], [19.0, 470.0], [19.1, 471.0], [19.2, 472.0], [19.3, 473.0], [19.4, 473.0], [19.5, 474.0], [19.6, 475.0], [19.7, 476.0], [19.8, 477.0], [19.9, 478.0], [20.0, 480.0], [20.1, 482.0], [20.2, 482.0], [20.3, 483.0], [20.4, 484.0], [20.5, 484.0], [20.6, 485.0], [20.7, 486.0], [20.8, 487.0], [20.9, 489.0], [21.0, 490.0], [21.1, 491.0], [21.2, 492.0], [21.3, 493.0], [21.4, 494.0], [21.5, 495.0], [21.6, 497.0], [21.7, 497.0], [21.8, 499.0], [21.9, 499.0], [22.0, 500.0], [22.1, 501.0], [22.2, 502.0], [22.3, 503.0], [22.4, 504.0], [22.5, 505.0], [22.6, 505.0], [22.7, 506.0], [22.8, 507.0], [22.9, 507.0], [23.0, 508.0], [23.1, 509.0], [23.2, 511.0], [23.3, 512.0], [23.4, 513.0], [23.5, 514.0], [23.6, 515.0], [23.7, 516.0], [23.8, 517.0], [23.9, 518.0], [24.0, 520.0], [24.1, 521.0], [24.2, 524.0], [24.3, 524.0], [24.4, 525.0], [24.5, 527.0], [24.6, 528.0], [24.7, 529.0], [24.8, 531.0], [24.9, 531.0], [25.0, 532.0], [25.1, 533.0], [25.2, 533.0], [25.3, 534.0], [25.4, 536.0], [25.5, 537.0], [25.6, 538.0], [25.7, 539.0], [25.8, 539.0], [25.9, 541.0], [26.0, 542.0], [26.1, 543.0], [26.2, 545.0], [26.3, 547.0], [26.4, 548.0], [26.5, 549.0], [26.6, 550.0], [26.7, 551.0], [26.8, 551.0], [26.9, 553.0], [27.0, 554.0], [27.1, 555.0], [27.2, 555.0], [27.3, 556.0], [27.4, 557.0], [27.5, 558.0], [27.6, 559.0], [27.7, 560.0], [27.8, 561.0], [27.9, 562.0], [28.0, 562.0], [28.1, 563.0], [28.2, 564.0], [28.3, 566.0], [28.4, 567.0], [28.5, 568.0], [28.6, 569.0], [28.7, 570.0], [28.8, 571.0], [28.9, 572.0], [29.0, 574.0], [29.1, 575.0], [29.2, 575.0], [29.3, 576.0], [29.4, 576.0], [29.5, 577.0], [29.6, 578.0], [29.7, 579.0], [29.8, 580.0], [29.9, 582.0], [30.0, 584.0], [30.1, 584.0], [30.2, 585.0], [30.3, 586.0], [30.4, 587.0], [30.5, 588.0], [30.6, 588.0], [30.7, 589.0], [30.8, 590.0], [30.9, 590.0], [31.0, 591.0], [31.1, 592.0], [31.2, 593.0], [31.3, 595.0], [31.4, 596.0], [31.5, 596.0], [31.6, 597.0], [31.7, 598.0], [31.8, 599.0], [31.9, 601.0], [32.0, 603.0], [32.1, 603.0], [32.2, 604.0], [32.3, 605.0], [32.4, 606.0], [32.5, 607.0], [32.6, 607.0], [32.7, 608.0], [32.8, 608.0], [32.9, 609.0], [33.0, 610.0], [33.1, 611.0], [33.2, 612.0], [33.3, 612.0], [33.4, 613.0], [33.5, 614.0], [33.6, 614.0], [33.7, 614.0], [33.8, 616.0], [33.9, 616.0], [34.0, 617.0], [34.1, 618.0], [34.2, 618.0], [34.3, 618.0], [34.4, 619.0], [34.5, 620.0], [34.6, 620.0], [34.7, 621.0], [34.8, 622.0], [34.9, 623.0], [35.0, 624.0], [35.1, 624.0], [35.2, 625.0], [35.3, 627.0], [35.4, 628.0], [35.5, 629.0], [35.6, 629.0], [35.7, 630.0], [35.8, 631.0], [35.9, 632.0], [36.0, 633.0], [36.1, 634.0], [36.2, 635.0], [36.3, 636.0], [36.4, 636.0], [36.5, 637.0], [36.6, 637.0], [36.7, 638.0], [36.8, 638.0], [36.9, 640.0], [37.0, 640.0], [37.1, 641.0], [37.2, 642.0], [37.3, 642.0], [37.4, 643.0], [37.5, 644.0], [37.6, 644.0], [37.7, 645.0], [37.8, 646.0], [37.9, 647.0], [38.0, 647.0], [38.1, 648.0], [38.2, 648.0], [38.3, 649.0], [38.4, 650.0], [38.5, 651.0], [38.6, 652.0], [38.7, 652.0], [38.8, 653.0], [38.9, 654.0], [39.0, 656.0], [39.1, 656.0], [39.2, 657.0], [39.3, 657.0], [39.4, 657.0], [39.5, 658.0], [39.6, 659.0], [39.7, 659.0], [39.8, 661.0], [39.9, 661.0], [40.0, 662.0], [40.1, 663.0], [40.2, 664.0], [40.3, 664.0], [40.4, 665.0], [40.5, 665.0], [40.6, 666.0], [40.7, 666.0], [40.8, 667.0], [40.9, 668.0], [41.0, 669.0], [41.1, 670.0], [41.2, 671.0], [41.3, 671.0], [41.4, 672.0], [41.5, 673.0], [41.6, 674.0], [41.7, 675.0], [41.8, 675.0], [41.9, 676.0], [42.0, 677.0], [42.1, 678.0], [42.2, 679.0], [42.3, 679.0], [42.4, 681.0], [42.5, 681.0], [42.6, 682.0], [42.7, 683.0], [42.8, 684.0], [42.9, 685.0], [43.0, 685.0], [43.1, 686.0], [43.2, 687.0], [43.3, 687.0], [43.4, 688.0], [43.5, 689.0], [43.6, 689.0], [43.7, 690.0], [43.8, 691.0], [43.9, 691.0], [44.0, 692.0], [44.1, 693.0], [44.2, 694.0], [44.3, 695.0], [44.4, 696.0], [44.5, 696.0], [44.6, 697.0], [44.7, 699.0], [44.8, 700.0], [44.9, 700.0], [45.0, 701.0], [45.1, 702.0], [45.2, 702.0], [45.3, 703.0], [45.4, 704.0], [45.5, 705.0], [45.6, 706.0], [45.7, 706.0], [45.8, 707.0], [45.9, 708.0], [46.0, 708.0], [46.1, 709.0], [46.2, 710.0], [46.3, 710.0], [46.4, 711.0], [46.5, 712.0], [46.6, 712.0], [46.7, 713.0], [46.8, 715.0], [46.9, 716.0], [47.0, 717.0], [47.1, 718.0], [47.2, 719.0], [47.3, 720.0], [47.4, 723.0], [47.5, 723.0], [47.6, 724.0], [47.7, 725.0], [47.8, 726.0], [47.9, 728.0], [48.0, 729.0], [48.1, 730.0], [48.2, 732.0], [48.3, 733.0], [48.4, 734.0], [48.5, 735.0], [48.6, 737.0], [48.7, 738.0], [48.8, 739.0], [48.9, 740.0], [49.0, 742.0], [49.1, 744.0], [49.2, 744.0], [49.3, 746.0], [49.4, 747.0], [49.5, 748.0], [49.6, 749.0], [49.7, 751.0], [49.8, 752.0], [49.9, 753.0], [50.0, 754.0], [50.1, 755.0], [50.2, 756.0], [50.3, 757.0], [50.4, 759.0], [50.5, 760.0], [50.6, 761.0], [50.7, 762.0], [50.8, 764.0], [50.9, 765.0], [51.0, 766.0], [51.1, 766.0], [51.2, 768.0], [51.3, 769.0], [51.4, 770.0], [51.5, 771.0], [51.6, 773.0], [51.7, 774.0], [51.8, 776.0], [51.9, 777.0], [52.0, 778.0], [52.1, 779.0], [52.2, 781.0], [52.3, 782.0], [52.4, 783.0], [52.5, 784.0], [52.6, 784.0], [52.7, 785.0], [52.8, 787.0], [52.9, 787.0], [53.0, 788.0], [53.1, 789.0], [53.2, 791.0], [53.3, 793.0], [53.4, 794.0], [53.5, 796.0], [53.6, 797.0], [53.7, 797.0], [53.8, 799.0], [53.9, 801.0], [54.0, 803.0], [54.1, 805.0], [54.2, 806.0], [54.3, 808.0], [54.4, 810.0], [54.5, 811.0], [54.6, 812.0], [54.7, 813.0], [54.8, 815.0], [54.9, 816.0], [55.0, 818.0], [55.1, 819.0], [55.2, 820.0], [55.3, 823.0], [55.4, 825.0], [55.5, 827.0], [55.6, 827.0], [55.7, 829.0], [55.8, 831.0], [55.9, 834.0], [56.0, 835.0], [56.1, 838.0], [56.2, 839.0], [56.3, 840.0], [56.4, 842.0], [56.5, 844.0], [56.6, 846.0], [56.7, 847.0], [56.8, 848.0], [56.9, 849.0], [57.0, 849.0], [57.1, 850.0], [57.2, 850.0], [57.3, 851.0], [57.4, 852.0], [57.5, 853.0], [57.6, 854.0], [57.7, 854.0], [57.8, 855.0], [57.9, 855.0], [58.0, 856.0], [58.1, 856.0], [58.2, 857.0], [58.3, 857.0], [58.4, 857.0], [58.5, 858.0], [58.6, 859.0], [58.7, 860.0], [58.8, 861.0], [58.9, 861.0], [59.0, 862.0], [59.1, 862.0], [59.2, 862.0], [59.3, 863.0], [59.4, 863.0], [59.5, 863.0], [59.6, 864.0], [59.7, 864.0], [59.8, 864.0], [59.9, 865.0], [60.0, 865.0], [60.1, 866.0], [60.2, 866.0], [60.3, 867.0], [60.4, 867.0], [60.5, 867.0], [60.6, 868.0], [60.7, 868.0], [60.8, 869.0], [60.9, 870.0], [61.0, 870.0], [61.1, 871.0], [61.2, 871.0], [61.3, 872.0], [61.4, 873.0], [61.5, 873.0], [61.6, 874.0], [61.7, 874.0], [61.8, 875.0], [61.9, 876.0], [62.0, 877.0], [62.1, 877.0], [62.2, 878.0], [62.3, 879.0], [62.4, 879.0], [62.5, 880.0], [62.6, 880.0], [62.7, 881.0], [62.8, 881.0], [62.9, 882.0], [63.0, 882.0], [63.1, 883.0], [63.2, 883.0], [63.3, 884.0], [63.4, 885.0], [63.5, 885.0], [63.6, 886.0], [63.7, 887.0], [63.8, 888.0], [63.9, 888.0], [64.0, 889.0], [64.1, 890.0], [64.2, 890.0], [64.3, 891.0], [64.4, 892.0], [64.5, 893.0], [64.6, 893.0], [64.7, 894.0], [64.8, 895.0], [64.9, 897.0], [65.0, 897.0], [65.1, 898.0], [65.2, 899.0], [65.3, 900.0], [65.4, 901.0], [65.5, 902.0], [65.6, 902.0], [65.7, 903.0], [65.8, 904.0], [65.9, 905.0], [66.0, 906.0], [66.1, 906.0], [66.2, 907.0], [66.3, 908.0], [66.4, 909.0], [66.5, 911.0], [66.6, 912.0], [66.7, 913.0], [66.8, 914.0], [66.9, 915.0], [67.0, 916.0], [67.1, 917.0], [67.2, 918.0], [67.3, 919.0], [67.4, 921.0], [67.5, 921.0], [67.6, 922.0], [67.7, 923.0], [67.8, 923.0], [67.9, 924.0], [68.0, 927.0], [68.1, 927.0], [68.2, 928.0], [68.3, 930.0], [68.4, 931.0], [68.5, 934.0], [68.6, 935.0], [68.7, 936.0], [68.8, 937.0], [68.9, 938.0], [69.0, 940.0], [69.1, 942.0], [69.2, 943.0], [69.3, 943.0], [69.4, 947.0], [69.5, 949.0], [69.6, 950.0], [69.7, 951.0], [69.8, 952.0], [69.9, 954.0], [70.0, 956.0], [70.1, 958.0], [70.2, 959.0], [70.3, 961.0], [70.4, 963.0], [70.5, 964.0], [70.6, 966.0], [70.7, 967.0], [70.8, 969.0], [70.9, 971.0], [71.0, 972.0], [71.1, 974.0], [71.2, 977.0], [71.3, 979.0], [71.4, 980.0], [71.5, 981.0], [71.6, 985.0], [71.7, 987.0], [71.8, 988.0], [71.9, 992.0], [72.0, 993.0], [72.1, 994.0], [72.2, 997.0], [72.3, 998.0], [72.4, 1000.0], [72.5, 1003.0], [72.6, 1003.0], [72.7, 1007.0], [72.8, 1009.0], [72.9, 1011.0], [73.0, 1013.0], [73.1, 1016.0], [73.2, 1020.0], [73.3, 1022.0], [73.4, 1025.0], [73.5, 1027.0], [73.6, 1030.0], [73.7, 1033.0], [73.8, 1037.0], [73.9, 1039.0], [74.0, 1041.0], [74.1, 1047.0], [74.2, 1050.0], [74.3, 1052.0], [74.4, 1056.0], [74.5, 1060.0], [74.6, 1061.0], [74.7, 1068.0], [74.8, 1075.0], [74.9, 1078.0], [75.0, 1078.0], [75.1, 1083.0], [75.2, 1085.0], [75.3, 1087.0], [75.4, 1091.0], [75.5, 1092.0], [75.6, 1095.0], [75.7, 1096.0], [75.8, 1098.0], [75.9, 1100.0], [76.0, 1101.0], [76.1, 1105.0], [76.2, 1111.0], [76.3, 1113.0], [76.4, 1118.0], [76.5, 1121.0], [76.6, 1122.0], [76.7, 1127.0], [76.8, 1134.0], [76.9, 1135.0], [77.0, 1137.0], [77.1, 1140.0], [77.2, 1141.0], [77.3, 1145.0], [77.4, 1148.0], [77.5, 1153.0], [77.6, 1156.0], [77.7, 1161.0], [77.8, 1166.0], [77.9, 1170.0], [78.0, 1173.0], [78.1, 1177.0], [78.2, 1183.0], [78.3, 1184.0], [78.4, 1188.0], [78.5, 1195.0], [78.6, 1199.0], [78.7, 1206.0], [78.8, 1212.0], [78.9, 1218.0], [79.0, 1223.0], [79.1, 1231.0], [79.2, 1234.0], [79.3, 1237.0], [79.4, 1245.0], [79.5, 1251.0], [79.6, 1258.0], [79.7, 1261.0], [79.8, 1265.0], [79.9, 1270.0], [80.0, 1277.0], [80.1, 1287.0], [80.2, 1291.0], [80.3, 1301.0], [80.4, 1313.0], [80.5, 1319.0], [80.6, 1327.0], [80.7, 1333.0], [80.8, 1339.0], [80.9, 1349.0], [81.0, 1353.0], [81.1, 1360.0], [81.2, 1366.0], [81.3, 1375.0], [81.4, 1382.0], [81.5, 1389.0], [81.6, 1400.0], [81.7, 1411.0], [81.8, 1419.0], [81.9, 1426.0], [82.0, 1433.0], [82.1, 1443.0], [82.2, 1460.0], [82.3, 1464.0], [82.4, 1473.0], [82.5, 1478.0], [82.6, 1487.0], [82.7, 1500.0], [82.8, 1507.0], [82.9, 1513.0], [83.0, 1528.0], [83.1, 1540.0], [83.2, 1562.0], [83.3, 1574.0], [83.4, 1593.0], [83.5, 1602.0], [83.6, 1608.0], [83.7, 1621.0], [83.8, 1625.0], [83.9, 1639.0], [84.0, 1656.0], [84.1, 1660.0], [84.2, 1668.0], [84.3, 1674.0], [84.4, 1679.0], [84.5, 1682.0], [84.6, 1685.0], [84.7, 1687.0], [84.8, 1690.0], [84.9, 1692.0], [85.0, 1694.0], [85.1, 1696.0], [85.2, 1703.0], [85.3, 1707.0], [85.4, 1708.0], [85.5, 1713.0], [85.6, 1718.0], [85.7, 1720.0], [85.8, 1726.0], [85.9, 1728.0], [86.0, 1732.0], [86.1, 1734.0], [86.2, 1735.0], [86.3, 1739.0], [86.4, 1742.0], [86.5, 1743.0], [86.6, 1743.0], [86.7, 1745.0], [86.8, 1747.0], [86.9, 1750.0], [87.0, 1753.0], [87.1, 1755.0], [87.2, 1757.0], [87.3, 1760.0], [87.4, 1763.0], [87.5, 1767.0], [87.6, 1768.0], [87.7, 1771.0], [87.8, 1775.0], [87.9, 1778.0], [88.0, 1785.0], [88.1, 1787.0], [88.2, 1789.0], [88.3, 1793.0], [88.4, 1796.0], [88.5, 1801.0], [88.6, 1810.0], [88.7, 1817.0], [88.8, 1819.0], [88.9, 1820.0], [89.0, 1825.0], [89.1, 1832.0], [89.2, 1836.0], [89.3, 1841.0], [89.4, 1844.0], [89.5, 1853.0], [89.6, 1856.0], [89.7, 1858.0], [89.8, 1864.0], [89.9, 1866.0], [90.0, 1879.0], [90.1, 1885.0], [90.2, 1892.0], [90.3, 1900.0], [90.4, 1902.0], [90.5, 1906.0], [90.6, 1915.0], [90.7, 1916.0], [90.8, 1920.0], [90.9, 1929.0], [91.0, 1945.0], [91.1, 1955.0], [91.2, 1964.0], [91.3, 1968.0], [91.4, 1976.0], [91.5, 1982.0], [91.6, 1993.0], [91.7, 1999.0], [91.8, 2014.0], [91.9, 2020.0], [92.0, 2035.0], [92.1, 2040.0], [92.2, 2048.0], [92.3, 2058.0], [92.4, 2066.0], [92.5, 2083.0], [92.6, 2102.0], [92.7, 2120.0], [92.8, 2129.0], [92.9, 2134.0], [93.0, 2143.0], [93.1, 2156.0], [93.2, 2178.0], [93.3, 2184.0], [93.4, 2200.0], [93.5, 2219.0], [93.6, 2231.0], [93.7, 2257.0], [93.8, 2279.0], [93.9, 2299.0], [94.0, 2313.0], [94.1, 2328.0], [94.2, 2353.0], [94.3, 2369.0], [94.4, 2401.0], [94.5, 2425.0], [94.6, 2438.0], [94.7, 2457.0], [94.8, 2474.0], [94.9, 2484.0], [95.0, 2532.0], [95.1, 2540.0], [95.2, 2562.0], [95.3, 2593.0], [95.4, 2616.0], [95.5, 2648.0], [95.6, 2692.0], [95.7, 2714.0], [95.8, 2755.0], [95.9, 2774.0], [96.0, 2808.0], [96.1, 2875.0], [96.2, 2982.0], [96.3, 3036.0], [96.4, 3110.0], [96.5, 3169.0], [96.6, 3222.0], [96.7, 3295.0], [96.8, 3347.0], [96.9, 3497.0], [97.0, 3562.0], [97.1, 3641.0], [97.2, 3694.0], [97.3, 3838.0], [97.4, 3930.0], [97.5, 4030.0], [97.6, 4099.0], [97.7, 4147.0], [97.8, 4251.0], [97.9, 4297.0], [98.0, 4352.0], [98.1, 4436.0], [98.2, 4519.0], [98.3, 4592.0], [98.4, 4754.0], [98.5, 5187.0], [98.6, 5451.0], [98.7, 5624.0], [98.8, 6129.0], [98.9, 6518.0], [99.0, 6980.0], [99.1, 8227.0], [99.2, 10553.0], [99.3, 11750.0], [99.4, 14678.0], [99.5, 21479.0], [99.6, 30131.0], [99.7, 37608.0], [99.8, 53939.0], [99.9, 64065.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 670.0, "series": [{"data": [[32900.0, 1.0], [35700.0, 1.0], [40300.0, 1.0], [46500.0, 1.0], [200.0, 22.0], [53900.0, 1.0], [55900.0, 1.0], [59900.0, 1.0], [300.0, 453.0], [400.0, 663.0], [500.0, 514.0], [600.0, 670.0], [700.0, 471.0], [800.0, 595.0], [900.0, 369.0], [1000.0, 181.0], [1100.0, 142.0], [1200.0, 87.0], [1300.0, 68.0], [1400.0, 57.0], [1500.0, 39.0], [1600.0, 89.0], [1700.0, 170.0], [1800.0, 96.0], [1900.0, 74.0], [2000.0, 45.0], [2100.0, 42.0], [2300.0, 25.0], [2200.0, 27.0], [2400.0, 29.0], [2500.0, 19.0], [2600.0, 15.0], [2700.0, 20.0], [2800.0, 8.0], [2900.0, 6.0], [3000.0, 4.0], [3100.0, 11.0], [3200.0, 8.0], [3300.0, 6.0], [3400.0, 5.0], [3500.0, 6.0], [3600.0, 9.0], [3700.0, 4.0], [3800.0, 4.0], [3900.0, 5.0], [4000.0, 8.0], [4200.0, 11.0], [4100.0, 7.0], [4300.0, 4.0], [4500.0, 8.0], [4400.0, 7.0], [4600.0, 1.0], [4700.0, 5.0], [4800.0, 1.0], [5000.0, 2.0], [5100.0, 1.0], [5300.0, 2.0], [5200.0, 2.0], [5600.0, 2.0], [5500.0, 1.0], [5400.0, 3.0], [5800.0, 1.0], [5700.0, 1.0], [6100.0, 3.0], [5900.0, 1.0], [6300.0, 3.0], [6500.0, 3.0], [6600.0, 1.0], [6700.0, 1.0], [6800.0, 1.0], [6900.0, 1.0], [7100.0, 1.0], [7000.0, 1.0], [7300.0, 1.0], [7600.0, 1.0], [8200.0, 1.0], [8900.0, 1.0], [9300.0, 1.0], [9900.0, 1.0], [10000.0, 1.0], [10600.0, 1.0], [10500.0, 1.0], [11200.0, 1.0], [11100.0, 1.0], [10800.0, 1.0], [11700.0, 1.0], [11800.0, 1.0], [12500.0, 1.0], [13200.0, 1.0], [14300.0, 1.0], [14600.0, 1.0], [19000.0, 1.0], [19800.0, 1.0], [20400.0, 1.0], [20900.0, 1.0], [21400.0, 2.0], [22600.0, 1.0], [25600.0, 1.0], [27600.0, 1.0], [28700.0, 1.0], [30100.0, 1.0], [30600.0, 1.0], [37600.0, 1.0], [38400.0, 1.0], [37400.0, 1.0], [46800.0, 1.0], [55600.0, 1.0], [60400.0, 1.0], [64000.0, 6.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 64000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3151.0, "series": [{"data": [[0.0, 1142.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3151.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 891.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 6.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.891304347826088, "minX": 1.60270146E12, "maxY": 10.0, "series": [{"data": [[1.60270176E12, 10.0], [1.60270146E12, 10.0], [1.60270194E12, 10.0], [1.60270164E12, 10.0], [1.60270182E12, 10.0], [1.60270152E12, 10.0], [1.602702E12, 10.0], [1.6027017E12, 10.0], [1.60270188E12, 10.0], [1.60270158E12, 10.0], [1.60270206E12, 9.891304347826088]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60270206E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 812.0, "minX": 1.0, "maxY": 55631.0, "series": [{"data": [[8.0, 812.0], [4.0, 903.0], [2.0, 46509.0], [1.0, 6184.0], [9.0, 1687.0], [10.0, 1234.539857170434], [5.0, 55631.0], [6.0, 940.0], [3.0, 1025.0], [7.0, 970.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1254.4917148362272]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2610.1, "minX": 1.60270146E12, "maxY": 6258663.65, "series": [{"data": [[1.60270176E12, 3456151.0166666666], [1.60270146E12, 3560074.9833333334], [1.60270194E12, 6258663.65], [1.60270164E12, 4972924.816666666], [1.60270182E12, 3204444.15], [1.60270152E12, 3568213.066666667], [1.602702E12, 4964503.183333334], [1.6027017E12, 5138100.016666667], [1.60270188E12, 4035866.066666667], [1.60270158E12, 6055509.483333333], [1.60270206E12, 3105092.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60270176E12, 2610.1], [1.60270146E12, 2909.6833333333334], [1.60270194E12, 3666.55], [1.60270164E12, 3808.766666666667], [1.60270182E12, 3468.116666666667], [1.60270152E12, 3460.0666666666666], [1.602702E12, 3747.4], [1.6027017E12, 3923.0666666666666], [1.60270188E12, 3566.65], [1.60270158E12, 3100.8166666666666], [1.60270206E12, 3018.616666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60270206E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1051.0897196261683, "minX": 1.60270146E12, "maxY": 1631.5714285714278, "series": [{"data": [[1.60270176E12, 1631.5714285714278], [1.60270146E12, 1164.6888361045123], [1.60270194E12, 1213.7759999999996], [1.60270164E12, 1259.3416506717856], [1.60270182E12, 1206.9719438877764], [1.60270152E12, 1258.104722792607], [1.602702E12, 1222.4313725490197], [1.6027017E12, 1051.0897196261683], [1.60270188E12, 1194.0728346456685], [1.60270158E12, 1349.4129930394413], [1.60270206E12, 1388.0338164251214]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60270206E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1048.979439252337, "minX": 1.60270146E12, "maxY": 1629.6868131868148, "series": [{"data": [[1.60270176E12, 1629.6868131868148], [1.60270146E12, 1162.080760095012], [1.60270194E12, 1210.8000000000006], [1.60270164E12, 1257.2226487523992], [1.60270182E12, 1205.627254509019], [1.60270152E12, 1255.5544147843927], [1.602702E12, 1220.2764705882373], [1.6027017E12, 1048.979439252337], [1.60270188E12, 1192.5531496062997], [1.60270158E12, 1345.5290023201849], [1.60270206E12, 1386.405797101449]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60270206E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005905511811023624, "minX": 1.60270146E12, "maxY": 0.18527315914489334, "series": [{"data": [[1.60270176E12, 0.024725274725274745], [1.60270146E12, 0.18527315914489334], [1.60270194E12, 0.005999999999999994], [1.60270164E12, 0.021113243761996126], [1.60270182E12, 0.008016032064128258], [1.60270152E12, 0.018480492813141684], [1.602702E12, 0.011764705882352944], [1.6027017E12, 0.009345794392523369], [1.60270188E12, 0.005905511811023624], [1.60270158E12, 0.020881670533642697], [1.60270206E12, 0.019323671497584544]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60270206E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 261.0, "minX": 1.60270146E12, "maxY": 60405.0, "series": [{"data": [[1.60270176E12, 25614.0], [1.60270146E12, 20905.0], [1.60270194E12, 60405.0], [1.60270164E12, 46865.0], [1.60270182E12, 55908.0], [1.60270152E12, 59995.0], [1.602702E12, 37449.0], [1.6027017E12, 53939.0], [1.60270188E12, 30131.0], [1.60270158E12, 38442.0], [1.60270206E12, 55631.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60270176E12, 355.8279997396469], [1.60270146E12, 363.14199708223344], [1.60270194E12, 337.52699964165686], [1.60270164E12, 295.40199776411055], [1.60270182E12, 290.74799666881563], [1.60270152E12, 269.56799953460694], [1.602702E12, 278.0], [1.6027017E12, 345.1199993610382], [1.60270188E12, 336.28799951553344], [1.60270158E12, 339.03199917793273], [1.60270206E12, 342.40999940633776]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60270176E12, 356.8108001041412], [1.60270146E12, 369.3556000804901], [1.60270194E12, 338.87970014333723], [1.60270164E12, 303.21060069561], [1.60270182E12, 303.3228013324738], [1.60270152E12, 271.32480018615723], [1.602702E12, 278.2940002918243], [1.6027017E12, 346.91920015335086], [1.60270188E12, 338.0584000968933], [1.60270158E12, 340.8007001233101], [1.60270206E12, 344.1085000395775]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60270176E12, 356.3739998698235], [1.60270146E12, 369.01799989938735], [1.60270194E12, 338.2784998208284], [1.60270164E12, 300.09099888205526], [1.60270182E12, 297.7339983344078], [1.60270152E12, 270.5439997673035], [1.602702E12, 278.0], [1.6027017E12, 346.27599980831144], [1.60270188E12, 337.30399975776675], [1.60270158E12, 340.28349984586237], [1.60270206E12, 343.65499970316887]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60270176E12, 340.0], [1.60270146E12, 330.0], [1.60270194E12, 313.0], [1.60270164E12, 272.0], [1.60270182E12, 263.0], [1.60270152E12, 267.0], [1.602702E12, 272.0], [1.6027017E12, 261.0], [1.60270188E12, 314.0], [1.60270158E12, 320.0], [1.60270206E12, 306.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60270176E12, 883.0], [1.60270146E12, 750.0], [1.60270194E12, 865.0], [1.60270164E12, 708.5], [1.60270182E12, 631.5], [1.60270152E12, 677.0], [1.602702E12, 769.0], [1.6027017E12, 694.0], [1.60270188E12, 691.0], [1.60270158E12, 892.5], [1.60270206E12, 763.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60270206E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 395.0, "minX": 1.0, "maxY": 64068.0, "series": [{"data": [[8.0, 809.0], [2.0, 1084.0], [9.0, 750.0], [10.0, 683.0], [11.0, 670.5], [3.0, 1137.0], [12.0, 640.0], [13.0, 622.0], [14.0, 570.5], [15.0, 456.0], [4.0, 1008.0], [1.0, 4436.0], [16.0, 460.0], [17.0, 395.0], [5.0, 968.0], [6.0, 922.5], [7.0, 868.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 64066.0], [10.0, 64065.0], [12.0, 64065.0], [14.0, 64068.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 394.0, "minX": 1.0, "maxY": 64067.5, "series": [{"data": [[8.0, 806.5], [2.0, 1080.5], [9.0, 748.5], [10.0, 681.0], [11.0, 669.0], [3.0, 1136.0], [12.0, 637.0], [13.0, 618.0], [14.0, 569.5], [15.0, 454.5], [4.0, 1006.0], [1.0, 4434.0], [16.0, 459.5], [17.0, 394.0], [5.0, 966.0], [6.0, 921.0], [7.0, 864.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 64066.0], [10.0, 64065.0], [12.0, 64065.0], [14.0, 64067.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.066666666666666, "minX": 1.60270146E12, "maxY": 8.933333333333334, "series": [{"data": [[1.60270176E12, 6.066666666666666], [1.60270146E12, 7.183333333333334], [1.60270194E12, 8.333333333333334], [1.60270164E12, 8.666666666666666], [1.60270182E12, 8.316666666666666], [1.60270152E12, 8.116666666666667], [1.602702E12, 8.483333333333333], [1.6027017E12, 8.933333333333334], [1.60270188E12, 8.466666666666667], [1.60270158E12, 7.183333333333334], [1.60270206E12, 6.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60270206E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60270146E12, "maxY": 8.916666666666666, "series": [{"data": [[1.60270176E12, 6.05], [1.60270146E12, 7.016666666666667], [1.60270194E12, 8.333333333333334], [1.60270164E12, 8.666666666666666], [1.60270182E12, 8.3], [1.60270152E12, 8.116666666666667], [1.602702E12, 8.483333333333333], [1.6027017E12, 8.916666666666666], [1.60270188E12, 8.45], [1.60270158E12, 7.166666666666667], [1.60270206E12, 6.9]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60270176E12, 0.016666666666666666], [1.60270164E12, 0.016666666666666666], [1.60270182E12, 0.016666666666666666], [1.602702E12, 0.016666666666666666], [1.60270188E12, 0.016666666666666666], [1.60270158E12, 0.016666666666666666]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60270206E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60270146E12, "maxY": 8.916666666666666, "series": [{"data": [[1.60270176E12, 6.05], [1.60270146E12, 7.016666666666667], [1.60270194E12, 8.333333333333334], [1.60270164E12, 8.666666666666666], [1.60270182E12, 8.3], [1.60270152E12, 8.116666666666667], [1.602702E12, 8.483333333333333], [1.6027017E12, 8.916666666666666], [1.60270188E12, 8.45], [1.60270158E12, 7.166666666666667], [1.60270206E12, 6.9]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60270176E12, 0.016666666666666666], [1.60270164E12, 0.016666666666666666], [1.60270182E12, 0.016666666666666666], [1.602702E12, 0.016666666666666666], [1.60270188E12, 0.016666666666666666], [1.60270158E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60270206E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60270146E12, "maxY": 8.916666666666666, "series": [{"data": [[1.60270176E12, 6.05], [1.60270146E12, 7.016666666666667], [1.60270194E12, 8.333333333333334], [1.60270164E12, 8.666666666666666], [1.60270182E12, 8.3], [1.60270152E12, 8.116666666666667], [1.602702E12, 8.483333333333333], [1.6027017E12, 8.916666666666666], [1.60270188E12, 8.45], [1.60270158E12, 7.166666666666667], [1.60270206E12, 6.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60270176E12, 0.016666666666666666], [1.60270164E12, 0.016666666666666666], [1.60270182E12, 0.016666666666666666], [1.602702E12, 0.016666666666666666], [1.60270188E12, 0.016666666666666666], [1.60270158E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60270206E12, "title": "Total Transactions Per Second"}},
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

