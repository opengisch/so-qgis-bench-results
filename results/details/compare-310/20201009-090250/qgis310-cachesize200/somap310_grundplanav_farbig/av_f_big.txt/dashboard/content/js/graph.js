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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 3414.0, "series": [{"data": [[0.0, 184.0], [0.1, 184.0], [0.2, 185.0], [0.3, 189.0], [0.4, 189.0], [0.5, 196.0], [0.6, 201.0], [0.7, 204.0], [0.8, 204.0], [0.9, 206.0], [1.0, 207.0], [1.1, 207.0], [1.2, 207.0], [1.3, 208.0], [1.4, 213.0], [1.5, 215.0], [1.6, 215.0], [1.7, 219.0], [1.8, 220.0], [1.9, 220.0], [2.0, 220.0], [2.1, 221.0], [2.2, 223.0], [2.3, 223.0], [2.4, 223.0], [2.5, 224.0], [2.6, 232.0], [2.7, 232.0], [2.8, 238.0], [2.9, 241.0], [3.0, 242.0], [3.1, 242.0], [3.2, 244.0], [3.3, 246.0], [3.4, 246.0], [3.5, 250.0], [3.6, 251.0], [3.7, 251.0], [3.8, 251.0], [3.9, 252.0], [4.0, 252.0], [4.1, 253.0], [4.2, 253.0], [4.3, 255.0], [4.4, 256.0], [4.5, 256.0], [4.6, 256.0], [4.7, 257.0], [4.8, 258.0], [4.9, 262.0], [5.0, 262.0], [5.1, 262.0], [5.2, 265.0], [5.3, 265.0], [5.4, 268.0], [5.5, 268.0], [5.6, 272.0], [5.7, 272.0], [5.8, 275.0], [5.9, 277.0], [6.0, 279.0], [6.1, 279.0], [6.2, 283.0], [6.3, 284.0], [6.4, 286.0], [6.5, 286.0], [6.6, 287.0], [6.7, 287.0], [6.8, 287.0], [6.9, 288.0], [7.0, 289.0], [7.1, 290.0], [7.2, 290.0], [7.3, 290.0], [7.4, 292.0], [7.5, 301.0], [7.6, 301.0], [7.7, 302.0], [7.8, 306.0], [7.9, 307.0], [8.0, 307.0], [8.1, 307.0], [8.2, 310.0], [8.3, 311.0], [8.4, 311.0], [8.5, 314.0], [8.6, 316.0], [8.7, 316.0], [8.8, 324.0], [8.9, 326.0], [9.0, 339.0], [9.1, 339.0], [9.2, 339.0], [9.3, 341.0], [9.4, 342.0], [9.5, 342.0], [9.6, 342.0], [9.7, 353.0], [9.8, 356.0], [9.9, 356.0], [10.0, 357.0], [10.1, 359.0], [10.2, 359.0], [10.3, 361.0], [10.4, 368.0], [10.5, 368.0], [10.6, 368.0], [10.7, 368.0], [10.8, 370.0], [10.9, 370.0], [11.0, 370.0], [11.1, 371.0], [11.2, 376.0], [11.3, 377.0], [11.4, 377.0], [11.5, 378.0], [11.6, 379.0], [11.7, 379.0], [11.8, 381.0], [11.9, 383.0], [12.0, 384.0], [12.1, 384.0], [12.2, 385.0], [12.3, 386.0], [12.4, 386.0], [12.5, 386.0], [12.6, 386.0], [12.7, 386.0], [12.8, 386.0], [12.9, 386.0], [13.0, 390.0], [13.1, 391.0], [13.2, 391.0], [13.3, 391.0], [13.4, 392.0], [13.5, 398.0], [13.6, 398.0], [13.7, 399.0], [13.8, 400.0], [13.9, 400.0], [14.0, 400.0], [14.1, 404.0], [14.2, 404.0], [14.3, 407.0], [14.4, 407.0], [14.5, 407.0], [14.6, 408.0], [14.7, 408.0], [14.8, 408.0], [14.9, 410.0], [15.0, 414.0], [15.1, 414.0], [15.2, 415.0], [15.3, 416.0], [15.4, 417.0], [15.5, 417.0], [15.6, 418.0], [15.7, 419.0], [15.8, 420.0], [15.9, 420.0], [16.0, 420.0], [16.1, 421.0], [16.2, 424.0], [16.3, 424.0], [16.4, 425.0], [16.5, 425.0], [16.6, 428.0], [16.7, 428.0], [16.8, 428.0], [16.9, 429.0], [17.0, 429.0], [17.1, 429.0], [17.2, 430.0], [17.3, 430.0], [17.4, 430.0], [17.5, 434.0], [17.6, 434.0], [17.7, 438.0], [17.8, 438.0], [17.9, 439.0], [18.0, 440.0], [18.1, 442.0], [18.2, 442.0], [18.3, 442.0], [18.4, 442.0], [18.5, 442.0], [18.6, 444.0], [18.7, 445.0], [18.8, 445.0], [18.9, 445.0], [19.0, 447.0], [19.1, 447.0], [19.2, 448.0], [19.3, 448.0], [19.4, 457.0], [19.5, 458.0], [19.6, 462.0], [19.7, 462.0], [19.8, 464.0], [19.9, 465.0], [20.0, 466.0], [20.1, 466.0], [20.2, 467.0], [20.3, 468.0], [20.4, 468.0], [20.5, 469.0], [20.6, 471.0], [20.7, 471.0], [20.8, 471.0], [20.9, 472.0], [21.0, 472.0], [21.1, 473.0], [21.2, 473.0], [21.3, 476.0], [21.4, 477.0], [21.5, 480.0], [21.6, 480.0], [21.7, 482.0], [21.8, 483.0], [21.9, 483.0], [22.0, 484.0], [22.1, 487.0], [22.2, 489.0], [22.3, 489.0], [22.4, 489.0], [22.5, 494.0], [22.6, 496.0], [22.7, 496.0], [22.8, 497.0], [22.9, 498.0], [23.0, 500.0], [23.1, 500.0], [23.2, 500.0], [23.3, 504.0], [23.4, 504.0], [23.5, 505.0], [23.6, 507.0], [23.7, 509.0], [23.8, 509.0], [23.9, 510.0], [24.0, 513.0], [24.1, 514.0], [24.2, 514.0], [24.3, 514.0], [24.4, 514.0], [24.5, 519.0], [24.6, 519.0], [24.7, 519.0], [24.8, 520.0], [24.9, 520.0], [25.0, 520.0], [25.1, 520.0], [25.2, 521.0], [25.3, 521.0], [25.4, 521.0], [25.5, 522.0], [25.6, 524.0], [25.7, 524.0], [25.8, 524.0], [25.9, 525.0], [26.0, 526.0], [26.1, 526.0], [26.2, 526.0], [26.3, 527.0], [26.4, 527.0], [26.5, 527.0], [26.6, 529.0], [26.7, 529.0], [26.8, 529.0], [26.9, 532.0], [27.0, 533.0], [27.1, 536.0], [27.2, 536.0], [27.3, 536.0], [27.4, 537.0], [27.5, 539.0], [27.6, 539.0], [27.7, 539.0], [27.8, 539.0], [27.9, 540.0], [28.0, 540.0], [28.1, 541.0], [28.2, 541.0], [28.3, 542.0], [28.4, 542.0], [28.5, 543.0], [28.6, 543.0], [28.7, 543.0], [28.8, 543.0], [28.9, 543.0], [29.0, 544.0], [29.1, 544.0], [29.2, 544.0], [29.3, 545.0], [29.4, 545.0], [29.5, 545.0], [29.6, 545.0], [29.7, 546.0], [29.8, 547.0], [29.9, 547.0], [30.0, 548.0], [30.1, 549.0], [30.2, 549.0], [30.3, 549.0], [30.4, 549.0], [30.5, 550.0], [30.6, 550.0], [30.7, 551.0], [30.8, 552.0], [30.9, 552.0], [31.0, 552.0], [31.1, 553.0], [31.2, 554.0], [31.3, 554.0], [31.4, 554.0], [31.5, 556.0], [31.6, 557.0], [31.7, 557.0], [31.8, 557.0], [31.9, 558.0], [32.0, 559.0], [32.1, 559.0], [32.2, 560.0], [32.3, 562.0], [32.4, 565.0], [32.5, 565.0], [32.6, 566.0], [32.7, 567.0], [32.8, 567.0], [32.9, 567.0], [33.0, 567.0], [33.1, 568.0], [33.2, 568.0], [33.3, 568.0], [33.4, 570.0], [33.5, 571.0], [33.6, 571.0], [33.7, 573.0], [33.8, 574.0], [33.9, 575.0], [34.0, 575.0], [34.1, 575.0], [34.2, 578.0], [34.3, 579.0], [34.4, 579.0], [34.5, 579.0], [34.6, 580.0], [34.7, 580.0], [34.8, 580.0], [34.9, 580.0], [35.0, 581.0], [35.1, 581.0], [35.2, 585.0], [35.3, 586.0], [35.4, 587.0], [35.5, 587.0], [35.6, 588.0], [35.7, 589.0], [35.8, 590.0], [35.9, 590.0], [36.0, 591.0], [36.1, 592.0], [36.2, 598.0], [36.3, 598.0], [36.4, 598.0], [36.5, 598.0], [36.6, 599.0], [36.7, 599.0], [36.8, 599.0], [36.9, 601.0], [37.0, 601.0], [37.1, 602.0], [37.2, 602.0], [37.3, 603.0], [37.4, 603.0], [37.5, 603.0], [37.6, 605.0], [37.7, 606.0], [37.8, 606.0], [37.9, 606.0], [38.0, 606.0], [38.1, 608.0], [38.2, 608.0], [38.3, 608.0], [38.4, 610.0], [38.5, 610.0], [38.6, 611.0], [38.7, 613.0], [38.8, 614.0], [38.9, 614.0], [39.0, 616.0], [39.1, 617.0], [39.2, 617.0], [39.3, 617.0], [39.4, 619.0], [39.5, 620.0], [39.6, 621.0], [39.7, 621.0], [39.8, 624.0], [39.9, 626.0], [40.0, 626.0], [40.1, 626.0], [40.2, 626.0], [40.3, 627.0], [40.4, 627.0], [40.5, 629.0], [40.6, 630.0], [40.7, 630.0], [40.8, 630.0], [40.9, 631.0], [41.0, 637.0], [41.1, 638.0], [41.2, 638.0], [41.3, 639.0], [41.4, 639.0], [41.5, 642.0], [41.6, 642.0], [41.7, 642.0], [41.8, 646.0], [41.9, 646.0], [42.0, 647.0], [42.1, 649.0], [42.2, 650.0], [42.3, 650.0], [42.4, 651.0], [42.5, 652.0], [42.6, 652.0], [42.7, 652.0], [42.8, 655.0], [42.9, 657.0], [43.0, 658.0], [43.1, 658.0], [43.2, 659.0], [43.3, 662.0], [43.4, 662.0], [43.5, 663.0], [43.6, 665.0], [43.7, 667.0], [43.8, 667.0], [43.9, 667.0], [44.0, 670.0], [44.1, 672.0], [44.2, 672.0], [44.3, 675.0], [44.4, 677.0], [44.5, 677.0], [44.6, 677.0], [44.7, 678.0], [44.8, 679.0], [44.9, 680.0], [45.0, 680.0], [45.1, 683.0], [45.2, 686.0], [45.3, 686.0], [45.4, 687.0], [45.5, 689.0], [45.6, 690.0], [45.7, 690.0], [45.8, 690.0], [45.9, 691.0], [46.0, 692.0], [46.1, 692.0], [46.2, 694.0], [46.3, 695.0], [46.4, 697.0], [46.5, 697.0], [46.6, 698.0], [46.7, 698.0], [46.8, 698.0], [46.9, 700.0], [47.0, 703.0], [47.1, 706.0], [47.2, 706.0], [47.3, 707.0], [47.4, 707.0], [47.5, 711.0], [47.6, 711.0], [47.7, 717.0], [47.8, 718.0], [47.9, 718.0], [48.0, 718.0], [48.1, 718.0], [48.2, 718.0], [48.3, 720.0], [48.4, 720.0], [48.5, 722.0], [48.6, 725.0], [48.7, 725.0], [48.8, 725.0], [48.9, 725.0], [49.0, 726.0], [49.1, 726.0], [49.2, 726.0], [49.3, 729.0], [49.4, 730.0], [49.5, 730.0], [49.6, 732.0], [49.7, 733.0], [49.8, 733.0], [49.9, 733.0], [50.0, 740.0], [50.1, 741.0], [50.2, 741.0], [50.3, 750.0], [50.4, 752.0], [50.5, 753.0], [50.6, 753.0], [50.7, 753.0], [50.8, 754.0], [50.9, 757.0], [51.0, 757.0], [51.1, 758.0], [51.2, 764.0], [51.3, 767.0], [51.4, 767.0], [51.5, 767.0], [51.6, 769.0], [51.7, 769.0], [51.8, 770.0], [51.9, 770.0], [52.0, 772.0], [52.1, 772.0], [52.2, 774.0], [52.3, 775.0], [52.4, 776.0], [52.5, 776.0], [52.6, 777.0], [52.7, 777.0], [52.8, 780.0], [52.9, 780.0], [53.0, 780.0], [53.1, 781.0], [53.2, 783.0], [53.3, 783.0], [53.4, 784.0], [53.5, 784.0], [53.6, 784.0], [53.7, 785.0], [53.8, 785.0], [53.9, 785.0], [54.0, 785.0], [54.1, 790.0], [54.2, 790.0], [54.3, 792.0], [54.4, 792.0], [54.5, 795.0], [54.6, 795.0], [54.7, 796.0], [54.8, 796.0], [54.9, 802.0], [55.0, 803.0], [55.1, 803.0], [55.2, 805.0], [55.3, 805.0], [55.4, 807.0], [55.5, 807.0], [55.6, 810.0], [55.7, 810.0], [55.8, 813.0], [55.9, 813.0], [56.0, 815.0], [56.1, 816.0], [56.2, 818.0], [56.3, 818.0], [56.4, 819.0], [56.5, 820.0], [56.6, 821.0], [56.7, 821.0], [56.8, 822.0], [56.9, 823.0], [57.0, 823.0], [57.1, 823.0], [57.2, 827.0], [57.3, 829.0], [57.4, 829.0], [57.5, 829.0], [57.6, 831.0], [57.7, 831.0], [57.8, 831.0], [57.9, 834.0], [58.0, 836.0], [58.1, 837.0], [58.2, 837.0], [58.3, 839.0], [58.4, 845.0], [58.5, 845.0], [58.6, 846.0], [58.7, 850.0], [58.8, 851.0], [58.9, 851.0], [59.0, 852.0], [59.1, 853.0], [59.2, 855.0], [59.3, 855.0], [59.4, 856.0], [59.5, 857.0], [59.6, 858.0], [59.7, 858.0], [59.8, 860.0], [59.9, 865.0], [60.0, 867.0], [60.1, 867.0], [60.2, 875.0], [60.3, 877.0], [60.4, 877.0], [60.5, 881.0], [60.6, 883.0], [60.7, 885.0], [60.8, 885.0], [60.9, 889.0], [61.0, 890.0], [61.1, 890.0], [61.2, 890.0], [61.3, 890.0], [61.4, 892.0], [61.5, 897.0], [61.6, 897.0], [61.7, 898.0], [61.8, 899.0], [61.9, 899.0], [62.0, 900.0], [62.1, 900.0], [62.2, 901.0], [62.3, 901.0], [62.4, 904.0], [62.5, 906.0], [62.6, 908.0], [62.7, 908.0], [62.8, 908.0], [62.9, 913.0], [63.0, 916.0], [63.1, 916.0], [63.2, 917.0], [63.3, 922.0], [63.4, 922.0], [63.5, 924.0], [63.6, 925.0], [63.7, 927.0], [63.8, 927.0], [63.9, 927.0], [64.0, 928.0], [64.1, 929.0], [64.2, 929.0], [64.3, 930.0], [64.4, 931.0], [64.5, 931.0], [64.6, 931.0], [64.7, 933.0], [64.8, 933.0], [64.9, 935.0], [65.0, 935.0], [65.1, 935.0], [65.2, 940.0], [65.3, 940.0], [65.4, 940.0], [65.5, 941.0], [65.6, 941.0], [65.7, 941.0], [65.8, 944.0], [65.9, 947.0], [66.0, 948.0], [66.1, 948.0], [66.2, 950.0], [66.3, 950.0], [66.4, 953.0], [66.5, 953.0], [66.6, 957.0], [66.7, 960.0], [66.8, 960.0], [66.9, 960.0], [67.0, 960.0], [67.1, 963.0], [67.2, 963.0], [67.3, 966.0], [67.4, 968.0], [67.5, 968.0], [67.6, 968.0], [67.7, 971.0], [67.8, 974.0], [67.9, 975.0], [68.0, 975.0], [68.1, 979.0], [68.2, 981.0], [68.3, 981.0], [68.4, 981.0], [68.5, 982.0], [68.6, 983.0], [68.7, 983.0], [68.8, 984.0], [68.9, 984.0], [69.0, 985.0], [69.1, 985.0], [69.2, 985.0], [69.3, 985.0], [69.4, 989.0], [69.5, 989.0], [69.6, 993.0], [69.7, 993.0], [69.8, 994.0], [69.9, 994.0], [70.0, 999.0], [70.1, 1005.0], [70.2, 1005.0], [70.3, 1006.0], [70.4, 1008.0], [70.5, 1009.0], [70.6, 1009.0], [70.7, 1009.0], [70.8, 1011.0], [70.9, 1011.0], [71.0, 1011.0], [71.1, 1011.0], [71.2, 1012.0], [71.3, 1013.0], [71.4, 1013.0], [71.5, 1014.0], [71.6, 1015.0], [71.7, 1015.0], [71.8, 1015.0], [71.9, 1017.0], [72.0, 1018.0], [72.1, 1018.0], [72.2, 1018.0], [72.3, 1021.0], [72.4, 1023.0], [72.5, 1023.0], [72.6, 1024.0], [72.7, 1026.0], [72.8, 1027.0], [72.9, 1027.0], [73.0, 1031.0], [73.1, 1031.0], [73.2, 1033.0], [73.3, 1033.0], [73.4, 1038.0], [73.5, 1038.0], [73.6, 1038.0], [73.7, 1038.0], [73.8, 1040.0], [73.9, 1042.0], [74.0, 1042.0], [74.1, 1044.0], [74.2, 1044.0], [74.3, 1053.0], [74.4, 1053.0], [74.5, 1053.0], [74.6, 1055.0], [74.7, 1055.0], [74.8, 1055.0], [74.9, 1055.0], [75.0, 1060.0], [75.1, 1060.0], [75.2, 1060.0], [75.3, 1060.0], [75.4, 1061.0], [75.5, 1061.0], [75.6, 1063.0], [75.7, 1063.0], [75.8, 1064.0], [75.9, 1064.0], [76.0, 1064.0], [76.1, 1069.0], [76.2, 1070.0], [76.3, 1070.0], [76.4, 1070.0], [76.5, 1073.0], [76.6, 1076.0], [76.7, 1076.0], [76.8, 1077.0], [76.9, 1079.0], [77.0, 1079.0], [77.1, 1080.0], [77.2, 1087.0], [77.3, 1088.0], [77.4, 1088.0], [77.5, 1089.0], [77.6, 1095.0], [77.7, 1097.0], [77.8, 1097.0], [77.9, 1097.0], [78.0, 1101.0], [78.1, 1102.0], [78.2, 1102.0], [78.3, 1104.0], [78.4, 1105.0], [78.5, 1105.0], [78.6, 1105.0], [78.7, 1106.0], [78.8, 1107.0], [78.9, 1107.0], [79.0, 1108.0], [79.1, 1109.0], [79.2, 1111.0], [79.3, 1111.0], [79.4, 1113.0], [79.5, 1113.0], [79.6, 1116.0], [79.7, 1116.0], [79.8, 1117.0], [79.9, 1120.0], [80.0, 1123.0], [80.1, 1123.0], [80.2, 1124.0], [80.3, 1125.0], [80.4, 1125.0], [80.5, 1126.0], [80.6, 1133.0], [80.7, 1135.0], [80.8, 1135.0], [80.9, 1141.0], [81.0, 1141.0], [81.1, 1142.0], [81.2, 1142.0], [81.3, 1142.0], [81.4, 1146.0], [81.5, 1148.0], [81.6, 1148.0], [81.7, 1148.0], [81.8, 1150.0], [81.9, 1150.0], [82.0, 1152.0], [82.1, 1156.0], [82.2, 1160.0], [82.3, 1160.0], [82.4, 1161.0], [82.5, 1167.0], [82.6, 1170.0], [82.7, 1170.0], [82.8, 1173.0], [82.9, 1174.0], [83.0, 1174.0], [83.1, 1174.0], [83.2, 1176.0], [83.3, 1176.0], [83.4, 1176.0], [83.5, 1181.0], [83.6, 1182.0], [83.7, 1185.0], [83.8, 1185.0], [83.9, 1188.0], [84.0, 1189.0], [84.1, 1190.0], [84.2, 1190.0], [84.3, 1191.0], [84.4, 1192.0], [84.5, 1194.0], [84.6, 1194.0], [84.7, 1194.0], [84.8, 1198.0], [84.9, 1199.0], [85.0, 1199.0], [85.1, 1204.0], [85.2, 1206.0], [85.3, 1206.0], [85.4, 1211.0], [85.5, 1219.0], [85.6, 1219.0], [85.7, 1219.0], [85.8, 1222.0], [85.9, 1224.0], [86.0, 1227.0], [86.1, 1227.0], [86.2, 1228.0], [86.3, 1229.0], [86.4, 1235.0], [86.5, 1235.0], [86.6, 1237.0], [86.7, 1239.0], [86.8, 1239.0], [86.9, 1242.0], [87.0, 1243.0], [87.1, 1243.0], [87.2, 1243.0], [87.3, 1245.0], [87.4, 1248.0], [87.5, 1251.0], [87.6, 1251.0], [87.7, 1253.0], [87.8, 1257.0], [87.9, 1258.0], [88.0, 1258.0], [88.1, 1260.0], [88.2, 1265.0], [88.3, 1270.0], [88.4, 1270.0], [88.5, 1275.0], [88.6, 1278.0], [88.7, 1278.0], [88.8, 1279.0], [88.9, 1284.0], [89.0, 1286.0], [89.1, 1286.0], [89.2, 1291.0], [89.3, 1292.0], [89.4, 1296.0], [89.5, 1296.0], [89.6, 1296.0], [89.7, 1297.0], [89.8, 1299.0], [89.9, 1299.0], [90.0, 1299.0], [90.1, 1302.0], [90.2, 1302.0], [90.3, 1308.0], [90.4, 1309.0], [90.5, 1310.0], [90.6, 1310.0], [90.7, 1311.0], [90.8, 1313.0], [90.9, 1314.0], [91.0, 1314.0], [91.1, 1318.0], [91.2, 1323.0], [91.3, 1325.0], [91.4, 1325.0], [91.5, 1329.0], [91.6, 1334.0], [91.7, 1334.0], [91.8, 1336.0], [91.9, 1337.0], [92.0, 1345.0], [92.1, 1345.0], [92.2, 1345.0], [92.3, 1350.0], [92.4, 1358.0], [92.5, 1358.0], [92.6, 1362.0], [92.7, 1369.0], [92.8, 1382.0], [92.9, 1382.0], [93.0, 1383.0], [93.1, 1389.0], [93.2, 1410.0], [93.3, 1410.0], [93.4, 1412.0], [93.5, 1417.0], [93.6, 1417.0], [93.7, 1420.0], [93.8, 1426.0], [93.9, 1428.0], [94.0, 1428.0], [94.1, 1440.0], [94.2, 1446.0], [94.3, 1478.0], [94.4, 1478.0], [94.5, 1480.0], [94.6, 1486.0], [94.7, 1488.0], [94.8, 1488.0], [94.9, 1490.0], [95.0, 1491.0], [95.1, 1491.0], [95.2, 1494.0], [95.3, 1513.0], [95.4, 1533.0], [95.5, 1533.0], [95.6, 1535.0], [95.7, 1552.0], [95.8, 1556.0], [95.9, 1556.0], [96.0, 1564.0], [96.1, 1597.0], [96.2, 1679.0], [96.3, 1679.0], [96.4, 1724.0], [96.5, 1760.0], [96.6, 1805.0], [96.7, 1805.0], [96.8, 1815.0], [96.9, 1855.0], [97.0, 1855.0], [97.1, 1859.0], [97.2, 1892.0], [97.3, 1895.0], [97.4, 1895.0], [97.5, 1922.0], [97.6, 1926.0], [97.7, 1975.0], [97.8, 1975.0], [97.9, 1985.0], [98.0, 2326.0], [98.1, 2496.0], [98.2, 2496.0], [98.3, 2650.0], [98.4, 2689.0], [98.5, 2689.0], [98.6, 2777.0], [98.7, 2856.0], [98.8, 2865.0], [98.9, 2865.0], [99.0, 2919.0], [99.1, 3033.0], [99.2, 3060.0], [99.3, 3060.0], [99.4, 3061.0], [99.5, 3150.0], [99.6, 3208.0], [99.7, 3208.0], [99.8, 3239.0], [99.9, 3414.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 102.0, "series": [{"data": [[600.0, 73.0], [700.0, 59.0], [800.0, 52.0], [900.0, 60.0], [1000.0, 58.0], [1100.0, 52.0], [1200.0, 37.0], [1300.0, 23.0], [1400.0, 15.0], [1500.0, 7.0], [1600.0, 1.0], [100.0, 4.0], [1700.0, 2.0], [1800.0, 6.0], [1900.0, 4.0], [2300.0, 1.0], [2400.0, 1.0], [2600.0, 2.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 3.0], [3100.0, 1.0], [3200.0, 2.0], [200.0, 51.0], [3400.0, 1.0], [300.0, 46.0], [400.0, 68.0], [500.0, 102.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 35.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 529.0, "series": [{"data": [[0.0, 171.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 529.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 35.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.9247491638796, "minX": 1.60223718E12, "maxY": 10.0, "series": [{"data": [[1.60223724E12, 9.9247491638796], [1.60223718E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223724E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 252.0, "minX": 1.0, "maxY": 1535.0, "series": [{"data": [[8.0, 252.0], [4.0, 993.0], [2.0, 1008.0], [1.0, 1480.0], [9.0, 1535.0], [10.0, 824.739669421488], [5.0, 985.0], [6.0, 546.0], [3.0, 642.0], [7.0, 580.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 825.5537414965991]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1037.4333333333334, "minX": 1.60223718E12, "maxY": 1369569.3, "series": [{"data": [[1.60223724E12, 1369569.3], [1.60223718E12, 466194.11666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223724E12, 4485.6], [1.60223718E12, 1037.4333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223724E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 783.9046822742479, "minX": 1.60223718E12, "maxY": 1007.3503649635029, "series": [{"data": [[1.60223724E12, 783.9046822742479], [1.60223718E12, 1007.3503649635029]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223724E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 782.8946488294317, "minX": 1.60223718E12, "maxY": 1006.1021897810222, "series": [{"data": [[1.60223724E12, 782.8946488294317], [1.60223718E12, 1006.1021897810222]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223724E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011705685618729096, "minX": 1.60223718E12, "maxY": 0.7956204379562045, "series": [{"data": [[1.60223724E12, 0.011705685618729096], [1.60223718E12, 0.7956204379562045]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223724E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60223718E12, "maxY": 3414.0, "series": [{"data": [[1.60223724E12, 3414.0], [1.60223718E12, 3239.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223724E12, 204.78199971437454], [1.60223718E12, 202.45199980258943]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223724E12, 205.86020011425018], [1.60223718E12, 203.19720007896424]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223724E12, 205.38099985718728], [1.60223718E12, 202.8659999012947]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223724E12, 184.0], [1.60223718E12, 201.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223724E12, 725.5], [1.60223718E12, 785.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223724E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 524.0, "minX": 1.0, "maxY": 1988.0, "series": [{"data": [[8.0, 989.0], [9.0, 1062.0], [10.0, 819.0], [11.0, 933.0], [12.0, 824.5], [13.0, 781.0], [14.0, 580.5], [15.0, 623.0], [1.0, 1988.0], [16.0, 524.0], [17.0, 538.5], [18.0, 589.0], [19.0, 543.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 524.0, "minX": 1.0, "maxY": 1986.5, "series": [{"data": [[8.0, 988.0], [9.0, 1060.0], [10.0, 818.5], [11.0, 932.0], [12.0, 824.5], [13.0, 779.0], [14.0, 580.5], [15.0, 622.0], [1.0, 1986.5], [16.0, 524.0], [17.0, 538.5], [18.0, 589.0], [19.0, 543.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.45, "minX": 1.60223718E12, "maxY": 9.8, "series": [{"data": [[1.60223724E12, 9.8], [1.60223718E12, 2.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223724E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.283333333333333, "minX": 1.60223718E12, "maxY": 9.966666666666667, "series": [{"data": [[1.60223724E12, 9.966666666666667], [1.60223718E12, 2.283333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223724E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.283333333333333, "minX": 1.60223718E12, "maxY": 9.966666666666667, "series": [{"data": [[1.60223724E12, 9.966666666666667], [1.60223718E12, 2.283333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223724E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.283333333333333, "minX": 1.60223718E12, "maxY": 9.966666666666667, "series": [{"data": [[1.60223724E12, 9.966666666666667], [1.60223718E12, 2.283333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223724E12, "title": "Total Transactions Per Second"}},
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

