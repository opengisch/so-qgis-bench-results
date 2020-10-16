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
        data: {"result": {"minY": 62.0, "minX": 0.0, "maxY": 4931.0, "series": [{"data": [[0.0, 62.0], [0.1, 73.0], [0.2, 77.0], [0.3, 80.0], [0.4, 103.0], [0.5, 107.0], [0.6, 108.0], [0.7, 112.0], [0.8, 116.0], [0.9, 120.0], [1.0, 121.0], [1.1, 122.0], [1.2, 127.0], [1.3, 128.0], [1.4, 130.0], [1.5, 132.0], [1.6, 133.0], [1.7, 134.0], [1.8, 135.0], [1.9, 136.0], [2.0, 137.0], [2.1, 138.0], [2.2, 138.0], [2.3, 139.0], [2.4, 139.0], [2.5, 140.0], [2.6, 140.0], [2.7, 141.0], [2.8, 141.0], [2.9, 142.0], [3.0, 142.0], [3.1, 143.0], [3.2, 143.0], [3.3, 143.0], [3.4, 144.0], [3.5, 144.0], [3.6, 144.0], [3.7, 145.0], [3.8, 145.0], [3.9, 145.0], [4.0, 146.0], [4.1, 146.0], [4.2, 146.0], [4.3, 146.0], [4.4, 147.0], [4.5, 147.0], [4.6, 147.0], [4.7, 147.0], [4.8, 147.0], [4.9, 148.0], [5.0, 148.0], [5.1, 148.0], [5.2, 148.0], [5.3, 149.0], [5.4, 149.0], [5.5, 149.0], [5.6, 149.0], [5.7, 149.0], [5.8, 150.0], [5.9, 150.0], [6.0, 150.0], [6.1, 150.0], [6.2, 151.0], [6.3, 151.0], [6.4, 151.0], [6.5, 151.0], [6.6, 152.0], [6.7, 152.0], [6.8, 152.0], [6.9, 152.0], [7.0, 152.0], [7.1, 152.0], [7.2, 152.0], [7.3, 153.0], [7.4, 153.0], [7.5, 153.0], [7.6, 153.0], [7.7, 153.0], [7.8, 153.0], [7.9, 153.0], [8.0, 154.0], [8.1, 154.0], [8.2, 154.0], [8.3, 154.0], [8.4, 154.0], [8.5, 154.0], [8.6, 155.0], [8.7, 155.0], [8.8, 155.0], [8.9, 155.0], [9.0, 155.0], [9.1, 155.0], [9.2, 155.0], [9.3, 155.0], [9.4, 156.0], [9.5, 156.0], [9.6, 156.0], [9.7, 156.0], [9.8, 157.0], [9.9, 157.0], [10.0, 157.0], [10.1, 157.0], [10.2, 157.0], [10.3, 157.0], [10.4, 157.0], [10.5, 158.0], [10.6, 158.0], [10.7, 158.0], [10.8, 158.0], [10.9, 158.0], [11.0, 158.0], [11.1, 158.0], [11.2, 159.0], [11.3, 159.0], [11.4, 159.0], [11.5, 159.0], [11.6, 159.0], [11.7, 160.0], [11.8, 160.0], [11.9, 160.0], [12.0, 160.0], [12.1, 160.0], [12.2, 160.0], [12.3, 161.0], [12.4, 161.0], [12.5, 161.0], [12.6, 161.0], [12.7, 162.0], [12.8, 162.0], [12.9, 162.0], [13.0, 162.0], [13.1, 162.0], [13.2, 162.0], [13.3, 162.0], [13.4, 162.0], [13.5, 163.0], [13.6, 163.0], [13.7, 163.0], [13.8, 163.0], [13.9, 163.0], [14.0, 163.0], [14.1, 164.0], [14.2, 164.0], [14.3, 164.0], [14.4, 164.0], [14.5, 165.0], [14.6, 165.0], [14.7, 165.0], [14.8, 165.0], [14.9, 165.0], [15.0, 165.0], [15.1, 165.0], [15.2, 166.0], [15.3, 166.0], [15.4, 166.0], [15.5, 166.0], [15.6, 166.0], [15.7, 167.0], [15.8, 167.0], [15.9, 167.0], [16.0, 167.0], [16.1, 167.0], [16.2, 167.0], [16.3, 168.0], [16.4, 168.0], [16.5, 168.0], [16.6, 168.0], [16.7, 169.0], [16.8, 169.0], [16.9, 169.0], [17.0, 169.0], [17.1, 170.0], [17.2, 170.0], [17.3, 170.0], [17.4, 170.0], [17.5, 170.0], [17.6, 171.0], [17.7, 171.0], [17.8, 171.0], [17.9, 171.0], [18.0, 172.0], [18.1, 172.0], [18.2, 172.0], [18.3, 173.0], [18.4, 173.0], [18.5, 173.0], [18.6, 174.0], [18.7, 174.0], [18.8, 174.0], [18.9, 174.0], [19.0, 175.0], [19.1, 175.0], [19.2, 176.0], [19.3, 176.0], [19.4, 176.0], [19.5, 176.0], [19.6, 176.0], [19.7, 177.0], [19.8, 177.0], [19.9, 178.0], [20.0, 178.0], [20.1, 179.0], [20.2, 179.0], [20.3, 179.0], [20.4, 180.0], [20.5, 180.0], [20.6, 180.0], [20.7, 181.0], [20.8, 182.0], [20.9, 183.0], [21.0, 184.0], [21.1, 184.0], [21.2, 185.0], [21.3, 186.0], [21.4, 187.0], [21.5, 188.0], [21.6, 189.0], [21.7, 190.0], [21.8, 191.0], [21.9, 193.0], [22.0, 194.0], [22.1, 195.0], [22.2, 198.0], [22.3, 199.0], [22.4, 201.0], [22.5, 202.0], [22.6, 203.0], [22.7, 205.0], [22.8, 205.0], [22.9, 207.0], [23.0, 208.0], [23.1, 211.0], [23.2, 212.0], [23.3, 213.0], [23.4, 214.0], [23.5, 215.0], [23.6, 217.0], [23.7, 219.0], [23.8, 220.0], [23.9, 221.0], [24.0, 222.0], [24.1, 223.0], [24.2, 224.0], [24.3, 225.0], [24.4, 226.0], [24.5, 227.0], [24.6, 228.0], [24.7, 229.0], [24.8, 230.0], [24.9, 232.0], [25.0, 232.0], [25.1, 233.0], [25.2, 234.0], [25.3, 234.0], [25.4, 235.0], [25.5, 236.0], [25.6, 237.0], [25.7, 237.0], [25.8, 238.0], [25.9, 239.0], [26.0, 240.0], [26.1, 240.0], [26.2, 241.0], [26.3, 242.0], [26.4, 243.0], [26.5, 244.0], [26.6, 244.0], [26.7, 244.0], [26.8, 245.0], [26.9, 245.0], [27.0, 246.0], [27.1, 246.0], [27.2, 247.0], [27.3, 247.0], [27.4, 248.0], [27.5, 249.0], [27.6, 249.0], [27.7, 250.0], [27.8, 251.0], [27.9, 252.0], [28.0, 253.0], [28.1, 253.0], [28.2, 253.0], [28.3, 254.0], [28.4, 255.0], [28.5, 255.0], [28.6, 256.0], [28.7, 256.0], [28.8, 257.0], [28.9, 257.0], [29.0, 258.0], [29.1, 258.0], [29.2, 259.0], [29.3, 260.0], [29.4, 260.0], [29.5, 261.0], [29.6, 262.0], [29.7, 263.0], [29.8, 264.0], [29.9, 264.0], [30.0, 265.0], [30.1, 265.0], [30.2, 266.0], [30.3, 267.0], [30.4, 268.0], [30.5, 269.0], [30.6, 270.0], [30.7, 271.0], [30.8, 271.0], [30.9, 272.0], [31.0, 273.0], [31.1, 274.0], [31.2, 274.0], [31.3, 276.0], [31.4, 277.0], [31.5, 278.0], [31.6, 278.0], [31.7, 279.0], [31.8, 280.0], [31.9, 281.0], [32.0, 283.0], [32.1, 284.0], [32.2, 285.0], [32.3, 286.0], [32.4, 287.0], [32.5, 287.0], [32.6, 288.0], [32.7, 289.0], [32.8, 291.0], [32.9, 292.0], [33.0, 293.0], [33.1, 296.0], [33.2, 297.0], [33.3, 299.0], [33.4, 299.0], [33.5, 301.0], [33.6, 302.0], [33.7, 303.0], [33.8, 304.0], [33.9, 305.0], [34.0, 307.0], [34.1, 308.0], [34.2, 310.0], [34.3, 310.0], [34.4, 312.0], [34.5, 313.0], [34.6, 315.0], [34.7, 315.0], [34.8, 316.0], [34.9, 317.0], [35.0, 317.0], [35.1, 318.0], [35.2, 321.0], [35.3, 322.0], [35.4, 323.0], [35.5, 325.0], [35.6, 327.0], [35.7, 328.0], [35.8, 329.0], [35.9, 332.0], [36.0, 333.0], [36.1, 334.0], [36.2, 335.0], [36.3, 337.0], [36.4, 338.0], [36.5, 339.0], [36.6, 339.0], [36.7, 341.0], [36.8, 343.0], [36.9, 343.0], [37.0, 345.0], [37.1, 347.0], [37.2, 348.0], [37.3, 349.0], [37.4, 350.0], [37.5, 352.0], [37.6, 353.0], [37.7, 354.0], [37.8, 354.0], [37.9, 356.0], [38.0, 357.0], [38.1, 359.0], [38.2, 362.0], [38.3, 363.0], [38.4, 364.0], [38.5, 365.0], [38.6, 366.0], [38.7, 368.0], [38.8, 369.0], [38.9, 370.0], [39.0, 371.0], [39.1, 372.0], [39.2, 372.0], [39.3, 374.0], [39.4, 375.0], [39.5, 376.0], [39.6, 378.0], [39.7, 379.0], [39.8, 380.0], [39.9, 381.0], [40.0, 384.0], [40.1, 385.0], [40.2, 387.0], [40.3, 389.0], [40.4, 391.0], [40.5, 392.0], [40.6, 394.0], [40.7, 396.0], [40.8, 397.0], [40.9, 400.0], [41.0, 401.0], [41.1, 405.0], [41.2, 408.0], [41.3, 410.0], [41.4, 411.0], [41.5, 414.0], [41.6, 416.0], [41.7, 418.0], [41.8, 419.0], [41.9, 421.0], [42.0, 422.0], [42.1, 423.0], [42.2, 424.0], [42.3, 426.0], [42.4, 428.0], [42.5, 429.0], [42.6, 430.0], [42.7, 431.0], [42.8, 432.0], [42.9, 433.0], [43.0, 433.0], [43.1, 434.0], [43.2, 435.0], [43.3, 435.0], [43.4, 436.0], [43.5, 437.0], [43.6, 438.0], [43.7, 439.0], [43.8, 440.0], [43.9, 441.0], [44.0, 442.0], [44.1, 443.0], [44.2, 445.0], [44.3, 447.0], [44.4, 448.0], [44.5, 450.0], [44.6, 451.0], [44.7, 453.0], [44.8, 455.0], [44.9, 456.0], [45.0, 457.0], [45.1, 458.0], [45.2, 459.0], [45.3, 460.0], [45.4, 462.0], [45.5, 463.0], [45.6, 464.0], [45.7, 465.0], [45.8, 466.0], [45.9, 467.0], [46.0, 468.0], [46.1, 470.0], [46.2, 471.0], [46.3, 472.0], [46.4, 474.0], [46.5, 476.0], [46.6, 478.0], [46.7, 480.0], [46.8, 482.0], [46.9, 483.0], [47.0, 485.0], [47.1, 486.0], [47.2, 487.0], [47.3, 490.0], [47.4, 490.0], [47.5, 491.0], [47.6, 492.0], [47.7, 494.0], [47.8, 496.0], [47.9, 499.0], [48.0, 501.0], [48.1, 502.0], [48.2, 503.0], [48.3, 504.0], [48.4, 505.0], [48.5, 509.0], [48.6, 510.0], [48.7, 510.0], [48.8, 512.0], [48.9, 513.0], [49.0, 514.0], [49.1, 516.0], [49.2, 517.0], [49.3, 518.0], [49.4, 519.0], [49.5, 520.0], [49.6, 521.0], [49.7, 522.0], [49.8, 525.0], [49.9, 527.0], [50.0, 529.0], [50.1, 531.0], [50.2, 532.0], [50.3, 533.0], [50.4, 536.0], [50.5, 537.0], [50.6, 537.0], [50.7, 540.0], [50.8, 543.0], [50.9, 544.0], [51.0, 545.0], [51.1, 546.0], [51.2, 548.0], [51.3, 550.0], [51.4, 552.0], [51.5, 552.0], [51.6, 556.0], [51.7, 557.0], [51.8, 558.0], [51.9, 562.0], [52.0, 563.0], [52.1, 565.0], [52.2, 566.0], [52.3, 568.0], [52.4, 568.0], [52.5, 569.0], [52.6, 569.0], [52.7, 570.0], [52.8, 571.0], [52.9, 573.0], [53.0, 574.0], [53.1, 577.0], [53.2, 578.0], [53.3, 579.0], [53.4, 580.0], [53.5, 581.0], [53.6, 581.0], [53.7, 582.0], [53.8, 584.0], [53.9, 587.0], [54.0, 588.0], [54.1, 589.0], [54.2, 591.0], [54.3, 593.0], [54.4, 595.0], [54.5, 596.0], [54.6, 597.0], [54.7, 598.0], [54.8, 601.0], [54.9, 603.0], [55.0, 607.0], [55.1, 608.0], [55.2, 610.0], [55.3, 611.0], [55.4, 612.0], [55.5, 613.0], [55.6, 615.0], [55.7, 616.0], [55.8, 618.0], [55.9, 619.0], [56.0, 621.0], [56.1, 622.0], [56.2, 624.0], [56.3, 626.0], [56.4, 627.0], [56.5, 629.0], [56.6, 630.0], [56.7, 632.0], [56.8, 633.0], [56.9, 634.0], [57.0, 635.0], [57.1, 637.0], [57.2, 638.0], [57.3, 639.0], [57.4, 641.0], [57.5, 642.0], [57.6, 643.0], [57.7, 645.0], [57.8, 647.0], [57.9, 649.0], [58.0, 649.0], [58.1, 652.0], [58.2, 653.0], [58.3, 654.0], [58.4, 656.0], [58.5, 658.0], [58.6, 660.0], [58.7, 662.0], [58.8, 663.0], [58.9, 665.0], [59.0, 667.0], [59.1, 668.0], [59.2, 669.0], [59.3, 672.0], [59.4, 673.0], [59.5, 674.0], [59.6, 678.0], [59.7, 680.0], [59.8, 681.0], [59.9, 682.0], [60.0, 683.0], [60.1, 685.0], [60.2, 687.0], [60.3, 689.0], [60.4, 692.0], [60.5, 693.0], [60.6, 693.0], [60.7, 696.0], [60.8, 698.0], [60.9, 699.0], [61.0, 701.0], [61.1, 704.0], [61.2, 705.0], [61.3, 707.0], [61.4, 709.0], [61.5, 711.0], [61.6, 713.0], [61.7, 716.0], [61.8, 719.0], [61.9, 720.0], [62.0, 722.0], [62.1, 723.0], [62.2, 724.0], [62.3, 727.0], [62.4, 729.0], [62.5, 731.0], [62.6, 734.0], [62.7, 735.0], [62.8, 739.0], [62.9, 741.0], [63.0, 743.0], [63.1, 744.0], [63.2, 745.0], [63.3, 746.0], [63.4, 747.0], [63.5, 749.0], [63.6, 751.0], [63.7, 751.0], [63.8, 754.0], [63.9, 756.0], [64.0, 758.0], [64.1, 760.0], [64.2, 762.0], [64.3, 763.0], [64.4, 764.0], [64.5, 765.0], [64.6, 766.0], [64.7, 768.0], [64.8, 769.0], [64.9, 771.0], [65.0, 773.0], [65.1, 774.0], [65.2, 774.0], [65.3, 776.0], [65.4, 777.0], [65.5, 778.0], [65.6, 779.0], [65.7, 780.0], [65.8, 781.0], [65.9, 783.0], [66.0, 784.0], [66.1, 787.0], [66.2, 788.0], [66.3, 789.0], [66.4, 790.0], [66.5, 791.0], [66.6, 792.0], [66.7, 793.0], [66.8, 794.0], [66.9, 795.0], [67.0, 796.0], [67.1, 797.0], [67.2, 799.0], [67.3, 801.0], [67.4, 804.0], [67.5, 806.0], [67.6, 809.0], [67.7, 812.0], [67.8, 813.0], [67.9, 814.0], [68.0, 816.0], [68.1, 818.0], [68.2, 818.0], [68.3, 820.0], [68.4, 822.0], [68.5, 825.0], [68.6, 826.0], [68.7, 828.0], [68.8, 830.0], [68.9, 832.0], [69.0, 835.0], [69.1, 838.0], [69.2, 841.0], [69.3, 843.0], [69.4, 844.0], [69.5, 845.0], [69.6, 848.0], [69.7, 850.0], [69.8, 852.0], [69.9, 853.0], [70.0, 856.0], [70.1, 858.0], [70.2, 859.0], [70.3, 862.0], [70.4, 863.0], [70.5, 865.0], [70.6, 867.0], [70.7, 870.0], [70.8, 871.0], [70.9, 873.0], [71.0, 874.0], [71.1, 876.0], [71.2, 879.0], [71.3, 880.0], [71.4, 884.0], [71.5, 885.0], [71.6, 887.0], [71.7, 889.0], [71.8, 892.0], [71.9, 894.0], [72.0, 896.0], [72.1, 899.0], [72.2, 903.0], [72.3, 905.0], [72.4, 908.0], [72.5, 911.0], [72.6, 916.0], [72.7, 919.0], [72.8, 921.0], [72.9, 924.0], [73.0, 925.0], [73.1, 927.0], [73.2, 928.0], [73.3, 930.0], [73.4, 932.0], [73.5, 933.0], [73.6, 935.0], [73.7, 939.0], [73.8, 942.0], [73.9, 944.0], [74.0, 947.0], [74.1, 950.0], [74.2, 954.0], [74.3, 956.0], [74.4, 957.0], [74.5, 960.0], [74.6, 963.0], [74.7, 965.0], [74.8, 966.0], [74.9, 969.0], [75.0, 969.0], [75.1, 971.0], [75.2, 973.0], [75.3, 975.0], [75.4, 977.0], [75.5, 981.0], [75.6, 985.0], [75.7, 989.0], [75.8, 992.0], [75.9, 995.0], [76.0, 998.0], [76.1, 1001.0], [76.2, 1002.0], [76.3, 1007.0], [76.4, 1009.0], [76.5, 1012.0], [76.6, 1014.0], [76.7, 1017.0], [76.8, 1020.0], [76.9, 1022.0], [77.0, 1024.0], [77.1, 1028.0], [77.2, 1031.0], [77.3, 1032.0], [77.4, 1035.0], [77.5, 1036.0], [77.6, 1039.0], [77.7, 1041.0], [77.8, 1044.0], [77.9, 1046.0], [78.0, 1048.0], [78.1, 1050.0], [78.2, 1055.0], [78.3, 1057.0], [78.4, 1061.0], [78.5, 1062.0], [78.6, 1064.0], [78.7, 1068.0], [78.8, 1070.0], [78.9, 1073.0], [79.0, 1078.0], [79.1, 1081.0], [79.2, 1082.0], [79.3, 1084.0], [79.4, 1089.0], [79.5, 1091.0], [79.6, 1095.0], [79.7, 1098.0], [79.8, 1099.0], [79.9, 1099.0], [80.0, 1101.0], [80.1, 1104.0], [80.2, 1107.0], [80.3, 1110.0], [80.4, 1112.0], [80.5, 1117.0], [80.6, 1119.0], [80.7, 1122.0], [80.8, 1124.0], [80.9, 1125.0], [81.0, 1127.0], [81.1, 1131.0], [81.2, 1133.0], [81.3, 1136.0], [81.4, 1138.0], [81.5, 1140.0], [81.6, 1142.0], [81.7, 1144.0], [81.8, 1147.0], [81.9, 1150.0], [82.0, 1155.0], [82.1, 1160.0], [82.2, 1163.0], [82.3, 1165.0], [82.4, 1168.0], [82.5, 1169.0], [82.6, 1171.0], [82.7, 1175.0], [82.8, 1177.0], [82.9, 1184.0], [83.0, 1189.0], [83.1, 1190.0], [83.2, 1193.0], [83.3, 1196.0], [83.4, 1198.0], [83.5, 1199.0], [83.6, 1205.0], [83.7, 1209.0], [83.8, 1212.0], [83.9, 1215.0], [84.0, 1221.0], [84.1, 1227.0], [84.2, 1233.0], [84.3, 1239.0], [84.4, 1245.0], [84.5, 1248.0], [84.6, 1249.0], [84.7, 1254.0], [84.8, 1259.0], [84.9, 1264.0], [85.0, 1268.0], [85.1, 1271.0], [85.2, 1278.0], [85.3, 1282.0], [85.4, 1288.0], [85.5, 1294.0], [85.6, 1297.0], [85.7, 1299.0], [85.8, 1303.0], [85.9, 1308.0], [86.0, 1308.0], [86.1, 1313.0], [86.2, 1316.0], [86.3, 1320.0], [86.4, 1323.0], [86.5, 1326.0], [86.6, 1328.0], [86.7, 1331.0], [86.8, 1336.0], [86.9, 1341.0], [87.0, 1342.0], [87.1, 1344.0], [87.2, 1347.0], [87.3, 1357.0], [87.4, 1366.0], [87.5, 1370.0], [87.6, 1374.0], [87.7, 1376.0], [87.8, 1381.0], [87.9, 1384.0], [88.0, 1387.0], [88.1, 1391.0], [88.2, 1396.0], [88.3, 1400.0], [88.4, 1407.0], [88.5, 1412.0], [88.6, 1414.0], [88.7, 1420.0], [88.8, 1424.0], [88.9, 1429.0], [89.0, 1435.0], [89.1, 1439.0], [89.2, 1440.0], [89.3, 1450.0], [89.4, 1456.0], [89.5, 1461.0], [89.6, 1468.0], [89.7, 1472.0], [89.8, 1476.0], [89.9, 1481.0], [90.0, 1483.0], [90.1, 1487.0], [90.2, 1494.0], [90.3, 1502.0], [90.4, 1507.0], [90.5, 1520.0], [90.6, 1526.0], [90.7, 1528.0], [90.8, 1531.0], [90.9, 1534.0], [91.0, 1538.0], [91.1, 1546.0], [91.2, 1553.0], [91.3, 1558.0], [91.4, 1561.0], [91.5, 1563.0], [91.6, 1570.0], [91.7, 1579.0], [91.8, 1590.0], [91.9, 1597.0], [92.0, 1603.0], [92.1, 1607.0], [92.2, 1608.0], [92.3, 1613.0], [92.4, 1623.0], [92.5, 1627.0], [92.6, 1631.0], [92.7, 1638.0], [92.8, 1645.0], [92.9, 1647.0], [93.0, 1654.0], [93.1, 1660.0], [93.2, 1670.0], [93.3, 1680.0], [93.4, 1689.0], [93.5, 1695.0], [93.6, 1711.0], [93.7, 1713.0], [93.8, 1736.0], [93.9, 1745.0], [94.0, 1758.0], [94.1, 1765.0], [94.2, 1766.0], [94.3, 1777.0], [94.4, 1792.0], [94.5, 1799.0], [94.6, 1809.0], [94.7, 1824.0], [94.8, 1842.0], [94.9, 1859.0], [95.0, 1864.0], [95.1, 1872.0], [95.2, 1883.0], [95.3, 1904.0], [95.4, 1914.0], [95.5, 1938.0], [95.6, 1944.0], [95.7, 1952.0], [95.8, 1966.0], [95.9, 1977.0], [96.0, 1985.0], [96.1, 2000.0], [96.2, 2016.0], [96.3, 2024.0], [96.4, 2038.0], [96.5, 2063.0], [96.6, 2086.0], [96.7, 2121.0], [96.8, 2159.0], [96.9, 2192.0], [97.0, 2207.0], [97.1, 2225.0], [97.2, 2246.0], [97.3, 2288.0], [97.4, 2310.0], [97.5, 2319.0], [97.6, 2380.0], [97.7, 2400.0], [97.8, 2416.0], [97.9, 2452.0], [98.0, 2455.0], [98.1, 2498.0], [98.2, 2514.0], [98.3, 2526.0], [98.4, 2557.0], [98.5, 2606.0], [98.6, 2648.0], [98.7, 2676.0], [98.8, 2725.0], [98.9, 2835.0], [99.0, 2897.0], [99.1, 2959.0], [99.2, 3052.0], [99.3, 3242.0], [99.4, 3376.0], [99.5, 3482.0], [99.6, 3857.0], [99.7, 3969.0], [99.8, 4023.0], [99.9, 4206.0], [100.0, 4931.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1157.0, "series": [{"data": [[0.0, 18.0], [600.0, 325.0], [700.0, 332.0], [800.0, 259.0], [900.0, 208.0], [1000.0, 201.0], [1100.0, 189.0], [1200.0, 116.0], [1300.0, 136.0], [1400.0, 102.0], [1500.0, 89.0], [100.0, 1157.0], [1600.0, 84.0], [1700.0, 52.0], [1800.0, 40.0], [1900.0, 43.0], [2000.0, 28.0], [2100.0, 17.0], [2300.0, 19.0], [2200.0, 20.0], [2400.0, 23.0], [2500.0, 19.0], [2600.0, 13.0], [2700.0, 8.0], [2800.0, 7.0], [2900.0, 5.0], [3000.0, 6.0], [3100.0, 4.0], [200.0, 583.0], [3200.0, 3.0], [3300.0, 5.0], [3400.0, 3.0], [3500.0, 1.0], [3600.0, 1.0], [3700.0, 1.0], [3800.0, 5.0], [3900.0, 5.0], [4000.0, 5.0], [4200.0, 2.0], [4300.0, 2.0], [4100.0, 2.0], [4500.0, 1.0], [300.0, 394.0], [4900.0, 1.0], [400.0, 370.0], [500.0, 358.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 513.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2525.0, "series": [{"data": [[0.0, 2525.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2224.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 513.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.5, "minX": 1.60281444E12, "maxY": 12.0, "series": [{"data": [[1.60281444E12, 11.642857142857142], [1.60281462E12, 12.0], [1.60281456E12, 12.0], [1.60281474E12, 11.998922413793103], [1.60281468E12, 12.0], [1.6028148E12, 5.5], [1.6028145E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028148E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 695.0160274756734, "minX": 1.0, "maxY": 4337.0, "series": [{"data": [[4.0, 2133.5], [8.0, 1710.5], [2.0, 4337.0], [1.0, 4206.0], [9.0, 2174.0], [5.0, 2541.0], [10.0, 1591.0], [11.0, 1578.3333333333333], [6.0, 1360.0], [12.0, 695.0160274756734], [3.0, 3871.0], [7.0, 4097.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.979855568225016, 701.21550741163]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 85.46666666666667, "minX": 1.60281444E12, "maxY": 942384.9166666666, "series": [{"data": [[1.60281444E12, 50376.8], [1.60281462E12, 790613.3166666667], [1.60281456E12, 767166.3], [1.60281474E12, 826790.8666666667], [1.60281468E12, 860098.9333333333], [1.6028148E12, 13635.033333333333], [1.6028145E12, 942384.9166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60281444E12, 965.3666666666667], [1.60281462E12, 12173.983333333334], [1.60281456E12, 7685.05], [1.60281474E12, 8158.616666666667], [1.60281468E12, 9028.866666666667], [1.6028148E12, 85.46666666666667], [1.6028145E12, 7393.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028148E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 499.57397260273945, "minX": 1.60281444E12, "maxY": 4111.4, "series": [{"data": [[1.60281444E12, 682.2946428571432], [1.60281462E12, 499.57397260273945], [1.60281456E12, 811.6937142857149], [1.60281474E12, 754.0193965517251], [1.60281468E12, 698.3417968750006], [1.6028148E12, 4111.4], [1.6028145E12, 841.5275498241502]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028148E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 499.29657534246616, "minX": 1.60281444E12, "maxY": 4110.700000000001, "series": [{"data": [[1.60281444E12, 682.0357142857142], [1.60281462E12, 499.29657534246616], [1.60281456E12, 811.2914285714289], [1.60281474E12, 753.6034482758613], [1.60281468E12, 697.9414062500006], [1.6028148E12, 4110.700000000001], [1.6028145E12, 840.9484173505273]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028148E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006849315068493152, "minX": 1.60281444E12, "maxY": 1.1875000000000009, "series": [{"data": [[1.60281444E12, 1.1875000000000009], [1.60281462E12, 0.006849315068493152], [1.60281456E12, 0.014857142857142855], [1.60281474E12, 0.015086206896551721], [1.60281468E12, 0.014648437500000003], [1.6028148E12, 0.20000000000000004], [1.6028145E12, 0.0175849941383353]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028148E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 62.0, "minX": 1.60281444E12, "maxY": 4931.0, "series": [{"data": [[1.60281444E12, 2139.0], [1.60281462E12, 3111.0], [1.60281456E12, 4531.0], [1.60281474E12, 4252.0], [1.60281468E12, 4027.0], [1.6028148E12, 4931.0], [1.6028145E12, 3482.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60281444E12, 84.81599870681762], [1.60281462E12, 120.14899965167045], [1.60281456E12, 141.0], [1.60281474E12, 143.0], [1.60281468E12, 77.0], [1.6028148E12, 3242.0], [1.6028145E12, 121.68599979639053]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60281444E12, 89.69760051727295], [1.60281462E12, 121.0], [1.60281456E12, 141.67240008354187], [1.60281474E12, 143.0], [1.60281468E12, 77.29500019550323], [1.6028148E12, 3242.0], [1.6028145E12, 122.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60281444E12, 87.5279993534088], [1.60281462E12, 120.87949982583523], [1.60281456E12, 141.32199989557267], [1.60281474E12, 143.0], [1.60281468E12, 77.0], [1.6028148E12, 3242.0], [1.6028145E12, 122.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60281444E12, 84.0], [1.60281462E12, 68.0], [1.60281456E12, 137.0], [1.60281474E12, 135.0], [1.60281468E12, 62.0], [1.6028148E12, 3242.0], [1.6028145E12, 107.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60281444E12, 560.5], [1.60281462E12, 297.5], [1.60281456E12, 663.0], [1.60281474E12, 637.0], [1.60281468E12, 571.0], [1.6028148E12, 4131.5], [1.6028145E12, 742.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028148E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 157.5, "minX": 1.0, "maxY": 4206.0, "series": [{"data": [[33.0, 421.0], [2.0, 3909.5], [35.0, 192.0], [34.0, 264.0], [36.0, 298.5], [37.0, 166.0], [38.0, 301.5], [39.0, 229.0], [40.0, 157.5], [42.0, 296.5], [43.0, 245.5], [45.0, 255.5], [46.0, 249.0], [3.0, 3288.0], [50.0, 163.0], [56.0, 160.0], [62.0, 175.5], [4.0, 2269.0], [5.0, 1796.5], [6.0, 1761.5], [7.0, 1412.0], [8.0, 1393.5], [9.0, 1165.0], [10.0, 1145.0], [11.0, 1036.0], [12.0, 978.5], [13.0, 810.0], [14.0, 865.5], [15.0, 749.5], [16.0, 704.5], [1.0, 4206.0], [17.0, 643.0], [18.0, 615.0], [19.0, 589.0], [20.0, 488.0], [21.0, 539.0], [22.0, 595.5], [23.0, 475.0], [24.0, 443.0], [25.0, 418.0], [26.0, 496.5], [27.0, 429.0], [28.0, 356.5], [29.0, 382.0], [30.0, 351.0], [31.0, 345.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 157.5, "minX": 1.0, "maxY": 4205.0, "series": [{"data": [[33.0, 421.0], [2.0, 3908.5], [35.0, 192.0], [34.0, 263.5], [36.0, 298.5], [37.0, 166.0], [38.0, 301.5], [39.0, 229.0], [40.0, 157.5], [42.0, 296.5], [43.0, 245.5], [45.0, 255.5], [46.0, 249.0], [3.0, 3287.0], [50.0, 163.0], [56.0, 160.0], [62.0, 175.5], [4.0, 2267.5], [5.0, 1795.0], [6.0, 1760.5], [7.0, 1411.0], [8.0, 1393.5], [9.0, 1164.0], [10.0, 1144.5], [11.0, 1035.0], [12.0, 978.5], [13.0, 810.0], [14.0, 865.5], [15.0, 748.5], [16.0, 704.5], [1.0, 4205.0], [17.0, 641.0], [18.0, 615.0], [19.0, 589.0], [20.0, 488.0], [21.0, 539.0], [22.0, 595.0], [23.0, 475.0], [24.0, 443.0], [25.0, 417.0], [26.0, 496.0], [27.0, 428.5], [28.0, 355.5], [29.0, 382.0], [30.0, 351.0], [31.0, 345.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.066666666666667, "minX": 1.60281444E12, "maxY": 24.333333333333332, "series": [{"data": [[1.60281444E12, 2.066666666666667], [1.60281462E12, 24.333333333333332], [1.60281456E12, 14.583333333333334], [1.60281474E12, 15.433333333333334], [1.60281468E12, 17.066666666666666], [1.6028145E12, 14.216666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281474E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60281444E12, "maxY": 24.333333333333332, "series": [{"data": [[1.60281444E12, 1.8666666666666667], [1.60281462E12, 24.333333333333332], [1.60281456E12, 14.583333333333334], [1.60281474E12, 15.466666666666667], [1.60281468E12, 17.066666666666666], [1.6028148E12, 0.16666666666666666], [1.6028145E12, 14.216666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028148E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60281444E12, "maxY": 24.333333333333332, "series": [{"data": [[1.60281444E12, 1.8666666666666667], [1.60281462E12, 24.333333333333332], [1.60281456E12, 14.583333333333334], [1.60281474E12, 15.466666666666667], [1.60281468E12, 17.066666666666666], [1.6028148E12, 0.16666666666666666], [1.6028145E12, 14.216666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028148E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60281444E12, "maxY": 24.333333333333332, "series": [{"data": [[1.60281444E12, 1.8666666666666667], [1.60281462E12, 24.333333333333332], [1.60281456E12, 14.583333333333334], [1.60281474E12, 15.466666666666667], [1.60281468E12, 17.066666666666666], [1.6028148E12, 0.16666666666666666], [1.6028145E12, 14.216666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028148E12, "title": "Total Transactions Per Second"}},
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

