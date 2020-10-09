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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 4767.0, "series": [{"data": [[0.0, 29.0], [0.1, 34.0], [0.2, 36.0], [0.3, 41.0], [0.4, 55.0], [0.5, 73.0], [0.6, 85.0], [0.7, 108.0], [0.8, 113.0], [0.9, 114.0], [1.0, 115.0], [1.1, 116.0], [1.2, 118.0], [1.3, 120.0], [1.4, 123.0], [1.5, 125.0], [1.6, 126.0], [1.7, 127.0], [1.8, 128.0], [1.9, 129.0], [2.0, 130.0], [2.1, 130.0], [2.2, 131.0], [2.3, 131.0], [2.4, 132.0], [2.5, 132.0], [2.6, 132.0], [2.7, 133.0], [2.8, 133.0], [2.9, 134.0], [3.0, 134.0], [3.1, 135.0], [3.2, 135.0], [3.3, 135.0], [3.4, 136.0], [3.5, 136.0], [3.6, 136.0], [3.7, 136.0], [3.8, 137.0], [3.9, 137.0], [4.0, 137.0], [4.1, 137.0], [4.2, 138.0], [4.3, 138.0], [4.4, 138.0], [4.5, 138.0], [4.6, 138.0], [4.7, 139.0], [4.8, 139.0], [4.9, 139.0], [5.0, 139.0], [5.1, 139.0], [5.2, 139.0], [5.3, 139.0], [5.4, 139.0], [5.5, 140.0], [5.6, 140.0], [5.7, 140.0], [5.8, 140.0], [5.9, 140.0], [6.0, 140.0], [6.1, 141.0], [6.2, 141.0], [6.3, 141.0], [6.4, 141.0], [6.5, 141.0], [6.6, 141.0], [6.7, 141.0], [6.8, 141.0], [6.9, 142.0], [7.0, 142.0], [7.1, 142.0], [7.2, 142.0], [7.3, 142.0], [7.4, 142.0], [7.5, 142.0], [7.6, 143.0], [7.7, 143.0], [7.8, 143.0], [7.9, 143.0], [8.0, 144.0], [8.1, 144.0], [8.2, 144.0], [8.3, 144.0], [8.4, 144.0], [8.5, 144.0], [8.6, 144.0], [8.7, 144.0], [8.8, 145.0], [8.9, 145.0], [9.0, 145.0], [9.1, 145.0], [9.2, 145.0], [9.3, 146.0], [9.4, 146.0], [9.5, 146.0], [9.6, 146.0], [9.7, 146.0], [9.8, 146.0], [9.9, 146.0], [10.0, 147.0], [10.1, 147.0], [10.2, 147.0], [10.3, 147.0], [10.4, 147.0], [10.5, 148.0], [10.6, 148.0], [10.7, 148.0], [10.8, 148.0], [10.9, 148.0], [11.0, 149.0], [11.1, 149.0], [11.2, 149.0], [11.3, 149.0], [11.4, 149.0], [11.5, 149.0], [11.6, 149.0], [11.7, 150.0], [11.8, 150.0], [11.9, 150.0], [12.0, 150.0], [12.1, 150.0], [12.2, 150.0], [12.3, 150.0], [12.4, 150.0], [12.5, 151.0], [12.6, 151.0], [12.7, 151.0], [12.8, 151.0], [12.9, 151.0], [13.0, 151.0], [13.1, 151.0], [13.2, 151.0], [13.3, 152.0], [13.4, 152.0], [13.5, 152.0], [13.6, 152.0], [13.7, 152.0], [13.8, 152.0], [13.9, 152.0], [14.0, 153.0], [14.1, 153.0], [14.2, 153.0], [14.3, 153.0], [14.4, 153.0], [14.5, 153.0], [14.6, 153.0], [14.7, 153.0], [14.8, 154.0], [14.9, 154.0], [15.0, 154.0], [15.1, 154.0], [15.2, 154.0], [15.3, 154.0], [15.4, 154.0], [15.5, 154.0], [15.6, 155.0], [15.7, 155.0], [15.8, 155.0], [15.9, 155.0], [16.0, 155.0], [16.1, 155.0], [16.2, 156.0], [16.3, 156.0], [16.4, 156.0], [16.5, 156.0], [16.6, 157.0], [16.7, 157.0], [16.8, 157.0], [16.9, 157.0], [17.0, 157.0], [17.1, 158.0], [17.2, 158.0], [17.3, 158.0], [17.4, 158.0], [17.5, 159.0], [17.6, 159.0], [17.7, 159.0], [17.8, 159.0], [17.9, 160.0], [18.0, 160.0], [18.1, 160.0], [18.2, 160.0], [18.3, 161.0], [18.4, 161.0], [18.5, 161.0], [18.6, 162.0], [18.7, 162.0], [18.8, 163.0], [18.9, 163.0], [19.0, 163.0], [19.1, 163.0], [19.2, 164.0], [19.3, 164.0], [19.4, 164.0], [19.5, 165.0], [19.6, 166.0], [19.7, 166.0], [19.8, 166.0], [19.9, 167.0], [20.0, 167.0], [20.1, 168.0], [20.2, 168.0], [20.3, 169.0], [20.4, 169.0], [20.5, 169.0], [20.6, 170.0], [20.7, 171.0], [20.8, 172.0], [20.9, 173.0], [21.0, 173.0], [21.1, 174.0], [21.2, 175.0], [21.3, 176.0], [21.4, 178.0], [21.5, 179.0], [21.6, 180.0], [21.7, 181.0], [21.8, 182.0], [21.9, 183.0], [22.0, 184.0], [22.1, 186.0], [22.2, 187.0], [22.3, 188.0], [22.4, 189.0], [22.5, 191.0], [22.6, 193.0], [22.7, 196.0], [22.8, 197.0], [22.9, 199.0], [23.0, 202.0], [23.1, 203.0], [23.2, 206.0], [23.3, 207.0], [23.4, 209.0], [23.5, 210.0], [23.6, 213.0], [23.7, 215.0], [23.8, 216.0], [23.9, 218.0], [24.0, 219.0], [24.1, 222.0], [24.2, 223.0], [24.3, 224.0], [24.4, 225.0], [24.5, 227.0], [24.6, 228.0], [24.7, 229.0], [24.8, 229.0], [24.9, 230.0], [25.0, 231.0], [25.1, 232.0], [25.2, 233.0], [25.3, 234.0], [25.4, 236.0], [25.5, 237.0], [25.6, 237.0], [25.7, 238.0], [25.8, 240.0], [25.9, 241.0], [26.0, 242.0], [26.1, 243.0], [26.2, 245.0], [26.3, 246.0], [26.4, 247.0], [26.5, 248.0], [26.6, 249.0], [26.7, 250.0], [26.8, 251.0], [26.9, 252.0], [27.0, 253.0], [27.1, 254.0], [27.2, 255.0], [27.3, 256.0], [27.4, 257.0], [27.5, 258.0], [27.6, 258.0], [27.7, 259.0], [27.8, 260.0], [27.9, 260.0], [28.0, 262.0], [28.1, 262.0], [28.2, 263.0], [28.3, 263.0], [28.4, 264.0], [28.5, 266.0], [28.6, 266.0], [28.7, 267.0], [28.8, 267.0], [28.9, 268.0], [29.0, 268.0], [29.1, 270.0], [29.2, 270.0], [29.3, 271.0], [29.4, 272.0], [29.5, 272.0], [29.6, 272.0], [29.7, 273.0], [29.8, 274.0], [29.9, 274.0], [30.0, 275.0], [30.1, 275.0], [30.2, 276.0], [30.3, 276.0], [30.4, 277.0], [30.5, 278.0], [30.6, 278.0], [30.7, 279.0], [30.8, 280.0], [30.9, 280.0], [31.0, 281.0], [31.1, 281.0], [31.2, 282.0], [31.3, 283.0], [31.4, 284.0], [31.5, 285.0], [31.6, 286.0], [31.7, 286.0], [31.8, 287.0], [31.9, 288.0], [32.0, 289.0], [32.1, 290.0], [32.2, 290.0], [32.3, 291.0], [32.4, 292.0], [32.5, 293.0], [32.6, 294.0], [32.7, 294.0], [32.8, 296.0], [32.9, 296.0], [33.0, 298.0], [33.1, 298.0], [33.2, 299.0], [33.3, 300.0], [33.4, 302.0], [33.5, 302.0], [33.6, 304.0], [33.7, 304.0], [33.8, 305.0], [33.9, 306.0], [34.0, 307.0], [34.1, 308.0], [34.2, 309.0], [34.3, 310.0], [34.4, 311.0], [34.5, 311.0], [34.6, 313.0], [34.7, 314.0], [34.8, 315.0], [34.9, 316.0], [35.0, 317.0], [35.1, 318.0], [35.2, 319.0], [35.3, 319.0], [35.4, 320.0], [35.5, 321.0], [35.6, 321.0], [35.7, 323.0], [35.8, 324.0], [35.9, 326.0], [36.0, 326.0], [36.1, 328.0], [36.2, 329.0], [36.3, 330.0], [36.4, 332.0], [36.5, 334.0], [36.6, 335.0], [36.7, 338.0], [36.8, 340.0], [36.9, 341.0], [37.0, 342.0], [37.1, 344.0], [37.2, 345.0], [37.3, 346.0], [37.4, 348.0], [37.5, 350.0], [37.6, 351.0], [37.7, 353.0], [37.8, 354.0], [37.9, 356.0], [38.0, 357.0], [38.1, 358.0], [38.2, 361.0], [38.3, 363.0], [38.4, 365.0], [38.5, 366.0], [38.6, 369.0], [38.7, 372.0], [38.8, 374.0], [38.9, 376.0], [39.0, 378.0], [39.1, 379.0], [39.2, 380.0], [39.3, 381.0], [39.4, 383.0], [39.5, 385.0], [39.6, 386.0], [39.7, 387.0], [39.8, 389.0], [39.9, 390.0], [40.0, 392.0], [40.1, 394.0], [40.2, 395.0], [40.3, 398.0], [40.4, 401.0], [40.5, 405.0], [40.6, 407.0], [40.7, 408.0], [40.8, 410.0], [40.9, 411.0], [41.0, 412.0], [41.1, 413.0], [41.2, 414.0], [41.3, 416.0], [41.4, 418.0], [41.5, 420.0], [41.6, 423.0], [41.7, 423.0], [41.8, 426.0], [41.9, 427.0], [42.0, 430.0], [42.1, 431.0], [42.2, 432.0], [42.3, 434.0], [42.4, 435.0], [42.5, 437.0], [42.6, 439.0], [42.7, 441.0], [42.8, 442.0], [42.9, 444.0], [43.0, 445.0], [43.1, 447.0], [43.2, 449.0], [43.3, 451.0], [43.4, 454.0], [43.5, 457.0], [43.6, 459.0], [43.7, 462.0], [43.8, 463.0], [43.9, 464.0], [44.0, 465.0], [44.1, 466.0], [44.2, 469.0], [44.3, 470.0], [44.4, 471.0], [44.5, 472.0], [44.6, 473.0], [44.7, 475.0], [44.8, 475.0], [44.9, 478.0], [45.0, 481.0], [45.1, 482.0], [45.2, 485.0], [45.3, 487.0], [45.4, 490.0], [45.5, 492.0], [45.6, 493.0], [45.7, 494.0], [45.8, 496.0], [45.9, 498.0], [46.0, 499.0], [46.1, 500.0], [46.2, 502.0], [46.3, 504.0], [46.4, 505.0], [46.5, 508.0], [46.6, 509.0], [46.7, 512.0], [46.8, 517.0], [46.9, 519.0], [47.0, 521.0], [47.1, 525.0], [47.2, 528.0], [47.3, 530.0], [47.4, 531.0], [47.5, 534.0], [47.6, 537.0], [47.7, 539.0], [47.8, 540.0], [47.9, 541.0], [48.0, 542.0], [48.1, 543.0], [48.2, 545.0], [48.3, 547.0], [48.4, 550.0], [48.5, 552.0], [48.6, 555.0], [48.7, 557.0], [48.8, 559.0], [48.9, 561.0], [49.0, 564.0], [49.1, 565.0], [49.2, 567.0], [49.3, 568.0], [49.4, 572.0], [49.5, 574.0], [49.6, 575.0], [49.7, 579.0], [49.8, 580.0], [49.9, 581.0], [50.0, 582.0], [50.1, 584.0], [50.2, 585.0], [50.3, 587.0], [50.4, 588.0], [50.5, 589.0], [50.6, 590.0], [50.7, 591.0], [50.8, 591.0], [50.9, 592.0], [51.0, 594.0], [51.1, 596.0], [51.2, 598.0], [51.3, 600.0], [51.4, 601.0], [51.5, 602.0], [51.6, 604.0], [51.7, 604.0], [51.8, 605.0], [51.9, 606.0], [52.0, 608.0], [52.1, 609.0], [52.2, 610.0], [52.3, 612.0], [52.4, 612.0], [52.5, 613.0], [52.6, 614.0], [52.7, 616.0], [52.8, 616.0], [52.9, 618.0], [53.0, 619.0], [53.1, 621.0], [53.2, 623.0], [53.3, 625.0], [53.4, 627.0], [53.5, 629.0], [53.6, 630.0], [53.7, 632.0], [53.8, 633.0], [53.9, 637.0], [54.0, 639.0], [54.1, 639.0], [54.2, 640.0], [54.3, 640.0], [54.4, 642.0], [54.5, 644.0], [54.6, 645.0], [54.7, 646.0], [54.8, 648.0], [54.9, 649.0], [55.0, 649.0], [55.1, 650.0], [55.2, 652.0], [55.3, 654.0], [55.4, 655.0], [55.5, 656.0], [55.6, 658.0], [55.7, 660.0], [55.8, 661.0], [55.9, 663.0], [56.0, 663.0], [56.1, 665.0], [56.2, 666.0], [56.3, 668.0], [56.4, 670.0], [56.5, 672.0], [56.6, 675.0], [56.7, 677.0], [56.8, 679.0], [56.9, 681.0], [57.0, 683.0], [57.1, 685.0], [57.2, 686.0], [57.3, 688.0], [57.4, 688.0], [57.5, 689.0], [57.6, 689.0], [57.7, 692.0], [57.8, 693.0], [57.9, 695.0], [58.0, 696.0], [58.1, 697.0], [58.2, 700.0], [58.3, 702.0], [58.4, 705.0], [58.5, 707.0], [58.6, 708.0], [58.7, 708.0], [58.8, 712.0], [58.9, 716.0], [59.0, 718.0], [59.1, 719.0], [59.2, 720.0], [59.3, 722.0], [59.4, 723.0], [59.5, 725.0], [59.6, 727.0], [59.7, 728.0], [59.8, 728.0], [59.9, 729.0], [60.0, 732.0], [60.1, 734.0], [60.2, 735.0], [60.3, 736.0], [60.4, 737.0], [60.5, 738.0], [60.6, 739.0], [60.7, 740.0], [60.8, 741.0], [60.9, 743.0], [61.0, 744.0], [61.1, 748.0], [61.2, 750.0], [61.3, 751.0], [61.4, 754.0], [61.5, 755.0], [61.6, 755.0], [61.7, 758.0], [61.8, 759.0], [61.9, 760.0], [62.0, 761.0], [62.1, 762.0], [62.2, 764.0], [62.3, 767.0], [62.4, 768.0], [62.5, 770.0], [62.6, 773.0], [62.7, 775.0], [62.8, 777.0], [62.9, 778.0], [63.0, 779.0], [63.1, 780.0], [63.2, 781.0], [63.3, 783.0], [63.4, 784.0], [63.5, 785.0], [63.6, 786.0], [63.7, 786.0], [63.8, 787.0], [63.9, 788.0], [64.0, 790.0], [64.1, 791.0], [64.2, 793.0], [64.3, 794.0], [64.4, 795.0], [64.5, 796.0], [64.6, 797.0], [64.7, 799.0], [64.8, 799.0], [64.9, 800.0], [65.0, 805.0], [65.1, 806.0], [65.2, 806.0], [65.3, 809.0], [65.4, 811.0], [65.5, 813.0], [65.6, 816.0], [65.7, 818.0], [65.8, 819.0], [65.9, 822.0], [66.0, 823.0], [66.1, 823.0], [66.2, 825.0], [66.3, 826.0], [66.4, 830.0], [66.5, 832.0], [66.6, 835.0], [66.7, 837.0], [66.8, 838.0], [66.9, 840.0], [67.0, 841.0], [67.1, 844.0], [67.2, 846.0], [67.3, 850.0], [67.4, 851.0], [67.5, 852.0], [67.6, 855.0], [67.7, 857.0], [67.8, 858.0], [67.9, 861.0], [68.0, 863.0], [68.1, 864.0], [68.2, 867.0], [68.3, 870.0], [68.4, 873.0], [68.5, 875.0], [68.6, 879.0], [68.7, 881.0], [68.8, 883.0], [68.9, 885.0], [69.0, 886.0], [69.1, 889.0], [69.2, 890.0], [69.3, 892.0], [69.4, 894.0], [69.5, 896.0], [69.6, 899.0], [69.7, 900.0], [69.8, 901.0], [69.9, 903.0], [70.0, 905.0], [70.1, 908.0], [70.2, 910.0], [70.3, 915.0], [70.4, 917.0], [70.5, 919.0], [70.6, 922.0], [70.7, 925.0], [70.8, 927.0], [70.9, 928.0], [71.0, 933.0], [71.1, 936.0], [71.2, 937.0], [71.3, 939.0], [71.4, 941.0], [71.5, 943.0], [71.6, 946.0], [71.7, 948.0], [71.8, 952.0], [71.9, 954.0], [72.0, 955.0], [72.1, 957.0], [72.2, 960.0], [72.3, 962.0], [72.4, 965.0], [72.5, 967.0], [72.6, 970.0], [72.7, 972.0], [72.8, 974.0], [72.9, 978.0], [73.0, 983.0], [73.1, 984.0], [73.2, 987.0], [73.3, 991.0], [73.4, 994.0], [73.5, 998.0], [73.6, 1002.0], [73.7, 1003.0], [73.8, 1005.0], [73.9, 1007.0], [74.0, 1011.0], [74.1, 1014.0], [74.2, 1018.0], [74.3, 1021.0], [74.4, 1023.0], [74.5, 1025.0], [74.6, 1026.0], [74.7, 1028.0], [74.8, 1031.0], [74.9, 1036.0], [75.0, 1039.0], [75.1, 1040.0], [75.2, 1043.0], [75.3, 1045.0], [75.4, 1047.0], [75.5, 1049.0], [75.6, 1054.0], [75.7, 1056.0], [75.8, 1058.0], [75.9, 1063.0], [76.0, 1065.0], [76.1, 1067.0], [76.2, 1071.0], [76.3, 1074.0], [76.4, 1078.0], [76.5, 1083.0], [76.6, 1085.0], [76.7, 1087.0], [76.8, 1090.0], [76.9, 1092.0], [77.0, 1094.0], [77.1, 1097.0], [77.2, 1099.0], [77.3, 1103.0], [77.4, 1106.0], [77.5, 1108.0], [77.6, 1112.0], [77.7, 1113.0], [77.8, 1115.0], [77.9, 1120.0], [78.0, 1124.0], [78.1, 1129.0], [78.2, 1137.0], [78.3, 1140.0], [78.4, 1143.0], [78.5, 1147.0], [78.6, 1149.0], [78.7, 1151.0], [78.8, 1154.0], [78.9, 1157.0], [79.0, 1161.0], [79.1, 1164.0], [79.2, 1166.0], [79.3, 1168.0], [79.4, 1171.0], [79.5, 1174.0], [79.6, 1177.0], [79.7, 1179.0], [79.8, 1182.0], [79.9, 1183.0], [80.0, 1187.0], [80.1, 1191.0], [80.2, 1194.0], [80.3, 1196.0], [80.4, 1198.0], [80.5, 1201.0], [80.6, 1204.0], [80.7, 1207.0], [80.8, 1213.0], [80.9, 1217.0], [81.0, 1221.0], [81.1, 1226.0], [81.2, 1233.0], [81.3, 1238.0], [81.4, 1242.0], [81.5, 1245.0], [81.6, 1249.0], [81.7, 1254.0], [81.8, 1256.0], [81.9, 1261.0], [82.0, 1264.0], [82.1, 1268.0], [82.2, 1272.0], [82.3, 1275.0], [82.4, 1278.0], [82.5, 1279.0], [82.6, 1281.0], [82.7, 1284.0], [82.8, 1290.0], [82.9, 1296.0], [83.0, 1302.0], [83.1, 1305.0], [83.2, 1308.0], [83.3, 1313.0], [83.4, 1317.0], [83.5, 1323.0], [83.6, 1328.0], [83.7, 1331.0], [83.8, 1334.0], [83.9, 1339.0], [84.0, 1344.0], [84.1, 1348.0], [84.2, 1350.0], [84.3, 1353.0], [84.4, 1355.0], [84.5, 1358.0], [84.6, 1362.0], [84.7, 1369.0], [84.8, 1372.0], [84.9, 1376.0], [85.0, 1377.0], [85.1, 1380.0], [85.2, 1386.0], [85.3, 1397.0], [85.4, 1399.0], [85.5, 1401.0], [85.6, 1404.0], [85.7, 1407.0], [85.8, 1412.0], [85.9, 1416.0], [86.0, 1426.0], [86.1, 1428.0], [86.2, 1434.0], [86.3, 1436.0], [86.4, 1443.0], [86.5, 1445.0], [86.6, 1448.0], [86.7, 1448.0], [86.8, 1451.0], [86.9, 1452.0], [87.0, 1455.0], [87.1, 1458.0], [87.2, 1460.0], [87.3, 1462.0], [87.4, 1469.0], [87.5, 1477.0], [87.6, 1482.0], [87.7, 1488.0], [87.8, 1493.0], [87.9, 1497.0], [88.0, 1503.0], [88.1, 1507.0], [88.2, 1513.0], [88.3, 1516.0], [88.4, 1522.0], [88.5, 1526.0], [88.6, 1532.0], [88.7, 1536.0], [88.8, 1541.0], [88.9, 1548.0], [89.0, 1551.0], [89.1, 1554.0], [89.2, 1560.0], [89.3, 1563.0], [89.4, 1571.0], [89.5, 1578.0], [89.6, 1585.0], [89.7, 1600.0], [89.8, 1607.0], [89.9, 1613.0], [90.0, 1617.0], [90.1, 1624.0], [90.2, 1630.0], [90.3, 1633.0], [90.4, 1639.0], [90.5, 1643.0], [90.6, 1649.0], [90.7, 1653.0], [90.8, 1662.0], [90.9, 1668.0], [91.0, 1675.0], [91.1, 1681.0], [91.2, 1690.0], [91.3, 1693.0], [91.4, 1700.0], [91.5, 1705.0], [91.6, 1709.0], [91.7, 1719.0], [91.8, 1732.0], [91.9, 1742.0], [92.0, 1748.0], [92.1, 1757.0], [92.2, 1758.0], [92.3, 1769.0], [92.4, 1773.0], [92.5, 1782.0], [92.6, 1793.0], [92.7, 1797.0], [92.8, 1801.0], [92.9, 1811.0], [93.0, 1814.0], [93.1, 1818.0], [93.2, 1824.0], [93.3, 1840.0], [93.4, 1846.0], [93.5, 1857.0], [93.6, 1863.0], [93.7, 1871.0], [93.8, 1880.0], [93.9, 1893.0], [94.0, 1907.0], [94.1, 1923.0], [94.2, 1938.0], [94.3, 1955.0], [94.4, 1968.0], [94.5, 1991.0], [94.6, 1995.0], [94.7, 2007.0], [94.8, 2017.0], [94.9, 2024.0], [95.0, 2027.0], [95.1, 2033.0], [95.2, 2037.0], [95.3, 2056.0], [95.4, 2073.0], [95.5, 2100.0], [95.6, 2118.0], [95.7, 2129.0], [95.8, 2145.0], [95.9, 2152.0], [96.0, 2175.0], [96.1, 2194.0], [96.2, 2214.0], [96.3, 2222.0], [96.4, 2256.0], [96.5, 2265.0], [96.6, 2290.0], [96.7, 2316.0], [96.8, 2340.0], [96.9, 2355.0], [97.0, 2375.0], [97.1, 2419.0], [97.2, 2429.0], [97.3, 2457.0], [97.4, 2481.0], [97.5, 2496.0], [97.6, 2527.0], [97.7, 2552.0], [97.8, 2598.0], [97.9, 2642.0], [98.0, 2649.0], [98.1, 2677.0], [98.2, 2700.0], [98.3, 2724.0], [98.4, 2755.0], [98.5, 2827.0], [98.6, 2876.0], [98.7, 2921.0], [98.8, 2957.0], [98.9, 3017.0], [99.0, 3086.0], [99.1, 3185.0], [99.2, 3271.0], [99.3, 3326.0], [99.4, 3411.0], [99.5, 3521.0], [99.6, 4038.0], [99.7, 4385.0], [99.8, 4569.0], [99.9, 4612.0], [100.0, 4767.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1172.0, "series": [{"data": [[0.0, 36.0], [600.0, 362.0], [700.0, 351.0], [800.0, 254.0], [900.0, 206.0], [1000.0, 193.0], [1100.0, 171.0], [1200.0, 132.0], [1300.0, 130.0], [1400.0, 133.0], [1500.0, 92.0], [100.0, 1172.0], [1600.0, 90.0], [1700.0, 72.0], [1800.0, 61.0], [1900.0, 38.0], [2000.0, 45.0], [2100.0, 35.0], [2200.0, 26.0], [2300.0, 23.0], [2400.0, 23.0], [2500.0, 16.0], [2600.0, 20.0], [2800.0, 12.0], [2700.0, 13.0], [2900.0, 11.0], [3000.0, 8.0], [3100.0, 5.0], [200.0, 543.0], [3200.0, 5.0], [3300.0, 9.0], [3400.0, 5.0], [3500.0, 2.0], [3600.0, 1.0], [3800.0, 2.0], [4000.0, 1.0], [4300.0, 5.0], [4200.0, 1.0], [4400.0, 3.0], [4600.0, 7.0], [4500.0, 3.0], [300.0, 376.0], [4700.0, 2.0], [400.0, 301.0], [500.0, 276.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 636.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2431.0, "series": [{"data": [[0.0, 2431.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2205.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 636.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.853658536585364, "minX": 1.60224438E12, "maxY": 12.0, "series": [{"data": [[1.60224468E12, 11.853658536585364], [1.60224438E12, 11.950196592398441], [1.6022445E12, 12.0], [1.60224444E12, 12.0], [1.60224462E12, 12.0], [1.60224456E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224468E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 738.7134424980973, "minX": 1.0, "maxY": 4611.0, "series": [{"data": [[4.0, 2377.0], [8.0, 2438.5], [2.0, 4459.0], [1.0, 4602.0], [9.0, 2392.5], [5.0, 2292.5], [10.0, 2417.0], [11.0, 1864.3333333333333], [6.0, 1607.3333333333333], [12.0, 738.7134424980973], [3.0, 4611.0], [7.0, 4606.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.98027314112292, 745.874620637329]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3976.0833333333335, "minX": 1.60224438E12, "maxY": 1034435.75, "series": [{"data": [[1.60224468E12, 427579.93333333335], [1.60224438E12, 662388.6333333333], [1.6022445E12, 692789.7166666667], [1.60224444E12, 964982.8166666667], [1.60224462E12, 1034435.75], [1.60224456E12, 509359.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224468E12, 3976.0833333333335], [1.60224438E12, 6555.133333333333], [1.6022445E12, 11116.85], [1.60224444E12, 6346.516666666666], [1.60224462E12, 7946.75], [1.60224456E12, 9638.216666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224468E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 541.2746425884122, "minX": 1.60224438E12, "maxY": 992.4188267394268, "series": [{"data": [[1.60224468E12, 933.5033259423499], [1.60224438E12, 825.4469200524255], [1.6022445E12, 541.2746425884122], [1.60224444E12, 992.4188267394268], [1.60224462E12, 782.9889867841417], [1.60224456E12, 665.1415441176467]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224468E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 541.0338600451469, "minX": 1.60224438E12, "maxY": 991.81036834925, "series": [{"data": [[1.60224468E12, 933.0798226164085], [1.60224438E12, 825.0262123197897], [1.6022445E12, 541.0338600451469], [1.60224444E12, 991.81036834925], [1.60224462E12, 782.4867841409695], [1.60224456E12, 664.9319852941175]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224468E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009029345372460496, "minX": 1.60224438E12, "maxY": 0.17693315858453493, "series": [{"data": [[1.60224468E12, 0.024390243902439032], [1.60224438E12, 0.17693315858453493], [1.6022445E12, 0.009029345372460496], [1.60224444E12, 0.020463847203274238], [1.60224462E12, 0.01101321585903085], [1.60224456E12, 0.01286764705882354]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224468E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60224438E12, "maxY": 4767.0, "series": [{"data": [[1.60224468E12, 4767.0], [1.60224438E12, 3023.0], [1.6022445E12, 4436.0], [1.60224444E12, 3521.0], [1.60224462E12, 3541.0], [1.60224456E12, 3182.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224468E12, 131.0679998922348], [1.60224438E12, 137.8759998178482], [1.6022445E12, 130.0], [1.60224444E12, 64.21199965000153], [1.60224462E12, 116.18099978327751], [1.60224456E12, 35.60199948072433]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224468E12, 131.4748000431061], [1.60224438E12, 138.0], [1.6022445E12, 131.0], [1.60224444E12, 71.66500174999238], [1.60224462E12, 116.999100086689], [1.60224456E12, 36.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224468E12, 131.2939999461174], [1.60224438E12, 138.0], [1.6022445E12, 130.63499984145164], [1.60224444E12, 64.94599982500077], [1.60224462E12, 116.63549989163876], [1.60224456E12, 36.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224468E12, 130.0], [1.60224438E12, 85.0], [1.6022445E12, 127.0], [1.60224444E12, 55.0], [1.60224462E12, 82.0], [1.60224456E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224468E12, 686.0], [1.60224438E12, 739.0], [1.6022445E12, 292.0], [1.60224444E12, 826.0], [1.60224462E12, 647.0], [1.60224456E12, 503.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224468E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 142.0, "minX": 1.0, "maxY": 3631.0, "series": [{"data": [[2.0, 3631.0], [3.0, 3315.0], [4.0, 2187.0], [5.0, 1975.0], [6.0, 1524.5], [7.0, 1605.0], [8.0, 1491.5], [9.0, 1239.0], [10.0, 1080.5], [11.0, 1083.0], [12.0, 957.5], [13.0, 831.0], [14.0, 792.0], [15.0, 607.5], [16.0, 740.0], [17.0, 744.5], [18.0, 673.5], [19.0, 574.5], [20.0, 549.0], [21.0, 326.5], [22.0, 392.5], [23.0, 366.0], [24.0, 453.0], [25.0, 505.5], [26.0, 332.0], [27.0, 481.0], [28.0, 319.0], [29.0, 358.0], [30.0, 427.5], [31.0, 312.0], [33.0, 381.5], [32.0, 352.0], [34.0, 281.0], [35.0, 281.0], [37.0, 246.0], [36.0, 383.0], [39.0, 265.0], [38.0, 168.5], [40.0, 305.0], [41.0, 253.5], [42.0, 173.0], [43.0, 155.5], [44.0, 262.0], [45.0, 261.5], [47.0, 246.0], [49.0, 160.5], [50.0, 252.5], [63.0, 142.0], [65.0, 156.0], [1.0, 2372.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 142.0, "minX": 1.0, "maxY": 3629.5, "series": [{"data": [[2.0, 3629.5], [3.0, 3315.0], [4.0, 2185.5], [5.0, 1974.0], [6.0, 1524.0], [7.0, 1603.5], [8.0, 1490.0], [9.0, 1239.0], [10.0, 1079.5], [11.0, 1082.5], [12.0, 957.5], [13.0, 830.5], [14.0, 792.0], [15.0, 607.0], [16.0, 739.0], [17.0, 744.0], [18.0, 673.0], [19.0, 574.5], [20.0, 549.0], [21.0, 326.5], [22.0, 392.0], [23.0, 366.0], [24.0, 453.0], [25.0, 505.5], [26.0, 332.0], [27.0, 480.0], [28.0, 319.0], [29.0, 358.0], [30.0, 427.0], [31.0, 312.0], [33.0, 381.5], [32.0, 352.0], [34.0, 281.0], [35.0, 281.0], [37.0, 245.5], [36.0, 383.0], [39.0, 265.0], [38.0, 168.5], [40.0, 305.0], [41.0, 253.5], [42.0, 173.0], [43.0, 155.5], [44.0, 262.0], [45.0, 261.0], [47.0, 246.0], [49.0, 160.5], [50.0, 252.5], [63.0, 142.0], [65.0, 156.0], [1.0, 2369.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.316666666666666, "minX": 1.60224438E12, "maxY": 22.15, "series": [{"data": [[1.60224468E12, 7.316666666666666], [1.60224438E12, 12.916666666666666], [1.6022445E12, 22.15], [1.60224444E12, 12.216666666666667], [1.60224462E12, 15.133333333333333], [1.60224456E12, 18.133333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224468E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.516666666666667, "minX": 1.60224438E12, "maxY": 22.15, "series": [{"data": [[1.60224468E12, 7.516666666666667], [1.60224438E12, 12.716666666666667], [1.6022445E12, 22.15], [1.60224444E12, 12.216666666666667], [1.60224462E12, 15.133333333333333], [1.60224456E12, 18.133333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224468E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.516666666666667, "minX": 1.60224438E12, "maxY": 22.15, "series": [{"data": [[1.60224468E12, 7.516666666666667], [1.60224438E12, 12.716666666666667], [1.6022445E12, 22.15], [1.60224444E12, 12.216666666666667], [1.60224462E12, 15.133333333333333], [1.60224456E12, 18.133333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224468E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.516666666666667, "minX": 1.60224438E12, "maxY": 22.15, "series": [{"data": [[1.60224468E12, 7.516666666666667], [1.60224438E12, 12.716666666666667], [1.6022445E12, 22.15], [1.60224444E12, 12.216666666666667], [1.60224462E12, 15.133333333333333], [1.60224456E12, 18.133333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224468E12, "title": "Total Transactions Per Second"}},
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

