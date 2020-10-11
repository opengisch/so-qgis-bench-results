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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 8742.0, "series": [{"data": [[0.0, 184.0], [0.1, 191.0], [0.2, 193.0], [0.3, 197.0], [0.4, 197.0], [0.5, 199.0], [0.6, 200.0], [0.7, 200.0], [0.8, 201.0], [0.9, 202.0], [1.0, 203.0], [1.1, 204.0], [1.2, 205.0], [1.3, 206.0], [1.4, 207.0], [1.5, 208.0], [1.6, 209.0], [1.7, 209.0], [1.8, 210.0], [1.9, 211.0], [2.0, 212.0], [2.1, 213.0], [2.2, 214.0], [2.3, 216.0], [2.4, 217.0], [2.5, 218.0], [2.6, 219.0], [2.7, 220.0], [2.8, 221.0], [2.9, 222.0], [3.0, 222.0], [3.1, 224.0], [3.2, 224.0], [3.3, 225.0], [3.4, 225.0], [3.5, 226.0], [3.6, 227.0], [3.7, 227.0], [3.8, 228.0], [3.9, 228.0], [4.0, 229.0], [4.1, 230.0], [4.2, 230.0], [4.3, 231.0], [4.4, 231.0], [4.5, 232.0], [4.6, 232.0], [4.7, 233.0], [4.8, 234.0], [4.9, 234.0], [5.0, 235.0], [5.1, 236.0], [5.2, 236.0], [5.3, 238.0], [5.4, 239.0], [5.5, 240.0], [5.6, 241.0], [5.7, 242.0], [5.8, 243.0], [5.9, 243.0], [6.0, 244.0], [6.1, 245.0], [6.2, 246.0], [6.3, 247.0], [6.4, 248.0], [6.5, 250.0], [6.6, 251.0], [6.7, 252.0], [6.8, 253.0], [6.9, 254.0], [7.0, 255.0], [7.1, 256.0], [7.2, 257.0], [7.3, 258.0], [7.4, 259.0], [7.5, 260.0], [7.6, 261.0], [7.7, 262.0], [7.8, 263.0], [7.9, 264.0], [8.0, 265.0], [8.1, 266.0], [8.2, 267.0], [8.3, 268.0], [8.4, 269.0], [8.5, 271.0], [8.6, 272.0], [8.7, 272.0], [8.8, 273.0], [8.9, 274.0], [9.0, 274.0], [9.1, 275.0], [9.2, 276.0], [9.3, 277.0], [9.4, 278.0], [9.5, 280.0], [9.6, 281.0], [9.7, 282.0], [9.8, 282.0], [9.9, 284.0], [10.0, 284.0], [10.1, 285.0], [10.2, 286.0], [10.3, 286.0], [10.4, 287.0], [10.5, 287.0], [10.6, 289.0], [10.7, 290.0], [10.8, 291.0], [10.9, 292.0], [11.0, 293.0], [11.1, 294.0], [11.2, 295.0], [11.3, 296.0], [11.4, 296.0], [11.5, 297.0], [11.6, 299.0], [11.7, 300.0], [11.8, 302.0], [11.9, 303.0], [12.0, 304.0], [12.1, 304.0], [12.2, 306.0], [12.3, 307.0], [12.4, 309.0], [12.5, 309.0], [12.6, 310.0], [12.7, 312.0], [12.8, 313.0], [12.9, 313.0], [13.0, 315.0], [13.1, 316.0], [13.2, 317.0], [13.3, 318.0], [13.4, 319.0], [13.5, 320.0], [13.6, 320.0], [13.7, 321.0], [13.8, 322.0], [13.9, 324.0], [14.0, 326.0], [14.1, 327.0], [14.2, 329.0], [14.3, 331.0], [14.4, 332.0], [14.5, 335.0], [14.6, 337.0], [14.7, 339.0], [14.8, 340.0], [14.9, 341.0], [15.0, 343.0], [15.1, 346.0], [15.2, 347.0], [15.3, 350.0], [15.4, 353.0], [15.5, 355.0], [15.6, 357.0], [15.7, 359.0], [15.8, 362.0], [15.9, 364.0], [16.0, 365.0], [16.1, 368.0], [16.2, 370.0], [16.3, 372.0], [16.4, 376.0], [16.5, 377.0], [16.6, 380.0], [16.7, 382.0], [16.8, 383.0], [16.9, 385.0], [17.0, 386.0], [17.1, 387.0], [17.2, 387.0], [17.3, 389.0], [17.4, 390.0], [17.5, 392.0], [17.6, 393.0], [17.7, 393.0], [17.8, 394.0], [17.9, 395.0], [18.0, 396.0], [18.1, 397.0], [18.2, 398.0], [18.3, 399.0], [18.4, 399.0], [18.5, 400.0], [18.6, 400.0], [18.7, 401.0], [18.8, 402.0], [18.9, 402.0], [19.0, 403.0], [19.1, 404.0], [19.2, 405.0], [19.3, 406.0], [19.4, 407.0], [19.5, 408.0], [19.6, 408.0], [19.7, 409.0], [19.8, 410.0], [19.9, 410.0], [20.0, 411.0], [20.1, 412.0], [20.2, 413.0], [20.3, 415.0], [20.4, 417.0], [20.5, 418.0], [20.6, 419.0], [20.7, 419.0], [20.8, 420.0], [20.9, 421.0], [21.0, 422.0], [21.1, 423.0], [21.2, 424.0], [21.3, 425.0], [21.4, 426.0], [21.5, 428.0], [21.6, 428.0], [21.7, 430.0], [21.8, 430.0], [21.9, 432.0], [22.0, 433.0], [22.1, 433.0], [22.2, 435.0], [22.3, 436.0], [22.4, 437.0], [22.5, 438.0], [22.6, 438.0], [22.7, 440.0], [22.8, 441.0], [22.9, 441.0], [23.0, 442.0], [23.1, 443.0], [23.2, 444.0], [23.3, 445.0], [23.4, 446.0], [23.5, 447.0], [23.6, 448.0], [23.7, 450.0], [23.8, 450.0], [23.9, 452.0], [24.0, 453.0], [24.1, 454.0], [24.2, 455.0], [24.3, 456.0], [24.4, 457.0], [24.5, 457.0], [24.6, 458.0], [24.7, 458.0], [24.8, 461.0], [24.9, 461.0], [25.0, 462.0], [25.1, 463.0], [25.2, 463.0], [25.3, 464.0], [25.4, 465.0], [25.5, 465.0], [25.6, 467.0], [25.7, 468.0], [25.8, 469.0], [25.9, 471.0], [26.0, 472.0], [26.1, 473.0], [26.2, 474.0], [26.3, 474.0], [26.4, 477.0], [26.5, 478.0], [26.6, 479.0], [26.7, 480.0], [26.8, 483.0], [26.9, 484.0], [27.0, 484.0], [27.1, 485.0], [27.2, 486.0], [27.3, 487.0], [27.4, 489.0], [27.5, 491.0], [27.6, 491.0], [27.7, 492.0], [27.8, 492.0], [27.9, 493.0], [28.0, 494.0], [28.1, 496.0], [28.2, 497.0], [28.3, 498.0], [28.4, 499.0], [28.5, 500.0], [28.6, 501.0], [28.7, 502.0], [28.8, 503.0], [28.9, 504.0], [29.0, 506.0], [29.1, 507.0], [29.2, 509.0], [29.3, 509.0], [29.4, 510.0], [29.5, 511.0], [29.6, 512.0], [29.7, 513.0], [29.8, 514.0], [29.9, 515.0], [30.0, 516.0], [30.1, 517.0], [30.2, 519.0], [30.3, 519.0], [30.4, 521.0], [30.5, 522.0], [30.6, 522.0], [30.7, 523.0], [30.8, 524.0], [30.9, 525.0], [31.0, 526.0], [31.1, 527.0], [31.2, 527.0], [31.3, 529.0], [31.4, 529.0], [31.5, 531.0], [31.6, 532.0], [31.7, 533.0], [31.8, 534.0], [31.9, 534.0], [32.0, 535.0], [32.1, 536.0], [32.2, 537.0], [32.3, 539.0], [32.4, 540.0], [32.5, 540.0], [32.6, 541.0], [32.7, 542.0], [32.8, 542.0], [32.9, 544.0], [33.0, 545.0], [33.1, 546.0], [33.2, 547.0], [33.3, 548.0], [33.4, 549.0], [33.5, 550.0], [33.6, 551.0], [33.7, 551.0], [33.8, 552.0], [33.9, 553.0], [34.0, 554.0], [34.1, 554.0], [34.2, 555.0], [34.3, 556.0], [34.4, 557.0], [34.5, 558.0], [34.6, 559.0], [34.7, 559.0], [34.8, 560.0], [34.9, 561.0], [35.0, 561.0], [35.1, 562.0], [35.2, 563.0], [35.3, 564.0], [35.4, 564.0], [35.5, 565.0], [35.6, 566.0], [35.7, 566.0], [35.8, 567.0], [35.9, 568.0], [36.0, 569.0], [36.1, 570.0], [36.2, 571.0], [36.3, 572.0], [36.4, 573.0], [36.5, 573.0], [36.6, 575.0], [36.7, 575.0], [36.8, 576.0], [36.9, 577.0], [37.0, 578.0], [37.1, 578.0], [37.2, 579.0], [37.3, 580.0], [37.4, 581.0], [37.5, 582.0], [37.6, 583.0], [37.7, 583.0], [37.8, 584.0], [37.9, 585.0], [38.0, 586.0], [38.1, 586.0], [38.2, 588.0], [38.3, 589.0], [38.4, 590.0], [38.5, 590.0], [38.6, 591.0], [38.7, 593.0], [38.8, 594.0], [38.9, 594.0], [39.0, 596.0], [39.1, 597.0], [39.2, 598.0], [39.3, 598.0], [39.4, 599.0], [39.5, 601.0], [39.6, 602.0], [39.7, 603.0], [39.8, 603.0], [39.9, 604.0], [40.0, 605.0], [40.1, 606.0], [40.2, 607.0], [40.3, 608.0], [40.4, 609.0], [40.5, 610.0], [40.6, 611.0], [40.7, 612.0], [40.8, 612.0], [40.9, 613.0], [41.0, 614.0], [41.1, 616.0], [41.2, 617.0], [41.3, 618.0], [41.4, 619.0], [41.5, 620.0], [41.6, 621.0], [41.7, 622.0], [41.8, 624.0], [41.9, 624.0], [42.0, 625.0], [42.1, 626.0], [42.2, 627.0], [42.3, 628.0], [42.4, 629.0], [42.5, 630.0], [42.6, 631.0], [42.7, 633.0], [42.8, 635.0], [42.9, 635.0], [43.0, 636.0], [43.1, 637.0], [43.2, 638.0], [43.3, 640.0], [43.4, 642.0], [43.5, 644.0], [43.6, 645.0], [43.7, 647.0], [43.8, 648.0], [43.9, 649.0], [44.0, 649.0], [44.1, 651.0], [44.2, 652.0], [44.3, 654.0], [44.4, 656.0], [44.5, 657.0], [44.6, 660.0], [44.7, 661.0], [44.8, 663.0], [44.9, 664.0], [45.0, 666.0], [45.1, 667.0], [45.2, 669.0], [45.3, 671.0], [45.4, 672.0], [45.5, 673.0], [45.6, 675.0], [45.7, 677.0], [45.8, 678.0], [45.9, 680.0], [46.0, 681.0], [46.1, 682.0], [46.2, 683.0], [46.3, 685.0], [46.4, 687.0], [46.5, 688.0], [46.6, 689.0], [46.7, 690.0], [46.8, 691.0], [46.9, 693.0], [47.0, 694.0], [47.1, 696.0], [47.2, 697.0], [47.3, 698.0], [47.4, 700.0], [47.5, 701.0], [47.6, 703.0], [47.7, 703.0], [47.8, 705.0], [47.9, 706.0], [48.0, 707.0], [48.1, 709.0], [48.2, 711.0], [48.3, 712.0], [48.4, 713.0], [48.5, 715.0], [48.6, 717.0], [48.7, 718.0], [48.8, 721.0], [48.9, 724.0], [49.0, 726.0], [49.1, 727.0], [49.2, 728.0], [49.3, 730.0], [49.4, 732.0], [49.5, 734.0], [49.6, 734.0], [49.7, 736.0], [49.8, 738.0], [49.9, 740.0], [50.0, 741.0], [50.1, 743.0], [50.2, 744.0], [50.3, 746.0], [50.4, 748.0], [50.5, 749.0], [50.6, 752.0], [50.7, 754.0], [50.8, 756.0], [50.9, 757.0], [51.0, 758.0], [51.1, 760.0], [51.2, 761.0], [51.3, 764.0], [51.4, 767.0], [51.5, 770.0], [51.6, 773.0], [51.7, 775.0], [51.8, 776.0], [51.9, 778.0], [52.0, 780.0], [52.1, 782.0], [52.2, 784.0], [52.3, 786.0], [52.4, 787.0], [52.5, 787.0], [52.6, 789.0], [52.7, 791.0], [52.8, 793.0], [52.9, 794.0], [53.0, 795.0], [53.1, 796.0], [53.2, 799.0], [53.3, 801.0], [53.4, 802.0], [53.5, 803.0], [53.6, 805.0], [53.7, 808.0], [53.8, 811.0], [53.9, 812.0], [54.0, 816.0], [54.1, 817.0], [54.2, 820.0], [54.3, 821.0], [54.4, 823.0], [54.5, 824.0], [54.6, 826.0], [54.7, 828.0], [54.8, 831.0], [54.9, 833.0], [55.0, 835.0], [55.1, 835.0], [55.2, 836.0], [55.3, 838.0], [55.4, 841.0], [55.5, 843.0], [55.6, 844.0], [55.7, 845.0], [55.8, 847.0], [55.9, 848.0], [56.0, 850.0], [56.1, 853.0], [56.2, 855.0], [56.3, 857.0], [56.4, 859.0], [56.5, 860.0], [56.6, 861.0], [56.7, 862.0], [56.8, 864.0], [56.9, 865.0], [57.0, 866.0], [57.1, 867.0], [57.2, 868.0], [57.3, 869.0], [57.4, 871.0], [57.5, 873.0], [57.6, 875.0], [57.7, 877.0], [57.8, 879.0], [57.9, 880.0], [58.0, 881.0], [58.1, 883.0], [58.2, 885.0], [58.3, 886.0], [58.4, 889.0], [58.5, 892.0], [58.6, 892.0], [58.7, 895.0], [58.8, 896.0], [58.9, 896.0], [59.0, 899.0], [59.1, 901.0], [59.2, 903.0], [59.3, 905.0], [59.4, 907.0], [59.5, 910.0], [59.6, 913.0], [59.7, 914.0], [59.8, 915.0], [59.9, 917.0], [60.0, 920.0], [60.1, 921.0], [60.2, 922.0], [60.3, 923.0], [60.4, 925.0], [60.5, 928.0], [60.6, 931.0], [60.7, 934.0], [60.8, 935.0], [60.9, 937.0], [61.0, 939.0], [61.1, 940.0], [61.2, 942.0], [61.3, 944.0], [61.4, 946.0], [61.5, 948.0], [61.6, 949.0], [61.7, 950.0], [61.8, 951.0], [61.9, 952.0], [62.0, 954.0], [62.1, 956.0], [62.2, 959.0], [62.3, 961.0], [62.4, 963.0], [62.5, 965.0], [62.6, 967.0], [62.7, 969.0], [62.8, 970.0], [62.9, 972.0], [63.0, 974.0], [63.1, 976.0], [63.2, 978.0], [63.3, 981.0], [63.4, 982.0], [63.5, 984.0], [63.6, 985.0], [63.7, 987.0], [63.8, 988.0], [63.9, 993.0], [64.0, 995.0], [64.1, 996.0], [64.2, 997.0], [64.3, 1000.0], [64.4, 1003.0], [64.5, 1004.0], [64.6, 1005.0], [64.7, 1008.0], [64.8, 1011.0], [64.9, 1012.0], [65.0, 1013.0], [65.1, 1015.0], [65.2, 1015.0], [65.3, 1018.0], [65.4, 1019.0], [65.5, 1021.0], [65.6, 1023.0], [65.7, 1025.0], [65.8, 1026.0], [65.9, 1028.0], [66.0, 1029.0], [66.1, 1030.0], [66.2, 1032.0], [66.3, 1032.0], [66.4, 1032.0], [66.5, 1034.0], [66.6, 1036.0], [66.7, 1037.0], [66.8, 1039.0], [66.9, 1041.0], [67.0, 1043.0], [67.1, 1045.0], [67.2, 1047.0], [67.3, 1049.0], [67.4, 1051.0], [67.5, 1054.0], [67.6, 1055.0], [67.7, 1057.0], [67.8, 1059.0], [67.9, 1060.0], [68.0, 1061.0], [68.1, 1062.0], [68.2, 1064.0], [68.3, 1065.0], [68.4, 1066.0], [68.5, 1068.0], [68.6, 1069.0], [68.7, 1070.0], [68.8, 1073.0], [68.9, 1074.0], [69.0, 1076.0], [69.1, 1077.0], [69.2, 1078.0], [69.3, 1079.0], [69.4, 1082.0], [69.5, 1084.0], [69.6, 1085.0], [69.7, 1086.0], [69.8, 1089.0], [69.9, 1089.0], [70.0, 1090.0], [70.1, 1093.0], [70.2, 1097.0], [70.3, 1099.0], [70.4, 1101.0], [70.5, 1102.0], [70.6, 1107.0], [70.7, 1109.0], [70.8, 1110.0], [70.9, 1112.0], [71.0, 1115.0], [71.1, 1117.0], [71.2, 1119.0], [71.3, 1120.0], [71.4, 1121.0], [71.5, 1123.0], [71.6, 1123.0], [71.7, 1125.0], [71.8, 1128.0], [71.9, 1129.0], [72.0, 1130.0], [72.1, 1131.0], [72.2, 1133.0], [72.3, 1135.0], [72.4, 1135.0], [72.5, 1138.0], [72.6, 1139.0], [72.7, 1142.0], [72.8, 1145.0], [72.9, 1147.0], [73.0, 1150.0], [73.1, 1152.0], [73.2, 1153.0], [73.3, 1155.0], [73.4, 1156.0], [73.5, 1158.0], [73.6, 1161.0], [73.7, 1163.0], [73.8, 1165.0], [73.9, 1167.0], [74.0, 1168.0], [74.1, 1170.0], [74.2, 1171.0], [74.3, 1173.0], [74.4, 1176.0], [74.5, 1179.0], [74.6, 1180.0], [74.7, 1182.0], [74.8, 1185.0], [74.9, 1187.0], [75.0, 1190.0], [75.1, 1192.0], [75.2, 1193.0], [75.3, 1195.0], [75.4, 1199.0], [75.5, 1201.0], [75.6, 1205.0], [75.7, 1207.0], [75.8, 1208.0], [75.9, 1210.0], [76.0, 1211.0], [76.1, 1214.0], [76.2, 1215.0], [76.3, 1217.0], [76.4, 1220.0], [76.5, 1224.0], [76.6, 1227.0], [76.7, 1230.0], [76.8, 1233.0], [76.9, 1236.0], [77.0, 1238.0], [77.1, 1241.0], [77.2, 1245.0], [77.3, 1248.0], [77.4, 1253.0], [77.5, 1256.0], [77.6, 1257.0], [77.7, 1260.0], [77.8, 1269.0], [77.9, 1271.0], [78.0, 1273.0], [78.1, 1275.0], [78.2, 1277.0], [78.3, 1280.0], [78.4, 1281.0], [78.5, 1283.0], [78.6, 1285.0], [78.7, 1289.0], [78.8, 1293.0], [78.9, 1298.0], [79.0, 1300.0], [79.1, 1302.0], [79.2, 1305.0], [79.3, 1307.0], [79.4, 1308.0], [79.5, 1313.0], [79.6, 1316.0], [79.7, 1320.0], [79.8, 1321.0], [79.9, 1323.0], [80.0, 1327.0], [80.1, 1329.0], [80.2, 1330.0], [80.3, 1332.0], [80.4, 1333.0], [80.5, 1336.0], [80.6, 1339.0], [80.7, 1341.0], [80.8, 1342.0], [80.9, 1344.0], [81.0, 1347.0], [81.1, 1349.0], [81.2, 1352.0], [81.3, 1352.0], [81.4, 1355.0], [81.5, 1358.0], [81.6, 1360.0], [81.7, 1363.0], [81.8, 1365.0], [81.9, 1366.0], [82.0, 1367.0], [82.1, 1369.0], [82.2, 1370.0], [82.3, 1371.0], [82.4, 1372.0], [82.5, 1374.0], [82.6, 1378.0], [82.7, 1381.0], [82.8, 1384.0], [82.9, 1386.0], [83.0, 1389.0], [83.1, 1392.0], [83.2, 1395.0], [83.3, 1397.0], [83.4, 1401.0], [83.5, 1403.0], [83.6, 1405.0], [83.7, 1407.0], [83.8, 1410.0], [83.9, 1411.0], [84.0, 1414.0], [84.1, 1418.0], [84.2, 1421.0], [84.3, 1423.0], [84.4, 1425.0], [84.5, 1428.0], [84.6, 1431.0], [84.7, 1434.0], [84.8, 1436.0], [84.9, 1438.0], [85.0, 1439.0], [85.1, 1441.0], [85.2, 1443.0], [85.3, 1446.0], [85.4, 1452.0], [85.5, 1453.0], [85.6, 1456.0], [85.7, 1457.0], [85.8, 1458.0], [85.9, 1461.0], [86.0, 1465.0], [86.1, 1468.0], [86.2, 1470.0], [86.3, 1476.0], [86.4, 1479.0], [86.5, 1484.0], [86.6, 1486.0], [86.7, 1487.0], [86.8, 1490.0], [86.9, 1494.0], [87.0, 1498.0], [87.1, 1502.0], [87.2, 1506.0], [87.3, 1510.0], [87.4, 1517.0], [87.5, 1518.0], [87.6, 1521.0], [87.7, 1525.0], [87.8, 1529.0], [87.9, 1532.0], [88.0, 1537.0], [88.1, 1543.0], [88.2, 1546.0], [88.3, 1550.0], [88.4, 1554.0], [88.5, 1558.0], [88.6, 1561.0], [88.7, 1563.0], [88.8, 1569.0], [88.9, 1571.0], [89.0, 1577.0], [89.1, 1582.0], [89.2, 1588.0], [89.3, 1591.0], [89.4, 1596.0], [89.5, 1605.0], [89.6, 1610.0], [89.7, 1613.0], [89.8, 1623.0], [89.9, 1626.0], [90.0, 1628.0], [90.1, 1636.0], [90.2, 1642.0], [90.3, 1646.0], [90.4, 1656.0], [90.5, 1663.0], [90.6, 1676.0], [90.7, 1680.0], [90.8, 1687.0], [90.9, 1695.0], [91.0, 1704.0], [91.1, 1716.0], [91.2, 1723.0], [91.3, 1732.0], [91.4, 1738.0], [91.5, 1741.0], [91.6, 1759.0], [91.7, 1764.0], [91.8, 1768.0], [91.9, 1775.0], [92.0, 1782.0], [92.1, 1787.0], [92.2, 1795.0], [92.3, 1805.0], [92.4, 1809.0], [92.5, 1818.0], [92.6, 1824.0], [92.7, 1829.0], [92.8, 1836.0], [92.9, 1845.0], [93.0, 1849.0], [93.1, 1856.0], [93.2, 1875.0], [93.3, 1891.0], [93.4, 1894.0], [93.5, 1901.0], [93.6, 1913.0], [93.7, 1919.0], [93.8, 1927.0], [93.9, 1934.0], [94.0, 1942.0], [94.1, 1949.0], [94.2, 1953.0], [94.3, 1975.0], [94.4, 1988.0], [94.5, 1992.0], [94.6, 2003.0], [94.7, 2007.0], [94.8, 2016.0], [94.9, 2030.0], [95.0, 2049.0], [95.1, 2059.0], [95.2, 2069.0], [95.3, 2078.0], [95.4, 2088.0], [95.5, 2096.0], [95.6, 2116.0], [95.7, 2121.0], [95.8, 2131.0], [95.9, 2137.0], [96.0, 2149.0], [96.1, 2160.0], [96.2, 2168.0], [96.3, 2177.0], [96.4, 2189.0], [96.5, 2200.0], [96.6, 2211.0], [96.7, 2216.0], [96.8, 2230.0], [96.9, 2243.0], [97.0, 2253.0], [97.1, 2262.0], [97.2, 2274.0], [97.3, 2308.0], [97.4, 2351.0], [97.5, 2378.0], [97.6, 2387.0], [97.7, 2421.0], [97.8, 2447.0], [97.9, 2470.0], [98.0, 2509.0], [98.1, 2544.0], [98.2, 2561.0], [98.3, 2593.0], [98.4, 2635.0], [98.5, 2675.0], [98.6, 2702.0], [98.7, 2729.0], [98.8, 2764.0], [98.9, 2822.0], [99.0, 2877.0], [99.1, 2934.0], [99.2, 3141.0], [99.3, 3305.0], [99.4, 3510.0], [99.5, 3677.0], [99.6, 4014.0], [99.7, 4229.0], [99.8, 4473.0], [99.9, 4786.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 576.0, "series": [{"data": [[600.0, 412.0], [700.0, 305.0], [800.0, 301.0], [900.0, 274.0], [1000.0, 312.0], [1100.0, 266.0], [1200.0, 183.0], [1300.0, 229.0], [1400.0, 191.0], [1500.0, 124.0], [1600.0, 79.0], [1700.0, 66.0], [1800.0, 64.0], [1900.0, 56.0], [2000.0, 51.0], [2100.0, 50.0], [2300.0, 18.0], [2200.0, 41.0], [2400.0, 19.0], [2500.0, 18.0], [2600.0, 11.0], [2800.0, 10.0], [2700.0, 15.0], [2900.0, 6.0], [3100.0, 5.0], [3300.0, 5.0], [3200.0, 1.0], [3400.0, 1.0], [3500.0, 5.0], [3700.0, 2.0], [3600.0, 2.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 4.0], [4300.0, 2.0], [4200.0, 2.0], [4100.0, 1.0], [4400.0, 2.0], [4500.0, 1.0], [4700.0, 4.0], [4900.0, 2.0], [5600.0, 1.0], [5500.0, 1.0], [8700.0, 1.0], [100.0, 30.0], [200.0, 576.0], [300.0, 353.0], [400.0, 515.0], [500.0, 571.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 670.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3040.0, "series": [{"data": [[0.0, 1480.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3040.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 670.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.817427385892115, "minX": 1.60237308E12, "maxY": 10.0, "series": [{"data": [[1.6023732E12, 10.0], [1.60237338E12, 10.0], [1.60237308E12, 10.0], [1.60237356E12, 9.817427385892115], [1.60237326E12, 10.0], [1.60237344E12, 10.0], [1.60237314E12, 10.0], [1.60237332E12, 10.0], [1.6023735E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237356E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 581.0, "minX": 1.0, "maxY": 2429.0, "series": [{"data": [[8.0, 581.0], [4.0, 1111.0], [2.0, 1041.0], [1.0, 2429.0], [10.0, 899.6769587032046], [5.0, 1370.0], [6.0, 627.0], [3.0, 1250.0], [7.0, 1372.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996146, 900.1747591522168]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1285.4166666666667, "minX": 1.60237308E12, "maxY": 3589485.033333333, "series": [{"data": [[1.6023732E12, 3589227.3333333335], [1.60237338E12, 2518766.8666666667], [1.60237308E12, 1246928.4], [1.60237356E12, 1216025.2833333334], [1.60237326E12, 3314324.8666666667], [1.60237344E12, 3589485.033333333], [1.60237314E12, 2549812.2], [1.60237332E12, 3080363.7666666666], [1.6023735E12, 2867580.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023732E12, 4970.383333333333], [1.60237338E12, 4972.233333333334], [1.60237308E12, 1285.4166666666667], [1.60237356E12, 1811.1166666666666], [1.60237326E12, 5485.233333333334], [1.60237344E12, 5142.183333333333], [1.60237314E12, 5326.383333333333], [1.60237332E12, 4180.233333333334], [1.6023735E12, 5404.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237356E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 819.4293478260863, "minX": 1.60237308E12, "maxY": 1196.068965517241, "series": [{"data": [[1.6023732E12, 903.4367469879516], [1.60237338E12, 876.7441520467834], [1.60237308E12, 1196.068965517241], [1.60237356E12, 1135.8921161825726], [1.60237326E12, 825.1629834254146], [1.60237344E12, 869.082728592162], [1.60237314E12, 819.4293478260863], [1.60237332E12, 1061.5547703180218], [1.6023735E12, 829.0870786516862]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237356E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 817.8355978260867, "minX": 1.60237308E12, "maxY": 1193.0517241379312, "series": [{"data": [[1.6023732E12, 900.8870481927706], [1.60237338E12, 875.3216374269006], [1.60237308E12, 1193.0517241379312], [1.60237356E12, 1134.2987551867227], [1.60237326E12, 823.139502762431], [1.60237344E12, 867.3222060957912], [1.60237314E12, 817.8355978260867], [1.60237332E12, 1059.2296819787987], [1.6023735E12, 827.7879213483146]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237356E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60237308E12, "maxY": 0.45977011494252834, "series": [{"data": [[1.6023732E12, 0.015060240963855413], [1.60237338E12, 0.0175438596491228], [1.60237308E12, 0.45977011494252834], [1.60237356E12, 0.0], [1.60237326E12, 0.0138121546961326], [1.60237344E12, 0.013062409288824385], [1.60237314E12, 0.014945652173913054], [1.60237332E12, 0.014134275618374562], [1.6023735E12, 0.00983146067415731]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237356E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60237308E12, "maxY": 8742.0, "series": [{"data": [[1.6023732E12, 4751.0], [1.60237338E12, 5504.0], [1.60237308E12, 4349.0], [1.60237356E12, 4093.0], [1.60237326E12, 4779.0], [1.60237344E12, 2843.0], [1.60237314E12, 5658.0], [1.60237332E12, 8742.0], [1.6023735E12, 2934.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023732E12, 210.0], [1.60237338E12, 202.16499983668328], [1.60237308E12, 201.57499995827675], [1.60237356E12, 236.1879973459244], [1.60237326E12, 194.52499982714653], [1.60237344E12, 200.20999983549117], [1.60237314E12, 207.63299982428552], [1.60237332E12, 216.10299986481667], [1.6023735E12, 199.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023732E12, 210.58350006341934], [1.60237338E12, 202.7815000653267], [1.60237308E12, 201.7325000166893], [1.60237356E12, 246.20680106163024], [1.60237326E12, 195.53250020742416], [1.60237344E12, 200.83100006580352], [1.60237314E12, 208.2963000702858], [1.60237332E12, 216.61330005407333], [1.6023735E12, 199.11740013599396]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023732E12, 210.31749992072582], [1.60237338E12, 202.50749991834164], [1.60237308E12, 201.66249997913837], [1.60237356E12, 241.75399867296218], [1.60237326E12, 194.88749991357327], [1.60237344E12, 200.5549999177456], [1.60237314E12, 208.00149991214275], [1.60237332E12, 216.38649993240833], [1.6023735E12, 199.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023732E12, 203.0], [1.60237338E12, 194.0], [1.60237308E12, 201.0], [1.60237356E12, 200.0], [1.60237326E12, 188.0], [1.60237344E12, 184.0], [1.60237314E12, 189.0], [1.60237332E12, 200.0], [1.6023735E12, 193.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023732E12, 706.5], [1.60237338E12, 743.5], [1.60237308E12, 985.5], [1.60237356E12, 1017.0], [1.60237326E12, 630.5], [1.60237344E12, 654.0], [1.60237314E12, 687.0], [1.60237332E12, 910.5], [1.6023735E12, 658.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237356E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 393.0, "minX": 1.0, "maxY": 2429.0, "series": [{"data": [[3.0, 1470.0], [4.0, 1339.0], [5.0, 1365.0], [6.0, 1151.0], [7.0, 1101.0], [8.0, 1003.0], [9.0, 962.0], [10.0, 933.5], [11.0, 841.0], [12.0, 799.5], [13.0, 751.0], [14.0, 597.5], [15.0, 613.0], [16.0, 577.5], [1.0, 2429.0], [17.0, 497.0], [18.0, 550.0], [19.0, 493.0], [20.0, 420.5], [21.0, 432.0], [22.0, 442.5], [23.0, 438.0], [25.0, 415.0], [26.0, 423.0], [27.0, 393.0], [28.0, 410.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 393.0, "minX": 1.0, "maxY": 2418.0, "series": [{"data": [[3.0, 1469.0], [4.0, 1337.0], [5.0, 1364.0], [6.0, 1147.5], [7.0, 1100.0], [8.0, 1002.0], [9.0, 960.0], [10.0, 931.5], [11.0, 839.0], [12.0, 796.0], [13.0, 750.0], [14.0, 594.5], [15.0, 612.0], [16.0, 577.5], [1.0, 2418.0], [17.0, 497.0], [18.0, 550.0], [19.0, 492.0], [20.0, 420.5], [21.0, 431.0], [22.0, 442.5], [23.0, 438.0], [25.0, 415.0], [26.0, 423.0], [27.0, 393.0], [28.0, 409.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.066666666666667, "minX": 1.60237308E12, "maxY": 12.266666666666667, "series": [{"data": [[1.6023732E12, 11.066666666666666], [1.60237338E12, 11.4], [1.60237308E12, 3.066666666666667], [1.60237356E12, 3.85], [1.60237326E12, 12.066666666666666], [1.60237344E12, 11.483333333333333], [1.60237314E12, 12.266666666666667], [1.60237332E12, 9.433333333333334], [1.6023735E12, 11.866666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237356E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.9, "minX": 1.60237308E12, "maxY": 12.266666666666667, "series": [{"data": [[1.6023732E12, 11.066666666666666], [1.60237338E12, 11.4], [1.60237308E12, 2.9], [1.60237356E12, 4.016666666666667], [1.60237326E12, 12.066666666666666], [1.60237344E12, 11.483333333333333], [1.60237314E12, 12.266666666666667], [1.60237332E12, 9.433333333333334], [1.6023735E12, 11.866666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237356E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.9, "minX": 1.60237308E12, "maxY": 12.266666666666667, "series": [{"data": [[1.6023732E12, 11.066666666666666], [1.60237338E12, 11.4], [1.60237308E12, 2.9], [1.60237356E12, 4.016666666666667], [1.60237326E12, 12.066666666666666], [1.60237344E12, 11.483333333333333], [1.60237314E12, 12.266666666666667], [1.60237332E12, 9.433333333333334], [1.6023735E12, 11.866666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237356E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.9, "minX": 1.60237308E12, "maxY": 12.266666666666667, "series": [{"data": [[1.6023732E12, 11.066666666666666], [1.60237338E12, 11.4], [1.60237308E12, 2.9], [1.60237356E12, 4.016666666666667], [1.60237326E12, 12.066666666666666], [1.60237344E12, 11.483333333333333], [1.60237314E12, 12.266666666666667], [1.60237332E12, 9.433333333333334], [1.6023735E12, 11.866666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237356E12, "title": "Total Transactions Per Second"}},
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

