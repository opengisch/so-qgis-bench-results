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
        data: {"result": {"minY": 255.0, "minX": 0.0, "maxY": 53567.0, "series": [{"data": [[0.0, 255.0], [0.1, 255.0], [0.2, 261.0], [0.3, 261.0], [0.4, 261.0], [0.5, 261.0], [0.6, 263.0], [0.7, 263.0], [0.8, 263.0], [0.9, 263.0], [1.0, 265.0], [1.1, 267.0], [1.2, 267.0], [1.3, 267.0], [1.4, 268.0], [1.5, 271.0], [1.6, 271.0], [1.7, 277.0], [1.8, 280.0], [1.9, 280.0], [2.0, 298.0], [2.1, 323.0], [2.2, 332.0], [2.3, 332.0], [2.4, 333.0], [2.5, 342.0], [2.6, 345.0], [2.7, 345.0], [2.8, 353.0], [2.9, 356.0], [3.0, 356.0], [3.1, 356.0], [3.2, 356.0], [3.3, 356.0], [3.4, 356.0], [3.5, 357.0], [3.6, 362.0], [3.7, 364.0], [3.8, 364.0], [3.9, 364.0], [4.0, 366.0], [4.1, 367.0], [4.2, 367.0], [4.3, 369.0], [4.4, 370.0], [4.5, 370.0], [4.6, 370.0], [4.7, 370.0], [4.8, 373.0], [4.9, 376.0], [5.0, 376.0], [5.1, 378.0], [5.2, 378.0], [5.3, 378.0], [5.4, 380.0], [5.5, 380.0], [5.6, 383.0], [5.7, 383.0], [5.8, 383.0], [5.9, 383.0], [6.0, 386.0], [6.1, 386.0], [6.2, 386.0], [6.3, 389.0], [6.4, 390.0], [6.5, 390.0], [6.6, 390.0], [6.7, 390.0], [6.8, 390.0], [6.9, 391.0], [7.0, 391.0], [7.1, 392.0], [7.2, 392.0], [7.3, 392.0], [7.4, 394.0], [7.5, 394.0], [7.6, 394.0], [7.7, 394.0], [7.8, 395.0], [7.9, 395.0], [8.0, 395.0], [8.1, 395.0], [8.2, 395.0], [8.3, 397.0], [8.4, 397.0], [8.5, 397.0], [8.6, 398.0], [8.7, 398.0], [8.8, 400.0], [8.9, 400.0], [9.0, 401.0], [9.1, 401.0], [9.2, 401.0], [9.3, 401.0], [9.4, 401.0], [9.5, 401.0], [9.6, 402.0], [9.7, 403.0], [9.8, 403.0], [9.9, 403.0], [10.0, 404.0], [10.1, 407.0], [10.2, 407.0], [10.3, 407.0], [10.4, 409.0], [10.5, 409.0], [10.6, 409.0], [10.7, 410.0], [10.8, 412.0], [10.9, 412.0], [11.0, 412.0], [11.1, 412.0], [11.2, 413.0], [11.3, 413.0], [11.4, 413.0], [11.5, 414.0], [11.6, 414.0], [11.7, 414.0], [11.8, 415.0], [11.9, 415.0], [12.0, 416.0], [12.1, 416.0], [12.2, 417.0], [12.3, 417.0], [12.4, 417.0], [12.5, 417.0], [12.6, 417.0], [12.7, 418.0], [12.8, 418.0], [12.9, 418.0], [13.0, 419.0], [13.1, 420.0], [13.2, 420.0], [13.3, 420.0], [13.4, 421.0], [13.5, 421.0], [13.6, 421.0], [13.7, 422.0], [13.8, 423.0], [13.9, 423.0], [14.0, 423.0], [14.1, 423.0], [14.2, 424.0], [14.3, 424.0], [14.4, 424.0], [14.5, 424.0], [14.6, 426.0], [14.7, 426.0], [14.8, 426.0], [14.9, 426.0], [15.0, 426.0], [15.1, 426.0], [15.2, 427.0], [15.3, 427.0], [15.4, 428.0], [15.5, 428.0], [15.6, 429.0], [15.7, 430.0], [15.8, 430.0], [15.9, 430.0], [16.0, 431.0], [16.1, 431.0], [16.2, 432.0], [16.3, 432.0], [16.4, 432.0], [16.5, 432.0], [16.6, 434.0], [16.7, 434.0], [16.8, 434.0], [16.9, 434.0], [17.0, 434.0], [17.1, 435.0], [17.2, 435.0], [17.3, 435.0], [17.4, 435.0], [17.5, 436.0], [17.6, 436.0], [17.7, 437.0], [17.8, 437.0], [17.9, 437.0], [18.0, 438.0], [18.1, 438.0], [18.2, 438.0], [18.3, 438.0], [18.4, 439.0], [18.5, 439.0], [18.6, 440.0], [18.7, 440.0], [18.8, 441.0], [18.9, 441.0], [19.0, 441.0], [19.1, 441.0], [19.2, 441.0], [19.3, 441.0], [19.4, 441.0], [19.5, 442.0], [19.6, 442.0], [19.7, 442.0], [19.8, 442.0], [19.9, 442.0], [20.0, 443.0], [20.1, 443.0], [20.2, 443.0], [20.3, 444.0], [20.4, 444.0], [20.5, 445.0], [20.6, 445.0], [20.7, 445.0], [20.8, 445.0], [20.9, 446.0], [21.0, 446.0], [21.1, 447.0], [21.2, 447.0], [21.3, 447.0], [21.4, 447.0], [21.5, 447.0], [21.6, 447.0], [21.7, 447.0], [21.8, 448.0], [21.9, 448.0], [22.0, 448.0], [22.1, 449.0], [22.2, 449.0], [22.3, 449.0], [22.4, 450.0], [22.5, 450.0], [22.6, 452.0], [22.7, 452.0], [22.8, 452.0], [22.9, 452.0], [23.0, 453.0], [23.1, 453.0], [23.2, 454.0], [23.3, 454.0], [23.4, 454.0], [23.5, 454.0], [23.6, 454.0], [23.7, 454.0], [23.8, 454.0], [23.9, 457.0], [24.0, 457.0], [24.1, 457.0], [24.2, 457.0], [24.3, 457.0], [24.4, 458.0], [24.5, 459.0], [24.6, 459.0], [24.7, 459.0], [24.8, 459.0], [24.9, 460.0], [25.0, 460.0], [25.1, 461.0], [25.2, 461.0], [25.3, 461.0], [25.4, 461.0], [25.5, 463.0], [25.6, 464.0], [25.7, 464.0], [25.8, 464.0], [25.9, 464.0], [26.0, 465.0], [26.1, 465.0], [26.2, 465.0], [26.3, 466.0], [26.4, 466.0], [26.5, 466.0], [26.6, 467.0], [26.7, 467.0], [26.8, 467.0], [26.9, 468.0], [27.0, 469.0], [27.1, 469.0], [27.2, 469.0], [27.3, 470.0], [27.4, 470.0], [27.5, 471.0], [27.6, 471.0], [27.7, 471.0], [27.8, 472.0], [27.9, 472.0], [28.0, 472.0], [28.1, 473.0], [28.2, 473.0], [28.3, 473.0], [28.4, 473.0], [28.5, 474.0], [28.6, 474.0], [28.7, 474.0], [28.8, 475.0], [28.9, 475.0], [29.0, 476.0], [29.1, 476.0], [29.2, 476.0], [29.3, 477.0], [29.4, 478.0], [29.5, 478.0], [29.6, 479.0], [29.7, 479.0], [29.8, 479.0], [29.9, 479.0], [30.0, 480.0], [30.1, 480.0], [30.2, 480.0], [30.3, 480.0], [30.4, 481.0], [30.5, 482.0], [30.6, 482.0], [30.7, 482.0], [30.8, 483.0], [30.9, 483.0], [31.0, 483.0], [31.1, 484.0], [31.2, 486.0], [31.3, 486.0], [31.4, 486.0], [31.5, 489.0], [31.6, 489.0], [31.7, 489.0], [31.8, 490.0], [31.9, 490.0], [32.0, 490.0], [32.1, 490.0], [32.2, 491.0], [32.3, 491.0], [32.4, 493.0], [32.5, 493.0], [32.6, 493.0], [32.7, 494.0], [32.8, 495.0], [32.9, 495.0], [33.0, 496.0], [33.1, 497.0], [33.2, 498.0], [33.3, 498.0], [33.4, 498.0], [33.5, 498.0], [33.6, 498.0], [33.7, 499.0], [33.8, 500.0], [33.9, 500.0], [34.0, 500.0], [34.1, 501.0], [34.2, 502.0], [34.3, 503.0], [34.4, 503.0], [34.5, 505.0], [34.6, 505.0], [34.7, 506.0], [34.8, 506.0], [34.9, 507.0], [35.0, 507.0], [35.1, 507.0], [35.2, 509.0], [35.3, 512.0], [35.4, 512.0], [35.5, 512.0], [35.6, 512.0], [35.7, 513.0], [35.8, 513.0], [35.9, 513.0], [36.0, 513.0], [36.1, 513.0], [36.2, 514.0], [36.3, 514.0], [36.4, 516.0], [36.5, 516.0], [36.6, 517.0], [36.7, 517.0], [36.8, 518.0], [36.9, 518.0], [37.0, 518.0], [37.1, 518.0], [37.2, 518.0], [37.3, 519.0], [37.4, 519.0], [37.5, 519.0], [37.6, 524.0], [37.7, 524.0], [37.8, 524.0], [37.9, 528.0], [38.0, 528.0], [38.1, 530.0], [38.2, 530.0], [38.3, 532.0], [38.4, 533.0], [38.5, 533.0], [38.6, 534.0], [38.7, 534.0], [38.8, 534.0], [38.9, 534.0], [39.0, 536.0], [39.1, 536.0], [39.2, 536.0], [39.3, 536.0], [39.4, 538.0], [39.5, 539.0], [39.6, 542.0], [39.7, 542.0], [39.8, 543.0], [39.9, 545.0], [40.0, 546.0], [40.1, 546.0], [40.2, 548.0], [40.3, 548.0], [40.4, 548.0], [40.5, 549.0], [40.6, 549.0], [40.7, 551.0], [40.8, 551.0], [40.9, 553.0], [41.0, 554.0], [41.1, 559.0], [41.2, 559.0], [41.3, 560.0], [41.4, 560.0], [41.5, 561.0], [41.6, 561.0], [41.7, 562.0], [41.8, 564.0], [41.9, 564.0], [42.0, 565.0], [42.1, 567.0], [42.2, 569.0], [42.3, 569.0], [42.4, 570.0], [42.5, 575.0], [42.6, 581.0], [42.7, 581.0], [42.8, 585.0], [42.9, 585.0], [43.0, 586.0], [43.1, 586.0], [43.2, 592.0], [43.3, 592.0], [43.4, 592.0], [43.5, 594.0], [43.6, 594.0], [43.7, 597.0], [43.8, 597.0], [43.9, 600.0], [44.0, 615.0], [44.1, 616.0], [44.2, 616.0], [44.3, 617.0], [44.4, 619.0], [44.5, 620.0], [44.6, 620.0], [44.7, 620.0], [44.8, 622.0], [44.9, 622.0], [45.0, 622.0], [45.1, 624.0], [45.2, 629.0], [45.3, 629.0], [45.4, 630.0], [45.5, 630.0], [45.6, 633.0], [45.7, 633.0], [45.8, 640.0], [45.9, 641.0], [46.0, 641.0], [46.1, 641.0], [46.2, 642.0], [46.3, 642.0], [46.4, 644.0], [46.5, 644.0], [46.6, 646.0], [46.7, 648.0], [46.8, 648.0], [46.9, 649.0], [47.0, 651.0], [47.1, 652.0], [47.2, 652.0], [47.3, 652.0], [47.4, 653.0], [47.5, 654.0], [47.6, 654.0], [47.7, 654.0], [47.8, 655.0], [47.9, 656.0], [48.0, 656.0], [48.1, 657.0], [48.2, 657.0], [48.3, 658.0], [48.4, 658.0], [48.5, 660.0], [48.6, 660.0], [48.7, 660.0], [48.8, 663.0], [48.9, 665.0], [49.0, 666.0], [49.1, 666.0], [49.2, 666.0], [49.3, 667.0], [49.4, 667.0], [49.5, 667.0], [49.6, 669.0], [49.7, 669.0], [49.8, 672.0], [49.9, 672.0], [50.0, 673.0], [50.1, 673.0], [50.2, 673.0], [50.3, 678.0], [50.4, 679.0], [50.5, 680.0], [50.6, 680.0], [50.7, 680.0], [50.8, 682.0], [50.9, 684.0], [51.0, 684.0], [51.1, 684.0], [51.2, 686.0], [51.3, 686.0], [51.4, 686.0], [51.5, 688.0], [51.6, 691.0], [51.7, 691.0], [51.8, 694.0], [51.9, 694.0], [52.0, 697.0], [52.1, 697.0], [52.2, 702.0], [52.3, 703.0], [52.4, 705.0], [52.5, 705.0], [52.6, 707.0], [52.7, 710.0], [52.8, 710.0], [52.9, 710.0], [53.0, 713.0], [53.1, 713.0], [53.2, 718.0], [53.3, 718.0], [53.4, 718.0], [53.5, 720.0], [53.6, 720.0], [53.7, 721.0], [53.8, 722.0], [53.9, 723.0], [54.0, 723.0], [54.1, 723.0], [54.2, 725.0], [54.3, 725.0], [54.4, 725.0], [54.5, 727.0], [54.6, 727.0], [54.7, 728.0], [54.8, 728.0], [54.9, 730.0], [55.0, 732.0], [55.1, 732.0], [55.2, 733.0], [55.3, 739.0], [55.4, 740.0], [55.5, 740.0], [55.6, 742.0], [55.7, 743.0], [55.8, 743.0], [55.9, 743.0], [56.0, 748.0], [56.1, 748.0], [56.2, 749.0], [56.3, 749.0], [56.4, 753.0], [56.5, 753.0], [56.6, 756.0], [56.7, 756.0], [56.8, 759.0], [56.9, 763.0], [57.0, 763.0], [57.1, 765.0], [57.2, 769.0], [57.3, 770.0], [57.4, 770.0], [57.5, 775.0], [57.6, 775.0], [57.7, 776.0], [57.8, 776.0], [57.9, 777.0], [58.0, 779.0], [58.1, 779.0], [58.2, 779.0], [58.3, 780.0], [58.4, 780.0], [58.5, 780.0], [58.6, 781.0], [58.7, 788.0], [58.8, 793.0], [58.9, 793.0], [59.0, 802.0], [59.1, 808.0], [59.2, 808.0], [59.3, 808.0], [59.4, 808.0], [59.5, 809.0], [59.6, 810.0], [59.7, 810.0], [59.8, 811.0], [59.9, 811.0], [60.0, 811.0], [60.1, 811.0], [60.2, 813.0], [60.3, 814.0], [60.4, 814.0], [60.5, 814.0], [60.6, 815.0], [60.7, 815.0], [60.8, 815.0], [60.9, 821.0], [61.0, 822.0], [61.1, 823.0], [61.2, 823.0], [61.3, 824.0], [61.4, 824.0], [61.5, 827.0], [61.6, 827.0], [61.7, 827.0], [61.8, 828.0], [61.9, 828.0], [62.0, 830.0], [62.1, 830.0], [62.2, 831.0], [62.3, 831.0], [62.4, 831.0], [62.5, 831.0], [62.6, 831.0], [62.7, 831.0], [62.8, 832.0], [62.9, 834.0], [63.0, 838.0], [63.1, 838.0], [63.2, 838.0], [63.3, 838.0], [63.4, 838.0], [63.5, 840.0], [63.6, 840.0], [63.7, 841.0], [63.8, 841.0], [63.9, 842.0], [64.0, 843.0], [64.1, 845.0], [64.2, 845.0], [64.3, 845.0], [64.4, 847.0], [64.5, 847.0], [64.6, 847.0], [64.7, 848.0], [64.8, 855.0], [64.9, 857.0], [65.0, 857.0], [65.1, 859.0], [65.2, 859.0], [65.3, 859.0], [65.4, 861.0], [65.5, 862.0], [65.6, 862.0], [65.7, 862.0], [65.8, 864.0], [65.9, 868.0], [66.0, 868.0], [66.1, 868.0], [66.2, 869.0], [66.3, 875.0], [66.4, 875.0], [66.5, 875.0], [66.6, 875.0], [66.7, 876.0], [66.8, 876.0], [66.9, 877.0], [67.0, 878.0], [67.1, 879.0], [67.2, 879.0], [67.3, 880.0], [67.4, 880.0], [67.5, 883.0], [67.6, 883.0], [67.7, 888.0], [67.8, 890.0], [67.9, 893.0], [68.0, 893.0], [68.1, 894.0], [68.2, 894.0], [68.3, 896.0], [68.4, 896.0], [68.5, 897.0], [68.6, 897.0], [68.7, 897.0], [68.8, 898.0], [68.9, 898.0], [69.0, 899.0], [69.1, 899.0], [69.2, 899.0], [69.3, 902.0], [69.4, 903.0], [69.5, 903.0], [69.6, 903.0], [69.7, 903.0], [69.8, 913.0], [69.9, 913.0], [70.0, 913.0], [70.1, 913.0], [70.2, 913.0], [70.3, 915.0], [70.4, 917.0], [70.5, 918.0], [70.6, 918.0], [70.7, 920.0], [70.8, 926.0], [70.9, 930.0], [71.0, 930.0], [71.1, 930.0], [71.2, 932.0], [71.3, 934.0], [71.4, 934.0], [71.5, 934.0], [71.6, 935.0], [71.7, 935.0], [71.8, 937.0], [71.9, 939.0], [72.0, 940.0], [72.1, 940.0], [72.2, 941.0], [72.3, 943.0], [72.4, 946.0], [72.5, 946.0], [72.6, 946.0], [72.7, 948.0], [72.8, 948.0], [72.9, 948.0], [73.0, 949.0], [73.1, 952.0], [73.2, 952.0], [73.3, 952.0], [73.4, 953.0], [73.5, 955.0], [73.6, 955.0], [73.7, 955.0], [73.8, 956.0], [73.9, 957.0], [74.0, 957.0], [74.1, 961.0], [74.2, 962.0], [74.3, 965.0], [74.4, 965.0], [74.5, 971.0], [74.6, 971.0], [74.7, 972.0], [74.8, 972.0], [74.9, 972.0], [75.0, 978.0], [75.1, 978.0], [75.2, 979.0], [75.3, 985.0], [75.4, 990.0], [75.5, 990.0], [75.6, 990.0], [75.7, 992.0], [75.8, 993.0], [75.9, 993.0], [76.0, 997.0], [76.1, 1001.0], [76.2, 1007.0], [76.3, 1007.0], [76.4, 1012.0], [76.5, 1016.0], [76.6, 1017.0], [76.7, 1017.0], [76.8, 1030.0], [76.9, 1030.0], [77.0, 1030.0], [77.1, 1035.0], [77.2, 1035.0], [77.3, 1037.0], [77.4, 1037.0], [77.5, 1049.0], [77.6, 1058.0], [77.7, 1059.0], [77.8, 1059.0], [77.9, 1060.0], [78.0, 1076.0], [78.1, 1085.0], [78.2, 1085.0], [78.3, 1087.0], [78.4, 1088.0], [78.5, 1088.0], [78.6, 1092.0], [78.7, 1094.0], [78.8, 1104.0], [78.9, 1104.0], [79.0, 1105.0], [79.1, 1109.0], [79.2, 1110.0], [79.3, 1110.0], [79.4, 1116.0], [79.5, 1121.0], [79.6, 1124.0], [79.7, 1124.0], [79.8, 1131.0], [79.9, 1153.0], [80.0, 1163.0], [80.1, 1163.0], [80.2, 1167.0], [80.3, 1168.0], [80.4, 1168.0], [80.5, 1175.0], [80.6, 1179.0], [80.7, 1180.0], [80.8, 1180.0], [80.9, 1189.0], [81.0, 1194.0], [81.1, 1206.0], [81.2, 1206.0], [81.3, 1216.0], [81.4, 1218.0], [81.5, 1225.0], [81.6, 1225.0], [81.7, 1226.0], [81.8, 1228.0], [81.9, 1228.0], [82.0, 1228.0], [82.1, 1230.0], [82.2, 1235.0], [82.3, 1235.0], [82.4, 1236.0], [82.5, 1239.0], [82.6, 1243.0], [82.7, 1243.0], [82.8, 1245.0], [82.9, 1247.0], [83.0, 1254.0], [83.1, 1254.0], [83.2, 1259.0], [83.3, 1263.0], [83.4, 1263.0], [83.5, 1264.0], [83.6, 1271.0], [83.7, 1276.0], [83.8, 1276.0], [83.9, 1280.0], [84.0, 1281.0], [84.1, 1282.0], [84.2, 1282.0], [84.3, 1284.0], [84.4, 1284.0], [84.5, 1286.0], [84.6, 1286.0], [84.7, 1291.0], [84.8, 1292.0], [84.9, 1292.0], [85.0, 1292.0], [85.1, 1293.0], [85.2, 1294.0], [85.3, 1294.0], [85.4, 1296.0], [85.5, 1300.0], [85.6, 1308.0], [85.7, 1308.0], [85.8, 1309.0], [85.9, 1310.0], [86.0, 1314.0], [86.1, 1314.0], [86.2, 1315.0], [86.3, 1316.0], [86.4, 1324.0], [86.5, 1324.0], [86.6, 1328.0], [86.7, 1335.0], [86.8, 1335.0], [86.9, 1344.0], [87.0, 1349.0], [87.1, 1355.0], [87.2, 1355.0], [87.3, 1358.0], [87.4, 1372.0], [87.5, 1372.0], [87.6, 1372.0], [87.7, 1376.0], [87.8, 1376.0], [87.9, 1380.0], [88.0, 1380.0], [88.1, 1387.0], [88.2, 1396.0], [88.3, 1400.0], [88.4, 1400.0], [88.5, 1405.0], [88.6, 1406.0], [88.7, 1406.0], [88.8, 1418.0], [88.9, 1422.0], [89.0, 1424.0], [89.1, 1424.0], [89.2, 1432.0], [89.3, 1434.0], [89.4, 1437.0], [89.5, 1437.0], [89.6, 1440.0], [89.7, 1442.0], [89.8, 1442.0], [89.9, 1442.0], [90.0, 1443.0], [90.1, 1456.0], [90.2, 1456.0], [90.3, 1464.0], [90.4, 1465.0], [90.5, 1470.0], [90.6, 1470.0], [90.7, 1485.0], [90.8, 1494.0], [90.9, 1499.0], [91.0, 1499.0], [91.1, 1502.0], [91.2, 1507.0], [91.3, 1513.0], [91.4, 1513.0], [91.5, 1516.0], [91.6, 1536.0], [91.7, 1536.0], [91.8, 1543.0], [91.9, 1544.0], [92.0, 1545.0], [92.1, 1545.0], [92.2, 1556.0], [92.3, 1571.0], [92.4, 1576.0], [92.5, 1576.0], [92.6, 1583.0], [92.7, 1594.0], [92.8, 1601.0], [92.9, 1601.0], [93.0, 1601.0], [93.1, 1603.0], [93.2, 1655.0], [93.3, 1655.0], [93.4, 1683.0], [93.5, 1704.0], [93.6, 1704.0], [93.7, 1821.0], [93.8, 1856.0], [93.9, 1875.0], [94.0, 1875.0], [94.1, 1947.0], [94.2, 1955.0], [94.3, 1960.0], [94.4, 1960.0], [94.5, 1971.0], [94.6, 2007.0], [94.7, 2060.0], [94.8, 2060.0], [94.9, 2088.0], [95.0, 2157.0], [95.1, 2157.0], [95.2, 2162.0], [95.3, 2164.0], [95.4, 2177.0], [95.5, 2177.0], [95.6, 2183.0], [95.7, 2195.0], [95.8, 2240.0], [95.9, 2240.0], [96.0, 2240.0], [96.1, 2243.0], [96.2, 2257.0], [96.3, 2257.0], [96.4, 2280.0], [96.5, 2379.0], [96.6, 2408.0], [96.7, 2408.0], [96.8, 2602.0], [96.9, 2690.0], [97.0, 2690.0], [97.1, 2692.0], [97.2, 2712.0], [97.3, 2809.0], [97.4, 2809.0], [97.5, 2929.0], [97.6, 2930.0], [97.7, 2990.0], [97.8, 2990.0], [97.9, 3125.0], [98.0, 3286.0], [98.1, 3416.0], [98.2, 3416.0], [98.3, 4233.0], [98.4, 4626.0], [98.5, 4626.0], [98.6, 4669.0], [98.7, 7417.0], [98.8, 7602.0], [98.9, 7602.0], [99.0, 8107.0], [99.1, 8305.0], [99.2, 8322.0], [99.3, 8322.0], [99.4, 18555.0], [99.5, 19837.0], [99.6, 20261.0], [99.7, 20261.0], [99.8, 26423.0], [99.9, 53567.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 184.0, "series": [{"data": [[8300.0, 2.0], [600.0, 61.0], [700.0, 50.0], [800.0, 76.0], [900.0, 50.0], [1000.0, 20.0], [1100.0, 17.0], [1200.0, 32.0], [18500.0, 1.0], [20200.0, 1.0], [19800.0, 1.0], [1300.0, 21.0], [1400.0, 20.0], [1500.0, 13.0], [1600.0, 5.0], [26400.0, 1.0], [1700.0, 1.0], [1800.0, 3.0], [1900.0, 4.0], [2000.0, 3.0], [2100.0, 6.0], [2300.0, 1.0], [2200.0, 5.0], [2400.0, 1.0], [2600.0, 3.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 3.0], [3100.0, 1.0], [3200.0, 1.0], [200.0, 15.0], [3400.0, 1.0], [53500.0, 1.0], [4200.0, 1.0], [4600.0, 2.0], [300.0, 49.0], [400.0, 184.0], [7400.0, 1.0], [7600.0, 1.0], [500.0, 74.0], [8100.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 53500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 66.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 419.0, "series": [{"data": [[0.0, 250.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 419.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 66.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.921465968586388, "minX": 1.60270134E12, "maxY": 10.0, "series": [{"data": [[1.60270134E12, 10.0], [1.6027014E12, 9.921465968586388]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6027014E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 463.0, "minX": 1.0, "maxY": 53567.0, "series": [{"data": [[8.0, 553.0], [4.0, 1105.0], [2.0, 7417.0], [1.0, 1516.0], [9.0, 534.0], [10.0, 974.9793388429742], [5.0, 722.0], [6.0, 482.0], [3.0, 53567.0], [7.0, 463.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1053.3251700680264]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1175.0166666666667, "minX": 1.60270134E12, "maxY": 1917805.3833333333, "series": [{"data": [[1.60270134E12, 744289.5666666667], [1.6027014E12, 1917805.3833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60270134E12, 1175.0166666666667], [1.6027014E12, 4115.266666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6027014E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 999.6172839506174, "minX": 1.60270134E12, "maxY": 1068.50959860384, "series": [{"data": [[1.60270134E12, 999.6172839506174], [1.6027014E12, 1068.50959860384]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6027014E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 998.3086419753089, "minX": 1.60270134E12, "maxY": 1067.4886561954631, "series": [{"data": [[1.60270134E12, 998.3086419753089], [1.6027014E12, 1067.4886561954631]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6027014E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.012216404886561956, "minX": 1.60270134E12, "maxY": 0.4876543209876547, "series": [{"data": [[1.60270134E12, 0.4876543209876547], [1.6027014E12, 0.012216404886561956]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6027014E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 255.0, "minX": 1.60270134E12, "maxY": 53567.0, "series": [{"data": [[1.60270134E12, 8107.0], [1.6027014E12, 53567.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60270134E12, 263.9339999222755], [1.6027014E12, 263.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60270134E12, 264.22740003108976], [1.6027014E12, 263.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60270134E12, 264.0969999611378], [1.6027014E12, 263.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60270134E12, 263.0], [1.6027014E12, 255.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60270134E12, 746.5], [1.6027014E12, 653.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6027014E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 457.0, "minX": 1.0, "maxY": 1683.0, "series": [{"data": [[8.0, 898.5], [9.0, 718.5], [10.0, 780.5], [11.0, 672.0], [3.0, 1683.0], [12.0, 494.5], [13.0, 524.0], [14.0, 518.5], [15.0, 463.5], [1.0, 1683.0], [4.0, 772.0], [19.0, 457.0], [5.0, 1284.0], [6.0, 889.0], [7.0, 845.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 457.0, "minX": 1.0, "maxY": 1682.0, "series": [{"data": [[8.0, 897.5], [9.0, 718.0], [10.0, 779.5], [11.0, 671.0], [3.0, 1682.0], [12.0, 494.0], [13.0, 523.5], [14.0, 518.5], [15.0, 463.0], [1.0, 1679.0], [4.0, 771.0], [19.0, 457.0], [5.0, 1283.0], [6.0, 887.0], [7.0, 844.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.8666666666666667, "minX": 1.60270134E12, "maxY": 9.383333333333333, "series": [{"data": [[1.60270134E12, 2.8666666666666667], [1.6027014E12, 9.383333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6027014E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.7, "minX": 1.60270134E12, "maxY": 9.55, "series": [{"data": [[1.60270134E12, 2.7], [1.6027014E12, 9.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6027014E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.7, "minX": 1.60270134E12, "maxY": 9.55, "series": [{"data": [[1.60270134E12, 2.7], [1.6027014E12, 9.55]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6027014E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.7, "minX": 1.60270134E12, "maxY": 9.55, "series": [{"data": [[1.60270134E12, 2.7], [1.6027014E12, 9.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6027014E12, "title": "Total Transactions Per Second"}},
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

