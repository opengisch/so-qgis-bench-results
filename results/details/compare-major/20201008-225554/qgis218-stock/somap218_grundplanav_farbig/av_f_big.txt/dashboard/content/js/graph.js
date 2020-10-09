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
        data: {"result": {"minY": 219.0, "minX": 0.0, "maxY": 9554.0, "series": [{"data": [[0.0, 219.0], [0.1, 219.0], [0.2, 222.0], [0.3, 224.0], [0.4, 224.0], [0.5, 225.0], [0.6, 226.0], [0.7, 228.0], [0.8, 228.0], [0.9, 228.0], [1.0, 229.0], [1.1, 231.0], [1.2, 231.0], [1.3, 238.0], [1.4, 240.0], [1.5, 245.0], [1.6, 245.0], [1.7, 246.0], [1.8, 247.0], [1.9, 247.0], [2.0, 250.0], [2.1, 251.0], [2.2, 253.0], [2.3, 253.0], [2.4, 254.0], [2.5, 254.0], [2.6, 261.0], [2.7, 261.0], [2.8, 262.0], [2.9, 262.0], [3.0, 268.0], [3.1, 268.0], [3.2, 268.0], [3.3, 268.0], [3.4, 268.0], [3.5, 273.0], [3.6, 278.0], [3.7, 280.0], [3.8, 280.0], [3.9, 284.0], [4.0, 293.0], [4.1, 294.0], [4.2, 294.0], [4.3, 298.0], [4.4, 306.0], [4.5, 307.0], [4.6, 307.0], [4.7, 312.0], [4.8, 316.0], [4.9, 319.0], [5.0, 319.0], [5.1, 322.0], [5.2, 324.0], [5.3, 324.0], [5.4, 327.0], [5.5, 329.0], [5.6, 330.0], [5.7, 330.0], [5.8, 333.0], [5.9, 336.0], [6.0, 336.0], [6.1, 336.0], [6.2, 342.0], [6.3, 342.0], [6.4, 342.0], [6.5, 342.0], [6.6, 344.0], [6.7, 345.0], [6.8, 345.0], [6.9, 349.0], [7.0, 351.0], [7.1, 354.0], [7.2, 354.0], [7.3, 356.0], [7.4, 356.0], [7.5, 358.0], [7.6, 358.0], [7.7, 359.0], [7.8, 360.0], [7.9, 362.0], [8.0, 362.0], [8.1, 363.0], [8.2, 364.0], [8.3, 365.0], [8.4, 365.0], [8.5, 366.0], [8.6, 367.0], [8.7, 367.0], [8.8, 367.0], [8.9, 371.0], [9.0, 372.0], [9.1, 372.0], [9.2, 374.0], [9.3, 374.0], [9.4, 375.0], [9.5, 375.0], [9.6, 379.0], [9.7, 380.0], [9.8, 384.0], [9.9, 384.0], [10.0, 385.0], [10.1, 385.0], [10.2, 385.0], [10.3, 386.0], [10.4, 387.0], [10.5, 390.0], [10.6, 390.0], [10.7, 390.0], [10.8, 391.0], [10.9, 392.0], [11.0, 392.0], [11.1, 394.0], [11.2, 395.0], [11.3, 396.0], [11.4, 396.0], [11.5, 396.0], [11.6, 396.0], [11.7, 396.0], [11.8, 398.0], [11.9, 399.0], [12.0, 400.0], [12.1, 400.0], [12.2, 400.0], [12.3, 403.0], [12.4, 405.0], [12.5, 405.0], [12.6, 405.0], [12.7, 406.0], [12.8, 406.0], [12.9, 406.0], [13.0, 407.0], [13.1, 408.0], [13.2, 408.0], [13.3, 408.0], [13.4, 411.0], [13.5, 411.0], [13.6, 411.0], [13.7, 411.0], [13.8, 412.0], [13.9, 413.0], [14.0, 413.0], [14.1, 413.0], [14.2, 415.0], [14.3, 416.0], [14.4, 416.0], [14.5, 416.0], [14.6, 418.0], [14.7, 419.0], [14.8, 419.0], [14.9, 420.0], [15.0, 420.0], [15.1, 420.0], [15.2, 421.0], [15.3, 422.0], [15.4, 424.0], [15.5, 424.0], [15.6, 424.0], [15.7, 425.0], [15.8, 425.0], [15.9, 425.0], [16.0, 429.0], [16.1, 431.0], [16.2, 433.0], [16.3, 433.0], [16.4, 433.0], [16.5, 433.0], [16.6, 434.0], [16.7, 434.0], [16.8, 434.0], [16.9, 436.0], [17.0, 436.0], [17.1, 437.0], [17.2, 438.0], [17.3, 439.0], [17.4, 439.0], [17.5, 440.0], [17.6, 440.0], [17.7, 442.0], [17.8, 442.0], [17.9, 445.0], [18.0, 445.0], [18.1, 446.0], [18.2, 446.0], [18.3, 447.0], [18.4, 449.0], [18.5, 449.0], [18.6, 449.0], [18.7, 450.0], [18.8, 452.0], [18.9, 452.0], [19.0, 455.0], [19.1, 455.0], [19.2, 455.0], [19.3, 455.0], [19.4, 456.0], [19.5, 456.0], [19.6, 456.0], [19.7, 456.0], [19.8, 456.0], [19.9, 457.0], [20.0, 458.0], [20.1, 458.0], [20.2, 459.0], [20.3, 460.0], [20.4, 460.0], [20.5, 461.0], [20.6, 461.0], [20.7, 462.0], [20.8, 462.0], [20.9, 462.0], [21.0, 463.0], [21.1, 463.0], [21.2, 463.0], [21.3, 464.0], [21.4, 466.0], [21.5, 467.0], [21.6, 467.0], [21.7, 471.0], [21.8, 473.0], [21.9, 473.0], [22.0, 473.0], [22.1, 474.0], [22.2, 474.0], [22.3, 474.0], [22.4, 475.0], [22.5, 475.0], [22.6, 477.0], [22.7, 477.0], [22.8, 479.0], [22.9, 480.0], [23.0, 481.0], [23.1, 481.0], [23.2, 482.0], [23.3, 483.0], [23.4, 483.0], [23.5, 483.0], [23.6, 483.0], [23.7, 484.0], [23.8, 484.0], [23.9, 486.0], [24.0, 486.0], [24.1, 486.0], [24.2, 486.0], [24.3, 486.0], [24.4, 487.0], [24.5, 487.0], [24.6, 487.0], [24.7, 487.0], [24.8, 489.0], [24.9, 492.0], [25.0, 492.0], [25.1, 492.0], [25.2, 493.0], [25.3, 493.0], [25.4, 496.0], [25.5, 496.0], [25.6, 496.0], [25.7, 496.0], [25.8, 496.0], [25.9, 497.0], [26.0, 497.0], [26.1, 497.0], [26.2, 497.0], [26.3, 498.0], [26.4, 501.0], [26.5, 501.0], [26.6, 501.0], [26.7, 503.0], [26.8, 503.0], [26.9, 504.0], [27.0, 504.0], [27.1, 506.0], [27.2, 506.0], [27.3, 506.0], [27.4, 506.0], [27.5, 507.0], [27.6, 507.0], [27.7, 507.0], [27.8, 509.0], [27.9, 511.0], [28.0, 511.0], [28.1, 511.0], [28.2, 512.0], [28.3, 513.0], [28.4, 513.0], [28.5, 517.0], [28.6, 520.0], [28.7, 520.0], [28.8, 522.0], [28.9, 523.0], [29.0, 524.0], [29.1, 524.0], [29.2, 530.0], [29.3, 530.0], [29.4, 531.0], [29.5, 531.0], [29.6, 533.0], [29.7, 534.0], [29.8, 536.0], [29.9, 536.0], [30.0, 537.0], [30.1, 538.0], [30.2, 538.0], [30.3, 539.0], [30.4, 539.0], [30.5, 540.0], [30.6, 540.0], [30.7, 541.0], [30.8, 541.0], [30.9, 542.0], [31.0, 542.0], [31.1, 542.0], [31.2, 544.0], [31.3, 545.0], [31.4, 545.0], [31.5, 550.0], [31.6, 554.0], [31.7, 554.0], [31.8, 554.0], [31.9, 556.0], [32.0, 559.0], [32.1, 559.0], [32.2, 559.0], [32.3, 562.0], [32.4, 563.0], [32.5, 563.0], [32.6, 563.0], [32.7, 563.0], [32.8, 564.0], [32.9, 564.0], [33.0, 564.0], [33.1, 565.0], [33.2, 565.0], [33.3, 565.0], [33.4, 565.0], [33.5, 565.0], [33.6, 565.0], [33.7, 565.0], [33.8, 566.0], [33.9, 566.0], [34.0, 566.0], [34.1, 568.0], [34.2, 569.0], [34.3, 570.0], [34.4, 570.0], [34.5, 570.0], [34.6, 571.0], [34.7, 571.0], [34.8, 571.0], [34.9, 571.0], [35.0, 572.0], [35.1, 572.0], [35.2, 573.0], [35.3, 575.0], [35.4, 576.0], [35.5, 576.0], [35.6, 576.0], [35.7, 577.0], [35.8, 579.0], [35.9, 579.0], [36.0, 579.0], [36.1, 581.0], [36.2, 581.0], [36.3, 581.0], [36.4, 582.0], [36.5, 582.0], [36.6, 584.0], [36.7, 584.0], [36.8, 584.0], [36.9, 585.0], [37.0, 585.0], [37.1, 586.0], [37.2, 586.0], [37.3, 586.0], [37.4, 586.0], [37.5, 587.0], [37.6, 587.0], [37.7, 588.0], [37.8, 588.0], [37.9, 588.0], [38.0, 591.0], [38.1, 593.0], [38.2, 593.0], [38.3, 594.0], [38.4, 594.0], [38.5, 594.0], [38.6, 596.0], [38.7, 596.0], [38.8, 596.0], [38.9, 596.0], [39.0, 597.0], [39.1, 597.0], [39.2, 598.0], [39.3, 598.0], [39.4, 598.0], [39.5, 602.0], [39.6, 603.0], [39.7, 603.0], [39.8, 605.0], [39.9, 605.0], [40.0, 605.0], [40.1, 606.0], [40.2, 607.0], [40.3, 608.0], [40.4, 608.0], [40.5, 608.0], [40.6, 610.0], [40.7, 612.0], [40.8, 612.0], [40.9, 612.0], [41.0, 612.0], [41.1, 613.0], [41.2, 613.0], [41.3, 613.0], [41.4, 614.0], [41.5, 616.0], [41.6, 616.0], [41.7, 616.0], [41.8, 617.0], [41.9, 617.0], [42.0, 618.0], [42.1, 618.0], [42.2, 620.0], [42.3, 620.0], [42.4, 620.0], [42.5, 621.0], [42.6, 623.0], [42.7, 623.0], [42.8, 623.0], [42.9, 623.0], [43.0, 624.0], [43.1, 624.0], [43.2, 624.0], [43.3, 626.0], [43.4, 626.0], [43.5, 626.0], [43.6, 627.0], [43.7, 629.0], [43.8, 629.0], [43.9, 634.0], [44.0, 636.0], [44.1, 637.0], [44.2, 637.0], [44.3, 638.0], [44.4, 639.0], [44.5, 640.0], [44.6, 640.0], [44.7, 641.0], [44.8, 641.0], [44.9, 643.0], [45.0, 643.0], [45.1, 643.0], [45.2, 644.0], [45.3, 644.0], [45.4, 647.0], [45.5, 648.0], [45.6, 648.0], [45.7, 648.0], [45.8, 649.0], [45.9, 651.0], [46.0, 651.0], [46.1, 651.0], [46.2, 651.0], [46.3, 652.0], [46.4, 652.0], [46.5, 652.0], [46.6, 653.0], [46.7, 653.0], [46.8, 653.0], [46.9, 653.0], [47.0, 653.0], [47.1, 653.0], [47.2, 653.0], [47.3, 656.0], [47.4, 656.0], [47.5, 657.0], [47.6, 657.0], [47.7, 658.0], [47.8, 659.0], [47.9, 660.0], [48.0, 660.0], [48.1, 661.0], [48.2, 661.0], [48.3, 662.0], [48.4, 662.0], [48.5, 663.0], [48.6, 664.0], [48.7, 664.0], [48.8, 664.0], [48.9, 665.0], [49.0, 667.0], [49.1, 667.0], [49.2, 667.0], [49.3, 669.0], [49.4, 670.0], [49.5, 670.0], [49.6, 672.0], [49.7, 672.0], [49.8, 674.0], [49.9, 674.0], [50.0, 674.0], [50.1, 675.0], [50.2, 675.0], [50.3, 678.0], [50.4, 678.0], [50.5, 681.0], [50.6, 681.0], [50.7, 682.0], [50.8, 682.0], [50.9, 682.0], [51.0, 682.0], [51.1, 683.0], [51.2, 684.0], [51.3, 685.0], [51.4, 685.0], [51.5, 686.0], [51.6, 688.0], [51.7, 688.0], [51.8, 688.0], [51.9, 689.0], [52.0, 691.0], [52.1, 691.0], [52.2, 691.0], [52.3, 694.0], [52.4, 697.0], [52.5, 697.0], [52.6, 700.0], [52.7, 704.0], [52.8, 709.0], [52.9, 709.0], [53.0, 712.0], [53.1, 713.0], [53.2, 713.0], [53.3, 713.0], [53.4, 714.0], [53.5, 719.0], [53.6, 719.0], [53.7, 719.0], [53.8, 721.0], [53.9, 722.0], [54.0, 722.0], [54.1, 727.0], [54.2, 728.0], [54.3, 729.0], [54.4, 729.0], [54.5, 731.0], [54.6, 735.0], [54.7, 735.0], [54.8, 735.0], [54.9, 735.0], [55.0, 737.0], [55.1, 737.0], [55.2, 737.0], [55.3, 738.0], [55.4, 739.0], [55.5, 739.0], [55.6, 740.0], [55.7, 740.0], [55.8, 740.0], [55.9, 740.0], [56.0, 742.0], [56.1, 744.0], [56.2, 745.0], [56.3, 745.0], [56.4, 747.0], [56.5, 749.0], [56.6, 750.0], [56.7, 750.0], [56.8, 751.0], [56.9, 753.0], [57.0, 753.0], [57.1, 756.0], [57.2, 756.0], [57.3, 760.0], [57.4, 760.0], [57.5, 762.0], [57.6, 765.0], [57.7, 766.0], [57.8, 766.0], [57.9, 773.0], [58.0, 775.0], [58.1, 777.0], [58.2, 777.0], [58.3, 779.0], [58.4, 779.0], [58.5, 779.0], [58.6, 780.0], [58.7, 785.0], [58.8, 786.0], [58.9, 786.0], [59.0, 788.0], [59.1, 791.0], [59.2, 795.0], [59.3, 795.0], [59.4, 798.0], [59.5, 800.0], [59.6, 801.0], [59.7, 801.0], [59.8, 802.0], [59.9, 803.0], [60.0, 805.0], [60.1, 805.0], [60.2, 807.0], [60.3, 808.0], [60.4, 808.0], [60.5, 810.0], [60.6, 811.0], [60.7, 814.0], [60.8, 814.0], [60.9, 817.0], [61.0, 820.0], [61.1, 822.0], [61.2, 822.0], [61.3, 823.0], [61.4, 825.0], [61.5, 825.0], [61.6, 825.0], [61.7, 826.0], [61.8, 829.0], [61.9, 829.0], [62.0, 830.0], [62.1, 832.0], [62.2, 834.0], [62.3, 834.0], [62.4, 835.0], [62.5, 837.0], [62.6, 837.0], [62.7, 837.0], [62.8, 847.0], [62.9, 847.0], [63.0, 849.0], [63.1, 849.0], [63.2, 850.0], [63.3, 851.0], [63.4, 851.0], [63.5, 852.0], [63.6, 854.0], [63.7, 854.0], [63.8, 854.0], [63.9, 857.0], [64.0, 861.0], [64.1, 868.0], [64.2, 868.0], [64.3, 873.0], [64.4, 873.0], [64.5, 874.0], [64.6, 874.0], [64.7, 876.0], [64.8, 877.0], [64.9, 880.0], [65.0, 880.0], [65.1, 883.0], [65.2, 883.0], [65.3, 883.0], [65.4, 888.0], [65.5, 890.0], [65.6, 894.0], [65.7, 894.0], [65.8, 894.0], [65.9, 895.0], [66.0, 900.0], [66.1, 900.0], [66.2, 906.0], [66.3, 907.0], [66.4, 913.0], [66.5, 913.0], [66.6, 913.0], [66.7, 914.0], [66.8, 914.0], [66.9, 918.0], [67.0, 919.0], [67.1, 922.0], [67.2, 922.0], [67.3, 922.0], [67.4, 923.0], [67.5, 924.0], [67.6, 924.0], [67.7, 933.0], [67.8, 934.0], [67.9, 939.0], [68.0, 939.0], [68.1, 939.0], [68.2, 939.0], [68.3, 940.0], [68.4, 940.0], [68.5, 947.0], [68.6, 957.0], [68.7, 957.0], [68.8, 957.0], [68.9, 961.0], [69.0, 964.0], [69.1, 964.0], [69.2, 964.0], [69.3, 966.0], [69.4, 972.0], [69.5, 972.0], [69.6, 976.0], [69.7, 984.0], [69.8, 986.0], [69.9, 986.0], [70.0, 989.0], [70.1, 995.0], [70.2, 995.0], [70.3, 999.0], [70.4, 1003.0], [70.5, 1004.0], [70.6, 1004.0], [70.7, 1007.0], [70.8, 1011.0], [70.9, 1014.0], [71.0, 1014.0], [71.1, 1014.0], [71.2, 1015.0], [71.3, 1021.0], [71.4, 1021.0], [71.5, 1022.0], [71.6, 1022.0], [71.7, 1022.0], [71.8, 1024.0], [71.9, 1027.0], [72.0, 1030.0], [72.1, 1030.0], [72.2, 1032.0], [72.3, 1034.0], [72.4, 1034.0], [72.5, 1034.0], [72.6, 1035.0], [72.7, 1037.0], [72.8, 1040.0], [72.9, 1040.0], [73.0, 1043.0], [73.1, 1044.0], [73.2, 1046.0], [73.3, 1046.0], [73.4, 1047.0], [73.5, 1051.0], [73.6, 1051.0], [73.7, 1051.0], [73.8, 1052.0], [73.9, 1056.0], [74.0, 1056.0], [74.1, 1056.0], [74.2, 1061.0], [74.3, 1063.0], [74.4, 1063.0], [74.5, 1069.0], [74.6, 1071.0], [74.7, 1073.0], [74.8, 1073.0], [74.9, 1074.0], [75.0, 1075.0], [75.1, 1075.0], [75.2, 1076.0], [75.3, 1077.0], [75.4, 1077.0], [75.5, 1077.0], [75.6, 1077.0], [75.7, 1079.0], [75.8, 1079.0], [75.9, 1079.0], [76.0, 1085.0], [76.1, 1086.0], [76.2, 1087.0], [76.3, 1087.0], [76.4, 1098.0], [76.5, 1099.0], [76.6, 1105.0], [76.7, 1105.0], [76.8, 1112.0], [76.9, 1113.0], [77.0, 1113.0], [77.1, 1116.0], [77.2, 1123.0], [77.3, 1128.0], [77.4, 1128.0], [77.5, 1135.0], [77.6, 1137.0], [77.7, 1138.0], [77.8, 1138.0], [77.9, 1139.0], [78.0, 1141.0], [78.1, 1143.0], [78.2, 1143.0], [78.3, 1143.0], [78.4, 1144.0], [78.5, 1144.0], [78.6, 1145.0], [78.7, 1148.0], [78.8, 1151.0], [78.9, 1151.0], [79.0, 1151.0], [79.1, 1154.0], [79.2, 1156.0], [79.3, 1156.0], [79.4, 1167.0], [79.5, 1174.0], [79.6, 1175.0], [79.7, 1175.0], [79.8, 1179.0], [79.9, 1184.0], [80.0, 1185.0], [80.1, 1185.0], [80.2, 1188.0], [80.3, 1188.0], [80.4, 1188.0], [80.5, 1189.0], [80.6, 1191.0], [80.7, 1191.0], [80.8, 1191.0], [80.9, 1198.0], [81.0, 1205.0], [81.1, 1212.0], [81.2, 1212.0], [81.3, 1215.0], [81.4, 1218.0], [81.5, 1219.0], [81.6, 1219.0], [81.7, 1231.0], [81.8, 1232.0], [81.9, 1232.0], [82.0, 1235.0], [82.1, 1251.0], [82.2, 1256.0], [82.3, 1256.0], [82.4, 1266.0], [82.5, 1268.0], [82.6, 1271.0], [82.7, 1271.0], [82.8, 1273.0], [82.9, 1276.0], [83.0, 1287.0], [83.1, 1287.0], [83.2, 1289.0], [83.3, 1290.0], [83.4, 1290.0], [83.5, 1291.0], [83.6, 1292.0], [83.7, 1296.0], [83.8, 1296.0], [83.9, 1307.0], [84.0, 1310.0], [84.1, 1312.0], [84.2, 1312.0], [84.3, 1313.0], [84.4, 1322.0], [84.5, 1322.0], [84.6, 1322.0], [84.7, 1336.0], [84.8, 1341.0], [84.9, 1359.0], [85.0, 1359.0], [85.1, 1363.0], [85.2, 1367.0], [85.3, 1367.0], [85.4, 1372.0], [85.5, 1374.0], [85.6, 1379.0], [85.7, 1379.0], [85.8, 1381.0], [85.9, 1384.0], [86.0, 1392.0], [86.1, 1392.0], [86.2, 1399.0], [86.3, 1410.0], [86.4, 1417.0], [86.5, 1417.0], [86.6, 1420.0], [86.7, 1420.0], [86.8, 1420.0], [86.9, 1421.0], [87.0, 1421.0], [87.1, 1433.0], [87.2, 1433.0], [87.3, 1436.0], [87.4, 1443.0], [87.5, 1446.0], [87.6, 1446.0], [87.7, 1450.0], [87.8, 1451.0], [87.9, 1454.0], [88.0, 1454.0], [88.1, 1457.0], [88.2, 1473.0], [88.3, 1487.0], [88.4, 1487.0], [88.5, 1500.0], [88.6, 1505.0], [88.7, 1505.0], [88.8, 1508.0], [88.9, 1508.0], [89.0, 1509.0], [89.1, 1509.0], [89.2, 1514.0], [89.3, 1520.0], [89.4, 1522.0], [89.5, 1522.0], [89.6, 1524.0], [89.7, 1531.0], [89.8, 1532.0], [89.9, 1532.0], [90.0, 1537.0], [90.1, 1540.0], [90.2, 1540.0], [90.3, 1543.0], [90.4, 1561.0], [90.5, 1566.0], [90.6, 1566.0], [90.7, 1567.0], [90.8, 1574.0], [90.9, 1591.0], [91.0, 1591.0], [91.1, 1600.0], [91.2, 1609.0], [91.3, 1611.0], [91.4, 1611.0], [91.5, 1612.0], [91.6, 1620.0], [91.7, 1620.0], [91.8, 1622.0], [91.9, 1630.0], [92.0, 1643.0], [92.1, 1643.0], [92.2, 1650.0], [92.3, 1652.0], [92.4, 1661.0], [92.5, 1661.0], [92.6, 1667.0], [92.7, 1668.0], [92.8, 1671.0], [92.9, 1671.0], [93.0, 1689.0], [93.1, 1699.0], [93.2, 1702.0], [93.3, 1702.0], [93.4, 1710.0], [93.5, 1714.0], [93.6, 1714.0], [93.7, 1719.0], [93.8, 1725.0], [93.9, 1735.0], [94.0, 1735.0], [94.1, 1738.0], [94.2, 1747.0], [94.3, 1756.0], [94.4, 1756.0], [94.5, 1775.0], [94.6, 1777.0], [94.7, 1785.0], [94.8, 1785.0], [94.9, 1815.0], [95.0, 1817.0], [95.1, 1817.0], [95.2, 1825.0], [95.3, 1846.0], [95.4, 1855.0], [95.5, 1855.0], [95.6, 1904.0], [95.7, 1923.0], [95.8, 1935.0], [95.9, 1935.0], [96.0, 1936.0], [96.1, 1954.0], [96.2, 2002.0], [96.3, 2002.0], [96.4, 2029.0], [96.5, 2051.0], [96.6, 2075.0], [96.7, 2075.0], [96.8, 2100.0], [96.9, 2111.0], [97.0, 2111.0], [97.1, 2166.0], [97.2, 2173.0], [97.3, 2242.0], [97.4, 2242.0], [97.5, 2342.0], [97.6, 2461.0], [97.7, 2522.0], [97.8, 2522.0], [97.9, 2623.0], [98.0, 2644.0], [98.1, 2741.0], [98.2, 2741.0], [98.3, 2782.0], [98.4, 2808.0], [98.5, 2808.0], [98.6, 2815.0], [98.7, 2856.0], [98.8, 2924.0], [98.9, 2924.0], [99.0, 3173.0], [99.1, 3276.0], [99.2, 3378.0], [99.3, 3378.0], [99.4, 5064.0], [99.5, 5435.0], [99.6, 6025.0], [99.7, 6025.0], [99.8, 8729.0], [99.9, 9554.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 106.0, "series": [{"data": [[8700.0, 1.0], [600.0, 96.0], [9500.0, 1.0], [700.0, 51.0], [800.0, 48.0], [900.0, 32.0], [1000.0, 46.0], [1100.0, 32.0], [1200.0, 21.0], [1300.0, 18.0], [1400.0, 16.0], [1500.0, 19.0], [1600.0, 16.0], [1700.0, 12.0], [1800.0, 5.0], [1900.0, 5.0], [2000.0, 4.0], [2100.0, 4.0], [2200.0, 1.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 2.0], [2800.0, 3.0], [2700.0, 2.0], [2900.0, 1.0], [3100.0, 1.0], [200.0, 32.0], [3200.0, 1.0], [3300.0, 1.0], [300.0, 56.0], [5000.0, 1.0], [5400.0, 1.0], [6000.0, 1.0], [400.0, 106.0], [500.0, 96.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 84.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 457.0, "series": [{"data": [[0.0, 194.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 457.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 84.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.848993288590606, "minX": 1.60219806E12, "maxY": 10.0, "series": [{"data": [[1.60219812E12, 9.848993288590606], [1.60219806E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219812E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 354.0, "minX": 1.0, "maxY": 5435.0, "series": [{"data": [[8.0, 539.0], [4.0, 5435.0], [2.0, 3378.0], [1.0, 1379.0], [9.0, 512.0], [10.0, 873.4958677685948], [5.0, 895.0], [6.0, 354.0], [3.0, 481.0], [7.0, 540.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 881.1850340136053]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2238.8166666666666, "minX": 1.60219806E12, "maxY": 1365118.6666666667, "series": [{"data": [[1.60219812E12, 830576.0166666667], [1.60219806E12, 1365118.6666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60219812E12, 2238.8166666666666], [1.60219806E12, 3284.2166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219812E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 869.2814645308925, "minX": 1.60219806E12, "maxY": 898.640939597316, "series": [{"data": [[1.60219812E12, 898.640939597316], [1.60219806E12, 869.2814645308925]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219812E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 867.8077803203661, "minX": 1.60219806E12, "maxY": 897.2785234899326, "series": [{"data": [[1.60219812E12, 897.2785234899326], [1.60219806E12, 867.8077803203661]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219812E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.04697986577181208, "minX": 1.60219806E12, "maxY": 0.28375286041189907, "series": [{"data": [[1.60219812E12, 0.04697986577181208], [1.60219806E12, 0.28375286041189907]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219812E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 219.0, "minX": 1.60219806E12, "maxY": 9554.0, "series": [{"data": [[1.60219812E12, 8729.0], [1.60219806E12, 9554.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60219812E12, 273.0559988594055], [1.60219806E12, 224.94199989557265]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60219812E12, 277.3616004562378], [1.60219806E12, 225.33620004177092]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60219812E12, 275.44799942970275], [1.60219806E12, 225.16099994778634]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60219812E12, 228.0], [1.60219806E12, 219.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60219812E12, 681.5], [1.60219806E12, 672.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219812E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 395.5, "minX": 1.0, "maxY": 1379.0, "series": [{"data": [[2.0, 1188.0], [8.0, 930.5], [9.0, 782.0], [10.0, 681.5], [11.0, 843.0], [12.0, 852.0], [3.0, 1189.0], [13.0, 630.0], [14.0, 591.5], [15.0, 688.0], [16.0, 484.5], [1.0, 1379.0], [17.0, 563.0], [19.0, 482.0], [5.0, 1167.0], [22.0, 395.5], [6.0, 634.5], [7.0, 1235.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 395.5, "minX": 1.0, "maxY": 1379.0, "series": [{"data": [[2.0, 1186.5], [8.0, 929.0], [9.0, 781.0], [10.0, 680.5], [11.0, 842.5], [12.0, 851.0], [3.0, 1178.0], [13.0, 629.0], [14.0, 591.0], [15.0, 688.0], [16.0, 484.5], [1.0, 1379.0], [17.0, 562.0], [19.0, 478.0], [5.0, 1167.0], [22.0, 395.5], [6.0, 634.5], [7.0, 1234.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.8, "minX": 1.60219806E12, "maxY": 7.45, "series": [{"data": [[1.60219812E12, 4.8], [1.60219806E12, 7.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219812E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.966666666666667, "minX": 1.60219806E12, "maxY": 7.283333333333333, "series": [{"data": [[1.60219812E12, 4.966666666666667], [1.60219806E12, 7.283333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219812E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.966666666666667, "minX": 1.60219806E12, "maxY": 7.283333333333333, "series": [{"data": [[1.60219812E12, 4.966666666666667], [1.60219806E12, 7.283333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219812E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.966666666666667, "minX": 1.60219806E12, "maxY": 7.283333333333333, "series": [{"data": [[1.60219812E12, 4.966666666666667], [1.60219806E12, 7.283333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219812E12, "title": "Total Transactions Per Second"}},
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

