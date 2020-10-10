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
        data: {"result": {"minY": 59.0, "minX": 0.0, "maxY": 4894.0, "series": [{"data": [[0.0, 59.0], [0.1, 71.0], [0.2, 76.0], [0.3, 77.0], [0.4, 79.0], [0.5, 80.0], [0.6, 82.0], [0.7, 85.0], [0.8, 101.0], [0.9, 110.0], [1.0, 115.0], [1.1, 116.0], [1.2, 118.0], [1.3, 121.0], [1.4, 122.0], [1.5, 123.0], [1.6, 124.0], [1.7, 125.0], [1.8, 126.0], [1.9, 127.0], [2.0, 127.0], [2.1, 127.0], [2.2, 128.0], [2.3, 128.0], [2.4, 128.0], [2.5, 128.0], [2.6, 129.0], [2.7, 129.0], [2.8, 129.0], [2.9, 130.0], [3.0, 130.0], [3.1, 130.0], [3.2, 131.0], [3.3, 131.0], [3.4, 131.0], [3.5, 131.0], [3.6, 132.0], [3.7, 132.0], [3.8, 132.0], [3.9, 132.0], [4.0, 133.0], [4.1, 133.0], [4.2, 133.0], [4.3, 134.0], [4.4, 134.0], [4.5, 134.0], [4.6, 134.0], [4.7, 134.0], [4.8, 134.0], [4.9, 135.0], [5.0, 135.0], [5.1, 135.0], [5.2, 135.0], [5.3, 135.0], [5.4, 135.0], [5.5, 136.0], [5.6, 136.0], [5.7, 136.0], [5.8, 136.0], [5.9, 137.0], [6.0, 137.0], [6.1, 137.0], [6.2, 137.0], [6.3, 137.0], [6.4, 138.0], [6.5, 138.0], [6.6, 138.0], [6.7, 138.0], [6.8, 139.0], [6.9, 139.0], [7.0, 139.0], [7.1, 139.0], [7.2, 139.0], [7.3, 139.0], [7.4, 139.0], [7.5, 140.0], [7.6, 140.0], [7.7, 140.0], [7.8, 140.0], [7.9, 140.0], [8.0, 140.0], [8.1, 140.0], [8.2, 140.0], [8.3, 140.0], [8.4, 140.0], [8.5, 141.0], [8.6, 141.0], [8.7, 141.0], [8.8, 141.0], [8.9, 141.0], [9.0, 141.0], [9.1, 141.0], [9.2, 142.0], [9.3, 142.0], [9.4, 142.0], [9.5, 142.0], [9.6, 142.0], [9.7, 142.0], [9.8, 142.0], [9.9, 142.0], [10.0, 143.0], [10.1, 143.0], [10.2, 143.0], [10.3, 143.0], [10.4, 143.0], [10.5, 143.0], [10.6, 143.0], [10.7, 143.0], [10.8, 143.0], [10.9, 144.0], [11.0, 144.0], [11.1, 144.0], [11.2, 144.0], [11.3, 144.0], [11.4, 144.0], [11.5, 144.0], [11.6, 145.0], [11.7, 145.0], [11.8, 145.0], [11.9, 145.0], [12.0, 145.0], [12.1, 145.0], [12.2, 146.0], [12.3, 146.0], [12.4, 146.0], [12.5, 146.0], [12.6, 146.0], [12.7, 146.0], [12.8, 146.0], [12.9, 146.0], [13.0, 147.0], [13.1, 147.0], [13.2, 147.0], [13.3, 147.0], [13.4, 147.0], [13.5, 147.0], [13.6, 147.0], [13.7, 147.0], [13.8, 147.0], [13.9, 148.0], [14.0, 148.0], [14.1, 148.0], [14.2, 148.0], [14.3, 148.0], [14.4, 148.0], [14.5, 148.0], [14.6, 148.0], [14.7, 149.0], [14.8, 149.0], [14.9, 149.0], [15.0, 149.0], [15.1, 149.0], [15.2, 149.0], [15.3, 149.0], [15.4, 149.0], [15.5, 149.0], [15.6, 150.0], [15.7, 150.0], [15.8, 150.0], [15.9, 150.0], [16.0, 150.0], [16.1, 151.0], [16.2, 151.0], [16.3, 151.0], [16.4, 151.0], [16.5, 151.0], [16.6, 152.0], [16.7, 152.0], [16.8, 152.0], [16.9, 152.0], [17.0, 152.0], [17.1, 152.0], [17.2, 153.0], [17.3, 153.0], [17.4, 153.0], [17.5, 153.0], [17.6, 153.0], [17.7, 153.0], [17.8, 154.0], [17.9, 154.0], [18.0, 155.0], [18.1, 155.0], [18.2, 155.0], [18.3, 155.0], [18.4, 156.0], [18.5, 156.0], [18.6, 156.0], [18.7, 157.0], [18.8, 157.0], [18.9, 157.0], [19.0, 157.0], [19.1, 158.0], [19.2, 158.0], [19.3, 159.0], [19.4, 159.0], [19.5, 160.0], [19.6, 161.0], [19.7, 161.0], [19.8, 162.0], [19.9, 162.0], [20.0, 163.0], [20.1, 163.0], [20.2, 164.0], [20.3, 165.0], [20.4, 166.0], [20.5, 167.0], [20.6, 169.0], [20.7, 170.0], [20.8, 171.0], [20.9, 173.0], [21.0, 175.0], [21.1, 176.0], [21.2, 178.0], [21.3, 179.0], [21.4, 181.0], [21.5, 183.0], [21.6, 185.0], [21.7, 187.0], [21.8, 189.0], [21.9, 192.0], [22.0, 195.0], [22.1, 197.0], [22.2, 198.0], [22.3, 201.0], [22.4, 202.0], [22.5, 205.0], [22.6, 205.0], [22.7, 208.0], [22.8, 209.0], [22.9, 212.0], [23.0, 215.0], [23.1, 215.0], [23.2, 217.0], [23.3, 218.0], [23.4, 221.0], [23.5, 221.0], [23.6, 222.0], [23.7, 224.0], [23.8, 226.0], [23.9, 228.0], [24.0, 229.0], [24.1, 230.0], [24.2, 231.0], [24.3, 232.0], [24.4, 234.0], [24.5, 234.0], [24.6, 235.0], [24.7, 236.0], [24.8, 237.0], [24.9, 237.0], [25.0, 238.0], [25.1, 239.0], [25.2, 240.0], [25.3, 241.0], [25.4, 241.0], [25.5, 242.0], [25.6, 243.0], [25.7, 244.0], [25.8, 245.0], [25.9, 246.0], [26.0, 247.0], [26.1, 247.0], [26.2, 248.0], [26.3, 249.0], [26.4, 250.0], [26.5, 251.0], [26.6, 251.0], [26.7, 252.0], [26.8, 252.0], [26.9, 253.0], [27.0, 255.0], [27.1, 255.0], [27.2, 256.0], [27.3, 257.0], [27.4, 258.0], [27.5, 258.0], [27.6, 259.0], [27.7, 259.0], [27.8, 260.0], [27.9, 260.0], [28.0, 261.0], [28.1, 262.0], [28.2, 263.0], [28.3, 263.0], [28.4, 264.0], [28.5, 264.0], [28.6, 265.0], [28.7, 266.0], [28.8, 267.0], [28.9, 268.0], [29.0, 269.0], [29.1, 269.0], [29.2, 270.0], [29.3, 270.0], [29.4, 270.0], [29.5, 271.0], [29.6, 272.0], [29.7, 273.0], [29.8, 273.0], [29.9, 274.0], [30.0, 275.0], [30.1, 275.0], [30.2, 275.0], [30.3, 276.0], [30.4, 277.0], [30.5, 277.0], [30.6, 278.0], [30.7, 279.0], [30.8, 279.0], [30.9, 281.0], [31.0, 281.0], [31.1, 281.0], [31.2, 282.0], [31.3, 283.0], [31.4, 284.0], [31.5, 285.0], [31.6, 286.0], [31.7, 288.0], [31.8, 289.0], [31.9, 290.0], [32.0, 291.0], [32.1, 292.0], [32.2, 292.0], [32.3, 293.0], [32.4, 294.0], [32.5, 296.0], [32.6, 296.0], [32.7, 297.0], [32.8, 298.0], [32.9, 299.0], [33.0, 300.0], [33.1, 302.0], [33.2, 304.0], [33.3, 304.0], [33.4, 305.0], [33.5, 306.0], [33.6, 307.0], [33.7, 308.0], [33.8, 308.0], [33.9, 309.0], [34.0, 310.0], [34.1, 311.0], [34.2, 312.0], [34.3, 313.0], [34.4, 314.0], [34.5, 315.0], [34.6, 317.0], [34.7, 318.0], [34.8, 320.0], [34.9, 320.0], [35.0, 322.0], [35.1, 324.0], [35.2, 324.0], [35.3, 326.0], [35.4, 329.0], [35.5, 330.0], [35.6, 332.0], [35.7, 333.0], [35.8, 334.0], [35.9, 335.0], [36.0, 337.0], [36.1, 339.0], [36.2, 341.0], [36.3, 342.0], [36.4, 344.0], [36.5, 345.0], [36.6, 347.0], [36.7, 349.0], [36.8, 352.0], [36.9, 353.0], [37.0, 354.0], [37.1, 356.0], [37.2, 358.0], [37.3, 359.0], [37.4, 361.0], [37.5, 362.0], [37.6, 364.0], [37.7, 367.0], [37.8, 368.0], [37.9, 369.0], [38.0, 370.0], [38.1, 371.0], [38.2, 372.0], [38.3, 375.0], [38.4, 376.0], [38.5, 377.0], [38.6, 379.0], [38.7, 381.0], [38.8, 383.0], [38.9, 385.0], [39.0, 387.0], [39.1, 388.0], [39.2, 390.0], [39.3, 391.0], [39.4, 393.0], [39.5, 395.0], [39.6, 397.0], [39.7, 398.0], [39.8, 400.0], [39.9, 403.0], [40.0, 404.0], [40.1, 407.0], [40.2, 412.0], [40.3, 416.0], [40.4, 418.0], [40.5, 420.0], [40.6, 422.0], [40.7, 423.0], [40.8, 426.0], [40.9, 429.0], [41.0, 431.0], [41.1, 432.0], [41.2, 434.0], [41.3, 436.0], [41.4, 437.0], [41.5, 438.0], [41.6, 440.0], [41.7, 443.0], [41.8, 445.0], [41.9, 447.0], [42.0, 447.0], [42.1, 449.0], [42.2, 452.0], [42.3, 453.0], [42.4, 454.0], [42.5, 456.0], [42.6, 456.0], [42.7, 460.0], [42.8, 461.0], [42.9, 462.0], [43.0, 464.0], [43.1, 465.0], [43.2, 466.0], [43.3, 467.0], [43.4, 469.0], [43.5, 470.0], [43.6, 470.0], [43.7, 471.0], [43.8, 472.0], [43.9, 473.0], [44.0, 474.0], [44.1, 475.0], [44.2, 477.0], [44.3, 477.0], [44.4, 479.0], [44.5, 482.0], [44.6, 484.0], [44.7, 485.0], [44.8, 486.0], [44.9, 487.0], [45.0, 488.0], [45.1, 489.0], [45.2, 491.0], [45.3, 493.0], [45.4, 494.0], [45.5, 495.0], [45.6, 496.0], [45.7, 498.0], [45.8, 501.0], [45.9, 503.0], [46.0, 504.0], [46.1, 505.0], [46.2, 507.0], [46.3, 508.0], [46.4, 510.0], [46.5, 511.0], [46.6, 512.0], [46.7, 514.0], [46.8, 516.0], [46.9, 517.0], [47.0, 519.0], [47.1, 523.0], [47.2, 525.0], [47.3, 527.0], [47.4, 528.0], [47.5, 533.0], [47.6, 536.0], [47.7, 539.0], [47.8, 540.0], [47.9, 541.0], [48.0, 542.0], [48.1, 544.0], [48.2, 547.0], [48.3, 549.0], [48.4, 550.0], [48.5, 553.0], [48.6, 555.0], [48.7, 557.0], [48.8, 557.0], [48.9, 558.0], [49.0, 559.0], [49.1, 561.0], [49.2, 562.0], [49.3, 564.0], [49.4, 565.0], [49.5, 568.0], [49.6, 570.0], [49.7, 572.0], [49.8, 574.0], [49.9, 576.0], [50.0, 577.0], [50.1, 579.0], [50.2, 580.0], [50.3, 581.0], [50.4, 582.0], [50.5, 584.0], [50.6, 585.0], [50.7, 587.0], [50.8, 588.0], [50.9, 589.0], [51.0, 590.0], [51.1, 591.0], [51.2, 593.0], [51.3, 594.0], [51.4, 595.0], [51.5, 597.0], [51.6, 598.0], [51.7, 600.0], [51.8, 601.0], [51.9, 603.0], [52.0, 604.0], [52.1, 604.0], [52.2, 605.0], [52.3, 607.0], [52.4, 607.0], [52.5, 609.0], [52.6, 611.0], [52.7, 612.0], [52.8, 613.0], [52.9, 614.0], [53.0, 615.0], [53.1, 616.0], [53.2, 617.0], [53.3, 618.0], [53.4, 620.0], [53.5, 622.0], [53.6, 624.0], [53.7, 626.0], [53.8, 628.0], [53.9, 630.0], [54.0, 632.0], [54.1, 634.0], [54.2, 635.0], [54.3, 639.0], [54.4, 642.0], [54.5, 643.0], [54.6, 645.0], [54.7, 646.0], [54.8, 649.0], [54.9, 650.0], [55.0, 651.0], [55.1, 652.0], [55.2, 653.0], [55.3, 654.0], [55.4, 656.0], [55.5, 657.0], [55.6, 659.0], [55.7, 660.0], [55.8, 663.0], [55.9, 664.0], [56.0, 666.0], [56.1, 668.0], [56.2, 670.0], [56.3, 673.0], [56.4, 673.0], [56.5, 675.0], [56.6, 677.0], [56.7, 678.0], [56.8, 679.0], [56.9, 682.0], [57.0, 685.0], [57.1, 688.0], [57.2, 690.0], [57.3, 691.0], [57.4, 693.0], [57.5, 696.0], [57.6, 697.0], [57.7, 699.0], [57.8, 701.0], [57.9, 702.0], [58.0, 704.0], [58.1, 706.0], [58.2, 708.0], [58.3, 709.0], [58.4, 710.0], [58.5, 712.0], [58.6, 714.0], [58.7, 715.0], [58.8, 718.0], [58.9, 719.0], [59.0, 719.0], [59.1, 720.0], [59.2, 722.0], [59.3, 723.0], [59.4, 723.0], [59.5, 724.0], [59.6, 725.0], [59.7, 726.0], [59.8, 728.0], [59.9, 729.0], [60.0, 730.0], [60.1, 731.0], [60.2, 732.0], [60.3, 733.0], [60.4, 735.0], [60.5, 737.0], [60.6, 738.0], [60.7, 740.0], [60.8, 741.0], [60.9, 743.0], [61.0, 744.0], [61.1, 746.0], [61.2, 748.0], [61.3, 749.0], [61.4, 751.0], [61.5, 753.0], [61.6, 755.0], [61.7, 757.0], [61.8, 758.0], [61.9, 759.0], [62.0, 760.0], [62.1, 763.0], [62.2, 764.0], [62.3, 764.0], [62.4, 765.0], [62.5, 767.0], [62.6, 768.0], [62.7, 770.0], [62.8, 771.0], [62.9, 773.0], [63.0, 774.0], [63.1, 776.0], [63.2, 778.0], [63.3, 779.0], [63.4, 781.0], [63.5, 782.0], [63.6, 783.0], [63.7, 785.0], [63.8, 787.0], [63.9, 788.0], [64.0, 789.0], [64.1, 790.0], [64.2, 791.0], [64.3, 793.0], [64.4, 795.0], [64.5, 798.0], [64.6, 800.0], [64.7, 803.0], [64.8, 805.0], [64.9, 806.0], [65.0, 807.0], [65.1, 809.0], [65.2, 811.0], [65.3, 812.0], [65.4, 813.0], [65.5, 816.0], [65.6, 818.0], [65.7, 818.0], [65.8, 820.0], [65.9, 822.0], [66.0, 823.0], [66.1, 825.0], [66.2, 828.0], [66.3, 829.0], [66.4, 830.0], [66.5, 834.0], [66.6, 835.0], [66.7, 838.0], [66.8, 841.0], [66.9, 843.0], [67.0, 846.0], [67.1, 849.0], [67.2, 852.0], [67.3, 854.0], [67.4, 856.0], [67.5, 857.0], [67.6, 858.0], [67.7, 861.0], [67.8, 863.0], [67.9, 864.0], [68.0, 866.0], [68.1, 868.0], [68.2, 869.0], [68.3, 871.0], [68.4, 873.0], [68.5, 875.0], [68.6, 876.0], [68.7, 877.0], [68.8, 882.0], [68.9, 883.0], [69.0, 883.0], [69.1, 886.0], [69.2, 888.0], [69.3, 889.0], [69.4, 892.0], [69.5, 895.0], [69.6, 898.0], [69.7, 902.0], [69.8, 904.0], [69.9, 906.0], [70.0, 907.0], [70.1, 909.0], [70.2, 911.0], [70.3, 912.0], [70.4, 913.0], [70.5, 916.0], [70.6, 920.0], [70.7, 922.0], [70.8, 923.0], [70.9, 924.0], [71.0, 928.0], [71.1, 930.0], [71.2, 931.0], [71.3, 934.0], [71.4, 937.0], [71.5, 939.0], [71.6, 941.0], [71.7, 944.0], [71.8, 947.0], [71.9, 949.0], [72.0, 950.0], [72.1, 952.0], [72.2, 954.0], [72.3, 959.0], [72.4, 961.0], [72.5, 962.0], [72.6, 964.0], [72.7, 968.0], [72.8, 972.0], [72.9, 974.0], [73.0, 978.0], [73.1, 980.0], [73.2, 983.0], [73.3, 987.0], [73.4, 990.0], [73.5, 993.0], [73.6, 995.0], [73.7, 998.0], [73.8, 1004.0], [73.9, 1011.0], [74.0, 1012.0], [74.1, 1014.0], [74.2, 1016.0], [74.3, 1019.0], [74.4, 1021.0], [74.5, 1023.0], [74.6, 1025.0], [74.7, 1028.0], [74.8, 1032.0], [74.9, 1036.0], [75.0, 1039.0], [75.1, 1043.0], [75.2, 1044.0], [75.3, 1046.0], [75.4, 1048.0], [75.5, 1051.0], [75.6, 1054.0], [75.7, 1057.0], [75.8, 1060.0], [75.9, 1061.0], [76.0, 1063.0], [76.1, 1067.0], [76.2, 1070.0], [76.3, 1072.0], [76.4, 1074.0], [76.5, 1078.0], [76.6, 1079.0], [76.7, 1081.0], [76.8, 1084.0], [76.9, 1087.0], [77.0, 1092.0], [77.1, 1098.0], [77.2, 1099.0], [77.3, 1105.0], [77.4, 1106.0], [77.5, 1109.0], [77.6, 1111.0], [77.7, 1112.0], [77.8, 1116.0], [77.9, 1120.0], [78.0, 1123.0], [78.1, 1125.0], [78.2, 1128.0], [78.3, 1130.0], [78.4, 1133.0], [78.5, 1137.0], [78.6, 1138.0], [78.7, 1145.0], [78.8, 1149.0], [78.9, 1154.0], [79.0, 1157.0], [79.1, 1161.0], [79.2, 1163.0], [79.3, 1167.0], [79.4, 1169.0], [79.5, 1173.0], [79.6, 1176.0], [79.7, 1178.0], [79.8, 1181.0], [79.9, 1184.0], [80.0, 1186.0], [80.1, 1191.0], [80.2, 1195.0], [80.3, 1201.0], [80.4, 1202.0], [80.5, 1203.0], [80.6, 1208.0], [80.7, 1210.0], [80.8, 1212.0], [80.9, 1218.0], [81.0, 1222.0], [81.1, 1223.0], [81.2, 1225.0], [81.3, 1228.0], [81.4, 1229.0], [81.5, 1234.0], [81.6, 1236.0], [81.7, 1239.0], [81.8, 1242.0], [81.9, 1245.0], [82.0, 1251.0], [82.1, 1253.0], [82.2, 1257.0], [82.3, 1259.0], [82.4, 1262.0], [82.5, 1265.0], [82.6, 1271.0], [82.7, 1272.0], [82.8, 1275.0], [82.9, 1278.0], [83.0, 1283.0], [83.1, 1290.0], [83.2, 1293.0], [83.3, 1295.0], [83.4, 1300.0], [83.5, 1301.0], [83.6, 1304.0], [83.7, 1306.0], [83.8, 1310.0], [83.9, 1313.0], [84.0, 1318.0], [84.1, 1320.0], [84.2, 1324.0], [84.3, 1326.0], [84.4, 1328.0], [84.5, 1334.0], [84.6, 1338.0], [84.7, 1340.0], [84.8, 1343.0], [84.9, 1346.0], [85.0, 1351.0], [85.1, 1357.0], [85.2, 1358.0], [85.3, 1362.0], [85.4, 1364.0], [85.5, 1369.0], [85.6, 1375.0], [85.7, 1377.0], [85.8, 1382.0], [85.9, 1385.0], [86.0, 1387.0], [86.1, 1391.0], [86.2, 1396.0], [86.3, 1401.0], [86.4, 1405.0], [86.5, 1407.0], [86.6, 1410.0], [86.7, 1420.0], [86.8, 1423.0], [86.9, 1424.0], [87.0, 1428.0], [87.1, 1432.0], [87.2, 1437.0], [87.3, 1439.0], [87.4, 1443.0], [87.5, 1450.0], [87.6, 1458.0], [87.7, 1464.0], [87.8, 1469.0], [87.9, 1475.0], [88.0, 1478.0], [88.1, 1482.0], [88.2, 1484.0], [88.3, 1486.0], [88.4, 1492.0], [88.5, 1495.0], [88.6, 1503.0], [88.7, 1515.0], [88.8, 1519.0], [88.9, 1523.0], [89.0, 1525.0], [89.1, 1529.0], [89.2, 1533.0], [89.3, 1539.0], [89.4, 1545.0], [89.5, 1548.0], [89.6, 1557.0], [89.7, 1561.0], [89.8, 1571.0], [89.9, 1575.0], [90.0, 1580.0], [90.1, 1588.0], [90.2, 1596.0], [90.3, 1601.0], [90.4, 1609.0], [90.5, 1614.0], [90.6, 1620.0], [90.7, 1624.0], [90.8, 1626.0], [90.9, 1636.0], [91.0, 1642.0], [91.1, 1646.0], [91.2, 1652.0], [91.3, 1658.0], [91.4, 1662.0], [91.5, 1669.0], [91.6, 1675.0], [91.7, 1680.0], [91.8, 1684.0], [91.9, 1685.0], [92.0, 1689.0], [92.1, 1691.0], [92.2, 1695.0], [92.3, 1699.0], [92.4, 1703.0], [92.5, 1717.0], [92.6, 1721.0], [92.7, 1727.0], [92.8, 1734.0], [92.9, 1741.0], [93.0, 1748.0], [93.1, 1758.0], [93.2, 1763.0], [93.3, 1768.0], [93.4, 1777.0], [93.5, 1779.0], [93.6, 1788.0], [93.7, 1796.0], [93.8, 1807.0], [93.9, 1817.0], [94.0, 1822.0], [94.1, 1846.0], [94.2, 1855.0], [94.3, 1858.0], [94.4, 1878.0], [94.5, 1895.0], [94.6, 1914.0], [94.7, 1929.0], [94.8, 1940.0], [94.9, 1947.0], [95.0, 1951.0], [95.1, 1962.0], [95.2, 1977.0], [95.3, 1989.0], [95.4, 1997.0], [95.5, 2004.0], [95.6, 2012.0], [95.7, 2029.0], [95.8, 2033.0], [95.9, 2057.0], [96.0, 2081.0], [96.1, 2103.0], [96.2, 2121.0], [96.3, 2141.0], [96.4, 2161.0], [96.5, 2173.0], [96.6, 2196.0], [96.7, 2212.0], [96.8, 2221.0], [96.9, 2231.0], [97.0, 2258.0], [97.1, 2323.0], [97.2, 2357.0], [97.3, 2403.0], [97.4, 2448.0], [97.5, 2476.0], [97.6, 2512.0], [97.7, 2532.0], [97.8, 2558.0], [97.9, 2595.0], [98.0, 2618.0], [98.1, 2659.0], [98.2, 2699.0], [98.3, 2708.0], [98.4, 2713.0], [98.5, 2739.0], [98.6, 2763.0], [98.7, 2822.0], [98.8, 2909.0], [98.9, 2990.0], [99.0, 3048.0], [99.1, 3086.0], [99.2, 3163.0], [99.3, 3320.0], [99.4, 3405.0], [99.5, 3512.0], [99.6, 3976.0], [99.7, 4256.0], [99.8, 4427.0], [99.9, 4588.0], [100.0, 4894.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1131.0, "series": [{"data": [[0.0, 42.0], [600.0, 318.0], [700.0, 362.0], [800.0, 266.0], [900.0, 215.0], [1000.0, 184.0], [1100.0, 163.0], [1200.0, 163.0], [1300.0, 151.0], [1400.0, 121.0], [1500.0, 90.0], [100.0, 1131.0], [1600.0, 109.0], [1700.0, 75.0], [1800.0, 42.0], [1900.0, 49.0], [2000.0, 33.0], [2100.0, 28.0], [2200.0, 23.0], [2300.0, 12.0], [2400.0, 14.0], [2500.0, 19.0], [2600.0, 16.0], [2800.0, 6.0], [2700.0, 23.0], [2900.0, 9.0], [3000.0, 10.0], [3100.0, 5.0], [200.0, 562.0], [3200.0, 4.0], [3300.0, 5.0], [3400.0, 5.0], [3500.0, 3.0], [3600.0, 1.0], [3700.0, 1.0], [3900.0, 1.0], [4000.0, 2.0], [4200.0, 3.0], [4100.0, 3.0], [4300.0, 1.0], [4400.0, 3.0], [4500.0, 4.0], [4600.0, 1.0], [300.0, 360.0], [4800.0, 2.0], [4700.0, 2.0], [400.0, 316.0], [500.0, 314.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 604.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2414.0, "series": [{"data": [[0.0, 2414.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2254.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 604.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.907692307692306, "minX": 1.60232076E12, "maxY": 12.0, "series": [{"data": [[1.60232106E12, 11.907692307692306], [1.60232088E12, 12.0], [1.60232094E12, 12.0], [1.60232076E12, 11.936395759717314], [1.60232082E12, 12.0], [1.602321E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232106E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 731.0487340567298, "minX": 1.0, "maxY": 4724.0, "series": [{"data": [[8.0, 2226.5], [4.0, 4519.0], [2.0, 4177.0], [1.0, 4541.0], [9.0, 2429.5], [5.0, 1488.0], [10.0, 2602.5], [11.0, 2292.0], [6.0, 1629.3333333333333], [12.0, 731.0487340567298], [3.0, 4724.0], [7.0, 4561.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980652503793614, 738.0830804248851]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4853.216666666666, "minX": 1.60232076E12, "maxY": 1063225.15, "series": [{"data": [[1.60232106E12, 611265.35], [1.60232088E12, 769584.0333333333], [1.60232094E12, 609388.1833333333], [1.60232076E12, 302614.8], [1.60232082E12, 935446.7], [1.602321E12, 1063225.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232106E12, 6325.1], [1.60232088E12, 9832.683333333332], [1.60232094E12, 10298.333333333334], [1.60232076E12, 4853.216666666666], [1.60232082E12, 6472.216666666666], [1.602321E12, 7798.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232106E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 604.4005059021919, "minX": 1.60232076E12, "maxY": 957.0027063599459, "series": [{"data": [[1.60232106E12, 868.9188811188811], [1.60232088E12, 628.7943201376942], [1.60232094E12, 604.4005059021919], [1.60232076E12, 695.4964664310955], [1.60232082E12, 957.0027063599459], [1.602321E12, 798.1670353982297]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232106E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 604.1728499156826, "minX": 1.60232076E12, "maxY": 956.4289580514203, "series": [{"data": [[1.60232106E12, 868.553846153846], [1.60232088E12, 628.5180722891566], [1.60232094E12, 604.1728499156826], [1.60232076E12, 695.229681978798], [1.60232082E12, 956.4289580514203], [1.602321E12, 797.6592920353985]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232106E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010961214165261399, "minX": 1.60232076E12, "maxY": 0.23674911660777384, "series": [{"data": [[1.60232106E12, 0.0195804195804196], [1.60232088E12, 0.011187607573149759], [1.60232094E12, 0.010961214165261399], [1.60232076E12, 0.23674911660777384], [1.60232082E12, 0.018944519621109622], [1.602321E12, 0.01438053097345135]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232106E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 59.0, "minX": 1.60232076E12, "maxY": 4894.0, "series": [{"data": [[1.60232106E12, 4894.0], [1.60232088E12, 4440.0], [1.60232094E12, 2726.0], [1.60232076E12, 2512.0], [1.60232082E12, 3512.0], [1.602321E12, 3496.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232106E12, 128.0], [1.60232088E12, 126.0], [1.60232094E12, 101.0], [1.60232076E12, 135.10299986481667], [1.60232082E12, 115.0], [1.602321E12, 76.14499978423119]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232106E12, 128.0], [1.60232088E12, 126.0], [1.60232094E12, 104.75650056600571], [1.60232076E12, 135.61330005407333], [1.60232082E12, 115.3260000705719], [1.602321E12, 76.95950008630753]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232106E12, 128.0], [1.60232088E12, 126.0], [1.60232094E12, 102.38249929249287], [1.60232076E12, 135.38649993240833], [1.60232082E12, 115.02999991178513], [1.602321E12, 76.5974998921156]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232106E12, 122.0], [1.60232088E12, 117.0], [1.60232094E12, 59.0], [1.60232076E12, 76.0], [1.60232082E12, 111.0], [1.602321E12, 73.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232106E12, 649.0], [1.60232088E12, 343.5], [1.60232094E12, 464.0], [1.60232076E12, 626.0], [1.60232082E12, 810.0], [1.602321E12, 712.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232106E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 135.0, "minX": 1.0, "maxY": 4484.0, "series": [{"data": [[2.0, 2211.5], [3.0, 3140.0], [4.0, 2201.5], [5.0, 1732.0], [6.0, 1538.5], [7.0, 1469.0], [8.0, 1396.0], [9.0, 1191.0], [10.0, 1180.0], [11.0, 1129.0], [12.0, 1033.5], [13.0, 908.0], [14.0, 812.0], [15.0, 766.5], [16.0, 794.5], [17.0, 806.0], [18.0, 697.5], [19.0, 633.0], [20.0, 575.0], [21.0, 487.5], [22.0, 541.0], [23.0, 496.0], [24.0, 476.0], [25.0, 389.0], [26.0, 470.5], [27.0, 401.0], [28.0, 468.0], [29.0, 406.0], [30.0, 313.5], [31.0, 311.0], [32.0, 352.5], [33.0, 264.0], [34.0, 151.0], [35.0, 281.0], [37.0, 374.5], [36.0, 154.5], [39.0, 147.0], [38.0, 289.0], [40.0, 237.5], [43.0, 275.5], [42.0, 148.0], [45.0, 234.0], [44.0, 269.5], [47.0, 243.5], [46.0, 239.5], [48.0, 151.0], [50.0, 142.0], [53.0, 148.0], [63.0, 135.0], [70.0, 161.0], [1.0, 4484.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 135.0, "minX": 1.0, "maxY": 4484.0, "series": [{"data": [[2.0, 2210.5], [3.0, 3139.0], [4.0, 2200.0], [5.0, 1730.5], [6.0, 1538.5], [7.0, 1468.5], [8.0, 1396.0], [9.0, 1190.0], [10.0, 1180.0], [11.0, 1128.0], [12.0, 1032.0], [13.0, 908.0], [14.0, 812.0], [15.0, 766.0], [16.0, 794.5], [17.0, 805.0], [18.0, 697.5], [19.0, 633.0], [20.0, 575.0], [21.0, 487.0], [22.0, 541.0], [23.0, 495.0], [24.0, 475.5], [25.0, 389.0], [26.0, 470.5], [27.0, 401.0], [28.0, 468.0], [29.0, 406.0], [30.0, 313.5], [31.0, 311.0], [32.0, 352.5], [33.0, 264.0], [34.0, 151.0], [35.0, 281.0], [37.0, 374.5], [36.0, 154.5], [39.0, 147.0], [38.0, 289.0], [40.0, 237.0], [43.0, 275.0], [42.0, 148.0], [45.0, 234.0], [44.0, 269.5], [47.0, 243.5], [46.0, 239.5], [48.0, 151.0], [50.0, 142.0], [53.0, 148.0], [63.0, 135.0], [70.0, 161.0], [1.0, 4484.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.633333333333333, "minX": 1.60232076E12, "maxY": 19.766666666666666, "series": [{"data": [[1.60232106E12, 11.716666666666667], [1.60232088E12, 19.366666666666667], [1.60232094E12, 19.766666666666666], [1.60232076E12, 9.633333333333333], [1.60232082E12, 12.316666666666666], [1.602321E12, 15.066666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232106E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.433333333333334, "minX": 1.60232076E12, "maxY": 19.766666666666666, "series": [{"data": [[1.60232106E12, 11.916666666666666], [1.60232088E12, 19.366666666666667], [1.60232094E12, 19.766666666666666], [1.60232076E12, 9.433333333333334], [1.60232082E12, 12.316666666666666], [1.602321E12, 15.066666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232106E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.433333333333334, "minX": 1.60232076E12, "maxY": 19.766666666666666, "series": [{"data": [[1.60232106E12, 11.916666666666666], [1.60232088E12, 19.366666666666667], [1.60232094E12, 19.766666666666666], [1.60232076E12, 9.433333333333334], [1.60232082E12, 12.316666666666666], [1.602321E12, 15.066666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232106E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.433333333333334, "minX": 1.60232076E12, "maxY": 19.766666666666666, "series": [{"data": [[1.60232106E12, 11.916666666666666], [1.60232088E12, 19.366666666666667], [1.60232094E12, 19.766666666666666], [1.60232076E12, 9.433333333333334], [1.60232082E12, 12.316666666666666], [1.602321E12, 15.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232106E12, "title": "Total Transactions Per Second"}},
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

