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
        data: {"result": {"minY": 186.0, "minX": 0.0, "maxY": 8622.0, "series": [{"data": [[0.0, 186.0], [0.1, 189.0], [0.2, 193.0], [0.3, 196.0], [0.4, 197.0], [0.5, 198.0], [0.6, 200.0], [0.7, 201.0], [0.8, 202.0], [0.9, 203.0], [1.0, 204.0], [1.1, 205.0], [1.2, 206.0], [1.3, 207.0], [1.4, 208.0], [1.5, 208.0], [1.6, 209.0], [1.7, 210.0], [1.8, 211.0], [1.9, 212.0], [2.0, 213.0], [2.1, 213.0], [2.2, 214.0], [2.3, 215.0], [2.4, 216.0], [2.5, 217.0], [2.6, 217.0], [2.7, 218.0], [2.8, 218.0], [2.9, 219.0], [3.0, 220.0], [3.1, 220.0], [3.2, 222.0], [3.3, 223.0], [3.4, 224.0], [3.5, 224.0], [3.6, 225.0], [3.7, 225.0], [3.8, 227.0], [3.9, 227.0], [4.0, 228.0], [4.1, 228.0], [4.2, 229.0], [4.3, 230.0], [4.4, 231.0], [4.5, 231.0], [4.6, 233.0], [4.7, 233.0], [4.8, 234.0], [4.9, 234.0], [5.0, 235.0], [5.1, 236.0], [5.2, 237.0], [5.3, 237.0], [5.4, 238.0], [5.5, 239.0], [5.6, 240.0], [5.7, 241.0], [5.8, 242.0], [5.9, 243.0], [6.0, 244.0], [6.1, 246.0], [6.2, 248.0], [6.3, 248.0], [6.4, 249.0], [6.5, 251.0], [6.6, 252.0], [6.7, 254.0], [6.8, 255.0], [6.9, 257.0], [7.0, 257.0], [7.1, 259.0], [7.2, 260.0], [7.3, 262.0], [7.4, 263.0], [7.5, 265.0], [7.6, 266.0], [7.7, 268.0], [7.8, 269.0], [7.9, 270.0], [8.0, 271.0], [8.1, 272.0], [8.2, 273.0], [8.3, 274.0], [8.4, 275.0], [8.5, 276.0], [8.6, 277.0], [8.7, 277.0], [8.8, 278.0], [8.9, 278.0], [9.0, 279.0], [9.1, 279.0], [9.2, 280.0], [9.3, 282.0], [9.4, 284.0], [9.5, 284.0], [9.6, 285.0], [9.7, 286.0], [9.8, 286.0], [9.9, 288.0], [10.0, 289.0], [10.1, 290.0], [10.2, 291.0], [10.3, 293.0], [10.4, 293.0], [10.5, 295.0], [10.6, 296.0], [10.7, 296.0], [10.8, 297.0], [10.9, 298.0], [11.0, 299.0], [11.1, 300.0], [11.2, 300.0], [11.3, 301.0], [11.4, 303.0], [11.5, 304.0], [11.6, 305.0], [11.7, 306.0], [11.8, 307.0], [11.9, 308.0], [12.0, 309.0], [12.1, 310.0], [12.2, 311.0], [12.3, 312.0], [12.4, 313.0], [12.5, 314.0], [12.6, 315.0], [12.7, 315.0], [12.8, 316.0], [12.9, 317.0], [13.0, 318.0], [13.1, 318.0], [13.2, 319.0], [13.3, 320.0], [13.4, 321.0], [13.5, 321.0], [13.6, 322.0], [13.7, 323.0], [13.8, 324.0], [13.9, 325.0], [14.0, 326.0], [14.1, 327.0], [14.2, 328.0], [14.3, 330.0], [14.4, 332.0], [14.5, 332.0], [14.6, 333.0], [14.7, 335.0], [14.8, 336.0], [14.9, 337.0], [15.0, 340.0], [15.1, 341.0], [15.2, 342.0], [15.3, 346.0], [15.4, 347.0], [15.5, 348.0], [15.6, 349.0], [15.7, 351.0], [15.8, 353.0], [15.9, 355.0], [16.0, 357.0], [16.1, 358.0], [16.2, 360.0], [16.3, 362.0], [16.4, 363.0], [16.5, 365.0], [16.6, 367.0], [16.7, 370.0], [16.8, 371.0], [16.9, 373.0], [17.0, 376.0], [17.1, 379.0], [17.2, 380.0], [17.3, 383.0], [17.4, 383.0], [17.5, 386.0], [17.6, 387.0], [17.7, 387.0], [17.8, 388.0], [17.9, 391.0], [18.0, 392.0], [18.1, 393.0], [18.2, 394.0], [18.3, 395.0], [18.4, 396.0], [18.5, 397.0], [18.6, 398.0], [18.7, 398.0], [18.8, 399.0], [18.9, 400.0], [19.0, 401.0], [19.1, 402.0], [19.2, 404.0], [19.3, 404.0], [19.4, 404.0], [19.5, 406.0], [19.6, 406.0], [19.7, 407.0], [19.8, 408.0], [19.9, 408.0], [20.0, 409.0], [20.1, 410.0], [20.2, 411.0], [20.3, 412.0], [20.4, 413.0], [20.5, 414.0], [20.6, 415.0], [20.7, 417.0], [20.8, 417.0], [20.9, 419.0], [21.0, 419.0], [21.1, 421.0], [21.2, 422.0], [21.3, 423.0], [21.4, 424.0], [21.5, 425.0], [21.6, 427.0], [21.7, 427.0], [21.8, 428.0], [21.9, 429.0], [22.0, 430.0], [22.1, 431.0], [22.2, 432.0], [22.3, 433.0], [22.4, 433.0], [22.5, 435.0], [22.6, 435.0], [22.7, 436.0], [22.8, 437.0], [22.9, 437.0], [23.0, 439.0], [23.1, 440.0], [23.2, 440.0], [23.3, 441.0], [23.4, 442.0], [23.5, 443.0], [23.6, 444.0], [23.7, 445.0], [23.8, 445.0], [23.9, 447.0], [24.0, 447.0], [24.1, 448.0], [24.2, 448.0], [24.3, 450.0], [24.4, 450.0], [24.5, 451.0], [24.6, 452.0], [24.7, 453.0], [24.8, 453.0], [24.9, 455.0], [25.0, 456.0], [25.1, 456.0], [25.2, 457.0], [25.3, 459.0], [25.4, 460.0], [25.5, 461.0], [25.6, 462.0], [25.7, 462.0], [25.8, 463.0], [25.9, 464.0], [26.0, 464.0], [26.1, 465.0], [26.2, 465.0], [26.3, 465.0], [26.4, 466.0], [26.5, 467.0], [26.6, 467.0], [26.7, 467.0], [26.8, 468.0], [26.9, 469.0], [27.0, 470.0], [27.1, 471.0], [27.2, 471.0], [27.3, 473.0], [27.4, 474.0], [27.5, 474.0], [27.6, 475.0], [27.7, 476.0], [27.8, 476.0], [27.9, 479.0], [28.0, 479.0], [28.1, 480.0], [28.2, 482.0], [28.3, 483.0], [28.4, 485.0], [28.5, 487.0], [28.6, 487.0], [28.7, 489.0], [28.8, 489.0], [28.9, 490.0], [29.0, 491.0], [29.1, 493.0], [29.2, 494.0], [29.3, 495.0], [29.4, 496.0], [29.5, 498.0], [29.6, 499.0], [29.7, 500.0], [29.8, 500.0], [29.9, 501.0], [30.0, 501.0], [30.1, 502.0], [30.2, 504.0], [30.3, 505.0], [30.4, 507.0], [30.5, 509.0], [30.6, 510.0], [30.7, 512.0], [30.8, 513.0], [30.9, 513.0], [31.0, 514.0], [31.1, 516.0], [31.2, 516.0], [31.3, 517.0], [31.4, 519.0], [31.5, 520.0], [31.6, 522.0], [31.7, 523.0], [31.8, 524.0], [31.9, 525.0], [32.0, 527.0], [32.1, 527.0], [32.2, 528.0], [32.3, 530.0], [32.4, 531.0], [32.5, 531.0], [32.6, 532.0], [32.7, 534.0], [32.8, 535.0], [32.9, 536.0], [33.0, 538.0], [33.1, 540.0], [33.2, 540.0], [33.3, 541.0], [33.4, 542.0], [33.5, 543.0], [33.6, 544.0], [33.7, 545.0], [33.8, 547.0], [33.9, 548.0], [34.0, 549.0], [34.1, 549.0], [34.2, 550.0], [34.3, 551.0], [34.4, 552.0], [34.5, 552.0], [34.6, 554.0], [34.7, 555.0], [34.8, 557.0], [34.9, 558.0], [35.0, 559.0], [35.1, 560.0], [35.2, 561.0], [35.3, 562.0], [35.4, 562.0], [35.5, 563.0], [35.6, 564.0], [35.7, 565.0], [35.8, 566.0], [35.9, 567.0], [36.0, 568.0], [36.1, 569.0], [36.2, 570.0], [36.3, 571.0], [36.4, 572.0], [36.5, 573.0], [36.6, 575.0], [36.7, 576.0], [36.8, 576.0], [36.9, 578.0], [37.0, 579.0], [37.1, 580.0], [37.2, 580.0], [37.3, 581.0], [37.4, 582.0], [37.5, 582.0], [37.6, 583.0], [37.7, 584.0], [37.8, 584.0], [37.9, 586.0], [38.0, 586.0], [38.1, 587.0], [38.2, 589.0], [38.3, 590.0], [38.4, 590.0], [38.5, 593.0], [38.6, 594.0], [38.7, 595.0], [38.8, 596.0], [38.9, 596.0], [39.0, 597.0], [39.1, 598.0], [39.2, 599.0], [39.3, 600.0], [39.4, 601.0], [39.5, 602.0], [39.6, 603.0], [39.7, 604.0], [39.8, 605.0], [39.9, 606.0], [40.0, 607.0], [40.1, 608.0], [40.2, 609.0], [40.3, 610.0], [40.4, 611.0], [40.5, 612.0], [40.6, 614.0], [40.7, 615.0], [40.8, 615.0], [40.9, 617.0], [41.0, 617.0], [41.1, 619.0], [41.2, 620.0], [41.3, 620.0], [41.4, 621.0], [41.5, 622.0], [41.6, 623.0], [41.7, 625.0], [41.8, 627.0], [41.9, 628.0], [42.0, 630.0], [42.1, 630.0], [42.2, 631.0], [42.3, 633.0], [42.4, 634.0], [42.5, 635.0], [42.6, 637.0], [42.7, 638.0], [42.8, 639.0], [42.9, 640.0], [43.0, 641.0], [43.1, 642.0], [43.2, 643.0], [43.3, 644.0], [43.4, 646.0], [43.5, 647.0], [43.6, 647.0], [43.7, 648.0], [43.8, 649.0], [43.9, 650.0], [44.0, 651.0], [44.1, 652.0], [44.2, 653.0], [44.3, 654.0], [44.4, 655.0], [44.5, 657.0], [44.6, 659.0], [44.7, 659.0], [44.8, 662.0], [44.9, 662.0], [45.0, 663.0], [45.1, 663.0], [45.2, 665.0], [45.3, 667.0], [45.4, 668.0], [45.5, 670.0], [45.6, 672.0], [45.7, 673.0], [45.8, 674.0], [45.9, 675.0], [46.0, 678.0], [46.1, 680.0], [46.2, 682.0], [46.3, 684.0], [46.4, 685.0], [46.5, 687.0], [46.6, 688.0], [46.7, 690.0], [46.8, 691.0], [46.9, 693.0], [47.0, 694.0], [47.1, 695.0], [47.2, 696.0], [47.3, 697.0], [47.4, 700.0], [47.5, 701.0], [47.6, 702.0], [47.7, 703.0], [47.8, 705.0], [47.9, 708.0], [48.0, 709.0], [48.1, 710.0], [48.2, 712.0], [48.3, 714.0], [48.4, 716.0], [48.5, 717.0], [48.6, 718.0], [48.7, 720.0], [48.8, 722.0], [48.9, 724.0], [49.0, 726.0], [49.1, 728.0], [49.2, 729.0], [49.3, 732.0], [49.4, 734.0], [49.5, 736.0], [49.6, 738.0], [49.7, 739.0], [49.8, 739.0], [49.9, 742.0], [50.0, 744.0], [50.1, 746.0], [50.2, 747.0], [50.3, 748.0], [50.4, 749.0], [50.5, 751.0], [50.6, 755.0], [50.7, 758.0], [50.8, 759.0], [50.9, 760.0], [51.0, 761.0], [51.1, 763.0], [51.2, 764.0], [51.3, 767.0], [51.4, 768.0], [51.5, 769.0], [51.6, 772.0], [51.7, 773.0], [51.8, 773.0], [51.9, 775.0], [52.0, 777.0], [52.1, 778.0], [52.2, 783.0], [52.3, 786.0], [52.4, 787.0], [52.5, 789.0], [52.6, 791.0], [52.7, 792.0], [52.8, 795.0], [52.9, 797.0], [53.0, 800.0], [53.1, 801.0], [53.2, 803.0], [53.3, 804.0], [53.4, 805.0], [53.5, 807.0], [53.6, 808.0], [53.7, 810.0], [53.8, 812.0], [53.9, 813.0], [54.0, 815.0], [54.1, 816.0], [54.2, 818.0], [54.3, 820.0], [54.4, 823.0], [54.5, 827.0], [54.6, 829.0], [54.7, 831.0], [54.8, 832.0], [54.9, 835.0], [55.0, 837.0], [55.1, 839.0], [55.2, 842.0], [55.3, 844.0], [55.4, 845.0], [55.5, 846.0], [55.6, 848.0], [55.7, 850.0], [55.8, 852.0], [55.9, 853.0], [56.0, 854.0], [56.1, 856.0], [56.2, 857.0], [56.3, 859.0], [56.4, 862.0], [56.5, 865.0], [56.6, 868.0], [56.7, 869.0], [56.8, 873.0], [56.9, 875.0], [57.0, 876.0], [57.1, 878.0], [57.2, 882.0], [57.3, 883.0], [57.4, 886.0], [57.5, 888.0], [57.6, 890.0], [57.7, 892.0], [57.8, 895.0], [57.9, 897.0], [58.0, 898.0], [58.1, 899.0], [58.2, 900.0], [58.3, 901.0], [58.4, 903.0], [58.5, 904.0], [58.6, 907.0], [58.7, 908.0], [58.8, 910.0], [58.9, 911.0], [59.0, 913.0], [59.1, 913.0], [59.2, 915.0], [59.3, 917.0], [59.4, 919.0], [59.5, 921.0], [59.6, 923.0], [59.7, 925.0], [59.8, 926.0], [59.9, 927.0], [60.0, 928.0], [60.1, 929.0], [60.2, 930.0], [60.3, 933.0], [60.4, 934.0], [60.5, 935.0], [60.6, 938.0], [60.7, 941.0], [60.8, 942.0], [60.9, 943.0], [61.0, 944.0], [61.1, 945.0], [61.2, 948.0], [61.3, 949.0], [61.4, 951.0], [61.5, 953.0], [61.6, 955.0], [61.7, 956.0], [61.8, 957.0], [61.9, 960.0], [62.0, 960.0], [62.1, 961.0], [62.2, 964.0], [62.3, 965.0], [62.4, 967.0], [62.5, 968.0], [62.6, 969.0], [62.7, 971.0], [62.8, 973.0], [62.9, 974.0], [63.0, 976.0], [63.1, 977.0], [63.2, 979.0], [63.3, 980.0], [63.4, 982.0], [63.5, 986.0], [63.6, 988.0], [63.7, 989.0], [63.8, 992.0], [63.9, 993.0], [64.0, 993.0], [64.1, 995.0], [64.2, 997.0], [64.3, 998.0], [64.4, 1001.0], [64.5, 1003.0], [64.6, 1004.0], [64.7, 1007.0], [64.8, 1008.0], [64.9, 1010.0], [65.0, 1012.0], [65.1, 1014.0], [65.2, 1015.0], [65.3, 1015.0], [65.4, 1015.0], [65.5, 1016.0], [65.6, 1017.0], [65.7, 1019.0], [65.8, 1020.0], [65.9, 1022.0], [66.0, 1024.0], [66.1, 1027.0], [66.2, 1029.0], [66.3, 1030.0], [66.4, 1031.0], [66.5, 1033.0], [66.6, 1034.0], [66.7, 1036.0], [66.8, 1039.0], [66.9, 1040.0], [67.0, 1042.0], [67.1, 1043.0], [67.2, 1045.0], [67.3, 1046.0], [67.4, 1047.0], [67.5, 1047.0], [67.6, 1049.0], [67.7, 1052.0], [67.8, 1052.0], [67.9, 1053.0], [68.0, 1056.0], [68.1, 1058.0], [68.2, 1060.0], [68.3, 1062.0], [68.4, 1066.0], [68.5, 1069.0], [68.6, 1069.0], [68.7, 1073.0], [68.8, 1075.0], [68.9, 1077.0], [69.0, 1079.0], [69.1, 1081.0], [69.2, 1082.0], [69.3, 1083.0], [69.4, 1085.0], [69.5, 1086.0], [69.6, 1087.0], [69.7, 1088.0], [69.8, 1090.0], [69.9, 1094.0], [70.0, 1097.0], [70.1, 1100.0], [70.2, 1102.0], [70.3, 1103.0], [70.4, 1105.0], [70.5, 1107.0], [70.6, 1109.0], [70.7, 1111.0], [70.8, 1114.0], [70.9, 1115.0], [71.0, 1118.0], [71.1, 1121.0], [71.2, 1123.0], [71.3, 1125.0], [71.4, 1127.0], [71.5, 1129.0], [71.6, 1129.0], [71.7, 1130.0], [71.8, 1133.0], [71.9, 1133.0], [72.0, 1135.0], [72.1, 1137.0], [72.2, 1138.0], [72.3, 1139.0], [72.4, 1140.0], [72.5, 1142.0], [72.6, 1145.0], [72.7, 1149.0], [72.8, 1150.0], [72.9, 1151.0], [73.0, 1153.0], [73.1, 1154.0], [73.2, 1158.0], [73.3, 1161.0], [73.4, 1163.0], [73.5, 1164.0], [73.6, 1167.0], [73.7, 1169.0], [73.8, 1172.0], [73.9, 1173.0], [74.0, 1174.0], [74.1, 1175.0], [74.2, 1178.0], [74.3, 1181.0], [74.4, 1184.0], [74.5, 1185.0], [74.6, 1187.0], [74.7, 1188.0], [74.8, 1192.0], [74.9, 1197.0], [75.0, 1198.0], [75.1, 1201.0], [75.2, 1203.0], [75.3, 1206.0], [75.4, 1210.0], [75.5, 1212.0], [75.6, 1216.0], [75.7, 1216.0], [75.8, 1219.0], [75.9, 1221.0], [76.0, 1222.0], [76.1, 1223.0], [76.2, 1226.0], [76.3, 1228.0], [76.4, 1229.0], [76.5, 1232.0], [76.6, 1236.0], [76.7, 1237.0], [76.8, 1241.0], [76.9, 1244.0], [77.0, 1246.0], [77.1, 1248.0], [77.2, 1249.0], [77.3, 1253.0], [77.4, 1258.0], [77.5, 1259.0], [77.6, 1261.0], [77.7, 1263.0], [77.8, 1265.0], [77.9, 1270.0], [78.0, 1272.0], [78.1, 1275.0], [78.2, 1276.0], [78.3, 1278.0], [78.4, 1283.0], [78.5, 1286.0], [78.6, 1289.0], [78.7, 1292.0], [78.8, 1297.0], [78.9, 1300.0], [79.0, 1301.0], [79.1, 1304.0], [79.2, 1305.0], [79.3, 1307.0], [79.4, 1308.0], [79.5, 1311.0], [79.6, 1313.0], [79.7, 1314.0], [79.8, 1315.0], [79.9, 1317.0], [80.0, 1320.0], [80.1, 1323.0], [80.2, 1325.0], [80.3, 1327.0], [80.4, 1333.0], [80.5, 1334.0], [80.6, 1338.0], [80.7, 1341.0], [80.8, 1344.0], [80.9, 1350.0], [81.0, 1353.0], [81.1, 1356.0], [81.2, 1357.0], [81.3, 1360.0], [81.4, 1362.0], [81.5, 1366.0], [81.6, 1368.0], [81.7, 1371.0], [81.8, 1374.0], [81.9, 1377.0], [82.0, 1380.0], [82.1, 1382.0], [82.2, 1386.0], [82.3, 1387.0], [82.4, 1389.0], [82.5, 1391.0], [82.6, 1393.0], [82.7, 1396.0], [82.8, 1398.0], [82.9, 1402.0], [83.0, 1404.0], [83.1, 1407.0], [83.2, 1408.0], [83.3, 1411.0], [83.4, 1413.0], [83.5, 1415.0], [83.6, 1417.0], [83.7, 1420.0], [83.8, 1422.0], [83.9, 1423.0], [84.0, 1423.0], [84.1, 1425.0], [84.2, 1426.0], [84.3, 1427.0], [84.4, 1430.0], [84.5, 1431.0], [84.6, 1433.0], [84.7, 1436.0], [84.8, 1439.0], [84.9, 1440.0], [85.0, 1444.0], [85.1, 1446.0], [85.2, 1448.0], [85.3, 1451.0], [85.4, 1453.0], [85.5, 1455.0], [85.6, 1457.0], [85.7, 1459.0], [85.8, 1464.0], [85.9, 1465.0], [86.0, 1467.0], [86.1, 1469.0], [86.2, 1472.0], [86.3, 1477.0], [86.4, 1481.0], [86.5, 1486.0], [86.6, 1490.0], [86.7, 1494.0], [86.8, 1497.0], [86.9, 1499.0], [87.0, 1501.0], [87.1, 1508.0], [87.2, 1510.0], [87.3, 1513.0], [87.4, 1518.0], [87.5, 1520.0], [87.6, 1526.0], [87.7, 1528.0], [87.8, 1533.0], [87.9, 1534.0], [88.0, 1538.0], [88.1, 1541.0], [88.2, 1546.0], [88.3, 1551.0], [88.4, 1554.0], [88.5, 1556.0], [88.6, 1561.0], [88.7, 1564.0], [88.8, 1566.0], [88.9, 1572.0], [89.0, 1580.0], [89.1, 1586.0], [89.2, 1589.0], [89.3, 1595.0], [89.4, 1599.0], [89.5, 1601.0], [89.6, 1606.0], [89.7, 1608.0], [89.8, 1612.0], [89.9, 1615.0], [90.0, 1618.0], [90.1, 1625.0], [90.2, 1629.0], [90.3, 1638.0], [90.4, 1642.0], [90.5, 1646.0], [90.6, 1652.0], [90.7, 1658.0], [90.8, 1664.0], [90.9, 1668.0], [91.0, 1676.0], [91.1, 1680.0], [91.2, 1688.0], [91.3, 1691.0], [91.4, 1696.0], [91.5, 1706.0], [91.6, 1712.0], [91.7, 1719.0], [91.8, 1727.0], [91.9, 1737.0], [92.0, 1743.0], [92.1, 1749.0], [92.2, 1755.0], [92.3, 1764.0], [92.4, 1774.0], [92.5, 1778.0], [92.6, 1787.0], [92.7, 1789.0], [92.8, 1792.0], [92.9, 1802.0], [93.0, 1809.0], [93.1, 1821.0], [93.2, 1828.0], [93.3, 1841.0], [93.4, 1851.0], [93.5, 1860.0], [93.6, 1867.0], [93.7, 1874.0], [93.8, 1879.0], [93.9, 1889.0], [94.0, 1895.0], [94.1, 1900.0], [94.2, 1915.0], [94.3, 1921.0], [94.4, 1931.0], [94.5, 1938.0], [94.6, 1947.0], [94.7, 1953.0], [94.8, 1969.0], [94.9, 1976.0], [95.0, 1984.0], [95.1, 2000.0], [95.2, 2020.0], [95.3, 2029.0], [95.4, 2038.0], [95.5, 2069.0], [95.6, 2081.0], [95.7, 2092.0], [95.8, 2110.0], [95.9, 2117.0], [96.0, 2121.0], [96.1, 2136.0], [96.2, 2168.0], [96.3, 2181.0], [96.4, 2197.0], [96.5, 2209.0], [96.6, 2223.0], [96.7, 2231.0], [96.8, 2239.0], [96.9, 2260.0], [97.0, 2280.0], [97.1, 2293.0], [97.2, 2318.0], [97.3, 2338.0], [97.4, 2351.0], [97.5, 2368.0], [97.6, 2389.0], [97.7, 2405.0], [97.8, 2432.0], [97.9, 2450.0], [98.0, 2465.0], [98.1, 2491.0], [98.2, 2511.0], [98.3, 2542.0], [98.4, 2582.0], [98.5, 2620.0], [98.6, 2677.0], [98.7, 2729.0], [98.8, 2801.0], [98.9, 2849.0], [99.0, 2877.0], [99.1, 2996.0], [99.2, 3084.0], [99.3, 3214.0], [99.4, 3389.0], [99.5, 3694.0], [99.6, 3956.0], [99.7, 4438.0], [99.8, 4756.0], [99.9, 5085.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 561.0, "series": [{"data": [[600.0, 420.0], [700.0, 291.0], [800.0, 270.0], [900.0, 321.0], [1000.0, 297.0], [1100.0, 259.0], [1200.0, 198.0], [1300.0, 205.0], [1400.0, 214.0], [1500.0, 127.0], [1600.0, 106.0], [1700.0, 72.0], [1800.0, 65.0], [1900.0, 52.0], [2000.0, 34.0], [2100.0, 35.0], [2200.0, 38.0], [2300.0, 27.0], [2400.0, 26.0], [2500.0, 13.0], [2600.0, 13.0], [2800.0, 13.0], [2700.0, 6.0], [2900.0, 4.0], [3000.0, 6.0], [3100.0, 3.0], [3300.0, 5.0], [3200.0, 2.0], [3400.0, 2.0], [3500.0, 1.0], [3700.0, 3.0], [3600.0, 2.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4200.0, 1.0], [4300.0, 1.0], [4100.0, 1.0], [4400.0, 3.0], [4500.0, 1.0], [4600.0, 1.0], [4700.0, 2.0], [4800.0, 1.0], [4900.0, 1.0], [5000.0, 2.0], [5300.0, 1.0], [5400.0, 1.0], [5600.0, 1.0], [6000.0, 1.0], [8600.0, 1.0], [100.0, 31.0], [200.0, 544.0], [300.0, 403.0], [400.0, 561.0], [500.0, 499.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 676.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2963.0, "series": [{"data": [[0.0, 1551.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2963.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 676.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.920000000000002, "minX": 1.60422948E12, "maxY": 10.0, "series": [{"data": [[1.6042299E12, 9.920000000000002], [1.60422972E12, 10.0], [1.60422954E12, 10.0], [1.60422984E12, 10.0], [1.60422966E12, 10.0], [1.60422948E12, 10.0], [1.60422978E12, 10.0], [1.6042296E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042299E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 336.0, "minX": 1.0, "maxY": 2829.0, "series": [{"data": [[8.0, 1327.0], [4.0, 1173.0], [2.0, 2829.0], [1.0, 2671.0], [9.0, 1184.0], [10.0, 897.9888052499516], [6.0, 830.0], [3.0, 775.0], [7.0, 336.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996148, 898.7350674373794]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4146.2, "minX": 1.60422948E12, "maxY": 3391137.5166666666, "series": [{"data": [[1.6042299E12, 2296487.1333333333], [1.60422972E12, 3075906.8833333333], [1.60422954E12, 2789071.4], [1.60422984E12, 3198592.6333333333], [1.60422966E12, 3143710.1], [1.60422948E12, 3063902.5833333335], [1.60422978E12, 3013965.8833333333], [1.6042296E12, 3391137.5166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6042299E12, 4146.2], [1.60422972E12, 4516.466666666666], [1.60422954E12, 4860.366666666667], [1.60422984E12, 5470.566666666667], [1.60422966E12, 5048.033333333334], [1.60422948E12, 4348.733333333334], [1.60422978E12, 4981.95], [1.6042296E12, 5205.016666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042299E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 837.1444444444445, "minX": 1.60422948E12, "maxY": 951.5291181364398, "series": [{"data": [[1.6042299E12, 903.1163636363638], [1.60422972E12, 950.3173843700156], [1.60422954E12, 909.218181818182], [1.60422984E12, 837.1444444444445], [1.60422966E12, 898.684131736526], [1.60422948E12, 951.5291181364398], [1.60422978E12, 886.7876106194689], [1.6042296E12, 868.2390670553938]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042299E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 835.4277777777777, "minX": 1.60422948E12, "maxY": 949.356073211315, "series": [{"data": [[1.6042299E12, 901.28], [1.60422972E12, 948.5821371610845], [1.60422954E12, 907.1636363636359], [1.60422984E12, 835.4277777777777], [1.60422966E12, 896.4431137724548], [1.60422948E12, 949.356073211315], [1.60422978E12, 885.0693215339223], [1.6042296E12, 865.9110787172012]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042299E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010909090909090908, "minX": 1.60422948E12, "maxY": 0.14975041597337763, "series": [{"data": [[1.6042299E12, 0.010909090909090908], [1.60422972E12, 0.023923444976076565], [1.60422954E12, 0.019696969696969685], [1.60422984E12, 0.018055555555555564], [1.60422966E12, 0.02844311377245506], [1.60422948E12, 0.14975041597337763], [1.60422978E12, 0.01917404129793511], [1.6042296E12, 0.016034985422740552]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042299E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 186.0, "minX": 1.60422948E12, "maxY": 8622.0, "series": [{"data": [[1.6042299E12, 4000.0], [1.60422972E12, 8622.0], [1.60422954E12, 5085.0], [1.60422984E12, 3084.0], [1.60422966E12, 4678.0], [1.60422948E12, 4996.0], [1.60422978E12, 4102.0], [1.6042296E12, 3127.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6042299E12, 208.95899986863137], [1.60422972E12, 219.30399970054626], [1.60422954E12, 216.84699952721596], [1.60422984E12, 195.4889998281002], [1.60422966E12, 199.02099984049798], [1.60422948E12, 209.41799985647202], [1.60422978E12, 204.0], [1.6042296E12, 196.18299983620645]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6042299E12, 209.0], [1.60422972E12, 221.08600029945373], [1.60422954E12, 218.63170018911362], [1.60422984E12, 196.55160027503968], [1.60422966E12, 199.62310006380082], [1.60422948E12, 209.9598000574112], [1.60422978E12, 204.0], [1.6042296E12, 196.80130006551744]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6042299E12, 209.0], [1.60422972E12, 219.93199985027314], [1.60422954E12, 217.83849976360798], [1.60422984E12, 195.8494999140501], [1.60422966E12, 199.35549992024897], [1.60422948E12, 209.718999928236], [1.60422978E12, 204.0], [1.6042296E12, 196.5264999181032]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6042299E12, 199.0], [1.60422972E12, 196.0], [1.60422954E12, 193.0], [1.60422984E12, 188.0], [1.60422966E12, 191.0], [1.60422948E12, 196.0], [1.60422978E12, 196.0], [1.6042296E12, 186.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6042299E12, 764.5], [1.60422972E12, 812.0], [1.60422954E12, 694.5], [1.60422984E12, 676.5], [1.60422966E12, 700.5], [1.60422948E12, 817.0], [1.60422978E12, 716.0], [1.6042296E12, 695.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042299E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 416.5, "minX": 1.0, "maxY": 2750.0, "series": [{"data": [[2.0, 1213.0], [3.0, 1323.0], [4.0, 1445.5], [5.0, 1188.0], [6.0, 1296.5], [7.0, 1114.0], [8.0, 1057.0], [9.0, 966.0], [10.0, 870.0], [11.0, 925.0], [12.0, 806.5], [13.0, 736.0], [14.0, 691.0], [15.0, 561.0], [16.0, 575.5], [1.0, 2750.0], [17.0, 515.0], [18.0, 551.0], [19.0, 438.0], [20.0, 452.0], [21.0, 433.0], [22.0, 442.5], [23.0, 416.5], [24.0, 432.0], [25.0, 418.0], [26.0, 432.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 416.0, "minX": 1.0, "maxY": 2743.5, "series": [{"data": [[2.0, 1209.0], [3.0, 1320.0], [4.0, 1441.5], [5.0, 1187.0], [6.0, 1293.5], [7.0, 1104.5], [8.0, 1055.5], [9.0, 965.0], [10.0, 866.0], [11.0, 923.0], [12.0, 806.0], [13.0, 735.0], [14.0, 688.0], [15.0, 561.0], [16.0, 574.5], [1.0, 2743.5], [17.0, 514.5], [18.0, 550.5], [19.0, 437.0], [20.0, 451.5], [21.0, 432.5], [22.0, 442.0], [23.0, 416.0], [24.0, 432.0], [25.0, 418.0], [26.0, 431.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.60422948E12, "maxY": 12.0, "series": [{"data": [[1.6042299E12, 9.0], [1.60422972E12, 10.45], [1.60422954E12, 11.0], [1.60422984E12, 12.0], [1.60422966E12, 11.133333333333333], [1.60422948E12, 10.183333333333334], [1.60422978E12, 11.3], [1.6042296E12, 11.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042299E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.166666666666666, "minX": 1.60422948E12, "maxY": 12.0, "series": [{"data": [[1.6042299E12, 9.166666666666666], [1.60422972E12, 10.45], [1.60422954E12, 11.0], [1.60422984E12, 12.0], [1.60422966E12, 11.133333333333333], [1.60422948E12, 10.016666666666667], [1.60422978E12, 11.3], [1.6042296E12, 11.433333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042299E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.166666666666666, "minX": 1.60422948E12, "maxY": 12.0, "series": [{"data": [[1.6042299E12, 9.166666666666666], [1.60422972E12, 10.45], [1.60422954E12, 11.0], [1.60422984E12, 12.0], [1.60422966E12, 11.133333333333333], [1.60422948E12, 10.016666666666667], [1.60422978E12, 11.3], [1.6042296E12, 11.433333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042299E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.166666666666666, "minX": 1.60422948E12, "maxY": 12.0, "series": [{"data": [[1.6042299E12, 9.166666666666666], [1.60422972E12, 10.45], [1.60422954E12, 11.0], [1.60422984E12, 12.0], [1.60422966E12, 11.133333333333333], [1.60422948E12, 10.016666666666667], [1.60422978E12, 11.3], [1.6042296E12, 11.433333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042299E12, "title": "Total Transactions Per Second"}},
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

