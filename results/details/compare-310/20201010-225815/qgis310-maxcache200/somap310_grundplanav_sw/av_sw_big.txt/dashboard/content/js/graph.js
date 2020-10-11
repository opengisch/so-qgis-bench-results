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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 5748.0, "series": [{"data": [[0.0, 182.0], [0.1, 187.0], [0.2, 191.0], [0.3, 192.0], [0.4, 193.0], [0.5, 195.0], [0.6, 195.0], [0.7, 196.0], [0.8, 197.0], [0.9, 197.0], [1.0, 198.0], [1.1, 200.0], [1.2, 200.0], [1.3, 201.0], [1.4, 201.0], [1.5, 203.0], [1.6, 204.0], [1.7, 205.0], [1.8, 206.0], [1.9, 206.0], [2.0, 207.0], [2.1, 207.0], [2.2, 209.0], [2.3, 209.0], [2.4, 210.0], [2.5, 211.0], [2.6, 211.0], [2.7, 212.0], [2.8, 212.0], [2.9, 213.0], [3.0, 214.0], [3.1, 215.0], [3.2, 216.0], [3.3, 217.0], [3.4, 217.0], [3.5, 219.0], [3.6, 219.0], [3.7, 220.0], [3.8, 221.0], [3.9, 222.0], [4.0, 222.0], [4.1, 223.0], [4.2, 225.0], [4.3, 225.0], [4.4, 227.0], [4.5, 227.0], [4.6, 228.0], [4.7, 228.0], [4.8, 229.0], [4.9, 229.0], [5.0, 230.0], [5.1, 231.0], [5.2, 232.0], [5.3, 233.0], [5.4, 234.0], [5.5, 235.0], [5.6, 235.0], [5.7, 236.0], [5.8, 236.0], [5.9, 237.0], [6.0, 238.0], [6.1, 238.0], [6.2, 239.0], [6.3, 241.0], [6.4, 242.0], [6.5, 244.0], [6.6, 245.0], [6.7, 246.0], [6.8, 247.0], [6.9, 249.0], [7.0, 250.0], [7.1, 251.0], [7.2, 252.0], [7.3, 254.0], [7.4, 254.0], [7.5, 256.0], [7.6, 257.0], [7.7, 258.0], [7.8, 260.0], [7.9, 264.0], [8.0, 264.0], [8.1, 265.0], [8.2, 267.0], [8.3, 268.0], [8.4, 269.0], [8.5, 270.0], [8.6, 271.0], [8.7, 272.0], [8.8, 273.0], [8.9, 274.0], [9.0, 275.0], [9.1, 275.0], [9.2, 276.0], [9.3, 278.0], [9.4, 278.0], [9.5, 279.0], [9.6, 279.0], [9.7, 280.0], [9.8, 281.0], [9.9, 282.0], [10.0, 282.0], [10.1, 283.0], [10.2, 284.0], [10.3, 285.0], [10.4, 286.0], [10.5, 286.0], [10.6, 287.0], [10.7, 288.0], [10.8, 289.0], [10.9, 289.0], [11.0, 290.0], [11.1, 292.0], [11.2, 293.0], [11.3, 293.0], [11.4, 294.0], [11.5, 295.0], [11.6, 296.0], [11.7, 297.0], [11.8, 298.0], [11.9, 298.0], [12.0, 299.0], [12.1, 300.0], [12.2, 301.0], [12.3, 302.0], [12.4, 302.0], [12.5, 304.0], [12.6, 305.0], [12.7, 307.0], [12.8, 308.0], [12.9, 310.0], [13.0, 311.0], [13.1, 312.0], [13.2, 313.0], [13.3, 314.0], [13.4, 315.0], [13.5, 316.0], [13.6, 317.0], [13.7, 318.0], [13.8, 319.0], [13.9, 320.0], [14.0, 321.0], [14.1, 323.0], [14.2, 324.0], [14.3, 325.0], [14.4, 326.0], [14.5, 327.0], [14.6, 327.0], [14.7, 328.0], [14.8, 331.0], [14.9, 332.0], [15.0, 335.0], [15.1, 337.0], [15.2, 338.0], [15.3, 340.0], [15.4, 342.0], [15.5, 344.0], [15.6, 344.0], [15.7, 346.0], [15.8, 347.0], [15.9, 349.0], [16.0, 350.0], [16.1, 352.0], [16.2, 356.0], [16.3, 358.0], [16.4, 360.0], [16.5, 361.0], [16.6, 365.0], [16.7, 367.0], [16.8, 368.0], [16.9, 371.0], [17.0, 372.0], [17.1, 373.0], [17.2, 375.0], [17.3, 376.0], [17.4, 378.0], [17.5, 380.0], [17.6, 381.0], [17.7, 381.0], [17.8, 382.0], [17.9, 383.0], [18.0, 384.0], [18.1, 385.0], [18.2, 387.0], [18.3, 387.0], [18.4, 388.0], [18.5, 389.0], [18.6, 391.0], [18.7, 391.0], [18.8, 392.0], [18.9, 393.0], [19.0, 394.0], [19.1, 394.0], [19.2, 395.0], [19.3, 395.0], [19.4, 397.0], [19.5, 397.0], [19.6, 398.0], [19.7, 399.0], [19.8, 401.0], [19.9, 401.0], [20.0, 402.0], [20.1, 404.0], [20.2, 404.0], [20.3, 405.0], [20.4, 405.0], [20.5, 407.0], [20.6, 407.0], [20.7, 408.0], [20.8, 409.0], [20.9, 410.0], [21.0, 411.0], [21.1, 412.0], [21.2, 414.0], [21.3, 415.0], [21.4, 416.0], [21.5, 416.0], [21.6, 418.0], [21.7, 418.0], [21.8, 420.0], [21.9, 420.0], [22.0, 421.0], [22.1, 422.0], [22.2, 423.0], [22.3, 424.0], [22.4, 424.0], [22.5, 425.0], [22.6, 426.0], [22.7, 427.0], [22.8, 427.0], [22.9, 428.0], [23.0, 430.0], [23.1, 430.0], [23.2, 431.0], [23.3, 431.0], [23.4, 432.0], [23.5, 433.0], [23.6, 433.0], [23.7, 435.0], [23.8, 435.0], [23.9, 436.0], [24.0, 437.0], [24.1, 438.0], [24.2, 440.0], [24.3, 441.0], [24.4, 442.0], [24.5, 443.0], [24.6, 444.0], [24.7, 445.0], [24.8, 445.0], [24.9, 446.0], [25.0, 447.0], [25.1, 447.0], [25.2, 448.0], [25.3, 449.0], [25.4, 449.0], [25.5, 451.0], [25.6, 452.0], [25.7, 452.0], [25.8, 454.0], [25.9, 455.0], [26.0, 455.0], [26.1, 456.0], [26.2, 457.0], [26.3, 458.0], [26.4, 458.0], [26.5, 459.0], [26.6, 459.0], [26.7, 460.0], [26.8, 461.0], [26.9, 462.0], [27.0, 463.0], [27.1, 464.0], [27.2, 465.0], [27.3, 465.0], [27.4, 466.0], [27.5, 466.0], [27.6, 466.0], [27.7, 467.0], [27.8, 468.0], [27.9, 470.0], [28.0, 471.0], [28.1, 472.0], [28.2, 473.0], [28.3, 473.0], [28.4, 474.0], [28.5, 475.0], [28.6, 476.0], [28.7, 476.0], [28.8, 477.0], [28.9, 477.0], [29.0, 478.0], [29.1, 479.0], [29.2, 480.0], [29.3, 480.0], [29.4, 480.0], [29.5, 481.0], [29.6, 482.0], [29.7, 483.0], [29.8, 484.0], [29.9, 484.0], [30.0, 485.0], [30.1, 487.0], [30.2, 487.0], [30.3, 488.0], [30.4, 489.0], [30.5, 490.0], [30.6, 492.0], [30.7, 493.0], [30.8, 494.0], [30.9, 494.0], [31.0, 496.0], [31.1, 497.0], [31.2, 499.0], [31.3, 501.0], [31.4, 502.0], [31.5, 503.0], [31.6, 504.0], [31.7, 505.0], [31.8, 506.0], [31.9, 506.0], [32.0, 507.0], [32.1, 508.0], [32.2, 509.0], [32.3, 510.0], [32.4, 511.0], [32.5, 512.0], [32.6, 513.0], [32.7, 514.0], [32.8, 515.0], [32.9, 516.0], [33.0, 516.0], [33.1, 517.0], [33.2, 518.0], [33.3, 519.0], [33.4, 521.0], [33.5, 522.0], [33.6, 523.0], [33.7, 525.0], [33.8, 525.0], [33.9, 526.0], [34.0, 527.0], [34.1, 528.0], [34.2, 528.0], [34.3, 529.0], [34.4, 531.0], [34.5, 532.0], [34.6, 533.0], [34.7, 534.0], [34.8, 536.0], [34.9, 537.0], [35.0, 537.0], [35.1, 538.0], [35.2, 540.0], [35.3, 541.0], [35.4, 543.0], [35.5, 543.0], [35.6, 544.0], [35.7, 545.0], [35.8, 546.0], [35.9, 547.0], [36.0, 548.0], [36.1, 549.0], [36.2, 551.0], [36.3, 552.0], [36.4, 552.0], [36.5, 553.0], [36.6, 553.0], [36.7, 554.0], [36.8, 554.0], [36.9, 555.0], [37.0, 556.0], [37.1, 557.0], [37.2, 558.0], [37.3, 559.0], [37.4, 560.0], [37.5, 560.0], [37.6, 561.0], [37.7, 562.0], [37.8, 564.0], [37.9, 565.0], [38.0, 566.0], [38.1, 566.0], [38.2, 567.0], [38.3, 568.0], [38.4, 568.0], [38.5, 569.0], [38.6, 570.0], [38.7, 571.0], [38.8, 572.0], [38.9, 572.0], [39.0, 574.0], [39.1, 575.0], [39.2, 576.0], [39.3, 577.0], [39.4, 578.0], [39.5, 580.0], [39.6, 581.0], [39.7, 583.0], [39.8, 584.0], [39.9, 584.0], [40.0, 586.0], [40.1, 587.0], [40.2, 589.0], [40.3, 590.0], [40.4, 590.0], [40.5, 591.0], [40.6, 593.0], [40.7, 593.0], [40.8, 593.0], [40.9, 594.0], [41.0, 595.0], [41.1, 596.0], [41.2, 598.0], [41.3, 599.0], [41.4, 599.0], [41.5, 600.0], [41.6, 602.0], [41.7, 602.0], [41.8, 604.0], [41.9, 604.0], [42.0, 606.0], [42.1, 607.0], [42.2, 608.0], [42.3, 609.0], [42.4, 609.0], [42.5, 610.0], [42.6, 612.0], [42.7, 613.0], [42.8, 614.0], [42.9, 614.0], [43.0, 615.0], [43.1, 616.0], [43.2, 618.0], [43.3, 618.0], [43.4, 619.0], [43.5, 619.0], [43.6, 620.0], [43.7, 621.0], [43.8, 622.0], [43.9, 623.0], [44.0, 624.0], [44.1, 625.0], [44.2, 626.0], [44.3, 626.0], [44.4, 627.0], [44.5, 628.0], [44.6, 630.0], [44.7, 631.0], [44.8, 631.0], [44.9, 633.0], [45.0, 634.0], [45.1, 635.0], [45.2, 636.0], [45.3, 638.0], [45.4, 641.0], [45.5, 642.0], [45.6, 644.0], [45.7, 645.0], [45.8, 646.0], [45.9, 647.0], [46.0, 649.0], [46.1, 650.0], [46.2, 651.0], [46.3, 653.0], [46.4, 654.0], [46.5, 655.0], [46.6, 656.0], [46.7, 656.0], [46.8, 657.0], [46.9, 659.0], [47.0, 660.0], [47.1, 662.0], [47.2, 663.0], [47.3, 664.0], [47.4, 664.0], [47.5, 666.0], [47.6, 668.0], [47.7, 669.0], [47.8, 671.0], [47.9, 672.0], [48.0, 674.0], [48.1, 675.0], [48.2, 677.0], [48.3, 678.0], [48.4, 680.0], [48.5, 681.0], [48.6, 683.0], [48.7, 684.0], [48.8, 686.0], [48.9, 688.0], [49.0, 689.0], [49.1, 691.0], [49.2, 693.0], [49.3, 694.0], [49.4, 695.0], [49.5, 696.0], [49.6, 698.0], [49.7, 699.0], [49.8, 700.0], [49.9, 701.0], [50.0, 704.0], [50.1, 705.0], [50.2, 706.0], [50.3, 707.0], [50.4, 708.0], [50.5, 710.0], [50.6, 712.0], [50.7, 714.0], [50.8, 716.0], [50.9, 717.0], [51.0, 718.0], [51.1, 720.0], [51.2, 721.0], [51.3, 723.0], [51.4, 724.0], [51.5, 725.0], [51.6, 726.0], [51.7, 728.0], [51.8, 729.0], [51.9, 730.0], [52.0, 732.0], [52.1, 733.0], [52.2, 734.0], [52.3, 735.0], [52.4, 737.0], [52.5, 740.0], [52.6, 741.0], [52.7, 743.0], [52.8, 746.0], [52.9, 748.0], [53.0, 749.0], [53.1, 750.0], [53.2, 752.0], [53.3, 753.0], [53.4, 754.0], [53.5, 756.0], [53.6, 758.0], [53.7, 759.0], [53.8, 760.0], [53.9, 762.0], [54.0, 763.0], [54.1, 764.0], [54.2, 764.0], [54.3, 765.0], [54.4, 766.0], [54.5, 767.0], [54.6, 769.0], [54.7, 770.0], [54.8, 772.0], [54.9, 773.0], [55.0, 775.0], [55.1, 776.0], [55.2, 778.0], [55.3, 780.0], [55.4, 782.0], [55.5, 784.0], [55.6, 786.0], [55.7, 788.0], [55.8, 788.0], [55.9, 789.0], [56.0, 793.0], [56.1, 795.0], [56.2, 796.0], [56.3, 797.0], [56.4, 799.0], [56.5, 801.0], [56.6, 802.0], [56.7, 804.0], [56.8, 805.0], [56.9, 807.0], [57.0, 809.0], [57.1, 810.0], [57.2, 810.0], [57.3, 813.0], [57.4, 815.0], [57.5, 816.0], [57.6, 818.0], [57.7, 819.0], [57.8, 821.0], [57.9, 824.0], [58.0, 826.0], [58.1, 829.0], [58.2, 831.0], [58.3, 833.0], [58.4, 836.0], [58.5, 838.0], [58.6, 840.0], [58.7, 841.0], [58.8, 842.0], [58.9, 844.0], [59.0, 845.0], [59.1, 849.0], [59.2, 850.0], [59.3, 852.0], [59.4, 854.0], [59.5, 856.0], [59.6, 860.0], [59.7, 861.0], [59.8, 863.0], [59.9, 864.0], [60.0, 866.0], [60.1, 868.0], [60.2, 870.0], [60.3, 874.0], [60.4, 876.0], [60.5, 877.0], [60.6, 879.0], [60.7, 881.0], [60.8, 882.0], [60.9, 883.0], [61.0, 884.0], [61.1, 886.0], [61.2, 887.0], [61.3, 889.0], [61.4, 891.0], [61.5, 893.0], [61.6, 894.0], [61.7, 897.0], [61.8, 898.0], [61.9, 900.0], [62.0, 902.0], [62.1, 904.0], [62.2, 904.0], [62.3, 905.0], [62.4, 906.0], [62.5, 908.0], [62.6, 909.0], [62.7, 911.0], [62.8, 913.0], [62.9, 915.0], [63.0, 915.0], [63.1, 916.0], [63.2, 917.0], [63.3, 919.0], [63.4, 921.0], [63.5, 923.0], [63.6, 924.0], [63.7, 925.0], [63.8, 926.0], [63.9, 928.0], [64.0, 929.0], [64.1, 931.0], [64.2, 932.0], [64.3, 934.0], [64.4, 936.0], [64.5, 938.0], [64.6, 940.0], [64.7, 942.0], [64.8, 943.0], [64.9, 944.0], [65.0, 946.0], [65.1, 948.0], [65.2, 949.0], [65.3, 952.0], [65.4, 953.0], [65.5, 953.0], [65.6, 955.0], [65.7, 958.0], [65.8, 960.0], [65.9, 961.0], [66.0, 963.0], [66.1, 965.0], [66.2, 966.0], [66.3, 969.0], [66.4, 971.0], [66.5, 973.0], [66.6, 975.0], [66.7, 976.0], [66.8, 978.0], [66.9, 981.0], [67.0, 982.0], [67.1, 985.0], [67.2, 986.0], [67.3, 987.0], [67.4, 990.0], [67.5, 991.0], [67.6, 992.0], [67.7, 995.0], [67.8, 997.0], [67.9, 999.0], [68.0, 1001.0], [68.1, 1001.0], [68.2, 1003.0], [68.3, 1005.0], [68.4, 1008.0], [68.5, 1010.0], [68.6, 1013.0], [68.7, 1014.0], [68.8, 1015.0], [68.9, 1017.0], [69.0, 1019.0], [69.1, 1022.0], [69.2, 1023.0], [69.3, 1025.0], [69.4, 1026.0], [69.5, 1028.0], [69.6, 1029.0], [69.7, 1030.0], [69.8, 1030.0], [69.9, 1032.0], [70.0, 1032.0], [70.1, 1034.0], [70.2, 1035.0], [70.3, 1035.0], [70.4, 1037.0], [70.5, 1040.0], [70.6, 1043.0], [70.7, 1045.0], [70.8, 1046.0], [70.9, 1047.0], [71.0, 1048.0], [71.1, 1051.0], [71.2, 1054.0], [71.3, 1055.0], [71.4, 1058.0], [71.5, 1060.0], [71.6, 1063.0], [71.7, 1066.0], [71.8, 1070.0], [71.9, 1072.0], [72.0, 1073.0], [72.1, 1076.0], [72.2, 1078.0], [72.3, 1080.0], [72.4, 1082.0], [72.5, 1084.0], [72.6, 1085.0], [72.7, 1087.0], [72.8, 1091.0], [72.9, 1093.0], [73.0, 1094.0], [73.1, 1097.0], [73.2, 1099.0], [73.3, 1100.0], [73.4, 1101.0], [73.5, 1103.0], [73.6, 1104.0], [73.7, 1105.0], [73.8, 1106.0], [73.9, 1108.0], [74.0, 1110.0], [74.1, 1113.0], [74.2, 1114.0], [74.3, 1115.0], [74.4, 1116.0], [74.5, 1118.0], [74.6, 1120.0], [74.7, 1125.0], [74.8, 1129.0], [74.9, 1131.0], [75.0, 1133.0], [75.1, 1134.0], [75.2, 1137.0], [75.3, 1138.0], [75.4, 1139.0], [75.5, 1140.0], [75.6, 1144.0], [75.7, 1144.0], [75.8, 1148.0], [75.9, 1151.0], [76.0, 1152.0], [76.1, 1155.0], [76.2, 1156.0], [76.3, 1158.0], [76.4, 1162.0], [76.5, 1164.0], [76.6, 1167.0], [76.7, 1169.0], [76.8, 1172.0], [76.9, 1175.0], [77.0, 1177.0], [77.1, 1180.0], [77.2, 1184.0], [77.3, 1188.0], [77.4, 1192.0], [77.5, 1195.0], [77.6, 1198.0], [77.7, 1200.0], [77.8, 1202.0], [77.9, 1205.0], [78.0, 1206.0], [78.1, 1209.0], [78.2, 1210.0], [78.3, 1214.0], [78.4, 1216.0], [78.5, 1218.0], [78.6, 1221.0], [78.7, 1223.0], [78.8, 1226.0], [78.9, 1229.0], [79.0, 1232.0], [79.1, 1234.0], [79.2, 1236.0], [79.3, 1238.0], [79.4, 1239.0], [79.5, 1241.0], [79.6, 1244.0], [79.7, 1246.0], [79.8, 1247.0], [79.9, 1251.0], [80.0, 1255.0], [80.1, 1259.0], [80.2, 1265.0], [80.3, 1268.0], [80.4, 1269.0], [80.5, 1273.0], [80.6, 1277.0], [80.7, 1280.0], [80.8, 1281.0], [80.9, 1284.0], [81.0, 1285.0], [81.1, 1288.0], [81.2, 1290.0], [81.3, 1291.0], [81.4, 1293.0], [81.5, 1297.0], [81.6, 1300.0], [81.7, 1302.0], [81.8, 1303.0], [81.9, 1306.0], [82.0, 1307.0], [82.1, 1310.0], [82.2, 1312.0], [82.3, 1313.0], [82.4, 1316.0], [82.5, 1317.0], [82.6, 1319.0], [82.7, 1320.0], [82.8, 1323.0], [82.9, 1326.0], [83.0, 1328.0], [83.1, 1330.0], [83.2, 1332.0], [83.3, 1336.0], [83.4, 1337.0], [83.5, 1339.0], [83.6, 1339.0], [83.7, 1340.0], [83.8, 1344.0], [83.9, 1346.0], [84.0, 1349.0], [84.1, 1351.0], [84.2, 1353.0], [84.3, 1357.0], [84.4, 1362.0], [84.5, 1365.0], [84.6, 1369.0], [84.7, 1370.0], [84.8, 1371.0], [84.9, 1372.0], [85.0, 1375.0], [85.1, 1378.0], [85.2, 1381.0], [85.3, 1383.0], [85.4, 1385.0], [85.5, 1388.0], [85.6, 1390.0], [85.7, 1392.0], [85.8, 1395.0], [85.9, 1397.0], [86.0, 1398.0], [86.1, 1401.0], [86.2, 1402.0], [86.3, 1405.0], [86.4, 1407.0], [86.5, 1409.0], [86.6, 1412.0], [86.7, 1417.0], [86.8, 1419.0], [86.9, 1424.0], [87.0, 1425.0], [87.1, 1429.0], [87.2, 1431.0], [87.3, 1433.0], [87.4, 1434.0], [87.5, 1436.0], [87.6, 1439.0], [87.7, 1444.0], [87.8, 1446.0], [87.9, 1449.0], [88.0, 1453.0], [88.1, 1456.0], [88.2, 1459.0], [88.3, 1466.0], [88.4, 1468.0], [88.5, 1472.0], [88.6, 1477.0], [88.7, 1484.0], [88.8, 1489.0], [88.9, 1490.0], [89.0, 1492.0], [89.1, 1493.0], [89.2, 1497.0], [89.3, 1500.0], [89.4, 1502.0], [89.5, 1507.0], [89.6, 1513.0], [89.7, 1519.0], [89.8, 1526.0], [89.9, 1530.0], [90.0, 1535.0], [90.1, 1544.0], [90.2, 1546.0], [90.3, 1551.0], [90.4, 1556.0], [90.5, 1565.0], [90.6, 1570.0], [90.7, 1572.0], [90.8, 1576.0], [90.9, 1579.0], [91.0, 1586.0], [91.1, 1591.0], [91.2, 1599.0], [91.3, 1605.0], [91.4, 1611.0], [91.5, 1616.0], [91.6, 1621.0], [91.7, 1623.0], [91.8, 1629.0], [91.9, 1634.0], [92.0, 1646.0], [92.1, 1653.0], [92.2, 1662.0], [92.3, 1669.0], [92.4, 1677.0], [92.5, 1679.0], [92.6, 1689.0], [92.7, 1700.0], [92.8, 1709.0], [92.9, 1725.0], [93.0, 1730.0], [93.1, 1734.0], [93.2, 1745.0], [93.3, 1755.0], [93.4, 1767.0], [93.5, 1780.0], [93.6, 1790.0], [93.7, 1801.0], [93.8, 1808.0], [93.9, 1813.0], [94.0, 1821.0], [94.1, 1832.0], [94.2, 1846.0], [94.3, 1856.0], [94.4, 1867.0], [94.5, 1878.0], [94.6, 1895.0], [94.7, 1911.0], [94.8, 1918.0], [94.9, 1928.0], [95.0, 1944.0], [95.1, 1952.0], [95.2, 1961.0], [95.3, 1971.0], [95.4, 1976.0], [95.5, 1992.0], [95.6, 1998.0], [95.7, 2009.0], [95.8, 2024.0], [95.9, 2038.0], [96.0, 2050.0], [96.1, 2065.0], [96.2, 2074.0], [96.3, 2087.0], [96.4, 2098.0], [96.5, 2108.0], [96.6, 2119.0], [96.7, 2136.0], [96.8, 2159.0], [96.9, 2179.0], [97.0, 2201.0], [97.1, 2214.0], [97.2, 2232.0], [97.3, 2250.0], [97.4, 2257.0], [97.5, 2281.0], [97.6, 2309.0], [97.7, 2332.0], [97.8, 2359.0], [97.9, 2374.0], [98.0, 2400.0], [98.1, 2426.0], [98.2, 2446.0], [98.3, 2496.0], [98.4, 2524.0], [98.5, 2588.0], [98.6, 2619.0], [98.7, 2683.0], [98.8, 2742.0], [98.9, 2846.0], [99.0, 2975.0], [99.1, 3069.0], [99.2, 3185.0], [99.3, 3299.0], [99.4, 3458.0], [99.5, 3636.0], [99.6, 3759.0], [99.7, 4027.0], [99.8, 4812.0], [99.9, 5111.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 597.0, "series": [{"data": [[600.0, 432.0], [700.0, 346.0], [800.0, 281.0], [900.0, 318.0], [1000.0, 275.0], [1100.0, 229.0], [1200.0, 201.0], [1300.0, 234.0], [1400.0, 166.0], [1500.0, 101.0], [1600.0, 76.0], [1700.0, 52.0], [1800.0, 49.0], [1900.0, 52.0], [2000.0, 41.0], [2100.0, 30.0], [2300.0, 22.0], [2200.0, 30.0], [2400.0, 19.0], [2500.0, 8.0], [2600.0, 10.0], [2700.0, 8.0], [2800.0, 4.0], [2900.0, 5.0], [3000.0, 4.0], [3100.0, 6.0], [3200.0, 4.0], [3300.0, 3.0], [3400.0, 2.0], [3500.0, 4.0], [3600.0, 3.0], [3700.0, 4.0], [3800.0, 1.0], [3900.0, 3.0], [4000.0, 1.0], [4100.0, 1.0], [4300.0, 1.0], [4800.0, 3.0], [4700.0, 2.0], [5100.0, 1.0], [5000.0, 2.0], [5300.0, 2.0], [5400.0, 1.0], [5500.0, 1.0], [5700.0, 1.0], [100.0, 57.0], [200.0, 570.0], [300.0, 397.0], [400.0, 597.0], [500.0, 530.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 554.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3013.0, "series": [{"data": [[0.0, 1623.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3013.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 554.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.415584415584417, "minX": 1.60237236E12, "maxY": 10.0, "series": [{"data": [[1.60237242E12, 10.0], [1.60237272E12, 10.0], [1.60237278E12, 10.0], [1.6023726E12, 10.0], [1.60237266E12, 10.0], [1.60237248E12, 10.0], [1.60237254E12, 10.0], [1.60237236E12, 10.0], [1.60237284E12, 9.415584415584417]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237284E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 280.0, "minX": 1.0, "maxY": 3185.0, "series": [{"data": [[8.0, 566.0], [4.0, 2070.0], [2.0, 1860.0], [1.0, 3185.0], [9.0, 280.0], [10.0, 857.242424242423], [5.0, 633.0], [6.0, 1316.0], [3.0, 1394.0], [7.0, 1105.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 858.1468208092473]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 586.8166666666667, "minX": 1.60237236E12, "maxY": 3852591.9, "series": [{"data": [[1.60237242E12, 2686074.1333333333], [1.60237272E12, 3852591.9], [1.60237278E12, 3110990.9], [1.6023726E12, 3192030.9833333334], [1.60237266E12, 2561849.8], [1.60237248E12, 3542092.566666667], [1.60237254E12, 3604792.5833333335], [1.60237236E12, 1084159.1166666667], [1.60237284E12, 337809.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237242E12, 5332.166666666667], [1.60237272E12, 5484.616666666667], [1.60237278E12, 5381.983333333334], [1.6023726E12, 4533.233333333334], [1.60237266E12, 5270.8], [1.60237248E12, 5338.733333333334], [1.60237254E12, 5574.033333333334], [1.60237236E12, 1074.95], [1.60237284E12, 586.8166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237284E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 819.9149519890258, "minX": 1.60237236E12, "maxY": 1174.896551724138, "series": [{"data": [[1.60237242E12, 829.9281842818432], [1.60237272E12, 831.4058171745143], [1.60237278E12, 829.0210674157299], [1.6023726E12, 964.531502423264], [1.60237266E12, 819.9149519890258], [1.60237248E12, 829.3085553997198], [1.60237254E12, 823.8190476190481], [1.60237236E12, 1174.896551724138], [1.60237284E12, 1153.6363636363637]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237284E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 818.7379972565161, "minX": 1.60237236E12, "maxY": 1171.6344827586213, "series": [{"data": [[1.60237242E12, 828.2086720867213], [1.60237272E12, 829.5789473684209], [1.60237278E12, 827.5337078651683], [1.6023726E12, 962.0468497576742], [1.60237266E12, 818.7379972565161], [1.60237248E12, 826.8260869565217], [1.60237254E12, 821.6816326530611], [1.60237236E12, 1171.6344827586213], [1.60237284E12, 1151.8831168831164]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237284E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60237236E12, "maxY": 0.551724137931034, "series": [{"data": [[1.60237242E12, 0.012195121951219516], [1.60237272E12, 0.01385041551246537], [1.60237278E12, 0.011235955056179784], [1.6023726E12, 0.014539579967689809], [1.60237266E12, 0.013717421124828528], [1.60237248E12, 0.011220196353436188], [1.60237254E12, 0.01496598639455784], [1.60237236E12, 0.551724137931034], [1.60237284E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237284E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.60237236E12, "maxY": 5748.0, "series": [{"data": [[1.60237242E12, 5376.0], [1.60237272E12, 2558.0], [1.60237278E12, 3740.0], [1.6023726E12, 5748.0], [1.60237266E12, 5551.0], [1.60237248E12, 3981.0], [1.60237254E12, 4340.0], [1.60237236E12, 3636.0], [1.60237284E12, 3604.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237242E12, 203.65099982380866], [1.60237272E12, 191.50699982762336], [1.60237278E12, 194.41699983000754], [1.6023726E12, 225.5799998521805], [1.60237266E12, 195.56999982595443], [1.60237248E12, 198.42599982976913], [1.60237254E12, 196.0], [1.60237236E12, 206.31399996519087], [1.60237284E12, 209.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237242E12, 204.31610007047652], [1.60237272E12, 192.3154001379013], [1.60237278E12, 195.0], [1.6023726E12, 226.2760001182556], [1.60237266E12, 196.0], [1.60237248E12, 199.06860006809234], [1.60237254E12, 196.28640007019044], [1.60237236E12, 206.44540001392363], [1.60237284E12, 209.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237242E12, 204.02049991190432], [1.60237272E12, 191.8684999138117], [1.60237278E12, 194.77349991500378], [1.6023726E12, 225.88999992609024], [1.60237266E12, 195.93499991297722], [1.60237248E12, 198.78299991488456], [1.60237254E12, 196.0], [1.60237236E12, 206.38699998259546], [1.60237284E12, 209.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237242E12, 187.0], [1.60237272E12, 185.0], [1.60237278E12, 187.0], [1.6023726E12, 201.0], [1.60237266E12, 182.0], [1.60237248E12, 185.0], [1.60237254E12, 188.0], [1.60237236E12, 206.0], [1.60237284E12, 209.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237242E12, 677.5], [1.60237272E12, 631.0], [1.60237278E12, 705.0], [1.6023726E12, 830.0], [1.60237266E12, 696.0], [1.60237248E12, 644.0], [1.60237254E12, 705.0], [1.60237236E12, 997.0], [1.60237284E12, 970.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237284E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 389.0, "minX": 1.0, "maxY": 3185.0, "series": [{"data": [[2.0, 1146.5], [3.0, 2361.0], [4.0, 1501.5], [5.0, 1075.0], [6.0, 1003.0], [7.0, 1156.0], [8.0, 964.5], [9.0, 995.5], [10.0, 879.0], [11.0, 841.0], [12.0, 759.5], [13.0, 733.0], [14.0, 668.5], [15.0, 623.5], [16.0, 595.5], [1.0, 3185.0], [17.0, 525.5], [18.0, 538.5], [19.0, 446.0], [20.0, 427.5], [21.0, 431.0], [22.0, 422.0], [23.0, 439.0], [24.0, 447.5], [25.0, 411.0], [26.0, 421.0], [28.0, 389.0], [29.0, 403.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 389.0, "minX": 1.0, "maxY": 3173.0, "series": [{"data": [[2.0, 1144.0], [3.0, 2360.5], [4.0, 1492.0], [5.0, 1070.0], [6.0, 1001.0], [7.0, 1153.0], [8.0, 960.5], [9.0, 992.0], [10.0, 877.5], [11.0, 838.5], [12.0, 758.5], [13.0, 731.0], [14.0, 667.0], [15.0, 623.5], [16.0, 594.0], [1.0, 3173.0], [17.0, 525.5], [18.0, 538.5], [19.0, 446.0], [20.0, 427.5], [21.0, 430.0], [22.0, 421.0], [23.0, 439.0], [24.0, 447.5], [25.0, 411.0], [26.0, 421.0], [28.0, 389.0], [29.0, 403.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1166666666666667, "minX": 1.60237236E12, "maxY": 12.3, "series": [{"data": [[1.60237242E12, 12.3], [1.60237272E12, 12.033333333333333], [1.60237278E12, 11.866666666666667], [1.6023726E12, 10.316666666666666], [1.60237266E12, 12.15], [1.60237248E12, 11.883333333333333], [1.60237254E12, 12.25], [1.60237236E12, 2.5833333333333335], [1.60237284E12, 1.1166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237284E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.60237236E12, "maxY": 12.3, "series": [{"data": [[1.60237242E12, 12.3], [1.60237272E12, 12.033333333333333], [1.60237278E12, 11.866666666666667], [1.6023726E12, 10.316666666666666], [1.60237266E12, 12.15], [1.60237248E12, 11.883333333333333], [1.60237254E12, 12.25], [1.60237236E12, 2.4166666666666665], [1.60237284E12, 1.2833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237284E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.60237236E12, "maxY": 12.3, "series": [{"data": [[1.60237242E12, 12.3], [1.60237272E12, 12.033333333333333], [1.60237278E12, 11.866666666666667], [1.6023726E12, 10.316666666666666], [1.60237266E12, 12.15], [1.60237248E12, 11.883333333333333], [1.60237254E12, 12.25], [1.60237236E12, 2.4166666666666665], [1.60237284E12, 1.2833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237284E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.60237236E12, "maxY": 12.3, "series": [{"data": [[1.60237242E12, 12.3], [1.60237272E12, 12.033333333333333], [1.60237278E12, 11.866666666666667], [1.6023726E12, 10.316666666666666], [1.60237266E12, 12.15], [1.60237248E12, 11.883333333333333], [1.60237254E12, 12.25], [1.60237236E12, 2.4166666666666665], [1.60237284E12, 1.2833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237284E12, "title": "Total Transactions Per Second"}},
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

