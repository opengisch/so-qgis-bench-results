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
        data: {"result": {"minY": 216.0, "minX": 0.0, "maxY": 9755.0, "series": [{"data": [[0.0, 216.0], [0.1, 216.0], [0.2, 221.0], [0.3, 228.0], [0.4, 228.0], [0.5, 230.0], [0.6, 233.0], [0.7, 233.0], [0.8, 233.0], [0.9, 234.0], [1.0, 236.0], [1.1, 244.0], [1.2, 244.0], [1.3, 246.0], [1.4, 248.0], [1.5, 248.0], [1.6, 248.0], [1.7, 251.0], [1.8, 251.0], [1.9, 251.0], [2.0, 253.0], [2.1, 256.0], [2.2, 256.0], [2.3, 256.0], [2.4, 259.0], [2.5, 265.0], [2.6, 272.0], [2.7, 272.0], [2.8, 273.0], [2.9, 277.0], [3.0, 280.0], [3.1, 280.0], [3.2, 287.0], [3.3, 290.0], [3.4, 290.0], [3.5, 292.0], [3.6, 292.0], [3.7, 294.0], [3.8, 294.0], [3.9, 295.0], [4.0, 297.0], [4.1, 299.0], [4.2, 299.0], [4.3, 301.0], [4.4, 304.0], [4.5, 305.0], [4.6, 305.0], [4.7, 314.0], [4.8, 314.0], [4.9, 314.0], [5.0, 314.0], [5.1, 322.0], [5.2, 324.0], [5.3, 324.0], [5.4, 325.0], [5.5, 330.0], [5.6, 333.0], [5.7, 333.0], [5.8, 334.0], [5.9, 337.0], [6.0, 339.0], [6.1, 339.0], [6.2, 341.0], [6.3, 345.0], [6.4, 345.0], [6.5, 345.0], [6.6, 347.0], [6.7, 347.0], [6.8, 347.0], [6.9, 347.0], [7.0, 350.0], [7.1, 350.0], [7.2, 350.0], [7.3, 351.0], [7.4, 353.0], [7.5, 354.0], [7.6, 354.0], [7.7, 358.0], [7.8, 360.0], [7.9, 361.0], [8.0, 361.0], [8.1, 362.0], [8.2, 367.0], [8.3, 369.0], [8.4, 369.0], [8.5, 373.0], [8.6, 373.0], [8.7, 373.0], [8.8, 373.0], [8.9, 373.0], [9.0, 375.0], [9.1, 375.0], [9.2, 378.0], [9.3, 378.0], [9.4, 379.0], [9.5, 379.0], [9.6, 382.0], [9.7, 383.0], [9.8, 385.0], [9.9, 385.0], [10.0, 386.0], [10.1, 386.0], [10.2, 386.0], [10.3, 389.0], [10.4, 389.0], [10.5, 392.0], [10.6, 392.0], [10.7, 393.0], [10.8, 393.0], [10.9, 393.0], [11.0, 393.0], [11.1, 394.0], [11.2, 394.0], [11.3, 397.0], [11.4, 397.0], [11.5, 398.0], [11.6, 399.0], [11.7, 399.0], [11.8, 399.0], [11.9, 400.0], [12.0, 400.0], [12.1, 400.0], [12.2, 402.0], [12.3, 402.0], [12.4, 405.0], [12.5, 405.0], [12.6, 406.0], [12.7, 406.0], [12.8, 407.0], [12.9, 407.0], [13.0, 408.0], [13.1, 408.0], [13.2, 409.0], [13.3, 409.0], [13.4, 410.0], [13.5, 411.0], [13.6, 411.0], [13.7, 411.0], [13.8, 411.0], [13.9, 412.0], [14.0, 412.0], [14.1, 412.0], [14.2, 412.0], [14.3, 412.0], [14.4, 412.0], [14.5, 414.0], [14.6, 414.0], [14.7, 414.0], [14.8, 414.0], [14.9, 415.0], [15.0, 418.0], [15.1, 418.0], [15.2, 418.0], [15.3, 418.0], [15.4, 422.0], [15.5, 422.0], [15.6, 425.0], [15.7, 426.0], [15.8, 426.0], [15.9, 426.0], [16.0, 427.0], [16.1, 428.0], [16.2, 429.0], [16.3, 429.0], [16.4, 429.0], [16.5, 430.0], [16.6, 431.0], [16.7, 431.0], [16.8, 432.0], [16.9, 436.0], [17.0, 436.0], [17.1, 436.0], [17.2, 437.0], [17.3, 438.0], [17.4, 438.0], [17.5, 439.0], [17.6, 440.0], [17.7, 441.0], [17.8, 441.0], [17.9, 441.0], [18.0, 443.0], [18.1, 443.0], [18.2, 443.0], [18.3, 445.0], [18.4, 446.0], [18.5, 446.0], [18.6, 446.0], [18.7, 447.0], [18.8, 448.0], [18.9, 448.0], [19.0, 450.0], [19.1, 450.0], [19.2, 451.0], [19.3, 451.0], [19.4, 452.0], [19.5, 453.0], [19.6, 455.0], [19.7, 455.0], [19.8, 455.0], [19.9, 455.0], [20.0, 458.0], [20.1, 458.0], [20.2, 459.0], [20.3, 459.0], [20.4, 459.0], [20.5, 460.0], [20.6, 462.0], [20.7, 463.0], [20.8, 463.0], [20.9, 463.0], [21.0, 463.0], [21.1, 463.0], [21.2, 463.0], [21.3, 463.0], [21.4, 463.0], [21.5, 464.0], [21.6, 464.0], [21.7, 465.0], [21.8, 465.0], [21.9, 465.0], [22.0, 466.0], [22.1, 467.0], [22.2, 468.0], [22.3, 468.0], [22.4, 469.0], [22.5, 469.0], [22.6, 471.0], [22.7, 471.0], [22.8, 473.0], [22.9, 473.0], [23.0, 474.0], [23.1, 474.0], [23.2, 474.0], [23.3, 475.0], [23.4, 475.0], [23.5, 475.0], [23.6, 475.0], [23.7, 475.0], [23.8, 475.0], [23.9, 475.0], [24.0, 476.0], [24.1, 476.0], [24.2, 476.0], [24.3, 476.0], [24.4, 477.0], [24.5, 477.0], [24.6, 477.0], [24.7, 479.0], [24.8, 479.0], [24.9, 481.0], [25.0, 481.0], [25.1, 481.0], [25.2, 482.0], [25.3, 482.0], [25.4, 484.0], [25.5, 484.0], [25.6, 486.0], [25.7, 486.0], [25.8, 486.0], [25.9, 487.0], [26.0, 488.0], [26.1, 488.0], [26.2, 489.0], [26.3, 490.0], [26.4, 491.0], [26.5, 491.0], [26.6, 491.0], [26.7, 492.0], [26.8, 492.0], [26.9, 492.0], [27.0, 492.0], [27.1, 493.0], [27.2, 493.0], [27.3, 493.0], [27.4, 494.0], [27.5, 495.0], [27.6, 495.0], [27.7, 496.0], [27.8, 497.0], [27.9, 497.0], [28.0, 497.0], [28.1, 498.0], [28.2, 498.0], [28.3, 500.0], [28.4, 500.0], [28.5, 500.0], [28.6, 501.0], [28.7, 501.0], [28.8, 501.0], [28.9, 501.0], [29.0, 502.0], [29.1, 502.0], [29.2, 504.0], [29.3, 504.0], [29.4, 505.0], [29.5, 505.0], [29.6, 505.0], [29.7, 505.0], [29.8, 507.0], [29.9, 507.0], [30.0, 508.0], [30.1, 509.0], [30.2, 509.0], [30.3, 511.0], [30.4, 512.0], [30.5, 512.0], [30.6, 512.0], [30.7, 514.0], [30.8, 518.0], [30.9, 518.0], [31.0, 518.0], [31.1, 522.0], [31.2, 523.0], [31.3, 523.0], [31.4, 523.0], [31.5, 523.0], [31.6, 524.0], [31.7, 524.0], [31.8, 524.0], [31.9, 524.0], [32.0, 524.0], [32.1, 524.0], [32.2, 527.0], [32.3, 528.0], [32.4, 529.0], [32.5, 529.0], [32.6, 530.0], [32.7, 530.0], [32.8, 530.0], [32.9, 530.0], [33.0, 531.0], [33.1, 532.0], [33.2, 532.0], [33.3, 532.0], [33.4, 532.0], [33.5, 534.0], [33.6, 534.0], [33.7, 536.0], [33.8, 536.0], [33.9, 538.0], [34.0, 538.0], [34.1, 539.0], [34.2, 540.0], [34.3, 540.0], [34.4, 540.0], [34.5, 542.0], [34.6, 543.0], [34.7, 545.0], [34.8, 545.0], [34.9, 545.0], [35.0, 546.0], [35.1, 546.0], [35.2, 546.0], [35.3, 547.0], [35.4, 547.0], [35.5, 547.0], [35.6, 547.0], [35.7, 548.0], [35.8, 549.0], [35.9, 549.0], [36.0, 550.0], [36.1, 551.0], [36.2, 552.0], [36.3, 552.0], [36.4, 553.0], [36.5, 554.0], [36.6, 555.0], [36.7, 555.0], [36.8, 555.0], [36.9, 555.0], [37.0, 555.0], [37.1, 556.0], [37.2, 557.0], [37.3, 558.0], [37.4, 558.0], [37.5, 558.0], [37.6, 559.0], [37.7, 561.0], [37.8, 561.0], [37.9, 562.0], [38.0, 563.0], [38.1, 563.0], [38.2, 563.0], [38.3, 563.0], [38.4, 565.0], [38.5, 565.0], [38.6, 565.0], [38.7, 566.0], [38.8, 568.0], [38.9, 568.0], [39.0, 568.0], [39.1, 569.0], [39.2, 569.0], [39.3, 569.0], [39.4, 570.0], [39.5, 571.0], [39.6, 571.0], [39.7, 571.0], [39.8, 572.0], [39.9, 573.0], [40.0, 574.0], [40.1, 574.0], [40.2, 575.0], [40.3, 575.0], [40.4, 575.0], [40.5, 577.0], [40.6, 579.0], [40.7, 580.0], [40.8, 580.0], [40.9, 581.0], [41.0, 581.0], [41.1, 582.0], [41.2, 582.0], [41.3, 583.0], [41.4, 583.0], [41.5, 584.0], [41.6, 584.0], [41.7, 584.0], [41.8, 584.0], [41.9, 584.0], [42.0, 586.0], [42.1, 586.0], [42.2, 586.0], [42.3, 586.0], [42.4, 587.0], [42.5, 589.0], [42.6, 591.0], [42.7, 591.0], [42.8, 591.0], [42.9, 592.0], [43.0, 593.0], [43.1, 593.0], [43.2, 594.0], [43.3, 596.0], [43.4, 596.0], [43.5, 598.0], [43.6, 601.0], [43.7, 603.0], [43.8, 603.0], [43.9, 604.0], [44.0, 605.0], [44.1, 606.0], [44.2, 606.0], [44.3, 607.0], [44.4, 609.0], [44.5, 612.0], [44.6, 612.0], [44.7, 612.0], [44.8, 612.0], [44.9, 612.0], [45.0, 612.0], [45.1, 614.0], [45.2, 616.0], [45.3, 616.0], [45.4, 617.0], [45.5, 619.0], [45.6, 620.0], [45.7, 620.0], [45.8, 621.0], [45.9, 622.0], [46.0, 623.0], [46.1, 623.0], [46.2, 624.0], [46.3, 624.0], [46.4, 625.0], [46.5, 625.0], [46.6, 625.0], [46.7, 625.0], [46.8, 625.0], [46.9, 626.0], [47.0, 627.0], [47.1, 629.0], [47.2, 629.0], [47.3, 629.0], [47.4, 629.0], [47.5, 630.0], [47.6, 630.0], [47.7, 631.0], [47.8, 632.0], [47.9, 632.0], [48.0, 632.0], [48.1, 633.0], [48.2, 634.0], [48.3, 634.0], [48.4, 634.0], [48.5, 637.0], [48.6, 637.0], [48.7, 637.0], [48.8, 639.0], [48.9, 640.0], [49.0, 642.0], [49.1, 642.0], [49.2, 642.0], [49.3, 642.0], [49.4, 645.0], [49.5, 645.0], [49.6, 646.0], [49.7, 648.0], [49.8, 648.0], [49.9, 648.0], [50.0, 648.0], [50.1, 649.0], [50.2, 649.0], [50.3, 650.0], [50.4, 651.0], [50.5, 653.0], [50.6, 653.0], [50.7, 654.0], [50.8, 655.0], [50.9, 658.0], [51.0, 658.0], [51.1, 659.0], [51.2, 659.0], [51.3, 659.0], [51.4, 659.0], [51.5, 661.0], [51.6, 663.0], [51.7, 663.0], [51.8, 663.0], [51.9, 665.0], [52.0, 665.0], [52.1, 665.0], [52.2, 666.0], [52.3, 668.0], [52.4, 671.0], [52.5, 671.0], [52.6, 673.0], [52.7, 674.0], [52.8, 680.0], [52.9, 680.0], [53.0, 681.0], [53.1, 685.0], [53.2, 686.0], [53.3, 686.0], [53.4, 695.0], [53.5, 696.0], [53.6, 696.0], [53.7, 699.0], [53.8, 700.0], [53.9, 703.0], [54.0, 703.0], [54.1, 704.0], [54.2, 704.0], [54.3, 705.0], [54.4, 705.0], [54.5, 705.0], [54.6, 706.0], [54.7, 707.0], [54.8, 707.0], [54.9, 712.0], [55.0, 714.0], [55.1, 714.0], [55.2, 716.0], [55.3, 719.0], [55.4, 732.0], [55.5, 732.0], [55.6, 736.0], [55.7, 738.0], [55.8, 742.0], [55.9, 742.0], [56.0, 744.0], [56.1, 747.0], [56.2, 749.0], [56.3, 749.0], [56.4, 752.0], [56.5, 753.0], [56.6, 754.0], [56.7, 754.0], [56.8, 754.0], [56.9, 760.0], [57.0, 760.0], [57.1, 761.0], [57.2, 763.0], [57.3, 766.0], [57.4, 766.0], [57.5, 766.0], [57.6, 767.0], [57.7, 768.0], [57.8, 768.0], [57.9, 774.0], [58.0, 775.0], [58.1, 776.0], [58.2, 776.0], [58.3, 781.0], [58.4, 782.0], [58.5, 782.0], [58.6, 786.0], [58.7, 787.0], [58.8, 790.0], [58.9, 790.0], [59.0, 791.0], [59.1, 795.0], [59.2, 796.0], [59.3, 796.0], [59.4, 799.0], [59.5, 799.0], [59.6, 802.0], [59.7, 802.0], [59.8, 803.0], [59.9, 808.0], [60.0, 809.0], [60.1, 809.0], [60.2, 811.0], [60.3, 813.0], [60.4, 813.0], [60.5, 821.0], [60.6, 822.0], [60.7, 826.0], [60.8, 826.0], [60.9, 827.0], [61.0, 829.0], [61.1, 832.0], [61.2, 832.0], [61.3, 832.0], [61.4, 833.0], [61.5, 838.0], [61.6, 838.0], [61.7, 839.0], [61.8, 839.0], [61.9, 839.0], [62.0, 839.0], [62.1, 840.0], [62.2, 842.0], [62.3, 842.0], [62.4, 842.0], [62.5, 847.0], [62.6, 848.0], [62.7, 848.0], [62.8, 851.0], [62.9, 855.0], [63.0, 858.0], [63.1, 858.0], [63.2, 859.0], [63.3, 860.0], [63.4, 860.0], [63.5, 863.0], [63.6, 864.0], [63.7, 864.0], [63.8, 864.0], [63.9, 867.0], [64.0, 872.0], [64.1, 875.0], [64.2, 875.0], [64.3, 876.0], [64.4, 876.0], [64.5, 876.0], [64.6, 876.0], [64.7, 877.0], [64.8, 878.0], [64.9, 880.0], [65.0, 880.0], [65.1, 880.0], [65.2, 884.0], [65.3, 884.0], [65.4, 889.0], [65.5, 891.0], [65.6, 892.0], [65.7, 892.0], [65.8, 896.0], [65.9, 896.0], [66.0, 897.0], [66.1, 897.0], [66.2, 899.0], [66.3, 900.0], [66.4, 901.0], [66.5, 901.0], [66.6, 901.0], [66.7, 904.0], [66.8, 904.0], [66.9, 909.0], [67.0, 913.0], [67.1, 917.0], [67.2, 917.0], [67.3, 917.0], [67.4, 921.0], [67.5, 923.0], [67.6, 923.0], [67.7, 926.0], [67.8, 929.0], [67.9, 929.0], [68.0, 929.0], [68.1, 933.0], [68.2, 937.0], [68.3, 942.0], [68.4, 942.0], [68.5, 944.0], [68.6, 946.0], [68.7, 946.0], [68.8, 947.0], [68.9, 949.0], [69.0, 953.0], [69.1, 953.0], [69.2, 954.0], [69.3, 957.0], [69.4, 961.0], [69.5, 961.0], [69.6, 963.0], [69.7, 963.0], [69.8, 963.0], [69.9, 963.0], [70.0, 966.0], [70.1, 967.0], [70.2, 967.0], [70.3, 970.0], [70.4, 971.0], [70.5, 971.0], [70.6, 971.0], [70.7, 973.0], [70.8, 976.0], [70.9, 980.0], [71.0, 980.0], [71.1, 983.0], [71.2, 984.0], [71.3, 986.0], [71.4, 986.0], [71.5, 986.0], [71.6, 990.0], [71.7, 990.0], [71.8, 995.0], [71.9, 997.0], [72.0, 998.0], [72.1, 998.0], [72.2, 998.0], [72.3, 1000.0], [72.4, 1000.0], [72.5, 1000.0], [72.6, 1002.0], [72.7, 1002.0], [72.8, 1005.0], [72.9, 1005.0], [73.0, 1005.0], [73.1, 1007.0], [73.2, 1008.0], [73.3, 1008.0], [73.4, 1012.0], [73.5, 1014.0], [73.6, 1014.0], [73.7, 1014.0], [73.8, 1016.0], [73.9, 1018.0], [74.0, 1018.0], [74.1, 1018.0], [74.2, 1028.0], [74.3, 1036.0], [74.4, 1036.0], [74.5, 1036.0], [74.6, 1040.0], [74.7, 1046.0], [74.8, 1046.0], [74.9, 1050.0], [75.0, 1052.0], [75.1, 1052.0], [75.2, 1056.0], [75.3, 1062.0], [75.4, 1063.0], [75.5, 1063.0], [75.6, 1065.0], [75.7, 1071.0], [75.8, 1071.0], [75.9, 1071.0], [76.0, 1072.0], [76.1, 1074.0], [76.2, 1077.0], [76.3, 1077.0], [76.4, 1079.0], [76.5, 1081.0], [76.6, 1085.0], [76.7, 1085.0], [76.8, 1092.0], [76.9, 1093.0], [77.0, 1093.0], [77.1, 1098.0], [77.2, 1099.0], [77.3, 1101.0], [77.4, 1101.0], [77.5, 1110.0], [77.6, 1111.0], [77.7, 1111.0], [77.8, 1111.0], [77.9, 1111.0], [78.0, 1116.0], [78.1, 1117.0], [78.2, 1117.0], [78.3, 1119.0], [78.4, 1122.0], [78.5, 1122.0], [78.6, 1123.0], [78.7, 1125.0], [78.8, 1128.0], [78.9, 1128.0], [79.0, 1131.0], [79.1, 1132.0], [79.2, 1139.0], [79.3, 1139.0], [79.4, 1141.0], [79.5, 1142.0], [79.6, 1143.0], [79.7, 1143.0], [79.8, 1144.0], [79.9, 1151.0], [80.0, 1152.0], [80.1, 1152.0], [80.2, 1161.0], [80.3, 1164.0], [80.4, 1164.0], [80.5, 1164.0], [80.6, 1165.0], [80.7, 1166.0], [80.8, 1166.0], [80.9, 1168.0], [81.0, 1169.0], [81.1, 1177.0], [81.2, 1177.0], [81.3, 1178.0], [81.4, 1182.0], [81.5, 1190.0], [81.6, 1190.0], [81.7, 1190.0], [81.8, 1196.0], [81.9, 1196.0], [82.0, 1197.0], [82.1, 1204.0], [82.2, 1205.0], [82.3, 1205.0], [82.4, 1208.0], [82.5, 1210.0], [82.6, 1211.0], [82.7, 1211.0], [82.8, 1213.0], [82.9, 1214.0], [83.0, 1215.0], [83.1, 1215.0], [83.2, 1223.0], [83.3, 1244.0], [83.4, 1244.0], [83.5, 1251.0], [83.6, 1253.0], [83.7, 1254.0], [83.8, 1254.0], [83.9, 1263.0], [84.0, 1263.0], [84.1, 1266.0], [84.2, 1266.0], [84.3, 1267.0], [84.4, 1277.0], [84.5, 1287.0], [84.6, 1287.0], [84.7, 1294.0], [84.8, 1310.0], [84.9, 1311.0], [85.0, 1311.0], [85.1, 1313.0], [85.2, 1316.0], [85.3, 1316.0], [85.4, 1317.0], [85.5, 1318.0], [85.6, 1318.0], [85.7, 1318.0], [85.8, 1319.0], [85.9, 1320.0], [86.0, 1322.0], [86.1, 1322.0], [86.2, 1324.0], [86.3, 1328.0], [86.4, 1334.0], [86.5, 1334.0], [86.6, 1336.0], [86.7, 1337.0], [86.8, 1337.0], [86.9, 1337.0], [87.0, 1342.0], [87.1, 1343.0], [87.2, 1343.0], [87.3, 1344.0], [87.4, 1344.0], [87.5, 1345.0], [87.6, 1345.0], [87.7, 1349.0], [87.8, 1350.0], [87.9, 1352.0], [88.0, 1352.0], [88.1, 1354.0], [88.2, 1364.0], [88.3, 1367.0], [88.4, 1367.0], [88.5, 1371.0], [88.6, 1382.0], [88.7, 1382.0], [88.8, 1392.0], [88.9, 1393.0], [89.0, 1396.0], [89.1, 1396.0], [89.2, 1410.0], [89.3, 1433.0], [89.4, 1438.0], [89.5, 1438.0], [89.6, 1441.0], [89.7, 1444.0], [89.8, 1457.0], [89.9, 1457.0], [90.0, 1459.0], [90.1, 1467.0], [90.2, 1467.0], [90.3, 1468.0], [90.4, 1479.0], [90.5, 1485.0], [90.6, 1485.0], [90.7, 1490.0], [90.8, 1497.0], [90.9, 1503.0], [91.0, 1503.0], [91.1, 1503.0], [91.2, 1514.0], [91.3, 1523.0], [91.4, 1523.0], [91.5, 1530.0], [91.6, 1552.0], [91.7, 1552.0], [91.8, 1554.0], [91.9, 1555.0], [92.0, 1557.0], [92.1, 1557.0], [92.2, 1559.0], [92.3, 1564.0], [92.4, 1575.0], [92.5, 1575.0], [92.6, 1588.0], [92.7, 1590.0], [92.8, 1592.0], [92.9, 1592.0], [93.0, 1608.0], [93.1, 1611.0], [93.2, 1613.0], [93.3, 1613.0], [93.4, 1616.0], [93.5, 1617.0], [93.6, 1617.0], [93.7, 1663.0], [93.8, 1668.0], [93.9, 1722.0], [94.0, 1722.0], [94.1, 1724.0], [94.2, 1743.0], [94.3, 1773.0], [94.4, 1773.0], [94.5, 1782.0], [94.6, 1810.0], [94.7, 1826.0], [94.8, 1826.0], [94.9, 1831.0], [95.0, 1841.0], [95.1, 1841.0], [95.2, 1847.0], [95.3, 1862.0], [95.4, 1882.0], [95.5, 1882.0], [95.6, 1888.0], [95.7, 1891.0], [95.8, 1905.0], [95.9, 1905.0], [96.0, 1912.0], [96.1, 1943.0], [96.2, 2028.0], [96.3, 2028.0], [96.4, 2068.0], [96.5, 2078.0], [96.6, 2079.0], [96.7, 2079.0], [96.8, 2102.0], [96.9, 2117.0], [97.0, 2117.0], [97.1, 2162.0], [97.2, 2233.0], [97.3, 2281.0], [97.4, 2281.0], [97.5, 2293.0], [97.6, 2310.0], [97.7, 2427.0], [97.8, 2427.0], [97.9, 2497.0], [98.0, 2632.0], [98.1, 2660.0], [98.2, 2660.0], [98.3, 2674.0], [98.4, 2744.0], [98.5, 2744.0], [98.6, 2862.0], [98.7, 2878.0], [98.8, 2899.0], [98.9, 2899.0], [99.0, 3019.0], [99.1, 3241.0], [99.2, 3606.0], [99.3, 3606.0], [99.4, 4243.0], [99.5, 4545.0], [99.6, 5252.0], [99.7, 5252.0], [99.8, 8875.0], [99.9, 9755.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 121.0, "series": [{"data": [[8800.0, 1.0], [600.0, 75.0], [9700.0, 1.0], [700.0, 43.0], [800.0, 49.0], [900.0, 44.0], [1000.0, 37.0], [1100.0, 35.0], [1200.0, 20.0], [1300.0, 32.0], [1400.0, 13.0], [1500.0, 15.0], [1600.0, 7.0], [1700.0, 5.0], [1800.0, 9.0], [1900.0, 3.0], [2000.0, 4.0], [2100.0, 3.0], [2300.0, 1.0], [2200.0, 3.0], [2400.0, 2.0], [2600.0, 3.0], [2800.0, 3.0], [2700.0, 1.0], [3000.0, 1.0], [200.0, 31.0], [3200.0, 1.0], [3600.0, 1.0], [4200.0, 1.0], [4500.0, 1.0], [300.0, 56.0], [5200.0, 1.0], [400.0, 121.0], [500.0, 112.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 67.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 458.0, "series": [{"data": [[0.0, 210.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 458.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 67.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.642276422764228, "minX": 1.60232538E12, "maxY": 10.0, "series": [{"data": [[1.60232544E12, 9.642276422764228], [1.60232538E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232544E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 524.0, "minX": 1.0, "maxY": 3019.0, "series": [{"data": [[4.0, 1479.0], [2.0, 1371.0], [1.0, 2878.0], [9.0, 703.5], [10.0, 851.9986225895319], [5.0, 524.0], [6.0, 538.0], [3.0, 3019.0], [7.0, 637.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 857.6925170068029]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 914.6833333333333, "minX": 1.60232538E12, "maxY": 1887453.5333333334, "series": [{"data": [[1.60232544E12, 308032.3], [1.60232538E12, 1887453.5333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232544E12, 914.6833333333333], [1.60232538E12, 4608.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232544E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 756.7804878048777, "minX": 1.60232538E12, "maxY": 877.9738562091508, "series": [{"data": [[1.60232544E12, 756.7804878048777], [1.60232538E12, 877.9738562091508]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232544E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 755.6097560975612, "minX": 1.60232538E12, "maxY": 876.401960784315, "series": [{"data": [[1.60232544E12, 755.6097560975612], [1.60232538E12, 876.401960784315]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232544E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.07317073170731707, "minX": 1.60232538E12, "maxY": 0.14542483660130712, "series": [{"data": [[1.60232544E12, 0.07317073170731707], [1.60232538E12, 0.14542483660130712]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232544E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 216.0, "minX": 1.60232538E12, "maxY": 9755.0, "series": [{"data": [[1.60232544E12, 4545.0], [1.60232538E12, 9755.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232544E12, 251.3359986400604], [1.60232538E12, 233.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232544E12, 256.46960054397584], [1.60232538E12, 233.06870005846022]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232544E12, 254.1879993200302], [1.60232538E12, 233.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232544E12, 246.0], [1.60232538E12, 216.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232544E12, 532.0], [1.60232538E12, 701.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232544E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 399.0, "minX": 2.0, "maxY": 2124.5, "series": [{"data": [[8.0, 1082.5], [2.0, 2124.5], [9.0, 696.0], [10.0, 863.5], [11.0, 811.0], [3.0, 1222.5], [12.0, 755.0], [13.0, 637.0], [14.0, 622.5], [15.0, 542.0], [16.0, 557.5], [17.0, 612.0], [18.0, 605.0], [19.0, 399.0], [5.0, 1032.5], [21.0, 491.0], [22.0, 473.5], [6.0, 1421.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 399.0, "minX": 2.0, "maxY": 2124.5, "series": [{"data": [[8.0, 1081.5], [2.0, 2124.5], [9.0, 695.0], [10.0, 862.5], [11.0, 810.0], [3.0, 1220.0], [12.0, 754.0], [13.0, 637.0], [14.0, 621.0], [15.0, 541.0], [16.0, 557.0], [17.0, 611.0], [18.0, 604.5], [19.0, 399.0], [5.0, 1018.0], [21.0, 491.0], [22.0, 473.0], [6.0, 1419.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8833333333333333, "minX": 1.60232538E12, "maxY": 10.366666666666667, "series": [{"data": [[1.60232544E12, 1.8833333333333333], [1.60232538E12, 10.366666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232544E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.05, "minX": 1.60232538E12, "maxY": 10.2, "series": [{"data": [[1.60232544E12, 2.05], [1.60232538E12, 10.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232544E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.05, "minX": 1.60232538E12, "maxY": 10.2, "series": [{"data": [[1.60232544E12, 2.05], [1.60232538E12, 10.2]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232544E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.05, "minX": 1.60232538E12, "maxY": 10.2, "series": [{"data": [[1.60232544E12, 2.05], [1.60232538E12, 10.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232544E12, "title": "Total Transactions Per Second"}},
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

