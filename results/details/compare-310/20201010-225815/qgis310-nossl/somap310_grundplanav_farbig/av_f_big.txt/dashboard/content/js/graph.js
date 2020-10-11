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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 3604.0, "series": [{"data": [[0.0, 184.0], [0.1, 184.0], [0.2, 189.0], [0.3, 192.0], [0.4, 192.0], [0.5, 198.0], [0.6, 199.0], [0.7, 200.0], [0.8, 200.0], [0.9, 202.0], [1.0, 203.0], [1.1, 203.0], [1.2, 203.0], [1.3, 204.0], [1.4, 204.0], [1.5, 206.0], [1.6, 206.0], [1.7, 209.0], [1.8, 210.0], [1.9, 210.0], [2.0, 214.0], [2.1, 214.0], [2.2, 216.0], [2.3, 216.0], [2.4, 218.0], [2.5, 224.0], [2.6, 225.0], [2.7, 225.0], [2.8, 227.0], [2.9, 231.0], [3.0, 232.0], [3.1, 232.0], [3.2, 233.0], [3.3, 236.0], [3.4, 236.0], [3.5, 237.0], [3.6, 239.0], [3.7, 248.0], [3.8, 248.0], [3.9, 248.0], [4.0, 252.0], [4.1, 253.0], [4.2, 253.0], [4.3, 259.0], [4.4, 263.0], [4.5, 267.0], [4.6, 267.0], [4.7, 267.0], [4.8, 267.0], [4.9, 269.0], [5.0, 269.0], [5.1, 269.0], [5.2, 270.0], [5.3, 270.0], [5.4, 275.0], [5.5, 277.0], [5.6, 279.0], [5.7, 279.0], [5.8, 279.0], [5.9, 280.0], [6.0, 280.0], [6.1, 280.0], [6.2, 282.0], [6.3, 285.0], [6.4, 286.0], [6.5, 286.0], [6.6, 288.0], [6.7, 290.0], [6.8, 290.0], [6.9, 291.0], [7.0, 291.0], [7.1, 292.0], [7.2, 292.0], [7.3, 294.0], [7.4, 296.0], [7.5, 299.0], [7.6, 299.0], [7.7, 304.0], [7.8, 308.0], [7.9, 309.0], [8.0, 309.0], [8.1, 310.0], [8.2, 312.0], [8.3, 314.0], [8.4, 314.0], [8.5, 316.0], [8.6, 324.0], [8.7, 324.0], [8.8, 325.0], [8.9, 327.0], [9.0, 329.0], [9.1, 329.0], [9.2, 331.0], [9.3, 337.0], [9.4, 340.0], [9.5, 340.0], [9.6, 340.0], [9.7, 342.0], [9.8, 343.0], [9.9, 343.0], [10.0, 346.0], [10.1, 346.0], [10.2, 346.0], [10.3, 346.0], [10.4, 350.0], [10.5, 351.0], [10.6, 351.0], [10.7, 351.0], [10.8, 354.0], [10.9, 356.0], [11.0, 356.0], [11.1, 358.0], [11.2, 370.0], [11.3, 375.0], [11.4, 375.0], [11.5, 378.0], [11.6, 381.0], [11.7, 381.0], [11.8, 385.0], [11.9, 386.0], [12.0, 388.0], [12.1, 388.0], [12.2, 392.0], [12.3, 394.0], [12.4, 395.0], [12.5, 395.0], [12.6, 396.0], [12.7, 396.0], [12.8, 397.0], [12.9, 397.0], [13.0, 398.0], [13.1, 400.0], [13.2, 405.0], [13.3, 405.0], [13.4, 405.0], [13.5, 409.0], [13.6, 409.0], [13.7, 411.0], [13.8, 414.0], [13.9, 419.0], [14.0, 419.0], [14.1, 421.0], [14.2, 422.0], [14.3, 422.0], [14.4, 422.0], [14.5, 424.0], [14.6, 424.0], [14.7, 427.0], [14.8, 427.0], [14.9, 429.0], [15.0, 436.0], [15.1, 436.0], [15.2, 436.0], [15.3, 436.0], [15.4, 439.0], [15.5, 439.0], [15.6, 440.0], [15.7, 442.0], [15.8, 442.0], [15.9, 442.0], [16.0, 442.0], [16.1, 443.0], [16.2, 445.0], [16.3, 445.0], [16.4, 445.0], [16.5, 447.0], [16.6, 447.0], [16.7, 447.0], [16.8, 449.0], [16.9, 450.0], [17.0, 450.0], [17.1, 452.0], [17.2, 455.0], [17.3, 455.0], [17.4, 455.0], [17.5, 455.0], [17.6, 455.0], [17.7, 456.0], [17.8, 456.0], [17.9, 464.0], [18.0, 466.0], [18.1, 467.0], [18.2, 467.0], [18.3, 469.0], [18.4, 469.0], [18.5, 469.0], [18.6, 471.0], [18.7, 472.0], [18.8, 475.0], [18.9, 475.0], [19.0, 477.0], [19.1, 477.0], [19.2, 479.0], [19.3, 479.0], [19.4, 482.0], [19.5, 482.0], [19.6, 483.0], [19.7, 483.0], [19.8, 484.0], [19.9, 486.0], [20.0, 488.0], [20.1, 488.0], [20.2, 491.0], [20.3, 498.0], [20.4, 498.0], [20.5, 501.0], [20.6, 503.0], [20.7, 508.0], [20.8, 508.0], [20.9, 508.0], [21.0, 510.0], [21.1, 510.0], [21.2, 510.0], [21.3, 510.0], [21.4, 511.0], [21.5, 517.0], [21.6, 517.0], [21.7, 517.0], [21.8, 521.0], [21.9, 521.0], [22.0, 523.0], [22.1, 523.0], [22.2, 525.0], [22.3, 525.0], [22.4, 526.0], [22.5, 526.0], [22.6, 526.0], [22.7, 526.0], [22.8, 530.0], [22.9, 531.0], [23.0, 532.0], [23.1, 532.0], [23.2, 532.0], [23.3, 533.0], [23.4, 533.0], [23.5, 534.0], [23.6, 534.0], [23.7, 534.0], [23.8, 534.0], [23.9, 536.0], [24.0, 536.0], [24.1, 538.0], [24.2, 538.0], [24.3, 538.0], [24.4, 540.0], [24.5, 544.0], [24.6, 544.0], [24.7, 547.0], [24.8, 547.0], [24.9, 547.0], [25.0, 547.0], [25.1, 548.0], [25.2, 549.0], [25.3, 549.0], [25.4, 550.0], [25.5, 553.0], [25.6, 553.0], [25.7, 553.0], [25.8, 554.0], [25.9, 554.0], [26.0, 556.0], [26.1, 556.0], [26.2, 557.0], [26.3, 557.0], [26.4, 558.0], [26.5, 558.0], [26.6, 559.0], [26.7, 562.0], [26.8, 562.0], [26.9, 563.0], [27.0, 564.0], [27.1, 567.0], [27.2, 567.0], [27.3, 567.0], [27.4, 567.0], [27.5, 568.0], [27.6, 568.0], [27.7, 568.0], [27.8, 569.0], [27.9, 569.0], [28.0, 569.0], [28.1, 569.0], [28.2, 570.0], [28.3, 571.0], [28.4, 571.0], [28.5, 571.0], [28.6, 573.0], [28.7, 573.0], [28.8, 576.0], [28.9, 576.0], [29.0, 578.0], [29.1, 578.0], [29.2, 579.0], [29.3, 581.0], [29.4, 581.0], [29.5, 581.0], [29.6, 583.0], [29.7, 584.0], [29.8, 584.0], [29.9, 584.0], [30.0, 585.0], [30.1, 585.0], [30.2, 585.0], [30.3, 586.0], [30.4, 588.0], [30.5, 589.0], [30.6, 589.0], [30.7, 590.0], [30.8, 591.0], [30.9, 593.0], [31.0, 593.0], [31.1, 593.0], [31.2, 593.0], [31.3, 593.0], [31.4, 593.0], [31.5, 595.0], [31.6, 598.0], [31.7, 598.0], [31.8, 601.0], [31.9, 601.0], [32.0, 602.0], [32.1, 602.0], [32.2, 603.0], [32.3, 603.0], [32.4, 603.0], [32.5, 603.0], [32.6, 603.0], [32.7, 603.0], [32.8, 604.0], [32.9, 604.0], [33.0, 605.0], [33.1, 606.0], [33.2, 607.0], [33.3, 607.0], [33.4, 609.0], [33.5, 614.0], [33.6, 614.0], [33.7, 614.0], [33.8, 615.0], [33.9, 617.0], [34.0, 617.0], [34.1, 618.0], [34.2, 618.0], [34.3, 619.0], [34.4, 619.0], [34.5, 620.0], [34.6, 620.0], [34.7, 622.0], [34.8, 622.0], [34.9, 623.0], [35.0, 626.0], [35.1, 626.0], [35.2, 626.0], [35.3, 630.0], [35.4, 633.0], [35.5, 633.0], [35.6, 633.0], [35.7, 635.0], [35.8, 637.0], [35.9, 637.0], [36.0, 637.0], [36.1, 638.0], [36.2, 639.0], [36.3, 639.0], [36.4, 640.0], [36.5, 641.0], [36.6, 643.0], [36.7, 643.0], [36.8, 643.0], [36.9, 644.0], [37.0, 644.0], [37.1, 646.0], [37.2, 648.0], [37.3, 649.0], [37.4, 649.0], [37.5, 651.0], [37.6, 653.0], [37.7, 654.0], [37.8, 654.0], [37.9, 655.0], [38.0, 656.0], [38.1, 658.0], [38.2, 658.0], [38.3, 658.0], [38.4, 661.0], [38.5, 661.0], [38.6, 661.0], [38.7, 662.0], [38.8, 665.0], [38.9, 665.0], [39.0, 665.0], [39.1, 668.0], [39.2, 668.0], [39.3, 668.0], [39.4, 670.0], [39.5, 671.0], [39.6, 671.0], [39.7, 671.0], [39.8, 671.0], [39.9, 673.0], [40.0, 677.0], [40.1, 677.0], [40.2, 677.0], [40.3, 678.0], [40.4, 678.0], [40.5, 679.0], [40.6, 680.0], [40.7, 680.0], [40.8, 680.0], [40.9, 681.0], [41.0, 682.0], [41.1, 684.0], [41.2, 684.0], [41.3, 685.0], [41.4, 688.0], [41.5, 688.0], [41.6, 688.0], [41.7, 692.0], [41.8, 693.0], [41.9, 693.0], [42.0, 695.0], [42.1, 695.0], [42.2, 695.0], [42.3, 695.0], [42.4, 697.0], [42.5, 698.0], [42.6, 699.0], [42.7, 699.0], [42.8, 700.0], [42.9, 701.0], [43.0, 701.0], [43.1, 701.0], [43.2, 703.0], [43.3, 704.0], [43.4, 704.0], [43.5, 704.0], [43.6, 704.0], [43.7, 704.0], [43.8, 704.0], [43.9, 704.0], [44.0, 705.0], [44.1, 709.0], [44.2, 709.0], [44.3, 711.0], [44.4, 712.0], [44.5, 713.0], [44.6, 713.0], [44.7, 715.0], [44.8, 716.0], [44.9, 718.0], [45.0, 718.0], [45.1, 725.0], [45.2, 727.0], [45.3, 727.0], [45.4, 733.0], [45.5, 735.0], [45.6, 736.0], [45.7, 736.0], [45.8, 738.0], [45.9, 739.0], [46.0, 744.0], [46.1, 744.0], [46.2, 745.0], [46.3, 749.0], [46.4, 751.0], [46.5, 751.0], [46.6, 757.0], [46.7, 758.0], [46.8, 758.0], [46.9, 759.0], [47.0, 759.0], [47.1, 760.0], [47.2, 760.0], [47.3, 761.0], [47.4, 761.0], [47.5, 763.0], [47.6, 763.0], [47.7, 767.0], [47.8, 768.0], [47.9, 769.0], [48.0, 769.0], [48.1, 771.0], [48.2, 771.0], [48.3, 772.0], [48.4, 772.0], [48.5, 775.0], [48.6, 776.0], [48.7, 776.0], [48.8, 778.0], [48.9, 778.0], [49.0, 779.0], [49.1, 779.0], [49.2, 780.0], [49.3, 782.0], [49.4, 786.0], [49.5, 786.0], [49.6, 786.0], [49.7, 791.0], [49.8, 791.0], [49.9, 791.0], [50.0, 794.0], [50.1, 795.0], [50.2, 795.0], [50.3, 795.0], [50.4, 796.0], [50.5, 798.0], [50.6, 798.0], [50.7, 799.0], [50.8, 799.0], [50.9, 801.0], [51.0, 801.0], [51.1, 802.0], [51.2, 803.0], [51.3, 804.0], [51.4, 804.0], [51.5, 805.0], [51.6, 805.0], [51.7, 805.0], [51.8, 809.0], [51.9, 809.0], [52.0, 810.0], [52.1, 810.0], [52.2, 811.0], [52.3, 817.0], [52.4, 817.0], [52.5, 817.0], [52.6, 817.0], [52.7, 818.0], [52.8, 820.0], [52.9, 820.0], [53.0, 822.0], [53.1, 823.0], [53.2, 824.0], [53.3, 824.0], [53.4, 825.0], [53.5, 826.0], [53.6, 826.0], [53.7, 826.0], [53.8, 827.0], [53.9, 828.0], [54.0, 828.0], [54.1, 830.0], [54.2, 837.0], [54.3, 840.0], [54.4, 840.0], [54.5, 840.0], [54.6, 840.0], [54.7, 841.0], [54.8, 841.0], [54.9, 843.0], [55.0, 843.0], [55.1, 843.0], [55.2, 845.0], [55.3, 849.0], [55.4, 850.0], [55.5, 850.0], [55.6, 851.0], [55.7, 851.0], [55.8, 851.0], [55.9, 851.0], [56.0, 852.0], [56.1, 858.0], [56.2, 860.0], [56.3, 860.0], [56.4, 861.0], [56.5, 862.0], [56.6, 865.0], [56.7, 865.0], [56.8, 866.0], [56.9, 867.0], [57.0, 867.0], [57.1, 868.0], [57.2, 871.0], [57.3, 871.0], [57.4, 871.0], [57.5, 872.0], [57.6, 875.0], [57.7, 877.0], [57.8, 877.0], [57.9, 882.0], [58.0, 882.0], [58.1, 882.0], [58.2, 882.0], [58.3, 889.0], [58.4, 889.0], [58.5, 889.0], [58.6, 894.0], [58.7, 897.0], [58.8, 898.0], [58.9, 898.0], [59.0, 900.0], [59.1, 900.0], [59.2, 900.0], [59.3, 900.0], [59.4, 901.0], [59.5, 904.0], [59.6, 904.0], [59.7, 904.0], [59.8, 905.0], [59.9, 907.0], [60.0, 908.0], [60.1, 908.0], [60.2, 909.0], [60.3, 910.0], [60.4, 910.0], [60.5, 910.0], [60.6, 911.0], [60.7, 912.0], [60.8, 912.0], [60.9, 912.0], [61.0, 912.0], [61.1, 917.0], [61.2, 917.0], [61.3, 918.0], [61.4, 918.0], [61.5, 919.0], [61.6, 919.0], [61.7, 919.0], [61.8, 922.0], [61.9, 922.0], [62.0, 924.0], [62.1, 926.0], [62.2, 933.0], [62.3, 933.0], [62.4, 934.0], [62.5, 935.0], [62.6, 936.0], [62.7, 936.0], [62.8, 936.0], [62.9, 936.0], [63.0, 940.0], [63.1, 940.0], [63.2, 941.0], [63.3, 941.0], [63.4, 941.0], [63.5, 941.0], [63.6, 943.0], [63.7, 946.0], [63.8, 946.0], [63.9, 948.0], [64.0, 949.0], [64.1, 951.0], [64.2, 951.0], [64.3, 952.0], [64.4, 953.0], [64.5, 953.0], [64.6, 953.0], [64.7, 953.0], [64.8, 953.0], [64.9, 953.0], [65.0, 953.0], [65.1, 954.0], [65.2, 954.0], [65.3, 954.0], [65.4, 955.0], [65.5, 957.0], [65.6, 958.0], [65.7, 958.0], [65.8, 960.0], [65.9, 960.0], [66.0, 961.0], [66.1, 961.0], [66.2, 961.0], [66.3, 963.0], [66.4, 966.0], [66.5, 966.0], [66.6, 968.0], [66.7, 969.0], [66.8, 969.0], [66.9, 970.0], [67.0, 971.0], [67.1, 971.0], [67.2, 971.0], [67.3, 971.0], [67.4, 972.0], [67.5, 973.0], [67.6, 973.0], [67.7, 973.0], [67.8, 974.0], [67.9, 976.0], [68.0, 976.0], [68.1, 979.0], [68.2, 980.0], [68.3, 981.0], [68.4, 981.0], [68.5, 982.0], [68.6, 983.0], [68.7, 983.0], [68.8, 983.0], [68.9, 984.0], [69.0, 984.0], [69.1, 984.0], [69.2, 985.0], [69.3, 986.0], [69.4, 986.0], [69.5, 986.0], [69.6, 987.0], [69.7, 987.0], [69.8, 990.0], [69.9, 990.0], [70.0, 990.0], [70.1, 991.0], [70.2, 991.0], [70.3, 1000.0], [70.4, 1004.0], [70.5, 1005.0], [70.6, 1005.0], [70.7, 1007.0], [70.8, 1007.0], [70.9, 1009.0], [71.0, 1009.0], [71.1, 1010.0], [71.2, 1012.0], [71.3, 1015.0], [71.4, 1015.0], [71.5, 1015.0], [71.6, 1016.0], [71.7, 1016.0], [71.8, 1018.0], [71.9, 1023.0], [72.0, 1024.0], [72.1, 1024.0], [72.2, 1024.0], [72.3, 1025.0], [72.4, 1026.0], [72.5, 1026.0], [72.6, 1026.0], [72.7, 1026.0], [72.8, 1032.0], [72.9, 1032.0], [73.0, 1032.0], [73.1, 1033.0], [73.2, 1039.0], [73.3, 1039.0], [73.4, 1044.0], [73.5, 1044.0], [73.6, 1044.0], [73.7, 1046.0], [73.8, 1047.0], [73.9, 1048.0], [74.0, 1048.0], [74.1, 1051.0], [74.2, 1051.0], [74.3, 1052.0], [74.4, 1052.0], [74.5, 1053.0], [74.6, 1053.0], [74.7, 1055.0], [74.8, 1055.0], [74.9, 1056.0], [75.0, 1057.0], [75.1, 1057.0], [75.2, 1057.0], [75.3, 1058.0], [75.4, 1059.0], [75.5, 1059.0], [75.6, 1061.0], [75.7, 1062.0], [75.8, 1062.0], [75.9, 1062.0], [76.0, 1063.0], [76.1, 1068.0], [76.2, 1068.0], [76.3, 1068.0], [76.4, 1070.0], [76.5, 1071.0], [76.6, 1072.0], [76.7, 1072.0], [76.8, 1077.0], [76.9, 1078.0], [77.0, 1078.0], [77.1, 1078.0], [77.2, 1080.0], [77.3, 1081.0], [77.4, 1081.0], [77.5, 1082.0], [77.6, 1083.0], [77.7, 1087.0], [77.8, 1087.0], [77.9, 1087.0], [78.0, 1088.0], [78.1, 1090.0], [78.2, 1090.0], [78.3, 1090.0], [78.4, 1091.0], [78.5, 1091.0], [78.6, 1093.0], [78.7, 1095.0], [78.8, 1097.0], [78.9, 1097.0], [79.0, 1098.0], [79.1, 1099.0], [79.2, 1099.0], [79.3, 1099.0], [79.4, 1101.0], [79.5, 1104.0], [79.6, 1105.0], [79.7, 1105.0], [79.8, 1108.0], [79.9, 1110.0], [80.0, 1112.0], [80.1, 1112.0], [80.2, 1112.0], [80.3, 1112.0], [80.4, 1112.0], [80.5, 1113.0], [80.6, 1114.0], [80.7, 1115.0], [80.8, 1115.0], [80.9, 1115.0], [81.0, 1118.0], [81.1, 1121.0], [81.2, 1121.0], [81.3, 1121.0], [81.4, 1123.0], [81.5, 1125.0], [81.6, 1125.0], [81.7, 1126.0], [81.8, 1132.0], [81.9, 1132.0], [82.0, 1134.0], [82.1, 1134.0], [82.2, 1135.0], [82.3, 1135.0], [82.4, 1136.0], [82.5, 1139.0], [82.6, 1140.0], [82.7, 1140.0], [82.8, 1141.0], [82.9, 1142.0], [83.0, 1143.0], [83.1, 1143.0], [83.2, 1144.0], [83.3, 1144.0], [83.4, 1144.0], [83.5, 1146.0], [83.6, 1146.0], [83.7, 1147.0], [83.8, 1147.0], [83.9, 1150.0], [84.0, 1150.0], [84.1, 1156.0], [84.2, 1156.0], [84.3, 1157.0], [84.4, 1157.0], [84.5, 1159.0], [84.6, 1159.0], [84.7, 1161.0], [84.8, 1163.0], [84.9, 1169.0], [85.0, 1169.0], [85.1, 1178.0], [85.2, 1180.0], [85.3, 1180.0], [85.4, 1180.0], [85.5, 1182.0], [85.6, 1183.0], [85.7, 1183.0], [85.8, 1183.0], [85.9, 1184.0], [86.0, 1185.0], [86.1, 1185.0], [86.2, 1188.0], [86.3, 1191.0], [86.4, 1192.0], [86.5, 1192.0], [86.6, 1193.0], [86.7, 1202.0], [86.8, 1202.0], [86.9, 1202.0], [87.0, 1207.0], [87.1, 1209.0], [87.2, 1209.0], [87.3, 1210.0], [87.4, 1213.0], [87.5, 1214.0], [87.6, 1214.0], [87.7, 1215.0], [87.8, 1220.0], [87.9, 1221.0], [88.0, 1221.0], [88.1, 1225.0], [88.2, 1225.0], [88.3, 1226.0], [88.4, 1226.0], [88.5, 1232.0], [88.6, 1233.0], [88.7, 1233.0], [88.8, 1235.0], [88.9, 1235.0], [89.0, 1236.0], [89.1, 1236.0], [89.2, 1241.0], [89.3, 1245.0], [89.4, 1251.0], [89.5, 1251.0], [89.6, 1254.0], [89.7, 1262.0], [89.8, 1263.0], [89.9, 1263.0], [90.0, 1265.0], [90.1, 1270.0], [90.2, 1270.0], [90.3, 1277.0], [90.4, 1283.0], [90.5, 1284.0], [90.6, 1284.0], [90.7, 1284.0], [90.8, 1293.0], [90.9, 1293.0], [91.0, 1293.0], [91.1, 1295.0], [91.2, 1299.0], [91.3, 1302.0], [91.4, 1302.0], [91.5, 1306.0], [91.6, 1310.0], [91.7, 1310.0], [91.8, 1310.0], [91.9, 1319.0], [92.0, 1321.0], [92.1, 1321.0], [92.2, 1333.0], [92.3, 1339.0], [92.4, 1346.0], [92.5, 1346.0], [92.6, 1349.0], [92.7, 1363.0], [92.8, 1366.0], [92.9, 1366.0], [93.0, 1372.0], [93.1, 1382.0], [93.2, 1393.0], [93.3, 1393.0], [93.4, 1398.0], [93.5, 1414.0], [93.6, 1414.0], [93.7, 1415.0], [93.8, 1424.0], [93.9, 1427.0], [94.0, 1427.0], [94.1, 1451.0], [94.2, 1459.0], [94.3, 1463.0], [94.4, 1463.0], [94.5, 1483.0], [94.6, 1494.0], [94.7, 1526.0], [94.8, 1526.0], [94.9, 1527.0], [95.0, 1547.0], [95.1, 1547.0], [95.2, 1558.0], [95.3, 1579.0], [95.4, 1604.0], [95.5, 1604.0], [95.6, 1609.0], [95.7, 1613.0], [95.8, 1650.0], [95.9, 1650.0], [96.0, 1658.0], [96.1, 1730.0], [96.2, 1751.0], [96.3, 1751.0], [96.4, 1753.0], [96.5, 1762.0], [96.6, 1810.0], [96.7, 1810.0], [96.8, 1817.0], [96.9, 1835.0], [97.0, 1835.0], [97.1, 1837.0], [97.2, 1875.0], [97.3, 1900.0], [97.4, 1900.0], [97.5, 1941.0], [97.6, 2056.0], [97.7, 2150.0], [97.8, 2150.0], [97.9, 2161.0], [98.0, 2303.0], [98.1, 2343.0], [98.2, 2343.0], [98.3, 2432.0], [98.4, 2455.0], [98.5, 2455.0], [98.6, 2651.0], [98.7, 2689.0], [98.8, 2723.0], [98.9, 2723.0], [99.0, 2766.0], [99.1, 2833.0], [99.2, 2937.0], [99.3, 2937.0], [99.4, 2996.0], [99.5, 3300.0], [99.6, 3319.0], [99.7, 3319.0], [99.8, 3334.0], [99.9, 3604.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 83.0, "series": [{"data": [[600.0, 81.0], [700.0, 60.0], [800.0, 59.0], [900.0, 83.0], [1000.0, 67.0], [1100.0, 54.0], [1200.0, 34.0], [1300.0, 16.0], [1400.0, 9.0], [1500.0, 5.0], [100.0, 5.0], [1600.0, 5.0], [1700.0, 4.0], [1800.0, 5.0], [1900.0, 2.0], [2000.0, 1.0], [2100.0, 2.0], [2300.0, 2.0], [2400.0, 2.0], [2600.0, 2.0], [2700.0, 2.0], [2800.0, 1.0], [2900.0, 2.0], [200.0, 51.0], [3300.0, 3.0], [3600.0, 1.0], [300.0, 40.0], [400.0, 54.0], [500.0, 83.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 39.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 546.0, "series": [{"data": [[0.0, 150.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 546.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 39.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.929133858267717, "minX": 1.60237446E12, "maxY": 10.0, "series": [{"data": [[1.60237452E12, 9.929133858267717], [1.60237446E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237452E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 259.0, "minX": 1.0, "maxY": 1007.0, "series": [{"data": [[8.0, 346.0], [4.0, 553.0], [2.0, 919.0], [1.0, 973.0], [9.0, 259.0], [10.0, 843.6157024793389], [5.0, 564.0], [6.0, 569.0], [3.0, 1007.0], [7.0, 534.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 841.073469387755]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 756.9666666666667, "minX": 1.60237446E12, "maxY": 1449435.9833333334, "series": [{"data": [[1.60237452E12, 1449435.9833333334], [1.60237446E12, 386337.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237452E12, 4766.066666666667], [1.60237446E12, 756.9666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237452E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 809.4330708661425, "minX": 1.60237446E12, "maxY": 1041.99, "series": [{"data": [[1.60237452E12, 809.4330708661425], [1.60237446E12, 1041.99]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237452E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 808.2818897637801, "minX": 1.60237446E12, "maxY": 1040.3000000000004, "series": [{"data": [[1.60237452E12, 808.2818897637801], [1.60237446E12, 1040.3000000000004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237452E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.015748031496062995, "minX": 1.60237446E12, "maxY": 0.7700000000000002, "series": [{"data": [[1.60237452E12, 0.015748031496062995], [1.60237446E12, 0.7700000000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237452E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60237446E12, "maxY": 3604.0, "series": [{"data": [[1.60237452E12, 3604.0], [1.60237446E12, 3334.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237452E12, 202.7239998483658], [1.60237446E12, 184.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237452E12, 203.0], [1.60237446E12, 184.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237452E12, 203.0], [1.60237446E12, 184.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237452E12, 189.0], [1.60237446E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237452E12, 795.0], [1.60237446E12, 712.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237452E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 414.0, "minX": 4.0, "maxY": 1053.5, "series": [{"data": [[8.0, 1053.5], [9.0, 909.0], [10.0, 976.5], [11.0, 952.5], [12.0, 869.5], [13.0, 908.0], [14.0, 680.5], [15.0, 623.0], [16.0, 612.0], [4.0, 946.0], [17.0, 583.5], [18.0, 596.0], [20.0, 565.5], [21.0, 414.0], [6.0, 747.0], [7.0, 579.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 414.0, "minX": 4.0, "maxY": 1053.0, "series": [{"data": [[8.0, 1053.0], [9.0, 908.0], [10.0, 973.5], [11.0, 952.0], [12.0, 867.5], [13.0, 906.0], [14.0, 680.5], [15.0, 622.0], [16.0, 612.0], [4.0, 946.0], [17.0, 583.5], [18.0, 595.0], [20.0, 565.5], [21.0, 414.0], [6.0, 744.5], [7.0, 576.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8333333333333333, "minX": 1.60237446E12, "maxY": 10.416666666666666, "series": [{"data": [[1.60237452E12, 10.416666666666666], [1.60237446E12, 1.8333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237452E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.60237446E12, "maxY": 10.583333333333334, "series": [{"data": [[1.60237452E12, 10.583333333333334], [1.60237446E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237452E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.60237446E12, "maxY": 10.583333333333334, "series": [{"data": [[1.60237452E12, 10.583333333333334], [1.60237446E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237452E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.60237446E12, "maxY": 10.583333333333334, "series": [{"data": [[1.60237452E12, 10.583333333333334], [1.60237446E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237452E12, "title": "Total Transactions Per Second"}},
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

