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
        data: {"result": {"minY": 181.0, "minX": 0.0, "maxY": 8605.0, "series": [{"data": [[0.0, 181.0], [0.1, 183.0], [0.2, 185.0], [0.3, 186.0], [0.4, 186.0], [0.5, 188.0], [0.6, 189.0], [0.7, 190.0], [0.8, 191.0], [0.9, 192.0], [1.0, 193.0], [1.1, 194.0], [1.2, 195.0], [1.3, 196.0], [1.4, 197.0], [1.5, 197.0], [1.6, 198.0], [1.7, 199.0], [1.8, 200.0], [1.9, 200.0], [2.0, 201.0], [2.1, 201.0], [2.2, 202.0], [2.3, 202.0], [2.4, 204.0], [2.5, 204.0], [2.6, 205.0], [2.7, 206.0], [2.8, 207.0], [2.9, 208.0], [3.0, 209.0], [3.1, 209.0], [3.2, 210.0], [3.3, 211.0], [3.4, 211.0], [3.5, 213.0], [3.6, 213.0], [3.7, 214.0], [3.8, 215.0], [3.9, 216.0], [4.0, 216.0], [4.1, 217.0], [4.2, 218.0], [4.3, 219.0], [4.4, 219.0], [4.5, 219.0], [4.6, 220.0], [4.7, 221.0], [4.8, 221.0], [4.9, 221.0], [5.0, 222.0], [5.1, 223.0], [5.2, 224.0], [5.3, 224.0], [5.4, 224.0], [5.5, 225.0], [5.6, 225.0], [5.7, 226.0], [5.8, 227.0], [5.9, 228.0], [6.0, 228.0], [6.1, 229.0], [6.2, 230.0], [6.3, 230.0], [6.4, 232.0], [6.5, 232.0], [6.6, 232.0], [6.7, 233.0], [6.8, 234.0], [6.9, 235.0], [7.0, 236.0], [7.1, 237.0], [7.2, 238.0], [7.3, 239.0], [7.4, 241.0], [7.5, 242.0], [7.6, 243.0], [7.7, 244.0], [7.8, 245.0], [7.9, 246.0], [8.0, 248.0], [8.1, 249.0], [8.2, 251.0], [8.3, 253.0], [8.4, 254.0], [8.5, 256.0], [8.6, 258.0], [8.7, 258.0], [8.8, 259.0], [8.9, 260.0], [9.0, 262.0], [9.1, 263.0], [9.2, 264.0], [9.3, 265.0], [9.4, 266.0], [9.5, 266.0], [9.6, 267.0], [9.7, 268.0], [9.8, 269.0], [9.9, 270.0], [10.0, 271.0], [10.1, 272.0], [10.2, 273.0], [10.3, 273.0], [10.4, 274.0], [10.5, 275.0], [10.6, 276.0], [10.7, 276.0], [10.8, 277.0], [10.9, 278.0], [11.0, 278.0], [11.1, 279.0], [11.2, 279.0], [11.3, 280.0], [11.4, 281.0], [11.5, 282.0], [11.6, 282.0], [11.7, 282.0], [11.8, 283.0], [11.9, 284.0], [12.0, 285.0], [12.1, 285.0], [12.2, 286.0], [12.3, 287.0], [12.4, 287.0], [12.5, 288.0], [12.6, 289.0], [12.7, 290.0], [12.8, 291.0], [12.9, 291.0], [13.0, 292.0], [13.1, 293.0], [13.2, 293.0], [13.3, 294.0], [13.4, 295.0], [13.5, 295.0], [13.6, 297.0], [13.7, 299.0], [13.8, 300.0], [13.9, 301.0], [14.0, 302.0], [14.1, 303.0], [14.2, 304.0], [14.3, 305.0], [14.4, 307.0], [14.5, 309.0], [14.6, 310.0], [14.7, 311.0], [14.8, 312.0], [14.9, 313.0], [15.0, 314.0], [15.1, 316.0], [15.2, 317.0], [15.3, 317.0], [15.4, 319.0], [15.5, 320.0], [15.6, 322.0], [15.7, 323.0], [15.8, 324.0], [15.9, 326.0], [16.0, 328.0], [16.1, 329.0], [16.2, 331.0], [16.3, 332.0], [16.4, 333.0], [16.5, 334.0], [16.6, 335.0], [16.7, 337.0], [16.8, 338.0], [16.9, 340.0], [17.0, 342.0], [17.1, 343.0], [17.2, 347.0], [17.3, 348.0], [17.4, 350.0], [17.5, 352.0], [17.6, 354.0], [17.7, 356.0], [17.8, 358.0], [17.9, 360.0], [18.0, 363.0], [18.1, 364.0], [18.2, 367.0], [18.3, 367.0], [18.4, 368.0], [18.5, 370.0], [18.6, 371.0], [18.7, 373.0], [18.8, 374.0], [18.9, 375.0], [19.0, 377.0], [19.1, 378.0], [19.2, 379.0], [19.3, 380.0], [19.4, 382.0], [19.5, 383.0], [19.6, 385.0], [19.7, 386.0], [19.8, 386.0], [19.9, 387.0], [20.0, 387.0], [20.1, 389.0], [20.2, 389.0], [20.3, 390.0], [20.4, 390.0], [20.5, 391.0], [20.6, 393.0], [20.7, 395.0], [20.8, 396.0], [20.9, 397.0], [21.0, 397.0], [21.1, 398.0], [21.2, 399.0], [21.3, 400.0], [21.4, 401.0], [21.5, 401.0], [21.6, 402.0], [21.7, 402.0], [21.8, 404.0], [21.9, 404.0], [22.0, 405.0], [22.1, 407.0], [22.2, 409.0], [22.3, 410.0], [22.4, 410.0], [22.5, 411.0], [22.6, 412.0], [22.7, 412.0], [22.8, 413.0], [22.9, 414.0], [23.0, 414.0], [23.1, 416.0], [23.2, 417.0], [23.3, 418.0], [23.4, 419.0], [23.5, 419.0], [23.6, 421.0], [23.7, 422.0], [23.8, 423.0], [23.9, 424.0], [24.0, 424.0], [24.1, 425.0], [24.2, 426.0], [24.3, 427.0], [24.4, 428.0], [24.5, 428.0], [24.6, 429.0], [24.7, 431.0], [24.8, 432.0], [24.9, 433.0], [25.0, 434.0], [25.1, 435.0], [25.2, 435.0], [25.3, 436.0], [25.4, 437.0], [25.5, 438.0], [25.6, 439.0], [25.7, 439.0], [25.8, 440.0], [25.9, 442.0], [26.0, 443.0], [26.1, 444.0], [26.2, 445.0], [26.3, 446.0], [26.4, 447.0], [26.5, 447.0], [26.6, 448.0], [26.7, 449.0], [26.8, 450.0], [26.9, 450.0], [27.0, 451.0], [27.1, 452.0], [27.2, 452.0], [27.3, 453.0], [27.4, 454.0], [27.5, 455.0], [27.6, 455.0], [27.7, 456.0], [27.8, 456.0], [27.9, 457.0], [28.0, 458.0], [28.1, 459.0], [28.2, 460.0], [28.3, 461.0], [28.4, 462.0], [28.5, 463.0], [28.6, 463.0], [28.7, 464.0], [28.8, 465.0], [28.9, 465.0], [29.0, 466.0], [29.1, 467.0], [29.2, 468.0], [29.3, 469.0], [29.4, 470.0], [29.5, 471.0], [29.6, 472.0], [29.7, 473.0], [29.8, 474.0], [29.9, 476.0], [30.0, 477.0], [30.1, 479.0], [30.2, 479.0], [30.3, 480.0], [30.4, 481.0], [30.5, 482.0], [30.6, 483.0], [30.7, 484.0], [30.8, 485.0], [30.9, 487.0], [31.0, 488.0], [31.1, 489.0], [31.2, 490.0], [31.3, 490.0], [31.4, 491.0], [31.5, 492.0], [31.6, 493.0], [31.7, 494.0], [31.8, 495.0], [31.9, 497.0], [32.0, 498.0], [32.1, 498.0], [32.2, 500.0], [32.3, 501.0], [32.4, 502.0], [32.5, 502.0], [32.6, 504.0], [32.7, 505.0], [32.8, 506.0], [32.9, 507.0], [33.0, 509.0], [33.1, 509.0], [33.2, 510.0], [33.3, 511.0], [33.4, 514.0], [33.5, 515.0], [33.6, 516.0], [33.7, 518.0], [33.8, 518.0], [33.9, 519.0], [34.0, 520.0], [34.1, 521.0], [34.2, 523.0], [34.3, 524.0], [34.4, 525.0], [34.5, 525.0], [34.6, 527.0], [34.7, 528.0], [34.8, 529.0], [34.9, 530.0], [35.0, 532.0], [35.1, 533.0], [35.2, 534.0], [35.3, 534.0], [35.4, 535.0], [35.5, 535.0], [35.6, 536.0], [35.7, 536.0], [35.8, 537.0], [35.9, 537.0], [36.0, 538.0], [36.1, 540.0], [36.2, 541.0], [36.3, 541.0], [36.4, 542.0], [36.5, 542.0], [36.6, 543.0], [36.7, 544.0], [36.8, 544.0], [36.9, 545.0], [37.0, 547.0], [37.1, 548.0], [37.2, 549.0], [37.3, 549.0], [37.4, 550.0], [37.5, 550.0], [37.6, 551.0], [37.7, 552.0], [37.8, 553.0], [37.9, 553.0], [38.0, 554.0], [38.1, 555.0], [38.2, 557.0], [38.3, 558.0], [38.4, 559.0], [38.5, 559.0], [38.6, 560.0], [38.7, 562.0], [38.8, 564.0], [38.9, 564.0], [39.0, 565.0], [39.1, 565.0], [39.2, 566.0], [39.3, 567.0], [39.4, 567.0], [39.5, 569.0], [39.6, 570.0], [39.7, 571.0], [39.8, 573.0], [39.9, 573.0], [40.0, 574.0], [40.1, 576.0], [40.2, 577.0], [40.3, 577.0], [40.4, 578.0], [40.5, 579.0], [40.6, 580.0], [40.7, 581.0], [40.8, 583.0], [40.9, 584.0], [41.0, 585.0], [41.1, 586.0], [41.2, 588.0], [41.3, 588.0], [41.4, 589.0], [41.5, 590.0], [41.6, 591.0], [41.7, 591.0], [41.8, 592.0], [41.9, 594.0], [42.0, 594.0], [42.1, 595.0], [42.2, 597.0], [42.3, 599.0], [42.4, 599.0], [42.5, 600.0], [42.6, 601.0], [42.7, 602.0], [42.8, 603.0], [42.9, 604.0], [43.0, 606.0], [43.1, 607.0], [43.2, 608.0], [43.3, 610.0], [43.4, 611.0], [43.5, 612.0], [43.6, 613.0], [43.7, 615.0], [43.8, 617.0], [43.9, 619.0], [44.0, 620.0], [44.1, 621.0], [44.2, 621.0], [44.3, 622.0], [44.4, 624.0], [44.5, 625.0], [44.6, 627.0], [44.7, 627.0], [44.8, 628.0], [44.9, 629.0], [45.0, 631.0], [45.1, 632.0], [45.2, 632.0], [45.3, 633.0], [45.4, 635.0], [45.5, 636.0], [45.6, 637.0], [45.7, 638.0], [45.8, 639.0], [45.9, 641.0], [46.0, 642.0], [46.1, 643.0], [46.2, 644.0], [46.3, 645.0], [46.4, 647.0], [46.5, 648.0], [46.6, 648.0], [46.7, 650.0], [46.8, 652.0], [46.9, 654.0], [47.0, 655.0], [47.1, 656.0], [47.2, 658.0], [47.3, 661.0], [47.4, 663.0], [47.5, 664.0], [47.6, 665.0], [47.7, 666.0], [47.8, 667.0], [47.9, 669.0], [48.0, 671.0], [48.1, 672.0], [48.2, 672.0], [48.3, 674.0], [48.4, 675.0], [48.5, 677.0], [48.6, 680.0], [48.7, 682.0], [48.8, 683.0], [48.9, 684.0], [49.0, 685.0], [49.1, 686.0], [49.2, 687.0], [49.3, 687.0], [49.4, 689.0], [49.5, 690.0], [49.6, 691.0], [49.7, 692.0], [49.8, 693.0], [49.9, 695.0], [50.0, 696.0], [50.1, 697.0], [50.2, 699.0], [50.3, 700.0], [50.4, 701.0], [50.5, 702.0], [50.6, 703.0], [50.7, 704.0], [50.8, 706.0], [50.9, 708.0], [51.0, 710.0], [51.1, 713.0], [51.2, 713.0], [51.3, 714.0], [51.4, 715.0], [51.5, 717.0], [51.6, 719.0], [51.7, 721.0], [51.8, 722.0], [51.9, 724.0], [52.0, 727.0], [52.1, 729.0], [52.2, 731.0], [52.3, 733.0], [52.4, 735.0], [52.5, 736.0], [52.6, 737.0], [52.7, 739.0], [52.8, 740.0], [52.9, 742.0], [53.0, 743.0], [53.1, 745.0], [53.2, 747.0], [53.3, 748.0], [53.4, 751.0], [53.5, 752.0], [53.6, 753.0], [53.7, 756.0], [53.8, 759.0], [53.9, 760.0], [54.0, 761.0], [54.1, 762.0], [54.2, 765.0], [54.3, 767.0], [54.4, 768.0], [54.5, 769.0], [54.6, 771.0], [54.7, 773.0], [54.8, 775.0], [54.9, 776.0], [55.0, 777.0], [55.1, 778.0], [55.2, 779.0], [55.3, 782.0], [55.4, 784.0], [55.5, 787.0], [55.6, 788.0], [55.7, 789.0], [55.8, 791.0], [55.9, 791.0], [56.0, 793.0], [56.1, 795.0], [56.2, 796.0], [56.3, 797.0], [56.4, 800.0], [56.5, 802.0], [56.6, 803.0], [56.7, 804.0], [56.8, 805.0], [56.9, 808.0], [57.0, 809.0], [57.1, 811.0], [57.2, 812.0], [57.3, 813.0], [57.4, 816.0], [57.5, 818.0], [57.6, 819.0], [57.7, 820.0], [57.8, 822.0], [57.9, 826.0], [58.0, 829.0], [58.1, 832.0], [58.2, 833.0], [58.3, 834.0], [58.4, 836.0], [58.5, 837.0], [58.6, 838.0], [58.7, 840.0], [58.8, 841.0], [58.9, 843.0], [59.0, 844.0], [59.1, 845.0], [59.2, 846.0], [59.3, 847.0], [59.4, 850.0], [59.5, 851.0], [59.6, 853.0], [59.7, 856.0], [59.8, 860.0], [59.9, 863.0], [60.0, 865.0], [60.1, 866.0], [60.2, 868.0], [60.3, 869.0], [60.4, 871.0], [60.5, 872.0], [60.6, 874.0], [60.7, 877.0], [60.8, 878.0], [60.9, 880.0], [61.0, 883.0], [61.1, 886.0], [61.2, 888.0], [61.3, 891.0], [61.4, 892.0], [61.5, 894.0], [61.6, 895.0], [61.7, 897.0], [61.8, 898.0], [61.9, 899.0], [62.0, 900.0], [62.1, 901.0], [62.2, 903.0], [62.3, 906.0], [62.4, 908.0], [62.5, 909.0], [62.6, 912.0], [62.7, 913.0], [62.8, 916.0], [62.9, 917.0], [63.0, 920.0], [63.1, 922.0], [63.2, 923.0], [63.3, 924.0], [63.4, 926.0], [63.5, 927.0], [63.6, 929.0], [63.7, 931.0], [63.8, 932.0], [63.9, 934.0], [64.0, 937.0], [64.1, 940.0], [64.2, 941.0], [64.3, 943.0], [64.4, 946.0], [64.5, 947.0], [64.6, 949.0], [64.7, 950.0], [64.8, 952.0], [64.9, 954.0], [65.0, 956.0], [65.1, 956.0], [65.2, 957.0], [65.3, 961.0], [65.4, 962.0], [65.5, 963.0], [65.6, 965.0], [65.7, 966.0], [65.8, 970.0], [65.9, 971.0], [66.0, 971.0], [66.1, 972.0], [66.2, 974.0], [66.3, 976.0], [66.4, 977.0], [66.5, 979.0], [66.6, 981.0], [66.7, 983.0], [66.8, 985.0], [66.9, 988.0], [67.0, 989.0], [67.1, 990.0], [67.2, 991.0], [67.3, 993.0], [67.4, 994.0], [67.5, 995.0], [67.6, 997.0], [67.7, 998.0], [67.8, 1000.0], [67.9, 1001.0], [68.0, 1003.0], [68.1, 1006.0], [68.2, 1007.0], [68.3, 1008.0], [68.4, 1010.0], [68.5, 1012.0], [68.6, 1013.0], [68.7, 1014.0], [68.8, 1015.0], [68.9, 1017.0], [69.0, 1019.0], [69.1, 1020.0], [69.2, 1022.0], [69.3, 1024.0], [69.4, 1025.0], [69.5, 1027.0], [69.6, 1029.0], [69.7, 1031.0], [69.8, 1032.0], [69.9, 1034.0], [70.0, 1036.0], [70.1, 1037.0], [70.2, 1040.0], [70.3, 1042.0], [70.4, 1043.0], [70.5, 1044.0], [70.6, 1046.0], [70.7, 1047.0], [70.8, 1049.0], [70.9, 1051.0], [71.0, 1052.0], [71.1, 1054.0], [71.2, 1056.0], [71.3, 1058.0], [71.4, 1059.0], [71.5, 1062.0], [71.6, 1063.0], [71.7, 1064.0], [71.8, 1066.0], [71.9, 1068.0], [72.0, 1070.0], [72.1, 1071.0], [72.2, 1072.0], [72.3, 1073.0], [72.4, 1073.0], [72.5, 1075.0], [72.6, 1077.0], [72.7, 1078.0], [72.8, 1080.0], [72.9, 1081.0], [73.0, 1083.0], [73.1, 1088.0], [73.2, 1089.0], [73.3, 1090.0], [73.4, 1092.0], [73.5, 1093.0], [73.6, 1093.0], [73.7, 1095.0], [73.8, 1096.0], [73.9, 1097.0], [74.0, 1100.0], [74.1, 1101.0], [74.2, 1103.0], [74.3, 1106.0], [74.4, 1108.0], [74.5, 1110.0], [74.6, 1111.0], [74.7, 1113.0], [74.8, 1116.0], [74.9, 1120.0], [75.0, 1123.0], [75.1, 1125.0], [75.2, 1127.0], [75.3, 1128.0], [75.4, 1130.0], [75.5, 1133.0], [75.6, 1135.0], [75.7, 1138.0], [75.8, 1140.0], [75.9, 1142.0], [76.0, 1144.0], [76.1, 1148.0], [76.2, 1150.0], [76.3, 1153.0], [76.4, 1155.0], [76.5, 1156.0], [76.6, 1159.0], [76.7, 1161.0], [76.8, 1163.0], [76.9, 1166.0], [77.0, 1167.0], [77.1, 1172.0], [77.2, 1174.0], [77.3, 1176.0], [77.4, 1179.0], [77.5, 1184.0], [77.6, 1187.0], [77.7, 1188.0], [77.8, 1191.0], [77.9, 1196.0], [78.0, 1197.0], [78.1, 1198.0], [78.2, 1203.0], [78.3, 1204.0], [78.4, 1208.0], [78.5, 1210.0], [78.6, 1211.0], [78.7, 1214.0], [78.8, 1217.0], [78.9, 1219.0], [79.0, 1224.0], [79.1, 1227.0], [79.2, 1228.0], [79.3, 1232.0], [79.4, 1237.0], [79.5, 1240.0], [79.6, 1244.0], [79.7, 1245.0], [79.8, 1247.0], [79.9, 1250.0], [80.0, 1253.0], [80.1, 1254.0], [80.2, 1257.0], [80.3, 1260.0], [80.4, 1263.0], [80.5, 1265.0], [80.6, 1267.0], [80.7, 1271.0], [80.8, 1274.0], [80.9, 1277.0], [81.0, 1280.0], [81.1, 1284.0], [81.2, 1286.0], [81.3, 1288.0], [81.4, 1289.0], [81.5, 1292.0], [81.6, 1295.0], [81.7, 1296.0], [81.8, 1298.0], [81.9, 1302.0], [82.0, 1304.0], [82.1, 1306.0], [82.2, 1308.0], [82.3, 1310.0], [82.4, 1310.0], [82.5, 1313.0], [82.6, 1316.0], [82.7, 1318.0], [82.8, 1319.0], [82.9, 1322.0], [83.0, 1325.0], [83.1, 1327.0], [83.2, 1331.0], [83.3, 1332.0], [83.4, 1334.0], [83.5, 1336.0], [83.6, 1337.0], [83.7, 1339.0], [83.8, 1341.0], [83.9, 1345.0], [84.0, 1347.0], [84.1, 1349.0], [84.2, 1353.0], [84.3, 1355.0], [84.4, 1358.0], [84.5, 1360.0], [84.6, 1365.0], [84.7, 1366.0], [84.8, 1367.0], [84.9, 1371.0], [85.0, 1372.0], [85.1, 1374.0], [85.2, 1379.0], [85.3, 1380.0], [85.4, 1382.0], [85.5, 1385.0], [85.6, 1390.0], [85.7, 1392.0], [85.8, 1394.0], [85.9, 1397.0], [86.0, 1399.0], [86.1, 1402.0], [86.2, 1406.0], [86.3, 1408.0], [86.4, 1411.0], [86.5, 1413.0], [86.6, 1415.0], [86.7, 1420.0], [86.8, 1425.0], [86.9, 1431.0], [87.0, 1434.0], [87.1, 1436.0], [87.2, 1438.0], [87.3, 1443.0], [87.4, 1446.0], [87.5, 1447.0], [87.6, 1449.0], [87.7, 1452.0], [87.8, 1454.0], [87.9, 1456.0], [88.0, 1460.0], [88.1, 1463.0], [88.2, 1468.0], [88.3, 1474.0], [88.4, 1476.0], [88.5, 1480.0], [88.6, 1484.0], [88.7, 1486.0], [88.8, 1492.0], [88.9, 1494.0], [89.0, 1499.0], [89.1, 1504.0], [89.2, 1508.0], [89.3, 1511.0], [89.4, 1514.0], [89.5, 1523.0], [89.6, 1532.0], [89.7, 1536.0], [89.8, 1538.0], [89.9, 1543.0], [90.0, 1547.0], [90.1, 1553.0], [90.2, 1562.0], [90.3, 1571.0], [90.4, 1574.0], [90.5, 1579.0], [90.6, 1581.0], [90.7, 1584.0], [90.8, 1594.0], [90.9, 1600.0], [91.0, 1606.0], [91.1, 1620.0], [91.2, 1624.0], [91.3, 1629.0], [91.4, 1638.0], [91.5, 1641.0], [91.6, 1646.0], [91.7, 1657.0], [91.8, 1670.0], [91.9, 1675.0], [92.0, 1684.0], [92.1, 1688.0], [92.2, 1698.0], [92.3, 1706.0], [92.4, 1716.0], [92.5, 1726.0], [92.6, 1735.0], [92.7, 1747.0], [92.8, 1760.0], [92.9, 1768.0], [93.0, 1783.0], [93.1, 1789.0], [93.2, 1795.0], [93.3, 1801.0], [93.4, 1809.0], [93.5, 1819.0], [93.6, 1834.0], [93.7, 1841.0], [93.8, 1860.0], [93.9, 1865.0], [94.0, 1876.0], [94.1, 1886.0], [94.2, 1898.0], [94.3, 1921.0], [94.4, 1924.0], [94.5, 1931.0], [94.6, 1938.0], [94.7, 1952.0], [94.8, 1967.0], [94.9, 1974.0], [95.0, 1991.0], [95.1, 2000.0], [95.2, 2012.0], [95.3, 2026.0], [95.4, 2038.0], [95.5, 2049.0], [95.6, 2055.0], [95.7, 2061.0], [95.8, 2087.0], [95.9, 2098.0], [96.0, 2114.0], [96.1, 2119.0], [96.2, 2125.0], [96.3, 2140.0], [96.4, 2151.0], [96.5, 2161.0], [96.6, 2166.0], [96.7, 2172.0], [96.8, 2191.0], [96.9, 2215.0], [97.0, 2236.0], [97.1, 2247.0], [97.2, 2266.0], [97.3, 2277.0], [97.4, 2296.0], [97.5, 2320.0], [97.6, 2355.0], [97.7, 2369.0], [97.8, 2388.0], [97.9, 2447.0], [98.0, 2461.0], [98.1, 2507.0], [98.2, 2561.0], [98.3, 2585.0], [98.4, 2601.0], [98.5, 2660.0], [98.6, 2682.0], [98.7, 2714.0], [98.8, 2751.0], [98.9, 2791.0], [99.0, 2832.0], [99.1, 2919.0], [99.2, 3051.0], [99.3, 3183.0], [99.4, 3234.0], [99.5, 3445.0], [99.6, 3660.0], [99.7, 4215.0], [99.8, 4820.0], [99.9, 5186.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 623.0, "series": [{"data": [[600.0, 407.0], [700.0, 319.0], [800.0, 287.0], [900.0, 304.0], [1000.0, 322.0], [1100.0, 215.0], [1200.0, 191.0], [1300.0, 220.0], [1400.0, 154.0], [1500.0, 97.0], [1600.0, 69.0], [1700.0, 56.0], [1800.0, 47.0], [1900.0, 46.0], [2000.0, 43.0], [2100.0, 48.0], [2200.0, 31.0], [2300.0, 20.0], [2400.0, 13.0], [2500.0, 16.0], [2600.0, 12.0], [2800.0, 8.0], [2700.0, 15.0], [2900.0, 5.0], [3000.0, 4.0], [3100.0, 7.0], [3300.0, 2.0], [3200.0, 5.0], [3400.0, 2.0], [3500.0, 3.0], [3700.0, 1.0], [3600.0, 1.0], [4000.0, 1.0], [4100.0, 2.0], [4200.0, 2.0], [4500.0, 1.0], [4600.0, 1.0], [4400.0, 1.0], [4800.0, 2.0], [5100.0, 2.0], [4900.0, 1.0], [5000.0, 1.0], [5500.0, 1.0], [5400.0, 1.0], [5800.0, 1.0], [5900.0, 1.0], [8600.0, 1.0], [100.0, 92.0], [200.0, 623.0], [300.0, 388.0], [400.0, 568.0], [500.0, 530.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 569.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2948.0, "series": [{"data": [[0.0, 1673.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2948.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 569.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.822834645669293, "minX": 1.60280208E12, "maxY": 10.0, "series": [{"data": [[1.60280208E12, 10.0], [1.60280226E12, 10.0], [1.60280244E12, 10.0], [1.60280214E12, 10.0], [1.60280232E12, 10.0], [1.6028025E12, 9.822834645669293], [1.6028022E12, 10.0], [1.60280238E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028025E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 301.0, "minX": 1.0, "maxY": 2660.0, "series": [{"data": [[8.0, 1025.0], [4.0, 859.0], [2.0, 2660.0], [1.0, 2601.0], [9.0, 939.0], [10.0, 854.88805249952], [5.0, 1031.0], [6.0, 1022.0], [3.0, 1269.0], [7.0, 301.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 855.661271676303]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1910.6666666666667, "minX": 1.60280208E12, "maxY": 3547434.95, "series": [{"data": [[1.60280208E12, 3173825.216666667], [1.60280226E12, 3474655.683333333], [1.60280244E12, 3135993.8], [1.60280214E12, 3145262.6166666667], [1.60280232E12, 2635227.8833333333], [1.6028025E12, 1318312.25], [1.6028022E12, 3542133.9166666665], [1.60280238E12, 3547434.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280208E12, 4591.566666666667], [1.60280226E12, 4672.783333333334], [1.60280244E12, 5874.966666666666], [1.60280214E12, 5444.466666666666], [1.60280232E12, 4897.116666666667], [1.6028025E12, 1910.6666666666667], [1.6028022E12, 5634.516666666666], [1.60280238E12, 5551.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028025E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 775.4160206718343, "minX": 1.60280208E12, "maxY": 1054.4566929133864, "series": [{"data": [[1.60280208E12, 908.4100946372246], [1.60280226E12, 939.9951923076924], [1.60280244E12, 775.4160206718343], [1.60280214E12, 819.5815217391306], [1.60280232E12, 904.0807635829661], [1.6028025E12, 1054.4566929133864], [1.6028022E12, 803.1022880215339], [1.60280238E12, 799.4529569892477]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028025E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 774.0245478036175, "minX": 1.60280208E12, "maxY": 1052.724409448818, "series": [{"data": [[1.60280208E12, 906.2050473186122], [1.60280226E12, 937.6939102564099], [1.60280244E12, 774.0245478036175], [1.60280214E12, 817.474184782609], [1.60280232E12, 902.729809104258], [1.6028025E12, 1052.724409448818], [1.6028022E12, 801.006729475102], [1.60280238E12, 797.6545698924735]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028025E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.014211886304909577, "minX": 1.60280208E12, "maxY": 0.13406940063091508, "series": [{"data": [[1.60280208E12, 0.13406940063091508], [1.60280226E12, 0.025641025641025644], [1.60280244E12, 0.014211886304909577], [1.60280214E12, 0.017663043478260886], [1.60280232E12, 0.01762114537444934], [1.6028025E12, 0.019685039370078733], [1.6028022E12, 0.018842530282637965], [1.60280238E12, 0.021505376344086037]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028025E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.60280208E12, "maxY": 8605.0, "series": [{"data": [[1.60280208E12, 5180.0], [1.60280226E12, 5186.0], [1.60280244E12, 3545.0], [1.60280214E12, 4512.0], [1.60280232E12, 8605.0], [1.6028025E12, 3257.0], [1.6028022E12, 3445.0], [1.60280238E12, 3488.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280208E12, 203.42999969720842], [1.60280226E12, 190.0], [1.60280244E12, 185.0], [1.60280214E12, 200.63299982428552], [1.60280232E12, 197.13799983739852], [1.6028025E12, 226.76999963521956], [1.6028022E12, 185.0], [1.60280238E12, 194.4099996447563]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280208E12, 205.71900036334992], [1.60280226E12, 190.93750029802322], [1.60280244E12, 185.67250007390976], [1.60280214E12, 201.2963000702858], [1.60280232E12, 197.75180006504058], [1.6028025E12, 228.14700014591216], [1.6028022E12, 185.36560007095338], [1.60280238E12, 195.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280208E12, 204.1949995458126], [1.60280226E12, 190.0], [1.60280244E12, 185.3624999076128], [1.60280214E12, 201.00149991214275], [1.60280232E12, 197.47899991869926], [1.6028025E12, 227.5349998176098], [1.6028022E12, 185.06799991130828], [1.60280238E12, 195.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280208E12, 190.0], [1.60280226E12, 186.0], [1.60280244E12, 181.0], [1.60280214E12, 182.0], [1.60280232E12, 192.0], [1.6028025E12, 216.0], [1.6028022E12, 181.0], [1.60280238E12, 187.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280208E12, 786.0], [1.60280226E12, 795.5], [1.60280244E12, 602.5], [1.60280214E12, 621.5], [1.60280232E12, 743.0], [1.6028025E12, 943.5], [1.6028022E12, 644.0], [1.60280238E12, 609.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028025E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 376.5, "minX": 1.0, "maxY": 2630.5, "series": [{"data": [[2.0, 1938.0], [3.0, 899.0], [4.0, 1147.5], [5.0, 1023.5], [6.0, 1302.5], [7.0, 1026.5], [8.0, 1114.5], [9.0, 972.0], [10.0, 894.5], [11.0, 862.0], [12.0, 750.5], [13.0, 739.0], [14.0, 618.5], [15.0, 601.0], [16.0, 585.0], [1.0, 2630.5], [17.0, 466.0], [18.0, 454.5], [19.0, 440.0], [20.0, 480.0], [21.0, 391.0], [22.0, 376.5], [23.0, 421.0], [24.0, 402.5], [25.0, 398.0], [26.0, 422.5], [28.0, 423.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 376.0, "minX": 1.0, "maxY": 2625.5, "series": [{"data": [[2.0, 1937.5], [3.0, 895.0], [4.0, 1141.5], [5.0, 1022.0], [6.0, 1296.5], [7.0, 1019.5], [8.0, 1111.0], [9.0, 969.0], [10.0, 894.5], [11.0, 859.0], [12.0, 748.5], [13.0, 737.0], [14.0, 618.0], [15.0, 601.0], [16.0, 582.5], [1.0, 2625.5], [17.0, 466.0], [18.0, 454.5], [19.0, 440.0], [20.0, 480.0], [21.0, 391.0], [22.0, 376.0], [23.0, 420.5], [24.0, 402.5], [25.0, 398.0], [26.0, 422.0], [28.0, 423.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.066666666666666, "minX": 1.60280208E12, "maxY": 12.9, "series": [{"data": [[1.60280208E12, 10.733333333333333], [1.60280226E12, 10.4], [1.60280244E12, 12.9], [1.60280214E12, 12.266666666666667], [1.60280232E12, 11.35], [1.6028025E12, 4.066666666666666], [1.6028022E12, 12.383333333333333], [1.60280238E12, 12.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028025E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.233333333333333, "minX": 1.60280208E12, "maxY": 12.9, "series": [{"data": [[1.60280208E12, 10.566666666666666], [1.60280226E12, 10.4], [1.60280244E12, 12.9], [1.60280214E12, 12.266666666666667], [1.60280232E12, 11.35], [1.6028025E12, 4.233333333333333], [1.6028022E12, 12.383333333333333], [1.60280238E12, 12.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028025E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.233333333333333, "minX": 1.60280208E12, "maxY": 12.9, "series": [{"data": [[1.60280208E12, 10.566666666666666], [1.60280226E12, 10.4], [1.60280244E12, 12.9], [1.60280214E12, 12.266666666666667], [1.60280232E12, 11.35], [1.6028025E12, 4.233333333333333], [1.6028022E12, 12.383333333333333], [1.60280238E12, 12.4]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028025E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.233333333333333, "minX": 1.60280208E12, "maxY": 12.9, "series": [{"data": [[1.60280208E12, 10.566666666666666], [1.60280226E12, 10.4], [1.60280244E12, 12.9], [1.60280214E12, 12.266666666666667], [1.60280232E12, 11.35], [1.6028025E12, 4.233333333333333], [1.6028022E12, 12.383333333333333], [1.60280238E12, 12.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028025E12, "title": "Total Transactions Per Second"}},
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

