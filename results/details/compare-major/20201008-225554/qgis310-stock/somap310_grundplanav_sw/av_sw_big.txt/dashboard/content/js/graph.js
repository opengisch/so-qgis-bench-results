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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 6671.0, "series": [{"data": [[0.0, 184.0], [0.1, 187.0], [0.2, 192.0], [0.3, 193.0], [0.4, 194.0], [0.5, 195.0], [0.6, 196.0], [0.7, 197.0], [0.8, 198.0], [0.9, 199.0], [1.0, 200.0], [1.1, 201.0], [1.2, 201.0], [1.3, 203.0], [1.4, 204.0], [1.5, 205.0], [1.6, 206.0], [1.7, 206.0], [1.8, 207.0], [1.9, 208.0], [2.0, 209.0], [2.1, 210.0], [2.2, 211.0], [2.3, 211.0], [2.4, 212.0], [2.5, 213.0], [2.6, 213.0], [2.7, 214.0], [2.8, 214.0], [2.9, 215.0], [3.0, 215.0], [3.1, 215.0], [3.2, 216.0], [3.3, 216.0], [3.4, 217.0], [3.5, 217.0], [3.6, 218.0], [3.7, 219.0], [3.8, 219.0], [3.9, 220.0], [4.0, 220.0], [4.1, 221.0], [4.2, 221.0], [4.3, 222.0], [4.4, 223.0], [4.5, 223.0], [4.6, 224.0], [4.7, 224.0], [4.8, 225.0], [4.9, 225.0], [5.0, 226.0], [5.1, 226.0], [5.2, 227.0], [5.3, 228.0], [5.4, 229.0], [5.5, 229.0], [5.6, 230.0], [5.7, 231.0], [5.8, 232.0], [5.9, 233.0], [6.0, 234.0], [6.1, 236.0], [6.2, 237.0], [6.3, 239.0], [6.4, 239.0], [6.5, 241.0], [6.6, 242.0], [6.7, 243.0], [6.8, 245.0], [6.9, 248.0], [7.0, 250.0], [7.1, 254.0], [7.2, 256.0], [7.3, 260.0], [7.4, 264.0], [7.5, 265.0], [7.6, 268.0], [7.7, 270.0], [7.8, 274.0], [7.9, 275.0], [8.0, 278.0], [8.1, 279.0], [8.2, 280.0], [8.3, 283.0], [8.4, 285.0], [8.5, 287.0], [8.6, 289.0], [8.7, 291.0], [8.8, 291.0], [8.9, 293.0], [9.0, 297.0], [9.1, 298.0], [9.2, 299.0], [9.3, 301.0], [9.4, 301.0], [9.5, 302.0], [9.6, 304.0], [9.7, 305.0], [9.8, 306.0], [9.9, 308.0], [10.0, 309.0], [10.1, 309.0], [10.2, 310.0], [10.3, 311.0], [10.4, 312.0], [10.5, 313.0], [10.6, 314.0], [10.7, 315.0], [10.8, 315.0], [10.9, 316.0], [11.0, 317.0], [11.1, 317.0], [11.2, 318.0], [11.3, 319.0], [11.4, 319.0], [11.5, 320.0], [11.6, 322.0], [11.7, 323.0], [11.8, 325.0], [11.9, 326.0], [12.0, 327.0], [12.1, 329.0], [12.2, 331.0], [12.3, 332.0], [12.4, 333.0], [12.5, 333.0], [12.6, 334.0], [12.7, 335.0], [12.8, 338.0], [12.9, 339.0], [13.0, 340.0], [13.1, 341.0], [13.2, 343.0], [13.3, 344.0], [13.4, 345.0], [13.5, 347.0], [13.6, 349.0], [13.7, 351.0], [13.8, 352.0], [13.9, 354.0], [14.0, 357.0], [14.1, 358.0], [14.2, 361.0], [14.3, 362.0], [14.4, 364.0], [14.5, 366.0], [14.6, 367.0], [14.7, 369.0], [14.8, 370.0], [14.9, 371.0], [15.0, 373.0], [15.1, 376.0], [15.2, 377.0], [15.3, 379.0], [15.4, 380.0], [15.5, 382.0], [15.6, 384.0], [15.7, 384.0], [15.8, 386.0], [15.9, 387.0], [16.0, 389.0], [16.1, 390.0], [16.2, 391.0], [16.3, 393.0], [16.4, 395.0], [16.5, 395.0], [16.6, 396.0], [16.7, 397.0], [16.8, 399.0], [16.9, 401.0], [17.0, 402.0], [17.1, 404.0], [17.2, 407.0], [17.3, 408.0], [17.4, 410.0], [17.5, 412.0], [17.6, 413.0], [17.7, 414.0], [17.8, 415.0], [17.9, 416.0], [18.0, 417.0], [18.1, 417.0], [18.2, 418.0], [18.3, 419.0], [18.4, 421.0], [18.5, 422.0], [18.6, 423.0], [18.7, 424.0], [18.8, 424.0], [18.9, 425.0], [19.0, 425.0], [19.1, 427.0], [19.2, 428.0], [19.3, 429.0], [19.4, 430.0], [19.5, 431.0], [19.6, 432.0], [19.7, 433.0], [19.8, 434.0], [19.9, 435.0], [20.0, 436.0], [20.1, 437.0], [20.2, 438.0], [20.3, 438.0], [20.4, 438.0], [20.5, 440.0], [20.6, 441.0], [20.7, 441.0], [20.8, 442.0], [20.9, 443.0], [21.0, 443.0], [21.1, 444.0], [21.2, 444.0], [21.3, 445.0], [21.4, 446.0], [21.5, 447.0], [21.6, 447.0], [21.7, 448.0], [21.8, 449.0], [21.9, 450.0], [22.0, 450.0], [22.1, 452.0], [22.2, 452.0], [22.3, 454.0], [22.4, 455.0], [22.5, 456.0], [22.6, 457.0], [22.7, 458.0], [22.8, 458.0], [22.9, 459.0], [23.0, 461.0], [23.1, 461.0], [23.2, 462.0], [23.3, 463.0], [23.4, 465.0], [23.5, 466.0], [23.6, 467.0], [23.7, 468.0], [23.8, 469.0], [23.9, 470.0], [24.0, 470.0], [24.1, 471.0], [24.2, 471.0], [24.3, 472.0], [24.4, 474.0], [24.5, 476.0], [24.6, 477.0], [24.7, 477.0], [24.8, 478.0], [24.9, 479.0], [25.0, 480.0], [25.1, 481.0], [25.2, 482.0], [25.3, 484.0], [25.4, 485.0], [25.5, 486.0], [25.6, 488.0], [25.7, 489.0], [25.8, 491.0], [25.9, 492.0], [26.0, 493.0], [26.1, 493.0], [26.2, 495.0], [26.3, 497.0], [26.4, 498.0], [26.5, 501.0], [26.6, 502.0], [26.7, 502.0], [26.8, 504.0], [26.9, 506.0], [27.0, 507.0], [27.1, 509.0], [27.2, 510.0], [27.3, 511.0], [27.4, 514.0], [27.5, 515.0], [27.6, 516.0], [27.7, 517.0], [27.8, 519.0], [27.9, 521.0], [28.0, 522.0], [28.1, 523.0], [28.2, 526.0], [28.3, 527.0], [28.4, 529.0], [28.5, 530.0], [28.6, 532.0], [28.7, 533.0], [28.8, 534.0], [28.9, 535.0], [29.0, 536.0], [29.1, 537.0], [29.2, 538.0], [29.3, 539.0], [29.4, 539.0], [29.5, 541.0], [29.6, 542.0], [29.7, 542.0], [29.8, 542.0], [29.9, 543.0], [30.0, 544.0], [30.1, 546.0], [30.2, 547.0], [30.3, 549.0], [30.4, 550.0], [30.5, 552.0], [30.6, 553.0], [30.7, 554.0], [30.8, 555.0], [30.9, 556.0], [31.0, 557.0], [31.1, 558.0], [31.2, 559.0], [31.3, 560.0], [31.4, 562.0], [31.5, 564.0], [31.6, 565.0], [31.7, 567.0], [31.8, 568.0], [31.9, 570.0], [32.0, 572.0], [32.1, 573.0], [32.2, 574.0], [32.3, 575.0], [32.4, 576.0], [32.5, 578.0], [32.6, 579.0], [32.7, 581.0], [32.8, 582.0], [32.9, 582.0], [33.0, 584.0], [33.1, 587.0], [33.2, 588.0], [33.3, 590.0], [33.4, 591.0], [33.5, 592.0], [33.6, 594.0], [33.7, 595.0], [33.8, 596.0], [33.9, 597.0], [34.0, 598.0], [34.1, 599.0], [34.2, 600.0], [34.3, 601.0], [34.4, 603.0], [34.5, 604.0], [34.6, 605.0], [34.7, 607.0], [34.8, 608.0], [34.9, 609.0], [35.0, 611.0], [35.1, 612.0], [35.2, 613.0], [35.3, 614.0], [35.4, 614.0], [35.5, 615.0], [35.6, 616.0], [35.7, 617.0], [35.8, 618.0], [35.9, 619.0], [36.0, 620.0], [36.1, 622.0], [36.2, 624.0], [36.3, 624.0], [36.4, 625.0], [36.5, 626.0], [36.6, 628.0], [36.7, 630.0], [36.8, 631.0], [36.9, 632.0], [37.0, 632.0], [37.1, 634.0], [37.2, 635.0], [37.3, 636.0], [37.4, 636.0], [37.5, 637.0], [37.6, 638.0], [37.7, 638.0], [37.8, 639.0], [37.9, 641.0], [38.0, 642.0], [38.1, 643.0], [38.2, 644.0], [38.3, 645.0], [38.4, 646.0], [38.5, 647.0], [38.6, 648.0], [38.7, 649.0], [38.8, 650.0], [38.9, 651.0], [39.0, 651.0], [39.1, 652.0], [39.2, 653.0], [39.3, 655.0], [39.4, 655.0], [39.5, 657.0], [39.6, 659.0], [39.7, 660.0], [39.8, 661.0], [39.9, 662.0], [40.0, 663.0], [40.1, 666.0], [40.2, 668.0], [40.3, 669.0], [40.4, 670.0], [40.5, 671.0], [40.6, 672.0], [40.7, 673.0], [40.8, 674.0], [40.9, 675.0], [41.0, 676.0], [41.1, 677.0], [41.2, 677.0], [41.3, 678.0], [41.4, 680.0], [41.5, 682.0], [41.6, 682.0], [41.7, 685.0], [41.8, 685.0], [41.9, 688.0], [42.0, 690.0], [42.1, 691.0], [42.2, 692.0], [42.3, 694.0], [42.4, 696.0], [42.5, 698.0], [42.6, 700.0], [42.7, 701.0], [42.8, 703.0], [42.9, 704.0], [43.0, 706.0], [43.1, 707.0], [43.2, 708.0], [43.3, 708.0], [43.4, 710.0], [43.5, 711.0], [43.6, 713.0], [43.7, 713.0], [43.8, 716.0], [43.9, 718.0], [44.0, 721.0], [44.1, 722.0], [44.2, 726.0], [44.3, 727.0], [44.4, 729.0], [44.5, 729.0], [44.6, 732.0], [44.7, 733.0], [44.8, 735.0], [44.9, 736.0], [45.0, 737.0], [45.1, 739.0], [45.2, 740.0], [45.3, 742.0], [45.4, 742.0], [45.5, 744.0], [45.6, 745.0], [45.7, 747.0], [45.8, 748.0], [45.9, 749.0], [46.0, 751.0], [46.1, 754.0], [46.2, 755.0], [46.3, 757.0], [46.4, 759.0], [46.5, 761.0], [46.6, 762.0], [46.7, 763.0], [46.8, 765.0], [46.9, 768.0], [47.0, 770.0], [47.1, 772.0], [47.2, 775.0], [47.3, 776.0], [47.4, 778.0], [47.5, 780.0], [47.6, 784.0], [47.7, 787.0], [47.8, 789.0], [47.9, 790.0], [48.0, 791.0], [48.1, 793.0], [48.2, 794.0], [48.3, 797.0], [48.4, 799.0], [48.5, 800.0], [48.6, 804.0], [48.7, 806.0], [48.8, 808.0], [48.9, 811.0], [49.0, 811.0], [49.1, 815.0], [49.2, 816.0], [49.3, 818.0], [49.4, 820.0], [49.5, 821.0], [49.6, 824.0], [49.7, 827.0], [49.8, 829.0], [49.9, 830.0], [50.0, 832.0], [50.1, 836.0], [50.2, 838.0], [50.3, 841.0], [50.4, 843.0], [50.5, 845.0], [50.6, 846.0], [50.7, 849.0], [50.8, 850.0], [50.9, 852.0], [51.0, 853.0], [51.1, 855.0], [51.2, 856.0], [51.3, 858.0], [51.4, 860.0], [51.5, 862.0], [51.6, 864.0], [51.7, 867.0], [51.8, 870.0], [51.9, 872.0], [52.0, 876.0], [52.1, 878.0], [52.2, 880.0], [52.3, 881.0], [52.4, 885.0], [52.5, 887.0], [52.6, 890.0], [52.7, 891.0], [52.8, 893.0], [52.9, 896.0], [53.0, 897.0], [53.1, 898.0], [53.2, 899.0], [53.3, 900.0], [53.4, 902.0], [53.5, 903.0], [53.6, 906.0], [53.7, 909.0], [53.8, 911.0], [53.9, 913.0], [54.0, 916.0], [54.1, 918.0], [54.2, 919.0], [54.3, 921.0], [54.4, 923.0], [54.5, 926.0], [54.6, 927.0], [54.7, 930.0], [54.8, 933.0], [54.9, 936.0], [55.0, 938.0], [55.1, 940.0], [55.2, 943.0], [55.3, 946.0], [55.4, 948.0], [55.5, 949.0], [55.6, 952.0], [55.7, 955.0], [55.8, 957.0], [55.9, 959.0], [56.0, 962.0], [56.1, 963.0], [56.2, 964.0], [56.3, 967.0], [56.4, 971.0], [56.5, 973.0], [56.6, 976.0], [56.7, 978.0], [56.8, 980.0], [56.9, 983.0], [57.0, 984.0], [57.1, 987.0], [57.2, 990.0], [57.3, 990.0], [57.4, 994.0], [57.5, 996.0], [57.6, 999.0], [57.7, 1001.0], [57.8, 1003.0], [57.9, 1004.0], [58.0, 1005.0], [58.1, 1007.0], [58.2, 1009.0], [58.3, 1011.0], [58.4, 1013.0], [58.5, 1014.0], [58.6, 1014.0], [58.7, 1017.0], [58.8, 1019.0], [58.9, 1020.0], [59.0, 1022.0], [59.1, 1023.0], [59.2, 1023.0], [59.3, 1026.0], [59.4, 1026.0], [59.5, 1028.0], [59.6, 1029.0], [59.7, 1031.0], [59.8, 1032.0], [59.9, 1036.0], [60.0, 1038.0], [60.1, 1040.0], [60.2, 1042.0], [60.3, 1044.0], [60.4, 1045.0], [60.5, 1046.0], [60.6, 1047.0], [60.7, 1050.0], [60.8, 1052.0], [60.9, 1053.0], [61.0, 1056.0], [61.1, 1058.0], [61.2, 1059.0], [61.3, 1062.0], [61.4, 1064.0], [61.5, 1066.0], [61.6, 1068.0], [61.7, 1069.0], [61.8, 1072.0], [61.9, 1074.0], [62.0, 1077.0], [62.1, 1078.0], [62.2, 1080.0], [62.3, 1082.0], [62.4, 1083.0], [62.5, 1086.0], [62.6, 1087.0], [62.7, 1090.0], [62.8, 1094.0], [62.9, 1096.0], [63.0, 1101.0], [63.1, 1103.0], [63.2, 1106.0], [63.3, 1110.0], [63.4, 1112.0], [63.5, 1114.0], [63.6, 1116.0], [63.7, 1118.0], [63.8, 1119.0], [63.9, 1124.0], [64.0, 1126.0], [64.1, 1127.0], [64.2, 1129.0], [64.3, 1130.0], [64.4, 1132.0], [64.5, 1133.0], [64.6, 1138.0], [64.7, 1140.0], [64.8, 1143.0], [64.9, 1145.0], [65.0, 1148.0], [65.1, 1150.0], [65.2, 1153.0], [65.3, 1155.0], [65.4, 1159.0], [65.5, 1160.0], [65.6, 1163.0], [65.7, 1164.0], [65.8, 1166.0], [65.9, 1167.0], [66.0, 1170.0], [66.1, 1171.0], [66.2, 1172.0], [66.3, 1172.0], [66.4, 1175.0], [66.5, 1177.0], [66.6, 1180.0], [66.7, 1183.0], [66.8, 1184.0], [66.9, 1184.0], [67.0, 1186.0], [67.1, 1187.0], [67.2, 1189.0], [67.3, 1191.0], [67.4, 1195.0], [67.5, 1198.0], [67.6, 1201.0], [67.7, 1203.0], [67.8, 1209.0], [67.9, 1211.0], [68.0, 1212.0], [68.1, 1214.0], [68.2, 1216.0], [68.3, 1216.0], [68.4, 1217.0], [68.5, 1219.0], [68.6, 1221.0], [68.7, 1222.0], [68.8, 1223.0], [68.9, 1226.0], [69.0, 1227.0], [69.1, 1229.0], [69.2, 1232.0], [69.3, 1233.0], [69.4, 1237.0], [69.5, 1241.0], [69.6, 1242.0], [69.7, 1244.0], [69.8, 1248.0], [69.9, 1249.0], [70.0, 1250.0], [70.1, 1252.0], [70.2, 1256.0], [70.3, 1259.0], [70.4, 1261.0], [70.5, 1262.0], [70.6, 1263.0], [70.7, 1267.0], [70.8, 1269.0], [70.9, 1271.0], [71.0, 1273.0], [71.1, 1275.0], [71.2, 1277.0], [71.3, 1280.0], [71.4, 1282.0], [71.5, 1284.0], [71.6, 1286.0], [71.7, 1288.0], [71.8, 1293.0], [71.9, 1295.0], [72.0, 1297.0], [72.1, 1300.0], [72.2, 1302.0], [72.3, 1305.0], [72.4, 1309.0], [72.5, 1311.0], [72.6, 1314.0], [72.7, 1316.0], [72.8, 1319.0], [72.9, 1321.0], [73.0, 1322.0], [73.1, 1325.0], [73.2, 1327.0], [73.3, 1330.0], [73.4, 1333.0], [73.5, 1337.0], [73.6, 1340.0], [73.7, 1342.0], [73.8, 1344.0], [73.9, 1345.0], [74.0, 1348.0], [74.1, 1349.0], [74.2, 1352.0], [74.3, 1353.0], [74.4, 1356.0], [74.5, 1358.0], [74.6, 1363.0], [74.7, 1366.0], [74.8, 1369.0], [74.9, 1373.0], [75.0, 1376.0], [75.1, 1378.0], [75.2, 1380.0], [75.3, 1383.0], [75.4, 1388.0], [75.5, 1391.0], [75.6, 1396.0], [75.7, 1399.0], [75.8, 1400.0], [75.9, 1403.0], [76.0, 1404.0], [76.1, 1407.0], [76.2, 1411.0], [76.3, 1416.0], [76.4, 1420.0], [76.5, 1423.0], [76.6, 1429.0], [76.7, 1432.0], [76.8, 1433.0], [76.9, 1434.0], [77.0, 1436.0], [77.1, 1438.0], [77.2, 1440.0], [77.3, 1441.0], [77.4, 1444.0], [77.5, 1448.0], [77.6, 1450.0], [77.7, 1451.0], [77.8, 1452.0], [77.9, 1454.0], [78.0, 1455.0], [78.1, 1459.0], [78.2, 1460.0], [78.3, 1462.0], [78.4, 1464.0], [78.5, 1467.0], [78.6, 1469.0], [78.7, 1471.0], [78.8, 1475.0], [78.9, 1477.0], [79.0, 1480.0], [79.1, 1482.0], [79.2, 1483.0], [79.3, 1486.0], [79.4, 1488.0], [79.5, 1489.0], [79.6, 1492.0], [79.7, 1493.0], [79.8, 1494.0], [79.9, 1496.0], [80.0, 1500.0], [80.1, 1503.0], [80.2, 1506.0], [80.3, 1508.0], [80.4, 1509.0], [80.5, 1514.0], [80.6, 1517.0], [80.7, 1522.0], [80.8, 1525.0], [80.9, 1526.0], [81.0, 1529.0], [81.1, 1531.0], [81.2, 1534.0], [81.3, 1538.0], [81.4, 1540.0], [81.5, 1543.0], [81.6, 1546.0], [81.7, 1550.0], [81.8, 1553.0], [81.9, 1555.0], [82.0, 1556.0], [82.1, 1559.0], [82.2, 1564.0], [82.3, 1566.0], [82.4, 1569.0], [82.5, 1571.0], [82.6, 1576.0], [82.7, 1578.0], [82.8, 1582.0], [82.9, 1586.0], [83.0, 1592.0], [83.1, 1593.0], [83.2, 1595.0], [83.3, 1601.0], [83.4, 1607.0], [83.5, 1609.0], [83.6, 1617.0], [83.7, 1622.0], [83.8, 1623.0], [83.9, 1626.0], [84.0, 1629.0], [84.1, 1633.0], [84.2, 1635.0], [84.3, 1638.0], [84.4, 1639.0], [84.5, 1641.0], [84.6, 1644.0], [84.7, 1648.0], [84.8, 1650.0], [84.9, 1654.0], [85.0, 1656.0], [85.1, 1660.0], [85.2, 1662.0], [85.3, 1665.0], [85.4, 1667.0], [85.5, 1670.0], [85.6, 1673.0], [85.7, 1676.0], [85.8, 1682.0], [85.9, 1685.0], [86.0, 1695.0], [86.1, 1699.0], [86.2, 1701.0], [86.3, 1705.0], [86.4, 1707.0], [86.5, 1710.0], [86.6, 1714.0], [86.7, 1722.0], [86.8, 1722.0], [86.9, 1726.0], [87.0, 1729.0], [87.1, 1734.0], [87.2, 1736.0], [87.3, 1739.0], [87.4, 1741.0], [87.5, 1743.0], [87.6, 1745.0], [87.7, 1746.0], [87.8, 1749.0], [87.9, 1751.0], [88.0, 1758.0], [88.1, 1761.0], [88.2, 1769.0], [88.3, 1773.0], [88.4, 1777.0], [88.5, 1779.0], [88.6, 1781.0], [88.7, 1788.0], [88.8, 1796.0], [88.9, 1797.0], [89.0, 1803.0], [89.1, 1807.0], [89.2, 1811.0], [89.3, 1817.0], [89.4, 1822.0], [89.5, 1827.0], [89.6, 1833.0], [89.7, 1841.0], [89.8, 1845.0], [89.9, 1850.0], [90.0, 1856.0], [90.1, 1862.0], [90.2, 1864.0], [90.3, 1868.0], [90.4, 1873.0], [90.5, 1882.0], [90.6, 1890.0], [90.7, 1895.0], [90.8, 1904.0], [90.9, 1907.0], [91.0, 1911.0], [91.1, 1923.0], [91.2, 1932.0], [91.3, 1943.0], [91.4, 1953.0], [91.5, 1961.0], [91.6, 1963.0], [91.7, 1974.0], [91.8, 1979.0], [91.9, 1991.0], [92.0, 2003.0], [92.1, 2010.0], [92.2, 2018.0], [92.3, 2022.0], [92.4, 2038.0], [92.5, 2042.0], [92.6, 2054.0], [92.7, 2060.0], [92.8, 2068.0], [92.9, 2082.0], [93.0, 2095.0], [93.1, 2109.0], [93.2, 2120.0], [93.3, 2128.0], [93.4, 2141.0], [93.5, 2154.0], [93.6, 2162.0], [93.7, 2174.0], [93.8, 2184.0], [93.9, 2194.0], [94.0, 2205.0], [94.1, 2220.0], [94.2, 2228.0], [94.3, 2243.0], [94.4, 2251.0], [94.5, 2272.0], [94.6, 2279.0], [94.7, 2290.0], [94.8, 2303.0], [94.9, 2324.0], [95.0, 2329.0], [95.1, 2345.0], [95.2, 2351.0], [95.3, 2362.0], [95.4, 2378.0], [95.5, 2394.0], [95.6, 2410.0], [95.7, 2415.0], [95.8, 2444.0], [95.9, 2466.0], [96.0, 2485.0], [96.1, 2507.0], [96.2, 2536.0], [96.3, 2547.0], [96.4, 2561.0], [96.5, 2571.0], [96.6, 2577.0], [96.7, 2602.0], [96.8, 2630.0], [96.9, 2648.0], [97.0, 2669.0], [97.1, 2684.0], [97.2, 2691.0], [97.3, 2717.0], [97.4, 2739.0], [97.5, 2749.0], [97.6, 2766.0], [97.7, 2782.0], [97.8, 2798.0], [97.9, 2809.0], [98.0, 2830.0], [98.1, 2860.0], [98.2, 2935.0], [98.3, 2974.0], [98.4, 2998.0], [98.5, 3083.0], [98.6, 3123.0], [98.7, 3167.0], [98.8, 3195.0], [98.9, 3245.0], [99.0, 3337.0], [99.1, 3487.0], [99.2, 3543.0], [99.3, 3634.0], [99.4, 3730.0], [99.5, 3908.0], [99.6, 4305.0], [99.7, 4836.0], [99.8, 5271.0], [99.9, 5735.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 497.0, "series": [{"data": [[600.0, 435.0], [700.0, 305.0], [800.0, 252.0], [900.0, 226.0], [1000.0, 279.0], [1100.0, 237.0], [1200.0, 233.0], [1300.0, 194.0], [1400.0, 216.0], [1500.0, 172.0], [1600.0, 150.0], [1700.0, 143.0], [1800.0, 96.0], [1900.0, 62.0], [2000.0, 55.0], [2100.0, 50.0], [2200.0, 40.0], [2300.0, 41.0], [2400.0, 27.0], [2500.0, 33.0], [2600.0, 28.0], [2700.0, 32.0], [2800.0, 17.0], [2900.0, 12.0], [3000.0, 8.0], [3100.0, 13.0], [3200.0, 8.0], [3300.0, 5.0], [3400.0, 5.0], [3500.0, 6.0], [3600.0, 6.0], [3700.0, 3.0], [3800.0, 2.0], [3900.0, 4.0], [4000.0, 1.0], [4300.0, 2.0], [4100.0, 1.0], [4400.0, 1.0], [4600.0, 1.0], [4800.0, 2.0], [5000.0, 1.0], [5100.0, 2.0], [5200.0, 2.0], [5500.0, 1.0], [5400.0, 2.0], [5600.0, 1.0], [5700.0, 1.0], [6100.0, 1.0], [6000.0, 2.0], [6200.0, 1.0], [6600.0, 1.0], [100.0, 47.0], [200.0, 432.0], [300.0, 396.0], [400.0, 497.0], [500.0, 401.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2778.0, "series": [{"data": [[0.0, 1374.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2778.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1038.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.999999999999999, "minX": 1.60219896E12, "maxY": 10.0, "series": [{"data": [[1.60219902E12, 10.0], [1.6021995E12, 6.999999999999999], [1.60219932E12, 10.0], [1.60219914E12, 10.0], [1.60219944E12, 10.0], [1.60219896E12, 10.0], [1.60219926E12, 10.0], [1.60219908E12, 10.0], [1.60219938E12, 10.0], [1.6021992E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021995E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 302.0, "minX": 1.0, "maxY": 3101.0, "series": [{"data": [[8.0, 949.0], [4.0, 1117.0], [2.0, 2976.0], [1.0, 3101.0], [9.0, 1958.0], [10.0, 1010.0355075260533], [5.0, 650.0], [6.0, 635.0], [3.0, 1074.0], [7.0, 302.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 1010.7428241186684]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 116.71666666666667, "minX": 1.60219896E12, "maxY": 3253617.1166666667, "series": [{"data": [[1.60219902E12, 2188281.5], [1.6021995E12, 90907.16666666667], [1.60219932E12, 2862448.25], [1.60219914E12, 3147170.3333333335], [1.60219944E12, 2500315.6], [1.60219896E12, 1959612.55], [1.60219926E12, 2479543.9833333334], [1.60219908E12, 3253617.1166666667], [1.60219938E12, 2792599.966666667], [1.6021992E12, 2697616.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60219902E12, 4639.316666666667], [1.6021995E12, 116.71666666666667], [1.60219932E12, 4725.516666666666], [1.60219914E12, 4492.1], [1.60219944E12, 4468.95], [1.60219896E12, 2652.1833333333334], [1.60219926E12, 4044.1666666666665], [1.60219908E12, 4544.583333333333], [1.60219938E12, 4932.333333333333], [1.6021992E12, 3968.1833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021995E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 919.3553846153849, "minX": 1.60219896E12, "maxY": 1320.9333333333332, "series": [{"data": [[1.60219902E12, 947.0047169811324], [1.6021995E12, 1320.9333333333332], [1.60219932E12, 935.0576323987535], [1.60219914E12, 1012.4043993231808], [1.60219944E12, 1016.1233108108105], [1.60219896E12, 1163.5094850948512], [1.60219926E12, 1103.8505338078298], [1.60219908E12, 987.4527363184095], [1.60219938E12, 919.3553846153849], [1.6021992E12, 1095.5932203389823]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021995E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 918.2092307692318, "minX": 1.60219896E12, "maxY": 1319.1333333333334, "series": [{"data": [[1.60219902E12, 945.6352201257863], [1.6021995E12, 1319.1333333333334], [1.60219932E12, 933.7009345794382], [1.60219914E12, 1010.26565143824], [1.60219944E12, 1014.7618243243239], [1.60219896E12, 1161.3983739837397], [1.60219926E12, 1102.4555160142352], [1.60219908E12, 985.2172470978423], [1.60219938E12, 918.2092307692318], [1.6021992E12, 1093.651600753296]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021995E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60219896E12, "maxY": 0.27371273712737104, "series": [{"data": [[1.60219902E12, 0.01572327044025159], [1.6021995E12, 0.0], [1.60219932E12, 0.017133956386292823], [1.60219914E12, 0.020304568527918752], [1.60219944E12, 0.015202702702702695], [1.60219896E12, 0.27371273712737104], [1.60219926E12, 0.016014234875444837], [1.60219908E12, 0.023217247097844153], [1.60219938E12, 0.015384615384615398], [1.6021992E12, 0.018832391713747672]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021995E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60219896E12, "maxY": 6671.0, "series": [{"data": [[1.60219902E12, 5493.0], [1.6021995E12, 3101.0], [1.60219932E12, 3320.0], [1.60219914E12, 3528.0], [1.60219944E12, 4305.0], [1.60219896E12, 5503.0], [1.60219926E12, 6671.0], [1.60219908E12, 4394.0], [1.60219938E12, 3664.0], [1.6021992E12, 6121.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60219902E12, 200.0], [1.6021995E12, 302.0], [1.60219932E12, 200.0], [1.60219914E12, 201.95699957728385], [1.60219944E12, 194.01099957585336], [1.60219896E12, 210.32999991178514], [1.60219926E12, 216.0], [1.60219908E12, 201.4359998559952], [1.60219938E12, 194.8589998447895], [1.6021992E12, 195.7879998731613]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60219902E12, 200.0], [1.6021995E12, 302.0], [1.60219932E12, 200.0], [1.60219914E12, 203.55270016908645], [1.60219944E12, 195.61210016965867], [1.60219896E12, 210.66300003528596], [1.60219926E12, 216.0], [1.60219908E12, 201.97960005760194], [1.60219938E12, 195.8898001241684], [1.6021992E12, 196.53360010147094]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60219902E12, 200.0], [1.6021995E12, 302.0], [1.60219932E12, 200.0], [1.60219914E12, 202.84349978864194], [1.60219944E12, 194.90049978792666], [1.60219896E12, 210.51499995589256], [1.60219926E12, 216.0], [1.60219908E12, 201.73799992799758], [1.60219938E12, 195.3689998447895], [1.6021992E12, 196.1079998731613]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60219902E12, 184.0], [1.6021995E12, 302.0], [1.60219932E12, 194.0], [1.60219914E12, 192.0], [1.60219944E12, 186.0], [1.60219896E12, 195.0], [1.60219926E12, 195.0], [1.60219908E12, 185.0], [1.60219938E12, 184.0], [1.6021992E12, 187.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60219902E12, 742.5], [1.6021995E12, 1074.0], [1.60219932E12, 685.5], [1.60219914E12, 918.5], [1.60219944E12, 842.5], [1.60219896E12, 990.0], [1.60219926E12, 930.0], [1.60219908E12, 756.0], [1.60219938E12, 752.5], [1.6021992E12, 931.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021995E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 215.0, "minX": 1.0, "maxY": 3038.5, "series": [{"data": [[2.0, 1095.5], [3.0, 1653.5], [4.0, 1315.5], [5.0, 1491.0], [6.0, 1258.5], [7.0, 1129.5], [8.0, 1118.5], [9.0, 1026.0], [10.0, 981.0], [11.0, 781.0], [12.0, 780.5], [13.0, 735.0], [14.0, 641.5], [15.0, 542.0], [16.0, 462.5], [1.0, 3038.5], [17.0, 472.0], [18.0, 544.5], [19.0, 441.0], [20.0, 439.0], [21.0, 374.0], [22.0, 465.0], [23.0, 444.0], [24.0, 432.0], [25.0, 460.0], [26.0, 438.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 215.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 215.0, "minX": 1.0, "maxY": 3032.0, "series": [{"data": [[2.0, 1094.5], [3.0, 1647.5], [4.0, 1308.0], [5.0, 1490.0], [6.0, 1256.5], [7.0, 1125.0], [8.0, 1116.5], [9.0, 1025.0], [10.0, 980.0], [11.0, 780.5], [12.0, 780.5], [13.0, 734.0], [14.0, 641.0], [15.0, 542.0], [16.0, 462.5], [1.0, 3032.0], [17.0, 472.0], [18.0, 544.5], [19.0, 441.0], [20.0, 439.0], [21.0, 374.0], [22.0, 465.0], [23.0, 444.0], [24.0, 431.5], [25.0, 460.0], [26.0, 438.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 215.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60219896E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60219902E12, 10.6], [1.6021995E12, 0.08333333333333333], [1.60219932E12, 10.7], [1.60219914E12, 9.85], [1.60219944E12, 9.866666666666667], [1.60219896E12, 6.316666666666666], [1.60219926E12, 9.366666666666667], [1.60219908E12, 10.05], [1.60219938E12, 10.833333333333334], [1.6021992E12, 8.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021995E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60219896E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60219902E12, 10.6], [1.6021995E12, 0.25], [1.60219932E12, 10.7], [1.60219914E12, 9.833333333333334], [1.60219944E12, 9.866666666666667], [1.60219896E12, 6.15], [1.60219926E12, 9.366666666666667], [1.60219908E12, 10.05], [1.60219938E12, 10.833333333333334], [1.6021992E12, 8.85]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60219914E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021995E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60219896E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60219902E12, 10.6], [1.6021995E12, 0.25], [1.60219932E12, 10.7], [1.60219914E12, 9.833333333333334], [1.60219944E12, 9.866666666666667], [1.60219896E12, 6.15], [1.60219926E12, 9.366666666666667], [1.60219908E12, 10.05], [1.60219938E12, 10.833333333333334], [1.6021992E12, 8.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60219914E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021995E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60219896E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60219902E12, 10.6], [1.6021995E12, 0.25], [1.60219932E12, 10.7], [1.60219914E12, 9.833333333333334], [1.60219944E12, 9.866666666666667], [1.60219896E12, 6.15], [1.60219926E12, 9.366666666666667], [1.60219908E12, 10.05], [1.60219938E12, 10.833333333333334], [1.6021992E12, 8.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60219914E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021995E12, "title": "Total Transactions Per Second"}},
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

