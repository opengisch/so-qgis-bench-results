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
        data: {"result": {"minY": 188.0, "minX": 0.0, "maxY": 3746.0, "series": [{"data": [[0.0, 188.0], [0.1, 188.0], [0.2, 192.0], [0.3, 195.0], [0.4, 195.0], [0.5, 196.0], [0.6, 197.0], [0.7, 199.0], [0.8, 199.0], [0.9, 205.0], [1.0, 211.0], [1.1, 212.0], [1.2, 212.0], [1.3, 212.0], [1.4, 216.0], [1.5, 221.0], [1.6, 221.0], [1.7, 221.0], [1.8, 223.0], [1.9, 223.0], [2.0, 225.0], [2.1, 238.0], [2.2, 242.0], [2.3, 242.0], [2.4, 242.0], [2.5, 244.0], [2.6, 245.0], [2.7, 245.0], [2.8, 249.0], [2.9, 250.0], [3.0, 259.0], [3.1, 259.0], [3.2, 259.0], [3.3, 259.0], [3.4, 259.0], [3.5, 263.0], [3.6, 263.0], [3.7, 263.0], [3.8, 263.0], [3.9, 267.0], [4.0, 267.0], [4.1, 268.0], [4.2, 268.0], [4.3, 270.0], [4.4, 271.0], [4.5, 271.0], [4.6, 271.0], [4.7, 273.0], [4.8, 275.0], [4.9, 276.0], [5.0, 276.0], [5.1, 277.0], [5.2, 279.0], [5.3, 279.0], [5.4, 281.0], [5.5, 282.0], [5.6, 282.0], [5.7, 282.0], [5.8, 282.0], [5.9, 282.0], [6.0, 287.0], [6.1, 287.0], [6.2, 290.0], [6.3, 291.0], [6.4, 292.0], [6.5, 292.0], [6.6, 293.0], [6.7, 295.0], [6.8, 295.0], [6.9, 297.0], [7.0, 298.0], [7.1, 299.0], [7.2, 299.0], [7.3, 301.0], [7.4, 302.0], [7.5, 304.0], [7.6, 304.0], [7.7, 307.0], [7.8, 308.0], [7.9, 312.0], [8.0, 312.0], [8.1, 315.0], [8.2, 315.0], [8.3, 316.0], [8.4, 316.0], [8.5, 319.0], [8.6, 321.0], [8.7, 321.0], [8.8, 321.0], [8.9, 322.0], [9.0, 323.0], [9.1, 323.0], [9.2, 324.0], [9.3, 327.0], [9.4, 329.0], [9.5, 329.0], [9.6, 330.0], [9.7, 330.0], [9.8, 332.0], [9.9, 332.0], [10.0, 334.0], [10.1, 334.0], [10.2, 334.0], [10.3, 334.0], [10.4, 334.0], [10.5, 335.0], [10.6, 335.0], [10.7, 335.0], [10.8, 340.0], [10.9, 340.0], [11.0, 340.0], [11.1, 343.0], [11.2, 343.0], [11.3, 344.0], [11.4, 344.0], [11.5, 344.0], [11.6, 349.0], [11.7, 349.0], [11.8, 349.0], [11.9, 351.0], [12.0, 352.0], [12.1, 352.0], [12.2, 352.0], [12.3, 355.0], [12.4, 357.0], [12.5, 357.0], [12.6, 359.0], [12.7, 362.0], [12.8, 362.0], [12.9, 362.0], [13.0, 364.0], [13.1, 364.0], [13.2, 366.0], [13.3, 366.0], [13.4, 367.0], [13.5, 368.0], [13.6, 368.0], [13.7, 370.0], [13.8, 372.0], [13.9, 373.0], [14.0, 373.0], [14.1, 376.0], [14.2, 379.0], [14.3, 386.0], [14.4, 386.0], [14.5, 387.0], [14.6, 388.0], [14.7, 388.0], [14.8, 388.0], [14.9, 390.0], [15.0, 391.0], [15.1, 391.0], [15.2, 392.0], [15.3, 392.0], [15.4, 392.0], [15.5, 392.0], [15.6, 394.0], [15.7, 394.0], [15.8, 394.0], [15.9, 394.0], [16.0, 396.0], [16.1, 396.0], [16.2, 398.0], [16.3, 398.0], [16.4, 405.0], [16.5, 405.0], [16.6, 406.0], [16.7, 406.0], [16.8, 406.0], [16.9, 408.0], [17.0, 408.0], [17.1, 408.0], [17.2, 410.0], [17.3, 411.0], [17.4, 411.0], [17.5, 412.0], [17.6, 421.0], [17.7, 421.0], [17.8, 421.0], [17.9, 421.0], [18.0, 422.0], [18.1, 435.0], [18.2, 435.0], [18.3, 440.0], [18.4, 441.0], [18.5, 441.0], [18.6, 442.0], [18.7, 443.0], [18.8, 444.0], [18.9, 444.0], [19.0, 444.0], [19.1, 446.0], [19.2, 447.0], [19.3, 447.0], [19.4, 447.0], [19.5, 450.0], [19.6, 451.0], [19.7, 451.0], [19.8, 452.0], [19.9, 453.0], [20.0, 457.0], [20.1, 457.0], [20.2, 457.0], [20.3, 457.0], [20.4, 457.0], [20.5, 458.0], [20.6, 459.0], [20.7, 460.0], [20.8, 460.0], [20.9, 461.0], [21.0, 462.0], [21.1, 464.0], [21.2, 464.0], [21.3, 472.0], [21.4, 473.0], [21.5, 473.0], [21.6, 473.0], [21.7, 478.0], [21.8, 480.0], [21.9, 480.0], [22.0, 482.0], [22.1, 483.0], [22.2, 483.0], [22.3, 483.0], [22.4, 484.0], [22.5, 486.0], [22.6, 487.0], [22.7, 487.0], [22.8, 489.0], [22.9, 491.0], [23.0, 492.0], [23.1, 492.0], [23.2, 492.0], [23.3, 493.0], [23.4, 493.0], [23.5, 495.0], [23.6, 495.0], [23.7, 496.0], [23.8, 496.0], [23.9, 496.0], [24.0, 496.0], [24.1, 499.0], [24.2, 499.0], [24.3, 501.0], [24.4, 503.0], [24.5, 504.0], [24.6, 504.0], [24.7, 504.0], [24.8, 504.0], [24.9, 505.0], [25.0, 505.0], [25.1, 506.0], [25.2, 509.0], [25.3, 509.0], [25.4, 509.0], [25.5, 510.0], [25.6, 510.0], [25.7, 510.0], [25.8, 512.0], [25.9, 514.0], [26.0, 514.0], [26.1, 514.0], [26.2, 515.0], [26.3, 516.0], [26.4, 517.0], [26.5, 517.0], [26.6, 517.0], [26.7, 518.0], [26.8, 518.0], [26.9, 521.0], [27.0, 521.0], [27.1, 524.0], [27.2, 524.0], [27.3, 527.0], [27.4, 529.0], [27.5, 530.0], [27.6, 530.0], [27.7, 530.0], [27.8, 533.0], [27.9, 534.0], [28.0, 534.0], [28.1, 535.0], [28.2, 536.0], [28.3, 539.0], [28.4, 539.0], [28.5, 540.0], [28.6, 540.0], [28.7, 540.0], [28.8, 541.0], [28.9, 542.0], [29.0, 547.0], [29.1, 547.0], [29.2, 550.0], [29.3, 551.0], [29.4, 554.0], [29.5, 554.0], [29.6, 555.0], [29.7, 556.0], [29.8, 557.0], [29.9, 557.0], [30.0, 558.0], [30.1, 559.0], [30.2, 559.0], [30.3, 559.0], [30.4, 559.0], [30.5, 560.0], [30.6, 560.0], [30.7, 563.0], [30.8, 564.0], [30.9, 564.0], [31.0, 564.0], [31.1, 564.0], [31.2, 565.0], [31.3, 566.0], [31.4, 566.0], [31.5, 566.0], [31.6, 568.0], [31.7, 568.0], [31.8, 569.0], [31.9, 570.0], [32.0, 571.0], [32.1, 571.0], [32.2, 571.0], [32.3, 572.0], [32.4, 574.0], [32.5, 574.0], [32.6, 574.0], [32.7, 580.0], [32.8, 580.0], [32.9, 580.0], [33.0, 580.0], [33.1, 581.0], [33.2, 582.0], [33.3, 582.0], [33.4, 582.0], [33.5, 583.0], [33.6, 583.0], [33.7, 587.0], [33.8, 588.0], [33.9, 589.0], [34.0, 589.0], [34.1, 589.0], [34.2, 589.0], [34.3, 592.0], [34.4, 592.0], [34.5, 592.0], [34.6, 595.0], [34.7, 597.0], [34.8, 597.0], [34.9, 597.0], [35.0, 600.0], [35.1, 600.0], [35.2, 600.0], [35.3, 601.0], [35.4, 602.0], [35.5, 602.0], [35.6, 602.0], [35.7, 602.0], [35.8, 602.0], [35.9, 602.0], [36.0, 603.0], [36.1, 605.0], [36.2, 607.0], [36.3, 607.0], [36.4, 610.0], [36.5, 610.0], [36.6, 611.0], [36.7, 611.0], [36.8, 611.0], [36.9, 613.0], [37.0, 613.0], [37.1, 616.0], [37.2, 616.0], [37.3, 617.0], [37.4, 617.0], [37.5, 617.0], [37.6, 618.0], [37.7, 626.0], [37.8, 626.0], [37.9, 629.0], [38.0, 632.0], [38.1, 632.0], [38.2, 632.0], [38.3, 633.0], [38.4, 633.0], [38.5, 633.0], [38.6, 639.0], [38.7, 641.0], [38.8, 642.0], [38.9, 642.0], [39.0, 645.0], [39.1, 645.0], [39.2, 646.0], [39.3, 646.0], [39.4, 647.0], [39.5, 651.0], [39.6, 654.0], [39.7, 654.0], [39.8, 656.0], [39.9, 664.0], [40.0, 667.0], [40.1, 667.0], [40.2, 671.0], [40.3, 676.0], [40.4, 676.0], [40.5, 676.0], [40.6, 677.0], [40.7, 678.0], [40.8, 678.0], [40.9, 678.0], [41.0, 679.0], [41.1, 680.0], [41.2, 680.0], [41.3, 682.0], [41.4, 683.0], [41.5, 685.0], [41.6, 685.0], [41.7, 686.0], [41.8, 686.0], [41.9, 686.0], [42.0, 686.0], [42.1, 687.0], [42.2, 688.0], [42.3, 688.0], [42.4, 689.0], [42.5, 690.0], [42.6, 693.0], [42.7, 693.0], [42.8, 695.0], [42.9, 699.0], [43.0, 700.0], [43.1, 700.0], [43.2, 710.0], [43.3, 711.0], [43.4, 711.0], [43.5, 713.0], [43.6, 716.0], [43.7, 717.0], [43.8, 717.0], [43.9, 718.0], [44.0, 719.0], [44.1, 720.0], [44.2, 720.0], [44.3, 720.0], [44.4, 721.0], [44.5, 723.0], [44.6, 723.0], [44.7, 726.0], [44.8, 727.0], [44.9, 728.0], [45.0, 728.0], [45.1, 730.0], [45.2, 730.0], [45.3, 730.0], [45.4, 731.0], [45.5, 735.0], [45.6, 735.0], [45.7, 735.0], [45.8, 739.0], [45.9, 743.0], [46.0, 747.0], [46.1, 747.0], [46.2, 750.0], [46.3, 750.0], [46.4, 751.0], [46.5, 751.0], [46.6, 752.0], [46.7, 754.0], [46.8, 754.0], [46.9, 760.0], [47.0, 760.0], [47.1, 761.0], [47.2, 761.0], [47.3, 766.0], [47.4, 767.0], [47.5, 767.0], [47.6, 767.0], [47.7, 768.0], [47.8, 774.0], [47.9, 774.0], [48.0, 774.0], [48.1, 776.0], [48.2, 777.0], [48.3, 777.0], [48.4, 777.0], [48.5, 778.0], [48.6, 782.0], [48.7, 782.0], [48.8, 783.0], [48.9, 783.0], [49.0, 788.0], [49.1, 788.0], [49.2, 791.0], [49.3, 792.0], [49.4, 795.0], [49.5, 795.0], [49.6, 798.0], [49.7, 799.0], [49.8, 799.0], [49.9, 799.0], [50.0, 802.0], [50.1, 804.0], [50.2, 804.0], [50.3, 806.0], [50.4, 807.0], [50.5, 808.0], [50.6, 808.0], [50.7, 809.0], [50.8, 810.0], [50.9, 810.0], [51.0, 810.0], [51.1, 811.0], [51.2, 812.0], [51.3, 814.0], [51.4, 814.0], [51.5, 817.0], [51.6, 821.0], [51.7, 821.0], [51.8, 825.0], [51.9, 826.0], [52.0, 827.0], [52.1, 827.0], [52.2, 827.0], [52.3, 828.0], [52.4, 830.0], [52.5, 830.0], [52.6, 833.0], [52.7, 834.0], [52.8, 834.0], [52.9, 834.0], [53.0, 834.0], [53.1, 836.0], [53.2, 837.0], [53.3, 837.0], [53.4, 839.0], [53.5, 840.0], [53.6, 840.0], [53.7, 844.0], [53.8, 844.0], [53.9, 845.0], [54.0, 845.0], [54.1, 847.0], [54.2, 850.0], [54.3, 851.0], [54.4, 851.0], [54.5, 854.0], [54.6, 857.0], [54.7, 860.0], [54.8, 860.0], [54.9, 860.0], [55.0, 861.0], [55.1, 861.0], [55.2, 863.0], [55.3, 863.0], [55.4, 864.0], [55.5, 864.0], [55.6, 867.0], [55.7, 867.0], [55.8, 869.0], [55.9, 869.0], [56.0, 874.0], [56.1, 878.0], [56.2, 878.0], [56.3, 878.0], [56.4, 879.0], [56.5, 882.0], [56.6, 888.0], [56.7, 888.0], [56.8, 891.0], [56.9, 894.0], [57.0, 894.0], [57.1, 898.0], [57.2, 901.0], [57.3, 905.0], [57.4, 905.0], [57.5, 907.0], [57.6, 911.0], [57.7, 912.0], [57.8, 912.0], [57.9, 913.0], [58.0, 914.0], [58.1, 915.0], [58.2, 915.0], [58.3, 922.0], [58.4, 923.0], [58.5, 923.0], [58.6, 924.0], [58.7, 924.0], [58.8, 925.0], [58.9, 925.0], [59.0, 927.0], [59.1, 930.0], [59.2, 930.0], [59.3, 930.0], [59.4, 931.0], [59.5, 935.0], [59.6, 937.0], [59.7, 937.0], [59.8, 938.0], [59.9, 946.0], [60.0, 946.0], [60.1, 946.0], [60.2, 953.0], [60.3, 954.0], [60.4, 954.0], [60.5, 955.0], [60.6, 955.0], [60.7, 963.0], [60.8, 963.0], [60.9, 964.0], [61.0, 965.0], [61.1, 965.0], [61.2, 965.0], [61.3, 966.0], [61.4, 967.0], [61.5, 968.0], [61.6, 968.0], [61.7, 968.0], [61.8, 970.0], [61.9, 970.0], [62.0, 971.0], [62.1, 971.0], [62.2, 973.0], [62.3, 973.0], [62.4, 976.0], [62.5, 977.0], [62.6, 980.0], [62.7, 980.0], [62.8, 981.0], [62.9, 982.0], [63.0, 990.0], [63.1, 990.0], [63.2, 992.0], [63.3, 993.0], [63.4, 993.0], [63.5, 993.0], [63.6, 994.0], [63.7, 995.0], [63.8, 995.0], [63.9, 995.0], [64.0, 997.0], [64.1, 997.0], [64.2, 997.0], [64.3, 998.0], [64.4, 998.0], [64.5, 1000.0], [64.6, 1000.0], [64.7, 1001.0], [64.8, 1001.0], [64.9, 1002.0], [65.0, 1002.0], [65.1, 1004.0], [65.2, 1005.0], [65.3, 1005.0], [65.4, 1006.0], [65.5, 1010.0], [65.6, 1011.0], [65.7, 1011.0], [65.8, 1012.0], [65.9, 1016.0], [66.0, 1019.0], [66.1, 1019.0], [66.2, 1022.0], [66.3, 1022.0], [66.4, 1023.0], [66.5, 1023.0], [66.6, 1025.0], [66.7, 1025.0], [66.8, 1025.0], [66.9, 1025.0], [67.0, 1025.0], [67.1, 1030.0], [67.2, 1030.0], [67.3, 1031.0], [67.4, 1031.0], [67.5, 1033.0], [67.6, 1033.0], [67.7, 1036.0], [67.8, 1036.0], [67.9, 1038.0], [68.0, 1038.0], [68.1, 1040.0], [68.2, 1044.0], [68.3, 1045.0], [68.4, 1045.0], [68.5, 1047.0], [68.6, 1047.0], [68.7, 1047.0], [68.8, 1048.0], [68.9, 1049.0], [69.0, 1051.0], [69.1, 1051.0], [69.2, 1052.0], [69.3, 1053.0], [69.4, 1053.0], [69.5, 1053.0], [69.6, 1054.0], [69.7, 1055.0], [69.8, 1056.0], [69.9, 1056.0], [70.0, 1056.0], [70.1, 1056.0], [70.2, 1056.0], [70.3, 1063.0], [70.4, 1063.0], [70.5, 1067.0], [70.6, 1067.0], [70.7, 1068.0], [70.8, 1069.0], [70.9, 1079.0], [71.0, 1079.0], [71.1, 1079.0], [71.2, 1079.0], [71.3, 1081.0], [71.4, 1081.0], [71.5, 1081.0], [71.6, 1081.0], [71.7, 1081.0], [71.8, 1084.0], [71.9, 1085.0], [72.0, 1087.0], [72.1, 1087.0], [72.2, 1091.0], [72.3, 1091.0], [72.4, 1091.0], [72.5, 1091.0], [72.6, 1094.0], [72.7, 1096.0], [72.8, 1098.0], [72.9, 1098.0], [73.0, 1100.0], [73.1, 1107.0], [73.2, 1109.0], [73.3, 1109.0], [73.4, 1112.0], [73.5, 1114.0], [73.6, 1114.0], [73.7, 1115.0], [73.8, 1115.0], [73.9, 1115.0], [74.0, 1115.0], [74.1, 1116.0], [74.2, 1116.0], [74.3, 1117.0], [74.4, 1117.0], [74.5, 1118.0], [74.6, 1119.0], [74.7, 1119.0], [74.8, 1119.0], [74.9, 1120.0], [75.0, 1121.0], [75.1, 1121.0], [75.2, 1122.0], [75.3, 1124.0], [75.4, 1124.0], [75.5, 1124.0], [75.6, 1125.0], [75.7, 1126.0], [75.8, 1127.0], [75.9, 1127.0], [76.0, 1128.0], [76.1, 1128.0], [76.2, 1129.0], [76.3, 1129.0], [76.4, 1133.0], [76.5, 1135.0], [76.6, 1141.0], [76.7, 1141.0], [76.8, 1144.0], [76.9, 1146.0], [77.0, 1146.0], [77.1, 1146.0], [77.2, 1147.0], [77.3, 1151.0], [77.4, 1151.0], [77.5, 1152.0], [77.6, 1153.0], [77.7, 1157.0], [77.8, 1157.0], [77.9, 1157.0], [78.0, 1158.0], [78.1, 1158.0], [78.2, 1158.0], [78.3, 1166.0], [78.4, 1169.0], [78.5, 1169.0], [78.6, 1170.0], [78.7, 1175.0], [78.8, 1177.0], [78.9, 1177.0], [79.0, 1177.0], [79.1, 1178.0], [79.2, 1181.0], [79.3, 1181.0], [79.4, 1182.0], [79.5, 1185.0], [79.6, 1185.0], [79.7, 1185.0], [79.8, 1187.0], [79.9, 1188.0], [80.0, 1189.0], [80.1, 1189.0], [80.2, 1192.0], [80.3, 1197.0], [80.4, 1197.0], [80.5, 1201.0], [80.6, 1207.0], [80.7, 1207.0], [80.8, 1207.0], [80.9, 1209.0], [81.0, 1210.0], [81.1, 1211.0], [81.2, 1211.0], [81.3, 1213.0], [81.4, 1217.0], [81.5, 1223.0], [81.6, 1223.0], [81.7, 1229.0], [81.8, 1232.0], [81.9, 1232.0], [82.0, 1234.0], [82.1, 1235.0], [82.2, 1236.0], [82.3, 1236.0], [82.4, 1237.0], [82.5, 1240.0], [82.6, 1241.0], [82.7, 1241.0], [82.8, 1241.0], [82.9, 1245.0], [83.0, 1246.0], [83.1, 1246.0], [83.2, 1247.0], [83.3, 1248.0], [83.4, 1248.0], [83.5, 1251.0], [83.6, 1254.0], [83.7, 1254.0], [83.8, 1254.0], [83.9, 1254.0], [84.0, 1256.0], [84.1, 1257.0], [84.2, 1257.0], [84.3, 1259.0], [84.4, 1262.0], [84.5, 1266.0], [84.6, 1266.0], [84.7, 1266.0], [84.8, 1269.0], [84.9, 1270.0], [85.0, 1270.0], [85.1, 1273.0], [85.2, 1275.0], [85.3, 1275.0], [85.4, 1277.0], [85.5, 1277.0], [85.6, 1281.0], [85.7, 1281.0], [85.8, 1283.0], [85.9, 1289.0], [86.0, 1290.0], [86.1, 1290.0], [86.2, 1291.0], [86.3, 1295.0], [86.4, 1296.0], [86.5, 1296.0], [86.6, 1296.0], [86.7, 1307.0], [86.8, 1307.0], [86.9, 1308.0], [87.0, 1310.0], [87.1, 1313.0], [87.2, 1313.0], [87.3, 1314.0], [87.4, 1317.0], [87.5, 1323.0], [87.6, 1323.0], [87.7, 1331.0], [87.8, 1331.0], [87.9, 1336.0], [88.0, 1336.0], [88.1, 1339.0], [88.2, 1340.0], [88.3, 1340.0], [88.4, 1340.0], [88.5, 1351.0], [88.6, 1357.0], [88.7, 1357.0], [88.8, 1359.0], [88.9, 1360.0], [89.0, 1363.0], [89.1, 1363.0], [89.2, 1366.0], [89.3, 1373.0], [89.4, 1377.0], [89.5, 1377.0], [89.6, 1377.0], [89.7, 1380.0], [89.8, 1383.0], [89.9, 1383.0], [90.0, 1386.0], [90.1, 1390.0], [90.2, 1390.0], [90.3, 1390.0], [90.4, 1396.0], [90.5, 1406.0], [90.6, 1406.0], [90.7, 1411.0], [90.8, 1421.0], [90.9, 1422.0], [91.0, 1422.0], [91.1, 1428.0], [91.2, 1435.0], [91.3, 1441.0], [91.4, 1441.0], [91.5, 1451.0], [91.6, 1453.0], [91.7, 1453.0], [91.8, 1454.0], [91.9, 1462.0], [92.0, 1463.0], [92.1, 1463.0], [92.2, 1464.0], [92.3, 1465.0], [92.4, 1471.0], [92.5, 1471.0], [92.6, 1471.0], [92.7, 1477.0], [92.8, 1490.0], [92.9, 1490.0], [93.0, 1497.0], [93.1, 1503.0], [93.2, 1518.0], [93.3, 1518.0], [93.4, 1519.0], [93.5, 1530.0], [93.6, 1530.0], [93.7, 1530.0], [93.8, 1545.0], [93.9, 1557.0], [94.0, 1557.0], [94.1, 1559.0], [94.2, 1565.0], [94.3, 1591.0], [94.4, 1591.0], [94.5, 1596.0], [94.6, 1600.0], [94.7, 1623.0], [94.8, 1623.0], [94.9, 1651.0], [95.0, 1660.0], [95.1, 1660.0], [95.2, 1691.0], [95.3, 1755.0], [95.4, 1778.0], [95.5, 1778.0], [95.6, 1785.0], [95.7, 1790.0], [95.8, 1790.0], [95.9, 1790.0], [96.0, 1835.0], [96.1, 1843.0], [96.2, 1893.0], [96.3, 1893.0], [96.4, 1897.0], [96.5, 1903.0], [96.6, 1937.0], [96.7, 1937.0], [96.8, 1953.0], [96.9, 1968.0], [97.0, 1968.0], [97.1, 1983.0], [97.2, 2028.0], [97.3, 2079.0], [97.4, 2079.0], [97.5, 2169.0], [97.6, 2255.0], [97.7, 2267.0], [97.8, 2267.0], [97.9, 2274.0], [98.0, 2420.0], [98.1, 2429.0], [98.2, 2429.0], [98.3, 2597.0], [98.4, 2666.0], [98.5, 2666.0], [98.6, 2868.0], [98.7, 2876.0], [98.8, 2894.0], [98.9, 2894.0], [99.0, 3108.0], [99.1, 3130.0], [99.2, 3151.0], [99.3, 3151.0], [99.4, 3269.0], [99.5, 3411.0], [99.6, 3456.0], [99.7, 3456.0], [99.8, 3555.0], [99.9, 3746.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 79.0, "series": [{"data": [[600.0, 59.0], [700.0, 51.0], [800.0, 53.0], [900.0, 54.0], [1000.0, 62.0], [1100.0, 55.0], [1200.0, 46.0], [1300.0, 28.0], [1400.0, 19.0], [1500.0, 11.0], [1600.0, 5.0], [100.0, 6.0], [1700.0, 5.0], [1800.0, 4.0], [1900.0, 5.0], [2000.0, 2.0], [2100.0, 1.0], [2200.0, 3.0], [2400.0, 2.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 3.0], [3100.0, 3.0], [3200.0, 1.0], [200.0, 47.0], [3400.0, 2.0], [3500.0, 1.0], [3700.0, 1.0], [300.0, 67.0], [400.0, 58.0], [500.0, 79.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 51.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 506.0, "series": [{"data": [[0.0, 178.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 506.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 51.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.93202416918429, "minX": 1.60374432E12, "maxY": 10.0, "series": [{"data": [[1.60374438E12, 9.93202416918429], [1.60374432E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374438E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 273.0, "minX": 1.0, "maxY": 2274.0, "series": [{"data": [[8.0, 273.0], [4.0, 1002.0], [2.0, 686.0], [1.0, 973.0], [9.0, 527.0], [10.0, 870.4338842975208], [5.0, 517.0], [6.0, 632.0], [3.0, 1518.0], [7.0, 2274.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 871.2068027210885]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 552.3, "minX": 1.60374432E12, "maxY": 1552585.6166666667, "series": [{"data": [[1.60374438E12, 1552585.6166666667], [1.60374432E12, 283198.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60374438E12, 4970.733333333334], [1.60374432E12, 552.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374438E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 845.5271903323271, "minX": 1.60374432E12, "maxY": 1104.082191780822, "series": [{"data": [[1.60374438E12, 845.5271903323271], [1.60374432E12, 1104.082191780822]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374438E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 844.339879154078, "minX": 1.60374432E12, "maxY": 1102.5479452054794, "series": [{"data": [[1.60374438E12, 844.339879154078], [1.60374432E12, 1102.5479452054794]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374438E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.018126888217522657, "minX": 1.60374432E12, "maxY": 1.1643835616438347, "series": [{"data": [[1.60374438E12, 0.018126888217522657], [1.60374432E12, 1.1643835616438347]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374438E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 188.0, "minX": 1.60374432E12, "maxY": 3746.0, "series": [{"data": [[1.60374438E12, 3746.0], [1.60374432E12, 3555.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60374438E12, 198.93399968385697], [1.60374432E12, 225.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60374438E12, 202.38220037937165], [1.60374432E12, 225.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60374438E12, 200.79099952578545], [1.60374432E12, 225.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60374438E12, 188.0], [1.60374432E12, 225.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60374438E12, 806.5], [1.60374432E12, 739.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374438E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 547.0, "minX": 3.0, "maxY": 2597.0, "series": [{"data": [[8.0, 1023.5], [9.0, 913.5], [10.0, 976.5], [11.0, 854.0], [3.0, 2597.0], [12.0, 987.5], [13.0, 687.0], [14.0, 583.0], [15.0, 600.0], [16.0, 684.5], [17.0, 558.0], [19.0, 547.0], [7.0, 1181.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 547.0, "minX": 3.0, "maxY": 2593.0, "series": [{"data": [[8.0, 1022.5], [9.0, 912.5], [10.0, 975.0], [11.0, 854.0], [3.0, 2593.0], [12.0, 986.0], [13.0, 686.0], [14.0, 582.5], [15.0, 599.0], [16.0, 684.0], [17.0, 558.0], [19.0, 547.0], [7.0, 1180.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.3833333333333333, "minX": 1.60374432E12, "maxY": 10.866666666666667, "series": [{"data": [[1.60374438E12, 10.866666666666667], [1.60374432E12, 1.3833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374438E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2166666666666666, "minX": 1.60374432E12, "maxY": 11.033333333333333, "series": [{"data": [[1.60374438E12, 11.033333333333333], [1.60374432E12, 1.2166666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374438E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2166666666666666, "minX": 1.60374432E12, "maxY": 11.033333333333333, "series": [{"data": [[1.60374438E12, 11.033333333333333], [1.60374432E12, 1.2166666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374438E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2166666666666666, "minX": 1.60374432E12, "maxY": 11.033333333333333, "series": [{"data": [[1.60374438E12, 11.033333333333333], [1.60374432E12, 1.2166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374438E12, "title": "Total Transactions Per Second"}},
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

