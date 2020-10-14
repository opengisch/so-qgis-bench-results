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
        data: {"result": {"minY": 61.0, "minX": 0.0, "maxY": 5040.0, "series": [{"data": [[0.0, 61.0], [0.1, 73.0], [0.2, 90.0], [0.3, 95.0], [0.4, 103.0], [0.5, 113.0], [0.6, 114.0], [0.7, 117.0], [0.8, 125.0], [0.9, 126.0], [1.0, 129.0], [1.1, 131.0], [1.2, 132.0], [1.3, 134.0], [1.4, 135.0], [1.5, 136.0], [1.6, 138.0], [1.7, 139.0], [1.8, 140.0], [1.9, 140.0], [2.0, 141.0], [2.1, 141.0], [2.2, 142.0], [2.3, 142.0], [2.4, 143.0], [2.5, 143.0], [2.6, 143.0], [2.7, 144.0], [2.8, 144.0], [2.9, 144.0], [3.0, 144.0], [3.1, 145.0], [3.2, 145.0], [3.3, 145.0], [3.4, 145.0], [3.5, 145.0], [3.6, 146.0], [3.7, 146.0], [3.8, 146.0], [3.9, 146.0], [4.0, 147.0], [4.1, 147.0], [4.2, 147.0], [4.3, 147.0], [4.4, 147.0], [4.5, 148.0], [4.6, 148.0], [4.7, 148.0], [4.8, 148.0], [4.9, 148.0], [5.0, 149.0], [5.1, 149.0], [5.2, 149.0], [5.3, 149.0], [5.4, 149.0], [5.5, 149.0], [5.6, 149.0], [5.7, 150.0], [5.8, 150.0], [5.9, 150.0], [6.0, 150.0], [6.1, 150.0], [6.2, 151.0], [6.3, 151.0], [6.4, 151.0], [6.5, 151.0], [6.6, 151.0], [6.7, 151.0], [6.8, 151.0], [6.9, 152.0], [7.0, 152.0], [7.1, 152.0], [7.2, 152.0], [7.3, 152.0], [7.4, 153.0], [7.5, 153.0], [7.6, 153.0], [7.7, 153.0], [7.8, 153.0], [7.9, 153.0], [8.0, 153.0], [8.1, 154.0], [8.2, 154.0], [8.3, 154.0], [8.4, 154.0], [8.5, 154.0], [8.6, 154.0], [8.7, 155.0], [8.8, 155.0], [8.9, 155.0], [9.0, 155.0], [9.1, 155.0], [9.2, 155.0], [9.3, 156.0], [9.4, 156.0], [9.5, 156.0], [9.6, 156.0], [9.7, 156.0], [9.8, 156.0], [9.9, 156.0], [10.0, 156.0], [10.1, 156.0], [10.2, 157.0], [10.3, 157.0], [10.4, 157.0], [10.5, 157.0], [10.6, 157.0], [10.7, 157.0], [10.8, 157.0], [10.9, 158.0], [11.0, 158.0], [11.1, 158.0], [11.2, 158.0], [11.3, 158.0], [11.4, 158.0], [11.5, 159.0], [11.6, 159.0], [11.7, 159.0], [11.8, 159.0], [11.9, 159.0], [12.0, 160.0], [12.1, 160.0], [12.2, 160.0], [12.3, 160.0], [12.4, 160.0], [12.5, 160.0], [12.6, 161.0], [12.7, 161.0], [12.8, 161.0], [12.9, 161.0], [13.0, 161.0], [13.1, 161.0], [13.2, 161.0], [13.3, 161.0], [13.4, 162.0], [13.5, 162.0], [13.6, 162.0], [13.7, 162.0], [13.8, 162.0], [13.9, 163.0], [14.0, 163.0], [14.1, 163.0], [14.2, 163.0], [14.3, 163.0], [14.4, 163.0], [14.5, 163.0], [14.6, 163.0], [14.7, 164.0], [14.8, 164.0], [14.9, 164.0], [15.0, 164.0], [15.1, 164.0], [15.2, 164.0], [15.3, 165.0], [15.4, 165.0], [15.5, 165.0], [15.6, 165.0], [15.7, 165.0], [15.8, 166.0], [15.9, 166.0], [16.0, 166.0], [16.1, 166.0], [16.2, 167.0], [16.3, 167.0], [16.4, 167.0], [16.5, 167.0], [16.6, 168.0], [16.7, 168.0], [16.8, 168.0], [16.9, 168.0], [17.0, 169.0], [17.1, 169.0], [17.2, 170.0], [17.3, 170.0], [17.4, 170.0], [17.5, 171.0], [17.6, 171.0], [17.7, 171.0], [17.8, 172.0], [17.9, 172.0], [18.0, 172.0], [18.1, 173.0], [18.2, 173.0], [18.3, 173.0], [18.4, 174.0], [18.5, 175.0], [18.6, 175.0], [18.7, 176.0], [18.8, 177.0], [18.9, 177.0], [19.0, 178.0], [19.1, 178.0], [19.2, 179.0], [19.3, 180.0], [19.4, 180.0], [19.5, 180.0], [19.6, 181.0], [19.7, 181.0], [19.8, 182.0], [19.9, 182.0], [20.0, 183.0], [20.1, 183.0], [20.2, 184.0], [20.3, 185.0], [20.4, 185.0], [20.5, 187.0], [20.6, 187.0], [20.7, 188.0], [20.8, 189.0], [20.9, 190.0], [21.0, 191.0], [21.1, 193.0], [21.2, 195.0], [21.3, 196.0], [21.4, 198.0], [21.5, 199.0], [21.6, 201.0], [21.7, 204.0], [21.8, 205.0], [21.9, 206.0], [22.0, 208.0], [22.1, 208.0], [22.2, 210.0], [22.3, 211.0], [22.4, 213.0], [22.5, 214.0], [22.6, 218.0], [22.7, 219.0], [22.8, 220.0], [22.9, 221.0], [23.0, 222.0], [23.1, 224.0], [23.2, 226.0], [23.3, 228.0], [23.4, 230.0], [23.5, 231.0], [23.6, 232.0], [23.7, 234.0], [23.8, 234.0], [23.9, 236.0], [24.0, 237.0], [24.1, 239.0], [24.2, 240.0], [24.3, 242.0], [24.4, 243.0], [24.5, 244.0], [24.6, 246.0], [24.7, 247.0], [24.8, 248.0], [24.9, 248.0], [25.0, 249.0], [25.1, 249.0], [25.2, 250.0], [25.3, 252.0], [25.4, 253.0], [25.5, 254.0], [25.6, 255.0], [25.7, 255.0], [25.8, 257.0], [25.9, 258.0], [26.0, 260.0], [26.1, 260.0], [26.2, 261.0], [26.3, 261.0], [26.4, 263.0], [26.5, 263.0], [26.6, 265.0], [26.7, 266.0], [26.8, 266.0], [26.9, 267.0], [27.0, 268.0], [27.1, 269.0], [27.2, 269.0], [27.3, 270.0], [27.4, 271.0], [27.5, 271.0], [27.6, 272.0], [27.7, 272.0], [27.8, 273.0], [27.9, 275.0], [28.0, 275.0], [28.1, 276.0], [28.2, 276.0], [28.3, 276.0], [28.4, 277.0], [28.5, 278.0], [28.6, 278.0], [28.7, 279.0], [28.8, 279.0], [28.9, 280.0], [29.0, 280.0], [29.1, 281.0], [29.2, 282.0], [29.3, 283.0], [29.4, 284.0], [29.5, 285.0], [29.6, 286.0], [29.7, 287.0], [29.8, 287.0], [29.9, 289.0], [30.0, 289.0], [30.1, 290.0], [30.2, 291.0], [30.3, 291.0], [30.4, 292.0], [30.5, 293.0], [30.6, 294.0], [30.7, 295.0], [30.8, 295.0], [30.9, 295.0], [31.0, 296.0], [31.1, 297.0], [31.2, 298.0], [31.3, 298.0], [31.4, 299.0], [31.5, 300.0], [31.6, 301.0], [31.7, 303.0], [31.8, 303.0], [31.9, 304.0], [32.0, 304.0], [32.1, 305.0], [32.2, 306.0], [32.3, 306.0], [32.4, 306.0], [32.5, 307.0], [32.6, 308.0], [32.7, 309.0], [32.8, 309.0], [32.9, 311.0], [33.0, 312.0], [33.1, 313.0], [33.2, 313.0], [33.3, 315.0], [33.4, 315.0], [33.5, 316.0], [33.6, 317.0], [33.7, 319.0], [33.8, 320.0], [33.9, 321.0], [34.0, 322.0], [34.1, 323.0], [34.2, 324.0], [34.3, 325.0], [34.4, 326.0], [34.5, 328.0], [34.6, 328.0], [34.7, 330.0], [34.8, 330.0], [34.9, 332.0], [35.0, 333.0], [35.1, 334.0], [35.2, 336.0], [35.3, 338.0], [35.4, 339.0], [35.5, 341.0], [35.6, 342.0], [35.7, 345.0], [35.8, 346.0], [35.9, 346.0], [36.0, 347.0], [36.1, 348.0], [36.2, 349.0], [36.3, 351.0], [36.4, 352.0], [36.5, 352.0], [36.6, 354.0], [36.7, 356.0], [36.8, 357.0], [36.9, 358.0], [37.0, 359.0], [37.1, 360.0], [37.2, 361.0], [37.3, 363.0], [37.4, 364.0], [37.5, 365.0], [37.6, 367.0], [37.7, 368.0], [37.8, 369.0], [37.9, 371.0], [38.0, 372.0], [38.1, 374.0], [38.2, 375.0], [38.3, 377.0], [38.4, 378.0], [38.5, 379.0], [38.6, 379.0], [38.7, 380.0], [38.8, 384.0], [38.9, 385.0], [39.0, 390.0], [39.1, 392.0], [39.2, 394.0], [39.3, 394.0], [39.4, 396.0], [39.5, 398.0], [39.6, 398.0], [39.7, 400.0], [39.8, 401.0], [39.9, 402.0], [40.0, 404.0], [40.1, 405.0], [40.2, 406.0], [40.3, 407.0], [40.4, 408.0], [40.5, 409.0], [40.6, 411.0], [40.7, 412.0], [40.8, 414.0], [40.9, 415.0], [41.0, 416.0], [41.1, 419.0], [41.2, 420.0], [41.3, 422.0], [41.4, 424.0], [41.5, 425.0], [41.6, 428.0], [41.7, 429.0], [41.8, 430.0], [41.9, 431.0], [42.0, 432.0], [42.1, 433.0], [42.2, 434.0], [42.3, 435.0], [42.4, 437.0], [42.5, 439.0], [42.6, 442.0], [42.7, 443.0], [42.8, 445.0], [42.9, 447.0], [43.0, 449.0], [43.1, 451.0], [43.2, 453.0], [43.3, 455.0], [43.4, 456.0], [43.5, 458.0], [43.6, 459.0], [43.7, 461.0], [43.8, 463.0], [43.9, 465.0], [44.0, 466.0], [44.1, 468.0], [44.2, 469.0], [44.3, 470.0], [44.4, 472.0], [44.5, 474.0], [44.6, 475.0], [44.7, 476.0], [44.8, 477.0], [44.9, 478.0], [45.0, 480.0], [45.1, 482.0], [45.2, 483.0], [45.3, 484.0], [45.4, 487.0], [45.5, 489.0], [45.6, 492.0], [45.7, 494.0], [45.8, 495.0], [45.9, 496.0], [46.0, 498.0], [46.1, 500.0], [46.2, 502.0], [46.3, 504.0], [46.4, 505.0], [46.5, 506.0], [46.6, 507.0], [46.7, 509.0], [46.8, 510.0], [46.9, 512.0], [47.0, 514.0], [47.1, 516.0], [47.2, 517.0], [47.3, 517.0], [47.4, 518.0], [47.5, 519.0], [47.6, 520.0], [47.7, 521.0], [47.8, 523.0], [47.9, 525.0], [48.0, 527.0], [48.1, 531.0], [48.2, 533.0], [48.3, 536.0], [48.4, 537.0], [48.5, 539.0], [48.6, 541.0], [48.7, 544.0], [48.8, 546.0], [48.9, 548.0], [49.0, 549.0], [49.1, 551.0], [49.2, 555.0], [49.3, 561.0], [49.4, 564.0], [49.5, 565.0], [49.6, 567.0], [49.7, 569.0], [49.8, 570.0], [49.9, 572.0], [50.0, 576.0], [50.1, 577.0], [50.2, 578.0], [50.3, 580.0], [50.4, 582.0], [50.5, 583.0], [50.6, 585.0], [50.7, 586.0], [50.8, 588.0], [50.9, 589.0], [51.0, 590.0], [51.1, 592.0], [51.2, 594.0], [51.3, 595.0], [51.4, 596.0], [51.5, 598.0], [51.6, 600.0], [51.7, 602.0], [51.8, 603.0], [51.9, 604.0], [52.0, 605.0], [52.1, 607.0], [52.2, 607.0], [52.3, 609.0], [52.4, 610.0], [52.5, 611.0], [52.6, 612.0], [52.7, 614.0], [52.8, 616.0], [52.9, 617.0], [53.0, 618.0], [53.1, 620.0], [53.2, 622.0], [53.3, 623.0], [53.4, 624.0], [53.5, 625.0], [53.6, 627.0], [53.7, 628.0], [53.8, 629.0], [53.9, 631.0], [54.0, 632.0], [54.1, 634.0], [54.2, 636.0], [54.3, 639.0], [54.4, 640.0], [54.5, 641.0], [54.6, 643.0], [54.7, 646.0], [54.8, 647.0], [54.9, 649.0], [55.0, 651.0], [55.1, 653.0], [55.2, 654.0], [55.3, 655.0], [55.4, 656.0], [55.5, 657.0], [55.6, 657.0], [55.7, 659.0], [55.8, 661.0], [55.9, 662.0], [56.0, 664.0], [56.1, 665.0], [56.2, 667.0], [56.3, 669.0], [56.4, 670.0], [56.5, 672.0], [56.6, 672.0], [56.7, 674.0], [56.8, 677.0], [56.9, 680.0], [57.0, 681.0], [57.1, 682.0], [57.2, 685.0], [57.3, 687.0], [57.4, 689.0], [57.5, 690.0], [57.6, 691.0], [57.7, 693.0], [57.8, 695.0], [57.9, 696.0], [58.0, 697.0], [58.1, 698.0], [58.2, 700.0], [58.3, 701.0], [58.4, 703.0], [58.5, 704.0], [58.6, 707.0], [58.7, 708.0], [58.8, 711.0], [58.9, 713.0], [59.0, 715.0], [59.1, 715.0], [59.2, 716.0], [59.3, 717.0], [59.4, 719.0], [59.5, 719.0], [59.6, 721.0], [59.7, 722.0], [59.8, 725.0], [59.9, 726.0], [60.0, 728.0], [60.1, 729.0], [60.2, 731.0], [60.3, 732.0], [60.4, 733.0], [60.5, 734.0], [60.6, 735.0], [60.7, 737.0], [60.8, 738.0], [60.9, 742.0], [61.0, 745.0], [61.1, 747.0], [61.2, 749.0], [61.3, 751.0], [61.4, 753.0], [61.5, 755.0], [61.6, 755.0], [61.7, 758.0], [61.8, 759.0], [61.9, 760.0], [62.0, 762.0], [62.1, 763.0], [62.2, 764.0], [62.3, 767.0], [62.4, 769.0], [62.5, 770.0], [62.6, 772.0], [62.7, 774.0], [62.8, 774.0], [62.9, 775.0], [63.0, 776.0], [63.1, 779.0], [63.2, 780.0], [63.3, 782.0], [63.4, 783.0], [63.5, 784.0], [63.6, 785.0], [63.7, 787.0], [63.8, 788.0], [63.9, 790.0], [64.0, 791.0], [64.1, 792.0], [64.2, 795.0], [64.3, 796.0], [64.4, 798.0], [64.5, 800.0], [64.6, 803.0], [64.7, 805.0], [64.8, 806.0], [64.9, 806.0], [65.0, 807.0], [65.1, 808.0], [65.2, 811.0], [65.3, 813.0], [65.4, 815.0], [65.5, 817.0], [65.6, 818.0], [65.7, 819.0], [65.8, 820.0], [65.9, 821.0], [66.0, 823.0], [66.1, 824.0], [66.2, 825.0], [66.3, 827.0], [66.4, 828.0], [66.5, 833.0], [66.6, 834.0], [66.7, 835.0], [66.8, 837.0], [66.9, 838.0], [67.0, 841.0], [67.1, 843.0], [67.2, 844.0], [67.3, 845.0], [67.4, 847.0], [67.5, 849.0], [67.6, 851.0], [67.7, 852.0], [67.8, 853.0], [67.9, 855.0], [68.0, 858.0], [68.1, 859.0], [68.2, 861.0], [68.3, 863.0], [68.4, 866.0], [68.5, 867.0], [68.6, 870.0], [68.7, 872.0], [68.8, 874.0], [68.9, 877.0], [69.0, 880.0], [69.1, 884.0], [69.2, 890.0], [69.3, 893.0], [69.4, 894.0], [69.5, 897.0], [69.6, 901.0], [69.7, 902.0], [69.8, 905.0], [69.9, 906.0], [70.0, 909.0], [70.1, 911.0], [70.2, 912.0], [70.3, 915.0], [70.4, 917.0], [70.5, 918.0], [70.6, 919.0], [70.7, 925.0], [70.8, 926.0], [70.9, 928.0], [71.0, 931.0], [71.1, 933.0], [71.2, 937.0], [71.3, 941.0], [71.4, 944.0], [71.5, 946.0], [71.6, 946.0], [71.7, 948.0], [71.8, 950.0], [71.9, 951.0], [72.0, 954.0], [72.1, 955.0], [72.2, 959.0], [72.3, 963.0], [72.4, 966.0], [72.5, 968.0], [72.6, 973.0], [72.7, 976.0], [72.8, 979.0], [72.9, 984.0], [73.0, 987.0], [73.1, 991.0], [73.2, 994.0], [73.3, 996.0], [73.4, 999.0], [73.5, 1002.0], [73.6, 1005.0], [73.7, 1007.0], [73.8, 1010.0], [73.9, 1014.0], [74.0, 1015.0], [74.1, 1021.0], [74.2, 1023.0], [74.3, 1026.0], [74.4, 1030.0], [74.5, 1033.0], [74.6, 1035.0], [74.7, 1037.0], [74.8, 1039.0], [74.9, 1042.0], [75.0, 1044.0], [75.1, 1046.0], [75.2, 1048.0], [75.3, 1051.0], [75.4, 1053.0], [75.5, 1056.0], [75.6, 1057.0], [75.7, 1061.0], [75.8, 1064.0], [75.9, 1066.0], [76.0, 1068.0], [76.1, 1069.0], [76.2, 1072.0], [76.3, 1074.0], [76.4, 1077.0], [76.5, 1080.0], [76.6, 1085.0], [76.7, 1088.0], [76.8, 1090.0], [76.9, 1092.0], [77.0, 1095.0], [77.1, 1099.0], [77.2, 1100.0], [77.3, 1103.0], [77.4, 1104.0], [77.5, 1107.0], [77.6, 1109.0], [77.7, 1112.0], [77.8, 1114.0], [77.9, 1118.0], [78.0, 1121.0], [78.1, 1122.0], [78.2, 1125.0], [78.3, 1127.0], [78.4, 1129.0], [78.5, 1130.0], [78.6, 1132.0], [78.7, 1134.0], [78.8, 1136.0], [78.9, 1141.0], [79.0, 1143.0], [79.1, 1151.0], [79.2, 1152.0], [79.3, 1154.0], [79.4, 1158.0], [79.5, 1160.0], [79.6, 1162.0], [79.7, 1165.0], [79.8, 1168.0], [79.9, 1171.0], [80.0, 1174.0], [80.1, 1178.0], [80.2, 1182.0], [80.3, 1185.0], [80.4, 1188.0], [80.5, 1190.0], [80.6, 1193.0], [80.7, 1195.0], [80.8, 1198.0], [80.9, 1200.0], [81.0, 1203.0], [81.1, 1206.0], [81.2, 1207.0], [81.3, 1210.0], [81.4, 1212.0], [81.5, 1216.0], [81.6, 1220.0], [81.7, 1225.0], [81.8, 1228.0], [81.9, 1231.0], [82.0, 1233.0], [82.1, 1239.0], [82.2, 1243.0], [82.3, 1246.0], [82.4, 1249.0], [82.5, 1252.0], [82.6, 1255.0], [82.7, 1260.0], [82.8, 1262.0], [82.9, 1266.0], [83.0, 1268.0], [83.1, 1270.0], [83.2, 1273.0], [83.3, 1281.0], [83.4, 1286.0], [83.5, 1288.0], [83.6, 1294.0], [83.7, 1298.0], [83.8, 1301.0], [83.9, 1305.0], [84.0, 1312.0], [84.1, 1314.0], [84.2, 1317.0], [84.3, 1321.0], [84.4, 1327.0], [84.5, 1329.0], [84.6, 1334.0], [84.7, 1337.0], [84.8, 1342.0], [84.9, 1344.0], [85.0, 1346.0], [85.1, 1349.0], [85.2, 1355.0], [85.3, 1361.0], [85.4, 1364.0], [85.5, 1368.0], [85.6, 1373.0], [85.7, 1377.0], [85.8, 1383.0], [85.9, 1388.0], [86.0, 1391.0], [86.1, 1396.0], [86.2, 1401.0], [86.3, 1405.0], [86.4, 1408.0], [86.5, 1412.0], [86.6, 1417.0], [86.7, 1424.0], [86.8, 1426.0], [86.9, 1429.0], [87.0, 1432.0], [87.1, 1435.0], [87.2, 1446.0], [87.3, 1453.0], [87.4, 1454.0], [87.5, 1462.0], [87.6, 1465.0], [87.7, 1473.0], [87.8, 1479.0], [87.9, 1486.0], [88.0, 1490.0], [88.1, 1495.0], [88.2, 1500.0], [88.3, 1505.0], [88.4, 1511.0], [88.5, 1517.0], [88.6, 1524.0], [88.7, 1530.0], [88.8, 1534.0], [88.9, 1538.0], [89.0, 1544.0], [89.1, 1548.0], [89.2, 1553.0], [89.3, 1560.0], [89.4, 1567.0], [89.5, 1571.0], [89.6, 1574.0], [89.7, 1583.0], [89.8, 1597.0], [89.9, 1605.0], [90.0, 1609.0], [90.1, 1614.0], [90.2, 1619.0], [90.3, 1623.0], [90.4, 1628.0], [90.5, 1633.0], [90.6, 1634.0], [90.7, 1645.0], [90.8, 1647.0], [90.9, 1657.0], [91.0, 1663.0], [91.1, 1666.0], [91.2, 1676.0], [91.3, 1684.0], [91.4, 1692.0], [91.5, 1700.0], [91.6, 1705.0], [91.7, 1712.0], [91.8, 1718.0], [91.9, 1726.0], [92.0, 1729.0], [92.1, 1738.0], [92.2, 1741.0], [92.3, 1747.0], [92.4, 1756.0], [92.5, 1764.0], [92.6, 1769.0], [92.7, 1777.0], [92.8, 1785.0], [92.9, 1795.0], [93.0, 1809.0], [93.1, 1814.0], [93.2, 1825.0], [93.3, 1829.0], [93.4, 1830.0], [93.5, 1838.0], [93.6, 1852.0], [93.7, 1861.0], [93.8, 1870.0], [93.9, 1882.0], [94.0, 1888.0], [94.1, 1900.0], [94.2, 1912.0], [94.3, 1925.0], [94.4, 1945.0], [94.5, 1956.0], [94.6, 1964.0], [94.7, 1977.0], [94.8, 1988.0], [94.9, 1994.0], [95.0, 1999.0], [95.1, 2008.0], [95.2, 2027.0], [95.3, 2045.0], [95.4, 2056.0], [95.5, 2066.0], [95.6, 2085.0], [95.7, 2095.0], [95.8, 2106.0], [95.9, 2121.0], [96.0, 2138.0], [96.1, 2147.0], [96.2, 2197.0], [96.3, 2215.0], [96.4, 2238.0], [96.5, 2263.0], [96.6, 2285.0], [96.7, 2317.0], [96.8, 2336.0], [96.9, 2368.0], [97.0, 2401.0], [97.1, 2418.0], [97.2, 2433.0], [97.3, 2469.0], [97.4, 2483.0], [97.5, 2513.0], [97.6, 2539.0], [97.7, 2562.0], [97.8, 2585.0], [97.9, 2611.0], [98.0, 2648.0], [98.1, 2660.0], [98.2, 2699.0], [98.3, 2726.0], [98.4, 2751.0], [98.5, 2806.0], [98.6, 2834.0], [98.7, 2856.0], [98.8, 2946.0], [98.9, 3009.0], [99.0, 3041.0], [99.1, 3090.0], [99.2, 3125.0], [99.3, 3245.0], [99.4, 3299.0], [99.5, 3396.0], [99.6, 3864.0], [99.7, 4331.0], [99.8, 4428.0], [99.9, 4747.0], [100.0, 5040.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1112.0, "series": [{"data": [[0.0, 21.0], [600.0, 346.0], [700.0, 330.0], [800.0, 270.0], [900.0, 202.0], [1000.0, 196.0], [1100.0, 196.0], [1200.0, 152.0], [1300.0, 128.0], [1400.0, 106.0], [1500.0, 87.0], [100.0, 1112.0], [1600.0, 86.0], [1700.0, 77.0], [1800.0, 60.0], [1900.0, 48.0], [2000.0, 38.0], [2100.0, 28.0], [2200.0, 22.0], [2300.0, 17.0], [2400.0, 24.0], [2500.0, 21.0], [2600.0, 19.0], [2700.0, 14.0], [2800.0, 15.0], [2900.0, 7.0], [3000.0, 12.0], [3100.0, 8.0], [200.0, 523.0], [3200.0, 7.0], [3300.0, 5.0], [3400.0, 1.0], [3600.0, 3.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4300.0, 4.0], [4200.0, 2.0], [4400.0, 3.0], [4500.0, 1.0], [4600.0, 1.0], [300.0, 433.0], [4700.0, 4.0], [4800.0, 2.0], [5000.0, 2.0], [400.0, 335.0], [500.0, 291.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 619.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2426.0, "series": [{"data": [[0.0, 2426.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2217.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 619.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.841726618705037, "minX": 1.60264032E12, "maxY": 12.0, "series": [{"data": [[1.60264056E12, 12.0], [1.60264062E12, 11.841726618705037], [1.60264044E12, 12.0], [1.6026405E12, 12.0], [1.60264032E12, 11.951156812339343], [1.60264038E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264062E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 739.2283915283341, "minX": 1.0, "maxY": 4809.0, "series": [{"data": [[8.0, 2596.0], [4.0, 4759.0], [2.0, 4809.0], [1.0, 4747.0], [9.0, 2318.0], [5.0, 1792.6666666666667], [10.0, 2486.0], [11.0, 1630.75], [6.0, 1512.3333333333333], [12.0, 739.2283915283341], [3.0, 4378.0], [7.0, 4741.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980235651843412, 746.66818700114]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3702.4666666666667, "minX": 1.60264032E12, "maxY": 1078315.7833333334, "series": [{"data": [[1.60264056E12, 1078315.7833333334], [1.60264062E12, 329666.7], [1.60264044E12, 691722.4], [1.6026405E12, 481299.98333333334], [1.60264032E12, 747693.35], [1.60264038E12, 922221.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60264056E12, 7257.9], [1.60264062E12, 3702.4666666666667], [1.60264044E12, 10451.266666666666], [1.6026405E12, 10293.333333333334], [1.60264032E12, 6689.183333333333], [1.60264038E12, 7096.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264062E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 564.6783161239075, "minX": 1.60264032E12, "maxY": 903.6953316953316, "series": [{"data": [[1.60264056E12, 871.5042527339003], [1.60264062E12, 882.0455635491601], [1.60264044E12, 564.6783161239075], [1.6026405E12, 618.1528608027322], [1.60264032E12, 865.6966580976851], [1.60264038E12, 903.6953316953316]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264062E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 564.4011119936454, "minX": 1.60264032E12, "maxY": 903.1658476658471, "series": [{"data": [[1.60264056E12, 870.9113001215064], [1.60264062E12, 881.6282973621098], [1.60264044E12, 564.4011119936454], [1.6026405E12, 617.9453458582396], [1.60264032E12, 865.2159383033411], [1.60264038E12, 903.1658476658471]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264062E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011101622544833468, "minX": 1.60264032E12, "maxY": 0.1683804627249357, "series": [{"data": [[1.60264056E12, 0.01579586877278251], [1.60264062E12, 0.02398081534772184], [1.60264044E12, 0.016679904686258958], [1.6026405E12, 0.011101622544833468], [1.60264032E12, 0.1683804627249357], [1.60264038E12, 0.018427518427518448]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264062E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 61.0, "minX": 1.60264032E12, "maxY": 5040.0, "series": [{"data": [[1.60264056E12, 3335.0], [1.60264062E12, 5040.0], [1.60264044E12, 4428.0], [1.6026405E12, 2946.0], [1.60264032E12, 3299.0], [1.60264038E12, 3396.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60264056E12, 134.4159998035431], [1.60264062E12, 130.52399980068208], [1.60264044E12, 140.0], [1.6026405E12, 114.12399636745454], [1.60264032E12, 140.0], [1.60264038E12, 93.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60264056E12, 135.15760007858276], [1.60264062E12, 131.0], [1.60264044E12, 141.42200036048888], [1.6026405E12, 121.20560022354127], [1.60264032E12, 140.0], [1.60264038E12, 93.13700015544892]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60264056E12, 134.82799990177153], [1.60264062E12, 130.94199990034105], [1.60264044E12, 140.0], [1.6026405E12, 120.26799972057343], [1.60264032E12, 140.0], [1.60264038E12, 93.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60264056E12, 73.0], [1.60264062E12, 125.0], [1.60264044E12, 106.0], [1.6026405E12, 84.0], [1.60264032E12, 62.0], [1.60264038E12, 61.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60264056E12, 729.0], [1.60264062E12, 628.0], [1.60264044E12, 312.0], [1.6026405E12, 480.0], [1.60264032E12, 747.0], [1.60264038E12, 785.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264062E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 150.5, "minX": 1.0, "maxY": 4747.0, "series": [{"data": [[33.0, 296.0], [32.0, 309.0], [2.0, 4530.5], [35.0, 286.0], [34.0, 329.0], [37.0, 176.0], [39.0, 293.0], [38.0, 261.5], [41.0, 235.0], [40.0, 277.5], [42.0, 281.5], [43.0, 164.0], [44.0, 279.5], [45.0, 213.5], [47.0, 163.0], [3.0, 2559.5], [50.0, 150.5], [56.0, 161.0], [4.0, 2067.5], [67.0, 181.0], [5.0, 1996.0], [6.0, 1665.0], [7.0, 1403.0], [8.0, 1403.5], [9.0, 1252.5], [10.0, 1072.5], [11.0, 1019.0], [12.0, 858.5], [13.0, 1029.5], [14.0, 822.5], [15.0, 745.0], [16.0, 702.0], [1.0, 4747.0], [17.0, 782.0], [18.0, 621.0], [19.0, 545.0], [20.0, 771.0], [21.0, 450.0], [22.0, 586.5], [23.0, 589.0], [24.0, 469.5], [25.0, 491.0], [26.0, 367.5], [27.0, 186.0], [28.0, 322.5], [29.0, 346.0], [30.0, 250.5], [31.0, 498.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 150.5, "minX": 1.0, "maxY": 4747.0, "series": [{"data": [[33.0, 296.0], [32.0, 309.0], [2.0, 4529.5], [35.0, 285.0], [34.0, 329.0], [37.0, 176.0], [39.0, 293.0], [38.0, 261.5], [41.0, 235.0], [40.0, 277.5], [42.0, 281.0], [43.0, 164.0], [44.0, 279.5], [45.0, 213.5], [47.0, 163.0], [3.0, 2558.0], [50.0, 150.5], [56.0, 161.0], [4.0, 2067.0], [67.0, 181.0], [5.0, 1995.5], [6.0, 1665.0], [7.0, 1403.0], [8.0, 1401.5], [9.0, 1251.5], [10.0, 1070.5], [11.0, 1018.5], [12.0, 858.5], [13.0, 1029.0], [14.0, 822.5], [15.0, 745.0], [16.0, 701.5], [1.0, 4747.0], [17.0, 781.5], [18.0, 620.5], [19.0, 545.0], [20.0, 771.0], [21.0, 449.5], [22.0, 586.5], [23.0, 588.0], [24.0, 469.0], [25.0, 490.0], [26.0, 367.5], [27.0, 186.0], [28.0, 322.0], [29.0, 346.0], [30.0, 250.5], [31.0, 498.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.75, "minX": 1.60264032E12, "maxY": 20.983333333333334, "series": [{"data": [[1.60264056E12, 13.716666666666667], [1.60264062E12, 6.75], [1.60264044E12, 20.983333333333334], [1.6026405E12, 19.516666666666666], [1.60264032E12, 13.166666666666666], [1.60264038E12, 13.566666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264062E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.95, "minX": 1.60264032E12, "maxY": 20.983333333333334, "series": [{"data": [[1.60264056E12, 13.716666666666667], [1.60264062E12, 6.95], [1.60264044E12, 20.983333333333334], [1.6026405E12, 19.516666666666666], [1.60264032E12, 12.966666666666667], [1.60264038E12, 13.566666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264062E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.95, "minX": 1.60264032E12, "maxY": 20.983333333333334, "series": [{"data": [[1.60264056E12, 13.716666666666667], [1.60264062E12, 6.95], [1.60264044E12, 20.983333333333334], [1.6026405E12, 19.516666666666666], [1.60264032E12, 12.966666666666667], [1.60264038E12, 13.566666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264062E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.95, "minX": 1.60264032E12, "maxY": 20.983333333333334, "series": [{"data": [[1.60264056E12, 13.716666666666667], [1.60264062E12, 6.95], [1.60264044E12, 20.983333333333334], [1.6026405E12, 19.516666666666666], [1.60264032E12, 12.966666666666667], [1.60264038E12, 13.566666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264062E12, "title": "Total Transactions Per Second"}},
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

