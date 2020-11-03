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
        data: {"result": {"minY": 36.0, "minX": 0.0, "maxY": 4583.0, "series": [{"data": [[0.0, 36.0], [0.1, 42.0], [0.2, 48.0], [0.3, 107.0], [0.4, 118.0], [0.5, 122.0], [0.6, 124.0], [0.7, 127.0], [0.8, 129.0], [0.9, 130.0], [1.0, 131.0], [1.1, 133.0], [1.2, 136.0], [1.3, 137.0], [1.4, 138.0], [1.5, 139.0], [1.6, 139.0], [1.7, 141.0], [1.8, 142.0], [1.9, 143.0], [2.0, 144.0], [2.1, 144.0], [2.2, 145.0], [2.3, 146.0], [2.4, 146.0], [2.5, 146.0], [2.6, 147.0], [2.7, 148.0], [2.8, 148.0], [2.9, 149.0], [3.0, 149.0], [3.1, 149.0], [3.2, 150.0], [3.3, 150.0], [3.4, 150.0], [3.5, 151.0], [3.6, 151.0], [3.7, 151.0], [3.8, 152.0], [3.9, 152.0], [4.0, 152.0], [4.1, 152.0], [4.2, 153.0], [4.3, 153.0], [4.4, 153.0], [4.5, 153.0], [4.6, 154.0], [4.7, 154.0], [4.8, 154.0], [4.9, 154.0], [5.0, 154.0], [5.1, 154.0], [5.2, 155.0], [5.3, 155.0], [5.4, 155.0], [5.5, 155.0], [5.6, 155.0], [5.7, 155.0], [5.8, 156.0], [5.9, 156.0], [6.0, 156.0], [6.1, 156.0], [6.2, 157.0], [6.3, 157.0], [6.4, 157.0], [6.5, 157.0], [6.6, 157.0], [6.7, 157.0], [6.8, 157.0], [6.9, 158.0], [7.0, 158.0], [7.1, 158.0], [7.2, 158.0], [7.3, 159.0], [7.4, 159.0], [7.5, 159.0], [7.6, 159.0], [7.7, 159.0], [7.8, 159.0], [7.9, 159.0], [8.0, 159.0], [8.1, 160.0], [8.2, 160.0], [8.3, 160.0], [8.4, 160.0], [8.5, 160.0], [8.6, 161.0], [8.7, 161.0], [8.8, 161.0], [8.9, 161.0], [9.0, 161.0], [9.1, 162.0], [9.2, 162.0], [9.3, 162.0], [9.4, 162.0], [9.5, 162.0], [9.6, 162.0], [9.7, 162.0], [9.8, 163.0], [9.9, 163.0], [10.0, 163.0], [10.1, 163.0], [10.2, 163.0], [10.3, 163.0], [10.4, 164.0], [10.5, 164.0], [10.6, 164.0], [10.7, 164.0], [10.8, 164.0], [10.9, 164.0], [11.0, 164.0], [11.1, 165.0], [11.2, 165.0], [11.3, 165.0], [11.4, 165.0], [11.5, 165.0], [11.6, 165.0], [11.7, 166.0], [11.8, 166.0], [11.9, 166.0], [12.0, 166.0], [12.1, 166.0], [12.2, 166.0], [12.3, 166.0], [12.4, 167.0], [12.5, 167.0], [12.6, 167.0], [12.7, 167.0], [12.8, 167.0], [12.9, 167.0], [13.0, 168.0], [13.1, 168.0], [13.2, 168.0], [13.3, 168.0], [13.4, 168.0], [13.5, 169.0], [13.6, 169.0], [13.7, 169.0], [13.8, 169.0], [13.9, 169.0], [14.0, 169.0], [14.1, 170.0], [14.2, 170.0], [14.3, 170.0], [14.4, 170.0], [14.5, 170.0], [14.6, 170.0], [14.7, 171.0], [14.8, 171.0], [14.9, 171.0], [15.0, 171.0], [15.1, 171.0], [15.2, 171.0], [15.3, 172.0], [15.4, 172.0], [15.5, 172.0], [15.6, 172.0], [15.7, 173.0], [15.8, 173.0], [15.9, 173.0], [16.0, 174.0], [16.1, 174.0], [16.2, 174.0], [16.3, 174.0], [16.4, 175.0], [16.5, 175.0], [16.6, 175.0], [16.7, 175.0], [16.8, 176.0], [16.9, 176.0], [17.0, 176.0], [17.1, 177.0], [17.2, 177.0], [17.3, 177.0], [17.4, 178.0], [17.5, 178.0], [17.6, 178.0], [17.7, 179.0], [17.8, 179.0], [17.9, 179.0], [18.0, 179.0], [18.1, 180.0], [18.2, 180.0], [18.3, 180.0], [18.4, 180.0], [18.5, 181.0], [18.6, 181.0], [18.7, 181.0], [18.8, 182.0], [18.9, 182.0], [19.0, 182.0], [19.1, 182.0], [19.2, 183.0], [19.3, 183.0], [19.4, 184.0], [19.5, 184.0], [19.6, 184.0], [19.7, 185.0], [19.8, 185.0], [19.9, 186.0], [20.0, 186.0], [20.1, 187.0], [20.2, 187.0], [20.3, 187.0], [20.4, 188.0], [20.5, 189.0], [20.6, 189.0], [20.7, 189.0], [20.8, 190.0], [20.9, 190.0], [21.0, 191.0], [21.1, 191.0], [21.2, 192.0], [21.3, 193.0], [21.4, 194.0], [21.5, 194.0], [21.6, 195.0], [21.7, 195.0], [21.8, 195.0], [21.9, 196.0], [22.0, 197.0], [22.1, 197.0], [22.2, 199.0], [22.3, 200.0], [22.4, 201.0], [22.5, 202.0], [22.6, 204.0], [22.7, 205.0], [22.8, 206.0], [22.9, 207.0], [23.0, 210.0], [23.1, 211.0], [23.2, 212.0], [23.3, 215.0], [23.4, 216.0], [23.5, 217.0], [23.6, 218.0], [23.7, 219.0], [23.8, 221.0], [23.9, 224.0], [24.0, 225.0], [24.1, 227.0], [24.2, 228.0], [24.3, 230.0], [24.4, 232.0], [24.5, 233.0], [24.6, 234.0], [24.7, 235.0], [24.8, 237.0], [24.9, 238.0], [25.0, 238.0], [25.1, 240.0], [25.2, 241.0], [25.3, 243.0], [25.4, 243.0], [25.5, 244.0], [25.6, 245.0], [25.7, 247.0], [25.8, 247.0], [25.9, 248.0], [26.0, 248.0], [26.1, 249.0], [26.2, 250.0], [26.3, 250.0], [26.4, 251.0], [26.5, 251.0], [26.6, 252.0], [26.7, 253.0], [26.8, 253.0], [26.9, 254.0], [27.0, 255.0], [27.1, 256.0], [27.2, 257.0], [27.3, 257.0], [27.4, 258.0], [27.5, 258.0], [27.6, 259.0], [27.7, 260.0], [27.8, 260.0], [27.9, 261.0], [28.0, 261.0], [28.1, 262.0], [28.2, 262.0], [28.3, 263.0], [28.4, 263.0], [28.5, 264.0], [28.6, 265.0], [28.7, 265.0], [28.8, 266.0], [28.9, 267.0], [29.0, 267.0], [29.1, 269.0], [29.2, 269.0], [29.3, 270.0], [29.4, 271.0], [29.5, 272.0], [29.6, 272.0], [29.7, 273.0], [29.8, 273.0], [29.9, 274.0], [30.0, 274.0], [30.1, 275.0], [30.2, 276.0], [30.3, 277.0], [30.4, 278.0], [30.5, 278.0], [30.6, 279.0], [30.7, 279.0], [30.8, 280.0], [30.9, 281.0], [31.0, 282.0], [31.1, 283.0], [31.2, 284.0], [31.3, 285.0], [31.4, 285.0], [31.5, 286.0], [31.6, 286.0], [31.7, 287.0], [31.8, 288.0], [31.9, 289.0], [32.0, 289.0], [32.1, 292.0], [32.2, 292.0], [32.3, 293.0], [32.4, 294.0], [32.5, 294.0], [32.6, 295.0], [32.7, 297.0], [32.8, 298.0], [32.9, 299.0], [33.0, 300.0], [33.1, 300.0], [33.2, 301.0], [33.3, 303.0], [33.4, 304.0], [33.5, 305.0], [33.6, 306.0], [33.7, 307.0], [33.8, 308.0], [33.9, 308.0], [34.0, 309.0], [34.1, 310.0], [34.2, 311.0], [34.3, 312.0], [34.4, 313.0], [34.5, 314.0], [34.6, 315.0], [34.7, 317.0], [34.8, 318.0], [34.9, 320.0], [35.0, 321.0], [35.1, 322.0], [35.2, 324.0], [35.3, 325.0], [35.4, 325.0], [35.5, 327.0], [35.6, 327.0], [35.7, 329.0], [35.8, 331.0], [35.9, 334.0], [36.0, 336.0], [36.1, 336.0], [36.2, 338.0], [36.3, 340.0], [36.4, 342.0], [36.5, 343.0], [36.6, 344.0], [36.7, 345.0], [36.8, 346.0], [36.9, 347.0], [37.0, 348.0], [37.1, 350.0], [37.2, 350.0], [37.3, 351.0], [37.4, 351.0], [37.5, 352.0], [37.6, 354.0], [37.7, 356.0], [37.8, 359.0], [37.9, 360.0], [38.0, 361.0], [38.1, 361.0], [38.2, 363.0], [38.3, 364.0], [38.4, 365.0], [38.5, 365.0], [38.6, 367.0], [38.7, 369.0], [38.8, 371.0], [38.9, 371.0], [39.0, 374.0], [39.1, 375.0], [39.2, 377.0], [39.3, 378.0], [39.4, 379.0], [39.5, 380.0], [39.6, 382.0], [39.7, 384.0], [39.8, 385.0], [39.9, 387.0], [40.0, 388.0], [40.1, 389.0], [40.2, 391.0], [40.3, 393.0], [40.4, 396.0], [40.5, 398.0], [40.6, 401.0], [40.7, 402.0], [40.8, 403.0], [40.9, 405.0], [41.0, 407.0], [41.1, 408.0], [41.2, 409.0], [41.3, 413.0], [41.4, 415.0], [41.5, 420.0], [41.6, 421.0], [41.7, 423.0], [41.8, 424.0], [41.9, 425.0], [42.0, 426.0], [42.1, 427.0], [42.2, 428.0], [42.3, 429.0], [42.4, 430.0], [42.5, 432.0], [42.6, 433.0], [42.7, 435.0], [42.8, 438.0], [42.9, 439.0], [43.0, 440.0], [43.1, 443.0], [43.2, 444.0], [43.3, 445.0], [43.4, 446.0], [43.5, 447.0], [43.6, 449.0], [43.7, 449.0], [43.8, 451.0], [43.9, 453.0], [44.0, 454.0], [44.1, 456.0], [44.2, 457.0], [44.3, 459.0], [44.4, 459.0], [44.5, 461.0], [44.6, 461.0], [44.7, 463.0], [44.8, 464.0], [44.9, 467.0], [45.0, 469.0], [45.1, 471.0], [45.2, 472.0], [45.3, 473.0], [45.4, 474.0], [45.5, 477.0], [45.6, 478.0], [45.7, 479.0], [45.8, 483.0], [45.9, 484.0], [46.0, 486.0], [46.1, 488.0], [46.2, 489.0], [46.3, 491.0], [46.4, 492.0], [46.5, 493.0], [46.6, 495.0], [46.7, 496.0], [46.8, 499.0], [46.9, 499.0], [47.0, 500.0], [47.1, 501.0], [47.2, 502.0], [47.3, 502.0], [47.4, 503.0], [47.5, 505.0], [47.6, 506.0], [47.7, 508.0], [47.8, 509.0], [47.9, 509.0], [48.0, 510.0], [48.1, 511.0], [48.2, 512.0], [48.3, 517.0], [48.4, 519.0], [48.5, 522.0], [48.6, 523.0], [48.7, 525.0], [48.8, 528.0], [48.9, 529.0], [49.0, 530.0], [49.1, 532.0], [49.2, 534.0], [49.3, 536.0], [49.4, 536.0], [49.5, 538.0], [49.6, 540.0], [49.7, 542.0], [49.8, 546.0], [49.9, 547.0], [50.0, 549.0], [50.1, 551.0], [50.2, 552.0], [50.3, 553.0], [50.4, 555.0], [50.5, 556.0], [50.6, 559.0], [50.7, 561.0], [50.8, 562.0], [50.9, 563.0], [51.0, 565.0], [51.1, 565.0], [51.2, 566.0], [51.3, 567.0], [51.4, 568.0], [51.5, 570.0], [51.6, 572.0], [51.7, 573.0], [51.8, 576.0], [51.9, 576.0], [52.0, 577.0], [52.1, 578.0], [52.2, 580.0], [52.3, 582.0], [52.4, 583.0], [52.5, 585.0], [52.6, 587.0], [52.7, 588.0], [52.8, 590.0], [52.9, 591.0], [53.0, 594.0], [53.1, 595.0], [53.2, 597.0], [53.3, 598.0], [53.4, 599.0], [53.5, 600.0], [53.6, 602.0], [53.7, 604.0], [53.8, 605.0], [53.9, 607.0], [54.0, 608.0], [54.1, 610.0], [54.2, 612.0], [54.3, 613.0], [54.4, 615.0], [54.5, 617.0], [54.6, 620.0], [54.7, 621.0], [54.8, 623.0], [54.9, 625.0], [55.0, 627.0], [55.1, 629.0], [55.2, 631.0], [55.3, 632.0], [55.4, 633.0], [55.5, 634.0], [55.6, 635.0], [55.7, 637.0], [55.8, 638.0], [55.9, 639.0], [56.0, 641.0], [56.1, 643.0], [56.2, 644.0], [56.3, 645.0], [56.4, 647.0], [56.5, 650.0], [56.6, 651.0], [56.7, 653.0], [56.8, 654.0], [56.9, 657.0], [57.0, 658.0], [57.1, 661.0], [57.2, 664.0], [57.3, 665.0], [57.4, 666.0], [57.5, 668.0], [57.6, 670.0], [57.7, 672.0], [57.8, 674.0], [57.9, 676.0], [58.0, 677.0], [58.1, 678.0], [58.2, 680.0], [58.3, 682.0], [58.4, 685.0], [58.5, 686.0], [58.6, 687.0], [58.7, 689.0], [58.8, 691.0], [58.9, 693.0], [59.0, 695.0], [59.1, 697.0], [59.2, 699.0], [59.3, 702.0], [59.4, 704.0], [59.5, 705.0], [59.6, 707.0], [59.7, 709.0], [59.8, 711.0], [59.9, 713.0], [60.0, 714.0], [60.1, 715.0], [60.2, 717.0], [60.3, 718.0], [60.4, 720.0], [60.5, 721.0], [60.6, 723.0], [60.7, 725.0], [60.8, 728.0], [60.9, 729.0], [61.0, 731.0], [61.1, 732.0], [61.2, 735.0], [61.3, 738.0], [61.4, 740.0], [61.5, 742.0], [61.6, 745.0], [61.7, 746.0], [61.8, 748.0], [61.9, 750.0], [62.0, 751.0], [62.1, 751.0], [62.2, 752.0], [62.3, 754.0], [62.4, 756.0], [62.5, 759.0], [62.6, 760.0], [62.7, 763.0], [62.8, 765.0], [62.9, 767.0], [63.0, 768.0], [63.1, 771.0], [63.2, 772.0], [63.3, 774.0], [63.4, 775.0], [63.5, 776.0], [63.6, 777.0], [63.7, 779.0], [63.8, 781.0], [63.9, 782.0], [64.0, 783.0], [64.1, 784.0], [64.2, 786.0], [64.3, 789.0], [64.4, 790.0], [64.5, 792.0], [64.6, 793.0], [64.7, 796.0], [64.8, 797.0], [64.9, 799.0], [65.0, 800.0], [65.1, 802.0], [65.2, 804.0], [65.3, 805.0], [65.4, 807.0], [65.5, 808.0], [65.6, 810.0], [65.7, 811.0], [65.8, 813.0], [65.9, 814.0], [66.0, 816.0], [66.1, 818.0], [66.2, 818.0], [66.3, 820.0], [66.4, 822.0], [66.5, 823.0], [66.6, 825.0], [66.7, 826.0], [66.8, 827.0], [66.9, 828.0], [67.0, 829.0], [67.1, 829.0], [67.2, 832.0], [67.3, 834.0], [67.4, 835.0], [67.5, 837.0], [67.6, 840.0], [67.7, 841.0], [67.8, 842.0], [67.9, 843.0], [68.0, 845.0], [68.1, 848.0], [68.2, 852.0], [68.3, 852.0], [68.4, 853.0], [68.5, 855.0], [68.6, 856.0], [68.7, 858.0], [68.8, 861.0], [68.9, 863.0], [69.0, 864.0], [69.1, 866.0], [69.2, 870.0], [69.3, 872.0], [69.4, 875.0], [69.5, 877.0], [69.6, 878.0], [69.7, 879.0], [69.8, 881.0], [69.9, 883.0], [70.0, 884.0], [70.1, 885.0], [70.2, 887.0], [70.3, 889.0], [70.4, 890.0], [70.5, 895.0], [70.6, 897.0], [70.7, 899.0], [70.8, 900.0], [70.9, 902.0], [71.0, 906.0], [71.1, 908.0], [71.2, 910.0], [71.3, 911.0], [71.4, 914.0], [71.5, 915.0], [71.6, 917.0], [71.7, 920.0], [71.8, 924.0], [71.9, 926.0], [72.0, 928.0], [72.1, 931.0], [72.2, 934.0], [72.3, 936.0], [72.4, 937.0], [72.5, 939.0], [72.6, 943.0], [72.7, 946.0], [72.8, 949.0], [72.9, 950.0], [73.0, 953.0], [73.1, 955.0], [73.2, 956.0], [73.3, 959.0], [73.4, 961.0], [73.5, 965.0], [73.6, 967.0], [73.7, 971.0], [73.8, 973.0], [73.9, 977.0], [74.0, 980.0], [74.1, 983.0], [74.2, 986.0], [74.3, 987.0], [74.4, 990.0], [74.5, 992.0], [74.6, 993.0], [74.7, 996.0], [74.8, 999.0], [74.9, 1003.0], [75.0, 1007.0], [75.1, 1009.0], [75.2, 1012.0], [75.3, 1014.0], [75.4, 1015.0], [75.5, 1017.0], [75.6, 1020.0], [75.7, 1022.0], [75.8, 1024.0], [75.9, 1025.0], [76.0, 1027.0], [76.1, 1028.0], [76.2, 1030.0], [76.3, 1033.0], [76.4, 1038.0], [76.5, 1042.0], [76.6, 1043.0], [76.7, 1046.0], [76.8, 1050.0], [76.9, 1051.0], [77.0, 1052.0], [77.1, 1059.0], [77.2, 1061.0], [77.3, 1065.0], [77.4, 1067.0], [77.5, 1069.0], [77.6, 1071.0], [77.7, 1073.0], [77.8, 1076.0], [77.9, 1079.0], [78.0, 1082.0], [78.1, 1083.0], [78.2, 1085.0], [78.3, 1086.0], [78.4, 1087.0], [78.5, 1092.0], [78.6, 1093.0], [78.7, 1098.0], [78.8, 1102.0], [78.9, 1107.0], [79.0, 1109.0], [79.1, 1111.0], [79.2, 1115.0], [79.3, 1117.0], [79.4, 1120.0], [79.5, 1123.0], [79.6, 1126.0], [79.7, 1129.0], [79.8, 1132.0], [79.9, 1134.0], [80.0, 1137.0], [80.1, 1140.0], [80.2, 1143.0], [80.3, 1145.0], [80.4, 1146.0], [80.5, 1149.0], [80.6, 1153.0], [80.7, 1156.0], [80.8, 1158.0], [80.9, 1160.0], [81.0, 1162.0], [81.1, 1166.0], [81.2, 1169.0], [81.3, 1173.0], [81.4, 1176.0], [81.5, 1180.0], [81.6, 1186.0], [81.7, 1188.0], [81.8, 1190.0], [81.9, 1195.0], [82.0, 1199.0], [82.1, 1202.0], [82.2, 1206.0], [82.3, 1210.0], [82.4, 1213.0], [82.5, 1219.0], [82.6, 1222.0], [82.7, 1225.0], [82.8, 1229.0], [82.9, 1231.0], [83.0, 1234.0], [83.1, 1237.0], [83.2, 1241.0], [83.3, 1244.0], [83.4, 1246.0], [83.5, 1248.0], [83.6, 1254.0], [83.7, 1257.0], [83.8, 1263.0], [83.9, 1267.0], [84.0, 1272.0], [84.1, 1273.0], [84.2, 1277.0], [84.3, 1279.0], [84.4, 1282.0], [84.5, 1286.0], [84.6, 1288.0], [84.7, 1291.0], [84.8, 1294.0], [84.9, 1298.0], [85.0, 1301.0], [85.1, 1305.0], [85.2, 1308.0], [85.3, 1310.0], [85.4, 1314.0], [85.5, 1320.0], [85.6, 1324.0], [85.7, 1327.0], [85.8, 1329.0], [85.9, 1332.0], [86.0, 1336.0], [86.1, 1340.0], [86.2, 1343.0], [86.3, 1348.0], [86.4, 1351.0], [86.5, 1355.0], [86.6, 1356.0], [86.7, 1361.0], [86.8, 1364.0], [86.9, 1370.0], [87.0, 1376.0], [87.1, 1382.0], [87.2, 1383.0], [87.3, 1385.0], [87.4, 1389.0], [87.5, 1394.0], [87.6, 1401.0], [87.7, 1403.0], [87.8, 1408.0], [87.9, 1410.0], [88.0, 1415.0], [88.1, 1417.0], [88.2, 1423.0], [88.3, 1426.0], [88.4, 1427.0], [88.5, 1432.0], [88.6, 1438.0], [88.7, 1443.0], [88.8, 1447.0], [88.9, 1458.0], [89.0, 1466.0], [89.1, 1471.0], [89.2, 1477.0], [89.3, 1482.0], [89.4, 1484.0], [89.5, 1487.0], [89.6, 1491.0], [89.7, 1494.0], [89.8, 1500.0], [89.9, 1510.0], [90.0, 1516.0], [90.1, 1521.0], [90.2, 1533.0], [90.3, 1535.0], [90.4, 1543.0], [90.5, 1551.0], [90.6, 1558.0], [90.7, 1560.0], [90.8, 1566.0], [90.9, 1575.0], [91.0, 1578.0], [91.1, 1585.0], [91.2, 1591.0], [91.3, 1595.0], [91.4, 1607.0], [91.5, 1614.0], [91.6, 1618.0], [91.7, 1622.0], [91.8, 1624.0], [91.9, 1631.0], [92.0, 1640.0], [92.1, 1643.0], [92.2, 1653.0], [92.3, 1663.0], [92.4, 1671.0], [92.5, 1676.0], [92.6, 1683.0], [92.7, 1693.0], [92.8, 1703.0], [92.9, 1710.0], [93.0, 1714.0], [93.1, 1727.0], [93.2, 1734.0], [93.3, 1740.0], [93.4, 1745.0], [93.5, 1752.0], [93.6, 1764.0], [93.7, 1775.0], [93.8, 1781.0], [93.9, 1791.0], [94.0, 1796.0], [94.1, 1808.0], [94.2, 1817.0], [94.3, 1828.0], [94.4, 1837.0], [94.5, 1845.0], [94.6, 1861.0], [94.7, 1869.0], [94.8, 1875.0], [94.9, 1889.0], [95.0, 1899.0], [95.1, 1921.0], [95.2, 1927.0], [95.3, 1936.0], [95.4, 1942.0], [95.5, 1951.0], [95.6, 1964.0], [95.7, 1968.0], [95.8, 1983.0], [95.9, 1995.0], [96.0, 2004.0], [96.1, 2017.0], [96.2, 2023.0], [96.3, 2047.0], [96.4, 2070.0], [96.5, 2093.0], [96.6, 2112.0], [96.7, 2144.0], [96.8, 2152.0], [96.9, 2166.0], [97.0, 2190.0], [97.1, 2205.0], [97.2, 2251.0], [97.3, 2278.0], [97.4, 2319.0], [97.5, 2348.0], [97.6, 2392.0], [97.7, 2411.0], [97.8, 2465.0], [97.9, 2483.0], [98.0, 2532.0], [98.1, 2551.0], [98.2, 2576.0], [98.3, 2604.0], [98.4, 2624.0], [98.5, 2672.0], [98.6, 2703.0], [98.7, 2714.0], [98.8, 2847.0], [98.9, 2884.0], [99.0, 2939.0], [99.1, 3090.0], [99.2, 3180.0], [99.3, 3233.0], [99.4, 3325.0], [99.5, 3487.0], [99.6, 3683.0], [99.7, 3973.0], [99.8, 4089.0], [99.9, 4217.0], [100.0, 4583.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1157.0, "series": [{"data": [[0.0, 15.0], [600.0, 304.0], [700.0, 300.0], [800.0, 306.0], [900.0, 213.0], [1000.0, 207.0], [1100.0, 172.0], [1200.0, 155.0], [1300.0, 138.0], [1400.0, 115.0], [1500.0, 84.0], [100.0, 1157.0], [1600.0, 75.0], [1700.0, 67.0], [1800.0, 50.0], [1900.0, 49.0], [2000.0, 30.0], [2100.0, 31.0], [2200.0, 15.0], [2300.0, 14.0], [2400.0, 14.0], [2500.0, 20.0], [2600.0, 16.0], [2700.0, 9.0], [2800.0, 10.0], [2900.0, 5.0], [3000.0, 5.0], [3100.0, 6.0], [200.0, 563.0], [3200.0, 6.0], [3300.0, 3.0], [3400.0, 5.0], [3500.0, 2.0], [3600.0, 2.0], [3700.0, 3.0], [3800.0, 1.0], [3900.0, 3.0], [4000.0, 4.0], [4100.0, 4.0], [4200.0, 2.0], [4300.0, 2.0], [4500.0, 2.0], [300.0, 401.0], [400.0, 332.0], [500.0, 345.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 536.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2475.0, "series": [{"data": [[0.0, 2475.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2251.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 536.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.857451403887689, "minX": 1.60423614E12, "maxY": 12.0, "series": [{"data": [[1.60423626E12, 12.0], [1.60423644E12, 11.857451403887689], [1.60423614E12, 11.946376811594195], [1.60423632E12, 12.0], [1.6042362E12, 12.0], [1.60423638E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423644E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 713.5202212895842, "minX": 1.0, "maxY": 4389.0, "series": [{"data": [[8.0, 2198.5], [4.0, 4139.0], [2.0, 4389.0], [1.0, 4129.0], [9.0, 2099.0], [5.0, 1555.0], [10.0, 2437.5], [11.0, 1456.3333333333333], [6.0, 1408.0], [12.0, 713.5202212895842], [3.0, 4044.0], [7.0, 4292.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980425693652572, 719.8772329912573]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4077.5, "minX": 1.60423614E12, "maxY": 1071918.0, "series": [{"data": [[1.60423626E12, 756839.95], [1.60423644E12, 450617.55], [1.60423614E12, 476127.9], [1.60423632E12, 541225.6333333333], [1.6042362E12, 954126.8666666667], [1.60423638E12, 1071918.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423626E12, 10949.016666666666], [1.60423644E12, 4077.5], [1.60423614E12, 5902.916666666667], [1.60423632E12, 9727.733333333334], [1.6042362E12, 6232.7], [1.60423638E12, 8601.083333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423644E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 549.5388719512188, "minX": 1.60423614E12, "maxY": 1009.7766853932575, "series": [{"data": [[1.60423626E12, 549.5388719512188], [1.60423644E12, 921.1360691144703], [1.60423614E12, 712.9623188405791], [1.60423632E12, 657.4509624197984], [1.6042362E12, 1009.7766853932575], [1.60423638E12, 716.628772635815]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423644E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 549.2446646341465, "minX": 1.60423614E12, "maxY": 1009.1502808988769, "series": [{"data": [[1.60423626E12, 549.2446646341465], [1.60423644E12, 920.6738660907132], [1.60423614E12, 712.5782608695667], [1.60423632E12, 657.2016498625115], [1.6042362E12, 1009.1502808988769], [1.60423638E12, 716.1247484909455]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423644E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.012832263978001864, "minX": 1.60423614E12, "maxY": 0.1884057971014494, "series": [{"data": [[1.60423626E12, 0.018292682926829267], [1.60423644E12, 0.028077753779697606], [1.60423614E12, 0.1884057971014494], [1.60423632E12, 0.012832263978001864], [1.6042362E12, 0.033707865168539304], [1.60423638E12, 0.013078470824949706]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423644E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 36.0, "minX": 1.60423614E12, "maxY": 4583.0, "series": [{"data": [[1.60423626E12, 4174.0], [1.60423644E12, 4583.0], [1.60423614E12, 2251.0], [1.60423632E12, 2676.0], [1.6042362E12, 3599.0], [1.60423638E12, 3318.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423626E12, 142.63399937391281], [1.60423644E12, 144.17599988937377], [1.60423614E12, 150.43799967050552], [1.60423632E12, 47.48399921894073], [1.6042362E12, 121.83399966001511], [1.60423638E12, 129.81999905109404]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423626E12, 143.99870012521743], [1.60423644E12, 144.59360004425048], [1.60423614E12, 151.6818001317978], [1.60423632E12, 48.0], [1.6042362E12, 123.11740013599396], [1.60423638E12, 130.8505000948906]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423626E12, 143.4734998434782], [1.60423644E12, 144.40799994468688], [1.60423614E12, 151.12899983525276], [1.60423632E12, 48.0], [1.6042362E12, 122.54699983000755], [1.60423638E12, 130.45249988138676]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423626E12, 135.0], [1.60423644E12, 127.0], [1.60423614E12, 71.0], [1.60423632E12, 36.0], [1.6042362E12, 117.0], [1.60423638E12, 119.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423626E12, 298.0], [1.60423644E12, 667.0], [1.60423614E12, 654.0], [1.60423632E12, 523.0], [1.6042362E12, 854.0], [1.60423638E12, 595.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423644E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 164.5, "minX": 1.0, "maxY": 4129.0, "series": [{"data": [[2.0, 2363.5], [3.0, 2807.0], [4.0, 2209.5], [5.0, 1966.0], [6.0, 1861.5], [7.0, 1351.0], [8.0, 1278.0], [9.0, 1140.5], [10.0, 1193.5], [11.0, 1038.5], [12.0, 1005.5], [13.0, 955.0], [14.0, 856.5], [15.0, 780.0], [16.0, 785.0], [17.0, 749.0], [18.0, 684.5], [19.0, 546.0], [20.0, 584.5], [21.0, 500.5], [22.0, 616.5], [23.0, 488.0], [24.0, 494.0], [25.0, 388.0], [26.0, 397.0], [27.0, 271.0], [28.0, 412.5], [29.0, 381.0], [30.0, 300.5], [31.0, 296.5], [32.0, 403.0], [33.0, 309.0], [35.0, 281.0], [34.0, 198.5], [37.0, 248.0], [36.0, 312.5], [39.0, 197.0], [38.0, 339.0], [40.0, 181.0], [41.0, 268.0], [42.0, 191.5], [43.0, 288.0], [45.0, 258.0], [46.0, 237.0], [48.0, 164.5], [51.0, 246.0], [61.0, 168.0], [65.0, 178.0], [1.0, 4129.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 164.5, "minX": 1.0, "maxY": 4129.0, "series": [{"data": [[2.0, 2362.5], [3.0, 2806.0], [4.0, 2208.0], [5.0, 1964.0], [6.0, 1860.0], [7.0, 1351.0], [8.0, 1277.5], [9.0, 1139.5], [10.0, 1191.5], [11.0, 1038.0], [12.0, 1005.0], [13.0, 954.0], [14.0, 856.5], [15.0, 780.0], [16.0, 785.0], [17.0, 747.0], [18.0, 683.5], [19.0, 545.0], [20.0, 584.5], [21.0, 500.0], [22.0, 616.5], [23.0, 488.0], [24.0, 493.5], [25.0, 388.0], [26.0, 396.5], [27.0, 270.5], [28.0, 412.5], [29.0, 381.0], [30.0, 300.0], [31.0, 296.5], [32.0, 403.0], [33.0, 308.0], [35.0, 280.5], [34.0, 198.5], [37.0, 248.0], [36.0, 312.5], [39.0, 197.0], [38.0, 339.0], [40.0, 181.0], [41.0, 267.5], [42.0, 191.5], [43.0, 288.0], [45.0, 258.0], [46.0, 237.0], [48.0, 164.5], [51.0, 246.0], [61.0, 168.0], [65.0, 178.0], [1.0, 4129.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.516666666666667, "minX": 1.60423614E12, "maxY": 21.866666666666667, "series": [{"data": [[1.60423626E12, 21.866666666666667], [1.60423644E12, 7.516666666666667], [1.60423614E12, 11.7], [1.60423632E12, 18.183333333333334], [1.6042362E12, 11.866666666666667], [1.60423638E12, 16.566666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423644E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.716666666666667, "minX": 1.60423614E12, "maxY": 21.866666666666667, "series": [{"data": [[1.60423626E12, 21.866666666666667], [1.60423644E12, 7.716666666666667], [1.60423614E12, 11.5], [1.60423632E12, 18.183333333333334], [1.6042362E12, 11.866666666666667], [1.60423638E12, 16.566666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423644E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.716666666666667, "minX": 1.60423614E12, "maxY": 21.866666666666667, "series": [{"data": [[1.60423626E12, 21.866666666666667], [1.60423644E12, 7.716666666666667], [1.60423614E12, 11.5], [1.60423632E12, 18.183333333333334], [1.6042362E12, 11.866666666666667], [1.60423638E12, 16.566666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423644E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.716666666666667, "minX": 1.60423614E12, "maxY": 21.866666666666667, "series": [{"data": [[1.60423626E12, 21.866666666666667], [1.60423644E12, 7.716666666666667], [1.60423614E12, 11.5], [1.60423632E12, 18.183333333333334], [1.6042362E12, 11.866666666666667], [1.60423638E12, 16.566666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423644E12, "title": "Total Transactions Per Second"}},
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

