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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 5889.0, "series": [{"data": [[0.0, 179.0], [0.1, 188.0], [0.2, 191.0], [0.3, 192.0], [0.4, 195.0], [0.5, 197.0], [0.6, 198.0], [0.7, 200.0], [0.8, 200.0], [0.9, 201.0], [1.0, 202.0], [1.1, 204.0], [1.2, 205.0], [1.3, 207.0], [1.4, 208.0], [1.5, 209.0], [1.6, 210.0], [1.7, 211.0], [1.8, 212.0], [1.9, 213.0], [2.0, 214.0], [2.1, 215.0], [2.2, 216.0], [2.3, 218.0], [2.4, 219.0], [2.5, 219.0], [2.6, 220.0], [2.7, 221.0], [2.8, 222.0], [2.9, 223.0], [3.0, 223.0], [3.1, 225.0], [3.2, 226.0], [3.3, 226.0], [3.4, 227.0], [3.5, 227.0], [3.6, 228.0], [3.7, 228.0], [3.8, 229.0], [3.9, 230.0], [4.0, 231.0], [4.1, 232.0], [4.2, 232.0], [4.3, 233.0], [4.4, 234.0], [4.5, 235.0], [4.6, 235.0], [4.7, 236.0], [4.8, 237.0], [4.9, 238.0], [5.0, 239.0], [5.1, 239.0], [5.2, 240.0], [5.3, 241.0], [5.4, 242.0], [5.5, 243.0], [5.6, 243.0], [5.7, 245.0], [5.8, 245.0], [5.9, 246.0], [6.0, 248.0], [6.1, 249.0], [6.2, 249.0], [6.3, 250.0], [6.4, 252.0], [6.5, 253.0], [6.6, 254.0], [6.7, 255.0], [6.8, 256.0], [6.9, 257.0], [7.0, 258.0], [7.1, 259.0], [7.2, 260.0], [7.3, 261.0], [7.4, 264.0], [7.5, 265.0], [7.6, 267.0], [7.7, 268.0], [7.8, 269.0], [7.9, 270.0], [8.0, 271.0], [8.1, 272.0], [8.2, 273.0], [8.3, 274.0], [8.4, 274.0], [8.5, 275.0], [8.6, 276.0], [8.7, 276.0], [8.8, 277.0], [8.9, 278.0], [9.0, 279.0], [9.1, 280.0], [9.2, 281.0], [9.3, 282.0], [9.4, 282.0], [9.5, 284.0], [9.6, 285.0], [9.7, 285.0], [9.8, 287.0], [9.9, 287.0], [10.0, 288.0], [10.1, 290.0], [10.2, 291.0], [10.3, 292.0], [10.4, 293.0], [10.5, 294.0], [10.6, 296.0], [10.7, 297.0], [10.8, 299.0], [10.9, 300.0], [11.0, 300.0], [11.1, 301.0], [11.2, 301.0], [11.3, 302.0], [11.4, 303.0], [11.5, 305.0], [11.6, 306.0], [11.7, 307.0], [11.8, 308.0], [11.9, 309.0], [12.0, 310.0], [12.1, 311.0], [12.2, 313.0], [12.3, 314.0], [12.4, 315.0], [12.5, 317.0], [12.6, 318.0], [12.7, 318.0], [12.8, 320.0], [12.9, 321.0], [13.0, 323.0], [13.1, 323.0], [13.2, 324.0], [13.3, 325.0], [13.4, 327.0], [13.5, 328.0], [13.6, 328.0], [13.7, 330.0], [13.8, 330.0], [13.9, 331.0], [14.0, 332.0], [14.1, 334.0], [14.2, 335.0], [14.3, 337.0], [14.4, 339.0], [14.5, 339.0], [14.6, 340.0], [14.7, 341.0], [14.8, 343.0], [14.9, 344.0], [15.0, 349.0], [15.1, 350.0], [15.2, 351.0], [15.3, 352.0], [15.4, 353.0], [15.5, 355.0], [15.6, 356.0], [15.7, 358.0], [15.8, 360.0], [15.9, 361.0], [16.0, 363.0], [16.1, 368.0], [16.2, 371.0], [16.3, 373.0], [16.4, 375.0], [16.5, 377.0], [16.6, 378.0], [16.7, 380.0], [16.8, 382.0], [16.9, 383.0], [17.0, 386.0], [17.1, 388.0], [17.2, 391.0], [17.3, 391.0], [17.4, 392.0], [17.5, 394.0], [17.6, 395.0], [17.7, 395.0], [17.8, 396.0], [17.9, 396.0], [18.0, 397.0], [18.1, 398.0], [18.2, 398.0], [18.3, 399.0], [18.4, 400.0], [18.5, 400.0], [18.6, 402.0], [18.7, 403.0], [18.8, 404.0], [18.9, 405.0], [19.0, 406.0], [19.1, 407.0], [19.2, 408.0], [19.3, 410.0], [19.4, 411.0], [19.5, 412.0], [19.6, 413.0], [19.7, 414.0], [19.8, 415.0], [19.9, 416.0], [20.0, 416.0], [20.1, 418.0], [20.2, 419.0], [20.3, 420.0], [20.4, 421.0], [20.5, 422.0], [20.6, 423.0], [20.7, 424.0], [20.8, 425.0], [20.9, 426.0], [21.0, 428.0], [21.1, 429.0], [21.2, 430.0], [21.3, 431.0], [21.4, 432.0], [21.5, 433.0], [21.6, 433.0], [21.7, 434.0], [21.8, 435.0], [21.9, 436.0], [22.0, 437.0], [22.1, 438.0], [22.2, 439.0], [22.3, 440.0], [22.4, 441.0], [22.5, 441.0], [22.6, 442.0], [22.7, 443.0], [22.8, 443.0], [22.9, 445.0], [23.0, 446.0], [23.1, 447.0], [23.2, 449.0], [23.3, 449.0], [23.4, 450.0], [23.5, 451.0], [23.6, 451.0], [23.7, 452.0], [23.8, 453.0], [23.9, 454.0], [24.0, 454.0], [24.1, 454.0], [24.2, 455.0], [24.3, 456.0], [24.4, 457.0], [24.5, 457.0], [24.6, 457.0], [24.7, 458.0], [24.8, 459.0], [24.9, 460.0], [25.0, 461.0], [25.1, 463.0], [25.2, 464.0], [25.3, 466.0], [25.4, 466.0], [25.5, 467.0], [25.6, 468.0], [25.7, 468.0], [25.8, 470.0], [25.9, 470.0], [26.0, 471.0], [26.1, 471.0], [26.2, 472.0], [26.3, 473.0], [26.4, 473.0], [26.5, 474.0], [26.6, 474.0], [26.7, 475.0], [26.8, 476.0], [26.9, 477.0], [27.0, 477.0], [27.1, 478.0], [27.2, 479.0], [27.3, 480.0], [27.4, 482.0], [27.5, 482.0], [27.6, 483.0], [27.7, 484.0], [27.8, 485.0], [27.9, 486.0], [28.0, 487.0], [28.1, 487.0], [28.2, 488.0], [28.3, 491.0], [28.4, 492.0], [28.5, 493.0], [28.6, 494.0], [28.7, 494.0], [28.8, 495.0], [28.9, 497.0], [29.0, 498.0], [29.1, 499.0], [29.2, 500.0], [29.3, 500.0], [29.4, 501.0], [29.5, 502.0], [29.6, 504.0], [29.7, 504.0], [29.8, 505.0], [29.9, 506.0], [30.0, 506.0], [30.1, 507.0], [30.2, 507.0], [30.3, 508.0], [30.4, 509.0], [30.5, 509.0], [30.6, 510.0], [30.7, 511.0], [30.8, 512.0], [30.9, 513.0], [31.0, 515.0], [31.1, 516.0], [31.2, 517.0], [31.3, 518.0], [31.4, 519.0], [31.5, 520.0], [31.6, 521.0], [31.7, 521.0], [31.8, 522.0], [31.9, 523.0], [32.0, 525.0], [32.1, 525.0], [32.2, 526.0], [32.3, 527.0], [32.4, 529.0], [32.5, 530.0], [32.6, 532.0], [32.7, 533.0], [32.8, 534.0], [32.9, 535.0], [33.0, 536.0], [33.1, 537.0], [33.2, 539.0], [33.3, 540.0], [33.4, 541.0], [33.5, 542.0], [33.6, 542.0], [33.7, 544.0], [33.8, 544.0], [33.9, 545.0], [34.0, 545.0], [34.1, 546.0], [34.2, 546.0], [34.3, 547.0], [34.4, 547.0], [34.5, 549.0], [34.6, 550.0], [34.7, 550.0], [34.8, 551.0], [34.9, 552.0], [35.0, 553.0], [35.1, 553.0], [35.2, 554.0], [35.3, 555.0], [35.4, 556.0], [35.5, 557.0], [35.6, 558.0], [35.7, 559.0], [35.8, 560.0], [35.9, 561.0], [36.0, 561.0], [36.1, 562.0], [36.2, 562.0], [36.3, 563.0], [36.4, 565.0], [36.5, 566.0], [36.6, 567.0], [36.7, 568.0], [36.8, 569.0], [36.9, 570.0], [37.0, 571.0], [37.1, 573.0], [37.2, 573.0], [37.3, 574.0], [37.4, 575.0], [37.5, 576.0], [37.6, 577.0], [37.7, 578.0], [37.8, 578.0], [37.9, 579.0], [38.0, 580.0], [38.1, 581.0], [38.2, 582.0], [38.3, 582.0], [38.4, 583.0], [38.5, 583.0], [38.6, 585.0], [38.7, 585.0], [38.8, 586.0], [38.9, 587.0], [39.0, 588.0], [39.1, 589.0], [39.2, 589.0], [39.3, 591.0], [39.4, 592.0], [39.5, 593.0], [39.6, 594.0], [39.7, 595.0], [39.8, 596.0], [39.9, 596.0], [40.0, 597.0], [40.1, 599.0], [40.2, 600.0], [40.3, 602.0], [40.4, 602.0], [40.5, 603.0], [40.6, 604.0], [40.7, 605.0], [40.8, 606.0], [40.9, 606.0], [41.0, 607.0], [41.1, 609.0], [41.2, 610.0], [41.3, 610.0], [41.4, 611.0], [41.5, 612.0], [41.6, 613.0], [41.7, 615.0], [41.8, 617.0], [41.9, 617.0], [42.0, 618.0], [42.1, 619.0], [42.2, 621.0], [42.3, 623.0], [42.4, 624.0], [42.5, 624.0], [42.6, 626.0], [42.7, 627.0], [42.8, 628.0], [42.9, 630.0], [43.0, 630.0], [43.1, 631.0], [43.2, 632.0], [43.3, 633.0], [43.4, 635.0], [43.5, 637.0], [43.6, 639.0], [43.7, 640.0], [43.8, 641.0], [43.9, 642.0], [44.0, 643.0], [44.1, 644.0], [44.2, 644.0], [44.3, 645.0], [44.4, 646.0], [44.5, 646.0], [44.6, 647.0], [44.7, 649.0], [44.8, 650.0], [44.9, 652.0], [45.0, 653.0], [45.1, 653.0], [45.2, 654.0], [45.3, 655.0], [45.4, 656.0], [45.5, 658.0], [45.6, 659.0], [45.7, 660.0], [45.8, 661.0], [45.9, 662.0], [46.0, 663.0], [46.1, 664.0], [46.2, 666.0], [46.3, 668.0], [46.4, 668.0], [46.5, 669.0], [46.6, 670.0], [46.7, 671.0], [46.8, 672.0], [46.9, 675.0], [47.0, 675.0], [47.1, 678.0], [47.2, 679.0], [47.3, 681.0], [47.4, 683.0], [47.5, 684.0], [47.6, 685.0], [47.7, 687.0], [47.8, 688.0], [47.9, 690.0], [48.0, 691.0], [48.1, 694.0], [48.2, 696.0], [48.3, 698.0], [48.4, 700.0], [48.5, 702.0], [48.6, 704.0], [48.7, 705.0], [48.8, 706.0], [48.9, 708.0], [49.0, 712.0], [49.1, 715.0], [49.2, 716.0], [49.3, 716.0], [49.4, 717.0], [49.5, 719.0], [49.6, 721.0], [49.7, 722.0], [49.8, 724.0], [49.9, 725.0], [50.0, 727.0], [50.1, 729.0], [50.2, 731.0], [50.3, 733.0], [50.4, 734.0], [50.5, 735.0], [50.6, 737.0], [50.7, 737.0], [50.8, 738.0], [50.9, 740.0], [51.0, 741.0], [51.1, 742.0], [51.2, 744.0], [51.3, 745.0], [51.4, 746.0], [51.5, 747.0], [51.6, 749.0], [51.7, 751.0], [51.8, 753.0], [51.9, 754.0], [52.0, 758.0], [52.1, 760.0], [52.2, 763.0], [52.3, 766.0], [52.4, 769.0], [52.5, 770.0], [52.6, 772.0], [52.7, 774.0], [52.8, 776.0], [52.9, 778.0], [53.0, 779.0], [53.1, 780.0], [53.2, 781.0], [53.3, 783.0], [53.4, 784.0], [53.5, 785.0], [53.6, 786.0], [53.7, 787.0], [53.8, 788.0], [53.9, 789.0], [54.0, 794.0], [54.1, 795.0], [54.2, 796.0], [54.3, 798.0], [54.4, 801.0], [54.5, 803.0], [54.6, 804.0], [54.7, 805.0], [54.8, 808.0], [54.9, 809.0], [55.0, 811.0], [55.1, 814.0], [55.2, 815.0], [55.3, 817.0], [55.4, 819.0], [55.5, 819.0], [55.6, 820.0], [55.7, 821.0], [55.8, 823.0], [55.9, 825.0], [56.0, 828.0], [56.1, 830.0], [56.2, 831.0], [56.3, 834.0], [56.4, 836.0], [56.5, 838.0], [56.6, 841.0], [56.7, 842.0], [56.8, 843.0], [56.9, 844.0], [57.0, 846.0], [57.1, 847.0], [57.2, 848.0], [57.3, 851.0], [57.4, 854.0], [57.5, 855.0], [57.6, 857.0], [57.7, 860.0], [57.8, 863.0], [57.9, 865.0], [58.0, 865.0], [58.1, 867.0], [58.2, 869.0], [58.3, 871.0], [58.4, 872.0], [58.5, 873.0], [58.6, 875.0], [58.7, 876.0], [58.8, 878.0], [58.9, 879.0], [59.0, 881.0], [59.1, 885.0], [59.2, 886.0], [59.3, 887.0], [59.4, 888.0], [59.5, 890.0], [59.6, 891.0], [59.7, 893.0], [59.8, 894.0], [59.9, 895.0], [60.0, 897.0], [60.1, 900.0], [60.2, 901.0], [60.3, 903.0], [60.4, 907.0], [60.5, 909.0], [60.6, 911.0], [60.7, 913.0], [60.8, 916.0], [60.9, 919.0], [61.0, 922.0], [61.1, 923.0], [61.2, 925.0], [61.3, 927.0], [61.4, 929.0], [61.5, 930.0], [61.6, 932.0], [61.7, 934.0], [61.8, 935.0], [61.9, 936.0], [62.0, 937.0], [62.1, 939.0], [62.2, 940.0], [62.3, 942.0], [62.4, 943.0], [62.5, 945.0], [62.6, 947.0], [62.7, 950.0], [62.8, 951.0], [62.9, 952.0], [63.0, 953.0], [63.1, 954.0], [63.2, 955.0], [63.3, 956.0], [63.4, 958.0], [63.5, 961.0], [63.6, 963.0], [63.7, 964.0], [63.8, 966.0], [63.9, 967.0], [64.0, 968.0], [64.1, 969.0], [64.2, 971.0], [64.3, 974.0], [64.4, 975.0], [64.5, 977.0], [64.6, 980.0], [64.7, 982.0], [64.8, 983.0], [64.9, 984.0], [65.0, 986.0], [65.1, 987.0], [65.2, 989.0], [65.3, 990.0], [65.4, 991.0], [65.5, 992.0], [65.6, 993.0], [65.7, 995.0], [65.8, 997.0], [65.9, 998.0], [66.0, 1001.0], [66.1, 1002.0], [66.2, 1004.0], [66.3, 1005.0], [66.4, 1007.0], [66.5, 1009.0], [66.6, 1011.0], [66.7, 1012.0], [66.8, 1013.0], [66.9, 1015.0], [67.0, 1017.0], [67.1, 1017.0], [67.2, 1019.0], [67.3, 1020.0], [67.4, 1023.0], [67.5, 1024.0], [67.6, 1027.0], [67.7, 1029.0], [67.8, 1031.0], [67.9, 1033.0], [68.0, 1034.0], [68.1, 1036.0], [68.2, 1036.0], [68.3, 1038.0], [68.4, 1041.0], [68.5, 1042.0], [68.6, 1044.0], [68.7, 1046.0], [68.8, 1047.0], [68.9, 1048.0], [69.0, 1050.0], [69.1, 1052.0], [69.2, 1053.0], [69.3, 1054.0], [69.4, 1055.0], [69.5, 1057.0], [69.6, 1059.0], [69.7, 1060.0], [69.8, 1063.0], [69.9, 1063.0], [70.0, 1065.0], [70.1, 1068.0], [70.2, 1069.0], [70.3, 1070.0], [70.4, 1072.0], [70.5, 1074.0], [70.6, 1074.0], [70.7, 1077.0], [70.8, 1078.0], [70.9, 1081.0], [71.0, 1084.0], [71.1, 1086.0], [71.2, 1086.0], [71.3, 1090.0], [71.4, 1091.0], [71.5, 1093.0], [71.6, 1095.0], [71.7, 1097.0], [71.8, 1099.0], [71.9, 1100.0], [72.0, 1101.0], [72.1, 1104.0], [72.2, 1108.0], [72.3, 1112.0], [72.4, 1113.0], [72.5, 1114.0], [72.6, 1115.0], [72.7, 1118.0], [72.8, 1119.0], [72.9, 1121.0], [73.0, 1123.0], [73.1, 1125.0], [73.2, 1128.0], [73.3, 1130.0], [73.4, 1130.0], [73.5, 1133.0], [73.6, 1135.0], [73.7, 1137.0], [73.8, 1139.0], [73.9, 1141.0], [74.0, 1143.0], [74.1, 1145.0], [74.2, 1148.0], [74.3, 1150.0], [74.4, 1153.0], [74.5, 1156.0], [74.6, 1158.0], [74.7, 1159.0], [74.8, 1161.0], [74.9, 1163.0], [75.0, 1165.0], [75.1, 1170.0], [75.2, 1172.0], [75.3, 1174.0], [75.4, 1178.0], [75.5, 1181.0], [75.6, 1182.0], [75.7, 1184.0], [75.8, 1185.0], [75.9, 1188.0], [76.0, 1191.0], [76.1, 1196.0], [76.2, 1198.0], [76.3, 1200.0], [76.4, 1202.0], [76.5, 1203.0], [76.6, 1205.0], [76.7, 1210.0], [76.8, 1213.0], [76.9, 1216.0], [77.0, 1219.0], [77.1, 1222.0], [77.2, 1223.0], [77.3, 1226.0], [77.4, 1229.0], [77.5, 1234.0], [77.6, 1236.0], [77.7, 1238.0], [77.8, 1241.0], [77.9, 1244.0], [78.0, 1248.0], [78.1, 1252.0], [78.2, 1254.0], [78.3, 1255.0], [78.4, 1257.0], [78.5, 1261.0], [78.6, 1266.0], [78.7, 1267.0], [78.8, 1268.0], [78.9, 1271.0], [79.0, 1274.0], [79.1, 1277.0], [79.2, 1279.0], [79.3, 1282.0], [79.4, 1283.0], [79.5, 1287.0], [79.6, 1288.0], [79.7, 1289.0], [79.8, 1294.0], [79.9, 1297.0], [80.0, 1299.0], [80.1, 1301.0], [80.2, 1302.0], [80.3, 1304.0], [80.4, 1306.0], [80.5, 1308.0], [80.6, 1312.0], [80.7, 1313.0], [80.8, 1316.0], [80.9, 1320.0], [81.0, 1321.0], [81.1, 1325.0], [81.2, 1326.0], [81.3, 1328.0], [81.4, 1334.0], [81.5, 1337.0], [81.6, 1340.0], [81.7, 1342.0], [81.8, 1345.0], [81.9, 1347.0], [82.0, 1350.0], [82.1, 1353.0], [82.2, 1354.0], [82.3, 1361.0], [82.4, 1362.0], [82.5, 1365.0], [82.6, 1368.0], [82.7, 1370.0], [82.8, 1371.0], [82.9, 1373.0], [83.0, 1375.0], [83.1, 1378.0], [83.2, 1382.0], [83.3, 1383.0], [83.4, 1387.0], [83.5, 1389.0], [83.6, 1390.0], [83.7, 1391.0], [83.8, 1392.0], [83.9, 1395.0], [84.0, 1397.0], [84.1, 1398.0], [84.2, 1400.0], [84.3, 1404.0], [84.4, 1405.0], [84.5, 1407.0], [84.6, 1408.0], [84.7, 1409.0], [84.8, 1411.0], [84.9, 1413.0], [85.0, 1415.0], [85.1, 1416.0], [85.2, 1417.0], [85.3, 1419.0], [85.4, 1420.0], [85.5, 1424.0], [85.6, 1428.0], [85.7, 1431.0], [85.8, 1435.0], [85.9, 1437.0], [86.0, 1438.0], [86.1, 1441.0], [86.2, 1444.0], [86.3, 1447.0], [86.4, 1449.0], [86.5, 1451.0], [86.6, 1454.0], [86.7, 1456.0], [86.8, 1460.0], [86.9, 1463.0], [87.0, 1464.0], [87.1, 1467.0], [87.2, 1471.0], [87.3, 1474.0], [87.4, 1477.0], [87.5, 1485.0], [87.6, 1488.0], [87.7, 1493.0], [87.8, 1496.0], [87.9, 1502.0], [88.0, 1505.0], [88.1, 1510.0], [88.2, 1512.0], [88.3, 1517.0], [88.4, 1520.0], [88.5, 1526.0], [88.6, 1530.0], [88.7, 1533.0], [88.8, 1537.0], [88.9, 1540.0], [89.0, 1545.0], [89.1, 1547.0], [89.2, 1553.0], [89.3, 1557.0], [89.4, 1561.0], [89.5, 1568.0], [89.6, 1571.0], [89.7, 1575.0], [89.8, 1578.0], [89.9, 1580.0], [90.0, 1584.0], [90.1, 1587.0], [90.2, 1592.0], [90.3, 1595.0], [90.4, 1601.0], [90.5, 1604.0], [90.6, 1612.0], [90.7, 1614.0], [90.8, 1618.0], [90.9, 1623.0], [91.0, 1629.0], [91.1, 1635.0], [91.2, 1638.0], [91.3, 1644.0], [91.4, 1650.0], [91.5, 1657.0], [91.6, 1662.0], [91.7, 1670.0], [91.8, 1672.0], [91.9, 1677.0], [92.0, 1690.0], [92.1, 1696.0], [92.2, 1704.0], [92.3, 1708.0], [92.4, 1712.0], [92.5, 1722.0], [92.6, 1725.0], [92.7, 1736.0], [92.8, 1747.0], [92.9, 1752.0], [93.0, 1762.0], [93.1, 1774.0], [93.2, 1781.0], [93.3, 1789.0], [93.4, 1797.0], [93.5, 1808.0], [93.6, 1822.0], [93.7, 1828.0], [93.8, 1832.0], [93.9, 1844.0], [94.0, 1855.0], [94.1, 1862.0], [94.2, 1867.0], [94.3, 1873.0], [94.4, 1883.0], [94.5, 1890.0], [94.6, 1898.0], [94.7, 1905.0], [94.8, 1917.0], [94.9, 1930.0], [95.0, 1937.0], [95.1, 1950.0], [95.2, 1953.0], [95.3, 1971.0], [95.4, 1992.0], [95.5, 2008.0], [95.6, 2021.0], [95.7, 2037.0], [95.8, 2048.0], [95.9, 2061.0], [96.0, 2079.0], [96.1, 2095.0], [96.2, 2102.0], [96.3, 2119.0], [96.4, 2136.0], [96.5, 2152.0], [96.6, 2174.0], [96.7, 2192.0], [96.8, 2212.0], [96.9, 2228.0], [97.0, 2251.0], [97.1, 2263.0], [97.2, 2266.0], [97.3, 2272.0], [97.4, 2282.0], [97.5, 2291.0], [97.6, 2317.0], [97.7, 2365.0], [97.8, 2387.0], [97.9, 2415.0], [98.0, 2439.0], [98.1, 2454.0], [98.2, 2529.0], [98.3, 2547.0], [98.4, 2621.0], [98.5, 2655.0], [98.6, 2687.0], [98.7, 2738.0], [98.8, 2828.0], [98.9, 2869.0], [99.0, 2920.0], [99.1, 2958.0], [99.2, 3064.0], [99.3, 3139.0], [99.4, 3287.0], [99.5, 3439.0], [99.6, 3651.0], [99.7, 4088.0], [99.8, 4373.0], [99.9, 5079.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 567.0, "series": [{"data": [[600.0, 429.0], [700.0, 311.0], [800.0, 297.0], [900.0, 306.0], [1000.0, 306.0], [1100.0, 228.0], [1200.0, 195.0], [1300.0, 215.0], [1400.0, 191.0], [1500.0, 130.0], [1600.0, 95.0], [1700.0, 65.0], [1800.0, 60.0], [1900.0, 43.0], [2000.0, 37.0], [2100.0, 31.0], [2300.0, 17.0], [2200.0, 42.0], [2400.0, 12.0], [2500.0, 14.0], [2600.0, 14.0], [2800.0, 12.0], [2700.0, 4.0], [2900.0, 10.0], [3000.0, 4.0], [3100.0, 5.0], [3200.0, 6.0], [3300.0, 2.0], [3400.0, 3.0], [3500.0, 1.0], [3700.0, 2.0], [3600.0, 3.0], [3800.0, 1.0], [4000.0, 2.0], [4300.0, 4.0], [4100.0, 1.0], [4200.0, 1.0], [4500.0, 1.0], [4600.0, 2.0], [5000.0, 1.0], [5100.0, 1.0], [5200.0, 1.0], [5500.0, 1.0], [5800.0, 1.0], [5700.0, 1.0], [100.0, 34.0], [200.0, 528.0], [300.0, 390.0], [400.0, 563.0], [500.0, 567.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 630.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3039.0, "series": [{"data": [[0.0, 1521.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3039.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 630.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.413333333333332, "minX": 1.60384164E12, "maxY": 10.0, "series": [{"data": [[1.60384176E12, 10.0], [1.60384194E12, 10.0], [1.60384212E12, 9.413333333333332], [1.60384164E12, 10.0], [1.60384182E12, 10.0], [1.603842E12, 10.0], [1.6038417E12, 10.0], [1.60384188E12, 10.0], [1.60384206E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384212E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 285.0, "minX": 1.0, "maxY": 2828.0, "series": [{"data": [[8.0, 581.5], [4.0, 959.0], [2.0, 2828.0], [1.0, 2621.0], [9.0, 285.0], [10.0, 880.8367110596416], [5.0, 1159.0], [6.0, 801.0], [3.0, 1129.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996146, 881.4181117533725]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 572.0166666666667, "minX": 1.60384164E12, "maxY": 3816771.0166666666, "series": [{"data": [[1.60384176E12, 3816771.0166666666], [1.60384194E12, 2458521.3666666667], [1.60384212E12, 339597.4666666667], [1.60384164E12, 1633664.1333333333], [1.60384182E12, 3272893.3], [1.603842E12, 3755755.35], [1.6038417E12, 2551588.4], [1.60384188E12, 3072238.533333333], [1.60384206E12, 3071722.283333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384176E12, 5184.516666666666], [1.60384194E12, 5138.083333333333], [1.60384212E12, 572.0166666666667], [1.60384164E12, 2037.6333333333334], [1.60384182E12, 5261.116666666667], [1.603842E12, 5323.433333333333], [1.6038417E12, 5377.483333333334], [1.60384188E12, 4316.8], [1.60384206E12, 5366.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384212E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 803.416666666666, "minX": 1.60384164E12, "maxY": 1119.7466666666667, "series": [{"data": [[1.60384176E12, 876.010233918129], [1.60384194E12, 849.2909604519778], [1.60384212E12, 1119.7466666666667], [1.60384164E12, 1066.131672597865], [1.60384182E12, 856.5100864553314], [1.603842E12, 852.5363766048501], [1.6038417E12, 803.416666666666], [1.60384188E12, 1010.4688026981447], [1.60384206E12, 847.1985915492974]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384212E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 801.768817204301, "minX": 1.60384164E12, "maxY": 1117.8799999999997, "series": [{"data": [[1.60384176E12, 873.6169590643281], [1.60384194E12, 847.9138418079087], [1.60384212E12, 1117.8799999999997], [1.60384164E12, 1063.53024911032], [1.60384182E12, 854.5000000000001], [1.603842E12, 850.4978601997142], [1.6038417E12, 801.768817204301], [1.60384188E12, 1008.4468802698152], [1.60384206E12, 845.6985915492951]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384212E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60384164E12, "maxY": 0.2811387900355875, "series": [{"data": [[1.60384176E12, 0.024853801169590652], [1.60384194E12, 0.01412429378531072], [1.60384212E12, 0.0], [1.60384164E12, 0.2811387900355875], [1.60384182E12, 0.012968299711815562], [1.603842E12, 0.014265335235378027], [1.6038417E12, 0.013440860215053758], [1.60384188E12, 0.016863406408094417], [1.60384206E12, 0.019718309859154945]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384212E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.60384164E12, "maxY": 5889.0, "series": [{"data": [[1.60384176E12, 4348.0], [1.60384194E12, 5889.0], [1.60384212E12, 2828.0], [1.60384164E12, 5232.0], [1.60384182E12, 4635.0], [1.603842E12, 3132.0], [1.6038417E12, 4567.0], [1.60384188E12, 5549.0], [1.60384206E12, 3651.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384176E12, 200.0], [1.60384194E12, 208.76199966192246], [1.60384212E12, 227.0], [1.60384164E12, 205.0759998655319], [1.60384182E12, 200.2549998342991], [1.603842E12, 197.31799983263016], [1.6038417E12, 202.4099996447563], [1.60384188E12, 206.34599985837937], [1.60384206E12, 194.3989998304844]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384176E12, 200.0], [1.60384194E12, 210.0191000676155], [1.60384212E12, 227.0], [1.60384164E12, 205.58360005378722], [1.60384182E12, 200.88050006628038], [1.603842E12, 197.94980006694794], [1.6038417E12, 204.50200028419493], [1.60384188E12, 206.88060005664826], [1.60384206E12, 195.03890006780625]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384176E12, 200.0], [1.60384194E12, 209.47099983096123], [1.60384212E12, 227.0], [1.60384164E12, 205.35799993276595], [1.60384182E12, 200.60249991714954], [1.603842E12, 197.66899991631507], [1.6038417E12, 203.30999964475632], [1.60384188E12, 206.64299992918967], [1.60384206E12, 194.7544999152422]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384176E12, 188.0], [1.60384194E12, 179.0], [1.60384212E12, 227.0], [1.60384164E12, 203.0], [1.60384182E12, 187.0], [1.603842E12, 188.0], [1.6038417E12, 196.0], [1.60384188E12, 189.0], [1.60384206E12, 186.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384176E12, 646.0], [1.60384194E12, 678.0], [1.60384212E12, 998.0], [1.60384164E12, 932.0], [1.60384182E12, 687.5], [1.603842E12, 672.0], [1.6038417E12, 648.5], [1.60384188E12, 885.0], [1.60384206E12, 714.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384212E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 425.0, "minX": 2.0, "maxY": 2396.5, "series": [{"data": [[2.0, 2396.5], [8.0, 1057.0], [9.0, 958.0], [10.0, 850.0], [11.0, 865.0], [12.0, 828.0], [3.0, 1154.0], [13.0, 694.0], [14.0, 653.0], [15.0, 690.0], [4.0, 1634.0], [16.0, 525.0], [17.0, 512.0], [18.0, 490.0], [19.0, 468.0], [5.0, 1149.0], [20.0, 425.0], [21.0, 458.0], [22.0, 462.5], [23.0, 477.0], [6.0, 1199.0], [24.0, 426.5], [25.0, 431.5], [7.0, 1212.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 424.5, "minX": 2.0, "maxY": 2394.5, "series": [{"data": [[2.0, 2394.5], [8.0, 1052.0], [9.0, 957.0], [10.0, 848.5], [11.0, 864.0], [12.0, 826.5], [3.0, 1150.0], [13.0, 694.0], [14.0, 652.5], [15.0, 689.0], [4.0, 1631.0], [16.0, 524.5], [17.0, 512.0], [18.0, 488.5], [19.0, 468.0], [5.0, 1139.0], [20.0, 424.5], [21.0, 457.5], [22.0, 462.0], [23.0, 476.0], [6.0, 1192.5], [24.0, 426.0], [25.0, 431.5], [7.0, 1209.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60384164E12, "maxY": 12.4, "series": [{"data": [[1.60384176E12, 11.383333333333333], [1.60384194E12, 11.8], [1.60384212E12, 1.0833333333333333], [1.60384164E12, 4.85], [1.60384182E12, 11.583333333333334], [1.603842E12, 11.683333333333334], [1.6038417E12, 12.4], [1.60384188E12, 9.883333333333333], [1.60384206E12, 11.833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384212E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.60384164E12, "maxY": 12.4, "series": [{"data": [[1.60384176E12, 11.4], [1.60384194E12, 11.8], [1.60384212E12, 1.25], [1.60384164E12, 4.683333333333334], [1.60384182E12, 11.566666666666666], [1.603842E12, 11.683333333333334], [1.6038417E12, 12.4], [1.60384188E12, 9.883333333333333], [1.60384206E12, 11.833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384212E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.60384164E12, "maxY": 12.4, "series": [{"data": [[1.60384176E12, 11.4], [1.60384194E12, 11.8], [1.60384212E12, 1.25], [1.60384164E12, 4.683333333333334], [1.60384182E12, 11.566666666666666], [1.603842E12, 11.683333333333334], [1.6038417E12, 12.4], [1.60384188E12, 9.883333333333333], [1.60384206E12, 11.833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384212E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.60384164E12, "maxY": 12.4, "series": [{"data": [[1.60384176E12, 11.4], [1.60384194E12, 11.8], [1.60384212E12, 1.25], [1.60384164E12, 4.683333333333334], [1.60384182E12, 11.566666666666666], [1.603842E12, 11.683333333333334], [1.6038417E12, 12.4], [1.60384188E12, 9.883333333333333], [1.60384206E12, 11.833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384212E12, "title": "Total Transactions Per Second"}},
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

