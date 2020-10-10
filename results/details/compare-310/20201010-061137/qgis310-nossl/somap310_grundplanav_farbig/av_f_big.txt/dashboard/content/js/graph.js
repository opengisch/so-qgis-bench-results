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
        data: {"result": {"minY": 178.0, "minX": 0.0, "maxY": 3584.0, "series": [{"data": [[0.0, 178.0], [0.1, 178.0], [0.2, 180.0], [0.3, 181.0], [0.4, 181.0], [0.5, 185.0], [0.6, 187.0], [0.7, 187.0], [0.8, 187.0], [0.9, 193.0], [1.0, 203.0], [1.1, 205.0], [1.2, 205.0], [1.3, 206.0], [1.4, 207.0], [1.5, 207.0], [1.6, 207.0], [1.7, 212.0], [1.8, 218.0], [1.9, 218.0], [2.0, 218.0], [2.1, 220.0], [2.2, 223.0], [2.3, 223.0], [2.4, 224.0], [2.5, 229.0], [2.6, 234.0], [2.7, 234.0], [2.8, 236.0], [2.9, 237.0], [3.0, 242.0], [3.1, 242.0], [3.2, 243.0], [3.3, 247.0], [3.4, 247.0], [3.5, 248.0], [3.6, 249.0], [3.7, 252.0], [3.8, 252.0], [3.9, 252.0], [4.0, 253.0], [4.1, 254.0], [4.2, 254.0], [4.3, 257.0], [4.4, 258.0], [4.5, 259.0], [4.6, 259.0], [4.7, 264.0], [4.8, 265.0], [4.9, 265.0], [5.0, 265.0], [5.1, 265.0], [5.2, 269.0], [5.3, 269.0], [5.4, 270.0], [5.5, 274.0], [5.6, 275.0], [5.7, 275.0], [5.8, 282.0], [5.9, 283.0], [6.0, 284.0], [6.1, 284.0], [6.2, 285.0], [6.3, 287.0], [6.4, 290.0], [6.5, 290.0], [6.6, 290.0], [6.7, 291.0], [6.8, 291.0], [6.9, 291.0], [7.0, 292.0], [7.1, 293.0], [7.2, 293.0], [7.3, 294.0], [7.4, 299.0], [7.5, 304.0], [7.6, 304.0], [7.7, 304.0], [7.8, 309.0], [7.9, 309.0], [8.0, 309.0], [8.1, 311.0], [8.2, 313.0], [8.3, 314.0], [8.4, 314.0], [8.5, 315.0], [8.6, 315.0], [8.7, 315.0], [8.8, 318.0], [8.9, 320.0], [9.0, 320.0], [9.1, 320.0], [9.2, 321.0], [9.3, 323.0], [9.4, 325.0], [9.5, 325.0], [9.6, 325.0], [9.7, 326.0], [9.8, 327.0], [9.9, 327.0], [10.0, 329.0], [10.1, 329.0], [10.2, 329.0], [10.3, 330.0], [10.4, 331.0], [10.5, 332.0], [10.6, 332.0], [10.7, 333.0], [10.8, 336.0], [10.9, 336.0], [11.0, 336.0], [11.1, 338.0], [11.2, 339.0], [11.3, 341.0], [11.4, 341.0], [11.5, 341.0], [11.6, 342.0], [11.7, 342.0], [11.8, 345.0], [11.9, 345.0], [12.0, 347.0], [12.1, 347.0], [12.2, 347.0], [12.3, 348.0], [12.4, 350.0], [12.5, 350.0], [12.6, 352.0], [12.7, 352.0], [12.8, 352.0], [12.9, 352.0], [13.0, 353.0], [13.1, 353.0], [13.2, 353.0], [13.3, 353.0], [13.4, 355.0], [13.5, 355.0], [13.6, 355.0], [13.7, 355.0], [13.8, 356.0], [13.9, 356.0], [14.0, 356.0], [14.1, 358.0], [14.2, 358.0], [14.3, 358.0], [14.4, 358.0], [14.5, 359.0], [14.6, 360.0], [14.7, 362.0], [14.8, 362.0], [14.9, 362.0], [15.0, 368.0], [15.1, 368.0], [15.2, 370.0], [15.3, 371.0], [15.4, 373.0], [15.5, 373.0], [15.6, 373.0], [15.7, 373.0], [15.8, 374.0], [15.9, 374.0], [16.0, 376.0], [16.1, 376.0], [16.2, 378.0], [16.3, 378.0], [16.4, 378.0], [16.5, 380.0], [16.6, 380.0], [16.7, 380.0], [16.8, 382.0], [16.9, 389.0], [17.0, 389.0], [17.1, 390.0], [17.2, 393.0], [17.3, 393.0], [17.4, 393.0], [17.5, 396.0], [17.6, 396.0], [17.7, 397.0], [17.8, 397.0], [17.9, 398.0], [18.0, 398.0], [18.1, 399.0], [18.2, 399.0], [18.3, 400.0], [18.4, 401.0], [18.5, 401.0], [18.6, 411.0], [18.7, 413.0], [18.8, 418.0], [18.9, 418.0], [19.0, 418.0], [19.1, 418.0], [19.2, 423.0], [19.3, 423.0], [19.4, 425.0], [19.5, 425.0], [19.6, 432.0], [19.7, 432.0], [19.8, 436.0], [19.9, 440.0], [20.0, 443.0], [20.1, 443.0], [20.2, 446.0], [20.3, 447.0], [20.4, 447.0], [20.5, 448.0], [20.6, 451.0], [20.7, 454.0], [20.8, 454.0], [20.9, 454.0], [21.0, 454.0], [21.1, 454.0], [21.2, 454.0], [21.3, 454.0], [21.4, 456.0], [21.5, 456.0], [21.6, 456.0], [21.7, 456.0], [21.8, 458.0], [21.9, 458.0], [22.0, 464.0], [22.1, 465.0], [22.2, 467.0], [22.3, 467.0], [22.4, 467.0], [22.5, 467.0], [22.6, 471.0], [22.7, 471.0], [22.8, 472.0], [22.9, 472.0], [23.0, 480.0], [23.1, 480.0], [23.2, 481.0], [23.3, 483.0], [23.4, 483.0], [23.5, 487.0], [23.6, 488.0], [23.7, 488.0], [23.8, 488.0], [23.9, 488.0], [24.0, 492.0], [24.1, 495.0], [24.2, 495.0], [24.3, 499.0], [24.4, 507.0], [24.5, 509.0], [24.6, 509.0], [24.7, 513.0], [24.8, 513.0], [24.9, 517.0], [25.0, 517.0], [25.1, 517.0], [25.2, 521.0], [25.3, 521.0], [25.4, 528.0], [25.5, 529.0], [25.6, 531.0], [25.7, 531.0], [25.8, 532.0], [25.9, 535.0], [26.0, 535.0], [26.1, 535.0], [26.2, 537.0], [26.3, 539.0], [26.4, 539.0], [26.5, 539.0], [26.6, 542.0], [26.7, 545.0], [26.8, 545.0], [26.9, 547.0], [27.0, 549.0], [27.1, 549.0], [27.2, 549.0], [27.3, 550.0], [27.4, 553.0], [27.5, 554.0], [27.6, 554.0], [27.7, 555.0], [27.8, 556.0], [27.9, 556.0], [28.0, 556.0], [28.1, 556.0], [28.2, 557.0], [28.3, 559.0], [28.4, 559.0], [28.5, 559.0], [28.6, 560.0], [28.7, 560.0], [28.8, 561.0], [28.9, 562.0], [29.0, 562.0], [29.1, 562.0], [29.2, 563.0], [29.3, 563.0], [29.4, 563.0], [29.5, 563.0], [29.6, 565.0], [29.7, 566.0], [29.8, 566.0], [29.9, 566.0], [30.0, 567.0], [30.1, 567.0], [30.2, 567.0], [30.3, 567.0], [30.4, 569.0], [30.5, 569.0], [30.6, 569.0], [30.7, 570.0], [30.8, 573.0], [30.9, 574.0], [31.0, 574.0], [31.1, 574.0], [31.2, 575.0], [31.3, 578.0], [31.4, 578.0], [31.5, 578.0], [31.6, 579.0], [31.7, 579.0], [31.8, 579.0], [31.9, 581.0], [32.0, 582.0], [32.1, 582.0], [32.2, 583.0], [32.3, 583.0], [32.4, 584.0], [32.5, 584.0], [32.6, 584.0], [32.7, 585.0], [32.8, 585.0], [32.9, 585.0], [33.0, 585.0], [33.1, 585.0], [33.2, 586.0], [33.3, 586.0], [33.4, 587.0], [33.5, 590.0], [33.6, 590.0], [33.7, 590.0], [33.8, 591.0], [33.9, 591.0], [34.0, 591.0], [34.1, 593.0], [34.2, 594.0], [34.3, 596.0], [34.4, 596.0], [34.5, 597.0], [34.6, 598.0], [34.7, 599.0], [34.8, 599.0], [34.9, 601.0], [35.0, 602.0], [35.1, 602.0], [35.2, 606.0], [35.3, 608.0], [35.4, 608.0], [35.5, 608.0], [35.6, 610.0], [35.7, 611.0], [35.8, 615.0], [35.9, 615.0], [36.0, 616.0], [36.1, 616.0], [36.2, 617.0], [36.3, 617.0], [36.4, 619.0], [36.5, 621.0], [36.6, 622.0], [36.7, 622.0], [36.8, 622.0], [36.9, 623.0], [37.0, 623.0], [37.1, 625.0], [37.2, 628.0], [37.3, 630.0], [37.4, 630.0], [37.5, 630.0], [37.6, 634.0], [37.7, 635.0], [37.8, 635.0], [37.9, 640.0], [38.0, 641.0], [38.1, 642.0], [38.2, 642.0], [38.3, 648.0], [38.4, 650.0], [38.5, 650.0], [38.6, 653.0], [38.7, 653.0], [38.8, 658.0], [38.9, 658.0], [39.0, 659.0], [39.1, 660.0], [39.2, 663.0], [39.3, 663.0], [39.4, 663.0], [39.5, 665.0], [39.6, 665.0], [39.7, 665.0], [39.8, 668.0], [39.9, 670.0], [40.0, 671.0], [40.1, 671.0], [40.2, 673.0], [40.3, 678.0], [40.4, 678.0], [40.5, 678.0], [40.6, 679.0], [40.7, 683.0], [40.8, 683.0], [40.9, 683.0], [41.0, 684.0], [41.1, 689.0], [41.2, 689.0], [41.3, 690.0], [41.4, 691.0], [41.5, 693.0], [41.6, 693.0], [41.7, 695.0], [41.8, 696.0], [41.9, 696.0], [42.0, 697.0], [42.1, 698.0], [42.2, 698.0], [42.3, 698.0], [42.4, 699.0], [42.5, 703.0], [42.6, 703.0], [42.7, 703.0], [42.8, 707.0], [42.9, 707.0], [43.0, 707.0], [43.1, 707.0], [43.2, 708.0], [43.3, 709.0], [43.4, 709.0], [43.5, 712.0], [43.6, 713.0], [43.7, 713.0], [43.8, 713.0], [43.9, 714.0], [44.0, 717.0], [44.1, 718.0], [44.2, 718.0], [44.3, 722.0], [44.4, 723.0], [44.5, 724.0], [44.6, 724.0], [44.7, 725.0], [44.8, 729.0], [44.9, 729.0], [45.0, 729.0], [45.1, 730.0], [45.2, 731.0], [45.3, 731.0], [45.4, 733.0], [45.5, 733.0], [45.6, 734.0], [45.7, 734.0], [45.8, 736.0], [45.9, 738.0], [46.0, 738.0], [46.1, 738.0], [46.2, 738.0], [46.3, 738.0], [46.4, 739.0], [46.5, 739.0], [46.6, 740.0], [46.7, 741.0], [46.8, 741.0], [46.9, 742.0], [47.0, 743.0], [47.1, 748.0], [47.2, 748.0], [47.3, 749.0], [47.4, 751.0], [47.5, 753.0], [47.6, 753.0], [47.7, 756.0], [47.8, 757.0], [47.9, 763.0], [48.0, 763.0], [48.1, 767.0], [48.2, 768.0], [48.3, 770.0], [48.4, 770.0], [48.5, 772.0], [48.6, 774.0], [48.7, 774.0], [48.8, 774.0], [48.9, 776.0], [49.0, 776.0], [49.1, 776.0], [49.2, 778.0], [49.3, 779.0], [49.4, 783.0], [49.5, 783.0], [49.6, 790.0], [49.7, 792.0], [49.8, 793.0], [49.9, 793.0], [50.0, 793.0], [50.1, 794.0], [50.2, 794.0], [50.3, 794.0], [50.4, 803.0], [50.5, 806.0], [50.6, 806.0], [50.7, 807.0], [50.8, 808.0], [50.9, 812.0], [51.0, 812.0], [51.1, 813.0], [51.2, 813.0], [51.3, 816.0], [51.4, 816.0], [51.5, 819.0], [51.6, 822.0], [51.7, 822.0], [51.8, 822.0], [51.9, 823.0], [52.0, 823.0], [52.1, 823.0], [52.2, 824.0], [52.3, 827.0], [52.4, 828.0], [52.5, 828.0], [52.6, 829.0], [52.7, 830.0], [52.8, 836.0], [52.9, 836.0], [53.0, 837.0], [53.1, 837.0], [53.2, 838.0], [53.3, 838.0], [53.4, 844.0], [53.5, 845.0], [53.6, 845.0], [53.7, 850.0], [53.8, 856.0], [53.9, 859.0], [54.0, 859.0], [54.1, 863.0], [54.2, 864.0], [54.3, 870.0], [54.4, 870.0], [54.5, 874.0], [54.6, 876.0], [54.7, 877.0], [54.8, 877.0], [54.9, 879.0], [55.0, 880.0], [55.1, 880.0], [55.2, 880.0], [55.3, 882.0], [55.4, 883.0], [55.5, 883.0], [55.6, 883.0], [55.7, 883.0], [55.8, 889.0], [55.9, 889.0], [56.0, 892.0], [56.1, 894.0], [56.2, 899.0], [56.3, 899.0], [56.4, 901.0], [56.5, 902.0], [56.6, 903.0], [56.7, 903.0], [56.8, 903.0], [56.9, 904.0], [57.0, 904.0], [57.1, 906.0], [57.2, 906.0], [57.3, 910.0], [57.4, 910.0], [57.5, 911.0], [57.6, 912.0], [57.7, 916.0], [57.8, 916.0], [57.9, 917.0], [58.0, 917.0], [58.1, 919.0], [58.2, 919.0], [58.3, 919.0], [58.4, 920.0], [58.5, 920.0], [58.6, 920.0], [58.7, 922.0], [58.8, 924.0], [58.9, 924.0], [59.0, 925.0], [59.1, 925.0], [59.2, 926.0], [59.3, 926.0], [59.4, 927.0], [59.5, 929.0], [59.6, 933.0], [59.7, 933.0], [59.8, 934.0], [59.9, 935.0], [60.0, 935.0], [60.1, 935.0], [60.2, 937.0], [60.3, 939.0], [60.4, 939.0], [60.5, 939.0], [60.6, 940.0], [60.7, 940.0], [60.8, 940.0], [60.9, 941.0], [61.0, 942.0], [61.1, 947.0], [61.2, 947.0], [61.3, 949.0], [61.4, 953.0], [61.5, 958.0], [61.6, 958.0], [61.7, 961.0], [61.8, 961.0], [61.9, 961.0], [62.0, 961.0], [62.1, 965.0], [62.2, 968.0], [62.3, 968.0], [62.4, 969.0], [62.5, 969.0], [62.6, 973.0], [62.7, 973.0], [62.8, 974.0], [62.9, 974.0], [63.0, 986.0], [63.1, 986.0], [63.2, 986.0], [63.3, 988.0], [63.4, 988.0], [63.5, 989.0], [63.6, 991.0], [63.7, 991.0], [63.8, 991.0], [63.9, 996.0], [64.0, 998.0], [64.1, 999.0], [64.2, 999.0], [64.3, 999.0], [64.4, 1002.0], [64.5, 1002.0], [64.6, 1002.0], [64.7, 1004.0], [64.8, 1004.0], [64.9, 1008.0], [65.0, 1008.0], [65.1, 1012.0], [65.2, 1013.0], [65.3, 1013.0], [65.4, 1017.0], [65.5, 1017.0], [65.6, 1020.0], [65.7, 1020.0], [65.8, 1024.0], [65.9, 1024.0], [66.0, 1025.0], [66.1, 1025.0], [66.2, 1025.0], [66.3, 1026.0], [66.4, 1026.0], [66.5, 1026.0], [66.6, 1027.0], [66.7, 1029.0], [66.8, 1029.0], [66.9, 1029.0], [67.0, 1030.0], [67.1, 1031.0], [67.2, 1031.0], [67.3, 1031.0], [67.4, 1031.0], [67.5, 1032.0], [67.6, 1032.0], [67.7, 1032.0], [67.8, 1034.0], [67.9, 1035.0], [68.0, 1035.0], [68.1, 1035.0], [68.2, 1035.0], [68.3, 1036.0], [68.4, 1036.0], [68.5, 1036.0], [68.6, 1036.0], [68.7, 1036.0], [68.8, 1037.0], [68.9, 1037.0], [69.0, 1037.0], [69.1, 1037.0], [69.2, 1038.0], [69.3, 1039.0], [69.4, 1040.0], [69.5, 1040.0], [69.6, 1041.0], [69.7, 1041.0], [69.8, 1042.0], [69.9, 1042.0], [70.0, 1043.0], [70.1, 1043.0], [70.2, 1043.0], [70.3, 1044.0], [70.4, 1044.0], [70.5, 1048.0], [70.6, 1048.0], [70.7, 1048.0], [70.8, 1049.0], [70.9, 1050.0], [71.0, 1050.0], [71.1, 1052.0], [71.2, 1053.0], [71.3, 1053.0], [71.4, 1053.0], [71.5, 1054.0], [71.6, 1056.0], [71.7, 1056.0], [71.8, 1058.0], [71.9, 1058.0], [72.0, 1059.0], [72.1, 1059.0], [72.2, 1062.0], [72.3, 1063.0], [72.4, 1065.0], [72.5, 1065.0], [72.6, 1067.0], [72.7, 1068.0], [72.8, 1069.0], [72.9, 1069.0], [73.0, 1071.0], [73.1, 1072.0], [73.2, 1072.0], [73.3, 1072.0], [73.4, 1073.0], [73.5, 1080.0], [73.6, 1080.0], [73.7, 1081.0], [73.8, 1082.0], [73.9, 1083.0], [74.0, 1083.0], [74.1, 1090.0], [74.2, 1092.0], [74.3, 1093.0], [74.4, 1093.0], [74.5, 1095.0], [74.6, 1095.0], [74.7, 1096.0], [74.8, 1096.0], [74.9, 1105.0], [75.0, 1105.0], [75.1, 1105.0], [75.2, 1110.0], [75.3, 1112.0], [75.4, 1112.0], [75.5, 1112.0], [75.6, 1114.0], [75.7, 1115.0], [75.8, 1115.0], [75.9, 1115.0], [76.0, 1116.0], [76.1, 1118.0], [76.2, 1118.0], [76.3, 1118.0], [76.4, 1121.0], [76.5, 1121.0], [76.6, 1122.0], [76.7, 1122.0], [76.8, 1128.0], [76.9, 1130.0], [77.0, 1130.0], [77.1, 1131.0], [77.2, 1132.0], [77.3, 1135.0], [77.4, 1135.0], [77.5, 1136.0], [77.6, 1138.0], [77.7, 1141.0], [77.8, 1141.0], [77.9, 1142.0], [78.0, 1145.0], [78.1, 1146.0], [78.2, 1146.0], [78.3, 1147.0], [78.4, 1147.0], [78.5, 1147.0], [78.6, 1147.0], [78.7, 1148.0], [78.8, 1148.0], [78.9, 1148.0], [79.0, 1149.0], [79.1, 1149.0], [79.2, 1151.0], [79.3, 1151.0], [79.4, 1152.0], [79.5, 1152.0], [79.6, 1155.0], [79.7, 1155.0], [79.8, 1156.0], [79.9, 1158.0], [80.0, 1160.0], [80.1, 1160.0], [80.2, 1161.0], [80.3, 1161.0], [80.4, 1161.0], [80.5, 1161.0], [80.6, 1163.0], [80.7, 1165.0], [80.8, 1165.0], [80.9, 1171.0], [81.0, 1172.0], [81.1, 1174.0], [81.2, 1174.0], [81.3, 1175.0], [81.4, 1176.0], [81.5, 1177.0], [81.6, 1177.0], [81.7, 1181.0], [81.8, 1182.0], [81.9, 1182.0], [82.0, 1182.0], [82.1, 1182.0], [82.2, 1182.0], [82.3, 1182.0], [82.4, 1182.0], [82.5, 1184.0], [82.6, 1185.0], [82.7, 1185.0], [82.8, 1192.0], [82.9, 1197.0], [83.0, 1198.0], [83.1, 1198.0], [83.2, 1209.0], [83.3, 1218.0], [83.4, 1218.0], [83.5, 1218.0], [83.6, 1220.0], [83.7, 1221.0], [83.8, 1221.0], [83.9, 1221.0], [84.0, 1221.0], [84.1, 1223.0], [84.2, 1223.0], [84.3, 1227.0], [84.4, 1233.0], [84.5, 1242.0], [84.6, 1242.0], [84.7, 1242.0], [84.8, 1249.0], [84.9, 1251.0], [85.0, 1251.0], [85.1, 1254.0], [85.2, 1259.0], [85.3, 1259.0], [85.4, 1261.0], [85.5, 1263.0], [85.6, 1264.0], [85.7, 1264.0], [85.8, 1267.0], [85.9, 1267.0], [86.0, 1272.0], [86.1, 1272.0], [86.2, 1275.0], [86.3, 1280.0], [86.4, 1282.0], [86.5, 1282.0], [86.6, 1285.0], [86.7, 1289.0], [86.8, 1289.0], [86.9, 1291.0], [87.0, 1293.0], [87.1, 1295.0], [87.2, 1295.0], [87.3, 1296.0], [87.4, 1297.0], [87.5, 1297.0], [87.6, 1297.0], [87.7, 1298.0], [87.8, 1327.0], [87.9, 1333.0], [88.0, 1333.0], [88.1, 1340.0], [88.2, 1340.0], [88.3, 1343.0], [88.4, 1343.0], [88.5, 1343.0], [88.6, 1345.0], [88.7, 1345.0], [88.8, 1349.0], [88.9, 1364.0], [89.0, 1367.0], [89.1, 1367.0], [89.2, 1367.0], [89.3, 1367.0], [89.4, 1368.0], [89.5, 1368.0], [89.6, 1387.0], [89.7, 1389.0], [89.8, 1391.0], [89.9, 1391.0], [90.0, 1393.0], [90.1, 1397.0], [90.2, 1397.0], [90.3, 1399.0], [90.4, 1401.0], [90.5, 1408.0], [90.6, 1408.0], [90.7, 1409.0], [90.8, 1414.0], [90.9, 1415.0], [91.0, 1415.0], [91.1, 1416.0], [91.2, 1427.0], [91.3, 1432.0], [91.4, 1432.0], [91.5, 1432.0], [91.6, 1434.0], [91.7, 1434.0], [91.8, 1435.0], [91.9, 1436.0], [92.0, 1436.0], [92.1, 1436.0], [92.2, 1437.0], [92.3, 1446.0], [92.4, 1452.0], [92.5, 1452.0], [92.6, 1458.0], [92.7, 1467.0], [92.8, 1468.0], [92.9, 1468.0], [93.0, 1475.0], [93.1, 1478.0], [93.2, 1510.0], [93.3, 1510.0], [93.4, 1514.0], [93.5, 1515.0], [93.6, 1515.0], [93.7, 1521.0], [93.8, 1525.0], [93.9, 1528.0], [94.0, 1528.0], [94.1, 1558.0], [94.2, 1570.0], [94.3, 1573.0], [94.4, 1573.0], [94.5, 1576.0], [94.6, 1583.0], [94.7, 1601.0], [94.8, 1601.0], [94.9, 1622.0], [95.0, 1637.0], [95.1, 1637.0], [95.2, 1661.0], [95.3, 1667.0], [95.4, 1671.0], [95.5, 1671.0], [95.6, 1673.0], [95.7, 1682.0], [95.8, 1685.0], [95.9, 1685.0], [96.0, 1685.0], [96.1, 1709.0], [96.2, 1760.0], [96.3, 1760.0], [96.4, 1778.0], [96.5, 1784.0], [96.6, 1790.0], [96.7, 1790.0], [96.8, 1808.0], [96.9, 1816.0], [97.0, 1816.0], [97.1, 1832.0], [97.2, 1851.0], [97.3, 1861.0], [97.4, 1861.0], [97.5, 1865.0], [97.6, 1904.0], [97.7, 2010.0], [97.8, 2010.0], [97.9, 2013.0], [98.0, 2082.0], [98.1, 2201.0], [98.2, 2201.0], [98.3, 2613.0], [98.4, 2625.0], [98.5, 2625.0], [98.6, 2711.0], [98.7, 2735.0], [98.8, 2818.0], [98.9, 2818.0], [99.0, 2868.0], [99.1, 2988.0], [99.2, 3026.0], [99.3, 3026.0], [99.4, 3103.0], [99.5, 3265.0], [99.6, 3356.0], [99.7, 3356.0], [99.8, 3407.0], [99.9, 3584.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 79.0, "series": [{"data": [[600.0, 56.0], [700.0, 58.0], [800.0, 44.0], [900.0, 59.0], [1000.0, 77.0], [1100.0, 61.0], [1200.0, 34.0], [1300.0, 19.0], [1400.0, 21.0], [1500.0, 11.0], [100.0, 7.0], [1600.0, 10.0], [1700.0, 5.0], [1800.0, 6.0], [1900.0, 1.0], [2000.0, 3.0], [2200.0, 1.0], [2600.0, 2.0], [2800.0, 2.0], [2700.0, 2.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [3200.0, 1.0], [200.0, 48.0], [3300.0, 1.0], [3400.0, 1.0], [3500.0, 1.0], [300.0, 79.0], [400.0, 45.0], [500.0, 77.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 506.0, "series": [{"data": [[0.0, 179.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 506.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 50.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.759358288770056, "minX": 1.6023141E12, "maxY": 10.0, "series": [{"data": [[1.6023141E12, 10.0], [1.60231416E12, 9.759358288770056]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231416E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 265.0, "minX": 1.0, "maxY": 1036.0, "series": [{"data": [[8.0, 265.0], [4.0, 549.0], [2.0, 1036.0], [1.0, 920.0], [9.0, 329.0], [10.0, 859.3815426997247], [5.0, 596.0], [6.0, 578.0], [3.0, 1024.0], [7.0, 591.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 856.8693877551024]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1398.8333333333333, "minX": 1.6023141E12, "maxY": 1427584.0333333334, "series": [{"data": [[1.6023141E12, 1427584.0333333334], [1.60231416E12, 408184.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023141E12, 4124.2], [1.60231416E12, 1398.8333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231416E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 760.2620320855616, "minX": 1.6023141E12, "maxY": 889.8357664233579, "series": [{"data": [[1.6023141E12, 889.8357664233579], [1.60231416E12, 760.2620320855616]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231416E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 759.411764705882, "minX": 1.6023141E12, "maxY": 888.7500000000002, "series": [{"data": [[1.6023141E12, 888.7500000000002], [1.60231416E12, 759.411764705882]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231416E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.05882352941176471, "minX": 1.6023141E12, "maxY": 0.15875912408759105, "series": [{"data": [[1.6023141E12, 0.15875912408759105], [1.60231416E12, 0.05882352941176471]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231416E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.6023141E12, "maxY": 3584.0, "series": [{"data": [[1.6023141E12, 3584.0], [1.60231416E12, 1832.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023141E12, 186.8819997382164], [1.60231416E12, 200.83999910354615]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023141E12, 189.61060031414033], [1.60231416E12, 204.22400035858155]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023141E12, 188.2929996073246], [1.60231416E12, 202.71999955177307]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023141E12, 178.0], [1.60231416E12, 187.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023141E12, 828.5], [1.60231416E12, 691.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231416E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 517.0, "minX": 2.0, "maxY": 1340.0, "series": [{"data": [[8.0, 1062.0], [2.0, 978.0], [9.0, 1132.0], [10.0, 998.5], [11.0, 1002.0], [12.0, 961.0], [13.0, 731.0], [14.0, 656.5], [15.0, 624.5], [16.0, 646.5], [17.0, 517.0], [18.0, 689.5], [6.0, 1340.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 516.0, "minX": 2.0, "maxY": 1339.0, "series": [{"data": [[8.0, 1061.5], [2.0, 978.0], [9.0, 1125.0], [10.0, 994.5], [11.0, 1002.0], [12.0, 960.0], [13.0, 729.0], [14.0, 656.0], [15.0, 624.0], [16.0, 646.5], [17.0, 516.0], [18.0, 689.0], [6.0, 1339.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.95, "minX": 1.6023141E12, "maxY": 9.3, "series": [{"data": [[1.6023141E12, 9.3], [1.60231416E12, 2.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231416E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.1166666666666667, "minX": 1.6023141E12, "maxY": 9.133333333333333, "series": [{"data": [[1.6023141E12, 9.133333333333333], [1.60231416E12, 3.1166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231416E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.1166666666666667, "minX": 1.6023141E12, "maxY": 9.133333333333333, "series": [{"data": [[1.6023141E12, 9.133333333333333], [1.60231416E12, 3.1166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231416E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.1166666666666667, "minX": 1.6023141E12, "maxY": 9.133333333333333, "series": [{"data": [[1.6023141E12, 9.133333333333333], [1.60231416E12, 3.1166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231416E12, "title": "Total Transactions Per Second"}},
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

