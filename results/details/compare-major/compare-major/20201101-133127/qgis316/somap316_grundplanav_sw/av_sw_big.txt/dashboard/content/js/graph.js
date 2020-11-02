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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 6580.0, "series": [{"data": [[0.0, 6.0], [0.1, 7.0], [0.2, 8.0], [0.3, 10.0], [0.4, 11.0], [0.5, 12.0], [0.6, 12.0], [0.7, 13.0], [0.8, 13.0], [0.9, 13.0], [1.0, 13.0], [1.1, 13.0], [1.2, 14.0], [1.3, 14.0], [1.4, 14.0], [1.5, 15.0], [1.6, 15.0], [1.7, 15.0], [1.8, 15.0], [1.9, 16.0], [2.0, 16.0], [2.1, 16.0], [2.2, 17.0], [2.3, 17.0], [2.4, 17.0], [2.5, 17.0], [2.6, 18.0], [2.7, 18.0], [2.8, 18.0], [2.9, 18.0], [3.0, 18.0], [3.1, 19.0], [3.2, 19.0], [3.3, 19.0], [3.4, 19.0], [3.5, 19.0], [3.6, 20.0], [3.7, 20.0], [3.8, 20.0], [3.9, 21.0], [4.0, 21.0], [4.1, 21.0], [4.2, 21.0], [4.3, 21.0], [4.4, 22.0], [4.5, 22.0], [4.6, 22.0], [4.7, 22.0], [4.8, 22.0], [4.9, 22.0], [5.0, 22.0], [5.1, 22.0], [5.2, 22.0], [5.3, 23.0], [5.4, 23.0], [5.5, 23.0], [5.6, 23.0], [5.7, 23.0], [5.8, 23.0], [5.9, 23.0], [6.0, 23.0], [6.1, 24.0], [6.2, 24.0], [6.3, 24.0], [6.4, 25.0], [6.5, 25.0], [6.6, 25.0], [6.7, 25.0], [6.8, 25.0], [6.9, 25.0], [7.0, 26.0], [7.1, 26.0], [7.2, 26.0], [7.3, 26.0], [7.4, 26.0], [7.5, 26.0], [7.6, 27.0], [7.7, 27.0], [7.8, 27.0], [7.9, 27.0], [8.0, 27.0], [8.1, 27.0], [8.2, 27.0], [8.3, 28.0], [8.4, 28.0], [8.5, 28.0], [8.6, 28.0], [8.7, 28.0], [8.8, 29.0], [8.9, 29.0], [9.0, 30.0], [9.1, 30.0], [9.2, 30.0], [9.3, 30.0], [9.4, 30.0], [9.5, 31.0], [9.6, 31.0], [9.7, 31.0], [9.8, 32.0], [9.9, 32.0], [10.0, 32.0], [10.1, 32.0], [10.2, 33.0], [10.3, 33.0], [10.4, 33.0], [10.5, 34.0], [10.6, 34.0], [10.7, 35.0], [10.8, 35.0], [10.9, 36.0], [11.0, 36.0], [11.1, 36.0], [11.2, 37.0], [11.3, 38.0], [11.4, 38.0], [11.5, 39.0], [11.6, 39.0], [11.7, 40.0], [11.8, 40.0], [11.9, 40.0], [12.0, 41.0], [12.1, 41.0], [12.2, 41.0], [12.3, 41.0], [12.4, 42.0], [12.5, 42.0], [12.6, 42.0], [12.7, 43.0], [12.8, 43.0], [12.9, 43.0], [13.0, 44.0], [13.1, 44.0], [13.2, 45.0], [13.3, 45.0], [13.4, 45.0], [13.5, 46.0], [13.6, 46.0], [13.7, 47.0], [13.8, 47.0], [13.9, 47.0], [14.0, 48.0], [14.1, 48.0], [14.2, 49.0], [14.3, 49.0], [14.4, 50.0], [14.5, 50.0], [14.6, 51.0], [14.7, 51.0], [14.8, 52.0], [14.9, 54.0], [15.0, 55.0], [15.1, 56.0], [15.2, 57.0], [15.3, 58.0], [15.4, 59.0], [15.5, 59.0], [15.6, 60.0], [15.7, 61.0], [15.8, 62.0], [15.9, 63.0], [16.0, 65.0], [16.1, 65.0], [16.2, 69.0], [16.3, 73.0], [16.4, 79.0], [16.5, 83.0], [16.6, 86.0], [16.7, 91.0], [16.8, 93.0], [16.9, 96.0], [17.0, 97.0], [17.1, 99.0], [17.2, 101.0], [17.3, 101.0], [17.4, 104.0], [17.5, 105.0], [17.6, 107.0], [17.7, 109.0], [17.8, 110.0], [17.9, 110.0], [18.0, 111.0], [18.1, 111.0], [18.2, 112.0], [18.3, 112.0], [18.4, 113.0], [18.5, 113.0], [18.6, 113.0], [18.7, 113.0], [18.8, 114.0], [18.9, 114.0], [19.0, 114.0], [19.1, 115.0], [19.2, 115.0], [19.3, 115.0], [19.4, 115.0], [19.5, 116.0], [19.6, 116.0], [19.7, 116.0], [19.8, 116.0], [19.9, 116.0], [20.0, 117.0], [20.1, 117.0], [20.2, 118.0], [20.3, 118.0], [20.4, 119.0], [20.5, 119.0], [20.6, 120.0], [20.7, 120.0], [20.8, 121.0], [20.9, 122.0], [21.0, 122.0], [21.1, 123.0], [21.2, 124.0], [21.3, 124.0], [21.4, 125.0], [21.5, 126.0], [21.6, 126.0], [21.7, 127.0], [21.8, 127.0], [21.9, 127.0], [22.0, 128.0], [22.1, 129.0], [22.2, 130.0], [22.3, 130.0], [22.4, 132.0], [22.5, 133.0], [22.6, 133.0], [22.7, 134.0], [22.8, 135.0], [22.9, 136.0], [23.0, 136.0], [23.1, 137.0], [23.2, 138.0], [23.3, 138.0], [23.4, 139.0], [23.5, 139.0], [23.6, 140.0], [23.7, 140.0], [23.8, 141.0], [23.9, 141.0], [24.0, 143.0], [24.1, 143.0], [24.2, 144.0], [24.3, 146.0], [24.4, 147.0], [24.5, 148.0], [24.6, 150.0], [24.7, 152.0], [24.8, 153.0], [24.9, 154.0], [25.0, 155.0], [25.1, 156.0], [25.2, 158.0], [25.3, 161.0], [25.4, 162.0], [25.5, 163.0], [25.6, 164.0], [25.7, 166.0], [25.8, 167.0], [25.9, 168.0], [26.0, 170.0], [26.1, 172.0], [26.2, 172.0], [26.3, 174.0], [26.4, 176.0], [26.5, 178.0], [26.6, 179.0], [26.7, 181.0], [26.8, 182.0], [26.9, 183.0], [27.0, 184.0], [27.1, 186.0], [27.2, 187.0], [27.3, 188.0], [27.4, 190.0], [27.5, 190.0], [27.6, 192.0], [27.7, 193.0], [27.8, 193.0], [27.9, 195.0], [28.0, 196.0], [28.1, 197.0], [28.2, 198.0], [28.3, 200.0], [28.4, 202.0], [28.5, 203.0], [28.6, 205.0], [28.7, 207.0], [28.8, 208.0], [28.9, 210.0], [29.0, 211.0], [29.1, 212.0], [29.2, 213.0], [29.3, 215.0], [29.4, 217.0], [29.5, 218.0], [29.6, 218.0], [29.7, 219.0], [29.8, 219.0], [29.9, 220.0], [30.0, 221.0], [30.1, 221.0], [30.2, 222.0], [30.3, 222.0], [30.4, 223.0], [30.5, 224.0], [30.6, 224.0], [30.7, 224.0], [30.8, 225.0], [30.9, 225.0], [31.0, 226.0], [31.1, 227.0], [31.2, 228.0], [31.3, 229.0], [31.4, 229.0], [31.5, 230.0], [31.6, 231.0], [31.7, 232.0], [31.8, 233.0], [31.9, 234.0], [32.0, 234.0], [32.1, 236.0], [32.2, 237.0], [32.3, 237.0], [32.4, 239.0], [32.5, 240.0], [32.6, 241.0], [32.7, 242.0], [32.8, 242.0], [32.9, 244.0], [33.0, 245.0], [33.1, 246.0], [33.2, 247.0], [33.3, 248.0], [33.4, 249.0], [33.5, 250.0], [33.6, 251.0], [33.7, 254.0], [33.8, 255.0], [33.9, 256.0], [34.0, 257.0], [34.1, 258.0], [34.2, 259.0], [34.3, 260.0], [34.4, 261.0], [34.5, 262.0], [34.6, 263.0], [34.7, 265.0], [34.8, 267.0], [34.9, 268.0], [35.0, 268.0], [35.1, 270.0], [35.2, 272.0], [35.3, 273.0], [35.4, 275.0], [35.5, 277.0], [35.6, 278.0], [35.7, 280.0], [35.8, 281.0], [35.9, 283.0], [36.0, 284.0], [36.1, 284.0], [36.2, 286.0], [36.3, 288.0], [36.4, 289.0], [36.5, 289.0], [36.6, 291.0], [36.7, 292.0], [36.8, 294.0], [36.9, 298.0], [37.0, 301.0], [37.1, 303.0], [37.2, 304.0], [37.3, 305.0], [37.4, 306.0], [37.5, 306.0], [37.6, 308.0], [37.7, 308.0], [37.8, 310.0], [37.9, 311.0], [38.0, 312.0], [38.1, 313.0], [38.2, 316.0], [38.3, 317.0], [38.4, 318.0], [38.5, 321.0], [38.6, 323.0], [38.7, 325.0], [38.8, 326.0], [38.9, 327.0], [39.0, 329.0], [39.1, 330.0], [39.2, 331.0], [39.3, 333.0], [39.4, 336.0], [39.5, 338.0], [39.6, 339.0], [39.7, 342.0], [39.8, 344.0], [39.9, 346.0], [40.0, 347.0], [40.1, 348.0], [40.2, 350.0], [40.3, 352.0], [40.4, 353.0], [40.5, 354.0], [40.6, 357.0], [40.7, 358.0], [40.8, 360.0], [40.9, 361.0], [41.0, 362.0], [41.1, 364.0], [41.2, 367.0], [41.3, 368.0], [41.4, 369.0], [41.5, 371.0], [41.6, 373.0], [41.7, 374.0], [41.8, 376.0], [41.9, 378.0], [42.0, 380.0], [42.1, 381.0], [42.2, 383.0], [42.3, 384.0], [42.4, 385.0], [42.5, 386.0], [42.6, 387.0], [42.7, 391.0], [42.8, 392.0], [42.9, 394.0], [43.0, 396.0], [43.1, 400.0], [43.2, 402.0], [43.3, 403.0], [43.4, 406.0], [43.5, 408.0], [43.6, 412.0], [43.7, 414.0], [43.8, 415.0], [43.9, 416.0], [44.0, 419.0], [44.1, 420.0], [44.2, 421.0], [44.3, 423.0], [44.4, 425.0], [44.5, 426.0], [44.6, 430.0], [44.7, 431.0], [44.8, 434.0], [44.9, 437.0], [45.0, 442.0], [45.1, 444.0], [45.2, 446.0], [45.3, 448.0], [45.4, 450.0], [45.5, 453.0], [45.6, 457.0], [45.7, 458.0], [45.8, 459.0], [45.9, 462.0], [46.0, 463.0], [46.1, 465.0], [46.2, 467.0], [46.3, 468.0], [46.4, 471.0], [46.5, 474.0], [46.6, 476.0], [46.7, 477.0], [46.8, 478.0], [46.9, 480.0], [47.0, 481.0], [47.1, 484.0], [47.2, 486.0], [47.3, 486.0], [47.4, 488.0], [47.5, 489.0], [47.6, 491.0], [47.7, 493.0], [47.8, 496.0], [47.9, 499.0], [48.0, 500.0], [48.1, 502.0], [48.2, 504.0], [48.3, 507.0], [48.4, 510.0], [48.5, 512.0], [48.6, 515.0], [48.7, 517.0], [48.8, 518.0], [48.9, 521.0], [49.0, 523.0], [49.1, 526.0], [49.2, 528.0], [49.3, 532.0], [49.4, 533.0], [49.5, 536.0], [49.6, 538.0], [49.7, 540.0], [49.8, 541.0], [49.9, 545.0], [50.0, 547.0], [50.1, 552.0], [50.2, 553.0], [50.3, 554.0], [50.4, 557.0], [50.5, 560.0], [50.6, 562.0], [50.7, 565.0], [50.8, 568.0], [50.9, 571.0], [51.0, 573.0], [51.1, 575.0], [51.2, 578.0], [51.3, 580.0], [51.4, 584.0], [51.5, 587.0], [51.6, 589.0], [51.7, 592.0], [51.8, 593.0], [51.9, 595.0], [52.0, 596.0], [52.1, 599.0], [52.2, 603.0], [52.3, 605.0], [52.4, 607.0], [52.5, 608.0], [52.6, 610.0], [52.7, 611.0], [52.8, 612.0], [52.9, 614.0], [53.0, 615.0], [53.1, 615.0], [53.2, 617.0], [53.3, 619.0], [53.4, 620.0], [53.5, 621.0], [53.6, 623.0], [53.7, 625.0], [53.8, 626.0], [53.9, 627.0], [54.0, 628.0], [54.1, 631.0], [54.2, 633.0], [54.3, 635.0], [54.4, 638.0], [54.5, 640.0], [54.6, 641.0], [54.7, 644.0], [54.8, 648.0], [54.9, 649.0], [55.0, 653.0], [55.1, 655.0], [55.2, 657.0], [55.3, 659.0], [55.4, 662.0], [55.5, 663.0], [55.6, 665.0], [55.7, 666.0], [55.8, 667.0], [55.9, 668.0], [56.0, 669.0], [56.1, 671.0], [56.2, 673.0], [56.3, 674.0], [56.4, 677.0], [56.5, 678.0], [56.6, 681.0], [56.7, 682.0], [56.8, 684.0], [56.9, 688.0], [57.0, 689.0], [57.1, 690.0], [57.2, 693.0], [57.3, 695.0], [57.4, 698.0], [57.5, 701.0], [57.6, 702.0], [57.7, 706.0], [57.8, 707.0], [57.9, 707.0], [58.0, 711.0], [58.1, 714.0], [58.2, 715.0], [58.3, 718.0], [58.4, 720.0], [58.5, 722.0], [58.6, 724.0], [58.7, 725.0], [58.8, 728.0], [58.9, 731.0], [59.0, 734.0], [59.1, 735.0], [59.2, 736.0], [59.3, 740.0], [59.4, 742.0], [59.5, 744.0], [59.6, 746.0], [59.7, 747.0], [59.8, 748.0], [59.9, 749.0], [60.0, 754.0], [60.1, 758.0], [60.2, 761.0], [60.3, 761.0], [60.4, 762.0], [60.5, 763.0], [60.6, 765.0], [60.7, 767.0], [60.8, 769.0], [60.9, 772.0], [61.0, 773.0], [61.1, 775.0], [61.2, 777.0], [61.3, 778.0], [61.4, 781.0], [61.5, 782.0], [61.6, 785.0], [61.7, 788.0], [61.8, 789.0], [61.9, 791.0], [62.0, 795.0], [62.1, 796.0], [62.2, 799.0], [62.3, 802.0], [62.4, 804.0], [62.5, 807.0], [62.6, 810.0], [62.7, 811.0], [62.8, 814.0], [62.9, 816.0], [63.0, 818.0], [63.1, 821.0], [63.2, 826.0], [63.3, 829.0], [63.4, 831.0], [63.5, 834.0], [63.6, 837.0], [63.7, 839.0], [63.8, 840.0], [63.9, 844.0], [64.0, 846.0], [64.1, 849.0], [64.2, 851.0], [64.3, 855.0], [64.4, 857.0], [64.5, 861.0], [64.6, 863.0], [64.7, 866.0], [64.8, 868.0], [64.9, 871.0], [65.0, 873.0], [65.1, 876.0], [65.2, 880.0], [65.3, 883.0], [65.4, 887.0], [65.5, 889.0], [65.6, 891.0], [65.7, 892.0], [65.8, 896.0], [65.9, 899.0], [66.0, 900.0], [66.1, 903.0], [66.2, 905.0], [66.3, 909.0], [66.4, 913.0], [66.5, 914.0], [66.6, 916.0], [66.7, 919.0], [66.8, 920.0], [66.9, 921.0], [67.0, 924.0], [67.1, 927.0], [67.2, 927.0], [67.3, 929.0], [67.4, 931.0], [67.5, 933.0], [67.6, 936.0], [67.7, 938.0], [67.8, 941.0], [67.9, 944.0], [68.0, 946.0], [68.1, 949.0], [68.2, 950.0], [68.3, 954.0], [68.4, 956.0], [68.5, 960.0], [68.6, 962.0], [68.7, 964.0], [68.8, 964.0], [68.9, 967.0], [69.0, 972.0], [69.1, 974.0], [69.2, 976.0], [69.3, 978.0], [69.4, 980.0], [69.5, 984.0], [69.6, 986.0], [69.7, 988.0], [69.8, 990.0], [69.9, 991.0], [70.0, 996.0], [70.1, 999.0], [70.2, 1002.0], [70.3, 1005.0], [70.4, 1007.0], [70.5, 1008.0], [70.6, 1012.0], [70.7, 1015.0], [70.8, 1016.0], [70.9, 1018.0], [71.0, 1019.0], [71.1, 1021.0], [71.2, 1022.0], [71.3, 1025.0], [71.4, 1026.0], [71.5, 1027.0], [71.6, 1029.0], [71.7, 1031.0], [71.8, 1032.0], [71.9, 1034.0], [72.0, 1036.0], [72.1, 1037.0], [72.2, 1040.0], [72.3, 1042.0], [72.4, 1044.0], [72.5, 1046.0], [72.6, 1047.0], [72.7, 1048.0], [72.8, 1049.0], [72.9, 1052.0], [73.0, 1055.0], [73.1, 1058.0], [73.2, 1061.0], [73.3, 1063.0], [73.4, 1067.0], [73.5, 1067.0], [73.6, 1069.0], [73.7, 1071.0], [73.8, 1072.0], [73.9, 1074.0], [74.0, 1076.0], [74.1, 1079.0], [74.2, 1079.0], [74.3, 1082.0], [74.4, 1084.0], [74.5, 1088.0], [74.6, 1089.0], [74.7, 1091.0], [74.8, 1094.0], [74.9, 1095.0], [75.0, 1096.0], [75.1, 1100.0], [75.2, 1101.0], [75.3, 1104.0], [75.4, 1105.0], [75.5, 1107.0], [75.6, 1109.0], [75.7, 1111.0], [75.8, 1112.0], [75.9, 1114.0], [76.0, 1117.0], [76.1, 1119.0], [76.2, 1121.0], [76.3, 1123.0], [76.4, 1124.0], [76.5, 1127.0], [76.6, 1129.0], [76.7, 1130.0], [76.8, 1132.0], [76.9, 1136.0], [77.0, 1139.0], [77.1, 1140.0], [77.2, 1142.0], [77.3, 1143.0], [77.4, 1145.0], [77.5, 1147.0], [77.6, 1149.0], [77.7, 1151.0], [77.8, 1154.0], [77.9, 1156.0], [78.0, 1158.0], [78.1, 1159.0], [78.2, 1162.0], [78.3, 1163.0], [78.4, 1165.0], [78.5, 1168.0], [78.6, 1169.0], [78.7, 1172.0], [78.8, 1174.0], [78.9, 1177.0], [79.0, 1180.0], [79.1, 1182.0], [79.2, 1185.0], [79.3, 1187.0], [79.4, 1190.0], [79.5, 1192.0], [79.6, 1194.0], [79.7, 1198.0], [79.8, 1202.0], [79.9, 1205.0], [80.0, 1206.0], [80.1, 1209.0], [80.2, 1212.0], [80.3, 1216.0], [80.4, 1219.0], [80.5, 1221.0], [80.6, 1226.0], [80.7, 1227.0], [80.8, 1230.0], [80.9, 1231.0], [81.0, 1233.0], [81.1, 1234.0], [81.2, 1236.0], [81.3, 1237.0], [81.4, 1241.0], [81.5, 1243.0], [81.6, 1245.0], [81.7, 1249.0], [81.8, 1250.0], [81.9, 1251.0], [82.0, 1253.0], [82.1, 1256.0], [82.2, 1257.0], [82.3, 1260.0], [82.4, 1263.0], [82.5, 1266.0], [82.6, 1269.0], [82.7, 1273.0], [82.8, 1276.0], [82.9, 1278.0], [83.0, 1279.0], [83.1, 1282.0], [83.2, 1284.0], [83.3, 1286.0], [83.4, 1286.0], [83.5, 1288.0], [83.6, 1290.0], [83.7, 1294.0], [83.8, 1297.0], [83.9, 1299.0], [84.0, 1304.0], [84.1, 1306.0], [84.2, 1307.0], [84.3, 1309.0], [84.4, 1310.0], [84.5, 1311.0], [84.6, 1315.0], [84.7, 1320.0], [84.8, 1324.0], [84.9, 1326.0], [85.0, 1328.0], [85.1, 1331.0], [85.2, 1334.0], [85.3, 1339.0], [85.4, 1342.0], [85.5, 1343.0], [85.6, 1345.0], [85.7, 1352.0], [85.8, 1355.0], [85.9, 1357.0], [86.0, 1361.0], [86.1, 1365.0], [86.2, 1367.0], [86.3, 1369.0], [86.4, 1370.0], [86.5, 1373.0], [86.6, 1377.0], [86.7, 1378.0], [86.8, 1380.0], [86.9, 1382.0], [87.0, 1386.0], [87.1, 1394.0], [87.2, 1396.0], [87.3, 1402.0], [87.4, 1410.0], [87.5, 1418.0], [87.6, 1421.0], [87.7, 1424.0], [87.8, 1427.0], [87.9, 1434.0], [88.0, 1438.0], [88.1, 1442.0], [88.2, 1448.0], [88.3, 1452.0], [88.4, 1458.0], [88.5, 1465.0], [88.6, 1470.0], [88.7, 1478.0], [88.8, 1485.0], [88.9, 1496.0], [89.0, 1501.0], [89.1, 1508.0], [89.2, 1511.0], [89.3, 1521.0], [89.4, 1524.0], [89.5, 1526.0], [89.6, 1532.0], [89.7, 1541.0], [89.8, 1550.0], [89.9, 1555.0], [90.0, 1558.0], [90.1, 1564.0], [90.2, 1567.0], [90.3, 1574.0], [90.4, 1584.0], [90.5, 1589.0], [90.6, 1595.0], [90.7, 1599.0], [90.8, 1605.0], [90.9, 1621.0], [91.0, 1624.0], [91.1, 1627.0], [91.2, 1633.0], [91.3, 1643.0], [91.4, 1648.0], [91.5, 1659.0], [91.6, 1666.0], [91.7, 1671.0], [91.8, 1675.0], [91.9, 1679.0], [92.0, 1688.0], [92.1, 1700.0], [92.2, 1713.0], [92.3, 1721.0], [92.4, 1736.0], [92.5, 1742.0], [92.6, 1746.0], [92.7, 1752.0], [92.8, 1757.0], [92.9, 1765.0], [93.0, 1779.0], [93.1, 1783.0], [93.2, 1793.0], [93.3, 1801.0], [93.4, 1819.0], [93.5, 1833.0], [93.6, 1840.0], [93.7, 1868.0], [93.8, 1884.0], [93.9, 1891.0], [94.0, 1903.0], [94.1, 1916.0], [94.2, 1930.0], [94.3, 1950.0], [94.4, 1959.0], [94.5, 1970.0], [94.6, 1981.0], [94.7, 1989.0], [94.8, 1998.0], [94.9, 2008.0], [95.0, 2013.0], [95.1, 2017.0], [95.2, 2039.0], [95.3, 2053.0], [95.4, 2056.0], [95.5, 2061.0], [95.6, 2073.0], [95.7, 2080.0], [95.8, 2086.0], [95.9, 2105.0], [96.0, 2123.0], [96.1, 2134.0], [96.2, 2143.0], [96.3, 2152.0], [96.4, 2181.0], [96.5, 2192.0], [96.6, 2206.0], [96.7, 2222.0], [96.8, 2251.0], [96.9, 2275.0], [97.0, 2301.0], [97.1, 2322.0], [97.2, 2354.0], [97.3, 2361.0], [97.4, 2398.0], [97.5, 2419.0], [97.6, 2468.0], [97.7, 2480.0], [97.8, 2497.0], [97.9, 2519.0], [98.0, 2572.0], [98.1, 2603.0], [98.2, 2620.0], [98.3, 2690.0], [98.4, 2720.0], [98.5, 2764.0], [98.6, 2800.0], [98.7, 2846.0], [98.8, 2907.0], [98.9, 2970.0], [99.0, 3089.0], [99.1, 3176.0], [99.2, 3264.0], [99.3, 3368.0], [99.4, 3455.0], [99.5, 3576.0], [99.6, 4198.0], [99.7, 4471.0], [99.8, 4801.0], [99.9, 5328.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 888.0, "series": [{"data": [[0.0, 888.0], [600.0, 278.0], [700.0, 248.0], [800.0, 193.0], [900.0, 218.0], [1000.0, 255.0], [1100.0, 242.0], [1200.0, 217.0], [1300.0, 173.0], [1400.0, 89.0], [1500.0, 91.0], [1600.0, 71.0], [1700.0, 63.0], [1800.0, 34.0], [1900.0, 47.0], [2000.0, 54.0], [2100.0, 33.0], [2300.0, 22.0], [2200.0, 24.0], [2400.0, 20.0], [2500.0, 15.0], [2600.0, 12.0], [2700.0, 14.0], [2800.0, 10.0], [2900.0, 7.0], [3000.0, 6.0], [3100.0, 5.0], [3200.0, 6.0], [3300.0, 6.0], [3400.0, 5.0], [3500.0, 3.0], [3600.0, 2.0], [3700.0, 1.0], [4100.0, 2.0], [4200.0, 2.0], [4300.0, 1.0], [4600.0, 2.0], [4400.0, 2.0], [4500.0, 2.0], [4800.0, 2.0], [4900.0, 1.0], [5100.0, 1.0], [5000.0, 1.0], [5300.0, 1.0], [5400.0, 1.0], [5500.0, 1.0], [5800.0, 1.0], [6000.0, 1.0], [6500.0, 1.0], [100.0, 580.0], [200.0, 449.0], [300.0, 319.0], [400.0, 255.0], [500.0, 213.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 571.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2494.0, "series": [{"data": [[0.0, 2494.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2125.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 571.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.598214285714285, "minX": 1.60424016E12, "maxY": 10.0, "series": [{"data": [[1.60424052E12, 10.0], [1.60424022E12, 10.0], [1.60424016E12, 10.0], [1.60424034E12, 10.0], [1.60424028E12, 10.0], [1.60424046E12, 10.0], [1.6042404E12, 10.0], [1.60424058E12, 9.598214285714285]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60424058E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 218.0, "minX": 1.0, "maxY": 3569.0, "series": [{"data": [[8.0, 218.0], [4.0, 899.0], [2.0, 783.0], [1.0, 3569.0], [9.0, 876.0], [10.0, 715.6205365759497], [5.0, 224.0], [6.0, 900.0], [3.0, 1045.0], [7.0, 590.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 716.1337186897872]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7.683333333333334, "minX": 1.60424016E12, "maxY": 4564293.416666667, "series": [{"data": [[1.60424052E12, 3876777.933333333], [1.60424022E12, 3453106.566666667], [1.60424016E12, 143.38333333333333], [1.60424034E12, 3895866.2333333334], [1.60424028E12, 4564293.416666667], [1.60424046E12, 4071753.8], [1.6042404E12, 3602244.6], [1.60424058E12, 510833.93333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60424052E12, 6868.65], [1.60424022E12, 5099.9], [1.60424016E12, 7.683333333333334], [1.60424034E12, 6139.6], [1.60424028E12, 7530.85], [1.60424046E12, 6817.633333333333], [1.6042404E12, 5265.333333333333], [1.60424058E12, 847.6833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60424058E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 593.9435084241823, "minX": 1.60424016E12, "maxY": 2081.0, "series": [{"data": [[1.60424052E12, 664.3693495038592], [1.60424022E12, 862.734375], [1.60424016E12, 2081.0], [1.60424034E12, 734.9088669950744], [1.60424028E12, 593.9435084241823], [1.60424046E12, 653.8815217391304], [1.6042404E12, 823.6193103448271], [1.60424058E12, 981.9196428571427]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60424058E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 591.8463825569876, "minX": 1.60424016E12, "maxY": 2077.0, "series": [{"data": [[1.60424052E12, 662.9073869900776], [1.60424022E12, 860.6321022727271], [1.60424016E12, 2077.0], [1.60424034E12, 732.8485221674874], [1.60424028E12, 591.8463825569876], [1.60424046E12, 652.3804347826099], [1.6042404E12, 822.0979310344827], [1.60424058E12, 980.1785714285711]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60424058E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006157635467980296, "minX": 1.60424016E12, "maxY": 34.0, "series": [{"data": [[1.60424052E12, 0.009922822491730987], [1.60424022E12, 0.07812499999999999], [1.60424016E12, 34.0], [1.60424034E12, 0.006157635467980296], [1.60424028E12, 0.017839444995044612], [1.60424046E12, 0.0184782608695652], [1.6042404E12, 0.0193103448275862], [1.60424058E12, 0.026785714285714288]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60424058E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60424016E12, "maxY": 6580.0, "series": [{"data": [[1.60424052E12, 3489.0], [1.60424022E12, 5443.0], [1.60424016E12, 2081.0], [1.60424034E12, 5117.0], [1.60424028E12, 4234.0], [1.60424046E12, 3481.0], [1.6042404E12, 6580.0], [1.60424058E12, 3658.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60424052E12, 12.0], [1.60424022E12, 17.0], [1.60424016E12, 2081.0], [1.60424034E12, 13.0], [1.60424028E12, 13.0], [1.60424046E12, 12.0], [1.6042404E12, 18.0], [1.60424058E12, 26.223998060226435]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60424052E12, 12.0], [1.60424022E12, 17.0], [1.60424016E12, 2081.0], [1.60424034E12, 13.0], [1.60424028E12, 13.0], [1.60424046E12, 12.0], [1.6042404E12, 18.0], [1.60424058E12, 33.54640077590942]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60424052E12, 12.0], [1.60424022E12, 17.0], [1.60424016E12, 2081.0], [1.60424034E12, 13.0], [1.60424028E12, 13.0], [1.60424046E12, 12.0], [1.6042404E12, 18.0], [1.60424058E12, 30.291999030113214]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60424052E12, 6.0], [1.60424022E12, 12.0], [1.60424016E12, 2081.0], [1.60424034E12, 12.0], [1.60424028E12, 6.0], [1.60424046E12, 7.0], [1.6042404E12, 6.0], [1.60424058E12, 25.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60424052E12, 549.0], [1.60424022E12, 655.0], [1.60424016E12, 2081.0], [1.60424034E12, 665.0], [1.60424028E12, 273.0], [1.60424046E12, 383.5], [1.6042404E12, 635.0], [1.60424058E12, 876.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60424058E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 26.0, "minX": 1.0, "maxY": 2081.0, "series": [{"data": [[33.0, 66.5], [32.0, 28.0], [35.0, 65.0], [34.0, 33.0], [39.0, 50.5], [38.0, 43.0], [43.0, 41.0], [49.0, 60.0], [51.0, 57.0], [54.0, 41.5], [63.0, 27.0], [4.0, 1477.0], [75.0, 45.0], [76.0, 44.5], [5.0, 1342.0], [6.0, 1033.0], [7.0, 1040.0], [8.0, 1104.0], [9.0, 933.0], [10.0, 966.5], [11.0, 827.0], [12.0, 769.0], [13.0, 649.0], [14.0, 661.5], [15.0, 594.0], [1.0, 2081.0], [16.0, 452.0], [17.0, 510.5], [18.0, 363.5], [19.0, 316.5], [20.0, 400.5], [21.0, 353.5], [22.0, 316.5], [23.0, 329.0], [24.0, 490.0], [25.0, 248.0], [26.0, 391.0], [27.0, 151.0], [29.0, 179.5], [30.0, 234.0], [31.0, 26.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 76.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 26.0, "minX": 1.0, "maxY": 2077.0, "series": [{"data": [[33.0, 66.5], [32.0, 27.5], [35.0, 64.0], [34.0, 33.0], [39.0, 49.5], [38.0, 42.0], [43.0, 41.0], [49.0, 60.0], [51.0, 57.0], [54.0, 41.5], [63.0, 26.0], [4.0, 1474.5], [75.0, 45.0], [76.0, 44.0], [5.0, 1341.0], [6.0, 1032.5], [7.0, 1035.0], [8.0, 1100.0], [9.0, 931.0], [10.0, 964.0], [11.0, 825.0], [12.0, 768.0], [13.0, 647.5], [14.0, 658.5], [15.0, 593.0], [1.0, 2077.0], [16.0, 449.5], [17.0, 510.0], [18.0, 363.0], [19.0, 316.0], [20.0, 399.5], [21.0, 351.5], [22.0, 316.5], [23.0, 327.0], [24.0, 490.0], [25.0, 248.0], [26.0, 389.0], [27.0, 150.0], [29.0, 178.0], [30.0, 234.0], [31.0, 26.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 76.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.60424016E12, "maxY": 16.816666666666666, "series": [{"data": [[1.60424052E12, 15.116666666666667], [1.60424022E12, 11.733333333333333], [1.60424016E12, 0.18333333333333332], [1.60424034E12, 13.533333333333333], [1.60424028E12, 16.816666666666666], [1.60424046E12, 15.333333333333334], [1.6042404E12, 12.083333333333334], [1.60424058E12, 1.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60424058E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60424016E12, "maxY": 16.816666666666666, "series": [{"data": [[1.60424052E12, 15.116666666666667], [1.60424022E12, 11.733333333333333], [1.60424016E12, 0.016666666666666666], [1.60424034E12, 13.533333333333333], [1.60424028E12, 16.816666666666666], [1.60424046E12, 15.333333333333334], [1.6042404E12, 12.083333333333334], [1.60424058E12, 1.8666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60424058E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60424016E12, "maxY": 16.816666666666666, "series": [{"data": [[1.60424052E12, 15.116666666666667], [1.60424022E12, 11.733333333333333], [1.60424016E12, 0.016666666666666666], [1.60424034E12, 13.533333333333333], [1.60424028E12, 16.816666666666666], [1.60424046E12, 15.333333333333334], [1.6042404E12, 12.083333333333334], [1.60424058E12, 1.8666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60424058E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60424016E12, "maxY": 16.816666666666666, "series": [{"data": [[1.60424052E12, 15.116666666666667], [1.60424022E12, 11.733333333333333], [1.60424016E12, 0.016666666666666666], [1.60424034E12, 13.533333333333333], [1.60424028E12, 16.816666666666666], [1.60424046E12, 15.333333333333334], [1.6042404E12, 12.083333333333334], [1.60424058E12, 1.8666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60424058E12, "title": "Total Transactions Per Second"}},
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

