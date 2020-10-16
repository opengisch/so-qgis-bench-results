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
        data: {"result": {"minY": 176.0, "minX": 0.0, "maxY": 8541.0, "series": [{"data": [[0.0, 176.0], [0.1, 184.0], [0.2, 185.0], [0.3, 187.0], [0.4, 188.0], [0.5, 189.0], [0.6, 190.0], [0.7, 191.0], [0.8, 192.0], [0.9, 193.0], [1.0, 194.0], [1.1, 195.0], [1.2, 195.0], [1.3, 196.0], [1.4, 197.0], [1.5, 197.0], [1.6, 198.0], [1.7, 199.0], [1.8, 199.0], [1.9, 200.0], [2.0, 200.0], [2.1, 201.0], [2.2, 202.0], [2.3, 202.0], [2.4, 203.0], [2.5, 203.0], [2.6, 204.0], [2.7, 204.0], [2.8, 205.0], [2.9, 205.0], [3.0, 206.0], [3.1, 207.0], [3.2, 207.0], [3.3, 208.0], [3.4, 209.0], [3.5, 210.0], [3.6, 211.0], [3.7, 212.0], [3.8, 214.0], [3.9, 215.0], [4.0, 215.0], [4.1, 216.0], [4.2, 217.0], [4.3, 218.0], [4.4, 219.0], [4.5, 220.0], [4.6, 221.0], [4.7, 221.0], [4.8, 223.0], [4.9, 223.0], [5.0, 223.0], [5.1, 224.0], [5.2, 224.0], [5.3, 225.0], [5.4, 225.0], [5.5, 226.0], [5.6, 226.0], [5.7, 227.0], [5.8, 228.0], [5.9, 229.0], [6.0, 230.0], [6.1, 231.0], [6.2, 232.0], [6.3, 232.0], [6.4, 233.0], [6.5, 235.0], [6.6, 236.0], [6.7, 237.0], [6.8, 237.0], [6.9, 238.0], [7.0, 239.0], [7.1, 240.0], [7.2, 241.0], [7.3, 243.0], [7.4, 244.0], [7.5, 246.0], [7.6, 247.0], [7.7, 248.0], [7.8, 249.0], [7.9, 250.0], [8.0, 251.0], [8.1, 253.0], [8.2, 255.0], [8.3, 258.0], [8.4, 259.0], [8.5, 261.0], [8.6, 262.0], [8.7, 263.0], [8.8, 263.0], [8.9, 265.0], [9.0, 266.0], [9.1, 267.0], [9.2, 268.0], [9.3, 270.0], [9.4, 270.0], [9.5, 271.0], [9.6, 272.0], [9.7, 273.0], [9.8, 274.0], [9.9, 274.0], [10.0, 275.0], [10.1, 276.0], [10.2, 277.0], [10.3, 277.0], [10.4, 278.0], [10.5, 279.0], [10.6, 280.0], [10.7, 281.0], [10.8, 282.0], [10.9, 283.0], [11.0, 284.0], [11.1, 285.0], [11.2, 286.0], [11.3, 286.0], [11.4, 287.0], [11.5, 289.0], [11.6, 290.0], [11.7, 291.0], [11.8, 292.0], [11.9, 293.0], [12.0, 294.0], [12.1, 295.0], [12.2, 297.0], [12.3, 298.0], [12.4, 298.0], [12.5, 299.0], [12.6, 299.0], [12.7, 301.0], [12.8, 301.0], [12.9, 303.0], [13.0, 304.0], [13.1, 305.0], [13.2, 306.0], [13.3, 309.0], [13.4, 309.0], [13.5, 310.0], [13.6, 311.0], [13.7, 312.0], [13.8, 313.0], [13.9, 313.0], [14.0, 314.0], [14.1, 315.0], [14.2, 316.0], [14.3, 317.0], [14.4, 318.0], [14.5, 319.0], [14.6, 321.0], [14.7, 322.0], [14.8, 324.0], [14.9, 324.0], [15.0, 325.0], [15.1, 326.0], [15.2, 327.0], [15.3, 330.0], [15.4, 331.0], [15.5, 331.0], [15.6, 332.0], [15.7, 334.0], [15.8, 337.0], [15.9, 338.0], [16.0, 338.0], [16.1, 340.0], [16.2, 342.0], [16.3, 344.0], [16.4, 344.0], [16.5, 346.0], [16.6, 348.0], [16.7, 349.0], [16.8, 350.0], [16.9, 351.0], [17.0, 353.0], [17.1, 355.0], [17.2, 356.0], [17.3, 357.0], [17.4, 361.0], [17.5, 363.0], [17.6, 365.0], [17.7, 368.0], [17.8, 370.0], [17.9, 373.0], [18.0, 374.0], [18.1, 375.0], [18.2, 376.0], [18.3, 378.0], [18.4, 380.0], [18.5, 382.0], [18.6, 382.0], [18.7, 383.0], [18.8, 384.0], [18.9, 384.0], [19.0, 386.0], [19.1, 386.0], [19.2, 387.0], [19.3, 388.0], [19.4, 389.0], [19.5, 390.0], [19.6, 391.0], [19.7, 391.0], [19.8, 392.0], [19.9, 393.0], [20.0, 393.0], [20.1, 394.0], [20.2, 395.0], [20.3, 395.0], [20.4, 396.0], [20.5, 397.0], [20.6, 399.0], [20.7, 400.0], [20.8, 401.0], [20.9, 402.0], [21.0, 402.0], [21.1, 403.0], [21.2, 404.0], [21.3, 405.0], [21.4, 405.0], [21.5, 406.0], [21.6, 406.0], [21.7, 407.0], [21.8, 408.0], [21.9, 409.0], [22.0, 410.0], [22.1, 411.0], [22.2, 411.0], [22.3, 411.0], [22.4, 412.0], [22.5, 413.0], [22.6, 414.0], [22.7, 416.0], [22.8, 416.0], [22.9, 417.0], [23.0, 419.0], [23.1, 420.0], [23.2, 420.0], [23.3, 422.0], [23.4, 423.0], [23.5, 424.0], [23.6, 425.0], [23.7, 427.0], [23.8, 428.0], [23.9, 428.0], [24.0, 429.0], [24.1, 429.0], [24.2, 430.0], [24.3, 431.0], [24.4, 433.0], [24.5, 433.0], [24.6, 435.0], [24.7, 435.0], [24.8, 436.0], [24.9, 437.0], [25.0, 437.0], [25.1, 438.0], [25.2, 439.0], [25.3, 440.0], [25.4, 441.0], [25.5, 442.0], [25.6, 442.0], [25.7, 443.0], [25.8, 444.0], [25.9, 445.0], [26.0, 445.0], [26.1, 446.0], [26.2, 447.0], [26.3, 448.0], [26.4, 448.0], [26.5, 449.0], [26.6, 450.0], [26.7, 451.0], [26.8, 451.0], [26.9, 453.0], [27.0, 454.0], [27.1, 455.0], [27.2, 456.0], [27.3, 456.0], [27.4, 457.0], [27.5, 458.0], [27.6, 460.0], [27.7, 460.0], [27.8, 461.0], [27.9, 462.0], [28.0, 462.0], [28.1, 463.0], [28.2, 464.0], [28.3, 466.0], [28.4, 466.0], [28.5, 467.0], [28.6, 468.0], [28.7, 469.0], [28.8, 470.0], [28.9, 471.0], [29.0, 472.0], [29.1, 472.0], [29.2, 473.0], [29.3, 474.0], [29.4, 474.0], [29.5, 475.0], [29.6, 477.0], [29.7, 477.0], [29.8, 478.0], [29.9, 478.0], [30.0, 479.0], [30.1, 480.0], [30.2, 481.0], [30.3, 481.0], [30.4, 482.0], [30.5, 483.0], [30.6, 484.0], [30.7, 485.0], [30.8, 486.0], [30.9, 488.0], [31.0, 488.0], [31.1, 490.0], [31.2, 490.0], [31.3, 491.0], [31.4, 492.0], [31.5, 494.0], [31.6, 496.0], [31.7, 498.0], [31.8, 499.0], [31.9, 501.0], [32.0, 502.0], [32.1, 502.0], [32.2, 503.0], [32.3, 505.0], [32.4, 506.0], [32.5, 506.0], [32.6, 507.0], [32.7, 509.0], [32.8, 510.0], [32.9, 511.0], [33.0, 512.0], [33.1, 513.0], [33.2, 514.0], [33.3, 515.0], [33.4, 517.0], [33.5, 517.0], [33.6, 518.0], [33.7, 520.0], [33.8, 520.0], [33.9, 521.0], [34.0, 522.0], [34.1, 523.0], [34.2, 524.0], [34.3, 524.0], [34.4, 525.0], [34.5, 526.0], [34.6, 527.0], [34.7, 528.0], [34.8, 529.0], [34.9, 529.0], [35.0, 530.0], [35.1, 530.0], [35.2, 531.0], [35.3, 532.0], [35.4, 532.0], [35.5, 533.0], [35.6, 534.0], [35.7, 535.0], [35.8, 536.0], [35.9, 537.0], [36.0, 538.0], [36.1, 538.0], [36.2, 539.0], [36.3, 540.0], [36.4, 541.0], [36.5, 542.0], [36.6, 543.0], [36.7, 543.0], [36.8, 544.0], [36.9, 545.0], [37.0, 545.0], [37.1, 546.0], [37.2, 547.0], [37.3, 548.0], [37.4, 549.0], [37.5, 550.0], [37.6, 550.0], [37.7, 551.0], [37.8, 552.0], [37.9, 552.0], [38.0, 553.0], [38.1, 554.0], [38.2, 555.0], [38.3, 556.0], [38.4, 557.0], [38.5, 557.0], [38.6, 558.0], [38.7, 559.0], [38.8, 560.0], [38.9, 561.0], [39.0, 562.0], [39.1, 563.0], [39.2, 563.0], [39.3, 564.0], [39.4, 565.0], [39.5, 566.0], [39.6, 567.0], [39.7, 568.0], [39.8, 569.0], [39.9, 569.0], [40.0, 571.0], [40.1, 572.0], [40.2, 574.0], [40.3, 576.0], [40.4, 577.0], [40.5, 579.0], [40.6, 580.0], [40.7, 581.0], [40.8, 582.0], [40.9, 583.0], [41.0, 584.0], [41.1, 585.0], [41.2, 585.0], [41.3, 586.0], [41.4, 588.0], [41.5, 590.0], [41.6, 592.0], [41.7, 593.0], [41.8, 594.0], [41.9, 595.0], [42.0, 595.0], [42.1, 596.0], [42.2, 597.0], [42.3, 598.0], [42.4, 599.0], [42.5, 599.0], [42.6, 600.0], [42.7, 602.0], [42.8, 603.0], [42.9, 603.0], [43.0, 604.0], [43.1, 605.0], [43.2, 605.0], [43.3, 606.0], [43.4, 607.0], [43.5, 609.0], [43.6, 609.0], [43.7, 611.0], [43.8, 612.0], [43.9, 614.0], [44.0, 617.0], [44.1, 617.0], [44.2, 618.0], [44.3, 620.0], [44.4, 621.0], [44.5, 622.0], [44.6, 623.0], [44.7, 625.0], [44.8, 626.0], [44.9, 627.0], [45.0, 627.0], [45.1, 630.0], [45.2, 631.0], [45.3, 632.0], [45.4, 633.0], [45.5, 634.0], [45.6, 636.0], [45.7, 638.0], [45.8, 639.0], [45.9, 639.0], [46.0, 640.0], [46.1, 642.0], [46.2, 644.0], [46.3, 645.0], [46.4, 646.0], [46.5, 648.0], [46.6, 649.0], [46.7, 650.0], [46.8, 652.0], [46.9, 654.0], [47.0, 655.0], [47.1, 657.0], [47.2, 658.0], [47.3, 659.0], [47.4, 660.0], [47.5, 661.0], [47.6, 662.0], [47.7, 663.0], [47.8, 664.0], [47.9, 665.0], [48.0, 667.0], [48.1, 668.0], [48.2, 671.0], [48.3, 673.0], [48.4, 674.0], [48.5, 675.0], [48.6, 675.0], [48.7, 678.0], [48.8, 679.0], [48.9, 680.0], [49.0, 683.0], [49.1, 684.0], [49.2, 684.0], [49.3, 685.0], [49.4, 687.0], [49.5, 688.0], [49.6, 688.0], [49.7, 690.0], [49.8, 692.0], [49.9, 693.0], [50.0, 696.0], [50.1, 699.0], [50.2, 700.0], [50.3, 702.0], [50.4, 703.0], [50.5, 704.0], [50.6, 705.0], [50.7, 706.0], [50.8, 707.0], [50.9, 709.0], [51.0, 712.0], [51.1, 714.0], [51.2, 716.0], [51.3, 716.0], [51.4, 718.0], [51.5, 719.0], [51.6, 722.0], [51.7, 723.0], [51.8, 726.0], [51.9, 728.0], [52.0, 729.0], [52.1, 731.0], [52.2, 734.0], [52.3, 736.0], [52.4, 737.0], [52.5, 738.0], [52.6, 742.0], [52.7, 744.0], [52.8, 746.0], [52.9, 747.0], [53.0, 747.0], [53.1, 750.0], [53.2, 753.0], [53.3, 754.0], [53.4, 755.0], [53.5, 757.0], [53.6, 759.0], [53.7, 761.0], [53.8, 762.0], [53.9, 765.0], [54.0, 767.0], [54.1, 769.0], [54.2, 773.0], [54.3, 774.0], [54.4, 776.0], [54.5, 777.0], [54.6, 778.0], [54.7, 781.0], [54.8, 781.0], [54.9, 783.0], [55.0, 786.0], [55.1, 787.0], [55.2, 789.0], [55.3, 791.0], [55.4, 793.0], [55.5, 796.0], [55.6, 797.0], [55.7, 799.0], [55.8, 800.0], [55.9, 801.0], [56.0, 802.0], [56.1, 805.0], [56.2, 806.0], [56.3, 807.0], [56.4, 808.0], [56.5, 810.0], [56.6, 812.0], [56.7, 815.0], [56.8, 816.0], [56.9, 819.0], [57.0, 820.0], [57.1, 821.0], [57.2, 822.0], [57.3, 825.0], [57.4, 828.0], [57.5, 829.0], [57.6, 830.0], [57.7, 831.0], [57.8, 832.0], [57.9, 834.0], [58.0, 836.0], [58.1, 838.0], [58.2, 838.0], [58.3, 840.0], [58.4, 842.0], [58.5, 845.0], [58.6, 847.0], [58.7, 850.0], [58.8, 851.0], [58.9, 853.0], [59.0, 855.0], [59.1, 856.0], [59.2, 857.0], [59.3, 858.0], [59.4, 859.0], [59.5, 862.0], [59.6, 863.0], [59.7, 865.0], [59.8, 866.0], [59.9, 869.0], [60.0, 870.0], [60.1, 874.0], [60.2, 875.0], [60.3, 877.0], [60.4, 878.0], [60.5, 879.0], [60.6, 881.0], [60.7, 884.0], [60.8, 885.0], [60.9, 886.0], [61.0, 887.0], [61.1, 890.0], [61.2, 892.0], [61.3, 892.0], [61.4, 894.0], [61.5, 896.0], [61.6, 898.0], [61.7, 899.0], [61.8, 901.0], [61.9, 902.0], [62.0, 903.0], [62.1, 905.0], [62.2, 906.0], [62.3, 907.0], [62.4, 909.0], [62.5, 911.0], [62.6, 912.0], [62.7, 913.0], [62.8, 915.0], [62.9, 917.0], [63.0, 919.0], [63.1, 920.0], [63.2, 922.0], [63.3, 925.0], [63.4, 926.0], [63.5, 928.0], [63.6, 929.0], [63.7, 932.0], [63.8, 933.0], [63.9, 935.0], [64.0, 937.0], [64.1, 940.0], [64.2, 940.0], [64.3, 943.0], [64.4, 944.0], [64.5, 946.0], [64.6, 948.0], [64.7, 950.0], [64.8, 952.0], [64.9, 953.0], [65.0, 955.0], [65.1, 957.0], [65.2, 958.0], [65.3, 961.0], [65.4, 963.0], [65.5, 966.0], [65.6, 967.0], [65.7, 969.0], [65.8, 970.0], [65.9, 971.0], [66.0, 973.0], [66.1, 975.0], [66.2, 977.0], [66.3, 983.0], [66.4, 984.0], [66.5, 985.0], [66.6, 986.0], [66.7, 987.0], [66.8, 989.0], [66.9, 991.0], [67.0, 992.0], [67.1, 992.0], [67.2, 994.0], [67.3, 995.0], [67.4, 996.0], [67.5, 998.0], [67.6, 1002.0], [67.7, 1003.0], [67.8, 1006.0], [67.9, 1008.0], [68.0, 1010.0], [68.1, 1011.0], [68.2, 1013.0], [68.3, 1014.0], [68.4, 1015.0], [68.5, 1018.0], [68.6, 1019.0], [68.7, 1021.0], [68.8, 1022.0], [68.9, 1022.0], [69.0, 1024.0], [69.1, 1026.0], [69.2, 1030.0], [69.3, 1031.0], [69.4, 1032.0], [69.5, 1035.0], [69.6, 1036.0], [69.7, 1037.0], [69.8, 1038.0], [69.9, 1039.0], [70.0, 1040.0], [70.1, 1043.0], [70.2, 1045.0], [70.3, 1047.0], [70.4, 1048.0], [70.5, 1050.0], [70.6, 1052.0], [70.7, 1054.0], [70.8, 1056.0], [70.9, 1058.0], [71.0, 1061.0], [71.1, 1062.0], [71.2, 1063.0], [71.3, 1063.0], [71.4, 1065.0], [71.5, 1067.0], [71.6, 1070.0], [71.7, 1071.0], [71.8, 1074.0], [71.9, 1076.0], [72.0, 1077.0], [72.1, 1078.0], [72.2, 1082.0], [72.3, 1085.0], [72.4, 1086.0], [72.5, 1088.0], [72.6, 1089.0], [72.7, 1090.0], [72.8, 1092.0], [72.9, 1094.0], [73.0, 1094.0], [73.1, 1095.0], [73.2, 1099.0], [73.3, 1101.0], [73.4, 1105.0], [73.5, 1106.0], [73.6, 1107.0], [73.7, 1108.0], [73.8, 1108.0], [73.9, 1110.0], [74.0, 1111.0], [74.1, 1114.0], [74.2, 1118.0], [74.3, 1121.0], [74.4, 1123.0], [74.5, 1125.0], [74.6, 1126.0], [74.7, 1128.0], [74.8, 1131.0], [74.9, 1132.0], [75.0, 1134.0], [75.1, 1136.0], [75.2, 1140.0], [75.3, 1142.0], [75.4, 1144.0], [75.5, 1146.0], [75.6, 1148.0], [75.7, 1151.0], [75.8, 1154.0], [75.9, 1155.0], [76.0, 1158.0], [76.1, 1159.0], [76.2, 1160.0], [76.3, 1161.0], [76.4, 1165.0], [76.5, 1167.0], [76.6, 1168.0], [76.7, 1171.0], [76.8, 1173.0], [76.9, 1179.0], [77.0, 1180.0], [77.1, 1183.0], [77.2, 1186.0], [77.3, 1188.0], [77.4, 1193.0], [77.5, 1196.0], [77.6, 1198.0], [77.7, 1202.0], [77.8, 1206.0], [77.9, 1208.0], [78.0, 1212.0], [78.1, 1213.0], [78.2, 1215.0], [78.3, 1218.0], [78.4, 1222.0], [78.5, 1223.0], [78.6, 1225.0], [78.7, 1229.0], [78.8, 1234.0], [78.9, 1236.0], [79.0, 1239.0], [79.1, 1241.0], [79.2, 1244.0], [79.3, 1247.0], [79.4, 1249.0], [79.5, 1250.0], [79.6, 1251.0], [79.7, 1253.0], [79.8, 1255.0], [79.9, 1257.0], [80.0, 1261.0], [80.1, 1263.0], [80.2, 1265.0], [80.3, 1266.0], [80.4, 1269.0], [80.5, 1270.0], [80.6, 1275.0], [80.7, 1278.0], [80.8, 1280.0], [80.9, 1281.0], [81.0, 1282.0], [81.1, 1286.0], [81.2, 1290.0], [81.3, 1291.0], [81.4, 1293.0], [81.5, 1295.0], [81.6, 1299.0], [81.7, 1302.0], [81.8, 1304.0], [81.9, 1306.0], [82.0, 1308.0], [82.1, 1310.0], [82.2, 1312.0], [82.3, 1314.0], [82.4, 1317.0], [82.5, 1320.0], [82.6, 1320.0], [82.7, 1322.0], [82.8, 1325.0], [82.9, 1328.0], [83.0, 1332.0], [83.1, 1334.0], [83.2, 1335.0], [83.3, 1337.0], [83.4, 1341.0], [83.5, 1342.0], [83.6, 1346.0], [83.7, 1348.0], [83.8, 1350.0], [83.9, 1352.0], [84.0, 1353.0], [84.1, 1355.0], [84.2, 1358.0], [84.3, 1361.0], [84.4, 1363.0], [84.5, 1365.0], [84.6, 1367.0], [84.7, 1369.0], [84.8, 1376.0], [84.9, 1378.0], [85.0, 1380.0], [85.1, 1382.0], [85.2, 1383.0], [85.3, 1387.0], [85.4, 1390.0], [85.5, 1392.0], [85.6, 1393.0], [85.7, 1395.0], [85.8, 1397.0], [85.9, 1399.0], [86.0, 1401.0], [86.1, 1403.0], [86.2, 1405.0], [86.3, 1410.0], [86.4, 1412.0], [86.5, 1417.0], [86.6, 1420.0], [86.7, 1421.0], [86.8, 1424.0], [86.9, 1426.0], [87.0, 1430.0], [87.1, 1435.0], [87.2, 1437.0], [87.3, 1439.0], [87.4, 1442.0], [87.5, 1445.0], [87.6, 1449.0], [87.7, 1452.0], [87.8, 1456.0], [87.9, 1458.0], [88.0, 1460.0], [88.1, 1462.0], [88.2, 1467.0], [88.3, 1469.0], [88.4, 1474.0], [88.5, 1477.0], [88.6, 1481.0], [88.7, 1487.0], [88.8, 1491.0], [88.9, 1496.0], [89.0, 1503.0], [89.1, 1505.0], [89.2, 1509.0], [89.3, 1513.0], [89.4, 1519.0], [89.5, 1522.0], [89.6, 1530.0], [89.7, 1532.0], [89.8, 1543.0], [89.9, 1548.0], [90.0, 1554.0], [90.1, 1559.0], [90.2, 1565.0], [90.3, 1570.0], [90.4, 1575.0], [90.5, 1580.0], [90.6, 1588.0], [90.7, 1591.0], [90.8, 1600.0], [90.9, 1606.0], [91.0, 1611.0], [91.1, 1617.0], [91.2, 1623.0], [91.3, 1630.0], [91.4, 1640.0], [91.5, 1646.0], [91.6, 1655.0], [91.7, 1664.0], [91.8, 1676.0], [91.9, 1684.0], [92.0, 1692.0], [92.1, 1701.0], [92.2, 1715.0], [92.3, 1724.0], [92.4, 1732.0], [92.5, 1738.0], [92.6, 1740.0], [92.7, 1752.0], [92.8, 1757.0], [92.9, 1765.0], [93.0, 1768.0], [93.1, 1780.0], [93.2, 1797.0], [93.3, 1805.0], [93.4, 1811.0], [93.5, 1823.0], [93.6, 1835.0], [93.7, 1855.0], [93.8, 1868.0], [93.9, 1879.0], [94.0, 1892.0], [94.1, 1899.0], [94.2, 1906.0], [94.3, 1915.0], [94.4, 1923.0], [94.5, 1938.0], [94.6, 1954.0], [94.7, 1963.0], [94.8, 1970.0], [94.9, 1987.0], [95.0, 2010.0], [95.1, 2019.0], [95.2, 2023.0], [95.3, 2033.0], [95.4, 2046.0], [95.5, 2052.0], [95.6, 2059.0], [95.7, 2067.0], [95.8, 2084.0], [95.9, 2096.0], [96.0, 2104.0], [96.1, 2110.0], [96.2, 2126.0], [96.3, 2135.0], [96.4, 2150.0], [96.5, 2161.0], [96.6, 2167.0], [96.7, 2176.0], [96.8, 2202.0], [96.9, 2214.0], [97.0, 2230.0], [97.1, 2240.0], [97.2, 2260.0], [97.3, 2282.0], [97.4, 2296.0], [97.5, 2325.0], [97.6, 2338.0], [97.7, 2356.0], [97.8, 2372.0], [97.9, 2384.0], [98.0, 2409.0], [98.1, 2441.0], [98.2, 2444.0], [98.3, 2517.0], [98.4, 2536.0], [98.5, 2574.0], [98.6, 2604.0], [98.7, 2670.0], [98.8, 2700.0], [98.9, 2761.0], [99.0, 2853.0], [99.1, 3029.0], [99.2, 3126.0], [99.3, 3220.0], [99.4, 3288.0], [99.5, 3408.0], [99.6, 3603.0], [99.7, 4039.0], [99.8, 4618.0], [99.9, 4842.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 580.0, "series": [{"data": [[600.0, 398.0], [700.0, 291.0], [800.0, 308.0], [900.0, 302.0], [1000.0, 295.0], [1100.0, 230.0], [1200.0, 207.0], [1300.0, 222.0], [1400.0, 157.0], [1500.0, 96.0], [1600.0, 64.0], [1700.0, 63.0], [1800.0, 45.0], [1900.0, 45.0], [2000.0, 51.0], [2100.0, 43.0], [2300.0, 24.0], [2200.0, 35.0], [2400.0, 19.0], [2500.0, 16.0], [2600.0, 10.0], [2700.0, 7.0], [2800.0, 6.0], [2900.0, 2.0], [3000.0, 5.0], [3100.0, 5.0], [3300.0, 5.0], [3200.0, 7.0], [3400.0, 1.0], [3500.0, 4.0], [3700.0, 1.0], [3600.0, 2.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 2.0], [4200.0, 1.0], [4600.0, 3.0], [4500.0, 1.0], [4700.0, 2.0], [4800.0, 3.0], [5800.0, 1.0], [5700.0, 1.0], [8300.0, 1.0], [8500.0, 1.0], [100.0, 95.0], [200.0, 560.0], [300.0, 417.0], [400.0, 580.0], [500.0, 554.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 572.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2963.0, "series": [{"data": [[0.0, 1655.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2963.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 572.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.772727272727273, "minX": 1.60280418E12, "maxY": 10.0, "series": [{"data": [[1.6028043E12, 10.0], [1.6028046E12, 10.0], [1.60280442E12, 10.0], [1.60280424E12, 10.0], [1.60280454E12, 10.0], [1.60280436E12, 10.0], [1.60280418E12, 10.0], [1.60280466E12, 9.772727272727273], [1.60280448E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280466E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 310.0, "minX": 1.0, "maxY": 3000.0, "series": [{"data": [[8.0, 980.0], [4.0, 857.0], [2.0, 886.0], [1.0, 3000.0], [9.0, 673.0], [10.0, 858.7573827446454], [5.0, 608.0], [6.0, 310.0], [3.0, 997.0], [7.0, 1087.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 859.0789980732193]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 313.9166666666667, "minX": 1.60280418E12, "maxY": 3652916.05, "series": [{"data": [[1.6028043E12, 3312098.433333333], [1.6028046E12, 3221936.45], [1.60280442E12, 3324796.6166666667], [1.60280424E12, 3067611.216666667], [1.60280454E12, 3652916.05], [1.60280436E12, 3640201.6166666667], [1.60280418E12, 263723.86666666664], [1.60280466E12, 921295.1833333333], [1.60280448E12, 2568184.033333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6028043E12, 5587.883333333333], [1.6028046E12, 5789.05], [1.60280442E12, 4760.0], [1.60280424E12, 4586.216666666666], [1.60280454E12, 5346.866666666667], [1.60280436E12, 5536.4], [1.60280418E12, 313.9166666666667], [1.60280466E12, 1486.15], [1.60280448E12, 5170.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280466E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 790.7863695937095, "minX": 1.60280418E12, "maxY": 1344.4634146341461, "series": [{"data": [[1.6028043E12, 807.690571049136], [1.6028046E12, 790.7863695937095], [1.60280442E12, 944.9248826291082], [1.60280424E12, 929.9465408805025], [1.60280454E12, 830.1438547486039], [1.60280436E12, 816.9492455418377], [1.60280418E12, 1344.4634146341461], [1.60280466E12, 1047.3989898989907], [1.60280448E12, 838.2643356643348]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280466E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 789.4036697247698, "minX": 1.60280418E12, "maxY": 1341.3414634146343, "series": [{"data": [[1.6028043E12, 805.6082337317387], [1.6028046E12, 789.4036697247698], [1.60280442E12, 942.8247261345851], [1.60280424E12, 927.816037735848], [1.60280454E12, 828.2667597765367], [1.60280436E12, 814.7750342935528], [1.60280418E12, 1341.3414634146343], [1.60280466E12, 1045.8636363636376], [1.60280448E12, 837.0531468531468]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280466E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.012569832402234644, "minX": 1.60280418E12, "maxY": 1.975609756097561, "series": [{"data": [[1.6028043E12, 0.022576361221779546], [1.6028046E12, 0.01572739187418088], [1.60280442E12, 0.01564945226917058], [1.60280424E12, 0.01572327044025157], [1.60280454E12, 0.012569832402234644], [1.60280436E12, 0.013717421124828532], [1.60280418E12, 1.975609756097561], [1.60280466E12, 0.015151515151515171], [1.60280448E12, 0.015384615384615394]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280466E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 176.0, "minX": 1.60280418E12, "maxY": 8541.0, "series": [{"data": [[1.6028043E12, 4601.0], [1.6028046E12, 3341.0], [1.60280442E12, 8541.0], [1.60280424E12, 8322.0], [1.60280454E12, 3126.0], [1.60280436E12, 3170.0], [1.60280418E12, 3700.0], [1.60280466E12, 4039.0], [1.60280448E12, 5865.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6028043E12, 201.7859998202324], [1.6028046E12, 189.0], [1.60280442E12, 195.5199996948242], [1.60280424E12, 201.73299984812738], [1.60280454E12, 194.45299982905388], [1.60280436E12, 185.13999965190888], [1.60280418E12, 203.0], [1.60280466E12, 308.1189995729923], [1.60280448E12, 194.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6028043E12, 202.0], [1.6028046E12, 189.0], [1.60280442E12, 196.0], [1.60280424E12, 202.6126001214981], [1.60280454E12, 195.1966001367569], [1.60280436E12, 186.0], [1.60280418E12, 203.0], [1.60280466E12, 309.73090017080307], [1.60280448E12, 194.08840006828308]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6028043E12, 202.0], [1.6028046E12, 189.0], [1.60280442E12, 196.0], [1.60280424E12, 202.10299984812735], [1.60280454E12, 194.81149991452693], [1.60280436E12, 185.86999982595444], [1.60280418E12, 203.0], [1.60280466E12, 309.0144997864962], [1.60280448E12, 194.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6028043E12, 184.0], [1.6028046E12, 185.0], [1.60280442E12, 188.0], [1.60280424E12, 194.0], [1.60280454E12, 189.0], [1.60280436E12, 176.0], [1.60280418E12, 203.0], [1.60280466E12, 301.0], [1.60280448E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6028043E12, 601.0], [1.6028046E12, 634.0], [1.60280442E12, 754.0], [1.60280424E12, 781.5], [1.60280454E12, 647.5], [1.60280436E12, 638.0], [1.60280418E12, 816.0], [1.60280466E12, 920.5], [1.60280448E12, 713.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280466E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 392.0, "minX": 1.0, "maxY": 2739.0, "series": [{"data": [[2.0, 1239.5], [3.0, 1105.0], [4.0, 1097.5], [5.0, 747.0], [6.0, 1140.5], [7.0, 1054.0], [8.0, 1013.0], [9.0, 945.0], [10.0, 899.0], [11.0, 825.0], [12.0, 776.0], [13.0, 754.0], [14.0, 658.5], [15.0, 618.0], [1.0, 2739.0], [16.0, 540.5], [17.0, 577.5], [18.0, 530.5], [19.0, 444.0], [20.0, 420.0], [21.0, 408.0], [22.0, 396.5], [23.0, 418.0], [24.0, 424.5], [25.0, 403.5], [26.0, 392.5], [28.0, 392.0], [30.0, 431.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 391.5, "minX": 1.0, "maxY": 2731.5, "series": [{"data": [[2.0, 1236.0], [3.0, 1102.0], [4.0, 1096.0], [5.0, 745.0], [6.0, 1139.0], [7.0, 1051.0], [8.0, 1012.0], [9.0, 943.0], [10.0, 896.5], [11.0, 823.0], [12.0, 775.0], [13.0, 753.0], [14.0, 655.0], [15.0, 616.0], [1.0, 2731.5], [16.0, 539.0], [17.0, 577.0], [18.0, 530.0], [19.0, 443.5], [20.0, 419.5], [21.0, 408.0], [22.0, 396.5], [23.0, 418.0], [24.0, 424.5], [25.0, 403.0], [26.0, 392.0], [28.0, 391.5], [30.0, 431.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.60280418E12, "maxY": 12.716666666666667, "series": [{"data": [[1.6028043E12, 12.55], [1.6028046E12, 12.716666666666667], [1.60280442E12, 10.65], [1.60280424E12, 10.6], [1.60280454E12, 11.933333333333334], [1.60280436E12, 12.15], [1.60280418E12, 0.85], [1.60280466E12, 3.1333333333333333], [1.60280448E12, 11.916666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280466E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.60280418E12, "maxY": 12.716666666666667, "series": [{"data": [[1.6028043E12, 12.55], [1.6028046E12, 12.716666666666667], [1.60280442E12, 10.65], [1.60280424E12, 10.6], [1.60280454E12, 11.933333333333334], [1.60280436E12, 12.15], [1.60280418E12, 0.6833333333333333], [1.60280466E12, 3.3], [1.60280448E12, 11.916666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280466E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.60280418E12, "maxY": 12.716666666666667, "series": [{"data": [[1.6028043E12, 12.55], [1.6028046E12, 12.716666666666667], [1.60280442E12, 10.65], [1.60280424E12, 10.6], [1.60280454E12, 11.933333333333334], [1.60280436E12, 12.15], [1.60280418E12, 0.6833333333333333], [1.60280466E12, 3.3], [1.60280448E12, 11.916666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280466E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.60280418E12, "maxY": 12.716666666666667, "series": [{"data": [[1.6028043E12, 12.55], [1.6028046E12, 12.716666666666667], [1.60280442E12, 10.65], [1.60280424E12, 10.6], [1.60280454E12, 11.933333333333334], [1.60280436E12, 12.15], [1.60280418E12, 0.6833333333333333], [1.60280466E12, 3.3], [1.60280448E12, 11.916666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280466E12, "title": "Total Transactions Per Second"}},
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

