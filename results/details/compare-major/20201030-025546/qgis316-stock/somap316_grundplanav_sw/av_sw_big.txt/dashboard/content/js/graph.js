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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 6200.0, "series": [{"data": [[0.0, 6.0], [0.1, 7.0], [0.2, 8.0], [0.3, 8.0], [0.4, 11.0], [0.5, 12.0], [0.6, 13.0], [0.7, 13.0], [0.8, 13.0], [0.9, 14.0], [1.0, 14.0], [1.1, 14.0], [1.2, 14.0], [1.3, 14.0], [1.4, 15.0], [1.5, 15.0], [1.6, 16.0], [1.7, 16.0], [1.8, 17.0], [1.9, 17.0], [2.0, 17.0], [2.1, 18.0], [2.2, 18.0], [2.3, 18.0], [2.4, 18.0], [2.5, 18.0], [2.6, 18.0], [2.7, 19.0], [2.8, 19.0], [2.9, 19.0], [3.0, 19.0], [3.1, 19.0], [3.2, 20.0], [3.3, 20.0], [3.4, 20.0], [3.5, 20.0], [3.6, 20.0], [3.7, 21.0], [3.8, 21.0], [3.9, 21.0], [4.0, 21.0], [4.1, 21.0], [4.2, 21.0], [4.3, 22.0], [4.4, 22.0], [4.5, 22.0], [4.6, 22.0], [4.7, 22.0], [4.8, 22.0], [4.9, 22.0], [5.0, 23.0], [5.1, 23.0], [5.2, 23.0], [5.3, 23.0], [5.4, 23.0], [5.5, 23.0], [5.6, 23.0], [5.7, 23.0], [5.8, 23.0], [5.9, 24.0], [6.0, 24.0], [6.1, 24.0], [6.2, 24.0], [6.3, 24.0], [6.4, 24.0], [6.5, 25.0], [6.6, 25.0], [6.7, 25.0], [6.8, 25.0], [6.9, 25.0], [7.0, 25.0], [7.1, 25.0], [7.2, 26.0], [7.3, 26.0], [7.4, 26.0], [7.5, 26.0], [7.6, 26.0], [7.7, 26.0], [7.8, 27.0], [7.9, 27.0], [8.0, 27.0], [8.1, 27.0], [8.2, 27.0], [8.3, 28.0], [8.4, 28.0], [8.5, 28.0], [8.6, 28.0], [8.7, 29.0], [8.8, 29.0], [8.9, 29.0], [9.0, 29.0], [9.1, 29.0], [9.2, 29.0], [9.3, 30.0], [9.4, 30.0], [9.5, 30.0], [9.6, 31.0], [9.7, 31.0], [9.8, 31.0], [9.9, 32.0], [10.0, 32.0], [10.1, 32.0], [10.2, 33.0], [10.3, 33.0], [10.4, 33.0], [10.5, 34.0], [10.6, 34.0], [10.7, 35.0], [10.8, 35.0], [10.9, 36.0], [11.0, 36.0], [11.1, 37.0], [11.2, 37.0], [11.3, 38.0], [11.4, 38.0], [11.5, 38.0], [11.6, 39.0], [11.7, 39.0], [11.8, 39.0], [11.9, 39.0], [12.0, 39.0], [12.1, 40.0], [12.2, 40.0], [12.3, 41.0], [12.4, 41.0], [12.5, 41.0], [12.6, 41.0], [12.7, 42.0], [12.8, 42.0], [12.9, 42.0], [13.0, 42.0], [13.1, 43.0], [13.2, 43.0], [13.3, 43.0], [13.4, 44.0], [13.5, 44.0], [13.6, 45.0], [13.7, 45.0], [13.8, 45.0], [13.9, 46.0], [14.0, 46.0], [14.1, 47.0], [14.2, 47.0], [14.3, 48.0], [14.4, 48.0], [14.5, 49.0], [14.6, 50.0], [14.7, 50.0], [14.8, 52.0], [14.9, 53.0], [15.0, 55.0], [15.1, 57.0], [15.2, 58.0], [15.3, 60.0], [15.4, 60.0], [15.5, 61.0], [15.6, 62.0], [15.7, 64.0], [15.8, 66.0], [15.9, 67.0], [16.0, 69.0], [16.1, 71.0], [16.2, 73.0], [16.3, 80.0], [16.4, 86.0], [16.5, 90.0], [16.6, 93.0], [16.7, 95.0], [16.8, 95.0], [16.9, 98.0], [17.0, 99.0], [17.1, 100.0], [17.2, 101.0], [17.3, 101.0], [17.4, 102.0], [17.5, 105.0], [17.6, 106.0], [17.7, 106.0], [17.8, 109.0], [17.9, 110.0], [18.0, 111.0], [18.1, 111.0], [18.2, 111.0], [18.3, 112.0], [18.4, 112.0], [18.5, 113.0], [18.6, 113.0], [18.7, 114.0], [18.8, 114.0], [18.9, 114.0], [19.0, 115.0], [19.1, 115.0], [19.2, 116.0], [19.3, 116.0], [19.4, 116.0], [19.5, 117.0], [19.6, 117.0], [19.7, 117.0], [19.8, 117.0], [19.9, 118.0], [20.0, 118.0], [20.1, 118.0], [20.2, 119.0], [20.3, 119.0], [20.4, 120.0], [20.5, 120.0], [20.6, 120.0], [20.7, 121.0], [20.8, 121.0], [20.9, 122.0], [21.0, 122.0], [21.1, 123.0], [21.2, 124.0], [21.3, 124.0], [21.4, 125.0], [21.5, 126.0], [21.6, 127.0], [21.7, 127.0], [21.8, 127.0], [21.9, 128.0], [22.0, 128.0], [22.1, 129.0], [22.2, 130.0], [22.3, 130.0], [22.4, 131.0], [22.5, 131.0], [22.6, 132.0], [22.7, 133.0], [22.8, 134.0], [22.9, 135.0], [23.0, 135.0], [23.1, 136.0], [23.2, 137.0], [23.3, 138.0], [23.4, 139.0], [23.5, 140.0], [23.6, 141.0], [23.7, 143.0], [23.8, 144.0], [23.9, 146.0], [24.0, 147.0], [24.1, 148.0], [24.2, 149.0], [24.3, 150.0], [24.4, 151.0], [24.5, 152.0], [24.6, 152.0], [24.7, 154.0], [24.8, 154.0], [24.9, 155.0], [25.0, 156.0], [25.1, 158.0], [25.2, 158.0], [25.3, 161.0], [25.4, 163.0], [25.5, 164.0], [25.6, 165.0], [25.7, 167.0], [25.8, 168.0], [25.9, 170.0], [26.0, 172.0], [26.1, 173.0], [26.2, 175.0], [26.3, 177.0], [26.4, 180.0], [26.5, 181.0], [26.6, 182.0], [26.7, 183.0], [26.8, 185.0], [26.9, 187.0], [27.0, 188.0], [27.1, 189.0], [27.2, 191.0], [27.3, 192.0], [27.4, 194.0], [27.5, 196.0], [27.6, 196.0], [27.7, 197.0], [27.8, 199.0], [27.9, 200.0], [28.0, 202.0], [28.1, 202.0], [28.2, 204.0], [28.3, 205.0], [28.4, 206.0], [28.5, 206.0], [28.6, 208.0], [28.7, 209.0], [28.8, 210.0], [28.9, 212.0], [29.0, 213.0], [29.1, 214.0], [29.2, 215.0], [29.3, 216.0], [29.4, 217.0], [29.5, 218.0], [29.6, 219.0], [29.7, 219.0], [29.8, 219.0], [29.9, 220.0], [30.0, 220.0], [30.1, 221.0], [30.2, 222.0], [30.3, 222.0], [30.4, 224.0], [30.5, 224.0], [30.6, 226.0], [30.7, 226.0], [30.8, 227.0], [30.9, 227.0], [31.0, 228.0], [31.1, 229.0], [31.2, 229.0], [31.3, 230.0], [31.4, 230.0], [31.5, 231.0], [31.6, 232.0], [31.7, 233.0], [31.8, 234.0], [31.9, 235.0], [32.0, 236.0], [32.1, 237.0], [32.2, 237.0], [32.3, 238.0], [32.4, 238.0], [32.5, 239.0], [32.6, 241.0], [32.7, 241.0], [32.8, 242.0], [32.9, 243.0], [33.0, 244.0], [33.1, 245.0], [33.2, 246.0], [33.3, 247.0], [33.4, 248.0], [33.5, 249.0], [33.6, 250.0], [33.7, 251.0], [33.8, 252.0], [33.9, 253.0], [34.0, 254.0], [34.1, 256.0], [34.2, 256.0], [34.3, 257.0], [34.4, 258.0], [34.5, 259.0], [34.6, 260.0], [34.7, 261.0], [34.8, 262.0], [34.9, 262.0], [35.0, 263.0], [35.1, 264.0], [35.2, 265.0], [35.3, 266.0], [35.4, 268.0], [35.5, 269.0], [35.6, 270.0], [35.7, 271.0], [35.8, 272.0], [35.9, 274.0], [36.0, 275.0], [36.1, 277.0], [36.2, 278.0], [36.3, 279.0], [36.4, 281.0], [36.5, 281.0], [36.6, 282.0], [36.7, 284.0], [36.8, 285.0], [36.9, 286.0], [37.0, 287.0], [37.1, 288.0], [37.2, 289.0], [37.3, 290.0], [37.4, 292.0], [37.5, 293.0], [37.6, 295.0], [37.7, 298.0], [37.8, 299.0], [37.9, 300.0], [38.0, 304.0], [38.1, 306.0], [38.2, 307.0], [38.3, 307.0], [38.4, 308.0], [38.5, 311.0], [38.6, 313.0], [38.7, 315.0], [38.8, 317.0], [38.9, 321.0], [39.0, 323.0], [39.1, 326.0], [39.2, 328.0], [39.3, 329.0], [39.4, 332.0], [39.5, 333.0], [39.6, 334.0], [39.7, 337.0], [39.8, 339.0], [39.9, 341.0], [40.0, 342.0], [40.1, 345.0], [40.2, 347.0], [40.3, 349.0], [40.4, 350.0], [40.5, 353.0], [40.6, 354.0], [40.7, 356.0], [40.8, 357.0], [40.9, 359.0], [41.0, 360.0], [41.1, 362.0], [41.2, 363.0], [41.3, 365.0], [41.4, 366.0], [41.5, 368.0], [41.6, 370.0], [41.7, 372.0], [41.8, 374.0], [41.9, 375.0], [42.0, 376.0], [42.1, 378.0], [42.2, 381.0], [42.3, 384.0], [42.4, 385.0], [42.5, 388.0], [42.6, 388.0], [42.7, 390.0], [42.8, 393.0], [42.9, 394.0], [43.0, 396.0], [43.1, 397.0], [43.2, 399.0], [43.3, 401.0], [43.4, 402.0], [43.5, 406.0], [43.6, 409.0], [43.7, 413.0], [43.8, 414.0], [43.9, 415.0], [44.0, 417.0], [44.1, 418.0], [44.2, 419.0], [44.3, 422.0], [44.4, 424.0], [44.5, 425.0], [44.6, 428.0], [44.7, 431.0], [44.8, 434.0], [44.9, 437.0], [45.0, 439.0], [45.1, 441.0], [45.2, 443.0], [45.3, 447.0], [45.4, 449.0], [45.5, 451.0], [45.6, 452.0], [45.7, 453.0], [45.8, 455.0], [45.9, 456.0], [46.0, 458.0], [46.1, 461.0], [46.2, 463.0], [46.3, 465.0], [46.4, 466.0], [46.5, 469.0], [46.6, 471.0], [46.7, 473.0], [46.8, 475.0], [46.9, 478.0], [47.0, 480.0], [47.1, 484.0], [47.2, 486.0], [47.3, 487.0], [47.4, 489.0], [47.5, 490.0], [47.6, 491.0], [47.7, 496.0], [47.8, 500.0], [47.9, 502.0], [48.0, 503.0], [48.1, 506.0], [48.2, 508.0], [48.3, 509.0], [48.4, 510.0], [48.5, 511.0], [48.6, 516.0], [48.7, 517.0], [48.8, 521.0], [48.9, 524.0], [49.0, 526.0], [49.1, 528.0], [49.2, 530.0], [49.3, 532.0], [49.4, 534.0], [49.5, 536.0], [49.6, 539.0], [49.7, 540.0], [49.8, 542.0], [49.9, 545.0], [50.0, 548.0], [50.1, 552.0], [50.2, 556.0], [50.3, 558.0], [50.4, 559.0], [50.5, 564.0], [50.6, 564.0], [50.7, 566.0], [50.8, 569.0], [50.9, 572.0], [51.0, 576.0], [51.1, 577.0], [51.2, 579.0], [51.3, 582.0], [51.4, 584.0], [51.5, 586.0], [51.6, 589.0], [51.7, 590.0], [51.8, 592.0], [51.9, 594.0], [52.0, 597.0], [52.1, 600.0], [52.2, 601.0], [52.3, 603.0], [52.4, 606.0], [52.5, 609.0], [52.6, 611.0], [52.7, 614.0], [52.8, 616.0], [52.9, 617.0], [53.0, 619.0], [53.1, 621.0], [53.2, 622.0], [53.3, 622.0], [53.4, 624.0], [53.5, 625.0], [53.6, 626.0], [53.7, 627.0], [53.8, 628.0], [53.9, 631.0], [54.0, 632.0], [54.1, 633.0], [54.2, 635.0], [54.3, 637.0], [54.4, 639.0], [54.5, 641.0], [54.6, 643.0], [54.7, 645.0], [54.8, 647.0], [54.9, 650.0], [55.0, 651.0], [55.1, 652.0], [55.2, 655.0], [55.3, 658.0], [55.4, 659.0], [55.5, 661.0], [55.6, 662.0], [55.7, 664.0], [55.8, 666.0], [55.9, 668.0], [56.0, 669.0], [56.1, 671.0], [56.2, 675.0], [56.3, 677.0], [56.4, 679.0], [56.5, 680.0], [56.6, 682.0], [56.7, 683.0], [56.8, 685.0], [56.9, 688.0], [57.0, 690.0], [57.1, 693.0], [57.2, 694.0], [57.3, 696.0], [57.4, 699.0], [57.5, 700.0], [57.6, 703.0], [57.7, 705.0], [57.8, 706.0], [57.9, 708.0], [58.0, 711.0], [58.1, 713.0], [58.2, 714.0], [58.3, 716.0], [58.4, 717.0], [58.5, 719.0], [58.6, 721.0], [58.7, 726.0], [58.8, 728.0], [58.9, 731.0], [59.0, 733.0], [59.1, 735.0], [59.2, 737.0], [59.3, 739.0], [59.4, 741.0], [59.5, 744.0], [59.6, 745.0], [59.7, 748.0], [59.8, 749.0], [59.9, 751.0], [60.0, 752.0], [60.1, 753.0], [60.2, 756.0], [60.3, 757.0], [60.4, 761.0], [60.5, 762.0], [60.6, 764.0], [60.7, 766.0], [60.8, 769.0], [60.9, 771.0], [61.0, 774.0], [61.1, 778.0], [61.2, 780.0], [61.3, 782.0], [61.4, 784.0], [61.5, 790.0], [61.6, 794.0], [61.7, 796.0], [61.8, 797.0], [61.9, 799.0], [62.0, 801.0], [62.1, 804.0], [62.2, 807.0], [62.3, 813.0], [62.4, 816.0], [62.5, 818.0], [62.6, 821.0], [62.7, 822.0], [62.8, 826.0], [62.9, 829.0], [63.0, 832.0], [63.1, 833.0], [63.2, 835.0], [63.3, 837.0], [63.4, 838.0], [63.5, 839.0], [63.6, 840.0], [63.7, 844.0], [63.8, 847.0], [63.9, 848.0], [64.0, 849.0], [64.1, 851.0], [64.2, 855.0], [64.3, 857.0], [64.4, 860.0], [64.5, 861.0], [64.6, 862.0], [64.7, 865.0], [64.8, 867.0], [64.9, 869.0], [65.0, 870.0], [65.1, 872.0], [65.2, 873.0], [65.3, 877.0], [65.4, 878.0], [65.5, 880.0], [65.6, 882.0], [65.7, 885.0], [65.8, 887.0], [65.9, 892.0], [66.0, 895.0], [66.1, 897.0], [66.2, 900.0], [66.3, 905.0], [66.4, 909.0], [66.5, 911.0], [66.6, 914.0], [66.7, 916.0], [66.8, 918.0], [66.9, 920.0], [67.0, 923.0], [67.1, 925.0], [67.2, 927.0], [67.3, 930.0], [67.4, 931.0], [67.5, 934.0], [67.6, 936.0], [67.7, 939.0], [67.8, 941.0], [67.9, 943.0], [68.0, 944.0], [68.1, 948.0], [68.2, 950.0], [68.3, 953.0], [68.4, 955.0], [68.5, 957.0], [68.6, 961.0], [68.7, 963.0], [68.8, 965.0], [68.9, 967.0], [69.0, 972.0], [69.1, 973.0], [69.2, 977.0], [69.3, 982.0], [69.4, 984.0], [69.5, 987.0], [69.6, 993.0], [69.7, 996.0], [69.8, 997.0], [69.9, 999.0], [70.0, 1001.0], [70.1, 1004.0], [70.2, 1006.0], [70.3, 1007.0], [70.4, 1009.0], [70.5, 1011.0], [70.6, 1013.0], [70.7, 1015.0], [70.8, 1017.0], [70.9, 1019.0], [71.0, 1020.0], [71.1, 1023.0], [71.2, 1025.0], [71.3, 1027.0], [71.4, 1028.0], [71.5, 1030.0], [71.6, 1032.0], [71.7, 1033.0], [71.8, 1036.0], [71.9, 1037.0], [72.0, 1039.0], [72.1, 1041.0], [72.2, 1043.0], [72.3, 1045.0], [72.4, 1047.0], [72.5, 1050.0], [72.6, 1053.0], [72.7, 1054.0], [72.8, 1057.0], [72.9, 1059.0], [73.0, 1062.0], [73.1, 1063.0], [73.2, 1065.0], [73.3, 1067.0], [73.4, 1069.0], [73.5, 1069.0], [73.6, 1073.0], [73.7, 1074.0], [73.8, 1078.0], [73.9, 1080.0], [74.0, 1083.0], [74.1, 1087.0], [74.2, 1091.0], [74.3, 1093.0], [74.4, 1097.0], [74.5, 1098.0], [74.6, 1101.0], [74.7, 1103.0], [74.8, 1104.0], [74.9, 1106.0], [75.0, 1107.0], [75.1, 1109.0], [75.2, 1111.0], [75.3, 1113.0], [75.4, 1117.0], [75.5, 1118.0], [75.6, 1118.0], [75.7, 1121.0], [75.8, 1123.0], [75.9, 1125.0], [76.0, 1128.0], [76.1, 1131.0], [76.2, 1135.0], [76.3, 1136.0], [76.4, 1140.0], [76.5, 1142.0], [76.6, 1144.0], [76.7, 1147.0], [76.8, 1149.0], [76.9, 1152.0], [77.0, 1155.0], [77.1, 1156.0], [77.2, 1159.0], [77.3, 1163.0], [77.4, 1166.0], [77.5, 1169.0], [77.6, 1171.0], [77.7, 1172.0], [77.8, 1173.0], [77.9, 1175.0], [78.0, 1177.0], [78.1, 1179.0], [78.2, 1180.0], [78.3, 1182.0], [78.4, 1186.0], [78.5, 1188.0], [78.6, 1191.0], [78.7, 1193.0], [78.8, 1194.0], [78.9, 1197.0], [79.0, 1199.0], [79.1, 1201.0], [79.2, 1204.0], [79.3, 1206.0], [79.4, 1210.0], [79.5, 1212.0], [79.6, 1214.0], [79.7, 1215.0], [79.8, 1217.0], [79.9, 1218.0], [80.0, 1221.0], [80.1, 1222.0], [80.2, 1224.0], [80.3, 1226.0], [80.4, 1227.0], [80.5, 1229.0], [80.6, 1233.0], [80.7, 1234.0], [80.8, 1237.0], [80.9, 1238.0], [81.0, 1240.0], [81.1, 1243.0], [81.2, 1244.0], [81.3, 1247.0], [81.4, 1248.0], [81.5, 1249.0], [81.6, 1251.0], [81.7, 1252.0], [81.8, 1254.0], [81.9, 1256.0], [82.0, 1259.0], [82.1, 1261.0], [82.2, 1263.0], [82.3, 1266.0], [82.4, 1269.0], [82.5, 1272.0], [82.6, 1273.0], [82.7, 1276.0], [82.8, 1278.0], [82.9, 1283.0], [83.0, 1285.0], [83.1, 1286.0], [83.2, 1290.0], [83.3, 1292.0], [83.4, 1294.0], [83.5, 1296.0], [83.6, 1299.0], [83.7, 1302.0], [83.8, 1304.0], [83.9, 1307.0], [84.0, 1313.0], [84.1, 1316.0], [84.2, 1318.0], [84.3, 1322.0], [84.4, 1324.0], [84.5, 1325.0], [84.6, 1327.0], [84.7, 1329.0], [84.8, 1331.0], [84.9, 1333.0], [85.0, 1335.0], [85.1, 1338.0], [85.2, 1341.0], [85.3, 1343.0], [85.4, 1348.0], [85.5, 1352.0], [85.6, 1354.0], [85.7, 1357.0], [85.8, 1361.0], [85.9, 1369.0], [86.0, 1372.0], [86.1, 1374.0], [86.2, 1376.0], [86.3, 1380.0], [86.4, 1384.0], [86.5, 1386.0], [86.6, 1387.0], [86.7, 1390.0], [86.8, 1394.0], [86.9, 1397.0], [87.0, 1400.0], [87.1, 1406.0], [87.2, 1411.0], [87.3, 1414.0], [87.4, 1422.0], [87.5, 1426.0], [87.6, 1429.0], [87.7, 1432.0], [87.8, 1436.0], [87.9, 1437.0], [88.0, 1441.0], [88.1, 1448.0], [88.2, 1450.0], [88.3, 1457.0], [88.4, 1462.0], [88.5, 1464.0], [88.6, 1473.0], [88.7, 1479.0], [88.8, 1484.0], [88.9, 1489.0], [89.0, 1495.0], [89.1, 1500.0], [89.2, 1505.0], [89.3, 1509.0], [89.4, 1514.0], [89.5, 1519.0], [89.6, 1527.0], [89.7, 1534.0], [89.8, 1542.0], [89.9, 1543.0], [90.0, 1548.0], [90.1, 1559.0], [90.2, 1566.0], [90.3, 1571.0], [90.4, 1578.0], [90.5, 1583.0], [90.6, 1595.0], [90.7, 1599.0], [90.8, 1604.0], [90.9, 1607.0], [91.0, 1613.0], [91.1, 1622.0], [91.2, 1629.0], [91.3, 1632.0], [91.4, 1641.0], [91.5, 1656.0], [91.6, 1674.0], [91.7, 1676.0], [91.8, 1683.0], [91.9, 1686.0], [92.0, 1695.0], [92.1, 1705.0], [92.2, 1710.0], [92.3, 1714.0], [92.4, 1729.0], [92.5, 1737.0], [92.6, 1747.0], [92.7, 1757.0], [92.8, 1771.0], [92.9, 1785.0], [93.0, 1801.0], [93.1, 1817.0], [93.2, 1834.0], [93.3, 1844.0], [93.4, 1852.0], [93.5, 1863.0], [93.6, 1868.0], [93.7, 1877.0], [93.8, 1881.0], [93.9, 1900.0], [94.0, 1915.0], [94.1, 1930.0], [94.2, 1946.0], [94.3, 1961.0], [94.4, 1964.0], [94.5, 1973.0], [94.6, 1988.0], [94.7, 2005.0], [94.8, 2021.0], [94.9, 2028.0], [95.0, 2047.0], [95.1, 2057.0], [95.2, 2068.0], [95.3, 2097.0], [95.4, 2106.0], [95.5, 2114.0], [95.6, 2127.0], [95.7, 2144.0], [95.8, 2152.0], [95.9, 2174.0], [96.0, 2187.0], [96.1, 2203.0], [96.2, 2216.0], [96.3, 2225.0], [96.4, 2249.0], [96.5, 2288.0], [96.6, 2310.0], [96.7, 2337.0], [96.8, 2351.0], [96.9, 2392.0], [97.0, 2413.0], [97.1, 2421.0], [97.2, 2444.0], [97.3, 2468.0], [97.4, 2476.0], [97.5, 2487.0], [97.6, 2497.0], [97.7, 2514.0], [97.8, 2533.0], [97.9, 2610.0], [98.0, 2648.0], [98.1, 2672.0], [98.2, 2693.0], [98.3, 2714.0], [98.4, 2801.0], [98.5, 2872.0], [98.6, 2903.0], [98.7, 2937.0], [98.8, 2985.0], [98.9, 3017.0], [99.0, 3067.0], [99.1, 3097.0], [99.2, 3213.0], [99.3, 3316.0], [99.4, 3556.0], [99.5, 3836.0], [99.6, 4011.0], [99.7, 4458.0], [99.8, 4985.0], [99.9, 5443.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 886.0, "series": [{"data": [[0.0, 886.0], [600.0, 278.0], [700.0, 234.0], [800.0, 220.0], [900.0, 195.0], [1000.0, 240.0], [1100.0, 233.0], [1200.0, 237.0], [1300.0, 174.0], [1400.0, 110.0], [1500.0, 84.0], [1600.0, 69.0], [1700.0, 49.0], [1800.0, 47.0], [1900.0, 39.0], [2000.0, 37.0], [2100.0, 37.0], [2200.0, 24.0], [2300.0, 22.0], [2400.0, 35.0], [2500.0, 13.0], [2600.0, 17.0], [2800.0, 10.0], [2700.0, 9.0], [2900.0, 14.0], [3000.0, 14.0], [3100.0, 4.0], [3200.0, 5.0], [3300.0, 1.0], [3400.0, 1.0], [3500.0, 5.0], [3700.0, 2.0], [3600.0, 2.0], [3800.0, 2.0], [3900.0, 3.0], [4000.0, 2.0], [4300.0, 2.0], [4500.0, 2.0], [4400.0, 2.0], [5100.0, 1.0], [4900.0, 3.0], [5300.0, 2.0], [5400.0, 3.0], [5800.0, 1.0], [5900.0, 1.0], [6100.0, 1.0], [6200.0, 1.0], [100.0, 560.0], [200.0, 518.0], [300.0, 279.0], [400.0, 236.0], [500.0, 224.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 565.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2482.0, "series": [{"data": [[0.0, 2482.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2143.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 565.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.902222222222221, "minX": 1.6040292E12, "maxY": 10.0, "series": [{"data": [[1.60402926E12, 10.0], [1.60402956E12, 9.902222222222221], [1.60402938E12, 10.0], [1.6040292E12, 10.0], [1.6040295E12, 10.0], [1.60402932E12, 10.0], [1.60402944E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402956E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 611.0, "minX": 1.0, "maxY": 2586.0, "series": [{"data": [[8.0, 1322.0], [4.0, 611.0], [2.0, 1009.0], [1.0, 2586.0], [9.0, 1226.0], [10.0, 720.4265585794265], [5.0, 1611.0], [6.0, 794.0], [3.0, 1426.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996146, 721.4714836223525]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3045.65, "minX": 1.6040292E12, "maxY": 4372514.35, "series": [{"data": [[1.60402926E12, 3860288.75], [1.60402956E12, 2175999.8333333335], [1.60402938E12, 3689077.6333333333], [1.6040292E12, 2213607.433333333], [1.6040295E12, 4254534.6], [1.60402932E12, 4372514.35], [1.60402944E12, 3409695.433333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60402926E12, 6539.333333333333], [1.60402956E12, 3398.4166666666665], [1.60402938E12, 5685.5], [1.6040292E12, 3045.65], [1.6040295E12, 7168.466666666666], [1.60402932E12, 6616.166666666667], [1.60402944E12, 6123.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402956E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 634.139682539683, "minX": 1.6040292E12, "maxY": 864.5741176470591, "series": [{"data": [[1.60402926E12, 684.8870056497173], [1.60402956E12, 833.784444444444], [1.60402938E12, 783.060802069858], [1.6040292E12, 864.5741176470591], [1.6040295E12, 634.139682539683], [1.60402932E12, 679.2098623853204], [1.60402944E12, 712.8880952380963]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402956E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 632.4201058201064, "minX": 1.6040292E12, "maxY": 862.1600000000003, "series": [{"data": [[1.60402926E12, 682.8768361581917], [1.60402956E12, 831.7822222222223], [1.60402938E12, 781.0724450194053], [1.6040292E12, 862.1600000000003], [1.6040295E12, 632.4201058201064], [1.60402932E12, 677.0366972477071], [1.60402944E12, 711.3690476190483]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402956E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011467889908256878, "minX": 1.6040292E12, "maxY": 0.2658823529411766, "series": [{"data": [[1.60402926E12, 0.014689265536723176], [1.60402956E12, 0.0177777777777778], [1.60402938E12, 0.015523932729624846], [1.6040292E12, 0.2658823529411766], [1.6040295E12, 0.016931216931216967], [1.60402932E12, 0.011467889908256878], [1.60402944E12, 0.01309523809523811]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402956E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.6040292E12, "maxY": 6200.0, "series": [{"data": [[1.60402926E12, 5992.0], [1.60402956E12, 4458.0], [1.60402938E12, 5871.0], [1.6040292E12, 5443.0], [1.6040295E12, 3011.0], [1.60402932E12, 3131.0], [1.60402944E12, 6200.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60402926E12, 8.0], [1.60402956E12, 14.0], [1.60402938E12, 13.0], [1.6040292E12, 18.0], [1.6040295E12, 14.0], [1.60402932E12, 13.0], [1.60402944E12, 12.706999398469925]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60402926E12, 10.314200253486634], [1.60402956E12, 14.0], [1.60402938E12, 13.0], [1.6040292E12, 18.0], [1.6040295E12, 14.365400090217591], [1.60402932E12, 13.0], [1.60402944E12, 14.32590008020401]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60402926E12, 9.250999683141705], [1.60402956E12, 14.0], [1.60402938E12, 13.0], [1.6040292E12, 18.0], [1.6040295E12, 14.0], [1.60402932E12, 13.0], [1.60402944E12, 13.968499699234961]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60402926E12, 6.0], [1.60402956E12, 8.0], [1.60402938E12, 11.0], [1.6040292E12, 18.0], [1.6040295E12, 8.0], [1.60402932E12, 7.0], [1.60402944E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60402926E12, 455.0], [1.60402956E12, 702.5], [1.60402938E12, 621.0], [1.6040292E12, 714.0], [1.6040295E12, 345.0], [1.60402932E12, 507.0], [1.60402944E12, 529.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402956E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 24.5, "minX": 1.0, "maxY": 2416.5, "series": [{"data": [[32.0, 75.5], [2.0, 486.5], [36.0, 132.5], [39.0, 27.0], [41.0, 130.5], [40.0, 24.5], [44.0, 28.0], [3.0, 1137.5], [50.0, 59.0], [52.0, 42.0], [53.0, 29.0], [58.0, 61.5], [4.0, 1485.0], [69.0, 27.0], [76.0, 43.0], [5.0, 938.0], [87.0, 42.0], [6.0, 1220.0], [7.0, 1092.0], [8.0, 993.0], [9.0, 1005.5], [10.0, 864.0], [11.0, 847.5], [12.0, 713.0], [13.0, 722.5], [14.0, 636.0], [15.0, 628.0], [1.0, 2416.5], [16.0, 521.5], [17.0, 411.0], [18.0, 446.0], [19.0, 439.0], [20.0, 289.0], [21.0, 289.0], [22.0, 276.0], [23.0, 294.0], [24.0, 87.0], [25.0, 235.5], [26.0, 129.0], [27.0, 26.0], [28.0, 35.5], [29.0, 39.0], [31.0, 29.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 23.5, "minX": 1.0, "maxY": 2406.5, "series": [{"data": [[32.0, 75.5], [2.0, 486.5], [36.0, 132.5], [39.0, 27.0], [41.0, 130.0], [40.0, 23.5], [44.0, 28.0], [3.0, 1131.0], [50.0, 59.0], [52.0, 41.0], [53.0, 29.0], [58.0, 61.0], [4.0, 1478.5], [69.0, 27.0], [76.0, 43.0], [5.0, 934.0], [87.0, 42.0], [6.0, 1214.5], [7.0, 1084.0], [8.0, 988.5], [9.0, 999.5], [10.0, 861.0], [11.0, 845.5], [12.0, 712.5], [13.0, 721.5], [14.0, 635.0], [15.0, 626.0], [1.0, 2406.5], [16.0, 521.0], [17.0, 409.0], [18.0, 441.5], [19.0, 437.5], [20.0, 288.5], [21.0, 289.0], [22.0, 275.5], [23.0, 293.5], [24.0, 87.0], [25.0, 234.5], [26.0, 128.5], [27.0, 26.0], [28.0, 35.5], [29.0, 39.0], [31.0, 29.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.25, "minX": 1.6040292E12, "maxY": 15.75, "series": [{"data": [[1.60402926E12, 14.75], [1.60402956E12, 7.333333333333333], [1.60402938E12, 12.883333333333333], [1.6040292E12, 7.25], [1.6040295E12, 15.75], [1.60402932E12, 14.533333333333333], [1.60402944E12, 14.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402956E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.083333333333333, "minX": 1.6040292E12, "maxY": 15.75, "series": [{"data": [[1.60402926E12, 14.75], [1.60402956E12, 7.5], [1.60402938E12, 12.883333333333333], [1.6040292E12, 7.083333333333333], [1.6040295E12, 15.75], [1.60402932E12, 14.533333333333333], [1.60402944E12, 14.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402956E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.083333333333333, "minX": 1.6040292E12, "maxY": 15.75, "series": [{"data": [[1.60402926E12, 14.75], [1.60402956E12, 7.5], [1.60402938E12, 12.883333333333333], [1.6040292E12, 7.083333333333333], [1.6040295E12, 15.75], [1.60402932E12, 14.533333333333333], [1.60402944E12, 14.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402956E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.083333333333333, "minX": 1.6040292E12, "maxY": 15.75, "series": [{"data": [[1.60402926E12, 14.75], [1.60402956E12, 7.5], [1.60402938E12, 12.883333333333333], [1.6040292E12, 7.083333333333333], [1.6040295E12, 15.75], [1.60402932E12, 14.533333333333333], [1.60402944E12, 14.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402956E12, "title": "Total Transactions Per Second"}},
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

