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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 3326.0, "series": [{"data": [[0.0, 179.0], [0.1, 179.0], [0.2, 181.0], [0.3, 181.0], [0.4, 181.0], [0.5, 183.0], [0.6, 187.0], [0.7, 189.0], [0.8, 189.0], [0.9, 193.0], [1.0, 193.0], [1.1, 197.0], [1.2, 197.0], [1.3, 200.0], [1.4, 205.0], [1.5, 215.0], [1.6, 215.0], [1.7, 215.0], [1.8, 216.0], [1.9, 216.0], [2.0, 217.0], [2.1, 218.0], [2.2, 222.0], [2.3, 222.0], [2.4, 225.0], [2.5, 227.0], [2.6, 231.0], [2.7, 231.0], [2.8, 239.0], [2.9, 244.0], [3.0, 251.0], [3.1, 251.0], [3.2, 252.0], [3.3, 253.0], [3.4, 253.0], [3.5, 256.0], [3.6, 256.0], [3.7, 256.0], [3.8, 256.0], [3.9, 258.0], [4.0, 260.0], [4.1, 262.0], [4.2, 262.0], [4.3, 262.0], [4.4, 264.0], [4.5, 265.0], [4.6, 265.0], [4.7, 266.0], [4.8, 271.0], [4.9, 271.0], [5.0, 271.0], [5.1, 274.0], [5.2, 274.0], [5.3, 274.0], [5.4, 275.0], [5.5, 276.0], [5.6, 278.0], [5.7, 278.0], [5.8, 278.0], [5.9, 281.0], [6.0, 282.0], [6.1, 282.0], [6.2, 282.0], [6.3, 285.0], [6.4, 286.0], [6.5, 286.0], [6.6, 289.0], [6.7, 292.0], [6.8, 292.0], [6.9, 295.0], [7.0, 298.0], [7.1, 299.0], [7.2, 299.0], [7.3, 300.0], [7.4, 301.0], [7.5, 305.0], [7.6, 305.0], [7.7, 305.0], [7.8, 307.0], [7.9, 307.0], [8.0, 307.0], [8.1, 308.0], [8.2, 310.0], [8.3, 316.0], [8.4, 316.0], [8.5, 320.0], [8.6, 321.0], [8.7, 321.0], [8.8, 321.0], [8.9, 325.0], [9.0, 327.0], [9.1, 327.0], [9.2, 327.0], [9.3, 327.0], [9.4, 330.0], [9.5, 330.0], [9.6, 331.0], [9.7, 332.0], [9.8, 334.0], [9.9, 334.0], [10.0, 335.0], [10.1, 339.0], [10.2, 339.0], [10.3, 339.0], [10.4, 340.0], [10.5, 342.0], [10.6, 342.0], [10.7, 343.0], [10.8, 344.0], [10.9, 346.0], [11.0, 346.0], [11.1, 349.0], [11.2, 351.0], [11.3, 351.0], [11.4, 351.0], [11.5, 352.0], [11.6, 357.0], [11.7, 357.0], [11.8, 358.0], [11.9, 361.0], [12.0, 365.0], [12.1, 365.0], [12.2, 366.0], [12.3, 370.0], [12.4, 372.0], [12.5, 372.0], [12.6, 375.0], [12.7, 375.0], [12.8, 376.0], [12.9, 376.0], [13.0, 376.0], [13.1, 377.0], [13.2, 377.0], [13.3, 377.0], [13.4, 379.0], [13.5, 383.0], [13.6, 383.0], [13.7, 383.0], [13.8, 385.0], [13.9, 386.0], [14.0, 386.0], [14.1, 387.0], [14.2, 388.0], [14.3, 391.0], [14.4, 391.0], [14.5, 391.0], [14.6, 398.0], [14.7, 401.0], [14.8, 401.0], [14.9, 402.0], [15.0, 405.0], [15.1, 405.0], [15.2, 406.0], [15.3, 414.0], [15.4, 414.0], [15.5, 414.0], [15.6, 415.0], [15.7, 415.0], [15.8, 425.0], [15.9, 425.0], [16.0, 427.0], [16.1, 431.0], [16.2, 432.0], [16.3, 432.0], [16.4, 432.0], [16.5, 434.0], [16.6, 436.0], [16.7, 436.0], [16.8, 437.0], [16.9, 438.0], [17.0, 438.0], [17.1, 439.0], [17.2, 442.0], [17.3, 442.0], [17.4, 442.0], [17.5, 446.0], [17.6, 446.0], [17.7, 446.0], [17.8, 446.0], [17.9, 447.0], [18.0, 447.0], [18.1, 452.0], [18.2, 452.0], [18.3, 454.0], [18.4, 455.0], [18.5, 455.0], [18.6, 456.0], [18.7, 458.0], [18.8, 460.0], [18.9, 460.0], [19.0, 460.0], [19.1, 462.0], [19.2, 462.0], [19.3, 462.0], [19.4, 463.0], [19.5, 463.0], [19.6, 464.0], [19.7, 464.0], [19.8, 465.0], [19.9, 465.0], [20.0, 466.0], [20.1, 466.0], [20.2, 470.0], [20.3, 473.0], [20.4, 473.0], [20.5, 475.0], [20.6, 477.0], [20.7, 478.0], [20.8, 478.0], [20.9, 479.0], [21.0, 479.0], [21.1, 479.0], [21.2, 479.0], [21.3, 480.0], [21.4, 482.0], [21.5, 486.0], [21.6, 486.0], [21.7, 486.0], [21.8, 487.0], [21.9, 487.0], [22.0, 490.0], [22.1, 494.0], [22.2, 497.0], [22.3, 497.0], [22.4, 498.0], [22.5, 499.0], [22.6, 501.0], [22.7, 501.0], [22.8, 501.0], [22.9, 503.0], [23.0, 503.0], [23.1, 503.0], [23.2, 505.0], [23.3, 505.0], [23.4, 505.0], [23.5, 506.0], [23.6, 509.0], [23.7, 509.0], [23.8, 509.0], [23.9, 510.0], [24.0, 512.0], [24.1, 512.0], [24.2, 512.0], [24.3, 514.0], [24.4, 514.0], [24.5, 515.0], [24.6, 515.0], [24.7, 517.0], [24.8, 518.0], [24.9, 519.0], [25.0, 519.0], [25.1, 519.0], [25.2, 520.0], [25.3, 520.0], [25.4, 520.0], [25.5, 521.0], [25.6, 522.0], [25.7, 522.0], [25.8, 522.0], [25.9, 523.0], [26.0, 523.0], [26.1, 523.0], [26.2, 523.0], [26.3, 524.0], [26.4, 524.0], [26.5, 524.0], [26.6, 524.0], [26.7, 527.0], [26.8, 527.0], [26.9, 527.0], [27.0, 527.0], [27.1, 527.0], [27.2, 527.0], [27.3, 528.0], [27.4, 528.0], [27.5, 531.0], [27.6, 531.0], [27.7, 531.0], [27.8, 532.0], [27.9, 532.0], [28.0, 532.0], [28.1, 534.0], [28.2, 536.0], [28.3, 536.0], [28.4, 536.0], [28.5, 537.0], [28.6, 538.0], [28.7, 538.0], [28.8, 539.0], [28.9, 539.0], [29.0, 539.0], [29.1, 539.0], [29.2, 540.0], [29.3, 540.0], [29.4, 541.0], [29.5, 541.0], [29.6, 542.0], [29.7, 542.0], [29.8, 542.0], [29.9, 542.0], [30.0, 543.0], [30.1, 544.0], [30.2, 544.0], [30.3, 545.0], [30.4, 545.0], [30.5, 545.0], [30.6, 545.0], [30.7, 545.0], [30.8, 546.0], [30.9, 548.0], [31.0, 548.0], [31.1, 550.0], [31.2, 550.0], [31.3, 553.0], [31.4, 553.0], [31.5, 554.0], [31.6, 554.0], [31.7, 554.0], [31.8, 555.0], [31.9, 556.0], [32.0, 557.0], [32.1, 557.0], [32.2, 559.0], [32.3, 560.0], [32.4, 561.0], [32.5, 561.0], [32.6, 561.0], [32.7, 563.0], [32.8, 563.0], [32.9, 563.0], [33.0, 564.0], [33.1, 566.0], [33.2, 570.0], [33.3, 570.0], [33.4, 571.0], [33.5, 572.0], [33.6, 572.0], [33.7, 572.0], [33.8, 573.0], [33.9, 574.0], [34.0, 574.0], [34.1, 575.0], [34.2, 576.0], [34.3, 578.0], [34.4, 578.0], [34.5, 578.0], [34.6, 581.0], [34.7, 585.0], [34.8, 585.0], [34.9, 585.0], [35.0, 586.0], [35.1, 586.0], [35.2, 588.0], [35.3, 588.0], [35.4, 589.0], [35.5, 589.0], [35.6, 592.0], [35.7, 593.0], [35.8, 593.0], [35.9, 593.0], [36.0, 595.0], [36.1, 598.0], [36.2, 599.0], [36.3, 599.0], [36.4, 601.0], [36.5, 602.0], [36.6, 603.0], [36.7, 603.0], [36.8, 606.0], [36.9, 606.0], [37.0, 606.0], [37.1, 607.0], [37.2, 608.0], [37.3, 610.0], [37.4, 610.0], [37.5, 610.0], [37.6, 611.0], [37.7, 612.0], [37.8, 612.0], [37.9, 614.0], [38.0, 614.0], [38.1, 615.0], [38.2, 615.0], [38.3, 616.0], [38.4, 617.0], [38.5, 617.0], [38.6, 619.0], [38.7, 620.0], [38.8, 621.0], [38.9, 621.0], [39.0, 621.0], [39.1, 621.0], [39.2, 622.0], [39.3, 622.0], [39.4, 622.0], [39.5, 627.0], [39.6, 629.0], [39.7, 629.0], [39.8, 631.0], [39.9, 635.0], [40.0, 635.0], [40.1, 635.0], [40.2, 638.0], [40.3, 638.0], [40.4, 638.0], [40.5, 639.0], [40.6, 639.0], [40.7, 640.0], [40.8, 640.0], [40.9, 640.0], [41.0, 640.0], [41.1, 641.0], [41.2, 641.0], [41.3, 641.0], [41.4, 644.0], [41.5, 647.0], [41.6, 647.0], [41.7, 647.0], [41.8, 649.0], [41.9, 649.0], [42.0, 649.0], [42.1, 652.0], [42.2, 653.0], [42.3, 653.0], [42.4, 653.0], [42.5, 653.0], [42.6, 654.0], [42.7, 654.0], [42.8, 656.0], [42.9, 657.0], [43.0, 657.0], [43.1, 657.0], [43.2, 658.0], [43.3, 659.0], [43.4, 659.0], [43.5, 661.0], [43.6, 662.0], [43.7, 663.0], [43.8, 663.0], [43.9, 664.0], [44.0, 664.0], [44.1, 665.0], [44.2, 665.0], [44.3, 666.0], [44.4, 667.0], [44.5, 668.0], [44.6, 668.0], [44.7, 670.0], [44.8, 671.0], [44.9, 673.0], [45.0, 673.0], [45.1, 673.0], [45.2, 674.0], [45.3, 674.0], [45.4, 677.0], [45.5, 679.0], [45.6, 679.0], [45.7, 679.0], [45.8, 679.0], [45.9, 679.0], [46.0, 679.0], [46.1, 679.0], [46.2, 682.0], [46.3, 682.0], [46.4, 683.0], [46.5, 683.0], [46.6, 683.0], [46.7, 687.0], [46.8, 687.0], [46.9, 690.0], [47.0, 690.0], [47.1, 691.0], [47.2, 691.0], [47.3, 697.0], [47.4, 703.0], [47.5, 704.0], [47.6, 704.0], [47.7, 704.0], [47.8, 705.0], [47.9, 706.0], [48.0, 706.0], [48.1, 707.0], [48.2, 708.0], [48.3, 714.0], [48.4, 714.0], [48.5, 714.0], [48.6, 715.0], [48.7, 715.0], [48.8, 719.0], [48.9, 719.0], [49.0, 719.0], [49.1, 719.0], [49.2, 720.0], [49.3, 720.0], [49.4, 722.0], [49.5, 722.0], [49.6, 723.0], [49.7, 725.0], [49.8, 726.0], [49.9, 726.0], [50.0, 726.0], [50.1, 728.0], [50.2, 728.0], [50.3, 728.0], [50.4, 730.0], [50.5, 733.0], [50.6, 733.0], [50.7, 735.0], [50.8, 735.0], [50.9, 736.0], [51.0, 736.0], [51.1, 736.0], [51.2, 737.0], [51.3, 738.0], [51.4, 738.0], [51.5, 739.0], [51.6, 749.0], [51.7, 749.0], [51.8, 749.0], [51.9, 750.0], [52.0, 750.0], [52.1, 750.0], [52.2, 750.0], [52.3, 752.0], [52.4, 752.0], [52.5, 752.0], [52.6, 753.0], [52.7, 754.0], [52.8, 755.0], [52.9, 755.0], [53.0, 756.0], [53.1, 756.0], [53.2, 757.0], [53.3, 757.0], [53.4, 759.0], [53.5, 762.0], [53.6, 762.0], [53.7, 762.0], [53.8, 762.0], [53.9, 763.0], [54.0, 763.0], [54.1, 763.0], [54.2, 763.0], [54.3, 764.0], [54.4, 764.0], [54.5, 768.0], [54.6, 768.0], [54.7, 769.0], [54.8, 769.0], [54.9, 771.0], [55.0, 775.0], [55.1, 775.0], [55.2, 780.0], [55.3, 782.0], [55.4, 784.0], [55.5, 784.0], [55.6, 785.0], [55.7, 786.0], [55.8, 791.0], [55.9, 791.0], [56.0, 792.0], [56.1, 792.0], [56.2, 793.0], [56.3, 793.0], [56.4, 794.0], [56.5, 796.0], [56.6, 798.0], [56.7, 798.0], [56.8, 799.0], [56.9, 801.0], [57.0, 801.0], [57.1, 802.0], [57.2, 802.0], [57.3, 803.0], [57.4, 803.0], [57.5, 804.0], [57.6, 806.0], [57.7, 806.0], [57.8, 806.0], [57.9, 807.0], [58.0, 808.0], [58.1, 808.0], [58.2, 808.0], [58.3, 811.0], [58.4, 811.0], [58.5, 811.0], [58.6, 815.0], [58.7, 820.0], [58.8, 822.0], [58.9, 822.0], [59.0, 823.0], [59.1, 824.0], [59.2, 825.0], [59.3, 825.0], [59.4, 831.0], [59.5, 833.0], [59.6, 834.0], [59.7, 834.0], [59.8, 834.0], [59.9, 836.0], [60.0, 837.0], [60.1, 837.0], [60.2, 838.0], [60.3, 838.0], [60.4, 838.0], [60.5, 840.0], [60.6, 841.0], [60.7, 843.0], [60.8, 843.0], [60.9, 845.0], [61.0, 850.0], [61.1, 850.0], [61.2, 850.0], [61.3, 853.0], [61.4, 855.0], [61.5, 855.0], [61.6, 855.0], [61.7, 855.0], [61.8, 857.0], [61.9, 857.0], [62.0, 858.0], [62.1, 858.0], [62.2, 859.0], [62.3, 859.0], [62.4, 861.0], [62.5, 861.0], [62.6, 865.0], [62.7, 865.0], [62.8, 868.0], [62.9, 868.0], [63.0, 869.0], [63.1, 869.0], [63.2, 869.0], [63.3, 869.0], [63.4, 869.0], [63.5, 870.0], [63.6, 871.0], [63.7, 871.0], [63.8, 871.0], [63.9, 874.0], [64.0, 875.0], [64.1, 875.0], [64.2, 875.0], [64.3, 875.0], [64.4, 875.0], [64.5, 876.0], [64.6, 876.0], [64.7, 880.0], [64.8, 885.0], [64.9, 885.0], [65.0, 885.0], [65.1, 889.0], [65.2, 890.0], [65.3, 890.0], [65.4, 892.0], [65.5, 895.0], [65.6, 898.0], [65.7, 898.0], [65.8, 903.0], [65.9, 903.0], [66.0, 906.0], [66.1, 906.0], [66.2, 907.0], [66.3, 907.0], [66.4, 908.0], [66.5, 908.0], [66.6, 912.0], [66.7, 913.0], [66.8, 913.0], [66.9, 915.0], [67.0, 917.0], [67.1, 917.0], [67.2, 917.0], [67.3, 918.0], [67.4, 919.0], [67.5, 923.0], [67.6, 923.0], [67.7, 923.0], [67.8, 925.0], [67.9, 928.0], [68.0, 928.0], [68.1, 929.0], [68.2, 931.0], [68.3, 931.0], [68.4, 931.0], [68.5, 932.0], [68.6, 932.0], [68.7, 932.0], [68.8, 937.0], [68.9, 940.0], [69.0, 940.0], [69.1, 940.0], [69.2, 941.0], [69.3, 943.0], [69.4, 947.0], [69.5, 947.0], [69.6, 948.0], [69.7, 952.0], [69.8, 958.0], [69.9, 958.0], [70.0, 960.0], [70.1, 961.0], [70.2, 961.0], [70.3, 962.0], [70.4, 962.0], [70.5, 962.0], [70.6, 962.0], [70.7, 963.0], [70.8, 963.0], [70.9, 963.0], [71.0, 963.0], [71.1, 966.0], [71.2, 966.0], [71.3, 971.0], [71.4, 971.0], [71.5, 972.0], [71.6, 973.0], [71.7, 973.0], [71.8, 975.0], [71.9, 977.0], [72.0, 981.0], [72.1, 981.0], [72.2, 983.0], [72.3, 984.0], [72.4, 986.0], [72.5, 986.0], [72.6, 989.0], [72.7, 990.0], [72.8, 991.0], [72.9, 991.0], [73.0, 991.0], [73.1, 994.0], [73.2, 995.0], [73.3, 995.0], [73.4, 996.0], [73.5, 996.0], [73.6, 996.0], [73.7, 997.0], [73.8, 998.0], [73.9, 1000.0], [74.0, 1000.0], [74.1, 1003.0], [74.2, 1011.0], [74.3, 1012.0], [74.4, 1012.0], [74.5, 1014.0], [74.6, 1014.0], [74.7, 1015.0], [74.8, 1015.0], [74.9, 1015.0], [75.0, 1021.0], [75.1, 1021.0], [75.2, 1024.0], [75.3, 1024.0], [75.4, 1024.0], [75.5, 1024.0], [75.6, 1025.0], [75.7, 1026.0], [75.8, 1028.0], [75.9, 1028.0], [76.0, 1031.0], [76.1, 1031.0], [76.2, 1037.0], [76.3, 1037.0], [76.4, 1042.0], [76.5, 1042.0], [76.6, 1044.0], [76.7, 1044.0], [76.8, 1044.0], [76.9, 1045.0], [77.0, 1045.0], [77.1, 1046.0], [77.2, 1046.0], [77.3, 1047.0], [77.4, 1047.0], [77.5, 1048.0], [77.6, 1055.0], [77.7, 1056.0], [77.8, 1056.0], [77.9, 1058.0], [78.0, 1060.0], [78.1, 1061.0], [78.2, 1061.0], [78.3, 1064.0], [78.4, 1069.0], [78.5, 1069.0], [78.6, 1069.0], [78.7, 1070.0], [78.8, 1070.0], [78.9, 1070.0], [79.0, 1073.0], [79.1, 1080.0], [79.2, 1080.0], [79.3, 1080.0], [79.4, 1080.0], [79.5, 1083.0], [79.6, 1085.0], [79.7, 1085.0], [79.8, 1086.0], [79.9, 1087.0], [80.0, 1088.0], [80.1, 1088.0], [80.2, 1090.0], [80.3, 1090.0], [80.4, 1090.0], [80.5, 1091.0], [80.6, 1093.0], [80.7, 1093.0], [80.8, 1093.0], [80.9, 1094.0], [81.0, 1094.0], [81.1, 1096.0], [81.2, 1096.0], [81.3, 1097.0], [81.4, 1099.0], [81.5, 1100.0], [81.6, 1100.0], [81.7, 1102.0], [81.8, 1104.0], [81.9, 1104.0], [82.0, 1105.0], [82.1, 1107.0], [82.2, 1113.0], [82.3, 1113.0], [82.4, 1118.0], [82.5, 1119.0], [82.6, 1120.0], [82.7, 1120.0], [82.8, 1124.0], [82.9, 1125.0], [83.0, 1125.0], [83.1, 1125.0], [83.2, 1130.0], [83.3, 1134.0], [83.4, 1134.0], [83.5, 1135.0], [83.6, 1137.0], [83.7, 1139.0], [83.8, 1139.0], [83.9, 1142.0], [84.0, 1143.0], [84.1, 1151.0], [84.2, 1151.0], [84.3, 1153.0], [84.4, 1159.0], [84.5, 1162.0], [84.6, 1162.0], [84.7, 1165.0], [84.8, 1168.0], [84.9, 1172.0], [85.0, 1172.0], [85.1, 1173.0], [85.2, 1177.0], [85.3, 1177.0], [85.4, 1179.0], [85.5, 1184.0], [85.6, 1185.0], [85.7, 1185.0], [85.8, 1189.0], [85.9, 1193.0], [86.0, 1194.0], [86.1, 1194.0], [86.2, 1198.0], [86.3, 1207.0], [86.4, 1210.0], [86.5, 1210.0], [86.6, 1212.0], [86.7, 1216.0], [86.8, 1216.0], [86.9, 1226.0], [87.0, 1229.0], [87.1, 1231.0], [87.2, 1231.0], [87.3, 1232.0], [87.4, 1234.0], [87.5, 1238.0], [87.6, 1238.0], [87.7, 1241.0], [87.8, 1246.0], [87.9, 1247.0], [88.0, 1247.0], [88.1, 1248.0], [88.2, 1251.0], [88.3, 1251.0], [88.4, 1251.0], [88.5, 1257.0], [88.6, 1258.0], [88.7, 1258.0], [88.8, 1264.0], [88.9, 1265.0], [89.0, 1266.0], [89.1, 1266.0], [89.2, 1268.0], [89.3, 1274.0], [89.4, 1278.0], [89.5, 1278.0], [89.6, 1284.0], [89.7, 1287.0], [89.8, 1291.0], [89.9, 1291.0], [90.0, 1295.0], [90.1, 1301.0], [90.2, 1301.0], [90.3, 1301.0], [90.4, 1301.0], [90.5, 1306.0], [90.6, 1306.0], [90.7, 1307.0], [90.8, 1310.0], [90.9, 1321.0], [91.0, 1321.0], [91.1, 1325.0], [91.2, 1329.0], [91.3, 1331.0], [91.4, 1331.0], [91.5, 1332.0], [91.6, 1333.0], [91.7, 1333.0], [91.8, 1341.0], [91.9, 1350.0], [92.0, 1353.0], [92.1, 1353.0], [92.2, 1356.0], [92.3, 1373.0], [92.4, 1379.0], [92.5, 1379.0], [92.6, 1388.0], [92.7, 1395.0], [92.8, 1416.0], [92.9, 1416.0], [93.0, 1420.0], [93.1, 1468.0], [93.2, 1479.0], [93.3, 1479.0], [93.4, 1488.0], [93.5, 1493.0], [93.6, 1493.0], [93.7, 1496.0], [93.8, 1505.0], [93.9, 1505.0], [94.0, 1505.0], [94.1, 1516.0], [94.2, 1519.0], [94.3, 1519.0], [94.4, 1519.0], [94.5, 1551.0], [94.6, 1561.0], [94.7, 1561.0], [94.8, 1561.0], [94.9, 1561.0], [95.0, 1562.0], [95.1, 1562.0], [95.2, 1564.0], [95.3, 1586.0], [95.4, 1608.0], [95.5, 1608.0], [95.6, 1612.0], [95.7, 1635.0], [95.8, 1671.0], [95.9, 1671.0], [96.0, 1694.0], [96.1, 1716.0], [96.2, 1720.0], [96.3, 1720.0], [96.4, 1727.0], [96.5, 1731.0], [96.6, 1848.0], [96.7, 1848.0], [96.8, 1861.0], [96.9, 1866.0], [97.0, 1866.0], [97.1, 1884.0], [97.2, 1901.0], [97.3, 1904.0], [97.4, 1904.0], [97.5, 1943.0], [97.6, 2015.0], [97.7, 2256.0], [97.8, 2256.0], [97.9, 2343.0], [98.0, 2347.0], [98.1, 2358.0], [98.2, 2358.0], [98.3, 2525.0], [98.4, 2650.0], [98.5, 2650.0], [98.6, 2748.0], [98.7, 2760.0], [98.8, 2814.0], [98.9, 2814.0], [99.0, 2831.0], [99.1, 2947.0], [99.2, 2966.0], [99.3, 2966.0], [99.4, 3043.0], [99.5, 3180.0], [99.6, 3201.0], [99.7, 3201.0], [99.8, 3298.0], [99.9, 3326.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 101.0, "series": [{"data": [[600.0, 81.0], [700.0, 70.0], [800.0, 65.0], [900.0, 60.0], [1000.0, 56.0], [1100.0, 35.0], [1200.0, 28.0], [1300.0, 20.0], [1400.0, 7.0], [1500.0, 12.0], [1600.0, 5.0], [100.0, 9.0], [1700.0, 4.0], [1800.0, 4.0], [1900.0, 3.0], [2000.0, 1.0], [2300.0, 3.0], [2200.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2700.0, 2.0], [2800.0, 2.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 1.0], [3200.0, 2.0], [200.0, 44.0], [3300.0, 1.0], [300.0, 55.0], [400.0, 58.0], [500.0, 101.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 46.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 523.0, "series": [{"data": [[0.0, 166.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 523.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 46.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.695945945945946, "minX": 1.60401582E12, "maxY": 10.0, "series": [{"data": [[1.60401582E12, 10.0], [1.60401588E12, 9.695945945945946]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401588E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 262.0, "minX": 1.0, "maxY": 2343.0, "series": [{"data": [[8.0, 620.0], [4.0, 539.0], [2.0, 1561.0], [1.0, 913.0], [9.0, 262.0], [10.0, 812.877410468319], [5.0, 614.0], [6.0, 522.0], [3.0, 2343.0], [7.0, 528.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 813.6748299319723]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1103.4833333333333, "minX": 1.60401582E12, "maxY": 1521606.6666666667, "series": [{"data": [[1.60401582E12, 1521606.6666666667], [1.60401588E12, 314147.9666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401582E12, 4419.55], [1.60401588E12, 1103.4833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401588E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 708.4324324324326, "minX": 1.60401582E12, "maxY": 840.2095400340717, "series": [{"data": [[1.60401582E12, 840.2095400340717], [1.60401588E12, 708.4324324324326]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401588E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 707.3175675675674, "minX": 1.60401582E12, "maxY": 838.9676320272573, "series": [{"data": [[1.60401582E12, 838.9676320272573], [1.60401588E12, 707.3175675675674]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401588E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006756756756756759, "minX": 1.60401582E12, "maxY": 0.15161839863713794, "series": [{"data": [[1.60401582E12, 0.15161839863713794], [1.60401588E12, 0.006756756756756759]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401588E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.60401582E12, "maxY": 3326.0, "series": [{"data": [[1.60401582E12, 3326.0], [1.60401588E12, 2650.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401582E12, 190.1679994392395], [1.60401588E12, 183.77399950265885]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401582E12, 192.2848002243042], [1.60401588E12, 185.65140019893647]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401582E12, 191.34399971961975], [1.60401588E12, 184.81699975132943]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401582E12, 181.0], [1.60401588E12, 179.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401582E12, 754.0], [1.60401588E12, 631.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401588E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 526.0, "minX": 3.0, "maxY": 1561.0, "series": [{"data": [[8.0, 1095.0], [9.0, 1091.5], [10.0, 855.5], [11.0, 907.0], [12.0, 836.5], [3.0, 1561.0], [13.0, 743.5], [14.0, 576.5], [15.0, 618.5], [16.0, 668.5], [17.0, 526.0], [18.0, 579.0], [19.0, 539.5], [21.0, 629.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 526.0, "minX": 3.0, "maxY": 1561.0, "series": [{"data": [[8.0, 1094.0], [9.0, 1090.0], [10.0, 853.5], [11.0, 905.0], [12.0, 835.5], [3.0, 1561.0], [13.0, 743.0], [14.0, 576.5], [15.0, 617.5], [16.0, 668.0], [17.0, 526.0], [18.0, 579.0], [19.0, 539.0], [21.0, 628.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.3, "minX": 1.60401582E12, "maxY": 9.95, "series": [{"data": [[1.60401582E12, 9.95], [1.60401588E12, 2.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401588E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.466666666666667, "minX": 1.60401582E12, "maxY": 9.783333333333333, "series": [{"data": [[1.60401582E12, 9.783333333333333], [1.60401588E12, 2.466666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401588E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.466666666666667, "minX": 1.60401582E12, "maxY": 9.783333333333333, "series": [{"data": [[1.60401582E12, 9.783333333333333], [1.60401588E12, 2.466666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401588E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.466666666666667, "minX": 1.60401582E12, "maxY": 9.783333333333333, "series": [{"data": [[1.60401582E12, 9.783333333333333], [1.60401588E12, 2.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401588E12, "title": "Total Transactions Per Second"}},
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

