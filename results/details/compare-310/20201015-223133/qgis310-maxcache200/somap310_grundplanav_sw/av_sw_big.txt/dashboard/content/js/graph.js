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
        data: {"result": {"minY": 178.0, "minX": 0.0, "maxY": 5892.0, "series": [{"data": [[0.0, 178.0], [0.1, 185.0], [0.2, 187.0], [0.3, 189.0], [0.4, 190.0], [0.5, 191.0], [0.6, 192.0], [0.7, 192.0], [0.8, 193.0], [0.9, 194.0], [1.0, 195.0], [1.1, 197.0], [1.2, 197.0], [1.3, 198.0], [1.4, 198.0], [1.5, 199.0], [1.6, 200.0], [1.7, 200.0], [1.8, 200.0], [1.9, 201.0], [2.0, 201.0], [2.1, 202.0], [2.2, 203.0], [2.3, 203.0], [2.4, 204.0], [2.5, 205.0], [2.6, 206.0], [2.7, 207.0], [2.8, 207.0], [2.9, 208.0], [3.0, 209.0], [3.1, 210.0], [3.2, 211.0], [3.3, 212.0], [3.4, 212.0], [3.5, 213.0], [3.6, 213.0], [3.7, 215.0], [3.8, 215.0], [3.9, 216.0], [4.0, 216.0], [4.1, 218.0], [4.2, 218.0], [4.3, 218.0], [4.4, 219.0], [4.5, 220.0], [4.6, 221.0], [4.7, 221.0], [4.8, 222.0], [4.9, 223.0], [5.0, 224.0], [5.1, 225.0], [5.2, 226.0], [5.3, 226.0], [5.4, 227.0], [5.5, 227.0], [5.6, 228.0], [5.7, 228.0], [5.8, 229.0], [5.9, 231.0], [6.0, 231.0], [6.1, 232.0], [6.2, 232.0], [6.3, 233.0], [6.4, 235.0], [6.5, 235.0], [6.6, 236.0], [6.7, 237.0], [6.8, 238.0], [6.9, 239.0], [7.0, 243.0], [7.1, 244.0], [7.2, 244.0], [7.3, 246.0], [7.4, 248.0], [7.5, 249.0], [7.6, 250.0], [7.7, 251.0], [7.8, 252.0], [7.9, 253.0], [8.0, 254.0], [8.1, 255.0], [8.2, 256.0], [8.3, 257.0], [8.4, 258.0], [8.5, 261.0], [8.6, 262.0], [8.7, 263.0], [8.8, 264.0], [8.9, 265.0], [9.0, 266.0], [9.1, 267.0], [9.2, 268.0], [9.3, 269.0], [9.4, 270.0], [9.5, 271.0], [9.6, 271.0], [9.7, 273.0], [9.8, 274.0], [9.9, 275.0], [10.0, 276.0], [10.1, 276.0], [10.2, 277.0], [10.3, 277.0], [10.4, 278.0], [10.5, 279.0], [10.6, 279.0], [10.7, 280.0], [10.8, 281.0], [10.9, 283.0], [11.0, 284.0], [11.1, 286.0], [11.2, 287.0], [11.3, 288.0], [11.4, 289.0], [11.5, 290.0], [11.6, 291.0], [11.7, 292.0], [11.8, 293.0], [11.9, 293.0], [12.0, 294.0], [12.1, 295.0], [12.2, 297.0], [12.3, 298.0], [12.4, 300.0], [12.5, 301.0], [12.6, 302.0], [12.7, 303.0], [12.8, 306.0], [12.9, 307.0], [13.0, 307.0], [13.1, 308.0], [13.2, 309.0], [13.3, 311.0], [13.4, 311.0], [13.5, 312.0], [13.6, 313.0], [13.7, 314.0], [13.8, 316.0], [13.9, 317.0], [14.0, 318.0], [14.1, 319.0], [14.2, 320.0], [14.3, 321.0], [14.4, 322.0], [14.5, 322.0], [14.6, 322.0], [14.7, 323.0], [14.8, 324.0], [14.9, 325.0], [15.0, 326.0], [15.1, 326.0], [15.2, 327.0], [15.3, 330.0], [15.4, 331.0], [15.5, 333.0], [15.6, 333.0], [15.7, 335.0], [15.8, 336.0], [15.9, 337.0], [16.0, 340.0], [16.1, 341.0], [16.2, 342.0], [16.3, 346.0], [16.4, 348.0], [16.5, 350.0], [16.6, 350.0], [16.7, 351.0], [16.8, 353.0], [16.9, 356.0], [17.0, 357.0], [17.1, 358.0], [17.2, 360.0], [17.3, 362.0], [17.4, 366.0], [17.5, 369.0], [17.6, 370.0], [17.7, 371.0], [17.8, 373.0], [17.9, 376.0], [18.0, 377.0], [18.1, 378.0], [18.2, 378.0], [18.3, 379.0], [18.4, 380.0], [18.5, 380.0], [18.6, 381.0], [18.7, 382.0], [18.8, 383.0], [18.9, 384.0], [19.0, 385.0], [19.1, 386.0], [19.2, 387.0], [19.3, 388.0], [19.4, 389.0], [19.5, 389.0], [19.6, 390.0], [19.7, 391.0], [19.8, 391.0], [19.9, 392.0], [20.0, 392.0], [20.1, 393.0], [20.2, 393.0], [20.3, 394.0], [20.4, 395.0], [20.5, 396.0], [20.6, 396.0], [20.7, 397.0], [20.8, 398.0], [20.9, 399.0], [21.0, 400.0], [21.1, 401.0], [21.2, 402.0], [21.3, 403.0], [21.4, 404.0], [21.5, 405.0], [21.6, 406.0], [21.7, 406.0], [21.8, 408.0], [21.9, 408.0], [22.0, 409.0], [22.1, 409.0], [22.2, 410.0], [22.3, 411.0], [22.4, 412.0], [22.5, 412.0], [22.6, 414.0], [22.7, 414.0], [22.8, 415.0], [22.9, 415.0], [23.0, 416.0], [23.1, 417.0], [23.2, 418.0], [23.3, 419.0], [23.4, 420.0], [23.5, 421.0], [23.6, 422.0], [23.7, 423.0], [23.8, 424.0], [23.9, 426.0], [24.0, 427.0], [24.1, 427.0], [24.2, 428.0], [24.3, 429.0], [24.4, 429.0], [24.5, 430.0], [24.6, 431.0], [24.7, 432.0], [24.8, 433.0], [24.9, 434.0], [25.0, 435.0], [25.1, 436.0], [25.2, 437.0], [25.3, 438.0], [25.4, 438.0], [25.5, 440.0], [25.6, 441.0], [25.7, 442.0], [25.8, 442.0], [25.9, 443.0], [26.0, 444.0], [26.1, 445.0], [26.2, 446.0], [26.3, 447.0], [26.4, 447.0], [26.5, 449.0], [26.6, 450.0], [26.7, 451.0], [26.8, 451.0], [26.9, 452.0], [27.0, 454.0], [27.1, 455.0], [27.2, 456.0], [27.3, 456.0], [27.4, 457.0], [27.5, 458.0], [27.6, 458.0], [27.7, 460.0], [27.8, 460.0], [27.9, 462.0], [28.0, 462.0], [28.1, 463.0], [28.2, 464.0], [28.3, 464.0], [28.4, 465.0], [28.5, 466.0], [28.6, 467.0], [28.7, 468.0], [28.8, 469.0], [28.9, 470.0], [29.0, 471.0], [29.1, 472.0], [29.2, 472.0], [29.3, 473.0], [29.4, 474.0], [29.5, 477.0], [29.6, 477.0], [29.7, 479.0], [29.8, 480.0], [29.9, 481.0], [30.0, 481.0], [30.1, 483.0], [30.2, 485.0], [30.3, 486.0], [30.4, 488.0], [30.5, 489.0], [30.6, 490.0], [30.7, 490.0], [30.8, 491.0], [30.9, 491.0], [31.0, 492.0], [31.1, 494.0], [31.2, 494.0], [31.3, 496.0], [31.4, 497.0], [31.5, 497.0], [31.6, 499.0], [31.7, 501.0], [31.8, 502.0], [31.9, 503.0], [32.0, 505.0], [32.1, 507.0], [32.2, 508.0], [32.3, 509.0], [32.4, 510.0], [32.5, 512.0], [32.6, 513.0], [32.7, 515.0], [32.8, 515.0], [32.9, 516.0], [33.0, 517.0], [33.1, 520.0], [33.2, 521.0], [33.3, 522.0], [33.4, 523.0], [33.5, 524.0], [33.6, 525.0], [33.7, 527.0], [33.8, 527.0], [33.9, 529.0], [34.0, 530.0], [34.1, 532.0], [34.2, 532.0], [34.3, 533.0], [34.4, 535.0], [34.5, 535.0], [34.6, 536.0], [34.7, 536.0], [34.8, 537.0], [34.9, 538.0], [35.0, 539.0], [35.1, 540.0], [35.2, 540.0], [35.3, 541.0], [35.4, 542.0], [35.5, 542.0], [35.6, 543.0], [35.7, 544.0], [35.8, 545.0], [35.9, 545.0], [36.0, 546.0], [36.1, 547.0], [36.2, 547.0], [36.3, 549.0], [36.4, 550.0], [36.5, 550.0], [36.6, 551.0], [36.7, 552.0], [36.8, 553.0], [36.9, 554.0], [37.0, 554.0], [37.1, 555.0], [37.2, 555.0], [37.3, 556.0], [37.4, 558.0], [37.5, 558.0], [37.6, 559.0], [37.7, 560.0], [37.8, 561.0], [37.9, 562.0], [38.0, 563.0], [38.1, 564.0], [38.2, 565.0], [38.3, 566.0], [38.4, 566.0], [38.5, 567.0], [38.6, 568.0], [38.7, 568.0], [38.8, 569.0], [38.9, 570.0], [39.0, 571.0], [39.1, 571.0], [39.2, 572.0], [39.3, 573.0], [39.4, 575.0], [39.5, 576.0], [39.6, 577.0], [39.7, 578.0], [39.8, 579.0], [39.9, 579.0], [40.0, 579.0], [40.1, 581.0], [40.2, 582.0], [40.3, 583.0], [40.4, 584.0], [40.5, 585.0], [40.6, 586.0], [40.7, 586.0], [40.8, 587.0], [40.9, 587.0], [41.0, 588.0], [41.1, 589.0], [41.2, 590.0], [41.3, 591.0], [41.4, 591.0], [41.5, 592.0], [41.6, 594.0], [41.7, 594.0], [41.8, 595.0], [41.9, 596.0], [42.0, 596.0], [42.1, 597.0], [42.2, 599.0], [42.3, 599.0], [42.4, 600.0], [42.5, 601.0], [42.6, 603.0], [42.7, 603.0], [42.8, 605.0], [42.9, 607.0], [43.0, 608.0], [43.1, 609.0], [43.2, 610.0], [43.3, 612.0], [43.4, 613.0], [43.5, 614.0], [43.6, 615.0], [43.7, 617.0], [43.8, 618.0], [43.9, 619.0], [44.0, 620.0], [44.1, 622.0], [44.2, 623.0], [44.3, 624.0], [44.4, 626.0], [44.5, 627.0], [44.6, 628.0], [44.7, 629.0], [44.8, 631.0], [44.9, 633.0], [45.0, 634.0], [45.1, 636.0], [45.2, 637.0], [45.3, 639.0], [45.4, 640.0], [45.5, 641.0], [45.6, 643.0], [45.7, 645.0], [45.8, 646.0], [45.9, 649.0], [46.0, 651.0], [46.1, 652.0], [46.2, 653.0], [46.3, 654.0], [46.4, 656.0], [46.5, 657.0], [46.6, 659.0], [46.7, 661.0], [46.8, 662.0], [46.9, 663.0], [47.0, 665.0], [47.1, 666.0], [47.2, 667.0], [47.3, 669.0], [47.4, 670.0], [47.5, 673.0], [47.6, 674.0], [47.7, 674.0], [47.8, 676.0], [47.9, 678.0], [48.0, 680.0], [48.1, 681.0], [48.2, 682.0], [48.3, 684.0], [48.4, 685.0], [48.5, 687.0], [48.6, 689.0], [48.7, 691.0], [48.8, 692.0], [48.9, 693.0], [49.0, 694.0], [49.1, 696.0], [49.2, 697.0], [49.3, 698.0], [49.4, 699.0], [49.5, 701.0], [49.6, 702.0], [49.7, 703.0], [49.8, 704.0], [49.9, 706.0], [50.0, 708.0], [50.1, 709.0], [50.2, 711.0], [50.3, 712.0], [50.4, 713.0], [50.5, 714.0], [50.6, 716.0], [50.7, 717.0], [50.8, 719.0], [50.9, 721.0], [51.0, 723.0], [51.1, 724.0], [51.2, 725.0], [51.3, 726.0], [51.4, 727.0], [51.5, 728.0], [51.6, 730.0], [51.7, 731.0], [51.8, 733.0], [51.9, 734.0], [52.0, 737.0], [52.1, 739.0], [52.2, 741.0], [52.3, 742.0], [52.4, 744.0], [52.5, 744.0], [52.6, 746.0], [52.7, 750.0], [52.8, 751.0], [52.9, 754.0], [53.0, 755.0], [53.1, 756.0], [53.2, 758.0], [53.3, 761.0], [53.4, 763.0], [53.5, 765.0], [53.6, 766.0], [53.7, 768.0], [53.8, 769.0], [53.9, 770.0], [54.0, 772.0], [54.1, 773.0], [54.2, 775.0], [54.3, 777.0], [54.4, 779.0], [54.5, 781.0], [54.6, 783.0], [54.7, 784.0], [54.8, 786.0], [54.9, 788.0], [55.0, 791.0], [55.1, 792.0], [55.2, 795.0], [55.3, 797.0], [55.4, 798.0], [55.5, 800.0], [55.6, 801.0], [55.7, 803.0], [55.8, 806.0], [55.9, 808.0], [56.0, 810.0], [56.1, 811.0], [56.2, 812.0], [56.3, 814.0], [56.4, 815.0], [56.5, 818.0], [56.6, 820.0], [56.7, 823.0], [56.8, 823.0], [56.9, 825.0], [57.0, 827.0], [57.1, 828.0], [57.2, 831.0], [57.3, 832.0], [57.4, 833.0], [57.5, 835.0], [57.6, 837.0], [57.7, 837.0], [57.8, 839.0], [57.9, 841.0], [58.0, 842.0], [58.1, 845.0], [58.2, 847.0], [58.3, 848.0], [58.4, 849.0], [58.5, 851.0], [58.6, 852.0], [58.7, 855.0], [58.8, 857.0], [58.9, 861.0], [59.0, 861.0], [59.1, 862.0], [59.2, 863.0], [59.3, 867.0], [59.4, 870.0], [59.5, 870.0], [59.6, 873.0], [59.7, 875.0], [59.8, 877.0], [59.9, 878.0], [60.0, 880.0], [60.1, 882.0], [60.2, 883.0], [60.3, 884.0], [60.4, 886.0], [60.5, 887.0], [60.6, 889.0], [60.7, 890.0], [60.8, 890.0], [60.9, 893.0], [61.0, 894.0], [61.1, 895.0], [61.2, 896.0], [61.3, 898.0], [61.4, 899.0], [61.5, 902.0], [61.6, 903.0], [61.7, 905.0], [61.8, 907.0], [61.9, 909.0], [62.0, 912.0], [62.1, 913.0], [62.2, 916.0], [62.3, 917.0], [62.4, 919.0], [62.5, 920.0], [62.6, 921.0], [62.7, 922.0], [62.8, 925.0], [62.9, 926.0], [63.0, 928.0], [63.1, 929.0], [63.2, 931.0], [63.3, 935.0], [63.4, 936.0], [63.5, 938.0], [63.6, 940.0], [63.7, 941.0], [63.8, 942.0], [63.9, 944.0], [64.0, 945.0], [64.1, 947.0], [64.2, 948.0], [64.3, 950.0], [64.4, 952.0], [64.5, 953.0], [64.6, 955.0], [64.7, 958.0], [64.8, 961.0], [64.9, 963.0], [65.0, 964.0], [65.1, 964.0], [65.2, 966.0], [65.3, 967.0], [65.4, 969.0], [65.5, 970.0], [65.6, 973.0], [65.7, 975.0], [65.8, 976.0], [65.9, 979.0], [66.0, 980.0], [66.1, 981.0], [66.2, 983.0], [66.3, 984.0], [66.4, 987.0], [66.5, 991.0], [66.6, 992.0], [66.7, 994.0], [66.8, 995.0], [66.9, 997.0], [67.0, 999.0], [67.1, 1001.0], [67.2, 1002.0], [67.3, 1004.0], [67.4, 1005.0], [67.5, 1007.0], [67.6, 1008.0], [67.7, 1010.0], [67.8, 1012.0], [67.9, 1013.0], [68.0, 1014.0], [68.1, 1016.0], [68.2, 1017.0], [68.3, 1018.0], [68.4, 1020.0], [68.5, 1021.0], [68.6, 1021.0], [68.7, 1023.0], [68.8, 1024.0], [68.9, 1026.0], [69.0, 1027.0], [69.1, 1029.0], [69.2, 1031.0], [69.3, 1034.0], [69.4, 1035.0], [69.5, 1036.0], [69.6, 1038.0], [69.7, 1039.0], [69.8, 1039.0], [69.9, 1041.0], [70.0, 1045.0], [70.1, 1048.0], [70.2, 1049.0], [70.3, 1052.0], [70.4, 1054.0], [70.5, 1057.0], [70.6, 1059.0], [70.7, 1060.0], [70.8, 1062.0], [70.9, 1063.0], [71.0, 1064.0], [71.1, 1065.0], [71.2, 1066.0], [71.3, 1069.0], [71.4, 1071.0], [71.5, 1072.0], [71.6, 1073.0], [71.7, 1074.0], [71.8, 1078.0], [71.9, 1079.0], [72.0, 1081.0], [72.1, 1082.0], [72.2, 1085.0], [72.3, 1086.0], [72.4, 1088.0], [72.5, 1091.0], [72.6, 1092.0], [72.7, 1094.0], [72.8, 1096.0], [72.9, 1097.0], [73.0, 1098.0], [73.1, 1099.0], [73.2, 1101.0], [73.3, 1103.0], [73.4, 1104.0], [73.5, 1105.0], [73.6, 1106.0], [73.7, 1109.0], [73.8, 1111.0], [73.9, 1113.0], [74.0, 1116.0], [74.1, 1121.0], [74.2, 1123.0], [74.3, 1125.0], [74.4, 1127.0], [74.5, 1130.0], [74.6, 1131.0], [74.7, 1133.0], [74.8, 1136.0], [74.9, 1138.0], [75.0, 1139.0], [75.1, 1143.0], [75.2, 1146.0], [75.3, 1150.0], [75.4, 1152.0], [75.5, 1153.0], [75.6, 1154.0], [75.7, 1155.0], [75.8, 1157.0], [75.9, 1159.0], [76.0, 1162.0], [76.1, 1163.0], [76.2, 1164.0], [76.3, 1167.0], [76.4, 1170.0], [76.5, 1173.0], [76.6, 1175.0], [76.7, 1178.0], [76.8, 1180.0], [76.9, 1183.0], [77.0, 1184.0], [77.1, 1185.0], [77.2, 1187.0], [77.3, 1190.0], [77.4, 1193.0], [77.5, 1193.0], [77.6, 1196.0], [77.7, 1199.0], [77.8, 1202.0], [77.9, 1206.0], [78.0, 1207.0], [78.1, 1209.0], [78.2, 1211.0], [78.3, 1214.0], [78.4, 1216.0], [78.5, 1223.0], [78.6, 1226.0], [78.7, 1228.0], [78.8, 1228.0], [78.9, 1232.0], [79.0, 1235.0], [79.1, 1236.0], [79.2, 1242.0], [79.3, 1246.0], [79.4, 1249.0], [79.5, 1252.0], [79.6, 1257.0], [79.7, 1262.0], [79.8, 1266.0], [79.9, 1268.0], [80.0, 1270.0], [80.1, 1271.0], [80.2, 1274.0], [80.3, 1282.0], [80.4, 1283.0], [80.5, 1285.0], [80.6, 1287.0], [80.7, 1289.0], [80.8, 1292.0], [80.9, 1294.0], [81.0, 1296.0], [81.1, 1298.0], [81.2, 1301.0], [81.3, 1303.0], [81.4, 1305.0], [81.5, 1306.0], [81.6, 1309.0], [81.7, 1311.0], [81.8, 1312.0], [81.9, 1313.0], [82.0, 1317.0], [82.1, 1319.0], [82.2, 1320.0], [82.3, 1323.0], [82.4, 1324.0], [82.5, 1326.0], [82.6, 1328.0], [82.7, 1330.0], [82.8, 1331.0], [82.9, 1333.0], [83.0, 1334.0], [83.1, 1337.0], [83.2, 1340.0], [83.3, 1340.0], [83.4, 1342.0], [83.5, 1344.0], [83.6, 1347.0], [83.7, 1349.0], [83.8, 1353.0], [83.9, 1356.0], [84.0, 1357.0], [84.1, 1358.0], [84.2, 1360.0], [84.3, 1364.0], [84.4, 1365.0], [84.5, 1368.0], [84.6, 1369.0], [84.7, 1373.0], [84.8, 1377.0], [84.9, 1377.0], [85.0, 1379.0], [85.1, 1381.0], [85.2, 1385.0], [85.3, 1387.0], [85.4, 1389.0], [85.5, 1391.0], [85.6, 1394.0], [85.7, 1396.0], [85.8, 1398.0], [85.9, 1401.0], [86.0, 1403.0], [86.1, 1403.0], [86.2, 1406.0], [86.3, 1408.0], [86.4, 1409.0], [86.5, 1410.0], [86.6, 1414.0], [86.7, 1417.0], [86.8, 1420.0], [86.9, 1424.0], [87.0, 1426.0], [87.1, 1430.0], [87.2, 1433.0], [87.3, 1435.0], [87.4, 1438.0], [87.5, 1441.0], [87.6, 1445.0], [87.7, 1450.0], [87.8, 1452.0], [87.9, 1455.0], [88.0, 1457.0], [88.1, 1461.0], [88.2, 1464.0], [88.3, 1466.0], [88.4, 1470.0], [88.5, 1472.0], [88.6, 1476.0], [88.7, 1479.0], [88.8, 1482.0], [88.9, 1486.0], [89.0, 1497.0], [89.1, 1498.0], [89.2, 1505.0], [89.3, 1508.0], [89.4, 1511.0], [89.5, 1521.0], [89.6, 1526.0], [89.7, 1534.0], [89.8, 1536.0], [89.9, 1538.0], [90.0, 1542.0], [90.1, 1548.0], [90.2, 1557.0], [90.3, 1566.0], [90.4, 1569.0], [90.5, 1573.0], [90.6, 1579.0], [90.7, 1586.0], [90.8, 1591.0], [90.9, 1601.0], [91.0, 1603.0], [91.1, 1607.0], [91.2, 1613.0], [91.3, 1617.0], [91.4, 1619.0], [91.5, 1623.0], [91.6, 1637.0], [91.7, 1642.0], [91.8, 1646.0], [91.9, 1652.0], [92.0, 1653.0], [92.1, 1658.0], [92.2, 1671.0], [92.3, 1677.0], [92.4, 1689.0], [92.5, 1693.0], [92.6, 1701.0], [92.7, 1707.0], [92.8, 1720.0], [92.9, 1728.0], [93.0, 1741.0], [93.1, 1742.0], [93.2, 1759.0], [93.3, 1762.0], [93.4, 1769.0], [93.5, 1777.0], [93.6, 1789.0], [93.7, 1795.0], [93.8, 1804.0], [93.9, 1812.0], [94.0, 1826.0], [94.1, 1838.0], [94.2, 1846.0], [94.3, 1851.0], [94.4, 1862.0], [94.5, 1873.0], [94.6, 1887.0], [94.7, 1912.0], [94.8, 1921.0], [94.9, 1928.0], [95.0, 1937.0], [95.1, 1945.0], [95.2, 1963.0], [95.3, 2015.0], [95.4, 2025.0], [95.5, 2033.0], [95.6, 2041.0], [95.7, 2049.0], [95.8, 2064.0], [95.9, 2078.0], [96.0, 2088.0], [96.1, 2102.0], [96.2, 2119.0], [96.3, 2134.0], [96.4, 2152.0], [96.5, 2166.0], [96.6, 2187.0], [96.7, 2193.0], [96.8, 2207.0], [96.9, 2237.0], [97.0, 2243.0], [97.1, 2264.0], [97.2, 2279.0], [97.3, 2304.0], [97.4, 2328.0], [97.5, 2346.0], [97.6, 2371.0], [97.7, 2399.0], [97.8, 2426.0], [97.9, 2458.0], [98.0, 2484.0], [98.1, 2503.0], [98.2, 2522.0], [98.3, 2538.0], [98.4, 2553.0], [98.5, 2595.0], [98.6, 2638.0], [98.7, 2732.0], [98.8, 2763.0], [98.9, 2805.0], [99.0, 2847.0], [99.1, 2992.0], [99.2, 3062.0], [99.3, 3258.0], [99.4, 3368.0], [99.5, 3463.0], [99.6, 3740.0], [99.7, 4277.0], [99.8, 4872.0], [99.9, 5324.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 561.0, "series": [{"data": [[600.0, 366.0], [700.0, 315.0], [800.0, 308.0], [900.0, 292.0], [1000.0, 317.0], [1100.0, 239.0], [1200.0, 177.0], [1300.0, 244.0], [1400.0, 169.0], [1500.0, 92.0], [1600.0, 87.0], [1700.0, 64.0], [1800.0, 42.0], [1900.0, 35.0], [2000.0, 42.0], [2100.0, 35.0], [2300.0, 22.0], [2200.0, 27.0], [2400.0, 19.0], [2500.0, 24.0], [2600.0, 5.0], [2700.0, 13.0], [2800.0, 8.0], [2900.0, 4.0], [3000.0, 6.0], [3100.0, 1.0], [3200.0, 5.0], [3300.0, 4.0], [3400.0, 6.0], [3500.0, 3.0], [3700.0, 1.0], [3800.0, 2.0], [4200.0, 2.0], [4100.0, 1.0], [4300.0, 1.0], [4500.0, 1.0], [4400.0, 1.0], [4800.0, 2.0], [5100.0, 1.0], [5000.0, 1.0], [5300.0, 2.0], [5200.0, 2.0], [5600.0, 1.0], [5500.0, 2.0], [5800.0, 1.0], [100.0, 82.0], [200.0, 561.0], [300.0, 442.0], [400.0, 558.0], [500.0, 555.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 565.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2982.0, "series": [{"data": [[0.0, 1643.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2982.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 565.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.805194805194807, "minX": 1.60280274E12, "maxY": 10.0, "series": [{"data": [[1.60280274E12, 10.0], [1.60280316E12, 10.0], [1.60280292E12, 10.0], [1.60280298E12, 10.0], [1.6028028E12, 10.0], [1.6028031E12, 10.0], [1.60280322E12, 9.805194805194807], [1.60280286E12, 10.0], [1.60280304E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280322E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 310.0, "minX": 1.0, "maxY": 2421.0, "series": [{"data": [[8.0, 589.0], [4.0, 711.0], [2.0, 1653.0], [1.0, 2421.0], [9.0, 878.0], [10.0, 860.8112333526354], [5.0, 555.0], [6.0, 310.0], [3.0, 693.0], [7.0, 1749.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 861.1603082851647]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 145.3, "minX": 1.60280274E12, "maxY": 3703314.8, "series": [{"data": [[1.60280274E12, 121832.7], [1.60280316E12, 3144286.1666666665], [1.60280292E12, 3498612.7333333334], [1.60280298E12, 3445798.6166666667], [1.6028028E12, 3170613.066666667], [1.6028031E12, 3703314.8], [1.60280322E12, 1125167.0], [1.60280286E12, 3171755.5833333335], [1.60280304E12, 2590747.0833333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280274E12, 145.3], [1.60280316E12, 5815.1], [1.60280292E12, 5520.75], [1.60280298E12, 4592.15], [1.6028028E12, 4669.85], [1.6028031E12, 5414.833333333333], [1.60280322E12, 1734.55], [1.60280286E12, 5457.6], [1.60280304E12, 5227.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280322E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 771.1409921671027, "minX": 1.60280274E12, "maxY": 1904.8947368421054, "series": [{"data": [[1.60280274E12, 1904.8947368421054], [1.60280316E12, 771.1409921671027], [1.60280292E12, 823.3301237964233], [1.60280298E12, 958.5342019543972], [1.6028028E12, 917.4705882352944], [1.6028031E12, 824.9682758620697], [1.60280322E12, 1069.1515151515157], [1.60280286E12, 821.0624151967437], [1.60280304E12, 844.8951724137931]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280322E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 769.844647519583, "minX": 1.60280274E12, "maxY": 1902.315789473684, "series": [{"data": [[1.60280274E12, 1902.315789473684], [1.60280316E12, 769.844647519583], [1.60280292E12, 821.1389270976618], [1.60280298E12, 956.1351791530947], [1.6028028E12, 915.3436532507737], [1.6028031E12, 823.1875862068968], [1.60280322E12, 1066.8268398268394], [1.60280286E12, 818.9647218453189], [1.60280304E12, 843.6579310344835]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280322E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011004126547455296, "minX": 1.60280274E12, "maxY": 4.473684210526316, "series": [{"data": [[1.60280274E12, 4.473684210526316], [1.60280316E12, 0.011749347258485626], [1.60280292E12, 0.011004126547455296], [1.60280298E12, 0.017915309446254076], [1.6028028E12, 0.015479876160990716], [1.6028031E12, 0.015172413793103454], [1.60280322E12, 0.021645021645021623], [1.60280286E12, 0.020352781546811402], [1.60280304E12, 0.015172413793103455]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280322E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.60280274E12, "maxY": 5892.0, "series": [{"data": [[1.60280274E12, 3563.0], [1.60280316E12, 3405.0], [1.60280292E12, 3362.0], [1.60280298E12, 5690.0], [1.6028028E12, 5393.0], [1.6028031E12, 2944.0], [1.60280322E12, 5200.0], [1.60280286E12, 3812.0], [1.60280304E12, 5892.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280274E12, 258.0], [1.60280316E12, 189.0], [1.60280292E12, 193.10399965286254], [1.60280298E12, 187.53499985337257], [1.6028028E12, 201.0], [1.6028031E12, 191.53399982690811], [1.60280322E12, 211.93599878311156], [1.60280286E12, 202.28399964809418], [1.60280304E12, 194.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280274E12, 258.0], [1.60280316E12, 189.59330007314682], [1.60280292E12, 194.2072000694275], [1.60280298E12, 188.08850005865096], [1.6028028E12, 201.0], [1.6028031E12, 192.18740006923676], [1.60280322E12, 216.52960048675536], [1.60280286E12, 203.61240014076233], [1.60280304E12, 194.18740006923676]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280274E12, 258.0], [1.60280316E12, 189.28649990856647], [1.60280292E12, 193.83199982643129], [1.60280298E12, 187.8424999266863], [1.6028028E12, 201.0], [1.6028031E12, 191.89699991345407], [1.60280322E12, 214.48799939155577], [1.60280286E12, 203.0219998240471], [1.60280304E12, 194.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280274E12, 258.0], [1.60280316E12, 183.0], [1.60280292E12, 181.0], [1.60280298E12, 182.0], [1.6028028E12, 191.0], [1.6028031E12, 178.0], [1.60280322E12, 205.0], [1.60280286E12, 193.0], [1.60280304E12, 189.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280274E12, 2484.0], [1.60280316E12, 615.0], [1.60280292E12, 653.0], [1.60280298E12, 769.0], [1.6028028E12, 819.0], [1.6028031E12, 647.0], [1.60280322E12, 910.0], [1.60280286E12, 622.0], [1.60280304E12, 731.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280322E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 381.0, "minX": 1.0, "maxY": 2421.0, "series": [{"data": [[2.0, 1516.0], [3.0, 1267.0], [4.0, 734.0], [5.0, 1138.0], [6.0, 1120.0], [7.0, 1088.0], [8.0, 1101.0], [9.0, 923.0], [10.0, 898.5], [11.0, 823.0], [12.0, 817.0], [13.0, 728.0], [14.0, 646.0], [15.0, 643.0], [16.0, 534.0], [1.0, 2421.0], [17.0, 577.5], [18.0, 524.0], [19.0, 448.0], [20.0, 410.5], [21.0, 446.0], [22.0, 423.0], [23.0, 454.0], [24.0, 397.5], [25.0, 411.0], [26.0, 410.5], [27.0, 381.0], [28.0, 395.0], [29.0, 386.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 381.0, "minX": 1.0, "maxY": 2409.0, "series": [{"data": [[2.0, 1512.0], [3.0, 1265.0], [4.0, 733.5], [5.0, 1129.5], [6.0, 1118.5], [7.0, 1084.0], [8.0, 1098.5], [9.0, 922.0], [10.0, 896.0], [11.0, 821.0], [12.0, 815.0], [13.0, 728.0], [14.0, 645.5], [15.0, 640.0], [16.0, 534.0], [1.0, 2409.0], [17.0, 577.5], [18.0, 524.0], [19.0, 446.5], [20.0, 410.0], [21.0, 445.0], [22.0, 423.0], [23.0, 454.0], [24.0, 397.0], [25.0, 411.0], [26.0, 410.5], [27.0, 381.0], [28.0, 395.0], [29.0, 386.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.60280274E12, "maxY": 12.766666666666667, "series": [{"data": [[1.60280274E12, 0.48333333333333334], [1.60280316E12, 12.766666666666667], [1.60280292E12, 12.116666666666667], [1.60280298E12, 10.233333333333333], [1.6028028E12, 10.766666666666667], [1.6028031E12, 12.083333333333334], [1.60280322E12, 3.683333333333333], [1.60280286E12, 12.283333333333333], [1.60280304E12, 12.083333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280322E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.60280274E12, "maxY": 12.766666666666667, "series": [{"data": [[1.60280274E12, 0.31666666666666665], [1.60280316E12, 12.766666666666667], [1.60280292E12, 12.116666666666667], [1.60280298E12, 10.233333333333333], [1.6028028E12, 10.766666666666667], [1.6028031E12, 12.083333333333334], [1.60280322E12, 3.85], [1.60280286E12, 12.283333333333333], [1.60280304E12, 12.083333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280322E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.60280274E12, "maxY": 12.766666666666667, "series": [{"data": [[1.60280274E12, 0.31666666666666665], [1.60280316E12, 12.766666666666667], [1.60280292E12, 12.116666666666667], [1.60280298E12, 10.233333333333333], [1.6028028E12, 10.766666666666667], [1.6028031E12, 12.083333333333334], [1.60280322E12, 3.85], [1.60280286E12, 12.283333333333333], [1.60280304E12, 12.083333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280322E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.60280274E12, "maxY": 12.766666666666667, "series": [{"data": [[1.60280274E12, 0.31666666666666665], [1.60280316E12, 12.766666666666667], [1.60280292E12, 12.116666666666667], [1.60280298E12, 10.233333333333333], [1.6028028E12, 10.766666666666667], [1.6028031E12, 12.083333333333334], [1.60280322E12, 3.85], [1.60280286E12, 12.283333333333333], [1.60280304E12, 12.083333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280322E12, "title": "Total Transactions Per Second"}},
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

