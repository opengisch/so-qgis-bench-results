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
        data: {"result": {"minY": 181.0, "minX": 0.0, "maxY": 3930.0, "series": [{"data": [[0.0, 181.0], [0.1, 181.0], [0.2, 187.0], [0.3, 188.0], [0.4, 188.0], [0.5, 193.0], [0.6, 196.0], [0.7, 197.0], [0.8, 197.0], [0.9, 198.0], [1.0, 203.0], [1.1, 206.0], [1.2, 206.0], [1.3, 210.0], [1.4, 212.0], [1.5, 214.0], [1.6, 214.0], [1.7, 218.0], [1.8, 221.0], [1.9, 221.0], [2.0, 222.0], [2.1, 222.0], [2.2, 223.0], [2.3, 223.0], [2.4, 229.0], [2.5, 231.0], [2.6, 232.0], [2.7, 232.0], [2.8, 234.0], [2.9, 235.0], [3.0, 244.0], [3.1, 244.0], [3.2, 244.0], [3.3, 245.0], [3.4, 245.0], [3.5, 252.0], [3.6, 253.0], [3.7, 255.0], [3.8, 255.0], [3.9, 259.0], [4.0, 260.0], [4.1, 261.0], [4.2, 261.0], [4.3, 263.0], [4.4, 263.0], [4.5, 265.0], [4.6, 265.0], [4.7, 270.0], [4.8, 270.0], [4.9, 270.0], [5.0, 270.0], [5.1, 273.0], [5.2, 273.0], [5.3, 273.0], [5.4, 280.0], [5.5, 291.0], [5.6, 293.0], [5.7, 293.0], [5.8, 293.0], [5.9, 294.0], [6.0, 295.0], [6.1, 295.0], [6.2, 295.0], [6.3, 298.0], [6.4, 299.0], [6.5, 299.0], [6.6, 301.0], [6.7, 306.0], [6.8, 306.0], [6.9, 308.0], [7.0, 309.0], [7.1, 311.0], [7.2, 311.0], [7.3, 312.0], [7.4, 312.0], [7.5, 316.0], [7.6, 316.0], [7.7, 316.0], [7.8, 316.0], [7.9, 317.0], [8.0, 317.0], [8.1, 321.0], [8.2, 322.0], [8.3, 322.0], [8.4, 322.0], [8.5, 324.0], [8.6, 324.0], [8.7, 324.0], [8.8, 325.0], [8.9, 325.0], [9.0, 327.0], [9.1, 327.0], [9.2, 327.0], [9.3, 327.0], [9.4, 329.0], [9.5, 329.0], [9.6, 329.0], [9.7, 330.0], [9.8, 331.0], [9.9, 331.0], [10.0, 332.0], [10.1, 336.0], [10.2, 336.0], [10.3, 339.0], [10.4, 341.0], [10.5, 342.0], [10.6, 342.0], [10.7, 346.0], [10.8, 348.0], [10.9, 348.0], [11.0, 348.0], [11.1, 349.0], [11.2, 351.0], [11.3, 352.0], [11.4, 352.0], [11.5, 354.0], [11.6, 355.0], [11.7, 355.0], [11.8, 356.0], [11.9, 356.0], [12.0, 358.0], [12.1, 358.0], [12.2, 364.0], [12.3, 371.0], [12.4, 371.0], [12.5, 371.0], [12.6, 372.0], [12.7, 376.0], [12.8, 376.0], [12.9, 376.0], [13.0, 379.0], [13.1, 379.0], [13.2, 380.0], [13.3, 380.0], [13.4, 380.0], [13.5, 381.0], [13.6, 381.0], [13.7, 382.0], [13.8, 387.0], [13.9, 388.0], [14.0, 388.0], [14.1, 389.0], [14.2, 390.0], [14.3, 394.0], [14.4, 394.0], [14.5, 395.0], [14.6, 395.0], [14.7, 395.0], [14.8, 395.0], [14.9, 398.0], [15.0, 401.0], [15.1, 401.0], [15.2, 403.0], [15.3, 404.0], [15.4, 404.0], [15.5, 404.0], [15.6, 405.0], [15.7, 406.0], [15.8, 409.0], [15.9, 409.0], [16.0, 409.0], [16.1, 410.0], [16.2, 410.0], [16.3, 410.0], [16.4, 411.0], [16.5, 411.0], [16.6, 415.0], [16.7, 415.0], [16.8, 416.0], [16.9, 417.0], [17.0, 417.0], [17.1, 418.0], [17.2, 419.0], [17.3, 423.0], [17.4, 423.0], [17.5, 425.0], [17.6, 426.0], [17.7, 427.0], [17.8, 427.0], [17.9, 428.0], [18.0, 429.0], [18.1, 432.0], [18.2, 432.0], [18.3, 437.0], [18.4, 437.0], [18.5, 437.0], [18.6, 440.0], [18.7, 441.0], [18.8, 442.0], [18.9, 442.0], [19.0, 443.0], [19.1, 444.0], [19.2, 445.0], [19.3, 445.0], [19.4, 448.0], [19.5, 453.0], [19.6, 454.0], [19.7, 454.0], [19.8, 454.0], [19.9, 457.0], [20.0, 458.0], [20.1, 458.0], [20.2, 463.0], [20.3, 469.0], [20.4, 469.0], [20.5, 473.0], [20.6, 474.0], [20.7, 475.0], [20.8, 475.0], [20.9, 477.0], [21.0, 479.0], [21.1, 479.0], [21.2, 479.0], [21.3, 480.0], [21.4, 480.0], [21.5, 482.0], [21.6, 482.0], [21.7, 482.0], [21.8, 487.0], [21.9, 487.0], [22.0, 489.0], [22.1, 494.0], [22.2, 495.0], [22.3, 495.0], [22.4, 499.0], [22.5, 501.0], [22.6, 506.0], [22.7, 506.0], [22.8, 507.0], [22.9, 511.0], [23.0, 513.0], [23.1, 513.0], [23.2, 514.0], [23.3, 516.0], [23.4, 516.0], [23.5, 517.0], [23.6, 520.0], [23.7, 521.0], [23.8, 521.0], [23.9, 521.0], [24.0, 525.0], [24.1, 526.0], [24.2, 526.0], [24.3, 527.0], [24.4, 528.0], [24.5, 529.0], [24.6, 529.0], [24.7, 530.0], [24.8, 531.0], [24.9, 532.0], [25.0, 532.0], [25.1, 533.0], [25.2, 535.0], [25.3, 535.0], [25.4, 537.0], [25.5, 538.0], [25.6, 538.0], [25.7, 538.0], [25.8, 539.0], [25.9, 540.0], [26.0, 540.0], [26.1, 540.0], [26.2, 540.0], [26.3, 543.0], [26.4, 545.0], [26.5, 545.0], [26.6, 545.0], [26.7, 547.0], [26.8, 547.0], [26.9, 547.0], [27.0, 549.0], [27.1, 550.0], [27.2, 550.0], [27.3, 551.0], [27.4, 551.0], [27.5, 553.0], [27.6, 553.0], [27.7, 555.0], [27.8, 558.0], [27.9, 558.0], [28.0, 558.0], [28.1, 561.0], [28.2, 563.0], [28.3, 564.0], [28.4, 564.0], [28.5, 565.0], [28.6, 566.0], [28.7, 566.0], [28.8, 567.0], [28.9, 567.0], [29.0, 568.0], [29.1, 568.0], [29.2, 568.0], [29.3, 569.0], [29.4, 570.0], [29.5, 570.0], [29.6, 572.0], [29.7, 578.0], [29.8, 581.0], [29.9, 581.0], [30.0, 583.0], [30.1, 583.0], [30.2, 583.0], [30.3, 585.0], [30.4, 585.0], [30.5, 587.0], [30.6, 587.0], [30.7, 592.0], [30.8, 593.0], [30.9, 593.0], [31.0, 593.0], [31.1, 593.0], [31.2, 594.0], [31.3, 594.0], [31.4, 594.0], [31.5, 599.0], [31.6, 599.0], [31.7, 599.0], [31.8, 602.0], [31.9, 602.0], [32.0, 605.0], [32.1, 605.0], [32.2, 605.0], [32.3, 606.0], [32.4, 606.0], [32.5, 606.0], [32.6, 607.0], [32.7, 608.0], [32.8, 608.0], [32.9, 608.0], [33.0, 609.0], [33.1, 611.0], [33.2, 611.0], [33.3, 611.0], [33.4, 611.0], [33.5, 614.0], [33.6, 614.0], [33.7, 617.0], [33.8, 620.0], [33.9, 623.0], [34.0, 623.0], [34.1, 625.0], [34.2, 626.0], [34.3, 627.0], [34.4, 627.0], [34.5, 628.0], [34.6, 630.0], [34.7, 632.0], [34.8, 632.0], [34.9, 632.0], [35.0, 633.0], [35.1, 633.0], [35.2, 636.0], [35.3, 636.0], [35.4, 637.0], [35.5, 637.0], [35.6, 638.0], [35.7, 641.0], [35.8, 643.0], [35.9, 643.0], [36.0, 643.0], [36.1, 644.0], [36.2, 645.0], [36.3, 645.0], [36.4, 646.0], [36.5, 649.0], [36.6, 653.0], [36.7, 653.0], [36.8, 653.0], [36.9, 656.0], [37.0, 656.0], [37.1, 656.0], [37.2, 656.0], [37.3, 659.0], [37.4, 659.0], [37.5, 659.0], [37.6, 660.0], [37.7, 661.0], [37.8, 661.0], [37.9, 663.0], [38.0, 664.0], [38.1, 664.0], [38.2, 664.0], [38.3, 665.0], [38.4, 668.0], [38.5, 668.0], [38.6, 673.0], [38.7, 674.0], [38.8, 674.0], [38.9, 674.0], [39.0, 676.0], [39.1, 677.0], [39.2, 680.0], [39.3, 680.0], [39.4, 682.0], [39.5, 683.0], [39.6, 687.0], [39.7, 687.0], [39.8, 688.0], [39.9, 689.0], [40.0, 690.0], [40.1, 690.0], [40.2, 692.0], [40.3, 694.0], [40.4, 694.0], [40.5, 694.0], [40.6, 696.0], [40.7, 697.0], [40.8, 697.0], [40.9, 697.0], [41.0, 698.0], [41.1, 699.0], [41.2, 699.0], [41.3, 700.0], [41.4, 710.0], [41.5, 710.0], [41.6, 710.0], [41.7, 712.0], [41.8, 713.0], [41.9, 713.0], [42.0, 722.0], [42.1, 722.0], [42.2, 723.0], [42.3, 723.0], [42.4, 724.0], [42.5, 725.0], [42.6, 730.0], [42.7, 730.0], [42.8, 731.0], [42.9, 737.0], [43.0, 738.0], [43.1, 738.0], [43.2, 741.0], [43.3, 745.0], [43.4, 745.0], [43.5, 745.0], [43.6, 748.0], [43.7, 749.0], [43.8, 749.0], [43.9, 752.0], [44.0, 753.0], [44.1, 753.0], [44.2, 753.0], [44.3, 753.0], [44.4, 760.0], [44.5, 763.0], [44.6, 763.0], [44.7, 763.0], [44.8, 763.0], [44.9, 764.0], [45.0, 764.0], [45.1, 764.0], [45.2, 767.0], [45.3, 767.0], [45.4, 768.0], [45.5, 769.0], [45.6, 770.0], [45.7, 770.0], [45.8, 770.0], [45.9, 772.0], [46.0, 776.0], [46.1, 776.0], [46.2, 777.0], [46.3, 778.0], [46.4, 778.0], [46.5, 778.0], [46.6, 780.0], [46.7, 785.0], [46.8, 785.0], [46.9, 787.0], [47.0, 788.0], [47.1, 789.0], [47.2, 789.0], [47.3, 797.0], [47.4, 799.0], [47.5, 799.0], [47.6, 799.0], [47.7, 806.0], [47.8, 808.0], [47.9, 813.0], [48.0, 813.0], [48.1, 817.0], [48.2, 819.0], [48.3, 824.0], [48.4, 824.0], [48.5, 824.0], [48.6, 826.0], [48.7, 826.0], [48.8, 827.0], [48.9, 828.0], [49.0, 832.0], [49.1, 832.0], [49.2, 839.0], [49.3, 843.0], [49.4, 846.0], [49.5, 846.0], [49.6, 847.0], [49.7, 847.0], [49.8, 852.0], [49.9, 852.0], [50.0, 852.0], [50.1, 854.0], [50.2, 854.0], [50.3, 855.0], [50.4, 856.0], [50.5, 858.0], [50.6, 858.0], [50.7, 858.0], [50.8, 860.0], [50.9, 861.0], [51.0, 861.0], [51.1, 864.0], [51.2, 865.0], [51.3, 869.0], [51.4, 869.0], [51.5, 869.0], [51.6, 874.0], [51.7, 874.0], [51.8, 875.0], [51.9, 875.0], [52.0, 875.0], [52.1, 875.0], [52.2, 876.0], [52.3, 876.0], [52.4, 877.0], [52.5, 877.0], [52.6, 879.0], [52.7, 880.0], [52.8, 882.0], [52.9, 882.0], [53.0, 883.0], [53.1, 883.0], [53.2, 885.0], [53.3, 885.0], [53.4, 885.0], [53.5, 888.0], [53.6, 888.0], [53.7, 889.0], [53.8, 889.0], [53.9, 890.0], [54.0, 890.0], [54.1, 891.0], [54.2, 893.0], [54.3, 894.0], [54.4, 894.0], [54.5, 895.0], [54.6, 895.0], [54.7, 895.0], [54.8, 895.0], [54.9, 898.0], [55.0, 899.0], [55.1, 899.0], [55.2, 905.0], [55.3, 907.0], [55.4, 908.0], [55.5, 908.0], [55.6, 909.0], [55.7, 911.0], [55.8, 915.0], [55.9, 915.0], [56.0, 916.0], [56.1, 916.0], [56.2, 918.0], [56.3, 918.0], [56.4, 920.0], [56.5, 923.0], [56.6, 924.0], [56.7, 924.0], [56.8, 926.0], [56.9, 927.0], [57.0, 927.0], [57.1, 927.0], [57.2, 935.0], [57.3, 942.0], [57.4, 942.0], [57.5, 946.0], [57.6, 947.0], [57.7, 948.0], [57.8, 948.0], [57.9, 949.0], [58.0, 952.0], [58.1, 955.0], [58.2, 955.0], [58.3, 957.0], [58.4, 958.0], [58.5, 958.0], [58.6, 959.0], [58.7, 959.0], [58.8, 960.0], [58.9, 960.0], [59.0, 961.0], [59.1, 961.0], [59.2, 962.0], [59.3, 962.0], [59.4, 963.0], [59.5, 964.0], [59.6, 967.0], [59.7, 967.0], [59.8, 970.0], [59.9, 972.0], [60.0, 972.0], [60.1, 972.0], [60.2, 974.0], [60.3, 975.0], [60.4, 975.0], [60.5, 975.0], [60.6, 978.0], [60.7, 978.0], [60.8, 978.0], [60.9, 983.0], [61.0, 983.0], [61.1, 989.0], [61.2, 989.0], [61.3, 995.0], [61.4, 995.0], [61.5, 995.0], [61.6, 995.0], [61.7, 995.0], [61.8, 996.0], [61.9, 996.0], [62.0, 997.0], [62.1, 998.0], [62.2, 1001.0], [62.3, 1001.0], [62.4, 1002.0], [62.5, 1005.0], [62.6, 1005.0], [62.7, 1005.0], [62.8, 1006.0], [62.9, 1008.0], [63.0, 1009.0], [63.1, 1009.0], [63.2, 1011.0], [63.3, 1013.0], [63.4, 1013.0], [63.5, 1014.0], [63.6, 1014.0], [63.7, 1015.0], [63.8, 1015.0], [63.9, 1017.0], [64.0, 1018.0], [64.1, 1019.0], [64.2, 1019.0], [64.3, 1020.0], [64.4, 1021.0], [64.5, 1022.0], [64.6, 1022.0], [64.7, 1024.0], [64.8, 1025.0], [64.9, 1028.0], [65.0, 1028.0], [65.1, 1029.0], [65.2, 1030.0], [65.3, 1030.0], [65.4, 1031.0], [65.5, 1033.0], [65.6, 1034.0], [65.7, 1034.0], [65.8, 1036.0], [65.9, 1036.0], [66.0, 1036.0], [66.1, 1036.0], [66.2, 1038.0], [66.3, 1044.0], [66.4, 1047.0], [66.5, 1047.0], [66.6, 1047.0], [66.7, 1050.0], [66.8, 1050.0], [66.9, 1050.0], [67.0, 1053.0], [67.1, 1053.0], [67.2, 1053.0], [67.3, 1055.0], [67.4, 1056.0], [67.5, 1057.0], [67.6, 1057.0], [67.7, 1057.0], [67.8, 1057.0], [67.9, 1057.0], [68.0, 1057.0], [68.1, 1057.0], [68.2, 1058.0], [68.3, 1061.0], [68.4, 1061.0], [68.5, 1062.0], [68.6, 1063.0], [68.7, 1063.0], [68.8, 1064.0], [68.9, 1064.0], [69.0, 1067.0], [69.1, 1067.0], [69.2, 1067.0], [69.3, 1070.0], [69.4, 1072.0], [69.5, 1072.0], [69.6, 1072.0], [69.7, 1074.0], [69.8, 1075.0], [69.9, 1075.0], [70.0, 1077.0], [70.1, 1082.0], [70.2, 1082.0], [70.3, 1082.0], [70.4, 1082.0], [70.5, 1082.0], [70.6, 1082.0], [70.7, 1085.0], [70.8, 1089.0], [70.9, 1092.0], [71.0, 1092.0], [71.1, 1093.0], [71.2, 1096.0], [71.3, 1096.0], [71.4, 1096.0], [71.5, 1096.0], [71.6, 1099.0], [71.7, 1099.0], [71.8, 1100.0], [71.9, 1102.0], [72.0, 1108.0], [72.1, 1108.0], [72.2, 1109.0], [72.3, 1109.0], [72.4, 1115.0], [72.5, 1115.0], [72.6, 1116.0], [72.7, 1116.0], [72.8, 1118.0], [72.9, 1118.0], [73.0, 1118.0], [73.1, 1121.0], [73.2, 1123.0], [73.3, 1123.0], [73.4, 1124.0], [73.5, 1124.0], [73.6, 1124.0], [73.7, 1125.0], [73.8, 1127.0], [73.9, 1127.0], [74.0, 1127.0], [74.1, 1129.0], [74.2, 1133.0], [74.3, 1140.0], [74.4, 1140.0], [74.5, 1148.0], [74.6, 1151.0], [74.7, 1152.0], [74.8, 1152.0], [74.9, 1154.0], [75.0, 1154.0], [75.1, 1154.0], [75.2, 1158.0], [75.3, 1159.0], [75.4, 1161.0], [75.5, 1161.0], [75.6, 1161.0], [75.7, 1162.0], [75.8, 1164.0], [75.9, 1164.0], [76.0, 1165.0], [76.1, 1168.0], [76.2, 1168.0], [76.3, 1168.0], [76.4, 1168.0], [76.5, 1170.0], [76.6, 1174.0], [76.7, 1174.0], [76.8, 1176.0], [76.9, 1177.0], [77.0, 1177.0], [77.1, 1178.0], [77.2, 1178.0], [77.3, 1182.0], [77.4, 1182.0], [77.5, 1182.0], [77.6, 1183.0], [77.7, 1184.0], [77.8, 1184.0], [77.9, 1185.0], [78.0, 1185.0], [78.1, 1188.0], [78.2, 1188.0], [78.3, 1189.0], [78.4, 1191.0], [78.5, 1191.0], [78.6, 1192.0], [78.7, 1193.0], [78.8, 1195.0], [78.9, 1195.0], [79.0, 1196.0], [79.1, 1196.0], [79.2, 1197.0], [79.3, 1197.0], [79.4, 1197.0], [79.5, 1199.0], [79.6, 1201.0], [79.7, 1201.0], [79.8, 1201.0], [79.9, 1204.0], [80.0, 1204.0], [80.1, 1204.0], [80.2, 1205.0], [80.3, 1206.0], [80.4, 1206.0], [80.5, 1206.0], [80.6, 1209.0], [80.7, 1211.0], [80.8, 1211.0], [80.9, 1211.0], [81.0, 1211.0], [81.1, 1214.0], [81.2, 1214.0], [81.3, 1214.0], [81.4, 1216.0], [81.5, 1217.0], [81.6, 1217.0], [81.7, 1219.0], [81.8, 1221.0], [81.9, 1221.0], [82.0, 1222.0], [82.1, 1223.0], [82.2, 1225.0], [82.3, 1225.0], [82.4, 1230.0], [82.5, 1231.0], [82.6, 1232.0], [82.7, 1232.0], [82.8, 1235.0], [82.9, 1237.0], [83.0, 1239.0], [83.1, 1239.0], [83.2, 1239.0], [83.3, 1248.0], [83.4, 1248.0], [83.5, 1249.0], [83.6, 1252.0], [83.7, 1255.0], [83.8, 1255.0], [83.9, 1255.0], [84.0, 1255.0], [84.1, 1256.0], [84.2, 1256.0], [84.3, 1260.0], [84.4, 1269.0], [84.5, 1270.0], [84.6, 1270.0], [84.7, 1272.0], [84.8, 1273.0], [84.9, 1277.0], [85.0, 1277.0], [85.1, 1281.0], [85.2, 1284.0], [85.3, 1284.0], [85.4, 1286.0], [85.5, 1288.0], [85.6, 1289.0], [85.7, 1289.0], [85.8, 1290.0], [85.9, 1297.0], [86.0, 1298.0], [86.1, 1298.0], [86.2, 1299.0], [86.3, 1306.0], [86.4, 1309.0], [86.5, 1309.0], [86.6, 1309.0], [86.7, 1310.0], [86.8, 1310.0], [86.9, 1315.0], [87.0, 1316.0], [87.1, 1316.0], [87.2, 1316.0], [87.3, 1319.0], [87.4, 1322.0], [87.5, 1323.0], [87.6, 1323.0], [87.7, 1324.0], [87.8, 1332.0], [87.9, 1332.0], [88.0, 1332.0], [88.1, 1333.0], [88.2, 1335.0], [88.3, 1335.0], [88.4, 1335.0], [88.5, 1335.0], [88.6, 1338.0], [88.7, 1338.0], [88.8, 1340.0], [88.9, 1341.0], [89.0, 1343.0], [89.1, 1343.0], [89.2, 1349.0], [89.3, 1350.0], [89.4, 1352.0], [89.5, 1352.0], [89.6, 1357.0], [89.7, 1366.0], [89.8, 1367.0], [89.9, 1367.0], [90.0, 1368.0], [90.1, 1373.0], [90.2, 1373.0], [90.3, 1374.0], [90.4, 1381.0], [90.5, 1385.0], [90.6, 1385.0], [90.7, 1388.0], [90.8, 1388.0], [90.9, 1388.0], [91.0, 1388.0], [91.1, 1391.0], [91.2, 1392.0], [91.3, 1394.0], [91.4, 1394.0], [91.5, 1403.0], [91.6, 1403.0], [91.7, 1403.0], [91.8, 1407.0], [91.9, 1412.0], [92.0, 1412.0], [92.1, 1412.0], [92.2, 1414.0], [92.3, 1416.0], [92.4, 1433.0], [92.5, 1433.0], [92.6, 1434.0], [92.7, 1444.0], [92.8, 1459.0], [92.9, 1459.0], [93.0, 1461.0], [93.1, 1464.0], [93.2, 1466.0], [93.3, 1466.0], [93.4, 1471.0], [93.5, 1473.0], [93.6, 1473.0], [93.7, 1475.0], [93.8, 1511.0], [93.9, 1515.0], [94.0, 1515.0], [94.1, 1516.0], [94.2, 1536.0], [94.3, 1548.0], [94.4, 1548.0], [94.5, 1552.0], [94.6, 1568.0], [94.7, 1587.0], [94.8, 1587.0], [94.9, 1594.0], [95.0, 1605.0], [95.1, 1605.0], [95.2, 1608.0], [95.3, 1611.0], [95.4, 1660.0], [95.5, 1660.0], [95.6, 1665.0], [95.7, 1702.0], [95.8, 1703.0], [95.9, 1703.0], [96.0, 1719.0], [96.1, 1721.0], [96.2, 1723.0], [96.3, 1723.0], [96.4, 1744.0], [96.5, 1772.0], [96.6, 1780.0], [96.7, 1780.0], [96.8, 1785.0], [96.9, 1798.0], [97.0, 1798.0], [97.1, 1823.0], [97.2, 1827.0], [97.3, 1828.0], [97.4, 1828.0], [97.5, 1860.0], [97.6, 1881.0], [97.7, 1984.0], [97.8, 1984.0], [97.9, 2110.0], [98.0, 2232.0], [98.1, 2954.0], [98.2, 2954.0], [98.3, 3208.0], [98.4, 3223.0], [98.5, 3223.0], [98.6, 3307.0], [98.7, 3313.0], [98.8, 3355.0], [98.9, 3355.0], [99.0, 3407.0], [99.1, 3491.0], [99.2, 3556.0], [99.3, 3556.0], [99.4, 3624.0], [99.5, 3775.0], [99.6, 3787.0], [99.7, 3787.0], [99.8, 3906.0], [99.9, 3930.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 70.0, "series": [{"data": [[600.0, 70.0], [700.0, 47.0], [800.0, 55.0], [900.0, 52.0], [1000.0, 70.0], [1100.0, 58.0], [1200.0, 49.0], [1300.0, 38.0], [1400.0, 17.0], [1500.0, 9.0], [100.0, 7.0], [1600.0, 5.0], [1700.0, 10.0], [1800.0, 5.0], [1900.0, 1.0], [2100.0, 1.0], [2200.0, 1.0], [2900.0, 1.0], [3300.0, 3.0], [3200.0, 2.0], [200.0, 41.0], [3400.0, 2.0], [3500.0, 1.0], [3600.0, 1.0], [3700.0, 2.0], [3900.0, 2.0], [300.0, 62.0], [400.0, 55.0], [500.0, 68.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 46.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 524.0, "series": [{"data": [[0.0, 165.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 524.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 46.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.902439024390244, "minX": 1.60422636E12, "maxY": 10.0, "series": [{"data": [[1.60422642E12, 10.0], [1.60422648E12, 8.902439024390244], [1.60422636E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422648E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 263.0, "minX": 1.0, "maxY": 970.0, "series": [{"data": [[8.0, 632.0], [4.0, 861.0], [2.0, 826.0], [1.0, 970.0], [9.0, 561.0], [10.0, 892.6735537190084], [5.0, 540.0], [6.0, 606.0], [3.0, 665.0], [7.0, 263.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 889.8027210884355]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7.566666666666666, "minX": 1.60422636E12, "maxY": 1727747.7333333334, "series": [{"data": [[1.60422642E12, 1727747.7333333334], [1.60422648E12, 107653.23333333334], [1.60422636E12, 366.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422642E12, 5216.783333333334], [1.60422648E12, 298.68333333333334], [1.60422636E12, 7.566666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422648E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 763.9024390243902, "minX": 1.60422636E12, "maxY": 2954.0, "series": [{"data": [[1.60422642E12, 894.2727272727271], [1.60422648E12, 763.9024390243902], [1.60422636E12, 2954.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422648E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 762.560975609756, "minX": 1.60422636E12, "maxY": 2945.0, "series": [{"data": [[1.60422642E12, 892.9956709956715], [1.60422648E12, 762.560975609756], [1.60422636E12, 2945.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422648E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60422636E12, "maxY": 17.0, "series": [{"data": [[1.60422642E12, 0.1500721500721501], [1.60422648E12, 0.0], [1.60422636E12, 17.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422648E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.60422636E12, "maxY": 3930.0, "series": [{"data": [[1.60422642E12, 3930.0], [1.60422648E12, 1984.0], [1.60422636E12, 2954.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422642E12, 197.2459998345375], [1.60422648E12, 252.0], [1.60422636E12, 2954.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422642E12, 197.870600066185], [1.60422648E12, 252.0], [1.60422636E12, 2954.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422642E12, 197.59299991726874], [1.60422648E12, 252.0], [1.60422636E12, 2954.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422642E12, 181.0], [1.60422648E12, 252.0], [1.60422636E12, 2954.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422642E12, 864.0], [1.60422648E12, 659.0], [1.60422636E12, 2954.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422648E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 407.0, "minX": 1.0, "maxY": 1962.0, "series": [{"data": [[8.0, 1012.0], [9.0, 1043.0], [10.0, 1055.5], [11.0, 942.0], [12.0, 826.0], [13.0, 744.5], [14.0, 671.5], [15.0, 656.0], [1.0, 1962.0], [16.0, 407.0], [18.0, 680.0], [20.0, 508.5], [7.0, 1357.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 407.0, "minX": 1.0, "maxY": 1957.5, "series": [{"data": [[8.0, 1011.5], [9.0, 1042.0], [10.0, 1054.0], [11.0, 941.0], [12.0, 825.0], [13.0, 744.0], [14.0, 670.5], [15.0, 655.0], [1.0, 1957.5], [16.0, 407.0], [18.0, 677.5], [20.0, 508.5], [7.0, 1355.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.60422636E12, "maxY": 11.55, "series": [{"data": [[1.60422642E12, 11.55], [1.60422648E12, 0.5166666666666667], [1.60422636E12, 0.18333333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422648E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60422636E12, "maxY": 11.55, "series": [{"data": [[1.60422642E12, 11.55], [1.60422648E12, 0.6833333333333333], [1.60422636E12, 0.016666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422648E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60422636E12, "maxY": 11.55, "series": [{"data": [[1.60422642E12, 11.55], [1.60422648E12, 0.6833333333333333], [1.60422636E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422648E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60422636E12, "maxY": 11.55, "series": [{"data": [[1.60422642E12, 11.55], [1.60422648E12, 0.6833333333333333], [1.60422636E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422648E12, "title": "Total Transactions Per Second"}},
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

