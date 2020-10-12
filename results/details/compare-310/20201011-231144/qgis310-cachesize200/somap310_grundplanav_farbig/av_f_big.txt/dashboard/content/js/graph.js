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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 3540.0, "series": [{"data": [[0.0, 184.0], [0.1, 184.0], [0.2, 207.0], [0.3, 208.0], [0.4, 208.0], [0.5, 209.0], [0.6, 216.0], [0.7, 222.0], [0.8, 222.0], [0.9, 223.0], [1.0, 226.0], [1.1, 233.0], [1.2, 233.0], [1.3, 236.0], [1.4, 241.0], [1.5, 244.0], [1.6, 244.0], [1.7, 246.0], [1.8, 247.0], [1.9, 247.0], [2.0, 252.0], [2.1, 252.0], [2.2, 254.0], [2.3, 254.0], [2.4, 261.0], [2.5, 266.0], [2.6, 267.0], [2.7, 267.0], [2.8, 268.0], [2.9, 268.0], [3.0, 269.0], [3.1, 269.0], [3.2, 270.0], [3.3, 271.0], [3.4, 271.0], [3.5, 273.0], [3.6, 279.0], [3.7, 280.0], [3.8, 280.0], [3.9, 280.0], [4.0, 283.0], [4.1, 284.0], [4.2, 284.0], [4.3, 285.0], [4.4, 286.0], [4.5, 286.0], [4.6, 286.0], [4.7, 291.0], [4.8, 294.0], [4.9, 296.0], [5.0, 296.0], [5.1, 297.0], [5.2, 300.0], [5.3, 300.0], [5.4, 301.0], [5.5, 301.0], [5.6, 302.0], [5.7, 302.0], [5.8, 302.0], [5.9, 303.0], [6.0, 304.0], [6.1, 304.0], [6.2, 307.0], [6.3, 308.0], [6.4, 312.0], [6.5, 312.0], [6.6, 313.0], [6.7, 314.0], [6.8, 314.0], [6.9, 314.0], [7.0, 314.0], [7.1, 317.0], [7.2, 317.0], [7.3, 319.0], [7.4, 322.0], [7.5, 325.0], [7.6, 325.0], [7.7, 327.0], [7.8, 328.0], [7.9, 334.0], [8.0, 334.0], [8.1, 337.0], [8.2, 338.0], [8.3, 343.0], [8.4, 343.0], [8.5, 343.0], [8.6, 344.0], [8.7, 344.0], [8.8, 344.0], [8.9, 344.0], [9.0, 345.0], [9.1, 345.0], [9.2, 345.0], [9.3, 346.0], [9.4, 346.0], [9.5, 346.0], [9.6, 350.0], [9.7, 353.0], [9.8, 355.0], [9.9, 355.0], [10.0, 357.0], [10.1, 359.0], [10.2, 359.0], [10.3, 360.0], [10.4, 364.0], [10.5, 365.0], [10.6, 365.0], [10.7, 367.0], [10.8, 368.0], [10.9, 371.0], [11.0, 371.0], [11.1, 372.0], [11.2, 373.0], [11.3, 373.0], [11.4, 373.0], [11.5, 375.0], [11.6, 380.0], [11.7, 380.0], [11.8, 380.0], [11.9, 380.0], [12.0, 380.0], [12.1, 380.0], [12.2, 382.0], [12.3, 386.0], [12.4, 387.0], [12.5, 387.0], [12.6, 391.0], [12.7, 391.0], [12.8, 391.0], [12.9, 391.0], [13.0, 393.0], [13.1, 394.0], [13.2, 396.0], [13.3, 396.0], [13.4, 397.0], [13.5, 398.0], [13.6, 398.0], [13.7, 400.0], [13.8, 400.0], [13.9, 400.0], [14.0, 400.0], [14.1, 403.0], [14.2, 404.0], [14.3, 404.0], [14.4, 404.0], [14.5, 405.0], [14.6, 407.0], [14.7, 407.0], [14.8, 407.0], [14.9, 410.0], [15.0, 410.0], [15.1, 410.0], [15.2, 412.0], [15.3, 412.0], [15.4, 415.0], [15.5, 415.0], [15.6, 433.0], [15.7, 436.0], [15.8, 439.0], [15.9, 439.0], [16.0, 440.0], [16.1, 440.0], [16.2, 443.0], [16.3, 443.0], [16.4, 444.0], [16.5, 445.0], [16.6, 448.0], [16.7, 448.0], [16.8, 449.0], [16.9, 449.0], [17.0, 449.0], [17.1, 450.0], [17.2, 453.0], [17.3, 453.0], [17.4, 453.0], [17.5, 454.0], [17.6, 456.0], [17.7, 458.0], [17.8, 458.0], [17.9, 458.0], [18.0, 461.0], [18.1, 463.0], [18.2, 463.0], [18.3, 463.0], [18.4, 465.0], [18.5, 465.0], [18.6, 467.0], [18.7, 473.0], [18.8, 473.0], [18.9, 473.0], [19.0, 473.0], [19.1, 473.0], [19.2, 473.0], [19.3, 473.0], [19.4, 481.0], [19.5, 481.0], [19.6, 482.0], [19.7, 482.0], [19.8, 484.0], [19.9, 484.0], [20.0, 487.0], [20.1, 487.0], [20.2, 488.0], [20.3, 488.0], [20.4, 488.0], [20.5, 490.0], [20.6, 491.0], [20.7, 492.0], [20.8, 492.0], [20.9, 492.0], [21.0, 493.0], [21.1, 495.0], [21.2, 495.0], [21.3, 495.0], [21.4, 495.0], [21.5, 496.0], [21.6, 496.0], [21.7, 497.0], [21.8, 498.0], [21.9, 498.0], [22.0, 498.0], [22.1, 502.0], [22.2, 506.0], [22.3, 506.0], [22.4, 506.0], [22.5, 507.0], [22.6, 507.0], [22.7, 507.0], [22.8, 508.0], [22.9, 508.0], [23.0, 510.0], [23.1, 510.0], [23.2, 510.0], [23.3, 510.0], [23.4, 510.0], [23.5, 511.0], [23.6, 511.0], [23.7, 513.0], [23.8, 513.0], [23.9, 515.0], [24.0, 515.0], [24.1, 515.0], [24.2, 515.0], [24.3, 520.0], [24.4, 520.0], [24.5, 520.0], [24.6, 520.0], [24.7, 521.0], [24.8, 521.0], [24.9, 522.0], [25.0, 522.0], [25.1, 523.0], [25.2, 525.0], [25.3, 525.0], [25.4, 526.0], [25.5, 528.0], [25.6, 528.0], [25.7, 528.0], [25.8, 528.0], [25.9, 530.0], [26.0, 531.0], [26.1, 531.0], [26.2, 531.0], [26.3, 532.0], [26.4, 532.0], [26.5, 532.0], [26.6, 535.0], [26.7, 535.0], [26.8, 535.0], [26.9, 536.0], [27.0, 536.0], [27.1, 539.0], [27.2, 539.0], [27.3, 540.0], [27.4, 541.0], [27.5, 543.0], [27.6, 543.0], [27.7, 546.0], [27.8, 546.0], [27.9, 548.0], [28.0, 548.0], [28.1, 549.0], [28.2, 550.0], [28.3, 551.0], [28.4, 551.0], [28.5, 553.0], [28.6, 554.0], [28.7, 554.0], [28.8, 554.0], [28.9, 555.0], [29.0, 555.0], [29.1, 555.0], [29.2, 558.0], [29.3, 558.0], [29.4, 558.0], [29.5, 558.0], [29.6, 561.0], [29.7, 562.0], [29.8, 562.0], [29.9, 562.0], [30.0, 563.0], [30.1, 563.0], [30.2, 563.0], [30.3, 563.0], [30.4, 564.0], [30.5, 565.0], [30.6, 565.0], [30.7, 566.0], [30.8, 567.0], [30.9, 568.0], [31.0, 568.0], [31.1, 568.0], [31.2, 569.0], [31.3, 569.0], [31.4, 569.0], [31.5, 570.0], [31.6, 570.0], [31.7, 570.0], [31.8, 571.0], [31.9, 572.0], [32.0, 572.0], [32.1, 572.0], [32.2, 573.0], [32.3, 573.0], [32.4, 574.0], [32.5, 574.0], [32.6, 574.0], [32.7, 575.0], [32.8, 578.0], [32.9, 578.0], [33.0, 579.0], [33.1, 581.0], [33.2, 582.0], [33.3, 582.0], [33.4, 584.0], [33.5, 584.0], [33.6, 584.0], [33.7, 584.0], [33.8, 584.0], [33.9, 585.0], [34.0, 585.0], [34.1, 585.0], [34.2, 586.0], [34.3, 586.0], [34.4, 586.0], [34.5, 589.0], [34.6, 589.0], [34.7, 590.0], [34.8, 590.0], [34.9, 590.0], [35.0, 590.0], [35.1, 590.0], [35.2, 591.0], [35.3, 593.0], [35.4, 595.0], [35.5, 595.0], [35.6, 595.0], [35.7, 597.0], [35.8, 602.0], [35.9, 602.0], [36.0, 602.0], [36.1, 602.0], [36.2, 603.0], [36.3, 603.0], [36.4, 609.0], [36.5, 610.0], [36.6, 610.0], [36.7, 610.0], [36.8, 611.0], [36.9, 611.0], [37.0, 611.0], [37.1, 611.0], [37.2, 615.0], [37.3, 615.0], [37.4, 615.0], [37.5, 617.0], [37.6, 617.0], [37.7, 617.0], [37.8, 617.0], [37.9, 617.0], [38.0, 619.0], [38.1, 619.0], [38.2, 619.0], [38.3, 620.0], [38.4, 622.0], [38.5, 622.0], [38.6, 623.0], [38.7, 625.0], [38.8, 628.0], [38.9, 628.0], [39.0, 630.0], [39.1, 630.0], [39.2, 631.0], [39.3, 631.0], [39.4, 631.0], [39.5, 633.0], [39.6, 633.0], [39.7, 633.0], [39.8, 635.0], [39.9, 635.0], [40.0, 638.0], [40.1, 638.0], [40.2, 639.0], [40.3, 640.0], [40.4, 640.0], [40.5, 641.0], [40.6, 647.0], [40.7, 649.0], [40.8, 649.0], [40.9, 649.0], [41.0, 649.0], [41.1, 652.0], [41.2, 652.0], [41.3, 658.0], [41.4, 659.0], [41.5, 661.0], [41.6, 661.0], [41.7, 662.0], [41.8, 662.0], [41.9, 662.0], [42.0, 665.0], [42.1, 665.0], [42.2, 670.0], [42.3, 670.0], [42.4, 672.0], [42.5, 672.0], [42.6, 674.0], [42.7, 674.0], [42.8, 674.0], [42.9, 678.0], [43.0, 682.0], [43.1, 682.0], [43.2, 682.0], [43.3, 684.0], [43.4, 684.0], [43.5, 692.0], [43.6, 694.0], [43.7, 695.0], [43.8, 695.0], [43.9, 695.0], [44.0, 697.0], [44.1, 700.0], [44.2, 700.0], [44.3, 701.0], [44.4, 703.0], [44.5, 704.0], [44.6, 704.0], [44.7, 704.0], [44.8, 705.0], [44.9, 706.0], [45.0, 706.0], [45.1, 706.0], [45.2, 707.0], [45.3, 707.0], [45.4, 708.0], [45.5, 709.0], [45.6, 710.0], [45.7, 710.0], [45.8, 711.0], [45.9, 715.0], [46.0, 717.0], [46.1, 717.0], [46.2, 721.0], [46.3, 721.0], [46.4, 721.0], [46.5, 721.0], [46.6, 721.0], [46.7, 722.0], [46.8, 722.0], [46.9, 724.0], [47.0, 725.0], [47.1, 726.0], [47.2, 726.0], [47.3, 727.0], [47.4, 728.0], [47.5, 728.0], [47.6, 728.0], [47.7, 728.0], [47.8, 730.0], [47.9, 731.0], [48.0, 731.0], [48.1, 731.0], [48.2, 735.0], [48.3, 736.0], [48.4, 736.0], [48.5, 742.0], [48.6, 743.0], [48.7, 743.0], [48.8, 744.0], [48.9, 745.0], [49.0, 749.0], [49.1, 749.0], [49.2, 750.0], [49.3, 751.0], [49.4, 753.0], [49.5, 753.0], [49.6, 753.0], [49.7, 755.0], [49.8, 760.0], [49.9, 760.0], [50.0, 763.0], [50.1, 764.0], [50.2, 764.0], [50.3, 765.0], [50.4, 769.0], [50.5, 771.0], [50.6, 771.0], [50.7, 772.0], [50.8, 774.0], [50.9, 775.0], [51.0, 775.0], [51.1, 778.0], [51.2, 780.0], [51.3, 783.0], [51.4, 783.0], [51.5, 784.0], [51.6, 785.0], [51.7, 785.0], [51.8, 786.0], [51.9, 790.0], [52.0, 795.0], [52.1, 795.0], [52.2, 802.0], [52.3, 803.0], [52.4, 806.0], [52.5, 806.0], [52.6, 813.0], [52.7, 814.0], [52.8, 817.0], [52.9, 817.0], [53.0, 819.0], [53.1, 826.0], [53.2, 836.0], [53.3, 836.0], [53.4, 840.0], [53.5, 847.0], [53.6, 847.0], [53.7, 848.0], [53.8, 848.0], [53.9, 849.0], [54.0, 849.0], [54.1, 850.0], [54.2, 853.0], [54.3, 856.0], [54.4, 856.0], [54.5, 864.0], [54.6, 869.0], [54.7, 871.0], [54.8, 871.0], [54.9, 871.0], [55.0, 871.0], [55.1, 871.0], [55.2, 872.0], [55.3, 884.0], [55.4, 885.0], [55.5, 885.0], [55.6, 886.0], [55.7, 887.0], [55.8, 889.0], [55.9, 889.0], [56.0, 890.0], [56.1, 893.0], [56.2, 894.0], [56.3, 894.0], [56.4, 894.0], [56.5, 897.0], [56.6, 900.0], [56.7, 900.0], [56.8, 901.0], [56.9, 903.0], [57.0, 903.0], [57.1, 903.0], [57.2, 906.0], [57.3, 907.0], [57.4, 907.0], [57.5, 907.0], [57.6, 908.0], [57.7, 908.0], [57.8, 908.0], [57.9, 912.0], [58.0, 914.0], [58.1, 915.0], [58.2, 915.0], [58.3, 915.0], [58.4, 918.0], [58.5, 918.0], [58.6, 919.0], [58.7, 924.0], [58.8, 925.0], [58.9, 925.0], [59.0, 927.0], [59.1, 929.0], [59.2, 930.0], [59.3, 930.0], [59.4, 939.0], [59.5, 939.0], [59.6, 943.0], [59.7, 943.0], [59.8, 945.0], [59.9, 948.0], [60.0, 951.0], [60.1, 951.0], [60.2, 953.0], [60.3, 954.0], [60.4, 954.0], [60.5, 955.0], [60.6, 955.0], [60.7, 955.0], [60.8, 955.0], [60.9, 957.0], [61.0, 958.0], [61.1, 963.0], [61.2, 963.0], [61.3, 964.0], [61.4, 964.0], [61.5, 965.0], [61.6, 965.0], [61.7, 967.0], [61.8, 968.0], [61.9, 968.0], [62.0, 968.0], [62.1, 969.0], [62.2, 970.0], [62.3, 970.0], [62.4, 970.0], [62.5, 970.0], [62.6, 970.0], [62.7, 970.0], [62.8, 973.0], [62.9, 976.0], [63.0, 981.0], [63.1, 981.0], [63.2, 982.0], [63.3, 982.0], [63.4, 982.0], [63.5, 983.0], [63.6, 984.0], [63.7, 984.0], [63.8, 984.0], [63.9, 985.0], [64.0, 986.0], [64.1, 989.0], [64.2, 989.0], [64.3, 989.0], [64.4, 990.0], [64.5, 992.0], [64.6, 992.0], [64.7, 992.0], [64.8, 994.0], [64.9, 994.0], [65.0, 994.0], [65.1, 995.0], [65.2, 996.0], [65.3, 996.0], [65.4, 996.0], [65.5, 1000.0], [65.6, 1002.0], [65.7, 1002.0], [65.8, 1002.0], [65.9, 1004.0], [66.0, 1004.0], [66.1, 1004.0], [66.2, 1007.0], [66.3, 1008.0], [66.4, 1008.0], [66.5, 1008.0], [66.6, 1009.0], [66.7, 1010.0], [66.8, 1010.0], [66.9, 1012.0], [67.0, 1013.0], [67.1, 1016.0], [67.2, 1016.0], [67.3, 1017.0], [67.4, 1020.0], [67.5, 1030.0], [67.6, 1030.0], [67.7, 1031.0], [67.8, 1034.0], [67.9, 1037.0], [68.0, 1037.0], [68.1, 1037.0], [68.2, 1039.0], [68.3, 1039.0], [68.4, 1039.0], [68.5, 1041.0], [68.6, 1044.0], [68.7, 1044.0], [68.8, 1050.0], [68.9, 1053.0], [69.0, 1056.0], [69.1, 1056.0], [69.2, 1059.0], [69.3, 1059.0], [69.4, 1059.0], [69.5, 1059.0], [69.6, 1060.0], [69.7, 1062.0], [69.8, 1062.0], [69.9, 1062.0], [70.0, 1064.0], [70.1, 1065.0], [70.2, 1065.0], [70.3, 1066.0], [70.4, 1069.0], [70.5, 1070.0], [70.6, 1070.0], [70.7, 1072.0], [70.8, 1074.0], [70.9, 1077.0], [71.0, 1077.0], [71.1, 1079.0], [71.2, 1080.0], [71.3, 1080.0], [71.4, 1080.0], [71.5, 1082.0], [71.6, 1083.0], [71.7, 1083.0], [71.8, 1085.0], [71.9, 1086.0], [72.0, 1086.0], [72.1, 1086.0], [72.2, 1088.0], [72.3, 1092.0], [72.4, 1093.0], [72.5, 1093.0], [72.6, 1094.0], [72.7, 1095.0], [72.8, 1097.0], [72.9, 1097.0], [73.0, 1097.0], [73.1, 1098.0], [73.2, 1101.0], [73.3, 1101.0], [73.4, 1102.0], [73.5, 1102.0], [73.6, 1102.0], [73.7, 1104.0], [73.8, 1107.0], [73.9, 1111.0], [74.0, 1111.0], [74.1, 1115.0], [74.2, 1120.0], [74.3, 1120.0], [74.4, 1120.0], [74.5, 1121.0], [74.6, 1122.0], [74.7, 1127.0], [74.8, 1127.0], [74.9, 1130.0], [75.0, 1130.0], [75.1, 1130.0], [75.2, 1131.0], [75.3, 1132.0], [75.4, 1134.0], [75.5, 1134.0], [75.6, 1137.0], [75.7, 1137.0], [75.8, 1139.0], [75.9, 1139.0], [76.0, 1141.0], [76.1, 1142.0], [76.2, 1143.0], [76.3, 1143.0], [76.4, 1144.0], [76.5, 1145.0], [76.6, 1150.0], [76.7, 1150.0], [76.8, 1150.0], [76.9, 1150.0], [77.0, 1150.0], [77.1, 1151.0], [77.2, 1152.0], [77.3, 1153.0], [77.4, 1153.0], [77.5, 1156.0], [77.6, 1163.0], [77.7, 1165.0], [77.8, 1165.0], [77.9, 1166.0], [78.0, 1166.0], [78.1, 1169.0], [78.2, 1169.0], [78.3, 1170.0], [78.4, 1172.0], [78.5, 1172.0], [78.6, 1175.0], [78.7, 1176.0], [78.8, 1176.0], [78.9, 1176.0], [79.0, 1177.0], [79.1, 1178.0], [79.2, 1181.0], [79.3, 1181.0], [79.4, 1182.0], [79.5, 1184.0], [79.6, 1186.0], [79.7, 1186.0], [79.8, 1186.0], [79.9, 1189.0], [80.0, 1191.0], [80.1, 1191.0], [80.2, 1193.0], [80.3, 1194.0], [80.4, 1194.0], [80.5, 1194.0], [80.6, 1196.0], [80.7, 1198.0], [80.8, 1198.0], [80.9, 1198.0], [81.0, 1199.0], [81.1, 1201.0], [81.2, 1201.0], [81.3, 1202.0], [81.4, 1203.0], [81.5, 1205.0], [81.6, 1205.0], [81.7, 1206.0], [81.8, 1211.0], [81.9, 1211.0], [82.0, 1213.0], [82.1, 1213.0], [82.2, 1215.0], [82.3, 1215.0], [82.4, 1218.0], [82.5, 1222.0], [82.6, 1224.0], [82.7, 1224.0], [82.8, 1226.0], [82.9, 1229.0], [83.0, 1229.0], [83.1, 1229.0], [83.2, 1237.0], [83.3, 1238.0], [83.4, 1238.0], [83.5, 1241.0], [83.6, 1242.0], [83.7, 1242.0], [83.8, 1242.0], [83.9, 1243.0], [84.0, 1244.0], [84.1, 1247.0], [84.2, 1247.0], [84.3, 1249.0], [84.4, 1253.0], [84.5, 1254.0], [84.6, 1254.0], [84.7, 1256.0], [84.8, 1259.0], [84.9, 1264.0], [85.0, 1264.0], [85.1, 1264.0], [85.2, 1264.0], [85.3, 1264.0], [85.4, 1266.0], [85.5, 1273.0], [85.6, 1277.0], [85.7, 1277.0], [85.8, 1278.0], [85.9, 1279.0], [86.0, 1281.0], [86.1, 1281.0], [86.2, 1282.0], [86.3, 1283.0], [86.4, 1284.0], [86.5, 1284.0], [86.6, 1292.0], [86.7, 1293.0], [86.8, 1293.0], [86.9, 1294.0], [87.0, 1295.0], [87.1, 1297.0], [87.2, 1297.0], [87.3, 1299.0], [87.4, 1302.0], [87.5, 1304.0], [87.6, 1304.0], [87.7, 1306.0], [87.8, 1309.0], [87.9, 1310.0], [88.0, 1310.0], [88.1, 1320.0], [88.2, 1320.0], [88.3, 1322.0], [88.4, 1322.0], [88.5, 1323.0], [88.6, 1327.0], [88.7, 1327.0], [88.8, 1331.0], [88.9, 1332.0], [89.0, 1335.0], [89.1, 1335.0], [89.2, 1336.0], [89.3, 1337.0], [89.4, 1339.0], [89.5, 1339.0], [89.6, 1340.0], [89.7, 1344.0], [89.8, 1345.0], [89.9, 1345.0], [90.0, 1345.0], [90.1, 1351.0], [90.2, 1351.0], [90.3, 1352.0], [90.4, 1352.0], [90.5, 1364.0], [90.6, 1364.0], [90.7, 1365.0], [90.8, 1366.0], [90.9, 1369.0], [91.0, 1369.0], [91.1, 1372.0], [91.2, 1378.0], [91.3, 1380.0], [91.4, 1380.0], [91.5, 1381.0], [91.6, 1390.0], [91.7, 1390.0], [91.8, 1391.0], [91.9, 1395.0], [92.0, 1407.0], [92.1, 1407.0], [92.2, 1409.0], [92.3, 1413.0], [92.4, 1414.0], [92.5, 1414.0], [92.6, 1415.0], [92.7, 1415.0], [92.8, 1434.0], [92.9, 1434.0], [93.0, 1438.0], [93.1, 1443.0], [93.2, 1474.0], [93.3, 1474.0], [93.4, 1484.0], [93.5, 1485.0], [93.6, 1485.0], [93.7, 1487.0], [93.8, 1487.0], [93.9, 1507.0], [94.0, 1507.0], [94.1, 1523.0], [94.2, 1525.0], [94.3, 1526.0], [94.4, 1526.0], [94.5, 1528.0], [94.6, 1538.0], [94.7, 1556.0], [94.8, 1556.0], [94.9, 1580.0], [95.0, 1585.0], [95.1, 1585.0], [95.2, 1591.0], [95.3, 1597.0], [95.4, 1605.0], [95.5, 1605.0], [95.6, 1607.0], [95.7, 1616.0], [95.8, 1667.0], [95.9, 1667.0], [96.0, 1698.0], [96.1, 1698.0], [96.2, 1720.0], [96.3, 1720.0], [96.4, 1731.0], [96.5, 1753.0], [96.6, 1784.0], [96.7, 1784.0], [96.8, 1790.0], [96.9, 1811.0], [97.0, 1811.0], [97.1, 1836.0], [97.2, 1849.0], [97.3, 1881.0], [97.4, 1881.0], [97.5, 1914.0], [97.6, 2002.0], [97.7, 2193.0], [97.8, 2193.0], [97.9, 2238.0], [98.0, 2266.0], [98.1, 2398.0], [98.2, 2398.0], [98.3, 2432.0], [98.4, 2526.0], [98.5, 2526.0], [98.6, 2604.0], [98.7, 2802.0], [98.8, 2826.0], [98.9, 2826.0], [99.0, 2855.0], [99.1, 2916.0], [99.2, 2963.0], [99.3, 2963.0], [99.4, 3165.0], [99.5, 3174.0], [99.6, 3317.0], [99.7, 3317.0], [99.8, 3370.0], [99.9, 3540.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 101.0, "series": [{"data": [[600.0, 61.0], [700.0, 59.0], [800.0, 33.0], [900.0, 65.0], [1000.0, 57.0], [1100.0, 58.0], [1200.0, 46.0], [1300.0, 34.0], [1400.0, 14.0], [1500.0, 11.0], [100.0, 1.0], [1600.0, 6.0], [1700.0, 5.0], [1800.0, 4.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2200.0, 2.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 3.0], [2900.0, 2.0], [3100.0, 2.0], [3300.0, 2.0], [200.0, 37.0], [3500.0, 1.0], [300.0, 62.0], [400.0, 62.0], [500.0, 101.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 45.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 528.0, "series": [{"data": [[0.0, 162.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 528.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 45.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.11764705882353, "minX": 1.60246098E12, "maxY": 10.0, "series": [{"data": [[1.60246098E12, 10.0], [1.60246104E12, 9.11764705882353]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246104E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 254.0, "minX": 1.0, "maxY": 1914.0, "series": [{"data": [[8.0, 531.0], [4.0, 1914.0], [2.0, 1034.0], [1.0, 986.0], [9.0, 254.0], [10.0, 862.3884297520665], [5.0, 602.0], [6.0, 562.0], [3.0, 539.0], [7.0, 724.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 861.5510204081636]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 373.5833333333333, "minX": 1.60246098E12, "maxY": 1671499.45, "series": [{"data": [[1.60246098E12, 1671499.45], [1.60246104E12, 164282.71666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246098E12, 5149.45], [1.60246104E12, 373.5833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246104E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 762.6862745098041, "minX": 1.60246098E12, "maxY": 868.9225146198831, "series": [{"data": [[1.60246098E12, 868.9225146198831], [1.60246104E12, 762.6862745098041]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246104E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 761.4901960784315, "minX": 1.60246098E12, "maxY": 867.7587719298253, "series": [{"data": [[1.60246098E12, 867.7587719298253], [1.60246104E12, 761.4901960784315]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246104E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.14619883040935658, "minX": 1.60246098E12, "maxY": 0.17647058823529413, "series": [{"data": [[1.60246098E12, 0.14619883040935658], [1.60246104E12, 0.17647058823529413]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246104E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60246098E12, "maxY": 3540.0, "series": [{"data": [[1.60246098E12, 3540.0], [1.60246104E12, 2398.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246098E12, 222.16499983668328], [1.60246104E12, 236.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246098E12, 222.7815000653267], [1.60246104E12, 236.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246098E12, 222.50749991834164], [1.60246104E12, 236.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246098E12, 184.0], [1.60246104E12, 236.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246098E12, 776.5], [1.60246104E12, 539.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246104E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 540.0, "minX": 1.0, "maxY": 2565.0, "series": [{"data": [[4.0, 2565.0], [8.0, 983.0], [16.0, 556.5], [1.0, 986.0], [17.0, 540.0], [9.0, 1108.5], [18.0, 592.0], [10.0, 929.5], [11.0, 964.0], [12.0, 920.0], [13.0, 695.5], [14.0, 774.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 540.0, "minX": 1.0, "maxY": 2563.0, "series": [{"data": [[4.0, 2563.0], [8.0, 981.0], [16.0, 556.0], [1.0, 986.0], [17.0, 540.0], [9.0, 1107.5], [18.0, 592.0], [10.0, 928.5], [11.0, 963.0], [12.0, 919.0], [13.0, 695.0], [14.0, 774.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.60246092E12, "maxY": 11.516666666666667, "series": [{"data": [[1.60246098E12, 11.516666666666667], [1.60246092E12, 0.05], [1.60246104E12, 0.6833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246104E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.60246098E12, "maxY": 11.4, "series": [{"data": [[1.60246098E12, 11.4], [1.60246104E12, 0.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246104E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.60246098E12, "maxY": 11.4, "series": [{"data": [[1.60246098E12, 11.4], [1.60246104E12, 0.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246104E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.60246098E12, "maxY": 11.4, "series": [{"data": [[1.60246098E12, 11.4], [1.60246104E12, 0.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246104E12, "title": "Total Transactions Per Second"}},
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

