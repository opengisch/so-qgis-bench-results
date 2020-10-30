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
        data: {"result": {"minY": 169.0, "minX": 0.0, "maxY": 3848.0, "series": [{"data": [[0.0, 169.0], [0.1, 169.0], [0.2, 191.0], [0.3, 203.0], [0.4, 203.0], [0.5, 204.0], [0.6, 208.0], [0.7, 210.0], [0.8, 210.0], [0.9, 212.0], [1.0, 213.0], [1.1, 214.0], [1.2, 214.0], [1.3, 216.0], [1.4, 222.0], [1.5, 225.0], [1.6, 225.0], [1.7, 227.0], [1.8, 237.0], [1.9, 237.0], [2.0, 240.0], [2.1, 247.0], [2.2, 252.0], [2.3, 252.0], [2.4, 256.0], [2.5, 260.0], [2.6, 261.0], [2.7, 261.0], [2.8, 264.0], [2.9, 265.0], [3.0, 268.0], [3.1, 268.0], [3.2, 269.0], [3.3, 270.0], [3.4, 270.0], [3.5, 274.0], [3.6, 275.0], [3.7, 275.0], [3.8, 275.0], [3.9, 277.0], [4.0, 279.0], [4.1, 282.0], [4.2, 282.0], [4.3, 284.0], [4.4, 285.0], [4.5, 286.0], [4.6, 286.0], [4.7, 287.0], [4.8, 287.0], [4.9, 295.0], [5.0, 295.0], [5.1, 300.0], [5.2, 302.0], [5.3, 302.0], [5.4, 303.0], [5.5, 303.0], [5.6, 312.0], [5.7, 312.0], [5.8, 315.0], [5.9, 316.0], [6.0, 317.0], [6.1, 317.0], [6.2, 317.0], [6.3, 326.0], [6.4, 329.0], [6.5, 329.0], [6.6, 335.0], [6.7, 336.0], [6.8, 336.0], [6.9, 337.0], [7.0, 338.0], [7.1, 338.0], [7.2, 338.0], [7.3, 341.0], [7.4, 345.0], [7.5, 346.0], [7.6, 346.0], [7.7, 346.0], [7.8, 352.0], [7.9, 356.0], [8.0, 356.0], [8.1, 357.0], [8.2, 359.0], [8.3, 362.0], [8.4, 362.0], [8.5, 362.0], [8.6, 366.0], [8.7, 366.0], [8.8, 372.0], [8.9, 375.0], [9.0, 392.0], [9.1, 392.0], [9.2, 394.0], [9.3, 398.0], [9.4, 398.0], [9.5, 398.0], [9.6, 398.0], [9.7, 403.0], [9.8, 404.0], [9.9, 404.0], [10.0, 406.0], [10.1, 407.0], [10.2, 407.0], [10.3, 412.0], [10.4, 413.0], [10.5, 416.0], [10.6, 416.0], [10.7, 421.0], [10.8, 421.0], [10.9, 425.0], [11.0, 425.0], [11.1, 426.0], [11.2, 426.0], [11.3, 427.0], [11.4, 427.0], [11.5, 429.0], [11.6, 431.0], [11.7, 431.0], [11.8, 432.0], [11.9, 432.0], [12.0, 432.0], [12.1, 432.0], [12.2, 434.0], [12.3, 435.0], [12.4, 435.0], [12.5, 435.0], [12.6, 442.0], [12.7, 443.0], [12.8, 446.0], [12.9, 446.0], [13.0, 446.0], [13.1, 448.0], [13.2, 448.0], [13.3, 448.0], [13.4, 452.0], [13.5, 456.0], [13.6, 456.0], [13.7, 456.0], [13.8, 456.0], [13.9, 457.0], [14.0, 457.0], [14.1, 457.0], [14.2, 459.0], [14.3, 460.0], [14.4, 460.0], [14.5, 461.0], [14.6, 461.0], [14.7, 462.0], [14.8, 462.0], [14.9, 465.0], [15.0, 467.0], [15.1, 467.0], [15.2, 468.0], [15.3, 468.0], [15.4, 468.0], [15.5, 468.0], [15.6, 470.0], [15.7, 470.0], [15.8, 471.0], [15.9, 471.0], [16.0, 473.0], [16.1, 474.0], [16.2, 474.0], [16.3, 474.0], [16.4, 474.0], [16.5, 475.0], [16.6, 475.0], [16.7, 475.0], [16.8, 477.0], [16.9, 479.0], [17.0, 479.0], [17.1, 483.0], [17.2, 484.0], [17.3, 484.0], [17.4, 484.0], [17.5, 484.0], [17.6, 485.0], [17.7, 486.0], [17.8, 486.0], [17.9, 490.0], [18.0, 490.0], [18.1, 491.0], [18.2, 491.0], [18.3, 497.0], [18.4, 498.0], [18.5, 498.0], [18.6, 499.0], [18.7, 500.0], [18.8, 501.0], [18.9, 501.0], [19.0, 502.0], [19.1, 502.0], [19.2, 503.0], [19.3, 503.0], [19.4, 506.0], [19.5, 508.0], [19.6, 516.0], [19.7, 516.0], [19.8, 517.0], [19.9, 518.0], [20.0, 518.0], [20.1, 518.0], [20.2, 520.0], [20.3, 521.0], [20.4, 521.0], [20.5, 523.0], [20.6, 524.0], [20.7, 525.0], [20.8, 525.0], [20.9, 527.0], [21.0, 527.0], [21.1, 529.0], [21.2, 529.0], [21.3, 529.0], [21.4, 530.0], [21.5, 532.0], [21.6, 532.0], [21.7, 532.0], [21.8, 536.0], [21.9, 536.0], [22.0, 539.0], [22.1, 539.0], [22.2, 540.0], [22.3, 540.0], [22.4, 540.0], [22.5, 542.0], [22.6, 542.0], [22.7, 542.0], [22.8, 543.0], [22.9, 544.0], [23.0, 546.0], [23.1, 546.0], [23.2, 546.0], [23.3, 547.0], [23.4, 547.0], [23.5, 547.0], [23.6, 547.0], [23.7, 551.0], [23.8, 551.0], [23.9, 552.0], [24.0, 553.0], [24.1, 554.0], [24.2, 554.0], [24.3, 555.0], [24.4, 555.0], [24.5, 558.0], [24.6, 558.0], [24.7, 558.0], [24.8, 558.0], [24.9, 559.0], [25.0, 559.0], [25.1, 559.0], [25.2, 559.0], [25.3, 559.0], [25.4, 562.0], [25.5, 563.0], [25.6, 564.0], [25.7, 564.0], [25.8, 564.0], [25.9, 564.0], [26.0, 565.0], [26.1, 565.0], [26.2, 567.0], [26.3, 567.0], [26.4, 567.0], [26.5, 567.0], [26.6, 568.0], [26.7, 568.0], [26.8, 568.0], [26.9, 571.0], [27.0, 573.0], [27.1, 574.0], [27.2, 574.0], [27.3, 574.0], [27.4, 574.0], [27.5, 576.0], [27.6, 576.0], [27.7, 577.0], [27.8, 580.0], [27.9, 581.0], [28.0, 581.0], [28.1, 582.0], [28.2, 584.0], [28.3, 585.0], [28.4, 585.0], [28.5, 585.0], [28.6, 586.0], [28.7, 586.0], [28.8, 588.0], [28.9, 589.0], [29.0, 591.0], [29.1, 591.0], [29.2, 592.0], [29.3, 592.0], [29.4, 592.0], [29.5, 592.0], [29.6, 593.0], [29.7, 594.0], [29.8, 595.0], [29.9, 595.0], [30.0, 595.0], [30.1, 598.0], [30.2, 598.0], [30.3, 598.0], [30.4, 600.0], [30.5, 601.0], [30.6, 601.0], [30.7, 603.0], [30.8, 604.0], [30.9, 604.0], [31.0, 604.0], [31.1, 605.0], [31.2, 606.0], [31.3, 607.0], [31.4, 607.0], [31.5, 608.0], [31.6, 610.0], [31.7, 610.0], [31.8, 611.0], [31.9, 611.0], [32.0, 614.0], [32.1, 614.0], [32.2, 615.0], [32.3, 615.0], [32.4, 615.0], [32.5, 615.0], [32.6, 616.0], [32.7, 616.0], [32.8, 618.0], [32.9, 618.0], [33.0, 620.0], [33.1, 620.0], [33.2, 625.0], [33.3, 625.0], [33.4, 625.0], [33.5, 625.0], [33.6, 625.0], [33.7, 627.0], [33.8, 627.0], [33.9, 631.0], [34.0, 631.0], [34.1, 631.0], [34.2, 635.0], [34.3, 635.0], [34.4, 635.0], [34.5, 635.0], [34.6, 635.0], [34.7, 636.0], [34.8, 636.0], [34.9, 636.0], [35.0, 636.0], [35.1, 636.0], [35.2, 637.0], [35.3, 639.0], [35.4, 641.0], [35.5, 641.0], [35.6, 642.0], [35.7, 643.0], [35.8, 644.0], [35.9, 644.0], [36.0, 647.0], [36.1, 649.0], [36.2, 651.0], [36.3, 651.0], [36.4, 651.0], [36.5, 651.0], [36.6, 652.0], [36.7, 652.0], [36.8, 652.0], [36.9, 653.0], [37.0, 653.0], [37.1, 654.0], [37.2, 657.0], [37.3, 659.0], [37.4, 659.0], [37.5, 661.0], [37.6, 662.0], [37.7, 663.0], [37.8, 663.0], [37.9, 663.0], [38.0, 664.0], [38.1, 665.0], [38.2, 665.0], [38.3, 665.0], [38.4, 666.0], [38.5, 666.0], [38.6, 666.0], [38.7, 666.0], [38.8, 666.0], [38.9, 666.0], [39.0, 669.0], [39.1, 672.0], [39.2, 675.0], [39.3, 675.0], [39.4, 676.0], [39.5, 678.0], [39.6, 678.0], [39.7, 678.0], [39.8, 679.0], [39.9, 680.0], [40.0, 685.0], [40.1, 685.0], [40.2, 685.0], [40.3, 687.0], [40.4, 687.0], [40.5, 688.0], [40.6, 695.0], [40.7, 696.0], [40.8, 696.0], [40.9, 697.0], [41.0, 699.0], [41.1, 703.0], [41.2, 703.0], [41.3, 703.0], [41.4, 704.0], [41.5, 704.0], [41.6, 704.0], [41.7, 708.0], [41.8, 709.0], [41.9, 709.0], [42.0, 710.0], [42.1, 712.0], [42.2, 712.0], [42.3, 712.0], [42.4, 714.0], [42.5, 715.0], [42.6, 717.0], [42.7, 717.0], [42.8, 717.0], [42.9, 721.0], [43.0, 723.0], [43.1, 723.0], [43.2, 724.0], [43.3, 724.0], [43.4, 724.0], [43.5, 726.0], [43.6, 728.0], [43.7, 731.0], [43.8, 731.0], [43.9, 733.0], [44.0, 733.0], [44.1, 733.0], [44.2, 733.0], [44.3, 734.0], [44.4, 734.0], [44.5, 735.0], [44.6, 735.0], [44.7, 737.0], [44.8, 737.0], [44.9, 739.0], [45.0, 739.0], [45.1, 739.0], [45.2, 740.0], [45.3, 740.0], [45.4, 740.0], [45.5, 741.0], [45.6, 745.0], [45.7, 745.0], [45.8, 746.0], [45.9, 747.0], [46.0, 747.0], [46.1, 747.0], [46.2, 747.0], [46.3, 748.0], [46.4, 748.0], [46.5, 748.0], [46.6, 748.0], [46.7, 749.0], [46.8, 749.0], [46.9, 752.0], [47.0, 754.0], [47.1, 755.0], [47.2, 755.0], [47.3, 755.0], [47.4, 755.0], [47.5, 756.0], [47.6, 756.0], [47.7, 756.0], [47.8, 759.0], [47.9, 764.0], [48.0, 764.0], [48.1, 765.0], [48.2, 768.0], [48.3, 768.0], [48.4, 768.0], [48.5, 769.0], [48.6, 774.0], [48.7, 774.0], [48.8, 778.0], [48.9, 779.0], [49.0, 781.0], [49.1, 781.0], [49.2, 782.0], [49.3, 782.0], [49.4, 783.0], [49.5, 783.0], [49.6, 783.0], [49.7, 785.0], [49.8, 785.0], [49.9, 785.0], [50.0, 788.0], [50.1, 788.0], [50.2, 788.0], [50.3, 788.0], [50.4, 789.0], [50.5, 792.0], [50.6, 792.0], [50.7, 795.0], [50.8, 796.0], [50.9, 799.0], [51.0, 799.0], [51.1, 800.0], [51.2, 800.0], [51.3, 803.0], [51.4, 803.0], [51.5, 803.0], [51.6, 804.0], [51.7, 804.0], [51.8, 804.0], [51.9, 805.0], [52.0, 806.0], [52.1, 806.0], [52.2, 809.0], [52.3, 810.0], [52.4, 810.0], [52.5, 810.0], [52.6, 810.0], [52.7, 815.0], [52.8, 816.0], [52.9, 816.0], [53.0, 819.0], [53.1, 827.0], [53.2, 834.0], [53.3, 834.0], [53.4, 835.0], [53.5, 835.0], [53.6, 835.0], [53.7, 841.0], [53.8, 842.0], [53.9, 844.0], [54.0, 844.0], [54.1, 845.0], [54.2, 847.0], [54.3, 847.0], [54.4, 847.0], [54.5, 849.0], [54.6, 850.0], [54.7, 851.0], [54.8, 851.0], [54.9, 857.0], [55.0, 858.0], [55.1, 858.0], [55.2, 859.0], [55.3, 864.0], [55.4, 864.0], [55.5, 864.0], [55.6, 865.0], [55.7, 865.0], [55.8, 867.0], [55.9, 867.0], [56.0, 867.0], [56.1, 867.0], [56.2, 867.0], [56.3, 867.0], [56.4, 868.0], [56.5, 868.0], [56.6, 869.0], [56.7, 869.0], [56.8, 870.0], [56.9, 870.0], [57.0, 870.0], [57.1, 871.0], [57.2, 874.0], [57.3, 881.0], [57.4, 881.0], [57.5, 882.0], [57.6, 882.0], [57.7, 884.0], [57.8, 884.0], [57.9, 888.0], [58.0, 888.0], [58.1, 889.0], [58.2, 889.0], [58.3, 890.0], [58.4, 893.0], [58.5, 893.0], [58.6, 894.0], [58.7, 894.0], [58.8, 894.0], [58.9, 894.0], [59.0, 894.0], [59.1, 895.0], [59.2, 895.0], [59.3, 895.0], [59.4, 899.0], [59.5, 899.0], [59.6, 901.0], [59.7, 901.0], [59.8, 901.0], [59.9, 903.0], [60.0, 904.0], [60.1, 904.0], [60.2, 906.0], [60.3, 906.0], [60.4, 906.0], [60.5, 909.0], [60.6, 909.0], [60.7, 911.0], [60.8, 911.0], [60.9, 911.0], [61.0, 911.0], [61.1, 912.0], [61.2, 912.0], [61.3, 913.0], [61.4, 914.0], [61.5, 916.0], [61.6, 916.0], [61.7, 923.0], [61.8, 924.0], [61.9, 924.0], [62.0, 927.0], [62.1, 930.0], [62.2, 931.0], [62.3, 931.0], [62.4, 932.0], [62.5, 938.0], [62.6, 939.0], [62.7, 939.0], [62.8, 939.0], [62.9, 939.0], [63.0, 941.0], [63.1, 941.0], [63.2, 947.0], [63.3, 949.0], [63.4, 949.0], [63.5, 950.0], [63.6, 950.0], [63.7, 954.0], [63.8, 954.0], [63.9, 954.0], [64.0, 954.0], [64.1, 955.0], [64.2, 955.0], [64.3, 955.0], [64.4, 955.0], [64.5, 956.0], [64.6, 956.0], [64.7, 957.0], [64.8, 962.0], [64.9, 962.0], [65.0, 962.0], [65.1, 964.0], [65.2, 966.0], [65.3, 966.0], [65.4, 967.0], [65.5, 969.0], [65.6, 970.0], [65.7, 970.0], [65.8, 971.0], [65.9, 972.0], [66.0, 973.0], [66.1, 973.0], [66.2, 976.0], [66.3, 976.0], [66.4, 980.0], [66.5, 980.0], [66.6, 984.0], [66.7, 989.0], [66.8, 989.0], [66.9, 991.0], [67.0, 991.0], [67.1, 991.0], [67.2, 991.0], [67.3, 992.0], [67.4, 992.0], [67.5, 995.0], [67.6, 995.0], [67.7, 995.0], [67.8, 998.0], [67.9, 998.0], [68.0, 998.0], [68.1, 998.0], [68.2, 1000.0], [68.3, 1000.0], [68.4, 1000.0], [68.5, 1000.0], [68.6, 1003.0], [68.7, 1003.0], [68.8, 1004.0], [68.9, 1006.0], [69.0, 1009.0], [69.1, 1009.0], [69.2, 1009.0], [69.3, 1012.0], [69.4, 1013.0], [69.5, 1013.0], [69.6, 1014.0], [69.7, 1015.0], [69.8, 1016.0], [69.9, 1016.0], [70.0, 1016.0], [70.1, 1018.0], [70.2, 1018.0], [70.3, 1021.0], [70.4, 1022.0], [70.5, 1022.0], [70.6, 1022.0], [70.7, 1023.0], [70.8, 1023.0], [70.9, 1025.0], [71.0, 1025.0], [71.1, 1026.0], [71.2, 1026.0], [71.3, 1026.0], [71.4, 1026.0], [71.5, 1027.0], [71.6, 1028.0], [71.7, 1028.0], [71.8, 1031.0], [71.9, 1033.0], [72.0, 1034.0], [72.1, 1034.0], [72.2, 1034.0], [72.3, 1035.0], [72.4, 1035.0], [72.5, 1035.0], [72.6, 1038.0], [72.7, 1039.0], [72.8, 1040.0], [72.9, 1040.0], [73.0, 1041.0], [73.1, 1041.0], [73.2, 1045.0], [73.3, 1045.0], [73.4, 1046.0], [73.5, 1046.0], [73.6, 1046.0], [73.7, 1047.0], [73.8, 1048.0], [73.9, 1052.0], [74.0, 1052.0], [74.1, 1052.0], [74.2, 1054.0], [74.3, 1056.0], [74.4, 1056.0], [74.5, 1057.0], [74.6, 1059.0], [74.7, 1060.0], [74.8, 1060.0], [74.9, 1061.0], [75.0, 1061.0], [75.1, 1061.0], [75.2, 1061.0], [75.3, 1066.0], [75.4, 1066.0], [75.5, 1066.0], [75.6, 1067.0], [75.7, 1069.0], [75.8, 1070.0], [75.9, 1070.0], [76.0, 1070.0], [76.1, 1072.0], [76.2, 1072.0], [76.3, 1072.0], [76.4, 1077.0], [76.5, 1080.0], [76.6, 1081.0], [76.7, 1081.0], [76.8, 1083.0], [76.9, 1085.0], [77.0, 1085.0], [77.1, 1089.0], [77.2, 1091.0], [77.3, 1092.0], [77.4, 1092.0], [77.5, 1092.0], [77.6, 1093.0], [77.7, 1097.0], [77.8, 1097.0], [77.9, 1097.0], [78.0, 1098.0], [78.1, 1099.0], [78.2, 1099.0], [78.3, 1100.0], [78.4, 1100.0], [78.5, 1100.0], [78.6, 1104.0], [78.7, 1104.0], [78.8, 1106.0], [78.9, 1106.0], [79.0, 1112.0], [79.1, 1112.0], [79.2, 1115.0], [79.3, 1115.0], [79.4, 1116.0], [79.5, 1117.0], [79.6, 1120.0], [79.7, 1120.0], [79.8, 1121.0], [79.9, 1123.0], [80.0, 1123.0], [80.1, 1123.0], [80.2, 1130.0], [80.3, 1131.0], [80.4, 1131.0], [80.5, 1133.0], [80.6, 1135.0], [80.7, 1137.0], [80.8, 1137.0], [80.9, 1145.0], [81.0, 1146.0], [81.1, 1148.0], [81.2, 1148.0], [81.3, 1151.0], [81.4, 1152.0], [81.5, 1156.0], [81.6, 1156.0], [81.7, 1157.0], [81.8, 1158.0], [81.9, 1158.0], [82.0, 1158.0], [82.1, 1160.0], [82.2, 1163.0], [82.3, 1163.0], [82.4, 1165.0], [82.5, 1165.0], [82.6, 1166.0], [82.7, 1166.0], [82.8, 1168.0], [82.9, 1169.0], [83.0, 1170.0], [83.1, 1170.0], [83.2, 1171.0], [83.3, 1171.0], [83.4, 1171.0], [83.5, 1185.0], [83.6, 1187.0], [83.7, 1187.0], [83.8, 1187.0], [83.9, 1187.0], [84.0, 1188.0], [84.1, 1191.0], [84.2, 1191.0], [84.3, 1194.0], [84.4, 1194.0], [84.5, 1198.0], [84.6, 1198.0], [84.7, 1199.0], [84.8, 1203.0], [84.9, 1208.0], [85.0, 1208.0], [85.1, 1209.0], [85.2, 1211.0], [85.3, 1211.0], [85.4, 1217.0], [85.5, 1218.0], [85.6, 1221.0], [85.7, 1221.0], [85.8, 1222.0], [85.9, 1233.0], [86.0, 1235.0], [86.1, 1235.0], [86.2, 1236.0], [86.3, 1239.0], [86.4, 1246.0], [86.5, 1246.0], [86.6, 1253.0], [86.7, 1257.0], [86.8, 1257.0], [86.9, 1257.0], [87.0, 1258.0], [87.1, 1261.0], [87.2, 1261.0], [87.3, 1262.0], [87.4, 1281.0], [87.5, 1287.0], [87.6, 1287.0], [87.7, 1288.0], [87.8, 1289.0], [87.9, 1290.0], [88.0, 1290.0], [88.1, 1292.0], [88.2, 1293.0], [88.3, 1295.0], [88.4, 1295.0], [88.5, 1302.0], [88.6, 1307.0], [88.7, 1307.0], [88.8, 1309.0], [88.9, 1312.0], [89.0, 1315.0], [89.1, 1315.0], [89.2, 1317.0], [89.3, 1321.0], [89.4, 1321.0], [89.5, 1321.0], [89.6, 1324.0], [89.7, 1325.0], [89.8, 1328.0], [89.9, 1328.0], [90.0, 1329.0], [90.1, 1329.0], [90.2, 1329.0], [90.3, 1343.0], [90.4, 1343.0], [90.5, 1349.0], [90.6, 1349.0], [90.7, 1350.0], [90.8, 1353.0], [90.9, 1353.0], [91.0, 1353.0], [91.1, 1355.0], [91.2, 1359.0], [91.3, 1365.0], [91.4, 1365.0], [91.5, 1368.0], [91.6, 1368.0], [91.7, 1368.0], [91.8, 1374.0], [91.9, 1381.0], [92.0, 1386.0], [92.1, 1386.0], [92.2, 1386.0], [92.3, 1395.0], [92.4, 1402.0], [92.5, 1402.0], [92.6, 1405.0], [92.7, 1406.0], [92.8, 1408.0], [92.9, 1408.0], [93.0, 1408.0], [93.1, 1408.0], [93.2, 1422.0], [93.3, 1422.0], [93.4, 1422.0], [93.5, 1426.0], [93.6, 1426.0], [93.7, 1433.0], [93.8, 1435.0], [93.9, 1443.0], [94.0, 1443.0], [94.1, 1473.0], [94.2, 1475.0], [94.3, 1476.0], [94.4, 1476.0], [94.5, 1481.0], [94.6, 1483.0], [94.7, 1514.0], [94.8, 1514.0], [94.9, 1517.0], [95.0, 1520.0], [95.1, 1520.0], [95.2, 1585.0], [95.3, 1592.0], [95.4, 1600.0], [95.5, 1600.0], [95.6, 1607.0], [95.7, 1613.0], [95.8, 1628.0], [95.9, 1628.0], [96.0, 1638.0], [96.1, 1640.0], [96.2, 1641.0], [96.3, 1641.0], [96.4, 1662.0], [96.5, 1666.0], [96.6, 1679.0], [96.7, 1679.0], [96.8, 1685.0], [96.9, 1782.0], [97.0, 1782.0], [97.1, 1804.0], [97.2, 1850.0], [97.3, 1875.0], [97.4, 1875.0], [97.5, 1881.0], [97.6, 2095.0], [97.7, 2315.0], [97.8, 2315.0], [97.9, 2353.0], [98.0, 2408.0], [98.1, 2438.0], [98.2, 2438.0], [98.3, 2827.0], [98.4, 2851.0], [98.5, 2851.0], [98.6, 2854.0], [98.7, 2923.0], [98.8, 3046.0], [98.9, 3046.0], [99.0, 3060.0], [99.1, 3092.0], [99.2, 3150.0], [99.3, 3150.0], [99.4, 3162.0], [99.5, 3181.0], [99.6, 3309.0], [99.7, 3309.0], [99.8, 3676.0], [99.9, 3848.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 86.0, "series": [{"data": [[600.0, 79.0], [700.0, 73.0], [800.0, 63.0], [900.0, 63.0], [1000.0, 74.0], [1100.0, 48.0], [1200.0, 27.0], [1300.0, 29.0], [1400.0, 17.0], [1500.0, 5.0], [1600.0, 11.0], [100.0, 2.0], [1700.0, 1.0], [1800.0, 4.0], [2000.0, 1.0], [2300.0, 2.0], [2400.0, 2.0], [2800.0, 3.0], [2900.0, 1.0], [3000.0, 3.0], [3100.0, 3.0], [200.0, 35.0], [3300.0, 1.0], [3600.0, 1.0], [3800.0, 1.0], [300.0, 34.0], [400.0, 66.0], [500.0, 86.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 39.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 558.0, "series": [{"data": [[0.0, 138.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 558.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 39.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.765625, "minX": 1.6040151E12, "maxY": 10.0, "series": [{"data": [[1.60401516E12, 9.765625], [1.6040151E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401516E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 275.0, "minX": 1.0, "maxY": 1038.0, "series": [{"data": [[8.0, 649.0], [4.0, 733.0], [2.0, 950.0], [1.0, 1038.0], [9.0, 275.0], [10.0, 865.7754820936644], [5.0, 967.0], [6.0, 618.0], [3.0, 610.0], [7.0, 651.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 864.0054421768712]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1436.5833333333333, "minX": 1.6040151E12, "maxY": 1416679.8166666667, "series": [{"data": [[1.60401516E12, 419106.6], [1.6040151E12, 1416679.8166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401516E12, 1436.5833333333333], [1.6040151E12, 4086.45]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401516E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 820.5572916666669, "minX": 1.6040151E12, "maxY": 879.3683241252304, "series": [{"data": [[1.60401516E12, 820.5572916666669], [1.6040151E12, 879.3683241252304]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401516E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 819.4270833333329, "minX": 1.6040151E12, "maxY": 878.0239410681393, "series": [{"data": [[1.60401516E12, 819.4270833333329], [1.6040151E12, 878.0239410681393]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401516E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.06250000000000004, "minX": 1.6040151E12, "maxY": 0.15469613259668535, "series": [{"data": [[1.60401516E12, 0.06250000000000004], [1.6040151E12, 0.15469613259668535]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401516E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 169.0, "minX": 1.6040151E12, "maxY": 3848.0, "series": [{"data": [[1.60401516E12, 2438.0], [1.6040151E12, 3848.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401516E12, 237.26899829745292], [1.6040151E12, 207.58399948120118]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401516E12, 243.69590068101883], [1.6040151E12, 209.54240020751953]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401516E12, 240.83949914872647], [1.6040151E12, 208.6719997406006]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401516E12, 210.0], [1.6040151E12, 169.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401516E12, 768.5], [1.6040151E12, 803.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401516E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 445.0, "minX": 7.0, "maxY": 1094.0, "series": [{"data": [[16.0, 638.0], [8.0, 1094.0], [17.0, 565.5], [9.0, 1020.5], [18.0, 549.0], [10.0, 983.5], [20.0, 445.0], [11.0, 894.0], [12.0, 843.0], [13.0, 796.0], [14.0, 560.5], [7.0, 816.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 444.0, "minX": 7.0, "maxY": 1090.0, "series": [{"data": [[16.0, 637.5], [8.0, 1090.0], [17.0, 565.5], [9.0, 1019.0], [18.0, 547.5], [10.0, 982.5], [20.0, 444.0], [11.0, 889.5], [12.0, 842.0], [13.0, 796.0], [14.0, 560.5], [7.0, 815.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.033333333333333, "minX": 1.6040151E12, "maxY": 9.216666666666667, "series": [{"data": [[1.60401516E12, 3.033333333333333], [1.6040151E12, 9.216666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401516E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.6040151E12, "maxY": 9.05, "series": [{"data": [[1.60401516E12, 3.2], [1.6040151E12, 9.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401516E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.6040151E12, "maxY": 9.05, "series": [{"data": [[1.60401516E12, 3.2], [1.6040151E12, 9.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401516E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.6040151E12, "maxY": 9.05, "series": [{"data": [[1.60401516E12, 3.2], [1.6040151E12, 9.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401516E12, "title": "Total Transactions Per Second"}},
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

