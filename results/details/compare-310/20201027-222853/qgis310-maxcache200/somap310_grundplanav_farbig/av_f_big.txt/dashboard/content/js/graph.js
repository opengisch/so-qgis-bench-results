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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 3496.0, "series": [{"data": [[0.0, 175.0], [0.1, 175.0], [0.2, 184.0], [0.3, 188.0], [0.4, 188.0], [0.5, 193.0], [0.6, 197.0], [0.7, 201.0], [0.8, 201.0], [0.9, 203.0], [1.0, 206.0], [1.1, 211.0], [1.2, 211.0], [1.3, 212.0], [1.4, 213.0], [1.5, 217.0], [1.6, 217.0], [1.7, 218.0], [1.8, 218.0], [1.9, 218.0], [2.0, 218.0], [2.1, 222.0], [2.2, 222.0], [2.3, 222.0], [2.4, 223.0], [2.5, 226.0], [2.6, 228.0], [2.7, 228.0], [2.8, 229.0], [2.9, 233.0], [3.0, 235.0], [3.1, 235.0], [3.2, 238.0], [3.3, 239.0], [3.4, 239.0], [3.5, 246.0], [3.6, 249.0], [3.7, 252.0], [3.8, 252.0], [3.9, 254.0], [4.0, 254.0], [4.1, 255.0], [4.2, 255.0], [4.3, 259.0], [4.4, 264.0], [4.5, 264.0], [4.6, 264.0], [4.7, 267.0], [4.8, 269.0], [4.9, 269.0], [5.0, 269.0], [5.1, 271.0], [5.2, 271.0], [5.3, 271.0], [5.4, 272.0], [5.5, 272.0], [5.6, 275.0], [5.7, 275.0], [5.8, 275.0], [5.9, 277.0], [6.0, 278.0], [6.1, 278.0], [6.2, 278.0], [6.3, 278.0], [6.4, 282.0], [6.5, 282.0], [6.6, 285.0], [6.7, 286.0], [6.8, 286.0], [6.9, 288.0], [7.0, 289.0], [7.1, 293.0], [7.2, 293.0], [7.3, 295.0], [7.4, 297.0], [7.5, 298.0], [7.6, 298.0], [7.7, 300.0], [7.8, 301.0], [7.9, 302.0], [8.0, 302.0], [8.1, 303.0], [8.2, 303.0], [8.3, 307.0], [8.4, 307.0], [8.5, 308.0], [8.6, 309.0], [8.7, 309.0], [8.8, 311.0], [8.9, 311.0], [9.0, 313.0], [9.1, 313.0], [9.2, 313.0], [9.3, 314.0], [9.4, 314.0], [9.5, 314.0], [9.6, 314.0], [9.7, 317.0], [9.8, 317.0], [9.9, 317.0], [10.0, 318.0], [10.1, 319.0], [10.2, 319.0], [10.3, 321.0], [10.4, 321.0], [10.5, 323.0], [10.6, 323.0], [10.7, 324.0], [10.8, 325.0], [10.9, 328.0], [11.0, 328.0], [11.1, 328.0], [11.2, 328.0], [11.3, 330.0], [11.4, 330.0], [11.5, 331.0], [11.6, 331.0], [11.7, 331.0], [11.8, 331.0], [11.9, 331.0], [12.0, 332.0], [12.1, 332.0], [12.2, 333.0], [12.3, 336.0], [12.4, 337.0], [12.5, 337.0], [12.6, 338.0], [12.7, 339.0], [12.8, 339.0], [12.9, 339.0], [13.0, 341.0], [13.1, 341.0], [13.2, 342.0], [13.3, 342.0], [13.4, 344.0], [13.5, 344.0], [13.6, 344.0], [13.7, 345.0], [13.8, 345.0], [13.9, 348.0], [14.0, 348.0], [14.1, 349.0], [14.2, 349.0], [14.3, 350.0], [14.4, 350.0], [14.5, 351.0], [14.6, 351.0], [14.7, 353.0], [14.8, 353.0], [14.9, 354.0], [15.0, 355.0], [15.1, 355.0], [15.2, 358.0], [15.3, 365.0], [15.4, 368.0], [15.5, 368.0], [15.6, 369.0], [15.7, 369.0], [15.8, 370.0], [15.9, 370.0], [16.0, 373.0], [16.1, 373.0], [16.2, 374.0], [16.3, 374.0], [16.4, 376.0], [16.5, 377.0], [16.6, 377.0], [16.7, 377.0], [16.8, 380.0], [16.9, 381.0], [17.0, 381.0], [17.1, 382.0], [17.2, 383.0], [17.3, 383.0], [17.4, 383.0], [17.5, 384.0], [17.6, 386.0], [17.7, 395.0], [17.8, 395.0], [17.9, 395.0], [18.0, 397.0], [18.1, 397.0], [18.2, 397.0], [18.3, 399.0], [18.4, 401.0], [18.5, 401.0], [18.6, 404.0], [18.7, 404.0], [18.8, 408.0], [18.9, 408.0], [19.0, 412.0], [19.1, 413.0], [19.2, 414.0], [19.3, 414.0], [19.4, 419.0], [19.5, 419.0], [19.6, 421.0], [19.7, 421.0], [19.8, 421.0], [19.9, 423.0], [20.0, 425.0], [20.1, 425.0], [20.2, 425.0], [20.3, 425.0], [20.4, 425.0], [20.5, 427.0], [20.6, 428.0], [20.7, 429.0], [20.8, 429.0], [20.9, 432.0], [21.0, 437.0], [21.1, 438.0], [21.2, 438.0], [21.3, 444.0], [21.4, 444.0], [21.5, 447.0], [21.6, 447.0], [21.7, 451.0], [21.8, 451.0], [21.9, 451.0], [22.0, 463.0], [22.1, 465.0], [22.2, 465.0], [22.3, 465.0], [22.4, 466.0], [22.5, 468.0], [22.6, 469.0], [22.7, 469.0], [22.8, 472.0], [22.9, 473.0], [23.0, 476.0], [23.1, 476.0], [23.2, 485.0], [23.3, 486.0], [23.4, 486.0], [23.5, 486.0], [23.6, 487.0], [23.7, 488.0], [23.8, 488.0], [23.9, 490.0], [24.0, 490.0], [24.1, 494.0], [24.2, 494.0], [24.3, 496.0], [24.4, 497.0], [24.5, 497.0], [24.6, 497.0], [24.7, 499.0], [24.8, 501.0], [24.9, 502.0], [25.0, 502.0], [25.1, 502.0], [25.2, 503.0], [25.3, 503.0], [25.4, 506.0], [25.5, 507.0], [25.6, 507.0], [25.7, 507.0], [25.8, 512.0], [25.9, 513.0], [26.0, 514.0], [26.1, 514.0], [26.2, 516.0], [26.3, 517.0], [26.4, 517.0], [26.5, 517.0], [26.6, 518.0], [26.7, 519.0], [26.8, 519.0], [26.9, 519.0], [27.0, 519.0], [27.1, 521.0], [27.2, 521.0], [27.3, 523.0], [27.4, 524.0], [27.5, 526.0], [27.6, 526.0], [27.7, 528.0], [27.8, 529.0], [27.9, 532.0], [28.0, 532.0], [28.1, 534.0], [28.2, 535.0], [28.3, 536.0], [28.4, 536.0], [28.5, 537.0], [28.6, 537.0], [28.7, 537.0], [28.8, 540.0], [28.9, 542.0], [29.0, 543.0], [29.1, 543.0], [29.2, 543.0], [29.3, 543.0], [29.4, 544.0], [29.5, 544.0], [29.6, 544.0], [29.7, 547.0], [29.8, 549.0], [29.9, 549.0], [30.0, 550.0], [30.1, 551.0], [30.2, 551.0], [30.3, 552.0], [30.4, 552.0], [30.5, 555.0], [30.6, 555.0], [30.7, 556.0], [30.8, 556.0], [30.9, 560.0], [31.0, 560.0], [31.1, 560.0], [31.2, 562.0], [31.3, 563.0], [31.4, 563.0], [31.5, 566.0], [31.6, 567.0], [31.7, 567.0], [31.8, 573.0], [31.9, 573.0], [32.0, 574.0], [32.1, 574.0], [32.2, 575.0], [32.3, 575.0], [32.4, 575.0], [32.5, 575.0], [32.6, 577.0], [32.7, 577.0], [32.8, 579.0], [32.9, 579.0], [33.0, 580.0], [33.1, 581.0], [33.2, 581.0], [33.3, 581.0], [33.4, 582.0], [33.5, 585.0], [33.6, 585.0], [33.7, 586.0], [33.8, 586.0], [33.9, 589.0], [34.0, 589.0], [34.1, 591.0], [34.2, 592.0], [34.3, 594.0], [34.4, 594.0], [34.5, 598.0], [34.6, 599.0], [34.7, 599.0], [34.8, 599.0], [34.9, 603.0], [35.0, 603.0], [35.1, 603.0], [35.2, 604.0], [35.3, 605.0], [35.4, 605.0], [35.5, 605.0], [35.6, 605.0], [35.7, 605.0], [35.8, 606.0], [35.9, 606.0], [36.0, 607.0], [36.1, 608.0], [36.2, 608.0], [36.3, 608.0], [36.4, 612.0], [36.5, 613.0], [36.6, 613.0], [36.7, 613.0], [36.8, 613.0], [36.9, 614.0], [37.0, 614.0], [37.1, 615.0], [37.2, 616.0], [37.3, 618.0], [37.4, 618.0], [37.5, 618.0], [37.6, 621.0], [37.7, 621.0], [37.8, 621.0], [37.9, 627.0], [38.0, 628.0], [38.1, 629.0], [38.2, 629.0], [38.3, 630.0], [38.4, 631.0], [38.5, 631.0], [38.6, 634.0], [38.7, 637.0], [38.8, 638.0], [38.9, 638.0], [39.0, 639.0], [39.1, 640.0], [39.2, 641.0], [39.3, 641.0], [39.4, 642.0], [39.5, 644.0], [39.6, 645.0], [39.7, 645.0], [39.8, 646.0], [39.9, 647.0], [40.0, 647.0], [40.1, 647.0], [40.2, 649.0], [40.3, 651.0], [40.4, 651.0], [40.5, 651.0], [40.6, 651.0], [40.7, 651.0], [40.8, 651.0], [40.9, 653.0], [41.0, 653.0], [41.1, 656.0], [41.2, 656.0], [41.3, 658.0], [41.4, 658.0], [41.5, 658.0], [41.6, 658.0], [41.7, 658.0], [41.8, 660.0], [41.9, 660.0], [42.0, 661.0], [42.1, 661.0], [42.2, 664.0], [42.3, 664.0], [42.4, 671.0], [42.5, 672.0], [42.6, 672.0], [42.7, 672.0], [42.8, 673.0], [42.9, 673.0], [43.0, 676.0], [43.1, 676.0], [43.2, 678.0], [43.3, 679.0], [43.4, 679.0], [43.5, 679.0], [43.6, 680.0], [43.7, 681.0], [43.8, 681.0], [43.9, 683.0], [44.0, 686.0], [44.1, 687.0], [44.2, 687.0], [44.3, 689.0], [44.4, 689.0], [44.5, 689.0], [44.6, 689.0], [44.7, 689.0], [44.8, 691.0], [44.9, 692.0], [45.0, 692.0], [45.1, 693.0], [45.2, 695.0], [45.3, 695.0], [45.4, 696.0], [45.5, 698.0], [45.6, 702.0], [45.7, 702.0], [45.8, 704.0], [45.9, 705.0], [46.0, 705.0], [46.1, 705.0], [46.2, 705.0], [46.3, 707.0], [46.4, 710.0], [46.5, 710.0], [46.6, 711.0], [46.7, 711.0], [46.8, 711.0], [46.9, 717.0], [47.0, 719.0], [47.1, 719.0], [47.2, 719.0], [47.3, 720.0], [47.4, 721.0], [47.5, 722.0], [47.6, 722.0], [47.7, 727.0], [47.8, 728.0], [47.9, 734.0], [48.0, 734.0], [48.1, 734.0], [48.2, 735.0], [48.3, 735.0], [48.4, 735.0], [48.5, 736.0], [48.6, 738.0], [48.7, 738.0], [48.8, 743.0], [48.9, 743.0], [49.0, 746.0], [49.1, 746.0], [49.2, 746.0], [49.3, 750.0], [49.4, 753.0], [49.5, 753.0], [49.6, 754.0], [49.7, 754.0], [49.8, 755.0], [49.9, 755.0], [50.0, 756.0], [50.1, 756.0], [50.2, 756.0], [50.3, 757.0], [50.4, 760.0], [50.5, 762.0], [50.6, 762.0], [50.7, 763.0], [50.8, 764.0], [50.9, 765.0], [51.0, 765.0], [51.1, 766.0], [51.2, 767.0], [51.3, 768.0], [51.4, 768.0], [51.5, 774.0], [51.6, 775.0], [51.7, 775.0], [51.8, 777.0], [51.9, 780.0], [52.0, 781.0], [52.1, 781.0], [52.2, 785.0], [52.3, 786.0], [52.4, 789.0], [52.5, 789.0], [52.6, 790.0], [52.7, 792.0], [52.8, 799.0], [52.9, 799.0], [53.0, 799.0], [53.1, 803.0], [53.2, 805.0], [53.3, 805.0], [53.4, 808.0], [53.5, 810.0], [53.6, 810.0], [53.7, 811.0], [53.8, 811.0], [53.9, 814.0], [54.0, 814.0], [54.1, 815.0], [54.2, 819.0], [54.3, 824.0], [54.4, 824.0], [54.5, 825.0], [54.6, 830.0], [54.7, 832.0], [54.8, 832.0], [54.9, 832.0], [55.0, 835.0], [55.1, 835.0], [55.2, 835.0], [55.3, 845.0], [55.4, 848.0], [55.5, 848.0], [55.6, 848.0], [55.7, 849.0], [55.8, 854.0], [55.9, 854.0], [56.0, 855.0], [56.1, 858.0], [56.2, 861.0], [56.3, 861.0], [56.4, 862.0], [56.5, 865.0], [56.6, 867.0], [56.7, 867.0], [56.8, 868.0], [56.9, 868.0], [57.0, 868.0], [57.1, 870.0], [57.2, 871.0], [57.3, 872.0], [57.4, 872.0], [57.5, 873.0], [57.6, 876.0], [57.7, 876.0], [57.8, 876.0], [57.9, 877.0], [58.0, 878.0], [58.1, 882.0], [58.2, 882.0], [58.3, 883.0], [58.4, 884.0], [58.5, 884.0], [58.6, 884.0], [58.7, 886.0], [58.8, 886.0], [58.9, 886.0], [59.0, 892.0], [59.1, 893.0], [59.2, 894.0], [59.3, 894.0], [59.4, 894.0], [59.5, 896.0], [59.6, 899.0], [59.7, 899.0], [59.8, 899.0], [59.9, 900.0], [60.0, 903.0], [60.1, 903.0], [60.2, 904.0], [60.3, 904.0], [60.4, 904.0], [60.5, 912.0], [60.6, 917.0], [60.7, 917.0], [60.8, 917.0], [60.9, 920.0], [61.0, 920.0], [61.1, 923.0], [61.2, 923.0], [61.3, 928.0], [61.4, 929.0], [61.5, 929.0], [61.6, 929.0], [61.7, 929.0], [61.8, 934.0], [61.9, 934.0], [62.0, 935.0], [62.1, 936.0], [62.2, 936.0], [62.3, 936.0], [62.4, 937.0], [62.5, 938.0], [62.6, 941.0], [62.7, 941.0], [62.8, 948.0], [62.9, 949.0], [63.0, 951.0], [63.1, 951.0], [63.2, 953.0], [63.3, 954.0], [63.4, 954.0], [63.5, 954.0], [63.6, 954.0], [63.7, 954.0], [63.8, 954.0], [63.9, 956.0], [64.0, 958.0], [64.1, 963.0], [64.2, 963.0], [64.3, 963.0], [64.4, 965.0], [64.5, 968.0], [64.6, 968.0], [64.7, 970.0], [64.8, 970.0], [64.9, 973.0], [65.0, 973.0], [65.1, 974.0], [65.2, 975.0], [65.3, 975.0], [65.4, 975.0], [65.5, 979.0], [65.6, 979.0], [65.7, 979.0], [65.8, 980.0], [65.9, 981.0], [66.0, 981.0], [66.1, 981.0], [66.2, 982.0], [66.3, 982.0], [66.4, 983.0], [66.5, 983.0], [66.6, 984.0], [66.7, 986.0], [66.8, 986.0], [66.9, 988.0], [67.0, 988.0], [67.1, 989.0], [67.2, 989.0], [67.3, 993.0], [67.4, 993.0], [67.5, 994.0], [67.6, 994.0], [67.7, 994.0], [67.8, 995.0], [67.9, 997.0], [68.0, 997.0], [68.1, 998.0], [68.2, 999.0], [68.3, 1004.0], [68.4, 1004.0], [68.5, 1006.0], [68.6, 1009.0], [68.7, 1009.0], [68.8, 1011.0], [68.9, 1014.0], [69.0, 1017.0], [69.1, 1017.0], [69.2, 1018.0], [69.3, 1020.0], [69.4, 1023.0], [69.5, 1023.0], [69.6, 1025.0], [69.7, 1025.0], [69.8, 1027.0], [69.9, 1027.0], [70.0, 1028.0], [70.1, 1029.0], [70.2, 1029.0], [70.3, 1031.0], [70.4, 1031.0], [70.5, 1033.0], [70.6, 1033.0], [70.7, 1035.0], [70.8, 1035.0], [70.9, 1036.0], [71.0, 1036.0], [71.1, 1037.0], [71.2, 1038.0], [71.3, 1038.0], [71.4, 1038.0], [71.5, 1039.0], [71.6, 1045.0], [71.7, 1045.0], [71.8, 1046.0], [71.9, 1046.0], [72.0, 1046.0], [72.1, 1046.0], [72.2, 1046.0], [72.3, 1047.0], [72.4, 1048.0], [72.5, 1048.0], [72.6, 1049.0], [72.7, 1050.0], [72.8, 1051.0], [72.9, 1051.0], [73.0, 1055.0], [73.1, 1056.0], [73.2, 1057.0], [73.3, 1057.0], [73.4, 1057.0], [73.5, 1057.0], [73.6, 1057.0], [73.7, 1059.0], [73.8, 1060.0], [73.9, 1066.0], [74.0, 1066.0], [74.1, 1066.0], [74.2, 1068.0], [74.3, 1077.0], [74.4, 1077.0], [74.5, 1079.0], [74.6, 1079.0], [74.7, 1080.0], [74.8, 1080.0], [74.9, 1083.0], [75.0, 1083.0], [75.1, 1083.0], [75.2, 1084.0], [75.3, 1087.0], [75.4, 1087.0], [75.5, 1087.0], [75.6, 1089.0], [75.7, 1095.0], [75.8, 1095.0], [75.9, 1095.0], [76.0, 1096.0], [76.1, 1097.0], [76.2, 1099.0], [76.3, 1099.0], [76.4, 1103.0], [76.5, 1105.0], [76.6, 1105.0], [76.7, 1105.0], [76.8, 1110.0], [76.9, 1111.0], [77.0, 1111.0], [77.1, 1111.0], [77.2, 1115.0], [77.3, 1115.0], [77.4, 1115.0], [77.5, 1117.0], [77.6, 1117.0], [77.7, 1117.0], [77.8, 1117.0], [77.9, 1118.0], [78.0, 1120.0], [78.1, 1124.0], [78.2, 1124.0], [78.3, 1125.0], [78.4, 1126.0], [78.5, 1126.0], [78.6, 1127.0], [78.7, 1128.0], [78.8, 1130.0], [78.9, 1130.0], [79.0, 1131.0], [79.1, 1132.0], [79.2, 1133.0], [79.3, 1133.0], [79.4, 1135.0], [79.5, 1136.0], [79.6, 1136.0], [79.7, 1136.0], [79.8, 1136.0], [79.9, 1146.0], [80.0, 1147.0], [80.1, 1147.0], [80.2, 1149.0], [80.3, 1150.0], [80.4, 1150.0], [80.5, 1155.0], [80.6, 1155.0], [80.7, 1155.0], [80.8, 1155.0], [80.9, 1159.0], [81.0, 1160.0], [81.1, 1162.0], [81.2, 1162.0], [81.3, 1168.0], [81.4, 1168.0], [81.5, 1169.0], [81.6, 1169.0], [81.7, 1173.0], [81.8, 1176.0], [81.9, 1176.0], [82.0, 1178.0], [82.1, 1181.0], [82.2, 1183.0], [82.3, 1183.0], [82.4, 1184.0], [82.5, 1184.0], [82.6, 1185.0], [82.7, 1185.0], [82.8, 1187.0], [82.9, 1192.0], [83.0, 1197.0], [83.1, 1197.0], [83.2, 1200.0], [83.3, 1203.0], [83.4, 1203.0], [83.5, 1204.0], [83.6, 1211.0], [83.7, 1212.0], [83.8, 1212.0], [83.9, 1224.0], [84.0, 1228.0], [84.1, 1229.0], [84.2, 1229.0], [84.3, 1232.0], [84.4, 1233.0], [84.5, 1234.0], [84.6, 1234.0], [84.7, 1237.0], [84.8, 1239.0], [84.9, 1239.0], [85.0, 1239.0], [85.1, 1242.0], [85.2, 1248.0], [85.3, 1248.0], [85.4, 1250.0], [85.5, 1251.0], [85.6, 1252.0], [85.7, 1252.0], [85.8, 1253.0], [85.9, 1254.0], [86.0, 1258.0], [86.1, 1258.0], [86.2, 1259.0], [86.3, 1265.0], [86.4, 1266.0], [86.5, 1266.0], [86.6, 1270.0], [86.7, 1276.0], [86.8, 1276.0], [86.9, 1277.0], [87.0, 1277.0], [87.1, 1278.0], [87.2, 1278.0], [87.3, 1278.0], [87.4, 1282.0], [87.5, 1286.0], [87.6, 1286.0], [87.7, 1288.0], [87.8, 1288.0], [87.9, 1295.0], [88.0, 1295.0], [88.1, 1297.0], [88.2, 1300.0], [88.3, 1307.0], [88.4, 1307.0], [88.5, 1310.0], [88.6, 1312.0], [88.7, 1312.0], [88.8, 1316.0], [88.9, 1320.0], [89.0, 1320.0], [89.1, 1320.0], [89.2, 1325.0], [89.3, 1330.0], [89.4, 1337.0], [89.5, 1337.0], [89.6, 1341.0], [89.7, 1345.0], [89.8, 1348.0], [89.9, 1348.0], [90.0, 1350.0], [90.1, 1352.0], [90.2, 1352.0], [90.3, 1355.0], [90.4, 1360.0], [90.5, 1363.0], [90.6, 1363.0], [90.7, 1368.0], [90.8, 1373.0], [90.9, 1376.0], [91.0, 1376.0], [91.1, 1387.0], [91.2, 1393.0], [91.3, 1393.0], [91.4, 1393.0], [91.5, 1396.0], [91.6, 1397.0], [91.7, 1397.0], [91.8, 1398.0], [91.9, 1405.0], [92.0, 1408.0], [92.1, 1408.0], [92.2, 1422.0], [92.3, 1432.0], [92.4, 1440.0], [92.5, 1440.0], [92.6, 1440.0], [92.7, 1444.0], [92.8, 1446.0], [92.9, 1446.0], [93.0, 1446.0], [93.1, 1449.0], [93.2, 1467.0], [93.3, 1467.0], [93.4, 1474.0], [93.5, 1482.0], [93.6, 1482.0], [93.7, 1490.0], [93.8, 1495.0], [93.9, 1518.0], [94.0, 1518.0], [94.1, 1519.0], [94.2, 1522.0], [94.3, 1557.0], [94.4, 1557.0], [94.5, 1565.0], [94.6, 1565.0], [94.7, 1573.0], [94.8, 1573.0], [94.9, 1589.0], [95.0, 1598.0], [95.1, 1598.0], [95.2, 1604.0], [95.3, 1611.0], [95.4, 1633.0], [95.5, 1633.0], [95.6, 1660.0], [95.7, 1661.0], [95.8, 1668.0], [95.9, 1668.0], [96.0, 1673.0], [96.1, 1681.0], [96.2, 1701.0], [96.3, 1701.0], [96.4, 1710.0], [96.5, 1716.0], [96.6, 1724.0], [96.7, 1724.0], [96.8, 1730.0], [96.9, 1758.0], [97.0, 1758.0], [97.1, 1788.0], [97.2, 1789.0], [97.3, 1798.0], [97.4, 1798.0], [97.5, 1883.0], [97.6, 1915.0], [97.7, 1950.0], [97.8, 1950.0], [97.9, 1993.0], [98.0, 2231.0], [98.1, 2293.0], [98.2, 2293.0], [98.3, 2499.0], [98.4, 2661.0], [98.5, 2661.0], [98.6, 2973.0], [98.7, 2991.0], [98.8, 3037.0], [98.9, 3037.0], [99.0, 3064.0], [99.1, 3084.0], [99.2, 3140.0], [99.3, 3140.0], [99.4, 3189.0], [99.5, 3260.0], [99.6, 3273.0], [99.7, 3273.0], [99.8, 3285.0], [99.9, 3496.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 79.0, "series": [{"data": [[600.0, 79.0], [700.0, 55.0], [800.0, 50.0], [900.0, 62.0], [1000.0, 59.0], [1100.0, 50.0], [1200.0, 37.0], [1300.0, 27.0], [1400.0, 15.0], [1500.0, 9.0], [100.0, 5.0], [1600.0, 8.0], [1700.0, 9.0], [1800.0, 1.0], [1900.0, 3.0], [2200.0, 2.0], [2400.0, 1.0], [2600.0, 1.0], [2900.0, 2.0], [3000.0, 3.0], [3100.0, 2.0], [3200.0, 3.0], [200.0, 51.0], [3400.0, 1.0], [300.0, 79.0], [400.0, 47.0], [500.0, 74.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 45.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 508.0, "series": [{"data": [[0.0, 182.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 508.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 45.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.922123893805312, "minX": 1.60383936E12, "maxY": 10.0, "series": [{"data": [[1.60383936E12, 10.0], [1.60383942E12, 9.922123893805312]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383942E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 332.0, "minX": 1.0, "maxY": 1341.0, "series": [{"data": [[8.0, 717.0], [2.0, 543.0], [1.0, 929.0], [9.0, 332.0], [10.0, 840.1129476584033], [5.0, 584.5], [6.0, 613.0], [3.0, 555.0], [7.0, 1341.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 838.2598639455792]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1286.8, "minX": 1.60383936E12, "maxY": 1291021.45, "series": [{"data": [[1.60383936E12, 544745.5166666667], [1.60383942E12, 1291021.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60383936E12, 1286.8], [1.60383942E12, 4236.233333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383942E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 781.530973451327, "minX": 1.60383936E12, "maxY": 1026.8000000000002, "series": [{"data": [[1.60383936E12, 1026.8000000000002], [1.60383942E12, 781.530973451327]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383942E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 780.3681415929198, "minX": 1.60383936E12, "maxY": 1025.235294117648, "series": [{"data": [[1.60383936E12, 1025.235294117648], [1.60383942E12, 780.3681415929198]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383942E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.017699115044247784, "minX": 1.60383936E12, "maxY": 0.6352941176470585, "series": [{"data": [[1.60383936E12, 0.6352941176470585], [1.60383942E12, 0.017699115044247784]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383942E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.60383936E12, "maxY": 3496.0, "series": [{"data": [[1.60383936E12, 3285.0], [1.60383942E12, 3496.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60383936E12, 190.6949997961521], [1.60383942E12, 203.75199892044068]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60383936E12, 191.46450008153914], [1.60383942E12, 207.82720043182374]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60383936E12, 191.12249989807606], [1.60383942E12, 206.01599946022034]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60383936E12, 188.0], [1.60383942E12, 175.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60383936E12, 924.0], [1.60383942E12, 719.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383942E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 504.0, "minX": 1.0, "maxY": 2736.0, "series": [{"data": [[8.0, 1081.5], [9.0, 1094.0], [10.0, 874.5], [11.0, 881.0], [12.0, 924.0], [13.0, 825.0], [14.0, 681.5], [15.0, 599.5], [16.0, 504.0], [1.0, 929.0], [17.0, 619.5], [18.0, 594.0], [19.0, 543.0], [6.0, 2736.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 504.0, "minX": 1.0, "maxY": 2729.0, "series": [{"data": [[8.0, 1078.5], [9.0, 1092.5], [10.0, 872.0], [11.0, 880.5], [12.0, 923.5], [13.0, 819.0], [14.0, 681.0], [15.0, 598.5], [16.0, 504.0], [1.0, 929.0], [17.0, 619.5], [18.0, 593.5], [19.0, 542.0], [6.0, 2729.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.60383936E12, "maxY": 9.25, "series": [{"data": [[1.60383936E12, 3.0], [1.60383942E12, 9.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383942E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.8333333333333335, "minX": 1.60383936E12, "maxY": 9.416666666666666, "series": [{"data": [[1.60383936E12, 2.8333333333333335], [1.60383942E12, 9.416666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383942E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.8333333333333335, "minX": 1.60383936E12, "maxY": 9.416666666666666, "series": [{"data": [[1.60383936E12, 2.8333333333333335], [1.60383942E12, 9.416666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383942E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.8333333333333335, "minX": 1.60383936E12, "maxY": 9.416666666666666, "series": [{"data": [[1.60383936E12, 2.8333333333333335], [1.60383942E12, 9.416666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383942E12, "title": "Total Transactions Per Second"}},
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

