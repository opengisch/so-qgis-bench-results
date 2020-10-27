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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 3896.0, "series": [{"data": [[0.0, 182.0], [0.1, 182.0], [0.2, 184.0], [0.3, 185.0], [0.4, 185.0], [0.5, 186.0], [0.6, 200.0], [0.7, 205.0], [0.8, 205.0], [0.9, 208.0], [1.0, 219.0], [1.1, 222.0], [1.2, 222.0], [1.3, 224.0], [1.4, 224.0], [1.5, 225.0], [1.6, 225.0], [1.7, 227.0], [1.8, 228.0], [1.9, 228.0], [2.0, 232.0], [2.1, 232.0], [2.2, 233.0], [2.3, 233.0], [2.4, 235.0], [2.5, 236.0], [2.6, 242.0], [2.7, 242.0], [2.8, 243.0], [2.9, 246.0], [3.0, 248.0], [3.1, 248.0], [3.2, 249.0], [3.3, 250.0], [3.4, 250.0], [3.5, 250.0], [3.6, 256.0], [3.7, 257.0], [3.8, 257.0], [3.9, 265.0], [4.0, 265.0], [4.1, 266.0], [4.2, 266.0], [4.3, 268.0], [4.4, 272.0], [4.5, 273.0], [4.6, 273.0], [4.7, 276.0], [4.8, 276.0], [4.9, 276.0], [5.0, 276.0], [5.1, 277.0], [5.2, 277.0], [5.3, 277.0], [5.4, 279.0], [5.5, 279.0], [5.6, 281.0], [5.7, 281.0], [5.8, 283.0], [5.9, 284.0], [6.0, 284.0], [6.1, 284.0], [6.2, 285.0], [6.3, 287.0], [6.4, 291.0], [6.5, 291.0], [6.6, 292.0], [6.7, 295.0], [6.8, 295.0], [6.9, 296.0], [7.0, 297.0], [7.1, 298.0], [7.2, 298.0], [7.3, 300.0], [7.4, 302.0], [7.5, 302.0], [7.6, 302.0], [7.7, 303.0], [7.8, 303.0], [7.9, 305.0], [8.0, 305.0], [8.1, 307.0], [8.2, 310.0], [8.3, 311.0], [8.4, 311.0], [8.5, 312.0], [8.6, 312.0], [8.7, 312.0], [8.8, 312.0], [8.9, 317.0], [9.0, 318.0], [9.1, 318.0], [9.2, 319.0], [9.3, 319.0], [9.4, 319.0], [9.5, 319.0], [9.6, 320.0], [9.7, 321.0], [9.8, 322.0], [9.9, 322.0], [10.0, 325.0], [10.1, 326.0], [10.2, 326.0], [10.3, 327.0], [10.4, 327.0], [10.5, 328.0], [10.6, 328.0], [10.7, 329.0], [10.8, 330.0], [10.9, 331.0], [11.0, 331.0], [11.1, 333.0], [11.2, 336.0], [11.3, 337.0], [11.4, 337.0], [11.5, 340.0], [11.6, 344.0], [11.7, 344.0], [11.8, 344.0], [11.9, 344.0], [12.0, 344.0], [12.1, 344.0], [12.2, 345.0], [12.3, 347.0], [12.4, 348.0], [12.5, 348.0], [12.6, 352.0], [12.7, 354.0], [12.8, 355.0], [12.9, 355.0], [13.0, 356.0], [13.1, 357.0], [13.2, 358.0], [13.3, 358.0], [13.4, 359.0], [13.5, 359.0], [13.6, 359.0], [13.7, 360.0], [13.8, 361.0], [13.9, 361.0], [14.0, 361.0], [14.1, 362.0], [14.2, 363.0], [14.3, 364.0], [14.4, 364.0], [14.5, 366.0], [14.6, 367.0], [14.7, 367.0], [14.8, 367.0], [14.9, 368.0], [15.0, 369.0], [15.1, 369.0], [15.2, 371.0], [15.3, 372.0], [15.4, 374.0], [15.5, 374.0], [15.6, 374.0], [15.7, 375.0], [15.8, 375.0], [15.9, 375.0], [16.0, 376.0], [16.1, 376.0], [16.2, 377.0], [16.3, 377.0], [16.4, 378.0], [16.5, 381.0], [16.6, 382.0], [16.7, 382.0], [16.8, 382.0], [16.9, 383.0], [17.0, 383.0], [17.1, 383.0], [17.2, 384.0], [17.3, 389.0], [17.4, 389.0], [17.5, 395.0], [17.6, 395.0], [17.7, 395.0], [17.8, 395.0], [17.9, 400.0], [18.0, 404.0], [18.1, 404.0], [18.2, 404.0], [18.3, 405.0], [18.4, 407.0], [18.5, 407.0], [18.6, 413.0], [18.7, 414.0], [18.8, 417.0], [18.9, 417.0], [19.0, 418.0], [19.1, 419.0], [19.2, 419.0], [19.3, 419.0], [19.4, 419.0], [19.5, 419.0], [19.6, 420.0], [19.7, 420.0], [19.8, 421.0], [19.9, 422.0], [20.0, 422.0], [20.1, 422.0], [20.2, 422.0], [20.3, 426.0], [20.4, 426.0], [20.5, 428.0], [20.6, 433.0], [20.7, 436.0], [20.8, 436.0], [20.9, 438.0], [21.0, 439.0], [21.1, 440.0], [21.2, 440.0], [21.3, 448.0], [21.4, 448.0], [21.5, 453.0], [21.6, 453.0], [21.7, 453.0], [21.8, 458.0], [21.9, 458.0], [22.0, 468.0], [22.1, 469.0], [22.2, 470.0], [22.3, 470.0], [22.4, 470.0], [22.5, 472.0], [22.6, 478.0], [22.7, 478.0], [22.8, 479.0], [22.9, 481.0], [23.0, 487.0], [23.1, 487.0], [23.2, 491.0], [23.3, 493.0], [23.4, 493.0], [23.5, 493.0], [23.6, 495.0], [23.7, 498.0], [23.8, 498.0], [23.9, 501.0], [24.0, 504.0], [24.1, 506.0], [24.2, 506.0], [24.3, 510.0], [24.4, 510.0], [24.5, 510.0], [24.6, 510.0], [24.7, 511.0], [24.8, 511.0], [24.9, 513.0], [25.0, 513.0], [25.1, 516.0], [25.2, 516.0], [25.3, 516.0], [25.4, 520.0], [25.5, 521.0], [25.6, 524.0], [25.7, 524.0], [25.8, 525.0], [25.9, 525.0], [26.0, 532.0], [26.1, 532.0], [26.2, 533.0], [26.3, 534.0], [26.4, 535.0], [26.5, 535.0], [26.6, 542.0], [26.7, 542.0], [26.8, 542.0], [26.9, 542.0], [27.0, 543.0], [27.1, 543.0], [27.2, 543.0], [27.3, 547.0], [27.4, 548.0], [27.5, 549.0], [27.6, 549.0], [27.7, 552.0], [27.8, 554.0], [27.9, 554.0], [28.0, 554.0], [28.1, 556.0], [28.2, 556.0], [28.3, 557.0], [28.4, 557.0], [28.5, 559.0], [28.6, 565.0], [28.7, 565.0], [28.8, 566.0], [28.9, 566.0], [29.0, 567.0], [29.1, 567.0], [29.2, 569.0], [29.3, 570.0], [29.4, 571.0], [29.5, 571.0], [29.6, 573.0], [29.7, 574.0], [29.8, 575.0], [29.9, 575.0], [30.0, 575.0], [30.1, 576.0], [30.2, 576.0], [30.3, 576.0], [30.4, 579.0], [30.5, 580.0], [30.6, 580.0], [30.7, 581.0], [30.8, 583.0], [30.9, 584.0], [31.0, 584.0], [31.1, 586.0], [31.2, 587.0], [31.3, 588.0], [31.4, 588.0], [31.5, 588.0], [31.6, 589.0], [31.7, 589.0], [31.8, 590.0], [31.9, 590.0], [32.0, 591.0], [32.1, 591.0], [32.2, 593.0], [32.3, 593.0], [32.4, 594.0], [32.5, 594.0], [32.6, 596.0], [32.7, 596.0], [32.8, 598.0], [32.9, 598.0], [33.0, 599.0], [33.1, 601.0], [33.2, 601.0], [33.3, 601.0], [33.4, 602.0], [33.5, 602.0], [33.6, 602.0], [33.7, 603.0], [33.8, 605.0], [33.9, 606.0], [34.0, 606.0], [34.1, 607.0], [34.2, 608.0], [34.3, 611.0], [34.4, 611.0], [34.5, 612.0], [34.6, 613.0], [34.7, 614.0], [34.8, 614.0], [34.9, 616.0], [35.0, 616.0], [35.1, 616.0], [35.2, 616.0], [35.3, 618.0], [35.4, 618.0], [35.5, 618.0], [35.6, 621.0], [35.7, 624.0], [35.8, 625.0], [35.9, 625.0], [36.0, 625.0], [36.1, 625.0], [36.2, 626.0], [36.3, 626.0], [36.4, 626.0], [36.5, 627.0], [36.6, 629.0], [36.7, 629.0], [36.8, 631.0], [36.9, 631.0], [37.0, 631.0], [37.1, 632.0], [37.2, 633.0], [37.3, 638.0], [37.4, 638.0], [37.5, 638.0], [37.6, 643.0], [37.7, 643.0], [37.8, 643.0], [37.9, 647.0], [38.0, 647.0], [38.1, 648.0], [38.2, 648.0], [38.3, 648.0], [38.4, 652.0], [38.5, 652.0], [38.6, 653.0], [38.7, 655.0], [38.8, 661.0], [38.9, 661.0], [39.0, 664.0], [39.1, 664.0], [39.2, 665.0], [39.3, 665.0], [39.4, 665.0], [39.5, 667.0], [39.6, 673.0], [39.7, 673.0], [39.8, 674.0], [39.9, 675.0], [40.0, 675.0], [40.1, 675.0], [40.2, 676.0], [40.3, 677.0], [40.4, 677.0], [40.5, 678.0], [40.6, 680.0], [40.7, 685.0], [40.8, 685.0], [40.9, 685.0], [41.0, 687.0], [41.1, 688.0], [41.2, 688.0], [41.3, 689.0], [41.4, 691.0], [41.5, 692.0], [41.6, 692.0], [41.7, 696.0], [41.8, 696.0], [41.9, 696.0], [42.0, 696.0], [42.1, 697.0], [42.2, 698.0], [42.3, 698.0], [42.4, 702.0], [42.5, 704.0], [42.6, 709.0], [42.7, 709.0], [42.8, 710.0], [42.9, 714.0], [43.0, 714.0], [43.1, 714.0], [43.2, 716.0], [43.3, 720.0], [43.4, 720.0], [43.5, 720.0], [43.6, 723.0], [43.7, 723.0], [43.8, 723.0], [43.9, 730.0], [44.0, 732.0], [44.1, 735.0], [44.2, 735.0], [44.3, 735.0], [44.4, 735.0], [44.5, 736.0], [44.6, 736.0], [44.7, 745.0], [44.8, 749.0], [44.9, 751.0], [45.0, 751.0], [45.1, 751.0], [45.2, 752.0], [45.3, 752.0], [45.4, 752.0], [45.5, 753.0], [45.6, 754.0], [45.7, 754.0], [45.8, 755.0], [45.9, 756.0], [46.0, 756.0], [46.1, 756.0], [46.2, 760.0], [46.3, 761.0], [46.4, 762.0], [46.5, 762.0], [46.6, 762.0], [46.7, 763.0], [46.8, 763.0], [46.9, 764.0], [47.0, 767.0], [47.1, 768.0], [47.2, 768.0], [47.3, 770.0], [47.4, 771.0], [47.5, 775.0], [47.6, 775.0], [47.7, 775.0], [47.8, 776.0], [47.9, 776.0], [48.0, 776.0], [48.1, 779.0], [48.2, 781.0], [48.3, 782.0], [48.4, 782.0], [48.5, 782.0], [48.6, 783.0], [48.7, 783.0], [48.8, 783.0], [48.9, 783.0], [49.0, 789.0], [49.1, 789.0], [49.2, 794.0], [49.3, 794.0], [49.4, 799.0], [49.5, 799.0], [49.6, 802.0], [49.7, 803.0], [49.8, 806.0], [49.9, 806.0], [50.0, 806.0], [50.1, 807.0], [50.2, 807.0], [50.3, 811.0], [50.4, 812.0], [50.5, 813.0], [50.6, 813.0], [50.7, 824.0], [50.8, 828.0], [50.9, 828.0], [51.0, 828.0], [51.1, 831.0], [51.2, 832.0], [51.3, 833.0], [51.4, 833.0], [51.5, 837.0], [51.6, 840.0], [51.7, 840.0], [51.8, 841.0], [51.9, 841.0], [52.0, 843.0], [52.1, 843.0], [52.2, 844.0], [52.3, 844.0], [52.4, 844.0], [52.5, 844.0], [52.6, 847.0], [52.7, 847.0], [52.8, 848.0], [52.9, 848.0], [53.0, 848.0], [53.1, 850.0], [53.2, 851.0], [53.3, 851.0], [53.4, 852.0], [53.5, 853.0], [53.6, 853.0], [53.7, 856.0], [53.8, 857.0], [53.9, 857.0], [54.0, 857.0], [54.1, 859.0], [54.2, 863.0], [54.3, 864.0], [54.4, 864.0], [54.5, 866.0], [54.6, 867.0], [54.7, 871.0], [54.8, 871.0], [54.9, 873.0], [55.0, 877.0], [55.1, 877.0], [55.2, 879.0], [55.3, 882.0], [55.4, 884.0], [55.5, 884.0], [55.6, 885.0], [55.7, 885.0], [55.8, 885.0], [55.9, 885.0], [56.0, 888.0], [56.1, 889.0], [56.2, 891.0], [56.3, 891.0], [56.4, 895.0], [56.5, 900.0], [56.6, 900.0], [56.7, 900.0], [56.8, 902.0], [56.9, 905.0], [57.0, 905.0], [57.1, 905.0], [57.2, 906.0], [57.3, 907.0], [57.4, 907.0], [57.5, 909.0], [57.6, 911.0], [57.7, 917.0], [57.8, 917.0], [57.9, 918.0], [58.0, 924.0], [58.1, 924.0], [58.2, 924.0], [58.3, 925.0], [58.4, 928.0], [58.5, 928.0], [58.6, 930.0], [58.7, 933.0], [58.8, 936.0], [58.9, 936.0], [59.0, 936.0], [59.1, 940.0], [59.2, 944.0], [59.3, 944.0], [59.4, 944.0], [59.5, 944.0], [59.6, 945.0], [59.7, 945.0], [59.8, 946.0], [59.9, 946.0], [60.0, 947.0], [60.1, 947.0], [60.2, 947.0], [60.3, 948.0], [60.4, 948.0], [60.5, 950.0], [60.6, 950.0], [60.7, 951.0], [60.8, 951.0], [60.9, 952.0], [61.0, 952.0], [61.1, 953.0], [61.2, 953.0], [61.3, 953.0], [61.4, 957.0], [61.5, 966.0], [61.6, 966.0], [61.7, 967.0], [61.8, 967.0], [61.9, 967.0], [62.0, 968.0], [62.1, 970.0], [62.2, 971.0], [62.3, 971.0], [62.4, 972.0], [62.5, 975.0], [62.6, 977.0], [62.7, 977.0], [62.8, 980.0], [62.9, 981.0], [63.0, 983.0], [63.1, 983.0], [63.2, 984.0], [63.3, 987.0], [63.4, 987.0], [63.5, 995.0], [63.6, 998.0], [63.7, 998.0], [63.8, 998.0], [63.9, 998.0], [64.0, 1000.0], [64.1, 1005.0], [64.2, 1005.0], [64.3, 1006.0], [64.4, 1008.0], [64.5, 1008.0], [64.6, 1008.0], [64.7, 1009.0], [64.8, 1011.0], [64.9, 1012.0], [65.0, 1012.0], [65.1, 1015.0], [65.2, 1016.0], [65.3, 1016.0], [65.4, 1018.0], [65.5, 1021.0], [65.6, 1022.0], [65.7, 1022.0], [65.8, 1023.0], [65.9, 1023.0], [66.0, 1024.0], [66.1, 1024.0], [66.2, 1028.0], [66.3, 1029.0], [66.4, 1032.0], [66.5, 1032.0], [66.6, 1038.0], [66.7, 1042.0], [66.8, 1042.0], [66.9, 1043.0], [67.0, 1043.0], [67.1, 1044.0], [67.2, 1044.0], [67.3, 1044.0], [67.4, 1046.0], [67.5, 1049.0], [67.6, 1049.0], [67.7, 1052.0], [67.8, 1055.0], [67.9, 1057.0], [68.0, 1057.0], [68.1, 1058.0], [68.2, 1058.0], [68.3, 1058.0], [68.4, 1058.0], [68.5, 1059.0], [68.6, 1060.0], [68.7, 1060.0], [68.8, 1065.0], [68.9, 1066.0], [69.0, 1067.0], [69.1, 1067.0], [69.2, 1068.0], [69.3, 1070.0], [69.4, 1071.0], [69.5, 1071.0], [69.6, 1071.0], [69.7, 1075.0], [69.8, 1076.0], [69.9, 1076.0], [70.0, 1079.0], [70.1, 1080.0], [70.2, 1080.0], [70.3, 1082.0], [70.4, 1082.0], [70.5, 1088.0], [70.6, 1088.0], [70.7, 1089.0], [70.8, 1094.0], [70.9, 1095.0], [71.0, 1095.0], [71.1, 1099.0], [71.2, 1099.0], [71.3, 1103.0], [71.4, 1103.0], [71.5, 1103.0], [71.6, 1105.0], [71.7, 1105.0], [71.8, 1106.0], [71.9, 1109.0], [72.0, 1110.0], [72.1, 1110.0], [72.2, 1112.0], [72.3, 1120.0], [72.4, 1120.0], [72.5, 1120.0], [72.6, 1122.0], [72.7, 1123.0], [72.8, 1126.0], [72.9, 1126.0], [73.0, 1127.0], [73.1, 1127.0], [73.2, 1132.0], [73.3, 1132.0], [73.4, 1132.0], [73.5, 1135.0], [73.6, 1135.0], [73.7, 1136.0], [73.8, 1136.0], [73.9, 1137.0], [74.0, 1137.0], [74.1, 1139.0], [74.2, 1141.0], [74.3, 1144.0], [74.4, 1144.0], [74.5, 1144.0], [74.6, 1144.0], [74.7, 1145.0], [74.8, 1145.0], [74.9, 1145.0], [75.0, 1145.0], [75.1, 1145.0], [75.2, 1147.0], [75.3, 1150.0], [75.4, 1150.0], [75.5, 1150.0], [75.6, 1151.0], [75.7, 1152.0], [75.8, 1153.0], [75.9, 1153.0], [76.0, 1154.0], [76.1, 1155.0], [76.2, 1158.0], [76.3, 1158.0], [76.4, 1160.0], [76.5, 1161.0], [76.6, 1162.0], [76.7, 1162.0], [76.8, 1163.0], [76.9, 1165.0], [77.0, 1165.0], [77.1, 1168.0], [77.2, 1168.0], [77.3, 1171.0], [77.4, 1171.0], [77.5, 1173.0], [77.6, 1174.0], [77.7, 1174.0], [77.8, 1174.0], [77.9, 1178.0], [78.0, 1179.0], [78.1, 1180.0], [78.2, 1180.0], [78.3, 1182.0], [78.4, 1184.0], [78.5, 1184.0], [78.6, 1188.0], [78.7, 1190.0], [78.8, 1192.0], [78.9, 1192.0], [79.0, 1192.0], [79.1, 1192.0], [79.2, 1197.0], [79.3, 1197.0], [79.4, 1199.0], [79.5, 1200.0], [79.6, 1201.0], [79.7, 1201.0], [79.8, 1202.0], [79.9, 1202.0], [80.0, 1203.0], [80.1, 1203.0], [80.2, 1203.0], [80.3, 1207.0], [80.4, 1207.0], [80.5, 1207.0], [80.6, 1210.0], [80.7, 1211.0], [80.8, 1211.0], [80.9, 1212.0], [81.0, 1212.0], [81.1, 1219.0], [81.2, 1219.0], [81.3, 1219.0], [81.4, 1222.0], [81.5, 1227.0], [81.6, 1227.0], [81.7, 1229.0], [81.8, 1230.0], [81.9, 1230.0], [82.0, 1230.0], [82.1, 1232.0], [82.2, 1233.0], [82.3, 1233.0], [82.4, 1235.0], [82.5, 1236.0], [82.6, 1236.0], [82.7, 1236.0], [82.8, 1236.0], [82.9, 1240.0], [83.0, 1246.0], [83.1, 1246.0], [83.2, 1248.0], [83.3, 1252.0], [83.4, 1252.0], [83.5, 1252.0], [83.6, 1253.0], [83.7, 1253.0], [83.8, 1253.0], [83.9, 1253.0], [84.0, 1254.0], [84.1, 1261.0], [84.2, 1261.0], [84.3, 1261.0], [84.4, 1261.0], [84.5, 1265.0], [84.6, 1265.0], [84.7, 1265.0], [84.8, 1269.0], [84.9, 1272.0], [85.0, 1272.0], [85.1, 1274.0], [85.2, 1275.0], [85.3, 1275.0], [85.4, 1275.0], [85.5, 1275.0], [85.6, 1276.0], [85.7, 1276.0], [85.8, 1277.0], [85.9, 1277.0], [86.0, 1277.0], [86.1, 1277.0], [86.2, 1279.0], [86.3, 1282.0], [86.4, 1283.0], [86.5, 1283.0], [86.6, 1285.0], [86.7, 1285.0], [86.8, 1285.0], [86.9, 1289.0], [87.0, 1289.0], [87.1, 1294.0], [87.2, 1294.0], [87.3, 1297.0], [87.4, 1300.0], [87.5, 1305.0], [87.6, 1305.0], [87.7, 1309.0], [87.8, 1309.0], [87.9, 1315.0], [88.0, 1315.0], [88.1, 1321.0], [88.2, 1322.0], [88.3, 1325.0], [88.4, 1325.0], [88.5, 1328.0], [88.6, 1329.0], [88.7, 1329.0], [88.8, 1337.0], [88.9, 1339.0], [89.0, 1344.0], [89.1, 1344.0], [89.2, 1345.0], [89.3, 1349.0], [89.4, 1356.0], [89.5, 1356.0], [89.6, 1359.0], [89.7, 1362.0], [89.8, 1366.0], [89.9, 1366.0], [90.0, 1367.0], [90.1, 1369.0], [90.2, 1369.0], [90.3, 1370.0], [90.4, 1371.0], [90.5, 1373.0], [90.6, 1373.0], [90.7, 1380.0], [90.8, 1380.0], [90.9, 1382.0], [91.0, 1382.0], [91.1, 1388.0], [91.2, 1389.0], [91.3, 1391.0], [91.4, 1391.0], [91.5, 1397.0], [91.6, 1404.0], [91.7, 1404.0], [91.8, 1405.0], [91.9, 1408.0], [92.0, 1409.0], [92.1, 1409.0], [92.2, 1427.0], [92.3, 1441.0], [92.4, 1442.0], [92.5, 1442.0], [92.6, 1454.0], [92.7, 1458.0], [92.8, 1471.0], [92.9, 1471.0], [93.0, 1473.0], [93.1, 1482.0], [93.2, 1488.0], [93.3, 1488.0], [93.4, 1490.0], [93.5, 1494.0], [93.6, 1494.0], [93.7, 1498.0], [93.8, 1503.0], [93.9, 1506.0], [94.0, 1506.0], [94.1, 1531.0], [94.2, 1559.0], [94.3, 1563.0], [94.4, 1563.0], [94.5, 1568.0], [94.6, 1586.0], [94.7, 1590.0], [94.8, 1590.0], [94.9, 1591.0], [95.0, 1599.0], [95.1, 1599.0], [95.2, 1600.0], [95.3, 1602.0], [95.4, 1637.0], [95.5, 1637.0], [95.6, 1640.0], [95.7, 1644.0], [95.8, 1667.0], [95.9, 1667.0], [96.0, 1676.0], [96.1, 1690.0], [96.2, 1692.0], [96.3, 1692.0], [96.4, 1692.0], [96.5, 1695.0], [96.6, 1711.0], [96.7, 1711.0], [96.8, 1731.0], [96.9, 1756.0], [97.0, 1756.0], [97.1, 1783.0], [97.2, 1812.0], [97.3, 1835.0], [97.4, 1835.0], [97.5, 1875.0], [97.6, 1895.0], [97.7, 2071.0], [97.8, 2071.0], [97.9, 2201.0], [98.0, 2259.0], [98.1, 2333.0], [98.2, 2333.0], [98.3, 2426.0], [98.4, 2459.0], [98.5, 2459.0], [98.6, 2693.0], [98.7, 2694.0], [98.8, 2779.0], [98.9, 2779.0], [99.0, 2874.0], [99.1, 3050.0], [99.2, 3076.0], [99.3, 3076.0], [99.4, 3086.0], [99.5, 3172.0], [99.6, 3220.0], [99.7, 3220.0], [99.8, 3578.0], [99.9, 3896.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 78.0, "series": [{"data": [[600.0, 68.0], [700.0, 53.0], [800.0, 51.0], [900.0, 55.0], [1000.0, 54.0], [1100.0, 60.0], [1200.0, 58.0], [1300.0, 31.0], [1400.0, 16.0], [1500.0, 10.0], [100.0, 4.0], [1600.0, 11.0], [1700.0, 4.0], [1800.0, 4.0], [2000.0, 1.0], [2200.0, 2.0], [2300.0, 1.0], [2400.0, 2.0], [2600.0, 2.0], [2700.0, 1.0], [2800.0, 1.0], [3000.0, 3.0], [3100.0, 1.0], [200.0, 49.0], [3200.0, 1.0], [3500.0, 1.0], [3800.0, 1.0], [300.0, 78.0], [400.0, 44.0], [500.0, 68.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 46.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 514.0, "series": [{"data": [[0.0, 175.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 514.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 46.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.879679144385026, "minX": 1.6037436E12, "maxY": 10.0, "series": [{"data": [[1.60374366E12, 9.879679144385026], [1.6037436E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374366E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 513.0, "minX": 1.0, "maxY": 884.0, "series": [{"data": [[8.0, 513.0], [4.0, 574.0], [2.0, 599.0], [1.0, 884.0], [9.0, 556.0], [10.0, 868.8181818181822], [5.0, 606.0], [6.0, 664.0], [3.0, 557.0], [7.0, 596.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 865.7292517006805]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2715.733333333333, "minX": 1.6037436E12, "maxY": 944174.2666666667, "series": [{"data": [[1.60374366E12, 891612.1], [1.6037436E12, 944174.2666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60374366E12, 2807.3], [1.6037436E12, 2715.733333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374366E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 841.9411764705875, "minX": 1.6037436E12, "maxY": 890.3739612188365, "series": [{"data": [[1.60374366E12, 841.9411764705875], [1.6037436E12, 890.3739612188365]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374366E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 840.7459893048132, "minX": 1.6037436E12, "maxY": 889.1218836565096, "series": [{"data": [[1.60374366E12, 840.7459893048132], [1.6037436E12, 889.1218836565096]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374366E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03475935828877003, "minX": 1.6037436E12, "maxY": 0.31578947368421056, "series": [{"data": [[1.60374366E12, 0.03475935828877003], [1.6037436E12, 0.31578947368421056]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374366E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.6037436E12, "maxY": 3896.0, "series": [{"data": [[1.60374366E12, 3896.0], [1.6037436E12, 3220.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60374366E12, 192.49999821186066], [1.6037436E12, 222.77399974107743]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60374366E12, 199.25000071525574], [1.6037436E12, 223.75140010356904]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60374366E12, 196.24999910593033], [1.6037436E12, 223.31699987053872]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60374366E12, 182.0], [1.6037436E12, 186.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60374366E12, 840.5], [1.6037436E12, 783.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374366E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 556.0, "minX": 4.0, "maxY": 2576.0, "series": [{"data": [[8.0, 1078.5], [9.0, 1043.0], [10.0, 977.0], [11.0, 944.0], [12.0, 863.0], [13.0, 714.0], [14.0, 624.5], [15.0, 642.5], [4.0, 2576.0], [16.0, 647.5], [17.0, 556.0], [19.0, 676.0], [7.0, 725.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 555.0, "minX": 4.0, "maxY": 2573.0, "series": [{"data": [[8.0, 1078.0], [9.0, 1041.0], [10.0, 976.0], [11.0, 943.0], [12.0, 862.0], [13.0, 714.0], [14.0, 623.0], [15.0, 642.5], [4.0, 2573.0], [16.0, 646.0], [17.0, 555.0], [19.0, 676.0], [7.0, 723.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.066666666666666, "minX": 1.6037436E12, "maxY": 6.183333333333334, "series": [{"data": [[1.60374366E12, 6.066666666666666], [1.6037436E12, 6.183333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374366E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.016666666666667, "minX": 1.6037436E12, "maxY": 6.233333333333333, "series": [{"data": [[1.60374366E12, 6.233333333333333], [1.6037436E12, 6.016666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374366E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.016666666666667, "minX": 1.6037436E12, "maxY": 6.233333333333333, "series": [{"data": [[1.60374366E12, 6.233333333333333], [1.6037436E12, 6.016666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374366E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.016666666666667, "minX": 1.6037436E12, "maxY": 6.233333333333333, "series": [{"data": [[1.60374366E12, 6.233333333333333], [1.6037436E12, 6.016666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374366E12, "title": "Total Transactions Per Second"}},
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

