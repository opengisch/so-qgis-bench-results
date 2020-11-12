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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 4564.0, "series": [{"data": [[0.0, 7.0], [0.1, 7.0], [0.2, 7.0], [0.3, 8.0], [0.4, 8.0], [0.5, 8.0], [0.6, 8.0], [0.7, 8.0], [0.8, 8.0], [0.9, 10.0], [1.0, 12.0], [1.1, 15.0], [1.2, 15.0], [1.3, 18.0], [1.4, 19.0], [1.5, 19.0], [1.6, 19.0], [1.7, 20.0], [1.8, 20.0], [1.9, 20.0], [2.0, 21.0], [2.1, 21.0], [2.2, 21.0], [2.3, 21.0], [2.4, 23.0], [2.5, 23.0], [2.6, 24.0], [2.7, 24.0], [2.8, 26.0], [2.9, 27.0], [3.0, 28.0], [3.1, 28.0], [3.2, 34.0], [3.3, 45.0], [3.4, 45.0], [3.5, 55.0], [3.6, 58.0], [3.7, 61.0], [3.8, 61.0], [3.9, 70.0], [4.0, 107.0], [4.1, 111.0], [4.2, 111.0], [4.3, 115.0], [4.4, 118.0], [4.5, 123.0], [4.6, 123.0], [4.7, 126.0], [4.8, 129.0], [4.9, 132.0], [5.0, 132.0], [5.1, 132.0], [5.2, 133.0], [5.3, 133.0], [5.4, 135.0], [5.5, 135.0], [5.6, 137.0], [5.7, 137.0], [5.8, 140.0], [5.9, 142.0], [6.0, 143.0], [6.1, 143.0], [6.2, 145.0], [6.3, 145.0], [6.4, 146.0], [6.5, 146.0], [6.6, 147.0], [6.7, 148.0], [6.8, 148.0], [6.9, 150.0], [7.0, 152.0], [7.1, 153.0], [7.2, 153.0], [7.3, 155.0], [7.4, 155.0], [7.5, 155.0], [7.6, 155.0], [7.7, 156.0], [7.8, 156.0], [7.9, 157.0], [8.0, 157.0], [8.1, 157.0], [8.2, 158.0], [8.3, 158.0], [8.4, 158.0], [8.5, 160.0], [8.6, 161.0], [8.7, 161.0], [8.8, 162.0], [8.9, 162.0], [9.0, 163.0], [9.1, 163.0], [9.2, 163.0], [9.3, 163.0], [9.4, 164.0], [9.5, 164.0], [9.6, 166.0], [9.7, 167.0], [9.8, 168.0], [9.9, 168.0], [10.0, 169.0], [10.1, 170.0], [10.2, 170.0], [10.3, 170.0], [10.4, 173.0], [10.5, 175.0], [10.6, 175.0], [10.7, 175.0], [10.8, 177.0], [10.9, 178.0], [11.0, 178.0], [11.1, 178.0], [11.2, 179.0], [11.3, 180.0], [11.4, 180.0], [11.5, 180.0], [11.6, 182.0], [11.7, 182.0], [11.8, 182.0], [11.9, 183.0], [12.0, 185.0], [12.1, 185.0], [12.2, 185.0], [12.3, 188.0], [12.4, 190.0], [12.5, 190.0], [12.6, 191.0], [12.7, 199.0], [12.8, 200.0], [12.9, 200.0], [13.0, 203.0], [13.1, 211.0], [13.2, 212.0], [13.3, 212.0], [13.4, 224.0], [13.5, 228.0], [13.6, 228.0], [13.7, 231.0], [13.8, 231.0], [13.9, 232.0], [14.0, 232.0], [14.1, 239.0], [14.2, 242.0], [14.3, 242.0], [14.4, 242.0], [14.5, 244.0], [14.6, 245.0], [14.7, 245.0], [14.8, 245.0], [14.9, 249.0], [15.0, 249.0], [15.1, 249.0], [15.2, 251.0], [15.3, 252.0], [15.4, 252.0], [15.5, 252.0], [15.6, 252.0], [15.7, 253.0], [15.8, 254.0], [15.9, 254.0], [16.0, 254.0], [16.1, 254.0], [16.2, 255.0], [16.3, 255.0], [16.4, 256.0], [16.5, 256.0], [16.6, 256.0], [16.7, 256.0], [16.8, 258.0], [16.9, 259.0], [17.0, 259.0], [17.1, 260.0], [17.2, 260.0], [17.3, 260.0], [17.4, 260.0], [17.5, 262.0], [17.6, 262.0], [17.7, 262.0], [17.8, 262.0], [17.9, 263.0], [18.0, 264.0], [18.1, 264.0], [18.2, 264.0], [18.3, 264.0], [18.4, 265.0], [18.5, 265.0], [18.6, 266.0], [18.7, 266.0], [18.8, 268.0], [18.9, 268.0], [19.0, 268.0], [19.1, 269.0], [19.2, 269.0], [19.3, 269.0], [19.4, 269.0], [19.5, 270.0], [19.6, 272.0], [19.7, 272.0], [19.8, 272.0], [19.9, 274.0], [20.0, 275.0], [20.1, 275.0], [20.2, 275.0], [20.3, 277.0], [20.4, 277.0], [20.5, 279.0], [20.6, 282.0], [20.7, 282.0], [20.8, 282.0], [20.9, 282.0], [21.0, 285.0], [21.1, 285.0], [21.2, 285.0], [21.3, 286.0], [21.4, 286.0], [21.5, 286.0], [21.6, 286.0], [21.7, 286.0], [21.8, 287.0], [21.9, 287.0], [22.0, 287.0], [22.1, 288.0], [22.2, 290.0], [22.3, 290.0], [22.4, 291.0], [22.5, 292.0], [22.6, 295.0], [22.7, 295.0], [22.8, 295.0], [22.9, 295.0], [23.0, 295.0], [23.1, 295.0], [23.2, 296.0], [23.3, 296.0], [23.4, 296.0], [23.5, 297.0], [23.6, 298.0], [23.7, 298.0], [23.8, 298.0], [23.9, 300.0], [24.0, 300.0], [24.1, 302.0], [24.2, 302.0], [24.3, 303.0], [24.4, 304.0], [24.5, 305.0], [24.6, 305.0], [24.7, 306.0], [24.8, 307.0], [24.9, 309.0], [25.0, 309.0], [25.1, 310.0], [25.2, 314.0], [25.3, 314.0], [25.4, 314.0], [25.5, 315.0], [25.6, 317.0], [25.7, 317.0], [25.8, 319.0], [25.9, 320.0], [26.0, 321.0], [26.1, 321.0], [26.2, 325.0], [26.3, 326.0], [26.4, 329.0], [26.5, 329.0], [26.6, 332.0], [26.7, 333.0], [26.8, 333.0], [26.9, 339.0], [27.0, 340.0], [27.1, 340.0], [27.2, 340.0], [27.3, 341.0], [27.4, 341.0], [27.5, 342.0], [27.6, 342.0], [27.7, 343.0], [27.8, 344.0], [27.9, 344.0], [28.0, 344.0], [28.1, 349.0], [28.2, 351.0], [28.3, 353.0], [28.4, 353.0], [28.5, 354.0], [28.6, 357.0], [28.7, 357.0], [28.8, 358.0], [28.9, 367.0], [29.0, 369.0], [29.1, 369.0], [29.2, 369.0], [29.3, 371.0], [29.4, 374.0], [29.5, 374.0], [29.6, 377.0], [29.7, 377.0], [29.8, 379.0], [29.9, 379.0], [30.0, 381.0], [30.1, 387.0], [30.2, 387.0], [30.3, 387.0], [30.4, 391.0], [30.5, 393.0], [30.6, 393.0], [30.7, 394.0], [30.8, 396.0], [30.9, 400.0], [31.0, 400.0], [31.1, 400.0], [31.2, 407.0], [31.3, 410.0], [31.4, 410.0], [31.5, 410.0], [31.6, 414.0], [31.7, 414.0], [31.8, 414.0], [31.9, 415.0], [32.0, 416.0], [32.1, 416.0], [32.2, 417.0], [32.3, 417.0], [32.4, 420.0], [32.5, 420.0], [32.6, 423.0], [32.7, 426.0], [32.8, 427.0], [32.9, 427.0], [33.0, 428.0], [33.1, 428.0], [33.2, 428.0], [33.3, 428.0], [33.4, 434.0], [33.5, 436.0], [33.6, 436.0], [33.7, 436.0], [33.8, 438.0], [33.9, 438.0], [34.0, 438.0], [34.1, 439.0], [34.2, 446.0], [34.3, 450.0], [34.4, 450.0], [34.5, 451.0], [34.6, 455.0], [34.7, 459.0], [34.8, 459.0], [34.9, 471.0], [35.0, 472.0], [35.1, 472.0], [35.2, 473.0], [35.3, 480.0], [35.4, 482.0], [35.5, 482.0], [35.6, 487.0], [35.7, 489.0], [35.8, 503.0], [35.9, 503.0], [36.0, 504.0], [36.1, 505.0], [36.2, 506.0], [36.3, 506.0], [36.4, 508.0], [36.5, 509.0], [36.6, 509.0], [36.7, 509.0], [36.8, 511.0], [36.9, 513.0], [37.0, 513.0], [37.1, 514.0], [37.2, 514.0], [37.3, 517.0], [37.4, 517.0], [37.5, 519.0], [37.6, 520.0], [37.7, 522.0], [37.8, 522.0], [37.9, 526.0], [38.0, 527.0], [38.1, 529.0], [38.2, 529.0], [38.3, 530.0], [38.4, 531.0], [38.5, 531.0], [38.6, 534.0], [38.7, 536.0], [38.8, 537.0], [38.9, 537.0], [39.0, 537.0], [39.1, 537.0], [39.2, 541.0], [39.3, 541.0], [39.4, 542.0], [39.5, 547.0], [39.6, 549.0], [39.7, 549.0], [39.8, 550.0], [39.9, 553.0], [40.0, 553.0], [40.1, 553.0], [40.2, 554.0], [40.3, 555.0], [40.4, 555.0], [40.5, 559.0], [40.6, 559.0], [40.7, 560.0], [40.8, 560.0], [40.9, 561.0], [41.0, 561.0], [41.1, 565.0], [41.2, 565.0], [41.3, 567.0], [41.4, 567.0], [41.5, 569.0], [41.6, 569.0], [41.7, 572.0], [41.8, 572.0], [41.9, 572.0], [42.0, 572.0], [42.1, 573.0], [42.2, 573.0], [42.3, 573.0], [42.4, 574.0], [42.5, 575.0], [42.6, 580.0], [42.7, 580.0], [42.8, 582.0], [42.9, 584.0], [43.0, 585.0], [43.1, 585.0], [43.2, 589.0], [43.3, 589.0], [43.4, 589.0], [43.5, 591.0], [43.6, 593.0], [43.7, 594.0], [43.8, 594.0], [43.9, 594.0], [44.0, 594.0], [44.1, 595.0], [44.2, 595.0], [44.3, 598.0], [44.4, 599.0], [44.5, 602.0], [44.6, 602.0], [44.7, 603.0], [44.8, 604.0], [44.9, 605.0], [45.0, 605.0], [45.1, 605.0], [45.2, 606.0], [45.3, 606.0], [45.4, 608.0], [45.5, 608.0], [45.6, 611.0], [45.7, 611.0], [45.8, 612.0], [45.9, 614.0], [46.0, 618.0], [46.1, 618.0], [46.2, 620.0], [46.3, 620.0], [46.4, 620.0], [46.5, 620.0], [46.6, 623.0], [46.7, 624.0], [46.8, 624.0], [46.9, 625.0], [47.0, 626.0], [47.1, 627.0], [47.2, 627.0], [47.3, 633.0], [47.4, 642.0], [47.5, 644.0], [47.6, 644.0], [47.7, 647.0], [47.8, 648.0], [47.9, 649.0], [48.0, 649.0], [48.1, 652.0], [48.2, 652.0], [48.3, 656.0], [48.4, 656.0], [48.5, 656.0], [48.6, 662.0], [48.7, 662.0], [48.8, 663.0], [48.9, 666.0], [49.0, 673.0], [49.1, 673.0], [49.2, 679.0], [49.3, 680.0], [49.4, 682.0], [49.5, 682.0], [49.6, 683.0], [49.7, 686.0], [49.8, 687.0], [49.9, 687.0], [50.0, 687.0], [50.1, 687.0], [50.2, 687.0], [50.3, 689.0], [50.4, 690.0], [50.5, 690.0], [50.6, 690.0], [50.7, 693.0], [50.8, 693.0], [50.9, 698.0], [51.0, 698.0], [51.1, 698.0], [51.2, 699.0], [51.3, 701.0], [51.4, 701.0], [51.5, 701.0], [51.6, 702.0], [51.7, 702.0], [51.8, 702.0], [51.9, 703.0], [52.0, 709.0], [52.1, 709.0], [52.2, 709.0], [52.3, 712.0], [52.4, 712.0], [52.5, 712.0], [52.6, 714.0], [52.7, 716.0], [52.8, 717.0], [52.9, 717.0], [53.0, 720.0], [53.1, 721.0], [53.2, 722.0], [53.3, 722.0], [53.4, 723.0], [53.5, 723.0], [53.6, 723.0], [53.7, 723.0], [53.8, 726.0], [53.9, 727.0], [54.0, 727.0], [54.1, 727.0], [54.2, 729.0], [54.3, 732.0], [54.4, 732.0], [54.5, 734.0], [54.6, 734.0], [54.7, 735.0], [54.8, 735.0], [54.9, 739.0], [55.0, 740.0], [55.1, 740.0], [55.2, 740.0], [55.3, 742.0], [55.4, 743.0], [55.5, 743.0], [55.6, 749.0], [55.7, 755.0], [55.8, 757.0], [55.9, 757.0], [56.0, 757.0], [56.1, 758.0], [56.2, 760.0], [56.3, 760.0], [56.4, 762.0], [56.5, 763.0], [56.6, 766.0], [56.7, 766.0], [56.8, 767.0], [56.9, 769.0], [57.0, 769.0], [57.1, 773.0], [57.2, 784.0], [57.3, 784.0], [57.4, 784.0], [57.5, 791.0], [57.6, 796.0], [57.7, 796.0], [57.8, 796.0], [57.9, 797.0], [58.0, 802.0], [58.1, 802.0], [58.2, 802.0], [58.3, 805.0], [58.4, 806.0], [58.5, 806.0], [58.6, 812.0], [58.7, 813.0], [58.8, 814.0], [58.9, 814.0], [59.0, 817.0], [59.1, 817.0], [59.2, 820.0], [59.3, 820.0], [59.4, 822.0], [59.5, 823.0], [59.6, 825.0], [59.7, 825.0], [59.8, 825.0], [59.9, 826.0], [60.0, 829.0], [60.1, 829.0], [60.2, 831.0], [60.3, 833.0], [60.4, 833.0], [60.5, 838.0], [60.6, 844.0], [60.7, 845.0], [60.8, 845.0], [60.9, 847.0], [61.0, 847.0], [61.1, 849.0], [61.2, 849.0], [61.3, 851.0], [61.4, 855.0], [61.5, 855.0], [61.6, 855.0], [61.7, 857.0], [61.8, 858.0], [61.9, 858.0], [62.0, 863.0], [62.1, 865.0], [62.2, 865.0], [62.3, 865.0], [62.4, 867.0], [62.5, 870.0], [62.6, 870.0], [62.7, 870.0], [62.8, 872.0], [62.9, 873.0], [63.0, 873.0], [63.1, 873.0], [63.2, 876.0], [63.3, 877.0], [63.4, 877.0], [63.5, 883.0], [63.6, 884.0], [63.7, 886.0], [63.8, 886.0], [63.9, 886.0], [64.0, 886.0], [64.1, 889.0], [64.2, 889.0], [64.3, 893.0], [64.4, 895.0], [64.5, 897.0], [64.6, 897.0], [64.7, 904.0], [64.8, 904.0], [64.9, 905.0], [65.0, 905.0], [65.1, 905.0], [65.2, 907.0], [65.3, 907.0], [65.4, 917.0], [65.5, 920.0], [65.6, 921.0], [65.7, 921.0], [65.8, 922.0], [65.9, 927.0], [66.0, 931.0], [66.1, 931.0], [66.2, 935.0], [66.3, 937.0], [66.4, 939.0], [66.5, 939.0], [66.6, 942.0], [66.7, 942.0], [66.8, 942.0], [66.9, 942.0], [67.0, 945.0], [67.1, 956.0], [67.2, 956.0], [67.3, 959.0], [67.4, 961.0], [67.5, 962.0], [67.6, 962.0], [67.7, 971.0], [67.8, 972.0], [67.9, 973.0], [68.0, 973.0], [68.1, 976.0], [68.2, 977.0], [68.3, 979.0], [68.4, 979.0], [68.5, 979.0], [68.6, 989.0], [68.7, 989.0], [68.8, 992.0], [68.9, 999.0], [69.0, 1009.0], [69.1, 1009.0], [69.2, 1009.0], [69.3, 1012.0], [69.4, 1012.0], [69.5, 1012.0], [69.6, 1012.0], [69.7, 1014.0], [69.8, 1015.0], [69.9, 1015.0], [70.0, 1018.0], [70.1, 1018.0], [70.2, 1018.0], [70.3, 1021.0], [70.4, 1021.0], [70.5, 1021.0], [70.6, 1021.0], [70.7, 1023.0], [70.8, 1024.0], [70.9, 1027.0], [71.0, 1027.0], [71.1, 1029.0], [71.2, 1030.0], [71.3, 1033.0], [71.4, 1033.0], [71.5, 1034.0], [71.6, 1036.0], [71.7, 1036.0], [71.8, 1036.0], [71.9, 1038.0], [72.0, 1040.0], [72.1, 1040.0], [72.2, 1043.0], [72.3, 1045.0], [72.4, 1048.0], [72.5, 1048.0], [72.6, 1048.0], [72.7, 1049.0], [72.8, 1050.0], [72.9, 1050.0], [73.0, 1058.0], [73.1, 1060.0], [73.2, 1063.0], [73.3, 1063.0], [73.4, 1064.0], [73.5, 1069.0], [73.6, 1069.0], [73.7, 1070.0], [73.8, 1073.0], [73.9, 1076.0], [74.0, 1076.0], [74.1, 1077.0], [74.2, 1078.0], [74.3, 1081.0], [74.4, 1081.0], [74.5, 1086.0], [74.6, 1088.0], [74.7, 1092.0], [74.8, 1092.0], [74.9, 1093.0], [75.0, 1098.0], [75.1, 1098.0], [75.2, 1100.0], [75.3, 1106.0], [75.4, 1108.0], [75.5, 1108.0], [75.6, 1111.0], [75.7, 1113.0], [75.8, 1113.0], [75.9, 1113.0], [76.0, 1116.0], [76.1, 1122.0], [76.2, 1124.0], [76.3, 1124.0], [76.4, 1125.0], [76.5, 1128.0], [76.6, 1128.0], [76.7, 1128.0], [76.8, 1132.0], [76.9, 1141.0], [77.0, 1141.0], [77.1, 1142.0], [77.2, 1144.0], [77.3, 1145.0], [77.4, 1145.0], [77.5, 1146.0], [77.6, 1154.0], [77.7, 1155.0], [77.8, 1155.0], [77.9, 1157.0], [78.0, 1161.0], [78.1, 1161.0], [78.2, 1161.0], [78.3, 1162.0], [78.4, 1162.0], [78.5, 1162.0], [78.6, 1169.0], [78.7, 1172.0], [78.8, 1173.0], [78.9, 1173.0], [79.0, 1175.0], [79.1, 1180.0], [79.2, 1182.0], [79.3, 1182.0], [79.4, 1188.0], [79.5, 1194.0], [79.6, 1195.0], [79.7, 1195.0], [79.8, 1202.0], [79.9, 1204.0], [80.0, 1205.0], [80.1, 1205.0], [80.2, 1206.0], [80.3, 1206.0], [80.4, 1206.0], [80.5, 1213.0], [80.6, 1215.0], [80.7, 1216.0], [80.8, 1216.0], [80.9, 1217.0], [81.0, 1221.0], [81.1, 1224.0], [81.2, 1224.0], [81.3, 1225.0], [81.4, 1229.0], [81.5, 1230.0], [81.6, 1230.0], [81.7, 1233.0], [81.8, 1233.0], [81.9, 1233.0], [82.0, 1234.0], [82.1, 1238.0], [82.2, 1238.0], [82.3, 1238.0], [82.4, 1246.0], [82.5, 1248.0], [82.6, 1252.0], [82.7, 1252.0], [82.8, 1254.0], [82.9, 1254.0], [83.0, 1254.0], [83.1, 1254.0], [83.2, 1255.0], [83.3, 1262.0], [83.4, 1262.0], [83.5, 1266.0], [83.6, 1270.0], [83.7, 1277.0], [83.8, 1277.0], [83.9, 1280.0], [84.0, 1284.0], [84.1, 1285.0], [84.2, 1285.0], [84.3, 1289.0], [84.4, 1291.0], [84.5, 1293.0], [84.6, 1293.0], [84.7, 1295.0], [84.8, 1300.0], [84.9, 1307.0], [85.0, 1307.0], [85.1, 1308.0], [85.2, 1311.0], [85.3, 1311.0], [85.4, 1313.0], [85.5, 1326.0], [85.6, 1339.0], [85.7, 1339.0], [85.8, 1345.0], [85.9, 1347.0], [86.0, 1348.0], [86.1, 1348.0], [86.2, 1353.0], [86.3, 1354.0], [86.4, 1356.0], [86.5, 1356.0], [86.6, 1360.0], [86.7, 1365.0], [86.8, 1365.0], [86.9, 1368.0], [87.0, 1378.0], [87.1, 1385.0], [87.2, 1385.0], [87.3, 1390.0], [87.4, 1394.0], [87.5, 1396.0], [87.6, 1396.0], [87.7, 1398.0], [87.8, 1404.0], [87.9, 1410.0], [88.0, 1410.0], [88.1, 1411.0], [88.2, 1411.0], [88.3, 1412.0], [88.4, 1412.0], [88.5, 1414.0], [88.6, 1414.0], [88.7, 1414.0], [88.8, 1418.0], [88.9, 1419.0], [89.0, 1428.0], [89.1, 1428.0], [89.2, 1430.0], [89.3, 1432.0], [89.4, 1436.0], [89.5, 1436.0], [89.6, 1437.0], [89.7, 1438.0], [89.8, 1438.0], [89.9, 1438.0], [90.0, 1444.0], [90.1, 1446.0], [90.2, 1446.0], [90.3, 1448.0], [90.4, 1450.0], [90.5, 1451.0], [90.6, 1451.0], [90.7, 1453.0], [90.8, 1457.0], [90.9, 1458.0], [91.0, 1458.0], [91.1, 1464.0], [91.2, 1476.0], [91.3, 1478.0], [91.4, 1478.0], [91.5, 1487.0], [91.6, 1489.0], [91.7, 1489.0], [91.8, 1499.0], [91.9, 1503.0], [92.0, 1507.0], [92.1, 1507.0], [92.2, 1508.0], [92.3, 1508.0], [92.4, 1510.0], [92.5, 1510.0], [92.6, 1514.0], [92.7, 1517.0], [92.8, 1527.0], [92.9, 1527.0], [93.0, 1527.0], [93.1, 1534.0], [93.2, 1551.0], [93.3, 1551.0], [93.4, 1553.0], [93.5, 1564.0], [93.6, 1564.0], [93.7, 1567.0], [93.8, 1581.0], [93.9, 1587.0], [94.0, 1587.0], [94.1, 1590.0], [94.2, 1592.0], [94.3, 1606.0], [94.4, 1606.0], [94.5, 1610.0], [94.6, 1629.0], [94.7, 1632.0], [94.8, 1632.0], [94.9, 1651.0], [95.0, 1655.0], [95.1, 1655.0], [95.2, 1667.0], [95.3, 1675.0], [95.4, 1683.0], [95.5, 1683.0], [95.6, 1686.0], [95.7, 1701.0], [95.8, 1722.0], [95.9, 1722.0], [96.0, 1724.0], [96.1, 1749.0], [96.2, 1756.0], [96.3, 1756.0], [96.4, 1766.0], [96.5, 1773.0], [96.6, 1796.0], [96.7, 1796.0], [96.8, 1829.0], [96.9, 1837.0], [97.0, 1837.0], [97.1, 1886.0], [97.2, 1899.0], [97.3, 1941.0], [97.4, 1941.0], [97.5, 1972.0], [97.6, 1976.0], [97.7, 1984.0], [97.8, 1984.0], [97.9, 1995.0], [98.0, 2048.0], [98.1, 2133.0], [98.2, 2133.0], [98.3, 2134.0], [98.4, 2166.0], [98.5, 2166.0], [98.6, 2171.0], [98.7, 2273.0], [98.8, 2625.0], [98.9, 2625.0], [99.0, 2644.0], [99.1, 2760.0], [99.2, 2964.0], [99.3, 2964.0], [99.4, 3106.0], [99.5, 3161.0], [99.6, 3204.0], [99.7, 3204.0], [99.8, 3407.0], [99.9, 4564.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 81.0, "series": [{"data": [[0.0, 29.0], [600.0, 50.0], [700.0, 49.0], [800.0, 49.0], [900.0, 32.0], [1000.0, 45.0], [1100.0, 34.0], [1200.0, 37.0], [1300.0, 22.0], [1400.0, 30.0], [1500.0, 18.0], [100.0, 65.0], [1600.0, 10.0], [1700.0, 8.0], [1800.0, 4.0], [1900.0, 5.0], [2000.0, 1.0], [2100.0, 4.0], [2200.0, 1.0], [2600.0, 2.0], [2700.0, 1.0], [2900.0, 1.0], [3100.0, 2.0], [200.0, 81.0], [3200.0, 1.0], [3400.0, 1.0], [4500.0, 1.0], [300.0, 52.0], [400.0, 36.0], [500.0, 64.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 60.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 412.0, "series": [{"data": [[0.0, 263.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 412.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 60.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.851485148514849, "minX": 1.6050765E12, "maxY": 9.98148148148147, "series": [{"data": [[1.6050765E12, 9.98148148148147], [1.60507656E12, 9.851485148514849]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507656E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 146.4, "minX": 1.0, "maxY": 2273.0, "series": [{"data": [[8.0, 360.6666666666667], [4.0, 760.0], [2.0, 698.0], [1.0, 2273.0], [9.0, 146.4], [10.0, 771.3333333333328], [5.0, 1514.0], [6.0, 286.0], [3.0, 796.0], [7.0, 298.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.927891156462577, 767.0734693877547]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2277.15, "minX": 1.6050765E12, "maxY": 1145164.8166666667, "series": [{"data": [[1.6050765E12, 1145164.8166666667], [1.60507656E12, 690900.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6050765E12, 3245.883333333333], [1.60507656E12, 2277.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507656E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 760.0648148148152, "minX": 1.6050765E12, "maxY": 777.0660066006595, "series": [{"data": [[1.6050765E12, 760.0648148148152], [1.60507656E12, 777.0660066006595]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507656E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 758.8379629629628, "minX": 1.6050765E12, "maxY": 775.9702970297029, "series": [{"data": [[1.6050765E12, 758.8379629629628], [1.60507656E12, 775.9702970297029]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507656E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009900990099009896, "minX": 1.6050765E12, "maxY": 0.19212962962962968, "series": [{"data": [[1.6050765E12, 0.19212962962962968], [1.60507656E12, 0.009900990099009896]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507656E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.6050765E12, "maxY": 4564.0, "series": [{"data": [[1.6050765E12, 4564.0], [1.60507656E12, 2644.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6050765E12, 8.0], [1.60507656E12, 119.83199913024902]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6050765E12, 8.0], [1.60507656E12, 123.08640026092529]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6050765E12, 8.0], [1.60507656E12, 121.6559995651245]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6050765E12, 7.0], [1.60507656E12, 70.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6050765E12, 662.5], [1.60507656E12, 693.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507656E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 212.0, "minX": 3.0, "maxY": 1136.5, "series": [{"data": [[8.0, 1088.0], [9.0, 889.0], [10.0, 913.5], [11.0, 886.0], [3.0, 614.0], [12.0, 925.0], [13.0, 833.0], [14.0, 683.0], [15.0, 543.0], [17.0, 367.0], [18.0, 306.0], [19.0, 323.0], [20.0, 539.0], [21.0, 362.0], [22.0, 373.0], [23.0, 450.0], [6.0, 1136.5], [7.0, 212.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 212.0, "minX": 3.0, "maxY": 1136.5, "series": [{"data": [[8.0, 1086.5], [9.0, 888.0], [10.0, 912.0], [11.0, 883.5], [3.0, 613.0], [12.0, 924.0], [13.0, 832.0], [14.0, 682.0], [15.0, 542.0], [17.0, 367.0], [18.0, 305.0], [19.0, 322.5], [20.0, 538.0], [21.0, 362.0], [22.0, 372.5], [23.0, 449.0], [6.0, 1136.5], [7.0, 212.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.883333333333334, "minX": 1.6050765E12, "maxY": 7.366666666666666, "series": [{"data": [[1.6050765E12, 7.366666666666666], [1.60507656E12, 4.883333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507656E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.05, "minX": 1.6050765E12, "maxY": 7.2, "series": [{"data": [[1.6050765E12, 7.2], [1.60507656E12, 5.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507656E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.05, "minX": 1.6050765E12, "maxY": 7.2, "series": [{"data": [[1.6050765E12, 7.2], [1.60507656E12, 5.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507656E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.05, "minX": 1.6050765E12, "maxY": 7.2, "series": [{"data": [[1.6050765E12, 7.2], [1.60507656E12, 5.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507656E12, "title": "Total Transactions Per Second"}},
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

