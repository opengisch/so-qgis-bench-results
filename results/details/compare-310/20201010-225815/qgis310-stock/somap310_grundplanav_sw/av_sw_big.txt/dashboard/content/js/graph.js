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
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 5804.0, "series": [{"data": [[0.0, 183.0], [0.1, 186.0], [0.2, 189.0], [0.3, 190.0], [0.4, 192.0], [0.5, 194.0], [0.6, 196.0], [0.7, 197.0], [0.8, 197.0], [0.9, 198.0], [1.0, 198.0], [1.1, 199.0], [1.2, 200.0], [1.3, 201.0], [1.4, 201.0], [1.5, 202.0], [1.6, 204.0], [1.7, 205.0], [1.8, 205.0], [1.9, 206.0], [2.0, 207.0], [2.1, 208.0], [2.2, 209.0], [2.3, 209.0], [2.4, 210.0], [2.5, 211.0], [2.6, 211.0], [2.7, 214.0], [2.8, 215.0], [2.9, 215.0], [3.0, 216.0], [3.1, 217.0], [3.2, 217.0], [3.3, 218.0], [3.4, 218.0], [3.5, 219.0], [3.6, 220.0], [3.7, 221.0], [3.8, 222.0], [3.9, 222.0], [4.0, 223.0], [4.1, 223.0], [4.2, 224.0], [4.3, 225.0], [4.4, 226.0], [4.5, 227.0], [4.6, 228.0], [4.7, 229.0], [4.8, 229.0], [4.9, 230.0], [5.0, 231.0], [5.1, 231.0], [5.2, 231.0], [5.3, 233.0], [5.4, 233.0], [5.5, 234.0], [5.6, 234.0], [5.7, 236.0], [5.8, 237.0], [5.9, 237.0], [6.0, 238.0], [6.1, 240.0], [6.2, 241.0], [6.3, 242.0], [6.4, 244.0], [6.5, 245.0], [6.6, 246.0], [6.7, 247.0], [6.8, 247.0], [6.9, 248.0], [7.0, 249.0], [7.1, 250.0], [7.2, 252.0], [7.3, 254.0], [7.4, 255.0], [7.5, 256.0], [7.6, 257.0], [7.7, 258.0], [7.8, 259.0], [7.9, 262.0], [8.0, 263.0], [8.1, 265.0], [8.2, 265.0], [8.3, 267.0], [8.4, 268.0], [8.5, 270.0], [8.6, 271.0], [8.7, 271.0], [8.8, 272.0], [8.9, 273.0], [9.0, 274.0], [9.1, 276.0], [9.2, 276.0], [9.3, 277.0], [9.4, 279.0], [9.5, 280.0], [9.6, 281.0], [9.7, 281.0], [9.8, 282.0], [9.9, 283.0], [10.0, 284.0], [10.1, 285.0], [10.2, 286.0], [10.3, 286.0], [10.4, 288.0], [10.5, 289.0], [10.6, 290.0], [10.7, 291.0], [10.8, 292.0], [10.9, 293.0], [11.0, 294.0], [11.1, 295.0], [11.2, 296.0], [11.3, 297.0], [11.4, 298.0], [11.5, 299.0], [11.6, 300.0], [11.7, 301.0], [11.8, 302.0], [11.9, 304.0], [12.0, 305.0], [12.1, 306.0], [12.2, 307.0], [12.3, 308.0], [12.4, 309.0], [12.5, 310.0], [12.6, 310.0], [12.7, 311.0], [12.8, 312.0], [12.9, 313.0], [13.0, 314.0], [13.1, 316.0], [13.2, 317.0], [13.3, 317.0], [13.4, 319.0], [13.5, 320.0], [13.6, 321.0], [13.7, 322.0], [13.8, 322.0], [13.9, 324.0], [14.0, 325.0], [14.1, 326.0], [14.2, 327.0], [14.3, 328.0], [14.4, 329.0], [14.5, 331.0], [14.6, 331.0], [14.7, 332.0], [14.8, 333.0], [14.9, 334.0], [15.0, 335.0], [15.1, 337.0], [15.2, 338.0], [15.3, 340.0], [15.4, 342.0], [15.5, 345.0], [15.6, 346.0], [15.7, 347.0], [15.8, 351.0], [15.9, 353.0], [16.0, 355.0], [16.1, 356.0], [16.2, 360.0], [16.3, 361.0], [16.4, 363.0], [16.5, 364.0], [16.6, 367.0], [16.7, 368.0], [16.8, 369.0], [16.9, 372.0], [17.0, 374.0], [17.1, 375.0], [17.2, 375.0], [17.3, 377.0], [17.4, 377.0], [17.5, 378.0], [17.6, 379.0], [17.7, 380.0], [17.8, 381.0], [17.9, 382.0], [18.0, 383.0], [18.1, 384.0], [18.2, 384.0], [18.3, 386.0], [18.4, 387.0], [18.5, 389.0], [18.6, 389.0], [18.7, 390.0], [18.8, 391.0], [18.9, 392.0], [19.0, 393.0], [19.1, 395.0], [19.2, 396.0], [19.3, 397.0], [19.4, 398.0], [19.5, 400.0], [19.6, 400.0], [19.7, 401.0], [19.8, 402.0], [19.9, 402.0], [20.0, 403.0], [20.1, 404.0], [20.2, 405.0], [20.3, 406.0], [20.4, 406.0], [20.5, 407.0], [20.6, 408.0], [20.7, 408.0], [20.8, 409.0], [20.9, 410.0], [21.0, 410.0], [21.1, 412.0], [21.2, 413.0], [21.3, 414.0], [21.4, 415.0], [21.5, 415.0], [21.6, 416.0], [21.7, 417.0], [21.8, 418.0], [21.9, 419.0], [22.0, 420.0], [22.1, 421.0], [22.2, 422.0], [22.3, 423.0], [22.4, 423.0], [22.5, 424.0], [22.6, 424.0], [22.7, 425.0], [22.8, 425.0], [22.9, 426.0], [23.0, 427.0], [23.1, 428.0], [23.2, 429.0], [23.3, 430.0], [23.4, 431.0], [23.5, 432.0], [23.6, 433.0], [23.7, 433.0], [23.8, 434.0], [23.9, 435.0], [24.0, 435.0], [24.1, 436.0], [24.2, 437.0], [24.3, 438.0], [24.4, 439.0], [24.5, 440.0], [24.6, 441.0], [24.7, 442.0], [24.8, 443.0], [24.9, 444.0], [25.0, 445.0], [25.1, 446.0], [25.2, 447.0], [25.3, 448.0], [25.4, 449.0], [25.5, 449.0], [25.6, 450.0], [25.7, 450.0], [25.8, 452.0], [25.9, 452.0], [26.0, 453.0], [26.1, 454.0], [26.2, 455.0], [26.3, 455.0], [26.4, 456.0], [26.5, 457.0], [26.6, 457.0], [26.7, 458.0], [26.8, 459.0], [26.9, 460.0], [27.0, 461.0], [27.1, 462.0], [27.2, 463.0], [27.3, 464.0], [27.4, 465.0], [27.5, 466.0], [27.6, 466.0], [27.7, 468.0], [27.8, 468.0], [27.9, 469.0], [28.0, 470.0], [28.1, 471.0], [28.2, 472.0], [28.3, 472.0], [28.4, 472.0], [28.5, 474.0], [28.6, 474.0], [28.7, 475.0], [28.8, 476.0], [28.9, 476.0], [29.0, 477.0], [29.1, 479.0], [29.2, 480.0], [29.3, 481.0], [29.4, 482.0], [29.5, 482.0], [29.6, 483.0], [29.7, 484.0], [29.8, 485.0], [29.9, 487.0], [30.0, 487.0], [30.1, 488.0], [30.2, 488.0], [30.3, 489.0], [30.4, 490.0], [30.5, 490.0], [30.6, 491.0], [30.7, 492.0], [30.8, 493.0], [30.9, 493.0], [31.0, 494.0], [31.1, 496.0], [31.2, 497.0], [31.3, 499.0], [31.4, 500.0], [31.5, 501.0], [31.6, 503.0], [31.7, 503.0], [31.8, 504.0], [31.9, 504.0], [32.0, 505.0], [32.1, 506.0], [32.2, 508.0], [32.3, 509.0], [32.4, 509.0], [32.5, 511.0], [32.6, 513.0], [32.7, 514.0], [32.8, 515.0], [32.9, 516.0], [33.0, 517.0], [33.1, 518.0], [33.2, 519.0], [33.3, 520.0], [33.4, 521.0], [33.5, 523.0], [33.6, 523.0], [33.7, 524.0], [33.8, 525.0], [33.9, 526.0], [34.0, 528.0], [34.1, 529.0], [34.2, 530.0], [34.3, 531.0], [34.4, 531.0], [34.5, 532.0], [34.6, 535.0], [34.7, 535.0], [34.8, 537.0], [34.9, 538.0], [35.0, 539.0], [35.1, 540.0], [35.2, 541.0], [35.3, 543.0], [35.4, 544.0], [35.5, 545.0], [35.6, 546.0], [35.7, 547.0], [35.8, 547.0], [35.9, 548.0], [36.0, 549.0], [36.1, 550.0], [36.2, 551.0], [36.3, 552.0], [36.4, 553.0], [36.5, 555.0], [36.6, 556.0], [36.7, 557.0], [36.8, 557.0], [36.9, 558.0], [37.0, 560.0], [37.1, 560.0], [37.2, 561.0], [37.3, 561.0], [37.4, 562.0], [37.5, 563.0], [37.6, 563.0], [37.7, 564.0], [37.8, 565.0], [37.9, 566.0], [38.0, 566.0], [38.1, 567.0], [38.2, 567.0], [38.3, 568.0], [38.4, 569.0], [38.5, 570.0], [38.6, 571.0], [38.7, 572.0], [38.8, 573.0], [38.9, 574.0], [39.0, 575.0], [39.1, 576.0], [39.2, 578.0], [39.3, 578.0], [39.4, 580.0], [39.5, 581.0], [39.6, 582.0], [39.7, 583.0], [39.8, 584.0], [39.9, 584.0], [40.0, 585.0], [40.1, 586.0], [40.2, 587.0], [40.3, 589.0], [40.4, 589.0], [40.5, 590.0], [40.6, 591.0], [40.7, 593.0], [40.8, 595.0], [40.9, 596.0], [41.0, 597.0], [41.1, 597.0], [41.2, 598.0], [41.3, 599.0], [41.4, 599.0], [41.5, 600.0], [41.6, 602.0], [41.7, 602.0], [41.8, 604.0], [41.9, 604.0], [42.0, 604.0], [42.1, 606.0], [42.2, 607.0], [42.3, 609.0], [42.4, 610.0], [42.5, 611.0], [42.6, 612.0], [42.7, 612.0], [42.8, 614.0], [42.9, 615.0], [43.0, 616.0], [43.1, 616.0], [43.2, 617.0], [43.3, 618.0], [43.4, 619.0], [43.5, 620.0], [43.6, 621.0], [43.7, 621.0], [43.8, 622.0], [43.9, 622.0], [44.0, 623.0], [44.1, 624.0], [44.2, 625.0], [44.3, 626.0], [44.4, 627.0], [44.5, 627.0], [44.6, 629.0], [44.7, 631.0], [44.8, 633.0], [44.9, 633.0], [45.0, 635.0], [45.1, 636.0], [45.2, 637.0], [45.3, 639.0], [45.4, 639.0], [45.5, 640.0], [45.6, 642.0], [45.7, 643.0], [45.8, 644.0], [45.9, 646.0], [46.0, 647.0], [46.1, 650.0], [46.2, 650.0], [46.3, 652.0], [46.4, 654.0], [46.5, 655.0], [46.6, 656.0], [46.7, 659.0], [46.8, 660.0], [46.9, 663.0], [47.0, 664.0], [47.1, 664.0], [47.2, 666.0], [47.3, 667.0], [47.4, 670.0], [47.5, 671.0], [47.6, 672.0], [47.7, 673.0], [47.8, 674.0], [47.9, 677.0], [48.0, 678.0], [48.1, 678.0], [48.2, 680.0], [48.3, 680.0], [48.4, 682.0], [48.5, 683.0], [48.6, 684.0], [48.7, 684.0], [48.8, 686.0], [48.9, 689.0], [49.0, 692.0], [49.1, 693.0], [49.2, 695.0], [49.3, 696.0], [49.4, 698.0], [49.5, 699.0], [49.6, 699.0], [49.7, 701.0], [49.8, 702.0], [49.9, 704.0], [50.0, 705.0], [50.1, 707.0], [50.2, 709.0], [50.3, 710.0], [50.4, 711.0], [50.5, 713.0], [50.6, 715.0], [50.7, 716.0], [50.8, 718.0], [50.9, 719.0], [51.0, 722.0], [51.1, 725.0], [51.2, 726.0], [51.3, 728.0], [51.4, 730.0], [51.5, 732.0], [51.6, 734.0], [51.7, 734.0], [51.8, 735.0], [51.9, 736.0], [52.0, 738.0], [52.1, 739.0], [52.2, 740.0], [52.3, 741.0], [52.4, 743.0], [52.5, 746.0], [52.6, 747.0], [52.7, 750.0], [52.8, 750.0], [52.9, 753.0], [53.0, 754.0], [53.1, 756.0], [53.2, 758.0], [53.3, 759.0], [53.4, 760.0], [53.5, 760.0], [53.6, 761.0], [53.7, 763.0], [53.8, 764.0], [53.9, 766.0], [54.0, 768.0], [54.1, 771.0], [54.2, 772.0], [54.3, 775.0], [54.4, 777.0], [54.5, 778.0], [54.6, 779.0], [54.7, 781.0], [54.8, 784.0], [54.9, 787.0], [55.0, 790.0], [55.1, 791.0], [55.2, 792.0], [55.3, 794.0], [55.4, 795.0], [55.5, 797.0], [55.6, 798.0], [55.7, 799.0], [55.8, 802.0], [55.9, 804.0], [56.0, 808.0], [56.1, 810.0], [56.2, 811.0], [56.3, 813.0], [56.4, 815.0], [56.5, 816.0], [56.6, 818.0], [56.7, 820.0], [56.8, 821.0], [56.9, 824.0], [57.0, 826.0], [57.1, 828.0], [57.2, 830.0], [57.3, 830.0], [57.4, 833.0], [57.5, 835.0], [57.6, 838.0], [57.7, 839.0], [57.8, 841.0], [57.9, 844.0], [58.0, 846.0], [58.1, 849.0], [58.2, 851.0], [58.3, 852.0], [58.4, 854.0], [58.5, 857.0], [58.6, 859.0], [58.7, 861.0], [58.8, 862.0], [58.9, 863.0], [59.0, 866.0], [59.1, 867.0], [59.2, 868.0], [59.3, 870.0], [59.4, 871.0], [59.5, 874.0], [59.6, 875.0], [59.7, 876.0], [59.8, 878.0], [59.9, 880.0], [60.0, 882.0], [60.1, 883.0], [60.2, 884.0], [60.3, 886.0], [60.4, 888.0], [60.5, 891.0], [60.6, 893.0], [60.7, 894.0], [60.8, 895.0], [60.9, 897.0], [61.0, 898.0], [61.1, 900.0], [61.2, 902.0], [61.3, 903.0], [61.4, 904.0], [61.5, 906.0], [61.6, 909.0], [61.7, 909.0], [61.8, 912.0], [61.9, 913.0], [62.0, 913.0], [62.1, 915.0], [62.2, 916.0], [62.3, 918.0], [62.4, 920.0], [62.5, 921.0], [62.6, 922.0], [62.7, 926.0], [62.8, 927.0], [62.9, 927.0], [63.0, 930.0], [63.1, 932.0], [63.2, 935.0], [63.3, 937.0], [63.4, 937.0], [63.5, 938.0], [63.6, 940.0], [63.7, 942.0], [63.8, 942.0], [63.9, 945.0], [64.0, 946.0], [64.1, 949.0], [64.2, 950.0], [64.3, 954.0], [64.4, 956.0], [64.5, 959.0], [64.6, 960.0], [64.7, 961.0], [64.8, 963.0], [64.9, 965.0], [65.0, 965.0], [65.1, 967.0], [65.2, 968.0], [65.3, 970.0], [65.4, 972.0], [65.5, 973.0], [65.6, 975.0], [65.7, 976.0], [65.8, 977.0], [65.9, 979.0], [66.0, 980.0], [66.1, 982.0], [66.2, 983.0], [66.3, 984.0], [66.4, 985.0], [66.5, 987.0], [66.6, 988.0], [66.7, 989.0], [66.8, 990.0], [66.9, 994.0], [67.0, 997.0], [67.1, 999.0], [67.2, 1000.0], [67.3, 1003.0], [67.4, 1006.0], [67.5, 1007.0], [67.6, 1009.0], [67.7, 1011.0], [67.8, 1012.0], [67.9, 1014.0], [68.0, 1017.0], [68.1, 1019.0], [68.2, 1021.0], [68.3, 1023.0], [68.4, 1025.0], [68.5, 1027.0], [68.6, 1028.0], [68.7, 1030.0], [68.8, 1031.0], [68.9, 1033.0], [69.0, 1034.0], [69.1, 1035.0], [69.2, 1038.0], [69.3, 1039.0], [69.4, 1040.0], [69.5, 1041.0], [69.6, 1042.0], [69.7, 1044.0], [69.8, 1048.0], [69.9, 1049.0], [70.0, 1051.0], [70.1, 1052.0], [70.2, 1054.0], [70.3, 1055.0], [70.4, 1057.0], [70.5, 1059.0], [70.6, 1060.0], [70.7, 1062.0], [70.8, 1065.0], [70.9, 1066.0], [71.0, 1068.0], [71.1, 1070.0], [71.2, 1073.0], [71.3, 1075.0], [71.4, 1077.0], [71.5, 1078.0], [71.6, 1080.0], [71.7, 1082.0], [71.8, 1083.0], [71.9, 1087.0], [72.0, 1088.0], [72.1, 1091.0], [72.2, 1093.0], [72.3, 1093.0], [72.4, 1098.0], [72.5, 1101.0], [72.6, 1102.0], [72.7, 1104.0], [72.8, 1106.0], [72.9, 1107.0], [73.0, 1111.0], [73.1, 1113.0], [73.2, 1116.0], [73.3, 1117.0], [73.4, 1119.0], [73.5, 1120.0], [73.6, 1120.0], [73.7, 1124.0], [73.8, 1125.0], [73.9, 1126.0], [74.0, 1127.0], [74.1, 1129.0], [74.2, 1131.0], [74.3, 1134.0], [74.4, 1135.0], [74.5, 1136.0], [74.6, 1137.0], [74.7, 1139.0], [74.8, 1142.0], [74.9, 1144.0], [75.0, 1147.0], [75.1, 1150.0], [75.2, 1152.0], [75.3, 1153.0], [75.4, 1157.0], [75.5, 1158.0], [75.6, 1160.0], [75.7, 1162.0], [75.8, 1163.0], [75.9, 1167.0], [76.0, 1170.0], [76.1, 1172.0], [76.2, 1175.0], [76.3, 1176.0], [76.4, 1179.0], [76.5, 1181.0], [76.6, 1183.0], [76.7, 1185.0], [76.8, 1189.0], [76.9, 1190.0], [77.0, 1193.0], [77.1, 1195.0], [77.2, 1198.0], [77.3, 1202.0], [77.4, 1205.0], [77.5, 1207.0], [77.6, 1211.0], [77.7, 1213.0], [77.8, 1215.0], [77.9, 1218.0], [78.0, 1222.0], [78.1, 1225.0], [78.2, 1230.0], [78.3, 1233.0], [78.4, 1236.0], [78.5, 1239.0], [78.6, 1241.0], [78.7, 1246.0], [78.8, 1251.0], [78.9, 1252.0], [79.0, 1254.0], [79.1, 1256.0], [79.2, 1260.0], [79.3, 1263.0], [79.4, 1266.0], [79.5, 1268.0], [79.6, 1273.0], [79.7, 1276.0], [79.8, 1280.0], [79.9, 1281.0], [80.0, 1282.0], [80.1, 1285.0], [80.2, 1289.0], [80.3, 1292.0], [80.4, 1297.0], [80.5, 1302.0], [80.6, 1306.0], [80.7, 1308.0], [80.8, 1311.0], [80.9, 1312.0], [81.0, 1313.0], [81.1, 1320.0], [81.2, 1322.0], [81.3, 1325.0], [81.4, 1326.0], [81.5, 1327.0], [81.6, 1332.0], [81.7, 1334.0], [81.8, 1335.0], [81.9, 1337.0], [82.0, 1339.0], [82.1, 1343.0], [82.2, 1344.0], [82.3, 1346.0], [82.4, 1349.0], [82.5, 1351.0], [82.6, 1353.0], [82.7, 1355.0], [82.8, 1356.0], [82.9, 1358.0], [83.0, 1359.0], [83.1, 1362.0], [83.2, 1366.0], [83.3, 1367.0], [83.4, 1370.0], [83.5, 1372.0], [83.6, 1374.0], [83.7, 1376.0], [83.8, 1379.0], [83.9, 1385.0], [84.0, 1386.0], [84.1, 1390.0], [84.2, 1393.0], [84.3, 1395.0], [84.4, 1396.0], [84.5, 1399.0], [84.6, 1400.0], [84.7, 1402.0], [84.8, 1405.0], [84.9, 1407.0], [85.0, 1408.0], [85.1, 1412.0], [85.2, 1415.0], [85.3, 1420.0], [85.4, 1422.0], [85.5, 1424.0], [85.6, 1425.0], [85.7, 1427.0], [85.8, 1430.0], [85.9, 1434.0], [86.0, 1435.0], [86.1, 1438.0], [86.2, 1442.0], [86.3, 1443.0], [86.4, 1448.0], [86.5, 1454.0], [86.6, 1456.0], [86.7, 1460.0], [86.8, 1462.0], [86.9, 1469.0], [87.0, 1471.0], [87.1, 1473.0], [87.2, 1475.0], [87.3, 1481.0], [87.4, 1483.0], [87.5, 1484.0], [87.6, 1487.0], [87.7, 1491.0], [87.8, 1494.0], [87.9, 1499.0], [88.0, 1502.0], [88.1, 1506.0], [88.2, 1511.0], [88.3, 1515.0], [88.4, 1523.0], [88.5, 1529.0], [88.6, 1536.0], [88.7, 1540.0], [88.8, 1546.0], [88.9, 1553.0], [89.0, 1559.0], [89.1, 1564.0], [89.2, 1567.0], [89.3, 1575.0], [89.4, 1578.0], [89.5, 1580.0], [89.6, 1581.0], [89.7, 1586.0], [89.8, 1589.0], [89.9, 1595.0], [90.0, 1600.0], [90.1, 1604.0], [90.2, 1613.0], [90.3, 1619.0], [90.4, 1622.0], [90.5, 1631.0], [90.6, 1640.0], [90.7, 1644.0], [90.8, 1647.0], [90.9, 1651.0], [91.0, 1654.0], [91.1, 1662.0], [91.2, 1664.0], [91.3, 1668.0], [91.4, 1675.0], [91.5, 1683.0], [91.6, 1692.0], [91.7, 1698.0], [91.8, 1699.0], [91.9, 1704.0], [92.0, 1709.0], [92.1, 1714.0], [92.2, 1722.0], [92.3, 1730.0], [92.4, 1740.0], [92.5, 1742.0], [92.6, 1747.0], [92.7, 1752.0], [92.8, 1761.0], [92.9, 1768.0], [93.0, 1777.0], [93.1, 1786.0], [93.2, 1795.0], [93.3, 1805.0], [93.4, 1807.0], [93.5, 1814.0], [93.6, 1823.0], [93.7, 1842.0], [93.8, 1846.0], [93.9, 1853.0], [94.0, 1859.0], [94.1, 1865.0], [94.2, 1873.0], [94.3, 1896.0], [94.4, 1906.0], [94.5, 1915.0], [94.6, 1922.0], [94.7, 1933.0], [94.8, 1944.0], [94.9, 1960.0], [95.0, 1968.0], [95.1, 1981.0], [95.2, 1989.0], [95.3, 1998.0], [95.4, 2005.0], [95.5, 2026.0], [95.6, 2029.0], [95.7, 2036.0], [95.8, 2047.0], [95.9, 2058.0], [96.0, 2065.0], [96.1, 2075.0], [96.2, 2087.0], [96.3, 2107.0], [96.4, 2124.0], [96.5, 2137.0], [96.6, 2153.0], [96.7, 2160.0], [96.8, 2179.0], [96.9, 2203.0], [97.0, 2215.0], [97.1, 2233.0], [97.2, 2252.0], [97.3, 2263.0], [97.4, 2316.0], [97.5, 2324.0], [97.6, 2341.0], [97.7, 2364.0], [97.8, 2384.0], [97.9, 2420.0], [98.0, 2443.0], [98.1, 2480.0], [98.2, 2530.0], [98.3, 2557.0], [98.4, 2577.0], [98.5, 2655.0], [98.6, 2719.0], [98.7, 2745.0], [98.8, 2770.0], [98.9, 2841.0], [99.0, 2947.0], [99.1, 2988.0], [99.2, 3125.0], [99.3, 3290.0], [99.4, 3334.0], [99.5, 3551.0], [99.6, 3955.0], [99.7, 4327.0], [99.8, 4454.0], [99.9, 4881.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 613.0, "series": [{"data": [[600.0, 426.0], [700.0, 316.0], [800.0, 277.0], [900.0, 318.0], [1000.0, 275.0], [1100.0, 248.0], [1200.0, 166.0], [1300.0, 215.0], [1400.0, 174.0], [1500.0, 106.0], [1600.0, 95.0], [1700.0, 75.0], [1800.0, 59.0], [1900.0, 48.0], [2000.0, 48.0], [2100.0, 34.0], [2300.0, 26.0], [2200.0, 24.0], [2400.0, 14.0], [2500.0, 14.0], [2600.0, 8.0], [2700.0, 15.0], [2800.0, 5.0], [2900.0, 9.0], [3000.0, 2.0], [3100.0, 3.0], [3200.0, 7.0], [3300.0, 3.0], [3400.0, 4.0], [3500.0, 2.0], [3600.0, 2.0], [3700.0, 1.0], [3900.0, 3.0], [4000.0, 2.0], [4300.0, 5.0], [4100.0, 1.0], [4600.0, 1.0], [4400.0, 1.0], [4800.0, 3.0], [4700.0, 1.0], [5200.0, 1.0], [5400.0, 2.0], [5700.0, 1.0], [5800.0, 1.0], [100.0, 62.0], [200.0, 535.0], [300.0, 415.0], [400.0, 613.0], [500.0, 524.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 626.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2934.0, "series": [{"data": [[0.0, 1630.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2934.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 626.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.53125, "minX": 1.60237092E12, "maxY": 10.0, "series": [{"data": [[1.60237098E12, 10.0], [1.60237128E12, 10.0], [1.60237134E12, 10.0], [1.60237116E12, 10.0], [1.60237092E12, 10.0], [1.60237122E12, 10.0], [1.60237104E12, 10.0], [1.6023711E12, 10.0], [1.6023714E12, 9.53125]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023714E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 332.0, "minX": 1.0, "maxY": 2692.0, "series": [{"data": [[8.0, 1313.0], [4.0, 829.0], [2.0, 2678.0], [1.0, 2692.0], [9.0, 1654.0], [10.0, 869.6562439683458], [5.0, 698.0], [6.0, 1865.0], [3.0, 837.0], [7.0, 332.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 870.6333333333333]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 728.55, "minX": 1.60237092E12, "maxY": 3795719.0833333335, "series": [{"data": [[1.60237098E12, 2525548.5833333335], [1.60237128E12, 3795719.0833333335], [1.60237134E12, 3124864.1333333333], [1.60237116E12, 3156178.8333333335], [1.60237092E12, 1271852.2333333334], [1.60237122E12, 2491043.1166666667], [1.60237104E12, 3710030.3333333335], [1.6023711E12, 3477820.1166666667], [1.6023714E12, 419177.38333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237098E12, 5223.183333333333], [1.60237128E12, 5438.05], [1.60237134E12, 5371.183333333333], [1.60237116E12, 4481.366666666667], [1.60237092E12, 1388.6833333333334], [1.60237122E12, 5146.216666666666], [1.60237104E12, 5388.916666666667], [1.6023711E12, 5411.183333333333], [1.6023714E12, 728.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023714E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 829.5623268698065, "minX": 1.60237092E12, "maxY": 1171.427083333333, "series": [{"data": [[1.60237098E12, 829.5623268698065], [1.60237128E12, 836.8393854748606], [1.60237134E12, 840.5323943661969], [1.60237116E12, 978.7422512234906], [1.60237092E12, 1136.2712765957451], [1.60237122E12, 840.2022471910112], [1.60237104E12, 838.5624999999995], [1.6023711E12, 835.4193548387101], [1.6023714E12, 1171.427083333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023714E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 827.8947368421046, "minX": 1.60237092E12, "maxY": 1169.9166666666665, "series": [{"data": [[1.60237098E12, 827.8947368421046], [1.60237128E12, 835.0321229050269], [1.60237134E12, 839.0901408450704], [1.60237116E12, 976.5236541598705], [1.60237092E12, 1133.0638297872338], [1.60237122E12, 838.9817415730329], [1.60237104E12, 836.1236111111125], [1.6023711E12, 833.3071528751749], [1.6023714E12, 1169.9166666666665]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023714E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60237092E12, "maxY": 0.5159574468085101, "series": [{"data": [[1.60237098E12, 0.013850415512465374], [1.60237128E12, 0.015363128491620118], [1.60237134E12, 0.0183098591549296], [1.60237116E12, 0.02610114192495923], [1.60237092E12, 0.5159574468085101], [1.60237122E12, 0.012640449438202249], [1.60237104E12, 0.018055555555555564], [1.6023711E12, 0.01262272089761571], [1.6023714E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023714E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 183.0, "minX": 1.60237092E12, "maxY": 5804.0, "series": [{"data": [[1.60237098E12, 5721.0], [1.60237128E12, 2419.0], [1.60237134E12, 3771.0], [1.60237116E12, 5462.0], [1.60237092E12, 4844.0], [1.60237122E12, 5804.0], [1.60237104E12, 4790.0], [1.6023711E12, 4370.0], [1.6023714E12, 3290.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237098E12, 208.01399965524672], [1.60237128E12, 197.0], [1.60237134E12, 197.3989998304844], [1.60237116E12, 204.051999707222], [1.60237092E12, 199.4019999098778], [1.60237122E12, 199.0], [1.60237104E12, 195.0], [1.6023711E12, 193.0], [1.6023714E12, 310.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237098E12, 209.3154001379013], [1.60237128E12, 197.0], [1.60237134E12, 198.0], [1.60237116E12, 205.2358001756668], [1.60237092E12, 199.7422000360489], [1.60237122E12, 199.0], [1.60237104E12, 195.1379000687599], [1.6023711E12, 193.1372001361847], [1.6023714E12, 310.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237098E12, 208.73699982762338], [1.60237128E12, 197.0], [1.60237134E12, 197.7544999152422], [1.60237116E12, 204.665999853611], [1.60237092E12, 199.5909999549389], [1.60237122E12, 199.0], [1.60237104E12, 195.0], [1.6023711E12, 193.0], [1.6023714E12, 310.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237098E12, 192.0], [1.60237128E12, 186.0], [1.60237134E12, 189.0], [1.60237116E12, 188.0], [1.60237092E12, 198.0], [1.60237122E12, 186.0], [1.60237104E12, 183.0], [1.6023711E12, 186.0], [1.6023714E12, 310.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237098E12, 673.5], [1.60237128E12, 654.5], [1.60237134E12, 707.0], [1.60237116E12, 853.0], [1.60237092E12, 899.0], [1.60237122E12, 686.5], [1.60237104E12, 646.5], [1.6023711E12, 671.0], [1.6023714E12, 966.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023714E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 404.0, "minX": 1.0, "maxY": 2685.0, "series": [{"data": [[2.0, 1463.5], [3.0, 1680.5], [4.0, 1520.0], [5.0, 1193.0], [6.0, 882.5], [7.0, 1224.5], [8.0, 1024.0], [9.0, 936.0], [10.0, 895.0], [11.0, 876.5], [12.0, 807.5], [13.0, 671.5], [14.0, 658.0], [15.0, 587.0], [16.0, 580.5], [1.0, 2685.0], [17.0, 518.0], [18.0, 485.5], [19.0, 454.0], [20.0, 448.0], [21.0, 440.0], [22.0, 408.5], [23.0, 451.0], [24.0, 415.0], [25.0, 412.0], [26.0, 407.0], [28.0, 404.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 403.5, "minX": 1.0, "maxY": 2678.5, "series": [{"data": [[2.0, 1459.0], [3.0, 1670.0], [4.0, 1516.5], [5.0, 1192.0], [6.0, 880.5], [7.0, 1220.0], [8.0, 1023.0], [9.0, 932.0], [10.0, 893.5], [11.0, 875.5], [12.0, 806.5], [13.0, 671.0], [14.0, 656.0], [15.0, 587.0], [16.0, 580.0], [1.0, 2678.5], [17.0, 518.0], [18.0, 484.5], [19.0, 453.0], [20.0, 447.5], [21.0, 439.0], [22.0, 408.0], [23.0, 451.0], [24.0, 415.0], [25.0, 412.0], [26.0, 407.0], [28.0, 403.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4333333333333333, "minX": 1.60237092E12, "maxY": 12.033333333333333, "series": [{"data": [[1.60237098E12, 12.033333333333333], [1.60237128E12, 11.933333333333334], [1.60237134E12, 11.833333333333334], [1.60237116E12, 10.216666666666667], [1.60237092E12, 3.3], [1.60237122E12, 11.866666666666667], [1.60237104E12, 12.0], [1.6023711E12, 11.883333333333333], [1.6023714E12, 1.4333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023714E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6, "minX": 1.60237092E12, "maxY": 12.033333333333333, "series": [{"data": [[1.60237098E12, 12.033333333333333], [1.60237128E12, 11.933333333333334], [1.60237134E12, 11.833333333333334], [1.60237116E12, 10.216666666666667], [1.60237092E12, 3.1333333333333333], [1.60237122E12, 11.866666666666667], [1.60237104E12, 12.0], [1.6023711E12, 11.883333333333333], [1.6023714E12, 1.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023714E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6, "minX": 1.60237092E12, "maxY": 12.033333333333333, "series": [{"data": [[1.60237098E12, 12.033333333333333], [1.60237128E12, 11.933333333333334], [1.60237134E12, 11.833333333333334], [1.60237116E12, 10.216666666666667], [1.60237092E12, 3.1333333333333333], [1.60237122E12, 11.866666666666667], [1.60237104E12, 12.0], [1.6023711E12, 11.883333333333333], [1.6023714E12, 1.6]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023714E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6, "minX": 1.60237092E12, "maxY": 12.033333333333333, "series": [{"data": [[1.60237098E12, 12.033333333333333], [1.60237128E12, 11.933333333333334], [1.60237134E12, 11.833333333333334], [1.60237116E12, 10.216666666666667], [1.60237092E12, 3.1333333333333333], [1.60237122E12, 11.866666666666667], [1.60237104E12, 12.0], [1.6023711E12, 11.883333333333333], [1.6023714E12, 1.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023714E12, "title": "Total Transactions Per Second"}},
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

