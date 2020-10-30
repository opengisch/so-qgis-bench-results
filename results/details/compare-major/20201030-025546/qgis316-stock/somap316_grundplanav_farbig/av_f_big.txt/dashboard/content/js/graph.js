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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 4834.0, "series": [{"data": [[0.0, 6.0], [0.1, 6.0], [0.2, 7.0], [0.3, 8.0], [0.4, 8.0], [0.5, 9.0], [0.6, 9.0], [0.7, 10.0], [0.8, 10.0], [0.9, 10.0], [1.0, 10.0], [1.1, 10.0], [1.2, 10.0], [1.3, 11.0], [1.4, 12.0], [1.5, 12.0], [1.6, 12.0], [1.7, 14.0], [1.8, 15.0], [1.9, 15.0], [2.0, 16.0], [2.1, 17.0], [2.2, 17.0], [2.3, 17.0], [2.4, 18.0], [2.5, 18.0], [2.6, 19.0], [2.7, 19.0], [2.8, 21.0], [2.9, 21.0], [3.0, 22.0], [3.1, 22.0], [3.2, 22.0], [3.3, 24.0], [3.4, 24.0], [3.5, 24.0], [3.6, 25.0], [3.7, 25.0], [3.8, 25.0], [3.9, 25.0], [4.0, 26.0], [4.1, 29.0], [4.2, 29.0], [4.3, 32.0], [4.4, 37.0], [4.5, 41.0], [4.6, 41.0], [4.7, 41.0], [4.8, 42.0], [4.9, 42.0], [5.0, 42.0], [5.1, 42.0], [5.2, 43.0], [5.3, 43.0], [5.4, 44.0], [5.5, 45.0], [5.6, 57.0], [5.7, 57.0], [5.8, 75.0], [5.9, 120.0], [6.0, 123.0], [6.1, 123.0], [6.2, 125.0], [6.3, 126.0], [6.4, 127.0], [6.5, 127.0], [6.6, 127.0], [6.7, 129.0], [6.8, 129.0], [6.9, 129.0], [7.0, 129.0], [7.1, 130.0], [7.2, 130.0], [7.3, 130.0], [7.4, 130.0], [7.5, 131.0], [7.6, 131.0], [7.7, 131.0], [7.8, 134.0], [7.9, 135.0], [8.0, 135.0], [8.1, 137.0], [8.2, 142.0], [8.3, 142.0], [8.4, 142.0], [8.5, 143.0], [8.6, 143.0], [8.7, 143.0], [8.8, 143.0], [8.9, 144.0], [9.0, 144.0], [9.1, 144.0], [9.2, 145.0], [9.3, 147.0], [9.4, 147.0], [9.5, 147.0], [9.6, 148.0], [9.7, 148.0], [9.8, 148.0], [9.9, 148.0], [10.0, 148.0], [10.1, 149.0], [10.2, 149.0], [10.3, 150.0], [10.4, 150.0], [10.5, 151.0], [10.6, 151.0], [10.7, 151.0], [10.8, 151.0], [10.9, 153.0], [11.0, 153.0], [11.1, 153.0], [11.2, 153.0], [11.3, 154.0], [11.4, 154.0], [11.5, 154.0], [11.6, 155.0], [11.7, 155.0], [11.8, 156.0], [11.9, 157.0], [12.0, 157.0], [12.1, 157.0], [12.2, 158.0], [12.3, 159.0], [12.4, 159.0], [12.5, 159.0], [12.6, 160.0], [12.7, 161.0], [12.8, 162.0], [12.9, 162.0], [13.0, 162.0], [13.1, 163.0], [13.2, 163.0], [13.3, 163.0], [13.4, 165.0], [13.5, 169.0], [13.6, 169.0], [13.7, 169.0], [13.8, 171.0], [13.9, 172.0], [14.0, 172.0], [14.1, 172.0], [14.2, 173.0], [14.3, 173.0], [14.4, 173.0], [14.5, 173.0], [14.6, 174.0], [14.7, 175.0], [14.8, 175.0], [14.9, 175.0], [15.0, 175.0], [15.1, 175.0], [15.2, 177.0], [15.3, 178.0], [15.4, 180.0], [15.5, 180.0], [15.6, 183.0], [15.7, 186.0], [15.8, 190.0], [15.9, 190.0], [16.0, 191.0], [16.1, 194.0], [16.2, 201.0], [16.3, 201.0], [16.4, 202.0], [16.5, 202.0], [16.6, 203.0], [16.7, 203.0], [16.8, 210.0], [16.9, 224.0], [17.0, 224.0], [17.1, 227.0], [17.2, 228.0], [17.3, 232.0], [17.4, 232.0], [17.5, 236.0], [17.6, 237.0], [17.7, 238.0], [17.8, 238.0], [17.9, 239.0], [18.0, 241.0], [18.1, 241.0], [18.2, 241.0], [18.3, 241.0], [18.4, 241.0], [18.5, 241.0], [18.6, 242.0], [18.7, 243.0], [18.8, 243.0], [18.9, 243.0], [19.0, 244.0], [19.1, 245.0], [19.2, 245.0], [19.3, 245.0], [19.4, 245.0], [19.5, 247.0], [19.6, 248.0], [19.7, 248.0], [19.8, 250.0], [19.9, 251.0], [20.0, 251.0], [20.1, 251.0], [20.2, 255.0], [20.3, 255.0], [20.4, 255.0], [20.5, 256.0], [20.6, 256.0], [20.7, 259.0], [20.8, 259.0], [20.9, 260.0], [21.0, 260.0], [21.1, 260.0], [21.2, 260.0], [21.3, 260.0], [21.4, 262.0], [21.5, 263.0], [21.6, 263.0], [21.7, 264.0], [21.8, 265.0], [21.9, 265.0], [22.0, 268.0], [22.1, 270.0], [22.2, 272.0], [22.3, 272.0], [22.4, 272.0], [22.5, 274.0], [22.6, 274.0], [22.7, 274.0], [22.8, 275.0], [22.9, 276.0], [23.0, 276.0], [23.1, 276.0], [23.2, 277.0], [23.3, 278.0], [23.4, 278.0], [23.5, 279.0], [23.6, 280.0], [23.7, 283.0], [23.8, 283.0], [23.9, 283.0], [24.0, 284.0], [24.1, 286.0], [24.2, 286.0], [24.3, 286.0], [24.4, 288.0], [24.5, 288.0], [24.6, 288.0], [24.7, 289.0], [24.8, 289.0], [24.9, 291.0], [25.0, 291.0], [25.1, 292.0], [25.2, 295.0], [25.3, 295.0], [25.4, 298.0], [25.5, 302.0], [25.6, 311.0], [25.7, 311.0], [25.8, 311.0], [25.9, 312.0], [26.0, 315.0], [26.1, 315.0], [26.2, 318.0], [26.3, 322.0], [26.4, 327.0], [26.5, 327.0], [26.6, 328.0], [26.7, 329.0], [26.8, 329.0], [26.9, 331.0], [27.0, 333.0], [27.1, 337.0], [27.2, 337.0], [27.3, 337.0], [27.4, 338.0], [27.5, 340.0], [27.6, 340.0], [27.7, 345.0], [27.8, 346.0], [27.9, 350.0], [28.0, 350.0], [28.1, 351.0], [28.2, 354.0], [28.3, 354.0], [28.4, 354.0], [28.5, 356.0], [28.6, 356.0], [28.7, 356.0], [28.8, 361.0], [28.9, 362.0], [29.0, 368.0], [29.1, 368.0], [29.2, 370.0], [29.3, 373.0], [29.4, 373.0], [29.5, 373.0], [29.6, 374.0], [29.7, 378.0], [29.8, 380.0], [29.9, 380.0], [30.0, 381.0], [30.1, 383.0], [30.2, 383.0], [30.3, 384.0], [30.4, 386.0], [30.5, 389.0], [30.6, 389.0], [30.7, 390.0], [30.8, 390.0], [30.9, 391.0], [31.0, 391.0], [31.1, 391.0], [31.2, 394.0], [31.3, 395.0], [31.4, 395.0], [31.5, 401.0], [31.6, 402.0], [31.7, 402.0], [31.8, 403.0], [31.9, 404.0], [32.0, 405.0], [32.1, 405.0], [32.2, 408.0], [32.3, 409.0], [32.4, 409.0], [32.5, 409.0], [32.6, 415.0], [32.7, 417.0], [32.8, 418.0], [32.9, 418.0], [33.0, 420.0], [33.1, 421.0], [33.2, 422.0], [33.3, 422.0], [33.4, 428.0], [33.5, 430.0], [33.6, 430.0], [33.7, 433.0], [33.8, 437.0], [33.9, 440.0], [34.0, 440.0], [34.1, 444.0], [34.2, 446.0], [34.3, 449.0], [34.4, 449.0], [34.5, 451.0], [34.6, 456.0], [34.7, 458.0], [34.8, 458.0], [34.9, 458.0], [35.0, 462.0], [35.1, 462.0], [35.2, 463.0], [35.3, 466.0], [35.4, 466.0], [35.5, 466.0], [35.6, 467.0], [35.7, 468.0], [35.8, 468.0], [35.9, 468.0], [36.0, 474.0], [36.1, 477.0], [36.2, 480.0], [36.3, 480.0], [36.4, 486.0], [36.5, 489.0], [36.6, 490.0], [36.7, 490.0], [36.8, 494.0], [36.9, 497.0], [37.0, 497.0], [37.1, 497.0], [37.2, 497.0], [37.3, 504.0], [37.4, 504.0], [37.5, 508.0], [37.6, 510.0], [37.7, 513.0], [37.8, 513.0], [37.9, 514.0], [38.0, 515.0], [38.1, 515.0], [38.2, 515.0], [38.3, 515.0], [38.4, 518.0], [38.5, 518.0], [38.6, 518.0], [38.7, 518.0], [38.8, 519.0], [38.9, 519.0], [39.0, 522.0], [39.1, 522.0], [39.2, 523.0], [39.3, 523.0], [39.4, 523.0], [39.5, 528.0], [39.6, 529.0], [39.7, 529.0], [39.8, 532.0], [39.9, 533.0], [40.0, 536.0], [40.1, 536.0], [40.2, 539.0], [40.3, 540.0], [40.4, 540.0], [40.5, 543.0], [40.6, 548.0], [40.7, 549.0], [40.8, 549.0], [40.9, 549.0], [41.0, 553.0], [41.1, 554.0], [41.2, 554.0], [41.3, 554.0], [41.4, 555.0], [41.5, 557.0], [41.6, 557.0], [41.7, 558.0], [41.8, 562.0], [41.9, 562.0], [42.0, 566.0], [42.1, 568.0], [42.2, 568.0], [42.3, 568.0], [42.4, 570.0], [42.5, 571.0], [42.6, 574.0], [42.7, 574.0], [42.8, 575.0], [42.9, 575.0], [43.0, 587.0], [43.1, 587.0], [43.2, 591.0], [43.3, 596.0], [43.4, 596.0], [43.5, 604.0], [43.6, 605.0], [43.7, 612.0], [43.8, 612.0], [43.9, 625.0], [44.0, 626.0], [44.1, 628.0], [44.2, 628.0], [44.3, 634.0], [44.4, 634.0], [44.5, 635.0], [44.6, 635.0], [44.7, 640.0], [44.8, 641.0], [44.9, 643.0], [45.0, 643.0], [45.1, 643.0], [45.2, 645.0], [45.3, 645.0], [45.4, 646.0], [45.5, 647.0], [45.6, 650.0], [45.7, 650.0], [45.8, 653.0], [45.9, 658.0], [46.0, 661.0], [46.1, 661.0], [46.2, 666.0], [46.3, 669.0], [46.4, 669.0], [46.5, 669.0], [46.6, 669.0], [46.7, 683.0], [46.8, 683.0], [46.9, 684.0], [47.0, 684.0], [47.1, 685.0], [47.2, 685.0], [47.3, 685.0], [47.4, 691.0], [47.5, 692.0], [47.6, 692.0], [47.7, 694.0], [47.8, 701.0], [47.9, 703.0], [48.0, 703.0], [48.1, 707.0], [48.2, 708.0], [48.3, 712.0], [48.4, 712.0], [48.5, 713.0], [48.6, 715.0], [48.7, 715.0], [48.8, 719.0], [48.9, 721.0], [49.0, 721.0], [49.1, 721.0], [49.2, 727.0], [49.3, 731.0], [49.4, 735.0], [49.5, 735.0], [49.6, 736.0], [49.7, 737.0], [49.8, 738.0], [49.9, 738.0], [50.0, 738.0], [50.1, 742.0], [50.2, 742.0], [50.3, 743.0], [50.4, 747.0], [50.5, 748.0], [50.6, 748.0], [50.7, 749.0], [50.8, 749.0], [50.9, 754.0], [51.0, 754.0], [51.1, 756.0], [51.2, 758.0], [51.3, 764.0], [51.4, 764.0], [51.5, 766.0], [51.6, 769.0], [51.7, 769.0], [51.8, 769.0], [51.9, 770.0], [52.0, 774.0], [52.1, 774.0], [52.2, 775.0], [52.3, 776.0], [52.4, 778.0], [52.5, 778.0], [52.6, 778.0], [52.7, 778.0], [52.8, 783.0], [52.9, 783.0], [53.0, 783.0], [53.1, 784.0], [53.2, 785.0], [53.3, 785.0], [53.4, 785.0], [53.5, 787.0], [53.6, 787.0], [53.7, 788.0], [53.8, 788.0], [53.9, 790.0], [54.0, 790.0], [54.1, 793.0], [54.2, 797.0], [54.3, 797.0], [54.4, 797.0], [54.5, 799.0], [54.6, 804.0], [54.7, 805.0], [54.8, 805.0], [54.9, 806.0], [55.0, 807.0], [55.1, 807.0], [55.2, 807.0], [55.3, 811.0], [55.4, 811.0], [55.5, 811.0], [55.6, 813.0], [55.7, 820.0], [55.8, 823.0], [55.9, 823.0], [56.0, 829.0], [56.1, 831.0], [56.2, 837.0], [56.3, 837.0], [56.4, 839.0], [56.5, 843.0], [56.6, 846.0], [56.7, 846.0], [56.8, 850.0], [56.9, 853.0], [57.0, 853.0], [57.1, 861.0], [57.2, 864.0], [57.3, 864.0], [57.4, 864.0], [57.5, 868.0], [57.6, 879.0], [57.7, 883.0], [57.8, 883.0], [57.9, 883.0], [58.0, 887.0], [58.1, 901.0], [58.2, 901.0], [58.3, 906.0], [58.4, 907.0], [58.5, 907.0], [58.6, 911.0], [58.7, 916.0], [58.8, 919.0], [58.9, 919.0], [59.0, 921.0], [59.1, 923.0], [59.2, 928.0], [59.3, 928.0], [59.4, 933.0], [59.5, 940.0], [59.6, 942.0], [59.7, 942.0], [59.8, 944.0], [59.9, 944.0], [60.0, 947.0], [60.1, 947.0], [60.2, 955.0], [60.3, 958.0], [60.4, 958.0], [60.5, 959.0], [60.6, 963.0], [60.7, 966.0], [60.8, 966.0], [60.9, 973.0], [61.0, 974.0], [61.1, 976.0], [61.2, 976.0], [61.3, 981.0], [61.4, 983.0], [61.5, 987.0], [61.6, 987.0], [61.7, 993.0], [61.8, 996.0], [61.9, 996.0], [62.0, 997.0], [62.1, 998.0], [62.2, 1001.0], [62.3, 1001.0], [62.4, 1004.0], [62.5, 1008.0], [62.6, 1008.0], [62.7, 1008.0], [62.8, 1009.0], [62.9, 1011.0], [63.0, 1012.0], [63.1, 1012.0], [63.2, 1017.0], [63.3, 1018.0], [63.4, 1018.0], [63.5, 1020.0], [63.6, 1021.0], [63.7, 1022.0], [63.8, 1022.0], [63.9, 1024.0], [64.0, 1029.0], [64.1, 1030.0], [64.2, 1030.0], [64.3, 1032.0], [64.4, 1035.0], [64.5, 1038.0], [64.6, 1038.0], [64.7, 1039.0], [64.8, 1040.0], [64.9, 1043.0], [65.0, 1043.0], [65.1, 1044.0], [65.2, 1045.0], [65.3, 1045.0], [65.4, 1051.0], [65.5, 1052.0], [65.6, 1055.0], [65.7, 1055.0], [65.8, 1056.0], [65.9, 1057.0], [66.0, 1067.0], [66.1, 1067.0], [66.2, 1069.0], [66.3, 1070.0], [66.4, 1070.0], [66.5, 1070.0], [66.6, 1072.0], [66.7, 1072.0], [66.8, 1072.0], [66.9, 1072.0], [67.0, 1073.0], [67.1, 1076.0], [67.2, 1076.0], [67.3, 1076.0], [67.4, 1079.0], [67.5, 1082.0], [67.6, 1082.0], [67.7, 1083.0], [67.8, 1091.0], [67.9, 1092.0], [68.0, 1092.0], [68.1, 1094.0], [68.2, 1096.0], [68.3, 1097.0], [68.4, 1097.0], [68.5, 1099.0], [68.6, 1101.0], [68.7, 1101.0], [68.8, 1102.0], [68.9, 1107.0], [69.0, 1112.0], [69.1, 1112.0], [69.2, 1112.0], [69.3, 1115.0], [69.4, 1115.0], [69.5, 1115.0], [69.6, 1117.0], [69.7, 1117.0], [69.8, 1118.0], [69.9, 1118.0], [70.0, 1120.0], [70.1, 1123.0], [70.2, 1123.0], [70.3, 1125.0], [70.4, 1127.0], [70.5, 1128.0], [70.6, 1128.0], [70.7, 1128.0], [70.8, 1136.0], [70.9, 1143.0], [71.0, 1143.0], [71.1, 1146.0], [71.2, 1165.0], [71.3, 1167.0], [71.4, 1167.0], [71.5, 1167.0], [71.6, 1169.0], [71.7, 1169.0], [71.8, 1172.0], [71.9, 1174.0], [72.0, 1175.0], [72.1, 1175.0], [72.2, 1175.0], [72.3, 1180.0], [72.4, 1181.0], [72.5, 1181.0], [72.6, 1181.0], [72.7, 1183.0], [72.8, 1184.0], [72.9, 1184.0], [73.0, 1187.0], [73.1, 1190.0], [73.2, 1191.0], [73.3, 1191.0], [73.4, 1199.0], [73.5, 1207.0], [73.6, 1207.0], [73.7, 1210.0], [73.8, 1210.0], [73.9, 1210.0], [74.0, 1210.0], [74.1, 1211.0], [74.2, 1216.0], [74.3, 1217.0], [74.4, 1217.0], [74.5, 1217.0], [74.6, 1220.0], [74.7, 1220.0], [74.8, 1220.0], [74.9, 1220.0], [75.0, 1222.0], [75.1, 1222.0], [75.2, 1223.0], [75.3, 1225.0], [75.4, 1227.0], [75.5, 1227.0], [75.6, 1228.0], [75.7, 1230.0], [75.8, 1232.0], [75.9, 1232.0], [76.0, 1234.0], [76.1, 1235.0], [76.2, 1237.0], [76.3, 1237.0], [76.4, 1237.0], [76.5, 1239.0], [76.6, 1240.0], [76.7, 1240.0], [76.8, 1241.0], [76.9, 1243.0], [77.0, 1243.0], [77.1, 1245.0], [77.2, 1250.0], [77.3, 1252.0], [77.4, 1252.0], [77.5, 1252.0], [77.6, 1252.0], [77.7, 1253.0], [77.8, 1253.0], [77.9, 1253.0], [78.0, 1258.0], [78.1, 1259.0], [78.2, 1259.0], [78.3, 1260.0], [78.4, 1263.0], [78.5, 1263.0], [78.6, 1263.0], [78.7, 1264.0], [78.8, 1271.0], [78.9, 1271.0], [79.0, 1272.0], [79.1, 1273.0], [79.2, 1273.0], [79.3, 1273.0], [79.4, 1276.0], [79.5, 1280.0], [79.6, 1280.0], [79.7, 1280.0], [79.8, 1281.0], [79.9, 1283.0], [80.0, 1285.0], [80.1, 1285.0], [80.2, 1288.0], [80.3, 1288.0], [80.4, 1288.0], [80.5, 1289.0], [80.6, 1290.0], [80.7, 1290.0], [80.8, 1290.0], [80.9, 1290.0], [81.0, 1295.0], [81.1, 1300.0], [81.2, 1300.0], [81.3, 1302.0], [81.4, 1309.0], [81.5, 1313.0], [81.6, 1313.0], [81.7, 1316.0], [81.8, 1317.0], [81.9, 1317.0], [82.0, 1320.0], [82.1, 1321.0], [82.2, 1321.0], [82.3, 1321.0], [82.4, 1325.0], [82.5, 1326.0], [82.6, 1329.0], [82.7, 1329.0], [82.8, 1334.0], [82.9, 1337.0], [83.0, 1339.0], [83.1, 1339.0], [83.2, 1340.0], [83.3, 1341.0], [83.4, 1341.0], [83.5, 1341.0], [83.6, 1343.0], [83.7, 1350.0], [83.8, 1350.0], [83.9, 1351.0], [84.0, 1353.0], [84.1, 1355.0], [84.2, 1355.0], [84.3, 1362.0], [84.4, 1365.0], [84.5, 1368.0], [84.6, 1368.0], [84.7, 1369.0], [84.8, 1370.0], [84.9, 1372.0], [85.0, 1372.0], [85.1, 1377.0], [85.2, 1383.0], [85.3, 1383.0], [85.4, 1383.0], [85.5, 1390.0], [85.6, 1390.0], [85.7, 1390.0], [85.8, 1392.0], [85.9, 1394.0], [86.0, 1394.0], [86.1, 1394.0], [86.2, 1397.0], [86.3, 1397.0], [86.4, 1406.0], [86.5, 1406.0], [86.6, 1410.0], [86.7, 1413.0], [86.8, 1413.0], [86.9, 1414.0], [87.0, 1416.0], [87.1, 1418.0], [87.2, 1418.0], [87.3, 1422.0], [87.4, 1432.0], [87.5, 1434.0], [87.6, 1434.0], [87.7, 1435.0], [87.8, 1435.0], [87.9, 1441.0], [88.0, 1441.0], [88.1, 1444.0], [88.2, 1453.0], [88.3, 1453.0], [88.4, 1453.0], [88.5, 1453.0], [88.6, 1457.0], [88.7, 1457.0], [88.8, 1459.0], [88.9, 1467.0], [89.0, 1469.0], [89.1, 1469.0], [89.2, 1470.0], [89.3, 1472.0], [89.4, 1474.0], [89.5, 1474.0], [89.6, 1476.0], [89.7, 1481.0], [89.8, 1489.0], [89.9, 1489.0], [90.0, 1489.0], [90.1, 1490.0], [90.2, 1490.0], [90.3, 1497.0], [90.4, 1503.0], [90.5, 1514.0], [90.6, 1514.0], [90.7, 1514.0], [90.8, 1536.0], [90.9, 1539.0], [91.0, 1539.0], [91.1, 1543.0], [91.2, 1547.0], [91.3, 1550.0], [91.4, 1550.0], [91.5, 1567.0], [91.6, 1571.0], [91.7, 1571.0], [91.8, 1578.0], [91.9, 1580.0], [92.0, 1580.0], [92.1, 1580.0], [92.2, 1583.0], [92.3, 1584.0], [92.4, 1587.0], [92.5, 1587.0], [92.6, 1590.0], [92.7, 1593.0], [92.8, 1624.0], [92.9, 1624.0], [93.0, 1625.0], [93.1, 1625.0], [93.2, 1638.0], [93.3, 1638.0], [93.4, 1639.0], [93.5, 1641.0], [93.6, 1641.0], [93.7, 1644.0], [93.8, 1648.0], [93.9, 1657.0], [94.0, 1657.0], [94.1, 1676.0], [94.2, 1682.0], [94.3, 1688.0], [94.4, 1688.0], [94.5, 1723.0], [94.6, 1726.0], [94.7, 1731.0], [94.8, 1731.0], [94.9, 1745.0], [95.0, 1749.0], [95.1, 1749.0], [95.2, 1765.0], [95.3, 1771.0], [95.4, 1782.0], [95.5, 1782.0], [95.6, 1783.0], [95.7, 1794.0], [95.8, 1821.0], [95.9, 1821.0], [96.0, 1828.0], [96.1, 1829.0], [96.2, 1912.0], [96.3, 1912.0], [96.4, 1935.0], [96.5, 1947.0], [96.6, 1994.0], [96.7, 1994.0], [96.8, 2037.0], [96.9, 2047.0], [97.0, 2047.0], [97.1, 2108.0], [97.2, 2121.0], [97.3, 2126.0], [97.4, 2126.0], [97.5, 2143.0], [97.6, 2171.0], [97.7, 2423.0], [97.8, 2423.0], [97.9, 2435.0], [98.0, 2477.0], [98.1, 2637.0], [98.2, 2637.0], [98.3, 2673.0], [98.4, 2694.0], [98.5, 2694.0], [98.6, 2747.0], [98.7, 2825.0], [98.8, 2826.0], [98.9, 2826.0], [99.0, 2920.0], [99.1, 3003.0], [99.2, 3079.0], [99.3, 3079.0], [99.4, 3211.0], [99.5, 3333.0], [99.6, 3339.0], [99.7, 3339.0], [99.8, 4031.0], [99.9, 4834.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 76.0, "series": [{"data": [[0.0, 43.0], [600.0, 32.0], [700.0, 50.0], [800.0, 26.0], [900.0, 30.0], [1000.0, 47.0], [1100.0, 36.0], [1200.0, 56.0], [1300.0, 39.0], [1400.0, 29.0], [1500.0, 18.0], [100.0, 76.0], [1600.0, 12.0], [1700.0, 10.0], [1800.0, 3.0], [1900.0, 4.0], [2000.0, 2.0], [2100.0, 5.0], [2400.0, 3.0], [2600.0, 3.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 2.0], [200.0, 68.0], [3200.0, 1.0], [3300.0, 2.0], [4000.0, 1.0], [300.0, 44.0], [4800.0, 1.0], [400.0, 43.0], [500.0, 45.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 71.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 390.0, "series": [{"data": [[0.0, 274.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 390.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 71.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.79166666666667, "minX": 1.60402914E12, "maxY": 10.0, "series": [{"data": [[1.6040292E12, 9.79166666666667], [1.60402914E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040292E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 135.0, "minX": 1.0, "maxY": 3339.0, "series": [{"data": [[8.0, 3339.0], [4.0, 1783.0], [2.0, 940.0], [1.0, 737.0], [9.0, 135.0], [10.0, 811.0991735537187], [5.0, 322.0], [6.0, 653.0], [3.0, 1828.0], [7.0, 260.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 814.7687074829928]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1618.2666666666667, "minX": 1.60402914E12, "maxY": 1362436.4333333333, "series": [{"data": [[1.6040292E12, 473101.11666666664], [1.60402914E12, 1362436.4333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6040292E12, 1618.2666666666667], [1.60402914E12, 3904.766666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040292E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 747.7824074074077, "minX": 1.60402914E12, "maxY": 842.6473988439303, "series": [{"data": [[1.6040292E12, 747.7824074074077], [1.60402914E12, 842.6473988439303]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040292E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 746.7731481481483, "minX": 1.60402914E12, "maxY": 841.479768786127, "series": [{"data": [[1.6040292E12, 746.7731481481483], [1.60402914E12, 841.479768786127]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040292E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.004629629629629629, "minX": 1.60402914E12, "maxY": 0.1984585741811175, "series": [{"data": [[1.6040292E12, 0.004629629629629629], [1.60402914E12, 0.1984585741811175]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040292E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60402914E12, "maxY": 4834.0, "series": [{"data": [[1.6040292E12, 3339.0], [1.60402914E12, 4834.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6040292E12, 18.0], [1.60402914E12, 9.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6040292E12, 18.59320008277893], [1.60402914E12, 9.148000049591065]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6040292E12, 18.245999896526335], [1.60402914E12, 9.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6040292E12, 18.0], [1.60402914E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6040292E12, 661.0], [1.60402914E12, 749.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040292E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 191.0, "minX": 1.0, "maxY": 1607.0, "series": [{"data": [[8.0, 1112.5], [9.0, 1174.5], [10.0, 1009.5], [11.0, 995.5], [12.0, 904.0], [13.0, 911.0], [14.0, 609.5], [15.0, 397.5], [1.0, 1607.0], [16.0, 234.5], [17.0, 276.0], [18.0, 461.0], [19.0, 394.0], [21.0, 303.0], [22.0, 250.5], [23.0, 510.0], [6.0, 1261.5], [24.0, 253.0], [7.0, 1317.0], [29.0, 191.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 190.0, "minX": 1.0, "maxY": 1604.5, "series": [{"data": [[8.0, 1111.0], [9.0, 1173.0], [10.0, 1009.5], [11.0, 995.0], [12.0, 903.5], [13.0, 911.0], [14.0, 607.0], [15.0, 397.5], [1.0, 1604.5], [16.0, 234.5], [17.0, 276.0], [18.0, 460.0], [19.0, 394.0], [21.0, 302.0], [22.0, 250.0], [23.0, 508.0], [6.0, 1259.0], [24.0, 252.5], [7.0, 1316.0], [29.0, 190.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.433333333333333, "minX": 1.60402914E12, "maxY": 8.816666666666666, "series": [{"data": [[1.6040292E12, 3.433333333333333], [1.60402914E12, 8.816666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040292E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.6, "minX": 1.60402914E12, "maxY": 8.65, "series": [{"data": [[1.6040292E12, 3.6], [1.60402914E12, 8.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040292E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.6, "minX": 1.60402914E12, "maxY": 8.65, "series": [{"data": [[1.6040292E12, 3.6], [1.60402914E12, 8.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040292E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.6, "minX": 1.60402914E12, "maxY": 8.65, "series": [{"data": [[1.6040292E12, 3.6], [1.60402914E12, 8.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040292E12, "title": "Total Transactions Per Second"}},
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

