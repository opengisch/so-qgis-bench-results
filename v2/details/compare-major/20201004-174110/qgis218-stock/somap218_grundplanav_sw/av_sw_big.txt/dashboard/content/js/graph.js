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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 90095.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 5.0], [0.5, 5.0], [0.6, 5.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 7.0], [1.2, 7.0], [1.3, 8.0], [1.4, 9.0], [1.5, 11.0], [1.6, 13.0], [1.7, 13.0], [1.8, 17.0], [1.9, 25.0], [2.0, 42.0], [2.1, 49.0], [2.2, 94.0], [2.3, 121.0], [2.4, 137.0], [2.5, 140.0], [2.6, 146.0], [2.7, 152.0], [2.8, 186.0], [2.9, 226.0], [3.0, 233.0], [3.1, 235.0], [3.2, 238.0], [3.3, 240.0], [3.4, 241.0], [3.5, 242.0], [3.6, 244.0], [3.7, 244.0], [3.8, 245.0], [3.9, 246.0], [4.0, 247.0], [4.1, 248.0], [4.2, 249.0], [4.3, 250.0], [4.4, 252.0], [4.5, 253.0], [4.6, 255.0], [4.7, 256.0], [4.8, 256.0], [4.9, 258.0], [5.0, 260.0], [5.1, 261.0], [5.2, 262.0], [5.3, 263.0], [5.4, 263.0], [5.5, 266.0], [5.6, 267.0], [5.7, 268.0], [5.8, 270.0], [5.9, 271.0], [6.0, 272.0], [6.1, 273.0], [6.2, 273.0], [6.3, 274.0], [6.4, 275.0], [6.5, 275.0], [6.6, 276.0], [6.7, 276.0], [6.8, 277.0], [6.9, 278.0], [7.0, 278.0], [7.1, 279.0], [7.2, 279.0], [7.3, 280.0], [7.4, 280.0], [7.5, 281.0], [7.6, 281.0], [7.7, 282.0], [7.8, 282.0], [7.9, 283.0], [8.0, 283.0], [8.1, 283.0], [8.2, 284.0], [8.3, 284.0], [8.4, 284.0], [8.5, 285.0], [8.6, 285.0], [8.7, 285.0], [8.8, 285.0], [8.9, 286.0], [9.0, 286.0], [9.1, 286.0], [9.2, 287.0], [9.3, 287.0], [9.4, 287.0], [9.5, 288.0], [9.6, 289.0], [9.7, 289.0], [9.8, 289.0], [9.9, 290.0], [10.0, 290.0], [10.1, 291.0], [10.2, 291.0], [10.3, 292.0], [10.4, 293.0], [10.5, 293.0], [10.6, 293.0], [10.7, 293.0], [10.8, 294.0], [10.9, 295.0], [11.0, 295.0], [11.1, 296.0], [11.2, 296.0], [11.3, 297.0], [11.4, 297.0], [11.5, 298.0], [11.6, 298.0], [11.7, 298.0], [11.8, 299.0], [11.9, 299.0], [12.0, 300.0], [12.1, 300.0], [12.2, 301.0], [12.3, 301.0], [12.4, 303.0], [12.5, 303.0], [12.6, 304.0], [12.7, 305.0], [12.8, 305.0], [12.9, 305.0], [13.0, 306.0], [13.1, 307.0], [13.2, 307.0], [13.3, 308.0], [13.4, 308.0], [13.5, 309.0], [13.6, 310.0], [13.7, 310.0], [13.8, 310.0], [13.9, 311.0], [14.0, 311.0], [14.1, 312.0], [14.2, 312.0], [14.3, 313.0], [14.4, 314.0], [14.5, 314.0], [14.6, 315.0], [14.7, 316.0], [14.8, 316.0], [14.9, 317.0], [15.0, 318.0], [15.1, 318.0], [15.2, 318.0], [15.3, 319.0], [15.4, 320.0], [15.5, 320.0], [15.6, 321.0], [15.7, 322.0], [15.8, 322.0], [15.9, 323.0], [16.0, 323.0], [16.1, 324.0], [16.2, 325.0], [16.3, 325.0], [16.4, 326.0], [16.5, 326.0], [16.6, 327.0], [16.7, 327.0], [16.8, 328.0], [16.9, 329.0], [17.0, 330.0], [17.1, 331.0], [17.2, 331.0], [17.3, 332.0], [17.4, 332.0], [17.5, 333.0], [17.6, 333.0], [17.7, 334.0], [17.8, 335.0], [17.9, 336.0], [18.0, 336.0], [18.1, 337.0], [18.2, 337.0], [18.3, 338.0], [18.4, 339.0], [18.5, 339.0], [18.6, 339.0], [18.7, 340.0], [18.8, 341.0], [18.9, 342.0], [19.0, 342.0], [19.1, 343.0], [19.2, 343.0], [19.3, 345.0], [19.4, 345.0], [19.5, 347.0], [19.6, 347.0], [19.7, 348.0], [19.8, 348.0], [19.9, 350.0], [20.0, 350.0], [20.1, 351.0], [20.2, 351.0], [20.3, 352.0], [20.4, 353.0], [20.5, 353.0], [20.6, 354.0], [20.7, 355.0], [20.8, 355.0], [20.9, 356.0], [21.0, 357.0], [21.1, 358.0], [21.2, 358.0], [21.3, 359.0], [21.4, 359.0], [21.5, 359.0], [21.6, 360.0], [21.7, 360.0], [21.8, 361.0], [21.9, 361.0], [22.0, 362.0], [22.1, 363.0], [22.2, 363.0], [22.3, 363.0], [22.4, 364.0], [22.5, 364.0], [22.6, 365.0], [22.7, 366.0], [22.8, 366.0], [22.9, 367.0], [23.0, 368.0], [23.1, 368.0], [23.2, 368.0], [23.3, 369.0], [23.4, 369.0], [23.5, 369.0], [23.6, 370.0], [23.7, 370.0], [23.8, 370.0], [23.9, 371.0], [24.0, 371.0], [24.1, 371.0], [24.2, 372.0], [24.3, 372.0], [24.4, 373.0], [24.5, 373.0], [24.6, 374.0], [24.7, 374.0], [24.8, 375.0], [24.9, 375.0], [25.0, 376.0], [25.1, 377.0], [25.2, 377.0], [25.3, 377.0], [25.4, 378.0], [25.5, 378.0], [25.6, 379.0], [25.7, 379.0], [25.8, 380.0], [25.9, 381.0], [26.0, 381.0], [26.1, 381.0], [26.2, 382.0], [26.3, 382.0], [26.4, 383.0], [26.5, 384.0], [26.6, 384.0], [26.7, 385.0], [26.8, 386.0], [26.9, 386.0], [27.0, 387.0], [27.1, 387.0], [27.2, 388.0], [27.3, 388.0], [27.4, 388.0], [27.5, 389.0], [27.6, 390.0], [27.7, 390.0], [27.8, 390.0], [27.9, 391.0], [28.0, 392.0], [28.1, 393.0], [28.2, 394.0], [28.3, 394.0], [28.4, 395.0], [28.5, 395.0], [28.6, 396.0], [28.7, 397.0], [28.8, 397.0], [28.9, 398.0], [29.0, 399.0], [29.1, 400.0], [29.2, 400.0], [29.3, 401.0], [29.4, 402.0], [29.5, 403.0], [29.6, 404.0], [29.7, 404.0], [29.8, 404.0], [29.9, 406.0], [30.0, 406.0], [30.1, 406.0], [30.2, 408.0], [30.3, 408.0], [30.4, 409.0], [30.5, 409.0], [30.6, 410.0], [30.7, 411.0], [30.8, 411.0], [30.9, 412.0], [31.0, 413.0], [31.1, 414.0], [31.2, 415.0], [31.3, 415.0], [31.4, 416.0], [31.5, 416.0], [31.6, 417.0], [31.7, 417.0], [31.8, 418.0], [31.9, 419.0], [32.0, 419.0], [32.1, 420.0], [32.2, 421.0], [32.3, 422.0], [32.4, 423.0], [32.5, 424.0], [32.6, 424.0], [32.7, 425.0], [32.8, 426.0], [32.9, 427.0], [33.0, 428.0], [33.1, 429.0], [33.2, 430.0], [33.3, 431.0], [33.4, 432.0], [33.5, 433.0], [33.6, 433.0], [33.7, 434.0], [33.8, 434.0], [33.9, 435.0], [34.0, 436.0], [34.1, 436.0], [34.2, 437.0], [34.3, 438.0], [34.4, 439.0], [34.5, 441.0], [34.6, 442.0], [34.7, 442.0], [34.8, 443.0], [34.9, 444.0], [35.0, 445.0], [35.1, 447.0], [35.2, 447.0], [35.3, 447.0], [35.4, 448.0], [35.5, 449.0], [35.6, 449.0], [35.7, 450.0], [35.8, 451.0], [35.9, 453.0], [36.0, 453.0], [36.1, 454.0], [36.2, 454.0], [36.3, 455.0], [36.4, 456.0], [36.5, 456.0], [36.6, 457.0], [36.7, 458.0], [36.8, 459.0], [36.9, 460.0], [37.0, 460.0], [37.1, 461.0], [37.2, 462.0], [37.3, 462.0], [37.4, 463.0], [37.5, 463.0], [37.6, 464.0], [37.7, 466.0], [37.8, 468.0], [37.9, 469.0], [38.0, 469.0], [38.1, 470.0], [38.2, 471.0], [38.3, 472.0], [38.4, 473.0], [38.5, 474.0], [38.6, 475.0], [38.7, 476.0], [38.8, 476.0], [38.9, 477.0], [39.0, 477.0], [39.1, 478.0], [39.2, 479.0], [39.3, 479.0], [39.4, 480.0], [39.5, 481.0], [39.6, 481.0], [39.7, 482.0], [39.8, 484.0], [39.9, 485.0], [40.0, 487.0], [40.1, 488.0], [40.2, 488.0], [40.3, 489.0], [40.4, 490.0], [40.5, 491.0], [40.6, 494.0], [40.7, 495.0], [40.8, 496.0], [40.9, 497.0], [41.0, 498.0], [41.1, 499.0], [41.2, 500.0], [41.3, 502.0], [41.4, 502.0], [41.5, 503.0], [41.6, 504.0], [41.7, 506.0], [41.8, 508.0], [41.9, 509.0], [42.0, 510.0], [42.1, 511.0], [42.2, 512.0], [42.3, 513.0], [42.4, 514.0], [42.5, 515.0], [42.6, 517.0], [42.7, 518.0], [42.8, 519.0], [42.9, 520.0], [43.0, 521.0], [43.1, 522.0], [43.2, 524.0], [43.3, 525.0], [43.4, 526.0], [43.5, 527.0], [43.6, 528.0], [43.7, 530.0], [43.8, 531.0], [43.9, 532.0], [44.0, 533.0], [44.1, 535.0], [44.2, 536.0], [44.3, 537.0], [44.4, 538.0], [44.5, 539.0], [44.6, 541.0], [44.7, 542.0], [44.8, 543.0], [44.9, 544.0], [45.0, 545.0], [45.1, 546.0], [45.2, 548.0], [45.3, 549.0], [45.4, 550.0], [45.5, 552.0], [45.6, 553.0], [45.7, 554.0], [45.8, 554.0], [45.9, 556.0], [46.0, 557.0], [46.1, 558.0], [46.2, 560.0], [46.3, 562.0], [46.4, 563.0], [46.5, 564.0], [46.6, 566.0], [46.7, 567.0], [46.8, 567.0], [46.9, 568.0], [47.0, 569.0], [47.1, 571.0], [47.2, 573.0], [47.3, 574.0], [47.4, 576.0], [47.5, 578.0], [47.6, 579.0], [47.7, 581.0], [47.8, 583.0], [47.9, 585.0], [48.0, 586.0], [48.1, 588.0], [48.2, 589.0], [48.3, 591.0], [48.4, 592.0], [48.5, 593.0], [48.6, 594.0], [48.7, 596.0], [48.8, 598.0], [48.9, 600.0], [49.0, 601.0], [49.1, 601.0], [49.2, 603.0], [49.3, 605.0], [49.4, 607.0], [49.5, 608.0], [49.6, 610.0], [49.7, 611.0], [49.8, 613.0], [49.9, 613.0], [50.0, 615.0], [50.1, 617.0], [50.2, 619.0], [50.3, 622.0], [50.4, 624.0], [50.5, 626.0], [50.6, 628.0], [50.7, 629.0], [50.8, 632.0], [50.9, 635.0], [51.0, 637.0], [51.1, 641.0], [51.2, 644.0], [51.3, 646.0], [51.4, 647.0], [51.5, 648.0], [51.6, 650.0], [51.7, 653.0], [51.8, 655.0], [51.9, 657.0], [52.0, 659.0], [52.1, 662.0], [52.2, 663.0], [52.3, 664.0], [52.4, 667.0], [52.5, 669.0], [52.6, 671.0], [52.7, 673.0], [52.8, 674.0], [52.9, 676.0], [53.0, 678.0], [53.1, 680.0], [53.2, 682.0], [53.3, 684.0], [53.4, 688.0], [53.5, 689.0], [53.6, 692.0], [53.7, 693.0], [53.8, 696.0], [53.9, 697.0], [54.0, 700.0], [54.1, 704.0], [54.2, 707.0], [54.3, 710.0], [54.4, 712.0], [54.5, 714.0], [54.6, 715.0], [54.7, 718.0], [54.8, 720.0], [54.9, 723.0], [55.0, 724.0], [55.1, 725.0], [55.2, 727.0], [55.3, 729.0], [55.4, 731.0], [55.5, 733.0], [55.6, 737.0], [55.7, 739.0], [55.8, 741.0], [55.9, 743.0], [56.0, 745.0], [56.1, 748.0], [56.2, 750.0], [56.3, 753.0], [56.4, 756.0], [56.5, 757.0], [56.6, 759.0], [56.7, 762.0], [56.8, 764.0], [56.9, 767.0], [57.0, 769.0], [57.1, 772.0], [57.2, 774.0], [57.3, 776.0], [57.4, 778.0], [57.5, 779.0], [57.6, 783.0], [57.7, 785.0], [57.8, 789.0], [57.9, 790.0], [58.0, 792.0], [58.1, 794.0], [58.2, 796.0], [58.3, 799.0], [58.4, 802.0], [58.5, 803.0], [58.6, 805.0], [58.7, 808.0], [58.8, 809.0], [58.9, 810.0], [59.0, 812.0], [59.1, 813.0], [59.2, 815.0], [59.3, 817.0], [59.4, 820.0], [59.5, 824.0], [59.6, 826.0], [59.7, 828.0], [59.8, 830.0], [59.9, 833.0], [60.0, 834.0], [60.1, 835.0], [60.2, 837.0], [60.3, 839.0], [60.4, 841.0], [60.5, 845.0], [60.6, 849.0], [60.7, 852.0], [60.8, 855.0], [60.9, 858.0], [61.0, 859.0], [61.1, 860.0], [61.2, 862.0], [61.3, 865.0], [61.4, 868.0], [61.5, 870.0], [61.6, 872.0], [61.7, 875.0], [61.8, 878.0], [61.9, 880.0], [62.0, 882.0], [62.1, 884.0], [62.2, 886.0], [62.3, 888.0], [62.4, 889.0], [62.5, 891.0], [62.6, 892.0], [62.7, 897.0], [62.8, 898.0], [62.9, 899.0], [63.0, 903.0], [63.1, 910.0], [63.2, 912.0], [63.3, 914.0], [63.4, 917.0], [63.5, 918.0], [63.6, 920.0], [63.7, 924.0], [63.8, 926.0], [63.9, 928.0], [64.0, 931.0], [64.1, 935.0], [64.2, 938.0], [64.3, 940.0], [64.4, 946.0], [64.5, 948.0], [64.6, 951.0], [64.7, 957.0], [64.8, 959.0], [64.9, 966.0], [65.0, 967.0], [65.1, 971.0], [65.2, 971.0], [65.3, 975.0], [65.4, 978.0], [65.5, 982.0], [65.6, 984.0], [65.7, 986.0], [65.8, 989.0], [65.9, 993.0], [66.0, 999.0], [66.1, 1003.0], [66.2, 1004.0], [66.3, 1005.0], [66.4, 1008.0], [66.5, 1012.0], [66.6, 1013.0], [66.7, 1016.0], [66.8, 1021.0], [66.9, 1023.0], [67.0, 1030.0], [67.1, 1034.0], [67.2, 1037.0], [67.3, 1040.0], [67.4, 1043.0], [67.5, 1045.0], [67.6, 1050.0], [67.7, 1053.0], [67.8, 1054.0], [67.9, 1058.0], [68.0, 1062.0], [68.1, 1063.0], [68.2, 1067.0], [68.3, 1072.0], [68.4, 1076.0], [68.5, 1079.0], [68.6, 1084.0], [68.7, 1090.0], [68.8, 1092.0], [68.9, 1094.0], [69.0, 1097.0], [69.1, 1100.0], [69.2, 1102.0], [69.3, 1107.0], [69.4, 1111.0], [69.5, 1114.0], [69.6, 1117.0], [69.7, 1123.0], [69.8, 1126.0], [69.9, 1128.0], [70.0, 1131.0], [70.1, 1137.0], [70.2, 1142.0], [70.3, 1149.0], [70.4, 1151.0], [70.5, 1155.0], [70.6, 1156.0], [70.7, 1165.0], [70.8, 1169.0], [70.9, 1172.0], [71.0, 1177.0], [71.1, 1185.0], [71.2, 1187.0], [71.3, 1197.0], [71.4, 1202.0], [71.5, 1206.0], [71.6, 1209.0], [71.7, 1212.0], [71.8, 1217.0], [71.9, 1228.0], [72.0, 1233.0], [72.1, 1246.0], [72.2, 1251.0], [72.3, 1255.0], [72.4, 1260.0], [72.5, 1265.0], [72.6, 1266.0], [72.7, 1271.0], [72.8, 1279.0], [72.9, 1285.0], [73.0, 1292.0], [73.1, 1300.0], [73.2, 1304.0], [73.3, 1319.0], [73.4, 1322.0], [73.5, 1334.0], [73.6, 1342.0], [73.7, 1347.0], [73.8, 1349.0], [73.9, 1359.0], [74.0, 1363.0], [74.1, 1364.0], [74.2, 1372.0], [74.3, 1377.0], [74.4, 1385.0], [74.5, 1394.0], [74.6, 1398.0], [74.7, 1402.0], [74.8, 1407.0], [74.9, 1415.0], [75.0, 1420.0], [75.1, 1424.0], [75.2, 1428.0], [75.3, 1431.0], [75.4, 1433.0], [75.5, 1438.0], [75.6, 1443.0], [75.7, 1455.0], [75.8, 1463.0], [75.9, 1467.0], [76.0, 1473.0], [76.1, 1476.0], [76.2, 1481.0], [76.3, 1486.0], [76.4, 1490.0], [76.5, 1495.0], [76.6, 1503.0], [76.7, 1506.0], [76.8, 1514.0], [76.9, 1519.0], [77.0, 1526.0], [77.1, 1534.0], [77.2, 1538.0], [77.3, 1553.0], [77.4, 1561.0], [77.5, 1571.0], [77.6, 1578.0], [77.7, 1583.0], [77.8, 1593.0], [77.9, 1601.0], [78.0, 1613.0], [78.1, 1627.0], [78.2, 1636.0], [78.3, 1644.0], [78.4, 1652.0], [78.5, 1667.0], [78.6, 1672.0], [78.7, 1681.0], [78.8, 1694.0], [78.9, 1703.0], [79.0, 1716.0], [79.1, 1730.0], [79.2, 1733.0], [79.3, 1744.0], [79.4, 1754.0], [79.5, 1780.0], [79.6, 1792.0], [79.7, 1798.0], [79.8, 1806.0], [79.9, 1817.0], [80.0, 1825.0], [80.1, 1831.0], [80.2, 1842.0], [80.3, 1855.0], [80.4, 1870.0], [80.5, 1883.0], [80.6, 1891.0], [80.7, 1899.0], [80.8, 1908.0], [80.9, 1914.0], [81.0, 1919.0], [81.1, 1934.0], [81.2, 1938.0], [81.3, 1943.0], [81.4, 1954.0], [81.5, 1964.0], [81.6, 1977.0], [81.7, 1989.0], [81.8, 1995.0], [81.9, 2005.0], [82.0, 2012.0], [82.1, 2022.0], [82.2, 2026.0], [82.3, 2029.0], [82.4, 2037.0], [82.5, 2047.0], [82.6, 2053.0], [82.7, 2056.0], [82.8, 2059.0], [82.9, 2061.0], [83.0, 2065.0], [83.1, 2072.0], [83.2, 2081.0], [83.3, 2088.0], [83.4, 2094.0], [83.5, 2103.0], [83.6, 2110.0], [83.7, 2120.0], [83.8, 2124.0], [83.9, 2128.0], [84.0, 2131.0], [84.1, 2136.0], [84.2, 2142.0], [84.3, 2145.0], [84.4, 2149.0], [84.5, 2154.0], [84.6, 2162.0], [84.7, 2169.0], [84.8, 2176.0], [84.9, 2183.0], [85.0, 2187.0], [85.1, 2193.0], [85.2, 2196.0], [85.3, 2203.0], [85.4, 2208.0], [85.5, 2214.0], [85.6, 2220.0], [85.7, 2233.0], [85.8, 2238.0], [85.9, 2240.0], [86.0, 2244.0], [86.1, 2249.0], [86.2, 2253.0], [86.3, 2260.0], [86.4, 2265.0], [86.5, 2272.0], [86.6, 2276.0], [86.7, 2279.0], [86.8, 2286.0], [86.9, 2289.0], [87.0, 2292.0], [87.1, 2297.0], [87.2, 2302.0], [87.3, 2307.0], [87.4, 2315.0], [87.5, 2322.0], [87.6, 2327.0], [87.7, 2332.0], [87.8, 2339.0], [87.9, 2343.0], [88.0, 2352.0], [88.1, 2361.0], [88.2, 2366.0], [88.3, 2373.0], [88.4, 2378.0], [88.5, 2381.0], [88.6, 2386.0], [88.7, 2388.0], [88.8, 2394.0], [88.9, 2397.0], [89.0, 2405.0], [89.1, 2413.0], [89.2, 2421.0], [89.3, 2428.0], [89.4, 2433.0], [89.5, 2447.0], [89.6, 2449.0], [89.7, 2454.0], [89.8, 2460.0], [89.9, 2467.0], [90.0, 2477.0], [90.1, 2483.0], [90.2, 2490.0], [90.3, 2507.0], [90.4, 2522.0], [90.5, 2529.0], [90.6, 2534.0], [90.7, 2538.0], [90.8, 2548.0], [90.9, 2563.0], [91.0, 2569.0], [91.1, 2580.0], [91.2, 2588.0], [91.3, 2590.0], [91.4, 2598.0], [91.5, 2605.0], [91.6, 2611.0], [91.7, 2620.0], [91.8, 2624.0], [91.9, 2642.0], [92.0, 2655.0], [92.1, 2661.0], [92.2, 2668.0], [92.3, 2690.0], [92.4, 2698.0], [92.5, 2718.0], [92.6, 2733.0], [92.7, 2752.0], [92.8, 2761.0], [92.9, 2775.0], [93.0, 2782.0], [93.1, 2796.0], [93.2, 2807.0], [93.3, 2826.0], [93.4, 2839.0], [93.5, 2857.0], [93.6, 2880.0], [93.7, 2910.0], [93.8, 2928.0], [93.9, 2937.0], [94.0, 2954.0], [94.1, 2974.0], [94.2, 2987.0], [94.3, 3013.0], [94.4, 3033.0], [94.5, 3045.0], [94.6, 3077.0], [94.7, 3098.0], [94.8, 3138.0], [94.9, 3174.0], [95.0, 3189.0], [95.1, 3230.0], [95.2, 3260.0], [95.3, 3302.0], [95.4, 3331.0], [95.5, 3371.0], [95.6, 3396.0], [95.7, 3417.0], [95.8, 3444.0], [95.9, 3472.0], [96.0, 3495.0], [96.1, 3539.0], [96.2, 3595.0], [96.3, 3672.0], [96.4, 3703.0], [96.5, 3728.0], [96.6, 3804.0], [96.7, 3863.0], [96.8, 3906.0], [96.9, 3970.0], [97.0, 3994.0], [97.1, 4034.0], [97.2, 4131.0], [97.3, 4186.0], [97.4, 4275.0], [97.5, 4312.0], [97.6, 4337.0], [97.7, 4377.0], [97.8, 4429.0], [97.9, 4529.0], [98.0, 4616.0], [98.1, 4689.0], [98.2, 4762.0], [98.3, 4863.0], [98.4, 5015.0], [98.5, 5081.0], [98.6, 5176.0], [98.7, 5250.0], [98.8, 5325.0], [98.9, 5558.0], [99.0, 5772.0], [99.1, 5933.0], [99.2, 6239.0], [99.3, 6491.0], [99.4, 6792.0], [99.5, 7248.0], [99.6, 7769.0], [99.7, 8773.0], [99.8, 11159.0], [99.9, 13388.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 917.0, "series": [{"data": [[0.0, 118.0], [600.0, 275.0], [700.0, 232.0], [800.0, 245.0], [900.0, 167.0], [1000.0, 164.0], [1100.0, 121.0], [1200.0, 93.0], [1300.0, 81.0], [1400.0, 104.0], [1500.0, 72.0], [1600.0, 52.0], [1700.0, 46.0], [1800.0, 52.0], [1900.0, 63.0], [2000.0, 85.0], [2100.0, 95.0], [2200.0, 104.0], [2300.0, 94.0], [2400.0, 70.0], [2500.0, 62.0], [2600.0, 53.0], [2700.0, 37.0], [2800.0, 30.0], [2900.0, 33.0], [3000.0, 23.0], [3100.0, 17.0], [3300.0, 18.0], [3200.0, 14.0], [3400.0, 22.0], [3500.0, 9.0], [3600.0, 10.0], [3700.0, 10.0], [3800.0, 10.0], [3900.0, 13.0], [4000.0, 9.0], [4200.0, 8.0], [4100.0, 7.0], [4300.0, 16.0], [4400.0, 6.0], [4600.0, 8.0], [4500.0, 5.0], [4700.0, 9.0], [4800.0, 3.0], [5000.0, 8.0], [5100.0, 4.0], [4900.0, 3.0], [5200.0, 9.0], [5300.0, 2.0], [5600.0, 3.0], [5500.0, 3.0], [5400.0, 3.0], [5700.0, 1.0], [5800.0, 4.0], [6100.0, 3.0], [6000.0, 2.0], [5900.0, 1.0], [6200.0, 2.0], [6300.0, 1.0], [6500.0, 4.0], [6400.0, 3.0], [6700.0, 1.0], [7000.0, 2.0], [7100.0, 2.0], [7200.0, 2.0], [7300.0, 1.0], [7600.0, 2.0], [7500.0, 1.0], [7700.0, 1.0], [8700.0, 1.0], [8200.0, 1.0], [8600.0, 1.0], [8500.0, 1.0], [8300.0, 1.0], [9200.0, 1.0], [9000.0, 1.0], [8800.0, 1.0], [9400.0, 1.0], [11100.0, 1.0], [10900.0, 1.0], [11400.0, 1.0], [11700.0, 1.0], [12000.0, 1.0], [12100.0, 1.0], [13300.0, 1.0], [13600.0, 1.0], [14100.0, 1.0], [15000.0, 1.0], [15500.0, 1.0], [100.0, 34.0], [200.0, 486.0], [300.0, 917.0], [90000.0, 1.0], [400.0, 644.0], [500.0, 413.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 90000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 155.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2050.0, "series": [{"data": [[0.0, 2050.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1890.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1253.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 155.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.5, "minX": 1.60183404E12, "maxY": 20.0, "series": [{"data": [[1.60183404E12, 20.0], [1.60183434E12, 8.5], [1.60183416E12, 20.0], [1.60183422E12, 20.0], [1.6018341E12, 20.0], [1.60183428E12, 19.994]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183434E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 359.0, "minX": 1.0, "maxY": 7769.0, "series": [{"data": [[8.0, 903.0], [2.0, 3018.0], [9.0, 1034.0], [10.0, 1098.0], [11.0, 696.0], [12.0, 400.0], [3.0, 3047.0], [13.0, 409.0], [14.0, 359.0], [15.0, 2655.0], [16.0, 484.0], [4.0, 4863.0], [1.0, 6190.0], [17.0, 7769.0], [18.0, 531.0], [19.0, 431.0], [20.0, 1116.2067930193307], [5.0, 5040.0], [6.0, 1578.0], [7.0, 1134.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[19.964472700074797, 1120.0271129394184]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 123.73333333333333, "minX": 1.60183404E12, "maxY": 6967679.85, "series": [{"data": [[1.60183404E12, 5455888.516666667], [1.60183434E12, 169921.31666666668], [1.60183416E12, 4233751.966666667], [1.60183422E12, 5837416.583333333], [1.6018341E12, 6967679.85], [1.60183428E12, 4915215.083333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60183404E12, 8567.95], [1.60183434E12, 123.73333333333333], [1.60183416E12, 5057.5], [1.60183422E12, 9268.3], [1.6018341E12, 9555.9], [1.60183428E12, 7648.366666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183434E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 929.2272000000011, "minX": 1.60183404E12, "maxY": 2056.75, "series": [{"data": [[1.60183404E12, 1004.4044558697493], [1.60183434E12, 2056.75], [1.60183416E12, 1665.633187772924], [1.60183422E12, 1046.0618892508157], [1.6018341E12, 929.2272000000011], [1.60183428E12, 1194.468999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183434E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 836.0216000000004, "minX": 1.60183404E12, "maxY": 1873.25, "series": [{"data": [[1.60183404E12, 933.1756640959723], [1.60183434E12, 1873.25], [1.60183416E12, 1220.9024745269292], [1.60183422E12, 948.568403908794], [1.6018341E12, 836.0216000000004], [1.60183428E12, 954.891]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183434E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60183404E12, "maxY": 0.27335047129391576, "series": [{"data": [[1.60183404E12, 0.27335047129391576], [1.60183434E12, 0.0], [1.60183416E12, 0.05094614264919941], [1.60183422E12, 0.041530944625407046], [1.6018341E12, 0.019200000000000023], [1.60183428E12, 0.02499999999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183434E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 216.0, "minX": 1.60183404E12, "maxY": 15533.0, "series": [{"data": [[1.60183404E12, 13388.0], [1.60183434E12, 6190.0], [1.60183416E12, 15022.0], [1.60183422E12, 15533.0], [1.6018341E12, 10988.0], [1.60183428E12, 8589.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60183404E12, 251.3769997251034], [1.60183434E12, 359.0], [1.60183416E12, 283.3119996738434], [1.60183422E12, 245.63799971818923], [1.6018341E12, 237.71899971604347], [1.60183428E12, 243.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60183404E12, 252.41470010995866], [1.60183434E12, 359.0], [1.60183416E12, 284.54320013046265], [1.60183422E12, 246.7018001127243], [1.6018341E12, 238.0], [1.60183428E12, 243.62280009269713]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60183404E12, 251.9534998625517], [1.60183434E12, 359.0], [1.60183416E12, 283.99599983692167], [1.60183422E12, 246.2289998590946], [1.6018341E12, 238.0], [1.60183428E12, 243.23399988412856]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60183404E12, 231.0], [1.60183434E12, 359.0], [1.60183416E12, 262.0], [1.60183422E12, 232.0], [1.6018341E12, 216.0], [1.60183428E12, 235.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60183404E12, 659.0], [1.60183434E12, 1116.0], [1.60183416E12, 1140.0], [1.60183422E12, 554.0], [1.6018341E12, 495.5], [1.60183428E12, 733.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183434E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4.5, "minX": 1.0, "maxY": 45136.0, "series": [{"data": [[2.0, 1777.5], [33.0, 411.0], [32.0, 407.0], [35.0, 305.0], [36.0, 289.0], [37.0, 307.0], [39.0, 316.0], [38.0, 360.5], [40.0, 438.0], [42.0, 350.0], [43.0, 295.0], [44.0, 353.0], [49.0, 331.0], [48.0, 372.0], [3.0, 1212.0], [60.0, 333.0], [4.0, 1549.0], [5.0, 1590.5], [6.0, 1060.0], [7.0, 1063.5], [8.0, 1331.0], [9.0, 1485.0], [10.0, 1218.5], [11.0, 1299.0], [12.0, 1090.0], [13.0, 883.0], [14.0, 852.5], [15.0, 1431.5], [1.0, 1322.0], [16.0, 888.5], [17.0, 811.5], [18.0, 755.0], [19.0, 756.0], [20.0, 745.0], [21.0, 704.0], [22.0, 605.0], [23.0, 614.0], [24.0, 486.0], [25.0, 446.5], [26.0, 550.0], [27.0, 447.0], [28.0, 469.0], [29.0, 501.0], [30.0, 400.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[37.0, 141.5], [39.0, 130.0], [42.0, 4.5], [48.0, 11.0], [49.0, 10.0], [60.0, 6.0], [6.0, 26.0], [9.0, 156.0], [10.0, 139.5], [12.0, 236.0], [13.0, 55.0], [15.0, 47.0], [16.0, 73.0], [17.0, 45136.0], [18.0, 137.0], [20.0, 7.0], [21.0, 142.0], [22.0, 137.0], [23.0, 151.0], [24.0, 151.0], [25.0, 8.5], [26.0, 63.0], [27.0, 94.0], [28.0, 171.0], [29.0, 48.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4.5, "minX": 1.0, "maxY": 45135.0, "series": [{"data": [[2.0, 933.5], [33.0, 384.0], [32.0, 405.0], [35.0, 304.0], [36.0, 287.0], [37.0, 306.0], [39.0, 313.0], [38.0, 358.5], [40.0, 435.0], [42.0, 348.5], [43.0, 295.0], [44.0, 353.0], [49.0, 327.0], [48.0, 371.0], [3.0, 663.5], [60.0, 330.0], [4.0, 1023.0], [5.0, 1161.0], [6.0, 945.0], [7.0, 963.0], [8.0, 937.5], [9.0, 1068.0], [10.0, 944.0], [11.0, 869.0], [12.0, 917.0], [13.0, 783.0], [14.0, 751.0], [15.0, 1113.0], [1.0, 1317.0], [16.0, 760.5], [17.0, 731.0], [18.0, 675.0], [19.0, 677.0], [20.0, 652.0], [21.0, 655.0], [22.0, 559.0], [23.0, 587.0], [24.0, 473.0], [25.0, 425.5], [26.0, 530.5], [27.0, 446.0], [28.0, 466.5], [29.0, 470.0], [30.0, 379.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[37.0, 141.5], [39.0, 130.0], [42.0, 4.5], [48.0, 11.0], [49.0, 10.0], [60.0, 5.0], [6.0, 26.0], [9.0, 156.0], [10.0, 139.5], [12.0, 234.0], [13.0, 55.0], [15.0, 46.0], [16.0, 72.5], [17.0, 45135.0], [18.0, 136.0], [20.0, 7.0], [21.0, 142.0], [22.0, 137.0], [23.0, 151.0], [24.0, 151.0], [25.0, 7.5], [26.0, 62.5], [27.0, 94.0], [28.0, 171.0], [29.0, 48.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.60183398E12, "maxY": 20.833333333333332, "series": [{"data": [[1.60183404E12, 19.583333333333332], [1.60183416E12, 11.45], [1.60183422E12, 20.466666666666665], [1.6018341E12, 20.833333333333332], [1.60183398E12, 0.2], [1.60183428E12, 16.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183428E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60183404E12, "maxY": 20.833333333333332, "series": [{"data": [[1.60183404E12, 19.45], [1.60183434E12, 0.26666666666666666], [1.60183416E12, 11.45], [1.60183422E12, 20.45], [1.6018341E12, 20.833333333333332], [1.60183428E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60183422E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183434E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60183404E12, "maxY": 19.833333333333332, "series": [{"data": [[1.60183404E12, 19.2], [1.60183434E12, 0.26666666666666666], [1.60183416E12, 11.383333333333333], [1.60183422E12, 19.683333333333334], [1.6018341E12, 19.833333333333332], [1.60183428E12, 16.183333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60183404E12, 0.25], [1.60183416E12, 0.06666666666666667], [1.60183422E12, 0.7833333333333333], [1.6018341E12, 1.0], [1.60183428E12, 0.48333333333333334]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183434E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60183404E12, "maxY": 19.833333333333332, "series": [{"data": [[1.60183404E12, 19.2], [1.60183434E12, 0.26666666666666666], [1.60183416E12, 11.383333333333333], [1.60183422E12, 19.683333333333334], [1.6018341E12, 19.833333333333332], [1.60183428E12, 16.183333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60183404E12, 0.25], [1.60183416E12, 0.06666666666666667], [1.60183422E12, 0.7833333333333333], [1.6018341E12, 1.0], [1.60183428E12, 0.48333333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183434E12, "title": "Total Transactions Per Second"}},
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

