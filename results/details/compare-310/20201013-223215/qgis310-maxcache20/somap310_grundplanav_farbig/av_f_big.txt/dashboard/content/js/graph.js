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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 3681.0, "series": [{"data": [[0.0, 179.0], [0.1, 179.0], [0.2, 179.0], [0.3, 183.0], [0.4, 183.0], [0.5, 183.0], [0.6, 188.0], [0.7, 189.0], [0.8, 189.0], [0.9, 189.0], [1.0, 189.0], [1.1, 191.0], [1.2, 191.0], [1.3, 196.0], [1.4, 197.0], [1.5, 199.0], [1.6, 199.0], [1.7, 201.0], [1.8, 201.0], [1.9, 201.0], [2.0, 202.0], [2.1, 204.0], [2.2, 207.0], [2.3, 207.0], [2.4, 230.0], [2.5, 239.0], [2.6, 240.0], [2.7, 240.0], [2.8, 241.0], [2.9, 249.0], [3.0, 250.0], [3.1, 250.0], [3.2, 251.0], [3.3, 258.0], [3.4, 258.0], [3.5, 263.0], [3.6, 264.0], [3.7, 266.0], [3.8, 266.0], [3.9, 267.0], [4.0, 270.0], [4.1, 270.0], [4.2, 270.0], [4.3, 276.0], [4.4, 277.0], [4.5, 279.0], [4.6, 279.0], [4.7, 281.0], [4.8, 282.0], [4.9, 282.0], [5.0, 282.0], [5.1, 286.0], [5.2, 289.0], [5.3, 289.0], [5.4, 295.0], [5.5, 297.0], [5.6, 300.0], [5.7, 300.0], [5.8, 301.0], [5.9, 302.0], [6.0, 303.0], [6.1, 303.0], [6.2, 310.0], [6.3, 315.0], [6.4, 318.0], [6.5, 318.0], [6.6, 319.0], [6.7, 320.0], [6.8, 320.0], [6.9, 320.0], [7.0, 320.0], [7.1, 320.0], [7.2, 320.0], [7.3, 323.0], [7.4, 324.0], [7.5, 326.0], [7.6, 326.0], [7.7, 327.0], [7.8, 329.0], [7.9, 330.0], [8.0, 330.0], [8.1, 333.0], [8.2, 337.0], [8.3, 339.0], [8.4, 339.0], [8.5, 340.0], [8.6, 340.0], [8.7, 340.0], [8.8, 340.0], [8.9, 342.0], [9.0, 342.0], [9.1, 342.0], [9.2, 348.0], [9.3, 349.0], [9.4, 349.0], [9.5, 349.0], [9.6, 349.0], [9.7, 351.0], [9.8, 356.0], [9.9, 356.0], [10.0, 358.0], [10.1, 362.0], [10.2, 362.0], [10.3, 363.0], [10.4, 368.0], [10.5, 369.0], [10.6, 369.0], [10.7, 375.0], [10.8, 376.0], [10.9, 381.0], [11.0, 381.0], [11.1, 381.0], [11.2, 382.0], [11.3, 384.0], [11.4, 384.0], [11.5, 385.0], [11.6, 389.0], [11.7, 389.0], [11.8, 391.0], [11.9, 400.0], [12.0, 400.0], [12.1, 400.0], [12.2, 401.0], [12.3, 401.0], [12.4, 402.0], [12.5, 402.0], [12.6, 403.0], [12.7, 405.0], [12.8, 411.0], [12.9, 411.0], [13.0, 413.0], [13.1, 413.0], [13.2, 418.0], [13.3, 418.0], [13.4, 419.0], [13.5, 421.0], [13.6, 421.0], [13.7, 421.0], [13.8, 424.0], [13.9, 426.0], [14.0, 426.0], [14.1, 427.0], [14.2, 428.0], [14.3, 429.0], [14.4, 429.0], [14.5, 429.0], [14.6, 430.0], [14.7, 434.0], [14.8, 434.0], [14.9, 435.0], [15.0, 435.0], [15.1, 435.0], [15.2, 436.0], [15.3, 438.0], [15.4, 439.0], [15.5, 439.0], [15.6, 440.0], [15.7, 442.0], [15.8, 442.0], [15.9, 442.0], [16.0, 444.0], [16.1, 449.0], [16.2, 451.0], [16.3, 451.0], [16.4, 452.0], [16.5, 454.0], [16.6, 454.0], [16.7, 454.0], [16.8, 456.0], [16.9, 460.0], [17.0, 460.0], [17.1, 461.0], [17.2, 462.0], [17.3, 463.0], [17.4, 463.0], [17.5, 464.0], [17.6, 466.0], [17.7, 467.0], [17.8, 467.0], [17.9, 467.0], [18.0, 468.0], [18.1, 468.0], [18.2, 468.0], [18.3, 469.0], [18.4, 470.0], [18.5, 470.0], [18.6, 471.0], [18.7, 471.0], [18.8, 473.0], [18.9, 473.0], [19.0, 473.0], [19.1, 477.0], [19.2, 477.0], [19.3, 477.0], [19.4, 478.0], [19.5, 481.0], [19.6, 492.0], [19.7, 492.0], [19.8, 492.0], [19.9, 494.0], [20.0, 496.0], [20.1, 496.0], [20.2, 499.0], [20.3, 499.0], [20.4, 499.0], [20.5, 499.0], [20.6, 499.0], [20.7, 499.0], [20.8, 499.0], [20.9, 500.0], [21.0, 502.0], [21.1, 502.0], [21.2, 502.0], [21.3, 503.0], [21.4, 506.0], [21.5, 507.0], [21.6, 507.0], [21.7, 510.0], [21.8, 510.0], [21.9, 510.0], [22.0, 511.0], [22.1, 512.0], [22.2, 512.0], [22.3, 512.0], [22.4, 512.0], [22.5, 512.0], [22.6, 513.0], [22.7, 513.0], [22.8, 514.0], [22.9, 518.0], [23.0, 518.0], [23.1, 518.0], [23.2, 519.0], [23.3, 519.0], [23.4, 519.0], [23.5, 519.0], [23.6, 520.0], [23.7, 521.0], [23.8, 521.0], [23.9, 521.0], [24.0, 521.0], [24.1, 523.0], [24.2, 523.0], [24.3, 524.0], [24.4, 526.0], [24.5, 526.0], [24.6, 526.0], [24.7, 526.0], [24.8, 526.0], [24.9, 527.0], [25.0, 527.0], [25.1, 528.0], [25.2, 528.0], [25.3, 528.0], [25.4, 529.0], [25.5, 530.0], [25.6, 533.0], [25.7, 533.0], [25.8, 533.0], [25.9, 534.0], [26.0, 534.0], [26.1, 534.0], [26.2, 535.0], [26.3, 536.0], [26.4, 536.0], [26.5, 536.0], [26.6, 536.0], [26.7, 537.0], [26.8, 537.0], [26.9, 538.0], [27.0, 538.0], [27.1, 539.0], [27.2, 539.0], [27.3, 540.0], [27.4, 540.0], [27.5, 542.0], [27.6, 542.0], [27.7, 542.0], [27.8, 542.0], [27.9, 544.0], [28.0, 544.0], [28.1, 544.0], [28.2, 545.0], [28.3, 545.0], [28.4, 545.0], [28.5, 548.0], [28.6, 549.0], [28.7, 549.0], [28.8, 550.0], [28.9, 551.0], [29.0, 551.0], [29.1, 551.0], [29.2, 552.0], [29.3, 552.0], [29.4, 555.0], [29.5, 555.0], [29.6, 556.0], [29.7, 556.0], [29.8, 557.0], [29.9, 557.0], [30.0, 559.0], [30.1, 560.0], [30.2, 560.0], [30.3, 562.0], [30.4, 562.0], [30.5, 563.0], [30.6, 563.0], [30.7, 563.0], [30.8, 563.0], [30.9, 564.0], [31.0, 564.0], [31.1, 566.0], [31.2, 567.0], [31.3, 570.0], [31.4, 570.0], [31.5, 570.0], [31.6, 570.0], [31.7, 570.0], [31.8, 571.0], [31.9, 571.0], [32.0, 574.0], [32.1, 574.0], [32.2, 576.0], [32.3, 578.0], [32.4, 579.0], [32.5, 579.0], [32.6, 579.0], [32.7, 579.0], [32.8, 579.0], [32.9, 579.0], [33.0, 580.0], [33.1, 582.0], [33.2, 583.0], [33.3, 583.0], [33.4, 585.0], [33.5, 585.0], [33.6, 585.0], [33.7, 587.0], [33.8, 588.0], [33.9, 589.0], [34.0, 589.0], [34.1, 591.0], [34.2, 591.0], [34.3, 591.0], [34.4, 591.0], [34.5, 592.0], [34.6, 594.0], [34.7, 596.0], [34.8, 596.0], [34.9, 597.0], [35.0, 598.0], [35.1, 598.0], [35.2, 600.0], [35.3, 601.0], [35.4, 602.0], [35.5, 602.0], [35.6, 604.0], [35.7, 605.0], [35.8, 605.0], [35.9, 605.0], [36.0, 605.0], [36.1, 607.0], [36.2, 607.0], [36.3, 607.0], [36.4, 607.0], [36.5, 608.0], [36.6, 609.0], [36.7, 609.0], [36.8, 610.0], [36.9, 611.0], [37.0, 611.0], [37.1, 612.0], [37.2, 612.0], [37.3, 612.0], [37.4, 612.0], [37.5, 613.0], [37.6, 616.0], [37.7, 616.0], [37.8, 616.0], [37.9, 617.0], [38.0, 618.0], [38.1, 618.0], [38.2, 618.0], [38.3, 618.0], [38.4, 619.0], [38.5, 619.0], [38.6, 621.0], [38.7, 623.0], [38.8, 624.0], [38.9, 624.0], [39.0, 626.0], [39.1, 626.0], [39.2, 629.0], [39.3, 629.0], [39.4, 629.0], [39.5, 634.0], [39.6, 634.0], [39.7, 634.0], [39.8, 634.0], [39.9, 635.0], [40.0, 635.0], [40.1, 635.0], [40.2, 635.0], [40.3, 636.0], [40.4, 636.0], [40.5, 636.0], [40.6, 637.0], [40.7, 640.0], [40.8, 640.0], [40.9, 640.0], [41.0, 643.0], [41.1, 647.0], [41.2, 647.0], [41.3, 649.0], [41.4, 650.0], [41.5, 651.0], [41.6, 651.0], [41.7, 652.0], [41.8, 658.0], [41.9, 658.0], [42.0, 659.0], [42.1, 662.0], [42.2, 662.0], [42.3, 662.0], [42.4, 664.0], [42.5, 665.0], [42.6, 671.0], [42.7, 671.0], [42.8, 673.0], [42.9, 676.0], [43.0, 677.0], [43.1, 677.0], [43.2, 679.0], [43.3, 680.0], [43.4, 680.0], [43.5, 681.0], [43.6, 685.0], [43.7, 686.0], [43.8, 686.0], [43.9, 688.0], [44.0, 689.0], [44.1, 689.0], [44.2, 689.0], [44.3, 693.0], [44.4, 693.0], [44.5, 695.0], [44.6, 695.0], [44.7, 695.0], [44.8, 703.0], [44.9, 704.0], [45.0, 704.0], [45.1, 704.0], [45.2, 705.0], [45.3, 705.0], [45.4, 705.0], [45.5, 705.0], [45.6, 705.0], [45.7, 705.0], [45.8, 707.0], [45.9, 710.0], [46.0, 710.0], [46.1, 710.0], [46.2, 712.0], [46.3, 712.0], [46.4, 714.0], [46.5, 714.0], [46.6, 715.0], [46.7, 715.0], [46.8, 715.0], [46.9, 718.0], [47.0, 721.0], [47.1, 722.0], [47.2, 722.0], [47.3, 722.0], [47.4, 724.0], [47.5, 725.0], [47.6, 725.0], [47.7, 726.0], [47.8, 727.0], [47.9, 728.0], [48.0, 728.0], [48.1, 728.0], [48.2, 729.0], [48.3, 730.0], [48.4, 730.0], [48.5, 730.0], [48.6, 731.0], [48.7, 731.0], [48.8, 731.0], [48.9, 731.0], [49.0, 731.0], [49.1, 731.0], [49.2, 732.0], [49.3, 732.0], [49.4, 732.0], [49.5, 732.0], [49.6, 735.0], [49.7, 735.0], [49.8, 737.0], [49.9, 737.0], [50.0, 739.0], [50.1, 741.0], [50.2, 741.0], [50.3, 744.0], [50.4, 745.0], [50.5, 745.0], [50.6, 745.0], [50.7, 745.0], [50.8, 746.0], [50.9, 746.0], [51.0, 746.0], [51.1, 748.0], [51.2, 751.0], [51.3, 752.0], [51.4, 752.0], [51.5, 753.0], [51.6, 756.0], [51.7, 756.0], [51.8, 758.0], [51.9, 763.0], [52.0, 764.0], [52.1, 764.0], [52.2, 765.0], [52.3, 765.0], [52.4, 765.0], [52.5, 765.0], [52.6, 767.0], [52.7, 768.0], [52.8, 769.0], [52.9, 769.0], [53.0, 770.0], [53.1, 773.0], [53.2, 774.0], [53.3, 774.0], [53.4, 776.0], [53.5, 778.0], [53.6, 778.0], [53.7, 780.0], [53.8, 780.0], [53.9, 781.0], [54.0, 781.0], [54.1, 784.0], [54.2, 785.0], [54.3, 789.0], [54.4, 789.0], [54.5, 789.0], [54.6, 790.0], [54.7, 792.0], [54.8, 792.0], [54.9, 792.0], [55.0, 793.0], [55.1, 793.0], [55.2, 794.0], [55.3, 798.0], [55.4, 799.0], [55.5, 799.0], [55.6, 800.0], [55.7, 803.0], [55.8, 803.0], [55.9, 803.0], [56.0, 805.0], [56.1, 807.0], [56.2, 807.0], [56.3, 807.0], [56.4, 807.0], [56.5, 809.0], [56.6, 809.0], [56.7, 809.0], [56.8, 811.0], [56.9, 817.0], [57.0, 817.0], [57.1, 818.0], [57.2, 819.0], [57.3, 819.0], [57.4, 819.0], [57.5, 821.0], [57.6, 821.0], [57.7, 823.0], [57.8, 823.0], [57.9, 823.0], [58.0, 826.0], [58.1, 827.0], [58.2, 827.0], [58.3, 828.0], [58.4, 831.0], [58.5, 831.0], [58.6, 836.0], [58.7, 837.0], [58.8, 837.0], [58.9, 837.0], [59.0, 840.0], [59.1, 842.0], [59.2, 843.0], [59.3, 843.0], [59.4, 844.0], [59.5, 844.0], [59.6, 848.0], [59.7, 848.0], [59.8, 848.0], [59.9, 849.0], [60.0, 849.0], [60.1, 849.0], [60.2, 851.0], [60.3, 854.0], [60.4, 854.0], [60.5, 856.0], [60.6, 857.0], [60.7, 858.0], [60.8, 858.0], [60.9, 861.0], [61.0, 864.0], [61.1, 866.0], [61.2, 866.0], [61.3, 866.0], [61.4, 866.0], [61.5, 870.0], [61.6, 870.0], [61.7, 870.0], [61.8, 871.0], [61.9, 871.0], [62.0, 871.0], [62.1, 871.0], [62.2, 872.0], [62.3, 872.0], [62.4, 873.0], [62.5, 873.0], [62.6, 874.0], [62.7, 874.0], [62.8, 875.0], [62.9, 876.0], [63.0, 879.0], [63.1, 879.0], [63.2, 880.0], [63.3, 881.0], [63.4, 881.0], [63.5, 884.0], [63.6, 887.0], [63.7, 890.0], [63.8, 890.0], [63.9, 892.0], [64.0, 893.0], [64.1, 894.0], [64.2, 894.0], [64.3, 894.0], [64.4, 895.0], [64.5, 901.0], [64.6, 901.0], [64.7, 902.0], [64.8, 903.0], [64.9, 905.0], [65.0, 905.0], [65.1, 905.0], [65.2, 906.0], [65.3, 906.0], [65.4, 908.0], [65.5, 909.0], [65.6, 910.0], [65.7, 910.0], [65.8, 913.0], [65.9, 916.0], [66.0, 918.0], [66.1, 918.0], [66.2, 918.0], [66.3, 921.0], [66.4, 925.0], [66.5, 925.0], [66.6, 929.0], [66.7, 929.0], [66.8, 929.0], [66.9, 930.0], [67.0, 930.0], [67.1, 930.0], [67.2, 930.0], [67.3, 931.0], [67.4, 931.0], [67.5, 933.0], [67.6, 933.0], [67.7, 937.0], [67.8, 938.0], [67.9, 943.0], [68.0, 943.0], [68.1, 945.0], [68.2, 946.0], [68.3, 948.0], [68.4, 948.0], [68.5, 950.0], [68.6, 951.0], [68.7, 951.0], [68.8, 951.0], [68.9, 951.0], [69.0, 954.0], [69.1, 954.0], [69.2, 956.0], [69.3, 959.0], [69.4, 960.0], [69.5, 960.0], [69.6, 962.0], [69.7, 963.0], [69.8, 963.0], [69.9, 963.0], [70.0, 965.0], [70.1, 966.0], [70.2, 966.0], [70.3, 967.0], [70.4, 967.0], [70.5, 968.0], [70.6, 968.0], [70.7, 969.0], [70.8, 972.0], [70.9, 977.0], [71.0, 977.0], [71.1, 978.0], [71.2, 980.0], [71.3, 981.0], [71.4, 981.0], [71.5, 983.0], [71.6, 983.0], [71.7, 983.0], [71.8, 985.0], [71.9, 986.0], [72.0, 988.0], [72.1, 988.0], [72.2, 988.0], [72.3, 993.0], [72.4, 998.0], [72.5, 998.0], [72.6, 998.0], [72.7, 998.0], [72.8, 998.0], [72.9, 998.0], [73.0, 998.0], [73.1, 999.0], [73.2, 999.0], [73.3, 999.0], [73.4, 1001.0], [73.5, 1004.0], [73.6, 1004.0], [73.7, 1004.0], [73.8, 1004.0], [73.9, 1006.0], [74.0, 1006.0], [74.1, 1007.0], [74.2, 1010.0], [74.3, 1012.0], [74.4, 1012.0], [74.5, 1013.0], [74.6, 1013.0], [74.7, 1014.0], [74.8, 1014.0], [74.9, 1014.0], [75.0, 1015.0], [75.1, 1015.0], [75.2, 1018.0], [75.3, 1018.0], [75.4, 1018.0], [75.5, 1018.0], [75.6, 1020.0], [75.7, 1020.0], [75.8, 1021.0], [75.9, 1021.0], [76.0, 1024.0], [76.1, 1025.0], [76.2, 1025.0], [76.3, 1025.0], [76.4, 1026.0], [76.5, 1027.0], [76.6, 1030.0], [76.7, 1030.0], [76.8, 1033.0], [76.9, 1035.0], [77.0, 1035.0], [77.1, 1036.0], [77.2, 1037.0], [77.3, 1037.0], [77.4, 1037.0], [77.5, 1039.0], [77.6, 1039.0], [77.7, 1040.0], [77.8, 1040.0], [77.9, 1041.0], [78.0, 1041.0], [78.1, 1041.0], [78.2, 1041.0], [78.3, 1041.0], [78.4, 1048.0], [78.5, 1048.0], [78.6, 1049.0], [78.7, 1049.0], [78.8, 1051.0], [78.9, 1051.0], [79.0, 1052.0], [79.1, 1053.0], [79.2, 1062.0], [79.3, 1062.0], [79.4, 1062.0], [79.5, 1063.0], [79.6, 1063.0], [79.7, 1063.0], [79.8, 1066.0], [79.9, 1071.0], [80.0, 1073.0], [80.1, 1073.0], [80.2, 1076.0], [80.3, 1080.0], [80.4, 1080.0], [80.5, 1080.0], [80.6, 1080.0], [80.7, 1081.0], [80.8, 1081.0], [80.9, 1081.0], [81.0, 1081.0], [81.1, 1088.0], [81.2, 1088.0], [81.3, 1089.0], [81.4, 1089.0], [81.5, 1090.0], [81.6, 1090.0], [81.7, 1091.0], [81.8, 1092.0], [81.9, 1092.0], [82.0, 1096.0], [82.1, 1097.0], [82.2, 1098.0], [82.3, 1098.0], [82.4, 1107.0], [82.5, 1117.0], [82.6, 1118.0], [82.7, 1118.0], [82.8, 1120.0], [82.9, 1121.0], [83.0, 1128.0], [83.1, 1128.0], [83.2, 1131.0], [83.3, 1132.0], [83.4, 1132.0], [83.5, 1142.0], [83.6, 1145.0], [83.7, 1149.0], [83.8, 1149.0], [83.9, 1150.0], [84.0, 1151.0], [84.1, 1151.0], [84.2, 1151.0], [84.3, 1157.0], [84.4, 1157.0], [84.5, 1159.0], [84.6, 1159.0], [84.7, 1160.0], [84.8, 1161.0], [84.9, 1162.0], [85.0, 1162.0], [85.1, 1167.0], [85.2, 1169.0], [85.3, 1169.0], [85.4, 1170.0], [85.5, 1173.0], [85.6, 1175.0], [85.7, 1175.0], [85.8, 1180.0], [85.9, 1181.0], [86.0, 1183.0], [86.1, 1183.0], [86.2, 1187.0], [86.3, 1188.0], [86.4, 1189.0], [86.5, 1189.0], [86.6, 1191.0], [86.7, 1194.0], [86.8, 1194.0], [86.9, 1195.0], [87.0, 1195.0], [87.1, 1198.0], [87.2, 1198.0], [87.3, 1203.0], [87.4, 1204.0], [87.5, 1205.0], [87.6, 1205.0], [87.7, 1208.0], [87.8, 1215.0], [87.9, 1222.0], [88.0, 1222.0], [88.1, 1227.0], [88.2, 1227.0], [88.3, 1229.0], [88.4, 1229.0], [88.5, 1229.0], [88.6, 1237.0], [88.7, 1237.0], [88.8, 1238.0], [88.9, 1244.0], [89.0, 1245.0], [89.1, 1245.0], [89.2, 1245.0], [89.3, 1245.0], [89.4, 1246.0], [89.5, 1246.0], [89.6, 1246.0], [89.7, 1253.0], [89.8, 1262.0], [89.9, 1262.0], [90.0, 1262.0], [90.1, 1264.0], [90.2, 1264.0], [90.3, 1268.0], [90.4, 1269.0], [90.5, 1281.0], [90.6, 1281.0], [90.7, 1283.0], [90.8, 1283.0], [90.9, 1308.0], [91.0, 1308.0], [91.1, 1310.0], [91.2, 1317.0], [91.3, 1317.0], [91.4, 1317.0], [91.5, 1326.0], [91.6, 1333.0], [91.7, 1333.0], [91.8, 1337.0], [91.9, 1342.0], [92.0, 1347.0], [92.1, 1347.0], [92.2, 1352.0], [92.3, 1359.0], [92.4, 1359.0], [92.5, 1359.0], [92.6, 1361.0], [92.7, 1367.0], [92.8, 1374.0], [92.9, 1374.0], [93.0, 1384.0], [93.1, 1387.0], [93.2, 1390.0], [93.3, 1390.0], [93.4, 1393.0], [93.5, 1394.0], [93.6, 1394.0], [93.7, 1399.0], [93.8, 1400.0], [93.9, 1415.0], [94.0, 1415.0], [94.1, 1417.0], [94.2, 1466.0], [94.3, 1467.0], [94.4, 1467.0], [94.5, 1469.0], [94.6, 1478.0], [94.7, 1479.0], [94.8, 1479.0], [94.9, 1482.0], [95.0, 1487.0], [95.1, 1487.0], [95.2, 1492.0], [95.3, 1495.0], [95.4, 1511.0], [95.5, 1511.0], [95.6, 1516.0], [95.7, 1522.0], [95.8, 1544.0], [95.9, 1544.0], [96.0, 1550.0], [96.1, 1550.0], [96.2, 1554.0], [96.3, 1554.0], [96.4, 1558.0], [96.5, 1577.0], [96.6, 1600.0], [96.7, 1600.0], [96.8, 1608.0], [96.9, 1627.0], [97.0, 1627.0], [97.1, 1643.0], [97.2, 1653.0], [97.3, 1692.0], [97.4, 1692.0], [97.5, 1761.0], [97.6, 1761.0], [97.7, 1802.0], [97.8, 1802.0], [97.9, 1803.0], [98.0, 1887.0], [98.1, 1946.0], [98.2, 1946.0], [98.3, 2584.0], [98.4, 2609.0], [98.5, 2609.0], [98.6, 2631.0], [98.7, 2661.0], [98.8, 2737.0], [98.9, 2737.0], [99.0, 2757.0], [99.1, 2794.0], [99.2, 2914.0], [99.3, 2914.0], [99.4, 2958.0], [99.5, 2978.0], [99.6, 2983.0], [99.7, 2983.0], [99.8, 3156.0], [99.9, 3681.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 105.0, "series": [{"data": [[600.0, 71.0], [700.0, 79.0], [800.0, 66.0], [900.0, 65.0], [1000.0, 66.0], [1100.0, 36.0], [1200.0, 27.0], [1300.0, 21.0], [1400.0, 12.0], [1500.0, 9.0], [100.0, 12.0], [1600.0, 6.0], [1700.0, 2.0], [1800.0, 3.0], [1900.0, 1.0], [2500.0, 1.0], [2600.0, 3.0], [2700.0, 3.0], [2900.0, 4.0], [3100.0, 1.0], [200.0, 29.0], [3600.0, 1.0], [300.0, 46.0], [400.0, 66.0], [500.0, 105.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 34.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 547.0, "series": [{"data": [[0.0, 154.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 547.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 34.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.876404494382022, "minX": 1.60262922E12, "maxY": 10.0, "series": [{"data": [[1.60262928E12, 9.876404494382022], [1.60262922E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262928E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 295.0, "minX": 1.0, "maxY": 986.0, "series": [{"data": [[8.0, 555.0], [4.0, 744.0], [2.0, 534.0], [1.0, 986.0], [10.0, 814.9381017881714], [5.0, 540.0], [6.0, 295.0], [3.0, 571.0], [7.0, 512.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 812.5129251700689]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2670.65, "minX": 1.60262922E12, "maxY": 1008123.7, "series": [{"data": [[1.60262928E12, 827630.9666666667], [1.60262922E12, 1008123.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60262928E12, 2670.65], [1.60262922E12, 2852.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262928E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 793.5449438202247, "minX": 1.60262922E12, "maxY": 830.3298153034299, "series": [{"data": [[1.60262928E12, 793.5449438202247], [1.60262922E12, 830.3298153034299]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262928E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 792.4157303370787, "minX": 1.60262922E12, "maxY": 829.0501319261213, "series": [{"data": [[1.60262928E12, 792.4157303370787], [1.60262922E12, 829.0501319261213]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262928E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00842696629213483, "minX": 1.60262922E12, "maxY": 0.22163588390501354, "series": [{"data": [[1.60262928E12, 0.00842696629213483], [1.60262922E12, 0.22163588390501354]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262928E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.60262922E12, "maxY": 3681.0, "series": [{"data": [[1.60262928E12, 2983.0], [1.60262922E12, 3681.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60262928E12, 209.880996850729], [1.60262922E12, 183.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60262928E12, 221.7691012597084], [1.60262922E12, 183.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60262928E12, 216.48549842536448], [1.60262922E12, 183.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60262928E12, 189.0], [1.60262922E12, 179.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60262928E12, 748.0], [1.60262922E12, 731.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262928E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 467.0, "minX": 2.0, "maxY": 2620.0, "series": [{"data": [[8.0, 2620.0], [2.0, 760.0], [9.0, 1009.5], [10.0, 887.0], [11.0, 903.0], [12.0, 775.0], [13.0, 837.0], [14.0, 719.5], [15.0, 547.5], [16.0, 598.0], [17.0, 587.5], [18.0, 545.0], [19.0, 467.0], [20.0, 563.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 467.0, "minX": 2.0, "maxY": 2616.5, "series": [{"data": [[8.0, 2616.5], [2.0, 759.5], [9.0, 1008.5], [10.0, 885.0], [11.0, 902.0], [12.0, 775.0], [13.0, 837.0], [14.0, 716.5], [15.0, 547.0], [16.0, 597.5], [17.0, 587.5], [18.0, 544.5], [19.0, 467.0], [20.0, 562.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.766666666666667, "minX": 1.60262922E12, "maxY": 6.483333333333333, "series": [{"data": [[1.60262928E12, 5.766666666666667], [1.60262922E12, 6.483333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262928E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.933333333333334, "minX": 1.60262922E12, "maxY": 6.316666666666666, "series": [{"data": [[1.60262928E12, 5.933333333333334], [1.60262922E12, 6.316666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262928E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.933333333333334, "minX": 1.60262922E12, "maxY": 6.316666666666666, "series": [{"data": [[1.60262928E12, 5.933333333333334], [1.60262922E12, 6.316666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262928E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.933333333333334, "minX": 1.60262922E12, "maxY": 6.316666666666666, "series": [{"data": [[1.60262928E12, 5.933333333333334], [1.60262922E12, 6.316666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262928E12, "title": "Total Transactions Per Second"}},
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

