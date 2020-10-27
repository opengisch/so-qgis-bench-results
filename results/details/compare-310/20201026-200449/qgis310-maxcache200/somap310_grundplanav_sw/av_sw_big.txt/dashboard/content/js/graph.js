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
        data: {"result": {"minY": 195.0, "minX": 0.0, "maxY": 6439.0, "series": [{"data": [[0.0, 195.0], [0.1, 197.0], [0.2, 199.0], [0.3, 201.0], [0.4, 203.0], [0.5, 204.0], [0.6, 205.0], [0.7, 206.0], [0.8, 206.0], [0.9, 207.0], [1.0, 208.0], [1.1, 208.0], [1.2, 210.0], [1.3, 211.0], [1.4, 211.0], [1.5, 211.0], [1.6, 212.0], [1.7, 213.0], [1.8, 214.0], [1.9, 215.0], [2.0, 216.0], [2.1, 216.0], [2.2, 217.0], [2.3, 218.0], [2.4, 219.0], [2.5, 219.0], [2.6, 220.0], [2.7, 222.0], [2.8, 223.0], [2.9, 224.0], [3.0, 225.0], [3.1, 226.0], [3.2, 227.0], [3.3, 228.0], [3.4, 228.0], [3.5, 230.0], [3.6, 230.0], [3.7, 231.0], [3.8, 231.0], [3.9, 233.0], [4.0, 234.0], [4.1, 234.0], [4.2, 235.0], [4.3, 236.0], [4.4, 236.0], [4.5, 237.0], [4.6, 238.0], [4.7, 238.0], [4.8, 239.0], [4.9, 239.0], [5.0, 240.0], [5.1, 241.0], [5.2, 242.0], [5.3, 242.0], [5.4, 243.0], [5.5, 243.0], [5.6, 244.0], [5.7, 246.0], [5.8, 247.0], [5.9, 248.0], [6.0, 249.0], [6.1, 250.0], [6.2, 251.0], [6.3, 252.0], [6.4, 253.0], [6.5, 254.0], [6.6, 256.0], [6.7, 259.0], [6.8, 260.0], [6.9, 261.0], [7.0, 263.0], [7.1, 263.0], [7.2, 264.0], [7.3, 266.0], [7.4, 268.0], [7.5, 270.0], [7.6, 270.0], [7.7, 272.0], [7.8, 274.0], [7.9, 275.0], [8.0, 276.0], [8.1, 277.0], [8.2, 279.0], [8.3, 279.0], [8.4, 280.0], [8.5, 282.0], [8.6, 283.0], [8.7, 284.0], [8.8, 285.0], [8.9, 286.0], [9.0, 287.0], [9.1, 287.0], [9.2, 288.0], [9.3, 289.0], [9.4, 290.0], [9.5, 291.0], [9.6, 292.0], [9.7, 293.0], [9.8, 293.0], [9.9, 294.0], [10.0, 295.0], [10.1, 297.0], [10.2, 298.0], [10.3, 299.0], [10.4, 300.0], [10.5, 301.0], [10.6, 304.0], [10.7, 305.0], [10.8, 306.0], [10.9, 307.0], [11.0, 307.0], [11.1, 310.0], [11.2, 311.0], [11.3, 312.0], [11.4, 312.0], [11.5, 314.0], [11.6, 315.0], [11.7, 315.0], [11.8, 317.0], [11.9, 318.0], [12.0, 319.0], [12.1, 320.0], [12.2, 321.0], [12.3, 323.0], [12.4, 324.0], [12.5, 325.0], [12.6, 326.0], [12.7, 327.0], [12.8, 328.0], [12.9, 330.0], [13.0, 331.0], [13.1, 332.0], [13.2, 333.0], [13.3, 334.0], [13.4, 335.0], [13.5, 336.0], [13.6, 337.0], [13.7, 339.0], [13.8, 340.0], [13.9, 341.0], [14.0, 344.0], [14.1, 346.0], [14.2, 347.0], [14.3, 350.0], [14.4, 352.0], [14.5, 354.0], [14.6, 354.0], [14.7, 356.0], [14.8, 358.0], [14.9, 363.0], [15.0, 364.0], [15.1, 368.0], [15.2, 370.0], [15.3, 370.0], [15.4, 372.0], [15.5, 373.0], [15.6, 376.0], [15.7, 378.0], [15.8, 379.0], [15.9, 380.0], [16.0, 384.0], [16.1, 386.0], [16.2, 388.0], [16.3, 390.0], [16.4, 390.0], [16.5, 393.0], [16.6, 394.0], [16.7, 394.0], [16.8, 395.0], [16.9, 396.0], [17.0, 397.0], [17.1, 399.0], [17.2, 399.0], [17.3, 400.0], [17.4, 401.0], [17.5, 402.0], [17.6, 403.0], [17.7, 405.0], [17.8, 406.0], [17.9, 407.0], [18.0, 407.0], [18.1, 409.0], [18.2, 410.0], [18.3, 411.0], [18.4, 411.0], [18.5, 412.0], [18.6, 413.0], [18.7, 414.0], [18.8, 414.0], [18.9, 415.0], [19.0, 416.0], [19.1, 416.0], [19.2, 417.0], [19.3, 418.0], [19.4, 419.0], [19.5, 420.0], [19.6, 421.0], [19.7, 422.0], [19.8, 422.0], [19.9, 423.0], [20.0, 424.0], [20.1, 425.0], [20.2, 426.0], [20.3, 426.0], [20.4, 427.0], [20.5, 428.0], [20.6, 430.0], [20.7, 430.0], [20.8, 431.0], [20.9, 431.0], [21.0, 432.0], [21.1, 434.0], [21.2, 435.0], [21.3, 436.0], [21.4, 438.0], [21.5, 439.0], [21.6, 440.0], [21.7, 441.0], [21.8, 442.0], [21.9, 442.0], [22.0, 443.0], [22.1, 445.0], [22.2, 445.0], [22.3, 447.0], [22.4, 448.0], [22.5, 448.0], [22.6, 449.0], [22.7, 450.0], [22.8, 452.0], [22.9, 453.0], [23.0, 454.0], [23.1, 455.0], [23.2, 455.0], [23.3, 456.0], [23.4, 457.0], [23.5, 459.0], [23.6, 460.0], [23.7, 461.0], [23.8, 463.0], [23.9, 464.0], [24.0, 464.0], [24.1, 465.0], [24.2, 466.0], [24.3, 467.0], [24.4, 468.0], [24.5, 468.0], [24.6, 470.0], [24.7, 470.0], [24.8, 471.0], [24.9, 472.0], [25.0, 473.0], [25.1, 473.0], [25.2, 475.0], [25.3, 476.0], [25.4, 477.0], [25.5, 477.0], [25.6, 479.0], [25.7, 480.0], [25.8, 480.0], [25.9, 481.0], [26.0, 483.0], [26.1, 483.0], [26.2, 484.0], [26.3, 485.0], [26.4, 486.0], [26.5, 486.0], [26.6, 487.0], [26.7, 488.0], [26.8, 490.0], [26.9, 492.0], [27.0, 492.0], [27.1, 493.0], [27.2, 494.0], [27.3, 495.0], [27.4, 495.0], [27.5, 496.0], [27.6, 497.0], [27.7, 498.0], [27.8, 499.0], [27.9, 501.0], [28.0, 502.0], [28.1, 504.0], [28.2, 505.0], [28.3, 506.0], [28.4, 507.0], [28.5, 508.0], [28.6, 509.0], [28.7, 511.0], [28.8, 512.0], [28.9, 513.0], [29.0, 515.0], [29.1, 516.0], [29.2, 517.0], [29.3, 518.0], [29.4, 519.0], [29.5, 520.0], [29.6, 521.0], [29.7, 522.0], [29.8, 523.0], [29.9, 524.0], [30.0, 525.0], [30.1, 526.0], [30.2, 527.0], [30.3, 528.0], [30.4, 529.0], [30.5, 530.0], [30.6, 532.0], [30.7, 533.0], [30.8, 533.0], [30.9, 534.0], [31.0, 535.0], [31.1, 536.0], [31.2, 537.0], [31.3, 538.0], [31.4, 539.0], [31.5, 539.0], [31.6, 540.0], [31.7, 541.0], [31.8, 542.0], [31.9, 542.0], [32.0, 543.0], [32.1, 544.0], [32.2, 545.0], [32.3, 546.0], [32.4, 546.0], [32.5, 547.0], [32.6, 548.0], [32.7, 549.0], [32.8, 549.0], [32.9, 550.0], [33.0, 552.0], [33.1, 552.0], [33.2, 554.0], [33.3, 555.0], [33.4, 556.0], [33.5, 556.0], [33.6, 558.0], [33.7, 560.0], [33.8, 562.0], [33.9, 563.0], [34.0, 563.0], [34.1, 564.0], [34.2, 565.0], [34.3, 566.0], [34.4, 567.0], [34.5, 569.0], [34.6, 569.0], [34.7, 570.0], [34.8, 571.0], [34.9, 572.0], [35.0, 573.0], [35.1, 574.0], [35.2, 576.0], [35.3, 577.0], [35.4, 578.0], [35.5, 580.0], [35.6, 581.0], [35.7, 581.0], [35.8, 582.0], [35.9, 584.0], [36.0, 584.0], [36.1, 585.0], [36.2, 586.0], [36.3, 587.0], [36.4, 588.0], [36.5, 588.0], [36.6, 589.0], [36.7, 590.0], [36.8, 590.0], [36.9, 591.0], [37.0, 592.0], [37.1, 593.0], [37.2, 596.0], [37.3, 596.0], [37.4, 598.0], [37.5, 599.0], [37.6, 600.0], [37.7, 602.0], [37.8, 603.0], [37.9, 604.0], [38.0, 605.0], [38.1, 606.0], [38.2, 607.0], [38.3, 608.0], [38.4, 609.0], [38.5, 612.0], [38.6, 613.0], [38.7, 614.0], [38.8, 614.0], [38.9, 615.0], [39.0, 617.0], [39.1, 618.0], [39.2, 620.0], [39.3, 621.0], [39.4, 623.0], [39.5, 623.0], [39.6, 625.0], [39.7, 626.0], [39.8, 627.0], [39.9, 628.0], [40.0, 630.0], [40.1, 631.0], [40.2, 632.0], [40.3, 634.0], [40.4, 634.0], [40.5, 636.0], [40.6, 636.0], [40.7, 638.0], [40.8, 638.0], [40.9, 639.0], [41.0, 640.0], [41.1, 641.0], [41.2, 642.0], [41.3, 643.0], [41.4, 644.0], [41.5, 645.0], [41.6, 646.0], [41.7, 647.0], [41.8, 647.0], [41.9, 649.0], [42.0, 650.0], [42.1, 651.0], [42.2, 652.0], [42.3, 652.0], [42.4, 653.0], [42.5, 654.0], [42.6, 657.0], [42.7, 657.0], [42.8, 658.0], [42.9, 659.0], [43.0, 660.0], [43.1, 661.0], [43.2, 662.0], [43.3, 665.0], [43.4, 665.0], [43.5, 666.0], [43.6, 667.0], [43.7, 668.0], [43.8, 670.0], [43.9, 671.0], [44.0, 672.0], [44.1, 672.0], [44.2, 673.0], [44.3, 674.0], [44.4, 676.0], [44.5, 677.0], [44.6, 678.0], [44.7, 680.0], [44.8, 681.0], [44.9, 682.0], [45.0, 684.0], [45.1, 684.0], [45.2, 685.0], [45.3, 687.0], [45.4, 688.0], [45.5, 691.0], [45.6, 691.0], [45.7, 692.0], [45.8, 694.0], [45.9, 695.0], [46.0, 697.0], [46.1, 698.0], [46.2, 700.0], [46.3, 702.0], [46.4, 703.0], [46.5, 704.0], [46.6, 706.0], [46.7, 707.0], [46.8, 709.0], [46.9, 709.0], [47.0, 710.0], [47.1, 711.0], [47.2, 714.0], [47.3, 716.0], [47.4, 717.0], [47.5, 718.0], [47.6, 719.0], [47.7, 721.0], [47.8, 722.0], [47.9, 723.0], [48.0, 725.0], [48.1, 728.0], [48.2, 729.0], [48.3, 731.0], [48.4, 732.0], [48.5, 733.0], [48.6, 735.0], [48.7, 736.0], [48.8, 737.0], [48.9, 737.0], [49.0, 738.0], [49.1, 739.0], [49.2, 740.0], [49.3, 741.0], [49.4, 743.0], [49.5, 745.0], [49.6, 746.0], [49.7, 749.0], [49.8, 751.0], [49.9, 752.0], [50.0, 752.0], [50.1, 754.0], [50.2, 756.0], [50.3, 758.0], [50.4, 759.0], [50.5, 761.0], [50.6, 762.0], [50.7, 764.0], [50.8, 765.0], [50.9, 767.0], [51.0, 768.0], [51.1, 768.0], [51.2, 770.0], [51.3, 772.0], [51.4, 773.0], [51.5, 774.0], [51.6, 777.0], [51.7, 779.0], [51.8, 779.0], [51.9, 781.0], [52.0, 785.0], [52.1, 787.0], [52.2, 788.0], [52.3, 790.0], [52.4, 791.0], [52.5, 792.0], [52.6, 793.0], [52.7, 796.0], [52.8, 797.0], [52.9, 798.0], [53.0, 799.0], [53.1, 802.0], [53.2, 804.0], [53.3, 805.0], [53.4, 806.0], [53.5, 808.0], [53.6, 809.0], [53.7, 811.0], [53.8, 812.0], [53.9, 814.0], [54.0, 815.0], [54.1, 817.0], [54.2, 818.0], [54.3, 819.0], [54.4, 821.0], [54.5, 824.0], [54.6, 827.0], [54.7, 828.0], [54.8, 829.0], [54.9, 831.0], [55.0, 833.0], [55.1, 835.0], [55.2, 837.0], [55.3, 838.0], [55.4, 839.0], [55.5, 843.0], [55.6, 844.0], [55.7, 846.0], [55.8, 848.0], [55.9, 850.0], [56.0, 852.0], [56.1, 855.0], [56.2, 856.0], [56.3, 859.0], [56.4, 860.0], [56.5, 862.0], [56.6, 864.0], [56.7, 865.0], [56.8, 867.0], [56.9, 868.0], [57.0, 869.0], [57.1, 871.0], [57.2, 872.0], [57.3, 875.0], [57.4, 876.0], [57.5, 877.0], [57.6, 880.0], [57.7, 880.0], [57.8, 883.0], [57.9, 884.0], [58.0, 886.0], [58.1, 887.0], [58.2, 888.0], [58.3, 889.0], [58.4, 892.0], [58.5, 895.0], [58.6, 896.0], [58.7, 898.0], [58.8, 900.0], [58.9, 902.0], [59.0, 904.0], [59.1, 908.0], [59.2, 912.0], [59.3, 914.0], [59.4, 915.0], [59.5, 917.0], [59.6, 919.0], [59.7, 921.0], [59.8, 922.0], [59.9, 925.0], [60.0, 929.0], [60.1, 930.0], [60.2, 933.0], [60.3, 934.0], [60.4, 935.0], [60.5, 937.0], [60.6, 940.0], [60.7, 942.0], [60.8, 945.0], [60.9, 947.0], [61.0, 947.0], [61.1, 951.0], [61.2, 954.0], [61.3, 954.0], [61.4, 956.0], [61.5, 960.0], [61.6, 961.0], [61.7, 963.0], [61.8, 965.0], [61.9, 966.0], [62.0, 967.0], [62.1, 968.0], [62.2, 970.0], [62.3, 971.0], [62.4, 972.0], [62.5, 973.0], [62.6, 975.0], [62.7, 977.0], [62.8, 978.0], [62.9, 978.0], [63.0, 980.0], [63.1, 982.0], [63.2, 983.0], [63.3, 984.0], [63.4, 986.0], [63.5, 988.0], [63.6, 991.0], [63.7, 993.0], [63.8, 995.0], [63.9, 996.0], [64.0, 998.0], [64.1, 1000.0], [64.2, 1002.0], [64.3, 1003.0], [64.4, 1005.0], [64.5, 1008.0], [64.6, 1009.0], [64.7, 1010.0], [64.8, 1012.0], [64.9, 1013.0], [65.0, 1014.0], [65.1, 1016.0], [65.2, 1017.0], [65.3, 1019.0], [65.4, 1020.0], [65.5, 1021.0], [65.6, 1023.0], [65.7, 1024.0], [65.8, 1026.0], [65.9, 1028.0], [66.0, 1030.0], [66.1, 1031.0], [66.2, 1034.0], [66.3, 1037.0], [66.4, 1037.0], [66.5, 1039.0], [66.6, 1041.0], [66.7, 1043.0], [66.8, 1045.0], [66.9, 1046.0], [67.0, 1048.0], [67.1, 1049.0], [67.2, 1051.0], [67.3, 1051.0], [67.4, 1053.0], [67.5, 1054.0], [67.6, 1055.0], [67.7, 1057.0], [67.8, 1060.0], [67.9, 1061.0], [68.0, 1064.0], [68.1, 1066.0], [68.2, 1068.0], [68.3, 1068.0], [68.4, 1069.0], [68.5, 1072.0], [68.6, 1073.0], [68.7, 1075.0], [68.8, 1077.0], [68.9, 1079.0], [69.0, 1081.0], [69.1, 1082.0], [69.2, 1084.0], [69.3, 1085.0], [69.4, 1087.0], [69.5, 1090.0], [69.6, 1091.0], [69.7, 1093.0], [69.8, 1094.0], [69.9, 1096.0], [70.0, 1098.0], [70.1, 1099.0], [70.2, 1101.0], [70.3, 1104.0], [70.4, 1106.0], [70.5, 1108.0], [70.6, 1110.0], [70.7, 1111.0], [70.8, 1112.0], [70.9, 1114.0], [71.0, 1116.0], [71.1, 1119.0], [71.2, 1121.0], [71.3, 1121.0], [71.4, 1124.0], [71.5, 1125.0], [71.6, 1126.0], [71.7, 1128.0], [71.8, 1132.0], [71.9, 1132.0], [72.0, 1133.0], [72.1, 1134.0], [72.2, 1135.0], [72.3, 1138.0], [72.4, 1139.0], [72.5, 1142.0], [72.6, 1144.0], [72.7, 1145.0], [72.8, 1148.0], [72.9, 1149.0], [73.0, 1151.0], [73.1, 1156.0], [73.2, 1160.0], [73.3, 1162.0], [73.4, 1165.0], [73.5, 1168.0], [73.6, 1169.0], [73.7, 1171.0], [73.8, 1173.0], [73.9, 1174.0], [74.0, 1177.0], [74.1, 1180.0], [74.2, 1182.0], [74.3, 1185.0], [74.4, 1188.0], [74.5, 1190.0], [74.6, 1191.0], [74.7, 1193.0], [74.8, 1195.0], [74.9, 1199.0], [75.0, 1200.0], [75.1, 1204.0], [75.2, 1206.0], [75.3, 1208.0], [75.4, 1211.0], [75.5, 1213.0], [75.6, 1216.0], [75.7, 1220.0], [75.8, 1222.0], [75.9, 1224.0], [76.0, 1225.0], [76.1, 1227.0], [76.2, 1229.0], [76.3, 1231.0], [76.4, 1233.0], [76.5, 1235.0], [76.6, 1238.0], [76.7, 1240.0], [76.8, 1243.0], [76.9, 1247.0], [77.0, 1249.0], [77.1, 1252.0], [77.2, 1255.0], [77.3, 1258.0], [77.4, 1261.0], [77.5, 1265.0], [77.6, 1269.0], [77.7, 1271.0], [77.8, 1275.0], [77.9, 1278.0], [78.0, 1281.0], [78.1, 1285.0], [78.2, 1287.0], [78.3, 1290.0], [78.4, 1292.0], [78.5, 1294.0], [78.6, 1297.0], [78.7, 1299.0], [78.8, 1301.0], [78.9, 1305.0], [79.0, 1310.0], [79.1, 1313.0], [79.2, 1314.0], [79.3, 1317.0], [79.4, 1320.0], [79.5, 1323.0], [79.6, 1325.0], [79.7, 1327.0], [79.8, 1330.0], [79.9, 1334.0], [80.0, 1336.0], [80.1, 1339.0], [80.2, 1343.0], [80.3, 1346.0], [80.4, 1349.0], [80.5, 1353.0], [80.6, 1355.0], [80.7, 1357.0], [80.8, 1359.0], [80.9, 1363.0], [81.0, 1366.0], [81.1, 1367.0], [81.2, 1369.0], [81.3, 1370.0], [81.4, 1372.0], [81.5, 1374.0], [81.6, 1374.0], [81.7, 1377.0], [81.8, 1380.0], [81.9, 1382.0], [82.0, 1385.0], [82.1, 1387.0], [82.2, 1389.0], [82.3, 1391.0], [82.4, 1392.0], [82.5, 1395.0], [82.6, 1397.0], [82.7, 1399.0], [82.8, 1400.0], [82.9, 1405.0], [83.0, 1407.0], [83.1, 1409.0], [83.2, 1412.0], [83.3, 1414.0], [83.4, 1415.0], [83.5, 1420.0], [83.6, 1421.0], [83.7, 1424.0], [83.8, 1426.0], [83.9, 1428.0], [84.0, 1429.0], [84.1, 1433.0], [84.2, 1434.0], [84.3, 1438.0], [84.4, 1441.0], [84.5, 1443.0], [84.6, 1445.0], [84.7, 1446.0], [84.8, 1448.0], [84.9, 1452.0], [85.0, 1453.0], [85.1, 1456.0], [85.2, 1459.0], [85.3, 1462.0], [85.4, 1465.0], [85.5, 1467.0], [85.6, 1469.0], [85.7, 1471.0], [85.8, 1472.0], [85.9, 1474.0], [86.0, 1476.0], [86.1, 1478.0], [86.2, 1480.0], [86.3, 1483.0], [86.4, 1485.0], [86.5, 1488.0], [86.6, 1491.0], [86.7, 1494.0], [86.8, 1495.0], [86.9, 1499.0], [87.0, 1501.0], [87.1, 1503.0], [87.2, 1508.0], [87.3, 1511.0], [87.4, 1515.0], [87.5, 1519.0], [87.6, 1523.0], [87.7, 1528.0], [87.8, 1531.0], [87.9, 1534.0], [88.0, 1535.0], [88.1, 1537.0], [88.2, 1541.0], [88.3, 1544.0], [88.4, 1548.0], [88.5, 1555.0], [88.6, 1559.0], [88.7, 1565.0], [88.8, 1567.0], [88.9, 1569.0], [89.0, 1573.0], [89.1, 1578.0], [89.2, 1584.0], [89.3, 1592.0], [89.4, 1596.0], [89.5, 1601.0], [89.6, 1605.0], [89.7, 1610.0], [89.8, 1616.0], [89.9, 1618.0], [90.0, 1627.0], [90.1, 1633.0], [90.2, 1641.0], [90.3, 1648.0], [90.4, 1651.0], [90.5, 1658.0], [90.6, 1667.0], [90.7, 1676.0], [90.8, 1681.0], [90.9, 1688.0], [91.0, 1692.0], [91.1, 1700.0], [91.2, 1704.0], [91.3, 1711.0], [91.4, 1721.0], [91.5, 1724.0], [91.6, 1730.0], [91.7, 1740.0], [91.8, 1752.0], [91.9, 1755.0], [92.0, 1770.0], [92.1, 1777.0], [92.2, 1780.0], [92.3, 1787.0], [92.4, 1798.0], [92.5, 1807.0], [92.6, 1812.0], [92.7, 1818.0], [92.8, 1824.0], [92.9, 1832.0], [93.0, 1838.0], [93.1, 1848.0], [93.2, 1861.0], [93.3, 1867.0], [93.4, 1875.0], [93.5, 1882.0], [93.6, 1890.0], [93.7, 1894.0], [93.8, 1900.0], [93.9, 1908.0], [94.0, 1917.0], [94.1, 1921.0], [94.2, 1929.0], [94.3, 1941.0], [94.4, 1948.0], [94.5, 1956.0], [94.6, 1964.0], [94.7, 1975.0], [94.8, 1989.0], [94.9, 2003.0], [95.0, 2012.0], [95.1, 2025.0], [95.2, 2034.0], [95.3, 2047.0], [95.4, 2059.0], [95.5, 2071.0], [95.6, 2082.0], [95.7, 2089.0], [95.8, 2099.0], [95.9, 2105.0], [96.0, 2110.0], [96.1, 2120.0], [96.2, 2131.0], [96.3, 2145.0], [96.4, 2162.0], [96.5, 2177.0], [96.6, 2192.0], [96.7, 2213.0], [96.8, 2222.0], [96.9, 2236.0], [97.0, 2253.0], [97.1, 2284.0], [97.2, 2304.0], [97.3, 2322.0], [97.4, 2340.0], [97.5, 2364.0], [97.6, 2387.0], [97.7, 2416.0], [97.8, 2441.0], [97.9, 2471.0], [98.0, 2498.0], [98.1, 2525.0], [98.2, 2543.0], [98.3, 2577.0], [98.4, 2624.0], [98.5, 2675.0], [98.6, 2723.0], [98.7, 2749.0], [98.8, 2787.0], [98.9, 2840.0], [99.0, 2901.0], [99.1, 2970.0], [99.2, 3210.0], [99.3, 3330.0], [99.4, 3509.0], [99.5, 3760.0], [99.6, 3891.0], [99.7, 4330.0], [99.8, 4905.0], [99.9, 5399.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 550.0, "series": [{"data": [[600.0, 448.0], [700.0, 357.0], [800.0, 298.0], [900.0, 275.0], [1000.0, 313.0], [1100.0, 251.0], [1200.0, 196.0], [1300.0, 210.0], [1400.0, 215.0], [1500.0, 132.0], [1600.0, 84.0], [1700.0, 70.0], [1800.0, 70.0], [1900.0, 57.0], [2000.0, 49.0], [2100.0, 43.0], [2200.0, 28.0], [2300.0, 26.0], [2400.0, 17.0], [2500.0, 18.0], [2600.0, 10.0], [2800.0, 9.0], [2700.0, 14.0], [2900.0, 7.0], [3000.0, 2.0], [3100.0, 1.0], [3200.0, 5.0], [3300.0, 1.0], [3400.0, 4.0], [3500.0, 3.0], [3600.0, 2.0], [3700.0, 4.0], [3800.0, 3.0], [4100.0, 2.0], [4300.0, 1.0], [4200.0, 2.0], [4400.0, 1.0], [4600.0, 1.0], [4700.0, 1.0], [4800.0, 1.0], [4900.0, 2.0], [5100.0, 2.0], [5300.0, 2.0], [5700.0, 1.0], [5800.0, 2.0], [5900.0, 1.0], [6400.0, 1.0], [100.0, 13.0], [200.0, 525.0], [300.0, 356.0], [400.0, 550.0], [500.0, 504.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 677.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3065.0, "series": [{"data": [[0.0, 1448.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3065.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 677.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.925619834710746, "minX": 1.60374444E12, "maxY": 10.0, "series": [{"data": [[1.60374444E12, 10.0], [1.60374462E12, 10.0], [1.60374456E12, 10.0], [1.60374474E12, 10.0], [1.60374468E12, 10.0], [1.60374486E12, 9.925619834710746], [1.6037445E12, 10.0], [1.6037448E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374486E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 281.0, "minX": 1.0, "maxY": 2525.0, "series": [{"data": [[8.0, 1164.0], [4.0, 1027.0], [2.0, 2525.0], [1.0, 2334.0], [9.0, 735.0], [10.0, 908.5720903300524], [5.0, 827.0], [6.0, 281.0], [3.0, 697.0], [7.0, 1243.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 909.0838150289022]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4341.016666666666, "minX": 1.60374444E12, "maxY": 3342195.85, "series": [{"data": [[1.60374444E12, 3068872.283333333], [1.60374462E12, 3092897.9], [1.60374456E12, 3342195.85], [1.60374474E12, 2768106.05], [1.60374468E12, 3032405.3333333335], [1.60374486E12, 2609311.966666667], [1.6037445E12, 2806376.9166666665], [1.6037448E12, 3252494.6166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60374444E12, 4341.016666666666], [1.60374462E12, 4932.466666666666], [1.60374456E12, 5120.65], [1.60374474E12, 4846.983333333334], [1.60374468E12, 4479.383333333333], [1.60374486E12, 4569.95], [1.6037445E12, 4913.933333333333], [1.6037448E12, 5372.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374486E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 840.1355932203387, "minX": 1.60374444E12, "maxY": 969.8582930756841, "series": [{"data": [[1.60374444E12, 962.0866666666668], [1.60374462E12, 918.56202143951], [1.60374456E12, 882.1199999999997], [1.60374474E12, 902.2284417549167], [1.60374468E12, 969.8582930756841], [1.60374486E12, 913.2595041322313], [1.6037445E12, 899.0224887556213], [1.6037448E12, 840.1355932203387]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374486E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 838.313559322034, "minX": 1.60374444E12, "maxY": 967.8937198067629, "series": [{"data": [[1.60374444E12, 959.7116666666673], [1.60374462E12, 916.5114854517611], [1.60374456E12, 879.6548148148149], [1.60374474E12, 900.4205748865347], [1.60374468E12, 967.8937198067629], [1.60374486E12, 911.8446280991742], [1.6037445E12, 897.0014992503748], [1.6037448E12, 838.313559322034]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374486E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.015313935681470147, "minX": 1.60374444E12, "maxY": 0.1483333333333332, "series": [{"data": [[1.60374444E12, 0.1483333333333332], [1.60374462E12, 0.015313935681470147], [1.60374456E12, 0.03111111111111113], [1.60374474E12, 0.03025718608169444], [1.60374468E12, 0.03220611916264087], [1.60374486E12, 0.024793388429752056], [1.6037445E12, 0.02698650674662669], [1.6037448E12, 0.01694915254237289]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374486E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 195.0, "minX": 1.60374444E12, "maxY": 6439.0, "series": [{"data": [[1.60374444E12, 5735.0], [1.60374462E12, 4993.0], [1.60374456E12, 2765.0], [1.60374474E12, 3788.0], [1.60374468E12, 6439.0], [1.60374486E12, 3891.0], [1.6037445E12, 4905.0], [1.6037448E12, 2675.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60374444E12, 212.81799971342087], [1.60374462E12, 207.65799953222276], [1.60374456E12, 203.08399983882904], [1.60374474E12, 204.9159996843338], [1.60374468E12, 206.79399955511093], [1.60374486E12, 209.81599942207336], [1.6037445E12, 214.0239996814728], [1.6037448E12, 204.1429994928837]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60374444E12, 213.89980011463166], [1.60374462E12, 209.4238001871109], [1.60374456E12, 203.6924000644684], [1.60374474E12, 205.55380006313325], [1.60374468E12, 208.15780005931853], [1.60374486E12, 211.99760023117065], [1.6037445E12, 215.2264001274109], [1.6037448E12, 206.0191000676155]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60374444E12, 213.41899985671043], [1.60374462E12, 208.63899976611137], [1.60374456E12, 203.42199991941453], [1.60374474E12, 205.28899992108344], [1.60374468E12, 207.72699977755548], [1.60374486E12, 211.02799971103667], [1.6037445E12, 214.6919998407364], [1.6037448E12, 205.20649974644184]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60374444E12, 206.0], [1.60374462E12, 197.0], [1.60374456E12, 196.0], [1.60374474E12, 197.0], [1.60374468E12, 198.0], [1.60374486E12, 205.0], [1.6037445E12, 199.0], [1.6037448E12, 195.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60374444E12, 791.5], [1.60374462E12, 752.0], [1.60374456E12, 719.0], [1.60374474E12, 736.0], [1.60374468E12, 831.0], [1.60374486E12, 728.0], [1.6037445E12, 679.0], [1.6037448E12, 716.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374486E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 394.0, "minX": 2.0, "maxY": 2028.5, "series": [{"data": [[2.0, 2028.5], [3.0, 1387.5], [4.0, 1373.5], [5.0, 1380.0], [6.0, 1260.5], [7.0, 1132.0], [8.0, 1005.5], [9.0, 995.0], [10.0, 917.5], [11.0, 836.0], [12.0, 780.5], [13.0, 729.0], [14.0, 690.5], [15.0, 582.5], [16.0, 569.0], [17.0, 529.0], [18.0, 531.0], [19.0, 442.5], [20.0, 429.5], [21.0, 443.0], [22.0, 444.5], [23.0, 421.5], [24.0, 437.0], [25.0, 394.0], [26.0, 400.0], [27.0, 423.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 394.0, "minX": 2.0, "maxY": 2023.5, "series": [{"data": [[2.0, 2023.5], [3.0, 1384.0], [4.0, 1372.0], [5.0, 1378.0], [6.0, 1258.5], [7.0, 1123.0], [8.0, 1003.5], [9.0, 991.5], [10.0, 915.0], [11.0, 836.0], [12.0, 777.5], [13.0, 727.0], [14.0, 688.5], [15.0, 581.0], [16.0, 569.0], [17.0, 529.0], [18.0, 531.0], [19.0, 442.5], [20.0, 429.0], [21.0, 443.0], [22.0, 443.0], [23.0, 421.5], [24.0, 437.0], [25.0, 394.0], [26.0, 399.5], [27.0, 422.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.916666666666666, "minX": 1.60374444E12, "maxY": 11.8, "series": [{"data": [[1.60374444E12, 10.166666666666666], [1.60374462E12, 10.883333333333333], [1.60374456E12, 11.25], [1.60374474E12, 11.016666666666667], [1.60374468E12, 10.35], [1.60374486E12, 9.916666666666666], [1.6037445E12, 11.116666666666667], [1.6037448E12, 11.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374486E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.60374444E12, "maxY": 11.8, "series": [{"data": [[1.60374444E12, 10.0], [1.60374462E12, 10.883333333333333], [1.60374456E12, 11.25], [1.60374474E12, 11.016666666666667], [1.60374468E12, 10.35], [1.60374486E12, 10.083333333333334], [1.6037445E12, 11.116666666666667], [1.6037448E12, 11.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374486E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.60374444E12, "maxY": 11.8, "series": [{"data": [[1.60374444E12, 10.0], [1.60374462E12, 10.883333333333333], [1.60374456E12, 11.25], [1.60374474E12, 11.016666666666667], [1.60374468E12, 10.35], [1.60374486E12, 10.083333333333334], [1.6037445E12, 11.116666666666667], [1.6037448E12, 11.8]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374486E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.60374444E12, "maxY": 11.8, "series": [{"data": [[1.60374444E12, 10.0], [1.60374462E12, 10.883333333333333], [1.60374456E12, 11.25], [1.60374474E12, 11.016666666666667], [1.60374468E12, 10.35], [1.60374486E12, 10.083333333333334], [1.6037445E12, 11.116666666666667], [1.6037448E12, 11.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374486E12, "title": "Total Transactions Per Second"}},
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

