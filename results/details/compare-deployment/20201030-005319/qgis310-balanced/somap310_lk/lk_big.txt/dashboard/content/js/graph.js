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
        data: {"result": {"minY": 74.0, "minX": 0.0, "maxY": 4859.0, "series": [{"data": [[0.0, 74.0], [0.1, 82.0], [0.2, 84.0], [0.3, 90.0], [0.4, 93.0], [0.5, 100.0], [0.6, 116.0], [0.7, 119.0], [0.8, 121.0], [0.9, 123.0], [1.0, 126.0], [1.1, 128.0], [1.2, 129.0], [1.3, 130.0], [1.4, 131.0], [1.5, 132.0], [1.6, 133.0], [1.7, 134.0], [1.8, 135.0], [1.9, 135.0], [2.0, 136.0], [2.1, 136.0], [2.2, 137.0], [2.3, 138.0], [2.4, 138.0], [2.5, 139.0], [2.6, 139.0], [2.7, 139.0], [2.8, 140.0], [2.9, 141.0], [3.0, 141.0], [3.1, 142.0], [3.2, 142.0], [3.3, 142.0], [3.4, 143.0], [3.5, 143.0], [3.6, 143.0], [3.7, 144.0], [3.8, 144.0], [3.9, 144.0], [4.0, 144.0], [4.1, 144.0], [4.2, 145.0], [4.3, 145.0], [4.4, 145.0], [4.5, 145.0], [4.6, 146.0], [4.7, 146.0], [4.8, 146.0], [4.9, 146.0], [5.0, 147.0], [5.1, 147.0], [5.2, 147.0], [5.3, 147.0], [5.4, 147.0], [5.5, 148.0], [5.6, 148.0], [5.7, 148.0], [5.8, 148.0], [5.9, 148.0], [6.0, 149.0], [6.1, 149.0], [6.2, 149.0], [6.3, 149.0], [6.4, 149.0], [6.5, 149.0], [6.6, 149.0], [6.7, 150.0], [6.8, 150.0], [6.9, 150.0], [7.0, 150.0], [7.1, 150.0], [7.2, 150.0], [7.3, 150.0], [7.4, 150.0], [7.5, 151.0], [7.6, 151.0], [7.7, 151.0], [7.8, 151.0], [7.9, 151.0], [8.0, 151.0], [8.1, 151.0], [8.2, 151.0], [8.3, 152.0], [8.4, 152.0], [8.5, 152.0], [8.6, 152.0], [8.7, 152.0], [8.8, 152.0], [8.9, 152.0], [9.0, 152.0], [9.1, 152.0], [9.2, 153.0], [9.3, 153.0], [9.4, 153.0], [9.5, 153.0], [9.6, 153.0], [9.7, 153.0], [9.8, 153.0], [9.9, 154.0], [10.0, 154.0], [10.1, 154.0], [10.2, 154.0], [10.3, 154.0], [10.4, 154.0], [10.5, 155.0], [10.6, 155.0], [10.7, 155.0], [10.8, 155.0], [10.9, 155.0], [11.0, 155.0], [11.1, 155.0], [11.2, 156.0], [11.3, 156.0], [11.4, 156.0], [11.5, 156.0], [11.6, 156.0], [11.7, 156.0], [11.8, 156.0], [11.9, 157.0], [12.0, 157.0], [12.1, 157.0], [12.2, 157.0], [12.3, 157.0], [12.4, 157.0], [12.5, 157.0], [12.6, 158.0], [12.7, 158.0], [12.8, 158.0], [12.9, 158.0], [13.0, 158.0], [13.1, 158.0], [13.2, 158.0], [13.3, 159.0], [13.4, 159.0], [13.5, 159.0], [13.6, 159.0], [13.7, 159.0], [13.8, 159.0], [13.9, 159.0], [14.0, 160.0], [14.1, 160.0], [14.2, 160.0], [14.3, 160.0], [14.4, 160.0], [14.5, 161.0], [14.6, 161.0], [14.7, 161.0], [14.8, 161.0], [14.9, 161.0], [15.0, 161.0], [15.1, 162.0], [15.2, 162.0], [15.3, 162.0], [15.4, 162.0], [15.5, 162.0], [15.6, 162.0], [15.7, 162.0], [15.8, 163.0], [15.9, 163.0], [16.0, 163.0], [16.1, 163.0], [16.2, 163.0], [16.3, 164.0], [16.4, 164.0], [16.5, 164.0], [16.6, 164.0], [16.7, 164.0], [16.8, 165.0], [16.9, 165.0], [17.0, 165.0], [17.1, 166.0], [17.2, 166.0], [17.3, 166.0], [17.4, 166.0], [17.5, 167.0], [17.6, 167.0], [17.7, 167.0], [17.8, 168.0], [17.9, 168.0], [18.0, 168.0], [18.1, 168.0], [18.2, 169.0], [18.3, 169.0], [18.4, 169.0], [18.5, 170.0], [18.6, 170.0], [18.7, 171.0], [18.8, 171.0], [18.9, 172.0], [19.0, 172.0], [19.1, 172.0], [19.2, 172.0], [19.3, 173.0], [19.4, 173.0], [19.5, 174.0], [19.6, 175.0], [19.7, 175.0], [19.8, 176.0], [19.9, 176.0], [20.0, 177.0], [20.1, 178.0], [20.2, 179.0], [20.3, 180.0], [20.4, 180.0], [20.5, 181.0], [20.6, 182.0], [20.7, 183.0], [20.8, 184.0], [20.9, 186.0], [21.0, 187.0], [21.1, 188.0], [21.2, 190.0], [21.3, 192.0], [21.4, 194.0], [21.5, 195.0], [21.6, 196.0], [21.7, 197.0], [21.8, 198.0], [21.9, 199.0], [22.0, 201.0], [22.1, 201.0], [22.2, 203.0], [22.3, 204.0], [22.4, 205.0], [22.5, 208.0], [22.6, 210.0], [22.7, 212.0], [22.8, 213.0], [22.9, 215.0], [23.0, 216.0], [23.1, 217.0], [23.2, 219.0], [23.3, 221.0], [23.4, 222.0], [23.5, 225.0], [23.6, 226.0], [23.7, 228.0], [23.8, 229.0], [23.9, 230.0], [24.0, 231.0], [24.1, 232.0], [24.2, 233.0], [24.3, 233.0], [24.4, 234.0], [24.5, 235.0], [24.6, 236.0], [24.7, 237.0], [24.8, 238.0], [24.9, 239.0], [25.0, 240.0], [25.1, 241.0], [25.2, 242.0], [25.3, 243.0], [25.4, 245.0], [25.5, 245.0], [25.6, 246.0], [25.7, 247.0], [25.8, 248.0], [25.9, 248.0], [26.0, 248.0], [26.1, 250.0], [26.2, 251.0], [26.3, 251.0], [26.4, 253.0], [26.5, 253.0], [26.6, 254.0], [26.7, 255.0], [26.8, 256.0], [26.9, 257.0], [27.0, 258.0], [27.1, 259.0], [27.2, 259.0], [27.3, 260.0], [27.4, 261.0], [27.5, 261.0], [27.6, 262.0], [27.7, 263.0], [27.8, 264.0], [27.9, 265.0], [28.0, 265.0], [28.1, 266.0], [28.2, 267.0], [28.3, 267.0], [28.4, 268.0], [28.5, 268.0], [28.6, 269.0], [28.7, 270.0], [28.8, 270.0], [28.9, 271.0], [29.0, 271.0], [29.1, 272.0], [29.2, 273.0], [29.3, 273.0], [29.4, 273.0], [29.5, 274.0], [29.6, 275.0], [29.7, 276.0], [29.8, 276.0], [29.9, 277.0], [30.0, 278.0], [30.1, 278.0], [30.2, 279.0], [30.3, 280.0], [30.4, 280.0], [30.5, 280.0], [30.6, 281.0], [30.7, 282.0], [30.8, 282.0], [30.9, 283.0], [31.0, 284.0], [31.1, 284.0], [31.2, 284.0], [31.3, 285.0], [31.4, 285.0], [31.5, 286.0], [31.6, 287.0], [31.7, 288.0], [31.8, 288.0], [31.9, 289.0], [32.0, 290.0], [32.1, 291.0], [32.2, 292.0], [32.3, 293.0], [32.4, 294.0], [32.5, 295.0], [32.6, 296.0], [32.7, 296.0], [32.8, 297.0], [32.9, 298.0], [33.0, 299.0], [33.1, 299.0], [33.2, 300.0], [33.3, 301.0], [33.4, 303.0], [33.5, 304.0], [33.6, 306.0], [33.7, 306.0], [33.8, 308.0], [33.9, 309.0], [34.0, 310.0], [34.1, 311.0], [34.2, 312.0], [34.3, 313.0], [34.4, 314.0], [34.5, 315.0], [34.6, 317.0], [34.7, 318.0], [34.8, 319.0], [34.9, 323.0], [35.0, 324.0], [35.1, 326.0], [35.2, 328.0], [35.3, 328.0], [35.4, 329.0], [35.5, 331.0], [35.6, 332.0], [35.7, 333.0], [35.8, 333.0], [35.9, 334.0], [36.0, 335.0], [36.1, 337.0], [36.2, 337.0], [36.3, 341.0], [36.4, 341.0], [36.5, 342.0], [36.6, 345.0], [36.7, 350.0], [36.8, 352.0], [36.9, 353.0], [37.0, 354.0], [37.1, 355.0], [37.2, 357.0], [37.3, 358.0], [37.4, 361.0], [37.5, 363.0], [37.6, 364.0], [37.7, 366.0], [37.8, 368.0], [37.9, 370.0], [38.0, 372.0], [38.1, 373.0], [38.2, 375.0], [38.3, 378.0], [38.4, 379.0], [38.5, 380.0], [38.6, 382.0], [38.7, 383.0], [38.8, 384.0], [38.9, 386.0], [39.0, 388.0], [39.1, 389.0], [39.2, 391.0], [39.3, 392.0], [39.4, 393.0], [39.5, 394.0], [39.6, 395.0], [39.7, 397.0], [39.8, 398.0], [39.9, 400.0], [40.0, 402.0], [40.1, 403.0], [40.2, 405.0], [40.3, 406.0], [40.4, 407.0], [40.5, 408.0], [40.6, 409.0], [40.7, 410.0], [40.8, 413.0], [40.9, 416.0], [41.0, 420.0], [41.1, 422.0], [41.2, 423.0], [41.3, 427.0], [41.4, 429.0], [41.5, 430.0], [41.6, 431.0], [41.7, 433.0], [41.8, 435.0], [41.9, 436.0], [42.0, 437.0], [42.1, 440.0], [42.2, 441.0], [42.3, 442.0], [42.4, 443.0], [42.5, 446.0], [42.6, 447.0], [42.7, 448.0], [42.8, 450.0], [42.9, 450.0], [43.0, 451.0], [43.1, 453.0], [43.2, 455.0], [43.3, 457.0], [43.4, 458.0], [43.5, 460.0], [43.6, 461.0], [43.7, 462.0], [43.8, 463.0], [43.9, 466.0], [44.0, 467.0], [44.1, 469.0], [44.2, 470.0], [44.3, 472.0], [44.4, 473.0], [44.5, 475.0], [44.6, 475.0], [44.7, 478.0], [44.8, 479.0], [44.9, 481.0], [45.0, 481.0], [45.1, 482.0], [45.2, 483.0], [45.3, 484.0], [45.4, 485.0], [45.5, 485.0], [45.6, 487.0], [45.7, 489.0], [45.8, 491.0], [45.9, 492.0], [46.0, 493.0], [46.1, 495.0], [46.2, 498.0], [46.3, 500.0], [46.4, 501.0], [46.5, 502.0], [46.6, 505.0], [46.7, 507.0], [46.8, 508.0], [46.9, 510.0], [47.0, 511.0], [47.1, 512.0], [47.2, 512.0], [47.3, 515.0], [47.4, 516.0], [47.5, 518.0], [47.6, 520.0], [47.7, 521.0], [47.8, 523.0], [47.9, 524.0], [48.0, 528.0], [48.1, 530.0], [48.2, 531.0], [48.3, 533.0], [48.4, 535.0], [48.5, 537.0], [48.6, 538.0], [48.7, 539.0], [48.8, 540.0], [48.9, 542.0], [49.0, 543.0], [49.1, 545.0], [49.2, 548.0], [49.3, 550.0], [49.4, 551.0], [49.5, 553.0], [49.6, 554.0], [49.7, 558.0], [49.8, 559.0], [49.9, 562.0], [50.0, 564.0], [50.1, 566.0], [50.2, 567.0], [50.3, 570.0], [50.4, 571.0], [50.5, 572.0], [50.6, 573.0], [50.7, 575.0], [50.8, 576.0], [50.9, 577.0], [51.0, 579.0], [51.1, 581.0], [51.2, 582.0], [51.3, 583.0], [51.4, 585.0], [51.5, 585.0], [51.6, 587.0], [51.7, 588.0], [51.8, 590.0], [51.9, 591.0], [52.0, 592.0], [52.1, 593.0], [52.2, 597.0], [52.3, 599.0], [52.4, 601.0], [52.5, 603.0], [52.6, 604.0], [52.7, 606.0], [52.8, 607.0], [52.9, 610.0], [53.0, 611.0], [53.1, 613.0], [53.2, 617.0], [53.3, 618.0], [53.4, 619.0], [53.5, 622.0], [53.6, 623.0], [53.7, 624.0], [53.8, 624.0], [53.9, 626.0], [54.0, 628.0], [54.1, 629.0], [54.2, 631.0], [54.3, 633.0], [54.4, 634.0], [54.5, 635.0], [54.6, 639.0], [54.7, 640.0], [54.8, 642.0], [54.9, 643.0], [55.0, 646.0], [55.1, 647.0], [55.2, 648.0], [55.3, 649.0], [55.4, 651.0], [55.5, 652.0], [55.6, 653.0], [55.7, 655.0], [55.8, 656.0], [55.9, 657.0], [56.0, 659.0], [56.1, 660.0], [56.2, 662.0], [56.3, 663.0], [56.4, 664.0], [56.5, 666.0], [56.6, 668.0], [56.7, 669.0], [56.8, 673.0], [56.9, 676.0], [57.0, 677.0], [57.1, 679.0], [57.2, 681.0], [57.3, 684.0], [57.4, 686.0], [57.5, 688.0], [57.6, 689.0], [57.7, 691.0], [57.8, 692.0], [57.9, 694.0], [58.0, 695.0], [58.1, 696.0], [58.2, 697.0], [58.3, 700.0], [58.4, 701.0], [58.5, 703.0], [58.6, 704.0], [58.7, 705.0], [58.8, 707.0], [58.9, 708.0], [59.0, 711.0], [59.1, 712.0], [59.2, 714.0], [59.3, 715.0], [59.4, 718.0], [59.5, 719.0], [59.6, 722.0], [59.7, 723.0], [59.8, 725.0], [59.9, 726.0], [60.0, 728.0], [60.1, 730.0], [60.2, 731.0], [60.3, 731.0], [60.4, 734.0], [60.5, 735.0], [60.6, 737.0], [60.7, 739.0], [60.8, 741.0], [60.9, 741.0], [61.0, 744.0], [61.1, 745.0], [61.2, 746.0], [61.3, 747.0], [61.4, 749.0], [61.5, 751.0], [61.6, 752.0], [61.7, 753.0], [61.8, 755.0], [61.9, 756.0], [62.0, 757.0], [62.1, 759.0], [62.2, 759.0], [62.3, 761.0], [62.4, 763.0], [62.5, 764.0], [62.6, 765.0], [62.7, 766.0], [62.8, 767.0], [62.9, 768.0], [63.0, 769.0], [63.1, 770.0], [63.2, 771.0], [63.3, 772.0], [63.4, 774.0], [63.5, 775.0], [63.6, 779.0], [63.7, 780.0], [63.8, 782.0], [63.9, 784.0], [64.0, 787.0], [64.1, 788.0], [64.2, 789.0], [64.3, 791.0], [64.4, 792.0], [64.5, 793.0], [64.6, 794.0], [64.7, 795.0], [64.8, 797.0], [64.9, 797.0], [65.0, 800.0], [65.1, 801.0], [65.2, 802.0], [65.3, 806.0], [65.4, 807.0], [65.5, 808.0], [65.6, 810.0], [65.7, 812.0], [65.8, 813.0], [65.9, 816.0], [66.0, 817.0], [66.1, 819.0], [66.2, 821.0], [66.3, 823.0], [66.4, 824.0], [66.5, 826.0], [66.6, 827.0], [66.7, 828.0], [66.8, 830.0], [66.9, 831.0], [67.0, 833.0], [67.1, 834.0], [67.2, 835.0], [67.3, 837.0], [67.4, 839.0], [67.5, 841.0], [67.6, 845.0], [67.7, 848.0], [67.8, 849.0], [67.9, 853.0], [68.0, 854.0], [68.1, 856.0], [68.2, 857.0], [68.3, 860.0], [68.4, 862.0], [68.5, 864.0], [68.6, 866.0], [68.7, 871.0], [68.8, 872.0], [68.9, 875.0], [69.0, 876.0], [69.1, 879.0], [69.2, 881.0], [69.3, 883.0], [69.4, 886.0], [69.5, 890.0], [69.6, 896.0], [69.7, 898.0], [69.8, 901.0], [69.9, 904.0], [70.0, 908.0], [70.1, 911.0], [70.2, 915.0], [70.3, 918.0], [70.4, 919.0], [70.5, 924.0], [70.6, 928.0], [70.7, 934.0], [70.8, 936.0], [70.9, 938.0], [71.0, 940.0], [71.1, 943.0], [71.2, 946.0], [71.3, 948.0], [71.4, 950.0], [71.5, 954.0], [71.6, 955.0], [71.7, 959.0], [71.8, 964.0], [71.9, 964.0], [72.0, 965.0], [72.1, 968.0], [72.2, 971.0], [72.3, 972.0], [72.4, 974.0], [72.5, 976.0], [72.6, 979.0], [72.7, 982.0], [72.8, 984.0], [72.9, 987.0], [73.0, 988.0], [73.1, 989.0], [73.2, 991.0], [73.3, 992.0], [73.4, 996.0], [73.5, 998.0], [73.6, 1003.0], [73.7, 1006.0], [73.8, 1009.0], [73.9, 1012.0], [74.0, 1016.0], [74.1, 1018.0], [74.2, 1021.0], [74.3, 1025.0], [74.4, 1028.0], [74.5, 1033.0], [74.6, 1038.0], [74.7, 1039.0], [74.8, 1041.0], [74.9, 1043.0], [75.0, 1045.0], [75.1, 1046.0], [75.2, 1049.0], [75.3, 1052.0], [75.4, 1054.0], [75.5, 1061.0], [75.6, 1064.0], [75.7, 1067.0], [75.8, 1068.0], [75.9, 1069.0], [76.0, 1074.0], [76.1, 1077.0], [76.2, 1079.0], [76.3, 1082.0], [76.4, 1083.0], [76.5, 1088.0], [76.6, 1091.0], [76.7, 1094.0], [76.8, 1101.0], [76.9, 1105.0], [77.0, 1106.0], [77.1, 1110.0], [77.2, 1112.0], [77.3, 1116.0], [77.4, 1120.0], [77.5, 1124.0], [77.6, 1125.0], [77.7, 1129.0], [77.8, 1131.0], [77.9, 1134.0], [78.0, 1138.0], [78.1, 1141.0], [78.2, 1142.0], [78.3, 1145.0], [78.4, 1147.0], [78.5, 1148.0], [78.6, 1151.0], [78.7, 1154.0], [78.8, 1155.0], [78.9, 1158.0], [79.0, 1162.0], [79.1, 1165.0], [79.2, 1169.0], [79.3, 1173.0], [79.4, 1174.0], [79.5, 1180.0], [79.6, 1182.0], [79.7, 1187.0], [79.8, 1188.0], [79.9, 1191.0], [80.0, 1194.0], [80.1, 1195.0], [80.2, 1199.0], [80.3, 1200.0], [80.4, 1203.0], [80.5, 1205.0], [80.6, 1211.0], [80.7, 1213.0], [80.8, 1218.0], [80.9, 1225.0], [81.0, 1229.0], [81.1, 1234.0], [81.2, 1236.0], [81.3, 1241.0], [81.4, 1245.0], [81.5, 1247.0], [81.6, 1248.0], [81.7, 1251.0], [81.8, 1253.0], [81.9, 1256.0], [82.0, 1258.0], [82.1, 1262.0], [82.2, 1268.0], [82.3, 1273.0], [82.4, 1277.0], [82.5, 1281.0], [82.6, 1284.0], [82.7, 1286.0], [82.8, 1289.0], [82.9, 1292.0], [83.0, 1294.0], [83.1, 1296.0], [83.2, 1300.0], [83.3, 1307.0], [83.4, 1310.0], [83.5, 1312.0], [83.6, 1314.0], [83.7, 1318.0], [83.8, 1321.0], [83.9, 1323.0], [84.0, 1326.0], [84.1, 1331.0], [84.2, 1334.0], [84.3, 1339.0], [84.4, 1344.0], [84.5, 1348.0], [84.6, 1350.0], [84.7, 1357.0], [84.8, 1362.0], [84.9, 1364.0], [85.0, 1368.0], [85.1, 1371.0], [85.2, 1376.0], [85.3, 1378.0], [85.4, 1379.0], [85.5, 1386.0], [85.6, 1389.0], [85.7, 1395.0], [85.8, 1397.0], [85.9, 1402.0], [86.0, 1404.0], [86.1, 1405.0], [86.2, 1410.0], [86.3, 1414.0], [86.4, 1416.0], [86.5, 1420.0], [86.6, 1422.0], [86.7, 1426.0], [86.8, 1428.0], [86.9, 1434.0], [87.0, 1437.0], [87.1, 1442.0], [87.2, 1445.0], [87.3, 1449.0], [87.4, 1453.0], [87.5, 1460.0], [87.6, 1465.0], [87.7, 1472.0], [87.8, 1477.0], [87.9, 1482.0], [88.0, 1490.0], [88.1, 1496.0], [88.2, 1500.0], [88.3, 1505.0], [88.4, 1509.0], [88.5, 1513.0], [88.6, 1518.0], [88.7, 1522.0], [88.8, 1525.0], [88.9, 1530.0], [89.0, 1539.0], [89.1, 1547.0], [89.2, 1551.0], [89.3, 1558.0], [89.4, 1564.0], [89.5, 1569.0], [89.6, 1579.0], [89.7, 1583.0], [89.8, 1585.0], [89.9, 1590.0], [90.0, 1598.0], [90.1, 1603.0], [90.2, 1606.0], [90.3, 1611.0], [90.4, 1614.0], [90.5, 1618.0], [90.6, 1623.0], [90.7, 1628.0], [90.8, 1631.0], [90.9, 1640.0], [91.0, 1645.0], [91.1, 1648.0], [91.2, 1658.0], [91.3, 1665.0], [91.4, 1668.0], [91.5, 1673.0], [91.6, 1677.0], [91.7, 1688.0], [91.8, 1691.0], [91.9, 1695.0], [92.0, 1702.0], [92.1, 1714.0], [92.2, 1722.0], [92.3, 1733.0], [92.4, 1745.0], [92.5, 1751.0], [92.6, 1755.0], [92.7, 1767.0], [92.8, 1776.0], [92.9, 1781.0], [93.0, 1792.0], [93.1, 1798.0], [93.2, 1806.0], [93.3, 1824.0], [93.4, 1829.0], [93.5, 1833.0], [93.6, 1849.0], [93.7, 1857.0], [93.8, 1863.0], [93.9, 1872.0], [94.0, 1889.0], [94.1, 1900.0], [94.2, 1909.0], [94.3, 1928.0], [94.4, 1936.0], [94.5, 1950.0], [94.6, 1958.0], [94.7, 1971.0], [94.8, 1977.0], [94.9, 1990.0], [95.0, 2017.0], [95.1, 2020.0], [95.2, 2035.0], [95.3, 2051.0], [95.4, 2058.0], [95.5, 2067.0], [95.6, 2071.0], [95.7, 2083.0], [95.8, 2095.0], [95.9, 2109.0], [96.0, 2124.0], [96.1, 2159.0], [96.2, 2180.0], [96.3, 2199.0], [96.4, 2223.0], [96.5, 2228.0], [96.6, 2283.0], [96.7, 2291.0], [96.8, 2314.0], [96.9, 2339.0], [97.0, 2368.0], [97.1, 2383.0], [97.2, 2397.0], [97.3, 2425.0], [97.4, 2463.0], [97.5, 2489.0], [97.6, 2524.0], [97.7, 2559.0], [97.8, 2603.0], [97.9, 2616.0], [98.0, 2638.0], [98.1, 2668.0], [98.2, 2683.0], [98.3, 2692.0], [98.4, 2711.0], [98.5, 2745.0], [98.6, 2781.0], [98.7, 2855.0], [98.8, 2880.0], [98.9, 3016.0], [99.0, 3047.0], [99.1, 3110.0], [99.2, 3183.0], [99.3, 3231.0], [99.4, 3325.0], [99.5, 3573.0], [99.6, 3958.0], [99.7, 4208.0], [99.8, 4317.0], [99.9, 4761.0], [100.0, 4859.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1127.0, "series": [{"data": [[0.0, 26.0], [600.0, 310.0], [700.0, 355.0], [800.0, 251.0], [900.0, 197.0], [1000.0, 172.0], [1100.0, 184.0], [1200.0, 152.0], [1300.0, 140.0], [1400.0, 124.0], [1500.0, 97.0], [100.0, 1127.0], [1600.0, 103.0], [1700.0, 60.0], [1800.0, 51.0], [1900.0, 45.0], [2000.0, 47.0], [2100.0, 25.0], [2300.0, 26.0], [2200.0, 21.0], [2400.0, 16.0], [2500.0, 15.0], [2600.0, 29.0], [2800.0, 11.0], [2700.0, 15.0], [2900.0, 3.0], [3000.0, 8.0], [3100.0, 9.0], [200.0, 589.0], [3300.0, 5.0], [3200.0, 7.0], [3400.0, 1.0], [3500.0, 2.0], [3600.0, 4.0], [3900.0, 1.0], [4000.0, 1.0], [4100.0, 4.0], [4300.0, 2.0], [4200.0, 5.0], [4600.0, 1.0], [4400.0, 1.0], [4500.0, 1.0], [300.0, 357.0], [4800.0, 3.0], [4700.0, 3.0], [400.0, 336.0], [500.0, 320.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 620.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2440.0, "series": [{"data": [[0.0, 2440.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2202.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 620.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.751879699248121, "minX": 1.6040238E12, "maxY": 12.0, "series": [{"data": [[1.60402386E12, 12.0], [1.60402416E12, 11.751879699248121], [1.60402404E12, 12.0], [1.6040241E12, 12.0], [1.60402392E12, 12.0], [1.60402398E12, 12.0], [1.6040238E12, 11.791946308724828]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402416E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 736.5737173374054, "minX": 1.0, "maxY": 4859.0, "series": [{"data": [[4.0, 2321.5], [8.0, 2486.5], [2.0, 4763.0], [1.0, 4533.0], [9.0, 2213.5], [10.0, 2538.0], [5.0, 4810.0], [11.0, 1853.0], [6.0, 1535.3333333333333], [12.0, 736.5737173374054], [3.0, 4321.0], [7.0, 4859.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.981565944507814, 743.904599011779]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1307.1166666666666, "minX": 1.6040238E12, "maxY": 1006815.7166666667, "series": [{"data": [[1.60402386E12, 882292.6333333333], [1.60402416E12, 101561.21666666666], [1.60402404E12, 686022.9166666666], [1.6040241E12, 1006815.7166666667], [1.60402392E12, 798930.8166666667], [1.60402398E12, 722416.0333333333], [1.6040238E12, 52981.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60402386E12, 6827.883333333333], [1.60402416E12, 2420.8166666666666], [1.60402404E12, 10298.65], [1.6040241E12, 7228.883333333333], [1.60402392E12, 7530.25], [1.60402398E12, 9877.35], [1.6040238E12, 1307.1166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402416E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 601.9617940199344, "minX": 1.6040238E12, "maxY": 910.5806861499365, "series": [{"data": [[1.60402386E12, 910.5806861499365], [1.60402416E12, 808.5902255639095], [1.60402404E12, 620.6980325064148], [1.6040241E12, 869.1963636363639], [1.60402392E12, 821.7296983758696], [1.60402398E12, 601.9617940199344], [1.6040238E12, 717.7046979865772]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402416E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 601.6752491694348, "minX": 1.6040238E12, "maxY": 910.0025412960612, "series": [{"data": [[1.60402386E12, 910.0025412960612], [1.60402416E12, 808.4436090225563], [1.60402404E12, 620.426860564584], [1.6040241E12, 868.6339393939387], [1.60402392E12, 821.2529002320186], [1.60402398E12, 601.6752491694348], [1.6040238E12, 717.4899328859061]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402416E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6040238E12, "maxY": 0.9664429530201346, "series": [{"data": [[1.60402386E12, 0.020330368487928848], [1.60402416E12, 0.0], [1.60402404E12, 0.011120615911035081], [1.6040241E12, 0.01696969696969696], [1.60402392E12, 0.01624129930394432], [1.60402398E12, 0.012458471760797354], [1.6040238E12, 0.9664429530201346]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402416E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 74.0, "minX": 1.6040238E12, "maxY": 4859.0, "series": [{"data": [[1.60402386E12, 3573.0], [1.60402416E12, 4859.0], [1.60402404E12, 2582.0], [1.6040241E12, 3659.0], [1.60402392E12, 3115.0], [1.60402398E12, 4317.0], [1.6040238E12, 2503.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60402386E12, 119.36799924850465], [1.60402416E12, 137.80599987268448], [1.60402404E12, 91.52999972105026], [1.6040241E12, 133.43399980306626], [1.60402392E12, 142.0], [1.60402398E12, 109.37999885082245], [1.6040238E12, 144.3499999642372]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60402386E12, 122.20480030059815], [1.60402416E12, 138.2866000509262], [1.60402404E12, 93.74900033473969], [1.6040241E12, 134.1774000787735], [1.60402392E12, 142.54370008230208], [1.60402398E12, 113.71800045967102], [1.6040238E12, 144.48500001430511]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60402386E12, 120.94399962425231], [1.60402416E12, 138.07299993634223], [1.60402404E12, 92.3449995815754], [1.6040241E12, 133.84699990153314], [1.60402392E12, 142.1984998971224], [1.60402398E12, 111.78999942541122], [1.6040238E12, 144.4249999821186]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60402386E12, 93.0], [1.60402416E12, 129.0], [1.60402404E12, 79.0], [1.6040241E12, 117.0], [1.60402392E12, 139.0], [1.60402398E12, 74.0], [1.6040238E12, 144.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60402386E12, 779.0], [1.60402416E12, 414.5], [1.60402404E12, 464.0], [1.6040241E12, 764.0], [1.60402392E12, 713.0], [1.60402398E12, 328.0], [1.6040238E12, 625.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402416E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 154.0, "minX": 1.0, "maxY": 4533.0, "series": [{"data": [[33.0, 336.5], [2.0, 3594.5], [32.0, 377.5], [34.0, 292.5], [35.0, 315.0], [36.0, 301.0], [37.0, 318.5], [39.0, 169.0], [38.0, 173.5], [40.0, 235.5], [43.0, 267.5], [42.0, 281.0], [44.0, 268.0], [47.0, 159.0], [46.0, 271.0], [3.0, 3351.0], [48.0, 154.0], [56.0, 229.5], [4.0, 1913.5], [67.0, 172.0], [5.0, 1870.0], [6.0, 1818.0], [7.0, 1362.0], [8.0, 1335.0], [9.0, 1324.0], [10.0, 1089.5], [11.0, 1038.0], [12.0, 1114.5], [13.0, 854.0], [14.0, 798.0], [15.0, 843.0], [16.0, 792.5], [1.0, 4533.0], [17.0, 781.0], [18.0, 614.5], [19.0, 583.5], [20.0, 598.0], [21.0, 584.0], [22.0, 264.5], [23.0, 490.0], [24.0, 589.5], [25.0, 544.0], [26.0, 447.5], [27.0, 460.0], [28.0, 375.0], [29.0, 334.0], [30.0, 332.0], [31.0, 299.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 154.0, "minX": 1.0, "maxY": 4533.0, "series": [{"data": [[33.0, 336.5], [2.0, 3594.0], [32.0, 377.5], [34.0, 292.0], [35.0, 315.0], [36.0, 301.0], [37.0, 318.5], [39.0, 169.0], [38.0, 173.5], [40.0, 235.5], [43.0, 267.0], [42.0, 280.5], [44.0, 268.0], [47.0, 159.0], [46.0, 271.0], [3.0, 3346.0], [48.0, 154.0], [56.0, 229.5], [4.0, 1910.0], [67.0, 172.0], [5.0, 1868.5], [6.0, 1816.0], [7.0, 1362.0], [8.0, 1333.5], [9.0, 1324.0], [10.0, 1088.5], [11.0, 1038.0], [12.0, 1113.5], [13.0, 854.0], [14.0, 798.0], [15.0, 843.0], [16.0, 792.0], [1.0, 4533.0], [17.0, 780.5], [18.0, 613.5], [19.0, 582.5], [20.0, 598.0], [21.0, 584.0], [22.0, 264.5], [23.0, 490.0], [24.0, 589.5], [25.0, 544.0], [26.0, 447.5], [27.0, 460.0], [28.0, 375.0], [29.0, 334.0], [30.0, 331.5], [31.0, 299.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.683333333333333, "minX": 1.6040238E12, "maxY": 20.066666666666666, "series": [{"data": [[1.60402386E12, 13.116666666666667], [1.60402416E12, 4.233333333333333], [1.60402404E12, 19.483333333333334], [1.6040241E12, 13.75], [1.60402392E12, 14.366666666666667], [1.60402398E12, 20.066666666666666], [1.6040238E12, 2.683333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402416E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.6040238E12, "maxY": 20.066666666666666, "series": [{"data": [[1.60402386E12, 13.116666666666667], [1.60402416E12, 4.433333333333334], [1.60402404E12, 19.483333333333334], [1.6040241E12, 13.75], [1.60402392E12, 14.366666666666667], [1.60402398E12, 20.066666666666666], [1.6040238E12, 2.4833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402416E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.6040238E12, "maxY": 20.066666666666666, "series": [{"data": [[1.60402386E12, 13.116666666666667], [1.60402416E12, 4.433333333333334], [1.60402404E12, 19.483333333333334], [1.6040241E12, 13.75], [1.60402392E12, 14.366666666666667], [1.60402398E12, 20.066666666666666], [1.6040238E12, 2.4833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402416E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.6040238E12, "maxY": 20.066666666666666, "series": [{"data": [[1.60402386E12, 13.116666666666667], [1.60402416E12, 4.433333333333334], [1.60402404E12, 19.483333333333334], [1.6040241E12, 13.75], [1.60402392E12, 14.366666666666667], [1.60402398E12, 20.066666666666666], [1.6040238E12, 2.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402416E12, "title": "Total Transactions Per Second"}},
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

