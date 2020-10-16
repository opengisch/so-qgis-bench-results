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
        data: {"result": {"minY": 180.0, "minX": 0.0, "maxY": 5598.0, "series": [{"data": [[0.0, 180.0], [0.1, 186.0], [0.2, 187.0], [0.3, 190.0], [0.4, 191.0], [0.5, 192.0], [0.6, 193.0], [0.7, 194.0], [0.8, 195.0], [0.9, 195.0], [1.0, 197.0], [1.1, 198.0], [1.2, 199.0], [1.3, 199.0], [1.4, 200.0], [1.5, 201.0], [1.6, 202.0], [1.7, 202.0], [1.8, 203.0], [1.9, 203.0], [2.0, 204.0], [2.1, 204.0], [2.2, 205.0], [2.3, 206.0], [2.4, 206.0], [2.5, 207.0], [2.6, 208.0], [2.7, 209.0], [2.8, 210.0], [2.9, 210.0], [3.0, 211.0], [3.1, 212.0], [3.2, 213.0], [3.3, 214.0], [3.4, 215.0], [3.5, 216.0], [3.6, 216.0], [3.7, 217.0], [3.8, 219.0], [3.9, 219.0], [4.0, 221.0], [4.1, 221.0], [4.2, 223.0], [4.3, 223.0], [4.4, 224.0], [4.5, 224.0], [4.6, 225.0], [4.7, 226.0], [4.8, 227.0], [4.9, 227.0], [5.0, 228.0], [5.1, 228.0], [5.2, 229.0], [5.3, 229.0], [5.4, 230.0], [5.5, 231.0], [5.6, 232.0], [5.7, 233.0], [5.8, 234.0], [5.9, 234.0], [6.0, 235.0], [6.1, 235.0], [6.2, 237.0], [6.3, 238.0], [6.4, 240.0], [6.5, 241.0], [6.6, 242.0], [6.7, 244.0], [6.8, 245.0], [6.9, 246.0], [7.0, 247.0], [7.1, 248.0], [7.2, 249.0], [7.3, 250.0], [7.4, 252.0], [7.5, 254.0], [7.6, 255.0], [7.7, 258.0], [7.8, 259.0], [7.9, 259.0], [8.0, 260.0], [8.1, 260.0], [8.2, 261.0], [8.3, 261.0], [8.4, 263.0], [8.5, 264.0], [8.6, 265.0], [8.7, 267.0], [8.8, 268.0], [8.9, 268.0], [9.0, 270.0], [9.1, 271.0], [9.2, 272.0], [9.3, 273.0], [9.4, 273.0], [9.5, 274.0], [9.6, 275.0], [9.7, 275.0], [9.8, 276.0], [9.9, 277.0], [10.0, 278.0], [10.1, 279.0], [10.2, 280.0], [10.3, 281.0], [10.4, 281.0], [10.5, 282.0], [10.6, 283.0], [10.7, 284.0], [10.8, 285.0], [10.9, 286.0], [11.0, 286.0], [11.1, 287.0], [11.2, 289.0], [11.3, 289.0], [11.4, 290.0], [11.5, 292.0], [11.6, 293.0], [11.7, 294.0], [11.8, 296.0], [11.9, 296.0], [12.0, 298.0], [12.1, 298.0], [12.2, 299.0], [12.3, 301.0], [12.4, 302.0], [12.5, 302.0], [12.6, 303.0], [12.7, 305.0], [12.8, 306.0], [12.9, 307.0], [13.0, 308.0], [13.1, 309.0], [13.2, 310.0], [13.3, 311.0], [13.4, 312.0], [13.5, 313.0], [13.6, 314.0], [13.7, 316.0], [13.8, 317.0], [13.9, 318.0], [14.0, 319.0], [14.1, 321.0], [14.2, 322.0], [14.3, 323.0], [14.4, 324.0], [14.5, 325.0], [14.6, 325.0], [14.7, 327.0], [14.8, 329.0], [14.9, 330.0], [15.0, 331.0], [15.1, 332.0], [15.2, 334.0], [15.3, 336.0], [15.4, 337.0], [15.5, 340.0], [15.6, 342.0], [15.7, 343.0], [15.8, 346.0], [15.9, 346.0], [16.0, 349.0], [16.1, 351.0], [16.2, 352.0], [16.3, 354.0], [16.4, 356.0], [16.5, 358.0], [16.6, 361.0], [16.7, 364.0], [16.8, 369.0], [16.9, 370.0], [17.0, 372.0], [17.1, 375.0], [17.2, 376.0], [17.3, 378.0], [17.4, 380.0], [17.5, 381.0], [17.6, 383.0], [17.7, 384.0], [17.8, 386.0], [17.9, 388.0], [18.0, 389.0], [18.1, 390.0], [18.2, 391.0], [18.3, 393.0], [18.4, 393.0], [18.5, 395.0], [18.6, 396.0], [18.7, 397.0], [18.8, 398.0], [18.9, 398.0], [19.0, 399.0], [19.1, 400.0], [19.2, 401.0], [19.3, 402.0], [19.4, 403.0], [19.5, 404.0], [19.6, 405.0], [19.7, 406.0], [19.8, 406.0], [19.9, 406.0], [20.0, 408.0], [20.1, 409.0], [20.2, 410.0], [20.3, 410.0], [20.4, 410.0], [20.5, 411.0], [20.6, 412.0], [20.7, 412.0], [20.8, 414.0], [20.9, 415.0], [21.0, 415.0], [21.1, 416.0], [21.2, 417.0], [21.3, 417.0], [21.4, 418.0], [21.5, 419.0], [21.6, 419.0], [21.7, 420.0], [21.8, 421.0], [21.9, 422.0], [22.0, 422.0], [22.1, 423.0], [22.2, 424.0], [22.3, 425.0], [22.4, 426.0], [22.5, 427.0], [22.6, 427.0], [22.7, 429.0], [22.8, 430.0], [22.9, 431.0], [23.0, 432.0], [23.1, 433.0], [23.2, 434.0], [23.3, 435.0], [23.4, 436.0], [23.5, 437.0], [23.6, 437.0], [23.7, 438.0], [23.8, 439.0], [23.9, 441.0], [24.0, 441.0], [24.1, 442.0], [24.2, 444.0], [24.3, 444.0], [24.4, 445.0], [24.5, 445.0], [24.6, 446.0], [24.7, 446.0], [24.8, 447.0], [24.9, 448.0], [25.0, 450.0], [25.1, 451.0], [25.2, 452.0], [25.3, 453.0], [25.4, 453.0], [25.5, 454.0], [25.6, 455.0], [25.7, 456.0], [25.8, 457.0], [25.9, 458.0], [26.0, 458.0], [26.1, 459.0], [26.2, 460.0], [26.3, 460.0], [26.4, 461.0], [26.5, 462.0], [26.6, 463.0], [26.7, 463.0], [26.8, 463.0], [26.9, 466.0], [27.0, 467.0], [27.1, 467.0], [27.2, 468.0], [27.3, 470.0], [27.4, 471.0], [27.5, 471.0], [27.6, 472.0], [27.7, 474.0], [27.8, 475.0], [27.9, 475.0], [28.0, 476.0], [28.1, 477.0], [28.2, 478.0], [28.3, 479.0], [28.4, 480.0], [28.5, 481.0], [28.6, 482.0], [28.7, 482.0], [28.8, 484.0], [28.9, 485.0], [29.0, 486.0], [29.1, 488.0], [29.2, 489.0], [29.3, 490.0], [29.4, 491.0], [29.5, 491.0], [29.6, 492.0], [29.7, 493.0], [29.8, 494.0], [29.9, 495.0], [30.0, 496.0], [30.1, 497.0], [30.2, 497.0], [30.3, 498.0], [30.4, 500.0], [30.5, 501.0], [30.6, 502.0], [30.7, 503.0], [30.8, 504.0], [30.9, 505.0], [31.0, 506.0], [31.1, 508.0], [31.2, 508.0], [31.3, 509.0], [31.4, 510.0], [31.5, 511.0], [31.6, 513.0], [31.7, 513.0], [31.8, 514.0], [31.9, 515.0], [32.0, 516.0], [32.1, 517.0], [32.2, 518.0], [32.3, 519.0], [32.4, 519.0], [32.5, 520.0], [32.6, 521.0], [32.7, 523.0], [32.8, 524.0], [32.9, 524.0], [33.0, 525.0], [33.1, 526.0], [33.2, 527.0], [33.3, 528.0], [33.4, 529.0], [33.5, 529.0], [33.6, 530.0], [33.7, 531.0], [33.8, 531.0], [33.9, 532.0], [34.0, 533.0], [34.1, 533.0], [34.2, 534.0], [34.3, 535.0], [34.4, 535.0], [34.5, 536.0], [34.6, 537.0], [34.7, 538.0], [34.8, 538.0], [34.9, 539.0], [35.0, 541.0], [35.1, 541.0], [35.2, 542.0], [35.3, 542.0], [35.4, 543.0], [35.5, 543.0], [35.6, 545.0], [35.7, 545.0], [35.8, 546.0], [35.9, 547.0], [36.0, 548.0], [36.1, 549.0], [36.2, 550.0], [36.3, 550.0], [36.4, 551.0], [36.5, 551.0], [36.6, 552.0], [36.7, 553.0], [36.8, 553.0], [36.9, 555.0], [37.0, 555.0], [37.1, 556.0], [37.2, 557.0], [37.3, 558.0], [37.4, 559.0], [37.5, 559.0], [37.6, 560.0], [37.7, 560.0], [37.8, 561.0], [37.9, 561.0], [38.0, 562.0], [38.1, 563.0], [38.2, 563.0], [38.3, 564.0], [38.4, 565.0], [38.5, 566.0], [38.6, 567.0], [38.7, 568.0], [38.8, 569.0], [38.9, 570.0], [39.0, 570.0], [39.1, 571.0], [39.2, 571.0], [39.3, 572.0], [39.4, 573.0], [39.5, 574.0], [39.6, 575.0], [39.7, 576.0], [39.8, 577.0], [39.9, 578.0], [40.0, 580.0], [40.1, 581.0], [40.2, 582.0], [40.3, 583.0], [40.4, 583.0], [40.5, 584.0], [40.6, 585.0], [40.7, 585.0], [40.8, 587.0], [40.9, 588.0], [41.0, 589.0], [41.1, 591.0], [41.2, 591.0], [41.3, 593.0], [41.4, 593.0], [41.5, 594.0], [41.6, 595.0], [41.7, 595.0], [41.8, 596.0], [41.9, 597.0], [42.0, 598.0], [42.1, 599.0], [42.2, 600.0], [42.3, 600.0], [42.4, 601.0], [42.5, 602.0], [42.6, 603.0], [42.7, 604.0], [42.8, 605.0], [42.9, 606.0], [43.0, 608.0], [43.1, 609.0], [43.2, 611.0], [43.3, 612.0], [43.4, 613.0], [43.5, 616.0], [43.6, 617.0], [43.7, 618.0], [43.8, 619.0], [43.9, 619.0], [44.0, 622.0], [44.1, 624.0], [44.2, 625.0], [44.3, 627.0], [44.4, 628.0], [44.5, 629.0], [44.6, 632.0], [44.7, 633.0], [44.8, 635.0], [44.9, 636.0], [45.0, 637.0], [45.1, 639.0], [45.2, 641.0], [45.3, 643.0], [45.4, 643.0], [45.5, 644.0], [45.6, 645.0], [45.7, 646.0], [45.8, 647.0], [45.9, 648.0], [46.0, 650.0], [46.1, 652.0], [46.2, 653.0], [46.3, 654.0], [46.4, 656.0], [46.5, 658.0], [46.6, 659.0], [46.7, 660.0], [46.8, 662.0], [46.9, 664.0], [47.0, 666.0], [47.1, 667.0], [47.2, 669.0], [47.3, 671.0], [47.4, 673.0], [47.5, 674.0], [47.6, 675.0], [47.7, 676.0], [47.8, 677.0], [47.9, 680.0], [48.0, 680.0], [48.1, 682.0], [48.2, 685.0], [48.3, 686.0], [48.4, 687.0], [48.5, 689.0], [48.6, 690.0], [48.7, 692.0], [48.8, 694.0], [48.9, 694.0], [49.0, 696.0], [49.1, 697.0], [49.2, 699.0], [49.3, 700.0], [49.4, 701.0], [49.5, 703.0], [49.6, 704.0], [49.7, 706.0], [49.8, 708.0], [49.9, 709.0], [50.0, 711.0], [50.1, 714.0], [50.2, 716.0], [50.3, 718.0], [50.4, 719.0], [50.5, 719.0], [50.6, 722.0], [50.7, 723.0], [50.8, 724.0], [50.9, 725.0], [51.0, 728.0], [51.1, 730.0], [51.2, 732.0], [51.3, 733.0], [51.4, 734.0], [51.5, 734.0], [51.6, 737.0], [51.7, 738.0], [51.8, 741.0], [51.9, 743.0], [52.0, 746.0], [52.1, 747.0], [52.2, 749.0], [52.3, 753.0], [52.4, 754.0], [52.5, 755.0], [52.6, 757.0], [52.7, 758.0], [52.8, 761.0], [52.9, 763.0], [53.0, 763.0], [53.1, 765.0], [53.2, 767.0], [53.3, 769.0], [53.4, 770.0], [53.5, 771.0], [53.6, 775.0], [53.7, 778.0], [53.8, 780.0], [53.9, 781.0], [54.0, 782.0], [54.1, 785.0], [54.2, 786.0], [54.3, 787.0], [54.4, 788.0], [54.5, 790.0], [54.6, 791.0], [54.7, 793.0], [54.8, 795.0], [54.9, 797.0], [55.0, 797.0], [55.1, 800.0], [55.2, 802.0], [55.3, 803.0], [55.4, 806.0], [55.5, 807.0], [55.6, 808.0], [55.7, 809.0], [55.8, 810.0], [55.9, 812.0], [56.0, 814.0], [56.1, 815.0], [56.2, 817.0], [56.3, 818.0], [56.4, 820.0], [56.5, 821.0], [56.6, 824.0], [56.7, 825.0], [56.8, 826.0], [56.9, 830.0], [57.0, 831.0], [57.1, 833.0], [57.2, 834.0], [57.3, 836.0], [57.4, 839.0], [57.5, 840.0], [57.6, 841.0], [57.7, 843.0], [57.8, 845.0], [57.9, 846.0], [58.0, 847.0], [58.1, 851.0], [58.2, 854.0], [58.3, 855.0], [58.4, 856.0], [58.5, 857.0], [58.6, 858.0], [58.7, 859.0], [58.8, 860.0], [58.9, 862.0], [59.0, 864.0], [59.1, 867.0], [59.2, 868.0], [59.3, 870.0], [59.4, 873.0], [59.5, 876.0], [59.6, 878.0], [59.7, 879.0], [59.8, 881.0], [59.9, 882.0], [60.0, 885.0], [60.1, 887.0], [60.2, 889.0], [60.3, 891.0], [60.4, 893.0], [60.5, 894.0], [60.6, 896.0], [60.7, 897.0], [60.8, 900.0], [60.9, 901.0], [61.0, 902.0], [61.1, 904.0], [61.2, 905.0], [61.3, 908.0], [61.4, 908.0], [61.5, 910.0], [61.6, 912.0], [61.7, 914.0], [61.8, 916.0], [61.9, 918.0], [62.0, 921.0], [62.1, 922.0], [62.2, 924.0], [62.3, 926.0], [62.4, 927.0], [62.5, 929.0], [62.6, 930.0], [62.7, 932.0], [62.8, 935.0], [62.9, 937.0], [63.0, 939.0], [63.1, 940.0], [63.2, 941.0], [63.3, 943.0], [63.4, 945.0], [63.5, 946.0], [63.6, 949.0], [63.7, 951.0], [63.8, 952.0], [63.9, 954.0], [64.0, 956.0], [64.1, 958.0], [64.2, 960.0], [64.3, 962.0], [64.4, 963.0], [64.5, 965.0], [64.6, 967.0], [64.7, 967.0], [64.8, 969.0], [64.9, 970.0], [65.0, 970.0], [65.1, 971.0], [65.2, 972.0], [65.3, 973.0], [65.4, 974.0], [65.5, 975.0], [65.6, 977.0], [65.7, 977.0], [65.8, 981.0], [65.9, 984.0], [66.0, 986.0], [66.1, 987.0], [66.2, 988.0], [66.3, 990.0], [66.4, 993.0], [66.5, 995.0], [66.6, 996.0], [66.7, 998.0], [66.8, 999.0], [66.9, 1000.0], [67.0, 1002.0], [67.1, 1005.0], [67.2, 1007.0], [67.3, 1008.0], [67.4, 1010.0], [67.5, 1012.0], [67.6, 1014.0], [67.7, 1016.0], [67.8, 1017.0], [67.9, 1019.0], [68.0, 1021.0], [68.1, 1023.0], [68.2, 1024.0], [68.3, 1025.0], [68.4, 1027.0], [68.5, 1030.0], [68.6, 1030.0], [68.7, 1032.0], [68.8, 1034.0], [68.9, 1034.0], [69.0, 1036.0], [69.1, 1037.0], [69.2, 1038.0], [69.3, 1040.0], [69.4, 1042.0], [69.5, 1043.0], [69.6, 1044.0], [69.7, 1046.0], [69.8, 1050.0], [69.9, 1051.0], [70.0, 1053.0], [70.1, 1055.0], [70.2, 1056.0], [70.3, 1058.0], [70.4, 1060.0], [70.5, 1063.0], [70.6, 1065.0], [70.7, 1067.0], [70.8, 1069.0], [70.9, 1070.0], [71.0, 1071.0], [71.1, 1073.0], [71.2, 1074.0], [71.3, 1078.0], [71.4, 1082.0], [71.5, 1083.0], [71.6, 1085.0], [71.7, 1085.0], [71.8, 1086.0], [71.9, 1088.0], [72.0, 1090.0], [72.1, 1092.0], [72.2, 1095.0], [72.3, 1098.0], [72.4, 1099.0], [72.5, 1102.0], [72.6, 1103.0], [72.7, 1105.0], [72.8, 1107.0], [72.9, 1109.0], [73.0, 1110.0], [73.1, 1111.0], [73.2, 1114.0], [73.3, 1116.0], [73.4, 1117.0], [73.5, 1121.0], [73.6, 1122.0], [73.7, 1124.0], [73.8, 1127.0], [73.9, 1128.0], [74.0, 1129.0], [74.1, 1131.0], [74.2, 1131.0], [74.3, 1136.0], [74.4, 1137.0], [74.5, 1140.0], [74.6, 1143.0], [74.7, 1145.0], [74.8, 1147.0], [74.9, 1148.0], [75.0, 1149.0], [75.1, 1152.0], [75.2, 1153.0], [75.3, 1156.0], [75.4, 1157.0], [75.5, 1162.0], [75.6, 1165.0], [75.7, 1167.0], [75.8, 1172.0], [75.9, 1176.0], [76.0, 1177.0], [76.1, 1178.0], [76.2, 1180.0], [76.3, 1182.0], [76.4, 1186.0], [76.5, 1189.0], [76.6, 1190.0], [76.7, 1195.0], [76.8, 1196.0], [76.9, 1199.0], [77.0, 1202.0], [77.1, 1202.0], [77.2, 1205.0], [77.3, 1207.0], [77.4, 1208.0], [77.5, 1209.0], [77.6, 1212.0], [77.7, 1215.0], [77.8, 1218.0], [77.9, 1220.0], [78.0, 1223.0], [78.1, 1224.0], [78.2, 1225.0], [78.3, 1227.0], [78.4, 1232.0], [78.5, 1234.0], [78.6, 1236.0], [78.7, 1237.0], [78.8, 1239.0], [78.9, 1241.0], [79.0, 1245.0], [79.1, 1248.0], [79.2, 1250.0], [79.3, 1254.0], [79.4, 1255.0], [79.5, 1258.0], [79.6, 1260.0], [79.7, 1262.0], [79.8, 1265.0], [79.9, 1268.0], [80.0, 1271.0], [80.1, 1275.0], [80.2, 1279.0], [80.3, 1279.0], [80.4, 1281.0], [80.5, 1283.0], [80.6, 1286.0], [80.7, 1288.0], [80.8, 1289.0], [80.9, 1291.0], [81.0, 1293.0], [81.1, 1295.0], [81.2, 1297.0], [81.3, 1299.0], [81.4, 1304.0], [81.5, 1305.0], [81.6, 1310.0], [81.7, 1311.0], [81.8, 1313.0], [81.9, 1315.0], [82.0, 1318.0], [82.1, 1319.0], [82.2, 1320.0], [82.3, 1323.0], [82.4, 1325.0], [82.5, 1329.0], [82.6, 1330.0], [82.7, 1332.0], [82.8, 1332.0], [82.9, 1334.0], [83.0, 1336.0], [83.1, 1339.0], [83.2, 1341.0], [83.3, 1343.0], [83.4, 1346.0], [83.5, 1347.0], [83.6, 1349.0], [83.7, 1352.0], [83.8, 1354.0], [83.9, 1356.0], [84.0, 1358.0], [84.1, 1359.0], [84.2, 1363.0], [84.3, 1367.0], [84.4, 1368.0], [84.5, 1369.0], [84.6, 1372.0], [84.7, 1374.0], [84.8, 1378.0], [84.9, 1380.0], [85.0, 1382.0], [85.1, 1383.0], [85.2, 1386.0], [85.3, 1391.0], [85.4, 1395.0], [85.5, 1398.0], [85.6, 1401.0], [85.7, 1402.0], [85.8, 1406.0], [85.9, 1407.0], [86.0, 1411.0], [86.1, 1413.0], [86.2, 1419.0], [86.3, 1422.0], [86.4, 1423.0], [86.5, 1425.0], [86.6, 1427.0], [86.7, 1429.0], [86.8, 1431.0], [86.9, 1434.0], [87.0, 1438.0], [87.1, 1439.0], [87.2, 1442.0], [87.3, 1449.0], [87.4, 1454.0], [87.5, 1458.0], [87.6, 1459.0], [87.7, 1461.0], [87.8, 1464.0], [87.9, 1467.0], [88.0, 1472.0], [88.1, 1475.0], [88.2, 1481.0], [88.3, 1487.0], [88.4, 1492.0], [88.5, 1496.0], [88.6, 1501.0], [88.7, 1509.0], [88.8, 1515.0], [88.9, 1518.0], [89.0, 1530.0], [89.1, 1533.0], [89.2, 1540.0], [89.3, 1542.0], [89.4, 1546.0], [89.5, 1552.0], [89.6, 1556.0], [89.7, 1561.0], [89.8, 1565.0], [89.9, 1568.0], [90.0, 1576.0], [90.1, 1579.0], [90.2, 1583.0], [90.3, 1590.0], [90.4, 1598.0], [90.5, 1601.0], [90.6, 1606.0], [90.7, 1611.0], [90.8, 1612.0], [90.9, 1615.0], [91.0, 1619.0], [91.1, 1622.0], [91.2, 1627.0], [91.3, 1637.0], [91.4, 1656.0], [91.5, 1661.0], [91.6, 1674.0], [91.7, 1683.0], [91.8, 1688.0], [91.9, 1701.0], [92.0, 1705.0], [92.1, 1709.0], [92.2, 1718.0], [92.3, 1725.0], [92.4, 1729.0], [92.5, 1733.0], [92.6, 1737.0], [92.7, 1745.0], [92.8, 1750.0], [92.9, 1756.0], [93.0, 1759.0], [93.1, 1770.0], [93.2, 1791.0], [93.3, 1793.0], [93.4, 1800.0], [93.5, 1814.0], [93.6, 1822.0], [93.7, 1839.0], [93.8, 1848.0], [93.9, 1856.0], [94.0, 1870.0], [94.1, 1880.0], [94.2, 1899.0], [94.3, 1907.0], [94.4, 1912.0], [94.5, 1924.0], [94.6, 1937.0], [94.7, 1954.0], [94.8, 1959.0], [94.9, 1966.0], [95.0, 1981.0], [95.1, 1989.0], [95.2, 2002.0], [95.3, 2016.0], [95.4, 2028.0], [95.5, 2049.0], [95.6, 2062.0], [95.7, 2080.0], [95.8, 2089.0], [95.9, 2098.0], [96.0, 2117.0], [96.1, 2133.0], [96.2, 2136.0], [96.3, 2145.0], [96.4, 2161.0], [96.5, 2170.0], [96.6, 2177.0], [96.7, 2196.0], [96.8, 2200.0], [96.9, 2230.0], [97.0, 2252.0], [97.1, 2267.0], [97.2, 2295.0], [97.3, 2310.0], [97.4, 2327.0], [97.5, 2341.0], [97.6, 2358.0], [97.7, 2369.0], [97.8, 2383.0], [97.9, 2405.0], [98.0, 2437.0], [98.1, 2455.0], [98.2, 2486.0], [98.3, 2516.0], [98.4, 2553.0], [98.5, 2602.0], [98.6, 2657.0], [98.7, 2686.0], [98.8, 2773.0], [98.9, 2846.0], [99.0, 3006.0], [99.1, 3076.0], [99.2, 3137.0], [99.3, 3304.0], [99.4, 3370.0], [99.5, 3548.0], [99.6, 3904.0], [99.7, 4233.0], [99.8, 4699.0], [99.9, 5216.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 611.0, "series": [{"data": [[600.0, 367.0], [700.0, 304.0], [800.0, 296.0], [900.0, 313.0], [1000.0, 290.0], [1100.0, 235.0], [1200.0, 227.0], [1300.0, 221.0], [1400.0, 156.0], [1500.0, 98.0], [1600.0, 74.0], [1700.0, 78.0], [1800.0, 42.0], [1900.0, 50.0], [2000.0, 40.0], [2100.0, 44.0], [2300.0, 33.0], [2200.0, 23.0], [2400.0, 20.0], [2500.0, 12.0], [2600.0, 12.0], [2700.0, 8.0], [2800.0, 3.0], [2900.0, 4.0], [3000.0, 8.0], [3100.0, 5.0], [3200.0, 2.0], [3300.0, 7.0], [3400.0, 3.0], [3500.0, 2.0], [3600.0, 2.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 2.0], [4100.0, 2.0], [4200.0, 2.0], [4300.0, 1.0], [4600.0, 2.0], [4400.0, 1.0], [4700.0, 2.0], [4900.0, 1.0], [5100.0, 1.0], [5200.0, 2.0], [5300.0, 1.0], [5500.0, 3.0], [100.0, 71.0], [200.0, 563.0], [300.0, 353.0], [400.0, 590.0], [500.0, 611.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 592.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3016.0, "series": [{"data": [[0.0, 1582.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3016.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 592.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.784688995215312, "minX": 1.6028049E12, "maxY": 10.0, "series": [{"data": [[1.60280508E12, 10.0], [1.60280526E12, 10.0], [1.6028049E12, 10.0], [1.6028052E12, 10.0], [1.60280538E12, 9.784688995215312], [1.60280502E12, 10.0], [1.60280532E12, 10.0], [1.60280496E12, 10.0], [1.60280514E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280538E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 559.0, "minX": 1.0, "maxY": 3106.0, "series": [{"data": [[8.0, 559.0], [4.0, 1312.0], [2.0, 1062.0], [1.0, 3106.0], [9.0, 1769.0], [10.0, 869.0142829569575], [5.0, 811.0], [6.0, 657.0], [3.0, 876.0], [7.0, 1212.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 869.6969171483616]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 655.5166666666667, "minX": 1.6028049E12, "maxY": 3694268.0, "series": [{"data": [[1.60280508E12, 3531021.933333333], [1.60280526E12, 3694268.0], [1.6028049E12, 547460.4166666666], [1.6028052E12, 2552451.966666667], [1.60280538E12, 985209.3], [1.60280502E12, 3336685.966666667], [1.60280532E12, 3115422.45], [1.60280496E12, 3013149.05], [1.60280514E12, 3197141.216666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280508E12, 5398.35], [1.60280526E12, 5385.2], [1.6028049E12, 655.5166666666667], [1.6028052E12, 5128.683333333333], [1.60280538E12, 1569.9166666666667], [1.60280502E12, 5569.933333333333], [1.60280532E12, 5652.45], [1.60280496E12, 4554.466666666666], [1.60280514E12, 4662.816666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280538E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 800.4478609625663, "minX": 1.6028049E12, "maxY": 1166.418604651163, "series": [{"data": [[1.60280508E12, 833.6680731364271], [1.60280526E12, 832.7406380027744], [1.6028049E12, 1166.418604651163], [1.6028052E12, 843.9534555712277], [1.60280538E12, 1058.454545454546], [1.60280502E12, 800.4478609625663], [1.60280532E12, 801.2577181208064], [1.60280496E12, 946.776025236593], [1.60280514E12, 964.5342902711321]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280538E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 798.3957219251339, "minX": 1.6028049E12, "maxY": 1163.6511627906978, "series": [{"data": [[1.60280508E12, 831.5724331926864], [1.60280526E12, 831.0804438280173], [1.6028049E12, 1163.6511627906978], [1.6028052E12, 842.7785613540208], [1.60280538E12, 1056.5598086124398], [1.60280502E12, 798.3957219251339], [1.60280532E12, 799.7892617449653], [1.60280496E12, 944.7555205047316], [1.60280514E12, 962.4625199362052]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280538E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6028049E12, "maxY": 0.953488372093023, "series": [{"data": [[1.60280508E12, 0.018284106891701853], [1.60280526E12, 0.01525658807212206], [1.6028049E12, 0.953488372093023], [1.6028052E12, 0.016925246826516235], [1.60280538E12, 0.0], [1.60280502E12, 0.014705882352941181], [1.60280532E12, 0.013422818791946308], [1.60280496E12, 0.018927444794952675], [1.60280514E12, 0.017543859649122803]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280538E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 180.0, "minX": 1.6028049E12, "maxY": 5598.0, "series": [{"data": [[1.60280508E12, 3076.0], [1.60280526E12, 2949.0], [1.6028049E12, 3548.0], [1.6028052E12, 5182.0], [1.60280538E12, 4024.0], [1.60280502E12, 4696.0], [1.60280532E12, 3427.0], [1.60280496E12, 5397.0], [1.60280514E12, 5598.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280508E12, 201.40799983024598], [1.60280526E12, 196.49799982786178], [1.6028049E12, 187.0], [1.6028052E12, 193.38999983072281], [1.60280538E12, 234.03999819755555], [1.60280502E12, 201.96399928569792], [1.60280532E12, 190.42799964427948], [1.60280496E12, 202.7149998486042], [1.60280514E12, 189.60799940109254]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280508E12, 202.0], [1.60280526E12, 197.14780006885528], [1.6028049E12, 187.0], [1.6028052E12, 194.02900006771088], [1.60280538E12, 239.97500050067902], [1.60280502E12, 203.4151000714302], [1.60280532E12, 191.0], [1.60280496E12, 203.28650006055832], [1.60280514E12, 191.21720005989076]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280508E12, 201.76399991512298], [1.60280526E12, 196.8589999139309], [1.6028049E12, 187.0], [1.6028052E12, 193.7449999153614], [1.60280538E12, 237.81999909877777], [1.60280502E12, 203.11549991071223], [1.60280532E12, 191.0], [1.60280496E12, 203.0324999243021], [1.60280514E12, 190.86399970054626]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280508E12, 190.0], [1.60280526E12, 181.0], [1.6028049E12, 187.0], [1.6028052E12, 190.0], [1.60280538E12, 202.0], [1.60280502E12, 193.0], [1.60280532E12, 180.0], [1.60280496E12, 190.0], [1.60280514E12, 185.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280508E12, 703.0], [1.60280526E12, 651.0], [1.6028049E12, 958.0], [1.6028052E12, 718.0], [1.60280538E12, 908.0], [1.60280502E12, 604.0], [1.60280532E12, 587.0], [1.60280496E12, 802.0], [1.60280514E12, 828.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280538E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 401.5, "minX": 1.0, "maxY": 3106.0, "series": [{"data": [[3.0, 1117.0], [4.0, 1293.0], [5.0, 1595.5], [6.0, 1167.5], [7.0, 1037.5], [8.0, 1030.0], [9.0, 967.0], [10.0, 861.0], [11.0, 807.0], [12.0, 808.0], [13.0, 768.0], [14.0, 632.5], [15.0, 591.0], [16.0, 555.5], [1.0, 3106.0], [17.0, 534.0], [18.0, 468.0], [19.0, 439.5], [20.0, 457.5], [21.0, 419.0], [22.0, 434.0], [23.0, 438.0], [24.0, 420.5], [26.0, 424.0], [27.0, 401.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 401.5, "minX": 1.0, "maxY": 3095.0, "series": [{"data": [[3.0, 1114.0], [4.0, 1290.0], [5.0, 1592.0], [6.0, 1160.0], [7.0, 1036.5], [8.0, 1028.0], [9.0, 965.5], [10.0, 859.0], [11.0, 806.0], [12.0, 807.5], [13.0, 766.5], [14.0, 631.5], [15.0, 590.0], [16.0, 555.0], [1.0, 3095.0], [17.0, 533.0], [18.0, 467.5], [19.0, 439.0], [20.0, 457.5], [21.0, 419.0], [22.0, 434.0], [23.0, 438.0], [24.0, 420.5], [26.0, 424.0], [27.0, 401.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6, "minX": 1.6028049E12, "maxY": 12.466666666666667, "series": [{"data": [[1.60280508E12, 11.85], [1.60280526E12, 12.016666666666667], [1.6028049E12, 1.6], [1.6028052E12, 11.816666666666666], [1.60280538E12, 3.316666666666667], [1.60280502E12, 12.466666666666667], [1.60280532E12, 12.416666666666666], [1.60280496E12, 10.566666666666666], [1.60280514E12, 10.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280538E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.4333333333333333, "minX": 1.6028049E12, "maxY": 12.466666666666667, "series": [{"data": [[1.60280508E12, 11.85], [1.60280526E12, 12.016666666666667], [1.6028049E12, 1.4333333333333333], [1.6028052E12, 11.816666666666666], [1.60280538E12, 3.4833333333333334], [1.60280502E12, 12.466666666666667], [1.60280532E12, 12.416666666666666], [1.60280496E12, 10.566666666666666], [1.60280514E12, 10.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280538E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.4333333333333333, "minX": 1.6028049E12, "maxY": 12.466666666666667, "series": [{"data": [[1.60280508E12, 11.85], [1.60280526E12, 12.016666666666667], [1.6028049E12, 1.4333333333333333], [1.6028052E12, 11.816666666666666], [1.60280538E12, 3.4833333333333334], [1.60280502E12, 12.466666666666667], [1.60280532E12, 12.416666666666666], [1.60280496E12, 10.566666666666666], [1.60280514E12, 10.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280538E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.4333333333333333, "minX": 1.6028049E12, "maxY": 12.466666666666667, "series": [{"data": [[1.60280508E12, 11.85], [1.60280526E12, 12.016666666666667], [1.6028049E12, 1.4333333333333333], [1.6028052E12, 11.816666666666666], [1.60280538E12, 3.4833333333333334], [1.60280502E12, 12.466666666666667], [1.60280532E12, 12.416666666666666], [1.60280496E12, 10.566666666666666], [1.60280514E12, 10.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280538E12, "title": "Total Transactions Per Second"}},
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

