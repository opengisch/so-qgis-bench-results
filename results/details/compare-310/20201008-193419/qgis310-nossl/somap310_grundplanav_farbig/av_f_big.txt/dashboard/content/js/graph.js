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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 3398.0, "series": [{"data": [[0.0, 182.0], [0.1, 182.0], [0.2, 183.0], [0.3, 185.0], [0.4, 185.0], [0.5, 187.0], [0.6, 191.0], [0.7, 192.0], [0.8, 192.0], [0.9, 194.0], [1.0, 194.0], [1.1, 199.0], [1.2, 199.0], [1.3, 200.0], [1.4, 201.0], [1.5, 201.0], [1.6, 201.0], [1.7, 204.0], [1.8, 212.0], [1.9, 212.0], [2.0, 212.0], [2.1, 215.0], [2.2, 219.0], [2.3, 219.0], [2.4, 219.0], [2.5, 220.0], [2.6, 220.0], [2.7, 220.0], [2.8, 225.0], [2.9, 226.0], [3.0, 227.0], [3.1, 227.0], [3.2, 229.0], [3.3, 234.0], [3.4, 234.0], [3.5, 237.0], [3.6, 245.0], [3.7, 249.0], [3.8, 249.0], [3.9, 253.0], [4.0, 254.0], [4.1, 254.0], [4.2, 254.0], [4.3, 256.0], [4.4, 256.0], [4.5, 258.0], [4.6, 258.0], [4.7, 258.0], [4.8, 259.0], [4.9, 260.0], [5.0, 260.0], [5.1, 263.0], [5.2, 263.0], [5.3, 263.0], [5.4, 265.0], [5.5, 265.0], [5.6, 266.0], [5.7, 266.0], [5.8, 266.0], [5.9, 267.0], [6.0, 268.0], [6.1, 268.0], [6.2, 272.0], [6.3, 273.0], [6.4, 273.0], [6.5, 273.0], [6.6, 274.0], [6.7, 274.0], [6.8, 274.0], [6.9, 277.0], [7.0, 283.0], [7.1, 283.0], [7.2, 283.0], [7.3, 285.0], [7.4, 286.0], [7.5, 291.0], [7.6, 291.0], [7.7, 294.0], [7.8, 294.0], [7.9, 295.0], [8.0, 295.0], [8.1, 296.0], [8.2, 299.0], [8.3, 300.0], [8.4, 300.0], [8.5, 300.0], [8.6, 301.0], [8.7, 301.0], [8.8, 301.0], [8.9, 301.0], [9.0, 301.0], [9.1, 301.0], [9.2, 301.0], [9.3, 305.0], [9.4, 307.0], [9.5, 307.0], [9.6, 307.0], [9.7, 308.0], [9.8, 310.0], [9.9, 310.0], [10.0, 311.0], [10.1, 315.0], [10.2, 315.0], [10.3, 317.0], [10.4, 318.0], [10.5, 325.0], [10.6, 325.0], [10.7, 327.0], [10.8, 330.0], [10.9, 330.0], [11.0, 330.0], [11.1, 331.0], [11.2, 332.0], [11.3, 337.0], [11.4, 337.0], [11.5, 338.0], [11.6, 340.0], [11.7, 340.0], [11.8, 340.0], [11.9, 341.0], [12.0, 345.0], [12.1, 345.0], [12.2, 346.0], [12.3, 349.0], [12.4, 352.0], [12.5, 352.0], [12.6, 357.0], [12.7, 359.0], [12.8, 359.0], [12.9, 359.0], [13.0, 359.0], [13.1, 360.0], [13.2, 362.0], [13.3, 362.0], [13.4, 363.0], [13.5, 367.0], [13.6, 367.0], [13.7, 369.0], [13.8, 370.0], [13.9, 372.0], [14.0, 372.0], [14.1, 373.0], [14.2, 374.0], [14.3, 379.0], [14.4, 379.0], [14.5, 384.0], [14.6, 388.0], [14.7, 388.0], [14.8, 388.0], [14.9, 389.0], [15.0, 392.0], [15.1, 392.0], [15.2, 394.0], [15.3, 395.0], [15.4, 397.0], [15.5, 397.0], [15.6, 399.0], [15.7, 400.0], [15.8, 400.0], [15.9, 400.0], [16.0, 401.0], [16.1, 403.0], [16.2, 404.0], [16.3, 404.0], [16.4, 405.0], [16.5, 409.0], [16.6, 411.0], [16.7, 411.0], [16.8, 412.0], [16.9, 413.0], [17.0, 413.0], [17.1, 418.0], [17.2, 419.0], [17.3, 420.0], [17.4, 420.0], [17.5, 421.0], [17.6, 422.0], [17.7, 422.0], [17.8, 422.0], [17.9, 423.0], [18.0, 423.0], [18.1, 423.0], [18.2, 423.0], [18.3, 425.0], [18.4, 429.0], [18.5, 429.0], [18.6, 431.0], [18.7, 432.0], [18.8, 432.0], [18.9, 432.0], [19.0, 433.0], [19.1, 434.0], [19.2, 435.0], [19.3, 435.0], [19.4, 438.0], [19.5, 438.0], [19.6, 439.0], [19.7, 439.0], [19.8, 441.0], [19.9, 441.0], [20.0, 445.0], [20.1, 445.0], [20.2, 449.0], [20.3, 451.0], [20.4, 451.0], [20.5, 456.0], [20.6, 456.0], [20.7, 457.0], [20.8, 457.0], [20.9, 460.0], [21.0, 460.0], [21.1, 461.0], [21.2, 461.0], [21.3, 462.0], [21.4, 464.0], [21.5, 465.0], [21.6, 465.0], [21.7, 469.0], [21.8, 469.0], [21.9, 469.0], [22.0, 470.0], [22.1, 470.0], [22.2, 470.0], [22.3, 470.0], [22.4, 470.0], [22.5, 473.0], [22.6, 474.0], [22.7, 474.0], [22.8, 476.0], [22.9, 480.0], [23.0, 482.0], [23.1, 482.0], [23.2, 482.0], [23.3, 482.0], [23.4, 482.0], [23.5, 484.0], [23.6, 486.0], [23.7, 491.0], [23.8, 491.0], [23.9, 492.0], [24.0, 495.0], [24.1, 498.0], [24.2, 498.0], [24.3, 498.0], [24.4, 499.0], [24.5, 500.0], [24.6, 500.0], [24.7, 500.0], [24.8, 503.0], [24.9, 503.0], [25.0, 503.0], [25.1, 504.0], [25.2, 504.0], [25.3, 504.0], [25.4, 505.0], [25.5, 506.0], [25.6, 508.0], [25.7, 508.0], [25.8, 509.0], [25.9, 510.0], [26.0, 510.0], [26.1, 510.0], [26.2, 511.0], [26.3, 512.0], [26.4, 516.0], [26.5, 516.0], [26.6, 517.0], [26.7, 519.0], [26.8, 519.0], [26.9, 520.0], [27.0, 523.0], [27.1, 525.0], [27.2, 525.0], [27.3, 528.0], [27.4, 529.0], [27.5, 529.0], [27.6, 529.0], [27.7, 529.0], [27.8, 529.0], [27.9, 531.0], [28.0, 531.0], [28.1, 532.0], [28.2, 532.0], [28.3, 533.0], [28.4, 533.0], [28.5, 533.0], [28.6, 534.0], [28.7, 534.0], [28.8, 539.0], [28.9, 540.0], [29.0, 541.0], [29.1, 541.0], [29.2, 543.0], [29.3, 544.0], [29.4, 544.0], [29.5, 544.0], [29.6, 545.0], [29.7, 545.0], [29.8, 546.0], [29.9, 546.0], [30.0, 548.0], [30.1, 552.0], [30.2, 552.0], [30.3, 552.0], [30.4, 553.0], [30.5, 555.0], [30.6, 555.0], [30.7, 556.0], [30.8, 557.0], [30.9, 557.0], [31.0, 557.0], [31.1, 558.0], [31.2, 561.0], [31.3, 562.0], [31.4, 562.0], [31.5, 562.0], [31.6, 566.0], [31.7, 566.0], [31.8, 566.0], [31.9, 567.0], [32.0, 568.0], [32.1, 568.0], [32.2, 569.0], [32.3, 570.0], [32.4, 570.0], [32.5, 570.0], [32.6, 571.0], [32.7, 572.0], [32.8, 572.0], [32.9, 572.0], [33.0, 573.0], [33.1, 575.0], [33.2, 578.0], [33.3, 578.0], [33.4, 581.0], [33.5, 581.0], [33.6, 581.0], [33.7, 582.0], [33.8, 582.0], [33.9, 584.0], [34.0, 584.0], [34.1, 585.0], [34.2, 586.0], [34.3, 587.0], [34.4, 587.0], [34.5, 587.0], [34.6, 587.0], [34.7, 589.0], [34.8, 589.0], [34.9, 589.0], [35.0, 590.0], [35.1, 590.0], [35.2, 591.0], [35.3, 592.0], [35.4, 592.0], [35.5, 592.0], [35.6, 593.0], [35.7, 593.0], [35.8, 593.0], [35.9, 593.0], [36.0, 596.0], [36.1, 597.0], [36.2, 599.0], [36.3, 599.0], [36.4, 599.0], [36.5, 599.0], [36.6, 601.0], [36.7, 601.0], [36.8, 601.0], [36.9, 601.0], [37.0, 601.0], [37.1, 602.0], [37.2, 603.0], [37.3, 604.0], [37.4, 604.0], [37.5, 606.0], [37.6, 613.0], [37.7, 614.0], [37.8, 614.0], [37.9, 617.0], [38.0, 622.0], [38.1, 623.0], [38.2, 623.0], [38.3, 623.0], [38.4, 624.0], [38.5, 624.0], [38.6, 624.0], [38.7, 633.0], [38.8, 634.0], [38.9, 634.0], [39.0, 634.0], [39.1, 635.0], [39.2, 636.0], [39.3, 636.0], [39.4, 636.0], [39.5, 637.0], [39.6, 639.0], [39.7, 639.0], [39.8, 640.0], [39.9, 641.0], [40.0, 642.0], [40.1, 642.0], [40.2, 642.0], [40.3, 644.0], [40.4, 644.0], [40.5, 644.0], [40.6, 645.0], [40.7, 646.0], [40.8, 646.0], [40.9, 646.0], [41.0, 646.0], [41.1, 649.0], [41.2, 649.0], [41.3, 650.0], [41.4, 651.0], [41.5, 651.0], [41.6, 651.0], [41.7, 652.0], [41.8, 653.0], [41.9, 653.0], [42.0, 655.0], [42.1, 655.0], [42.2, 656.0], [42.3, 656.0], [42.4, 656.0], [42.5, 657.0], [42.6, 657.0], [42.7, 657.0], [42.8, 659.0], [42.9, 660.0], [43.0, 665.0], [43.1, 665.0], [43.2, 666.0], [43.3, 667.0], [43.4, 667.0], [43.5, 668.0], [43.6, 669.0], [43.7, 669.0], [43.8, 669.0], [43.9, 671.0], [44.0, 671.0], [44.1, 674.0], [44.2, 674.0], [44.3, 676.0], [44.4, 680.0], [44.5, 682.0], [44.6, 682.0], [44.7, 685.0], [44.8, 685.0], [44.9, 690.0], [45.0, 690.0], [45.1, 695.0], [45.2, 700.0], [45.3, 700.0], [45.4, 702.0], [45.5, 702.0], [45.6, 703.0], [45.7, 703.0], [45.8, 708.0], [45.9, 710.0], [46.0, 710.0], [46.1, 710.0], [46.2, 711.0], [46.3, 712.0], [46.4, 712.0], [46.5, 712.0], [46.6, 717.0], [46.7, 717.0], [46.8, 717.0], [46.9, 719.0], [47.0, 719.0], [47.1, 724.0], [47.2, 724.0], [47.3, 725.0], [47.4, 727.0], [47.5, 728.0], [47.6, 728.0], [47.7, 729.0], [47.8, 730.0], [47.9, 731.0], [48.0, 731.0], [48.1, 732.0], [48.2, 734.0], [48.3, 734.0], [48.4, 734.0], [48.5, 737.0], [48.6, 737.0], [48.7, 737.0], [48.8, 738.0], [48.9, 740.0], [49.0, 741.0], [49.1, 741.0], [49.2, 741.0], [49.3, 742.0], [49.4, 743.0], [49.5, 743.0], [49.6, 744.0], [49.7, 745.0], [49.8, 746.0], [49.9, 746.0], [50.0, 748.0], [50.1, 749.0], [50.2, 749.0], [50.3, 750.0], [50.4, 753.0], [50.5, 758.0], [50.6, 758.0], [50.7, 767.0], [50.8, 772.0], [50.9, 774.0], [51.0, 774.0], [51.1, 776.0], [51.2, 777.0], [51.3, 779.0], [51.4, 779.0], [51.5, 779.0], [51.6, 779.0], [51.7, 779.0], [51.8, 795.0], [51.9, 797.0], [52.0, 799.0], [52.1, 799.0], [52.2, 804.0], [52.3, 805.0], [52.4, 809.0], [52.5, 809.0], [52.6, 809.0], [52.7, 811.0], [52.8, 812.0], [52.9, 812.0], [53.0, 813.0], [53.1, 813.0], [53.2, 813.0], [53.3, 813.0], [53.4, 815.0], [53.5, 816.0], [53.6, 816.0], [53.7, 818.0], [53.8, 819.0], [53.9, 820.0], [54.0, 820.0], [54.1, 822.0], [54.2, 824.0], [54.3, 827.0], [54.4, 827.0], [54.5, 833.0], [54.6, 835.0], [54.7, 838.0], [54.8, 838.0], [54.9, 839.0], [55.0, 841.0], [55.1, 841.0], [55.2, 842.0], [55.3, 843.0], [55.4, 849.0], [55.5, 849.0], [55.6, 853.0], [55.7, 861.0], [55.8, 861.0], [55.9, 861.0], [56.0, 864.0], [56.1, 866.0], [56.2, 867.0], [56.3, 867.0], [56.4, 868.0], [56.5, 868.0], [56.6, 869.0], [56.7, 869.0], [56.8, 869.0], [56.9, 874.0], [57.0, 874.0], [57.1, 874.0], [57.2, 876.0], [57.3, 881.0], [57.4, 881.0], [57.5, 881.0], [57.6, 882.0], [57.7, 884.0], [57.8, 884.0], [57.9, 884.0], [58.0, 885.0], [58.1, 886.0], [58.2, 886.0], [58.3, 887.0], [58.4, 889.0], [58.5, 889.0], [58.6, 891.0], [58.7, 892.0], [58.8, 894.0], [58.9, 894.0], [59.0, 894.0], [59.1, 894.0], [59.2, 897.0], [59.3, 897.0], [59.4, 898.0], [59.5, 899.0], [59.6, 899.0], [59.7, 899.0], [59.8, 899.0], [59.9, 900.0], [60.0, 905.0], [60.1, 905.0], [60.2, 906.0], [60.3, 908.0], [60.4, 908.0], [60.5, 909.0], [60.6, 913.0], [60.7, 913.0], [60.8, 913.0], [60.9, 915.0], [61.0, 915.0], [61.1, 920.0], [61.2, 920.0], [61.3, 936.0], [61.4, 941.0], [61.5, 941.0], [61.6, 941.0], [61.7, 942.0], [61.8, 944.0], [61.9, 944.0], [62.0, 944.0], [62.1, 945.0], [62.2, 947.0], [62.3, 947.0], [62.4, 947.0], [62.5, 952.0], [62.6, 952.0], [62.7, 952.0], [62.8, 952.0], [62.9, 954.0], [63.0, 954.0], [63.1, 954.0], [63.2, 958.0], [63.3, 959.0], [63.4, 959.0], [63.5, 959.0], [63.6, 960.0], [63.7, 961.0], [63.8, 961.0], [63.9, 963.0], [64.0, 965.0], [64.1, 969.0], [64.2, 969.0], [64.3, 969.0], [64.4, 969.0], [64.5, 970.0], [64.6, 970.0], [64.7, 971.0], [64.8, 973.0], [64.9, 975.0], [65.0, 975.0], [65.1, 978.0], [65.2, 982.0], [65.3, 982.0], [65.4, 982.0], [65.5, 984.0], [65.6, 984.0], [65.7, 984.0], [65.8, 985.0], [65.9, 986.0], [66.0, 986.0], [66.1, 986.0], [66.2, 987.0], [66.3, 988.0], [66.4, 990.0], [66.5, 990.0], [66.6, 990.0], [66.7, 991.0], [66.8, 991.0], [66.9, 996.0], [67.0, 996.0], [67.1, 996.0], [67.2, 996.0], [67.3, 998.0], [67.4, 1000.0], [67.5, 1002.0], [67.6, 1002.0], [67.7, 1002.0], [67.8, 1003.0], [67.9, 1003.0], [68.0, 1003.0], [68.1, 1006.0], [68.2, 1006.0], [68.3, 1007.0], [68.4, 1007.0], [68.5, 1008.0], [68.6, 1008.0], [68.7, 1008.0], [68.8, 1010.0], [68.9, 1012.0], [69.0, 1012.0], [69.1, 1012.0], [69.2, 1013.0], [69.3, 1014.0], [69.4, 1014.0], [69.5, 1014.0], [69.6, 1014.0], [69.7, 1016.0], [69.8, 1018.0], [69.9, 1018.0], [70.0, 1019.0], [70.1, 1023.0], [70.2, 1023.0], [70.3, 1028.0], [70.4, 1029.0], [70.5, 1029.0], [70.6, 1029.0], [70.7, 1029.0], [70.8, 1031.0], [70.9, 1033.0], [71.0, 1033.0], [71.1, 1033.0], [71.2, 1034.0], [71.3, 1036.0], [71.4, 1036.0], [71.5, 1039.0], [71.6, 1040.0], [71.7, 1040.0], [71.8, 1049.0], [71.9, 1050.0], [72.0, 1050.0], [72.1, 1050.0], [72.2, 1051.0], [72.3, 1051.0], [72.4, 1052.0], [72.5, 1052.0], [72.6, 1053.0], [72.7, 1053.0], [72.8, 1056.0], [72.9, 1056.0], [73.0, 1057.0], [73.1, 1057.0], [73.2, 1058.0], [73.3, 1058.0], [73.4, 1058.0], [73.5, 1060.0], [73.6, 1060.0], [73.7, 1062.0], [73.8, 1064.0], [73.9, 1066.0], [74.0, 1066.0], [74.1, 1066.0], [74.2, 1068.0], [74.3, 1070.0], [74.4, 1070.0], [74.5, 1072.0], [74.6, 1074.0], [74.7, 1083.0], [74.8, 1083.0], [74.9, 1084.0], [75.0, 1084.0], [75.1, 1084.0], [75.2, 1084.0], [75.3, 1086.0], [75.4, 1087.0], [75.5, 1087.0], [75.6, 1089.0], [75.7, 1089.0], [75.8, 1090.0], [75.9, 1090.0], [76.0, 1092.0], [76.1, 1093.0], [76.2, 1096.0], [76.3, 1096.0], [76.4, 1099.0], [76.5, 1101.0], [76.6, 1101.0], [76.7, 1101.0], [76.8, 1103.0], [76.9, 1103.0], [77.0, 1103.0], [77.1, 1106.0], [77.2, 1110.0], [77.3, 1110.0], [77.4, 1110.0], [77.5, 1114.0], [77.6, 1114.0], [77.7, 1115.0], [77.8, 1115.0], [77.9, 1115.0], [78.0, 1119.0], [78.1, 1124.0], [78.2, 1124.0], [78.3, 1126.0], [78.4, 1127.0], [78.5, 1127.0], [78.6, 1129.0], [78.7, 1129.0], [78.8, 1130.0], [78.9, 1130.0], [79.0, 1130.0], [79.1, 1131.0], [79.2, 1132.0], [79.3, 1132.0], [79.4, 1132.0], [79.5, 1134.0], [79.6, 1138.0], [79.7, 1138.0], [79.8, 1140.0], [79.9, 1142.0], [80.0, 1144.0], [80.1, 1144.0], [80.2, 1145.0], [80.3, 1149.0], [80.4, 1149.0], [80.5, 1149.0], [80.6, 1150.0], [80.7, 1152.0], [80.8, 1152.0], [80.9, 1153.0], [81.0, 1153.0], [81.1, 1154.0], [81.2, 1154.0], [81.3, 1158.0], [81.4, 1159.0], [81.5, 1164.0], [81.6, 1164.0], [81.7, 1164.0], [81.8, 1165.0], [81.9, 1165.0], [82.0, 1165.0], [82.1, 1165.0], [82.2, 1169.0], [82.3, 1169.0], [82.4, 1172.0], [82.5, 1175.0], [82.6, 1178.0], [82.7, 1178.0], [82.8, 1179.0], [82.9, 1179.0], [83.0, 1183.0], [83.1, 1183.0], [83.2, 1183.0], [83.3, 1183.0], [83.4, 1183.0], [83.5, 1183.0], [83.6, 1185.0], [83.7, 1187.0], [83.8, 1187.0], [83.9, 1188.0], [84.0, 1194.0], [84.1, 1197.0], [84.2, 1197.0], [84.3, 1198.0], [84.4, 1199.0], [84.5, 1200.0], [84.6, 1200.0], [84.7, 1201.0], [84.8, 1208.0], [84.9, 1210.0], [85.0, 1210.0], [85.1, 1211.0], [85.2, 1211.0], [85.3, 1211.0], [85.4, 1216.0], [85.5, 1216.0], [85.6, 1217.0], [85.7, 1217.0], [85.8, 1220.0], [85.9, 1220.0], [86.0, 1225.0], [86.1, 1225.0], [86.2, 1225.0], [86.3, 1229.0], [86.4, 1235.0], [86.5, 1235.0], [86.6, 1236.0], [86.7, 1237.0], [86.8, 1237.0], [86.9, 1237.0], [87.0, 1240.0], [87.1, 1241.0], [87.2, 1241.0], [87.3, 1245.0], [87.4, 1251.0], [87.5, 1251.0], [87.6, 1251.0], [87.7, 1252.0], [87.8, 1257.0], [87.9, 1260.0], [88.0, 1260.0], [88.1, 1263.0], [88.2, 1279.0], [88.3, 1285.0], [88.4, 1285.0], [88.5, 1286.0], [88.6, 1289.0], [88.7, 1289.0], [88.8, 1295.0], [88.9, 1296.0], [89.0, 1297.0], [89.1, 1297.0], [89.2, 1299.0], [89.3, 1300.0], [89.4, 1307.0], [89.5, 1307.0], [89.6, 1307.0], [89.7, 1307.0], [89.8, 1308.0], [89.9, 1308.0], [90.0, 1310.0], [90.1, 1313.0], [90.2, 1313.0], [90.3, 1319.0], [90.4, 1322.0], [90.5, 1323.0], [90.6, 1323.0], [90.7, 1326.0], [90.8, 1330.0], [90.9, 1330.0], [91.0, 1330.0], [91.1, 1333.0], [91.2, 1333.0], [91.3, 1345.0], [91.4, 1345.0], [91.5, 1349.0], [91.6, 1353.0], [91.7, 1353.0], [91.8, 1357.0], [91.9, 1364.0], [92.0, 1366.0], [92.1, 1366.0], [92.2, 1377.0], [92.3, 1377.0], [92.4, 1379.0], [92.5, 1379.0], [92.6, 1381.0], [92.7, 1387.0], [92.8, 1390.0], [92.9, 1390.0], [93.0, 1391.0], [93.1, 1391.0], [93.2, 1395.0], [93.3, 1395.0], [93.4, 1397.0], [93.5, 1404.0], [93.6, 1404.0], [93.7, 1405.0], [93.8, 1426.0], [93.9, 1433.0], [94.0, 1433.0], [94.1, 1439.0], [94.2, 1448.0], [94.3, 1449.0], [94.4, 1449.0], [94.5, 1475.0], [94.6, 1557.0], [94.7, 1571.0], [94.8, 1571.0], [94.9, 1586.0], [95.0, 1594.0], [95.1, 1594.0], [95.2, 1609.0], [95.3, 1633.0], [95.4, 1690.0], [95.5, 1690.0], [95.6, 1709.0], [95.7, 1715.0], [95.8, 1717.0], [95.9, 1717.0], [96.0, 1736.0], [96.1, 1775.0], [96.2, 1794.0], [96.3, 1794.0], [96.4, 1802.0], [96.5, 1903.0], [96.6, 1923.0], [96.7, 1923.0], [96.8, 1931.0], [96.9, 1940.0], [97.0, 1940.0], [97.1, 1947.0], [97.2, 1981.0], [97.3, 1985.0], [97.4, 1985.0], [97.5, 1999.0], [97.6, 2008.0], [97.7, 2015.0], [97.8, 2015.0], [97.9, 2062.0], [98.0, 2078.0], [98.1, 2360.0], [98.2, 2360.0], [98.3, 2464.0], [98.4, 2635.0], [98.5, 2635.0], [98.6, 2678.0], [98.7, 2752.0], [98.8, 2765.0], [98.9, 2765.0], [99.0, 2893.0], [99.1, 3002.0], [99.2, 3076.0], [99.3, 3076.0], [99.4, 3251.0], [99.5, 3272.0], [99.6, 3286.0], [99.7, 3286.0], [99.8, 3364.0], [99.9, 3398.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 89.0, "series": [{"data": [[600.0, 63.0], [700.0, 51.0], [800.0, 57.0], [900.0, 55.0], [1000.0, 67.0], [1100.0, 59.0], [1200.0, 35.0], [1300.0, 31.0], [1400.0, 8.0], [1500.0, 4.0], [100.0, 9.0], [1600.0, 3.0], [1700.0, 6.0], [1800.0, 1.0], [1900.0, 8.0], [2000.0, 4.0], [2300.0, 1.0], [2400.0, 1.0], [2600.0, 2.0], [2700.0, 2.0], [2800.0, 1.0], [3000.0, 2.0], [3200.0, 3.0], [200.0, 52.0], [3300.0, 2.0], [300.0, 54.0], [400.0, 65.0], [500.0, 89.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 40.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 513.0, "series": [{"data": [[0.0, 182.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 513.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 40.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.895981087470448, "minX": 1.60218942E12, "maxY": 10.0, "series": [{"data": [[1.60218942E12, 10.0], [1.60218948E12, 9.895981087470448]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218948E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 523.0, "minX": 1.0, "maxY": 1999.0, "series": [{"data": [[8.0, 532.0], [4.0, 523.0], [2.0, 1999.0], [1.0, 1257.0], [9.0, 585.0], [10.0, 834.508264462809], [6.0, 1252.5], [3.0, 603.0], [7.0, 795.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 836.2612244897953]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2354.3, "minX": 1.60218942E12, "maxY": 1044134.7166666667, "series": [{"data": [[1.60218942E12, 791642.85], [1.60218948E12, 1044134.7166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218942E12, 2354.3], [1.60218948E12, 3168.733333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218948E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 795.1300236406619, "minX": 1.60218942E12, "maxY": 892.0256410256407, "series": [{"data": [[1.60218942E12, 892.0256410256407], [1.60218948E12, 795.1300236406619]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218948E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 794.0023640661942, "minX": 1.60218942E12, "maxY": 890.86858974359, "series": [{"data": [[1.60218942E12, 890.86858974359], [1.60218948E12, 794.0023640661942]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218948E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.021276595744680847, "minX": 1.60218942E12, "maxY": 0.4326923076923074, "series": [{"data": [[1.60218942E12, 0.4326923076923074], [1.60218948E12, 0.021276595744680847]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218948E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.60218942E12, "maxY": 3398.0, "series": [{"data": [[1.60218942E12, 3398.0], [1.60218948E12, 2893.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218942E12, 198.5359994029999], [1.60218948E12, 186.63199979782104]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218942E12, 200.09870002985], [1.60218948E12, 188.38320028305054]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218942E12, 199.78799970149993], [1.60218948E12, 187.19599964618683]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218942E12, 191.0], [1.60218948E12, 182.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218942E12, 798.0], [1.60218948E12, 737.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218948E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 463.0, "minX": 1.0, "maxY": 2635.0, "series": [{"data": [[9.0, 899.0], [10.0, 948.0], [11.0, 1002.0], [12.0, 896.0], [13.0, 864.5], [14.0, 811.5], [15.0, 613.0], [1.0, 2635.0], [16.0, 586.5], [17.0, 606.0], [18.0, 463.0], [19.0, 592.0], [6.0, 930.0], [7.0, 996.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 463.0, "minX": 1.0, "maxY": 2630.0, "series": [{"data": [[9.0, 899.0], [10.0, 945.5], [11.0, 1001.0], [12.0, 895.0], [13.0, 864.5], [14.0, 809.0], [15.0, 612.0], [1.0, 2630.0], [16.0, 586.0], [17.0, 606.0], [18.0, 463.0], [19.0, 592.0], [6.0, 930.0], [7.0, 996.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.366666666666666, "minX": 1.60218942E12, "maxY": 6.883333333333334, "series": [{"data": [[1.60218942E12, 5.366666666666666], [1.60218948E12, 6.883333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218948E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.2, "minX": 1.60218942E12, "maxY": 7.05, "series": [{"data": [[1.60218942E12, 5.2], [1.60218948E12, 7.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218948E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.2, "minX": 1.60218942E12, "maxY": 7.05, "series": [{"data": [[1.60218942E12, 5.2], [1.60218948E12, 7.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218948E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.2, "minX": 1.60218942E12, "maxY": 7.05, "series": [{"data": [[1.60218942E12, 5.2], [1.60218948E12, 7.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218948E12, "title": "Total Transactions Per Second"}},
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

