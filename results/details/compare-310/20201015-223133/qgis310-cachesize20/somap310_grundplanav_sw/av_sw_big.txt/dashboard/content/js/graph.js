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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 5721.0, "series": [{"data": [[0.0, 179.0], [0.1, 186.0], [0.2, 187.0], [0.3, 189.0], [0.4, 191.0], [0.5, 192.0], [0.6, 194.0], [0.7, 194.0], [0.8, 195.0], [0.9, 196.0], [1.0, 197.0], [1.1, 197.0], [1.2, 198.0], [1.3, 199.0], [1.4, 200.0], [1.5, 200.0], [1.6, 202.0], [1.7, 203.0], [1.8, 203.0], [1.9, 204.0], [2.0, 204.0], [2.1, 205.0], [2.2, 206.0], [2.3, 207.0], [2.4, 207.0], [2.5, 208.0], [2.6, 209.0], [2.7, 210.0], [2.8, 211.0], [2.9, 212.0], [3.0, 213.0], [3.1, 215.0], [3.2, 216.0], [3.3, 216.0], [3.4, 217.0], [3.5, 217.0], [3.6, 218.0], [3.7, 219.0], [3.8, 220.0], [3.9, 220.0], [4.0, 221.0], [4.1, 222.0], [4.2, 222.0], [4.3, 223.0], [4.4, 223.0], [4.5, 225.0], [4.6, 225.0], [4.7, 226.0], [4.8, 226.0], [4.9, 227.0], [5.0, 228.0], [5.1, 229.0], [5.2, 230.0], [5.3, 230.0], [5.4, 231.0], [5.5, 232.0], [5.6, 233.0], [5.7, 234.0], [5.8, 235.0], [5.9, 236.0], [6.0, 237.0], [6.1, 238.0], [6.2, 239.0], [6.3, 240.0], [6.4, 242.0], [6.5, 243.0], [6.6, 244.0], [6.7, 245.0], [6.8, 247.0], [6.9, 250.0], [7.0, 251.0], [7.1, 252.0], [7.2, 254.0], [7.3, 257.0], [7.4, 258.0], [7.5, 260.0], [7.6, 262.0], [7.7, 263.0], [7.8, 265.0], [7.9, 266.0], [8.0, 267.0], [8.1, 268.0], [8.2, 269.0], [8.3, 270.0], [8.4, 271.0], [8.5, 272.0], [8.6, 273.0], [8.7, 274.0], [8.8, 275.0], [8.9, 276.0], [9.0, 277.0], [9.1, 278.0], [9.2, 278.0], [9.3, 280.0], [9.4, 280.0], [9.5, 281.0], [9.6, 282.0], [9.7, 282.0], [9.8, 283.0], [9.9, 283.0], [10.0, 284.0], [10.1, 285.0], [10.2, 286.0], [10.3, 287.0], [10.4, 288.0], [10.5, 289.0], [10.6, 290.0], [10.7, 291.0], [10.8, 291.0], [10.9, 292.0], [11.0, 293.0], [11.1, 294.0], [11.2, 296.0], [11.3, 296.0], [11.4, 297.0], [11.5, 298.0], [11.6, 300.0], [11.7, 300.0], [11.8, 301.0], [11.9, 302.0], [12.0, 304.0], [12.1, 304.0], [12.2, 305.0], [12.3, 306.0], [12.4, 308.0], [12.5, 308.0], [12.6, 309.0], [12.7, 311.0], [12.8, 312.0], [12.9, 313.0], [13.0, 314.0], [13.1, 316.0], [13.2, 317.0], [13.3, 318.0], [13.4, 318.0], [13.5, 319.0], [13.6, 321.0], [13.7, 322.0], [13.8, 323.0], [13.9, 325.0], [14.0, 325.0], [14.1, 326.0], [14.2, 327.0], [14.3, 327.0], [14.4, 328.0], [14.5, 329.0], [14.6, 330.0], [14.7, 332.0], [14.8, 333.0], [14.9, 334.0], [15.0, 335.0], [15.1, 337.0], [15.2, 338.0], [15.3, 338.0], [15.4, 340.0], [15.5, 342.0], [15.6, 343.0], [15.7, 344.0], [15.8, 347.0], [15.9, 348.0], [16.0, 349.0], [16.1, 352.0], [16.2, 353.0], [16.3, 356.0], [16.4, 358.0], [16.5, 360.0], [16.6, 362.0], [16.7, 364.0], [16.8, 367.0], [16.9, 370.0], [17.0, 372.0], [17.1, 374.0], [17.2, 375.0], [17.3, 377.0], [17.4, 379.0], [17.5, 379.0], [17.6, 381.0], [17.7, 381.0], [17.8, 383.0], [17.9, 384.0], [18.0, 385.0], [18.1, 385.0], [18.2, 387.0], [18.3, 388.0], [18.4, 389.0], [18.5, 391.0], [18.6, 391.0], [18.7, 393.0], [18.8, 394.0], [18.9, 394.0], [19.0, 395.0], [19.1, 396.0], [19.2, 396.0], [19.3, 398.0], [19.4, 399.0], [19.5, 400.0], [19.6, 401.0], [19.7, 401.0], [19.8, 402.0], [19.9, 403.0], [20.0, 404.0], [20.1, 406.0], [20.2, 407.0], [20.3, 407.0], [20.4, 408.0], [20.5, 409.0], [20.6, 410.0], [20.7, 411.0], [20.8, 411.0], [20.9, 412.0], [21.0, 413.0], [21.1, 414.0], [21.2, 415.0], [21.3, 415.0], [21.4, 416.0], [21.5, 417.0], [21.6, 417.0], [21.7, 418.0], [21.8, 419.0], [21.9, 420.0], [22.0, 422.0], [22.1, 423.0], [22.2, 424.0], [22.3, 425.0], [22.4, 426.0], [22.5, 428.0], [22.6, 430.0], [22.7, 430.0], [22.8, 431.0], [22.9, 431.0], [23.0, 432.0], [23.1, 432.0], [23.2, 433.0], [23.3, 433.0], [23.4, 434.0], [23.5, 434.0], [23.6, 435.0], [23.7, 436.0], [23.8, 437.0], [23.9, 437.0], [24.0, 438.0], [24.1, 439.0], [24.2, 439.0], [24.3, 440.0], [24.4, 441.0], [24.5, 441.0], [24.6, 442.0], [24.7, 443.0], [24.8, 445.0], [24.9, 445.0], [25.0, 446.0], [25.1, 446.0], [25.2, 448.0], [25.3, 448.0], [25.4, 449.0], [25.5, 449.0], [25.6, 450.0], [25.7, 450.0], [25.8, 451.0], [25.9, 452.0], [26.0, 453.0], [26.1, 453.0], [26.2, 454.0], [26.3, 455.0], [26.4, 455.0], [26.5, 456.0], [26.6, 456.0], [26.7, 457.0], [26.8, 458.0], [26.9, 459.0], [27.0, 459.0], [27.1, 460.0], [27.2, 461.0], [27.3, 462.0], [27.4, 463.0], [27.5, 464.0], [27.6, 465.0], [27.7, 466.0], [27.8, 467.0], [27.9, 468.0], [28.0, 468.0], [28.1, 469.0], [28.2, 470.0], [28.3, 471.0], [28.4, 473.0], [28.5, 473.0], [28.6, 475.0], [28.7, 475.0], [28.8, 476.0], [28.9, 478.0], [29.0, 479.0], [29.1, 479.0], [29.2, 480.0], [29.3, 481.0], [29.4, 482.0], [29.5, 483.0], [29.6, 485.0], [29.7, 485.0], [29.8, 486.0], [29.9, 488.0], [30.0, 489.0], [30.1, 490.0], [30.2, 491.0], [30.3, 492.0], [30.4, 492.0], [30.5, 493.0], [30.6, 495.0], [30.7, 496.0], [30.8, 497.0], [30.9, 498.0], [31.0, 499.0], [31.1, 501.0], [31.2, 502.0], [31.3, 502.0], [31.4, 504.0], [31.5, 505.0], [31.6, 506.0], [31.7, 507.0], [31.8, 508.0], [31.9, 509.0], [32.0, 510.0], [32.1, 512.0], [32.2, 513.0], [32.3, 513.0], [32.4, 515.0], [32.5, 515.0], [32.6, 517.0], [32.7, 518.0], [32.8, 518.0], [32.9, 519.0], [33.0, 520.0], [33.1, 522.0], [33.2, 523.0], [33.3, 525.0], [33.4, 526.0], [33.5, 526.0], [33.6, 528.0], [33.7, 530.0], [33.8, 531.0], [33.9, 532.0], [34.0, 533.0], [34.1, 533.0], [34.2, 534.0], [34.3, 535.0], [34.4, 535.0], [34.5, 536.0], [34.6, 538.0], [34.7, 539.0], [34.8, 541.0], [34.9, 542.0], [35.0, 543.0], [35.1, 543.0], [35.2, 544.0], [35.3, 545.0], [35.4, 545.0], [35.5, 546.0], [35.6, 547.0], [35.7, 548.0], [35.8, 548.0], [35.9, 550.0], [36.0, 550.0], [36.1, 551.0], [36.2, 551.0], [36.3, 552.0], [36.4, 554.0], [36.5, 555.0], [36.6, 555.0], [36.7, 556.0], [36.8, 558.0], [36.9, 558.0], [37.0, 559.0], [37.1, 561.0], [37.2, 561.0], [37.3, 562.0], [37.4, 563.0], [37.5, 564.0], [37.6, 564.0], [37.7, 565.0], [37.8, 565.0], [37.9, 566.0], [38.0, 567.0], [38.1, 568.0], [38.2, 568.0], [38.3, 569.0], [38.4, 570.0], [38.5, 571.0], [38.6, 571.0], [38.7, 571.0], [38.8, 572.0], [38.9, 573.0], [39.0, 574.0], [39.1, 575.0], [39.2, 576.0], [39.3, 577.0], [39.4, 577.0], [39.5, 578.0], [39.6, 579.0], [39.7, 579.0], [39.8, 580.0], [39.9, 581.0], [40.0, 581.0], [40.1, 583.0], [40.2, 583.0], [40.3, 584.0], [40.4, 585.0], [40.5, 587.0], [40.6, 588.0], [40.7, 589.0], [40.8, 589.0], [40.9, 590.0], [41.0, 592.0], [41.1, 593.0], [41.2, 594.0], [41.3, 594.0], [41.4, 595.0], [41.5, 596.0], [41.6, 598.0], [41.7, 598.0], [41.8, 599.0], [41.9, 601.0], [42.0, 602.0], [42.1, 603.0], [42.2, 604.0], [42.3, 605.0], [42.4, 606.0], [42.5, 608.0], [42.6, 609.0], [42.7, 611.0], [42.8, 613.0], [42.9, 615.0], [43.0, 616.0], [43.1, 618.0], [43.2, 619.0], [43.3, 620.0], [43.4, 621.0], [43.5, 621.0], [43.6, 623.0], [43.7, 625.0], [43.8, 626.0], [43.9, 628.0], [44.0, 628.0], [44.1, 629.0], [44.2, 631.0], [44.3, 633.0], [44.4, 635.0], [44.5, 637.0], [44.6, 638.0], [44.7, 639.0], [44.8, 641.0], [44.9, 642.0], [45.0, 643.0], [45.1, 644.0], [45.2, 645.0], [45.3, 646.0], [45.4, 647.0], [45.5, 648.0], [45.6, 649.0], [45.7, 650.0], [45.8, 651.0], [45.9, 652.0], [46.0, 653.0], [46.1, 653.0], [46.2, 655.0], [46.3, 656.0], [46.4, 656.0], [46.5, 658.0], [46.6, 660.0], [46.7, 661.0], [46.8, 662.0], [46.9, 664.0], [47.0, 665.0], [47.1, 667.0], [47.2, 669.0], [47.3, 670.0], [47.4, 672.0], [47.5, 672.0], [47.6, 673.0], [47.7, 675.0], [47.8, 676.0], [47.9, 677.0], [48.0, 678.0], [48.1, 678.0], [48.2, 680.0], [48.3, 682.0], [48.4, 683.0], [48.5, 684.0], [48.6, 685.0], [48.7, 685.0], [48.8, 687.0], [48.9, 690.0], [49.0, 693.0], [49.1, 694.0], [49.2, 695.0], [49.3, 698.0], [49.4, 699.0], [49.5, 702.0], [49.6, 703.0], [49.7, 703.0], [49.8, 706.0], [49.9, 707.0], [50.0, 708.0], [50.1, 709.0], [50.2, 711.0], [50.3, 711.0], [50.4, 714.0], [50.5, 716.0], [50.6, 721.0], [50.7, 723.0], [50.8, 725.0], [50.9, 726.0], [51.0, 729.0], [51.1, 731.0], [51.2, 733.0], [51.3, 735.0], [51.4, 736.0], [51.5, 738.0], [51.6, 740.0], [51.7, 741.0], [51.8, 743.0], [51.9, 744.0], [52.0, 745.0], [52.1, 747.0], [52.2, 750.0], [52.3, 752.0], [52.4, 754.0], [52.5, 755.0], [52.6, 757.0], [52.7, 758.0], [52.8, 759.0], [52.9, 760.0], [53.0, 761.0], [53.1, 763.0], [53.2, 764.0], [53.3, 766.0], [53.4, 767.0], [53.5, 768.0], [53.6, 770.0], [53.7, 771.0], [53.8, 772.0], [53.9, 772.0], [54.0, 774.0], [54.1, 774.0], [54.2, 777.0], [54.3, 780.0], [54.4, 781.0], [54.5, 783.0], [54.6, 784.0], [54.7, 786.0], [54.8, 787.0], [54.9, 789.0], [55.0, 792.0], [55.1, 794.0], [55.2, 795.0], [55.3, 796.0], [55.4, 799.0], [55.5, 802.0], [55.6, 806.0], [55.7, 807.0], [55.8, 809.0], [55.9, 810.0], [56.0, 812.0], [56.1, 814.0], [56.2, 817.0], [56.3, 819.0], [56.4, 819.0], [56.5, 822.0], [56.6, 824.0], [56.7, 826.0], [56.8, 827.0], [56.9, 829.0], [57.0, 830.0], [57.1, 832.0], [57.2, 834.0], [57.3, 835.0], [57.4, 836.0], [57.5, 837.0], [57.6, 839.0], [57.7, 840.0], [57.8, 842.0], [57.9, 843.0], [58.0, 844.0], [58.1, 845.0], [58.2, 847.0], [58.3, 850.0], [58.4, 851.0], [58.5, 853.0], [58.6, 854.0], [58.7, 856.0], [58.8, 857.0], [58.9, 860.0], [59.0, 862.0], [59.1, 863.0], [59.2, 864.0], [59.3, 867.0], [59.4, 868.0], [59.5, 870.0], [59.6, 871.0], [59.7, 873.0], [59.8, 875.0], [59.9, 877.0], [60.0, 878.0], [60.1, 882.0], [60.2, 882.0], [60.3, 884.0], [60.4, 886.0], [60.5, 887.0], [60.6, 888.0], [60.7, 890.0], [60.8, 891.0], [60.9, 893.0], [61.0, 895.0], [61.1, 896.0], [61.2, 897.0], [61.3, 899.0], [61.4, 901.0], [61.5, 902.0], [61.6, 904.0], [61.7, 905.0], [61.8, 906.0], [61.9, 907.0], [62.0, 909.0], [62.1, 911.0], [62.2, 913.0], [62.3, 914.0], [62.4, 916.0], [62.5, 918.0], [62.6, 919.0], [62.7, 922.0], [62.8, 923.0], [62.9, 926.0], [63.0, 928.0], [63.1, 930.0], [63.2, 934.0], [63.3, 936.0], [63.4, 938.0], [63.5, 940.0], [63.6, 942.0], [63.7, 943.0], [63.8, 943.0], [63.9, 945.0], [64.0, 946.0], [64.1, 947.0], [64.2, 948.0], [64.3, 951.0], [64.4, 952.0], [64.5, 955.0], [64.6, 956.0], [64.7, 960.0], [64.8, 961.0], [64.9, 963.0], [65.0, 965.0], [65.1, 966.0], [65.2, 968.0], [65.3, 970.0], [65.4, 972.0], [65.5, 973.0], [65.6, 975.0], [65.7, 976.0], [65.8, 977.0], [65.9, 979.0], [66.0, 982.0], [66.1, 984.0], [66.2, 986.0], [66.3, 988.0], [66.4, 990.0], [66.5, 991.0], [66.6, 993.0], [66.7, 994.0], [66.8, 998.0], [66.9, 999.0], [67.0, 1002.0], [67.1, 1003.0], [67.2, 1004.0], [67.3, 1007.0], [67.4, 1009.0], [67.5, 1010.0], [67.6, 1011.0], [67.7, 1012.0], [67.8, 1014.0], [67.9, 1016.0], [68.0, 1017.0], [68.1, 1018.0], [68.2, 1019.0], [68.3, 1022.0], [68.4, 1024.0], [68.5, 1026.0], [68.6, 1027.0], [68.7, 1028.0], [68.8, 1030.0], [68.9, 1031.0], [69.0, 1032.0], [69.1, 1033.0], [69.2, 1036.0], [69.3, 1037.0], [69.4, 1038.0], [69.5, 1042.0], [69.6, 1043.0], [69.7, 1046.0], [69.8, 1048.0], [69.9, 1049.0], [70.0, 1053.0], [70.1, 1056.0], [70.2, 1058.0], [70.3, 1059.0], [70.4, 1060.0], [70.5, 1061.0], [70.6, 1063.0], [70.7, 1065.0], [70.8, 1067.0], [70.9, 1068.0], [71.0, 1069.0], [71.1, 1070.0], [71.2, 1073.0], [71.3, 1074.0], [71.4, 1077.0], [71.5, 1079.0], [71.6, 1080.0], [71.7, 1081.0], [71.8, 1083.0], [71.9, 1085.0], [72.0, 1087.0], [72.1, 1088.0], [72.2, 1090.0], [72.3, 1091.0], [72.4, 1093.0], [72.5, 1096.0], [72.6, 1097.0], [72.7, 1099.0], [72.8, 1100.0], [72.9, 1102.0], [73.0, 1103.0], [73.1, 1104.0], [73.2, 1106.0], [73.3, 1107.0], [73.4, 1108.0], [73.5, 1111.0], [73.6, 1113.0], [73.7, 1115.0], [73.8, 1116.0], [73.9, 1118.0], [74.0, 1119.0], [74.1, 1121.0], [74.2, 1122.0], [74.3, 1123.0], [74.4, 1125.0], [74.5, 1126.0], [74.6, 1128.0], [74.7, 1130.0], [74.8, 1134.0], [74.9, 1136.0], [75.0, 1138.0], [75.1, 1140.0], [75.2, 1142.0], [75.3, 1144.0], [75.4, 1147.0], [75.5, 1149.0], [75.6, 1151.0], [75.7, 1153.0], [75.8, 1158.0], [75.9, 1159.0], [76.0, 1161.0], [76.1, 1164.0], [76.2, 1167.0], [76.3, 1170.0], [76.4, 1172.0], [76.5, 1175.0], [76.6, 1177.0], [76.7, 1178.0], [76.8, 1184.0], [76.9, 1184.0], [77.0, 1186.0], [77.1, 1190.0], [77.2, 1192.0], [77.3, 1194.0], [77.4, 1195.0], [77.5, 1197.0], [77.6, 1200.0], [77.7, 1201.0], [77.8, 1205.0], [77.9, 1207.0], [78.0, 1208.0], [78.1, 1211.0], [78.2, 1213.0], [78.3, 1214.0], [78.4, 1216.0], [78.5, 1218.0], [78.6, 1221.0], [78.7, 1224.0], [78.8, 1228.0], [78.9, 1230.0], [79.0, 1233.0], [79.1, 1235.0], [79.2, 1239.0], [79.3, 1242.0], [79.4, 1243.0], [79.5, 1249.0], [79.6, 1253.0], [79.7, 1255.0], [79.8, 1257.0], [79.9, 1261.0], [80.0, 1263.0], [80.1, 1266.0], [80.2, 1268.0], [80.3, 1269.0], [80.4, 1273.0], [80.5, 1275.0], [80.6, 1279.0], [80.7, 1282.0], [80.8, 1284.0], [80.9, 1287.0], [81.0, 1289.0], [81.1, 1291.0], [81.2, 1294.0], [81.3, 1296.0], [81.4, 1298.0], [81.5, 1299.0], [81.6, 1302.0], [81.7, 1303.0], [81.8, 1305.0], [81.9, 1307.0], [82.0, 1310.0], [82.1, 1314.0], [82.2, 1316.0], [82.3, 1318.0], [82.4, 1319.0], [82.5, 1321.0], [82.6, 1322.0], [82.7, 1324.0], [82.8, 1324.0], [82.9, 1327.0], [83.0, 1330.0], [83.1, 1332.0], [83.2, 1335.0], [83.3, 1336.0], [83.4, 1339.0], [83.5, 1342.0], [83.6, 1344.0], [83.7, 1346.0], [83.8, 1349.0], [83.9, 1351.0], [84.0, 1353.0], [84.1, 1355.0], [84.2, 1357.0], [84.3, 1362.0], [84.4, 1364.0], [84.5, 1366.0], [84.6, 1367.0], [84.7, 1371.0], [84.8, 1372.0], [84.9, 1373.0], [85.0, 1375.0], [85.1, 1377.0], [85.2, 1378.0], [85.3, 1382.0], [85.4, 1383.0], [85.5, 1385.0], [85.6, 1386.0], [85.7, 1391.0], [85.8, 1394.0], [85.9, 1398.0], [86.0, 1400.0], [86.1, 1401.0], [86.2, 1404.0], [86.3, 1409.0], [86.4, 1412.0], [86.5, 1413.0], [86.6, 1416.0], [86.7, 1418.0], [86.8, 1421.0], [86.9, 1424.0], [87.0, 1429.0], [87.1, 1431.0], [87.2, 1433.0], [87.3, 1438.0], [87.4, 1442.0], [87.5, 1444.0], [87.6, 1452.0], [87.7, 1454.0], [87.8, 1457.0], [87.9, 1462.0], [88.0, 1469.0], [88.1, 1471.0], [88.2, 1472.0], [88.3, 1476.0], [88.4, 1480.0], [88.5, 1485.0], [88.6, 1487.0], [88.7, 1491.0], [88.8, 1493.0], [88.9, 1499.0], [89.0, 1503.0], [89.1, 1505.0], [89.2, 1508.0], [89.3, 1514.0], [89.4, 1525.0], [89.5, 1532.0], [89.6, 1537.0], [89.7, 1544.0], [89.8, 1549.0], [89.9, 1552.0], [90.0, 1559.0], [90.1, 1565.0], [90.2, 1569.0], [90.3, 1571.0], [90.4, 1573.0], [90.5, 1576.0], [90.6, 1589.0], [90.7, 1596.0], [90.8, 1599.0], [90.9, 1606.0], [91.0, 1613.0], [91.1, 1621.0], [91.2, 1629.0], [91.3, 1635.0], [91.4, 1648.0], [91.5, 1652.0], [91.6, 1656.0], [91.7, 1660.0], [91.8, 1665.0], [91.9, 1675.0], [92.0, 1679.0], [92.1, 1689.0], [92.2, 1693.0], [92.3, 1697.0], [92.4, 1705.0], [92.5, 1706.0], [92.6, 1711.0], [92.7, 1717.0], [92.8, 1729.0], [92.9, 1742.0], [93.0, 1749.0], [93.1, 1762.0], [93.2, 1772.0], [93.3, 1781.0], [93.4, 1788.0], [93.5, 1800.0], [93.6, 1815.0], [93.7, 1819.0], [93.8, 1839.0], [93.9, 1853.0], [94.0, 1860.0], [94.1, 1865.0], [94.2, 1873.0], [94.3, 1895.0], [94.4, 1900.0], [94.5, 1905.0], [94.6, 1917.0], [94.7, 1922.0], [94.8, 1928.0], [94.9, 1936.0], [95.0, 1949.0], [95.1, 1960.0], [95.2, 1969.0], [95.3, 1986.0], [95.4, 1999.0], [95.5, 2010.0], [95.6, 2019.0], [95.7, 2026.0], [95.8, 2045.0], [95.9, 2060.0], [96.0, 2077.0], [96.1, 2081.0], [96.2, 2105.0], [96.3, 2112.0], [96.4, 2138.0], [96.5, 2141.0], [96.6, 2150.0], [96.7, 2159.0], [96.8, 2171.0], [96.9, 2194.0], [97.0, 2208.0], [97.1, 2223.0], [97.2, 2231.0], [97.3, 2240.0], [97.4, 2258.0], [97.5, 2274.0], [97.6, 2300.0], [97.7, 2316.0], [97.8, 2334.0], [97.9, 2359.0], [98.0, 2398.0], [98.1, 2427.0], [98.2, 2453.0], [98.3, 2478.0], [98.4, 2512.0], [98.5, 2559.0], [98.6, 2627.0], [98.7, 2664.0], [98.8, 2688.0], [98.9, 2808.0], [99.0, 2959.0], [99.1, 3039.0], [99.2, 3218.0], [99.3, 3297.0], [99.4, 3449.0], [99.5, 3615.0], [99.6, 3852.0], [99.7, 4051.0], [99.8, 4605.0], [99.9, 4883.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 602.0, "series": [{"data": [[600.0, 394.0], [700.0, 313.0], [800.0, 307.0], [900.0, 290.0], [1000.0, 300.0], [1100.0, 252.0], [1200.0, 205.0], [1300.0, 232.0], [1400.0, 151.0], [1500.0, 100.0], [1600.0, 79.0], [1700.0, 59.0], [1800.0, 47.0], [1900.0, 53.0], [2000.0, 39.0], [2100.0, 40.0], [2200.0, 34.0], [2300.0, 22.0], [2400.0, 16.0], [2500.0, 12.0], [2600.0, 13.0], [2700.0, 3.0], [2800.0, 2.0], [2900.0, 7.0], [3000.0, 8.0], [3200.0, 7.0], [3300.0, 1.0], [3400.0, 4.0], [3500.0, 4.0], [3600.0, 4.0], [3700.0, 1.0], [3800.0, 3.0], [4000.0, 3.0], [4300.0, 1.0], [4100.0, 1.0], [4200.0, 1.0], [4600.0, 4.0], [4400.0, 1.0], [4700.0, 1.0], [4800.0, 1.0], [5000.0, 1.0], [5200.0, 1.0], [5600.0, 1.0], [5500.0, 1.0], [5700.0, 1.0], [100.0, 70.0], [200.0, 532.0], [300.0, 406.0], [400.0, 602.0], [500.0, 560.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 576.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3001.0, "series": [{"data": [[0.0, 1613.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3001.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 576.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.810126582278482, "minX": 1.60280346E12, "maxY": 10.0, "series": [{"data": [[1.60280382E12, 10.0], [1.60280364E12, 10.0], [1.60280346E12, 10.0], [1.60280394E12, 9.810126582278482], [1.60280376E12, 10.0], [1.60280358E12, 10.0], [1.60280388E12, 10.0], [1.6028037E12, 10.0], [1.60280352E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280394E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 293.0, "minX": 1.0, "maxY": 3028.0, "series": [{"data": [[8.0, 293.0], [4.0, 870.0], [2.0, 1147.0], [1.0, 3028.0], [9.0, 306.0], [10.0, 863.847133757962], [5.0, 1049.0], [6.0, 1211.0], [3.0, 860.0], [7.0, 832.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 864.1980732177265]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 213.83333333333334, "minX": 1.60280346E12, "maxY": 3647881.6333333333, "series": [{"data": [[1.60280382E12, 3647881.6333333333], [1.60280364E12, 3618757.6166666667], [1.60280346E12, 202425.08333333334], [1.60280394E12, 1211501.8833333333], [1.60280376E12, 2555829.0833333335], [1.60280358E12, 3207880.9166666665], [1.60280388E12, 3057374.65], [1.6028037E12, 3364839.8333333335], [1.60280352E12, 3106286.6666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280382E12, 5331.75], [1.60280364E12, 5543.783333333334], [1.60280346E12, 213.83333333333334], [1.60280394E12, 1780.2666666666667], [1.60280376E12, 5244.983333333334], [1.60280358E12, 5514.6], [1.60280388E12, 5746.283333333334], [1.6028037E12, 4557.5], [1.60280352E12, 4644.333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280394E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 783.2655217965644, "minX": 1.60280346E12, "maxY": 1605.2142857142853, "series": [{"data": [[1.60280382E12, 838.8935574229687], [1.60280364E12, 820.0712328767123], [1.60280346E12, 1605.2142857142853], [1.60280394E12, 1058.9409282700415], [1.60280376E12, 824.6671251719393], [1.60280358E12, 809.5860215053751], [1.60280388E12, 783.2655217965644], [1.6028037E12, 985.859016393443], [1.60280352E12, 926.096423017108]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280394E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 781.7225891677674, "minX": 1.60280346E12, "maxY": 1601.5, "series": [{"data": [[1.60280382E12, 836.9551820728299], [1.60280364E12, 817.854794520548], [1.60280346E12, 1601.5], [1.60280394E12, 1057.1012658227853], [1.60280376E12, 823.3933975240714], [1.60280358E12, 807.5752688172037], [1.60280388E12, 781.7225891677674], [1.6028037E12, 983.650819672131], [1.60280352E12, 923.9891135303266]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280394E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010568031704095118, "minX": 1.60280346E12, "maxY": 3.678571428571429, "series": [{"data": [[1.60280382E12, 0.019607843137254895], [1.60280364E12, 0.021917808219178082], [1.60280346E12, 3.678571428571429], [1.60280394E12, 0.012658227848101285], [1.60280376E12, 0.017881705639614862], [1.60280358E12, 0.012096774193548383], [1.60280388E12, 0.010568031704095118], [1.6028037E12, 0.014754098360655738], [1.60280352E12, 0.01866251944012441]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280394E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.60280346E12, "maxY": 5721.0, "series": [{"data": [[1.60280382E12, 2678.0], [1.60280364E12, 3653.0], [1.60280346E12, 3638.0], [1.60280394E12, 4051.0], [1.60280376E12, 5014.0], [1.60280358E12, 4009.0], [1.60280388E12, 3441.0], [1.6028037E12, 5721.0], [1.60280352E12, 5676.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280382E12, 192.4349998295307], [1.60280364E12, 193.15799965143205], [1.60280346E12, 272.0], [1.60280394E12, 293.0], [1.60280376E12, 198.0], [1.60280358E12, 195.0], [1.60280388E12, 188.82199981927872], [1.6028037E12, 194.49899985432626], [1.60280352E12, 215.59199969291686]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280382E12, 193.0785000681877], [1.60280364E12, 194.0], [1.60280346E12, 272.0], [1.60280394E12, 293.0], [1.60280376E12, 198.41440013885497], [1.60280358E12, 195.37550007104875], [1.60280388E12, 192.02520043373107], [1.6028037E12, 195.0489000582695], [1.60280352E12, 216.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280382E12, 192.79249991476536], [1.60280364E12, 193.888999825716], [1.60280346E12, 272.0], [1.60280394E12, 293.0], [1.60280376E12, 198.0], [1.60280358E12, 195.07749991118908], [1.60280388E12, 190.20599945783616], [1.6028037E12, 194.80449992716314], [1.60280352E12, 216.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280382E12, 179.0], [1.60280364E12, 187.0], [1.60280346E12, 272.0], [1.60280394E12, 262.0], [1.60280376E12, 186.0], [1.60280358E12, 191.0], [1.60280388E12, 179.0], [1.6028037E12, 186.0], [1.60280352E12, 200.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280382E12, 648.5], [1.60280364E12, 644.0], [1.60280346E12, 1050.5], [1.60280394E12, 924.0], [1.60280376E12, 696.0], [1.60280358E12, 593.5], [1.60280388E12, 650.0], [1.6028037E12, 835.5], [1.60280352E12, 819.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280394E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 403.0, "minX": 1.0, "maxY": 3028.0, "series": [{"data": [[2.0, 1061.0], [3.0, 1355.0], [4.0, 2156.0], [5.0, 1141.0], [6.0, 1122.5], [7.0, 1137.5], [8.0, 1064.5], [9.0, 935.0], [10.0, 945.0], [11.0, 802.0], [12.0, 838.5], [13.0, 711.0], [14.0, 610.5], [15.0, 619.0], [16.0, 602.0], [1.0, 3028.0], [17.0, 530.0], [18.0, 448.5], [19.0, 466.0], [20.0, 445.5], [21.0, 439.5], [22.0, 454.0], [23.0, 431.0], [24.0, 405.0], [25.0, 403.0], [26.0, 430.5], [27.0, 407.0], [29.0, 410.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 403.0, "minX": 1.0, "maxY": 3016.0, "series": [{"data": [[2.0, 1059.5], [3.0, 1355.0], [4.0, 2151.5], [5.0, 1138.5], [6.0, 1122.0], [7.0, 1135.5], [8.0, 1061.0], [9.0, 934.0], [10.0, 944.0], [11.0, 800.0], [12.0, 838.0], [13.0, 710.0], [14.0, 609.0], [15.0, 619.0], [16.0, 601.5], [1.0, 3016.0], [17.0, 529.0], [18.0, 448.5], [19.0, 466.0], [20.0, 445.5], [21.0, 439.5], [22.0, 453.5], [23.0, 431.0], [24.0, 404.5], [25.0, 403.0], [26.0, 430.0], [27.0, 407.0], [29.0, 410.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6333333333333333, "minX": 1.60280346E12, "maxY": 12.616666666666667, "series": [{"data": [[1.60280382E12, 11.9], [1.60280364E12, 12.166666666666666], [1.60280346E12, 0.6333333333333333], [1.60280394E12, 3.783333333333333], [1.60280376E12, 12.116666666666667], [1.60280358E12, 12.4], [1.60280388E12, 12.616666666666667], [1.6028037E12, 10.166666666666666], [1.60280352E12, 10.716666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280394E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.60280346E12, "maxY": 12.616666666666667, "series": [{"data": [[1.60280382E12, 11.9], [1.60280364E12, 12.166666666666666], [1.60280346E12, 0.4666666666666667], [1.60280394E12, 3.95], [1.60280376E12, 12.116666666666667], [1.60280358E12, 12.4], [1.60280388E12, 12.616666666666667], [1.6028037E12, 10.166666666666666], [1.60280352E12, 10.716666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280394E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.60280346E12, "maxY": 12.616666666666667, "series": [{"data": [[1.60280382E12, 11.9], [1.60280364E12, 12.166666666666666], [1.60280346E12, 0.4666666666666667], [1.60280394E12, 3.95], [1.60280376E12, 12.116666666666667], [1.60280358E12, 12.4], [1.60280388E12, 12.616666666666667], [1.6028037E12, 10.166666666666666], [1.60280352E12, 10.716666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280394E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.60280346E12, "maxY": 12.616666666666667, "series": [{"data": [[1.60280382E12, 11.9], [1.60280364E12, 12.166666666666666], [1.60280346E12, 0.4666666666666667], [1.60280394E12, 3.95], [1.60280376E12, 12.116666666666667], [1.60280358E12, 12.4], [1.60280388E12, 12.616666666666667], [1.6028037E12, 10.166666666666666], [1.60280352E12, 10.716666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280394E12, "title": "Total Transactions Per Second"}},
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

