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
        data: {"result": {"minY": 177.0, "minX": 0.0, "maxY": 3968.0, "series": [{"data": [[0.0, 177.0], [0.1, 177.0], [0.2, 184.0], [0.3, 186.0], [0.4, 186.0], [0.5, 187.0], [0.6, 187.0], [0.7, 189.0], [0.8, 189.0], [0.9, 192.0], [1.0, 198.0], [1.1, 198.0], [1.2, 198.0], [1.3, 198.0], [1.4, 201.0], [1.5, 203.0], [1.6, 203.0], [1.7, 203.0], [1.8, 204.0], [1.9, 204.0], [2.0, 204.0], [2.1, 205.0], [2.2, 212.0], [2.3, 212.0], [2.4, 214.0], [2.5, 214.0], [2.6, 215.0], [2.7, 215.0], [2.8, 219.0], [2.9, 224.0], [3.0, 236.0], [3.1, 236.0], [3.2, 238.0], [3.3, 245.0], [3.4, 245.0], [3.5, 248.0], [3.6, 248.0], [3.7, 248.0], [3.8, 248.0], [3.9, 250.0], [4.0, 251.0], [4.1, 254.0], [4.2, 254.0], [4.3, 255.0], [4.4, 256.0], [4.5, 257.0], [4.6, 257.0], [4.7, 261.0], [4.8, 266.0], [4.9, 267.0], [5.0, 267.0], [5.1, 269.0], [5.2, 270.0], [5.3, 270.0], [5.4, 272.0], [5.5, 273.0], [5.6, 273.0], [5.7, 273.0], [5.8, 274.0], [5.9, 276.0], [6.0, 276.0], [6.1, 276.0], [6.2, 277.0], [6.3, 279.0], [6.4, 280.0], [6.5, 280.0], [6.6, 280.0], [6.7, 282.0], [6.8, 282.0], [6.9, 283.0], [7.0, 283.0], [7.1, 285.0], [7.2, 285.0], [7.3, 287.0], [7.4, 287.0], [7.5, 289.0], [7.6, 289.0], [7.7, 289.0], [7.8, 290.0], [7.9, 291.0], [8.0, 291.0], [8.1, 291.0], [8.2, 294.0], [8.3, 295.0], [8.4, 295.0], [8.5, 295.0], [8.6, 296.0], [8.7, 296.0], [8.8, 296.0], [8.9, 296.0], [9.0, 298.0], [9.1, 298.0], [9.2, 298.0], [9.3, 298.0], [9.4, 300.0], [9.5, 300.0], [9.6, 302.0], [9.7, 305.0], [9.8, 305.0], [9.9, 305.0], [10.0, 310.0], [10.1, 311.0], [10.2, 311.0], [10.3, 320.0], [10.4, 320.0], [10.5, 325.0], [10.6, 325.0], [10.7, 325.0], [10.8, 325.0], [10.9, 326.0], [11.0, 326.0], [11.1, 327.0], [11.2, 328.0], [11.3, 328.0], [11.4, 328.0], [11.5, 334.0], [11.6, 336.0], [11.7, 336.0], [11.8, 336.0], [11.9, 337.0], [12.0, 338.0], [12.1, 338.0], [12.2, 339.0], [12.3, 339.0], [12.4, 339.0], [12.5, 339.0], [12.6, 339.0], [12.7, 348.0], [12.8, 349.0], [12.9, 349.0], [13.0, 350.0], [13.1, 352.0], [13.2, 354.0], [13.3, 354.0], [13.4, 357.0], [13.5, 357.0], [13.6, 357.0], [13.7, 358.0], [13.8, 359.0], [13.9, 360.0], [14.0, 360.0], [14.1, 365.0], [14.2, 366.0], [14.3, 366.0], [14.4, 366.0], [14.5, 367.0], [14.6, 367.0], [14.7, 368.0], [14.8, 368.0], [14.9, 371.0], [15.0, 371.0], [15.1, 371.0], [15.2, 372.0], [15.3, 373.0], [15.4, 374.0], [15.5, 374.0], [15.6, 376.0], [15.7, 379.0], [15.8, 381.0], [15.9, 381.0], [16.0, 381.0], [16.1, 382.0], [16.2, 385.0], [16.3, 385.0], [16.4, 386.0], [16.5, 388.0], [16.6, 391.0], [16.7, 391.0], [16.8, 394.0], [16.9, 394.0], [17.0, 394.0], [17.1, 395.0], [17.2, 396.0], [17.3, 397.0], [17.4, 397.0], [17.5, 398.0], [17.6, 399.0], [17.7, 399.0], [17.8, 399.0], [17.9, 400.0], [18.0, 400.0], [18.1, 402.0], [18.2, 402.0], [18.3, 404.0], [18.4, 404.0], [18.5, 404.0], [18.6, 404.0], [18.7, 405.0], [18.8, 407.0], [18.9, 407.0], [19.0, 409.0], [19.1, 409.0], [19.2, 411.0], [19.3, 411.0], [19.4, 412.0], [19.5, 416.0], [19.6, 418.0], [19.7, 418.0], [19.8, 421.0], [19.9, 422.0], [20.0, 422.0], [20.1, 422.0], [20.2, 423.0], [20.3, 425.0], [20.4, 425.0], [20.5, 426.0], [20.6, 428.0], [20.7, 433.0], [20.8, 433.0], [20.9, 435.0], [21.0, 435.0], [21.1, 438.0], [21.2, 438.0], [21.3, 442.0], [21.4, 442.0], [21.5, 443.0], [21.6, 443.0], [21.7, 447.0], [21.8, 448.0], [21.9, 448.0], [22.0, 448.0], [22.1, 449.0], [22.2, 450.0], [22.3, 450.0], [22.4, 450.0], [22.5, 453.0], [22.6, 460.0], [22.7, 460.0], [22.8, 461.0], [22.9, 461.0], [23.0, 463.0], [23.1, 463.0], [23.2, 464.0], [23.3, 465.0], [23.4, 465.0], [23.5, 468.0], [23.6, 470.0], [23.7, 473.0], [23.8, 473.0], [23.9, 478.0], [24.0, 478.0], [24.1, 478.0], [24.2, 478.0], [24.3, 482.0], [24.4, 484.0], [24.5, 485.0], [24.6, 485.0], [24.7, 486.0], [24.8, 487.0], [24.9, 489.0], [25.0, 489.0], [25.1, 490.0], [25.2, 491.0], [25.3, 491.0], [25.4, 492.0], [25.5, 493.0], [25.6, 495.0], [25.7, 495.0], [25.8, 496.0], [25.9, 498.0], [26.0, 499.0], [26.1, 499.0], [26.2, 500.0], [26.3, 501.0], [26.4, 506.0], [26.5, 506.0], [26.6, 506.0], [26.7, 506.0], [26.8, 506.0], [26.9, 510.0], [27.0, 511.0], [27.1, 513.0], [27.2, 513.0], [27.3, 514.0], [27.4, 516.0], [27.5, 517.0], [27.6, 517.0], [27.7, 520.0], [27.8, 520.0], [27.9, 521.0], [28.0, 521.0], [28.1, 521.0], [28.2, 522.0], [28.3, 524.0], [28.4, 524.0], [28.5, 524.0], [28.6, 526.0], [28.7, 526.0], [28.8, 528.0], [28.9, 528.0], [29.0, 529.0], [29.1, 529.0], [29.2, 530.0], [29.3, 530.0], [29.4, 530.0], [29.5, 530.0], [29.6, 531.0], [29.7, 532.0], [29.8, 533.0], [29.9, 533.0], [30.0, 533.0], [30.1, 533.0], [30.2, 533.0], [30.3, 534.0], [30.4, 536.0], [30.5, 538.0], [30.6, 538.0], [30.7, 538.0], [30.8, 539.0], [30.9, 539.0], [31.0, 539.0], [31.1, 541.0], [31.2, 542.0], [31.3, 543.0], [31.4, 543.0], [31.5, 544.0], [31.6, 544.0], [31.7, 544.0], [31.8, 544.0], [31.9, 544.0], [32.0, 545.0], [32.1, 545.0], [32.2, 548.0], [32.3, 549.0], [32.4, 550.0], [32.5, 550.0], [32.6, 550.0], [32.7, 550.0], [32.8, 550.0], [32.9, 550.0], [33.0, 552.0], [33.1, 553.0], [33.2, 554.0], [33.3, 554.0], [33.4, 555.0], [33.5, 555.0], [33.6, 555.0], [33.7, 556.0], [33.8, 557.0], [33.9, 558.0], [34.0, 558.0], [34.1, 559.0], [34.2, 560.0], [34.3, 560.0], [34.4, 560.0], [34.5, 561.0], [34.6, 566.0], [34.7, 567.0], [34.8, 567.0], [34.9, 568.0], [35.0, 569.0], [35.1, 569.0], [35.2, 569.0], [35.3, 571.0], [35.4, 573.0], [35.5, 573.0], [35.6, 577.0], [35.7, 584.0], [35.8, 584.0], [35.9, 584.0], [36.0, 585.0], [36.1, 585.0], [36.2, 585.0], [36.3, 585.0], [36.4, 586.0], [36.5, 587.0], [36.6, 588.0], [36.7, 588.0], [36.8, 592.0], [36.9, 593.0], [37.0, 593.0], [37.1, 593.0], [37.2, 594.0], [37.3, 595.0], [37.4, 595.0], [37.5, 595.0], [37.6, 598.0], [37.7, 598.0], [37.8, 598.0], [37.9, 600.0], [38.0, 600.0], [38.1, 600.0], [38.2, 600.0], [38.3, 601.0], [38.4, 602.0], [38.5, 602.0], [38.6, 603.0], [38.7, 603.0], [38.8, 604.0], [38.9, 604.0], [39.0, 604.0], [39.1, 604.0], [39.2, 605.0], [39.3, 605.0], [39.4, 607.0], [39.5, 607.0], [39.6, 609.0], [39.7, 609.0], [39.8, 609.0], [39.9, 609.0], [40.0, 609.0], [40.1, 609.0], [40.2, 616.0], [40.3, 616.0], [40.4, 616.0], [40.5, 617.0], [40.6, 617.0], [40.7, 620.0], [40.8, 620.0], [40.9, 620.0], [41.0, 621.0], [41.1, 625.0], [41.2, 625.0], [41.3, 626.0], [41.4, 629.0], [41.5, 635.0], [41.6, 635.0], [41.7, 637.0], [41.8, 639.0], [41.9, 639.0], [42.0, 645.0], [42.1, 645.0], [42.2, 646.0], [42.3, 646.0], [42.4, 647.0], [42.5, 649.0], [42.6, 649.0], [42.7, 649.0], [42.8, 650.0], [42.9, 651.0], [43.0, 651.0], [43.1, 651.0], [43.2, 652.0], [43.3, 656.0], [43.4, 656.0], [43.5, 658.0], [43.6, 660.0], [43.7, 660.0], [43.8, 660.0], [43.9, 661.0], [44.0, 664.0], [44.1, 666.0], [44.2, 666.0], [44.3, 667.0], [44.4, 667.0], [44.5, 668.0], [44.6, 668.0], [44.7, 669.0], [44.8, 671.0], [44.9, 672.0], [45.0, 672.0], [45.1, 672.0], [45.2, 677.0], [45.3, 677.0], [45.4, 679.0], [45.5, 680.0], [45.6, 685.0], [45.7, 685.0], [45.8, 686.0], [45.9, 687.0], [46.0, 688.0], [46.1, 688.0], [46.2, 688.0], [46.3, 691.0], [46.4, 693.0], [46.5, 693.0], [46.6, 693.0], [46.7, 695.0], [46.8, 695.0], [46.9, 699.0], [47.0, 701.0], [47.1, 703.0], [47.2, 703.0], [47.3, 706.0], [47.4, 710.0], [47.5, 711.0], [47.6, 711.0], [47.7, 713.0], [47.8, 714.0], [47.9, 714.0], [48.0, 714.0], [48.1, 715.0], [48.2, 717.0], [48.3, 718.0], [48.4, 718.0], [48.5, 720.0], [48.6, 722.0], [48.7, 722.0], [48.8, 722.0], [48.9, 725.0], [49.0, 726.0], [49.1, 726.0], [49.2, 726.0], [49.3, 726.0], [49.4, 730.0], [49.5, 730.0], [49.6, 730.0], [49.7, 731.0], [49.8, 735.0], [49.9, 735.0], [50.0, 736.0], [50.1, 737.0], [50.2, 737.0], [50.3, 738.0], [50.4, 744.0], [50.5, 745.0], [50.6, 745.0], [50.7, 745.0], [50.8, 747.0], [50.9, 750.0], [51.0, 750.0], [51.1, 755.0], [51.2, 757.0], [51.3, 758.0], [51.4, 758.0], [51.5, 761.0], [51.6, 761.0], [51.7, 761.0], [51.8, 762.0], [51.9, 763.0], [52.0, 765.0], [52.1, 765.0], [52.2, 766.0], [52.3, 767.0], [52.4, 771.0], [52.5, 771.0], [52.6, 777.0], [52.7, 781.0], [52.8, 781.0], [52.9, 781.0], [53.0, 781.0], [53.1, 784.0], [53.2, 787.0], [53.3, 787.0], [53.4, 792.0], [53.5, 795.0], [53.6, 795.0], [53.7, 796.0], [53.8, 800.0], [53.9, 802.0], [54.0, 802.0], [54.1, 802.0], [54.2, 807.0], [54.3, 807.0], [54.4, 807.0], [54.5, 808.0], [54.6, 809.0], [54.7, 812.0], [54.8, 812.0], [54.9, 815.0], [55.0, 819.0], [55.1, 819.0], [55.2, 823.0], [55.3, 823.0], [55.4, 823.0], [55.5, 823.0], [55.6, 823.0], [55.7, 827.0], [55.8, 827.0], [55.9, 827.0], [56.0, 828.0], [56.1, 830.0], [56.2, 832.0], [56.3, 832.0], [56.4, 834.0], [56.5, 836.0], [56.6, 837.0], [56.7, 837.0], [56.8, 842.0], [56.9, 845.0], [57.0, 845.0], [57.1, 852.0], [57.2, 852.0], [57.3, 860.0], [57.4, 860.0], [57.5, 861.0], [57.6, 862.0], [57.7, 863.0], [57.8, 863.0], [57.9, 864.0], [58.0, 865.0], [58.1, 865.0], [58.2, 865.0], [58.3, 868.0], [58.4, 870.0], [58.5, 870.0], [58.6, 870.0], [58.7, 871.0], [58.8, 872.0], [58.9, 872.0], [59.0, 873.0], [59.1, 875.0], [59.2, 876.0], [59.3, 876.0], [59.4, 877.0], [59.5, 879.0], [59.6, 881.0], [59.7, 881.0], [59.8, 885.0], [59.9, 888.0], [60.0, 890.0], [60.1, 890.0], [60.2, 890.0], [60.3, 892.0], [60.4, 892.0], [60.5, 893.0], [60.6, 894.0], [60.7, 898.0], [60.8, 898.0], [60.9, 902.0], [61.0, 903.0], [61.1, 909.0], [61.2, 909.0], [61.3, 909.0], [61.4, 910.0], [61.5, 910.0], [61.6, 910.0], [61.7, 914.0], [61.8, 915.0], [61.9, 915.0], [62.0, 918.0], [62.1, 919.0], [62.2, 921.0], [62.3, 921.0], [62.4, 921.0], [62.5, 924.0], [62.6, 925.0], [62.7, 925.0], [62.8, 926.0], [62.9, 932.0], [63.0, 933.0], [63.1, 933.0], [63.2, 936.0], [63.3, 936.0], [63.4, 936.0], [63.5, 937.0], [63.6, 938.0], [63.7, 939.0], [63.8, 939.0], [63.9, 940.0], [64.0, 944.0], [64.1, 945.0], [64.2, 945.0], [64.3, 946.0], [64.4, 946.0], [64.5, 948.0], [64.6, 948.0], [64.7, 948.0], [64.8, 952.0], [64.9, 953.0], [65.0, 953.0], [65.1, 954.0], [65.2, 954.0], [65.3, 954.0], [65.4, 958.0], [65.5, 959.0], [65.6, 962.0], [65.7, 962.0], [65.8, 962.0], [65.9, 963.0], [66.0, 963.0], [66.1, 963.0], [66.2, 964.0], [66.3, 964.0], [66.4, 966.0], [66.5, 966.0], [66.6, 966.0], [66.7, 966.0], [66.8, 966.0], [66.9, 967.0], [67.0, 967.0], [67.1, 968.0], [67.2, 968.0], [67.3, 971.0], [67.4, 972.0], [67.5, 972.0], [67.6, 972.0], [67.7, 975.0], [67.8, 976.0], [67.9, 978.0], [68.0, 978.0], [68.1, 978.0], [68.2, 979.0], [68.3, 979.0], [68.4, 979.0], [68.5, 979.0], [68.6, 979.0], [68.7, 979.0], [68.8, 981.0], [68.9, 981.0], [69.0, 981.0], [69.1, 981.0], [69.2, 986.0], [69.3, 986.0], [69.4, 990.0], [69.5, 990.0], [69.6, 991.0], [69.7, 992.0], [69.8, 995.0], [69.9, 995.0], [70.0, 997.0], [70.1, 999.0], [70.2, 999.0], [70.3, 1003.0], [70.4, 1003.0], [70.5, 1004.0], [70.6, 1004.0], [70.7, 1005.0], [70.8, 1005.0], [70.9, 1009.0], [71.0, 1009.0], [71.1, 1009.0], [71.2, 1011.0], [71.3, 1016.0], [71.4, 1016.0], [71.5, 1019.0], [71.6, 1019.0], [71.7, 1019.0], [71.8, 1022.0], [71.9, 1022.0], [72.0, 1024.0], [72.1, 1024.0], [72.2, 1025.0], [72.3, 1025.0], [72.4, 1026.0], [72.5, 1026.0], [72.6, 1026.0], [72.7, 1029.0], [72.8, 1032.0], [72.9, 1032.0], [73.0, 1033.0], [73.1, 1034.0], [73.2, 1036.0], [73.3, 1036.0], [73.4, 1037.0], [73.5, 1038.0], [73.6, 1038.0], [73.7, 1041.0], [73.8, 1042.0], [73.9, 1042.0], [74.0, 1042.0], [74.1, 1046.0], [74.2, 1048.0], [74.3, 1051.0], [74.4, 1051.0], [74.5, 1052.0], [74.6, 1053.0], [74.7, 1054.0], [74.8, 1054.0], [74.9, 1054.0], [75.0, 1058.0], [75.1, 1058.0], [75.2, 1058.0], [75.3, 1059.0], [75.4, 1061.0], [75.5, 1061.0], [75.6, 1061.0], [75.7, 1062.0], [75.8, 1063.0], [75.9, 1063.0], [76.0, 1071.0], [76.1, 1072.0], [76.2, 1072.0], [76.3, 1072.0], [76.4, 1073.0], [76.5, 1073.0], [76.6, 1078.0], [76.7, 1078.0], [76.8, 1080.0], [76.9, 1081.0], [77.0, 1081.0], [77.1, 1083.0], [77.2, 1089.0], [77.3, 1089.0], [77.4, 1089.0], [77.5, 1090.0], [77.6, 1091.0], [77.7, 1093.0], [77.8, 1093.0], [77.9, 1095.0], [78.0, 1096.0], [78.1, 1096.0], [78.2, 1096.0], [78.3, 1098.0], [78.4, 1101.0], [78.5, 1101.0], [78.6, 1102.0], [78.7, 1105.0], [78.8, 1108.0], [78.9, 1108.0], [79.0, 1114.0], [79.1, 1114.0], [79.2, 1117.0], [79.3, 1117.0], [79.4, 1119.0], [79.5, 1120.0], [79.6, 1123.0], [79.7, 1123.0], [79.8, 1129.0], [79.9, 1130.0], [80.0, 1130.0], [80.1, 1130.0], [80.2, 1133.0], [80.3, 1133.0], [80.4, 1133.0], [80.5, 1135.0], [80.6, 1137.0], [80.7, 1137.0], [80.8, 1137.0], [80.9, 1141.0], [81.0, 1142.0], [81.1, 1143.0], [81.2, 1143.0], [81.3, 1144.0], [81.4, 1144.0], [81.5, 1145.0], [81.6, 1145.0], [81.7, 1146.0], [81.8, 1151.0], [81.9, 1151.0], [82.0, 1152.0], [82.1, 1152.0], [82.2, 1153.0], [82.3, 1153.0], [82.4, 1154.0], [82.5, 1158.0], [82.6, 1159.0], [82.7, 1159.0], [82.8, 1160.0], [82.9, 1160.0], [83.0, 1161.0], [83.1, 1161.0], [83.2, 1162.0], [83.3, 1162.0], [83.4, 1162.0], [83.5, 1163.0], [83.6, 1165.0], [83.7, 1168.0], [83.8, 1168.0], [83.9, 1170.0], [84.0, 1178.0], [84.1, 1181.0], [84.2, 1181.0], [84.3, 1182.0], [84.4, 1182.0], [84.5, 1185.0], [84.6, 1185.0], [84.7, 1185.0], [84.8, 1187.0], [84.9, 1189.0], [85.0, 1189.0], [85.1, 1189.0], [85.2, 1191.0], [85.3, 1191.0], [85.4, 1195.0], [85.5, 1199.0], [85.6, 1202.0], [85.7, 1202.0], [85.8, 1208.0], [85.9, 1212.0], [86.0, 1215.0], [86.1, 1215.0], [86.2, 1215.0], [86.3, 1220.0], [86.4, 1225.0], [86.5, 1225.0], [86.6, 1234.0], [86.7, 1237.0], [86.8, 1237.0], [86.9, 1239.0], [87.0, 1243.0], [87.1, 1245.0], [87.2, 1245.0], [87.3, 1248.0], [87.4, 1255.0], [87.5, 1256.0], [87.6, 1256.0], [87.7, 1258.0], [87.8, 1258.0], [87.9, 1260.0], [88.0, 1260.0], [88.1, 1261.0], [88.2, 1261.0], [88.3, 1262.0], [88.4, 1262.0], [88.5, 1266.0], [88.6, 1267.0], [88.7, 1267.0], [88.8, 1268.0], [88.9, 1279.0], [89.0, 1281.0], [89.1, 1281.0], [89.2, 1286.0], [89.3, 1291.0], [89.4, 1294.0], [89.5, 1294.0], [89.6, 1295.0], [89.7, 1300.0], [89.8, 1302.0], [89.9, 1302.0], [90.0, 1306.0], [90.1, 1310.0], [90.2, 1310.0], [90.3, 1311.0], [90.4, 1317.0], [90.5, 1320.0], [90.6, 1320.0], [90.7, 1320.0], [90.8, 1338.0], [90.9, 1340.0], [91.0, 1340.0], [91.1, 1342.0], [91.2, 1342.0], [91.3, 1347.0], [91.4, 1347.0], [91.5, 1348.0], [91.6, 1349.0], [91.7, 1349.0], [91.8, 1355.0], [91.9, 1360.0], [92.0, 1365.0], [92.1, 1365.0], [92.2, 1367.0], [92.3, 1379.0], [92.4, 1379.0], [92.5, 1379.0], [92.6, 1402.0], [92.7, 1405.0], [92.8, 1405.0], [92.9, 1405.0], [93.0, 1406.0], [93.1, 1414.0], [93.2, 1417.0], [93.3, 1417.0], [93.4, 1420.0], [93.5, 1425.0], [93.6, 1425.0], [93.7, 1430.0], [93.8, 1431.0], [93.9, 1447.0], [94.0, 1447.0], [94.1, 1460.0], [94.2, 1488.0], [94.3, 1514.0], [94.4, 1514.0], [94.5, 1521.0], [94.6, 1526.0], [94.7, 1536.0], [94.8, 1536.0], [94.9, 1547.0], [95.0, 1550.0], [95.1, 1550.0], [95.2, 1586.0], [95.3, 1593.0], [95.4, 1613.0], [95.5, 1613.0], [95.6, 1616.0], [95.7, 1626.0], [95.8, 1632.0], [95.9, 1632.0], [96.0, 1700.0], [96.1, 1721.0], [96.2, 1734.0], [96.3, 1734.0], [96.4, 1754.0], [96.5, 1775.0], [96.6, 1816.0], [96.7, 1816.0], [96.8, 1821.0], [96.9, 1856.0], [97.0, 1856.0], [97.1, 2002.0], [97.2, 2006.0], [97.3, 2016.0], [97.4, 2016.0], [97.5, 2038.0], [97.6, 2040.0], [97.7, 2084.0], [97.8, 2084.0], [97.9, 2161.0], [98.0, 2190.0], [98.1, 2558.0], [98.2, 2558.0], [98.3, 2644.0], [98.4, 2662.0], [98.5, 2662.0], [98.6, 2683.0], [98.7, 2687.0], [98.8, 2899.0], [98.9, 2899.0], [99.0, 3040.0], [99.1, 3049.0], [99.2, 3115.0], [99.3, 3115.0], [99.4, 3125.0], [99.5, 3300.0], [99.6, 3320.0], [99.7, 3320.0], [99.8, 3349.0], [99.9, 3968.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 86.0, "series": [{"data": [[600.0, 67.0], [700.0, 50.0], [800.0, 52.0], [900.0, 69.0], [1000.0, 60.0], [1100.0, 53.0], [1200.0, 30.0], [1300.0, 21.0], [1400.0, 13.0], [1500.0, 8.0], [100.0, 10.0], [1600.0, 4.0], [1700.0, 5.0], [1800.0, 3.0], [2000.0, 6.0], [2100.0, 2.0], [2500.0, 1.0], [2600.0, 4.0], [2800.0, 1.0], [3000.0, 2.0], [3100.0, 2.0], [200.0, 59.0], [3300.0, 3.0], [3900.0, 1.0], [300.0, 62.0], [400.0, 61.0], [500.0, 86.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 42.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 500.0, "series": [{"data": [[0.0, 193.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 500.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 42.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.906521739130435, "minX": 1.6023723E12, "maxY": 10.0, "series": [{"data": [[1.6023723E12, 10.0], [1.60237236E12, 9.906521739130435]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237236E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 273.0, "minX": 1.0, "maxY": 1347.5, "series": [{"data": [[8.0, 656.0], [4.0, 620.0], [1.0, 1019.0], [9.0, 273.0], [10.0, 821.6060606060602], [6.0, 1347.5], [3.0, 1052.5], [7.0, 460.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.941496598639455, 822.1959183673466]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2080.15, "minX": 1.6023723E12, "maxY": 1077566.9, "series": [{"data": [[1.6023723E12, 758193.5166666667], [1.60237236E12, 1077566.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023723E12, 2080.15], [1.60237236E12, 3442.883333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237236E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 767.608695652174, "minX": 1.6023723E12, "maxY": 913.5054545454553, "series": [{"data": [[1.6023723E12, 913.5054545454553], [1.60237236E12, 767.608695652174]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237236E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 766.4978260869561, "minX": 1.6023723E12, "maxY": 912.1672727272725, "series": [{"data": [[1.6023723E12, 912.1672727272725], [1.60237236E12, 766.4978260869561]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237236E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006521739130434782, "minX": 1.6023723E12, "maxY": 0.35272727272727233, "series": [{"data": [[1.6023723E12, 0.35272727272727233], [1.60237236E12, 0.006521739130434782]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237236E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 177.0, "minX": 1.6023723E12, "maxY": 3968.0, "series": [{"data": [[1.6023723E12, 3968.0], [1.60237236E12, 3349.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023723E12, 187.0], [1.60237236E12, 198.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023723E12, 187.0], [1.60237236E12, 198.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023723E12, 187.0], [1.60237236E12, 198.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023723E12, 184.0], [1.60237236E12, 177.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023723E12, 828.0], [1.60237236E12, 700.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237236E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 478.0, "minX": 1.0, "maxY": 2662.0, "series": [{"data": [[8.0, 775.5], [9.0, 981.0], [10.0, 947.0], [11.0, 918.0], [12.0, 879.0], [3.0, 1019.0], [13.0, 758.0], [14.0, 755.5], [15.0, 587.0], [1.0, 2662.0], [16.0, 649.0], [17.0, 589.5], [18.0, 533.5], [19.0, 478.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 478.0, "minX": 1.0, "maxY": 2658.0, "series": [{"data": [[8.0, 774.0], [9.0, 980.0], [10.0, 945.0], [11.0, 918.0], [12.0, 878.0], [3.0, 1019.0], [13.0, 757.0], [14.0, 752.0], [15.0, 586.0], [1.0, 2658.0], [16.0, 648.5], [17.0, 588.0], [18.0, 533.5], [19.0, 478.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.75, "minX": 1.6023723E12, "maxY": 7.5, "series": [{"data": [[1.6023723E12, 4.75], [1.60237236E12, 7.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237236E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.583333333333333, "minX": 1.6023723E12, "maxY": 7.666666666666667, "series": [{"data": [[1.6023723E12, 4.583333333333333], [1.60237236E12, 7.666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237236E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.583333333333333, "minX": 1.6023723E12, "maxY": 7.666666666666667, "series": [{"data": [[1.6023723E12, 4.583333333333333], [1.60237236E12, 7.666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237236E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.583333333333333, "minX": 1.6023723E12, "maxY": 7.666666666666667, "series": [{"data": [[1.6023723E12, 4.583333333333333], [1.60237236E12, 7.666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237236E12, "title": "Total Transactions Per Second"}},
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

