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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 8666.0, "series": [{"data": [[0.0, 182.0], [0.1, 187.0], [0.2, 188.0], [0.3, 189.0], [0.4, 191.0], [0.5, 192.0], [0.6, 193.0], [0.7, 194.0], [0.8, 195.0], [0.9, 196.0], [1.0, 196.0], [1.1, 197.0], [1.2, 198.0], [1.3, 198.0], [1.4, 200.0], [1.5, 200.0], [1.6, 201.0], [1.7, 201.0], [1.8, 202.0], [1.9, 202.0], [2.0, 203.0], [2.1, 204.0], [2.2, 204.0], [2.3, 205.0], [2.4, 206.0], [2.5, 207.0], [2.6, 207.0], [2.7, 208.0], [2.8, 209.0], [2.9, 210.0], [3.0, 211.0], [3.1, 211.0], [3.2, 212.0], [3.3, 213.0], [3.4, 213.0], [3.5, 214.0], [3.6, 215.0], [3.7, 215.0], [3.8, 216.0], [3.9, 216.0], [4.0, 217.0], [4.1, 218.0], [4.2, 219.0], [4.3, 220.0], [4.4, 220.0], [4.5, 221.0], [4.6, 221.0], [4.7, 223.0], [4.8, 224.0], [4.9, 225.0], [5.0, 225.0], [5.1, 226.0], [5.2, 227.0], [5.3, 228.0], [5.4, 229.0], [5.5, 230.0], [5.6, 230.0], [5.7, 231.0], [5.8, 232.0], [5.9, 232.0], [6.0, 233.0], [6.1, 234.0], [6.2, 234.0], [6.3, 235.0], [6.4, 236.0], [6.5, 236.0], [6.6, 236.0], [6.7, 238.0], [6.8, 239.0], [6.9, 240.0], [7.0, 241.0], [7.1, 242.0], [7.2, 243.0], [7.3, 244.0], [7.4, 245.0], [7.5, 247.0], [7.6, 249.0], [7.7, 249.0], [7.8, 251.0], [7.9, 252.0], [8.0, 254.0], [8.1, 255.0], [8.2, 256.0], [8.3, 258.0], [8.4, 259.0], [8.5, 261.0], [8.6, 262.0], [8.7, 263.0], [8.8, 264.0], [8.9, 265.0], [9.0, 267.0], [9.1, 268.0], [9.2, 269.0], [9.3, 269.0], [9.4, 270.0], [9.5, 270.0], [9.6, 271.0], [9.7, 272.0], [9.8, 272.0], [9.9, 274.0], [10.0, 275.0], [10.1, 276.0], [10.2, 276.0], [10.3, 277.0], [10.4, 277.0], [10.5, 278.0], [10.6, 279.0], [10.7, 279.0], [10.8, 280.0], [10.9, 281.0], [11.0, 282.0], [11.1, 283.0], [11.2, 284.0], [11.3, 285.0], [11.4, 286.0], [11.5, 287.0], [11.6, 288.0], [11.7, 289.0], [11.8, 290.0], [11.9, 291.0], [12.0, 292.0], [12.1, 292.0], [12.2, 293.0], [12.3, 294.0], [12.4, 296.0], [12.5, 297.0], [12.6, 298.0], [12.7, 299.0], [12.8, 301.0], [12.9, 302.0], [13.0, 303.0], [13.1, 304.0], [13.2, 305.0], [13.3, 306.0], [13.4, 307.0], [13.5, 308.0], [13.6, 309.0], [13.7, 311.0], [13.8, 311.0], [13.9, 313.0], [14.0, 313.0], [14.1, 314.0], [14.2, 315.0], [14.3, 317.0], [14.4, 318.0], [14.5, 319.0], [14.6, 319.0], [14.7, 320.0], [14.8, 322.0], [14.9, 323.0], [15.0, 323.0], [15.1, 323.0], [15.2, 325.0], [15.3, 325.0], [15.4, 326.0], [15.5, 327.0], [15.6, 329.0], [15.7, 331.0], [15.8, 332.0], [15.9, 334.0], [16.0, 335.0], [16.1, 337.0], [16.2, 338.0], [16.3, 342.0], [16.4, 343.0], [16.5, 345.0], [16.6, 347.0], [16.7, 349.0], [16.8, 350.0], [16.9, 352.0], [17.0, 355.0], [17.1, 356.0], [17.2, 357.0], [17.3, 359.0], [17.4, 362.0], [17.5, 364.0], [17.6, 365.0], [17.7, 366.0], [17.8, 368.0], [17.9, 369.0], [18.0, 371.0], [18.1, 372.0], [18.2, 376.0], [18.3, 376.0], [18.4, 378.0], [18.5, 380.0], [18.6, 381.0], [18.7, 383.0], [18.8, 384.0], [18.9, 384.0], [19.0, 385.0], [19.1, 386.0], [19.2, 387.0], [19.3, 388.0], [19.4, 389.0], [19.5, 390.0], [19.6, 391.0], [19.7, 393.0], [19.8, 394.0], [19.9, 394.0], [20.0, 395.0], [20.1, 396.0], [20.2, 397.0], [20.3, 397.0], [20.4, 399.0], [20.5, 399.0], [20.6, 401.0], [20.7, 402.0], [20.8, 402.0], [20.9, 403.0], [21.0, 403.0], [21.1, 404.0], [21.2, 404.0], [21.3, 405.0], [21.4, 405.0], [21.5, 406.0], [21.6, 407.0], [21.7, 407.0], [21.8, 408.0], [21.9, 408.0], [22.0, 409.0], [22.1, 410.0], [22.2, 410.0], [22.3, 411.0], [22.4, 412.0], [22.5, 413.0], [22.6, 414.0], [22.7, 414.0], [22.8, 415.0], [22.9, 416.0], [23.0, 416.0], [23.1, 417.0], [23.2, 418.0], [23.3, 419.0], [23.4, 420.0], [23.5, 420.0], [23.6, 421.0], [23.7, 422.0], [23.8, 423.0], [23.9, 424.0], [24.0, 425.0], [24.1, 426.0], [24.2, 427.0], [24.3, 428.0], [24.4, 429.0], [24.5, 429.0], [24.6, 430.0], [24.7, 431.0], [24.8, 432.0], [24.9, 432.0], [25.0, 433.0], [25.1, 434.0], [25.2, 434.0], [25.3, 435.0], [25.4, 436.0], [25.5, 437.0], [25.6, 439.0], [25.7, 439.0], [25.8, 440.0], [25.9, 441.0], [26.0, 442.0], [26.1, 443.0], [26.2, 444.0], [26.3, 444.0], [26.4, 445.0], [26.5, 447.0], [26.6, 447.0], [26.7, 447.0], [26.8, 448.0], [26.9, 448.0], [27.0, 449.0], [27.1, 450.0], [27.2, 451.0], [27.3, 453.0], [27.4, 455.0], [27.5, 455.0], [27.6, 456.0], [27.7, 457.0], [27.8, 458.0], [27.9, 459.0], [28.0, 461.0], [28.1, 461.0], [28.2, 462.0], [28.3, 463.0], [28.4, 463.0], [28.5, 464.0], [28.6, 465.0], [28.7, 465.0], [28.8, 466.0], [28.9, 467.0], [29.0, 467.0], [29.1, 468.0], [29.2, 468.0], [29.3, 469.0], [29.4, 470.0], [29.5, 470.0], [29.6, 471.0], [29.7, 474.0], [29.8, 474.0], [29.9, 475.0], [30.0, 477.0], [30.1, 478.0], [30.2, 479.0], [30.3, 480.0], [30.4, 482.0], [30.5, 482.0], [30.6, 483.0], [30.7, 484.0], [30.8, 485.0], [30.9, 487.0], [31.0, 487.0], [31.1, 489.0], [31.2, 490.0], [31.3, 491.0], [31.4, 491.0], [31.5, 492.0], [31.6, 493.0], [31.7, 494.0], [31.8, 495.0], [31.9, 496.0], [32.0, 496.0], [32.1, 497.0], [32.2, 498.0], [32.3, 499.0], [32.4, 499.0], [32.5, 501.0], [32.6, 502.0], [32.7, 504.0], [32.8, 505.0], [32.9, 506.0], [33.0, 507.0], [33.1, 510.0], [33.2, 511.0], [33.3, 512.0], [33.4, 513.0], [33.5, 514.0], [33.6, 516.0], [33.7, 517.0], [33.8, 517.0], [33.9, 519.0], [34.0, 521.0], [34.1, 522.0], [34.2, 523.0], [34.3, 524.0], [34.4, 525.0], [34.5, 526.0], [34.6, 527.0], [34.7, 528.0], [34.8, 530.0], [34.9, 530.0], [35.0, 531.0], [35.1, 532.0], [35.2, 534.0], [35.3, 534.0], [35.4, 535.0], [35.5, 535.0], [35.6, 536.0], [35.7, 537.0], [35.8, 537.0], [35.9, 539.0], [36.0, 539.0], [36.1, 541.0], [36.2, 541.0], [36.3, 542.0], [36.4, 543.0], [36.5, 544.0], [36.6, 544.0], [36.7, 546.0], [36.8, 547.0], [36.9, 547.0], [37.0, 548.0], [37.1, 548.0], [37.2, 549.0], [37.3, 550.0], [37.4, 552.0], [37.5, 552.0], [37.6, 553.0], [37.7, 554.0], [37.8, 555.0], [37.9, 556.0], [38.0, 556.0], [38.1, 557.0], [38.2, 558.0], [38.3, 560.0], [38.4, 561.0], [38.5, 562.0], [38.6, 563.0], [38.7, 564.0], [38.8, 565.0], [38.9, 566.0], [39.0, 568.0], [39.1, 568.0], [39.2, 569.0], [39.3, 570.0], [39.4, 570.0], [39.5, 571.0], [39.6, 571.0], [39.7, 573.0], [39.8, 574.0], [39.9, 575.0], [40.0, 576.0], [40.1, 578.0], [40.2, 579.0], [40.3, 580.0], [40.4, 580.0], [40.5, 581.0], [40.6, 582.0], [40.7, 583.0], [40.8, 585.0], [40.9, 585.0], [41.0, 586.0], [41.1, 588.0], [41.2, 589.0], [41.3, 590.0], [41.4, 590.0], [41.5, 592.0], [41.6, 592.0], [41.7, 593.0], [41.8, 594.0], [41.9, 595.0], [42.0, 597.0], [42.1, 597.0], [42.2, 600.0], [42.3, 601.0], [42.4, 601.0], [42.5, 602.0], [42.6, 603.0], [42.7, 604.0], [42.8, 605.0], [42.9, 606.0], [43.0, 608.0], [43.1, 609.0], [43.2, 610.0], [43.3, 611.0], [43.4, 612.0], [43.5, 613.0], [43.6, 614.0], [43.7, 614.0], [43.8, 615.0], [43.9, 615.0], [44.0, 617.0], [44.1, 618.0], [44.2, 620.0], [44.3, 622.0], [44.4, 622.0], [44.5, 623.0], [44.6, 624.0], [44.7, 625.0], [44.8, 626.0], [44.9, 627.0], [45.0, 627.0], [45.1, 629.0], [45.2, 632.0], [45.3, 634.0], [45.4, 635.0], [45.5, 636.0], [45.6, 637.0], [45.7, 637.0], [45.8, 639.0], [45.9, 640.0], [46.0, 641.0], [46.1, 643.0], [46.2, 644.0], [46.3, 644.0], [46.4, 646.0], [46.5, 647.0], [46.6, 647.0], [46.7, 648.0], [46.8, 649.0], [46.9, 650.0], [47.0, 651.0], [47.1, 651.0], [47.2, 652.0], [47.3, 653.0], [47.4, 654.0], [47.5, 656.0], [47.6, 657.0], [47.7, 657.0], [47.8, 660.0], [47.9, 662.0], [48.0, 663.0], [48.1, 665.0], [48.2, 665.0], [48.3, 667.0], [48.4, 668.0], [48.5, 670.0], [48.6, 672.0], [48.7, 673.0], [48.8, 674.0], [48.9, 677.0], [49.0, 678.0], [49.1, 679.0], [49.2, 680.0], [49.3, 683.0], [49.4, 685.0], [49.5, 686.0], [49.6, 687.0], [49.7, 688.0], [49.8, 690.0], [49.9, 691.0], [50.0, 693.0], [50.1, 694.0], [50.2, 695.0], [50.3, 696.0], [50.4, 698.0], [50.5, 699.0], [50.6, 700.0], [50.7, 701.0], [50.8, 702.0], [50.9, 706.0], [51.0, 707.0], [51.1, 708.0], [51.2, 709.0], [51.3, 712.0], [51.4, 715.0], [51.5, 716.0], [51.6, 718.0], [51.7, 719.0], [51.8, 721.0], [51.9, 722.0], [52.0, 725.0], [52.1, 726.0], [52.2, 727.0], [52.3, 729.0], [52.4, 730.0], [52.5, 733.0], [52.6, 736.0], [52.7, 738.0], [52.8, 740.0], [52.9, 741.0], [53.0, 743.0], [53.1, 745.0], [53.2, 747.0], [53.3, 748.0], [53.4, 750.0], [53.5, 752.0], [53.6, 753.0], [53.7, 756.0], [53.8, 758.0], [53.9, 760.0], [54.0, 760.0], [54.1, 762.0], [54.2, 764.0], [54.3, 767.0], [54.4, 768.0], [54.5, 769.0], [54.6, 770.0], [54.7, 772.0], [54.8, 773.0], [54.9, 776.0], [55.0, 778.0], [55.1, 779.0], [55.2, 783.0], [55.3, 784.0], [55.4, 786.0], [55.5, 788.0], [55.6, 789.0], [55.7, 791.0], [55.8, 793.0], [55.9, 794.0], [56.0, 795.0], [56.1, 796.0], [56.2, 797.0], [56.3, 798.0], [56.4, 800.0], [56.5, 802.0], [56.6, 803.0], [56.7, 804.0], [56.8, 805.0], [56.9, 807.0], [57.0, 808.0], [57.1, 809.0], [57.2, 810.0], [57.3, 811.0], [57.4, 812.0], [57.5, 813.0], [57.6, 815.0], [57.7, 815.0], [57.8, 817.0], [57.9, 819.0], [58.0, 820.0], [58.1, 821.0], [58.2, 822.0], [58.3, 824.0], [58.4, 824.0], [58.5, 826.0], [58.6, 828.0], [58.7, 831.0], [58.8, 833.0], [58.9, 834.0], [59.0, 838.0], [59.1, 839.0], [59.2, 841.0], [59.3, 843.0], [59.4, 845.0], [59.5, 848.0], [59.6, 849.0], [59.7, 850.0], [59.8, 855.0], [59.9, 855.0], [60.0, 857.0], [60.1, 858.0], [60.2, 860.0], [60.3, 861.0], [60.4, 861.0], [60.5, 864.0], [60.6, 866.0], [60.7, 867.0], [60.8, 869.0], [60.9, 872.0], [61.0, 874.0], [61.1, 877.0], [61.2, 878.0], [61.3, 880.0], [61.4, 882.0], [61.5, 884.0], [61.6, 885.0], [61.7, 887.0], [61.8, 888.0], [61.9, 890.0], [62.0, 891.0], [62.1, 893.0], [62.2, 895.0], [62.3, 897.0], [62.4, 898.0], [62.5, 900.0], [62.6, 901.0], [62.7, 903.0], [62.8, 904.0], [62.9, 905.0], [63.0, 908.0], [63.1, 910.0], [63.2, 913.0], [63.3, 914.0], [63.4, 914.0], [63.5, 917.0], [63.6, 918.0], [63.7, 920.0], [63.8, 923.0], [63.9, 924.0], [64.0, 927.0], [64.1, 929.0], [64.2, 931.0], [64.3, 933.0], [64.4, 936.0], [64.5, 938.0], [64.6, 940.0], [64.7, 941.0], [64.8, 943.0], [64.9, 944.0], [65.0, 945.0], [65.1, 948.0], [65.2, 952.0], [65.3, 953.0], [65.4, 954.0], [65.5, 955.0], [65.6, 957.0], [65.7, 959.0], [65.8, 961.0], [65.9, 962.0], [66.0, 963.0], [66.1, 964.0], [66.2, 966.0], [66.3, 967.0], [66.4, 970.0], [66.5, 970.0], [66.6, 974.0], [66.7, 976.0], [66.8, 978.0], [66.9, 981.0], [67.0, 983.0], [67.1, 985.0], [67.2, 987.0], [67.3, 988.0], [67.4, 990.0], [67.5, 990.0], [67.6, 993.0], [67.7, 993.0], [67.8, 996.0], [67.9, 999.0], [68.0, 1001.0], [68.1, 1003.0], [68.2, 1005.0], [68.3, 1007.0], [68.4, 1008.0], [68.5, 1009.0], [68.6, 1012.0], [68.7, 1015.0], [68.8, 1016.0], [68.9, 1016.0], [69.0, 1017.0], [69.1, 1019.0], [69.2, 1020.0], [69.3, 1021.0], [69.4, 1025.0], [69.5, 1026.0], [69.6, 1028.0], [69.7, 1030.0], [69.8, 1031.0], [69.9, 1033.0], [70.0, 1034.0], [70.1, 1036.0], [70.2, 1039.0], [70.3, 1039.0], [70.4, 1040.0], [70.5, 1041.0], [70.6, 1045.0], [70.7, 1047.0], [70.8, 1048.0], [70.9, 1049.0], [71.0, 1051.0], [71.1, 1051.0], [71.2, 1052.0], [71.3, 1055.0], [71.4, 1057.0], [71.5, 1058.0], [71.6, 1060.0], [71.7, 1062.0], [71.8, 1063.0], [71.9, 1065.0], [72.0, 1067.0], [72.1, 1068.0], [72.2, 1070.0], [72.3, 1072.0], [72.4, 1073.0], [72.5, 1075.0], [72.6, 1076.0], [72.7, 1080.0], [72.8, 1081.0], [72.9, 1084.0], [73.0, 1085.0], [73.1, 1087.0], [73.2, 1089.0], [73.3, 1090.0], [73.4, 1092.0], [73.5, 1094.0], [73.6, 1097.0], [73.7, 1099.0], [73.8, 1102.0], [73.9, 1103.0], [74.0, 1105.0], [74.1, 1107.0], [74.2, 1108.0], [74.3, 1112.0], [74.4, 1114.0], [74.5, 1116.0], [74.6, 1118.0], [74.7, 1120.0], [74.8, 1122.0], [74.9, 1123.0], [75.0, 1125.0], [75.1, 1127.0], [75.2, 1131.0], [75.3, 1133.0], [75.4, 1134.0], [75.5, 1136.0], [75.6, 1137.0], [75.7, 1139.0], [75.8, 1140.0], [75.9, 1143.0], [76.0, 1146.0], [76.1, 1149.0], [76.2, 1150.0], [76.3, 1151.0], [76.4, 1153.0], [76.5, 1156.0], [76.6, 1158.0], [76.7, 1162.0], [76.8, 1165.0], [76.9, 1168.0], [77.0, 1172.0], [77.1, 1174.0], [77.2, 1176.0], [77.3, 1179.0], [77.4, 1183.0], [77.5, 1185.0], [77.6, 1189.0], [77.7, 1191.0], [77.8, 1193.0], [77.9, 1199.0], [78.0, 1202.0], [78.1, 1205.0], [78.2, 1209.0], [78.3, 1210.0], [78.4, 1214.0], [78.5, 1215.0], [78.6, 1222.0], [78.7, 1224.0], [78.8, 1227.0], [78.9, 1229.0], [79.0, 1233.0], [79.1, 1237.0], [79.2, 1238.0], [79.3, 1240.0], [79.4, 1241.0], [79.5, 1244.0], [79.6, 1245.0], [79.7, 1247.0], [79.8, 1249.0], [79.9, 1252.0], [80.0, 1258.0], [80.1, 1261.0], [80.2, 1263.0], [80.3, 1264.0], [80.4, 1266.0], [80.5, 1267.0], [80.6, 1271.0], [80.7, 1273.0], [80.8, 1275.0], [80.9, 1276.0], [81.0, 1278.0], [81.1, 1280.0], [81.2, 1282.0], [81.3, 1283.0], [81.4, 1285.0], [81.5, 1286.0], [81.6, 1288.0], [81.7, 1291.0], [81.8, 1294.0], [81.9, 1296.0], [82.0, 1297.0], [82.1, 1301.0], [82.2, 1302.0], [82.3, 1303.0], [82.4, 1305.0], [82.5, 1307.0], [82.6, 1309.0], [82.7, 1313.0], [82.8, 1315.0], [82.9, 1317.0], [83.0, 1319.0], [83.1, 1322.0], [83.2, 1326.0], [83.3, 1327.0], [83.4, 1329.0], [83.5, 1331.0], [83.6, 1332.0], [83.7, 1335.0], [83.8, 1336.0], [83.9, 1338.0], [84.0, 1339.0], [84.1, 1341.0], [84.2, 1345.0], [84.3, 1347.0], [84.4, 1349.0], [84.5, 1351.0], [84.6, 1352.0], [84.7, 1356.0], [84.8, 1360.0], [84.9, 1362.0], [85.0, 1365.0], [85.1, 1367.0], [85.2, 1369.0], [85.3, 1372.0], [85.4, 1373.0], [85.5, 1374.0], [85.6, 1376.0], [85.7, 1379.0], [85.8, 1382.0], [85.9, 1382.0], [86.0, 1385.0], [86.1, 1387.0], [86.2, 1389.0], [86.3, 1393.0], [86.4, 1394.0], [86.5, 1396.0], [86.6, 1400.0], [86.7, 1402.0], [86.8, 1405.0], [86.9, 1409.0], [87.0, 1412.0], [87.1, 1414.0], [87.2, 1416.0], [87.3, 1418.0], [87.4, 1423.0], [87.5, 1426.0], [87.6, 1429.0], [87.7, 1431.0], [87.8, 1435.0], [87.9, 1441.0], [88.0, 1444.0], [88.1, 1449.0], [88.2, 1451.0], [88.3, 1454.0], [88.4, 1458.0], [88.5, 1466.0], [88.6, 1474.0], [88.7, 1477.0], [88.8, 1481.0], [88.9, 1484.0], [89.0, 1489.0], [89.1, 1493.0], [89.2, 1495.0], [89.3, 1497.0], [89.4, 1500.0], [89.5, 1509.0], [89.6, 1512.0], [89.7, 1516.0], [89.8, 1519.0], [89.9, 1525.0], [90.0, 1528.0], [90.1, 1535.0], [90.2, 1540.0], [90.3, 1551.0], [90.4, 1557.0], [90.5, 1560.0], [90.6, 1569.0], [90.7, 1572.0], [90.8, 1574.0], [90.9, 1579.0], [91.0, 1586.0], [91.1, 1593.0], [91.2, 1597.0], [91.3, 1601.0], [91.4, 1608.0], [91.5, 1614.0], [91.6, 1618.0], [91.7, 1623.0], [91.8, 1627.0], [91.9, 1634.0], [92.0, 1646.0], [92.1, 1648.0], [92.2, 1651.0], [92.3, 1660.0], [92.4, 1663.0], [92.5, 1670.0], [92.6, 1677.0], [92.7, 1688.0], [92.8, 1702.0], [92.9, 1713.0], [93.0, 1722.0], [93.1, 1742.0], [93.2, 1749.0], [93.3, 1756.0], [93.4, 1768.0], [93.5, 1777.0], [93.6, 1782.0], [93.7, 1790.0], [93.8, 1806.0], [93.9, 1817.0], [94.0, 1822.0], [94.1, 1833.0], [94.2, 1844.0], [94.3, 1853.0], [94.4, 1858.0], [94.5, 1865.0], [94.6, 1878.0], [94.7, 1886.0], [94.8, 1901.0], [94.9, 1923.0], [95.0, 1931.0], [95.1, 1944.0], [95.2, 1948.0], [95.3, 1958.0], [95.4, 1964.0], [95.5, 1980.0], [95.6, 1991.0], [95.7, 2010.0], [95.8, 2015.0], [95.9, 2033.0], [96.0, 2052.0], [96.1, 2076.0], [96.2, 2088.0], [96.3, 2099.0], [96.4, 2112.0], [96.5, 2125.0], [96.6, 2135.0], [96.7, 2153.0], [96.8, 2161.0], [96.9, 2179.0], [97.0, 2187.0], [97.1, 2199.0], [97.2, 2209.0], [97.3, 2222.0], [97.4, 2244.0], [97.5, 2259.0], [97.6, 2296.0], [97.7, 2328.0], [97.8, 2342.0], [97.9, 2368.0], [98.0, 2382.0], [98.1, 2404.0], [98.2, 2442.0], [98.3, 2482.0], [98.4, 2520.0], [98.5, 2554.0], [98.6, 2585.0], [98.7, 2660.0], [98.8, 2710.0], [98.9, 2781.0], [99.0, 2835.0], [99.1, 2993.0], [99.2, 3077.0], [99.3, 3133.0], [99.4, 3248.0], [99.5, 3403.0], [99.6, 3613.0], [99.7, 4256.0], [99.8, 4688.0], [99.9, 5050.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 617.0, "series": [{"data": [[600.0, 435.0], [700.0, 303.0], [800.0, 313.0], [900.0, 286.0], [1000.0, 302.0], [1100.0, 216.0], [1200.0, 216.0], [1300.0, 234.0], [1400.0, 145.0], [1500.0, 96.0], [1600.0, 80.0], [1700.0, 51.0], [1800.0, 54.0], [1900.0, 44.0], [2000.0, 34.0], [2100.0, 43.0], [2300.0, 25.0], [2200.0, 25.0], [2400.0, 13.0], [2500.0, 16.0], [2600.0, 6.0], [2700.0, 7.0], [2800.0, 6.0], [2900.0, 5.0], [3000.0, 8.0], [3100.0, 3.0], [3200.0, 6.0], [3300.0, 3.0], [3400.0, 3.0], [3500.0, 2.0], [3700.0, 1.0], [3600.0, 1.0], [3900.0, 1.0], [4200.0, 2.0], [4100.0, 1.0], [4300.0, 2.0], [4500.0, 1.0], [4600.0, 2.0], [4800.0, 1.0], [4700.0, 1.0], [4900.0, 1.0], [5000.0, 2.0], [5200.0, 1.0], [5300.0, 2.0], [5400.0, 1.0], [8600.0, 1.0], [100.0, 71.0], [200.0, 589.0], [300.0, 405.0], [400.0, 617.0], [500.0, 507.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 549.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2957.0, "series": [{"data": [[0.0, 1684.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2957.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 549.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.844290657439446, "minX": 1.60401732E12, "maxY": 10.0, "series": [{"data": [[1.60401768E12, 10.0], [1.60401738E12, 10.0], [1.60401756E12, 10.0], [1.60401774E12, 9.844290657439446], [1.60401744E12, 10.0], [1.60401762E12, 10.0], [1.60401732E12, 10.0], [1.6040175E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401774E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 321.0, "minX": 1.0, "maxY": 2738.0, "series": [{"data": [[8.0, 321.0], [4.0, 1102.0], [2.0, 2738.0], [1.0, 2512.0], [9.0, 479.0], [10.0, 849.5421733256122], [5.0, 1031.0], [6.0, 1382.0], [3.0, 867.0], [7.0, 1608.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 850.3888246628122]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2177.0666666666666, "minX": 1.60401732E12, "maxY": 3636812.6333333333, "series": [{"data": [[1.60401768E12, 3222019.9833333334], [1.60401738E12, 2976014.2666666666], [1.60401756E12, 2991647.9166666665], [1.60401774E12, 1520735.2666666666], [1.60401744E12, 3636812.6333333333], [1.60401762E12, 3421421.1666666665], [1.60401732E12, 2899284.2], [1.6040175E12, 3304603.6333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401768E12, 6158.433333333333], [1.60401738E12, 5160.166666666667], [1.60401756E12, 4568.216666666666], [1.60401774E12, 2177.0666666666666], [1.60401744E12, 5505.433333333333], [1.60401762E12, 5669.5], [1.60401732E12, 4102.466666666666], [1.6040175E12, 5236.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401774E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 737.7364532019707, "minX": 1.60401732E12, "maxY": 1025.9792387543257, "series": [{"data": [[1.60401768E12, 737.7364532019707], [1.60401738E12, 853.7400000000001], [1.60401756E12, 945.6823899371072], [1.60401774E12, 1025.9792387543257], [1.60401744E12, 823.9268965517236], [1.60401762E12, 782.8928104575162], [1.60401732E12, 921.1971830985906], [1.6040175E12, 862.4402877697838]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401774E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 736.3608374384235, "minX": 1.60401732E12, "maxY": 1023.7889273356401, "series": [{"data": [[1.60401768E12, 736.3608374384235], [1.60401738E12, 851.7899999999996], [1.60401756E12, 944.1650943396229], [1.60401774E12, 1023.7889273356401], [1.60401744E12, 821.6703448275863], [1.60401762E12, 781.1921568627453], [1.60401732E12, 918.9683098591548], [1.6040175E12, 860.3338129496398]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401774E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.013071895424836614, "minX": 1.60401732E12, "maxY": 0.1443661971830986, "series": [{"data": [[1.60401768E12, 0.02832512315270937], [1.60401738E12, 0.019999999999999997], [1.60401756E12, 0.014150943396226436], [1.60401774E12, 0.024221453287197253], [1.60401744E12, 0.016551724137931035], [1.60401762E12, 0.013071895424836614], [1.60401732E12, 0.1443661971830986], [1.6040175E12, 0.015827338129496403]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401774E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.60401732E12, "maxY": 8666.0, "series": [{"data": [[1.60401768E12, 3403.0], [1.60401738E12, 4335.0], [1.60401756E12, 8666.0], [1.60401774E12, 3498.0], [1.60401744E12, 3436.0], [1.60401762E12, 3224.0], [1.60401732E12, 5050.0], [1.6040175E12, 4679.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401768E12, 189.0], [1.60401738E12, 195.30899983286858], [1.60401756E12, 204.73299984812738], [1.60401774E12, 230.8599982023239], [1.60401744E12, 196.53399982690811], [1.60401762E12, 196.0], [1.60401732E12, 198.0], [1.6040175E12, 192.52799966812134]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401768E12, 189.0], [1.60401738E12, 195.93990006685257], [1.60401756E12, 205.30630006074907], [1.60401774E12, 237.64600071907043], [1.60401744E12, 197.56220020771028], [1.60401762E12, 197.1668001461029], [1.60401732E12, 198.0], [1.6040175E12, 193.78080013275147]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401768E12, 189.0], [1.60401738E12, 195.6594999164343], [1.60401756E12, 205.05149992406368], [1.60401774E12, 234.62999910116196], [1.60401744E12, 196.89699991345407], [1.60401762E12, 196.55399981737136], [1.60401732E12, 198.0], [1.6040175E12, 193.22399983406066]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401768E12, 182.0], [1.60401738E12, 190.0], [1.60401756E12, 189.0], [1.60401774E12, 206.0], [1.60401744E12, 188.0], [1.60401762E12, 187.0], [1.60401732E12, 191.0], [1.6040175E12, 186.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401768E12, 562.0], [1.60401738E12, 646.0], [1.60401756E12, 783.0], [1.60401774E12, 896.0], [1.60401744E12, 674.0], [1.60401762E12, 631.0], [1.60401732E12, 787.5], [1.6040175E12, 706.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401774E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 406.0, "minX": 2.0, "maxY": 1807.0, "series": [{"data": [[2.0, 1807.0], [3.0, 1373.0], [4.0, 1000.5], [5.0, 1396.0], [6.0, 1218.5], [7.0, 1045.0], [8.0, 1016.5], [9.0, 979.5], [10.0, 900.0], [11.0, 806.0], [12.0, 810.0], [13.0, 709.0], [14.0, 677.5], [15.0, 586.5], [16.0, 556.5], [17.0, 530.0], [18.0, 467.5], [19.0, 435.0], [20.0, 431.0], [21.0, 448.0], [22.0, 415.5], [23.0, 406.5], [24.0, 424.5], [25.0, 454.0], [26.0, 409.5], [28.0, 406.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 405.5, "minX": 2.0, "maxY": 1807.0, "series": [{"data": [[2.0, 1807.0], [3.0, 1364.0], [4.0, 999.5], [5.0, 1394.0], [6.0, 1217.0], [7.0, 1042.0], [8.0, 1011.0], [9.0, 976.5], [10.0, 896.0], [11.0, 805.0], [12.0, 808.5], [13.0, 709.0], [14.0, 676.5], [15.0, 586.0], [16.0, 556.5], [17.0, 530.0], [18.0, 466.5], [19.0, 434.0], [20.0, 431.0], [21.0, 448.0], [22.0, 415.0], [23.0, 405.5], [24.0, 424.0], [25.0, 454.0], [26.0, 409.0], [28.0, 405.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.65, "minX": 1.60401732E12, "maxY": 13.533333333333333, "series": [{"data": [[1.60401768E12, 13.533333333333333], [1.60401738E12, 11.666666666666666], [1.60401756E12, 10.6], [1.60401774E12, 4.65], [1.60401744E12, 12.083333333333334], [1.60401762E12, 12.75], [1.60401732E12, 9.633333333333333], [1.6040175E12, 11.583333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401774E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.816666666666666, "minX": 1.60401732E12, "maxY": 13.533333333333333, "series": [{"data": [[1.60401768E12, 13.533333333333333], [1.60401738E12, 11.666666666666666], [1.60401756E12, 10.6], [1.60401774E12, 4.816666666666666], [1.60401744E12, 12.083333333333334], [1.60401762E12, 12.75], [1.60401732E12, 9.466666666666667], [1.6040175E12, 11.583333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401774E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.816666666666666, "minX": 1.60401732E12, "maxY": 13.533333333333333, "series": [{"data": [[1.60401768E12, 13.533333333333333], [1.60401738E12, 11.666666666666666], [1.60401756E12, 10.6], [1.60401774E12, 4.816666666666666], [1.60401744E12, 12.083333333333334], [1.60401762E12, 12.75], [1.60401732E12, 9.466666666666667], [1.6040175E12, 11.583333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401774E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.816666666666666, "minX": 1.60401732E12, "maxY": 13.533333333333333, "series": [{"data": [[1.60401768E12, 13.533333333333333], [1.60401738E12, 11.666666666666666], [1.60401756E12, 10.6], [1.60401774E12, 4.816666666666666], [1.60401744E12, 12.083333333333334], [1.60401762E12, 12.75], [1.60401732E12, 9.466666666666667], [1.6040175E12, 11.583333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401774E12, "title": "Total Transactions Per Second"}},
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

