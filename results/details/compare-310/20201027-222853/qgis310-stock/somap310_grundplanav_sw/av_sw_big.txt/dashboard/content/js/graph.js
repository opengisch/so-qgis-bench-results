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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 6209.0, "series": [{"data": [[0.0, 182.0], [0.1, 190.0], [0.2, 192.0], [0.3, 193.0], [0.4, 195.0], [0.5, 196.0], [0.6, 197.0], [0.7, 198.0], [0.8, 200.0], [0.9, 200.0], [1.0, 201.0], [1.1, 202.0], [1.2, 203.0], [1.3, 205.0], [1.4, 206.0], [1.5, 206.0], [1.6, 207.0], [1.7, 208.0], [1.8, 209.0], [1.9, 210.0], [2.0, 211.0], [2.1, 213.0], [2.2, 214.0], [2.3, 215.0], [2.4, 215.0], [2.5, 216.0], [2.6, 217.0], [2.7, 218.0], [2.8, 218.0], [2.9, 219.0], [3.0, 219.0], [3.1, 220.0], [3.2, 221.0], [3.3, 221.0], [3.4, 222.0], [3.5, 223.0], [3.6, 225.0], [3.7, 225.0], [3.8, 225.0], [3.9, 226.0], [4.0, 227.0], [4.1, 227.0], [4.2, 228.0], [4.3, 229.0], [4.4, 230.0], [4.5, 231.0], [4.6, 231.0], [4.7, 231.0], [4.8, 232.0], [4.9, 233.0], [5.0, 234.0], [5.1, 235.0], [5.2, 235.0], [5.3, 236.0], [5.4, 236.0], [5.5, 237.0], [5.6, 237.0], [5.7, 238.0], [5.8, 239.0], [5.9, 240.0], [6.0, 240.0], [6.1, 241.0], [6.2, 241.0], [6.3, 242.0], [6.4, 243.0], [6.5, 244.0], [6.6, 245.0], [6.7, 246.0], [6.8, 248.0], [6.9, 250.0], [7.0, 251.0], [7.1, 252.0], [7.2, 253.0], [7.3, 255.0], [7.4, 257.0], [7.5, 259.0], [7.6, 260.0], [7.7, 263.0], [7.8, 264.0], [7.9, 265.0], [8.0, 266.0], [8.1, 267.0], [8.2, 269.0], [8.3, 270.0], [8.4, 272.0], [8.5, 274.0], [8.6, 275.0], [8.7, 275.0], [8.8, 276.0], [8.9, 277.0], [9.0, 278.0], [9.1, 280.0], [9.2, 280.0], [9.3, 281.0], [9.4, 282.0], [9.5, 283.0], [9.6, 283.0], [9.7, 284.0], [9.8, 285.0], [9.9, 285.0], [10.0, 286.0], [10.1, 287.0], [10.2, 288.0], [10.3, 289.0], [10.4, 291.0], [10.5, 292.0], [10.6, 293.0], [10.7, 294.0], [10.8, 295.0], [10.9, 297.0], [11.0, 298.0], [11.1, 299.0], [11.2, 299.0], [11.3, 301.0], [11.4, 301.0], [11.5, 302.0], [11.6, 304.0], [11.7, 304.0], [11.8, 305.0], [11.9, 306.0], [12.0, 307.0], [12.1, 308.0], [12.2, 309.0], [12.3, 310.0], [12.4, 311.0], [12.5, 312.0], [12.6, 312.0], [12.7, 314.0], [12.8, 315.0], [12.9, 315.0], [13.0, 316.0], [13.1, 317.0], [13.2, 319.0], [13.3, 320.0], [13.4, 321.0], [13.5, 323.0], [13.6, 324.0], [13.7, 325.0], [13.8, 326.0], [13.9, 329.0], [14.0, 330.0], [14.1, 331.0], [14.2, 332.0], [14.3, 333.0], [14.4, 333.0], [14.5, 334.0], [14.6, 335.0], [14.7, 336.0], [14.8, 339.0], [14.9, 341.0], [15.0, 345.0], [15.1, 347.0], [15.2, 348.0], [15.3, 350.0], [15.4, 351.0], [15.5, 353.0], [15.6, 355.0], [15.7, 355.0], [15.8, 357.0], [15.9, 360.0], [16.0, 361.0], [16.1, 362.0], [16.2, 364.0], [16.3, 368.0], [16.4, 369.0], [16.5, 370.0], [16.6, 374.0], [16.7, 376.0], [16.8, 378.0], [16.9, 379.0], [17.0, 381.0], [17.1, 382.0], [17.2, 386.0], [17.3, 387.0], [17.4, 388.0], [17.5, 389.0], [17.6, 389.0], [17.7, 390.0], [17.8, 391.0], [17.9, 392.0], [18.0, 394.0], [18.1, 394.0], [18.2, 395.0], [18.3, 396.0], [18.4, 397.0], [18.5, 398.0], [18.6, 400.0], [18.7, 400.0], [18.8, 402.0], [18.9, 403.0], [19.0, 403.0], [19.1, 404.0], [19.2, 405.0], [19.3, 405.0], [19.4, 406.0], [19.5, 407.0], [19.6, 408.0], [19.7, 408.0], [19.8, 409.0], [19.9, 410.0], [20.0, 411.0], [20.1, 413.0], [20.2, 413.0], [20.3, 414.0], [20.4, 415.0], [20.5, 416.0], [20.6, 417.0], [20.7, 418.0], [20.8, 419.0], [20.9, 420.0], [21.0, 421.0], [21.1, 422.0], [21.2, 423.0], [21.3, 423.0], [21.4, 423.0], [21.5, 424.0], [21.6, 427.0], [21.7, 427.0], [21.8, 427.0], [21.9, 428.0], [22.0, 429.0], [22.1, 429.0], [22.2, 432.0], [22.3, 433.0], [22.4, 433.0], [22.5, 434.0], [22.6, 436.0], [22.7, 436.0], [22.8, 437.0], [22.9, 438.0], [23.0, 438.0], [23.1, 439.0], [23.2, 440.0], [23.3, 441.0], [23.4, 442.0], [23.5, 443.0], [23.6, 444.0], [23.7, 445.0], [23.8, 446.0], [23.9, 446.0], [24.0, 447.0], [24.1, 448.0], [24.2, 449.0], [24.3, 450.0], [24.4, 451.0], [24.5, 452.0], [24.6, 453.0], [24.7, 453.0], [24.8, 454.0], [24.9, 455.0], [25.0, 456.0], [25.1, 457.0], [25.2, 458.0], [25.3, 459.0], [25.4, 460.0], [25.5, 460.0], [25.6, 461.0], [25.7, 461.0], [25.8, 461.0], [25.9, 462.0], [26.0, 463.0], [26.1, 464.0], [26.2, 464.0], [26.3, 465.0], [26.4, 466.0], [26.5, 467.0], [26.6, 468.0], [26.7, 469.0], [26.8, 469.0], [26.9, 471.0], [27.0, 471.0], [27.1, 472.0], [27.2, 473.0], [27.3, 474.0], [27.4, 475.0], [27.5, 476.0], [27.6, 477.0], [27.7, 478.0], [27.8, 478.0], [27.9, 479.0], [28.0, 480.0], [28.1, 481.0], [28.2, 482.0], [28.3, 483.0], [28.4, 484.0], [28.5, 484.0], [28.6, 485.0], [28.7, 486.0], [28.8, 487.0], [28.9, 488.0], [29.0, 488.0], [29.1, 489.0], [29.2, 491.0], [29.3, 493.0], [29.4, 493.0], [29.5, 495.0], [29.6, 496.0], [29.7, 497.0], [29.8, 498.0], [29.9, 499.0], [30.0, 500.0], [30.1, 501.0], [30.2, 501.0], [30.3, 503.0], [30.4, 503.0], [30.5, 505.0], [30.6, 507.0], [30.7, 508.0], [30.8, 509.0], [30.9, 510.0], [31.0, 511.0], [31.1, 513.0], [31.2, 514.0], [31.3, 515.0], [31.4, 515.0], [31.5, 516.0], [31.6, 518.0], [31.7, 519.0], [31.8, 520.0], [31.9, 521.0], [32.0, 522.0], [32.1, 523.0], [32.2, 525.0], [32.3, 526.0], [32.4, 527.0], [32.5, 528.0], [32.6, 529.0], [32.7, 532.0], [32.8, 533.0], [32.9, 534.0], [33.0, 535.0], [33.1, 536.0], [33.2, 537.0], [33.3, 538.0], [33.4, 540.0], [33.5, 540.0], [33.6, 541.0], [33.7, 543.0], [33.8, 544.0], [33.9, 545.0], [34.0, 546.0], [34.1, 546.0], [34.2, 547.0], [34.3, 547.0], [34.4, 548.0], [34.5, 549.0], [34.6, 550.0], [34.7, 552.0], [34.8, 553.0], [34.9, 554.0], [35.0, 555.0], [35.1, 555.0], [35.2, 556.0], [35.3, 557.0], [35.4, 558.0], [35.5, 558.0], [35.6, 560.0], [35.7, 560.0], [35.8, 561.0], [35.9, 562.0], [36.0, 562.0], [36.1, 563.0], [36.2, 564.0], [36.3, 564.0], [36.4, 566.0], [36.5, 567.0], [36.6, 568.0], [36.7, 569.0], [36.8, 570.0], [36.9, 572.0], [37.0, 572.0], [37.1, 573.0], [37.2, 573.0], [37.3, 574.0], [37.4, 576.0], [37.5, 577.0], [37.6, 578.0], [37.7, 578.0], [37.8, 579.0], [37.9, 581.0], [38.0, 582.0], [38.1, 583.0], [38.2, 584.0], [38.3, 585.0], [38.4, 586.0], [38.5, 587.0], [38.6, 588.0], [38.7, 589.0], [38.8, 589.0], [38.9, 590.0], [39.0, 591.0], [39.1, 593.0], [39.2, 594.0], [39.3, 595.0], [39.4, 595.0], [39.5, 596.0], [39.6, 597.0], [39.7, 598.0], [39.8, 599.0], [39.9, 599.0], [40.0, 601.0], [40.1, 602.0], [40.2, 603.0], [40.3, 604.0], [40.4, 605.0], [40.5, 605.0], [40.6, 606.0], [40.7, 607.0], [40.8, 609.0], [40.9, 610.0], [41.0, 611.0], [41.1, 612.0], [41.2, 613.0], [41.3, 614.0], [41.4, 616.0], [41.5, 618.0], [41.6, 619.0], [41.7, 619.0], [41.8, 620.0], [41.9, 622.0], [42.0, 623.0], [42.1, 624.0], [42.2, 624.0], [42.3, 626.0], [42.4, 627.0], [42.5, 629.0], [42.6, 629.0], [42.7, 631.0], [42.8, 632.0], [42.9, 633.0], [43.0, 635.0], [43.1, 636.0], [43.2, 637.0], [43.3, 639.0], [43.4, 640.0], [43.5, 641.0], [43.6, 643.0], [43.7, 645.0], [43.8, 647.0], [43.9, 647.0], [44.0, 648.0], [44.1, 649.0], [44.2, 650.0], [44.3, 651.0], [44.4, 652.0], [44.5, 654.0], [44.6, 654.0], [44.7, 655.0], [44.8, 656.0], [44.9, 658.0], [45.0, 659.0], [45.1, 659.0], [45.2, 661.0], [45.3, 661.0], [45.4, 663.0], [45.5, 664.0], [45.6, 666.0], [45.7, 667.0], [45.8, 669.0], [45.9, 670.0], [46.0, 672.0], [46.1, 673.0], [46.2, 675.0], [46.3, 676.0], [46.4, 678.0], [46.5, 680.0], [46.6, 681.0], [46.7, 683.0], [46.8, 685.0], [46.9, 687.0], [47.0, 690.0], [47.1, 691.0], [47.2, 692.0], [47.3, 693.0], [47.4, 696.0], [47.5, 698.0], [47.6, 700.0], [47.7, 702.0], [47.8, 704.0], [47.9, 706.0], [48.0, 708.0], [48.1, 709.0], [48.2, 711.0], [48.3, 713.0], [48.4, 715.0], [48.5, 717.0], [48.6, 718.0], [48.7, 718.0], [48.8, 720.0], [48.9, 721.0], [49.0, 722.0], [49.1, 723.0], [49.2, 724.0], [49.3, 727.0], [49.4, 729.0], [49.5, 730.0], [49.6, 732.0], [49.7, 734.0], [49.8, 736.0], [49.9, 737.0], [50.0, 738.0], [50.1, 740.0], [50.2, 741.0], [50.3, 743.0], [50.4, 744.0], [50.5, 745.0], [50.6, 746.0], [50.7, 748.0], [50.8, 751.0], [50.9, 752.0], [51.0, 753.0], [51.1, 756.0], [51.2, 757.0], [51.3, 759.0], [51.4, 760.0], [51.5, 761.0], [51.6, 763.0], [51.7, 763.0], [51.8, 765.0], [51.9, 766.0], [52.0, 767.0], [52.1, 767.0], [52.2, 768.0], [52.3, 769.0], [52.4, 771.0], [52.5, 772.0], [52.6, 773.0], [52.7, 775.0], [52.8, 777.0], [52.9, 779.0], [53.0, 779.0], [53.1, 781.0], [53.2, 783.0], [53.3, 786.0], [53.4, 787.0], [53.5, 789.0], [53.6, 791.0], [53.7, 793.0], [53.8, 795.0], [53.9, 798.0], [54.0, 799.0], [54.1, 801.0], [54.2, 802.0], [54.3, 803.0], [54.4, 804.0], [54.5, 805.0], [54.6, 807.0], [54.7, 808.0], [54.8, 811.0], [54.9, 813.0], [55.0, 815.0], [55.1, 817.0], [55.2, 820.0], [55.3, 823.0], [55.4, 825.0], [55.5, 826.0], [55.6, 828.0], [55.7, 830.0], [55.8, 831.0], [55.9, 834.0], [56.0, 837.0], [56.1, 838.0], [56.2, 840.0], [56.3, 842.0], [56.4, 845.0], [56.5, 846.0], [56.6, 847.0], [56.7, 849.0], [56.8, 850.0], [56.9, 852.0], [57.0, 853.0], [57.1, 855.0], [57.2, 857.0], [57.3, 859.0], [57.4, 860.0], [57.5, 862.0], [57.6, 863.0], [57.7, 864.0], [57.8, 865.0], [57.9, 867.0], [58.0, 869.0], [58.1, 871.0], [58.2, 874.0], [58.3, 875.0], [58.4, 876.0], [58.5, 878.0], [58.6, 879.0], [58.7, 881.0], [58.8, 882.0], [58.9, 883.0], [59.0, 886.0], [59.1, 887.0], [59.2, 890.0], [59.3, 891.0], [59.4, 894.0], [59.5, 896.0], [59.6, 897.0], [59.7, 898.0], [59.8, 899.0], [59.9, 900.0], [60.0, 904.0], [60.1, 907.0], [60.2, 909.0], [60.3, 912.0], [60.4, 913.0], [60.5, 915.0], [60.6, 917.0], [60.7, 918.0], [60.8, 921.0], [60.9, 924.0], [61.0, 924.0], [61.1, 926.0], [61.2, 927.0], [61.3, 928.0], [61.4, 930.0], [61.5, 931.0], [61.6, 933.0], [61.7, 934.0], [61.8, 936.0], [61.9, 937.0], [62.0, 939.0], [62.1, 940.0], [62.2, 942.0], [62.3, 943.0], [62.4, 945.0], [62.5, 946.0], [62.6, 947.0], [62.7, 950.0], [62.8, 951.0], [62.9, 953.0], [63.0, 955.0], [63.1, 957.0], [63.2, 960.0], [63.3, 962.0], [63.4, 964.0], [63.5, 967.0], [63.6, 968.0], [63.7, 971.0], [63.8, 972.0], [63.9, 973.0], [64.0, 975.0], [64.1, 976.0], [64.2, 979.0], [64.3, 980.0], [64.4, 981.0], [64.5, 983.0], [64.6, 986.0], [64.7, 987.0], [64.8, 990.0], [64.9, 992.0], [65.0, 993.0], [65.1, 995.0], [65.2, 997.0], [65.3, 998.0], [65.4, 1000.0], [65.5, 1002.0], [65.6, 1002.0], [65.7, 1003.0], [65.8, 1005.0], [65.9, 1006.0], [66.0, 1008.0], [66.1, 1009.0], [66.2, 1011.0], [66.3, 1012.0], [66.4, 1014.0], [66.5, 1016.0], [66.6, 1018.0], [66.7, 1019.0], [66.8, 1021.0], [66.9, 1022.0], [67.0, 1024.0], [67.1, 1025.0], [67.2, 1027.0], [67.3, 1028.0], [67.4, 1032.0], [67.5, 1034.0], [67.6, 1036.0], [67.7, 1039.0], [67.8, 1042.0], [67.9, 1044.0], [68.0, 1047.0], [68.1, 1047.0], [68.2, 1050.0], [68.3, 1053.0], [68.4, 1055.0], [68.5, 1057.0], [68.6, 1059.0], [68.7, 1061.0], [68.8, 1063.0], [68.9, 1063.0], [69.0, 1065.0], [69.1, 1068.0], [69.2, 1068.0], [69.3, 1070.0], [69.4, 1072.0], [69.5, 1075.0], [69.6, 1076.0], [69.7, 1077.0], [69.8, 1078.0], [69.9, 1079.0], [70.0, 1083.0], [70.1, 1086.0], [70.2, 1088.0], [70.3, 1089.0], [70.4, 1092.0], [70.5, 1094.0], [70.6, 1096.0], [70.7, 1097.0], [70.8, 1099.0], [70.9, 1100.0], [71.0, 1102.0], [71.1, 1103.0], [71.2, 1106.0], [71.3, 1107.0], [71.4, 1109.0], [71.5, 1110.0], [71.6, 1112.0], [71.7, 1113.0], [71.8, 1116.0], [71.9, 1117.0], [72.0, 1119.0], [72.1, 1120.0], [72.2, 1121.0], [72.3, 1123.0], [72.4, 1126.0], [72.5, 1127.0], [72.6, 1130.0], [72.7, 1133.0], [72.8, 1134.0], [72.9, 1135.0], [73.0, 1138.0], [73.1, 1142.0], [73.2, 1143.0], [73.3, 1145.0], [73.4, 1146.0], [73.5, 1148.0], [73.6, 1148.0], [73.7, 1150.0], [73.8, 1151.0], [73.9, 1153.0], [74.0, 1154.0], [74.1, 1157.0], [74.2, 1158.0], [74.3, 1161.0], [74.4, 1162.0], [74.5, 1167.0], [74.6, 1168.0], [74.7, 1171.0], [74.8, 1174.0], [74.9, 1176.0], [75.0, 1179.0], [75.1, 1181.0], [75.2, 1184.0], [75.3, 1185.0], [75.4, 1189.0], [75.5, 1191.0], [75.6, 1192.0], [75.7, 1193.0], [75.8, 1196.0], [75.9, 1198.0], [76.0, 1201.0], [76.1, 1202.0], [76.2, 1205.0], [76.3, 1205.0], [76.4, 1207.0], [76.5, 1212.0], [76.6, 1216.0], [76.7, 1218.0], [76.8, 1219.0], [76.9, 1222.0], [77.0, 1223.0], [77.1, 1227.0], [77.2, 1230.0], [77.3, 1234.0], [77.4, 1236.0], [77.5, 1239.0], [77.6, 1241.0], [77.7, 1242.0], [77.8, 1244.0], [77.9, 1246.0], [78.0, 1248.0], [78.1, 1249.0], [78.2, 1253.0], [78.3, 1255.0], [78.4, 1256.0], [78.5, 1258.0], [78.6, 1259.0], [78.7, 1264.0], [78.8, 1266.0], [78.9, 1268.0], [79.0, 1270.0], [79.1, 1277.0], [79.2, 1279.0], [79.3, 1281.0], [79.4, 1284.0], [79.5, 1287.0], [79.6, 1290.0], [79.7, 1290.0], [79.8, 1293.0], [79.9, 1298.0], [80.0, 1300.0], [80.1, 1304.0], [80.2, 1307.0], [80.3, 1309.0], [80.4, 1313.0], [80.5, 1316.0], [80.6, 1318.0], [80.7, 1320.0], [80.8, 1322.0], [80.9, 1325.0], [81.0, 1328.0], [81.1, 1332.0], [81.2, 1334.0], [81.3, 1337.0], [81.4, 1339.0], [81.5, 1340.0], [81.6, 1344.0], [81.7, 1346.0], [81.8, 1349.0], [81.9, 1351.0], [82.0, 1353.0], [82.1, 1356.0], [82.2, 1361.0], [82.3, 1362.0], [82.4, 1365.0], [82.5, 1368.0], [82.6, 1370.0], [82.7, 1372.0], [82.8, 1373.0], [82.9, 1376.0], [83.0, 1377.0], [83.1, 1378.0], [83.2, 1381.0], [83.3, 1381.0], [83.4, 1385.0], [83.5, 1388.0], [83.6, 1390.0], [83.7, 1392.0], [83.8, 1399.0], [83.9, 1403.0], [84.0, 1406.0], [84.1, 1409.0], [84.2, 1410.0], [84.3, 1413.0], [84.4, 1415.0], [84.5, 1418.0], [84.6, 1420.0], [84.7, 1424.0], [84.8, 1429.0], [84.9, 1430.0], [85.0, 1432.0], [85.1, 1434.0], [85.2, 1438.0], [85.3, 1441.0], [85.4, 1442.0], [85.5, 1445.0], [85.6, 1448.0], [85.7, 1450.0], [85.8, 1455.0], [85.9, 1457.0], [86.0, 1461.0], [86.1, 1464.0], [86.2, 1466.0], [86.3, 1468.0], [86.4, 1470.0], [86.5, 1472.0], [86.6, 1474.0], [86.7, 1475.0], [86.8, 1476.0], [86.9, 1478.0], [87.0, 1480.0], [87.1, 1483.0], [87.2, 1485.0], [87.3, 1486.0], [87.4, 1492.0], [87.5, 1498.0], [87.6, 1501.0], [87.7, 1503.0], [87.8, 1505.0], [87.9, 1508.0], [88.0, 1511.0], [88.1, 1516.0], [88.2, 1521.0], [88.3, 1525.0], [88.4, 1529.0], [88.5, 1533.0], [88.6, 1537.0], [88.7, 1541.0], [88.8, 1545.0], [88.9, 1548.0], [89.0, 1550.0], [89.1, 1554.0], [89.2, 1558.0], [89.3, 1566.0], [89.4, 1569.0], [89.5, 1572.0], [89.6, 1580.0], [89.7, 1583.0], [89.8, 1586.0], [89.9, 1592.0], [90.0, 1596.0], [90.1, 1598.0], [90.2, 1609.0], [90.3, 1617.0], [90.4, 1626.0], [90.5, 1630.0], [90.6, 1643.0], [90.7, 1647.0], [90.8, 1653.0], [90.9, 1659.0], [91.0, 1661.0], [91.1, 1667.0], [91.2, 1672.0], [91.3, 1681.0], [91.4, 1691.0], [91.5, 1696.0], [91.6, 1706.0], [91.7, 1715.0], [91.8, 1720.0], [91.9, 1735.0], [92.0, 1741.0], [92.1, 1744.0], [92.2, 1754.0], [92.3, 1760.0], [92.4, 1765.0], [92.5, 1771.0], [92.6, 1778.0], [92.7, 1784.0], [92.8, 1789.0], [92.9, 1796.0], [93.0, 1805.0], [93.1, 1816.0], [93.2, 1824.0], [93.3, 1831.0], [93.4, 1837.0], [93.5, 1847.0], [93.6, 1859.0], [93.7, 1878.0], [93.8, 1882.0], [93.9, 1891.0], [94.0, 1902.0], [94.1, 1907.0], [94.2, 1915.0], [94.3, 1936.0], [94.4, 1948.0], [94.5, 1957.0], [94.6, 1965.0], [94.7, 1980.0], [94.8, 1985.0], [94.9, 1993.0], [95.0, 1996.0], [95.1, 2009.0], [95.2, 2022.0], [95.3, 2033.0], [95.4, 2041.0], [95.5, 2046.0], [95.6, 2063.0], [95.7, 2087.0], [95.8, 2104.0], [95.9, 2122.0], [96.0, 2135.0], [96.1, 2152.0], [96.2, 2173.0], [96.3, 2191.0], [96.4, 2205.0], [96.5, 2212.0], [96.6, 2221.0], [96.7, 2237.0], [96.8, 2254.0], [96.9, 2269.0], [97.0, 2280.0], [97.1, 2288.0], [97.2, 2301.0], [97.3, 2316.0], [97.4, 2332.0], [97.5, 2352.0], [97.6, 2374.0], [97.7, 2387.0], [97.8, 2400.0], [97.9, 2431.0], [98.0, 2463.0], [98.1, 2489.0], [98.2, 2520.0], [98.3, 2540.0], [98.4, 2568.0], [98.5, 2619.0], [98.6, 2681.0], [98.7, 2716.0], [98.8, 2739.0], [98.9, 2794.0], [99.0, 2830.0], [99.1, 2870.0], [99.2, 2929.0], [99.3, 3038.0], [99.4, 3225.0], [99.5, 3360.0], [99.6, 3502.0], [99.7, 3743.0], [99.8, 4116.0], [99.9, 4686.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 589.0, "series": [{"data": [[600.0, 396.0], [700.0, 337.0], [800.0, 300.0], [900.0, 288.0], [1000.0, 285.0], [1100.0, 265.0], [1200.0, 209.0], [1300.0, 199.0], [1400.0, 195.0], [1500.0, 132.0], [1600.0, 73.0], [100.0, 41.0], [1700.0, 75.0], [1800.0, 52.0], [1900.0, 56.0], [2000.0, 39.0], [2100.0, 28.0], [2200.0, 42.0], [2300.0, 33.0], [2400.0, 18.0], [2500.0, 18.0], [2600.0, 7.0], [2700.0, 17.0], [2800.0, 9.0], [2900.0, 8.0], [3000.0, 4.0], [3100.0, 2.0], [3200.0, 4.0], [200.0, 541.0], [3300.0, 4.0], [3400.0, 3.0], [3500.0, 3.0], [3600.0, 2.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 3.0], [4200.0, 1.0], [4100.0, 2.0], [4600.0, 1.0], [4500.0, 2.0], [300.0, 383.0], [4800.0, 1.0], [5000.0, 1.0], [5100.0, 1.0], [5900.0, 1.0], [6200.0, 1.0], [400.0, 589.0], [500.0, 517.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 645.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2984.0, "series": [{"data": [[0.0, 1561.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2984.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 645.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.714285714285717, "minX": 1.60383798E12, "maxY": 10.0, "series": [{"data": [[1.60383828E12, 10.0], [1.60383798E12, 10.0], [1.60383846E12, 8.714285714285717], [1.6038384E12, 10.0], [1.6038381E12, 10.0], [1.60383804E12, 10.0], [1.60383822E12, 10.0], [1.60383816E12, 10.0], [1.60383834E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383846E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 528.0, "minX": 1.0, "maxY": 2406.0, "series": [{"data": [[8.0, 528.0], [4.0, 1332.0], [2.0, 1045.0], [1.0, 2406.0], [9.0, 951.0], [10.0, 885.535224860066], [5.0, 1053.0], [6.0, 567.0], [3.0, 1179.0], [7.0, 1135.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 885.9641618497114]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 272.95, "minX": 1.60383798E12, "maxY": 3902733.4, "series": [{"data": [[1.60383828E12, 2671823.0833333335], [1.60383798E12, 1952367.8166666667], [1.60383846E12, 164969.25], [1.6038384E12, 2948462.183333333], [1.6038381E12, 3902733.4], [1.60383804E12, 2606746.783333333], [1.60383822E12, 3031181.25], [1.60383816E12, 3159448.4], [1.60383834E12, 3534582.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60383828E12, 5067.0], [1.60383798E12, 2646.2], [1.60383846E12, 272.95], [1.6038384E12, 5131.616666666667], [1.6038381E12, 5265.316666666667], [1.60383804E12, 5231.233333333334], [1.60383822E12, 4340.883333333333], [1.60383816E12, 5230.516666666666], [1.60383834E12, 5391.616666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383846E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 831.806406685237, "minX": 1.60383798E12, "maxY": 1022.3142857142856, "series": [{"data": [[1.60383828E12, 858.7737752161377], [1.60383798E12, 1005.679347826086], [1.60383846E12, 1022.3142857142856], [1.6038384E12, 881.0868924889538], [1.6038381E12, 860.8933717579255], [1.60383804E12, 831.806406685237], [1.60383822E12, 1002.4641068447418], [1.60383816E12, 864.6199421965318], [1.60383834E12, 850.2756680731363]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383846E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 830.1963788300839, "minX": 1.60383798E12, "maxY": 1020.6857142857143, "series": [{"data": [[1.60383828E12, 857.3328530259366], [1.60383798E12, 1003.2907608695642], [1.60383846E12, 1020.6857142857143], [1.6038384E12, 879.5935198821788], [1.6038381E12, 858.7939481268011], [1.60383804E12, 830.1963788300839], [1.60383822E12, 1000.8814691151914], [1.60383816E12, 862.835260115606], [1.60383834E12, 848.379746835443]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383846E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60383798E12, "maxY": 0.23641304347826092, "series": [{"data": [[1.60383828E12, 0.01585014409221902], [1.60383798E12, 0.23641304347826092], [1.60383846E12, 0.0], [1.6038384E12, 0.011782032400589119], [1.6038381E12, 0.012968299711815562], [1.60383804E12, 0.01671309192200556], [1.60383822E12, 0.020033388981636042], [1.60383816E12, 0.01300578034682081], [1.60383834E12, 0.01547116736990155]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383846E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.60383798E12, "maxY": 6209.0, "series": [{"data": [[1.60383828E12, 4116.0], [1.60383798E12, 5054.0], [1.60383846E12, 2477.0], [1.6038384E12, 3903.0], [1.6038381E12, 3743.0], [1.60383804E12, 4560.0], [1.60383822E12, 6209.0], [1.60383816E12, 3968.0], [1.60383834E12, 3316.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60383828E12, 200.50999966859817], [1.60383798E12, 206.2469993841648], [1.60383846E12, 314.0], [1.6038384E12, 198.3599995136261], [1.6038381E12, 197.2549998342991], [1.60383804E12, 202.47099982857705], [1.60383822E12, 200.0], [1.60383816E12, 207.23699983477593], [1.60383834E12, 194.81599966049194]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60383828E12, 201.76100013256072], [1.60383798E12, 208.57170024633407], [1.60383846E12, 314.0], [1.6038384E12, 200.19600019454955], [1.6038381E12, 197.88050006628038], [1.60383804E12, 203.0], [1.60383822E12, 200.0], [1.60383816E12, 207.86070006608963], [1.60383834E12, 196.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60383828E12, 201.2049998342991], [1.60383798E12, 207.5384996920824], [1.60383846E12, 314.0], [1.6038384E12, 199.37999975681305], [1.6038381E12, 197.60249991714954], [1.60383804E12, 202.8304999142885], [1.60383822E12, 200.0], [1.60383816E12, 207.58349991738797], [1.60383834E12, 195.52799983024596]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60383828E12, 182.0], [1.60383798E12, 198.0], [1.60383846E12, 314.0], [1.6038384E12, 190.0], [1.6038381E12, 185.0], [1.60383804E12, 190.0], [1.60383822E12, 193.0], [1.60383816E12, 192.0], [1.60383834E12, 189.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60383828E12, 718.0], [1.60383798E12, 844.5], [1.60383846E12, 953.0], [1.6038384E12, 764.0], [1.6038381E12, 656.0], [1.60383804E12, 659.0], [1.60383822E12, 902.0], [1.60383816E12, 708.0], [1.60383834E12, 663.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383846E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 408.0, "minX": 1.0, "maxY": 2571.5, "series": [{"data": [[2.0, 2526.0], [3.0, 1193.0], [4.0, 1377.0], [5.0, 1179.0], [6.0, 1206.0], [7.0, 1134.5], [8.0, 1045.5], [9.0, 1006.0], [10.0, 935.0], [11.0, 817.0], [12.0, 770.0], [13.0, 732.0], [14.0, 709.0], [15.0, 640.0], [1.0, 2571.5], [16.0, 627.0], [17.0, 463.0], [18.0, 492.5], [19.0, 492.0], [20.0, 461.5], [21.0, 419.5], [22.0, 442.0], [23.0, 427.0], [24.0, 433.5], [25.0, 408.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 408.0, "minX": 1.0, "maxY": 2564.5, "series": [{"data": [[2.0, 2518.0], [3.0, 1186.0], [4.0, 1375.5], [5.0, 1178.5], [6.0, 1203.0], [7.0, 1132.5], [8.0, 1043.0], [9.0, 1003.5], [10.0, 932.5], [11.0, 815.0], [12.0, 768.0], [13.0, 731.5], [14.0, 709.0], [15.0, 639.0], [1.0, 2564.5], [16.0, 625.5], [17.0, 463.0], [18.0, 491.5], [19.0, 491.5], [20.0, 461.5], [21.0, 418.5], [22.0, 442.0], [23.0, 426.0], [24.0, 433.5], [25.0, 408.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.60383798E12, "maxY": 11.966666666666667, "series": [{"data": [[1.60383828E12, 11.566666666666666], [1.60383798E12, 6.3], [1.60383846E12, 0.4166666666666667], [1.6038384E12, 11.316666666666666], [1.6038381E12, 11.566666666666666], [1.60383804E12, 11.966666666666667], [1.60383822E12, 9.983333333333333], [1.60383816E12, 11.533333333333333], [1.60383834E12, 11.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383846E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.60383798E12, "maxY": 11.966666666666667, "series": [{"data": [[1.60383828E12, 11.566666666666666], [1.60383798E12, 6.133333333333334], [1.60383846E12, 0.5833333333333334], [1.6038384E12, 11.316666666666666], [1.6038381E12, 11.566666666666666], [1.60383804E12, 11.966666666666667], [1.60383822E12, 9.983333333333333], [1.60383816E12, 11.533333333333333], [1.60383834E12, 11.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383846E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.60383798E12, "maxY": 11.966666666666667, "series": [{"data": [[1.60383828E12, 11.566666666666666], [1.60383798E12, 6.133333333333334], [1.60383846E12, 0.5833333333333334], [1.6038384E12, 11.316666666666666], [1.6038381E12, 11.566666666666666], [1.60383804E12, 11.966666666666667], [1.60383822E12, 9.983333333333333], [1.60383816E12, 11.533333333333333], [1.60383834E12, 11.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383846E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.60383798E12, "maxY": 11.966666666666667, "series": [{"data": [[1.60383828E12, 11.566666666666666], [1.60383798E12, 6.133333333333334], [1.60383846E12, 0.5833333333333334], [1.6038384E12, 11.316666666666666], [1.6038381E12, 11.566666666666666], [1.60383804E12, 11.966666666666667], [1.60383822E12, 9.983333333333333], [1.60383816E12, 11.533333333333333], [1.60383834E12, 11.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383846E12, "title": "Total Transactions Per Second"}},
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

