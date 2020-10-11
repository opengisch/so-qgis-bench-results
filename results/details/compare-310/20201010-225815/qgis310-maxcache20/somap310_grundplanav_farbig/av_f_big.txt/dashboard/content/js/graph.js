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
        data: {"result": {"minY": 171.0, "minX": 0.0, "maxY": 3318.0, "series": [{"data": [[0.0, 171.0], [0.1, 171.0], [0.2, 172.0], [0.3, 177.0], [0.4, 177.0], [0.5, 178.0], [0.6, 182.0], [0.7, 190.0], [0.8, 190.0], [0.9, 192.0], [1.0, 194.0], [1.1, 200.0], [1.2, 200.0], [1.3, 201.0], [1.4, 204.0], [1.5, 205.0], [1.6, 205.0], [1.7, 211.0], [1.8, 216.0], [1.9, 216.0], [2.0, 224.0], [2.1, 230.0], [2.2, 231.0], [2.3, 231.0], [2.4, 236.0], [2.5, 241.0], [2.6, 242.0], [2.7, 242.0], [2.8, 244.0], [2.9, 245.0], [3.0, 257.0], [3.1, 257.0], [3.2, 260.0], [3.3, 261.0], [3.4, 261.0], [3.5, 263.0], [3.6, 265.0], [3.7, 266.0], [3.8, 266.0], [3.9, 267.0], [4.0, 268.0], [4.1, 271.0], [4.2, 271.0], [4.3, 273.0], [4.4, 273.0], [4.5, 278.0], [4.6, 278.0], [4.7, 279.0], [4.8, 279.0], [4.9, 282.0], [5.0, 282.0], [5.1, 283.0], [5.2, 283.0], [5.3, 283.0], [5.4, 284.0], [5.5, 285.0], [5.6, 286.0], [5.7, 286.0], [5.8, 296.0], [5.9, 297.0], [6.0, 299.0], [6.1, 299.0], [6.2, 305.0], [6.3, 305.0], [6.4, 308.0], [6.5, 308.0], [6.6, 309.0], [6.7, 313.0], [6.8, 313.0], [6.9, 314.0], [7.0, 316.0], [7.1, 317.0], [7.2, 317.0], [7.3, 319.0], [7.4, 320.0], [7.5, 321.0], [7.6, 321.0], [7.7, 321.0], [7.8, 322.0], [7.9, 325.0], [8.0, 325.0], [8.1, 325.0], [8.2, 325.0], [8.3, 327.0], [8.4, 327.0], [8.5, 331.0], [8.6, 333.0], [8.7, 333.0], [8.8, 334.0], [8.9, 342.0], [9.0, 345.0], [9.1, 345.0], [9.2, 346.0], [9.3, 347.0], [9.4, 347.0], [9.5, 347.0], [9.6, 347.0], [9.7, 349.0], [9.8, 355.0], [9.9, 355.0], [10.0, 356.0], [10.1, 363.0], [10.2, 363.0], [10.3, 367.0], [10.4, 367.0], [10.5, 371.0], [10.6, 371.0], [10.7, 373.0], [10.8, 374.0], [10.9, 384.0], [11.0, 384.0], [11.1, 385.0], [11.2, 385.0], [11.3, 385.0], [11.4, 385.0], [11.5, 389.0], [11.6, 390.0], [11.7, 390.0], [11.8, 390.0], [11.9, 390.0], [12.0, 392.0], [12.1, 392.0], [12.2, 394.0], [12.3, 394.0], [12.4, 395.0], [12.5, 395.0], [12.6, 396.0], [12.7, 398.0], [12.8, 399.0], [12.9, 399.0], [13.0, 400.0], [13.1, 402.0], [13.2, 403.0], [13.3, 403.0], [13.4, 404.0], [13.5, 408.0], [13.6, 408.0], [13.7, 412.0], [13.8, 414.0], [13.9, 415.0], [14.0, 415.0], [14.1, 415.0], [14.2, 415.0], [14.3, 417.0], [14.4, 417.0], [14.5, 418.0], [14.6, 419.0], [14.7, 426.0], [14.8, 426.0], [14.9, 427.0], [15.0, 428.0], [15.1, 428.0], [15.2, 432.0], [15.3, 435.0], [15.4, 435.0], [15.5, 435.0], [15.6, 436.0], [15.7, 437.0], [15.8, 439.0], [15.9, 439.0], [16.0, 439.0], [16.1, 440.0], [16.2, 440.0], [16.3, 440.0], [16.4, 440.0], [16.5, 441.0], [16.6, 443.0], [16.7, 443.0], [16.8, 444.0], [16.9, 448.0], [17.0, 448.0], [17.1, 451.0], [17.2, 452.0], [17.3, 452.0], [17.4, 452.0], [17.5, 454.0], [17.6, 459.0], [17.7, 459.0], [17.8, 459.0], [17.9, 463.0], [18.0, 466.0], [18.1, 467.0], [18.2, 467.0], [18.3, 467.0], [18.4, 467.0], [18.5, 467.0], [18.6, 470.0], [18.7, 470.0], [18.8, 471.0], [18.9, 471.0], [19.0, 475.0], [19.1, 475.0], [19.2, 476.0], [19.3, 476.0], [19.4, 477.0], [19.5, 477.0], [19.6, 484.0], [19.7, 484.0], [19.8, 484.0], [19.9, 484.0], [20.0, 486.0], [20.1, 486.0], [20.2, 486.0], [20.3, 487.0], [20.4, 487.0], [20.5, 487.0], [20.6, 489.0], [20.7, 490.0], [20.8, 490.0], [20.9, 491.0], [21.0, 492.0], [21.1, 493.0], [21.2, 493.0], [21.3, 494.0], [21.4, 497.0], [21.5, 498.0], [21.6, 498.0], [21.7, 501.0], [21.8, 505.0], [21.9, 505.0], [22.0, 505.0], [22.1, 506.0], [22.2, 506.0], [22.3, 506.0], [22.4, 507.0], [22.5, 508.0], [22.6, 508.0], [22.7, 508.0], [22.8, 510.0], [22.9, 511.0], [23.0, 512.0], [23.1, 512.0], [23.2, 514.0], [23.3, 514.0], [23.4, 514.0], [23.5, 514.0], [23.6, 514.0], [23.7, 516.0], [23.8, 516.0], [23.9, 516.0], [24.0, 516.0], [24.1, 520.0], [24.2, 520.0], [24.3, 521.0], [24.4, 523.0], [24.5, 524.0], [24.6, 524.0], [24.7, 525.0], [24.8, 525.0], [24.9, 525.0], [25.0, 525.0], [25.1, 526.0], [25.2, 526.0], [25.3, 526.0], [25.4, 526.0], [25.5, 528.0], [25.6, 528.0], [25.7, 528.0], [25.8, 528.0], [25.9, 530.0], [26.0, 531.0], [26.1, 531.0], [26.2, 531.0], [26.3, 532.0], [26.4, 534.0], [26.5, 534.0], [26.6, 535.0], [26.7, 535.0], [26.8, 535.0], [26.9, 536.0], [27.0, 540.0], [27.1, 542.0], [27.2, 542.0], [27.3, 545.0], [27.4, 545.0], [27.5, 546.0], [27.6, 546.0], [27.7, 546.0], [27.8, 546.0], [27.9, 549.0], [28.0, 549.0], [28.1, 549.0], [28.2, 550.0], [28.3, 551.0], [28.4, 551.0], [28.5, 552.0], [28.6, 552.0], [28.7, 552.0], [28.8, 552.0], [28.9, 552.0], [29.0, 554.0], [29.1, 554.0], [29.2, 557.0], [29.3, 557.0], [29.4, 557.0], [29.5, 557.0], [29.6, 558.0], [29.7, 558.0], [29.8, 561.0], [29.9, 561.0], [30.0, 562.0], [30.1, 562.0], [30.2, 562.0], [30.3, 563.0], [30.4, 564.0], [30.5, 565.0], [30.6, 565.0], [30.7, 566.0], [30.8, 566.0], [30.9, 566.0], [31.0, 566.0], [31.1, 570.0], [31.2, 570.0], [31.3, 570.0], [31.4, 570.0], [31.5, 571.0], [31.6, 571.0], [31.7, 571.0], [31.8, 572.0], [31.9, 573.0], [32.0, 573.0], [32.1, 573.0], [32.2, 574.0], [32.3, 574.0], [32.4, 574.0], [32.5, 574.0], [32.6, 575.0], [32.7, 578.0], [32.8, 579.0], [32.9, 579.0], [33.0, 580.0], [33.1, 581.0], [33.2, 583.0], [33.3, 583.0], [33.4, 583.0], [33.5, 585.0], [33.6, 585.0], [33.7, 586.0], [33.8, 587.0], [33.9, 588.0], [34.0, 588.0], [34.1, 588.0], [34.2, 588.0], [34.3, 589.0], [34.4, 589.0], [34.5, 589.0], [34.6, 589.0], [34.7, 590.0], [34.8, 590.0], [34.9, 591.0], [35.0, 591.0], [35.1, 591.0], [35.2, 592.0], [35.3, 592.0], [35.4, 593.0], [35.5, 593.0], [35.6, 596.0], [35.7, 597.0], [35.8, 597.0], [35.9, 597.0], [36.0, 598.0], [36.1, 599.0], [36.2, 601.0], [36.3, 601.0], [36.4, 602.0], [36.5, 604.0], [36.6, 604.0], [36.7, 604.0], [36.8, 605.0], [36.9, 605.0], [37.0, 605.0], [37.1, 610.0], [37.2, 614.0], [37.3, 615.0], [37.4, 615.0], [37.5, 620.0], [37.6, 620.0], [37.7, 621.0], [37.8, 621.0], [37.9, 621.0], [38.0, 622.0], [38.1, 629.0], [38.2, 629.0], [38.3, 633.0], [38.4, 633.0], [38.5, 633.0], [38.6, 634.0], [38.7, 635.0], [38.8, 636.0], [38.9, 636.0], [39.0, 636.0], [39.1, 637.0], [39.2, 638.0], [39.3, 638.0], [39.4, 638.0], [39.5, 640.0], [39.6, 640.0], [39.7, 640.0], [39.8, 641.0], [39.9, 642.0], [40.0, 643.0], [40.1, 643.0], [40.2, 644.0], [40.3, 645.0], [40.4, 645.0], [40.5, 647.0], [40.6, 649.0], [40.7, 649.0], [40.8, 649.0], [40.9, 652.0], [41.0, 653.0], [41.1, 653.0], [41.2, 653.0], [41.3, 654.0], [41.4, 655.0], [41.5, 656.0], [41.6, 656.0], [41.7, 658.0], [41.8, 661.0], [41.9, 661.0], [42.0, 662.0], [42.1, 664.0], [42.2, 664.0], [42.3, 664.0], [42.4, 665.0], [42.5, 668.0], [42.6, 670.0], [42.7, 670.0], [42.8, 671.0], [42.9, 673.0], [43.0, 674.0], [43.1, 674.0], [43.2, 676.0], [43.3, 677.0], [43.4, 677.0], [43.5, 678.0], [43.6, 678.0], [43.7, 680.0], [43.8, 680.0], [43.9, 681.0], [44.0, 682.0], [44.1, 683.0], [44.2, 683.0], [44.3, 684.0], [44.4, 689.0], [44.5, 689.0], [44.6, 689.0], [44.7, 693.0], [44.8, 698.0], [44.9, 699.0], [45.0, 699.0], [45.1, 699.0], [45.2, 700.0], [45.3, 700.0], [45.4, 700.0], [45.5, 701.0], [45.6, 703.0], [45.7, 703.0], [45.8, 706.0], [45.9, 710.0], [46.0, 712.0], [46.1, 712.0], [46.2, 712.0], [46.3, 713.0], [46.4, 718.0], [46.5, 718.0], [46.6, 720.0], [46.7, 729.0], [46.8, 729.0], [46.9, 730.0], [47.0, 732.0], [47.1, 732.0], [47.2, 732.0], [47.3, 733.0], [47.4, 735.0], [47.5, 739.0], [47.6, 739.0], [47.7, 742.0], [47.8, 744.0], [47.9, 745.0], [48.0, 745.0], [48.1, 750.0], [48.2, 751.0], [48.3, 753.0], [48.4, 753.0], [48.5, 753.0], [48.6, 754.0], [48.7, 754.0], [48.8, 755.0], [48.9, 756.0], [49.0, 756.0], [49.1, 756.0], [49.2, 756.0], [49.3, 757.0], [49.4, 757.0], [49.5, 757.0], [49.6, 758.0], [49.7, 760.0], [49.8, 761.0], [49.9, 761.0], [50.0, 761.0], [50.1, 762.0], [50.2, 762.0], [50.3, 763.0], [50.4, 764.0], [50.5, 765.0], [50.6, 765.0], [50.7, 768.0], [50.8, 768.0], [50.9, 770.0], [51.0, 770.0], [51.1, 772.0], [51.2, 777.0], [51.3, 778.0], [51.4, 778.0], [51.5, 781.0], [51.6, 781.0], [51.7, 781.0], [51.8, 783.0], [51.9, 784.0], [52.0, 787.0], [52.1, 787.0], [52.2, 791.0], [52.3, 792.0], [52.4, 792.0], [52.5, 792.0], [52.6, 792.0], [52.7, 794.0], [52.8, 796.0], [52.9, 796.0], [53.0, 796.0], [53.1, 797.0], [53.2, 800.0], [53.3, 800.0], [53.4, 803.0], [53.5, 803.0], [53.6, 803.0], [53.7, 806.0], [53.8, 807.0], [53.9, 810.0], [54.0, 810.0], [54.1, 811.0], [54.2, 811.0], [54.3, 812.0], [54.4, 812.0], [54.5, 812.0], [54.6, 812.0], [54.7, 812.0], [54.8, 812.0], [54.9, 817.0], [55.0, 825.0], [55.1, 825.0], [55.2, 827.0], [55.3, 827.0], [55.4, 828.0], [55.5, 828.0], [55.6, 832.0], [55.7, 835.0], [55.8, 840.0], [55.9, 840.0], [56.0, 845.0], [56.1, 848.0], [56.2, 849.0], [56.3, 849.0], [56.4, 852.0], [56.5, 854.0], [56.6, 854.0], [56.7, 854.0], [56.8, 855.0], [56.9, 855.0], [57.0, 855.0], [57.1, 855.0], [57.2, 862.0], [57.3, 862.0], [57.4, 862.0], [57.5, 862.0], [57.6, 863.0], [57.7, 865.0], [57.8, 865.0], [57.9, 869.0], [58.0, 870.0], [58.1, 871.0], [58.2, 871.0], [58.3, 876.0], [58.4, 878.0], [58.5, 878.0], [58.6, 880.0], [58.7, 883.0], [58.8, 884.0], [58.9, 884.0], [59.0, 885.0], [59.1, 887.0], [59.2, 887.0], [59.3, 887.0], [59.4, 888.0], [59.5, 889.0], [59.6, 890.0], [59.7, 890.0], [59.8, 891.0], [59.9, 893.0], [60.0, 893.0], [60.1, 893.0], [60.2, 893.0], [60.3, 896.0], [60.4, 896.0], [60.5, 898.0], [60.6, 899.0], [60.7, 900.0], [60.8, 900.0], [60.9, 902.0], [61.0, 903.0], [61.1, 912.0], [61.2, 912.0], [61.3, 913.0], [61.4, 913.0], [61.5, 914.0], [61.6, 914.0], [61.7, 914.0], [61.8, 914.0], [61.9, 914.0], [62.0, 914.0], [62.1, 916.0], [62.2, 917.0], [62.3, 917.0], [62.4, 918.0], [62.5, 919.0], [62.6, 921.0], [62.7, 921.0], [62.8, 922.0], [62.9, 925.0], [63.0, 926.0], [63.1, 926.0], [63.2, 928.0], [63.3, 933.0], [63.4, 933.0], [63.5, 935.0], [63.6, 936.0], [63.7, 936.0], [63.8, 936.0], [63.9, 937.0], [64.0, 937.0], [64.1, 944.0], [64.2, 944.0], [64.3, 945.0], [64.4, 946.0], [64.5, 946.0], [64.6, 946.0], [64.7, 950.0], [64.8, 950.0], [64.9, 951.0], [65.0, 951.0], [65.1, 951.0], [65.2, 952.0], [65.3, 952.0], [65.4, 955.0], [65.5, 956.0], [65.6, 961.0], [65.7, 961.0], [65.8, 962.0], [65.9, 964.0], [66.0, 964.0], [66.1, 964.0], [66.2, 965.0], [66.3, 965.0], [66.4, 965.0], [66.5, 965.0], [66.6, 974.0], [66.7, 974.0], [66.8, 974.0], [66.9, 976.0], [67.0, 976.0], [67.1, 977.0], [67.2, 977.0], [67.3, 978.0], [67.4, 978.0], [67.5, 981.0], [67.6, 981.0], [67.7, 981.0], [67.8, 990.0], [67.9, 990.0], [68.0, 990.0], [68.1, 992.0], [68.2, 993.0], [68.3, 993.0], [68.4, 993.0], [68.5, 994.0], [68.6, 995.0], [68.7, 995.0], [68.8, 995.0], [68.9, 995.0], [69.0, 997.0], [69.1, 997.0], [69.2, 998.0], [69.3, 998.0], [69.4, 999.0], [69.5, 999.0], [69.6, 1000.0], [69.7, 1001.0], [69.8, 1004.0], [69.9, 1004.0], [70.0, 1005.0], [70.1, 1007.0], [70.2, 1007.0], [70.3, 1008.0], [70.4, 1008.0], [70.5, 1008.0], [70.6, 1008.0], [70.7, 1009.0], [70.8, 1011.0], [70.9, 1014.0], [71.0, 1014.0], [71.1, 1014.0], [71.2, 1014.0], [71.3, 1014.0], [71.4, 1014.0], [71.5, 1016.0], [71.6, 1018.0], [71.7, 1018.0], [71.8, 1018.0], [71.9, 1025.0], [72.0, 1025.0], [72.1, 1025.0], [72.2, 1026.0], [72.3, 1028.0], [72.4, 1031.0], [72.5, 1031.0], [72.6, 1035.0], [72.7, 1037.0], [72.8, 1038.0], [72.9, 1038.0], [73.0, 1040.0], [73.1, 1040.0], [73.2, 1043.0], [73.3, 1043.0], [73.4, 1043.0], [73.5, 1046.0], [73.6, 1046.0], [73.7, 1046.0], [73.8, 1047.0], [73.9, 1047.0], [74.0, 1047.0], [74.1, 1048.0], [74.2, 1048.0], [74.3, 1053.0], [74.4, 1053.0], [74.5, 1053.0], [74.6, 1054.0], [74.7, 1055.0], [74.8, 1055.0], [74.9, 1057.0], [75.0, 1057.0], [75.1, 1057.0], [75.2, 1057.0], [75.3, 1058.0], [75.4, 1059.0], [75.5, 1059.0], [75.6, 1060.0], [75.7, 1068.0], [75.8, 1071.0], [75.9, 1071.0], [76.0, 1072.0], [76.1, 1072.0], [76.2, 1073.0], [76.3, 1073.0], [76.4, 1073.0], [76.5, 1074.0], [76.6, 1078.0], [76.7, 1078.0], [76.8, 1079.0], [76.9, 1080.0], [77.0, 1080.0], [77.1, 1080.0], [77.2, 1080.0], [77.3, 1081.0], [77.4, 1081.0], [77.5, 1083.0], [77.6, 1088.0], [77.7, 1090.0], [77.8, 1090.0], [77.9, 1094.0], [78.0, 1095.0], [78.1, 1096.0], [78.2, 1096.0], [78.3, 1096.0], [78.4, 1099.0], [78.5, 1099.0], [78.6, 1099.0], [78.7, 1100.0], [78.8, 1101.0], [78.9, 1101.0], [79.0, 1102.0], [79.1, 1103.0], [79.2, 1105.0], [79.3, 1105.0], [79.4, 1110.0], [79.5, 1112.0], [79.6, 1114.0], [79.7, 1114.0], [79.8, 1116.0], [79.9, 1118.0], [80.0, 1121.0], [80.1, 1121.0], [80.2, 1123.0], [80.3, 1124.0], [80.4, 1124.0], [80.5, 1124.0], [80.6, 1128.0], [80.7, 1128.0], [80.8, 1128.0], [80.9, 1131.0], [81.0, 1131.0], [81.1, 1133.0], [81.2, 1133.0], [81.3, 1134.0], [81.4, 1137.0], [81.5, 1137.0], [81.6, 1137.0], [81.7, 1138.0], [81.8, 1138.0], [81.9, 1138.0], [82.0, 1143.0], [82.1, 1147.0], [82.2, 1148.0], [82.3, 1148.0], [82.4, 1150.0], [82.5, 1153.0], [82.6, 1155.0], [82.7, 1155.0], [82.8, 1156.0], [82.9, 1157.0], [83.0, 1157.0], [83.1, 1157.0], [83.2, 1157.0], [83.3, 1162.0], [83.4, 1162.0], [83.5, 1164.0], [83.6, 1172.0], [83.7, 1175.0], [83.8, 1175.0], [83.9, 1176.0], [84.0, 1179.0], [84.1, 1180.0], [84.2, 1180.0], [84.3, 1180.0], [84.4, 1184.0], [84.5, 1186.0], [84.6, 1186.0], [84.7, 1188.0], [84.8, 1194.0], [84.9, 1196.0], [85.0, 1196.0], [85.1, 1197.0], [85.2, 1198.0], [85.3, 1198.0], [85.4, 1199.0], [85.5, 1199.0], [85.6, 1201.0], [85.7, 1201.0], [85.8, 1202.0], [85.9, 1203.0], [86.0, 1203.0], [86.1, 1203.0], [86.2, 1203.0], [86.3, 1204.0], [86.4, 1206.0], [86.5, 1206.0], [86.6, 1215.0], [86.7, 1220.0], [86.8, 1220.0], [86.9, 1220.0], [87.0, 1221.0], [87.1, 1221.0], [87.2, 1221.0], [87.3, 1225.0], [87.4, 1226.0], [87.5, 1229.0], [87.6, 1229.0], [87.7, 1229.0], [87.8, 1230.0], [87.9, 1234.0], [88.0, 1234.0], [88.1, 1234.0], [88.2, 1234.0], [88.3, 1234.0], [88.4, 1234.0], [88.5, 1236.0], [88.6, 1237.0], [88.7, 1237.0], [88.8, 1242.0], [88.9, 1245.0], [89.0, 1256.0], [89.1, 1256.0], [89.2, 1260.0], [89.3, 1261.0], [89.4, 1263.0], [89.5, 1263.0], [89.6, 1263.0], [89.7, 1270.0], [89.8, 1274.0], [89.9, 1274.0], [90.0, 1275.0], [90.1, 1275.0], [90.2, 1275.0], [90.3, 1280.0], [90.4, 1282.0], [90.5, 1282.0], [90.6, 1282.0], [90.7, 1288.0], [90.8, 1289.0], [90.9, 1293.0], [91.0, 1293.0], [91.1, 1293.0], [91.2, 1300.0], [91.3, 1303.0], [91.4, 1303.0], [91.5, 1314.0], [91.6, 1326.0], [91.7, 1326.0], [91.8, 1328.0], [91.9, 1328.0], [92.0, 1338.0], [92.1, 1338.0], [92.2, 1383.0], [92.3, 1393.0], [92.4, 1399.0], [92.5, 1399.0], [92.6, 1405.0], [92.7, 1426.0], [92.8, 1432.0], [92.9, 1432.0], [93.0, 1434.0], [93.1, 1434.0], [93.2, 1460.0], [93.3, 1460.0], [93.4, 1461.0], [93.5, 1463.0], [93.6, 1463.0], [93.7, 1472.0], [93.8, 1480.0], [93.9, 1493.0], [94.0, 1493.0], [94.1, 1504.0], [94.2, 1518.0], [94.3, 1519.0], [94.4, 1519.0], [94.5, 1531.0], [94.6, 1541.0], [94.7, 1543.0], [94.8, 1543.0], [94.9, 1547.0], [95.0, 1560.0], [95.1, 1560.0], [95.2, 1568.0], [95.3, 1576.0], [95.4, 1587.0], [95.5, 1587.0], [95.6, 1594.0], [95.7, 1595.0], [95.8, 1608.0], [95.9, 1608.0], [96.0, 1619.0], [96.1, 1632.0], [96.2, 1653.0], [96.3, 1653.0], [96.4, 1654.0], [96.5, 1681.0], [96.6, 1692.0], [96.7, 1692.0], [96.8, 1723.0], [96.9, 1745.0], [97.0, 1745.0], [97.1, 1781.0], [97.2, 1823.0], [97.3, 1839.0], [97.4, 1839.0], [97.5, 1862.0], [97.6, 1879.0], [97.7, 2024.0], [97.8, 2024.0], [97.9, 2079.0], [98.0, 2101.0], [98.1, 2227.0], [98.2, 2227.0], [98.3, 2377.0], [98.4, 2500.0], [98.5, 2500.0], [98.6, 2687.0], [98.7, 2789.0], [98.8, 2859.0], [98.9, 2859.0], [99.0, 2997.0], [99.1, 3019.0], [99.2, 3104.0], [99.3, 3104.0], [99.4, 3149.0], [99.5, 3177.0], [99.6, 3204.0], [99.7, 3204.0], [99.8, 3260.0], [99.9, 3318.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 107.0, "series": [{"data": [[600.0, 66.0], [700.0, 59.0], [800.0, 55.0], [900.0, 65.0], [1000.0, 67.0], [1100.0, 51.0], [1200.0, 41.0], [1300.0, 10.0], [1400.0, 11.0], [1500.0, 13.0], [1600.0, 7.0], [100.0, 8.0], [1700.0, 3.0], [1800.0, 4.0], [2000.0, 2.0], [2100.0, 1.0], [2300.0, 1.0], [2200.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 3.0], [200.0, 37.0], [3200.0, 2.0], [3300.0, 1.0], [300.0, 50.0], [400.0, 64.0], [500.0, 107.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 44.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 532.0, "series": [{"data": [[0.0, 159.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 532.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 44.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.907786885245905, "minX": 1.60237158E12, "maxY": 10.0, "series": [{"data": [[1.60237164E12, 9.907786885245905], [1.60237158E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237164E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 320.0, "minX": 1.0, "maxY": 1188.0, "series": [{"data": [[8.0, 564.0], [4.0, 787.0], [2.0, 921.0], [1.0, 684.0], [9.0, 321.0], [10.0, 836.3911845730025], [5.0, 601.0], [6.0, 320.0], [3.0, 535.0], [7.0, 1188.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 834.2054421768706]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1868.7333333333333, "minX": 1.60237158E12, "maxY": 1113402.9, "series": [{"data": [[1.60237164E12, 1113402.9], [1.60237158E12, 722370.2666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237164E12, 3654.3], [1.60237158E12, 1868.7333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237164E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 767.3032786885251, "minX": 1.60237158E12, "maxY": 966.384615384615, "series": [{"data": [[1.60237164E12, 767.3032786885251], [1.60237158E12, 966.384615384615]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237164E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 766.1270491803276, "minX": 1.60237158E12, "maxY": 965.0728744939273, "series": [{"data": [[1.60237164E12, 766.1270491803276], [1.60237158E12, 965.0728744939273]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237164E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.020491803278688523, "minX": 1.60237158E12, "maxY": 0.39271255060728677, "series": [{"data": [[1.60237164E12, 0.020491803278688523], [1.60237158E12, 0.39271255060728677]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237164E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 171.0, "minX": 1.60237158E12, "maxY": 3318.0, "series": [{"data": [[1.60237164E12, 3318.0], [1.60237158E12, 3260.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237164E12, 179.60399953365325], [1.60237158E12, 232.58399781227112]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237164E12, 181.3644001865387], [1.60237158E12, 240.84240087509156]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237164E12, 180.58199976682664], [1.60237158E12, 237.17199890613557]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237164E12, 171.0], [1.60237158E12, 216.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237164E12, 711.0], [1.60237158E12, 900.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237164E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 538.0, "minX": 1.0, "maxY": 2500.0, "series": [{"data": [[8.0, 939.0], [9.0, 753.0], [10.0, 997.5], [11.0, 955.0], [12.0, 890.0], [13.0, 855.0], [14.0, 604.5], [15.0, 581.0], [1.0, 2500.0], [16.0, 565.0], [17.0, 587.0], [18.0, 538.0], [6.0, 642.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 538.0, "minX": 1.0, "maxY": 2497.0, "series": [{"data": [[8.0, 937.0], [9.0, 752.0], [10.0, 996.5], [11.0, 955.0], [12.0, 889.0], [13.0, 854.0], [14.0, 604.5], [15.0, 578.0], [1.0, 2497.0], [16.0, 564.5], [17.0, 587.0], [18.0, 538.0], [6.0, 642.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.283333333333333, "minX": 1.60237158E12, "maxY": 7.966666666666667, "series": [{"data": [[1.60237164E12, 7.966666666666667], [1.60237158E12, 4.283333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237164E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.116666666666666, "minX": 1.60237158E12, "maxY": 8.133333333333333, "series": [{"data": [[1.60237164E12, 8.133333333333333], [1.60237158E12, 4.116666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237164E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.116666666666666, "minX": 1.60237158E12, "maxY": 8.133333333333333, "series": [{"data": [[1.60237164E12, 8.133333333333333], [1.60237158E12, 4.116666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237164E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.116666666666666, "minX": 1.60237158E12, "maxY": 8.133333333333333, "series": [{"data": [[1.60237164E12, 8.133333333333333], [1.60237158E12, 4.116666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237164E12, "title": "Total Transactions Per Second"}},
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

