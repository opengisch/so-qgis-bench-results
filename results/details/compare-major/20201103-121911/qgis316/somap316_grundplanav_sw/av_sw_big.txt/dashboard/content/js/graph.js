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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 6793.0, "series": [{"data": [[0.0, 6.0], [0.1, 7.0], [0.2, 8.0], [0.3, 9.0], [0.4, 12.0], [0.5, 13.0], [0.6, 14.0], [0.7, 14.0], [0.8, 14.0], [0.9, 14.0], [1.0, 15.0], [1.1, 15.0], [1.2, 15.0], [1.3, 16.0], [1.4, 16.0], [1.5, 16.0], [1.6, 17.0], [1.7, 17.0], [1.8, 17.0], [1.9, 17.0], [2.0, 18.0], [2.1, 18.0], [2.2, 19.0], [2.3, 19.0], [2.4, 19.0], [2.5, 19.0], [2.6, 19.0], [2.7, 20.0], [2.8, 20.0], [2.9, 20.0], [3.0, 20.0], [3.1, 21.0], [3.2, 21.0], [3.3, 21.0], [3.4, 21.0], [3.5, 21.0], [3.6, 21.0], [3.7, 22.0], [3.8, 22.0], [3.9, 22.0], [4.0, 22.0], [4.1, 22.0], [4.2, 22.0], [4.3, 23.0], [4.4, 23.0], [4.5, 23.0], [4.6, 23.0], [4.7, 23.0], [4.8, 23.0], [4.9, 23.0], [5.0, 23.0], [5.1, 24.0], [5.2, 24.0], [5.3, 24.0], [5.4, 24.0], [5.5, 24.0], [5.6, 25.0], [5.7, 25.0], [5.8, 25.0], [5.9, 25.0], [6.0, 25.0], [6.1, 25.0], [6.2, 25.0], [6.3, 26.0], [6.4, 26.0], [6.5, 26.0], [6.6, 26.0], [6.7, 26.0], [6.8, 27.0], [6.9, 27.0], [7.0, 27.0], [7.1, 27.0], [7.2, 28.0], [7.3, 28.0], [7.4, 28.0], [7.5, 28.0], [7.6, 28.0], [7.7, 28.0], [7.8, 29.0], [7.9, 29.0], [8.0, 29.0], [8.1, 30.0], [8.2, 30.0], [8.3, 30.0], [8.4, 31.0], [8.5, 31.0], [8.6, 31.0], [8.7, 31.0], [8.8, 31.0], [8.9, 31.0], [9.0, 32.0], [9.1, 32.0], [9.2, 32.0], [9.3, 32.0], [9.4, 33.0], [9.5, 33.0], [9.6, 33.0], [9.7, 33.0], [9.8, 33.0], [9.9, 34.0], [10.0, 34.0], [10.1, 34.0], [10.2, 35.0], [10.3, 35.0], [10.4, 35.0], [10.5, 35.0], [10.6, 36.0], [10.7, 36.0], [10.8, 37.0], [10.9, 37.0], [11.0, 37.0], [11.1, 38.0], [11.2, 38.0], [11.3, 38.0], [11.4, 39.0], [11.5, 39.0], [11.6, 40.0], [11.7, 40.0], [11.8, 40.0], [11.9, 41.0], [12.0, 41.0], [12.1, 42.0], [12.2, 42.0], [12.3, 42.0], [12.4, 42.0], [12.5, 43.0], [12.6, 44.0], [12.7, 44.0], [12.8, 44.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 46.0], [13.3, 46.0], [13.4, 46.0], [13.5, 47.0], [13.6, 47.0], [13.7, 48.0], [13.8, 48.0], [13.9, 49.0], [14.0, 49.0], [14.1, 49.0], [14.2, 50.0], [14.3, 51.0], [14.4, 51.0], [14.5, 53.0], [14.6, 53.0], [14.7, 53.0], [14.8, 54.0], [14.9, 55.0], [15.0, 56.0], [15.1, 57.0], [15.2, 58.0], [15.3, 59.0], [15.4, 60.0], [15.5, 63.0], [15.6, 65.0], [15.7, 66.0], [15.8, 67.0], [15.9, 69.0], [16.0, 72.0], [16.1, 76.0], [16.2, 82.0], [16.3, 92.0], [16.4, 98.0], [16.5, 101.0], [16.6, 104.0], [16.7, 105.0], [16.8, 107.0], [16.9, 110.0], [17.0, 112.0], [17.1, 112.0], [17.2, 113.0], [17.3, 114.0], [17.4, 114.0], [17.5, 115.0], [17.6, 115.0], [17.7, 115.0], [17.8, 116.0], [17.9, 116.0], [18.0, 116.0], [18.1, 117.0], [18.2, 117.0], [18.3, 117.0], [18.4, 118.0], [18.5, 118.0], [18.6, 118.0], [18.7, 119.0], [18.8, 119.0], [18.9, 119.0], [19.0, 120.0], [19.1, 120.0], [19.2, 121.0], [19.3, 121.0], [19.4, 122.0], [19.5, 123.0], [19.6, 123.0], [19.7, 124.0], [19.8, 124.0], [19.9, 125.0], [20.0, 126.0], [20.1, 126.0], [20.2, 127.0], [20.3, 127.0], [20.4, 128.0], [20.5, 129.0], [20.6, 129.0], [20.7, 130.0], [20.8, 131.0], [20.9, 131.0], [21.0, 132.0], [21.1, 133.0], [21.2, 133.0], [21.3, 134.0], [21.4, 135.0], [21.5, 137.0], [21.6, 137.0], [21.7, 138.0], [21.8, 139.0], [21.9, 140.0], [22.0, 140.0], [22.1, 141.0], [22.2, 142.0], [22.3, 143.0], [22.4, 144.0], [22.5, 144.0], [22.6, 146.0], [22.7, 146.0], [22.8, 147.0], [22.9, 147.0], [23.0, 148.0], [23.1, 149.0], [23.2, 150.0], [23.3, 151.0], [23.4, 152.0], [23.5, 152.0], [23.6, 153.0], [23.7, 154.0], [23.8, 155.0], [23.9, 155.0], [24.0, 156.0], [24.1, 157.0], [24.2, 158.0], [24.3, 160.0], [24.4, 161.0], [24.5, 162.0], [24.6, 163.0], [24.7, 165.0], [24.8, 166.0], [24.9, 168.0], [25.0, 169.0], [25.1, 171.0], [25.2, 172.0], [25.3, 172.0], [25.4, 173.0], [25.5, 175.0], [25.6, 176.0], [25.7, 179.0], [25.8, 182.0], [25.9, 183.0], [26.0, 184.0], [26.1, 185.0], [26.2, 187.0], [26.3, 188.0], [26.4, 190.0], [26.5, 191.0], [26.6, 192.0], [26.7, 194.0], [26.8, 195.0], [26.9, 196.0], [27.0, 197.0], [27.1, 198.0], [27.2, 199.0], [27.3, 200.0], [27.4, 202.0], [27.5, 203.0], [27.6, 204.0], [27.7, 205.0], [27.8, 206.0], [27.9, 208.0], [28.0, 209.0], [28.1, 210.0], [28.2, 211.0], [28.3, 213.0], [28.4, 215.0], [28.5, 216.0], [28.6, 217.0], [28.7, 218.0], [28.8, 219.0], [28.9, 219.0], [29.0, 221.0], [29.1, 222.0], [29.2, 222.0], [29.3, 223.0], [29.4, 224.0], [29.5, 224.0], [29.6, 224.0], [29.7, 225.0], [29.8, 225.0], [29.9, 226.0], [30.0, 227.0], [30.1, 229.0], [30.2, 229.0], [30.3, 230.0], [30.4, 230.0], [30.5, 231.0], [30.6, 232.0], [30.7, 233.0], [30.8, 233.0], [30.9, 234.0], [31.0, 235.0], [31.1, 236.0], [31.2, 237.0], [31.3, 238.0], [31.4, 239.0], [31.5, 240.0], [31.6, 240.0], [31.7, 241.0], [31.8, 242.0], [31.9, 243.0], [32.0, 244.0], [32.1, 246.0], [32.2, 248.0], [32.3, 248.0], [32.4, 250.0], [32.5, 251.0], [32.6, 252.0], [32.7, 253.0], [32.8, 255.0], [32.9, 256.0], [33.0, 257.0], [33.1, 258.0], [33.2, 260.0], [33.3, 260.0], [33.4, 262.0], [33.5, 263.0], [33.6, 263.0], [33.7, 265.0], [33.8, 266.0], [33.9, 267.0], [34.0, 269.0], [34.1, 270.0], [34.2, 271.0], [34.3, 273.0], [34.4, 274.0], [34.5, 277.0], [34.6, 278.0], [34.7, 278.0], [34.8, 281.0], [34.9, 282.0], [35.0, 283.0], [35.1, 283.0], [35.2, 284.0], [35.3, 285.0], [35.4, 287.0], [35.5, 288.0], [35.6, 289.0], [35.7, 290.0], [35.8, 291.0], [35.9, 293.0], [36.0, 294.0], [36.1, 295.0], [36.2, 296.0], [36.3, 297.0], [36.4, 298.0], [36.5, 300.0], [36.6, 302.0], [36.7, 303.0], [36.8, 305.0], [36.9, 307.0], [37.0, 307.0], [37.1, 308.0], [37.2, 308.0], [37.3, 310.0], [37.4, 313.0], [37.5, 314.0], [37.6, 318.0], [37.7, 319.0], [37.8, 322.0], [37.9, 323.0], [38.0, 325.0], [38.1, 327.0], [38.2, 328.0], [38.3, 329.0], [38.4, 331.0], [38.5, 333.0], [38.6, 333.0], [38.7, 334.0], [38.8, 338.0], [38.9, 341.0], [39.0, 342.0], [39.1, 345.0], [39.2, 347.0], [39.3, 349.0], [39.4, 351.0], [39.5, 353.0], [39.6, 356.0], [39.7, 357.0], [39.8, 359.0], [39.9, 361.0], [40.0, 363.0], [40.1, 365.0], [40.2, 367.0], [40.3, 368.0], [40.4, 369.0], [40.5, 371.0], [40.6, 374.0], [40.7, 376.0], [40.8, 377.0], [40.9, 378.0], [41.0, 379.0], [41.1, 382.0], [41.2, 383.0], [41.3, 384.0], [41.4, 386.0], [41.5, 387.0], [41.6, 389.0], [41.7, 391.0], [41.8, 393.0], [41.9, 395.0], [42.0, 397.0], [42.1, 400.0], [42.2, 401.0], [42.3, 403.0], [42.4, 405.0], [42.5, 407.0], [42.6, 408.0], [42.7, 410.0], [42.8, 413.0], [42.9, 415.0], [43.0, 418.0], [43.1, 419.0], [43.2, 421.0], [43.3, 423.0], [43.4, 427.0], [43.5, 428.0], [43.6, 431.0], [43.7, 433.0], [43.8, 435.0], [43.9, 438.0], [44.0, 439.0], [44.1, 441.0], [44.2, 443.0], [44.3, 446.0], [44.4, 447.0], [44.5, 450.0], [44.6, 451.0], [44.7, 452.0], [44.8, 456.0], [44.9, 458.0], [45.0, 461.0], [45.1, 464.0], [45.2, 465.0], [45.3, 468.0], [45.4, 469.0], [45.5, 470.0], [45.6, 473.0], [45.7, 475.0], [45.8, 477.0], [45.9, 478.0], [46.0, 481.0], [46.1, 483.0], [46.2, 484.0], [46.3, 487.0], [46.4, 489.0], [46.5, 490.0], [46.6, 492.0], [46.7, 496.0], [46.8, 499.0], [46.9, 500.0], [47.0, 501.0], [47.1, 503.0], [47.2, 504.0], [47.3, 506.0], [47.4, 509.0], [47.5, 511.0], [47.6, 514.0], [47.7, 515.0], [47.8, 519.0], [47.9, 520.0], [48.0, 523.0], [48.1, 525.0], [48.2, 527.0], [48.3, 527.0], [48.4, 530.0], [48.5, 531.0], [48.6, 533.0], [48.7, 535.0], [48.8, 537.0], [48.9, 541.0], [49.0, 546.0], [49.1, 548.0], [49.2, 553.0], [49.3, 555.0], [49.4, 557.0], [49.5, 559.0], [49.6, 563.0], [49.7, 565.0], [49.8, 567.0], [49.9, 570.0], [50.0, 571.0], [50.1, 573.0], [50.2, 574.0], [50.3, 575.0], [50.4, 578.0], [50.5, 580.0], [50.6, 584.0], [50.7, 586.0], [50.8, 588.0], [50.9, 593.0], [51.0, 595.0], [51.1, 598.0], [51.2, 599.0], [51.3, 601.0], [51.4, 604.0], [51.5, 605.0], [51.6, 608.0], [51.7, 609.0], [51.8, 615.0], [51.9, 617.0], [52.0, 619.0], [52.1, 621.0], [52.2, 625.0], [52.3, 627.0], [52.4, 629.0], [52.5, 631.0], [52.6, 634.0], [52.7, 635.0], [52.8, 638.0], [52.9, 640.0], [53.0, 643.0], [53.1, 647.0], [53.2, 650.0], [53.3, 653.0], [53.4, 656.0], [53.5, 657.0], [53.6, 660.0], [53.7, 662.0], [53.8, 664.0], [53.9, 665.0], [54.0, 668.0], [54.1, 673.0], [54.2, 675.0], [54.3, 677.0], [54.4, 680.0], [54.5, 682.0], [54.6, 683.0], [54.7, 684.0], [54.8, 686.0], [54.9, 688.0], [55.0, 690.0], [55.1, 692.0], [55.2, 694.0], [55.3, 696.0], [55.4, 699.0], [55.5, 701.0], [55.6, 703.0], [55.7, 704.0], [55.8, 708.0], [55.9, 710.0], [56.0, 713.0], [56.1, 715.0], [56.2, 717.0], [56.3, 718.0], [56.4, 720.0], [56.5, 722.0], [56.6, 724.0], [56.7, 726.0], [56.8, 731.0], [56.9, 734.0], [57.0, 736.0], [57.1, 739.0], [57.2, 741.0], [57.3, 744.0], [57.4, 746.0], [57.5, 748.0], [57.6, 750.0], [57.7, 753.0], [57.8, 756.0], [57.9, 758.0], [58.0, 760.0], [58.1, 762.0], [58.2, 763.0], [58.3, 765.0], [58.4, 767.0], [58.5, 768.0], [58.6, 769.0], [58.7, 773.0], [58.8, 776.0], [58.9, 777.0], [59.0, 778.0], [59.1, 780.0], [59.2, 782.0], [59.3, 785.0], [59.4, 785.0], [59.5, 787.0], [59.6, 789.0], [59.7, 790.0], [59.8, 792.0], [59.9, 795.0], [60.0, 796.0], [60.1, 799.0], [60.2, 801.0], [60.3, 805.0], [60.4, 807.0], [60.5, 810.0], [60.6, 812.0], [60.7, 812.0], [60.8, 814.0], [60.9, 817.0], [61.0, 819.0], [61.1, 821.0], [61.2, 823.0], [61.3, 826.0], [61.4, 828.0], [61.5, 832.0], [61.6, 836.0], [61.7, 837.0], [61.8, 841.0], [61.9, 843.0], [62.0, 846.0], [62.1, 849.0], [62.2, 850.0], [62.3, 852.0], [62.4, 853.0], [62.5, 857.0], [62.6, 860.0], [62.7, 864.0], [62.8, 866.0], [62.9, 869.0], [63.0, 871.0], [63.1, 874.0], [63.2, 877.0], [63.3, 881.0], [63.4, 882.0], [63.5, 884.0], [63.6, 888.0], [63.7, 891.0], [63.8, 896.0], [63.9, 898.0], [64.0, 900.0], [64.1, 902.0], [64.2, 904.0], [64.3, 907.0], [64.4, 909.0], [64.5, 912.0], [64.6, 913.0], [64.7, 916.0], [64.8, 918.0], [64.9, 922.0], [65.0, 923.0], [65.1, 926.0], [65.2, 928.0], [65.3, 931.0], [65.4, 934.0], [65.5, 936.0], [65.6, 938.0], [65.7, 941.0], [65.8, 944.0], [65.9, 944.0], [66.0, 947.0], [66.1, 948.0], [66.2, 951.0], [66.3, 953.0], [66.4, 956.0], [66.5, 957.0], [66.6, 961.0], [66.7, 963.0], [66.8, 965.0], [66.9, 967.0], [67.0, 968.0], [67.1, 970.0], [67.2, 971.0], [67.3, 975.0], [67.4, 980.0], [67.5, 982.0], [67.6, 982.0], [67.7, 984.0], [67.8, 987.0], [67.9, 989.0], [68.0, 992.0], [68.1, 996.0], [68.2, 999.0], [68.3, 1001.0], [68.4, 1003.0], [68.5, 1006.0], [68.6, 1008.0], [68.7, 1010.0], [68.8, 1013.0], [68.9, 1014.0], [69.0, 1016.0], [69.1, 1017.0], [69.2, 1022.0], [69.3, 1025.0], [69.4, 1028.0], [69.5, 1030.0], [69.6, 1034.0], [69.7, 1035.0], [69.8, 1039.0], [69.9, 1040.0], [70.0, 1042.0], [70.1, 1044.0], [70.2, 1047.0], [70.3, 1049.0], [70.4, 1051.0], [70.5, 1054.0], [70.6, 1058.0], [70.7, 1059.0], [70.8, 1062.0], [70.9, 1066.0], [71.0, 1067.0], [71.1, 1069.0], [71.2, 1070.0], [71.3, 1072.0], [71.4, 1075.0], [71.5, 1078.0], [71.6, 1080.0], [71.7, 1082.0], [71.8, 1085.0], [71.9, 1088.0], [72.0, 1090.0], [72.1, 1091.0], [72.2, 1093.0], [72.3, 1095.0], [72.4, 1098.0], [72.5, 1101.0], [72.6, 1102.0], [72.7, 1106.0], [72.8, 1108.0], [72.9, 1112.0], [73.0, 1116.0], [73.1, 1119.0], [73.2, 1122.0], [73.3, 1123.0], [73.4, 1124.0], [73.5, 1126.0], [73.6, 1130.0], [73.7, 1132.0], [73.8, 1134.0], [73.9, 1135.0], [74.0, 1137.0], [74.1, 1139.0], [74.2, 1140.0], [74.3, 1143.0], [74.4, 1146.0], [74.5, 1148.0], [74.6, 1149.0], [74.7, 1151.0], [74.8, 1153.0], [74.9, 1157.0], [75.0, 1161.0], [75.1, 1162.0], [75.2, 1165.0], [75.3, 1170.0], [75.4, 1172.0], [75.5, 1174.0], [75.6, 1176.0], [75.7, 1180.0], [75.8, 1184.0], [75.9, 1186.0], [76.0, 1190.0], [76.1, 1192.0], [76.2, 1195.0], [76.3, 1197.0], [76.4, 1201.0], [76.5, 1203.0], [76.6, 1204.0], [76.7, 1208.0], [76.8, 1212.0], [76.9, 1215.0], [77.0, 1217.0], [77.1, 1218.0], [77.2, 1219.0], [77.3, 1222.0], [77.4, 1225.0], [77.5, 1229.0], [77.6, 1230.0], [77.7, 1232.0], [77.8, 1233.0], [77.9, 1235.0], [78.0, 1238.0], [78.1, 1239.0], [78.2, 1241.0], [78.3, 1241.0], [78.4, 1244.0], [78.5, 1248.0], [78.6, 1249.0], [78.7, 1251.0], [78.8, 1253.0], [78.9, 1254.0], [79.0, 1256.0], [79.1, 1259.0], [79.2, 1261.0], [79.3, 1262.0], [79.4, 1268.0], [79.5, 1271.0], [79.6, 1274.0], [79.7, 1275.0], [79.8, 1278.0], [79.9, 1281.0], [80.0, 1282.0], [80.1, 1286.0], [80.2, 1289.0], [80.3, 1293.0], [80.4, 1295.0], [80.5, 1296.0], [80.6, 1297.0], [80.7, 1301.0], [80.8, 1306.0], [80.9, 1309.0], [81.0, 1311.0], [81.1, 1316.0], [81.2, 1319.0], [81.3, 1320.0], [81.4, 1325.0], [81.5, 1326.0], [81.6, 1331.0], [81.7, 1332.0], [81.8, 1335.0], [81.9, 1338.0], [82.0, 1342.0], [82.1, 1345.0], [82.2, 1348.0], [82.3, 1349.0], [82.4, 1351.0], [82.5, 1355.0], [82.6, 1357.0], [82.7, 1359.0], [82.8, 1361.0], [82.9, 1362.0], [83.0, 1365.0], [83.1, 1367.0], [83.2, 1370.0], [83.3, 1373.0], [83.4, 1377.0], [83.5, 1379.0], [83.6, 1381.0], [83.7, 1382.0], [83.8, 1385.0], [83.9, 1387.0], [84.0, 1391.0], [84.1, 1394.0], [84.2, 1396.0], [84.3, 1399.0], [84.4, 1401.0], [84.5, 1404.0], [84.6, 1405.0], [84.7, 1408.0], [84.8, 1411.0], [84.9, 1413.0], [85.0, 1415.0], [85.1, 1416.0], [85.2, 1420.0], [85.3, 1421.0], [85.4, 1425.0], [85.5, 1427.0], [85.6, 1428.0], [85.7, 1430.0], [85.8, 1433.0], [85.9, 1438.0], [86.0, 1442.0], [86.1, 1443.0], [86.2, 1447.0], [86.3, 1455.0], [86.4, 1462.0], [86.5, 1466.0], [86.6, 1470.0], [86.7, 1475.0], [86.8, 1476.0], [86.9, 1479.0], [87.0, 1481.0], [87.1, 1484.0], [87.2, 1485.0], [87.3, 1490.0], [87.4, 1493.0], [87.5, 1495.0], [87.6, 1499.0], [87.7, 1504.0], [87.8, 1507.0], [87.9, 1513.0], [88.0, 1517.0], [88.1, 1519.0], [88.2, 1524.0], [88.3, 1528.0], [88.4, 1530.0], [88.5, 1537.0], [88.6, 1539.0], [88.7, 1550.0], [88.8, 1559.0], [88.9, 1566.0], [89.0, 1575.0], [89.1, 1578.0], [89.2, 1587.0], [89.3, 1598.0], [89.4, 1604.0], [89.5, 1610.0], [89.6, 1617.0], [89.7, 1620.0], [89.8, 1624.0], [89.9, 1635.0], [90.0, 1638.0], [90.1, 1656.0], [90.2, 1664.0], [90.3, 1671.0], [90.4, 1676.0], [90.5, 1685.0], [90.6, 1690.0], [90.7, 1692.0], [90.8, 1697.0], [90.9, 1700.0], [91.0, 1705.0], [91.1, 1712.0], [91.2, 1719.0], [91.3, 1726.0], [91.4, 1730.0], [91.5, 1740.0], [91.6, 1748.0], [91.7, 1756.0], [91.8, 1765.0], [91.9, 1775.0], [92.0, 1780.0], [92.1, 1795.0], [92.2, 1806.0], [92.3, 1811.0], [92.4, 1820.0], [92.5, 1823.0], [92.6, 1836.0], [92.7, 1853.0], [92.8, 1862.0], [92.9, 1877.0], [93.0, 1882.0], [93.1, 1891.0], [93.2, 1896.0], [93.3, 1911.0], [93.4, 1923.0], [93.5, 1935.0], [93.6, 1945.0], [93.7, 1958.0], [93.8, 1981.0], [93.9, 1991.0], [94.0, 2009.0], [94.1, 2020.0], [94.2, 2026.0], [94.3, 2042.0], [94.4, 2052.0], [94.5, 2062.0], [94.6, 2074.0], [94.7, 2086.0], [94.8, 2096.0], [94.9, 2113.0], [95.0, 2127.0], [95.1, 2134.0], [95.2, 2142.0], [95.3, 2155.0], [95.4, 2165.0], [95.5, 2176.0], [95.6, 2190.0], [95.7, 2213.0], [95.8, 2229.0], [95.9, 2245.0], [96.0, 2271.0], [96.1, 2273.0], [96.2, 2281.0], [96.3, 2300.0], [96.4, 2317.0], [96.5, 2337.0], [96.6, 2345.0], [96.7, 2359.0], [96.8, 2376.0], [96.9, 2390.0], [97.0, 2409.0], [97.1, 2423.0], [97.2, 2444.0], [97.3, 2467.0], [97.4, 2501.0], [97.5, 2520.0], [97.6, 2541.0], [97.7, 2555.0], [97.8, 2572.0], [97.9, 2599.0], [98.0, 2631.0], [98.1, 2678.0], [98.2, 2701.0], [98.3, 2744.0], [98.4, 2804.0], [98.5, 2849.0], [98.6, 2886.0], [98.7, 2945.0], [98.8, 2964.0], [98.9, 3010.0], [99.0, 3180.0], [99.1, 3238.0], [99.2, 3376.0], [99.3, 3414.0], [99.4, 3588.0], [99.5, 3694.0], [99.6, 4177.0], [99.7, 4583.0], [99.8, 4814.0], [99.9, 5332.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 852.0, "series": [{"data": [[0.0, 852.0], [600.0, 220.0], [700.0, 242.0], [800.0, 197.0], [900.0, 224.0], [1000.0, 220.0], [1100.0, 200.0], [1200.0, 225.0], [1300.0, 190.0], [1400.0, 171.0], [1500.0, 89.0], [1600.0, 79.0], [1700.0, 67.0], [1800.0, 57.0], [1900.0, 38.0], [2000.0, 44.0], [2100.0, 44.0], [2300.0, 36.0], [2200.0, 32.0], [2400.0, 22.0], [2500.0, 27.0], [2600.0, 13.0], [2700.0, 10.0], [2800.0, 13.0], [2900.0, 14.0], [3000.0, 3.0], [3100.0, 4.0], [3200.0, 7.0], [3300.0, 4.0], [3400.0, 6.0], [3500.0, 3.0], [3600.0, 6.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4100.0, 2.0], [4500.0, 4.0], [4600.0, 1.0], [4400.0, 2.0], [4800.0, 3.0], [4700.0, 1.0], [5100.0, 1.0], [5000.0, 1.0], [5300.0, 1.0], [5500.0, 2.0], [5700.0, 1.0], [6700.0, 2.0], [100.0, 560.0], [200.0, 480.0], [300.0, 292.0], [400.0, 246.0], [500.0, 228.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 642.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2436.0, "series": [{"data": [[0.0, 2436.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2112.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 642.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.4, "minX": 1.60440876E12, "maxY": 10.0, "series": [{"data": [[1.604409E12, 10.0], [1.60440918E12, 9.4], [1.60440912E12, 10.0], [1.60440882E12, 10.0], [1.60440876E12, 10.0], [1.60440894E12, 10.0], [1.60440888E12, 10.0], [1.60440906E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440918E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 220.0, "minX": 1.0, "maxY": 2702.0, "series": [{"data": [[8.0, 226.0], [4.0, 225.0], [2.0, 1505.0], [1.0, 2702.0], [9.0, 1608.0], [10.0, 753.4402624975872], [5.0, 1182.0], [6.0, 220.0], [3.0, 826.0], [7.0, 1475.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 754.0545279383427]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 571.4, "minX": 1.60440876E12, "maxY": 4507791.333333333, "series": [{"data": [[1.604409E12, 2988056.433333333], [1.60440918E12, 343416.7], [1.60440912E12, 3487673.0833333335], [1.60440882E12, 3215025.466666667], [1.60440876E12, 1476623.25], [1.60440894E12, 3771309.8333333335], [1.60440888E12, 4507791.333333333], [1.60440906E12, 4185611.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.604409E12, 5149.45], [1.60440918E12, 571.4], [1.60440912E12, 5889.466666666666], [1.60440882E12, 6314.5], [1.60440876E12, 1778.05], [1.60440894E12, 5746.766666666666], [1.60440888E12, 6290.633333333333], [1.60440906E12, 6837.066666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440918E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 653.9102844638949, "minX": 1.60440876E12, "maxY": 1115.8266666666666, "series": [{"data": [[1.604409E12, 841.6304044630401], [1.60440918E12, 1115.8266666666666], [1.60440912E12, 758.938303341903], [1.60440882E12, 681.0771001150746], [1.60440876E12, 1006.3591836734684], [1.60440894E12, 781.5111402359104], [1.60440888E12, 728.0723763570575], [1.60440906E12, 653.9102844638949]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440918E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 652.0842450765858, "minX": 1.60440876E12, "maxY": 1113.973333333334, "series": [{"data": [[1.604409E12, 839.9079497907939], [1.60440918E12, 1113.973333333334], [1.60440912E12, 757.1825192802056], [1.60440882E12, 679.368239355581], [1.60440876E12, 1003.5591836734695], [1.60440894E12, 779.2136304062911], [1.60440888E12, 725.4113389626061], [1.60440906E12, 652.0842450765858]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440918E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009846827133479211, "minX": 1.60440876E12, "maxY": 0.34693877551020413, "series": [{"data": [[1.604409E12, 0.026499302649930223], [1.60440918E12, 0.04], [1.60440912E12, 0.011568123393316183], [1.60440882E12, 0.017261219792865382], [1.60440876E12, 0.34693877551020413], [1.60440894E12, 0.02096985583224116], [1.60440888E12, 0.01688781664656213], [1.60440906E12, 0.009846827133479211]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440918E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60440876E12, "maxY": 6793.0, "series": [{"data": [[1.604409E12, 6793.0], [1.60440918E12, 3694.0], [1.60440912E12, 4047.0], [1.60440882E12, 5087.0], [1.60440876E12, 5162.0], [1.60440894E12, 4593.0], [1.60440888E12, 4765.0], [1.60440906E12, 4177.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.604409E12, 21.46199982881546], [1.60440918E12, 109.0], [1.60440912E12, 14.0], [1.60440882E12, 15.829999792575837], [1.60440876E12, 19.21399994134903], [1.60440894E12, 14.0], [1.60440888E12, 14.0], [1.60440906E12, 14.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.604409E12, 22.0], [1.60440918E12, 109.0], [1.60440912E12, 14.0], [1.60440882E12, 16.0], [1.60440876E12, 19.43540002346039], [1.60440894E12, 14.0], [1.60440888E12, 14.0], [1.60440906E12, 14.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.604409E12, 21.82099991440773], [1.60440918E12, 109.0], [1.60440912E12, 14.0], [1.60440882E12, 16.0], [1.60440876E12, 19.336999970674515], [1.60440894E12, 14.0], [1.60440888E12, 14.0], [1.60440906E12, 14.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.604409E12, 14.0], [1.60440918E12, 109.0], [1.60440912E12, 6.0], [1.60440882E12, 7.0], [1.60440876E12, 18.0], [1.60440894E12, 12.0], [1.60440888E12, 6.0], [1.60440906E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.604409E12, 663.0], [1.60440918E12, 923.0], [1.60440912E12, 629.0], [1.60440882E12, 477.0], [1.60440876E12, 796.0], [1.60440894E12, 627.0], [1.60440888E12, 546.0], [1.60440906E12, 349.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440918E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 21.0, "minX": 1.0, "maxY": 1420.0, "series": [{"data": [[2.0, 913.5], [32.0, 62.5], [34.0, 55.0], [35.0, 27.0], [36.0, 25.0], [38.0, 47.0], [40.0, 58.5], [43.0, 28.0], [47.0, 42.0], [3.0, 1203.0], [48.0, 46.5], [49.0, 53.5], [57.0, 42.0], [61.0, 28.0], [4.0, 1415.0], [76.0, 45.5], [5.0, 1420.0], [6.0, 1170.5], [7.0, 1201.0], [8.0, 1051.5], [9.0, 1026.0], [10.0, 830.5], [11.0, 785.0], [12.0, 797.0], [13.0, 731.0], [14.0, 581.0], [15.0, 657.0], [1.0, 1254.0], [16.0, 591.0], [17.0, 393.5], [18.0, 375.0], [19.0, 431.0], [20.0, 284.5], [21.0, 436.0], [22.0, 305.5], [23.0, 243.5], [24.0, 231.0], [25.0, 478.0], [26.0, 170.0], [27.0, 183.0], [29.0, 149.0], [31.0, 21.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 76.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 20.0, "minX": 1.0, "maxY": 1412.5, "series": [{"data": [[2.0, 912.0], [32.0, 62.5], [34.0, 54.5], [35.0, 26.0], [36.0, 25.0], [38.0, 47.0], [40.0, 58.0], [43.0, 28.0], [47.0, 41.0], [3.0, 1191.0], [48.0, 46.0], [49.0, 53.5], [57.0, 42.0], [61.0, 28.0], [4.0, 1412.5], [76.0, 45.0], [5.0, 1410.0], [6.0, 1169.5], [7.0, 1194.0], [8.0, 1050.0], [9.0, 1024.0], [10.0, 829.0], [11.0, 784.0], [12.0, 796.0], [13.0, 728.0], [14.0, 581.0], [15.0, 655.0], [1.0, 1242.0], [16.0, 590.5], [17.0, 392.5], [18.0, 373.0], [19.0, 430.0], [20.0, 283.0], [21.0, 434.0], [22.0, 305.5], [23.0, 243.0], [24.0, 230.5], [25.0, 474.0], [26.0, 170.0], [27.0, 182.0], [29.0, 148.5], [31.0, 20.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 76.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60440876E12, "maxY": 15.233333333333333, "series": [{"data": [[1.604409E12, 11.95], [1.60440918E12, 1.0833333333333333], [1.60440912E12, 12.966666666666667], [1.60440882E12, 14.483333333333333], [1.60440876E12, 4.25], [1.60440894E12, 12.716666666666667], [1.60440888E12, 13.816666666666666], [1.60440906E12, 15.233333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440918E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.60440876E12, "maxY": 15.233333333333333, "series": [{"data": [[1.604409E12, 11.95], [1.60440918E12, 1.25], [1.60440912E12, 12.966666666666667], [1.60440882E12, 14.483333333333333], [1.60440876E12, 4.083333333333333], [1.60440894E12, 12.716666666666667], [1.60440888E12, 13.816666666666666], [1.60440906E12, 15.233333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440918E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.60440876E12, "maxY": 15.233333333333333, "series": [{"data": [[1.604409E12, 11.95], [1.60440918E12, 1.25], [1.60440912E12, 12.966666666666667], [1.60440882E12, 14.483333333333333], [1.60440876E12, 4.083333333333333], [1.60440894E12, 12.716666666666667], [1.60440888E12, 13.816666666666666], [1.60440906E12, 15.233333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440918E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.60440876E12, "maxY": 15.233333333333333, "series": [{"data": [[1.604409E12, 11.95], [1.60440918E12, 1.25], [1.60440912E12, 12.966666666666667], [1.60440882E12, 14.483333333333333], [1.60440876E12, 4.083333333333333], [1.60440894E12, 12.716666666666667], [1.60440888E12, 13.816666666666666], [1.60440906E12, 15.233333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440918E12, "title": "Total Transactions Per Second"}},
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

