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
        data: {"result": {"minY": 189.0, "minX": 0.0, "maxY": 5994.0, "series": [{"data": [[0.0, 189.0], [0.1, 194.0], [0.2, 197.0], [0.3, 198.0], [0.4, 199.0], [0.5, 200.0], [0.6, 201.0], [0.7, 202.0], [0.8, 203.0], [0.9, 204.0], [1.0, 205.0], [1.1, 207.0], [1.2, 209.0], [1.3, 211.0], [1.4, 212.0], [1.5, 213.0], [1.6, 214.0], [1.7, 215.0], [1.8, 215.0], [1.9, 216.0], [2.0, 217.0], [2.1, 218.0], [2.2, 218.0], [2.3, 220.0], [2.4, 221.0], [2.5, 222.0], [2.6, 223.0], [2.7, 224.0], [2.8, 225.0], [2.9, 226.0], [3.0, 227.0], [3.1, 227.0], [3.2, 228.0], [3.3, 229.0], [3.4, 230.0], [3.5, 230.0], [3.6, 231.0], [3.7, 232.0], [3.8, 232.0], [3.9, 233.0], [4.0, 233.0], [4.1, 234.0], [4.2, 235.0], [4.3, 236.0], [4.4, 237.0], [4.5, 237.0], [4.6, 237.0], [4.7, 238.0], [4.8, 239.0], [4.9, 239.0], [5.0, 240.0], [5.1, 240.0], [5.2, 242.0], [5.3, 243.0], [5.4, 244.0], [5.5, 245.0], [5.6, 247.0], [5.7, 247.0], [5.8, 249.0], [5.9, 250.0], [6.0, 251.0], [6.1, 254.0], [6.2, 255.0], [6.3, 256.0], [6.4, 258.0], [6.5, 260.0], [6.6, 262.0], [6.7, 263.0], [6.8, 264.0], [6.9, 265.0], [7.0, 266.0], [7.1, 267.0], [7.2, 268.0], [7.3, 269.0], [7.4, 270.0], [7.5, 271.0], [7.6, 272.0], [7.7, 273.0], [7.8, 275.0], [7.9, 276.0], [8.0, 277.0], [8.1, 277.0], [8.2, 279.0], [8.3, 279.0], [8.4, 280.0], [8.5, 280.0], [8.6, 281.0], [8.7, 283.0], [8.8, 284.0], [8.9, 286.0], [9.0, 287.0], [9.1, 287.0], [9.2, 289.0], [9.3, 289.0], [9.4, 290.0], [9.5, 291.0], [9.6, 292.0], [9.7, 292.0], [9.8, 293.0], [9.9, 294.0], [10.0, 294.0], [10.1, 296.0], [10.2, 297.0], [10.3, 298.0], [10.4, 300.0], [10.5, 300.0], [10.6, 301.0], [10.7, 302.0], [10.8, 303.0], [10.9, 303.0], [11.0, 304.0], [11.1, 305.0], [11.2, 306.0], [11.3, 307.0], [11.4, 308.0], [11.5, 308.0], [11.6, 309.0], [11.7, 310.0], [11.8, 313.0], [11.9, 314.0], [12.0, 316.0], [12.1, 317.0], [12.2, 318.0], [12.3, 319.0], [12.4, 320.0], [12.5, 321.0], [12.6, 322.0], [12.7, 323.0], [12.8, 324.0], [12.9, 325.0], [13.0, 326.0], [13.1, 326.0], [13.2, 327.0], [13.3, 328.0], [13.4, 329.0], [13.5, 330.0], [13.6, 331.0], [13.7, 333.0], [13.8, 335.0], [13.9, 335.0], [14.0, 336.0], [14.1, 337.0], [14.2, 337.0], [14.3, 338.0], [14.4, 339.0], [14.5, 340.0], [14.6, 341.0], [14.7, 342.0], [14.8, 343.0], [14.9, 344.0], [15.0, 345.0], [15.1, 346.0], [15.2, 347.0], [15.3, 348.0], [15.4, 350.0], [15.5, 352.0], [15.6, 353.0], [15.7, 356.0], [15.8, 357.0], [15.9, 359.0], [16.0, 361.0], [16.1, 363.0], [16.2, 365.0], [16.3, 366.0], [16.4, 369.0], [16.5, 371.0], [16.6, 372.0], [16.7, 376.0], [16.8, 378.0], [16.9, 380.0], [17.0, 382.0], [17.1, 385.0], [17.2, 387.0], [17.3, 388.0], [17.4, 392.0], [17.5, 392.0], [17.6, 394.0], [17.7, 395.0], [17.8, 397.0], [17.9, 399.0], [18.0, 399.0], [18.1, 401.0], [18.2, 402.0], [18.3, 402.0], [18.4, 403.0], [18.5, 405.0], [18.6, 406.0], [18.7, 407.0], [18.8, 407.0], [18.9, 408.0], [19.0, 409.0], [19.1, 410.0], [19.2, 411.0], [19.3, 411.0], [19.4, 412.0], [19.5, 414.0], [19.6, 415.0], [19.7, 415.0], [19.8, 416.0], [19.9, 417.0], [20.0, 418.0], [20.1, 418.0], [20.2, 420.0], [20.3, 421.0], [20.4, 422.0], [20.5, 424.0], [20.6, 424.0], [20.7, 426.0], [20.8, 427.0], [20.9, 427.0], [21.0, 428.0], [21.1, 429.0], [21.2, 430.0], [21.3, 431.0], [21.4, 431.0], [21.5, 432.0], [21.6, 432.0], [21.7, 433.0], [21.8, 433.0], [21.9, 435.0], [22.0, 436.0], [22.1, 436.0], [22.2, 437.0], [22.3, 438.0], [22.4, 439.0], [22.5, 440.0], [22.6, 441.0], [22.7, 442.0], [22.8, 443.0], [22.9, 444.0], [23.0, 445.0], [23.1, 446.0], [23.2, 446.0], [23.3, 447.0], [23.4, 448.0], [23.5, 449.0], [23.6, 450.0], [23.7, 451.0], [23.8, 452.0], [23.9, 452.0], [24.0, 453.0], [24.1, 455.0], [24.2, 456.0], [24.3, 457.0], [24.4, 458.0], [24.5, 459.0], [24.6, 460.0], [24.7, 461.0], [24.8, 461.0], [24.9, 462.0], [25.0, 462.0], [25.1, 463.0], [25.2, 464.0], [25.3, 465.0], [25.4, 466.0], [25.5, 468.0], [25.6, 469.0], [25.7, 471.0], [25.8, 472.0], [25.9, 474.0], [26.0, 475.0], [26.1, 476.0], [26.2, 476.0], [26.3, 477.0], [26.4, 478.0], [26.5, 479.0], [26.6, 479.0], [26.7, 480.0], [26.8, 481.0], [26.9, 482.0], [27.0, 482.0], [27.1, 483.0], [27.2, 484.0], [27.3, 485.0], [27.4, 487.0], [27.5, 488.0], [27.6, 489.0], [27.7, 490.0], [27.8, 490.0], [27.9, 492.0], [28.0, 493.0], [28.1, 493.0], [28.2, 494.0], [28.3, 495.0], [28.4, 496.0], [28.5, 497.0], [28.6, 498.0], [28.7, 499.0], [28.8, 500.0], [28.9, 501.0], [29.0, 501.0], [29.1, 502.0], [29.2, 503.0], [29.3, 504.0], [29.4, 506.0], [29.5, 507.0], [29.6, 508.0], [29.7, 510.0], [29.8, 511.0], [29.9, 512.0], [30.0, 513.0], [30.1, 515.0], [30.2, 516.0], [30.3, 517.0], [30.4, 517.0], [30.5, 518.0], [30.6, 520.0], [30.7, 521.0], [30.8, 522.0], [30.9, 523.0], [31.0, 524.0], [31.1, 525.0], [31.2, 526.0], [31.3, 526.0], [31.4, 527.0], [31.5, 528.0], [31.6, 530.0], [31.7, 531.0], [31.8, 532.0], [31.9, 533.0], [32.0, 534.0], [32.1, 534.0], [32.2, 536.0], [32.3, 537.0], [32.4, 539.0], [32.5, 539.0], [32.6, 540.0], [32.7, 540.0], [32.8, 542.0], [32.9, 543.0], [33.0, 544.0], [33.1, 545.0], [33.2, 546.0], [33.3, 547.0], [33.4, 549.0], [33.5, 550.0], [33.6, 551.0], [33.7, 552.0], [33.8, 553.0], [33.9, 553.0], [34.0, 554.0], [34.1, 556.0], [34.2, 556.0], [34.3, 557.0], [34.4, 557.0], [34.5, 558.0], [34.6, 559.0], [34.7, 560.0], [34.8, 561.0], [34.9, 562.0], [35.0, 563.0], [35.1, 564.0], [35.2, 565.0], [35.3, 565.0], [35.4, 566.0], [35.5, 566.0], [35.6, 567.0], [35.7, 569.0], [35.8, 570.0], [35.9, 570.0], [36.0, 571.0], [36.1, 571.0], [36.2, 572.0], [36.3, 573.0], [36.4, 574.0], [36.5, 574.0], [36.6, 575.0], [36.7, 577.0], [36.8, 577.0], [36.9, 578.0], [37.0, 578.0], [37.1, 579.0], [37.2, 580.0], [37.3, 581.0], [37.4, 583.0], [37.5, 584.0], [37.6, 585.0], [37.7, 586.0], [37.8, 587.0], [37.9, 589.0], [38.0, 589.0], [38.1, 590.0], [38.2, 591.0], [38.3, 593.0], [38.4, 594.0], [38.5, 595.0], [38.6, 595.0], [38.7, 597.0], [38.8, 598.0], [38.9, 599.0], [39.0, 601.0], [39.1, 602.0], [39.2, 603.0], [39.3, 604.0], [39.4, 605.0], [39.5, 606.0], [39.6, 606.0], [39.7, 607.0], [39.8, 608.0], [39.9, 608.0], [40.0, 609.0], [40.1, 611.0], [40.2, 612.0], [40.3, 613.0], [40.4, 614.0], [40.5, 614.0], [40.6, 616.0], [40.7, 617.0], [40.8, 618.0], [40.9, 618.0], [41.0, 620.0], [41.1, 622.0], [41.2, 623.0], [41.3, 624.0], [41.4, 625.0], [41.5, 626.0], [41.6, 626.0], [41.7, 627.0], [41.8, 628.0], [41.9, 629.0], [42.0, 630.0], [42.1, 631.0], [42.2, 631.0], [42.3, 632.0], [42.4, 635.0], [42.5, 636.0], [42.6, 637.0], [42.7, 639.0], [42.8, 640.0], [42.9, 641.0], [43.0, 643.0], [43.1, 644.0], [43.2, 646.0], [43.3, 647.0], [43.4, 649.0], [43.5, 650.0], [43.6, 651.0], [43.7, 653.0], [43.8, 655.0], [43.9, 656.0], [44.0, 656.0], [44.1, 658.0], [44.2, 660.0], [44.3, 662.0], [44.4, 663.0], [44.5, 665.0], [44.6, 666.0], [44.7, 667.0], [44.8, 668.0], [44.9, 669.0], [45.0, 670.0], [45.1, 672.0], [45.2, 673.0], [45.3, 675.0], [45.4, 676.0], [45.5, 678.0], [45.6, 679.0], [45.7, 681.0], [45.8, 683.0], [45.9, 684.0], [46.0, 685.0], [46.1, 686.0], [46.2, 687.0], [46.3, 688.0], [46.4, 691.0], [46.5, 692.0], [46.6, 693.0], [46.7, 695.0], [46.8, 696.0], [46.9, 698.0], [47.0, 700.0], [47.1, 702.0], [47.2, 703.0], [47.3, 705.0], [47.4, 707.0], [47.5, 708.0], [47.6, 709.0], [47.7, 710.0], [47.8, 712.0], [47.9, 713.0], [48.0, 715.0], [48.1, 716.0], [48.2, 717.0], [48.3, 718.0], [48.4, 719.0], [48.5, 722.0], [48.6, 724.0], [48.7, 725.0], [48.8, 727.0], [48.9, 728.0], [49.0, 729.0], [49.1, 731.0], [49.2, 732.0], [49.3, 733.0], [49.4, 735.0], [49.5, 737.0], [49.6, 737.0], [49.7, 739.0], [49.8, 739.0], [49.9, 740.0], [50.0, 742.0], [50.1, 745.0], [50.2, 745.0], [50.3, 748.0], [50.4, 749.0], [50.5, 750.0], [50.6, 753.0], [50.7, 754.0], [50.8, 755.0], [50.9, 758.0], [51.0, 760.0], [51.1, 763.0], [51.2, 766.0], [51.3, 767.0], [51.4, 768.0], [51.5, 769.0], [51.6, 771.0], [51.7, 773.0], [51.8, 776.0], [51.9, 776.0], [52.0, 777.0], [52.1, 779.0], [52.2, 781.0], [52.3, 783.0], [52.4, 785.0], [52.5, 787.0], [52.6, 789.0], [52.7, 792.0], [52.8, 793.0], [52.9, 795.0], [53.0, 797.0], [53.1, 798.0], [53.2, 800.0], [53.3, 801.0], [53.4, 802.0], [53.5, 803.0], [53.6, 805.0], [53.7, 806.0], [53.8, 806.0], [53.9, 810.0], [54.0, 812.0], [54.1, 814.0], [54.2, 815.0], [54.3, 817.0], [54.4, 818.0], [54.5, 819.0], [54.6, 820.0], [54.7, 821.0], [54.8, 822.0], [54.9, 824.0], [55.0, 828.0], [55.1, 830.0], [55.2, 830.0], [55.3, 831.0], [55.4, 833.0], [55.5, 834.0], [55.6, 835.0], [55.7, 837.0], [55.8, 839.0], [55.9, 840.0], [56.0, 841.0], [56.1, 844.0], [56.2, 846.0], [56.3, 849.0], [56.4, 850.0], [56.5, 850.0], [56.6, 852.0], [56.7, 853.0], [56.8, 856.0], [56.9, 857.0], [57.0, 859.0], [57.1, 861.0], [57.2, 863.0], [57.3, 865.0], [57.4, 867.0], [57.5, 868.0], [57.6, 871.0], [57.7, 873.0], [57.8, 878.0], [57.9, 879.0], [58.0, 880.0], [58.1, 883.0], [58.2, 885.0], [58.3, 886.0], [58.4, 887.0], [58.5, 888.0], [58.6, 889.0], [58.7, 890.0], [58.8, 891.0], [58.9, 893.0], [59.0, 895.0], [59.1, 896.0], [59.2, 897.0], [59.3, 898.0], [59.4, 901.0], [59.5, 903.0], [59.6, 904.0], [59.7, 906.0], [59.8, 908.0], [59.9, 909.0], [60.0, 912.0], [60.1, 914.0], [60.2, 916.0], [60.3, 918.0], [60.4, 919.0], [60.5, 921.0], [60.6, 923.0], [60.7, 924.0], [60.8, 925.0], [60.9, 925.0], [61.0, 927.0], [61.1, 929.0], [61.2, 931.0], [61.3, 932.0], [61.4, 934.0], [61.5, 936.0], [61.6, 939.0], [61.7, 940.0], [61.8, 941.0], [61.9, 942.0], [62.0, 944.0], [62.1, 946.0], [62.2, 948.0], [62.3, 950.0], [62.4, 952.0], [62.5, 955.0], [62.6, 956.0], [62.7, 958.0], [62.8, 958.0], [62.9, 962.0], [63.0, 963.0], [63.1, 964.0], [63.2, 966.0], [63.3, 967.0], [63.4, 968.0], [63.5, 969.0], [63.6, 971.0], [63.7, 973.0], [63.8, 975.0], [63.9, 976.0], [64.0, 978.0], [64.1, 980.0], [64.2, 984.0], [64.3, 988.0], [64.4, 990.0], [64.5, 990.0], [64.6, 994.0], [64.7, 995.0], [64.8, 997.0], [64.9, 998.0], [65.0, 1000.0], [65.1, 1001.0], [65.2, 1002.0], [65.3, 1004.0], [65.4, 1006.0], [65.5, 1008.0], [65.6, 1013.0], [65.7, 1014.0], [65.8, 1015.0], [65.9, 1015.0], [66.0, 1017.0], [66.1, 1021.0], [66.2, 1022.0], [66.3, 1023.0], [66.4, 1025.0], [66.5, 1026.0], [66.6, 1028.0], [66.7, 1029.0], [66.8, 1033.0], [66.9, 1034.0], [67.0, 1036.0], [67.1, 1037.0], [67.2, 1038.0], [67.3, 1039.0], [67.4, 1041.0], [67.5, 1042.0], [67.6, 1043.0], [67.7, 1044.0], [67.8, 1046.0], [67.9, 1047.0], [68.0, 1049.0], [68.1, 1050.0], [68.2, 1052.0], [68.3, 1054.0], [68.4, 1056.0], [68.5, 1059.0], [68.6, 1062.0], [68.7, 1065.0], [68.8, 1066.0], [68.9, 1068.0], [69.0, 1069.0], [69.1, 1070.0], [69.2, 1073.0], [69.3, 1075.0], [69.4, 1076.0], [69.5, 1078.0], [69.6, 1078.0], [69.7, 1080.0], [69.8, 1081.0], [69.9, 1083.0], [70.0, 1085.0], [70.1, 1087.0], [70.2, 1089.0], [70.3, 1089.0], [70.4, 1091.0], [70.5, 1092.0], [70.6, 1094.0], [70.7, 1096.0], [70.8, 1097.0], [70.9, 1100.0], [71.0, 1102.0], [71.1, 1104.0], [71.2, 1106.0], [71.3, 1110.0], [71.4, 1111.0], [71.5, 1112.0], [71.6, 1115.0], [71.7, 1117.0], [71.8, 1119.0], [71.9, 1121.0], [72.0, 1124.0], [72.1, 1128.0], [72.2, 1131.0], [72.3, 1133.0], [72.4, 1134.0], [72.5, 1137.0], [72.6, 1139.0], [72.7, 1140.0], [72.8, 1143.0], [72.9, 1144.0], [73.0, 1146.0], [73.1, 1147.0], [73.2, 1148.0], [73.3, 1150.0], [73.4, 1153.0], [73.5, 1157.0], [73.6, 1162.0], [73.7, 1164.0], [73.8, 1165.0], [73.9, 1167.0], [74.0, 1169.0], [74.1, 1171.0], [74.2, 1173.0], [74.3, 1175.0], [74.4, 1176.0], [74.5, 1178.0], [74.6, 1183.0], [74.7, 1184.0], [74.8, 1187.0], [74.9, 1190.0], [75.0, 1191.0], [75.1, 1192.0], [75.2, 1194.0], [75.3, 1198.0], [75.4, 1200.0], [75.5, 1202.0], [75.6, 1204.0], [75.7, 1208.0], [75.8, 1211.0], [75.9, 1213.0], [76.0, 1215.0], [76.1, 1218.0], [76.2, 1220.0], [76.3, 1224.0], [76.4, 1229.0], [76.5, 1233.0], [76.6, 1235.0], [76.7, 1236.0], [76.8, 1239.0], [76.9, 1242.0], [77.0, 1245.0], [77.1, 1249.0], [77.2, 1251.0], [77.3, 1252.0], [77.4, 1256.0], [77.5, 1258.0], [77.6, 1259.0], [77.7, 1263.0], [77.8, 1264.0], [77.9, 1267.0], [78.0, 1269.0], [78.1, 1270.0], [78.2, 1272.0], [78.3, 1275.0], [78.4, 1276.0], [78.5, 1279.0], [78.6, 1280.0], [78.7, 1282.0], [78.8, 1284.0], [78.9, 1286.0], [79.0, 1290.0], [79.1, 1291.0], [79.2, 1295.0], [79.3, 1297.0], [79.4, 1300.0], [79.5, 1302.0], [79.6, 1307.0], [79.7, 1308.0], [79.8, 1311.0], [79.9, 1312.0], [80.0, 1315.0], [80.1, 1319.0], [80.2, 1321.0], [80.3, 1323.0], [80.4, 1327.0], [80.5, 1331.0], [80.6, 1335.0], [80.7, 1337.0], [80.8, 1339.0], [80.9, 1341.0], [81.0, 1342.0], [81.1, 1345.0], [81.2, 1349.0], [81.3, 1349.0], [81.4, 1351.0], [81.5, 1354.0], [81.6, 1356.0], [81.7, 1360.0], [81.8, 1363.0], [81.9, 1365.0], [82.0, 1366.0], [82.1, 1368.0], [82.2, 1372.0], [82.3, 1377.0], [82.4, 1378.0], [82.5, 1381.0], [82.6, 1383.0], [82.7, 1386.0], [82.8, 1387.0], [82.9, 1389.0], [83.0, 1393.0], [83.1, 1396.0], [83.2, 1399.0], [83.3, 1399.0], [83.4, 1401.0], [83.5, 1403.0], [83.6, 1404.0], [83.7, 1408.0], [83.8, 1409.0], [83.9, 1411.0], [84.0, 1414.0], [84.1, 1416.0], [84.2, 1420.0], [84.3, 1422.0], [84.4, 1423.0], [84.5, 1427.0], [84.6, 1429.0], [84.7, 1432.0], [84.8, 1436.0], [84.9, 1440.0], [85.0, 1442.0], [85.1, 1445.0], [85.2, 1452.0], [85.3, 1454.0], [85.4, 1457.0], [85.5, 1458.0], [85.6, 1460.0], [85.7, 1463.0], [85.8, 1469.0], [85.9, 1471.0], [86.0, 1474.0], [86.1, 1475.0], [86.2, 1479.0], [86.3, 1482.0], [86.4, 1486.0], [86.5, 1487.0], [86.6, 1494.0], [86.7, 1498.0], [86.8, 1503.0], [86.9, 1506.0], [87.0, 1509.0], [87.1, 1511.0], [87.2, 1516.0], [87.3, 1520.0], [87.4, 1528.0], [87.5, 1530.0], [87.6, 1535.0], [87.7, 1539.0], [87.8, 1542.0], [87.9, 1548.0], [88.0, 1550.0], [88.1, 1553.0], [88.2, 1557.0], [88.3, 1560.0], [88.4, 1562.0], [88.5, 1574.0], [88.6, 1577.0], [88.7, 1580.0], [88.8, 1584.0], [88.9, 1587.0], [89.0, 1593.0], [89.1, 1596.0], [89.2, 1600.0], [89.3, 1604.0], [89.4, 1608.0], [89.5, 1612.0], [89.6, 1617.0], [89.7, 1621.0], [89.8, 1626.0], [89.9, 1631.0], [90.0, 1636.0], [90.1, 1639.0], [90.2, 1645.0], [90.3, 1654.0], [90.4, 1659.0], [90.5, 1667.0], [90.6, 1670.0], [90.7, 1676.0], [90.8, 1680.0], [90.9, 1686.0], [91.0, 1693.0], [91.1, 1702.0], [91.2, 1706.0], [91.3, 1712.0], [91.4, 1714.0], [91.5, 1719.0], [91.6, 1727.0], [91.7, 1732.0], [91.8, 1739.0], [91.9, 1746.0], [92.0, 1751.0], [92.1, 1764.0], [92.2, 1773.0], [92.3, 1777.0], [92.4, 1784.0], [92.5, 1792.0], [92.6, 1803.0], [92.7, 1809.0], [92.8, 1820.0], [92.9, 1837.0], [93.0, 1839.0], [93.1, 1854.0], [93.2, 1864.0], [93.3, 1870.0], [93.4, 1875.0], [93.5, 1888.0], [93.6, 1892.0], [93.7, 1897.0], [93.8, 1904.0], [93.9, 1910.0], [94.0, 1923.0], [94.1, 1932.0], [94.2, 1948.0], [94.3, 1953.0], [94.4, 1962.0], [94.5, 1979.0], [94.6, 1987.0], [94.7, 2006.0], [94.8, 2019.0], [94.9, 2027.0], [95.0, 2038.0], [95.1, 2048.0], [95.2, 2062.0], [95.3, 2076.0], [95.4, 2086.0], [95.5, 2097.0], [95.6, 2118.0], [95.7, 2128.0], [95.8, 2143.0], [95.9, 2161.0], [96.0, 2183.0], [96.1, 2191.0], [96.2, 2203.0], [96.3, 2213.0], [96.4, 2229.0], [96.5, 2249.0], [96.6, 2267.0], [96.7, 2288.0], [96.8, 2302.0], [96.9, 2312.0], [97.0, 2325.0], [97.1, 2335.0], [97.2, 2349.0], [97.3, 2393.0], [97.4, 2422.0], [97.5, 2465.0], [97.6, 2498.0], [97.7, 2515.0], [97.8, 2535.0], [97.9, 2545.0], [98.0, 2589.0], [98.1, 2624.0], [98.2, 2646.0], [98.3, 2679.0], [98.4, 2721.0], [98.5, 2749.0], [98.6, 2792.0], [98.7, 2850.0], [98.8, 2893.0], [98.9, 2983.0], [99.0, 3071.0], [99.1, 3179.0], [99.2, 3325.0], [99.3, 3382.0], [99.4, 3478.0], [99.5, 3571.0], [99.6, 3679.0], [99.7, 3855.0], [99.8, 4306.0], [99.9, 4785.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 558.0, "series": [{"data": [[600.0, 416.0], [700.0, 322.0], [800.0, 321.0], [900.0, 291.0], [1000.0, 307.0], [1100.0, 234.0], [1200.0, 207.0], [1300.0, 204.0], [1400.0, 177.0], [1500.0, 128.0], [1600.0, 97.0], [100.0, 23.0], [1700.0, 78.0], [1800.0, 62.0], [1900.0, 46.0], [2000.0, 46.0], [2100.0, 33.0], [2300.0, 29.0], [2200.0, 31.0], [2400.0, 16.0], [2500.0, 21.0], [2600.0, 18.0], [2700.0, 12.0], [2800.0, 10.0], [2900.0, 6.0], [3000.0, 5.0], [3100.0, 6.0], [3300.0, 10.0], [200.0, 515.0], [3200.0, 1.0], [3400.0, 5.0], [3500.0, 4.0], [3600.0, 5.0], [3700.0, 4.0], [3800.0, 3.0], [4300.0, 1.0], [4100.0, 1.0], [4200.0, 1.0], [4500.0, 2.0], [4400.0, 1.0], [300.0, 398.0], [4700.0, 2.0], [5300.0, 1.0], [5800.0, 2.0], [5900.0, 2.0], [400.0, 558.0], [500.0, 528.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 688.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3003.0, "series": [{"data": [[0.0, 1499.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3003.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 688.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.765625, "minX": 1.60374516E12, "maxY": 10.0, "series": [{"data": [[1.6037454E12, 10.0], [1.60374558E12, 10.0], [1.60374552E12, 10.0], [1.60374522E12, 10.0], [1.60374564E12, 9.765625], [1.60374516E12, 10.0], [1.60374534E12, 10.0], [1.60374528E12, 10.0], [1.60374546E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374564E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 466.0, "minX": 1.0, "maxY": 2589.0, "series": [{"data": [[8.0, 466.0], [4.0, 878.0], [2.0, 2589.0], [1.0, 2517.0], [9.0, 1070.0], [10.0, 901.3074696004627], [5.0, 937.0], [6.0, 904.0], [3.0, 1487.0], [7.0, 996.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 902.0265895953752]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1440.7166666666667, "minX": 1.60374516E12, "maxY": 3622362.3666666667, "series": [{"data": [[1.6037454E12, 3045285.75], [1.60374558E12, 3086851.1333333333], [1.60374552E12, 3544789.2], [1.60374522E12, 2458530.7], [1.60374564E12, 893490.4333333333], [1.60374516E12, 1461220.75], [1.60374534E12, 3368391.7], [1.60374528E12, 3622362.3666666667], [1.60374546E12, 2492301.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6037454E12, 4228.933333333333], [1.60374558E12, 5391.666666666667], [1.60374552E12, 5246.15], [1.60374522E12, 5133.816666666667], [1.60374564E12, 1440.7166666666667], [1.60374516E12, 1721.3], [1.60374534E12, 5219.383333333333], [1.60374528E12, 5252.75], [1.60374546E12, 4942.616666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374564E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 842.3248226950361, "minX": 1.60374516E12, "maxY": 1145.2489451476783, "series": [{"data": [[1.6037454E12, 1049.9600000000007], [1.60374558E12, 843.4408450704226], [1.60374552E12, 856.6529160739685], [1.60374522E12, 842.3248226950361], [1.60374564E12, 1128.7447916666663], [1.60374516E12, 1145.2489451476783], [1.60374534E12, 870.0174418604654], [1.60374528E12, 856.0242165242157], [1.60374546E12, 877.9321533923301]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374564E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 840.7815602836879, "minX": 1.60374516E12, "maxY": 1142.2405063291137, "series": [{"data": [[1.6037454E12, 1047.7878260869554], [1.60374558E12, 841.7845070422538], [1.60374552E12, 854.4736842105256], [1.60374522E12, 840.7815602836879], [1.60374564E12, 1127.0625], [1.60374516E12, 1142.2405063291137], [1.60374534E12, 867.6918604651156], [1.60374528E12, 853.5028490028485], [1.60374546E12, 876.4439528023607]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374564E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60374516E12, "maxY": 0.5780590717299583, "series": [{"data": [[1.6037454E12, 0.02086956521739129], [1.60374558E12, 0.015492957746478875], [1.60374552E12, 0.022759601706970153], [1.60374522E12, 0.019858156028368795], [1.60374564E12, 0.0], [1.60374516E12, 0.5780590717299583], [1.60374534E12, 0.014534883720930227], [1.60374528E12, 0.018518518518518517], [1.60374546E12, 0.01622418879056045]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374564E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 189.0, "minX": 1.60374516E12, "maxY": 5994.0, "series": [{"data": [[1.6037454E12, 5994.0], [1.60374558E12, 3628.0], [1.60374552E12, 2549.0], [1.60374522E12, 4486.0], [1.60374564E12, 3870.0], [1.60374516E12, 5376.0], [1.60374534E12, 4306.0], [1.60374528E12, 3756.0], [1.60374546E12, 5924.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6037454E12, 218.1839998626709], [1.60374558E12, 205.0], [1.60374552E12, 198.33599983215333], [1.60374522E12, 215.0], [1.60374564E12, 271.00299912571904], [1.60374516E12, 199.13599954605104], [1.60374534E12, 199.4019996714592], [1.60374528E12, 200.0], [1.60374546E12, 209.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6037454E12, 218.70240005493164], [1.60374558E12, 205.11670020341873], [1.60374552E12, 198.96960006713869], [1.60374522E12, 215.0], [1.60374564E12, 274.30330034971234], [1.60374516E12, 200.8496001815796], [1.60374534E12, 200.64220013141633], [1.60374528E12, 200.0], [1.60374546E12, 209.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6037454E12, 218.47199993133546], [1.60374558E12, 205.0], [1.60374552E12, 198.68799991607665], [1.60374522E12, 215.0], [1.60374564E12, 272.83649956285956], [1.60374516E12, 200.0879997730255], [1.60374534E12, 200.0909998357296], [1.60374528E12, 200.0], [1.60374546E12, 209.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6037454E12, 204.0], [1.60374558E12, 189.0], [1.60374552E12, 192.0], [1.60374522E12, 203.0], [1.60374564E12, 257.0], [1.60374516E12, 197.0], [1.60374534E12, 196.0], [1.60374528E12, 190.0], [1.60374546E12, 197.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6037454E12, 896.0], [1.60374558E12, 693.5], [1.60374552E12, 689.0], [1.60374522E12, 695.0], [1.60374564E12, 952.0], [1.60374516E12, 946.0], [1.60374534E12, 693.0], [1.60374528E12, 641.5], [1.60374546E12, 737.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374564E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 414.0, "minX": 2.0, "maxY": 2624.0, "series": [{"data": [[2.0, 2624.0], [3.0, 1442.0], [4.0, 1266.5], [5.0, 1426.0], [6.0, 1173.5], [7.0, 1167.0], [8.0, 962.0], [9.0, 936.0], [10.0, 903.0], [11.0, 801.5], [12.0, 799.0], [13.0, 706.0], [14.0, 734.5], [15.0, 687.0], [16.0, 590.0], [17.0, 498.0], [18.0, 463.5], [19.0, 415.0], [20.0, 470.5], [21.0, 433.0], [22.0, 428.0], [23.0, 453.0], [24.0, 425.0], [25.0, 425.5], [26.0, 414.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 414.0, "minX": 2.0, "maxY": 2617.0, "series": [{"data": [[2.0, 2617.0], [3.0, 1440.0], [4.0, 1264.5], [5.0, 1418.0], [6.0, 1172.0], [7.0, 1166.0], [8.0, 957.5], [9.0, 934.0], [10.0, 902.0], [11.0, 800.0], [12.0, 796.0], [13.0, 706.0], [14.0, 733.5], [15.0, 687.0], [16.0, 589.0], [17.0, 498.0], [18.0, 463.5], [19.0, 415.0], [20.0, 470.5], [21.0, 433.0], [22.0, 428.0], [23.0, 453.0], [24.0, 424.5], [25.0, 425.5], [26.0, 414.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.033333333333333, "minX": 1.60374516E12, "maxY": 11.833333333333334, "series": [{"data": [[1.6037454E12, 9.583333333333334], [1.60374558E12, 11.833333333333334], [1.60374552E12, 11.716666666666667], [1.60374522E12, 11.75], [1.60374564E12, 3.033333333333333], [1.60374516E12, 4.116666666666666], [1.60374534E12, 11.466666666666667], [1.60374528E12, 11.7], [1.60374546E12, 11.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374564E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.60374516E12, "maxY": 11.833333333333334, "series": [{"data": [[1.6037454E12, 9.583333333333334], [1.60374558E12, 11.833333333333334], [1.60374552E12, 11.716666666666667], [1.60374522E12, 11.75], [1.60374564E12, 3.2], [1.60374516E12, 3.95], [1.60374534E12, 11.466666666666667], [1.60374528E12, 11.7], [1.60374546E12, 11.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374564E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.60374516E12, "maxY": 11.833333333333334, "series": [{"data": [[1.6037454E12, 9.583333333333334], [1.60374558E12, 11.833333333333334], [1.60374552E12, 11.716666666666667], [1.60374522E12, 11.75], [1.60374564E12, 3.2], [1.60374516E12, 3.95], [1.60374534E12, 11.466666666666667], [1.60374528E12, 11.7], [1.60374546E12, 11.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374564E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.60374516E12, "maxY": 11.833333333333334, "series": [{"data": [[1.6037454E12, 9.583333333333334], [1.60374558E12, 11.833333333333334], [1.60374552E12, 11.716666666666667], [1.60374522E12, 11.75], [1.60374564E12, 3.2], [1.60374516E12, 3.95], [1.60374534E12, 11.466666666666667], [1.60374528E12, 11.7], [1.60374546E12, 11.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374564E12, "title": "Total Transactions Per Second"}},
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

