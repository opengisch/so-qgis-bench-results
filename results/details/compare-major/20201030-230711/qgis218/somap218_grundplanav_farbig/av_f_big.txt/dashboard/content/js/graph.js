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
        data: {"result": {"minY": 230.0, "minX": 0.0, "maxY": 7979.0, "series": [{"data": [[0.0, 230.0], [0.1, 230.0], [0.2, 230.0], [0.3, 230.0], [0.4, 230.0], [0.5, 232.0], [0.6, 233.0], [0.7, 237.0], [0.8, 237.0], [0.9, 240.0], [1.0, 240.0], [1.1, 240.0], [1.2, 240.0], [1.3, 241.0], [1.4, 253.0], [1.5, 260.0], [1.6, 260.0], [1.7, 269.0], [1.8, 276.0], [1.9, 276.0], [2.0, 277.0], [2.1, 280.0], [2.2, 283.0], [2.3, 283.0], [2.4, 291.0], [2.5, 299.0], [2.6, 300.0], [2.7, 300.0], [2.8, 300.0], [2.9, 301.0], [3.0, 306.0], [3.1, 306.0], [3.2, 311.0], [3.3, 314.0], [3.4, 314.0], [3.5, 325.0], [3.6, 329.0], [3.7, 330.0], [3.8, 330.0], [3.9, 333.0], [4.0, 340.0], [4.1, 341.0], [4.2, 341.0], [4.3, 342.0], [4.4, 344.0], [4.5, 344.0], [4.6, 344.0], [4.7, 351.0], [4.8, 352.0], [4.9, 354.0], [5.0, 354.0], [5.1, 355.0], [5.2, 356.0], [5.3, 356.0], [5.4, 356.0], [5.5, 358.0], [5.6, 359.0], [5.7, 359.0], [5.8, 360.0], [5.9, 361.0], [6.0, 366.0], [6.1, 366.0], [6.2, 369.0], [6.3, 370.0], [6.4, 373.0], [6.5, 373.0], [6.6, 375.0], [6.7, 382.0], [6.8, 382.0], [6.9, 383.0], [7.0, 383.0], [7.1, 386.0], [7.2, 386.0], [7.3, 388.0], [7.4, 392.0], [7.5, 392.0], [7.6, 392.0], [7.7, 393.0], [7.8, 395.0], [7.9, 395.0], [8.0, 395.0], [8.1, 396.0], [8.2, 398.0], [8.3, 399.0], [8.4, 399.0], [8.5, 402.0], [8.6, 403.0], [8.7, 403.0], [8.8, 404.0], [8.9, 405.0], [9.0, 408.0], [9.1, 408.0], [9.2, 408.0], [9.3, 409.0], [9.4, 409.0], [9.5, 409.0], [9.6, 409.0], [9.7, 409.0], [9.8, 410.0], [9.9, 410.0], [10.0, 412.0], [10.1, 412.0], [10.2, 412.0], [10.3, 412.0], [10.4, 412.0], [10.5, 414.0], [10.6, 414.0], [10.7, 416.0], [10.8, 417.0], [10.9, 418.0], [11.0, 418.0], [11.1, 418.0], [11.2, 420.0], [11.3, 421.0], [11.4, 421.0], [11.5, 424.0], [11.6, 428.0], [11.7, 428.0], [11.8, 428.0], [11.9, 429.0], [12.0, 430.0], [12.1, 430.0], [12.2, 431.0], [12.3, 432.0], [12.4, 434.0], [12.5, 434.0], [12.6, 434.0], [12.7, 436.0], [12.8, 436.0], [12.9, 436.0], [13.0, 437.0], [13.1, 439.0], [13.2, 440.0], [13.3, 440.0], [13.4, 440.0], [13.5, 441.0], [13.6, 441.0], [13.7, 442.0], [13.8, 442.0], [13.9, 443.0], [14.0, 443.0], [14.1, 443.0], [14.2, 445.0], [14.3, 446.0], [14.4, 446.0], [14.5, 448.0], [14.6, 450.0], [14.7, 451.0], [14.8, 451.0], [14.9, 451.0], [15.0, 452.0], [15.1, 452.0], [15.2, 453.0], [15.3, 453.0], [15.4, 455.0], [15.5, 455.0], [15.6, 455.0], [15.7, 456.0], [15.8, 457.0], [15.9, 457.0], [16.0, 457.0], [16.1, 458.0], [16.2, 458.0], [16.3, 458.0], [16.4, 459.0], [16.5, 460.0], [16.6, 461.0], [16.7, 461.0], [16.8, 462.0], [16.9, 465.0], [17.0, 465.0], [17.1, 465.0], [17.2, 466.0], [17.3, 467.0], [17.4, 467.0], [17.5, 467.0], [17.6, 470.0], [17.7, 472.0], [17.8, 472.0], [17.9, 473.0], [18.0, 474.0], [18.1, 474.0], [18.2, 474.0], [18.3, 476.0], [18.4, 476.0], [18.5, 476.0], [18.6, 478.0], [18.7, 479.0], [18.8, 480.0], [18.9, 480.0], [19.0, 480.0], [19.1, 482.0], [19.2, 482.0], [19.3, 482.0], [19.4, 482.0], [19.5, 482.0], [19.6, 484.0], [19.7, 484.0], [19.8, 485.0], [19.9, 486.0], [20.0, 487.0], [20.1, 487.0], [20.2, 487.0], [20.3, 489.0], [20.4, 489.0], [20.5, 489.0], [20.6, 489.0], [20.7, 491.0], [20.8, 491.0], [20.9, 491.0], [21.0, 491.0], [21.1, 492.0], [21.2, 492.0], [21.3, 492.0], [21.4, 494.0], [21.5, 494.0], [21.6, 494.0], [21.7, 495.0], [21.8, 495.0], [21.9, 495.0], [22.0, 495.0], [22.1, 497.0], [22.2, 498.0], [22.3, 498.0], [22.4, 498.0], [22.5, 498.0], [22.6, 498.0], [22.7, 498.0], [22.8, 501.0], [22.9, 502.0], [23.0, 502.0], [23.1, 502.0], [23.2, 503.0], [23.3, 506.0], [23.4, 506.0], [23.5, 508.0], [23.6, 509.0], [23.7, 509.0], [23.8, 509.0], [23.9, 509.0], [24.0, 509.0], [24.1, 510.0], [24.2, 510.0], [24.3, 510.0], [24.4, 512.0], [24.5, 513.0], [24.6, 513.0], [24.7, 514.0], [24.8, 514.0], [24.9, 515.0], [25.0, 515.0], [25.1, 515.0], [25.2, 516.0], [25.3, 516.0], [25.4, 516.0], [25.5, 517.0], [25.6, 517.0], [25.7, 517.0], [25.8, 518.0], [25.9, 519.0], [26.0, 520.0], [26.1, 520.0], [26.2, 520.0], [26.3, 523.0], [26.4, 523.0], [26.5, 523.0], [26.6, 525.0], [26.7, 525.0], [26.8, 525.0], [26.9, 527.0], [27.0, 527.0], [27.1, 528.0], [27.2, 528.0], [27.3, 529.0], [27.4, 529.0], [27.5, 530.0], [27.6, 530.0], [27.7, 531.0], [27.8, 533.0], [27.9, 534.0], [28.0, 534.0], [28.1, 534.0], [28.2, 534.0], [28.3, 535.0], [28.4, 535.0], [28.5, 536.0], [28.6, 536.0], [28.7, 536.0], [28.8, 537.0], [28.9, 539.0], [29.0, 540.0], [29.1, 540.0], [29.2, 540.0], [29.3, 541.0], [29.4, 543.0], [29.5, 543.0], [29.6, 543.0], [29.7, 544.0], [29.8, 544.0], [29.9, 544.0], [30.0, 544.0], [30.1, 545.0], [30.2, 545.0], [30.3, 546.0], [30.4, 547.0], [30.5, 548.0], [30.6, 548.0], [30.7, 548.0], [30.8, 549.0], [30.9, 549.0], [31.0, 549.0], [31.1, 549.0], [31.2, 549.0], [31.3, 550.0], [31.4, 550.0], [31.5, 552.0], [31.6, 552.0], [31.7, 552.0], [31.8, 552.0], [31.9, 553.0], [32.0, 553.0], [32.1, 553.0], [32.2, 553.0], [32.3, 554.0], [32.4, 554.0], [32.5, 554.0], [32.6, 555.0], [32.7, 559.0], [32.8, 560.0], [32.9, 560.0], [33.0, 561.0], [33.1, 561.0], [33.2, 562.0], [33.3, 562.0], [33.4, 563.0], [33.5, 564.0], [33.6, 564.0], [33.7, 564.0], [33.8, 565.0], [33.9, 566.0], [34.0, 566.0], [34.1, 566.0], [34.2, 566.0], [34.3, 568.0], [34.4, 568.0], [34.5, 569.0], [34.6, 573.0], [34.7, 575.0], [34.8, 575.0], [34.9, 575.0], [35.0, 576.0], [35.1, 576.0], [35.2, 578.0], [35.3, 578.0], [35.4, 578.0], [35.5, 578.0], [35.6, 581.0], [35.7, 582.0], [35.8, 582.0], [35.9, 582.0], [36.0, 586.0], [36.1, 586.0], [36.2, 586.0], [36.3, 586.0], [36.4, 589.0], [36.5, 590.0], [36.6, 590.0], [36.7, 590.0], [36.8, 590.0], [36.9, 591.0], [37.0, 591.0], [37.1, 591.0], [37.2, 593.0], [37.3, 593.0], [37.4, 593.0], [37.5, 595.0], [37.6, 595.0], [37.7, 597.0], [37.8, 597.0], [37.9, 598.0], [38.0, 598.0], [38.1, 599.0], [38.2, 599.0], [38.3, 599.0], [38.4, 600.0], [38.5, 600.0], [38.6, 600.0], [38.7, 600.0], [38.8, 601.0], [38.9, 601.0], [39.0, 601.0], [39.1, 602.0], [39.2, 602.0], [39.3, 602.0], [39.4, 603.0], [39.5, 605.0], [39.6, 605.0], [39.7, 605.0], [39.8, 608.0], [39.9, 609.0], [40.0, 612.0], [40.1, 612.0], [40.2, 615.0], [40.3, 615.0], [40.4, 615.0], [40.5, 616.0], [40.6, 616.0], [40.7, 617.0], [40.8, 617.0], [40.9, 617.0], [41.0, 617.0], [41.1, 618.0], [41.2, 618.0], [41.3, 618.0], [41.4, 620.0], [41.5, 620.0], [41.6, 620.0], [41.7, 620.0], [41.8, 623.0], [41.9, 623.0], [42.0, 625.0], [42.1, 625.0], [42.2, 625.0], [42.3, 625.0], [42.4, 625.0], [42.5, 626.0], [42.6, 626.0], [42.7, 626.0], [42.8, 627.0], [42.9, 627.0], [43.0, 630.0], [43.1, 630.0], [43.2, 633.0], [43.3, 634.0], [43.4, 634.0], [43.5, 635.0], [43.6, 636.0], [43.7, 637.0], [43.8, 637.0], [43.9, 637.0], [44.0, 637.0], [44.1, 637.0], [44.2, 637.0], [44.3, 637.0], [44.4, 639.0], [44.5, 640.0], [44.6, 640.0], [44.7, 641.0], [44.8, 641.0], [44.9, 642.0], [45.0, 642.0], [45.1, 643.0], [45.2, 648.0], [45.3, 648.0], [45.4, 648.0], [45.5, 651.0], [45.6, 652.0], [45.7, 652.0], [45.8, 655.0], [45.9, 658.0], [46.0, 659.0], [46.1, 659.0], [46.2, 660.0], [46.3, 661.0], [46.4, 662.0], [46.5, 662.0], [46.6, 668.0], [46.7, 668.0], [46.8, 668.0], [46.9, 669.0], [47.0, 670.0], [47.1, 673.0], [47.2, 673.0], [47.3, 675.0], [47.4, 675.0], [47.5, 676.0], [47.6, 676.0], [47.7, 678.0], [47.8, 680.0], [47.9, 681.0], [48.0, 681.0], [48.1, 683.0], [48.2, 683.0], [48.3, 683.0], [48.4, 683.0], [48.5, 684.0], [48.6, 688.0], [48.7, 688.0], [48.8, 689.0], [48.9, 690.0], [49.0, 691.0], [49.1, 691.0], [49.2, 691.0], [49.3, 693.0], [49.4, 695.0], [49.5, 695.0], [49.6, 698.0], [49.7, 700.0], [49.8, 703.0], [49.9, 703.0], [50.0, 704.0], [50.1, 706.0], [50.2, 706.0], [50.3, 708.0], [50.4, 708.0], [50.5, 711.0], [50.6, 711.0], [50.7, 712.0], [50.8, 714.0], [50.9, 718.0], [51.0, 718.0], [51.1, 719.0], [51.2, 721.0], [51.3, 723.0], [51.4, 723.0], [51.5, 724.0], [51.6, 729.0], [51.7, 729.0], [51.8, 730.0], [51.9, 732.0], [52.0, 732.0], [52.1, 732.0], [52.2, 732.0], [52.3, 732.0], [52.4, 734.0], [52.5, 734.0], [52.6, 736.0], [52.7, 738.0], [52.8, 738.0], [52.9, 738.0], [53.0, 740.0], [53.1, 745.0], [53.2, 745.0], [53.3, 745.0], [53.4, 746.0], [53.5, 747.0], [53.6, 747.0], [53.7, 749.0], [53.8, 756.0], [53.9, 766.0], [54.0, 766.0], [54.1, 767.0], [54.2, 770.0], [54.3, 771.0], [54.4, 771.0], [54.5, 776.0], [54.6, 777.0], [54.7, 782.0], [54.8, 782.0], [54.9, 784.0], [55.0, 786.0], [55.1, 786.0], [55.2, 794.0], [55.3, 796.0], [55.4, 797.0], [55.5, 797.0], [55.6, 797.0], [55.7, 798.0], [55.8, 799.0], [55.9, 799.0], [56.0, 800.0], [56.1, 803.0], [56.2, 803.0], [56.3, 803.0], [56.4, 805.0], [56.5, 806.0], [56.6, 808.0], [56.7, 808.0], [56.8, 809.0], [56.9, 810.0], [57.0, 810.0], [57.1, 812.0], [57.2, 812.0], [57.3, 814.0], [57.4, 814.0], [57.5, 816.0], [57.6, 818.0], [57.7, 822.0], [57.8, 822.0], [57.9, 824.0], [58.0, 828.0], [58.1, 828.0], [58.2, 828.0], [58.3, 838.0], [58.4, 839.0], [58.5, 839.0], [58.6, 840.0], [58.7, 844.0], [58.8, 844.0], [58.9, 844.0], [59.0, 845.0], [59.1, 846.0], [59.2, 846.0], [59.3, 846.0], [59.4, 851.0], [59.5, 851.0], [59.6, 854.0], [59.7, 854.0], [59.8, 856.0], [59.9, 859.0], [60.0, 862.0], [60.1, 862.0], [60.2, 863.0], [60.3, 864.0], [60.4, 864.0], [60.5, 864.0], [60.6, 864.0], [60.7, 867.0], [60.8, 867.0], [60.9, 867.0], [61.0, 867.0], [61.1, 869.0], [61.2, 869.0], [61.3, 871.0], [61.4, 872.0], [61.5, 874.0], [61.6, 874.0], [61.7, 874.0], [61.8, 875.0], [61.9, 875.0], [62.0, 879.0], [62.1, 880.0], [62.2, 881.0], [62.3, 881.0], [62.4, 884.0], [62.5, 885.0], [62.6, 885.0], [62.7, 885.0], [62.8, 886.0], [62.9, 886.0], [63.0, 887.0], [63.1, 887.0], [63.2, 893.0], [63.3, 896.0], [63.4, 896.0], [63.5, 898.0], [63.6, 900.0], [63.7, 902.0], [63.8, 902.0], [63.9, 907.0], [64.0, 907.0], [64.1, 911.0], [64.2, 911.0], [64.3, 912.0], [64.4, 914.0], [64.5, 915.0], [64.6, 915.0], [64.7, 917.0], [64.8, 918.0], [64.9, 927.0], [65.0, 927.0], [65.1, 927.0], [65.2, 928.0], [65.3, 928.0], [65.4, 930.0], [65.5, 933.0], [65.6, 942.0], [65.7, 942.0], [65.8, 943.0], [65.9, 945.0], [66.0, 945.0], [66.1, 945.0], [66.2, 946.0], [66.3, 950.0], [66.4, 952.0], [66.5, 952.0], [66.6, 952.0], [66.7, 957.0], [66.8, 957.0], [66.9, 958.0], [67.0, 965.0], [67.1, 970.0], [67.2, 970.0], [67.3, 972.0], [67.4, 975.0], [67.5, 976.0], [67.6, 976.0], [67.7, 977.0], [67.8, 977.0], [67.9, 981.0], [68.0, 981.0], [68.1, 986.0], [68.2, 986.0], [68.3, 987.0], [68.4, 987.0], [68.5, 987.0], [68.6, 988.0], [68.7, 988.0], [68.8, 991.0], [68.9, 993.0], [69.0, 994.0], [69.1, 994.0], [69.2, 1001.0], [69.3, 1007.0], [69.4, 1009.0], [69.5, 1009.0], [69.6, 1012.0], [69.7, 1013.0], [69.8, 1013.0], [69.9, 1013.0], [70.0, 1014.0], [70.1, 1015.0], [70.2, 1015.0], [70.3, 1016.0], [70.4, 1034.0], [70.5, 1046.0], [70.6, 1046.0], [70.7, 1048.0], [70.8, 1052.0], [70.9, 1053.0], [71.0, 1053.0], [71.1, 1054.0], [71.2, 1055.0], [71.3, 1060.0], [71.4, 1060.0], [71.5, 1061.0], [71.6, 1061.0], [71.7, 1061.0], [71.8, 1062.0], [71.9, 1070.0], [72.0, 1075.0], [72.1, 1075.0], [72.2, 1077.0], [72.3, 1082.0], [72.4, 1082.0], [72.5, 1082.0], [72.6, 1089.0], [72.7, 1090.0], [72.8, 1091.0], [72.9, 1091.0], [73.0, 1093.0], [73.1, 1096.0], [73.2, 1097.0], [73.3, 1097.0], [73.4, 1104.0], [73.5, 1106.0], [73.6, 1106.0], [73.7, 1109.0], [73.8, 1110.0], [73.9, 1111.0], [74.0, 1111.0], [74.1, 1112.0], [74.2, 1117.0], [74.3, 1120.0], [74.4, 1120.0], [74.5, 1127.0], [74.6, 1127.0], [74.7, 1128.0], [74.8, 1128.0], [74.9, 1130.0], [75.0, 1134.0], [75.1, 1134.0], [75.2, 1134.0], [75.3, 1135.0], [75.4, 1135.0], [75.5, 1135.0], [75.6, 1137.0], [75.7, 1137.0], [75.8, 1147.0], [75.9, 1147.0], [76.0, 1165.0], [76.1, 1167.0], [76.2, 1169.0], [76.3, 1169.0], [76.4, 1170.0], [76.5, 1171.0], [76.6, 1174.0], [76.7, 1174.0], [76.8, 1176.0], [76.9, 1178.0], [77.0, 1178.0], [77.1, 1180.0], [77.2, 1182.0], [77.3, 1183.0], [77.4, 1183.0], [77.5, 1187.0], [77.6, 1188.0], [77.7, 1191.0], [77.8, 1191.0], [77.9, 1198.0], [78.0, 1199.0], [78.1, 1200.0], [78.2, 1200.0], [78.3, 1201.0], [78.4, 1202.0], [78.5, 1202.0], [78.6, 1203.0], [78.7, 1205.0], [78.8, 1206.0], [78.9, 1206.0], [79.0, 1206.0], [79.1, 1206.0], [79.2, 1207.0], [79.3, 1207.0], [79.4, 1211.0], [79.5, 1213.0], [79.6, 1215.0], [79.7, 1215.0], [79.8, 1218.0], [79.9, 1221.0], [80.0, 1227.0], [80.1, 1227.0], [80.2, 1227.0], [80.3, 1230.0], [80.4, 1230.0], [80.5, 1237.0], [80.6, 1245.0], [80.7, 1247.0], [80.8, 1247.0], [80.9, 1248.0], [81.0, 1258.0], [81.1, 1280.0], [81.2, 1280.0], [81.3, 1284.0], [81.4, 1291.0], [81.5, 1292.0], [81.6, 1292.0], [81.7, 1294.0], [81.8, 1297.0], [81.9, 1297.0], [82.0, 1300.0], [82.1, 1300.0], [82.2, 1301.0], [82.3, 1301.0], [82.4, 1304.0], [82.5, 1305.0], [82.6, 1309.0], [82.7, 1309.0], [82.8, 1309.0], [82.9, 1315.0], [83.0, 1316.0], [83.1, 1316.0], [83.2, 1316.0], [83.3, 1320.0], [83.4, 1320.0], [83.5, 1320.0], [83.6, 1322.0], [83.7, 1326.0], [83.8, 1326.0], [83.9, 1328.0], [84.0, 1333.0], [84.1, 1334.0], [84.2, 1334.0], [84.3, 1344.0], [84.4, 1345.0], [84.5, 1346.0], [84.6, 1346.0], [84.7, 1351.0], [84.8, 1357.0], [84.9, 1360.0], [85.0, 1360.0], [85.1, 1364.0], [85.2, 1365.0], [85.3, 1365.0], [85.4, 1373.0], [85.5, 1377.0], [85.6, 1380.0], [85.7, 1380.0], [85.8, 1385.0], [85.9, 1386.0], [86.0, 1393.0], [86.1, 1393.0], [86.2, 1402.0], [86.3, 1403.0], [86.4, 1406.0], [86.5, 1406.0], [86.6, 1409.0], [86.7, 1413.0], [86.8, 1413.0], [86.9, 1414.0], [87.0, 1416.0], [87.1, 1420.0], [87.2, 1420.0], [87.3, 1425.0], [87.4, 1425.0], [87.5, 1425.0], [87.6, 1425.0], [87.7, 1432.0], [87.8, 1438.0], [87.9, 1453.0], [88.0, 1453.0], [88.1, 1460.0], [88.2, 1477.0], [88.3, 1480.0], [88.4, 1480.0], [88.5, 1499.0], [88.6, 1499.0], [88.7, 1499.0], [88.8, 1523.0], [88.9, 1527.0], [89.0, 1532.0], [89.1, 1532.0], [89.2, 1539.0], [89.3, 1539.0], [89.4, 1547.0], [89.5, 1547.0], [89.6, 1550.0], [89.7, 1563.0], [89.8, 1565.0], [89.9, 1565.0], [90.0, 1566.0], [90.1, 1582.0], [90.2, 1582.0], [90.3, 1592.0], [90.4, 1593.0], [90.5, 1596.0], [90.6, 1596.0], [90.7, 1600.0], [90.8, 1602.0], [90.9, 1604.0], [91.0, 1604.0], [91.1, 1612.0], [91.2, 1624.0], [91.3, 1628.0], [91.4, 1628.0], [91.5, 1632.0], [91.6, 1645.0], [91.7, 1645.0], [91.8, 1650.0], [91.9, 1666.0], [92.0, 1667.0], [92.1, 1667.0], [92.2, 1670.0], [92.3, 1674.0], [92.4, 1680.0], [92.5, 1680.0], [92.6, 1680.0], [92.7, 1686.0], [92.8, 1686.0], [92.9, 1686.0], [93.0, 1694.0], [93.1, 1704.0], [93.2, 1706.0], [93.3, 1706.0], [93.4, 1718.0], [93.5, 1721.0], [93.6, 1721.0], [93.7, 1724.0], [93.8, 1736.0], [93.9, 1739.0], [94.0, 1739.0], [94.1, 1750.0], [94.2, 1764.0], [94.3, 1772.0], [94.4, 1772.0], [94.5, 1779.0], [94.6, 1892.0], [94.7, 1905.0], [94.8, 1905.0], [94.9, 1913.0], [95.0, 1924.0], [95.1, 1924.0], [95.2, 1932.0], [95.3, 1975.0], [95.4, 1992.0], [95.5, 1992.0], [95.6, 2000.0], [95.7, 2019.0], [95.8, 2031.0], [95.9, 2031.0], [96.0, 2036.0], [96.1, 2053.0], [96.2, 2064.0], [96.3, 2064.0], [96.4, 2098.0], [96.5, 2107.0], [96.6, 2113.0], [96.7, 2113.0], [96.8, 2143.0], [96.9, 2144.0], [97.0, 2144.0], [97.1, 2157.0], [97.2, 2173.0], [97.3, 2279.0], [97.4, 2279.0], [97.5, 2326.0], [97.6, 2328.0], [97.7, 2397.0], [97.8, 2397.0], [97.9, 2494.0], [98.0, 2538.0], [98.1, 2541.0], [98.2, 2541.0], [98.3, 2566.0], [98.4, 2583.0], [98.5, 2583.0], [98.6, 2589.0], [98.7, 2799.0], [98.8, 2908.0], [98.9, 2908.0], [99.0, 3071.0], [99.1, 3248.0], [99.2, 3569.0], [99.3, 3569.0], [99.4, 4996.0], [99.5, 5376.0], [99.6, 5983.0], [99.7, 5983.0], [99.8, 7725.0], [99.9, 7979.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 115.0, "series": [{"data": [[600.0, 83.0], [700.0, 46.0], [800.0, 56.0], [900.0, 41.0], [1000.0, 31.0], [1100.0, 35.0], [1200.0, 28.0], [1300.0, 31.0], [1400.0, 19.0], [1500.0, 14.0], [1600.0, 18.0], [1700.0, 11.0], [1800.0, 1.0], [1900.0, 6.0], [2000.0, 7.0], [2100.0, 6.0], [2200.0, 1.0], [2300.0, 3.0], [2400.0, 1.0], [2500.0, 5.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 19.0], [3200.0, 1.0], [3500.0, 1.0], [300.0, 43.0], [4900.0, 1.0], [5300.0, 1.0], [5900.0, 1.0], [400.0, 105.0], [7700.0, 1.0], [7900.0, 1.0], [500.0, 115.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 83.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 485.0, "series": [{"data": [[0.0, 167.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 485.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 83.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.444444444444445, "minX": 1.6040994E12, "maxY": 10.0, "series": [{"data": [[1.60409946E12, 9.444444444444445], [1.6040994E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409946E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 369.0, "minX": 1.0, "maxY": 5376.0, "series": [{"data": [[8.0, 484.0], [4.0, 1007.0], [2.0, 5376.0], [1.0, 1284.0], [9.0, 2541.0], [10.0, 891.9380165289255], [5.0, 708.0], [6.0, 578.0], [3.0, 4996.0], [7.0, 369.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 904.6122448979587]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 597.8166666666667, "minX": 1.6040994E12, "maxY": 1954607.1333333333, "series": [{"data": [[1.60409946E12, 240516.48333333334], [1.6040994E12, 1954607.1333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60409946E12, 597.8166666666667], [1.6040994E12, 4925.216666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409946E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 819.6790123456792, "minX": 1.6040994E12, "maxY": 915.1314984709479, "series": [{"data": [[1.60409946E12, 819.6790123456792], [1.6040994E12, 915.1314984709479]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409946E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 818.5555555555552, "minX": 1.6040994E12, "maxY": 913.5412844036695, "series": [{"data": [[1.60409946E12, 818.5555555555552], [1.6040994E12, 913.5412844036695]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409946E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.11111111111111122, "minX": 1.6040994E12, "maxY": 0.1406727828746177, "series": [{"data": [[1.60409946E12, 0.11111111111111122], [1.6040994E12, 0.1406727828746177]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409946E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 230.0, "minX": 1.6040994E12, "maxY": 7979.0, "series": [{"data": [[1.60409946E12, 5376.0], [1.6040994E12, 7979.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60409946E12, 230.0], [1.6040994E12, 239.6849995315075]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60409946E12, 230.0], [1.6040994E12, 240.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60409946E12, 230.0], [1.6040994E12, 240.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60409946E12, 230.0], [1.6040994E12, 230.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60409946E12, 553.0], [1.6040994E12, 733.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409946E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 477.5, "minX": 1.0, "maxY": 1351.5, "series": [{"data": [[8.0, 908.5], [9.0, 928.0], [10.0, 820.0], [11.0, 776.0], [12.0, 900.5], [13.0, 603.0], [14.0, 582.0], [15.0, 527.0], [1.0, 1190.5], [17.0, 627.5], [18.0, 524.0], [5.0, 1258.0], [20.0, 496.0], [22.0, 477.5], [6.0, 1351.5], [7.0, 1130.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 477.0, "minX": 1.0, "maxY": 1349.5, "series": [{"data": [[8.0, 898.0], [9.0, 926.0], [10.0, 819.0], [11.0, 775.0], [12.0, 894.0], [13.0, 603.0], [14.0, 581.5], [15.0, 526.0], [1.0, 1188.0], [17.0, 626.5], [18.0, 523.5], [5.0, 1257.0], [20.0, 496.0], [22.0, 477.0], [6.0, 1349.5], [7.0, 1129.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.60409934E12, "maxY": 10.95, "series": [{"data": [[1.60409946E12, 1.1833333333333333], [1.60409934E12, 0.11666666666666667], [1.6040994E12, 10.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409946E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.6040994E12, "maxY": 10.9, "series": [{"data": [[1.60409946E12, 1.35], [1.6040994E12, 10.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409946E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.6040994E12, "maxY": 10.9, "series": [{"data": [[1.60409946E12, 1.35], [1.6040994E12, 10.9]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409946E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.6040994E12, "maxY": 10.9, "series": [{"data": [[1.60409946E12, 1.35], [1.6040994E12, 10.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409946E12, "title": "Total Transactions Per Second"}},
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

