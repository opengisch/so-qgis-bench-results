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
        data: {"result": {"minY": 255.0, "minX": 0.0, "maxY": 33285.0, "series": [{"data": [[0.0, 255.0], [0.1, 255.0], [0.2, 255.0], [0.3, 255.0], [0.4, 255.0], [0.5, 268.0], [0.6, 270.0], [0.7, 270.0], [0.8, 270.0], [0.9, 275.0], [1.0, 285.0], [1.1, 285.0], [1.2, 285.0], [1.3, 299.0], [1.4, 303.0], [1.5, 309.0], [1.6, 309.0], [1.7, 309.0], [1.8, 313.0], [1.9, 313.0], [2.0, 313.0], [2.1, 316.0], [2.2, 320.0], [2.3, 320.0], [2.4, 328.0], [2.5, 350.0], [2.6, 352.0], [2.7, 352.0], [2.8, 356.0], [2.9, 357.0], [3.0, 360.0], [3.1, 360.0], [3.2, 360.0], [3.3, 361.0], [3.4, 361.0], [3.5, 366.0], [3.6, 366.0], [3.7, 374.0], [3.8, 374.0], [3.9, 376.0], [4.0, 378.0], [4.1, 379.0], [4.2, 379.0], [4.3, 380.0], [4.4, 382.0], [4.5, 383.0], [4.6, 383.0], [4.7, 386.0], [4.8, 388.0], [4.9, 388.0], [5.0, 388.0], [5.1, 388.0], [5.2, 389.0], [5.3, 389.0], [5.4, 390.0], [5.5, 391.0], [5.6, 392.0], [5.7, 392.0], [5.8, 392.0], [5.9, 392.0], [6.0, 395.0], [6.1, 395.0], [6.2, 398.0], [6.3, 399.0], [6.4, 400.0], [6.5, 400.0], [6.6, 400.0], [6.7, 400.0], [6.8, 400.0], [6.9, 402.0], [7.0, 403.0], [7.1, 404.0], [7.2, 404.0], [7.3, 406.0], [7.4, 406.0], [7.5, 407.0], [7.6, 407.0], [7.7, 407.0], [7.8, 407.0], [7.9, 408.0], [8.0, 408.0], [8.1, 409.0], [8.2, 409.0], [8.3, 410.0], [8.4, 410.0], [8.5, 410.0], [8.6, 411.0], [8.7, 411.0], [8.8, 411.0], [8.9, 412.0], [9.0, 414.0], [9.1, 414.0], [9.2, 415.0], [9.3, 416.0], [9.4, 416.0], [9.5, 416.0], [9.6, 416.0], [9.7, 417.0], [9.8, 417.0], [9.9, 417.0], [10.0, 418.0], [10.1, 419.0], [10.2, 419.0], [10.3, 420.0], [10.4, 420.0], [10.5, 420.0], [10.6, 420.0], [10.7, 421.0], [10.8, 421.0], [10.9, 422.0], [11.0, 422.0], [11.1, 423.0], [11.2, 424.0], [11.3, 424.0], [11.4, 424.0], [11.5, 424.0], [11.6, 425.0], [11.7, 425.0], [11.8, 425.0], [11.9, 425.0], [12.0, 426.0], [12.1, 426.0], [12.2, 427.0], [12.3, 430.0], [12.4, 431.0], [12.5, 431.0], [12.6, 432.0], [12.7, 433.0], [12.8, 433.0], [12.9, 433.0], [13.0, 434.0], [13.1, 434.0], [13.2, 435.0], [13.3, 435.0], [13.4, 435.0], [13.5, 435.0], [13.6, 435.0], [13.7, 435.0], [13.8, 435.0], [13.9, 436.0], [14.0, 436.0], [14.1, 436.0], [14.2, 436.0], [14.3, 436.0], [14.4, 436.0], [14.5, 437.0], [14.6, 437.0], [14.7, 437.0], [14.8, 437.0], [14.9, 437.0], [15.0, 438.0], [15.1, 438.0], [15.2, 438.0], [15.3, 439.0], [15.4, 439.0], [15.5, 439.0], [15.6, 440.0], [15.7, 440.0], [15.8, 443.0], [15.9, 443.0], [16.0, 444.0], [16.1, 444.0], [16.2, 445.0], [16.3, 445.0], [16.4, 445.0], [16.5, 446.0], [16.6, 446.0], [16.7, 446.0], [16.8, 447.0], [16.9, 447.0], [17.0, 447.0], [17.1, 448.0], [17.2, 448.0], [17.3, 448.0], [17.4, 448.0], [17.5, 448.0], [17.6, 448.0], [17.7, 449.0], [17.8, 449.0], [17.9, 449.0], [18.0, 449.0], [18.1, 449.0], [18.2, 449.0], [18.3, 449.0], [18.4, 449.0], [18.5, 449.0], [18.6, 450.0], [18.7, 452.0], [18.8, 452.0], [18.9, 452.0], [19.0, 452.0], [19.1, 454.0], [19.2, 454.0], [19.3, 454.0], [19.4, 454.0], [19.5, 457.0], [19.6, 457.0], [19.7, 457.0], [19.8, 458.0], [19.9, 459.0], [20.0, 460.0], [20.1, 460.0], [20.2, 460.0], [20.3, 460.0], [20.4, 460.0], [20.5, 461.0], [20.6, 461.0], [20.7, 462.0], [20.8, 462.0], [20.9, 463.0], [21.0, 463.0], [21.1, 463.0], [21.2, 463.0], [21.3, 464.0], [21.4, 464.0], [21.5, 464.0], [21.6, 464.0], [21.7, 465.0], [21.8, 465.0], [21.9, 465.0], [22.0, 466.0], [22.1, 466.0], [22.2, 466.0], [22.3, 466.0], [22.4, 466.0], [22.5, 467.0], [22.6, 468.0], [22.7, 468.0], [22.8, 468.0], [22.9, 469.0], [23.0, 469.0], [23.1, 469.0], [23.2, 470.0], [23.3, 471.0], [23.4, 471.0], [23.5, 471.0], [23.6, 471.0], [23.7, 471.0], [23.8, 471.0], [23.9, 471.0], [24.0, 472.0], [24.1, 473.0], [24.2, 473.0], [24.3, 473.0], [24.4, 473.0], [24.5, 473.0], [24.6, 473.0], [24.7, 474.0], [24.8, 474.0], [24.9, 476.0], [25.0, 476.0], [25.1, 476.0], [25.2, 477.0], [25.3, 477.0], [25.4, 477.0], [25.5, 477.0], [25.6, 478.0], [25.7, 478.0], [25.8, 478.0], [25.9, 478.0], [26.0, 478.0], [26.1, 478.0], [26.2, 479.0], [26.3, 479.0], [26.4, 479.0], [26.5, 479.0], [26.6, 479.0], [26.7, 480.0], [26.8, 480.0], [26.9, 480.0], [27.0, 480.0], [27.1, 481.0], [27.2, 481.0], [27.3, 481.0], [27.4, 481.0], [27.5, 482.0], [27.6, 482.0], [27.7, 482.0], [27.8, 482.0], [27.9, 483.0], [28.0, 483.0], [28.1, 483.0], [28.2, 485.0], [28.3, 486.0], [28.4, 486.0], [28.5, 487.0], [28.6, 487.0], [28.7, 487.0], [28.8, 488.0], [28.9, 489.0], [29.0, 491.0], [29.1, 491.0], [29.2, 491.0], [29.3, 493.0], [29.4, 494.0], [29.5, 494.0], [29.6, 494.0], [29.7, 495.0], [29.8, 495.0], [29.9, 495.0], [30.0, 496.0], [30.1, 496.0], [30.2, 496.0], [30.3, 496.0], [30.4, 497.0], [30.5, 497.0], [30.6, 497.0], [30.7, 498.0], [30.8, 498.0], [30.9, 500.0], [31.0, 500.0], [31.1, 501.0], [31.2, 501.0], [31.3, 501.0], [31.4, 501.0], [31.5, 501.0], [31.6, 502.0], [31.7, 502.0], [31.8, 503.0], [31.9, 504.0], [32.0, 504.0], [32.1, 504.0], [32.2, 505.0], [32.3, 505.0], [32.4, 506.0], [32.5, 506.0], [32.6, 506.0], [32.7, 506.0], [32.8, 508.0], [32.9, 508.0], [33.0, 509.0], [33.1, 509.0], [33.2, 510.0], [33.3, 510.0], [33.4, 512.0], [33.5, 512.0], [33.6, 512.0], [33.7, 512.0], [33.8, 512.0], [33.9, 513.0], [34.0, 513.0], [34.1, 514.0], [34.2, 514.0], [34.3, 515.0], [34.4, 515.0], [34.5, 516.0], [34.6, 518.0], [34.7, 520.0], [34.8, 520.0], [34.9, 521.0], [35.0, 521.0], [35.1, 521.0], [35.2, 522.0], [35.3, 522.0], [35.4, 523.0], [35.5, 523.0], [35.6, 524.0], [35.7, 524.0], [35.8, 527.0], [35.9, 527.0], [36.0, 528.0], [36.1, 530.0], [36.2, 530.0], [36.3, 530.0], [36.4, 531.0], [36.5, 531.0], [36.6, 532.0], [36.7, 532.0], [36.8, 535.0], [36.9, 535.0], [37.0, 535.0], [37.1, 537.0], [37.2, 537.0], [37.3, 539.0], [37.4, 539.0], [37.5, 540.0], [37.6, 541.0], [37.7, 541.0], [37.8, 541.0], [37.9, 541.0], [38.0, 541.0], [38.1, 544.0], [38.2, 544.0], [38.3, 544.0], [38.4, 545.0], [38.5, 545.0], [38.6, 546.0], [38.7, 548.0], [38.8, 549.0], [38.9, 549.0], [39.0, 549.0], [39.1, 552.0], [39.2, 553.0], [39.3, 553.0], [39.4, 555.0], [39.5, 557.0], [39.6, 559.0], [39.7, 559.0], [39.8, 560.0], [39.9, 562.0], [40.0, 563.0], [40.1, 563.0], [40.2, 566.0], [40.3, 566.0], [40.4, 566.0], [40.5, 567.0], [40.6, 572.0], [40.7, 573.0], [40.8, 573.0], [40.9, 575.0], [41.0, 575.0], [41.1, 576.0], [41.2, 576.0], [41.3, 578.0], [41.4, 579.0], [41.5, 580.0], [41.6, 580.0], [41.7, 580.0], [41.8, 582.0], [41.9, 582.0], [42.0, 584.0], [42.1, 584.0], [42.2, 585.0], [42.3, 585.0], [42.4, 586.0], [42.5, 587.0], [42.6, 589.0], [42.7, 589.0], [42.8, 591.0], [42.9, 595.0], [43.0, 597.0], [43.1, 597.0], [43.2, 598.0], [43.3, 602.0], [43.4, 602.0], [43.5, 604.0], [43.6, 612.0], [43.7, 614.0], [43.8, 614.0], [43.9, 615.0], [44.0, 617.0], [44.1, 624.0], [44.2, 624.0], [44.3, 627.0], [44.4, 627.0], [44.5, 627.0], [44.6, 627.0], [44.7, 627.0], [44.8, 632.0], [44.9, 632.0], [45.0, 632.0], [45.1, 636.0], [45.2, 641.0], [45.3, 641.0], [45.4, 643.0], [45.5, 645.0], [45.6, 645.0], [45.7, 645.0], [45.8, 647.0], [45.9, 650.0], [46.0, 651.0], [46.1, 651.0], [46.2, 654.0], [46.3, 656.0], [46.4, 656.0], [46.5, 656.0], [46.6, 658.0], [46.7, 658.0], [46.8, 658.0], [46.9, 664.0], [47.0, 668.0], [47.1, 668.0], [47.2, 668.0], [47.3, 669.0], [47.4, 669.0], [47.5, 672.0], [47.6, 672.0], [47.7, 675.0], [47.8, 677.0], [47.9, 678.0], [48.0, 678.0], [48.1, 678.0], [48.2, 679.0], [48.3, 679.0], [48.4, 679.0], [48.5, 680.0], [48.6, 680.0], [48.7, 680.0], [48.8, 685.0], [48.9, 689.0], [49.0, 689.0], [49.1, 689.0], [49.2, 692.0], [49.3, 692.0], [49.4, 694.0], [49.5, 694.0], [49.6, 694.0], [49.7, 697.0], [49.8, 697.0], [49.9, 697.0], [50.0, 701.0], [50.1, 702.0], [50.2, 702.0], [50.3, 703.0], [50.4, 703.0], [50.5, 703.0], [50.6, 703.0], [50.7, 704.0], [50.8, 705.0], [50.9, 705.0], [51.0, 705.0], [51.1, 708.0], [51.2, 710.0], [51.3, 710.0], [51.4, 710.0], [51.5, 713.0], [51.6, 714.0], [51.7, 714.0], [51.8, 720.0], [51.9, 723.0], [52.0, 725.0], [52.1, 725.0], [52.2, 726.0], [52.3, 730.0], [52.4, 731.0], [52.5, 731.0], [52.6, 731.0], [52.7, 732.0], [52.8, 733.0], [52.9, 733.0], [53.0, 734.0], [53.1, 735.0], [53.2, 737.0], [53.3, 737.0], [53.4, 741.0], [53.5, 741.0], [53.6, 741.0], [53.7, 741.0], [53.8, 743.0], [53.9, 744.0], [54.0, 744.0], [54.1, 745.0], [54.2, 745.0], [54.3, 745.0], [54.4, 745.0], [54.5, 748.0], [54.6, 758.0], [54.7, 758.0], [54.8, 758.0], [54.9, 759.0], [55.0, 760.0], [55.1, 760.0], [55.2, 760.0], [55.3, 761.0], [55.4, 764.0], [55.5, 764.0], [55.6, 766.0], [55.7, 768.0], [55.8, 768.0], [55.9, 768.0], [56.0, 768.0], [56.1, 771.0], [56.2, 772.0], [56.3, 772.0], [56.4, 772.0], [56.5, 773.0], [56.6, 774.0], [56.7, 774.0], [56.8, 776.0], [56.9, 777.0], [57.0, 777.0], [57.1, 780.0], [57.2, 780.0], [57.3, 785.0], [57.4, 785.0], [57.5, 787.0], [57.6, 788.0], [57.7, 790.0], [57.8, 790.0], [57.9, 791.0], [58.0, 793.0], [58.1, 795.0], [58.2, 795.0], [58.3, 797.0], [58.4, 798.0], [58.5, 798.0], [58.6, 799.0], [58.7, 802.0], [58.8, 803.0], [58.9, 803.0], [59.0, 806.0], [59.1, 806.0], [59.2, 807.0], [59.3, 807.0], [59.4, 807.0], [59.5, 808.0], [59.6, 810.0], [59.7, 810.0], [59.8, 812.0], [59.9, 812.0], [60.0, 813.0], [60.1, 813.0], [60.2, 814.0], [60.3, 817.0], [60.4, 817.0], [60.5, 821.0], [60.6, 823.0], [60.7, 825.0], [60.8, 825.0], [60.9, 826.0], [61.0, 826.0], [61.1, 826.0], [61.2, 826.0], [61.3, 827.0], [61.4, 827.0], [61.5, 828.0], [61.6, 828.0], [61.7, 829.0], [61.8, 832.0], [61.9, 832.0], [62.0, 833.0], [62.1, 836.0], [62.2, 836.0], [62.3, 836.0], [62.4, 839.0], [62.5, 840.0], [62.6, 840.0], [62.7, 840.0], [62.8, 840.0], [62.9, 842.0], [63.0, 842.0], [63.1, 842.0], [63.2, 844.0], [63.3, 846.0], [63.4, 846.0], [63.5, 846.0], [63.6, 847.0], [63.7, 847.0], [63.8, 847.0], [63.9, 848.0], [64.0, 850.0], [64.1, 852.0], [64.2, 852.0], [64.3, 854.0], [64.4, 854.0], [64.5, 857.0], [64.6, 857.0], [64.7, 857.0], [64.8, 858.0], [64.9, 860.0], [65.0, 860.0], [65.1, 861.0], [65.2, 862.0], [65.3, 862.0], [65.4, 865.0], [65.5, 867.0], [65.6, 870.0], [65.7, 870.0], [65.8, 870.0], [65.9, 871.0], [66.0, 872.0], [66.1, 872.0], [66.2, 874.0], [66.3, 875.0], [66.4, 877.0], [66.5, 877.0], [66.6, 879.0], [66.7, 879.0], [66.8, 879.0], [66.9, 880.0], [67.0, 881.0], [67.1, 882.0], [67.2, 882.0], [67.3, 883.0], [67.4, 885.0], [67.5, 891.0], [67.6, 891.0], [67.7, 891.0], [67.8, 894.0], [67.9, 896.0], [68.0, 896.0], [68.1, 896.0], [68.2, 897.0], [68.3, 897.0], [68.4, 897.0], [68.5, 900.0], [68.6, 900.0], [68.7, 900.0], [68.8, 903.0], [68.9, 903.0], [69.0, 905.0], [69.1, 905.0], [69.2, 905.0], [69.3, 906.0], [69.4, 907.0], [69.5, 907.0], [69.6, 908.0], [69.7, 908.0], [69.8, 909.0], [69.9, 909.0], [70.0, 910.0], [70.1, 914.0], [70.2, 914.0], [70.3, 919.0], [70.4, 920.0], [70.5, 920.0], [70.6, 920.0], [70.7, 922.0], [70.8, 924.0], [70.9, 924.0], [71.0, 924.0], [71.1, 927.0], [71.2, 928.0], [71.3, 928.0], [71.4, 928.0], [71.5, 929.0], [71.6, 930.0], [71.7, 930.0], [71.8, 930.0], [71.9, 934.0], [72.0, 936.0], [72.1, 936.0], [72.2, 936.0], [72.3, 937.0], [72.4, 938.0], [72.5, 938.0], [72.6, 939.0], [72.7, 941.0], [72.8, 943.0], [72.9, 943.0], [73.0, 943.0], [73.1, 946.0], [73.2, 947.0], [73.3, 947.0], [73.4, 948.0], [73.5, 949.0], [73.6, 949.0], [73.7, 950.0], [73.8, 951.0], [73.9, 951.0], [74.0, 951.0], [74.1, 953.0], [74.2, 959.0], [74.3, 963.0], [74.4, 963.0], [74.5, 963.0], [74.6, 967.0], [74.7, 968.0], [74.8, 968.0], [74.9, 968.0], [75.0, 969.0], [75.1, 969.0], [75.2, 969.0], [75.3, 973.0], [75.4, 975.0], [75.5, 975.0], [75.6, 976.0], [75.7, 978.0], [75.8, 979.0], [75.9, 979.0], [76.0, 982.0], [76.1, 983.0], [76.2, 988.0], [76.3, 988.0], [76.4, 991.0], [76.5, 995.0], [76.6, 998.0], [76.7, 998.0], [76.8, 1000.0], [76.9, 1000.0], [77.0, 1000.0], [77.1, 1004.0], [77.2, 1005.0], [77.3, 1006.0], [77.4, 1006.0], [77.5, 1015.0], [77.6, 1019.0], [77.7, 1021.0], [77.8, 1021.0], [77.9, 1025.0], [78.0, 1026.0], [78.1, 1032.0], [78.2, 1032.0], [78.3, 1050.0], [78.4, 1064.0], [78.5, 1064.0], [78.6, 1067.0], [78.7, 1081.0], [78.8, 1084.0], [78.9, 1084.0], [79.0, 1094.0], [79.1, 1100.0], [79.2, 1106.0], [79.3, 1106.0], [79.4, 1114.0], [79.5, 1120.0], [79.6, 1130.0], [79.7, 1130.0], [79.8, 1133.0], [79.9, 1145.0], [80.0, 1147.0], [80.1, 1147.0], [80.2, 1150.0], [80.3, 1150.0], [80.4, 1150.0], [80.5, 1151.0], [80.6, 1153.0], [80.7, 1155.0], [80.8, 1155.0], [80.9, 1160.0], [81.0, 1160.0], [81.1, 1170.0], [81.2, 1170.0], [81.3, 1178.0], [81.4, 1186.0], [81.5, 1199.0], [81.6, 1199.0], [81.7, 1205.0], [81.8, 1205.0], [81.9, 1205.0], [82.0, 1209.0], [82.1, 1212.0], [82.2, 1222.0], [82.3, 1222.0], [82.4, 1223.0], [82.5, 1237.0], [82.6, 1241.0], [82.7, 1241.0], [82.8, 1245.0], [82.9, 1259.0], [83.0, 1259.0], [83.1, 1259.0], [83.2, 1263.0], [83.3, 1267.0], [83.4, 1267.0], [83.5, 1273.0], [83.6, 1278.0], [83.7, 1280.0], [83.8, 1280.0], [83.9, 1281.0], [84.0, 1283.0], [84.1, 1284.0], [84.2, 1284.0], [84.3, 1288.0], [84.4, 1291.0], [84.5, 1291.0], [84.6, 1291.0], [84.7, 1294.0], [84.8, 1294.0], [84.9, 1294.0], [85.0, 1294.0], [85.1, 1295.0], [85.2, 1297.0], [85.3, 1297.0], [85.4, 1301.0], [85.5, 1305.0], [85.6, 1309.0], [85.7, 1309.0], [85.8, 1310.0], [85.9, 1322.0], [86.0, 1325.0], [86.1, 1325.0], [86.2, 1326.0], [86.3, 1331.0], [86.4, 1346.0], [86.5, 1346.0], [86.6, 1346.0], [86.7, 1352.0], [86.8, 1352.0], [86.9, 1355.0], [87.0, 1359.0], [87.1, 1364.0], [87.2, 1364.0], [87.3, 1372.0], [87.4, 1378.0], [87.5, 1378.0], [87.6, 1378.0], [87.7, 1381.0], [87.8, 1382.0], [87.9, 1382.0], [88.0, 1382.0], [88.1, 1387.0], [88.2, 1402.0], [88.3, 1404.0], [88.4, 1404.0], [88.5, 1404.0], [88.6, 1416.0], [88.7, 1416.0], [88.8, 1419.0], [88.9, 1425.0], [89.0, 1431.0], [89.1, 1431.0], [89.2, 1432.0], [89.3, 1437.0], [89.4, 1439.0], [89.5, 1439.0], [89.6, 1449.0], [89.7, 1453.0], [89.8, 1458.0], [89.9, 1458.0], [90.0, 1465.0], [90.1, 1469.0], [90.2, 1469.0], [90.3, 1472.0], [90.4, 1486.0], [90.5, 1490.0], [90.6, 1490.0], [90.7, 1491.0], [90.8, 1493.0], [90.9, 1498.0], [91.0, 1498.0], [91.1, 1513.0], [91.2, 1517.0], [91.3, 1519.0], [91.4, 1519.0], [91.5, 1541.0], [91.6, 1547.0], [91.7, 1547.0], [91.8, 1558.0], [91.9, 1594.0], [92.0, 1604.0], [92.1, 1604.0], [92.2, 1610.0], [92.3, 1630.0], [92.4, 1639.0], [92.5, 1639.0], [92.6, 1648.0], [92.7, 1652.0], [92.8, 1658.0], [92.9, 1658.0], [93.0, 1665.0], [93.1, 1695.0], [93.2, 1713.0], [93.3, 1713.0], [93.4, 1743.0], [93.5, 1744.0], [93.6, 1744.0], [93.7, 1816.0], [93.8, 1842.0], [93.9, 1848.0], [94.0, 1848.0], [94.1, 1922.0], [94.2, 1955.0], [94.3, 1958.0], [94.4, 1958.0], [94.5, 1998.0], [94.6, 2001.0], [94.7, 2020.0], [94.8, 2020.0], [94.9, 2103.0], [95.0, 2106.0], [95.1, 2106.0], [95.2, 2137.0], [95.3, 2182.0], [95.4, 2191.0], [95.5, 2191.0], [95.6, 2193.0], [95.7, 2203.0], [95.8, 2301.0], [95.9, 2301.0], [96.0, 2318.0], [96.1, 2322.0], [96.2, 2391.0], [96.3, 2391.0], [96.4, 2397.0], [96.5, 2407.0], [96.6, 2544.0], [96.7, 2544.0], [96.8, 2694.0], [96.9, 2773.0], [97.0, 2773.0], [97.1, 2822.0], [97.2, 2895.0], [97.3, 2905.0], [97.4, 2905.0], [97.5, 2933.0], [97.6, 2943.0], [97.7, 2996.0], [97.8, 2996.0], [97.9, 3021.0], [98.0, 3047.0], [98.1, 3099.0], [98.2, 3099.0], [98.3, 3380.0], [98.4, 4179.0], [98.5, 4179.0], [98.6, 4381.0], [98.7, 4396.0], [98.8, 5523.0], [98.9, 5523.0], [99.0, 8139.0], [99.1, 8145.0], [99.2, 8635.0], [99.3, 8635.0], [99.4, 23144.0], [99.5, 26459.0], [99.6, 31303.0], [99.7, 31303.0], [99.8, 32405.0], [99.9, 33285.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 180.0, "series": [{"data": [[8600.0, 1.0], [600.0, 49.0], [700.0, 64.0], [800.0, 72.0], [900.0, 61.0], [1000.0, 17.0], [1100.0, 19.0], [1200.0, 27.0], [1300.0, 21.0], [1400.0, 21.0], [23100.0, 1.0], [1500.0, 7.0], [1600.0, 9.0], [26400.0, 1.0], [1700.0, 3.0], [1800.0, 3.0], [1900.0, 4.0], [31300.0, 1.0], [2000.0, 2.0], [32400.0, 1.0], [2100.0, 6.0], [33200.0, 1.0], [2300.0, 5.0], [2200.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 4.0], [3000.0, 3.0], [200.0, 10.0], [3300.0, 1.0], [4300.0, 2.0], [4100.0, 1.0], [300.0, 37.0], [5500.0, 1.0], [400.0, 180.0], [500.0, 91.0], [8100.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 33200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 66.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 441.0, "series": [{"data": [[0.0, 228.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 441.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 66.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.897494305239178, "minX": 1.60386606E12, "maxY": 10.0, "series": [{"data": [[1.60386606E12, 10.0], [1.60386612E12, 9.897494305239178]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386612E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 457.0, "minX": 1.0, "maxY": 32405.0, "series": [{"data": [[8.0, 924.0], [4.0, 741.0], [2.0, 1382.0], [1.0, 32405.0], [9.0, 457.0], [10.0, 1011.8801652892573], [5.0, 535.0], [6.0, 2544.0], [3.0, 8635.0], [7.0, 632.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1065.1428571428582]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2143.85, "minX": 1.60386606E12, "maxY": 1563358.7, "series": [{"data": [[1.60386606E12, 1098582.6], [1.60386612E12, 1563358.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60386606E12, 2143.85], [1.60386612E12, 3146.4333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386612E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 979.9391891891893, "minX": 1.60386606E12, "maxY": 1122.5922551252852, "series": [{"data": [[1.60386606E12, 979.9391891891893], [1.60386612E12, 1122.5922551252852]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386612E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 978.861486486487, "minX": 1.60386606E12, "maxY": 1121.574031890661, "series": [{"data": [[1.60386606E12, 978.861486486487], [1.60386612E12, 1121.574031890661]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386612E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.018223234624145806, "minX": 1.60386606E12, "maxY": 0.347972972972973, "series": [{"data": [[1.60386606E12, 0.347972972972973], [1.60386612E12, 0.018223234624145806]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386612E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 255.0, "minX": 1.60386606E12, "maxY": 33285.0, "series": [{"data": [[1.60386606E12, 23144.0], [1.60386612E12, 33285.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60386606E12, 294.4219990086556], [1.60386612E12, 267.47999863624574]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60386606E12, 298.1642003965378], [1.60386612E12, 268.71200008392333]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60386606E12, 296.50099950432775], [1.60386612E12, 268.3599998950958]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60386606E12, 285.0], [1.60386612E12, 255.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60386606E12, 716.5], [1.60386612E12, 679.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386612E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 449.0, "minX": 1.0, "maxY": 32405.0, "series": [{"data": [[2.0, 1559.0], [8.0, 731.5], [9.0, 806.0], [10.0, 775.5], [11.0, 628.0], [12.0, 636.0], [3.0, 1382.0], [13.0, 472.5], [14.0, 505.5], [15.0, 473.0], [4.0, 967.5], [1.0, 32405.0], [17.0, 449.0], [5.0, 1152.5], [6.0, 1175.5], [7.0, 745.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 449.0, "minX": 1.0, "maxY": 32404.0, "series": [{"data": [[2.0, 1556.5], [8.0, 729.0], [9.0, 805.0], [10.0, 775.0], [11.0, 627.5], [12.0, 635.0], [3.0, 1382.0], [13.0, 472.5], [14.0, 505.5], [15.0, 473.0], [4.0, 965.5], [1.0, 32404.0], [17.0, 449.0], [5.0, 1151.5], [6.0, 1172.5], [7.0, 745.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.1, "minX": 1.60386606E12, "maxY": 7.15, "series": [{"data": [[1.60386606E12, 5.1], [1.60386612E12, 7.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386612E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.933333333333334, "minX": 1.60386606E12, "maxY": 7.316666666666666, "series": [{"data": [[1.60386606E12, 4.933333333333334], [1.60386612E12, 7.316666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386612E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.933333333333334, "minX": 1.60386606E12, "maxY": 7.316666666666666, "series": [{"data": [[1.60386606E12, 4.933333333333334], [1.60386612E12, 7.316666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386612E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.933333333333334, "minX": 1.60386606E12, "maxY": 7.316666666666666, "series": [{"data": [[1.60386606E12, 4.933333333333334], [1.60386612E12, 7.316666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386612E12, "title": "Total Transactions Per Second"}},
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

