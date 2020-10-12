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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 8417.0, "series": [{"data": [[0.0, 179.0], [0.1, 187.0], [0.2, 189.0], [0.3, 190.0], [0.4, 191.0], [0.5, 193.0], [0.6, 194.0], [0.7, 195.0], [0.8, 196.0], [0.9, 196.0], [1.0, 197.0], [1.1, 198.0], [1.2, 198.0], [1.3, 199.0], [1.4, 200.0], [1.5, 201.0], [1.6, 201.0], [1.7, 202.0], [1.8, 203.0], [1.9, 203.0], [2.0, 204.0], [2.1, 205.0], [2.2, 205.0], [2.3, 205.0], [2.4, 206.0], [2.5, 206.0], [2.6, 207.0], [2.7, 208.0], [2.8, 208.0], [2.9, 209.0], [3.0, 209.0], [3.1, 211.0], [3.2, 212.0], [3.3, 212.0], [3.4, 213.0], [3.5, 214.0], [3.6, 215.0], [3.7, 215.0], [3.8, 216.0], [3.9, 218.0], [4.0, 219.0], [4.1, 219.0], [4.2, 220.0], [4.3, 220.0], [4.4, 221.0], [4.5, 222.0], [4.6, 222.0], [4.7, 222.0], [4.8, 223.0], [4.9, 223.0], [5.0, 224.0], [5.1, 225.0], [5.2, 225.0], [5.3, 226.0], [5.4, 227.0], [5.5, 228.0], [5.6, 228.0], [5.7, 229.0], [5.8, 229.0], [5.9, 229.0], [6.0, 230.0], [6.1, 231.0], [6.2, 232.0], [6.3, 233.0], [6.4, 233.0], [6.5, 235.0], [6.6, 235.0], [6.7, 237.0], [6.8, 238.0], [6.9, 240.0], [7.0, 241.0], [7.1, 242.0], [7.2, 243.0], [7.3, 245.0], [7.4, 247.0], [7.5, 248.0], [7.6, 250.0], [7.7, 251.0], [7.8, 254.0], [7.9, 255.0], [8.0, 256.0], [8.1, 256.0], [8.2, 257.0], [8.3, 259.0], [8.4, 260.0], [8.5, 262.0], [8.6, 263.0], [8.7, 264.0], [8.8, 265.0], [8.9, 266.0], [9.0, 267.0], [9.1, 268.0], [9.2, 269.0], [9.3, 269.0], [9.4, 271.0], [9.5, 272.0], [9.6, 273.0], [9.7, 274.0], [9.8, 275.0], [9.9, 276.0], [10.0, 277.0], [10.1, 278.0], [10.2, 280.0], [10.3, 280.0], [10.4, 281.0], [10.5, 282.0], [10.6, 283.0], [10.7, 283.0], [10.8, 283.0], [10.9, 284.0], [11.0, 285.0], [11.1, 285.0], [11.2, 286.0], [11.3, 289.0], [11.4, 290.0], [11.5, 291.0], [11.6, 292.0], [11.7, 294.0], [11.8, 294.0], [11.9, 296.0], [12.0, 297.0], [12.1, 298.0], [12.2, 299.0], [12.3, 300.0], [12.4, 301.0], [12.5, 302.0], [12.6, 304.0], [12.7, 306.0], [12.8, 307.0], [12.9, 307.0], [13.0, 308.0], [13.1, 309.0], [13.2, 311.0], [13.3, 313.0], [13.4, 314.0], [13.5, 315.0], [13.6, 315.0], [13.7, 316.0], [13.8, 317.0], [13.9, 317.0], [14.0, 318.0], [14.1, 319.0], [14.2, 320.0], [14.3, 322.0], [14.4, 323.0], [14.5, 324.0], [14.6, 326.0], [14.7, 327.0], [14.8, 329.0], [14.9, 330.0], [15.0, 331.0], [15.1, 332.0], [15.2, 334.0], [15.3, 335.0], [15.4, 337.0], [15.5, 338.0], [15.6, 339.0], [15.7, 340.0], [15.8, 343.0], [15.9, 345.0], [16.0, 347.0], [16.1, 349.0], [16.2, 352.0], [16.3, 354.0], [16.4, 356.0], [16.5, 358.0], [16.6, 359.0], [16.7, 360.0], [16.8, 363.0], [16.9, 366.0], [17.0, 367.0], [17.1, 370.0], [17.2, 371.0], [17.3, 372.0], [17.4, 373.0], [17.5, 374.0], [17.6, 375.0], [17.7, 376.0], [17.8, 377.0], [17.9, 379.0], [18.0, 380.0], [18.1, 381.0], [18.2, 382.0], [18.3, 383.0], [18.4, 383.0], [18.5, 385.0], [18.6, 386.0], [18.7, 388.0], [18.8, 389.0], [18.9, 389.0], [19.0, 390.0], [19.1, 390.0], [19.2, 391.0], [19.3, 393.0], [19.4, 393.0], [19.5, 394.0], [19.6, 395.0], [19.7, 396.0], [19.8, 397.0], [19.9, 398.0], [20.0, 399.0], [20.1, 399.0], [20.2, 400.0], [20.3, 401.0], [20.4, 402.0], [20.5, 402.0], [20.6, 403.0], [20.7, 404.0], [20.8, 405.0], [20.9, 406.0], [21.0, 406.0], [21.1, 408.0], [21.2, 409.0], [21.3, 410.0], [21.4, 411.0], [21.5, 412.0], [21.6, 412.0], [21.7, 414.0], [21.8, 415.0], [21.9, 415.0], [22.0, 416.0], [22.1, 417.0], [22.2, 418.0], [22.3, 419.0], [22.4, 421.0], [22.5, 421.0], [22.6, 422.0], [22.7, 423.0], [22.8, 423.0], [22.9, 424.0], [23.0, 425.0], [23.1, 427.0], [23.2, 428.0], [23.3, 428.0], [23.4, 429.0], [23.5, 431.0], [23.6, 433.0], [23.7, 435.0], [23.8, 435.0], [23.9, 437.0], [24.0, 437.0], [24.1, 438.0], [24.2, 439.0], [24.3, 440.0], [24.4, 441.0], [24.5, 442.0], [24.6, 443.0], [24.7, 444.0], [24.8, 445.0], [24.9, 445.0], [25.0, 446.0], [25.1, 447.0], [25.2, 448.0], [25.3, 450.0], [25.4, 450.0], [25.5, 451.0], [25.6, 452.0], [25.7, 453.0], [25.8, 455.0], [25.9, 455.0], [26.0, 457.0], [26.1, 457.0], [26.2, 458.0], [26.3, 458.0], [26.4, 459.0], [26.5, 459.0], [26.6, 460.0], [26.7, 461.0], [26.8, 461.0], [26.9, 462.0], [27.0, 463.0], [27.1, 464.0], [27.2, 465.0], [27.3, 465.0], [27.4, 466.0], [27.5, 466.0], [27.6, 466.0], [27.7, 467.0], [27.8, 467.0], [27.9, 468.0], [28.0, 468.0], [28.1, 469.0], [28.2, 469.0], [28.3, 470.0], [28.4, 470.0], [28.5, 472.0], [28.6, 473.0], [28.7, 474.0], [28.8, 475.0], [28.9, 476.0], [29.0, 477.0], [29.1, 478.0], [29.2, 479.0], [29.3, 479.0], [29.4, 481.0], [29.5, 482.0], [29.6, 484.0], [29.7, 485.0], [29.8, 485.0], [29.9, 486.0], [30.0, 487.0], [30.1, 488.0], [30.2, 489.0], [30.3, 491.0], [30.4, 492.0], [30.5, 493.0], [30.6, 494.0], [30.7, 495.0], [30.8, 496.0], [30.9, 497.0], [31.0, 497.0], [31.1, 498.0], [31.2, 499.0], [31.3, 501.0], [31.4, 502.0], [31.5, 503.0], [31.6, 504.0], [31.7, 506.0], [31.8, 506.0], [31.9, 507.0], [32.0, 508.0], [32.1, 508.0], [32.2, 509.0], [32.3, 510.0], [32.4, 511.0], [32.5, 512.0], [32.6, 513.0], [32.7, 514.0], [32.8, 516.0], [32.9, 517.0], [33.0, 518.0], [33.1, 521.0], [33.2, 522.0], [33.3, 523.0], [33.4, 524.0], [33.5, 525.0], [33.6, 526.0], [33.7, 528.0], [33.8, 529.0], [33.9, 530.0], [34.0, 531.0], [34.1, 532.0], [34.2, 533.0], [34.3, 534.0], [34.4, 535.0], [34.5, 536.0], [34.6, 537.0], [34.7, 539.0], [34.8, 540.0], [34.9, 541.0], [35.0, 543.0], [35.1, 544.0], [35.2, 544.0], [35.3, 546.0], [35.4, 546.0], [35.5, 547.0], [35.6, 548.0], [35.7, 549.0], [35.8, 550.0], [35.9, 551.0], [36.0, 553.0], [36.1, 554.0], [36.2, 554.0], [36.3, 555.0], [36.4, 556.0], [36.5, 557.0], [36.6, 558.0], [36.7, 559.0], [36.8, 560.0], [36.9, 561.0], [37.0, 563.0], [37.1, 564.0], [37.2, 565.0], [37.3, 566.0], [37.4, 567.0], [37.5, 568.0], [37.6, 568.0], [37.7, 569.0], [37.8, 570.0], [37.9, 571.0], [38.0, 572.0], [38.1, 573.0], [38.2, 574.0], [38.3, 575.0], [38.4, 576.0], [38.5, 577.0], [38.6, 578.0], [38.7, 579.0], [38.8, 580.0], [38.9, 581.0], [39.0, 581.0], [39.1, 582.0], [39.2, 584.0], [39.3, 585.0], [39.4, 586.0], [39.5, 588.0], [39.6, 590.0], [39.7, 591.0], [39.8, 591.0], [39.9, 592.0], [40.0, 593.0], [40.1, 594.0], [40.2, 595.0], [40.3, 596.0], [40.4, 597.0], [40.5, 598.0], [40.6, 599.0], [40.7, 600.0], [40.8, 601.0], [40.9, 602.0], [41.0, 603.0], [41.1, 605.0], [41.2, 606.0], [41.3, 608.0], [41.4, 608.0], [41.5, 609.0], [41.6, 610.0], [41.7, 611.0], [41.8, 612.0], [41.9, 612.0], [42.0, 614.0], [42.1, 615.0], [42.2, 616.0], [42.3, 618.0], [42.4, 620.0], [42.5, 621.0], [42.6, 622.0], [42.7, 623.0], [42.8, 624.0], [42.9, 626.0], [43.0, 628.0], [43.1, 628.0], [43.2, 630.0], [43.3, 632.0], [43.4, 633.0], [43.5, 633.0], [43.6, 635.0], [43.7, 636.0], [43.8, 638.0], [43.9, 639.0], [44.0, 640.0], [44.1, 643.0], [44.2, 644.0], [44.3, 644.0], [44.4, 646.0], [44.5, 647.0], [44.6, 649.0], [44.7, 651.0], [44.8, 653.0], [44.9, 654.0], [45.0, 655.0], [45.1, 657.0], [45.2, 658.0], [45.3, 661.0], [45.4, 661.0], [45.5, 662.0], [45.6, 663.0], [45.7, 664.0], [45.8, 666.0], [45.9, 667.0], [46.0, 667.0], [46.1, 668.0], [46.2, 670.0], [46.3, 671.0], [46.4, 672.0], [46.5, 673.0], [46.6, 675.0], [46.7, 676.0], [46.8, 678.0], [46.9, 679.0], [47.0, 680.0], [47.1, 681.0], [47.2, 682.0], [47.3, 683.0], [47.4, 685.0], [47.5, 686.0], [47.6, 689.0], [47.7, 690.0], [47.8, 692.0], [47.9, 694.0], [48.0, 695.0], [48.1, 696.0], [48.2, 699.0], [48.3, 700.0], [48.4, 702.0], [48.5, 704.0], [48.6, 705.0], [48.7, 706.0], [48.8, 708.0], [48.9, 710.0], [49.0, 711.0], [49.1, 713.0], [49.2, 714.0], [49.3, 716.0], [49.4, 717.0], [49.5, 719.0], [49.6, 720.0], [49.7, 721.0], [49.8, 723.0], [49.9, 724.0], [50.0, 725.0], [50.1, 725.0], [50.2, 729.0], [50.3, 730.0], [50.4, 732.0], [50.5, 733.0], [50.6, 736.0], [50.7, 737.0], [50.8, 738.0], [50.9, 739.0], [51.0, 740.0], [51.1, 743.0], [51.2, 746.0], [51.3, 746.0], [51.4, 747.0], [51.5, 750.0], [51.6, 753.0], [51.7, 754.0], [51.8, 756.0], [51.9, 757.0], [52.0, 759.0], [52.1, 761.0], [52.2, 762.0], [52.3, 763.0], [52.4, 766.0], [52.5, 767.0], [52.6, 769.0], [52.7, 770.0], [52.8, 772.0], [52.9, 773.0], [53.0, 776.0], [53.1, 777.0], [53.2, 779.0], [53.3, 780.0], [53.4, 781.0], [53.5, 782.0], [53.6, 783.0], [53.7, 785.0], [53.8, 788.0], [53.9, 789.0], [54.0, 791.0], [54.1, 792.0], [54.2, 793.0], [54.3, 795.0], [54.4, 797.0], [54.5, 798.0], [54.6, 800.0], [54.7, 802.0], [54.8, 804.0], [54.9, 805.0], [55.0, 806.0], [55.1, 807.0], [55.2, 809.0], [55.3, 810.0], [55.4, 811.0], [55.5, 812.0], [55.6, 815.0], [55.7, 816.0], [55.8, 817.0], [55.9, 817.0], [56.0, 819.0], [56.1, 820.0], [56.2, 821.0], [56.3, 823.0], [56.4, 824.0], [56.5, 825.0], [56.6, 826.0], [56.7, 828.0], [56.8, 830.0], [56.9, 831.0], [57.0, 833.0], [57.1, 834.0], [57.2, 835.0], [57.3, 837.0], [57.4, 839.0], [57.5, 840.0], [57.6, 842.0], [57.7, 844.0], [57.8, 845.0], [57.9, 849.0], [58.0, 850.0], [58.1, 852.0], [58.2, 854.0], [58.3, 855.0], [58.4, 858.0], [58.5, 860.0], [58.6, 861.0], [58.7, 863.0], [58.8, 865.0], [58.9, 867.0], [59.0, 869.0], [59.1, 870.0], [59.2, 871.0], [59.3, 873.0], [59.4, 875.0], [59.5, 878.0], [59.6, 880.0], [59.7, 881.0], [59.8, 882.0], [59.9, 884.0], [60.0, 889.0], [60.1, 890.0], [60.2, 893.0], [60.3, 895.0], [60.4, 896.0], [60.5, 898.0], [60.6, 900.0], [60.7, 902.0], [60.8, 903.0], [60.9, 904.0], [61.0, 906.0], [61.1, 907.0], [61.2, 909.0], [61.3, 910.0], [61.4, 912.0], [61.5, 913.0], [61.6, 917.0], [61.7, 919.0], [61.8, 921.0], [61.9, 924.0], [62.0, 925.0], [62.1, 927.0], [62.2, 929.0], [62.3, 931.0], [62.4, 932.0], [62.5, 934.0], [62.6, 937.0], [62.7, 939.0], [62.8, 941.0], [62.9, 944.0], [63.0, 946.0], [63.1, 948.0], [63.2, 949.0], [63.3, 950.0], [63.4, 952.0], [63.5, 953.0], [63.6, 955.0], [63.7, 957.0], [63.8, 958.0], [63.9, 959.0], [64.0, 960.0], [64.1, 963.0], [64.2, 964.0], [64.3, 965.0], [64.4, 967.0], [64.5, 968.0], [64.6, 970.0], [64.7, 973.0], [64.8, 975.0], [64.9, 977.0], [65.0, 979.0], [65.1, 981.0], [65.2, 983.0], [65.3, 987.0], [65.4, 988.0], [65.5, 989.0], [65.6, 990.0], [65.7, 992.0], [65.8, 995.0], [65.9, 996.0], [66.0, 997.0], [66.1, 999.0], [66.2, 1001.0], [66.3, 1003.0], [66.4, 1004.0], [66.5, 1005.0], [66.6, 1009.0], [66.7, 1010.0], [66.8, 1011.0], [66.9, 1011.0], [67.0, 1013.0], [67.1, 1015.0], [67.2, 1016.0], [67.3, 1020.0], [67.4, 1022.0], [67.5, 1023.0], [67.6, 1025.0], [67.7, 1026.0], [67.8, 1028.0], [67.9, 1029.0], [68.0, 1032.0], [68.1, 1033.0], [68.2, 1034.0], [68.3, 1036.0], [68.4, 1037.0], [68.5, 1039.0], [68.6, 1040.0], [68.7, 1043.0], [68.8, 1045.0], [68.9, 1046.0], [69.0, 1049.0], [69.1, 1050.0], [69.2, 1051.0], [69.3, 1052.0], [69.4, 1054.0], [69.5, 1058.0], [69.6, 1058.0], [69.7, 1060.0], [69.8, 1061.0], [69.9, 1065.0], [70.0, 1065.0], [70.1, 1066.0], [70.2, 1067.0], [70.3, 1070.0], [70.4, 1071.0], [70.5, 1073.0], [70.6, 1074.0], [70.7, 1076.0], [70.8, 1076.0], [70.9, 1077.0], [71.0, 1080.0], [71.1, 1082.0], [71.2, 1084.0], [71.3, 1085.0], [71.4, 1087.0], [71.5, 1089.0], [71.6, 1092.0], [71.7, 1093.0], [71.8, 1094.0], [71.9, 1096.0], [72.0, 1099.0], [72.1, 1100.0], [72.2, 1103.0], [72.3, 1105.0], [72.4, 1108.0], [72.5, 1110.0], [72.6, 1112.0], [72.7, 1114.0], [72.8, 1115.0], [72.9, 1117.0], [73.0, 1119.0], [73.1, 1120.0], [73.2, 1122.0], [73.3, 1124.0], [73.4, 1125.0], [73.5, 1128.0], [73.6, 1133.0], [73.7, 1135.0], [73.8, 1137.0], [73.9, 1138.0], [74.0, 1141.0], [74.1, 1142.0], [74.2, 1144.0], [74.3, 1147.0], [74.4, 1148.0], [74.5, 1149.0], [74.6, 1151.0], [74.7, 1153.0], [74.8, 1157.0], [74.9, 1159.0], [75.0, 1160.0], [75.1, 1161.0], [75.2, 1165.0], [75.3, 1167.0], [75.4, 1169.0], [75.5, 1170.0], [75.6, 1171.0], [75.7, 1175.0], [75.8, 1177.0], [75.9, 1180.0], [76.0, 1185.0], [76.1, 1189.0], [76.2, 1192.0], [76.3, 1196.0], [76.4, 1201.0], [76.5, 1203.0], [76.6, 1207.0], [76.7, 1208.0], [76.8, 1211.0], [76.9, 1212.0], [77.0, 1216.0], [77.1, 1219.0], [77.2, 1220.0], [77.3, 1221.0], [77.4, 1225.0], [77.5, 1227.0], [77.6, 1232.0], [77.7, 1235.0], [77.8, 1238.0], [77.9, 1240.0], [78.0, 1241.0], [78.1, 1243.0], [78.2, 1247.0], [78.3, 1249.0], [78.4, 1254.0], [78.5, 1258.0], [78.6, 1261.0], [78.7, 1263.0], [78.8, 1266.0], [78.9, 1269.0], [79.0, 1272.0], [79.1, 1273.0], [79.2, 1274.0], [79.3, 1276.0], [79.4, 1279.0], [79.5, 1281.0], [79.6, 1283.0], [79.7, 1284.0], [79.8, 1287.0], [79.9, 1291.0], [80.0, 1294.0], [80.1, 1296.0], [80.2, 1298.0], [80.3, 1300.0], [80.4, 1302.0], [80.5, 1303.0], [80.6, 1306.0], [80.7, 1308.0], [80.8, 1310.0], [80.9, 1313.0], [81.0, 1314.0], [81.1, 1317.0], [81.2, 1318.0], [81.3, 1321.0], [81.4, 1323.0], [81.5, 1324.0], [81.6, 1326.0], [81.7, 1328.0], [81.8, 1330.0], [81.9, 1333.0], [82.0, 1335.0], [82.1, 1337.0], [82.2, 1338.0], [82.3, 1339.0], [82.4, 1340.0], [82.5, 1342.0], [82.6, 1342.0], [82.7, 1344.0], [82.8, 1346.0], [82.9, 1349.0], [83.0, 1349.0], [83.1, 1354.0], [83.2, 1357.0], [83.3, 1362.0], [83.4, 1364.0], [83.5, 1366.0], [83.6, 1367.0], [83.7, 1369.0], [83.8, 1371.0], [83.9, 1373.0], [84.0, 1374.0], [84.1, 1375.0], [84.2, 1378.0], [84.3, 1379.0], [84.4, 1380.0], [84.5, 1382.0], [84.6, 1384.0], [84.7, 1386.0], [84.8, 1388.0], [84.9, 1392.0], [85.0, 1393.0], [85.1, 1394.0], [85.2, 1394.0], [85.3, 1397.0], [85.4, 1401.0], [85.5, 1403.0], [85.6, 1406.0], [85.7, 1407.0], [85.8, 1408.0], [85.9, 1410.0], [86.0, 1413.0], [86.1, 1416.0], [86.2, 1419.0], [86.3, 1423.0], [86.4, 1430.0], [86.5, 1434.0], [86.6, 1437.0], [86.7, 1438.0], [86.8, 1441.0], [86.9, 1444.0], [87.0, 1447.0], [87.1, 1449.0], [87.2, 1449.0], [87.3, 1455.0], [87.4, 1458.0], [87.5, 1464.0], [87.6, 1467.0], [87.7, 1471.0], [87.8, 1473.0], [87.9, 1479.0], [88.0, 1484.0], [88.1, 1487.0], [88.2, 1492.0], [88.3, 1501.0], [88.4, 1506.0], [88.5, 1508.0], [88.6, 1511.0], [88.7, 1515.0], [88.8, 1519.0], [88.9, 1522.0], [89.0, 1525.0], [89.1, 1528.0], [89.2, 1531.0], [89.3, 1535.0], [89.4, 1543.0], [89.5, 1547.0], [89.6, 1553.0], [89.7, 1556.0], [89.8, 1561.0], [89.9, 1563.0], [90.0, 1570.0], [90.1, 1575.0], [90.2, 1583.0], [90.3, 1589.0], [90.4, 1591.0], [90.5, 1596.0], [90.6, 1600.0], [90.7, 1603.0], [90.8, 1606.0], [90.9, 1608.0], [91.0, 1614.0], [91.1, 1619.0], [91.2, 1625.0], [91.3, 1639.0], [91.4, 1641.0], [91.5, 1651.0], [91.6, 1656.0], [91.7, 1659.0], [91.8, 1668.0], [91.9, 1671.0], [92.0, 1684.0], [92.1, 1691.0], [92.2, 1697.0], [92.3, 1703.0], [92.4, 1712.0], [92.5, 1722.0], [92.6, 1732.0], [92.7, 1740.0], [92.8, 1752.0], [92.9, 1765.0], [93.0, 1774.0], [93.1, 1785.0], [93.2, 1789.0], [93.3, 1799.0], [93.4, 1810.0], [93.5, 1814.0], [93.6, 1822.0], [93.7, 1832.0], [93.8, 1855.0], [93.9, 1866.0], [94.0, 1870.0], [94.1, 1882.0], [94.2, 1892.0], [94.3, 1902.0], [94.4, 1917.0], [94.5, 1923.0], [94.6, 1934.0], [94.7, 1940.0], [94.8, 1952.0], [94.9, 1959.0], [95.0, 1962.0], [95.1, 1975.0], [95.2, 1988.0], [95.3, 2003.0], [95.4, 2011.0], [95.5, 2016.0], [95.6, 2021.0], [95.7, 2043.0], [95.8, 2056.0], [95.9, 2078.0], [96.0, 2085.0], [96.1, 2089.0], [96.2, 2103.0], [96.3, 2122.0], [96.4, 2138.0], [96.5, 2152.0], [96.6, 2168.0], [96.7, 2179.0], [96.8, 2208.0], [96.9, 2213.0], [97.0, 2225.0], [97.1, 2239.0], [97.2, 2250.0], [97.3, 2260.0], [97.4, 2288.0], [97.5, 2336.0], [97.6, 2362.0], [97.7, 2378.0], [97.8, 2394.0], [97.9, 2413.0], [98.0, 2429.0], [98.1, 2457.0], [98.2, 2480.0], [98.3, 2504.0], [98.4, 2530.0], [98.5, 2563.0], [98.6, 2593.0], [98.7, 2637.0], [98.8, 2713.0], [98.9, 2746.0], [99.0, 2800.0], [99.1, 2890.0], [99.2, 2919.0], [99.3, 3050.0], [99.4, 3134.0], [99.5, 3441.0], [99.6, 3595.0], [99.7, 3718.0], [99.8, 4377.0], [99.9, 4864.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 577.0, "series": [{"data": [[8400.0, 1.0], [600.0, 394.0], [700.0, 327.0], [800.0, 312.0], [900.0, 289.0], [1000.0, 304.0], [1100.0, 225.0], [1200.0, 204.0], [1300.0, 264.0], [1400.0, 151.0], [1500.0, 120.0], [1600.0, 87.0], [100.0, 68.0], [1700.0, 55.0], [1800.0, 50.0], [1900.0, 51.0], [2000.0, 47.0], [2100.0, 31.0], [2300.0, 20.0], [2200.0, 35.0], [2400.0, 23.0], [2500.0, 18.0], [2600.0, 8.0], [2700.0, 12.0], [2800.0, 6.0], [2900.0, 8.0], [3000.0, 4.0], [3100.0, 4.0], [200.0, 568.0], [3300.0, 2.0], [3200.0, 1.0], [3400.0, 4.0], [3500.0, 3.0], [3700.0, 5.0], [3600.0, 2.0], [4000.0, 2.0], [4300.0, 1.0], [4500.0, 2.0], [4400.0, 2.0], [300.0, 408.0], [4800.0, 1.0], [4900.0, 1.0], [5000.0, 1.0], [5200.0, 1.0], [5600.0, 1.0], [400.0, 577.0], [500.0, 490.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 608.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2959.0, "series": [{"data": [[0.0, 1623.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2959.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 608.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.923728813559322, "minX": 1.60246176E12, "maxY": 10.0, "series": [{"data": [[1.60246212E12, 10.0], [1.60246182E12, 10.0], [1.60246176E12, 10.0], [1.60246194E12, 10.0], [1.60246188E12, 10.0], [1.60246206E12, 10.0], [1.602462E12, 10.0], [1.60246218E12, 9.923728813559322]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246218E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 316.0, "minX": 1.0, "maxY": 2433.0, "series": [{"data": [[8.0, 587.0], [4.0, 1194.0], [2.0, 1505.0], [1.0, 2433.0], [9.0, 316.0], [10.0, 870.505114842697], [5.0, 568.0], [6.0, 705.0], [3.0, 796.0], [7.0, 1163.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 870.7811175337213]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2931.3166666666666, "minX": 1.60246176E12, "maxY": 3765999.5833333335, "series": [{"data": [[1.60246212E12, 3417275.6], [1.60246182E12, 2811175.05], [1.60246176E12, 2159864.816666667], [1.60246194E12, 3200285.7666666666], [1.60246188E12, 3765999.5833333335], [1.60246206E12, 2894218.5166666666], [1.602462E12, 3214357.65], [1.60246218E12, 2509019.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246212E12, 5541.533333333334], [1.60246182E12, 5428.016666666666], [1.60246176E12, 2931.3166666666666], [1.60246194E12, 5225.733333333334], [1.60246188E12, 5207.833333333333], [1.60246206E12, 5150.4], [1.602462E12, 4638.1], [1.60246218E12, 4454.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246218E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 808.25945945946, "minX": 1.60246176E12, "maxY": 1021.0171149144256, "series": [{"data": [[1.60246212E12, 821.7356164383576], [1.60246182E12, 808.25945945946], [1.60246176E12, 1021.0171149144256], [1.60246194E12, 854.1982633863969], [1.60246188E12, 875.738372093023], [1.60246206E12, 851.6452991452999], [1.602462E12, 950.1093750000005], [1.60246218E12, 856.0932203389818]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246218E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 806.4621621621625, "minX": 1.60246176E12, "maxY": 1018.650366748166, "series": [{"data": [[1.60246212E12, 819.8808219178077], [1.60246182E12, 806.4621621621625], [1.60246176E12, 1018.650366748166], [1.60246194E12, 852.1128798842254], [1.60246188E12, 873.2281976744185], [1.60246206E12, 850.0569800569801], [1.602462E12, 948.065625], [1.60246218E12, 854.5135593220335]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246218E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011627906976744188, "minX": 1.60246176E12, "maxY": 0.20782396088019559, "series": [{"data": [[1.60246212E12, 0.021917808219178107], [1.60246182E12, 0.027027027027027053], [1.60246176E12, 0.20782396088019559], [1.60246194E12, 0.021707670043415363], [1.60246188E12, 0.011627906976744188], [1.60246206E12, 0.01709401709401708], [1.602462E12, 0.018749999999999968], [1.60246218E12, 0.016949152542372874]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246218E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.60246176E12, "maxY": 8417.0, "series": [{"data": [[1.60246212E12, 2530.0], [1.60246182E12, 4544.0], [1.60246176E12, 8417.0], [1.60246194E12, 4026.0], [1.60246188E12, 4377.0], [1.60246206E12, 4050.0], [1.602462E12, 5690.0], [1.60246218E12, 3736.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246212E12, 200.15799965143205], [1.60246182E12, 198.0], [1.60246176E12, 208.06999970674514], [1.60246194E12, 197.0], [1.60246188E12, 190.0], [1.60246206E12, 197.30799932956697], [1.602462E12, 202.7689998471737], [1.60246218E12, 191.95699957728385]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246212E12, 201.23690006971358], [1.60246182E12, 198.67180014133453], [1.60246176E12, 209.17700011730193], [1.60246194E12, 197.0], [1.60246188E12, 190.0], [1.60246206E12, 199.83880026817323], [1.602462E12, 203.0], [1.60246218E12, 193.55270016908645]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246212E12, 200.888999825716], [1.60246182E12, 198.07899982333183], [1.60246176E12, 208.68499985337257], [1.60246194E12, 197.0], [1.60246188E12, 190.0], [1.60246206E12, 198.71399966478347], [1.602462E12, 203.0], [1.60246218E12, 192.84349978864194]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246212E12, 194.0], [1.60246182E12, 194.0], [1.60246176E12, 203.0], [1.60246194E12, 185.0], [1.60246188E12, 186.0], [1.60246206E12, 187.0], [1.602462E12, 190.0], [1.60246218E12, 179.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246212E12, 679.5], [1.60246182E12, 655.0], [1.60246176E12, 869.0], [1.60246194E12, 723.0], [1.60246188E12, 664.5], [1.60246206E12, 675.0], [1.602462E12, 833.0], [1.60246218E12, 705.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246218E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 406.0, "minX": 1.0, "maxY": 2626.5, "series": [{"data": [[2.0, 2626.5], [3.0, 1447.0], [4.0, 1729.0], [5.0, 1326.5], [6.0, 1225.5], [7.0, 1048.0], [8.0, 1073.0], [9.0, 973.0], [10.0, 925.0], [11.0, 865.0], [12.0, 754.5], [13.0, 733.0], [14.0, 665.5], [15.0, 619.0], [16.0, 576.0], [1.0, 2433.0], [17.0, 483.0], [18.0, 431.0], [19.0, 462.0], [20.0, 456.0], [21.0, 482.5], [22.0, 422.5], [23.0, 442.0], [24.0, 406.5], [25.0, 406.0], [26.0, 422.0], [28.0, 406.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 406.0, "minX": 1.0, "maxY": 2624.0, "series": [{"data": [[2.0, 2624.0], [3.0, 1441.0], [4.0, 1727.5], [5.0, 1323.0], [6.0, 1222.0], [7.0, 1045.0], [8.0, 1070.0], [9.0, 960.0], [10.0, 922.5], [11.0, 864.5], [12.0, 754.0], [13.0, 732.0], [14.0, 665.5], [15.0, 618.0], [16.0, 575.0], [1.0, 2421.0], [17.0, 483.0], [18.0, 431.0], [19.0, 462.0], [20.0, 454.5], [21.0, 482.0], [22.0, 422.5], [23.0, 442.0], [24.0, 406.0], [25.0, 406.0], [26.0, 422.0], [28.0, 406.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.983333333333333, "minX": 1.60246176E12, "maxY": 12.333333333333334, "series": [{"data": [[1.60246212E12, 12.166666666666666], [1.60246182E12, 12.333333333333334], [1.60246176E12, 6.983333333333333], [1.60246194E12, 11.516666666666667], [1.60246188E12, 11.466666666666667], [1.60246206E12, 11.7], [1.602462E12, 10.666666666666666], [1.60246218E12, 9.666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246218E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.816666666666666, "minX": 1.60246176E12, "maxY": 12.333333333333334, "series": [{"data": [[1.60246212E12, 12.166666666666666], [1.60246182E12, 12.333333333333334], [1.60246176E12, 6.816666666666666], [1.60246194E12, 11.516666666666667], [1.60246188E12, 11.466666666666667], [1.60246206E12, 11.7], [1.602462E12, 10.666666666666666], [1.60246218E12, 9.833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246218E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.816666666666666, "minX": 1.60246176E12, "maxY": 12.333333333333334, "series": [{"data": [[1.60246212E12, 12.166666666666666], [1.60246182E12, 12.333333333333334], [1.60246176E12, 6.816666666666666], [1.60246194E12, 11.516666666666667], [1.60246188E12, 11.466666666666667], [1.60246206E12, 11.7], [1.602462E12, 10.666666666666666], [1.60246218E12, 9.833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246218E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.816666666666666, "minX": 1.60246176E12, "maxY": 12.333333333333334, "series": [{"data": [[1.60246212E12, 12.166666666666666], [1.60246182E12, 12.333333333333334], [1.60246176E12, 6.816666666666666], [1.60246194E12, 11.516666666666667], [1.60246188E12, 11.466666666666667], [1.60246206E12, 11.7], [1.602462E12, 10.666666666666666], [1.60246218E12, 9.833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246218E12, "title": "Total Transactions Per Second"}},
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

