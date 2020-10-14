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
        data: {"result": {"minY": 180.0, "minX": 0.0, "maxY": 8457.0, "series": [{"data": [[0.0, 180.0], [0.1, 184.0], [0.2, 186.0], [0.3, 187.0], [0.4, 189.0], [0.5, 191.0], [0.6, 192.0], [0.7, 193.0], [0.8, 195.0], [0.9, 196.0], [1.0, 196.0], [1.1, 197.0], [1.2, 198.0], [1.3, 199.0], [1.4, 199.0], [1.5, 200.0], [1.6, 200.0], [1.7, 201.0], [1.8, 201.0], [1.9, 201.0], [2.0, 202.0], [2.1, 203.0], [2.2, 204.0], [2.3, 204.0], [2.4, 205.0], [2.5, 206.0], [2.6, 207.0], [2.7, 207.0], [2.8, 208.0], [2.9, 208.0], [3.0, 209.0], [3.1, 210.0], [3.2, 212.0], [3.3, 213.0], [3.4, 214.0], [3.5, 214.0], [3.6, 215.0], [3.7, 217.0], [3.8, 218.0], [3.9, 218.0], [4.0, 218.0], [4.1, 220.0], [4.2, 220.0], [4.3, 221.0], [4.4, 222.0], [4.5, 223.0], [4.6, 224.0], [4.7, 224.0], [4.8, 225.0], [4.9, 226.0], [5.0, 226.0], [5.1, 226.0], [5.2, 227.0], [5.3, 228.0], [5.4, 229.0], [5.5, 230.0], [5.6, 230.0], [5.7, 232.0], [5.8, 233.0], [5.9, 234.0], [6.0, 234.0], [6.1, 235.0], [6.2, 235.0], [6.3, 236.0], [6.4, 238.0], [6.5, 239.0], [6.6, 239.0], [6.7, 240.0], [6.8, 241.0], [6.9, 243.0], [7.0, 244.0], [7.1, 245.0], [7.2, 247.0], [7.3, 250.0], [7.4, 254.0], [7.5, 255.0], [7.6, 256.0], [7.7, 257.0], [7.8, 258.0], [7.9, 261.0], [8.0, 262.0], [8.1, 263.0], [8.2, 264.0], [8.3, 265.0], [8.4, 267.0], [8.5, 268.0], [8.6, 269.0], [8.7, 270.0], [8.8, 271.0], [8.9, 272.0], [9.0, 272.0], [9.1, 273.0], [9.2, 274.0], [9.3, 275.0], [9.4, 276.0], [9.5, 276.0], [9.6, 277.0], [9.7, 277.0], [9.8, 278.0], [9.9, 279.0], [10.0, 280.0], [10.1, 280.0], [10.2, 280.0], [10.3, 281.0], [10.4, 282.0], [10.5, 283.0], [10.6, 284.0], [10.7, 285.0], [10.8, 285.0], [10.9, 285.0], [11.0, 286.0], [11.1, 287.0], [11.2, 287.0], [11.3, 288.0], [11.4, 290.0], [11.5, 290.0], [11.6, 291.0], [11.7, 293.0], [11.8, 294.0], [11.9, 294.0], [12.0, 295.0], [12.1, 296.0], [12.2, 297.0], [12.3, 298.0], [12.4, 300.0], [12.5, 302.0], [12.6, 302.0], [12.7, 303.0], [12.8, 303.0], [12.9, 304.0], [13.0, 304.0], [13.1, 306.0], [13.2, 308.0], [13.3, 308.0], [13.4, 309.0], [13.5, 309.0], [13.6, 310.0], [13.7, 311.0], [13.8, 312.0], [13.9, 315.0], [14.0, 315.0], [14.1, 316.0], [14.2, 317.0], [14.3, 318.0], [14.4, 319.0], [14.5, 320.0], [14.6, 321.0], [14.7, 323.0], [14.8, 326.0], [14.9, 328.0], [15.0, 330.0], [15.1, 332.0], [15.2, 332.0], [15.3, 335.0], [15.4, 336.0], [15.5, 338.0], [15.6, 339.0], [15.7, 340.0], [15.8, 341.0], [15.9, 344.0], [16.0, 345.0], [16.1, 347.0], [16.2, 350.0], [16.3, 351.0], [16.4, 353.0], [16.5, 356.0], [16.6, 358.0], [16.7, 361.0], [16.8, 363.0], [16.9, 364.0], [17.0, 365.0], [17.1, 367.0], [17.2, 369.0], [17.3, 370.0], [17.4, 371.0], [17.5, 373.0], [17.6, 375.0], [17.7, 377.0], [17.8, 378.0], [17.9, 379.0], [18.0, 381.0], [18.1, 382.0], [18.2, 383.0], [18.3, 384.0], [18.4, 385.0], [18.5, 386.0], [18.6, 386.0], [18.7, 387.0], [18.8, 387.0], [18.9, 389.0], [19.0, 390.0], [19.1, 391.0], [19.2, 392.0], [19.3, 393.0], [19.4, 393.0], [19.5, 394.0], [19.6, 396.0], [19.7, 397.0], [19.8, 397.0], [19.9, 398.0], [20.0, 399.0], [20.1, 399.0], [20.2, 400.0], [20.3, 401.0], [20.4, 402.0], [20.5, 402.0], [20.6, 404.0], [20.7, 404.0], [20.8, 405.0], [20.9, 405.0], [21.0, 406.0], [21.1, 407.0], [21.2, 408.0], [21.3, 408.0], [21.4, 409.0], [21.5, 410.0], [21.6, 411.0], [21.7, 411.0], [21.8, 412.0], [21.9, 413.0], [22.0, 414.0], [22.1, 415.0], [22.2, 417.0], [22.3, 418.0], [22.4, 419.0], [22.5, 420.0], [22.6, 421.0], [22.7, 422.0], [22.8, 423.0], [22.9, 424.0], [23.0, 425.0], [23.1, 425.0], [23.2, 426.0], [23.3, 427.0], [23.4, 428.0], [23.5, 428.0], [23.6, 430.0], [23.7, 431.0], [23.8, 432.0], [23.9, 433.0], [24.0, 434.0], [24.1, 434.0], [24.2, 435.0], [24.3, 436.0], [24.4, 437.0], [24.5, 438.0], [24.6, 439.0], [24.7, 440.0], [24.8, 441.0], [24.9, 442.0], [25.0, 443.0], [25.1, 443.0], [25.2, 443.0], [25.3, 444.0], [25.4, 445.0], [25.5, 445.0], [25.6, 446.0], [25.7, 447.0], [25.8, 448.0], [25.9, 448.0], [26.0, 449.0], [26.1, 450.0], [26.2, 450.0], [26.3, 451.0], [26.4, 452.0], [26.5, 454.0], [26.6, 456.0], [26.7, 457.0], [26.8, 457.0], [26.9, 459.0], [27.0, 460.0], [27.1, 461.0], [27.2, 463.0], [27.3, 464.0], [27.4, 465.0], [27.5, 466.0], [27.6, 466.0], [27.7, 467.0], [27.8, 467.0], [27.9, 468.0], [28.0, 468.0], [28.1, 469.0], [28.2, 470.0], [28.3, 470.0], [28.4, 472.0], [28.5, 473.0], [28.6, 475.0], [28.7, 476.0], [28.8, 477.0], [28.9, 478.0], [29.0, 479.0], [29.1, 479.0], [29.2, 480.0], [29.3, 481.0], [29.4, 482.0], [29.5, 483.0], [29.6, 483.0], [29.7, 485.0], [29.8, 486.0], [29.9, 487.0], [30.0, 488.0], [30.1, 489.0], [30.2, 489.0], [30.3, 490.0], [30.4, 492.0], [30.5, 493.0], [30.6, 494.0], [30.7, 494.0], [30.8, 495.0], [30.9, 496.0], [31.0, 497.0], [31.1, 498.0], [31.2, 499.0], [31.3, 499.0], [31.4, 500.0], [31.5, 501.0], [31.6, 502.0], [31.7, 502.0], [31.8, 503.0], [31.9, 504.0], [32.0, 505.0], [32.1, 506.0], [32.2, 507.0], [32.3, 508.0], [32.4, 509.0], [32.5, 509.0], [32.6, 511.0], [32.7, 512.0], [32.8, 514.0], [32.9, 514.0], [33.0, 515.0], [33.1, 515.0], [33.2, 517.0], [33.3, 517.0], [33.4, 518.0], [33.5, 518.0], [33.6, 519.0], [33.7, 520.0], [33.8, 521.0], [33.9, 522.0], [34.0, 523.0], [34.1, 523.0], [34.2, 524.0], [34.3, 526.0], [34.4, 527.0], [34.5, 529.0], [34.6, 529.0], [34.7, 530.0], [34.8, 530.0], [34.9, 531.0], [35.0, 532.0], [35.1, 533.0], [35.2, 534.0], [35.3, 534.0], [35.4, 535.0], [35.5, 535.0], [35.6, 536.0], [35.7, 536.0], [35.8, 537.0], [35.9, 538.0], [36.0, 539.0], [36.1, 539.0], [36.2, 540.0], [36.3, 541.0], [36.4, 542.0], [36.5, 543.0], [36.6, 544.0], [36.7, 545.0], [36.8, 545.0], [36.9, 546.0], [37.0, 547.0], [37.1, 547.0], [37.2, 548.0], [37.3, 549.0], [37.4, 550.0], [37.5, 551.0], [37.6, 553.0], [37.7, 554.0], [37.8, 554.0], [37.9, 555.0], [38.0, 556.0], [38.1, 557.0], [38.2, 558.0], [38.3, 559.0], [38.4, 560.0], [38.5, 561.0], [38.6, 562.0], [38.7, 563.0], [38.8, 565.0], [38.9, 565.0], [39.0, 566.0], [39.1, 567.0], [39.2, 569.0], [39.3, 569.0], [39.4, 570.0], [39.5, 571.0], [39.6, 573.0], [39.7, 574.0], [39.8, 575.0], [39.9, 576.0], [40.0, 577.0], [40.1, 579.0], [40.2, 581.0], [40.3, 582.0], [40.4, 584.0], [40.5, 585.0], [40.6, 586.0], [40.7, 588.0], [40.8, 588.0], [40.9, 590.0], [41.0, 590.0], [41.1, 591.0], [41.2, 592.0], [41.3, 593.0], [41.4, 594.0], [41.5, 595.0], [41.6, 596.0], [41.7, 597.0], [41.8, 598.0], [41.9, 600.0], [42.0, 600.0], [42.1, 601.0], [42.2, 603.0], [42.3, 603.0], [42.4, 604.0], [42.5, 605.0], [42.6, 606.0], [42.7, 608.0], [42.8, 609.0], [42.9, 610.0], [43.0, 610.0], [43.1, 611.0], [43.2, 612.0], [43.3, 613.0], [43.4, 614.0], [43.5, 614.0], [43.6, 615.0], [43.7, 617.0], [43.8, 618.0], [43.9, 619.0], [44.0, 620.0], [44.1, 621.0], [44.2, 622.0], [44.3, 623.0], [44.4, 625.0], [44.5, 627.0], [44.6, 628.0], [44.7, 629.0], [44.8, 630.0], [44.9, 631.0], [45.0, 632.0], [45.1, 634.0], [45.2, 635.0], [45.3, 635.0], [45.4, 636.0], [45.5, 637.0], [45.6, 640.0], [45.7, 641.0], [45.8, 642.0], [45.9, 644.0], [46.0, 645.0], [46.1, 646.0], [46.2, 647.0], [46.3, 648.0], [46.4, 650.0], [46.5, 651.0], [46.6, 653.0], [46.7, 655.0], [46.8, 656.0], [46.9, 657.0], [47.0, 659.0], [47.1, 660.0], [47.2, 663.0], [47.3, 664.0], [47.4, 665.0], [47.5, 668.0], [47.6, 669.0], [47.7, 670.0], [47.8, 672.0], [47.9, 674.0], [48.0, 675.0], [48.1, 675.0], [48.2, 676.0], [48.3, 678.0], [48.4, 678.0], [48.5, 680.0], [48.6, 682.0], [48.7, 684.0], [48.8, 686.0], [48.9, 689.0], [49.0, 690.0], [49.1, 692.0], [49.2, 693.0], [49.3, 695.0], [49.4, 696.0], [49.5, 698.0], [49.6, 700.0], [49.7, 701.0], [49.8, 702.0], [49.9, 706.0], [50.0, 707.0], [50.1, 709.0], [50.2, 710.0], [50.3, 712.0], [50.4, 714.0], [50.5, 716.0], [50.6, 717.0], [50.7, 718.0], [50.8, 718.0], [50.9, 720.0], [51.0, 721.0], [51.1, 722.0], [51.2, 724.0], [51.3, 725.0], [51.4, 726.0], [51.5, 727.0], [51.6, 729.0], [51.7, 731.0], [51.8, 733.0], [51.9, 734.0], [52.0, 735.0], [52.1, 737.0], [52.2, 740.0], [52.3, 742.0], [52.4, 743.0], [52.5, 745.0], [52.6, 746.0], [52.7, 747.0], [52.8, 749.0], [52.9, 750.0], [53.0, 752.0], [53.1, 753.0], [53.2, 756.0], [53.3, 757.0], [53.4, 759.0], [53.5, 760.0], [53.6, 762.0], [53.7, 763.0], [53.8, 764.0], [53.9, 765.0], [54.0, 766.0], [54.1, 767.0], [54.2, 768.0], [54.3, 770.0], [54.4, 771.0], [54.5, 772.0], [54.6, 774.0], [54.7, 776.0], [54.8, 779.0], [54.9, 780.0], [55.0, 782.0], [55.1, 784.0], [55.2, 785.0], [55.3, 785.0], [55.4, 787.0], [55.5, 789.0], [55.6, 792.0], [55.7, 794.0], [55.8, 798.0], [55.9, 799.0], [56.0, 801.0], [56.1, 802.0], [56.2, 803.0], [56.3, 805.0], [56.4, 808.0], [56.5, 811.0], [56.6, 813.0], [56.7, 815.0], [56.8, 817.0], [56.9, 819.0], [57.0, 820.0], [57.1, 822.0], [57.2, 824.0], [57.3, 826.0], [57.4, 827.0], [57.5, 828.0], [57.6, 830.0], [57.7, 831.0], [57.8, 833.0], [57.9, 834.0], [58.0, 835.0], [58.1, 837.0], [58.2, 838.0], [58.3, 840.0], [58.4, 840.0], [58.5, 842.0], [58.6, 844.0], [58.7, 848.0], [58.8, 849.0], [58.9, 850.0], [59.0, 852.0], [59.1, 853.0], [59.2, 854.0], [59.3, 856.0], [59.4, 859.0], [59.5, 862.0], [59.6, 864.0], [59.7, 865.0], [59.8, 866.0], [59.9, 867.0], [60.0, 868.0], [60.1, 871.0], [60.2, 873.0], [60.3, 874.0], [60.4, 877.0], [60.5, 878.0], [60.6, 880.0], [60.7, 882.0], [60.8, 885.0], [60.9, 885.0], [61.0, 887.0], [61.1, 888.0], [61.2, 890.0], [61.3, 893.0], [61.4, 896.0], [61.5, 898.0], [61.6, 902.0], [61.7, 904.0], [61.8, 904.0], [61.9, 906.0], [62.0, 908.0], [62.1, 910.0], [62.2, 911.0], [62.3, 914.0], [62.4, 915.0], [62.5, 917.0], [62.6, 918.0], [62.7, 920.0], [62.8, 921.0], [62.9, 923.0], [63.0, 925.0], [63.1, 927.0], [63.2, 929.0], [63.3, 930.0], [63.4, 932.0], [63.5, 934.0], [63.6, 936.0], [63.7, 938.0], [63.8, 939.0], [63.9, 940.0], [64.0, 943.0], [64.1, 946.0], [64.2, 947.0], [64.3, 950.0], [64.4, 951.0], [64.5, 954.0], [64.6, 955.0], [64.7, 957.0], [64.8, 958.0], [64.9, 959.0], [65.0, 961.0], [65.1, 964.0], [65.2, 965.0], [65.3, 967.0], [65.4, 969.0], [65.5, 972.0], [65.6, 974.0], [65.7, 976.0], [65.8, 978.0], [65.9, 979.0], [66.0, 982.0], [66.1, 983.0], [66.2, 984.0], [66.3, 985.0], [66.4, 987.0], [66.5, 989.0], [66.6, 990.0], [66.7, 993.0], [66.8, 995.0], [66.9, 996.0], [67.0, 999.0], [67.1, 1003.0], [67.2, 1003.0], [67.3, 1004.0], [67.4, 1007.0], [67.5, 1008.0], [67.6, 1009.0], [67.7, 1010.0], [67.8, 1012.0], [67.9, 1014.0], [68.0, 1016.0], [68.1, 1017.0], [68.2, 1018.0], [68.3, 1019.0], [68.4, 1021.0], [68.5, 1022.0], [68.6, 1023.0], [68.7, 1025.0], [68.8, 1027.0], [68.9, 1027.0], [69.0, 1030.0], [69.1, 1032.0], [69.2, 1034.0], [69.3, 1035.0], [69.4, 1036.0], [69.5, 1038.0], [69.6, 1040.0], [69.7, 1042.0], [69.8, 1043.0], [69.9, 1043.0], [70.0, 1044.0], [70.1, 1047.0], [70.2, 1049.0], [70.3, 1051.0], [70.4, 1054.0], [70.5, 1057.0], [70.6, 1061.0], [70.7, 1063.0], [70.8, 1064.0], [70.9, 1066.0], [71.0, 1069.0], [71.1, 1071.0], [71.2, 1072.0], [71.3, 1076.0], [71.4, 1077.0], [71.5, 1078.0], [71.6, 1080.0], [71.7, 1081.0], [71.8, 1083.0], [71.9, 1084.0], [72.0, 1087.0], [72.1, 1087.0], [72.2, 1088.0], [72.3, 1089.0], [72.4, 1091.0], [72.5, 1092.0], [72.6, 1094.0], [72.7, 1096.0], [72.8, 1098.0], [72.9, 1099.0], [73.0, 1101.0], [73.1, 1103.0], [73.2, 1105.0], [73.3, 1108.0], [73.4, 1109.0], [73.5, 1110.0], [73.6, 1111.0], [73.7, 1115.0], [73.8, 1117.0], [73.9, 1119.0], [74.0, 1122.0], [74.1, 1123.0], [74.2, 1125.0], [74.3, 1127.0], [74.4, 1131.0], [74.5, 1132.0], [74.6, 1133.0], [74.7, 1135.0], [74.8, 1139.0], [74.9, 1142.0], [75.0, 1144.0], [75.1, 1147.0], [75.2, 1149.0], [75.3, 1152.0], [75.4, 1154.0], [75.5, 1155.0], [75.6, 1159.0], [75.7, 1162.0], [75.8, 1165.0], [75.9, 1166.0], [76.0, 1168.0], [76.1, 1169.0], [76.2, 1172.0], [76.3, 1173.0], [76.4, 1176.0], [76.5, 1179.0], [76.6, 1181.0], [76.7, 1183.0], [76.8, 1185.0], [76.9, 1187.0], [77.0, 1188.0], [77.1, 1189.0], [77.2, 1192.0], [77.3, 1195.0], [77.4, 1198.0], [77.5, 1200.0], [77.6, 1201.0], [77.7, 1205.0], [77.8, 1208.0], [77.9, 1212.0], [78.0, 1213.0], [78.1, 1215.0], [78.2, 1216.0], [78.3, 1220.0], [78.4, 1221.0], [78.5, 1223.0], [78.6, 1226.0], [78.7, 1228.0], [78.8, 1230.0], [78.9, 1231.0], [79.0, 1235.0], [79.1, 1237.0], [79.2, 1238.0], [79.3, 1240.0], [79.4, 1243.0], [79.5, 1247.0], [79.6, 1250.0], [79.7, 1252.0], [79.8, 1253.0], [79.9, 1257.0], [80.0, 1259.0], [80.1, 1261.0], [80.2, 1262.0], [80.3, 1263.0], [80.4, 1265.0], [80.5, 1267.0], [80.6, 1269.0], [80.7, 1271.0], [80.8, 1273.0], [80.9, 1275.0], [81.0, 1278.0], [81.1, 1282.0], [81.2, 1283.0], [81.3, 1286.0], [81.4, 1290.0], [81.5, 1291.0], [81.6, 1294.0], [81.7, 1295.0], [81.8, 1297.0], [81.9, 1297.0], [82.0, 1301.0], [82.1, 1304.0], [82.2, 1306.0], [82.3, 1308.0], [82.4, 1311.0], [82.5, 1312.0], [82.6, 1314.0], [82.7, 1316.0], [82.8, 1318.0], [82.9, 1320.0], [83.0, 1321.0], [83.1, 1322.0], [83.2, 1324.0], [83.3, 1325.0], [83.4, 1328.0], [83.5, 1329.0], [83.6, 1330.0], [83.7, 1334.0], [83.8, 1340.0], [83.9, 1343.0], [84.0, 1346.0], [84.1, 1348.0], [84.2, 1350.0], [84.3, 1352.0], [84.4, 1355.0], [84.5, 1360.0], [84.6, 1362.0], [84.7, 1365.0], [84.8, 1367.0], [84.9, 1369.0], [85.0, 1372.0], [85.1, 1374.0], [85.2, 1375.0], [85.3, 1378.0], [85.4, 1381.0], [85.5, 1385.0], [85.6, 1387.0], [85.7, 1389.0], [85.8, 1393.0], [85.9, 1395.0], [86.0, 1397.0], [86.1, 1401.0], [86.2, 1403.0], [86.3, 1405.0], [86.4, 1408.0], [86.5, 1412.0], [86.6, 1415.0], [86.7, 1417.0], [86.8, 1419.0], [86.9, 1422.0], [87.0, 1424.0], [87.1, 1429.0], [87.2, 1432.0], [87.3, 1435.0], [87.4, 1443.0], [87.5, 1450.0], [87.6, 1455.0], [87.7, 1458.0], [87.8, 1464.0], [87.9, 1467.0], [88.0, 1469.0], [88.1, 1470.0], [88.2, 1471.0], [88.3, 1478.0], [88.4, 1482.0], [88.5, 1487.0], [88.6, 1490.0], [88.7, 1493.0], [88.8, 1496.0], [88.9, 1498.0], [89.0, 1502.0], [89.1, 1507.0], [89.2, 1510.0], [89.3, 1517.0], [89.4, 1522.0], [89.5, 1526.0], [89.6, 1527.0], [89.7, 1532.0], [89.8, 1536.0], [89.9, 1538.0], [90.0, 1541.0], [90.1, 1547.0], [90.2, 1550.0], [90.3, 1553.0], [90.4, 1560.0], [90.5, 1567.0], [90.6, 1575.0], [90.7, 1576.0], [90.8, 1590.0], [90.9, 1594.0], [91.0, 1602.0], [91.1, 1611.0], [91.2, 1615.0], [91.3, 1622.0], [91.4, 1627.0], [91.5, 1631.0], [91.6, 1637.0], [91.7, 1642.0], [91.8, 1647.0], [91.9, 1651.0], [92.0, 1653.0], [92.1, 1656.0], [92.2, 1665.0], [92.3, 1672.0], [92.4, 1678.0], [92.5, 1690.0], [92.6, 1692.0], [92.7, 1700.0], [92.8, 1709.0], [92.9, 1717.0], [93.0, 1731.0], [93.1, 1738.0], [93.2, 1749.0], [93.3, 1755.0], [93.4, 1762.0], [93.5, 1770.0], [93.6, 1775.0], [93.7, 1780.0], [93.8, 1785.0], [93.9, 1793.0], [94.0, 1797.0], [94.1, 1805.0], [94.2, 1822.0], [94.3, 1829.0], [94.4, 1846.0], [94.5, 1851.0], [94.6, 1861.0], [94.7, 1877.0], [94.8, 1901.0], [94.9, 1909.0], [95.0, 1920.0], [95.1, 1926.0], [95.2, 1943.0], [95.3, 1954.0], [95.4, 1975.0], [95.5, 1988.0], [95.6, 2007.0], [95.7, 2014.0], [95.8, 2028.0], [95.9, 2033.0], [96.0, 2041.0], [96.1, 2047.0], [96.2, 2058.0], [96.3, 2066.0], [96.4, 2088.0], [96.5, 2097.0], [96.6, 2109.0], [96.7, 2125.0], [96.8, 2132.0], [96.9, 2146.0], [97.0, 2157.0], [97.1, 2168.0], [97.2, 2180.0], [97.3, 2202.0], [97.4, 2225.0], [97.5, 2238.0], [97.6, 2259.0], [97.7, 2276.0], [97.8, 2308.0], [97.9, 2371.0], [98.0, 2390.0], [98.1, 2414.0], [98.2, 2463.0], [98.3, 2498.0], [98.4, 2512.0], [98.5, 2561.0], [98.6, 2620.0], [98.7, 2659.0], [98.8, 2694.0], [98.9, 2748.0], [99.0, 2855.0], [99.1, 2932.0], [99.2, 3038.0], [99.3, 3204.0], [99.4, 3335.0], [99.5, 3439.0], [99.6, 3626.0], [99.7, 3962.0], [99.8, 4245.0], [99.9, 4784.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 580.0, "series": [{"data": [[600.0, 398.0], [700.0, 330.0], [800.0, 292.0], [900.0, 285.0], [1000.0, 306.0], [1100.0, 234.0], [1200.0, 235.0], [1300.0, 212.0], [1400.0, 152.0], [1500.0, 103.0], [1600.0, 90.0], [1700.0, 70.0], [1800.0, 38.0], [1900.0, 40.0], [2000.0, 50.0], [2100.0, 39.0], [2200.0, 27.0], [2300.0, 12.0], [2400.0, 15.0], [2500.0, 13.0], [2600.0, 14.0], [2800.0, 8.0], [2700.0, 5.0], [2900.0, 4.0], [3000.0, 4.0], [3100.0, 3.0], [3300.0, 6.0], [3200.0, 3.0], [3400.0, 4.0], [3500.0, 3.0], [3600.0, 1.0], [3700.0, 1.0], [3800.0, 2.0], [3900.0, 4.0], [4000.0, 1.0], [4200.0, 2.0], [4400.0, 1.0], [4500.0, 2.0], [4700.0, 2.0], [4800.0, 1.0], [5100.0, 1.0], [5500.0, 1.0], [6900.0, 1.0], [8400.0, 1.0], [100.0, 73.0], [200.0, 570.0], [300.0, 402.0], [400.0, 580.0], [500.0, 549.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 571.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2989.0, "series": [{"data": [[0.0, 1630.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2989.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 571.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.11764705882353, "minX": 1.60263144E12, "maxY": 10.0, "series": [{"data": [[1.60263186E12, 10.0], [1.60263168E12, 10.0], [1.60263174E12, 10.0], [1.60263156E12, 10.0], [1.60263162E12, 10.0], [1.60263144E12, 10.0], [1.60263192E12, 9.11764705882353], [1.6026315E12, 10.0], [1.6026318E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263192E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 315.0, "minX": 1.0, "maxY": 2277.0, "series": [{"data": [[8.0, 315.0], [4.0, 712.0], [2.0, 938.0], [1.0, 2277.0], [9.0, 1297.0], [10.0, 856.3792704111181], [5.0, 1117.0], [6.0, 783.0], [3.0, 1532.0], [7.0, 1712.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 856.9526011560699]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 392.56666666666666, "minX": 1.60263144E12, "maxY": 3781267.683333333, "series": [{"data": [[1.60263186E12, 3072304.65], [1.60263168E12, 3152003.6], [1.60263174E12, 2605704.6666666665], [1.60263156E12, 3726891.5166666666], [1.60263162E12, 3597889.35], [1.60263144E12, 1196119.2666666666], [1.60263192E12, 227690.13333333333], [1.6026315E12, 2612601.5833333335], [1.6026318E12, 3781267.683333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263186E12, 5320.516666666666], [1.60263168E12, 4469.8], [1.60263174E12, 5224.816666666667], [1.60263156E12, 5465.166666666667], [1.60263162E12, 5565.983333333334], [1.60263144E12, 1212.0833333333333], [1.60263192E12, 392.56666666666666], [1.6026315E12, 5422.883333333333], [1.6026318E12, 5503.516666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263192E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 805.5046728971982, "minX": 1.60263144E12, "maxY": 1208.0426829268292, "series": [{"data": [[1.60263186E12, 849.0866477272729], [1.60263168E12, 975.0603588907006], [1.60263174E12, 836.0430555555554], [1.60263156E12, 816.482191780822], [1.60263162E12, 816.4318801089923], [1.60263144E12, 1208.0426829268292], [1.60263192E12, 1020.2156862745098], [1.6026315E12, 805.5046728971982], [1.6026318E12, 829.5144827586209]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263192E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 803.9893190921223, "minX": 1.60263144E12, "maxY": 1204.6768292682918, "series": [{"data": [[1.60263186E12, 847.5866477272721], [1.60263168E12, 973.247960848287], [1.60263174E12, 834.681944444444], [1.60263156E12, 814.0972602739731], [1.60263162E12, 814.4087193460497], [1.60263144E12, 1204.6768292682918], [1.60263192E12, 1018.7843137254903], [1.6026315E12, 803.9893190921223], [1.6026318E12, 827.6179310344827]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263192E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60263144E12, "maxY": 0.7682926829268292, "series": [{"data": [[1.60263186E12, 0.012784090909090915], [1.60263168E12, 0.0163132137030995], [1.60263174E12, 0.020833333333333343], [1.60263156E12, 0.015068493150684939], [1.60263162E12, 0.008174386920980934], [1.60263144E12, 0.7682926829268292], [1.60263192E12, 0.0], [1.6026315E12, 0.016021361815754347], [1.6026318E12, 0.016551724137931035]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263192E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 180.0, "minX": 1.60263144E12, "maxY": 8457.0, "series": [{"data": [[1.60263186E12, 4068.0], [1.60263168E12, 8457.0], [1.60263174E12, 6938.0], [1.60263156E12, 3812.0], [1.60263162E12, 3997.0], [1.60263144E12, 4456.0], [1.60263192E12, 2277.0], [1.6026315E12, 4714.0], [1.6026318E12, 2947.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263186E12, 192.3449998319149], [1.60263168E12, 198.68199897527694], [1.60263174E12, 193.93399896860123], [1.60263156E12, 194.73699947714806], [1.60263162E12, 195.0], [1.60263144E12, 225.48499996066093], [1.60263192E12, 225.0], [1.6026315E12, 195.0], [1.6026318E12, 193.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263186E12, 192.97950006723403], [1.60263168E12, 202.39300029277803], [1.60263174E12, 197.27580013751984], [1.60263156E12, 196.23690006971358], [1.60263162E12, 195.27650007009507], [1.60263144E12, 225.63350001573562], [1.60263192E12, 225.0], [1.6026315E12, 195.42500007152557], [1.6026318E12, 193.93700034618377]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263186E12, 192.69749991595745], [1.60263168E12, 200.83099948763848], [1.60263174E12, 196.09699948430062], [1.60263156E12, 195.83349973857403], [1.60263162E12, 195.0], [1.60263144E12, 225.56749998033047], [1.60263192E12, 225.0], [1.6026315E12, 195.12499991059303], [1.6026318E12, 193.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263186E12, 186.0], [1.60263168E12, 184.0], [1.60263174E12, 180.0], [1.60263156E12, 184.0], [1.60263162E12, 183.0], [1.60263144E12, 225.0], [1.60263192E12, 225.0], [1.6026315E12, 190.0], [1.6026318E12, 181.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263186E12, 694.5], [1.60263168E12, 871.0], [1.60263174E12, 694.5], [1.60263156E12, 611.5], [1.60263162E12, 652.0], [1.60263144E12, 963.5], [1.60263192E12, 957.0], [1.6026315E12, 700.0], [1.6026318E12, 660.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263192E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 400.5, "minX": 2.0, "maxY": 2446.5, "series": [{"data": [[2.0, 2446.5], [8.0, 1043.0], [9.0, 1002.0], [10.0, 958.0], [11.0, 800.0], [12.0, 797.5], [13.0, 731.0], [14.0, 771.0], [15.0, 571.5], [16.0, 561.0], [4.0, 1238.0], [17.0, 542.0], [18.0, 450.0], [19.0, 472.5], [5.0, 1263.0], [20.0, 444.5], [21.0, 450.5], [22.0, 439.0], [23.0, 403.5], [6.0, 1082.0], [24.0, 430.5], [25.0, 400.5], [26.0, 438.5], [7.0, 1103.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 400.5, "minX": 2.0, "maxY": 2440.0, "series": [{"data": [[2.0, 2440.0], [8.0, 1040.0], [9.0, 993.0], [10.0, 956.5], [11.0, 799.0], [12.0, 796.0], [13.0, 731.0], [14.0, 770.0], [15.0, 570.0], [16.0, 561.0], [4.0, 1230.5], [17.0, 541.0], [18.0, 450.0], [19.0, 472.0], [5.0, 1259.0], [20.0, 444.5], [21.0, 450.5], [22.0, 439.0], [23.0, 403.5], [6.0, 1080.5], [24.0, 430.5], [25.0, 400.5], [26.0, 438.0], [7.0, 1102.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.60263144E12, "maxY": 12.483333333333333, "series": [{"data": [[1.60263186E12, 11.733333333333333], [1.60263168E12, 10.216666666666667], [1.60263174E12, 12.0], [1.60263156E12, 12.166666666666666], [1.60263162E12, 12.233333333333333], [1.60263144E12, 2.9], [1.60263192E12, 0.6833333333333333], [1.6026315E12, 12.483333333333333], [1.6026318E12, 12.083333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263192E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.60263144E12, "maxY": 12.483333333333333, "series": [{"data": [[1.60263186E12, 11.733333333333333], [1.60263168E12, 10.216666666666667], [1.60263174E12, 12.0], [1.60263156E12, 12.166666666666666], [1.60263162E12, 12.233333333333333], [1.60263144E12, 2.7333333333333334], [1.60263192E12, 0.85], [1.6026315E12, 12.483333333333333], [1.6026318E12, 12.083333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263192E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.60263144E12, "maxY": 12.483333333333333, "series": [{"data": [[1.60263186E12, 11.733333333333333], [1.60263168E12, 10.216666666666667], [1.60263174E12, 12.0], [1.60263156E12, 12.166666666666666], [1.60263162E12, 12.233333333333333], [1.60263144E12, 2.7333333333333334], [1.60263192E12, 0.85], [1.6026315E12, 12.483333333333333], [1.6026318E12, 12.083333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263192E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.60263144E12, "maxY": 12.483333333333333, "series": [{"data": [[1.60263186E12, 11.733333333333333], [1.60263168E12, 10.216666666666667], [1.60263174E12, 12.0], [1.60263156E12, 12.166666666666666], [1.60263162E12, 12.233333333333333], [1.60263144E12, 2.7333333333333334], [1.60263192E12, 0.85], [1.6026315E12, 12.483333333333333], [1.6026318E12, 12.083333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263192E12, "title": "Total Transactions Per Second"}},
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

