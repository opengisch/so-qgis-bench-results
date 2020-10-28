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
        data: {"result": {"minY": 269.0, "minX": 0.0, "maxY": 64070.0, "series": [{"data": [[0.0, 269.0], [0.1, 279.0], [0.2, 282.0], [0.3, 292.0], [0.4, 298.0], [0.5, 305.0], [0.6, 315.0], [0.7, 323.0], [0.8, 330.0], [0.9, 336.0], [1.0, 339.0], [1.1, 341.0], [1.2, 343.0], [1.3, 346.0], [1.4, 349.0], [1.5, 351.0], [1.6, 353.0], [1.7, 355.0], [1.8, 357.0], [1.9, 358.0], [2.0, 360.0], [2.1, 361.0], [2.2, 362.0], [2.3, 363.0], [2.4, 363.0], [2.5, 365.0], [2.6, 366.0], [2.7, 367.0], [2.8, 368.0], [2.9, 368.0], [3.0, 369.0], [3.1, 369.0], [3.2, 370.0], [3.3, 371.0], [3.4, 372.0], [3.5, 374.0], [3.6, 374.0], [3.7, 375.0], [3.8, 376.0], [3.9, 377.0], [4.0, 377.0], [4.1, 378.0], [4.2, 378.0], [4.3, 379.0], [4.4, 379.0], [4.5, 380.0], [4.6, 380.0], [4.7, 382.0], [4.8, 382.0], [4.9, 383.0], [5.0, 384.0], [5.1, 385.0], [5.2, 386.0], [5.3, 387.0], [5.4, 388.0], [5.5, 389.0], [5.6, 391.0], [5.7, 391.0], [5.8, 392.0], [5.9, 393.0], [6.0, 394.0], [6.1, 395.0], [6.2, 396.0], [6.3, 397.0], [6.4, 397.0], [6.5, 397.0], [6.6, 399.0], [6.7, 399.0], [6.8, 400.0], [6.9, 401.0], [7.0, 402.0], [7.1, 402.0], [7.2, 403.0], [7.3, 404.0], [7.4, 405.0], [7.5, 406.0], [7.6, 406.0], [7.7, 407.0], [7.8, 408.0], [7.9, 408.0], [8.0, 409.0], [8.1, 410.0], [8.2, 410.0], [8.3, 411.0], [8.4, 412.0], [8.5, 413.0], [8.6, 413.0], [8.7, 414.0], [8.8, 415.0], [8.9, 416.0], [9.0, 417.0], [9.1, 418.0], [9.2, 418.0], [9.3, 419.0], [9.4, 419.0], [9.5, 420.0], [9.6, 421.0], [9.7, 421.0], [9.8, 422.0], [9.9, 423.0], [10.0, 423.0], [10.1, 423.0], [10.2, 424.0], [10.3, 425.0], [10.4, 425.0], [10.5, 426.0], [10.6, 427.0], [10.7, 427.0], [10.8, 428.0], [10.9, 429.0], [11.0, 430.0], [11.1, 430.0], [11.2, 430.0], [11.3, 431.0], [11.4, 432.0], [11.5, 432.0], [11.6, 434.0], [11.7, 434.0], [11.8, 435.0], [11.9, 436.0], [12.0, 436.0], [12.1, 437.0], [12.2, 437.0], [12.3, 438.0], [12.4, 439.0], [12.5, 440.0], [12.6, 441.0], [12.7, 442.0], [12.8, 443.0], [12.9, 443.0], [13.0, 444.0], [13.1, 444.0], [13.2, 445.0], [13.3, 446.0], [13.4, 446.0], [13.5, 446.0], [13.6, 446.0], [13.7, 447.0], [13.8, 447.0], [13.9, 448.0], [14.0, 448.0], [14.1, 449.0], [14.2, 449.0], [14.3, 450.0], [14.4, 450.0], [14.5, 450.0], [14.6, 451.0], [14.7, 451.0], [14.8, 452.0], [14.9, 452.0], [15.0, 453.0], [15.1, 453.0], [15.2, 454.0], [15.3, 454.0], [15.4, 455.0], [15.5, 456.0], [15.6, 456.0], [15.7, 457.0], [15.8, 457.0], [15.9, 458.0], [16.0, 458.0], [16.1, 459.0], [16.2, 460.0], [16.3, 460.0], [16.4, 461.0], [16.5, 461.0], [16.6, 462.0], [16.7, 462.0], [16.8, 463.0], [16.9, 463.0], [17.0, 464.0], [17.1, 465.0], [17.2, 466.0], [17.3, 467.0], [17.4, 467.0], [17.5, 469.0], [17.6, 470.0], [17.7, 470.0], [17.8, 471.0], [17.9, 472.0], [18.0, 473.0], [18.1, 474.0], [18.2, 475.0], [18.3, 476.0], [18.4, 476.0], [18.5, 477.0], [18.6, 478.0], [18.7, 479.0], [18.8, 481.0], [18.9, 481.0], [19.0, 483.0], [19.1, 483.0], [19.2, 484.0], [19.3, 485.0], [19.4, 486.0], [19.5, 487.0], [19.6, 488.0], [19.7, 488.0], [19.8, 489.0], [19.9, 490.0], [20.0, 491.0], [20.1, 492.0], [20.2, 493.0], [20.3, 494.0], [20.4, 494.0], [20.5, 495.0], [20.6, 496.0], [20.7, 497.0], [20.8, 499.0], [20.9, 499.0], [21.0, 500.0], [21.1, 501.0], [21.2, 502.0], [21.3, 503.0], [21.4, 503.0], [21.5, 504.0], [21.6, 505.0], [21.7, 506.0], [21.8, 508.0], [21.9, 509.0], [22.0, 510.0], [22.1, 511.0], [22.2, 511.0], [22.3, 512.0], [22.4, 514.0], [22.5, 515.0], [22.6, 516.0], [22.7, 516.0], [22.8, 518.0], [22.9, 519.0], [23.0, 520.0], [23.1, 521.0], [23.2, 522.0], [23.3, 522.0], [23.4, 523.0], [23.5, 524.0], [23.6, 525.0], [23.7, 525.0], [23.8, 527.0], [23.9, 528.0], [24.0, 528.0], [24.1, 529.0], [24.2, 531.0], [24.3, 532.0], [24.4, 533.0], [24.5, 535.0], [24.6, 536.0], [24.7, 537.0], [24.8, 538.0], [24.9, 539.0], [25.0, 541.0], [25.1, 542.0], [25.2, 543.0], [25.3, 544.0], [25.4, 545.0], [25.5, 546.0], [25.6, 547.0], [25.7, 547.0], [25.8, 548.0], [25.9, 550.0], [26.0, 550.0], [26.1, 552.0], [26.2, 553.0], [26.3, 554.0], [26.4, 555.0], [26.5, 556.0], [26.6, 557.0], [26.7, 558.0], [26.8, 559.0], [26.9, 560.0], [27.0, 560.0], [27.1, 561.0], [27.2, 561.0], [27.3, 563.0], [27.4, 564.0], [27.5, 565.0], [27.6, 567.0], [27.7, 568.0], [27.8, 569.0], [27.9, 570.0], [28.0, 571.0], [28.1, 572.0], [28.2, 572.0], [28.3, 573.0], [28.4, 573.0], [28.5, 575.0], [28.6, 575.0], [28.7, 577.0], [28.8, 578.0], [28.9, 579.0], [29.0, 580.0], [29.1, 581.0], [29.2, 582.0], [29.3, 584.0], [29.4, 585.0], [29.5, 587.0], [29.6, 588.0], [29.7, 589.0], [29.8, 589.0], [29.9, 590.0], [30.0, 590.0], [30.1, 592.0], [30.2, 592.0], [30.3, 593.0], [30.4, 594.0], [30.5, 595.0], [30.6, 597.0], [30.7, 598.0], [30.8, 599.0], [30.9, 600.0], [31.0, 601.0], [31.1, 602.0], [31.2, 603.0], [31.3, 603.0], [31.4, 604.0], [31.5, 605.0], [31.6, 606.0], [31.7, 606.0], [31.8, 607.0], [31.9, 608.0], [32.0, 609.0], [32.1, 610.0], [32.2, 611.0], [32.3, 612.0], [32.4, 612.0], [32.5, 613.0], [32.6, 614.0], [32.7, 615.0], [32.8, 616.0], [32.9, 617.0], [33.0, 617.0], [33.1, 618.0], [33.2, 619.0], [33.3, 620.0], [33.4, 621.0], [33.5, 622.0], [33.6, 623.0], [33.7, 623.0], [33.8, 625.0], [33.9, 625.0], [34.0, 626.0], [34.1, 627.0], [34.2, 628.0], [34.3, 629.0], [34.4, 630.0], [34.5, 630.0], [34.6, 631.0], [34.7, 631.0], [34.8, 632.0], [34.9, 634.0], [35.0, 635.0], [35.1, 635.0], [35.2, 636.0], [35.3, 637.0], [35.4, 638.0], [35.5, 639.0], [35.6, 639.0], [35.7, 640.0], [35.8, 641.0], [35.9, 642.0], [36.0, 643.0], [36.1, 644.0], [36.2, 644.0], [36.3, 645.0], [36.4, 646.0], [36.5, 646.0], [36.6, 647.0], [36.7, 647.0], [36.8, 648.0], [36.9, 649.0], [37.0, 649.0], [37.1, 650.0], [37.2, 651.0], [37.3, 652.0], [37.4, 653.0], [37.5, 654.0], [37.6, 654.0], [37.7, 655.0], [37.8, 655.0], [37.9, 656.0], [38.0, 657.0], [38.1, 657.0], [38.2, 658.0], [38.3, 658.0], [38.4, 659.0], [38.5, 661.0], [38.6, 662.0], [38.7, 663.0], [38.8, 664.0], [38.9, 665.0], [39.0, 666.0], [39.1, 667.0], [39.2, 668.0], [39.3, 668.0], [39.4, 669.0], [39.5, 670.0], [39.6, 670.0], [39.7, 672.0], [39.8, 672.0], [39.9, 673.0], [40.0, 674.0], [40.1, 674.0], [40.2, 675.0], [40.3, 675.0], [40.4, 677.0], [40.5, 677.0], [40.6, 678.0], [40.7, 679.0], [40.8, 680.0], [40.9, 680.0], [41.0, 681.0], [41.1, 682.0], [41.2, 683.0], [41.3, 683.0], [41.4, 683.0], [41.5, 684.0], [41.6, 685.0], [41.7, 685.0], [41.8, 687.0], [41.9, 687.0], [42.0, 688.0], [42.1, 690.0], [42.2, 691.0], [42.3, 692.0], [42.4, 692.0], [42.5, 694.0], [42.6, 694.0], [42.7, 694.0], [42.8, 695.0], [42.9, 696.0], [43.0, 696.0], [43.1, 697.0], [43.2, 698.0], [43.3, 699.0], [43.4, 700.0], [43.5, 701.0], [43.6, 703.0], [43.7, 703.0], [43.8, 704.0], [43.9, 705.0], [44.0, 706.0], [44.1, 707.0], [44.2, 707.0], [44.3, 708.0], [44.4, 709.0], [44.5, 710.0], [44.6, 710.0], [44.7, 711.0], [44.8, 711.0], [44.9, 712.0], [45.0, 713.0], [45.1, 714.0], [45.2, 715.0], [45.3, 716.0], [45.4, 717.0], [45.5, 718.0], [45.6, 719.0], [45.7, 721.0], [45.8, 722.0], [45.9, 722.0], [46.0, 723.0], [46.1, 724.0], [46.2, 725.0], [46.3, 726.0], [46.4, 728.0], [46.5, 729.0], [46.6, 730.0], [46.7, 732.0], [46.8, 732.0], [46.9, 733.0], [47.0, 735.0], [47.1, 738.0], [47.2, 738.0], [47.3, 741.0], [47.4, 743.0], [47.5, 744.0], [47.6, 744.0], [47.7, 745.0], [47.8, 747.0], [47.9, 749.0], [48.0, 750.0], [48.1, 751.0], [48.2, 752.0], [48.3, 753.0], [48.4, 753.0], [48.5, 755.0], [48.6, 755.0], [48.7, 756.0], [48.8, 757.0], [48.9, 757.0], [49.0, 759.0], [49.1, 760.0], [49.2, 762.0], [49.3, 763.0], [49.4, 764.0], [49.5, 765.0], [49.6, 767.0], [49.7, 768.0], [49.8, 769.0], [49.9, 770.0], [50.0, 771.0], [50.1, 772.0], [50.2, 773.0], [50.3, 773.0], [50.4, 774.0], [50.5, 776.0], [50.6, 777.0], [50.7, 779.0], [50.8, 780.0], [50.9, 781.0], [51.0, 781.0], [51.1, 782.0], [51.2, 784.0], [51.3, 785.0], [51.4, 786.0], [51.5, 787.0], [51.6, 788.0], [51.7, 790.0], [51.8, 790.0], [51.9, 792.0], [52.0, 792.0], [52.1, 794.0], [52.2, 796.0], [52.3, 797.0], [52.4, 798.0], [52.5, 799.0], [52.6, 800.0], [52.7, 802.0], [52.8, 804.0], [52.9, 805.0], [53.0, 806.0], [53.1, 808.0], [53.2, 809.0], [53.3, 810.0], [53.4, 812.0], [53.5, 813.0], [53.6, 814.0], [53.7, 817.0], [53.8, 818.0], [53.9, 819.0], [54.0, 821.0], [54.1, 822.0], [54.2, 823.0], [54.3, 825.0], [54.4, 826.0], [54.5, 827.0], [54.6, 829.0], [54.7, 830.0], [54.8, 831.0], [54.9, 832.0], [55.0, 834.0], [55.1, 834.0], [55.2, 835.0], [55.3, 838.0], [55.4, 840.0], [55.5, 841.0], [55.6, 842.0], [55.7, 844.0], [55.8, 846.0], [55.9, 847.0], [56.0, 848.0], [56.1, 849.0], [56.2, 850.0], [56.3, 850.0], [56.4, 852.0], [56.5, 853.0], [56.6, 854.0], [56.7, 855.0], [56.8, 855.0], [56.9, 856.0], [57.0, 858.0], [57.1, 858.0], [57.2, 859.0], [57.3, 860.0], [57.4, 860.0], [57.5, 861.0], [57.6, 862.0], [57.7, 863.0], [57.8, 863.0], [57.9, 864.0], [58.0, 865.0], [58.1, 866.0], [58.2, 866.0], [58.3, 867.0], [58.4, 867.0], [58.5, 868.0], [58.6, 869.0], [58.7, 869.0], [58.8, 870.0], [58.9, 870.0], [59.0, 871.0], [59.1, 871.0], [59.2, 872.0], [59.3, 873.0], [59.4, 873.0], [59.5, 874.0], [59.6, 875.0], [59.7, 876.0], [59.8, 876.0], [59.9, 877.0], [60.0, 878.0], [60.1, 878.0], [60.2, 879.0], [60.3, 879.0], [60.4, 880.0], [60.5, 881.0], [60.6, 881.0], [60.7, 882.0], [60.8, 883.0], [60.9, 883.0], [61.0, 884.0], [61.1, 884.0], [61.2, 884.0], [61.3, 885.0], [61.4, 886.0], [61.5, 887.0], [61.6, 888.0], [61.7, 888.0], [61.8, 888.0], [61.9, 889.0], [62.0, 890.0], [62.1, 890.0], [62.2, 891.0], [62.3, 891.0], [62.4, 892.0], [62.5, 893.0], [62.6, 894.0], [62.7, 895.0], [62.8, 896.0], [62.9, 897.0], [63.0, 897.0], [63.1, 898.0], [63.2, 899.0], [63.3, 899.0], [63.4, 900.0], [63.5, 901.0], [63.6, 902.0], [63.7, 902.0], [63.8, 902.0], [63.9, 903.0], [64.0, 903.0], [64.1, 904.0], [64.2, 905.0], [64.3, 907.0], [64.4, 907.0], [64.5, 908.0], [64.6, 908.0], [64.7, 909.0], [64.8, 911.0], [64.9, 911.0], [65.0, 912.0], [65.1, 913.0], [65.2, 914.0], [65.3, 915.0], [65.4, 916.0], [65.5, 917.0], [65.6, 917.0], [65.7, 918.0], [65.8, 919.0], [65.9, 920.0], [66.0, 921.0], [66.1, 923.0], [66.2, 924.0], [66.3, 925.0], [66.4, 925.0], [66.5, 928.0], [66.6, 929.0], [66.7, 930.0], [66.8, 931.0], [66.9, 932.0], [67.0, 933.0], [67.1, 934.0], [67.2, 936.0], [67.3, 936.0], [67.4, 937.0], [67.5, 938.0], [67.6, 939.0], [67.7, 940.0], [67.8, 942.0], [67.9, 945.0], [68.0, 946.0], [68.1, 947.0], [68.2, 948.0], [68.3, 950.0], [68.4, 951.0], [68.5, 952.0], [68.6, 954.0], [68.7, 956.0], [68.8, 957.0], [68.9, 959.0], [69.0, 960.0], [69.1, 960.0], [69.2, 961.0], [69.3, 963.0], [69.4, 964.0], [69.5, 967.0], [69.6, 968.0], [69.7, 970.0], [69.8, 973.0], [69.9, 976.0], [70.0, 978.0], [70.1, 980.0], [70.2, 982.0], [70.3, 983.0], [70.4, 985.0], [70.5, 987.0], [70.6, 988.0], [70.7, 990.0], [70.8, 991.0], [70.9, 994.0], [71.0, 995.0], [71.1, 996.0], [71.2, 998.0], [71.3, 999.0], [71.4, 1002.0], [71.5, 1002.0], [71.6, 1004.0], [71.7, 1005.0], [71.8, 1008.0], [71.9, 1010.0], [72.0, 1012.0], [72.1, 1014.0], [72.2, 1015.0], [72.3, 1017.0], [72.4, 1019.0], [72.5, 1020.0], [72.6, 1023.0], [72.7, 1027.0], [72.8, 1030.0], [72.9, 1032.0], [73.0, 1036.0], [73.1, 1038.0], [73.2, 1040.0], [73.3, 1043.0], [73.4, 1047.0], [73.5, 1050.0], [73.6, 1051.0], [73.7, 1055.0], [73.8, 1061.0], [73.9, 1063.0], [74.0, 1067.0], [74.1, 1068.0], [74.2, 1072.0], [74.3, 1075.0], [74.4, 1082.0], [74.5, 1089.0], [74.6, 1092.0], [74.7, 1094.0], [74.8, 1098.0], [74.9, 1101.0], [75.0, 1104.0], [75.1, 1107.0], [75.2, 1109.0], [75.3, 1114.0], [75.4, 1117.0], [75.5, 1119.0], [75.6, 1122.0], [75.7, 1124.0], [75.8, 1127.0], [75.9, 1134.0], [76.0, 1136.0], [76.1, 1138.0], [76.2, 1143.0], [76.3, 1147.0], [76.4, 1151.0], [76.5, 1151.0], [76.6, 1155.0], [76.7, 1156.0], [76.8, 1159.0], [76.9, 1162.0], [77.0, 1164.0], [77.1, 1166.0], [77.2, 1169.0], [77.3, 1173.0], [77.4, 1177.0], [77.5, 1180.0], [77.6, 1182.0], [77.7, 1187.0], [77.8, 1192.0], [77.9, 1195.0], [78.0, 1201.0], [78.1, 1204.0], [78.2, 1208.0], [78.3, 1210.0], [78.4, 1213.0], [78.5, 1221.0], [78.6, 1224.0], [78.7, 1230.0], [78.8, 1232.0], [78.9, 1234.0], [79.0, 1236.0], [79.1, 1238.0], [79.2, 1240.0], [79.3, 1241.0], [79.4, 1245.0], [79.5, 1252.0], [79.6, 1260.0], [79.7, 1266.0], [79.8, 1271.0], [79.9, 1274.0], [80.0, 1284.0], [80.1, 1292.0], [80.2, 1298.0], [80.3, 1305.0], [80.4, 1313.0], [80.5, 1316.0], [80.6, 1323.0], [80.7, 1334.0], [80.8, 1340.0], [80.9, 1353.0], [81.0, 1357.0], [81.1, 1364.0], [81.2, 1374.0], [81.3, 1382.0], [81.4, 1384.0], [81.5, 1391.0], [81.6, 1399.0], [81.7, 1410.0], [81.8, 1429.0], [81.9, 1435.0], [82.0, 1441.0], [82.1, 1456.0], [82.2, 1464.0], [82.3, 1477.0], [82.4, 1487.0], [82.5, 1498.0], [82.6, 1503.0], [82.7, 1518.0], [82.8, 1521.0], [82.9, 1530.0], [83.0, 1553.0], [83.1, 1575.0], [83.2, 1584.0], [83.3, 1602.0], [83.4, 1608.0], [83.5, 1619.0], [83.6, 1636.0], [83.7, 1654.0], [83.8, 1663.0], [83.9, 1668.0], [84.0, 1676.0], [84.1, 1683.0], [84.2, 1686.0], [84.3, 1691.0], [84.4, 1695.0], [84.5, 1700.0], [84.6, 1705.0], [84.7, 1709.0], [84.8, 1713.0], [84.9, 1715.0], [85.0, 1718.0], [85.1, 1721.0], [85.2, 1723.0], [85.3, 1724.0], [85.4, 1727.0], [85.5, 1731.0], [85.6, 1735.0], [85.7, 1737.0], [85.8, 1739.0], [85.9, 1745.0], [86.0, 1746.0], [86.1, 1748.0], [86.2, 1750.0], [86.3, 1755.0], [86.4, 1757.0], [86.5, 1759.0], [86.6, 1761.0], [86.7, 1766.0], [86.8, 1771.0], [86.9, 1779.0], [87.0, 1783.0], [87.1, 1787.0], [87.2, 1791.0], [87.3, 1795.0], [87.4, 1799.0], [87.5, 1806.0], [87.6, 1809.0], [87.7, 1814.0], [87.8, 1817.0], [87.9, 1820.0], [88.0, 1825.0], [88.1, 1827.0], [88.2, 1829.0], [88.3, 1834.0], [88.4, 1839.0], [88.5, 1842.0], [88.6, 1848.0], [88.7, 1850.0], [88.8, 1853.0], [88.9, 1856.0], [89.0, 1865.0], [89.1, 1869.0], [89.2, 1870.0], [89.3, 1877.0], [89.4, 1881.0], [89.5, 1885.0], [89.6, 1887.0], [89.7, 1889.0], [89.8, 1896.0], [89.9, 1899.0], [90.0, 1905.0], [90.1, 1909.0], [90.2, 1915.0], [90.3, 1926.0], [90.4, 1933.0], [90.5, 1938.0], [90.6, 1947.0], [90.7, 1951.0], [90.8, 1955.0], [90.9, 1959.0], [91.0, 1964.0], [91.1, 1971.0], [91.2, 1974.0], [91.3, 1977.0], [91.4, 1988.0], [91.5, 1997.0], [91.6, 2005.0], [91.7, 2011.0], [91.8, 2023.0], [91.9, 2036.0], [92.0, 2041.0], [92.1, 2048.0], [92.2, 2056.0], [92.3, 2064.0], [92.4, 2072.0], [92.5, 2091.0], [92.6, 2109.0], [92.7, 2130.0], [92.8, 2145.0], [92.9, 2155.0], [93.0, 2163.0], [93.1, 2179.0], [93.2, 2192.0], [93.3, 2204.0], [93.4, 2220.0], [93.5, 2238.0], [93.6, 2245.0], [93.7, 2265.0], [93.8, 2273.0], [93.9, 2286.0], [94.0, 2298.0], [94.1, 2311.0], [94.2, 2334.0], [94.3, 2341.0], [94.4, 2372.0], [94.5, 2407.0], [94.6, 2429.0], [94.7, 2444.0], [94.8, 2468.0], [94.9, 2489.0], [95.0, 2499.0], [95.1, 2539.0], [95.2, 2554.0], [95.3, 2571.0], [95.4, 2592.0], [95.5, 2650.0], [95.6, 2709.0], [95.7, 2744.0], [95.8, 2792.0], [95.9, 2822.0], [96.0, 2873.0], [96.1, 2888.0], [96.2, 2933.0], [96.3, 2970.0], [96.4, 3043.0], [96.5, 3075.0], [96.6, 3114.0], [96.7, 3220.0], [96.8, 3270.0], [96.9, 3423.0], [97.0, 3535.0], [97.1, 3610.0], [97.2, 3672.0], [97.3, 3845.0], [97.4, 3981.0], [97.5, 4078.0], [97.6, 4121.0], [97.7, 4209.0], [97.8, 4279.0], [97.9, 4330.0], [98.0, 4391.0], [98.1, 4499.0], [98.2, 4561.0], [98.3, 4768.0], [98.4, 5028.0], [98.5, 5289.0], [98.6, 5598.0], [98.7, 5883.0], [98.8, 6319.0], [98.9, 6533.0], [99.0, 7147.0], [99.1, 8138.0], [99.2, 10034.0], [99.3, 11621.0], [99.4, 14930.0], [99.5, 23533.0], [99.6, 34132.0], [99.7, 45398.0], [99.8, 47458.0], [99.9, 64065.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 740.0, "series": [{"data": [[34100.0, 1.0], [35900.0, 1.0], [45300.0, 1.0], [46700.0, 1.0], [45700.0, 1.0], [46500.0, 1.0], [200.0, 21.0], [54500.0, 1.0], [300.0, 328.0], [400.0, 740.0], [500.0, 512.0], [600.0, 648.0], [700.0, 479.0], [800.0, 558.0], [900.0, 415.0], [1000.0, 186.0], [1100.0, 161.0], [1200.0, 115.0], [1300.0, 73.0], [1400.0, 48.0], [1500.0, 39.0], [1600.0, 61.0], [1700.0, 153.0], [1800.0, 129.0], [1900.0, 86.0], [2000.0, 52.0], [2100.0, 36.0], [2300.0, 23.0], [2200.0, 40.0], [2400.0, 28.0], [2500.0, 22.0], [2600.0, 7.0], [2700.0, 13.0], [2800.0, 17.0], [2900.0, 10.0], [3000.0, 11.0], [3100.0, 7.0], [3300.0, 5.0], [3200.0, 6.0], [3400.0, 2.0], [3500.0, 7.0], [3700.0, 4.0], [3600.0, 7.0], [3800.0, 4.0], [3900.0, 3.0], [4000.0, 8.0], [4200.0, 11.0], [4300.0, 8.0], [4100.0, 4.0], [4400.0, 5.0], [4500.0, 7.0], [4600.0, 1.0], [4800.0, 1.0], [4700.0, 3.0], [5100.0, 2.0], [5000.0, 4.0], [5300.0, 3.0], [5200.0, 3.0], [5600.0, 3.0], [5500.0, 1.0], [5400.0, 1.0], [5700.0, 1.0], [5800.0, 1.0], [6000.0, 1.0], [5900.0, 2.0], [6300.0, 1.0], [6200.0, 1.0], [6400.0, 3.0], [6500.0, 3.0], [6900.0, 2.0], [6700.0, 1.0], [7100.0, 2.0], [7000.0, 1.0], [7500.0, 2.0], [7600.0, 1.0], [8100.0, 1.0], [8600.0, 2.0], [8900.0, 1.0], [9900.0, 1.0], [10000.0, 1.0], [10700.0, 1.0], [10900.0, 1.0], [10800.0, 1.0], [11700.0, 1.0], [11300.0, 1.0], [11600.0, 1.0], [12400.0, 1.0], [13000.0, 1.0], [14400.0, 1.0], [14900.0, 2.0], [15100.0, 1.0], [20900.0, 1.0], [21400.0, 1.0], [21600.0, 1.0], [23500.0, 1.0], [28700.0, 1.0], [28800.0, 1.0], [28900.0, 1.0], [29800.0, 1.0], [35200.0, 1.0], [39600.0, 1.0], [41600.0, 1.0], [45600.0, 1.0], [47400.0, 1.0], [49600.0, 1.0], [61200.0, 1.0], [64000.0, 6.0], [63600.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 64000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3190.0, "series": [{"data": [[0.0, 1094.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3190.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 900.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 6.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.890776699029125, "minX": 1.60386612E12, "maxY": 10.0, "series": [{"data": [[1.60386618E12, 10.0], [1.60386648E12, 10.0], [1.60386666E12, 10.0], [1.60386636E12, 10.0], [1.60386654E12, 10.0], [1.60386624E12, 10.0], [1.60386672E12, 10.0], [1.60386642E12, 10.0], [1.6038666E12, 10.0], [1.60386612E12, 10.0], [1.6038663E12, 10.0], [1.60386678E12, 9.890776699029125]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386678E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 799.0, "minX": 1.0, "maxY": 46522.0, "series": [{"data": [[8.0, 799.0], [4.0, 998.0], [2.0, 28960.0], [1.0, 6247.0], [9.0, 1231.0], [10.0, 1261.3684616869355], [5.0, 46522.0], [6.0, 924.0], [3.0, 994.0], [7.0, 1020.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1276.0780346820832]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 370.4, "minX": 1.60386612E12, "maxY": 6138513.833333333, "series": [{"data": [[1.60386618E12, 3647563.966666667], [1.60386648E12, 3752872.4166666665], [1.60386666E12, 6138513.833333333], [1.60386636E12, 5036834.8], [1.60386654E12, 2873908.7333333334], [1.60386624E12, 3478938.55], [1.60386672E12, 4827590.733333333], [1.60386642E12, 4622251.516666667], [1.6038666E12, 4189311.783333333], [1.60386612E12, 690751.8833333333], [1.6038663E12, 5935388.233333333], [1.60386678E12, 3082461.183333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60386618E12, 3252.55], [1.60386648E12, 2810.866666666667], [1.60386666E12, 3685.733333333333], [1.60386636E12, 3706.9], [1.60386654E12, 3154.7166666666667], [1.60386624E12, 3303.616666666667], [1.60386672E12, 3595.85], [1.60386642E12, 3638.6], [1.6038666E12, 3605.1], [1.60386612E12, 370.4], [1.6038663E12, 3152.5833333333335], [1.60386678E12, 3002.9166666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386678E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1063.8152610441775, "minX": 1.60386612E12, "maxY": 1647.8050632911404, "series": [{"data": [[1.60386618E12, 1251.382165605096], [1.60386648E12, 1647.8050632911404], [1.60386666E12, 1194.4592445328042], [1.60386636E12, 1188.9346534653482], [1.60386654E12, 1269.430463576158], [1.60386624E12, 1277.608137044969], [1.60386672E12, 1268.513292433539], [1.60386642E12, 1063.8152610441775], [1.6038666E12, 1153.1601562499989], [1.60386612E12, 1198.5400000000002], [1.6038663E12, 1375.4459770114945], [1.60386678E12, 1482.7524271844666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386678E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1061.4357429718864, "minX": 1.60386612E12, "maxY": 1645.731645569619, "series": [{"data": [[1.60386618E12, 1249.0997876857762], [1.60386648E12, 1645.731645569619], [1.60386666E12, 1191.5646123260433], [1.60386636E12, 1186.7900990099008], [1.60386654E12, 1268.1346578366442], [1.60386624E12, 1275.7880085653114], [1.60386672E12, 1266.1533742331271], [1.60386642E12, 1061.4357429718864], [1.6038666E12, 1151.093750000002], [1.60386612E12, 1194.4400000000003], [1.6038663E12, 1372.094252873563], [1.60386678E12, 1481.1116504854365]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386678E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01204819277108434, "minX": 1.60386612E12, "maxY": 1.62, "series": [{"data": [[1.60386618E12, 0.02335456475583864], [1.60386648E12, 0.01265822784810128], [1.60386666E12, 0.013916500994035798], [1.60386636E12, 0.013861386138613867], [1.60386654E12, 0.022075055187637995], [1.60386624E12, 0.014989293361884369], [1.60386672E12, 0.014314928425357882], [1.60386642E12, 0.01204819277108434], [1.6038666E12, 0.021484374999999993], [1.60386612E12, 1.62], [1.6038663E12, 0.01609195402298851], [1.60386678E12, 0.01699029126213593]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386678E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 269.0, "minX": 1.60386612E12, "maxY": 63625.0, "series": [{"data": [[1.60386618E12, 41645.0], [1.60386648E12, 47458.0], [1.60386666E12, 35947.0], [1.60386636E12, 23533.0], [1.60386654E12, 39674.0], [1.60386624E12, 45690.0], [1.60386672E12, 45744.0], [1.60386642E12, 35229.0], [1.6038666E12, 63625.0], [1.60386612E12, 3196.0], [1.6038663E12, 54513.0], [1.60386678E12, 61221.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60386618E12, 307.62899876475336], [1.60386648E12, 362.0], [1.60386666E12, 344.1079995203018], [1.60386636E12, 296.16999686956405], [1.60386654E12, 315.4619993519783], [1.60386624E12, 296.75599854946137], [1.60386672E12, 292.4009998834133], [1.60386642E12, 346.98199976205825], [1.6038666E12, 336.6169998776913], [1.60386612E12, 319.0], [1.6038663E12, 340.9239998960495], [1.60386678E12, 348.4529991137981]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60386618E12, 312.2919004940987], [1.60386648E12, 362.0], [1.60386666E12, 345.91880019187926], [1.60386636E12, 307.98700125217437], [1.60386654E12, 317.9082002592087], [1.60386624E12, 302.23160058021546], [1.60386672E12, 292.84110004663466], [1.60386642E12, 347.8802000951767], [1.6038666E12, 338.1018006849289], [1.60386612E12, 319.0], [1.6038663E12, 342.582000207901], [1.60386678E12, 351.26610011816024]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60386618E12, 310.2194993823767], [1.60386648E12, 362.0], [1.60386666E12, 345.11399976015093], [1.60386636E12, 302.734998434782], [1.60386654E12, 316.8209996759891], [1.60386624E12, 299.79799927473067], [1.60386672E12, 292.64549994170665], [1.60386642E12, 347.4809998810291], [1.6038666E12, 336.8734999388456], [1.60386612E12, 319.0], [1.6038663E12, 341.70999974012375], [1.60386678E12, 350.3114995568991]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60386618E12, 279.0], [1.60386648E12, 355.0], [1.60386666E12, 312.0], [1.60386636E12, 269.0], [1.60386654E12, 280.0], [1.60386624E12, 273.0], [1.60386672E12, 285.0], [1.60386642E12, 276.0], [1.6038666E12, 304.0], [1.60386612E12, 319.0], [1.6038663E12, 320.0], [1.60386678E12, 332.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60386618E12, 720.0], [1.60386648E12, 862.5], [1.60386666E12, 866.5], [1.60386636E12, 785.5], [1.60386654E12, 665.0], [1.60386624E12, 706.0], [1.60386672E12, 822.5], [1.60386642E12, 699.5], [1.6038666E12, 716.0], [1.60386612E12, 937.5], [1.6038663E12, 895.0], [1.60386678E12, 764.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386678E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 419.0, "minX": 1.0, "maxY": 64070.0, "series": [{"data": [[8.0, 806.0], [2.0, 1891.5], [9.0, 755.5], [10.0, 683.0], [11.0, 667.0], [3.0, 1230.0], [12.0, 646.0], [13.0, 548.5], [14.0, 610.0], [15.0, 475.0], [4.0, 1092.0], [16.0, 505.5], [1.0, 6247.0], [17.0, 419.0], [18.0, 446.0], [5.0, 956.5], [6.0, 903.0], [7.0, 888.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 64070.0], [10.0, 64066.0], [11.0, 64065.0], [6.0, 64065.0], [7.0, 64065.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 418.0, "minX": 1.0, "maxY": 64070.0, "series": [{"data": [[8.0, 804.0], [2.0, 1888.5], [9.0, 753.5], [10.0, 681.0], [11.0, 666.0], [3.0, 1228.0], [12.0, 643.5], [13.0, 546.0], [14.0, 609.0], [15.0, 474.0], [4.0, 1090.0], [16.0, 505.0], [1.0, 6238.0], [17.0, 418.0], [18.0, 445.0], [5.0, 955.0], [6.0, 900.0], [7.0, 884.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 64070.0], [10.0, 64065.0], [11.0, 64065.0], [6.0, 64065.0], [7.0, 64065.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60386612E12, "maxY": 8.533333333333333, "series": [{"data": [[1.60386618E12, 7.85], [1.60386648E12, 6.583333333333333], [1.60386666E12, 8.383333333333333], [1.60386636E12, 8.416666666666666], [1.60386654E12, 7.55], [1.60386624E12, 7.783333333333333], [1.60386672E12, 8.15], [1.60386642E12, 8.3], [1.6038666E12, 8.533333333333333], [1.60386612E12, 1.0], [1.6038663E12, 7.25], [1.60386678E12, 6.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386678E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60386612E12, "maxY": 8.533333333333333, "series": [{"data": [[1.60386618E12, 7.833333333333333], [1.60386648E12, 6.566666666666666], [1.60386666E12, 8.366666666666667], [1.60386636E12, 8.4], [1.60386654E12, 7.533333333333333], [1.60386624E12, 7.783333333333333], [1.60386672E12, 8.133333333333333], [1.60386642E12, 8.3], [1.6038666E12, 8.533333333333333], [1.60386612E12, 0.8333333333333334], [1.6038663E12, 7.25], [1.60386678E12, 6.866666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60386618E12, 0.016666666666666666], [1.60386648E12, 0.016666666666666666], [1.60386666E12, 0.016666666666666666], [1.60386636E12, 0.016666666666666666], [1.60386654E12, 0.016666666666666666], [1.60386672E12, 0.016666666666666666]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386678E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60386612E12, "maxY": 8.533333333333333, "series": [{"data": [[1.60386618E12, 7.833333333333333], [1.60386648E12, 6.566666666666666], [1.60386666E12, 8.366666666666667], [1.60386636E12, 8.4], [1.60386654E12, 7.533333333333333], [1.60386624E12, 7.783333333333333], [1.60386672E12, 8.133333333333333], [1.60386642E12, 8.3], [1.6038666E12, 8.533333333333333], [1.60386612E12, 0.8333333333333334], [1.6038663E12, 7.25], [1.60386678E12, 6.866666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60386618E12, 0.016666666666666666], [1.60386648E12, 0.016666666666666666], [1.60386666E12, 0.016666666666666666], [1.60386636E12, 0.016666666666666666], [1.60386654E12, 0.016666666666666666], [1.60386672E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386678E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60386612E12, "maxY": 8.533333333333333, "series": [{"data": [[1.60386618E12, 7.833333333333333], [1.60386648E12, 6.566666666666666], [1.60386666E12, 8.366666666666667], [1.60386636E12, 8.4], [1.60386654E12, 7.533333333333333], [1.60386624E12, 7.783333333333333], [1.60386672E12, 8.133333333333333], [1.60386642E12, 8.3], [1.6038666E12, 8.533333333333333], [1.60386612E12, 0.8333333333333334], [1.6038663E12, 7.25], [1.60386678E12, 6.866666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60386618E12, 0.016666666666666666], [1.60386648E12, 0.016666666666666666], [1.60386666E12, 0.016666666666666666], [1.60386636E12, 0.016666666666666666], [1.60386654E12, 0.016666666666666666], [1.60386672E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386678E12, "title": "Total Transactions Per Second"}},
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

