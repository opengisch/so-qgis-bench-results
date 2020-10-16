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
        data: {"result": {"minY": 190.0, "minX": 0.0, "maxY": 3146.0, "series": [{"data": [[0.0, 190.0], [0.1, 190.0], [0.2, 193.0], [0.3, 194.0], [0.4, 194.0], [0.5, 196.0], [0.6, 198.0], [0.7, 199.0], [0.8, 199.0], [0.9, 201.0], [1.0, 206.0], [1.1, 209.0], [1.2, 209.0], [1.3, 211.0], [1.4, 217.0], [1.5, 220.0], [1.6, 220.0], [1.7, 220.0], [1.8, 221.0], [1.9, 221.0], [2.0, 227.0], [2.1, 232.0], [2.2, 237.0], [2.3, 237.0], [2.4, 242.0], [2.5, 244.0], [2.6, 244.0], [2.7, 244.0], [2.8, 249.0], [2.9, 249.0], [3.0, 255.0], [3.1, 255.0], [3.2, 256.0], [3.3, 256.0], [3.4, 256.0], [3.5, 256.0], [3.6, 256.0], [3.7, 260.0], [3.8, 260.0], [3.9, 263.0], [4.0, 271.0], [4.1, 276.0], [4.2, 276.0], [4.3, 276.0], [4.4, 278.0], [4.5, 280.0], [4.6, 280.0], [4.7, 282.0], [4.8, 287.0], [4.9, 299.0], [5.0, 299.0], [5.1, 300.0], [5.2, 304.0], [5.3, 304.0], [5.4, 306.0], [5.5, 309.0], [5.6, 312.0], [5.7, 312.0], [5.8, 314.0], [5.9, 317.0], [6.0, 318.0], [6.1, 318.0], [6.2, 322.0], [6.3, 323.0], [6.4, 326.0], [6.5, 326.0], [6.6, 327.0], [6.7, 328.0], [6.8, 328.0], [6.9, 330.0], [7.0, 332.0], [7.1, 336.0], [7.2, 336.0], [7.3, 341.0], [7.4, 354.0], [7.5, 359.0], [7.6, 359.0], [7.7, 365.0], [7.8, 367.0], [7.9, 369.0], [8.0, 369.0], [8.1, 372.0], [8.2, 379.0], [8.3, 380.0], [8.4, 380.0], [8.5, 385.0], [8.6, 386.0], [8.7, 386.0], [8.8, 386.0], [8.9, 386.0], [9.0, 388.0], [9.1, 388.0], [9.2, 395.0], [9.3, 396.0], [9.4, 398.0], [9.5, 398.0], [9.6, 399.0], [9.7, 402.0], [9.8, 403.0], [9.9, 403.0], [10.0, 403.0], [10.1, 404.0], [10.2, 404.0], [10.3, 405.0], [10.4, 405.0], [10.5, 406.0], [10.6, 406.0], [10.7, 408.0], [10.8, 409.0], [10.9, 410.0], [11.0, 410.0], [11.1, 412.0], [11.2, 414.0], [11.3, 417.0], [11.4, 417.0], [11.5, 421.0], [11.6, 428.0], [11.7, 428.0], [11.8, 429.0], [11.9, 430.0], [12.0, 431.0], [12.1, 431.0], [12.2, 432.0], [12.3, 433.0], [12.4, 434.0], [12.5, 434.0], [12.6, 435.0], [12.7, 436.0], [12.8, 438.0], [12.9, 438.0], [13.0, 440.0], [13.1, 441.0], [13.2, 447.0], [13.3, 447.0], [13.4, 447.0], [13.5, 450.0], [13.6, 450.0], [13.7, 451.0], [13.8, 453.0], [13.9, 454.0], [14.0, 454.0], [14.1, 455.0], [14.2, 455.0], [14.3, 457.0], [14.4, 457.0], [14.5, 458.0], [14.6, 458.0], [14.7, 461.0], [14.8, 461.0], [14.9, 462.0], [15.0, 463.0], [15.1, 463.0], [15.2, 468.0], [15.3, 471.0], [15.4, 473.0], [15.5, 473.0], [15.6, 473.0], [15.7, 474.0], [15.8, 475.0], [15.9, 475.0], [16.0, 479.0], [16.1, 479.0], [16.2, 480.0], [16.3, 480.0], [16.4, 481.0], [16.5, 483.0], [16.6, 483.0], [16.7, 483.0], [16.8, 485.0], [16.9, 486.0], [17.0, 486.0], [17.1, 487.0], [17.2, 488.0], [17.3, 489.0], [17.4, 489.0], [17.5, 489.0], [17.6, 490.0], [17.7, 490.0], [17.8, 490.0], [17.9, 491.0], [18.0, 491.0], [18.1, 492.0], [18.2, 492.0], [18.3, 494.0], [18.4, 495.0], [18.5, 495.0], [18.6, 495.0], [18.7, 496.0], [18.8, 498.0], [18.9, 498.0], [19.0, 499.0], [19.1, 499.0], [19.2, 499.0], [19.3, 499.0], [19.4, 499.0], [19.5, 500.0], [19.6, 500.0], [19.7, 500.0], [19.8, 501.0], [19.9, 502.0], [20.0, 503.0], [20.1, 503.0], [20.2, 504.0], [20.3, 504.0], [20.4, 504.0], [20.5, 504.0], [20.6, 506.0], [20.7, 508.0], [20.8, 508.0], [20.9, 508.0], [21.0, 508.0], [21.1, 508.0], [21.2, 508.0], [21.3, 510.0], [21.4, 511.0], [21.5, 511.0], [21.6, 511.0], [21.7, 513.0], [21.8, 513.0], [21.9, 513.0], [22.0, 514.0], [22.1, 514.0], [22.2, 514.0], [22.3, 514.0], [22.4, 515.0], [22.5, 515.0], [22.6, 515.0], [22.7, 515.0], [22.8, 516.0], [22.9, 518.0], [23.0, 519.0], [23.1, 519.0], [23.2, 519.0], [23.3, 520.0], [23.4, 520.0], [23.5, 520.0], [23.6, 520.0], [23.7, 524.0], [23.8, 524.0], [23.9, 524.0], [24.0, 525.0], [24.1, 527.0], [24.2, 527.0], [24.3, 528.0], [24.4, 530.0], [24.5, 531.0], [24.6, 531.0], [24.7, 533.0], [24.8, 534.0], [24.9, 536.0], [25.0, 536.0], [25.1, 537.0], [25.2, 538.0], [25.3, 538.0], [25.4, 538.0], [25.5, 541.0], [25.6, 542.0], [25.7, 542.0], [25.8, 544.0], [25.9, 544.0], [26.0, 545.0], [26.1, 545.0], [26.2, 545.0], [26.3, 545.0], [26.4, 545.0], [26.5, 545.0], [26.6, 546.0], [26.7, 548.0], [26.8, 548.0], [26.9, 549.0], [27.0, 549.0], [27.1, 550.0], [27.2, 550.0], [27.3, 552.0], [27.4, 552.0], [27.5, 554.0], [27.6, 554.0], [27.7, 561.0], [27.8, 562.0], [27.9, 563.0], [28.0, 563.0], [28.1, 566.0], [28.2, 570.0], [28.3, 571.0], [28.4, 571.0], [28.5, 571.0], [28.6, 572.0], [28.7, 572.0], [28.8, 573.0], [28.9, 573.0], [29.0, 573.0], [29.1, 573.0], [29.2, 573.0], [29.3, 575.0], [29.4, 578.0], [29.5, 578.0], [29.6, 578.0], [29.7, 579.0], [29.8, 579.0], [29.9, 579.0], [30.0, 581.0], [30.1, 582.0], [30.2, 582.0], [30.3, 582.0], [30.4, 583.0], [30.5, 586.0], [30.6, 586.0], [30.7, 587.0], [30.8, 588.0], [30.9, 589.0], [31.0, 589.0], [31.1, 591.0], [31.2, 592.0], [31.3, 593.0], [31.4, 593.0], [31.5, 593.0], [31.6, 594.0], [31.7, 594.0], [31.8, 594.0], [31.9, 594.0], [32.0, 595.0], [32.1, 595.0], [32.2, 596.0], [32.3, 596.0], [32.4, 598.0], [32.5, 598.0], [32.6, 598.0], [32.7, 598.0], [32.8, 599.0], [32.9, 599.0], [33.0, 599.0], [33.1, 600.0], [33.2, 601.0], [33.3, 601.0], [33.4, 602.0], [33.5, 605.0], [33.6, 605.0], [33.7, 605.0], [33.8, 606.0], [33.9, 608.0], [34.0, 608.0], [34.1, 608.0], [34.2, 610.0], [34.3, 611.0], [34.4, 611.0], [34.5, 612.0], [34.6, 612.0], [34.7, 614.0], [34.8, 614.0], [34.9, 617.0], [35.0, 619.0], [35.1, 619.0], [35.2, 623.0], [35.3, 625.0], [35.4, 628.0], [35.5, 628.0], [35.6, 629.0], [35.7, 630.0], [35.8, 632.0], [35.9, 632.0], [36.0, 632.0], [36.1, 632.0], [36.2, 633.0], [36.3, 633.0], [36.4, 637.0], [36.5, 638.0], [36.6, 639.0], [36.7, 639.0], [36.8, 639.0], [36.9, 639.0], [37.0, 639.0], [37.1, 641.0], [37.2, 642.0], [37.3, 644.0], [37.4, 644.0], [37.5, 645.0], [37.6, 646.0], [37.7, 646.0], [37.8, 646.0], [37.9, 647.0], [38.0, 647.0], [38.1, 647.0], [38.2, 647.0], [38.3, 649.0], [38.4, 651.0], [38.5, 651.0], [38.6, 652.0], [38.7, 653.0], [38.8, 654.0], [38.9, 654.0], [39.0, 654.0], [39.1, 655.0], [39.2, 657.0], [39.3, 657.0], [39.4, 661.0], [39.5, 663.0], [39.6, 664.0], [39.7, 664.0], [39.8, 664.0], [39.9, 667.0], [40.0, 670.0], [40.1, 670.0], [40.2, 671.0], [40.3, 671.0], [40.4, 671.0], [40.5, 672.0], [40.6, 672.0], [40.7, 672.0], [40.8, 672.0], [40.9, 673.0], [41.0, 674.0], [41.1, 674.0], [41.2, 674.0], [41.3, 675.0], [41.4, 676.0], [41.5, 676.0], [41.6, 676.0], [41.7, 685.0], [41.8, 685.0], [41.9, 685.0], [42.0, 690.0], [42.1, 691.0], [42.2, 692.0], [42.3, 692.0], [42.4, 693.0], [42.5, 694.0], [42.6, 698.0], [42.7, 698.0], [42.8, 702.0], [42.9, 704.0], [43.0, 705.0], [43.1, 705.0], [43.2, 705.0], [43.3, 706.0], [43.4, 706.0], [43.5, 708.0], [43.6, 710.0], [43.7, 712.0], [43.8, 712.0], [43.9, 714.0], [44.0, 715.0], [44.1, 717.0], [44.2, 717.0], [44.3, 718.0], [44.4, 718.0], [44.5, 719.0], [44.6, 719.0], [44.7, 720.0], [44.8, 722.0], [44.9, 724.0], [45.0, 724.0], [45.1, 724.0], [45.2, 725.0], [45.3, 725.0], [45.4, 725.0], [45.5, 726.0], [45.6, 729.0], [45.7, 729.0], [45.8, 730.0], [45.9, 730.0], [46.0, 734.0], [46.1, 734.0], [46.2, 738.0], [46.3, 739.0], [46.4, 740.0], [46.5, 740.0], [46.6, 744.0], [46.7, 744.0], [46.8, 744.0], [46.9, 746.0], [47.0, 748.0], [47.1, 748.0], [47.2, 748.0], [47.3, 750.0], [47.4, 750.0], [47.5, 753.0], [47.6, 753.0], [47.7, 758.0], [47.8, 760.0], [47.9, 760.0], [48.0, 760.0], [48.1, 760.0], [48.2, 761.0], [48.3, 763.0], [48.4, 763.0], [48.5, 767.0], [48.6, 767.0], [48.7, 767.0], [48.8, 770.0], [48.9, 771.0], [49.0, 773.0], [49.1, 773.0], [49.2, 773.0], [49.3, 774.0], [49.4, 774.0], [49.5, 774.0], [49.6, 775.0], [49.7, 775.0], [49.8, 778.0], [49.9, 778.0], [50.0, 779.0], [50.1, 779.0], [50.2, 779.0], [50.3, 779.0], [50.4, 780.0], [50.5, 784.0], [50.6, 784.0], [50.7, 785.0], [50.8, 786.0], [50.9, 787.0], [51.0, 787.0], [51.1, 789.0], [51.2, 789.0], [51.3, 790.0], [51.4, 790.0], [51.5, 794.0], [51.6, 794.0], [51.7, 794.0], [51.8, 797.0], [51.9, 798.0], [52.0, 798.0], [52.1, 798.0], [52.2, 801.0], [52.3, 801.0], [52.4, 804.0], [52.5, 804.0], [52.6, 805.0], [52.7, 807.0], [52.8, 808.0], [52.9, 808.0], [53.0, 810.0], [53.1, 815.0], [53.2, 816.0], [53.3, 816.0], [53.4, 818.0], [53.5, 820.0], [53.6, 820.0], [53.7, 822.0], [53.8, 823.0], [53.9, 824.0], [54.0, 824.0], [54.1, 824.0], [54.2, 827.0], [54.3, 829.0], [54.4, 829.0], [54.5, 831.0], [54.6, 833.0], [54.7, 833.0], [54.8, 833.0], [54.9, 835.0], [55.0, 836.0], [55.1, 836.0], [55.2, 837.0], [55.3, 837.0], [55.4, 846.0], [55.5, 846.0], [55.6, 846.0], [55.7, 846.0], [55.8, 849.0], [55.9, 849.0], [56.0, 854.0], [56.1, 854.0], [56.2, 858.0], [56.3, 858.0], [56.4, 858.0], [56.5, 862.0], [56.6, 862.0], [56.7, 862.0], [56.8, 862.0], [56.9, 866.0], [57.0, 866.0], [57.1, 867.0], [57.2, 867.0], [57.3, 867.0], [57.4, 867.0], [57.5, 868.0], [57.6, 877.0], [57.7, 877.0], [57.8, 877.0], [57.9, 878.0], [58.0, 880.0], [58.1, 885.0], [58.2, 885.0], [58.3, 893.0], [58.4, 895.0], [58.5, 895.0], [58.6, 895.0], [58.7, 895.0], [58.8, 897.0], [58.9, 897.0], [59.0, 898.0], [59.1, 898.0], [59.2, 900.0], [59.3, 900.0], [59.4, 902.0], [59.5, 903.0], [59.6, 904.0], [59.7, 904.0], [59.8, 907.0], [59.9, 912.0], [60.0, 913.0], [60.1, 913.0], [60.2, 914.0], [60.3, 915.0], [60.4, 915.0], [60.5, 915.0], [60.6, 916.0], [60.7, 918.0], [60.8, 918.0], [60.9, 919.0], [61.0, 922.0], [61.1, 923.0], [61.2, 923.0], [61.3, 923.0], [61.4, 923.0], [61.5, 924.0], [61.6, 924.0], [61.7, 925.0], [61.8, 927.0], [61.9, 927.0], [62.0, 927.0], [62.1, 928.0], [62.2, 930.0], [62.3, 930.0], [62.4, 931.0], [62.5, 933.0], [62.6, 934.0], [62.7, 934.0], [62.8, 935.0], [62.9, 940.0], [63.0, 944.0], [63.1, 944.0], [63.2, 945.0], [63.3, 950.0], [63.4, 950.0], [63.5, 950.0], [63.6, 952.0], [63.7, 954.0], [63.8, 954.0], [63.9, 956.0], [64.0, 956.0], [64.1, 958.0], [64.2, 958.0], [64.3, 959.0], [64.4, 959.0], [64.5, 960.0], [64.6, 960.0], [64.7, 963.0], [64.8, 966.0], [64.9, 971.0], [65.0, 971.0], [65.1, 972.0], [65.2, 972.0], [65.3, 972.0], [65.4, 973.0], [65.5, 973.0], [65.6, 973.0], [65.7, 973.0], [65.8, 973.0], [65.9, 975.0], [66.0, 975.0], [66.1, 975.0], [66.2, 976.0], [66.3, 982.0], [66.4, 985.0], [66.5, 985.0], [66.6, 987.0], [66.7, 987.0], [66.8, 987.0], [66.9, 989.0], [67.0, 990.0], [67.1, 991.0], [67.2, 991.0], [67.3, 998.0], [67.4, 999.0], [67.5, 1000.0], [67.6, 1000.0], [67.7, 1002.0], [67.8, 1003.0], [67.9, 1004.0], [68.0, 1004.0], [68.1, 1004.0], [68.2, 1004.0], [68.3, 1007.0], [68.4, 1007.0], [68.5, 1007.0], [68.6, 1010.0], [68.7, 1010.0], [68.8, 1010.0], [68.9, 1011.0], [69.0, 1011.0], [69.1, 1011.0], [69.2, 1013.0], [69.3, 1017.0], [69.4, 1018.0], [69.5, 1018.0], [69.6, 1019.0], [69.7, 1020.0], [69.8, 1020.0], [69.9, 1020.0], [70.0, 1021.0], [70.1, 1022.0], [70.2, 1022.0], [70.3, 1023.0], [70.4, 1028.0], [70.5, 1034.0], [70.6, 1034.0], [70.7, 1037.0], [70.8, 1038.0], [70.9, 1040.0], [71.0, 1040.0], [71.1, 1042.0], [71.2, 1042.0], [71.3, 1042.0], [71.4, 1042.0], [71.5, 1043.0], [71.6, 1045.0], [71.7, 1045.0], [71.8, 1045.0], [71.9, 1048.0], [72.0, 1053.0], [72.1, 1053.0], [72.2, 1054.0], [72.3, 1055.0], [72.4, 1059.0], [72.5, 1059.0], [72.6, 1059.0], [72.7, 1059.0], [72.8, 1061.0], [72.9, 1061.0], [73.0, 1066.0], [73.1, 1069.0], [73.2, 1070.0], [73.3, 1070.0], [73.4, 1072.0], [73.5, 1073.0], [73.6, 1073.0], [73.7, 1073.0], [73.8, 1078.0], [73.9, 1079.0], [74.0, 1079.0], [74.1, 1079.0], [74.2, 1082.0], [74.3, 1084.0], [74.4, 1084.0], [74.5, 1086.0], [74.6, 1088.0], [74.7, 1089.0], [74.8, 1089.0], [74.9, 1091.0], [75.0, 1092.0], [75.1, 1092.0], [75.2, 1093.0], [75.3, 1094.0], [75.4, 1095.0], [75.5, 1095.0], [75.6, 1096.0], [75.7, 1098.0], [75.8, 1103.0], [75.9, 1103.0], [76.0, 1103.0], [76.1, 1105.0], [76.2, 1105.0], [76.3, 1105.0], [76.4, 1106.0], [76.5, 1106.0], [76.6, 1110.0], [76.7, 1110.0], [76.8, 1116.0], [76.9, 1117.0], [77.0, 1117.0], [77.1, 1118.0], [77.2, 1118.0], [77.3, 1120.0], [77.4, 1120.0], [77.5, 1123.0], [77.6, 1126.0], [77.7, 1126.0], [77.8, 1126.0], [77.9, 1130.0], [78.0, 1131.0], [78.1, 1133.0], [78.2, 1133.0], [78.3, 1134.0], [78.4, 1135.0], [78.5, 1135.0], [78.6, 1135.0], [78.7, 1136.0], [78.8, 1139.0], [78.9, 1139.0], [79.0, 1139.0], [79.1, 1140.0], [79.2, 1145.0], [79.3, 1145.0], [79.4, 1146.0], [79.5, 1148.0], [79.6, 1150.0], [79.7, 1150.0], [79.8, 1151.0], [79.9, 1154.0], [80.0, 1155.0], [80.1, 1155.0], [80.2, 1155.0], [80.3, 1156.0], [80.4, 1156.0], [80.5, 1160.0], [80.6, 1161.0], [80.7, 1161.0], [80.8, 1161.0], [80.9, 1163.0], [81.0, 1164.0], [81.1, 1168.0], [81.2, 1168.0], [81.3, 1170.0], [81.4, 1170.0], [81.5, 1172.0], [81.6, 1172.0], [81.7, 1172.0], [81.8, 1172.0], [81.9, 1172.0], [82.0, 1174.0], [82.1, 1179.0], [82.2, 1181.0], [82.3, 1181.0], [82.4, 1182.0], [82.5, 1182.0], [82.6, 1182.0], [82.7, 1182.0], [82.8, 1184.0], [82.9, 1185.0], [83.0, 1187.0], [83.1, 1187.0], [83.2, 1188.0], [83.3, 1193.0], [83.4, 1193.0], [83.5, 1196.0], [83.6, 1198.0], [83.7, 1201.0], [83.8, 1201.0], [83.9, 1202.0], [84.0, 1203.0], [84.1, 1203.0], [84.2, 1203.0], [84.3, 1204.0], [84.4, 1205.0], [84.5, 1206.0], [84.6, 1206.0], [84.7, 1206.0], [84.8, 1206.0], [84.9, 1209.0], [85.0, 1209.0], [85.1, 1210.0], [85.2, 1210.0], [85.3, 1210.0], [85.4, 1211.0], [85.5, 1212.0], [85.6, 1214.0], [85.7, 1214.0], [85.8, 1215.0], [85.9, 1221.0], [86.0, 1223.0], [86.1, 1223.0], [86.2, 1223.0], [86.3, 1232.0], [86.4, 1238.0], [86.5, 1238.0], [86.6, 1240.0], [86.7, 1243.0], [86.8, 1243.0], [86.9, 1243.0], [87.0, 1244.0], [87.1, 1246.0], [87.2, 1246.0], [87.3, 1246.0], [87.4, 1246.0], [87.5, 1250.0], [87.6, 1250.0], [87.7, 1251.0], [87.8, 1251.0], [87.9, 1252.0], [88.0, 1252.0], [88.1, 1254.0], [88.2, 1254.0], [88.3, 1255.0], [88.4, 1255.0], [88.5, 1263.0], [88.6, 1264.0], [88.7, 1264.0], [88.8, 1266.0], [88.9, 1274.0], [89.0, 1277.0], [89.1, 1277.0], [89.2, 1281.0], [89.3, 1286.0], [89.4, 1293.0], [89.5, 1293.0], [89.6, 1293.0], [89.7, 1294.0], [89.8, 1296.0], [89.9, 1296.0], [90.0, 1299.0], [90.1, 1303.0], [90.2, 1303.0], [90.3, 1304.0], [90.4, 1304.0], [90.5, 1305.0], [90.6, 1305.0], [90.7, 1320.0], [90.8, 1323.0], [90.9, 1332.0], [91.0, 1332.0], [91.1, 1354.0], [91.2, 1355.0], [91.3, 1367.0], [91.4, 1367.0], [91.5, 1387.0], [91.6, 1392.0], [91.7, 1392.0], [91.8, 1393.0], [91.9, 1398.0], [92.0, 1399.0], [92.1, 1399.0], [92.2, 1400.0], [92.3, 1403.0], [92.4, 1405.0], [92.5, 1405.0], [92.6, 1407.0], [92.7, 1413.0], [92.8, 1426.0], [92.9, 1426.0], [93.0, 1451.0], [93.1, 1452.0], [93.2, 1455.0], [93.3, 1455.0], [93.4, 1462.0], [93.5, 1467.0], [93.6, 1467.0], [93.7, 1469.0], [93.8, 1470.0], [93.9, 1473.0], [94.0, 1473.0], [94.1, 1498.0], [94.2, 1513.0], [94.3, 1522.0], [94.4, 1522.0], [94.5, 1564.0], [94.6, 1591.0], [94.7, 1617.0], [94.8, 1617.0], [94.9, 1618.0], [95.0, 1626.0], [95.1, 1626.0], [95.2, 1636.0], [95.3, 1638.0], [95.4, 1649.0], [95.5, 1649.0], [95.6, 1650.0], [95.7, 1687.0], [95.8, 1695.0], [95.9, 1695.0], [96.0, 1769.0], [96.1, 1783.0], [96.2, 1784.0], [96.3, 1784.0], [96.4, 1815.0], [96.5, 1817.0], [96.6, 1870.0], [96.7, 1870.0], [96.8, 1882.0], [96.9, 1883.0], [97.0, 1883.0], [97.1, 1888.0], [97.2, 1918.0], [97.3, 1931.0], [97.4, 1931.0], [97.5, 1951.0], [97.6, 1994.0], [97.7, 1995.0], [97.8, 1995.0], [97.9, 2011.0], [98.0, 2062.0], [98.1, 2068.0], [98.2, 2068.0], [98.3, 2260.0], [98.4, 2603.0], [98.5, 2603.0], [98.6, 2613.0], [98.7, 2647.0], [98.8, 2739.0], [98.9, 2739.0], [99.0, 2828.0], [99.1, 2834.0], [99.2, 2862.0], [99.3, 2862.0], [99.4, 2885.0], [99.5, 2950.0], [99.6, 3016.0], [99.7, 3016.0], [99.8, 3125.0], [99.9, 3146.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 100.0, "series": [{"data": [[600.0, 71.0], [700.0, 69.0], [800.0, 52.0], [900.0, 61.0], [1000.0, 61.0], [1100.0, 58.0], [1200.0, 47.0], [1300.0, 15.0], [1400.0, 15.0], [1500.0, 4.0], [100.0, 6.0], [1600.0, 9.0], [1700.0, 3.0], [1800.0, 6.0], [1900.0, 5.0], [2000.0, 3.0], [2200.0, 1.0], [2600.0, 3.0], [2800.0, 4.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 2.0], [200.0, 31.0], [300.0, 34.0], [400.0, 72.0], [500.0, 100.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 43.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 547.0, "series": [{"data": [[0.0, 145.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 547.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 43.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.919117647058824, "minX": 1.60280484E12, "maxY": 10.0, "series": [{"data": [[1.6028049E12, 9.919117647058824], [1.60280484E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028049E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 479.0, "minX": 1.0, "maxY": 1455.0, "series": [{"data": [[8.0, 705.0], [4.0, 1455.0], [2.0, 511.0], [1.0, 849.0], [10.0, 857.2049518569468], [5.0, 514.0], [6.0, 537.0], [3.0, 479.0], [7.0, 495.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 855.419047619048]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1445.4833333333333, "minX": 1.60280484E12, "maxY": 1246261.45, "series": [{"data": [[1.6028049E12, 1246261.45], [1.60280484E12, 589503.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6028049E12, 4077.55], [1.60280484E12, 1445.4833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028049E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 800.3180147058824, "minX": 1.60280484E12, "maxY": 1012.3560209424082, "series": [{"data": [[1.6028049E12, 800.3180147058824], [1.60280484E12, 1012.3560209424082]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028049E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 799.1139705882352, "minX": 1.60280484E12, "maxY": 1010.9214659685864, "series": [{"data": [[1.6028049E12, 799.1139705882352], [1.60280484E12, 1010.9214659685864]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028049E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.020220588235294115, "minX": 1.60280484E12, "maxY": 0.47120418848167517, "series": [{"data": [[1.6028049E12, 0.020220588235294115], [1.60280484E12, 0.47120418848167517]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028049E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 190.0, "minX": 1.60280484E12, "maxY": 3146.0, "series": [{"data": [[1.6028049E12, 2950.0], [1.60280484E12, 3146.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6028049E12, 198.90499987006189], [1.60280484E12, 202.4639994049072]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6028049E12, 199.7910001039505], [1.60280484E12, 204.7104002380371]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6028049E12, 199.35499987006187], [1.60280484E12, 203.71199970245362]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6028049E12, 190.0], [1.60280484E12, 193.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6028049E12, 748.0], [1.60280484E12, 880.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028049E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 525.5, "minX": 6.0, "maxY": 2120.5, "series": [{"data": [[16.0, 659.5], [17.0, 649.0], [9.0, 1031.0], [18.0, 562.5], [10.0, 930.5], [11.0, 1025.5], [12.0, 841.5], [6.0, 525.5], [13.0, 778.0], [7.0, 2120.5], [14.0, 603.5], [15.0, 632.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 525.5, "minX": 6.0, "maxY": 2118.5, "series": [{"data": [[16.0, 659.0], [17.0, 646.0], [9.0, 1030.0], [18.0, 562.5], [10.0, 930.0], [11.0, 1024.5], [12.0, 840.5], [6.0, 525.5], [13.0, 778.0], [7.0, 2118.5], [14.0, 603.5], [15.0, 631.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.35, "minX": 1.60280484E12, "maxY": 8.9, "series": [{"data": [[1.6028049E12, 8.9], [1.60280484E12, 3.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028049E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.183333333333333, "minX": 1.60280484E12, "maxY": 9.066666666666666, "series": [{"data": [[1.6028049E12, 9.066666666666666], [1.60280484E12, 3.183333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028049E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.183333333333333, "minX": 1.60280484E12, "maxY": 9.066666666666666, "series": [{"data": [[1.6028049E12, 9.066666666666666], [1.60280484E12, 3.183333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028049E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.183333333333333, "minX": 1.60280484E12, "maxY": 9.066666666666666, "series": [{"data": [[1.6028049E12, 9.066666666666666], [1.60280484E12, 3.183333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028049E12, "title": "Total Transactions Per Second"}},
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

