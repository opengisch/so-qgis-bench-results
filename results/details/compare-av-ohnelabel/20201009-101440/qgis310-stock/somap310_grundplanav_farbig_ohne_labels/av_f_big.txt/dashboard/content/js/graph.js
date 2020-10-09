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
        data: {"result": {"minY": 131.0, "minX": 0.0, "maxY": 3083.0, "series": [{"data": [[0.0, 131.0], [0.1, 131.0], [0.2, 136.0], [0.3, 139.0], [0.4, 139.0], [0.5, 141.0], [0.6, 144.0], [0.7, 145.0], [0.8, 145.0], [0.9, 146.0], [1.0, 146.0], [1.1, 146.0], [1.2, 146.0], [1.3, 147.0], [1.4, 150.0], [1.5, 152.0], [1.6, 152.0], [1.7, 153.0], [1.8, 160.0], [1.9, 160.0], [2.0, 161.0], [2.1, 161.0], [2.2, 161.0], [2.3, 161.0], [2.4, 162.0], [2.5, 169.0], [2.6, 169.0], [2.7, 169.0], [2.8, 170.0], [2.9, 173.0], [3.0, 175.0], [3.1, 175.0], [3.2, 179.0], [3.3, 181.0], [3.4, 181.0], [3.5, 181.0], [3.6, 190.0], [3.7, 200.0], [3.8, 200.0], [3.9, 207.0], [4.0, 209.0], [4.1, 213.0], [4.2, 213.0], [4.3, 215.0], [4.4, 228.0], [4.5, 233.0], [4.6, 233.0], [4.7, 235.0], [4.8, 236.0], [4.9, 239.0], [5.0, 239.0], [5.1, 240.0], [5.2, 240.0], [5.3, 240.0], [5.4, 241.0], [5.5, 243.0], [5.6, 246.0], [5.7, 246.0], [5.8, 246.0], [5.9, 247.0], [6.0, 250.0], [6.1, 250.0], [6.2, 251.0], [6.3, 252.0], [6.4, 254.0], [6.5, 254.0], [6.6, 254.0], [6.7, 256.0], [6.8, 256.0], [6.9, 256.0], [7.0, 257.0], [7.1, 258.0], [7.2, 258.0], [7.3, 261.0], [7.4, 262.0], [7.5, 262.0], [7.6, 262.0], [7.7, 263.0], [7.8, 263.0], [7.9, 265.0], [8.0, 265.0], [8.1, 267.0], [8.2, 269.0], [8.3, 270.0], [8.4, 270.0], [8.5, 271.0], [8.6, 275.0], [8.7, 275.0], [8.8, 277.0], [8.9, 281.0], [9.0, 290.0], [9.1, 290.0], [9.2, 304.0], [9.3, 305.0], [9.4, 308.0], [9.5, 308.0], [9.6, 312.0], [9.7, 312.0], [9.8, 316.0], [9.9, 316.0], [10.0, 317.0], [10.1, 322.0], [10.2, 322.0], [10.3, 324.0], [10.4, 327.0], [10.5, 327.0], [10.6, 327.0], [10.7, 331.0], [10.8, 335.0], [10.9, 338.0], [11.0, 338.0], [11.1, 344.0], [11.2, 345.0], [11.3, 347.0], [11.4, 347.0], [11.5, 348.0], [11.6, 354.0], [11.7, 354.0], [11.8, 358.0], [11.9, 360.0], [12.0, 360.0], [12.1, 360.0], [12.2, 361.0], [12.3, 361.0], [12.4, 361.0], [12.5, 361.0], [12.6, 361.0], [12.7, 373.0], [12.8, 375.0], [12.9, 375.0], [13.0, 375.0], [13.1, 377.0], [13.2, 377.0], [13.3, 377.0], [13.4, 393.0], [13.5, 394.0], [13.6, 394.0], [13.7, 397.0], [13.8, 400.0], [13.9, 400.0], [14.0, 400.0], [14.1, 405.0], [14.2, 406.0], [14.3, 406.0], [14.4, 406.0], [14.5, 410.0], [14.6, 413.0], [14.7, 414.0], [14.8, 414.0], [14.9, 427.0], [15.0, 429.0], [15.1, 429.0], [15.2, 430.0], [15.3, 431.0], [15.4, 440.0], [15.5, 440.0], [15.6, 443.0], [15.7, 445.0], [15.8, 449.0], [15.9, 449.0], [16.0, 453.0], [16.1, 459.0], [16.2, 459.0], [16.3, 459.0], [16.4, 465.0], [16.5, 466.0], [16.6, 468.0], [16.7, 468.0], [16.8, 470.0], [16.9, 471.0], [17.0, 471.0], [17.1, 472.0], [17.2, 472.0], [17.3, 476.0], [17.4, 476.0], [17.5, 480.0], [17.6, 480.0], [17.7, 481.0], [17.8, 481.0], [17.9, 482.0], [18.0, 482.0], [18.1, 487.0], [18.2, 487.0], [18.3, 487.0], [18.4, 488.0], [18.5, 488.0], [18.6, 488.0], [18.7, 490.0], [18.8, 491.0], [18.9, 491.0], [19.0, 493.0], [19.1, 494.0], [19.2, 495.0], [19.3, 495.0], [19.4, 495.0], [19.5, 495.0], [19.6, 496.0], [19.7, 496.0], [19.8, 496.0], [19.9, 499.0], [20.0, 500.0], [20.1, 500.0], [20.2, 501.0], [20.3, 502.0], [20.4, 502.0], [20.5, 504.0], [20.6, 504.0], [20.7, 505.0], [20.8, 505.0], [20.9, 506.0], [21.0, 506.0], [21.1, 506.0], [21.2, 506.0], [21.3, 507.0], [21.4, 508.0], [21.5, 510.0], [21.6, 510.0], [21.7, 511.0], [21.8, 511.0], [21.9, 511.0], [22.0, 512.0], [22.1, 512.0], [22.2, 512.0], [22.3, 512.0], [22.4, 513.0], [22.5, 514.0], [22.6, 514.0], [22.7, 514.0], [22.8, 515.0], [22.9, 515.0], [23.0, 515.0], [23.1, 515.0], [23.2, 515.0], [23.3, 517.0], [23.4, 517.0], [23.5, 519.0], [23.6, 519.0], [23.7, 522.0], [23.8, 522.0], [23.9, 522.0], [24.0, 523.0], [24.1, 525.0], [24.2, 525.0], [24.3, 525.0], [24.4, 525.0], [24.5, 525.0], [24.6, 525.0], [24.7, 525.0], [24.8, 525.0], [24.9, 526.0], [25.0, 526.0], [25.1, 527.0], [25.2, 527.0], [25.3, 527.0], [25.4, 527.0], [25.5, 528.0], [25.6, 529.0], [25.7, 529.0], [25.8, 529.0], [25.9, 531.0], [26.0, 531.0], [26.1, 531.0], [26.2, 532.0], [26.3, 532.0], [26.4, 532.0], [26.5, 532.0], [26.6, 532.0], [26.7, 533.0], [26.8, 533.0], [26.9, 533.0], [27.0, 533.0], [27.1, 533.0], [27.2, 533.0], [27.3, 533.0], [27.4, 534.0], [27.5, 534.0], [27.6, 534.0], [27.7, 535.0], [27.8, 535.0], [27.9, 535.0], [28.0, 535.0], [28.1, 536.0], [28.2, 536.0], [28.3, 536.0], [28.4, 536.0], [28.5, 536.0], [28.6, 537.0], [28.7, 537.0], [28.8, 537.0], [28.9, 537.0], [29.0, 537.0], [29.1, 537.0], [29.2, 538.0], [29.3, 539.0], [29.4, 540.0], [29.5, 540.0], [29.6, 540.0], [29.7, 541.0], [29.8, 541.0], [29.9, 541.0], [30.0, 541.0], [30.1, 542.0], [30.2, 542.0], [30.3, 545.0], [30.4, 545.0], [30.5, 545.0], [30.6, 545.0], [30.7, 545.0], [30.8, 545.0], [30.9, 547.0], [31.0, 547.0], [31.1, 548.0], [31.2, 549.0], [31.3, 549.0], [31.4, 549.0], [31.5, 549.0], [31.6, 551.0], [31.7, 551.0], [31.8, 551.0], [31.9, 551.0], [32.0, 552.0], [32.1, 552.0], [32.2, 552.0], [32.3, 552.0], [32.4, 554.0], [32.5, 554.0], [32.6, 555.0], [32.7, 556.0], [32.8, 557.0], [32.9, 557.0], [33.0, 557.0], [33.1, 558.0], [33.2, 558.0], [33.3, 558.0], [33.4, 559.0], [33.5, 560.0], [33.6, 560.0], [33.7, 560.0], [33.8, 561.0], [33.9, 563.0], [34.0, 563.0], [34.1, 563.0], [34.2, 564.0], [34.3, 564.0], [34.4, 564.0], [34.5, 564.0], [34.6, 564.0], [34.7, 564.0], [34.8, 564.0], [34.9, 565.0], [35.0, 565.0], [35.1, 565.0], [35.2, 567.0], [35.3, 567.0], [35.4, 567.0], [35.5, 567.0], [35.6, 568.0], [35.7, 574.0], [35.8, 576.0], [35.9, 576.0], [36.0, 578.0], [36.1, 580.0], [36.2, 581.0], [36.3, 581.0], [36.4, 581.0], [36.5, 582.0], [36.6, 587.0], [36.7, 587.0], [36.8, 587.0], [36.9, 588.0], [37.0, 588.0], [37.1, 588.0], [37.2, 588.0], [37.3, 588.0], [37.4, 588.0], [37.5, 588.0], [37.6, 590.0], [37.7, 591.0], [37.8, 591.0], [37.9, 597.0], [38.0, 599.0], [38.1, 604.0], [38.2, 604.0], [38.3, 604.0], [38.4, 605.0], [38.5, 605.0], [38.6, 607.0], [38.7, 607.0], [38.8, 614.0], [38.9, 614.0], [39.0, 614.0], [39.1, 616.0], [39.2, 621.0], [39.3, 621.0], [39.4, 623.0], [39.5, 624.0], [39.6, 632.0], [39.7, 632.0], [39.8, 633.0], [39.9, 652.0], [40.0, 653.0], [40.1, 653.0], [40.2, 654.0], [40.3, 655.0], [40.4, 655.0], [40.5, 657.0], [40.6, 661.0], [40.7, 662.0], [40.8, 662.0], [40.9, 664.0], [41.0, 667.0], [41.1, 670.0], [41.2, 670.0], [41.3, 671.0], [41.4, 674.0], [41.5, 676.0], [41.6, 676.0], [41.7, 677.0], [41.8, 678.0], [41.9, 678.0], [42.0, 681.0], [42.1, 682.0], [42.2, 683.0], [42.3, 683.0], [42.4, 683.0], [42.5, 685.0], [42.6, 686.0], [42.7, 686.0], [42.8, 686.0], [42.9, 687.0], [43.0, 687.0], [43.1, 687.0], [43.2, 688.0], [43.3, 688.0], [43.4, 688.0], [43.5, 690.0], [43.6, 694.0], [43.7, 697.0], [43.8, 697.0], [43.9, 702.0], [44.0, 703.0], [44.1, 703.0], [44.2, 703.0], [44.3, 705.0], [44.4, 707.0], [44.5, 709.0], [44.6, 709.0], [44.7, 712.0], [44.8, 714.0], [44.9, 719.0], [45.0, 719.0], [45.1, 719.0], [45.2, 721.0], [45.3, 721.0], [45.4, 725.0], [45.5, 726.0], [45.6, 726.0], [45.7, 726.0], [45.8, 732.0], [45.9, 736.0], [46.0, 736.0], [46.1, 736.0], [46.2, 738.0], [46.3, 738.0], [46.4, 742.0], [46.5, 742.0], [46.6, 754.0], [46.7, 754.0], [46.8, 754.0], [46.9, 757.0], [47.0, 757.0], [47.1, 759.0], [47.2, 759.0], [47.3, 759.0], [47.4, 760.0], [47.5, 768.0], [47.6, 768.0], [47.7, 776.0], [47.8, 784.0], [47.9, 786.0], [48.0, 786.0], [48.1, 787.0], [48.2, 789.0], [48.3, 795.0], [48.4, 795.0], [48.5, 797.0], [48.6, 799.0], [48.7, 799.0], [48.8, 799.0], [48.9, 801.0], [49.0, 804.0], [49.1, 804.0], [49.2, 813.0], [49.3, 818.0], [49.4, 825.0], [49.5, 825.0], [49.6, 827.0], [49.7, 830.0], [49.8, 832.0], [49.9, 832.0], [50.0, 844.0], [50.1, 845.0], [50.2, 845.0], [50.3, 848.0], [50.4, 852.0], [50.5, 853.0], [50.6, 853.0], [50.7, 854.0], [50.8, 854.0], [50.9, 863.0], [51.0, 863.0], [51.1, 863.0], [51.2, 864.0], [51.3, 867.0], [51.4, 867.0], [51.5, 873.0], [51.6, 879.0], [51.7, 879.0], [51.8, 885.0], [51.9, 885.0], [52.0, 887.0], [52.1, 887.0], [52.2, 889.0], [52.3, 889.0], [52.4, 891.0], [52.5, 891.0], [52.6, 893.0], [52.7, 895.0], [52.8, 900.0], [52.9, 900.0], [53.0, 900.0], [53.1, 903.0], [53.2, 903.0], [53.3, 903.0], [53.4, 907.0], [53.5, 910.0], [53.6, 910.0], [53.7, 913.0], [53.8, 913.0], [53.9, 915.0], [54.0, 915.0], [54.1, 915.0], [54.2, 924.0], [54.3, 930.0], [54.4, 930.0], [54.5, 940.0], [54.6, 951.0], [54.7, 954.0], [54.8, 954.0], [54.9, 954.0], [55.0, 954.0], [55.1, 954.0], [55.2, 956.0], [55.3, 960.0], [55.4, 960.0], [55.5, 960.0], [55.6, 962.0], [55.7, 962.0], [55.8, 965.0], [55.9, 965.0], [56.0, 965.0], [56.1, 972.0], [56.2, 974.0], [56.3, 974.0], [56.4, 975.0], [56.5, 975.0], [56.6, 975.0], [56.7, 975.0], [56.8, 976.0], [56.9, 978.0], [57.0, 978.0], [57.1, 981.0], [57.2, 982.0], [57.3, 984.0], [57.4, 984.0], [57.5, 986.0], [57.6, 988.0], [57.7, 990.0], [57.8, 990.0], [57.9, 991.0], [58.0, 992.0], [58.1, 992.0], [58.2, 992.0], [58.3, 992.0], [58.4, 994.0], [58.5, 994.0], [58.6, 994.0], [58.7, 995.0], [58.8, 997.0], [58.9, 997.0], [59.0, 997.0], [59.1, 998.0], [59.2, 998.0], [59.3, 998.0], [59.4, 998.0], [59.5, 1000.0], [59.6, 1000.0], [59.7, 1000.0], [59.8, 1002.0], [59.9, 1004.0], [60.0, 1006.0], [60.1, 1006.0], [60.2, 1007.0], [60.3, 1009.0], [60.4, 1009.0], [60.5, 1009.0], [60.6, 1011.0], [60.7, 1013.0], [60.8, 1013.0], [60.9, 1016.0], [61.0, 1017.0], [61.1, 1022.0], [61.2, 1022.0], [61.3, 1025.0], [61.4, 1027.0], [61.5, 1027.0], [61.6, 1027.0], [61.7, 1028.0], [61.8, 1029.0], [61.9, 1029.0], [62.0, 1030.0], [62.1, 1030.0], [62.2, 1030.0], [62.3, 1030.0], [62.4, 1031.0], [62.5, 1031.0], [62.6, 1031.0], [62.7, 1031.0], [62.8, 1037.0], [62.9, 1040.0], [63.0, 1041.0], [63.1, 1041.0], [63.2, 1041.0], [63.3, 1042.0], [63.4, 1042.0], [63.5, 1043.0], [63.6, 1043.0], [63.7, 1044.0], [63.8, 1044.0], [63.9, 1044.0], [64.0, 1045.0], [64.1, 1045.0], [64.2, 1045.0], [64.3, 1047.0], [64.4, 1047.0], [64.5, 1049.0], [64.6, 1049.0], [64.7, 1051.0], [64.8, 1053.0], [64.9, 1054.0], [65.0, 1054.0], [65.1, 1055.0], [65.2, 1056.0], [65.3, 1056.0], [65.4, 1057.0], [65.5, 1058.0], [65.6, 1058.0], [65.7, 1058.0], [65.8, 1058.0], [65.9, 1060.0], [66.0, 1060.0], [66.1, 1060.0], [66.2, 1061.0], [66.3, 1061.0], [66.4, 1062.0], [66.5, 1062.0], [66.6, 1062.0], [66.7, 1063.0], [66.8, 1063.0], [66.9, 1063.0], [67.0, 1063.0], [67.1, 1064.0], [67.2, 1064.0], [67.3, 1064.0], [67.4, 1065.0], [67.5, 1066.0], [67.6, 1066.0], [67.7, 1066.0], [67.8, 1067.0], [67.9, 1067.0], [68.0, 1067.0], [68.1, 1069.0], [68.2, 1070.0], [68.3, 1071.0], [68.4, 1071.0], [68.5, 1071.0], [68.6, 1071.0], [68.7, 1071.0], [68.8, 1072.0], [68.9, 1072.0], [69.0, 1073.0], [69.1, 1073.0], [69.2, 1073.0], [69.3, 1073.0], [69.4, 1073.0], [69.5, 1073.0], [69.6, 1074.0], [69.7, 1074.0], [69.8, 1075.0], [69.9, 1075.0], [70.0, 1075.0], [70.1, 1075.0], [70.2, 1075.0], [70.3, 1076.0], [70.4, 1076.0], [70.5, 1077.0], [70.6, 1077.0], [70.7, 1077.0], [70.8, 1079.0], [70.9, 1080.0], [71.0, 1080.0], [71.1, 1081.0], [71.2, 1082.0], [71.3, 1082.0], [71.4, 1082.0], [71.5, 1082.0], [71.6, 1082.0], [71.7, 1082.0], [71.8, 1083.0], [71.9, 1083.0], [72.0, 1084.0], [72.1, 1084.0], [72.2, 1085.0], [72.3, 1087.0], [72.4, 1087.0], [72.5, 1087.0], [72.6, 1088.0], [72.7, 1089.0], [72.8, 1089.0], [72.9, 1089.0], [73.0, 1089.0], [73.1, 1090.0], [73.2, 1090.0], [73.3, 1090.0], [73.4, 1090.0], [73.5, 1092.0], [73.6, 1092.0], [73.7, 1093.0], [73.8, 1093.0], [73.9, 1094.0], [74.0, 1094.0], [74.1, 1094.0], [74.2, 1096.0], [74.3, 1097.0], [74.4, 1097.0], [74.5, 1099.0], [74.6, 1099.0], [74.7, 1100.0], [74.8, 1100.0], [74.9, 1101.0], [75.0, 1102.0], [75.1, 1102.0], [75.2, 1102.0], [75.3, 1103.0], [75.4, 1104.0], [75.5, 1104.0], [75.6, 1104.0], [75.7, 1106.0], [75.8, 1106.0], [75.9, 1106.0], [76.0, 1108.0], [76.1, 1108.0], [76.2, 1108.0], [76.3, 1108.0], [76.4, 1109.0], [76.5, 1109.0], [76.6, 1110.0], [76.7, 1110.0], [76.8, 1111.0], [76.9, 1112.0], [77.0, 1112.0], [77.1, 1112.0], [77.2, 1113.0], [77.3, 1114.0], [77.4, 1114.0], [77.5, 1114.0], [77.6, 1115.0], [77.7, 1116.0], [77.8, 1116.0], [77.9, 1117.0], [78.0, 1117.0], [78.1, 1117.0], [78.2, 1117.0], [78.3, 1118.0], [78.4, 1118.0], [78.5, 1118.0], [78.6, 1118.0], [78.7, 1119.0], [78.8, 1119.0], [78.9, 1119.0], [79.0, 1119.0], [79.1, 1121.0], [79.2, 1123.0], [79.3, 1123.0], [79.4, 1123.0], [79.5, 1123.0], [79.6, 1123.0], [79.7, 1123.0], [79.8, 1124.0], [79.9, 1125.0], [80.0, 1128.0], [80.1, 1128.0], [80.2, 1128.0], [80.3, 1130.0], [80.4, 1130.0], [80.5, 1130.0], [80.6, 1130.0], [80.7, 1130.0], [80.8, 1130.0], [80.9, 1131.0], [81.0, 1132.0], [81.1, 1132.0], [81.2, 1132.0], [81.3, 1133.0], [81.4, 1134.0], [81.5, 1135.0], [81.6, 1135.0], [81.7, 1135.0], [81.8, 1135.0], [81.9, 1135.0], [82.0, 1136.0], [82.1, 1136.0], [82.2, 1137.0], [82.3, 1137.0], [82.4, 1140.0], [82.5, 1141.0], [82.6, 1141.0], [82.7, 1141.0], [82.8, 1143.0], [82.9, 1143.0], [83.0, 1143.0], [83.1, 1143.0], [83.2, 1144.0], [83.3, 1146.0], [83.4, 1146.0], [83.5, 1149.0], [83.6, 1150.0], [83.7, 1152.0], [83.8, 1152.0], [83.9, 1152.0], [84.0, 1157.0], [84.1, 1157.0], [84.2, 1157.0], [84.3, 1157.0], [84.4, 1159.0], [84.5, 1160.0], [84.6, 1160.0], [84.7, 1163.0], [84.8, 1166.0], [84.9, 1166.0], [85.0, 1166.0], [85.1, 1167.0], [85.2, 1167.0], [85.3, 1167.0], [85.4, 1169.0], [85.5, 1174.0], [85.6, 1174.0], [85.7, 1174.0], [85.8, 1174.0], [85.9, 1174.0], [86.0, 1176.0], [86.1, 1176.0], [86.2, 1177.0], [86.3, 1178.0], [86.4, 1178.0], [86.5, 1178.0], [86.6, 1179.0], [86.7, 1183.0], [86.8, 1183.0], [86.9, 1184.0], [87.0, 1189.0], [87.1, 1190.0], [87.2, 1190.0], [87.3, 1191.0], [87.4, 1192.0], [87.5, 1193.0], [87.6, 1193.0], [87.7, 1193.0], [87.8, 1201.0], [87.9, 1203.0], [88.0, 1203.0], [88.1, 1203.0], [88.2, 1205.0], [88.3, 1205.0], [88.4, 1205.0], [88.5, 1206.0], [88.6, 1206.0], [88.7, 1206.0], [88.8, 1209.0], [88.9, 1210.0], [89.0, 1212.0], [89.1, 1212.0], [89.2, 1217.0], [89.3, 1217.0], [89.4, 1225.0], [89.5, 1225.0], [89.6, 1225.0], [89.7, 1226.0], [89.8, 1227.0], [89.9, 1227.0], [90.0, 1230.0], [90.1, 1233.0], [90.2, 1233.0], [90.3, 1233.0], [90.4, 1233.0], [90.5, 1234.0], [90.6, 1234.0], [90.7, 1235.0], [90.8, 1236.0], [90.9, 1243.0], [91.0, 1243.0], [91.1, 1243.0], [91.2, 1244.0], [91.3, 1246.0], [91.4, 1246.0], [91.5, 1246.0], [91.6, 1247.0], [91.7, 1247.0], [91.8, 1252.0], [91.9, 1252.0], [92.0, 1256.0], [92.1, 1256.0], [92.2, 1259.0], [92.3, 1262.0], [92.4, 1264.0], [92.5, 1264.0], [92.6, 1266.0], [92.7, 1266.0], [92.8, 1267.0], [92.9, 1267.0], [93.0, 1267.0], [93.1, 1272.0], [93.2, 1272.0], [93.3, 1272.0], [93.4, 1275.0], [93.5, 1275.0], [93.6, 1275.0], [93.7, 1279.0], [93.8, 1284.0], [93.9, 1285.0], [94.0, 1285.0], [94.1, 1290.0], [94.2, 1294.0], [94.3, 1301.0], [94.4, 1301.0], [94.5, 1304.0], [94.6, 1314.0], [94.7, 1317.0], [94.8, 1317.0], [94.9, 1317.0], [95.0, 1348.0], [95.1, 1348.0], [95.2, 1349.0], [95.3, 1350.0], [95.4, 1351.0], [95.5, 1351.0], [95.6, 1365.0], [95.7, 1365.0], [95.8, 1367.0], [95.9, 1367.0], [96.0, 1369.0], [96.1, 1378.0], [96.2, 1387.0], [96.3, 1387.0], [96.4, 1427.0], [96.5, 1430.0], [96.6, 1450.0], [96.7, 1450.0], [96.8, 1455.0], [96.9, 1479.0], [97.0, 1479.0], [97.1, 1483.0], [97.2, 1498.0], [97.3, 1498.0], [97.4, 1498.0], [97.5, 1523.0], [97.6, 1545.0], [97.7, 1562.0], [97.8, 1562.0], [97.9, 1658.0], [98.0, 1729.0], [98.1, 1764.0], [98.2, 1764.0], [98.3, 1996.0], [98.4, 2032.0], [98.5, 2032.0], [98.6, 2082.0], [98.7, 2112.0], [98.8, 2193.0], [98.9, 2193.0], [99.0, 2212.0], [99.1, 2226.0], [99.2, 2441.0], [99.3, 2441.0], [99.4, 2610.0], [99.5, 2623.0], [99.6, 2690.0], [99.7, 2690.0], [99.8, 3080.0], [99.9, 3083.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 133.0, "series": [{"data": [[2100.0, 2.0], [2200.0, 2.0], [600.0, 42.0], [2400.0, 1.0], [2600.0, 3.0], [700.0, 37.0], [3000.0, 2.0], [200.0, 40.0], [800.0, 29.0], [900.0, 49.0], [1000.0, 112.0], [1100.0, 96.0], [1200.0, 48.0], [300.0, 34.0], [1300.0, 15.0], [1400.0, 8.0], [1500.0, 3.0], [100.0, 27.0], [400.0, 46.0], [1600.0, 1.0], [1700.0, 2.0], [1900.0, 1.0], [2000.0, 2.0], [500.0, 133.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 19.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 568.0, "series": [{"data": [[0.0, 148.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 568.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 19.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.554455445544553, "minX": 1.60223856E12, "maxY": 10.0, "series": [{"data": [[1.60223856E12, 10.0], [1.60223862E12, 9.554455445544553]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223862E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 250.0, "minX": 1.0, "maxY": 1387.0, "series": [{"data": [[8.0, 1387.0], [4.0, 449.0], [2.0, 885.0], [1.0, 757.0], [9.0, 250.0], [10.0, 827.6776859504137], [5.0, 453.0], [6.0, 267.0], [3.0, 784.0], [7.0, 900.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 825.8857142857147]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 768.95, "minX": 1.60223856E12, "maxY": 1529679.2166666666, "series": [{"data": [[1.60223856E12, 1529679.2166666666], [1.60223862E12, 207239.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223856E12, 4901.083333333333], [1.60223862E12, 768.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223862E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 695.2178217821781, "minX": 1.60223856E12, "maxY": 846.7018927444794, "series": [{"data": [[1.60223856E12, 846.7018927444794], [1.60223862E12, 695.2178217821781]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223862E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 694.3960396039605, "minX": 1.60223856E12, "maxY": 845.708201892744, "series": [{"data": [[1.60223856E12, 845.708201892744], [1.60223862E12, 694.3960396039605]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223862E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.039603960396039604, "minX": 1.60223856E12, "maxY": 0.21608832807570977, "series": [{"data": [[1.60223856E12, 0.21608832807570977], [1.60223862E12, 0.039603960396039604]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223862E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 131.0, "minX": 1.60223856E12, "maxY": 3083.0, "series": [{"data": [[1.60223856E12, 3083.0], [1.60223862E12, 2226.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223856E12, 144.7149998486042], [1.60223862E12, 173.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223856E12, 145.28650006055832], [1.60223862E12, 173.05880005836488]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223856E12, 145.0324999243021], [1.60223862E12, 173.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223856E12, 131.0], [1.60223862E12, 173.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223856E12, 888.0], [1.60223862E12, 607.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223862E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 416.5, "minX": 1.0, "maxY": 1073.0, "series": [{"data": [[2.0, 855.0], [8.0, 1073.0], [9.0, 1060.0], [10.0, 1034.0], [11.0, 1047.0], [12.0, 997.0], [13.0, 739.5], [14.0, 653.5], [15.0, 710.5], [16.0, 483.5], [1.0, 757.0], [17.0, 668.5], [18.0, 455.5], [5.0, 664.0], [20.0, 416.5], [23.0, 472.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 416.5, "minX": 1.0, "maxY": 1070.5, "series": [{"data": [[2.0, 852.0], [8.0, 1070.5], [9.0, 1059.0], [10.0, 1032.5], [11.0, 1047.0], [12.0, 995.5], [13.0, 739.0], [14.0, 653.5], [15.0, 709.0], [16.0, 483.5], [1.0, 757.0], [17.0, 668.0], [18.0, 455.5], [5.0, 663.0], [20.0, 416.5], [23.0, 472.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.5166666666666666, "minX": 1.60223856E12, "maxY": 10.733333333333333, "series": [{"data": [[1.60223856E12, 10.733333333333333], [1.60223862E12, 1.5166666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223862E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.60223856E12, "maxY": 10.566666666666666, "series": [{"data": [[1.60223856E12, 10.566666666666666], [1.60223862E12, 1.6833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223862E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.60223856E12, "maxY": 10.566666666666666, "series": [{"data": [[1.60223856E12, 10.566666666666666], [1.60223862E12, 1.6833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223862E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.60223856E12, "maxY": 10.566666666666666, "series": [{"data": [[1.60223856E12, 10.566666666666666], [1.60223862E12, 1.6833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223862E12, "title": "Total Transactions Per Second"}},
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

