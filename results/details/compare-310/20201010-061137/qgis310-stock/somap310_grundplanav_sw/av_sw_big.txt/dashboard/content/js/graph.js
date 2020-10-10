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
        data: {"result": {"minY": 171.0, "minX": 0.0, "maxY": 6255.0, "series": [{"data": [[0.0, 171.0], [0.1, 182.0], [0.2, 184.0], [0.3, 185.0], [0.4, 186.0], [0.5, 187.0], [0.6, 188.0], [0.7, 189.0], [0.8, 189.0], [0.9, 190.0], [1.0, 190.0], [1.1, 192.0], [1.2, 193.0], [1.3, 194.0], [1.4, 195.0], [1.5, 196.0], [1.6, 197.0], [1.7, 197.0], [1.8, 198.0], [1.9, 199.0], [2.0, 200.0], [2.1, 201.0], [2.2, 202.0], [2.3, 202.0], [2.4, 204.0], [2.5, 205.0], [2.6, 205.0], [2.7, 206.0], [2.8, 206.0], [2.9, 207.0], [3.0, 208.0], [3.1, 209.0], [3.2, 210.0], [3.3, 211.0], [3.4, 212.0], [3.5, 212.0], [3.6, 214.0], [3.7, 215.0], [3.8, 215.0], [3.9, 216.0], [4.0, 217.0], [4.1, 218.0], [4.2, 218.0], [4.3, 218.0], [4.4, 219.0], [4.5, 220.0], [4.6, 221.0], [4.7, 222.0], [4.8, 222.0], [4.9, 223.0], [5.0, 223.0], [5.1, 224.0], [5.2, 225.0], [5.3, 226.0], [5.4, 227.0], [5.5, 227.0], [5.6, 227.0], [5.7, 228.0], [5.8, 229.0], [5.9, 230.0], [6.0, 230.0], [6.1, 231.0], [6.2, 232.0], [6.3, 234.0], [6.4, 235.0], [6.5, 237.0], [6.6, 239.0], [6.7, 240.0], [6.8, 241.0], [6.9, 242.0], [7.0, 243.0], [7.1, 245.0], [7.2, 247.0], [7.3, 248.0], [7.4, 250.0], [7.5, 252.0], [7.6, 253.0], [7.7, 254.0], [7.8, 256.0], [7.9, 257.0], [8.0, 259.0], [8.1, 260.0], [8.2, 263.0], [8.3, 264.0], [8.4, 264.0], [8.5, 264.0], [8.6, 265.0], [8.7, 266.0], [8.8, 267.0], [8.9, 267.0], [9.0, 267.0], [9.1, 268.0], [9.2, 269.0], [9.3, 270.0], [9.4, 271.0], [9.5, 272.0], [9.6, 273.0], [9.7, 273.0], [9.8, 274.0], [9.9, 275.0], [10.0, 276.0], [10.1, 276.0], [10.2, 277.0], [10.3, 277.0], [10.4, 278.0], [10.5, 280.0], [10.6, 281.0], [10.7, 282.0], [10.8, 282.0], [10.9, 283.0], [11.0, 284.0], [11.1, 285.0], [11.2, 286.0], [11.3, 286.0], [11.4, 288.0], [11.5, 289.0], [11.6, 290.0], [11.7, 291.0], [11.8, 291.0], [11.9, 292.0], [12.0, 293.0], [12.1, 294.0], [12.2, 297.0], [12.3, 299.0], [12.4, 299.0], [12.5, 300.0], [12.6, 301.0], [12.7, 301.0], [12.8, 302.0], [12.9, 303.0], [13.0, 304.0], [13.1, 305.0], [13.2, 306.0], [13.3, 308.0], [13.4, 308.0], [13.5, 309.0], [13.6, 311.0], [13.7, 312.0], [13.8, 312.0], [13.9, 312.0], [14.0, 315.0], [14.1, 316.0], [14.2, 317.0], [14.3, 318.0], [14.4, 319.0], [14.5, 320.0], [14.6, 321.0], [14.7, 322.0], [14.8, 323.0], [14.9, 325.0], [15.0, 326.0], [15.1, 328.0], [15.2, 329.0], [15.3, 330.0], [15.4, 331.0], [15.5, 333.0], [15.6, 337.0], [15.7, 338.0], [15.8, 340.0], [15.9, 342.0], [16.0, 344.0], [16.1, 345.0], [16.2, 347.0], [16.3, 350.0], [16.4, 353.0], [16.5, 356.0], [16.6, 356.0], [16.7, 359.0], [16.8, 364.0], [16.9, 364.0], [17.0, 364.0], [17.1, 367.0], [17.2, 369.0], [17.3, 373.0], [17.4, 374.0], [17.5, 374.0], [17.6, 376.0], [17.7, 376.0], [17.8, 378.0], [17.9, 379.0], [18.0, 380.0], [18.1, 380.0], [18.2, 380.0], [18.3, 381.0], [18.4, 382.0], [18.5, 383.0], [18.6, 384.0], [18.7, 384.0], [18.8, 385.0], [18.9, 386.0], [19.0, 387.0], [19.1, 388.0], [19.2, 389.0], [19.3, 389.0], [19.4, 390.0], [19.5, 391.0], [19.6, 392.0], [19.7, 392.0], [19.8, 393.0], [19.9, 394.0], [20.0, 395.0], [20.1, 395.0], [20.2, 396.0], [20.3, 397.0], [20.4, 397.0], [20.5, 398.0], [20.6, 400.0], [20.7, 401.0], [20.8, 402.0], [20.9, 403.0], [21.0, 404.0], [21.1, 405.0], [21.2, 405.0], [21.3, 406.0], [21.4, 407.0], [21.5, 408.0], [21.6, 409.0], [21.7, 410.0], [21.8, 411.0], [21.9, 412.0], [22.0, 414.0], [22.1, 414.0], [22.2, 415.0], [22.3, 415.0], [22.4, 416.0], [22.5, 418.0], [22.6, 419.0], [22.7, 419.0], [22.8, 420.0], [22.9, 421.0], [23.0, 421.0], [23.1, 423.0], [23.2, 424.0], [23.3, 424.0], [23.4, 425.0], [23.5, 426.0], [23.6, 426.0], [23.7, 427.0], [23.8, 428.0], [23.9, 429.0], [24.0, 430.0], [24.1, 431.0], [24.2, 431.0], [24.3, 432.0], [24.4, 433.0], [24.5, 434.0], [24.6, 434.0], [24.7, 435.0], [24.8, 436.0], [24.9, 437.0], [25.0, 438.0], [25.1, 439.0], [25.2, 440.0], [25.3, 440.0], [25.4, 441.0], [25.5, 442.0], [25.6, 442.0], [25.7, 443.0], [25.8, 443.0], [25.9, 444.0], [26.0, 444.0], [26.1, 444.0], [26.2, 445.0], [26.3, 445.0], [26.4, 446.0], [26.5, 447.0], [26.6, 449.0], [26.7, 450.0], [26.8, 451.0], [26.9, 452.0], [27.0, 453.0], [27.1, 454.0], [27.2, 455.0], [27.3, 456.0], [27.4, 457.0], [27.5, 458.0], [27.6, 459.0], [27.7, 459.0], [27.8, 460.0], [27.9, 461.0], [28.0, 462.0], [28.1, 462.0], [28.2, 463.0], [28.3, 465.0], [28.4, 467.0], [28.5, 467.0], [28.6, 469.0], [28.7, 469.0], [28.8, 471.0], [28.9, 472.0], [29.0, 473.0], [29.1, 474.0], [29.2, 475.0], [29.3, 476.0], [29.4, 477.0], [29.5, 478.0], [29.6, 480.0], [29.7, 480.0], [29.8, 482.0], [29.9, 483.0], [30.0, 484.0], [30.1, 486.0], [30.2, 486.0], [30.3, 487.0], [30.4, 489.0], [30.5, 490.0], [30.6, 491.0], [30.7, 492.0], [30.8, 492.0], [30.9, 493.0], [31.0, 493.0], [31.1, 494.0], [31.2, 496.0], [31.3, 498.0], [31.4, 499.0], [31.5, 500.0], [31.6, 501.0], [31.7, 503.0], [31.8, 504.0], [31.9, 505.0], [32.0, 506.0], [32.1, 507.0], [32.2, 508.0], [32.3, 508.0], [32.4, 509.0], [32.5, 510.0], [32.6, 511.0], [32.7, 511.0], [32.8, 512.0], [32.9, 513.0], [33.0, 514.0], [33.1, 515.0], [33.2, 515.0], [33.3, 517.0], [33.4, 519.0], [33.5, 519.0], [33.6, 521.0], [33.7, 522.0], [33.8, 523.0], [33.9, 524.0], [34.0, 525.0], [34.1, 526.0], [34.2, 527.0], [34.3, 527.0], [34.4, 528.0], [34.5, 529.0], [34.6, 531.0], [34.7, 531.0], [34.8, 532.0], [34.9, 532.0], [35.0, 534.0], [35.1, 535.0], [35.2, 535.0], [35.3, 536.0], [35.4, 537.0], [35.5, 538.0], [35.6, 538.0], [35.7, 539.0], [35.8, 539.0], [35.9, 540.0], [36.0, 540.0], [36.1, 541.0], [36.2, 542.0], [36.3, 543.0], [36.4, 544.0], [36.5, 545.0], [36.6, 546.0], [36.7, 547.0], [36.8, 548.0], [36.9, 549.0], [37.0, 550.0], [37.1, 551.0], [37.2, 553.0], [37.3, 554.0], [37.4, 555.0], [37.5, 556.0], [37.6, 556.0], [37.7, 558.0], [37.8, 559.0], [37.9, 560.0], [38.0, 561.0], [38.1, 562.0], [38.2, 563.0], [38.3, 564.0], [38.4, 565.0], [38.5, 566.0], [38.6, 567.0], [38.7, 568.0], [38.8, 570.0], [38.9, 570.0], [39.0, 570.0], [39.1, 571.0], [39.2, 572.0], [39.3, 574.0], [39.4, 575.0], [39.5, 576.0], [39.6, 577.0], [39.7, 578.0], [39.8, 579.0], [39.9, 580.0], [40.0, 580.0], [40.1, 581.0], [40.2, 581.0], [40.3, 582.0], [40.4, 584.0], [40.5, 584.0], [40.6, 586.0], [40.7, 587.0], [40.8, 588.0], [40.9, 590.0], [41.0, 592.0], [41.1, 593.0], [41.2, 595.0], [41.3, 596.0], [41.4, 597.0], [41.5, 598.0], [41.6, 599.0], [41.7, 600.0], [41.8, 600.0], [41.9, 601.0], [42.0, 602.0], [42.1, 603.0], [42.2, 604.0], [42.3, 606.0], [42.4, 607.0], [42.5, 608.0], [42.6, 609.0], [42.7, 610.0], [42.8, 613.0], [42.9, 613.0], [43.0, 614.0], [43.1, 615.0], [43.2, 617.0], [43.3, 618.0], [43.4, 619.0], [43.5, 620.0], [43.6, 621.0], [43.7, 622.0], [43.8, 622.0], [43.9, 623.0], [44.0, 625.0], [44.1, 626.0], [44.2, 627.0], [44.3, 628.0], [44.4, 629.0], [44.5, 630.0], [44.6, 632.0], [44.7, 634.0], [44.8, 634.0], [44.9, 635.0], [45.0, 636.0], [45.1, 638.0], [45.2, 639.0], [45.3, 640.0], [45.4, 640.0], [45.5, 641.0], [45.6, 642.0], [45.7, 644.0], [45.8, 645.0], [45.9, 646.0], [46.0, 648.0], [46.1, 650.0], [46.2, 650.0], [46.3, 651.0], [46.4, 653.0], [46.5, 653.0], [46.6, 657.0], [46.7, 659.0], [46.8, 660.0], [46.9, 662.0], [47.0, 662.0], [47.1, 663.0], [47.2, 665.0], [47.3, 667.0], [47.4, 668.0], [47.5, 671.0], [47.6, 673.0], [47.7, 675.0], [47.8, 676.0], [47.9, 677.0], [48.0, 679.0], [48.1, 681.0], [48.2, 683.0], [48.3, 684.0], [48.4, 685.0], [48.5, 686.0], [48.6, 689.0], [48.7, 690.0], [48.8, 692.0], [48.9, 693.0], [49.0, 694.0], [49.1, 696.0], [49.2, 698.0], [49.3, 699.0], [49.4, 700.0], [49.5, 701.0], [49.6, 703.0], [49.7, 704.0], [49.8, 706.0], [49.9, 707.0], [50.0, 709.0], [50.1, 710.0], [50.2, 711.0], [50.3, 713.0], [50.4, 714.0], [50.5, 715.0], [50.6, 716.0], [50.7, 717.0], [50.8, 719.0], [50.9, 720.0], [51.0, 721.0], [51.1, 723.0], [51.2, 725.0], [51.3, 726.0], [51.4, 726.0], [51.5, 728.0], [51.6, 729.0], [51.7, 730.0], [51.8, 732.0], [51.9, 734.0], [52.0, 735.0], [52.1, 737.0], [52.2, 737.0], [52.3, 739.0], [52.4, 740.0], [52.5, 741.0], [52.6, 744.0], [52.7, 746.0], [52.8, 746.0], [52.9, 748.0], [53.0, 749.0], [53.1, 751.0], [53.2, 753.0], [53.3, 755.0], [53.4, 756.0], [53.5, 758.0], [53.6, 759.0], [53.7, 762.0], [53.8, 762.0], [53.9, 764.0], [54.0, 766.0], [54.1, 767.0], [54.2, 770.0], [54.3, 771.0], [54.4, 772.0], [54.5, 775.0], [54.6, 776.0], [54.7, 778.0], [54.8, 782.0], [54.9, 785.0], [55.0, 786.0], [55.1, 789.0], [55.2, 792.0], [55.3, 792.0], [55.4, 794.0], [55.5, 795.0], [55.6, 797.0], [55.7, 799.0], [55.8, 800.0], [55.9, 801.0], [56.0, 802.0], [56.1, 803.0], [56.2, 806.0], [56.3, 808.0], [56.4, 809.0], [56.5, 810.0], [56.6, 811.0], [56.7, 812.0], [56.8, 814.0], [56.9, 815.0], [57.0, 817.0], [57.1, 819.0], [57.2, 821.0], [57.3, 825.0], [57.4, 827.0], [57.5, 829.0], [57.6, 831.0], [57.7, 832.0], [57.8, 835.0], [57.9, 837.0], [58.0, 839.0], [58.1, 841.0], [58.2, 845.0], [58.3, 846.0], [58.4, 848.0], [58.5, 849.0], [58.6, 850.0], [58.7, 852.0], [58.8, 854.0], [58.9, 855.0], [59.0, 857.0], [59.1, 858.0], [59.2, 862.0], [59.3, 864.0], [59.4, 865.0], [59.5, 867.0], [59.6, 868.0], [59.7, 869.0], [59.8, 871.0], [59.9, 872.0], [60.0, 874.0], [60.1, 875.0], [60.2, 876.0], [60.3, 879.0], [60.4, 882.0], [60.5, 885.0], [60.6, 885.0], [60.7, 888.0], [60.8, 890.0], [60.9, 890.0], [61.0, 892.0], [61.1, 893.0], [61.2, 894.0], [61.3, 896.0], [61.4, 898.0], [61.5, 899.0], [61.6, 901.0], [61.7, 904.0], [61.8, 905.0], [61.9, 906.0], [62.0, 907.0], [62.1, 909.0], [62.2, 910.0], [62.3, 912.0], [62.4, 913.0], [62.5, 915.0], [62.6, 916.0], [62.7, 918.0], [62.8, 921.0], [62.9, 922.0], [63.0, 923.0], [63.1, 924.0], [63.2, 926.0], [63.3, 929.0], [63.4, 930.0], [63.5, 931.0], [63.6, 932.0], [63.7, 936.0], [63.8, 937.0], [63.9, 939.0], [64.0, 943.0], [64.1, 944.0], [64.2, 945.0], [64.3, 948.0], [64.4, 950.0], [64.5, 951.0], [64.6, 952.0], [64.7, 953.0], [64.8, 956.0], [64.9, 957.0], [65.0, 958.0], [65.1, 959.0], [65.2, 960.0], [65.3, 961.0], [65.4, 962.0], [65.5, 963.0], [65.6, 965.0], [65.7, 966.0], [65.8, 967.0], [65.9, 968.0], [66.0, 969.0], [66.1, 972.0], [66.2, 975.0], [66.3, 976.0], [66.4, 977.0], [66.5, 978.0], [66.6, 981.0], [66.7, 982.0], [66.8, 983.0], [66.9, 985.0], [67.0, 985.0], [67.1, 986.0], [67.2, 988.0], [67.3, 990.0], [67.4, 992.0], [67.5, 994.0], [67.6, 996.0], [67.7, 997.0], [67.8, 999.0], [67.9, 1000.0], [68.0, 1001.0], [68.1, 1003.0], [68.2, 1004.0], [68.3, 1005.0], [68.4, 1006.0], [68.5, 1011.0], [68.6, 1013.0], [68.7, 1014.0], [68.8, 1015.0], [68.9, 1018.0], [69.0, 1019.0], [69.1, 1022.0], [69.2, 1024.0], [69.3, 1024.0], [69.4, 1026.0], [69.5, 1028.0], [69.6, 1031.0], [69.7, 1034.0], [69.8, 1035.0], [69.9, 1038.0], [70.0, 1039.0], [70.1, 1039.0], [70.2, 1042.0], [70.3, 1044.0], [70.4, 1045.0], [70.5, 1046.0], [70.6, 1047.0], [70.7, 1051.0], [70.8, 1054.0], [70.9, 1056.0], [71.0, 1057.0], [71.1, 1058.0], [71.2, 1060.0], [71.3, 1062.0], [71.4, 1063.0], [71.5, 1065.0], [71.6, 1067.0], [71.7, 1067.0], [71.8, 1069.0], [71.9, 1070.0], [72.0, 1072.0], [72.1, 1074.0], [72.2, 1076.0], [72.3, 1078.0], [72.4, 1082.0], [72.5, 1083.0], [72.6, 1084.0], [72.7, 1087.0], [72.8, 1089.0], [72.9, 1090.0], [73.0, 1092.0], [73.1, 1094.0], [73.2, 1097.0], [73.3, 1098.0], [73.4, 1100.0], [73.5, 1101.0], [73.6, 1102.0], [73.7, 1105.0], [73.8, 1105.0], [73.9, 1108.0], [74.0, 1108.0], [74.1, 1110.0], [74.2, 1114.0], [74.3, 1116.0], [74.4, 1117.0], [74.5, 1118.0], [74.6, 1120.0], [74.7, 1122.0], [74.8, 1125.0], [74.9, 1126.0], [75.0, 1130.0], [75.1, 1132.0], [75.2, 1135.0], [75.3, 1136.0], [75.4, 1141.0], [75.5, 1143.0], [75.6, 1147.0], [75.7, 1150.0], [75.8, 1153.0], [75.9, 1154.0], [76.0, 1157.0], [76.1, 1158.0], [76.2, 1161.0], [76.3, 1163.0], [76.4, 1165.0], [76.5, 1168.0], [76.6, 1169.0], [76.7, 1172.0], [76.8, 1176.0], [76.9, 1179.0], [77.0, 1181.0], [77.1, 1184.0], [77.2, 1187.0], [77.3, 1188.0], [77.4, 1192.0], [77.5, 1195.0], [77.6, 1198.0], [77.7, 1199.0], [77.8, 1201.0], [77.9, 1202.0], [78.0, 1204.0], [78.1, 1208.0], [78.2, 1211.0], [78.3, 1214.0], [78.4, 1217.0], [78.5, 1218.0], [78.6, 1220.0], [78.7, 1223.0], [78.8, 1225.0], [78.9, 1227.0], [79.0, 1228.0], [79.1, 1231.0], [79.2, 1234.0], [79.3, 1237.0], [79.4, 1238.0], [79.5, 1240.0], [79.6, 1244.0], [79.7, 1246.0], [79.8, 1247.0], [79.9, 1254.0], [80.0, 1255.0], [80.1, 1259.0], [80.2, 1262.0], [80.3, 1265.0], [80.4, 1266.0], [80.5, 1270.0], [80.6, 1272.0], [80.7, 1275.0], [80.8, 1278.0], [80.9, 1279.0], [81.0, 1283.0], [81.1, 1286.0], [81.2, 1288.0], [81.3, 1291.0], [81.4, 1294.0], [81.5, 1296.0], [81.6, 1298.0], [81.7, 1300.0], [81.8, 1302.0], [81.9, 1304.0], [82.0, 1306.0], [82.1, 1309.0], [82.2, 1311.0], [82.3, 1312.0], [82.4, 1315.0], [82.5, 1318.0], [82.6, 1320.0], [82.7, 1323.0], [82.8, 1327.0], [82.9, 1330.0], [83.0, 1334.0], [83.1, 1337.0], [83.2, 1339.0], [83.3, 1341.0], [83.4, 1345.0], [83.5, 1348.0], [83.6, 1350.0], [83.7, 1351.0], [83.8, 1353.0], [83.9, 1355.0], [84.0, 1356.0], [84.1, 1359.0], [84.2, 1363.0], [84.3, 1366.0], [84.4, 1370.0], [84.5, 1371.0], [84.6, 1374.0], [84.7, 1376.0], [84.8, 1379.0], [84.9, 1383.0], [85.0, 1385.0], [85.1, 1388.0], [85.2, 1391.0], [85.3, 1395.0], [85.4, 1400.0], [85.5, 1403.0], [85.6, 1404.0], [85.7, 1406.0], [85.8, 1408.0], [85.9, 1411.0], [86.0, 1415.0], [86.1, 1417.0], [86.2, 1420.0], [86.3, 1424.0], [86.4, 1429.0], [86.5, 1432.0], [86.6, 1435.0], [86.7, 1440.0], [86.8, 1443.0], [86.9, 1445.0], [87.0, 1448.0], [87.1, 1450.0], [87.2, 1455.0], [87.3, 1457.0], [87.4, 1460.0], [87.5, 1465.0], [87.6, 1469.0], [87.7, 1473.0], [87.8, 1474.0], [87.9, 1476.0], [88.0, 1480.0], [88.1, 1486.0], [88.2, 1490.0], [88.3, 1491.0], [88.4, 1496.0], [88.5, 1498.0], [88.6, 1500.0], [88.7, 1506.0], [88.8, 1513.0], [88.9, 1517.0], [89.0, 1521.0], [89.1, 1527.0], [89.2, 1532.0], [89.3, 1538.0], [89.4, 1544.0], [89.5, 1546.0], [89.6, 1556.0], [89.7, 1559.0], [89.8, 1562.0], [89.9, 1567.0], [90.0, 1573.0], [90.1, 1581.0], [90.2, 1584.0], [90.3, 1591.0], [90.4, 1594.0], [90.5, 1599.0], [90.6, 1604.0], [90.7, 1614.0], [90.8, 1618.0], [90.9, 1625.0], [91.0, 1637.0], [91.1, 1639.0], [91.2, 1648.0], [91.3, 1659.0], [91.4, 1665.0], [91.5, 1670.0], [91.6, 1674.0], [91.7, 1678.0], [91.8, 1684.0], [91.9, 1691.0], [92.0, 1698.0], [92.1, 1704.0], [92.2, 1708.0], [92.3, 1712.0], [92.4, 1719.0], [92.5, 1725.0], [92.6, 1731.0], [92.7, 1750.0], [92.8, 1756.0], [92.9, 1763.0], [93.0, 1776.0], [93.1, 1782.0], [93.2, 1788.0], [93.3, 1792.0], [93.4, 1798.0], [93.5, 1812.0], [93.6, 1826.0], [93.7, 1829.0], [93.8, 1841.0], [93.9, 1845.0], [94.0, 1851.0], [94.1, 1855.0], [94.2, 1865.0], [94.3, 1873.0], [94.4, 1879.0], [94.5, 1887.0], [94.6, 1903.0], [94.7, 1908.0], [94.8, 1917.0], [94.9, 1941.0], [95.0, 1955.0], [95.1, 1963.0], [95.2, 1974.0], [95.3, 1989.0], [95.4, 2006.0], [95.5, 2015.0], [95.6, 2029.0], [95.7, 2044.0], [95.8, 2049.0], [95.9, 2073.0], [96.0, 2083.0], [96.1, 2088.0], [96.2, 2096.0], [96.3, 2116.0], [96.4, 2135.0], [96.5, 2157.0], [96.6, 2172.0], [96.7, 2185.0], [96.8, 2210.0], [96.9, 2224.0], [97.0, 2238.0], [97.1, 2254.0], [97.2, 2262.0], [97.3, 2281.0], [97.4, 2309.0], [97.5, 2337.0], [97.6, 2361.0], [97.7, 2376.0], [97.8, 2417.0], [97.9, 2449.0], [98.0, 2485.0], [98.1, 2504.0], [98.2, 2565.0], [98.3, 2591.0], [98.4, 2638.0], [98.5, 2701.0], [98.6, 2739.0], [98.7, 2755.0], [98.8, 2791.0], [98.9, 2863.0], [99.0, 2982.0], [99.1, 3043.0], [99.2, 3178.0], [99.3, 3294.0], [99.4, 3473.0], [99.5, 3626.0], [99.6, 3731.0], [99.7, 4058.0], [99.8, 4549.0], [99.9, 5325.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 566.0, "series": [{"data": [[600.0, 400.0], [700.0, 331.0], [800.0, 300.0], [900.0, 331.0], [1000.0, 284.0], [1100.0, 226.0], [1200.0, 207.0], [1300.0, 191.0], [1400.0, 167.0], [1500.0, 99.0], [1600.0, 78.0], [1700.0, 74.0], [1800.0, 59.0], [1900.0, 41.0], [2000.0, 44.0], [2100.0, 29.0], [2200.0, 32.0], [2300.0, 19.0], [2400.0, 18.0], [2500.0, 12.0], [2600.0, 9.0], [2700.0, 17.0], [2800.0, 5.0], [2900.0, 5.0], [3000.0, 7.0], [3100.0, 3.0], [3300.0, 3.0], [3200.0, 5.0], [3400.0, 5.0], [3500.0, 2.0], [3700.0, 4.0], [3600.0, 4.0], [3900.0, 2.0], [4000.0, 2.0], [4300.0, 1.0], [4500.0, 1.0], [4400.0, 2.0], [4700.0, 1.0], [4800.0, 1.0], [4900.0, 1.0], [5300.0, 3.0], [5200.0, 1.0], [5600.0, 2.0], [6200.0, 1.0], [100.0, 103.0], [200.0, 545.0], [300.0, 419.0], [400.0, 566.0], [500.0, 529.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2965.0, "series": [{"data": [[0.0, 1635.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2965.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 590.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.838129496402878, "minX": 1.60231056E12, "maxY": 10.0, "series": [{"data": [[1.60231092E12, 10.0], [1.60231062E12, 10.0], [1.60231056E12, 10.0], [1.60231074E12, 10.0], [1.60231068E12, 10.0], [1.60231086E12, 10.0], [1.6023108E12, 10.0], [1.60231098E12, 9.838129496402878]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231098E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 311.0, "minX": 1.0, "maxY": 2365.0, "series": [{"data": [[8.0, 1245.0], [4.0, 1301.0], [2.0, 990.0], [1.0, 2365.0], [9.0, 311.0], [10.0, 861.9847549208795], [5.0, 738.0], [6.0, 1083.0], [3.0, 817.0], [7.0, 943.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 862.3768060104021]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2093.1, "minX": 1.60231056E12, "maxY": 3540954.0833333335, "series": [{"data": [[1.60231092E12, 2998213.1666666665], [1.60231062E12, 3093951.5], [1.60231056E12, 3193742.55], [1.60231074E12, 3451552.3333333335], [1.60231068E12, 3523959.5833333335], [1.60231086E12, 3540954.0833333335], [1.6023108E12, 2706164.95], [1.60231098E12, 1464633.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231092E12, 5729.966666666666], [1.60231062E12, 5342.45], [1.60231056E12, 4641.2], [1.60231074E12, 4711.633333333333], [1.60231068E12, 5601.033333333334], [1.60231086E12, 5550.833333333333], [1.6023108E12, 4913.833333333333], [1.60231098E12, 2093.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231098E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 787.372185430464, "minX": 1.60231056E12, "maxY": 1031.7122302158282, "series": [{"data": [[1.60231092E12, 787.372185430464], [1.60231062E12, 834.57756232687], [1.60231056E12, 928.400936037441], [1.60231074E12, 934.9171974522297], [1.60231068E12, 807.400541271989], [1.60231086E12, 804.3776881720426], [1.6023108E12, 899.6959064327483], [1.60231098E12, 1031.7122302158282]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231098E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 786.2688741721856, "minX": 1.60231056E12, "maxY": 1030.251798561151, "series": [{"data": [[1.60231092E12, 786.2688741721856], [1.60231062E12, 832.9113573407201], [1.60231056E12, 926.6037441497662], [1.60231074E12, 932.7595541401273], [1.60231068E12, 805.568335588633], [1.60231086E12, 802.9556451612906], [1.6023108E12, 898.3274853801166], [1.60231098E12, 1030.251798561151]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231098E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.003597122302158273, "minX": 1.60231056E12, "maxY": 0.13260530421216832, "series": [{"data": [[1.60231092E12, 0.014569536423841073], [1.60231062E12, 0.016620498614958453], [1.60231056E12, 0.13260530421216832], [1.60231074E12, 0.02707006369426754], [1.60231068E12, 0.01623815967523684], [1.60231086E12, 0.02016129032258065], [1.6023108E12, 0.014619883040935672], [1.60231098E12, 0.003597122302158273]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231098E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 171.0, "minX": 1.60231056E12, "maxY": 6255.0, "series": [{"data": [[1.60231092E12, 2763.0], [1.60231062E12, 4075.0], [1.60231056E12, 6255.0], [1.60231074E12, 4723.0], [1.60231068E12, 3294.0], [1.60231086E12, 2603.0], [1.6023108E12, 5676.0], [1.60231098E12, 3646.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231092E12, 188.0], [1.60231062E12, 188.0], [1.60231056E12, 192.33399954080582], [1.60231074E12, 186.66099985003473], [1.60231068E12, 190.952999471426], [1.60231086E12, 189.70499982237817], [1.6023108E12, 196.98999902009965], [1.60231098E12, 219.51099993348123]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231092E12, 188.48440007209777], [1.60231062E12, 188.47310020685197], [1.60231056E12, 193.3558000612259], [1.60231074E12, 187.22710005998613], [1.60231068E12, 192.0], [1.60231086E12, 190.0], [1.6023108E12, 200.68900039196015], [1.60231098E12, 219.76210002660753]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231092E12, 188.1819999098778], [1.60231062E12, 188.0], [1.60231056E12, 193.09899992346763], [1.60231074E12, 186.97549992501735], [1.60231068E12, 192.0], [1.60231086E12, 190.0], [1.6023108E12, 199.04499951004982], [1.60231098E12, 219.6504999667406]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231092E12, 182.0], [1.60231062E12, 183.0], [1.60231056E12, 180.0], [1.60231074E12, 180.0], [1.60231068E12, 171.0], [1.60231086E12, 180.0], [1.6023108E12, 184.0], [1.60231098E12, 195.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231092E12, 634.0], [1.60231062E12, 607.0], [1.60231056E12, 777.0], [1.60231074E12, 773.5], [1.60231068E12, 638.0], [1.60231086E12, 616.5], [1.6023108E12, 765.5], [1.60231098E12, 908.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231098E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 197.0, "minX": 1.0, "maxY": 2365.0, "series": [{"data": [[2.0, 751.0], [4.0, 2305.0], [5.0, 1199.5], [6.0, 1213.0], [7.0, 1105.0], [8.0, 1002.5], [9.0, 935.0], [10.0, 906.0], [11.0, 848.0], [12.0, 710.5], [13.0, 734.0], [14.0, 639.0], [15.0, 640.0], [16.0, 612.0], [1.0, 2365.0], [17.0, 486.0], [18.0, 523.5], [19.0, 510.0], [20.0, 459.0], [21.0, 420.0], [22.0, 406.0], [23.0, 422.5], [24.0, 440.0], [25.0, 426.0], [26.0, 396.5], [27.0, 424.0], [28.0, 399.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 197.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 197.0, "minX": 1.0, "maxY": 2356.0, "series": [{"data": [[2.0, 749.0], [4.0, 2303.5], [5.0, 1197.0], [6.0, 1211.5], [7.0, 1101.5], [8.0, 1000.5], [9.0, 931.5], [10.0, 904.5], [11.0, 846.0], [12.0, 710.0], [13.0, 733.0], [14.0, 637.0], [15.0, 638.0], [16.0, 612.0], [1.0, 2356.0], [17.0, 486.0], [18.0, 522.5], [19.0, 510.0], [20.0, 459.0], [21.0, 420.0], [22.0, 406.0], [23.0, 422.5], [24.0, 439.5], [25.0, 426.0], [26.0, 396.5], [27.0, 424.0], [28.0, 399.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 197.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.6023105E12, "maxY": 12.583333333333334, "series": [{"data": [[1.60231092E12, 12.583333333333334], [1.60231062E12, 12.033333333333333], [1.60231056E12, 10.7], [1.60231074E12, 10.466666666666667], [1.60231068E12, 12.316666666666666], [1.60231086E12, 12.4], [1.6023108E12, 11.4], [1.6023105E12, 0.15], [1.60231098E12, 4.466666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231098E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231056E12, "maxY": 12.583333333333334, "series": [{"data": [[1.60231092E12, 12.583333333333334], [1.60231062E12, 12.033333333333333], [1.60231056E12, 10.683333333333334], [1.60231074E12, 10.466666666666667], [1.60231068E12, 12.3], [1.60231086E12, 12.4], [1.6023108E12, 11.4], [1.60231098E12, 4.633333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60231068E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231098E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231056E12, "maxY": 12.583333333333334, "series": [{"data": [[1.60231092E12, 12.583333333333334], [1.60231062E12, 12.033333333333333], [1.60231056E12, 10.683333333333334], [1.60231074E12, 10.466666666666667], [1.60231068E12, 12.3], [1.60231086E12, 12.4], [1.6023108E12, 11.4], [1.60231098E12, 4.633333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60231068E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231098E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231056E12, "maxY": 12.583333333333334, "series": [{"data": [[1.60231092E12, 12.583333333333334], [1.60231062E12, 12.033333333333333], [1.60231056E12, 10.683333333333334], [1.60231074E12, 10.466666666666667], [1.60231068E12, 12.3], [1.60231086E12, 12.4], [1.6023108E12, 11.4], [1.60231098E12, 4.633333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60231068E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231098E12, "title": "Total Transactions Per Second"}},
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

