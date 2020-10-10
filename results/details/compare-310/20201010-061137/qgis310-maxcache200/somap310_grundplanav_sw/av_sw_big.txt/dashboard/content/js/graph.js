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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 8296.0, "series": [{"data": [[0.0, 184.0], [0.1, 186.0], [0.2, 187.0], [0.3, 188.0], [0.4, 189.0], [0.5, 190.0], [0.6, 191.0], [0.7, 192.0], [0.8, 192.0], [0.9, 193.0], [1.0, 193.0], [1.1, 194.0], [1.2, 194.0], [1.3, 195.0], [1.4, 196.0], [1.5, 196.0], [1.6, 197.0], [1.7, 198.0], [1.8, 199.0], [1.9, 199.0], [2.0, 200.0], [2.1, 201.0], [2.2, 202.0], [2.3, 203.0], [2.4, 204.0], [2.5, 206.0], [2.6, 207.0], [2.7, 208.0], [2.8, 209.0], [2.9, 211.0], [3.0, 211.0], [3.1, 212.0], [3.2, 213.0], [3.3, 213.0], [3.4, 214.0], [3.5, 215.0], [3.6, 215.0], [3.7, 216.0], [3.8, 216.0], [3.9, 217.0], [4.0, 218.0], [4.1, 218.0], [4.2, 220.0], [4.3, 220.0], [4.4, 221.0], [4.5, 221.0], [4.6, 222.0], [4.7, 222.0], [4.8, 223.0], [4.9, 225.0], [5.0, 225.0], [5.1, 226.0], [5.2, 227.0], [5.3, 229.0], [5.4, 229.0], [5.5, 229.0], [5.6, 230.0], [5.7, 230.0], [5.8, 231.0], [5.9, 233.0], [6.0, 234.0], [6.1, 234.0], [6.2, 235.0], [6.3, 236.0], [6.4, 237.0], [6.5, 238.0], [6.6, 239.0], [6.7, 240.0], [6.8, 241.0], [6.9, 243.0], [7.0, 244.0], [7.1, 245.0], [7.2, 246.0], [7.3, 247.0], [7.4, 249.0], [7.5, 251.0], [7.6, 253.0], [7.7, 254.0], [7.8, 255.0], [7.9, 257.0], [8.0, 258.0], [8.1, 259.0], [8.2, 260.0], [8.3, 261.0], [8.4, 263.0], [8.5, 264.0], [8.6, 265.0], [8.7, 266.0], [8.8, 266.0], [8.9, 267.0], [9.0, 268.0], [9.1, 269.0], [9.2, 270.0], [9.3, 270.0], [9.4, 271.0], [9.5, 273.0], [9.6, 273.0], [9.7, 274.0], [9.8, 275.0], [9.9, 276.0], [10.0, 277.0], [10.1, 277.0], [10.2, 278.0], [10.3, 278.0], [10.4, 279.0], [10.5, 280.0], [10.6, 281.0], [10.7, 281.0], [10.8, 283.0], [10.9, 284.0], [11.0, 285.0], [11.1, 285.0], [11.2, 287.0], [11.3, 288.0], [11.4, 289.0], [11.5, 291.0], [11.6, 293.0], [11.7, 295.0], [11.8, 296.0], [11.9, 297.0], [12.0, 297.0], [12.1, 298.0], [12.2, 300.0], [12.3, 300.0], [12.4, 301.0], [12.5, 303.0], [12.6, 303.0], [12.7, 304.0], [12.8, 305.0], [12.9, 306.0], [13.0, 307.0], [13.1, 308.0], [13.2, 310.0], [13.3, 311.0], [13.4, 311.0], [13.5, 312.0], [13.6, 312.0], [13.7, 314.0], [13.8, 315.0], [13.9, 315.0], [14.0, 317.0], [14.1, 318.0], [14.2, 319.0], [14.3, 320.0], [14.4, 320.0], [14.5, 322.0], [14.6, 323.0], [14.7, 325.0], [14.8, 326.0], [14.9, 327.0], [15.0, 329.0], [15.1, 331.0], [15.2, 332.0], [15.3, 334.0], [15.4, 335.0], [15.5, 336.0], [15.6, 337.0], [15.7, 339.0], [15.8, 340.0], [15.9, 343.0], [16.0, 344.0], [16.1, 347.0], [16.2, 349.0], [16.3, 352.0], [16.4, 354.0], [16.5, 356.0], [16.6, 358.0], [16.7, 360.0], [16.8, 362.0], [16.9, 364.0], [17.0, 365.0], [17.1, 366.0], [17.2, 368.0], [17.3, 370.0], [17.4, 371.0], [17.5, 374.0], [17.6, 375.0], [17.7, 376.0], [17.8, 378.0], [17.9, 380.0], [18.0, 380.0], [18.1, 382.0], [18.2, 384.0], [18.3, 386.0], [18.4, 388.0], [18.5, 389.0], [18.6, 391.0], [18.7, 392.0], [18.8, 393.0], [18.9, 394.0], [19.0, 395.0], [19.1, 396.0], [19.2, 396.0], [19.3, 397.0], [19.4, 398.0], [19.5, 399.0], [19.6, 400.0], [19.7, 400.0], [19.8, 401.0], [19.9, 403.0], [20.0, 404.0], [20.1, 406.0], [20.2, 406.0], [20.3, 407.0], [20.4, 408.0], [20.5, 410.0], [20.6, 412.0], [20.7, 412.0], [20.8, 413.0], [20.9, 415.0], [21.0, 416.0], [21.1, 417.0], [21.2, 417.0], [21.3, 418.0], [21.4, 419.0], [21.5, 420.0], [21.6, 422.0], [21.7, 422.0], [21.8, 424.0], [21.9, 425.0], [22.0, 426.0], [22.1, 427.0], [22.2, 428.0], [22.3, 429.0], [22.4, 430.0], [22.5, 430.0], [22.6, 431.0], [22.7, 432.0], [22.8, 432.0], [22.9, 433.0], [23.0, 433.0], [23.1, 434.0], [23.2, 435.0], [23.3, 436.0], [23.4, 437.0], [23.5, 437.0], [23.6, 439.0], [23.7, 440.0], [23.8, 441.0], [23.9, 442.0], [24.0, 442.0], [24.1, 443.0], [24.2, 444.0], [24.3, 445.0], [24.4, 446.0], [24.5, 447.0], [24.6, 448.0], [24.7, 449.0], [24.8, 450.0], [24.9, 451.0], [25.0, 452.0], [25.1, 452.0], [25.2, 453.0], [25.3, 454.0], [25.4, 455.0], [25.5, 456.0], [25.6, 457.0], [25.7, 459.0], [25.8, 460.0], [25.9, 460.0], [26.0, 461.0], [26.1, 462.0], [26.2, 463.0], [26.3, 463.0], [26.4, 464.0], [26.5, 465.0], [26.6, 466.0], [26.7, 467.0], [26.8, 467.0], [26.9, 468.0], [27.0, 469.0], [27.1, 469.0], [27.2, 471.0], [27.3, 471.0], [27.4, 472.0], [27.5, 473.0], [27.6, 474.0], [27.7, 475.0], [27.8, 477.0], [27.9, 478.0], [28.0, 478.0], [28.1, 479.0], [28.2, 480.0], [28.3, 480.0], [28.4, 481.0], [28.5, 482.0], [28.6, 483.0], [28.7, 484.0], [28.8, 485.0], [28.9, 486.0], [29.0, 487.0], [29.1, 488.0], [29.2, 489.0], [29.3, 489.0], [29.4, 491.0], [29.5, 492.0], [29.6, 492.0], [29.7, 494.0], [29.8, 495.0], [29.9, 496.0], [30.0, 497.0], [30.1, 497.0], [30.2, 499.0], [30.3, 499.0], [30.4, 500.0], [30.5, 502.0], [30.6, 503.0], [30.7, 503.0], [30.8, 505.0], [30.9, 506.0], [31.0, 508.0], [31.1, 510.0], [31.2, 510.0], [31.3, 511.0], [31.4, 512.0], [31.5, 513.0], [31.6, 513.0], [31.7, 514.0], [31.8, 515.0], [31.9, 516.0], [32.0, 518.0], [32.1, 520.0], [32.2, 521.0], [32.3, 521.0], [32.4, 522.0], [32.5, 523.0], [32.6, 523.0], [32.7, 524.0], [32.8, 525.0], [32.9, 526.0], [33.0, 527.0], [33.1, 528.0], [33.2, 529.0], [33.3, 530.0], [33.4, 531.0], [33.5, 532.0], [33.6, 533.0], [33.7, 534.0], [33.8, 535.0], [33.9, 536.0], [34.0, 537.0], [34.1, 537.0], [34.2, 538.0], [34.3, 539.0], [34.4, 539.0], [34.5, 541.0], [34.6, 542.0], [34.7, 544.0], [34.8, 544.0], [34.9, 545.0], [35.0, 545.0], [35.1, 547.0], [35.2, 548.0], [35.3, 550.0], [35.4, 551.0], [35.5, 552.0], [35.6, 553.0], [35.7, 554.0], [35.8, 554.0], [35.9, 556.0], [36.0, 557.0], [36.1, 557.0], [36.2, 558.0], [36.3, 559.0], [36.4, 561.0], [36.5, 561.0], [36.6, 563.0], [36.7, 564.0], [36.8, 565.0], [36.9, 565.0], [37.0, 566.0], [37.1, 567.0], [37.2, 568.0], [37.3, 568.0], [37.4, 569.0], [37.5, 569.0], [37.6, 570.0], [37.7, 571.0], [37.8, 573.0], [37.9, 574.0], [38.0, 575.0], [38.1, 576.0], [38.2, 578.0], [38.3, 580.0], [38.4, 581.0], [38.5, 582.0], [38.6, 582.0], [38.7, 584.0], [38.8, 585.0], [38.9, 587.0], [39.0, 588.0], [39.1, 589.0], [39.2, 590.0], [39.3, 591.0], [39.4, 591.0], [39.5, 592.0], [39.6, 593.0], [39.7, 595.0], [39.8, 596.0], [39.9, 597.0], [40.0, 598.0], [40.1, 600.0], [40.2, 601.0], [40.3, 602.0], [40.4, 603.0], [40.5, 604.0], [40.6, 604.0], [40.7, 605.0], [40.8, 605.0], [40.9, 608.0], [41.0, 609.0], [41.1, 610.0], [41.2, 613.0], [41.3, 614.0], [41.4, 617.0], [41.5, 618.0], [41.6, 619.0], [41.7, 620.0], [41.8, 622.0], [41.9, 623.0], [42.0, 623.0], [42.1, 624.0], [42.2, 624.0], [42.3, 627.0], [42.4, 628.0], [42.5, 628.0], [42.6, 629.0], [42.7, 630.0], [42.8, 632.0], [42.9, 633.0], [43.0, 634.0], [43.1, 634.0], [43.2, 635.0], [43.3, 636.0], [43.4, 638.0], [43.5, 639.0], [43.6, 641.0], [43.7, 641.0], [43.8, 642.0], [43.9, 642.0], [44.0, 644.0], [44.1, 645.0], [44.2, 646.0], [44.3, 647.0], [44.4, 648.0], [44.5, 649.0], [44.6, 650.0], [44.7, 651.0], [44.8, 653.0], [44.9, 654.0], [45.0, 655.0], [45.1, 656.0], [45.2, 657.0], [45.3, 659.0], [45.4, 660.0], [45.5, 661.0], [45.6, 663.0], [45.7, 664.0], [45.8, 667.0], [45.9, 669.0], [46.0, 669.0], [46.1, 672.0], [46.2, 673.0], [46.3, 674.0], [46.4, 675.0], [46.5, 676.0], [46.6, 677.0], [46.7, 678.0], [46.8, 679.0], [46.9, 680.0], [47.0, 681.0], [47.1, 684.0], [47.2, 685.0], [47.3, 687.0], [47.4, 689.0], [47.5, 690.0], [47.6, 692.0], [47.7, 694.0], [47.8, 694.0], [47.9, 695.0], [48.0, 696.0], [48.1, 697.0], [48.2, 700.0], [48.3, 701.0], [48.4, 702.0], [48.5, 703.0], [48.6, 704.0], [48.7, 705.0], [48.8, 706.0], [48.9, 708.0], [49.0, 708.0], [49.1, 710.0], [49.2, 710.0], [49.3, 711.0], [49.4, 712.0], [49.5, 713.0], [49.6, 714.0], [49.7, 715.0], [49.8, 716.0], [49.9, 718.0], [50.0, 719.0], [50.1, 720.0], [50.2, 720.0], [50.3, 723.0], [50.4, 724.0], [50.5, 725.0], [50.6, 726.0], [50.7, 727.0], [50.8, 729.0], [50.9, 730.0], [51.0, 732.0], [51.1, 732.0], [51.2, 734.0], [51.3, 735.0], [51.4, 737.0], [51.5, 739.0], [51.6, 740.0], [51.7, 742.0], [51.8, 743.0], [51.9, 744.0], [52.0, 747.0], [52.1, 747.0], [52.2, 749.0], [52.3, 751.0], [52.4, 753.0], [52.5, 755.0], [52.6, 756.0], [52.7, 758.0], [52.8, 759.0], [52.9, 761.0], [53.0, 763.0], [53.1, 766.0], [53.2, 766.0], [53.3, 768.0], [53.4, 770.0], [53.5, 772.0], [53.6, 774.0], [53.7, 776.0], [53.8, 776.0], [53.9, 778.0], [54.0, 780.0], [54.1, 781.0], [54.2, 782.0], [54.3, 783.0], [54.4, 785.0], [54.5, 787.0], [54.6, 788.0], [54.7, 789.0], [54.8, 790.0], [54.9, 792.0], [55.0, 794.0], [55.1, 795.0], [55.2, 797.0], [55.3, 799.0], [55.4, 802.0], [55.5, 804.0], [55.6, 806.0], [55.7, 807.0], [55.8, 808.0], [55.9, 809.0], [56.0, 812.0], [56.1, 815.0], [56.2, 816.0], [56.3, 818.0], [56.4, 820.0], [56.5, 822.0], [56.6, 824.0], [56.7, 826.0], [56.8, 827.0], [56.9, 828.0], [57.0, 830.0], [57.1, 831.0], [57.2, 834.0], [57.3, 835.0], [57.4, 836.0], [57.5, 839.0], [57.6, 841.0], [57.7, 843.0], [57.8, 845.0], [57.9, 847.0], [58.0, 850.0], [58.1, 852.0], [58.2, 853.0], [58.3, 854.0], [58.4, 855.0], [58.5, 857.0], [58.6, 859.0], [58.7, 860.0], [58.8, 864.0], [58.9, 866.0], [59.0, 867.0], [59.1, 868.0], [59.2, 869.0], [59.3, 871.0], [59.4, 872.0], [59.5, 875.0], [59.6, 876.0], [59.7, 877.0], [59.8, 879.0], [59.9, 880.0], [60.0, 882.0], [60.1, 883.0], [60.2, 884.0], [60.3, 886.0], [60.4, 887.0], [60.5, 888.0], [60.6, 889.0], [60.7, 891.0], [60.8, 893.0], [60.9, 893.0], [61.0, 894.0], [61.1, 897.0], [61.2, 898.0], [61.3, 899.0], [61.4, 902.0], [61.5, 904.0], [61.6, 906.0], [61.7, 907.0], [61.8, 909.0], [61.9, 910.0], [62.0, 912.0], [62.1, 916.0], [62.2, 917.0], [62.3, 919.0], [62.4, 922.0], [62.5, 923.0], [62.6, 924.0], [62.7, 925.0], [62.8, 926.0], [62.9, 928.0], [63.0, 929.0], [63.1, 930.0], [63.2, 932.0], [63.3, 933.0], [63.4, 936.0], [63.5, 937.0], [63.6, 938.0], [63.7, 939.0], [63.8, 941.0], [63.9, 943.0], [64.0, 946.0], [64.1, 948.0], [64.2, 949.0], [64.3, 951.0], [64.4, 953.0], [64.5, 956.0], [64.6, 957.0], [64.7, 958.0], [64.8, 962.0], [64.9, 963.0], [65.0, 965.0], [65.1, 966.0], [65.2, 968.0], [65.3, 970.0], [65.4, 972.0], [65.5, 975.0], [65.6, 977.0], [65.7, 980.0], [65.8, 981.0], [65.9, 983.0], [66.0, 986.0], [66.1, 988.0], [66.2, 989.0], [66.3, 991.0], [66.4, 992.0], [66.5, 995.0], [66.6, 996.0], [66.7, 999.0], [66.8, 999.0], [66.9, 1001.0], [67.0, 1002.0], [67.1, 1004.0], [67.2, 1005.0], [67.3, 1006.0], [67.4, 1009.0], [67.5, 1011.0], [67.6, 1012.0], [67.7, 1015.0], [67.8, 1016.0], [67.9, 1018.0], [68.0, 1020.0], [68.1, 1021.0], [68.2, 1022.0], [68.3, 1023.0], [68.4, 1025.0], [68.5, 1026.0], [68.6, 1028.0], [68.7, 1030.0], [68.8, 1033.0], [68.9, 1034.0], [69.0, 1035.0], [69.1, 1036.0], [69.2, 1038.0], [69.3, 1040.0], [69.4, 1041.0], [69.5, 1042.0], [69.6, 1044.0], [69.7, 1045.0], [69.8, 1046.0], [69.9, 1047.0], [70.0, 1050.0], [70.1, 1051.0], [70.2, 1054.0], [70.3, 1057.0], [70.4, 1057.0], [70.5, 1059.0], [70.6, 1059.0], [70.7, 1062.0], [70.8, 1063.0], [70.9, 1065.0], [71.0, 1066.0], [71.1, 1068.0], [71.2, 1070.0], [71.3, 1072.0], [71.4, 1074.0], [71.5, 1076.0], [71.6, 1077.0], [71.7, 1078.0], [71.8, 1080.0], [71.9, 1081.0], [72.0, 1083.0], [72.1, 1084.0], [72.2, 1085.0], [72.3, 1086.0], [72.4, 1087.0], [72.5, 1089.0], [72.6, 1091.0], [72.7, 1092.0], [72.8, 1094.0], [72.9, 1096.0], [73.0, 1098.0], [73.1, 1100.0], [73.2, 1102.0], [73.3, 1105.0], [73.4, 1107.0], [73.5, 1109.0], [73.6, 1111.0], [73.7, 1113.0], [73.8, 1114.0], [73.9, 1116.0], [74.0, 1118.0], [74.1, 1119.0], [74.2, 1123.0], [74.3, 1124.0], [74.4, 1126.0], [74.5, 1129.0], [74.6, 1130.0], [74.7, 1133.0], [74.8, 1134.0], [74.9, 1137.0], [75.0, 1140.0], [75.1, 1141.0], [75.2, 1143.0], [75.3, 1145.0], [75.4, 1148.0], [75.5, 1151.0], [75.6, 1153.0], [75.7, 1155.0], [75.8, 1157.0], [75.9, 1161.0], [76.0, 1164.0], [76.1, 1166.0], [76.2, 1168.0], [76.3, 1170.0], [76.4, 1173.0], [76.5, 1178.0], [76.6, 1180.0], [76.7, 1184.0], [76.8, 1187.0], [76.9, 1188.0], [77.0, 1191.0], [77.1, 1192.0], [77.2, 1197.0], [77.3, 1199.0], [77.4, 1203.0], [77.5, 1208.0], [77.6, 1210.0], [77.7, 1212.0], [77.8, 1213.0], [77.9, 1214.0], [78.0, 1217.0], [78.1, 1219.0], [78.2, 1222.0], [78.3, 1226.0], [78.4, 1228.0], [78.5, 1232.0], [78.6, 1234.0], [78.7, 1238.0], [78.8, 1239.0], [78.9, 1241.0], [79.0, 1245.0], [79.1, 1247.0], [79.2, 1249.0], [79.3, 1253.0], [79.4, 1254.0], [79.5, 1258.0], [79.6, 1261.0], [79.7, 1264.0], [79.8, 1270.0], [79.9, 1271.0], [80.0, 1274.0], [80.1, 1276.0], [80.2, 1278.0], [80.3, 1281.0], [80.4, 1283.0], [80.5, 1285.0], [80.6, 1287.0], [80.7, 1293.0], [80.8, 1294.0], [80.9, 1298.0], [81.0, 1299.0], [81.1, 1300.0], [81.2, 1303.0], [81.3, 1304.0], [81.4, 1306.0], [81.5, 1308.0], [81.6, 1309.0], [81.7, 1313.0], [81.8, 1316.0], [81.9, 1320.0], [82.0, 1322.0], [82.1, 1324.0], [82.2, 1326.0], [82.3, 1329.0], [82.4, 1331.0], [82.5, 1333.0], [82.6, 1335.0], [82.7, 1339.0], [82.8, 1342.0], [82.9, 1343.0], [83.0, 1345.0], [83.1, 1346.0], [83.2, 1348.0], [83.3, 1352.0], [83.4, 1354.0], [83.5, 1354.0], [83.6, 1359.0], [83.7, 1360.0], [83.8, 1365.0], [83.9, 1366.0], [84.0, 1369.0], [84.1, 1371.0], [84.2, 1374.0], [84.3, 1375.0], [84.4, 1380.0], [84.5, 1382.0], [84.6, 1383.0], [84.7, 1386.0], [84.8, 1388.0], [84.9, 1391.0], [85.0, 1394.0], [85.1, 1396.0], [85.2, 1400.0], [85.3, 1404.0], [85.4, 1411.0], [85.5, 1412.0], [85.6, 1414.0], [85.7, 1417.0], [85.8, 1420.0], [85.9, 1424.0], [86.0, 1427.0], [86.1, 1431.0], [86.2, 1433.0], [86.3, 1438.0], [86.4, 1441.0], [86.5, 1442.0], [86.6, 1446.0], [86.7, 1448.0], [86.8, 1453.0], [86.9, 1455.0], [87.0, 1460.0], [87.1, 1463.0], [87.2, 1465.0], [87.3, 1469.0], [87.4, 1471.0], [87.5, 1473.0], [87.6, 1475.0], [87.7, 1478.0], [87.8, 1482.0], [87.9, 1486.0], [88.0, 1491.0], [88.1, 1492.0], [88.2, 1495.0], [88.3, 1500.0], [88.4, 1502.0], [88.5, 1506.0], [88.6, 1510.0], [88.7, 1513.0], [88.8, 1515.0], [88.9, 1521.0], [89.0, 1525.0], [89.1, 1528.0], [89.2, 1534.0], [89.3, 1542.0], [89.4, 1545.0], [89.5, 1551.0], [89.6, 1558.0], [89.7, 1563.0], [89.8, 1569.0], [89.9, 1573.0], [90.0, 1581.0], [90.1, 1585.0], [90.2, 1587.0], [90.3, 1593.0], [90.4, 1599.0], [90.5, 1603.0], [90.6, 1607.0], [90.7, 1615.0], [90.8, 1620.0], [90.9, 1624.0], [91.0, 1627.0], [91.1, 1644.0], [91.2, 1651.0], [91.3, 1655.0], [91.4, 1661.0], [91.5, 1664.0], [91.6, 1671.0], [91.7, 1680.0], [91.8, 1684.0], [91.9, 1688.0], [92.0, 1697.0], [92.1, 1703.0], [92.2, 1709.0], [92.3, 1715.0], [92.4, 1721.0], [92.5, 1729.0], [92.6, 1740.0], [92.7, 1743.0], [92.8, 1751.0], [92.9, 1757.0], [93.0, 1762.0], [93.1, 1770.0], [93.2, 1777.0], [93.3, 1782.0], [93.4, 1790.0], [93.5, 1795.0], [93.6, 1800.0], [93.7, 1807.0], [93.8, 1812.0], [93.9, 1821.0], [94.0, 1827.0], [94.1, 1843.0], [94.2, 1853.0], [94.3, 1863.0], [94.4, 1887.0], [94.5, 1897.0], [94.6, 1909.0], [94.7, 1918.0], [94.8, 1932.0], [94.9, 1947.0], [95.0, 1952.0], [95.1, 1962.0], [95.2, 1968.0], [95.3, 1977.0], [95.4, 1987.0], [95.5, 2001.0], [95.6, 2011.0], [95.7, 2038.0], [95.8, 2046.0], [95.9, 2057.0], [96.0, 2064.0], [96.1, 2082.0], [96.2, 2089.0], [96.3, 2104.0], [96.4, 2120.0], [96.5, 2133.0], [96.6, 2144.0], [96.7, 2153.0], [96.8, 2165.0], [96.9, 2181.0], [97.0, 2203.0], [97.1, 2222.0], [97.2, 2228.0], [97.3, 2245.0], [97.4, 2256.0], [97.5, 2269.0], [97.6, 2283.0], [97.7, 2296.0], [97.8, 2323.0], [97.9, 2349.0], [98.0, 2389.0], [98.1, 2406.0], [98.2, 2438.0], [98.3, 2530.0], [98.4, 2539.0], [98.5, 2607.0], [98.6, 2638.0], [98.7, 2664.0], [98.8, 2709.0], [98.9, 2794.0], [99.0, 2842.0], [99.1, 2900.0], [99.2, 3053.0], [99.3, 3157.0], [99.4, 3366.0], [99.5, 3483.0], [99.6, 3775.0], [99.7, 4017.0], [99.8, 4216.0], [99.9, 4917.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 557.0, "series": [{"data": [[8200.0, 1.0], [600.0, 421.0], [700.0, 369.0], [800.0, 312.0], [900.0, 285.0], [1000.0, 324.0], [1100.0, 221.0], [1200.0, 194.0], [1300.0, 215.0], [1400.0, 160.0], [1500.0, 111.0], [1600.0, 86.0], [100.0, 100.0], [1700.0, 78.0], [1800.0, 49.0], [1900.0, 50.0], [2000.0, 41.0], [2100.0, 37.0], [2200.0, 39.0], [2300.0, 17.0], [2400.0, 12.0], [2500.0, 11.0], [2600.0, 14.0], [2700.0, 8.0], [2800.0, 9.0], [2900.0, 2.0], [3000.0, 6.0], [3100.0, 5.0], [3300.0, 3.0], [200.0, 533.0], [3200.0, 2.0], [3400.0, 4.0], [3500.0, 2.0], [3700.0, 3.0], [3600.0, 1.0], [3800.0, 1.0], [3900.0, 2.0], [4000.0, 5.0], [4200.0, 2.0], [4500.0, 1.0], [4400.0, 1.0], [300.0, 384.0], [4900.0, 2.0], [5000.0, 2.0], [5600.0, 1.0], [5400.0, 1.0], [400.0, 557.0], [500.0, 507.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3007.0, "series": [{"data": [[0.0, 1578.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3007.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 605.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.828897338403042, "minX": 1.60231194E12, "maxY": 10.0, "series": [{"data": [[1.60231206E12, 10.0], [1.602312E12, 10.0], [1.60231218E12, 10.0], [1.60231236E12, 10.0], [1.60231212E12, 10.0], [1.60231242E12, 9.828897338403042], [1.60231224E12, 10.0], [1.6023123E12, 10.0], [1.60231194E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231242E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 322.0, "minX": 1.0, "maxY": 2802.0, "series": [{"data": [[8.0, 322.0], [4.0, 1638.0], [2.0, 2802.0], [1.0, 2539.0], [9.0, 1830.0], [10.0, 867.3164801235072], [5.0, 859.0], [6.0, 1114.0], [3.0, 948.0], [7.0, 331.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 868.1982277017943]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 129.88333333333333, "minX": 1.60231194E12, "maxY": 3535084.783333333, "series": [{"data": [[1.60231206E12, 3164107.6166666667], [1.602312E12, 3152722.8666666667], [1.60231218E12, 3390625.5], [1.60231236E12, 3094673.966666667], [1.60231212E12, 3487703.3], [1.60231242E12, 1363263.6], [1.60231224E12, 2663065.3833333333], [1.6023123E12, 3535084.783333333], [1.60231194E12, 121606.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231206E12, 5426.9], [1.602312E12, 4642.116666666667], [1.60231218E12, 4605.9], [1.60231236E12, 5813.333333333333], [1.60231212E12, 5531.816666666667], [1.60231242E12, 1979.5333333333333], [1.60231224E12, 5073.9], [1.6023123E12, 5380.666666666667], [1.60231194E12, 129.88333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231242E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 778.1436031331599, "minX": 1.60231194E12, "maxY": 2027.2941176470588, "series": [{"data": [[1.60231206E12, 830.3028649386079], [1.602312E12, 918.3520249221184], [1.60231218E12, 959.009756097561], [1.60231236E12, 778.1436031331599], [1.60231212E12, 818.7448559670788], [1.60231242E12, 1075.1444866920144], [1.60231224E12, 866.3304964539005], [1.6023123E12, 829.2912621359222], [1.60231194E12, 2027.2941176470588]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231242E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 776.8563968668404, "minX": 1.60231194E12, "maxY": 2025.4705882352941, "series": [{"data": [[1.60231206E12, 828.548431105048], [1.602312E12, 916.5], [1.60231218E12, 956.926829268293], [1.60231236E12, 776.8563968668404], [1.60231212E12, 816.9670781893], [1.60231242E12, 1073.3802281368812], [1.60231224E12, 864.9333333333333], [1.6023123E12, 827.6920943134533], [1.60231194E12, 2025.4705882352941]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231242E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009708737864077669, "minX": 1.60231194E12, "maxY": 6.0, "series": [{"data": [[1.60231206E12, 0.013642564802182814], [1.602312E12, 0.01869158878504673], [1.60231218E12, 0.013008130081300813], [1.60231236E12, 0.01174934725848565], [1.60231212E12, 0.010973936899862825], [1.60231242E12, 0.011406844106463886], [1.60231224E12, 0.02978723404255319], [1.6023123E12, 0.009708737864077669], [1.60231194E12, 6.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231242E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60231194E12, "maxY": 8296.0, "series": [{"data": [[1.60231206E12, 3887.0], [1.602312E12, 5612.0], [1.60231218E12, 4216.0], [1.60231236E12, 3479.0], [1.60231212E12, 3065.0], [1.60231242E12, 4226.0], [1.60231224E12, 8296.0], [1.6023123E12, 3148.0], [1.60231194E12, 3512.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231206E12, 193.60599982500077], [1.602312E12, 201.0], [1.60231218E12, 191.54399985313415], [1.60231236E12, 188.0], [1.60231212E12, 192.0], [1.60231242E12, 252.2719986152649], [1.60231224E12, 190.0], [1.6023123E12, 198.0], [1.60231194E12, 257.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231206E12, 194.0], [1.602312E12, 202.0971001839638], [1.60231218E12, 192.19680011749267], [1.60231236E12, 188.0], [1.60231212E12, 192.21710006952287], [1.60231242E12, 257.49920055389407], [1.60231224E12, 190.0], [1.6023123E12, 198.14780006885528], [1.60231194E12, 257.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231206E12, 193.97299991250037], [1.602312E12, 201.32549977004527], [1.60231218E12, 191.8519999265671], [1.60231236E12, 188.0], [1.60231212E12, 192.0], [1.60231242E12, 255.17599930763245], [1.60231224E12, 190.0], [1.6023123E12, 198.0], [1.60231194E12, 257.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231206E12, 184.0], [1.602312E12, 187.0], [1.60231218E12, 184.0], [1.60231236E12, 185.0], [1.60231212E12, 186.0], [1.60231242E12, 227.0], [1.60231224E12, 186.0], [1.6023123E12, 191.0], [1.60231194E12, 257.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231206E12, 634.0], [1.602312E12, 807.0], [1.60231218E12, 832.0], [1.60231236E12, 644.0], [1.60231212E12, 669.5], [1.60231242E12, 911.0], [1.60231224E12, 734.0], [1.6023123E12, 649.0], [1.60231194E12, 2576.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231242E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 220.0, "minX": 2.0, "maxY": 2670.5, "series": [{"data": [[2.0, 2670.5], [3.0, 2097.0], [4.0, 1466.0], [5.0, 1455.0], [6.0, 1288.0], [7.0, 1012.0], [8.0, 1078.0], [9.0, 894.0], [10.0, 899.5], [11.0, 910.0], [12.0, 765.5], [13.0, 712.0], [14.0, 658.5], [15.0, 656.0], [16.0, 571.0], [17.0, 531.0], [18.0, 521.5], [19.0, 471.0], [20.0, 476.0], [21.0, 458.0], [22.0, 431.5], [23.0, 423.0], [24.0, 428.0], [25.0, 399.5], [26.0, 421.5], [27.0, 424.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[15.0, 220.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 220.0, "minX": 2.0, "maxY": 2664.5, "series": [{"data": [[2.0, 2664.5], [3.0, 2095.0], [4.0, 1463.5], [5.0, 1453.0], [6.0, 1286.0], [7.0, 1007.0], [8.0, 1073.5], [9.0, 892.5], [10.0, 899.0], [11.0, 908.0], [12.0, 763.5], [13.0, 709.0], [14.0, 657.5], [15.0, 656.0], [16.0, 570.0], [17.0, 531.0], [18.0, 521.5], [19.0, 471.0], [20.0, 476.0], [21.0, 458.0], [22.0, 431.5], [23.0, 423.0], [24.0, 428.0], [25.0, 399.5], [26.0, 421.0], [27.0, 424.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[15.0, 220.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.60231194E12, "maxY": 12.766666666666667, "series": [{"data": [[1.60231206E12, 12.216666666666667], [1.602312E12, 10.7], [1.60231218E12, 10.25], [1.60231236E12, 12.766666666666667], [1.60231212E12, 12.15], [1.60231242E12, 4.216666666666667], [1.60231224E12, 11.75], [1.6023123E12, 12.016666666666667], [1.60231194E12, 0.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231242E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231194E12, "maxY": 12.766666666666667, "series": [{"data": [[1.60231206E12, 12.216666666666667], [1.602312E12, 10.7], [1.60231218E12, 10.25], [1.60231236E12, 12.766666666666667], [1.60231212E12, 12.133333333333333], [1.60231242E12, 4.383333333333334], [1.60231224E12, 11.75], [1.6023123E12, 12.016666666666667], [1.60231194E12, 0.2833333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60231212E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231242E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231194E12, "maxY": 12.766666666666667, "series": [{"data": [[1.60231206E12, 12.216666666666667], [1.602312E12, 10.7], [1.60231218E12, 10.25], [1.60231236E12, 12.766666666666667], [1.60231212E12, 12.133333333333333], [1.60231242E12, 4.383333333333334], [1.60231224E12, 11.75], [1.6023123E12, 12.016666666666667], [1.60231194E12, 0.2833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60231212E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231242E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231194E12, "maxY": 12.766666666666667, "series": [{"data": [[1.60231206E12, 12.216666666666667], [1.602312E12, 10.7], [1.60231218E12, 10.25], [1.60231236E12, 12.766666666666667], [1.60231212E12, 12.133333333333333], [1.60231242E12, 4.383333333333334], [1.60231224E12, 11.75], [1.6023123E12, 12.016666666666667], [1.60231194E12, 0.2833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60231212E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231242E12, "title": "Total Transactions Per Second"}},
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

