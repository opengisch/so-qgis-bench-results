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
        data: {"result": {"minY": 187.0, "minX": 0.0, "maxY": 3432.0, "series": [{"data": [[0.0, 187.0], [0.1, 187.0], [0.2, 192.0], [0.3, 196.0], [0.4, 196.0], [0.5, 197.0], [0.6, 210.0], [0.7, 210.0], [0.8, 210.0], [0.9, 214.0], [1.0, 221.0], [1.1, 224.0], [1.2, 224.0], [1.3, 228.0], [1.4, 229.0], [1.5, 231.0], [1.6, 231.0], [1.7, 239.0], [1.8, 247.0], [1.9, 247.0], [2.0, 247.0], [2.1, 247.0], [2.2, 248.0], [2.3, 248.0], [2.4, 250.0], [2.5, 251.0], [2.6, 253.0], [2.7, 253.0], [2.8, 256.0], [2.9, 257.0], [3.0, 263.0], [3.1, 263.0], [3.2, 266.0], [3.3, 267.0], [3.4, 267.0], [3.5, 269.0], [3.6, 272.0], [3.7, 274.0], [3.8, 274.0], [3.9, 275.0], [4.0, 276.0], [4.1, 276.0], [4.2, 276.0], [4.3, 277.0], [4.4, 277.0], [4.5, 280.0], [4.6, 280.0], [4.7, 281.0], [4.8, 281.0], [4.9, 281.0], [5.0, 281.0], [5.1, 282.0], [5.2, 283.0], [5.3, 283.0], [5.4, 285.0], [5.5, 288.0], [5.6, 288.0], [5.7, 288.0], [5.8, 290.0], [5.9, 291.0], [6.0, 291.0], [6.1, 291.0], [6.2, 292.0], [6.3, 293.0], [6.4, 294.0], [6.5, 294.0], [6.6, 296.0], [6.7, 297.0], [6.8, 297.0], [6.9, 297.0], [7.0, 298.0], [7.1, 299.0], [7.2, 299.0], [7.3, 299.0], [7.4, 302.0], [7.5, 303.0], [7.6, 303.0], [7.7, 316.0], [7.8, 316.0], [7.9, 322.0], [8.0, 322.0], [8.1, 324.0], [8.2, 324.0], [8.3, 325.0], [8.4, 325.0], [8.5, 330.0], [8.6, 331.0], [8.7, 331.0], [8.8, 332.0], [8.9, 333.0], [9.0, 334.0], [9.1, 334.0], [9.2, 335.0], [9.3, 336.0], [9.4, 336.0], [9.5, 336.0], [9.6, 337.0], [9.7, 339.0], [9.8, 340.0], [9.9, 340.0], [10.0, 342.0], [10.1, 344.0], [10.2, 344.0], [10.3, 344.0], [10.4, 348.0], [10.5, 348.0], [10.6, 348.0], [10.7, 348.0], [10.8, 349.0], [10.9, 350.0], [11.0, 350.0], [11.1, 350.0], [11.2, 352.0], [11.3, 353.0], [11.4, 353.0], [11.5, 354.0], [11.6, 357.0], [11.7, 357.0], [11.8, 358.0], [11.9, 361.0], [12.0, 363.0], [12.1, 363.0], [12.2, 363.0], [12.3, 364.0], [12.4, 367.0], [12.5, 367.0], [12.6, 370.0], [12.7, 375.0], [12.8, 378.0], [12.9, 378.0], [13.0, 379.0], [13.1, 379.0], [13.2, 384.0], [13.3, 384.0], [13.4, 385.0], [13.5, 391.0], [13.6, 391.0], [13.7, 392.0], [13.8, 392.0], [13.9, 392.0], [14.0, 392.0], [14.1, 392.0], [14.2, 393.0], [14.3, 393.0], [14.4, 393.0], [14.5, 395.0], [14.6, 396.0], [14.7, 398.0], [14.8, 398.0], [14.9, 400.0], [15.0, 401.0], [15.1, 401.0], [15.2, 401.0], [15.3, 402.0], [15.4, 403.0], [15.5, 403.0], [15.6, 404.0], [15.7, 404.0], [15.8, 408.0], [15.9, 408.0], [16.0, 410.0], [16.1, 412.0], [16.2, 413.0], [16.3, 413.0], [16.4, 415.0], [16.5, 417.0], [16.6, 419.0], [16.7, 419.0], [16.8, 420.0], [16.9, 421.0], [17.0, 421.0], [17.1, 423.0], [17.2, 424.0], [17.3, 430.0], [17.4, 430.0], [17.5, 431.0], [17.6, 431.0], [17.7, 433.0], [17.8, 433.0], [17.9, 434.0], [18.0, 435.0], [18.1, 437.0], [18.2, 437.0], [18.3, 437.0], [18.4, 439.0], [18.5, 439.0], [18.6, 440.0], [18.7, 440.0], [18.8, 443.0], [18.9, 443.0], [19.0, 443.0], [19.1, 444.0], [19.2, 445.0], [19.3, 445.0], [19.4, 447.0], [19.5, 456.0], [19.6, 456.0], [19.7, 456.0], [19.8, 458.0], [19.9, 458.0], [20.0, 464.0], [20.1, 464.0], [20.2, 464.0], [20.3, 465.0], [20.4, 465.0], [20.5, 465.0], [20.6, 466.0], [20.7, 472.0], [20.8, 472.0], [20.9, 474.0], [21.0, 474.0], [21.1, 475.0], [21.2, 475.0], [21.3, 476.0], [21.4, 479.0], [21.5, 482.0], [21.6, 482.0], [21.7, 485.0], [21.8, 485.0], [21.9, 485.0], [22.0, 488.0], [22.1, 488.0], [22.2, 489.0], [22.3, 489.0], [22.4, 490.0], [22.5, 491.0], [22.6, 494.0], [22.7, 494.0], [22.8, 495.0], [22.9, 496.0], [23.0, 497.0], [23.1, 497.0], [23.2, 499.0], [23.3, 503.0], [23.4, 503.0], [23.5, 508.0], [23.6, 509.0], [23.7, 510.0], [23.8, 510.0], [23.9, 515.0], [24.0, 516.0], [24.1, 518.0], [24.2, 518.0], [24.3, 520.0], [24.4, 521.0], [24.5, 521.0], [24.6, 521.0], [24.7, 524.0], [24.8, 525.0], [24.9, 525.0], [25.0, 525.0], [25.1, 526.0], [25.2, 528.0], [25.3, 528.0], [25.4, 528.0], [25.5, 529.0], [25.6, 533.0], [25.7, 533.0], [25.8, 533.0], [25.9, 536.0], [26.0, 537.0], [26.1, 537.0], [26.2, 539.0], [26.3, 539.0], [26.4, 539.0], [26.5, 539.0], [26.6, 539.0], [26.7, 539.0], [26.8, 539.0], [26.9, 540.0], [27.0, 541.0], [27.1, 542.0], [27.2, 542.0], [27.3, 542.0], [27.4, 545.0], [27.5, 550.0], [27.6, 550.0], [27.7, 552.0], [27.8, 552.0], [27.9, 553.0], [28.0, 553.0], [28.1, 557.0], [28.2, 557.0], [28.3, 557.0], [28.4, 557.0], [28.5, 558.0], [28.6, 560.0], [28.7, 560.0], [28.8, 560.0], [28.9, 561.0], [29.0, 562.0], [29.1, 562.0], [29.2, 562.0], [29.3, 563.0], [29.4, 564.0], [29.5, 564.0], [29.6, 564.0], [29.7, 567.0], [29.8, 568.0], [29.9, 568.0], [30.0, 568.0], [30.1, 570.0], [30.2, 570.0], [30.3, 571.0], [30.4, 572.0], [30.5, 574.0], [30.6, 574.0], [30.7, 574.0], [30.8, 575.0], [30.9, 576.0], [31.0, 576.0], [31.1, 577.0], [31.2, 578.0], [31.3, 581.0], [31.4, 581.0], [31.5, 582.0], [31.6, 584.0], [31.7, 584.0], [31.8, 585.0], [31.9, 585.0], [32.0, 585.0], [32.1, 585.0], [32.2, 585.0], [32.3, 586.0], [32.4, 586.0], [32.5, 586.0], [32.6, 586.0], [32.7, 587.0], [32.8, 587.0], [32.9, 587.0], [33.0, 589.0], [33.1, 593.0], [33.2, 595.0], [33.3, 595.0], [33.4, 596.0], [33.5, 596.0], [33.6, 596.0], [33.7, 598.0], [33.8, 598.0], [33.9, 599.0], [34.0, 599.0], [34.1, 599.0], [34.2, 601.0], [34.3, 602.0], [34.4, 602.0], [34.5, 602.0], [34.6, 603.0], [34.7, 607.0], [34.8, 607.0], [34.9, 607.0], [35.0, 609.0], [35.1, 609.0], [35.2, 609.0], [35.3, 610.0], [35.4, 610.0], [35.5, 610.0], [35.6, 611.0], [35.7, 612.0], [35.8, 617.0], [35.9, 617.0], [36.0, 617.0], [36.1, 620.0], [36.2, 622.0], [36.3, 622.0], [36.4, 628.0], [36.5, 629.0], [36.6, 630.0], [36.7, 630.0], [36.8, 631.0], [36.9, 633.0], [37.0, 633.0], [37.1, 634.0], [37.2, 634.0], [37.3, 636.0], [37.4, 636.0], [37.5, 637.0], [37.6, 640.0], [37.7, 642.0], [37.8, 642.0], [37.9, 643.0], [38.0, 643.0], [38.1, 643.0], [38.2, 643.0], [38.3, 644.0], [38.4, 645.0], [38.5, 645.0], [38.6, 645.0], [38.7, 648.0], [38.8, 649.0], [38.9, 649.0], [39.0, 651.0], [39.1, 652.0], [39.2, 655.0], [39.3, 655.0], [39.4, 655.0], [39.5, 656.0], [39.6, 656.0], [39.7, 656.0], [39.8, 660.0], [39.9, 660.0], [40.0, 662.0], [40.1, 662.0], [40.2, 663.0], [40.3, 664.0], [40.4, 664.0], [40.5, 664.0], [40.6, 665.0], [40.7, 666.0], [40.8, 666.0], [40.9, 666.0], [41.0, 668.0], [41.1, 669.0], [41.2, 669.0], [41.3, 670.0], [41.4, 673.0], [41.5, 674.0], [41.6, 674.0], [41.7, 675.0], [41.8, 678.0], [41.9, 678.0], [42.0, 678.0], [42.1, 679.0], [42.2, 682.0], [42.3, 682.0], [42.4, 684.0], [42.5, 686.0], [42.6, 688.0], [42.7, 688.0], [42.8, 689.0], [42.9, 689.0], [43.0, 695.0], [43.1, 695.0], [43.2, 700.0], [43.3, 701.0], [43.4, 701.0], [43.5, 707.0], [43.6, 709.0], [43.7, 711.0], [43.8, 711.0], [43.9, 713.0], [44.0, 714.0], [44.1, 714.0], [44.2, 714.0], [44.3, 714.0], [44.4, 716.0], [44.5, 717.0], [44.6, 717.0], [44.7, 720.0], [44.8, 721.0], [44.9, 723.0], [45.0, 723.0], [45.1, 728.0], [45.2, 729.0], [45.3, 729.0], [45.4, 733.0], [45.5, 733.0], [45.6, 736.0], [45.7, 736.0], [45.8, 736.0], [45.9, 738.0], [46.0, 742.0], [46.1, 742.0], [46.2, 742.0], [46.3, 742.0], [46.4, 744.0], [46.5, 744.0], [46.6, 749.0], [46.7, 753.0], [46.8, 753.0], [46.9, 756.0], [47.0, 756.0], [47.1, 764.0], [47.2, 764.0], [47.3, 764.0], [47.4, 773.0], [47.5, 773.0], [47.6, 773.0], [47.7, 779.0], [47.8, 779.0], [47.9, 780.0], [48.0, 780.0], [48.1, 780.0], [48.2, 783.0], [48.3, 787.0], [48.4, 787.0], [48.5, 790.0], [48.6, 791.0], [48.7, 791.0], [48.8, 794.0], [48.9, 795.0], [49.0, 797.0], [49.1, 797.0], [49.2, 798.0], [49.3, 798.0], [49.4, 798.0], [49.5, 798.0], [49.6, 804.0], [49.7, 804.0], [49.8, 804.0], [49.9, 804.0], [50.0, 805.0], [50.1, 806.0], [50.2, 806.0], [50.3, 811.0], [50.4, 814.0], [50.5, 819.0], [50.6, 819.0], [50.7, 824.0], [50.8, 831.0], [50.9, 833.0], [51.0, 833.0], [51.1, 836.0], [51.2, 836.0], [51.3, 836.0], [51.4, 836.0], [51.5, 837.0], [51.6, 839.0], [51.7, 839.0], [51.8, 840.0], [51.9, 840.0], [52.0, 841.0], [52.1, 841.0], [52.2, 841.0], [52.3, 843.0], [52.4, 846.0], [52.5, 846.0], [52.6, 847.0], [52.7, 848.0], [52.8, 851.0], [52.9, 851.0], [53.0, 853.0], [53.1, 854.0], [53.2, 856.0], [53.3, 856.0], [53.4, 857.0], [53.5, 861.0], [53.6, 861.0], [53.7, 862.0], [53.8, 862.0], [53.9, 865.0], [54.0, 865.0], [54.1, 868.0], [54.2, 869.0], [54.3, 870.0], [54.4, 870.0], [54.5, 877.0], [54.6, 877.0], [54.7, 879.0], [54.8, 879.0], [54.9, 880.0], [55.0, 881.0], [55.1, 881.0], [55.2, 883.0], [55.3, 884.0], [55.4, 893.0], [55.5, 893.0], [55.6, 893.0], [55.7, 895.0], [55.8, 895.0], [55.9, 895.0], [56.0, 902.0], [56.1, 904.0], [56.2, 904.0], [56.3, 904.0], [56.4, 904.0], [56.5, 909.0], [56.6, 910.0], [56.7, 910.0], [56.8, 911.0], [56.9, 911.0], [57.0, 911.0], [57.1, 913.0], [57.2, 915.0], [57.3, 915.0], [57.4, 915.0], [57.5, 916.0], [57.6, 918.0], [57.7, 919.0], [57.8, 919.0], [57.9, 919.0], [58.0, 919.0], [58.1, 920.0], [58.2, 920.0], [58.3, 924.0], [58.4, 925.0], [58.5, 925.0], [58.6, 926.0], [58.7, 926.0], [58.8, 926.0], [58.9, 926.0], [59.0, 927.0], [59.1, 929.0], [59.2, 936.0], [59.3, 936.0], [59.4, 938.0], [59.5, 943.0], [59.6, 943.0], [59.7, 943.0], [59.8, 944.0], [59.9, 946.0], [60.0, 947.0], [60.1, 947.0], [60.2, 948.0], [60.3, 952.0], [60.4, 952.0], [60.5, 952.0], [60.6, 953.0], [60.7, 955.0], [60.8, 955.0], [60.9, 969.0], [61.0, 970.0], [61.1, 973.0], [61.2, 973.0], [61.3, 977.0], [61.4, 977.0], [61.5, 979.0], [61.6, 979.0], [61.7, 982.0], [61.8, 983.0], [61.9, 983.0], [62.0, 986.0], [62.1, 987.0], [62.2, 987.0], [62.3, 987.0], [62.4, 992.0], [62.5, 993.0], [62.6, 995.0], [62.7, 995.0], [62.8, 998.0], [62.9, 1004.0], [63.0, 1005.0], [63.1, 1005.0], [63.2, 1006.0], [63.3, 1006.0], [63.4, 1006.0], [63.5, 1007.0], [63.6, 1009.0], [63.7, 1010.0], [63.8, 1010.0], [63.9, 1014.0], [64.0, 1016.0], [64.1, 1021.0], [64.2, 1021.0], [64.3, 1022.0], [64.4, 1023.0], [64.5, 1024.0], [64.6, 1024.0], [64.7, 1026.0], [64.8, 1027.0], [64.9, 1028.0], [65.0, 1028.0], [65.1, 1028.0], [65.2, 1028.0], [65.3, 1028.0], [65.4, 1029.0], [65.5, 1032.0], [65.6, 1032.0], [65.7, 1032.0], [65.8, 1032.0], [65.9, 1034.0], [66.0, 1034.0], [66.1, 1034.0], [66.2, 1035.0], [66.3, 1037.0], [66.4, 1040.0], [66.5, 1040.0], [66.6, 1043.0], [66.7, 1044.0], [66.8, 1044.0], [66.9, 1045.0], [67.0, 1046.0], [67.1, 1047.0], [67.2, 1047.0], [67.3, 1047.0], [67.4, 1047.0], [67.5, 1052.0], [67.6, 1052.0], [67.7, 1059.0], [67.8, 1067.0], [67.9, 1067.0], [68.0, 1067.0], [68.1, 1069.0], [68.2, 1069.0], [68.3, 1069.0], [68.4, 1069.0], [68.5, 1071.0], [68.6, 1072.0], [68.7, 1072.0], [68.8, 1072.0], [68.9, 1074.0], [69.0, 1076.0], [69.1, 1076.0], [69.2, 1076.0], [69.3, 1079.0], [69.4, 1080.0], [69.5, 1080.0], [69.6, 1080.0], [69.7, 1081.0], [69.8, 1088.0], [69.9, 1088.0], [70.0, 1090.0], [70.1, 1090.0], [70.2, 1090.0], [70.3, 1091.0], [70.4, 1096.0], [70.5, 1099.0], [70.6, 1099.0], [70.7, 1100.0], [70.8, 1102.0], [70.9, 1108.0], [71.0, 1108.0], [71.1, 1109.0], [71.2, 1109.0], [71.3, 1111.0], [71.4, 1111.0], [71.5, 1111.0], [71.6, 1114.0], [71.7, 1114.0], [71.8, 1115.0], [71.9, 1115.0], [72.0, 1115.0], [72.1, 1115.0], [72.2, 1118.0], [72.3, 1118.0], [72.4, 1119.0], [72.5, 1119.0], [72.6, 1119.0], [72.7, 1120.0], [72.8, 1122.0], [72.9, 1122.0], [73.0, 1125.0], [73.1, 1133.0], [73.2, 1133.0], [73.3, 1133.0], [73.4, 1135.0], [73.5, 1135.0], [73.6, 1135.0], [73.7, 1135.0], [73.8, 1138.0], [73.9, 1139.0], [74.0, 1139.0], [74.1, 1140.0], [74.2, 1142.0], [74.3, 1144.0], [74.4, 1144.0], [74.5, 1144.0], [74.6, 1144.0], [74.7, 1146.0], [74.8, 1146.0], [74.9, 1150.0], [75.0, 1150.0], [75.1, 1150.0], [75.2, 1152.0], [75.3, 1152.0], [75.4, 1156.0], [75.5, 1156.0], [75.6, 1159.0], [75.7, 1159.0], [75.8, 1162.0], [75.9, 1162.0], [76.0, 1162.0], [76.1, 1163.0], [76.2, 1165.0], [76.3, 1165.0], [76.4, 1165.0], [76.5, 1166.0], [76.6, 1170.0], [76.7, 1170.0], [76.8, 1170.0], [76.9, 1171.0], [77.0, 1171.0], [77.1, 1173.0], [77.2, 1173.0], [77.3, 1173.0], [77.4, 1173.0], [77.5, 1182.0], [77.6, 1183.0], [77.7, 1183.0], [77.8, 1183.0], [77.9, 1184.0], [78.0, 1185.0], [78.1, 1190.0], [78.2, 1190.0], [78.3, 1190.0], [78.4, 1191.0], [78.5, 1191.0], [78.6, 1191.0], [78.7, 1192.0], [78.8, 1194.0], [78.9, 1194.0], [79.0, 1196.0], [79.1, 1197.0], [79.2, 1199.0], [79.3, 1199.0], [79.4, 1199.0], [79.5, 1200.0], [79.6, 1206.0], [79.7, 1206.0], [79.8, 1210.0], [79.9, 1210.0], [80.0, 1214.0], [80.1, 1214.0], [80.2, 1214.0], [80.3, 1215.0], [80.4, 1215.0], [80.5, 1215.0], [80.6, 1221.0], [80.7, 1222.0], [80.8, 1222.0], [80.9, 1225.0], [81.0, 1226.0], [81.1, 1228.0], [81.2, 1228.0], [81.3, 1228.0], [81.4, 1228.0], [81.5, 1229.0], [81.6, 1229.0], [81.7, 1229.0], [81.8, 1236.0], [81.9, 1236.0], [82.0, 1238.0], [82.1, 1239.0], [82.2, 1242.0], [82.3, 1242.0], [82.4, 1245.0], [82.5, 1245.0], [82.6, 1248.0], [82.7, 1248.0], [82.8, 1250.0], [82.9, 1251.0], [83.0, 1251.0], [83.1, 1251.0], [83.2, 1251.0], [83.3, 1253.0], [83.4, 1253.0], [83.5, 1255.0], [83.6, 1257.0], [83.7, 1259.0], [83.8, 1259.0], [83.9, 1262.0], [84.0, 1263.0], [84.1, 1266.0], [84.2, 1266.0], [84.3, 1267.0], [84.4, 1268.0], [84.5, 1270.0], [84.6, 1270.0], [84.7, 1271.0], [84.8, 1272.0], [84.9, 1273.0], [85.0, 1273.0], [85.1, 1275.0], [85.2, 1276.0], [85.3, 1276.0], [85.4, 1278.0], [85.5, 1285.0], [85.6, 1285.0], [85.7, 1285.0], [85.8, 1289.0], [85.9, 1290.0], [86.0, 1292.0], [86.1, 1292.0], [86.2, 1297.0], [86.3, 1302.0], [86.4, 1303.0], [86.5, 1303.0], [86.6, 1304.0], [86.7, 1305.0], [86.8, 1305.0], [86.9, 1306.0], [87.0, 1313.0], [87.1, 1314.0], [87.2, 1314.0], [87.3, 1315.0], [87.4, 1322.0], [87.5, 1325.0], [87.6, 1325.0], [87.7, 1329.0], [87.8, 1334.0], [87.9, 1336.0], [88.0, 1336.0], [88.1, 1342.0], [88.2, 1347.0], [88.3, 1357.0], [88.4, 1357.0], [88.5, 1361.0], [88.6, 1368.0], [88.7, 1368.0], [88.8, 1372.0], [88.9, 1374.0], [89.0, 1374.0], [89.1, 1374.0], [89.2, 1386.0], [89.3, 1387.0], [89.4, 1391.0], [89.5, 1391.0], [89.6, 1392.0], [89.7, 1392.0], [89.8, 1394.0], [89.9, 1394.0], [90.0, 1396.0], [90.1, 1398.0], [90.2, 1398.0], [90.3, 1399.0], [90.4, 1399.0], [90.5, 1401.0], [90.6, 1401.0], [90.7, 1402.0], [90.8, 1404.0], [90.9, 1407.0], [91.0, 1407.0], [91.1, 1408.0], [91.2, 1419.0], [91.3, 1422.0], [91.4, 1422.0], [91.5, 1424.0], [91.6, 1430.0], [91.7, 1430.0], [91.8, 1436.0], [91.9, 1439.0], [92.0, 1441.0], [92.1, 1441.0], [92.2, 1443.0], [92.3, 1452.0], [92.4, 1454.0], [92.5, 1454.0], [92.6, 1459.0], [92.7, 1460.0], [92.8, 1471.0], [92.9, 1471.0], [93.0, 1476.0], [93.1, 1477.0], [93.2, 1483.0], [93.3, 1483.0], [93.4, 1484.0], [93.5, 1486.0], [93.6, 1486.0], [93.7, 1498.0], [93.8, 1512.0], [93.9, 1519.0], [94.0, 1519.0], [94.1, 1535.0], [94.2, 1553.0], [94.3, 1588.0], [94.4, 1588.0], [94.5, 1595.0], [94.6, 1597.0], [94.7, 1597.0], [94.8, 1597.0], [94.9, 1629.0], [95.0, 1632.0], [95.1, 1632.0], [95.2, 1634.0], [95.3, 1667.0], [95.4, 1677.0], [95.5, 1677.0], [95.6, 1683.0], [95.7, 1693.0], [95.8, 1704.0], [95.9, 1704.0], [96.0, 1710.0], [96.1, 1719.0], [96.2, 1757.0], [96.3, 1757.0], [96.4, 1761.0], [96.5, 1761.0], [96.6, 1772.0], [96.7, 1772.0], [96.8, 1774.0], [96.9, 1775.0], [97.0, 1775.0], [97.1, 1799.0], [97.2, 1802.0], [97.3, 1867.0], [97.4, 1867.0], [97.5, 1890.0], [97.6, 1903.0], [97.7, 1908.0], [97.8, 1908.0], [97.9, 1922.0], [98.0, 2038.0], [98.1, 2222.0], [98.2, 2222.0], [98.3, 2289.0], [98.4, 2394.0], [98.5, 2394.0], [98.6, 2547.0], [98.7, 2775.0], [98.8, 2797.0], [98.9, 2797.0], [99.0, 2861.0], [99.1, 2945.0], [99.2, 3002.0], [99.3, 3002.0], [99.4, 3193.0], [99.5, 3246.0], [99.6, 3257.0], [99.7, 3257.0], [99.8, 3346.0], [99.9, 3432.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 80.0, "series": [{"data": [[600.0, 66.0], [700.0, 47.0], [800.0, 47.0], [900.0, 51.0], [1000.0, 57.0], [1100.0, 65.0], [1200.0, 50.0], [1300.0, 31.0], [1400.0, 24.0], [1500.0, 8.0], [1600.0, 7.0], [100.0, 4.0], [1700.0, 10.0], [1800.0, 3.0], [1900.0, 3.0], [2000.0, 1.0], [2300.0, 1.0], [2200.0, 2.0], [2500.0, 1.0], [2800.0, 1.0], [2700.0, 2.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [3200.0, 2.0], [200.0, 50.0], [3300.0, 1.0], [3400.0, 1.0], [300.0, 55.0], [400.0, 62.0], [500.0, 80.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 46.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 518.0, "series": [{"data": [[0.0, 171.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 518.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 46.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.87142857142857, "minX": 1.60383864E12, "maxY": 10.0, "series": [{"data": [[1.6038387E12, 9.87142857142857], [1.60383864E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038387E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 296.0, "minX": 1.0, "maxY": 1535.0, "series": [{"data": [[8.0, 1115.0], [4.0, 528.0], [2.0, 1004.0], [1.0, 926.0], [9.0, 296.0], [10.0, 872.1900826446266], [5.0, 563.0], [6.0, 1535.0], [3.0, 973.0], [7.0, 560.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 871.7142857142843]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2626.266666666667, "minX": 1.60383864E12, "maxY": 1022622.95, "series": [{"data": [[1.6038387E12, 813165.35], [1.60383864E12, 1022622.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6038387E12, 2626.266666666667], [1.60383864E12, 2896.766666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038387E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 859.5, "minX": 1.60383864E12, "maxY": 882.8181818181816, "series": [{"data": [[1.6038387E12, 859.5], [1.60383864E12, 882.8181818181816]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038387E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 858.2771428571427, "minX": 1.60383864E12, "maxY": 881.4935064935057, "series": [{"data": [[1.6038387E12, 858.2771428571427], [1.60383864E12, 881.4935064935057]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038387E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0257142857142857, "minX": 1.60383864E12, "maxY": 0.20779220779220764, "series": [{"data": [[1.6038387E12, 0.0257142857142857], [1.60383864E12, 0.20779220779220764]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038387E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 187.0, "minX": 1.60383864E12, "maxY": 3432.0, "series": [{"data": [[1.6038387E12, 3346.0], [1.60383864E12, 3432.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6038387E12, 229.31799983263016], [1.60383864E12, 202.635998711586]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6038387E12, 229.94980006694794], [1.60383864E12, 207.49960051536561]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6038387E12, 229.66899991631507], [1.60383864E12, 205.337999355793]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6038387E12, 197.0], [1.60383864E12, 187.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6038387E12, 841.0], [1.60383864E12, 779.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038387E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 517.0, "minX": 1.0, "maxY": 2341.5, "series": [{"data": [[2.0, 2341.5], [8.0, 1038.5], [9.0, 986.0], [10.0, 1041.5], [11.0, 1026.0], [12.0, 862.0], [13.0, 791.0], [14.0, 986.5], [15.0, 643.0], [16.0, 605.0], [1.0, 926.0], [17.0, 517.0], [18.0, 703.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 516.5, "minX": 1.0, "maxY": 2339.5, "series": [{"data": [[2.0, 2339.5], [8.0, 1036.5], [9.0, 986.0], [10.0, 1040.0], [11.0, 1025.0], [12.0, 860.5], [13.0, 791.0], [14.0, 985.0], [15.0, 643.0], [16.0, 604.5], [1.0, 925.0], [17.0, 516.5], [18.0, 703.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.666666666666667, "minX": 1.60383864E12, "maxY": 6.583333333333333, "series": [{"data": [[1.6038387E12, 5.666666666666667], [1.60383864E12, 6.583333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038387E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.833333333333333, "minX": 1.60383864E12, "maxY": 6.416666666666667, "series": [{"data": [[1.6038387E12, 5.833333333333333], [1.60383864E12, 6.416666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038387E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.833333333333333, "minX": 1.60383864E12, "maxY": 6.416666666666667, "series": [{"data": [[1.6038387E12, 5.833333333333333], [1.60383864E12, 6.416666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038387E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.833333333333333, "minX": 1.60383864E12, "maxY": 6.416666666666667, "series": [{"data": [[1.6038387E12, 5.833333333333333], [1.60383864E12, 6.416666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038387E12, "title": "Total Transactions Per Second"}},
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

