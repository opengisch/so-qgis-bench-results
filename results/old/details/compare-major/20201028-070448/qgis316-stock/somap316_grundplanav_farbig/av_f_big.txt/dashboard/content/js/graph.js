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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 5030.0, "series": [{"data": [[0.0, 6.0], [0.1, 6.0], [0.2, 7.0], [0.3, 7.0], [0.4, 7.0], [0.5, 7.0], [0.6, 10.0], [0.7, 10.0], [0.8, 10.0], [0.9, 12.0], [1.0, 13.0], [1.1, 17.0], [1.2, 17.0], [1.3, 17.0], [1.4, 19.0], [1.5, 19.0], [1.6, 19.0], [1.7, 21.0], [1.8, 21.0], [1.9, 21.0], [2.0, 21.0], [2.1, 22.0], [2.2, 22.0], [2.3, 22.0], [2.4, 22.0], [2.5, 22.0], [2.6, 24.0], [2.7, 24.0], [2.8, 25.0], [2.9, 27.0], [3.0, 27.0], [3.1, 27.0], [3.2, 29.0], [3.3, 32.0], [3.4, 32.0], [3.5, 34.0], [3.6, 34.0], [3.7, 37.0], [3.8, 37.0], [3.9, 37.0], [4.0, 42.0], [4.1, 50.0], [4.2, 50.0], [4.3, 54.0], [4.4, 63.0], [4.5, 93.0], [4.6, 93.0], [4.7, 113.0], [4.8, 116.0], [4.9, 121.0], [5.0, 121.0], [5.1, 122.0], [5.2, 123.0], [5.3, 123.0], [5.4, 124.0], [5.5, 128.0], [5.6, 128.0], [5.7, 128.0], [5.8, 129.0], [5.9, 129.0], [6.0, 130.0], [6.1, 130.0], [6.2, 131.0], [6.3, 131.0], [6.4, 133.0], [6.5, 133.0], [6.6, 136.0], [6.7, 136.0], [6.8, 136.0], [6.9, 136.0], [7.0, 136.0], [7.1, 139.0], [7.2, 139.0], [7.3, 140.0], [7.4, 141.0], [7.5, 142.0], [7.6, 142.0], [7.7, 143.0], [7.8, 145.0], [7.9, 150.0], [8.0, 150.0], [8.1, 152.0], [8.2, 152.0], [8.3, 153.0], [8.4, 153.0], [8.5, 153.0], [8.6, 154.0], [8.7, 154.0], [8.8, 156.0], [8.9, 156.0], [9.0, 158.0], [9.1, 158.0], [9.2, 158.0], [9.3, 159.0], [9.4, 159.0], [9.5, 159.0], [9.6, 159.0], [9.7, 162.0], [9.8, 162.0], [9.9, 162.0], [10.0, 162.0], [10.1, 163.0], [10.2, 163.0], [10.3, 163.0], [10.4, 165.0], [10.5, 167.0], [10.6, 167.0], [10.7, 169.0], [10.8, 169.0], [10.9, 170.0], [11.0, 170.0], [11.1, 170.0], [11.2, 171.0], [11.3, 172.0], [11.4, 172.0], [11.5, 173.0], [11.6, 173.0], [11.7, 173.0], [11.8, 175.0], [11.9, 175.0], [12.0, 175.0], [12.1, 175.0], [12.2, 175.0], [12.3, 176.0], [12.4, 178.0], [12.5, 178.0], [12.6, 179.0], [12.7, 179.0], [12.8, 180.0], [12.9, 180.0], [13.0, 180.0], [13.1, 181.0], [13.2, 183.0], [13.3, 183.0], [13.4, 183.0], [13.5, 185.0], [13.6, 185.0], [13.7, 187.0], [13.8, 190.0], [13.9, 195.0], [14.0, 195.0], [14.1, 200.0], [14.2, 201.0], [14.3, 202.0], [14.4, 202.0], [14.5, 204.0], [14.6, 204.0], [14.7, 207.0], [14.8, 207.0], [14.9, 214.0], [15.0, 219.0], [15.1, 219.0], [15.2, 234.0], [15.3, 234.0], [15.4, 235.0], [15.5, 235.0], [15.6, 238.0], [15.7, 240.0], [15.8, 240.0], [15.9, 240.0], [16.0, 241.0], [16.1, 241.0], [16.2, 243.0], [16.3, 243.0], [16.4, 246.0], [16.5, 247.0], [16.6, 248.0], [16.7, 248.0], [16.8, 249.0], [16.9, 249.0], [17.0, 249.0], [17.1, 250.0], [17.2, 250.0], [17.3, 250.0], [17.4, 250.0], [17.5, 251.0], [17.6, 251.0], [17.7, 254.0], [17.8, 254.0], [17.9, 254.0], [18.0, 255.0], [18.1, 257.0], [18.2, 257.0], [18.3, 258.0], [18.4, 258.0], [18.5, 258.0], [18.6, 258.0], [18.7, 259.0], [18.8, 259.0], [18.9, 259.0], [19.0, 260.0], [19.1, 260.0], [19.2, 261.0], [19.3, 261.0], [19.4, 261.0], [19.5, 261.0], [19.6, 262.0], [19.7, 262.0], [19.8, 262.0], [19.9, 262.0], [20.0, 262.0], [20.1, 262.0], [20.2, 263.0], [20.3, 263.0], [20.4, 263.0], [20.5, 264.0], [20.6, 264.0], [20.7, 264.0], [20.8, 264.0], [20.9, 265.0], [21.0, 265.0], [21.1, 266.0], [21.2, 266.0], [21.3, 266.0], [21.4, 266.0], [21.5, 267.0], [21.6, 267.0], [21.7, 267.0], [21.8, 267.0], [21.9, 267.0], [22.0, 268.0], [22.1, 268.0], [22.2, 268.0], [22.3, 268.0], [22.4, 269.0], [22.5, 270.0], [22.6, 270.0], [22.7, 270.0], [22.8, 270.0], [22.9, 271.0], [23.0, 271.0], [23.1, 271.0], [23.2, 273.0], [23.3, 273.0], [23.4, 273.0], [23.5, 273.0], [23.6, 273.0], [23.7, 274.0], [23.8, 274.0], [23.9, 274.0], [24.0, 275.0], [24.1, 275.0], [24.2, 275.0], [24.3, 275.0], [24.4, 277.0], [24.5, 277.0], [24.6, 277.0], [24.7, 277.0], [24.8, 278.0], [24.9, 279.0], [25.0, 279.0], [25.1, 279.0], [25.2, 279.0], [25.3, 279.0], [25.4, 279.0], [25.5, 279.0], [25.6, 279.0], [25.7, 279.0], [25.8, 280.0], [25.9, 282.0], [26.0, 283.0], [26.1, 283.0], [26.2, 283.0], [26.3, 284.0], [26.4, 284.0], [26.5, 284.0], [26.6, 285.0], [26.7, 286.0], [26.8, 286.0], [26.9, 286.0], [27.0, 288.0], [27.1, 288.0], [27.2, 288.0], [27.3, 288.0], [27.4, 289.0], [27.5, 290.0], [27.6, 290.0], [27.7, 291.0], [27.8, 291.0], [27.9, 291.0], [28.0, 291.0], [28.1, 293.0], [28.2, 293.0], [28.3, 294.0], [28.4, 294.0], [28.5, 296.0], [28.6, 298.0], [28.7, 298.0], [28.8, 299.0], [28.9, 300.0], [29.0, 304.0], [29.1, 304.0], [29.2, 305.0], [29.3, 307.0], [29.4, 308.0], [29.5, 308.0], [29.6, 311.0], [29.7, 313.0], [29.8, 316.0], [29.9, 316.0], [30.0, 319.0], [30.1, 321.0], [30.2, 321.0], [30.3, 322.0], [30.4, 323.0], [30.5, 325.0], [30.6, 325.0], [30.7, 326.0], [30.8, 326.0], [30.9, 327.0], [31.0, 327.0], [31.1, 328.0], [31.2, 329.0], [31.3, 330.0], [31.4, 330.0], [31.5, 331.0], [31.6, 333.0], [31.7, 333.0], [31.8, 334.0], [31.9, 338.0], [32.0, 338.0], [32.1, 338.0], [32.2, 339.0], [32.3, 344.0], [32.4, 345.0], [32.5, 345.0], [32.6, 347.0], [32.7, 350.0], [32.8, 351.0], [32.9, 351.0], [33.0, 352.0], [33.1, 352.0], [33.2, 352.0], [33.3, 352.0], [33.4, 357.0], [33.5, 364.0], [33.6, 364.0], [33.7, 372.0], [33.8, 373.0], [33.9, 375.0], [34.0, 375.0], [34.1, 377.0], [34.2, 379.0], [34.3, 379.0], [34.4, 379.0], [34.5, 380.0], [34.6, 382.0], [34.7, 385.0], [34.8, 385.0], [34.9, 388.0], [35.0, 388.0], [35.1, 388.0], [35.2, 390.0], [35.3, 390.0], [35.4, 395.0], [35.5, 395.0], [35.6, 396.0], [35.7, 404.0], [35.8, 407.0], [35.9, 407.0], [36.0, 408.0], [36.1, 410.0], [36.2, 412.0], [36.3, 412.0], [36.4, 412.0], [36.5, 416.0], [36.6, 420.0], [36.7, 420.0], [36.8, 421.0], [36.9, 423.0], [37.0, 423.0], [37.1, 423.0], [37.2, 423.0], [37.3, 425.0], [37.4, 425.0], [37.5, 429.0], [37.6, 430.0], [37.7, 431.0], [37.8, 431.0], [37.9, 433.0], [38.0, 433.0], [38.1, 435.0], [38.2, 435.0], [38.3, 435.0], [38.4, 436.0], [38.5, 436.0], [38.6, 438.0], [38.7, 438.0], [38.8, 440.0], [38.9, 440.0], [39.0, 441.0], [39.1, 442.0], [39.2, 444.0], [39.3, 444.0], [39.4, 445.0], [39.5, 445.0], [39.6, 446.0], [39.7, 446.0], [39.8, 453.0], [39.9, 455.0], [40.0, 455.0], [40.1, 455.0], [40.2, 459.0], [40.3, 462.0], [40.4, 462.0], [40.5, 462.0], [40.6, 467.0], [40.7, 469.0], [40.8, 469.0], [40.9, 470.0], [41.0, 470.0], [41.1, 473.0], [41.2, 473.0], [41.3, 477.0], [41.4, 481.0], [41.5, 482.0], [41.6, 482.0], [41.7, 487.0], [41.8, 490.0], [41.9, 490.0], [42.0, 493.0], [42.1, 494.0], [42.2, 495.0], [42.3, 495.0], [42.4, 502.0], [42.5, 505.0], [42.6, 507.0], [42.7, 507.0], [42.8, 510.0], [42.9, 511.0], [43.0, 516.0], [43.1, 516.0], [43.2, 516.0], [43.3, 517.0], [43.4, 517.0], [43.5, 519.0], [43.6, 521.0], [43.7, 521.0], [43.8, 521.0], [43.9, 522.0], [44.0, 522.0], [44.1, 523.0], [44.2, 523.0], [44.3, 524.0], [44.4, 530.0], [44.5, 533.0], [44.6, 533.0], [44.7, 536.0], [44.8, 536.0], [44.9, 537.0], [45.0, 537.0], [45.1, 539.0], [45.2, 541.0], [45.3, 541.0], [45.4, 543.0], [45.5, 544.0], [45.6, 545.0], [45.7, 545.0], [45.8, 545.0], [45.9, 545.0], [46.0, 547.0], [46.1, 547.0], [46.2, 547.0], [46.3, 549.0], [46.4, 550.0], [46.5, 550.0], [46.6, 552.0], [46.7, 556.0], [46.8, 556.0], [46.9, 557.0], [47.0, 559.0], [47.1, 559.0], [47.2, 559.0], [47.3, 559.0], [47.4, 559.0], [47.5, 560.0], [47.6, 560.0], [47.7, 563.0], [47.8, 565.0], [47.9, 566.0], [48.0, 566.0], [48.1, 567.0], [48.2, 569.0], [48.3, 569.0], [48.4, 569.0], [48.5, 571.0], [48.6, 574.0], [48.7, 574.0], [48.8, 575.0], [48.9, 576.0], [49.0, 577.0], [49.1, 577.0], [49.2, 579.0], [49.3, 579.0], [49.4, 581.0], [49.5, 581.0], [49.6, 583.0], [49.7, 585.0], [49.8, 586.0], [49.9, 586.0], [50.0, 591.0], [50.1, 597.0], [50.2, 597.0], [50.3, 598.0], [50.4, 602.0], [50.5, 604.0], [50.6, 604.0], [50.7, 608.0], [50.8, 611.0], [50.9, 614.0], [51.0, 614.0], [51.1, 618.0], [51.2, 619.0], [51.3, 621.0], [51.4, 621.0], [51.5, 622.0], [51.6, 626.0], [51.7, 626.0], [51.8, 626.0], [51.9, 627.0], [52.0, 627.0], [52.1, 627.0], [52.2, 627.0], [52.3, 633.0], [52.4, 640.0], [52.5, 640.0], [52.6, 641.0], [52.7, 645.0], [52.8, 648.0], [52.9, 648.0], [53.0, 654.0], [53.1, 654.0], [53.2, 656.0], [53.3, 656.0], [53.4, 658.0], [53.5, 670.0], [53.6, 670.0], [53.7, 672.0], [53.8, 677.0], [53.9, 681.0], [54.0, 681.0], [54.1, 682.0], [54.2, 683.0], [54.3, 683.0], [54.4, 683.0], [54.5, 690.0], [54.6, 694.0], [54.7, 695.0], [54.8, 695.0], [54.9, 702.0], [55.0, 704.0], [55.1, 704.0], [55.2, 709.0], [55.3, 711.0], [55.4, 717.0], [55.5, 717.0], [55.6, 719.0], [55.7, 721.0], [55.8, 726.0], [55.9, 726.0], [56.0, 736.0], [56.1, 738.0], [56.2, 740.0], [56.3, 740.0], [56.4, 751.0], [56.5, 755.0], [56.6, 764.0], [56.7, 764.0], [56.8, 769.0], [56.9, 770.0], [57.0, 770.0], [57.1, 771.0], [57.2, 778.0], [57.3, 778.0], [57.4, 778.0], [57.5, 781.0], [57.6, 783.0], [57.7, 784.0], [57.8, 784.0], [57.9, 786.0], [58.0, 797.0], [58.1, 800.0], [58.2, 800.0], [58.3, 800.0], [58.4, 803.0], [58.5, 803.0], [58.6, 804.0], [58.7, 807.0], [58.8, 818.0], [58.9, 818.0], [59.0, 828.0], [59.1, 828.0], [59.2, 832.0], [59.3, 832.0], [59.4, 838.0], [59.5, 839.0], [59.6, 840.0], [59.7, 840.0], [59.8, 844.0], [59.9, 845.0], [60.0, 852.0], [60.1, 852.0], [60.2, 873.0], [60.3, 877.0], [60.4, 877.0], [60.5, 878.0], [60.6, 880.0], [60.7, 880.0], [60.8, 880.0], [60.9, 882.0], [61.0, 883.0], [61.1, 890.0], [61.2, 890.0], [61.3, 891.0], [61.4, 892.0], [61.5, 898.0], [61.6, 898.0], [61.7, 904.0], [61.8, 910.0], [61.9, 910.0], [62.0, 912.0], [62.1, 912.0], [62.2, 912.0], [62.3, 912.0], [62.4, 912.0], [62.5, 913.0], [62.6, 913.0], [62.7, 913.0], [62.8, 914.0], [62.9, 917.0], [63.0, 919.0], [63.1, 919.0], [63.2, 921.0], [63.3, 923.0], [63.4, 923.0], [63.5, 927.0], [63.6, 930.0], [63.7, 932.0], [63.8, 932.0], [63.9, 935.0], [64.0, 936.0], [64.1, 937.0], [64.2, 937.0], [64.3, 937.0], [64.4, 941.0], [64.5, 943.0], [64.6, 943.0], [64.7, 946.0], [64.8, 949.0], [64.9, 954.0], [65.0, 954.0], [65.1, 958.0], [65.2, 959.0], [65.3, 959.0], [65.4, 960.0], [65.5, 962.0], [65.6, 971.0], [65.7, 971.0], [65.8, 974.0], [65.9, 985.0], [66.0, 997.0], [66.1, 997.0], [66.2, 1006.0], [66.3, 1014.0], [66.4, 1016.0], [66.5, 1016.0], [66.6, 1020.0], [66.7, 1027.0], [66.8, 1027.0], [66.9, 1028.0], [67.0, 1034.0], [67.1, 1035.0], [67.2, 1035.0], [67.3, 1036.0], [67.4, 1039.0], [67.5, 1041.0], [67.6, 1041.0], [67.7, 1042.0], [67.8, 1042.0], [67.9, 1044.0], [68.0, 1044.0], [68.1, 1044.0], [68.2, 1052.0], [68.3, 1055.0], [68.4, 1055.0], [68.5, 1055.0], [68.6, 1056.0], [68.7, 1056.0], [68.8, 1057.0], [68.9, 1057.0], [69.0, 1060.0], [69.1, 1060.0], [69.2, 1061.0], [69.3, 1061.0], [69.4, 1062.0], [69.5, 1062.0], [69.6, 1062.0], [69.7, 1065.0], [69.8, 1068.0], [69.9, 1068.0], [70.0, 1069.0], [70.1, 1070.0], [70.2, 1070.0], [70.3, 1076.0], [70.4, 1084.0], [70.5, 1085.0], [70.6, 1085.0], [70.7, 1086.0], [70.8, 1087.0], [70.9, 1089.0], [71.0, 1089.0], [71.1, 1091.0], [71.2, 1091.0], [71.3, 1091.0], [71.4, 1091.0], [71.5, 1092.0], [71.6, 1095.0], [71.7, 1095.0], [71.8, 1096.0], [71.9, 1097.0], [72.0, 1112.0], [72.1, 1112.0], [72.2, 1112.0], [72.3, 1114.0], [72.4, 1114.0], [72.5, 1114.0], [72.6, 1117.0], [72.7, 1117.0], [72.8, 1121.0], [72.9, 1121.0], [73.0, 1126.0], [73.1, 1128.0], [73.2, 1128.0], [73.3, 1128.0], [73.4, 1128.0], [73.5, 1133.0], [73.6, 1133.0], [73.7, 1134.0], [73.8, 1142.0], [73.9, 1147.0], [74.0, 1147.0], [74.1, 1152.0], [74.2, 1153.0], [74.3, 1153.0], [74.4, 1153.0], [74.5, 1153.0], [74.6, 1155.0], [74.7, 1158.0], [74.8, 1158.0], [74.9, 1158.0], [75.0, 1159.0], [75.1, 1159.0], [75.2, 1160.0], [75.3, 1163.0], [75.4, 1167.0], [75.5, 1167.0], [75.6, 1169.0], [75.7, 1172.0], [75.8, 1172.0], [75.9, 1172.0], [76.0, 1173.0], [76.1, 1175.0], [76.2, 1182.0], [76.3, 1182.0], [76.4, 1184.0], [76.5, 1184.0], [76.6, 1189.0], [76.7, 1189.0], [76.8, 1190.0], [76.9, 1195.0], [77.0, 1195.0], [77.1, 1196.0], [77.2, 1196.0], [77.3, 1199.0], [77.4, 1199.0], [77.5, 1199.0], [77.6, 1201.0], [77.7, 1204.0], [77.8, 1204.0], [77.9, 1204.0], [78.0, 1205.0], [78.1, 1207.0], [78.2, 1207.0], [78.3, 1210.0], [78.4, 1217.0], [78.5, 1217.0], [78.6, 1217.0], [78.7, 1218.0], [78.8, 1223.0], [78.9, 1223.0], [79.0, 1226.0], [79.1, 1228.0], [79.2, 1233.0], [79.3, 1233.0], [79.4, 1234.0], [79.5, 1235.0], [79.6, 1239.0], [79.7, 1239.0], [79.8, 1240.0], [79.9, 1249.0], [80.0, 1251.0], [80.1, 1251.0], [80.2, 1252.0], [80.3, 1254.0], [80.4, 1254.0], [80.5, 1254.0], [80.6, 1257.0], [80.7, 1257.0], [80.8, 1257.0], [80.9, 1259.0], [81.0, 1259.0], [81.1, 1266.0], [81.2, 1266.0], [81.3, 1267.0], [81.4, 1279.0], [81.5, 1280.0], [81.6, 1280.0], [81.7, 1290.0], [81.8, 1296.0], [81.9, 1296.0], [82.0, 1299.0], [82.1, 1301.0], [82.2, 1304.0], [82.3, 1304.0], [82.4, 1310.0], [82.5, 1311.0], [82.6, 1312.0], [82.7, 1312.0], [82.8, 1313.0], [82.9, 1316.0], [83.0, 1319.0], [83.1, 1319.0], [83.2, 1323.0], [83.3, 1327.0], [83.4, 1327.0], [83.5, 1327.0], [83.6, 1345.0], [83.7, 1347.0], [83.8, 1347.0], [83.9, 1350.0], [84.0, 1351.0], [84.1, 1352.0], [84.2, 1352.0], [84.3, 1353.0], [84.4, 1354.0], [84.5, 1356.0], [84.6, 1356.0], [84.7, 1357.0], [84.8, 1358.0], [84.9, 1360.0], [85.0, 1360.0], [85.1, 1360.0], [85.2, 1363.0], [85.3, 1363.0], [85.4, 1366.0], [85.5, 1367.0], [85.6, 1368.0], [85.7, 1368.0], [85.8, 1371.0], [85.9, 1376.0], [86.0, 1377.0], [86.1, 1377.0], [86.2, 1379.0], [86.3, 1380.0], [86.4, 1386.0], [86.5, 1386.0], [86.6, 1386.0], [86.7, 1388.0], [86.8, 1388.0], [86.9, 1391.0], [87.0, 1398.0], [87.1, 1399.0], [87.2, 1399.0], [87.3, 1401.0], [87.4, 1402.0], [87.5, 1404.0], [87.6, 1404.0], [87.7, 1405.0], [87.8, 1409.0], [87.9, 1412.0], [88.0, 1412.0], [88.1, 1417.0], [88.2, 1419.0], [88.3, 1423.0], [88.4, 1423.0], [88.5, 1429.0], [88.6, 1435.0], [88.7, 1435.0], [88.8, 1439.0], [88.9, 1446.0], [89.0, 1448.0], [89.1, 1448.0], [89.2, 1449.0], [89.3, 1451.0], [89.4, 1456.0], [89.5, 1456.0], [89.6, 1457.0], [89.7, 1461.0], [89.8, 1462.0], [89.9, 1462.0], [90.0, 1465.0], [90.1, 1466.0], [90.2, 1466.0], [90.3, 1467.0], [90.4, 1468.0], [90.5, 1471.0], [90.6, 1471.0], [90.7, 1473.0], [90.8, 1477.0], [90.9, 1479.0], [91.0, 1479.0], [91.1, 1486.0], [91.2, 1489.0], [91.3, 1492.0], [91.4, 1492.0], [91.5, 1493.0], [91.6, 1498.0], [91.7, 1498.0], [91.8, 1502.0], [91.9, 1510.0], [92.0, 1510.0], [92.1, 1510.0], [92.2, 1524.0], [92.3, 1527.0], [92.4, 1543.0], [92.5, 1543.0], [92.6, 1545.0], [92.7, 1547.0], [92.8, 1547.0], [92.9, 1547.0], [93.0, 1549.0], [93.1, 1554.0], [93.2, 1555.0], [93.3, 1555.0], [93.4, 1563.0], [93.5, 1572.0], [93.6, 1572.0], [93.7, 1584.0], [93.8, 1587.0], [93.9, 1592.0], [94.0, 1592.0], [94.1, 1601.0], [94.2, 1603.0], [94.3, 1610.0], [94.4, 1610.0], [94.5, 1621.0], [94.6, 1639.0], [94.7, 1645.0], [94.8, 1645.0], [94.9, 1649.0], [95.0, 1650.0], [95.1, 1650.0], [95.2, 1652.0], [95.3, 1673.0], [95.4, 1684.0], [95.5, 1684.0], [95.6, 1691.0], [95.7, 1691.0], [95.8, 1721.0], [95.9, 1721.0], [96.0, 1727.0], [96.1, 1775.0], [96.2, 1815.0], [96.3, 1815.0], [96.4, 1824.0], [96.5, 1880.0], [96.6, 1887.0], [96.7, 1887.0], [96.8, 1936.0], [96.9, 1972.0], [97.0, 1972.0], [97.1, 1994.0], [97.2, 2019.0], [97.3, 2212.0], [97.4, 2212.0], [97.5, 2237.0], [97.6, 2368.0], [97.7, 2380.0], [97.8, 2380.0], [97.9, 2415.0], [98.0, 2623.0], [98.1, 2634.0], [98.2, 2634.0], [98.3, 2661.0], [98.4, 2672.0], [98.5, 2672.0], [98.6, 2726.0], [98.7, 2779.0], [98.8, 2783.0], [98.9, 2783.0], [99.0, 2879.0], [99.1, 3094.0], [99.2, 3204.0], [99.3, 3204.0], [99.4, 3387.0], [99.5, 3423.0], [99.6, 3539.0], [99.7, 3539.0], [99.8, 4092.0], [99.9, 5030.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 109.0, "series": [{"data": [[0.0, 34.0], [600.0, 33.0], [700.0, 24.0], [800.0, 26.0], [900.0, 33.0], [1000.0, 43.0], [1100.0, 41.0], [1200.0, 33.0], [1300.0, 38.0], [1400.0, 33.0], [1500.0, 17.0], [100.0, 69.0], [1600.0, 13.0], [1700.0, 3.0], [1800.0, 4.0], [1900.0, 3.0], [2000.0, 1.0], [2200.0, 2.0], [2300.0, 2.0], [2400.0, 1.0], [2600.0, 4.0], [2700.0, 3.0], [2800.0, 1.0], [3000.0, 1.0], [3300.0, 1.0], [200.0, 109.0], [3200.0, 1.0], [3400.0, 1.0], [3500.0, 1.0], [4000.0, 1.0], [300.0, 50.0], [5000.0, 1.0], [400.0, 49.0], [500.0, 59.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 61.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 363.0, "series": [{"data": [[0.0, 311.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 363.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 61.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.92156862745098, "minX": 1.60387134E12, "maxY": 10.0, "series": [{"data": [[1.6038714E12, 9.92156862745098], [1.60387134E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038714E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 270.0, "minX": 1.0, "maxY": 2415.0, "series": [{"data": [[8.0, 277.0], [4.0, 597.0], [1.0, 1489.0], [9.0, 270.0], [10.0, 762.2396694214888], [5.0, 930.0], [6.0, 1366.0], [3.0, 2057.0], [7.0, 2415.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421766, 768.4952380952394]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1317.0166666666667, "minX": 1.60387134E12, "maxY": 1285027.35, "series": [{"data": [[1.6038714E12, 1285027.35], [1.60387134E12, 550523.1333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6038714E12, 4206.016666666666], [1.60387134E12, 1317.0166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038714E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 715.7985739750444, "minX": 1.60387134E12, "maxY": 938.3965517241381, "series": [{"data": [[1.6038714E12, 715.7985739750444], [1.60387134E12, 938.3965517241381]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038714E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 714.7344028520499, "minX": 1.60387134E12, "maxY": 937.1034482758618, "series": [{"data": [[1.6038714E12, 714.7344028520499], [1.60387134E12, 937.1034482758618]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038714E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008912655971479503, "minX": 1.60387134E12, "maxY": 0.5287356321839082, "series": [{"data": [[1.6038714E12, 0.008912655971479503], [1.60387134E12, 0.5287356321839082]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038714E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60387134E12, "maxY": 5030.0, "series": [{"data": [[1.6038714E12, 4092.0], [1.60387134E12, 5030.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6038714E12, 12.057999866008759], [1.60387134E12, 10.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6038714E12, 12.563800053596497], [1.60387134E12, 10.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6038714E12, 12.338999933004379], [1.60387134E12, 10.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6038714E12, 6.0], [1.60387134E12, 10.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6038714E12, 559.0], [1.60387134E12, 762.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038714E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 185.0, "minX": 1.0, "maxY": 1489.0, "series": [{"data": [[9.0, 959.0], [10.0, 923.5], [11.0, 1055.0], [12.0, 1072.0], [13.0, 715.5], [14.0, 406.5], [15.0, 527.5], [16.0, 317.5], [1.0, 1489.0], [17.0, 274.0], [18.0, 473.5], [20.0, 522.0], [21.0, 542.0], [6.0, 713.5], [24.0, 258.5], [27.0, 277.0], [28.0, 185.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 184.5, "minX": 1.0, "maxY": 1489.0, "series": [{"data": [[9.0, 959.0], [10.0, 922.5], [11.0, 1047.0], [12.0, 1071.5], [13.0, 714.0], [14.0, 406.5], [15.0, 527.0], [16.0, 317.5], [1.0, 1489.0], [17.0, 274.0], [18.0, 473.0], [20.0, 521.5], [21.0, 540.5], [6.0, 712.0], [24.0, 257.5], [27.0, 277.0], [28.0, 184.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.066666666666667, "minX": 1.60387134E12, "maxY": 9.183333333333334, "series": [{"data": [[1.6038714E12, 9.183333333333334], [1.60387134E12, 3.066666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038714E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.9, "minX": 1.60387134E12, "maxY": 9.35, "series": [{"data": [[1.6038714E12, 9.35], [1.60387134E12, 2.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038714E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.9, "minX": 1.60387134E12, "maxY": 9.35, "series": [{"data": [[1.6038714E12, 9.35], [1.60387134E12, 2.9]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038714E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.9, "minX": 1.60387134E12, "maxY": 9.35, "series": [{"data": [[1.6038714E12, 9.35], [1.60387134E12, 2.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038714E12, "title": "Total Transactions Per Second"}},
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

