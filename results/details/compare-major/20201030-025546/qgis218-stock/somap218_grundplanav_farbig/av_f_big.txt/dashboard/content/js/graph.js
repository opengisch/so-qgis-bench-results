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
        data: {"result": {"minY": 219.0, "minX": 0.0, "maxY": 9076.0, "series": [{"data": [[0.0, 219.0], [0.1, 219.0], [0.2, 223.0], [0.3, 224.0], [0.4, 224.0], [0.5, 224.0], [0.6, 229.0], [0.7, 231.0], [0.8, 231.0], [0.9, 231.0], [1.0, 232.0], [1.1, 234.0], [1.2, 234.0], [1.3, 236.0], [1.4, 236.0], [1.5, 237.0], [1.6, 237.0], [1.7, 246.0], [1.8, 247.0], [1.9, 247.0], [2.0, 249.0], [2.1, 252.0], [2.2, 252.0], [2.3, 252.0], [2.4, 253.0], [2.5, 264.0], [2.6, 265.0], [2.7, 265.0], [2.8, 265.0], [2.9, 267.0], [3.0, 272.0], [3.1, 272.0], [3.2, 272.0], [3.3, 272.0], [3.4, 272.0], [3.5, 274.0], [3.6, 275.0], [3.7, 279.0], [3.8, 279.0], [3.9, 284.0], [4.0, 284.0], [4.1, 285.0], [4.2, 285.0], [4.3, 289.0], [4.4, 289.0], [4.5, 295.0], [4.6, 295.0], [4.7, 300.0], [4.8, 304.0], [4.9, 305.0], [5.0, 305.0], [5.1, 307.0], [5.2, 325.0], [5.3, 325.0], [5.4, 326.0], [5.5, 328.0], [5.6, 331.0], [5.7, 331.0], [5.8, 335.0], [5.9, 338.0], [6.0, 339.0], [6.1, 339.0], [6.2, 339.0], [6.3, 342.0], [6.4, 342.0], [6.5, 342.0], [6.6, 343.0], [6.7, 344.0], [6.8, 344.0], [6.9, 348.0], [7.0, 352.0], [7.1, 353.0], [7.2, 353.0], [7.3, 360.0], [7.4, 361.0], [7.5, 363.0], [7.6, 363.0], [7.7, 366.0], [7.8, 366.0], [7.9, 367.0], [8.0, 367.0], [8.1, 368.0], [8.2, 368.0], [8.3, 375.0], [8.4, 375.0], [8.5, 375.0], [8.6, 376.0], [8.7, 376.0], [8.8, 378.0], [8.9, 379.0], [9.0, 379.0], [9.1, 379.0], [9.2, 380.0], [9.3, 380.0], [9.4, 388.0], [9.5, 388.0], [9.6, 389.0], [9.7, 389.0], [9.8, 390.0], [9.9, 390.0], [10.0, 390.0], [10.1, 390.0], [10.2, 390.0], [10.3, 392.0], [10.4, 392.0], [10.5, 392.0], [10.6, 392.0], [10.7, 392.0], [10.8, 394.0], [10.9, 394.0], [11.0, 394.0], [11.1, 395.0], [11.2, 397.0], [11.3, 397.0], [11.4, 397.0], [11.5, 398.0], [11.6, 399.0], [11.7, 399.0], [11.8, 401.0], [11.9, 402.0], [12.0, 403.0], [12.1, 403.0], [12.2, 403.0], [12.3, 404.0], [12.4, 404.0], [12.5, 404.0], [12.6, 405.0], [12.7, 405.0], [12.8, 407.0], [12.9, 407.0], [13.0, 409.0], [13.1, 409.0], [13.2, 409.0], [13.3, 409.0], [13.4, 409.0], [13.5, 410.0], [13.6, 410.0], [13.7, 411.0], [13.8, 411.0], [13.9, 413.0], [14.0, 413.0], [14.1, 414.0], [14.2, 415.0], [14.3, 415.0], [14.4, 415.0], [14.5, 415.0], [14.6, 416.0], [14.7, 416.0], [14.8, 416.0], [14.9, 419.0], [15.0, 420.0], [15.1, 420.0], [15.2, 420.0], [15.3, 421.0], [15.4, 422.0], [15.5, 422.0], [15.6, 422.0], [15.7, 422.0], [15.8, 425.0], [15.9, 425.0], [16.0, 425.0], [16.1, 426.0], [16.2, 427.0], [16.3, 427.0], [16.4, 427.0], [16.5, 428.0], [16.6, 429.0], [16.7, 429.0], [16.8, 430.0], [16.9, 430.0], [17.0, 430.0], [17.1, 431.0], [17.2, 431.0], [17.3, 433.0], [17.4, 433.0], [17.5, 433.0], [17.6, 434.0], [17.7, 434.0], [17.8, 434.0], [17.9, 435.0], [18.0, 435.0], [18.1, 435.0], [18.2, 435.0], [18.3, 436.0], [18.4, 436.0], [18.5, 436.0], [18.6, 436.0], [18.7, 437.0], [18.8, 438.0], [18.9, 438.0], [19.0, 439.0], [19.1, 439.0], [19.2, 440.0], [19.3, 440.0], [19.4, 442.0], [19.5, 443.0], [19.6, 444.0], [19.7, 444.0], [19.8, 445.0], [19.9, 445.0], [20.0, 446.0], [20.1, 446.0], [20.2, 446.0], [20.3, 448.0], [20.4, 448.0], [20.5, 449.0], [20.6, 451.0], [20.7, 451.0], [20.8, 451.0], [20.9, 452.0], [21.0, 455.0], [21.1, 455.0], [21.2, 455.0], [21.3, 456.0], [21.4, 456.0], [21.5, 458.0], [21.6, 458.0], [21.7, 458.0], [21.8, 458.0], [21.9, 458.0], [22.0, 458.0], [22.1, 459.0], [22.2, 460.0], [22.3, 460.0], [22.4, 460.0], [22.5, 462.0], [22.6, 462.0], [22.7, 462.0], [22.8, 462.0], [22.9, 462.0], [23.0, 462.0], [23.1, 462.0], [23.2, 463.0], [23.3, 465.0], [23.4, 465.0], [23.5, 465.0], [23.6, 465.0], [23.7, 468.0], [23.8, 468.0], [23.9, 469.0], [24.0, 469.0], [24.1, 470.0], [24.2, 470.0], [24.3, 471.0], [24.4, 473.0], [24.5, 475.0], [24.6, 475.0], [24.7, 476.0], [24.8, 477.0], [24.9, 477.0], [25.0, 477.0], [25.1, 478.0], [25.2, 478.0], [25.3, 478.0], [25.4, 481.0], [25.5, 482.0], [25.6, 483.0], [25.7, 483.0], [25.8, 484.0], [25.9, 485.0], [26.0, 486.0], [26.1, 486.0], [26.2, 486.0], [26.3, 486.0], [26.4, 487.0], [26.5, 487.0], [26.6, 487.0], [26.7, 487.0], [26.8, 487.0], [26.9, 487.0], [27.0, 488.0], [27.1, 488.0], [27.2, 488.0], [27.3, 490.0], [27.4, 491.0], [27.5, 491.0], [27.6, 491.0], [27.7, 491.0], [27.8, 493.0], [27.9, 493.0], [28.0, 493.0], [28.1, 495.0], [28.2, 496.0], [28.3, 496.0], [28.4, 496.0], [28.5, 496.0], [28.6, 496.0], [28.7, 496.0], [28.8, 497.0], [28.9, 498.0], [29.0, 500.0], [29.1, 500.0], [29.2, 501.0], [29.3, 503.0], [29.4, 505.0], [29.5, 505.0], [29.6, 507.0], [29.7, 507.0], [29.8, 507.0], [29.9, 507.0], [30.0, 508.0], [30.1, 510.0], [30.2, 510.0], [30.3, 510.0], [30.4, 512.0], [30.5, 512.0], [30.6, 512.0], [30.7, 513.0], [30.8, 514.0], [30.9, 514.0], [31.0, 514.0], [31.1, 515.0], [31.2, 516.0], [31.3, 516.0], [31.4, 516.0], [31.5, 518.0], [31.6, 519.0], [31.7, 519.0], [31.8, 519.0], [31.9, 520.0], [32.0, 522.0], [32.1, 522.0], [32.2, 523.0], [32.3, 523.0], [32.4, 523.0], [32.5, 523.0], [32.6, 524.0], [32.7, 524.0], [32.8, 524.0], [32.9, 524.0], [33.0, 525.0], [33.1, 526.0], [33.2, 526.0], [33.3, 526.0], [33.4, 527.0], [33.5, 528.0], [33.6, 528.0], [33.7, 530.0], [33.8, 530.0], [33.9, 531.0], [34.0, 531.0], [34.1, 532.0], [34.2, 532.0], [34.3, 533.0], [34.4, 533.0], [34.5, 535.0], [34.6, 535.0], [34.7, 536.0], [34.8, 536.0], [34.9, 536.0], [35.0, 539.0], [35.1, 539.0], [35.2, 540.0], [35.3, 542.0], [35.4, 543.0], [35.5, 543.0], [35.6, 543.0], [35.7, 545.0], [35.8, 545.0], [35.9, 545.0], [36.0, 546.0], [36.1, 548.0], [36.2, 549.0], [36.3, 549.0], [36.4, 550.0], [36.5, 550.0], [36.6, 551.0], [36.7, 551.0], [36.8, 551.0], [36.9, 552.0], [37.0, 552.0], [37.1, 553.0], [37.2, 555.0], [37.3, 555.0], [37.4, 555.0], [37.5, 555.0], [37.6, 555.0], [37.7, 556.0], [37.8, 556.0], [37.9, 556.0], [38.0, 557.0], [38.1, 560.0], [38.2, 560.0], [38.3, 560.0], [38.4, 561.0], [38.5, 561.0], [38.6, 561.0], [38.7, 561.0], [38.8, 564.0], [38.9, 564.0], [39.0, 564.0], [39.1, 567.0], [39.2, 568.0], [39.3, 568.0], [39.4, 570.0], [39.5, 570.0], [39.6, 570.0], [39.7, 570.0], [39.8, 570.0], [39.9, 572.0], [40.0, 572.0], [40.1, 572.0], [40.2, 573.0], [40.3, 573.0], [40.4, 573.0], [40.5, 573.0], [40.6, 574.0], [40.7, 574.0], [40.8, 574.0], [40.9, 575.0], [41.0, 576.0], [41.1, 578.0], [41.2, 578.0], [41.3, 578.0], [41.4, 579.0], [41.5, 581.0], [41.6, 581.0], [41.7, 583.0], [41.8, 584.0], [41.9, 584.0], [42.0, 585.0], [42.1, 587.0], [42.2, 588.0], [42.3, 588.0], [42.4, 589.0], [42.5, 589.0], [42.6, 592.0], [42.7, 592.0], [42.8, 593.0], [42.9, 597.0], [43.0, 600.0], [43.1, 600.0], [43.2, 601.0], [43.3, 603.0], [43.4, 603.0], [43.5, 604.0], [43.6, 605.0], [43.7, 607.0], [43.8, 607.0], [43.9, 609.0], [44.0, 609.0], [44.1, 609.0], [44.2, 609.0], [44.3, 610.0], [44.4, 610.0], [44.5, 610.0], [44.6, 610.0], [44.7, 610.0], [44.8, 613.0], [44.9, 616.0], [45.0, 616.0], [45.1, 616.0], [45.2, 616.0], [45.3, 616.0], [45.4, 617.0], [45.5, 618.0], [45.6, 618.0], [45.7, 618.0], [45.8, 619.0], [45.9, 620.0], [46.0, 621.0], [46.1, 621.0], [46.2, 621.0], [46.3, 624.0], [46.4, 625.0], [46.5, 625.0], [46.6, 628.0], [46.7, 629.0], [46.8, 629.0], [46.9, 629.0], [47.0, 630.0], [47.1, 630.0], [47.2, 630.0], [47.3, 631.0], [47.4, 632.0], [47.5, 633.0], [47.6, 633.0], [47.7, 633.0], [47.8, 634.0], [47.9, 634.0], [48.0, 634.0], [48.1, 635.0], [48.2, 636.0], [48.3, 637.0], [48.4, 637.0], [48.5, 637.0], [48.6, 638.0], [48.7, 638.0], [48.8, 639.0], [48.9, 639.0], [49.0, 641.0], [49.1, 641.0], [49.2, 641.0], [49.3, 642.0], [49.4, 642.0], [49.5, 642.0], [49.6, 643.0], [49.7, 644.0], [49.8, 646.0], [49.9, 646.0], [50.0, 646.0], [50.1, 647.0], [50.2, 647.0], [50.3, 648.0], [50.4, 651.0], [50.5, 651.0], [50.6, 651.0], [50.7, 652.0], [50.8, 653.0], [50.9, 653.0], [51.0, 653.0], [51.1, 656.0], [51.2, 658.0], [51.3, 661.0], [51.4, 661.0], [51.5, 663.0], [51.6, 663.0], [51.7, 663.0], [51.8, 664.0], [51.9, 665.0], [52.0, 669.0], [52.1, 669.0], [52.2, 670.0], [52.3, 670.0], [52.4, 671.0], [52.5, 671.0], [52.6, 672.0], [52.7, 672.0], [52.8, 673.0], [52.9, 673.0], [53.0, 674.0], [53.1, 674.0], [53.2, 676.0], [53.3, 676.0], [53.4, 677.0], [53.5, 680.0], [53.6, 680.0], [53.7, 683.0], [53.8, 684.0], [53.9, 685.0], [54.0, 685.0], [54.1, 689.0], [54.2, 691.0], [54.3, 691.0], [54.4, 691.0], [54.5, 692.0], [54.6, 693.0], [54.7, 697.0], [54.8, 697.0], [54.9, 700.0], [55.0, 701.0], [55.1, 701.0], [55.2, 702.0], [55.3, 703.0], [55.4, 705.0], [55.5, 705.0], [55.6, 708.0], [55.7, 710.0], [55.8, 712.0], [55.9, 712.0], [56.0, 715.0], [56.1, 715.0], [56.2, 716.0], [56.3, 716.0], [56.4, 716.0], [56.5, 716.0], [56.6, 720.0], [56.7, 720.0], [56.8, 721.0], [56.9, 723.0], [57.0, 723.0], [57.1, 723.0], [57.2, 724.0], [57.3, 729.0], [57.4, 729.0], [57.5, 736.0], [57.6, 736.0], [57.7, 737.0], [57.8, 737.0], [57.9, 737.0], [58.0, 740.0], [58.1, 740.0], [58.2, 740.0], [58.3, 741.0], [58.4, 744.0], [58.5, 744.0], [58.6, 747.0], [58.7, 747.0], [58.8, 747.0], [58.9, 747.0], [59.0, 750.0], [59.1, 757.0], [59.2, 757.0], [59.3, 757.0], [59.4, 760.0], [59.5, 761.0], [59.6, 773.0], [59.7, 773.0], [59.8, 776.0], [59.9, 780.0], [60.0, 781.0], [60.1, 781.0], [60.2, 783.0], [60.3, 784.0], [60.4, 784.0], [60.5, 786.0], [60.6, 788.0], [60.7, 790.0], [60.8, 790.0], [60.9, 791.0], [61.0, 796.0], [61.1, 799.0], [61.2, 799.0], [61.3, 805.0], [61.4, 806.0], [61.5, 806.0], [61.6, 806.0], [61.7, 807.0], [61.8, 808.0], [61.9, 808.0], [62.0, 810.0], [62.1, 812.0], [62.2, 819.0], [62.3, 819.0], [62.4, 820.0], [62.5, 822.0], [62.6, 827.0], [62.7, 827.0], [62.8, 831.0], [62.9, 832.0], [63.0, 834.0], [63.1, 834.0], [63.2, 836.0], [63.3, 839.0], [63.4, 839.0], [63.5, 839.0], [63.6, 839.0], [63.7, 841.0], [63.8, 841.0], [63.9, 842.0], [64.0, 844.0], [64.1, 847.0], [64.2, 847.0], [64.3, 848.0], [64.4, 849.0], [64.5, 859.0], [64.6, 859.0], [64.7, 859.0], [64.8, 861.0], [64.9, 863.0], [65.0, 863.0], [65.1, 868.0], [65.2, 870.0], [65.3, 870.0], [65.4, 876.0], [65.5, 878.0], [65.6, 879.0], [65.7, 879.0], [65.8, 882.0], [65.9, 884.0], [66.0, 890.0], [66.1, 890.0], [66.2, 890.0], [66.3, 896.0], [66.4, 896.0], [66.5, 896.0], [66.6, 898.0], [66.7, 900.0], [66.8, 900.0], [66.9, 903.0], [67.0, 903.0], [67.1, 906.0], [67.2, 906.0], [67.3, 906.0], [67.4, 907.0], [67.5, 908.0], [67.6, 908.0], [67.7, 908.0], [67.8, 910.0], [67.9, 912.0], [68.0, 912.0], [68.1, 912.0], [68.2, 916.0], [68.3, 921.0], [68.4, 921.0], [68.5, 923.0], [68.6, 923.0], [68.7, 923.0], [68.8, 923.0], [68.9, 924.0], [69.0, 926.0], [69.1, 926.0], [69.2, 931.0], [69.3, 937.0], [69.4, 937.0], [69.5, 937.0], [69.6, 937.0], [69.7, 937.0], [69.8, 938.0], [69.9, 938.0], [70.0, 939.0], [70.1, 940.0], [70.2, 940.0], [70.3, 941.0], [70.4, 941.0], [70.5, 942.0], [70.6, 942.0], [70.7, 948.0], [70.8, 950.0], [70.9, 951.0], [71.0, 951.0], [71.1, 952.0], [71.2, 955.0], [71.3, 958.0], [71.4, 958.0], [71.5, 963.0], [71.6, 967.0], [71.7, 967.0], [71.8, 968.0], [71.9, 971.0], [72.0, 975.0], [72.1, 975.0], [72.2, 981.0], [72.3, 983.0], [72.4, 983.0], [72.5, 983.0], [72.6, 984.0], [72.7, 986.0], [72.8, 988.0], [72.9, 988.0], [73.0, 995.0], [73.1, 996.0], [73.2, 1003.0], [73.3, 1003.0], [73.4, 1012.0], [73.5, 1013.0], [73.6, 1013.0], [73.7, 1016.0], [73.8, 1023.0], [73.9, 1024.0], [74.0, 1024.0], [74.1, 1027.0], [74.2, 1033.0], [74.3, 1035.0], [74.4, 1035.0], [74.5, 1037.0], [74.6, 1037.0], [74.7, 1037.0], [74.8, 1037.0], [74.9, 1046.0], [75.0, 1047.0], [75.1, 1047.0], [75.2, 1053.0], [75.3, 1061.0], [75.4, 1062.0], [75.5, 1062.0], [75.6, 1062.0], [75.7, 1062.0], [75.8, 1063.0], [75.9, 1063.0], [76.0, 1066.0], [76.1, 1067.0], [76.2, 1069.0], [76.3, 1069.0], [76.4, 1069.0], [76.5, 1070.0], [76.6, 1074.0], [76.7, 1074.0], [76.8, 1075.0], [76.9, 1078.0], [77.0, 1078.0], [77.1, 1080.0], [77.2, 1081.0], [77.3, 1081.0], [77.4, 1081.0], [77.5, 1082.0], [77.6, 1082.0], [77.7, 1082.0], [77.8, 1082.0], [77.9, 1085.0], [78.0, 1085.0], [78.1, 1085.0], [78.2, 1085.0], [78.3, 1088.0], [78.4, 1092.0], [78.5, 1092.0], [78.6, 1094.0], [78.7, 1096.0], [78.8, 1101.0], [78.9, 1101.0], [79.0, 1104.0], [79.1, 1105.0], [79.2, 1110.0], [79.3, 1110.0], [79.4, 1119.0], [79.5, 1121.0], [79.6, 1123.0], [79.7, 1123.0], [79.8, 1124.0], [79.9, 1126.0], [80.0, 1127.0], [80.1, 1127.0], [80.2, 1130.0], [80.3, 1131.0], [80.4, 1131.0], [80.5, 1134.0], [80.6, 1136.0], [80.7, 1141.0], [80.8, 1141.0], [80.9, 1141.0], [81.0, 1143.0], [81.1, 1148.0], [81.2, 1148.0], [81.3, 1151.0], [81.4, 1154.0], [81.5, 1155.0], [81.6, 1155.0], [81.7, 1160.0], [81.8, 1160.0], [81.9, 1160.0], [82.0, 1168.0], [82.1, 1186.0], [82.2, 1194.0], [82.3, 1194.0], [82.4, 1196.0], [82.5, 1198.0], [82.6, 1199.0], [82.7, 1199.0], [82.8, 1204.0], [82.9, 1205.0], [83.0, 1207.0], [83.1, 1207.0], [83.2, 1208.0], [83.3, 1208.0], [83.4, 1208.0], [83.5, 1210.0], [83.6, 1213.0], [83.7, 1214.0], [83.8, 1214.0], [83.9, 1219.0], [84.0, 1235.0], [84.1, 1237.0], [84.2, 1237.0], [84.3, 1240.0], [84.4, 1244.0], [84.5, 1247.0], [84.6, 1247.0], [84.7, 1250.0], [84.8, 1251.0], [84.9, 1252.0], [85.0, 1252.0], [85.1, 1252.0], [85.2, 1253.0], [85.3, 1253.0], [85.4, 1265.0], [85.5, 1270.0], [85.6, 1278.0], [85.7, 1278.0], [85.8, 1288.0], [85.9, 1299.0], [86.0, 1301.0], [86.1, 1301.0], [86.2, 1307.0], [86.3, 1307.0], [86.4, 1310.0], [86.5, 1310.0], [86.6, 1327.0], [86.7, 1329.0], [86.8, 1329.0], [86.9, 1353.0], [87.0, 1357.0], [87.1, 1367.0], [87.2, 1367.0], [87.3, 1368.0], [87.4, 1370.0], [87.5, 1372.0], [87.6, 1372.0], [87.7, 1381.0], [87.8, 1394.0], [87.9, 1395.0], [88.0, 1395.0], [88.1, 1409.0], [88.2, 1410.0], [88.3, 1412.0], [88.4, 1412.0], [88.5, 1416.0], [88.6, 1417.0], [88.7, 1417.0], [88.8, 1417.0], [88.9, 1424.0], [89.0, 1447.0], [89.1, 1447.0], [89.2, 1448.0], [89.3, 1449.0], [89.4, 1457.0], [89.5, 1457.0], [89.6, 1457.0], [89.7, 1461.0], [89.8, 1465.0], [89.9, 1465.0], [90.0, 1467.0], [90.1, 1468.0], [90.2, 1468.0], [90.3, 1469.0], [90.4, 1470.0], [90.5, 1471.0], [90.6, 1471.0], [90.7, 1498.0], [90.8, 1506.0], [90.9, 1512.0], [91.0, 1512.0], [91.1, 1523.0], [91.2, 1524.0], [91.3, 1524.0], [91.4, 1524.0], [91.5, 1529.0], [91.6, 1530.0], [91.7, 1530.0], [91.8, 1532.0], [91.9, 1534.0], [92.0, 1537.0], [92.1, 1537.0], [92.2, 1539.0], [92.3, 1541.0], [92.4, 1544.0], [92.5, 1544.0], [92.6, 1546.0], [92.7, 1560.0], [92.8, 1561.0], [92.9, 1561.0], [93.0, 1586.0], [93.1, 1588.0], [93.2, 1604.0], [93.3, 1604.0], [93.4, 1606.0], [93.5, 1609.0], [93.6, 1609.0], [93.7, 1624.0], [93.8, 1624.0], [93.9, 1651.0], [94.0, 1651.0], [94.1, 1658.0], [94.2, 1684.0], [94.3, 1685.0], [94.4, 1685.0], [94.5, 1687.0], [94.6, 1689.0], [94.7, 1707.0], [94.8, 1707.0], [94.9, 1719.0], [95.0, 1724.0], [95.1, 1724.0], [95.2, 1727.0], [95.3, 1739.0], [95.4, 1752.0], [95.5, 1752.0], [95.6, 1754.0], [95.7, 1769.0], [95.8, 1774.0], [95.9, 1774.0], [96.0, 1774.0], [96.1, 1805.0], [96.2, 1812.0], [96.3, 1812.0], [96.4, 1854.0], [96.5, 1899.0], [96.6, 1911.0], [96.7, 1911.0], [96.8, 1916.0], [96.9, 1947.0], [97.0, 1947.0], [97.1, 2014.0], [97.2, 2021.0], [97.3, 2050.0], [97.4, 2050.0], [97.5, 2086.0], [97.6, 2182.0], [97.7, 2208.0], [97.8, 2208.0], [97.9, 2244.0], [98.0, 2249.0], [98.1, 2343.0], [98.2, 2343.0], [98.3, 2379.0], [98.4, 2426.0], [98.5, 2426.0], [98.6, 2513.0], [98.7, 2600.0], [98.8, 2856.0], [98.9, 2856.0], [99.0, 3002.0], [99.1, 3007.0], [99.2, 3254.0], [99.3, 3254.0], [99.4, 3825.0], [99.5, 3992.0], [99.6, 4965.0], [99.7, 4965.0], [99.8, 9033.0], [99.9, 9076.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 127.0, "series": [{"data": [[9000.0, 2.0], [600.0, 87.0], [700.0, 47.0], [800.0, 40.0], [900.0, 48.0], [1000.0, 41.0], [1100.0, 29.0], [1200.0, 24.0], [1300.0, 15.0], [1400.0, 20.0], [1500.0, 18.0], [1600.0, 11.0], [1700.0, 10.0], [1800.0, 4.0], [1900.0, 3.0], [2000.0, 4.0], [2100.0, 1.0], [2300.0, 2.0], [2200.0, 3.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [3000.0, 2.0], [200.0, 34.0], [3200.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [300.0, 52.0], [4900.0, 1.0], [400.0, 127.0], [500.0, 103.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 68.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 453.0, "series": [{"data": [[0.0, 214.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 453.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 68.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.90301724137931, "minX": 1.60402668E12, "maxY": 10.0, "series": [{"data": [[1.60402674E12, 9.90301724137931], [1.60402668E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402674E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 395.0, "minX": 1.0, "maxY": 2600.0, "series": [{"data": [[8.0, 1471.0], [4.0, 395.0], [2.0, 1131.0], [1.0, 1329.0], [9.0, 519.0], [10.0, 835.2410468319565], [5.0, 493.0], [6.0, 415.0], [3.0, 2600.0], [7.0, 422.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 836.9523809523815]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2049.9166666666665, "minX": 1.60402668E12, "maxY": 1295193.2833333334, "series": [{"data": [[1.60402674E12, 1295193.2833333334], [1.60402668E12, 900229.4833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60402674E12, 3473.116666666667], [1.60402668E12, 2049.9166666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402674E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 798.2025862068963, "minX": 1.60402668E12, "maxY": 903.29889298893, "series": [{"data": [[1.60402674E12, 798.2025862068963], [1.60402668E12, 903.29889298893]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402674E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 797.0193965517243, "minX": 1.60402668E12, "maxY": 901.6199261992616, "series": [{"data": [[1.60402674E12, 797.0193965517243], [1.60402668E12, 901.6199261992616]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402674E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.017241379310344824, "minX": 1.60402668E12, "maxY": 0.3985239852398524, "series": [{"data": [[1.60402674E12, 0.017241379310344824], [1.60402668E12, 0.3985239852398524]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402674E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 219.0, "minX": 1.60402668E12, "maxY": 9076.0, "series": [{"data": [[1.60402674E12, 9033.0], [1.60402668E12, 9076.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60402674E12, 232.3699997782707], [1.60402668E12, 224.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60402674E12, 233.2070000886917], [1.60402668E12, 224.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60402674E12, 232.83499988913536], [1.60402668E12, 224.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60402674E12, 219.0], [1.60402668E12, 223.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60402674E12, 620.0], [1.60402668E12, 737.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402674E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 422.5, "minX": 2.0, "maxY": 1260.0, "series": [{"data": [[8.0, 606.5], [2.0, 1230.0], [9.0, 798.0], [10.0, 817.0], [11.0, 930.0], [12.0, 700.0], [13.0, 676.0], [14.0, 486.5], [15.0, 788.0], [16.0, 539.5], [17.0, 473.0], [5.0, 1260.0], [20.0, 422.5], [21.0, 469.0], [22.0, 493.5], [7.0, 748.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 422.5, "minX": 2.0, "maxY": 1259.0, "series": [{"data": [[8.0, 606.0], [2.0, 1228.0], [9.0, 797.5], [10.0, 816.0], [11.0, 929.5], [12.0, 698.5], [13.0, 675.0], [14.0, 486.5], [15.0, 788.0], [16.0, 539.5], [17.0, 472.5], [5.0, 1259.0], [20.0, 422.5], [21.0, 469.0], [22.0, 492.5], [7.0, 747.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.666666666666667, "minX": 1.60402668E12, "maxY": 7.583333333333333, "series": [{"data": [[1.60402674E12, 7.583333333333333], [1.60402668E12, 4.666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402674E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.516666666666667, "minX": 1.60402668E12, "maxY": 7.733333333333333, "series": [{"data": [[1.60402674E12, 7.733333333333333], [1.60402668E12, 4.516666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402674E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.516666666666667, "minX": 1.60402668E12, "maxY": 7.733333333333333, "series": [{"data": [[1.60402674E12, 7.733333333333333], [1.60402668E12, 4.516666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402674E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.516666666666667, "minX": 1.60402668E12, "maxY": 7.733333333333333, "series": [{"data": [[1.60402674E12, 7.733333333333333], [1.60402668E12, 4.516666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402674E12, "title": "Total Transactions Per Second"}},
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

