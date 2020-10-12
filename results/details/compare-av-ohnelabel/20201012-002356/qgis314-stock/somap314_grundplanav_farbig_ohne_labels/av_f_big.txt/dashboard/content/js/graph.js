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
        data: {"result": {"minY": 130.0, "minX": 0.0, "maxY": 2567.0, "series": [{"data": [[0.0, 130.0], [0.1, 130.0], [0.2, 138.0], [0.3, 148.0], [0.4, 148.0], [0.5, 154.0], [0.6, 162.0], [0.7, 167.0], [0.8, 167.0], [0.9, 172.0], [1.0, 178.0], [1.1, 187.0], [1.2, 187.0], [1.3, 187.0], [1.4, 194.0], [1.5, 194.0], [1.6, 194.0], [1.7, 207.0], [1.8, 212.0], [1.9, 212.0], [2.0, 214.0], [2.1, 217.0], [2.2, 218.0], [2.3, 218.0], [2.4, 223.0], [2.5, 226.0], [2.6, 227.0], [2.7, 227.0], [2.8, 227.0], [2.9, 227.0], [3.0, 228.0], [3.1, 228.0], [3.2, 228.0], [3.3, 229.0], [3.4, 229.0], [3.5, 230.0], [3.6, 235.0], [3.7, 236.0], [3.8, 236.0], [3.9, 241.0], [4.0, 244.0], [4.1, 245.0], [4.2, 245.0], [4.3, 247.0], [4.4, 248.0], [4.5, 254.0], [4.6, 254.0], [4.7, 262.0], [4.8, 265.0], [4.9, 266.0], [5.0, 266.0], [5.1, 269.0], [5.2, 273.0], [5.3, 273.0], [5.4, 280.0], [5.5, 280.0], [5.6, 287.0], [5.7, 287.0], [5.8, 287.0], [5.9, 290.0], [6.0, 299.0], [6.1, 299.0], [6.2, 303.0], [6.3, 306.0], [6.4, 309.0], [6.5, 309.0], [6.6, 310.0], [6.7, 311.0], [6.8, 311.0], [6.9, 313.0], [7.0, 315.0], [7.1, 317.0], [7.2, 317.0], [7.3, 319.0], [7.4, 323.0], [7.5, 324.0], [7.6, 324.0], [7.7, 325.0], [7.8, 326.0], [7.9, 329.0], [8.0, 329.0], [8.1, 329.0], [8.2, 330.0], [8.3, 331.0], [8.4, 331.0], [8.5, 334.0], [8.6, 335.0], [8.7, 335.0], [8.8, 336.0], [8.9, 339.0], [9.0, 341.0], [9.1, 341.0], [9.2, 341.0], [9.3, 341.0], [9.4, 342.0], [9.5, 342.0], [9.6, 344.0], [9.7, 348.0], [9.8, 348.0], [9.9, 348.0], [10.0, 354.0], [10.1, 355.0], [10.2, 355.0], [10.3, 356.0], [10.4, 359.0], [10.5, 360.0], [10.6, 360.0], [10.7, 362.0], [10.8, 363.0], [10.9, 364.0], [11.0, 364.0], [11.1, 369.0], [11.2, 370.0], [11.3, 372.0], [11.4, 372.0], [11.5, 376.0], [11.6, 376.0], [11.7, 376.0], [11.8, 377.0], [11.9, 377.0], [12.0, 388.0], [12.1, 388.0], [12.2, 390.0], [12.3, 390.0], [12.4, 394.0], [12.5, 394.0], [12.6, 395.0], [12.7, 396.0], [12.8, 399.0], [12.9, 399.0], [13.0, 404.0], [13.1, 405.0], [13.2, 406.0], [13.3, 406.0], [13.4, 412.0], [13.5, 414.0], [13.6, 414.0], [13.7, 417.0], [13.8, 417.0], [13.9, 417.0], [14.0, 417.0], [14.1, 418.0], [14.2, 422.0], [14.3, 426.0], [14.4, 426.0], [14.5, 428.0], [14.6, 428.0], [14.7, 435.0], [14.8, 435.0], [14.9, 435.0], [15.0, 436.0], [15.1, 436.0], [15.2, 441.0], [15.3, 444.0], [15.4, 445.0], [15.5, 445.0], [15.6, 447.0], [15.7, 448.0], [15.8, 448.0], [15.9, 448.0], [16.0, 451.0], [16.1, 457.0], [16.2, 459.0], [16.3, 459.0], [16.4, 461.0], [16.5, 463.0], [16.6, 463.0], [16.7, 463.0], [16.8, 464.0], [16.9, 466.0], [17.0, 466.0], [17.1, 467.0], [17.2, 473.0], [17.3, 473.0], [17.4, 473.0], [17.5, 473.0], [17.6, 473.0], [17.7, 473.0], [17.8, 473.0], [17.9, 476.0], [18.0, 478.0], [18.1, 479.0], [18.2, 479.0], [18.3, 479.0], [18.4, 482.0], [18.5, 482.0], [18.6, 484.0], [18.7, 485.0], [18.8, 486.0], [18.9, 486.0], [19.0, 488.0], [19.1, 488.0], [19.2, 490.0], [19.3, 490.0], [19.4, 492.0], [19.5, 495.0], [19.6, 495.0], [19.7, 495.0], [19.8, 495.0], [19.9, 497.0], [20.0, 498.0], [20.1, 498.0], [20.2, 499.0], [20.3, 499.0], [20.4, 499.0], [20.5, 499.0], [20.6, 500.0], [20.7, 503.0], [20.8, 503.0], [20.9, 504.0], [21.0, 506.0], [21.1, 506.0], [21.2, 506.0], [21.3, 507.0], [21.4, 507.0], [21.5, 508.0], [21.6, 508.0], [21.7, 508.0], [21.8, 515.0], [21.9, 515.0], [22.0, 515.0], [22.1, 516.0], [22.2, 517.0], [22.3, 517.0], [22.4, 519.0], [22.5, 520.0], [22.6, 521.0], [22.7, 521.0], [22.8, 524.0], [22.9, 524.0], [23.0, 524.0], [23.1, 524.0], [23.2, 526.0], [23.3, 527.0], [23.4, 527.0], [23.5, 528.0], [23.6, 529.0], [23.7, 530.0], [23.8, 530.0], [23.9, 531.0], [24.0, 531.0], [24.1, 532.0], [24.2, 532.0], [24.3, 532.0], [24.4, 532.0], [24.5, 534.0], [24.6, 534.0], [24.7, 534.0], [24.8, 535.0], [24.9, 537.0], [25.0, 537.0], [25.1, 538.0], [25.2, 540.0], [25.3, 540.0], [25.4, 541.0], [25.5, 542.0], [25.6, 543.0], [25.7, 543.0], [25.8, 543.0], [25.9, 543.0], [26.0, 545.0], [26.1, 545.0], [26.2, 547.0], [26.3, 547.0], [26.4, 549.0], [26.5, 549.0], [26.6, 550.0], [26.7, 552.0], [26.8, 552.0], [26.9, 553.0], [27.0, 553.0], [27.1, 554.0], [27.2, 554.0], [27.3, 554.0], [27.4, 555.0], [27.5, 555.0], [27.6, 555.0], [27.7, 555.0], [27.8, 557.0], [27.9, 558.0], [28.0, 558.0], [28.1, 558.0], [28.2, 560.0], [28.3, 560.0], [28.4, 560.0], [28.5, 561.0], [28.6, 564.0], [28.7, 564.0], [28.8, 566.0], [28.9, 569.0], [29.0, 570.0], [29.1, 570.0], [29.2, 571.0], [29.3, 571.0], [29.4, 571.0], [29.5, 571.0], [29.6, 572.0], [29.7, 572.0], [29.8, 575.0], [29.9, 575.0], [30.0, 575.0], [30.1, 575.0], [30.2, 575.0], [30.3, 575.0], [30.4, 577.0], [30.5, 577.0], [30.6, 577.0], [30.7, 577.0], [30.8, 578.0], [30.9, 578.0], [31.0, 578.0], [31.1, 578.0], [31.2, 579.0], [31.3, 580.0], [31.4, 580.0], [31.5, 580.0], [31.6, 583.0], [31.7, 583.0], [31.8, 584.0], [31.9, 584.0], [32.0, 584.0], [32.1, 584.0], [32.2, 585.0], [32.3, 586.0], [32.4, 587.0], [32.5, 587.0], [32.6, 587.0], [32.7, 588.0], [32.8, 588.0], [32.9, 588.0], [33.0, 588.0], [33.1, 588.0], [33.2, 588.0], [33.3, 588.0], [33.4, 589.0], [33.5, 589.0], [33.6, 589.0], [33.7, 591.0], [33.8, 593.0], [33.9, 593.0], [34.0, 593.0], [34.1, 593.0], [34.2, 594.0], [34.3, 595.0], [34.4, 595.0], [34.5, 595.0], [34.6, 595.0], [34.7, 596.0], [34.8, 596.0], [34.9, 598.0], [35.0, 599.0], [35.1, 599.0], [35.2, 599.0], [35.3, 599.0], [35.4, 602.0], [35.5, 602.0], [35.6, 604.0], [35.7, 605.0], [35.8, 606.0], [35.9, 606.0], [36.0, 607.0], [36.1, 607.0], [36.2, 608.0], [36.3, 608.0], [36.4, 609.0], [36.5, 610.0], [36.6, 612.0], [36.7, 612.0], [36.8, 615.0], [36.9, 617.0], [37.0, 617.0], [37.1, 618.0], [37.2, 620.0], [37.3, 622.0], [37.4, 622.0], [37.5, 625.0], [37.6, 626.0], [37.7, 630.0], [37.8, 630.0], [37.9, 631.0], [38.0, 631.0], [38.1, 633.0], [38.2, 633.0], [38.3, 637.0], [38.4, 638.0], [38.5, 638.0], [38.6, 638.0], [38.7, 639.0], [38.8, 640.0], [38.9, 640.0], [39.0, 640.0], [39.1, 640.0], [39.2, 641.0], [39.3, 641.0], [39.4, 641.0], [39.5, 642.0], [39.6, 644.0], [39.7, 644.0], [39.8, 645.0], [39.9, 646.0], [40.0, 646.0], [40.1, 646.0], [40.2, 648.0], [40.3, 648.0], [40.4, 648.0], [40.5, 650.0], [40.6, 652.0], [40.7, 657.0], [40.8, 657.0], [40.9, 659.0], [41.0, 664.0], [41.1, 664.0], [41.2, 664.0], [41.3, 665.0], [41.4, 666.0], [41.5, 667.0], [41.6, 667.0], [41.7, 673.0], [41.8, 675.0], [41.9, 675.0], [42.0, 676.0], [42.1, 680.0], [42.2, 680.0], [42.3, 680.0], [42.4, 685.0], [42.5, 685.0], [42.6, 685.0], [42.7, 685.0], [42.8, 691.0], [42.9, 693.0], [43.0, 694.0], [43.1, 694.0], [43.2, 695.0], [43.3, 698.0], [43.4, 698.0], [43.5, 698.0], [43.6, 699.0], [43.7, 701.0], [43.8, 701.0], [43.9, 703.0], [44.0, 711.0], [44.1, 712.0], [44.2, 712.0], [44.3, 721.0], [44.4, 725.0], [44.5, 728.0], [44.6, 728.0], [44.7, 732.0], [44.8, 733.0], [44.9, 733.0], [45.0, 733.0], [45.1, 734.0], [45.2, 736.0], [45.3, 736.0], [45.4, 737.0], [45.5, 738.0], [45.6, 738.0], [45.7, 738.0], [45.8, 740.0], [45.9, 740.0], [46.0, 744.0], [46.1, 744.0], [46.2, 744.0], [46.3, 745.0], [46.4, 749.0], [46.5, 749.0], [46.6, 751.0], [46.7, 755.0], [46.8, 755.0], [46.9, 760.0], [47.0, 763.0], [47.1, 767.0], [47.2, 767.0], [47.3, 768.0], [47.4, 773.0], [47.5, 780.0], [47.6, 780.0], [47.7, 783.0], [47.8, 784.0], [47.9, 787.0], [48.0, 787.0], [48.1, 788.0], [48.2, 788.0], [48.3, 800.0], [48.4, 800.0], [48.5, 801.0], [48.6, 803.0], [48.7, 803.0], [48.8, 804.0], [48.9, 805.0], [49.0, 806.0], [49.1, 806.0], [49.2, 808.0], [49.3, 809.0], [49.4, 811.0], [49.5, 811.0], [49.6, 812.0], [49.7, 814.0], [49.8, 816.0], [49.9, 816.0], [50.0, 818.0], [50.1, 825.0], [50.2, 825.0], [50.3, 825.0], [50.4, 827.0], [50.5, 827.0], [50.6, 827.0], [50.7, 830.0], [50.8, 832.0], [50.9, 837.0], [51.0, 837.0], [51.1, 846.0], [51.2, 846.0], [51.3, 850.0], [51.4, 850.0], [51.5, 855.0], [51.6, 855.0], [51.7, 855.0], [51.8, 856.0], [51.9, 859.0], [52.0, 860.0], [52.1, 860.0], [52.2, 860.0], [52.3, 864.0], [52.4, 867.0], [52.5, 867.0], [52.6, 867.0], [52.7, 867.0], [52.8, 870.0], [52.9, 870.0], [53.0, 873.0], [53.1, 873.0], [53.2, 874.0], [53.3, 874.0], [53.4, 874.0], [53.5, 877.0], [53.6, 877.0], [53.7, 880.0], [53.8, 886.0], [53.9, 887.0], [54.0, 887.0], [54.1, 887.0], [54.2, 890.0], [54.3, 891.0], [54.4, 891.0], [54.5, 892.0], [54.6, 892.0], [54.7, 895.0], [54.8, 895.0], [54.9, 905.0], [55.0, 908.0], [55.1, 908.0], [55.2, 909.0], [55.3, 911.0], [55.4, 912.0], [55.5, 912.0], [55.6, 916.0], [55.7, 917.0], [55.8, 921.0], [55.9, 921.0], [56.0, 929.0], [56.1, 937.0], [56.2, 939.0], [56.3, 939.0], [56.4, 942.0], [56.5, 945.0], [56.6, 945.0], [56.7, 945.0], [56.8, 946.0], [56.9, 949.0], [57.0, 949.0], [57.1, 959.0], [57.2, 965.0], [57.3, 968.0], [57.4, 968.0], [57.5, 978.0], [57.6, 984.0], [57.7, 994.0], [57.8, 994.0], [57.9, 999.0], [58.0, 1001.0], [58.1, 1006.0], [58.2, 1006.0], [58.3, 1011.0], [58.4, 1012.0], [58.5, 1012.0], [58.6, 1021.0], [58.7, 1022.0], [58.8, 1033.0], [58.9, 1033.0], [59.0, 1037.0], [59.1, 1037.0], [59.2, 1040.0], [59.3, 1040.0], [59.4, 1042.0], [59.5, 1042.0], [59.6, 1043.0], [59.7, 1043.0], [59.8, 1048.0], [59.9, 1052.0], [60.0, 1053.0], [60.1, 1053.0], [60.2, 1055.0], [60.3, 1057.0], [60.4, 1057.0], [60.5, 1057.0], [60.6, 1058.0], [60.7, 1059.0], [60.8, 1059.0], [60.9, 1060.0], [61.0, 1062.0], [61.1, 1063.0], [61.2, 1063.0], [61.3, 1065.0], [61.4, 1067.0], [61.5, 1068.0], [61.6, 1068.0], [61.7, 1069.0], [61.8, 1071.0], [61.9, 1071.0], [62.0, 1073.0], [62.1, 1074.0], [62.2, 1074.0], [62.3, 1074.0], [62.4, 1074.0], [62.5, 1076.0], [62.6, 1076.0], [62.7, 1076.0], [62.8, 1077.0], [62.9, 1077.0], [63.0, 1081.0], [63.1, 1081.0], [63.2, 1082.0], [63.3, 1085.0], [63.4, 1085.0], [63.5, 1087.0], [63.6, 1087.0], [63.7, 1089.0], [63.8, 1089.0], [63.9, 1089.0], [64.0, 1090.0], [64.1, 1090.0], [64.2, 1090.0], [64.3, 1090.0], [64.4, 1091.0], [64.5, 1092.0], [64.6, 1092.0], [64.7, 1093.0], [64.8, 1095.0], [64.9, 1096.0], [65.0, 1096.0], [65.1, 1099.0], [65.2, 1099.0], [65.3, 1099.0], [65.4, 1099.0], [65.5, 1099.0], [65.6, 1100.0], [65.7, 1100.0], [65.8, 1101.0], [65.9, 1101.0], [66.0, 1102.0], [66.1, 1102.0], [66.2, 1103.0], [66.3, 1103.0], [66.4, 1104.0], [66.5, 1104.0], [66.6, 1104.0], [66.7, 1105.0], [66.8, 1105.0], [66.9, 1105.0], [67.0, 1105.0], [67.1, 1106.0], [67.2, 1106.0], [67.3, 1106.0], [67.4, 1106.0], [67.5, 1107.0], [67.6, 1107.0], [67.7, 1108.0], [67.8, 1108.0], [67.9, 1108.0], [68.0, 1108.0], [68.1, 1108.0], [68.2, 1108.0], [68.3, 1108.0], [68.4, 1108.0], [68.5, 1108.0], [68.6, 1109.0], [68.7, 1109.0], [68.8, 1110.0], [68.9, 1110.0], [69.0, 1112.0], [69.1, 1112.0], [69.2, 1113.0], [69.3, 1113.0], [69.4, 1113.0], [69.5, 1113.0], [69.6, 1114.0], [69.7, 1114.0], [69.8, 1114.0], [69.9, 1114.0], [70.0, 1115.0], [70.1, 1116.0], [70.2, 1116.0], [70.3, 1117.0], [70.4, 1118.0], [70.5, 1119.0], [70.6, 1119.0], [70.7, 1119.0], [70.8, 1119.0], [70.9, 1120.0], [71.0, 1120.0], [71.1, 1120.0], [71.2, 1120.0], [71.3, 1121.0], [71.4, 1121.0], [71.5, 1122.0], [71.6, 1123.0], [71.7, 1123.0], [71.8, 1125.0], [71.9, 1125.0], [72.0, 1125.0], [72.1, 1125.0], [72.2, 1125.0], [72.3, 1126.0], [72.4, 1128.0], [72.5, 1128.0], [72.6, 1128.0], [72.7, 1128.0], [72.8, 1129.0], [72.9, 1129.0], [73.0, 1129.0], [73.1, 1130.0], [73.2, 1133.0], [73.3, 1133.0], [73.4, 1134.0], [73.5, 1135.0], [73.6, 1135.0], [73.7, 1137.0], [73.8, 1138.0], [73.9, 1138.0], [74.0, 1138.0], [74.1, 1139.0], [74.2, 1140.0], [74.3, 1140.0], [74.4, 1140.0], [74.5, 1140.0], [74.6, 1141.0], [74.7, 1141.0], [74.8, 1141.0], [74.9, 1142.0], [75.0, 1143.0], [75.1, 1143.0], [75.2, 1144.0], [75.3, 1145.0], [75.4, 1145.0], [75.5, 1145.0], [75.6, 1145.0], [75.7, 1146.0], [75.8, 1147.0], [75.9, 1147.0], [76.0, 1147.0], [76.1, 1147.0], [76.2, 1148.0], [76.3, 1148.0], [76.4, 1149.0], [76.5, 1150.0], [76.6, 1150.0], [76.7, 1150.0], [76.8, 1152.0], [76.9, 1152.0], [77.0, 1152.0], [77.1, 1153.0], [77.2, 1153.0], [77.3, 1153.0], [77.4, 1153.0], [77.5, 1154.0], [77.6, 1154.0], [77.7, 1155.0], [77.8, 1155.0], [77.9, 1155.0], [78.0, 1157.0], [78.1, 1157.0], [78.2, 1157.0], [78.3, 1158.0], [78.4, 1160.0], [78.5, 1160.0], [78.6, 1161.0], [78.7, 1162.0], [78.8, 1162.0], [78.9, 1162.0], [79.0, 1162.0], [79.1, 1163.0], [79.2, 1163.0], [79.3, 1163.0], [79.4, 1165.0], [79.5, 1165.0], [79.6, 1165.0], [79.7, 1165.0], [79.8, 1166.0], [79.9, 1166.0], [80.0, 1167.0], [80.1, 1167.0], [80.2, 1167.0], [80.3, 1167.0], [80.4, 1167.0], [80.5, 1168.0], [80.6, 1169.0], [80.7, 1169.0], [80.8, 1169.0], [80.9, 1170.0], [81.0, 1171.0], [81.1, 1171.0], [81.2, 1171.0], [81.3, 1172.0], [81.4, 1173.0], [81.5, 1175.0], [81.6, 1175.0], [81.7, 1176.0], [81.8, 1176.0], [81.9, 1176.0], [82.0, 1177.0], [82.1, 1178.0], [82.2, 1178.0], [82.3, 1178.0], [82.4, 1179.0], [82.5, 1180.0], [82.6, 1180.0], [82.7, 1180.0], [82.8, 1181.0], [82.9, 1181.0], [83.0, 1181.0], [83.1, 1181.0], [83.2, 1181.0], [83.3, 1185.0], [83.4, 1185.0], [83.5, 1188.0], [83.6, 1189.0], [83.7, 1190.0], [83.8, 1190.0], [83.9, 1191.0], [84.0, 1193.0], [84.1, 1197.0], [84.2, 1197.0], [84.3, 1198.0], [84.4, 1202.0], [84.5, 1202.0], [84.6, 1202.0], [84.7, 1203.0], [84.8, 1204.0], [84.9, 1204.0], [85.0, 1204.0], [85.1, 1205.0], [85.2, 1206.0], [85.3, 1206.0], [85.4, 1208.0], [85.5, 1211.0], [85.6, 1215.0], [85.7, 1215.0], [85.8, 1217.0], [85.9, 1218.0], [86.0, 1219.0], [86.1, 1219.0], [86.2, 1220.0], [86.3, 1221.0], [86.4, 1225.0], [86.5, 1225.0], [86.6, 1226.0], [86.7, 1228.0], [86.8, 1228.0], [86.9, 1228.0], [87.0, 1229.0], [87.1, 1230.0], [87.2, 1230.0], [87.3, 1231.0], [87.4, 1231.0], [87.5, 1232.0], [87.6, 1232.0], [87.7, 1232.0], [87.8, 1232.0], [87.9, 1236.0], [88.0, 1236.0], [88.1, 1237.0], [88.2, 1239.0], [88.3, 1241.0], [88.4, 1241.0], [88.5, 1243.0], [88.6, 1245.0], [88.7, 1245.0], [88.8, 1246.0], [88.9, 1247.0], [89.0, 1248.0], [89.1, 1248.0], [89.2, 1252.0], [89.3, 1254.0], [89.4, 1255.0], [89.5, 1255.0], [89.6, 1257.0], [89.7, 1257.0], [89.8, 1257.0], [89.9, 1257.0], [90.0, 1258.0], [90.1, 1258.0], [90.2, 1258.0], [90.3, 1260.0], [90.4, 1261.0], [90.5, 1263.0], [90.6, 1263.0], [90.7, 1264.0], [90.8, 1265.0], [90.9, 1265.0], [91.0, 1265.0], [91.1, 1267.0], [91.2, 1273.0], [91.3, 1273.0], [91.4, 1273.0], [91.5, 1274.0], [91.6, 1276.0], [91.7, 1276.0], [91.8, 1278.0], [91.9, 1279.0], [92.0, 1285.0], [92.1, 1285.0], [92.2, 1288.0], [92.3, 1291.0], [92.4, 1292.0], [92.5, 1292.0], [92.6, 1292.0], [92.7, 1299.0], [92.8, 1302.0], [92.9, 1302.0], [93.0, 1310.0], [93.1, 1311.0], [93.2, 1312.0], [93.3, 1312.0], [93.4, 1312.0], [93.5, 1320.0], [93.6, 1320.0], [93.7, 1326.0], [93.8, 1329.0], [93.9, 1331.0], [94.0, 1331.0], [94.1, 1332.0], [94.2, 1336.0], [94.3, 1336.0], [94.4, 1336.0], [94.5, 1338.0], [94.6, 1340.0], [94.7, 1345.0], [94.8, 1345.0], [94.9, 1350.0], [95.0, 1352.0], [95.1, 1352.0], [95.2, 1354.0], [95.3, 1357.0], [95.4, 1402.0], [95.5, 1402.0], [95.6, 1408.0], [95.7, 1418.0], [95.8, 1443.0], [95.9, 1443.0], [96.0, 1449.0], [96.1, 1455.0], [96.2, 1466.0], [96.3, 1466.0], [96.4, 1469.0], [96.5, 1472.0], [96.6, 1478.0], [96.7, 1478.0], [96.8, 1480.0], [96.9, 1486.0], [97.0, 1486.0], [97.1, 1487.0], [97.2, 1498.0], [97.3, 1502.0], [97.4, 1502.0], [97.5, 1504.0], [97.6, 1505.0], [97.7, 1514.0], [97.8, 1514.0], [97.9, 1557.0], [98.0, 1561.0], [98.1, 1578.0], [98.2, 1578.0], [98.3, 1602.0], [98.4, 1704.0], [98.5, 1704.0], [98.6, 1794.0], [98.7, 1892.0], [98.8, 1959.0], [98.9, 1959.0], [99.0, 2062.0], [99.1, 2071.0], [99.2, 2091.0], [99.3, 2091.0], [99.4, 2233.0], [99.5, 2308.0], [99.6, 2331.0], [99.7, 2331.0], [99.8, 2409.0], [99.9, 2567.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 138.0, "series": [{"data": [[2300.0, 2.0], [2200.0, 1.0], [600.0, 61.0], [2400.0, 1.0], [2500.0, 1.0], [700.0, 34.0], [800.0, 48.0], [200.0, 33.0], [900.0, 23.0], [1000.0, 56.0], [1100.0, 138.0], [300.0, 50.0], [1200.0, 62.0], [1300.0, 19.0], [1400.0, 14.0], [1500.0, 7.0], [400.0, 56.0], [100.0, 12.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 1.0], [1900.0, 1.0], [500.0, 109.0], [2000.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 563.0, "series": [{"data": [[0.0, 152.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 563.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 20.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.933234421364984, "minX": 1.60246236E12, "maxY": 9.983606557377048, "series": [{"data": [[1.60246242E12, 9.933234421364984], [1.60246236E12, 9.983606557377048]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246242E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 236.0, "minX": 1.0, "maxY": 1557.0, "series": [{"data": [[8.0, 236.0], [4.0, 484.0], [2.0, 461.0], [1.0, 1449.0], [9.0, 473.0], [10.0, 844.638620689655], [5.0, 467.0], [6.0, 1557.0], [3.0, 492.0], [7.0, 543.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.937414965986395, 842.1741496598646]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 471.53333333333336, "minX": 1.60246236E12, "maxY": 1566243.6166666667, "series": [{"data": [[1.60246242E12, 1566243.6166666667], [1.60246236E12, 170601.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246242E12, 5198.5], [1.60246236E12, 471.53333333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246242E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 829.6721311475411, "minX": 1.60246236E12, "maxY": 843.3056379821954, "series": [{"data": [[1.60246242E12, 843.3056379821954], [1.60246236E12, 829.6721311475411]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246242E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 828.4754098360659, "minX": 1.60246236E12, "maxY": 842.194362017805, "series": [{"data": [[1.60246242E12, 842.194362017805], [1.60246236E12, 828.4754098360659]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246242E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.016320474777448073, "minX": 1.60246236E12, "maxY": 1.3770491803278688, "series": [{"data": [[1.60246242E12, 0.016320474777448073], [1.60246236E12, 1.3770491803278688]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246242E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 130.0, "minX": 1.60246236E12, "maxY": 2567.0, "series": [{"data": [[1.60246242E12, 2062.0], [1.60246236E12, 2567.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246242E12, 194.97499790787697], [1.60246236E12, 130.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246242E12, 202.8725008368492], [1.60246236E12, 130.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246242E12, 199.36249895393848], [1.60246236E12, 130.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246242E12, 154.0], [1.60246236E12, 130.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246242E12, 857.0], [1.60246236E12, 588.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246242E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 414.0, "minX": 2.0, "maxY": 1138.0, "series": [{"data": [[2.0, 595.5], [8.0, 1079.5], [9.0, 1138.0], [10.0, 1105.5], [11.0, 1079.5], [12.0, 971.5], [13.0, 736.0], [14.0, 660.5], [15.0, 622.0], [16.0, 523.5], [17.0, 685.0], [19.0, 492.5], [5.0, 588.0], [22.0, 550.5], [23.0, 414.0], [7.0, 856.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 414.0, "minX": 2.0, "maxY": 1137.0, "series": [{"data": [[2.0, 592.5], [8.0, 1079.0], [9.0, 1137.0], [10.0, 1105.0], [11.0, 1077.5], [12.0, 965.0], [13.0, 736.0], [14.0, 660.0], [15.0, 620.0], [16.0, 520.5], [17.0, 685.0], [19.0, 492.5], [5.0, 587.0], [22.0, 550.0], [23.0, 414.0], [7.0, 854.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.60246236E12, "maxY": 11.066666666666666, "series": [{"data": [[1.60246242E12, 11.066666666666666], [1.60246236E12, 1.1833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246242E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0166666666666666, "minX": 1.60246236E12, "maxY": 11.233333333333333, "series": [{"data": [[1.60246242E12, 11.233333333333333], [1.60246236E12, 1.0166666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246242E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0166666666666666, "minX": 1.60246236E12, "maxY": 11.233333333333333, "series": [{"data": [[1.60246242E12, 11.233333333333333], [1.60246236E12, 1.0166666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246242E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0166666666666666, "minX": 1.60246236E12, "maxY": 11.233333333333333, "series": [{"data": [[1.60246242E12, 11.233333333333333], [1.60246236E12, 1.0166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246242E12, "title": "Total Transactions Per Second"}},
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

