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
        data: {"result": {"minY": 194.0, "minX": 0.0, "maxY": 4213.0, "series": [{"data": [[0.0, 194.0], [0.1, 194.0], [0.2, 195.0], [0.3, 201.0], [0.4, 201.0], [0.5, 207.0], [0.6, 211.0], [0.7, 213.0], [0.8, 213.0], [0.9, 214.0], [1.0, 223.0], [1.1, 224.0], [1.2, 224.0], [1.3, 225.0], [1.4, 228.0], [1.5, 235.0], [1.6, 235.0], [1.7, 239.0], [1.8, 241.0], [1.9, 241.0], [2.0, 245.0], [2.1, 280.0], [2.2, 292.0], [2.3, 292.0], [2.4, 303.0], [2.5, 307.0], [2.6, 311.0], [2.7, 311.0], [2.8, 323.0], [2.9, 324.0], [3.0, 325.0], [3.1, 325.0], [3.2, 326.0], [3.3, 328.0], [3.4, 328.0], [3.5, 332.0], [3.6, 337.0], [3.7, 337.0], [3.8, 337.0], [3.9, 338.0], [4.0, 339.0], [4.1, 339.0], [4.2, 339.0], [4.3, 340.0], [4.4, 344.0], [4.5, 344.0], [4.6, 344.0], [4.7, 344.0], [4.8, 345.0], [4.9, 345.0], [5.0, 345.0], [5.1, 349.0], [5.2, 350.0], [5.3, 350.0], [5.4, 351.0], [5.5, 356.0], [5.6, 356.0], [5.7, 356.0], [5.8, 359.0], [5.9, 360.0], [6.0, 361.0], [6.1, 361.0], [6.2, 367.0], [6.3, 368.0], [6.4, 369.0], [6.5, 369.0], [6.6, 370.0], [6.7, 372.0], [6.8, 372.0], [6.9, 375.0], [7.0, 375.0], [7.1, 378.0], [7.2, 378.0], [7.3, 378.0], [7.4, 383.0], [7.5, 383.0], [7.6, 383.0], [7.7, 384.0], [7.8, 385.0], [7.9, 385.0], [8.0, 385.0], [8.1, 386.0], [8.2, 386.0], [8.3, 390.0], [8.4, 390.0], [8.5, 394.0], [8.6, 397.0], [8.7, 397.0], [8.8, 399.0], [8.9, 399.0], [9.0, 402.0], [9.1, 402.0], [9.2, 402.0], [9.3, 410.0], [9.4, 414.0], [9.5, 414.0], [9.6, 416.0], [9.7, 425.0], [9.8, 428.0], [9.9, 428.0], [10.0, 432.0], [10.1, 434.0], [10.2, 434.0], [10.3, 435.0], [10.4, 437.0], [10.5, 438.0], [10.6, 438.0], [10.7, 439.0], [10.8, 443.0], [10.9, 445.0], [11.0, 445.0], [11.1, 446.0], [11.2, 448.0], [11.3, 450.0], [11.4, 450.0], [11.5, 451.0], [11.6, 452.0], [11.7, 452.0], [11.8, 452.0], [11.9, 453.0], [12.0, 457.0], [12.1, 457.0], [12.2, 458.0], [12.3, 458.0], [12.4, 458.0], [12.5, 458.0], [12.6, 461.0], [12.7, 462.0], [12.8, 467.0], [12.9, 467.0], [13.0, 470.0], [13.1, 470.0], [13.2, 472.0], [13.3, 472.0], [13.4, 472.0], [13.5, 472.0], [13.6, 472.0], [13.7, 473.0], [13.8, 473.0], [13.9, 475.0], [14.0, 475.0], [14.1, 475.0], [14.2, 475.0], [14.3, 475.0], [14.4, 475.0], [14.5, 478.0], [14.6, 479.0], [14.7, 479.0], [14.8, 479.0], [14.9, 481.0], [15.0, 481.0], [15.1, 481.0], [15.2, 482.0], [15.3, 484.0], [15.4, 488.0], [15.5, 488.0], [15.6, 494.0], [15.7, 494.0], [15.8, 495.0], [15.9, 495.0], [16.0, 498.0], [16.1, 500.0], [16.2, 501.0], [16.3, 501.0], [16.4, 501.0], [16.5, 504.0], [16.6, 505.0], [16.7, 505.0], [16.8, 509.0], [16.9, 514.0], [17.0, 514.0], [17.1, 520.0], [17.2, 520.0], [17.3, 523.0], [17.4, 523.0], [17.5, 525.0], [17.6, 527.0], [17.7, 530.0], [17.8, 530.0], [17.9, 530.0], [18.0, 533.0], [18.1, 534.0], [18.2, 534.0], [18.3, 534.0], [18.4, 536.0], [18.5, 536.0], [18.6, 540.0], [18.7, 541.0], [18.8, 542.0], [18.9, 542.0], [19.0, 546.0], [19.1, 548.0], [19.2, 557.0], [19.3, 557.0], [19.4, 558.0], [19.5, 560.0], [19.6, 561.0], [19.7, 561.0], [19.8, 565.0], [19.9, 571.0], [20.0, 572.0], [20.1, 572.0], [20.2, 572.0], [20.3, 573.0], [20.4, 573.0], [20.5, 574.0], [20.6, 580.0], [20.7, 581.0], [20.8, 581.0], [20.9, 586.0], [21.0, 587.0], [21.1, 591.0], [21.2, 591.0], [21.3, 594.0], [21.4, 594.0], [21.5, 599.0], [21.6, 599.0], [21.7, 599.0], [21.8, 606.0], [21.9, 606.0], [22.0, 607.0], [22.1, 608.0], [22.2, 609.0], [22.3, 609.0], [22.4, 610.0], [22.5, 612.0], [22.6, 614.0], [22.7, 614.0], [22.8, 616.0], [22.9, 617.0], [23.0, 620.0], [23.1, 620.0], [23.2, 620.0], [23.3, 620.0], [23.4, 620.0], [23.5, 621.0], [23.6, 621.0], [23.7, 625.0], [23.8, 625.0], [23.9, 625.0], [24.0, 626.0], [24.1, 627.0], [24.2, 627.0], [24.3, 628.0], [24.4, 630.0], [24.5, 630.0], [24.6, 630.0], [24.7, 631.0], [24.8, 639.0], [24.9, 644.0], [25.0, 644.0], [25.1, 646.0], [25.2, 647.0], [25.3, 647.0], [25.4, 647.0], [25.5, 647.0], [25.6, 648.0], [25.7, 648.0], [25.8, 649.0], [25.9, 651.0], [26.0, 652.0], [26.1, 652.0], [26.2, 653.0], [26.3, 654.0], [26.4, 655.0], [26.5, 655.0], [26.6, 657.0], [26.7, 657.0], [26.8, 657.0], [26.9, 657.0], [27.0, 659.0], [27.1, 661.0], [27.2, 661.0], [27.3, 661.0], [27.4, 662.0], [27.5, 663.0], [27.6, 663.0], [27.7, 664.0], [27.8, 665.0], [27.9, 665.0], [28.0, 665.0], [28.1, 666.0], [28.2, 666.0], [28.3, 667.0], [28.4, 667.0], [28.5, 667.0], [28.6, 667.0], [28.7, 667.0], [28.8, 670.0], [28.9, 671.0], [29.0, 672.0], [29.1, 672.0], [29.2, 675.0], [29.3, 676.0], [29.4, 678.0], [29.5, 678.0], [29.6, 682.0], [29.7, 685.0], [29.8, 685.0], [29.9, 685.0], [30.0, 685.0], [30.1, 688.0], [30.2, 688.0], [30.3, 689.0], [30.4, 689.0], [30.5, 690.0], [30.6, 690.0], [30.7, 691.0], [30.8, 693.0], [30.9, 697.0], [31.0, 697.0], [31.1, 698.0], [31.2, 700.0], [31.3, 702.0], [31.4, 702.0], [31.5, 702.0], [31.6, 703.0], [31.7, 703.0], [31.8, 704.0], [31.9, 706.0], [32.0, 706.0], [32.1, 706.0], [32.2, 708.0], [32.3, 708.0], [32.4, 710.0], [32.5, 710.0], [32.6, 712.0], [32.7, 712.0], [32.8, 714.0], [32.9, 714.0], [33.0, 714.0], [33.1, 721.0], [33.2, 723.0], [33.3, 723.0], [33.4, 724.0], [33.5, 728.0], [33.6, 728.0], [33.7, 729.0], [33.8, 734.0], [33.9, 735.0], [34.0, 735.0], [34.1, 736.0], [34.2, 737.0], [34.3, 739.0], [34.4, 739.0], [34.5, 740.0], [34.6, 741.0], [34.7, 743.0], [34.8, 743.0], [34.9, 745.0], [35.0, 745.0], [35.1, 745.0], [35.2, 746.0], [35.3, 749.0], [35.4, 751.0], [35.5, 751.0], [35.6, 752.0], [35.7, 755.0], [35.8, 756.0], [35.9, 756.0], [36.0, 760.0], [36.1, 760.0], [36.2, 762.0], [36.3, 762.0], [36.4, 766.0], [36.5, 766.0], [36.6, 770.0], [36.7, 770.0], [36.8, 770.0], [36.9, 776.0], [37.0, 776.0], [37.1, 780.0], [37.2, 781.0], [37.3, 782.0], [37.4, 782.0], [37.5, 791.0], [37.6, 791.0], [37.7, 792.0], [37.8, 792.0], [37.9, 792.0], [38.0, 795.0], [38.1, 795.0], [38.2, 795.0], [38.3, 795.0], [38.4, 799.0], [38.5, 799.0], [38.6, 799.0], [38.7, 800.0], [38.8, 801.0], [38.9, 801.0], [39.0, 801.0], [39.1, 805.0], [39.2, 807.0], [39.3, 807.0], [39.4, 812.0], [39.5, 813.0], [39.6, 817.0], [39.7, 817.0], [39.8, 818.0], [39.9, 821.0], [40.0, 821.0], [40.1, 821.0], [40.2, 822.0], [40.3, 822.0], [40.4, 822.0], [40.5, 823.0], [40.6, 823.0], [40.7, 825.0], [40.8, 825.0], [40.9, 827.0], [41.0, 835.0], [41.1, 835.0], [41.2, 835.0], [41.3, 836.0], [41.4, 837.0], [41.5, 841.0], [41.6, 841.0], [41.7, 848.0], [41.8, 849.0], [41.9, 849.0], [42.0, 849.0], [42.1, 850.0], [42.2, 851.0], [42.3, 851.0], [42.4, 853.0], [42.5, 855.0], [42.6, 857.0], [42.7, 857.0], [42.8, 858.0], [42.9, 859.0], [43.0, 860.0], [43.1, 860.0], [43.2, 862.0], [43.3, 864.0], [43.4, 864.0], [43.5, 864.0], [43.6, 869.0], [43.7, 869.0], [43.8, 869.0], [43.9, 870.0], [44.0, 872.0], [44.1, 876.0], [44.2, 876.0], [44.3, 884.0], [44.4, 891.0], [44.5, 892.0], [44.6, 892.0], [44.7, 893.0], [44.8, 893.0], [44.9, 898.0], [45.0, 898.0], [45.1, 900.0], [45.2, 901.0], [45.3, 901.0], [45.4, 902.0], [45.5, 902.0], [45.6, 909.0], [45.7, 909.0], [45.8, 909.0], [45.9, 911.0], [46.0, 914.0], [46.1, 914.0], [46.2, 917.0], [46.3, 918.0], [46.4, 918.0], [46.5, 918.0], [46.6, 923.0], [46.7, 929.0], [46.8, 929.0], [46.9, 930.0], [47.0, 931.0], [47.1, 932.0], [47.2, 932.0], [47.3, 934.0], [47.4, 937.0], [47.5, 944.0], [47.6, 944.0], [47.7, 944.0], [47.8, 947.0], [47.9, 947.0], [48.0, 947.0], [48.1, 948.0], [48.2, 953.0], [48.3, 957.0], [48.4, 957.0], [48.5, 959.0], [48.6, 959.0], [48.7, 959.0], [48.8, 961.0], [48.9, 961.0], [49.0, 962.0], [49.1, 962.0], [49.2, 963.0], [49.3, 964.0], [49.4, 965.0], [49.5, 965.0], [49.6, 966.0], [49.7, 971.0], [49.8, 972.0], [49.9, 972.0], [50.0, 976.0], [50.1, 978.0], [50.2, 978.0], [50.3, 978.0], [50.4, 983.0], [50.5, 983.0], [50.6, 983.0], [50.7, 983.0], [50.8, 984.0], [50.9, 987.0], [51.0, 987.0], [51.1, 994.0], [51.2, 995.0], [51.3, 996.0], [51.4, 996.0], [51.5, 997.0], [51.6, 998.0], [51.7, 998.0], [51.8, 1007.0], [51.9, 1010.0], [52.0, 1014.0], [52.1, 1014.0], [52.2, 1014.0], [52.3, 1017.0], [52.4, 1017.0], [52.5, 1017.0], [52.6, 1019.0], [52.7, 1023.0], [52.8, 1023.0], [52.9, 1023.0], [53.0, 1026.0], [53.1, 1027.0], [53.2, 1027.0], [53.3, 1027.0], [53.4, 1028.0], [53.5, 1029.0], [53.6, 1029.0], [53.7, 1031.0], [53.8, 1032.0], [53.9, 1034.0], [54.0, 1034.0], [54.1, 1034.0], [54.2, 1034.0], [54.3, 1037.0], [54.4, 1037.0], [54.5, 1037.0], [54.6, 1037.0], [54.7, 1038.0], [54.8, 1038.0], [54.9, 1040.0], [55.0, 1042.0], [55.1, 1042.0], [55.2, 1044.0], [55.3, 1044.0], [55.4, 1053.0], [55.5, 1053.0], [55.6, 1054.0], [55.7, 1058.0], [55.8, 1058.0], [55.9, 1058.0], [56.0, 1062.0], [56.1, 1063.0], [56.2, 1064.0], [56.3, 1064.0], [56.4, 1070.0], [56.5, 1071.0], [56.6, 1072.0], [56.7, 1072.0], [56.8, 1075.0], [56.9, 1076.0], [57.0, 1076.0], [57.1, 1081.0], [57.2, 1082.0], [57.3, 1083.0], [57.4, 1083.0], [57.5, 1085.0], [57.6, 1085.0], [57.7, 1087.0], [57.8, 1087.0], [57.9, 1089.0], [58.0, 1090.0], [58.1, 1092.0], [58.2, 1092.0], [58.3, 1094.0], [58.4, 1095.0], [58.5, 1095.0], [58.6, 1097.0], [58.7, 1098.0], [58.8, 1105.0], [58.9, 1105.0], [59.0, 1106.0], [59.1, 1107.0], [59.2, 1108.0], [59.3, 1108.0], [59.4, 1111.0], [59.5, 1115.0], [59.6, 1118.0], [59.7, 1118.0], [59.8, 1120.0], [59.9, 1122.0], [60.0, 1125.0], [60.1, 1125.0], [60.2, 1126.0], [60.3, 1128.0], [60.4, 1128.0], [60.5, 1130.0], [60.6, 1133.0], [60.7, 1133.0], [60.8, 1133.0], [60.9, 1138.0], [61.0, 1138.0], [61.1, 1138.0], [61.2, 1138.0], [61.3, 1140.0], [61.4, 1140.0], [61.5, 1141.0], [61.6, 1141.0], [61.7, 1144.0], [61.8, 1147.0], [61.9, 1147.0], [62.0, 1149.0], [62.1, 1154.0], [62.2, 1156.0], [62.3, 1156.0], [62.4, 1156.0], [62.5, 1156.0], [62.6, 1161.0], [62.7, 1161.0], [62.8, 1162.0], [62.9, 1165.0], [63.0, 1165.0], [63.1, 1165.0], [63.2, 1166.0], [63.3, 1166.0], [63.4, 1166.0], [63.5, 1168.0], [63.6, 1169.0], [63.7, 1169.0], [63.8, 1169.0], [63.9, 1171.0], [64.0, 1173.0], [64.1, 1174.0], [64.2, 1174.0], [64.3, 1174.0], [64.4, 1177.0], [64.5, 1180.0], [64.6, 1180.0], [64.7, 1182.0], [64.8, 1186.0], [64.9, 1186.0], [65.0, 1186.0], [65.1, 1188.0], [65.2, 1192.0], [65.3, 1192.0], [65.4, 1193.0], [65.5, 1193.0], [65.6, 1193.0], [65.7, 1193.0], [65.8, 1194.0], [65.9, 1200.0], [66.0, 1204.0], [66.1, 1204.0], [66.2, 1206.0], [66.3, 1206.0], [66.4, 1207.0], [66.5, 1207.0], [66.6, 1209.0], [66.7, 1217.0], [66.8, 1217.0], [66.9, 1219.0], [67.0, 1222.0], [67.1, 1223.0], [67.2, 1223.0], [67.3, 1227.0], [67.4, 1227.0], [67.5, 1231.0], [67.6, 1231.0], [67.7, 1232.0], [67.8, 1235.0], [67.9, 1237.0], [68.0, 1237.0], [68.1, 1238.0], [68.2, 1239.0], [68.3, 1240.0], [68.4, 1240.0], [68.5, 1244.0], [68.6, 1244.0], [68.7, 1244.0], [68.8, 1245.0], [68.9, 1245.0], [69.0, 1249.0], [69.1, 1249.0], [69.2, 1250.0], [69.3, 1253.0], [69.4, 1254.0], [69.5, 1254.0], [69.6, 1256.0], [69.7, 1257.0], [69.8, 1259.0], [69.9, 1259.0], [70.0, 1261.0], [70.1, 1264.0], [70.2, 1264.0], [70.3, 1266.0], [70.4, 1268.0], [70.5, 1269.0], [70.6, 1269.0], [70.7, 1271.0], [70.8, 1272.0], [70.9, 1280.0], [71.0, 1280.0], [71.1, 1284.0], [71.2, 1284.0], [71.3, 1285.0], [71.4, 1285.0], [71.5, 1287.0], [71.6, 1289.0], [71.7, 1289.0], [71.8, 1289.0], [71.9, 1290.0], [72.0, 1290.0], [72.1, 1290.0], [72.2, 1291.0], [72.3, 1298.0], [72.4, 1298.0], [72.5, 1298.0], [72.6, 1300.0], [72.7, 1305.0], [72.8, 1305.0], [72.9, 1305.0], [73.0, 1305.0], [73.1, 1305.0], [73.2, 1306.0], [73.3, 1306.0], [73.4, 1307.0], [73.5, 1309.0], [73.6, 1309.0], [73.7, 1310.0], [73.8, 1320.0], [73.9, 1321.0], [74.0, 1321.0], [74.1, 1321.0], [74.2, 1324.0], [74.3, 1327.0], [74.4, 1327.0], [74.5, 1327.0], [74.6, 1327.0], [74.7, 1333.0], [74.8, 1333.0], [74.9, 1335.0], [75.0, 1339.0], [75.1, 1339.0], [75.2, 1339.0], [75.3, 1339.0], [75.4, 1339.0], [75.5, 1339.0], [75.6, 1341.0], [75.7, 1342.0], [75.8, 1342.0], [75.9, 1342.0], [76.0, 1343.0], [76.1, 1344.0], [76.2, 1344.0], [76.3, 1344.0], [76.4, 1344.0], [76.5, 1344.0], [76.6, 1348.0], [76.7, 1348.0], [76.8, 1349.0], [76.9, 1350.0], [77.0, 1350.0], [77.1, 1357.0], [77.2, 1363.0], [77.3, 1363.0], [77.4, 1363.0], [77.5, 1365.0], [77.6, 1369.0], [77.7, 1375.0], [77.8, 1375.0], [77.9, 1378.0], [78.0, 1381.0], [78.1, 1383.0], [78.2, 1383.0], [78.3, 1388.0], [78.4, 1389.0], [78.5, 1389.0], [78.6, 1390.0], [78.7, 1391.0], [78.8, 1392.0], [78.9, 1392.0], [79.0, 1401.0], [79.1, 1407.0], [79.2, 1408.0], [79.3, 1408.0], [79.4, 1409.0], [79.5, 1410.0], [79.6, 1415.0], [79.7, 1415.0], [79.8, 1423.0], [79.9, 1424.0], [80.0, 1425.0], [80.1, 1425.0], [80.2, 1427.0], [80.3, 1429.0], [80.4, 1429.0], [80.5, 1431.0], [80.6, 1432.0], [80.7, 1436.0], [80.8, 1436.0], [80.9, 1437.0], [81.0, 1437.0], [81.1, 1439.0], [81.2, 1439.0], [81.3, 1440.0], [81.4, 1443.0], [81.5, 1445.0], [81.6, 1445.0], [81.7, 1446.0], [81.8, 1457.0], [81.9, 1457.0], [82.0, 1460.0], [82.1, 1466.0], [82.2, 1468.0], [82.3, 1468.0], [82.4, 1482.0], [82.5, 1485.0], [82.6, 1490.0], [82.7, 1490.0], [82.8, 1492.0], [82.9, 1492.0], [83.0, 1493.0], [83.1, 1493.0], [83.2, 1493.0], [83.3, 1497.0], [83.4, 1497.0], [83.5, 1508.0], [83.6, 1519.0], [83.7, 1522.0], [83.8, 1522.0], [83.9, 1522.0], [84.0, 1524.0], [84.1, 1526.0], [84.2, 1526.0], [84.3, 1526.0], [84.4, 1530.0], [84.5, 1533.0], [84.6, 1533.0], [84.7, 1549.0], [84.8, 1551.0], [84.9, 1556.0], [85.0, 1556.0], [85.1, 1560.0], [85.2, 1566.0], [85.3, 1566.0], [85.4, 1569.0], [85.5, 1578.0], [85.6, 1579.0], [85.7, 1579.0], [85.8, 1585.0], [85.9, 1586.0], [86.0, 1590.0], [86.1, 1590.0], [86.2, 1593.0], [86.3, 1605.0], [86.4, 1606.0], [86.5, 1606.0], [86.6, 1607.0], [86.7, 1610.0], [86.8, 1610.0], [86.9, 1613.0], [87.0, 1614.0], [87.1, 1616.0], [87.2, 1616.0], [87.3, 1632.0], [87.4, 1639.0], [87.5, 1648.0], [87.6, 1648.0], [87.7, 1653.0], [87.8, 1657.0], [87.9, 1658.0], [88.0, 1658.0], [88.1, 1661.0], [88.2, 1667.0], [88.3, 1679.0], [88.4, 1679.0], [88.5, 1684.0], [88.6, 1712.0], [88.7, 1712.0], [88.8, 1715.0], [88.9, 1724.0], [89.0, 1731.0], [89.1, 1731.0], [89.2, 1733.0], [89.3, 1744.0], [89.4, 1748.0], [89.5, 1748.0], [89.6, 1750.0], [89.7, 1759.0], [89.8, 1769.0], [89.9, 1769.0], [90.0, 1774.0], [90.1, 1788.0], [90.2, 1788.0], [90.3, 1794.0], [90.4, 1800.0], [90.5, 1805.0], [90.6, 1805.0], [90.7, 1806.0], [90.8, 1810.0], [90.9, 1812.0], [91.0, 1812.0], [91.1, 1823.0], [91.2, 1830.0], [91.3, 1839.0], [91.4, 1839.0], [91.5, 1844.0], [91.6, 1846.0], [91.7, 1846.0], [91.8, 1847.0], [91.9, 1858.0], [92.0, 1863.0], [92.1, 1863.0], [92.2, 1869.0], [92.3, 1869.0], [92.4, 1870.0], [92.5, 1870.0], [92.6, 1874.0], [92.7, 1876.0], [92.8, 1885.0], [92.9, 1885.0], [93.0, 1887.0], [93.1, 1888.0], [93.2, 1902.0], [93.3, 1902.0], [93.4, 1903.0], [93.5, 1907.0], [93.6, 1907.0], [93.7, 1911.0], [93.8, 1915.0], [93.9, 1921.0], [94.0, 1921.0], [94.1, 1930.0], [94.2, 1965.0], [94.3, 1993.0], [94.4, 1993.0], [94.5, 2003.0], [94.6, 2004.0], [94.7, 2007.0], [94.8, 2007.0], [94.9, 2008.0], [95.0, 2061.0], [95.1, 2061.0], [95.2, 2068.0], [95.3, 2081.0], [95.4, 2090.0], [95.5, 2090.0], [95.6, 2098.0], [95.7, 2117.0], [95.8, 2119.0], [95.9, 2119.0], [96.0, 2138.0], [96.1, 2148.0], [96.2, 2204.0], [96.3, 2204.0], [96.4, 2227.0], [96.5, 2228.0], [96.6, 2248.0], [96.7, 2248.0], [96.8, 2290.0], [96.9, 2396.0], [97.0, 2396.0], [97.1, 2483.0], [97.2, 2504.0], [97.3, 2541.0], [97.4, 2541.0], [97.5, 2551.0], [97.6, 2603.0], [97.7, 2672.0], [97.8, 2672.0], [97.9, 2678.0], [98.0, 2729.0], [98.1, 2789.0], [98.2, 2789.0], [98.3, 2891.0], [98.4, 2897.0], [98.5, 2897.0], [98.6, 3036.0], [98.7, 3092.0], [98.8, 3143.0], [98.9, 3143.0], [99.0, 3397.0], [99.1, 3400.0], [99.2, 3569.0], [99.3, 3569.0], [99.4, 3693.0], [99.5, 3780.0], [99.6, 3891.0], [99.7, 3891.0], [99.8, 4017.0], [99.9, 4213.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 69.0, "series": [{"data": [[600.0, 69.0], [700.0, 55.0], [800.0, 47.0], [900.0, 49.0], [1000.0, 52.0], [1100.0, 52.0], [1200.0, 49.0], [1300.0, 47.0], [1400.0, 33.0], [1500.0, 21.0], [1600.0, 17.0], [100.0, 2.0], [1700.0, 13.0], [1800.0, 21.0], [1900.0, 9.0], [2000.0, 9.0], [2100.0, 4.0], [2200.0, 5.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 3.0], [2600.0, 3.0], [2700.0, 2.0], [2800.0, 2.0], [3000.0, 2.0], [3100.0, 1.0], [3300.0, 1.0], [200.0, 15.0], [3400.0, 1.0], [3500.0, 1.0], [3700.0, 1.0], [3600.0, 1.0], [3800.0, 1.0], [4000.0, 1.0], [4200.0, 1.0], [300.0, 49.0], [400.0, 52.0], [500.0, 42.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 119.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 494.0, "series": [{"data": [[0.0, 119.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 494.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 122.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.896313364055297, "minX": 1.60248678E12, "maxY": 10.0, "series": [{"data": [[1.60248684E12, 9.896313364055297], [1.60248678E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248684E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 324.0, "minX": 1.0, "maxY": 2729.0, "series": [{"data": [[8.0, 324.0], [4.0, 2729.0], [2.0, 1111.0], [1.0, 1468.0], [9.0, 685.0], [10.0, 1054.8154269972442], [5.0, 1173.0], [6.0, 666.0], [3.0, 1174.0], [7.0, 639.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 1055.4625850340128]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2275.116666666667, "minX": 1.60248678E12, "maxY": 1047906.15, "series": [{"data": [[1.60248684E12, 1047906.15], [1.60248678E12, 787864.3666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60248684E12, 3247.9166666666665], [1.60248678E12, 2275.116666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248684E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1007.149769585253, "minX": 1.60248678E12, "maxY": 1125.1229235880394, "series": [{"data": [[1.60248684E12, 1007.149769585253], [1.60248678E12, 1125.1229235880394]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248684E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1005.94930875576, "minX": 1.60248678E12, "maxY": 1123.8637873754149, "series": [{"data": [[1.60248684E12, 1005.94930875576], [1.60248678E12, 1123.8637873754149]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248684E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.029953917050691222, "minX": 1.60248678E12, "maxY": 0.30897009966777417, "series": [{"data": [[1.60248684E12, 0.029953917050691222], [1.60248678E12, 0.30897009966777417]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248684E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 194.0, "minX": 1.60248678E12, "maxY": 4213.0, "series": [{"data": [[1.60248684E12, 3693.0], [1.60248678E12, 4213.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60248684E12, 206.48999937772751], [1.60248678E12, 213.7179999279976]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60248684E12, 211.90400066375733], [1.60248678E12, 213.98980002880097]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60248684E12, 209.11999917030334], [1.60248678E12, 213.8689999639988]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60248684E12, 194.0], [1.60248678E12, 211.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60248684E12, 961.5], [1.60248678E12, 1026.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248684E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 626.0, "minX": 5.0, "maxY": 1357.0, "series": [{"data": [[8.0, 1160.5], [16.0, 822.5], [9.0, 1015.5], [10.0, 1060.0], [5.0, 1357.0], [11.0, 824.0], [12.0, 755.5], [6.0, 1272.0], [13.0, 686.5], [7.0, 1162.0], [14.0, 677.0], [15.0, 626.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 625.5, "minX": 5.0, "maxY": 1355.0, "series": [{"data": [[8.0, 1159.5], [16.0, 822.5], [9.0, 1015.5], [10.0, 1057.5], [5.0, 1355.0], [11.0, 822.5], [12.0, 755.0], [6.0, 1270.5], [13.0, 684.5], [7.0, 1162.0], [14.0, 677.0], [15.0, 625.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.183333333333334, "minX": 1.60248678E12, "maxY": 7.066666666666666, "series": [{"data": [[1.60248684E12, 7.066666666666666], [1.60248678E12, 5.183333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248684E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.016666666666667, "minX": 1.60248678E12, "maxY": 7.233333333333333, "series": [{"data": [[1.60248684E12, 7.233333333333333], [1.60248678E12, 5.016666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248684E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.016666666666667, "minX": 1.60248678E12, "maxY": 7.233333333333333, "series": [{"data": [[1.60248684E12, 7.233333333333333], [1.60248678E12, 5.016666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248684E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.016666666666667, "minX": 1.60248678E12, "maxY": 7.233333333333333, "series": [{"data": [[1.60248684E12, 7.233333333333333], [1.60248678E12, 5.016666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248684E12, "title": "Total Transactions Per Second"}},
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

