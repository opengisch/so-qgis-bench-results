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
        data: {"result": {"minY": 188.0, "minX": 0.0, "maxY": 5940.0, "series": [{"data": [[0.0, 188.0], [0.1, 195.0], [0.2, 196.0], [0.3, 197.0], [0.4, 199.0], [0.5, 200.0], [0.6, 201.0], [0.7, 202.0], [0.8, 203.0], [0.9, 204.0], [1.0, 205.0], [1.1, 206.0], [1.2, 206.0], [1.3, 207.0], [1.4, 207.0], [1.5, 208.0], [1.6, 209.0], [1.7, 209.0], [1.8, 210.0], [1.9, 212.0], [2.0, 212.0], [2.1, 213.0], [2.2, 215.0], [2.3, 216.0], [2.4, 218.0], [2.5, 219.0], [2.6, 220.0], [2.7, 220.0], [2.8, 221.0], [2.9, 222.0], [3.0, 222.0], [3.1, 223.0], [3.2, 224.0], [3.3, 225.0], [3.4, 225.0], [3.5, 225.0], [3.6, 226.0], [3.7, 227.0], [3.8, 228.0], [3.9, 229.0], [4.0, 230.0], [4.1, 230.0], [4.2, 230.0], [4.3, 232.0], [4.4, 233.0], [4.5, 233.0], [4.6, 233.0], [4.7, 235.0], [4.8, 236.0], [4.9, 236.0], [5.0, 238.0], [5.1, 238.0], [5.2, 239.0], [5.3, 240.0], [5.4, 241.0], [5.5, 242.0], [5.6, 243.0], [5.7, 246.0], [5.8, 247.0], [5.9, 248.0], [6.0, 249.0], [6.1, 250.0], [6.2, 251.0], [6.3, 252.0], [6.4, 255.0], [6.5, 256.0], [6.6, 257.0], [6.7, 258.0], [6.8, 258.0], [6.9, 260.0], [7.0, 262.0], [7.1, 265.0], [7.2, 266.0], [7.3, 268.0], [7.4, 270.0], [7.5, 271.0], [7.6, 271.0], [7.7, 272.0], [7.8, 273.0], [7.9, 275.0], [8.0, 276.0], [8.1, 276.0], [8.2, 277.0], [8.3, 277.0], [8.4, 278.0], [8.5, 279.0], [8.6, 280.0], [8.7, 280.0], [8.8, 281.0], [8.9, 282.0], [9.0, 283.0], [9.1, 284.0], [9.2, 285.0], [9.3, 286.0], [9.4, 286.0], [9.5, 288.0], [9.6, 289.0], [9.7, 290.0], [9.8, 290.0], [9.9, 291.0], [10.0, 292.0], [10.1, 292.0], [10.2, 293.0], [10.3, 294.0], [10.4, 294.0], [10.5, 295.0], [10.6, 296.0], [10.7, 297.0], [10.8, 298.0], [10.9, 299.0], [11.0, 300.0], [11.1, 301.0], [11.2, 303.0], [11.3, 304.0], [11.4, 305.0], [11.5, 306.0], [11.6, 308.0], [11.7, 308.0], [11.8, 309.0], [11.9, 311.0], [12.0, 311.0], [12.1, 312.0], [12.2, 313.0], [12.3, 315.0], [12.4, 316.0], [12.5, 317.0], [12.6, 317.0], [12.7, 319.0], [12.8, 320.0], [12.9, 321.0], [13.0, 322.0], [13.1, 322.0], [13.2, 324.0], [13.3, 325.0], [13.4, 326.0], [13.5, 326.0], [13.6, 327.0], [13.7, 328.0], [13.8, 329.0], [13.9, 330.0], [14.0, 331.0], [14.1, 333.0], [14.2, 335.0], [14.3, 336.0], [14.4, 337.0], [14.5, 338.0], [14.6, 339.0], [14.7, 341.0], [14.8, 341.0], [14.9, 342.0], [15.0, 344.0], [15.1, 346.0], [15.2, 347.0], [15.3, 349.0], [15.4, 350.0], [15.5, 351.0], [15.6, 351.0], [15.7, 353.0], [15.8, 355.0], [15.9, 356.0], [16.0, 358.0], [16.1, 359.0], [16.2, 361.0], [16.3, 363.0], [16.4, 367.0], [16.5, 370.0], [16.6, 373.0], [16.7, 375.0], [16.8, 375.0], [16.9, 378.0], [17.0, 380.0], [17.1, 382.0], [17.2, 383.0], [17.3, 385.0], [17.4, 387.0], [17.5, 388.0], [17.6, 389.0], [17.7, 390.0], [17.8, 392.0], [17.9, 394.0], [18.0, 394.0], [18.1, 395.0], [18.2, 395.0], [18.3, 396.0], [18.4, 397.0], [18.5, 398.0], [18.6, 398.0], [18.7, 399.0], [18.8, 400.0], [18.9, 401.0], [19.0, 401.0], [19.1, 402.0], [19.2, 404.0], [19.3, 404.0], [19.4, 405.0], [19.5, 406.0], [19.6, 407.0], [19.7, 408.0], [19.8, 409.0], [19.9, 410.0], [20.0, 410.0], [20.1, 411.0], [20.2, 412.0], [20.3, 413.0], [20.4, 413.0], [20.5, 414.0], [20.6, 414.0], [20.7, 415.0], [20.8, 416.0], [20.9, 417.0], [21.0, 418.0], [21.1, 419.0], [21.2, 420.0], [21.3, 421.0], [21.4, 422.0], [21.5, 422.0], [21.6, 424.0], [21.7, 424.0], [21.8, 425.0], [21.9, 425.0], [22.0, 426.0], [22.1, 427.0], [22.2, 429.0], [22.3, 430.0], [22.4, 432.0], [22.5, 433.0], [22.6, 434.0], [22.7, 435.0], [22.8, 436.0], [22.9, 436.0], [23.0, 437.0], [23.1, 438.0], [23.2, 439.0], [23.3, 440.0], [23.4, 440.0], [23.5, 441.0], [23.6, 442.0], [23.7, 443.0], [23.8, 444.0], [23.9, 445.0], [24.0, 445.0], [24.1, 446.0], [24.2, 446.0], [24.3, 447.0], [24.4, 448.0], [24.5, 448.0], [24.6, 449.0], [24.7, 450.0], [24.8, 453.0], [24.9, 454.0], [25.0, 454.0], [25.1, 455.0], [25.2, 456.0], [25.3, 456.0], [25.4, 457.0], [25.5, 458.0], [25.6, 459.0], [25.7, 459.0], [25.8, 460.0], [25.9, 461.0], [26.0, 462.0], [26.1, 463.0], [26.2, 464.0], [26.3, 465.0], [26.4, 466.0], [26.5, 467.0], [26.6, 468.0], [26.7, 469.0], [26.8, 470.0], [26.9, 470.0], [27.0, 471.0], [27.1, 472.0], [27.2, 473.0], [27.3, 473.0], [27.4, 474.0], [27.5, 475.0], [27.6, 476.0], [27.7, 476.0], [27.8, 478.0], [27.9, 479.0], [28.0, 481.0], [28.1, 482.0], [28.2, 483.0], [28.3, 484.0], [28.4, 484.0], [28.5, 486.0], [28.6, 487.0], [28.7, 488.0], [28.8, 488.0], [28.9, 489.0], [29.0, 491.0], [29.1, 491.0], [29.2, 492.0], [29.3, 493.0], [29.4, 493.0], [29.5, 495.0], [29.6, 495.0], [29.7, 497.0], [29.8, 498.0], [29.9, 500.0], [30.0, 501.0], [30.1, 504.0], [30.2, 505.0], [30.3, 507.0], [30.4, 509.0], [30.5, 510.0], [30.6, 512.0], [30.7, 512.0], [30.8, 513.0], [30.9, 514.0], [31.0, 515.0], [31.1, 516.0], [31.2, 517.0], [31.3, 517.0], [31.4, 518.0], [31.5, 519.0], [31.6, 521.0], [31.7, 522.0], [31.8, 523.0], [31.9, 524.0], [32.0, 526.0], [32.1, 527.0], [32.2, 528.0], [32.3, 529.0], [32.4, 530.0], [32.5, 532.0], [32.6, 532.0], [32.7, 533.0], [32.8, 534.0], [32.9, 535.0], [33.0, 536.0], [33.1, 537.0], [33.2, 539.0], [33.3, 539.0], [33.4, 541.0], [33.5, 541.0], [33.6, 543.0], [33.7, 544.0], [33.8, 545.0], [33.9, 546.0], [34.0, 547.0], [34.1, 548.0], [34.2, 548.0], [34.3, 549.0], [34.4, 551.0], [34.5, 552.0], [34.6, 552.0], [34.7, 553.0], [34.8, 554.0], [34.9, 555.0], [35.0, 555.0], [35.1, 556.0], [35.2, 556.0], [35.3, 557.0], [35.4, 558.0], [35.5, 559.0], [35.6, 559.0], [35.7, 560.0], [35.8, 560.0], [35.9, 562.0], [36.0, 562.0], [36.1, 563.0], [36.2, 564.0], [36.3, 565.0], [36.4, 566.0], [36.5, 567.0], [36.6, 568.0], [36.7, 568.0], [36.8, 570.0], [36.9, 570.0], [37.0, 572.0], [37.1, 572.0], [37.2, 573.0], [37.3, 573.0], [37.4, 576.0], [37.5, 576.0], [37.6, 577.0], [37.7, 578.0], [37.8, 579.0], [37.9, 580.0], [38.0, 581.0], [38.1, 583.0], [38.2, 584.0], [38.3, 585.0], [38.4, 585.0], [38.5, 587.0], [38.6, 588.0], [38.7, 588.0], [38.8, 588.0], [38.9, 590.0], [39.0, 592.0], [39.1, 593.0], [39.2, 593.0], [39.3, 594.0], [39.4, 595.0], [39.5, 597.0], [39.6, 597.0], [39.7, 598.0], [39.8, 599.0], [39.9, 600.0], [40.0, 601.0], [40.1, 603.0], [40.2, 604.0], [40.3, 605.0], [40.4, 606.0], [40.5, 607.0], [40.6, 608.0], [40.7, 608.0], [40.8, 609.0], [40.9, 610.0], [41.0, 611.0], [41.1, 612.0], [41.2, 614.0], [41.3, 614.0], [41.4, 615.0], [41.5, 616.0], [41.6, 617.0], [41.7, 618.0], [41.8, 619.0], [41.9, 620.0], [42.0, 621.0], [42.1, 621.0], [42.2, 622.0], [42.3, 623.0], [42.4, 624.0], [42.5, 625.0], [42.6, 627.0], [42.7, 628.0], [42.8, 630.0], [42.9, 633.0], [43.0, 633.0], [43.1, 635.0], [43.2, 636.0], [43.3, 637.0], [43.4, 637.0], [43.5, 638.0], [43.6, 640.0], [43.7, 641.0], [43.8, 642.0], [43.9, 642.0], [44.0, 646.0], [44.1, 648.0], [44.2, 650.0], [44.3, 650.0], [44.4, 652.0], [44.5, 654.0], [44.6, 656.0], [44.7, 656.0], [44.8, 658.0], [44.9, 660.0], [45.0, 660.0], [45.1, 661.0], [45.2, 663.0], [45.3, 664.0], [45.4, 665.0], [45.5, 667.0], [45.6, 667.0], [45.7, 668.0], [45.8, 670.0], [45.9, 671.0], [46.0, 672.0], [46.1, 674.0], [46.2, 675.0], [46.3, 675.0], [46.4, 677.0], [46.5, 679.0], [46.6, 680.0], [46.7, 683.0], [46.8, 685.0], [46.9, 686.0], [47.0, 688.0], [47.1, 688.0], [47.2, 690.0], [47.3, 691.0], [47.4, 695.0], [47.5, 697.0], [47.6, 697.0], [47.7, 698.0], [47.8, 700.0], [47.9, 702.0], [48.0, 703.0], [48.1, 704.0], [48.2, 705.0], [48.3, 706.0], [48.4, 707.0], [48.5, 709.0], [48.6, 709.0], [48.7, 711.0], [48.8, 712.0], [48.9, 713.0], [49.0, 714.0], [49.1, 715.0], [49.2, 717.0], [49.3, 718.0], [49.4, 721.0], [49.5, 724.0], [49.6, 726.0], [49.7, 728.0], [49.8, 729.0], [49.9, 730.0], [50.0, 731.0], [50.1, 732.0], [50.2, 734.0], [50.3, 736.0], [50.4, 737.0], [50.5, 738.0], [50.6, 740.0], [50.7, 742.0], [50.8, 743.0], [50.9, 744.0], [51.0, 746.0], [51.1, 748.0], [51.2, 750.0], [51.3, 750.0], [51.4, 751.0], [51.5, 754.0], [51.6, 757.0], [51.7, 759.0], [51.8, 761.0], [51.9, 762.0], [52.0, 764.0], [52.1, 766.0], [52.2, 767.0], [52.3, 768.0], [52.4, 769.0], [52.5, 772.0], [52.6, 774.0], [52.7, 776.0], [52.8, 777.0], [52.9, 778.0], [53.0, 779.0], [53.1, 781.0], [53.2, 782.0], [53.3, 784.0], [53.4, 787.0], [53.5, 788.0], [53.6, 790.0], [53.7, 791.0], [53.8, 793.0], [53.9, 794.0], [54.0, 796.0], [54.1, 796.0], [54.2, 798.0], [54.3, 799.0], [54.4, 800.0], [54.5, 801.0], [54.6, 802.0], [54.7, 803.0], [54.8, 805.0], [54.9, 806.0], [55.0, 808.0], [55.1, 809.0], [55.2, 810.0], [55.3, 813.0], [55.4, 816.0], [55.5, 818.0], [55.6, 819.0], [55.7, 822.0], [55.8, 823.0], [55.9, 824.0], [56.0, 826.0], [56.1, 828.0], [56.2, 829.0], [56.3, 831.0], [56.4, 834.0], [56.5, 837.0], [56.6, 839.0], [56.7, 839.0], [56.8, 841.0], [56.9, 843.0], [57.0, 844.0], [57.1, 845.0], [57.2, 847.0], [57.3, 849.0], [57.4, 851.0], [57.5, 852.0], [57.6, 855.0], [57.7, 858.0], [57.8, 859.0], [57.9, 861.0], [58.0, 863.0], [58.1, 865.0], [58.2, 867.0], [58.3, 869.0], [58.4, 872.0], [58.5, 874.0], [58.6, 875.0], [58.7, 877.0], [58.8, 880.0], [58.9, 881.0], [59.0, 881.0], [59.1, 883.0], [59.2, 885.0], [59.3, 886.0], [59.4, 887.0], [59.5, 889.0], [59.6, 891.0], [59.7, 892.0], [59.8, 894.0], [59.9, 895.0], [60.0, 896.0], [60.1, 897.0], [60.2, 898.0], [60.3, 899.0], [60.4, 900.0], [60.5, 903.0], [60.6, 905.0], [60.7, 908.0], [60.8, 909.0], [60.9, 910.0], [61.0, 911.0], [61.1, 912.0], [61.2, 914.0], [61.3, 916.0], [61.4, 917.0], [61.5, 919.0], [61.6, 920.0], [61.7, 923.0], [61.8, 925.0], [61.9, 927.0], [62.0, 929.0], [62.1, 931.0], [62.2, 935.0], [62.3, 938.0], [62.4, 942.0], [62.5, 944.0], [62.6, 948.0], [62.7, 950.0], [62.8, 953.0], [62.9, 956.0], [63.0, 957.0], [63.1, 959.0], [63.2, 961.0], [63.3, 963.0], [63.4, 964.0], [63.5, 965.0], [63.6, 966.0], [63.7, 967.0], [63.8, 969.0], [63.9, 971.0], [64.0, 972.0], [64.1, 973.0], [64.2, 974.0], [64.3, 976.0], [64.4, 977.0], [64.5, 978.0], [64.6, 979.0], [64.7, 982.0], [64.8, 984.0], [64.9, 984.0], [65.0, 986.0], [65.1, 988.0], [65.2, 989.0], [65.3, 992.0], [65.4, 992.0], [65.5, 995.0], [65.6, 996.0], [65.7, 998.0], [65.8, 999.0], [65.9, 1000.0], [66.0, 1001.0], [66.1, 1004.0], [66.2, 1006.0], [66.3, 1007.0], [66.4, 1009.0], [66.5, 1011.0], [66.6, 1012.0], [66.7, 1013.0], [66.8, 1015.0], [66.9, 1018.0], [67.0, 1021.0], [67.1, 1022.0], [67.2, 1024.0], [67.3, 1026.0], [67.4, 1027.0], [67.5, 1029.0], [67.6, 1030.0], [67.7, 1032.0], [67.8, 1033.0], [67.9, 1035.0], [68.0, 1036.0], [68.1, 1038.0], [68.2, 1039.0], [68.3, 1040.0], [68.4, 1041.0], [68.5, 1043.0], [68.6, 1044.0], [68.7, 1045.0], [68.8, 1047.0], [68.9, 1049.0], [69.0, 1050.0], [69.1, 1051.0], [69.2, 1053.0], [69.3, 1055.0], [69.4, 1058.0], [69.5, 1060.0], [69.6, 1062.0], [69.7, 1064.0], [69.8, 1065.0], [69.9, 1066.0], [70.0, 1068.0], [70.1, 1069.0], [70.2, 1071.0], [70.3, 1072.0], [70.4, 1076.0], [70.5, 1077.0], [70.6, 1079.0], [70.7, 1081.0], [70.8, 1082.0], [70.9, 1083.0], [71.0, 1085.0], [71.1, 1087.0], [71.2, 1089.0], [71.3, 1092.0], [71.4, 1094.0], [71.5, 1095.0], [71.6, 1097.0], [71.7, 1098.0], [71.8, 1099.0], [71.9, 1102.0], [72.0, 1104.0], [72.1, 1108.0], [72.2, 1110.0], [72.3, 1113.0], [72.4, 1115.0], [72.5, 1116.0], [72.6, 1118.0], [72.7, 1119.0], [72.8, 1122.0], [72.9, 1125.0], [73.0, 1127.0], [73.1, 1129.0], [73.2, 1131.0], [73.3, 1133.0], [73.4, 1134.0], [73.5, 1135.0], [73.6, 1136.0], [73.7, 1138.0], [73.8, 1139.0], [73.9, 1140.0], [74.0, 1142.0], [74.1, 1145.0], [74.2, 1149.0], [74.3, 1151.0], [74.4, 1154.0], [74.5, 1157.0], [74.6, 1158.0], [74.7, 1159.0], [74.8, 1161.0], [74.9, 1162.0], [75.0, 1164.0], [75.1, 1165.0], [75.2, 1167.0], [75.3, 1170.0], [75.4, 1173.0], [75.5, 1175.0], [75.6, 1178.0], [75.7, 1180.0], [75.8, 1184.0], [75.9, 1187.0], [76.0, 1189.0], [76.1, 1194.0], [76.2, 1199.0], [76.3, 1202.0], [76.4, 1206.0], [76.5, 1209.0], [76.6, 1210.0], [76.7, 1212.0], [76.8, 1214.0], [76.9, 1218.0], [77.0, 1221.0], [77.1, 1224.0], [77.2, 1226.0], [77.3, 1228.0], [77.4, 1231.0], [77.5, 1233.0], [77.6, 1235.0], [77.7, 1238.0], [77.8, 1241.0], [77.9, 1243.0], [78.0, 1244.0], [78.1, 1250.0], [78.2, 1251.0], [78.3, 1254.0], [78.4, 1256.0], [78.5, 1259.0], [78.6, 1262.0], [78.7, 1263.0], [78.8, 1267.0], [78.9, 1270.0], [79.0, 1274.0], [79.1, 1276.0], [79.2, 1278.0], [79.3, 1282.0], [79.4, 1283.0], [79.5, 1286.0], [79.6, 1287.0], [79.7, 1290.0], [79.8, 1292.0], [79.9, 1294.0], [80.0, 1298.0], [80.1, 1303.0], [80.2, 1305.0], [80.3, 1308.0], [80.4, 1313.0], [80.5, 1315.0], [80.6, 1317.0], [80.7, 1320.0], [80.8, 1322.0], [80.9, 1325.0], [81.0, 1328.0], [81.1, 1330.0], [81.2, 1333.0], [81.3, 1335.0], [81.4, 1337.0], [81.5, 1339.0], [81.6, 1340.0], [81.7, 1344.0], [81.8, 1345.0], [81.9, 1347.0], [82.0, 1348.0], [82.1, 1350.0], [82.2, 1351.0], [82.3, 1351.0], [82.4, 1355.0], [82.5, 1357.0], [82.6, 1359.0], [82.7, 1360.0], [82.8, 1362.0], [82.9, 1366.0], [83.0, 1368.0], [83.1, 1369.0], [83.2, 1371.0], [83.3, 1374.0], [83.4, 1375.0], [83.5, 1378.0], [83.6, 1379.0], [83.7, 1381.0], [83.8, 1384.0], [83.9, 1387.0], [84.0, 1390.0], [84.1, 1391.0], [84.2, 1392.0], [84.3, 1394.0], [84.4, 1395.0], [84.5, 1397.0], [84.6, 1399.0], [84.7, 1403.0], [84.8, 1406.0], [84.9, 1409.0], [85.0, 1412.0], [85.1, 1414.0], [85.2, 1417.0], [85.3, 1418.0], [85.4, 1421.0], [85.5, 1422.0], [85.6, 1426.0], [85.7, 1428.0], [85.8, 1431.0], [85.9, 1433.0], [86.0, 1435.0], [86.1, 1438.0], [86.2, 1440.0], [86.3, 1442.0], [86.4, 1447.0], [86.5, 1452.0], [86.6, 1454.0], [86.7, 1459.0], [86.8, 1462.0], [86.9, 1466.0], [87.0, 1468.0], [87.1, 1470.0], [87.2, 1471.0], [87.3, 1475.0], [87.4, 1482.0], [87.5, 1485.0], [87.6, 1489.0], [87.7, 1492.0], [87.8, 1496.0], [87.9, 1503.0], [88.0, 1505.0], [88.1, 1509.0], [88.2, 1512.0], [88.3, 1513.0], [88.4, 1515.0], [88.5, 1518.0], [88.6, 1520.0], [88.7, 1523.0], [88.8, 1532.0], [88.9, 1538.0], [89.0, 1540.0], [89.1, 1545.0], [89.2, 1552.0], [89.3, 1555.0], [89.4, 1560.0], [89.5, 1567.0], [89.6, 1570.0], [89.7, 1575.0], [89.8, 1576.0], [89.9, 1580.0], [90.0, 1583.0], [90.1, 1591.0], [90.2, 1593.0], [90.3, 1602.0], [90.4, 1607.0], [90.5, 1615.0], [90.6, 1624.0], [90.7, 1629.0], [90.8, 1633.0], [90.9, 1638.0], [91.0, 1644.0], [91.1, 1648.0], [91.2, 1652.0], [91.3, 1662.0], [91.4, 1671.0], [91.5, 1675.0], [91.6, 1681.0], [91.7, 1693.0], [91.8, 1696.0], [91.9, 1704.0], [92.0, 1709.0], [92.1, 1711.0], [92.2, 1718.0], [92.3, 1728.0], [92.4, 1742.0], [92.5, 1746.0], [92.6, 1756.0], [92.7, 1762.0], [92.8, 1769.0], [92.9, 1779.0], [93.0, 1790.0], [93.1, 1796.0], [93.2, 1810.0], [93.3, 1816.0], [93.4, 1822.0], [93.5, 1829.0], [93.6, 1846.0], [93.7, 1855.0], [93.8, 1861.0], [93.9, 1865.0], [94.0, 1872.0], [94.1, 1887.0], [94.2, 1898.0], [94.3, 1905.0], [94.4, 1917.0], [94.5, 1930.0], [94.6, 1943.0], [94.7, 1970.0], [94.8, 1988.0], [94.9, 2004.0], [95.0, 2011.0], [95.1, 2016.0], [95.2, 2030.0], [95.3, 2033.0], [95.4, 2046.0], [95.5, 2069.0], [95.6, 2082.0], [95.7, 2086.0], [95.8, 2098.0], [95.9, 2105.0], [96.0, 2114.0], [96.1, 2136.0], [96.2, 2141.0], [96.3, 2152.0], [96.4, 2171.0], [96.5, 2183.0], [96.6, 2190.0], [96.7, 2200.0], [96.8, 2217.0], [96.9, 2242.0], [97.0, 2262.0], [97.1, 2273.0], [97.2, 2283.0], [97.3, 2291.0], [97.4, 2331.0], [97.5, 2363.0], [97.6, 2398.0], [97.7, 2438.0], [97.8, 2462.0], [97.9, 2496.0], [98.0, 2522.0], [98.1, 2548.0], [98.2, 2588.0], [98.3, 2624.0], [98.4, 2644.0], [98.5, 2714.0], [98.6, 2745.0], [98.7, 2799.0], [98.8, 2865.0], [98.9, 2967.0], [99.0, 3107.0], [99.1, 3163.0], [99.2, 3283.0], [99.3, 3438.0], [99.4, 3493.0], [99.5, 3746.0], [99.6, 4029.0], [99.7, 4363.0], [99.8, 4816.0], [99.9, 5470.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 579.0, "series": [{"data": [[600.0, 414.0], [700.0, 342.0], [800.0, 310.0], [900.0, 288.0], [1000.0, 307.0], [1100.0, 228.0], [1200.0, 198.0], [1300.0, 239.0], [1400.0, 167.0], [1500.0, 127.0], [1600.0, 81.0], [1700.0, 65.0], [1800.0, 57.0], [1900.0, 35.0], [2000.0, 49.0], [2100.0, 45.0], [2200.0, 32.0], [2300.0, 16.0], [2400.0, 16.0], [2500.0, 17.0], [2600.0, 12.0], [2700.0, 12.0], [2800.0, 8.0], [2900.0, 2.0], [3000.0, 5.0], [3100.0, 7.0], [3200.0, 4.0], [3300.0, 1.0], [3400.0, 9.0], [3500.0, 4.0], [3700.0, 1.0], [3600.0, 1.0], [3800.0, 2.0], [3900.0, 2.0], [4000.0, 1.0], [4100.0, 2.0], [4300.0, 1.0], [4200.0, 2.0], [4400.0, 3.0], [4500.0, 1.0], [4800.0, 2.0], [5100.0, 1.0], [4900.0, 1.0], [5200.0, 1.0], [5400.0, 2.0], [5600.0, 1.0], [5700.0, 2.0], [5900.0, 1.0], [100.0, 24.0], [200.0, 543.0], [300.0, 405.0], [400.0, 579.0], [500.0, 515.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 631.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3005.0, "series": [{"data": [[0.0, 1554.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3005.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 631.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.799999999999999, "minX": 1.60374294E12, "maxY": 10.0, "series": [{"data": [[1.60374318E12, 10.0], [1.603743E12, 10.0], [1.6037433E12, 10.0], [1.60374312E12, 10.0], [1.60374294E12, 10.0], [1.60374342E12, 7.799999999999999], [1.60374324E12, 10.0], [1.60374306E12, 10.0], [1.60374336E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374342E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 306.0, "minX": 1.0, "maxY": 2480.0, "series": [{"data": [[8.0, 1457.5], [4.0, 869.0], [2.0, 2314.0], [1.0, 2480.0], [9.0, 306.0], [10.0, 886.3510905230679], [5.0, 1393.0], [6.0, 715.0], [3.0, 1127.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996146, 887.1491329479798]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 156.15, "minX": 1.60374294E12, "maxY": 3898543.7, "series": [{"data": [[1.60374318E12, 3095243.05], [1.603743E12, 2413151.55], [1.6037433E12, 3542806.95], [1.60374312E12, 3163259.5], [1.60374294E12, 2043902.7666666666], [1.60374342E12, 114992.56666666667], [1.60374324E12, 2737364.5166666666], [1.60374306E12, 3898543.7], [1.60374336E12, 2963550.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60374318E12, 4385.083333333333], [1.603743E12, 5037.866666666667], [1.6037433E12, 5453.133333333333], [1.60374312E12, 5254.466666666666], [1.60374294E12, 2740.0333333333333], [1.60374342E12, 156.15], [1.60374324E12, 5149.75], [1.60374306E12, 5237.083333333333], [1.60374336E12, 5163.766666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374342E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 834.6175243393606, "minX": 1.60374294E12, "maxY": 1059.7, "series": [{"data": [[1.60374318E12, 988.0892561983472], [1.603743E12, 868.3367052023121], [1.6037433E12, 834.6175243393606], [1.60374312E12, 865.610071942446], [1.60374294E12, 1013.8923884514436], [1.60374342E12, 1059.7], [1.60374324E12, 847.276595744681], [1.60374306E12, 870.915942028985], [1.60374336E12, 875.8169838945834]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374342E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 832.675938803894, "minX": 1.60374294E12, "maxY": 1057.5500000000002, "series": [{"data": [[1.60374318E12, 986.1041322314051], [1.603743E12, 866.7500000000001], [1.6037433E12, 832.675938803894], [1.60374312E12, 863.5467625899282], [1.60374294E12, 1011.3464566929143], [1.60374342E12, 1057.5500000000002], [1.60374324E12, 845.9248226950344], [1.60374306E12, 868.2652173913044], [1.60374336E12, 874.2313323572483]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374342E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60374294E12, "maxY": 0.27559055118110215, "series": [{"data": [[1.60374318E12, 0.011570247933884312], [1.603743E12, 0.017341040462427723], [1.6037433E12, 0.019471488178025066], [1.60374312E12, 0.011510791366906489], [1.60374294E12, 0.27559055118110215], [1.60374342E12, 0.0], [1.60374324E12, 0.01418439716312058], [1.60374306E12, 0.03043478260869566], [1.60374336E12, 0.013177159590043916]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374342E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 188.0, "minX": 1.60374294E12, "maxY": 5940.0, "series": [{"data": [[1.60374318E12, 5940.0], [1.603743E12, 4816.0], [1.6037433E12, 3080.0], [1.60374312E12, 4185.0], [1.60374294E12, 5764.0], [1.60374342E12, 2480.0], [1.60374324E12, 3814.0], [1.60374306E12, 4854.0], [1.60374336E12, 4029.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60374318E12, 208.0], [1.603743E12, 207.23699983477593], [1.6037433E12, 201.95999965667724], [1.60374312E12, 196.26399983406066], [1.60374294E12, 213.62799945354462], [1.60374342E12, 306.0], [1.60374324E12, 203.35399983167648], [1.60374306E12, 201.0], [1.60374336E12, 199.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60374318E12, 208.0], [1.603743E12, 207.86070006608963], [1.6037433E12, 203.12800006866456], [1.60374312E12, 196.89040006637572], [1.60374294E12, 215.69080021858215], [1.60374342E12, 306.0], [1.60374324E12, 203.9894000673294], [1.60374306E12, 201.0], [1.60374336E12, 199.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60374318E12, 208.0], [1.603743E12, 207.58349991738797], [1.6037433E12, 202.67999982833862], [1.60374312E12, 196.61199991703035], [1.60374294E12, 214.7739997267723], [1.60374342E12, 306.0], [1.60374324E12, 203.70699991583825], [1.60374306E12, 201.0], [1.60374336E12, 199.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60374318E12, 194.0], [1.603743E12, 203.0], [1.6037433E12, 195.0], [1.60374312E12, 188.0], [1.60374294E12, 206.0], [1.60374342E12, 306.0], [1.60374324E12, 196.0], [1.60374306E12, 197.0], [1.60374336E12, 196.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60374318E12, 852.0], [1.603743E12, 711.5], [1.6037433E12, 656.0], [1.60374312E12, 703.0], [1.60374294E12, 874.0], [1.60374342E12, 889.0], [1.60374324E12, 695.0], [1.60374306E12, 673.0], [1.60374336E12, 734.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374342E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 411.5, "minX": 2.0, "maxY": 2397.0, "series": [{"data": [[2.0, 2397.0], [3.0, 1432.0], [4.0, 1255.5], [5.0, 1491.0], [6.0, 1050.5], [7.0, 1037.0], [8.0, 1077.0], [9.0, 964.5], [10.0, 900.0], [11.0, 871.5], [12.0, 781.5], [13.0, 737.0], [14.0, 672.0], [15.0, 549.5], [16.0, 644.0], [17.0, 493.0], [18.0, 459.5], [19.0, 460.5], [20.0, 454.5], [21.0, 479.0], [22.0, 454.5], [23.0, 412.0], [24.0, 420.0], [25.0, 417.0], [26.0, 411.5], [27.0, 412.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 411.0, "minX": 2.0, "maxY": 2391.0, "series": [{"data": [[2.0, 2391.0], [3.0, 1425.0], [4.0, 1251.5], [5.0, 1487.0], [6.0, 1049.0], [7.0, 1032.5], [8.0, 1074.0], [9.0, 962.5], [10.0, 899.0], [11.0, 869.5], [12.0, 780.5], [13.0, 734.0], [14.0, 672.0], [15.0, 549.5], [16.0, 642.0], [17.0, 492.0], [18.0, 459.5], [19.0, 459.5], [20.0, 454.5], [21.0, 479.0], [22.0, 454.5], [23.0, 412.0], [24.0, 420.0], [25.0, 417.0], [26.0, 411.5], [27.0, 411.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60374294E12, "maxY": 11.983333333333333, "series": [{"data": [[1.60374318E12, 10.083333333333334], [1.603743E12, 11.533333333333333], [1.6037433E12, 11.983333333333333], [1.60374312E12, 11.583333333333334], [1.60374294E12, 6.516666666666667], [1.60374342E12, 0.16666666666666666], [1.60374324E12, 11.75], [1.60374306E12, 11.5], [1.60374336E12, 11.383333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374342E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60374294E12, "maxY": 11.983333333333333, "series": [{"data": [[1.60374318E12, 10.083333333333334], [1.603743E12, 11.533333333333333], [1.6037433E12, 11.983333333333333], [1.60374312E12, 11.583333333333334], [1.60374294E12, 6.35], [1.60374342E12, 0.3333333333333333], [1.60374324E12, 11.75], [1.60374306E12, 11.5], [1.60374336E12, 11.383333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374342E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60374294E12, "maxY": 11.983333333333333, "series": [{"data": [[1.60374318E12, 10.083333333333334], [1.603743E12, 11.533333333333333], [1.6037433E12, 11.983333333333333], [1.60374312E12, 11.583333333333334], [1.60374294E12, 6.35], [1.60374342E12, 0.3333333333333333], [1.60374324E12, 11.75], [1.60374306E12, 11.5], [1.60374336E12, 11.383333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374342E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60374294E12, "maxY": 11.983333333333333, "series": [{"data": [[1.60374318E12, 10.083333333333334], [1.603743E12, 11.533333333333333], [1.6037433E12, 11.983333333333333], [1.60374312E12, 11.583333333333334], [1.60374294E12, 6.35], [1.60374342E12, 0.3333333333333333], [1.60374324E12, 11.75], [1.60374306E12, 11.5], [1.60374336E12, 11.383333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374342E12, "title": "Total Transactions Per Second"}},
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

