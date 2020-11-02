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
        data: {"result": {"minY": 178.0, "minX": 0.0, "maxY": 5996.0, "series": [{"data": [[0.0, 178.0], [0.1, 192.0], [0.2, 194.0], [0.3, 195.0], [0.4, 197.0], [0.5, 198.0], [0.6, 199.0], [0.7, 200.0], [0.8, 200.0], [0.9, 201.0], [1.0, 201.0], [1.1, 202.0], [1.2, 203.0], [1.3, 204.0], [1.4, 205.0], [1.5, 206.0], [1.6, 206.0], [1.7, 208.0], [1.8, 208.0], [1.9, 209.0], [2.0, 211.0], [2.1, 211.0], [2.2, 213.0], [2.3, 213.0], [2.4, 214.0], [2.5, 217.0], [2.6, 218.0], [2.7, 219.0], [2.8, 220.0], [2.9, 221.0], [3.0, 222.0], [3.1, 223.0], [3.2, 224.0], [3.3, 224.0], [3.4, 225.0], [3.5, 226.0], [3.6, 226.0], [3.7, 227.0], [3.8, 228.0], [3.9, 229.0], [4.0, 229.0], [4.1, 230.0], [4.2, 231.0], [4.3, 232.0], [4.4, 232.0], [4.5, 233.0], [4.6, 234.0], [4.7, 235.0], [4.8, 235.0], [4.9, 236.0], [5.0, 236.0], [5.1, 237.0], [5.2, 238.0], [5.3, 239.0], [5.4, 240.0], [5.5, 241.0], [5.6, 241.0], [5.7, 242.0], [5.8, 243.0], [5.9, 244.0], [6.0, 245.0], [6.1, 246.0], [6.2, 247.0], [6.3, 247.0], [6.4, 249.0], [6.5, 250.0], [6.6, 250.0], [6.7, 252.0], [6.8, 253.0], [6.9, 256.0], [7.0, 257.0], [7.1, 258.0], [7.2, 260.0], [7.3, 263.0], [7.4, 264.0], [7.5, 265.0], [7.6, 266.0], [7.7, 268.0], [7.8, 270.0], [7.9, 271.0], [8.0, 273.0], [8.1, 274.0], [8.2, 274.0], [8.3, 276.0], [8.4, 277.0], [8.5, 278.0], [8.6, 279.0], [8.7, 280.0], [8.8, 281.0], [8.9, 282.0], [9.0, 283.0], [9.1, 284.0], [9.2, 285.0], [9.3, 286.0], [9.4, 286.0], [9.5, 287.0], [9.6, 288.0], [9.7, 288.0], [9.8, 289.0], [9.9, 289.0], [10.0, 290.0], [10.1, 291.0], [10.2, 293.0], [10.3, 294.0], [10.4, 295.0], [10.5, 296.0], [10.6, 296.0], [10.7, 297.0], [10.8, 298.0], [10.9, 299.0], [11.0, 300.0], [11.1, 301.0], [11.2, 302.0], [11.3, 303.0], [11.4, 303.0], [11.5, 305.0], [11.6, 306.0], [11.7, 307.0], [11.8, 307.0], [11.9, 308.0], [12.0, 309.0], [12.1, 311.0], [12.2, 312.0], [12.3, 314.0], [12.4, 317.0], [12.5, 319.0], [12.6, 320.0], [12.7, 321.0], [12.8, 321.0], [12.9, 322.0], [13.0, 323.0], [13.1, 324.0], [13.2, 325.0], [13.3, 325.0], [13.4, 327.0], [13.5, 328.0], [13.6, 328.0], [13.7, 329.0], [13.8, 330.0], [13.9, 331.0], [14.0, 332.0], [14.1, 333.0], [14.2, 334.0], [14.3, 335.0], [14.4, 336.0], [14.5, 338.0], [14.6, 339.0], [14.7, 340.0], [14.8, 342.0], [14.9, 343.0], [15.0, 343.0], [15.1, 344.0], [15.2, 346.0], [15.3, 348.0], [15.4, 350.0], [15.5, 352.0], [15.6, 355.0], [15.7, 358.0], [15.8, 359.0], [15.9, 361.0], [16.0, 363.0], [16.1, 365.0], [16.2, 367.0], [16.3, 369.0], [16.4, 372.0], [16.5, 375.0], [16.6, 377.0], [16.7, 379.0], [16.8, 382.0], [16.9, 383.0], [17.0, 385.0], [17.1, 387.0], [17.2, 389.0], [17.3, 391.0], [17.4, 392.0], [17.5, 393.0], [17.6, 395.0], [17.7, 395.0], [17.8, 397.0], [17.9, 398.0], [18.0, 399.0], [18.1, 400.0], [18.2, 402.0], [18.3, 403.0], [18.4, 403.0], [18.5, 404.0], [18.6, 406.0], [18.7, 407.0], [18.8, 408.0], [18.9, 409.0], [19.0, 410.0], [19.1, 411.0], [19.2, 412.0], [19.3, 413.0], [19.4, 414.0], [19.5, 415.0], [19.6, 415.0], [19.7, 416.0], [19.8, 417.0], [19.9, 418.0], [20.0, 419.0], [20.1, 420.0], [20.2, 422.0], [20.3, 422.0], [20.4, 423.0], [20.5, 424.0], [20.6, 425.0], [20.7, 426.0], [20.8, 427.0], [20.9, 427.0], [21.0, 429.0], [21.1, 430.0], [21.2, 431.0], [21.3, 431.0], [21.4, 432.0], [21.5, 433.0], [21.6, 433.0], [21.7, 435.0], [21.8, 436.0], [21.9, 436.0], [22.0, 437.0], [22.1, 438.0], [22.2, 439.0], [22.3, 439.0], [22.4, 440.0], [22.5, 440.0], [22.6, 442.0], [22.7, 443.0], [22.8, 444.0], [22.9, 445.0], [23.0, 446.0], [23.1, 447.0], [23.2, 448.0], [23.3, 448.0], [23.4, 449.0], [23.5, 450.0], [23.6, 450.0], [23.7, 451.0], [23.8, 451.0], [23.9, 452.0], [24.0, 452.0], [24.1, 453.0], [24.2, 455.0], [24.3, 456.0], [24.4, 457.0], [24.5, 458.0], [24.6, 459.0], [24.7, 460.0], [24.8, 461.0], [24.9, 462.0], [25.0, 463.0], [25.1, 464.0], [25.2, 464.0], [25.3, 465.0], [25.4, 466.0], [25.5, 467.0], [25.6, 468.0], [25.7, 468.0], [25.8, 469.0], [25.9, 470.0], [26.0, 471.0], [26.1, 472.0], [26.2, 473.0], [26.3, 473.0], [26.4, 475.0], [26.5, 475.0], [26.6, 477.0], [26.7, 478.0], [26.8, 479.0], [26.9, 481.0], [27.0, 482.0], [27.1, 483.0], [27.2, 484.0], [27.3, 485.0], [27.4, 486.0], [27.5, 486.0], [27.6, 487.0], [27.7, 488.0], [27.8, 489.0], [27.9, 490.0], [28.0, 491.0], [28.1, 491.0], [28.2, 493.0], [28.3, 494.0], [28.4, 494.0], [28.5, 496.0], [28.6, 496.0], [28.7, 498.0], [28.8, 498.0], [28.9, 499.0], [29.0, 500.0], [29.1, 501.0], [29.2, 501.0], [29.3, 502.0], [29.4, 503.0], [29.5, 504.0], [29.6, 505.0], [29.7, 506.0], [29.8, 507.0], [29.9, 509.0], [30.0, 509.0], [30.1, 510.0], [30.2, 511.0], [30.3, 512.0], [30.4, 513.0], [30.5, 514.0], [30.6, 515.0], [30.7, 516.0], [30.8, 517.0], [30.9, 519.0], [31.0, 519.0], [31.1, 520.0], [31.2, 520.0], [31.3, 522.0], [31.4, 524.0], [31.5, 524.0], [31.6, 525.0], [31.7, 526.0], [31.8, 526.0], [31.9, 527.0], [32.0, 529.0], [32.1, 529.0], [32.2, 531.0], [32.3, 533.0], [32.4, 533.0], [32.5, 534.0], [32.6, 534.0], [32.7, 535.0], [32.8, 536.0], [32.9, 537.0], [33.0, 538.0], [33.1, 538.0], [33.2, 539.0], [33.3, 540.0], [33.4, 541.0], [33.5, 542.0], [33.6, 542.0], [33.7, 544.0], [33.8, 544.0], [33.9, 545.0], [34.0, 546.0], [34.1, 546.0], [34.2, 546.0], [34.3, 548.0], [34.4, 549.0], [34.5, 549.0], [34.6, 550.0], [34.7, 551.0], [34.8, 553.0], [34.9, 553.0], [35.0, 554.0], [35.1, 555.0], [35.2, 555.0], [35.3, 556.0], [35.4, 557.0], [35.5, 557.0], [35.6, 558.0], [35.7, 558.0], [35.8, 559.0], [35.9, 559.0], [36.0, 561.0], [36.1, 562.0], [36.2, 563.0], [36.3, 565.0], [36.4, 566.0], [36.5, 566.0], [36.6, 568.0], [36.7, 569.0], [36.8, 569.0], [36.9, 570.0], [37.0, 571.0], [37.1, 572.0], [37.2, 573.0], [37.3, 574.0], [37.4, 575.0], [37.5, 576.0], [37.6, 577.0], [37.7, 578.0], [37.8, 579.0], [37.9, 580.0], [38.0, 582.0], [38.1, 583.0], [38.2, 583.0], [38.3, 584.0], [38.4, 585.0], [38.5, 586.0], [38.6, 587.0], [38.7, 587.0], [38.8, 588.0], [38.9, 589.0], [39.0, 590.0], [39.1, 592.0], [39.2, 592.0], [39.3, 593.0], [39.4, 594.0], [39.5, 595.0], [39.6, 597.0], [39.7, 598.0], [39.8, 599.0], [39.9, 599.0], [40.0, 601.0], [40.1, 602.0], [40.2, 602.0], [40.3, 603.0], [40.4, 604.0], [40.5, 607.0], [40.6, 607.0], [40.7, 608.0], [40.8, 610.0], [40.9, 612.0], [41.0, 613.0], [41.1, 614.0], [41.2, 615.0], [41.3, 616.0], [41.4, 619.0], [41.5, 620.0], [41.6, 622.0], [41.7, 623.0], [41.8, 624.0], [41.9, 625.0], [42.0, 626.0], [42.1, 627.0], [42.2, 628.0], [42.3, 630.0], [42.4, 630.0], [42.5, 631.0], [42.6, 633.0], [42.7, 634.0], [42.8, 636.0], [42.9, 638.0], [43.0, 639.0], [43.1, 642.0], [43.2, 643.0], [43.3, 644.0], [43.4, 645.0], [43.5, 646.0], [43.6, 647.0], [43.7, 649.0], [43.8, 650.0], [43.9, 652.0], [44.0, 653.0], [44.1, 654.0], [44.2, 655.0], [44.3, 655.0], [44.4, 657.0], [44.5, 659.0], [44.6, 659.0], [44.7, 660.0], [44.8, 661.0], [44.9, 663.0], [45.0, 664.0], [45.1, 665.0], [45.2, 667.0], [45.3, 669.0], [45.4, 671.0], [45.5, 672.0], [45.6, 674.0], [45.7, 675.0], [45.8, 678.0], [45.9, 679.0], [46.0, 682.0], [46.1, 682.0], [46.2, 683.0], [46.3, 684.0], [46.4, 685.0], [46.5, 686.0], [46.6, 687.0], [46.7, 688.0], [46.8, 689.0], [46.9, 691.0], [47.0, 692.0], [47.1, 693.0], [47.2, 695.0], [47.3, 697.0], [47.4, 698.0], [47.5, 700.0], [47.6, 702.0], [47.7, 703.0], [47.8, 705.0], [47.9, 706.0], [48.0, 707.0], [48.1, 708.0], [48.2, 710.0], [48.3, 711.0], [48.4, 713.0], [48.5, 715.0], [48.6, 716.0], [48.7, 718.0], [48.8, 719.0], [48.9, 721.0], [49.0, 724.0], [49.1, 725.0], [49.2, 727.0], [49.3, 728.0], [49.4, 729.0], [49.5, 730.0], [49.6, 731.0], [49.7, 731.0], [49.8, 733.0], [49.9, 734.0], [50.0, 734.0], [50.1, 737.0], [50.2, 741.0], [50.3, 742.0], [50.4, 744.0], [50.5, 746.0], [50.6, 747.0], [50.7, 748.0], [50.8, 749.0], [50.9, 751.0], [51.0, 752.0], [51.1, 753.0], [51.2, 755.0], [51.3, 756.0], [51.4, 758.0], [51.5, 760.0], [51.6, 761.0], [51.7, 763.0], [51.8, 764.0], [51.9, 768.0], [52.0, 770.0], [52.1, 772.0], [52.2, 773.0], [52.3, 776.0], [52.4, 777.0], [52.5, 778.0], [52.6, 780.0], [52.7, 781.0], [52.8, 782.0], [52.9, 784.0], [53.0, 784.0], [53.1, 786.0], [53.2, 787.0], [53.3, 789.0], [53.4, 791.0], [53.5, 792.0], [53.6, 794.0], [53.7, 795.0], [53.8, 796.0], [53.9, 798.0], [54.0, 800.0], [54.1, 802.0], [54.2, 803.0], [54.3, 810.0], [54.4, 811.0], [54.5, 812.0], [54.6, 813.0], [54.7, 815.0], [54.8, 816.0], [54.9, 818.0], [55.0, 819.0], [55.1, 820.0], [55.2, 821.0], [55.3, 823.0], [55.4, 825.0], [55.5, 826.0], [55.6, 828.0], [55.7, 829.0], [55.8, 831.0], [55.9, 832.0], [56.0, 834.0], [56.1, 835.0], [56.2, 837.0], [56.3, 838.0], [56.4, 840.0], [56.5, 842.0], [56.6, 843.0], [56.7, 844.0], [56.8, 845.0], [56.9, 846.0], [57.0, 849.0], [57.1, 850.0], [57.2, 852.0], [57.3, 854.0], [57.4, 855.0], [57.5, 856.0], [57.6, 857.0], [57.7, 860.0], [57.8, 861.0], [57.9, 863.0], [58.0, 864.0], [58.1, 865.0], [58.2, 866.0], [58.3, 868.0], [58.4, 870.0], [58.5, 872.0], [58.6, 874.0], [58.7, 877.0], [58.8, 879.0], [58.9, 880.0], [59.0, 882.0], [59.1, 884.0], [59.2, 885.0], [59.3, 887.0], [59.4, 890.0], [59.5, 892.0], [59.6, 894.0], [59.7, 897.0], [59.8, 898.0], [59.9, 900.0], [60.0, 904.0], [60.1, 906.0], [60.2, 907.0], [60.3, 908.0], [60.4, 910.0], [60.5, 912.0], [60.6, 914.0], [60.7, 917.0], [60.8, 919.0], [60.9, 920.0], [61.0, 922.0], [61.1, 925.0], [61.2, 926.0], [61.3, 929.0], [61.4, 931.0], [61.5, 933.0], [61.6, 935.0], [61.7, 937.0], [61.8, 938.0], [61.9, 939.0], [62.0, 941.0], [62.1, 943.0], [62.2, 944.0], [62.3, 946.0], [62.4, 947.0], [62.5, 948.0], [62.6, 950.0], [62.7, 951.0], [62.8, 953.0], [62.9, 954.0], [63.0, 958.0], [63.1, 958.0], [63.2, 960.0], [63.3, 963.0], [63.4, 965.0], [63.5, 967.0], [63.6, 967.0], [63.7, 968.0], [63.8, 970.0], [63.9, 971.0], [64.0, 972.0], [64.1, 975.0], [64.2, 977.0], [64.3, 979.0], [64.4, 981.0], [64.5, 985.0], [64.6, 987.0], [64.7, 989.0], [64.8, 990.0], [64.9, 993.0], [65.0, 994.0], [65.1, 995.0], [65.2, 996.0], [65.3, 999.0], [65.4, 1000.0], [65.5, 1002.0], [65.6, 1004.0], [65.7, 1006.0], [65.8, 1009.0], [65.9, 1011.0], [66.0, 1012.0], [66.1, 1014.0], [66.2, 1017.0], [66.3, 1019.0], [66.4, 1020.0], [66.5, 1023.0], [66.6, 1025.0], [66.7, 1026.0], [66.8, 1028.0], [66.9, 1030.0], [67.0, 1033.0], [67.1, 1033.0], [67.2, 1036.0], [67.3, 1037.0], [67.4, 1039.0], [67.5, 1040.0], [67.6, 1042.0], [67.7, 1043.0], [67.8, 1044.0], [67.9, 1045.0], [68.0, 1046.0], [68.1, 1047.0], [68.2, 1049.0], [68.3, 1050.0], [68.4, 1051.0], [68.5, 1054.0], [68.6, 1057.0], [68.7, 1058.0], [68.8, 1060.0], [68.9, 1061.0], [69.0, 1065.0], [69.1, 1067.0], [69.2, 1069.0], [69.3, 1071.0], [69.4, 1072.0], [69.5, 1076.0], [69.6, 1078.0], [69.7, 1080.0], [69.8, 1082.0], [69.9, 1083.0], [70.0, 1085.0], [70.1, 1088.0], [70.2, 1092.0], [70.3, 1093.0], [70.4, 1096.0], [70.5, 1097.0], [70.6, 1098.0], [70.7, 1099.0], [70.8, 1101.0], [70.9, 1104.0], [71.0, 1105.0], [71.1, 1107.0], [71.2, 1108.0], [71.3, 1110.0], [71.4, 1111.0], [71.5, 1114.0], [71.6, 1115.0], [71.7, 1118.0], [71.8, 1120.0], [71.9, 1121.0], [72.0, 1123.0], [72.1, 1124.0], [72.2, 1126.0], [72.3, 1126.0], [72.4, 1127.0], [72.5, 1128.0], [72.6, 1130.0], [72.7, 1132.0], [72.8, 1133.0], [72.9, 1136.0], [73.0, 1137.0], [73.1, 1140.0], [73.2, 1142.0], [73.3, 1143.0], [73.4, 1145.0], [73.5, 1147.0], [73.6, 1149.0], [73.7, 1150.0], [73.8, 1152.0], [73.9, 1155.0], [74.0, 1157.0], [74.1, 1160.0], [74.2, 1162.0], [74.3, 1165.0], [74.4, 1169.0], [74.5, 1171.0], [74.6, 1174.0], [74.7, 1175.0], [74.8, 1178.0], [74.9, 1180.0], [75.0, 1181.0], [75.1, 1183.0], [75.2, 1186.0], [75.3, 1188.0], [75.4, 1190.0], [75.5, 1193.0], [75.6, 1195.0], [75.7, 1196.0], [75.8, 1201.0], [75.9, 1203.0], [76.0, 1205.0], [76.1, 1207.0], [76.2, 1209.0], [76.3, 1214.0], [76.4, 1216.0], [76.5, 1218.0], [76.6, 1220.0], [76.7, 1224.0], [76.8, 1226.0], [76.9, 1229.0], [77.0, 1231.0], [77.1, 1233.0], [77.2, 1236.0], [77.3, 1238.0], [77.4, 1241.0], [77.5, 1246.0], [77.6, 1249.0], [77.7, 1253.0], [77.8, 1255.0], [77.9, 1257.0], [78.0, 1259.0], [78.1, 1263.0], [78.2, 1265.0], [78.3, 1267.0], [78.4, 1269.0], [78.5, 1273.0], [78.6, 1276.0], [78.7, 1279.0], [78.8, 1279.0], [78.9, 1285.0], [79.0, 1287.0], [79.1, 1291.0], [79.2, 1292.0], [79.3, 1294.0], [79.4, 1297.0], [79.5, 1301.0], [79.6, 1301.0], [79.7, 1306.0], [79.8, 1309.0], [79.9, 1310.0], [80.0, 1312.0], [80.1, 1315.0], [80.2, 1317.0], [80.3, 1319.0], [80.4, 1320.0], [80.5, 1322.0], [80.6, 1324.0], [80.7, 1326.0], [80.8, 1328.0], [80.9, 1330.0], [81.0, 1332.0], [81.1, 1334.0], [81.2, 1335.0], [81.3, 1336.0], [81.4, 1339.0], [81.5, 1344.0], [81.6, 1347.0], [81.7, 1349.0], [81.8, 1352.0], [81.9, 1353.0], [82.0, 1358.0], [82.1, 1359.0], [82.2, 1362.0], [82.3, 1365.0], [82.4, 1368.0], [82.5, 1369.0], [82.6, 1370.0], [82.7, 1372.0], [82.8, 1374.0], [82.9, 1376.0], [83.0, 1379.0], [83.1, 1380.0], [83.2, 1383.0], [83.3, 1385.0], [83.4, 1387.0], [83.5, 1389.0], [83.6, 1390.0], [83.7, 1393.0], [83.8, 1396.0], [83.9, 1398.0], [84.0, 1403.0], [84.1, 1404.0], [84.2, 1406.0], [84.3, 1409.0], [84.4, 1411.0], [84.5, 1412.0], [84.6, 1413.0], [84.7, 1415.0], [84.8, 1420.0], [84.9, 1422.0], [85.0, 1425.0], [85.1, 1426.0], [85.2, 1428.0], [85.3, 1431.0], [85.4, 1432.0], [85.5, 1434.0], [85.6, 1436.0], [85.7, 1439.0], [85.8, 1441.0], [85.9, 1444.0], [86.0, 1446.0], [86.1, 1448.0], [86.2, 1451.0], [86.3, 1453.0], [86.4, 1456.0], [86.5, 1458.0], [86.6, 1461.0], [86.7, 1462.0], [86.8, 1466.0], [86.9, 1470.0], [87.0, 1473.0], [87.1, 1477.0], [87.2, 1482.0], [87.3, 1485.0], [87.4, 1490.0], [87.5, 1492.0], [87.6, 1494.0], [87.7, 1498.0], [87.8, 1501.0], [87.9, 1506.0], [88.0, 1510.0], [88.1, 1515.0], [88.2, 1516.0], [88.3, 1524.0], [88.4, 1526.0], [88.5, 1532.0], [88.6, 1539.0], [88.7, 1546.0], [88.8, 1555.0], [88.9, 1559.0], [89.0, 1566.0], [89.1, 1568.0], [89.2, 1571.0], [89.3, 1573.0], [89.4, 1575.0], [89.5, 1581.0], [89.6, 1587.0], [89.7, 1594.0], [89.8, 1598.0], [89.9, 1601.0], [90.0, 1604.0], [90.1, 1607.0], [90.2, 1611.0], [90.3, 1614.0], [90.4, 1620.0], [90.5, 1626.0], [90.6, 1628.0], [90.7, 1631.0], [90.8, 1636.0], [90.9, 1644.0], [91.0, 1650.0], [91.1, 1657.0], [91.2, 1663.0], [91.3, 1669.0], [91.4, 1675.0], [91.5, 1681.0], [91.6, 1701.0], [91.7, 1707.0], [91.8, 1723.0], [91.9, 1735.0], [92.0, 1746.0], [92.1, 1757.0], [92.2, 1761.0], [92.3, 1764.0], [92.4, 1769.0], [92.5, 1777.0], [92.6, 1789.0], [92.7, 1794.0], [92.8, 1799.0], [92.9, 1816.0], [93.0, 1821.0], [93.1, 1828.0], [93.2, 1835.0], [93.3, 1843.0], [93.4, 1847.0], [93.5, 1854.0], [93.6, 1863.0], [93.7, 1874.0], [93.8, 1878.0], [93.9, 1890.0], [94.0, 1904.0], [94.1, 1920.0], [94.2, 1930.0], [94.3, 1937.0], [94.4, 1945.0], [94.5, 1953.0], [94.6, 1965.0], [94.7, 1980.0], [94.8, 2006.0], [94.9, 2024.0], [95.0, 2039.0], [95.1, 2043.0], [95.2, 2052.0], [95.3, 2070.0], [95.4, 2088.0], [95.5, 2103.0], [95.6, 2110.0], [95.7, 2115.0], [95.8, 2128.0], [95.9, 2136.0], [96.0, 2151.0], [96.1, 2160.0], [96.2, 2168.0], [96.3, 2177.0], [96.4, 2190.0], [96.5, 2212.0], [96.6, 2229.0], [96.7, 2244.0], [96.8, 2259.0], [96.9, 2270.0], [97.0, 2288.0], [97.1, 2302.0], [97.2, 2317.0], [97.3, 2353.0], [97.4, 2376.0], [97.5, 2386.0], [97.6, 2405.0], [97.7, 2423.0], [97.8, 2462.0], [97.9, 2489.0], [98.0, 2518.0], [98.1, 2534.0], [98.2, 2557.0], [98.3, 2594.0], [98.4, 2621.0], [98.5, 2656.0], [98.6, 2712.0], [98.7, 2746.0], [98.8, 2787.0], [98.9, 2824.0], [99.0, 2852.0], [99.1, 2989.0], [99.2, 3101.0], [99.3, 3180.0], [99.4, 3348.0], [99.5, 3506.0], [99.6, 3775.0], [99.7, 3938.0], [99.8, 4254.0], [99.9, 5226.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 569.0, "series": [{"data": [[600.0, 392.0], [700.0, 338.0], [800.0, 306.0], [900.0, 286.0], [1000.0, 277.0], [1100.0, 262.0], [1200.0, 193.0], [1300.0, 231.0], [1400.0, 197.0], [1500.0, 109.0], [1600.0, 92.0], [100.0, 34.0], [1700.0, 63.0], [1800.0, 60.0], [1900.0, 43.0], [2000.0, 35.0], [2100.0, 50.0], [2200.0, 34.0], [2300.0, 26.0], [2400.0, 17.0], [2500.0, 20.0], [2600.0, 14.0], [2700.0, 12.0], [2800.0, 15.0], [2900.0, 1.0], [3000.0, 4.0], [3100.0, 7.0], [3300.0, 4.0], [3200.0, 1.0], [200.0, 536.0], [3400.0, 4.0], [3500.0, 3.0], [3700.0, 4.0], [3600.0, 1.0], [3800.0, 2.0], [3900.0, 1.0], [4100.0, 4.0], [4200.0, 2.0], [4300.0, 1.0], [4500.0, 1.0], [300.0, 366.0], [4700.0, 1.0], [5200.0, 2.0], [5600.0, 1.0], [5700.0, 1.0], [5900.0, 2.0], [400.0, 566.0], [500.0, 569.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 634.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3046.0, "series": [{"data": [[0.0, 1510.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3046.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 634.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.925496688741722, "minX": 1.60422648E12, "maxY": 10.0, "series": [{"data": [[1.6042269E12, 9.925496688741722], [1.60422672E12, 10.0], [1.60422678E12, 10.0], [1.6042266E12, 10.0], [1.60422666E12, 10.0], [1.60422648E12, 10.0], [1.60422654E12, 10.0], [1.60422684E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042269E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 283.0, "minX": 1.0, "maxY": 2899.0, "series": [{"data": [[8.0, 283.0], [4.0, 683.0], [2.0, 2899.0], [1.0, 2593.0], [9.0, 1219.0], [10.0, 890.5012545840551], [5.0, 1044.0], [6.0, 1934.0], [3.0, 1875.0], [7.0, 332.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 891.435260115605]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3708.766666666667, "minX": 1.60422648E12, "maxY": 3569815.316666667, "series": [{"data": [[1.6042269E12, 2562017.6333333333], [1.60422672E12, 3156486.15], [1.60422678E12, 2792545.033333333], [1.6042266E12, 3569815.316666667], [1.60422666E12, 3105350.7666666666], [1.60422648E12, 2642814.933333333], [1.60422654E12, 2800802.4833333334], [1.60422684E12, 3343295.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6042269E12, 4562.45], [1.60422672E12, 4567.533333333334], [1.60422678E12, 4951.116666666667], [1.6042266E12, 5299.683333333333], [1.60422666E12, 5017.633333333333], [1.60422648E12, 3708.766666666667], [1.60422654E12, 5051.783333333334], [1.60422684E12, 5418.366666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042269E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 837.3655462184875, "minX": 1.60422648E12, "maxY": 979.7126213592232, "series": [{"data": [[1.6042269E12, 878.6903973509936], [1.60422672E12, 954.7041139240506], [1.60422678E12, 882.0251851851846], [1.6042266E12, 859.6981402002846], [1.60422666E12, 898.3207831325302], [1.60422648E12, 979.7126213592232], [1.60422654E12, 869.3377001455613], [1.60422684E12, 837.3655462184875]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042269E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 835.7717086834733, "minX": 1.60422648E12, "maxY": 977.4679611650492, "series": [{"data": [[1.6042269E12, 877.1307947019869], [1.60422672E12, 952.8971518987349], [1.60422678E12, 880.5614814814817], [1.6042266E12, 857.291845493561], [1.60422666E12, 896.1325301204812], [1.60422648E12, 977.4679611650492], [1.60422654E12, 867.4090247452692], [1.60422684E12, 835.7717086834733]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042269E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011444921316165955, "minX": 1.60422648E12, "maxY": 0.16699029126213594, "series": [{"data": [[1.6042269E12, 0.013245033112582785], [1.60422672E12, 0.02056962025316455], [1.60422678E12, 0.02666666666666668], [1.6042266E12, 0.011444921316165955], [1.60422666E12, 0.019578313253012024], [1.60422648E12, 0.16699029126213594], [1.60422654E12, 0.03784570596797672], [1.60422684E12, 0.025210084033613477]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042269E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.60422648E12, "maxY": 5996.0, "series": [{"data": [[1.6042269E12, 3775.0], [1.60422672E12, 5996.0], [1.60422678E12, 4272.0], [1.6042266E12, 3533.0], [1.60422666E12, 5226.0], [1.60422648E12, 5688.0], [1.60422654E12, 4702.0], [1.60422684E12, 3516.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6042269E12, 199.0], [1.60422672E12, 206.87899894356727], [1.60422678E12, 201.0], [1.6042266E12, 194.0], [1.60422666E12, 205.96999968290328], [1.60422648E12, 203.0], [1.60422654E12, 207.38399967193604], [1.60422684E12, 199.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6042269E12, 199.0], [1.60422672E12, 209.53340012073517], [1.60422678E12, 201.0], [1.6042266E12, 194.0], [1.60422666E12, 206.0], [1.60422648E12, 204.08400049209595], [1.60422654E12, 208.6224001312256], [1.60422684E12, 199.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6042269E12, 199.0], [1.60422672E12, 209.02699984908105], [1.60422678E12, 201.0], [1.6042266E12, 194.0], [1.60422666E12, 206.0], [1.60422648E12, 203.0], [1.60422654E12, 208.07199983596803], [1.60422684E12, 199.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6042269E12, 189.0], [1.60422672E12, 199.0], [1.60422678E12, 191.0], [1.6042266E12, 178.0], [1.60422666E12, 195.0], [1.60422648E12, 195.0], [1.60422654E12, 193.0], [1.60422684E12, 190.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6042269E12, 679.0], [1.60422672E12, 844.5], [1.60422678E12, 696.0], [1.6042266E12, 707.0], [1.60422666E12, 740.5], [1.60422648E12, 856.0], [1.60422654E12, 654.0], [1.60422684E12, 678.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042269E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 415.0, "minX": 1.0, "maxY": 2746.0, "series": [{"data": [[2.0, 1775.0], [3.0, 1875.0], [4.0, 1627.0], [5.0, 1183.0], [6.0, 1117.0], [7.0, 1002.0], [8.0, 1043.5], [9.0, 1036.5], [10.0, 914.0], [11.0, 845.5], [12.0, 819.0], [13.0, 723.5], [14.0, 631.0], [15.0, 592.0], [16.0, 617.0], [1.0, 2746.0], [17.0, 482.0], [18.0, 519.0], [19.0, 468.0], [20.0, 461.5], [21.0, 443.0], [22.0, 459.5], [23.0, 459.0], [24.0, 436.5], [25.0, 431.0], [26.0, 431.0], [27.0, 415.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 414.0, "minX": 1.0, "maxY": 2740.5, "series": [{"data": [[2.0, 1769.0], [3.0, 1874.0], [4.0, 1620.5], [5.0, 1171.0], [6.0, 1114.0], [7.0, 1002.0], [8.0, 1042.5], [9.0, 1034.0], [10.0, 913.5], [11.0, 843.0], [12.0, 818.5], [13.0, 723.0], [14.0, 630.0], [15.0, 591.0], [16.0, 616.0], [1.0, 2740.5], [17.0, 481.0], [18.0, 518.5], [19.0, 467.0], [20.0, 460.5], [21.0, 443.0], [22.0, 459.0], [23.0, 459.0], [24.0, 436.5], [25.0, 431.0], [26.0, 430.5], [27.0, 414.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.75, "minX": 1.60422648E12, "maxY": 11.9, "series": [{"data": [[1.6042269E12, 9.9], [1.60422672E12, 10.533333333333333], [1.60422678E12, 11.25], [1.6042266E12, 11.65], [1.60422666E12, 11.066666666666666], [1.60422648E12, 8.75], [1.60422654E12, 11.45], [1.60422684E12, 11.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042269E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.583333333333334, "minX": 1.60422648E12, "maxY": 11.9, "series": [{"data": [[1.6042269E12, 10.066666666666666], [1.60422672E12, 10.533333333333333], [1.60422678E12, 11.25], [1.6042266E12, 11.65], [1.60422666E12, 11.066666666666666], [1.60422648E12, 8.583333333333334], [1.60422654E12, 11.45], [1.60422684E12, 11.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042269E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.583333333333334, "minX": 1.60422648E12, "maxY": 11.9, "series": [{"data": [[1.6042269E12, 10.066666666666666], [1.60422672E12, 10.533333333333333], [1.60422678E12, 11.25], [1.6042266E12, 11.65], [1.60422666E12, 11.066666666666666], [1.60422648E12, 8.583333333333334], [1.60422654E12, 11.45], [1.60422684E12, 11.9]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042269E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.583333333333334, "minX": 1.60422648E12, "maxY": 11.9, "series": [{"data": [[1.6042269E12, 10.066666666666666], [1.60422672E12, 10.533333333333333], [1.60422678E12, 11.25], [1.6042266E12, 11.65], [1.60422666E12, 11.066666666666666], [1.60422648E12, 8.583333333333334], [1.60422654E12, 11.45], [1.60422684E12, 11.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042269E12, "title": "Total Transactions Per Second"}},
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

