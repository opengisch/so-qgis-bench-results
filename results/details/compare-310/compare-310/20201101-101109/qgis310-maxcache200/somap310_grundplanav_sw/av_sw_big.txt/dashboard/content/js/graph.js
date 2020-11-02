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
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 6051.0, "series": [{"data": [[0.0, 183.0], [0.1, 190.0], [0.2, 191.0], [0.3, 192.0], [0.4, 194.0], [0.5, 196.0], [0.6, 197.0], [0.7, 198.0], [0.8, 198.0], [0.9, 200.0], [1.0, 200.0], [1.1, 201.0], [1.2, 202.0], [1.3, 203.0], [1.4, 203.0], [1.5, 204.0], [1.6, 205.0], [1.7, 206.0], [1.8, 206.0], [1.9, 207.0], [2.0, 208.0], [2.1, 209.0], [2.2, 210.0], [2.3, 210.0], [2.4, 211.0], [2.5, 212.0], [2.6, 214.0], [2.7, 216.0], [2.8, 217.0], [2.9, 218.0], [3.0, 219.0], [3.1, 219.0], [3.2, 220.0], [3.3, 221.0], [3.4, 222.0], [3.5, 222.0], [3.6, 222.0], [3.7, 224.0], [3.8, 225.0], [3.9, 226.0], [4.0, 227.0], [4.1, 228.0], [4.2, 229.0], [4.3, 230.0], [4.4, 231.0], [4.5, 233.0], [4.6, 233.0], [4.7, 234.0], [4.8, 236.0], [4.9, 236.0], [5.0, 237.0], [5.1, 237.0], [5.2, 238.0], [5.3, 238.0], [5.4, 239.0], [5.5, 240.0], [5.6, 241.0], [5.7, 242.0], [5.8, 243.0], [5.9, 243.0], [6.0, 244.0], [6.1, 245.0], [6.2, 245.0], [6.3, 246.0], [6.4, 247.0], [6.5, 248.0], [6.6, 249.0], [6.7, 250.0], [6.8, 252.0], [6.9, 253.0], [7.0, 254.0], [7.1, 255.0], [7.2, 256.0], [7.3, 257.0], [7.4, 259.0], [7.5, 261.0], [7.6, 264.0], [7.7, 265.0], [7.8, 266.0], [7.9, 267.0], [8.0, 269.0], [8.1, 270.0], [8.2, 272.0], [8.3, 273.0], [8.4, 275.0], [8.5, 275.0], [8.6, 277.0], [8.7, 277.0], [8.8, 278.0], [8.9, 279.0], [9.0, 280.0], [9.1, 281.0], [9.2, 281.0], [9.3, 282.0], [9.4, 283.0], [9.5, 283.0], [9.6, 284.0], [9.7, 286.0], [9.8, 286.0], [9.9, 288.0], [10.0, 289.0], [10.1, 290.0], [10.2, 291.0], [10.3, 292.0], [10.4, 293.0], [10.5, 294.0], [10.6, 296.0], [10.7, 297.0], [10.8, 297.0], [10.9, 298.0], [11.0, 299.0], [11.1, 300.0], [11.2, 301.0], [11.3, 303.0], [11.4, 304.0], [11.5, 306.0], [11.6, 308.0], [11.7, 309.0], [11.8, 310.0], [11.9, 311.0], [12.0, 312.0], [12.1, 313.0], [12.2, 313.0], [12.3, 314.0], [12.4, 315.0], [12.5, 316.0], [12.6, 318.0], [12.7, 319.0], [12.8, 320.0], [12.9, 322.0], [13.0, 322.0], [13.1, 323.0], [13.2, 324.0], [13.3, 324.0], [13.4, 326.0], [13.5, 327.0], [13.6, 328.0], [13.7, 330.0], [13.8, 331.0], [13.9, 332.0], [14.0, 333.0], [14.1, 335.0], [14.2, 335.0], [14.3, 336.0], [14.4, 338.0], [14.5, 339.0], [14.6, 339.0], [14.7, 340.0], [14.8, 342.0], [14.9, 343.0], [15.0, 344.0], [15.1, 346.0], [15.2, 347.0], [15.3, 348.0], [15.4, 349.0], [15.5, 351.0], [15.6, 353.0], [15.7, 355.0], [15.8, 356.0], [15.9, 357.0], [16.0, 360.0], [16.1, 363.0], [16.2, 364.0], [16.3, 364.0], [16.4, 369.0], [16.5, 371.0], [16.6, 372.0], [16.7, 373.0], [16.8, 375.0], [16.9, 377.0], [17.0, 377.0], [17.1, 379.0], [17.2, 381.0], [17.3, 382.0], [17.4, 384.0], [17.5, 385.0], [17.6, 386.0], [17.7, 387.0], [17.8, 388.0], [17.9, 390.0], [18.0, 391.0], [18.1, 392.0], [18.2, 394.0], [18.3, 394.0], [18.4, 395.0], [18.5, 397.0], [18.6, 398.0], [18.7, 398.0], [18.8, 400.0], [18.9, 400.0], [19.0, 401.0], [19.1, 402.0], [19.2, 403.0], [19.3, 404.0], [19.4, 405.0], [19.5, 406.0], [19.6, 407.0], [19.7, 407.0], [19.8, 408.0], [19.9, 409.0], [20.0, 410.0], [20.1, 411.0], [20.2, 412.0], [20.3, 413.0], [20.4, 414.0], [20.5, 415.0], [20.6, 417.0], [20.7, 418.0], [20.8, 419.0], [20.9, 420.0], [21.0, 421.0], [21.1, 423.0], [21.2, 424.0], [21.3, 425.0], [21.4, 426.0], [21.5, 426.0], [21.6, 427.0], [21.7, 428.0], [21.8, 429.0], [21.9, 430.0], [22.0, 430.0], [22.1, 431.0], [22.2, 432.0], [22.3, 433.0], [22.4, 434.0], [22.5, 435.0], [22.6, 436.0], [22.7, 436.0], [22.8, 437.0], [22.9, 438.0], [23.0, 439.0], [23.1, 440.0], [23.2, 442.0], [23.3, 443.0], [23.4, 443.0], [23.5, 444.0], [23.6, 445.0], [23.7, 446.0], [23.8, 447.0], [23.9, 448.0], [24.0, 449.0], [24.1, 450.0], [24.2, 450.0], [24.3, 451.0], [24.4, 452.0], [24.5, 453.0], [24.6, 454.0], [24.7, 454.0], [24.8, 455.0], [24.9, 456.0], [25.0, 457.0], [25.1, 458.0], [25.2, 459.0], [25.3, 460.0], [25.4, 462.0], [25.5, 462.0], [25.6, 463.0], [25.7, 464.0], [25.8, 465.0], [25.9, 466.0], [26.0, 467.0], [26.1, 467.0], [26.2, 468.0], [26.3, 469.0], [26.4, 471.0], [26.5, 471.0], [26.6, 472.0], [26.7, 473.0], [26.8, 474.0], [26.9, 475.0], [27.0, 476.0], [27.1, 477.0], [27.2, 477.0], [27.3, 478.0], [27.4, 479.0], [27.5, 480.0], [27.6, 480.0], [27.7, 481.0], [27.8, 482.0], [27.9, 482.0], [28.0, 483.0], [28.1, 484.0], [28.2, 485.0], [28.3, 486.0], [28.4, 486.0], [28.5, 487.0], [28.6, 488.0], [28.7, 489.0], [28.8, 490.0], [28.9, 490.0], [29.0, 491.0], [29.1, 492.0], [29.2, 494.0], [29.3, 494.0], [29.4, 495.0], [29.5, 496.0], [29.6, 497.0], [29.7, 498.0], [29.8, 500.0], [29.9, 501.0], [30.0, 502.0], [30.1, 503.0], [30.2, 505.0], [30.3, 506.0], [30.4, 506.0], [30.5, 507.0], [30.6, 508.0], [30.7, 509.0], [30.8, 510.0], [30.9, 511.0], [31.0, 512.0], [31.1, 512.0], [31.2, 512.0], [31.3, 514.0], [31.4, 515.0], [31.5, 516.0], [31.6, 516.0], [31.7, 517.0], [31.8, 518.0], [31.9, 519.0], [32.0, 521.0], [32.1, 522.0], [32.2, 522.0], [32.3, 523.0], [32.4, 524.0], [32.5, 525.0], [32.6, 526.0], [32.7, 527.0], [32.8, 528.0], [32.9, 529.0], [33.0, 530.0], [33.1, 532.0], [33.2, 533.0], [33.3, 534.0], [33.4, 534.0], [33.5, 535.0], [33.6, 536.0], [33.7, 537.0], [33.8, 537.0], [33.9, 538.0], [34.0, 539.0], [34.1, 540.0], [34.2, 541.0], [34.3, 541.0], [34.4, 542.0], [34.5, 543.0], [34.6, 544.0], [34.7, 546.0], [34.8, 547.0], [34.9, 548.0], [35.0, 548.0], [35.1, 549.0], [35.2, 550.0], [35.3, 551.0], [35.4, 552.0], [35.5, 552.0], [35.6, 553.0], [35.7, 554.0], [35.8, 556.0], [35.9, 556.0], [36.0, 557.0], [36.1, 558.0], [36.2, 559.0], [36.3, 559.0], [36.4, 561.0], [36.5, 562.0], [36.6, 563.0], [36.7, 564.0], [36.8, 565.0], [36.9, 565.0], [37.0, 566.0], [37.1, 567.0], [37.2, 568.0], [37.3, 569.0], [37.4, 571.0], [37.5, 572.0], [37.6, 574.0], [37.7, 575.0], [37.8, 576.0], [37.9, 578.0], [38.0, 579.0], [38.1, 580.0], [38.2, 582.0], [38.3, 584.0], [38.4, 586.0], [38.5, 587.0], [38.6, 587.0], [38.7, 588.0], [38.8, 588.0], [38.9, 589.0], [39.0, 591.0], [39.1, 591.0], [39.2, 592.0], [39.3, 593.0], [39.4, 594.0], [39.5, 595.0], [39.6, 596.0], [39.7, 597.0], [39.8, 598.0], [39.9, 600.0], [40.0, 601.0], [40.1, 602.0], [40.2, 603.0], [40.3, 604.0], [40.4, 605.0], [40.5, 606.0], [40.6, 607.0], [40.7, 608.0], [40.8, 608.0], [40.9, 608.0], [41.0, 610.0], [41.1, 612.0], [41.2, 612.0], [41.3, 613.0], [41.4, 614.0], [41.5, 615.0], [41.6, 617.0], [41.7, 617.0], [41.8, 617.0], [41.9, 618.0], [42.0, 619.0], [42.1, 619.0], [42.2, 621.0], [42.3, 622.0], [42.4, 622.0], [42.5, 623.0], [42.6, 624.0], [42.7, 626.0], [42.8, 628.0], [42.9, 629.0], [43.0, 630.0], [43.1, 631.0], [43.2, 632.0], [43.3, 635.0], [43.4, 636.0], [43.5, 637.0], [43.6, 639.0], [43.7, 640.0], [43.8, 641.0], [43.9, 641.0], [44.0, 643.0], [44.1, 644.0], [44.2, 645.0], [44.3, 646.0], [44.4, 647.0], [44.5, 648.0], [44.6, 649.0], [44.7, 650.0], [44.8, 651.0], [44.9, 653.0], [45.0, 654.0], [45.1, 656.0], [45.2, 657.0], [45.3, 659.0], [45.4, 660.0], [45.5, 662.0], [45.6, 663.0], [45.7, 665.0], [45.8, 668.0], [45.9, 669.0], [46.0, 671.0], [46.1, 672.0], [46.2, 674.0], [46.3, 674.0], [46.4, 675.0], [46.5, 676.0], [46.6, 678.0], [46.7, 680.0], [46.8, 682.0], [46.9, 684.0], [47.0, 686.0], [47.1, 687.0], [47.2, 688.0], [47.3, 689.0], [47.4, 693.0], [47.5, 694.0], [47.6, 694.0], [47.7, 696.0], [47.8, 696.0], [47.9, 697.0], [48.0, 698.0], [48.1, 699.0], [48.2, 701.0], [48.3, 702.0], [48.4, 702.0], [48.5, 705.0], [48.6, 706.0], [48.7, 707.0], [48.8, 709.0], [48.9, 710.0], [49.0, 712.0], [49.1, 713.0], [49.2, 715.0], [49.3, 716.0], [49.4, 719.0], [49.5, 719.0], [49.6, 720.0], [49.7, 722.0], [49.8, 723.0], [49.9, 724.0], [50.0, 725.0], [50.1, 729.0], [50.2, 731.0], [50.3, 732.0], [50.4, 733.0], [50.5, 734.0], [50.6, 737.0], [50.7, 739.0], [50.8, 740.0], [50.9, 741.0], [51.0, 742.0], [51.1, 744.0], [51.2, 745.0], [51.3, 747.0], [51.4, 748.0], [51.5, 748.0], [51.6, 752.0], [51.7, 755.0], [51.8, 756.0], [51.9, 759.0], [52.0, 760.0], [52.1, 762.0], [52.2, 764.0], [52.3, 765.0], [52.4, 766.0], [52.5, 770.0], [52.6, 771.0], [52.7, 775.0], [52.8, 776.0], [52.9, 778.0], [53.0, 780.0], [53.1, 781.0], [53.2, 783.0], [53.3, 785.0], [53.4, 787.0], [53.5, 790.0], [53.6, 791.0], [53.7, 794.0], [53.8, 796.0], [53.9, 799.0], [54.0, 800.0], [54.1, 802.0], [54.2, 803.0], [54.3, 806.0], [54.4, 809.0], [54.5, 810.0], [54.6, 811.0], [54.7, 813.0], [54.8, 816.0], [54.9, 817.0], [55.0, 819.0], [55.1, 822.0], [55.2, 825.0], [55.3, 827.0], [55.4, 829.0], [55.5, 830.0], [55.6, 832.0], [55.7, 834.0], [55.8, 839.0], [55.9, 841.0], [56.0, 843.0], [56.1, 844.0], [56.2, 844.0], [56.3, 846.0], [56.4, 849.0], [56.5, 851.0], [56.6, 854.0], [56.7, 854.0], [56.8, 858.0], [56.9, 859.0], [57.0, 860.0], [57.1, 862.0], [57.2, 863.0], [57.3, 866.0], [57.4, 867.0], [57.5, 868.0], [57.6, 869.0], [57.7, 872.0], [57.8, 873.0], [57.9, 874.0], [58.0, 875.0], [58.1, 877.0], [58.2, 878.0], [58.3, 879.0], [58.4, 881.0], [58.5, 882.0], [58.6, 883.0], [58.7, 884.0], [58.8, 885.0], [58.9, 886.0], [59.0, 889.0], [59.1, 889.0], [59.2, 891.0], [59.3, 892.0], [59.4, 895.0], [59.5, 898.0], [59.6, 899.0], [59.7, 902.0], [59.8, 904.0], [59.9, 906.0], [60.0, 907.0], [60.1, 910.0], [60.2, 911.0], [60.3, 914.0], [60.4, 916.0], [60.5, 919.0], [60.6, 923.0], [60.7, 924.0], [60.8, 927.0], [60.9, 928.0], [61.0, 931.0], [61.1, 933.0], [61.2, 936.0], [61.3, 938.0], [61.4, 939.0], [61.5, 941.0], [61.6, 943.0], [61.7, 944.0], [61.8, 947.0], [61.9, 950.0], [62.0, 951.0], [62.1, 953.0], [62.2, 956.0], [62.3, 957.0], [62.4, 959.0], [62.5, 960.0], [62.6, 961.0], [62.7, 963.0], [62.8, 965.0], [62.9, 966.0], [63.0, 966.0], [63.1, 968.0], [63.2, 969.0], [63.3, 971.0], [63.4, 973.0], [63.5, 974.0], [63.6, 976.0], [63.7, 977.0], [63.8, 979.0], [63.9, 981.0], [64.0, 984.0], [64.1, 987.0], [64.2, 988.0], [64.3, 989.0], [64.4, 991.0], [64.5, 992.0], [64.6, 993.0], [64.7, 995.0], [64.8, 996.0], [64.9, 997.0], [65.0, 998.0], [65.1, 1000.0], [65.2, 1002.0], [65.3, 1004.0], [65.4, 1006.0], [65.5, 1010.0], [65.6, 1013.0], [65.7, 1014.0], [65.8, 1017.0], [65.9, 1018.0], [66.0, 1020.0], [66.1, 1022.0], [66.2, 1024.0], [66.3, 1026.0], [66.4, 1029.0], [66.5, 1032.0], [66.6, 1033.0], [66.7, 1035.0], [66.8, 1037.0], [66.9, 1040.0], [67.0, 1043.0], [67.1, 1045.0], [67.2, 1047.0], [67.3, 1049.0], [67.4, 1052.0], [67.5, 1053.0], [67.6, 1053.0], [67.7, 1054.0], [67.8, 1055.0], [67.9, 1058.0], [68.0, 1059.0], [68.1, 1060.0], [68.2, 1064.0], [68.3, 1065.0], [68.4, 1066.0], [68.5, 1068.0], [68.6, 1069.0], [68.7, 1070.0], [68.8, 1072.0], [68.9, 1074.0], [69.0, 1076.0], [69.1, 1077.0], [69.2, 1081.0], [69.3, 1082.0], [69.4, 1083.0], [69.5, 1085.0], [69.6, 1087.0], [69.7, 1088.0], [69.8, 1089.0], [69.9, 1091.0], [70.0, 1094.0], [70.1, 1096.0], [70.2, 1097.0], [70.3, 1100.0], [70.4, 1102.0], [70.5, 1104.0], [70.6, 1107.0], [70.7, 1109.0], [70.8, 1111.0], [70.9, 1113.0], [71.0, 1114.0], [71.1, 1116.0], [71.2, 1118.0], [71.3, 1120.0], [71.4, 1121.0], [71.5, 1123.0], [71.6, 1126.0], [71.7, 1127.0], [71.8, 1128.0], [71.9, 1129.0], [72.0, 1131.0], [72.1, 1133.0], [72.2, 1135.0], [72.3, 1136.0], [72.4, 1138.0], [72.5, 1141.0], [72.6, 1143.0], [72.7, 1144.0], [72.8, 1148.0], [72.9, 1150.0], [73.0, 1151.0], [73.1, 1154.0], [73.2, 1155.0], [73.3, 1157.0], [73.4, 1157.0], [73.5, 1158.0], [73.6, 1160.0], [73.7, 1161.0], [73.8, 1164.0], [73.9, 1165.0], [74.0, 1167.0], [74.1, 1169.0], [74.2, 1171.0], [74.3, 1173.0], [74.4, 1174.0], [74.5, 1175.0], [74.6, 1177.0], [74.7, 1179.0], [74.8, 1184.0], [74.9, 1186.0], [75.0, 1188.0], [75.1, 1190.0], [75.2, 1191.0], [75.3, 1193.0], [75.4, 1196.0], [75.5, 1197.0], [75.6, 1199.0], [75.7, 1202.0], [75.8, 1205.0], [75.9, 1207.0], [76.0, 1209.0], [76.1, 1211.0], [76.2, 1215.0], [76.3, 1217.0], [76.4, 1220.0], [76.5, 1221.0], [76.6, 1225.0], [76.7, 1227.0], [76.8, 1233.0], [76.9, 1238.0], [77.0, 1241.0], [77.1, 1242.0], [77.2, 1244.0], [77.3, 1246.0], [77.4, 1249.0], [77.5, 1252.0], [77.6, 1254.0], [77.7, 1256.0], [77.8, 1258.0], [77.9, 1262.0], [78.0, 1263.0], [78.1, 1264.0], [78.2, 1266.0], [78.3, 1269.0], [78.4, 1275.0], [78.5, 1278.0], [78.6, 1280.0], [78.7, 1284.0], [78.8, 1286.0], [78.9, 1288.0], [79.0, 1292.0], [79.1, 1294.0], [79.2, 1302.0], [79.3, 1303.0], [79.4, 1309.0], [79.5, 1311.0], [79.6, 1312.0], [79.7, 1314.0], [79.8, 1315.0], [79.9, 1320.0], [80.0, 1323.0], [80.1, 1326.0], [80.2, 1328.0], [80.3, 1331.0], [80.4, 1332.0], [80.5, 1335.0], [80.6, 1341.0], [80.7, 1343.0], [80.8, 1347.0], [80.9, 1350.0], [81.0, 1352.0], [81.1, 1354.0], [81.2, 1357.0], [81.3, 1359.0], [81.4, 1362.0], [81.5, 1364.0], [81.6, 1367.0], [81.7, 1369.0], [81.8, 1372.0], [81.9, 1373.0], [82.0, 1375.0], [82.1, 1376.0], [82.2, 1380.0], [82.3, 1383.0], [82.4, 1384.0], [82.5, 1386.0], [82.6, 1389.0], [82.7, 1392.0], [82.8, 1394.0], [82.9, 1396.0], [83.0, 1398.0], [83.1, 1401.0], [83.2, 1403.0], [83.3, 1406.0], [83.4, 1406.0], [83.5, 1407.0], [83.6, 1410.0], [83.7, 1412.0], [83.8, 1416.0], [83.9, 1419.0], [84.0, 1422.0], [84.1, 1423.0], [84.2, 1427.0], [84.3, 1429.0], [84.4, 1433.0], [84.5, 1435.0], [84.6, 1439.0], [84.7, 1442.0], [84.8, 1444.0], [84.9, 1446.0], [85.0, 1449.0], [85.1, 1452.0], [85.2, 1455.0], [85.3, 1457.0], [85.4, 1460.0], [85.5, 1463.0], [85.6, 1466.0], [85.7, 1468.0], [85.8, 1470.0], [85.9, 1474.0], [86.0, 1477.0], [86.1, 1480.0], [86.2, 1482.0], [86.3, 1485.0], [86.4, 1489.0], [86.5, 1491.0], [86.6, 1494.0], [86.7, 1497.0], [86.8, 1501.0], [86.9, 1507.0], [87.0, 1511.0], [87.1, 1512.0], [87.2, 1515.0], [87.3, 1518.0], [87.4, 1521.0], [87.5, 1524.0], [87.6, 1528.0], [87.7, 1530.0], [87.8, 1532.0], [87.9, 1534.0], [88.0, 1537.0], [88.1, 1542.0], [88.2, 1545.0], [88.3, 1549.0], [88.4, 1555.0], [88.5, 1560.0], [88.6, 1566.0], [88.7, 1570.0], [88.8, 1571.0], [88.9, 1576.0], [89.0, 1584.0], [89.1, 1590.0], [89.2, 1596.0], [89.3, 1605.0], [89.4, 1612.0], [89.5, 1620.0], [89.6, 1626.0], [89.7, 1632.0], [89.8, 1638.0], [89.9, 1645.0], [90.0, 1655.0], [90.1, 1662.0], [90.2, 1671.0], [90.3, 1677.0], [90.4, 1681.0], [90.5, 1686.0], [90.6, 1691.0], [90.7, 1697.0], [90.8, 1702.0], [90.9, 1708.0], [91.0, 1713.0], [91.1, 1721.0], [91.2, 1729.0], [91.3, 1737.0], [91.4, 1742.0], [91.5, 1750.0], [91.6, 1757.0], [91.7, 1764.0], [91.8, 1769.0], [91.9, 1775.0], [92.0, 1780.0], [92.1, 1788.0], [92.2, 1800.0], [92.3, 1810.0], [92.4, 1816.0], [92.5, 1824.0], [92.6, 1826.0], [92.7, 1835.0], [92.8, 1841.0], [92.9, 1860.0], [93.0, 1866.0], [93.1, 1869.0], [93.2, 1878.0], [93.3, 1888.0], [93.4, 1894.0], [93.5, 1905.0], [93.6, 1917.0], [93.7, 1924.0], [93.8, 1931.0], [93.9, 1937.0], [94.0, 1946.0], [94.1, 1960.0], [94.2, 1968.0], [94.3, 1976.0], [94.4, 1985.0], [94.5, 1992.0], [94.6, 1995.0], [94.7, 2009.0], [94.8, 2020.0], [94.9, 2035.0], [95.0, 2055.0], [95.1, 2065.0], [95.2, 2072.0], [95.3, 2086.0], [95.4, 2094.0], [95.5, 2109.0], [95.6, 2115.0], [95.7, 2125.0], [95.8, 2149.0], [95.9, 2158.0], [96.0, 2166.0], [96.1, 2183.0], [96.2, 2189.0], [96.3, 2200.0], [96.4, 2209.0], [96.5, 2217.0], [96.6, 2232.0], [96.7, 2245.0], [96.8, 2256.0], [96.9, 2274.0], [97.0, 2284.0], [97.1, 2300.0], [97.2, 2314.0], [97.3, 2318.0], [97.4, 2332.0], [97.5, 2347.0], [97.6, 2380.0], [97.7, 2415.0], [97.8, 2443.0], [97.9, 2482.0], [98.0, 2490.0], [98.1, 2521.0], [98.2, 2548.0], [98.3, 2584.0], [98.4, 2598.0], [98.5, 2623.0], [98.6, 2645.0], [98.7, 2672.0], [98.8, 2767.0], [98.9, 2801.0], [99.0, 3021.0], [99.1, 3162.0], [99.2, 3292.0], [99.3, 3455.0], [99.4, 3591.0], [99.5, 3737.0], [99.6, 3895.0], [99.7, 4304.0], [99.8, 4972.0], [99.9, 5568.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 571.0, "series": [{"data": [[600.0, 429.0], [700.0, 303.0], [800.0, 295.0], [900.0, 281.0], [1000.0, 271.0], [1100.0, 276.0], [1200.0, 185.0], [1300.0, 202.0], [1400.0, 192.0], [1500.0, 127.0], [1600.0, 79.0], [1700.0, 76.0], [1800.0, 65.0], [1900.0, 61.0], [2000.0, 42.0], [2100.0, 44.0], [2300.0, 29.0], [2200.0, 42.0], [2400.0, 19.0], [2500.0, 20.0], [2600.0, 17.0], [2800.0, 3.0], [2700.0, 7.0], [2900.0, 3.0], [3000.0, 4.0], [3100.0, 5.0], [3300.0, 1.0], [3200.0, 4.0], [3400.0, 6.0], [3500.0, 2.0], [3700.0, 3.0], [3600.0, 5.0], [3800.0, 3.0], [3900.0, 1.0], [4200.0, 1.0], [4300.0, 1.0], [4100.0, 2.0], [4400.0, 1.0], [4500.0, 1.0], [4700.0, 1.0], [4900.0, 3.0], [5000.0, 1.0], [5300.0, 1.0], [5500.0, 1.0], [5400.0, 1.0], [5800.0, 2.0], [6000.0, 2.0], [5900.0, 1.0], [100.0, 45.0], [200.0, 527.0], [300.0, 402.0], [400.0, 571.0], [500.0, 524.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 686.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2955.0, "series": [{"data": [[0.0, 1549.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2955.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 686.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.78, "minX": 1.6042272E12, "maxY": 10.0, "series": [{"data": [[1.6042272E12, 10.0], [1.60422768E12, 9.78], [1.60422738E12, 10.0], [1.60422756E12, 10.0], [1.60422726E12, 10.0], [1.60422744E12, 10.0], [1.60422762E12, 10.0], [1.60422732E12, 10.0], [1.6042275E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422768E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 684.0, "minX": 1.0, "maxY": 2486.0, "series": [{"data": [[8.0, 1095.0], [4.0, 684.0], [1.0, 2486.0], [9.0, 1126.0], [10.0, 897.9177764910248], [5.0, 1073.0], [6.0, 729.0], [3.0, 1003.5], [7.0, 1905.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996146, 898.5003853564547]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1501.95, "minX": 1.6042272E12, "maxY": 3587202.5833333335, "series": [{"data": [[1.6042272E12, 1430682.5], [1.60422768E12, 929834.1333333333], [1.60422738E12, 3353635.3333333335], [1.60422756E12, 3553292.0833333335], [1.60422726E12, 2478148.6333333333], [1.60422744E12, 3079332.683333333], [1.60422762E12, 3087973.25], [1.60422732E12, 3587202.5833333335], [1.6042275E12, 2472304.3833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6042272E12, 1592.7666666666667], [1.60422768E12, 1501.95], [1.60422738E12, 5311.066666666667], [1.60422756E12, 5270.45], [1.60422726E12, 5254.616666666667], [1.60422744E12, 4217.816666666667], [1.60422762E12, 5405.8], [1.60422732E12, 5130.833333333333], [1.6042275E12, 4892.033333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422768E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 824.7192254495164, "minX": 1.6042272E12, "maxY": 1155.9266055045866, "series": [{"data": [[1.6042272E12, 1155.9266055045866], [1.60422768E12, 1088.6800000000005], [1.60422738E12, 851.1271428571428], [1.60422756E12, 849.8470254957504], [1.60422726E12, 824.7192254495164], [1.60422744E12, 1049.8254799301928], [1.60422762E12, 841.3778089887643], [1.60422732E12, 881.1924198250731], [1.6042275E12, 887.3913690476182]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422768E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 823.1230982019358, "minX": 1.6042272E12, "maxY": 1153.1513761467893, "series": [{"data": [[1.6042272E12, 1153.1513761467893], [1.60422768E12, 1086.165], [1.60422738E12, 848.9257142857145], [1.60422756E12, 847.6104815864009], [1.60422726E12, 823.1230982019358], [1.60422744E12, 1047.3839441535788], [1.60422762E12, 839.619382022472], [1.60422732E12, 878.8134110787175], [1.6042275E12, 885.927083333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422768E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009999999999999997, "minX": 1.6042272E12, "maxY": 0.40366972477064245, "series": [{"data": [[1.6042272E12, 0.40366972477064245], [1.60422768E12, 0.009999999999999997], [1.60422738E12, 0.0157142857142857], [1.60422756E12, 0.014164305949008487], [1.60422726E12, 0.02351313969571232], [1.60422744E12, 0.019197207678883048], [1.60422762E12, 0.011235955056179778], [1.60422732E12, 0.016034985422740507], [1.6042275E12, 0.013392857142857128]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422768E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 183.0, "minX": 1.6042272E12, "maxY": 6051.0, "series": [{"data": [[1.6042272E12, 4949.0], [1.60422768E12, 3983.0], [1.60422738E12, 5568.0], [1.60422756E12, 3021.0], [1.60422726E12, 5342.0], [1.60422744E12, 6031.0], [1.60422762E12, 3490.0], [1.60422732E12, 3632.0], [1.6042275E12, 6051.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6042272E12, 197.73899953007697], [1.60422768E12, 222.51699937701227], [1.60422738E12, 195.30899983286858], [1.60422756E12, 195.36299983143806], [1.60422726E12, 202.51599982738495], [1.60422744E12, 207.4979995894432], [1.60422762E12, 201.8339996600151], [1.60422732E12, 198.0], [1.6042275E12, 207.1709995186329]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6042272E12, 199.34480016708375], [1.60422768E12, 224.86870024919511], [1.60422738E12, 195.93990006685257], [1.60422756E12, 195.99930006742477], [1.60422726E12, 203.0], [1.60422744E12, 209.0478001642227], [1.60422762E12, 203.05870006799697], [1.60422732E12, 198.0], [1.6042275E12, 208.98810019254685]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6042272E12, 198.64399979114532], [1.60422768E12, 223.82349968850613], [1.60422738E12, 195.6594999164343], [1.60422756E12, 195.71649991571903], [1.60422726E12, 202.87799991369246], [1.60422744E12, 208.3589997947216], [1.60422762E12, 202.54699983000756], [1.60422732E12, 198.0], [1.6042275E12, 208.18049975931643]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6042272E12, 189.0], [1.60422768E12, 212.0], [1.60422738E12, 186.0], [1.60422756E12, 183.0], [1.60422726E12, 190.0], [1.60422744E12, 200.0], [1.60422762E12, 192.0], [1.60422732E12, 191.0], [1.6042275E12, 192.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6042272E12, 881.5], [1.60422768E12, 988.0], [1.60422738E12, 707.5], [1.60422756E12, 657.0], [1.60422726E12, 694.0], [1.60422744E12, 906.0], [1.60422762E12, 648.0], [1.60422732E12, 659.0], [1.6042275E12, 742.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422768E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 418.0, "minX": 1.0, "maxY": 2486.0, "series": [{"data": [[2.0, 1071.0], [3.0, 1691.0], [4.0, 1533.5], [5.0, 1396.0], [6.0, 1095.0], [7.0, 1171.0], [8.0, 1013.0], [9.0, 989.0], [10.0, 914.0], [11.0, 816.0], [12.0, 764.0], [13.0, 695.0], [14.0, 657.5], [15.0, 641.0], [16.0, 659.0], [1.0, 2486.0], [17.0, 519.5], [18.0, 515.5], [19.0, 477.0], [20.0, 466.5], [21.0, 448.5], [22.0, 422.5], [23.0, 426.0], [24.0, 420.0], [25.0, 420.0], [27.0, 418.0], [28.0, 426.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 418.0, "minX": 1.0, "maxY": 2468.0, "series": [{"data": [[2.0, 1069.0], [3.0, 1689.0], [4.0, 1533.0], [5.0, 1391.5], [6.0, 1093.5], [7.0, 1166.0], [8.0, 1012.0], [9.0, 987.0], [10.0, 909.5], [11.0, 814.5], [12.0, 763.5], [13.0, 693.0], [14.0, 656.0], [15.0, 641.0], [16.0, 658.0], [1.0, 2468.0], [17.0, 519.0], [18.0, 515.5], [19.0, 476.0], [20.0, 466.5], [21.0, 448.0], [22.0, 422.5], [23.0, 426.0], [24.0, 419.5], [25.0, 420.0], [27.0, 418.0], [28.0, 426.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.1666666666666665, "minX": 1.6042272E12, "maxY": 12.05, "series": [{"data": [[1.6042272E12, 3.8], [1.60422768E12, 3.1666666666666665], [1.60422738E12, 11.666666666666666], [1.60422756E12, 11.766666666666667], [1.60422726E12, 12.05], [1.60422744E12, 9.55], [1.60422762E12, 11.866666666666667], [1.60422732E12, 11.433333333333334], [1.6042275E12, 11.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422768E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.6042272E12, "maxY": 12.05, "series": [{"data": [[1.6042272E12, 3.6333333333333333], [1.60422768E12, 3.3333333333333335], [1.60422738E12, 11.666666666666666], [1.60422756E12, 11.766666666666667], [1.60422726E12, 12.05], [1.60422744E12, 9.55], [1.60422762E12, 11.866666666666667], [1.60422732E12, 11.433333333333334], [1.6042275E12, 11.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422768E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.6042272E12, "maxY": 12.05, "series": [{"data": [[1.6042272E12, 3.6333333333333333], [1.60422768E12, 3.3333333333333335], [1.60422738E12, 11.666666666666666], [1.60422756E12, 11.766666666666667], [1.60422726E12, 12.05], [1.60422744E12, 9.55], [1.60422762E12, 11.866666666666667], [1.60422732E12, 11.433333333333334], [1.6042275E12, 11.2]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422768E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.6042272E12, "maxY": 12.05, "series": [{"data": [[1.6042272E12, 3.6333333333333333], [1.60422768E12, 3.3333333333333335], [1.60422738E12, 11.666666666666666], [1.60422756E12, 11.766666666666667], [1.60422726E12, 12.05], [1.60422744E12, 9.55], [1.60422762E12, 11.866666666666667], [1.60422732E12, 11.433333333333334], [1.6042275E12, 11.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422768E12, "title": "Total Transactions Per Second"}},
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

