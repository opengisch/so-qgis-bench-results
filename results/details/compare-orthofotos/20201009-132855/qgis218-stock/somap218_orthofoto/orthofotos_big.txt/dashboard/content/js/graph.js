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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 90091.0, "series": [{"data": [[0.0, 3.0], [0.1, 6.0], [0.2, 8.0], [0.3, 11.0], [0.4, 13.0], [0.5, 13.0], [0.6, 14.0], [0.7, 14.0], [0.8, 15.0], [0.9, 16.0], [1.0, 17.0], [1.1, 19.0], [1.2, 20.0], [1.3, 21.0], [1.4, 22.0], [1.5, 24.0], [1.6, 26.0], [1.7, 27.0], [1.8, 28.0], [1.9, 29.0], [2.0, 32.0], [2.1, 33.0], [2.2, 34.0], [2.3, 35.0], [2.4, 40.0], [2.5, 45.0], [2.6, 51.0], [2.7, 58.0], [2.8, 65.0], [2.9, 67.0], [3.0, 70.0], [3.1, 76.0], [3.2, 83.0], [3.3, 87.0], [3.4, 90.0], [3.5, 93.0], [3.6, 99.0], [3.7, 104.0], [3.8, 112.0], [3.9, 114.0], [4.0, 117.0], [4.1, 118.0], [4.2, 119.0], [4.3, 120.0], [4.4, 121.0], [4.5, 122.0], [4.6, 123.0], [4.7, 124.0], [4.8, 125.0], [4.9, 126.0], [5.0, 127.0], [5.1, 128.0], [5.2, 129.0], [5.3, 130.0], [5.4, 131.0], [5.5, 132.0], [5.6, 133.0], [5.7, 134.0], [5.8, 137.0], [5.9, 138.0], [6.0, 140.0], [6.1, 141.0], [6.2, 141.0], [6.3, 143.0], [6.4, 144.0], [6.5, 144.0], [6.6, 146.0], [6.7, 146.0], [6.8, 147.0], [6.9, 148.0], [7.0, 148.0], [7.1, 150.0], [7.2, 151.0], [7.3, 152.0], [7.4, 152.0], [7.5, 153.0], [7.6, 153.0], [7.7, 154.0], [7.8, 155.0], [7.9, 156.0], [8.0, 157.0], [8.1, 158.0], [8.2, 158.0], [8.3, 159.0], [8.4, 160.0], [8.5, 161.0], [8.6, 161.0], [8.7, 162.0], [8.8, 163.0], [8.9, 163.0], [9.0, 164.0], [9.1, 165.0], [9.2, 165.0], [9.3, 166.0], [9.4, 167.0], [9.5, 168.0], [9.6, 169.0], [9.7, 169.0], [9.8, 169.0], [9.9, 170.0], [10.0, 170.0], [10.1, 171.0], [10.2, 171.0], [10.3, 172.0], [10.4, 173.0], [10.5, 173.0], [10.6, 174.0], [10.7, 174.0], [10.8, 174.0], [10.9, 175.0], [11.0, 176.0], [11.1, 176.0], [11.2, 177.0], [11.3, 178.0], [11.4, 178.0], [11.5, 179.0], [11.6, 179.0], [11.7, 180.0], [11.8, 181.0], [11.9, 181.0], [12.0, 182.0], [12.1, 182.0], [12.2, 183.0], [12.3, 184.0], [12.4, 185.0], [12.5, 185.0], [12.6, 186.0], [12.7, 186.0], [12.8, 187.0], [12.9, 187.0], [13.0, 188.0], [13.1, 189.0], [13.2, 189.0], [13.3, 190.0], [13.4, 190.0], [13.5, 191.0], [13.6, 192.0], [13.7, 193.0], [13.8, 193.0], [13.9, 194.0], [14.0, 194.0], [14.1, 195.0], [14.2, 196.0], [14.3, 197.0], [14.4, 198.0], [14.5, 199.0], [14.6, 199.0], [14.7, 200.0], [14.8, 201.0], [14.9, 202.0], [15.0, 203.0], [15.1, 204.0], [15.2, 204.0], [15.3, 205.0], [15.4, 206.0], [15.5, 206.0], [15.6, 207.0], [15.7, 208.0], [15.8, 208.0], [15.9, 209.0], [16.0, 210.0], [16.1, 210.0], [16.2, 211.0], [16.3, 211.0], [16.4, 212.0], [16.5, 212.0], [16.6, 213.0], [16.7, 214.0], [16.8, 214.0], [16.9, 215.0], [17.0, 216.0], [17.1, 217.0], [17.2, 217.0], [17.3, 218.0], [17.4, 219.0], [17.5, 219.0], [17.6, 219.0], [17.7, 220.0], [17.8, 221.0], [17.9, 222.0], [18.0, 222.0], [18.1, 223.0], [18.2, 224.0], [18.3, 224.0], [18.4, 226.0], [18.5, 227.0], [18.6, 227.0], [18.7, 228.0], [18.8, 228.0], [18.9, 229.0], [19.0, 230.0], [19.1, 230.0], [19.2, 231.0], [19.3, 232.0], [19.4, 233.0], [19.5, 234.0], [19.6, 234.0], [19.7, 235.0], [19.8, 236.0], [19.9, 236.0], [20.0, 238.0], [20.1, 238.0], [20.2, 239.0], [20.3, 240.0], [20.4, 241.0], [20.5, 243.0], [20.6, 244.0], [20.7, 244.0], [20.8, 245.0], [20.9, 246.0], [21.0, 247.0], [21.1, 248.0], [21.2, 248.0], [21.3, 249.0], [21.4, 249.0], [21.5, 250.0], [21.6, 251.0], [21.7, 252.0], [21.8, 252.0], [21.9, 253.0], [22.0, 253.0], [22.1, 255.0], [22.2, 256.0], [22.3, 256.0], [22.4, 257.0], [22.5, 258.0], [22.6, 259.0], [22.7, 259.0], [22.8, 260.0], [22.9, 261.0], [23.0, 262.0], [23.1, 263.0], [23.2, 264.0], [23.3, 264.0], [23.4, 266.0], [23.5, 267.0], [23.6, 268.0], [23.7, 269.0], [23.8, 270.0], [23.9, 271.0], [24.0, 271.0], [24.1, 272.0], [24.2, 274.0], [24.3, 274.0], [24.4, 275.0], [24.5, 276.0], [24.6, 277.0], [24.7, 278.0], [24.8, 280.0], [24.9, 280.0], [25.0, 281.0], [25.1, 282.0], [25.2, 282.0], [25.3, 283.0], [25.4, 284.0], [25.5, 284.0], [25.6, 285.0], [25.7, 287.0], [25.8, 288.0], [25.9, 289.0], [26.0, 289.0], [26.1, 290.0], [26.2, 291.0], [26.3, 292.0], [26.4, 293.0], [26.5, 294.0], [26.6, 295.0], [26.7, 296.0], [26.8, 298.0], [26.9, 299.0], [27.0, 300.0], [27.1, 300.0], [27.2, 301.0], [27.3, 303.0], [27.4, 304.0], [27.5, 305.0], [27.6, 308.0], [27.7, 309.0], [27.8, 309.0], [27.9, 310.0], [28.0, 311.0], [28.1, 313.0], [28.2, 314.0], [28.3, 315.0], [28.4, 316.0], [28.5, 318.0], [28.6, 319.0], [28.7, 320.0], [28.8, 320.0], [28.9, 321.0], [29.0, 322.0], [29.1, 323.0], [29.2, 324.0], [29.3, 325.0], [29.4, 326.0], [29.5, 327.0], [29.6, 328.0], [29.7, 329.0], [29.8, 330.0], [29.9, 331.0], [30.0, 331.0], [30.1, 332.0], [30.2, 334.0], [30.3, 336.0], [30.4, 337.0], [30.5, 339.0], [30.6, 340.0], [30.7, 341.0], [30.8, 343.0], [30.9, 347.0], [31.0, 348.0], [31.1, 349.0], [31.2, 349.0], [31.3, 350.0], [31.4, 351.0], [31.5, 352.0], [31.6, 354.0], [31.7, 355.0], [31.8, 356.0], [31.9, 357.0], [32.0, 358.0], [32.1, 359.0], [32.2, 360.0], [32.3, 361.0], [32.4, 362.0], [32.5, 365.0], [32.6, 366.0], [32.7, 367.0], [32.8, 369.0], [32.9, 370.0], [33.0, 371.0], [33.1, 373.0], [33.2, 373.0], [33.3, 375.0], [33.4, 377.0], [33.5, 378.0], [33.6, 379.0], [33.7, 380.0], [33.8, 381.0], [33.9, 383.0], [34.0, 385.0], [34.1, 387.0], [34.2, 388.0], [34.3, 391.0], [34.4, 393.0], [34.5, 393.0], [34.6, 394.0], [34.7, 396.0], [34.8, 398.0], [34.9, 401.0], [35.0, 402.0], [35.1, 403.0], [35.2, 405.0], [35.3, 407.0], [35.4, 409.0], [35.5, 410.0], [35.6, 411.0], [35.7, 413.0], [35.8, 414.0], [35.9, 416.0], [36.0, 418.0], [36.1, 420.0], [36.2, 423.0], [36.3, 424.0], [36.4, 426.0], [36.5, 428.0], [36.6, 431.0], [36.7, 432.0], [36.8, 433.0], [36.9, 434.0], [37.0, 435.0], [37.1, 438.0], [37.2, 441.0], [37.3, 443.0], [37.4, 445.0], [37.5, 447.0], [37.6, 448.0], [37.7, 450.0], [37.8, 451.0], [37.9, 452.0], [38.0, 455.0], [38.1, 457.0], [38.2, 459.0], [38.3, 462.0], [38.4, 464.0], [38.5, 466.0], [38.6, 469.0], [38.7, 471.0], [38.8, 475.0], [38.9, 477.0], [39.0, 478.0], [39.1, 481.0], [39.2, 484.0], [39.3, 488.0], [39.4, 491.0], [39.5, 494.0], [39.6, 500.0], [39.7, 503.0], [39.8, 506.0], [39.9, 511.0], [40.0, 515.0], [40.1, 516.0], [40.2, 517.0], [40.3, 521.0], [40.4, 526.0], [40.5, 528.0], [40.6, 530.0], [40.7, 533.0], [40.8, 534.0], [40.9, 538.0], [41.0, 541.0], [41.1, 543.0], [41.2, 548.0], [41.3, 551.0], [41.4, 553.0], [41.5, 558.0], [41.6, 560.0], [41.7, 561.0], [41.8, 563.0], [41.9, 564.0], [42.0, 567.0], [42.1, 571.0], [42.2, 574.0], [42.3, 580.0], [42.4, 583.0], [42.5, 588.0], [42.6, 591.0], [42.7, 597.0], [42.8, 599.0], [42.9, 605.0], [43.0, 611.0], [43.1, 613.0], [43.2, 617.0], [43.3, 623.0], [43.4, 624.0], [43.5, 629.0], [43.6, 632.0], [43.7, 634.0], [43.8, 640.0], [43.9, 646.0], [44.0, 649.0], [44.1, 653.0], [44.2, 656.0], [44.3, 659.0], [44.4, 660.0], [44.5, 663.0], [44.6, 666.0], [44.7, 667.0], [44.8, 670.0], [44.9, 673.0], [45.0, 679.0], [45.1, 682.0], [45.2, 685.0], [45.3, 688.0], [45.4, 690.0], [45.5, 699.0], [45.6, 708.0], [45.7, 711.0], [45.8, 714.0], [45.9, 716.0], [46.0, 717.0], [46.1, 721.0], [46.2, 726.0], [46.3, 728.0], [46.4, 733.0], [46.5, 736.0], [46.6, 741.0], [46.7, 742.0], [46.8, 744.0], [46.9, 748.0], [47.0, 752.0], [47.1, 753.0], [47.2, 759.0], [47.3, 761.0], [47.4, 764.0], [47.5, 768.0], [47.6, 774.0], [47.7, 778.0], [47.8, 781.0], [47.9, 784.0], [48.0, 787.0], [48.1, 789.0], [48.2, 794.0], [48.3, 799.0], [48.4, 801.0], [48.5, 803.0], [48.6, 806.0], [48.7, 809.0], [48.8, 811.0], [48.9, 813.0], [49.0, 815.0], [49.1, 816.0], [49.2, 818.0], [49.3, 823.0], [49.4, 826.0], [49.5, 828.0], [49.6, 830.0], [49.7, 834.0], [49.8, 835.0], [49.9, 839.0], [50.0, 842.0], [50.1, 843.0], [50.2, 848.0], [50.3, 850.0], [50.4, 853.0], [50.5, 854.0], [50.6, 857.0], [50.7, 860.0], [50.8, 863.0], [50.9, 866.0], [51.0, 868.0], [51.1, 870.0], [51.2, 873.0], [51.3, 878.0], [51.4, 883.0], [51.5, 888.0], [51.6, 894.0], [51.7, 898.0], [51.8, 900.0], [51.9, 903.0], [52.0, 907.0], [52.1, 910.0], [52.2, 913.0], [52.3, 917.0], [52.4, 921.0], [52.5, 925.0], [52.6, 926.0], [52.7, 928.0], [52.8, 932.0], [52.9, 936.0], [53.0, 941.0], [53.1, 947.0], [53.2, 951.0], [53.3, 955.0], [53.4, 959.0], [53.5, 964.0], [53.6, 966.0], [53.7, 970.0], [53.8, 973.0], [53.9, 976.0], [54.0, 978.0], [54.1, 980.0], [54.2, 984.0], [54.3, 987.0], [54.4, 994.0], [54.5, 999.0], [54.6, 1002.0], [54.7, 1007.0], [54.8, 1011.0], [54.9, 1013.0], [55.0, 1015.0], [55.1, 1018.0], [55.2, 1021.0], [55.3, 1024.0], [55.4, 1026.0], [55.5, 1028.0], [55.6, 1033.0], [55.7, 1036.0], [55.8, 1044.0], [55.9, 1047.0], [56.0, 1049.0], [56.1, 1056.0], [56.2, 1058.0], [56.3, 1060.0], [56.4, 1062.0], [56.5, 1067.0], [56.6, 1069.0], [56.7, 1073.0], [56.8, 1078.0], [56.9, 1080.0], [57.0, 1084.0], [57.1, 1088.0], [57.2, 1090.0], [57.3, 1093.0], [57.4, 1094.0], [57.5, 1097.0], [57.6, 1101.0], [57.7, 1107.0], [57.8, 1111.0], [57.9, 1116.0], [58.0, 1119.0], [58.1, 1124.0], [58.2, 1131.0], [58.3, 1137.0], [58.4, 1138.0], [58.5, 1141.0], [58.6, 1145.0], [58.7, 1150.0], [58.8, 1157.0], [58.9, 1159.0], [59.0, 1163.0], [59.1, 1168.0], [59.2, 1171.0], [59.3, 1178.0], [59.4, 1180.0], [59.5, 1184.0], [59.6, 1186.0], [59.7, 1194.0], [59.8, 1200.0], [59.9, 1204.0], [60.0, 1207.0], [60.1, 1215.0], [60.2, 1225.0], [60.3, 1234.0], [60.4, 1239.0], [60.5, 1243.0], [60.6, 1249.0], [60.7, 1251.0], [60.8, 1258.0], [60.9, 1268.0], [61.0, 1274.0], [61.1, 1278.0], [61.2, 1286.0], [61.3, 1298.0], [61.4, 1310.0], [61.5, 1318.0], [61.6, 1324.0], [61.7, 1328.0], [61.8, 1345.0], [61.9, 1356.0], [62.0, 1364.0], [62.1, 1371.0], [62.2, 1376.0], [62.3, 1382.0], [62.4, 1388.0], [62.5, 1395.0], [62.6, 1410.0], [62.7, 1420.0], [62.8, 1426.0], [62.9, 1438.0], [63.0, 1445.0], [63.1, 1452.0], [63.2, 1463.0], [63.3, 1472.0], [63.4, 1479.0], [63.5, 1486.0], [63.6, 1501.0], [63.7, 1510.0], [63.8, 1522.0], [63.9, 1533.0], [64.0, 1539.0], [64.1, 1546.0], [64.2, 1568.0], [64.3, 1578.0], [64.4, 1594.0], [64.5, 1601.0], [64.6, 1605.0], [64.7, 1622.0], [64.8, 1633.0], [64.9, 1647.0], [65.0, 1663.0], [65.1, 1678.0], [65.2, 1688.0], [65.3, 1701.0], [65.4, 1711.0], [65.5, 1730.0], [65.6, 1739.0], [65.7, 1751.0], [65.8, 1782.0], [65.9, 1802.0], [66.0, 1819.0], [66.1, 1843.0], [66.2, 1855.0], [66.3, 1869.0], [66.4, 1891.0], [66.5, 1901.0], [66.6, 1924.0], [66.7, 1958.0], [66.8, 1974.0], [66.9, 2004.0], [67.0, 2013.0], [67.1, 2029.0], [67.2, 2042.0], [67.3, 2061.0], [67.4, 2069.0], [67.5, 2091.0], [67.6, 2107.0], [67.7, 2128.0], [67.8, 2137.0], [67.9, 2167.0], [68.0, 2202.0], [68.1, 2236.0], [68.2, 2250.0], [68.3, 2274.0], [68.4, 2291.0], [68.5, 2316.0], [68.6, 2330.0], [68.7, 2353.0], [68.8, 2371.0], [68.9, 2399.0], [69.0, 2418.0], [69.1, 2430.0], [69.2, 2446.0], [69.3, 2469.0], [69.4, 2497.0], [69.5, 2517.0], [69.6, 2529.0], [69.7, 2544.0], [69.8, 2553.0], [69.9, 2569.0], [70.0, 2579.0], [70.1, 2591.0], [70.2, 2600.0], [70.3, 2610.0], [70.4, 2619.0], [70.5, 2627.0], [70.6, 2633.0], [70.7, 2643.0], [70.8, 2652.0], [70.9, 2669.0], [71.0, 2683.0], [71.1, 2686.0], [71.2, 2689.0], [71.3, 2704.0], [71.4, 2722.0], [71.5, 2733.0], [71.6, 2743.0], [71.7, 2752.0], [71.8, 2763.0], [71.9, 2782.0], [72.0, 2803.0], [72.1, 2811.0], [72.2, 2830.0], [72.3, 2850.0], [72.4, 2853.0], [72.5, 2862.0], [72.6, 2876.0], [72.7, 2888.0], [72.8, 2902.0], [72.9, 2918.0], [73.0, 2946.0], [73.1, 2957.0], [73.2, 2961.0], [73.3, 2982.0], [73.4, 2997.0], [73.5, 3015.0], [73.6, 3030.0], [73.7, 3053.0], [73.8, 3064.0], [73.9, 3078.0], [74.0, 3088.0], [74.1, 3097.0], [74.2, 3111.0], [74.3, 3131.0], [74.4, 3141.0], [74.5, 3152.0], [74.6, 3173.0], [74.7, 3183.0], [74.8, 3198.0], [74.9, 3232.0], [75.0, 3245.0], [75.1, 3251.0], [75.2, 3266.0], [75.3, 3275.0], [75.4, 3300.0], [75.5, 3316.0], [75.6, 3333.0], [75.7, 3347.0], [75.8, 3367.0], [75.9, 3375.0], [76.0, 3387.0], [76.1, 3397.0], [76.2, 3406.0], [76.3, 3413.0], [76.4, 3423.0], [76.5, 3432.0], [76.6, 3443.0], [76.7, 3449.0], [76.8, 3454.0], [76.9, 3463.0], [77.0, 3479.0], [77.1, 3488.0], [77.2, 3499.0], [77.3, 3507.0], [77.4, 3512.0], [77.5, 3524.0], [77.6, 3534.0], [77.7, 3542.0], [77.8, 3553.0], [77.9, 3565.0], [78.0, 3577.0], [78.1, 3591.0], [78.2, 3597.0], [78.3, 3609.0], [78.4, 3628.0], [78.5, 3633.0], [78.6, 3644.0], [78.7, 3661.0], [78.8, 3679.0], [78.9, 3696.0], [79.0, 3700.0], [79.1, 3707.0], [79.2, 3714.0], [79.3, 3728.0], [79.4, 3751.0], [79.5, 3763.0], [79.6, 3767.0], [79.7, 3778.0], [79.8, 3786.0], [79.9, 3794.0], [80.0, 3822.0], [80.1, 3844.0], [80.2, 3870.0], [80.3, 3882.0], [80.4, 3890.0], [80.5, 3901.0], [80.6, 3908.0], [80.7, 3918.0], [80.8, 3925.0], [80.9, 3945.0], [81.0, 3957.0], [81.1, 3963.0], [81.2, 3989.0], [81.3, 4015.0], [81.4, 4025.0], [81.5, 4043.0], [81.6, 4054.0], [81.7, 4065.0], [81.8, 4098.0], [81.9, 4118.0], [82.0, 4145.0], [82.1, 4159.0], [82.2, 4197.0], [82.3, 4239.0], [82.4, 4259.0], [82.5, 4283.0], [82.6, 4305.0], [82.7, 4342.0], [82.8, 4398.0], [82.9, 4411.0], [83.0, 4426.0], [83.1, 4459.0], [83.2, 4505.0], [83.3, 4538.0], [83.4, 4577.0], [83.5, 4601.0], [83.6, 4622.0], [83.7, 4634.0], [83.8, 4641.0], [83.9, 4648.0], [84.0, 4661.0], [84.1, 4688.0], [84.2, 4701.0], [84.3, 4716.0], [84.4, 4725.0], [84.5, 4740.0], [84.6, 4749.0], [84.7, 4759.0], [84.8, 4769.0], [84.9, 4780.0], [85.0, 4785.0], [85.1, 4804.0], [85.2, 4819.0], [85.3, 4836.0], [85.4, 4847.0], [85.5, 4885.0], [85.6, 4908.0], [85.7, 4925.0], [85.8, 4937.0], [85.9, 4953.0], [86.0, 4975.0], [86.1, 5013.0], [86.2, 5047.0], [86.3, 5073.0], [86.4, 5119.0], [86.5, 5154.0], [86.6, 5169.0], [86.7, 5189.0], [86.8, 5204.0], [86.9, 5227.0], [87.0, 5275.0], [87.1, 5320.0], [87.2, 5351.0], [87.3, 5378.0], [87.4, 5396.0], [87.5, 5411.0], [87.6, 5442.0], [87.7, 5460.0], [87.8, 5478.0], [87.9, 5501.0], [88.0, 5533.0], [88.1, 5551.0], [88.2, 5578.0], [88.3, 5613.0], [88.4, 5623.0], [88.5, 5671.0], [88.6, 5685.0], [88.7, 5694.0], [88.8, 5705.0], [88.9, 5748.0], [89.0, 5758.0], [89.1, 5782.0], [89.2, 5793.0], [89.3, 5814.0], [89.4, 5824.0], [89.5, 5840.0], [89.6, 5860.0], [89.7, 5888.0], [89.8, 5897.0], [89.9, 5920.0], [90.0, 5928.0], [90.1, 5944.0], [90.2, 5951.0], [90.3, 5961.0], [90.4, 5967.0], [90.5, 5978.0], [90.6, 5988.0], [90.7, 5994.0], [90.8, 6002.0], [90.9, 6016.0], [91.0, 6032.0], [91.1, 6055.0], [91.2, 6071.0], [91.3, 6087.0], [91.4, 6093.0], [91.5, 6097.0], [91.6, 6107.0], [91.7, 6119.0], [91.8, 6127.0], [91.9, 6131.0], [92.0, 6146.0], [92.1, 6155.0], [92.2, 6164.0], [92.3, 6168.0], [92.4, 6177.0], [92.5, 6184.0], [92.6, 6199.0], [92.7, 6207.0], [92.8, 6213.0], [92.9, 6222.0], [93.0, 6233.0], [93.1, 6247.0], [93.2, 6267.0], [93.3, 6278.0], [93.4, 6298.0], [93.5, 6319.0], [93.6, 6330.0], [93.7, 6341.0], [93.8, 6349.0], [93.9, 6362.0], [94.0, 6369.0], [94.1, 6378.0], [94.2, 6391.0], [94.3, 6401.0], [94.4, 6412.0], [94.5, 6427.0], [94.6, 6447.0], [94.7, 6465.0], [94.8, 6474.0], [94.9, 6496.0], [95.0, 6507.0], [95.1, 6517.0], [95.2, 6543.0], [95.3, 6567.0], [95.4, 6578.0], [95.5, 6602.0], [95.6, 6612.0], [95.7, 6638.0], [95.8, 6655.0], [95.9, 6676.0], [96.0, 6688.0], [96.1, 6712.0], [96.2, 6735.0], [96.3, 6752.0], [96.4, 6772.0], [96.5, 6792.0], [96.6, 6804.0], [96.7, 6829.0], [96.8, 6875.0], [96.9, 6892.0], [97.0, 6899.0], [97.1, 6931.0], [97.2, 6947.0], [97.3, 6974.0], [97.4, 7028.0], [97.5, 7081.0], [97.6, 7126.0], [97.7, 7176.0], [97.8, 7238.0], [97.9, 7287.0], [98.0, 7368.0], [98.1, 7456.0], [98.2, 7577.0], [98.3, 7864.0], [98.4, 7953.0], [98.5, 8265.0], [98.6, 8470.0], [98.7, 8559.0], [98.8, 8836.0], [98.9, 9116.0], [99.0, 9358.0], [99.1, 9627.0], [99.2, 9991.0], [99.3, 10542.0], [99.4, 10705.0], [99.5, 11240.0], [99.6, 11835.0], [99.7, 13229.0], [99.8, 14405.0], [99.9, 15721.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 643.0, "series": [{"data": [[0.0, 187.0], [100.0, 571.0], [200.0, 643.0], [300.0, 407.0], [400.0, 246.0], [500.0, 168.0], [600.0, 141.0], [700.0, 145.0], [800.0, 179.0], [900.0, 143.0], [1000.0, 157.0], [1100.0, 116.0], [1200.0, 80.0], [1300.0, 64.0], [1400.0, 53.0], [1500.0, 46.0], [1600.0, 43.0], [1700.0, 30.0], [1800.0, 33.0], [1900.0, 19.0], [2000.0, 34.0], [2100.0, 23.0], [2200.0, 25.0], [2300.0, 24.0], [2400.0, 26.0], [2500.0, 40.0], [2600.0, 56.0], [2800.0, 41.0], [2700.0, 38.0], [2900.0, 33.0], [3000.0, 38.0], [3100.0, 34.0], [3300.0, 40.0], [3200.0, 31.0], [3400.0, 54.0], [3500.0, 52.0], [3600.0, 40.0], [3700.0, 48.0], [3800.0, 29.0], [3900.0, 41.0], [4000.0, 30.0], [4100.0, 20.0], [4200.0, 18.0], [4300.0, 13.0], [4600.0, 36.0], [4400.0, 18.0], [4500.0, 17.0], [4700.0, 47.0], [4800.0, 25.0], [5000.0, 15.0], [4900.0, 27.0], [5100.0, 21.0], [5200.0, 14.0], [5300.0, 20.0], [5600.0, 26.0], [5400.0, 23.0], [5500.0, 19.0], [5800.0, 29.0], [5700.0, 26.0], [6100.0, 55.0], [6000.0, 40.0], [5900.0, 50.0], [6200.0, 43.0], [6300.0, 45.0], [6400.0, 32.0], [6600.0, 29.0], [6500.0, 30.0], [6700.0, 26.0], [6900.0, 20.0], [6800.0, 24.0], [7100.0, 13.0], [7000.0, 6.0], [7400.0, 6.0], [7300.0, 7.0], [7200.0, 7.0], [7600.0, 2.0], [7500.0, 3.0], [7900.0, 5.0], [7800.0, 2.0], [7700.0, 2.0], [8000.0, 1.0], [8200.0, 4.0], [8600.0, 2.0], [8500.0, 6.0], [8300.0, 2.0], [8400.0, 3.0], [8700.0, 1.0], [9100.0, 4.0], [9000.0, 1.0], [8800.0, 2.0], [8900.0, 2.0], [9500.0, 3.0], [9300.0, 3.0], [9600.0, 1.0], [9400.0, 1.0], [9700.0, 1.0], [9800.0, 3.0], [9900.0, 1.0], [10200.0, 2.0], [10100.0, 1.0], [10700.0, 2.0], [10500.0, 3.0], [10600.0, 3.0], [11200.0, 1.0], [10800.0, 2.0], [10900.0, 1.0], [11100.0, 1.0], [11600.0, 1.0], [11700.0, 1.0], [11500.0, 2.0], [11800.0, 1.0], [12100.0, 2.0], [12500.0, 1.0], [12300.0, 1.0], [13200.0, 2.0], [13400.0, 1.0], [13600.0, 1.0], [13900.0, 1.0], [14400.0, 2.0], [14600.0, 1.0], [14900.0, 1.0], [15100.0, 1.0], [15700.0, 1.0], [16200.0, 2.0], [16900.0, 1.0], [16700.0, 1.0], [90000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 90000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2056.0, "series": [{"data": [[0.0, 2056.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1244.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1890.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.571428571428571, "minX": 1.60225014E12, "maxY": 10.0, "series": [{"data": [[1.60225038E12, 10.0], [1.60225068E12, 10.0], [1.60225098E12, 10.0], [1.60225032E12, 10.0], [1.60225062E12, 10.0], [1.60225092E12, 10.0], [1.60225026E12, 10.0], [1.60225056E12, 10.0], [1.60225086E12, 10.0], [1.60225116E12, 9.571428571428571], [1.6022502E12, 10.0], [1.6022505E12, 10.0], [1.6022508E12, 10.0], [1.6022511E12, 10.0], [1.60225014E12, 9.989743589743586], [1.60225044E12, 10.0], [1.60225074E12, 10.0], [1.60225104E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225116E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1977.1447596989028, "minX": 1.0, "maxY": 8708.0, "series": [{"data": [[8.0, 2229.0], [4.0, 8708.0], [2.0, 5189.0], [1.0, 5705.0], [9.0, 2400.0], [10.0, 1977.1447596989028], [5.0, 4149.0], [6.0, 5378.0], [3.0, 5073.0], [7.0, 4927.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990945867848161, 1982.1949528029295]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 732.6666666666666, "minX": 1.60225014E12, "maxY": 2800629.1666666665, "series": [{"data": [[1.60225038E12, 1678251.7333333334], [1.60225068E12, 2297287.2333333334], [1.60225098E12, 2136439.0166666666], [1.60225032E12, 1720664.8833333333], [1.60225062E12, 2252495.85], [1.60225092E12, 1646374.05], [1.60225026E12, 1845828.45], [1.60225056E12, 2170374.35], [1.60225086E12, 1918924.8666666667], [1.60225116E12, 874853.6166666667], [1.6022502E12, 2287066.1], [1.6022505E12, 2386074.533333333], [1.6022508E12, 1951567.25], [1.6022511E12, 2800629.1666666665], [1.60225014E12, 1473389.5666666667], [1.60225044E12, 1655742.35], [1.60225074E12, 2087507.95], [1.60225104E12, 1926199.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60225038E12, 1036.5], [1.60225068E12, 2019.8], [1.60225098E12, 2513.4666666666667], [1.60225032E12, 1612.65], [1.60225062E12, 2416.8166666666666], [1.60225092E12, 1129.9833333333333], [1.60225026E12, 2435.266666666667], [1.60225056E12, 2134.6666666666665], [1.60225086E12, 1760.1166666666666], [1.60225116E12, 732.6666666666666], [1.6022502E12, 2177.7833333333333], [1.6022505E12, 2550.483333333333], [1.6022508E12, 2590.75], [1.6022511E12, 3091.4], [1.60225014E12, 1293.7], [1.60225044E12, 1622.4166666666667], [1.60225074E12, 2076.1833333333334], [1.60225104E12, 1955.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225116E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1390.4301801801803, "minX": 1.60225014E12, "maxY": 3783.9303797468347, "series": [{"data": [[1.60225038E12, 3783.9303797468347], [1.60225068E12, 1932.3441558441555], [1.60225098E12, 1599.573002754821], [1.60225032E12, 2436.024390243901], [1.60225062E12, 1938.224137931034], [1.60225092E12, 3599.911764705881], [1.60225026E12, 1661.922222222223], [1.60225056E12, 1774.4918566775248], [1.60225086E12, 2259.4814814814836], [1.60225116E12, 2549.419047619049], [1.6022502E12, 1765.8678678678682], [1.6022505E12, 1610.216802168021], [1.6022508E12, 1529.0156657963466], [1.6022511E12, 1390.4301801801803], [1.60225014E12, 2198.7897435897426], [1.60225044E12, 2510.4], [1.60225074E12, 1910.9169329073486], [1.60225104E12, 2138.570422535213]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225116E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1387.1711711711694, "minX": 1.60225014E12, "maxY": 3776.7721518987337, "series": [{"data": [[1.60225038E12, 3776.7721518987337], [1.60225068E12, 1928.4415584415585], [1.60225098E12, 1597.088154269973], [1.60225032E12, 2431.674796747969], [1.60225062E12, 1934.3160919540219], [1.60225092E12, 3595.9470588235304], [1.60225026E12, 1658.280555555556], [1.60225056E12, 1770.7687296416943], [1.60225086E12, 2257.0074074074064], [1.60225116E12, 2546.095238095238], [1.6022502E12, 1762.0930930930938], [1.6022505E12, 1606.368563685637], [1.6022508E12, 1526.6161879895571], [1.6022511E12, 1387.1711711711694], [1.60225014E12, 2195.389743589744], [1.60225044E12, 2505.914893617021], [1.60225074E12, 1907.801916932907], [1.60225104E12, 2135.6126760563357]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225116E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60225014E12, "maxY": 0.5487179487179484, "series": [{"data": [[1.60225038E12, 0.05063291139240506], [1.60225068E12, 0.03246753246753249], [1.60225098E12, 0.049586776859504134], [1.60225032E12, 0.040650406504065026], [1.60225062E12, 0.028735632183908073], [1.60225092E12, 0.12941176470588242], [1.60225026E12, 0.05277777777777777], [1.60225056E12, 0.026058631921824102], [1.60225086E12, 0.03333333333333334], [1.60225116E12, 0.0], [1.6022502E12, 0.021021021021021047], [1.6022505E12, 0.024390243902439032], [1.6022508E12, 0.02610966057441251], [1.6022511E12, 0.02027027027027026], [1.60225014E12, 0.5487179487179484], [1.60225044E12, 0.021276595744680826], [1.60225074E12, 0.02236421725239616], [1.60225104E12, 0.017605633802816906]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225116E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.60225014E12, "maxY": 16949.0, "series": [{"data": [[1.60225038E12, 7103.0], [1.60225068E12, 8470.0], [1.60225098E12, 10841.0], [1.60225032E12, 16949.0], [1.60225062E12, 10705.0], [1.60225092E12, 16269.0], [1.60225026E12, 7456.0], [1.60225056E12, 14656.0], [1.60225086E12, 13640.0], [1.60225116E12, 8708.0], [1.6022502E12, 10785.0], [1.6022505E12, 12542.0], [1.6022508E12, 15721.0], [1.6022511E12, 15173.0], [1.60225014E12, 14405.0], [1.60225044E12, 13970.0], [1.60225074E12, 11569.0], [1.60225104E12, 14978.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60225038E12, 178.0], [1.60225068E12, 106.21099771618843], [1.60225098E12, 13.655999479293826], [1.60225032E12, 17.445999882221223], [1.60225062E12, 25.131999917030335], [1.60225092E12, 25.77299971461296], [1.60225026E12, 14.248999913930893], [1.60225056E12, 30.175999412536623], [1.60225086E12, 40.60899799704552], [1.60225116E12, 137.0], [1.6022502E12, 138.02999960184098], [1.6022505E12, 8.0], [1.6022508E12, 13.0], [1.6022511E12, 30.009999787807466], [1.60225014E12, 117.11199962615967], [1.60225044E12, 13.743999662399293], [1.60225074E12, 48.651999850273135], [1.60225104E12, 4.694999796152114]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60225038E12, 178.0], [1.60225068E12, 113.82740041255951], [1.60225098E12, 15.621600208282473], [1.60225032E12, 17.890600047111512], [1.60225062E12, 25.445200033187866], [1.60225092E12, 26.850300114154816], [1.60225026E12, 14.573900034427643], [1.60225056E12, 32.246000146865846], [1.60225086E12, 48.1699008011818], [1.60225116E12, 138.38320028305054], [1.6022502E12, 139.53300015926362], [1.6022505E12, 8.0], [1.6022508E12, 13.0], [1.6022511E12, 30.811000084877016], [1.60225014E12, 118.52320014953614], [1.60225044E12, 15.018400135040284], [1.60225074E12, 49.760200209617615], [1.60225104E12, 5.464500081539153]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60225038E12, 178.0], [1.60225068E12, 111.0004988580942], [1.60225098E12, 14.747999739646911], [1.60225032E12, 17.69299994111061], [1.60225062E12, 25.305999958515166], [1.60225092E12, 26.37149985730648], [1.60225026E12, 14.429499956965447], [1.60225056E12, 31.40799970626831], [1.60225086E12, 44.809498998522756], [1.60225116E12, 137.19599964618683], [1.6022502E12, 138.8649998009205], [1.6022505E12, 8.0], [1.6022508E12, 13.0], [1.6022511E12, 30.454999893903732], [1.60225014E12, 117.89599981307984], [1.60225044E12, 14.451999831199645], [1.60225074E12, 48.965999925136565], [1.60225104E12, 5.122499898076057]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60225038E12, 178.0], [1.60225068E12, 6.0], [1.60225098E12, 11.0], [1.60225032E12, 14.0], [1.60225062E12, 8.0], [1.60225092E12, 22.0], [1.60225026E12, 14.0], [1.60225056E12, 21.0], [1.60225086E12, 24.0], [1.60225116E12, 137.0], [1.6022502E12, 27.0], [1.6022505E12, 6.0], [1.6022508E12, 13.0], [1.6022511E12, 26.0], [1.60225014E12, 111.0], [1.60225044E12, 5.0], [1.60225074E12, 37.0], [1.60225104E12, 3.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60225038E12, 4762.0], [1.60225068E12, 736.5], [1.60225098E12, 532.0], [1.60225032E12, 1004.5], [1.60225062E12, 887.0], [1.60225092E12, 4005.5], [1.60225026E12, 786.5], [1.60225056E12, 526.0], [1.60225086E12, 839.0], [1.60225116E12, 2635.0], [1.6022502E12, 810.0], [1.6022505E12, 542.0], [1.6022508E12, 599.0], [1.6022511E12, 609.0], [1.60225014E12, 898.0], [1.60225044E12, 1205.0], [1.60225074E12, 1043.0], [1.60225104E12, 884.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225116E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 177.0, "minX": 1.0, "maxY": 90091.0, "series": [{"data": [[2.0, 3210.5], [3.0, 3092.5], [4.0, 2580.5], [5.0, 1584.5], [6.0, 870.0], [7.0, 845.0], [8.0, 737.5], [9.0, 564.0], [10.0, 429.0], [11.0, 558.0], [12.0, 472.0], [13.0, 409.0], [14.0, 331.5], [15.0, 248.5], [1.0, 2561.0], [16.0, 266.5], [17.0, 265.0], [18.0, 274.0], [19.0, 294.5], [20.0, 318.5], [22.0, 179.5], [23.0, 252.5], [24.0, 278.0], [26.0, 237.5], [27.0, 263.0], [28.0, 177.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 90091.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 175.5, "minX": 1.0, "maxY": 90090.0, "series": [{"data": [[2.0, 3209.0], [3.0, 3091.0], [4.0, 2578.0], [5.0, 1582.5], [6.0, 867.0], [7.0, 843.0], [8.0, 736.0], [9.0, 563.0], [10.0, 426.0], [11.0, 557.5], [12.0, 469.0], [13.0, 406.0], [14.0, 329.0], [15.0, 247.5], [1.0, 2559.5], [16.0, 265.0], [17.0, 264.0], [18.0, 273.0], [19.0, 290.0], [20.0, 317.0], [22.0, 176.5], [23.0, 248.5], [24.0, 277.5], [26.0, 231.5], [27.0, 261.0], [28.0, 175.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 90090.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.5833333333333333, "minX": 1.60225014E12, "maxY": 7.4, "series": [{"data": [[1.60225038E12, 2.6333333333333333], [1.60225068E12, 5.133333333333334], [1.60225098E12, 6.05], [1.60225032E12, 4.1], [1.60225062E12, 5.8], [1.60225092E12, 2.8333333333333335], [1.60225026E12, 6.0], [1.60225056E12, 5.116666666666666], [1.60225086E12, 4.5], [1.60225116E12, 1.5833333333333333], [1.6022502E12, 5.55], [1.6022505E12, 6.15], [1.6022508E12, 6.383333333333334], [1.6022511E12, 7.4], [1.60225014E12, 3.4166666666666665], [1.60225044E12, 3.9166666666666665], [1.60225074E12, 5.216666666666667], [1.60225104E12, 4.733333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225116E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60225014E12, "maxY": 7.4, "series": [{"data": [[1.60225038E12, 2.6333333333333333], [1.60225068E12, 5.133333333333334], [1.60225098E12, 6.05], [1.60225032E12, 4.1], [1.60225062E12, 5.783333333333333], [1.60225092E12, 2.8333333333333335], [1.60225026E12, 6.0], [1.60225056E12, 5.116666666666666], [1.60225086E12, 4.5], [1.60225116E12, 1.75], [1.6022502E12, 5.55], [1.6022505E12, 6.15], [1.6022508E12, 6.383333333333334], [1.6022511E12, 7.4], [1.60225014E12, 3.25], [1.60225044E12, 3.9166666666666665], [1.60225074E12, 5.216666666666667], [1.60225104E12, 4.733333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60225062E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225116E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60225014E12, "maxY": 7.4, "series": [{"data": [[1.60225038E12, 2.6333333333333333], [1.60225068E12, 5.133333333333334], [1.60225098E12, 6.05], [1.60225032E12, 4.1], [1.60225062E12, 5.783333333333333], [1.60225092E12, 2.8333333333333335], [1.60225026E12, 6.0], [1.60225056E12, 5.116666666666666], [1.60225086E12, 4.5], [1.60225116E12, 1.75], [1.6022502E12, 5.55], [1.6022505E12, 6.15], [1.6022508E12, 6.383333333333334], [1.6022511E12, 7.4], [1.60225014E12, 3.25], [1.60225044E12, 3.9166666666666665], [1.60225074E12, 5.216666666666667], [1.60225104E12, 4.733333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60225062E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225116E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60225014E12, "maxY": 7.4, "series": [{"data": [[1.60225038E12, 2.6333333333333333], [1.60225068E12, 5.133333333333334], [1.60225098E12, 6.05], [1.60225032E12, 4.1], [1.60225062E12, 5.783333333333333], [1.60225092E12, 2.8333333333333335], [1.60225026E12, 6.0], [1.60225056E12, 5.116666666666666], [1.60225086E12, 4.5], [1.60225116E12, 1.75], [1.6022502E12, 5.55], [1.6022505E12, 6.15], [1.6022508E12, 6.383333333333334], [1.6022511E12, 7.4], [1.60225014E12, 3.25], [1.60225044E12, 3.9166666666666665], [1.60225074E12, 5.216666666666667], [1.60225104E12, 4.733333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60225062E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225116E12, "title": "Total Transactions Per Second"}},
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

