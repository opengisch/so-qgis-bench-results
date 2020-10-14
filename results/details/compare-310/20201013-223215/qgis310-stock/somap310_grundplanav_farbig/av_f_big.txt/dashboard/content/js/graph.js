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
        data: {"result": {"minY": 173.0, "minX": 0.0, "maxY": 3337.0, "series": [{"data": [[0.0, 173.0], [0.1, 173.0], [0.2, 180.0], [0.3, 182.0], [0.4, 182.0], [0.5, 189.0], [0.6, 205.0], [0.7, 210.0], [0.8, 210.0], [0.9, 217.0], [1.0, 219.0], [1.1, 223.0], [1.2, 223.0], [1.3, 223.0], [1.4, 224.0], [1.5, 224.0], [1.6, 224.0], [1.7, 225.0], [1.8, 230.0], [1.9, 230.0], [2.0, 230.0], [2.1, 232.0], [2.2, 236.0], [2.3, 236.0], [2.4, 243.0], [2.5, 248.0], [2.6, 249.0], [2.7, 249.0], [2.8, 250.0], [2.9, 257.0], [3.0, 259.0], [3.1, 259.0], [3.2, 260.0], [3.3, 263.0], [3.4, 263.0], [3.5, 268.0], [3.6, 270.0], [3.7, 273.0], [3.8, 273.0], [3.9, 274.0], [4.0, 277.0], [4.1, 278.0], [4.2, 278.0], [4.3, 279.0], [4.4, 281.0], [4.5, 284.0], [4.6, 284.0], [4.7, 287.0], [4.8, 288.0], [4.9, 292.0], [5.0, 292.0], [5.1, 296.0], [5.2, 297.0], [5.3, 297.0], [5.4, 299.0], [5.5, 300.0], [5.6, 304.0], [5.7, 304.0], [5.8, 305.0], [5.9, 305.0], [6.0, 306.0], [6.1, 306.0], [6.2, 307.0], [6.3, 309.0], [6.4, 309.0], [6.5, 309.0], [6.6, 310.0], [6.7, 311.0], [6.8, 311.0], [6.9, 312.0], [7.0, 319.0], [7.1, 319.0], [7.2, 319.0], [7.3, 321.0], [7.4, 325.0], [7.5, 327.0], [7.6, 327.0], [7.7, 329.0], [7.8, 330.0], [7.9, 334.0], [8.0, 334.0], [8.1, 335.0], [8.2, 338.0], [8.3, 340.0], [8.4, 340.0], [8.5, 341.0], [8.6, 342.0], [8.7, 342.0], [8.8, 345.0], [8.9, 347.0], [9.0, 350.0], [9.1, 350.0], [9.2, 352.0], [9.3, 354.0], [9.4, 359.0], [9.5, 359.0], [9.6, 362.0], [9.7, 364.0], [9.8, 364.0], [9.9, 364.0], [10.0, 365.0], [10.1, 368.0], [10.2, 368.0], [10.3, 368.0], [10.4, 371.0], [10.5, 373.0], [10.6, 373.0], [10.7, 374.0], [10.8, 381.0], [10.9, 382.0], [11.0, 382.0], [11.1, 385.0], [11.2, 386.0], [11.3, 386.0], [11.4, 386.0], [11.5, 388.0], [11.6, 393.0], [11.7, 393.0], [11.8, 396.0], [11.9, 396.0], [12.0, 398.0], [12.1, 398.0], [12.2, 399.0], [12.3, 400.0], [12.4, 405.0], [12.5, 405.0], [12.6, 405.0], [12.7, 407.0], [12.8, 408.0], [12.9, 408.0], [13.0, 408.0], [13.1, 408.0], [13.2, 411.0], [13.3, 411.0], [13.4, 412.0], [13.5, 415.0], [13.6, 415.0], [13.7, 420.0], [13.8, 421.0], [13.9, 421.0], [14.0, 421.0], [14.1, 423.0], [14.2, 425.0], [14.3, 426.0], [14.4, 426.0], [14.5, 429.0], [14.6, 429.0], [14.7, 435.0], [14.8, 435.0], [14.9, 437.0], [15.0, 437.0], [15.1, 437.0], [15.2, 440.0], [15.3, 440.0], [15.4, 442.0], [15.5, 442.0], [15.6, 444.0], [15.7, 445.0], [15.8, 447.0], [15.9, 447.0], [16.0, 447.0], [16.1, 450.0], [16.2, 450.0], [16.3, 450.0], [16.4, 452.0], [16.5, 454.0], [16.6, 456.0], [16.7, 456.0], [16.8, 460.0], [16.9, 461.0], [17.0, 461.0], [17.1, 466.0], [17.2, 466.0], [17.3, 468.0], [17.4, 468.0], [17.5, 469.0], [17.6, 469.0], [17.7, 472.0], [17.8, 472.0], [17.9, 477.0], [18.0, 481.0], [18.1, 485.0], [18.2, 485.0], [18.3, 485.0], [18.4, 492.0], [18.5, 492.0], [18.6, 497.0], [18.7, 499.0], [18.8, 502.0], [18.9, 502.0], [19.0, 502.0], [19.1, 503.0], [19.2, 506.0], [19.3, 506.0], [19.4, 506.0], [19.5, 507.0], [19.6, 507.0], [19.7, 507.0], [19.8, 509.0], [19.9, 509.0], [20.0, 510.0], [20.1, 510.0], [20.2, 510.0], [20.3, 511.0], [20.4, 511.0], [20.5, 511.0], [20.6, 512.0], [20.7, 512.0], [20.8, 512.0], [20.9, 513.0], [21.0, 516.0], [21.1, 516.0], [21.2, 516.0], [21.3, 518.0], [21.4, 519.0], [21.5, 520.0], [21.6, 520.0], [21.7, 521.0], [21.8, 521.0], [21.9, 521.0], [22.0, 522.0], [22.1, 525.0], [22.2, 526.0], [22.3, 526.0], [22.4, 528.0], [22.5, 534.0], [22.6, 534.0], [22.7, 534.0], [22.8, 535.0], [22.9, 538.0], [23.0, 542.0], [23.1, 542.0], [23.2, 542.0], [23.3, 544.0], [23.4, 544.0], [23.5, 545.0], [23.6, 545.0], [23.7, 546.0], [23.8, 546.0], [23.9, 546.0], [24.0, 547.0], [24.1, 547.0], [24.2, 547.0], [24.3, 547.0], [24.4, 549.0], [24.5, 550.0], [24.6, 550.0], [24.7, 550.0], [24.8, 552.0], [24.9, 552.0], [25.0, 552.0], [25.1, 552.0], [25.2, 553.0], [25.3, 553.0], [25.4, 554.0], [25.5, 556.0], [25.6, 556.0], [25.7, 556.0], [25.8, 557.0], [25.9, 558.0], [26.0, 558.0], [26.1, 558.0], [26.2, 560.0], [26.3, 560.0], [26.4, 560.0], [26.5, 560.0], [26.6, 561.0], [26.7, 562.0], [26.8, 562.0], [26.9, 562.0], [27.0, 563.0], [27.1, 563.0], [27.2, 563.0], [27.3, 565.0], [27.4, 567.0], [27.5, 570.0], [27.6, 570.0], [27.7, 573.0], [27.8, 573.0], [27.9, 573.0], [28.0, 573.0], [28.1, 573.0], [28.2, 576.0], [28.3, 579.0], [28.4, 579.0], [28.5, 580.0], [28.6, 580.0], [28.7, 580.0], [28.8, 581.0], [28.9, 582.0], [29.0, 584.0], [29.1, 584.0], [29.2, 585.0], [29.3, 586.0], [29.4, 587.0], [29.5, 587.0], [29.6, 591.0], [29.7, 591.0], [29.8, 591.0], [29.9, 591.0], [30.0, 592.0], [30.1, 593.0], [30.2, 593.0], [30.3, 594.0], [30.4, 595.0], [30.5, 596.0], [30.6, 596.0], [30.7, 596.0], [30.8, 597.0], [30.9, 598.0], [31.0, 598.0], [31.1, 598.0], [31.2, 600.0], [31.3, 600.0], [31.4, 600.0], [31.5, 602.0], [31.6, 603.0], [31.7, 603.0], [31.8, 604.0], [31.9, 607.0], [32.0, 607.0], [32.1, 607.0], [32.2, 607.0], [32.3, 608.0], [32.4, 612.0], [32.5, 612.0], [32.6, 614.0], [32.7, 615.0], [32.8, 617.0], [32.9, 617.0], [33.0, 618.0], [33.1, 618.0], [33.2, 619.0], [33.3, 619.0], [33.4, 619.0], [33.5, 621.0], [33.6, 621.0], [33.7, 622.0], [33.8, 623.0], [33.9, 624.0], [34.0, 624.0], [34.1, 624.0], [34.2, 626.0], [34.3, 627.0], [34.4, 627.0], [34.5, 630.0], [34.6, 630.0], [34.7, 631.0], [34.8, 631.0], [34.9, 632.0], [35.0, 635.0], [35.1, 635.0], [35.2, 635.0], [35.3, 637.0], [35.4, 639.0], [35.5, 639.0], [35.6, 640.0], [35.7, 640.0], [35.8, 641.0], [35.9, 641.0], [36.0, 643.0], [36.1, 643.0], [36.2, 644.0], [36.3, 644.0], [36.4, 645.0], [36.5, 646.0], [36.6, 646.0], [36.7, 646.0], [36.8, 646.0], [36.9, 648.0], [37.0, 648.0], [37.1, 648.0], [37.2, 649.0], [37.3, 653.0], [37.4, 653.0], [37.5, 654.0], [37.6, 655.0], [37.7, 655.0], [37.8, 655.0], [37.9, 657.0], [38.0, 657.0], [38.1, 657.0], [38.2, 657.0], [38.3, 658.0], [38.4, 658.0], [38.5, 658.0], [38.6, 660.0], [38.7, 661.0], [38.8, 663.0], [38.9, 663.0], [39.0, 665.0], [39.1, 666.0], [39.2, 667.0], [39.3, 667.0], [39.4, 667.0], [39.5, 667.0], [39.6, 668.0], [39.7, 668.0], [39.8, 670.0], [39.9, 670.0], [40.0, 672.0], [40.1, 672.0], [40.2, 673.0], [40.3, 676.0], [40.4, 676.0], [40.5, 676.0], [40.6, 678.0], [40.7, 679.0], [40.8, 679.0], [40.9, 680.0], [41.0, 682.0], [41.1, 684.0], [41.2, 684.0], [41.3, 684.0], [41.4, 685.0], [41.5, 687.0], [41.6, 687.0], [41.7, 690.0], [41.8, 691.0], [41.9, 691.0], [42.0, 693.0], [42.1, 695.0], [42.2, 695.0], [42.3, 695.0], [42.4, 697.0], [42.5, 697.0], [42.6, 700.0], [42.7, 700.0], [42.8, 703.0], [42.9, 705.0], [43.0, 705.0], [43.1, 705.0], [43.2, 705.0], [43.3, 709.0], [43.4, 709.0], [43.5, 709.0], [43.6, 710.0], [43.7, 714.0], [43.8, 714.0], [43.9, 715.0], [44.0, 717.0], [44.1, 718.0], [44.2, 718.0], [44.3, 718.0], [44.4, 719.0], [44.5, 720.0], [44.6, 720.0], [44.7, 720.0], [44.8, 723.0], [44.9, 725.0], [45.0, 725.0], [45.1, 725.0], [45.2, 727.0], [45.3, 727.0], [45.4, 728.0], [45.5, 730.0], [45.6, 730.0], [45.7, 730.0], [45.8, 731.0], [45.9, 733.0], [46.0, 735.0], [46.1, 735.0], [46.2, 735.0], [46.3, 738.0], [46.4, 738.0], [46.5, 738.0], [46.6, 739.0], [46.7, 740.0], [46.8, 740.0], [46.9, 741.0], [47.0, 742.0], [47.1, 745.0], [47.2, 745.0], [47.3, 745.0], [47.4, 748.0], [47.5, 754.0], [47.6, 754.0], [47.7, 754.0], [47.8, 756.0], [47.9, 756.0], [48.0, 756.0], [48.1, 761.0], [48.2, 762.0], [48.3, 764.0], [48.4, 764.0], [48.5, 765.0], [48.6, 768.0], [48.7, 768.0], [48.8, 770.0], [48.9, 774.0], [49.0, 775.0], [49.1, 775.0], [49.2, 776.0], [49.3, 776.0], [49.4, 776.0], [49.5, 776.0], [49.6, 777.0], [49.7, 778.0], [49.8, 779.0], [49.9, 779.0], [50.0, 779.0], [50.1, 783.0], [50.2, 783.0], [50.3, 783.0], [50.4, 784.0], [50.5, 790.0], [50.6, 790.0], [50.7, 791.0], [50.8, 792.0], [50.9, 794.0], [51.0, 794.0], [51.1, 798.0], [51.2, 803.0], [51.3, 804.0], [51.4, 804.0], [51.5, 806.0], [51.6, 807.0], [51.7, 807.0], [51.8, 808.0], [51.9, 808.0], [52.0, 811.0], [52.1, 811.0], [52.2, 814.0], [52.3, 815.0], [52.4, 823.0], [52.5, 823.0], [52.6, 825.0], [52.7, 826.0], [52.8, 827.0], [52.9, 827.0], [53.0, 828.0], [53.1, 830.0], [53.2, 838.0], [53.3, 838.0], [53.4, 840.0], [53.5, 841.0], [53.6, 841.0], [53.7, 841.0], [53.8, 842.0], [53.9, 842.0], [54.0, 842.0], [54.1, 843.0], [54.2, 844.0], [54.3, 847.0], [54.4, 847.0], [54.5, 849.0], [54.6, 849.0], [54.7, 852.0], [54.8, 852.0], [54.9, 853.0], [55.0, 853.0], [55.1, 853.0], [55.2, 854.0], [55.3, 855.0], [55.4, 855.0], [55.5, 855.0], [55.6, 856.0], [55.7, 856.0], [55.8, 857.0], [55.9, 857.0], [56.0, 858.0], [56.1, 858.0], [56.2, 861.0], [56.3, 861.0], [56.4, 861.0], [56.5, 862.0], [56.6, 863.0], [56.7, 863.0], [56.8, 866.0], [56.9, 867.0], [57.0, 867.0], [57.1, 868.0], [57.2, 868.0], [57.3, 869.0], [57.4, 869.0], [57.5, 869.0], [57.6, 870.0], [57.7, 870.0], [57.8, 870.0], [57.9, 871.0], [58.0, 871.0], [58.1, 873.0], [58.2, 873.0], [58.3, 874.0], [58.4, 876.0], [58.5, 876.0], [58.6, 877.0], [58.7, 879.0], [58.8, 884.0], [58.9, 884.0], [59.0, 884.0], [59.1, 886.0], [59.2, 887.0], [59.3, 887.0], [59.4, 887.0], [59.5, 888.0], [59.6, 889.0], [59.7, 889.0], [59.8, 894.0], [59.9, 895.0], [60.0, 896.0], [60.1, 896.0], [60.2, 897.0], [60.3, 899.0], [60.4, 899.0], [60.5, 902.0], [60.6, 903.0], [60.7, 904.0], [60.8, 904.0], [60.9, 906.0], [61.0, 908.0], [61.1, 908.0], [61.2, 908.0], [61.3, 909.0], [61.4, 910.0], [61.5, 915.0], [61.6, 915.0], [61.7, 916.0], [61.8, 916.0], [61.9, 916.0], [62.0, 917.0], [62.1, 917.0], [62.2, 917.0], [62.3, 917.0], [62.4, 919.0], [62.5, 920.0], [62.6, 921.0], [62.7, 921.0], [62.8, 924.0], [62.9, 924.0], [63.0, 926.0], [63.1, 926.0], [63.2, 929.0], [63.3, 930.0], [63.4, 930.0], [63.5, 931.0], [63.6, 931.0], [63.7, 933.0], [63.8, 933.0], [63.9, 933.0], [64.0, 935.0], [64.1, 936.0], [64.2, 936.0], [64.3, 940.0], [64.4, 941.0], [64.5, 942.0], [64.6, 942.0], [64.7, 942.0], [64.8, 943.0], [64.9, 944.0], [65.0, 944.0], [65.1, 948.0], [65.2, 949.0], [65.3, 949.0], [65.4, 950.0], [65.5, 952.0], [65.6, 953.0], [65.7, 953.0], [65.8, 953.0], [65.9, 953.0], [66.0, 956.0], [66.1, 956.0], [66.2, 957.0], [66.3, 958.0], [66.4, 958.0], [66.5, 958.0], [66.6, 959.0], [66.7, 961.0], [66.8, 961.0], [66.9, 962.0], [67.0, 964.0], [67.1, 966.0], [67.2, 966.0], [67.3, 972.0], [67.4, 973.0], [67.5, 973.0], [67.6, 973.0], [67.7, 973.0], [67.8, 975.0], [67.9, 977.0], [68.0, 977.0], [68.1, 978.0], [68.2, 978.0], [68.3, 979.0], [68.4, 979.0], [68.5, 981.0], [68.6, 982.0], [68.7, 982.0], [68.8, 984.0], [68.9, 987.0], [69.0, 988.0], [69.1, 988.0], [69.2, 991.0], [69.3, 992.0], [69.4, 994.0], [69.5, 994.0], [69.6, 995.0], [69.7, 995.0], [69.8, 996.0], [69.9, 996.0], [70.0, 997.0], [70.1, 997.0], [70.2, 997.0], [70.3, 998.0], [70.4, 1000.0], [70.5, 1001.0], [70.6, 1001.0], [70.7, 1002.0], [70.8, 1003.0], [70.9, 1004.0], [71.0, 1004.0], [71.1, 1007.0], [71.2, 1010.0], [71.3, 1010.0], [71.4, 1010.0], [71.5, 1014.0], [71.6, 1014.0], [71.7, 1014.0], [71.8, 1015.0], [71.9, 1019.0], [72.0, 1022.0], [72.1, 1022.0], [72.2, 1023.0], [72.3, 1024.0], [72.4, 1026.0], [72.5, 1026.0], [72.6, 1027.0], [72.7, 1031.0], [72.8, 1032.0], [72.9, 1032.0], [73.0, 1032.0], [73.1, 1032.0], [73.2, 1033.0], [73.3, 1033.0], [73.4, 1033.0], [73.5, 1036.0], [73.6, 1036.0], [73.7, 1037.0], [73.8, 1041.0], [73.9, 1042.0], [74.0, 1042.0], [74.1, 1045.0], [74.2, 1045.0], [74.3, 1049.0], [74.4, 1049.0], [74.5, 1050.0], [74.6, 1054.0], [74.7, 1055.0], [74.8, 1055.0], [74.9, 1058.0], [75.0, 1061.0], [75.1, 1061.0], [75.2, 1061.0], [75.3, 1062.0], [75.4, 1063.0], [75.5, 1063.0], [75.6, 1064.0], [75.7, 1067.0], [75.8, 1070.0], [75.9, 1070.0], [76.0, 1070.0], [76.1, 1071.0], [76.2, 1073.0], [76.3, 1073.0], [76.4, 1074.0], [76.5, 1074.0], [76.6, 1075.0], [76.7, 1075.0], [76.8, 1080.0], [76.9, 1089.0], [77.0, 1089.0], [77.1, 1091.0], [77.2, 1092.0], [77.3, 1096.0], [77.4, 1096.0], [77.5, 1098.0], [77.6, 1098.0], [77.7, 1099.0], [77.8, 1099.0], [77.9, 1100.0], [78.0, 1100.0], [78.1, 1101.0], [78.2, 1101.0], [78.3, 1102.0], [78.4, 1107.0], [78.5, 1107.0], [78.6, 1107.0], [78.7, 1108.0], [78.8, 1109.0], [78.9, 1109.0], [79.0, 1110.0], [79.1, 1112.0], [79.2, 1112.0], [79.3, 1112.0], [79.4, 1114.0], [79.5, 1122.0], [79.6, 1123.0], [79.7, 1123.0], [79.8, 1126.0], [79.9, 1127.0], [80.0, 1128.0], [80.1, 1128.0], [80.2, 1128.0], [80.3, 1133.0], [80.4, 1133.0], [80.5, 1133.0], [80.6, 1134.0], [80.7, 1136.0], [80.8, 1136.0], [80.9, 1141.0], [81.0, 1143.0], [81.1, 1146.0], [81.2, 1146.0], [81.3, 1147.0], [81.4, 1148.0], [81.5, 1149.0], [81.6, 1149.0], [81.7, 1149.0], [81.8, 1149.0], [81.9, 1149.0], [82.0, 1153.0], [82.1, 1156.0], [82.2, 1157.0], [82.3, 1157.0], [82.4, 1157.0], [82.5, 1158.0], [82.6, 1159.0], [82.7, 1159.0], [82.8, 1160.0], [82.9, 1161.0], [83.0, 1162.0], [83.1, 1162.0], [83.2, 1163.0], [83.3, 1164.0], [83.4, 1164.0], [83.5, 1170.0], [83.6, 1176.0], [83.7, 1180.0], [83.8, 1180.0], [83.9, 1180.0], [84.0, 1183.0], [84.1, 1190.0], [84.2, 1190.0], [84.3, 1198.0], [84.4, 1199.0], [84.5, 1202.0], [84.6, 1202.0], [84.7, 1206.0], [84.8, 1207.0], [84.9, 1210.0], [85.0, 1210.0], [85.1, 1212.0], [85.2, 1212.0], [85.3, 1212.0], [85.4, 1213.0], [85.5, 1214.0], [85.6, 1215.0], [85.7, 1215.0], [85.8, 1215.0], [85.9, 1217.0], [86.0, 1219.0], [86.1, 1219.0], [86.2, 1222.0], [86.3, 1223.0], [86.4, 1223.0], [86.5, 1223.0], [86.6, 1227.0], [86.7, 1231.0], [86.8, 1231.0], [86.9, 1234.0], [87.0, 1239.0], [87.1, 1240.0], [87.2, 1240.0], [87.3, 1240.0], [87.4, 1242.0], [87.5, 1245.0], [87.6, 1245.0], [87.7, 1252.0], [87.8, 1252.0], [87.9, 1253.0], [88.0, 1253.0], [88.1, 1254.0], [88.2, 1259.0], [88.3, 1261.0], [88.4, 1261.0], [88.5, 1263.0], [88.6, 1264.0], [88.7, 1264.0], [88.8, 1270.0], [88.9, 1281.0], [89.0, 1283.0], [89.1, 1283.0], [89.2, 1285.0], [89.3, 1292.0], [89.4, 1298.0], [89.5, 1298.0], [89.6, 1302.0], [89.7, 1302.0], [89.8, 1312.0], [89.9, 1312.0], [90.0, 1315.0], [90.1, 1318.0], [90.2, 1318.0], [90.3, 1323.0], [90.4, 1324.0], [90.5, 1325.0], [90.6, 1325.0], [90.7, 1330.0], [90.8, 1331.0], [90.9, 1338.0], [91.0, 1338.0], [91.1, 1339.0], [91.2, 1351.0], [91.3, 1355.0], [91.4, 1355.0], [91.5, 1355.0], [91.6, 1360.0], [91.7, 1360.0], [91.8, 1366.0], [91.9, 1367.0], [92.0, 1370.0], [92.1, 1370.0], [92.2, 1372.0], [92.3, 1381.0], [92.4, 1384.0], [92.5, 1384.0], [92.6, 1388.0], [92.7, 1401.0], [92.8, 1407.0], [92.9, 1407.0], [93.0, 1409.0], [93.1, 1420.0], [93.2, 1431.0], [93.3, 1431.0], [93.4, 1433.0], [93.5, 1441.0], [93.6, 1441.0], [93.7, 1442.0], [93.8, 1442.0], [93.9, 1446.0], [94.0, 1446.0], [94.1, 1475.0], [94.2, 1475.0], [94.3, 1478.0], [94.4, 1478.0], [94.5, 1480.0], [94.6, 1486.0], [94.7, 1488.0], [94.8, 1488.0], [94.9, 1498.0], [95.0, 1513.0], [95.1, 1513.0], [95.2, 1532.0], [95.3, 1549.0], [95.4, 1588.0], [95.5, 1588.0], [95.6, 1609.0], [95.7, 1611.0], [95.8, 1618.0], [95.9, 1618.0], [96.0, 1689.0], [96.1, 1701.0], [96.2, 1732.0], [96.3, 1732.0], [96.4, 1774.0], [96.5, 1777.0], [96.6, 1781.0], [96.7, 1781.0], [96.8, 1783.0], [96.9, 1843.0], [97.0, 1843.0], [97.1, 1865.0], [97.2, 1866.0], [97.3, 1958.0], [97.4, 1958.0], [97.5, 1964.0], [97.6, 2032.0], [97.7, 2263.0], [97.8, 2263.0], [97.9, 2263.0], [98.0, 2287.0], [98.1, 2325.0], [98.2, 2325.0], [98.3, 2336.0], [98.4, 2449.0], [98.5, 2449.0], [98.6, 2665.0], [98.7, 2710.0], [98.8, 2759.0], [98.9, 2759.0], [99.0, 2775.0], [99.1, 2801.0], [99.2, 2912.0], [99.3, 2912.0], [99.4, 3149.0], [99.5, 3174.0], [99.6, 3180.0], [99.7, 3180.0], [99.8, 3307.0], [99.9, 3337.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 91.0, "series": [{"data": [[600.0, 84.0], [700.0, 63.0], [800.0, 68.0], [900.0, 73.0], [1000.0, 55.0], [1100.0, 49.0], [1200.0, 37.0], [1300.0, 23.0], [1400.0, 17.0], [1500.0, 4.0], [100.0, 4.0], [1600.0, 4.0], [1700.0, 6.0], [1800.0, 3.0], [1900.0, 2.0], [2000.0, 1.0], [2200.0, 3.0], [2300.0, 2.0], [2400.0, 1.0], [2600.0, 1.0], [2700.0, 3.0], [2800.0, 1.0], [2900.0, 1.0], [3100.0, 3.0], [200.0, 36.0], [3300.0, 2.0], [300.0, 50.0], [400.0, 48.0], [500.0, 91.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 37.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 560.0, "series": [{"data": [[0.0, 138.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 560.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 37.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.892857142857144, "minX": 1.6026285E12, "maxY": 10.0, "series": [{"data": [[1.6026285E12, 10.0], [1.60262856E12, 9.892857142857144]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262856E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 259.0, "minX": 1.0, "maxY": 1014.0, "series": [{"data": [[8.0, 466.0], [4.0, 580.0], [2.0, 510.0], [1.0, 1014.0], [9.0, 596.0], [10.0, 852.285123966942], [5.0, 714.0], [6.0, 558.0], [3.0, 534.0], [7.0, 259.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 848.9659863945576]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2376.866666666667, "minX": 1.6026285E12, "maxY": 1035765.1833333333, "series": [{"data": [[1.6026285E12, 800038.45], [1.60262856E12, 1035765.1833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6026285E12, 2376.866666666667], [1.60262856E12, 3146.1666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262856E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 840.3214285714284, "minX": 1.6026285E12, "maxY": 860.4920634920632, "series": [{"data": [[1.6026285E12, 860.4920634920632], [1.60262856E12, 840.3214285714284]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262856E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 839.107142857143, "minX": 1.6026285E12, "maxY": 859.4539682539684, "series": [{"data": [[1.6026285E12, 859.4539682539684], [1.60262856E12, 839.107142857143]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262856E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0380952380952381, "minX": 1.6026285E12, "maxY": 0.24761904761904802, "series": [{"data": [[1.6026285E12, 0.24761904761904802], [1.60262856E12, 0.0380952380952381]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262856E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 173.0, "minX": 1.6026285E12, "maxY": 3337.0, "series": [{"data": [[1.6026285E12, 3307.0], [1.60262856E12, 3337.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6026285E12, 217.59599932193757], [1.60262856E12, 200.1469976913929]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6026285E12, 219.51360012054442], [1.60262856E12, 207.01480048179627]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6026285E12, 219.00799984931945], [1.60262856E12, 204.98849884569645]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6026285E12, 189.0], [1.60262856E12, 173.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6026285E12, 756.0], [1.60262856E12, 803.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262856E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 550.0, "minX": 1.0, "maxY": 1869.0, "series": [{"data": [[8.0, 1116.0], [9.0, 975.0], [10.0, 926.0], [11.0, 922.0], [12.0, 901.5], [13.0, 683.0], [14.0, 607.0], [15.0, 639.0], [1.0, 1014.0], [17.0, 550.0], [19.0, 615.5], [5.0, 1019.0], [7.0, 1869.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 550.0, "minX": 1.0, "maxY": 1866.0, "series": [{"data": [[8.0, 1116.0], [9.0, 974.0], [10.0, 924.0], [11.0, 920.0], [12.0, 901.5], [13.0, 681.5], [14.0, 606.5], [15.0, 638.5], [1.0, 1014.0], [17.0, 550.0], [19.0, 615.0], [5.0, 1012.0], [7.0, 1866.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.416666666666667, "minX": 1.6026285E12, "maxY": 6.833333333333333, "series": [{"data": [[1.6026285E12, 5.416666666666667], [1.60262856E12, 6.833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262856E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.25, "minX": 1.6026285E12, "maxY": 7.0, "series": [{"data": [[1.6026285E12, 5.25], [1.60262856E12, 7.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262856E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.25, "minX": 1.6026285E12, "maxY": 7.0, "series": [{"data": [[1.6026285E12, 5.25], [1.60262856E12, 7.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262856E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.25, "minX": 1.6026285E12, "maxY": 7.0, "series": [{"data": [[1.6026285E12, 5.25], [1.60262856E12, 7.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262856E12, "title": "Total Transactions Per Second"}},
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

