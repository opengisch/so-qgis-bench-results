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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 3411.0, "series": [{"data": [[0.0, 182.0], [0.1, 182.0], [0.2, 192.0], [0.3, 196.0], [0.4, 196.0], [0.5, 198.0], [0.6, 199.0], [0.7, 201.0], [0.8, 201.0], [0.9, 205.0], [1.0, 205.0], [1.1, 208.0], [1.2, 208.0], [1.3, 208.0], [1.4, 209.0], [1.5, 210.0], [1.6, 210.0], [1.7, 213.0], [1.8, 213.0], [1.9, 213.0], [2.0, 218.0], [2.1, 220.0], [2.2, 221.0], [2.3, 221.0], [2.4, 221.0], [2.5, 223.0], [2.6, 224.0], [2.7, 224.0], [2.8, 225.0], [2.9, 233.0], [3.0, 233.0], [3.1, 233.0], [3.2, 235.0], [3.3, 236.0], [3.4, 236.0], [3.5, 239.0], [3.6, 245.0], [3.7, 245.0], [3.8, 245.0], [3.9, 247.0], [4.0, 248.0], [4.1, 249.0], [4.2, 249.0], [4.3, 253.0], [4.4, 254.0], [4.5, 254.0], [4.6, 254.0], [4.7, 256.0], [4.8, 257.0], [4.9, 258.0], [5.0, 258.0], [5.1, 259.0], [5.2, 260.0], [5.3, 260.0], [5.4, 260.0], [5.5, 261.0], [5.6, 261.0], [5.7, 261.0], [5.8, 263.0], [5.9, 265.0], [6.0, 266.0], [6.1, 266.0], [6.2, 267.0], [6.3, 270.0], [6.4, 271.0], [6.5, 271.0], [6.6, 272.0], [6.7, 272.0], [6.8, 272.0], [6.9, 275.0], [7.0, 275.0], [7.1, 277.0], [7.2, 277.0], [7.3, 278.0], [7.4, 281.0], [7.5, 284.0], [7.6, 284.0], [7.7, 285.0], [7.8, 286.0], [7.9, 286.0], [8.0, 286.0], [8.1, 287.0], [8.2, 290.0], [8.3, 290.0], [8.4, 290.0], [8.5, 291.0], [8.6, 294.0], [8.7, 294.0], [8.8, 295.0], [8.9, 296.0], [9.0, 299.0], [9.1, 299.0], [9.2, 299.0], [9.3, 301.0], [9.4, 302.0], [9.5, 302.0], [9.6, 303.0], [9.7, 305.0], [9.8, 305.0], [9.9, 305.0], [10.0, 307.0], [10.1, 307.0], [10.2, 307.0], [10.3, 310.0], [10.4, 313.0], [10.5, 313.0], [10.6, 313.0], [10.7, 315.0], [10.8, 318.0], [10.9, 320.0], [11.0, 320.0], [11.1, 322.0], [11.2, 325.0], [11.3, 327.0], [11.4, 327.0], [11.5, 329.0], [11.6, 332.0], [11.7, 332.0], [11.8, 334.0], [11.9, 334.0], [12.0, 334.0], [12.1, 334.0], [12.2, 335.0], [12.3, 337.0], [12.4, 339.0], [12.5, 339.0], [12.6, 340.0], [12.7, 341.0], [12.8, 341.0], [12.9, 341.0], [13.0, 343.0], [13.1, 343.0], [13.2, 343.0], [13.3, 343.0], [13.4, 344.0], [13.5, 345.0], [13.6, 345.0], [13.7, 346.0], [13.8, 348.0], [13.9, 349.0], [14.0, 349.0], [14.1, 350.0], [14.2, 352.0], [14.3, 352.0], [14.4, 352.0], [14.5, 357.0], [14.6, 359.0], [14.7, 359.0], [14.8, 359.0], [14.9, 359.0], [15.0, 359.0], [15.1, 359.0], [15.2, 360.0], [15.3, 364.0], [15.4, 364.0], [15.5, 364.0], [15.6, 364.0], [15.7, 365.0], [15.8, 367.0], [15.9, 367.0], [16.0, 370.0], [16.1, 370.0], [16.2, 370.0], [16.3, 370.0], [16.4, 372.0], [16.5, 373.0], [16.6, 373.0], [16.7, 373.0], [16.8, 373.0], [16.9, 374.0], [17.0, 374.0], [17.1, 374.0], [17.2, 376.0], [17.3, 376.0], [17.4, 376.0], [17.5, 376.0], [17.6, 377.0], [17.7, 377.0], [17.8, 377.0], [17.9, 378.0], [18.0, 379.0], [18.1, 380.0], [18.2, 380.0], [18.3, 381.0], [18.4, 383.0], [18.5, 383.0], [18.6, 384.0], [18.7, 385.0], [18.8, 385.0], [18.9, 385.0], [19.0, 386.0], [19.1, 386.0], [19.2, 386.0], [19.3, 386.0], [19.4, 387.0], [19.5, 388.0], [19.6, 390.0], [19.7, 390.0], [19.8, 391.0], [19.9, 393.0], [20.0, 395.0], [20.1, 395.0], [20.2, 395.0], [20.3, 399.0], [20.4, 399.0], [20.5, 399.0], [20.6, 400.0], [20.7, 403.0], [20.8, 403.0], [20.9, 404.0], [21.0, 404.0], [21.1, 405.0], [21.2, 405.0], [21.3, 408.0], [21.4, 411.0], [21.5, 415.0], [21.6, 415.0], [21.7, 415.0], [21.8, 416.0], [21.9, 416.0], [22.0, 416.0], [22.1, 420.0], [22.2, 420.0], [22.3, 420.0], [22.4, 423.0], [22.5, 424.0], [22.6, 424.0], [22.7, 424.0], [22.8, 425.0], [22.9, 426.0], [23.0, 434.0], [23.1, 434.0], [23.2, 435.0], [23.3, 445.0], [23.4, 445.0], [23.5, 446.0], [23.6, 447.0], [23.7, 447.0], [23.8, 447.0], [23.9, 449.0], [24.0, 451.0], [24.1, 452.0], [24.2, 452.0], [24.3, 456.0], [24.4, 458.0], [24.5, 458.0], [24.6, 458.0], [24.7, 458.0], [24.8, 465.0], [24.9, 465.0], [25.0, 465.0], [25.1, 468.0], [25.2, 468.0], [25.3, 468.0], [25.4, 470.0], [25.5, 470.0], [25.6, 471.0], [25.7, 471.0], [25.8, 479.0], [25.9, 479.0], [26.0, 479.0], [26.1, 479.0], [26.2, 479.0], [26.3, 481.0], [26.4, 483.0], [26.5, 483.0], [26.6, 484.0], [26.7, 487.0], [26.8, 487.0], [26.9, 494.0], [27.0, 497.0], [27.1, 498.0], [27.2, 498.0], [27.3, 499.0], [27.4, 499.0], [27.5, 502.0], [27.6, 502.0], [27.7, 509.0], [27.8, 511.0], [27.9, 513.0], [28.0, 513.0], [28.1, 513.0], [28.2, 514.0], [28.3, 514.0], [28.4, 514.0], [28.5, 515.0], [28.6, 515.0], [28.7, 515.0], [28.8, 518.0], [28.9, 518.0], [29.0, 519.0], [29.1, 519.0], [29.2, 523.0], [29.3, 525.0], [29.4, 527.0], [29.5, 527.0], [29.6, 529.0], [29.7, 531.0], [29.8, 532.0], [29.9, 532.0], [30.0, 532.0], [30.1, 533.0], [30.2, 533.0], [30.3, 533.0], [30.4, 534.0], [30.5, 534.0], [30.6, 534.0], [30.7, 535.0], [30.8, 536.0], [30.9, 538.0], [31.0, 538.0], [31.1, 539.0], [31.2, 539.0], [31.3, 540.0], [31.4, 540.0], [31.5, 544.0], [31.6, 547.0], [31.7, 547.0], [31.8, 548.0], [31.9, 548.0], [32.0, 549.0], [32.1, 549.0], [32.2, 549.0], [32.3, 550.0], [32.4, 550.0], [32.5, 550.0], [32.6, 551.0], [32.7, 552.0], [32.8, 554.0], [32.9, 554.0], [33.0, 555.0], [33.1, 560.0], [33.2, 561.0], [33.3, 561.0], [33.4, 562.0], [33.5, 564.0], [33.6, 564.0], [33.7, 564.0], [33.8, 564.0], [33.9, 564.0], [34.0, 564.0], [34.1, 565.0], [34.2, 569.0], [34.3, 569.0], [34.4, 569.0], [34.5, 570.0], [34.6, 570.0], [34.7, 570.0], [34.8, 570.0], [34.9, 575.0], [35.0, 575.0], [35.1, 575.0], [35.2, 576.0], [35.3, 577.0], [35.4, 578.0], [35.5, 578.0], [35.6, 578.0], [35.7, 579.0], [35.8, 582.0], [35.9, 582.0], [36.0, 583.0], [36.1, 583.0], [36.2, 585.0], [36.3, 585.0], [36.4, 586.0], [36.5, 588.0], [36.6, 588.0], [36.7, 588.0], [36.8, 591.0], [36.9, 593.0], [37.0, 593.0], [37.1, 595.0], [37.2, 599.0], [37.3, 600.0], [37.4, 600.0], [37.5, 600.0], [37.6, 601.0], [37.7, 601.0], [37.8, 601.0], [37.9, 602.0], [38.0, 606.0], [38.1, 606.0], [38.2, 606.0], [38.3, 609.0], [38.4, 610.0], [38.5, 610.0], [38.6, 610.0], [38.7, 610.0], [38.8, 613.0], [38.9, 613.0], [39.0, 615.0], [39.1, 617.0], [39.2, 619.0], [39.3, 619.0], [39.4, 621.0], [39.5, 622.0], [39.6, 622.0], [39.7, 622.0], [39.8, 623.0], [39.9, 624.0], [40.0, 625.0], [40.1, 625.0], [40.2, 625.0], [40.3, 630.0], [40.4, 630.0], [40.5, 634.0], [40.6, 637.0], [40.7, 637.0], [40.8, 637.0], [40.9, 641.0], [41.0, 642.0], [41.1, 647.0], [41.2, 647.0], [41.3, 647.0], [41.4, 648.0], [41.5, 651.0], [41.6, 651.0], [41.7, 654.0], [41.8, 656.0], [41.9, 656.0], [42.0, 658.0], [42.1, 658.0], [42.2, 661.0], [42.3, 661.0], [42.4, 668.0], [42.5, 671.0], [42.6, 675.0], [42.7, 675.0], [42.8, 677.0], [42.9, 677.0], [43.0, 679.0], [43.1, 679.0], [43.2, 680.0], [43.3, 681.0], [43.4, 681.0], [43.5, 682.0], [43.6, 684.0], [43.7, 685.0], [43.8, 685.0], [43.9, 687.0], [44.0, 688.0], [44.1, 690.0], [44.2, 690.0], [44.3, 693.0], [44.4, 698.0], [44.5, 698.0], [44.6, 698.0], [44.7, 699.0], [44.8, 699.0], [44.9, 699.0], [45.0, 699.0], [45.1, 700.0], [45.2, 701.0], [45.3, 701.0], [45.4, 710.0], [45.5, 714.0], [45.6, 717.0], [45.7, 717.0], [45.8, 718.0], [45.9, 719.0], [46.0, 721.0], [46.1, 721.0], [46.2, 721.0], [46.3, 723.0], [46.4, 724.0], [46.5, 724.0], [46.6, 724.0], [46.7, 724.0], [46.8, 724.0], [46.9, 726.0], [47.0, 727.0], [47.1, 728.0], [47.2, 728.0], [47.3, 735.0], [47.4, 741.0], [47.5, 743.0], [47.6, 743.0], [47.7, 744.0], [47.8, 747.0], [47.9, 748.0], [48.0, 748.0], [48.1, 762.0], [48.2, 763.0], [48.3, 765.0], [48.4, 765.0], [48.5, 768.0], [48.6, 770.0], [48.7, 770.0], [48.8, 773.0], [48.9, 774.0], [49.0, 774.0], [49.1, 774.0], [49.2, 775.0], [49.3, 777.0], [49.4, 778.0], [49.5, 778.0], [49.6, 780.0], [49.7, 780.0], [49.8, 786.0], [49.9, 786.0], [50.0, 790.0], [50.1, 791.0], [50.2, 791.0], [50.3, 800.0], [50.4, 803.0], [50.5, 805.0], [50.6, 805.0], [50.7, 805.0], [50.8, 806.0], [50.9, 806.0], [51.0, 806.0], [51.1, 808.0], [51.2, 810.0], [51.3, 813.0], [51.4, 813.0], [51.5, 815.0], [51.6, 816.0], [51.7, 816.0], [51.8, 818.0], [51.9, 819.0], [52.0, 819.0], [52.1, 819.0], [52.2, 827.0], [52.3, 829.0], [52.4, 831.0], [52.5, 831.0], [52.6, 831.0], [52.7, 831.0], [52.8, 833.0], [52.9, 833.0], [53.0, 834.0], [53.1, 836.0], [53.2, 838.0], [53.3, 838.0], [53.4, 838.0], [53.5, 840.0], [53.6, 840.0], [53.7, 841.0], [53.8, 845.0], [53.9, 846.0], [54.0, 846.0], [54.1, 853.0], [54.2, 854.0], [54.3, 856.0], [54.4, 856.0], [54.5, 857.0], [54.6, 858.0], [54.7, 862.0], [54.8, 862.0], [54.9, 864.0], [55.0, 864.0], [55.1, 864.0], [55.2, 869.0], [55.3, 870.0], [55.4, 871.0], [55.5, 871.0], [55.6, 874.0], [55.7, 875.0], [55.8, 884.0], [55.9, 884.0], [56.0, 891.0], [56.1, 892.0], [56.2, 893.0], [56.3, 893.0], [56.4, 895.0], [56.5, 898.0], [56.6, 898.0], [56.7, 898.0], [56.8, 899.0], [56.9, 902.0], [57.0, 902.0], [57.1, 904.0], [57.2, 905.0], [57.3, 906.0], [57.4, 906.0], [57.5, 907.0], [57.6, 909.0], [57.7, 909.0], [57.8, 909.0], [57.9, 910.0], [58.0, 911.0], [58.1, 911.0], [58.2, 911.0], [58.3, 912.0], [58.4, 914.0], [58.5, 914.0], [58.6, 919.0], [58.7, 919.0], [58.8, 920.0], [58.9, 920.0], [59.0, 920.0], [59.1, 921.0], [59.2, 921.0], [59.3, 921.0], [59.4, 921.0], [59.5, 922.0], [59.6, 922.0], [59.7, 922.0], [59.8, 923.0], [59.9, 929.0], [60.0, 930.0], [60.1, 930.0], [60.2, 931.0], [60.3, 931.0], [60.4, 931.0], [60.5, 931.0], [60.6, 931.0], [60.7, 933.0], [60.8, 933.0], [60.9, 934.0], [61.0, 935.0], [61.1, 935.0], [61.2, 935.0], [61.3, 939.0], [61.4, 943.0], [61.5, 945.0], [61.6, 945.0], [61.7, 947.0], [61.8, 947.0], [61.9, 947.0], [62.0, 948.0], [62.1, 949.0], [62.2, 950.0], [62.3, 950.0], [62.4, 952.0], [62.5, 953.0], [62.6, 953.0], [62.7, 953.0], [62.8, 954.0], [62.9, 955.0], [63.0, 957.0], [63.1, 957.0], [63.2, 959.0], [63.3, 960.0], [63.4, 960.0], [63.5, 960.0], [63.6, 962.0], [63.7, 963.0], [63.8, 963.0], [63.9, 964.0], [64.0, 965.0], [64.1, 966.0], [64.2, 966.0], [64.3, 967.0], [64.4, 972.0], [64.5, 972.0], [64.6, 972.0], [64.7, 972.0], [64.8, 974.0], [64.9, 975.0], [65.0, 975.0], [65.1, 975.0], [65.2, 976.0], [65.3, 976.0], [65.4, 977.0], [65.5, 979.0], [65.6, 982.0], [65.7, 982.0], [65.8, 982.0], [65.9, 986.0], [66.0, 988.0], [66.1, 988.0], [66.2, 993.0], [66.3, 996.0], [66.4, 998.0], [66.5, 998.0], [66.6, 1001.0], [66.7, 1001.0], [66.8, 1001.0], [66.9, 1004.0], [67.0, 1005.0], [67.1, 1006.0], [67.2, 1006.0], [67.3, 1007.0], [67.4, 1010.0], [67.5, 1010.0], [67.6, 1010.0], [67.7, 1011.0], [67.8, 1014.0], [67.9, 1014.0], [68.0, 1014.0], [68.1, 1014.0], [68.2, 1015.0], [68.3, 1020.0], [68.4, 1020.0], [68.5, 1021.0], [68.6, 1021.0], [68.7, 1021.0], [68.8, 1022.0], [68.9, 1025.0], [69.0, 1026.0], [69.1, 1026.0], [69.2, 1027.0], [69.3, 1031.0], [69.4, 1032.0], [69.5, 1032.0], [69.6, 1039.0], [69.7, 1042.0], [69.8, 1043.0], [69.9, 1043.0], [70.0, 1043.0], [70.1, 1044.0], [70.2, 1044.0], [70.3, 1045.0], [70.4, 1047.0], [70.5, 1047.0], [70.6, 1047.0], [70.7, 1049.0], [70.8, 1050.0], [70.9, 1052.0], [71.0, 1052.0], [71.1, 1052.0], [71.2, 1053.0], [71.3, 1055.0], [71.4, 1055.0], [71.5, 1065.0], [71.6, 1065.0], [71.7, 1065.0], [71.8, 1067.0], [71.9, 1069.0], [72.0, 1072.0], [72.1, 1072.0], [72.2, 1074.0], [72.3, 1076.0], [72.4, 1077.0], [72.5, 1077.0], [72.6, 1079.0], [72.7, 1085.0], [72.8, 1086.0], [72.9, 1086.0], [73.0, 1088.0], [73.1, 1089.0], [73.2, 1091.0], [73.3, 1091.0], [73.4, 1092.0], [73.5, 1093.0], [73.6, 1093.0], [73.7, 1097.0], [73.8, 1097.0], [73.9, 1097.0], [74.0, 1097.0], [74.1, 1097.0], [74.2, 1100.0], [74.3, 1104.0], [74.4, 1104.0], [74.5, 1105.0], [74.6, 1105.0], [74.7, 1105.0], [74.8, 1105.0], [74.9, 1106.0], [75.0, 1108.0], [75.1, 1108.0], [75.2, 1108.0], [75.3, 1111.0], [75.4, 1114.0], [75.5, 1114.0], [75.6, 1116.0], [75.7, 1116.0], [75.8, 1117.0], [75.9, 1117.0], [76.0, 1119.0], [76.1, 1120.0], [76.2, 1123.0], [76.3, 1123.0], [76.4, 1128.0], [76.5, 1131.0], [76.6, 1132.0], [76.7, 1132.0], [76.8, 1136.0], [76.9, 1137.0], [77.0, 1137.0], [77.1, 1139.0], [77.2, 1141.0], [77.3, 1143.0], [77.4, 1143.0], [77.5, 1144.0], [77.6, 1145.0], [77.7, 1149.0], [77.8, 1149.0], [77.9, 1149.0], [78.0, 1154.0], [78.1, 1155.0], [78.2, 1155.0], [78.3, 1161.0], [78.4, 1164.0], [78.5, 1164.0], [78.6, 1164.0], [78.7, 1166.0], [78.8, 1168.0], [78.9, 1168.0], [79.0, 1173.0], [79.1, 1173.0], [79.2, 1177.0], [79.3, 1177.0], [79.4, 1178.0], [79.5, 1179.0], [79.6, 1180.0], [79.7, 1180.0], [79.8, 1182.0], [79.9, 1182.0], [80.0, 1184.0], [80.1, 1184.0], [80.2, 1184.0], [80.3, 1185.0], [80.4, 1185.0], [80.5, 1186.0], [80.6, 1190.0], [80.7, 1191.0], [80.8, 1191.0], [80.9, 1192.0], [81.0, 1193.0], [81.1, 1193.0], [81.2, 1193.0], [81.3, 1198.0], [81.4, 1199.0], [81.5, 1199.0], [81.6, 1199.0], [81.7, 1199.0], [81.8, 1202.0], [81.9, 1202.0], [82.0, 1203.0], [82.1, 1204.0], [82.2, 1207.0], [82.3, 1207.0], [82.4, 1207.0], [82.5, 1208.0], [82.6, 1208.0], [82.7, 1208.0], [82.8, 1209.0], [82.9, 1212.0], [83.0, 1215.0], [83.1, 1215.0], [83.2, 1216.0], [83.3, 1217.0], [83.4, 1217.0], [83.5, 1220.0], [83.6, 1221.0], [83.7, 1228.0], [83.8, 1228.0], [83.9, 1232.0], [84.0, 1233.0], [84.1, 1236.0], [84.2, 1236.0], [84.3, 1237.0], [84.4, 1243.0], [84.5, 1243.0], [84.6, 1243.0], [84.7, 1243.0], [84.8, 1245.0], [84.9, 1247.0], [85.0, 1247.0], [85.1, 1247.0], [85.2, 1247.0], [85.3, 1247.0], [85.4, 1249.0], [85.5, 1249.0], [85.6, 1250.0], [85.7, 1250.0], [85.8, 1252.0], [85.9, 1255.0], [86.0, 1259.0], [86.1, 1259.0], [86.2, 1260.0], [86.3, 1264.0], [86.4, 1265.0], [86.5, 1265.0], [86.6, 1267.0], [86.7, 1269.0], [86.8, 1269.0], [86.9, 1269.0], [87.0, 1274.0], [87.1, 1277.0], [87.2, 1277.0], [87.3, 1284.0], [87.4, 1294.0], [87.5, 1294.0], [87.6, 1294.0], [87.7, 1300.0], [87.8, 1302.0], [87.9, 1308.0], [88.0, 1308.0], [88.1, 1309.0], [88.2, 1316.0], [88.3, 1317.0], [88.4, 1317.0], [88.5, 1322.0], [88.6, 1324.0], [88.7, 1324.0], [88.8, 1339.0], [88.9, 1344.0], [89.0, 1345.0], [89.1, 1345.0], [89.2, 1346.0], [89.3, 1347.0], [89.4, 1360.0], [89.5, 1360.0], [89.6, 1361.0], [89.7, 1363.0], [89.8, 1365.0], [89.9, 1365.0], [90.0, 1365.0], [90.1, 1367.0], [90.2, 1367.0], [90.3, 1371.0], [90.4, 1376.0], [90.5, 1378.0], [90.6, 1378.0], [90.7, 1383.0], [90.8, 1385.0], [90.9, 1391.0], [91.0, 1391.0], [91.1, 1393.0], [91.2, 1395.0], [91.3, 1402.0], [91.4, 1402.0], [91.5, 1409.0], [91.6, 1418.0], [91.7, 1418.0], [91.8, 1438.0], [91.9, 1444.0], [92.0, 1454.0], [92.1, 1454.0], [92.2, 1458.0], [92.3, 1462.0], [92.4, 1464.0], [92.5, 1464.0], [92.6, 1464.0], [92.7, 1472.0], [92.8, 1476.0], [92.9, 1476.0], [93.0, 1485.0], [93.1, 1498.0], [93.2, 1523.0], [93.3, 1523.0], [93.4, 1526.0], [93.5, 1530.0], [93.6, 1530.0], [93.7, 1533.0], [93.8, 1536.0], [93.9, 1568.0], [94.0, 1568.0], [94.1, 1576.0], [94.2, 1578.0], [94.3, 1582.0], [94.4, 1582.0], [94.5, 1596.0], [94.6, 1611.0], [94.7, 1612.0], [94.8, 1612.0], [94.9, 1616.0], [95.0, 1630.0], [95.1, 1630.0], [95.2, 1665.0], [95.3, 1672.0], [95.4, 1682.0], [95.5, 1682.0], [95.6, 1684.0], [95.7, 1688.0], [95.8, 1709.0], [95.9, 1709.0], [96.0, 1747.0], [96.1, 1782.0], [96.2, 1790.0], [96.3, 1790.0], [96.4, 1817.0], [96.5, 1828.0], [96.6, 1833.0], [96.7, 1833.0], [96.8, 1842.0], [96.9, 1870.0], [97.0, 1870.0], [97.1, 1907.0], [97.2, 1935.0], [97.3, 1936.0], [97.4, 1936.0], [97.5, 1960.0], [97.6, 1995.0], [97.7, 2037.0], [97.8, 2037.0], [97.9, 2056.0], [98.0, 2074.0], [98.1, 2269.0], [98.2, 2269.0], [98.3, 2464.0], [98.4, 2659.0], [98.5, 2659.0], [98.6, 2695.0], [98.7, 2842.0], [98.8, 2859.0], [98.9, 2859.0], [99.0, 3021.0], [99.1, 3024.0], [99.2, 3068.0], [99.3, 3068.0], [99.4, 3081.0], [99.5, 3145.0], [99.6, 3322.0], [99.7, 3322.0], [99.8, 3399.0], [99.9, 3411.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 83.0, "series": [{"data": [[600.0, 57.0], [700.0, 38.0], [800.0, 49.0], [900.0, 71.0], [1000.0, 56.0], [1100.0, 56.0], [1200.0, 43.0], [1300.0, 27.0], [1400.0, 14.0], [1500.0, 10.0], [1600.0, 9.0], [100.0, 5.0], [1700.0, 4.0], [1800.0, 5.0], [1900.0, 5.0], [2000.0, 3.0], [2200.0, 1.0], [2400.0, 1.0], [2600.0, 2.0], [2800.0, 2.0], [3000.0, 4.0], [3100.0, 1.0], [200.0, 63.0], [3300.0, 2.0], [3400.0, 1.0], [300.0, 83.0], [400.0, 51.0], [500.0, 72.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 483.0, "series": [{"data": [[0.0, 202.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 483.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 50.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.8840206185567, "minX": 1.60237086E12, "maxY": 10.0, "series": [{"data": [[1.60237086E12, 10.0], [1.60237092E12, 9.8840206185567]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237092E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 370.0, "minX": 1.0, "maxY": 1004.0, "series": [{"data": [[8.0, 622.0], [4.0, 654.0], [2.0, 1001.0], [1.0, 906.0], [9.0, 380.0], [10.0, 845.5220385674936], [5.0, 547.0], [6.0, 370.0], [3.0, 1004.0], [7.0, 540.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 843.3646258503405]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2611.8333333333335, "minX": 1.60237086E12, "maxY": 922949.4, "series": [{"data": [[1.60237086E12, 912808.8166666667], [1.60237092E12, 922949.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237086E12, 2611.8333333333335], [1.60237092E12, 2911.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237092E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 829.2268041237115, "minX": 1.60237086E12, "maxY": 859.172910662824, "series": [{"data": [[1.60237086E12, 859.172910662824], [1.60237092E12, 829.2268041237115]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237092E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 828.0876288659792, "minX": 1.60237086E12, "maxY": 857.9567723342934, "series": [{"data": [[1.60237086E12, 857.9567723342934], [1.60237092E12, 828.0876288659792]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237092E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.033505154639175264, "minX": 1.60237086E12, "maxY": 0.3054755043227667, "series": [{"data": [[1.60237086E12, 0.3054755043227667], [1.60237092E12, 0.033505154639175264]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237092E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.60237086E12, "maxY": 3411.0, "series": [{"data": [[1.60237086E12, 3411.0], [1.60237092E12, 3322.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237086E12, 201.52799966812134], [1.60237092E12, 201.5069993507862]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237086E12, 202.78080013275147], [1.60237092E12, 203.9577002596855]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237086E12, 202.22399983406066], [1.60237092E12, 202.8684996753931]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237086E12, 182.0], [1.60237092E12, 192.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237086E12, 744.0], [1.60237092E12, 819.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237092E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 531.0, "minX": 1.0, "maxY": 2464.0, "series": [{"data": [[8.0, 931.0], [2.0, 953.5], [9.0, 1114.0], [10.0, 948.5], [11.0, 928.0], [12.0, 938.0], [13.0, 894.5], [14.0, 734.0], [15.0, 577.0], [1.0, 2464.0], [17.0, 605.5], [21.0, 531.0], [6.0, 1194.5], [7.0, 988.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 531.0, "minX": 1.0, "maxY": 2461.0, "series": [{"data": [[8.0, 930.5], [2.0, 953.5], [9.0, 1109.0], [10.0, 948.0], [11.0, 927.0], [12.0, 937.0], [13.0, 893.0], [14.0, 732.5], [15.0, 576.0], [1.0, 2461.0], [17.0, 605.5], [21.0, 531.0], [6.0, 1192.5], [7.0, 986.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.95, "minX": 1.60237086E12, "maxY": 6.3, "series": [{"data": [[1.60237086E12, 5.95], [1.60237092E12, 6.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237092E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.783333333333333, "minX": 1.60237086E12, "maxY": 6.466666666666667, "series": [{"data": [[1.60237086E12, 5.783333333333333], [1.60237092E12, 6.466666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237092E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.783333333333333, "minX": 1.60237086E12, "maxY": 6.466666666666667, "series": [{"data": [[1.60237086E12, 5.783333333333333], [1.60237092E12, 6.466666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237092E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.783333333333333, "minX": 1.60237086E12, "maxY": 6.466666666666667, "series": [{"data": [[1.60237086E12, 5.783333333333333], [1.60237092E12, 6.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237092E12, "title": "Total Transactions Per Second"}},
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

