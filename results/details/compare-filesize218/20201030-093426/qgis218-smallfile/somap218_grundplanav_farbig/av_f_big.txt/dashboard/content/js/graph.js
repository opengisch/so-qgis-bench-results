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
        data: {"result": {"minY": 215.0, "minX": 0.0, "maxY": 51030.0, "series": [{"data": [[0.0, 215.0], [0.1, 215.0], [0.2, 221.0], [0.3, 223.0], [0.4, 223.0], [0.5, 228.0], [0.6, 230.0], [0.7, 230.0], [0.8, 230.0], [0.9, 231.0], [1.0, 232.0], [1.1, 236.0], [1.2, 236.0], [1.3, 239.0], [1.4, 240.0], [1.5, 242.0], [1.6, 242.0], [1.7, 244.0], [1.8, 244.0], [1.9, 244.0], [2.0, 247.0], [2.1, 249.0], [2.2, 255.0], [2.3, 255.0], [2.4, 255.0], [2.5, 257.0], [2.6, 260.0], [2.7, 260.0], [2.8, 260.0], [2.9, 260.0], [3.0, 263.0], [3.1, 263.0], [3.2, 264.0], [3.3, 265.0], [3.4, 265.0], [3.5, 265.0], [3.6, 267.0], [3.7, 267.0], [3.8, 267.0], [3.9, 267.0], [4.0, 268.0], [4.1, 269.0], [4.2, 269.0], [4.3, 270.0], [4.4, 270.0], [4.5, 270.0], [4.6, 270.0], [4.7, 270.0], [4.8, 271.0], [4.9, 271.0], [5.0, 271.0], [5.1, 273.0], [5.2, 275.0], [5.3, 275.0], [5.4, 276.0], [5.5, 280.0], [5.6, 281.0], [5.7, 281.0], [5.8, 283.0], [5.9, 284.0], [6.0, 289.0], [6.1, 289.0], [6.2, 298.0], [6.3, 301.0], [6.4, 304.0], [6.5, 304.0], [6.6, 308.0], [6.7, 308.0], [6.8, 308.0], [6.9, 311.0], [7.0, 311.0], [7.1, 330.0], [7.2, 330.0], [7.3, 333.0], [7.4, 333.0], [7.5, 334.0], [7.6, 334.0], [7.7, 340.0], [7.8, 342.0], [7.9, 343.0], [8.0, 343.0], [8.1, 352.0], [8.2, 357.0], [8.3, 358.0], [8.4, 358.0], [8.5, 364.0], [8.6, 365.0], [8.7, 365.0], [8.8, 368.0], [8.9, 369.0], [9.0, 370.0], [9.1, 370.0], [9.2, 374.0], [9.3, 374.0], [9.4, 374.0], [9.5, 374.0], [9.6, 375.0], [9.7, 376.0], [9.8, 382.0], [9.9, 382.0], [10.0, 382.0], [10.1, 382.0], [10.2, 382.0], [10.3, 383.0], [10.4, 383.0], [10.5, 384.0], [10.6, 384.0], [10.7, 384.0], [10.8, 386.0], [10.9, 390.0], [11.0, 390.0], [11.1, 391.0], [11.2, 391.0], [11.3, 392.0], [11.4, 392.0], [11.5, 392.0], [11.6, 397.0], [11.7, 397.0], [11.8, 397.0], [11.9, 399.0], [12.0, 400.0], [12.1, 400.0], [12.2, 402.0], [12.3, 404.0], [12.4, 405.0], [12.5, 405.0], [12.6, 405.0], [12.7, 406.0], [12.8, 406.0], [12.9, 406.0], [13.0, 406.0], [13.1, 407.0], [13.2, 409.0], [13.3, 409.0], [13.4, 410.0], [13.5, 410.0], [13.6, 410.0], [13.7, 412.0], [13.8, 413.0], [13.9, 416.0], [14.0, 416.0], [14.1, 417.0], [14.2, 418.0], [14.3, 419.0], [14.4, 419.0], [14.5, 419.0], [14.6, 419.0], [14.7, 419.0], [14.8, 419.0], [14.9, 420.0], [15.0, 420.0], [15.1, 420.0], [15.2, 421.0], [15.3, 423.0], [15.4, 423.0], [15.5, 423.0], [15.6, 424.0], [15.7, 424.0], [15.8, 425.0], [15.9, 425.0], [16.0, 425.0], [16.1, 425.0], [16.2, 426.0], [16.3, 426.0], [16.4, 427.0], [16.5, 427.0], [16.6, 427.0], [16.7, 427.0], [16.8, 427.0], [16.9, 428.0], [17.0, 428.0], [17.1, 428.0], [17.2, 428.0], [17.3, 429.0], [17.4, 429.0], [17.5, 430.0], [17.6, 431.0], [17.7, 431.0], [17.8, 431.0], [17.9, 432.0], [18.0, 432.0], [18.1, 433.0], [18.2, 433.0], [18.3, 434.0], [18.4, 435.0], [18.5, 435.0], [18.6, 435.0], [18.7, 436.0], [18.8, 436.0], [18.9, 436.0], [19.0, 436.0], [19.1, 437.0], [19.2, 437.0], [19.3, 437.0], [19.4, 440.0], [19.5, 441.0], [19.6, 441.0], [19.7, 441.0], [19.8, 441.0], [19.9, 442.0], [20.0, 442.0], [20.1, 442.0], [20.2, 443.0], [20.3, 443.0], [20.4, 443.0], [20.5, 444.0], [20.6, 444.0], [20.7, 445.0], [20.8, 445.0], [20.9, 445.0], [21.0, 445.0], [21.1, 445.0], [21.2, 445.0], [21.3, 446.0], [21.4, 447.0], [21.5, 447.0], [21.6, 447.0], [21.7, 448.0], [21.8, 448.0], [21.9, 448.0], [22.0, 449.0], [22.1, 449.0], [22.2, 449.0], [22.3, 449.0], [22.4, 450.0], [22.5, 450.0], [22.6, 451.0], [22.7, 451.0], [22.8, 452.0], [22.9, 453.0], [23.0, 454.0], [23.1, 454.0], [23.2, 454.0], [23.3, 455.0], [23.4, 455.0], [23.5, 455.0], [23.6, 455.0], [23.7, 455.0], [23.8, 455.0], [23.9, 456.0], [24.0, 457.0], [24.1, 457.0], [24.2, 457.0], [24.3, 459.0], [24.4, 461.0], [24.5, 461.0], [24.6, 461.0], [24.7, 461.0], [24.8, 462.0], [24.9, 463.0], [25.0, 463.0], [25.1, 464.0], [25.2, 464.0], [25.3, 464.0], [25.4, 465.0], [25.5, 465.0], [25.6, 465.0], [25.7, 465.0], [25.8, 466.0], [25.9, 466.0], [26.0, 466.0], [26.1, 466.0], [26.2, 467.0], [26.3, 468.0], [26.4, 468.0], [26.5, 468.0], [26.6, 470.0], [26.7, 470.0], [26.8, 470.0], [26.9, 470.0], [27.0, 470.0], [27.1, 470.0], [27.2, 470.0], [27.3, 470.0], [27.4, 470.0], [27.5, 472.0], [27.6, 472.0], [27.7, 472.0], [27.8, 474.0], [27.9, 474.0], [28.0, 474.0], [28.1, 475.0], [28.2, 476.0], [28.3, 476.0], [28.4, 476.0], [28.5, 477.0], [28.6, 478.0], [28.7, 478.0], [28.8, 478.0], [28.9, 478.0], [29.0, 478.0], [29.1, 478.0], [29.2, 479.0], [29.3, 479.0], [29.4, 480.0], [29.5, 480.0], [29.6, 480.0], [29.7, 480.0], [29.8, 480.0], [29.9, 480.0], [30.0, 481.0], [30.1, 482.0], [30.2, 482.0], [30.3, 482.0], [30.4, 482.0], [30.5, 483.0], [30.6, 483.0], [30.7, 484.0], [30.8, 485.0], [30.9, 485.0], [31.0, 485.0], [31.1, 486.0], [31.2, 486.0], [31.3, 487.0], [31.4, 487.0], [31.5, 488.0], [31.6, 488.0], [31.7, 488.0], [31.8, 488.0], [31.9, 489.0], [32.0, 489.0], [32.1, 489.0], [32.2, 489.0], [32.3, 490.0], [32.4, 491.0], [32.5, 491.0], [32.6, 491.0], [32.7, 491.0], [32.8, 491.0], [32.9, 491.0], [33.0, 493.0], [33.1, 493.0], [33.2, 495.0], [33.3, 495.0], [33.4, 495.0], [33.5, 496.0], [33.6, 496.0], [33.7, 497.0], [33.8, 497.0], [33.9, 497.0], [34.0, 497.0], [34.1, 499.0], [34.2, 499.0], [34.3, 500.0], [34.4, 500.0], [34.5, 501.0], [34.6, 501.0], [34.7, 501.0], [34.8, 501.0], [34.9, 502.0], [35.0, 502.0], [35.1, 502.0], [35.2, 503.0], [35.3, 503.0], [35.4, 504.0], [35.5, 504.0], [35.6, 505.0], [35.7, 507.0], [35.8, 508.0], [35.9, 508.0], [36.0, 508.0], [36.1, 508.0], [36.2, 508.0], [36.3, 508.0], [36.4, 508.0], [36.5, 509.0], [36.6, 511.0], [36.7, 511.0], [36.8, 511.0], [36.9, 512.0], [37.0, 512.0], [37.1, 512.0], [37.2, 512.0], [37.3, 512.0], [37.4, 512.0], [37.5, 512.0], [37.6, 514.0], [37.7, 514.0], [37.8, 514.0], [37.9, 516.0], [38.0, 516.0], [38.1, 516.0], [38.2, 516.0], [38.3, 517.0], [38.4, 518.0], [38.5, 518.0], [38.6, 518.0], [38.7, 519.0], [38.8, 519.0], [38.9, 519.0], [39.0, 520.0], [39.1, 521.0], [39.2, 523.0], [39.3, 523.0], [39.4, 523.0], [39.5, 523.0], [39.6, 523.0], [39.7, 523.0], [39.8, 523.0], [39.9, 524.0], [40.0, 524.0], [40.1, 524.0], [40.2, 524.0], [40.3, 525.0], [40.4, 525.0], [40.5, 525.0], [40.6, 526.0], [40.7, 526.0], [40.8, 526.0], [40.9, 526.0], [41.0, 527.0], [41.1, 528.0], [41.2, 528.0], [41.3, 528.0], [41.4, 528.0], [41.5, 530.0], [41.6, 530.0], [41.7, 531.0], [41.8, 531.0], [41.9, 531.0], [42.0, 532.0], [42.1, 532.0], [42.2, 532.0], [42.3, 532.0], [42.4, 534.0], [42.5, 534.0], [42.6, 534.0], [42.7, 534.0], [42.8, 535.0], [42.9, 537.0], [43.0, 537.0], [43.1, 537.0], [43.2, 537.0], [43.3, 539.0], [43.4, 539.0], [43.5, 539.0], [43.6, 539.0], [43.7, 541.0], [43.8, 541.0], [43.9, 541.0], [44.0, 542.0], [44.1, 542.0], [44.2, 542.0], [44.3, 543.0], [44.4, 543.0], [44.5, 544.0], [44.6, 544.0], [44.7, 544.0], [44.8, 546.0], [44.9, 546.0], [45.0, 546.0], [45.1, 547.0], [45.2, 547.0], [45.3, 547.0], [45.4, 548.0], [45.5, 550.0], [45.6, 550.0], [45.7, 550.0], [45.8, 550.0], [45.9, 551.0], [46.0, 551.0], [46.1, 551.0], [46.2, 551.0], [46.3, 551.0], [46.4, 552.0], [46.5, 552.0], [46.6, 556.0], [46.7, 557.0], [46.8, 557.0], [46.9, 560.0], [47.0, 561.0], [47.1, 563.0], [47.2, 563.0], [47.3, 563.0], [47.4, 564.0], [47.5, 568.0], [47.6, 568.0], [47.7, 572.0], [47.8, 573.0], [47.9, 573.0], [48.0, 573.0], [48.1, 577.0], [48.2, 579.0], [48.3, 581.0], [48.4, 581.0], [48.5, 583.0], [48.6, 585.0], [48.7, 585.0], [48.8, 585.0], [48.9, 586.0], [49.0, 587.0], [49.1, 587.0], [49.2, 588.0], [49.3, 588.0], [49.4, 590.0], [49.5, 590.0], [49.6, 592.0], [49.7, 592.0], [49.8, 594.0], [49.9, 594.0], [50.0, 594.0], [50.1, 595.0], [50.2, 595.0], [50.3, 596.0], [50.4, 599.0], [50.5, 599.0], [50.6, 599.0], [50.7, 601.0], [50.8, 602.0], [50.9, 602.0], [51.0, 602.0], [51.1, 602.0], [51.2, 603.0], [51.3, 604.0], [51.4, 604.0], [51.5, 604.0], [51.6, 606.0], [51.7, 606.0], [51.8, 610.0], [51.9, 614.0], [52.0, 615.0], [52.1, 615.0], [52.2, 615.0], [52.3, 617.0], [52.4, 617.0], [52.5, 617.0], [52.6, 618.0], [52.7, 618.0], [52.8, 618.0], [52.9, 618.0], [53.0, 619.0], [53.1, 619.0], [53.2, 622.0], [53.3, 622.0], [53.4, 623.0], [53.5, 624.0], [53.6, 624.0], [53.7, 625.0], [53.8, 626.0], [53.9, 626.0], [54.0, 626.0], [54.1, 628.0], [54.2, 628.0], [54.3, 629.0], [54.4, 629.0], [54.5, 631.0], [54.6, 632.0], [54.7, 632.0], [54.8, 632.0], [54.9, 632.0], [55.0, 633.0], [55.1, 633.0], [55.2, 633.0], [55.3, 634.0], [55.4, 635.0], [55.5, 635.0], [55.6, 636.0], [55.7, 636.0], [55.8, 639.0], [55.9, 639.0], [56.0, 639.0], [56.1, 639.0], [56.2, 639.0], [56.3, 639.0], [56.4, 640.0], [56.5, 641.0], [56.6, 642.0], [56.7, 642.0], [56.8, 643.0], [56.9, 652.0], [57.0, 652.0], [57.1, 655.0], [57.2, 656.0], [57.3, 659.0], [57.4, 659.0], [57.5, 666.0], [57.6, 673.0], [57.7, 678.0], [57.8, 678.0], [57.9, 679.0], [58.0, 680.0], [58.1, 681.0], [58.2, 681.0], [58.3, 682.0], [58.4, 684.0], [58.5, 684.0], [58.6, 685.0], [58.7, 685.0], [58.8, 687.0], [58.9, 687.0], [59.0, 689.0], [59.1, 691.0], [59.2, 691.0], [59.3, 691.0], [59.4, 693.0], [59.5, 694.0], [59.6, 695.0], [59.7, 695.0], [59.8, 700.0], [59.9, 700.0], [60.0, 704.0], [60.1, 704.0], [60.2, 712.0], [60.3, 712.0], [60.4, 712.0], [60.5, 721.0], [60.6, 721.0], [60.7, 722.0], [60.8, 722.0], [60.9, 723.0], [61.0, 725.0], [61.1, 734.0], [61.2, 734.0], [61.3, 737.0], [61.4, 744.0], [61.5, 747.0], [61.6, 747.0], [61.7, 752.0], [61.8, 756.0], [61.9, 756.0], [62.0, 758.0], [62.1, 767.0], [62.2, 767.0], [62.3, 767.0], [62.4, 767.0], [62.5, 768.0], [62.6, 776.0], [62.7, 776.0], [62.8, 777.0], [62.9, 778.0], [63.0, 781.0], [63.1, 781.0], [63.2, 787.0], [63.3, 791.0], [63.4, 791.0], [63.5, 792.0], [63.6, 804.0], [63.7, 806.0], [63.8, 806.0], [63.9, 808.0], [64.0, 809.0], [64.1, 815.0], [64.2, 815.0], [64.3, 818.0], [64.4, 823.0], [64.5, 824.0], [64.6, 824.0], [64.7, 827.0], [64.8, 827.0], [64.9, 829.0], [65.0, 829.0], [65.1, 841.0], [65.2, 845.0], [65.3, 845.0], [65.4, 849.0], [65.5, 849.0], [65.6, 853.0], [65.7, 853.0], [65.8, 853.0], [65.9, 854.0], [66.0, 856.0], [66.1, 856.0], [66.2, 859.0], [66.3, 860.0], [66.4, 862.0], [66.5, 862.0], [66.6, 862.0], [66.7, 864.0], [66.8, 864.0], [66.9, 874.0], [67.0, 875.0], [67.1, 878.0], [67.2, 878.0], [67.3, 880.0], [67.4, 881.0], [67.5, 882.0], [67.6, 882.0], [67.7, 882.0], [67.8, 883.0], [67.9, 885.0], [68.0, 885.0], [68.1, 885.0], [68.2, 887.0], [68.3, 895.0], [68.4, 895.0], [68.5, 897.0], [68.6, 898.0], [68.7, 898.0], [68.8, 903.0], [68.9, 903.0], [69.0, 904.0], [69.1, 904.0], [69.2, 905.0], [69.3, 905.0], [69.4, 905.0], [69.5, 905.0], [69.6, 908.0], [69.7, 908.0], [69.8, 909.0], [69.9, 909.0], [70.0, 909.0], [70.1, 910.0], [70.2, 910.0], [70.3, 913.0], [70.4, 915.0], [70.5, 918.0], [70.6, 918.0], [70.7, 919.0], [70.8, 920.0], [70.9, 921.0], [71.0, 921.0], [71.1, 924.0], [71.2, 930.0], [71.3, 930.0], [71.4, 930.0], [71.5, 932.0], [71.6, 937.0], [71.7, 937.0], [71.8, 938.0], [71.9, 940.0], [72.0, 941.0], [72.1, 941.0], [72.2, 943.0], [72.3, 945.0], [72.4, 946.0], [72.5, 946.0], [72.6, 948.0], [72.7, 948.0], [72.8, 949.0], [72.9, 949.0], [73.0, 950.0], [73.1, 952.0], [73.2, 953.0], [73.3, 953.0], [73.4, 956.0], [73.5, 957.0], [73.6, 957.0], [73.7, 958.0], [73.8, 960.0], [73.9, 960.0], [74.0, 960.0], [74.1, 963.0], [74.2, 964.0], [74.3, 967.0], [74.4, 967.0], [74.5, 968.0], [74.6, 969.0], [74.7, 971.0], [74.8, 971.0], [74.9, 971.0], [75.0, 973.0], [75.1, 973.0], [75.2, 975.0], [75.3, 975.0], [75.4, 978.0], [75.5, 978.0], [75.6, 979.0], [75.7, 980.0], [75.8, 981.0], [75.9, 981.0], [76.0, 982.0], [76.1, 983.0], [76.2, 984.0], [76.3, 984.0], [76.4, 985.0], [76.5, 986.0], [76.6, 986.0], [76.7, 986.0], [76.8, 993.0], [76.9, 993.0], [77.0, 993.0], [77.1, 995.0], [77.2, 997.0], [77.3, 999.0], [77.4, 999.0], [77.5, 1004.0], [77.6, 1005.0], [77.7, 1007.0], [77.8, 1007.0], [77.9, 1009.0], [78.0, 1014.0], [78.1, 1014.0], [78.2, 1014.0], [78.3, 1015.0], [78.4, 1015.0], [78.5, 1015.0], [78.6, 1016.0], [78.7, 1016.0], [78.8, 1017.0], [78.9, 1017.0], [79.0, 1018.0], [79.1, 1018.0], [79.2, 1022.0], [79.3, 1022.0], [79.4, 1023.0], [79.5, 1023.0], [79.6, 1026.0], [79.7, 1026.0], [79.8, 1026.0], [79.9, 1026.0], [80.0, 1028.0], [80.1, 1028.0], [80.2, 1032.0], [80.3, 1033.0], [80.4, 1033.0], [80.5, 1038.0], [80.6, 1042.0], [80.7, 1046.0], [80.8, 1046.0], [80.9, 1047.0], [81.0, 1055.0], [81.1, 1056.0], [81.2, 1056.0], [81.3, 1057.0], [81.4, 1071.0], [81.5, 1079.0], [81.6, 1079.0], [81.7, 1099.0], [81.8, 1105.0], [81.9, 1105.0], [82.0, 1107.0], [82.1, 1112.0], [82.2, 1115.0], [82.3, 1115.0], [82.4, 1116.0], [82.5, 1122.0], [82.6, 1126.0], [82.7, 1126.0], [82.8, 1129.0], [82.9, 1132.0], [83.0, 1135.0], [83.1, 1135.0], [83.2, 1136.0], [83.3, 1151.0], [83.4, 1151.0], [83.5, 1159.0], [83.6, 1162.0], [83.7, 1164.0], [83.8, 1164.0], [83.9, 1183.0], [84.0, 1184.0], [84.1, 1186.0], [84.2, 1186.0], [84.3, 1187.0], [84.4, 1189.0], [84.5, 1190.0], [84.6, 1190.0], [84.7, 1194.0], [84.8, 1194.0], [84.9, 1201.0], [85.0, 1201.0], [85.1, 1214.0], [85.2, 1217.0], [85.3, 1217.0], [85.4, 1223.0], [85.5, 1236.0], [85.6, 1246.0], [85.7, 1246.0], [85.8, 1247.0], [85.9, 1248.0], [86.0, 1249.0], [86.1, 1249.0], [86.2, 1251.0], [86.3, 1256.0], [86.4, 1260.0], [86.5, 1260.0], [86.6, 1266.0], [86.7, 1267.0], [86.8, 1267.0], [86.9, 1267.0], [87.0, 1270.0], [87.1, 1272.0], [87.2, 1272.0], [87.3, 1272.0], [87.4, 1272.0], [87.5, 1274.0], [87.6, 1274.0], [87.7, 1277.0], [87.8, 1284.0], [87.9, 1289.0], [88.0, 1289.0], [88.1, 1290.0], [88.2, 1291.0], [88.3, 1295.0], [88.4, 1295.0], [88.5, 1296.0], [88.6, 1296.0], [88.7, 1296.0], [88.8, 1300.0], [88.9, 1306.0], [89.0, 1311.0], [89.1, 1311.0], [89.2, 1311.0], [89.3, 1313.0], [89.4, 1318.0], [89.5, 1318.0], [89.6, 1320.0], [89.7, 1324.0], [89.8, 1337.0], [89.9, 1337.0], [90.0, 1338.0], [90.1, 1341.0], [90.2, 1341.0], [90.3, 1353.0], [90.4, 1356.0], [90.5, 1359.0], [90.6, 1359.0], [90.7, 1371.0], [90.8, 1371.0], [90.9, 1373.0], [91.0, 1373.0], [91.1, 1375.0], [91.2, 1376.0], [91.3, 1377.0], [91.4, 1377.0], [91.5, 1378.0], [91.6, 1382.0], [91.7, 1382.0], [91.8, 1390.0], [91.9, 1413.0], [92.0, 1422.0], [92.1, 1422.0], [92.2, 1425.0], [92.3, 1428.0], [92.4, 1429.0], [92.5, 1429.0], [92.6, 1454.0], [92.7, 1455.0], [92.8, 1466.0], [92.9, 1466.0], [93.0, 1467.0], [93.1, 1473.0], [93.2, 1484.0], [93.3, 1484.0], [93.4, 1507.0], [93.5, 1508.0], [93.6, 1508.0], [93.7, 1522.0], [93.8, 1528.0], [93.9, 1548.0], [94.0, 1548.0], [94.1, 1565.0], [94.2, 1566.0], [94.3, 1569.0], [94.4, 1569.0], [94.5, 1577.0], [94.6, 1624.0], [94.7, 1628.0], [94.8, 1628.0], [94.9, 1636.0], [95.0, 1646.0], [95.1, 1646.0], [95.2, 1660.0], [95.3, 1662.0], [95.4, 1663.0], [95.5, 1663.0], [95.6, 1666.0], [95.7, 1694.0], [95.8, 1731.0], [95.9, 1731.0], [96.0, 1813.0], [96.1, 1824.0], [96.2, 1852.0], [96.3, 1852.0], [96.4, 1883.0], [96.5, 1901.0], [96.6, 1999.0], [96.7, 1999.0], [96.8, 2072.0], [96.9, 2106.0], [97.0, 2106.0], [97.1, 2152.0], [97.2, 2194.0], [97.3, 2282.0], [97.4, 2282.0], [97.5, 2311.0], [97.6, 2314.0], [97.7, 2323.0], [97.8, 2323.0], [97.9, 2350.0], [98.0, 2371.0], [98.1, 2415.0], [98.2, 2415.0], [98.3, 2652.0], [98.4, 2674.0], [98.5, 2674.0], [98.6, 2902.0], [98.7, 4235.0], [98.8, 4468.0], [98.9, 4468.0], [99.0, 6597.0], [99.1, 7524.0], [99.2, 7738.0], [99.3, 7738.0], [99.4, 12304.0], [99.5, 15426.0], [99.6, 17514.0], [99.7, 17514.0], [99.8, 45217.0], [99.9, 51030.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 164.0, "series": [{"data": [[600.0, 67.0], [700.0, 28.0], [12300.0, 1.0], [800.0, 38.0], [900.0, 64.0], [15400.0, 1.0], [1000.0, 32.0], [1100.0, 23.0], [17500.0, 1.0], [1200.0, 28.0], [1300.0, 23.0], [1400.0, 11.0], [1500.0, 9.0], [1600.0, 9.0], [1700.0, 1.0], [1800.0, 4.0], [1900.0, 2.0], [2000.0, 1.0], [2100.0, 3.0], [2200.0, 1.0], [2300.0, 5.0], [2400.0, 1.0], [2600.0, 2.0], [2900.0, 1.0], [45200.0, 1.0], [51000.0, 1.0], [200.0, 46.0], [4200.0, 1.0], [4400.0, 1.0], [300.0, 42.0], [400.0, 164.0], [6500.0, 1.0], [7500.0, 1.0], [7700.0, 1.0], [500.0, 120.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 51000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 49.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 433.0, "series": [{"data": [[0.0, 253.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 433.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 49.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.866468842729972, "minX": 1.60405068E12, "maxY": 10.0, "series": [{"data": [[1.60405068E12, 10.0], [1.60405074E12, 9.866468842729972]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405074E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 445.0, "minX": 1.0, "maxY": 51030.0, "series": [{"data": [[8.0, 450.0], [4.0, 997.0], [2.0, 51030.0], [1.0, 45217.0], [9.0, 445.0], [10.0, 841.3608815427006], [5.0, 474.0], [6.0, 535.0], [3.0, 1425.0], [7.0, 470.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 968.5319727891164]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2536.733333333333, "minX": 1.60405068E12, "maxY": 1216194.9833333334, "series": [{"data": [[1.60405068E12, 1216194.9833333334], [1.60405074E12, 979089.1333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60405068E12, 2986.3], [1.60405074E12, 2536.733333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405074E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 878.6507537688447, "minX": 1.60405068E12, "maxY": 1074.6824925816031, "series": [{"data": [[1.60405068E12, 878.6507537688447], [1.60405074E12, 1074.6824925816031]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405074E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 877.5025125628133, "minX": 1.60405068E12, "maxY": 1073.554896142433, "series": [{"data": [[1.60405068E12, 877.5025125628133], [1.60405074E12, 1073.554896142433]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405074E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.029673590504451064, "minX": 1.60405068E12, "maxY": 0.2336683417085429, "series": [{"data": [[1.60405068E12, 0.2336683417085429], [1.60405074E12, 0.029673590504451064]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405074E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 215.0, "minX": 1.60405068E12, "maxY": 51030.0, "series": [{"data": [[1.60405068E12, 17514.0], [1.60405074E12, 51030.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60405068E12, 225.95499952435495], [1.60405074E12, 270.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60405068E12, 227.75050019025804], [1.60405074E12, 270.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60405068E12, 226.95249976217747], [1.60405074E12, 270.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60405068E12, 215.0], [1.60405074E12, 230.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60405068E12, 593.5], [1.60405074E12, 594.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405074E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 271.0, "minX": 1.0, "maxY": 23321.0, "series": [{"data": [[8.0, 823.5], [9.0, 712.0], [10.0, 669.0], [11.0, 628.0], [12.0, 550.0], [13.0, 522.0], [14.0, 502.5], [15.0, 486.0], [1.0, 23321.0], [16.0, 549.0], [4.0, 1041.5], [17.0, 271.0], [18.0, 320.5], [5.0, 1220.0], [6.0, 1027.5], [7.0, 592.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 271.0, "minX": 1.0, "maxY": 23314.5, "series": [{"data": [[8.0, 822.0], [9.0, 711.0], [10.0, 668.5], [11.0, 627.0], [12.0, 550.0], [13.0, 521.5], [14.0, 502.0], [15.0, 486.0], [1.0, 23314.5], [16.0, 549.0], [4.0, 1040.5], [17.0, 271.0], [18.0, 320.5], [5.0, 1218.0], [6.0, 1023.5], [7.0, 591.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.45, "minX": 1.60405068E12, "maxY": 6.8, "series": [{"data": [[1.60405068E12, 6.8], [1.60405074E12, 5.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405074E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.616666666666666, "minX": 1.60405068E12, "maxY": 6.633333333333334, "series": [{"data": [[1.60405068E12, 6.633333333333334], [1.60405074E12, 5.616666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405074E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.616666666666666, "minX": 1.60405068E12, "maxY": 6.633333333333334, "series": [{"data": [[1.60405068E12, 6.633333333333334], [1.60405074E12, 5.616666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405074E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.616666666666666, "minX": 1.60405068E12, "maxY": 6.633333333333334, "series": [{"data": [[1.60405068E12, 6.633333333333334], [1.60405074E12, 5.616666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405074E12, "title": "Total Transactions Per Second"}},
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

