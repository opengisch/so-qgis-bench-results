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
        data: {"result": {"minY": 38.0, "minX": 0.0, "maxY": 4965.0, "series": [{"data": [[0.0, 38.0], [0.1, 41.0], [0.2, 42.0], [0.3, 44.0], [0.4, 75.0], [0.5, 79.0], [0.6, 81.0], [0.7, 105.0], [0.8, 117.0], [0.9, 121.0], [1.0, 123.0], [1.1, 125.0], [1.2, 126.0], [1.3, 128.0], [1.4, 130.0], [1.5, 131.0], [1.6, 133.0], [1.7, 134.0], [1.8, 135.0], [1.9, 136.0], [2.0, 137.0], [2.1, 138.0], [2.2, 138.0], [2.3, 140.0], [2.4, 140.0], [2.5, 140.0], [2.6, 141.0], [2.7, 141.0], [2.8, 142.0], [2.9, 142.0], [3.0, 142.0], [3.1, 143.0], [3.2, 143.0], [3.3, 143.0], [3.4, 143.0], [3.5, 144.0], [3.6, 144.0], [3.7, 145.0], [3.8, 145.0], [3.9, 145.0], [4.0, 146.0], [4.1, 146.0], [4.2, 146.0], [4.3, 146.0], [4.4, 146.0], [4.5, 146.0], [4.6, 147.0], [4.7, 147.0], [4.8, 147.0], [4.9, 147.0], [5.0, 148.0], [5.1, 148.0], [5.2, 148.0], [5.3, 148.0], [5.4, 149.0], [5.5, 149.0], [5.6, 149.0], [5.7, 149.0], [5.8, 149.0], [5.9, 149.0], [6.0, 150.0], [6.1, 150.0], [6.2, 150.0], [6.3, 150.0], [6.4, 150.0], [6.5, 150.0], [6.6, 151.0], [6.7, 151.0], [6.8, 151.0], [6.9, 151.0], [7.0, 151.0], [7.1, 151.0], [7.2, 152.0], [7.3, 152.0], [7.4, 152.0], [7.5, 152.0], [7.6, 152.0], [7.7, 152.0], [7.8, 152.0], [7.9, 153.0], [8.0, 153.0], [8.1, 153.0], [8.2, 153.0], [8.3, 153.0], [8.4, 153.0], [8.5, 153.0], [8.6, 153.0], [8.7, 154.0], [8.8, 154.0], [8.9, 154.0], [9.0, 154.0], [9.1, 154.0], [9.2, 154.0], [9.3, 155.0], [9.4, 155.0], [9.5, 155.0], [9.6, 155.0], [9.7, 155.0], [9.8, 155.0], [9.9, 155.0], [10.0, 155.0], [10.1, 155.0], [10.2, 155.0], [10.3, 155.0], [10.4, 156.0], [10.5, 156.0], [10.6, 156.0], [10.7, 156.0], [10.8, 156.0], [10.9, 156.0], [11.0, 156.0], [11.1, 157.0], [11.2, 157.0], [11.3, 157.0], [11.4, 157.0], [11.5, 157.0], [11.6, 157.0], [11.7, 157.0], [11.8, 157.0], [11.9, 157.0], [12.0, 158.0], [12.1, 158.0], [12.2, 158.0], [12.3, 158.0], [12.4, 158.0], [12.5, 158.0], [12.6, 159.0], [12.7, 159.0], [12.8, 159.0], [12.9, 159.0], [13.0, 159.0], [13.1, 159.0], [13.2, 159.0], [13.3, 159.0], [13.4, 159.0], [13.5, 160.0], [13.6, 160.0], [13.7, 160.0], [13.8, 160.0], [13.9, 160.0], [14.0, 161.0], [14.1, 161.0], [14.2, 161.0], [14.3, 161.0], [14.4, 161.0], [14.5, 161.0], [14.6, 162.0], [14.7, 162.0], [14.8, 162.0], [14.9, 162.0], [15.0, 162.0], [15.1, 162.0], [15.2, 162.0], [15.3, 162.0], [15.4, 163.0], [15.5, 163.0], [15.6, 163.0], [15.7, 163.0], [15.8, 163.0], [15.9, 163.0], [16.0, 164.0], [16.1, 164.0], [16.2, 164.0], [16.3, 164.0], [16.4, 165.0], [16.5, 165.0], [16.6, 165.0], [16.7, 165.0], [16.8, 165.0], [16.9, 165.0], [17.0, 166.0], [17.1, 166.0], [17.2, 166.0], [17.3, 166.0], [17.4, 167.0], [17.5, 167.0], [17.6, 167.0], [17.7, 168.0], [17.8, 168.0], [17.9, 168.0], [18.0, 168.0], [18.1, 168.0], [18.2, 169.0], [18.3, 169.0], [18.4, 170.0], [18.5, 170.0], [18.6, 170.0], [18.7, 171.0], [18.8, 171.0], [18.9, 171.0], [19.0, 172.0], [19.1, 172.0], [19.2, 172.0], [19.3, 173.0], [19.4, 173.0], [19.5, 173.0], [19.6, 174.0], [19.7, 174.0], [19.8, 175.0], [19.9, 175.0], [20.0, 176.0], [20.1, 176.0], [20.2, 177.0], [20.3, 177.0], [20.4, 178.0], [20.5, 178.0], [20.6, 178.0], [20.7, 179.0], [20.8, 180.0], [20.9, 181.0], [21.0, 182.0], [21.1, 182.0], [21.2, 183.0], [21.3, 185.0], [21.4, 185.0], [21.5, 186.0], [21.6, 187.0], [21.7, 189.0], [21.8, 190.0], [21.9, 191.0], [22.0, 192.0], [22.1, 193.0], [22.2, 194.0], [22.3, 195.0], [22.4, 197.0], [22.5, 198.0], [22.6, 201.0], [22.7, 204.0], [22.8, 205.0], [22.9, 207.0], [23.0, 209.0], [23.1, 210.0], [23.2, 212.0], [23.3, 214.0], [23.4, 215.0], [23.5, 216.0], [23.6, 218.0], [23.7, 220.0], [23.8, 222.0], [23.9, 222.0], [24.0, 224.0], [24.1, 225.0], [24.2, 227.0], [24.3, 228.0], [24.4, 229.0], [24.5, 231.0], [24.6, 232.0], [24.7, 233.0], [24.8, 234.0], [24.9, 235.0], [25.0, 236.0], [25.1, 237.0], [25.2, 238.0], [25.3, 240.0], [25.4, 240.0], [25.5, 240.0], [25.6, 242.0], [25.7, 242.0], [25.8, 243.0], [25.9, 244.0], [26.0, 245.0], [26.1, 245.0], [26.2, 246.0], [26.3, 247.0], [26.4, 248.0], [26.5, 248.0], [26.6, 249.0], [26.7, 250.0], [26.8, 252.0], [26.9, 252.0], [27.0, 253.0], [27.1, 254.0], [27.2, 255.0], [27.3, 256.0], [27.4, 256.0], [27.5, 257.0], [27.6, 259.0], [27.7, 259.0], [27.8, 260.0], [27.9, 261.0], [28.0, 262.0], [28.1, 262.0], [28.2, 263.0], [28.3, 263.0], [28.4, 264.0], [28.5, 264.0], [28.6, 265.0], [28.7, 266.0], [28.8, 266.0], [28.9, 267.0], [29.0, 267.0], [29.1, 268.0], [29.2, 269.0], [29.3, 269.0], [29.4, 271.0], [29.5, 272.0], [29.6, 272.0], [29.7, 273.0], [29.8, 274.0], [29.9, 275.0], [30.0, 276.0], [30.1, 276.0], [30.2, 277.0], [30.3, 278.0], [30.4, 278.0], [30.5, 279.0], [30.6, 280.0], [30.7, 281.0], [30.8, 281.0], [30.9, 282.0], [31.0, 283.0], [31.1, 284.0], [31.2, 284.0], [31.3, 285.0], [31.4, 286.0], [31.5, 287.0], [31.6, 287.0], [31.7, 288.0], [31.8, 289.0], [31.9, 290.0], [32.0, 291.0], [32.1, 292.0], [32.2, 293.0], [32.3, 294.0], [32.4, 295.0], [32.5, 296.0], [32.6, 298.0], [32.7, 299.0], [32.8, 300.0], [32.9, 302.0], [33.0, 302.0], [33.1, 303.0], [33.2, 304.0], [33.3, 304.0], [33.4, 306.0], [33.5, 307.0], [33.6, 309.0], [33.7, 309.0], [33.8, 310.0], [33.9, 310.0], [34.0, 311.0], [34.1, 312.0], [34.2, 313.0], [34.3, 314.0], [34.4, 316.0], [34.5, 317.0], [34.6, 318.0], [34.7, 319.0], [34.8, 321.0], [34.9, 321.0], [35.0, 322.0], [35.1, 323.0], [35.2, 324.0], [35.3, 325.0], [35.4, 327.0], [35.5, 330.0], [35.6, 332.0], [35.7, 333.0], [35.8, 335.0], [35.9, 335.0], [36.0, 336.0], [36.1, 337.0], [36.2, 339.0], [36.3, 340.0], [36.4, 341.0], [36.5, 343.0], [36.6, 344.0], [36.7, 347.0], [36.8, 349.0], [36.9, 353.0], [37.0, 355.0], [37.1, 357.0], [37.2, 359.0], [37.3, 360.0], [37.4, 361.0], [37.5, 363.0], [37.6, 364.0], [37.7, 365.0], [37.8, 367.0], [37.9, 368.0], [38.0, 370.0], [38.1, 371.0], [38.2, 373.0], [38.3, 374.0], [38.4, 376.0], [38.5, 376.0], [38.6, 378.0], [38.7, 379.0], [38.8, 379.0], [38.9, 381.0], [39.0, 382.0], [39.1, 383.0], [39.2, 384.0], [39.3, 385.0], [39.4, 387.0], [39.5, 389.0], [39.6, 391.0], [39.7, 393.0], [39.8, 395.0], [39.9, 397.0], [40.0, 398.0], [40.1, 400.0], [40.2, 401.0], [40.3, 402.0], [40.4, 404.0], [40.5, 405.0], [40.6, 407.0], [40.7, 409.0], [40.8, 411.0], [40.9, 413.0], [41.0, 413.0], [41.1, 415.0], [41.2, 416.0], [41.3, 417.0], [41.4, 418.0], [41.5, 419.0], [41.6, 420.0], [41.7, 422.0], [41.8, 424.0], [41.9, 426.0], [42.0, 432.0], [42.1, 434.0], [42.2, 436.0], [42.3, 437.0], [42.4, 439.0], [42.5, 441.0], [42.6, 443.0], [42.7, 444.0], [42.8, 447.0], [42.9, 448.0], [43.0, 450.0], [43.1, 451.0], [43.2, 456.0], [43.3, 458.0], [43.4, 459.0], [43.5, 460.0], [43.6, 461.0], [43.7, 463.0], [43.8, 464.0], [43.9, 466.0], [44.0, 467.0], [44.1, 469.0], [44.2, 471.0], [44.3, 472.0], [44.4, 473.0], [44.5, 474.0], [44.6, 475.0], [44.7, 477.0], [44.8, 478.0], [44.9, 479.0], [45.0, 480.0], [45.1, 482.0], [45.2, 483.0], [45.3, 484.0], [45.4, 485.0], [45.5, 485.0], [45.6, 486.0], [45.7, 487.0], [45.8, 489.0], [45.9, 491.0], [46.0, 492.0], [46.1, 493.0], [46.2, 497.0], [46.3, 499.0], [46.4, 500.0], [46.5, 501.0], [46.6, 504.0], [46.7, 506.0], [46.8, 508.0], [46.9, 509.0], [47.0, 511.0], [47.1, 513.0], [47.2, 514.0], [47.3, 515.0], [47.4, 518.0], [47.5, 520.0], [47.6, 521.0], [47.7, 522.0], [47.8, 525.0], [47.9, 527.0], [48.0, 529.0], [48.1, 533.0], [48.2, 535.0], [48.3, 536.0], [48.4, 538.0], [48.5, 539.0], [48.6, 540.0], [48.7, 542.0], [48.8, 544.0], [48.9, 546.0], [49.0, 547.0], [49.1, 550.0], [49.2, 551.0], [49.3, 554.0], [49.4, 555.0], [49.5, 558.0], [49.6, 560.0], [49.7, 562.0], [49.8, 563.0], [49.9, 565.0], [50.0, 566.0], [50.1, 567.0], [50.2, 570.0], [50.3, 571.0], [50.4, 572.0], [50.5, 574.0], [50.6, 575.0], [50.7, 576.0], [50.8, 581.0], [50.9, 581.0], [51.0, 583.0], [51.1, 584.0], [51.2, 586.0], [51.3, 587.0], [51.4, 589.0], [51.5, 591.0], [51.6, 593.0], [51.7, 595.0], [51.8, 597.0], [51.9, 600.0], [52.0, 602.0], [52.1, 604.0], [52.2, 604.0], [52.3, 606.0], [52.4, 608.0], [52.5, 609.0], [52.6, 611.0], [52.7, 614.0], [52.8, 615.0], [52.9, 615.0], [53.0, 616.0], [53.1, 618.0], [53.2, 619.0], [53.3, 620.0], [53.4, 621.0], [53.5, 621.0], [53.6, 622.0], [53.7, 624.0], [53.8, 625.0], [53.9, 627.0], [54.0, 629.0], [54.1, 630.0], [54.2, 632.0], [54.3, 633.0], [54.4, 634.0], [54.5, 636.0], [54.6, 638.0], [54.7, 638.0], [54.8, 639.0], [54.9, 642.0], [55.0, 643.0], [55.1, 645.0], [55.2, 647.0], [55.3, 648.0], [55.4, 649.0], [55.5, 651.0], [55.6, 653.0], [55.7, 655.0], [55.8, 657.0], [55.9, 658.0], [56.0, 659.0], [56.1, 661.0], [56.2, 662.0], [56.3, 663.0], [56.4, 664.0], [56.5, 665.0], [56.6, 667.0], [56.7, 668.0], [56.8, 670.0], [56.9, 672.0], [57.0, 673.0], [57.1, 676.0], [57.2, 677.0], [57.3, 680.0], [57.4, 682.0], [57.5, 685.0], [57.6, 687.0], [57.7, 689.0], [57.8, 690.0], [57.9, 692.0], [58.0, 694.0], [58.1, 699.0], [58.2, 701.0], [58.3, 703.0], [58.4, 705.0], [58.5, 707.0], [58.6, 708.0], [58.7, 710.0], [58.8, 712.0], [58.9, 713.0], [59.0, 716.0], [59.1, 716.0], [59.2, 717.0], [59.3, 718.0], [59.4, 721.0], [59.5, 723.0], [59.6, 724.0], [59.7, 724.0], [59.8, 725.0], [59.9, 727.0], [60.0, 730.0], [60.1, 731.0], [60.2, 733.0], [60.3, 735.0], [60.4, 737.0], [60.5, 741.0], [60.6, 742.0], [60.7, 745.0], [60.8, 747.0], [60.9, 748.0], [61.0, 750.0], [61.1, 751.0], [61.2, 752.0], [61.3, 753.0], [61.4, 755.0], [61.5, 757.0], [61.6, 757.0], [61.7, 758.0], [61.8, 759.0], [61.9, 760.0], [62.0, 762.0], [62.1, 762.0], [62.2, 764.0], [62.3, 766.0], [62.4, 768.0], [62.5, 771.0], [62.6, 773.0], [62.7, 774.0], [62.8, 775.0], [62.9, 776.0], [63.0, 780.0], [63.1, 781.0], [63.2, 782.0], [63.3, 784.0], [63.4, 787.0], [63.5, 788.0], [63.6, 789.0], [63.7, 790.0], [63.8, 792.0], [63.9, 794.0], [64.0, 795.0], [64.1, 797.0], [64.2, 798.0], [64.3, 798.0], [64.4, 799.0], [64.5, 801.0], [64.6, 801.0], [64.7, 802.0], [64.8, 803.0], [64.9, 805.0], [65.0, 807.0], [65.1, 809.0], [65.2, 810.0], [65.3, 812.0], [65.4, 816.0], [65.5, 817.0], [65.6, 818.0], [65.7, 820.0], [65.8, 820.0], [65.9, 821.0], [66.0, 822.0], [66.1, 824.0], [66.2, 825.0], [66.3, 827.0], [66.4, 828.0], [66.5, 831.0], [66.6, 832.0], [66.7, 833.0], [66.8, 835.0], [66.9, 836.0], [67.0, 838.0], [67.1, 840.0], [67.2, 841.0], [67.3, 843.0], [67.4, 844.0], [67.5, 846.0], [67.6, 850.0], [67.7, 853.0], [67.8, 854.0], [67.9, 855.0], [68.0, 856.0], [68.1, 857.0], [68.2, 859.0], [68.3, 860.0], [68.4, 862.0], [68.5, 865.0], [68.6, 866.0], [68.7, 868.0], [68.8, 870.0], [68.9, 873.0], [69.0, 876.0], [69.1, 878.0], [69.2, 880.0], [69.3, 883.0], [69.4, 886.0], [69.5, 887.0], [69.6, 889.0], [69.7, 893.0], [69.8, 895.0], [69.9, 897.0], [70.0, 899.0], [70.1, 901.0], [70.2, 905.0], [70.3, 907.0], [70.4, 908.0], [70.5, 910.0], [70.6, 912.0], [70.7, 915.0], [70.8, 916.0], [70.9, 919.0], [71.0, 924.0], [71.1, 925.0], [71.2, 927.0], [71.3, 930.0], [71.4, 933.0], [71.5, 934.0], [71.6, 936.0], [71.7, 937.0], [71.8, 942.0], [71.9, 944.0], [72.0, 949.0], [72.1, 951.0], [72.2, 955.0], [72.3, 957.0], [72.4, 962.0], [72.5, 964.0], [72.6, 969.0], [72.7, 971.0], [72.8, 972.0], [72.9, 973.0], [73.0, 975.0], [73.1, 978.0], [73.2, 981.0], [73.3, 984.0], [73.4, 985.0], [73.5, 987.0], [73.6, 990.0], [73.7, 993.0], [73.8, 997.0], [73.9, 998.0], [74.0, 1000.0], [74.1, 1002.0], [74.2, 1005.0], [74.3, 1008.0], [74.4, 1009.0], [74.5, 1012.0], [74.6, 1014.0], [74.7, 1016.0], [74.8, 1022.0], [74.9, 1024.0], [75.0, 1026.0], [75.1, 1030.0], [75.2, 1030.0], [75.3, 1036.0], [75.4, 1043.0], [75.5, 1044.0], [75.6, 1048.0], [75.7, 1049.0], [75.8, 1051.0], [75.9, 1053.0], [76.0, 1055.0], [76.1, 1058.0], [76.2, 1059.0], [76.3, 1063.0], [76.4, 1066.0], [76.5, 1068.0], [76.6, 1071.0], [76.7, 1073.0], [76.8, 1076.0], [76.9, 1081.0], [77.0, 1086.0], [77.1, 1088.0], [77.2, 1090.0], [77.3, 1093.0], [77.4, 1096.0], [77.5, 1097.0], [77.6, 1100.0], [77.7, 1102.0], [77.8, 1106.0], [77.9, 1110.0], [78.0, 1114.0], [78.1, 1116.0], [78.2, 1121.0], [78.3, 1125.0], [78.4, 1128.0], [78.5, 1134.0], [78.6, 1135.0], [78.7, 1139.0], [78.8, 1144.0], [78.9, 1149.0], [79.0, 1155.0], [79.1, 1159.0], [79.2, 1161.0], [79.3, 1164.0], [79.4, 1170.0], [79.5, 1172.0], [79.6, 1172.0], [79.7, 1174.0], [79.8, 1178.0], [79.9, 1183.0], [80.0, 1184.0], [80.1, 1186.0], [80.2, 1188.0], [80.3, 1190.0], [80.4, 1192.0], [80.5, 1194.0], [80.6, 1196.0], [80.7, 1200.0], [80.8, 1203.0], [80.9, 1205.0], [81.0, 1211.0], [81.1, 1215.0], [81.2, 1217.0], [81.3, 1224.0], [81.4, 1225.0], [81.5, 1228.0], [81.6, 1230.0], [81.7, 1232.0], [81.8, 1234.0], [81.9, 1239.0], [82.0, 1242.0], [82.1, 1247.0], [82.2, 1250.0], [82.3, 1252.0], [82.4, 1256.0], [82.5, 1263.0], [82.6, 1267.0], [82.7, 1273.0], [82.8, 1276.0], [82.9, 1280.0], [83.0, 1283.0], [83.1, 1287.0], [83.2, 1291.0], [83.3, 1299.0], [83.4, 1303.0], [83.5, 1308.0], [83.6, 1310.0], [83.7, 1311.0], [83.8, 1316.0], [83.9, 1322.0], [84.0, 1326.0], [84.1, 1328.0], [84.2, 1330.0], [84.3, 1333.0], [84.4, 1337.0], [84.5, 1347.0], [84.6, 1354.0], [84.7, 1359.0], [84.8, 1366.0], [84.9, 1372.0], [85.0, 1374.0], [85.1, 1378.0], [85.2, 1382.0], [85.3, 1388.0], [85.4, 1394.0], [85.5, 1399.0], [85.6, 1402.0], [85.7, 1407.0], [85.8, 1413.0], [85.9, 1417.0], [86.0, 1421.0], [86.1, 1424.0], [86.2, 1429.0], [86.3, 1433.0], [86.4, 1435.0], [86.5, 1439.0], [86.6, 1443.0], [86.7, 1445.0], [86.8, 1448.0], [86.9, 1451.0], [87.0, 1456.0], [87.1, 1460.0], [87.2, 1465.0], [87.3, 1470.0], [87.4, 1473.0], [87.5, 1482.0], [87.6, 1484.0], [87.7, 1489.0], [87.8, 1499.0], [87.9, 1503.0], [88.0, 1506.0], [88.1, 1508.0], [88.2, 1518.0], [88.3, 1520.0], [88.4, 1524.0], [88.5, 1530.0], [88.6, 1535.0], [88.7, 1542.0], [88.8, 1546.0], [88.9, 1553.0], [89.0, 1561.0], [89.1, 1565.0], [89.2, 1567.0], [89.3, 1569.0], [89.4, 1578.0], [89.5, 1584.0], [89.6, 1589.0], [89.7, 1593.0], [89.8, 1599.0], [89.9, 1603.0], [90.0, 1606.0], [90.1, 1611.0], [90.2, 1617.0], [90.3, 1621.0], [90.4, 1627.0], [90.5, 1634.0], [90.6, 1637.0], [90.7, 1640.0], [90.8, 1643.0], [90.9, 1648.0], [91.0, 1653.0], [91.1, 1658.0], [91.2, 1664.0], [91.3, 1671.0], [91.4, 1676.0], [91.5, 1681.0], [91.6, 1684.0], [91.7, 1690.0], [91.8, 1698.0], [91.9, 1703.0], [92.0, 1710.0], [92.1, 1714.0], [92.2, 1728.0], [92.3, 1733.0], [92.4, 1740.0], [92.5, 1745.0], [92.6, 1753.0], [92.7, 1759.0], [92.8, 1767.0], [92.9, 1784.0], [93.0, 1796.0], [93.1, 1806.0], [93.2, 1813.0], [93.3, 1819.0], [93.4, 1827.0], [93.5, 1836.0], [93.6, 1843.0], [93.7, 1850.0], [93.8, 1855.0], [93.9, 1870.0], [94.0, 1878.0], [94.1, 1887.0], [94.2, 1908.0], [94.3, 1919.0], [94.4, 1924.0], [94.5, 1933.0], [94.6, 1952.0], [94.7, 1969.0], [94.8, 1982.0], [94.9, 1992.0], [95.0, 2003.0], [95.1, 2025.0], [95.2, 2035.0], [95.3, 2047.0], [95.4, 2073.0], [95.5, 2090.0], [95.6, 2094.0], [95.7, 2106.0], [95.8, 2109.0], [95.9, 2137.0], [96.0, 2153.0], [96.1, 2189.0], [96.2, 2215.0], [96.3, 2225.0], [96.4, 2241.0], [96.5, 2258.0], [96.6, 2286.0], [96.7, 2317.0], [96.8, 2343.0], [96.9, 2354.0], [97.0, 2398.0], [97.1, 2411.0], [97.2, 2422.0], [97.3, 2438.0], [97.4, 2471.0], [97.5, 2491.0], [97.6, 2506.0], [97.7, 2533.0], [97.8, 2561.0], [97.9, 2580.0], [98.0, 2614.0], [98.1, 2626.0], [98.2, 2655.0], [98.3, 2692.0], [98.4, 2733.0], [98.5, 2789.0], [98.6, 2823.0], [98.7, 2842.0], [98.8, 2877.0], [98.9, 2946.0], [99.0, 2996.0], [99.1, 3074.0], [99.2, 3245.0], [99.3, 3325.0], [99.4, 3455.0], [99.5, 3567.0], [99.6, 3860.0], [99.7, 4244.0], [99.8, 4486.0], [99.9, 4665.0], [100.0, 4965.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1151.0, "series": [{"data": [[0.0, 35.0], [600.0, 329.0], [700.0, 330.0], [800.0, 297.0], [900.0, 204.0], [1000.0, 192.0], [1100.0, 163.0], [1200.0, 140.0], [1300.0, 116.0], [1400.0, 121.0], [1500.0, 106.0], [100.0, 1151.0], [1600.0, 106.0], [1700.0, 61.0], [1800.0, 59.0], [1900.0, 43.0], [2000.0, 36.0], [2100.0, 24.0], [2300.0, 19.0], [2200.0, 29.0], [2400.0, 28.0], [2500.0, 21.0], [2600.0, 20.0], [2800.0, 15.0], [2700.0, 11.0], [2900.0, 10.0], [3000.0, 5.0], [3100.0, 4.0], [200.0, 538.0], [3300.0, 6.0], [3200.0, 4.0], [3400.0, 3.0], [3500.0, 4.0], [3700.0, 2.0], [3600.0, 2.0], [3800.0, 1.0], [4200.0, 5.0], [4100.0, 4.0], [4400.0, 4.0], [4500.0, 2.0], [4600.0, 4.0], [300.0, 386.0], [4900.0, 2.0], [400.0, 331.0], [500.0, 289.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 637.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2443.0, "series": [{"data": [[0.0, 2443.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2182.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 637.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.859275053304904, "minX": 1.60281306E12, "maxY": 12.0, "series": [{"data": [[1.60281318E12, 12.0], [1.6028133E12, 12.0], [1.60281312E12, 12.0], [1.60281324E12, 12.0], [1.60281306E12, 11.94520547945206], [1.60281336E12, 11.859275053304904]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281336E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 735.9881724532602, "minX": 1.0, "maxY": 4965.0, "series": [{"data": [[4.0, 2417.5], [8.0, 4965.0], [2.0, 4665.0], [1.0, 4689.0], [9.0, 2207.0], [5.0, 2404.5], [10.0, 1693.6666666666667], [11.0, 2805.0], [6.0, 1467.6666666666667], [12.0, 735.9881724532602], [3.0, 4266.0], [7.0, 2348.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.979855568225016, 743.1552641581118]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4128.583333333333, "minX": 1.60281306E12, "maxY": 1058958.6, "series": [{"data": [[1.60281318E12, 706234.1333333333], [1.6028133E12, 1058958.6], [1.60281312E12, 937111.4333333333], [1.60281324E12, 494804.93333333335], [1.60281306E12, 587544.25], [1.60281336E12, 466220.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60281318E12, 11048.15], [1.6028133E12, 8559.75], [1.60281312E12, 6213.4], [1.60281324E12, 9285.2], [1.60281306E12, 6255.866666666667], [1.60281336E12, 4128.583333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281336E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 551.1050642479211, "minX": 1.60281306E12, "maxY": 1001.5826330532204, "series": [{"data": [[1.60281318E12, 551.1050642479211], [1.6028133E12, 715.6481294236614], [1.60281312E12, 1001.5826330532204], [1.60281324E12, 690.5313404050132], [1.60281306E12, 785.2534246575345], [1.60281336E12, 1000.3176972281453]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281336E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 550.8269085411936, "minX": 1.60281306E12, "maxY": 1000.9747899159664, "series": [{"data": [[1.60281318E12, 550.8269085411936], [1.6028133E12, 715.1627906976747], [1.60281312E12, 1000.9747899159664], [1.60281324E12, 690.289296046287], [1.60281306E12, 784.7904109589043], [1.60281336E12, 999.8379530916839]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281336E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010111223458038412, "minX": 1.60281306E12, "maxY": 0.14931506849315068, "series": [{"data": [[1.60281318E12, 0.010582010582010597], [1.6028133E12, 0.010111223458038412], [1.60281312E12, 0.021008403361344553], [1.60281324E12, 0.012536162005785917], [1.60281306E12, 0.14931506849315068], [1.60281336E12, 0.029850746268656757]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281336E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 38.0, "minX": 1.60281306E12, "maxY": 4965.0, "series": [{"data": [[1.60281318E12, 4494.0], [1.6028133E12, 3567.0], [1.60281312E12, 3740.0], [1.60281324E12, 3062.0], [1.60281306E12, 2958.0], [1.60281336E12, 4965.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60281318E12, 128.0], [1.6028133E12, 80.0], [1.60281312E12, 121.04499880671501], [1.60281324E12, 42.0], [1.60281306E12, 144.15799965143205], [1.60281336E12, 139.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60281318E12, 130.10760012626648], [1.6028133E12, 80.80100009441375], [1.60281312E12, 125.0], [1.60281324E12, 42.0], [1.60281306E12, 145.0], [1.60281336E12, 139.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60281318E12, 129.1559996843338], [1.6028133E12, 80.4049998819828], [1.60281312E12, 123.5474994033575], [1.60281324E12, 42.0], [1.60281306E12, 144.888999825716], [1.60281336E12, 139.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60281318E12, 113.0], [1.6028133E12, 75.0], [1.60281312E12, 101.0], [1.60281324E12, 38.0], [1.60281306E12, 83.0], [1.60281336E12, 133.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60281318E12, 290.0], [1.6028133E12, 586.0], [1.60281312E12, 841.0], [1.60281324E12, 565.0], [1.60281306E12, 713.5], [1.60281336E12, 793.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281336E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 149.0, "minX": 1.0, "maxY": 4677.0, "series": [{"data": [[2.0, 4205.5], [3.0, 3301.5], [4.0, 2554.0], [5.0, 1976.0], [6.0, 1483.5], [7.0, 1514.5], [8.0, 1327.5], [9.0, 1256.0], [10.0, 1165.5], [11.0, 991.0], [12.0, 979.5], [13.0, 974.0], [14.0, 795.0], [15.0, 838.0], [16.0, 763.5], [17.0, 649.0], [18.0, 533.5], [19.0, 657.5], [20.0, 564.5], [21.0, 663.0], [22.0, 512.0], [23.0, 448.0], [24.0, 394.5], [25.0, 369.0], [26.0, 575.5], [27.0, 353.5], [28.0, 377.0], [29.0, 274.5], [30.0, 402.0], [31.0, 165.0], [33.0, 314.0], [32.0, 373.5], [35.0, 311.5], [34.0, 278.5], [36.0, 191.5], [37.0, 195.0], [39.0, 287.0], [38.0, 162.5], [41.0, 172.0], [40.0, 266.0], [43.0, 263.0], [42.0, 245.0], [44.0, 267.5], [45.0, 232.0], [46.0, 264.0], [48.0, 168.0], [62.0, 149.0], [64.0, 167.5], [1.0, 4677.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 64.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 149.0, "minX": 1.0, "maxY": 4677.0, "series": [{"data": [[2.0, 4204.5], [3.0, 3299.5], [4.0, 2554.0], [5.0, 1976.0], [6.0, 1481.5], [7.0, 1514.0], [8.0, 1325.5], [9.0, 1256.0], [10.0, 1164.5], [11.0, 991.0], [12.0, 979.0], [13.0, 973.0], [14.0, 794.5], [15.0, 837.0], [16.0, 763.5], [17.0, 649.0], [18.0, 532.5], [19.0, 657.5], [20.0, 564.0], [21.0, 663.0], [22.0, 512.0], [23.0, 448.0], [24.0, 394.5], [25.0, 368.0], [26.0, 575.0], [27.0, 353.5], [28.0, 377.0], [29.0, 274.0], [30.0, 401.5], [31.0, 165.0], [33.0, 314.0], [32.0, 373.0], [35.0, 311.5], [34.0, 278.5], [36.0, 191.5], [37.0, 194.0], [39.0, 287.0], [38.0, 162.5], [41.0, 172.0], [40.0, 266.0], [43.0, 263.0], [42.0, 245.0], [44.0, 267.5], [45.0, 232.0], [46.0, 263.5], [48.0, 168.0], [62.0, 149.0], [64.0, 167.5], [1.0, 4677.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 64.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.616666666666666, "minX": 1.60281306E12, "maxY": 22.05, "series": [{"data": [[1.60281318E12, 22.05], [1.6028133E12, 16.483333333333334], [1.60281312E12, 11.9], [1.60281324E12, 17.283333333333335], [1.60281306E12, 12.366666666666667], [1.60281336E12, 7.616666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281336E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.816666666666666, "minX": 1.60281306E12, "maxY": 22.05, "series": [{"data": [[1.60281318E12, 22.05], [1.6028133E12, 16.483333333333334], [1.60281312E12, 11.9], [1.60281324E12, 17.283333333333335], [1.60281306E12, 12.166666666666666], [1.60281336E12, 7.816666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281336E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.816666666666666, "minX": 1.60281306E12, "maxY": 22.05, "series": [{"data": [[1.60281318E12, 22.05], [1.6028133E12, 16.483333333333334], [1.60281312E12, 11.9], [1.60281324E12, 17.283333333333335], [1.60281306E12, 12.166666666666666], [1.60281336E12, 7.816666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281336E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.816666666666666, "minX": 1.60281306E12, "maxY": 22.05, "series": [{"data": [[1.60281318E12, 22.05], [1.6028133E12, 16.483333333333334], [1.60281312E12, 11.9], [1.60281324E12, 17.283333333333335], [1.60281306E12, 12.166666666666666], [1.60281336E12, 7.816666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281336E12, "title": "Total Transactions Per Second"}},
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

