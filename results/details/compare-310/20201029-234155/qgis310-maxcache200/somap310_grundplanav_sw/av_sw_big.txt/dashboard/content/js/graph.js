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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 5731.0, "series": [{"data": [[0.0, 182.0], [0.1, 192.0], [0.2, 193.0], [0.3, 194.0], [0.4, 195.0], [0.5, 197.0], [0.6, 198.0], [0.7, 199.0], [0.8, 200.0], [0.9, 201.0], [1.0, 201.0], [1.1, 204.0], [1.2, 204.0], [1.3, 206.0], [1.4, 207.0], [1.5, 207.0], [1.6, 208.0], [1.7, 208.0], [1.8, 209.0], [1.9, 209.0], [2.0, 210.0], [2.1, 210.0], [2.2, 211.0], [2.3, 212.0], [2.4, 212.0], [2.5, 213.0], [2.6, 214.0], [2.7, 215.0], [2.8, 216.0], [2.9, 216.0], [3.0, 217.0], [3.1, 218.0], [3.2, 220.0], [3.3, 221.0], [3.4, 222.0], [3.5, 223.0], [3.6, 223.0], [3.7, 223.0], [3.8, 224.0], [3.9, 225.0], [4.0, 226.0], [4.1, 227.0], [4.2, 228.0], [4.3, 228.0], [4.4, 230.0], [4.5, 230.0], [4.6, 231.0], [4.7, 232.0], [4.8, 233.0], [4.9, 234.0], [5.0, 235.0], [5.1, 235.0], [5.2, 236.0], [5.3, 237.0], [5.4, 237.0], [5.5, 238.0], [5.6, 239.0], [5.7, 239.0], [5.8, 240.0], [5.9, 242.0], [6.0, 242.0], [6.1, 244.0], [6.2, 245.0], [6.3, 246.0], [6.4, 247.0], [6.5, 247.0], [6.6, 249.0], [6.7, 251.0], [6.8, 252.0], [6.9, 254.0], [7.0, 255.0], [7.1, 256.0], [7.2, 257.0], [7.3, 259.0], [7.4, 259.0], [7.5, 261.0], [7.6, 262.0], [7.7, 264.0], [7.8, 265.0], [7.9, 266.0], [8.0, 267.0], [8.1, 269.0], [8.2, 269.0], [8.3, 270.0], [8.4, 271.0], [8.5, 273.0], [8.6, 274.0], [8.7, 275.0], [8.8, 276.0], [8.9, 277.0], [9.0, 279.0], [9.1, 279.0], [9.2, 280.0], [9.3, 281.0], [9.4, 282.0], [9.5, 282.0], [9.6, 283.0], [9.7, 284.0], [9.8, 284.0], [9.9, 285.0], [10.0, 285.0], [10.1, 286.0], [10.2, 286.0], [10.3, 287.0], [10.4, 287.0], [10.5, 288.0], [10.6, 289.0], [10.7, 290.0], [10.8, 291.0], [10.9, 292.0], [11.0, 293.0], [11.1, 294.0], [11.2, 295.0], [11.3, 296.0], [11.4, 296.0], [11.5, 297.0], [11.6, 297.0], [11.7, 298.0], [11.8, 299.0], [11.9, 300.0], [12.0, 301.0], [12.1, 301.0], [12.2, 302.0], [12.3, 304.0], [12.4, 305.0], [12.5, 307.0], [12.6, 307.0], [12.7, 309.0], [12.8, 311.0], [12.9, 312.0], [13.0, 313.0], [13.1, 314.0], [13.2, 315.0], [13.3, 316.0], [13.4, 316.0], [13.5, 318.0], [13.6, 318.0], [13.7, 319.0], [13.8, 321.0], [13.9, 322.0], [14.0, 324.0], [14.1, 325.0], [14.2, 327.0], [14.3, 327.0], [14.4, 328.0], [14.5, 328.0], [14.6, 329.0], [14.7, 331.0], [14.8, 333.0], [14.9, 335.0], [15.0, 336.0], [15.1, 337.0], [15.2, 338.0], [15.3, 339.0], [15.4, 340.0], [15.5, 343.0], [15.6, 345.0], [15.7, 349.0], [15.8, 349.0], [15.9, 351.0], [16.0, 353.0], [16.1, 355.0], [16.2, 356.0], [16.3, 358.0], [16.4, 360.0], [16.5, 362.0], [16.6, 365.0], [16.7, 367.0], [16.8, 370.0], [16.9, 372.0], [17.0, 374.0], [17.1, 375.0], [17.2, 376.0], [17.3, 377.0], [17.4, 378.0], [17.5, 380.0], [17.6, 382.0], [17.7, 383.0], [17.8, 385.0], [17.9, 386.0], [18.0, 388.0], [18.1, 389.0], [18.2, 390.0], [18.3, 390.0], [18.4, 391.0], [18.5, 392.0], [18.6, 392.0], [18.7, 393.0], [18.8, 394.0], [18.9, 394.0], [19.0, 395.0], [19.1, 396.0], [19.2, 397.0], [19.3, 398.0], [19.4, 399.0], [19.5, 400.0], [19.6, 400.0], [19.7, 401.0], [19.8, 401.0], [19.9, 403.0], [20.0, 403.0], [20.1, 405.0], [20.2, 405.0], [20.3, 406.0], [20.4, 406.0], [20.5, 407.0], [20.6, 408.0], [20.7, 408.0], [20.8, 409.0], [20.9, 410.0], [21.0, 410.0], [21.1, 412.0], [21.2, 413.0], [21.3, 414.0], [21.4, 414.0], [21.5, 415.0], [21.6, 415.0], [21.7, 416.0], [21.8, 417.0], [21.9, 418.0], [22.0, 419.0], [22.1, 419.0], [22.2, 421.0], [22.3, 421.0], [22.4, 422.0], [22.5, 422.0], [22.6, 424.0], [22.7, 425.0], [22.8, 426.0], [22.9, 426.0], [23.0, 428.0], [23.1, 429.0], [23.2, 431.0], [23.3, 432.0], [23.4, 433.0], [23.5, 434.0], [23.6, 435.0], [23.7, 436.0], [23.8, 436.0], [23.9, 438.0], [24.0, 438.0], [24.1, 439.0], [24.2, 439.0], [24.3, 440.0], [24.4, 441.0], [24.5, 442.0], [24.6, 443.0], [24.7, 444.0], [24.8, 444.0], [24.9, 445.0], [25.0, 446.0], [25.1, 448.0], [25.2, 449.0], [25.3, 449.0], [25.4, 450.0], [25.5, 451.0], [25.6, 452.0], [25.7, 453.0], [25.8, 455.0], [25.9, 456.0], [26.0, 457.0], [26.1, 458.0], [26.2, 458.0], [26.3, 459.0], [26.4, 460.0], [26.5, 461.0], [26.6, 462.0], [26.7, 463.0], [26.8, 463.0], [26.9, 464.0], [27.0, 465.0], [27.1, 466.0], [27.2, 466.0], [27.3, 467.0], [27.4, 468.0], [27.5, 468.0], [27.6, 469.0], [27.7, 471.0], [27.8, 472.0], [27.9, 473.0], [28.0, 474.0], [28.1, 475.0], [28.2, 477.0], [28.3, 478.0], [28.4, 479.0], [28.5, 480.0], [28.6, 481.0], [28.7, 481.0], [28.8, 482.0], [28.9, 483.0], [29.0, 484.0], [29.1, 485.0], [29.2, 486.0], [29.3, 486.0], [29.4, 487.0], [29.5, 489.0], [29.6, 490.0], [29.7, 491.0], [29.8, 492.0], [29.9, 494.0], [30.0, 494.0], [30.1, 496.0], [30.2, 497.0], [30.3, 498.0], [30.4, 500.0], [30.5, 501.0], [30.6, 503.0], [30.7, 504.0], [30.8, 504.0], [30.9, 507.0], [31.0, 509.0], [31.1, 510.0], [31.2, 511.0], [31.3, 512.0], [31.4, 514.0], [31.5, 514.0], [31.6, 516.0], [31.7, 517.0], [31.8, 519.0], [31.9, 520.0], [32.0, 521.0], [32.1, 522.0], [32.2, 523.0], [32.3, 524.0], [32.4, 524.0], [32.5, 526.0], [32.6, 527.0], [32.7, 527.0], [32.8, 529.0], [32.9, 529.0], [33.0, 530.0], [33.1, 531.0], [33.2, 531.0], [33.3, 532.0], [33.4, 534.0], [33.5, 534.0], [33.6, 535.0], [33.7, 536.0], [33.8, 537.0], [33.9, 538.0], [34.0, 538.0], [34.1, 539.0], [34.2, 539.0], [34.3, 541.0], [34.4, 541.0], [34.5, 542.0], [34.6, 542.0], [34.7, 544.0], [34.8, 546.0], [34.9, 547.0], [35.0, 548.0], [35.1, 549.0], [35.2, 550.0], [35.3, 551.0], [35.4, 552.0], [35.5, 553.0], [35.6, 554.0], [35.7, 555.0], [35.8, 556.0], [35.9, 557.0], [36.0, 558.0], [36.1, 559.0], [36.2, 560.0], [36.3, 561.0], [36.4, 562.0], [36.5, 563.0], [36.6, 564.0], [36.7, 564.0], [36.8, 565.0], [36.9, 565.0], [37.0, 566.0], [37.1, 567.0], [37.2, 568.0], [37.3, 569.0], [37.4, 570.0], [37.5, 571.0], [37.6, 572.0], [37.7, 572.0], [37.8, 574.0], [37.9, 575.0], [38.0, 575.0], [38.1, 576.0], [38.2, 577.0], [38.3, 578.0], [38.4, 578.0], [38.5, 579.0], [38.6, 581.0], [38.7, 582.0], [38.8, 583.0], [38.9, 583.0], [39.0, 585.0], [39.1, 586.0], [39.2, 587.0], [39.3, 588.0], [39.4, 590.0], [39.5, 591.0], [39.6, 591.0], [39.7, 592.0], [39.8, 594.0], [39.9, 596.0], [40.0, 597.0], [40.1, 599.0], [40.2, 599.0], [40.3, 600.0], [40.4, 600.0], [40.5, 601.0], [40.6, 602.0], [40.7, 603.0], [40.8, 604.0], [40.9, 605.0], [41.0, 606.0], [41.1, 608.0], [41.2, 609.0], [41.3, 610.0], [41.4, 611.0], [41.5, 612.0], [41.6, 614.0], [41.7, 614.0], [41.8, 615.0], [41.9, 616.0], [42.0, 618.0], [42.1, 618.0], [42.2, 619.0], [42.3, 620.0], [42.4, 620.0], [42.5, 620.0], [42.6, 621.0], [42.7, 622.0], [42.8, 623.0], [42.9, 623.0], [43.0, 624.0], [43.1, 625.0], [43.2, 626.0], [43.3, 627.0], [43.4, 628.0], [43.5, 629.0], [43.6, 630.0], [43.7, 631.0], [43.8, 632.0], [43.9, 633.0], [44.0, 634.0], [44.1, 636.0], [44.2, 637.0], [44.3, 639.0], [44.4, 640.0], [44.5, 641.0], [44.6, 642.0], [44.7, 644.0], [44.8, 645.0], [44.9, 646.0], [45.0, 647.0], [45.1, 649.0], [45.2, 650.0], [45.3, 652.0], [45.4, 653.0], [45.5, 654.0], [45.6, 655.0], [45.7, 656.0], [45.8, 658.0], [45.9, 659.0], [46.0, 660.0], [46.1, 661.0], [46.2, 662.0], [46.3, 663.0], [46.4, 665.0], [46.5, 666.0], [46.6, 667.0], [46.7, 669.0], [46.8, 669.0], [46.9, 671.0], [47.0, 671.0], [47.1, 672.0], [47.2, 673.0], [47.3, 674.0], [47.4, 676.0], [47.5, 677.0], [47.6, 678.0], [47.7, 680.0], [47.8, 681.0], [47.9, 682.0], [48.0, 684.0], [48.1, 685.0], [48.2, 686.0], [48.3, 687.0], [48.4, 689.0], [48.5, 692.0], [48.6, 693.0], [48.7, 694.0], [48.8, 696.0], [48.9, 696.0], [49.0, 698.0], [49.1, 699.0], [49.2, 701.0], [49.3, 701.0], [49.4, 702.0], [49.5, 704.0], [49.6, 706.0], [49.7, 708.0], [49.8, 708.0], [49.9, 709.0], [50.0, 710.0], [50.1, 712.0], [50.2, 713.0], [50.3, 714.0], [50.4, 716.0], [50.5, 716.0], [50.6, 718.0], [50.7, 719.0], [50.8, 720.0], [50.9, 722.0], [51.0, 723.0], [51.1, 724.0], [51.2, 725.0], [51.3, 726.0], [51.4, 727.0], [51.5, 728.0], [51.6, 730.0], [51.7, 731.0], [51.8, 732.0], [51.9, 733.0], [52.0, 734.0], [52.1, 737.0], [52.2, 739.0], [52.3, 740.0], [52.4, 740.0], [52.5, 741.0], [52.6, 743.0], [52.7, 745.0], [52.8, 746.0], [52.9, 747.0], [53.0, 747.0], [53.1, 748.0], [53.2, 751.0], [53.3, 753.0], [53.4, 754.0], [53.5, 757.0], [53.6, 759.0], [53.7, 761.0], [53.8, 762.0], [53.9, 764.0], [54.0, 764.0], [54.1, 765.0], [54.2, 767.0], [54.3, 770.0], [54.4, 771.0], [54.5, 772.0], [54.6, 775.0], [54.7, 777.0], [54.8, 779.0], [54.9, 780.0], [55.0, 782.0], [55.1, 783.0], [55.2, 786.0], [55.3, 788.0], [55.4, 792.0], [55.5, 794.0], [55.6, 795.0], [55.7, 797.0], [55.8, 802.0], [55.9, 805.0], [56.0, 806.0], [56.1, 808.0], [56.2, 808.0], [56.3, 810.0], [56.4, 812.0], [56.5, 814.0], [56.6, 815.0], [56.7, 818.0], [56.8, 818.0], [56.9, 821.0], [57.0, 824.0], [57.1, 826.0], [57.2, 829.0], [57.3, 831.0], [57.4, 834.0], [57.5, 837.0], [57.6, 838.0], [57.7, 840.0], [57.8, 843.0], [57.9, 844.0], [58.0, 845.0], [58.1, 847.0], [58.2, 848.0], [58.3, 849.0], [58.4, 851.0], [58.5, 852.0], [58.6, 854.0], [58.7, 855.0], [58.8, 857.0], [58.9, 859.0], [59.0, 861.0], [59.1, 862.0], [59.2, 863.0], [59.3, 864.0], [59.4, 868.0], [59.5, 869.0], [59.6, 871.0], [59.7, 873.0], [59.8, 876.0], [59.9, 877.0], [60.0, 878.0], [60.1, 881.0], [60.2, 885.0], [60.3, 887.0], [60.4, 888.0], [60.5, 890.0], [60.6, 894.0], [60.7, 895.0], [60.8, 896.0], [60.9, 898.0], [61.0, 901.0], [61.1, 903.0], [61.2, 904.0], [61.3, 905.0], [61.4, 906.0], [61.5, 908.0], [61.6, 909.0], [61.7, 911.0], [61.8, 911.0], [61.9, 913.0], [62.0, 916.0], [62.1, 917.0], [62.2, 919.0], [62.3, 922.0], [62.4, 923.0], [62.5, 924.0], [62.6, 925.0], [62.7, 926.0], [62.8, 927.0], [62.9, 929.0], [63.0, 930.0], [63.1, 932.0], [63.2, 933.0], [63.3, 933.0], [63.4, 934.0], [63.5, 935.0], [63.6, 938.0], [63.7, 939.0], [63.8, 941.0], [63.9, 944.0], [64.0, 948.0], [64.1, 950.0], [64.2, 951.0], [64.3, 953.0], [64.4, 955.0], [64.5, 956.0], [64.6, 958.0], [64.7, 960.0], [64.8, 963.0], [64.9, 965.0], [65.0, 967.0], [65.1, 968.0], [65.2, 970.0], [65.3, 973.0], [65.4, 978.0], [65.5, 980.0], [65.6, 982.0], [65.7, 984.0], [65.8, 986.0], [65.9, 987.0], [66.0, 988.0], [66.1, 990.0], [66.2, 991.0], [66.3, 994.0], [66.4, 996.0], [66.5, 996.0], [66.6, 998.0], [66.7, 999.0], [66.8, 1002.0], [66.9, 1004.0], [67.0, 1006.0], [67.1, 1007.0], [67.2, 1009.0], [67.3, 1010.0], [67.4, 1012.0], [67.5, 1015.0], [67.6, 1018.0], [67.7, 1021.0], [67.8, 1022.0], [67.9, 1025.0], [68.0, 1027.0], [68.1, 1029.0], [68.2, 1031.0], [68.3, 1032.0], [68.4, 1035.0], [68.5, 1039.0], [68.6, 1040.0], [68.7, 1043.0], [68.8, 1045.0], [68.9, 1048.0], [69.0, 1050.0], [69.1, 1053.0], [69.2, 1056.0], [69.3, 1057.0], [69.4, 1060.0], [69.5, 1061.0], [69.6, 1065.0], [69.7, 1066.0], [69.8, 1069.0], [69.9, 1070.0], [70.0, 1071.0], [70.1, 1075.0], [70.2, 1075.0], [70.3, 1079.0], [70.4, 1082.0], [70.5, 1083.0], [70.6, 1085.0], [70.7, 1086.0], [70.8, 1089.0], [70.9, 1091.0], [71.0, 1092.0], [71.1, 1095.0], [71.2, 1096.0], [71.3, 1098.0], [71.4, 1100.0], [71.5, 1101.0], [71.6, 1102.0], [71.7, 1104.0], [71.8, 1105.0], [71.9, 1107.0], [72.0, 1108.0], [72.1, 1109.0], [72.2, 1111.0], [72.3, 1114.0], [72.4, 1115.0], [72.5, 1117.0], [72.6, 1120.0], [72.7, 1123.0], [72.8, 1126.0], [72.9, 1129.0], [73.0, 1131.0], [73.1, 1133.0], [73.2, 1137.0], [73.3, 1138.0], [73.4, 1140.0], [73.5, 1143.0], [73.6, 1145.0], [73.7, 1148.0], [73.8, 1151.0], [73.9, 1154.0], [74.0, 1156.0], [74.1, 1157.0], [74.2, 1159.0], [74.3, 1164.0], [74.4, 1168.0], [74.5, 1169.0], [74.6, 1172.0], [74.7, 1174.0], [74.8, 1177.0], [74.9, 1179.0], [75.0, 1185.0], [75.1, 1188.0], [75.2, 1191.0], [75.3, 1193.0], [75.4, 1197.0], [75.5, 1200.0], [75.6, 1201.0], [75.7, 1202.0], [75.8, 1204.0], [75.9, 1205.0], [76.0, 1208.0], [76.1, 1210.0], [76.2, 1214.0], [76.3, 1218.0], [76.4, 1220.0], [76.5, 1222.0], [76.6, 1224.0], [76.7, 1230.0], [76.8, 1232.0], [76.9, 1236.0], [77.0, 1239.0], [77.1, 1242.0], [77.2, 1246.0], [77.3, 1248.0], [77.4, 1250.0], [77.5, 1252.0], [77.6, 1255.0], [77.7, 1257.0], [77.8, 1259.0], [77.9, 1260.0], [78.0, 1263.0], [78.1, 1264.0], [78.2, 1267.0], [78.3, 1268.0], [78.4, 1270.0], [78.5, 1272.0], [78.6, 1274.0], [78.7, 1276.0], [78.8, 1277.0], [78.9, 1280.0], [79.0, 1281.0], [79.1, 1284.0], [79.2, 1285.0], [79.3, 1289.0], [79.4, 1291.0], [79.5, 1294.0], [79.6, 1295.0], [79.7, 1297.0], [79.8, 1301.0], [79.9, 1303.0], [80.0, 1306.0], [80.1, 1308.0], [80.2, 1312.0], [80.3, 1315.0], [80.4, 1318.0], [80.5, 1320.0], [80.6, 1322.0], [80.7, 1323.0], [80.8, 1327.0], [80.9, 1329.0], [81.0, 1331.0], [81.1, 1333.0], [81.2, 1335.0], [81.3, 1338.0], [81.4, 1340.0], [81.5, 1344.0], [81.6, 1345.0], [81.7, 1348.0], [81.8, 1350.0], [81.9, 1352.0], [82.0, 1354.0], [82.1, 1356.0], [82.2, 1359.0], [82.3, 1361.0], [82.4, 1362.0], [82.5, 1366.0], [82.6, 1368.0], [82.7, 1371.0], [82.8, 1373.0], [82.9, 1376.0], [83.0, 1378.0], [83.1, 1379.0], [83.2, 1381.0], [83.3, 1382.0], [83.4, 1384.0], [83.5, 1386.0], [83.6, 1388.0], [83.7, 1391.0], [83.8, 1393.0], [83.9, 1395.0], [84.0, 1400.0], [84.1, 1404.0], [84.2, 1406.0], [84.3, 1409.0], [84.4, 1411.0], [84.5, 1412.0], [84.6, 1414.0], [84.7, 1418.0], [84.8, 1419.0], [84.9, 1422.0], [85.0, 1424.0], [85.1, 1426.0], [85.2, 1428.0], [85.3, 1430.0], [85.4, 1432.0], [85.5, 1435.0], [85.6, 1439.0], [85.7, 1443.0], [85.8, 1448.0], [85.9, 1450.0], [86.0, 1453.0], [86.1, 1457.0], [86.2, 1461.0], [86.3, 1463.0], [86.4, 1465.0], [86.5, 1468.0], [86.6, 1471.0], [86.7, 1473.0], [86.8, 1476.0], [86.9, 1481.0], [87.0, 1483.0], [87.1, 1488.0], [87.2, 1490.0], [87.3, 1492.0], [87.4, 1499.0], [87.5, 1500.0], [87.6, 1504.0], [87.7, 1509.0], [87.8, 1513.0], [87.9, 1516.0], [88.0, 1517.0], [88.1, 1520.0], [88.2, 1523.0], [88.3, 1526.0], [88.4, 1530.0], [88.5, 1534.0], [88.6, 1536.0], [88.7, 1539.0], [88.8, 1540.0], [88.9, 1548.0], [89.0, 1553.0], [89.1, 1556.0], [89.2, 1558.0], [89.3, 1560.0], [89.4, 1566.0], [89.5, 1570.0], [89.6, 1573.0], [89.7, 1583.0], [89.8, 1588.0], [89.9, 1590.0], [90.0, 1596.0], [90.1, 1603.0], [90.2, 1611.0], [90.3, 1616.0], [90.4, 1619.0], [90.5, 1623.0], [90.6, 1628.0], [90.7, 1633.0], [90.8, 1638.0], [90.9, 1640.0], [91.0, 1644.0], [91.1, 1651.0], [91.2, 1658.0], [91.3, 1667.0], [91.4, 1672.0], [91.5, 1678.0], [91.6, 1685.0], [91.7, 1692.0], [91.8, 1698.0], [91.9, 1705.0], [92.0, 1714.0], [92.1, 1723.0], [92.2, 1731.0], [92.3, 1737.0], [92.4, 1744.0], [92.5, 1750.0], [92.6, 1759.0], [92.7, 1768.0], [92.8, 1780.0], [92.9, 1785.0], [93.0, 1792.0], [93.1, 1800.0], [93.2, 1803.0], [93.3, 1822.0], [93.4, 1828.0], [93.5, 1831.0], [93.6, 1833.0], [93.7, 1843.0], [93.8, 1854.0], [93.9, 1868.0], [94.0, 1881.0], [94.1, 1896.0], [94.2, 1902.0], [94.3, 1914.0], [94.4, 1924.0], [94.5, 1934.0], [94.6, 1942.0], [94.7, 1948.0], [94.8, 1955.0], [94.9, 1962.0], [95.0, 1969.0], [95.1, 1979.0], [95.2, 1992.0], [95.3, 2013.0], [95.4, 2023.0], [95.5, 2035.0], [95.6, 2042.0], [95.7, 2050.0], [95.8, 2062.0], [95.9, 2070.0], [96.0, 2086.0], [96.1, 2092.0], [96.2, 2103.0], [96.3, 2110.0], [96.4, 2139.0], [96.5, 2143.0], [96.6, 2165.0], [96.7, 2173.0], [96.8, 2195.0], [96.9, 2212.0], [97.0, 2238.0], [97.1, 2248.0], [97.2, 2263.0], [97.3, 2274.0], [97.4, 2285.0], [97.5, 2301.0], [97.6, 2321.0], [97.7, 2342.0], [97.8, 2361.0], [97.9, 2402.0], [98.0, 2432.0], [98.1, 2458.0], [98.2, 2468.0], [98.3, 2486.0], [98.4, 2513.0], [98.5, 2558.0], [98.6, 2593.0], [98.7, 2657.0], [98.8, 2710.0], [98.9, 2762.0], [99.0, 2825.0], [99.1, 2877.0], [99.2, 2971.0], [99.3, 3163.0], [99.4, 3309.0], [99.5, 3417.0], [99.6, 3593.0], [99.7, 4126.0], [99.8, 4633.0], [99.9, 4998.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 576.0, "series": [{"data": [[600.0, 463.0], [700.0, 343.0], [800.0, 269.0], [900.0, 301.0], [1000.0, 242.0], [1100.0, 213.0], [1200.0, 221.0], [1300.0, 219.0], [1400.0, 181.0], [1500.0, 134.0], [1600.0, 94.0], [100.0, 38.0], [1700.0, 64.0], [1800.0, 55.0], [1900.0, 57.0], [2000.0, 48.0], [2100.0, 33.0], [2300.0, 21.0], [2200.0, 36.0], [2400.0, 24.0], [2500.0, 13.0], [2600.0, 9.0], [2800.0, 10.0], [2700.0, 9.0], [2900.0, 4.0], [3000.0, 2.0], [3100.0, 2.0], [3300.0, 6.0], [3200.0, 4.0], [200.0, 576.0], [3400.0, 4.0], [3500.0, 2.0], [3700.0, 1.0], [4000.0, 3.0], [4200.0, 1.0], [4100.0, 2.0], [4400.0, 1.0], [4600.0, 2.0], [4500.0, 1.0], [300.0, 395.0], [4700.0, 2.0], [5000.0, 2.0], [4900.0, 2.0], [5200.0, 1.0], [5300.0, 1.0], [5700.0, 1.0], [400.0, 566.0], [500.0, 512.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 646.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2964.0, "series": [{"data": [[0.0, 1580.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2964.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 646.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.889975550122248, "minX": 1.6040166E12, "maxY": 10.0, "series": [{"data": [[1.6040169E12, 10.0], [1.60401672E12, 10.0], [1.60401678E12, 10.0], [1.6040166E12, 10.0], [1.60401666E12, 10.0], [1.60401696E12, 10.0], [1.60401702E12, 9.889975550122248], [1.60401684E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401702E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 267.0, "minX": 1.0, "maxY": 2828.0, "series": [{"data": [[8.0, 267.0], [4.0, 1652.0], [2.0, 636.0], [1.0, 2828.0], [9.0, 438.0], [10.0, 875.9899633275437], [5.0, 733.0], [6.0, 591.0], [3.0, 766.0], [7.0, 1218.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 876.2298651252416]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3083.55, "minX": 1.6040166E12, "maxY": 3447756.1333333333, "series": [{"data": [[1.6040169E12, 3218157.433333333], [1.60401672E12, 3447756.1333333333], [1.60401678E12, 3317468.75], [1.6040166E12, 3080232.066666667], [1.60401666E12, 2928932.6666666665], [1.60401696E12, 3131063.966666667], [1.60401702E12, 1840285.5666666667], [1.60401684E12, 3008659.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6040169E12, 5474.45], [1.60401672E12, 5275.333333333333], [1.60401678E12, 5294.216666666666], [1.6040166E12, 4379.033333333334], [1.60401666E12, 5020.933333333333], [1.60401696E12, 5520.933333333333], [1.60401702E12, 3083.55], [1.60401684E12, 4528.883333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401702E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 810.7675675675669, "minX": 1.6040166E12, "maxY": 946.7258320126782, "series": [{"data": [[1.6040169E12, 810.7675675675669], [1.60401672E12, 860.6330935251791], [1.60401678E12, 855.7606837606836], [1.6040166E12, 945.2578512396698], [1.60401666E12, 878.5447870778271], [1.60401696E12, 819.8651994497933], [1.60401702E12, 941.7726161369196], [1.60401684E12, 946.7258320126782]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401702E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 809.2527027027024, "minX": 1.6040166E12, "maxY": 945.1727416798724, "series": [{"data": [[1.6040169E12, 809.2527027027024], [1.60401672E12, 858.3122302158271], [1.60401678E12, 853.7834757834763], [1.6040166E12, 943.0876033057839], [1.60401666E12, 876.5007342143904], [1.60401696E12, 818.467675378267], [1.60401702E12, 940.190709046455], [1.60401684E12, 945.1727416798724]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401702E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.012224938875305631, "minX": 1.6040166E12, "maxY": 0.1834710743801653, "series": [{"data": [[1.6040169E12, 0.021621621621621626], [1.60401672E12, 0.015827338129496427], [1.60401678E12, 0.02564102564102564], [1.6040166E12, 0.1834710743801653], [1.60401666E12, 0.017621145374449344], [1.60401696E12, 0.017881705639614855], [1.60401702E12, 0.012224938875305631], [1.60401684E12, 0.019017432646592707]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401702E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.6040166E12, "maxY": 5731.0, "series": [{"data": [[1.6040169E12, 3417.0], [1.60401672E12, 2960.0], [1.60401678E12, 4564.0], [1.6040166E12, 5224.0], [1.60401666E12, 4264.0], [1.60401696E12, 3136.0], [1.60401702E12, 3593.0], [1.60401684E12, 5731.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6040169E12, 203.66899982333183], [1.60401672E12, 197.26399983406066], [1.60401678E12, 198.32699983239175], [1.6040166E12, 210.0], [1.60401666E12, 205.13799983739852], [1.60401696E12, 201.0], [1.60401702E12, 197.0], [1.60401684E12, 194.3759996986389]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6040169E12, 204.0], [1.60401672E12, 197.89040006637572], [1.60401678E12, 198.95970006704331], [1.6040166E12, 210.0], [1.60401666E12, 205.75180006504058], [1.60401696E12, 201.2072000694275], [1.60401702E12, 197.1180000782013], [1.60401684E12, 195.2568000602722]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6040169E12, 204.0], [1.60401672E12, 197.61199991703035], [1.60401678E12, 198.67849991619588], [1.6040166E12, 210.0], [1.60401666E12, 205.47899991869926], [1.60401696E12, 201.0], [1.60401702E12, 197.0], [1.60401684E12, 195.00399992465972]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6040169E12, 195.0], [1.60401672E12, 182.0], [1.60401678E12, 183.0], [1.6040166E12, 201.0], [1.60401666E12, 195.0], [1.60401696E12, 192.0], [1.60401702E12, 193.0], [1.60401684E12, 188.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6040169E12, 635.0], [1.60401672E12, 701.0], [1.60401678E12, 696.5], [1.6040166E12, 756.0], [1.60401666E12, 672.0], [1.60401696E12, 662.0], [1.60401702E12, 772.0], [1.60401684E12, 808.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401702E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 388.5, "minX": 1.0, "maxY": 2743.0, "series": [{"data": [[4.0, 2004.0], [5.0, 1252.0], [6.0, 1239.0], [7.0, 1138.0], [8.0, 982.0], [9.0, 919.0], [10.0, 862.5], [11.0, 814.0], [12.0, 764.0], [13.0, 731.0], [14.0, 703.0], [15.0, 628.0], [1.0, 2743.0], [16.0, 547.5], [17.0, 537.0], [18.0, 457.5], [19.0, 492.0], [20.0, 431.5], [21.0, 458.0], [22.0, 430.5], [23.0, 431.5], [24.0, 428.0], [25.0, 420.0], [26.0, 412.5], [27.0, 393.0], [28.0, 388.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 388.5, "minX": 1.0, "maxY": 2735.5, "series": [{"data": [[4.0, 1998.5], [5.0, 1247.0], [6.0, 1234.5], [7.0, 1137.0], [8.0, 980.0], [9.0, 919.0], [10.0, 862.0], [11.0, 813.0], [12.0, 763.0], [13.0, 729.5], [14.0, 702.0], [15.0, 628.0], [1.0, 2735.5], [16.0, 547.5], [17.0, 537.0], [18.0, 457.5], [19.0, 492.0], [20.0, 431.0], [21.0, 458.0], [22.0, 430.0], [23.0, 431.5], [24.0, 428.0], [25.0, 420.0], [26.0, 411.5], [27.0, 393.0], [28.0, 388.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.65, "minX": 1.6040166E12, "maxY": 12.333333333333334, "series": [{"data": [[1.6040169E12, 12.333333333333334], [1.60401672E12, 11.6], [1.60401678E12, 11.7], [1.6040166E12, 10.25], [1.60401666E12, 11.333333333333334], [1.60401696E12, 12.116666666666667], [1.60401702E12, 6.65], [1.60401684E12, 10.516666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401702E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.816666666666666, "minX": 1.6040166E12, "maxY": 12.333333333333334, "series": [{"data": [[1.6040169E12, 12.333333333333334], [1.60401672E12, 11.583333333333334], [1.60401678E12, 11.7], [1.6040166E12, 10.083333333333334], [1.60401666E12, 11.35], [1.60401696E12, 12.116666666666667], [1.60401702E12, 6.816666666666666], [1.60401684E12, 10.516666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401702E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.816666666666666, "minX": 1.6040166E12, "maxY": 12.333333333333334, "series": [{"data": [[1.6040169E12, 12.333333333333334], [1.60401672E12, 11.583333333333334], [1.60401678E12, 11.7], [1.6040166E12, 10.083333333333334], [1.60401666E12, 11.35], [1.60401696E12, 12.116666666666667], [1.60401702E12, 6.816666666666666], [1.60401684E12, 10.516666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401702E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.816666666666666, "minX": 1.6040166E12, "maxY": 12.333333333333334, "series": [{"data": [[1.6040169E12, 12.333333333333334], [1.60401672E12, 11.583333333333334], [1.60401678E12, 11.7], [1.6040166E12, 10.083333333333334], [1.60401666E12, 11.35], [1.60401696E12, 12.116666666666667], [1.60401702E12, 6.816666666666666], [1.60401684E12, 10.516666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401702E12, "title": "Total Transactions Per Second"}},
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

