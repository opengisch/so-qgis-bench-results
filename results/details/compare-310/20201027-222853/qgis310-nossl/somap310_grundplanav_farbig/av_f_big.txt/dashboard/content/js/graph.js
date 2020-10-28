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
        data: {"result": {"minY": 201.0, "minX": 0.0, "maxY": 3334.0, "series": [{"data": [[0.0, 201.0], [0.1, 201.0], [0.2, 201.0], [0.3, 202.0], [0.4, 202.0], [0.5, 202.0], [0.6, 204.0], [0.7, 206.0], [0.8, 206.0], [0.9, 219.0], [1.0, 222.0], [1.1, 222.0], [1.2, 222.0], [1.3, 234.0], [1.4, 236.0], [1.5, 243.0], [1.6, 243.0], [1.7, 246.0], [1.8, 255.0], [1.9, 255.0], [2.0, 260.0], [2.1, 263.0], [2.2, 264.0], [2.3, 264.0], [2.4, 269.0], [2.5, 273.0], [2.6, 273.0], [2.7, 273.0], [2.8, 274.0], [2.9, 275.0], [3.0, 275.0], [3.1, 275.0], [3.2, 276.0], [3.3, 276.0], [3.4, 276.0], [3.5, 276.0], [3.6, 277.0], [3.7, 277.0], [3.8, 277.0], [3.9, 277.0], [4.0, 278.0], [4.1, 278.0], [4.2, 278.0], [4.3, 278.0], [4.4, 279.0], [4.5, 282.0], [4.6, 282.0], [4.7, 282.0], [4.8, 282.0], [4.9, 283.0], [5.0, 283.0], [5.1, 284.0], [5.2, 285.0], [5.3, 285.0], [5.4, 288.0], [5.5, 291.0], [5.6, 293.0], [5.7, 293.0], [5.8, 294.0], [5.9, 295.0], [6.0, 299.0], [6.1, 299.0], [6.2, 301.0], [6.3, 301.0], [6.4, 303.0], [6.5, 303.0], [6.6, 304.0], [6.7, 306.0], [6.8, 306.0], [6.9, 308.0], [7.0, 309.0], [7.1, 311.0], [7.2, 311.0], [7.3, 313.0], [7.4, 314.0], [7.5, 315.0], [7.6, 315.0], [7.7, 317.0], [7.8, 318.0], [7.9, 319.0], [8.0, 319.0], [8.1, 320.0], [8.2, 322.0], [8.3, 326.0], [8.4, 326.0], [8.5, 327.0], [8.6, 329.0], [8.7, 329.0], [8.8, 334.0], [8.9, 334.0], [9.0, 334.0], [9.1, 334.0], [9.2, 336.0], [9.3, 336.0], [9.4, 337.0], [9.5, 337.0], [9.6, 338.0], [9.7, 340.0], [9.8, 344.0], [9.9, 344.0], [10.0, 344.0], [10.1, 347.0], [10.2, 347.0], [10.3, 348.0], [10.4, 356.0], [10.5, 359.0], [10.6, 359.0], [10.7, 366.0], [10.8, 367.0], [10.9, 371.0], [11.0, 371.0], [11.1, 371.0], [11.2, 373.0], [11.3, 375.0], [11.4, 375.0], [11.5, 377.0], [11.6, 378.0], [11.7, 378.0], [11.8, 378.0], [11.9, 379.0], [12.0, 381.0], [12.1, 381.0], [12.2, 381.0], [12.3, 381.0], [12.4, 385.0], [12.5, 385.0], [12.6, 386.0], [12.7, 389.0], [12.8, 391.0], [12.9, 391.0], [13.0, 391.0], [13.1, 392.0], [13.2, 393.0], [13.3, 393.0], [13.4, 395.0], [13.5, 395.0], [13.6, 395.0], [13.7, 397.0], [13.8, 398.0], [13.9, 398.0], [14.0, 398.0], [14.1, 398.0], [14.2, 399.0], [14.3, 401.0], [14.4, 401.0], [14.5, 401.0], [14.6, 401.0], [14.7, 405.0], [14.8, 405.0], [14.9, 407.0], [15.0, 409.0], [15.1, 409.0], [15.2, 409.0], [15.3, 411.0], [15.4, 415.0], [15.5, 415.0], [15.6, 417.0], [15.7, 417.0], [15.8, 421.0], [15.9, 421.0], [16.0, 422.0], [16.1, 427.0], [16.2, 428.0], [16.3, 428.0], [16.4, 429.0], [16.5, 429.0], [16.6, 429.0], [16.7, 429.0], [16.8, 429.0], [16.9, 430.0], [17.0, 430.0], [17.1, 431.0], [17.2, 433.0], [17.3, 433.0], [17.4, 433.0], [17.5, 435.0], [17.6, 436.0], [17.7, 438.0], [17.8, 438.0], [17.9, 440.0], [18.0, 440.0], [18.1, 441.0], [18.2, 441.0], [18.3, 442.0], [18.4, 443.0], [18.5, 443.0], [18.6, 444.0], [18.7, 444.0], [18.8, 446.0], [18.9, 446.0], [19.0, 448.0], [19.1, 450.0], [19.2, 450.0], [19.3, 450.0], [19.4, 450.0], [19.5, 451.0], [19.6, 451.0], [19.7, 451.0], [19.8, 453.0], [19.9, 456.0], [20.0, 456.0], [20.1, 456.0], [20.2, 456.0], [20.3, 457.0], [20.4, 457.0], [20.5, 458.0], [20.6, 458.0], [20.7, 458.0], [20.8, 458.0], [20.9, 458.0], [21.0, 459.0], [21.1, 459.0], [21.2, 459.0], [21.3, 460.0], [21.4, 462.0], [21.5, 463.0], [21.6, 463.0], [21.7, 463.0], [21.8, 467.0], [21.9, 467.0], [22.0, 467.0], [22.1, 472.0], [22.2, 477.0], [22.3, 477.0], [22.4, 478.0], [22.5, 479.0], [22.6, 482.0], [22.7, 482.0], [22.8, 483.0], [22.9, 489.0], [23.0, 489.0], [23.1, 489.0], [23.2, 490.0], [23.3, 490.0], [23.4, 490.0], [23.5, 492.0], [23.6, 493.0], [23.7, 494.0], [23.8, 494.0], [23.9, 494.0], [24.0, 495.0], [24.1, 496.0], [24.2, 496.0], [24.3, 499.0], [24.4, 499.0], [24.5, 499.0], [24.6, 499.0], [24.7, 500.0], [24.8, 501.0], [24.9, 501.0], [25.0, 501.0], [25.1, 502.0], [25.2, 503.0], [25.3, 503.0], [25.4, 504.0], [25.5, 505.0], [25.6, 509.0], [25.7, 509.0], [25.8, 511.0], [25.9, 511.0], [26.0, 513.0], [26.1, 513.0], [26.2, 514.0], [26.3, 521.0], [26.4, 524.0], [26.5, 524.0], [26.6, 526.0], [26.7, 529.0], [26.8, 529.0], [26.9, 530.0], [27.0, 532.0], [27.1, 532.0], [27.2, 532.0], [27.3, 532.0], [27.4, 535.0], [27.5, 535.0], [27.6, 535.0], [27.7, 536.0], [27.8, 539.0], [27.9, 540.0], [28.0, 540.0], [28.1, 541.0], [28.2, 541.0], [28.3, 541.0], [28.4, 541.0], [28.5, 541.0], [28.6, 544.0], [28.7, 544.0], [28.8, 544.0], [28.9, 545.0], [29.0, 545.0], [29.1, 545.0], [29.2, 546.0], [29.3, 549.0], [29.4, 550.0], [29.5, 550.0], [29.6, 550.0], [29.7, 552.0], [29.8, 553.0], [29.9, 553.0], [30.0, 554.0], [30.1, 555.0], [30.2, 555.0], [30.3, 555.0], [30.4, 555.0], [30.5, 557.0], [30.6, 557.0], [30.7, 557.0], [30.8, 559.0], [30.9, 559.0], [31.0, 559.0], [31.1, 560.0], [31.2, 560.0], [31.3, 562.0], [31.4, 562.0], [31.5, 563.0], [31.6, 563.0], [31.7, 563.0], [31.8, 563.0], [31.9, 563.0], [32.0, 565.0], [32.1, 565.0], [32.2, 566.0], [32.3, 567.0], [32.4, 567.0], [32.5, 567.0], [32.6, 568.0], [32.7, 568.0], [32.8, 568.0], [32.9, 568.0], [33.0, 569.0], [33.1, 569.0], [33.2, 570.0], [33.3, 570.0], [33.4, 570.0], [33.5, 570.0], [33.6, 570.0], [33.7, 571.0], [33.8, 572.0], [33.9, 573.0], [34.0, 573.0], [34.1, 573.0], [34.2, 576.0], [34.3, 576.0], [34.4, 576.0], [34.5, 581.0], [34.6, 581.0], [34.7, 582.0], [34.8, 582.0], [34.9, 583.0], [35.0, 583.0], [35.1, 583.0], [35.2, 585.0], [35.3, 586.0], [35.4, 587.0], [35.5, 587.0], [35.6, 587.0], [35.7, 587.0], [35.8, 588.0], [35.9, 588.0], [36.0, 589.0], [36.1, 591.0], [36.2, 595.0], [36.3, 595.0], [36.4, 599.0], [36.5, 600.0], [36.6, 601.0], [36.7, 601.0], [36.8, 602.0], [36.9, 604.0], [37.0, 604.0], [37.1, 604.0], [37.2, 605.0], [37.3, 608.0], [37.4, 608.0], [37.5, 612.0], [37.6, 613.0], [37.7, 614.0], [37.8, 614.0], [37.9, 614.0], [38.0, 615.0], [38.1, 617.0], [38.2, 617.0], [38.3, 619.0], [38.4, 622.0], [38.5, 622.0], [38.6, 622.0], [38.7, 622.0], [38.8, 623.0], [38.9, 623.0], [39.0, 624.0], [39.1, 624.0], [39.2, 627.0], [39.3, 627.0], [39.4, 628.0], [39.5, 631.0], [39.6, 635.0], [39.7, 635.0], [39.8, 635.0], [39.9, 636.0], [40.0, 636.0], [40.1, 636.0], [40.2, 637.0], [40.3, 639.0], [40.4, 639.0], [40.5, 641.0], [40.6, 641.0], [40.7, 644.0], [40.8, 644.0], [40.9, 653.0], [41.0, 653.0], [41.1, 653.0], [41.2, 653.0], [41.3, 655.0], [41.4, 657.0], [41.5, 657.0], [41.6, 657.0], [41.7, 660.0], [41.8, 663.0], [41.9, 663.0], [42.0, 664.0], [42.1, 665.0], [42.2, 668.0], [42.3, 668.0], [42.4, 670.0], [42.5, 672.0], [42.6, 676.0], [42.7, 676.0], [42.8, 676.0], [42.9, 677.0], [43.0, 677.0], [43.1, 677.0], [43.2, 680.0], [43.3, 680.0], [43.4, 680.0], [43.5, 683.0], [43.6, 684.0], [43.7, 684.0], [43.8, 684.0], [43.9, 684.0], [44.0, 685.0], [44.1, 685.0], [44.2, 685.0], [44.3, 686.0], [44.4, 687.0], [44.5, 687.0], [44.6, 687.0], [44.7, 687.0], [44.8, 688.0], [44.9, 692.0], [45.0, 692.0], [45.1, 692.0], [45.2, 694.0], [45.3, 694.0], [45.4, 700.0], [45.5, 700.0], [45.6, 701.0], [45.7, 701.0], [45.8, 702.0], [45.9, 704.0], [46.0, 704.0], [46.1, 704.0], [46.2, 705.0], [46.3, 707.0], [46.4, 708.0], [46.5, 708.0], [46.6, 708.0], [46.7, 709.0], [46.8, 709.0], [46.9, 709.0], [47.0, 712.0], [47.1, 715.0], [47.2, 715.0], [47.3, 717.0], [47.4, 717.0], [47.5, 718.0], [47.6, 718.0], [47.7, 721.0], [47.8, 724.0], [47.9, 724.0], [48.0, 724.0], [48.1, 725.0], [48.2, 726.0], [48.3, 732.0], [48.4, 732.0], [48.5, 736.0], [48.6, 738.0], [48.7, 738.0], [48.8, 739.0], [48.9, 740.0], [49.0, 740.0], [49.1, 740.0], [49.2, 741.0], [49.3, 743.0], [49.4, 743.0], [49.5, 743.0], [49.6, 747.0], [49.7, 750.0], [49.8, 753.0], [49.9, 753.0], [50.0, 754.0], [50.1, 756.0], [50.2, 756.0], [50.3, 756.0], [50.4, 758.0], [50.5, 763.0], [50.6, 763.0], [50.7, 767.0], [50.8, 767.0], [50.9, 768.0], [51.0, 768.0], [51.1, 773.0], [51.2, 775.0], [51.3, 777.0], [51.4, 777.0], [51.5, 777.0], [51.6, 778.0], [51.7, 778.0], [51.8, 778.0], [51.9, 779.0], [52.0, 779.0], [52.1, 779.0], [52.2, 780.0], [52.3, 781.0], [52.4, 782.0], [52.5, 782.0], [52.6, 787.0], [52.7, 788.0], [52.8, 790.0], [52.9, 790.0], [53.0, 792.0], [53.1, 792.0], [53.2, 792.0], [53.3, 792.0], [53.4, 795.0], [53.5, 795.0], [53.6, 795.0], [53.7, 798.0], [53.8, 798.0], [53.9, 800.0], [54.0, 800.0], [54.1, 801.0], [54.2, 802.0], [54.3, 805.0], [54.4, 805.0], [54.5, 805.0], [54.6, 805.0], [54.7, 807.0], [54.8, 807.0], [54.9, 807.0], [55.0, 809.0], [55.1, 809.0], [55.2, 810.0], [55.3, 810.0], [55.4, 811.0], [55.5, 811.0], [55.6, 818.0], [55.7, 821.0], [55.8, 821.0], [55.9, 821.0], [56.0, 825.0], [56.1, 829.0], [56.2, 831.0], [56.3, 831.0], [56.4, 832.0], [56.5, 832.0], [56.6, 834.0], [56.7, 834.0], [56.8, 836.0], [56.9, 839.0], [57.0, 839.0], [57.1, 842.0], [57.2, 846.0], [57.3, 849.0], [57.4, 849.0], [57.5, 851.0], [57.6, 851.0], [57.7, 852.0], [57.8, 852.0], [57.9, 853.0], [58.0, 854.0], [58.1, 856.0], [58.2, 856.0], [58.3, 857.0], [58.4, 857.0], [58.5, 857.0], [58.6, 857.0], [58.7, 857.0], [58.8, 857.0], [58.9, 857.0], [59.0, 857.0], [59.1, 860.0], [59.2, 860.0], [59.3, 860.0], [59.4, 865.0], [59.5, 865.0], [59.6, 866.0], [59.7, 866.0], [59.8, 868.0], [59.9, 869.0], [60.0, 872.0], [60.1, 872.0], [60.2, 874.0], [60.3, 874.0], [60.4, 874.0], [60.5, 874.0], [60.6, 875.0], [60.7, 876.0], [60.8, 876.0], [60.9, 877.0], [61.0, 881.0], [61.1, 885.0], [61.2, 885.0], [61.3, 892.0], [61.4, 895.0], [61.5, 897.0], [61.6, 897.0], [61.7, 903.0], [61.8, 904.0], [61.9, 904.0], [62.0, 907.0], [62.1, 909.0], [62.2, 910.0], [62.3, 910.0], [62.4, 910.0], [62.5, 911.0], [62.6, 914.0], [62.7, 914.0], [62.8, 916.0], [62.9, 923.0], [63.0, 923.0], [63.1, 923.0], [63.2, 923.0], [63.3, 925.0], [63.4, 925.0], [63.5, 925.0], [63.6, 928.0], [63.7, 932.0], [63.8, 932.0], [63.9, 936.0], [64.0, 937.0], [64.1, 937.0], [64.2, 937.0], [64.3, 941.0], [64.4, 942.0], [64.5, 943.0], [64.6, 943.0], [64.7, 944.0], [64.8, 946.0], [64.9, 946.0], [65.0, 946.0], [65.1, 947.0], [65.2, 950.0], [65.3, 950.0], [65.4, 953.0], [65.5, 959.0], [65.6, 960.0], [65.7, 960.0], [65.8, 961.0], [65.9, 965.0], [66.0, 966.0], [66.1, 966.0], [66.2, 966.0], [66.3, 971.0], [66.4, 971.0], [66.5, 971.0], [66.6, 973.0], [66.7, 973.0], [66.8, 973.0], [66.9, 974.0], [67.0, 975.0], [67.1, 978.0], [67.2, 978.0], [67.3, 980.0], [67.4, 981.0], [67.5, 982.0], [67.6, 982.0], [67.7, 982.0], [67.8, 984.0], [67.9, 985.0], [68.0, 985.0], [68.1, 986.0], [68.2, 987.0], [68.3, 987.0], [68.4, 987.0], [68.5, 988.0], [68.6, 990.0], [68.7, 990.0], [68.8, 990.0], [68.9, 990.0], [69.0, 992.0], [69.1, 992.0], [69.2, 994.0], [69.3, 994.0], [69.4, 996.0], [69.5, 996.0], [69.6, 996.0], [69.7, 1001.0], [69.8, 1004.0], [69.9, 1004.0], [70.0, 1007.0], [70.1, 1009.0], [70.2, 1009.0], [70.3, 1009.0], [70.4, 1010.0], [70.5, 1012.0], [70.6, 1012.0], [70.7, 1012.0], [70.8, 1013.0], [70.9, 1014.0], [71.0, 1014.0], [71.1, 1015.0], [71.2, 1017.0], [71.3, 1017.0], [71.4, 1017.0], [71.5, 1018.0], [71.6, 1019.0], [71.7, 1019.0], [71.8, 1019.0], [71.9, 1020.0], [72.0, 1021.0], [72.1, 1021.0], [72.2, 1021.0], [72.3, 1021.0], [72.4, 1023.0], [72.5, 1023.0], [72.6, 1032.0], [72.7, 1032.0], [72.8, 1032.0], [72.9, 1032.0], [73.0, 1033.0], [73.1, 1033.0], [73.2, 1034.0], [73.3, 1034.0], [73.4, 1039.0], [73.5, 1040.0], [73.6, 1040.0], [73.7, 1042.0], [73.8, 1044.0], [73.9, 1045.0], [74.0, 1045.0], [74.1, 1050.0], [74.2, 1052.0], [74.3, 1058.0], [74.4, 1058.0], [74.5, 1065.0], [74.6, 1067.0], [74.7, 1068.0], [74.8, 1068.0], [74.9, 1068.0], [75.0, 1069.0], [75.1, 1069.0], [75.2, 1072.0], [75.3, 1072.0], [75.4, 1076.0], [75.5, 1076.0], [75.6, 1078.0], [75.7, 1079.0], [75.8, 1080.0], [75.9, 1080.0], [76.0, 1080.0], [76.1, 1085.0], [76.2, 1091.0], [76.3, 1091.0], [76.4, 1093.0], [76.5, 1094.0], [76.6, 1098.0], [76.7, 1098.0], [76.8, 1100.0], [76.9, 1100.0], [77.0, 1100.0], [77.1, 1103.0], [77.2, 1104.0], [77.3, 1108.0], [77.4, 1108.0], [77.5, 1110.0], [77.6, 1116.0], [77.7, 1120.0], [77.8, 1120.0], [77.9, 1122.0], [78.0, 1123.0], [78.1, 1124.0], [78.2, 1124.0], [78.3, 1125.0], [78.4, 1126.0], [78.5, 1126.0], [78.6, 1127.0], [78.7, 1127.0], [78.8, 1129.0], [78.9, 1129.0], [79.0, 1130.0], [79.1, 1130.0], [79.2, 1136.0], [79.3, 1136.0], [79.4, 1137.0], [79.5, 1137.0], [79.6, 1141.0], [79.7, 1141.0], [79.8, 1143.0], [79.9, 1143.0], [80.0, 1143.0], [80.1, 1143.0], [80.2, 1146.0], [80.3, 1155.0], [80.4, 1155.0], [80.5, 1158.0], [80.6, 1161.0], [80.7, 1163.0], [80.8, 1163.0], [80.9, 1163.0], [81.0, 1167.0], [81.1, 1167.0], [81.2, 1167.0], [81.3, 1167.0], [81.4, 1172.0], [81.5, 1173.0], [81.6, 1173.0], [81.7, 1175.0], [81.8, 1176.0], [81.9, 1176.0], [82.0, 1177.0], [82.1, 1181.0], [82.2, 1181.0], [82.3, 1181.0], [82.4, 1182.0], [82.5, 1186.0], [82.6, 1188.0], [82.7, 1188.0], [82.8, 1188.0], [82.9, 1189.0], [83.0, 1190.0], [83.1, 1190.0], [83.2, 1190.0], [83.3, 1191.0], [83.4, 1191.0], [83.5, 1194.0], [83.6, 1195.0], [83.7, 1195.0], [83.8, 1195.0], [83.9, 1199.0], [84.0, 1200.0], [84.1, 1202.0], [84.2, 1202.0], [84.3, 1209.0], [84.4, 1212.0], [84.5, 1214.0], [84.6, 1214.0], [84.7, 1215.0], [84.8, 1218.0], [84.9, 1221.0], [85.0, 1221.0], [85.1, 1223.0], [85.2, 1225.0], [85.3, 1225.0], [85.4, 1228.0], [85.5, 1230.0], [85.6, 1233.0], [85.7, 1233.0], [85.8, 1235.0], [85.9, 1235.0], [86.0, 1236.0], [86.1, 1236.0], [86.2, 1237.0], [86.3, 1238.0], [86.4, 1239.0], [86.5, 1239.0], [86.6, 1240.0], [86.7, 1240.0], [86.8, 1240.0], [86.9, 1242.0], [87.0, 1250.0], [87.1, 1253.0], [87.2, 1253.0], [87.3, 1272.0], [87.4, 1273.0], [87.5, 1273.0], [87.6, 1273.0], [87.7, 1274.0], [87.8, 1279.0], [87.9, 1279.0], [88.0, 1279.0], [88.1, 1279.0], [88.2, 1279.0], [88.3, 1282.0], [88.4, 1282.0], [88.5, 1291.0], [88.6, 1291.0], [88.7, 1291.0], [88.8, 1293.0], [88.9, 1294.0], [89.0, 1297.0], [89.1, 1297.0], [89.2, 1298.0], [89.3, 1298.0], [89.4, 1307.0], [89.5, 1307.0], [89.6, 1311.0], [89.7, 1311.0], [89.8, 1313.0], [89.9, 1313.0], [90.0, 1317.0], [90.1, 1318.0], [90.2, 1318.0], [90.3, 1319.0], [90.4, 1326.0], [90.5, 1332.0], [90.6, 1332.0], [90.7, 1333.0], [90.8, 1341.0], [90.9, 1350.0], [91.0, 1350.0], [91.1, 1358.0], [91.2, 1359.0], [91.3, 1360.0], [91.4, 1360.0], [91.5, 1360.0], [91.6, 1371.0], [91.7, 1371.0], [91.8, 1382.0], [91.9, 1390.0], [92.0, 1392.0], [92.1, 1392.0], [92.2, 1396.0], [92.3, 1398.0], [92.4, 1404.0], [92.5, 1404.0], [92.6, 1410.0], [92.7, 1419.0], [92.8, 1424.0], [92.9, 1424.0], [93.0, 1451.0], [93.1, 1485.0], [93.2, 1489.0], [93.3, 1489.0], [93.4, 1502.0], [93.5, 1511.0], [93.6, 1511.0], [93.7, 1517.0], [93.8, 1521.0], [93.9, 1521.0], [94.0, 1521.0], [94.1, 1531.0], [94.2, 1572.0], [94.3, 1582.0], [94.4, 1582.0], [94.5, 1584.0], [94.6, 1587.0], [94.7, 1600.0], [94.8, 1600.0], [94.9, 1604.0], [95.0, 1622.0], [95.1, 1622.0], [95.2, 1631.0], [95.3, 1647.0], [95.4, 1653.0], [95.5, 1653.0], [95.6, 1658.0], [95.7, 1682.0], [95.8, 1701.0], [95.9, 1701.0], [96.0, 1722.0], [96.1, 1742.0], [96.2, 1758.0], [96.3, 1758.0], [96.4, 1768.0], [96.5, 1770.0], [96.6, 1772.0], [96.7, 1772.0], [96.8, 1783.0], [96.9, 1817.0], [97.0, 1817.0], [97.1, 1832.0], [97.2, 1871.0], [97.3, 1882.0], [97.4, 1882.0], [97.5, 1891.0], [97.6, 1903.0], [97.7, 1922.0], [97.8, 1922.0], [97.9, 1961.0], [98.0, 2341.0], [98.1, 2349.0], [98.2, 2349.0], [98.3, 2677.0], [98.4, 2752.0], [98.5, 2752.0], [98.6, 2781.0], [98.7, 2822.0], [98.8, 2895.0], [98.9, 2895.0], [99.0, 2910.0], [99.1, 2939.0], [99.2, 3038.0], [99.3, 3038.0], [99.4, 3100.0], [99.5, 3125.0], [99.6, 3166.0], [99.7, 3166.0], [99.8, 3314.0], [99.9, 3334.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 87.0, "series": [{"data": [[600.0, 65.0], [700.0, 63.0], [800.0, 57.0], [900.0, 59.0], [1000.0, 52.0], [1100.0, 53.0], [1200.0, 40.0], [1300.0, 22.0], [1400.0, 7.0], [1500.0, 10.0], [1600.0, 8.0], [1700.0, 8.0], [1800.0, 5.0], [1900.0, 3.0], [2300.0, 2.0], [2600.0, 1.0], [2800.0, 2.0], [2700.0, 2.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 3.0], [200.0, 45.0], [3300.0, 2.0], [300.0, 60.0], [400.0, 76.0], [500.0, 87.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 49.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 504.0, "series": [{"data": [[0.0, 182.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 504.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 49.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.846938775510205, "minX": 1.60384158E12, "maxY": 10.0, "series": [{"data": [[1.60384164E12, 9.846938775510205], [1.60384158E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384164E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 456.0, "minX": 1.0, "maxY": 2341.0, "series": [{"data": [[8.0, 740.0], [4.0, 1758.0], [2.0, 708.0], [1.0, 895.0], [9.0, 881.0], [10.0, 834.7093663911843], [5.0, 876.0], [6.0, 456.0], [3.0, 653.0], [7.0, 2341.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 837.1523809523806]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2208.8166666666666, "minX": 1.60384158E12, "maxY": 1171469.65, "series": [{"data": [[1.60384164E12, 664331.15], [1.60384158E12, 1171469.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384164E12, 2208.8166666666666], [1.60384158E12, 3314.2166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384164E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 815.3027210884354, "minX": 1.60384158E12, "maxY": 851.7188208616783, "series": [{"data": [[1.60384164E12, 815.3027210884354], [1.60384158E12, 851.7188208616783]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384164E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 814.1258503401357, "minX": 1.60384158E12, "maxY": 850.5124716553296, "series": [{"data": [[1.60384164E12, 814.1258503401357], [1.60384158E12, 850.5124716553296]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384164E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03061224489795918, "minX": 1.60384158E12, "maxY": 0.1950113378684807, "series": [{"data": [[1.60384164E12, 0.03061224489795918], [1.60384158E12, 0.1950113378684807]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384164E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 201.0, "minX": 1.60384158E12, "maxY": 3334.0, "series": [{"data": [[1.60384164E12, 2341.0], [1.60384158E12, 3334.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384164E12, 273.0], [1.60384158E12, 202.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384164E12, 273.0], [1.60384158E12, 202.7516000843048]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384164E12, 273.0], [1.60384158E12, 202.39799989461898]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384164E12, 264.0], [1.60384158E12, 201.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384164E12, 794.0], [1.60384158E12, 726.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384164E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 443.0, "minX": 7.0, "maxY": 2838.0, "series": [{"data": [[8.0, 2838.0], [9.0, 1116.0], [10.0, 754.0], [11.0, 866.5], [12.0, 883.0], [13.0, 820.5], [14.0, 692.5], [15.0, 609.5], [16.0, 680.5], [17.0, 576.0], [18.0, 541.0], [19.0, 443.0], [7.0, 1074.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 443.0, "minX": 7.0, "maxY": 2836.5, "series": [{"data": [[8.0, 2836.5], [9.0, 1115.0], [10.0, 753.5], [11.0, 865.5], [12.0, 882.5], [13.0, 820.5], [14.0, 691.0], [15.0, 605.5], [16.0, 680.5], [17.0, 575.0], [18.0, 540.5], [19.0, 443.0], [7.0, 1072.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.733333333333333, "minX": 1.60384158E12, "maxY": 7.516666666666667, "series": [{"data": [[1.60384164E12, 4.733333333333333], [1.60384158E12, 7.516666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384164E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.9, "minX": 1.60384158E12, "maxY": 7.35, "series": [{"data": [[1.60384164E12, 4.9], [1.60384158E12, 7.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384164E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.9, "minX": 1.60384158E12, "maxY": 7.35, "series": [{"data": [[1.60384164E12, 4.9], [1.60384158E12, 7.35]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384164E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.9, "minX": 1.60384158E12, "maxY": 7.35, "series": [{"data": [[1.60384164E12, 4.9], [1.60384158E12, 7.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384164E12, "title": "Total Transactions Per Second"}},
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

