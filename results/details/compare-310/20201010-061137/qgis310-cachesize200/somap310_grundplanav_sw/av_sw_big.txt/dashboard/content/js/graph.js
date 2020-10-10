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
        data: {"result": {"minY": 181.0, "minX": 0.0, "maxY": 8748.0, "series": [{"data": [[0.0, 181.0], [0.1, 187.0], [0.2, 188.0], [0.3, 191.0], [0.4, 193.0], [0.5, 194.0], [0.6, 197.0], [0.7, 198.0], [0.8, 199.0], [0.9, 200.0], [1.0, 201.0], [1.1, 202.0], [1.2, 203.0], [1.3, 204.0], [1.4, 204.0], [1.5, 205.0], [1.6, 205.0], [1.7, 207.0], [1.8, 208.0], [1.9, 208.0], [2.0, 209.0], [2.1, 210.0], [2.2, 211.0], [2.3, 212.0], [2.4, 212.0], [2.5, 213.0], [2.6, 213.0], [2.7, 214.0], [2.8, 215.0], [2.9, 216.0], [3.0, 217.0], [3.1, 218.0], [3.2, 219.0], [3.3, 219.0], [3.4, 220.0], [3.5, 220.0], [3.6, 221.0], [3.7, 222.0], [3.8, 224.0], [3.9, 225.0], [4.0, 226.0], [4.1, 227.0], [4.2, 228.0], [4.3, 229.0], [4.4, 229.0], [4.5, 230.0], [4.6, 231.0], [4.7, 231.0], [4.8, 233.0], [4.9, 233.0], [5.0, 234.0], [5.1, 235.0], [5.2, 236.0], [5.3, 236.0], [5.4, 237.0], [5.5, 238.0], [5.6, 239.0], [5.7, 239.0], [5.8, 241.0], [5.9, 242.0], [6.0, 242.0], [6.1, 244.0], [6.2, 245.0], [6.3, 246.0], [6.4, 247.0], [6.5, 248.0], [6.6, 249.0], [6.7, 250.0], [6.8, 251.0], [6.9, 254.0], [7.0, 255.0], [7.1, 257.0], [7.2, 259.0], [7.3, 260.0], [7.4, 262.0], [7.5, 264.0], [7.6, 264.0], [7.7, 265.0], [7.8, 266.0], [7.9, 267.0], [8.0, 268.0], [8.1, 269.0], [8.2, 270.0], [8.3, 271.0], [8.4, 272.0], [8.5, 273.0], [8.6, 275.0], [8.7, 275.0], [8.8, 276.0], [8.9, 277.0], [9.0, 278.0], [9.1, 279.0], [9.2, 280.0], [9.3, 280.0], [9.4, 281.0], [9.5, 281.0], [9.6, 282.0], [9.7, 284.0], [9.8, 285.0], [9.9, 286.0], [10.0, 288.0], [10.1, 289.0], [10.2, 289.0], [10.3, 290.0], [10.4, 290.0], [10.5, 291.0], [10.6, 294.0], [10.7, 294.0], [10.8, 295.0], [10.9, 296.0], [11.0, 297.0], [11.1, 298.0], [11.2, 298.0], [11.3, 299.0], [11.4, 300.0], [11.5, 301.0], [11.6, 302.0], [11.7, 302.0], [11.8, 303.0], [11.9, 304.0], [12.0, 304.0], [12.1, 305.0], [12.2, 306.0], [12.3, 307.0], [12.4, 308.0], [12.5, 309.0], [12.6, 311.0], [12.7, 311.0], [12.8, 312.0], [12.9, 313.0], [13.0, 315.0], [13.1, 316.0], [13.2, 317.0], [13.3, 317.0], [13.4, 319.0], [13.5, 320.0], [13.6, 321.0], [13.7, 322.0], [13.8, 323.0], [13.9, 324.0], [14.0, 325.0], [14.1, 326.0], [14.2, 328.0], [14.3, 330.0], [14.4, 331.0], [14.5, 332.0], [14.6, 333.0], [14.7, 335.0], [14.8, 336.0], [14.9, 337.0], [15.0, 338.0], [15.1, 339.0], [15.2, 340.0], [15.3, 341.0], [15.4, 343.0], [15.5, 344.0], [15.6, 345.0], [15.7, 346.0], [15.8, 347.0], [15.9, 349.0], [16.0, 350.0], [16.1, 354.0], [16.2, 356.0], [16.3, 357.0], [16.4, 359.0], [16.5, 360.0], [16.6, 361.0], [16.7, 364.0], [16.8, 367.0], [16.9, 369.0], [17.0, 371.0], [17.1, 374.0], [17.2, 375.0], [17.3, 378.0], [17.4, 379.0], [17.5, 379.0], [17.6, 381.0], [17.7, 385.0], [17.8, 386.0], [17.9, 387.0], [18.0, 390.0], [18.1, 391.0], [18.2, 392.0], [18.3, 393.0], [18.4, 394.0], [18.5, 395.0], [18.6, 396.0], [18.7, 397.0], [18.8, 398.0], [18.9, 399.0], [19.0, 400.0], [19.1, 401.0], [19.2, 403.0], [19.3, 404.0], [19.4, 405.0], [19.5, 406.0], [19.6, 407.0], [19.7, 408.0], [19.8, 410.0], [19.9, 411.0], [20.0, 411.0], [20.1, 412.0], [20.2, 413.0], [20.3, 413.0], [20.4, 416.0], [20.5, 417.0], [20.6, 418.0], [20.7, 419.0], [20.8, 420.0], [20.9, 421.0], [21.0, 422.0], [21.1, 423.0], [21.2, 423.0], [21.3, 424.0], [21.4, 424.0], [21.5, 425.0], [21.6, 426.0], [21.7, 427.0], [21.8, 428.0], [21.9, 429.0], [22.0, 430.0], [22.1, 431.0], [22.2, 433.0], [22.3, 433.0], [22.4, 434.0], [22.5, 435.0], [22.6, 436.0], [22.7, 436.0], [22.8, 437.0], [22.9, 438.0], [23.0, 438.0], [23.1, 439.0], [23.2, 440.0], [23.3, 442.0], [23.4, 443.0], [23.5, 444.0], [23.6, 445.0], [23.7, 445.0], [23.8, 446.0], [23.9, 446.0], [24.0, 447.0], [24.1, 449.0], [24.2, 449.0], [24.3, 450.0], [24.4, 451.0], [24.5, 452.0], [24.6, 453.0], [24.7, 454.0], [24.8, 455.0], [24.9, 456.0], [25.0, 457.0], [25.1, 459.0], [25.2, 460.0], [25.3, 460.0], [25.4, 461.0], [25.5, 462.0], [25.6, 463.0], [25.7, 463.0], [25.8, 464.0], [25.9, 465.0], [26.0, 465.0], [26.1, 467.0], [26.2, 468.0], [26.3, 468.0], [26.4, 469.0], [26.5, 470.0], [26.6, 471.0], [26.7, 472.0], [26.8, 472.0], [26.9, 473.0], [27.0, 474.0], [27.1, 474.0], [27.2, 475.0], [27.3, 476.0], [27.4, 476.0], [27.5, 477.0], [27.6, 478.0], [27.7, 479.0], [27.8, 480.0], [27.9, 480.0], [28.0, 481.0], [28.1, 482.0], [28.2, 483.0], [28.3, 484.0], [28.4, 484.0], [28.5, 484.0], [28.6, 485.0], [28.7, 486.0], [28.8, 488.0], [28.9, 489.0], [29.0, 489.0], [29.1, 490.0], [29.2, 491.0], [29.3, 492.0], [29.4, 493.0], [29.5, 494.0], [29.6, 494.0], [29.7, 495.0], [29.8, 496.0], [29.9, 497.0], [30.0, 499.0], [30.1, 501.0], [30.2, 502.0], [30.3, 502.0], [30.4, 504.0], [30.5, 505.0], [30.6, 506.0], [30.7, 506.0], [30.8, 507.0], [30.9, 508.0], [31.0, 509.0], [31.1, 510.0], [31.2, 511.0], [31.3, 512.0], [31.4, 513.0], [31.5, 515.0], [31.6, 515.0], [31.7, 517.0], [31.8, 518.0], [31.9, 519.0], [32.0, 521.0], [32.1, 521.0], [32.2, 522.0], [32.3, 523.0], [32.4, 524.0], [32.5, 527.0], [32.6, 528.0], [32.7, 528.0], [32.8, 529.0], [32.9, 530.0], [33.0, 531.0], [33.1, 531.0], [33.2, 532.0], [33.3, 533.0], [33.4, 534.0], [33.5, 534.0], [33.6, 536.0], [33.7, 537.0], [33.8, 538.0], [33.9, 538.0], [34.0, 539.0], [34.1, 540.0], [34.2, 541.0], [34.3, 541.0], [34.4, 542.0], [34.5, 544.0], [34.6, 546.0], [34.7, 546.0], [34.8, 547.0], [34.9, 548.0], [35.0, 549.0], [35.1, 550.0], [35.2, 552.0], [35.3, 552.0], [35.4, 553.0], [35.5, 555.0], [35.6, 555.0], [35.7, 556.0], [35.8, 556.0], [35.9, 556.0], [36.0, 556.0], [36.1, 557.0], [36.2, 558.0], [36.3, 559.0], [36.4, 560.0], [36.5, 562.0], [36.6, 562.0], [36.7, 563.0], [36.8, 565.0], [36.9, 565.0], [37.0, 567.0], [37.1, 567.0], [37.2, 569.0], [37.3, 570.0], [37.4, 572.0], [37.5, 573.0], [37.6, 574.0], [37.7, 574.0], [37.8, 576.0], [37.9, 576.0], [38.0, 577.0], [38.1, 579.0], [38.2, 579.0], [38.3, 582.0], [38.4, 583.0], [38.5, 583.0], [38.6, 584.0], [38.7, 585.0], [38.8, 586.0], [38.9, 587.0], [39.0, 588.0], [39.1, 589.0], [39.2, 590.0], [39.3, 591.0], [39.4, 593.0], [39.5, 594.0], [39.6, 595.0], [39.7, 596.0], [39.8, 597.0], [39.9, 598.0], [40.0, 599.0], [40.1, 600.0], [40.2, 601.0], [40.3, 602.0], [40.4, 603.0], [40.5, 604.0], [40.6, 605.0], [40.7, 605.0], [40.8, 607.0], [40.9, 608.0], [41.0, 608.0], [41.1, 609.0], [41.2, 610.0], [41.3, 611.0], [41.4, 612.0], [41.5, 613.0], [41.6, 614.0], [41.7, 615.0], [41.8, 617.0], [41.9, 617.0], [42.0, 618.0], [42.1, 620.0], [42.2, 620.0], [42.3, 621.0], [42.4, 622.0], [42.5, 623.0], [42.6, 624.0], [42.7, 626.0], [42.8, 627.0], [42.9, 629.0], [43.0, 631.0], [43.1, 632.0], [43.2, 633.0], [43.3, 634.0], [43.4, 635.0], [43.5, 636.0], [43.6, 637.0], [43.7, 639.0], [43.8, 640.0], [43.9, 641.0], [44.0, 644.0], [44.1, 645.0], [44.2, 646.0], [44.3, 647.0], [44.4, 648.0], [44.5, 650.0], [44.6, 652.0], [44.7, 654.0], [44.8, 655.0], [44.9, 657.0], [45.0, 657.0], [45.1, 658.0], [45.2, 660.0], [45.3, 660.0], [45.4, 662.0], [45.5, 664.0], [45.6, 665.0], [45.7, 666.0], [45.8, 669.0], [45.9, 671.0], [46.0, 672.0], [46.1, 674.0], [46.2, 674.0], [46.3, 675.0], [46.4, 677.0], [46.5, 678.0], [46.6, 680.0], [46.7, 681.0], [46.8, 683.0], [46.9, 684.0], [47.0, 685.0], [47.1, 686.0], [47.2, 688.0], [47.3, 689.0], [47.4, 690.0], [47.5, 691.0], [47.6, 692.0], [47.7, 693.0], [47.8, 694.0], [47.9, 695.0], [48.0, 697.0], [48.1, 698.0], [48.2, 701.0], [48.3, 703.0], [48.4, 704.0], [48.5, 706.0], [48.6, 707.0], [48.7, 708.0], [48.8, 710.0], [48.9, 711.0], [49.0, 711.0], [49.1, 712.0], [49.2, 713.0], [49.3, 715.0], [49.4, 717.0], [49.5, 718.0], [49.6, 719.0], [49.7, 720.0], [49.8, 721.0], [49.9, 722.0], [50.0, 723.0], [50.1, 726.0], [50.2, 727.0], [50.3, 728.0], [50.4, 729.0], [50.5, 731.0], [50.6, 733.0], [50.7, 734.0], [50.8, 736.0], [50.9, 738.0], [51.0, 740.0], [51.1, 743.0], [51.2, 744.0], [51.3, 745.0], [51.4, 746.0], [51.5, 748.0], [51.6, 749.0], [51.7, 749.0], [51.8, 751.0], [51.9, 754.0], [52.0, 756.0], [52.1, 757.0], [52.2, 758.0], [52.3, 759.0], [52.4, 761.0], [52.5, 762.0], [52.6, 765.0], [52.7, 767.0], [52.8, 768.0], [52.9, 771.0], [53.0, 773.0], [53.1, 774.0], [53.2, 775.0], [53.3, 776.0], [53.4, 777.0], [53.5, 780.0], [53.6, 782.0], [53.7, 783.0], [53.8, 787.0], [53.9, 789.0], [54.0, 792.0], [54.1, 794.0], [54.2, 794.0], [54.3, 796.0], [54.4, 798.0], [54.5, 800.0], [54.6, 801.0], [54.7, 802.0], [54.8, 803.0], [54.9, 805.0], [55.0, 809.0], [55.1, 809.0], [55.2, 810.0], [55.3, 811.0], [55.4, 812.0], [55.5, 813.0], [55.6, 815.0], [55.7, 817.0], [55.8, 818.0], [55.9, 818.0], [56.0, 820.0], [56.1, 822.0], [56.2, 825.0], [56.3, 826.0], [56.4, 828.0], [56.5, 830.0], [56.6, 833.0], [56.7, 833.0], [56.8, 836.0], [56.9, 839.0], [57.0, 842.0], [57.1, 844.0], [57.2, 847.0], [57.3, 848.0], [57.4, 849.0], [57.5, 850.0], [57.6, 852.0], [57.7, 855.0], [57.8, 857.0], [57.9, 860.0], [58.0, 863.0], [58.1, 864.0], [58.2, 866.0], [58.3, 869.0], [58.4, 869.0], [58.5, 870.0], [58.6, 872.0], [58.7, 875.0], [58.8, 876.0], [58.9, 878.0], [59.0, 882.0], [59.1, 884.0], [59.2, 886.0], [59.3, 887.0], [59.4, 891.0], [59.5, 893.0], [59.6, 896.0], [59.7, 900.0], [59.8, 901.0], [59.9, 902.0], [60.0, 903.0], [60.1, 906.0], [60.2, 907.0], [60.3, 910.0], [60.4, 911.0], [60.5, 912.0], [60.6, 912.0], [60.7, 914.0], [60.8, 916.0], [60.9, 918.0], [61.0, 919.0], [61.1, 921.0], [61.2, 922.0], [61.3, 925.0], [61.4, 926.0], [61.5, 930.0], [61.6, 932.0], [61.7, 937.0], [61.8, 939.0], [61.9, 940.0], [62.0, 942.0], [62.1, 943.0], [62.2, 946.0], [62.3, 947.0], [62.4, 949.0], [62.5, 951.0], [62.6, 954.0], [62.7, 955.0], [62.8, 957.0], [62.9, 959.0], [63.0, 960.0], [63.1, 962.0], [63.2, 964.0], [63.3, 965.0], [63.4, 968.0], [63.5, 969.0], [63.6, 970.0], [63.7, 972.0], [63.8, 973.0], [63.9, 974.0], [64.0, 976.0], [64.1, 977.0], [64.2, 980.0], [64.3, 981.0], [64.4, 984.0], [64.5, 985.0], [64.6, 986.0], [64.7, 987.0], [64.8, 989.0], [64.9, 991.0], [65.0, 994.0], [65.1, 995.0], [65.2, 996.0], [65.3, 998.0], [65.4, 999.0], [65.5, 1002.0], [65.6, 1004.0], [65.7, 1006.0], [65.8, 1008.0], [65.9, 1009.0], [66.0, 1012.0], [66.1, 1014.0], [66.2, 1016.0], [66.3, 1018.0], [66.4, 1020.0], [66.5, 1023.0], [66.6, 1024.0], [66.7, 1026.0], [66.8, 1028.0], [66.9, 1030.0], [67.0, 1031.0], [67.1, 1033.0], [67.2, 1035.0], [67.3, 1035.0], [67.4, 1036.0], [67.5, 1037.0], [67.6, 1039.0], [67.7, 1041.0], [67.8, 1046.0], [67.9, 1048.0], [68.0, 1051.0], [68.1, 1053.0], [68.2, 1055.0], [68.3, 1057.0], [68.4, 1059.0], [68.5, 1061.0], [68.6, 1063.0], [68.7, 1064.0], [68.8, 1066.0], [68.9, 1067.0], [69.0, 1070.0], [69.1, 1072.0], [69.2, 1074.0], [69.3, 1076.0], [69.4, 1077.0], [69.5, 1078.0], [69.6, 1080.0], [69.7, 1082.0], [69.8, 1083.0], [69.9, 1084.0], [70.0, 1086.0], [70.1, 1087.0], [70.2, 1092.0], [70.3, 1093.0], [70.4, 1097.0], [70.5, 1098.0], [70.6, 1098.0], [70.7, 1100.0], [70.8, 1102.0], [70.9, 1104.0], [71.0, 1105.0], [71.1, 1108.0], [71.2, 1111.0], [71.3, 1113.0], [71.4, 1116.0], [71.5, 1117.0], [71.6, 1119.0], [71.7, 1121.0], [71.8, 1123.0], [71.9, 1127.0], [72.0, 1128.0], [72.1, 1131.0], [72.2, 1133.0], [72.3, 1135.0], [72.4, 1137.0], [72.5, 1139.0], [72.6, 1140.0], [72.7, 1143.0], [72.8, 1145.0], [72.9, 1147.0], [73.0, 1151.0], [73.1, 1153.0], [73.2, 1156.0], [73.3, 1157.0], [73.4, 1158.0], [73.5, 1162.0], [73.6, 1164.0], [73.7, 1168.0], [73.8, 1170.0], [73.9, 1171.0], [74.0, 1173.0], [74.1, 1176.0], [74.2, 1178.0], [74.3, 1180.0], [74.4, 1181.0], [74.5, 1185.0], [74.6, 1189.0], [74.7, 1190.0], [74.8, 1191.0], [74.9, 1193.0], [75.0, 1197.0], [75.1, 1199.0], [75.2, 1200.0], [75.3, 1202.0], [75.4, 1204.0], [75.5, 1208.0], [75.6, 1210.0], [75.7, 1211.0], [75.8, 1213.0], [75.9, 1216.0], [76.0, 1218.0], [76.1, 1220.0], [76.2, 1221.0], [76.3, 1225.0], [76.4, 1228.0], [76.5, 1230.0], [76.6, 1231.0], [76.7, 1234.0], [76.8, 1236.0], [76.9, 1239.0], [77.0, 1242.0], [77.1, 1243.0], [77.2, 1244.0], [77.3, 1247.0], [77.4, 1251.0], [77.5, 1253.0], [77.6, 1259.0], [77.7, 1262.0], [77.8, 1264.0], [77.9, 1267.0], [78.0, 1271.0], [78.1, 1274.0], [78.2, 1276.0], [78.3, 1281.0], [78.4, 1282.0], [78.5, 1284.0], [78.6, 1287.0], [78.7, 1289.0], [78.8, 1292.0], [78.9, 1294.0], [79.0, 1296.0], [79.1, 1299.0], [79.2, 1302.0], [79.3, 1304.0], [79.4, 1308.0], [79.5, 1310.0], [79.6, 1314.0], [79.7, 1317.0], [79.8, 1319.0], [79.9, 1321.0], [80.0, 1323.0], [80.1, 1328.0], [80.2, 1329.0], [80.3, 1333.0], [80.4, 1335.0], [80.5, 1336.0], [80.6, 1337.0], [80.7, 1340.0], [80.8, 1342.0], [80.9, 1343.0], [81.0, 1344.0], [81.1, 1351.0], [81.2, 1353.0], [81.3, 1353.0], [81.4, 1355.0], [81.5, 1357.0], [81.6, 1360.0], [81.7, 1363.0], [81.8, 1364.0], [81.9, 1367.0], [82.0, 1369.0], [82.1, 1370.0], [82.2, 1372.0], [82.3, 1374.0], [82.4, 1377.0], [82.5, 1379.0], [82.6, 1382.0], [82.7, 1384.0], [82.8, 1387.0], [82.9, 1389.0], [83.0, 1390.0], [83.1, 1393.0], [83.2, 1396.0], [83.3, 1398.0], [83.4, 1402.0], [83.5, 1405.0], [83.6, 1408.0], [83.7, 1409.0], [83.8, 1412.0], [83.9, 1414.0], [84.0, 1417.0], [84.1, 1419.0], [84.2, 1421.0], [84.3, 1424.0], [84.4, 1426.0], [84.5, 1429.0], [84.6, 1434.0], [84.7, 1438.0], [84.8, 1439.0], [84.9, 1446.0], [85.0, 1448.0], [85.1, 1449.0], [85.2, 1451.0], [85.3, 1454.0], [85.4, 1462.0], [85.5, 1464.0], [85.6, 1467.0], [85.7, 1470.0], [85.8, 1473.0], [85.9, 1477.0], [86.0, 1480.0], [86.1, 1482.0], [86.2, 1485.0], [86.3, 1488.0], [86.4, 1490.0], [86.5, 1498.0], [86.6, 1500.0], [86.7, 1504.0], [86.8, 1508.0], [86.9, 1509.0], [87.0, 1515.0], [87.1, 1516.0], [87.2, 1520.0], [87.3, 1525.0], [87.4, 1527.0], [87.5, 1533.0], [87.6, 1538.0], [87.7, 1543.0], [87.8, 1549.0], [87.9, 1555.0], [88.0, 1561.0], [88.1, 1568.0], [88.2, 1573.0], [88.3, 1580.0], [88.4, 1584.0], [88.5, 1589.0], [88.6, 1592.0], [88.7, 1595.0], [88.8, 1601.0], [88.9, 1605.0], [89.0, 1606.0], [89.1, 1614.0], [89.2, 1620.0], [89.3, 1628.0], [89.4, 1634.0], [89.5, 1639.0], [89.6, 1643.0], [89.7, 1647.0], [89.8, 1648.0], [89.9, 1651.0], [90.0, 1656.0], [90.1, 1663.0], [90.2, 1667.0], [90.3, 1675.0], [90.4, 1685.0], [90.5, 1691.0], [90.6, 1695.0], [90.7, 1701.0], [90.8, 1706.0], [90.9, 1711.0], [91.0, 1717.0], [91.1, 1726.0], [91.2, 1733.0], [91.3, 1739.0], [91.4, 1744.0], [91.5, 1757.0], [91.6, 1768.0], [91.7, 1785.0], [91.8, 1791.0], [91.9, 1793.0], [92.0, 1801.0], [92.1, 1806.0], [92.2, 1819.0], [92.3, 1824.0], [92.4, 1828.0], [92.5, 1839.0], [92.6, 1844.0], [92.7, 1855.0], [92.8, 1861.0], [92.9, 1869.0], [93.0, 1876.0], [93.1, 1885.0], [93.2, 1893.0], [93.3, 1898.0], [93.4, 1903.0], [93.5, 1908.0], [93.6, 1915.0], [93.7, 1927.0], [93.8, 1942.0], [93.9, 1950.0], [94.0, 1961.0], [94.1, 1977.0], [94.2, 1983.0], [94.3, 1997.0], [94.4, 2008.0], [94.5, 2021.0], [94.6, 2033.0], [94.7, 2042.0], [94.8, 2049.0], [94.9, 2053.0], [95.0, 2066.0], [95.1, 2075.0], [95.2, 2100.0], [95.3, 2112.0], [95.4, 2120.0], [95.5, 2127.0], [95.6, 2141.0], [95.7, 2153.0], [95.8, 2165.0], [95.9, 2174.0], [96.0, 2183.0], [96.1, 2196.0], [96.2, 2212.0], [96.3, 2227.0], [96.4, 2236.0], [96.5, 2246.0], [96.6, 2261.0], [96.7, 2273.0], [96.8, 2281.0], [96.9, 2304.0], [97.0, 2311.0], [97.1, 2330.0], [97.2, 2359.0], [97.3, 2372.0], [97.4, 2397.0], [97.5, 2406.0], [97.6, 2413.0], [97.7, 2426.0], [97.8, 2440.0], [97.9, 2469.0], [98.0, 2489.0], [98.1, 2527.0], [98.2, 2570.0], [98.3, 2625.0], [98.4, 2645.0], [98.5, 2718.0], [98.6, 2795.0], [98.7, 2880.0], [98.8, 2916.0], [98.9, 3015.0], [99.0, 3085.0], [99.1, 3182.0], [99.2, 3229.0], [99.3, 3317.0], [99.4, 3467.0], [99.5, 3709.0], [99.6, 3909.0], [99.7, 4220.0], [99.8, 4661.0], [99.9, 5318.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 575.0, "series": [{"data": [[600.0, 421.0], [700.0, 327.0], [800.0, 271.0], [900.0, 299.0], [1000.0, 272.0], [1100.0, 231.0], [1200.0, 207.0], [1300.0, 218.0], [1400.0, 170.0], [1500.0, 113.0], [1600.0, 100.0], [1700.0, 67.0], [1800.0, 69.0], [1900.0, 53.0], [2000.0, 44.0], [2100.0, 48.0], [2300.0, 28.0], [2200.0, 40.0], [2400.0, 32.0], [2500.0, 11.0], [2600.0, 13.0], [2800.0, 8.0], [2700.0, 6.0], [2900.0, 5.0], [3000.0, 8.0], [3100.0, 7.0], [3300.0, 3.0], [3200.0, 6.0], [3400.0, 4.0], [3500.0, 1.0], [3700.0, 5.0], [3600.0, 3.0], [3800.0, 1.0], [3900.0, 3.0], [4000.0, 1.0], [4100.0, 1.0], [4300.0, 2.0], [4200.0, 1.0], [4500.0, 1.0], [4400.0, 1.0], [4600.0, 1.0], [4800.0, 1.0], [4700.0, 1.0], [4900.0, 1.0], [5100.0, 1.0], [5300.0, 1.0], [5600.0, 2.0], [5800.0, 1.0], [6400.0, 1.0], [8700.0, 1.0], [100.0, 45.0], [200.0, 544.0], [300.0, 394.0], [400.0, 575.0], [500.0, 521.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2936.0, "series": [{"data": [[0.0, 1559.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2936.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 695.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.919786096256685, "minX": 1.60231344E12, "maxY": 10.0, "series": [{"data": [[1.60231362E12, 10.0], [1.60231344E12, 10.0], [1.6023135E12, 10.0], [1.6023138E12, 10.0], [1.60231386E12, 9.919786096256685], [1.60231368E12, 10.0], [1.60231374E12, 10.0], [1.60231356E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231386E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 346.0, "minX": 1.0, "maxY": 3172.0, "series": [{"data": [[8.0, 1171.0], [4.0, 629.0], [2.0, 1205.0], [1.0, 3172.0], [9.0, 899.0], [10.0, 897.7180625241209], [5.0, 2075.0], [6.0, 346.0], [3.0, 1613.0], [7.0, 1221.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 898.5370834135994]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4231.066666666667, "minX": 1.60231344E12, "maxY": 3468305.1166666667, "series": [{"data": [[1.60231362E12, 3095179.966666667], [1.60231344E12, 3092898.3], [1.6023135E12, 2854012.1333333333], [1.6023138E12, 2982941.3333333335], [1.60231386E12, 2357697.716666667], [1.60231368E12, 3038121.183333333], [1.60231374E12, 3083250.7], [1.60231356E12, 3468305.1166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231362E12, 5012.95], [1.60231344E12, 4440.516666666666], [1.6023135E12, 4905.933333333333], [1.6023138E12, 5249.016666666666], [1.60231386E12, 4231.066666666667], [1.60231368E12, 4483.716666666666], [1.60231374E12, 5009.833333333333], [1.60231356E12, 5251.016666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231386E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 863.9450072358892, "minX": 1.60231344E12, "maxY": 962.749598715891, "series": [{"data": [[1.60231362E12, 899.5527108433736], [1.60231344E12, 947.0456769983691], [1.6023135E12, 897.3123123123124], [1.6023138E12, 863.9450072358892], [1.60231386E12, 876.9964349376116], [1.60231368E12, 962.749598715891], [1.60231374E12, 882.2481644640236], [1.60231356E12, 865.9956647398844]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231386E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 862.558610709117, "minX": 1.60231344E12, "maxY": 961.0481540930974, "series": [{"data": [[1.60231362E12, 897.7319277108431], [1.60231344E12, 945.0228384991844], [1.6023135E12, 895.5990990990994], [1.6023138E12, 862.558610709117], [1.60231386E12, 875.5365418894838], [1.60231368E12, 961.0481540930974], [1.60231374E12, 880.6534508076367], [1.60231356E12, 864.1213872832367]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231386E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005347593582887699, "minX": 1.60231344E12, "maxY": 0.2512234910277327, "series": [{"data": [[1.60231362E12, 0.015060240963855427], [1.60231344E12, 0.2512234910277327], [1.6023135E12, 0.016516516516516547], [1.6023138E12, 0.014471780028943556], [1.60231386E12, 0.005347593582887699], [1.60231368E12, 0.016051364365971117], [1.60231374E12, 0.013215859030837], [1.60231356E12, 0.015895953757225457]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231386E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.60231344E12, "maxY": 8748.0, "series": [{"data": [[1.60231362E12, 5318.0], [1.60231344E12, 5626.0], [1.6023135E12, 3964.0], [1.6023138E12, 2505.0], [1.60231386E12, 4220.0], [1.60231368E12, 8748.0], [1.60231374E12, 3909.0], [1.60231356E12, 3085.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231362E12, 190.93999936580659], [1.60231344E12, 201.0], [1.6023135E12, 201.0029998409748], [1.6023138E12, 204.0], [1.60231386E12, 199.17399959802628], [1.60231368E12, 208.6159998512268], [1.60231374E12, 198.13799983739852], [1.60231356E12, 191.4559996700287]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231362E12, 191.58350006341934], [1.60231344E12, 201.0786000585556], [1.6023135E12, 201.60330006361008], [1.6023138E12, 204.0], [1.60231386E12, 200.6914001607895], [1.60231368E12, 209.7104002380371], [1.60231374E12, 198.75180006504058], [1.60231356E12, 192.70160013198853]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231362E12, 191.31749992072582], [1.60231344E12, 201.0], [1.6023135E12, 201.3364999204874], [1.6023138E12, 204.0], [1.60231386E12, 200.01699979901315], [1.60231368E12, 208.9279999256134], [1.60231374E12, 198.47899991869926], [1.60231356E12, 192.14799983501433]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231362E12, 184.0], [1.60231344E12, 196.0], [1.6023135E12, 196.0], [1.6023138E12, 199.0], [1.60231386E12, 187.0], [1.60231368E12, 199.0], [1.60231374E12, 187.0], [1.60231356E12, 181.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231362E12, 725.5], [1.60231344E12, 783.0], [1.6023135E12, 645.0], [1.6023138E12, 722.0], [1.60231386E12, 693.0], [1.60231368E12, 812.0], [1.60231374E12, 672.0], [1.60231356E12, 706.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231386E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 191.0, "minX": 1.0, "maxY": 3172.0, "series": [{"data": [[2.0, 1795.0], [3.0, 2301.0], [4.0, 1077.5], [5.0, 1092.5], [6.0, 1233.0], [7.0, 1064.0], [8.0, 1074.0], [9.0, 994.5], [10.0, 909.0], [11.0, 822.0], [12.0, 771.0], [13.0, 727.5], [14.0, 657.5], [15.0, 611.0], [16.0, 492.5], [1.0, 3172.0], [17.0, 553.0], [18.0, 555.0], [19.0, 487.5], [20.0, 476.0], [21.0, 456.0], [22.0, 432.5], [23.0, 425.5], [24.0, 427.5], [25.0, 439.0], [26.0, 418.0], [27.0, 424.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10.0, 191.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 191.0, "minX": 1.0, "maxY": 3163.0, "series": [{"data": [[2.0, 1790.5], [3.0, 2291.0], [4.0, 1074.5], [5.0, 1087.5], [6.0, 1229.5], [7.0, 1058.0], [8.0, 1071.5], [9.0, 994.5], [10.0, 908.0], [11.0, 822.0], [12.0, 769.0], [13.0, 727.0], [14.0, 656.5], [15.0, 611.0], [16.0, 492.0], [1.0, 3163.0], [17.0, 553.0], [18.0, 554.5], [19.0, 487.5], [20.0, 476.0], [21.0, 456.0], [22.0, 432.0], [23.0, 425.5], [24.0, 427.0], [25.0, 439.0], [26.0, 417.5], [27.0, 424.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10.0, 191.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.183333333333334, "minX": 1.60231344E12, "maxY": 11.533333333333333, "series": [{"data": [[1.60231362E12, 11.066666666666666], [1.60231344E12, 10.383333333333333], [1.6023135E12, 11.1], [1.6023138E12, 11.516666666666667], [1.60231386E12, 9.183333333333334], [1.60231368E12, 10.383333333333333], [1.60231374E12, 11.35], [1.60231356E12, 11.533333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231386E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231344E12, "maxY": 11.516666666666667, "series": [{"data": [[1.60231362E12, 11.066666666666666], [1.60231344E12, 10.216666666666667], [1.6023135E12, 11.1], [1.6023138E12, 11.516666666666667], [1.60231386E12, 9.35], [1.60231368E12, 10.383333333333333], [1.60231374E12, 11.35], [1.60231356E12, 11.516666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60231356E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231386E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231344E12, "maxY": 11.516666666666667, "series": [{"data": [[1.60231362E12, 11.066666666666666], [1.60231344E12, 10.216666666666667], [1.6023135E12, 11.1], [1.6023138E12, 11.516666666666667], [1.60231386E12, 9.35], [1.60231368E12, 10.383333333333333], [1.60231374E12, 11.35], [1.60231356E12, 11.516666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60231356E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231386E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231344E12, "maxY": 11.516666666666667, "series": [{"data": [[1.60231362E12, 11.066666666666666], [1.60231344E12, 10.216666666666667], [1.6023135E12, 11.1], [1.6023138E12, 11.516666666666667], [1.60231386E12, 9.35], [1.60231368E12, 10.383333333333333], [1.60231374E12, 11.35], [1.60231356E12, 11.516666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60231356E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231386E12, "title": "Total Transactions Per Second"}},
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

