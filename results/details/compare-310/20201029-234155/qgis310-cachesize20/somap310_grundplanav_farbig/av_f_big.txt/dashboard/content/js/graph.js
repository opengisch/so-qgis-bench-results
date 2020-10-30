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
        data: {"result": {"minY": 188.0, "minX": 0.0, "maxY": 3286.0, "series": [{"data": [[0.0, 188.0], [0.1, 188.0], [0.2, 194.0], [0.3, 194.0], [0.4, 194.0], [0.5, 198.0], [0.6, 200.0], [0.7, 200.0], [0.8, 200.0], [0.9, 201.0], [1.0, 204.0], [1.1, 215.0], [1.2, 215.0], [1.3, 216.0], [1.4, 218.0], [1.5, 225.0], [1.6, 225.0], [1.7, 232.0], [1.8, 238.0], [1.9, 238.0], [2.0, 242.0], [2.1, 243.0], [2.2, 245.0], [2.3, 245.0], [2.4, 250.0], [2.5, 257.0], [2.6, 258.0], [2.7, 258.0], [2.8, 259.0], [2.9, 265.0], [3.0, 266.0], [3.1, 266.0], [3.2, 272.0], [3.3, 274.0], [3.4, 274.0], [3.5, 275.0], [3.6, 278.0], [3.7, 278.0], [3.8, 278.0], [3.9, 278.0], [4.0, 281.0], [4.1, 282.0], [4.2, 282.0], [4.3, 283.0], [4.4, 284.0], [4.5, 284.0], [4.6, 284.0], [4.7, 284.0], [4.8, 285.0], [4.9, 288.0], [5.0, 288.0], [5.1, 289.0], [5.2, 291.0], [5.3, 291.0], [5.4, 296.0], [5.5, 297.0], [5.6, 298.0], [5.7, 298.0], [5.8, 299.0], [5.9, 299.0], [6.0, 299.0], [6.1, 299.0], [6.2, 304.0], [6.3, 306.0], [6.4, 307.0], [6.5, 307.0], [6.6, 313.0], [6.7, 315.0], [6.8, 315.0], [6.9, 315.0], [7.0, 318.0], [7.1, 322.0], [7.2, 322.0], [7.3, 322.0], [7.4, 329.0], [7.5, 330.0], [7.6, 330.0], [7.7, 332.0], [7.8, 332.0], [7.9, 332.0], [8.0, 332.0], [8.1, 333.0], [8.2, 334.0], [8.3, 334.0], [8.4, 334.0], [8.5, 335.0], [8.6, 336.0], [8.7, 336.0], [8.8, 338.0], [8.9, 340.0], [9.0, 341.0], [9.1, 341.0], [9.2, 342.0], [9.3, 345.0], [9.4, 346.0], [9.5, 346.0], [9.6, 348.0], [9.7, 349.0], [9.8, 349.0], [9.9, 349.0], [10.0, 352.0], [10.1, 352.0], [10.2, 352.0], [10.3, 358.0], [10.4, 359.0], [10.5, 360.0], [10.6, 360.0], [10.7, 360.0], [10.8, 361.0], [10.9, 362.0], [11.0, 362.0], [11.1, 367.0], [11.2, 368.0], [11.3, 371.0], [11.4, 371.0], [11.5, 371.0], [11.6, 372.0], [11.7, 372.0], [11.8, 379.0], [11.9, 380.0], [12.0, 381.0], [12.1, 381.0], [12.2, 382.0], [12.3, 383.0], [12.4, 385.0], [12.5, 385.0], [12.6, 386.0], [12.7, 390.0], [12.8, 392.0], [12.9, 392.0], [13.0, 394.0], [13.1, 394.0], [13.2, 394.0], [13.3, 394.0], [13.4, 395.0], [13.5, 396.0], [13.6, 396.0], [13.7, 397.0], [13.8, 398.0], [13.9, 399.0], [14.0, 399.0], [14.1, 400.0], [14.2, 401.0], [14.3, 406.0], [14.4, 406.0], [14.5, 416.0], [14.6, 417.0], [14.7, 418.0], [14.8, 418.0], [14.9, 418.0], [15.0, 418.0], [15.1, 418.0], [15.2, 420.0], [15.3, 424.0], [15.4, 426.0], [15.5, 426.0], [15.6, 428.0], [15.7, 429.0], [15.8, 432.0], [15.9, 432.0], [16.0, 437.0], [16.1, 438.0], [16.2, 442.0], [16.3, 442.0], [16.4, 444.0], [16.5, 444.0], [16.6, 445.0], [16.7, 445.0], [16.8, 445.0], [16.9, 446.0], [17.0, 446.0], [17.1, 448.0], [17.2, 449.0], [17.3, 450.0], [17.4, 450.0], [17.5, 450.0], [17.6, 452.0], [17.7, 452.0], [17.8, 452.0], [17.9, 452.0], [18.0, 452.0], [18.1, 456.0], [18.2, 456.0], [18.3, 463.0], [18.4, 465.0], [18.5, 465.0], [18.6, 468.0], [18.7, 474.0], [18.8, 477.0], [18.9, 477.0], [19.0, 479.0], [19.1, 481.0], [19.2, 482.0], [19.3, 482.0], [19.4, 483.0], [19.5, 486.0], [19.6, 487.0], [19.7, 487.0], [19.8, 487.0], [19.9, 489.0], [20.0, 490.0], [20.1, 490.0], [20.2, 490.0], [20.3, 491.0], [20.4, 491.0], [20.5, 492.0], [20.6, 493.0], [20.7, 493.0], [20.8, 493.0], [20.9, 493.0], [21.0, 494.0], [21.1, 494.0], [21.2, 494.0], [21.3, 495.0], [21.4, 497.0], [21.5, 498.0], [21.6, 498.0], [21.7, 498.0], [21.8, 499.0], [21.9, 499.0], [22.0, 504.0], [22.1, 507.0], [22.2, 517.0], [22.3, 517.0], [22.4, 517.0], [22.5, 517.0], [22.6, 518.0], [22.7, 518.0], [22.8, 519.0], [22.9, 519.0], [23.0, 521.0], [23.1, 521.0], [23.2, 522.0], [23.3, 525.0], [23.4, 525.0], [23.5, 528.0], [23.6, 531.0], [23.7, 531.0], [23.8, 531.0], [23.9, 532.0], [24.0, 532.0], [24.1, 533.0], [24.2, 533.0], [24.3, 533.0], [24.4, 533.0], [24.5, 536.0], [24.6, 536.0], [24.7, 536.0], [24.8, 540.0], [24.9, 541.0], [25.0, 541.0], [25.1, 542.0], [25.2, 544.0], [25.3, 544.0], [25.4, 544.0], [25.5, 544.0], [25.6, 544.0], [25.7, 544.0], [25.8, 547.0], [25.9, 547.0], [26.0, 547.0], [26.1, 547.0], [26.2, 548.0], [26.3, 548.0], [26.4, 550.0], [26.5, 550.0], [26.6, 551.0], [26.7, 551.0], [26.8, 551.0], [26.9, 551.0], [27.0, 552.0], [27.1, 553.0], [27.2, 553.0], [27.3, 553.0], [27.4, 554.0], [27.5, 555.0], [27.6, 555.0], [27.7, 558.0], [27.8, 558.0], [27.9, 559.0], [28.0, 559.0], [28.1, 559.0], [28.2, 559.0], [28.3, 560.0], [28.4, 560.0], [28.5, 560.0], [28.6, 561.0], [28.7, 561.0], [28.8, 563.0], [28.9, 564.0], [29.0, 564.0], [29.1, 564.0], [29.2, 567.0], [29.3, 567.0], [29.4, 567.0], [29.5, 567.0], [29.6, 567.0], [29.7, 568.0], [29.8, 569.0], [29.9, 569.0], [30.0, 570.0], [30.1, 570.0], [30.2, 570.0], [30.3, 570.0], [30.4, 571.0], [30.5, 572.0], [30.6, 572.0], [30.7, 572.0], [30.8, 574.0], [30.9, 574.0], [31.0, 574.0], [31.1, 576.0], [31.2, 581.0], [31.3, 583.0], [31.4, 583.0], [31.5, 584.0], [31.6, 584.0], [31.7, 584.0], [31.8, 586.0], [31.9, 587.0], [32.0, 587.0], [32.1, 587.0], [32.2, 589.0], [32.3, 590.0], [32.4, 591.0], [32.5, 591.0], [32.6, 593.0], [32.7, 593.0], [32.8, 595.0], [32.9, 595.0], [33.0, 595.0], [33.1, 595.0], [33.2, 597.0], [33.3, 597.0], [33.4, 602.0], [33.5, 604.0], [33.6, 604.0], [33.7, 605.0], [33.8, 606.0], [33.9, 606.0], [34.0, 606.0], [34.1, 606.0], [34.2, 606.0], [34.3, 610.0], [34.4, 610.0], [34.5, 610.0], [34.6, 610.0], [34.7, 610.0], [34.8, 610.0], [34.9, 611.0], [35.0, 614.0], [35.1, 614.0], [35.2, 615.0], [35.3, 618.0], [35.4, 621.0], [35.5, 621.0], [35.6, 624.0], [35.7, 624.0], [35.8, 624.0], [35.9, 624.0], [36.0, 624.0], [36.1, 624.0], [36.2, 625.0], [36.3, 625.0], [36.4, 625.0], [36.5, 627.0], [36.6, 628.0], [36.7, 628.0], [36.8, 629.0], [36.9, 631.0], [37.0, 631.0], [37.1, 633.0], [37.2, 635.0], [37.3, 635.0], [37.4, 635.0], [37.5, 635.0], [37.6, 636.0], [37.7, 637.0], [37.8, 637.0], [37.9, 640.0], [38.0, 641.0], [38.1, 643.0], [38.2, 643.0], [38.3, 645.0], [38.4, 648.0], [38.5, 648.0], [38.6, 649.0], [38.7, 652.0], [38.8, 653.0], [38.9, 653.0], [39.0, 653.0], [39.1, 653.0], [39.2, 656.0], [39.3, 656.0], [39.4, 656.0], [39.5, 659.0], [39.6, 659.0], [39.7, 659.0], [39.8, 659.0], [39.9, 659.0], [40.0, 659.0], [40.1, 659.0], [40.2, 660.0], [40.3, 660.0], [40.4, 660.0], [40.5, 662.0], [40.6, 663.0], [40.7, 666.0], [40.8, 666.0], [40.9, 667.0], [41.0, 668.0], [41.1, 669.0], [41.2, 669.0], [41.3, 669.0], [41.4, 675.0], [41.5, 676.0], [41.6, 676.0], [41.7, 680.0], [41.8, 681.0], [41.9, 681.0], [42.0, 683.0], [42.1, 683.0], [42.2, 686.0], [42.3, 686.0], [42.4, 689.0], [42.5, 693.0], [42.6, 694.0], [42.7, 694.0], [42.8, 697.0], [42.9, 698.0], [43.0, 698.0], [43.1, 698.0], [43.2, 700.0], [43.3, 702.0], [43.4, 702.0], [43.5, 702.0], [43.6, 702.0], [43.7, 703.0], [43.8, 703.0], [43.9, 705.0], [44.0, 709.0], [44.1, 709.0], [44.2, 709.0], [44.3, 710.0], [44.4, 711.0], [44.5, 712.0], [44.6, 712.0], [44.7, 713.0], [44.8, 714.0], [44.9, 715.0], [45.0, 715.0], [45.1, 717.0], [45.2, 721.0], [45.3, 721.0], [45.4, 725.0], [45.5, 726.0], [45.6, 727.0], [45.7, 727.0], [45.8, 728.0], [45.9, 729.0], [46.0, 729.0], [46.1, 729.0], [46.2, 732.0], [46.3, 739.0], [46.4, 740.0], [46.5, 740.0], [46.6, 741.0], [46.7, 742.0], [46.8, 742.0], [46.9, 742.0], [47.0, 745.0], [47.1, 746.0], [47.2, 746.0], [47.3, 746.0], [47.4, 751.0], [47.5, 753.0], [47.6, 753.0], [47.7, 753.0], [47.8, 755.0], [47.9, 756.0], [48.0, 756.0], [48.1, 757.0], [48.2, 757.0], [48.3, 758.0], [48.4, 758.0], [48.5, 760.0], [48.6, 760.0], [48.7, 760.0], [48.8, 763.0], [48.9, 763.0], [49.0, 763.0], [49.1, 763.0], [49.2, 765.0], [49.3, 766.0], [49.4, 769.0], [49.5, 769.0], [49.6, 772.0], [49.7, 774.0], [49.8, 775.0], [49.9, 775.0], [50.0, 775.0], [50.1, 775.0], [50.2, 775.0], [50.3, 778.0], [50.4, 782.0], [50.5, 784.0], [50.6, 784.0], [50.7, 787.0], [50.8, 787.0], [50.9, 789.0], [51.0, 789.0], [51.1, 793.0], [51.2, 795.0], [51.3, 797.0], [51.4, 797.0], [51.5, 797.0], [51.6, 801.0], [51.7, 801.0], [51.8, 802.0], [51.9, 803.0], [52.0, 803.0], [52.1, 803.0], [52.2, 804.0], [52.3, 808.0], [52.4, 808.0], [52.5, 808.0], [52.6, 809.0], [52.7, 813.0], [52.8, 815.0], [52.9, 815.0], [53.0, 819.0], [53.1, 820.0], [53.2, 820.0], [53.3, 820.0], [53.4, 821.0], [53.5, 824.0], [53.6, 824.0], [53.7, 825.0], [53.8, 827.0], [53.9, 835.0], [54.0, 835.0], [54.1, 835.0], [54.2, 835.0], [54.3, 837.0], [54.4, 837.0], [54.5, 840.0], [54.6, 841.0], [54.7, 841.0], [54.8, 841.0], [54.9, 842.0], [55.0, 848.0], [55.1, 848.0], [55.2, 853.0], [55.3, 861.0], [55.4, 864.0], [55.5, 864.0], [55.6, 866.0], [55.7, 868.0], [55.8, 869.0], [55.9, 869.0], [56.0, 871.0], [56.1, 873.0], [56.2, 874.0], [56.3, 874.0], [56.4, 874.0], [56.5, 877.0], [56.6, 877.0], [56.7, 877.0], [56.8, 878.0], [56.9, 879.0], [57.0, 879.0], [57.1, 881.0], [57.2, 882.0], [57.3, 883.0], [57.4, 883.0], [57.5, 883.0], [57.6, 886.0], [57.7, 888.0], [57.8, 888.0], [57.9, 889.0], [58.0, 891.0], [58.1, 891.0], [58.2, 891.0], [58.3, 896.0], [58.4, 896.0], [58.5, 896.0], [58.6, 897.0], [58.7, 897.0], [58.8, 898.0], [58.9, 898.0], [59.0, 899.0], [59.1, 900.0], [59.2, 901.0], [59.3, 901.0], [59.4, 901.0], [59.5, 903.0], [59.6, 907.0], [59.7, 907.0], [59.8, 907.0], [59.9, 908.0], [60.0, 908.0], [60.1, 908.0], [60.2, 909.0], [60.3, 911.0], [60.4, 911.0], [60.5, 911.0], [60.6, 911.0], [60.7, 912.0], [60.8, 912.0], [60.9, 914.0], [61.0, 914.0], [61.1, 915.0], [61.2, 915.0], [61.3, 916.0], [61.4, 917.0], [61.5, 918.0], [61.6, 918.0], [61.7, 918.0], [61.8, 919.0], [61.9, 919.0], [62.0, 920.0], [62.1, 921.0], [62.2, 922.0], [62.3, 922.0], [62.4, 922.0], [62.5, 925.0], [62.6, 925.0], [62.7, 925.0], [62.8, 925.0], [62.9, 928.0], [63.0, 930.0], [63.1, 930.0], [63.2, 930.0], [63.3, 933.0], [63.4, 933.0], [63.5, 934.0], [63.6, 934.0], [63.7, 935.0], [63.8, 935.0], [63.9, 935.0], [64.0, 937.0], [64.1, 938.0], [64.2, 938.0], [64.3, 939.0], [64.4, 941.0], [64.5, 945.0], [64.6, 945.0], [64.7, 950.0], [64.8, 951.0], [64.9, 952.0], [65.0, 952.0], [65.1, 952.0], [65.2, 952.0], [65.3, 952.0], [65.4, 953.0], [65.5, 954.0], [65.6, 955.0], [65.7, 955.0], [65.8, 955.0], [65.9, 957.0], [66.0, 957.0], [66.1, 957.0], [66.2, 957.0], [66.3, 959.0], [66.4, 961.0], [66.5, 961.0], [66.6, 963.0], [66.7, 964.0], [66.8, 964.0], [66.9, 964.0], [67.0, 964.0], [67.1, 965.0], [67.2, 965.0], [67.3, 968.0], [67.4, 970.0], [67.5, 970.0], [67.6, 970.0], [67.7, 971.0], [67.8, 974.0], [67.9, 974.0], [68.0, 974.0], [68.1, 976.0], [68.2, 977.0], [68.3, 981.0], [68.4, 981.0], [68.5, 981.0], [68.6, 982.0], [68.7, 982.0], [68.8, 984.0], [68.9, 985.0], [69.0, 988.0], [69.1, 988.0], [69.2, 988.0], [69.3, 988.0], [69.4, 989.0], [69.5, 989.0], [69.6, 989.0], [69.7, 991.0], [69.8, 994.0], [69.9, 994.0], [70.0, 995.0], [70.1, 997.0], [70.2, 997.0], [70.3, 998.0], [70.4, 1002.0], [70.5, 1002.0], [70.6, 1002.0], [70.7, 1002.0], [70.8, 1004.0], [70.9, 1005.0], [71.0, 1005.0], [71.1, 1009.0], [71.2, 1010.0], [71.3, 1018.0], [71.4, 1018.0], [71.5, 1018.0], [71.6, 1019.0], [71.7, 1019.0], [71.8, 1020.0], [71.9, 1022.0], [72.0, 1024.0], [72.1, 1024.0], [72.2, 1024.0], [72.3, 1025.0], [72.4, 1025.0], [72.5, 1025.0], [72.6, 1028.0], [72.7, 1029.0], [72.8, 1031.0], [72.9, 1031.0], [73.0, 1031.0], [73.1, 1032.0], [73.2, 1032.0], [73.3, 1032.0], [73.4, 1032.0], [73.5, 1033.0], [73.6, 1033.0], [73.7, 1034.0], [73.8, 1034.0], [73.9, 1035.0], [74.0, 1035.0], [74.1, 1037.0], [74.2, 1039.0], [74.3, 1045.0], [74.4, 1045.0], [74.5, 1047.0], [74.6, 1047.0], [74.7, 1047.0], [74.8, 1047.0], [74.9, 1048.0], [75.0, 1049.0], [75.1, 1049.0], [75.2, 1049.0], [75.3, 1050.0], [75.4, 1050.0], [75.5, 1050.0], [75.6, 1055.0], [75.7, 1058.0], [75.8, 1059.0], [75.9, 1059.0], [76.0, 1060.0], [76.1, 1060.0], [76.2, 1060.0], [76.3, 1060.0], [76.4, 1061.0], [76.5, 1065.0], [76.6, 1065.0], [76.7, 1065.0], [76.8, 1066.0], [76.9, 1067.0], [77.0, 1067.0], [77.1, 1072.0], [77.2, 1073.0], [77.3, 1073.0], [77.4, 1073.0], [77.5, 1075.0], [77.6, 1076.0], [77.7, 1078.0], [77.8, 1078.0], [77.9, 1081.0], [78.0, 1081.0], [78.1, 1082.0], [78.2, 1082.0], [78.3, 1085.0], [78.4, 1086.0], [78.5, 1086.0], [78.6, 1086.0], [78.7, 1088.0], [78.8, 1091.0], [78.9, 1091.0], [79.0, 1094.0], [79.1, 1103.0], [79.2, 1105.0], [79.3, 1105.0], [79.4, 1106.0], [79.5, 1106.0], [79.6, 1111.0], [79.7, 1111.0], [79.8, 1114.0], [79.9, 1115.0], [80.0, 1116.0], [80.1, 1116.0], [80.2, 1117.0], [80.3, 1122.0], [80.4, 1122.0], [80.5, 1125.0], [80.6, 1126.0], [80.7, 1127.0], [80.8, 1127.0], [80.9, 1128.0], [81.0, 1129.0], [81.1, 1130.0], [81.2, 1130.0], [81.3, 1131.0], [81.4, 1134.0], [81.5, 1136.0], [81.6, 1136.0], [81.7, 1138.0], [81.8, 1139.0], [81.9, 1139.0], [82.0, 1139.0], [82.1, 1141.0], [82.2, 1143.0], [82.3, 1143.0], [82.4, 1143.0], [82.5, 1143.0], [82.6, 1144.0], [82.7, 1144.0], [82.8, 1145.0], [82.9, 1150.0], [83.0, 1151.0], [83.1, 1151.0], [83.2, 1151.0], [83.3, 1154.0], [83.4, 1154.0], [83.5, 1156.0], [83.6, 1159.0], [83.7, 1161.0], [83.8, 1161.0], [83.9, 1162.0], [84.0, 1163.0], [84.1, 1171.0], [84.2, 1171.0], [84.3, 1172.0], [84.4, 1179.0], [84.5, 1183.0], [84.6, 1183.0], [84.7, 1183.0], [84.8, 1184.0], [84.9, 1188.0], [85.0, 1188.0], [85.1, 1188.0], [85.2, 1189.0], [85.3, 1189.0], [85.4, 1189.0], [85.5, 1190.0], [85.6, 1193.0], [85.7, 1193.0], [85.8, 1194.0], [85.9, 1196.0], [86.0, 1196.0], [86.1, 1196.0], [86.2, 1202.0], [86.3, 1208.0], [86.4, 1211.0], [86.5, 1211.0], [86.6, 1212.0], [86.7, 1216.0], [86.8, 1216.0], [86.9, 1220.0], [87.0, 1220.0], [87.1, 1225.0], [87.2, 1225.0], [87.3, 1227.0], [87.4, 1227.0], [87.5, 1231.0], [87.6, 1231.0], [87.7, 1237.0], [87.8, 1240.0], [87.9, 1241.0], [88.0, 1241.0], [88.1, 1242.0], [88.2, 1243.0], [88.3, 1245.0], [88.4, 1245.0], [88.5, 1246.0], [88.6, 1247.0], [88.7, 1247.0], [88.8, 1248.0], [88.9, 1250.0], [89.0, 1256.0], [89.1, 1256.0], [89.2, 1258.0], [89.3, 1259.0], [89.4, 1261.0], [89.5, 1261.0], [89.6, 1266.0], [89.7, 1268.0], [89.8, 1271.0], [89.9, 1271.0], [90.0, 1273.0], [90.1, 1287.0], [90.2, 1287.0], [90.3, 1288.0], [90.4, 1289.0], [90.5, 1290.0], [90.6, 1290.0], [90.7, 1301.0], [90.8, 1307.0], [90.9, 1312.0], [91.0, 1312.0], [91.1, 1318.0], [91.2, 1327.0], [91.3, 1346.0], [91.4, 1346.0], [91.5, 1350.0], [91.6, 1350.0], [91.7, 1350.0], [91.8, 1354.0], [91.9, 1355.0], [92.0, 1359.0], [92.1, 1359.0], [92.2, 1373.0], [92.3, 1381.0], [92.4, 1383.0], [92.5, 1383.0], [92.6, 1388.0], [92.7, 1389.0], [92.8, 1425.0], [92.9, 1425.0], [93.0, 1426.0], [93.1, 1427.0], [93.2, 1428.0], [93.3, 1428.0], [93.4, 1430.0], [93.5, 1454.0], [93.6, 1454.0], [93.7, 1461.0], [93.8, 1472.0], [93.9, 1478.0], [94.0, 1478.0], [94.1, 1486.0], [94.2, 1491.0], [94.3, 1495.0], [94.4, 1495.0], [94.5, 1507.0], [94.6, 1509.0], [94.7, 1512.0], [94.8, 1512.0], [94.9, 1513.0], [95.0, 1519.0], [95.1, 1519.0], [95.2, 1528.0], [95.3, 1532.0], [95.4, 1544.0], [95.5, 1544.0], [95.6, 1595.0], [95.7, 1634.0], [95.8, 1637.0], [95.9, 1637.0], [96.0, 1657.0], [96.1, 1663.0], [96.2, 1691.0], [96.3, 1691.0], [96.4, 1723.0], [96.5, 1737.0], [96.6, 1744.0], [96.7, 1744.0], [96.8, 1832.0], [96.9, 1839.0], [97.0, 1839.0], [97.1, 1846.0], [97.2, 1848.0], [97.3, 1855.0], [97.4, 1855.0], [97.5, 1920.0], [97.6, 1982.0], [97.7, 2025.0], [97.8, 2025.0], [97.9, 2042.0], [98.0, 2056.0], [98.1, 2342.0], [98.2, 2342.0], [98.3, 2491.0], [98.4, 2512.0], [98.5, 2512.0], [98.6, 2614.0], [98.7, 2840.0], [98.8, 2878.0], [98.9, 2878.0], [99.0, 2989.0], [99.1, 3081.0], [99.2, 3090.0], [99.3, 3090.0], [99.4, 3109.0], [99.5, 3118.0], [99.6, 3202.0], [99.7, 3202.0], [99.8, 3205.0], [99.9, 3286.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 84.0, "series": [{"data": [[600.0, 72.0], [700.0, 62.0], [800.0, 55.0], [900.0, 83.0], [1000.0, 64.0], [1100.0, 52.0], [1200.0, 33.0], [1300.0, 16.0], [1400.0, 12.0], [1500.0, 9.0], [100.0, 4.0], [1600.0, 5.0], [1700.0, 3.0], [1800.0, 5.0], [1900.0, 2.0], [2000.0, 3.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 2.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 2.0], [3200.0, 3.0], [200.0, 41.0], [300.0, 58.0], [400.0, 58.0], [500.0, 84.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 41.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 533.0, "series": [{"data": [[0.0, 161.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 533.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 41.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.25, "minX": 1.60401726E12, "maxY": 10.0, "series": [{"data": [[1.60401726E12, 10.0], [1.60401732E12, 7.25]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401732E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 274.0, "minX": 1.0, "maxY": 1472.0, "series": [{"data": [[8.0, 593.0], [4.0, 635.0], [1.0, 952.0], [9.0, 544.0], [10.0, 842.0798898071622], [5.0, 772.0], [6.0, 1472.0], [3.0, 553.5], [7.0, 274.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421766, 840.4068027210882]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 112.0, "minX": 1.60401726E12, "maxY": 1812269.4666666666, "series": [{"data": [[1.60401726E12, 1812269.4666666666], [1.60401732E12, 23519.416666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401726E12, 5411.033333333334], [1.60401732E12, 112.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401732E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 704.8124999999999, "minX": 1.60401726E12, "maxY": 843.4242002781637, "series": [{"data": [[1.60401726E12, 843.4242002781637], [1.60401732E12, 704.8124999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401732E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 704.0624999999999, "minX": 1.60401726E12, "maxY": 842.2489568845612, "series": [{"data": [[1.60401726E12, 842.2489568845612], [1.60401732E12, 704.0624999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401732E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.12500000000000003, "minX": 1.60401726E12, "maxY": 0.12656467315716274, "series": [{"data": [[1.60401726E12, 0.12656467315716274], [1.60401732E12, 0.12500000000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401732E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 188.0, "minX": 1.60401726E12, "maxY": 3286.0, "series": [{"data": [[1.60401726E12, 3286.0], [1.60401732E12, 2056.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401726E12, 200.47999982833863], [1.60401732E12, 274.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401726E12, 201.38400020599366], [1.60401732E12, 274.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401726E12, 200.8399999141693], [1.60401732E12, 274.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401726E12, 188.0], [1.60401732E12, 274.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401726E12, 787.0], [1.60401732E12, 577.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401732E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 535.0, "minX": 1.0, "maxY": 997.5, "series": [{"data": [[8.0, 888.5], [16.0, 599.5], [1.0, 952.0], [17.0, 535.0], [9.0, 944.0], [19.0, 618.0], [10.0, 997.5], [11.0, 938.0], [12.0, 902.5], [13.0, 796.0], [14.0, 684.5], [15.0, 572.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 534.5, "minX": 1.0, "maxY": 996.5, "series": [{"data": [[8.0, 887.0], [16.0, 599.0], [1.0, 951.0], [17.0, 534.5], [9.0, 944.0], [19.0, 618.0], [10.0, 996.5], [11.0, 933.5], [12.0, 902.0], [13.0, 795.5], [14.0, 684.5], [15.0, 571.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.6040172E12, "maxY": 11.983333333333333, "series": [{"data": [[1.6040172E12, 0.16666666666666666], [1.60401726E12, 11.983333333333333], [1.60401732E12, 0.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401732E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60401726E12, "maxY": 11.983333333333333, "series": [{"data": [[1.60401726E12, 11.983333333333333], [1.60401732E12, 0.26666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401732E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60401726E12, "maxY": 11.983333333333333, "series": [{"data": [[1.60401726E12, 11.983333333333333], [1.60401732E12, 0.26666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401732E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60401726E12, "maxY": 11.983333333333333, "series": [{"data": [[1.60401726E12, 11.983333333333333], [1.60401732E12, 0.26666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401732E12, "title": "Total Transactions Per Second"}},
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

