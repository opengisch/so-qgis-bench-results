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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 3312.0, "series": [{"data": [[0.0, 184.0], [0.1, 184.0], [0.2, 195.0], [0.3, 195.0], [0.4, 195.0], [0.5, 196.0], [0.6, 200.0], [0.7, 201.0], [0.8, 201.0], [0.9, 201.0], [1.0, 207.0], [1.1, 210.0], [1.2, 210.0], [1.3, 212.0], [1.4, 215.0], [1.5, 216.0], [1.6, 216.0], [1.7, 219.0], [1.8, 221.0], [1.9, 221.0], [2.0, 224.0], [2.1, 227.0], [2.2, 229.0], [2.3, 229.0], [2.4, 244.0], [2.5, 244.0], [2.6, 249.0], [2.7, 249.0], [2.8, 252.0], [2.9, 256.0], [3.0, 259.0], [3.1, 259.0], [3.2, 263.0], [3.3, 263.0], [3.4, 263.0], [3.5, 264.0], [3.6, 265.0], [3.7, 270.0], [3.8, 270.0], [3.9, 274.0], [4.0, 275.0], [4.1, 276.0], [4.2, 276.0], [4.3, 278.0], [4.4, 282.0], [4.5, 282.0], [4.6, 282.0], [4.7, 284.0], [4.8, 285.0], [4.9, 287.0], [5.0, 287.0], [5.1, 291.0], [5.2, 292.0], [5.3, 292.0], [5.4, 294.0], [5.5, 297.0], [5.6, 297.0], [5.7, 297.0], [5.8, 298.0], [5.9, 304.0], [6.0, 305.0], [6.1, 305.0], [6.2, 309.0], [6.3, 310.0], [6.4, 313.0], [6.5, 313.0], [6.6, 313.0], [6.7, 317.0], [6.8, 317.0], [6.9, 317.0], [7.0, 318.0], [7.1, 319.0], [7.2, 319.0], [7.3, 325.0], [7.4, 325.0], [7.5, 328.0], [7.6, 328.0], [7.7, 329.0], [7.8, 331.0], [7.9, 340.0], [8.0, 340.0], [8.1, 341.0], [8.2, 343.0], [8.3, 344.0], [8.4, 344.0], [8.5, 344.0], [8.6, 345.0], [8.7, 345.0], [8.8, 345.0], [8.9, 345.0], [9.0, 348.0], [9.1, 348.0], [9.2, 348.0], [9.3, 350.0], [9.4, 351.0], [9.5, 351.0], [9.6, 355.0], [9.7, 357.0], [9.8, 358.0], [9.9, 358.0], [10.0, 359.0], [10.1, 361.0], [10.2, 361.0], [10.3, 362.0], [10.4, 364.0], [10.5, 365.0], [10.6, 365.0], [10.7, 366.0], [10.8, 368.0], [10.9, 370.0], [11.0, 370.0], [11.1, 371.0], [11.2, 374.0], [11.3, 378.0], [11.4, 378.0], [11.5, 384.0], [11.6, 384.0], [11.7, 384.0], [11.8, 385.0], [11.9, 386.0], [12.0, 387.0], [12.1, 387.0], [12.2, 389.0], [12.3, 394.0], [12.4, 394.0], [12.5, 394.0], [12.6, 395.0], [12.7, 399.0], [12.8, 399.0], [12.9, 399.0], [13.0, 399.0], [13.1, 401.0], [13.2, 403.0], [13.3, 403.0], [13.4, 412.0], [13.5, 413.0], [13.6, 413.0], [13.7, 413.0], [13.8, 415.0], [13.9, 416.0], [14.0, 416.0], [14.1, 416.0], [14.2, 416.0], [14.3, 420.0], [14.4, 420.0], [14.5, 423.0], [14.6, 427.0], [14.7, 434.0], [14.8, 434.0], [14.9, 435.0], [15.0, 438.0], [15.1, 438.0], [15.2, 438.0], [15.3, 439.0], [15.4, 439.0], [15.5, 439.0], [15.6, 442.0], [15.7, 443.0], [15.8, 443.0], [15.9, 443.0], [16.0, 448.0], [16.1, 450.0], [16.2, 452.0], [16.3, 452.0], [16.4, 453.0], [16.5, 454.0], [16.6, 459.0], [16.7, 459.0], [16.8, 464.0], [16.9, 469.0], [17.0, 469.0], [17.1, 469.0], [17.2, 470.0], [17.3, 471.0], [17.4, 471.0], [17.5, 473.0], [17.6, 477.0], [17.7, 479.0], [17.8, 479.0], [17.9, 481.0], [18.0, 481.0], [18.1, 482.0], [18.2, 482.0], [18.3, 482.0], [18.4, 482.0], [18.5, 482.0], [18.6, 484.0], [18.7, 486.0], [18.8, 487.0], [18.9, 487.0], [19.0, 489.0], [19.1, 490.0], [19.2, 490.0], [19.3, 490.0], [19.4, 491.0], [19.5, 493.0], [19.6, 493.0], [19.7, 493.0], [19.8, 497.0], [19.9, 498.0], [20.0, 498.0], [20.1, 498.0], [20.2, 499.0], [20.3, 500.0], [20.4, 500.0], [20.5, 506.0], [20.6, 506.0], [20.7, 507.0], [20.8, 507.0], [20.9, 512.0], [21.0, 512.0], [21.1, 513.0], [21.2, 513.0], [21.3, 514.0], [21.4, 514.0], [21.5, 516.0], [21.6, 516.0], [21.7, 516.0], [21.8, 519.0], [21.9, 519.0], [22.0, 520.0], [22.1, 521.0], [22.2, 523.0], [22.3, 523.0], [22.4, 524.0], [22.5, 524.0], [22.6, 526.0], [22.7, 526.0], [22.8, 529.0], [22.9, 529.0], [23.0, 529.0], [23.1, 529.0], [23.2, 529.0], [23.3, 529.0], [23.4, 529.0], [23.5, 530.0], [23.6, 530.0], [23.7, 532.0], [23.8, 532.0], [23.9, 533.0], [24.0, 533.0], [24.1, 535.0], [24.2, 535.0], [24.3, 536.0], [24.4, 536.0], [24.5, 537.0], [24.6, 537.0], [24.7, 540.0], [24.8, 542.0], [24.9, 543.0], [25.0, 543.0], [25.1, 544.0], [25.2, 545.0], [25.3, 545.0], [25.4, 547.0], [25.5, 547.0], [25.6, 548.0], [25.7, 548.0], [25.8, 551.0], [25.9, 552.0], [26.0, 553.0], [26.1, 553.0], [26.2, 556.0], [26.3, 557.0], [26.4, 558.0], [26.5, 558.0], [26.6, 558.0], [26.7, 559.0], [26.8, 559.0], [26.9, 560.0], [27.0, 561.0], [27.1, 562.0], [27.2, 562.0], [27.3, 563.0], [27.4, 566.0], [27.5, 568.0], [27.6, 568.0], [27.7, 568.0], [27.8, 569.0], [27.9, 571.0], [28.0, 571.0], [28.1, 571.0], [28.2, 573.0], [28.3, 578.0], [28.4, 578.0], [28.5, 578.0], [28.6, 578.0], [28.7, 578.0], [28.8, 580.0], [28.9, 580.0], [29.0, 580.0], [29.1, 580.0], [29.2, 580.0], [29.3, 584.0], [29.4, 584.0], [29.5, 584.0], [29.6, 585.0], [29.7, 586.0], [29.8, 586.0], [29.9, 586.0], [30.0, 587.0], [30.1, 587.0], [30.2, 587.0], [30.3, 590.0], [30.4, 593.0], [30.5, 594.0], [30.6, 594.0], [30.7, 594.0], [30.8, 596.0], [30.9, 597.0], [31.0, 597.0], [31.1, 597.0], [31.2, 597.0], [31.3, 597.0], [31.4, 597.0], [31.5, 599.0], [31.6, 599.0], [31.7, 599.0], [31.8, 600.0], [31.9, 600.0], [32.0, 601.0], [32.1, 601.0], [32.2, 601.0], [32.3, 604.0], [32.4, 605.0], [32.5, 605.0], [32.6, 606.0], [32.7, 606.0], [32.8, 607.0], [32.9, 607.0], [33.0, 608.0], [33.1, 608.0], [33.2, 609.0], [33.3, 609.0], [33.4, 614.0], [33.5, 614.0], [33.6, 614.0], [33.7, 615.0], [33.8, 618.0], [33.9, 620.0], [34.0, 620.0], [34.1, 621.0], [34.2, 622.0], [34.3, 624.0], [34.4, 624.0], [34.5, 627.0], [34.6, 627.0], [34.7, 627.0], [34.8, 627.0], [34.9, 628.0], [35.0, 629.0], [35.1, 629.0], [35.2, 630.0], [35.3, 632.0], [35.4, 634.0], [35.5, 634.0], [35.6, 636.0], [35.7, 638.0], [35.8, 641.0], [35.9, 641.0], [36.0, 641.0], [36.1, 641.0], [36.2, 641.0], [36.3, 641.0], [36.4, 643.0], [36.5, 643.0], [36.6, 644.0], [36.7, 644.0], [36.8, 644.0], [36.9, 649.0], [37.0, 649.0], [37.1, 650.0], [37.2, 651.0], [37.3, 651.0], [37.4, 651.0], [37.5, 652.0], [37.6, 652.0], [37.7, 652.0], [37.8, 652.0], [37.9, 654.0], [38.0, 654.0], [38.1, 656.0], [38.2, 656.0], [38.3, 657.0], [38.4, 659.0], [38.5, 659.0], [38.6, 659.0], [38.7, 659.0], [38.8, 660.0], [38.9, 660.0], [39.0, 662.0], [39.1, 662.0], [39.2, 662.0], [39.3, 662.0], [39.4, 662.0], [39.5, 664.0], [39.6, 664.0], [39.7, 664.0], [39.8, 664.0], [39.9, 665.0], [40.0, 668.0], [40.1, 668.0], [40.2, 669.0], [40.3, 671.0], [40.4, 671.0], [40.5, 672.0], [40.6, 673.0], [40.7, 674.0], [40.8, 674.0], [40.9, 679.0], [41.0, 679.0], [41.1, 679.0], [41.2, 679.0], [41.3, 682.0], [41.4, 682.0], [41.5, 684.0], [41.6, 684.0], [41.7, 686.0], [41.8, 687.0], [41.9, 687.0], [42.0, 689.0], [42.1, 690.0], [42.2, 691.0], [42.3, 691.0], [42.4, 694.0], [42.5, 694.0], [42.6, 699.0], [42.7, 699.0], [42.8, 702.0], [42.9, 703.0], [43.0, 703.0], [43.1, 703.0], [43.2, 704.0], [43.3, 705.0], [43.4, 705.0], [43.5, 711.0], [43.6, 711.0], [43.7, 712.0], [43.8, 712.0], [43.9, 714.0], [44.0, 714.0], [44.1, 715.0], [44.2, 715.0], [44.3, 716.0], [44.4, 721.0], [44.5, 721.0], [44.6, 721.0], [44.7, 723.0], [44.8, 729.0], [44.9, 730.0], [45.0, 730.0], [45.1, 731.0], [45.2, 732.0], [45.3, 732.0], [45.4, 732.0], [45.5, 742.0], [45.6, 743.0], [45.7, 743.0], [45.8, 745.0], [45.9, 750.0], [46.0, 750.0], [46.1, 750.0], [46.2, 750.0], [46.3, 751.0], [46.4, 753.0], [46.5, 753.0], [46.6, 755.0], [46.7, 755.0], [46.8, 755.0], [46.9, 756.0], [47.0, 757.0], [47.1, 758.0], [47.2, 758.0], [47.3, 758.0], [47.4, 758.0], [47.5, 760.0], [47.6, 760.0], [47.7, 762.0], [47.8, 765.0], [47.9, 765.0], [48.0, 765.0], [48.1, 769.0], [48.2, 769.0], [48.3, 770.0], [48.4, 770.0], [48.5, 771.0], [48.6, 774.0], [48.7, 774.0], [48.8, 775.0], [48.9, 776.0], [49.0, 778.0], [49.1, 778.0], [49.2, 780.0], [49.3, 783.0], [49.4, 784.0], [49.5, 784.0], [49.6, 785.0], [49.7, 786.0], [49.8, 786.0], [49.9, 786.0], [50.0, 788.0], [50.1, 788.0], [50.2, 788.0], [50.3, 793.0], [50.4, 793.0], [50.5, 794.0], [50.6, 794.0], [50.7, 796.0], [50.8, 796.0], [50.9, 796.0], [51.0, 796.0], [51.1, 799.0], [51.2, 800.0], [51.3, 801.0], [51.4, 801.0], [51.5, 806.0], [51.6, 808.0], [51.7, 808.0], [51.8, 808.0], [51.9, 811.0], [52.0, 812.0], [52.1, 812.0], [52.2, 812.0], [52.3, 812.0], [52.4, 814.0], [52.5, 814.0], [52.6, 814.0], [52.7, 817.0], [52.8, 817.0], [52.9, 817.0], [53.0, 818.0], [53.1, 819.0], [53.2, 819.0], [53.3, 819.0], [53.4, 820.0], [53.5, 821.0], [53.6, 821.0], [53.7, 823.0], [53.8, 823.0], [53.9, 823.0], [54.0, 823.0], [54.1, 831.0], [54.2, 832.0], [54.3, 833.0], [54.4, 833.0], [54.5, 834.0], [54.6, 834.0], [54.7, 838.0], [54.8, 838.0], [54.9, 839.0], [55.0, 842.0], [55.1, 842.0], [55.2, 849.0], [55.3, 850.0], [55.4, 851.0], [55.5, 851.0], [55.6, 853.0], [55.7, 854.0], [55.8, 855.0], [55.9, 855.0], [56.0, 856.0], [56.1, 856.0], [56.2, 856.0], [56.3, 856.0], [56.4, 856.0], [56.5, 858.0], [56.6, 859.0], [56.7, 859.0], [56.8, 862.0], [56.9, 863.0], [57.0, 863.0], [57.1, 864.0], [57.2, 866.0], [57.3, 866.0], [57.4, 866.0], [57.5, 867.0], [57.6, 868.0], [57.7, 869.0], [57.8, 869.0], [57.9, 872.0], [58.0, 872.0], [58.1, 874.0], [58.2, 874.0], [58.3, 874.0], [58.4, 874.0], [58.5, 874.0], [58.6, 876.0], [58.7, 878.0], [58.8, 878.0], [58.9, 878.0], [59.0, 880.0], [59.1, 880.0], [59.2, 880.0], [59.3, 880.0], [59.4, 881.0], [59.5, 882.0], [59.6, 893.0], [59.7, 893.0], [59.8, 894.0], [59.9, 894.0], [60.0, 895.0], [60.1, 895.0], [60.2, 896.0], [60.3, 896.0], [60.4, 896.0], [60.5, 897.0], [60.6, 898.0], [60.7, 898.0], [60.8, 898.0], [60.9, 901.0], [61.0, 901.0], [61.1, 906.0], [61.2, 906.0], [61.3, 907.0], [61.4, 909.0], [61.5, 912.0], [61.6, 912.0], [61.7, 912.0], [61.8, 912.0], [61.9, 912.0], [62.0, 912.0], [62.1, 913.0], [62.2, 915.0], [62.3, 915.0], [62.4, 921.0], [62.5, 922.0], [62.6, 924.0], [62.7, 924.0], [62.8, 924.0], [62.9, 924.0], [63.0, 926.0], [63.1, 926.0], [63.2, 927.0], [63.3, 928.0], [63.4, 928.0], [63.5, 928.0], [63.6, 929.0], [63.7, 930.0], [63.8, 930.0], [63.9, 931.0], [64.0, 933.0], [64.1, 934.0], [64.2, 934.0], [64.3, 937.0], [64.4, 937.0], [64.5, 937.0], [64.6, 937.0], [64.7, 938.0], [64.8, 939.0], [64.9, 939.0], [65.0, 939.0], [65.1, 940.0], [65.2, 940.0], [65.3, 940.0], [65.4, 944.0], [65.5, 945.0], [65.6, 947.0], [65.7, 947.0], [65.8, 947.0], [65.9, 947.0], [66.0, 948.0], [66.1, 948.0], [66.2, 951.0], [66.3, 952.0], [66.4, 952.0], [66.5, 952.0], [66.6, 954.0], [66.7, 954.0], [66.8, 954.0], [66.9, 957.0], [67.0, 957.0], [67.1, 958.0], [67.2, 958.0], [67.3, 961.0], [67.4, 961.0], [67.5, 962.0], [67.6, 962.0], [67.7, 962.0], [67.8, 964.0], [67.9, 967.0], [68.0, 967.0], [68.1, 968.0], [68.2, 970.0], [68.3, 972.0], [68.4, 972.0], [68.5, 974.0], [68.6, 974.0], [68.7, 974.0], [68.8, 975.0], [68.9, 976.0], [69.0, 978.0], [69.1, 978.0], [69.2, 980.0], [69.3, 981.0], [69.4, 981.0], [69.5, 981.0], [69.6, 982.0], [69.7, 983.0], [69.8, 983.0], [69.9, 983.0], [70.0, 984.0], [70.1, 984.0], [70.2, 984.0], [70.3, 984.0], [70.4, 984.0], [70.5, 986.0], [70.6, 986.0], [70.7, 990.0], [70.8, 991.0], [70.9, 994.0], [71.0, 994.0], [71.1, 995.0], [71.2, 996.0], [71.3, 997.0], [71.4, 997.0], [71.5, 997.0], [71.6, 998.0], [71.7, 998.0], [71.8, 999.0], [71.9, 999.0], [72.0, 1001.0], [72.1, 1001.0], [72.2, 1001.0], [72.3, 1002.0], [72.4, 1002.0], [72.5, 1002.0], [72.6, 1003.0], [72.7, 1003.0], [72.8, 1005.0], [72.9, 1005.0], [73.0, 1006.0], [73.1, 1008.0], [73.2, 1008.0], [73.3, 1008.0], [73.4, 1012.0], [73.5, 1013.0], [73.6, 1013.0], [73.7, 1017.0], [73.8, 1020.0], [73.9, 1021.0], [74.0, 1021.0], [74.1, 1021.0], [74.2, 1022.0], [74.3, 1023.0], [74.4, 1023.0], [74.5, 1025.0], [74.6, 1026.0], [74.7, 1029.0], [74.8, 1029.0], [74.9, 1030.0], [75.0, 1034.0], [75.1, 1034.0], [75.2, 1036.0], [75.3, 1037.0], [75.4, 1039.0], [75.5, 1039.0], [75.6, 1043.0], [75.7, 1050.0], [75.8, 1052.0], [75.9, 1052.0], [76.0, 1055.0], [76.1, 1057.0], [76.2, 1057.0], [76.3, 1057.0], [76.4, 1062.0], [76.5, 1063.0], [76.6, 1067.0], [76.7, 1067.0], [76.8, 1068.0], [76.9, 1072.0], [77.0, 1072.0], [77.1, 1073.0], [77.2, 1079.0], [77.3, 1079.0], [77.4, 1079.0], [77.5, 1082.0], [77.6, 1083.0], [77.7, 1083.0], [77.8, 1083.0], [77.9, 1084.0], [78.0, 1084.0], [78.1, 1085.0], [78.2, 1085.0], [78.3, 1085.0], [78.4, 1087.0], [78.5, 1087.0], [78.6, 1088.0], [78.7, 1093.0], [78.8, 1096.0], [78.9, 1096.0], [79.0, 1099.0], [79.1, 1101.0], [79.2, 1104.0], [79.3, 1104.0], [79.4, 1104.0], [79.5, 1107.0], [79.6, 1107.0], [79.7, 1107.0], [79.8, 1107.0], [79.9, 1109.0], [80.0, 1110.0], [80.1, 1110.0], [80.2, 1111.0], [80.3, 1113.0], [80.4, 1113.0], [80.5, 1113.0], [80.6, 1115.0], [80.7, 1117.0], [80.8, 1117.0], [80.9, 1117.0], [81.0, 1119.0], [81.1, 1120.0], [81.2, 1120.0], [81.3, 1121.0], [81.4, 1129.0], [81.5, 1131.0], [81.6, 1131.0], [81.7, 1131.0], [81.8, 1132.0], [81.9, 1132.0], [82.0, 1134.0], [82.1, 1136.0], [82.2, 1136.0], [82.3, 1136.0], [82.4, 1142.0], [82.5, 1142.0], [82.6, 1144.0], [82.7, 1144.0], [82.8, 1145.0], [82.9, 1150.0], [83.0, 1150.0], [83.1, 1150.0], [83.2, 1155.0], [83.3, 1157.0], [83.4, 1157.0], [83.5, 1167.0], [83.6, 1168.0], [83.7, 1170.0], [83.8, 1170.0], [83.9, 1171.0], [84.0, 1174.0], [84.1, 1175.0], [84.2, 1175.0], [84.3, 1175.0], [84.4, 1177.0], [84.5, 1177.0], [84.6, 1177.0], [84.7, 1182.0], [84.8, 1185.0], [84.9, 1189.0], [85.0, 1189.0], [85.1, 1189.0], [85.2, 1189.0], [85.3, 1189.0], [85.4, 1190.0], [85.5, 1193.0], [85.6, 1196.0], [85.7, 1196.0], [85.8, 1197.0], [85.9, 1197.0], [86.0, 1198.0], [86.1, 1198.0], [86.2, 1198.0], [86.3, 1198.0], [86.4, 1199.0], [86.5, 1199.0], [86.6, 1203.0], [86.7, 1207.0], [86.8, 1207.0], [86.9, 1207.0], [87.0, 1211.0], [87.1, 1211.0], [87.2, 1211.0], [87.3, 1213.0], [87.4, 1221.0], [87.5, 1224.0], [87.6, 1224.0], [87.7, 1231.0], [87.8, 1231.0], [87.9, 1233.0], [88.0, 1233.0], [88.1, 1234.0], [88.2, 1239.0], [88.3, 1239.0], [88.4, 1239.0], [88.5, 1240.0], [88.6, 1247.0], [88.7, 1247.0], [88.8, 1250.0], [88.9, 1251.0], [89.0, 1268.0], [89.1, 1268.0], [89.2, 1269.0], [89.3, 1271.0], [89.4, 1274.0], [89.5, 1274.0], [89.6, 1277.0], [89.7, 1280.0], [89.8, 1284.0], [89.9, 1284.0], [90.0, 1285.0], [90.1, 1291.0], [90.2, 1291.0], [90.3, 1294.0], [90.4, 1299.0], [90.5, 1306.0], [90.6, 1306.0], [90.7, 1308.0], [90.8, 1308.0], [90.9, 1310.0], [91.0, 1310.0], [91.1, 1313.0], [91.2, 1323.0], [91.3, 1325.0], [91.4, 1325.0], [91.5, 1329.0], [91.6, 1333.0], [91.7, 1333.0], [91.8, 1334.0], [91.9, 1353.0], [92.0, 1354.0], [92.1, 1354.0], [92.2, 1356.0], [92.3, 1363.0], [92.4, 1396.0], [92.5, 1396.0], [92.6, 1400.0], [92.7, 1419.0], [92.8, 1443.0], [92.9, 1443.0], [93.0, 1445.0], [93.1, 1447.0], [93.2, 1484.0], [93.3, 1484.0], [93.4, 1489.0], [93.5, 1490.0], [93.6, 1490.0], [93.7, 1497.0], [93.8, 1512.0], [93.9, 1527.0], [94.0, 1527.0], [94.1, 1551.0], [94.2, 1557.0], [94.3, 1629.0], [94.4, 1629.0], [94.5, 1642.0], [94.6, 1646.0], [94.7, 1648.0], [94.8, 1648.0], [94.9, 1650.0], [95.0, 1653.0], [95.1, 1653.0], [95.2, 1670.0], [95.3, 1670.0], [95.4, 1679.0], [95.5, 1679.0], [95.6, 1720.0], [95.7, 1721.0], [95.8, 1727.0], [95.9, 1727.0], [96.0, 1738.0], [96.1, 1742.0], [96.2, 1772.0], [96.3, 1772.0], [96.4, 1798.0], [96.5, 1818.0], [96.6, 1831.0], [96.7, 1831.0], [96.8, 1837.0], [96.9, 1841.0], [97.0, 1841.0], [97.1, 1859.0], [97.2, 1875.0], [97.3, 1942.0], [97.4, 1942.0], [97.5, 1976.0], [97.6, 1991.0], [97.7, 2117.0], [97.8, 2117.0], [97.9, 2296.0], [98.0, 2398.0], [98.1, 2410.0], [98.2, 2410.0], [98.3, 2495.0], [98.4, 2646.0], [98.5, 2646.0], [98.6, 2720.0], [98.7, 2935.0], [98.8, 2939.0], [98.9, 2939.0], [99.0, 2970.0], [99.1, 3037.0], [99.2, 3066.0], [99.3, 3066.0], [99.4, 3151.0], [99.5, 3158.0], [99.6, 3175.0], [99.7, 3175.0], [99.8, 3209.0], [99.9, 3312.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 84.0, "series": [{"data": [[600.0, 81.0], [700.0, 62.0], [800.0, 71.0], [900.0, 82.0], [1000.0, 52.0], [1100.0, 55.0], [1200.0, 29.0], [1300.0, 15.0], [1400.0, 9.0], [1500.0, 4.0], [100.0, 4.0], [1600.0, 9.0], [1700.0, 7.0], [1800.0, 6.0], [1900.0, 3.0], [2100.0, 1.0], [2300.0, 1.0], [2200.0, 1.0], [2400.0, 2.0], [2600.0, 1.0], [2700.0, 1.0], [2900.0, 3.0], [3000.0, 2.0], [3100.0, 3.0], [200.0, 39.0], [3200.0, 1.0], [3300.0, 1.0], [300.0, 53.0], [400.0, 53.0], [500.0, 84.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 46.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 539.0, "series": [{"data": [[0.0, 150.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 539.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 46.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.927066450567262, "minX": 1.6023126E12, "maxY": 10.0, "series": [{"data": [[1.60231266E12, 9.927066450567262], [1.6023126E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231266E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 270.0, "minX": 1.0, "maxY": 1197.0, "series": [{"data": [[8.0, 270.0], [4.0, 482.0], [2.0, 519.0], [1.0, 853.0], [9.0, 529.0], [10.0, 849.7465564738297], [5.0, 1020.0], [6.0, 1197.0], [3.0, 594.0], [7.0, 532.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 847.4993197278917]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 893.8833333333333, "minX": 1.6023126E12, "maxY": 1416143.4, "series": [{"data": [[1.60231266E12, 1416143.4], [1.6023126E12, 419624.13333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231266E12, 4629.15], [1.6023126E12, 893.8833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231266E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 814.9157212317667, "minX": 1.6023126E12, "maxY": 1017.8728813559317, "series": [{"data": [[1.60231266E12, 814.9157212317667], [1.6023126E12, 1017.8728813559317]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231266E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 813.9432739059968, "minX": 1.6023126E12, "maxY": 1016.457627118644, "series": [{"data": [[1.60231266E12, 813.9432739059968], [1.6023126E12, 1016.457627118644]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231266E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01782820097244733, "minX": 1.6023126E12, "maxY": 1.0254237288135595, "series": [{"data": [[1.60231266E12, 0.01782820097244733], [1.6023126E12, 1.0254237288135595]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231266E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.6023126E12, "maxY": 3312.0, "series": [{"data": [[1.60231266E12, 3158.0], [1.6023126E12, 3312.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231266E12, 208.68599955797197], [1.6023126E12, 195.35499985814096]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231266E12, 210.59100029468536], [1.6023126E12, 195.89050005674363]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231266E12, 209.61299977898597], [1.6023126E12, 195.65249992907047]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231266E12, 184.0], [1.6023126E12, 195.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231266E12, 793.0], [1.6023126E12, 761.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231266E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 427.0, "minX": 1.0, "maxY": 2398.0, "series": [{"data": [[8.0, 969.0], [2.0, 686.0], [9.0, 941.0], [10.0, 1007.5], [11.0, 947.0], [12.0, 811.0], [13.0, 806.0], [14.0, 718.5], [15.0, 684.0], [1.0, 2398.0], [16.0, 598.0], [17.0, 427.0], [18.0, 777.5], [19.0, 506.0], [7.0, 1003.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 427.0, "minX": 1.0, "maxY": 2394.0, "series": [{"data": [[8.0, 966.5], [2.0, 685.5], [9.0, 939.0], [10.0, 1006.5], [11.0, 945.0], [12.0, 809.0], [13.0, 806.0], [14.0, 718.0], [15.0, 684.0], [1.0, 2394.0], [16.0, 598.0], [17.0, 427.0], [18.0, 777.5], [19.0, 505.0], [7.0, 1002.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.1333333333333333, "minX": 1.6023126E12, "maxY": 10.116666666666667, "series": [{"data": [[1.60231266E12, 10.116666666666667], [1.6023126E12, 2.1333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231266E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.6023126E12, "maxY": 10.283333333333333, "series": [{"data": [[1.60231266E12, 10.283333333333333], [1.6023126E12, 1.9666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231266E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.6023126E12, "maxY": 10.283333333333333, "series": [{"data": [[1.60231266E12, 10.283333333333333], [1.6023126E12, 1.9666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231266E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.6023126E12, "maxY": 10.283333333333333, "series": [{"data": [[1.60231266E12, 10.283333333333333], [1.6023126E12, 1.9666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231266E12, "title": "Total Transactions Per Second"}},
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

