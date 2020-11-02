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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 3679.0, "series": [{"data": [[0.0, 7.0], [0.1, 7.0], [0.2, 8.0], [0.3, 8.0], [0.4, 8.0], [0.5, 9.0], [0.6, 9.0], [0.7, 10.0], [0.8, 10.0], [0.9, 10.0], [1.0, 10.0], [1.1, 11.0], [1.2, 11.0], [1.3, 11.0], [1.4, 11.0], [1.5, 12.0], [1.6, 12.0], [1.7, 18.0], [1.8, 18.0], [1.9, 18.0], [2.0, 18.0], [2.1, 18.0], [2.2, 19.0], [2.3, 19.0], [2.4, 20.0], [2.5, 22.0], [2.6, 22.0], [2.7, 22.0], [2.8, 22.0], [2.9, 24.0], [3.0, 30.0], [3.1, 30.0], [3.2, 30.0], [3.3, 38.0], [3.4, 38.0], [3.5, 39.0], [3.6, 40.0], [3.7, 41.0], [3.8, 41.0], [3.9, 48.0], [4.0, 53.0], [4.1, 53.0], [4.2, 53.0], [4.3, 66.0], [4.4, 99.0], [4.5, 107.0], [4.6, 107.0], [4.7, 112.0], [4.8, 115.0], [4.9, 120.0], [5.0, 120.0], [5.1, 120.0], [5.2, 123.0], [5.3, 123.0], [5.4, 127.0], [5.5, 129.0], [5.6, 131.0], [5.7, 131.0], [5.8, 131.0], [5.9, 134.0], [6.0, 134.0], [6.1, 134.0], [6.2, 136.0], [6.3, 136.0], [6.4, 137.0], [6.5, 137.0], [6.6, 137.0], [6.7, 140.0], [6.8, 140.0], [6.9, 144.0], [7.0, 145.0], [7.1, 146.0], [7.2, 146.0], [7.3, 147.0], [7.4, 147.0], [7.5, 148.0], [7.6, 148.0], [7.7, 151.0], [7.8, 151.0], [7.9, 151.0], [8.0, 151.0], [8.1, 151.0], [8.2, 152.0], [8.3, 152.0], [8.4, 152.0], [8.5, 153.0], [8.6, 154.0], [8.7, 154.0], [8.8, 154.0], [8.9, 155.0], [9.0, 155.0], [9.1, 155.0], [9.2, 156.0], [9.3, 157.0], [9.4, 157.0], [9.5, 157.0], [9.6, 157.0], [9.7, 157.0], [9.8, 158.0], [9.9, 158.0], [10.0, 158.0], [10.1, 158.0], [10.2, 158.0], [10.3, 159.0], [10.4, 159.0], [10.5, 160.0], [10.6, 160.0], [10.7, 160.0], [10.8, 160.0], [10.9, 160.0], [11.0, 160.0], [11.1, 160.0], [11.2, 161.0], [11.3, 161.0], [11.4, 161.0], [11.5, 162.0], [11.6, 162.0], [11.7, 162.0], [11.8, 162.0], [11.9, 164.0], [12.0, 164.0], [12.1, 164.0], [12.2, 165.0], [12.3, 166.0], [12.4, 167.0], [12.5, 167.0], [12.6, 167.0], [12.7, 167.0], [12.8, 170.0], [12.9, 170.0], [13.0, 171.0], [13.1, 175.0], [13.2, 175.0], [13.3, 175.0], [13.4, 175.0], [13.5, 176.0], [13.6, 176.0], [13.7, 176.0], [13.8, 179.0], [13.9, 191.0], [14.0, 191.0], [14.1, 198.0], [14.2, 198.0], [14.3, 203.0], [14.4, 203.0], [14.5, 212.0], [14.6, 220.0], [14.7, 231.0], [14.8, 231.0], [14.9, 231.0], [15.0, 232.0], [15.1, 232.0], [15.2, 235.0], [15.3, 235.0], [15.4, 237.0], [15.5, 237.0], [15.6, 239.0], [15.7, 240.0], [15.8, 241.0], [15.9, 241.0], [16.0, 244.0], [16.1, 245.0], [16.2, 247.0], [16.3, 247.0], [16.4, 247.0], [16.5, 247.0], [16.6, 248.0], [16.7, 248.0], [16.8, 249.0], [16.9, 250.0], [17.0, 250.0], [17.1, 250.0], [17.2, 251.0], [17.3, 252.0], [17.4, 252.0], [17.5, 252.0], [17.6, 253.0], [17.7, 253.0], [17.8, 253.0], [17.9, 253.0], [18.0, 254.0], [18.1, 254.0], [18.2, 254.0], [18.3, 255.0], [18.4, 255.0], [18.5, 255.0], [18.6, 255.0], [18.7, 256.0], [18.8, 256.0], [18.9, 256.0], [19.0, 256.0], [19.1, 258.0], [19.2, 258.0], [19.3, 258.0], [19.4, 258.0], [19.5, 258.0], [19.6, 258.0], [19.7, 258.0], [19.8, 261.0], [19.9, 261.0], [20.0, 262.0], [20.1, 262.0], [20.2, 263.0], [20.3, 264.0], [20.4, 264.0], [20.5, 264.0], [20.6, 264.0], [20.7, 264.0], [20.8, 264.0], [20.9, 265.0], [21.0, 265.0], [21.1, 266.0], [21.2, 266.0], [21.3, 266.0], [21.4, 266.0], [21.5, 267.0], [21.6, 267.0], [21.7, 267.0], [21.8, 267.0], [21.9, 267.0], [22.0, 269.0], [22.1, 269.0], [22.2, 270.0], [22.3, 270.0], [22.4, 270.0], [22.5, 270.0], [22.6, 270.0], [22.7, 270.0], [22.8, 270.0], [22.9, 270.0], [23.0, 271.0], [23.1, 271.0], [23.2, 271.0], [23.3, 271.0], [23.4, 271.0], [23.5, 272.0], [23.6, 272.0], [23.7, 273.0], [23.8, 273.0], [23.9, 274.0], [24.0, 274.0], [24.1, 276.0], [24.2, 276.0], [24.3, 276.0], [24.4, 277.0], [24.5, 277.0], [24.6, 277.0], [24.7, 277.0], [24.8, 279.0], [24.9, 279.0], [25.0, 279.0], [25.1, 280.0], [25.2, 281.0], [25.3, 281.0], [25.4, 281.0], [25.5, 281.0], [25.6, 281.0], [25.7, 281.0], [25.8, 282.0], [25.9, 282.0], [26.0, 282.0], [26.1, 282.0], [26.2, 283.0], [26.3, 284.0], [26.4, 285.0], [26.5, 285.0], [26.6, 286.0], [26.7, 286.0], [26.8, 286.0], [26.9, 286.0], [27.0, 286.0], [27.1, 287.0], [27.2, 287.0], [27.3, 287.0], [27.4, 287.0], [27.5, 290.0], [27.6, 290.0], [27.7, 293.0], [27.8, 293.0], [27.9, 294.0], [28.0, 294.0], [28.1, 294.0], [28.2, 296.0], [28.3, 298.0], [28.4, 298.0], [28.5, 299.0], [28.6, 299.0], [28.7, 299.0], [28.8, 300.0], [28.9, 300.0], [29.0, 301.0], [29.1, 301.0], [29.2, 302.0], [29.3, 303.0], [29.4, 303.0], [29.5, 303.0], [29.6, 304.0], [29.7, 304.0], [29.8, 305.0], [29.9, 305.0], [30.0, 307.0], [30.1, 310.0], [30.2, 310.0], [30.3, 310.0], [30.4, 310.0], [30.5, 312.0], [30.6, 312.0], [30.7, 312.0], [30.8, 313.0], [30.9, 314.0], [31.0, 314.0], [31.1, 314.0], [31.2, 319.0], [31.3, 319.0], [31.4, 319.0], [31.5, 320.0], [31.6, 320.0], [31.7, 320.0], [31.8, 322.0], [31.9, 323.0], [32.0, 326.0], [32.1, 326.0], [32.2, 326.0], [32.3, 328.0], [32.4, 329.0], [32.5, 329.0], [32.6, 331.0], [32.7, 335.0], [32.8, 335.0], [32.9, 335.0], [33.0, 341.0], [33.1, 341.0], [33.2, 342.0], [33.3, 342.0], [33.4, 342.0], [33.5, 343.0], [33.6, 343.0], [33.7, 344.0], [33.8, 345.0], [33.9, 346.0], [34.0, 346.0], [34.1, 349.0], [34.2, 349.0], [34.3, 352.0], [34.4, 352.0], [34.5, 353.0], [34.6, 353.0], [34.7, 354.0], [34.8, 354.0], [34.9, 354.0], [35.0, 355.0], [35.1, 355.0], [35.2, 355.0], [35.3, 357.0], [35.4, 359.0], [35.5, 359.0], [35.6, 360.0], [35.7, 360.0], [35.8, 361.0], [35.9, 361.0], [36.0, 361.0], [36.1, 366.0], [36.2, 368.0], [36.3, 368.0], [36.4, 369.0], [36.5, 371.0], [36.6, 371.0], [36.7, 371.0], [36.8, 374.0], [36.9, 374.0], [37.0, 374.0], [37.1, 380.0], [37.2, 380.0], [37.3, 382.0], [37.4, 382.0], [37.5, 384.0], [37.6, 386.0], [37.7, 389.0], [37.8, 389.0], [37.9, 389.0], [38.0, 389.0], [38.1, 392.0], [38.2, 392.0], [38.3, 395.0], [38.4, 396.0], [38.5, 396.0], [38.6, 398.0], [38.7, 399.0], [38.8, 400.0], [38.9, 400.0], [39.0, 402.0], [39.1, 406.0], [39.2, 407.0], [39.3, 407.0], [39.4, 407.0], [39.5, 409.0], [39.6, 410.0], [39.7, 410.0], [39.8, 411.0], [39.9, 413.0], [40.0, 413.0], [40.1, 413.0], [40.2, 416.0], [40.3, 417.0], [40.4, 417.0], [40.5, 419.0], [40.6, 421.0], [40.7, 424.0], [40.8, 424.0], [40.9, 424.0], [41.0, 424.0], [41.1, 426.0], [41.2, 426.0], [41.3, 427.0], [41.4, 428.0], [41.5, 429.0], [41.6, 429.0], [41.7, 431.0], [41.8, 433.0], [41.9, 433.0], [42.0, 434.0], [42.1, 435.0], [42.2, 438.0], [42.3, 438.0], [42.4, 439.0], [42.5, 441.0], [42.6, 442.0], [42.7, 442.0], [42.8, 446.0], [42.9, 447.0], [43.0, 448.0], [43.1, 448.0], [43.2, 449.0], [43.3, 453.0], [43.4, 453.0], [43.5, 459.0], [43.6, 459.0], [43.7, 461.0], [43.8, 461.0], [43.9, 465.0], [44.0, 466.0], [44.1, 466.0], [44.2, 466.0], [44.3, 470.0], [44.4, 470.0], [44.5, 475.0], [44.6, 475.0], [44.7, 477.0], [44.8, 482.0], [44.9, 484.0], [45.0, 484.0], [45.1, 487.0], [45.2, 488.0], [45.3, 488.0], [45.4, 488.0], [45.5, 488.0], [45.6, 489.0], [45.7, 489.0], [45.8, 492.0], [45.9, 499.0], [46.0, 501.0], [46.1, 501.0], [46.2, 503.0], [46.3, 504.0], [46.4, 505.0], [46.5, 505.0], [46.6, 506.0], [46.7, 506.0], [46.8, 506.0], [46.9, 508.0], [47.0, 509.0], [47.1, 510.0], [47.2, 510.0], [47.3, 511.0], [47.4, 519.0], [47.5, 520.0], [47.6, 520.0], [47.7, 520.0], [47.8, 520.0], [47.9, 526.0], [48.0, 526.0], [48.1, 527.0], [48.2, 529.0], [48.3, 530.0], [48.4, 530.0], [48.5, 531.0], [48.6, 531.0], [48.7, 531.0], [48.8, 534.0], [48.9, 536.0], [49.0, 538.0], [49.1, 538.0], [49.2, 538.0], [49.3, 540.0], [49.4, 540.0], [49.5, 540.0], [49.6, 543.0], [49.7, 543.0], [49.8, 545.0], [49.9, 545.0], [50.0, 547.0], [50.1, 547.0], [50.2, 547.0], [50.3, 548.0], [50.4, 555.0], [50.5, 558.0], [50.6, 558.0], [50.7, 561.0], [50.8, 563.0], [50.9, 564.0], [51.0, 564.0], [51.1, 565.0], [51.2, 566.0], [51.3, 568.0], [51.4, 568.0], [51.5, 572.0], [51.6, 574.0], [51.7, 574.0], [51.8, 575.0], [51.9, 580.0], [52.0, 584.0], [52.1, 584.0], [52.2, 585.0], [52.3, 590.0], [52.4, 596.0], [52.5, 596.0], [52.6, 603.0], [52.7, 609.0], [52.8, 613.0], [52.9, 613.0], [53.0, 614.0], [53.1, 618.0], [53.2, 622.0], [53.3, 622.0], [53.4, 628.0], [53.5, 632.0], [53.6, 632.0], [53.7, 637.0], [53.8, 637.0], [53.9, 651.0], [54.0, 651.0], [54.1, 651.0], [54.2, 655.0], [54.3, 657.0], [54.4, 657.0], [54.5, 657.0], [54.6, 658.0], [54.7, 667.0], [54.8, 667.0], [54.9, 668.0], [55.0, 675.0], [55.1, 675.0], [55.2, 675.0], [55.3, 682.0], [55.4, 684.0], [55.5, 684.0], [55.6, 685.0], [55.7, 689.0], [55.8, 689.0], [55.9, 689.0], [56.0, 691.0], [56.1, 714.0], [56.2, 716.0], [56.3, 716.0], [56.4, 725.0], [56.5, 731.0], [56.6, 732.0], [56.7, 732.0], [56.8, 732.0], [56.9, 736.0], [57.0, 736.0], [57.1, 738.0], [57.2, 740.0], [57.3, 745.0], [57.4, 745.0], [57.5, 747.0], [57.6, 749.0], [57.7, 753.0], [57.8, 753.0], [57.9, 753.0], [58.0, 754.0], [58.1, 761.0], [58.2, 761.0], [58.3, 768.0], [58.4, 769.0], [58.5, 769.0], [58.6, 772.0], [58.7, 773.0], [58.8, 776.0], [58.9, 776.0], [59.0, 777.0], [59.1, 784.0], [59.2, 789.0], [59.3, 789.0], [59.4, 792.0], [59.5, 794.0], [59.6, 802.0], [59.7, 802.0], [59.8, 809.0], [59.9, 809.0], [60.0, 813.0], [60.1, 813.0], [60.2, 813.0], [60.3, 813.0], [60.4, 813.0], [60.5, 814.0], [60.6, 814.0], [60.7, 816.0], [60.8, 816.0], [60.9, 817.0], [61.0, 820.0], [61.1, 821.0], [61.2, 821.0], [61.3, 824.0], [61.4, 827.0], [61.5, 830.0], [61.6, 830.0], [61.7, 831.0], [61.8, 839.0], [61.9, 839.0], [62.0, 842.0], [62.1, 847.0], [62.2, 849.0], [62.3, 849.0], [62.4, 857.0], [62.5, 870.0], [62.6, 872.0], [62.7, 872.0], [62.8, 877.0], [62.9, 880.0], [63.0, 895.0], [63.1, 895.0], [63.2, 897.0], [63.3, 898.0], [63.4, 898.0], [63.5, 900.0], [63.6, 905.0], [63.7, 906.0], [63.8, 906.0], [63.9, 910.0], [64.0, 912.0], [64.1, 912.0], [64.2, 912.0], [64.3, 915.0], [64.4, 915.0], [64.5, 918.0], [64.6, 918.0], [64.7, 918.0], [64.8, 920.0], [64.9, 925.0], [65.0, 925.0], [65.1, 927.0], [65.2, 932.0], [65.3, 932.0], [65.4, 933.0], [65.5, 943.0], [65.6, 944.0], [65.7, 944.0], [65.8, 946.0], [65.9, 947.0], [66.0, 955.0], [66.1, 955.0], [66.2, 961.0], [66.3, 966.0], [66.4, 967.0], [66.5, 967.0], [66.6, 971.0], [66.7, 972.0], [66.8, 972.0], [66.9, 972.0], [67.0, 973.0], [67.1, 973.0], [67.2, 973.0], [67.3, 977.0], [67.4, 977.0], [67.5, 983.0], [67.6, 983.0], [67.7, 993.0], [67.8, 994.0], [67.9, 1001.0], [68.0, 1001.0], [68.1, 1002.0], [68.2, 1003.0], [68.3, 1003.0], [68.4, 1003.0], [68.5, 1013.0], [68.6, 1016.0], [68.7, 1016.0], [68.8, 1024.0], [68.9, 1024.0], [69.0, 1027.0], [69.1, 1027.0], [69.2, 1028.0], [69.3, 1030.0], [69.4, 1031.0], [69.5, 1031.0], [69.6, 1033.0], [69.7, 1034.0], [69.8, 1036.0], [69.9, 1036.0], [70.0, 1036.0], [70.1, 1041.0], [70.2, 1041.0], [70.3, 1050.0], [70.4, 1053.0], [70.5, 1055.0], [70.6, 1055.0], [70.7, 1056.0], [70.8, 1058.0], [70.9, 1064.0], [71.0, 1064.0], [71.1, 1066.0], [71.2, 1067.0], [71.3, 1067.0], [71.4, 1067.0], [71.5, 1077.0], [71.6, 1078.0], [71.7, 1078.0], [71.8, 1079.0], [71.9, 1079.0], [72.0, 1082.0], [72.1, 1082.0], [72.2, 1083.0], [72.3, 1086.0], [72.4, 1089.0], [72.5, 1089.0], [72.6, 1090.0], [72.7, 1095.0], [72.8, 1103.0], [72.9, 1103.0], [73.0, 1104.0], [73.1, 1106.0], [73.2, 1116.0], [73.3, 1116.0], [73.4, 1120.0], [73.5, 1123.0], [73.6, 1123.0], [73.7, 1126.0], [73.8, 1127.0], [73.9, 1130.0], [74.0, 1130.0], [74.1, 1141.0], [74.2, 1145.0], [74.3, 1145.0], [74.4, 1145.0], [74.5, 1146.0], [74.6, 1153.0], [74.7, 1153.0], [74.8, 1153.0], [74.9, 1155.0], [75.0, 1159.0], [75.1, 1159.0], [75.2, 1161.0], [75.3, 1165.0], [75.4, 1167.0], [75.5, 1167.0], [75.6, 1167.0], [75.7, 1168.0], [75.8, 1175.0], [75.9, 1175.0], [76.0, 1185.0], [76.1, 1186.0], [76.2, 1195.0], [76.3, 1195.0], [76.4, 1198.0], [76.5, 1198.0], [76.6, 1208.0], [76.7, 1208.0], [76.8, 1213.0], [76.9, 1217.0], [77.0, 1217.0], [77.1, 1218.0], [77.2, 1227.0], [77.3, 1230.0], [77.4, 1230.0], [77.5, 1231.0], [77.6, 1232.0], [77.7, 1233.0], [77.8, 1233.0], [77.9, 1235.0], [78.0, 1238.0], [78.1, 1240.0], [78.2, 1240.0], [78.3, 1241.0], [78.4, 1243.0], [78.5, 1243.0], [78.6, 1243.0], [78.7, 1245.0], [78.8, 1248.0], [78.9, 1248.0], [79.0, 1251.0], [79.1, 1254.0], [79.2, 1255.0], [79.3, 1255.0], [79.4, 1274.0], [79.5, 1275.0], [79.6, 1275.0], [79.7, 1275.0], [79.8, 1276.0], [79.9, 1280.0], [80.0, 1282.0], [80.1, 1282.0], [80.2, 1282.0], [80.3, 1282.0], [80.4, 1282.0], [80.5, 1293.0], [80.6, 1293.0], [80.7, 1296.0], [80.8, 1296.0], [80.9, 1297.0], [81.0, 1298.0], [81.1, 1305.0], [81.2, 1305.0], [81.3, 1306.0], [81.4, 1309.0], [81.5, 1311.0], [81.6, 1311.0], [81.7, 1315.0], [81.8, 1318.0], [81.9, 1318.0], [82.0, 1318.0], [82.1, 1320.0], [82.2, 1324.0], [82.3, 1324.0], [82.4, 1328.0], [82.5, 1329.0], [82.6, 1330.0], [82.7, 1330.0], [82.8, 1331.0], [82.9, 1337.0], [83.0, 1341.0], [83.1, 1341.0], [83.2, 1349.0], [83.3, 1357.0], [83.4, 1357.0], [83.5, 1364.0], [83.6, 1365.0], [83.7, 1368.0], [83.8, 1368.0], [83.9, 1368.0], [84.0, 1373.0], [84.1, 1376.0], [84.2, 1376.0], [84.3, 1378.0], [84.4, 1380.0], [84.5, 1380.0], [84.6, 1380.0], [84.7, 1385.0], [84.8, 1392.0], [84.9, 1393.0], [85.0, 1393.0], [85.1, 1397.0], [85.2, 1399.0], [85.3, 1399.0], [85.4, 1402.0], [85.5, 1405.0], [85.6, 1406.0], [85.7, 1406.0], [85.8, 1406.0], [85.9, 1409.0], [86.0, 1411.0], [86.1, 1411.0], [86.2, 1414.0], [86.3, 1416.0], [86.4, 1419.0], [86.5, 1419.0], [86.6, 1423.0], [86.7, 1424.0], [86.8, 1424.0], [86.9, 1425.0], [87.0, 1426.0], [87.1, 1431.0], [87.2, 1431.0], [87.3, 1439.0], [87.4, 1439.0], [87.5, 1446.0], [87.6, 1446.0], [87.7, 1456.0], [87.8, 1458.0], [87.9, 1461.0], [88.0, 1461.0], [88.1, 1463.0], [88.2, 1465.0], [88.3, 1465.0], [88.4, 1465.0], [88.5, 1469.0], [88.6, 1471.0], [88.7, 1471.0], [88.8, 1477.0], [88.9, 1478.0], [89.0, 1479.0], [89.1, 1479.0], [89.2, 1486.0], [89.3, 1490.0], [89.4, 1492.0], [89.5, 1492.0], [89.6, 1508.0], [89.7, 1509.0], [89.8, 1510.0], [89.9, 1510.0], [90.0, 1514.0], [90.1, 1516.0], [90.2, 1516.0], [90.3, 1518.0], [90.4, 1518.0], [90.5, 1518.0], [90.6, 1518.0], [90.7, 1520.0], [90.8, 1532.0], [90.9, 1541.0], [91.0, 1541.0], [91.1, 1544.0], [91.2, 1560.0], [91.3, 1572.0], [91.4, 1572.0], [91.5, 1576.0], [91.6, 1578.0], [91.7, 1578.0], [91.8, 1590.0], [91.9, 1594.0], [92.0, 1612.0], [92.1, 1612.0], [92.2, 1618.0], [92.3, 1624.0], [92.4, 1625.0], [92.5, 1625.0], [92.6, 1631.0], [92.7, 1655.0], [92.8, 1658.0], [92.9, 1658.0], [93.0, 1678.0], [93.1, 1679.0], [93.2, 1685.0], [93.3, 1685.0], [93.4, 1687.0], [93.5, 1694.0], [93.6, 1694.0], [93.7, 1716.0], [93.8, 1731.0], [93.9, 1740.0], [94.0, 1740.0], [94.1, 1748.0], [94.2, 1759.0], [94.3, 1769.0], [94.4, 1769.0], [94.5, 1775.0], [94.6, 1784.0], [94.7, 1789.0], [94.8, 1789.0], [94.9, 1791.0], [95.0, 1791.0], [95.1, 1791.0], [95.2, 1797.0], [95.3, 1798.0], [95.4, 1804.0], [95.5, 1804.0], [95.6, 1806.0], [95.7, 1831.0], [95.8, 1839.0], [95.9, 1839.0], [96.0, 1885.0], [96.1, 1890.0], [96.2, 1925.0], [96.3, 1925.0], [96.4, 1951.0], [96.5, 1962.0], [96.6, 1965.0], [96.7, 1965.0], [96.8, 1988.0], [96.9, 2008.0], [97.0, 2008.0], [97.1, 2008.0], [97.2, 2024.0], [97.3, 2057.0], [97.4, 2057.0], [97.5, 2058.0], [97.6, 2069.0], [97.7, 2069.0], [97.8, 2069.0], [97.9, 2220.0], [98.0, 2273.0], [98.1, 2276.0], [98.2, 2276.0], [98.3, 2390.0], [98.4, 2447.0], [98.5, 2447.0], [98.6, 2512.0], [98.7, 2711.0], [98.8, 2845.0], [98.9, 2845.0], [99.0, 2855.0], [99.1, 2925.0], [99.2, 3150.0], [99.3, 3150.0], [99.4, 3360.0], [99.5, 3371.0], [99.6, 3389.0], [99.7, 3389.0], [99.8, 3677.0], [99.9, 3679.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 106.0, "series": [{"data": [[0.0, 33.0], [600.0, 26.0], [700.0, 26.0], [800.0, 28.0], [900.0, 33.0], [1000.0, 36.0], [1100.0, 28.0], [1200.0, 33.0], [1300.0, 31.0], [1400.0, 31.0], [1500.0, 18.0], [100.0, 72.0], [1600.0, 12.0], [1700.0, 13.0], [1800.0, 6.0], [1900.0, 5.0], [2000.0, 7.0], [2200.0, 3.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 1.0], [3100.0, 1.0], [200.0, 106.0], [3300.0, 3.0], [3600.0, 2.0], [300.0, 74.0], [400.0, 53.0], [500.0, 48.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 77.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 338.0, "series": [{"data": [[0.0, 338.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 320.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 77.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.938028169014085, "minX": 1.6042401E12, "maxY": 10.0, "series": [{"data": [[1.60424016E12, 9.938028169014085], [1.6042401E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60424016E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 265.0, "minX": 1.0, "maxY": 3371.0, "series": [{"data": [[8.0, 1520.0], [4.0, 3371.0], [2.0, 1590.0], [1.0, 564.0], [10.0, 752.8679504814309], [5.0, 305.0], [6.0, 361.0], [3.0, 657.0], [7.0, 265.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 756.4190476190479]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 189.68333333333334, "minX": 1.6042401E12, "maxY": 1752550.45, "series": [{"data": [[1.60424016E12, 1752550.45], [1.6042401E12, 83002.33333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60424016E12, 5333.35], [1.6042401E12, 189.68333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60424016E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 736.1605633802815, "minX": 1.6042401E12, "maxY": 1331.7600000000002, "series": [{"data": [[1.60424016E12, 736.1605633802815], [1.6042401E12, 1331.7600000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60424016E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 735.0000000000007, "minX": 1.6042401E12, "maxY": 1330.4800000000005, "series": [{"data": [[1.60424016E12, 735.0000000000007], [1.6042401E12, 1330.4800000000005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60424016E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.004225352112676059, "minX": 1.6042401E12, "maxY": 3.2799999999999994, "series": [{"data": [[1.60424016E12, 0.004225352112676059], [1.6042401E12, 3.2799999999999994]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60424016E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.6042401E12, "maxY": 3679.0, "series": [{"data": [[1.60424016E12, 3679.0], [1.6042401E12, 3150.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60424016E12, 10.0], [1.6042401E12, 18.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60424016E12, 10.0], [1.6042401E12, 18.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60424016E12, 10.0], [1.6042401E12, 18.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60424016E12, 7.0], [1.6042401E12, 18.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60424016E12, 540.0], [1.6042401E12, 877.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60424016E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 258.0, "minX": 1.0, "maxY": 2008.0, "series": [{"data": [[8.0, 1037.0], [2.0, 1077.0], [9.0, 918.0], [10.0, 746.5], [11.0, 1050.0], [12.0, 989.5], [13.0, 820.0], [14.0, 807.5], [15.0, 397.5], [1.0, 2008.0], [16.0, 885.5], [17.0, 426.0], [18.0, 291.0], [19.0, 492.0], [20.0, 531.5], [23.0, 300.0], [24.0, 258.0], [25.0, 281.0], [28.0, 259.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 257.0, "minX": 1.0, "maxY": 2005.0, "series": [{"data": [[8.0, 1035.5], [2.0, 1076.5], [9.0, 914.0], [10.0, 744.5], [11.0, 1048.0], [12.0, 988.5], [13.0, 820.0], [14.0, 806.5], [15.0, 397.0], [1.0, 2005.0], [16.0, 884.5], [17.0, 425.0], [18.0, 291.0], [19.0, 491.5], [20.0, 530.0], [23.0, 299.5], [24.0, 257.0], [25.0, 281.0], [28.0, 258.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.6042401E12, "maxY": 11.666666666666666, "series": [{"data": [[1.60424016E12, 11.666666666666666], [1.6042401E12, 0.5833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60424016E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.6042401E12, "maxY": 11.833333333333334, "series": [{"data": [[1.60424016E12, 11.833333333333334], [1.6042401E12, 0.4166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60424016E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.6042401E12, "maxY": 11.833333333333334, "series": [{"data": [[1.60424016E12, 11.833333333333334], [1.6042401E12, 0.4166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60424016E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.6042401E12, "maxY": 11.833333333333334, "series": [{"data": [[1.60424016E12, 11.833333333333334], [1.6042401E12, 0.4166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60424016E12, "title": "Total Transactions Per Second"}},
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

