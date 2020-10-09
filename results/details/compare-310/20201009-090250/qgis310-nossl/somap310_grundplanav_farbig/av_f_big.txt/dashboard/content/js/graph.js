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
        data: {"result": {"minY": 173.0, "minX": 0.0, "maxY": 3779.0, "series": [{"data": [[0.0, 173.0], [0.1, 173.0], [0.2, 174.0], [0.3, 175.0], [0.4, 175.0], [0.5, 182.0], [0.6, 182.0], [0.7, 185.0], [0.8, 185.0], [0.9, 187.0], [1.0, 191.0], [1.1, 192.0], [1.2, 192.0], [1.3, 193.0], [1.4, 199.0], [1.5, 199.0], [1.6, 199.0], [1.7, 203.0], [1.8, 204.0], [1.9, 204.0], [2.0, 204.0], [2.1, 204.0], [2.2, 205.0], [2.3, 205.0], [2.4, 209.0], [2.5, 210.0], [2.6, 212.0], [2.7, 212.0], [2.8, 213.0], [2.9, 215.0], [3.0, 218.0], [3.1, 218.0], [3.2, 227.0], [3.3, 229.0], [3.4, 229.0], [3.5, 231.0], [3.6, 232.0], [3.7, 248.0], [3.8, 248.0], [3.9, 249.0], [4.0, 250.0], [4.1, 251.0], [4.2, 251.0], [4.3, 251.0], [4.4, 258.0], [4.5, 262.0], [4.6, 262.0], [4.7, 266.0], [4.8, 268.0], [4.9, 269.0], [5.0, 269.0], [5.1, 269.0], [5.2, 270.0], [5.3, 270.0], [5.4, 271.0], [5.5, 271.0], [5.6, 272.0], [5.7, 272.0], [5.8, 273.0], [5.9, 275.0], [6.0, 280.0], [6.1, 280.0], [6.2, 281.0], [6.3, 282.0], [6.4, 285.0], [6.5, 285.0], [6.6, 286.0], [6.7, 288.0], [6.8, 288.0], [6.9, 294.0], [7.0, 296.0], [7.1, 299.0], [7.2, 299.0], [7.3, 302.0], [7.4, 306.0], [7.5, 309.0], [7.6, 309.0], [7.7, 310.0], [7.8, 310.0], [7.9, 320.0], [8.0, 320.0], [8.1, 323.0], [8.2, 325.0], [8.3, 326.0], [8.4, 326.0], [8.5, 327.0], [8.6, 332.0], [8.7, 332.0], [8.8, 337.0], [8.9, 338.0], [9.0, 345.0], [9.1, 345.0], [9.2, 347.0], [9.3, 348.0], [9.4, 350.0], [9.5, 350.0], [9.6, 354.0], [9.7, 366.0], [9.8, 370.0], [9.9, 370.0], [10.0, 373.0], [10.1, 373.0], [10.2, 373.0], [10.3, 373.0], [10.4, 376.0], [10.5, 378.0], [10.6, 378.0], [10.7, 381.0], [10.8, 381.0], [10.9, 384.0], [11.0, 384.0], [11.1, 392.0], [11.2, 394.0], [11.3, 398.0], [11.4, 398.0], [11.5, 407.0], [11.6, 408.0], [11.7, 408.0], [11.8, 411.0], [11.9, 412.0], [12.0, 413.0], [12.1, 413.0], [12.2, 414.0], [12.3, 418.0], [12.4, 418.0], [12.5, 418.0], [12.6, 421.0], [12.7, 421.0], [12.8, 421.0], [12.9, 421.0], [13.0, 423.0], [13.1, 427.0], [13.2, 429.0], [13.3, 429.0], [13.4, 435.0], [13.5, 439.0], [13.6, 439.0], [13.7, 441.0], [13.8, 442.0], [13.9, 445.0], [14.0, 445.0], [14.1, 448.0], [14.2, 451.0], [14.3, 452.0], [14.4, 452.0], [14.5, 453.0], [14.6, 454.0], [14.7, 455.0], [14.8, 455.0], [14.9, 455.0], [15.0, 457.0], [15.1, 457.0], [15.2, 461.0], [15.3, 462.0], [15.4, 463.0], [15.5, 463.0], [15.6, 465.0], [15.7, 469.0], [15.8, 471.0], [15.9, 471.0], [16.0, 472.0], [16.1, 472.0], [16.2, 472.0], [16.3, 472.0], [16.4, 476.0], [16.5, 481.0], [16.6, 484.0], [16.7, 484.0], [16.8, 485.0], [16.9, 485.0], [17.0, 485.0], [17.1, 487.0], [17.2, 488.0], [17.3, 489.0], [17.4, 489.0], [17.5, 490.0], [17.6, 491.0], [17.7, 491.0], [17.8, 491.0], [17.9, 493.0], [18.0, 494.0], [18.1, 495.0], [18.2, 495.0], [18.3, 497.0], [18.4, 497.0], [18.5, 497.0], [18.6, 498.0], [18.7, 499.0], [18.8, 501.0], [18.9, 501.0], [19.0, 502.0], [19.1, 504.0], [19.2, 504.0], [19.3, 504.0], [19.4, 505.0], [19.5, 507.0], [19.6, 507.0], [19.7, 507.0], [19.8, 508.0], [19.9, 508.0], [20.0, 509.0], [20.1, 509.0], [20.2, 509.0], [20.3, 510.0], [20.4, 510.0], [20.5, 512.0], [20.6, 512.0], [20.7, 513.0], [20.8, 513.0], [20.9, 514.0], [21.0, 514.0], [21.1, 520.0], [21.2, 520.0], [21.3, 522.0], [21.4, 523.0], [21.5, 523.0], [21.6, 523.0], [21.7, 524.0], [21.8, 526.0], [21.9, 526.0], [22.0, 529.0], [22.1, 530.0], [22.2, 531.0], [22.3, 531.0], [22.4, 532.0], [22.5, 533.0], [22.6, 533.0], [22.7, 533.0], [22.8, 533.0], [22.9, 535.0], [23.0, 538.0], [23.1, 538.0], [23.2, 538.0], [23.3, 539.0], [23.4, 539.0], [23.5, 540.0], [23.6, 540.0], [23.7, 541.0], [23.8, 541.0], [23.9, 541.0], [24.0, 541.0], [24.1, 543.0], [24.2, 543.0], [24.3, 546.0], [24.4, 548.0], [24.5, 548.0], [24.6, 548.0], [24.7, 549.0], [24.8, 551.0], [24.9, 551.0], [25.0, 551.0], [25.1, 552.0], [25.2, 553.0], [25.3, 553.0], [25.4, 556.0], [25.5, 557.0], [25.6, 558.0], [25.7, 558.0], [25.8, 559.0], [25.9, 559.0], [26.0, 559.0], [26.1, 559.0], [26.2, 560.0], [26.3, 561.0], [26.4, 562.0], [26.5, 562.0], [26.6, 564.0], [26.7, 564.0], [26.8, 564.0], [26.9, 566.0], [27.0, 567.0], [27.1, 567.0], [27.2, 567.0], [27.3, 567.0], [27.4, 569.0], [27.5, 569.0], [27.6, 569.0], [27.7, 569.0], [27.8, 570.0], [27.9, 571.0], [28.0, 571.0], [28.1, 571.0], [28.2, 572.0], [28.3, 572.0], [28.4, 572.0], [28.5, 574.0], [28.6, 577.0], [28.7, 577.0], [28.8, 578.0], [28.9, 579.0], [29.0, 579.0], [29.1, 579.0], [29.2, 580.0], [29.3, 580.0], [29.4, 581.0], [29.5, 581.0], [29.6, 581.0], [29.7, 582.0], [29.8, 583.0], [29.9, 583.0], [30.0, 583.0], [30.1, 583.0], [30.2, 583.0], [30.3, 585.0], [30.4, 586.0], [30.5, 586.0], [30.6, 586.0], [30.7, 586.0], [30.8, 590.0], [30.9, 590.0], [31.0, 590.0], [31.1, 590.0], [31.2, 592.0], [31.3, 592.0], [31.4, 592.0], [31.5, 593.0], [31.6, 595.0], [31.7, 595.0], [31.8, 596.0], [31.9, 598.0], [32.0, 601.0], [32.1, 601.0], [32.2, 601.0], [32.3, 605.0], [32.4, 608.0], [32.5, 608.0], [32.6, 608.0], [32.7, 609.0], [32.8, 611.0], [32.9, 611.0], [33.0, 613.0], [33.1, 615.0], [33.2, 616.0], [33.3, 616.0], [33.4, 617.0], [33.5, 619.0], [33.6, 619.0], [33.7, 619.0], [33.8, 620.0], [33.9, 620.0], [34.0, 620.0], [34.1, 621.0], [34.2, 622.0], [34.3, 622.0], [34.4, 622.0], [34.5, 622.0], [34.6, 627.0], [34.7, 628.0], [34.8, 628.0], [34.9, 629.0], [35.0, 630.0], [35.1, 630.0], [35.2, 634.0], [35.3, 634.0], [35.4, 635.0], [35.5, 635.0], [35.6, 636.0], [35.7, 638.0], [35.8, 639.0], [35.9, 639.0], [36.0, 640.0], [36.1, 645.0], [36.2, 645.0], [36.3, 645.0], [36.4, 646.0], [36.5, 648.0], [36.6, 650.0], [36.7, 650.0], [36.8, 651.0], [36.9, 652.0], [37.0, 652.0], [37.1, 652.0], [37.2, 653.0], [37.3, 655.0], [37.4, 655.0], [37.5, 657.0], [37.6, 661.0], [37.7, 663.0], [37.8, 663.0], [37.9, 664.0], [38.0, 664.0], [38.1, 665.0], [38.2, 665.0], [38.3, 665.0], [38.4, 666.0], [38.5, 666.0], [38.6, 669.0], [38.7, 670.0], [38.8, 671.0], [38.9, 671.0], [39.0, 671.0], [39.1, 673.0], [39.2, 674.0], [39.3, 674.0], [39.4, 676.0], [39.5, 676.0], [39.6, 676.0], [39.7, 676.0], [39.8, 676.0], [39.9, 681.0], [40.0, 681.0], [40.1, 681.0], [40.2, 684.0], [40.3, 684.0], [40.4, 684.0], [40.5, 684.0], [40.6, 685.0], [40.7, 688.0], [40.8, 688.0], [40.9, 690.0], [41.0, 690.0], [41.1, 690.0], [41.2, 690.0], [41.3, 693.0], [41.4, 693.0], [41.5, 695.0], [41.6, 695.0], [41.7, 695.0], [41.8, 695.0], [41.9, 695.0], [42.0, 696.0], [42.1, 698.0], [42.2, 698.0], [42.3, 698.0], [42.4, 699.0], [42.5, 700.0], [42.6, 701.0], [42.7, 701.0], [42.8, 702.0], [42.9, 703.0], [43.0, 704.0], [43.1, 704.0], [43.2, 705.0], [43.3, 706.0], [43.4, 706.0], [43.5, 706.0], [43.6, 706.0], [43.7, 706.0], [43.8, 706.0], [43.9, 708.0], [44.0, 712.0], [44.1, 712.0], [44.2, 712.0], [44.3, 712.0], [44.4, 713.0], [44.5, 714.0], [44.6, 714.0], [44.7, 717.0], [44.8, 717.0], [44.9, 717.0], [45.0, 717.0], [45.1, 721.0], [45.2, 721.0], [45.3, 721.0], [45.4, 722.0], [45.5, 722.0], [45.6, 723.0], [45.7, 723.0], [45.8, 725.0], [45.9, 727.0], [46.0, 729.0], [46.1, 729.0], [46.2, 730.0], [46.3, 730.0], [46.4, 732.0], [46.5, 732.0], [46.6, 732.0], [46.7, 733.0], [46.8, 733.0], [46.9, 734.0], [47.0, 738.0], [47.1, 738.0], [47.2, 738.0], [47.3, 740.0], [47.4, 741.0], [47.5, 742.0], [47.6, 742.0], [47.7, 745.0], [47.8, 748.0], [47.9, 749.0], [48.0, 749.0], [48.1, 751.0], [48.2, 751.0], [48.3, 753.0], [48.4, 753.0], [48.5, 756.0], [48.6, 757.0], [48.7, 757.0], [48.8, 769.0], [48.9, 769.0], [49.0, 769.0], [49.1, 769.0], [49.2, 772.0], [49.3, 774.0], [49.4, 781.0], [49.5, 781.0], [49.6, 782.0], [49.7, 785.0], [49.8, 788.0], [49.9, 788.0], [50.0, 789.0], [50.1, 792.0], [50.2, 792.0], [50.3, 796.0], [50.4, 796.0], [50.5, 798.0], [50.6, 798.0], [50.7, 800.0], [50.8, 801.0], [50.9, 802.0], [51.0, 802.0], [51.1, 804.0], [51.2, 806.0], [51.3, 807.0], [51.4, 807.0], [51.5, 808.0], [51.6, 813.0], [51.7, 813.0], [51.8, 816.0], [51.9, 817.0], [52.0, 818.0], [52.1, 818.0], [52.2, 818.0], [52.3, 818.0], [52.4, 819.0], [52.5, 819.0], [52.6, 823.0], [52.7, 825.0], [52.8, 826.0], [52.9, 826.0], [53.0, 826.0], [53.1, 830.0], [53.2, 830.0], [53.3, 830.0], [53.4, 831.0], [53.5, 832.0], [53.6, 832.0], [53.7, 832.0], [53.8, 833.0], [53.9, 834.0], [54.0, 834.0], [54.1, 836.0], [54.2, 837.0], [54.3, 842.0], [54.4, 842.0], [54.5, 844.0], [54.6, 844.0], [54.7, 849.0], [54.8, 849.0], [54.9, 849.0], [55.0, 853.0], [55.1, 853.0], [55.2, 853.0], [55.3, 855.0], [55.4, 856.0], [55.5, 856.0], [55.6, 862.0], [55.7, 865.0], [55.8, 866.0], [55.9, 866.0], [56.0, 866.0], [56.1, 866.0], [56.2, 868.0], [56.3, 868.0], [56.4, 871.0], [56.5, 872.0], [56.6, 873.0], [56.7, 873.0], [56.8, 875.0], [56.9, 875.0], [57.0, 875.0], [57.1, 875.0], [57.2, 876.0], [57.3, 877.0], [57.4, 877.0], [57.5, 877.0], [57.6, 880.0], [57.7, 881.0], [57.8, 881.0], [57.9, 881.0], [58.0, 882.0], [58.1, 882.0], [58.2, 882.0], [58.3, 883.0], [58.4, 889.0], [58.5, 889.0], [58.6, 890.0], [58.7, 890.0], [58.8, 891.0], [58.9, 891.0], [59.0, 891.0], [59.1, 892.0], [59.2, 892.0], [59.3, 892.0], [59.4, 893.0], [59.5, 893.0], [59.6, 893.0], [59.7, 893.0], [59.8, 895.0], [59.9, 899.0], [60.0, 899.0], [60.1, 899.0], [60.2, 900.0], [60.3, 900.0], [60.4, 900.0], [60.5, 902.0], [60.6, 904.0], [60.7, 906.0], [60.8, 906.0], [60.9, 906.0], [61.0, 909.0], [61.1, 909.0], [61.2, 909.0], [61.3, 909.0], [61.4, 910.0], [61.5, 912.0], [61.6, 912.0], [61.7, 914.0], [61.8, 915.0], [61.9, 915.0], [62.0, 915.0], [62.1, 916.0], [62.2, 919.0], [62.3, 919.0], [62.4, 920.0], [62.5, 922.0], [62.6, 922.0], [62.7, 922.0], [62.8, 923.0], [62.9, 923.0], [63.0, 925.0], [63.1, 925.0], [63.2, 925.0], [63.3, 926.0], [63.4, 926.0], [63.5, 927.0], [63.6, 929.0], [63.7, 930.0], [63.8, 930.0], [63.9, 931.0], [64.0, 932.0], [64.1, 933.0], [64.2, 933.0], [64.3, 933.0], [64.4, 935.0], [64.5, 935.0], [64.6, 935.0], [64.7, 937.0], [64.8, 938.0], [64.9, 941.0], [65.0, 941.0], [65.1, 942.0], [65.2, 945.0], [65.3, 945.0], [65.4, 948.0], [65.5, 949.0], [65.6, 950.0], [65.7, 950.0], [65.8, 951.0], [65.9, 952.0], [66.0, 952.0], [66.1, 952.0], [66.2, 957.0], [66.3, 957.0], [66.4, 959.0], [66.5, 959.0], [66.6, 964.0], [66.7, 966.0], [66.8, 966.0], [66.9, 970.0], [67.0, 974.0], [67.1, 977.0], [67.2, 977.0], [67.3, 978.0], [67.4, 980.0], [67.5, 981.0], [67.6, 981.0], [67.7, 981.0], [67.8, 986.0], [67.9, 989.0], [68.0, 989.0], [68.1, 990.0], [68.2, 991.0], [68.3, 991.0], [68.4, 991.0], [68.5, 994.0], [68.6, 996.0], [68.7, 996.0], [68.8, 1000.0], [68.9, 1000.0], [69.0, 1001.0], [69.1, 1001.0], [69.2, 1004.0], [69.3, 1004.0], [69.4, 1005.0], [69.5, 1005.0], [69.6, 1005.0], [69.7, 1008.0], [69.8, 1008.0], [69.9, 1008.0], [70.0, 1012.0], [70.1, 1014.0], [70.2, 1014.0], [70.3, 1014.0], [70.4, 1015.0], [70.5, 1019.0], [70.6, 1019.0], [70.7, 1024.0], [70.8, 1028.0], [70.9, 1032.0], [71.0, 1032.0], [71.1, 1033.0], [71.2, 1033.0], [71.3, 1035.0], [71.4, 1035.0], [71.5, 1035.0], [71.6, 1037.0], [71.7, 1037.0], [71.8, 1037.0], [71.9, 1038.0], [72.0, 1040.0], [72.1, 1040.0], [72.2, 1041.0], [72.3, 1042.0], [72.4, 1044.0], [72.5, 1044.0], [72.6, 1045.0], [72.7, 1045.0], [72.8, 1047.0], [72.9, 1047.0], [73.0, 1049.0], [73.1, 1050.0], [73.2, 1050.0], [73.3, 1050.0], [73.4, 1053.0], [73.5, 1063.0], [73.6, 1063.0], [73.7, 1066.0], [73.8, 1067.0], [73.9, 1067.0], [74.0, 1067.0], [74.1, 1069.0], [74.2, 1070.0], [74.3, 1070.0], [74.4, 1070.0], [74.5, 1073.0], [74.6, 1074.0], [74.7, 1081.0], [74.8, 1081.0], [74.9, 1081.0], [75.0, 1081.0], [75.1, 1081.0], [75.2, 1081.0], [75.3, 1083.0], [75.4, 1089.0], [75.5, 1089.0], [75.6, 1089.0], [75.7, 1091.0], [75.8, 1091.0], [75.9, 1091.0], [76.0, 1091.0], [76.1, 1095.0], [76.2, 1098.0], [76.3, 1098.0], [76.4, 1102.0], [76.5, 1103.0], [76.6, 1104.0], [76.7, 1104.0], [76.8, 1117.0], [76.9, 1122.0], [77.0, 1122.0], [77.1, 1122.0], [77.2, 1130.0], [77.3, 1130.0], [77.4, 1130.0], [77.5, 1132.0], [77.6, 1132.0], [77.7, 1134.0], [77.8, 1134.0], [77.9, 1134.0], [78.0, 1135.0], [78.1, 1135.0], [78.2, 1135.0], [78.3, 1139.0], [78.4, 1139.0], [78.5, 1139.0], [78.6, 1140.0], [78.7, 1142.0], [78.8, 1144.0], [78.9, 1144.0], [79.0, 1146.0], [79.1, 1147.0], [79.2, 1148.0], [79.3, 1148.0], [79.4, 1151.0], [79.5, 1154.0], [79.6, 1155.0], [79.7, 1155.0], [79.8, 1155.0], [79.9, 1158.0], [80.0, 1164.0], [80.1, 1164.0], [80.2, 1165.0], [80.3, 1166.0], [80.4, 1166.0], [80.5, 1166.0], [80.6, 1168.0], [80.7, 1168.0], [80.8, 1168.0], [80.9, 1171.0], [81.0, 1173.0], [81.1, 1176.0], [81.2, 1176.0], [81.3, 1178.0], [81.4, 1180.0], [81.5, 1181.0], [81.6, 1181.0], [81.7, 1183.0], [81.8, 1185.0], [81.9, 1185.0], [82.0, 1185.0], [82.1, 1185.0], [82.2, 1187.0], [82.3, 1187.0], [82.4, 1189.0], [82.5, 1194.0], [82.6, 1197.0], [82.7, 1197.0], [82.8, 1204.0], [82.9, 1206.0], [83.0, 1206.0], [83.1, 1206.0], [83.2, 1213.0], [83.3, 1214.0], [83.4, 1214.0], [83.5, 1216.0], [83.6, 1219.0], [83.7, 1221.0], [83.8, 1221.0], [83.9, 1224.0], [84.0, 1228.0], [84.1, 1229.0], [84.2, 1229.0], [84.3, 1232.0], [84.4, 1234.0], [84.5, 1235.0], [84.6, 1235.0], [84.7, 1238.0], [84.8, 1240.0], [84.9, 1241.0], [85.0, 1241.0], [85.1, 1246.0], [85.2, 1247.0], [85.3, 1247.0], [85.4, 1251.0], [85.5, 1256.0], [85.6, 1259.0], [85.7, 1259.0], [85.8, 1260.0], [85.9, 1261.0], [86.0, 1263.0], [86.1, 1263.0], [86.2, 1266.0], [86.3, 1268.0], [86.4, 1269.0], [86.5, 1269.0], [86.6, 1271.0], [86.7, 1271.0], [86.8, 1271.0], [86.9, 1279.0], [87.0, 1279.0], [87.1, 1286.0], [87.2, 1286.0], [87.3, 1293.0], [87.4, 1303.0], [87.5, 1305.0], [87.6, 1305.0], [87.7, 1306.0], [87.8, 1308.0], [87.9, 1324.0], [88.0, 1324.0], [88.1, 1324.0], [88.2, 1325.0], [88.3, 1326.0], [88.4, 1326.0], [88.5, 1328.0], [88.6, 1331.0], [88.7, 1331.0], [88.8, 1339.0], [88.9, 1340.0], [89.0, 1341.0], [89.1, 1341.0], [89.2, 1347.0], [89.3, 1348.0], [89.4, 1350.0], [89.5, 1350.0], [89.6, 1364.0], [89.7, 1370.0], [89.8, 1370.0], [89.9, 1370.0], [90.0, 1374.0], [90.1, 1381.0], [90.2, 1381.0], [90.3, 1387.0], [90.4, 1388.0], [90.5, 1389.0], [90.6, 1389.0], [90.7, 1391.0], [90.8, 1396.0], [90.9, 1406.0], [91.0, 1406.0], [91.1, 1409.0], [91.2, 1413.0], [91.3, 1414.0], [91.4, 1414.0], [91.5, 1418.0], [91.6, 1418.0], [91.7, 1418.0], [91.8, 1422.0], [91.9, 1433.0], [92.0, 1435.0], [92.1, 1435.0], [92.2, 1457.0], [92.3, 1463.0], [92.4, 1469.0], [92.5, 1469.0], [92.6, 1472.0], [92.7, 1479.0], [92.8, 1485.0], [92.9, 1485.0], [93.0, 1486.0], [93.1, 1497.0], [93.2, 1499.0], [93.3, 1499.0], [93.4, 1499.0], [93.5, 1505.0], [93.6, 1505.0], [93.7, 1511.0], [93.8, 1521.0], [93.9, 1533.0], [94.0, 1533.0], [94.1, 1539.0], [94.2, 1542.0], [94.3, 1555.0], [94.4, 1555.0], [94.5, 1557.0], [94.6, 1565.0], [94.7, 1586.0], [94.8, 1586.0], [94.9, 1591.0], [95.0, 1596.0], [95.1, 1596.0], [95.2, 1611.0], [95.3, 1612.0], [95.4, 1621.0], [95.5, 1621.0], [95.6, 1636.0], [95.7, 1707.0], [95.8, 1711.0], [95.9, 1711.0], [96.0, 1726.0], [96.1, 1727.0], [96.2, 1733.0], [96.3, 1733.0], [96.4, 1737.0], [96.5, 1751.0], [96.6, 1754.0], [96.7, 1754.0], [96.8, 1768.0], [96.9, 1789.0], [97.0, 1789.0], [97.1, 1818.0], [97.2, 1837.0], [97.3, 1838.0], [97.4, 1838.0], [97.5, 1839.0], [97.6, 1942.0], [97.7, 1949.0], [97.8, 1949.0], [97.9, 1987.0], [98.0, 2146.0], [98.1, 2283.0], [98.2, 2283.0], [98.3, 2492.0], [98.4, 2714.0], [98.5, 2714.0], [98.6, 2719.0], [98.7, 2836.0], [98.8, 2857.0], [98.9, 2857.0], [99.0, 2966.0], [99.1, 3052.0], [99.2, 3146.0], [99.3, 3146.0], [99.4, 3216.0], [99.5, 3314.0], [99.6, 3560.0], [99.7, 3560.0], [99.8, 3678.0], [99.9, 3779.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 97.0, "series": [{"data": [[600.0, 77.0], [700.0, 60.0], [800.0, 70.0], [900.0, 63.0], [1000.0, 56.0], [1100.0, 47.0], [1200.0, 34.0], [1300.0, 26.0], [1400.0, 19.0], [1500.0, 12.0], [100.0, 12.0], [1600.0, 4.0], [1700.0, 10.0], [1800.0, 4.0], [1900.0, 3.0], [2100.0, 1.0], [2200.0, 1.0], [2400.0, 1.0], [2700.0, 2.0], [2800.0, 2.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [3200.0, 1.0], [200.0, 41.0], [3300.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [3700.0, 1.0], [300.0, 31.0], [400.0, 54.0], [500.0, 97.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 48.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 549.0, "series": [{"data": [[0.0, 138.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 549.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 48.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.92512479201331, "minX": 1.6022379E12, "maxY": 10.0, "series": [{"data": [[1.6022379E12, 10.0], [1.60223796E12, 9.92512479201331]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223796E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 310.0, "minX": 1.0, "maxY": 959.0, "series": [{"data": [[8.0, 310.0], [4.0, 579.0], [2.0, 950.0], [1.0, 916.0], [9.0, 567.0], [10.0, 864.3415977961417], [5.0, 564.0], [6.0, 578.0], [3.0, 959.0], [7.0, 509.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 861.82857142857]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1014.7833333333333, "minX": 1.6022379E12, "maxY": 1377791.7833333334, "series": [{"data": [[1.6022379E12, 458004.6666666667], [1.60223796E12, 1377791.7833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6022379E12, 1014.7833333333333], [1.60223796E12, 4508.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223796E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 820.8702163061571, "minX": 1.6022379E12, "maxY": 1045.529850746268, "series": [{"data": [[1.6022379E12, 1045.529850746268], [1.60223796E12, 820.8702163061571]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223796E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 819.8835274542425, "minX": 1.6022379E12, "maxY": 1044.410447761194, "series": [{"data": [[1.6022379E12, 1044.410447761194], [1.60223796E12, 819.8835274542425]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223796E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.014975041597337773, "minX": 1.6022379E12, "maxY": 0.7313432835820899, "series": [{"data": [[1.6022379E12, 0.7313432835820899], [1.60223796E12, 0.014975041597337773]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223796E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 173.0, "minX": 1.6022379E12, "maxY": 3779.0, "series": [{"data": [[1.6022379E12, 3779.0], [1.60223796E12, 2966.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6022379E12, 188.00999954938888], [1.60223796E12, 184.08999928236008]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6022379E12, 189.71100018024444], [1.60223796E12, 186.79900028705597]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6022379E12, 188.95499977469444], [1.60223796E12, 185.59499964118004]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6022379E12, 185.0], [1.60223796E12, 173.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6022379E12, 821.0], [1.60223796E12, 772.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223796E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 537.5, "minX": 1.0, "maxY": 2719.0, "series": [{"data": [[8.0, 1099.5], [9.0, 1022.5], [10.0, 882.5], [11.0, 927.0], [12.0, 804.5], [3.0, 950.0], [13.0, 835.0], [14.0, 636.0], [15.0, 583.5], [1.0, 2719.0], [16.0, 637.5], [17.0, 561.5], [18.0, 537.5], [20.0, 604.0], [7.0, 956.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 537.5, "minX": 1.0, "maxY": 2715.0, "series": [{"data": [[8.0, 1099.0], [9.0, 1022.0], [10.0, 881.5], [11.0, 926.0], [12.0, 803.5], [3.0, 950.0], [13.0, 834.5], [14.0, 636.0], [15.0, 583.5], [1.0, 2715.0], [16.0, 637.0], [17.0, 561.5], [18.0, 537.5], [20.0, 604.0], [7.0, 954.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.4, "minX": 1.6022379E12, "maxY": 9.85, "series": [{"data": [[1.6022379E12, 2.4], [1.60223796E12, 9.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223796E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.2333333333333334, "minX": 1.6022379E12, "maxY": 10.016666666666667, "series": [{"data": [[1.6022379E12, 2.2333333333333334], [1.60223796E12, 10.016666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223796E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.2333333333333334, "minX": 1.6022379E12, "maxY": 10.016666666666667, "series": [{"data": [[1.6022379E12, 2.2333333333333334], [1.60223796E12, 10.016666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223796E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.2333333333333334, "minX": 1.6022379E12, "maxY": 10.016666666666667, "series": [{"data": [[1.6022379E12, 2.2333333333333334], [1.60223796E12, 10.016666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223796E12, "title": "Total Transactions Per Second"}},
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

