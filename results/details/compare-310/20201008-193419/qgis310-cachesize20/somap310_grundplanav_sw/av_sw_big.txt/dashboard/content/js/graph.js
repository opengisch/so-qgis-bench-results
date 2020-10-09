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
        data: {"result": {"minY": 177.0, "minX": 0.0, "maxY": 5819.0, "series": [{"data": [[0.0, 177.0], [0.1, 184.0], [0.2, 186.0], [0.3, 187.0], [0.4, 188.0], [0.5, 188.0], [0.6, 189.0], [0.7, 190.0], [0.8, 191.0], [0.9, 192.0], [1.0, 192.0], [1.1, 193.0], [1.2, 194.0], [1.3, 194.0], [1.4, 195.0], [1.5, 195.0], [1.6, 196.0], [1.7, 197.0], [1.8, 198.0], [1.9, 198.0], [2.0, 199.0], [2.1, 199.0], [2.2, 200.0], [2.3, 200.0], [2.4, 201.0], [2.5, 201.0], [2.6, 202.0], [2.7, 202.0], [2.8, 203.0], [2.9, 203.0], [3.0, 204.0], [3.1, 204.0], [3.2, 205.0], [3.3, 206.0], [3.4, 206.0], [3.5, 207.0], [3.6, 207.0], [3.7, 208.0], [3.8, 208.0], [3.9, 209.0], [4.0, 210.0], [4.1, 211.0], [4.2, 212.0], [4.3, 213.0], [4.4, 214.0], [4.5, 215.0], [4.6, 215.0], [4.7, 217.0], [4.8, 218.0], [4.9, 218.0], [5.0, 219.0], [5.1, 220.0], [5.2, 221.0], [5.3, 222.0], [5.4, 223.0], [5.5, 223.0], [5.6, 224.0], [5.7, 225.0], [5.8, 226.0], [5.9, 227.0], [6.0, 229.0], [6.1, 230.0], [6.2, 231.0], [6.3, 232.0], [6.4, 233.0], [6.5, 233.0], [6.6, 234.0], [6.7, 235.0], [6.8, 235.0], [6.9, 236.0], [7.0, 237.0], [7.1, 237.0], [7.2, 238.0], [7.3, 239.0], [7.4, 240.0], [7.5, 243.0], [7.6, 243.0], [7.7, 246.0], [7.8, 246.0], [7.9, 249.0], [8.0, 251.0], [8.1, 252.0], [8.2, 253.0], [8.3, 255.0], [8.4, 256.0], [8.5, 257.0], [8.6, 258.0], [8.7, 260.0], [8.8, 261.0], [8.9, 262.0], [9.0, 264.0], [9.1, 266.0], [9.2, 267.0], [9.3, 268.0], [9.4, 269.0], [9.5, 270.0], [9.6, 271.0], [9.7, 271.0], [9.8, 272.0], [9.9, 272.0], [10.0, 273.0], [10.1, 273.0], [10.2, 274.0], [10.3, 275.0], [10.4, 275.0], [10.5, 276.0], [10.6, 276.0], [10.7, 277.0], [10.8, 277.0], [10.9, 278.0], [11.0, 279.0], [11.1, 280.0], [11.2, 280.0], [11.3, 281.0], [11.4, 281.0], [11.5, 282.0], [11.6, 282.0], [11.7, 283.0], [11.8, 284.0], [11.9, 285.0], [12.0, 286.0], [12.1, 286.0], [12.2, 287.0], [12.3, 288.0], [12.4, 289.0], [12.5, 289.0], [12.6, 290.0], [12.7, 290.0], [12.8, 291.0], [12.9, 293.0], [13.0, 293.0], [13.1, 294.0], [13.2, 295.0], [13.3, 297.0], [13.4, 298.0], [13.5, 299.0], [13.6, 300.0], [13.7, 300.0], [13.8, 301.0], [13.9, 302.0], [14.0, 303.0], [14.1, 305.0], [14.2, 306.0], [14.3, 307.0], [14.4, 307.0], [14.5, 309.0], [14.6, 309.0], [14.7, 310.0], [14.8, 312.0], [14.9, 312.0], [15.0, 313.0], [15.1, 313.0], [15.2, 315.0], [15.3, 315.0], [15.4, 316.0], [15.5, 317.0], [15.6, 318.0], [15.7, 319.0], [15.8, 321.0], [15.9, 322.0], [16.0, 325.0], [16.1, 326.0], [16.2, 327.0], [16.3, 328.0], [16.4, 329.0], [16.5, 332.0], [16.6, 333.0], [16.7, 334.0], [16.8, 336.0], [16.9, 338.0], [17.0, 340.0], [17.1, 342.0], [17.2, 344.0], [17.3, 346.0], [17.4, 348.0], [17.5, 350.0], [17.6, 352.0], [17.7, 354.0], [17.8, 356.0], [17.9, 360.0], [18.0, 361.0], [18.1, 362.0], [18.2, 364.0], [18.3, 366.0], [18.4, 368.0], [18.5, 370.0], [18.6, 372.0], [18.7, 373.0], [18.8, 374.0], [18.9, 375.0], [19.0, 377.0], [19.1, 378.0], [19.2, 380.0], [19.3, 382.0], [19.4, 385.0], [19.5, 386.0], [19.6, 387.0], [19.7, 388.0], [19.8, 389.0], [19.9, 390.0], [20.0, 391.0], [20.1, 392.0], [20.2, 394.0], [20.3, 395.0], [20.4, 396.0], [20.5, 396.0], [20.6, 397.0], [20.7, 398.0], [20.8, 398.0], [20.9, 399.0], [21.0, 400.0], [21.1, 402.0], [21.2, 403.0], [21.3, 404.0], [21.4, 405.0], [21.5, 405.0], [21.6, 407.0], [21.7, 408.0], [21.8, 409.0], [21.9, 410.0], [22.0, 412.0], [22.1, 413.0], [22.2, 415.0], [22.3, 416.0], [22.4, 416.0], [22.5, 417.0], [22.6, 418.0], [22.7, 418.0], [22.8, 420.0], [22.9, 421.0], [23.0, 422.0], [23.1, 424.0], [23.2, 425.0], [23.3, 426.0], [23.4, 427.0], [23.5, 427.0], [23.6, 430.0], [23.7, 430.0], [23.8, 431.0], [23.9, 432.0], [24.0, 432.0], [24.1, 434.0], [24.2, 435.0], [24.3, 435.0], [24.4, 436.0], [24.5, 437.0], [24.6, 438.0], [24.7, 440.0], [24.8, 440.0], [24.9, 441.0], [25.0, 442.0], [25.1, 442.0], [25.2, 443.0], [25.3, 444.0], [25.4, 445.0], [25.5, 445.0], [25.6, 446.0], [25.7, 447.0], [25.8, 447.0], [25.9, 448.0], [26.0, 448.0], [26.1, 449.0], [26.2, 450.0], [26.3, 451.0], [26.4, 452.0], [26.5, 452.0], [26.6, 453.0], [26.7, 454.0], [26.8, 455.0], [26.9, 455.0], [27.0, 456.0], [27.1, 457.0], [27.2, 458.0], [27.3, 458.0], [27.4, 459.0], [27.5, 459.0], [27.6, 460.0], [27.7, 461.0], [27.8, 462.0], [27.9, 463.0], [28.0, 463.0], [28.1, 463.0], [28.2, 464.0], [28.3, 465.0], [28.4, 465.0], [28.5, 467.0], [28.6, 467.0], [28.7, 467.0], [28.8, 468.0], [28.9, 469.0], [29.0, 469.0], [29.1, 470.0], [29.2, 470.0], [29.3, 471.0], [29.4, 472.0], [29.5, 472.0], [29.6, 473.0], [29.7, 474.0], [29.8, 474.0], [29.9, 476.0], [30.0, 477.0], [30.1, 478.0], [30.2, 479.0], [30.3, 481.0], [30.4, 482.0], [30.5, 482.0], [30.6, 483.0], [30.7, 485.0], [30.8, 485.0], [30.9, 486.0], [31.0, 487.0], [31.1, 488.0], [31.2, 489.0], [31.3, 489.0], [31.4, 490.0], [31.5, 492.0], [31.6, 493.0], [31.7, 494.0], [31.8, 495.0], [31.9, 496.0], [32.0, 498.0], [32.1, 500.0], [32.2, 501.0], [32.3, 503.0], [32.4, 503.0], [32.5, 504.0], [32.6, 506.0], [32.7, 507.0], [32.8, 508.0], [32.9, 509.0], [33.0, 511.0], [33.1, 512.0], [33.2, 513.0], [33.3, 514.0], [33.4, 515.0], [33.5, 516.0], [33.6, 517.0], [33.7, 518.0], [33.8, 518.0], [33.9, 519.0], [34.0, 521.0], [34.1, 523.0], [34.2, 523.0], [34.3, 524.0], [34.4, 526.0], [34.5, 527.0], [34.6, 527.0], [34.7, 529.0], [34.8, 531.0], [34.9, 532.0], [35.0, 533.0], [35.1, 534.0], [35.2, 535.0], [35.3, 536.0], [35.4, 537.0], [35.5, 538.0], [35.6, 539.0], [35.7, 541.0], [35.8, 541.0], [35.9, 543.0], [36.0, 543.0], [36.1, 544.0], [36.2, 545.0], [36.3, 546.0], [36.4, 547.0], [36.5, 548.0], [36.6, 549.0], [36.7, 549.0], [36.8, 551.0], [36.9, 552.0], [37.0, 553.0], [37.1, 554.0], [37.2, 554.0], [37.3, 555.0], [37.4, 556.0], [37.5, 557.0], [37.6, 558.0], [37.7, 559.0], [37.8, 560.0], [37.9, 561.0], [38.0, 561.0], [38.1, 562.0], [38.2, 563.0], [38.3, 564.0], [38.4, 565.0], [38.5, 566.0], [38.6, 566.0], [38.7, 567.0], [38.8, 568.0], [38.9, 569.0], [39.0, 570.0], [39.1, 570.0], [39.2, 572.0], [39.3, 573.0], [39.4, 574.0], [39.5, 574.0], [39.6, 576.0], [39.7, 577.0], [39.8, 578.0], [39.9, 579.0], [40.0, 580.0], [40.1, 580.0], [40.2, 582.0], [40.3, 582.0], [40.4, 584.0], [40.5, 584.0], [40.6, 585.0], [40.7, 586.0], [40.8, 587.0], [40.9, 587.0], [41.0, 588.0], [41.1, 589.0], [41.2, 591.0], [41.3, 591.0], [41.4, 592.0], [41.5, 593.0], [41.6, 594.0], [41.7, 594.0], [41.8, 595.0], [41.9, 597.0], [42.0, 598.0], [42.1, 599.0], [42.2, 599.0], [42.3, 601.0], [42.4, 601.0], [42.5, 602.0], [42.6, 603.0], [42.7, 604.0], [42.8, 604.0], [42.9, 605.0], [43.0, 606.0], [43.1, 607.0], [43.2, 608.0], [43.3, 609.0], [43.4, 610.0], [43.5, 611.0], [43.6, 612.0], [43.7, 613.0], [43.8, 614.0], [43.9, 615.0], [44.0, 617.0], [44.1, 617.0], [44.2, 619.0], [44.3, 620.0], [44.4, 622.0], [44.5, 624.0], [44.6, 625.0], [44.7, 626.0], [44.8, 629.0], [44.9, 629.0], [45.0, 631.0], [45.1, 633.0], [45.2, 634.0], [45.3, 634.0], [45.4, 636.0], [45.5, 638.0], [45.6, 640.0], [45.7, 641.0], [45.8, 643.0], [45.9, 643.0], [46.0, 645.0], [46.1, 646.0], [46.2, 647.0], [46.3, 648.0], [46.4, 649.0], [46.5, 650.0], [46.6, 651.0], [46.7, 653.0], [46.8, 654.0], [46.9, 656.0], [47.0, 658.0], [47.1, 659.0], [47.2, 660.0], [47.3, 661.0], [47.4, 663.0], [47.5, 666.0], [47.6, 668.0], [47.7, 670.0], [47.8, 671.0], [47.9, 672.0], [48.0, 673.0], [48.1, 674.0], [48.2, 675.0], [48.3, 676.0], [48.4, 678.0], [48.5, 680.0], [48.6, 682.0], [48.7, 684.0], [48.8, 685.0], [48.9, 687.0], [49.0, 688.0], [49.1, 689.0], [49.2, 690.0], [49.3, 691.0], [49.4, 694.0], [49.5, 696.0], [49.6, 697.0], [49.7, 698.0], [49.8, 700.0], [49.9, 702.0], [50.0, 702.0], [50.1, 703.0], [50.2, 706.0], [50.3, 708.0], [50.4, 709.0], [50.5, 710.0], [50.6, 710.0], [50.7, 713.0], [50.8, 714.0], [50.9, 715.0], [51.0, 716.0], [51.1, 718.0], [51.2, 720.0], [51.3, 722.0], [51.4, 723.0], [51.5, 725.0], [51.6, 726.0], [51.7, 727.0], [51.8, 728.0], [51.9, 730.0], [52.0, 732.0], [52.1, 733.0], [52.2, 737.0], [52.3, 739.0], [52.4, 741.0], [52.5, 743.0], [52.6, 744.0], [52.7, 745.0], [52.8, 748.0], [52.9, 751.0], [53.0, 752.0], [53.1, 754.0], [53.2, 756.0], [53.3, 757.0], [53.4, 759.0], [53.5, 762.0], [53.6, 765.0], [53.7, 766.0], [53.8, 766.0], [53.9, 768.0], [54.0, 769.0], [54.1, 770.0], [54.2, 772.0], [54.3, 772.0], [54.4, 776.0], [54.5, 779.0], [54.6, 782.0], [54.7, 784.0], [54.8, 787.0], [54.9, 788.0], [55.0, 789.0], [55.1, 790.0], [55.2, 790.0], [55.3, 792.0], [55.4, 794.0], [55.5, 795.0], [55.6, 798.0], [55.7, 800.0], [55.8, 801.0], [55.9, 803.0], [56.0, 803.0], [56.1, 806.0], [56.2, 807.0], [56.3, 808.0], [56.4, 809.0], [56.5, 810.0], [56.6, 812.0], [56.7, 812.0], [56.8, 814.0], [56.9, 817.0], [57.0, 820.0], [57.1, 821.0], [57.2, 823.0], [57.3, 825.0], [57.4, 827.0], [57.5, 828.0], [57.6, 832.0], [57.7, 834.0], [57.8, 835.0], [57.9, 836.0], [58.0, 838.0], [58.1, 840.0], [58.2, 841.0], [58.3, 845.0], [58.4, 846.0], [58.5, 849.0], [58.6, 851.0], [58.7, 854.0], [58.8, 856.0], [58.9, 859.0], [59.0, 860.0], [59.1, 861.0], [59.2, 863.0], [59.3, 867.0], [59.4, 868.0], [59.5, 869.0], [59.6, 872.0], [59.7, 873.0], [59.8, 876.0], [59.9, 877.0], [60.0, 878.0], [60.1, 880.0], [60.2, 881.0], [60.3, 883.0], [60.4, 884.0], [60.5, 885.0], [60.6, 885.0], [60.7, 886.0], [60.8, 888.0], [60.9, 890.0], [61.0, 892.0], [61.1, 894.0], [61.2, 895.0], [61.3, 896.0], [61.4, 898.0], [61.5, 899.0], [61.6, 900.0], [61.7, 903.0], [61.8, 905.0], [61.9, 906.0], [62.0, 909.0], [62.1, 910.0], [62.2, 911.0], [62.3, 913.0], [62.4, 916.0], [62.5, 917.0], [62.6, 918.0], [62.7, 921.0], [62.8, 923.0], [62.9, 925.0], [63.0, 927.0], [63.1, 930.0], [63.2, 934.0], [63.3, 936.0], [63.4, 938.0], [63.5, 939.0], [63.6, 942.0], [63.7, 944.0], [63.8, 946.0], [63.9, 947.0], [64.0, 949.0], [64.1, 949.0], [64.2, 953.0], [64.3, 954.0], [64.4, 958.0], [64.5, 959.0], [64.6, 960.0], [64.7, 962.0], [64.8, 963.0], [64.9, 965.0], [65.0, 966.0], [65.1, 967.0], [65.2, 971.0], [65.3, 973.0], [65.4, 975.0], [65.5, 976.0], [65.6, 979.0], [65.7, 982.0], [65.8, 984.0], [65.9, 986.0], [66.0, 987.0], [66.1, 988.0], [66.2, 989.0], [66.3, 990.0], [66.4, 992.0], [66.5, 994.0], [66.6, 996.0], [66.7, 998.0], [66.8, 998.0], [66.9, 1000.0], [67.0, 1001.0], [67.1, 1003.0], [67.2, 1003.0], [67.3, 1004.0], [67.4, 1006.0], [67.5, 1007.0], [67.6, 1008.0], [67.7, 1011.0], [67.8, 1014.0], [67.9, 1015.0], [68.0, 1016.0], [68.1, 1018.0], [68.2, 1020.0], [68.3, 1021.0], [68.4, 1021.0], [68.5, 1024.0], [68.6, 1025.0], [68.7, 1026.0], [68.8, 1028.0], [68.9, 1030.0], [69.0, 1030.0], [69.1, 1032.0], [69.2, 1034.0], [69.3, 1036.0], [69.4, 1039.0], [69.5, 1041.0], [69.6, 1043.0], [69.7, 1046.0], [69.8, 1048.0], [69.9, 1050.0], [70.0, 1051.0], [70.1, 1052.0], [70.2, 1054.0], [70.3, 1055.0], [70.4, 1056.0], [70.5, 1059.0], [70.6, 1060.0], [70.7, 1062.0], [70.8, 1063.0], [70.9, 1066.0], [71.0, 1067.0], [71.1, 1069.0], [71.2, 1071.0], [71.3, 1074.0], [71.4, 1074.0], [71.5, 1077.0], [71.6, 1077.0], [71.7, 1079.0], [71.8, 1080.0], [71.9, 1082.0], [72.0, 1083.0], [72.1, 1085.0], [72.2, 1086.0], [72.3, 1087.0], [72.4, 1090.0], [72.5, 1093.0], [72.6, 1094.0], [72.7, 1096.0], [72.8, 1097.0], [72.9, 1098.0], [73.0, 1100.0], [73.1, 1102.0], [73.2, 1103.0], [73.3, 1109.0], [73.4, 1110.0], [73.5, 1111.0], [73.6, 1113.0], [73.7, 1115.0], [73.8, 1117.0], [73.9, 1122.0], [74.0, 1125.0], [74.1, 1127.0], [74.2, 1129.0], [74.3, 1134.0], [74.4, 1137.0], [74.5, 1141.0], [74.6, 1143.0], [74.7, 1145.0], [74.8, 1147.0], [74.9, 1150.0], [75.0, 1151.0], [75.1, 1155.0], [75.2, 1157.0], [75.3, 1158.0], [75.4, 1161.0], [75.5, 1163.0], [75.6, 1165.0], [75.7, 1167.0], [75.8, 1169.0], [75.9, 1173.0], [76.0, 1177.0], [76.1, 1179.0], [76.2, 1181.0], [76.3, 1183.0], [76.4, 1185.0], [76.5, 1187.0], [76.6, 1189.0], [76.7, 1191.0], [76.8, 1192.0], [76.9, 1193.0], [77.0, 1197.0], [77.1, 1200.0], [77.2, 1202.0], [77.3, 1204.0], [77.4, 1206.0], [77.5, 1208.0], [77.6, 1210.0], [77.7, 1212.0], [77.8, 1214.0], [77.9, 1217.0], [78.0, 1220.0], [78.1, 1225.0], [78.2, 1226.0], [78.3, 1227.0], [78.4, 1228.0], [78.5, 1232.0], [78.6, 1235.0], [78.7, 1237.0], [78.8, 1242.0], [78.9, 1243.0], [79.0, 1244.0], [79.1, 1246.0], [79.2, 1248.0], [79.3, 1252.0], [79.4, 1253.0], [79.5, 1256.0], [79.6, 1257.0], [79.7, 1261.0], [79.8, 1265.0], [79.9, 1268.0], [80.0, 1272.0], [80.1, 1275.0], [80.2, 1278.0], [80.3, 1280.0], [80.4, 1283.0], [80.5, 1287.0], [80.6, 1288.0], [80.7, 1291.0], [80.8, 1293.0], [80.9, 1296.0], [81.0, 1301.0], [81.1, 1302.0], [81.2, 1304.0], [81.3, 1305.0], [81.4, 1306.0], [81.5, 1308.0], [81.6, 1311.0], [81.7, 1314.0], [81.8, 1315.0], [81.9, 1316.0], [82.0, 1318.0], [82.1, 1320.0], [82.2, 1322.0], [82.3, 1323.0], [82.4, 1325.0], [82.5, 1326.0], [82.6, 1327.0], [82.7, 1330.0], [82.8, 1333.0], [82.9, 1335.0], [83.0, 1337.0], [83.1, 1338.0], [83.2, 1340.0], [83.3, 1344.0], [83.4, 1346.0], [83.5, 1348.0], [83.6, 1350.0], [83.7, 1352.0], [83.8, 1354.0], [83.9, 1355.0], [84.0, 1357.0], [84.1, 1359.0], [84.2, 1361.0], [84.3, 1364.0], [84.4, 1365.0], [84.5, 1368.0], [84.6, 1370.0], [84.7, 1373.0], [84.8, 1377.0], [84.9, 1380.0], [85.0, 1382.0], [85.1, 1384.0], [85.2, 1387.0], [85.3, 1390.0], [85.4, 1395.0], [85.5, 1397.0], [85.6, 1399.0], [85.7, 1400.0], [85.8, 1401.0], [85.9, 1405.0], [86.0, 1410.0], [86.1, 1411.0], [86.2, 1414.0], [86.3, 1416.0], [86.4, 1418.0], [86.5, 1421.0], [86.6, 1423.0], [86.7, 1425.0], [86.8, 1426.0], [86.9, 1429.0], [87.0, 1433.0], [87.1, 1438.0], [87.2, 1440.0], [87.3, 1444.0], [87.4, 1447.0], [87.5, 1451.0], [87.6, 1455.0], [87.7, 1457.0], [87.8, 1464.0], [87.9, 1467.0], [88.0, 1469.0], [88.1, 1471.0], [88.2, 1475.0], [88.3, 1477.0], [88.4, 1482.0], [88.5, 1487.0], [88.6, 1490.0], [88.7, 1493.0], [88.8, 1500.0], [88.9, 1504.0], [89.0, 1511.0], [89.1, 1517.0], [89.2, 1519.0], [89.3, 1528.0], [89.4, 1535.0], [89.5, 1540.0], [89.6, 1545.0], [89.7, 1550.0], [89.8, 1554.0], [89.9, 1558.0], [90.0, 1563.0], [90.1, 1566.0], [90.2, 1571.0], [90.3, 1577.0], [90.4, 1591.0], [90.5, 1597.0], [90.6, 1604.0], [90.7, 1609.0], [90.8, 1615.0], [90.9, 1620.0], [91.0, 1622.0], [91.1, 1629.0], [91.2, 1638.0], [91.3, 1646.0], [91.4, 1653.0], [91.5, 1660.0], [91.6, 1670.0], [91.7, 1676.0], [91.8, 1679.0], [91.9, 1686.0], [92.0, 1690.0], [92.1, 1695.0], [92.2, 1708.0], [92.3, 1716.0], [92.4, 1720.0], [92.5, 1723.0], [92.6, 1727.0], [92.7, 1737.0], [92.8, 1743.0], [92.9, 1751.0], [93.0, 1757.0], [93.1, 1763.0], [93.2, 1772.0], [93.3, 1787.0], [93.4, 1798.0], [93.5, 1807.0], [93.6, 1811.0], [93.7, 1822.0], [93.8, 1836.0], [93.9, 1843.0], [94.0, 1847.0], [94.1, 1856.0], [94.2, 1861.0], [94.3, 1876.0], [94.4, 1880.0], [94.5, 1888.0], [94.6, 1890.0], [94.7, 1897.0], [94.8, 1916.0], [94.9, 1929.0], [95.0, 1933.0], [95.1, 1947.0], [95.2, 1957.0], [95.3, 1972.0], [95.4, 1993.0], [95.5, 2003.0], [95.6, 2012.0], [95.7, 2026.0], [95.8, 2041.0], [95.9, 2074.0], [96.0, 2083.0], [96.1, 2095.0], [96.2, 2105.0], [96.3, 2119.0], [96.4, 2127.0], [96.5, 2135.0], [96.6, 2145.0], [96.7, 2152.0], [96.8, 2166.0], [96.9, 2181.0], [97.0, 2192.0], [97.1, 2211.0], [97.2, 2228.0], [97.3, 2241.0], [97.4, 2265.0], [97.5, 2281.0], [97.6, 2322.0], [97.7, 2345.0], [97.8, 2369.0], [97.9, 2413.0], [98.0, 2434.0], [98.1, 2459.0], [98.2, 2498.0], [98.3, 2536.0], [98.4, 2573.0], [98.5, 2634.0], [98.6, 2678.0], [98.7, 2732.0], [98.8, 2790.0], [98.9, 2874.0], [99.0, 2974.0], [99.1, 3073.0], [99.2, 3123.0], [99.3, 3279.0], [99.4, 3375.0], [99.5, 3575.0], [99.6, 3666.0], [99.7, 4082.0], [99.8, 4368.0], [99.9, 4881.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 591.0, "series": [{"data": [[600.0, 393.0], [700.0, 305.0], [800.0, 305.0], [900.0, 278.0], [1000.0, 317.0], [1100.0, 212.0], [1200.0, 202.0], [1300.0, 244.0], [1400.0, 162.0], [1500.0, 90.0], [1600.0, 84.0], [1700.0, 68.0], [1800.0, 65.0], [1900.0, 40.0], [2000.0, 34.0], [2100.0, 48.0], [2200.0, 24.0], [2300.0, 17.0], [2400.0, 19.0], [2500.0, 13.0], [2600.0, 8.0], [2800.0, 7.0], [2700.0, 10.0], [2900.0, 6.0], [3000.0, 3.0], [3100.0, 7.0], [3200.0, 6.0], [3300.0, 2.0], [3400.0, 4.0], [3500.0, 4.0], [3600.0, 3.0], [3700.0, 2.0], [3900.0, 2.0], [4000.0, 1.0], [4200.0, 2.0], [4100.0, 1.0], [4300.0, 2.0], [4400.0, 2.0], [4500.0, 1.0], [4700.0, 1.0], [4800.0, 1.0], [4900.0, 2.0], [5400.0, 1.0], [5600.0, 1.0], [5800.0, 1.0], [100.0, 114.0], [200.0, 591.0], [300.0, 381.0], [400.0, 579.0], [500.0, 526.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2939.0, "series": [{"data": [[0.0, 1670.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2939.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 581.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.832089552238804, "minX": 1.6021881E12, "maxY": 10.0, "series": [{"data": [[1.6021881E12, 10.0], [1.6021884E12, 10.0], [1.60218846E12, 10.0], [1.60218828E12, 10.0], [1.60218834E12, 10.0], [1.60218816E12, 10.0], [1.60218822E12, 10.0], [1.60218852E12, 9.832089552238804]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218852E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 464.0, "minX": 1.0, "maxY": 2772.0, "series": [{"data": [[8.0, 1516.0], [4.0, 602.0], [2.0, 2772.0], [1.0, 2497.0], [9.0, 482.0], [10.0, 858.9336163643391], [5.0, 464.0], [6.0, 1043.0], [3.0, 1326.0], [7.0, 611.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 859.6237719129273]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2018.1833333333334, "minX": 1.6021881E12, "maxY": 3509274.316666667, "series": [{"data": [[1.6021881E12, 3154669.1], [1.6021884E12, 3495596.4166666665], [1.60218846E12, 3159694.95], [1.60218828E12, 3434665.033333333], [1.60218834E12, 2790364.4], [1.60218816E12, 3039822.966666667], [1.60218822E12, 3509274.316666667], [1.60218852E12, 1388196.2166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6021881E12, 4563.316666666667], [1.6021884E12, 5682.3], [1.60218846E12, 6000.066666666667], [1.60218828E12, 4748.8], [1.60218834E12, 4656.2], [1.60218816E12, 5174.316666666667], [1.60218822E12, 5740.866666666667], [1.60218852E12, 2018.1833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218852E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 751.4854614412137, "minX": 1.6021881E12, "maxY": 1059.8358208955217, "series": [{"data": [[1.6021881E12, 923.3873015873005], [1.6021884E12, 786.6775884665793], [1.60218846E12, 751.4854614412137], [1.60218828E12, 929.0268987341773], [1.60218834E12, 941.3913713405233], [1.60218816E12, 858.0700000000002], [1.60218822E12, 795.6728232189975], [1.60218852E12, 1059.8358208955217]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218852E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 750.0088495575226, "minX": 1.6021881E12, "maxY": 1058.1194029850753, "series": [{"data": [[1.6021881E12, 921.4079365079363], [1.6021884E12, 784.9200524246388], [1.60218846E12, 750.0088495575226], [1.60218828E12, 926.5996835443043], [1.60218834E12, 939.7812018489989], [1.60218816E12, 856.3199999999995], [1.60218822E12, 793.7506596306075], [1.60218852E12, 1058.1194029850753]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218852E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010484927916120578, "minX": 1.6021881E12, "maxY": 0.20634920634920667, "series": [{"data": [[1.6021881E12, 0.20634920634920667], [1.6021884E12, 0.010484927916120578], [1.60218846E12, 0.011378002528445005], [1.60218828E12, 0.012658227848101267], [1.60218834E12, 0.015408320493066265], [1.60218816E12, 0.02428571428571428], [1.60218822E12, 0.014511873350923481], [1.60218852E12, 0.022388059701492553]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218852E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 177.0, "minX": 1.6021881E12, "maxY": 5819.0, "series": [{"data": [[1.6021881E12, 4475.0], [1.6021884E12, 3073.0], [1.60218846E12, 2929.0], [1.60218828E12, 4988.0], [1.60218834E12, 5819.0], [1.60218816E12, 3902.0], [1.60218822E12, 3193.0], [1.60218852E12, 3786.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6021881E12, 196.67899984955787], [1.6021884E12, 194.0], [1.60218846E12, 188.0], [1.60218828E12, 186.0], [1.60218834E12, 200.84999984502792], [1.60218816E12, 198.30899983286858], [1.60218822E12, 192.0], [1.60218852E12, 232.94699955105781]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6021881E12, 197.4938001203537], [1.6021884E12, 194.5636000728607], [1.60218846E12, 188.0], [1.60218828E12, 186.26670006036758], [1.60218834E12, 201.0], [1.60218816E12, 198.93990006685257], [1.60218822E12, 192.0], [1.60218852E12, 234.64170017957687]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6021881E12, 196.99449992477895], [1.6021884E12, 194.2579999089241], [1.60218846E12, 188.0], [1.60218828E12, 186.01349992454053], [1.60218834E12, 201.0], [1.60218816E12, 198.6594999164343], [1.60218822E12, 192.0], [1.60218852E12, 233.8884997755289]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6021881E12, 192.0], [1.6021884E12, 184.0], [1.60218846E12, 177.0], [1.60218828E12, 181.0], [1.60218834E12, 190.0], [1.60218816E12, 185.0], [1.60218822E12, 187.0], [1.60218852E12, 229.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6021881E12, 773.0], [1.6021884E12, 604.0], [1.60218846E12, 584.0], [1.60218828E12, 808.5], [1.60218834E12, 769.0], [1.60218816E12, 650.5], [1.60218822E12, 629.0], [1.60218852E12, 946.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218852E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 426.5, "minX": 1.0, "maxY": 2824.5, "series": [{"data": [[2.0, 2824.5], [3.0, 1613.0], [4.0, 1135.5], [5.0, 1522.0], [6.0, 1132.0], [7.0, 1074.0], [8.0, 1082.5], [9.0, 961.5], [10.0, 888.0], [11.0, 821.0], [12.0, 817.0], [13.0, 691.0], [14.0, 715.5], [15.0, 648.0], [16.0, 510.5], [1.0, 2634.5], [17.0, 532.0], [18.0, 505.0], [19.0, 455.0], [20.0, 432.5], [21.0, 433.0], [22.0, 463.0], [23.0, 445.5], [24.0, 446.5], [25.0, 427.0], [27.0, 426.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10.0, 684.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 426.5, "minX": 1.0, "maxY": 2819.5, "series": [{"data": [[2.0, 2819.5], [3.0, 1583.0], [4.0, 1129.5], [5.0, 1521.0], [6.0, 1130.5], [7.0, 1069.0], [8.0, 1079.5], [9.0, 960.0], [10.0, 884.0], [11.0, 818.0], [12.0, 816.0], [13.0, 690.0], [14.0, 714.0], [15.0, 647.0], [16.0, 510.0], [1.0, 2629.0], [17.0, 532.0], [18.0, 504.5], [19.0, 455.0], [20.0, 432.5], [21.0, 433.0], [22.0, 463.0], [23.0, 445.5], [24.0, 446.0], [25.0, 427.0], [27.0, 426.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10.0, 684.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.3, "minX": 1.6021881E12, "maxY": 13.183333333333334, "series": [{"data": [[1.6021881E12, 10.666666666666666], [1.6021884E12, 12.716666666666667], [1.60218846E12, 13.183333333333334], [1.60218828E12, 10.533333333333333], [1.60218834E12, 10.816666666666666], [1.60218816E12, 11.666666666666666], [1.60218822E12, 12.633333333333333], [1.60218852E12, 4.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218852E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6021881E12, "maxY": 13.183333333333334, "series": [{"data": [[1.6021881E12, 10.5], [1.6021884E12, 12.716666666666667], [1.60218846E12, 13.183333333333334], [1.60218828E12, 10.533333333333333], [1.60218834E12, 10.816666666666666], [1.60218816E12, 11.666666666666666], [1.60218822E12, 12.616666666666667], [1.60218852E12, 4.466666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60218822E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218852E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6021881E12, "maxY": 13.183333333333334, "series": [{"data": [[1.6021881E12, 10.5], [1.6021884E12, 12.716666666666667], [1.60218846E12, 13.183333333333334], [1.60218828E12, 10.533333333333333], [1.60218834E12, 10.816666666666666], [1.60218816E12, 11.666666666666666], [1.60218822E12, 12.616666666666667], [1.60218852E12, 4.466666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60218822E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218852E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6021881E12, "maxY": 13.183333333333334, "series": [{"data": [[1.6021881E12, 10.5], [1.6021884E12, 12.716666666666667], [1.60218846E12, 13.183333333333334], [1.60218828E12, 10.533333333333333], [1.60218834E12, 10.816666666666666], [1.60218816E12, 11.666666666666666], [1.60218822E12, 12.616666666666667], [1.60218852E12, 4.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60218822E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218852E12, "title": "Total Transactions Per Second"}},
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

