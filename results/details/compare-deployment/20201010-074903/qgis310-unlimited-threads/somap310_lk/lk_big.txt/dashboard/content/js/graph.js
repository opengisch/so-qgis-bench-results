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
        data: {"result": {"minY": 64.0, "minX": 0.0, "maxY": 4775.0, "series": [{"data": [[0.0, 64.0], [0.1, 73.0], [0.2, 74.0], [0.3, 75.0], [0.4, 81.0], [0.5, 89.0], [0.6, 95.0], [0.7, 98.0], [0.8, 102.0], [0.9, 104.0], [1.0, 104.0], [1.1, 106.0], [1.2, 107.0], [1.3, 107.0], [1.4, 108.0], [1.5, 109.0], [1.6, 110.0], [1.7, 110.0], [1.8, 111.0], [1.9, 111.0], [2.0, 113.0], [2.1, 114.0], [2.2, 114.0], [2.3, 116.0], [2.4, 117.0], [2.5, 118.0], [2.6, 119.0], [2.7, 119.0], [2.8, 120.0], [2.9, 121.0], [3.0, 122.0], [3.1, 123.0], [3.2, 124.0], [3.3, 126.0], [3.4, 127.0], [3.5, 127.0], [3.6, 128.0], [3.7, 128.0], [3.8, 129.0], [3.9, 129.0], [4.0, 130.0], [4.1, 130.0], [4.2, 131.0], [4.3, 131.0], [4.4, 132.0], [4.5, 132.0], [4.6, 133.0], [4.7, 133.0], [4.8, 133.0], [4.9, 134.0], [5.0, 134.0], [5.1, 134.0], [5.2, 134.0], [5.3, 134.0], [5.4, 135.0], [5.5, 135.0], [5.6, 135.0], [5.7, 135.0], [5.8, 135.0], [5.9, 136.0], [6.0, 136.0], [6.1, 136.0], [6.2, 136.0], [6.3, 136.0], [6.4, 137.0], [6.5, 137.0], [6.6, 137.0], [6.7, 137.0], [6.8, 137.0], [6.9, 137.0], [7.0, 138.0], [7.1, 138.0], [7.2, 138.0], [7.3, 138.0], [7.4, 139.0], [7.5, 139.0], [7.6, 139.0], [7.7, 139.0], [7.8, 140.0], [7.9, 140.0], [8.0, 140.0], [8.1, 140.0], [8.2, 140.0], [8.3, 141.0], [8.4, 141.0], [8.5, 141.0], [8.6, 141.0], [8.7, 141.0], [8.8, 141.0], [8.9, 142.0], [9.0, 142.0], [9.1, 142.0], [9.2, 142.0], [9.3, 142.0], [9.4, 142.0], [9.5, 143.0], [9.6, 143.0], [9.7, 143.0], [9.8, 143.0], [9.9, 143.0], [10.0, 143.0], [10.1, 143.0], [10.2, 143.0], [10.3, 144.0], [10.4, 144.0], [10.5, 144.0], [10.6, 144.0], [10.7, 144.0], [10.8, 145.0], [10.9, 145.0], [11.0, 145.0], [11.1, 145.0], [11.2, 145.0], [11.3, 145.0], [11.4, 145.0], [11.5, 146.0], [11.6, 146.0], [11.7, 146.0], [11.8, 146.0], [11.9, 146.0], [12.0, 146.0], [12.1, 146.0], [12.2, 147.0], [12.3, 147.0], [12.4, 147.0], [12.5, 147.0], [12.6, 148.0], [12.7, 148.0], [12.8, 148.0], [12.9, 148.0], [13.0, 148.0], [13.1, 148.0], [13.2, 148.0], [13.3, 149.0], [13.4, 149.0], [13.5, 149.0], [13.6, 149.0], [13.7, 149.0], [13.8, 149.0], [13.9, 149.0], [14.0, 150.0], [14.1, 150.0], [14.2, 150.0], [14.3, 150.0], [14.4, 150.0], [14.5, 150.0], [14.6, 151.0], [14.7, 151.0], [14.8, 151.0], [14.9, 151.0], [15.0, 151.0], [15.1, 152.0], [15.2, 152.0], [15.3, 152.0], [15.4, 152.0], [15.5, 152.0], [15.6, 152.0], [15.7, 153.0], [15.8, 153.0], [15.9, 153.0], [16.0, 153.0], [16.1, 153.0], [16.2, 153.0], [16.3, 153.0], [16.4, 154.0], [16.5, 154.0], [16.6, 154.0], [16.7, 154.0], [16.8, 155.0], [16.9, 155.0], [17.0, 155.0], [17.1, 155.0], [17.2, 155.0], [17.3, 155.0], [17.4, 156.0], [17.5, 156.0], [17.6, 156.0], [17.7, 157.0], [17.8, 157.0], [17.9, 157.0], [18.0, 157.0], [18.1, 158.0], [18.2, 158.0], [18.3, 159.0], [18.4, 159.0], [18.5, 159.0], [18.6, 159.0], [18.7, 160.0], [18.8, 160.0], [18.9, 161.0], [19.0, 161.0], [19.1, 162.0], [19.2, 163.0], [19.3, 163.0], [19.4, 164.0], [19.5, 164.0], [19.6, 164.0], [19.7, 165.0], [19.8, 165.0], [19.9, 166.0], [20.0, 167.0], [20.1, 167.0], [20.2, 168.0], [20.3, 169.0], [20.4, 169.0], [20.5, 171.0], [20.6, 172.0], [20.7, 173.0], [20.8, 173.0], [20.9, 174.0], [21.0, 175.0], [21.1, 176.0], [21.2, 177.0], [21.3, 177.0], [21.4, 179.0], [21.5, 180.0], [21.6, 181.0], [21.7, 183.0], [21.8, 184.0], [21.9, 185.0], [22.0, 186.0], [22.1, 187.0], [22.2, 188.0], [22.3, 189.0], [22.4, 190.0], [22.5, 191.0], [22.6, 194.0], [22.7, 195.0], [22.8, 197.0], [22.9, 198.0], [23.0, 199.0], [23.1, 200.0], [23.2, 202.0], [23.3, 204.0], [23.4, 206.0], [23.5, 208.0], [23.6, 209.0], [23.7, 210.0], [23.8, 211.0], [23.9, 212.0], [24.0, 213.0], [24.1, 214.0], [24.2, 216.0], [24.3, 218.0], [24.4, 219.0], [24.5, 220.0], [24.6, 220.0], [24.7, 222.0], [24.8, 223.0], [24.9, 223.0], [25.0, 224.0], [25.1, 225.0], [25.2, 226.0], [25.3, 226.0], [25.4, 226.0], [25.5, 227.0], [25.6, 228.0], [25.7, 229.0], [25.8, 230.0], [25.9, 230.0], [26.0, 231.0], [26.1, 231.0], [26.2, 232.0], [26.3, 232.0], [26.4, 233.0], [26.5, 234.0], [26.6, 235.0], [26.7, 235.0], [26.8, 236.0], [26.9, 238.0], [27.0, 238.0], [27.1, 239.0], [27.2, 240.0], [27.3, 240.0], [27.4, 241.0], [27.5, 241.0], [27.6, 242.0], [27.7, 244.0], [27.8, 244.0], [27.9, 245.0], [28.0, 245.0], [28.1, 246.0], [28.2, 246.0], [28.3, 246.0], [28.4, 247.0], [28.5, 247.0], [28.6, 247.0], [28.7, 248.0], [28.8, 249.0], [28.9, 249.0], [29.0, 250.0], [29.1, 251.0], [29.2, 252.0], [29.3, 253.0], [29.4, 253.0], [29.5, 253.0], [29.6, 254.0], [29.7, 255.0], [29.8, 255.0], [29.9, 256.0], [30.0, 256.0], [30.1, 257.0], [30.2, 257.0], [30.3, 258.0], [30.4, 258.0], [30.5, 259.0], [30.6, 260.0], [30.7, 260.0], [30.8, 261.0], [30.9, 262.0], [31.0, 263.0], [31.1, 263.0], [31.2, 264.0], [31.3, 265.0], [31.4, 266.0], [31.5, 267.0], [31.6, 269.0], [31.7, 269.0], [31.8, 270.0], [31.9, 270.0], [32.0, 271.0], [32.1, 272.0], [32.2, 273.0], [32.3, 274.0], [32.4, 276.0], [32.5, 276.0], [32.6, 277.0], [32.7, 278.0], [32.8, 279.0], [32.9, 280.0], [33.0, 281.0], [33.1, 282.0], [33.2, 283.0], [33.3, 284.0], [33.4, 284.0], [33.5, 287.0], [33.6, 288.0], [33.7, 289.0], [33.8, 290.0], [33.9, 291.0], [34.0, 294.0], [34.1, 295.0], [34.2, 296.0], [34.3, 298.0], [34.4, 299.0], [34.5, 301.0], [34.6, 304.0], [34.7, 305.0], [34.8, 308.0], [34.9, 309.0], [35.0, 311.0], [35.1, 313.0], [35.2, 314.0], [35.3, 315.0], [35.4, 317.0], [35.5, 317.0], [35.6, 318.0], [35.7, 319.0], [35.8, 320.0], [35.9, 322.0], [36.0, 325.0], [36.1, 327.0], [36.2, 327.0], [36.3, 329.0], [36.4, 330.0], [36.5, 331.0], [36.6, 332.0], [36.7, 333.0], [36.8, 334.0], [36.9, 336.0], [37.0, 337.0], [37.1, 338.0], [37.2, 339.0], [37.3, 340.0], [37.4, 341.0], [37.5, 343.0], [37.6, 344.0], [37.7, 346.0], [37.8, 347.0], [37.9, 348.0], [38.0, 350.0], [38.1, 351.0], [38.2, 351.0], [38.3, 353.0], [38.4, 354.0], [38.5, 356.0], [38.6, 356.0], [38.7, 358.0], [38.8, 360.0], [38.9, 361.0], [39.0, 362.0], [39.1, 364.0], [39.2, 365.0], [39.3, 366.0], [39.4, 368.0], [39.5, 370.0], [39.6, 373.0], [39.7, 376.0], [39.8, 378.0], [39.9, 380.0], [40.0, 381.0], [40.1, 382.0], [40.2, 383.0], [40.3, 385.0], [40.4, 386.0], [40.5, 387.0], [40.6, 388.0], [40.7, 391.0], [40.8, 391.0], [40.9, 393.0], [41.0, 395.0], [41.1, 397.0], [41.2, 398.0], [41.3, 401.0], [41.4, 402.0], [41.5, 403.0], [41.6, 405.0], [41.7, 408.0], [41.8, 409.0], [41.9, 411.0], [42.0, 412.0], [42.1, 413.0], [42.2, 416.0], [42.3, 418.0], [42.4, 419.0], [42.5, 421.0], [42.6, 422.0], [42.7, 423.0], [42.8, 424.0], [42.9, 425.0], [43.0, 427.0], [43.1, 429.0], [43.2, 430.0], [43.3, 432.0], [43.4, 434.0], [43.5, 435.0], [43.6, 436.0], [43.7, 437.0], [43.8, 439.0], [43.9, 441.0], [44.0, 443.0], [44.1, 444.0], [44.2, 446.0], [44.3, 447.0], [44.4, 449.0], [44.5, 449.0], [44.6, 450.0], [44.7, 451.0], [44.8, 454.0], [44.9, 456.0], [45.0, 458.0], [45.1, 460.0], [45.2, 461.0], [45.3, 462.0], [45.4, 464.0], [45.5, 465.0], [45.6, 466.0], [45.7, 467.0], [45.8, 468.0], [45.9, 469.0], [46.0, 471.0], [46.1, 472.0], [46.2, 473.0], [46.3, 475.0], [46.4, 477.0], [46.5, 478.0], [46.6, 482.0], [46.7, 484.0], [46.8, 486.0], [46.9, 487.0], [47.0, 489.0], [47.1, 490.0], [47.2, 493.0], [47.3, 495.0], [47.4, 497.0], [47.5, 498.0], [47.6, 500.0], [47.7, 501.0], [47.8, 504.0], [47.9, 505.0], [48.0, 506.0], [48.1, 507.0], [48.2, 508.0], [48.3, 510.0], [48.4, 511.0], [48.5, 513.0], [48.6, 515.0], [48.7, 517.0], [48.8, 519.0], [48.9, 521.0], [49.0, 522.0], [49.1, 523.0], [49.2, 524.0], [49.3, 524.0], [49.4, 525.0], [49.5, 526.0], [49.6, 527.0], [49.7, 530.0], [49.8, 530.0], [49.9, 533.0], [50.0, 534.0], [50.1, 536.0], [50.2, 537.0], [50.3, 538.0], [50.4, 539.0], [50.5, 541.0], [50.6, 543.0], [50.7, 545.0], [50.8, 546.0], [50.9, 547.0], [51.0, 548.0], [51.1, 549.0], [51.2, 550.0], [51.3, 552.0], [51.4, 553.0], [51.5, 553.0], [51.6, 554.0], [51.7, 555.0], [51.8, 556.0], [51.9, 556.0], [52.0, 558.0], [52.1, 559.0], [52.2, 561.0], [52.3, 564.0], [52.4, 565.0], [52.5, 566.0], [52.6, 567.0], [52.7, 568.0], [52.8, 569.0], [52.9, 570.0], [53.0, 572.0], [53.1, 573.0], [53.2, 574.0], [53.3, 575.0], [53.4, 577.0], [53.5, 578.0], [53.6, 580.0], [53.7, 581.0], [53.8, 583.0], [53.9, 583.0], [54.0, 585.0], [54.1, 587.0], [54.2, 589.0], [54.3, 590.0], [54.4, 591.0], [54.5, 592.0], [54.6, 594.0], [54.7, 596.0], [54.8, 598.0], [54.9, 599.0], [55.0, 602.0], [55.1, 603.0], [55.2, 605.0], [55.3, 608.0], [55.4, 609.0], [55.5, 612.0], [55.6, 615.0], [55.7, 617.0], [55.8, 618.0], [55.9, 620.0], [56.0, 620.0], [56.1, 621.0], [56.2, 622.0], [56.3, 625.0], [56.4, 626.0], [56.5, 626.0], [56.6, 627.0], [56.7, 630.0], [56.8, 631.0], [56.9, 631.0], [57.0, 633.0], [57.1, 633.0], [57.2, 635.0], [57.3, 636.0], [57.4, 637.0], [57.5, 639.0], [57.6, 641.0], [57.7, 642.0], [57.8, 643.0], [57.9, 645.0], [58.0, 647.0], [58.1, 649.0], [58.2, 649.0], [58.3, 650.0], [58.4, 652.0], [58.5, 653.0], [58.6, 654.0], [58.7, 655.0], [58.8, 657.0], [58.9, 658.0], [59.0, 660.0], [59.1, 661.0], [59.2, 664.0], [59.3, 664.0], [59.4, 665.0], [59.5, 668.0], [59.6, 670.0], [59.7, 671.0], [59.8, 673.0], [59.9, 674.0], [60.0, 675.0], [60.1, 677.0], [60.2, 678.0], [60.3, 679.0], [60.4, 682.0], [60.5, 684.0], [60.6, 686.0], [60.7, 689.0], [60.8, 690.0], [60.9, 693.0], [61.0, 695.0], [61.1, 699.0], [61.2, 700.0], [61.3, 702.0], [61.4, 703.0], [61.5, 705.0], [61.6, 707.0], [61.7, 708.0], [61.8, 710.0], [61.9, 712.0], [62.0, 713.0], [62.1, 716.0], [62.2, 717.0], [62.3, 718.0], [62.4, 719.0], [62.5, 720.0], [62.6, 723.0], [62.7, 725.0], [62.8, 727.0], [62.9, 729.0], [63.0, 730.0], [63.1, 732.0], [63.2, 733.0], [63.3, 735.0], [63.4, 736.0], [63.5, 738.0], [63.6, 738.0], [63.7, 740.0], [63.8, 741.0], [63.9, 741.0], [64.0, 744.0], [64.1, 745.0], [64.2, 747.0], [64.3, 750.0], [64.4, 751.0], [64.5, 753.0], [64.6, 755.0], [64.7, 755.0], [64.8, 760.0], [64.9, 761.0], [65.0, 763.0], [65.1, 764.0], [65.2, 765.0], [65.3, 767.0], [65.4, 769.0], [65.5, 771.0], [65.6, 772.0], [65.7, 773.0], [65.8, 775.0], [65.9, 777.0], [66.0, 781.0], [66.1, 782.0], [66.2, 785.0], [66.3, 787.0], [66.4, 787.0], [66.5, 789.0], [66.6, 790.0], [66.7, 791.0], [66.8, 792.0], [66.9, 793.0], [67.0, 795.0], [67.1, 796.0], [67.2, 797.0], [67.3, 798.0], [67.4, 799.0], [67.5, 802.0], [67.6, 803.0], [67.7, 804.0], [67.8, 805.0], [67.9, 807.0], [68.0, 808.0], [68.1, 809.0], [68.2, 811.0], [68.3, 812.0], [68.4, 813.0], [68.5, 815.0], [68.6, 818.0], [68.7, 819.0], [68.8, 822.0], [68.9, 825.0], [69.0, 828.0], [69.1, 830.0], [69.2, 832.0], [69.3, 834.0], [69.4, 835.0], [69.5, 837.0], [69.6, 838.0], [69.7, 838.0], [69.8, 839.0], [69.9, 841.0], [70.0, 843.0], [70.1, 847.0], [70.2, 849.0], [70.3, 852.0], [70.4, 854.0], [70.5, 855.0], [70.6, 859.0], [70.7, 862.0], [70.8, 863.0], [70.9, 866.0], [71.0, 867.0], [71.1, 869.0], [71.2, 871.0], [71.3, 874.0], [71.4, 877.0], [71.5, 879.0], [71.6, 883.0], [71.7, 887.0], [71.8, 889.0], [71.9, 892.0], [72.0, 893.0], [72.1, 895.0], [72.2, 896.0], [72.3, 899.0], [72.4, 901.0], [72.5, 904.0], [72.6, 907.0], [72.7, 909.0], [72.8, 911.0], [72.9, 913.0], [73.0, 916.0], [73.1, 923.0], [73.2, 924.0], [73.3, 926.0], [73.4, 930.0], [73.5, 934.0], [73.6, 939.0], [73.7, 940.0], [73.8, 942.0], [73.9, 945.0], [74.0, 947.0], [74.1, 949.0], [74.2, 954.0], [74.3, 957.0], [74.4, 961.0], [74.5, 962.0], [74.6, 964.0], [74.7, 967.0], [74.8, 970.0], [74.9, 972.0], [75.0, 973.0], [75.1, 976.0], [75.2, 976.0], [75.3, 977.0], [75.4, 979.0], [75.5, 982.0], [75.6, 983.0], [75.7, 984.0], [75.8, 988.0], [75.9, 991.0], [76.0, 993.0], [76.1, 994.0], [76.2, 996.0], [76.3, 998.0], [76.4, 1001.0], [76.5, 1003.0], [76.6, 1006.0], [76.7, 1009.0], [76.8, 1012.0], [76.9, 1012.0], [77.0, 1017.0], [77.1, 1018.0], [77.2, 1019.0], [77.3, 1021.0], [77.4, 1023.0], [77.5, 1027.0], [77.6, 1029.0], [77.7, 1031.0], [77.8, 1034.0], [77.9, 1035.0], [78.0, 1038.0], [78.1, 1040.0], [78.2, 1040.0], [78.3, 1044.0], [78.4, 1046.0], [78.5, 1049.0], [78.6, 1052.0], [78.7, 1054.0], [78.8, 1057.0], [78.9, 1060.0], [79.0, 1062.0], [79.1, 1066.0], [79.2, 1068.0], [79.3, 1071.0], [79.4, 1076.0], [79.5, 1081.0], [79.6, 1084.0], [79.7, 1090.0], [79.8, 1093.0], [79.9, 1096.0], [80.0, 1098.0], [80.1, 1100.0], [80.2, 1101.0], [80.3, 1102.0], [80.4, 1104.0], [80.5, 1107.0], [80.6, 1109.0], [80.7, 1114.0], [80.8, 1115.0], [80.9, 1118.0], [81.0, 1122.0], [81.1, 1125.0], [81.2, 1127.0], [81.3, 1129.0], [81.4, 1132.0], [81.5, 1134.0], [81.6, 1136.0], [81.7, 1142.0], [81.8, 1145.0], [81.9, 1149.0], [82.0, 1152.0], [82.1, 1158.0], [82.2, 1161.0], [82.3, 1165.0], [82.4, 1167.0], [82.5, 1168.0], [82.6, 1175.0], [82.7, 1178.0], [82.8, 1182.0], [82.9, 1185.0], [83.0, 1187.0], [83.1, 1190.0], [83.2, 1195.0], [83.3, 1197.0], [83.4, 1200.0], [83.5, 1205.0], [83.6, 1208.0], [83.7, 1210.0], [83.8, 1211.0], [83.9, 1218.0], [84.0, 1222.0], [84.1, 1227.0], [84.2, 1229.0], [84.3, 1233.0], [84.4, 1235.0], [84.5, 1237.0], [84.6, 1240.0], [84.7, 1243.0], [84.8, 1247.0], [84.9, 1250.0], [85.0, 1255.0], [85.1, 1257.0], [85.2, 1258.0], [85.3, 1263.0], [85.4, 1268.0], [85.5, 1271.0], [85.6, 1278.0], [85.7, 1283.0], [85.8, 1286.0], [85.9, 1288.0], [86.0, 1290.0], [86.1, 1293.0], [86.2, 1298.0], [86.3, 1301.0], [86.4, 1304.0], [86.5, 1306.0], [86.6, 1309.0], [86.7, 1312.0], [86.8, 1317.0], [86.9, 1325.0], [87.0, 1329.0], [87.1, 1334.0], [87.2, 1340.0], [87.3, 1343.0], [87.4, 1351.0], [87.5, 1355.0], [87.6, 1357.0], [87.7, 1359.0], [87.8, 1361.0], [87.9, 1367.0], [88.0, 1373.0], [88.1, 1375.0], [88.2, 1380.0], [88.3, 1384.0], [88.4, 1387.0], [88.5, 1389.0], [88.6, 1392.0], [88.7, 1397.0], [88.8, 1400.0], [88.9, 1401.0], [89.0, 1406.0], [89.1, 1412.0], [89.2, 1414.0], [89.3, 1418.0], [89.4, 1427.0], [89.5, 1431.0], [89.6, 1433.0], [89.7, 1436.0], [89.8, 1441.0], [89.9, 1446.0], [90.0, 1453.0], [90.1, 1459.0], [90.2, 1464.0], [90.3, 1470.0], [90.4, 1479.0], [90.5, 1482.0], [90.6, 1485.0], [90.7, 1490.0], [90.8, 1493.0], [90.9, 1496.0], [91.0, 1502.0], [91.1, 1508.0], [91.2, 1520.0], [91.3, 1527.0], [91.4, 1532.0], [91.5, 1537.0], [91.6, 1544.0], [91.7, 1549.0], [91.8, 1552.0], [91.9, 1556.0], [92.0, 1559.0], [92.1, 1564.0], [92.2, 1566.0], [92.3, 1573.0], [92.4, 1576.0], [92.5, 1585.0], [92.6, 1593.0], [92.7, 1602.0], [92.8, 1607.0], [92.9, 1615.0], [93.0, 1623.0], [93.1, 1628.0], [93.2, 1634.0], [93.3, 1639.0], [93.4, 1646.0], [93.5, 1662.0], [93.6, 1666.0], [93.7, 1681.0], [93.8, 1691.0], [93.9, 1698.0], [94.0, 1711.0], [94.1, 1718.0], [94.2, 1732.0], [94.3, 1734.0], [94.4, 1748.0], [94.5, 1767.0], [94.6, 1776.0], [94.7, 1790.0], [94.8, 1815.0], [94.9, 1819.0], [95.0, 1828.0], [95.1, 1839.0], [95.2, 1851.0], [95.3, 1859.0], [95.4, 1872.0], [95.5, 1885.0], [95.6, 1904.0], [95.7, 1923.0], [95.8, 1935.0], [95.9, 1942.0], [96.0, 1964.0], [96.1, 1976.0], [96.2, 1998.0], [96.3, 2001.0], [96.4, 2016.0], [96.5, 2025.0], [96.6, 2050.0], [96.7, 2078.0], [96.8, 2092.0], [96.9, 2115.0], [97.0, 2140.0], [97.1, 2153.0], [97.2, 2181.0], [97.3, 2214.0], [97.4, 2271.0], [97.5, 2283.0], [97.6, 2319.0], [97.7, 2330.0], [97.8, 2350.0], [97.9, 2381.0], [98.0, 2413.0], [98.1, 2436.0], [98.2, 2485.0], [98.3, 2517.0], [98.4, 2565.0], [98.5, 2604.0], [98.6, 2654.0], [98.7, 2710.0], [98.8, 2734.0], [98.9, 2803.0], [99.0, 2955.0], [99.1, 2998.0], [99.2, 3084.0], [99.3, 3198.0], [99.4, 3317.0], [99.5, 3493.0], [99.6, 3914.0], [99.7, 4016.0], [99.8, 4090.0], [99.9, 4247.0], [100.0, 4775.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1174.0, "series": [{"data": [[0.0, 39.0], [600.0, 331.0], [700.0, 328.0], [800.0, 258.0], [900.0, 212.0], [1000.0, 198.0], [1100.0, 173.0], [1200.0, 152.0], [1300.0, 134.0], [1400.0, 116.0], [1500.0, 88.0], [100.0, 1174.0], [1600.0, 66.0], [1700.0, 44.0], [1800.0, 45.0], [1900.0, 33.0], [2000.0, 32.0], [2100.0, 21.0], [2300.0, 21.0], [2200.0, 17.0], [2400.0, 16.0], [2500.0, 12.0], [2600.0, 10.0], [2700.0, 12.0], [2800.0, 4.0], [2900.0, 7.0], [3000.0, 5.0], [3100.0, 6.0], [200.0, 603.0], [3200.0, 3.0], [3300.0, 6.0], [3400.0, 1.0], [3500.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 5.0], [4000.0, 8.0], [4200.0, 3.0], [4100.0, 4.0], [4300.0, 2.0], [300.0, 358.0], [4700.0, 1.0], [400.0, 334.0], [500.0, 387.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 475.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2514.0, "series": [{"data": [[0.0, 2514.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2283.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 475.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.5, "minX": 1.60232208E12, "maxY": 12.0, "series": [{"data": [[1.60232232E12, 12.0], [1.60232238E12, 12.0], [1.6023222E12, 12.0], [1.60232226E12, 12.0], [1.60232208E12, 10.757575757575754], [1.60232214E12, 12.0], [1.60232244E12, 6.5]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232244E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 684.2071986288337, "minX": 1.0, "maxY": 4314.0, "series": [{"data": [[4.0, 2214.0], [8.0, 2187.5], [2.0, 3940.0], [1.0, 4285.0], [9.0, 1517.3333333333333], [5.0, 2026.0], [10.0, 2105.0], [11.0, 1691.0], [6.0, 1400.3333333333333], [12.0, 684.2071986288337], [3.0, 4016.0], [7.0, 4314.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.979704097116842, 690.4814112291367]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 102.61666666666666, "minX": 1.60232208E12, "maxY": 903430.7666666667, "series": [{"data": [[1.60232232E12, 820416.5333333333], [1.60232238E12, 903430.7666666667], [1.6023222E12, 890920.3], [1.60232226E12, 779320.7833333333], [1.60232208E12, 12271.0], [1.60232214E12, 869340.0], [1.60232244E12, 16077.866666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232232E12, 9627.75], [1.60232238E12, 8430.85], [1.6023222E12, 7932.7], [1.60232226E12, 11647.65], [1.60232208E12, 262.15], [1.60232214E12, 7575.833333333333], [1.60232244E12, 102.61666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232244E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 365.2121212121212, "minX": 1.60232208E12, "maxY": 4110.333333333333, "series": [{"data": [[1.60232232E12, 654.5041246562774], [1.60232238E12, 734.7400835073064], [1.6023222E12, 774.4101433296587], [1.60232226E12, 530.3961456102778], [1.60232208E12, 365.2121212121212], [1.60232214E12, 822.3241379310335], [1.60232244E12, 4110.333333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232244E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 364.8484848484849, "minX": 1.60232208E12, "maxY": 4109.916666666666, "series": [{"data": [[1.60232232E12, 654.1805682859765], [1.60232238E12, 734.3590814196248], [1.6023222E12, 773.9658213891953], [1.60232226E12, 530.173447537474], [1.60232208E12, 364.8484848484849], [1.60232214E12, 821.8586206896556], [1.60232244E12, 4109.916666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232244E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005747126436781609, "minX": 1.60232208E12, "maxY": 3.8181818181818175, "series": [{"data": [[1.60232232E12, 0.010082493125572868], [1.60232238E12, 0.007306889352818376], [1.6023222E12, 0.012127894156560102], [1.60232226E12, 0.019271948608137066], [1.60232208E12, 3.8181818181818175], [1.60232214E12, 0.005747126436781609], [1.60232244E12, 0.4166666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232244E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 64.0, "minX": 1.60232208E12, "maxY": 4775.0, "series": [{"data": [[1.60232232E12, 4775.0], [1.60232238E12, 4177.0], [1.6023222E12, 2803.0], [1.60232226E12, 4247.0], [1.60232208E12, 750.0], [1.60232214E12, 3354.0], [1.60232244E12, 4314.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232232E12, 98.82799973964691], [1.60232238E12, 130.63099977135658], [1.6023222E12, 115.17199978351593], [1.60232226E12, 74.0], [1.60232208E12, 76.0], [1.60232214E12, 110.0], [1.60232244E12, 3931.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232232E12, 100.62160020828247], [1.60232238E12, 131.0], [1.6023222E12, 115.98920008659363], [1.60232226E12, 74.87980013370515], [1.60232208E12, 76.0], [1.60232214E12, 110.62290008306503], [1.60232244E12, 3931.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232232E12, 99.74799973964691], [1.60232238E12, 131.0], [1.6023222E12, 115.62599989175797], [1.60232226E12, 74.31899983286857], [1.60232208E12, 76.0], [1.60232214E12, 110.2744998961687], [1.60232244E12, 3931.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232232E12, 89.0], [1.60232238E12, 123.0], [1.6023222E12, 108.0], [1.60232226E12, 64.0], [1.60232208E12, 76.0], [1.60232214E12, 106.0], [1.60232244E12, 3931.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232232E12, 531.0], [1.60232238E12, 626.5], [1.6023222E12, 691.0], [1.60232226E12, 285.0], [1.60232208E12, 288.0], [1.60232214E12, 706.5], [1.60232244E12, 4075.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232244E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 136.0, "minX": 1.0, "maxY": 4285.0, "series": [{"data": [[2.0, 3968.0], [3.0, 3306.0], [4.0, 2184.5], [5.0, 1953.5], [6.0, 1791.5], [7.0, 1398.0], [8.0, 1263.5], [9.0, 1253.0], [10.0, 1109.0], [11.0, 1091.0], [12.0, 878.0], [13.0, 930.0], [14.0, 845.0], [15.0, 727.5], [16.0, 696.5], [17.0, 694.5], [18.0, 773.0], [19.0, 661.0], [20.0, 574.0], [21.0, 553.0], [22.0, 605.5], [23.0, 553.0], [24.0, 432.0], [25.0, 436.5], [26.0, 461.0], [27.0, 412.5], [28.0, 367.5], [29.0, 372.0], [30.0, 234.0], [31.0, 426.0], [33.0, 331.0], [32.0, 348.0], [34.0, 357.5], [35.0, 344.0], [36.0, 159.0], [37.0, 272.0], [38.0, 294.5], [39.0, 220.0], [40.0, 255.0], [41.0, 144.0], [42.0, 261.0], [43.0, 226.5], [45.0, 156.0], [44.0, 161.0], [46.0, 239.5], [49.0, 151.0], [48.0, 247.0], [51.0, 230.0], [50.0, 228.5], [66.0, 161.0], [72.0, 136.0], [1.0, 4285.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 72.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 136.0, "minX": 1.0, "maxY": 4285.0, "series": [{"data": [[2.0, 3967.5], [3.0, 3306.0], [4.0, 2183.0], [5.0, 1952.5], [6.0, 1789.5], [7.0, 1395.5], [8.0, 1261.5], [9.0, 1250.0], [10.0, 1108.5], [11.0, 1089.0], [12.0, 877.0], [13.0, 930.0], [14.0, 845.0], [15.0, 725.5], [16.0, 696.0], [17.0, 694.5], [18.0, 773.0], [19.0, 661.0], [20.0, 574.0], [21.0, 553.0], [22.0, 605.5], [23.0, 553.0], [24.0, 432.0], [25.0, 436.0], [26.0, 461.0], [27.0, 412.5], [28.0, 367.5], [29.0, 372.0], [30.0, 234.0], [31.0, 426.0], [33.0, 331.0], [32.0, 348.0], [34.0, 357.5], [35.0, 344.0], [36.0, 159.0], [37.0, 272.0], [38.0, 294.5], [39.0, 220.0], [40.0, 255.0], [41.0, 144.0], [42.0, 261.0], [43.0, 226.5], [45.0, 156.0], [44.0, 161.0], [46.0, 239.0], [49.0, 151.0], [48.0, 246.5], [51.0, 230.0], [50.0, 228.0], [66.0, 161.0], [72.0, 136.0], [1.0, 4285.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 72.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.75, "minX": 1.60232208E12, "maxY": 23.35, "series": [{"data": [[1.60232232E12, 18.183333333333334], [1.60232238E12, 15.966666666666667], [1.6023222E12, 15.116666666666667], [1.60232226E12, 23.35], [1.60232208E12, 0.75], [1.60232214E12, 14.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232238E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.60232208E12, "maxY": 23.35, "series": [{"data": [[1.60232232E12, 18.183333333333334], [1.60232238E12, 15.966666666666667], [1.6023222E12, 15.116666666666667], [1.60232226E12, 23.35], [1.60232208E12, 0.55], [1.60232214E12, 14.5], [1.60232244E12, 0.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232244E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.60232208E12, "maxY": 23.35, "series": [{"data": [[1.60232232E12, 18.183333333333334], [1.60232238E12, 15.966666666666667], [1.6023222E12, 15.116666666666667], [1.60232226E12, 23.35], [1.60232208E12, 0.55], [1.60232214E12, 14.5], [1.60232244E12, 0.2]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232244E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.60232208E12, "maxY": 23.35, "series": [{"data": [[1.60232232E12, 18.183333333333334], [1.60232238E12, 15.966666666666667], [1.6023222E12, 15.116666666666667], [1.60232226E12, 23.35], [1.60232208E12, 0.55], [1.60232214E12, 14.5], [1.60232244E12, 0.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232244E12, "title": "Total Transactions Per Second"}},
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

