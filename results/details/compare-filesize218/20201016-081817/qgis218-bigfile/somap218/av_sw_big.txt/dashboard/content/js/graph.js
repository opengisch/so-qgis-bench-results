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
        data: {"result": {"minY": 265.0, "minX": 0.0, "maxY": 64069.0, "series": [{"data": [[0.0, 265.0], [0.1, 276.0], [0.2, 280.0], [0.3, 284.0], [0.4, 298.0], [0.5, 315.0], [0.6, 328.0], [0.7, 331.0], [0.8, 336.0], [0.9, 339.0], [1.0, 344.0], [1.1, 346.0], [1.2, 348.0], [1.3, 351.0], [1.4, 352.0], [1.5, 354.0], [1.6, 355.0], [1.7, 356.0], [1.8, 357.0], [1.9, 358.0], [2.0, 359.0], [2.1, 359.0], [2.2, 361.0], [2.3, 362.0], [2.4, 362.0], [2.5, 364.0], [2.6, 364.0], [2.7, 365.0], [2.8, 366.0], [2.9, 366.0], [3.0, 367.0], [3.1, 368.0], [3.2, 369.0], [3.3, 370.0], [3.4, 371.0], [3.5, 371.0], [3.6, 372.0], [3.7, 373.0], [3.8, 375.0], [3.9, 375.0], [4.0, 376.0], [4.1, 376.0], [4.2, 377.0], [4.3, 378.0], [4.4, 380.0], [4.5, 380.0], [4.6, 381.0], [4.7, 381.0], [4.8, 382.0], [4.9, 383.0], [5.0, 385.0], [5.1, 386.0], [5.2, 387.0], [5.3, 387.0], [5.4, 388.0], [5.5, 389.0], [5.6, 390.0], [5.7, 390.0], [5.8, 391.0], [5.9, 391.0], [6.0, 392.0], [6.1, 393.0], [6.2, 393.0], [6.3, 395.0], [6.4, 395.0], [6.5, 396.0], [6.6, 397.0], [6.7, 398.0], [6.8, 398.0], [6.9, 400.0], [7.0, 401.0], [7.1, 402.0], [7.2, 402.0], [7.3, 404.0], [7.4, 404.0], [7.5, 406.0], [7.6, 407.0], [7.7, 408.0], [7.8, 408.0], [7.9, 410.0], [8.0, 411.0], [8.1, 411.0], [8.2, 412.0], [8.3, 413.0], [8.4, 414.0], [8.5, 415.0], [8.6, 415.0], [8.7, 416.0], [8.8, 417.0], [8.9, 419.0], [9.0, 420.0], [9.1, 421.0], [9.2, 422.0], [9.3, 423.0], [9.4, 424.0], [9.5, 425.0], [9.6, 426.0], [9.7, 427.0], [9.8, 427.0], [9.9, 429.0], [10.0, 429.0], [10.1, 430.0], [10.2, 431.0], [10.3, 431.0], [10.4, 432.0], [10.5, 432.0], [10.6, 432.0], [10.7, 433.0], [10.8, 434.0], [10.9, 434.0], [11.0, 435.0], [11.1, 436.0], [11.2, 437.0], [11.3, 437.0], [11.4, 438.0], [11.5, 438.0], [11.6, 439.0], [11.7, 439.0], [11.8, 441.0], [11.9, 442.0], [12.0, 443.0], [12.1, 443.0], [12.2, 444.0], [12.3, 444.0], [12.4, 445.0], [12.5, 445.0], [12.6, 446.0], [12.7, 447.0], [12.8, 448.0], [12.9, 448.0], [13.0, 448.0], [13.1, 449.0], [13.2, 450.0], [13.3, 450.0], [13.4, 451.0], [13.5, 451.0], [13.6, 452.0], [13.7, 452.0], [13.8, 453.0], [13.9, 453.0], [14.0, 454.0], [14.1, 454.0], [14.2, 455.0], [14.3, 455.0], [14.4, 456.0], [14.5, 456.0], [14.6, 457.0], [14.7, 457.0], [14.8, 458.0], [14.9, 459.0], [15.0, 459.0], [15.1, 460.0], [15.2, 461.0], [15.3, 461.0], [15.4, 462.0], [15.5, 462.0], [15.6, 463.0], [15.7, 463.0], [15.8, 464.0], [15.9, 465.0], [16.0, 465.0], [16.1, 466.0], [16.2, 466.0], [16.3, 467.0], [16.4, 467.0], [16.5, 469.0], [16.6, 469.0], [16.7, 470.0], [16.8, 471.0], [16.9, 471.0], [17.0, 472.0], [17.1, 473.0], [17.2, 474.0], [17.3, 474.0], [17.4, 475.0], [17.5, 476.0], [17.6, 478.0], [17.7, 479.0], [17.8, 479.0], [17.9, 480.0], [18.0, 480.0], [18.1, 480.0], [18.2, 482.0], [18.3, 484.0], [18.4, 486.0], [18.5, 486.0], [18.6, 487.0], [18.7, 488.0], [18.8, 489.0], [18.9, 490.0], [19.0, 491.0], [19.1, 492.0], [19.2, 493.0], [19.3, 493.0], [19.4, 495.0], [19.5, 495.0], [19.6, 496.0], [19.7, 497.0], [19.8, 499.0], [19.9, 500.0], [20.0, 501.0], [20.1, 502.0], [20.2, 503.0], [20.3, 504.0], [20.4, 506.0], [20.5, 507.0], [20.6, 507.0], [20.7, 508.0], [20.8, 510.0], [20.9, 511.0], [21.0, 511.0], [21.1, 512.0], [21.2, 515.0], [21.3, 515.0], [21.4, 517.0], [21.5, 517.0], [21.6, 519.0], [21.7, 520.0], [21.8, 521.0], [21.9, 521.0], [22.0, 523.0], [22.1, 523.0], [22.2, 525.0], [22.3, 526.0], [22.4, 527.0], [22.5, 527.0], [22.6, 528.0], [22.7, 529.0], [22.8, 530.0], [22.9, 530.0], [23.0, 531.0], [23.1, 532.0], [23.2, 533.0], [23.3, 534.0], [23.4, 535.0], [23.5, 536.0], [23.6, 537.0], [23.7, 538.0], [23.8, 539.0], [23.9, 539.0], [24.0, 540.0], [24.1, 541.0], [24.2, 542.0], [24.3, 544.0], [24.4, 545.0], [24.5, 546.0], [24.6, 546.0], [24.7, 547.0], [24.8, 548.0], [24.9, 549.0], [25.0, 550.0], [25.1, 552.0], [25.2, 553.0], [25.3, 554.0], [25.4, 555.0], [25.5, 556.0], [25.6, 557.0], [25.7, 558.0], [25.8, 559.0], [25.9, 560.0], [26.0, 561.0], [26.1, 561.0], [26.2, 562.0], [26.3, 564.0], [26.4, 564.0], [26.5, 566.0], [26.6, 566.0], [26.7, 567.0], [26.8, 568.0], [26.9, 570.0], [27.0, 571.0], [27.1, 571.0], [27.2, 572.0], [27.3, 573.0], [27.4, 574.0], [27.5, 576.0], [27.6, 577.0], [27.7, 577.0], [27.8, 578.0], [27.9, 580.0], [28.0, 581.0], [28.1, 582.0], [28.2, 584.0], [28.3, 585.0], [28.4, 586.0], [28.5, 588.0], [28.6, 590.0], [28.7, 591.0], [28.8, 593.0], [28.9, 594.0], [29.0, 594.0], [29.1, 596.0], [29.2, 596.0], [29.3, 597.0], [29.4, 598.0], [29.5, 598.0], [29.6, 599.0], [29.7, 601.0], [29.8, 602.0], [29.9, 604.0], [30.0, 604.0], [30.1, 606.0], [30.2, 606.0], [30.3, 607.0], [30.4, 609.0], [30.5, 609.0], [30.6, 610.0], [30.7, 610.0], [30.8, 611.0], [30.9, 612.0], [31.0, 612.0], [31.1, 613.0], [31.2, 614.0], [31.3, 615.0], [31.4, 615.0], [31.5, 616.0], [31.6, 617.0], [31.7, 618.0], [31.8, 619.0], [31.9, 619.0], [32.0, 620.0], [32.1, 621.0], [32.2, 621.0], [32.3, 622.0], [32.4, 622.0], [32.5, 623.0], [32.6, 624.0], [32.7, 625.0], [32.8, 626.0], [32.9, 627.0], [33.0, 628.0], [33.1, 629.0], [33.2, 630.0], [33.3, 630.0], [33.4, 630.0], [33.5, 631.0], [33.6, 632.0], [33.7, 633.0], [33.8, 633.0], [33.9, 635.0], [34.0, 636.0], [34.1, 637.0], [34.2, 638.0], [34.3, 640.0], [34.4, 640.0], [34.5, 641.0], [34.6, 642.0], [34.7, 643.0], [34.8, 644.0], [34.9, 644.0], [35.0, 644.0], [35.1, 645.0], [35.2, 646.0], [35.3, 647.0], [35.4, 648.0], [35.5, 649.0], [35.6, 650.0], [35.7, 651.0], [35.8, 652.0], [35.9, 653.0], [36.0, 654.0], [36.1, 654.0], [36.2, 655.0], [36.3, 657.0], [36.4, 658.0], [36.5, 658.0], [36.6, 660.0], [36.7, 661.0], [36.8, 661.0], [36.9, 662.0], [37.0, 663.0], [37.1, 664.0], [37.2, 664.0], [37.3, 665.0], [37.4, 666.0], [37.5, 667.0], [37.6, 668.0], [37.7, 669.0], [37.8, 669.0], [37.9, 670.0], [38.0, 671.0], [38.1, 671.0], [38.2, 672.0], [38.3, 673.0], [38.4, 673.0], [38.5, 674.0], [38.6, 675.0], [38.7, 676.0], [38.8, 677.0], [38.9, 678.0], [39.0, 679.0], [39.1, 679.0], [39.2, 680.0], [39.3, 681.0], [39.4, 683.0], [39.5, 683.0], [39.6, 684.0], [39.7, 684.0], [39.8, 685.0], [39.9, 687.0], [40.0, 687.0], [40.1, 688.0], [40.2, 688.0], [40.3, 690.0], [40.4, 691.0], [40.5, 692.0], [40.6, 692.0], [40.7, 693.0], [40.8, 694.0], [40.9, 694.0], [41.0, 695.0], [41.1, 696.0], [41.2, 696.0], [41.3, 697.0], [41.4, 698.0], [41.5, 698.0], [41.6, 700.0], [41.7, 701.0], [41.8, 701.0], [41.9, 701.0], [42.0, 702.0], [42.1, 703.0], [42.2, 703.0], [42.3, 704.0], [42.4, 705.0], [42.5, 706.0], [42.6, 706.0], [42.7, 708.0], [42.8, 708.0], [42.9, 709.0], [43.0, 709.0], [43.1, 711.0], [43.2, 713.0], [43.3, 713.0], [43.4, 714.0], [43.5, 715.0], [43.6, 716.0], [43.7, 717.0], [43.8, 718.0], [43.9, 718.0], [44.0, 719.0], [44.1, 720.0], [44.2, 721.0], [44.3, 722.0], [44.4, 723.0], [44.5, 724.0], [44.6, 724.0], [44.7, 724.0], [44.8, 726.0], [44.9, 727.0], [45.0, 728.0], [45.1, 729.0], [45.2, 730.0], [45.3, 731.0], [45.4, 733.0], [45.5, 733.0], [45.6, 735.0], [45.7, 736.0], [45.8, 736.0], [45.9, 737.0], [46.0, 739.0], [46.1, 740.0], [46.2, 742.0], [46.3, 743.0], [46.4, 745.0], [46.5, 746.0], [46.6, 747.0], [46.7, 748.0], [46.8, 750.0], [46.9, 751.0], [47.0, 752.0], [47.1, 753.0], [47.2, 755.0], [47.3, 756.0], [47.4, 757.0], [47.5, 758.0], [47.6, 759.0], [47.7, 761.0], [47.8, 761.0], [47.9, 763.0], [48.0, 765.0], [48.1, 765.0], [48.2, 767.0], [48.3, 768.0], [48.4, 770.0], [48.5, 771.0], [48.6, 771.0], [48.7, 773.0], [48.8, 774.0], [48.9, 774.0], [49.0, 776.0], [49.1, 777.0], [49.2, 778.0], [49.3, 779.0], [49.4, 781.0], [49.5, 783.0], [49.6, 784.0], [49.7, 785.0], [49.8, 786.0], [49.9, 787.0], [50.0, 788.0], [50.1, 790.0], [50.2, 792.0], [50.3, 793.0], [50.4, 794.0], [50.5, 796.0], [50.6, 797.0], [50.7, 798.0], [50.8, 800.0], [50.9, 801.0], [51.0, 802.0], [51.1, 803.0], [51.2, 804.0], [51.3, 805.0], [51.4, 807.0], [51.5, 809.0], [51.6, 811.0], [51.7, 812.0], [51.8, 814.0], [51.9, 816.0], [52.0, 817.0], [52.1, 819.0], [52.2, 821.0], [52.3, 821.0], [52.4, 824.0], [52.5, 826.0], [52.6, 828.0], [52.7, 830.0], [52.8, 831.0], [52.9, 832.0], [53.0, 834.0], [53.1, 835.0], [53.2, 837.0], [53.3, 838.0], [53.4, 840.0], [53.5, 841.0], [53.6, 844.0], [53.7, 846.0], [53.8, 847.0], [53.9, 848.0], [54.0, 849.0], [54.1, 850.0], [54.2, 851.0], [54.3, 853.0], [54.4, 854.0], [54.5, 854.0], [54.6, 855.0], [54.7, 856.0], [54.8, 857.0], [54.9, 858.0], [55.0, 859.0], [55.1, 860.0], [55.2, 860.0], [55.3, 861.0], [55.4, 862.0], [55.5, 863.0], [55.6, 863.0], [55.7, 864.0], [55.8, 865.0], [55.9, 866.0], [56.0, 866.0], [56.1, 868.0], [56.2, 868.0], [56.3, 869.0], [56.4, 869.0], [56.5, 870.0], [56.6, 871.0], [56.7, 872.0], [56.8, 872.0], [56.9, 873.0], [57.0, 874.0], [57.1, 874.0], [57.2, 875.0], [57.3, 875.0], [57.4, 876.0], [57.5, 877.0], [57.6, 878.0], [57.7, 878.0], [57.8, 879.0], [57.9, 880.0], [58.0, 880.0], [58.1, 881.0], [58.2, 882.0], [58.3, 882.0], [58.4, 883.0], [58.5, 884.0], [58.6, 885.0], [58.7, 885.0], [58.8, 886.0], [58.9, 887.0], [59.0, 888.0], [59.1, 888.0], [59.2, 889.0], [59.3, 889.0], [59.4, 890.0], [59.5, 892.0], [59.6, 893.0], [59.7, 894.0], [59.8, 894.0], [59.9, 895.0], [60.0, 895.0], [60.1, 896.0], [60.2, 897.0], [60.3, 897.0], [60.4, 898.0], [60.5, 899.0], [60.6, 901.0], [60.7, 901.0], [60.8, 902.0], [60.9, 903.0], [61.0, 904.0], [61.1, 905.0], [61.2, 906.0], [61.3, 906.0], [61.4, 907.0], [61.5, 907.0], [61.6, 908.0], [61.7, 910.0], [61.8, 910.0], [61.9, 911.0], [62.0, 911.0], [62.1, 913.0], [62.2, 914.0], [62.3, 914.0], [62.4, 916.0], [62.5, 917.0], [62.6, 917.0], [62.7, 919.0], [62.8, 920.0], [62.9, 922.0], [63.0, 923.0], [63.1, 923.0], [63.2, 924.0], [63.3, 925.0], [63.4, 926.0], [63.5, 927.0], [63.6, 929.0], [63.7, 929.0], [63.8, 930.0], [63.9, 931.0], [64.0, 931.0], [64.1, 932.0], [64.2, 933.0], [64.3, 935.0], [64.4, 936.0], [64.5, 938.0], [64.6, 939.0], [64.7, 940.0], [64.8, 941.0], [64.9, 943.0], [65.0, 944.0], [65.1, 944.0], [65.2, 945.0], [65.3, 946.0], [65.4, 948.0], [65.5, 949.0], [65.6, 949.0], [65.7, 950.0], [65.8, 952.0], [65.9, 953.0], [66.0, 954.0], [66.1, 955.0], [66.2, 956.0], [66.3, 957.0], [66.4, 959.0], [66.5, 961.0], [66.6, 962.0], [66.7, 964.0], [66.8, 964.0], [66.9, 965.0], [67.0, 967.0], [67.1, 968.0], [67.2, 969.0], [67.3, 970.0], [67.4, 972.0], [67.5, 974.0], [67.6, 975.0], [67.7, 976.0], [67.8, 976.0], [67.9, 977.0], [68.0, 978.0], [68.1, 980.0], [68.2, 981.0], [68.3, 981.0], [68.4, 983.0], [68.5, 984.0], [68.6, 985.0], [68.7, 986.0], [68.8, 986.0], [68.9, 988.0], [69.0, 988.0], [69.1, 989.0], [69.2, 990.0], [69.3, 991.0], [69.4, 993.0], [69.5, 995.0], [69.6, 996.0], [69.7, 997.0], [69.8, 998.0], [69.9, 998.0], [70.0, 1000.0], [70.1, 1002.0], [70.2, 1006.0], [70.3, 1007.0], [70.4, 1008.0], [70.5, 1009.0], [70.6, 1011.0], [70.7, 1012.0], [70.8, 1013.0], [70.9, 1016.0], [71.0, 1021.0], [71.1, 1022.0], [71.2, 1023.0], [71.3, 1026.0], [71.4, 1028.0], [71.5, 1030.0], [71.6, 1032.0], [71.7, 1033.0], [71.8, 1036.0], [71.9, 1038.0], [72.0, 1039.0], [72.1, 1044.0], [72.2, 1046.0], [72.3, 1048.0], [72.4, 1049.0], [72.5, 1051.0], [72.6, 1054.0], [72.7, 1061.0], [72.8, 1064.0], [72.9, 1066.0], [73.0, 1073.0], [73.1, 1074.0], [73.2, 1078.0], [73.3, 1080.0], [73.4, 1086.0], [73.5, 1090.0], [73.6, 1093.0], [73.7, 1098.0], [73.8, 1101.0], [73.9, 1105.0], [74.0, 1110.0], [74.1, 1112.0], [74.2, 1114.0], [74.3, 1121.0], [74.4, 1124.0], [74.5, 1127.0], [74.6, 1131.0], [74.7, 1134.0], [74.8, 1136.0], [74.9, 1141.0], [75.0, 1143.0], [75.1, 1147.0], [75.2, 1150.0], [75.3, 1155.0], [75.4, 1156.0], [75.5, 1160.0], [75.6, 1161.0], [75.7, 1165.0], [75.8, 1167.0], [75.9, 1172.0], [76.0, 1176.0], [76.1, 1180.0], [76.2, 1182.0], [76.3, 1186.0], [76.4, 1189.0], [76.5, 1192.0], [76.6, 1195.0], [76.7, 1198.0], [76.8, 1203.0], [76.9, 1208.0], [77.0, 1209.0], [77.1, 1213.0], [77.2, 1216.0], [77.3, 1220.0], [77.4, 1221.0], [77.5, 1227.0], [77.6, 1229.0], [77.7, 1233.0], [77.8, 1237.0], [77.9, 1240.0], [78.0, 1242.0], [78.1, 1248.0], [78.2, 1253.0], [78.3, 1256.0], [78.4, 1260.0], [78.5, 1266.0], [78.6, 1274.0], [78.7, 1276.0], [78.8, 1282.0], [78.9, 1288.0], [79.0, 1293.0], [79.1, 1297.0], [79.2, 1302.0], [79.3, 1306.0], [79.4, 1318.0], [79.5, 1330.0], [79.6, 1335.0], [79.7, 1345.0], [79.8, 1351.0], [79.9, 1358.0], [80.0, 1364.0], [80.1, 1374.0], [80.2, 1378.0], [80.3, 1387.0], [80.4, 1398.0], [80.5, 1407.0], [80.6, 1412.0], [80.7, 1416.0], [80.8, 1427.0], [80.9, 1433.0], [81.0, 1437.0], [81.1, 1443.0], [81.2, 1447.0], [81.3, 1449.0], [81.4, 1457.0], [81.5, 1464.0], [81.6, 1475.0], [81.7, 1493.0], [81.8, 1497.0], [81.9, 1502.0], [82.0, 1514.0], [82.1, 1520.0], [82.2, 1535.0], [82.3, 1547.0], [82.4, 1552.0], [82.5, 1559.0], [82.6, 1571.0], [82.7, 1586.0], [82.8, 1606.0], [82.9, 1610.0], [83.0, 1618.0], [83.1, 1627.0], [83.2, 1638.0], [83.3, 1649.0], [83.4, 1659.0], [83.5, 1680.0], [83.6, 1689.0], [83.7, 1698.0], [83.8, 1703.0], [83.9, 1708.0], [84.0, 1715.0], [84.1, 1719.0], [84.2, 1721.0], [84.3, 1723.0], [84.4, 1729.0], [84.5, 1731.0], [84.6, 1733.0], [84.7, 1737.0], [84.8, 1740.0], [84.9, 1741.0], [85.0, 1743.0], [85.1, 1745.0], [85.2, 1749.0], [85.3, 1753.0], [85.4, 1758.0], [85.5, 1760.0], [85.6, 1763.0], [85.7, 1766.0], [85.8, 1771.0], [85.9, 1775.0], [86.0, 1782.0], [86.1, 1785.0], [86.2, 1789.0], [86.3, 1791.0], [86.4, 1795.0], [86.5, 1807.0], [86.6, 1815.0], [86.7, 1818.0], [86.8, 1819.0], [86.9, 1828.0], [87.0, 1831.0], [87.1, 1834.0], [87.2, 1839.0], [87.3, 1841.0], [87.4, 1844.0], [87.5, 1847.0], [87.6, 1849.0], [87.7, 1853.0], [87.8, 1857.0], [87.9, 1860.0], [88.0, 1864.0], [88.1, 1866.0], [88.2, 1870.0], [88.3, 1872.0], [88.4, 1875.0], [88.5, 1883.0], [88.6, 1887.0], [88.7, 1891.0], [88.8, 1899.0], [88.9, 1904.0], [89.0, 1911.0], [89.1, 1915.0], [89.2, 1918.0], [89.3, 1925.0], [89.4, 1928.0], [89.5, 1938.0], [89.6, 1946.0], [89.7, 1949.0], [89.8, 1956.0], [89.9, 1967.0], [90.0, 1976.0], [90.1, 1981.0], [90.2, 1986.0], [90.3, 1994.0], [90.4, 2004.0], [90.5, 2007.0], [90.6, 2015.0], [90.7, 2024.0], [90.8, 2035.0], [90.9, 2041.0], [91.0, 2050.0], [91.1, 2058.0], [91.2, 2062.0], [91.3, 2072.0], [91.4, 2077.0], [91.5, 2091.0], [91.6, 2102.0], [91.7, 2108.0], [91.8, 2114.0], [91.9, 2118.0], [92.0, 2132.0], [92.1, 2139.0], [92.2, 2153.0], [92.3, 2165.0], [92.4, 2176.0], [92.5, 2192.0], [92.6, 2204.0], [92.7, 2225.0], [92.8, 2234.0], [92.9, 2250.0], [93.0, 2268.0], [93.1, 2277.0], [93.2, 2295.0], [93.3, 2300.0], [93.4, 2316.0], [93.5, 2328.0], [93.6, 2336.0], [93.7, 2346.0], [93.8, 2363.0], [93.9, 2367.0], [94.0, 2399.0], [94.1, 2413.0], [94.2, 2428.0], [94.3, 2464.0], [94.4, 2478.0], [94.5, 2490.0], [94.6, 2512.0], [94.7, 2536.0], [94.8, 2569.0], [94.9, 2602.0], [95.0, 2623.0], [95.1, 2636.0], [95.2, 2670.0], [95.3, 2715.0], [95.4, 2724.0], [95.5, 2739.0], [95.6, 2766.0], [95.7, 2831.0], [95.8, 2880.0], [95.9, 2928.0], [96.0, 2942.0], [96.1, 3007.0], [96.2, 3048.0], [96.3, 3107.0], [96.4, 3222.0], [96.5, 3247.0], [96.6, 3352.0], [96.7, 3388.0], [96.8, 3488.0], [96.9, 3635.0], [97.0, 3690.0], [97.1, 3771.0], [97.2, 3895.0], [97.3, 4027.0], [97.4, 4141.0], [97.5, 4196.0], [97.6, 4251.0], [97.7, 4305.0], [97.8, 4414.0], [97.9, 4496.0], [98.0, 4584.0], [98.1, 4665.0], [98.2, 4709.0], [98.3, 4790.0], [98.4, 4967.0], [98.5, 5545.0], [98.6, 5778.0], [98.7, 6264.0], [98.8, 6454.0], [98.9, 6643.0], [99.0, 6952.0], [99.1, 8113.0], [99.2, 9861.0], [99.3, 11212.0], [99.4, 13586.0], [99.5, 17927.0], [99.6, 31094.0], [99.7, 41829.0], [99.8, 63584.0], [99.9, 64065.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 675.0, "series": [{"data": [[37900.0, 1.0], [40700.0, 1.0], [40500.0, 1.0], [200.0, 21.0], [63500.0, 1.0], [300.0, 336.0], [400.0, 675.0], [500.0, 505.0], [600.0, 622.0], [700.0, 477.0], [800.0, 504.0], [900.0, 491.0], [1000.0, 198.0], [1100.0, 154.0], [1200.0, 123.0], [1300.0, 68.0], [1400.0, 74.0], [1500.0, 48.0], [1600.0, 50.0], [1700.0, 140.0], [1800.0, 123.0], [1900.0, 80.0], [2000.0, 65.0], [2100.0, 49.0], [2300.0, 39.0], [2200.0, 39.0], [2400.0, 26.0], [2500.0, 18.0], [2600.0, 19.0], [2700.0, 20.0], [2800.0, 12.0], [2900.0, 11.0], [3000.0, 10.0], [3100.0, 6.0], [3200.0, 9.0], [3300.0, 7.0], [3400.0, 5.0], [3500.0, 4.0], [3600.0, 8.0], [3700.0, 4.0], [3800.0, 5.0], [3900.0, 3.0], [4000.0, 5.0], [4200.0, 8.0], [4100.0, 8.0], [4300.0, 5.0], [4400.0, 9.0], [4600.0, 7.0], [4500.0, 5.0], [4700.0, 7.0], [4800.0, 2.0], [5100.0, 1.0], [4900.0, 3.0], [5300.0, 2.0], [5500.0, 5.0], [5700.0, 4.0], [6100.0, 1.0], [6000.0, 2.0], [6300.0, 3.0], [6200.0, 1.0], [6600.0, 2.0], [6500.0, 3.0], [6400.0, 3.0], [6700.0, 3.0], [6900.0, 2.0], [7200.0, 1.0], [7800.0, 1.0], [7900.0, 1.0], [8100.0, 1.0], [8000.0, 1.0], [8400.0, 2.0], [8900.0, 1.0], [9000.0, 1.0], [9800.0, 1.0], [10000.0, 1.0], [11000.0, 3.0], [11200.0, 1.0], [11600.0, 1.0], [12600.0, 1.0], [12400.0, 1.0], [13500.0, 1.0], [13400.0, 1.0], [14100.0, 1.0], [14300.0, 1.0], [15300.0, 1.0], [15500.0, 1.0], [16800.0, 1.0], [17900.0, 1.0], [21800.0, 1.0], [24200.0, 1.0], [28600.0, 1.0], [28900.0, 1.0], [31000.0, 1.0], [38000.0, 1.0], [41800.0, 1.0], [45000.0, 1.0], [53000.0, 1.0], [53600.0, 1.0], [58000.0, 1.0], [64000.0, 10.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 64000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3212.0, "series": [{"data": [[0.0, 1037.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3212.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 931.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 10.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.876712328767123, "minX": 1.60283658E12, "maxY": 10.0, "series": [{"data": [[1.60283694E12, 10.0], [1.60283676E12, 10.0], [1.60283724E12, 9.876712328767123], [1.60283658E12, 10.0], [1.60283706E12, 10.0], [1.60283688E12, 10.0], [1.6028367E12, 10.0], [1.60283718E12, 10.0], [1.602837E12, 10.0], [1.60283682E12, 10.0], [1.60283664E12, 10.0], [1.60283712E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283724E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 940.0, "minX": 1.0, "maxY": 53606.0, "series": [{"data": [[8.0, 3084.0], [4.0, 940.0], [2.0, 37900.0], [1.0, 6674.0], [9.0, 1074.0], [10.0, 1291.831499710483], [5.0, 976.0], [6.0, 949.0], [3.0, 53606.0], [7.0, 1028.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1310.0597302504839]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1108.1666666666667, "minX": 1.60283658E12, "maxY": 6238819.25, "series": [{"data": [[1.60283694E12, 3899164.1666666665], [1.60283676E12, 6238819.25], [1.60283724E12, 2745443.316666667], [1.60283658E12, 1824042.2666666666], [1.60283706E12, 5066566.933333334], [1.60283688E12, 4040273.7], [1.6028367E12, 3817276.2666666666], [1.60283718E12, 4601761.7], [1.602837E12, 2287114.2666666666], [1.60283682E12, 4872376.75], [1.60283664E12, 3335646.283333333], [1.60283712E12, 5570738.583333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60283694E12, 3132.6], [1.60283676E12, 3337.85], [1.60283724E12, 2653.5833333333335], [1.60283658E12, 1108.1666666666667], [1.60283706E12, 3494.383333333333], [1.60283688E12, 3465.2833333333333], [1.6028367E12, 3300.4166666666665], [1.60283718E12, 3467.4666666666667], [1.602837E12, 2767.233333333333], [1.60283682E12, 3531.4], [1.60283664E12, 3331.616666666667], [1.60283712E12, 3689.8333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283724E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1104.894957983193, "minX": 1.60283658E12, "maxY": 1767.7726027397255, "series": [{"data": [[1.60283694E12, 1397.0200892857138], [1.60283676E12, 1357.4681318681326], [1.60283724E12, 1767.7726027397255], [1.60283658E12, 1399.4258064516137], [1.60283706E12, 1207.7209775967397], [1.60283688E12, 1104.894957983193], [1.6028367E12, 1305.9232409381673], [1.60283718E12, 1150.36093418259], [1.602837E12, 1540.6632911392398], [1.60283682E12, 1311.7941787941786], [1.60283664E12, 1183.1187499999987], [1.60283712E12, 1216.0674603174602]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283724E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1102.8949579831926, "minX": 1.60283658E12, "maxY": 1765.986301369863, "series": [{"data": [[1.60283694E12, 1395.0379464285713], [1.60283676E12, 1354.1582417582415], [1.60283724E12, 1765.986301369863], [1.60283658E12, 1395.374193548387], [1.60283706E12, 1205.0020366598785], [1.60283688E12, 1102.8949579831926], [1.6028367E12, 1303.142857142856], [1.60283718E12, 1147.8407643312105], [1.602837E12, 1539.415189873418], [1.60283682E12, 1309.1351351351361], [1.60283664E12, 1180.5958333333347], [1.60283712E12, 1213.339285714287]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283724E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010395010395010382, "minX": 1.60283658E12, "maxY": 0.5290322580645157, "series": [{"data": [[1.60283694E12, 0.011160714285714282], [1.60283676E12, 0.013186813186813189], [1.60283724E12, 0.01369863013698629], [1.60283658E12, 0.5290322580645157], [1.60283706E12, 0.012219959266802445], [1.60283688E12, 0.014705882352941183], [1.6028367E12, 0.012793176972281436], [1.60283718E12, 0.01910828025477708], [1.602837E12, 0.015189873417721508], [1.60283682E12, 0.010395010395010382], [1.60283664E12, 0.020833333333333325], [1.60283712E12, 0.01785714285714288]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283724E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 265.0, "minX": 1.60283658E12, "maxY": 63584.0, "series": [{"data": [[1.60283694E12, 14114.0], [1.60283676E12, 40784.0], [1.60283724E12, 53606.0], [1.60283658E12, 16897.0], [1.60283706E12, 63584.0], [1.60283688E12, 31094.0], [1.6028367E12, 6523.0], [1.60283718E12, 38088.0], [1.602837E12, 15530.0], [1.60283682E12, 45058.0], [1.60283664E12, 41829.0], [1.60283712E12, 58099.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60283694E12, 362.0689996802807], [1.60283676E12, 339.56999934911727], [1.60283724E12, 357.56499921679494], [1.60283658E12, 362.2119998884201], [1.60283706E12, 348.71199953079224], [1.60283688E12, 353.29299988627434], [1.6028367E12, 328.63599966526033], [1.60283718E12, 305.1919967365265], [1.602837E12, 280.63799971818923], [1.60283682E12, 287.3159995412827], [1.60283664E12, 315.2379974770546], [1.60283712E12, 339.6079996395111]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60283694E12, 363.2759001278877], [1.60283676E12, 342.0270002603531], [1.60283724E12, 360.521500313282], [1.60283658E12, 362.63320004463196], [1.60283706E12, 350.4832001876831], [1.60283688E12, 353.7223000454903], [1.6028367E12, 329.8996001338959], [1.60283718E12, 317.5112013053894], [1.602837E12, 281.7018001127243], [1.60283682E12, 289.04760018348696], [1.60283664E12, 324.76180100917816], [1.60283712E12, 340.96880014419554]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60283694E12, 362.73949984014035], [1.60283676E12, 340.93499967455864], [1.60283724E12, 359.2074996083975], [1.60283658E12, 362.44599994421003], [1.60283706E12, 349.6959997653961], [1.60283688E12, 353.5314999431372], [1.6028367E12, 329.33799983263015], [1.60283718E12, 312.0359983682632], [1.602837E12, 281.22899985909464], [1.60283682E12, 288.2779997706413], [1.60283664E12, 320.5289987385273], [1.60283712E12, 340.3639998197556]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60283694E12, 315.0], [1.60283676E12, 320.0], [1.60283724E12, 275.0], [1.60283658E12, 361.0], [1.60283706E12, 319.0], [1.60283688E12, 276.0], [1.6028367E12, 265.0], [1.60283718E12, 276.0], [1.602837E12, 278.0], [1.60283682E12, 274.0], [1.60283664E12, 281.0], [1.60283712E12, 311.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60283694E12, 758.0], [1.60283676E12, 894.5], [1.60283724E12, 842.5], [1.60283658E12, 957.0], [1.60283706E12, 848.0], [1.60283688E12, 712.0], [1.6028367E12, 753.0], [1.60283718E12, 830.0], [1.602837E12, 719.0], [1.60283682E12, 775.0], [1.60283664E12, 699.5], [1.60283712E12, 794.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283724E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 462.5, "minX": 1.0, "maxY": 64068.5, "series": [{"data": [[8.0, 868.0], [2.0, 1563.5], [9.0, 765.0], [10.0, 694.5], [11.0, 668.0], [3.0, 1464.0], [12.0, 647.0], [13.0, 643.5], [14.0, 470.0], [15.0, 466.0], [4.0, 1046.5], [1.0, 3042.0], [16.0, 462.5], [5.0, 1083.0], [6.0, 907.0], [7.0, 895.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 64064.0], [9.0, 64068.0], [5.0, 64068.5], [11.0, 64065.5], [6.0, 64066.0], [3.0, 64065.0], [7.0, 64065.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 461.5, "minX": 1.0, "maxY": 64068.5, "series": [{"data": [[8.0, 866.0], [2.0, 1560.0], [9.0, 765.0], [10.0, 692.5], [11.0, 664.0], [3.0, 1458.0], [12.0, 645.5], [13.0, 642.0], [14.0, 469.0], [15.0, 465.0], [4.0, 1043.5], [1.0, 3041.0], [16.0, 461.5], [5.0, 1080.0], [6.0, 905.0], [7.0, 891.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 64064.0], [9.0, 64067.0], [5.0, 64068.5], [11.0, 64065.5], [6.0, 64065.0], [3.0, 64064.0], [7.0, 64064.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.75, "minX": 1.60283658E12, "maxY": 8.383333333333333, "series": [{"data": [[1.60283694E12, 7.466666666666667], [1.60283676E12, 7.583333333333333], [1.60283724E12, 5.916666666666667], [1.60283658E12, 2.75], [1.60283706E12, 8.183333333333334], [1.60283688E12, 7.933333333333334], [1.6028367E12, 7.816666666666666], [1.60283718E12, 7.866666666666666], [1.602837E12, 6.583333333333333], [1.60283682E12, 8.016666666666667], [1.60283664E12, 8.0], [1.60283712E12, 8.383333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283724E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60283658E12, "maxY": 8.383333333333333, "series": [{"data": [[1.60283694E12, 7.433333333333334], [1.60283676E12, 7.566666666666666], [1.60283724E12, 6.066666666666666], [1.60283658E12, 2.5833333333333335], [1.60283706E12, 8.183333333333334], [1.60283688E12, 7.933333333333334], [1.6028367E12, 7.783333333333333], [1.60283718E12, 7.85], [1.602837E12, 6.55], [1.60283682E12, 8.0], [1.60283664E12, 8.0], [1.60283712E12, 8.383333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60283694E12, 0.03333333333333333], [1.60283676E12, 0.016666666666666666], [1.60283724E12, 0.016666666666666666], [1.6028367E12, 0.03333333333333333], [1.602837E12, 0.03333333333333333], [1.60283682E12, 0.016666666666666666], [1.60283712E12, 0.016666666666666666]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283724E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60283658E12, "maxY": 8.383333333333333, "series": [{"data": [[1.60283694E12, 7.433333333333334], [1.60283676E12, 7.566666666666666], [1.60283724E12, 6.066666666666666], [1.60283658E12, 2.5833333333333335], [1.60283706E12, 8.183333333333334], [1.60283688E12, 7.933333333333334], [1.6028367E12, 7.783333333333333], [1.60283718E12, 7.85], [1.602837E12, 6.55], [1.60283682E12, 8.0], [1.60283664E12, 8.0], [1.60283712E12, 8.383333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60283694E12, 0.03333333333333333], [1.60283676E12, 0.016666666666666666], [1.60283724E12, 0.016666666666666666], [1.6028367E12, 0.03333333333333333], [1.602837E12, 0.03333333333333333], [1.60283682E12, 0.016666666666666666], [1.60283712E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283724E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60283658E12, "maxY": 8.383333333333333, "series": [{"data": [[1.60283694E12, 7.433333333333334], [1.60283676E12, 7.566666666666666], [1.60283724E12, 6.066666666666666], [1.60283658E12, 2.5833333333333335], [1.60283706E12, 8.183333333333334], [1.60283688E12, 7.933333333333334], [1.6028367E12, 7.783333333333333], [1.60283718E12, 7.85], [1.602837E12, 6.55], [1.60283682E12, 8.0], [1.60283664E12, 8.0], [1.60283712E12, 8.383333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60283694E12, 0.03333333333333333], [1.60283676E12, 0.016666666666666666], [1.60283724E12, 0.016666666666666666], [1.6028367E12, 0.03333333333333333], [1.602837E12, 0.03333333333333333], [1.60283682E12, 0.016666666666666666], [1.60283712E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283724E12, "title": "Total Transactions Per Second"}},
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

