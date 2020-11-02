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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 6521.0, "series": [{"data": [[0.0, 184.0], [0.1, 193.0], [0.2, 195.0], [0.3, 198.0], [0.4, 200.0], [0.5, 201.0], [0.6, 202.0], [0.7, 203.0], [0.8, 204.0], [0.9, 205.0], [1.0, 206.0], [1.1, 207.0], [1.2, 208.0], [1.3, 208.0], [1.4, 210.0], [1.5, 211.0], [1.6, 212.0], [1.7, 213.0], [1.8, 214.0], [1.9, 215.0], [2.0, 216.0], [2.1, 217.0], [2.2, 218.0], [2.3, 219.0], [2.4, 220.0], [2.5, 221.0], [2.6, 222.0], [2.7, 223.0], [2.8, 223.0], [2.9, 225.0], [3.0, 226.0], [3.1, 226.0], [3.2, 227.0], [3.3, 228.0], [3.4, 228.0], [3.5, 229.0], [3.6, 230.0], [3.7, 232.0], [3.8, 232.0], [3.9, 232.0], [4.0, 233.0], [4.1, 233.0], [4.2, 234.0], [4.3, 237.0], [4.4, 237.0], [4.5, 238.0], [4.6, 239.0], [4.7, 240.0], [4.8, 240.0], [4.9, 241.0], [5.0, 242.0], [5.1, 243.0], [5.2, 243.0], [5.3, 245.0], [5.4, 245.0], [5.5, 247.0], [5.6, 248.0], [5.7, 249.0], [5.8, 249.0], [5.9, 250.0], [6.0, 252.0], [6.1, 253.0], [6.2, 254.0], [6.3, 255.0], [6.4, 257.0], [6.5, 258.0], [6.6, 260.0], [6.7, 262.0], [6.8, 263.0], [6.9, 265.0], [7.0, 265.0], [7.1, 268.0], [7.2, 268.0], [7.3, 269.0], [7.4, 270.0], [7.5, 271.0], [7.6, 272.0], [7.7, 273.0], [7.8, 275.0], [7.9, 276.0], [8.0, 276.0], [8.1, 277.0], [8.2, 278.0], [8.3, 279.0], [8.4, 280.0], [8.5, 281.0], [8.6, 282.0], [8.7, 283.0], [8.8, 283.0], [8.9, 284.0], [9.0, 285.0], [9.1, 286.0], [9.2, 287.0], [9.3, 287.0], [9.4, 288.0], [9.5, 289.0], [9.6, 290.0], [9.7, 292.0], [9.8, 293.0], [9.9, 294.0], [10.0, 294.0], [10.1, 296.0], [10.2, 296.0], [10.3, 298.0], [10.4, 299.0], [10.5, 300.0], [10.6, 302.0], [10.7, 302.0], [10.8, 303.0], [10.9, 304.0], [11.0, 305.0], [11.1, 306.0], [11.2, 307.0], [11.3, 308.0], [11.4, 308.0], [11.5, 309.0], [11.6, 310.0], [11.7, 310.0], [11.8, 311.0], [11.9, 312.0], [12.0, 312.0], [12.1, 314.0], [12.2, 315.0], [12.3, 316.0], [12.4, 317.0], [12.5, 318.0], [12.6, 319.0], [12.7, 319.0], [12.8, 320.0], [12.9, 321.0], [13.0, 322.0], [13.1, 323.0], [13.2, 325.0], [13.3, 327.0], [13.4, 328.0], [13.5, 329.0], [13.6, 330.0], [13.7, 332.0], [13.8, 333.0], [13.9, 333.0], [14.0, 334.0], [14.1, 335.0], [14.2, 336.0], [14.3, 337.0], [14.4, 337.0], [14.5, 339.0], [14.6, 340.0], [14.7, 341.0], [14.8, 343.0], [14.9, 344.0], [15.0, 346.0], [15.1, 346.0], [15.2, 348.0], [15.3, 349.0], [15.4, 351.0], [15.5, 354.0], [15.6, 354.0], [15.7, 356.0], [15.8, 358.0], [15.9, 360.0], [16.0, 362.0], [16.1, 363.0], [16.2, 365.0], [16.3, 366.0], [16.4, 369.0], [16.5, 371.0], [16.6, 372.0], [16.7, 374.0], [16.8, 375.0], [16.9, 379.0], [17.0, 380.0], [17.1, 382.0], [17.2, 384.0], [17.3, 385.0], [17.4, 387.0], [17.5, 388.0], [17.6, 390.0], [17.7, 391.0], [17.8, 392.0], [17.9, 393.0], [18.0, 394.0], [18.1, 394.0], [18.2, 395.0], [18.3, 395.0], [18.4, 396.0], [18.5, 398.0], [18.6, 399.0], [18.7, 400.0], [18.8, 401.0], [18.9, 401.0], [19.0, 403.0], [19.1, 404.0], [19.2, 406.0], [19.3, 407.0], [19.4, 407.0], [19.5, 408.0], [19.6, 409.0], [19.7, 410.0], [19.8, 412.0], [19.9, 413.0], [20.0, 414.0], [20.1, 415.0], [20.2, 416.0], [20.3, 417.0], [20.4, 418.0], [20.5, 419.0], [20.6, 421.0], [20.7, 422.0], [20.8, 423.0], [20.9, 424.0], [21.0, 425.0], [21.1, 427.0], [21.2, 428.0], [21.3, 429.0], [21.4, 429.0], [21.5, 430.0], [21.6, 431.0], [21.7, 432.0], [21.8, 432.0], [21.9, 433.0], [22.0, 433.0], [22.1, 434.0], [22.2, 435.0], [22.3, 437.0], [22.4, 437.0], [22.5, 438.0], [22.6, 439.0], [22.7, 440.0], [22.8, 440.0], [22.9, 441.0], [23.0, 442.0], [23.1, 443.0], [23.2, 444.0], [23.3, 445.0], [23.4, 446.0], [23.5, 447.0], [23.6, 448.0], [23.7, 449.0], [23.8, 449.0], [23.9, 450.0], [24.0, 451.0], [24.1, 452.0], [24.2, 453.0], [24.3, 454.0], [24.4, 455.0], [24.5, 456.0], [24.6, 457.0], [24.7, 457.0], [24.8, 458.0], [24.9, 459.0], [25.0, 460.0], [25.1, 461.0], [25.2, 461.0], [25.3, 462.0], [25.4, 463.0], [25.5, 463.0], [25.6, 464.0], [25.7, 465.0], [25.8, 466.0], [25.9, 466.0], [26.0, 467.0], [26.1, 467.0], [26.2, 468.0], [26.3, 469.0], [26.4, 470.0], [26.5, 471.0], [26.6, 471.0], [26.7, 472.0], [26.8, 473.0], [26.9, 474.0], [27.0, 475.0], [27.1, 475.0], [27.2, 477.0], [27.3, 478.0], [27.4, 478.0], [27.5, 479.0], [27.6, 479.0], [27.7, 480.0], [27.8, 481.0], [27.9, 482.0], [28.0, 483.0], [28.1, 483.0], [28.2, 484.0], [28.3, 485.0], [28.4, 486.0], [28.5, 488.0], [28.6, 489.0], [28.7, 489.0], [28.8, 490.0], [28.9, 491.0], [29.0, 492.0], [29.1, 493.0], [29.2, 494.0], [29.3, 495.0], [29.4, 496.0], [29.5, 499.0], [29.6, 499.0], [29.7, 500.0], [29.8, 502.0], [29.9, 502.0], [30.0, 503.0], [30.1, 504.0], [30.2, 505.0], [30.3, 507.0], [30.4, 510.0], [30.5, 511.0], [30.6, 512.0], [30.7, 513.0], [30.8, 514.0], [30.9, 515.0], [31.0, 516.0], [31.1, 517.0], [31.2, 518.0], [31.3, 519.0], [31.4, 519.0], [31.5, 521.0], [31.6, 521.0], [31.7, 522.0], [31.8, 523.0], [31.9, 524.0], [32.0, 525.0], [32.1, 526.0], [32.2, 527.0], [32.3, 528.0], [32.4, 528.0], [32.5, 529.0], [32.6, 530.0], [32.7, 532.0], [32.8, 533.0], [32.9, 533.0], [33.0, 535.0], [33.1, 536.0], [33.2, 538.0], [33.3, 538.0], [33.4, 539.0], [33.5, 540.0], [33.6, 540.0], [33.7, 541.0], [33.8, 542.0], [33.9, 543.0], [34.0, 545.0], [34.1, 546.0], [34.2, 547.0], [34.3, 549.0], [34.4, 550.0], [34.5, 550.0], [34.6, 551.0], [34.7, 551.0], [34.8, 552.0], [34.9, 553.0], [35.0, 554.0], [35.1, 555.0], [35.2, 556.0], [35.3, 557.0], [35.4, 558.0], [35.5, 559.0], [35.6, 559.0], [35.7, 560.0], [35.8, 560.0], [35.9, 561.0], [36.0, 562.0], [36.1, 562.0], [36.2, 564.0], [36.3, 564.0], [36.4, 565.0], [36.5, 566.0], [36.6, 567.0], [36.7, 567.0], [36.8, 568.0], [36.9, 569.0], [37.0, 571.0], [37.1, 572.0], [37.2, 573.0], [37.3, 574.0], [37.4, 575.0], [37.5, 576.0], [37.6, 577.0], [37.7, 577.0], [37.8, 578.0], [37.9, 579.0], [38.0, 580.0], [38.1, 581.0], [38.2, 582.0], [38.3, 583.0], [38.4, 584.0], [38.5, 585.0], [38.6, 586.0], [38.7, 587.0], [38.8, 587.0], [38.9, 588.0], [39.0, 590.0], [39.1, 591.0], [39.2, 591.0], [39.3, 592.0], [39.4, 593.0], [39.5, 595.0], [39.6, 595.0], [39.7, 597.0], [39.8, 598.0], [39.9, 599.0], [40.0, 600.0], [40.1, 603.0], [40.2, 604.0], [40.3, 605.0], [40.4, 607.0], [40.5, 608.0], [40.6, 609.0], [40.7, 610.0], [40.8, 610.0], [40.9, 611.0], [41.0, 613.0], [41.1, 614.0], [41.2, 615.0], [41.3, 616.0], [41.4, 617.0], [41.5, 618.0], [41.6, 619.0], [41.7, 620.0], [41.8, 621.0], [41.9, 622.0], [42.0, 623.0], [42.1, 624.0], [42.2, 626.0], [42.3, 627.0], [42.4, 628.0], [42.5, 629.0], [42.6, 631.0], [42.7, 632.0], [42.8, 634.0], [42.9, 635.0], [43.0, 636.0], [43.1, 636.0], [43.2, 637.0], [43.3, 638.0], [43.4, 640.0], [43.5, 642.0], [43.6, 644.0], [43.7, 645.0], [43.8, 646.0], [43.9, 648.0], [44.0, 649.0], [44.1, 650.0], [44.2, 651.0], [44.3, 651.0], [44.4, 653.0], [44.5, 653.0], [44.6, 655.0], [44.7, 656.0], [44.8, 658.0], [44.9, 660.0], [45.0, 661.0], [45.1, 661.0], [45.2, 662.0], [45.3, 664.0], [45.4, 666.0], [45.5, 667.0], [45.6, 668.0], [45.7, 670.0], [45.8, 671.0], [45.9, 672.0], [46.0, 675.0], [46.1, 676.0], [46.2, 677.0], [46.3, 678.0], [46.4, 680.0], [46.5, 681.0], [46.6, 683.0], [46.7, 685.0], [46.8, 686.0], [46.9, 688.0], [47.0, 689.0], [47.1, 690.0], [47.2, 691.0], [47.3, 693.0], [47.4, 694.0], [47.5, 695.0], [47.6, 697.0], [47.7, 698.0], [47.8, 699.0], [47.9, 700.0], [48.0, 701.0], [48.1, 702.0], [48.2, 704.0], [48.3, 705.0], [48.4, 706.0], [48.5, 707.0], [48.6, 708.0], [48.7, 710.0], [48.8, 711.0], [48.9, 712.0], [49.0, 713.0], [49.1, 715.0], [49.2, 717.0], [49.3, 720.0], [49.4, 722.0], [49.5, 724.0], [49.6, 728.0], [49.7, 729.0], [49.8, 730.0], [49.9, 734.0], [50.0, 735.0], [50.1, 737.0], [50.2, 739.0], [50.3, 739.0], [50.4, 741.0], [50.5, 743.0], [50.6, 745.0], [50.7, 747.0], [50.8, 750.0], [50.9, 751.0], [51.0, 753.0], [51.1, 755.0], [51.2, 757.0], [51.3, 758.0], [51.4, 759.0], [51.5, 761.0], [51.6, 762.0], [51.7, 764.0], [51.8, 765.0], [51.9, 767.0], [52.0, 769.0], [52.1, 772.0], [52.2, 773.0], [52.3, 774.0], [52.4, 775.0], [52.5, 777.0], [52.6, 780.0], [52.7, 782.0], [52.8, 784.0], [52.9, 786.0], [53.0, 788.0], [53.1, 789.0], [53.2, 790.0], [53.3, 791.0], [53.4, 793.0], [53.5, 793.0], [53.6, 795.0], [53.7, 796.0], [53.8, 799.0], [53.9, 801.0], [54.0, 803.0], [54.1, 804.0], [54.2, 807.0], [54.3, 808.0], [54.4, 809.0], [54.5, 810.0], [54.6, 811.0], [54.7, 813.0], [54.8, 814.0], [54.9, 817.0], [55.0, 819.0], [55.1, 820.0], [55.2, 821.0], [55.3, 824.0], [55.4, 825.0], [55.5, 826.0], [55.6, 829.0], [55.7, 831.0], [55.8, 833.0], [55.9, 834.0], [56.0, 835.0], [56.1, 836.0], [56.2, 838.0], [56.3, 840.0], [56.4, 842.0], [56.5, 843.0], [56.6, 846.0], [56.7, 847.0], [56.8, 850.0], [56.9, 853.0], [57.0, 853.0], [57.1, 856.0], [57.2, 859.0], [57.3, 860.0], [57.4, 861.0], [57.5, 864.0], [57.6, 867.0], [57.7, 867.0], [57.8, 869.0], [57.9, 871.0], [58.0, 872.0], [58.1, 874.0], [58.2, 875.0], [58.3, 876.0], [58.4, 877.0], [58.5, 880.0], [58.6, 881.0], [58.7, 883.0], [58.8, 886.0], [58.9, 887.0], [59.0, 889.0], [59.1, 891.0], [59.2, 893.0], [59.3, 895.0], [59.4, 896.0], [59.5, 899.0], [59.6, 902.0], [59.7, 904.0], [59.8, 906.0], [59.9, 908.0], [60.0, 909.0], [60.1, 912.0], [60.2, 915.0], [60.3, 915.0], [60.4, 916.0], [60.5, 917.0], [60.6, 919.0], [60.7, 923.0], [60.8, 925.0], [60.9, 926.0], [61.0, 927.0], [61.1, 929.0], [61.2, 930.0], [61.3, 932.0], [61.4, 933.0], [61.5, 935.0], [61.6, 937.0], [61.7, 940.0], [61.8, 942.0], [61.9, 944.0], [62.0, 945.0], [62.1, 947.0], [62.2, 949.0], [62.3, 953.0], [62.4, 954.0], [62.5, 955.0], [62.6, 957.0], [62.7, 959.0], [62.8, 962.0], [62.9, 962.0], [63.0, 965.0], [63.1, 965.0], [63.2, 967.0], [63.3, 969.0], [63.4, 971.0], [63.5, 972.0], [63.6, 975.0], [63.7, 977.0], [63.8, 978.0], [63.9, 980.0], [64.0, 982.0], [64.1, 983.0], [64.2, 985.0], [64.3, 987.0], [64.4, 988.0], [64.5, 990.0], [64.6, 991.0], [64.7, 993.0], [64.8, 996.0], [64.9, 997.0], [65.0, 1000.0], [65.1, 1001.0], [65.2, 1003.0], [65.3, 1005.0], [65.4, 1006.0], [65.5, 1008.0], [65.6, 1009.0], [65.7, 1012.0], [65.8, 1017.0], [65.9, 1019.0], [66.0, 1022.0], [66.1, 1024.0], [66.2, 1026.0], [66.3, 1029.0], [66.4, 1032.0], [66.5, 1033.0], [66.6, 1036.0], [66.7, 1036.0], [66.8, 1038.0], [66.9, 1039.0], [67.0, 1041.0], [67.1, 1043.0], [67.2, 1044.0], [67.3, 1046.0], [67.4, 1047.0], [67.5, 1050.0], [67.6, 1052.0], [67.7, 1054.0], [67.8, 1055.0], [67.9, 1057.0], [68.0, 1058.0], [68.1, 1060.0], [68.2, 1062.0], [68.3, 1066.0], [68.4, 1066.0], [68.5, 1069.0], [68.6, 1071.0], [68.7, 1072.0], [68.8, 1072.0], [68.9, 1075.0], [69.0, 1077.0], [69.1, 1078.0], [69.2, 1080.0], [69.3, 1082.0], [69.4, 1082.0], [69.5, 1086.0], [69.6, 1087.0], [69.7, 1090.0], [69.8, 1091.0], [69.9, 1093.0], [70.0, 1095.0], [70.1, 1097.0], [70.2, 1100.0], [70.3, 1101.0], [70.4, 1104.0], [70.5, 1106.0], [70.6, 1108.0], [70.7, 1110.0], [70.8, 1111.0], [70.9, 1113.0], [71.0, 1115.0], [71.1, 1117.0], [71.2, 1119.0], [71.3, 1120.0], [71.4, 1122.0], [71.5, 1124.0], [71.6, 1126.0], [71.7, 1128.0], [71.8, 1129.0], [71.9, 1131.0], [72.0, 1132.0], [72.1, 1135.0], [72.2, 1137.0], [72.3, 1139.0], [72.4, 1141.0], [72.5, 1141.0], [72.6, 1144.0], [72.7, 1146.0], [72.8, 1147.0], [72.9, 1149.0], [73.0, 1150.0], [73.1, 1152.0], [73.2, 1154.0], [73.3, 1157.0], [73.4, 1158.0], [73.5, 1160.0], [73.6, 1162.0], [73.7, 1165.0], [73.8, 1166.0], [73.9, 1169.0], [74.0, 1171.0], [74.1, 1173.0], [74.2, 1175.0], [74.3, 1177.0], [74.4, 1179.0], [74.5, 1182.0], [74.6, 1184.0], [74.7, 1186.0], [74.8, 1188.0], [74.9, 1189.0], [75.0, 1190.0], [75.1, 1192.0], [75.2, 1195.0], [75.3, 1199.0], [75.4, 1202.0], [75.5, 1204.0], [75.6, 1206.0], [75.7, 1210.0], [75.8, 1212.0], [75.9, 1214.0], [76.0, 1215.0], [76.1, 1216.0], [76.2, 1218.0], [76.3, 1221.0], [76.4, 1225.0], [76.5, 1227.0], [76.6, 1231.0], [76.7, 1232.0], [76.8, 1235.0], [76.9, 1238.0], [77.0, 1239.0], [77.1, 1240.0], [77.2, 1242.0], [77.3, 1245.0], [77.4, 1247.0], [77.5, 1250.0], [77.6, 1252.0], [77.7, 1253.0], [77.8, 1255.0], [77.9, 1257.0], [78.0, 1259.0], [78.1, 1262.0], [78.2, 1264.0], [78.3, 1267.0], [78.4, 1270.0], [78.5, 1272.0], [78.6, 1275.0], [78.7, 1276.0], [78.8, 1279.0], [78.9, 1283.0], [79.0, 1284.0], [79.1, 1287.0], [79.2, 1290.0], [79.3, 1291.0], [79.4, 1292.0], [79.5, 1294.0], [79.6, 1296.0], [79.7, 1298.0], [79.8, 1302.0], [79.9, 1305.0], [80.0, 1308.0], [80.1, 1310.0], [80.2, 1311.0], [80.3, 1313.0], [80.4, 1316.0], [80.5, 1320.0], [80.6, 1323.0], [80.7, 1324.0], [80.8, 1326.0], [80.9, 1328.0], [81.0, 1329.0], [81.1, 1332.0], [81.2, 1333.0], [81.3, 1335.0], [81.4, 1338.0], [81.5, 1340.0], [81.6, 1342.0], [81.7, 1344.0], [81.8, 1346.0], [81.9, 1348.0], [82.0, 1350.0], [82.1, 1353.0], [82.2, 1355.0], [82.3, 1358.0], [82.4, 1360.0], [82.5, 1362.0], [82.6, 1364.0], [82.7, 1367.0], [82.8, 1368.0], [82.9, 1370.0], [83.0, 1372.0], [83.1, 1374.0], [83.2, 1376.0], [83.3, 1378.0], [83.4, 1380.0], [83.5, 1382.0], [83.6, 1384.0], [83.7, 1386.0], [83.8, 1390.0], [83.9, 1391.0], [84.0, 1393.0], [84.1, 1395.0], [84.2, 1397.0], [84.3, 1399.0], [84.4, 1402.0], [84.5, 1403.0], [84.6, 1407.0], [84.7, 1409.0], [84.8, 1413.0], [84.9, 1416.0], [85.0, 1417.0], [85.1, 1421.0], [85.2, 1425.0], [85.3, 1428.0], [85.4, 1432.0], [85.5, 1433.0], [85.6, 1435.0], [85.7, 1438.0], [85.8, 1442.0], [85.9, 1444.0], [86.0, 1445.0], [86.1, 1448.0], [86.2, 1452.0], [86.3, 1454.0], [86.4, 1457.0], [86.5, 1460.0], [86.6, 1463.0], [86.7, 1466.0], [86.8, 1470.0], [86.9, 1472.0], [87.0, 1474.0], [87.1, 1476.0], [87.2, 1478.0], [87.3, 1481.0], [87.4, 1484.0], [87.5, 1486.0], [87.6, 1489.0], [87.7, 1494.0], [87.8, 1497.0], [87.9, 1499.0], [88.0, 1500.0], [88.1, 1504.0], [88.2, 1508.0], [88.3, 1510.0], [88.4, 1513.0], [88.5, 1521.0], [88.6, 1524.0], [88.7, 1526.0], [88.8, 1533.0], [88.9, 1540.0], [89.0, 1546.0], [89.1, 1551.0], [89.2, 1556.0], [89.3, 1563.0], [89.4, 1568.0], [89.5, 1570.0], [89.6, 1577.0], [89.7, 1582.0], [89.8, 1587.0], [89.9, 1589.0], [90.0, 1592.0], [90.1, 1595.0], [90.2, 1601.0], [90.3, 1608.0], [90.4, 1609.0], [90.5, 1613.0], [90.6, 1617.0], [90.7, 1625.0], [90.8, 1635.0], [90.9, 1647.0], [91.0, 1651.0], [91.1, 1656.0], [91.2, 1662.0], [91.3, 1669.0], [91.4, 1675.0], [91.5, 1679.0], [91.6, 1686.0], [91.7, 1692.0], [91.8, 1702.0], [91.9, 1709.0], [92.0, 1717.0], [92.1, 1721.0], [92.2, 1730.0], [92.3, 1732.0], [92.4, 1741.0], [92.5, 1752.0], [92.6, 1759.0], [92.7, 1772.0], [92.8, 1774.0], [92.9, 1783.0], [93.0, 1791.0], [93.1, 1795.0], [93.2, 1804.0], [93.3, 1814.0], [93.4, 1821.0], [93.5, 1829.0], [93.6, 1837.0], [93.7, 1843.0], [93.8, 1855.0], [93.9, 1862.0], [94.0, 1871.0], [94.1, 1882.0], [94.2, 1890.0], [94.3, 1903.0], [94.4, 1929.0], [94.5, 1934.0], [94.6, 1945.0], [94.7, 1949.0], [94.8, 1953.0], [94.9, 1962.0], [95.0, 1979.0], [95.1, 1987.0], [95.2, 2001.0], [95.3, 2018.0], [95.4, 2034.0], [95.5, 2043.0], [95.6, 2057.0], [95.7, 2064.0], [95.8, 2098.0], [95.9, 2107.0], [96.0, 2118.0], [96.1, 2124.0], [96.2, 2137.0], [96.3, 2146.0], [96.4, 2161.0], [96.5, 2173.0], [96.6, 2183.0], [96.7, 2197.0], [96.8, 2221.0], [96.9, 2244.0], [97.0, 2269.0], [97.1, 2283.0], [97.2, 2293.0], [97.3, 2314.0], [97.4, 2328.0], [97.5, 2358.0], [97.6, 2386.0], [97.7, 2392.0], [97.8, 2416.0], [97.9, 2436.0], [98.0, 2474.0], [98.1, 2487.0], [98.2, 2507.0], [98.3, 2551.0], [98.4, 2604.0], [98.5, 2656.0], [98.6, 2679.0], [98.7, 2717.0], [98.8, 2793.0], [98.9, 2857.0], [99.0, 2882.0], [99.1, 2945.0], [99.2, 3031.0], [99.3, 3244.0], [99.4, 3407.0], [99.5, 3691.0], [99.6, 3822.0], [99.7, 4182.0], [99.8, 4518.0], [99.9, 5259.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 569.0, "series": [{"data": [[600.0, 411.0], [700.0, 310.0], [800.0, 297.0], [900.0, 281.0], [1000.0, 271.0], [1100.0, 269.0], [1200.0, 227.0], [1300.0, 238.0], [1400.0, 189.0], [1500.0, 115.0], [1600.0, 82.0], [1700.0, 74.0], [1800.0, 57.0], [1900.0, 46.0], [2000.0, 34.0], [2100.0, 46.0], [2300.0, 26.0], [2200.0, 28.0], [2400.0, 22.0], [2500.0, 11.0], [2600.0, 13.0], [2800.0, 11.0], [2700.0, 10.0], [2900.0, 5.0], [3000.0, 4.0], [3100.0, 3.0], [3300.0, 3.0], [3200.0, 3.0], [3400.0, 2.0], [3500.0, 2.0], [3700.0, 4.0], [3600.0, 3.0], [3800.0, 2.0], [3900.0, 2.0], [4100.0, 4.0], [4300.0, 1.0], [4500.0, 2.0], [4400.0, 1.0], [4800.0, 1.0], [4900.0, 2.0], [5200.0, 1.0], [5600.0, 1.0], [6000.0, 3.0], [6500.0, 1.0], [100.0, 20.0], [200.0, 523.0], [300.0, 426.0], [400.0, 569.0], [500.0, 534.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 622.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3026.0, "series": [{"data": [[0.0, 1542.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3026.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 622.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.835164835164836, "minX": 1.6042257E12, "maxY": 10.0, "series": [{"data": [[1.60422594E12, 10.0], [1.60422576E12, 10.0], [1.60422582E12, 10.0], [1.60422612E12, 10.0], [1.60422618E12, 9.835164835164836], [1.6042257E12, 10.0], [1.604226E12, 10.0], [1.60422606E12, 10.0], [1.60422588E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422618E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 290.0, "minX": 1.0, "maxY": 2482.0, "series": [{"data": [[8.0, 1616.0], [4.0, 810.0], [2.0, 753.0], [1.0, 2482.0], [9.0, 290.0], [10.0, 890.6298011966805], [5.0, 749.0], [6.0, 811.0], [3.0, 1086.0], [7.0, 1264.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 890.985356454721]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 833.8666666666667, "minX": 1.6042257E12, "maxY": 3533623.533333333, "series": [{"data": [[1.60422594E12, 3195758.2666666666], [1.60422576E12, 2766308.533333333], [1.60422582E12, 3319861.55], [1.60422612E12, 3007183.7666666666], [1.60422618E12, 1424330.3166666667], [1.6042257E12, 811876.1166666667], [1.604226E12, 2434836.5], [1.60422606E12, 3533623.533333333], [1.60422588E12, 3479212.1166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422594E12, 4546.85], [1.60422576E12, 4450.583333333333], [1.60422582E12, 5502.933333333333], [1.60422612E12, 5715.033333333334], [1.60422618E12, 2055.45], [1.6042257E12, 833.8666666666667], [1.604226E12, 5018.0], [1.60422606E12, 5140.733333333334], [1.60422588E12, 5313.883333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422618E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 794.1859229747683, "minX": 1.6042257E12, "maxY": 1268.2882882882884, "series": [{"data": [[1.60422594E12, 991.5344262295077], [1.60422576E12, 968.374193548387], [1.60422582E12, 812.547425474253], [1.60422612E12, 794.1859229747683], [1.60422618E12, 1065.4212454212463], [1.6042257E12, 1268.2882882882884], [1.604226E12, 854.5646551724138], [1.60422606E12, 868.6894049346885], [1.60422588E12, 851.9428571428571]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422618E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 792.4302788844628, "minX": 1.6042257E12, "maxY": 1264.882882882883, "series": [{"data": [[1.60422594E12, 989.065573770492], [1.60422576E12, 966.3467741935476], [1.60422582E12, 810.3997289972908], [1.60422612E12, 792.4302788844628], [1.60422618E12, 1063.6739926739926], [1.6042257E12, 1264.882882882883], [1.604226E12, 853.1767241379315], [1.60422606E12, 866.5021770682147], [1.60422588E12, 849.6771428571432]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422618E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6042257E12, "maxY": 1.1441441441441433, "series": [{"data": [[1.60422594E12, 0.022950819672131143], [1.60422576E12, 0.02096774193548387], [1.60422582E12, 0.017615176151761544], [1.60422612E12, 0.013280212483399731], [1.60422618E12, 0.0], [1.6042257E12, 1.1441441441441433], [1.604226E12, 0.01580459770114944], [1.60422606E12, 0.02177068214804066], [1.60422588E12, 0.011428571428571432]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422618E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.6042257E12, "maxY": 6521.0, "series": [{"data": [[1.60422594E12, 6521.0], [1.60422576E12, 4870.0], [1.60422582E12, 4182.0], [1.60422612E12, 3359.0], [1.60422618E12, 3983.0], [1.6042257E12, 3898.0], [1.604226E12, 6041.0], [1.60422606E12, 2955.0], [1.60422588E12, 3515.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422594E12, 202.0], [1.60422576E12, 213.17799970388413], [1.60422582E12, 206.0], [1.60422612E12, 199.7859998202324], [1.60422618E12, 212.86399973869322], [1.6042257E12, 249.6319978904724], [1.604226E12, 203.27299983382224], [1.60422606E12, 212.0], [1.60422588E12, 202.61799966573716]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422594E12, 202.097800116539], [1.60422576E12, 214.29580011844635], [1.60422582E12, 206.0], [1.60422612E12, 200.46460007190706], [1.60422618E12, 213.8504001045227], [1.6042257E12, 257.595200843811], [1.604226E12, 203.9003000664711], [1.60422606E12, 212.0], [1.60422588E12, 203.87980013370515]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422594E12, 202.0], [1.60422576E12, 213.79899985194206], [1.60422582E12, 206.0], [1.60422612E12, 200.16299991011618], [1.60422618E12, 213.41199986934663], [1.6042257E12, 254.05599894523618], [1.604226E12, 203.62149991691112], [1.60422606E12, 212.0], [1.60422588E12, 203.31899983286857]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422594E12, 195.0], [1.60422576E12, 198.0], [1.60422582E12, 184.0], [1.60422612E12, 193.0], [1.60422618E12, 201.0], [1.6042257E12, 249.0], [1.604226E12, 190.0], [1.60422606E12, 199.0], [1.60422588E12, 192.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422594E12, 839.0], [1.60422576E12, 826.5], [1.60422582E12, 609.0], [1.60422612E12, 636.0], [1.60422618E12, 972.0], [1.6042257E12, 1006.0], [1.604226E12, 742.0], [1.60422606E12, 697.0], [1.60422588E12, 680.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422618E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 408.0, "minX": 1.0, "maxY": 2779.0, "series": [{"data": [[2.0, 2779.0], [3.0, 1062.5], [4.0, 1367.0], [5.0, 1504.0], [6.0, 1215.0], [7.0, 1069.0], [8.0, 1085.5], [9.0, 978.0], [10.0, 904.0], [11.0, 831.0], [12.0, 796.0], [13.0, 728.0], [14.0, 676.0], [15.0, 550.0], [16.0, 538.5], [1.0, 2482.0], [17.0, 489.0], [18.0, 519.5], [19.0, 463.0], [20.0, 419.0], [21.0, 454.0], [22.0, 442.0], [23.0, 433.0], [24.0, 441.5], [25.0, 408.0], [28.0, 425.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 408.0, "minX": 1.0, "maxY": 2777.0, "series": [{"data": [[2.0, 2777.0], [3.0, 1056.0], [4.0, 1356.5], [5.0, 1499.0], [6.0, 1211.0], [7.0, 1068.0], [8.0, 1078.5], [9.0, 977.0], [10.0, 902.5], [11.0, 829.0], [12.0, 795.0], [13.0, 726.5], [14.0, 675.0], [15.0, 550.0], [16.0, 537.5], [1.0, 2470.0], [17.0, 489.0], [18.0, 519.5], [19.0, 461.0], [20.0, 418.5], [21.0, 454.0], [22.0, 441.5], [23.0, 433.0], [24.0, 441.5], [25.0, 408.0], [28.0, 425.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.0166666666666666, "minX": 1.6042257E12, "maxY": 12.566666666666666, "series": [{"data": [[1.60422594E12, 10.166666666666666], [1.60422576E12, 10.333333333333334], [1.60422582E12, 12.3], [1.60422612E12, 12.566666666666666], [1.60422618E12, 4.383333333333334], [1.6042257E12, 2.0166666666666666], [1.604226E12, 11.6], [1.60422606E12, 11.466666666666667], [1.60422588E12, 11.666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422618E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.85, "minX": 1.6042257E12, "maxY": 12.55, "series": [{"data": [[1.60422594E12, 10.166666666666666], [1.60422576E12, 10.333333333333334], [1.60422582E12, 12.3], [1.60422612E12, 12.55], [1.60422618E12, 4.55], [1.6042257E12, 1.85], [1.604226E12, 11.6], [1.60422606E12, 11.483333333333333], [1.60422588E12, 11.666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422618E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.85, "minX": 1.6042257E12, "maxY": 12.55, "series": [{"data": [[1.60422594E12, 10.166666666666666], [1.60422576E12, 10.333333333333334], [1.60422582E12, 12.3], [1.60422612E12, 12.55], [1.60422618E12, 4.55], [1.6042257E12, 1.85], [1.604226E12, 11.6], [1.60422606E12, 11.483333333333333], [1.60422588E12, 11.666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422618E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.85, "minX": 1.6042257E12, "maxY": 12.55, "series": [{"data": [[1.60422594E12, 10.166666666666666], [1.60422576E12, 10.333333333333334], [1.60422582E12, 12.3], [1.60422612E12, 12.55], [1.60422618E12, 4.55], [1.6042257E12, 1.85], [1.604226E12, 11.6], [1.60422606E12, 11.483333333333333], [1.60422588E12, 11.666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422618E12, "title": "Total Transactions Per Second"}},
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

