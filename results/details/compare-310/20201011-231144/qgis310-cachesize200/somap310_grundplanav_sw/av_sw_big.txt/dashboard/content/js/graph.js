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
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 5669.0, "series": [{"data": [[0.0, 183.0], [0.1, 186.0], [0.2, 191.0], [0.3, 193.0], [0.4, 195.0], [0.5, 196.0], [0.6, 197.0], [0.7, 197.0], [0.8, 198.0], [0.9, 199.0], [1.0, 200.0], [1.1, 200.0], [1.2, 201.0], [1.3, 202.0], [1.4, 202.0], [1.5, 203.0], [1.6, 204.0], [1.7, 204.0], [1.8, 205.0], [1.9, 206.0], [2.0, 207.0], [2.1, 207.0], [2.2, 208.0], [2.3, 208.0], [2.4, 209.0], [2.5, 210.0], [2.6, 211.0], [2.7, 212.0], [2.8, 213.0], [2.9, 214.0], [3.0, 216.0], [3.1, 216.0], [3.2, 217.0], [3.3, 218.0], [3.4, 219.0], [3.5, 220.0], [3.6, 220.0], [3.7, 221.0], [3.8, 222.0], [3.9, 222.0], [4.0, 223.0], [4.1, 225.0], [4.2, 226.0], [4.3, 227.0], [4.4, 227.0], [4.5, 228.0], [4.6, 229.0], [4.7, 229.0], [4.8, 230.0], [4.9, 231.0], [5.0, 232.0], [5.1, 233.0], [5.2, 233.0], [5.3, 234.0], [5.4, 235.0], [5.5, 235.0], [5.6, 236.0], [5.7, 237.0], [5.8, 238.0], [5.9, 239.0], [6.0, 240.0], [6.1, 240.0], [6.2, 241.0], [6.3, 243.0], [6.4, 244.0], [6.5, 245.0], [6.6, 246.0], [6.7, 247.0], [6.8, 248.0], [6.9, 250.0], [7.0, 253.0], [7.1, 254.0], [7.2, 255.0], [7.3, 258.0], [7.4, 262.0], [7.5, 263.0], [7.6, 264.0], [7.7, 266.0], [7.8, 267.0], [7.9, 268.0], [8.0, 269.0], [8.1, 270.0], [8.2, 270.0], [8.3, 271.0], [8.4, 271.0], [8.5, 272.0], [8.6, 272.0], [8.7, 273.0], [8.8, 273.0], [8.9, 275.0], [9.0, 275.0], [9.1, 276.0], [9.2, 277.0], [9.3, 277.0], [9.4, 278.0], [9.5, 279.0], [9.6, 280.0], [9.7, 280.0], [9.8, 281.0], [9.9, 281.0], [10.0, 282.0], [10.1, 283.0], [10.2, 284.0], [10.3, 285.0], [10.4, 286.0], [10.5, 287.0], [10.6, 288.0], [10.7, 289.0], [10.8, 289.0], [10.9, 291.0], [11.0, 292.0], [11.1, 294.0], [11.2, 295.0], [11.3, 296.0], [11.4, 297.0], [11.5, 298.0], [11.6, 299.0], [11.7, 301.0], [11.8, 301.0], [11.9, 302.0], [12.0, 304.0], [12.1, 305.0], [12.2, 309.0], [12.3, 310.0], [12.4, 311.0], [12.5, 313.0], [12.6, 314.0], [12.7, 315.0], [12.8, 317.0], [12.9, 317.0], [13.0, 319.0], [13.1, 319.0], [13.2, 320.0], [13.3, 321.0], [13.4, 322.0], [13.5, 324.0], [13.6, 324.0], [13.7, 325.0], [13.8, 327.0], [13.9, 328.0], [14.0, 330.0], [14.1, 331.0], [14.2, 332.0], [14.3, 334.0], [14.4, 335.0], [14.5, 336.0], [14.6, 337.0], [14.7, 339.0], [14.8, 340.0], [14.9, 341.0], [15.0, 344.0], [15.1, 346.0], [15.2, 349.0], [15.3, 352.0], [15.4, 353.0], [15.5, 356.0], [15.6, 358.0], [15.7, 362.0], [15.8, 365.0], [15.9, 366.0], [16.0, 367.0], [16.1, 369.0], [16.2, 370.0], [16.3, 372.0], [16.4, 377.0], [16.5, 378.0], [16.6, 379.0], [16.7, 380.0], [16.8, 380.0], [16.9, 382.0], [17.0, 383.0], [17.1, 384.0], [17.2, 386.0], [17.3, 387.0], [17.4, 388.0], [17.5, 389.0], [17.6, 390.0], [17.7, 391.0], [17.8, 393.0], [17.9, 394.0], [18.0, 395.0], [18.1, 396.0], [18.2, 396.0], [18.3, 397.0], [18.4, 398.0], [18.5, 399.0], [18.6, 399.0], [18.7, 400.0], [18.8, 401.0], [18.9, 401.0], [19.0, 402.0], [19.1, 403.0], [19.2, 404.0], [19.3, 405.0], [19.4, 406.0], [19.5, 407.0], [19.6, 407.0], [19.7, 408.0], [19.8, 409.0], [19.9, 410.0], [20.0, 411.0], [20.1, 412.0], [20.2, 414.0], [20.3, 415.0], [20.4, 416.0], [20.5, 417.0], [20.6, 418.0], [20.7, 419.0], [20.8, 420.0], [20.9, 421.0], [21.0, 422.0], [21.1, 423.0], [21.2, 424.0], [21.3, 425.0], [21.4, 426.0], [21.5, 427.0], [21.6, 428.0], [21.7, 428.0], [21.8, 429.0], [21.9, 430.0], [22.0, 430.0], [22.1, 431.0], [22.2, 432.0], [22.3, 433.0], [22.4, 434.0], [22.5, 434.0], [22.6, 435.0], [22.7, 437.0], [22.8, 437.0], [22.9, 438.0], [23.0, 438.0], [23.1, 439.0], [23.2, 441.0], [23.3, 441.0], [23.4, 442.0], [23.5, 442.0], [23.6, 443.0], [23.7, 444.0], [23.8, 445.0], [23.9, 445.0], [24.0, 446.0], [24.1, 448.0], [24.2, 450.0], [24.3, 450.0], [24.4, 451.0], [24.5, 451.0], [24.6, 452.0], [24.7, 453.0], [24.8, 454.0], [24.9, 455.0], [25.0, 456.0], [25.1, 456.0], [25.2, 457.0], [25.3, 457.0], [25.4, 458.0], [25.5, 459.0], [25.6, 460.0], [25.7, 460.0], [25.8, 461.0], [25.9, 462.0], [26.0, 463.0], [26.1, 464.0], [26.2, 465.0], [26.3, 466.0], [26.4, 467.0], [26.5, 467.0], [26.6, 468.0], [26.7, 468.0], [26.8, 469.0], [26.9, 470.0], [27.0, 470.0], [27.1, 471.0], [27.2, 471.0], [27.3, 473.0], [27.4, 474.0], [27.5, 474.0], [27.6, 475.0], [27.7, 476.0], [27.8, 477.0], [27.9, 478.0], [28.0, 479.0], [28.1, 480.0], [28.2, 480.0], [28.3, 481.0], [28.4, 482.0], [28.5, 483.0], [28.6, 483.0], [28.7, 485.0], [28.8, 486.0], [28.9, 486.0], [29.0, 488.0], [29.1, 488.0], [29.2, 489.0], [29.3, 490.0], [29.4, 491.0], [29.5, 493.0], [29.6, 494.0], [29.7, 496.0], [29.8, 497.0], [29.9, 498.0], [30.0, 499.0], [30.1, 500.0], [30.2, 501.0], [30.3, 503.0], [30.4, 504.0], [30.5, 504.0], [30.6, 505.0], [30.7, 506.0], [30.8, 507.0], [30.9, 508.0], [31.0, 509.0], [31.1, 510.0], [31.2, 511.0], [31.3, 512.0], [31.4, 513.0], [31.5, 513.0], [31.6, 515.0], [31.7, 516.0], [31.8, 517.0], [31.9, 518.0], [32.0, 520.0], [32.1, 521.0], [32.2, 522.0], [32.3, 524.0], [32.4, 524.0], [32.5, 525.0], [32.6, 526.0], [32.7, 527.0], [32.8, 528.0], [32.9, 529.0], [33.0, 530.0], [33.1, 531.0], [33.2, 532.0], [33.3, 532.0], [33.4, 534.0], [33.5, 535.0], [33.6, 536.0], [33.7, 537.0], [33.8, 538.0], [33.9, 538.0], [34.0, 539.0], [34.1, 539.0], [34.2, 540.0], [34.3, 541.0], [34.4, 542.0], [34.5, 543.0], [34.6, 543.0], [34.7, 544.0], [34.8, 545.0], [34.9, 546.0], [35.0, 546.0], [35.1, 547.0], [35.2, 547.0], [35.3, 548.0], [35.4, 549.0], [35.5, 549.0], [35.6, 550.0], [35.7, 550.0], [35.8, 551.0], [35.9, 552.0], [36.0, 552.0], [36.1, 553.0], [36.2, 554.0], [36.3, 555.0], [36.4, 555.0], [36.5, 556.0], [36.6, 557.0], [36.7, 557.0], [36.8, 557.0], [36.9, 558.0], [37.0, 559.0], [37.1, 561.0], [37.2, 562.0], [37.3, 563.0], [37.4, 564.0], [37.5, 565.0], [37.6, 566.0], [37.7, 566.0], [37.8, 567.0], [37.9, 568.0], [38.0, 568.0], [38.1, 569.0], [38.2, 571.0], [38.3, 572.0], [38.4, 572.0], [38.5, 573.0], [38.6, 574.0], [38.7, 574.0], [38.8, 576.0], [38.9, 576.0], [39.0, 578.0], [39.1, 579.0], [39.2, 580.0], [39.3, 581.0], [39.4, 582.0], [39.5, 583.0], [39.6, 584.0], [39.7, 585.0], [39.8, 587.0], [39.9, 587.0], [40.0, 588.0], [40.1, 590.0], [40.2, 590.0], [40.3, 592.0], [40.4, 592.0], [40.5, 594.0], [40.6, 595.0], [40.7, 595.0], [40.8, 596.0], [40.9, 596.0], [41.0, 598.0], [41.1, 599.0], [41.2, 600.0], [41.3, 601.0], [41.4, 601.0], [41.5, 602.0], [41.6, 603.0], [41.7, 604.0], [41.8, 604.0], [41.9, 605.0], [42.0, 606.0], [42.1, 608.0], [42.2, 609.0], [42.3, 611.0], [42.4, 613.0], [42.5, 614.0], [42.6, 615.0], [42.7, 616.0], [42.8, 616.0], [42.9, 617.0], [43.0, 619.0], [43.1, 620.0], [43.2, 621.0], [43.3, 623.0], [43.4, 625.0], [43.5, 626.0], [43.6, 628.0], [43.7, 629.0], [43.8, 630.0], [43.9, 631.0], [44.0, 631.0], [44.1, 632.0], [44.2, 634.0], [44.3, 636.0], [44.4, 639.0], [44.5, 640.0], [44.6, 641.0], [44.7, 643.0], [44.8, 645.0], [44.9, 646.0], [45.0, 647.0], [45.1, 648.0], [45.2, 650.0], [45.3, 652.0], [45.4, 653.0], [45.5, 653.0], [45.6, 656.0], [45.7, 657.0], [45.8, 658.0], [45.9, 660.0], [46.0, 662.0], [46.1, 663.0], [46.2, 664.0], [46.3, 666.0], [46.4, 669.0], [46.5, 670.0], [46.6, 671.0], [46.7, 672.0], [46.8, 673.0], [46.9, 674.0], [47.0, 675.0], [47.1, 676.0], [47.2, 677.0], [47.3, 678.0], [47.4, 681.0], [47.5, 682.0], [47.6, 684.0], [47.7, 686.0], [47.8, 688.0], [47.9, 689.0], [48.0, 691.0], [48.1, 693.0], [48.2, 694.0], [48.3, 695.0], [48.4, 696.0], [48.5, 698.0], [48.6, 700.0], [48.7, 701.0], [48.8, 702.0], [48.9, 703.0], [49.0, 704.0], [49.1, 704.0], [49.2, 707.0], [49.3, 708.0], [49.4, 709.0], [49.5, 711.0], [49.6, 712.0], [49.7, 715.0], [49.8, 716.0], [49.9, 718.0], [50.0, 718.0], [50.1, 720.0], [50.2, 722.0], [50.3, 725.0], [50.4, 727.0], [50.5, 729.0], [50.6, 730.0], [50.7, 731.0], [50.8, 733.0], [50.9, 735.0], [51.0, 737.0], [51.1, 739.0], [51.2, 741.0], [51.3, 743.0], [51.4, 744.0], [51.5, 746.0], [51.6, 748.0], [51.7, 749.0], [51.8, 750.0], [51.9, 752.0], [52.0, 754.0], [52.1, 757.0], [52.2, 759.0], [52.3, 761.0], [52.4, 762.0], [52.5, 763.0], [52.6, 765.0], [52.7, 767.0], [52.8, 770.0], [52.9, 771.0], [53.0, 773.0], [53.1, 775.0], [53.2, 777.0], [53.3, 779.0], [53.4, 780.0], [53.5, 781.0], [53.6, 784.0], [53.7, 787.0], [53.8, 788.0], [53.9, 789.0], [54.0, 793.0], [54.1, 795.0], [54.2, 796.0], [54.3, 798.0], [54.4, 799.0], [54.5, 801.0], [54.6, 804.0], [54.7, 804.0], [54.8, 807.0], [54.9, 808.0], [55.0, 810.0], [55.1, 811.0], [55.2, 813.0], [55.3, 818.0], [55.4, 820.0], [55.5, 822.0], [55.6, 824.0], [55.7, 827.0], [55.8, 829.0], [55.9, 831.0], [56.0, 833.0], [56.1, 834.0], [56.2, 836.0], [56.3, 839.0], [56.4, 841.0], [56.5, 846.0], [56.6, 847.0], [56.7, 849.0], [56.8, 851.0], [56.9, 854.0], [57.0, 855.0], [57.1, 855.0], [57.2, 857.0], [57.3, 858.0], [57.4, 861.0], [57.5, 862.0], [57.6, 864.0], [57.7, 865.0], [57.8, 866.0], [57.9, 868.0], [58.0, 868.0], [58.1, 869.0], [58.2, 870.0], [58.3, 875.0], [58.4, 876.0], [58.5, 877.0], [58.6, 878.0], [58.7, 879.0], [58.8, 880.0], [58.9, 881.0], [59.0, 885.0], [59.1, 886.0], [59.2, 887.0], [59.3, 889.0], [59.4, 891.0], [59.5, 893.0], [59.6, 894.0], [59.7, 896.0], [59.8, 897.0], [59.9, 897.0], [60.0, 898.0], [60.1, 898.0], [60.2, 900.0], [60.3, 903.0], [60.4, 904.0], [60.5, 905.0], [60.6, 908.0], [60.7, 908.0], [60.8, 911.0], [60.9, 913.0], [61.0, 914.0], [61.1, 916.0], [61.2, 918.0], [61.3, 920.0], [61.4, 922.0], [61.5, 923.0], [61.6, 924.0], [61.7, 925.0], [61.8, 927.0], [61.9, 928.0], [62.0, 931.0], [62.1, 933.0], [62.2, 934.0], [62.3, 937.0], [62.4, 938.0], [62.5, 940.0], [62.6, 941.0], [62.7, 943.0], [62.8, 944.0], [62.9, 946.0], [63.0, 947.0], [63.1, 950.0], [63.2, 951.0], [63.3, 953.0], [63.4, 954.0], [63.5, 957.0], [63.6, 959.0], [63.7, 962.0], [63.8, 964.0], [63.9, 966.0], [64.0, 967.0], [64.1, 969.0], [64.2, 971.0], [64.3, 971.0], [64.4, 973.0], [64.5, 975.0], [64.6, 976.0], [64.7, 977.0], [64.8, 980.0], [64.9, 981.0], [65.0, 982.0], [65.1, 983.0], [65.2, 985.0], [65.3, 986.0], [65.4, 986.0], [65.5, 989.0], [65.6, 991.0], [65.7, 992.0], [65.8, 993.0], [65.9, 995.0], [66.0, 998.0], [66.1, 1000.0], [66.2, 1002.0], [66.3, 1003.0], [66.4, 1005.0], [66.5, 1007.0], [66.6, 1009.0], [66.7, 1011.0], [66.8, 1012.0], [66.9, 1014.0], [67.0, 1017.0], [67.1, 1018.0], [67.2, 1020.0], [67.3, 1022.0], [67.4, 1024.0], [67.5, 1025.0], [67.6, 1028.0], [67.7, 1030.0], [67.8, 1032.0], [67.9, 1035.0], [68.0, 1036.0], [68.1, 1037.0], [68.2, 1039.0], [68.3, 1040.0], [68.4, 1044.0], [68.5, 1045.0], [68.6, 1048.0], [68.7, 1049.0], [68.8, 1051.0], [68.9, 1054.0], [69.0, 1057.0], [69.1, 1059.0], [69.2, 1061.0], [69.3, 1062.0], [69.4, 1065.0], [69.5, 1067.0], [69.6, 1068.0], [69.7, 1069.0], [69.8, 1071.0], [69.9, 1073.0], [70.0, 1074.0], [70.1, 1076.0], [70.2, 1078.0], [70.3, 1078.0], [70.4, 1081.0], [70.5, 1083.0], [70.6, 1085.0], [70.7, 1088.0], [70.8, 1090.0], [70.9, 1094.0], [71.0, 1095.0], [71.1, 1096.0], [71.2, 1099.0], [71.3, 1100.0], [71.4, 1101.0], [71.5, 1103.0], [71.6, 1104.0], [71.7, 1106.0], [71.8, 1107.0], [71.9, 1110.0], [72.0, 1111.0], [72.1, 1112.0], [72.2, 1115.0], [72.3, 1116.0], [72.4, 1118.0], [72.5, 1119.0], [72.6, 1121.0], [72.7, 1125.0], [72.8, 1126.0], [72.9, 1127.0], [73.0, 1128.0], [73.1, 1129.0], [73.2, 1130.0], [73.3, 1132.0], [73.4, 1133.0], [73.5, 1136.0], [73.6, 1137.0], [73.7, 1141.0], [73.8, 1142.0], [73.9, 1144.0], [74.0, 1146.0], [74.1, 1149.0], [74.2, 1153.0], [74.3, 1155.0], [74.4, 1157.0], [74.5, 1158.0], [74.6, 1161.0], [74.7, 1165.0], [74.8, 1168.0], [74.9, 1170.0], [75.0, 1171.0], [75.1, 1173.0], [75.2, 1176.0], [75.3, 1179.0], [75.4, 1182.0], [75.5, 1186.0], [75.6, 1188.0], [75.7, 1193.0], [75.8, 1194.0], [75.9, 1197.0], [76.0, 1200.0], [76.1, 1202.0], [76.2, 1203.0], [76.3, 1204.0], [76.4, 1205.0], [76.5, 1207.0], [76.6, 1210.0], [76.7, 1212.0], [76.8, 1213.0], [76.9, 1215.0], [77.0, 1217.0], [77.1, 1219.0], [77.2, 1219.0], [77.3, 1222.0], [77.4, 1226.0], [77.5, 1228.0], [77.6, 1230.0], [77.7, 1232.0], [77.8, 1234.0], [77.9, 1234.0], [78.0, 1236.0], [78.1, 1237.0], [78.2, 1240.0], [78.3, 1241.0], [78.4, 1244.0], [78.5, 1246.0], [78.6, 1248.0], [78.7, 1251.0], [78.8, 1253.0], [78.9, 1257.0], [79.0, 1259.0], [79.1, 1261.0], [79.2, 1264.0], [79.3, 1267.0], [79.4, 1269.0], [79.5, 1272.0], [79.6, 1273.0], [79.7, 1276.0], [79.8, 1278.0], [79.9, 1280.0], [80.0, 1283.0], [80.1, 1285.0], [80.2, 1288.0], [80.3, 1290.0], [80.4, 1293.0], [80.5, 1294.0], [80.6, 1296.0], [80.7, 1297.0], [80.8, 1298.0], [80.9, 1300.0], [81.0, 1305.0], [81.1, 1311.0], [81.2, 1313.0], [81.3, 1315.0], [81.4, 1316.0], [81.5, 1317.0], [81.6, 1322.0], [81.7, 1324.0], [81.8, 1326.0], [81.9, 1328.0], [82.0, 1330.0], [82.1, 1333.0], [82.2, 1336.0], [82.3, 1338.0], [82.4, 1341.0], [82.5, 1344.0], [82.6, 1346.0], [82.7, 1349.0], [82.8, 1351.0], [82.9, 1352.0], [83.0, 1355.0], [83.1, 1357.0], [83.2, 1359.0], [83.3, 1363.0], [83.4, 1364.0], [83.5, 1365.0], [83.6, 1366.0], [83.7, 1369.0], [83.8, 1370.0], [83.9, 1376.0], [84.0, 1380.0], [84.1, 1382.0], [84.2, 1385.0], [84.3, 1389.0], [84.4, 1391.0], [84.5, 1393.0], [84.6, 1395.0], [84.7, 1396.0], [84.8, 1398.0], [84.9, 1400.0], [85.0, 1401.0], [85.1, 1402.0], [85.2, 1404.0], [85.3, 1408.0], [85.4, 1412.0], [85.5, 1415.0], [85.6, 1421.0], [85.7, 1426.0], [85.8, 1428.0], [85.9, 1432.0], [86.0, 1434.0], [86.1, 1435.0], [86.2, 1438.0], [86.3, 1441.0], [86.4, 1445.0], [86.5, 1448.0], [86.6, 1450.0], [86.7, 1452.0], [86.8, 1455.0], [86.9, 1461.0], [87.0, 1463.0], [87.1, 1468.0], [87.2, 1476.0], [87.3, 1480.0], [87.4, 1486.0], [87.5, 1488.0], [87.6, 1491.0], [87.7, 1497.0], [87.8, 1499.0], [87.9, 1502.0], [88.0, 1505.0], [88.1, 1510.0], [88.2, 1513.0], [88.3, 1517.0], [88.4, 1522.0], [88.5, 1526.0], [88.6, 1531.0], [88.7, 1535.0], [88.8, 1539.0], [88.9, 1542.0], [89.0, 1547.0], [89.1, 1557.0], [89.2, 1560.0], [89.3, 1564.0], [89.4, 1568.0], [89.5, 1572.0], [89.6, 1574.0], [89.7, 1581.0], [89.8, 1588.0], [89.9, 1592.0], [90.0, 1602.0], [90.1, 1608.0], [90.2, 1615.0], [90.3, 1623.0], [90.4, 1630.0], [90.5, 1640.0], [90.6, 1649.0], [90.7, 1652.0], [90.8, 1658.0], [90.9, 1661.0], [91.0, 1672.0], [91.1, 1681.0], [91.2, 1690.0], [91.3, 1695.0], [91.4, 1697.0], [91.5, 1707.0], [91.6, 1711.0], [91.7, 1716.0], [91.8, 1720.0], [91.9, 1731.0], [92.0, 1736.0], [92.1, 1740.0], [92.2, 1747.0], [92.3, 1754.0], [92.4, 1759.0], [92.5, 1767.0], [92.6, 1774.0], [92.7, 1789.0], [92.8, 1794.0], [92.9, 1800.0], [93.0, 1807.0], [93.1, 1814.0], [93.2, 1829.0], [93.3, 1837.0], [93.4, 1843.0], [93.5, 1850.0], [93.6, 1860.0], [93.7, 1867.0], [93.8, 1871.0], [93.9, 1876.0], [94.0, 1894.0], [94.1, 1904.0], [94.2, 1917.0], [94.3, 1928.0], [94.4, 1937.0], [94.5, 1943.0], [94.6, 1949.0], [94.7, 1958.0], [94.8, 1964.0], [94.9, 1972.0], [95.0, 1981.0], [95.1, 1985.0], [95.2, 1992.0], [95.3, 2007.0], [95.4, 2015.0], [95.5, 2032.0], [95.6, 2045.0], [95.7, 2049.0], [95.8, 2083.0], [95.9, 2089.0], [96.0, 2101.0], [96.1, 2114.0], [96.2, 2121.0], [96.3, 2130.0], [96.4, 2140.0], [96.5, 2144.0], [96.6, 2147.0], [96.7, 2159.0], [96.8, 2173.0], [96.9, 2197.0], [97.0, 2202.0], [97.1, 2211.0], [97.2, 2221.0], [97.3, 2239.0], [97.4, 2258.0], [97.5, 2271.0], [97.6, 2287.0], [97.7, 2327.0], [97.8, 2343.0], [97.9, 2383.0], [98.0, 2405.0], [98.1, 2421.0], [98.2, 2436.0], [98.3, 2452.0], [98.4, 2511.0], [98.5, 2546.0], [98.6, 2619.0], [98.7, 2669.0], [98.8, 2729.0], [98.9, 2813.0], [99.0, 2877.0], [99.1, 2985.0], [99.2, 3026.0], [99.3, 3201.0], [99.4, 3348.0], [99.5, 3495.0], [99.6, 3671.0], [99.7, 3946.0], [99.8, 4216.0], [99.9, 4625.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 591.0, "series": [{"data": [[600.0, 383.0], [700.0, 305.0], [800.0, 297.0], [900.0, 306.0], [1000.0, 270.0], [1100.0, 245.0], [1200.0, 253.0], [1300.0, 209.0], [1400.0, 151.0], [1500.0, 112.0], [1600.0, 76.0], [100.0, 50.0], [1700.0, 76.0], [1800.0, 62.0], [1900.0, 59.0], [2000.0, 40.0], [2100.0, 50.0], [2300.0, 18.0], [2200.0, 36.0], [2400.0, 19.0], [2500.0, 10.0], [2600.0, 9.0], [2700.0, 7.0], [2800.0, 10.0], [2900.0, 5.0], [3000.0, 4.0], [3100.0, 3.0], [200.0, 555.0], [3300.0, 5.0], [3200.0, 4.0], [3400.0, 4.0], [3600.0, 5.0], [3700.0, 1.0], [3800.0, 2.0], [3900.0, 3.0], [4000.0, 1.0], [4300.0, 2.0], [4200.0, 3.0], [4600.0, 3.0], [300.0, 363.0], [4700.0, 1.0], [5200.0, 1.0], [5300.0, 1.0], [5600.0, 1.0], [400.0, 591.0], [500.0, 579.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 629.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2995.0, "series": [{"data": [[0.0, 1566.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2995.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 629.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.916201117318439, "minX": 1.60246104E12, "maxY": 10.0, "series": [{"data": [[1.60246116E12, 10.0], [1.60246134E12, 10.0], [1.60246128E12, 10.0], [1.60246146E12, 9.916201117318439], [1.6024611E12, 10.0], [1.6024614E12, 10.0], [1.60246104E12, 10.0], [1.60246122E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246146E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 336.0, "minX": 1.0, "maxY": 2636.0, "series": [{"data": [[8.0, 801.0], [4.0, 1668.0], [2.0, 2636.0], [1.0, 2584.0], [9.0, 505.0], [10.0, 877.1818181818181], [5.0, 1231.0], [6.0, 562.0], [3.0, 1172.0], [7.0, 336.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 877.8755298651253]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3745.8166666666666, "minX": 1.60246104E12, "maxY": 3526172.2333333334, "series": [{"data": [[1.60246116E12, 3526172.2333333334], [1.60246134E12, 3140305.4], [1.60246128E12, 3146829.5833333335], [1.60246146E12, 2267074.0833333335], [1.6024611E12, 2893110.716666667], [1.6024614E12, 3096506.3], [1.60246104E12, 2678070.65], [1.60246122E12, 3224630.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246116E12, 5324.416666666667], [1.60246134E12, 5077.433333333333], [1.60246128E12, 4642.65], [1.60246146E12, 4049.383333333333], [1.6024611E12, 5151.516666666666], [1.6024614E12, 5476.616666666667], [1.60246104E12, 3745.8166666666666], [1.60246122E12, 5109.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246146E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 831.8640776699026, "minX": 1.60246104E12, "maxY": 950.0673076923076, "series": [{"data": [[1.60246116E12, 850.3475783475786], [1.60246134E12, 872.0318379160633], [1.60246128E12, 925.9595645412136], [1.60246146E12, 871.8789571694598], [1.6024611E12, 853.7842857142858], [1.6024614E12, 831.8640776699026], [1.60246104E12, 950.0673076923076], [1.60246122E12, 889.9511834319521]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246146E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 830.2371705963935, "minX": 1.60246104E12, "maxY": 947.7403846153846, "series": [{"data": [[1.60246116E12, 848.0811965811967], [1.60246134E12, 870.30535455861], [1.60246128E12, 924.0933125972006], [1.60246146E12, 870.2960893854749], [1.6024611E12, 851.9528571428569], [1.6024614E12, 830.2371705963935], [1.60246104E12, 947.7403846153846], [1.60246122E12, 887.8343195266268]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246146E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.015714285714285726, "minX": 1.60246104E12, "maxY": 0.14807692307692305, "series": [{"data": [[1.60246116E12, 0.021367521367521368], [1.60246134E12, 0.01736613603473226], [1.60246128E12, 0.02021772939346811], [1.60246146E12, 0.020484171322160138], [1.6024611E12, 0.015714285714285726], [1.6024614E12, 0.01803051317614425], [1.60246104E12, 0.14807692307692305], [1.60246122E12, 0.02071005917159767]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246146E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 183.0, "minX": 1.60246104E12, "maxY": 5669.0, "series": [{"data": [[1.60246116E12, 3671.0], [1.60246134E12, 3803.0], [1.60246128E12, 5669.0], [1.60246146E12, 5365.0], [1.6024611E12, 4675.0], [1.6024614E12, 3603.0], [1.60246104E12, 4625.0], [1.60246122E12, 4205.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246116E12, 194.32699983239175], [1.60246134E12, 196.4559996700287], [1.60246128E12, 207.0], [1.60246146E12, 196.8419998717308], [1.6024611E12, 200.0], [1.6024614E12, 199.99599965572358], [1.60246104E12, 206.20099888205527], [1.60246122E12, 198.09299983859063]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246116E12, 194.95970006704331], [1.60246134E12, 197.70160013198853], [1.60246128E12, 207.37560006141663], [1.60246146E12, 197.0], [1.6024611E12, 200.0], [1.6024614E12, 201.14780006885528], [1.60246104E12, 209.47370014905928], [1.60246122E12, 198.70230006456376]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246116E12, 194.67849991619588], [1.60246134E12, 197.14799983501433], [1.60246128E12, 207.1179999232292], [1.60246146E12, 197.0], [1.6024611E12, 200.0], [1.6024614E12, 200.71799982786177], [1.60246104E12, 208.54549944102763], [1.60246122E12, 198.4314999192953]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246116E12, 183.0], [1.60246134E12, 187.0], [1.60246128E12, 190.0], [1.60246146E12, 186.0], [1.6024611E12, 183.0], [1.6024614E12, 185.0], [1.60246104E12, 197.0], [1.60246122E12, 191.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246116E12, 651.0], [1.60246134E12, 688.0], [1.60246128E12, 810.0], [1.60246146E12, 715.0], [1.6024611E12, 657.0], [1.6024614E12, 673.0], [1.60246104E12, 823.0], [1.60246122E12, 737.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246146E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 392.5, "minX": 1.0, "maxY": 2610.0, "series": [{"data": [[2.0, 1703.5], [3.0, 1188.0], [4.0, 1944.5], [5.0, 1519.5], [6.0, 1234.0], [7.0, 1129.0], [8.0, 1128.5], [9.0, 942.0], [10.0, 898.5], [11.0, 878.0], [12.0, 783.5], [13.0, 695.0], [14.0, 687.0], [15.0, 565.0], [16.0, 552.0], [1.0, 2610.0], [17.0, 479.0], [18.0, 514.5], [19.0, 484.0], [20.0, 450.0], [21.0, 437.0], [22.0, 392.5], [23.0, 440.5], [24.0, 441.5], [25.0, 418.0], [26.0, 422.0], [27.0, 410.0], [29.0, 410.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 392.5, "minX": 1.0, "maxY": 2605.0, "series": [{"data": [[2.0, 1697.0], [3.0, 1188.0], [4.0, 1936.5], [5.0, 1515.0], [6.0, 1231.5], [7.0, 1127.0], [8.0, 1127.5], [9.0, 940.0], [10.0, 896.0], [11.0, 878.0], [12.0, 782.5], [13.0, 694.5], [14.0, 686.5], [15.0, 563.5], [16.0, 551.0], [1.0, 2605.0], [17.0, 479.0], [18.0, 513.0], [19.0, 484.0], [20.0, 450.0], [21.0, 436.0], [22.0, 392.5], [23.0, 440.5], [24.0, 441.0], [25.0, 418.0], [26.0, 422.0], [27.0, 410.0], [29.0, 409.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.783333333333333, "minX": 1.60246104E12, "maxY": 12.016666666666667, "series": [{"data": [[1.60246116E12, 11.7], [1.60246134E12, 11.516666666666667], [1.60246128E12, 10.716666666666667], [1.60246146E12, 8.783333333333333], [1.6024611E12, 11.666666666666666], [1.6024614E12, 12.016666666666667], [1.60246104E12, 8.833333333333334], [1.60246122E12, 11.266666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246146E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.666666666666666, "minX": 1.60246104E12, "maxY": 12.016666666666667, "series": [{"data": [[1.60246116E12, 11.7], [1.60246134E12, 11.516666666666667], [1.60246128E12, 10.716666666666667], [1.60246146E12, 8.95], [1.6024611E12, 11.666666666666666], [1.6024614E12, 12.016666666666667], [1.60246104E12, 8.666666666666666], [1.60246122E12, 11.266666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246146E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.666666666666666, "minX": 1.60246104E12, "maxY": 12.016666666666667, "series": [{"data": [[1.60246116E12, 11.7], [1.60246134E12, 11.516666666666667], [1.60246128E12, 10.716666666666667], [1.60246146E12, 8.95], [1.6024611E12, 11.666666666666666], [1.6024614E12, 12.016666666666667], [1.60246104E12, 8.666666666666666], [1.60246122E12, 11.266666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246146E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.666666666666666, "minX": 1.60246104E12, "maxY": 12.016666666666667, "series": [{"data": [[1.60246116E12, 11.7], [1.60246134E12, 11.516666666666667], [1.60246128E12, 10.716666666666667], [1.60246146E12, 8.95], [1.6024611E12, 11.666666666666666], [1.6024614E12, 12.016666666666667], [1.60246104E12, 8.666666666666666], [1.60246122E12, 11.266666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246146E12, "title": "Total Transactions Per Second"}},
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

