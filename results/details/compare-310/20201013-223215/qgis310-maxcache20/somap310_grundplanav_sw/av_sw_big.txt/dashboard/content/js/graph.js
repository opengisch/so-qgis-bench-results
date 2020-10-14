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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 8580.0, "series": [{"data": [[0.0, 179.0], [0.1, 183.0], [0.2, 185.0], [0.3, 187.0], [0.4, 189.0], [0.5, 190.0], [0.6, 191.0], [0.7, 193.0], [0.8, 194.0], [0.9, 196.0], [1.0, 196.0], [1.1, 197.0], [1.2, 198.0], [1.3, 199.0], [1.4, 200.0], [1.5, 200.0], [1.6, 201.0], [1.7, 202.0], [1.8, 203.0], [1.9, 204.0], [2.0, 205.0], [2.1, 205.0], [2.2, 206.0], [2.3, 207.0], [2.4, 209.0], [2.5, 210.0], [2.6, 211.0], [2.7, 212.0], [2.8, 213.0], [2.9, 213.0], [3.0, 214.0], [3.1, 215.0], [3.2, 215.0], [3.3, 216.0], [3.4, 217.0], [3.5, 217.0], [3.6, 218.0], [3.7, 218.0], [3.8, 219.0], [3.9, 220.0], [4.0, 220.0], [4.1, 221.0], [4.2, 222.0], [4.3, 223.0], [4.4, 223.0], [4.5, 224.0], [4.6, 224.0], [4.7, 226.0], [4.8, 227.0], [4.9, 228.0], [5.0, 229.0], [5.1, 230.0], [5.2, 230.0], [5.3, 231.0], [5.4, 233.0], [5.5, 235.0], [5.6, 236.0], [5.7, 237.0], [5.8, 238.0], [5.9, 239.0], [6.0, 241.0], [6.1, 243.0], [6.2, 243.0], [6.3, 246.0], [6.4, 247.0], [6.5, 248.0], [6.6, 249.0], [6.7, 250.0], [6.8, 250.0], [6.9, 251.0], [7.0, 252.0], [7.1, 253.0], [7.2, 254.0], [7.3, 255.0], [7.4, 257.0], [7.5, 257.0], [7.6, 258.0], [7.7, 261.0], [7.8, 261.0], [7.9, 263.0], [8.0, 264.0], [8.1, 264.0], [8.2, 265.0], [8.3, 265.0], [8.4, 267.0], [8.5, 268.0], [8.6, 269.0], [8.7, 270.0], [8.8, 271.0], [8.9, 272.0], [9.0, 272.0], [9.1, 273.0], [9.2, 274.0], [9.3, 274.0], [9.4, 275.0], [9.5, 276.0], [9.6, 276.0], [9.7, 276.0], [9.8, 277.0], [9.9, 277.0], [10.0, 278.0], [10.1, 278.0], [10.2, 279.0], [10.3, 279.0], [10.4, 280.0], [10.5, 281.0], [10.6, 282.0], [10.7, 283.0], [10.8, 283.0], [10.9, 285.0], [11.0, 285.0], [11.1, 286.0], [11.2, 287.0], [11.3, 288.0], [11.4, 288.0], [11.5, 289.0], [11.6, 290.0], [11.7, 290.0], [11.8, 291.0], [11.9, 292.0], [12.0, 294.0], [12.1, 296.0], [12.2, 297.0], [12.3, 298.0], [12.4, 299.0], [12.5, 300.0], [12.6, 301.0], [12.7, 302.0], [12.8, 304.0], [12.9, 304.0], [13.0, 306.0], [13.1, 307.0], [13.2, 308.0], [13.3, 309.0], [13.4, 311.0], [13.5, 312.0], [13.6, 313.0], [13.7, 315.0], [13.8, 316.0], [13.9, 317.0], [14.0, 318.0], [14.1, 319.0], [14.2, 319.0], [14.3, 321.0], [14.4, 324.0], [14.5, 325.0], [14.6, 326.0], [14.7, 327.0], [14.8, 328.0], [14.9, 330.0], [15.0, 332.0], [15.1, 336.0], [15.2, 336.0], [15.3, 338.0], [15.4, 339.0], [15.5, 340.0], [15.6, 343.0], [15.7, 345.0], [15.8, 347.0], [15.9, 350.0], [16.0, 350.0], [16.1, 352.0], [16.2, 352.0], [16.3, 354.0], [16.4, 357.0], [16.5, 358.0], [16.6, 360.0], [16.7, 363.0], [16.8, 365.0], [16.9, 366.0], [17.0, 369.0], [17.1, 370.0], [17.2, 372.0], [17.3, 374.0], [17.4, 375.0], [17.5, 376.0], [17.6, 377.0], [17.7, 377.0], [17.8, 379.0], [17.9, 380.0], [18.0, 380.0], [18.1, 381.0], [18.2, 382.0], [18.3, 382.0], [18.4, 383.0], [18.5, 385.0], [18.6, 385.0], [18.7, 387.0], [18.8, 387.0], [18.9, 387.0], [19.0, 388.0], [19.1, 389.0], [19.2, 389.0], [19.3, 390.0], [19.4, 391.0], [19.5, 391.0], [19.6, 391.0], [19.7, 392.0], [19.8, 392.0], [19.9, 393.0], [20.0, 394.0], [20.1, 394.0], [20.2, 395.0], [20.3, 395.0], [20.4, 396.0], [20.5, 397.0], [20.6, 398.0], [20.7, 399.0], [20.8, 399.0], [20.9, 400.0], [21.0, 401.0], [21.1, 401.0], [21.2, 402.0], [21.3, 403.0], [21.4, 404.0], [21.5, 405.0], [21.6, 406.0], [21.7, 407.0], [21.8, 408.0], [21.9, 408.0], [22.0, 409.0], [22.1, 410.0], [22.2, 411.0], [22.3, 412.0], [22.4, 414.0], [22.5, 415.0], [22.6, 416.0], [22.7, 418.0], [22.8, 418.0], [22.9, 419.0], [23.0, 419.0], [23.1, 420.0], [23.2, 421.0], [23.3, 422.0], [23.4, 423.0], [23.5, 424.0], [23.6, 424.0], [23.7, 425.0], [23.8, 425.0], [23.9, 426.0], [24.0, 426.0], [24.1, 427.0], [24.2, 427.0], [24.3, 428.0], [24.4, 428.0], [24.5, 429.0], [24.6, 430.0], [24.7, 431.0], [24.8, 432.0], [24.9, 433.0], [25.0, 434.0], [25.1, 435.0], [25.2, 436.0], [25.3, 437.0], [25.4, 437.0], [25.5, 438.0], [25.6, 439.0], [25.7, 440.0], [25.8, 441.0], [25.9, 442.0], [26.0, 442.0], [26.1, 443.0], [26.2, 443.0], [26.3, 443.0], [26.4, 444.0], [26.5, 445.0], [26.6, 446.0], [26.7, 447.0], [26.8, 447.0], [26.9, 449.0], [27.0, 449.0], [27.1, 450.0], [27.2, 451.0], [27.3, 452.0], [27.4, 453.0], [27.5, 453.0], [27.6, 454.0], [27.7, 455.0], [27.8, 455.0], [27.9, 457.0], [28.0, 457.0], [28.1, 459.0], [28.2, 460.0], [28.3, 461.0], [28.4, 462.0], [28.5, 464.0], [28.6, 465.0], [28.7, 465.0], [28.8, 465.0], [28.9, 466.0], [29.0, 468.0], [29.1, 468.0], [29.2, 469.0], [29.3, 470.0], [29.4, 470.0], [29.5, 472.0], [29.6, 473.0], [29.7, 473.0], [29.8, 474.0], [29.9, 475.0], [30.0, 475.0], [30.1, 477.0], [30.2, 479.0], [30.3, 480.0], [30.4, 481.0], [30.5, 482.0], [30.6, 483.0], [30.7, 484.0], [30.8, 485.0], [30.9, 487.0], [31.0, 487.0], [31.1, 488.0], [31.2, 489.0], [31.3, 490.0], [31.4, 491.0], [31.5, 493.0], [31.6, 495.0], [31.7, 497.0], [31.8, 499.0], [31.9, 499.0], [32.0, 500.0], [32.1, 501.0], [32.2, 501.0], [32.3, 502.0], [32.4, 504.0], [32.5, 506.0], [32.6, 507.0], [32.7, 508.0], [32.8, 509.0], [32.9, 510.0], [33.0, 511.0], [33.1, 512.0], [33.2, 513.0], [33.3, 514.0], [33.4, 516.0], [33.5, 517.0], [33.6, 517.0], [33.7, 518.0], [33.8, 519.0], [33.9, 520.0], [34.0, 521.0], [34.1, 522.0], [34.2, 523.0], [34.3, 524.0], [34.4, 525.0], [34.5, 526.0], [34.6, 527.0], [34.7, 528.0], [34.8, 529.0], [34.9, 530.0], [35.0, 531.0], [35.1, 533.0], [35.2, 533.0], [35.3, 534.0], [35.4, 535.0], [35.5, 536.0], [35.6, 536.0], [35.7, 537.0], [35.8, 538.0], [35.9, 538.0], [36.0, 540.0], [36.1, 541.0], [36.2, 541.0], [36.3, 542.0], [36.4, 543.0], [36.5, 544.0], [36.6, 544.0], [36.7, 546.0], [36.8, 547.0], [36.9, 548.0], [37.0, 549.0], [37.1, 549.0], [37.2, 550.0], [37.3, 550.0], [37.4, 551.0], [37.5, 552.0], [37.6, 553.0], [37.7, 554.0], [37.8, 554.0], [37.9, 556.0], [38.0, 557.0], [38.1, 558.0], [38.2, 558.0], [38.3, 559.0], [38.4, 561.0], [38.5, 562.0], [38.6, 563.0], [38.7, 564.0], [38.8, 565.0], [38.9, 566.0], [39.0, 567.0], [39.1, 568.0], [39.2, 568.0], [39.3, 569.0], [39.4, 570.0], [39.5, 571.0], [39.6, 572.0], [39.7, 572.0], [39.8, 573.0], [39.9, 574.0], [40.0, 575.0], [40.1, 577.0], [40.2, 578.0], [40.3, 579.0], [40.4, 580.0], [40.5, 581.0], [40.6, 582.0], [40.7, 583.0], [40.8, 584.0], [40.9, 585.0], [41.0, 585.0], [41.1, 587.0], [41.2, 588.0], [41.3, 589.0], [41.4, 591.0], [41.5, 592.0], [41.6, 593.0], [41.7, 595.0], [41.8, 596.0], [41.9, 597.0], [42.0, 597.0], [42.1, 598.0], [42.2, 600.0], [42.3, 601.0], [42.4, 602.0], [42.5, 602.0], [42.6, 603.0], [42.7, 605.0], [42.8, 606.0], [42.9, 607.0], [43.0, 608.0], [43.1, 609.0], [43.2, 611.0], [43.3, 613.0], [43.4, 614.0], [43.5, 615.0], [43.6, 617.0], [43.7, 618.0], [43.8, 619.0], [43.9, 620.0], [44.0, 621.0], [44.1, 622.0], [44.2, 625.0], [44.3, 626.0], [44.4, 628.0], [44.5, 629.0], [44.6, 631.0], [44.7, 631.0], [44.8, 633.0], [44.9, 634.0], [45.0, 636.0], [45.1, 637.0], [45.2, 638.0], [45.3, 641.0], [45.4, 642.0], [45.5, 644.0], [45.6, 645.0], [45.7, 646.0], [45.8, 646.0], [45.9, 649.0], [46.0, 651.0], [46.1, 652.0], [46.2, 653.0], [46.3, 654.0], [46.4, 656.0], [46.5, 657.0], [46.6, 658.0], [46.7, 661.0], [46.8, 662.0], [46.9, 663.0], [47.0, 666.0], [47.1, 668.0], [47.2, 669.0], [47.3, 670.0], [47.4, 672.0], [47.5, 674.0], [47.6, 675.0], [47.7, 677.0], [47.8, 678.0], [47.9, 680.0], [48.0, 682.0], [48.1, 685.0], [48.2, 686.0], [48.3, 686.0], [48.4, 687.0], [48.5, 689.0], [48.6, 690.0], [48.7, 692.0], [48.8, 693.0], [48.9, 695.0], [49.0, 696.0], [49.1, 698.0], [49.2, 700.0], [49.3, 701.0], [49.4, 703.0], [49.5, 704.0], [49.6, 705.0], [49.7, 705.0], [49.8, 707.0], [49.9, 708.0], [50.0, 710.0], [50.1, 712.0], [50.2, 713.0], [50.3, 714.0], [50.4, 716.0], [50.5, 717.0], [50.6, 720.0], [50.7, 722.0], [50.8, 723.0], [50.9, 724.0], [51.0, 724.0], [51.1, 725.0], [51.2, 728.0], [51.3, 729.0], [51.4, 731.0], [51.5, 732.0], [51.6, 734.0], [51.7, 735.0], [51.8, 736.0], [51.9, 738.0], [52.0, 739.0], [52.1, 739.0], [52.2, 740.0], [52.3, 742.0], [52.4, 743.0], [52.5, 744.0], [52.6, 747.0], [52.7, 749.0], [52.8, 750.0], [52.9, 751.0], [53.0, 754.0], [53.1, 756.0], [53.2, 758.0], [53.3, 759.0], [53.4, 761.0], [53.5, 762.0], [53.6, 764.0], [53.7, 766.0], [53.8, 767.0], [53.9, 770.0], [54.0, 771.0], [54.1, 772.0], [54.2, 773.0], [54.3, 775.0], [54.4, 776.0], [54.5, 777.0], [54.6, 779.0], [54.7, 781.0], [54.8, 782.0], [54.9, 783.0], [55.0, 784.0], [55.1, 785.0], [55.2, 787.0], [55.3, 789.0], [55.4, 790.0], [55.5, 794.0], [55.6, 797.0], [55.7, 798.0], [55.8, 801.0], [55.9, 802.0], [56.0, 804.0], [56.1, 806.0], [56.2, 807.0], [56.3, 808.0], [56.4, 810.0], [56.5, 811.0], [56.6, 813.0], [56.7, 814.0], [56.8, 815.0], [56.9, 818.0], [57.0, 819.0], [57.1, 820.0], [57.2, 823.0], [57.3, 824.0], [57.4, 827.0], [57.5, 828.0], [57.6, 829.0], [57.7, 830.0], [57.8, 831.0], [57.9, 833.0], [58.0, 835.0], [58.1, 837.0], [58.2, 838.0], [58.3, 840.0], [58.4, 841.0], [58.5, 843.0], [58.6, 846.0], [58.7, 848.0], [58.8, 849.0], [58.9, 850.0], [59.0, 853.0], [59.1, 855.0], [59.2, 856.0], [59.3, 856.0], [59.4, 858.0], [59.5, 860.0], [59.6, 861.0], [59.7, 864.0], [59.8, 868.0], [59.9, 870.0], [60.0, 871.0], [60.1, 872.0], [60.2, 873.0], [60.3, 875.0], [60.4, 876.0], [60.5, 877.0], [60.6, 879.0], [60.7, 880.0], [60.8, 881.0], [60.9, 883.0], [61.0, 884.0], [61.1, 886.0], [61.2, 887.0], [61.3, 888.0], [61.4, 889.0], [61.5, 891.0], [61.6, 893.0], [61.7, 894.0], [61.8, 897.0], [61.9, 898.0], [62.0, 902.0], [62.1, 902.0], [62.2, 903.0], [62.3, 906.0], [62.4, 907.0], [62.5, 910.0], [62.6, 911.0], [62.7, 913.0], [62.8, 915.0], [62.9, 916.0], [63.0, 919.0], [63.1, 921.0], [63.2, 923.0], [63.3, 924.0], [63.4, 926.0], [63.5, 928.0], [63.6, 930.0], [63.7, 932.0], [63.8, 933.0], [63.9, 935.0], [64.0, 936.0], [64.1, 937.0], [64.2, 938.0], [64.3, 939.0], [64.4, 942.0], [64.5, 943.0], [64.6, 946.0], [64.7, 947.0], [64.8, 949.0], [64.9, 950.0], [65.0, 951.0], [65.1, 953.0], [65.2, 955.0], [65.3, 959.0], [65.4, 960.0], [65.5, 963.0], [65.6, 964.0], [65.7, 965.0], [65.8, 968.0], [65.9, 969.0], [66.0, 972.0], [66.1, 973.0], [66.2, 973.0], [66.3, 975.0], [66.4, 977.0], [66.5, 979.0], [66.6, 980.0], [66.7, 982.0], [66.8, 983.0], [66.9, 985.0], [67.0, 986.0], [67.1, 988.0], [67.2, 990.0], [67.3, 991.0], [67.4, 993.0], [67.5, 996.0], [67.6, 996.0], [67.7, 997.0], [67.8, 999.0], [67.9, 1001.0], [68.0, 1004.0], [68.1, 1005.0], [68.2, 1007.0], [68.3, 1010.0], [68.4, 1012.0], [68.5, 1013.0], [68.6, 1017.0], [68.7, 1019.0], [68.8, 1021.0], [68.9, 1023.0], [69.0, 1026.0], [69.1, 1027.0], [69.2, 1029.0], [69.3, 1031.0], [69.4, 1032.0], [69.5, 1034.0], [69.6, 1036.0], [69.7, 1039.0], [69.8, 1039.0], [69.9, 1041.0], [70.0, 1041.0], [70.1, 1043.0], [70.2, 1044.0], [70.3, 1046.0], [70.4, 1048.0], [70.5, 1050.0], [70.6, 1052.0], [70.7, 1053.0], [70.8, 1055.0], [70.9, 1057.0], [71.0, 1060.0], [71.1, 1061.0], [71.2, 1062.0], [71.3, 1063.0], [71.4, 1065.0], [71.5, 1066.0], [71.6, 1068.0], [71.7, 1069.0], [71.8, 1072.0], [71.9, 1075.0], [72.0, 1077.0], [72.1, 1079.0], [72.2, 1081.0], [72.3, 1082.0], [72.4, 1084.0], [72.5, 1084.0], [72.6, 1087.0], [72.7, 1089.0], [72.8, 1092.0], [72.9, 1093.0], [73.0, 1097.0], [73.1, 1099.0], [73.2, 1102.0], [73.3, 1103.0], [73.4, 1106.0], [73.5, 1109.0], [73.6, 1112.0], [73.7, 1115.0], [73.8, 1115.0], [73.9, 1117.0], [74.0, 1119.0], [74.1, 1120.0], [74.2, 1122.0], [74.3, 1126.0], [74.4, 1128.0], [74.5, 1130.0], [74.6, 1131.0], [74.7, 1133.0], [74.8, 1136.0], [74.9, 1137.0], [75.0, 1138.0], [75.1, 1140.0], [75.2, 1142.0], [75.3, 1144.0], [75.4, 1146.0], [75.5, 1151.0], [75.6, 1152.0], [75.7, 1157.0], [75.8, 1158.0], [75.9, 1161.0], [76.0, 1162.0], [76.1, 1163.0], [76.2, 1165.0], [76.3, 1168.0], [76.4, 1172.0], [76.5, 1175.0], [76.6, 1177.0], [76.7, 1178.0], [76.8, 1180.0], [76.9, 1183.0], [77.0, 1186.0], [77.1, 1189.0], [77.2, 1192.0], [77.3, 1195.0], [77.4, 1197.0], [77.5, 1199.0], [77.6, 1202.0], [77.7, 1205.0], [77.8, 1206.0], [77.9, 1207.0], [78.0, 1210.0], [78.1, 1212.0], [78.2, 1216.0], [78.3, 1219.0], [78.4, 1222.0], [78.5, 1225.0], [78.6, 1228.0], [78.7, 1230.0], [78.8, 1231.0], [78.9, 1234.0], [79.0, 1237.0], [79.1, 1239.0], [79.2, 1242.0], [79.3, 1247.0], [79.4, 1250.0], [79.5, 1251.0], [79.6, 1253.0], [79.7, 1257.0], [79.8, 1259.0], [79.9, 1260.0], [80.0, 1263.0], [80.1, 1267.0], [80.2, 1268.0], [80.3, 1270.0], [80.4, 1272.0], [80.5, 1274.0], [80.6, 1278.0], [80.7, 1281.0], [80.8, 1284.0], [80.9, 1285.0], [81.0, 1287.0], [81.1, 1288.0], [81.2, 1291.0], [81.3, 1293.0], [81.4, 1295.0], [81.5, 1296.0], [81.6, 1298.0], [81.7, 1301.0], [81.8, 1303.0], [81.9, 1305.0], [82.0, 1306.0], [82.1, 1310.0], [82.2, 1313.0], [82.3, 1317.0], [82.4, 1319.0], [82.5, 1322.0], [82.6, 1324.0], [82.7, 1325.0], [82.8, 1327.0], [82.9, 1329.0], [83.0, 1332.0], [83.1, 1332.0], [83.2, 1333.0], [83.3, 1336.0], [83.4, 1337.0], [83.5, 1339.0], [83.6, 1343.0], [83.7, 1345.0], [83.8, 1346.0], [83.9, 1348.0], [84.0, 1350.0], [84.1, 1354.0], [84.2, 1356.0], [84.3, 1360.0], [84.4, 1362.0], [84.5, 1363.0], [84.6, 1364.0], [84.7, 1368.0], [84.8, 1370.0], [84.9, 1372.0], [85.0, 1376.0], [85.1, 1378.0], [85.2, 1380.0], [85.3, 1382.0], [85.4, 1383.0], [85.5, 1384.0], [85.6, 1389.0], [85.7, 1390.0], [85.8, 1396.0], [85.9, 1399.0], [86.0, 1399.0], [86.1, 1402.0], [86.2, 1403.0], [86.3, 1406.0], [86.4, 1410.0], [86.5, 1412.0], [86.6, 1413.0], [86.7, 1416.0], [86.8, 1417.0], [86.9, 1418.0], [87.0, 1420.0], [87.1, 1422.0], [87.2, 1424.0], [87.3, 1427.0], [87.4, 1429.0], [87.5, 1430.0], [87.6, 1433.0], [87.7, 1435.0], [87.8, 1439.0], [87.9, 1441.0], [88.0, 1443.0], [88.1, 1448.0], [88.2, 1449.0], [88.3, 1455.0], [88.4, 1458.0], [88.5, 1460.0], [88.6, 1463.0], [88.7, 1468.0], [88.8, 1480.0], [88.9, 1480.0], [89.0, 1486.0], [89.1, 1490.0], [89.2, 1495.0], [89.3, 1500.0], [89.4, 1510.0], [89.5, 1514.0], [89.6, 1522.0], [89.7, 1529.0], [89.8, 1531.0], [89.9, 1534.0], [90.0, 1539.0], [90.1, 1542.0], [90.2, 1549.0], [90.3, 1551.0], [90.4, 1556.0], [90.5, 1561.0], [90.6, 1568.0], [90.7, 1573.0], [90.8, 1581.0], [90.9, 1586.0], [91.0, 1600.0], [91.1, 1604.0], [91.2, 1608.0], [91.3, 1618.0], [91.4, 1624.0], [91.5, 1640.0], [91.6, 1644.0], [91.7, 1652.0], [91.8, 1658.0], [91.9, 1664.0], [92.0, 1667.0], [92.1, 1680.0], [92.2, 1689.0], [92.3, 1699.0], [92.4, 1704.0], [92.5, 1710.0], [92.6, 1714.0], [92.7, 1721.0], [92.8, 1728.0], [92.9, 1742.0], [93.0, 1751.0], [93.1, 1762.0], [93.2, 1765.0], [93.3, 1768.0], [93.4, 1777.0], [93.5, 1787.0], [93.6, 1796.0], [93.7, 1803.0], [93.8, 1810.0], [93.9, 1822.0], [94.0, 1826.0], [94.1, 1833.0], [94.2, 1843.0], [94.3, 1852.0], [94.4, 1864.0], [94.5, 1875.0], [94.6, 1885.0], [94.7, 1891.0], [94.8, 1904.0], [94.9, 1916.0], [95.0, 1925.0], [95.1, 1937.0], [95.2, 1950.0], [95.3, 1958.0], [95.4, 1967.0], [95.5, 1985.0], [95.6, 1993.0], [95.7, 2009.0], [95.8, 2028.0], [95.9, 2037.0], [96.0, 2053.0], [96.1, 2072.0], [96.2, 2083.0], [96.3, 2091.0], [96.4, 2110.0], [96.5, 2124.0], [96.6, 2137.0], [96.7, 2150.0], [96.8, 2162.0], [96.9, 2179.0], [97.0, 2188.0], [97.1, 2229.0], [97.2, 2238.0], [97.3, 2243.0], [97.4, 2259.0], [97.5, 2274.0], [97.6, 2283.0], [97.7, 2307.0], [97.8, 2319.0], [97.9, 2345.0], [98.0, 2367.0], [98.1, 2388.0], [98.2, 2439.0], [98.3, 2459.0], [98.4, 2487.0], [98.5, 2510.0], [98.6, 2542.0], [98.7, 2596.0], [98.8, 2676.0], [98.9, 2769.0], [99.0, 2833.0], [99.1, 3015.0], [99.2, 3132.0], [99.3, 3278.0], [99.4, 3488.0], [99.5, 3734.0], [99.6, 3871.0], [99.7, 4247.0], [99.8, 4528.0], [99.9, 4989.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 575.0, "series": [{"data": [[600.0, 363.0], [700.0, 340.0], [800.0, 321.0], [900.0, 307.0], [1000.0, 275.0], [1100.0, 228.0], [1200.0, 213.0], [1300.0, 229.0], [1400.0, 168.0], [1500.0, 88.0], [1600.0, 71.0], [1700.0, 67.0], [1800.0, 58.0], [1900.0, 46.0], [2000.0, 36.0], [2100.0, 37.0], [2300.0, 25.0], [2200.0, 33.0], [2400.0, 16.0], [2500.0, 12.0], [2600.0, 5.0], [2700.0, 6.0], [2800.0, 7.0], [2900.0, 2.0], [3000.0, 3.0], [3100.0, 5.0], [3200.0, 4.0], [3300.0, 2.0], [3400.0, 2.0], [3500.0, 2.0], [3700.0, 3.0], [3600.0, 3.0], [3800.0, 3.0], [3900.0, 2.0], [4200.0, 2.0], [4300.0, 2.0], [4100.0, 1.0], [4500.0, 4.0], [4400.0, 1.0], [4800.0, 1.0], [4900.0, 2.0], [5100.0, 2.0], [5000.0, 1.0], [5400.0, 1.0], [8500.0, 1.0], [100.0, 72.0], [200.0, 575.0], [300.0, 434.0], [400.0, 575.0], [500.0, 534.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 555.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2971.0, "series": [{"data": [[0.0, 1664.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2971.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 555.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.60262928E12, "maxY": 10.0, "series": [{"data": [[1.60262964E12, 10.0], [1.60262934E12, 10.0], [1.60262928E12, 10.0], [1.60262976E12, 2.5], [1.60262946E12, 10.0], [1.6026294E12, 10.0], [1.60262958E12, 10.0], [1.60262952E12, 10.0], [1.6026297E12, 9.97872340425532]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262976E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 331.0, "minX": 1.0, "maxY": 3027.0, "series": [{"data": [[8.0, 1194.0], [4.0, 806.0], [2.0, 2058.0], [1.0, 3027.0], [9.0, 331.0], [10.0, 856.5450685195918], [5.0, 1151.0], [6.0, 1994.0], [3.0, 1017.0], [7.0, 837.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 857.4518304431609]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 31.116666666666667, "minX": 1.60262928E12, "maxY": 3789739.0, "series": [{"data": [[1.60262964E12, 3665592.9166666665], [1.60262934E12, 2641843.1], [1.60262928E12, 1451320.1333333333], [1.60262976E12, 41721.53333333333], [1.60262946E12, 3414566.7], [1.6026294E12, 3789739.0], [1.60262958E12, 2733041.25], [1.60262952E12, 3163061.95], [1.6026297E12, 3071005.3666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60262964E12, 5543.95], [1.60262934E12, 5457.666666666667], [1.60262928E12, 1659.9], [1.60262976E12, 31.116666666666667], [1.60262946E12, 5473.333333333333], [1.6026294E12, 5321.95], [1.60262958E12, 5335.883333333333], [1.60262952E12, 4418.55], [1.6026297E12, 5334.983333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262976E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 799.5925432756328, "minX": 1.60262928E12, "maxY": 1727.0, "series": [{"data": [[1.60262964E12, 822.4459644322847], [1.60262934E12, 799.5925432756328], [1.60262928E12, 1099.833333333334], [1.60262976E12, 1727.0], [1.60262946E12, 819.5013850415519], [1.6026294E12, 838.3342736248235], [1.60262958E12, 820.7049180327862], [1.60262952E12, 992.0493421052637], [1.6026297E12, 852.2297872340422]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262976E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 798.0679094540612, "minX": 1.60262928E12, "maxY": 1724.25, "series": [{"data": [[1.60262964E12, 820.6552667578655], [1.60262934E12, 798.0679094540612], [1.60262928E12, 1097.188596491227], [1.60262976E12, 1724.25], [1.60262946E12, 817.5650969529089], [1.6026294E12, 835.9619181946399], [1.60262958E12, 819.3251366120223], [1.60262952E12, 990.1809210526305], [1.6026297E12, 850.6141843971627]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262976E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60262928E12, "maxY": 0.42105263157894796, "series": [{"data": [[1.60262964E12, 0.016415868673050622], [1.60262934E12, 0.013315579227696404], [1.60262928E12, 0.42105263157894796], [1.60262976E12, 0.0], [1.60262946E12, 0.012465373961218837], [1.6026294E12, 0.014104372355430179], [1.60262958E12, 0.012295081967213116], [1.60262952E12, 0.01644736842105263], [1.6026297E12, 0.017021276595744688]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262976E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.60262928E12, "maxY": 8580.0, "series": [{"data": [[1.60262964E12, 2522.0], [1.60262934E12, 4500.0], [1.60262928E12, 4981.0], [1.60262976E12, 3027.0], [1.60262946E12, 4800.0], [1.6026294E12, 3796.0], [1.60262958E12, 5043.0], [1.60262952E12, 8580.0], [1.6026297E12, 3675.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60262964E12, 197.0], [1.60262934E12, 196.0], [1.60262928E12, 205.85399923563003], [1.60262976E12, 806.0], [1.60262946E12, 191.0], [1.6026294E12, 196.77999966144563], [1.60262958E12, 196.59699982523918], [1.60262952E12, 189.0], [1.6026297E12, 187.41599932670593]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60262964E12, 197.24680006980896], [1.60262934E12, 196.44480007171632], [1.60262928E12, 208.73940030574798], [1.60262976E12, 806.0], [1.60262946E12, 191.0], [1.6026294E12, 198.0], [1.60262958E12, 197.0], [1.60262952E12, 189.14550029039384], [1.6026297E12, 189.95760026931762]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60262964E12, 197.0], [1.60262934E12, 196.1439999103546], [1.60262928E12, 207.456999617815], [1.60262976E12, 806.0], [1.60262946E12, 191.0], [1.6026294E12, 197.4899998307228], [1.60262958E12, 196.9634999126196], [1.60262952E12, 189.0], [1.6026297E12, 188.82799966335295]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60262964E12, 182.0], [1.60262934E12, 186.0], [1.60262928E12, 201.0], [1.60262976E12, 806.0], [1.60262946E12, 183.0], [1.6026294E12, 181.0], [1.60262958E12, 190.0], [1.60262952E12, 184.0], [1.6026297E12, 179.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60262964E12, 606.0], [1.60262934E12, 695.0], [1.60262928E12, 877.0], [1.60262976E12, 1537.5], [1.60262946E12, 707.5], [1.6026294E12, 628.0], [1.60262958E12, 692.0], [1.60262952E12, 860.5], [1.6026297E12, 743.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262976E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 391.0, "minX": 1.0, "maxY": 3027.0, "series": [{"data": [[2.0, 2356.0], [3.0, 1681.5], [4.0, 1104.0], [5.0, 1159.0], [6.0, 1148.5], [7.0, 1031.0], [8.0, 1058.5], [9.0, 989.5], [10.0, 912.5], [11.0, 839.0], [12.0, 777.0], [13.0, 754.0], [14.0, 659.0], [15.0, 597.0], [16.0, 560.5], [1.0, 3027.0], [17.0, 540.5], [18.0, 490.0], [19.0, 429.0], [20.0, 435.0], [21.0, 407.0], [22.0, 424.5], [23.0, 434.0], [24.0, 392.5], [25.0, 396.5], [26.0, 410.0], [27.0, 399.0], [28.0, 411.0], [29.0, 391.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 391.0, "minX": 1.0, "maxY": 3017.0, "series": [{"data": [[2.0, 2353.5], [3.0, 1678.0], [4.0, 1102.0], [5.0, 1154.0], [6.0, 1141.0], [7.0, 1029.0], [8.0, 1046.0], [9.0, 987.5], [10.0, 912.0], [11.0, 837.0], [12.0, 776.0], [13.0, 752.5], [14.0, 658.0], [15.0, 597.0], [16.0, 560.5], [1.0, 3017.0], [17.0, 540.0], [18.0, 490.0], [19.0, 429.0], [20.0, 435.0], [21.0, 407.0], [22.0, 424.0], [23.0, 434.0], [24.0, 392.0], [25.0, 396.5], [26.0, 410.0], [27.0, 399.0], [28.0, 410.5], [29.0, 391.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.966666666666667, "minX": 1.60262928E12, "maxY": 12.516666666666667, "series": [{"data": [[1.60262964E12, 12.183333333333334], [1.60262934E12, 12.516666666666667], [1.60262928E12, 3.966666666666667], [1.60262946E12, 12.033333333333333], [1.6026294E12, 11.816666666666666], [1.60262958E12, 12.2], [1.60262952E12, 10.133333333333333], [1.6026297E12, 11.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026297E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60262928E12, "maxY": 12.516666666666667, "series": [{"data": [[1.60262964E12, 12.183333333333334], [1.60262934E12, 12.516666666666667], [1.60262928E12, 3.8], [1.60262976E12, 0.06666666666666667], [1.60262946E12, 12.033333333333333], [1.6026294E12, 11.816666666666666], [1.60262958E12, 12.2], [1.60262952E12, 10.133333333333333], [1.6026297E12, 11.75]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262976E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60262928E12, "maxY": 12.516666666666667, "series": [{"data": [[1.60262964E12, 12.183333333333334], [1.60262934E12, 12.516666666666667], [1.60262928E12, 3.8], [1.60262976E12, 0.06666666666666667], [1.60262946E12, 12.033333333333333], [1.6026294E12, 11.816666666666666], [1.60262958E12, 12.2], [1.60262952E12, 10.133333333333333], [1.6026297E12, 11.75]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262976E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60262928E12, "maxY": 12.516666666666667, "series": [{"data": [[1.60262964E12, 12.183333333333334], [1.60262934E12, 12.516666666666667], [1.60262928E12, 3.8], [1.60262976E12, 0.06666666666666667], [1.60262946E12, 12.033333333333333], [1.6026294E12, 11.816666666666666], [1.60262958E12, 12.2], [1.60262952E12, 10.133333333333333], [1.6026297E12, 11.75]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262976E12, "title": "Total Transactions Per Second"}},
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

