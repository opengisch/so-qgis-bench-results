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
        data: {"result": {"minY": 219.0, "minX": 0.0, "maxY": 56440.0, "series": [{"data": [[0.0, 219.0], [0.1, 219.0], [0.2, 228.0], [0.3, 233.0], [0.4, 233.0], [0.5, 233.0], [0.6, 237.0], [0.7, 241.0], [0.8, 241.0], [0.9, 246.0], [1.0, 251.0], [1.1, 258.0], [1.2, 258.0], [1.3, 262.0], [1.4, 262.0], [1.5, 263.0], [1.6, 263.0], [1.7, 264.0], [1.8, 264.0], [1.9, 264.0], [2.0, 266.0], [2.1, 269.0], [2.2, 272.0], [2.3, 272.0], [2.4, 272.0], [2.5, 272.0], [2.6, 273.0], [2.7, 273.0], [2.8, 278.0], [2.9, 281.0], [3.0, 281.0], [3.1, 281.0], [3.2, 283.0], [3.3, 284.0], [3.4, 284.0], [3.5, 284.0], [3.6, 287.0], [3.7, 289.0], [3.8, 289.0], [3.9, 290.0], [4.0, 295.0], [4.1, 296.0], [4.2, 296.0], [4.3, 296.0], [4.4, 297.0], [4.5, 300.0], [4.6, 300.0], [4.7, 305.0], [4.8, 306.0], [4.9, 307.0], [5.0, 307.0], [5.1, 314.0], [5.2, 315.0], [5.3, 315.0], [5.4, 316.0], [5.5, 318.0], [5.6, 324.0], [5.7, 324.0], [5.8, 329.0], [5.9, 335.0], [6.0, 339.0], [6.1, 339.0], [6.2, 348.0], [6.3, 349.0], [6.4, 350.0], [6.5, 350.0], [6.6, 351.0], [6.7, 351.0], [6.8, 351.0], [6.9, 352.0], [7.0, 352.0], [7.1, 353.0], [7.2, 353.0], [7.3, 354.0], [7.4, 358.0], [7.5, 359.0], [7.6, 359.0], [7.7, 360.0], [7.8, 361.0], [7.9, 362.0], [8.0, 362.0], [8.1, 362.0], [8.2, 363.0], [8.3, 365.0], [8.4, 365.0], [8.5, 365.0], [8.6, 366.0], [8.7, 366.0], [8.8, 368.0], [8.9, 369.0], [9.0, 369.0], [9.1, 369.0], [9.2, 370.0], [9.3, 370.0], [9.4, 375.0], [9.5, 375.0], [9.6, 376.0], [9.7, 378.0], [9.8, 379.0], [9.9, 379.0], [10.0, 379.0], [10.1, 381.0], [10.2, 381.0], [10.3, 381.0], [10.4, 383.0], [10.5, 384.0], [10.6, 384.0], [10.7, 384.0], [10.8, 385.0], [10.9, 386.0], [11.0, 386.0], [11.1, 388.0], [11.2, 388.0], [11.3, 389.0], [11.4, 389.0], [11.5, 389.0], [11.6, 390.0], [11.7, 390.0], [11.8, 394.0], [11.9, 396.0], [12.0, 396.0], [12.1, 396.0], [12.2, 396.0], [12.3, 397.0], [12.4, 397.0], [12.5, 397.0], [12.6, 398.0], [12.7, 399.0], [12.8, 399.0], [12.9, 399.0], [13.0, 400.0], [13.1, 400.0], [13.2, 401.0], [13.3, 401.0], [13.4, 401.0], [13.5, 401.0], [13.6, 401.0], [13.7, 401.0], [13.8, 402.0], [13.9, 402.0], [14.0, 402.0], [14.1, 403.0], [14.2, 404.0], [14.3, 405.0], [14.4, 405.0], [14.5, 406.0], [14.6, 406.0], [14.7, 407.0], [14.8, 407.0], [14.9, 408.0], [15.0, 408.0], [15.1, 408.0], [15.2, 409.0], [15.3, 410.0], [15.4, 410.0], [15.5, 410.0], [15.6, 410.0], [15.7, 411.0], [15.8, 411.0], [15.9, 411.0], [16.0, 412.0], [16.1, 412.0], [16.2, 412.0], [16.3, 412.0], [16.4, 412.0], [16.5, 413.0], [16.6, 413.0], [16.7, 413.0], [16.8, 415.0], [16.9, 415.0], [17.0, 415.0], [17.1, 415.0], [17.2, 416.0], [17.3, 416.0], [17.4, 416.0], [17.5, 417.0], [17.6, 418.0], [17.7, 418.0], [17.8, 418.0], [17.9, 419.0], [18.0, 419.0], [18.1, 420.0], [18.2, 420.0], [18.3, 421.0], [18.4, 422.0], [18.5, 422.0], [18.6, 422.0], [18.7, 422.0], [18.8, 423.0], [18.9, 423.0], [19.0, 424.0], [19.1, 425.0], [19.2, 425.0], [19.3, 425.0], [19.4, 425.0], [19.5, 427.0], [19.6, 427.0], [19.7, 427.0], [19.8, 427.0], [19.9, 427.0], [20.0, 428.0], [20.1, 428.0], [20.2, 428.0], [20.3, 429.0], [20.4, 429.0], [20.5, 429.0], [20.6, 429.0], [20.7, 430.0], [20.8, 430.0], [20.9, 431.0], [21.0, 433.0], [21.1, 433.0], [21.2, 433.0], [21.3, 434.0], [21.4, 435.0], [21.5, 435.0], [21.6, 435.0], [21.7, 435.0], [21.8, 435.0], [21.9, 435.0], [22.0, 435.0], [22.1, 436.0], [22.2, 437.0], [22.3, 437.0], [22.4, 437.0], [22.5, 438.0], [22.6, 438.0], [22.7, 438.0], [22.8, 438.0], [22.9, 439.0], [23.0, 439.0], [23.1, 439.0], [23.2, 440.0], [23.3, 440.0], [23.4, 440.0], [23.5, 443.0], [23.6, 443.0], [23.7, 443.0], [23.8, 443.0], [23.9, 443.0], [24.0, 445.0], [24.1, 446.0], [24.2, 446.0], [24.3, 446.0], [24.4, 446.0], [24.5, 446.0], [24.6, 446.0], [24.7, 447.0], [24.8, 447.0], [24.9, 447.0], [25.0, 447.0], [25.1, 448.0], [25.2, 448.0], [25.3, 448.0], [25.4, 448.0], [25.5, 449.0], [25.6, 449.0], [25.7, 449.0], [25.8, 449.0], [25.9, 449.0], [26.0, 449.0], [26.1, 449.0], [26.2, 450.0], [26.3, 451.0], [26.4, 451.0], [26.5, 451.0], [26.6, 451.0], [26.7, 452.0], [26.8, 452.0], [26.9, 452.0], [27.0, 453.0], [27.1, 454.0], [27.2, 454.0], [27.3, 455.0], [27.4, 456.0], [27.5, 457.0], [27.6, 457.0], [27.7, 458.0], [27.8, 458.0], [27.9, 459.0], [28.0, 459.0], [28.1, 460.0], [28.2, 462.0], [28.3, 462.0], [28.4, 462.0], [28.5, 465.0], [28.6, 465.0], [28.7, 465.0], [28.8, 466.0], [28.9, 466.0], [29.0, 467.0], [29.1, 467.0], [29.2, 468.0], [29.3, 468.0], [29.4, 468.0], [29.5, 468.0], [29.6, 468.0], [29.7, 470.0], [29.8, 470.0], [29.9, 470.0], [30.0, 470.0], [30.1, 470.0], [30.2, 470.0], [30.3, 471.0], [30.4, 471.0], [30.5, 471.0], [30.6, 471.0], [30.7, 471.0], [30.8, 471.0], [30.9, 472.0], [31.0, 472.0], [31.1, 472.0], [31.2, 472.0], [31.3, 472.0], [31.4, 472.0], [31.5, 472.0], [31.6, 473.0], [31.7, 473.0], [31.8, 473.0], [31.9, 474.0], [32.0, 474.0], [32.1, 474.0], [32.2, 475.0], [32.3, 475.0], [32.4, 476.0], [32.5, 476.0], [32.6, 476.0], [32.7, 476.0], [32.8, 476.0], [32.9, 476.0], [33.0, 476.0], [33.1, 479.0], [33.2, 479.0], [33.3, 479.0], [33.4, 479.0], [33.5, 480.0], [33.6, 480.0], [33.7, 480.0], [33.8, 480.0], [33.9, 481.0], [34.0, 481.0], [34.1, 482.0], [34.2, 482.0], [34.3, 484.0], [34.4, 484.0], [34.5, 486.0], [34.6, 486.0], [34.7, 486.0], [34.8, 486.0], [34.9, 487.0], [35.0, 488.0], [35.1, 488.0], [35.2, 488.0], [35.3, 488.0], [35.4, 488.0], [35.5, 488.0], [35.6, 488.0], [35.7, 489.0], [35.8, 489.0], [35.9, 489.0], [36.0, 490.0], [36.1, 490.0], [36.2, 491.0], [36.3, 491.0], [36.4, 492.0], [36.5, 493.0], [36.6, 493.0], [36.7, 493.0], [36.8, 495.0], [36.9, 496.0], [37.0, 496.0], [37.1, 496.0], [37.2, 497.0], [37.3, 497.0], [37.4, 497.0], [37.5, 497.0], [37.6, 499.0], [37.7, 501.0], [37.8, 501.0], [37.9, 501.0], [38.0, 502.0], [38.1, 503.0], [38.2, 503.0], [38.3, 503.0], [38.4, 503.0], [38.5, 503.0], [38.6, 503.0], [38.7, 503.0], [38.8, 503.0], [38.9, 503.0], [39.0, 504.0], [39.1, 504.0], [39.2, 505.0], [39.3, 505.0], [39.4, 505.0], [39.5, 506.0], [39.6, 508.0], [39.7, 508.0], [39.8, 508.0], [39.9, 509.0], [40.0, 509.0], [40.1, 509.0], [40.2, 509.0], [40.3, 509.0], [40.4, 509.0], [40.5, 510.0], [40.6, 513.0], [40.7, 513.0], [40.8, 513.0], [40.9, 513.0], [41.0, 514.0], [41.1, 514.0], [41.2, 514.0], [41.3, 516.0], [41.4, 516.0], [41.5, 516.0], [41.6, 516.0], [41.7, 517.0], [41.8, 517.0], [41.9, 517.0], [42.0, 520.0], [42.1, 521.0], [42.2, 521.0], [42.3, 521.0], [42.4, 522.0], [42.5, 524.0], [42.6, 525.0], [42.7, 525.0], [42.8, 526.0], [42.9, 529.0], [43.0, 529.0], [43.1, 529.0], [43.2, 530.0], [43.3, 530.0], [43.4, 530.0], [43.5, 532.0], [43.6, 532.0], [43.7, 533.0], [43.8, 533.0], [43.9, 535.0], [44.0, 538.0], [44.1, 538.0], [44.2, 538.0], [44.3, 538.0], [44.4, 539.0], [44.5, 539.0], [44.6, 539.0], [44.7, 541.0], [44.8, 541.0], [44.9, 544.0], [45.0, 544.0], [45.1, 545.0], [45.2, 546.0], [45.3, 546.0], [45.4, 546.0], [45.5, 546.0], [45.6, 547.0], [45.7, 547.0], [45.8, 547.0], [45.9, 548.0], [46.0, 550.0], [46.1, 550.0], [46.2, 550.0], [46.3, 552.0], [46.4, 553.0], [46.5, 553.0], [46.6, 554.0], [46.7, 555.0], [46.8, 555.0], [46.9, 556.0], [47.0, 556.0], [47.1, 559.0], [47.2, 559.0], [47.3, 563.0], [47.4, 563.0], [47.5, 566.0], [47.6, 566.0], [47.7, 566.0], [47.8, 567.0], [47.9, 567.0], [48.0, 567.0], [48.1, 568.0], [48.2, 569.0], [48.3, 570.0], [48.4, 570.0], [48.5, 571.0], [48.6, 572.0], [48.7, 572.0], [48.8, 575.0], [48.9, 575.0], [49.0, 575.0], [49.1, 575.0], [49.2, 576.0], [49.3, 577.0], [49.4, 580.0], [49.5, 580.0], [49.6, 581.0], [49.7, 581.0], [49.8, 582.0], [49.9, 582.0], [50.0, 585.0], [50.1, 585.0], [50.2, 585.0], [50.3, 588.0], [50.4, 589.0], [50.5, 591.0], [50.6, 591.0], [50.7, 592.0], [50.8, 593.0], [50.9, 593.0], [51.0, 593.0], [51.1, 593.0], [51.2, 597.0], [51.3, 597.0], [51.4, 597.0], [51.5, 597.0], [51.6, 599.0], [51.7, 599.0], [51.8, 601.0], [51.9, 603.0], [52.0, 604.0], [52.1, 604.0], [52.2, 606.0], [52.3, 607.0], [52.4, 608.0], [52.5, 608.0], [52.6, 609.0], [52.7, 612.0], [52.8, 612.0], [52.9, 612.0], [53.0, 613.0], [53.1, 614.0], [53.2, 614.0], [53.3, 614.0], [53.4, 617.0], [53.5, 617.0], [53.6, 617.0], [53.7, 622.0], [53.8, 625.0], [53.9, 627.0], [54.0, 627.0], [54.1, 628.0], [54.2, 629.0], [54.3, 632.0], [54.4, 632.0], [54.5, 633.0], [54.6, 633.0], [54.7, 634.0], [54.8, 634.0], [54.9, 635.0], [55.0, 636.0], [55.1, 636.0], [55.2, 640.0], [55.3, 643.0], [55.4, 644.0], [55.5, 644.0], [55.6, 645.0], [55.7, 646.0], [55.8, 646.0], [55.9, 646.0], [56.0, 647.0], [56.1, 648.0], [56.2, 649.0], [56.3, 649.0], [56.4, 651.0], [56.5, 652.0], [56.6, 652.0], [56.7, 652.0], [56.8, 653.0], [56.9, 654.0], [57.0, 654.0], [57.1, 655.0], [57.2, 657.0], [57.3, 657.0], [57.4, 657.0], [57.5, 658.0], [57.6, 662.0], [57.7, 663.0], [57.8, 663.0], [57.9, 664.0], [58.0, 664.0], [58.1, 671.0], [58.2, 671.0], [58.3, 672.0], [58.4, 673.0], [58.5, 673.0], [58.6, 674.0], [58.7, 676.0], [58.8, 678.0], [58.9, 678.0], [59.0, 681.0], [59.1, 682.0], [59.2, 682.0], [59.3, 682.0], [59.4, 682.0], [59.5, 683.0], [59.6, 686.0], [59.7, 686.0], [59.8, 689.0], [59.9, 690.0], [60.0, 692.0], [60.1, 692.0], [60.2, 693.0], [60.3, 697.0], [60.4, 697.0], [60.5, 699.0], [60.6, 702.0], [60.7, 705.0], [60.8, 705.0], [60.9, 705.0], [61.0, 707.0], [61.1, 709.0], [61.2, 709.0], [61.3, 714.0], [61.4, 718.0], [61.5, 721.0], [61.6, 721.0], [61.7, 727.0], [61.8, 728.0], [61.9, 728.0], [62.0, 728.0], [62.1, 731.0], [62.2, 732.0], [62.3, 732.0], [62.4, 742.0], [62.5, 742.0], [62.6, 746.0], [62.7, 746.0], [62.8, 746.0], [62.9, 747.0], [63.0, 749.0], [63.1, 749.0], [63.2, 749.0], [63.3, 750.0], [63.4, 750.0], [63.5, 752.0], [63.6, 761.0], [63.7, 764.0], [63.8, 764.0], [63.9, 766.0], [64.0, 771.0], [64.1, 777.0], [64.2, 777.0], [64.3, 779.0], [64.4, 785.0], [64.5, 787.0], [64.6, 787.0], [64.7, 791.0], [64.8, 791.0], [64.9, 808.0], [65.0, 808.0], [65.1, 811.0], [65.2, 814.0], [65.3, 814.0], [65.4, 815.0], [65.5, 820.0], [65.6, 823.0], [65.7, 823.0], [65.8, 827.0], [65.9, 830.0], [66.0, 830.0], [66.1, 830.0], [66.2, 831.0], [66.3, 832.0], [66.4, 834.0], [66.5, 834.0], [66.6, 836.0], [66.7, 839.0], [66.8, 839.0], [66.9, 841.0], [67.0, 842.0], [67.1, 842.0], [67.2, 842.0], [67.3, 845.0], [67.4, 846.0], [67.5, 848.0], [67.6, 848.0], [67.7, 850.0], [67.8, 851.0], [67.9, 854.0], [68.0, 854.0], [68.1, 854.0], [68.2, 856.0], [68.3, 856.0], [68.4, 856.0], [68.5, 857.0], [68.6, 858.0], [68.7, 858.0], [68.8, 858.0], [68.9, 860.0], [69.0, 861.0], [69.1, 861.0], [69.2, 862.0], [69.3, 863.0], [69.4, 863.0], [69.5, 863.0], [69.6, 863.0], [69.7, 864.0], [69.8, 864.0], [69.9, 864.0], [70.0, 865.0], [70.1, 865.0], [70.2, 865.0], [70.3, 869.0], [70.4, 872.0], [70.5, 873.0], [70.6, 873.0], [70.7, 873.0], [70.8, 874.0], [70.9, 877.0], [71.0, 877.0], [71.1, 880.0], [71.2, 884.0], [71.3, 884.0], [71.4, 884.0], [71.5, 887.0], [71.6, 892.0], [71.7, 892.0], [71.8, 892.0], [71.9, 895.0], [72.0, 898.0], [72.1, 898.0], [72.2, 898.0], [72.3, 899.0], [72.4, 899.0], [72.5, 899.0], [72.6, 902.0], [72.7, 908.0], [72.8, 910.0], [72.9, 910.0], [73.0, 912.0], [73.1, 913.0], [73.2, 915.0], [73.3, 915.0], [73.4, 915.0], [73.5, 917.0], [73.6, 917.0], [73.7, 917.0], [73.8, 922.0], [73.9, 923.0], [74.0, 923.0], [74.1, 926.0], [74.2, 930.0], [74.3, 931.0], [74.4, 931.0], [74.5, 934.0], [74.6, 935.0], [74.7, 935.0], [74.8, 935.0], [74.9, 935.0], [75.0, 936.0], [75.1, 936.0], [75.2, 936.0], [75.3, 938.0], [75.4, 939.0], [75.5, 939.0], [75.6, 941.0], [75.7, 942.0], [75.8, 943.0], [75.9, 943.0], [76.0, 943.0], [76.1, 945.0], [76.2, 948.0], [76.3, 948.0], [76.4, 950.0], [76.5, 952.0], [76.6, 952.0], [76.7, 952.0], [76.8, 954.0], [76.9, 954.0], [77.0, 954.0], [77.1, 960.0], [77.2, 962.0], [77.3, 963.0], [77.4, 963.0], [77.5, 965.0], [77.6, 965.0], [77.7, 971.0], [77.8, 971.0], [77.9, 980.0], [78.0, 982.0], [78.1, 983.0], [78.2, 983.0], [78.3, 992.0], [78.4, 992.0], [78.5, 992.0], [78.6, 992.0], [78.7, 1000.0], [78.8, 1000.0], [78.9, 1000.0], [79.0, 1000.0], [79.1, 1001.0], [79.2, 1001.0], [79.3, 1001.0], [79.4, 1003.0], [79.5, 1005.0], [79.6, 1005.0], [79.7, 1005.0], [79.8, 1009.0], [79.9, 1012.0], [80.0, 1014.0], [80.1, 1014.0], [80.2, 1014.0], [80.3, 1024.0], [80.4, 1024.0], [80.5, 1025.0], [80.6, 1029.0], [80.7, 1035.0], [80.8, 1035.0], [80.9, 1036.0], [81.0, 1043.0], [81.1, 1049.0], [81.2, 1049.0], [81.3, 1057.0], [81.4, 1059.0], [81.5, 1063.0], [81.6, 1063.0], [81.7, 1064.0], [81.8, 1064.0], [81.9, 1064.0], [82.0, 1073.0], [82.1, 1076.0], [82.2, 1079.0], [82.3, 1079.0], [82.4, 1081.0], [82.5, 1088.0], [82.6, 1090.0], [82.7, 1090.0], [82.8, 1095.0], [82.9, 1095.0], [83.0, 1095.0], [83.1, 1095.0], [83.2, 1096.0], [83.3, 1099.0], [83.4, 1099.0], [83.5, 1102.0], [83.6, 1105.0], [83.7, 1108.0], [83.8, 1108.0], [83.9, 1113.0], [84.0, 1129.0], [84.1, 1131.0], [84.2, 1131.0], [84.3, 1134.0], [84.4, 1134.0], [84.5, 1139.0], [84.6, 1139.0], [84.7, 1141.0], [84.8, 1144.0], [84.9, 1153.0], [85.0, 1153.0], [85.1, 1159.0], [85.2, 1160.0], [85.3, 1160.0], [85.4, 1163.0], [85.5, 1171.0], [85.6, 1174.0], [85.7, 1174.0], [85.8, 1178.0], [85.9, 1179.0], [86.0, 1182.0], [86.1, 1182.0], [86.2, 1183.0], [86.3, 1189.0], [86.4, 1189.0], [86.5, 1189.0], [86.6, 1199.0], [86.7, 1209.0], [86.8, 1209.0], [86.9, 1216.0], [87.0, 1228.0], [87.1, 1229.0], [87.2, 1229.0], [87.3, 1230.0], [87.4, 1230.0], [87.5, 1233.0], [87.6, 1233.0], [87.7, 1248.0], [87.8, 1257.0], [87.9, 1258.0], [88.0, 1258.0], [88.1, 1258.0], [88.2, 1267.0], [88.3, 1268.0], [88.4, 1268.0], [88.5, 1279.0], [88.6, 1286.0], [88.7, 1286.0], [88.8, 1292.0], [88.9, 1293.0], [89.0, 1300.0], [89.1, 1300.0], [89.2, 1301.0], [89.3, 1303.0], [89.4, 1306.0], [89.5, 1306.0], [89.6, 1306.0], [89.7, 1307.0], [89.8, 1308.0], [89.9, 1308.0], [90.0, 1308.0], [90.1, 1309.0], [90.2, 1309.0], [90.3, 1310.0], [90.4, 1311.0], [90.5, 1313.0], [90.6, 1313.0], [90.7, 1321.0], [90.8, 1325.0], [90.9, 1325.0], [91.0, 1325.0], [91.1, 1325.0], [91.2, 1333.0], [91.3, 1354.0], [91.4, 1354.0], [91.5, 1361.0], [91.6, 1363.0], [91.7, 1363.0], [91.8, 1363.0], [91.9, 1377.0], [92.0, 1384.0], [92.1, 1384.0], [92.2, 1388.0], [92.3, 1395.0], [92.4, 1395.0], [92.5, 1395.0], [92.6, 1404.0], [92.7, 1427.0], [92.8, 1432.0], [92.9, 1432.0], [93.0, 1432.0], [93.1, 1446.0], [93.2, 1454.0], [93.3, 1454.0], [93.4, 1457.0], [93.5, 1465.0], [93.6, 1465.0], [93.7, 1471.0], [93.8, 1476.0], [93.9, 1482.0], [94.0, 1482.0], [94.1, 1496.0], [94.2, 1513.0], [94.3, 1523.0], [94.4, 1523.0], [94.5, 1527.0], [94.6, 1537.0], [94.7, 1573.0], [94.8, 1573.0], [94.9, 1576.0], [95.0, 1600.0], [95.1, 1600.0], [95.2, 1636.0], [95.3, 1681.0], [95.4, 1719.0], [95.5, 1719.0], [95.6, 1729.0], [95.7, 1796.0], [95.8, 1799.0], [95.9, 1799.0], [96.0, 1807.0], [96.1, 1822.0], [96.2, 1830.0], [96.3, 1830.0], [96.4, 1839.0], [96.5, 1843.0], [96.6, 1870.0], [96.7, 1870.0], [96.8, 1983.0], [96.9, 1990.0], [97.0, 1990.0], [97.1, 2001.0], [97.2, 2039.0], [97.3, 2143.0], [97.4, 2143.0], [97.5, 2153.0], [97.6, 2164.0], [97.7, 2215.0], [97.8, 2215.0], [97.9, 2315.0], [98.0, 2364.0], [98.1, 2453.0], [98.2, 2453.0], [98.3, 2456.0], [98.4, 2809.0], [98.5, 2809.0], [98.6, 2858.0], [98.7, 2913.0], [98.8, 4434.0], [98.9, 4434.0], [99.0, 4714.0], [99.1, 7536.0], [99.2, 7693.0], [99.3, 7693.0], [99.4, 8986.0], [99.5, 14565.0], [99.6, 30738.0], [99.7, 30738.0], [99.8, 34287.0], [99.9, 56440.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 182.0, "series": [{"data": [[8900.0, 1.0], [600.0, 65.0], [700.0, 32.0], [800.0, 56.0], [14500.0, 1.0], [900.0, 45.0], [1000.0, 35.0], [1100.0, 24.0], [1200.0, 17.0], [1300.0, 26.0], [1400.0, 12.0], [1500.0, 6.0], [1600.0, 3.0], [1700.0, 4.0], [1800.0, 6.0], [1900.0, 2.0], [30700.0, 1.0], [2000.0, 2.0], [2100.0, 3.0], [34200.0, 1.0], [2300.0, 2.0], [2200.0, 1.0], [2400.0, 2.0], [2800.0, 2.0], [2900.0, 1.0], [200.0, 33.0], [56400.0, 1.0], [4400.0, 1.0], [300.0, 62.0], [4700.0, 1.0], [400.0, 182.0], [7500.0, 1.0], [7600.0, 1.0], [500.0, 103.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 56400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 43.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 415.0, "series": [{"data": [[0.0, 277.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 415.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 43.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.759562841530055, "minX": 1.60283748E12, "maxY": 10.0, "series": [{"data": [[1.60283754E12, 9.759562841530055], [1.60283748E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283754E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 417.0, "minX": 1.0, "maxY": 56440.0, "series": [{"data": [[8.0, 559.0], [4.0, 2913.0], [2.0, 56440.0], [1.0, 8986.0], [10.0, 862.8885832187066], [5.0, 438.0], [6.0, 417.0], [3.0, 1432.0], [7.0, 931.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 951.6136054421763]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1367.9833333333333, "minX": 1.60283748E12, "maxY": 1725332.5833333333, "series": [{"data": [[1.60283754E12, 470385.18333333335], [1.60283748E12, 1725332.5833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60283754E12, 1367.9833333333333], [1.60283748E12, 4155.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283754E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 864.4528985507247, "minX": 1.60283748E12, "maxY": 1214.5245901639346, "series": [{"data": [[1.60283754E12, 1214.5245901639346], [1.60283748E12, 864.4528985507247]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283754E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 863.3061594202902, "minX": 1.60283748E12, "maxY": 1213.6338797814208, "series": [{"data": [[1.60283754E12, 1213.6338797814208], [1.60283748E12, 863.3061594202902]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283754E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.05464480874316939, "minX": 1.60283748E12, "maxY": 0.1576086956521739, "series": [{"data": [[1.60283754E12, 0.05464480874316939], [1.60283748E12, 0.1576086956521739]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283754E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 219.0, "minX": 1.60283748E12, "maxY": 56440.0, "series": [{"data": [[1.60283754E12, 56440.0], [1.60283748E12, 34287.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60283754E12, 296.11199771881104], [1.60283748E12, 236.90799947261812]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60283754E12, 304.7232009124756], [1.60283748E12, 238.89880021095277]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60283754E12, 300.8959988594055], [1.60283748E12, 238.01399973630905]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60283754E12, 262.0], [1.60283748E12, 219.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60283754E12, 505.0], [1.60283748E12, 606.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283754E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 427.0, "minX": 1.0, "maxY": 8986.0, "series": [{"data": [[2.0, 1410.0], [8.0, 900.5], [9.0, 731.0], [10.0, 549.0], [11.0, 663.0], [12.0, 468.0], [13.0, 513.0], [14.0, 516.5], [15.0, 461.5], [4.0, 1064.5], [1.0, 8986.0], [17.0, 472.0], [18.0, 427.0], [5.0, 1159.0], [6.0, 971.0], [7.0, 627.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 426.5, "minX": 1.0, "maxY": 8978.0, "series": [{"data": [[2.0, 1409.0], [8.0, 891.0], [9.0, 730.0], [10.0, 548.5], [11.0, 662.0], [12.0, 467.5], [13.0, 512.5], [14.0, 516.0], [15.0, 461.0], [4.0, 1062.5], [1.0, 8978.0], [17.0, 472.0], [18.0, 426.5], [5.0, 1158.0], [6.0, 970.5], [7.0, 626.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.8833333333333333, "minX": 1.60283748E12, "maxY": 9.366666666666667, "series": [{"data": [[1.60283754E12, 2.8833333333333333], [1.60283748E12, 9.366666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283754E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.05, "minX": 1.60283748E12, "maxY": 9.2, "series": [{"data": [[1.60283754E12, 3.05], [1.60283748E12, 9.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283754E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.05, "minX": 1.60283748E12, "maxY": 9.2, "series": [{"data": [[1.60283754E12, 3.05], [1.60283748E12, 9.2]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283754E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.05, "minX": 1.60283748E12, "maxY": 9.2, "series": [{"data": [[1.60283754E12, 3.05], [1.60283748E12, 9.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283754E12, "title": "Total Transactions Per Second"}},
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

