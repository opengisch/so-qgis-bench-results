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
        data: {"result": {"minY": 191.0, "minX": 0.0, "maxY": 5957.0, "series": [{"data": [[0.0, 191.0], [0.1, 194.0], [0.2, 196.0], [0.3, 197.0], [0.4, 197.0], [0.5, 199.0], [0.6, 201.0], [0.7, 204.0], [0.8, 207.0], [0.9, 208.0], [1.0, 209.0], [1.1, 211.0], [1.2, 211.0], [1.3, 212.0], [1.4, 213.0], [1.5, 214.0], [1.6, 214.0], [1.7, 215.0], [1.8, 216.0], [1.9, 217.0], [2.0, 218.0], [2.1, 219.0], [2.2, 221.0], [2.3, 222.0], [2.4, 222.0], [2.5, 223.0], [2.6, 224.0], [2.7, 225.0], [2.8, 225.0], [2.9, 226.0], [3.0, 227.0], [3.1, 227.0], [3.2, 228.0], [3.3, 229.0], [3.4, 230.0], [3.5, 230.0], [3.6, 231.0], [3.7, 232.0], [3.8, 232.0], [3.9, 233.0], [4.0, 233.0], [4.1, 234.0], [4.2, 234.0], [4.3, 236.0], [4.4, 236.0], [4.5, 236.0], [4.6, 236.0], [4.7, 237.0], [4.8, 239.0], [4.9, 239.0], [5.0, 239.0], [5.1, 241.0], [5.2, 243.0], [5.3, 243.0], [5.4, 244.0], [5.5, 244.0], [5.6, 245.0], [5.7, 246.0], [5.8, 247.0], [5.9, 248.0], [6.0, 248.0], [6.1, 249.0], [6.2, 250.0], [6.3, 251.0], [6.4, 252.0], [6.5, 253.0], [6.6, 255.0], [6.7, 256.0], [6.8, 257.0], [6.9, 258.0], [7.0, 259.0], [7.1, 261.0], [7.2, 262.0], [7.3, 263.0], [7.4, 264.0], [7.5, 267.0], [7.6, 268.0], [7.7, 269.0], [7.8, 270.0], [7.9, 271.0], [8.0, 273.0], [8.1, 275.0], [8.2, 276.0], [8.3, 276.0], [8.4, 277.0], [8.5, 279.0], [8.6, 280.0], [8.7, 281.0], [8.8, 281.0], [8.9, 282.0], [9.0, 283.0], [9.1, 285.0], [9.2, 286.0], [9.3, 287.0], [9.4, 288.0], [9.5, 289.0], [9.6, 290.0], [9.7, 291.0], [9.8, 291.0], [9.9, 292.0], [10.0, 293.0], [10.1, 294.0], [10.2, 295.0], [10.3, 295.0], [10.4, 296.0], [10.5, 297.0], [10.6, 298.0], [10.7, 299.0], [10.8, 301.0], [10.9, 301.0], [11.0, 303.0], [11.1, 304.0], [11.2, 305.0], [11.3, 306.0], [11.4, 307.0], [11.5, 308.0], [11.6, 309.0], [11.7, 310.0], [11.8, 311.0], [11.9, 312.0], [12.0, 312.0], [12.1, 313.0], [12.2, 314.0], [12.3, 315.0], [12.4, 317.0], [12.5, 318.0], [12.6, 319.0], [12.7, 320.0], [12.8, 321.0], [12.9, 323.0], [13.0, 323.0], [13.1, 325.0], [13.2, 325.0], [13.3, 326.0], [13.4, 327.0], [13.5, 328.0], [13.6, 328.0], [13.7, 329.0], [13.8, 330.0], [13.9, 331.0], [14.0, 332.0], [14.1, 333.0], [14.2, 334.0], [14.3, 335.0], [14.4, 336.0], [14.5, 337.0], [14.6, 338.0], [14.7, 339.0], [14.8, 340.0], [14.9, 342.0], [15.0, 343.0], [15.1, 345.0], [15.2, 346.0], [15.3, 347.0], [15.4, 348.0], [15.5, 348.0], [15.6, 349.0], [15.7, 351.0], [15.8, 353.0], [15.9, 355.0], [16.0, 356.0], [16.1, 357.0], [16.2, 360.0], [16.3, 361.0], [16.4, 364.0], [16.5, 365.0], [16.6, 367.0], [16.7, 367.0], [16.8, 370.0], [16.9, 372.0], [17.0, 374.0], [17.1, 375.0], [17.2, 376.0], [17.3, 378.0], [17.4, 379.0], [17.5, 381.0], [17.6, 382.0], [17.7, 384.0], [17.8, 385.0], [17.9, 387.0], [18.0, 389.0], [18.1, 390.0], [18.2, 391.0], [18.3, 393.0], [18.4, 394.0], [18.5, 395.0], [18.6, 396.0], [18.7, 397.0], [18.8, 399.0], [18.9, 400.0], [19.0, 402.0], [19.1, 403.0], [19.2, 403.0], [19.3, 405.0], [19.4, 406.0], [19.5, 407.0], [19.6, 408.0], [19.7, 409.0], [19.8, 411.0], [19.9, 413.0], [20.0, 414.0], [20.1, 415.0], [20.2, 416.0], [20.3, 417.0], [20.4, 418.0], [20.5, 419.0], [20.6, 421.0], [20.7, 422.0], [20.8, 422.0], [20.9, 423.0], [21.0, 424.0], [21.1, 425.0], [21.2, 426.0], [21.3, 426.0], [21.4, 427.0], [21.5, 428.0], [21.6, 430.0], [21.7, 432.0], [21.8, 433.0], [21.9, 434.0], [22.0, 435.0], [22.1, 436.0], [22.2, 437.0], [22.3, 438.0], [22.4, 439.0], [22.5, 440.0], [22.6, 441.0], [22.7, 441.0], [22.8, 442.0], [22.9, 443.0], [23.0, 443.0], [23.1, 444.0], [23.2, 445.0], [23.3, 446.0], [23.4, 446.0], [23.5, 447.0], [23.6, 449.0], [23.7, 449.0], [23.8, 450.0], [23.9, 451.0], [24.0, 451.0], [24.1, 452.0], [24.2, 453.0], [24.3, 453.0], [24.4, 454.0], [24.5, 455.0], [24.6, 455.0], [24.7, 456.0], [24.8, 456.0], [24.9, 457.0], [25.0, 458.0], [25.1, 459.0], [25.2, 460.0], [25.3, 461.0], [25.4, 462.0], [25.5, 463.0], [25.6, 464.0], [25.7, 465.0], [25.8, 466.0], [25.9, 467.0], [26.0, 468.0], [26.1, 469.0], [26.2, 470.0], [26.3, 471.0], [26.4, 472.0], [26.5, 473.0], [26.6, 473.0], [26.7, 475.0], [26.8, 476.0], [26.9, 477.0], [27.0, 478.0], [27.1, 480.0], [27.2, 480.0], [27.3, 481.0], [27.4, 482.0], [27.5, 482.0], [27.6, 483.0], [27.7, 484.0], [27.8, 484.0], [27.9, 485.0], [28.0, 486.0], [28.1, 487.0], [28.2, 488.0], [28.3, 488.0], [28.4, 490.0], [28.5, 491.0], [28.6, 491.0], [28.7, 492.0], [28.8, 493.0], [28.9, 494.0], [29.0, 496.0], [29.1, 496.0], [29.2, 496.0], [29.3, 497.0], [29.4, 498.0], [29.5, 500.0], [29.6, 500.0], [29.7, 502.0], [29.8, 502.0], [29.9, 503.0], [30.0, 504.0], [30.1, 505.0], [30.2, 506.0], [30.3, 507.0], [30.4, 508.0], [30.5, 509.0], [30.6, 510.0], [30.7, 511.0], [30.8, 512.0], [30.9, 513.0], [31.0, 515.0], [31.1, 516.0], [31.2, 516.0], [31.3, 517.0], [31.4, 519.0], [31.5, 520.0], [31.6, 521.0], [31.7, 522.0], [31.8, 524.0], [31.9, 525.0], [32.0, 526.0], [32.1, 527.0], [32.2, 528.0], [32.3, 529.0], [32.4, 529.0], [32.5, 530.0], [32.6, 531.0], [32.7, 533.0], [32.8, 534.0], [32.9, 535.0], [33.0, 537.0], [33.1, 538.0], [33.2, 538.0], [33.3, 539.0], [33.4, 539.0], [33.5, 541.0], [33.6, 542.0], [33.7, 543.0], [33.8, 544.0], [33.9, 545.0], [34.0, 547.0], [34.1, 547.0], [34.2, 548.0], [34.3, 549.0], [34.4, 551.0], [34.5, 551.0], [34.6, 552.0], [34.7, 553.0], [34.8, 554.0], [34.9, 555.0], [35.0, 556.0], [35.1, 557.0], [35.2, 559.0], [35.3, 560.0], [35.4, 561.0], [35.5, 562.0], [35.6, 562.0], [35.7, 563.0], [35.8, 565.0], [35.9, 566.0], [36.0, 567.0], [36.1, 569.0], [36.2, 569.0], [36.3, 570.0], [36.4, 571.0], [36.5, 572.0], [36.6, 572.0], [36.7, 573.0], [36.8, 574.0], [36.9, 575.0], [37.0, 576.0], [37.1, 577.0], [37.2, 578.0], [37.3, 579.0], [37.4, 580.0], [37.5, 580.0], [37.6, 581.0], [37.7, 583.0], [37.8, 583.0], [37.9, 584.0], [38.0, 585.0], [38.1, 586.0], [38.2, 587.0], [38.3, 588.0], [38.4, 588.0], [38.5, 589.0], [38.6, 590.0], [38.7, 592.0], [38.8, 593.0], [38.9, 594.0], [39.0, 594.0], [39.1, 595.0], [39.2, 596.0], [39.3, 597.0], [39.4, 598.0], [39.5, 600.0], [39.6, 601.0], [39.7, 602.0], [39.8, 603.0], [39.9, 604.0], [40.0, 605.0], [40.1, 606.0], [40.2, 607.0], [40.3, 608.0], [40.4, 608.0], [40.5, 610.0], [40.6, 610.0], [40.7, 611.0], [40.8, 611.0], [40.9, 612.0], [41.0, 613.0], [41.1, 613.0], [41.2, 614.0], [41.3, 614.0], [41.4, 615.0], [41.5, 616.0], [41.6, 618.0], [41.7, 618.0], [41.8, 619.0], [41.9, 620.0], [42.0, 621.0], [42.1, 622.0], [42.2, 623.0], [42.3, 624.0], [42.4, 626.0], [42.5, 626.0], [42.6, 627.0], [42.7, 628.0], [42.8, 629.0], [42.9, 629.0], [43.0, 630.0], [43.1, 631.0], [43.2, 632.0], [43.3, 633.0], [43.4, 634.0], [43.5, 636.0], [43.6, 638.0], [43.7, 639.0], [43.8, 640.0], [43.9, 641.0], [44.0, 642.0], [44.1, 644.0], [44.2, 645.0], [44.3, 646.0], [44.4, 646.0], [44.5, 648.0], [44.6, 649.0], [44.7, 650.0], [44.8, 652.0], [44.9, 653.0], [45.0, 654.0], [45.1, 655.0], [45.2, 656.0], [45.3, 657.0], [45.4, 659.0], [45.5, 660.0], [45.6, 661.0], [45.7, 662.0], [45.8, 664.0], [45.9, 665.0], [46.0, 667.0], [46.1, 667.0], [46.2, 668.0], [46.3, 669.0], [46.4, 670.0], [46.5, 671.0], [46.6, 673.0], [46.7, 674.0], [46.8, 676.0], [46.9, 677.0], [47.0, 680.0], [47.1, 681.0], [47.2, 682.0], [47.3, 684.0], [47.4, 685.0], [47.5, 686.0], [47.6, 687.0], [47.7, 688.0], [47.8, 689.0], [47.9, 690.0], [48.0, 692.0], [48.1, 694.0], [48.2, 696.0], [48.3, 698.0], [48.4, 698.0], [48.5, 699.0], [48.6, 700.0], [48.7, 702.0], [48.8, 703.0], [48.9, 704.0], [49.0, 704.0], [49.1, 706.0], [49.2, 709.0], [49.3, 709.0], [49.4, 710.0], [49.5, 712.0], [49.6, 713.0], [49.7, 714.0], [49.8, 716.0], [49.9, 717.0], [50.0, 718.0], [50.1, 721.0], [50.2, 723.0], [50.3, 724.0], [50.4, 726.0], [50.5, 728.0], [50.6, 729.0], [50.7, 730.0], [50.8, 731.0], [50.9, 732.0], [51.0, 733.0], [51.1, 735.0], [51.2, 738.0], [51.3, 740.0], [51.4, 741.0], [51.5, 742.0], [51.6, 743.0], [51.7, 745.0], [51.8, 745.0], [51.9, 747.0], [52.0, 749.0], [52.1, 751.0], [52.2, 753.0], [52.3, 754.0], [52.4, 756.0], [52.5, 758.0], [52.6, 763.0], [52.7, 764.0], [52.8, 766.0], [52.9, 767.0], [53.0, 770.0], [53.1, 770.0], [53.2, 772.0], [53.3, 776.0], [53.4, 777.0], [53.5, 778.0], [53.6, 779.0], [53.7, 781.0], [53.8, 783.0], [53.9, 785.0], [54.0, 786.0], [54.1, 788.0], [54.2, 790.0], [54.3, 792.0], [54.4, 794.0], [54.5, 795.0], [54.6, 797.0], [54.7, 802.0], [54.8, 804.0], [54.9, 805.0], [55.0, 807.0], [55.1, 810.0], [55.2, 810.0], [55.3, 812.0], [55.4, 814.0], [55.5, 815.0], [55.6, 818.0], [55.7, 820.0], [55.8, 822.0], [55.9, 824.0], [56.0, 826.0], [56.1, 827.0], [56.2, 828.0], [56.3, 831.0], [56.4, 833.0], [56.5, 836.0], [56.6, 838.0], [56.7, 839.0], [56.8, 842.0], [56.9, 845.0], [57.0, 847.0], [57.1, 848.0], [57.2, 850.0], [57.3, 851.0], [57.4, 852.0], [57.5, 854.0], [57.6, 857.0], [57.7, 858.0], [57.8, 859.0], [57.9, 860.0], [58.0, 861.0], [58.1, 863.0], [58.2, 864.0], [58.3, 865.0], [58.4, 866.0], [58.5, 867.0], [58.6, 869.0], [58.7, 870.0], [58.8, 871.0], [58.9, 872.0], [59.0, 874.0], [59.1, 874.0], [59.2, 876.0], [59.3, 876.0], [59.4, 878.0], [59.5, 879.0], [59.6, 883.0], [59.7, 885.0], [59.8, 885.0], [59.9, 888.0], [60.0, 890.0], [60.1, 893.0], [60.2, 894.0], [60.3, 895.0], [60.4, 897.0], [60.5, 899.0], [60.6, 902.0], [60.7, 903.0], [60.8, 905.0], [60.9, 907.0], [61.0, 910.0], [61.1, 911.0], [61.2, 912.0], [61.3, 916.0], [61.4, 917.0], [61.5, 919.0], [61.6, 920.0], [61.7, 921.0], [61.8, 922.0], [61.9, 924.0], [62.0, 925.0], [62.1, 927.0], [62.2, 929.0], [62.3, 929.0], [62.4, 931.0], [62.5, 934.0], [62.6, 936.0], [62.7, 938.0], [62.8, 939.0], [62.9, 942.0], [63.0, 944.0], [63.1, 945.0], [63.2, 947.0], [63.3, 949.0], [63.4, 950.0], [63.5, 952.0], [63.6, 953.0], [63.7, 958.0], [63.8, 961.0], [63.9, 963.0], [64.0, 964.0], [64.1, 966.0], [64.2, 967.0], [64.3, 971.0], [64.4, 975.0], [64.5, 977.0], [64.6, 979.0], [64.7, 981.0], [64.8, 983.0], [64.9, 984.0], [65.0, 986.0], [65.1, 988.0], [65.2, 990.0], [65.3, 993.0], [65.4, 994.0], [65.5, 997.0], [65.6, 999.0], [65.7, 1000.0], [65.8, 1001.0], [65.9, 1002.0], [66.0, 1006.0], [66.1, 1007.0], [66.2, 1010.0], [66.3, 1011.0], [66.4, 1015.0], [66.5, 1018.0], [66.6, 1020.0], [66.7, 1021.0], [66.8, 1023.0], [66.9, 1026.0], [67.0, 1028.0], [67.1, 1030.0], [67.2, 1032.0], [67.3, 1033.0], [67.4, 1036.0], [67.5, 1037.0], [67.6, 1040.0], [67.7, 1041.0], [67.8, 1044.0], [67.9, 1045.0], [68.0, 1047.0], [68.1, 1050.0], [68.2, 1051.0], [68.3, 1054.0], [68.4, 1056.0], [68.5, 1058.0], [68.6, 1058.0], [68.7, 1060.0], [68.8, 1064.0], [68.9, 1065.0], [69.0, 1067.0], [69.1, 1069.0], [69.2, 1070.0], [69.3, 1073.0], [69.4, 1074.0], [69.5, 1076.0], [69.6, 1077.0], [69.7, 1080.0], [69.8, 1084.0], [69.9, 1085.0], [70.0, 1087.0], [70.1, 1089.0], [70.2, 1091.0], [70.3, 1093.0], [70.4, 1094.0], [70.5, 1095.0], [70.6, 1097.0], [70.7, 1099.0], [70.8, 1101.0], [70.9, 1102.0], [71.0, 1103.0], [71.1, 1106.0], [71.2, 1109.0], [71.3, 1109.0], [71.4, 1111.0], [71.5, 1113.0], [71.6, 1116.0], [71.7, 1119.0], [71.8, 1120.0], [71.9, 1122.0], [72.0, 1124.0], [72.1, 1127.0], [72.2, 1128.0], [72.3, 1131.0], [72.4, 1132.0], [72.5, 1134.0], [72.6, 1135.0], [72.7, 1137.0], [72.8, 1140.0], [72.9, 1143.0], [73.0, 1144.0], [73.1, 1146.0], [73.2, 1148.0], [73.3, 1150.0], [73.4, 1152.0], [73.5, 1153.0], [73.6, 1155.0], [73.7, 1157.0], [73.8, 1158.0], [73.9, 1161.0], [74.0, 1162.0], [74.1, 1164.0], [74.2, 1165.0], [74.3, 1168.0], [74.4, 1170.0], [74.5, 1173.0], [74.6, 1174.0], [74.7, 1177.0], [74.8, 1181.0], [74.9, 1184.0], [75.0, 1184.0], [75.1, 1186.0], [75.2, 1188.0], [75.3, 1189.0], [75.4, 1194.0], [75.5, 1196.0], [75.6, 1199.0], [75.7, 1202.0], [75.8, 1205.0], [75.9, 1207.0], [76.0, 1209.0], [76.1, 1210.0], [76.2, 1213.0], [76.3, 1215.0], [76.4, 1219.0], [76.5, 1220.0], [76.6, 1224.0], [76.7, 1225.0], [76.8, 1226.0], [76.9, 1228.0], [77.0, 1230.0], [77.1, 1232.0], [77.2, 1235.0], [77.3, 1237.0], [77.4, 1243.0], [77.5, 1244.0], [77.6, 1246.0], [77.7, 1247.0], [77.8, 1250.0], [77.9, 1253.0], [78.0, 1255.0], [78.1, 1256.0], [78.2, 1257.0], [78.3, 1262.0], [78.4, 1267.0], [78.5, 1269.0], [78.6, 1275.0], [78.7, 1276.0], [78.8, 1279.0], [78.9, 1281.0], [79.0, 1284.0], [79.1, 1286.0], [79.2, 1287.0], [79.3, 1289.0], [79.4, 1290.0], [79.5, 1293.0], [79.6, 1294.0], [79.7, 1296.0], [79.8, 1299.0], [79.9, 1303.0], [80.0, 1307.0], [80.1, 1309.0], [80.2, 1313.0], [80.3, 1316.0], [80.4, 1318.0], [80.5, 1319.0], [80.6, 1320.0], [80.7, 1322.0], [80.8, 1324.0], [80.9, 1329.0], [81.0, 1333.0], [81.1, 1336.0], [81.2, 1341.0], [81.3, 1344.0], [81.4, 1345.0], [81.5, 1348.0], [81.6, 1352.0], [81.7, 1357.0], [81.8, 1359.0], [81.9, 1362.0], [82.0, 1365.0], [82.1, 1369.0], [82.2, 1373.0], [82.3, 1374.0], [82.4, 1377.0], [82.5, 1379.0], [82.6, 1380.0], [82.7, 1384.0], [82.8, 1386.0], [82.9, 1389.0], [83.0, 1392.0], [83.1, 1393.0], [83.2, 1395.0], [83.3, 1399.0], [83.4, 1404.0], [83.5, 1406.0], [83.6, 1408.0], [83.7, 1414.0], [83.8, 1418.0], [83.9, 1420.0], [84.0, 1421.0], [84.1, 1423.0], [84.2, 1424.0], [84.3, 1427.0], [84.4, 1429.0], [84.5, 1433.0], [84.6, 1437.0], [84.7, 1440.0], [84.8, 1444.0], [84.9, 1447.0], [85.0, 1451.0], [85.1, 1454.0], [85.2, 1458.0], [85.3, 1462.0], [85.4, 1463.0], [85.5, 1465.0], [85.6, 1467.0], [85.7, 1470.0], [85.8, 1475.0], [85.9, 1478.0], [86.0, 1482.0], [86.1, 1485.0], [86.2, 1485.0], [86.3, 1489.0], [86.4, 1491.0], [86.5, 1495.0], [86.6, 1497.0], [86.7, 1501.0], [86.8, 1504.0], [86.9, 1509.0], [87.0, 1512.0], [87.1, 1515.0], [87.2, 1519.0], [87.3, 1521.0], [87.4, 1524.0], [87.5, 1527.0], [87.6, 1530.0], [87.7, 1535.0], [87.8, 1538.0], [87.9, 1543.0], [88.0, 1547.0], [88.1, 1549.0], [88.2, 1552.0], [88.3, 1558.0], [88.4, 1560.0], [88.5, 1567.0], [88.6, 1572.0], [88.7, 1576.0], [88.8, 1579.0], [88.9, 1581.0], [89.0, 1587.0], [89.1, 1592.0], [89.2, 1594.0], [89.3, 1596.0], [89.4, 1605.0], [89.5, 1609.0], [89.6, 1614.0], [89.7, 1617.0], [89.8, 1620.0], [89.9, 1626.0], [90.0, 1636.0], [90.1, 1639.0], [90.2, 1645.0], [90.3, 1653.0], [90.4, 1655.0], [90.5, 1664.0], [90.6, 1674.0], [90.7, 1678.0], [90.8, 1685.0], [90.9, 1690.0], [91.0, 1694.0], [91.1, 1699.0], [91.2, 1708.0], [91.3, 1710.0], [91.4, 1716.0], [91.5, 1719.0], [91.6, 1727.0], [91.7, 1736.0], [91.8, 1740.0], [91.9, 1746.0], [92.0, 1754.0], [92.1, 1764.0], [92.2, 1769.0], [92.3, 1774.0], [92.4, 1781.0], [92.5, 1786.0], [92.6, 1796.0], [92.7, 1805.0], [92.8, 1819.0], [92.9, 1824.0], [93.0, 1837.0], [93.1, 1841.0], [93.2, 1856.0], [93.3, 1863.0], [93.4, 1872.0], [93.5, 1886.0], [93.6, 1898.0], [93.7, 1914.0], [93.8, 1924.0], [93.9, 1934.0], [94.0, 1940.0], [94.1, 1944.0], [94.2, 1948.0], [94.3, 1957.0], [94.4, 1968.0], [94.5, 1982.0], [94.6, 1987.0], [94.7, 2008.0], [94.8, 2027.0], [94.9, 2039.0], [95.0, 2045.0], [95.1, 2056.0], [95.2, 2066.0], [95.3, 2081.0], [95.4, 2093.0], [95.5, 2103.0], [95.6, 2114.0], [95.7, 2125.0], [95.8, 2136.0], [95.9, 2143.0], [96.0, 2154.0], [96.1, 2182.0], [96.2, 2197.0], [96.3, 2210.0], [96.4, 2220.0], [96.5, 2230.0], [96.6, 2244.0], [96.7, 2258.0], [96.8, 2265.0], [96.9, 2270.0], [97.0, 2289.0], [97.1, 2307.0], [97.2, 2319.0], [97.3, 2357.0], [97.4, 2383.0], [97.5, 2390.0], [97.6, 2399.0], [97.7, 2430.0], [97.8, 2472.0], [97.9, 2491.0], [98.0, 2515.0], [98.1, 2543.0], [98.2, 2579.0], [98.3, 2611.0], [98.4, 2638.0], [98.5, 2713.0], [98.6, 2770.0], [98.7, 2810.0], [98.8, 2853.0], [98.9, 2925.0], [99.0, 3017.0], [99.1, 3214.0], [99.2, 3372.0], [99.3, 3438.0], [99.4, 3555.0], [99.5, 3616.0], [99.6, 3798.0], [99.7, 4259.0], [99.8, 4991.0], [99.9, 5512.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 552.0, "series": [{"data": [[600.0, 470.0], [700.0, 317.0], [800.0, 304.0], [900.0, 268.0], [1000.0, 262.0], [1100.0, 256.0], [1200.0, 217.0], [1300.0, 182.0], [1400.0, 173.0], [1500.0, 140.0], [1600.0, 92.0], [1700.0, 78.0], [1800.0, 51.0], [1900.0, 54.0], [2000.0, 43.0], [2100.0, 37.0], [2300.0, 29.0], [2200.0, 44.0], [2400.0, 19.0], [2500.0, 13.0], [2600.0, 13.0], [2700.0, 10.0], [2800.0, 7.0], [2900.0, 10.0], [3000.0, 2.0], [3100.0, 3.0], [3300.0, 4.0], [3200.0, 3.0], [3400.0, 4.0], [3500.0, 9.0], [3700.0, 4.0], [3600.0, 3.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4200.0, 2.0], [4100.0, 1.0], [4500.0, 2.0], [4700.0, 1.0], [5100.0, 1.0], [5000.0, 2.0], [4900.0, 1.0], [5300.0, 1.0], [5500.0, 3.0], [5600.0, 1.0], [5700.0, 1.0], [5900.0, 1.0], [100.0, 28.0], [200.0, 528.0], [300.0, 423.0], [400.0, 552.0], [500.0, 518.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 692.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2961.0, "series": [{"data": [[0.0, 1537.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2961.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 692.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.793577981651374, "minX": 1.60374366E12, "maxY": 10.0, "series": [{"data": [[1.60374366E12, 10.0], [1.60374414E12, 9.793577981651374], [1.60374396E12, 10.0], [1.60374378E12, 10.0], [1.60374408E12, 10.0], [1.6037439E12, 10.0], [1.60374372E12, 10.0], [1.60374402E12, 10.0], [1.60374384E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374414E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 293.0, "minX": 1.0, "maxY": 2654.0, "series": [{"data": [[8.0, 550.0], [4.0, 1736.0], [2.0, 2654.0], [1.0, 2611.0], [9.0, 411.0], [10.0, 894.2748504149775], [5.0, 594.0], [6.0, 293.0], [3.0, 1521.0], [7.0, 1867.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 895.0818882466277]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1308.3333333333333, "minX": 1.60374366E12, "maxY": 3544604.816666667, "series": [{"data": [[1.60374366E12, 1259007.0833333333], [1.60374414E12, 1026688.2833333333], [1.60374396E12, 2508016.45], [1.60374378E12, 3499755.4166666665], [1.60374408E12, 3073011.8833333333], [1.6037439E12, 3122116.9], [1.60374372E12, 2532225.1666666665], [1.60374402E12, 3544604.816666667], [1.60374384E12, 3407028.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60374366E12, 1308.3333333333333], [1.60374414E12, 1637.4666666666667], [1.60374396E12, 4958.866666666667], [1.60374378E12, 5030.25], [1.60374408E12, 5555.316666666667], [1.6037439E12, 4290.183333333333], [1.60374372E12, 5205.6], [1.60374402E12, 5082.516666666666], [1.60374384E12, 5508.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374414E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 816.3770491803276, "minX": 1.60374366E12, "maxY": 1198.6610169491523, "series": [{"data": [[1.60374366E12, 1198.6610169491523], [1.60374414E12, 1087.779816513762], [1.60374396E12, 875.0865102639294], [1.60374378E12, 881.3199404761905], [1.60374408E12, 816.3770491803276], [1.6037439E12, 1032.714285714287], [1.60374372E12, 841.2430555555551], [1.60374402E12, 879.7973568281942], [1.60374384E12, 831.7579092159551]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374414E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 814.6051912568305, "minX": 1.60374366E12, "maxY": 1195.508474576271, "series": [{"data": [[1.60374366E12, 1195.508474576271], [1.60374414E12, 1086.0275229357778], [1.60374396E12, 873.5953079178881], [1.60374378E12, 878.861607142857], [1.60374408E12, 814.6051912568305], [1.6037439E12, 1030.667814113598], [1.60374372E12, 839.5847222222212], [1.60374402E12, 877.7753303964759], [1.60374384E12, 829.4456671251722]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374414E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60374366E12, "maxY": 0.5423728813559329, "series": [{"data": [[1.60374366E12, 0.5423728813559329], [1.60374414E12, 0.0], [1.60374396E12, 0.016129032258064495], [1.60374378E12, 0.0163690476190476], [1.60374408E12, 0.015027322404371605], [1.6037439E12, 0.018932874354561077], [1.60374372E12, 0.020833333333333353], [1.60374402E12, 0.032305433186490436], [1.60374384E12, 0.015130674002751037]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374414E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 191.0, "minX": 1.60374366E12, "maxY": 5957.0, "series": [{"data": [[1.60374366E12, 4738.0], [1.60374414E12, 3930.0], [1.60374396E12, 5705.0], [1.60374378E12, 4502.0], [1.60374408E12, 3438.0], [1.6037439E12, 5957.0], [1.60374372E12, 5517.0], [1.60374402E12, 2925.0], [1.60374384E12, 4274.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60374366E12, 216.21399970293044], [1.60374414E12, 234.47799906015396], [1.60374396E12, 214.58799934864044], [1.60374378E12, 208.0], [1.60374408E12, 198.59699982523918], [1.6037439E12, 231.23799986124038], [1.60374372E12, 206.0], [1.60374402E12, 204.41399951219557], [1.60374384E12, 196.55199982643128]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60374366E12, 217.3354001188278], [1.60374414E12, 238.36200041770934], [1.60374396E12, 217.04680026054382], [1.60374378E12, 208.0], [1.60374408E12, 199.77010020971298], [1.6037439E12, 231.76180005550384], [1.60374372E12, 206.1379000687599], [1.60374402E12, 206.25540019512175], [1.60374384E12, 197.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60374366E12, 216.83699985146524], [1.60374414E12, 236.6099994778633], [1.60374396E12, 215.95399967432022], [1.60374378E12, 208.0], [1.60374408E12, 198.9634999126196], [1.6037439E12, 231.5289999306202], [1.60374372E12, 206.0], [1.60374402E12, 205.4369997560978], [1.60374384E12, 196.91599991321564]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60374366E12, 212.0], [1.60374414E12, 217.0], [1.60374396E12, 203.0], [1.60374378E12, 197.0], [1.60374408E12, 191.0], [1.6037439E12, 194.0], [1.60374372E12, 197.0], [1.60374402E12, 192.0], [1.60374384E12, 191.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60374366E12, 937.0], [1.60374414E12, 935.5], [1.60374396E12, 724.0], [1.60374378E12, 673.0], [1.60374408E12, 627.0], [1.6037439E12, 884.0], [1.60374372E12, 683.0], [1.60374402E12, 690.0], [1.60374384E12, 639.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374414E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 417.0, "minX": 1.0, "maxY": 2632.5, "series": [{"data": [[2.0, 2632.5], [3.0, 1961.5], [4.0, 1433.5], [5.0, 1496.0], [6.0, 1173.0], [7.0, 1032.5], [8.0, 1073.0], [9.0, 919.0], [10.0, 889.0], [11.0, 809.5], [12.0, 739.5], [13.0, 725.5], [14.0, 661.0], [15.0, 627.0], [16.0, 604.5], [1.0, 1521.0], [17.0, 527.0], [18.0, 503.0], [19.0, 451.0], [20.0, 446.0], [21.0, 484.0], [22.0, 456.0], [23.0, 428.0], [24.0, 445.5], [25.0, 454.0], [26.0, 417.5], [27.0, 417.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 416.5, "minX": 1.0, "maxY": 2627.0, "series": [{"data": [[2.0, 2627.0], [3.0, 1958.5], [4.0, 1428.5], [5.0, 1487.0], [6.0, 1170.0], [7.0, 1026.0], [8.0, 1069.5], [9.0, 919.0], [10.0, 888.0], [11.0, 806.5], [12.0, 736.5], [13.0, 725.0], [14.0, 658.5], [15.0, 625.0], [16.0, 604.5], [1.0, 1519.0], [17.0, 527.0], [18.0, 502.0], [19.0, 451.0], [20.0, 445.5], [21.0, 483.5], [22.0, 456.0], [23.0, 428.0], [24.0, 445.0], [25.0, 454.0], [26.0, 417.5], [27.0, 416.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.1166666666666667, "minX": 1.60374366E12, "maxY": 12.2, "series": [{"data": [[1.60374366E12, 3.1166666666666667], [1.60374414E12, 3.466666666666667], [1.60374396E12, 11.366666666666667], [1.60374378E12, 11.2], [1.60374408E12, 12.2], [1.6037439E12, 9.683333333333334], [1.60374372E12, 12.0], [1.60374402E12, 11.35], [1.60374384E12, 12.116666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374414E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.95, "minX": 1.60374366E12, "maxY": 12.2, "series": [{"data": [[1.60374366E12, 2.95], [1.60374414E12, 3.6333333333333333], [1.60374396E12, 11.366666666666667], [1.60374378E12, 11.2], [1.60374408E12, 12.2], [1.6037439E12, 9.683333333333334], [1.60374372E12, 12.0], [1.60374402E12, 11.35], [1.60374384E12, 12.116666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374414E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.95, "minX": 1.60374366E12, "maxY": 12.2, "series": [{"data": [[1.60374366E12, 2.95], [1.60374414E12, 3.6333333333333333], [1.60374396E12, 11.366666666666667], [1.60374378E12, 11.2], [1.60374408E12, 12.2], [1.6037439E12, 9.683333333333334], [1.60374372E12, 12.0], [1.60374402E12, 11.35], [1.60374384E12, 12.116666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374414E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.95, "minX": 1.60374366E12, "maxY": 12.2, "series": [{"data": [[1.60374366E12, 2.95], [1.60374414E12, 3.6333333333333333], [1.60374396E12, 11.366666666666667], [1.60374378E12, 11.2], [1.60374408E12, 12.2], [1.6037439E12, 9.683333333333334], [1.60374372E12, 12.0], [1.60374402E12, 11.35], [1.60374384E12, 12.116666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374414E12, "title": "Total Transactions Per Second"}},
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

