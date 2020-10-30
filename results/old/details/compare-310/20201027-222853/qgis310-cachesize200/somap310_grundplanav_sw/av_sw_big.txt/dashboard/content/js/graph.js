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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 6056.0, "series": [{"data": [[0.0, 184.0], [0.1, 189.0], [0.2, 193.0], [0.3, 195.0], [0.4, 196.0], [0.5, 198.0], [0.6, 199.0], [0.7, 200.0], [0.8, 201.0], [0.9, 202.0], [1.0, 202.0], [1.1, 204.0], [1.2, 205.0], [1.3, 206.0], [1.4, 207.0], [1.5, 208.0], [1.6, 209.0], [1.7, 209.0], [1.8, 211.0], [1.9, 212.0], [2.0, 213.0], [2.1, 214.0], [2.2, 216.0], [2.3, 216.0], [2.4, 217.0], [2.5, 218.0], [2.6, 218.0], [2.7, 219.0], [2.8, 219.0], [2.9, 220.0], [3.0, 221.0], [3.1, 222.0], [3.2, 222.0], [3.3, 224.0], [3.4, 224.0], [3.5, 224.0], [3.6, 225.0], [3.7, 226.0], [3.8, 226.0], [3.9, 227.0], [4.0, 227.0], [4.1, 228.0], [4.2, 229.0], [4.3, 230.0], [4.4, 230.0], [4.5, 231.0], [4.6, 232.0], [4.7, 233.0], [4.8, 234.0], [4.9, 236.0], [5.0, 236.0], [5.1, 238.0], [5.2, 239.0], [5.3, 240.0], [5.4, 241.0], [5.5, 241.0], [5.6, 243.0], [5.7, 244.0], [5.8, 245.0], [5.9, 246.0], [6.0, 246.0], [6.1, 247.0], [6.2, 248.0], [6.3, 248.0], [6.4, 250.0], [6.5, 251.0], [6.6, 253.0], [6.7, 254.0], [6.8, 255.0], [6.9, 257.0], [7.0, 258.0], [7.1, 259.0], [7.2, 261.0], [7.3, 261.0], [7.4, 263.0], [7.5, 264.0], [7.6, 266.0], [7.7, 268.0], [7.8, 269.0], [7.9, 271.0], [8.0, 272.0], [8.1, 273.0], [8.2, 275.0], [8.3, 276.0], [8.4, 277.0], [8.5, 279.0], [8.6, 279.0], [8.7, 280.0], [8.8, 281.0], [8.9, 283.0], [9.0, 284.0], [9.1, 285.0], [9.2, 285.0], [9.3, 286.0], [9.4, 286.0], [9.5, 287.0], [9.6, 288.0], [9.7, 289.0], [9.8, 290.0], [9.9, 290.0], [10.0, 291.0], [10.1, 293.0], [10.2, 294.0], [10.3, 295.0], [10.4, 295.0], [10.5, 296.0], [10.6, 297.0], [10.7, 298.0], [10.8, 300.0], [10.9, 300.0], [11.0, 300.0], [11.1, 301.0], [11.2, 302.0], [11.3, 304.0], [11.4, 304.0], [11.5, 305.0], [11.6, 306.0], [11.7, 307.0], [11.8, 308.0], [11.9, 309.0], [12.0, 311.0], [12.1, 312.0], [12.2, 313.0], [12.3, 314.0], [12.4, 315.0], [12.5, 316.0], [12.6, 318.0], [12.7, 320.0], [12.8, 322.0], [12.9, 322.0], [13.0, 323.0], [13.1, 323.0], [13.2, 325.0], [13.3, 326.0], [13.4, 327.0], [13.5, 328.0], [13.6, 329.0], [13.7, 330.0], [13.8, 331.0], [13.9, 333.0], [14.0, 334.0], [14.1, 334.0], [14.2, 336.0], [14.3, 336.0], [14.4, 337.0], [14.5, 338.0], [14.6, 341.0], [14.7, 342.0], [14.8, 344.0], [14.9, 345.0], [15.0, 347.0], [15.1, 347.0], [15.2, 349.0], [15.3, 350.0], [15.4, 351.0], [15.5, 353.0], [15.6, 355.0], [15.7, 356.0], [15.8, 358.0], [15.9, 358.0], [16.0, 360.0], [16.1, 361.0], [16.2, 363.0], [16.3, 365.0], [16.4, 368.0], [16.5, 369.0], [16.6, 371.0], [16.7, 373.0], [16.8, 376.0], [16.9, 377.0], [17.0, 379.0], [17.1, 380.0], [17.2, 382.0], [17.3, 384.0], [17.4, 385.0], [17.5, 387.0], [17.6, 388.0], [17.7, 389.0], [17.8, 391.0], [17.9, 392.0], [18.0, 394.0], [18.1, 394.0], [18.2, 395.0], [18.3, 396.0], [18.4, 397.0], [18.5, 397.0], [18.6, 398.0], [18.7, 399.0], [18.8, 399.0], [18.9, 400.0], [19.0, 401.0], [19.1, 402.0], [19.2, 403.0], [19.3, 404.0], [19.4, 404.0], [19.5, 405.0], [19.6, 406.0], [19.7, 407.0], [19.8, 407.0], [19.9, 408.0], [20.0, 409.0], [20.1, 410.0], [20.2, 411.0], [20.3, 412.0], [20.4, 413.0], [20.5, 413.0], [20.6, 414.0], [20.7, 415.0], [20.8, 416.0], [20.9, 418.0], [21.0, 418.0], [21.1, 419.0], [21.2, 420.0], [21.3, 421.0], [21.4, 421.0], [21.5, 422.0], [21.6, 424.0], [21.7, 424.0], [21.8, 425.0], [21.9, 427.0], [22.0, 428.0], [22.1, 429.0], [22.2, 430.0], [22.3, 431.0], [22.4, 432.0], [22.5, 432.0], [22.6, 433.0], [22.7, 434.0], [22.8, 435.0], [22.9, 435.0], [23.0, 437.0], [23.1, 438.0], [23.2, 440.0], [23.3, 440.0], [23.4, 441.0], [23.5, 442.0], [23.6, 443.0], [23.7, 443.0], [23.8, 444.0], [23.9, 445.0], [24.0, 446.0], [24.1, 447.0], [24.2, 448.0], [24.3, 448.0], [24.4, 449.0], [24.5, 450.0], [24.6, 451.0], [24.7, 451.0], [24.8, 452.0], [24.9, 452.0], [25.0, 453.0], [25.1, 454.0], [25.2, 454.0], [25.3, 455.0], [25.4, 456.0], [25.5, 457.0], [25.6, 458.0], [25.7, 458.0], [25.8, 459.0], [25.9, 460.0], [26.0, 461.0], [26.1, 462.0], [26.2, 463.0], [26.3, 464.0], [26.4, 465.0], [26.5, 467.0], [26.6, 468.0], [26.7, 469.0], [26.8, 469.0], [26.9, 471.0], [27.0, 472.0], [27.1, 472.0], [27.2, 473.0], [27.3, 474.0], [27.4, 475.0], [27.5, 476.0], [27.6, 476.0], [27.7, 477.0], [27.8, 478.0], [27.9, 479.0], [28.0, 479.0], [28.1, 480.0], [28.2, 481.0], [28.3, 481.0], [28.4, 482.0], [28.5, 483.0], [28.6, 484.0], [28.7, 485.0], [28.8, 486.0], [28.9, 487.0], [29.0, 488.0], [29.1, 489.0], [29.2, 489.0], [29.3, 491.0], [29.4, 494.0], [29.5, 495.0], [29.6, 496.0], [29.7, 497.0], [29.8, 498.0], [29.9, 499.0], [30.0, 500.0], [30.1, 501.0], [30.2, 502.0], [30.3, 503.0], [30.4, 504.0], [30.5, 505.0], [30.6, 506.0], [30.7, 508.0], [30.8, 508.0], [30.9, 510.0], [31.0, 510.0], [31.1, 511.0], [31.2, 512.0], [31.3, 513.0], [31.4, 514.0], [31.5, 516.0], [31.6, 518.0], [31.7, 519.0], [31.8, 520.0], [31.9, 521.0], [32.0, 523.0], [32.1, 523.0], [32.2, 525.0], [32.3, 527.0], [32.4, 529.0], [32.5, 530.0], [32.6, 531.0], [32.7, 532.0], [32.8, 533.0], [32.9, 535.0], [33.0, 535.0], [33.1, 536.0], [33.2, 536.0], [33.3, 538.0], [33.4, 539.0], [33.5, 540.0], [33.6, 541.0], [33.7, 542.0], [33.8, 542.0], [33.9, 543.0], [34.0, 544.0], [34.1, 545.0], [34.2, 546.0], [34.3, 546.0], [34.4, 547.0], [34.5, 549.0], [34.6, 550.0], [34.7, 552.0], [34.8, 553.0], [34.9, 553.0], [35.0, 554.0], [35.1, 555.0], [35.2, 556.0], [35.3, 558.0], [35.4, 559.0], [35.5, 560.0], [35.6, 561.0], [35.7, 562.0], [35.8, 563.0], [35.9, 563.0], [36.0, 564.0], [36.1, 565.0], [36.2, 567.0], [36.3, 569.0], [36.4, 569.0], [36.5, 570.0], [36.6, 571.0], [36.7, 572.0], [36.8, 573.0], [36.9, 574.0], [37.0, 575.0], [37.1, 576.0], [37.2, 576.0], [37.3, 577.0], [37.4, 578.0], [37.5, 578.0], [37.6, 579.0], [37.7, 580.0], [37.8, 581.0], [37.9, 582.0], [38.0, 583.0], [38.1, 584.0], [38.2, 585.0], [38.3, 586.0], [38.4, 587.0], [38.5, 588.0], [38.6, 589.0], [38.7, 589.0], [38.8, 590.0], [38.9, 591.0], [39.0, 591.0], [39.1, 592.0], [39.2, 593.0], [39.3, 594.0], [39.4, 595.0], [39.5, 596.0], [39.6, 597.0], [39.7, 598.0], [39.8, 599.0], [39.9, 600.0], [40.0, 600.0], [40.1, 602.0], [40.2, 603.0], [40.3, 604.0], [40.4, 605.0], [40.5, 606.0], [40.6, 608.0], [40.7, 609.0], [40.8, 610.0], [40.9, 611.0], [41.0, 612.0], [41.1, 613.0], [41.2, 614.0], [41.3, 615.0], [41.4, 616.0], [41.5, 617.0], [41.6, 619.0], [41.7, 620.0], [41.8, 621.0], [41.9, 622.0], [42.0, 623.0], [42.1, 624.0], [42.2, 625.0], [42.3, 626.0], [42.4, 627.0], [42.5, 628.0], [42.6, 629.0], [42.7, 630.0], [42.8, 632.0], [42.9, 632.0], [43.0, 633.0], [43.1, 634.0], [43.2, 636.0], [43.3, 636.0], [43.4, 640.0], [43.5, 641.0], [43.6, 641.0], [43.7, 643.0], [43.8, 644.0], [43.9, 644.0], [44.0, 645.0], [44.1, 646.0], [44.2, 647.0], [44.3, 648.0], [44.4, 649.0], [44.5, 649.0], [44.6, 652.0], [44.7, 654.0], [44.8, 655.0], [44.9, 656.0], [45.0, 658.0], [45.1, 660.0], [45.2, 661.0], [45.3, 661.0], [45.4, 663.0], [45.5, 664.0], [45.6, 665.0], [45.7, 666.0], [45.8, 668.0], [45.9, 669.0], [46.0, 671.0], [46.1, 672.0], [46.2, 673.0], [46.3, 675.0], [46.4, 677.0], [46.5, 679.0], [46.6, 680.0], [46.7, 681.0], [46.8, 685.0], [46.9, 687.0], [47.0, 688.0], [47.1, 689.0], [47.2, 690.0], [47.3, 691.0], [47.4, 693.0], [47.5, 694.0], [47.6, 695.0], [47.7, 697.0], [47.8, 698.0], [47.9, 699.0], [48.0, 701.0], [48.1, 702.0], [48.2, 704.0], [48.3, 705.0], [48.4, 706.0], [48.5, 708.0], [48.6, 709.0], [48.7, 710.0], [48.8, 711.0], [48.9, 713.0], [49.0, 715.0], [49.1, 715.0], [49.2, 716.0], [49.3, 719.0], [49.4, 721.0], [49.5, 722.0], [49.6, 723.0], [49.7, 724.0], [49.8, 725.0], [49.9, 725.0], [50.0, 726.0], [50.1, 728.0], [50.2, 730.0], [50.3, 731.0], [50.4, 734.0], [50.5, 736.0], [50.6, 736.0], [50.7, 737.0], [50.8, 741.0], [50.9, 743.0], [51.0, 744.0], [51.1, 745.0], [51.2, 745.0], [51.3, 747.0], [51.4, 748.0], [51.5, 750.0], [51.6, 751.0], [51.7, 752.0], [51.8, 754.0], [51.9, 756.0], [52.0, 758.0], [52.1, 760.0], [52.2, 761.0], [52.3, 762.0], [52.4, 764.0], [52.5, 766.0], [52.6, 766.0], [52.7, 767.0], [52.8, 769.0], [52.9, 771.0], [53.0, 772.0], [53.1, 773.0], [53.2, 775.0], [53.3, 777.0], [53.4, 779.0], [53.5, 781.0], [53.6, 784.0], [53.7, 785.0], [53.8, 787.0], [53.9, 789.0], [54.0, 790.0], [54.1, 791.0], [54.2, 794.0], [54.3, 797.0], [54.4, 799.0], [54.5, 800.0], [54.6, 801.0], [54.7, 803.0], [54.8, 805.0], [54.9, 806.0], [55.0, 808.0], [55.1, 810.0], [55.2, 811.0], [55.3, 813.0], [55.4, 814.0], [55.5, 815.0], [55.6, 816.0], [55.7, 817.0], [55.8, 819.0], [55.9, 821.0], [56.0, 822.0], [56.1, 824.0], [56.2, 826.0], [56.3, 829.0], [56.4, 832.0], [56.5, 834.0], [56.6, 835.0], [56.7, 838.0], [56.8, 839.0], [56.9, 841.0], [57.0, 842.0], [57.1, 844.0], [57.2, 844.0], [57.3, 845.0], [57.4, 847.0], [57.5, 849.0], [57.6, 850.0], [57.7, 852.0], [57.8, 854.0], [57.9, 856.0], [58.0, 857.0], [58.1, 859.0], [58.2, 861.0], [58.3, 862.0], [58.4, 863.0], [58.5, 864.0], [58.6, 867.0], [58.7, 869.0], [58.8, 871.0], [58.9, 872.0], [59.0, 876.0], [59.1, 876.0], [59.2, 877.0], [59.3, 879.0], [59.4, 880.0], [59.5, 881.0], [59.6, 882.0], [59.7, 883.0], [59.8, 885.0], [59.9, 889.0], [60.0, 891.0], [60.1, 894.0], [60.2, 895.0], [60.3, 896.0], [60.4, 897.0], [60.5, 900.0], [60.6, 902.0], [60.7, 903.0], [60.8, 906.0], [60.9, 907.0], [61.0, 910.0], [61.1, 911.0], [61.2, 913.0], [61.3, 916.0], [61.4, 919.0], [61.5, 921.0], [61.6, 922.0], [61.7, 924.0], [61.8, 927.0], [61.9, 929.0], [62.0, 931.0], [62.1, 934.0], [62.2, 935.0], [62.3, 937.0], [62.4, 938.0], [62.5, 939.0], [62.6, 941.0], [62.7, 943.0], [62.8, 944.0], [62.9, 946.0], [63.0, 947.0], [63.1, 951.0], [63.2, 953.0], [63.3, 954.0], [63.4, 955.0], [63.5, 957.0], [63.6, 958.0], [63.7, 961.0], [63.8, 962.0], [63.9, 965.0], [64.0, 965.0], [64.1, 966.0], [64.2, 968.0], [64.3, 970.0], [64.4, 973.0], [64.5, 975.0], [64.6, 976.0], [64.7, 979.0], [64.8, 981.0], [64.9, 983.0], [65.0, 984.0], [65.1, 985.0], [65.2, 986.0], [65.3, 988.0], [65.4, 990.0], [65.5, 993.0], [65.6, 994.0], [65.7, 996.0], [65.8, 998.0], [65.9, 999.0], [66.0, 1001.0], [66.1, 1002.0], [66.2, 1004.0], [66.3, 1007.0], [66.4, 1010.0], [66.5, 1012.0], [66.6, 1013.0], [66.7, 1016.0], [66.8, 1019.0], [66.9, 1022.0], [67.0, 1023.0], [67.1, 1026.0], [67.2, 1028.0], [67.3, 1029.0], [67.4, 1032.0], [67.5, 1035.0], [67.6, 1037.0], [67.7, 1037.0], [67.8, 1040.0], [67.9, 1041.0], [68.0, 1042.0], [68.1, 1046.0], [68.2, 1047.0], [68.3, 1049.0], [68.4, 1050.0], [68.5, 1053.0], [68.6, 1056.0], [68.7, 1058.0], [68.8, 1061.0], [68.9, 1062.0], [69.0, 1066.0], [69.1, 1067.0], [69.2, 1069.0], [69.3, 1074.0], [69.4, 1075.0], [69.5, 1076.0], [69.6, 1078.0], [69.7, 1079.0], [69.8, 1082.0], [69.9, 1084.0], [70.0, 1086.0], [70.1, 1088.0], [70.2, 1089.0], [70.3, 1090.0], [70.4, 1093.0], [70.5, 1095.0], [70.6, 1097.0], [70.7, 1099.0], [70.8, 1100.0], [70.9, 1101.0], [71.0, 1102.0], [71.1, 1105.0], [71.2, 1107.0], [71.3, 1109.0], [71.4, 1110.0], [71.5, 1113.0], [71.6, 1116.0], [71.7, 1118.0], [71.8, 1119.0], [71.9, 1122.0], [72.0, 1123.0], [72.1, 1125.0], [72.2, 1126.0], [72.3, 1129.0], [72.4, 1130.0], [72.5, 1131.0], [72.6, 1133.0], [72.7, 1137.0], [72.8, 1140.0], [72.9, 1142.0], [73.0, 1145.0], [73.1, 1147.0], [73.2, 1149.0], [73.3, 1151.0], [73.4, 1152.0], [73.5, 1154.0], [73.6, 1155.0], [73.7, 1158.0], [73.8, 1159.0], [73.9, 1161.0], [74.0, 1163.0], [74.1, 1165.0], [74.2, 1167.0], [74.3, 1169.0], [74.4, 1171.0], [74.5, 1171.0], [74.6, 1173.0], [74.7, 1175.0], [74.8, 1176.0], [74.9, 1180.0], [75.0, 1181.0], [75.1, 1183.0], [75.2, 1187.0], [75.3, 1189.0], [75.4, 1190.0], [75.5, 1193.0], [75.6, 1197.0], [75.7, 1198.0], [75.8, 1201.0], [75.9, 1202.0], [76.0, 1207.0], [76.1, 1208.0], [76.2, 1209.0], [76.3, 1211.0], [76.4, 1213.0], [76.5, 1215.0], [76.6, 1216.0], [76.7, 1218.0], [76.8, 1220.0], [76.9, 1222.0], [77.0, 1223.0], [77.1, 1225.0], [77.2, 1227.0], [77.3, 1228.0], [77.4, 1231.0], [77.5, 1233.0], [77.6, 1236.0], [77.7, 1238.0], [77.8, 1240.0], [77.9, 1244.0], [78.0, 1246.0], [78.1, 1251.0], [78.2, 1259.0], [78.3, 1262.0], [78.4, 1264.0], [78.5, 1267.0], [78.6, 1269.0], [78.7, 1272.0], [78.8, 1274.0], [78.9, 1278.0], [79.0, 1283.0], [79.1, 1285.0], [79.2, 1289.0], [79.3, 1291.0], [79.4, 1293.0], [79.5, 1298.0], [79.6, 1300.0], [79.7, 1301.0], [79.8, 1304.0], [79.9, 1306.0], [80.0, 1307.0], [80.1, 1311.0], [80.2, 1311.0], [80.3, 1313.0], [80.4, 1315.0], [80.5, 1317.0], [80.6, 1319.0], [80.7, 1323.0], [80.8, 1325.0], [80.9, 1327.0], [81.0, 1332.0], [81.1, 1334.0], [81.2, 1339.0], [81.3, 1341.0], [81.4, 1343.0], [81.5, 1345.0], [81.6, 1348.0], [81.7, 1350.0], [81.8, 1353.0], [81.9, 1354.0], [82.0, 1357.0], [82.1, 1358.0], [82.2, 1360.0], [82.3, 1362.0], [82.4, 1365.0], [82.5, 1367.0], [82.6, 1369.0], [82.7, 1372.0], [82.8, 1374.0], [82.9, 1376.0], [83.0, 1378.0], [83.1, 1380.0], [83.2, 1383.0], [83.3, 1385.0], [83.4, 1386.0], [83.5, 1389.0], [83.6, 1391.0], [83.7, 1394.0], [83.8, 1396.0], [83.9, 1402.0], [84.0, 1405.0], [84.1, 1407.0], [84.2, 1408.0], [84.3, 1410.0], [84.4, 1412.0], [84.5, 1414.0], [84.6, 1418.0], [84.7, 1420.0], [84.8, 1423.0], [84.9, 1426.0], [85.0, 1427.0], [85.1, 1430.0], [85.2, 1432.0], [85.3, 1436.0], [85.4, 1440.0], [85.5, 1444.0], [85.6, 1446.0], [85.7, 1447.0], [85.8, 1450.0], [85.9, 1454.0], [86.0, 1455.0], [86.1, 1457.0], [86.2, 1457.0], [86.3, 1459.0], [86.4, 1463.0], [86.5, 1465.0], [86.6, 1469.0], [86.7, 1471.0], [86.8, 1474.0], [86.9, 1478.0], [87.0, 1479.0], [87.1, 1481.0], [87.2, 1484.0], [87.3, 1484.0], [87.4, 1489.0], [87.5, 1495.0], [87.6, 1499.0], [87.7, 1503.0], [87.8, 1508.0], [87.9, 1511.0], [88.0, 1514.0], [88.1, 1517.0], [88.2, 1521.0], [88.3, 1522.0], [88.4, 1525.0], [88.5, 1527.0], [88.6, 1531.0], [88.7, 1533.0], [88.8, 1535.0], [88.9, 1538.0], [89.0, 1543.0], [89.1, 1546.0], [89.2, 1549.0], [89.3, 1550.0], [89.4, 1554.0], [89.5, 1558.0], [89.6, 1562.0], [89.7, 1565.0], [89.8, 1567.0], [89.9, 1574.0], [90.0, 1587.0], [90.1, 1592.0], [90.2, 1599.0], [90.3, 1605.0], [90.4, 1609.0], [90.5, 1612.0], [90.6, 1620.0], [90.7, 1622.0], [90.8, 1628.0], [90.9, 1634.0], [91.0, 1642.0], [91.1, 1650.0], [91.2, 1658.0], [91.3, 1662.0], [91.4, 1665.0], [91.5, 1672.0], [91.6, 1678.0], [91.7, 1680.0], [91.8, 1684.0], [91.9, 1687.0], [92.0, 1693.0], [92.1, 1702.0], [92.2, 1707.0], [92.3, 1716.0], [92.4, 1721.0], [92.5, 1734.0], [92.6, 1744.0], [92.7, 1757.0], [92.8, 1765.0], [92.9, 1769.0], [93.0, 1778.0], [93.1, 1791.0], [93.2, 1810.0], [93.3, 1823.0], [93.4, 1835.0], [93.5, 1841.0], [93.6, 1852.0], [93.7, 1868.0], [93.8, 1879.0], [93.9, 1886.0], [94.0, 1897.0], [94.1, 1902.0], [94.2, 1912.0], [94.3, 1921.0], [94.4, 1928.0], [94.5, 1943.0], [94.6, 1956.0], [94.7, 1962.0], [94.8, 1970.0], [94.9, 1988.0], [95.0, 1999.0], [95.1, 2006.0], [95.2, 2016.0], [95.3, 2032.0], [95.4, 2044.0], [95.5, 2052.0], [95.6, 2073.0], [95.7, 2082.0], [95.8, 2095.0], [95.9, 2109.0], [96.0, 2116.0], [96.1, 2134.0], [96.2, 2143.0], [96.3, 2150.0], [96.4, 2162.0], [96.5, 2175.0], [96.6, 2183.0], [96.7, 2192.0], [96.8, 2229.0], [96.9, 2234.0], [97.0, 2253.0], [97.1, 2265.0], [97.2, 2287.0], [97.3, 2301.0], [97.4, 2332.0], [97.5, 2347.0], [97.6, 2373.0], [97.7, 2389.0], [97.8, 2414.0], [97.9, 2441.0], [98.0, 2464.0], [98.1, 2472.0], [98.2, 2499.0], [98.3, 2516.0], [98.4, 2560.0], [98.5, 2619.0], [98.6, 2661.0], [98.7, 2719.0], [98.8, 2862.0], [98.9, 2902.0], [99.0, 2986.0], [99.1, 3140.0], [99.2, 3252.0], [99.3, 3436.0], [99.4, 3534.0], [99.5, 3629.0], [99.6, 3840.0], [99.7, 4473.0], [99.8, 5017.0], [99.9, 5425.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 578.0, "series": [{"data": [[600.0, 418.0], [700.0, 337.0], [800.0, 313.0], [900.0, 284.0], [1000.0, 249.0], [1100.0, 261.0], [1200.0, 197.0], [1300.0, 223.0], [1400.0, 195.0], [1500.0, 135.0], [1600.0, 95.0], [1700.0, 58.0], [1800.0, 46.0], [1900.0, 50.0], [2000.0, 42.0], [2100.0, 47.0], [2200.0, 28.0], [2300.0, 25.0], [2400.0, 24.0], [2500.0, 12.0], [2600.0, 13.0], [2800.0, 7.0], [2700.0, 3.0], [2900.0, 7.0], [3000.0, 4.0], [3100.0, 4.0], [3300.0, 1.0], [3200.0, 3.0], [3400.0, 6.0], [3500.0, 4.0], [3600.0, 7.0], [3700.0, 1.0], [3800.0, 2.0], [4000.0, 2.0], [4100.0, 1.0], [4400.0, 1.0], [4800.0, 2.0], [4700.0, 1.0], [5000.0, 2.0], [4900.0, 1.0], [5200.0, 3.0], [5400.0, 2.0], [5600.0, 1.0], [5700.0, 1.0], [6000.0, 2.0], [100.0, 34.0], [200.0, 526.0], [300.0, 418.0], [400.0, 578.0], [500.0, 514.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 642.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2987.0, "series": [{"data": [[0.0, 1561.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2987.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 642.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.60384092E12, "maxY": 10.0, "series": [{"data": [[1.60384098E12, 10.0], [1.60384128E12, 10.0], [1.60384116E12, 10.0], [1.60384134E12, 9.959152798789713], [1.60384104E12, 10.0], [1.60384122E12, 10.0], [1.6038414E12, 1.5], [1.60384092E12, 10.0], [1.6038411E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038414E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 554.0, "minX": 1.0, "maxY": 2658.0, "series": [{"data": [[8.0, 753.0], [4.0, 643.0], [2.0, 2620.0], [1.0, 2658.0], [9.0, 1383.0], [10.0, 886.9525188187584], [5.0, 554.0], [6.0, 626.0], [3.0, 1634.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996146, 887.6541425818859]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15.433333333333334, "minX": 1.60384092E12, "maxY": 3834828.9833333334, "series": [{"data": [[1.60384098E12, 2646106.8666666667], [1.60384128E12, 3436445.0166666666], [1.60384116E12, 3106872.1666666665], [1.60384134E12, 2873980.0166666666], [1.60384104E12, 3834828.9833333334], [1.60384122E12, 2680158.6333333333], [1.6038414E12, 36535.38333333333], [1.60384092E12, 2153966.2666666666], [1.6038411E12, 3203428.6666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384098E12, 5265.8], [1.60384128E12, 5440.6], [1.60384116E12, 4453.283333333334], [1.60384134E12, 4996.2], [1.60384104E12, 5225.35], [1.60384122E12, 4998.466666666666], [1.6038414E12, 15.433333333333334], [1.60384092E12, 2917.866666666667], [1.6038411E12, 5264.333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038414E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 839.3783031988871, "minX": 1.60384092E12, "maxY": 2639.0, "series": [{"data": [[1.60384098E12, 839.3783031988871], [1.60384128E12, 840.4644351464439], [1.60384116E12, 985.3284552845522], [1.60384134E12, 892.9742813918301], [1.60384104E12, 866.7318840579709], [1.60384122E12, 869.1859443631046], [1.6038414E12, 2639.0], [1.60384092E12, 1010.7346437346433], [1.6038411E12, 856.6379310344831]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038414E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 837.5688456189151, "minX": 1.60384092E12, "maxY": 2633.5, "series": [{"data": [[1.60384098E12, 837.5688456189151], [1.60384128E12, 838.7977684797776], [1.60384116E12, 983.3674796747982], [1.60384134E12, 891.5885022692885], [1.60384104E12, 864.4101449275372], [1.60384122E12, 867.6896046852123], [1.6038414E12, 2633.5], [1.60384092E12, 1008.3685503685514], [1.6038411E12, 854.9942528735631]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038414E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60384092E12, "maxY": 0.24078624078624078, "series": [{"data": [[1.60384098E12, 0.012517385257301806], [1.60384128E12, 0.018131101813110194], [1.60384116E12, 0.02764227642276425], [1.60384134E12, 0.01664145234493191], [1.60384104E12, 0.018840579710144908], [1.60384122E12, 0.01464128843338215], [1.6038414E12, 0.0], [1.60384092E12, 0.24078624078624078], [1.6038411E12, 0.01724137931034481]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038414E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60384092E12, "maxY": 6056.0, "series": [{"data": [[1.60384098E12, 5425.0], [1.60384128E12, 2527.0], [1.60384116E12, 6056.0], [1.60384134E12, 3738.0], [1.60384104E12, 3607.0], [1.60384122E12, 3687.0], [1.6038414E12, 2658.0], [1.60384092E12, 5704.0], [1.6038411E12, 5297.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384098E12, 208.47999982833863], [1.60384128E12, 196.92399965763093], [1.60384116E12, 212.0], [1.60384134E12, 200.9579998421669], [1.60384104E12, 199.65699950575828], [1.60384122E12, 200.1559998369217], [1.6038414E12, 2620.0], [1.60384092E12, 202.67199990272522], [1.6038411E12, 196.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384098E12, 209.0], [1.60384128E12, 198.10820006847382], [1.60384116E12, 212.59040035247804], [1.60384134E12, 201.55380006313325], [1.60384104E12, 201.52270019769668], [1.60384122E12, 200.77160006523133], [1.6038414E12, 2620.0], [1.60384092E12, 203.15680015563964], [1.6038411E12, 196.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384098E12, 208.8399999141693], [1.60384128E12, 197.64199982881547], [1.60384116E12, 212.0], [1.60384134E12, 201.28899992108344], [1.60384104E12, 200.69349975287915], [1.60384122E12, 200.49799991846083], [1.6038414E12, 2620.0], [1.60384092E12, 202.87599995136262], [1.6038411E12, 196.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384098E12, 199.0], [1.60384128E12, 190.0], [1.60384116E12, 202.0], [1.60384134E12, 193.0], [1.60384104E12, 186.0], [1.60384122E12, 186.0], [1.6038414E12, 2620.0], [1.60384092E12, 197.0], [1.6038411E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384098E12, 687.0], [1.60384128E12, 685.0], [1.60384116E12, 817.0], [1.60384134E12, 750.0], [1.60384104E12, 690.0], [1.60384122E12, 709.0], [1.6038414E12, 2639.0], [1.60384092E12, 853.0], [1.6038411E12, 688.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038414E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 420.0, "minX": 1.0, "maxY": 2425.5, "series": [{"data": [[2.0, 2425.5], [3.0, 1714.0], [4.0, 1467.5], [5.0, 1243.0], [6.0, 1226.5], [7.0, 1075.0], [8.0, 1102.0], [9.0, 955.5], [10.0, 873.5], [11.0, 857.0], [12.0, 794.0], [13.0, 693.5], [14.0, 615.5], [15.0, 686.0], [16.0, 586.5], [1.0, 1634.0], [17.0, 484.0], [18.0, 465.0], [19.0, 493.5], [20.0, 430.5], [21.0, 430.0], [22.0, 443.0], [23.0, 427.0], [25.0, 421.0], [26.0, 420.0], [28.0, 420.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 420.0, "minX": 1.0, "maxY": 2419.0, "series": [{"data": [[2.0, 2419.0], [3.0, 1710.5], [4.0, 1466.0], [5.0, 1236.0], [6.0, 1226.0], [7.0, 1072.0], [8.0, 1097.0], [9.0, 953.5], [10.0, 873.0], [11.0, 856.0], [12.0, 793.0], [13.0, 692.5], [14.0, 615.0], [15.0, 686.0], [16.0, 586.0], [1.0, 1633.0], [17.0, 484.0], [18.0, 465.0], [19.0, 493.5], [20.0, 430.5], [21.0, 429.0], [22.0, 443.0], [23.0, 427.0], [25.0, 421.0], [26.0, 420.0], [28.0, 420.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.95, "minX": 1.60384092E12, "maxY": 11.983333333333333, "series": [{"data": [[1.60384098E12, 11.983333333333333], [1.60384128E12, 11.95], [1.60384116E12, 10.25], [1.60384134E12, 10.883333333333333], [1.60384104E12, 11.5], [1.60384122E12, 11.383333333333333], [1.60384092E12, 6.95], [1.6038411E12, 11.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384134E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60384092E12, "maxY": 11.983333333333333, "series": [{"data": [[1.60384098E12, 11.983333333333333], [1.60384128E12, 11.95], [1.60384116E12, 10.25], [1.60384134E12, 11.016666666666667], [1.60384104E12, 11.5], [1.60384122E12, 11.383333333333333], [1.6038414E12, 0.03333333333333333], [1.60384092E12, 6.783333333333333], [1.6038411E12, 11.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038414E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60384092E12, "maxY": 11.983333333333333, "series": [{"data": [[1.60384098E12, 11.983333333333333], [1.60384128E12, 11.95], [1.60384116E12, 10.25], [1.60384134E12, 11.016666666666667], [1.60384104E12, 11.5], [1.60384122E12, 11.383333333333333], [1.6038414E12, 0.03333333333333333], [1.60384092E12, 6.783333333333333], [1.6038411E12, 11.6]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038414E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60384092E12, "maxY": 11.983333333333333, "series": [{"data": [[1.60384098E12, 11.983333333333333], [1.60384128E12, 11.95], [1.60384116E12, 10.25], [1.60384134E12, 11.016666666666667], [1.60384104E12, 11.5], [1.60384122E12, 11.383333333333333], [1.6038414E12, 0.03333333333333333], [1.60384092E12, 6.783333333333333], [1.6038411E12, 11.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038414E12, "title": "Total Transactions Per Second"}},
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

