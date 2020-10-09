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
        data: {"result": {"minY": 181.0, "minX": 0.0, "maxY": 8798.0, "series": [{"data": [[0.0, 181.0], [0.1, 184.0], [0.2, 185.0], [0.3, 186.0], [0.4, 188.0], [0.5, 189.0], [0.6, 190.0], [0.7, 192.0], [0.8, 194.0], [0.9, 194.0], [1.0, 195.0], [1.1, 196.0], [1.2, 196.0], [1.3, 197.0], [1.4, 197.0], [1.5, 198.0], [1.6, 198.0], [1.7, 200.0], [1.8, 200.0], [1.9, 201.0], [2.0, 202.0], [2.1, 202.0], [2.2, 203.0], [2.3, 204.0], [2.4, 205.0], [2.5, 205.0], [2.6, 206.0], [2.7, 206.0], [2.8, 207.0], [2.9, 208.0], [3.0, 209.0], [3.1, 210.0], [3.2, 211.0], [3.3, 211.0], [3.4, 212.0], [3.5, 213.0], [3.6, 214.0], [3.7, 214.0], [3.8, 215.0], [3.9, 216.0], [4.0, 217.0], [4.1, 217.0], [4.2, 218.0], [4.3, 218.0], [4.4, 218.0], [4.5, 219.0], [4.6, 220.0], [4.7, 220.0], [4.8, 221.0], [4.9, 222.0], [5.0, 223.0], [5.1, 224.0], [5.2, 225.0], [5.3, 225.0], [5.4, 227.0], [5.5, 227.0], [5.6, 228.0], [5.7, 229.0], [5.8, 230.0], [5.9, 231.0], [6.0, 236.0], [6.1, 237.0], [6.2, 237.0], [6.3, 238.0], [6.4, 239.0], [6.5, 239.0], [6.6, 241.0], [6.7, 242.0], [6.8, 244.0], [6.9, 245.0], [7.0, 246.0], [7.1, 248.0], [7.2, 249.0], [7.3, 250.0], [7.4, 251.0], [7.5, 251.0], [7.6, 252.0], [7.7, 254.0], [7.8, 255.0], [7.9, 256.0], [8.0, 257.0], [8.1, 258.0], [8.2, 259.0], [8.3, 261.0], [8.4, 262.0], [8.5, 264.0], [8.6, 264.0], [8.7, 265.0], [8.8, 266.0], [8.9, 267.0], [9.0, 268.0], [9.1, 270.0], [9.2, 270.0], [9.3, 272.0], [9.4, 272.0], [9.5, 273.0], [9.6, 274.0], [9.7, 274.0], [9.8, 275.0], [9.9, 276.0], [10.0, 277.0], [10.1, 277.0], [10.2, 278.0], [10.3, 279.0], [10.4, 280.0], [10.5, 280.0], [10.6, 281.0], [10.7, 282.0], [10.8, 282.0], [10.9, 283.0], [11.0, 285.0], [11.1, 286.0], [11.2, 287.0], [11.3, 288.0], [11.4, 290.0], [11.5, 291.0], [11.6, 292.0], [11.7, 294.0], [11.8, 295.0], [11.9, 295.0], [12.0, 296.0], [12.1, 298.0], [12.2, 299.0], [12.3, 300.0], [12.4, 301.0], [12.5, 303.0], [12.6, 304.0], [12.7, 305.0], [12.8, 306.0], [12.9, 307.0], [13.0, 308.0], [13.1, 309.0], [13.2, 309.0], [13.3, 310.0], [13.4, 310.0], [13.5, 311.0], [13.6, 313.0], [13.7, 314.0], [13.8, 315.0], [13.9, 316.0], [14.0, 316.0], [14.1, 317.0], [14.2, 318.0], [14.3, 319.0], [14.4, 320.0], [14.5, 320.0], [14.6, 321.0], [14.7, 323.0], [14.8, 324.0], [14.9, 325.0], [15.0, 327.0], [15.1, 328.0], [15.2, 330.0], [15.3, 331.0], [15.4, 332.0], [15.5, 333.0], [15.6, 335.0], [15.7, 336.0], [15.8, 337.0], [15.9, 339.0], [16.0, 341.0], [16.1, 344.0], [16.2, 345.0], [16.3, 348.0], [16.4, 349.0], [16.5, 350.0], [16.6, 351.0], [16.7, 351.0], [16.8, 353.0], [16.9, 355.0], [17.0, 360.0], [17.1, 361.0], [17.2, 361.0], [17.3, 365.0], [17.4, 369.0], [17.5, 371.0], [17.6, 372.0], [17.7, 373.0], [17.8, 373.0], [17.9, 375.0], [18.0, 376.0], [18.1, 377.0], [18.2, 378.0], [18.3, 378.0], [18.4, 380.0], [18.5, 381.0], [18.6, 382.0], [18.7, 382.0], [18.8, 384.0], [18.9, 386.0], [19.0, 388.0], [19.1, 389.0], [19.2, 390.0], [19.3, 391.0], [19.4, 392.0], [19.5, 393.0], [19.6, 395.0], [19.7, 396.0], [19.8, 397.0], [19.9, 398.0], [20.0, 399.0], [20.1, 400.0], [20.2, 401.0], [20.3, 401.0], [20.4, 402.0], [20.5, 403.0], [20.6, 404.0], [20.7, 406.0], [20.8, 406.0], [20.9, 407.0], [21.0, 408.0], [21.1, 410.0], [21.2, 411.0], [21.3, 411.0], [21.4, 412.0], [21.5, 413.0], [21.6, 414.0], [21.7, 416.0], [21.8, 416.0], [21.9, 417.0], [22.0, 419.0], [22.1, 421.0], [22.2, 421.0], [22.3, 422.0], [22.4, 423.0], [22.5, 424.0], [22.6, 425.0], [22.7, 427.0], [22.8, 427.0], [22.9, 428.0], [23.0, 429.0], [23.1, 429.0], [23.2, 430.0], [23.3, 431.0], [23.4, 431.0], [23.5, 432.0], [23.6, 432.0], [23.7, 434.0], [23.8, 434.0], [23.9, 435.0], [24.0, 436.0], [24.1, 436.0], [24.2, 437.0], [24.3, 437.0], [24.4, 437.0], [24.5, 438.0], [24.6, 439.0], [24.7, 440.0], [24.8, 441.0], [24.9, 441.0], [25.0, 442.0], [25.1, 442.0], [25.2, 443.0], [25.3, 443.0], [25.4, 444.0], [25.5, 444.0], [25.6, 445.0], [25.7, 445.0], [25.8, 446.0], [25.9, 446.0], [26.0, 447.0], [26.1, 447.0], [26.2, 447.0], [26.3, 448.0], [26.4, 449.0], [26.5, 449.0], [26.6, 450.0], [26.7, 451.0], [26.8, 451.0], [26.9, 452.0], [27.0, 452.0], [27.1, 453.0], [27.2, 453.0], [27.3, 454.0], [27.4, 456.0], [27.5, 456.0], [27.6, 457.0], [27.7, 457.0], [27.8, 458.0], [27.9, 460.0], [28.0, 461.0], [28.1, 461.0], [28.2, 462.0], [28.3, 463.0], [28.4, 463.0], [28.5, 464.0], [28.6, 465.0], [28.7, 465.0], [28.8, 467.0], [28.9, 467.0], [29.0, 468.0], [29.1, 468.0], [29.2, 469.0], [29.3, 470.0], [29.4, 472.0], [29.5, 472.0], [29.6, 474.0], [29.7, 475.0], [29.8, 475.0], [29.9, 477.0], [30.0, 478.0], [30.1, 479.0], [30.2, 480.0], [30.3, 480.0], [30.4, 482.0], [30.5, 482.0], [30.6, 483.0], [30.7, 484.0], [30.8, 486.0], [30.9, 487.0], [31.0, 488.0], [31.1, 489.0], [31.2, 490.0], [31.3, 491.0], [31.4, 492.0], [31.5, 493.0], [31.6, 495.0], [31.7, 496.0], [31.8, 497.0], [31.9, 500.0], [32.0, 501.0], [32.1, 502.0], [32.2, 503.0], [32.3, 503.0], [32.4, 504.0], [32.5, 505.0], [32.6, 505.0], [32.7, 506.0], [32.8, 506.0], [32.9, 507.0], [33.0, 509.0], [33.1, 510.0], [33.2, 511.0], [33.3, 511.0], [33.4, 512.0], [33.5, 514.0], [33.6, 515.0], [33.7, 517.0], [33.8, 519.0], [33.9, 521.0], [34.0, 522.0], [34.1, 523.0], [34.2, 523.0], [34.3, 526.0], [34.4, 527.0], [34.5, 528.0], [34.6, 529.0], [34.7, 529.0], [34.8, 530.0], [34.9, 531.0], [35.0, 532.0], [35.1, 533.0], [35.2, 534.0], [35.3, 536.0], [35.4, 536.0], [35.5, 538.0], [35.6, 539.0], [35.7, 539.0], [35.8, 540.0], [35.9, 540.0], [36.0, 541.0], [36.1, 542.0], [36.2, 543.0], [36.3, 543.0], [36.4, 544.0], [36.5, 545.0], [36.6, 545.0], [36.7, 546.0], [36.8, 547.0], [36.9, 549.0], [37.0, 549.0], [37.1, 550.0], [37.2, 551.0], [37.3, 552.0], [37.4, 553.0], [37.5, 554.0], [37.6, 555.0], [37.7, 555.0], [37.8, 556.0], [37.9, 557.0], [38.0, 558.0], [38.1, 558.0], [38.2, 559.0], [38.3, 560.0], [38.4, 561.0], [38.5, 562.0], [38.6, 562.0], [38.7, 563.0], [38.8, 564.0], [38.9, 565.0], [39.0, 565.0], [39.1, 566.0], [39.2, 567.0], [39.3, 568.0], [39.4, 569.0], [39.5, 570.0], [39.6, 572.0], [39.7, 573.0], [39.8, 574.0], [39.9, 574.0], [40.0, 575.0], [40.1, 576.0], [40.2, 577.0], [40.3, 579.0], [40.4, 580.0], [40.5, 581.0], [40.6, 582.0], [40.7, 583.0], [40.8, 583.0], [40.9, 584.0], [41.0, 585.0], [41.1, 586.0], [41.2, 587.0], [41.3, 588.0], [41.4, 589.0], [41.5, 590.0], [41.6, 591.0], [41.7, 592.0], [41.8, 593.0], [41.9, 594.0], [42.0, 595.0], [42.1, 596.0], [42.2, 597.0], [42.3, 598.0], [42.4, 600.0], [42.5, 602.0], [42.6, 603.0], [42.7, 603.0], [42.8, 604.0], [42.9, 605.0], [43.0, 606.0], [43.1, 607.0], [43.2, 609.0], [43.3, 609.0], [43.4, 610.0], [43.5, 611.0], [43.6, 612.0], [43.7, 612.0], [43.8, 613.0], [43.9, 614.0], [44.0, 615.0], [44.1, 615.0], [44.2, 616.0], [44.3, 617.0], [44.4, 618.0], [44.5, 620.0], [44.6, 621.0], [44.7, 621.0], [44.8, 622.0], [44.9, 623.0], [45.0, 624.0], [45.1, 625.0], [45.2, 626.0], [45.3, 627.0], [45.4, 628.0], [45.5, 629.0], [45.6, 631.0], [45.7, 631.0], [45.8, 633.0], [45.9, 633.0], [46.0, 635.0], [46.1, 635.0], [46.2, 636.0], [46.3, 637.0], [46.4, 639.0], [46.5, 640.0], [46.6, 642.0], [46.7, 643.0], [46.8, 644.0], [46.9, 644.0], [47.0, 646.0], [47.1, 648.0], [47.2, 649.0], [47.3, 650.0], [47.4, 652.0], [47.5, 654.0], [47.6, 656.0], [47.7, 658.0], [47.8, 660.0], [47.9, 661.0], [48.0, 662.0], [48.1, 664.0], [48.2, 666.0], [48.3, 666.0], [48.4, 667.0], [48.5, 669.0], [48.6, 671.0], [48.7, 673.0], [48.8, 674.0], [48.9, 675.0], [49.0, 675.0], [49.1, 677.0], [49.2, 678.0], [49.3, 679.0], [49.4, 680.0], [49.5, 683.0], [49.6, 685.0], [49.7, 688.0], [49.8, 690.0], [49.9, 691.0], [50.0, 692.0], [50.1, 693.0], [50.2, 694.0], [50.3, 696.0], [50.4, 698.0], [50.5, 700.0], [50.6, 700.0], [50.7, 702.0], [50.8, 703.0], [50.9, 705.0], [51.0, 708.0], [51.1, 709.0], [51.2, 711.0], [51.3, 713.0], [51.4, 714.0], [51.5, 716.0], [51.6, 717.0], [51.7, 718.0], [51.8, 718.0], [51.9, 720.0], [52.0, 721.0], [52.1, 723.0], [52.2, 724.0], [52.3, 726.0], [52.4, 730.0], [52.5, 732.0], [52.6, 734.0], [52.7, 736.0], [52.8, 736.0], [52.9, 738.0], [53.0, 741.0], [53.1, 744.0], [53.2, 744.0], [53.3, 745.0], [53.4, 746.0], [53.5, 748.0], [53.6, 750.0], [53.7, 752.0], [53.8, 753.0], [53.9, 756.0], [54.0, 757.0], [54.1, 760.0], [54.2, 763.0], [54.3, 765.0], [54.4, 766.0], [54.5, 767.0], [54.6, 769.0], [54.7, 771.0], [54.8, 774.0], [54.9, 776.0], [55.0, 777.0], [55.1, 778.0], [55.2, 779.0], [55.3, 781.0], [55.4, 783.0], [55.5, 785.0], [55.6, 786.0], [55.7, 787.0], [55.8, 792.0], [55.9, 795.0], [56.0, 796.0], [56.1, 797.0], [56.2, 798.0], [56.3, 800.0], [56.4, 802.0], [56.5, 805.0], [56.6, 807.0], [56.7, 809.0], [56.8, 809.0], [56.9, 812.0], [57.0, 814.0], [57.1, 816.0], [57.2, 818.0], [57.3, 819.0], [57.4, 820.0], [57.5, 821.0], [57.6, 823.0], [57.7, 824.0], [57.8, 827.0], [57.9, 828.0], [58.0, 829.0], [58.1, 831.0], [58.2, 833.0], [58.3, 835.0], [58.4, 838.0], [58.5, 839.0], [58.6, 842.0], [58.7, 844.0], [58.8, 845.0], [58.9, 848.0], [59.0, 849.0], [59.1, 851.0], [59.2, 851.0], [59.3, 852.0], [59.4, 853.0], [59.5, 854.0], [59.6, 855.0], [59.7, 857.0], [59.8, 859.0], [59.9, 861.0], [60.0, 863.0], [60.1, 864.0], [60.2, 866.0], [60.3, 870.0], [60.4, 871.0], [60.5, 873.0], [60.6, 874.0], [60.7, 875.0], [60.8, 878.0], [60.9, 879.0], [61.0, 881.0], [61.1, 882.0], [61.2, 884.0], [61.3, 885.0], [61.4, 886.0], [61.5, 887.0], [61.6, 889.0], [61.7, 890.0], [61.8, 893.0], [61.9, 894.0], [62.0, 896.0], [62.1, 898.0], [62.2, 899.0], [62.3, 901.0], [62.4, 903.0], [62.5, 905.0], [62.6, 906.0], [62.7, 907.0], [62.8, 908.0], [62.9, 911.0], [63.0, 912.0], [63.1, 914.0], [63.2, 915.0], [63.3, 917.0], [63.4, 919.0], [63.5, 920.0], [63.6, 922.0], [63.7, 924.0], [63.8, 925.0], [63.9, 928.0], [64.0, 929.0], [64.1, 930.0], [64.2, 932.0], [64.3, 934.0], [64.4, 936.0], [64.5, 937.0], [64.6, 939.0], [64.7, 941.0], [64.8, 942.0], [64.9, 944.0], [65.0, 947.0], [65.1, 950.0], [65.2, 951.0], [65.3, 953.0], [65.4, 955.0], [65.5, 959.0], [65.6, 961.0], [65.7, 963.0], [65.8, 964.0], [65.9, 966.0], [66.0, 968.0], [66.1, 970.0], [66.2, 972.0], [66.3, 972.0], [66.4, 975.0], [66.5, 976.0], [66.6, 977.0], [66.7, 981.0], [66.8, 981.0], [66.9, 983.0], [67.0, 984.0], [67.1, 986.0], [67.2, 988.0], [67.3, 991.0], [67.4, 992.0], [67.5, 994.0], [67.6, 996.0], [67.7, 998.0], [67.8, 999.0], [67.9, 1002.0], [68.0, 1003.0], [68.1, 1006.0], [68.2, 1009.0], [68.3, 1010.0], [68.4, 1012.0], [68.5, 1013.0], [68.6, 1014.0], [68.7, 1015.0], [68.8, 1017.0], [68.9, 1019.0], [69.0, 1021.0], [69.1, 1022.0], [69.2, 1025.0], [69.3, 1027.0], [69.4, 1027.0], [69.5, 1028.0], [69.6, 1030.0], [69.7, 1032.0], [69.8, 1033.0], [69.9, 1033.0], [70.0, 1036.0], [70.1, 1037.0], [70.2, 1039.0], [70.3, 1040.0], [70.4, 1043.0], [70.5, 1044.0], [70.6, 1047.0], [70.7, 1051.0], [70.8, 1052.0], [70.9, 1053.0], [71.0, 1054.0], [71.1, 1055.0], [71.2, 1057.0], [71.3, 1058.0], [71.4, 1059.0], [71.5, 1061.0], [71.6, 1063.0], [71.7, 1064.0], [71.8, 1065.0], [71.9, 1065.0], [72.0, 1066.0], [72.1, 1068.0], [72.2, 1070.0], [72.3, 1072.0], [72.4, 1074.0], [72.5, 1075.0], [72.6, 1077.0], [72.7, 1078.0], [72.8, 1080.0], [72.9, 1083.0], [73.0, 1085.0], [73.1, 1089.0], [73.2, 1091.0], [73.3, 1092.0], [73.4, 1095.0], [73.5, 1097.0], [73.6, 1098.0], [73.7, 1100.0], [73.8, 1102.0], [73.9, 1104.0], [74.0, 1106.0], [74.1, 1108.0], [74.2, 1110.0], [74.3, 1112.0], [74.4, 1115.0], [74.5, 1118.0], [74.6, 1119.0], [74.7, 1120.0], [74.8, 1122.0], [74.9, 1124.0], [75.0, 1127.0], [75.1, 1130.0], [75.2, 1131.0], [75.3, 1133.0], [75.4, 1137.0], [75.5, 1138.0], [75.6, 1141.0], [75.7, 1142.0], [75.8, 1143.0], [75.9, 1145.0], [76.0, 1146.0], [76.1, 1149.0], [76.2, 1151.0], [76.3, 1152.0], [76.4, 1155.0], [76.5, 1157.0], [76.6, 1158.0], [76.7, 1161.0], [76.8, 1162.0], [76.9, 1164.0], [77.0, 1167.0], [77.1, 1170.0], [77.2, 1172.0], [77.3, 1175.0], [77.4, 1177.0], [77.5, 1180.0], [77.6, 1181.0], [77.7, 1184.0], [77.8, 1185.0], [77.9, 1190.0], [78.0, 1193.0], [78.1, 1196.0], [78.2, 1200.0], [78.3, 1203.0], [78.4, 1204.0], [78.5, 1205.0], [78.6, 1209.0], [78.7, 1211.0], [78.8, 1213.0], [78.9, 1216.0], [79.0, 1219.0], [79.1, 1223.0], [79.2, 1225.0], [79.3, 1227.0], [79.4, 1230.0], [79.5, 1233.0], [79.6, 1238.0], [79.7, 1242.0], [79.8, 1244.0], [79.9, 1246.0], [80.0, 1249.0], [80.1, 1252.0], [80.2, 1255.0], [80.3, 1259.0], [80.4, 1262.0], [80.5, 1264.0], [80.6, 1268.0], [80.7, 1269.0], [80.8, 1271.0], [80.9, 1275.0], [81.0, 1277.0], [81.1, 1279.0], [81.2, 1280.0], [81.3, 1282.0], [81.4, 1284.0], [81.5, 1286.0], [81.6, 1289.0], [81.7, 1292.0], [81.8, 1295.0], [81.9, 1297.0], [82.0, 1298.0], [82.1, 1300.0], [82.2, 1302.0], [82.3, 1305.0], [82.4, 1308.0], [82.5, 1309.0], [82.6, 1310.0], [82.7, 1310.0], [82.8, 1317.0], [82.9, 1318.0], [83.0, 1320.0], [83.1, 1321.0], [83.2, 1323.0], [83.3, 1327.0], [83.4, 1329.0], [83.5, 1333.0], [83.6, 1334.0], [83.7, 1336.0], [83.8, 1339.0], [83.9, 1341.0], [84.0, 1343.0], [84.1, 1348.0], [84.2, 1351.0], [84.3, 1354.0], [84.4, 1355.0], [84.5, 1357.0], [84.6, 1361.0], [84.7, 1362.0], [84.8, 1365.0], [84.9, 1369.0], [85.0, 1371.0], [85.1, 1373.0], [85.2, 1376.0], [85.3, 1379.0], [85.4, 1382.0], [85.5, 1384.0], [85.6, 1387.0], [85.7, 1388.0], [85.8, 1391.0], [85.9, 1392.0], [86.0, 1395.0], [86.1, 1397.0], [86.2, 1400.0], [86.3, 1402.0], [86.4, 1406.0], [86.5, 1407.0], [86.6, 1409.0], [86.7, 1409.0], [86.8, 1413.0], [86.9, 1414.0], [87.0, 1419.0], [87.1, 1422.0], [87.2, 1425.0], [87.3, 1427.0], [87.4, 1429.0], [87.5, 1436.0], [87.6, 1438.0], [87.7, 1441.0], [87.8, 1443.0], [87.9, 1451.0], [88.0, 1461.0], [88.1, 1465.0], [88.2, 1472.0], [88.3, 1478.0], [88.4, 1481.0], [88.5, 1489.0], [88.6, 1492.0], [88.7, 1499.0], [88.8, 1502.0], [88.9, 1508.0], [89.0, 1512.0], [89.1, 1519.0], [89.2, 1522.0], [89.3, 1525.0], [89.4, 1529.0], [89.5, 1532.0], [89.6, 1535.0], [89.7, 1542.0], [89.8, 1546.0], [89.9, 1548.0], [90.0, 1560.0], [90.1, 1567.0], [90.2, 1574.0], [90.3, 1583.0], [90.4, 1587.0], [90.5, 1592.0], [90.6, 1595.0], [90.7, 1601.0], [90.8, 1606.0], [90.9, 1610.0], [91.0, 1621.0], [91.1, 1625.0], [91.2, 1628.0], [91.3, 1639.0], [91.4, 1644.0], [91.5, 1651.0], [91.6, 1656.0], [91.7, 1663.0], [91.8, 1665.0], [91.9, 1675.0], [92.0, 1679.0], [92.1, 1691.0], [92.2, 1698.0], [92.3, 1706.0], [92.4, 1713.0], [92.5, 1718.0], [92.6, 1724.0], [92.7, 1737.0], [92.8, 1740.0], [92.9, 1747.0], [93.0, 1754.0], [93.1, 1765.0], [93.2, 1774.0], [93.3, 1780.0], [93.4, 1793.0], [93.5, 1797.0], [93.6, 1805.0], [93.7, 1814.0], [93.8, 1823.0], [93.9, 1831.0], [94.0, 1846.0], [94.1, 1857.0], [94.2, 1862.0], [94.3, 1873.0], [94.4, 1885.0], [94.5, 1895.0], [94.6, 1911.0], [94.7, 1919.0], [94.8, 1928.0], [94.9, 1934.0], [95.0, 1954.0], [95.1, 1960.0], [95.2, 1985.0], [95.3, 1991.0], [95.4, 2005.0], [95.5, 2011.0], [95.6, 2021.0], [95.7, 2033.0], [95.8, 2042.0], [95.9, 2056.0], [96.0, 2058.0], [96.1, 2067.0], [96.2, 2071.0], [96.3, 2075.0], [96.4, 2084.0], [96.5, 2096.0], [96.6, 2104.0], [96.7, 2113.0], [96.8, 2122.0], [96.9, 2130.0], [97.0, 2149.0], [97.1, 2167.0], [97.2, 2175.0], [97.3, 2188.0], [97.4, 2228.0], [97.5, 2258.0], [97.6, 2275.0], [97.7, 2296.0], [97.8, 2312.0], [97.9, 2359.0], [98.0, 2400.0], [98.1, 2444.0], [98.2, 2465.0], [98.3, 2505.0], [98.4, 2537.0], [98.5, 2581.0], [98.6, 2607.0], [98.7, 2648.0], [98.8, 2695.0], [98.9, 2767.0], [99.0, 2903.0], [99.1, 3017.0], [99.2, 3095.0], [99.3, 3249.0], [99.4, 3336.0], [99.5, 3696.0], [99.6, 4132.0], [99.7, 4417.0], [99.8, 4645.0], [99.9, 4991.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 612.0, "series": [{"data": [[600.0, 420.0], [700.0, 301.0], [800.0, 308.0], [900.0, 292.0], [1000.0, 304.0], [1100.0, 234.0], [1200.0, 201.0], [1300.0, 214.0], [1400.0, 131.0], [1500.0, 102.0], [1600.0, 81.0], [1700.0, 68.0], [1800.0, 50.0], [1900.0, 46.0], [2000.0, 59.0], [2100.0, 41.0], [2200.0, 21.0], [2300.0, 14.0], [2400.0, 13.0], [2500.0, 18.0], [2600.0, 11.0], [2800.0, 5.0], [2700.0, 5.0], [2900.0, 5.0], [3000.0, 6.0], [3100.0, 2.0], [3200.0, 7.0], [3300.0, 1.0], [3400.0, 1.0], [3500.0, 2.0], [3600.0, 4.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4100.0, 3.0], [4200.0, 1.0], [4300.0, 1.0], [4600.0, 4.0], [4400.0, 3.0], [4500.0, 1.0], [4700.0, 1.0], [4900.0, 2.0], [5000.0, 1.0], [5500.0, 1.0], [5700.0, 1.0], [6000.0, 1.0], [8700.0, 1.0], [100.0, 88.0], [200.0, 548.0], [300.0, 406.0], [400.0, 612.0], [500.0, 546.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2946.0, "series": [{"data": [[0.0, 1658.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2946.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 586.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.925249169435213, "minX": 1.60218594E12, "maxY": 10.0, "series": [{"data": [[1.60218636E12, 9.925249169435213], [1.60218606E12, 10.0], [1.602186E12, 10.0], [1.60218618E12, 10.0], [1.60218612E12, 10.0], [1.6021863E12, 10.0], [1.60218624E12, 10.0], [1.60218594E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218636E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 438.0, "minX": 1.0, "maxY": 2657.0, "series": [{"data": [[8.0, 438.0], [4.0, 691.0], [2.0, 2657.0], [1.0, 2591.0], [9.0, 890.0], [10.0, 854.3396372057106], [5.0, 1310.0], [6.0, 1044.0], [3.0, 1026.0], [7.0, 695.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 855.0433442496615]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2298.0666666666666, "minX": 1.60218594E12, "maxY": 3970506.1333333333, "series": [{"data": [[1.60218636E12, 2535808.7], [1.60218606E12, 3970506.1333333333], [1.602186E12, 2610428.05], [1.60218618E12, 3278143.8666666667], [1.60218612E12, 3288916.8333333335], [1.6021863E12, 3585341.683333333], [1.60218624E12, 2953818.0], [1.60218594E12, 1749227.6666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218636E12, 4547.033333333334], [1.60218606E12, 5343.816666666667], [1.602186E12, 5334.6], [1.60218618E12, 4708.533333333334], [1.60218612E12, 5403.516666666666], [1.6021863E12, 5638.733333333334], [1.60218624E12, 5309.75], [1.60218594E12, 2298.0666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218636E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 806.1426648721406, "minX": 1.60218594E12, "maxY": 1027.0820189274448, "series": [{"data": [[1.60218636E12, 859.2441860465111], [1.60218606E12, 850.7286931818173], [1.602186E12, 808.4586160108555], [1.60218618E12, 927.4730354391359], [1.60218612E12, 837.7272727272727], [1.6021863E12, 806.1426648721406], [1.60218624E12, 830.1988950276244], [1.60218594E12, 1027.0820189274448]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218636E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 804.6823687752365, "minX": 1.60218594E12, "maxY": 1024.741324921135, "series": [{"data": [[1.60218636E12, 857.8488372093019], [1.60218606E12, 847.8238636363641], [1.602186E12, 806.9864314789689], [1.60218618E12, 925.7380585516186], [1.60218612E12, 835.776223776224], [1.6021863E12, 804.6823687752365], [1.60218624E12, 828.9751381215474], [1.60218594E12, 1024.741324921135]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218636E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011049723756906086, "minX": 1.60218594E12, "maxY": 0.34384858044164046, "series": [{"data": [[1.60218636E12, 0.019933554817275743], [1.60218606E12, 0.024147727272727296], [1.602186E12, 0.013568521031207587], [1.60218618E12, 0.012326656394453017], [1.60218612E12, 0.01258741258741259], [1.6021863E12, 0.013458950201884244], [1.60218624E12, 0.011049723756906086], [1.60218594E12, 0.34384858044164046]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218636E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.60218594E12, "maxY": 8798.0, "series": [{"data": [[1.60218636E12, 3247.0], [1.60218606E12, 4950.0], [1.602186E12, 4991.0], [1.60218618E12, 8798.0], [1.60218612E12, 4643.0], [1.6021863E12, 3659.0], [1.60218624E12, 3249.0], [1.60218594E12, 4774.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218636E12, 192.0], [1.60218606E12, 187.0349994957447], [1.602186E12, 197.0], [1.60218618E12, 194.0], [1.60218612E12, 197.4349998295307], [1.6021863E12, 193.56799858093262], [1.60218624E12, 189.52499982714653], [1.60218594E12, 197.5859997725487]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218636E12, 192.0], [1.60218606E12, 188.9385002017021], [1.602186E12, 197.30620007038115], [1.60218618E12, 194.0], [1.60218612E12, 198.15700013637542], [1.6021863E12, 196.0], [1.60218624E12, 190.35500013828278], [1.60218594E12, 198.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218636E12, 192.0], [1.60218606E12, 188.09249974787235], [1.602186E12, 197.01099991202355], [1.60218618E12, 194.0], [1.60218612E12, 197.79249991476536], [1.6021863E12, 196.0], [1.60218624E12, 189.88749991357327], [1.60218594E12, 198.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218636E12, 187.0], [1.60218606E12, 181.0], [1.602186E12, 183.0], [1.60218618E12, 186.0], [1.60218612E12, 186.0], [1.6021863E12, 184.0], [1.60218624E12, 184.0], [1.60218594E12, 190.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218636E12, 721.5], [1.60218606E12, 620.5], [1.602186E12, 641.0], [1.60218618E12, 822.0], [1.60218612E12, 694.0], [1.6021863E12, 644.0], [1.60218624E12, 661.5], [1.60218594E12, 847.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218636E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 185.0, "minX": 1.0, "maxY": 2885.0, "series": [{"data": [[2.0, 2450.0], [3.0, 1189.0], [4.0, 1418.0], [5.0, 1391.5], [6.0, 1348.5], [7.0, 1065.0], [8.0, 1054.5], [9.0, 942.0], [10.0, 886.0], [11.0, 863.0], [12.0, 776.5], [13.0, 626.0], [14.0, 703.0], [15.0, 585.0], [1.0, 2885.0], [16.0, 559.5], [17.0, 568.0], [18.0, 504.5], [19.0, 487.0], [20.0, 424.0], [21.0, 439.0], [22.0, 463.0], [23.0, 440.0], [24.0, 419.0], [25.0, 396.5], [26.0, 417.0], [28.0, 424.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[14.0, 185.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 185.0, "minX": 1.0, "maxY": 2881.0, "series": [{"data": [[2.0, 2443.5], [3.0, 1182.5], [4.0, 1416.5], [5.0, 1385.0], [6.0, 1341.5], [7.0, 1061.0], [8.0, 1051.5], [9.0, 942.0], [10.0, 885.5], [11.0, 860.5], [12.0, 775.5], [13.0, 624.0], [14.0, 702.0], [15.0, 585.0], [1.0, 2881.0], [16.0, 559.0], [17.0, 568.0], [18.0, 504.5], [19.0, 487.0], [20.0, 423.5], [21.0, 439.0], [22.0, 462.5], [23.0, 440.0], [24.0, 418.5], [25.0, 396.5], [26.0, 416.5], [28.0, 424.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[14.0, 185.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.45, "minX": 1.60218594E12, "maxY": 12.383333333333333, "series": [{"data": [[1.60218636E12, 9.866666666666667], [1.60218606E12, 11.733333333333333], [1.602186E12, 12.283333333333333], [1.60218618E12, 10.816666666666666], [1.60218612E12, 11.916666666666666], [1.6021863E12, 12.383333333333333], [1.60218624E12, 12.066666666666666], [1.60218594E12, 5.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218636E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60218594E12, "maxY": 12.383333333333333, "series": [{"data": [[1.60218636E12, 10.033333333333333], [1.60218606E12, 11.733333333333333], [1.602186E12, 12.283333333333333], [1.60218618E12, 10.816666666666666], [1.60218612E12, 11.9], [1.6021863E12, 12.383333333333333], [1.60218624E12, 12.066666666666666], [1.60218594E12, 5.283333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60218612E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218636E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60218594E12, "maxY": 12.383333333333333, "series": [{"data": [[1.60218636E12, 10.033333333333333], [1.60218606E12, 11.733333333333333], [1.602186E12, 12.283333333333333], [1.60218618E12, 10.816666666666666], [1.60218612E12, 11.9], [1.6021863E12, 12.383333333333333], [1.60218624E12, 12.066666666666666], [1.60218594E12, 5.283333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60218612E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218636E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60218594E12, "maxY": 12.383333333333333, "series": [{"data": [[1.60218636E12, 10.033333333333333], [1.60218606E12, 11.733333333333333], [1.602186E12, 12.283333333333333], [1.60218618E12, 10.816666666666666], [1.60218612E12, 11.9], [1.6021863E12, 12.383333333333333], [1.60218624E12, 12.066666666666666], [1.60218594E12, 5.283333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60218612E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218636E12, "title": "Total Transactions Per Second"}},
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

