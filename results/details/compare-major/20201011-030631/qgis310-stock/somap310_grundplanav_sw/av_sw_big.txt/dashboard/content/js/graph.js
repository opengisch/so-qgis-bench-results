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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 6213.0, "series": [{"data": [[0.0, 179.0], [0.1, 194.0], [0.2, 197.0], [0.3, 198.0], [0.4, 199.0], [0.5, 201.0], [0.6, 203.0], [0.7, 204.0], [0.8, 206.0], [0.9, 207.0], [1.0, 209.0], [1.1, 211.0], [1.2, 212.0], [1.3, 214.0], [1.4, 214.0], [1.5, 215.0], [1.6, 216.0], [1.7, 216.0], [1.8, 217.0], [1.9, 218.0], [2.0, 218.0], [2.1, 218.0], [2.2, 219.0], [2.3, 220.0], [2.4, 220.0], [2.5, 221.0], [2.6, 222.0], [2.7, 223.0], [2.8, 223.0], [2.9, 224.0], [3.0, 224.0], [3.1, 225.0], [3.2, 226.0], [3.3, 227.0], [3.4, 227.0], [3.5, 228.0], [3.6, 228.0], [3.7, 229.0], [3.8, 229.0], [3.9, 230.0], [4.0, 230.0], [4.1, 231.0], [4.2, 232.0], [4.3, 233.0], [4.4, 233.0], [4.5, 234.0], [4.6, 234.0], [4.7, 235.0], [4.8, 235.0], [4.9, 236.0], [5.0, 236.0], [5.1, 237.0], [5.2, 239.0], [5.3, 240.0], [5.4, 240.0], [5.5, 241.0], [5.6, 243.0], [5.7, 244.0], [5.8, 248.0], [5.9, 250.0], [6.0, 252.0], [6.1, 253.0], [6.2, 255.0], [6.3, 257.0], [6.4, 261.0], [6.5, 264.0], [6.6, 267.0], [6.7, 270.0], [6.8, 273.0], [6.9, 275.0], [7.0, 278.0], [7.1, 279.0], [7.2, 280.0], [7.3, 284.0], [7.4, 286.0], [7.5, 287.0], [7.6, 288.0], [7.7, 289.0], [7.8, 290.0], [7.9, 292.0], [8.0, 294.0], [8.1, 294.0], [8.2, 297.0], [8.3, 300.0], [8.4, 302.0], [8.5, 304.0], [8.6, 304.0], [8.7, 306.0], [8.8, 307.0], [8.9, 308.0], [9.0, 309.0], [9.1, 310.0], [9.2, 311.0], [9.3, 312.0], [9.4, 313.0], [9.5, 314.0], [9.6, 315.0], [9.7, 317.0], [9.8, 317.0], [9.9, 317.0], [10.0, 319.0], [10.1, 319.0], [10.2, 320.0], [10.3, 320.0], [10.4, 321.0], [10.5, 322.0], [10.6, 322.0], [10.7, 323.0], [10.8, 323.0], [10.9, 324.0], [11.0, 325.0], [11.1, 326.0], [11.2, 326.0], [11.3, 327.0], [11.4, 329.0], [11.5, 329.0], [11.6, 330.0], [11.7, 331.0], [11.8, 331.0], [11.9, 332.0], [12.0, 333.0], [12.1, 335.0], [12.2, 336.0], [12.3, 337.0], [12.4, 339.0], [12.5, 340.0], [12.6, 342.0], [12.7, 343.0], [12.8, 344.0], [12.9, 345.0], [13.0, 347.0], [13.1, 348.0], [13.2, 349.0], [13.3, 350.0], [13.4, 351.0], [13.5, 354.0], [13.6, 354.0], [13.7, 356.0], [13.8, 357.0], [13.9, 357.0], [14.0, 359.0], [14.1, 360.0], [14.2, 361.0], [14.3, 363.0], [14.4, 365.0], [14.5, 367.0], [14.6, 369.0], [14.7, 370.0], [14.8, 373.0], [14.9, 374.0], [15.0, 376.0], [15.1, 377.0], [15.2, 379.0], [15.3, 381.0], [15.4, 382.0], [15.5, 383.0], [15.6, 385.0], [15.7, 386.0], [15.8, 387.0], [15.9, 389.0], [16.0, 390.0], [16.1, 391.0], [16.2, 392.0], [16.3, 392.0], [16.4, 394.0], [16.5, 395.0], [16.6, 396.0], [16.7, 396.0], [16.8, 397.0], [16.9, 398.0], [17.0, 399.0], [17.1, 400.0], [17.2, 401.0], [17.3, 401.0], [17.4, 402.0], [17.5, 403.0], [17.6, 404.0], [17.7, 405.0], [17.8, 405.0], [17.9, 406.0], [18.0, 407.0], [18.1, 408.0], [18.2, 408.0], [18.3, 409.0], [18.4, 409.0], [18.5, 410.0], [18.6, 412.0], [18.7, 413.0], [18.8, 414.0], [18.9, 415.0], [19.0, 416.0], [19.1, 417.0], [19.2, 418.0], [19.3, 418.0], [19.4, 419.0], [19.5, 420.0], [19.6, 421.0], [19.7, 422.0], [19.8, 423.0], [19.9, 423.0], [20.0, 424.0], [20.1, 426.0], [20.2, 427.0], [20.3, 428.0], [20.4, 429.0], [20.5, 429.0], [20.6, 430.0], [20.7, 430.0], [20.8, 431.0], [20.9, 432.0], [21.0, 433.0], [21.1, 433.0], [21.2, 434.0], [21.3, 434.0], [21.4, 435.0], [21.5, 437.0], [21.6, 437.0], [21.7, 438.0], [21.8, 439.0], [21.9, 440.0], [22.0, 440.0], [22.1, 441.0], [22.2, 442.0], [22.3, 442.0], [22.4, 443.0], [22.5, 444.0], [22.6, 445.0], [22.7, 446.0], [22.8, 447.0], [22.9, 447.0], [23.0, 448.0], [23.1, 448.0], [23.2, 449.0], [23.3, 450.0], [23.4, 451.0], [23.5, 453.0], [23.6, 454.0], [23.7, 456.0], [23.8, 456.0], [23.9, 457.0], [24.0, 458.0], [24.1, 458.0], [24.2, 459.0], [24.3, 460.0], [24.4, 462.0], [24.5, 463.0], [24.6, 464.0], [24.7, 465.0], [24.8, 467.0], [24.9, 467.0], [25.0, 468.0], [25.1, 469.0], [25.2, 470.0], [25.3, 471.0], [25.4, 472.0], [25.5, 474.0], [25.6, 475.0], [25.7, 476.0], [25.8, 478.0], [25.9, 479.0], [26.0, 480.0], [26.1, 481.0], [26.2, 481.0], [26.3, 482.0], [26.4, 485.0], [26.5, 487.0], [26.6, 489.0], [26.7, 491.0], [26.8, 491.0], [26.9, 493.0], [27.0, 494.0], [27.1, 496.0], [27.2, 498.0], [27.3, 499.0], [27.4, 501.0], [27.5, 501.0], [27.6, 503.0], [27.7, 505.0], [27.8, 506.0], [27.9, 508.0], [28.0, 509.0], [28.1, 510.0], [28.2, 512.0], [28.3, 513.0], [28.4, 515.0], [28.5, 516.0], [28.6, 517.0], [28.7, 519.0], [28.8, 521.0], [28.9, 522.0], [29.0, 522.0], [29.1, 523.0], [29.2, 525.0], [29.3, 527.0], [29.4, 528.0], [29.5, 529.0], [29.6, 532.0], [29.7, 533.0], [29.8, 533.0], [29.9, 536.0], [30.0, 537.0], [30.1, 539.0], [30.2, 540.0], [30.3, 541.0], [30.4, 542.0], [30.5, 542.0], [30.6, 544.0], [30.7, 545.0], [30.8, 546.0], [30.9, 547.0], [31.0, 548.0], [31.1, 550.0], [31.2, 551.0], [31.3, 552.0], [31.4, 552.0], [31.5, 553.0], [31.6, 555.0], [31.7, 556.0], [31.8, 557.0], [31.9, 558.0], [32.0, 559.0], [32.1, 559.0], [32.2, 560.0], [32.3, 561.0], [32.4, 563.0], [32.5, 563.0], [32.6, 565.0], [32.7, 566.0], [32.8, 567.0], [32.9, 569.0], [33.0, 569.0], [33.1, 570.0], [33.2, 572.0], [33.3, 574.0], [33.4, 574.0], [33.5, 575.0], [33.6, 576.0], [33.7, 578.0], [33.8, 579.0], [33.9, 580.0], [34.0, 581.0], [34.1, 583.0], [34.2, 584.0], [34.3, 585.0], [34.4, 587.0], [34.5, 589.0], [34.6, 590.0], [34.7, 592.0], [34.8, 594.0], [34.9, 596.0], [35.0, 597.0], [35.1, 598.0], [35.2, 599.0], [35.3, 600.0], [35.4, 602.0], [35.5, 603.0], [35.6, 605.0], [35.7, 606.0], [35.8, 607.0], [35.9, 608.0], [36.0, 608.0], [36.1, 609.0], [36.2, 611.0], [36.3, 612.0], [36.4, 613.0], [36.5, 614.0], [36.6, 615.0], [36.7, 617.0], [36.8, 617.0], [36.9, 618.0], [37.0, 620.0], [37.1, 621.0], [37.2, 622.0], [37.3, 624.0], [37.4, 626.0], [37.5, 627.0], [37.6, 627.0], [37.7, 628.0], [37.8, 630.0], [37.9, 632.0], [38.0, 633.0], [38.1, 634.0], [38.2, 634.0], [38.3, 636.0], [38.4, 636.0], [38.5, 637.0], [38.6, 639.0], [38.7, 640.0], [38.8, 642.0], [38.9, 643.0], [39.0, 644.0], [39.1, 645.0], [39.2, 646.0], [39.3, 648.0], [39.4, 650.0], [39.5, 652.0], [39.6, 654.0], [39.7, 655.0], [39.8, 656.0], [39.9, 658.0], [40.0, 658.0], [40.1, 660.0], [40.2, 661.0], [40.3, 662.0], [40.4, 664.0], [40.5, 666.0], [40.6, 666.0], [40.7, 669.0], [40.8, 669.0], [40.9, 671.0], [41.0, 672.0], [41.1, 673.0], [41.2, 675.0], [41.3, 676.0], [41.4, 677.0], [41.5, 678.0], [41.6, 679.0], [41.7, 680.0], [41.8, 681.0], [41.9, 683.0], [42.0, 686.0], [42.1, 687.0], [42.2, 687.0], [42.3, 689.0], [42.4, 690.0], [42.5, 691.0], [42.6, 693.0], [42.7, 695.0], [42.8, 696.0], [42.9, 697.0], [43.0, 699.0], [43.1, 701.0], [43.2, 703.0], [43.3, 708.0], [43.4, 709.0], [43.5, 710.0], [43.6, 712.0], [43.7, 716.0], [43.8, 718.0], [43.9, 720.0], [44.0, 721.0], [44.1, 726.0], [44.2, 729.0], [44.3, 730.0], [44.4, 732.0], [44.5, 733.0], [44.6, 736.0], [44.7, 738.0], [44.8, 739.0], [44.9, 741.0], [45.0, 742.0], [45.1, 743.0], [45.2, 746.0], [45.3, 748.0], [45.4, 751.0], [45.5, 753.0], [45.6, 754.0], [45.7, 757.0], [45.8, 760.0], [45.9, 763.0], [46.0, 764.0], [46.1, 767.0], [46.2, 768.0], [46.3, 770.0], [46.4, 772.0], [46.5, 775.0], [46.6, 776.0], [46.7, 778.0], [46.8, 780.0], [46.9, 782.0], [47.0, 785.0], [47.1, 786.0], [47.2, 788.0], [47.3, 790.0], [47.4, 792.0], [47.5, 793.0], [47.6, 794.0], [47.7, 795.0], [47.8, 796.0], [47.9, 798.0], [48.0, 800.0], [48.1, 803.0], [48.2, 805.0], [48.3, 808.0], [48.4, 810.0], [48.5, 812.0], [48.6, 814.0], [48.7, 816.0], [48.8, 817.0], [48.9, 820.0], [49.0, 822.0], [49.1, 823.0], [49.2, 825.0], [49.3, 826.0], [49.4, 828.0], [49.5, 830.0], [49.6, 831.0], [49.7, 832.0], [49.8, 835.0], [49.9, 836.0], [50.0, 837.0], [50.1, 838.0], [50.2, 841.0], [50.3, 843.0], [50.4, 844.0], [50.5, 847.0], [50.6, 849.0], [50.7, 853.0], [50.8, 858.0], [50.9, 859.0], [51.0, 862.0], [51.1, 864.0], [51.2, 867.0], [51.3, 869.0], [51.4, 872.0], [51.5, 875.0], [51.6, 878.0], [51.7, 881.0], [51.8, 882.0], [51.9, 884.0], [52.0, 885.0], [52.1, 886.0], [52.2, 888.0], [52.3, 890.0], [52.4, 892.0], [52.5, 893.0], [52.6, 896.0], [52.7, 897.0], [52.8, 898.0], [52.9, 901.0], [53.0, 902.0], [53.1, 905.0], [53.2, 908.0], [53.3, 911.0], [53.4, 913.0], [53.5, 915.0], [53.6, 916.0], [53.7, 920.0], [53.8, 922.0], [53.9, 923.0], [54.0, 924.0], [54.1, 926.0], [54.2, 928.0], [54.3, 932.0], [54.4, 933.0], [54.5, 934.0], [54.6, 936.0], [54.7, 938.0], [54.8, 940.0], [54.9, 941.0], [55.0, 943.0], [55.1, 946.0], [55.2, 947.0], [55.3, 949.0], [55.4, 951.0], [55.5, 952.0], [55.6, 954.0], [55.7, 955.0], [55.8, 957.0], [55.9, 960.0], [56.0, 961.0], [56.1, 963.0], [56.2, 968.0], [56.3, 970.0], [56.4, 972.0], [56.5, 976.0], [56.6, 977.0], [56.7, 979.0], [56.8, 981.0], [56.9, 983.0], [57.0, 987.0], [57.1, 990.0], [57.2, 992.0], [57.3, 995.0], [57.4, 999.0], [57.5, 1004.0], [57.6, 1007.0], [57.7, 1008.0], [57.8, 1011.0], [57.9, 1015.0], [58.0, 1017.0], [58.1, 1019.0], [58.2, 1020.0], [58.3, 1021.0], [58.4, 1023.0], [58.5, 1026.0], [58.6, 1027.0], [58.7, 1029.0], [58.8, 1031.0], [58.9, 1032.0], [59.0, 1034.0], [59.1, 1037.0], [59.2, 1039.0], [59.3, 1041.0], [59.4, 1042.0], [59.5, 1045.0], [59.6, 1047.0], [59.7, 1048.0], [59.8, 1049.0], [59.9, 1052.0], [60.0, 1054.0], [60.1, 1056.0], [60.2, 1058.0], [60.3, 1059.0], [60.4, 1061.0], [60.5, 1062.0], [60.6, 1064.0], [60.7, 1068.0], [60.8, 1072.0], [60.9, 1074.0], [61.0, 1076.0], [61.1, 1078.0], [61.2, 1081.0], [61.3, 1084.0], [61.4, 1085.0], [61.5, 1088.0], [61.6, 1090.0], [61.7, 1091.0], [61.8, 1093.0], [61.9, 1096.0], [62.0, 1099.0], [62.1, 1100.0], [62.2, 1101.0], [62.3, 1103.0], [62.4, 1105.0], [62.5, 1108.0], [62.6, 1109.0], [62.7, 1111.0], [62.8, 1113.0], [62.9, 1115.0], [63.0, 1116.0], [63.1, 1119.0], [63.2, 1121.0], [63.3, 1122.0], [63.4, 1123.0], [63.5, 1124.0], [63.6, 1126.0], [63.7, 1130.0], [63.8, 1131.0], [63.9, 1132.0], [64.0, 1133.0], [64.1, 1135.0], [64.2, 1136.0], [64.3, 1138.0], [64.4, 1143.0], [64.5, 1145.0], [64.6, 1145.0], [64.7, 1146.0], [64.8, 1150.0], [64.9, 1153.0], [65.0, 1156.0], [65.1, 1157.0], [65.2, 1159.0], [65.3, 1160.0], [65.4, 1162.0], [65.5, 1163.0], [65.6, 1165.0], [65.7, 1167.0], [65.8, 1168.0], [65.9, 1171.0], [66.0, 1174.0], [66.1, 1178.0], [66.2, 1180.0], [66.3, 1181.0], [66.4, 1183.0], [66.5, 1185.0], [66.6, 1186.0], [66.7, 1188.0], [66.8, 1189.0], [66.9, 1191.0], [67.0, 1192.0], [67.1, 1194.0], [67.2, 1195.0], [67.3, 1197.0], [67.4, 1199.0], [67.5, 1201.0], [67.6, 1203.0], [67.7, 1205.0], [67.8, 1208.0], [67.9, 1211.0], [68.0, 1214.0], [68.1, 1215.0], [68.2, 1217.0], [68.3, 1220.0], [68.4, 1222.0], [68.5, 1223.0], [68.6, 1226.0], [68.7, 1227.0], [68.8, 1229.0], [68.9, 1231.0], [69.0, 1233.0], [69.1, 1234.0], [69.2, 1238.0], [69.3, 1241.0], [69.4, 1244.0], [69.5, 1248.0], [69.6, 1248.0], [69.7, 1251.0], [69.8, 1254.0], [69.9, 1255.0], [70.0, 1257.0], [70.1, 1259.0], [70.2, 1261.0], [70.3, 1265.0], [70.4, 1269.0], [70.5, 1270.0], [70.6, 1272.0], [70.7, 1274.0], [70.8, 1278.0], [70.9, 1279.0], [71.0, 1281.0], [71.1, 1286.0], [71.2, 1288.0], [71.3, 1289.0], [71.4, 1291.0], [71.5, 1294.0], [71.6, 1296.0], [71.7, 1299.0], [71.8, 1302.0], [71.9, 1305.0], [72.0, 1306.0], [72.1, 1310.0], [72.2, 1314.0], [72.3, 1317.0], [72.4, 1322.0], [72.5, 1323.0], [72.6, 1327.0], [72.7, 1329.0], [72.8, 1334.0], [72.9, 1337.0], [73.0, 1339.0], [73.1, 1343.0], [73.2, 1345.0], [73.3, 1347.0], [73.4, 1351.0], [73.5, 1351.0], [73.6, 1353.0], [73.7, 1359.0], [73.8, 1361.0], [73.9, 1364.0], [74.0, 1367.0], [74.1, 1368.0], [74.2, 1369.0], [74.3, 1371.0], [74.4, 1374.0], [74.5, 1377.0], [74.6, 1379.0], [74.7, 1380.0], [74.8, 1384.0], [74.9, 1386.0], [75.0, 1388.0], [75.1, 1391.0], [75.2, 1393.0], [75.3, 1395.0], [75.4, 1397.0], [75.5, 1398.0], [75.6, 1399.0], [75.7, 1402.0], [75.8, 1404.0], [75.9, 1407.0], [76.0, 1409.0], [76.1, 1410.0], [76.2, 1413.0], [76.3, 1415.0], [76.4, 1417.0], [76.5, 1420.0], [76.6, 1421.0], [76.7, 1424.0], [76.8, 1426.0], [76.9, 1431.0], [77.0, 1433.0], [77.1, 1436.0], [77.2, 1438.0], [77.3, 1442.0], [77.4, 1445.0], [77.5, 1446.0], [77.6, 1447.0], [77.7, 1449.0], [77.8, 1451.0], [77.9, 1452.0], [78.0, 1455.0], [78.1, 1456.0], [78.2, 1456.0], [78.3, 1460.0], [78.4, 1461.0], [78.5, 1463.0], [78.6, 1464.0], [78.7, 1465.0], [78.8, 1467.0], [78.9, 1469.0], [79.0, 1470.0], [79.1, 1474.0], [79.2, 1475.0], [79.3, 1479.0], [79.4, 1481.0], [79.5, 1483.0], [79.6, 1484.0], [79.7, 1487.0], [79.8, 1489.0], [79.9, 1490.0], [80.0, 1492.0], [80.1, 1494.0], [80.2, 1497.0], [80.3, 1498.0], [80.4, 1500.0], [80.5, 1501.0], [80.6, 1505.0], [80.7, 1506.0], [80.8, 1509.0], [80.9, 1512.0], [81.0, 1514.0], [81.1, 1517.0], [81.2, 1520.0], [81.3, 1522.0], [81.4, 1524.0], [81.5, 1527.0], [81.6, 1529.0], [81.7, 1531.0], [81.8, 1532.0], [81.9, 1533.0], [82.0, 1536.0], [82.1, 1538.0], [82.2, 1542.0], [82.3, 1546.0], [82.4, 1549.0], [82.5, 1551.0], [82.6, 1553.0], [82.7, 1555.0], [82.8, 1557.0], [82.9, 1558.0], [83.0, 1561.0], [83.1, 1563.0], [83.2, 1567.0], [83.3, 1569.0], [83.4, 1570.0], [83.5, 1574.0], [83.6, 1578.0], [83.7, 1581.0], [83.8, 1584.0], [83.9, 1585.0], [84.0, 1588.0], [84.1, 1594.0], [84.2, 1596.0], [84.3, 1600.0], [84.4, 1602.0], [84.5, 1606.0], [84.6, 1611.0], [84.7, 1614.0], [84.8, 1619.0], [84.9, 1622.0], [85.0, 1626.0], [85.1, 1630.0], [85.2, 1632.0], [85.3, 1635.0], [85.4, 1638.0], [85.5, 1643.0], [85.6, 1645.0], [85.7, 1646.0], [85.8, 1649.0], [85.9, 1652.0], [86.0, 1653.0], [86.1, 1657.0], [86.2, 1659.0], [86.3, 1660.0], [86.4, 1665.0], [86.5, 1669.0], [86.6, 1671.0], [86.7, 1677.0], [86.8, 1680.0], [86.9, 1686.0], [87.0, 1688.0], [87.1, 1691.0], [87.2, 1694.0], [87.3, 1700.0], [87.4, 1704.0], [87.5, 1709.0], [87.6, 1711.0], [87.7, 1715.0], [87.8, 1718.0], [87.9, 1722.0], [88.0, 1727.0], [88.1, 1732.0], [88.2, 1738.0], [88.3, 1743.0], [88.4, 1749.0], [88.5, 1756.0], [88.6, 1758.0], [88.7, 1761.0], [88.8, 1768.0], [88.9, 1772.0], [89.0, 1778.0], [89.1, 1783.0], [89.2, 1786.0], [89.3, 1795.0], [89.4, 1798.0], [89.5, 1805.0], [89.6, 1810.0], [89.7, 1817.0], [89.8, 1826.0], [89.9, 1832.0], [90.0, 1843.0], [90.1, 1850.0], [90.2, 1856.0], [90.3, 1861.0], [90.4, 1867.0], [90.5, 1879.0], [90.6, 1890.0], [90.7, 1897.0], [90.8, 1907.0], [90.9, 1912.0], [91.0, 1923.0], [91.1, 1928.0], [91.2, 1935.0], [91.3, 1943.0], [91.4, 1950.0], [91.5, 1961.0], [91.6, 1970.0], [91.7, 1986.0], [91.8, 1990.0], [91.9, 2000.0], [92.0, 2007.0], [92.1, 2023.0], [92.2, 2030.0], [92.3, 2041.0], [92.4, 2049.0], [92.5, 2053.0], [92.6, 2055.0], [92.7, 2065.0], [92.8, 2074.0], [92.9, 2080.0], [93.0, 2092.0], [93.1, 2102.0], [93.2, 2105.0], [93.3, 2117.0], [93.4, 2127.0], [93.5, 2143.0], [93.6, 2153.0], [93.7, 2167.0], [93.8, 2176.0], [93.9, 2190.0], [94.0, 2201.0], [94.1, 2216.0], [94.2, 2228.0], [94.3, 2258.0], [94.4, 2272.0], [94.5, 2275.0], [94.6, 2285.0], [94.7, 2289.0], [94.8, 2301.0], [94.9, 2307.0], [95.0, 2320.0], [95.1, 2331.0], [95.2, 2342.0], [95.3, 2358.0], [95.4, 2375.0], [95.5, 2389.0], [95.6, 2395.0], [95.7, 2409.0], [95.8, 2431.0], [95.9, 2441.0], [96.0, 2468.0], [96.1, 2487.0], [96.2, 2509.0], [96.3, 2519.0], [96.4, 2529.0], [96.5, 2543.0], [96.6, 2551.0], [96.7, 2563.0], [96.8, 2583.0], [96.9, 2606.0], [97.0, 2632.0], [97.1, 2655.0], [97.2, 2667.0], [97.3, 2689.0], [97.4, 2718.0], [97.5, 2737.0], [97.6, 2772.0], [97.7, 2795.0], [97.8, 2820.0], [97.9, 2836.0], [98.0, 2862.0], [98.1, 2899.0], [98.2, 2938.0], [98.3, 2950.0], [98.4, 2975.0], [98.5, 2996.0], [98.6, 3019.0], [98.7, 3055.0], [98.8, 3076.0], [98.9, 3138.0], [99.0, 3224.0], [99.1, 3317.0], [99.2, 3465.0], [99.3, 3546.0], [99.4, 3657.0], [99.5, 3930.0], [99.6, 4411.0], [99.7, 4603.0], [99.8, 4836.0], [99.9, 5800.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 537.0, "series": [{"data": [[600.0, 407.0], [700.0, 256.0], [800.0, 252.0], [900.0, 237.0], [1000.0, 241.0], [1100.0, 278.0], [1200.0, 223.0], [1300.0, 202.0], [1400.0, 247.0], [1500.0, 204.0], [1600.0, 155.0], [1700.0, 110.0], [1800.0, 68.0], [1900.0, 61.0], [2000.0, 61.0], [2100.0, 47.0], [2300.0, 44.0], [2200.0, 43.0], [2400.0, 25.0], [2500.0, 39.0], [2600.0, 24.0], [2800.0, 21.0], [2700.0, 19.0], [2900.0, 22.0], [3000.0, 16.0], [3100.0, 6.0], [3300.0, 6.0], [3200.0, 5.0], [3400.0, 2.0], [3500.0, 7.0], [3600.0, 3.0], [3700.0, 5.0], [3900.0, 2.0], [4100.0, 2.0], [4200.0, 1.0], [4500.0, 4.0], [4600.0, 4.0], [4400.0, 1.0], [4800.0, 1.0], [4700.0, 1.0], [4900.0, 2.0], [5500.0, 1.0], [5600.0, 1.0], [5800.0, 2.0], [6100.0, 1.0], [6000.0, 2.0], [6200.0, 1.0], [100.0, 23.0], [200.0, 407.0], [300.0, 454.0], [400.0, 537.0], [500.0, 407.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1014.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2754.0, "series": [{"data": [[0.0, 1422.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2754.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1014.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.921875000000002, "minX": 1.60238664E12, "maxY": 10.0, "series": [{"data": [[1.602387E12, 10.0], [1.6023867E12, 10.0], [1.60238712E12, 9.921875000000002], [1.60238664E12, 10.0], [1.60238682E12, 10.0], [1.60238676E12, 10.0], [1.60238694E12, 10.0], [1.60238688E12, 10.0], [1.60238706E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238712E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 370.0, "minX": 1.0, "maxY": 3100.0, "series": [{"data": [[8.0, 1475.0], [4.0, 916.0], [2.0, 2949.0], [1.0, 3100.0], [9.0, 370.0], [10.0, 1006.0606060606059], [5.0, 2538.0], [6.0, 1277.0], [3.0, 2578.0], [7.0, 1019.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1007.4416184971097]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2768.2833333333333, "minX": 1.60238664E12, "maxY": 3475033.25, "series": [{"data": [[1.602387E12, 2953536.15], [1.6023867E12, 2148211.533333333], [1.60238712E12, 2449076.9833333334], [1.60238664E12, 2063182.1833333333], [1.60238682E12, 2990784.0166666666], [1.60238676E12, 3475033.25], [1.60238694E12, 2279564.25], [1.60238688E12, 2845391.0833333335], [1.60238706E12, 2767267.716666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.602387E12, 4729.55], [1.6023867E12, 4696.533333333334], [1.60238712E12, 4346.583333333333], [1.60238664E12, 2768.2833333333333], [1.60238682E12, 4733.033333333334], [1.60238676E12, 4704.333333333333], [1.60238694E12, 4048.516666666667], [1.60238688E12, 3600.733333333333], [1.60238706E12, 4949.766666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238712E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 922.6457055214717, "minX": 1.60238664E12, "maxY": 1231.7370600414063, "series": [{"data": [[1.602387E12, 929.9734789391574], [1.6023867E12, 936.5950540958277], [1.60238712E12, 1011.1718750000006], [1.60238664E12, 1159.4571428571428], [1.60238682E12, 962.5913461538457], [1.60238676E12, 965.4516129032253], [1.60238694E12, 1071.1298932384336], [1.60238688E12, 1231.7370600414063], [1.60238706E12, 922.6457055214717]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238712E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 921.0260736196312, "minX": 1.60238664E12, "maxY": 1229.107660455488, "series": [{"data": [[1.602387E12, 928.1060842433699], [1.6023867E12, 935.0417310664598], [1.60238712E12, 1009.5746527777778], [1.60238664E12, 1157.1740259740268], [1.60238682E12, 960.4839743589743], [1.60238676E12, 962.7693548387098], [1.60238694E12, 1069.6014234875447], [1.60238688E12, 1229.107660455488], [1.60238706E12, 921.0260736196312]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238712E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01602564102564104, "minX": 1.60238664E12, "maxY": 0.23376623376623346, "series": [{"data": [[1.602387E12, 0.0218408736349454], [1.6023867E12, 0.017001545595054086], [1.60238712E12, 0.024305555555555584], [1.60238664E12, 0.23376623376623346], [1.60238682E12, 0.01602564102564104], [1.60238676E12, 0.017741935483870958], [1.60238694E12, 0.019572953736654786], [1.60238688E12, 0.020703933747412036], [1.60238706E12, 0.021472392638036807]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238712E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.60238664E12, "maxY": 6213.0, "series": [{"data": [[1.602387E12, 3076.0], [1.6023867E12, 5821.0], [1.60238712E12, 4142.0], [1.60238664E12, 5557.0], [1.60238682E12, 5630.0], [1.60238676E12, 4617.0], [1.60238694E12, 6213.0], [1.60238688E12, 6104.0], [1.60238706E12, 3006.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.602387E12, 203.1119993877411], [1.6023867E12, 202.6639996910095], [1.60238712E12, 207.77199944972992], [1.60238664E12, 209.68799889564514], [1.60238682E12, 202.74999910593033], [1.60238676E12, 209.35599940776825], [1.60238694E12, 219.06699986577033], [1.60238688E12, 229.0], [1.60238706E12, 200.75399968862533]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.602387E12, 205.06740018367768], [1.6023867E12, 203.4152000617981], [1.60238712E12, 209.84920022010803], [1.60238664E12, 213.85680044174194], [1.60238682E12, 205.18750005960464], [1.60238676E12, 211.14790005922316], [1.60238694E12, 219.57370005369185], [1.60238688E12, 229.0], [1.60238706E12, 201.92940012454986]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.602387E12, 204.29699977040292], [1.6023867E12, 203.1559999227524], [1.60238712E12, 208.92599972486497], [1.60238664E12, 212.00399944782257], [1.60238682E12, 204.62499955296516], [1.60238676E12, 210.5979997038841], [1.60238694E12, 219.34849993288518], [1.60238688E12, 229.0], [1.60238706E12, 201.40699984431268]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.602387E12, 195.0], [1.6023867E12, 194.0], [1.60238712E12, 195.0], [1.60238664E12, 201.0], [1.60238682E12, 179.0], [1.60238676E12, 190.0], [1.60238694E12, 204.0], [1.60238688E12, 215.0], [1.60238706E12, 197.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.602387E12, 758.0], [1.6023867E12, 712.0], [1.60238712E12, 817.0], [1.60238664E12, 1037.0], [1.60238682E12, 770.5], [1.60238676E12, 724.0], [1.60238694E12, 935.0], [1.60238688E12, 1115.0], [1.60238706E12, 714.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238712E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 410.0, "minX": 1.0, "maxY": 2578.0, "series": [{"data": [[2.0, 1876.5], [3.0, 1730.0], [4.0, 1440.0], [5.0, 1273.0], [6.0, 1204.0], [7.0, 1085.0], [8.0, 1123.5], [9.0, 1035.0], [10.0, 1021.0], [11.0, 881.0], [12.0, 773.5], [13.0, 750.0], [14.0, 678.5], [15.0, 739.5], [16.0, 482.5], [1.0, 2578.0], [17.0, 454.0], [18.0, 483.0], [19.0, 450.5], [20.0, 433.0], [21.0, 418.5], [22.0, 436.5], [23.0, 410.0], [25.0, 424.0], [26.0, 413.5], [27.0, 446.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 409.5, "minX": 1.0, "maxY": 2576.0, "series": [{"data": [[2.0, 1869.5], [3.0, 1729.0], [4.0, 1438.5], [5.0, 1270.0], [6.0, 1199.0], [7.0, 1083.0], [8.0, 1122.0], [9.0, 1035.0], [10.0, 1019.5], [11.0, 878.0], [12.0, 772.5], [13.0, 747.0], [14.0, 676.0], [15.0, 739.5], [16.0, 482.5], [1.0, 2576.0], [17.0, 454.0], [18.0, 483.0], [19.0, 450.5], [20.0, 432.5], [21.0, 418.5], [22.0, 436.0], [23.0, 409.5], [25.0, 423.0], [26.0, 413.0], [27.0, 445.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.583333333333333, "minX": 1.60238664E12, "maxY": 10.866666666666667, "series": [{"data": [[1.602387E12, 10.683333333333334], [1.6023867E12, 10.783333333333333], [1.60238712E12, 9.433333333333334], [1.60238664E12, 6.583333333333333], [1.60238682E12, 10.4], [1.60238676E12, 10.333333333333334], [1.60238694E12, 9.366666666666667], [1.60238688E12, 8.05], [1.60238706E12, 10.866666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238712E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.416666666666667, "minX": 1.60238664E12, "maxY": 10.866666666666667, "series": [{"data": [[1.602387E12, 10.683333333333334], [1.6023867E12, 10.783333333333333], [1.60238712E12, 9.6], [1.60238664E12, 6.416666666666667], [1.60238682E12, 10.4], [1.60238676E12, 10.333333333333334], [1.60238694E12, 9.366666666666667], [1.60238688E12, 8.05], [1.60238706E12, 10.866666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238712E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.416666666666667, "minX": 1.60238664E12, "maxY": 10.866666666666667, "series": [{"data": [[1.602387E12, 10.683333333333334], [1.6023867E12, 10.783333333333333], [1.60238712E12, 9.6], [1.60238664E12, 6.416666666666667], [1.60238682E12, 10.4], [1.60238676E12, 10.333333333333334], [1.60238694E12, 9.366666666666667], [1.60238688E12, 8.05], [1.60238706E12, 10.866666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238712E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.416666666666667, "minX": 1.60238664E12, "maxY": 10.866666666666667, "series": [{"data": [[1.602387E12, 10.683333333333334], [1.6023867E12, 10.783333333333333], [1.60238712E12, 9.6], [1.60238664E12, 6.416666666666667], [1.60238682E12, 10.4], [1.60238676E12, 10.333333333333334], [1.60238694E12, 9.366666666666667], [1.60238688E12, 8.05], [1.60238706E12, 10.866666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238712E12, "title": "Total Transactions Per Second"}},
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

