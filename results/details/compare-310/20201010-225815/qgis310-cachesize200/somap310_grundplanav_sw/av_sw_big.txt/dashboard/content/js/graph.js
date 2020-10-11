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
        data: {"result": {"minY": 186.0, "minX": 0.0, "maxY": 5990.0, "series": [{"data": [[0.0, 186.0], [0.1, 191.0], [0.2, 194.0], [0.3, 194.0], [0.4, 195.0], [0.5, 196.0], [0.6, 197.0], [0.7, 198.0], [0.8, 199.0], [0.9, 200.0], [1.0, 200.0], [1.1, 201.0], [1.2, 202.0], [1.3, 203.0], [1.4, 204.0], [1.5, 204.0], [1.6, 205.0], [1.7, 205.0], [1.8, 206.0], [1.9, 207.0], [2.0, 208.0], [2.1, 209.0], [2.2, 210.0], [2.3, 210.0], [2.4, 211.0], [2.5, 211.0], [2.6, 212.0], [2.7, 213.0], [2.8, 213.0], [2.9, 215.0], [3.0, 215.0], [3.1, 216.0], [3.2, 217.0], [3.3, 218.0], [3.4, 219.0], [3.5, 219.0], [3.6, 221.0], [3.7, 222.0], [3.8, 223.0], [3.9, 223.0], [4.0, 224.0], [4.1, 224.0], [4.2, 225.0], [4.3, 226.0], [4.4, 227.0], [4.5, 228.0], [4.6, 228.0], [4.7, 230.0], [4.8, 231.0], [4.9, 232.0], [5.0, 232.0], [5.1, 232.0], [5.2, 233.0], [5.3, 234.0], [5.4, 234.0], [5.5, 234.0], [5.6, 235.0], [5.7, 236.0], [5.8, 237.0], [5.9, 238.0], [6.0, 238.0], [6.1, 239.0], [6.2, 240.0], [6.3, 241.0], [6.4, 242.0], [6.5, 243.0], [6.6, 243.0], [6.7, 245.0], [6.8, 247.0], [6.9, 249.0], [7.0, 253.0], [7.1, 254.0], [7.2, 255.0], [7.3, 256.0], [7.4, 257.0], [7.5, 260.0], [7.6, 260.0], [7.7, 261.0], [7.8, 263.0], [7.9, 264.0], [8.0, 265.0], [8.1, 267.0], [8.2, 268.0], [8.3, 269.0], [8.4, 270.0], [8.5, 271.0], [8.6, 272.0], [8.7, 273.0], [8.8, 274.0], [8.9, 274.0], [9.0, 274.0], [9.1, 275.0], [9.2, 275.0], [9.3, 276.0], [9.4, 276.0], [9.5, 278.0], [9.6, 278.0], [9.7, 279.0], [9.8, 279.0], [9.9, 280.0], [10.0, 280.0], [10.1, 282.0], [10.2, 282.0], [10.3, 282.0], [10.4, 283.0], [10.5, 284.0], [10.6, 285.0], [10.7, 285.0], [10.8, 286.0], [10.9, 288.0], [11.0, 289.0], [11.1, 290.0], [11.2, 292.0], [11.3, 292.0], [11.4, 293.0], [11.5, 294.0], [11.6, 295.0], [11.7, 297.0], [11.8, 298.0], [11.9, 300.0], [12.0, 301.0], [12.1, 302.0], [12.2, 302.0], [12.3, 303.0], [12.4, 305.0], [12.5, 306.0], [12.6, 306.0], [12.7, 307.0], [12.8, 308.0], [12.9, 309.0], [13.0, 310.0], [13.1, 311.0], [13.2, 312.0], [13.3, 314.0], [13.4, 315.0], [13.5, 316.0], [13.6, 316.0], [13.7, 318.0], [13.8, 318.0], [13.9, 320.0], [14.0, 320.0], [14.1, 321.0], [14.2, 322.0], [14.3, 322.0], [14.4, 323.0], [14.5, 324.0], [14.6, 325.0], [14.7, 326.0], [14.8, 327.0], [14.9, 328.0], [15.0, 329.0], [15.1, 330.0], [15.2, 332.0], [15.3, 333.0], [15.4, 335.0], [15.5, 335.0], [15.6, 337.0], [15.7, 337.0], [15.8, 339.0], [15.9, 340.0], [16.0, 340.0], [16.1, 343.0], [16.2, 345.0], [16.3, 347.0], [16.4, 348.0], [16.5, 350.0], [16.6, 353.0], [16.7, 356.0], [16.8, 358.0], [16.9, 361.0], [17.0, 364.0], [17.1, 367.0], [17.2, 368.0], [17.3, 370.0], [17.4, 372.0], [17.5, 374.0], [17.6, 375.0], [17.7, 377.0], [17.8, 379.0], [17.9, 380.0], [18.0, 382.0], [18.1, 383.0], [18.2, 385.0], [18.3, 386.0], [18.4, 388.0], [18.5, 389.0], [18.6, 390.0], [18.7, 390.0], [18.8, 391.0], [18.9, 392.0], [19.0, 392.0], [19.1, 393.0], [19.2, 394.0], [19.3, 396.0], [19.4, 396.0], [19.5, 397.0], [19.6, 398.0], [19.7, 399.0], [19.8, 400.0], [19.9, 401.0], [20.0, 402.0], [20.1, 404.0], [20.2, 405.0], [20.3, 406.0], [20.4, 407.0], [20.5, 407.0], [20.6, 409.0], [20.7, 410.0], [20.8, 411.0], [20.9, 412.0], [21.0, 413.0], [21.1, 415.0], [21.2, 416.0], [21.3, 416.0], [21.4, 417.0], [21.5, 418.0], [21.6, 420.0], [21.7, 421.0], [21.8, 421.0], [21.9, 423.0], [22.0, 424.0], [22.1, 425.0], [22.2, 426.0], [22.3, 426.0], [22.4, 427.0], [22.5, 428.0], [22.6, 429.0], [22.7, 430.0], [22.8, 431.0], [22.9, 431.0], [23.0, 432.0], [23.1, 433.0], [23.2, 434.0], [23.3, 435.0], [23.4, 437.0], [23.5, 437.0], [23.6, 438.0], [23.7, 439.0], [23.8, 440.0], [23.9, 441.0], [24.0, 442.0], [24.1, 442.0], [24.2, 444.0], [24.3, 444.0], [24.4, 445.0], [24.5, 445.0], [24.6, 446.0], [24.7, 447.0], [24.8, 447.0], [24.9, 447.0], [25.0, 448.0], [25.1, 448.0], [25.2, 448.0], [25.3, 451.0], [25.4, 452.0], [25.5, 453.0], [25.6, 453.0], [25.7, 455.0], [25.8, 456.0], [25.9, 456.0], [26.0, 457.0], [26.1, 458.0], [26.2, 459.0], [26.3, 460.0], [26.4, 461.0], [26.5, 463.0], [26.6, 464.0], [26.7, 464.0], [26.8, 465.0], [26.9, 465.0], [27.0, 466.0], [27.1, 466.0], [27.2, 466.0], [27.3, 467.0], [27.4, 468.0], [27.5, 469.0], [27.6, 470.0], [27.7, 472.0], [27.8, 474.0], [27.9, 475.0], [28.0, 476.0], [28.1, 476.0], [28.2, 477.0], [28.3, 478.0], [28.4, 478.0], [28.5, 479.0], [28.6, 480.0], [28.7, 481.0], [28.8, 482.0], [28.9, 482.0], [29.0, 483.0], [29.1, 483.0], [29.2, 484.0], [29.3, 485.0], [29.4, 485.0], [29.5, 486.0], [29.6, 487.0], [29.7, 488.0], [29.8, 488.0], [29.9, 489.0], [30.0, 490.0], [30.1, 491.0], [30.2, 492.0], [30.3, 492.0], [30.4, 493.0], [30.5, 494.0], [30.6, 495.0], [30.7, 496.0], [30.8, 496.0], [30.9, 497.0], [31.0, 498.0], [31.1, 500.0], [31.2, 500.0], [31.3, 501.0], [31.4, 503.0], [31.5, 504.0], [31.6, 506.0], [31.7, 507.0], [31.8, 508.0], [31.9, 509.0], [32.0, 509.0], [32.1, 510.0], [32.2, 511.0], [32.3, 513.0], [32.4, 514.0], [32.5, 515.0], [32.6, 515.0], [32.7, 517.0], [32.8, 518.0], [32.9, 519.0], [33.0, 520.0], [33.1, 521.0], [33.2, 522.0], [33.3, 523.0], [33.4, 524.0], [33.5, 525.0], [33.6, 525.0], [33.7, 526.0], [33.8, 527.0], [33.9, 528.0], [34.0, 528.0], [34.1, 529.0], [34.2, 529.0], [34.3, 532.0], [34.4, 533.0], [34.5, 534.0], [34.6, 535.0], [34.7, 537.0], [34.8, 539.0], [34.9, 540.0], [35.0, 541.0], [35.1, 542.0], [35.2, 543.0], [35.3, 543.0], [35.4, 544.0], [35.5, 545.0], [35.6, 545.0], [35.7, 546.0], [35.8, 546.0], [35.9, 547.0], [36.0, 548.0], [36.1, 549.0], [36.2, 550.0], [36.3, 551.0], [36.4, 553.0], [36.5, 554.0], [36.6, 555.0], [36.7, 556.0], [36.8, 557.0], [36.9, 558.0], [37.0, 559.0], [37.1, 560.0], [37.2, 560.0], [37.3, 561.0], [37.4, 562.0], [37.5, 563.0], [37.6, 564.0], [37.7, 565.0], [37.8, 566.0], [37.9, 568.0], [38.0, 569.0], [38.1, 570.0], [38.2, 571.0], [38.3, 571.0], [38.4, 573.0], [38.5, 574.0], [38.6, 574.0], [38.7, 575.0], [38.8, 577.0], [38.9, 578.0], [39.0, 579.0], [39.1, 580.0], [39.2, 580.0], [39.3, 581.0], [39.4, 582.0], [39.5, 584.0], [39.6, 584.0], [39.7, 585.0], [39.8, 586.0], [39.9, 587.0], [40.0, 587.0], [40.1, 589.0], [40.2, 591.0], [40.3, 591.0], [40.4, 592.0], [40.5, 593.0], [40.6, 595.0], [40.7, 596.0], [40.8, 596.0], [40.9, 597.0], [41.0, 599.0], [41.1, 600.0], [41.2, 603.0], [41.3, 603.0], [41.4, 604.0], [41.5, 606.0], [41.6, 606.0], [41.7, 608.0], [41.8, 608.0], [41.9, 609.0], [42.0, 610.0], [42.1, 611.0], [42.2, 614.0], [42.3, 614.0], [42.4, 615.0], [42.5, 617.0], [42.6, 618.0], [42.7, 619.0], [42.8, 621.0], [42.9, 622.0], [43.0, 624.0], [43.1, 624.0], [43.2, 626.0], [43.3, 627.0], [43.4, 628.0], [43.5, 629.0], [43.6, 630.0], [43.7, 631.0], [43.8, 633.0], [43.9, 634.0], [44.0, 636.0], [44.1, 638.0], [44.2, 639.0], [44.3, 640.0], [44.4, 641.0], [44.5, 643.0], [44.6, 643.0], [44.7, 644.0], [44.8, 645.0], [44.9, 647.0], [45.0, 648.0], [45.1, 649.0], [45.2, 650.0], [45.3, 651.0], [45.4, 652.0], [45.5, 654.0], [45.6, 655.0], [45.7, 656.0], [45.8, 658.0], [45.9, 659.0], [46.0, 661.0], [46.1, 662.0], [46.2, 663.0], [46.3, 664.0], [46.4, 666.0], [46.5, 667.0], [46.6, 670.0], [46.7, 671.0], [46.8, 673.0], [46.9, 675.0], [47.0, 677.0], [47.1, 679.0], [47.2, 680.0], [47.3, 680.0], [47.4, 682.0], [47.5, 683.0], [47.6, 683.0], [47.7, 684.0], [47.8, 686.0], [47.9, 688.0], [48.0, 690.0], [48.1, 692.0], [48.2, 694.0], [48.3, 695.0], [48.4, 698.0], [48.5, 700.0], [48.6, 702.0], [48.7, 703.0], [48.8, 704.0], [48.9, 705.0], [49.0, 707.0], [49.1, 709.0], [49.2, 709.0], [49.3, 712.0], [49.4, 712.0], [49.5, 714.0], [49.6, 715.0], [49.7, 717.0], [49.8, 719.0], [49.9, 721.0], [50.0, 723.0], [50.1, 724.0], [50.2, 724.0], [50.3, 726.0], [50.4, 728.0], [50.5, 729.0], [50.6, 731.0], [50.7, 733.0], [50.8, 734.0], [50.9, 735.0], [51.0, 737.0], [51.1, 739.0], [51.2, 741.0], [51.3, 742.0], [51.4, 745.0], [51.5, 746.0], [51.6, 749.0], [51.7, 752.0], [51.8, 753.0], [51.9, 755.0], [52.0, 756.0], [52.1, 757.0], [52.2, 759.0], [52.3, 760.0], [52.4, 761.0], [52.5, 763.0], [52.6, 765.0], [52.7, 767.0], [52.8, 768.0], [52.9, 769.0], [53.0, 771.0], [53.1, 773.0], [53.2, 776.0], [53.3, 777.0], [53.4, 778.0], [53.5, 780.0], [53.6, 781.0], [53.7, 785.0], [53.8, 787.0], [53.9, 788.0], [54.0, 791.0], [54.1, 791.0], [54.2, 792.0], [54.3, 795.0], [54.4, 796.0], [54.5, 797.0], [54.6, 799.0], [54.7, 802.0], [54.8, 805.0], [54.9, 806.0], [55.0, 808.0], [55.1, 809.0], [55.2, 811.0], [55.3, 812.0], [55.4, 815.0], [55.5, 816.0], [55.6, 817.0], [55.7, 819.0], [55.8, 821.0], [55.9, 823.0], [56.0, 826.0], [56.1, 828.0], [56.2, 830.0], [56.3, 833.0], [56.4, 833.0], [56.5, 837.0], [56.6, 838.0], [56.7, 841.0], [56.8, 842.0], [56.9, 844.0], [57.0, 845.0], [57.1, 846.0], [57.2, 847.0], [57.3, 850.0], [57.4, 851.0], [57.5, 852.0], [57.6, 854.0], [57.7, 858.0], [57.8, 858.0], [57.9, 860.0], [58.0, 862.0], [58.1, 864.0], [58.2, 865.0], [58.3, 867.0], [58.4, 868.0], [58.5, 869.0], [58.6, 870.0], [58.7, 871.0], [58.8, 873.0], [58.9, 874.0], [59.0, 876.0], [59.1, 877.0], [59.2, 879.0], [59.3, 880.0], [59.4, 881.0], [59.5, 883.0], [59.6, 885.0], [59.7, 886.0], [59.8, 887.0], [59.9, 889.0], [60.0, 890.0], [60.1, 893.0], [60.2, 894.0], [60.3, 896.0], [60.4, 896.0], [60.5, 897.0], [60.6, 898.0], [60.7, 898.0], [60.8, 900.0], [60.9, 902.0], [61.0, 904.0], [61.1, 904.0], [61.2, 906.0], [61.3, 907.0], [61.4, 908.0], [61.5, 909.0], [61.6, 912.0], [61.7, 914.0], [61.8, 916.0], [61.9, 917.0], [62.0, 919.0], [62.1, 922.0], [62.2, 924.0], [62.3, 925.0], [62.4, 926.0], [62.5, 927.0], [62.6, 929.0], [62.7, 932.0], [62.8, 934.0], [62.9, 936.0], [63.0, 939.0], [63.1, 940.0], [63.2, 941.0], [63.3, 945.0], [63.4, 945.0], [63.5, 946.0], [63.6, 948.0], [63.7, 949.0], [63.8, 950.0], [63.9, 952.0], [64.0, 955.0], [64.1, 956.0], [64.2, 956.0], [64.3, 959.0], [64.4, 961.0], [64.5, 963.0], [64.6, 966.0], [64.7, 969.0], [64.8, 972.0], [64.9, 973.0], [65.0, 974.0], [65.1, 976.0], [65.2, 977.0], [65.3, 980.0], [65.4, 981.0], [65.5, 983.0], [65.6, 984.0], [65.7, 985.0], [65.8, 988.0], [65.9, 990.0], [66.0, 991.0], [66.1, 994.0], [66.2, 995.0], [66.3, 997.0], [66.4, 998.0], [66.5, 1001.0], [66.6, 1005.0], [66.7, 1006.0], [66.8, 1009.0], [66.9, 1011.0], [67.0, 1013.0], [67.1, 1015.0], [67.2, 1016.0], [67.3, 1019.0], [67.4, 1021.0], [67.5, 1022.0], [67.6, 1024.0], [67.7, 1025.0], [67.8, 1026.0], [67.9, 1027.0], [68.0, 1027.0], [68.1, 1029.0], [68.2, 1030.0], [68.3, 1031.0], [68.4, 1031.0], [68.5, 1033.0], [68.6, 1034.0], [68.7, 1036.0], [68.8, 1040.0], [68.9, 1042.0], [69.0, 1044.0], [69.1, 1046.0], [69.2, 1047.0], [69.3, 1048.0], [69.4, 1050.0], [69.5, 1051.0], [69.6, 1052.0], [69.7, 1055.0], [69.8, 1059.0], [69.9, 1060.0], [70.0, 1060.0], [70.1, 1062.0], [70.2, 1063.0], [70.3, 1065.0], [70.4, 1067.0], [70.5, 1068.0], [70.6, 1070.0], [70.7, 1071.0], [70.8, 1073.0], [70.9, 1074.0], [71.0, 1075.0], [71.1, 1077.0], [71.2, 1081.0], [71.3, 1084.0], [71.4, 1086.0], [71.5, 1087.0], [71.6, 1090.0], [71.7, 1093.0], [71.8, 1094.0], [71.9, 1096.0], [72.0, 1098.0], [72.1, 1099.0], [72.2, 1101.0], [72.3, 1102.0], [72.4, 1104.0], [72.5, 1107.0], [72.6, 1108.0], [72.7, 1109.0], [72.8, 1111.0], [72.9, 1112.0], [73.0, 1113.0], [73.1, 1115.0], [73.2, 1118.0], [73.3, 1119.0], [73.4, 1123.0], [73.5, 1125.0], [73.6, 1127.0], [73.7, 1130.0], [73.8, 1131.0], [73.9, 1133.0], [74.0, 1135.0], [74.1, 1137.0], [74.2, 1137.0], [74.3, 1140.0], [74.4, 1141.0], [74.5, 1144.0], [74.6, 1145.0], [74.7, 1147.0], [74.8, 1150.0], [74.9, 1152.0], [75.0, 1153.0], [75.1, 1155.0], [75.2, 1158.0], [75.3, 1160.0], [75.4, 1162.0], [75.5, 1164.0], [75.6, 1169.0], [75.7, 1171.0], [75.8, 1173.0], [75.9, 1176.0], [76.0, 1176.0], [76.1, 1178.0], [76.2, 1179.0], [76.3, 1182.0], [76.4, 1184.0], [76.5, 1186.0], [76.6, 1189.0], [76.7, 1190.0], [76.8, 1192.0], [76.9, 1195.0], [77.0, 1200.0], [77.1, 1203.0], [77.2, 1205.0], [77.3, 1208.0], [77.4, 1212.0], [77.5, 1216.0], [77.6, 1217.0], [77.7, 1221.0], [77.8, 1222.0], [77.9, 1226.0], [78.0, 1230.0], [78.1, 1232.0], [78.2, 1235.0], [78.3, 1236.0], [78.4, 1239.0], [78.5, 1245.0], [78.6, 1247.0], [78.7, 1252.0], [78.8, 1255.0], [78.9, 1258.0], [79.0, 1262.0], [79.1, 1263.0], [79.2, 1265.0], [79.3, 1267.0], [79.4, 1269.0], [79.5, 1272.0], [79.6, 1277.0], [79.7, 1278.0], [79.8, 1280.0], [79.9, 1282.0], [80.0, 1284.0], [80.1, 1289.0], [80.2, 1290.0], [80.3, 1292.0], [80.4, 1295.0], [80.5, 1298.0], [80.6, 1299.0], [80.7, 1302.0], [80.8, 1306.0], [80.9, 1307.0], [81.0, 1309.0], [81.1, 1312.0], [81.2, 1314.0], [81.3, 1316.0], [81.4, 1317.0], [81.5, 1320.0], [81.6, 1322.0], [81.7, 1324.0], [81.8, 1327.0], [81.9, 1330.0], [82.0, 1333.0], [82.1, 1335.0], [82.2, 1337.0], [82.3, 1339.0], [82.4, 1340.0], [82.5, 1343.0], [82.6, 1345.0], [82.7, 1348.0], [82.8, 1351.0], [82.9, 1352.0], [83.0, 1354.0], [83.1, 1355.0], [83.2, 1358.0], [83.3, 1359.0], [83.4, 1363.0], [83.5, 1364.0], [83.6, 1365.0], [83.7, 1367.0], [83.8, 1368.0], [83.9, 1370.0], [84.0, 1371.0], [84.1, 1374.0], [84.2, 1376.0], [84.3, 1378.0], [84.4, 1381.0], [84.5, 1384.0], [84.6, 1386.0], [84.7, 1388.0], [84.8, 1391.0], [84.9, 1394.0], [85.0, 1397.0], [85.1, 1401.0], [85.2, 1402.0], [85.3, 1407.0], [85.4, 1411.0], [85.5, 1413.0], [85.6, 1418.0], [85.7, 1420.0], [85.8, 1421.0], [85.9, 1424.0], [86.0, 1429.0], [86.1, 1431.0], [86.2, 1437.0], [86.3, 1439.0], [86.4, 1441.0], [86.5, 1445.0], [86.6, 1448.0], [86.7, 1450.0], [86.8, 1454.0], [86.9, 1457.0], [87.0, 1459.0], [87.1, 1460.0], [87.2, 1461.0], [87.3, 1462.0], [87.4, 1466.0], [87.5, 1472.0], [87.6, 1475.0], [87.7, 1478.0], [87.8, 1480.0], [87.9, 1486.0], [88.0, 1489.0], [88.1, 1495.0], [88.2, 1496.0], [88.3, 1498.0], [88.4, 1501.0], [88.5, 1506.0], [88.6, 1513.0], [88.7, 1517.0], [88.8, 1520.0], [88.9, 1524.0], [89.0, 1528.0], [89.1, 1533.0], [89.2, 1537.0], [89.3, 1542.0], [89.4, 1549.0], [89.5, 1554.0], [89.6, 1557.0], [89.7, 1560.0], [89.8, 1566.0], [89.9, 1569.0], [90.0, 1577.0], [90.1, 1584.0], [90.2, 1589.0], [90.3, 1599.0], [90.4, 1604.0], [90.5, 1607.0], [90.6, 1610.0], [90.7, 1616.0], [90.8, 1625.0], [90.9, 1630.0], [91.0, 1632.0], [91.1, 1640.0], [91.2, 1646.0], [91.3, 1651.0], [91.4, 1655.0], [91.5, 1660.0], [91.6, 1668.0], [91.7, 1674.0], [91.8, 1677.0], [91.9, 1682.0], [92.0, 1687.0], [92.1, 1693.0], [92.2, 1701.0], [92.3, 1704.0], [92.4, 1708.0], [92.5, 1716.0], [92.6, 1720.0], [92.7, 1726.0], [92.8, 1737.0], [92.9, 1744.0], [93.0, 1749.0], [93.1, 1752.0], [93.2, 1766.0], [93.3, 1780.0], [93.4, 1792.0], [93.5, 1796.0], [93.6, 1806.0], [93.7, 1814.0], [93.8, 1831.0], [93.9, 1836.0], [94.0, 1848.0], [94.1, 1856.0], [94.2, 1870.0], [94.3, 1874.0], [94.4, 1882.0], [94.5, 1890.0], [94.6, 1899.0], [94.7, 1905.0], [94.8, 1912.0], [94.9, 1916.0], [95.0, 1937.0], [95.1, 1954.0], [95.2, 1958.0], [95.3, 1984.0], [95.4, 2000.0], [95.5, 2012.0], [95.6, 2021.0], [95.7, 2041.0], [95.8, 2053.0], [95.9, 2062.0], [96.0, 2067.0], [96.1, 2081.0], [96.2, 2087.0], [96.3, 2105.0], [96.4, 2125.0], [96.5, 2130.0], [96.6, 2149.0], [96.7, 2155.0], [96.8, 2172.0], [96.9, 2178.0], [97.0, 2189.0], [97.1, 2208.0], [97.2, 2225.0], [97.3, 2251.0], [97.4, 2281.0], [97.5, 2300.0], [97.6, 2319.0], [97.7, 2330.0], [97.8, 2360.0], [97.9, 2374.0], [98.0, 2388.0], [98.1, 2412.0], [98.2, 2453.0], [98.3, 2482.0], [98.4, 2525.0], [98.5, 2550.0], [98.6, 2589.0], [98.7, 2641.0], [98.8, 2739.0], [98.9, 2853.0], [99.0, 2922.0], [99.1, 3043.0], [99.2, 3243.0], [99.3, 3344.0], [99.4, 3422.0], [99.5, 3555.0], [99.6, 3672.0], [99.7, 3801.0], [99.8, 4294.0], [99.9, 4831.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 587.0, "series": [{"data": [[600.0, 384.0], [700.0, 320.0], [800.0, 318.0], [900.0, 297.0], [1000.0, 294.0], [1100.0, 252.0], [1200.0, 189.0], [1300.0, 228.0], [1400.0, 170.0], [1500.0, 106.0], [1600.0, 94.0], [100.0, 46.0], [1700.0, 73.0], [1800.0, 54.0], [1900.0, 41.0], [2000.0, 45.0], [2100.0, 40.0], [2200.0, 24.0], [2300.0, 30.0], [2400.0, 14.0], [2500.0, 15.0], [2600.0, 7.0], [2700.0, 4.0], [2800.0, 5.0], [2900.0, 7.0], [3000.0, 3.0], [3100.0, 3.0], [3200.0, 4.0], [200.0, 570.0], [3300.0, 5.0], [3400.0, 5.0], [3500.0, 5.0], [3700.0, 2.0], [3600.0, 5.0], [3800.0, 1.0], [4000.0, 2.0], [4200.0, 1.0], [4100.0, 2.0], [4300.0, 1.0], [4600.0, 2.0], [300.0, 411.0], [4800.0, 2.0], [4700.0, 1.0], [5400.0, 2.0], [5600.0, 1.0], [5900.0, 1.0], [400.0, 587.0], [500.0, 517.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 605.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2965.0, "series": [{"data": [[0.0, 1620.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2965.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 605.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.8314606741573, "minX": 1.6023738E12, "maxY": 10.0, "series": [{"data": [[1.60237416E12, 10.0], [1.60237386E12, 10.0], [1.60237404E12, 10.0], [1.60237422E12, 10.0], [1.60237392E12, 10.0], [1.6023741E12, 10.0], [1.60237428E12, 9.8314606741573], [1.6023738E12, 10.0], [1.60237398E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237428E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 311.0, "minX": 1.0, "maxY": 3243.0, "series": [{"data": [[8.0, 312.0], [4.0, 1083.0], [2.0, 1188.0], [1.0, 3243.0], [9.0, 1796.0], [10.0, 870.2188766647381], [5.0, 588.0], [6.0, 311.0], [3.0, 1692.0], [7.0, 1326.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 870.9331406551074]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 229.63333333333333, "minX": 1.6023738E12, "maxY": 3545871.783333333, "series": [{"data": [[1.60237416E12, 3545871.783333333], [1.60237386E12, 3100877.55], [1.60237404E12, 3392325.3], [1.60237422E12, 3100382.933333333], [1.60237392E12, 3247760.1333333333], [1.6023741E12, 2606331.4], [1.60237428E12, 1351002.1833333333], [1.6023738E12, 219771.71666666667], [1.60237398E12, 3407838.966666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237416E12, 5477.666666666667], [1.60237386E12, 4648.333333333333], [1.60237404E12, 4542.1], [1.60237422E12, 5767.8], [1.60237392E12, 5541.116666666667], [1.6023741E12, 4970.7], [1.60237428E12, 2010.1], [1.6023738E12, 229.63333333333333], [1.60237398E12, 5389.883333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237428E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 788.6513157894743, "minX": 1.6023738E12, "maxY": 1597.4333333333334, "series": [{"data": [[1.60237416E12, 811.1457765667576], [1.60237386E12, 921.3478260869562], [1.60237404E12, 979.6474464579901], [1.60237422E12, 788.6513157894743], [1.60237392E12, 810.651941097725], [1.6023741E12, 876.6309696092625], [1.60237428E12, 1046.6853932584268], [1.6023738E12, 1597.4333333333334], [1.60237398E12, 843.233802816902]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237428E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 786.9486842105264, "minX": 1.6023738E12, "maxY": 1594.7333333333336, "series": [{"data": [[1.60237416E12, 809.299727520437], [1.60237386E12, 919.2049689440994], [1.60237404E12, 977.2454695222411], [1.60237422E12, 786.9486842105264], [1.60237392E12, 808.6412315930387], [1.6023741E12, 875.1997105643989], [1.60237428E12, 1044.764044943821], [1.6023738E12, 1594.7333333333336], [1.60237398E12, 841.1056338028164]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237428E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010526315789473691, "minX": 1.6023738E12, "maxY": 3.1, "series": [{"data": [[1.60237416E12, 0.012261580381471394], [1.60237386E12, 0.02018633540372671], [1.60237404E12, 0.024711696869851717], [1.60237422E12, 0.010526315789473691], [1.60237392E12, 0.01338688085676037], [1.6023741E12, 0.020260492040521], [1.60237428E12, 0.01123595505617979], [1.6023738E12, 3.1], [1.60237398E12, 0.014084507042253521]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237428E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 186.0, "minX": 1.6023738E12, "maxY": 5990.0, "series": [{"data": [[1.60237416E12, 3036.0], [1.60237386E12, 5473.0], [1.60237404E12, 5498.0], [1.60237422E12, 2931.0], [1.60237392E12, 4655.0], [1.6023741E12, 5990.0], [1.60237428E12, 3447.0], [1.6023738E12, 3741.0], [1.60237398E12, 3660.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237416E12, 195.61499982476235], [1.60237386E12, 203.80499984622003], [1.60237404E12, 202.0], [1.60237422E12, 195.0], [1.60237392E12, 203.19599946498872], [1.6023741E12, 209.0], [1.60237428E12, 231.8879984664917], [1.6023738E12, 238.0], [1.60237398E12, 198.3989998304844]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237416E12, 196.0], [1.60237386E12, 204.385500061512], [1.60237404E12, 202.0384001159668], [1.60237422E12, 195.0], [1.60237392E12, 204.40520007133483], [1.6023741E12, 209.0], [1.60237428E12, 237.67680061340332], [1.6023738E12, 238.0], [1.60237398E12, 199.03890006780625]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237416E12, 195.98249991238117], [1.60237386E12, 204.12749992311], [1.60237404E12, 202.0], [1.60237422E12, 195.0], [1.60237392E12, 204.10599991083146], [1.6023741E12, 209.0], [1.60237428E12, 235.10399923324584], [1.6023738E12, 238.0], [1.60237398E12, 198.7544999152422]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237416E12, 188.0], [1.60237386E12, 197.0], [1.60237404E12, 194.0], [1.60237422E12, 190.0], [1.60237392E12, 186.0], [1.6023741E12, 198.0], [1.60237428E12, 205.0], [1.6023738E12, 238.0], [1.60237398E12, 189.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237416E12, 625.5], [1.60237386E12, 808.5], [1.60237404E12, 851.0], [1.60237422E12, 657.5], [1.60237392E12, 618.0], [1.6023741E12, 754.0], [1.60237428E12, 951.0], [1.6023738E12, 1175.0], [1.60237398E12, 670.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237428E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 425.0, "minX": 1.0, "maxY": 2910.0, "series": [{"data": [[3.0, 2030.0], [4.0, 1206.0], [5.0, 1032.0], [6.0, 1300.0], [7.0, 1176.0], [8.0, 1029.0], [9.0, 961.0], [10.0, 918.0], [11.0, 845.0], [12.0, 725.0], [13.0, 714.5], [14.0, 684.0], [15.0, 654.0], [1.0, 2910.0], [16.0, 490.5], [17.0, 489.0], [18.0, 565.5], [19.0, 466.0], [20.0, 472.5], [21.0, 449.5], [22.0, 440.0], [23.0, 444.5], [24.0, 431.5], [25.0, 426.0], [26.0, 427.0], [27.0, 442.0], [28.0, 425.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 424.5, "minX": 1.0, "maxY": 2901.5, "series": [{"data": [[3.0, 2021.0], [4.0, 1203.5], [5.0, 1029.5], [6.0, 1298.5], [7.0, 1173.5], [8.0, 1023.0], [9.0, 957.0], [10.0, 916.0], [11.0, 842.0], [12.0, 724.5], [13.0, 712.5], [14.0, 683.5], [15.0, 653.0], [1.0, 2901.5], [16.0, 489.5], [17.0, 489.0], [18.0, 565.0], [19.0, 466.0], [20.0, 472.0], [21.0, 449.5], [22.0, 440.0], [23.0, 444.0], [24.0, 431.5], [25.0, 426.0], [26.0, 427.0], [27.0, 442.0], [28.0, 424.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.6023738E12, "maxY": 12.666666666666666, "series": [{"data": [[1.60237416E12, 12.233333333333333], [1.60237386E12, 10.733333333333333], [1.60237404E12, 10.116666666666667], [1.60237422E12, 12.666666666666666], [1.60237392E12, 12.45], [1.6023741E12, 11.516666666666667], [1.60237428E12, 4.283333333333333], [1.6023738E12, 0.6666666666666666], [1.60237398E12, 11.833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237428E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.6023738E12, "maxY": 12.666666666666666, "series": [{"data": [[1.60237416E12, 12.233333333333333], [1.60237386E12, 10.733333333333333], [1.60237404E12, 10.116666666666667], [1.60237422E12, 12.666666666666666], [1.60237392E12, 12.45], [1.6023741E12, 11.516666666666667], [1.60237428E12, 4.45], [1.6023738E12, 0.5], [1.60237398E12, 11.833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237428E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.6023738E12, "maxY": 12.666666666666666, "series": [{"data": [[1.60237416E12, 12.233333333333333], [1.60237386E12, 10.733333333333333], [1.60237404E12, 10.116666666666667], [1.60237422E12, 12.666666666666666], [1.60237392E12, 12.45], [1.6023741E12, 11.516666666666667], [1.60237428E12, 4.45], [1.6023738E12, 0.5], [1.60237398E12, 11.833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237428E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.6023738E12, "maxY": 12.666666666666666, "series": [{"data": [[1.60237416E12, 12.233333333333333], [1.60237386E12, 10.733333333333333], [1.60237404E12, 10.116666666666667], [1.60237422E12, 12.666666666666666], [1.60237392E12, 12.45], [1.6023741E12, 11.516666666666667], [1.60237428E12, 4.45], [1.6023738E12, 0.5], [1.60237398E12, 11.833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237428E12, "title": "Total Transactions Per Second"}},
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

