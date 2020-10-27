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
        data: {"result": {"minY": 189.0, "minX": 0.0, "maxY": 9012.0, "series": [{"data": [[0.0, 189.0], [0.1, 193.0], [0.2, 195.0], [0.3, 196.0], [0.4, 198.0], [0.5, 199.0], [0.6, 200.0], [0.7, 201.0], [0.8, 202.0], [0.9, 202.0], [1.0, 203.0], [1.1, 204.0], [1.2, 204.0], [1.3, 205.0], [1.4, 206.0], [1.5, 206.0], [1.6, 207.0], [1.7, 207.0], [1.8, 208.0], [1.9, 208.0], [2.0, 209.0], [2.1, 210.0], [2.2, 211.0], [2.3, 212.0], [2.4, 212.0], [2.5, 213.0], [2.6, 213.0], [2.7, 214.0], [2.8, 215.0], [2.9, 216.0], [3.0, 217.0], [3.1, 218.0], [3.2, 219.0], [3.3, 220.0], [3.4, 221.0], [3.5, 223.0], [3.6, 223.0], [3.7, 224.0], [3.8, 225.0], [3.9, 226.0], [4.0, 227.0], [4.1, 228.0], [4.2, 229.0], [4.3, 230.0], [4.4, 231.0], [4.5, 232.0], [4.6, 232.0], [4.7, 233.0], [4.8, 234.0], [4.9, 235.0], [5.0, 235.0], [5.1, 236.0], [5.2, 237.0], [5.3, 237.0], [5.4, 239.0], [5.5, 239.0], [5.6, 239.0], [5.7, 240.0], [5.8, 241.0], [5.9, 242.0], [6.0, 242.0], [6.1, 243.0], [6.2, 244.0], [6.3, 245.0], [6.4, 246.0], [6.5, 247.0], [6.6, 247.0], [6.7, 248.0], [6.8, 250.0], [6.9, 251.0], [7.0, 252.0], [7.1, 253.0], [7.2, 254.0], [7.3, 256.0], [7.4, 256.0], [7.5, 258.0], [7.6, 260.0], [7.7, 261.0], [7.8, 261.0], [7.9, 263.0], [8.0, 265.0], [8.1, 266.0], [8.2, 267.0], [8.3, 269.0], [8.4, 271.0], [8.5, 273.0], [8.6, 273.0], [8.7, 275.0], [8.8, 276.0], [8.9, 277.0], [9.0, 278.0], [9.1, 278.0], [9.2, 279.0], [9.3, 280.0], [9.4, 281.0], [9.5, 282.0], [9.6, 282.0], [9.7, 283.0], [9.8, 283.0], [9.9, 284.0], [10.0, 284.0], [10.1, 285.0], [10.2, 287.0], [10.3, 288.0], [10.4, 289.0], [10.5, 290.0], [10.6, 292.0], [10.7, 293.0], [10.8, 294.0], [10.9, 296.0], [11.0, 297.0], [11.1, 299.0], [11.2, 300.0], [11.3, 301.0], [11.4, 303.0], [11.5, 304.0], [11.6, 305.0], [11.7, 307.0], [11.8, 308.0], [11.9, 308.0], [12.0, 310.0], [12.1, 310.0], [12.2, 312.0], [12.3, 313.0], [12.4, 314.0], [12.5, 315.0], [12.6, 316.0], [12.7, 318.0], [12.8, 319.0], [12.9, 319.0], [13.0, 320.0], [13.1, 321.0], [13.2, 323.0], [13.3, 323.0], [13.4, 325.0], [13.5, 327.0], [13.6, 328.0], [13.7, 329.0], [13.8, 330.0], [13.9, 331.0], [14.0, 331.0], [14.1, 333.0], [14.2, 334.0], [14.3, 335.0], [14.4, 336.0], [14.5, 337.0], [14.6, 338.0], [14.7, 339.0], [14.8, 341.0], [14.9, 343.0], [15.0, 343.0], [15.1, 345.0], [15.2, 347.0], [15.3, 348.0], [15.4, 350.0], [15.5, 351.0], [15.6, 352.0], [15.7, 354.0], [15.8, 355.0], [15.9, 356.0], [16.0, 356.0], [16.1, 358.0], [16.2, 360.0], [16.3, 362.0], [16.4, 363.0], [16.5, 364.0], [16.6, 367.0], [16.7, 367.0], [16.8, 368.0], [16.9, 370.0], [17.0, 371.0], [17.1, 374.0], [17.2, 377.0], [17.3, 379.0], [17.4, 382.0], [17.5, 385.0], [17.6, 388.0], [17.7, 390.0], [17.8, 391.0], [17.9, 392.0], [18.0, 394.0], [18.1, 395.0], [18.2, 396.0], [18.3, 397.0], [18.4, 398.0], [18.5, 399.0], [18.6, 401.0], [18.7, 401.0], [18.8, 402.0], [18.9, 403.0], [19.0, 404.0], [19.1, 405.0], [19.2, 406.0], [19.3, 407.0], [19.4, 407.0], [19.5, 408.0], [19.6, 410.0], [19.7, 411.0], [19.8, 411.0], [19.9, 412.0], [20.0, 413.0], [20.1, 414.0], [20.2, 415.0], [20.3, 415.0], [20.4, 417.0], [20.5, 417.0], [20.6, 418.0], [20.7, 419.0], [20.8, 420.0], [20.9, 421.0], [21.0, 422.0], [21.1, 423.0], [21.2, 424.0], [21.3, 425.0], [21.4, 426.0], [21.5, 427.0], [21.6, 427.0], [21.7, 428.0], [21.8, 429.0], [21.9, 430.0], [22.0, 431.0], [22.1, 432.0], [22.2, 433.0], [22.3, 434.0], [22.4, 435.0], [22.5, 436.0], [22.6, 437.0], [22.7, 439.0], [22.8, 440.0], [22.9, 441.0], [23.0, 442.0], [23.1, 442.0], [23.2, 443.0], [23.3, 444.0], [23.4, 445.0], [23.5, 446.0], [23.6, 446.0], [23.7, 447.0], [23.8, 448.0], [23.9, 449.0], [24.0, 450.0], [24.1, 450.0], [24.2, 451.0], [24.3, 452.0], [24.4, 453.0], [24.5, 453.0], [24.6, 454.0], [24.7, 455.0], [24.8, 456.0], [24.9, 457.0], [25.0, 457.0], [25.1, 458.0], [25.2, 459.0], [25.3, 460.0], [25.4, 461.0], [25.5, 462.0], [25.6, 463.0], [25.7, 465.0], [25.8, 466.0], [25.9, 466.0], [26.0, 467.0], [26.1, 467.0], [26.2, 469.0], [26.3, 470.0], [26.4, 470.0], [26.5, 471.0], [26.6, 472.0], [26.7, 473.0], [26.8, 473.0], [26.9, 474.0], [27.0, 475.0], [27.1, 476.0], [27.2, 476.0], [27.3, 477.0], [27.4, 477.0], [27.5, 478.0], [27.6, 479.0], [27.7, 480.0], [27.8, 480.0], [27.9, 482.0], [28.0, 482.0], [28.1, 483.0], [28.2, 483.0], [28.3, 484.0], [28.4, 485.0], [28.5, 485.0], [28.6, 488.0], [28.7, 489.0], [28.8, 490.0], [28.9, 492.0], [29.0, 494.0], [29.1, 494.0], [29.2, 496.0], [29.3, 497.0], [29.4, 498.0], [29.5, 499.0], [29.6, 500.0], [29.7, 501.0], [29.8, 502.0], [29.9, 504.0], [30.0, 505.0], [30.1, 507.0], [30.2, 508.0], [30.3, 509.0], [30.4, 510.0], [30.5, 511.0], [30.6, 513.0], [30.7, 514.0], [30.8, 514.0], [30.9, 516.0], [31.0, 517.0], [31.1, 519.0], [31.2, 520.0], [31.3, 521.0], [31.4, 522.0], [31.5, 523.0], [31.6, 524.0], [31.7, 525.0], [31.8, 526.0], [31.9, 527.0], [32.0, 529.0], [32.1, 529.0], [32.2, 530.0], [32.3, 532.0], [32.4, 533.0], [32.5, 534.0], [32.6, 534.0], [32.7, 536.0], [32.8, 536.0], [32.9, 538.0], [33.0, 540.0], [33.1, 542.0], [33.2, 543.0], [33.3, 543.0], [33.4, 544.0], [33.5, 545.0], [33.6, 545.0], [33.7, 546.0], [33.8, 547.0], [33.9, 548.0], [34.0, 550.0], [34.1, 551.0], [34.2, 553.0], [34.3, 554.0], [34.4, 555.0], [34.5, 556.0], [34.6, 557.0], [34.7, 558.0], [34.8, 558.0], [34.9, 559.0], [35.0, 560.0], [35.1, 561.0], [35.2, 561.0], [35.3, 562.0], [35.4, 563.0], [35.5, 565.0], [35.6, 566.0], [35.7, 567.0], [35.8, 569.0], [35.9, 569.0], [36.0, 571.0], [36.1, 572.0], [36.2, 573.0], [36.3, 574.0], [36.4, 575.0], [36.5, 576.0], [36.6, 576.0], [36.7, 577.0], [36.8, 577.0], [36.9, 579.0], [37.0, 580.0], [37.1, 580.0], [37.2, 581.0], [37.3, 582.0], [37.4, 584.0], [37.5, 584.0], [37.6, 585.0], [37.7, 586.0], [37.8, 587.0], [37.9, 588.0], [38.0, 589.0], [38.1, 590.0], [38.2, 590.0], [38.3, 592.0], [38.4, 594.0], [38.5, 595.0], [38.6, 596.0], [38.7, 597.0], [38.8, 598.0], [38.9, 600.0], [39.0, 601.0], [39.1, 603.0], [39.2, 603.0], [39.3, 604.0], [39.4, 605.0], [39.5, 606.0], [39.6, 608.0], [39.7, 608.0], [39.8, 609.0], [39.9, 611.0], [40.0, 611.0], [40.1, 612.0], [40.2, 613.0], [40.3, 615.0], [40.4, 615.0], [40.5, 616.0], [40.6, 617.0], [40.7, 618.0], [40.8, 620.0], [40.9, 620.0], [41.0, 621.0], [41.1, 622.0], [41.2, 623.0], [41.3, 623.0], [41.4, 624.0], [41.5, 625.0], [41.6, 627.0], [41.7, 627.0], [41.8, 629.0], [41.9, 629.0], [42.0, 631.0], [42.1, 633.0], [42.2, 634.0], [42.3, 635.0], [42.4, 636.0], [42.5, 638.0], [42.6, 639.0], [42.7, 639.0], [42.8, 640.0], [42.9, 641.0], [43.0, 642.0], [43.1, 642.0], [43.2, 644.0], [43.3, 644.0], [43.4, 645.0], [43.5, 646.0], [43.6, 648.0], [43.7, 650.0], [43.8, 652.0], [43.9, 652.0], [44.0, 654.0], [44.1, 655.0], [44.2, 656.0], [44.3, 658.0], [44.4, 659.0], [44.5, 661.0], [44.6, 664.0], [44.7, 665.0], [44.8, 666.0], [44.9, 667.0], [45.0, 670.0], [45.1, 673.0], [45.2, 675.0], [45.3, 677.0], [45.4, 678.0], [45.5, 679.0], [45.6, 681.0], [45.7, 682.0], [45.8, 683.0], [45.9, 685.0], [46.0, 687.0], [46.1, 689.0], [46.2, 692.0], [46.3, 694.0], [46.4, 695.0], [46.5, 696.0], [46.6, 697.0], [46.7, 698.0], [46.8, 699.0], [46.9, 701.0], [47.0, 703.0], [47.1, 704.0], [47.2, 705.0], [47.3, 706.0], [47.4, 707.0], [47.5, 708.0], [47.6, 710.0], [47.7, 712.0], [47.8, 713.0], [47.9, 715.0], [48.0, 718.0], [48.1, 720.0], [48.2, 722.0], [48.3, 723.0], [48.4, 725.0], [48.5, 727.0], [48.6, 727.0], [48.7, 730.0], [48.8, 731.0], [48.9, 733.0], [49.0, 735.0], [49.1, 737.0], [49.2, 739.0], [49.3, 740.0], [49.4, 742.0], [49.5, 743.0], [49.6, 744.0], [49.7, 747.0], [49.8, 749.0], [49.9, 751.0], [50.0, 753.0], [50.1, 756.0], [50.2, 757.0], [50.3, 759.0], [50.4, 760.0], [50.5, 761.0], [50.6, 763.0], [50.7, 764.0], [50.8, 765.0], [50.9, 767.0], [51.0, 768.0], [51.1, 770.0], [51.2, 771.0], [51.3, 772.0], [51.4, 773.0], [51.5, 776.0], [51.6, 778.0], [51.7, 780.0], [51.8, 782.0], [51.9, 784.0], [52.0, 786.0], [52.1, 788.0], [52.2, 790.0], [52.3, 792.0], [52.4, 794.0], [52.5, 796.0], [52.6, 799.0], [52.7, 800.0], [52.8, 802.0], [52.9, 804.0], [53.0, 805.0], [53.1, 807.0], [53.2, 809.0], [53.3, 810.0], [53.4, 813.0], [53.5, 815.0], [53.6, 817.0], [53.7, 820.0], [53.8, 820.0], [53.9, 823.0], [54.0, 825.0], [54.1, 827.0], [54.2, 829.0], [54.3, 830.0], [54.4, 831.0], [54.5, 834.0], [54.6, 836.0], [54.7, 837.0], [54.8, 840.0], [54.9, 841.0], [55.0, 842.0], [55.1, 845.0], [55.2, 846.0], [55.3, 850.0], [55.4, 851.0], [55.5, 853.0], [55.6, 855.0], [55.7, 856.0], [55.8, 858.0], [55.9, 859.0], [56.0, 863.0], [56.1, 864.0], [56.2, 867.0], [56.3, 868.0], [56.4, 871.0], [56.5, 873.0], [56.6, 874.0], [56.7, 875.0], [56.8, 877.0], [56.9, 878.0], [57.0, 881.0], [57.1, 883.0], [57.2, 885.0], [57.3, 886.0], [57.4, 888.0], [57.5, 890.0], [57.6, 891.0], [57.7, 893.0], [57.8, 896.0], [57.9, 897.0], [58.0, 898.0], [58.1, 900.0], [58.2, 903.0], [58.3, 905.0], [58.4, 905.0], [58.5, 908.0], [58.6, 909.0], [58.7, 910.0], [58.8, 912.0], [58.9, 914.0], [59.0, 915.0], [59.1, 918.0], [59.2, 921.0], [59.3, 924.0], [59.4, 926.0], [59.5, 927.0], [59.6, 928.0], [59.7, 931.0], [59.8, 933.0], [59.9, 935.0], [60.0, 938.0], [60.1, 940.0], [60.2, 942.0], [60.3, 944.0], [60.4, 945.0], [60.5, 947.0], [60.6, 948.0], [60.7, 950.0], [60.8, 951.0], [60.9, 952.0], [61.0, 953.0], [61.1, 956.0], [61.2, 958.0], [61.3, 959.0], [61.4, 961.0], [61.5, 964.0], [61.6, 965.0], [61.7, 966.0], [61.8, 968.0], [61.9, 969.0], [62.0, 970.0], [62.1, 973.0], [62.2, 974.0], [62.3, 976.0], [62.4, 978.0], [62.5, 980.0], [62.6, 981.0], [62.7, 983.0], [62.8, 985.0], [62.9, 986.0], [63.0, 988.0], [63.1, 990.0], [63.2, 992.0], [63.3, 994.0], [63.4, 996.0], [63.5, 997.0], [63.6, 998.0], [63.7, 1000.0], [63.8, 1001.0], [63.9, 1003.0], [64.0, 1004.0], [64.1, 1005.0], [64.2, 1007.0], [64.3, 1009.0], [64.4, 1011.0], [64.5, 1013.0], [64.6, 1016.0], [64.7, 1017.0], [64.8, 1019.0], [64.9, 1021.0], [65.0, 1023.0], [65.1, 1025.0], [65.2, 1028.0], [65.3, 1029.0], [65.4, 1030.0], [65.5, 1032.0], [65.6, 1033.0], [65.7, 1035.0], [65.8, 1037.0], [65.9, 1038.0], [66.0, 1039.0], [66.1, 1042.0], [66.2, 1045.0], [66.3, 1046.0], [66.4, 1049.0], [66.5, 1051.0], [66.6, 1054.0], [66.7, 1056.0], [66.8, 1058.0], [66.9, 1060.0], [67.0, 1062.0], [67.1, 1063.0], [67.2, 1064.0], [67.3, 1065.0], [67.4, 1066.0], [67.5, 1067.0], [67.6, 1068.0], [67.7, 1069.0], [67.8, 1071.0], [67.9, 1073.0], [68.0, 1074.0], [68.1, 1075.0], [68.2, 1077.0], [68.3, 1080.0], [68.4, 1082.0], [68.5, 1084.0], [68.6, 1085.0], [68.7, 1087.0], [68.8, 1088.0], [68.9, 1089.0], [69.0, 1091.0], [69.1, 1093.0], [69.2, 1096.0], [69.3, 1097.0], [69.4, 1099.0], [69.5, 1102.0], [69.6, 1104.0], [69.7, 1105.0], [69.8, 1107.0], [69.9, 1110.0], [70.0, 1111.0], [70.1, 1112.0], [70.2, 1114.0], [70.3, 1117.0], [70.4, 1118.0], [70.5, 1119.0], [70.6, 1122.0], [70.7, 1124.0], [70.8, 1127.0], [70.9, 1129.0], [71.0, 1131.0], [71.1, 1132.0], [71.2, 1133.0], [71.3, 1135.0], [71.4, 1137.0], [71.5, 1138.0], [71.6, 1141.0], [71.7, 1143.0], [71.8, 1144.0], [71.9, 1147.0], [72.0, 1149.0], [72.1, 1152.0], [72.2, 1154.0], [72.3, 1155.0], [72.4, 1157.0], [72.5, 1159.0], [72.6, 1161.0], [72.7, 1163.0], [72.8, 1165.0], [72.9, 1168.0], [73.0, 1170.0], [73.1, 1173.0], [73.2, 1175.0], [73.3, 1177.0], [73.4, 1179.0], [73.5, 1184.0], [73.6, 1185.0], [73.7, 1188.0], [73.8, 1190.0], [73.9, 1191.0], [74.0, 1194.0], [74.1, 1195.0], [74.2, 1197.0], [74.3, 1199.0], [74.4, 1203.0], [74.5, 1206.0], [74.6, 1208.0], [74.7, 1210.0], [74.8, 1212.0], [74.9, 1216.0], [75.0, 1217.0], [75.1, 1218.0], [75.2, 1219.0], [75.3, 1221.0], [75.4, 1222.0], [75.5, 1225.0], [75.6, 1226.0], [75.7, 1227.0], [75.8, 1228.0], [75.9, 1231.0], [76.0, 1232.0], [76.1, 1235.0], [76.2, 1236.0], [76.3, 1238.0], [76.4, 1241.0], [76.5, 1245.0], [76.6, 1248.0], [76.7, 1250.0], [76.8, 1250.0], [76.9, 1254.0], [77.0, 1255.0], [77.1, 1259.0], [77.2, 1262.0], [77.3, 1263.0], [77.4, 1266.0], [77.5, 1269.0], [77.6, 1270.0], [77.7, 1271.0], [77.8, 1275.0], [77.9, 1277.0], [78.0, 1279.0], [78.1, 1281.0], [78.2, 1285.0], [78.3, 1288.0], [78.4, 1292.0], [78.5, 1296.0], [78.6, 1299.0], [78.7, 1301.0], [78.8, 1305.0], [78.9, 1309.0], [79.0, 1312.0], [79.1, 1315.0], [79.2, 1318.0], [79.3, 1319.0], [79.4, 1320.0], [79.5, 1323.0], [79.6, 1326.0], [79.7, 1330.0], [79.8, 1332.0], [79.9, 1334.0], [80.0, 1338.0], [80.1, 1340.0], [80.2, 1343.0], [80.3, 1345.0], [80.4, 1346.0], [80.5, 1349.0], [80.6, 1350.0], [80.7, 1352.0], [80.8, 1354.0], [80.9, 1354.0], [81.0, 1357.0], [81.1, 1358.0], [81.2, 1360.0], [81.3, 1362.0], [81.4, 1365.0], [81.5, 1366.0], [81.6, 1370.0], [81.7, 1371.0], [81.8, 1375.0], [81.9, 1379.0], [82.0, 1381.0], [82.1, 1383.0], [82.2, 1385.0], [82.3, 1388.0], [82.4, 1391.0], [82.5, 1392.0], [82.6, 1395.0], [82.7, 1398.0], [82.8, 1401.0], [82.9, 1403.0], [83.0, 1405.0], [83.1, 1407.0], [83.2, 1411.0], [83.3, 1412.0], [83.4, 1413.0], [83.5, 1415.0], [83.6, 1416.0], [83.7, 1418.0], [83.8, 1419.0], [83.9, 1420.0], [84.0, 1423.0], [84.1, 1424.0], [84.2, 1426.0], [84.3, 1428.0], [84.4, 1431.0], [84.5, 1433.0], [84.6, 1435.0], [84.7, 1438.0], [84.8, 1440.0], [84.9, 1442.0], [85.0, 1446.0], [85.1, 1447.0], [85.2, 1450.0], [85.3, 1455.0], [85.4, 1458.0], [85.5, 1459.0], [85.6, 1461.0], [85.7, 1464.0], [85.8, 1469.0], [85.9, 1471.0], [86.0, 1476.0], [86.1, 1478.0], [86.2, 1480.0], [86.3, 1482.0], [86.4, 1485.0], [86.5, 1488.0], [86.6, 1493.0], [86.7, 1494.0], [86.8, 1499.0], [86.9, 1500.0], [87.0, 1505.0], [87.1, 1506.0], [87.2, 1511.0], [87.3, 1516.0], [87.4, 1520.0], [87.5, 1523.0], [87.6, 1530.0], [87.7, 1533.0], [87.8, 1537.0], [87.9, 1539.0], [88.0, 1544.0], [88.1, 1547.0], [88.2, 1550.0], [88.3, 1555.0], [88.4, 1557.0], [88.5, 1564.0], [88.6, 1571.0], [88.7, 1575.0], [88.8, 1578.0], [88.9, 1584.0], [89.0, 1588.0], [89.1, 1590.0], [89.2, 1595.0], [89.3, 1600.0], [89.4, 1603.0], [89.5, 1609.0], [89.6, 1612.0], [89.7, 1616.0], [89.8, 1626.0], [89.9, 1633.0], [90.0, 1639.0], [90.1, 1645.0], [90.2, 1648.0], [90.3, 1656.0], [90.4, 1665.0], [90.5, 1670.0], [90.6, 1674.0], [90.7, 1677.0], [90.8, 1683.0], [90.9, 1694.0], [91.0, 1702.0], [91.1, 1705.0], [91.2, 1715.0], [91.3, 1718.0], [91.4, 1721.0], [91.5, 1723.0], [91.6, 1729.0], [91.7, 1739.0], [91.8, 1741.0], [91.9, 1749.0], [92.0, 1755.0], [92.1, 1762.0], [92.2, 1766.0], [92.3, 1773.0], [92.4, 1777.0], [92.5, 1785.0], [92.6, 1793.0], [92.7, 1802.0], [92.8, 1812.0], [92.9, 1818.0], [93.0, 1824.0], [93.1, 1828.0], [93.2, 1834.0], [93.3, 1853.0], [93.4, 1866.0], [93.5, 1875.0], [93.6, 1888.0], [93.7, 1897.0], [93.8, 1903.0], [93.9, 1907.0], [94.0, 1914.0], [94.1, 1924.0], [94.2, 1934.0], [94.3, 1949.0], [94.4, 1957.0], [94.5, 1966.0], [94.6, 1975.0], [94.7, 1984.0], [94.8, 2002.0], [94.9, 2013.0], [95.0, 2028.0], [95.1, 2046.0], [95.2, 2058.0], [95.3, 2066.0], [95.4, 2079.0], [95.5, 2085.0], [95.6, 2095.0], [95.7, 2106.0], [95.8, 2116.0], [95.9, 2129.0], [96.0, 2134.0], [96.1, 2143.0], [96.2, 2152.0], [96.3, 2164.0], [96.4, 2171.0], [96.5, 2193.0], [96.6, 2229.0], [96.7, 2242.0], [96.8, 2264.0], [96.9, 2284.0], [97.0, 2294.0], [97.1, 2312.0], [97.2, 2327.0], [97.3, 2375.0], [97.4, 2395.0], [97.5, 2424.0], [97.6, 2451.0], [97.7, 2492.0], [97.8, 2527.0], [97.9, 2563.0], [98.0, 2587.0], [98.1, 2613.0], [98.2, 2644.0], [98.3, 2668.0], [98.4, 2718.0], [98.5, 2763.0], [98.6, 2809.0], [98.7, 2834.0], [98.8, 2884.0], [98.9, 2999.0], [99.0, 3125.0], [99.1, 3177.0], [99.2, 3225.0], [99.3, 3317.0], [99.4, 3616.0], [99.5, 3807.0], [99.6, 4015.0], [99.7, 4225.0], [99.8, 4665.0], [99.9, 5105.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 573.0, "series": [{"data": [[600.0, 411.0], [700.0, 302.0], [800.0, 283.0], [900.0, 292.0], [1000.0, 298.0], [1100.0, 253.0], [1200.0, 223.0], [1300.0, 216.0], [1400.0, 212.0], [1500.0, 125.0], [1600.0, 87.0], [1700.0, 90.0], [1800.0, 56.0], [1900.0, 52.0], [2000.0, 46.0], [2100.0, 47.0], [2200.0, 24.0], [2300.0, 22.0], [2400.0, 14.0], [2500.0, 17.0], [2600.0, 16.0], [2700.0, 11.0], [2800.0, 14.0], [2900.0, 4.0], [3000.0, 3.0], [3100.0, 11.0], [3300.0, 3.0], [3200.0, 5.0], [3400.0, 1.0], [3500.0, 2.0], [3600.0, 2.0], [3700.0, 4.0], [3800.0, 3.0], [3900.0, 2.0], [4000.0, 2.0], [4100.0, 3.0], [4300.0, 1.0], [4200.0, 1.0], [4600.0, 3.0], [4400.0, 1.0], [4700.0, 1.0], [4900.0, 2.0], [5000.0, 1.0], [5100.0, 2.0], [5300.0, 1.0], [5200.0, 1.0], [5500.0, 1.0], [9000.0, 1.0], [100.0, 29.0], [200.0, 551.0], [300.0, 382.0], [400.0, 573.0], [500.0, 483.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 678.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2971.0, "series": [{"data": [[0.0, 1541.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2971.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 678.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.798206278026907, "minX": 1.60374666E12, "maxY": 10.0, "series": [{"data": [[1.60374714E12, 9.798206278026907], [1.60374696E12, 10.0], [1.60374702E12, 10.0], [1.60374666E12, 10.0], [1.60374684E12, 10.0], [1.6037469E12, 10.0], [1.60374672E12, 10.0], [1.60374678E12, 10.0], [1.60374708E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374714E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 338.0, "minX": 1.0, "maxY": 2644.0, "series": [{"data": [[8.0, 549.0], [4.0, 802.0], [2.0, 2526.0], [1.0, 2644.0], [9.0, 338.0], [10.0, 906.7403976066395], [5.0, 1226.0], [6.0, 855.0], [3.0, 1009.0], [7.0, 1824.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 907.4364161849709]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1673.9666666666667, "minX": 1.60374666E12, "maxY": 3546465.433333333, "series": [{"data": [[1.60374714E12, 1079736.7], [1.60374696E12, 2518631.933333333], [1.60374702E12, 3546465.433333333], [1.60374666E12, 1456972.35], [1.60374684E12, 3332948.466666667], [1.6037469E12, 3019501.5833333335], [1.60374672E12, 2471958.2333333334], [1.60374678E12, 3541577.2333333334], [1.60374708E12, 3004809.7666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60374714E12, 1673.9666666666667], [1.60374696E12, 4936.6], [1.60374702E12, 5111.933333333333], [1.60374666E12, 1693.4333333333334], [1.60374684E12, 5315.933333333333], [1.6037469E12, 4138.266666666666], [1.60374672E12, 5177.083333333333], [1.60374678E12, 5018.45], [1.60374708E12, 5511.666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374714E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 819.6831955922867, "minX": 1.60374666E12, "maxY": 1156.5536480686699, "series": [{"data": [[1.60374714E12, 1127.62331838565], [1.60374696E12, 880.7687776141382], [1.60374702E12, 875.443795620438], [1.60374666E12, 1156.5536480686699], [1.60374684E12, 854.2582025677593], [1.6037469E12, 1071.5008912655974], [1.60374672E12, 839.4542897327713], [1.60374678E12, 892.7690014903135], [1.60374708E12, 819.6831955922867]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374714E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 817.8415977961425, "minX": 1.60374666E12, "maxY": 1153.56652360515, "series": [{"data": [[1.60374714E12, 1126.0807174887887], [1.60374696E12, 879.2827687776148], [1.60374702E12, 873.3386861313867], [1.60374666E12, 1153.56652360515], [1.60374684E12, 852.0984308131247], [1.6037469E12, 1069.4206773618537], [1.60374672E12, 837.8368495077368], [1.60374678E12, 890.0804769001487], [1.60374708E12, 817.8415977961425]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374714E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01283880171184022, "minX": 1.60374666E12, "maxY": 0.35622317596566544, "series": [{"data": [[1.60374714E12, 0.03139013452914798], [1.60374696E12, 0.020618556701030934], [1.60374702E12, 0.017518248175182473], [1.60374666E12, 0.35622317596566544], [1.60374684E12, 0.01283880171184022], [1.6037469E12, 0.051693404634581074], [1.60374672E12, 0.014064697609001402], [1.60374678E12, 0.020864381520119237], [1.60374708E12, 0.0179063360881543]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374714E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 189.0, "minX": 1.60374666E12, "maxY": 9012.0, "series": [{"data": [[1.60374714E12, 4139.0], [1.60374696E12, 5219.0], [1.60374702E12, 2881.0], [1.60374666E12, 5105.0], [1.60374684E12, 4728.0], [1.6037469E12, 9012.0], [1.60374672E12, 4665.0], [1.60374678E12, 4015.0], [1.60374708E12, 3238.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60374714E12, 228.11199962615967], [1.60374696E12, 202.11999983787535], [1.60374702E12, 197.17399983644486], [1.60374666E12, 203.31799983263016], [1.60374684E12, 203.0], [1.6037469E12, 213.05799986600877], [1.60374672E12, 208.40799983024598], [1.60374678E12, 200.0479998397827], [1.60374708E12, 199.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60374714E12, 229.52320014953614], [1.60374696E12, 202.73200006484984], [1.60374702E12, 197.79140006542207], [1.60374666E12, 203.94980006694794], [1.60374684E12, 203.0], [1.6037469E12, 213.5638000535965], [1.60374672E12, 209.0], [1.60374678E12, 200.6528000640869], [1.60374708E12, 199.19730006933213]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60374714E12, 228.89599981307984], [1.60374696E12, 202.45999991893768], [1.60374702E12, 197.51699991822244], [1.60374666E12, 203.66899991631507], [1.60374684E12, 203.0], [1.6037469E12, 213.33899993300437], [1.60374672E12, 208.76399991512298], [1.60374678E12, 200.38399991989135], [1.60374708E12, 199.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60374714E12, 224.0], [1.60374696E12, 195.0], [1.60374702E12, 189.0], [1.60374666E12, 202.0], [1.60374684E12, 190.0], [1.6037469E12, 193.0], [1.60374672E12, 196.0], [1.60374678E12, 195.0], [1.60374708E12, 190.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60374714E12, 1020.0], [1.60374696E12, 761.0], [1.60374702E12, 687.0], [1.60374666E12, 970.0], [1.60374684E12, 688.0], [1.6037469E12, 951.0], [1.60374672E12, 693.0], [1.60374678E12, 698.0], [1.60374708E12, 639.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374714E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 412.5, "minX": 2.0, "maxY": 2585.0, "series": [{"data": [[2.0, 2585.0], [3.0, 1264.0], [4.0, 1537.5], [5.0, 1179.0], [6.0, 1202.5], [7.0, 1091.0], [8.0, 1028.0], [9.0, 979.0], [10.0, 919.0], [11.0, 928.5], [12.0, 762.5], [13.0, 727.0], [14.0, 643.5], [15.0, 706.0], [16.0, 560.5], [17.0, 507.0], [18.0, 461.0], [19.0, 466.5], [20.0, 440.5], [21.0, 448.0], [22.0, 447.5], [23.0, 412.5], [24.0, 439.5], [26.0, 418.5], [28.0, 412.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 412.5, "minX": 2.0, "maxY": 2578.5, "series": [{"data": [[2.0, 2578.5], [3.0, 1263.0], [4.0, 1536.5], [5.0, 1179.0], [6.0, 1198.0], [7.0, 1086.0], [8.0, 1025.0], [9.0, 976.0], [10.0, 919.0], [11.0, 926.0], [12.0, 761.0], [13.0, 725.0], [14.0, 643.5], [15.0, 705.0], [16.0, 560.5], [17.0, 506.0], [18.0, 461.0], [19.0, 466.5], [20.0, 440.0], [21.0, 448.0], [22.0, 447.5], [23.0, 412.5], [24.0, 438.5], [26.0, 418.0], [28.0, 412.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.55, "minX": 1.60374666E12, "maxY": 12.1, "series": [{"data": [[1.60374714E12, 3.55], [1.60374696E12, 11.316666666666666], [1.60374702E12, 11.416666666666666], [1.60374666E12, 4.05], [1.60374684E12, 11.683333333333334], [1.6037469E12, 9.35], [1.60374672E12, 11.85], [1.60374678E12, 11.183333333333334], [1.60374708E12, 12.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374714E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.716666666666667, "minX": 1.60374666E12, "maxY": 12.1, "series": [{"data": [[1.60374714E12, 3.716666666666667], [1.60374696E12, 11.316666666666666], [1.60374702E12, 11.416666666666666], [1.60374666E12, 3.8833333333333333], [1.60374684E12, 11.683333333333334], [1.6037469E12, 9.35], [1.60374672E12, 11.85], [1.60374678E12, 11.183333333333334], [1.60374708E12, 12.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374714E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.716666666666667, "minX": 1.60374666E12, "maxY": 12.1, "series": [{"data": [[1.60374714E12, 3.716666666666667], [1.60374696E12, 11.316666666666666], [1.60374702E12, 11.416666666666666], [1.60374666E12, 3.8833333333333333], [1.60374684E12, 11.683333333333334], [1.6037469E12, 9.35], [1.60374672E12, 11.85], [1.60374678E12, 11.183333333333334], [1.60374708E12, 12.1]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374714E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.716666666666667, "minX": 1.60374666E12, "maxY": 12.1, "series": [{"data": [[1.60374714E12, 3.716666666666667], [1.60374696E12, 11.316666666666666], [1.60374702E12, 11.416666666666666], [1.60374666E12, 3.8833333333333333], [1.60374684E12, 11.683333333333334], [1.6037469E12, 9.35], [1.60374672E12, 11.85], [1.60374678E12, 11.183333333333334], [1.60374708E12, 12.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374714E12, "title": "Total Transactions Per Second"}},
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

