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
        data: {"result": {"minY": 185.0, "minX": 0.0, "maxY": 3900.0, "series": [{"data": [[0.0, 185.0], [0.1, 185.0], [0.2, 186.0], [0.3, 190.0], [0.4, 190.0], [0.5, 191.0], [0.6, 192.0], [0.7, 193.0], [0.8, 193.0], [0.9, 195.0], [1.0, 197.0], [1.1, 199.0], [1.2, 199.0], [1.3, 204.0], [1.4, 206.0], [1.5, 208.0], [1.6, 208.0], [1.7, 208.0], [1.8, 216.0], [1.9, 216.0], [2.0, 220.0], [2.1, 222.0], [2.2, 231.0], [2.3, 231.0], [2.4, 232.0], [2.5, 238.0], [2.6, 240.0], [2.7, 240.0], [2.8, 244.0], [2.9, 245.0], [3.0, 252.0], [3.1, 252.0], [3.2, 252.0], [3.3, 253.0], [3.4, 253.0], [3.5, 253.0], [3.6, 254.0], [3.7, 257.0], [3.8, 257.0], [3.9, 257.0], [4.0, 258.0], [4.1, 260.0], [4.2, 260.0], [4.3, 260.0], [4.4, 261.0], [4.5, 263.0], [4.6, 263.0], [4.7, 263.0], [4.8, 263.0], [4.9, 265.0], [5.0, 265.0], [5.1, 267.0], [5.2, 267.0], [5.3, 267.0], [5.4, 271.0], [5.5, 274.0], [5.6, 275.0], [5.7, 275.0], [5.8, 275.0], [5.9, 276.0], [6.0, 276.0], [6.1, 276.0], [6.2, 276.0], [6.3, 277.0], [6.4, 277.0], [6.5, 277.0], [6.6, 278.0], [6.7, 280.0], [6.8, 280.0], [6.9, 280.0], [7.0, 283.0], [7.1, 286.0], [7.2, 286.0], [7.3, 287.0], [7.4, 288.0], [7.5, 288.0], [7.6, 288.0], [7.7, 289.0], [7.8, 291.0], [7.9, 291.0], [8.0, 291.0], [8.1, 291.0], [8.2, 291.0], [8.3, 292.0], [8.4, 292.0], [8.5, 293.0], [8.6, 296.0], [8.7, 296.0], [8.8, 296.0], [8.9, 296.0], [9.0, 299.0], [9.1, 299.0], [9.2, 304.0], [9.3, 305.0], [9.4, 306.0], [9.5, 306.0], [9.6, 306.0], [9.7, 307.0], [9.8, 310.0], [9.9, 310.0], [10.0, 312.0], [10.1, 321.0], [10.2, 321.0], [10.3, 321.0], [10.4, 322.0], [10.5, 323.0], [10.6, 323.0], [10.7, 325.0], [10.8, 325.0], [10.9, 326.0], [11.0, 326.0], [11.1, 329.0], [11.2, 331.0], [11.3, 333.0], [11.4, 333.0], [11.5, 334.0], [11.6, 339.0], [11.7, 339.0], [11.8, 343.0], [11.9, 343.0], [12.0, 346.0], [12.1, 346.0], [12.2, 346.0], [12.3, 349.0], [12.4, 350.0], [12.5, 350.0], [12.6, 350.0], [12.7, 352.0], [12.8, 353.0], [12.9, 353.0], [13.0, 355.0], [13.1, 355.0], [13.2, 357.0], [13.3, 357.0], [13.4, 358.0], [13.5, 359.0], [13.6, 359.0], [13.7, 359.0], [13.8, 362.0], [13.9, 363.0], [14.0, 363.0], [14.1, 364.0], [14.2, 364.0], [14.3, 369.0], [14.4, 369.0], [14.5, 371.0], [14.6, 371.0], [14.7, 373.0], [14.8, 373.0], [14.9, 373.0], [15.0, 374.0], [15.1, 374.0], [15.2, 375.0], [15.3, 377.0], [15.4, 378.0], [15.5, 378.0], [15.6, 379.0], [15.7, 379.0], [15.8, 380.0], [15.9, 380.0], [16.0, 380.0], [16.1, 380.0], [16.2, 383.0], [16.3, 383.0], [16.4, 387.0], [16.5, 388.0], [16.6, 389.0], [16.7, 389.0], [16.8, 391.0], [16.9, 392.0], [17.0, 392.0], [17.1, 392.0], [17.2, 393.0], [17.3, 393.0], [17.4, 393.0], [17.5, 393.0], [17.6, 396.0], [17.7, 396.0], [17.8, 396.0], [17.9, 396.0], [18.0, 397.0], [18.1, 399.0], [18.2, 399.0], [18.3, 400.0], [18.4, 400.0], [18.5, 400.0], [18.6, 401.0], [18.7, 403.0], [18.8, 404.0], [18.9, 404.0], [19.0, 404.0], [19.1, 407.0], [19.2, 409.0], [19.3, 409.0], [19.4, 410.0], [19.5, 410.0], [19.6, 410.0], [19.7, 410.0], [19.8, 412.0], [19.9, 413.0], [20.0, 415.0], [20.1, 415.0], [20.2, 415.0], [20.3, 415.0], [20.4, 415.0], [20.5, 417.0], [20.6, 418.0], [20.7, 421.0], [20.8, 421.0], [20.9, 424.0], [21.0, 425.0], [21.1, 425.0], [21.2, 425.0], [21.3, 425.0], [21.4, 434.0], [21.5, 434.0], [21.6, 434.0], [21.7, 435.0], [21.8, 438.0], [21.9, 438.0], [22.0, 440.0], [22.1, 446.0], [22.2, 447.0], [22.3, 447.0], [22.4, 448.0], [22.5, 449.0], [22.6, 450.0], [22.7, 450.0], [22.8, 451.0], [22.9, 454.0], [23.0, 455.0], [23.1, 455.0], [23.2, 455.0], [23.3, 458.0], [23.4, 458.0], [23.5, 461.0], [23.6, 462.0], [23.7, 463.0], [23.8, 463.0], [23.9, 469.0], [24.0, 469.0], [24.1, 472.0], [24.2, 472.0], [24.3, 477.0], [24.4, 479.0], [24.5, 479.0], [24.6, 479.0], [24.7, 484.0], [24.8, 491.0], [24.9, 492.0], [25.0, 492.0], [25.1, 495.0], [25.2, 497.0], [25.3, 497.0], [25.4, 499.0], [25.5, 499.0], [25.6, 500.0], [25.7, 500.0], [25.8, 504.0], [25.9, 505.0], [26.0, 510.0], [26.1, 510.0], [26.2, 511.0], [26.3, 512.0], [26.4, 512.0], [26.5, 512.0], [26.6, 516.0], [26.7, 518.0], [26.8, 518.0], [26.9, 518.0], [27.0, 519.0], [27.1, 521.0], [27.2, 521.0], [27.3, 521.0], [27.4, 521.0], [27.5, 525.0], [27.6, 525.0], [27.7, 526.0], [27.8, 528.0], [27.9, 532.0], [28.0, 532.0], [28.1, 534.0], [28.2, 534.0], [28.3, 536.0], [28.4, 536.0], [28.5, 538.0], [28.6, 539.0], [28.7, 539.0], [28.8, 540.0], [28.9, 540.0], [29.0, 542.0], [29.1, 542.0], [29.2, 543.0], [29.3, 544.0], [29.4, 547.0], [29.5, 547.0], [29.6, 547.0], [29.7, 547.0], [29.8, 549.0], [29.9, 549.0], [30.0, 549.0], [30.1, 550.0], [30.2, 550.0], [30.3, 552.0], [30.4, 552.0], [30.5, 557.0], [30.6, 557.0], [30.7, 558.0], [30.8, 561.0], [30.9, 565.0], [31.0, 565.0], [31.1, 566.0], [31.2, 566.0], [31.3, 566.0], [31.4, 566.0], [31.5, 566.0], [31.6, 568.0], [31.7, 568.0], [31.8, 569.0], [31.9, 570.0], [32.0, 572.0], [32.1, 572.0], [32.2, 572.0], [32.3, 572.0], [32.4, 572.0], [32.5, 572.0], [32.6, 573.0], [32.7, 573.0], [32.8, 574.0], [32.9, 574.0], [33.0, 575.0], [33.1, 575.0], [33.2, 576.0], [33.3, 576.0], [33.4, 576.0], [33.5, 577.0], [33.6, 577.0], [33.7, 579.0], [33.8, 579.0], [33.9, 580.0], [34.0, 580.0], [34.1, 583.0], [34.2, 583.0], [34.3, 586.0], [34.4, 586.0], [34.5, 587.0], [34.6, 588.0], [34.7, 591.0], [34.8, 591.0], [34.9, 593.0], [35.0, 595.0], [35.1, 595.0], [35.2, 598.0], [35.3, 599.0], [35.4, 600.0], [35.5, 600.0], [35.6, 601.0], [35.7, 602.0], [35.8, 605.0], [35.9, 605.0], [36.0, 606.0], [36.1, 609.0], [36.2, 610.0], [36.3, 610.0], [36.4, 610.0], [36.5, 612.0], [36.6, 612.0], [36.7, 612.0], [36.8, 614.0], [36.9, 615.0], [37.0, 615.0], [37.1, 616.0], [37.2, 617.0], [37.3, 619.0], [37.4, 619.0], [37.5, 619.0], [37.6, 620.0], [37.7, 621.0], [37.8, 621.0], [37.9, 623.0], [38.0, 624.0], [38.1, 624.0], [38.2, 624.0], [38.3, 624.0], [38.4, 625.0], [38.5, 625.0], [38.6, 630.0], [38.7, 631.0], [38.8, 633.0], [38.9, 633.0], [39.0, 636.0], [39.1, 636.0], [39.2, 640.0], [39.3, 640.0], [39.4, 641.0], [39.5, 642.0], [39.6, 643.0], [39.7, 643.0], [39.8, 646.0], [39.9, 648.0], [40.0, 648.0], [40.1, 648.0], [40.2, 651.0], [40.3, 651.0], [40.4, 651.0], [40.5, 653.0], [40.6, 655.0], [40.7, 656.0], [40.8, 656.0], [40.9, 658.0], [41.0, 659.0], [41.1, 662.0], [41.2, 662.0], [41.3, 667.0], [41.4, 668.0], [41.5, 670.0], [41.6, 670.0], [41.7, 672.0], [41.8, 672.0], [41.9, 672.0], [42.0, 673.0], [42.1, 674.0], [42.2, 675.0], [42.3, 675.0], [42.4, 675.0], [42.5, 675.0], [42.6, 677.0], [42.7, 677.0], [42.8, 679.0], [42.9, 680.0], [43.0, 681.0], [43.1, 681.0], [43.2, 681.0], [43.3, 682.0], [43.4, 682.0], [43.5, 685.0], [43.6, 687.0], [43.7, 688.0], [43.8, 688.0], [43.9, 688.0], [44.0, 688.0], [44.1, 689.0], [44.2, 689.0], [44.3, 696.0], [44.4, 696.0], [44.5, 697.0], [44.6, 697.0], [44.7, 697.0], [44.8, 698.0], [44.9, 703.0], [45.0, 703.0], [45.1, 703.0], [45.2, 705.0], [45.3, 705.0], [45.4, 705.0], [45.5, 706.0], [45.6, 706.0], [45.7, 706.0], [45.8, 708.0], [45.9, 712.0], [46.0, 714.0], [46.1, 714.0], [46.2, 715.0], [46.3, 715.0], [46.4, 716.0], [46.5, 716.0], [46.6, 717.0], [46.7, 717.0], [46.8, 717.0], [46.9, 721.0], [47.0, 725.0], [47.1, 725.0], [47.2, 725.0], [47.3, 725.0], [47.4, 728.0], [47.5, 730.0], [47.6, 730.0], [47.7, 731.0], [47.8, 732.0], [47.9, 733.0], [48.0, 733.0], [48.1, 734.0], [48.2, 734.0], [48.3, 735.0], [48.4, 735.0], [48.5, 746.0], [48.6, 748.0], [48.7, 748.0], [48.8, 749.0], [48.9, 750.0], [49.0, 751.0], [49.1, 751.0], [49.2, 752.0], [49.3, 753.0], [49.4, 759.0], [49.5, 759.0], [49.6, 762.0], [49.7, 762.0], [49.8, 763.0], [49.9, 763.0], [50.0, 766.0], [50.1, 773.0], [50.2, 773.0], [50.3, 774.0], [50.4, 781.0], [50.5, 781.0], [50.6, 781.0], [50.7, 783.0], [50.8, 784.0], [50.9, 786.0], [51.0, 786.0], [51.1, 787.0], [51.2, 788.0], [51.3, 789.0], [51.4, 789.0], [51.5, 792.0], [51.6, 796.0], [51.7, 796.0], [51.8, 800.0], [51.9, 802.0], [52.0, 804.0], [52.1, 804.0], [52.2, 809.0], [52.3, 811.0], [52.4, 814.0], [52.5, 814.0], [52.6, 815.0], [52.7, 817.0], [52.8, 818.0], [52.9, 818.0], [53.0, 822.0], [53.1, 823.0], [53.2, 823.0], [53.3, 823.0], [53.4, 823.0], [53.5, 827.0], [53.6, 827.0], [53.7, 828.0], [53.8, 830.0], [53.9, 830.0], [54.0, 830.0], [54.1, 830.0], [54.2, 831.0], [54.3, 831.0], [54.4, 831.0], [54.5, 832.0], [54.6, 833.0], [54.7, 834.0], [54.8, 834.0], [54.9, 836.0], [55.0, 836.0], [55.1, 836.0], [55.2, 837.0], [55.3, 837.0], [55.4, 839.0], [55.5, 839.0], [55.6, 841.0], [55.7, 850.0], [55.8, 850.0], [55.9, 850.0], [56.0, 851.0], [56.1, 852.0], [56.2, 857.0], [56.3, 857.0], [56.4, 859.0], [56.5, 860.0], [56.6, 861.0], [56.7, 861.0], [56.8, 861.0], [56.9, 863.0], [57.0, 863.0], [57.1, 864.0], [57.2, 865.0], [57.3, 868.0], [57.4, 868.0], [57.5, 871.0], [57.6, 872.0], [57.7, 872.0], [57.8, 872.0], [57.9, 873.0], [58.0, 873.0], [58.1, 874.0], [58.2, 874.0], [58.3, 874.0], [58.4, 877.0], [58.5, 877.0], [58.6, 877.0], [58.7, 878.0], [58.8, 880.0], [58.9, 880.0], [59.0, 882.0], [59.1, 883.0], [59.2, 885.0], [59.3, 885.0], [59.4, 887.0], [59.5, 888.0], [59.6, 889.0], [59.7, 889.0], [59.8, 891.0], [59.9, 893.0], [60.0, 894.0], [60.1, 894.0], [60.2, 894.0], [60.3, 897.0], [60.4, 897.0], [60.5, 900.0], [60.6, 901.0], [60.7, 901.0], [60.8, 901.0], [60.9, 910.0], [61.0, 910.0], [61.1, 912.0], [61.2, 912.0], [61.3, 914.0], [61.4, 915.0], [61.5, 918.0], [61.6, 918.0], [61.7, 919.0], [61.8, 920.0], [61.9, 920.0], [62.0, 920.0], [62.1, 921.0], [62.2, 926.0], [62.3, 926.0], [62.4, 926.0], [62.5, 928.0], [62.6, 928.0], [62.7, 928.0], [62.8, 929.0], [62.9, 930.0], [63.0, 932.0], [63.1, 932.0], [63.2, 934.0], [63.3, 937.0], [63.4, 937.0], [63.5, 937.0], [63.6, 940.0], [63.7, 942.0], [63.8, 942.0], [63.9, 948.0], [64.0, 949.0], [64.1, 949.0], [64.2, 949.0], [64.3, 950.0], [64.4, 950.0], [64.5, 951.0], [64.6, 951.0], [64.7, 952.0], [64.8, 952.0], [64.9, 953.0], [65.0, 953.0], [65.1, 954.0], [65.2, 959.0], [65.3, 959.0], [65.4, 960.0], [65.5, 962.0], [65.6, 962.0], [65.7, 962.0], [65.8, 966.0], [65.9, 967.0], [66.0, 969.0], [66.1, 969.0], [66.2, 969.0], [66.3, 970.0], [66.4, 973.0], [66.5, 973.0], [66.6, 973.0], [66.7, 973.0], [66.8, 973.0], [66.9, 974.0], [67.0, 979.0], [67.1, 979.0], [67.2, 979.0], [67.3, 980.0], [67.4, 984.0], [67.5, 986.0], [67.6, 986.0], [67.7, 987.0], [67.8, 988.0], [67.9, 993.0], [68.0, 993.0], [68.1, 994.0], [68.2, 994.0], [68.3, 995.0], [68.4, 995.0], [68.5, 997.0], [68.6, 998.0], [68.7, 998.0], [68.8, 1001.0], [68.9, 1002.0], [69.0, 1004.0], [69.1, 1004.0], [69.2, 1008.0], [69.3, 1008.0], [69.4, 1009.0], [69.5, 1009.0], [69.6, 1014.0], [69.7, 1014.0], [69.8, 1018.0], [69.9, 1018.0], [70.0, 1019.0], [70.1, 1022.0], [70.2, 1022.0], [70.3, 1024.0], [70.4, 1026.0], [70.5, 1026.0], [70.6, 1026.0], [70.7, 1027.0], [70.8, 1028.0], [70.9, 1028.0], [71.0, 1028.0], [71.1, 1029.0], [71.2, 1034.0], [71.3, 1037.0], [71.4, 1037.0], [71.5, 1040.0], [71.6, 1042.0], [71.7, 1042.0], [71.8, 1042.0], [71.9, 1042.0], [72.0, 1045.0], [72.1, 1045.0], [72.2, 1047.0], [72.3, 1048.0], [72.4, 1049.0], [72.5, 1049.0], [72.6, 1050.0], [72.7, 1055.0], [72.8, 1060.0], [72.9, 1060.0], [73.0, 1063.0], [73.1, 1067.0], [73.2, 1071.0], [73.3, 1071.0], [73.4, 1072.0], [73.5, 1073.0], [73.6, 1073.0], [73.7, 1075.0], [73.8, 1075.0], [73.9, 1077.0], [74.0, 1077.0], [74.1, 1082.0], [74.2, 1082.0], [74.3, 1084.0], [74.4, 1084.0], [74.5, 1085.0], [74.6, 1087.0], [74.7, 1088.0], [74.8, 1088.0], [74.9, 1089.0], [75.0, 1092.0], [75.1, 1092.0], [75.2, 1092.0], [75.3, 1093.0], [75.4, 1094.0], [75.5, 1094.0], [75.6, 1095.0], [75.7, 1096.0], [75.8, 1097.0], [75.9, 1097.0], [76.0, 1099.0], [76.1, 1101.0], [76.2, 1106.0], [76.3, 1106.0], [76.4, 1108.0], [76.5, 1108.0], [76.6, 1109.0], [76.7, 1109.0], [76.8, 1114.0], [76.9, 1116.0], [77.0, 1116.0], [77.1, 1116.0], [77.2, 1117.0], [77.3, 1118.0], [77.4, 1118.0], [77.5, 1119.0], [77.6, 1120.0], [77.7, 1120.0], [77.8, 1120.0], [77.9, 1123.0], [78.0, 1123.0], [78.1, 1125.0], [78.2, 1125.0], [78.3, 1130.0], [78.4, 1130.0], [78.5, 1130.0], [78.6, 1136.0], [78.7, 1136.0], [78.8, 1136.0], [78.9, 1136.0], [79.0, 1137.0], [79.1, 1138.0], [79.2, 1139.0], [79.3, 1139.0], [79.4, 1144.0], [79.5, 1148.0], [79.6, 1148.0], [79.7, 1148.0], [79.8, 1151.0], [79.9, 1152.0], [80.0, 1153.0], [80.1, 1153.0], [80.2, 1155.0], [80.3, 1156.0], [80.4, 1156.0], [80.5, 1156.0], [80.6, 1156.0], [80.7, 1157.0], [80.8, 1157.0], [80.9, 1157.0], [81.0, 1158.0], [81.1, 1163.0], [81.2, 1163.0], [81.3, 1165.0], [81.4, 1166.0], [81.5, 1166.0], [81.6, 1166.0], [81.7, 1168.0], [81.8, 1170.0], [81.9, 1170.0], [82.0, 1172.0], [82.1, 1173.0], [82.2, 1174.0], [82.3, 1174.0], [82.4, 1175.0], [82.5, 1176.0], [82.6, 1176.0], [82.7, 1176.0], [82.8, 1177.0], [82.9, 1182.0], [83.0, 1184.0], [83.1, 1184.0], [83.2, 1184.0], [83.3, 1185.0], [83.4, 1185.0], [83.5, 1185.0], [83.6, 1186.0], [83.7, 1192.0], [83.8, 1192.0], [83.9, 1196.0], [84.0, 1200.0], [84.1, 1208.0], [84.2, 1208.0], [84.3, 1210.0], [84.4, 1213.0], [84.5, 1216.0], [84.6, 1216.0], [84.7, 1221.0], [84.8, 1223.0], [84.9, 1224.0], [85.0, 1224.0], [85.1, 1227.0], [85.2, 1231.0], [85.3, 1231.0], [85.4, 1235.0], [85.5, 1238.0], [85.6, 1239.0], [85.7, 1239.0], [85.8, 1240.0], [85.9, 1250.0], [86.0, 1254.0], [86.1, 1254.0], [86.2, 1254.0], [86.3, 1262.0], [86.4, 1264.0], [86.5, 1264.0], [86.6, 1266.0], [86.7, 1269.0], [86.8, 1269.0], [86.9, 1272.0], [87.0, 1289.0], [87.1, 1289.0], [87.2, 1289.0], [87.3, 1292.0], [87.4, 1296.0], [87.5, 1301.0], [87.6, 1301.0], [87.7, 1302.0], [87.8, 1307.0], [87.9, 1312.0], [88.0, 1312.0], [88.1, 1320.0], [88.2, 1322.0], [88.3, 1322.0], [88.4, 1322.0], [88.5, 1322.0], [88.6, 1322.0], [88.7, 1322.0], [88.8, 1329.0], [88.9, 1329.0], [89.0, 1337.0], [89.1, 1337.0], [89.2, 1337.0], [89.3, 1339.0], [89.4, 1340.0], [89.5, 1340.0], [89.6, 1340.0], [89.7, 1341.0], [89.8, 1346.0], [89.9, 1346.0], [90.0, 1348.0], [90.1, 1352.0], [90.2, 1352.0], [90.3, 1354.0], [90.4, 1355.0], [90.5, 1356.0], [90.6, 1356.0], [90.7, 1359.0], [90.8, 1360.0], [90.9, 1360.0], [91.0, 1360.0], [91.1, 1363.0], [91.2, 1365.0], [91.3, 1388.0], [91.4, 1388.0], [91.5, 1391.0], [91.6, 1397.0], [91.7, 1397.0], [91.8, 1401.0], [91.9, 1407.0], [92.0, 1411.0], [92.1, 1411.0], [92.2, 1411.0], [92.3, 1413.0], [92.4, 1423.0], [92.5, 1423.0], [92.6, 1424.0], [92.7, 1446.0], [92.8, 1449.0], [92.9, 1449.0], [93.0, 1455.0], [93.1, 1458.0], [93.2, 1460.0], [93.3, 1460.0], [93.4, 1472.0], [93.5, 1473.0], [93.6, 1473.0], [93.7, 1476.0], [93.8, 1491.0], [93.9, 1507.0], [94.0, 1507.0], [94.1, 1510.0], [94.2, 1515.0], [94.3, 1529.0], [94.4, 1529.0], [94.5, 1530.0], [94.6, 1535.0], [94.7, 1541.0], [94.8, 1541.0], [94.9, 1564.0], [95.0, 1576.0], [95.1, 1576.0], [95.2, 1582.0], [95.3, 1618.0], [95.4, 1644.0], [95.5, 1644.0], [95.6, 1647.0], [95.7, 1659.0], [95.8, 1677.0], [95.9, 1677.0], [96.0, 1683.0], [96.1, 1684.0], [96.2, 1694.0], [96.3, 1694.0], [96.4, 1696.0], [96.5, 1760.0], [96.6, 1769.0], [96.7, 1769.0], [96.8, 1772.0], [96.9, 1787.0], [97.0, 1787.0], [97.1, 1843.0], [97.2, 1851.0], [97.3, 1952.0], [97.4, 1952.0], [97.5, 1971.0], [97.6, 1979.0], [97.7, 1986.0], [97.8, 1986.0], [97.9, 2114.0], [98.0, 2324.0], [98.1, 2484.0], [98.2, 2484.0], [98.3, 2537.0], [98.4, 2745.0], [98.5, 2745.0], [98.6, 2777.0], [98.7, 2804.0], [98.8, 2849.0], [98.9, 2849.0], [99.0, 2890.0], [99.1, 2909.0], [99.2, 2944.0], [99.3, 2944.0], [99.4, 2995.0], [99.5, 3166.0], [99.6, 3511.0], [99.7, 3511.0], [99.8, 3551.0], [99.9, 3900.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 72.0, "series": [{"data": [[600.0, 70.0], [700.0, 50.0], [800.0, 64.0], [900.0, 61.0], [1000.0, 54.0], [1100.0, 58.0], [1200.0, 26.0], [1300.0, 31.0], [1400.0, 16.0], [1500.0, 10.0], [100.0, 9.0], [1600.0, 9.0], [1700.0, 4.0], [1800.0, 2.0], [1900.0, 4.0], [2100.0, 1.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2700.0, 2.0], [2800.0, 3.0], [2900.0, 3.0], [3100.0, 1.0], [200.0, 58.0], [3500.0, 2.0], [3900.0, 1.0], [300.0, 67.0], [400.0, 54.0], [500.0, 72.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 45.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 501.0, "series": [{"data": [[0.0, 189.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 501.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 45.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.913127413127416, "minX": 1.60401864E12, "maxY": 10.0, "series": [{"data": [[1.60401864E12, 10.0], [1.6040187E12, 9.913127413127416]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040187E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 260.0, "minX": 1.0, "maxY": 1449.0, "series": [{"data": [[8.0, 260.0], [4.0, 675.0], [2.0, 675.0], [1.0, 1008.0], [9.0, 349.0], [10.0, 839.2644628099173], [5.0, 550.0], [6.0, 1449.0], [3.0, 1022.0], [7.0, 543.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 837.8734693877551]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1642.2, "minX": 1.60401864E12, "maxY": 1177125.5833333333, "series": [{"data": [[1.60401864E12, 658639.6166666667], [1.6040187E12, 1177125.5833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401864E12, 1642.2], [1.6040187E12, 3880.8333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040187E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 792.2799227799229, "minX": 1.60401864E12, "maxY": 946.7096774193544, "series": [{"data": [[1.60401864E12, 946.7096774193544], [1.6040187E12, 792.2799227799229]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040187E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 791.210424710425, "minX": 1.60401864E12, "maxY": 945.4654377880182, "series": [{"data": [[1.60401864E12, 945.4654377880182], [1.6040187E12, 791.210424710425]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040187E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.019305019305019308, "minX": 1.60401864E12, "maxY": 0.38248847926267304, "series": [{"data": [[1.60401864E12, 0.38248847926267304], [1.6040187E12, 0.019305019305019308]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040187E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 185.0, "minX": 1.60401864E12, "maxY": 3900.0, "series": [{"data": [[1.60401864E12, 3900.0], [1.6040187E12, 3551.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401864E12, 192.695999584198], [1.6040187E12, 194.01299962878227]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401864E12, 193.9492001247406], [1.6040187E12, 195.27620009899138]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401864E12, 193.42599984407425], [1.6040187E12, 194.79149981439113]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401864E12, 185.0], [1.6040187E12, 186.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401864E12, 834.0], [1.6040187E12, 732.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040187E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 521.0, "minX": 1.0, "maxY": 1160.5, "series": [{"data": [[8.0, 1160.5], [9.0, 873.0], [10.0, 929.0], [11.0, 851.0], [12.0, 999.0], [13.0, 823.0], [14.0, 883.0], [15.0, 648.0], [16.0, 592.5], [1.0, 1008.0], [17.0, 521.0], [18.0, 577.5], [6.0, 953.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 521.0, "minX": 1.0, "maxY": 1160.0, "series": [{"data": [[8.0, 1160.0], [9.0, 873.0], [10.0, 928.0], [11.0, 849.0], [12.0, 998.5], [13.0, 822.5], [14.0, 879.5], [15.0, 647.0], [16.0, 592.0], [1.0, 1008.0], [17.0, 521.0], [18.0, 577.5], [6.0, 946.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.783333333333333, "minX": 1.60401864E12, "maxY": 8.466666666666667, "series": [{"data": [[1.60401864E12, 3.783333333333333], [1.6040187E12, 8.466666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040187E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.6166666666666667, "minX": 1.60401864E12, "maxY": 8.633333333333333, "series": [{"data": [[1.60401864E12, 3.6166666666666667], [1.6040187E12, 8.633333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040187E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.6166666666666667, "minX": 1.60401864E12, "maxY": 8.633333333333333, "series": [{"data": [[1.60401864E12, 3.6166666666666667], [1.6040187E12, 8.633333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040187E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.6166666666666667, "minX": 1.60401864E12, "maxY": 8.633333333333333, "series": [{"data": [[1.60401864E12, 3.6166666666666667], [1.6040187E12, 8.633333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040187E12, "title": "Total Transactions Per Second"}},
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

