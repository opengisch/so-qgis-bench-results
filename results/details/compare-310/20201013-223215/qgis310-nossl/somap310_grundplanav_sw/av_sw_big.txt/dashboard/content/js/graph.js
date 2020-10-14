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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 8539.0, "series": [{"data": [[0.0, 179.0], [0.1, 185.0], [0.2, 187.0], [0.3, 188.0], [0.4, 189.0], [0.5, 190.0], [0.6, 192.0], [0.7, 192.0], [0.8, 193.0], [0.9, 194.0], [1.0, 194.0], [1.1, 196.0], [1.2, 196.0], [1.3, 197.0], [1.4, 198.0], [1.5, 199.0], [1.6, 200.0], [1.7, 200.0], [1.8, 201.0], [1.9, 202.0], [2.0, 202.0], [2.1, 203.0], [2.2, 204.0], [2.3, 204.0], [2.4, 205.0], [2.5, 206.0], [2.6, 207.0], [2.7, 208.0], [2.8, 209.0], [2.9, 209.0], [3.0, 210.0], [3.1, 212.0], [3.2, 212.0], [3.3, 213.0], [3.4, 214.0], [3.5, 214.0], [3.6, 215.0], [3.7, 216.0], [3.8, 217.0], [3.9, 218.0], [4.0, 219.0], [4.1, 219.0], [4.2, 220.0], [4.3, 221.0], [4.4, 222.0], [4.5, 222.0], [4.6, 223.0], [4.7, 223.0], [4.8, 224.0], [4.9, 226.0], [5.0, 227.0], [5.1, 228.0], [5.2, 228.0], [5.3, 229.0], [5.4, 230.0], [5.5, 230.0], [5.6, 231.0], [5.7, 232.0], [5.8, 233.0], [5.9, 233.0], [6.0, 234.0], [6.1, 235.0], [6.2, 236.0], [6.3, 238.0], [6.4, 239.0], [6.5, 240.0], [6.6, 241.0], [6.7, 244.0], [6.8, 244.0], [6.9, 245.0], [7.0, 246.0], [7.1, 248.0], [7.2, 249.0], [7.3, 249.0], [7.4, 251.0], [7.5, 252.0], [7.6, 253.0], [7.7, 255.0], [7.8, 256.0], [7.9, 259.0], [8.0, 260.0], [8.1, 261.0], [8.2, 262.0], [8.3, 264.0], [8.4, 264.0], [8.5, 266.0], [8.6, 268.0], [8.7, 268.0], [8.8, 269.0], [8.9, 270.0], [9.0, 271.0], [9.1, 272.0], [9.2, 273.0], [9.3, 274.0], [9.4, 274.0], [9.5, 275.0], [9.6, 276.0], [9.7, 276.0], [9.8, 277.0], [9.9, 278.0], [10.0, 279.0], [10.1, 280.0], [10.2, 281.0], [10.3, 282.0], [10.4, 283.0], [10.5, 283.0], [10.6, 284.0], [10.7, 285.0], [10.8, 286.0], [10.9, 287.0], [11.0, 288.0], [11.1, 289.0], [11.2, 290.0], [11.3, 291.0], [11.4, 292.0], [11.5, 293.0], [11.6, 294.0], [11.7, 295.0], [11.8, 295.0], [11.9, 296.0], [12.0, 297.0], [12.1, 298.0], [12.2, 300.0], [12.3, 301.0], [12.4, 302.0], [12.5, 303.0], [12.6, 304.0], [12.7, 306.0], [12.8, 309.0], [12.9, 310.0], [13.0, 311.0], [13.1, 312.0], [13.2, 312.0], [13.3, 314.0], [13.4, 315.0], [13.5, 315.0], [13.6, 316.0], [13.7, 318.0], [13.8, 319.0], [13.9, 320.0], [14.0, 320.0], [14.1, 322.0], [14.2, 324.0], [14.3, 325.0], [14.4, 326.0], [14.5, 326.0], [14.6, 327.0], [14.7, 330.0], [14.8, 332.0], [14.9, 333.0], [15.0, 335.0], [15.1, 337.0], [15.2, 338.0], [15.3, 342.0], [15.4, 343.0], [15.5, 344.0], [15.6, 345.0], [15.7, 347.0], [15.8, 350.0], [15.9, 352.0], [16.0, 354.0], [16.1, 357.0], [16.2, 358.0], [16.3, 359.0], [16.4, 361.0], [16.5, 362.0], [16.6, 364.0], [16.7, 365.0], [16.8, 369.0], [16.9, 371.0], [17.0, 373.0], [17.1, 375.0], [17.2, 376.0], [17.3, 378.0], [17.4, 379.0], [17.5, 380.0], [17.6, 381.0], [17.7, 382.0], [17.8, 383.0], [17.9, 383.0], [18.0, 384.0], [18.1, 385.0], [18.2, 386.0], [18.3, 387.0], [18.4, 388.0], [18.5, 389.0], [18.6, 390.0], [18.7, 391.0], [18.8, 391.0], [18.9, 392.0], [19.0, 392.0], [19.1, 393.0], [19.2, 394.0], [19.3, 396.0], [19.4, 397.0], [19.5, 398.0], [19.6, 399.0], [19.7, 400.0], [19.8, 400.0], [19.9, 401.0], [20.0, 402.0], [20.1, 403.0], [20.2, 404.0], [20.3, 404.0], [20.4, 405.0], [20.5, 405.0], [20.6, 406.0], [20.7, 408.0], [20.8, 408.0], [20.9, 409.0], [21.0, 409.0], [21.1, 410.0], [21.2, 411.0], [21.3, 412.0], [21.4, 412.0], [21.5, 413.0], [21.6, 414.0], [21.7, 415.0], [21.8, 416.0], [21.9, 417.0], [22.0, 417.0], [22.1, 418.0], [22.2, 419.0], [22.3, 420.0], [22.4, 420.0], [22.5, 420.0], [22.6, 421.0], [22.7, 422.0], [22.8, 423.0], [22.9, 424.0], [23.0, 424.0], [23.1, 425.0], [23.2, 426.0], [23.3, 427.0], [23.4, 428.0], [23.5, 429.0], [23.6, 430.0], [23.7, 431.0], [23.8, 432.0], [23.9, 432.0], [24.0, 433.0], [24.1, 435.0], [24.2, 436.0], [24.3, 437.0], [24.4, 438.0], [24.5, 439.0], [24.6, 440.0], [24.7, 441.0], [24.8, 442.0], [24.9, 443.0], [25.0, 443.0], [25.1, 444.0], [25.2, 445.0], [25.3, 445.0], [25.4, 446.0], [25.5, 448.0], [25.6, 448.0], [25.7, 449.0], [25.8, 450.0], [25.9, 451.0], [26.0, 451.0], [26.1, 452.0], [26.2, 452.0], [26.3, 453.0], [26.4, 453.0], [26.5, 454.0], [26.6, 454.0], [26.7, 455.0], [26.8, 455.0], [26.9, 456.0], [27.0, 457.0], [27.1, 458.0], [27.2, 459.0], [27.3, 460.0], [27.4, 461.0], [27.5, 462.0], [27.6, 463.0], [27.7, 463.0], [27.8, 464.0], [27.9, 465.0], [28.0, 466.0], [28.1, 466.0], [28.2, 468.0], [28.3, 469.0], [28.4, 469.0], [28.5, 470.0], [28.6, 470.0], [28.7, 472.0], [28.8, 473.0], [28.9, 474.0], [29.0, 475.0], [29.1, 475.0], [29.2, 476.0], [29.3, 476.0], [29.4, 477.0], [29.5, 478.0], [29.6, 479.0], [29.7, 480.0], [29.8, 481.0], [29.9, 483.0], [30.0, 485.0], [30.1, 486.0], [30.2, 487.0], [30.3, 488.0], [30.4, 489.0], [30.5, 490.0], [30.6, 491.0], [30.7, 492.0], [30.8, 493.0], [30.9, 494.0], [31.0, 494.0], [31.1, 496.0], [31.2, 497.0], [31.3, 498.0], [31.4, 499.0], [31.5, 501.0], [31.6, 502.0], [31.7, 503.0], [31.8, 504.0], [31.9, 505.0], [32.0, 506.0], [32.1, 508.0], [32.2, 510.0], [32.3, 510.0], [32.4, 511.0], [32.5, 512.0], [32.6, 513.0], [32.7, 515.0], [32.8, 516.0], [32.9, 517.0], [33.0, 518.0], [33.1, 519.0], [33.2, 520.0], [33.3, 521.0], [33.4, 522.0], [33.5, 524.0], [33.6, 524.0], [33.7, 526.0], [33.8, 526.0], [33.9, 527.0], [34.0, 528.0], [34.1, 529.0], [34.2, 530.0], [34.3, 530.0], [34.4, 531.0], [34.5, 532.0], [34.6, 533.0], [34.7, 534.0], [34.8, 534.0], [34.9, 535.0], [35.0, 537.0], [35.1, 538.0], [35.2, 539.0], [35.3, 540.0], [35.4, 540.0], [35.5, 541.0], [35.6, 542.0], [35.7, 543.0], [35.8, 545.0], [35.9, 545.0], [36.0, 546.0], [36.1, 547.0], [36.2, 548.0], [36.3, 548.0], [36.4, 549.0], [36.5, 550.0], [36.6, 551.0], [36.7, 552.0], [36.8, 552.0], [36.9, 554.0], [37.0, 554.0], [37.1, 555.0], [37.2, 556.0], [37.3, 557.0], [37.4, 559.0], [37.5, 560.0], [37.6, 560.0], [37.7, 561.0], [37.8, 562.0], [37.9, 564.0], [38.0, 565.0], [38.1, 565.0], [38.2, 565.0], [38.3, 566.0], [38.4, 567.0], [38.5, 568.0], [38.6, 568.0], [38.7, 569.0], [38.8, 570.0], [38.9, 571.0], [39.0, 571.0], [39.1, 572.0], [39.2, 573.0], [39.3, 573.0], [39.4, 574.0], [39.5, 575.0], [39.6, 577.0], [39.7, 578.0], [39.8, 580.0], [39.9, 582.0], [40.0, 582.0], [40.1, 584.0], [40.2, 585.0], [40.3, 586.0], [40.4, 588.0], [40.5, 589.0], [40.6, 590.0], [40.7, 591.0], [40.8, 592.0], [40.9, 594.0], [41.0, 594.0], [41.1, 596.0], [41.2, 597.0], [41.3, 598.0], [41.4, 598.0], [41.5, 600.0], [41.6, 601.0], [41.7, 602.0], [41.8, 603.0], [41.9, 604.0], [42.0, 605.0], [42.1, 607.0], [42.2, 608.0], [42.3, 609.0], [42.4, 610.0], [42.5, 611.0], [42.6, 612.0], [42.7, 613.0], [42.8, 614.0], [42.9, 615.0], [43.0, 616.0], [43.1, 617.0], [43.2, 618.0], [43.3, 620.0], [43.4, 621.0], [43.5, 622.0], [43.6, 623.0], [43.7, 623.0], [43.8, 624.0], [43.9, 625.0], [44.0, 626.0], [44.1, 627.0], [44.2, 629.0], [44.3, 630.0], [44.4, 631.0], [44.5, 632.0], [44.6, 634.0], [44.7, 635.0], [44.8, 637.0], [44.9, 638.0], [45.0, 639.0], [45.1, 640.0], [45.2, 641.0], [45.3, 643.0], [45.4, 644.0], [45.5, 645.0], [45.6, 647.0], [45.7, 648.0], [45.8, 649.0], [45.9, 650.0], [46.0, 651.0], [46.1, 652.0], [46.2, 652.0], [46.3, 654.0], [46.4, 655.0], [46.5, 657.0], [46.6, 658.0], [46.7, 659.0], [46.8, 661.0], [46.9, 662.0], [47.0, 664.0], [47.1, 665.0], [47.2, 666.0], [47.3, 668.0], [47.4, 670.0], [47.5, 672.0], [47.6, 672.0], [47.7, 675.0], [47.8, 677.0], [47.9, 678.0], [48.0, 679.0], [48.1, 682.0], [48.2, 684.0], [48.3, 685.0], [48.4, 687.0], [48.5, 689.0], [48.6, 690.0], [48.7, 690.0], [48.8, 692.0], [48.9, 693.0], [49.0, 694.0], [49.1, 695.0], [49.2, 696.0], [49.3, 697.0], [49.4, 699.0], [49.5, 699.0], [49.6, 701.0], [49.7, 702.0], [49.8, 702.0], [49.9, 703.0], [50.0, 705.0], [50.1, 708.0], [50.2, 710.0], [50.3, 712.0], [50.4, 714.0], [50.5, 716.0], [50.6, 717.0], [50.7, 720.0], [50.8, 721.0], [50.9, 721.0], [51.0, 724.0], [51.1, 725.0], [51.2, 727.0], [51.3, 729.0], [51.4, 730.0], [51.5, 733.0], [51.6, 734.0], [51.7, 736.0], [51.8, 737.0], [51.9, 739.0], [52.0, 741.0], [52.1, 744.0], [52.2, 745.0], [52.3, 746.0], [52.4, 747.0], [52.5, 748.0], [52.6, 750.0], [52.7, 752.0], [52.8, 754.0], [52.9, 755.0], [53.0, 756.0], [53.1, 757.0], [53.2, 759.0], [53.3, 761.0], [53.4, 763.0], [53.5, 765.0], [53.6, 768.0], [53.7, 770.0], [53.8, 771.0], [53.9, 772.0], [54.0, 773.0], [54.1, 774.0], [54.2, 775.0], [54.3, 778.0], [54.4, 779.0], [54.5, 781.0], [54.6, 782.0], [54.7, 784.0], [54.8, 785.0], [54.9, 788.0], [55.0, 788.0], [55.1, 789.0], [55.2, 790.0], [55.3, 792.0], [55.4, 795.0], [55.5, 797.0], [55.6, 798.0], [55.7, 799.0], [55.8, 800.0], [55.9, 802.0], [56.0, 804.0], [56.1, 805.0], [56.2, 806.0], [56.3, 809.0], [56.4, 811.0], [56.5, 812.0], [56.6, 816.0], [56.7, 819.0], [56.8, 821.0], [56.9, 823.0], [57.0, 827.0], [57.1, 828.0], [57.2, 831.0], [57.3, 832.0], [57.4, 835.0], [57.5, 838.0], [57.6, 839.0], [57.7, 841.0], [57.8, 843.0], [57.9, 845.0], [58.0, 850.0], [58.1, 852.0], [58.2, 852.0], [58.3, 854.0], [58.4, 856.0], [58.5, 857.0], [58.6, 858.0], [58.7, 860.0], [58.8, 862.0], [58.9, 864.0], [59.0, 867.0], [59.1, 868.0], [59.2, 869.0], [59.3, 871.0], [59.4, 873.0], [59.5, 875.0], [59.6, 876.0], [59.7, 876.0], [59.8, 877.0], [59.9, 880.0], [60.0, 881.0], [60.1, 884.0], [60.2, 885.0], [60.3, 887.0], [60.4, 889.0], [60.5, 890.0], [60.6, 891.0], [60.7, 893.0], [60.8, 894.0], [60.9, 897.0], [61.0, 899.0], [61.1, 900.0], [61.2, 901.0], [61.3, 904.0], [61.4, 906.0], [61.5, 908.0], [61.6, 909.0], [61.7, 910.0], [61.8, 913.0], [61.9, 915.0], [62.0, 916.0], [62.1, 917.0], [62.2, 919.0], [62.3, 922.0], [62.4, 922.0], [62.5, 924.0], [62.6, 926.0], [62.7, 928.0], [62.8, 928.0], [62.9, 930.0], [63.0, 931.0], [63.1, 934.0], [63.2, 935.0], [63.3, 936.0], [63.4, 939.0], [63.5, 940.0], [63.6, 942.0], [63.7, 946.0], [63.8, 947.0], [63.9, 948.0], [64.0, 949.0], [64.1, 951.0], [64.2, 953.0], [64.3, 955.0], [64.4, 956.0], [64.5, 957.0], [64.6, 960.0], [64.7, 961.0], [64.8, 963.0], [64.9, 965.0], [65.0, 968.0], [65.1, 969.0], [65.2, 971.0], [65.3, 973.0], [65.4, 976.0], [65.5, 977.0], [65.6, 978.0], [65.7, 980.0], [65.8, 983.0], [65.9, 984.0], [66.0, 986.0], [66.1, 992.0], [66.2, 993.0], [66.3, 995.0], [66.4, 997.0], [66.5, 999.0], [66.6, 1000.0], [66.7, 1002.0], [66.8, 1003.0], [66.9, 1005.0], [67.0, 1008.0], [67.1, 1011.0], [67.2, 1012.0], [67.3, 1014.0], [67.4, 1015.0], [67.5, 1017.0], [67.6, 1019.0], [67.7, 1020.0], [67.8, 1022.0], [67.9, 1023.0], [68.0, 1024.0], [68.1, 1025.0], [68.2, 1027.0], [68.3, 1029.0], [68.4, 1029.0], [68.5, 1031.0], [68.6, 1032.0], [68.7, 1032.0], [68.8, 1034.0], [68.9, 1035.0], [69.0, 1036.0], [69.1, 1039.0], [69.2, 1040.0], [69.3, 1042.0], [69.4, 1043.0], [69.5, 1046.0], [69.6, 1048.0], [69.7, 1048.0], [69.8, 1049.0], [69.9, 1051.0], [70.0, 1052.0], [70.1, 1055.0], [70.2, 1057.0], [70.3, 1059.0], [70.4, 1059.0], [70.5, 1061.0], [70.6, 1062.0], [70.7, 1063.0], [70.8, 1066.0], [70.9, 1068.0], [71.0, 1069.0], [71.1, 1070.0], [71.2, 1071.0], [71.3, 1073.0], [71.4, 1074.0], [71.5, 1076.0], [71.6, 1079.0], [71.7, 1081.0], [71.8, 1082.0], [71.9, 1083.0], [72.0, 1085.0], [72.1, 1087.0], [72.2, 1089.0], [72.3, 1090.0], [72.4, 1092.0], [72.5, 1093.0], [72.6, 1095.0], [72.7, 1096.0], [72.8, 1098.0], [72.9, 1099.0], [73.0, 1100.0], [73.1, 1101.0], [73.2, 1102.0], [73.3, 1103.0], [73.4, 1105.0], [73.5, 1107.0], [73.6, 1108.0], [73.7, 1111.0], [73.8, 1112.0], [73.9, 1115.0], [74.0, 1120.0], [74.1, 1122.0], [74.2, 1124.0], [74.3, 1128.0], [74.4, 1130.0], [74.5, 1133.0], [74.6, 1133.0], [74.7, 1134.0], [74.8, 1136.0], [74.9, 1140.0], [75.0, 1141.0], [75.1, 1144.0], [75.2, 1147.0], [75.3, 1148.0], [75.4, 1150.0], [75.5, 1152.0], [75.6, 1155.0], [75.7, 1156.0], [75.8, 1159.0], [75.9, 1161.0], [76.0, 1163.0], [76.1, 1166.0], [76.2, 1168.0], [76.3, 1170.0], [76.4, 1171.0], [76.5, 1172.0], [76.6, 1177.0], [76.7, 1178.0], [76.8, 1180.0], [76.9, 1182.0], [77.0, 1184.0], [77.1, 1186.0], [77.2, 1190.0], [77.3, 1194.0], [77.4, 1197.0], [77.5, 1199.0], [77.6, 1203.0], [77.7, 1207.0], [77.8, 1209.0], [77.9, 1211.0], [78.0, 1212.0], [78.1, 1215.0], [78.2, 1216.0], [78.3, 1219.0], [78.4, 1221.0], [78.5, 1223.0], [78.6, 1227.0], [78.7, 1230.0], [78.8, 1235.0], [78.9, 1237.0], [79.0, 1239.0], [79.1, 1241.0], [79.2, 1243.0], [79.3, 1245.0], [79.4, 1247.0], [79.5, 1254.0], [79.6, 1256.0], [79.7, 1259.0], [79.8, 1261.0], [79.9, 1263.0], [80.0, 1267.0], [80.1, 1269.0], [80.2, 1270.0], [80.3, 1272.0], [80.4, 1275.0], [80.5, 1278.0], [80.6, 1279.0], [80.7, 1280.0], [80.8, 1283.0], [80.9, 1285.0], [81.0, 1287.0], [81.1, 1290.0], [81.2, 1292.0], [81.3, 1294.0], [81.4, 1296.0], [81.5, 1299.0], [81.6, 1301.0], [81.7, 1303.0], [81.8, 1306.0], [81.9, 1308.0], [82.0, 1313.0], [82.1, 1314.0], [82.2, 1317.0], [82.3, 1319.0], [82.4, 1322.0], [82.5, 1325.0], [82.6, 1327.0], [82.7, 1331.0], [82.8, 1332.0], [82.9, 1337.0], [83.0, 1338.0], [83.1, 1340.0], [83.2, 1344.0], [83.3, 1346.0], [83.4, 1348.0], [83.5, 1350.0], [83.6, 1352.0], [83.7, 1353.0], [83.8, 1356.0], [83.9, 1359.0], [84.0, 1360.0], [84.1, 1363.0], [84.2, 1366.0], [84.3, 1369.0], [84.4, 1371.0], [84.5, 1372.0], [84.6, 1375.0], [84.7, 1378.0], [84.8, 1381.0], [84.9, 1383.0], [85.0, 1385.0], [85.1, 1387.0], [85.2, 1391.0], [85.3, 1393.0], [85.4, 1397.0], [85.5, 1398.0], [85.6, 1402.0], [85.7, 1403.0], [85.8, 1406.0], [85.9, 1409.0], [86.0, 1412.0], [86.1, 1415.0], [86.2, 1417.0], [86.3, 1421.0], [86.4, 1426.0], [86.5, 1428.0], [86.6, 1430.0], [86.7, 1432.0], [86.8, 1435.0], [86.9, 1441.0], [87.0, 1444.0], [87.1, 1445.0], [87.2, 1446.0], [87.3, 1449.0], [87.4, 1453.0], [87.5, 1455.0], [87.6, 1458.0], [87.7, 1463.0], [87.8, 1465.0], [87.9, 1469.0], [88.0, 1471.0], [88.1, 1477.0], [88.2, 1480.0], [88.3, 1486.0], [88.4, 1489.0], [88.5, 1493.0], [88.6, 1495.0], [88.7, 1497.0], [88.8, 1504.0], [88.9, 1508.0], [89.0, 1511.0], [89.1, 1514.0], [89.2, 1515.0], [89.3, 1521.0], [89.4, 1530.0], [89.5, 1535.0], [89.6, 1539.0], [89.7, 1545.0], [89.8, 1548.0], [89.9, 1554.0], [90.0, 1558.0], [90.1, 1560.0], [90.2, 1565.0], [90.3, 1569.0], [90.4, 1575.0], [90.5, 1580.0], [90.6, 1583.0], [90.7, 1586.0], [90.8, 1591.0], [90.9, 1593.0], [91.0, 1600.0], [91.1, 1604.0], [91.2, 1610.0], [91.3, 1612.0], [91.4, 1617.0], [91.5, 1622.0], [91.6, 1627.0], [91.7, 1633.0], [91.8, 1636.0], [91.9, 1642.0], [92.0, 1654.0], [92.1, 1660.0], [92.2, 1666.0], [92.3, 1677.0], [92.4, 1699.0], [92.5, 1704.0], [92.6, 1709.0], [92.7, 1711.0], [92.8, 1720.0], [92.9, 1735.0], [93.0, 1741.0], [93.1, 1748.0], [93.2, 1761.0], [93.3, 1764.0], [93.4, 1772.0], [93.5, 1778.0], [93.6, 1786.0], [93.7, 1797.0], [93.8, 1806.0], [93.9, 1822.0], [94.0, 1835.0], [94.1, 1853.0], [94.2, 1866.0], [94.3, 1885.0], [94.4, 1902.0], [94.5, 1914.0], [94.6, 1928.0], [94.7, 1941.0], [94.8, 1946.0], [94.9, 1954.0], [95.0, 1960.0], [95.1, 1976.0], [95.2, 1988.0], [95.3, 1995.0], [95.4, 2010.0], [95.5, 2022.0], [95.6, 2036.0], [95.7, 2048.0], [95.8, 2055.0], [95.9, 2069.0], [96.0, 2079.0], [96.1, 2098.0], [96.2, 2109.0], [96.3, 2116.0], [96.4, 2136.0], [96.5, 2154.0], [96.6, 2170.0], [96.7, 2177.0], [96.8, 2187.0], [96.9, 2213.0], [97.0, 2222.0], [97.1, 2231.0], [97.2, 2246.0], [97.3, 2260.0], [97.4, 2273.0], [97.5, 2286.0], [97.6, 2301.0], [97.7, 2326.0], [97.8, 2341.0], [97.9, 2374.0], [98.0, 2403.0], [98.1, 2457.0], [98.2, 2476.0], [98.3, 2548.0], [98.4, 2573.0], [98.5, 2625.0], [98.6, 2690.0], [98.7, 2710.0], [98.8, 2745.0], [98.9, 2850.0], [99.0, 2931.0], [99.1, 3027.0], [99.2, 3094.0], [99.3, 3278.0], [99.4, 3344.0], [99.5, 3478.0], [99.6, 3713.0], [99.7, 3891.0], [99.8, 4529.0], [99.9, 5038.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 610.0, "series": [{"data": [[600.0, 417.0], [700.0, 323.0], [800.0, 277.0], [900.0, 284.0], [1000.0, 332.0], [1100.0, 239.0], [1200.0, 205.0], [1300.0, 210.0], [1400.0, 165.0], [1500.0, 117.0], [1600.0, 75.0], [1700.0, 68.0], [1800.0, 34.0], [1900.0, 51.0], [2000.0, 38.0], [2100.0, 38.0], [2300.0, 21.0], [2200.0, 39.0], [2400.0, 12.0], [2500.0, 13.0], [2600.0, 9.0], [2800.0, 7.0], [2700.0, 11.0], [2900.0, 5.0], [3000.0, 6.0], [3100.0, 2.0], [3200.0, 4.0], [3300.0, 5.0], [3400.0, 5.0], [3500.0, 3.0], [3700.0, 2.0], [3600.0, 1.0], [3800.0, 4.0], [4100.0, 2.0], [4500.0, 2.0], [4400.0, 1.0], [4600.0, 1.0], [4700.0, 2.0], [4800.0, 1.0], [5000.0, 1.0], [5100.0, 1.0], [5600.0, 1.0], [5400.0, 1.0], [5500.0, 1.0], [8500.0, 1.0], [100.0, 81.0], [200.0, 552.0], [300.0, 387.0], [400.0, 610.0], [500.0, 523.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 584.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2974.0, "series": [{"data": [[0.0, 1632.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2974.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 584.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.60263216E12, "maxY": 10.0, "series": [{"data": [[1.60263234E12, 10.0], [1.60263216E12, 10.0], [1.60263264E12, 2.0], [1.60263222E12, 10.0], [1.60263252E12, 10.0], [1.60263258E12, 9.970042796005705], [1.6026324E12, 10.0], [1.60263246E12, 10.0], [1.60263228E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263264E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 291.0, "minX": 1.0, "maxY": 2702.0, "series": [{"data": [[8.0, 291.0], [4.0, 1198.0], [2.0, 2702.0], [1.0, 2550.0], [9.0, 489.0], [10.0, 863.6460142829574], [5.0, 539.0], [6.0, 832.0], [3.0, 1272.0], [7.0, 536.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 864.1539499036613]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 23.45, "minX": 1.60263216E12, "maxY": 3903264.8833333333, "series": [{"data": [[1.60263234E12, 3277928.316666667], [1.60263216E12, 1604350.0], [1.60263264E12, 40934.683333333334], [1.60263222E12, 2579119.283333333], [1.60263252E12, 3651853.183333333], [1.60263258E12, 3045463.5166666666], [1.6026324E12, 3126977.6166666667], [1.60263246E12, 2742988.5833333335], [1.60263228E12, 3903264.8833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263234E12, 5324.533333333334], [1.60263216E12, 1928.9666666666667], [1.60263264E12, 23.45], [1.60263222E12, 5445.85], [1.60263252E12, 5559.866666666667], [1.60263258E12, 5304.166666666667], [1.6026324E12, 4375.883333333333], [1.60263246E12, 5289.983333333334], [1.60263228E12, 5324.633333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263264E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 793.1646746347942, "minX": 1.60263216E12, "maxY": 2174.6666666666665, "series": [{"data": [[1.60263234E12, 851.7766714082511], [1.60263216E12, 1076.4060150375954], [1.60263264E12, 2174.6666666666665], [1.60263222E12, 793.1646746347942], [1.60263252E12, 819.8144611186907], [1.60263258E12, 854.8758915834525], [1.6026324E12, 988.5439469320074], [1.60263246E12, 831.3517241379308], [1.60263228E12, 849.2816500711244]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263264E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 791.597609561752, "minX": 1.60263216E12, "maxY": 2170.6666666666665, "series": [{"data": [[1.60263234E12, 849.7923186344244], [1.60263216E12, 1073.8270676691725], [1.60263264E12, 2170.6666666666665], [1.60263222E12, 791.597609561752], [1.60263252E12, 818.0450204638478], [1.60263258E12, 853.4650499286732], [1.6026324E12, 986.9552238805968], [1.60263246E12, 830.0400000000006], [1.60263228E12, 846.7923186344232]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263264E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60263216E12, "maxY": 0.3082706766917289, "series": [{"data": [[1.60263234E12, 0.01849217638691324], [1.60263216E12, 0.3082706766917289], [1.60263264E12, 0.0], [1.60263222E12, 0.01593625498007969], [1.60263252E12, 0.012278308321964528], [1.60263258E12, 0.011412268188302417], [1.6026324E12, 0.02155887230514094], [1.60263246E12, 0.02206896551724139], [1.60263228E12, 0.018492176386913212]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263264E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.60263216E12, "maxY": 8539.0, "series": [{"data": [[1.60263234E12, 5118.0], [1.60263216E12, 5038.0], [1.60263264E12, 2702.0], [1.60263222E12, 4412.0], [1.60263252E12, 2463.0], [1.60263258E12, 3673.0], [1.6026324E12, 8539.0], [1.60263246E12, 5558.0], [1.60263228E12, 4155.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263234E12, 191.33599983215333], [1.60263216E12, 200.0], [1.60263264E12, 1272.0], [1.60263222E12, 194.0], [1.60263252E12, 190.0], [1.60263258E12, 188.31799983263016], [1.6026324E12, 198.61599913597107], [1.60263246E12, 199.53399982690811], [1.60263228E12, 193.67199966430664]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263234E12, 191.96960006713869], [1.60263216E12, 200.0], [1.60263264E12, 1272.0], [1.60263222E12, 194.0], [1.60263252E12, 190.5332001399994], [1.60263258E12, 188.94980006694794], [1.6026324E12, 201.87760034561157], [1.60263246E12, 200.37480013847352], [1.60263228E12, 194.93920013427734]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263234E12, 191.68799991607665], [1.60263216E12, 200.0], [1.60263264E12, 1272.0], [1.60263222E12, 194.0], [1.60263252E12, 190.0], [1.60263258E12, 188.66899991631507], [1.6026324E12, 200.42799956798552], [1.60263246E12, 199.89699991345407], [1.60263228E12, 194.37599983215333]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263234E12, 186.0], [1.60263216E12, 199.0], [1.60263264E12, 1272.0], [1.60263222E12, 186.0], [1.60263252E12, 179.0], [1.60263258E12, 182.0], [1.6026324E12, 191.0], [1.60263246E12, 182.0], [1.60263228E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263234E12, 690.0], [1.60263216E12, 875.5], [1.60263264E12, 2550.0], [1.60263222E12, 654.0], [1.60263252E12, 640.0], [1.60263258E12, 720.0], [1.6026324E12, 899.0], [1.60263246E12, 690.0], [1.60263228E12, 642.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263264E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 387.5, "minX": 1.0, "maxY": 2626.0, "series": [{"data": [[2.0, 2626.0], [3.0, 2403.0], [4.0, 1508.0], [5.0, 1376.0], [6.0, 1169.0], [7.0, 1163.5], [8.0, 1061.5], [9.0, 928.0], [10.0, 906.0], [11.0, 877.5], [12.0, 759.0], [13.0, 693.0], [14.0, 610.5], [15.0, 597.0], [1.0, 1866.5], [16.0, 562.0], [17.0, 563.5], [18.0, 492.0], [19.0, 437.5], [20.0, 436.5], [21.0, 425.0], [22.0, 424.0], [24.0, 412.5], [26.0, 405.5], [27.0, 419.5], [28.0, 387.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 387.5, "minX": 1.0, "maxY": 2620.5, "series": [{"data": [[2.0, 2620.5], [3.0, 2402.0], [4.0, 1502.5], [5.0, 1373.0], [6.0, 1164.0], [7.0, 1162.0], [8.0, 1058.0], [9.0, 927.0], [10.0, 905.0], [11.0, 875.0], [12.0, 757.0], [13.0, 693.0], [14.0, 610.5], [15.0, 595.0], [1.0, 1864.5], [16.0, 561.5], [17.0, 563.5], [18.0, 491.5], [19.0, 437.5], [20.0, 436.5], [21.0, 425.0], [22.0, 424.0], [24.0, 412.5], [26.0, 405.0], [27.0, 419.5], [28.0, 387.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.6, "minX": 1.60263216E12, "maxY": 12.55, "series": [{"data": [[1.60263234E12, 11.716666666666667], [1.60263216E12, 4.6], [1.60263222E12, 12.55], [1.60263252E12, 12.216666666666667], [1.60263258E12, 11.566666666666666], [1.6026324E12, 10.05], [1.60263246E12, 12.083333333333334], [1.60263228E12, 11.716666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263258E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.60263216E12, "maxY": 12.55, "series": [{"data": [[1.60263234E12, 11.716666666666667], [1.60263216E12, 4.433333333333334], [1.60263264E12, 0.05], [1.60263222E12, 12.55], [1.60263252E12, 12.216666666666667], [1.60263258E12, 11.683333333333334], [1.6026324E12, 10.05], [1.60263246E12, 12.083333333333334], [1.60263228E12, 11.716666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263264E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.60263216E12, "maxY": 12.55, "series": [{"data": [[1.60263234E12, 11.716666666666667], [1.60263216E12, 4.433333333333334], [1.60263264E12, 0.05], [1.60263222E12, 12.55], [1.60263252E12, 12.216666666666667], [1.60263258E12, 11.683333333333334], [1.6026324E12, 10.05], [1.60263246E12, 12.083333333333334], [1.60263228E12, 11.716666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263264E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.60263216E12, "maxY": 12.55, "series": [{"data": [[1.60263234E12, 11.716666666666667], [1.60263216E12, 4.433333333333334], [1.60263264E12, 0.05], [1.60263222E12, 12.55], [1.60263252E12, 12.216666666666667], [1.60263258E12, 11.683333333333334], [1.6026324E12, 10.05], [1.60263246E12, 12.083333333333334], [1.60263228E12, 11.716666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263264E12, "title": "Total Transactions Per Second"}},
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

